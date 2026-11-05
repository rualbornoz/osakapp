/* Hiragana y katakana: filas, pronunciación para hispanohablantes y palabras de ejemplo.
   Palabra = [japonés, romaji, español, kanji (opcional)] */
window.OSAKA = window.OSAKA || {};
(function (O) {
  'use strict';

  function toKata(s) {
    return s.replace(/[ぁ-ゖ]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) + 0x60); });
  }

  var yoonBases = [['き', 'ky'], ['し', 'sh'], ['ち', 'ch'], ['に', 'ny'], ['ひ', 'hy'], ['み', 'my'], ['り', 'ry'], ['ぎ', 'gy'], ['じ', 'j'], ['び', 'by'], ['ぴ', 'py']];
  var yoon = [];
  yoonBases.forEach(function (b) {
    var r = b[1];
    var set = r === 'sh' || r === 'ch' || r === 'j' ? ['a', 'u', 'o'] : ['a', 'u', 'o'];
    var small = ['ゃ', 'ゅ', 'ょ'];
    set.forEach(function (v, i) { yoon.push([b[0] + small[i], r + v]); });
  });

  var hira = [
    { id: '1', title: 'Vocales', chars: [['あ', 'a'], ['い', 'i'], ['う', 'u'], ['え', 'e'], ['お', 'o']],
      note: 'Las cinco vocales japonesas suenan casi igual que en español: a, i, u, e, o. Son siempre cortas y limpias. La う es un poco menos redondeada que la u española.',
      words: [['あめ', 'ame', 'lluvia', '雨'], ['いえ', 'ie', 'casa', '家'], ['えき', 'eki', 'estación', '駅'], ['おちゃ', 'ocha', 'té', 'お茶']] },
    { id: '2', title: 'Fila K', chars: [['か', 'ka'], ['き', 'ki'], ['く', 'ku'], ['け', 'ke'], ['こ', 'ko']],
      note: 'か き く け こ se leen como en «casa», «kilo», «cuna», «queso» y «coco». La k es seca, sin soplido.',
      words: [['かさ', 'kasa', 'paraguas', '傘'], ['くつ', 'kutsu', 'zapatos', '靴'], ['こども', 'kodomo', 'niño o niña', '子ども'], ['きた', 'kita', 'norte', '北']] },
    { id: '3', title: 'Fila S', chars: [['さ', 'sa'], ['し', 'shi'], ['す', 'su'], ['せ', 'se'], ['そ', 'so']],
      note: 'し se lee «shi», con un sonido parecido a la «ch» suave de «chico» pero con aire. す suele sonar «su» con la u casi muda al final de una palabra (です suena «des»).',
      words: [['さかな', 'sakana', 'pescado', '魚'], ['すし', 'sushi', 'sushi', '寿司'], ['せかい', 'sekai', 'mundo', '世界'], ['そら', 'sora', 'cielo', '空']] },
    { id: '4', title: 'Fila T', chars: [['た', 'ta'], ['ち', 'chi'], ['つ', 'tsu'], ['て', 'te'], ['と', 'to']],
      note: 'ち se lee «chi», como en «chico». つ se lee «tsu»: una t y una s pronunciadas juntas, como al final de «tsunami».',
      words: [['たまご', 'tamago', 'huevo', '卵'], ['つき', 'tsuki', 'luna', '月'], ['てがみ', 'tegami', 'carta', '手紙'], ['とり', 'tori', 'pájaro', '鳥']] },
    { id: '5', title: 'Fila N', chars: [['な', 'na'], ['に', 'ni'], ['ぬ', 'nu'], ['ね', 'ne'], ['の', 'no']],
      note: 'な に ぬ ね の se leen como en español: na, ni, nu, ne, no.',
      words: [['なつ', 'natsu', 'verano', '夏'], ['にく', 'niku', 'carne', '肉'], ['ねこ', 'neko', 'gato', '猫'], ['いぬ', 'inu', 'perro', '犬']] },
    { id: '6', title: 'Fila H', chars: [['は', 'ha'], ['ひ', 'hi'], ['ふ', 'fu'], ['へ', 'he'], ['ほ', 'ho']],
      note: 'La h japonesa se pronuncia con un soplido suave (en español la h es muda). ふ se lee «fu»: no es la f española, es un soplido entre f y j. Como partícula, は se lee «wa» y へ se lee «e».',
      words: [['はな', 'hana', 'flor', '花'], ['ひと', 'hito', 'persona', '人'], ['ふゆ', 'fuyu', 'invierno', '冬'], ['ほし', 'hoshi', 'estrella', '星']] },
    { id: '7', title: 'Fila M', chars: [['ま', 'ma'], ['み', 'mi'], ['む', 'mu'], ['め', 'me'], ['も', 'mo']],
      note: 'ま み む め も se leen ma, mi, mu, me, mo, igual que en español.',
      words: [['みず', 'mizu', 'agua', '水'], ['め', 'me', 'ojo', '目'], ['もり', 'mori', 'bosque', '森'], ['まど', 'mado', 'ventana', '窓']] },
    { id: '8', title: 'Fila Y', chars: [['や', 'ya'], ['ゆ', 'yu'], ['よ', 'yo']],
      note: 'や ゆ よ se leen ya, yu, yo, como en «yate», «yuca» y «yoga».',
      words: [['やま', 'yama', 'montaña', '山'], ['ゆき', 'yuki', 'nieve', '雪'], ['よる', 'yoru', 'noche', '夜']] },
    { id: '9', title: 'Fila R', chars: [['ら', 'ra'], ['り', 'ri'], ['る', 'ru'], ['れ', 're'], ['ろ', 'ro']],
      note: 'La r japonesa es suave: un solo toque de la lengua, entre la r de «caro» y una l. Nunca es la «rr» fuerte de «perro».',
      words: [['りんご', 'ringo', 'manzana', '林檎'], ['くるま', 'kuruma', 'auto', '車'], ['ろく', 'roku', 'seis', '六'], ['さくら', 'sakura', 'cerezo en flor', '桜']] },
    { id: '10', title: 'Fila W y ん', chars: [['わ', 'wa'], ['を', 'o'], ['ん', 'n']],
      note: 'を se escribía «wo», pero hoy se pronuncia «o» y solo se usa como partícula del objeto directo. ん es una n que se pronuncia al final de sílaba, como en «mundo» o «campo»; puede sonar como m antes de p, b o m.',
      words: [['わたし', 'watashi', 'yo', '私'], ['ほん', 'hon', 'libro', '本'], ['にほん', 'nihon', 'Japón', '日本'], ['みかん', 'mikan', 'mandarina', '蜜柑']] },
    { id: '11', title: 'Fila G', chars: [['が', 'ga'], ['ぎ', 'gi'], ['ぐ', 'gu'], ['げ', 'ge'], ['ご', 'go']],
      note: 'Los dos puntitos (dakuten) vuelven sonora la consonante: か→が. La g siempre suena como en «gato» (ga, gi, gu, ge, go): «gi» es «gui» y «ge» es «gue», nunca una «j».',
      words: [['がっこう', 'gakkō', 'escuela', '学校'], ['ぎんこう', 'ginkō', 'banco', '銀行'], ['ごはん', 'gohan', 'arroz cocido o comida', 'ご飯'], ['げんき', 'genki', 'con energía, bien', '元気']] },
    { id: '12', title: 'Fila Z', chars: [['ざ', 'za'], ['じ', 'ji'], ['ず', 'zu'], ['ぜ', 'ze'], ['ぞ', 'zo']],
      note: 'さ→ざ: la z japonesa empieza con una dz suave. じ se lee «ji»: suena como la «y» de «yo» con un pequeño sonido «d» al comienzo. ず se lee «zu» con la z como la s sonora de «mismo».',
      words: [['かぜ', 'kaze', 'viento', '風'], ['じかん', 'jikan', 'tiempo, hora', '時間'], ['かぞく', 'kazoku', 'familia', '家族'], ['ずっと', 'zutto', 'siempre, todo el tiempo']] },
    { id: '13', title: 'Fila D', chars: [['だ', 'da'], ['ぢ', 'ji'], ['づ', 'zu'], ['で', 'de'], ['ど', 'do']],
      note: 'だ で ど se leen da, de, do. ぢ y づ suenan igual que じ y ず; casi no se usan.',
      words: [['だいがく', 'daigaku', 'universidad', '大学'], ['でんわ', 'denwa', 'teléfono', '電話'], ['でんしゃ', 'densha', 'tren', '電車'], ['どうぞ', 'dōzo', 'adelante, por favor']] },
    { id: '14', title: 'Fila B', chars: [['ば', 'ba'], ['び', 'bi'], ['ぶ', 'bu'], ['べ', 'be'], ['ぼ', 'bo']],
      note: 'は con dakuten pasa a ser b: ば び ぶ べ ぼ suenan ba, bi, bu, be, bo.',
      words: [['ばん', 'ban', 'noche, tarde', '晩'], ['びょういん', 'byōin', 'hospital', '病院'], ['ぶた', 'buta', 'cerdo', '豚'], ['かばん', 'kaban', 'bolso, mochila', '鞄']] },
    { id: '15', title: 'Fila P', chars: [['ぱ', 'pa'], ['ぴ', 'pi'], ['ぷ', 'pu'], ['ぺ', 'pe'], ['ぽ', 'po']],
      note: 'Con un circulito (handakuten) la fila H pasa a ser P: ぱ ぴ ぷ ぺ ぽ se leen pa, pi, pu, pe, po.',
      words: [['えんぴつ', 'enpitsu', 'lápiz', '鉛筆'], ['さんぽ', 'sanpo', 'paseo', '散歩'], ['てんぷら', 'tenpura', 'tempura'], ['ぺらぺら', 'perapera', 'con fluidez (hablar un idioma)']] },
    { id: '16', title: 'Sílabas combinadas', chars: yoon,
      note: 'Se forman con き し ち に ひ み り ぎ じ び ぴ más や ゆ よ en tamaño pequeño. Se leen como una sola sílaba: きゃ es «kya», no «ki-ya». Fíjate en ちゃ «cha», しゅ «shu» y じょ «jo».',
      words: [['きゃく', 'kyaku', 'cliente, visita', '客'], ['しゅくだい', 'shukudai', 'tarea', '宿題'], ['ひゃく', 'hyaku', 'cien', '百'], ['りょこう', 'ryokō', 'viaje', '旅行'], ['じゅう', 'jū', 'diez', '十']] }
  ];

  var kataWords = {
    '1': [['アイス', 'aisu', 'helado'], ['エアコン', 'eakon', 'aire acondicionado'], ['オレンジ', 'orenji', 'naranja']],
    '2': [['コーヒー', 'kōhī', 'café'], ['カメラ', 'kamera', 'cámara'], ['ケーキ', 'kēki', 'pastel, torta'], ['キウイ', 'kiui', 'kiwi']],
    '3': [['サッカー', 'sakkā', 'fútbol'], ['スーパー', 'sūpā', 'supermercado'], ['セーター', 'sētā', 'suéter'], ['ソース', 'sōsu', 'salsa']],
    '4': [['テレビ', 'terebi', 'televisión'], ['タクシー', 'takushī', 'taxi'], ['トマト', 'tomato', 'tomate'], ['チーズ', 'chīzu', 'queso'], ['ツナ', 'tsuna', 'atún']],
    '5': [['ナイフ', 'naifu', 'cuchillo'], ['ネクタイ', 'nekutai', 'corbata'], ['ノート', 'nōto', 'cuaderno']],
    '6': [['ホテル', 'hoteru', 'hotel'], ['ハム', 'hamu', 'jamón'], ['ヒーター', 'hītā', 'calefactor'], ['フォーク', 'fōku', 'tenedor']],
    '7': [['ミルク', 'miruku', 'leche'], ['メニュー', 'menyū', 'menú'], ['マスク', 'masuku', 'mascarilla'], ['モデル', 'moderu', 'modelo']],
    '8': [['ヨーグルト', 'yōguruto', 'yogur'], ['ユーモア', 'yūmoa', 'humor']],
    '9': [['ラーメン', 'rāmen', 'ramen'], ['レストラン', 'resutoran', 'restaurante'], ['ロボット', 'robotto', 'robot'], ['リモコン', 'rimokon', 'control remoto'], ['ルール', 'rūru', 'regla']],
    '10': [['ワイン', 'wain', 'vino'], ['ワンピース', 'wanpīsu', 'vestido'], ['ラーメン', 'rāmen', 'ramen (ン al final)']],
    '11': [['ゲーム', 'gēmu', 'juego'], ['ガス', 'gasu', 'gas'], ['ギター', 'gitā', 'guitarra'], ['グラス', 'gurasu', 'vaso'], ['ゴルフ', 'gorufu', 'golf']],
    '12': [['ゼロ', 'zero', 'cero'], ['ズボン', 'zubon', 'pantalón'], ['ラジオ', 'rajio', 'radio'], ['ピザ', 'piza', 'pizza']],
    '13': [['ドア', 'doa', 'puerta'], ['デパート', 'depāto', 'grandes almacenes'], ['ダンス', 'dansu', 'baile'], ['ビデオ', 'bideo', 'video']],
    '14': [['バナナ', 'banana', 'plátano'], ['ビール', 'bīru', 'cerveza'], ['ブラジル', 'burajiru', 'Brasil'], ['ベッド', 'beddo', 'cama'], ['ボール', 'bōru', 'pelota']],
    '15': [['パン', 'pan', 'pan'], ['ピアノ', 'piano', 'piano'], ['プール', 'pūru', 'piscina'], ['ペン', 'pen', 'bolígrafo'], ['ポスト', 'posuto', 'buzón']],
    '16': [['シャツ', 'shatsu', 'camisa'], ['ジュース', 'jūsu', 'jugo'], ['チョコレート', 'chokorēto', 'chocolate'], ['ニュース', 'nyūsu', 'noticias'], ['シャワー', 'shawā', 'ducha']]
  };

  var kataExtra = {
    '1': ' El katakana se usa sobre todo para palabras de origen extranjero (コーヒー, «café»), nombres de otros países y énfasis.',
    '2': ' La raya ー alarga la vocal anterior: コーヒー se lee «kōhī», con ō e ī largas.',
    '3': ' Cuidado: シ (shi) y ツ (tsu) se parecen, igual que ソ (so) y ン (n). Fíjate en la dirección de los trazos: シ y ン son más horizontales y ツ y ソ son más verticales.'
  };

  var hiraRows = hira;
  var kataRows = hira.map(function (r) {
    return {
      id: r.id,
      title: r.title,
      chars: r.chars.map(function (c) { return [toKata(c[0]), c[1]]; }),
      note: r.note + (kataExtra[r.id] || ''),
      words: kataWords[r.id] || []
    };
  });

  O.kana = {
    hira: { label: 'Hiragana', rows: hiraRows },
    kata: { label: 'Katakana', rows: kataRows }
  };
})(window.OSAKA);
