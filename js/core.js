/* Núcleo: utilidades, almacenamiento local (con respaldo en memoria) y voz del navegador. */
window.OSAKA = window.OSAKA || {};
(function (O) {
  'use strict';

  O.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  O.shuffle = function (a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };
  O.pick = function (a, n) { return O.shuffle(a).slice(0, n); };

  /* ---- Estado ---- */
  var KEY = 'osakapp:v1';
  var S = null;

  function blank() { return { v: 1, profile: { name: '', email: '' }, prefs: { romaji: true }, seen: {}, last: null, tests: {} }; }
  function validTest(r) { return r && typeof r.t === 'number' && typeof r.s === 'number' && typeof r.n === 'number'; }
  function norm(x) {
    var b = blank(), k;
    if (!x || typeof x !== 'object') return b;
    if (x.profile && typeof x.profile === 'object') {
      b.profile.name = String(x.profile.name || '').slice(0, 60);
      b.profile.email = String(x.profile.email || '').slice(0, 120);
    }
    if (x.prefs && typeof x.prefs === 'object') b.prefs.romaji = x.prefs.romaji !== false;
    if (x.seen && typeof x.seen === 'object') {
      for (k in x.seen) if (Object.prototype.hasOwnProperty.call(x.seen, k) && typeof x.seen[k] === 'number') b.seen[k] = x.seen[k];
    }
    b.last = typeof x.last === 'string' ? x.last : null;
    if (x.tests && typeof x.tests === 'object') {
      for (k in x.tests) if (Object.prototype.hasOwnProperty.call(x.tests, k) && Array.isArray(x.tests[k])) b.tests[k] = x.tests[k].filter(validTest).slice(-20);
    }
    return b;
  }
  function load() {
    try {
      var raw = window.localStorage.getItem(KEY);
      if (raw) return norm(JSON.parse(raw));
    } catch (e) { /* sin almacenamiento: se usa memoria */ }
    return blank();
  }
  O.state = function () { if (!S) S = load(); return S; };
  O.save = function () {
    try { window.localStorage.setItem(KEY, JSON.stringify(O.state())); return true; } catch (e) { return false; }
  };
  O.markSeen = function (id) {
    var s = O.state();
    if (!s.seen[id]) s.seen[id] = Date.now();
    s.last = id;
    O.save();
  };
  O.addTest = function (key, r) {
    var s = O.state();
    (s.tests[key] = s.tests[key] || []).push({ t: Date.now(), s: r.s, n: r.n });
    s.tests[key] = s.tests[key].slice(-20);
    O.save();
  };
  O.exportJSON = function () { return JSON.stringify(O.state(), null, 2); };
  O.importJSON = function (text) {
    var x;
    try { x = JSON.parse(text); } catch (e) { return { ok: false, error: 'El texto no es un JSON válido.' }; }
    if (!x || typeof x !== 'object' || x.v !== 1) return { ok: false, error: 'No parece una copia de Osakapp (falta la versión 1).' };
    S = norm(x);
    O.save();
    return { ok: true };
  };
  O.reset = function () { S = blank(); O.save(); };

  /* ---- Voz ---- */
  O.canSpeak = function () { return typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance !== 'undefined'; };
  O.speak = function (text) {
    if (!O.canSpeak()) return false;
    try {
      var clean = String(text).replace(/＿+/g, '').replace(/\s*\/\s*/g, '、');
      window.speechSynthesis.cancel();
      var u = new window.SpeechSynthesisUtterance(clean);
      u.lang = 'ja-JP';
      u.rate = 0.85;
      var voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
      var hasJa = false;
      for (var i = 0; i < voices.length; i++) if (/^ja/i.test(voices[i].lang.replace('_', '-'))) { u.voice = voices[i]; hasJa = true; break; }
      var started = false;
      u.onstart = function () { started = true; };
      u.onerror = function (ev) {
        if (ev && (ev.error === 'canceled' || ev.error === 'interrupted')) return;
        O.toast('No se pudo reproducir el audio (' + ((ev && ev.error) || 'error') + '). Lectura: ' + clean);
      };
      window.speechSynthesis.speak(u);
      /* Si pasados 1,5 s no empezó a sonar, explicamos la causa más probable. */
      setTimeout(function () {
        if (started || window.speechSynthesis.speaking) return;
        O.toast(voices.length && !hasJa
          ? 'Tu dispositivo no tiene una voz japonesa instalada. Lectura: ' + clean
          : 'Tu navegador no reprodujo el audio aquí. Lectura: ' + clean);
      }, 1500);
      return true;
    } catch (e) { return false; }
  };

  /* ---- Aviso breve ---- */
  var toastTimer = null;
  O.toast = function (msg) {
    var old = document.querySelector('.toast');
    if (old) old.remove();
    var el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    el.textContent = msg;
    document.body.appendChild(el);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.remove(); }, 2600);
  };
})(window.OSAKA);
