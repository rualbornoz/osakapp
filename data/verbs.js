/* Verbos (con forma diccionario, ます y て) y lecciones de formas verbales. */
window.OSAKA = window.OSAKA || {};
(function (O) {
  'use strict';

  /* d=diccionario, dr=romaji, k=kanji, es, m=ます, mr, t=て, tr, g=grupo, ex=[jp, romaji, es] */
  function V(d, dr, k, es, m, mr, t, tr, g, ex) { return { d: d, dr: dr, k: k, es: es, m: m, mr: mr, t: t, tr: tr, g: g, ex: ex }; }

  O.verbSets = [
    { id: 'vrb-1', title: 'Verbos en -ru (grupo 2)', sub: 'たべる, みる, ねる…',
      intro: 'Los verbos del grupo 2 terminan en いる o える. Para conjugarlos solo quitas る y añades la terminación: たべる → たべます → たべて.',
      verbs: [
        V('たべる', 'taberu', '食べる', 'comer', 'たべます', 'tabemasu', 'たべて', 'tabete', 2, ['あさ ごはんを たべます。', 'Asa gohan o tabemasu.', 'Desayuno.']),
        V('みる', 'miru', '見る', 'ver, mirar', 'みます', 'mimasu', 'みて', 'mite', 2, ['テレビを みます。', 'Terebi o mimasu.', 'Veo televisión.']),
        V('おきる', 'okiru', '起きる', 'levantarse', 'おきます', 'okimasu', 'おきて', 'okite', 2, ['6じに おきます。', 'Rokuji ni okimasu.', 'Me levanto a las 6.']),
        V('ねる', 'neru', '寝る', 'dormir, acostarse', 'ねます', 'nemasu', 'ねて', 'nete', 2, ['11じに ねます。', 'Jūichiji ni nemasu.', 'Me acuesto a las 11.']),
        V('でる', 'deru', '出る', 'salir', 'でます', 'demasu', 'でて', 'dete', 2, ['8じに いえを でます。', 'Hachiji ni ie o demasu.', 'Salgo de casa a las 8.']),
        V('いる', 'iru', '居る', 'estar (personas y animales)', 'います', 'imasu', 'いて', 'ite', 2, ['ねこが います。', 'Neko ga imasu.', 'Hay un gato.'])
      ] },
    { id: 'vrb-2', title: 'Verbos en -u (grupo 1) · parte 1', sub: 'いく, のむ, かう…',
      intro: 'Los verbos del grupo 1 cambian la última sílaba. Para ます, la sílaba final pasa a la fila い: のむ → のみます. Para て, depende de la terminación (lo verás en «Formas»).',
      verbs: [
        V('いく', 'iku', '行く', 'ir', 'いきます', 'ikimasu', 'いって', 'itte', 1, ['がっこうへ いきます。', 'Gakkō e ikimasu.', 'Voy a la escuela.']),
        V('のむ', 'nomu', '飲む', 'beber', 'のみます', 'nomimasu', 'のんで', 'nonde', 1, ['おちゃを のみます。', 'Ocha o nomimasu.', 'Tomo té.']),
        V('かう', 'kau', '買う', 'comprar', 'かいます', 'kaimasu', 'かって', 'katte', 1, ['パンを かいます。', 'Pan o kaimasu.', 'Compro pan.']),
        V('よむ', 'yomu', '読む', 'leer', 'よみます', 'yomimasu', 'よんで', 'yonde', 1, ['ほんを よみます。', 'Hon o yomimasu.', 'Leo un libro.']),
        V('はなす', 'hanasu', '話す', 'hablar', 'はなします', 'hanashimasu', 'はなして', 'hanashite', 1, ['ともだちと はなします。', 'Tomodachi to hanashimasu.', 'Hablo con un amigo.']),
        V('かく', 'kaku', '書く', 'escribir', 'かきます', 'kakimasu', 'かいて', 'kaite', 1, ['てがみを かきます。', 'Tegami o kakimasu.', 'Escribo una carta.'])
      ] },
    { id: 'vrb-3', title: 'Verbos en -u (grupo 1) · parte 2', sub: 'のる, かえる, あそぶ…',
      intro: 'Atención con かえる (volver) y はいる (entrar): terminan en える o いる pero son del grupo 1. Hay que aprenderlos como excepciones.',
      verbs: [
        V('のる', 'noru', '乗る', 'subirse (a un medio de transporte)', 'のります', 'norimasu', 'のって', 'notte', 1, ['でんしゃに のります。', 'Densha ni norimasu.', 'Me subo al tren.']),
        V('かえる', 'kaeru', '帰る', 'volver (a casa)', 'かえります', 'kaerimasu', 'かえって', 'kaette', 1, ['5じに うちへ かえります。', 'Goji ni uchi e kaerimasu.', 'Vuelvo a casa a las 5.']),
        V('あう', 'au', '会う', 'encontrarse con', 'あいます', 'aimasu', 'あって', 'atte', 1, ['ともだちに あいます。', 'Tomodachi ni aimasu.', 'Me encuentro con un amigo.']),
        V('まつ', 'matsu', '待つ', 'esperar', 'まちます', 'machimasu', 'まって', 'matte', 1, ['えきで まちます。', 'Eki de machimasu.', 'Espero en la estación.']),
        V('あそぶ', 'asobu', '遊ぶ', 'jugar, pasear', 'あそびます', 'asobimasu', 'あそんで', 'asonde', 1, ['こうえんで あそびます。', 'Kōen de asobimasu.', 'Juego en el parque.']),
        V('はたらく', 'hataraku', '働く', 'trabajar', 'はたらきます', 'hatarakimasu', 'はたらいて', 'hataraite', 1, ['ぎんこうで はたらきます。', 'Ginkō de hatarakimasu.', 'Trabajo en un banco.']),
        V('およぐ', 'oyogu', '泳ぐ', 'nadar', 'およぎます', 'oyogimasu', 'およいで', 'oyoide', 1, ['うみで およぎます。', 'Umi de oyogimasu.', 'Nado en el mar.'])
      ] },
    { id: 'vrb-4', title: 'Verbos irregulares', sub: 'する, くる, ある…',
      intro: 'Solo hay dos verbos totalmente irregulares: する (hacer) y くる (venir). Con ellos puedes formar cientos de verbos: べんきょうする (estudiar), りょこうする (viajar), etc. ある (haber, para cosas) es normal del grupo 1, pero conviene verlo junto.',
      verbs: [
        V('する', 'suru', '', 'hacer', 'します', 'shimasu', 'して', 'shite', 3, ['しごとを します。', 'Shigoto o shimasu.', 'Trabajo.']),
        V('くる', 'kuru', '来る', 'venir', 'きます', 'kimasu', 'きて', 'kite', 3, ['ともだちが きます。', 'Tomodachi ga kimasu.', 'Viene un amigo.']),
        V('べんきょうする', 'benkyō suru', '勉強する', 'estudiar', 'べんきょうします', 'benkyō shimasu', 'べんきょうして', 'benkyō shite', 3, ['にほんごを べんきょうします。', 'Nihongo o benkyō shimasu.', 'Estudio japonés.']),
        V('ある', 'aru', '有る', 'haber, tener (cosas)', 'あります', 'arimasu', 'あって', 'atte', 1, ['ほんが あります。', 'Hon ga arimasu.', 'Hay un libro.'])
      ] }
  ];

  /* Lecciones de formas: bloques de contenido */
  O.formLessons = [
    { id: 'frm-1', title: 'Forma de diccionario y grupos', sub: 'Cómo saber a qué grupo pertenece',
      blocks: [
        { t: 'p', x: 'La forma de diccionario es la que aparece en los diccionarios y se usa con amigos y familia (forma «casual»). Siempre termina en un sonido u: たべる, のむ, いく, かう.' },
        { t: 'h', x: 'Los tres grupos de verbos' },
        { t: 'table', head: ['Grupo', 'Cómo reconocerlo', 'Ejemplos'], rows: [
          ['Grupo 1 (en -u)', 'Casi cualquier terminación: う く ぐ す つ ぬ ぶ む る', 'いく · のむ · かう · のる'],
          ['Grupo 2 (en -ru)', 'Termina en いる o える', 'たべる · みる · ねる · おきる'],
          ['Grupo 3 (irregulares)', 'Solo dos', 'する · くる']
        ] },
        { t: 'tip', x: 'Excepciones frecuentes: かえる (volver), はいる (entrar), はしる (correr) y きる (cortar) terminan en える o いる, pero son del grupo 1.' }
      ],
      quiz: [
        { prompt: '¿A qué grupo pertenece たべる?', options: ['Grupo 2', 'Grupo 1', 'Grupo 3', 'Ninguno'], answer: 0, explain: 'たべる termina en える y es un verbo regular de grupo 2.' },
        { prompt: '¿A qué grupo pertenece かえる (volver)?', options: ['Grupo 1', 'Grupo 2', 'Grupo 3', 'Ninguno'], answer: 0, explain: 'Es una excepción: termina en える pero se conjuga como grupo 1.' },
        { prompt: '¿Cuáles son los dos verbos irregulares (grupo 3)?', options: ['する y くる', 'いく y ある', 'する y ある', 'くる y いる'], answer: 0, explain: 'Solo する y くる (y los verbos compuestos con する).' }
      ] },
    { id: 'frm-2', title: 'Forma formal: ます', sub: 'La forma educada para hablar con todos',
      blocks: [
        { t: 'p', x: 'La forma ます es cortés y neutral: es la que usarás con desconocidos, en tiendas y en el trabajo. Es la base de casi todo lo que verás en el N5.' },
        { t: 'h', x: 'Cómo se forma' },
        { t: 'table', head: ['Grupo', 'Regla', 'Ejemplo'], rows: [
          ['Grupo 2', 'Quita る y añade ます', 'たべる → たべます'],
          ['Grupo 1', 'La última sílaba pasa a la fila い y añade ます', 'のむ → のみます · かう → かいます'],
          ['Grupo 3', 'Se aprenden de memoria', 'する → します · くる → きます']
        ] },
        { t: 'h', x: 'Los cuatro tiempos de ます' },
        { t: 'table', head: ['Forma', 'Japonés', 'Significado'], rows: [
          ['Presente afirmativo', 'たべます', 'como / comeré'],
          ['Presente negativo', 'たべません', 'no como'],
          ['Pasado afirmativo', 'たべました', 'comí'],
          ['Pasado negativo', 'たべませんでした', 'no comí']
        ] },
        { t: 'tip', x: 'Para preguntar, añade か al final: たべますか。 (¿comes?)' }
      ],
      quiz: [
        { prompt: '¿Cuál es la forma ます de のむ?', options: ['のみます', 'のまます', 'のむます', 'のんます'], answer: 0, explain: 'Grupo 1: むのみ → のみます.' },
        { prompt: '¿Cómo se dice «no comí»?', options: ['たべませんでした', 'たべません', 'たべました', 'たべなかった'], answer: 0, explain: 'El pasado negativo formal es ～ませんでした.' },
        { prompt: '¿Cuál es la forma ます de くる?', options: ['きます', 'くります', 'こます', 'くます'], answer: 0, explain: 'くる es irregular: きます.' }
      ] },
    { id: 'frm-3', title: 'Forma て', sub: 'Pedir, encadenar acciones y más',
      blocks: [
        { t: 'p', x: 'La forma て es una de las más usadas: sirve para pedir (～てください), encadenar acciones y formar el presente continuo (～ています).' },
        { t: 'h', x: 'Reglas para el grupo 1' },
        { t: 'table', head: ['Termina en', 'Cambia a', 'Ejemplo'], rows: [
          ['う · つ · る', 'って', 'かう → かって · まつ → まって · のる → のって'],
          ['む · ぶ · ぬ', 'んで', 'のむ → のんで · あそぶ → あそんで'],
          ['く', 'いて', 'かく → かいて · はたらく → はたらいて'],
          ['ぐ', 'いで', 'およぐ → およいで'],
          ['す', 'して', 'はなす → はなして']
        ] },
        { t: 'tip', x: 'Excepción: いく (ir) hace いって, no いいて.' },
        { t: 'h', x: 'Grupos 2 y 3' },
        { t: 'table', head: ['Grupo', 'Regla', 'Ejemplo'], rows: [
          ['Grupo 2', 'Quita る y añade て', 'たべる → たべて'],
          ['Grupo 3', 'Se aprenden de memoria', 'する → して · くる → きて']
        ] },
        { t: 'h', x: 'Usos básicos' },
        { t: 'table', head: ['Uso', 'Ejemplo', 'Significado'], rows: [
          ['Pedir', 'みずを ください。 / まって ください。', 'Espera, por favor'],
          ['Encadenar', 'おきて、ごはんを たべます。', 'Me levanto y desayuno'],
          ['En progreso', 'いま たべています。', 'Estoy comiendo']
        ] }
      ],
      quiz: [
        { prompt: '¿Cuál es la forma て de のむ?', options: ['のんで', 'のって', 'のいて', 'のみて'], answer: 0, explain: 'む → んで.' },
        { prompt: '¿Cuál es la forma て de いく?', options: ['いって', 'いいて', 'いきて', 'いんで'], answer: 0, explain: 'いく es la excepción: いって.' },
        { prompt: '¿Cuál es la forma て de かく?', options: ['かいて', 'かって', 'かんで', 'かして'], answer: 0, explain: 'く → いて.' },
        { prompt: '¿Cuál es la forma て de たべる?', options: ['たべて', 'たべって', 'たべんで', 'たべいて'], answer: 0, explain: 'Grupo 2: quita る y añade て.' }
      ] }
  ];
})(window.OSAKA);
