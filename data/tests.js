/* Banco de preguntas N5 (originales, estilo JLPT). Secciones: vocab, gram, lectura, audicion. */
window.OSAKA = window.OSAKA || {};
(function (O) {
  'use strict';

  var P1 = 'きょうは にちようびです。わたしは ともだちと こうえんへ いきました。こうえんで パンを たべました。それから ほんを よみました。';
  var P2 = 'おしらせ\nとしょかんは げつようびから きんようびまで、9じから 5じまでです。\nどようびと にちようびは おやすみです。';

  function Q(sec, prompt, options, explain, extra) {
    var q = { sec: sec, prompt: prompt, options: options, answer: 0, explain: explain };
    if (extra) for (var k in extra) q[k] = extra[k];
    return q;
  }

  O.testBank = [
    /* Vocabulario */
    Q('vocab', '「学校」の よみかたは どれですか。', ['がっこう', 'がくこう', 'がっごう', 'かっこう'], '学校 se lee がっこう, «escuela».'),
    Q('vocab', '「電車」の よみかたは どれですか。', ['でんしゃ', 'でんしや', 'てんしゃ', 'でんじゃ'], '電車 se lee でんしゃ, «tren».'),
    Q('vocab', '「水」の よみかたは どれですか。', ['みず', 'ひ', 'き', 'かわ'], '水 se lee みず, «agua».'),
    Q('vocab', '「日本人」の よみかたは どれですか。', ['にほんじん', 'にっぽんひと', 'にほんにん', 'にちほんじん'], '日本人 se lee にほんじん, «japonés o japonesa».'),
    Q('vocab', '「三百円」の よみかたは どれですか。', ['さんびゃくえん', 'さんひゃくえん', 'みっひゃくえん', 'さんぴゃくえん'], '300 es さんびゃく.'),
    Q('vocab', 'わたしは まいあさ（　　）を のみます。', ['みず', 'ほん', 'くるま', 'いえ'], 'Solo みず («agua») se puede beber.'),
    Q('vocab', 'えきまで（　　）で いきます。', ['くるま', 'あめ', 'ほし', 'さかな'], 'くるま («auto») es un medio de transporte.'),
    Q('vocab', '「おおきい」の はんたいは どれですか。', ['ちいさい', 'ながい', 'あたらしい', 'おいしい'], 'おおきい («grande») ↔ ちいさい («pequeño»).'),
    /* Gramática */
    Q('gram', 'わたしは がくせい（　　）。', ['です', 'ます', 'を', 'が'], 'Con sustantivo se usa です.'),
    Q('gram', 'パン（　　）たべます。', ['を', 'が', 'に', 'で'], 'El objeto directo lleva を.'),
    Q('gram', 'あした ともだち（　　）あいます。', ['に', 'を', 'で', 'の'], 'あう («encontrarse con») pide に.'),
    Q('gram', 'バス（　　）がっこうへ いきます。', ['で', 'を', 'が', 'に'], 'El medio de transporte lleva で.'),
    Q('gram', 'これは わたし（　　）ほんです。', ['の', 'を', 'が', 'で'], 'の indica pertenencia: «mi libro».'),
    Q('gram', 'きのう テレビを（　　）。', ['みました', 'みます', 'みて', 'みない'], '«Ayer» pide pasado: みました.'),
    Q('gram', 'ちょっと まって（　　）。', ['ください', 'ます', 'です', 'ました'], 'Para pedir: ～て ください.'),
    Q('gram', 'どこ（　　）いきますか。', ['へ', 'を', 'が', 'の'], 'Dirección: へ («¿hacia dónde vas?»).'),
    /* Lectura */
    Q('lectura', 'わたしは だれと こうえんへ いきましたか。', ['ともだちと', 'ひとりで', 'せんせいと', 'いぬと'], 'El texto dice: ともだちと こうえんへ いきました.', { passage: P1 }),
    Q('lectura', 'こうえんで なにを たべましたか。', ['パン', 'ごはん', 'たまご', 'さかな'], 'El texto dice: パンを たべました.', { passage: P1 }),
    Q('lectura', 'こうえんで たべたあとで、なにを しましたか。', ['ほんを よみました', 'テレビを みました', 'ねました', 'うちへ かえりました'], 'El texto dice: それから ほんを よみました.', { passage: P1 }),
    Q('lectura', 'きょうは なんようびですか。', ['にちようび', 'どようび', 'げつようび', 'きんようび'], 'El texto dice: きょうは にちようびです.', { passage: P1 }),
    Q('lectura', 'どようびは としょかんは どうですか。', ['おやすみです', '9じから あいています', '5じまで あいています', 'きんようびと おなじです'], 'En el aviso: どようびと にちようびは おやすみです.', { passage: P2 }),
    /* Audición */
    Q('audicion', 'Escucha y elige: ¿qué hora es?', ['3:00', '2:00', '4:00', '5:00'], 'Dice: いま さんじです («ahora son las tres»).', { say: 'いま さんじです。', transcript: 'いま さんじです。' }),
    Q('audicion', 'Escucha y elige: ¿qué hace esa persona todas las mañanas?', ['Come', 'Bebe té', 'Lee un libro', 'Duerme'], 'Dice: まいあさ ごはんを たべます («todas las mañanas como»).', { say: 'わたしは まいあさ ごはんを たべます。', transcript: 'わたしは まいあさ ごはんを たべます。' }),
    Q('audicion', 'Escucha y elige: ¿quién es esa persona?', ['Un profesor o profesora', 'Un estudiante', 'Un médico', 'Un amigo'], 'Dice: あの ひとは せんせいです.', { say: 'あの ひとは せんせいです。', transcript: 'あの ひとは せんせいです。' }),
    Q('audicion', 'Escucha y elige: ¿cuánto cuesta?', ['100 yenes', '10 yenes', '1 000 yenes', '300 yenes'], 'Dice: ひゃくえん («cien yenes»).', { say: 'ひゃくえんです。', transcript: 'ひゃくえんです。' })
  ];

  O.testSections = [
    { id: 'vocab', title: 'Vocabulario', sub: 'Lectura de kanji y palabras', icon: '語' },
    { id: 'gram', title: 'Gramática', sub: 'Partículas y formas', icon: '文' },
    { id: 'lectura', title: 'Lectura', sub: 'Textos cortos', icon: '読' },
    { id: 'audicion', title: 'Audición', sub: 'Escucha y responde', icon: '聞' }
  ];
})(window.OSAKA);
