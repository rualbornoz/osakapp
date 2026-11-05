/* Vocabulario ilustrado, números y contadores. */
window.OSAKA = window.OSAKA || {};
(function (O) {
  'use strict';

  /* Palabra: id de ilustración, japonés, romaji, español, kanji, ejemplo [jp, romaji, es] */
  function W(art, jp, ro, es, kanji, ex) { return { art: art, jp: jp, ro: ro, es: es, kanji: kanji || '', ex: ex }; }

  O.vocabSets = [
    { id: 'voc-1', title: 'Comida y bebida', sub: 'りんご, みず, パン…', words: [
      W('ringo', 'りんご', 'ringo', 'manzana', '林檎', ['りんごを たべます。', 'Ringo o tabemasu.', 'Como una manzana.']),
      W('mizu', 'みず', 'mizu', 'agua', '水', ['みずを のみます。', 'Mizu o nomimasu.', 'Bebo agua.']),
      W('pan', 'パン', 'pan', 'pan', '', ['パンを かいます。', 'Pan o kaimasu.', 'Compro pan.']),
      W('tamago', 'たまご', 'tamago', 'huevo', '卵', ['たまごが すきです。', 'Tamago ga suki desu.', 'Me gustan los huevos.']),
      W('sakana', 'さかな', 'sakana', 'pescado', '魚', ['さかなを たべます。', 'Sakana o tabemasu.', 'Como pescado.']),
      W('gohan', 'ごはん', 'gohan', 'arroz cocido, comida', 'ご飯', ['ごはんを たべます。', 'Gohan o tabemasu.', 'Como arroz.']),
      W('ocha', 'おちゃ', 'ocha', 'té', 'お茶', ['おちゃを のみます。', 'Ocha o nomimasu.', 'Tomo té.']),
      W('miruku', 'ミルク', 'miruku', 'leche', '', ['ミルクを のみます。', 'Miruku o nomimasu.', 'Tomo leche.'])
    ] },
    { id: 'voc-2', title: 'Naturaleza y animales', sub: 'いぬ, やま, はな…', words: [
      W('inu', 'いぬ', 'inu', 'perro', '犬', ['いぬが います。', 'Inu ga imasu.', 'Hay un perro.']),
      W('neko', 'ねこ', 'neko', 'gato', '猫', ['ねこが すきです。', 'Neko ga suki desu.', 'Me gustan los gatos.']),
      W('tori', 'とり', 'tori', 'pájaro', '鳥', ['とりが います。', 'Tori ga imasu.', 'Hay un pájaro.']),
      W('yama', 'やま', 'yama', 'montaña', '山', ['やまに いきます。', 'Yama ni ikimasu.', 'Voy a la montaña.']),
      W('kawa', 'かわ', 'kawa', 'río', '川', ['かわが あります。', 'Kawa ga arimasu.', 'Hay un río.']),
      W('ki', 'き', 'ki', 'árbol', '木', ['きが あります。', 'Ki ga arimasu.', 'Hay un árbol.']),
      W('hana', 'はな', 'hana', 'flor', '花', ['はなが きれいです。', 'Hana ga kirei desu.', 'Las flores son bonitas.']),
      W('tsuki', 'つき', 'tsuki', 'luna', '月', ['つきが きれいです。', 'Tsuki ga kirei desu.', 'La luna es hermosa.']),
      W('hoshi', 'ほし', 'hoshi', 'estrella', '星', ['ほしが みえます。', 'Hoshi ga miemasu.', 'Se ven las estrellas.']),
      W('ame', 'あめ', 'ame', 'lluvia', '雨', ['あめが ふります。', 'Ame ga furimasu.', 'Llueve.'])
    ] },
    { id: 'voc-3', title: 'Casa y cosas', sub: 'いえ, ほん, くるま…', words: [
      W('ie', 'いえ', 'ie', 'casa', '家', ['いえに かえります。', 'Ie ni kaerimasu.', 'Vuelvo a casa.']),
      W('hon', 'ほん', 'hon', 'libro', '本', ['ほんを よみます。', 'Hon o yomimasu.', 'Leo un libro.']),
      W('kuruma', 'くるま', 'kuruma', 'auto', '車', ['くるまで いきます。', 'Kuruma de ikimasu.', 'Voy en auto.']),
      W('densha', 'でんしゃ', 'densha', 'tren', '電車', ['でんしゃに のります。', 'Densha ni norimasu.', 'Me subo al tren.']),
      W('kasa', 'かさ', 'kasa', 'paraguas', '傘', ['かさが ありますか。', 'Kasa ga arimasu ka.', '¿Tienes paraguas?']),
      W('tokei', 'とけい', 'tokei', 'reloj', '時計', ['とけいを みます。', 'Tokei o mimasu.', 'Miro el reloj.']),
      W('denwa', 'でんわ', 'denwa', 'teléfono', '電話', ['でんわを かけます。', 'Denwa o kakemasu.', 'Hago una llamada.']),
      W('kutsu', 'くつ', 'kutsu', 'zapatos', '靴', ['くつを かいます。', 'Kutsu o kaimasu.', 'Compro zapatos.'])
    ] },
    { id: 'voc-4', title: 'Cuerpo y personas', sub: 'め, くち, て…', words: [
      W('me', 'め', 'me', 'ojo', '目', ['めが いたいです。', 'Me ga itai desu.', 'Me duelen los ojos.']),
      W('kuchi', 'くち', 'kuchi', 'boca', '口', ['くちを あけます。', 'Kuchi o akemasu.', 'Abro la boca.']),
      W('te', 'て', 'te', 'mano', '手', ['てを あらいます。', 'Te o araimasu.', 'Me lavo las manos.']),
      W('mimi', 'みみ', 'mimi', 'oreja, oído', '耳', ['みみが いたいです。', 'Mimi ga itai desu.', 'Me duele el oído.']),
      W('hito', 'ひと', 'hito', 'persona', '人', ['ひとが たくさん います。', 'Hito ga takusan imasu.', 'Hay mucha gente.'])
    ] }
  ];

  /* Números */
  O.numbers = {
    basic: [
      ['0', 'ゼロ / れい', 'zero / rei', '零'],
      ['1', 'いち', 'ichi', '一'], ['2', 'に', 'ni', '二'], ['3', 'さん', 'san', '三'],
      ['4', 'よん / し', 'yon / shi', '四'], ['5', 'ご', 'go', '五'], ['6', 'ろく', 'roku', '六'],
      ['7', 'なな / しち', 'nana / shichi', '七'], ['8', 'はち', 'hachi', '八'], ['9', 'きゅう / く', 'kyū / ku', '九'],
      ['10', 'じゅう', 'jū', '十']
    ],
    big: [
      ['11', 'じゅういち', 'jūichi', '十一'],
      ['20', 'にじゅう', 'nijū', '二十'],
      ['100', 'ひゃく', 'hyaku', '百'],
      ['300', 'さんびゃく', 'sanbyaku', '三百'],
      ['600', 'ろっぴゃく', 'roppyaku', '六百'],
      ['800', 'はっぴゃく', 'happyaku', '八百'],
      ['1 000', 'せん', 'sen', '千'],
      ['3 000', 'さんぜん', 'sanzen', '三千'],
      ['10 000', 'いちまん', 'ichiman', '一万']
    ],
    tips: [
      'El 4 se dice casi siempre «よん». «し» aparece en palabras fijas, como 四月 (しがつ, abril).',
      'El 7 es «なな» o «しち»; el 9 es «きゅう» o «く». Aprende cuál se usa en cada expresión, por ejemplo 九時 (くじ, las nueve).',
      'Los números se forman sumando: 11 = diez + uno (じゅういち), 20 = dos + diez (にじゅう), 21 = にじゅういち.',
      'Los cientos y miles cambian el sonido en 300, 600 y 800 (さんびゃく, ろっぴゃく, はっぴゃく) y en 3 000 y 8 000.'
    ],
    quiz: [
      { prompt: '¿Cómo se lee 三百?', big: '三百', options: ['さんびゃく', 'さんひゃく', 'みっひゃく', 'さんぴゃく'], answer: 0, explain: '300 es さんびゃく: después de さん la h de ひゃく cambia a b.' },
      { prompt: '¿Cómo se lee 八百?', big: '八百', options: ['はっぴゃく', 'はちひゃく', 'はっひゃく', 'はちびゃく'], answer: 0, explain: '800 es はっぴゃく: con una pausa (っ) y una p.' },
      { prompt: '¿Cuál es la lectura más común del número 4?', options: ['よん', 'よっつ', 'しつ', 'いし'], answer: 0, explain: 'Para contar números sueltos se usa よん; し queda para palabras fijas.' },
      { prompt: '¿Cómo se lee 千?', big: '千', options: ['せん', 'さん', 'ぜん', 'ちん'], answer: 0, explain: '千 se lee せん, «mil».' },
      { prompt: '¿Qué número es じゅうご?', options: ['15', '51', '10', '5'], answer: 0, explain: 'じゅう (10) + ご (5) = 15.' }
    ]
  };

  /* Contadores */
  O.counters = [
    { sym: 'つ', name: 'Objetos en general (1 al 10)', use: 'Sirve para contar cosas cuando no sabes el contador. Termina en つ, salvo el diez.',
      forms: 'ひとつ · ふたつ · みっつ · よっつ · いつつ · むっつ · ななつ · やっつ · ここのつ · とお',
      ex: ['りんごを ふたつ ください。', 'Ringo o futatsu kudasai.', 'Dos manzanas, por favor.'] },
    { sym: '人', name: 'Personas', use: 'Se lee にん, salvo 1 y 2 persona, que son irregulares.',
      forms: 'ひとり · ふたり · さんにん · よにん · ごにん',
      ex: ['ともだちが ふたり います。', 'Tomodachi ga futari imasu.', 'Hay dos amigos.'] },
    { sym: '枚', name: 'Cosas planas y delgadas', use: 'Hojas, billetes, camisas, platos planos y entradas.',
      forms: 'いちまい · にまい · さんまい · よんまい · ごまい',
      ex: ['きっぷを にまい ください。', 'Kippu o nimai kudasai.', 'Dos billetes, por favor.'] },
    { sym: '本', name: 'Cosas largas y delgadas', use: 'Botellas, lápices, paraguas y árboles. Cambia entre ほん, ぼん y ぽん.',
      forms: 'いっぽん · にほん · さんぼん · よんほん · ろっぽん · はっぽん · じゅっぽん',
      ex: ['ビールを いっぽん ください。', 'Bīru o ippon kudasai.', 'Una cerveza, por favor.'] },
    { sym: '個', name: 'Cosas pequeñas y redondas', use: 'Frutas, huevos, caramelos y piezas pequeñas.',
      forms: 'いっこ · にこ · さんこ · よんこ · ごこ',
      ex: ['たまごを さんこ かいます。', 'Tamago o sanko kaimasu.', 'Compro tres huevos.'] },
    { sym: '台', name: 'Máquinas y vehículos', use: 'Autos, computadores, bicicletas y electrodomésticos.',
      forms: 'いちだい · にだい · さんだい · よんだい · ごだい',
      ex: ['くるまが にだい あります。', 'Kuruma ga nidai arimasu.', 'Hay dos autos.'] },
    { sym: '歳', name: 'Edad', use: 'Se lee さい. Los 20 años son especiales: はたち.',
      forms: 'いっさい · にさい · さんさい · じゅっさい · はたち',
      ex: ['わたしは 30さいです。', 'Watashi wa sanjussai desu.', 'Tengo 30 años.'] },
    { sym: '時', name: 'La hora', use: 'Se lee じ. Atención con las 4, las 7 y las 9.',
      forms: 'いちじ · にじ · さんじ · よじ · しちじ · くじ',
      ex: ['7じに おきます。', 'Shichi-ji ni okimasu.', 'Me levanto a las 7.'] }
  ];
  O.countersQuiz = [
    { prompt: '¿Qué contador se usa para contar personas?', options: ['人 (にん)', '枚 (まい)', '台 (だい)', '本 (ほん)'], answer: 0, explain: '人 es el contador de personas: さんにん = tres personas.' },
    { prompt: '¿Qué significa ふたり?', options: ['dos personas', 'dos hojas', 'dos años', 'dos autos'], answer: 0, explain: 'ひとり (1) y ふたり (2) son las lecturas irregulares de personas.' },
    { prompt: '¿Qué contador usarías para dos billetes (きっぷ)?', options: ['枚 (まい)', '個 (こ)', '歳 (さい)', '台 (だい)'], answer: 0, explain: 'Los billetes son planos y delgados: にまい.' },
    { prompt: '¿Cómo se dice «una cerveza» (botella) con el contador de objetos largos?', options: ['いっぽん', 'いちほん', 'ひとつ', 'いっこ'], answer: 0, explain: 'Con 本, el 1 se lee いっぽん.' },
    { prompt: '¿Qué contador se usa para autos y electrodomésticos?', options: ['台 (だい)', '人 (にん)', '個 (こ)', '本 (ほん)'], answer: 0, explain: '台 cuenta máquinas y vehículos.' }
  ];
})(window.OSAKA);
