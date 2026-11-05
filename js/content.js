/* Registro de módulos y lecciones, progreso y generadores de preguntas. */
window.OSAKA = window.OSAKA || {};
(function (O) {
  'use strict';
  var shuffle = O.shuffle;

  /* ---------- Módulos y lecciones ---------- */
  var mods = [];
  O.lessons = {};
  O.lessonList = [];

  function addMod(id, title, sub, desc, practice, lessons) {
    var m = { id: id, title: title, sub: sub, desc: desc, practice: practice, lessons: [] };
    lessons.forEach(function (l) {
      l.mod = id;
      m.lessons.push(l);
      O.lessons[l.id] = l;
      O.lessonList.push(l);
    });
    mods.push(m);
  }
  function kanaLessons(kind) {
    return O.kana[kind].rows.map(function (r) {
      return { id: kind + '-' + r.id, title: r.title, sub: r.chars.slice(0, 5).map(function (c) { return c[0]; }).join(' '), type: 'kana', kind: kind, data: r };
    });
  }

  addMod('hira', 'Hiragana', '46 sonidos base, dakuten y sílabas combinadas', 'El primer alfabeto japonés. Se usa para las palabras japonesas y la gramática.', 'hira', kanaLessons('hira'));
  addMod('kata', 'Katakana', 'El alfabeto de las palabras extranjeras', 'Tiene los mismos sonidos que el hiragana. Se usa para palabras de origen extranjero.', 'kata', kanaLessons('kata'));
  addMod('voc', 'Vocabulario ilustrado', 'Palabras con dibujo, kanji y romaji', 'Aprende cada palabra con su ilustración, su kanji, su kana y su romaji.', 'vocab',
    O.vocabSets.map(function (s) { return { id: s.id, title: s.title, sub: s.sub, type: 'vocab', data: s }; })
      .concat([
        { id: 'voc-num', title: 'Números', sub: 'いち, に, さん…', type: 'numbers', data: O.numbers },
        { id: 'voc-cnt', title: 'Contadores', sub: 'ひとつ, ふたり, 3まい…', type: 'counters', data: O.counters }
      ]));
  addMod('kan', 'Kanji básicos', 'Caracteres frecuentes, agrupados por tema', 'Kanji frecuentes con su lectura on, su lectura kun y palabras de ejemplo.', 'kanji',
    O.kanjiGroups.map(function (g) { return { id: g.id, title: g.title, sub: g.sub, type: 'kanji', data: g }; }));
  addMod('vrb', 'Verbos', 'Con forma de diccionario, ます y て', 'Los verbos más usados con sus tres formas principales.', 'verbos',
    O.verbSets.map(function (s) { return { id: s.id, title: s.title, sub: s.sub, type: 'verbs', data: s }; }));
  addMod('frm', 'Formas verbales', 'Diccionario, formal ます y て', 'Cómo se forman y para qué sirve cada forma.', 'formas',
    O.formLessons.map(function (s) { return { id: s.id, title: s.title, sub: s.sub, type: 'form', data: s }; }));
  addMod('par', 'Partículas', 'は, が, を, に, で…', 'Las palabras pequeñas que dan sentido a la oración.', 'particulas',
    O.particleLessons.map(function (s) { return { id: s.id, title: s.title, sub: s.sub, type: 'particle', data: s }; }));
  addMod('fra', 'Frases de supervivencia', 'Para moverte por la ciudad', 'Frases para transporte, comida, compras y emergencias.', 'frases',
    O.phraseLessons.map(function (s) { return { id: s.id, title: s.title, sub: s.sub, type: 'phrases', data: s }; }));

  O.modules = mods;
  O.moduleById = function (id) { for (var i = 0; i < mods.length; i++) if (mods[i].id === id) return mods[i]; return null; };

  /* Ilustración por palabra (kana → id de SVG) */
  O.artFor = {};
  O.vocabSets.forEach(function (s) { s.words.forEach(function (w) { O.artFor[w.jp] = w.art; }); });

  /* ---------- Progreso ---------- */
  O.isSeen = function (id) { return !!O.state().seen[id]; };
  O.progress = function (modId) {
    var m = O.moduleById(modId), seen = 0;
    m.lessons.forEach(function (l) { if (O.isSeen(l.id)) seen++; });
    var total = m.lessons.length;
    return { seen: seen, total: total, pct: total ? Math.round((seen / total) * 100) : 0 };
  };
  O.overall = function () {
    var seen = 0, total = O.lessonList.length;
    O.lessonList.forEach(function (l) { if (O.isSeen(l.id)) seen++; });
    return { seen: seen, total: total, pct: total ? Math.round((seen / total) * 100) : 0 };
  };
  O.nextLesson = function () {
    var s = O.state(), list = O.lessonList, i, start = 0;
    if (s.last) {
      for (i = 0; i < list.length; i++) if (list[i].id === s.last) { start = i + 1; break; }
    }
    for (i = start; i < list.length; i++) if (!O.isSeen(list[i].id)) return list[i];
    for (i = 0; i < start; i++) if (!O.isSeen(list[i].id)) return list[i];
    return null;
  };

  /* ---------- Generadores de preguntas ---------- */
  function uniqBy(arr, keyFn, skipKey, n) {
    var seen = {}, out = [];
    seen[skipKey] = 1;
    arr.forEach(function (x) {
      var k = keyFn(x);
      if (!seen[k] && out.length < n) { seen[k] = 1; out.push(x); }
    });
    return out;
  }
  function allChars(kind) {
    var out = [];
    O.kana[kind].rows.forEach(function (r) { r.chars.forEach(function (c) { out.push(c); }); });
    return out;
  }
  function allWords() {
    var out = [];
    O.vocabSets.forEach(function (s) { s.words.forEach(function (w) { out.push(w); }); });
    return out;
  }
  function allKanji() {
    var out = [];
    O.kanjiGroups.forEach(function (g) { g.items.forEach(function (k) { out.push(k); }); });
    return out;
  }
  function allVerbs() {
    var out = [];
    O.verbSets.forEach(function (s) { s.verbs.forEach(function (v) { out.push(v); }); });
    return out;
  }
  function allPhrases() {
    var out = [];
    O.phraseLessons.forEach(function (l) { l.phrases.forEach(function (p) { out.push(p); }); });
    return out;
  }

  function kanaQs(pool, all) {
    return pool.map(function (c, idx) {
      var rev = idx % 2 === 1;
      var others = shuffle(all.filter(function (x) { return x[1] !== c[1] && x[0] !== c[0]; }));
      var d = uniqBy(others, function (x) { return rev ? x[0] : x[1]; }, rev ? c[0] : c[1], 3);
      if (!rev) return { prompt: '¿Cómo se lee este carácter?', big: c[0], options: [c[1]].concat(d.map(function (x) { return x[1]; })), answer: 0, explain: c[0] + ' se lee «' + c[1] + '».' };
      return { prompt: '¿Qué carácter se lee «' + c[1] + '»?', options: [c[0]].concat(d.map(function (x) { return x[0]; })), answer: 0, explain: '«' + c[1] + '» se escribe ' + c[0] + '.' };
    });
  }

  function vocabQs(words, all) {
    return words.map(function (w, idx) {
      var others = shuffle(all.filter(function (x) { return x.jp !== w.jp && x.es !== w.es; }));
      var d = uniqBy(others, function (x) { return x.jp; }, w.jp, 3);
      if (idx % 2 === 0) {
        return { prompt: '¿Qué palabra es esta?', art: w.art, artLabel: w.es, options: [{ t: w.jp, r: w.ro }].concat(d.map(function (x) { return { t: x.jp, r: x.ro }; })), answer: 0, explain: w.jp + ' (' + w.ro + ') significa «' + w.es + '».' + (w.kanji ? ' Kanji: ' + w.kanji + '.' : '') };
      }
      return { prompt: '¿Cómo se dice «' + w.es + '»?', options: [{ t: w.jp, r: w.ro }].concat(d.map(function (x) { return { t: x.jp, r: x.ro }; })), answer: 0, explain: w.jp + ' (' + w.ro + ') = ' + w.es + '.' };
    });
  }

  function kanjiQs(items, all) {
    return items.map(function (k, idx) {
      var others = shuffle(all.filter(function (x) { return x[0] !== k[0]; }));
      var type = idx % 3;
      var d;
      if (type === 0) {
        d = uniqBy(others, function (x) { return x[3]; }, k[3], 3);
        return { prompt: '¿Qué significa este kanji?', big: k[0], options: [k[3]].concat(d.map(function (x) { return x[3]; })), answer: 0, explain: k[0] + ' significa «' + k[3] + '». Lecturas: ' + k[1] + ' (on), ' + k[2] + ' (kun).' };
      }
      if (type === 1) {
        d = uniqBy(others, function (x) { return x[0]; }, k[0], 3);
        return { prompt: '¿Qué kanji significa «' + k[3] + '»?', options: [k[0]].concat(d.map(function (x) { return x[0]; })), answer: 0, explain: '«' + k[3] + '» se escribe ' + k[0] + '.' };
      }
      d = uniqBy(others, function (x) { return x[4][1]; }, k[4][1], 3);
      return { prompt: '¿Cómo se lee ' + k[4][0] + '?', big: k[4][0], options: [k[4][1]].concat(d.map(function (x) { return x[4][1]; })), answer: 0, explain: k[4][0] + ' se lee ' + k[4][1] + ' («' + k[4][2] + '»).' };
    });
  }

  function verbWrongs(v, form) {
    var d = v.d, stem = d.slice(0, -1), c;
    if (d === 'する' || /する$/.test(d)) {
      var pre = d.slice(0, -2);
      c = form === 'm' ? ['すます', 'するます', 'しります'] : ['すって', 'すんで', 'しいて'];
      return c.map(function (x) { return pre + x; });
    }
    if (d === 'くる') return form === 'm' ? ['くります', 'くます', 'こます'] : ['くって', 'くいて', 'きいて'];
    var correct = form === 'm' ? v.m : v.t;
    if (form === 'm') c = [d + 'ます', stem + 'ます', stem + 'ります', stem + 'らます', stem + 'ません'];
    else c = ['って', 'んで', 'いて', 'いで', 'して', 'て'].map(function (s) { return stem + s; });
    c = c.filter(function (x, i) { return x !== correct && c.indexOf(x) === i; });
    return shuffle(c).slice(0, 3);
  }
  function verbQs(verbs) {
    return verbs.map(function (v, idx) {
      var form = idx % 2 === 0 ? 'm' : 't';
      var correct = form === 'm' ? v.m : v.t;
      var label = form === 'm' ? 'forma formal (ます)' : 'forma て';
      var cr = form === 'm' ? v.mr : v.tr;
      return { prompt: '¿Cuál es la ' + label + ' de ' + v.d + ' («' + v.es + '»)?', options: [{ t: correct, r: cr }].concat(verbWrongs(v, form).map(function (x) { return x; })), answer: 0, explain: v.d + ' → ' + correct + ' (' + cr + ').' };
    });
  }

  function particleQs(lessons) {
    var out = [];
    lessons.forEach(function (l) {
      l.data.quiz.forEach(function (q) {
        out.push({ prompt: 'Elige la partícula:\n' + q.s.replace('{p}', '＿＿') + '\n(' + q.es + ')', options: [q.ans].concat(q.bad), answer: 0, explain: q.s.replace('{p}', q.ans) + ' · ' + q.es });
      });
    });
    return out;
  }

  function phraseQs(phrases, all) {
    return phrases.map(function (p) {
      var others = shuffle(all.filter(function (x) { return x[0] !== p[0] && x[2] !== p[2]; }));
      var d = uniqBy(others, function (x) { return x[0]; }, p[0], 3);
      return { prompt: '¿Cómo se dice «' + p[2] + '»?', options: [{ t: p[0], r: p[1] }].concat(d.map(function (x) { return { t: x[0], r: x[1] }; })), answer: 0, explain: p[0] + ' (' + p[1] + ') = ' + p[2] };
    });
  }

  function lessonQuiz(id) {
    var l = O.lessons[id];
    if (!l) return null;
    var d = l.data, pool;
    switch (l.type) {
      case 'kana':
        pool = shuffle(d.chars.concat(d.chars)).slice(0, Math.min(10, d.chars.length * 2));
        return kanaQs(pool, allChars(l.kind));
      case 'vocab': return vocabQs(shuffle(d.words).slice(0, 8), allWords());
      case 'numbers': return shuffle(d.quiz);
      case 'counters': return shuffle(O.countersQuiz);
      case 'kanji': return kanjiQs(shuffle(d.items).slice(0, 8), allKanji());
      case 'verbs': return verbQs(shuffle(d.verbs).slice(0, 8));
      case 'form': return d.quiz.slice();
      case 'particle': return particleQs([l]);
      case 'phrases': return phraseQs(shuffle(d.phrases).slice(0, 7), allPhrases());
    }
    return null;
  }

  /* ---------- Secciones de práctica ---------- */
  O.practice = [
    { id: 'hira', title: 'Hiragana', sub: 'Lee y reconoce caracteres', ic: 'あ' },
    { id: 'kata', title: 'Katakana', sub: 'Lee y reconoce caracteres', ic: 'ア' },
    { id: 'vocab', title: 'Vocabulario', sub: 'Dibujos y palabras', ic: '語' },
    { id: 'kanji', title: 'Kanji básicos', sub: 'Significado y lectura', ic: '漢' },
    { id: 'verbos', title: 'Verbos', sub: 'Formas ます y て', ic: '動' },
    { id: 'formas', title: 'Formas verbales', sub: 'Grupos y reglas', ic: '形' },
    { id: 'particulas', title: 'Partículas', sub: 'Completa la oración', ic: 'は' },
    { id: 'frases', title: 'Frases de supervivencia', sub: 'Qué decir y cuándo', ic: '話' }
  ];
  O.testNames = {
    hira: 'Hiragana', kata: 'Katakana', vocab: 'Vocabulario', kanji: 'Kanji básicos', verbos: 'Verbos', formas: 'Formas verbales', particulas: 'Partículas', frases: 'Frases',
    'n5-vocab': 'N5 · Vocabulario', 'n5-gram': 'N5 · Gramática', 'n5-lectura': 'N5 · Lectura', 'n5-audicion': 'N5 · Audición', 'n5-completo': 'N5 · Simulacro completo'
  };

  O.buildQuiz = function (key) {
    var qs, title = O.testNames[key] || 'Práctica', back = '#practica';
    if (key.indexOf('q-') === 0) {
      var id = key.slice(2);
      var l = O.lessons[id];
      if (!l) return null;
      qs = lessonQuiz(id);
      return qs ? { key: key, title: 'Practicar: ' + l.title, questions: qs, back: '#l-' + id } : null;
    }
    switch (key) {
      case 'hira': case 'kata': qs = kanaQs(shuffle(allChars(key)).slice(0, 12), allChars(key)); break;
      case 'vocab': qs = vocabQs(shuffle(allWords()).slice(0, 12), allWords()); break;
      case 'kanji': qs = kanjiQs(shuffle(allKanji()).slice(0, 12), allKanji()); break;
      case 'verbos': qs = verbQs(shuffle(allVerbs()).slice(0, 12)); break;
      case 'formas':
        qs = []; O.formLessons.forEach(function (f) { qs = qs.concat(f.quiz); }); qs = shuffle(qs); break;
      case 'particulas': qs = shuffle(particleQs(O.particleLessons.map(function (p) { return { data: p }; }))).slice(0, 12); break;
      case 'frases': qs = phraseQs(shuffle(allPhrases()).slice(0, 10), allPhrases()); break;
      case 'n5-vocab': case 'n5-gram': case 'n5-lectura': case 'n5-audicion':
        qs = O.testBank.filter(function (q) { return q.sec === key.slice(3); }); break;
      case 'n5-completo': qs = O.testBank.slice(); break;
      default: return null;
    }
    return { key: key, title: title, questions: qs, back: back };
  };
})(window.OSAKA);
