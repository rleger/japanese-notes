/* Sync: keeps practice history in one private GitHub gist so phone and laptop share it.
   Only this browser and api.github.com see the key. Merge is per card, so nothing is lost
   when both devices were used offline. */
(function(root){
  var FILE = "jp-notes-progress.json", DESC = "日本語ノート · practice history (synced by the app)";
  var DATA_KEYS = ["srs", "days", "favlog", "kanastats", "newday"];
  var PREF_KEYS = ["fc", "kanacfg", "pricecfg", "quiz", "noro", "ruby"];

  /* ---------- pure merge (also used by the tests) ---------- */
  function mergeSnap(a, b){
    a = a || {}; b = b || {};
    var out = { v: 1 };
    var sa = a.srs || {}, sb = b.srs || {}, s = {};
    Object.keys(sa).concat(Object.keys(sb)).forEach(function(k){
      var x = sa[k], y = sb[k];
      if (!x){ s[k] = y; return; } if (!y){ s[k] = x; return; }
      s[k] = (y[2] > x[2] || (y[2] === x[2] && y[1] > x[1])) ? y : x;   /* more reviews wins, then later due */
    });
    out.srs = s;
    var days = {}; (a.days || []).concat(b.days || []).forEach(function(d){ days[d] = 1; });
    out.days = Object.keys(days).sort().slice(-400);
    var fa = a.favlog || {}, fb = b.favlog || {}, f = {};
    Object.keys(fa).concat(Object.keys(fb)).forEach(function(k){
      var x = fa[k], y = fb[k];
      f[k] = !x ? y : !y ? x : (y[1] > x[1] ? y : x);                     /* latest star / unstar wins */
    });
    out.favlog = f;
    var ka = a.kanastats || {}, kb = b.kanastats || {}, ks = {};
    Object.keys(ka).concat(Object.keys(kb)).forEach(function(k){
      var x = ka[k] || [0, 0], y = kb[k] || [0, 0];
      ks[k] = [Math.max(x[0], y[0]), Math.max(x[1], y[1])];
    });
    out.kanastats = ks;
    var na = a.newday, nb = b.newday;
    out.newday = !na ? nb || null : !nb ? na : na.d === nb.d ? { d: na.d, n: Math.max(na.n, nb.n) } : (na.d > nb.d ? na : nb);
    var pa = a.prefs, pb = b.prefs;
    out.prefs = !pa ? pb || null : !pb ? pa : ((pb.t || 0) > (pa.t || 0) ? pb : pa);
    return out;
  }
  function canon(snap){
    var s = mergeSnap(snap, {});
    function sortObj(o){ if (!o || typeof o !== "object" || Array.isArray(o)) return o; var r = {}; Object.keys(o).sort().forEach(function(k){ r[k] = sortObj(o[k]); }); return r; }
    return JSON.stringify(sortObj(s));
  }
  root.JPSyncCore = { merge: mergeSnap, canon: canon };
  if (typeof document === "undefined") return;     /* node tests stop here */

  var A = root.APP; if (!A) return;
  var store = A.store, toast = A.toast, esc = A.esc;
  var LS = { get: function(k){ try { return localStorage.getItem(k); } catch(e){ return null; } }, set: function(k, v){ try { localStorage.setItem(k, v); } catch(e){} } };
  function J(k, d){ try { var v = JSON.parse(LS.get(k) || "null"); return v == null ? d : v; } catch(e){ return d; } }

  /* favorites need dates so an un-star on one device beats an old star on the other */
  if (!LS.get("favlog")){
    var fl = {}; J("favs", []).forEach(function(k){ fl[k] = [1, 1]; }); LS.set("favlog", JSON.stringify(fl));
  }

  function readLocal(){
    var p = { t: +(LS.get("prefs_t") || 0) };
    PREF_KEYS.forEach(function(k){ var v = LS.get(k); if (v != null) p[k] = v; });
    return { v: 1, srs: J("srs", {}), days: J("days", []), favlog: J("favlog", {}), kanastats: J("kanastats", {}), newday: J("newday", null), prefs: p };
  }
  function writeLocal(s){
    LS.set("srs", JSON.stringify(s.srs || {}));
    LS.set("days", JSON.stringify(s.days || []));
    LS.set("favlog", JSON.stringify(s.favlog || {}));
    LS.set("favs", JSON.stringify(Object.keys(s.favlog || {}).filter(function(k){ return s.favlog[k][0]; })));
    LS.set("kanastats", JSON.stringify(s.kanastats || {}));
    if (s.newday) LS.set("newday", JSON.stringify(s.newday));
    if (s.prefs){ PREF_KEYS.forEach(function(k){ if (s.prefs[k] != null) LS.set(k, s.prefs[k]); }); LS.set("prefs_t", String(s.prefs.t || 0)); }
  }

  /* watch every save the app makes */
  var origSet = store.set;
  store.set = function(k, v){
    origSet.call(store, k, v);
    if (k === "favs") recordFavs(v);
    if (PREF_KEYS.indexOf(k) > -1) LS.set("prefs_t", String(Date.now()));
    if (DATA_KEYS.indexOf(k) > -1 || PREF_KEYS.indexOf(k) > -1 || k === "favs") schedulePush();
  };
  function recordFavs(v){
    var now = Date.now(), log = J("favlog", {}), on = {};
    try { (JSON.parse(v) || []).forEach(function(k){ on[k] = 1; }); } catch(e){ return; }
    Object.keys(on).forEach(function(k){ if (!log[k] || !log[k][0]) log[k] = [1, now]; });
    Object.keys(log).forEach(function(k){ if (log[k][0] && !on[k]) log[k] = [0, now]; });
    LS.set("favlog", JSON.stringify(log));
  }

  /* ---------- GitHub gist ---------- */
  function token(){ return LS.get("sync_token") || ""; }
  function api(method, path, body, keepalive){
    return fetch("https://api.github.com" + path, {
      method: method, cache: "no-store", keepalive: !!keepalive,
      headers: { "Authorization": "Bearer " + token(), "Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" },
      body: body ? JSON.stringify(body) : undefined
    }).then(function(r){
      if (r.status === 401) throw { kind: "auth" };
      if (r.status === 403 || r.status === 404) throw { kind: r.status === 404 ? "missing" : "forbidden" };
      if (!r.ok) throw { kind: "http", status: r.status };
      return r.status === 204 ? null : r.json();
    }, function(){ throw { kind: "net" }; });
  }
  function findOrCreate(){
    var id = LS.get("sync_gist"); if (id) return Promise.resolve(id);
    function page(n){
      return api("GET", "/gists?per_page=100&page=" + n).then(function(list){
        var hit = (list || []).filter(function(g){ return g.files && g.files[FILE]; })[0];
        if (hit) return hit.id;
        if (list && list.length === 100 && n < 5) return page(n + 1);
        var files = {}; files[FILE] = { content: JSON.stringify(readLocal()) };
        return api("POST", "/gists", { description: DESC, "public": false, files: files }).then(function(g){ return g.id; });
      });
    }
    return page(1).then(function(id){ LS.set("sync_gist", id); return id; });
  }
  function fetchRemote(id){
    return api("GET", "/gists/" + id).then(function(g){
      var f = g.files && g.files[FILE]; if (!f) return {};
      if (f.truncated && f.raw_url) return fetch(f.raw_url, { cache: "no-store" }).then(function(r){ return r.json(); });
      try { return JSON.parse(f.content || "{}"); } catch(e){ return {}; }
    });
  }
  function save(id, snap, keepalive){
    var files = {}; files[FILE] = { content: JSON.stringify(snap) };
    return api("PATCH", "/gists/" + id, { files: files }, keepalive);
  }

  /* ---------- sync cycle ---------- */
  var busy = false, pushTimer = null, lastErr = null;
  function idle(){
    var st = document.getElementById("study"), play = document.getElementById("fcPlay");
    return (!st || st.hidden) && (!play || play.hidden) && !document.getElementById("kStop") && !document.getElementById("pStop");
  }
  function setStatus(state, msg){
    lastErr = state === "error" ? msg : null;
    var b = document.getElementById("syncBtn"); if (b) b.setAttribute("data-state", state);
    renderSheet();
  }
  /* pull, merge, push: one round trip in each direction */
  function syncNow(opts){
    opts = opts || {};
    if (!token()) return Promise.resolve(false);
    if (busy) return Promise.resolve(false);
    if (!navigator.onLine){ setStatus("off"); return Promise.resolve(false); }
    busy = true; setStatus("busy");
    var before = canon(readLocal()), gid;
    return findOrCreate().then(function(id){ gid = id; return fetchRemote(id); })
      .then(function(remote){
        var local = readLocal(), merged = mergeSnap(local, remote);
        writeLocal(merged);
        var changedHere = canon(merged) !== before;
        var p = canon(merged) !== canon(remote) ? save(gid, merged) : Promise.resolve();
        return p.then(function(){ return changedHere; });
      })
      .then(function(changedHere){
        busy = false; LS.set("sync_last", String(Date.now())); setStatus("ok");
        if (changedHere && opts.applyNow !== false) applyChanges();
        return true;
      })
      .catch(function(e){
        busy = false;
        if (e && e.kind === "missing" && LS.get("sync_gist")){ LS.set("sync_gist", ""); try { localStorage.removeItem("sync_gist"); } catch(x){} }
        var msg = !e ? "Something went wrong" :
          e.kind === "auth" ? "GitHub refused the key. Check it or create a new one." :
          e.kind === "forbidden" ? "The key can’t write gists. It needs the “gist” permission." :
          e.kind === "net" ? "Couldn’t reach GitHub. It will retry." : "GitHub error " + (e.status || "");
        setStatus(e && e.kind === "net" ? "off" : "error", msg);
        return false;
      });
  }
  /* new data from the other device: reload when nothing is in progress */
  var pendingApply = false;
  function applyChanges(){
    if (!idle()){ pendingApply = true; return; }
    var last = +(sessionStorage.getItem("sync_reload") || 0);
    if (Date.now() - last < 15000){ toast("Synced", 1200); return; }
    try { sessionStorage.setItem("sync_reload", String(Date.now())); } catch(e){}
    location.reload();
  }
  function schedulePush(){
    if (!token()) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(function(){ syncNow({ applyNow: false }); }, 4000);
  }
  /* leaving the app: send what's left right away */
  document.addEventListener("visibilitychange", function(){
    if (!token()) return;
    if (document.hidden){
      if (pushTimer){ clearTimeout(pushTimer); pushTimer = null; var id = LS.get("sync_gist"); if (id) save(id, readLocal(), true).catch(function(){}); }
    } else syncNow();
  });
  window.addEventListener("online", function(){ syncNow(); });
  setInterval(function(){ if (pendingApply && idle()){ pendingApply = false; applyChanges(); } }, 2000);

  /* ---------- backup file ---------- */
  function download(){
    var blob = new Blob([JSON.stringify(readLocal(), null, 1)], { type: "application/json" });
    var a = document.createElement("a"), d = new Date();
    a.href = URL.createObjectURL(blob);
    a.download = "jp-notes-backup-" + d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + ".json";
    document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }
  function importFile(file){
    var rd = new FileReader();
    rd.onload = function(){
      try {
        var snap = JSON.parse(rd.result);
        if (!snap || typeof snap !== "object" || !("srs" in snap)) throw 0;
        writeLocal(mergeSnap(readLocal(), snap));
        toast("Backup merged", 1500);
        setTimeout(function(){ if (token()) syncNow({ applyNow: false }).then(function(){ location.reload(); }); else location.reload(); }, 600);
      } catch(e){ toast("That file isn’t a backup from this app.", 2600); }
    };
    rd.readAsText(file);
  }

  /* ---------- UI: cloud button + sheet ---------- */
  var CLOUD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.5 19H8a5 5 0 1 1 .9-9.9A6 6 0 0 1 20 11.5a3.75 3.75 0 0 1-2.5 7.5z"/></svg>';
  var btn = document.createElement("button");
  btn.type = "button"; btn.className = "refresh syncbtn"; btn.id = "syncBtn"; btn.setAttribute("aria-label", "Sync between devices");
  btn.innerHTML = CLOUD + '<span class="sdot" aria-hidden="true"></span>';
  var theme = document.getElementById("themeBtn"); if (theme) theme.parentNode.insertBefore(btn, theme);

  var sheet = document.createElement("div");
  sheet.className = "sheet"; sheet.id = "syncSheet"; sheet.hidden = true;
  sheet.setAttribute("role", "dialog"); sheet.setAttribute("aria-modal", "true"); sheet.setAttribute("aria-label", "Sync between devices");
  document.body.appendChild(sheet);
  function ago(t){
    if (!t) return "never";
    var s = Math.round((Date.now() - t) / 1000);
    return s < 60 ? "just now" : s < 3600 ? Math.round(s / 60) + " min ago" : s < 86400 ? Math.round(s / 3600) + " h ago" : new Date(t).toLocaleDateString();
  }
  function renderSheet(){
    if (sheet.hidden) return;
    var on = !!token(), st = btn.getAttribute("data-state") || (on ? "ok" : "none");
    var h = '<div class="sheet-card"><div class="sheet-head"><h2>Sync between devices</h2><button type="button" class="st-icon" data-sync="close" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>';
    if (on){
      h += '<p class="sync-state s-' + st + '">' + (st === "busy" ? "Syncing…" : st === "error" ? esc(lastErr || "Sync error") : st === "off" ? "Offline. Your practice is saved here and will sync later." : "Synced " + ago(+(LS.get("sync_last") || 0))) + '</p>' +
        '<p class="hint">Cards, due dates, streak, favorites, kana stats and Quiz / ro / あa settings are shared through a private gist on your GitHub account.</p>' +
        '<div class="sheet-row"><button type="button" class="fc-start" data-sync="now">Sync now</button></div>' +
        '<button type="button" class="link" data-sync="off">Disconnect this device</button>';
    } else {
      h += '<p class="hint">Paste a GitHub key that only allows <b>gist</b>. Use the same key on your phone and your laptop.</p>' +
        '<ol class="sync-steps"><li>On github.com: Settings → Developer settings → Personal access tokens → <b>Tokens (classic)</b> → Generate new token (classic).</li>' +
        '<li>Name it “jp notes”, pick an expiration, tick only <b>gist</b>, then Generate.</li><li>Copy the key (starts with ghp_) and paste it here.</li></ol>' +
        '<input type="password" id="syncTok" class="sync-input" placeholder="ghp_…" autocomplete="off" autocapitalize="off" spellcheck="false">' +
        '<div class="sheet-row"><button type="button" class="fc-start" data-sync="connect">Connect</button></div>';
    }
    h += '<div class="sheet-sep"></div><p class="hint" style="margin-bottom:8px">Backup file (works without GitHub)</p>' +
      '<div class="sheet-two"><button type="button" class="wbtn" data-sync="dl">Download backup</button><button type="button" class="wbtn" data-sync="imp">Import backup</button></div>' +
      '<input type="file" id="syncFile" accept="application/json,.json" hidden></div>';
    sheet.innerHTML = h;
  }
  function openSheet(){ sheet.hidden = false; document.documentElement.classList.add("st-lock"); renderSheet(); }
  function closeSheet(){ sheet.hidden = true; document.documentElement.classList.remove("st-lock"); }
  btn.addEventListener("click", openSheet);
  sheet.addEventListener("click", function(e){
    if (e.target === sheet){ closeSheet(); return; }
    var b = e.target.closest("[data-sync]"); if (!b) return;
    switch (b.getAttribute("data-sync")){
      case "close": closeSheet(); break;
      case "now": syncNow(); break;
      case "connect":
        var v = (document.getElementById("syncTok").value || "").trim();
        if (!/^(ghp_|github_pat_)[A-Za-z0-9_]{20,}$/.test(v)){ toast("That doesn’t look like a GitHub key (ghp_…).", 2600); return; }
        LS.set("sync_token", v); try { localStorage.removeItem("sync_gist"); } catch(x){}
        renderSheet();
        syncNow().then(function(ok){ if (ok) toast("Connected. This device now syncs.", 2200); else if (lastErr) { /* keep the key so it can retry */ } });
        break;
      case "off":
        ["sync_token", "sync_gist", "sync_last"].forEach(function(k){ try { localStorage.removeItem(k); } catch(x){} });
        btn.removeAttribute("data-state"); toast("This device no longer syncs. Your history stays here.", 2400); renderSheet(); break;
      case "dl": download(); break;
      case "imp": document.getElementById("syncFile").click(); break;
    }
  });
  sheet.addEventListener("change", function(e){ if (e.target.id === "syncFile" && e.target.files[0]) importFile(e.target.files[0]); });
  document.addEventListener("keydown", function(e){ if (!sheet.hidden && e.key === "Escape") closeSheet(); });

  if (token()){ btn.setAttribute("data-state", "ok"); setTimeout(function(){ syncNow(); }, 300); }
})(typeof window !== "undefined" ? window : globalThis);
