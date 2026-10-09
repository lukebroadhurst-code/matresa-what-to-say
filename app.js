(function () {
  'use strict';
  var S = window.SAY;
  var $ = function (id) { return document.getElementById(id); };

  var STEPS = ['Open', 'Why you are calling', 'The question', 'Ask for the call', 'If not now'];
  var MOMENTS = [
    { key: 'gate', label: 'Switchboard or PA' },
    { key: 'vm', label: 'Voicemail' },
    { key: 'wrong', label: 'Wrong person' }
  ];

  var state = {
    persona: S.personas[0].key, step: 0,
    company: '', their: '', theirManual: false,
    you: '', openObj: null, moment: null, q: ''
  };
  try { state.you = localStorage.getItem('say.you') || ''; } catch (e) {}

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }

  // Fill [name], [you], [company]; anything else in brackets shows as a highlighted blank to fill in.
  function fill(text) {
    return esc(text).replace(/\[([^\]]+)\]/g, function (m, k) {
      var key = k.toLowerCase(), v = '';
      if (key === 'name') v = state.their;
      else if (key === 'you') v = state.you;
      else if (key === 'company') v = state.company;
      else if (key === 'mari-carmen') return 'Mari-Carmen';
      return v ? '<span class="fill">' + esc(v) + '</span>' : '<span class="ph">[' + k + ']</span>';
    });
  }
  function persona() {
    for (var i = 0; i < S.personas.length; i++) if (S.personas[i].key === state.persona) return S.personas[i];
    return S.personas[0];
  }

  /* ---------- who ---------- */
  function renderPersonas() {
    $('personas').innerHTML = S.personas.map(function (p) {
      return '<button type="button" class="chip" data-a="persona" data-k="' + p.key + '" aria-pressed="' + (p.key === state.persona) + '">' + esc(p.label) + '</button>';
    }).join('');
  }
  /* ---------- say this ---------- */
  function renderSteps() {
    $('steps').innerHTML = STEPS.map(function (s, i) {
      return '<button type="button" class="step" data-a="step" data-n="' + i + '"' + (i === state.step ? ' aria-current="step"' : '') + '>' + (i + 1) + '. ' + esc(s) + '</button>';
    }).join('');
    document.querySelector('[data-a="prev"]').disabled = state.step === 0;
    document.querySelector('[data-a="next"]').disabled = state.step === STEPS.length - 1;
  }
  function say(t) { return '<p class="say">' + fill(t) + '</p>'; }
  function label(t) { return '<div class="label">' + esc(t) + '</div>'; }

  function renderSay() {
    var p = persona(), h = '';
    if (state.step === 0) {
      h += say(S.open) + '<p class="hint">Then stop and let them answer.</p>';
    } else if (state.step === 1) {
      if (p.hookSpoken && p.hook) {
        h += say(p.hook);
      } else if (p.hook) {
        h += label('Start from') + '<p class="alt">' + fill(cap(p.hook)) + '</p>';
      }
      if (p.problem) h += say(p.problem);
      if (p.avoid) h += '<p class="avoid"><b>Avoid:</b> ' + esc(p.avoid) + '</p>';
    } else if (state.step === 2) {
      if (p.question) {
        h += label('Ask') + say(p.question) + label('Or the standard question, for anyone') + '<p class="alt">' + fill(S.question) + '</p>';
      } else {
        h += label('Ask') + say(S.question) + '<p class="hint">' + fill(cap(p.ask)) + '</p>';
      }
      h += '<p class="hint">Listen. One follow-up question at most, then say back what you heard in one sentence.</p>';
    } else if (state.step === 3) {
      h += say(S.ask);
      if (p.ask && p.question) h += label('Frame it as') + '<p class="alt">' + esc(cap(p.ask)) + '</p>';
    } else {
      h += say(S.notNow);
      if (S.notNowAfter) h += '<p class="hint">' + esc(S.notNowAfter) + '</p>';
    }
    $('say-body').innerHTML = h;
  }

  /* ---------- if they say ---------- */
  function byRank(a, b) { return a.rank - b.rank; }
  function matches(o) {
    var q = state.q.trim().toLowerCase();
    return !q || (o.short + ' ' + o.they + ' ' + o.say).toLowerCase().indexOf(q) !== -1;
  }
  function partsHtml(parts) {
    return parts.map(function (p) {
      if (p.t === 'say') return '<p class="say">' + fill(p.x) + '</p>';
      if (p.t === 'warn') return '<p class="warn"><b>Careful:</b> ' + esc(p.x) + '</p>';
      return '<p class="note">' + fill(p.x) + '</p>';
    }).join('');
  }
  function renderAnswer() {
    var el = $('obj-answer'), o = null;
    for (var i = 0; i < S.objections.length; i++) if (S.objections[i].n === state.openObj) o = S.objections[i];
    if (!o) { el.hidden = true; el.innerHTML = ''; return; }
    var hasAsk = o.thenParts.some(function (p) { return p.t === 'say'; });
    el.hidden = false;
    el.innerHTML = '<div class="ans-top"><span class="ans-they">They said: ' + esc(o.they) + '</span>' +
      '<button type="button" class="ans-x" data-a="obj-close">Clear</button></div>' +
      label('Say') + partsHtml(o.sayParts) +
      (o.thenParts.length ? label(hasAsk ? 'Then ask' : 'Then') + partsHtml(o.thenParts) : '') +
      (o.behind ? '<p class="mean"><b>Behind it:</b> ' + esc(o.behind) + '</p>' : '');
    if (window.innerWidth < 1000 && el.scrollIntoView) el.scrollIntoView({ block: 'nearest' });
  }
  function renderObjections() {
    var keyOf = {};
    S.objections.slice().sort(byRank).forEach(function (o, i) { if (i < 9) keyOf[o.n] = i + 1; });
    var list = S.objections.filter(matches), h = '';
    S.groups.forEach(function (g) {
      var items = list.filter(function (o) { return o.group === g; }).sort(byRank);
      if (!items.length) return;
      h += '<div class="grp"><h3>' + esc(g) + '</h3><div class="oc-row">' + items.map(function (o) {
        return '<button type="button" class="oc" data-a="obj" data-n="' + o.n + '" aria-pressed="' + (state.openObj === o.n) + '">' +
          (keyOf[o.n] ? '<span class="k">' + keyOf[o.n] + '</span>' : '') + esc(o.short) + '</button>';
      }).join('') + '</div></div>';
    });
    $('obj-list').innerHTML = h || '<p class="none">Nothing matches. Try one word.</p>';
    renderAnswer();
  }

  /* ---------- other moments ---------- */
  function renderMoments() {
    $('moments').innerHTML = MOMENTS.map(function (m) {
      return '<button type="button" class="chip" data-a="moment" data-k="' + m.key + '" aria-pressed="' + (state.moment === m.key) + '">' + esc(m.label) + '</button>';
    }).join('');
    var el = $('moment-body');
    if (!state.moment) { el.hidden = true; el.innerHTML = ''; return; }
    var h = '';
    if (state.moment === 'gate') h = label('Say') + say(S.gatekeeper.say) + '<p class="hint">' + esc(S.gatekeeper.note) + '</p>';
    if (state.moment === 'vm') h = label('Say, about 20 seconds') + say(S.voicemail.say) + '<p class="hint">' + esc(S.voicemail.note) + '</p>';
    if (state.moment === 'wrong') h = '<p class="alt">' + esc(cap(S.wrong)) + '</p>';
    el.hidden = false; el.innerHTML = h;
  }

  function renderAll() {
    renderPersonas(); renderSteps(); renderSay(); renderObjections(); renderMoments();
  }
  function renderText() { renderSay(); renderObjections(); renderMoments(); }

  /* ---------- events ---------- */
  function pickCompany(value) { state.company = value; renderText(); }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-a]');
    if (!b) return;
    var a = b.getAttribute('data-a');
    if (a === 'step') { state.step = +b.getAttribute('data-n'); renderSteps(); renderSay(); }
    else if (a === 'next') { if (state.step < STEPS.length - 1) { state.step++; renderSteps(); renderSay(); } }
    else if (a === 'prev') { if (state.step > 0) { state.step--; renderSteps(); renderSay(); } }
    else if (a === 'persona') { state.persona = b.getAttribute('data-k'); renderPersonas(); renderSay(); }
    else if (a === 'obj') { var n = +b.getAttribute('data-n'); state.openObj = state.openObj === n ? null : n; renderObjections(); }
    else if (a === 'obj-close') { state.openObj = null; renderObjections(); }
    else if (a === 'moment') { var k = b.getAttribute('data-k'); state.moment = state.moment === k ? null : k; renderMoments(); }
  });

  $('f-company').addEventListener('input', function (e) { pickCompany(e.target.value); });
  $('f-their').addEventListener('input', function (e) { state.their = e.target.value; state.theirManual = !!e.target.value; renderText(); });
  $('f-you').addEventListener('input', function (e) {
    state.you = e.target.value;
    try { localStorage.setItem('say.you', state.you); } catch (x) {}
    renderText();
  });
  $('f-q').addEventListener('input', function (e) { state.q = e.target.value; state.openObj = null; renderObjections(); });

  document.addEventListener('keydown', function (e) {
    var t = e.target && e.target.tagName, typing = t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT';
    if (e.key === 'Escape') { state.openObj = null; state.q = ''; $('f-q').value = ''; $('f-q').blur(); renderObjections(); return; }
    if (typing) {
      if (e.target.id === 'f-q' && e.key === 'Enter') {
        var v = S.objections.filter(matches).sort(byRank);
        if (v.length) { state.openObj = v[0].n; renderObjections(); }
      }
      return;
    }
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === '/') { e.preventDefault(); $('f-q').focus(); return; }
    if (/^[1-9]$/.test(e.key)) {
      var o = S.objections.slice().sort(byRank)[+e.key - 1];
      if (o) { state.openObj = o.n; renderObjections(); }
      return;
    }
    if (e.key === 'ArrowRight' && state.step < STEPS.length - 1) { state.step++; renderSteps(); renderSay(); }
    if (e.key === 'ArrowLeft' && state.step > 0) { state.step--; renderSteps(); renderSay(); }
  });

  /* ---------- start ---------- */
  $('f-you').value = state.you;
  $('escape').innerHTML = fill(S.escape);
  $('never').textContent = S.never.join(', ');
  renderAll();
})();
