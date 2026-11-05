/* Guías y textos informativos. Bloques: h, p, ul (items), table (head, rows), tip. */
window.OSAKA = window.OSAKA || {};
(function (O) {
  'use strict';
  O.guides = {
    pronunciacion: {
      title: 'Pronunciación para hispanohablantes',
      sub: 'Lo que ya sabes y lo que cambia',
      blocks: [
        { t: 'p', x: 'Tienes ventaja: el japonés tiene solo cinco vocales y suenan casi igual que en español. Cada sílaba dura lo mismo, sin acentos fuertes como en español.' },
        { t: 'h', x: 'Lo que es igual' },
        { t: 'ul', items: ['Las vocales a, i, u, e, o.', 'La mayoría de consonantes: k, s, t, n, m, y, w, g, b, p.', 'No hay sílabas con «ll», «ñ» ni «rr».'] },
        { t: 'h', x: 'Lo que cambia' },
        { t: 'table', head: ['Sonido', 'Cómo se hace'], rows: [
          ['r (ら り る れ ろ)', 'Un toque suave de lengua, entre «r» y «l». Nunca la «rr» fuerte.'],
          ['ふ (fu)', 'No es la f española: es un soplido entre f y j.'],
          ['し (shi), ち (chi)', 'Como «sh» y «ch» suaves.'],
          ['つ (tsu)', 't y s juntas, como en «tsunami».'],
          ['ん (n)', 'Se pronuncia al final de sílaba, como la n de «mundo».']
        ] },
        { t: 'h', x: 'Vocales largas y consonantes dobles' },
        { t: 'p', x: 'Alargar una vocal cambia el significado: おばさん (tía) y おばあさん (abuela) no son lo mismo. La consonante doble (っ) es una pequeña pausa: きって (estampilla) y きて (ven) son diferentes.' },
        { t: 'tip', x: 'Practica escuchando con el botón de voz de cada lección y repite en voz alta.' }
      ]
    },
    jlptLatam: {
      title: 'Cómo rendir el JLPT desde Latinoamérica',
      sub: 'Pasos generales',
      blocks: [
        { t: 'p', x: 'El JLPT (Prueba de Competencia en Japonés) es el examen oficial más usado para certificar tu nivel. Lo organizan la Japan Foundation y Japan Educational Exchange and Services.' },
        { t: 'ul', items: [
          'Los niveles van de N5 (básico) a N1 (avanzado).',
          'En Latinoamérica se rinde en ciudades con sede autorizada; en Chile, en Santiago.',
          'Las fechas, el plazo de inscripción, el precio y las sedes cambian cada año.',
          'La inscripción se hace a través de la sede local o de la página oficial.'
        ] },
        { t: 'tip', x: 'Confirma siempre las fechas y requisitos en jlpt.jp y en la web de la sede de tu país antes de planificar.' }
      ]
    },
    examen: {
      title: 'Cómo es el examen N5, N4 y N3',
      sub: 'Estructura y puntaje',
      blocks: [
        { t: 'p', x: 'Cada nivel se evalúa en secciones y, para aprobar, necesitas un puntaje total mínimo y también un mínimo en cada sección.' },
        { t: 'table', head: ['Nivel', 'Secciones', 'Puntaje total', 'Aprobación'], rows: [
          ['N5', 'Conocimiento de lengua (vocabulario y gramática) y lectura (120) · Audición (60)', '180', '80 puntos; mínimo 38 y 19 por sección'],
          ['N4', 'Conocimiento de lengua (vocabulario y gramática) y lectura (120) · Audición (60)', '180', '90 puntos; mínimo 38 y 19 por sección'],
          ['N3', 'Vocabulario (60) · Gramática y lectura (60) · Audición (60)', '180', '95 puntos; mínimo 19 por sección']
        ] },
        { t: 'tip', x: 'Los tests de Osakapp son originales, con formato inspirado en el examen. No son oficiales ni están afiliados al JLPT.' }
      ]
    },
    acerca: {
      title: 'Acerca de Osakapp',
      sub: 'Qué es y qué no es',
      blocks: [
        { t: 'p', x: 'Osakapp es un sitio de contenidos para empezar a aprender japonés en español. No tiene cuentas: tu perfil y tu progreso se guardan solo en este navegador.' },
        { t: 'ul', items: [
          'Los tests son originales y no son oficiales ni afiliados al JLPT.',
          'Las ilustraciones son planas y generadas para este proyecto.',
          'La voz usa el sintetizador de tu navegador; si no tienes voz japonesa instalada, verás la transcripción.'
        ] },
        { t: 'p', x: 'N4 y N3 llegarán más adelante.' }
      ]
    }
  };
})(window.OSAKA);
