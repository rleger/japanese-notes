/* Learn hiragana: a few new characters a day, most used first, with spaced reviews,
   a weekly checkup, stroke order and examples taken from your own lessons. */
(function(){
  var A = window.APP; if (!A) return;
  var N = A.N, esc = A.esc, store = A.store, toast = A.toast, say = A.say;
  function $(id){ return document.getElementById(id); }
  function J(k, d){ try { var v = JSON.parse(store.get(k) || "null"); return v == null ? d : v; } catch(e){ return d; } }
  function shuffle(a){ for (var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  var SPK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>';
  var CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';

  /* ---------- the path: most used first (approximate frequency in everyday Japanese text) ---------- */
  var BASE = "いうんしかのとたてくなにきはこるすまもつおらりをさあれちせけよそえわみめひやろほふむへねゆぬ".split("");
  var GROUPS = [
    { chars: ["が","ぎ","ぐ","げ","ご"], rule: "Two ticks ゛ make か (ka) sound hard: が (ga)." },
    { chars: ["だ","で","ど"], rule: "Two ticks ゛ on た (ta): だ (da), で (de), ど (do). ぢ and づ exist but are rare." },
    { chars: ["ざ","じ","ず","ぜ","ぞ"], rule: "Two ticks ゛ on さ (sa): ざ (za). Note じ (ji), not “zi”." },
    { chars: ["ば","び","ぶ","べ","ぼ"], rule: "Two ticks ゛ on は (ha): ば (ba)." },
    { chars: ["ぱ","ぴ","ぷ","ぺ","ぽ"], rule: "A small circle ゜ on は (ha): ぱ (pa)." }
  ];
  var UNITS = BASE.map(function(c){ return { chars: [c] }; }).concat(GROUPS);
  var RO = {}, SL = {};
  N.hiragana.concat(N.dakuten).forEach(function(r){ r[1].forEach(function(x){ if (x){ RO[x[0]] = x[1]; if (x[2] && x[2] !== "rare") SL[x[0]] = x[2]; } }); });
  var ALL = []; UNITS.forEach(function(u){ ALL = ALL.concat(u.chars); });
  var LOOK = { "あ":"おめぬ", "お":"あむ", "め":"ぬあ", "ぬ":"めね", "ね":"れわぬ", "れ":"ねわ", "わ":"ねれ", "る":"ろ", "ろ":"るら", "さ":"ちき", "ち":"さら", "き":"さま", "こ":"いに", "い":"こり", "り":"いけ", "は":"ほけ", "ほ":"はま", "け":"はり", "ま":"もほ", "も":"ましま", "し":"つ", "つ":"しう", "う":"らつ", "ら":"うち", "く":"へ", "へ":"く", "そ":"ろ", "ゆ":"ぬ", "む":"お", "た":"な", "な":"た", "に":"こた" };
  function baseOf(c){ var b = c.normalize("NFD").charAt(0); return b !== c ? b : null; }

  /* ---------- state (synced) ---------- */
  var KL = J("kl", {});                     /* char -> [box, due, reps, lapses] */
  var CFG = J("klcfg", { per: 4 });
  var INTERVALS = [0, 1, 3, 7, 14, 30, 60], DAY = 864e5;
  function today(){ var d = new Date(); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function midnight(){ var d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); }
  function inDays(n){ return midnight() + n * DAY; }
  function reload(){ KL = J("kl", {}); CFG = J("klcfg", { per: 4 }); }
  function save(){ store.set("kl", JSON.stringify(KL)); }
  function day(){ var d = J("klday", null); return d && d.d === today() ? d.n : 0; }
  function addDay(n){ store.set("klday", JSON.stringify({ d: today(), n: day() + n })); }
  function lastCheck(){ var c = J("klcheck", null); return c && c.d || ""; }
  function learned(c){ return !!KL[c]; }
  function due(){ var now = Date.now(); return Object.keys(KL).filter(function(c){ return KL[c][1] <= now; }); }
  function learnedList(){ return ALL.filter(learned); }
  function level(c){ var s = KL[c]; return !s ? "new" : s[0] >= 4 ? "known" : "learning"; }
  function nextUnits(){
    var budget = CFG.per - day(), out = [];
    for (var i = 0; i < UNITS.length; i++){
      var u = UNITS[i];
      if (u.chars.every(learned)) continue;
      if (u.chars.length > 1){ if (!out.length && day() === 0) out.push(u); break; }   /* a tick group is a whole day */
      if (budget <= 0) break;
      out.push(u); budget--;
    }
    return out;
  }
  function checkDue(){
    var n = learnedList().length; if (n < 6) return false;
    var last = lastCheck();
    if (!last){ var first = Object.keys(KL).length ? Math.min.apply(null, Object.keys(KL).map(function(c){ return KL[c][1]; })) : Date.now(); return Date.now() - first > 6 * DAY; }
    return (Date.parse(today()) - Date.parse(last)) / DAY >= 7;
  }

  /* ---------- examples from your own words ---------- */
  var VOCAB = (function(){
    var seen = {}, out = [];
    function add(ja, ro, en){ var k = String(ja).replace(/[。？?！!、\s]/g, ""); if (!k || seen[k] || /[一-龯○]/.test(ja)) return; seen[k] = 1; out.push({ ja: ja, ro: ro, en: en, k: k }); }
    (N.lessons || []).forEach(function(L){ (L.words || []).concat(L.sentences || []).forEach(function(w){ add(w[0], w[2], w[3]); }); });
    (N.phraseGroups || []).forEach(function(g){ g.items.forEach(function(w){ add(w[0], w[2], w[3]); }); });
    return out;
  })();
  var SMALL = { "ゃ":"や", "ゅ":"ゆ", "ょ":"よ", "っ":"つ", "ぁ":"あ", "ぃ":"い", "ぅ":"う", "ぇ":"え", "ぉ":"お" };
  function canRead(k, extra){
    for (var i = 0; i < k.length; i++){
      var c = k[i], b = SMALL[c] || c;
      if (/[ぁ-ゖ]/.test(b)){ if (!learned(b) && !(extra && extra[b])) return false; }
      else if (!/[・〜~…ー]/.test(c)) return false;              /* katakana or anything else: not yet */
    }
    return true;
  }
  function readableCount(){ return VOCAB.filter(function(v){ return canRead(v.k); }).length; }
  function examples(chars, extra){
    var list = VOCAB.filter(function(v){ return chars.some(function(c){ return v.k.indexOf(c) > -1; }); });
    list.forEach(function(v){ v._r = canRead(v.k, extra) ? 0 : 1; v._l = v.k.length + (/[ァ-ヺー]/.test(v.k) ? 4 : 0); });
    list.sort(function(a, b){ return a._r - b._r || a._l - b._l; });
    return list.slice(0, 3);
  }
  function hit(ja, chars){ return esc(ja).replace(new RegExp("[" + chars.join("") + "]", "g"), function(m){ return '<b class="kl-hit">' + m + '</b>'; }); }
  function exHTML(chars, extra){
    var ex = examples(chars, extra);
    if (!ex.length) return '<p class="kl-noex">Not in your lessons yet. You will meet it soon.</p>';
    return '<div class="kl-ex"><span class="kl-lab">In your words</span>' + ex.map(function(v){
      return '<div class="kl-exrow"><div><span class="kl-exja" lang="ja">' + hit(v.ja, chars) + '</span><span class="kl-exro">' + esc(v.ro) + '</span><span class="kl-exen">' + esc(v.en) + '</span></div>' +
        (v._r === 0 ? '<span class="kl-can" title="You can read all of it">✓ readable</span>' : '') +
        '<button type="button" class="speak mini" data-say="' + esc(v.ja) + '" aria-label="Play">' + SPK + '</button></div>';
    }).join("") + '</div>';
  }

  /* ---------- strokes ---------- */
  var timers = [];
  function clearT(){ timers.forEach(clearTimeout); timers = []; }
  function strokeSVG(ch, ghost){
    var d = window.STROKES && window.STROKES[ch]; if (!d) return "";
    var h = '<g class="wgrid"><rect x="1" y="1" width="107" height="107" rx="6"/><line x1="54.5" y1="2" x2="54.5" y2="107"/><line x1="2" y1="54.5" x2="107" y2="54.5"/></g>';
    if (ghost !== false) h += '<g class="wghost">' + d.d.map(function(p){ return '<path d="' + p + '"/>'; }).join("") + '</g>';
    h += '<g class="wink">' + d.d.map(function(p){ return '<path d="' + p + '"/>'; }).join("") + '</g>';
    h += '<g class="wnum">' + d.s.map(function(pt, i){ return '<g><circle cx="' + pt[0] + '" cy="' + pt[1] + '" r="5.2"/><text x="' + pt[0] + '" y="' + (pt[1] + 2.1) + '">' + (i + 1) + '</text></g>'; }).join("") + '</g>';
    return '<svg viewBox="0 0 109 109" aria-hidden="true">' + h + '</svg>';
  }
  function animate(svg, delay){
    if (!svg) return;
    var inks = svg.querySelectorAll(".wink path"), nums = svg.querySelectorAll(".wnum g"), t = delay || 250;
    Array.prototype.forEach.call(inks, function(p){ var L = p.getTotalLength(); p._L = L; p.style.transition = "none"; p.style.strokeDasharray = L + " " + L; p.style.strokeDashoffset = L; });
    Array.prototype.forEach.call(nums, function(g){ g.style.transition = "none"; g.style.opacity = 0; });
    svg.getBoundingClientRect();
    Array.prototype.forEach.call(inks, function(p, i){
      var dur = Math.max(420, p._L * 12);
      timers.push(setTimeout(function(){ nums[i].style.transition = "opacity .2s"; nums[i].style.opacity = 1; p.style.transition = "stroke-dashoffset " + dur + "ms ease-in-out"; p.style.strokeDashoffset = 0; }, t));
      t += dur + 220;
    });
  }
  function strokes(ch){ var d = window.STROKES && window.STROKES[ch]; return d ? d.d.length : 0; }

  /* tracing pad */
  var pad = { ctx: null, on: false, last: null };
  function sizePad(){
    var c = $("klCanvas"), box = c && c.parentNode; if (!c) return;
    var r = box.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
    c.width = Math.round(r.width * dpr); c.height = Math.round(r.height * dpr);
    pad.ctx = c.getContext("2d"); pad.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    pad.ctx.lineCap = "round"; pad.ctx.lineJoin = "round"; pad.ctx.lineWidth = Math.max(6, r.width * .045);
    pad.ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--kana").trim() || "#1e3a8a";
  }
  function padPt(e, c){ var r = c.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
  document.addEventListener("pointerdown", function(e){
    if (e.target.id !== "klCanvas") return;
    e.preventDefault(); pad.on = true; pad.last = padPt(e, e.target);
    try { e.target.setPointerCapture(e.pointerId); } catch(x){}
    var x = pad.ctx; x.beginPath(); x.arc(pad.last.x, pad.last.y, x.lineWidth / 2, 0, Math.PI * 2); x.fillStyle = x.strokeStyle; x.fill();
    if (S && S.drew === false) S.drew = true;
  });
  document.addEventListener("pointermove", function(e){
    if (!pad.on || e.target.id !== "klCanvas") return;
    var p = padPt(e, e.target), x = pad.ctx; x.beginPath(); x.moveTo(pad.last.x, pad.last.y); x.lineTo(p.x, p.y); x.stroke(); pad.last = p;
  });
  function padEnd(){ pad.on = false; }
  document.addEventListener("pointerup", padEnd); document.addEventListener("pointercancel", padEnd);
  function padClear(){ var c = $("klCanvas"); if (c && pad.ctx){ pad.ctx.save(); pad.ctx.setTransform(1, 0, 0, 1, 0, 0); pad.ctx.clearRect(0, 0, c.width, c.height); pad.ctx.restore(); } }

  /* ---------- overlay ---------- */
  var root = document.createElement("div");
  root.className = "study kl-play"; root.id = "klPlay"; root.hidden = true;
  root.setAttribute("role", "dialog"); root.setAttribute("aria-modal", "true"); root.setAttribute("aria-label", "Learn hiragana");
  document.body.appendChild(root);
  var S = null;   /* session */

  function openOverlay(){ root.hidden = false; document.documentElement.classList.add("st-lock"); }
  function closeOverlay(){ clearT(); root.hidden = true; S = null; document.documentElement.classList.remove("st-lock"); render(); }

  function shell(inner, sub){
    var p = S && S.steps ? Math.round(S.i / S.steps.length * 100) : 0;
    root.innerHTML = '<div class="st-top"><span class="st-pos">' + (sub || "") + '</span><button type="button" class="st-icon" data-kl="close" aria-label="Close">' + CLOSE + '</button></div>' +
      (S && S.steps ? '<div class="kl-bar"><span style="width:' + p + '%"></span></div>' : '') +
      '<div class="kl-stage"><div class="kl-card">' + inner + '</div></div>';
    var st = root.querySelector(".kl-stage"); if (st) st.scrollTop = 0;
  }

  /* intro of one new character (or a tick group) */
  function introHTML(u, pos){
    var extra = {}; (S && S.newSet || []).forEach(function(c){ extra[c] = 1; });
    if (u.chars.length > 1){
      var b = baseOf(u.chars[0]);
      return '<span class="kl-tag">' + (pos || 'New') + '</span>' +
        '<p class="kl-rule">' + esc(u.rule) + '</p>' +
        '<div class="kl-group">' + u.chars.map(function(c){ return '<button type="button" class="kl-gc" data-say="' + c + '" data-klstroke="' + c + '"><span class="k" lang="ja">' + c + '</span><span class="r">' + esc(RO[c]) + '</span><span class="b">' + esc(baseOf(c) || "") + ' ' + esc(RO[baseOf(c)] || "") + '</span></button>'; }).join("") + '</div>' +
        '<p class="kl-tip">Same strokes as ' + esc(b) + ' (' + esc(RO[b]) + '), plus the mark top right. Tap one to see it drawn.</p>' +
        exHTML(u.chars, extra);
    }
    var c = u.chars[0], n = strokes(c);
    return '<span class="kl-tag">' + (pos || 'New') + '</span>' +
      '<div class="kl-hero"><span class="kl-big" lang="ja">' + c + '</span><div class="kl-say"><b>' + esc(RO[c]) + '</b>' + (SL[c] ? '<span>sounds like “' + esc(SL[c]) + '”</span>' : '') +
      '<button type="button" class="speak" data-say="' + c + '" aria-label="Play">' + SPK + '</button></div></div>' +
      '<div class="kl-draw"><div class="kl-box" id="klBox">' + strokeSVG(c) + '<canvas id="klCanvas"></canvas></div>' +
      '<div class="kl-dside"><span class="kl-lab">How to write it</span><p class="kl-tip">' + n + ' stroke' + (n > 1 ? 's' : '') + '. Watch the numbers, then trace it with your finger.</p>' +
      '<div class="kl-btns"><button type="button" class="wbtn" data-kl="replay">▶ Replay</button><button type="button" class="wbtn" data-kl="clear">Clear</button></div></div></div>' +
      exHTML([c], extra);
  }
  function showIntro(u, pos){
    shell(introHTML(u, pos) + '<button type="button" class="fc-start" data-kl="next">' + (S.view ? 'Close' : 'Got it, next') + '</button>', S.view ? '' : S.title);
    if (u.chars.length === 1){ sizePad(); animate(root.querySelector("#klBox svg")); setTimeout(function(){ say(u.chars[0]); }, 300); }
    else setTimeout(function(){ say(u.chars.join("、")); }, 300);
  }

  /* questions */
  function distractors(c, n, key){
    var pool = learnedList().concat(S.newSet || []), seen = {}, out = [];
    seen[c] = 1; seen["r" + RO[c]] = 1;
    function add(x){ if (out.length >= n || !x || seen[x] || seen["r" + RO[x]] || !RO[x]) return; seen[x] = 1; seen["r" + RO[x]] = 1; out.push(x); }
    var near = (LOOK[c] || "").split("");
    var b = baseOf(c); if (b){ near.push(b); GROUPS.forEach(function(g){ g.chars.forEach(function(x){ if (baseOf(x) === b) near.push(x); }); }); }
    shuffle(near).forEach(function(x){ if (pool.indexOf(x) > -1 || Math.random() < .35) add(x); });
    shuffle(pool.slice()).forEach(add);
    shuffle(BASE.slice()).forEach(add);
    return out;
  }
  function showQ(step){
    var c = step.c, kind = step.kind;
    S.answered = false;
    var head = '<span class="kl-tag">' + (step.isNew ? 'New · quick check' : S.mode === "check" ? 'Checkup' : 'Review') + '</span>';
    if (kind === "write"){
      S.drew = false;
      shell(head + '<p class="kl-ask">Write <b>' + esc(RO[c]) + '</b> from memory</p>' +
        '<div class="kl-draw solo"><div class="kl-box blank" id="klBox"><canvas id="klCanvas"></canvas></div></div>' +
        '<div class="kl-btns center"><button type="button" class="wbtn" data-say="' + c + '">Listen</button><button type="button" class="wbtn" data-kl="clear">Clear</button></div>' +
        '<button type="button" class="fc-start" data-kl="reveal">Show the answer</button>', S.title);
      sizePad(); setTimeout(function(){ say(c); }, 250);
      return;
    }
    var opts = shuffle([c].concat(distractors(c, 3)));
    S.opts = opts;
    var read = kind === "read";
    shell(head + (read
        ? '<div class="kl-qbig" lang="ja">' + c + '</div><p class="kl-ask">Which sound is this?</p>'
        : '<div class="kl-qbig ro">' + esc(RO[c]) + '<button type="button" class="speak" data-say="' + c + '" aria-label="Play">' + SPK + '</button></div><p class="kl-ask">Which character makes this sound?</p>') +
      '<div class="kq-opts">' + opts.map(function(o, i){ return '<button type="button" class="kq-opt' + (read ? '' : ' ja') + '" data-klopt="' + i + '">' + esc(read ? RO[o] : o) + '</button>'; }).join("") + '</div>' +
      '<div id="klAfter"></div>', S.title);
    if (!read) setTimeout(function(){ say(c); }, 250);
  }
  /* one grade per character per session: the first answer counts, repeats are only practice */
  function grade(c, ok){
    if (S.graded[c]) return; S.graded[c] = 1;
    var st = KL[c];
    if (!st){
      if (BASE.indexOf(c) > -1) addDay(1);
      else { var g = GROUPS.filter(function(x){ return x.chars.indexOf(c) > -1; })[0]; if (g && !g.chars.some(learned)) addDay(CFG.per); }
      KL[c] = [1, inDays(1), 1, ok ? 0 : 1];
    }
    else if (S.mode === "check"){ if (!ok){ st[0] = 1; st[1] = inDays(1); st[3]++; } st[2]++; }
    else if (ok){ st[0] = Math.min(st[0] + 1, INTERVALS.length - 1); st[1] = inDays(INTERVALS[st[0]]); st[2]++; }
    else { st[0] = 1; st[1] = inDays(1); st[2]++; st[3]++; }
    save();
  }
  /* a missed character comes back 2 to 6 questions later, until it is right twice; never back to back */
  function requeue(step, need){
    if (S.mode === "check") return;
    var left = S.steps.length - S.i - 1; if (left < 1) return;
    var lo = Math.min(2, left), hi = Math.min(left, 6);
    var at = S.i + 1 + lo + Math.floor(Math.random() * (hi - lo + 1));
    S.steps.splice(Math.min(at, S.steps.length), 0, { t: "q", c: step.c, kind: step.kind === "read" ? "hear" : "read", isNew: step.isNew, again: true, need: need });
  }
  function answer(ok, picked){
    var step = S.steps[S.i]; if (S.answered) return; S.answered = true;
    grade(step.c, ok);
    if (!step.again && ok) S.right++;
    if (!ok){ S.missed[step.c] = 1; requeue(step, 2); }
    else if (step.again && step.need > 1) requeue(step, step.need - 1);
    var c = step.c;
    if (step.kind !== "write"){
      Array.prototype.forEach.call(root.querySelectorAll("[data-klopt]"), function(b){
        var o = S.opts[+b.getAttribute("data-klopt")]; b.disabled = true;
        if (o === c) b.classList.add("right"); else if (o === picked) b.classList.add("wrong");
      });
      var after = $("klAfter");
      after.innerHTML = '<p class="kq-ans"><span class="ja">' + c + '</span> = <b>' + esc(RO[c]) + '</b>' + (ok ? '' : '  ·  you picked ' + esc(picked) + ' (' + esc(RO[picked]) + ')') +
        ' <button type="button" class="speak mini" data-say="' + c + '" aria-label="Play">' + SPK + '</button></p>' +
        (ok ? '' : '<div class="kl-mini">' + strokeSVG(c) + '</div><button type="button" class="fc-start" data-kl="next">Next</button>');
      if (ok){ say(c); setTimeout(function(){ if (S && S.answered && S.steps[S.i] === step) next(); }, 800); }
      else { say(c); animate(after.querySelector("svg"), 150); }
    } else next();
  }
  function reveal(){
    var step = S.steps[S.i], c = step.c, box = $("klBox");
    box.insertAdjacentHTML("afterbegin", strokeSVG(c));
    box.classList.add("shown");
    animate(box.querySelector("svg"), 100);
    var btn = root.querySelector('[data-kl="reveal"]');
    btn.outerHTML = '<p class="kl-ask small">Did yours match? Same strokes, same order?</p><div class="kl-grade"><button type="button" class="fc-again" data-kl="wmiss">Not yet</button><button type="button" class="fc-got" data-kl="wok">Got it</button></div>';
    S.answered = false;
  }

  /* sessions */
  function qKind(c){ var s = KL[c]; return s && s[0] >= 2 && strokes(c) && Math.random() < .3 ? "write" : (Math.random() < .5 ? "read" : "hear"); }
  function spread(list){            /* avoid the same character twice in a row */
    for (var i = 1; i < list.length; i++){
      if (list[i].c === list[i - 1].c){ for (var j = i + 1; j < list.length; j++){ if (list[j].c !== list[i - 1].c){ var t = list[i]; list[i] = list[j]; list[j] = t; break; } } }
    }
    return list;
  }
  function start(mode){
    reload();
    var steps = [], title = "", units = [], newSet = [], d = [];
    if (mode === "today" || mode === "review" || mode === "extra"){
      d = mode === "extra" ? shuffle(learnedList()).slice(0, 15) : shuffle(due()).slice(0, 40);
      d.forEach(function(c){ steps.push({ t: "q", c: c, kind: qKind(c) }); });
      title = mode === "extra" ? "Extra practice" : "Today";
    }
    if (mode === "today" || mode === "new"){
      units = nextUnits();
      units.forEach(function(u){ newSet = newSet.concat(u.chars); });
      units.forEach(function(u, i){ steps.push({ t: "intro", u: u, pos: "New · " + (i + 1) + " of " + units.length }); });
      var quiz = [];
      newSet.forEach(function(c){ quiz.push({ t: "q", c: c, kind: "read", isNew: true }); quiz.push({ t: "q", c: c, kind: "hear", isNew: true }); });
      shuffle(learnedList().filter(function(c){ return d.indexOf(c) < 0; })).slice(0, 3).forEach(function(c){ quiz.push({ t: "q", c: c, kind: "read" }); });
      if (newSet.length) steps.push({ t: "note", text: "Now a quick check on " + newSet.join(" ") + "." });
      steps = steps.concat(spread(shuffle(quiz)));
      title = "Today";
    }
    if (mode === "check"){
      var all = shuffle(learnedList()), writes = all.filter(function(c){ return strokes(c); }).slice(0, Math.min(5, Math.ceil(all.length / 5)));
      all.forEach(function(c){ steps.push({ t: "q", c: c, kind: writes.indexOf(c) > -1 ? "write" : (Math.random() < .5 ? "read" : "hear") }); });
      title = "Weekly checkup";
    }
    if (!steps.length){ toast("Nothing to do right now", 1600); return; }
    S = { mode: mode, steps: steps, i: -1, right: 0, missed: {}, graded: {}, title: title, newSet: newSet, units: units };
    openOverlay();
    window.loadStrokes ? window.loadStrokes(next, function(){ toast("Couldn’t load the stroke data", 1800); next(); }) : next();
  }
  function next(){
    clearT();
    S.i++;
    if (S.i >= S.steps.length){ finish(); return; }
    var st = S.steps[S.i];
    if (st.t === "intro"){ showIntro(st.u, st.pos); return; }
    if (st.t === "note"){ shell('<p class="kl-rule big">' + esc(st.text) + '</p><button type="button" class="fc-start" data-kl="next">Start</button>', S.title); return; }
    showQ(st);
  }
  function finish(){
    if (S.mode === "check") store.set("klcheck", JSON.stringify({ d: today() }));
    var miss = Object.keys(S.missed), qs = S.steps.filter(function(s){ return s.t === "q" && !s.again; }).length;
    var nu = nextUnits(), dn = due().length;
    var h = '<span class="kl-tag">' + esc(S.title) + ' · done</span>' +
      '<div class="fc-score"><b>' + S.right + ' / ' + qs + '</b>' + (miss.length ? 'right on the first try' : 'Perfect!') + '</div>' +
      (S.newSet.length ? '<p class="kl-rule">New today: <span class="ja">' + S.newSet.join(" ") + '</span></p>' : '') +
      (miss.length ? '<span class="kl-lab">To watch</span><div class="kweak-row center">' + miss.map(function(c){ return '<button type="button" class="kchip" data-say="' + c + '" data-klstroke="' + c + '"><span class="k">' + c + '</span><span class="r">' + esc(RO[c]) + '</span></button>'; }).join("") + '</div><p class="kl-tip">They come back tomorrow.</p>' : '') +
      '<p class="kl-tip">' + (S.mode === "check" ? 'Next checkup in a week.' : nu.length ? 'Tomorrow: ' + (nu[0].chars.length > 1 ? 'the ' + nu[0].chars[0] + ' group' : nu.map(function(u){ return u.chars[0]; }).join(" ")) + (dn ? ' · ' + dn + ' still due' : '') : learnedList().length >= ALL.length ? 'You know every character. Keep the reviews going.' : 'Come back tomorrow for the next ones.') + '</p>' +
      '<button type="button" class="fc-start" data-kl="close">Done</button>';
    S.steps = null;
    shell(h, "");
  }
  function view(c){
    var u = null; UNITS.forEach(function(x){ if (x.chars.indexOf(c) > -1) u = x; });
    if (!u) return;
    S = { view: true, title: "", newSet: [] };
    openOverlay();
    var go = function(){ showIntro(u.chars.length > 1 ? u : { chars: [c] }, learned(c) ? (level(c) === "known" ? "Known" : "Learning") : "Coming up"); };
    window.loadStrokes ? window.loadStrokes(go, go) : go();
  }

  root.addEventListener("click", function(e){
    var t = e.target.closest("button"); if (!t) return;
    if (t.hasAttribute("data-klstroke") && window.KanaModal){ window.KanaModal.open(t.getAttribute("data-klstroke")); return; }
    if (t.hasAttribute("data-say")) return;
    if (t.hasAttribute("data-klopt")){ var o = S.opts[+t.getAttribute("data-klopt")]; answer(o === S.steps[S.i].c, o); return; }
    switch (t.getAttribute("data-kl")){
      case "close": closeOverlay(); break;
      case "next": if (S && S.view){ closeOverlay(); } else next(); break;
      case "replay": padClear(); animate(root.querySelector("#klBox svg")); break;
      case "clear": padClear(); break;
      case "reveal": reveal(); break;
      case "wok": answer(true); break;
      case "wmiss": answer(false); break;
    }
  });
  document.addEventListener("keydown", function(e){ if (!root.hidden && e.key === "Escape"){ e.stopPropagation(); closeOverlay(); } }, true);
  window.addEventListener("resize", function(){ if ($("klCanvas")) sizePad(); });

  /* ---------- the block at the top of the Kana tab ---------- */
  function render(){
    reload();
    var host = $("klBlock"); if (!host) return;
    var L = learnedList(), nb = BASE.filter(learned).length, ng = GROUPS.filter(function(g){ return g.chars.every(learned); }).length;
    var d = due(), nu = nextUnits(), newChars = []; nu.forEach(function(u){ newChars = newChars.concat(u.chars); });
    var done = !d.length && !nu.length;
    var main;
    if (d.length || nu.length){
      var parts = []; if (d.length) parts.push(d.length + ' review' + (d.length > 1 ? 's' : '')); if (nu.length) parts.push(newChars.length + ' new');
      main = '<div class="kl-today"><div><span class="kl-lab">Today</span><b>' + parts.join(' + ') + '</b>' +
        (newChars.length ? '<span class="kl-next" lang="ja">' + newChars.join(" ") + '</span>' : '') + '</div>' +
        '<button type="button" class="fc-start" data-kla="today">Start</button></div>';
    } else if (L.length >= ALL.length){
      main = '<div class="kl-today done"><div><span class="kl-lab">Today</span><b>All caught up</b><span class="kl-sub">You know all ' + ALL.length + '. Reviews keep them fresh.</span></div></div>';
    } else {
      var up = UNITS.filter(function(u){ return !u.chars.every(learned); })[0];
      main = '<div class="kl-today done"><div><span class="kl-lab">Today</span><b>Done ✓</b><span class="kl-sub">Tomorrow: ' + (up.chars.length > 1 ? 'the ' + up.chars[0] + ' group' : UNITS.filter(function(u){ return !u.chars.every(learned); }).slice(0, CFG.per).filter(function(u){ return u.chars.length === 1; }).map(function(u){ return u.chars[0]; }).join(" ")) + '</span></div>' +
        '<button type="button" class="wbtn" data-kla="new">Learn more now</button></div>';
    }
    var cd = checkDue(), lc = lastCheck();
    var check = L.length < 6 ? '<span class="kl-sub">Weekly checkup unlocks after 6 characters.</span>' :
      cd ? '<button type="button" class="wbtn hot" data-kla="check">Weekly checkup is due · ' + L.length + ' characters</button>' :
      '<span class="kl-sub">Next checkup ' + (lc ? 'on ' + new Date(Date.parse(lc) + 7 * DAY).toLocaleDateString(undefined, { weekday: "long" }) : 'in a few days') + '</span> <button type="button" class="link" data-kla="check">Do it now</button>';
    var map = '<div class="kl-map">' + UNITS.map(function(u){
      return u.chars.map(function(c, i){
        var lv = level(c);
        return '<button type="button" class="kl-cell ' + lv + (u.chars.length > 1 && i === 0 ? ' gstart' : '') + '" data-klview="' + c + '" aria-label="' + c + ' ' + esc(RO[c]) + ', ' + lv + '"><span class="k" lang="ja">' + c + '</span><span class="r">' + (lv === "new" ? "" : esc(RO[c])) + '</span></button>';
      }).join("");
    }).join("") + '</div>';
    host.innerHTML = A.secHead("Learn hiragana", "ひらがなを覚える") +
      '<p class="hint">A few new characters a day, most used first. Reviews come back just before you forget them.</p>' +
      '<div class="kl-prog"><div class="kl-pbar"><span style="width:' + Math.round(L.length / ALL.length * 100) + '%"></span></div>' +
      '<span><b>' + nb + '</b> / ' + BASE.length + ' basic · <b>' + ng + '</b> / ' + GROUPS.length + ' tick groups</span>' +
      (L.length ? '<span class="kl-sub">You can read ' + readableCount() + ' of your words and phrases</span>' : '') + '</div>' +
      main +
      '<div class="kl-row">' + check + '</div>' +
      (L.length >= 4 ? '<div class="kl-row"><button type="button" class="link" data-kla="extra">Extra practice (15 random)</button></div>' : '') +
      '<div class="fc-opt kl-per"><span class="fc-lab" id="klPerLab">New per day</span><div class="seg seg3" role="radiogroup" aria-labelledby="klPerLab">' +
      [3, 4, 5].map(function(n){ return '<button type="button" role="radio" data-klper="' + n + '" aria-checked="' + (CFG.per === n) + '">' + n + '</button>'; }).join("") + '</div></div>' +
      '<details class="kl-det"' + (L.length ? '' : ' open') + '><summary>Your path · tap any character</summary>' + map +
      '<p class="kl-legend"><span class="kl-cell new"></span>coming up <span class="kl-cell learning"></span>learning <span class="kl-cell known"></span>known</p></details>';
    badge(d.length, nu.length > 0);
  }
  function badge(n, hasNew){
    var tab = $("tab-kana"); if (!tab) return;
    var b = $("klBadge"); if (!b){ b = document.createElement("span"); b.id = "klBadge"; b.className = "badge-n"; tab.appendChild(b); }
    if (n){ b.textContent = n > 99 ? "99+" : n; b.hidden = false; b.classList.remove("dot"); }
    else if (hasNew){ b.textContent = ""; b.hidden = false; b.classList.add("dot"); }
    else b.hidden = true;
  }
  document.addEventListener("click", function(e){
    var t = e.target.closest("#klBlock button"); if (!t) return;
    if (t.hasAttribute("data-klper")){ CFG.per = +t.getAttribute("data-klper"); store.set("klcfg", JSON.stringify(CFG)); render(); return; }
    if (t.hasAttribute("data-klview")){ view(t.getAttribute("data-klview")); return; }
    var a = t.getAttribute("data-kla"); if (a) start(a);
  });
  window.KanaLearn = { render: render, order: ALL };
  render();
  document.addEventListener("visibilitychange", function(){ if (!document.hidden && root.hidden) render(); });
})();
