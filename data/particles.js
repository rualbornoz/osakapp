/* Partículas. Ejemplos: [japonés, romaji, español]. Quiz: s con marcador {p}. */
window.OSAKA = window.OSAKA || {};
(function (O) {
  'use strict';
  O.particleLessons = [
    { id: 'par-1', title: 'は y も', sub: 'Tema y «también»',
      items: [
        { p: 'は', ro: 'wa', name: 'Marca el tema', use: 'Indica de qué estás hablando. Se escribe は pero se lee «wa».', ex: [['わたしは チリじんです。', 'Watashi wa Chirijin desu.', 'Soy chileno o chilena.'], ['これは ほんです。', 'Kore wa hon desu.', 'Esto es un libro.']] },
        { p: 'も', ro: 'mo', name: '«También»', use: 'Reemplaza a は cuando lo mismo vale para otra cosa o persona.', ex: [['ともだちも がくせいです。', 'Tomodachi mo gakusei desu.', 'Mi amigo también es estudiante.']] }
      ],
      quiz: [
        { s: 'わたし{p} チリじんです。', ans: 'は', bad: ['を', 'に'], es: 'Soy chileno o chilena.' },
        { s: 'ロベルトさんは がくせいです。ともだち{p} がくせいです。', ans: 'も', bad: ['を', 'の'], es: 'Roberto es estudiante. Mi amigo también.' },
        { s: 'これ{p} ほんです。', ans: 'は', bad: ['を', 'で'], es: 'Esto es un libro.' }
      ] },
    { id: 'par-2', title: 'が y を', sub: 'Sujeto y objeto directo',
      items: [
        { p: 'が', ro: 'ga', name: 'Marca el sujeto', use: 'Presenta algo nuevo o enfatiza quién hace la acción. Con すき («gustar») y わかる («entender») marca lo que te gusta o entiendes.', ex: [['ねこが すきです。', 'Neko ga suki desu.', 'Me gustan los gatos.'], ['いぬが います。', 'Inu ga imasu.', 'Hay un perro.']] },
        { p: 'を', ro: 'o', name: 'Marca el objeto directo', use: 'Va después de lo que recibe la acción. Se escribe を pero se lee «o».', ex: [['パンを たべます。', 'Pan o tabemasu.', 'Como pan.'], ['みずを のみます。', 'Mizu o nomimasu.', 'Bebo agua.']] }
      ],
      quiz: [
        { s: 'みず{p} のみます。', ans: 'を', bad: ['が', 'に'], es: 'Bebo agua.' },
        { s: 'ねこ{p} すきです。', ans: 'が', bad: ['に', 'で'], es: 'Me gustan los gatos.' },
        { s: 'パン{p} たべます。', ans: 'を', bad: ['で', 'の'], es: 'Como pan.' }
      ] },
    { id: 'par-3', title: 'に y へ', sub: 'Tiempo, lugar y dirección',
      items: [
        { p: 'に', ro: 'ni', name: 'Punto de tiempo o de destino', use: 'Indica la hora exacta, el lugar donde algo está o a dónde se llega, y la persona a quien se hace algo.', ex: [['7じに おきます。', 'Shichiji ni okimasu.', 'Me levanto a las 7.'], ['つくえの うえに ほんが あります。', 'Tsukue no ue ni hon ga arimasu.', 'Hay un libro sobre el escritorio.']] },
        { p: 'へ', ro: 'e', name: 'Dirección', use: 'Indica hacia dónde vas. Se escribe へ pero se lee «e». Con verbos de movimiento suele poder cambiarse por に.', ex: [['にほんへ いきます。', 'Nihon e ikimasu.', 'Voy a Japón.']] }
      ],
      quiz: [
        { s: '7じ{p} おきます。', ans: 'に', bad: ['を', 'で'], es: 'Me levanto a las 7.' },
        { s: 'つくえの うえ{p} ほんが あります。', ans: 'に', bad: ['を', 'と'], es: 'Hay un libro sobre el escritorio.' },
        { s: 'こうえん{p} ねこが います。', ans: 'に', bad: ['を', 'の'], es: 'Hay un gato en el parque.' }
      ] },
    { id: 'par-4', title: 'で y と', sub: 'Lugar de acción, medio y compañía',
      items: [
        { p: 'で', ro: 'de', name: 'Lugar de la acción o medio', use: 'Dice dónde ocurre una acción o con qué medio se hace.', ex: [['レストランで ごはんを たべます。', 'Resutoran de gohan o tabemasu.', 'Como en un restaurante.'], ['バスで いきます。', 'Basu de ikimasu.', 'Voy en bus.']] },
        { p: 'と', ro: 'to', name: '«Con» y «y»', use: 'Indica con quién haces algo, o une sustantivos.', ex: [['ともだちと ごはんを たべます。', 'Tomodachi to gohan o tabemasu.', 'Como con un amigo.'], ['パンと みず', 'Pan to mizu', 'Pan y agua.']] }
      ],
      quiz: [
        { s: 'バス{p} いきます。', ans: 'で', bad: ['を', 'が'], es: 'Voy en bus.' },
        { s: 'ともだち{p} ごはんを たべます。', ans: 'と', bad: ['で', 'を'], es: 'Como con un amigo.' },
        { s: 'レストラン{p} ごはんを たべます。', ans: 'で', bad: ['を', 'と'], es: 'Como en un restaurante.' }
      ] },
    { id: 'par-5', title: 'の y か', sub: 'Posesión y pregunta',
      items: [
        { p: 'の', ro: 'no', name: 'Pertenencia o descripción', use: 'Une dos sustantivos: «de». Es como el «de» español en «el libro de Ana».', ex: [['わたしの ほんです。', 'Watashi no hon desu.', 'Es mi libro.'], ['にほんごの せんせい', 'Nihongo no sensei', 'Profesor de japonés']] },
        { p: 'か', ro: 'ka', name: 'Pregunta', use: 'Va al final de la oración y la convierte en pregunta. No hace falta signo de interrogación.', ex: [['あなたは がくせいですか。', 'Anata wa gakusei desu ka.', '¿Eres estudiante?']] }
      ],
      quiz: [
        { s: 'わたし{p} ほんです。', ans: 'の', bad: ['を', 'が'], es: 'Es mi libro.' },
        { s: 'あなたは がくせいです{p}。', ans: 'か', bad: ['を', 'と'], es: '¿Eres estudiante?' },
        { s: 'にほんご{p} せんせいです。', ans: 'の', bad: ['を', 'か'], es: 'Es profesor de japonés.' }
      ] },
    { id: 'par-6', title: 'から y まで', sub: '«Desde» y «hasta»',
      items: [
        { p: 'から', ro: 'kara', name: '«Desde»', use: 'Punto de partida de tiempo o lugar.', ex: [['9じから はたらきます。', 'Kuji kara hatarakimasu.', 'Trabajo desde las 9.']] },
        { p: 'まで', ro: 'made', name: '«Hasta»', use: 'Punto final de tiempo o lugar. Suelen ir juntas.', ex: [['9じから 5じまで はたらきます。', 'Kuji kara goji made hatarakimasu.', 'Trabajo de 9 a 5.']] }
      ],
      quiz: [
        { s: '9じ{p} 5じまで はたらきます。', ans: 'から', bad: ['を', 'の'], es: 'Trabajo de 9 a 5.' },
        { s: 'えき{p} ホテルまで あるきます。', ans: 'から', bad: ['と', 'を'], es: 'Camino desde la estación hasta el hotel.' },
        { s: 'ここ{p} あそこまで 5ふんです。', ans: 'から', bad: ['に', 'が'], es: 'De aquí a allá son 5 minutos.' }
      ] }
  ];
})(window.OSAKA);
