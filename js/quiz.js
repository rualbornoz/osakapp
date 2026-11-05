/* Motor de tests: opciones mezcladas, comprobar, explicación y resultado por sección.
   Pregunta: { prompt, big?, art?, passage?, say?, transcript?, options: [string | {t, r}], answer: índice, explain, sec? } */
window.OSAKA = window.OSAKA || {};
(function (O) {
  'use strict';
  var e = O.esc;

  var SECNAMES = { vocab: 'Vocabulario', gram: 'Gramática', lectura: 'Lectura', audicion: 'Audición' };

  function optHtml(o) {
    if (o && typeof o === 'object') return '<span class="jp">' + e(o.t) + '</span>' + (o.r ? ' <span class="rj">' + e(o.r) + '</span>' : '');
    return '<span class="jp">' + e(o) + '</span>';
  }
  function optText(o) { return o && typeof o === 'object' ? o.t : o; }

  O.quiz = function (host, questions, opts) {
    opts = opts || {};
    var qs = questions.slice();
    var i = 0, score = 0, sel = -1, checked = false, per = {}, finished = false, order = [];

    function prep() {
      var q = qs[i];
      order = O.shuffle(q.options.map(function (o, idx) { return { o: o, ok: idx === q.answer }; }));
    }

    function render() {
      if (i >= qs.length) return result();
      var q = qs[i];
      if (!order.length) prep();
      var pct = Math.round((i / qs.length) * 100);
      var h = '<div class="qz">';
      h += '<div class="qz-top"><span>' + (i + 1) + ' de ' + qs.length + '</span><div class="bar"><i style="width:' + pct + '%"></i></div></div>';
      if (q.passage) h += '<div class="qz-pass" lang="ja">' + e(q.passage) + '</div>';
      if (q.art && O.artSvg) h += '<div class="qz-art">' + O.artSvg(q.art, q.artLabel || 'Ilustración') + '</div>';
      if (q.say) h += '<div class="row"><button class="btn primary" type="button" data-say="' + e(q.say) + '">Escuchar</button></div>';
      h += '<h2 class="qz-q">' + e(q.prompt) + '</h2>';
      if (q.big) h += '<div class="qz-big" lang="ja">' + e(q.big) + '</div>';
      h += '<div class="opts" role="group" aria-label="Opciones">';
      order.forEach(function (x, idx) {
        h += '<button class="opt" type="button" data-i="' + idx + '" aria-pressed="false">' + optHtml(x.o) + '<span class="mk" aria-hidden="true"></span></button>';
      });
      h += '</div>';
      h += '<div id="qz-fb" aria-live="polite"></div>';
      h += '<button class="btn primary block" id="qz-go" type="button" disabled>Comprobar respuesta</button>';
      h += '</div>';
      host.innerHTML = h;
      sel = -1; checked = false;

      var buttons = host.querySelectorAll('.opt');
      var go = host.querySelector('#qz-go');
      Array.prototype.forEach.call(buttons, function (b) {
        b.addEventListener('click', function () {
          if (checked) return;
          sel = +b.getAttribute('data-i');
          Array.prototype.forEach.call(buttons, function (x) { x.classList.remove('sel'); x.setAttribute('aria-pressed', 'false'); });
          b.classList.add('sel'); b.setAttribute('aria-pressed', 'true');
          go.disabled = false;
        });
      });
      go.addEventListener('click', function () {
        if (!checked) return check(buttons, go);
        i++; order = []; render();
        window.scrollTo(0, 0);
      });
    }

    function check(buttons, go) {
      if (sel < 0) return;
      checked = true;
      var q = qs[i];
      var okIdx = -1;
      order.forEach(function (x, idx) { if (x.ok) okIdx = idx; });
      var good = sel === okIdx;
      var sec = q.sec || '_';
      per[sec] = per[sec] || { s: 0, n: 0 };
      per[sec].n++;
      if (good) { score++; per[sec].s++; }
      Array.prototype.forEach.call(buttons, function (b, idx) {
        b.classList.remove('sel');
        var mk = b.querySelector('.mk');
        if (idx === okIdx) { b.classList.add('ok'); mk.textContent = '✓'; }
        else if (idx === sel) { b.classList.add('no'); mk.textContent = '✕'; }
        b.disabled = true;
      });
      var fb = '<div class="fb"><b>' + (good ? '¡Correcto!' : 'Respuesta correcta: ' + e(optText(order[okIdx].o))) + '</b>';
      if (q.explain) fb += '<span>' + e(q.explain) + '</span>';
      if (q.transcript) fb += '<div class="small" style="margin-top:8px">Transcripción: <span class="jp" lang="ja">' + e(q.transcript) + '</span></div>';
      fb += '</div>';
      host.querySelector('#qz-fb').innerHTML = fb;
      go.textContent = i === qs.length - 1 ? 'Ver resultado' : 'Siguiente';
      go.focus();
    }

    function result() {
      var n = qs.length;
      var pct = Math.round((score / n) * 100);
      var msg = pct >= 80 ? '¡Muy bien! Dominas este tema.' : pct >= 50 ? 'Buen avance. Repasa las explicaciones y vuelve a intentarlo.' : 'Es normal al comienzo. Vuelve a la lección y prueba otra vez.';
      var h = '<div class="qz"><h2 class="qz-q" style="text-align:center">Resultado</h2>';
      h += '<div class="res-score">' + score + '<small> / ' + n + '</small></div>';
      h += '<p class="sub" style="text-align:center">' + pct + '% · ' + msg + '</p>';
      var secs = Object.keys(per).filter(function (k) { return k !== '_'; });
      if (secs.length > 1) {
        h += '<div class="card stack">';
        secs.forEach(function (k) {
          var p = per[k], pp = Math.round((p.s / p.n) * 100);
          h += '<div><div class="row between small"><b>' + e(SECNAMES[k] || k) + '</b><span>' + p.s + ' de ' + p.n + '</span></div><div class="bar" style="margin-top:6px"><i style="width:' + pp + '%"></i></div></div>';
        });
        h += '</div>';
      }
      h += '<button class="btn primary block" id="qz-again" type="button">Repetir</button>';
      h += '<button class="btn block" id="qz-exit" type="button">Volver</button></div>';
      host.innerHTML = h;
      if (!finished) { finished = true; if (opts.onFinish) opts.onFinish({ s: score, n: n, per: per }); }
      host.querySelector('#qz-again').addEventListener('click', function () {
        if (opts.onRepeat) return opts.onRepeat();
        O.quiz(host, O.shuffle(qs), opts);
      });
      host.querySelector('#qz-exit').addEventListener('click', function () {
        if (opts.onExit) opts.onExit(); else location.hash = '#practica';
      });
      window.scrollTo(0, 0);
    }

    render();
  };
})(window.OSAKA);
