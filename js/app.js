/* Estructura, navegación por hash y arranque. */
(function (O) {
  'use strict';
  var V = O.views, ic = O.icons;
  var root, view;

  O.applyPrefs = function () {
    var on = O.state().prefs.romaji;
    document.body.classList.toggle('no-romaji', !on);
  };
  O.setRomaji = function (on) { O.state().prefs.romaji = !!on; O.save(); O.applyPrefs(); };

  function shell() {
    root.innerHTML =
      '<div class="app">' +
      '<header class="top"><a class="brand" href="#inicio" aria-label="Osakapp, inicio"><span class="logo" lang="ja" aria-hidden="true">お</span><span>Osakapp</span></a>' +
      '</header>' +
      '<main id="view" class="view" tabindex="-1"></main>' +
      '<nav class="bottom" aria-label="Principal">' +
      '<a href="#inicio" data-nav="inicio">' + ic.home + '<span>Inicio</span></a>' +
      '<a href="#ruta" data-nav="ruta">' + ic.route + '<span>Ruta</span></a>' +
      '<a href="#practica" data-nav="practica">' + ic.prac + '<span>Práctica</span></a>' +
      '<a href="#progreso" data-nav="progreso">' + ic.prog + '<span>Progreso</span></a>' +
      '<a href="#menu" data-nav="menu">' + ic.user + '<span>Menú</span></a>' +
      '</nav></div>';
    view = root.querySelector('#view');
  }

  function parse() {
    var h = (location.hash || '').replace(/^#/, '');
    if (!h || h === 'inicio') return { nav: 'inicio', r: V.inicio() };
    if (h === 'ruta') return { nav: 'ruta', r: V.ruta() };
    if (h.indexOf('m-') === 0) return { nav: 'ruta', r: V.modulo(h.slice(2)) };
    if (h.indexOf('l-') === 0) return { nav: 'ruta', r: V.leccion(h.slice(2)) };
    if (h === 'practica') return { nav: 'practica', r: V.practica() };
    if (h.indexOf('t-') === 0) return { nav: 'practica', r: V.test(h.slice(2)) };
    if (h === 'progreso') return { nav: 'progreso', r: V.progreso() };
    if (h === 'menu') return { nav: 'menu', r: V.menu() };
    if (h === 'perfil') return { nav: 'menu', r: V.perfil() };
    if (h === 'g-pronunciacion') return { nav: 'menu', r: V.guia('pronunciacion') };
    if (h === 'g-jlpt') return { nav: 'menu', r: V.guia('jlptLatam') };
    if (h === 'g-examen') return { nav: 'menu', r: V.guia('examen') };
    if (h === 'acerca') return { nav: 'menu', r: V.acerca() };
    if (h === 'copia') return { nav: 'menu', r: V.copia() };
    if (h === 'reiniciar') return { nav: 'menu', r: V.reiniciar() };
    return { nav: 'inicio', r: V.inicio() };
  }

  function route() {
    var p;
    try { p = parse(); } catch (err) {
      console.error(err);
      p = { nav: 'inicio', r: '<div class="card"><p>Algo salió mal al abrir esta pantalla.</p><a class="btn primary" href="#inicio">Volver al inicio</a></div>' };
    }
    var r = p.r, html = typeof r === 'string' ? r : r.html;
    view.innerHTML = html;
    if (r && r.after) r.after(view);
    Array.prototype.forEach.call(root.querySelectorAll('.bottom a'), function (a) {
      var on = a.getAttribute('data-nav') === p.nav;
      a.classList.toggle('on', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    window.scrollTo(0, 0);
  }

  document.addEventListener('click', function (ev) {
    var b = ev.target.closest ? ev.target.closest('[data-say]') : null;
    if (!b) return;
    var t = b.getAttribute('data-say');
    if (!O.speak(t)) O.toast('Tu navegador no puede reproducir voz. Lectura: ' + t);
  });
  if (O.canSpeak() && window.speechSynthesis.getVoices) window.speechSynthesis.getVoices();

  function start() {
    root = document.getElementById('osakapp');
    shell();
    O.applyPrefs();
    window.addEventListener('hashchange', route);
    route();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})(window.OSAKA);
