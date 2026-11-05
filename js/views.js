/* Pantallas. Cada vista devuelve un string HTML o { html, after(el) }. */
window.OSAKA = window.OSAKA || {};
(function (O) {
  'use strict';
  var e = O.esc;
  var V = {};
  O.views = V;

  var ic = {
    spk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/></svg>',
    route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/></svg>',
    prac: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    prog: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
  };
  O.icons = ic;

  /* ---------- Ayudas ---------- */
  function rj(s) { return s ? '<span class="rj">' + e(s) + '</span>' : ''; }
  function say(t) { return '<button class="spk" type="button" data-say="' + e(t) + '" aria-label="Escuchar: ' + e(t) + '">' + ic.spk + '</button>'; }
  function bar(p) { return '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + p + '"><i style="width:' + p + '%"></i></div>'; }
  function back(href, label) { return '<a class="back" href="' + href + '">' + ic.back + '<span>' + e(label) + '</span></a>'; }
  function head(title, sub) { return '<div><h1 class="h1">' + e(title) + '</h1>' + (sub ? '<p class="sub">' + e(sub) + '</p>' : '') + '</div>'; }
  function exRow(x) {
    return '<div class="ex"><div class="grow" style="flex:1;min-width:0"><div class="jp" lang="ja">' + e(x[0]) + '</div><div>' + rj(x[1]) + '</div><div class="sub small">' + e(x[2]) + '</div></div>' + say(x[0]) + '</div>';
  }
  function blocks(arr) {
    var h = '<div class="prose">';
    arr.forEach(function (b) {
      if (b.t === 'h') h += '<h2 class="h2" style="margin-top:20px">' + e(b.x) + '</h2>';
      else if (b.t === 'p') h += '<p>' + e(b.x) + '</p>';
      else if (b.t === 'tip') h += '<div class="tip"><b>Consejo · </b>' + e(b.x) + '</div>';
      else if (b.t === 'ul') h += '<ul>' + b.items.map(function (i) { return '<li>' + e(i) + '</li>'; }).join('') + '</ul>';
      else if (b.t === 'table') {
        h += '<div class="tbl"><table><thead><tr>' + b.head.map(function (c) { return '<th scope="col">' + e(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          b.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td lang="ja">' + e(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      }
    });
    return h + '</div>';
  }
  function nextText(p) { return p.pct + '% · ' + p.seen + ' de ' + p.total + ' lecciones'; }

  /* ---------- Inicio ---------- */
  V.inicio = function () {
    var s = O.state(), name = s.profile.name;
    var all = O.overall(), nx = O.nextLesson();
    var h = '<div>' + '<h1 class="h1">' + (name ? 'Hola, ' + e(name) : 'Hola') + '</h1><p class="sub">Aprende japonés básico, paso a paso, y prepárate para el JLPT.</p></div>';
    if (nx) {
      var m = O.moduleById(nx.mod);
      h += '<div class="card mint stack"><div class="small sub">' + (all.seen ? 'Continúa donde quedaste' : 'Empieza aquí') + '</div>' +
        '<div class="row"><div class="grow"><div class="h2" style="margin:0">' + e(nx.title) + '</div><div class="sub">' + e(m.title) + '</div></div></div>' +
        bar(all.pct) + '<div class="small sub">' + nextText(all) + '</div>' +
        '<a class="btn primary block" href="#l-' + e(nx.id) + '">' + (all.seen ? 'Seguir' : 'Comenzar') + '</a></div>';
    } else {
      h += '<div class="card mint stack"><div class="h2" style="margin:0">¡Terminaste todas las lecciones!</div><p>Practica con los tests para afianzar lo aprendido.</p><a class="btn primary block" href="#practica">Ir a práctica</a></div>';
    }
    h += '<h2 class="h2">Módulos</h2><div class="grid2">';
    O.modules.forEach(function (m) {
      var p = O.progress(m.id);
      h += '<a class="card stack" href="#m-' + m.id + '" style="color:inherit"><div style="font-weight:800">' + e(m.title) + '</div>' + bar(p.pct) + '<div class="small sub">' + p.seen + ' de ' + p.total + '</div></a>';
    });
    h += '</div>';
    h += '<h2 class="h2">Prepárate para el JLPT</h2><a class="pcard" href="#t-n5-completo"><div class="ic">N5</div><div class="grow" style="flex:1"><div class="t">Simulacro N5</div><div class="s">25 preguntas originales</div></div></a>';
    h += '<div class="row" style="gap:8px"><span class="tag soon">N4 · Pronto</span><span class="tag soon">N3 · Pronto</span></div>';
    return h;
  };

  /* ---------- Ruta ---------- */
  V.ruta = function () {
    var nx = O.nextLesson();
    var h = head('Ruta de aprendizaje', 'Cada lección que abres se marca como vista.');
    O.modules.forEach(function (m) {
      var p = O.progress(m.id);
      h += '<div class="card stack"><div class="row between"><a href="#m-' + m.id + '" style="color:var(--ink);font-weight:800;font-size:18px">' + e(m.title) + '</a><span class="small sub">' + p.seen + '/' + p.total + '</span></div><div class="dots">';
      m.lessons.forEach(function (l, i) {
        var cls = O.isSeen(l.id) ? 'seen' : (nx && nx.id === l.id ? 'next' : '');
        h += '<a class="num ' + cls + '" href="#l-' + e(l.id) + '" aria-label="' + e(l.title) + (O.isSeen(l.id) ? ' (vista)' : '') + '">' + (i + 1) + '</a>';
      });
      h += '</div></div>';
    });
    return h;
  };

  /* ---------- Módulo ---------- */
  V.modulo = function (id) {
    var m = O.moduleById(id);
    if (!m) return V.ruta();
    var p = O.progress(id);
    var h = back('#ruta', 'Ruta') + head(m.title, m.desc);
    h += '<div class="stack"><div>' + bar(p.pct) + '</div><div class="small sub">' + nextText(p) + '</div></div><div>';
    m.lessons.forEach(function (l, i) {
      var seen = O.isSeen(l.id);
      h += '<a class="lrow" href="#l-' + e(l.id) + '"><span class="num ' + (seen ? 'seen' : '') + '">' + (i + 1) + '</span><span style="flex:1;min-width:0"><span class="t" style="display:block">' + e(l.title) + '</span><span class="sub small jp" lang="ja">' + e(l.sub) + '</span></span>' + (seen ? '<span class="tag">Vista</span>' : '') + '</a>';
    });
    h += '</div><a class="btn primary block" href="#t-' + m.practice + '">Practicar ' + e(m.title.toLowerCase()) + '</a>';
    return h;
  };

  /* ---------- Lección ---------- */
  function lessonBody(l) {
    var d = l.data, h = '';
    if (l.type === 'kana') {
      h += '<div class="card mint"><p>' + e(d.note) + '</p></div>';
      h += '<div class="kgrid" lang="ja">' + d.chars.map(function (c) {
        return '<button class="kcell" type="button" data-say="' + e(c[0]) + '" aria-label="' + e(c[0]) + ', ' + e(c[1]) + '"><b>' + e(c[0]) + '</b>' + rj(c[1]) + '</button>';
      }).join('') + '</div><p class="small sub">Toca un carácter para escucharlo.</p>';
      h += '<h2 class="h2" style="margin-top:12px">Palabras de ejemplo</h2><div>';
      d.words.forEach(function (w) {
        var art = O.artFor[w[0]];
        var th = art ? O.artSvg(art, w[2]) : e(w[3] || w[0].charAt(0));
        h += '<div class="wrow"><div class="thumb" lang="ja">' + th + '</div><div style="flex:1;min-width:0"><div class="w-jp" lang="ja">' + e(w[0]) + (w[3] ? '<span class="w-k">' + e(w[3]) + '</span>' : '') + '</div>' + rj(w[1]) + '<div class="sub small">' + e(w[2]) + '</div></div>' + say(w[0]) + '</div>';
      });
      h += '</div>';
    } else if (l.type === 'vocab') {
      h += '<div class="grid2">' + d.words.map(function (w) {
        return '<div class="vcard"><div class="art">' + O.artSvg(w.art, w.es) + '</div><div class="nm" lang="ja">' + e(w.jp) + '</div><div class="meta"><div>' +
          (w.kanji ? '<div class="jp" lang="ja">' + e(w.kanji) + '</div>' : '') + '<div>' + rj(w.ro) + '</div><div class="small">' + e(w.es) + '</div></div>' + say(w.jp) + '</div></div>';
      }).join('') + '</div>';
      h += '<h2 class="h2">Frases de ejemplo</h2><div>' + d.words.map(function (w) { return exRow(w.ex); }).join('') + '</div>';
    } else if (l.type === 'numbers') {
      h += '<div class="grid3" lang="ja">' + d.basic.map(function (n) {
        return '<button class="kcell" type="button" data-say="' + e(n[1].split(' / ')[0]) + '" aria-label="' + e(n[0]) + '"><b style="font-size:28px">' + e(n[0]) + '</b><span class="jp" style="font-size:15px">' + e(n[1]) + '</span>' + rj(n[2]) + '<span class="jp" style="font-size:18px">' + e(n[3]) + '</span></button>';
      }).join('') + '</div>';
      h += '<h2 class="h2">Números más grandes</h2><div class="grid2" lang="ja">' + d.big.map(function (n) {
        return '<div class="card"><b>' + e(n[0]) + '</b> <span class="jp">' + e(n[3]) + '</span><div class="jp" style="font-size:18px">' + e(n[1]) + '</div>' + rj(n[2]) + '</div>';
      }).join('') + '</div>';
      h += '<h2 class="h2">Qué recordar</h2><div class="card prose"><ul>' + d.tips.map(function (t) { return '<li>' + e(t) + '</li>'; }).join('') + '</ul></div>';
    } else if (l.type === 'counters') {
      h += d.map(function (c) {
        return '<div class="card stack"><div class="row"><div class="ptile" lang="ja">' + e(c.sym) + '</div><div class="grow" style="flex:1"><div style="font-weight:800">' + e(c.name) + '</div><div class="small sub">' + e(c.use) + '</div></div></div>' +
          '<div class="card soft jp" lang="ja" style="font-size:16px">' + e(c.forms) + '</div>' + exRow(c.ex) + '</div>';
      }).join('');
    } else if (l.type === 'kanji') {
      h += '<p class="small sub">No hay una lista oficial de kanji por nivel. Esta selección reúne caracteres frecuentes y útiles para empezar.</p>';
      h += d.items.map(function (k) {
        return '<div class="card"><div class="row" style="align-items:flex-start"><div class="kbig" lang="ja">' + e(k[0]) + '</div><div style="flex:1;min-width:0"><div style="font-weight:800;font-size:18px">' + e(k[3]) + '</div>' +
          '<div class="kv">On: <b lang="ja">' + e(k[1]) + '</b></div><div class="kv">Kun: <b lang="ja">' + e(k[2]) + '</b></div>' +
          '<div style="margin-top:6px"><span class="jp" lang="ja" style="font-weight:700">' + e(k[4][0]) + '</span> ' + rj(k[4][1]) + ' <span class="small sub">· ' + e(k[4][2]) + '</span></div></div>' + say(k[4][0]) + '</div></div>';
      }).join('');
    } else if (l.type === 'verbs') {
      h += '<div class="card mint"><p>' + e(d.intro) + '</p></div>';
      h += d.verbs.map(function (v) {
        return '<div class="card stack"><div class="row between"><div><span class="w-jp" lang="ja">' + e(v.d) + '</span>' + (v.k ? '<span class="w-k" lang="ja">' + e(v.k) + '</span>' : '') + '<div>' + rj(v.dr) + ' <span class="small sub">· ' + e(v.es) + '</span></div></div>' + '<span class="tag">Grupo ' + v.g + '</span></div>' +
          '<div class="vtri"><div><small>Diccionario</small><span class="jp" lang="ja">' + e(v.d) + '</span></div><div><small>Formal</small><span class="jp" lang="ja">' + e(v.m) + '</span>' + rj(v.mr) + '</div><div><small>Forma て</small><span class="jp" lang="ja">' + e(v.t) + '</span>' + rj(v.tr) + '</div></div>' + exRow(v.ex) + '</div>';
      }).join('');
    } else if (l.type === 'form') {
      h += blocks(d.blocks);
    } else if (l.type === 'particle') {
      h += d.items.map(function (p) {
        return '<div class="card stack"><div class="row"><div class="ptile" lang="ja">' + e(p.p) + '</div><div style="flex:1;min-width:0"><div style="font-weight:800">' + e(p.name) + '</div>' + rj(p.ro) + '</div></div><p>' + e(p.use) + '</p><div>' + p.ex.map(exRow).join('') + '</div></div>';
      }).join('');
    } else if (l.type === 'phrases') {
      h += '<div>' + d.phrases.map(function (p) {
        return '<div class="ex"><div style="flex:1;min-width:0"><div class="jp" lang="ja" style="font-size:19px;font-weight:700">' + e(p[0]) + '</div><div>' + rj(p[1]) + '</div><div>' + e(p[2]) + '</div>' + (p[3] ? '<div class="small sub" style="margin-top:4px">' + e(p[3]) + '</div>' : '') + '</div>' + say(p[0]) + '</div>';
      }).join('') + '</div>';
    }
    return h;
  }

  V.leccion = function (id) {
    var l = O.lessons[id];
    if (!l) return V.ruta();
    O.markSeen(id);
    var m = O.moduleById(l.mod);
    var idx = m.lessons.indexOf(l), prev = m.lessons[idx - 1], next = m.lessons[idx + 1];
    var hasQuiz = !!O.buildQuiz('q-' + id);
    var h = back('#m-' + m.id, m.title) + head(l.title, 'Lección ' + (idx + 1) + ' de ' + m.lessons.length + ' · vista');
    h += lessonBody(l);
    if (hasQuiz) h += '<a class="btn primary block" href="#t-q-' + e(id) + '">Practicar esta lección</a>';
    h += '<div class="row between" style="gap:10px">' +
      (prev ? '<a class="btn" href="#l-' + e(prev.id) + '">‹ Anterior</a>' : '<span></span>') +
      (next ? '<a class="btn" href="#l-' + e(next.id) + '">Siguiente ›</a>' : '<a class="btn" href="#m-' + m.id + '">Terminar</a>') + '</div>';
    return h;
  };

  /* ---------- Práctica y tests ---------- */
  V.practica = function () {
    var s = O.state();
    function last(k) { var a = s.tests[k]; if (!a || !a.length) return ''; var r = a[a.length - 1]; return ' · último: ' + r.s + '/' + r.n; }
    var h = head('Práctica', 'Preguntas con explicación al final de cada respuesta.');
    h += '<a class="card mint stack" href="#t-n5-completo" style="color:inherit"><div class="small sub">Estilo JLPT</div><div class="h2" style="margin:0">Simulacro completo N5</div><div class="sub">25 preguntas originales de vocabulario, gramática, lectura y audición' + e(last('n5-completo')) + '</div></a>';
    h += '<h2 class="h2" style="margin-top:8px">Por sección N5</h2><div class="stack">';
    O.testSections.forEach(function (t) {
      h += '<a class="pcard" href="#t-n5-' + t.id + '"><div class="ic">' + e(t.icon) + '</div><div style="flex:1;min-width:0"><div class="t">' + e(t.title) + '</div><div class="s">' + e(t.sub) + e(last('n5-' + t.id)) + '</div></div></a>';
    });
    h += '</div><h2 class="h2">Por tema</h2><div class="stack">';
    O.practice.forEach(function (p) {
      h += '<a class="pcard" href="#t-' + p.id + '"><div class="ic" lang="ja">' + e(p.ic) + '</div><div style="flex:1;min-width:0"><div class="t">' + e(p.title) + '</div><div class="s">' + e(p.sub) + e(last(p.id)) + '</div></div></a>';
    });
    h += '</div><p class="small sub">N4 y N3 estarán disponibles más adelante. Los tests son originales y no son oficiales.</p>';
    return h;
  };

  V.test = function (key) {
    var q = O.buildQuiz(key);
    if (!q) return V.practica();
    var h = back(q.back, q.back === '#practica' ? 'Práctica' : 'Lección') + '<h1 class="h1" style="font-size:22px">' + e(q.title) + '</h1><div id="quiz-host"></div>';
    return {
      html: h,
      after: function (el) {
        var host = el.querySelector('#quiz-host');
        function run() {
          var cur = O.buildQuiz(key);
          O.quiz(host, cur.questions, {
            onFinish: function (r) { O.addTest(key, r); },
            onExit: function () { location.hash = q.back; },
            onRepeat: run
          });
        }
        O.quiz(host, q.questions, {
          onFinish: function (r) { O.addTest(key, r); },
          onExit: function () { location.hash = q.back; },
          onRepeat: run
        });
      }
    };
  };

  /* ---------- Progreso ---------- */
  V.progreso = function () {
    var all = O.overall(), s = O.state();
    var h = head('Tu progreso', 'Se actualiza solo cuando abres una lección.');
    h += '<div class="card mint stack"><div class="row between"><div><div class="res-score" style="text-align:left;font-size:44px">' + all.pct + '%</div><div class="sub">' + all.seen + ' de ' + all.total + ' lecciones vistas</div></div></div>' + bar(all.pct) + '</div>';
    h += '<h2 class="h2" style="margin-top:8px">Por módulo</h2><div class="stack">';
    O.modules.forEach(function (m) {
      var p = O.progress(m.id);
      h += '<a class="card stack" href="#m-' + m.id + '" style="color:inherit"><div class="row between"><b>' + e(m.title) + '</b><b>' + p.pct + '%</b></div>' + bar(p.pct) + '<div class="small sub">' + p.seen + ' de ' + p.total + ' lecciones</div></a>';
    });
    h += '</div><h2 class="h2">Tests</h2>';
    var keys = Object.keys(s.tests).filter(function (k) { return s.tests[k].length; });
    if (!keys.length) {
      h += '<div class="card"><p class="sub">Aún no has hecho ningún test. Prueba uno desde la sección Práctica.</p><a class="btn primary" style="margin-top:12px" href="#practica">Ir a práctica</a></div>';
    } else {
      h += '<div class="stack">';
      keys.forEach(function (k) {
        var a = s.tests[k], r = a[a.length - 1], best = a.reduce(function (m, x) { return Math.max(m, Math.round((x.s / x.n) * 100)); }, 0);
        var name = O.testNames[k] || (k.indexOf('q-') === 0 && O.lessons[k.slice(2)] ? 'Lección: ' + O.lessons[k.slice(2)].title : k);
        h += '<div class="card row between"><div><b>' + e(name) + '</b><div class="small sub">Último: ' + r.s + ' de ' + r.n + ' · ' + a.length + (a.length === 1 ? ' intento' : ' intentos') + '</div></div><span class="tag">Mejor ' + best + '%</span></div>';
      });
      h += '</div>';
    }
    return h;
  };

  /* ---------- Menú ---------- */
  V.menu = function () {
    var s = O.state();
    function row(href, t, sub) { return '<a class="lrow" href="' + href + '"><span style="flex:1;min-width:0"><span class="t" style="display:block">' + e(t) + '</span>' + (sub ? '<span class="sub small">' + e(sub) + '</span>' : '') + '</span><span aria-hidden="true">›</span></a>'; }
    var h = head('Menú');
    h += '<div class="card row between"><div><b>Mostrar romaji</b><div class="small sub">La lectura con letras latinas junto al japonés</div></div><button class="sw" id="sw-rj" type="button" role="switch" aria-checked="' + (s.prefs.romaji ? 'true' : 'false') + '" aria-label="Mostrar romaji"></button></div>';
    h += '<div>' + row('#perfil', 'Mi perfil', s.profile.name || 'Nombre y correo (opcional)') + row('#g-pronunciacion', 'Pronunciación para hispanohablantes') + row('#g-jlpt', 'Cómo rendir el JLPT desde Latinoamérica') + row('#g-examen', 'Cómo es el examen N5, N4 y N3') + row('#copia', 'Copia de seguridad', 'Guardar o restaurar tu progreso') + row('#acerca', 'Acerca de Osakapp') + row('#reiniciar', 'Reiniciar progreso') + '</div>';
    return {
      html: h,
      after: function (el) {
        el.querySelector('#sw-rj').addEventListener('click', function () {
          O.setRomaji(!O.state().prefs.romaji);
          this.setAttribute('aria-checked', O.state().prefs.romaji ? 'true' : 'false');
        });
      }
    };
  };

  V.perfil = function () {
    var p = O.state().profile;
    var h = back('#menu', 'Menú') + head('Mi perfil', 'Solo para recordar quién estudia. Se guarda únicamente en este navegador.');
    h += '<div class="row"><div class="avatar" id="av" aria-hidden="true">' + e((p.name || '?').charAt(0).toUpperCase()) + '</div><div class="small sub">No hay cuentas ni contraseñas. Si borras los datos del navegador, se pierde el perfil.</div></div>';
    h += '<form id="pf" class="stack" novalidate><div class="field"><label for="pf-name">Nombre</label><input class="input" id="pf-name" maxlength="60" autocomplete="given-name" value="' + e(p.name) + '"></div>' +
      '<div class="field"><label for="pf-mail">Correo (opcional)</label><input class="input" id="pf-mail" type="email" maxlength="120" autocomplete="email" value="' + e(p.email) + '"></div>' +
      '<div id="pf-msg" aria-live="polite"></div><button class="btn primary block" type="submit">Guardar</button></form>';
    return {
      html: h,
      after: function (el) {
        var f = el.querySelector('#pf');
        f.addEventListener('submit', function (ev) {
          ev.preventDefault();
          var name = el.querySelector('#pf-name').value.trim(), mail = el.querySelector('#pf-mail').value.trim();
          var msg = el.querySelector('#pf-msg');
          if (mail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) { msg.innerHTML = '<div class="msg err">El correo no parece válido. Revísalo o déjalo vacío.</div>'; return; }
          var s = O.state(); s.profile.name = name; s.profile.email = mail;
          var ok = O.save();
          el.querySelector('#av').textContent = (name || '?').charAt(0).toUpperCase();
          msg.innerHTML = '<div class="msg">' + (ok ? 'Perfil guardado.' : 'Guardado solo mientras esta pestaña esté abierta: tu navegador no permite almacenamiento.') + '</div>';
        });
      }
    };
  };

  V.guia = function (key) {
    var g = O.guides[key];
    if (!g) return V.menu();
    return back('#menu', 'Menú') + head(g.title, g.sub) + blocks(g.blocks);
  };
  V.acerca = function () {
    var g = O.guides.acerca;
    return back('#menu', 'Menú') + head(g.title, g.sub) + blocks(g.blocks);
  };

  V.copia = function () {
    var h = back('#menu', 'Menú') + head('Copia de seguridad', 'Tu progreso vive solo en este navegador. Copia este texto para guardarlo o pásalo a otro dispositivo.');
    h += '<div class="card stack"><label class="sr" for="bk-out">Tu copia</label><textarea class="input" id="bk-out" readonly></textarea><div class="row" style="flex-wrap:wrap"><button class="btn primary" id="bk-copy" type="button">Copiar</button><button class="btn" id="bk-dl" type="button">Descargar archivo</button></div><div id="bk-msg1" aria-live="polite"></div></div>';
    h += '<div class="card stack"><b>Restaurar</b><p class="small sub">Pega una copia o elige el archivo. Reemplaza tu progreso actual.</p><label class="sr" for="bk-in">Pegar copia</label><textarea class="input" id="bk-in" placeholder="Pega aquí tu copia"></textarea><input type="file" id="bk-file" accept=".json,application/json" aria-label="Elegir archivo de copia"><button class="btn primary" id="bk-imp" type="button">Restaurar</button><div id="bk-msg2" aria-live="polite"></div></div>';
    return {
      html: h,
      after: function (el) {
        var out = el.querySelector('#bk-out');
        out.value = O.exportJSON();
        el.querySelector('#bk-copy').addEventListener('click', function () {
          var m = el.querySelector('#bk-msg1');
          function fallback() { out.focus(); out.select(); m.innerHTML = '<div class="msg">Texto seleccionado: cópialo con el menú de tu navegador.</div>'; }
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(out.value).then(function () { m.innerHTML = '<div class="msg">Copiado.</div>'; }, fallback);
          } else fallback();
        });
        el.querySelector('#bk-dl').addEventListener('click', function () {
          try {
            var a = document.createElement('a');
            a.href = URL.createObjectURL(new Blob([out.value], { type: 'application/json' }));
            a.download = 'osakapp-copia.json';
            document.body.appendChild(a); a.click(); a.remove();
            el.querySelector('#bk-msg1').innerHTML = '<div class="msg">Si no se descargó nada, usa Copiar.</div>';
          } catch (err) { el.querySelector('#bk-msg1').innerHTML = '<div class="msg err">No se pudo descargar. Usa Copiar.</div>'; }
        });
        var inp = el.querySelector('#bk-in');
        el.querySelector('#bk-file').addEventListener('change', function (ev) {
          var f = ev.target.files && ev.target.files[0];
          if (!f) return;
          var r = new FileReader();
          r.onload = function () { inp.value = String(r.result || ''); };
          r.readAsText(f);
        });
        el.querySelector('#bk-imp').addEventListener('click', function () {
          var m = el.querySelector('#bk-msg2');
          var res = O.importJSON(inp.value);
          if (res.ok) { O.applyPrefs(); m.innerHTML = '<div class="msg">Copia restaurada. Ya puedes seguir desde <a href="#inicio">Inicio</a>.</div>'; out.value = O.exportJSON(); }
          else m.innerHTML = '<div class="msg err">' + e(res.error) + '</div>';
        });
      }
    };
  };

  V.reiniciar = function () {
    var h = back('#menu', 'Menú') + head('Reiniciar progreso', 'Borra lecciones vistas, resultados de tests y perfil de este navegador.');
    h += '<div class="card stack" id="rs"><p>Esta acción no se puede deshacer. Si quieres conservar algo, haz antes una copia de seguridad.</p><button class="btn block" id="rs-ask" type="button">Borrar mi progreso y perfil</button></div>';
    return {
      html: h,
      after: function (el) {
        var box = el.querySelector('#rs');
        el.querySelector('#rs-ask').addEventListener('click', function () {
          box.innerHTML = '<p><b>¿Seguro?</b> Se borrará todo lo guardado en este navegador.</p><button class="btn primary block" id="rs-yes" type="button">Sí, borrar todo</button><button class="btn block" id="rs-no" type="button">Cancelar</button>';
          box.querySelector('#rs-no').addEventListener('click', function () { location.hash = '#menu'; });
          box.querySelector('#rs-yes').addEventListener('click', function () {
            O.reset(); O.applyPrefs();
            box.innerHTML = '<p class="msg">Listo, todo quedó en cero.</p><a class="btn primary block" href="#inicio">Volver al inicio</a>';
          });
        });
      }
    };
  };
})(window.OSAKA);
