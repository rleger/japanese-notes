/* Practice: kana trainer, prices trainer, stroke order. Uses window.APP from index.html. */
(function(){
  var A = window.APP; if (!A) return;
  var N = A.N, esc = A.esc, store = A.store, toast = A.toast, say = A.say;
  function $(id){ return document.getElementById(id); }
  function shuffle(a){ for (var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pick(a){ return a[Math.floor(Math.random() * a.length)]; }
  function getJSON(k, d){ try { var v = JSON.parse(store.get(k) || "null"); return v == null ? d : v; } catch(e){ return d; } }
  var SPK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>';

  /* ======================= KANA TRAINER ======================= */
  var ROWS = [];
  (function(){
    var labels = { vowel: "a i u e o", k: "ka", s: "sa", t: "ta", n: "na", h: "ha", m: "ma", y: "ya", r: "ra", w: "wa · n" };
    var wRow = null;
    N.hiragana.forEach(function(r){
      var items = r[1].filter(Boolean).map(function(x){ return [x[0], x[1]]; });
      if (r[0] === "n" && items.length === 1 && items[0][0] === "ん"){ if (wRow) wRow.items = wRow.items.concat(items); return; }
      var row = { id: r[0], label: labels[r[0]] || r[0], items: items };
      if (r[0] === "w") wRow = row;
      ROWS.push(row);
    });
    var voiced = [], semi = [];
    N.dakuten.forEach(function(r){
      r[1].forEach(function(x){ if (!x || x[2] === "rare") return; (r[0] === "p" ? semi : voiced).push([x[0], x[1]]); });
    });
    ROWS.push({ id: "dk", label: "ga za da ba ゛", items: voiced });
    ROWS.push({ id: "hd", label: "pa ゜", items: semi });
  })();
  var KC = getJSON("kanacfg", { rows: { vowel: true, k: true }, dir: "kr" });
  var KS = getJSON("kanastats", {});
  var kq = null; // round state

  function kanaPool(){
    var p = []; ROWS.forEach(function(r){ if (KC.rows[r.id]) p = p.concat(r.items); }); return p;
  }
  function allKana(){ var p = []; ROWS.forEach(function(r){ p = p.concat(r.items); }); return p; }
  function weight(k){ var s = KS[k] || [0, 0]; return Math.max(.35, 1 + 2 * s[1] - .3 * s[0]); }
  function weightedPick(pool, avoid){
    var tot = 0, ws = pool.map(function(x){ var w = x[0] === avoid ? 0 : weight(x[0]); tot += w; return w; });
    var r = Math.random() * tot;
    for (var i = 0; i < pool.length; i++){ r -= ws[i]; if (r <= 0) return pool[i]; }
    return pool[pool.length - 1];
  }
  function kanaSetup(){
    var n = kanaPool().length;
    var h = '<h2 class="sec"><span class="dot" aria-hidden="true"></span>Kana trainer <span class="jp">ひらがな練習</span></h2>' +
      '<p class="hint">Pick the rows you know, then match each character with its sound. Characters you miss come back more often.</p>' +
      '<div class="fc-opt"><span class="fc-lab">Rows</span><div class="chips" id="kRows">' +
      ROWS.map(function(r){ return '<button type="button" data-krow="'+r.id+'" aria-pressed="'+(KC.rows[r.id] ? "true" : "false")+'"><span class="kfirst">'+esc(r.items[0][0])+'</span> '+esc(r.label)+'</button>'; }).join("") +
      '</div><div class="kquick"><button type="button" class="link" data-kall="1">Select all</button><button type="button" class="link" data-kall="0">Clear</button></div></div>' +
      '<div class="fc-opt"><span class="fc-lab">Direction</span><div class="seg seg2" data-kdir>' +
      '<button type="button" role="radio" data-v="kr" aria-checked="'+(KC.dir === "kr")+'">あ → a</button>' +
      '<button type="button" role="radio" data-v="rk" aria-checked="'+(KC.dir === "rk")+'">a → あ</button></div></div>' +
      '<button type="button" class="fc-start" id="kStart"'+(n < 4 ? ' disabled' : '')+'>'+(n < 4 ? 'Pick at least one more row' : 'Start · 15 questions')+'</button>' +
      weakList();
    $("pmKana").innerHTML = h;
  }
  function weakList(){
    var w = Object.keys(KS).filter(function(k){ return KS[k][1] > 0; }).sort(function(a, b){ return (KS[b][1] - KS[b][0] * .3) - (KS[a][1] - KS[a][0] * .3); }).slice(0, 8);
    if (!w.length) return "";
    var map = {}; allKana().forEach(function(x){ map[x[0]] = x[1]; });
    return '<div class="kweak"><span class="fc-lab">Your trickiest so far</span><div class="kweak-row">' + w.map(function(k){ return '<button type="button" class="kchip" data-say="'+esc(k)+'"><span class="k">'+esc(k)+'</span><span class="r">'+esc(map[k] || "")+'</span></button>'; }).join("") + '</div></div>';
  }
  function kanaStart(){
    kq = { n: 0, total: 15, right: 0, missed: {}, last: null };
    kanaNext();
  }
  function kanaNext(){
    if (kq.n >= kq.total){ kanaDone(); return; }
    var pool = kanaPool(), q = weightedPick(pool, kq.last); kq.last = q[0]; kq.q = q; kq.answered = false;
    var all = allKana(), seen = {}; seen[q[0]] = 1; seen["r" + q[1]] = 1;
    var near = shuffle(pool.slice()).concat(shuffle(all.slice()));
    var opts = [q];
    for (var i = 0; i < near.length && opts.length < 4; i++){ var x = near[i]; if (seen[x[0]] || seen["r" + x[1]]) continue; seen[x[0]] = 1; seen["r" + x[1]] = 1; opts.push(x); }
    shuffle(opts); kq.opts = opts;
    var kr = KC.dir === "kr";
    var h = '<div class="fc-top"><span>'+(kq.n + 1)+' / '+kq.total+(kq.right ? '  ·  ✓ '+kq.right : '')+'</span><button type="button" class="link" id="kStop">Stop</button></div>' +
      '<div class="fc-bar"><span style="width:'+Math.round(kq.n / kq.total * 100)+'%"></span></div>' +
      '<div class="kq-card"><div class="kq-prompt'+(kr ? ' ja' : '')+'">'+esc(kr ? q[0] : q[1])+'</div>' +
      '<p class="kq-sub">'+(kr ? 'Which sound is this?' : 'Which character makes this sound?')+'</p></div>' +
      '<div class="kq-opts">' + opts.map(function(o, i){ return '<button type="button" class="kq-opt'+(kr ? '' : ' ja')+'" data-kopt="'+i+'">'+esc(kr ? o[1] : o[0])+'</button>'; }).join("") + '</div>' +
      '<div class="kq-next" id="kNextWrap" hidden><button type="button" class="fc-got" id="kNext">Next</button></div>';
    $("pmKana").innerHTML = h;
  }
  function kanaAnswer(i){
    if (kq.answered) return; kq.answered = true;
    var o = kq.opts[i], ok = o[0] === kq.q[0];
    var s = KS[kq.q[0]] || [0, 0]; if (ok) s[0]++; else s[1]++; KS[kq.q[0]] = s; store.set("kanastats", JSON.stringify(KS));
    Array.prototype.forEach.call(document.querySelectorAll("[data-kopt]"), function(b){
      var x = kq.opts[+b.getAttribute("data-kopt")]; b.disabled = true;
      if (x[0] === kq.q[0]) b.classList.add("right"); else if (b === document.querySelector('[data-kopt="'+i+'"]')) b.classList.add("wrong");
    });
    var card = document.querySelector(".kq-card");
    card.insertAdjacentHTML("beforeend", '<p class="kq-ans"><span class="ja">'+esc(kq.q[0])+'</span> = <b>'+esc(kq.q[1])+'</b>'+(ok ? '' : (KC.dir === "kr" ? '  ·  you picked '+esc(o[1])+' ('+esc(o[0])+')' : '  ·  you picked '+esc(o[0])+' ('+esc(o[1])+')'))+' <button type="button" class="speak mini" data-say="'+esc(kq.q[0])+'" aria-label="Play">'+SPK+'</button></p>');
    kq.n++;
    if (ok){ kq.right++; setTimeout(function(){ if (kq && kq.answered && $("kNextWrap")) kanaNext(); }, 850); }
    else { kq.missed[kq.q[0]] = kq.q[1]; $("kNextWrap").hidden = false; }
  }
  function kanaDone(){
    var m = Object.keys(kq.missed);
    var h = '<div class="fc-score"><b>'+kq.right+' / '+kq.total+'</b>'+(m.length ? 'Missed: ' : 'Perfect round!')+'</div>' +
      (m.length ? '<div class="kweak-row center">' + m.map(function(k){ return '<button type="button" class="kchip" data-say="'+esc(k)+'"><span class="k">'+esc(k)+'</span><span class="r">'+esc(kq.missed[k])+'</span></button>'; }).join("") + '</div>' : '') +
      '<button type="button" class="fc-start" id="kStart">Another round</button>' +
      '<button type="button" class="link" id="kSetup" style="display:block;margin:14px auto 0">Change rows</button>';
    kq = null;
    $("pmKana").innerHTML = h;
  }
  document.addEventListener("click", function(e){
    var t = e.target.closest("#pmKana button"); if (!t || t.hasAttribute("data-say")) return;
    if (t.hasAttribute("data-krow")){ var id = t.getAttribute("data-krow"); KC.rows[id] = !KC.rows[id]; store.set("kanacfg", JSON.stringify(KC)); kanaSetup(); return; }
    if (t.hasAttribute("data-kall")){ var on = t.getAttribute("data-kall") === "1"; ROWS.forEach(function(r){ KC.rows[r.id] = on; }); store.set("kanacfg", JSON.stringify(KC)); kanaSetup(); return; }
    if (t.parentNode.hasAttribute("data-kdir")){ KC.dir = t.getAttribute("data-v"); store.set("kanacfg", JSON.stringify(KC)); kanaSetup(); return; }
    if (t.hasAttribute("data-kopt")){ kanaAnswer(+t.getAttribute("data-kopt")); return; }
    switch (t.id){
      case "kStart": kanaStart(); window.scrollTo(0, 0); break;
      case "kNext": kanaNext(); break;
      case "kStop": case "kSetup": kq = null; kanaSetup(); break;
    }
  });

  /* ======================= PRICES ======================= */
  var ONES_K = ["", "いち", "に", "さん", "よん", "ご", "ろく", "なな", "はち", "きゅう"];
  var ONES_R = ["", "ichi", "ni", "san", "yon", "go", "roku", "nana", "hachi", "kyū"];
  function under10k(n, K, R){
    var th = Math.floor(n / 1000), hu = Math.floor(n / 100) % 10, te = Math.floor(n / 10) % 10, on = n % 10;
    if (th){
      if (th === 1){ K.push("せん"); R.push("sen"); }
      else if (th === 3){ K.push("さんぜん"); R.push("sanzen"); }
      else if (th === 8){ K.push("はっせん"); R.push("hassen"); }
      else { K.push(ONES_K[th] + "せん"); R.push(ONES_R[th] + "sen"); }
    }
    if (hu){
      if (hu === 1){ K.push("ひゃく"); R.push("hyaku"); }
      else if (hu === 3){ K.push("さんびゃく"); R.push("sanbyaku"); }
      else if (hu === 6){ K.push("ろっぴゃく"); R.push("roppyaku"); }
      else if (hu === 8){ K.push("はっぴゃく"); R.push("happyaku"); }
      else { K.push(ONES_K[hu] + "ひゃく"); R.push(ONES_R[hu] + "hyaku"); }
    }
    if (te){
      if (te === 1){ K.push("じゅう"); R.push("jū"); }
      else { K.push(ONES_K[te] + "じゅう"); R.push(ONES_R[te] + "jū"); }
    }
    if (on){ K.push(ONES_K[on]); R.push(ONES_R[on]); }
  }
  /* reading of a yen amount (1 to 99,999,999) */
  function yen(n){
    var K = [], R = [], man = Math.floor(n / 10000), rest = n % 10000;
    if (man){ var k2 = [], r2 = []; under10k(man, k2, r2); K.push(k2.join("") + "まん"); R.push(r2.join(" ") + "man"); }
    under10k(rest, K, R);
    if (n % 10 === 4){ // 4円 is read よえん
      K[K.length - 1] = K[K.length - 1].replace(/よん$/, "よ"); R[R.length - 1] = R[R.length - 1].replace(/yon$/, "yo");
    }
    return { k: K.join("") + "えん", r: R.join(" ") + " en" };
  }
  function fmt(n){ return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
  var CATS = [
    { w: 3, label: "Konbini", f: function(){ return pick([100, 108, 120, 130, 138, 150, 160, 180, 198, 210, 230, 250, 280, 298, 320, 350, 398, 450, 498, 540, 600, 680, 780, 850, 980]); } },
    { w: 3, label: "Lunch or dinner", f: function(){ return pick([500, 600, 650, 750, 800, 880, 950, 1000, 1100, 1200, 1300, 1480, 1500, 1800, 2200, 2500, 3000, 3300, 3800, 4500, 5500, 6600, 8800]); } },
    { w: 2, label: "Train ticket", f: function(){ return pick([140, 170, 180, 200, 210, 230, 260, 290, 310, 340, 390, 420, 470, 560, 640, 760, 990, 1340, 1530, 2310, 3410, 7940, 13320, 14170]); } },
    { w: 2, label: "Temple, museum, onsen", f: function(){ return pick([300, 400, 500, 600, 700, 800, 1000, 1200, 1500, 1600, 2000, 2500]); } },
    { w: 2, label: "Hotel or ryokan, per night", f: function(){ return pick([6800, 8500, 9900, 12000, 14500, 16800, 18000, 22000, 24800, 28000, 33000, 38500, 45000, 52000]); } },
    { w: 1, label: "Souvenir", f: function(){ var b = pick([300, 500, 700, 800, 1000, 1200, 1500, 2000, 2400, 3000, 3600, 4800, 6000, 8000]); return b; } }
  ];
  function randPrice(){
    var tot = 0; CATS.forEach(function(c){ tot += c.w; });
    var r = Math.random() * tot, c = CATS[0];
    for (var i = 0; i < CATS.length; i++){ r -= CATS[i].w; if (r <= 0){ c = CATS[i]; break; } }
    return { n: c.f(), label: c.label };
  }
  function confusers(n){
    var s = String(n), out = {};
    function add(x){ if (x > 0 && x !== n && x < 1e8) out[x] = 1; }
    add(n * 10); add(Math.round(n / 10)); // 300 vs 3,000
    if (s.length > 1) add(+(s[1] + s[0] + s.slice(2))); // swapped digits
    var d = +s[0]; [3, 8, 6, 1].forEach(function(x){ if (x !== d) add(+(String(x) + s.slice(1))); }); // san/hachi/roku confusion
    var nonzero = s.split("").map(function(c, i){ return c !== "0" ? i : -1; }).filter(function(i){ return i > 0; });
    if (nonzero.length){ var i = pick(nonzero), a = s.split(""); a[i] = String((+a[i] + pick([1, 2, 4])) % 10); add(+a.join("")); }
    add(n + (n >= 1000 ? 1000 : 100));
    return shuffle(Object.keys(out).map(Number)).slice(0, 3);
  }
  var PC = getJSON("pricecfg", { mode: "say" });
  var pq = null;
  function pricesSetup(){
    var h = '<h2 class="sec"><span class="dot" aria-hidden="true"></span>Numbers and prices <span class="jp">いくらですか</span></h2>' +
      '<p class="hint">Real price tags you will meet: konbini, food, trains, temples, rooms. Prices are read with えん (en) at the end.</p>' +
      '<div class="fc-opt"><span class="fc-lab">Mode</span><div class="seg seg2" data-pmode>' +
      '<button type="button" role="radio" data-v="say" aria-checked="'+(PC.mode === "say")+'">Say the price</button>' +
      '<button type="button" role="radio" data-v="pick" aria-checked="'+(PC.mode === "pick")+'">Read the Japanese</button></div>' +
      '<p class="hint" style="margin:6px 0 0">'+(PC.mode === "say" ? 'You see 1,500円, say it out loud, then tap to check.' : 'You see せんごひゃくえん, pick the right price.')+'</p></div>' +
      '<button type="button" class="fc-start" id="pStart">Start · 10 prices</button>' +
      '<div class="pcheat"><span class="fc-lab">Sound changes to remember</span><div class="pcheat-grid">' +
      [[300, "さんびゃく", "sanbyaku"], [600, "ろっぴゃく", "roppyaku"], [800, "はっぴゃく", "happyaku"], [3000, "さんぜん", "sanzen"], [8000, "はっせん", "hassen"], [10000, "いちまん", "ichiman"], [4, "よえん", "yo en (4 yen)"]].map(function(x){
        return '<button type="button" class="pcell" data-say="'+esc(x[1])+'"><b>'+fmt(x[0])+'</b><span class="ja">'+esc(x[1])+'</span><span class="ro">'+esc(x[2])+'</span></button>';
      }).join("") + '</div><p class="hint" style="margin:8px 0 0">Japanese counts in blocks of 10,000 (まん man): 12,000 = いちまんにせん, "one man two thousand".</p></div>';
    $("pmPrices").innerHTML = h;
  }
  function pricesStart(){ pq = { n: 0, total: 10, right: 0 }; pricesNext(); window.scrollTo(0, 0); }
  function pricesNext(){
    if (pq.n >= pq.total){ pricesDone(); return; }
    var p = randPrice(); pq.p = p; pq.r = yen(p.n); pq.answered = false;
    var h = '<div class="fc-top"><span>'+(pq.n + 1)+' / '+pq.total+(pq.right ? '  ·  ✓ '+pq.right : '')+'</span><button type="button" class="link" id="pStop">Stop</button></div>' +
      '<div class="fc-bar"><span style="width:'+Math.round(pq.n / pq.total * 100)+'%"></span></div>';
    if (PC.mode === "say"){
      h += '<button type="button" class="kq-card ptag" id="pFlip"><span class="kq-cat">'+esc(p.label)+'</span><span class="pbig">'+fmt(p.n)+'<small>円</small></span>' +
        '<span class="kq-sub" id="pTap">Say it out loud, then tap to check</span><span class="pread" id="pRead" hidden><span class="ja">'+esc(pq.r.k)+'</span><span class="ro">'+esc(pq.r.r)+'</span></span></button>' +
        '<div class="fc-actions" id="pActs" hidden><button type="button" class="fc-again" id="pMiss">Not yet</button><button type="button" class="fc-got" id="pGot">I said it</button></div>';
    } else {
      var opts = shuffle([p.n].concat(confusers(p.n)));
      pq.opts = opts;
      h += '<div class="kq-card"><span class="kq-cat">'+esc(p.label)+'</span><span class="pread"><span class="ja big">'+esc(pq.r.k)+'</span><span class="ro pro">'+esc(pq.r.r)+'</span></span><p class="kq-sub">How much is it?</p></div>' +
        '<div class="kq-opts">' + opts.map(function(o, i){ return '<button type="button" class="kq-opt" data-popt="'+i+'">'+fmt(o)+'円</button>'; }).join("") + '</div>' +
        '<div class="kq-next" id="pNextWrap" hidden><button type="button" class="fc-got" id="pNext">Next</button></div>';
    }
    $("pmPrices").innerHTML = h;
  }
  function pricesDone(){
    $("pmPrices").innerHTML = '<div class="fc-score"><b>'+pq.right+' / '+pq.total+'</b>'+(pq.right === pq.total ? 'Perfect round!' : 'Keep going, prices come fast at the till.')+'</div>' +
      '<button type="button" class="fc-start" id="pStart">Another 10</button><button type="button" class="link" id="pSetup" style="display:block;margin:14px auto 0">Change mode</button>';
    pq = null;
  }
  document.addEventListener("click", function(e){
    var t = e.target.closest("#pmPrices button"); if (!t) return;
    if (t.hasAttribute("data-say")) return;
    if (t.parentNode.hasAttribute("data-pmode")){ PC.mode = t.getAttribute("data-v"); store.set("pricecfg", JSON.stringify(PC)); pricesSetup(); return; }
    if (t.hasAttribute("data-popt")){
      if (pq.answered) return; pq.answered = true;
      var i = +t.getAttribute("data-popt"), ok = pq.opts[i] === pq.p.n;
      Array.prototype.forEach.call(document.querySelectorAll("[data-popt]"), function(b){ b.disabled = true; if (pq.opts[+b.getAttribute("data-popt")] === pq.p.n) b.classList.add("right"); });
      if (!ok) t.classList.add("wrong");
      document.querySelector(".kq-card").classList.add("open");
      pq.n++;
      if (ok){ pq.right++; setTimeout(function(){ if (pq && pq.answered && $("pNextWrap")) pricesNext(); }, 1100); }
      else { var you = yen(pq.opts[i]); document.querySelector(".kq-card").insertAdjacentHTML("beforeend", '<p class="kq-ans">'+fmt(pq.opts[i])+'円 would be <span class="ja">'+esc(you.k)+'</span></p>'); $("pNextWrap").hidden = false; }
      return;
    }
    switch (t.id){
      case "pStart": pricesStart(); break;
      case "pFlip":
        if (pq.answered) break;
        pq.answered = true; $("pRead").hidden = false; $("pTap").hidden = true; $("pActs").hidden = false; break;
      case "pGot": pq.right++; pq.n++; pricesNext(); break;
      case "pMiss": pq.n++; pricesNext(); break;
      case "pNext": pricesNext(); break;
      case "pStop": case "pSetup": pq = null; pricesSetup(); break;
    }
  });

  /* ======================= WRITING ======================= */
  var W = { ch: store.get("writech") || "あ", timers: [], trace: false, step: 0 };
  var strokesLoading = false;
  function loadStrokes(cb){
    if (window.STROKES){ cb(); return; }
    if (strokesLoading) return; strokesLoading = true;
    var s = document.createElement("script"); s.src = "strokes.js?r=" + Date.now();
    s.onload = function(){ cb(); };
    s.onerror = function(){ strokesLoading = false; var a = $("writeArea"); if (a) a.innerHTML = '<p class="hint">Could not load the stroke data. Check your connection and tap refresh.</p>'; };
    document.head.appendChild(s);
  }
  function writeRender(){
    var area = $("writeArea"); if (!area) return;
    var picker = '<div class="wpick" role="group" aria-label="Choose a character">';
    ROWS.slice(0, 10).forEach(function(r){ r.items.forEach(function(x){ picker += '<button type="button" data-wch="'+esc(x[0])+'" aria-pressed="'+(x[0] === W.ch)+'">'+esc(x[0])+'</button>'; }); });
    picker += '</div>';
    area.innerHTML = '<div class="wmain"><div class="wbox" id="wBox"><svg id="wSvg" viewBox="0 0 109 109" aria-hidden="true"></svg><canvas id="wCanvas"></canvas></div>' +
      '<div class="wside"><div class="winfo" id="wInfo"></div>' +
      '<div class="wbtns"><button type="button" class="wbtn" id="wPlay">▶ Play</button><button type="button" class="wbtn" id="wStep">Next stroke</button>' +
      '<button type="button" class="wbtn" id="wTrace" aria-pressed="'+W.trace+'">✎ Trace</button><button type="button" class="wbtn" id="wClear">Clear</button></div></div></div>' +
      picker + '<p class="credit">Stroke data: <a href="https://kanjivg.tagaini.net" target="_blank" rel="noopener">KanjiVG</a> by Ulrich Apel, CC BY-SA 3.0.</p>';
    sizeCanvas(); drawChar(W.trace ? "trace" : true);
  }
  function clearTimers(){ W.timers.forEach(clearTimeout); W.timers = []; }
  function romaOf(ch){ var r = ""; ROWS.forEach(function(row){ row.items.forEach(function(x){ if (x[0] === ch) r = x[1]; }); }); return r; }
  function drawChar(animate){
    clearTimers();
    var d = window.STROKES && window.STROKES[W.ch], svg = $("wSvg"); if (!d || !svg) return;
    var NS = "http://www.w3.org/2000/svg";
    var h = '<g class="wgrid"><rect x="1" y="1" width="107" height="107" rx="6"/><line x1="54.5" y1="2" x2="54.5" y2="107"/><line x1="2" y1="54.5" x2="107" y2="54.5"/></g>';
    h += '<g class="wghost">' + d.d.map(function(p){ return '<path d="'+p+'"/>'; }).join("") + '</g>';
    h += '<g class="wink">' + d.d.map(function(p, i){ return '<path data-i="'+i+'" d="'+p+'"/>'; }).join("") + '</g>';
    h += '<g class="wnum">' + d.s.map(function(pt, i){ return '<g data-i="'+i+'"><circle cx="'+pt[0]+'" cy="'+pt[1]+'" r="5.2"/><text x="'+pt[0]+'" y="'+(pt[1] + 2.1)+'">'+(i + 1)+'</text></g>'; }).join("") + '</g>';
    svg.innerHTML = h;
    $("wInfo").innerHTML = '<span class="wch">'+esc(W.ch)+'</span><span><b>'+esc(romaOf(W.ch))+'</b><br>'+d.d.length+' stroke'+(d.d.length > 1 ? 's' : '')+'</span><button type="button" class="speak" data-say="'+esc(W.ch)+'" aria-label="Play">'+SPK+'</button>';
    var inks = svg.querySelectorAll(".wink path"), nums = svg.querySelectorAll(".wnum g");
    Array.prototype.forEach.call(inks, function(p){ var L = p.getTotalLength ? p.getTotalLength() : 100; p.style.strokeDasharray = L + " " + L; p.style.strokeDashoffset = animate === "trace" ? L : 0; p._L = L; });
    Array.prototype.forEach.call(nums, function(g){ g.style.opacity = 1; });
    W.step = animate === "trace" ? 0 : d.d.length;
    if (animate === true) play();
  }
  function play(){
    clearTimers();
    var svg = $("wSvg"); if (!svg) return;
    var inks = svg.querySelectorAll(".wink path"), nums = svg.querySelectorAll(".wnum g");
    Array.prototype.forEach.call(inks, function(p){ p.style.transition = "none"; p.style.strokeDashoffset = p._L; });
    Array.prototype.forEach.call(nums, function(g){ g.style.transition = "none"; g.style.opacity = 0; });
    svg.getBoundingClientRect();
    var t = 250;
    Array.prototype.forEach.call(inks, function(p, i){
      var dur = Math.max(380, p._L * 11);
      W.timers.push(setTimeout(function(){
        nums[i].style.transition = "opacity .2s"; nums[i].style.opacity = 1;
        p.style.transition = "stroke-dashoffset " + dur + "ms ease-in-out"; p.style.strokeDashoffset = 0;
      }, t));
      t += dur + 220;
    });
    W.step = inks.length;
  }
  function stepOnce(){
    var svg = $("wSvg"); if (!svg) return; clearTimers();
    var inks = svg.querySelectorAll(".wink path"), nums = svg.querySelectorAll(".wnum g");
    if (W.step >= inks.length){
      Array.prototype.forEach.call(inks, function(p){ p.style.transition = "none"; p.style.strokeDashoffset = p._L; });
      Array.prototype.forEach.call(nums, function(g){ g.style.transition = "none"; g.style.opacity = 0; });
      svg.getBoundingClientRect(); W.step = 0;
    }
    var p = inks[W.step], g = nums[W.step];
    g.style.transition = "opacity .2s"; g.style.opacity = 1;
    p.style.transition = "stroke-dashoffset " + Math.max(380, p._L * 11) + "ms ease-in-out"; p.style.strokeDashoffset = 0;
    W.step++;
  }
  /* tracing */
  var ctx = null, drawing = false, lastPt = null;
  function sizeCanvas(){
    var c = $("wCanvas"), box = $("wBox"); if (!c || !box) return;
    var r = box.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
    c.width = Math.round(r.width * dpr); c.height = Math.round(r.height * dpr);
    ctx = c.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.lineWidth = Math.max(6, r.width * .045);
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--pen").trim() || "#334155";
    c.style.pointerEvents = W.trace ? "auto" : "none";
    box.classList.toggle("tracing", W.trace);
  }
  function pt(e, c){ var r = c.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
  document.addEventListener("pointerdown", function(e){
    if (e.target.id !== "wCanvas" || !W.trace) return;
    e.preventDefault(); drawing = true; lastPt = pt(e, e.target);
    try { e.target.setPointerCapture(e.pointerId); } catch(err){}
    ctx.beginPath(); ctx.arc(lastPt.x, lastPt.y, ctx.lineWidth / 2, 0, Math.PI * 2); ctx.fillStyle = ctx.strokeStyle; ctx.fill();
  });
  document.addEventListener("pointermove", function(e){
    if (!drawing || e.target.id !== "wCanvas") return;
    var p = pt(e, e.target); ctx.beginPath(); ctx.moveTo(lastPt.x, lastPt.y); ctx.lineTo(p.x, p.y); ctx.stroke(); lastPt = p;
  });
  function endDraw(){ drawing = false; }
  document.addEventListener("pointerup", endDraw); document.addEventListener("pointercancel", endDraw);
  function clearCanvas(){ var c = $("wCanvas"); if (c && ctx){ ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, c.width, c.height); ctx.restore(); } }
  window.addEventListener("resize", function(){ if ($("wCanvas")) sizeCanvas(); });

  document.addEventListener("click", function(e){
    var t = e.target.closest("#writeArea button"); if (!t || t.hasAttribute("data-say")) return;
    if (t.hasAttribute("data-wch")){
      W.ch = t.getAttribute("data-wch"); store.set("writech", W.ch);
      Array.prototype.forEach.call(document.querySelectorAll("[data-wch]"), function(b){ b.setAttribute("aria-pressed", b === t ? "true" : "false"); });
      clearCanvas(); drawChar(W.trace ? "trace" : true);
      var box = $("wBox"); if (box && box.getBoundingClientRect().top < 60) box.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    switch (t.id){
      case "wPlay": play(); break;
      case "wStep": stepOnce(); break;
      case "wTrace": W.trace = !W.trace; t.setAttribute("aria-pressed", W.trace ? "true" : "false"); clearCanvas(); sizeCanvas(); drawChar(W.trace ? "trace" : false); if (W.trace) toast("Trace over the grey shape, following the numbers", 2200); break;
      case "wClear": clearCanvas(); break;
    }
  });

  function initWriting(){
    var area = $("writeArea"); if (!area) return;
    area.innerHTML = '<p class="hint">Loading stroke data…</p>';
    var go = function(){ loadStrokes(writeRender); };
    if ("IntersectionObserver" in window){
      var io = new IntersectionObserver(function(en){ if (en.some(function(x){ return x.isIntersecting; })){ io.disconnect(); go(); } }, { rootMargin: "300px" });
      io.observe(area);
    } else go();
  }
  // the kana panel is hidden at first: re-size the canvas when it becomes visible
  document.addEventListener("click", function(e){ if (e.target.closest('[data-tab="kana"]')) setTimeout(function(){ if ($("wCanvas")) sizeCanvas(); }, 50); });

  /* ======================= wiring ======================= */
  var shown = {};
  window.PRACTICE = {
    show: function(name){
      if (name === "kana" && !kq) kanaSetup();
      if (name === "prices" && !pq) pricesSetup();
      shown[name] = 1;
    },
    yen: yen
  };
  initWriting();
  var cur = store.get("pm");
  if (cur === "kana" || cur === "prices") window.PRACTICE.show(cur);
})();
