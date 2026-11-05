/* TEMPORARY: light-mode background and tint tuner. Remove once the look is chosen. */
(function(){
  var C = {
    "gray-50":"oklch(98.5% 0.002 247.839)","gray-100":"oklch(96.7% 0.003 264.542)","gray-200":"oklch(92.8% 0.006 264.531)","gray-300":"oklch(87.2% 0.01 258.338)",
    "stone-50":"oklch(98.5% 0.001 106.423)","stone-100":"oklch(97% 0.001 106.424)","stone-200":"oklch(92.3% 0.003 48.717)","stone-300":"oklch(86.9% 0.005 56.366)",
    "taupe-50":"oklch(98.6% 0.002 67.8)","taupe-100":"oklch(96% 0.002 17.2)","taupe-200":"oklch(92.2% 0.005 34.3)","taupe-300":"oklch(86.8% 0.007 39.5)",
    "mauve-50":"oklch(98.5% 0 0)","mauve-100":"oklch(96% 0.003 325.6)","mauve-200":"oklch(92.2% 0.005 325.62)","mauve-300":"oklch(86.5% 0.012 325.68)",
    "olive-50":"oklch(98.8% 0.003 106.5)","olive-100":"oklch(96.6% 0.005 106.5)","olive-200":"oklch(93% 0.007 106.5)","olive-300":"oklch(88% 0.011 106.6)",
    "mist-50":"oklch(98.7% 0.002 197.1)","mist-100":"oklch(96.3% 0.002 197.1)","mist-200":"oklch(92.5% 0.005 214.3)","mist-300":"oklch(87.2% 0.007 219.6)",
    "orange-50":"oklch(98% 0.016 73.684)","amber-50":"oklch(98.7% 0.022 95.277)","sky-50":"oklch(97.7% 0.013 236.62)","white":"#FFFFFF"
  };
  /* text and line greys per family (Tailwind 200 / 300 / 500 / 600 / 700 / 900) */
  var FAM = {
    gray:  { line:"oklch(92.8% 0.006 264.531)", strong:"oklch(87.2% 0.01 258.338)", muted:"oklch(44.6% 0.03 256.802)", soft:"oklch(37.3% 0.034 259.733)", ink:"oklch(21% 0.034 264.665)", tab:"oklch(55.1% 0.027 264.364)" },
    stone: { line:"oklch(92.3% 0.003 48.717)",  strong:"oklch(86.9% 0.005 56.366)", muted:"oklch(44.4% 0.011 73.639)", soft:"oklch(37.4% 0.01 67.558)",  ink:"oklch(21.6% 0.006 56.043)", tab:"oklch(55.3% 0.013 58.071)" },
    taupe: { line:"oklch(92.2% 0.005 34.3)",    strong:"oklch(86.8% 0.007 39.5)",   muted:"oklch(43.8% 0.017 39.3)",   soft:"oklch(36.7% 0.016 35.7)",   ink:"oklch(21.4% 0.009 43.1)",  tab:"oklch(54.7% 0.021 43.1)" }
  };
  var D = { fam:"gray", grad:"none", from:"stone-100", to:"stone-200", track:"gray-100", band:"stone-200" };
  var S; try { S = JSON.parse(localStorage.getItem("tune") || "null") || {}; } catch(e){ S = {}; }
  Object.keys(D).forEach(function(k){ if (!(k in S)) S[k] = D[k]; });

  var style = document.createElement("style"); style.id = "tuneStyle"; document.head.appendChild(style);
  function css(){
    var f = FAM[S.fam] || FAM.gray, a = C[S.from], b = C[S.to], bg;
    if (S.grad === "down") bg = "linear-gradient(180deg," + a + "," + b + ")";
    else if (S.grad === "diag") bg = "linear-gradient(160deg," + a + " 0%," + b + " 100%)";
    else if (S.grad === "glow") bg = "radial-gradient(120% 70% at 50% 0%," + a + " 0%," + b + " 100%)";
    else bg = a;
    var L = ':root:not([data-theme="dark"])';
    var rules = L + "{--bg:" + a + ";--track:" + C[S.track] + ";--chip:" + C[S.track] + ";--lh-bg:" + C[S.band] + ";--line:" + f.line + ";--line-strong:" + f.strong + ";--muted:" + f.muted + ";--soft:" + f.soft + ";--ink:" + f.ink + ";--tab-ink:" + f.tab + "}" +
      L + " body{background:" + bg + " fixed;background-attachment:fixed}" +
      L + " nav.tabs{background:color-mix(in srgb," + a + " 80%,transparent)}";
    style.textContent = "@media (prefers-color-scheme: light){" + rules + "}" + ':root[data-theme="light"]{}' + rules.replace(/:root:not\(\[data-theme="dark"\]\)/g, ':root[data-theme="light"]');
    try { localStorage.setItem("tune", JSON.stringify(S)); } catch(e){}
    var out = document.getElementById("tuneOut");
    if (out) out.textContent = "Text & lines: " + S.fam + " · Background: " + (S.grad === "none" ? S.from : S.grad + " " + S.from + " → " + S.to) + " · Controls: " + S.track + " · Lesson band: " + S.band;
  }
  function sel(id, label, opts, val){
    return '<label class="tn-row"><span>' + label + '</span><select data-k="' + id + '">' + opts.map(function(o){ var v = o[0], t = o[1] || o[0]; return '<option value="' + v + '"' + (v === val ? ' selected' : '') + '>' + t + '</option>'; }).join("") + '</select></label>';
  }
  var bgNames = ["white","gray-50","gray-100","stone-50","stone-100","stone-200","taupe-50","taupe-100","taupe-200","mauve-100","mauve-200","olive-100","olive-200","mist-100","mist-200","orange-50","amber-50","sky-50"].map(function(n){ return [n]; });
  var trackNames = ["gray-100","gray-200","stone-100","stone-200","taupe-100","taupe-200"].map(function(n){ return [n]; });
  var bandNames = ["stone-100","stone-200","stone-300","taupe-100","taupe-200","taupe-300","gray-100","gray-200","mauve-200","olive-200","mist-200"].map(function(n){ return [n]; });

  var btn = document.createElement("button");
  btn.type = "button"; btn.className = "tn-btn"; btn.textContent = "Tune"; btn.setAttribute("aria-label", "Tune background (temporary)");
  var panel = document.createElement("div"); panel.className = "tn-panel"; panel.hidden = true;
  function render(){
    panel.innerHTML = '<div class="tn-head"><b>Tune (temporary)</b><button type="button" data-tn="close" aria-label="Close">×</button></div>' +
      sel("fam", "Text & lines", [["gray","Gray (current, cool)"],["stone","Stone (warm)"],["taupe","Taupe (warmer)"]], S.fam) +
      sel("grad", "Gradient", [["none","None"],["down","Top → bottom"],["diag","Diagonal"],["glow","Soft glow from top"]], S.grad) +
      sel("from", "Background (top)", bgNames, S.from) +
      sel("to", "Gradient to", bgNames, S.to) +
      sel("track", "Controls track", trackNames, S.track) +
      sel("band", "Lesson band", bandNames, S.band) +
      '<p class="tn-out" id="tuneOut"></p><div class="tn-btns"><button type="button" data-tn="reset">Reset</button><button type="button" data-tn="copy">Copy settings</button></div>';
    css();
  }
  panel.addEventListener("change", function(e){ var k = e.target.getAttribute("data-k"); if (k){ S[k] = e.target.value; css(); } });
  panel.addEventListener("click", function(e){
    var b = e.target.closest("[data-tn]"); if (!b) return;
    var a = b.getAttribute("data-tn");
    if (a === "close") panel.hidden = true;
    if (a === "reset"){ S = JSON.parse(JSON.stringify(D)); render(); }
    if (a === "copy"){ var t = document.getElementById("tuneOut").textContent; if (navigator.clipboard) navigator.clipboard.writeText(t).then(function(){ window.APP && window.APP.toast("Copied, paste it to Claude", 1600); }); }
  });
  btn.addEventListener("click", function(){ panel.hidden = !panel.hidden; });
  document.body.appendChild(btn); document.body.appendChild(panel);
  var st = document.createElement("style");
  st.textContent = ".tn-btn{position:fixed;left:12px;bottom:calc(12px + env(safe-area-inset-bottom));z-index:35;min-height:36px;padding:0 14px;border-radius:18px;border:1px dashed var(--line-strong);background:var(--card);color:var(--ink);font-size:13px;font-weight:700;box-shadow:var(--shadow-md);cursor:pointer}" +
    ".tn-panel{position:fixed;left:12px;bottom:calc(56px + env(safe-area-inset-bottom));z-index:36;width:min(340px,calc(100vw - 24px));max-height:70vh;overflow:auto;padding:12px 14px;border-radius:16px;background:var(--card);border:1px solid var(--line);box-shadow:0 10px 30px rgb(0 0 0 / .15);font-size:13px}" +
    ".tn-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}.tn-head button{border:0;background:none;font-size:22px;cursor:pointer;color:var(--muted)}" +
    ".tn-row{display:grid;grid-template-columns:120px 1fr;align-items:center;gap:8px;margin:6px 0}.tn-row span{color:var(--muted);font-weight:600}.tn-row select{font:inherit;min-height:32px;border:1px solid var(--line-strong);border-radius:8px;background:var(--card);color:var(--ink);padding:0 6px}" +
    ".tn-out{margin:10px 0 8px;font-size:12px;color:var(--soft);line-height:1.45}.tn-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px}.tn-btns button{min-height:34px;border-radius:10px;border:1px solid var(--line-strong);background:var(--card);color:var(--ink);font-weight:600;cursor:pointer}" +
    "@media (prefers-color-scheme: dark){:root:not([data-theme=\"light\"]) .tn-btn,:root:not([data-theme=\"light\"]) .tn-panel{display:none}} :root[data-theme=\"dark\"] .tn-btn,:root[data-theme=\"dark\"] .tn-panel{display:none}";
  document.head.appendChild(st);
  render();
})();
