/* Kanji básicos agrupados por tema.
   [kanji, on, kun, significado, [ejemplo jp, romaji, español]] */
window.OSAKA = window.OSAKA || {};
(function (O) {
  'use strict';
  O.kanjiGroups = [
    { id: 'kan-1', title: 'Números', sub: '一 二 三 十 百 千 万 円', items: [
      ['一', 'いち', 'ひと(つ)', 'uno', ['一つ', 'ひとつ', 'uno (objeto)']],
      ['二', 'に', 'ふた(つ)', 'dos', ['二人', 'ふたり', 'dos personas']],
      ['三', 'さん', 'みっ(つ)', 'tres', ['三月', 'さんがつ', 'marzo']],
      ['四', 'し', 'よん・よ(っつ)', 'cuatro', ['四人', 'よにん', 'cuatro personas']],
      ['五', 'ご', 'いつ(つ)', 'cinco', ['五分', 'ごふん', 'cinco minutos']],
      ['六', 'ろく', 'むっ(つ)', 'seis', ['六時', 'ろくじ', 'las seis']],
      ['七', 'しち', 'なな(つ)', 'siete', ['七月', 'しちがつ', 'julio']],
      ['八', 'はち', 'やっ(つ)', 'ocho', ['八時', 'はちじ', 'las ocho']],
      ['九', 'きゅう・く', 'ここの(つ)', 'nueve', ['九月', 'くがつ', 'septiembre']],
      ['十', 'じゅう', 'とお', 'diez', ['十月', 'じゅうがつ', 'octubre']],
      ['百', 'ひゃく', '—', 'cien', ['三百円', 'さんびゃくえん', '300 yenes']],
      ['千', 'せん', 'ち', 'mil', ['千円', 'せんえん', '1 000 yenes']],
      ['万', 'まん', '—', 'diez mil', ['一万円', 'いちまんえん', '10 000 yenes']],
      ['円', 'えん', 'まる(い)', 'yen; círculo', ['百円', 'ひゃくえん', '100 yenes']]
    ] },
    { id: 'kan-2', title: 'Días y naturaleza', sub: '日 月 火 水 木 金 土 山 川 田', items: [
      ['日', 'にち・じつ', 'ひ・か', 'sol; día', ['日本', 'にほん', 'Japón']],
      ['月', 'げつ・がつ', 'つき', 'luna; mes', ['月曜日', 'げつようび', 'lunes']],
      ['火', 'か', 'ひ', 'fuego', ['火曜日', 'かようび', 'martes']],
      ['水', 'すい', 'みず', 'agua', ['水曜日', 'すいようび', 'miércoles']],
      ['木', 'もく', 'き', 'árbol; madera', ['木曜日', 'もくようび', 'jueves']],
      ['金', 'きん', 'かね', 'oro; dinero', ['金曜日', 'きんようび', 'viernes']],
      ['土', 'ど', 'つち', 'tierra', ['土曜日', 'どようび', 'sábado']],
      ['山', 'さん', 'やま', 'montaña', ['富士山', 'ふじさん', 'monte Fuji']],
      ['川', 'せん', 'かわ', 'río', ['川', 'かわ', 'río']],
      ['田', 'でん', 'た', 'arrozal, campo', ['田中', 'たなか', 'Tanaka (apellido)']]
    ] },
    { id: 'kan-3', title: 'Cuerpo y personas', sub: '人 口 目 耳 手 足', items: [
      ['人', 'じん・にん', 'ひと', 'persona', ['日本人', 'にほんじん', 'persona japonesa']],
      ['口', 'こう', 'くち', 'boca', ['入口', 'いりぐち', 'entrada']],
      ['目', 'もく', 'め', 'ojo', ['目', 'め', 'ojo']],
      ['耳', 'じ', 'みみ', 'oreja, oído', ['耳', 'みみ', 'oreja']],
      ['手', 'しゅ', 'て', 'mano', ['手', 'て', 'mano']],
      ['足', 'そく', 'あし', 'pie, pierna', ['足', 'あし', 'pie']]
    ] },
    { id: 'kan-4', title: 'Tamaño y posición', sub: '大 小 中 上 下', items: [
      ['大', 'だい・たい', 'おお(きい)', 'grande', ['大きい', 'おおきい', 'grande']],
      ['小', 'しょう', 'ちい(さい)', 'pequeño', ['小さい', 'ちいさい', 'pequeño']],
      ['中', 'ちゅう', 'なか', 'dentro; en medio', ['中', 'なか', 'dentro']],
      ['上', 'じょう', 'うえ・あ(がる)', 'arriba; subir', ['上', 'うえ', 'arriba']],
      ['下', 'か・げ', 'した・さ(がる)', 'abajo; bajar', ['下', 'した', 'abajo']]
    ] },
    { id: 'kan-5', title: 'Escuela y cosas', sub: '学 校 本 車 電 話', items: [
      ['学', 'がく', 'まな(ぶ)', 'estudiar', ['学生', 'がくせい', 'estudiante']],
      ['校', 'こう', '—', 'escuela', ['学校', 'がっこう', 'escuela']],
      ['本', 'ほん', 'もと', 'libro; origen', ['本', 'ほん', 'libro']],
      ['車', 'しゃ', 'くるま', 'auto', ['車', 'くるま', 'auto']],
      ['電', 'でん', '—', 'electricidad', ['電車', 'でんしゃ', 'tren']],
      ['話', 'わ', 'はな(す)', 'hablar; conversación', ['電話', 'でんわ', 'teléfono']]
    ] }
  ];
})(window.OSAKA);
