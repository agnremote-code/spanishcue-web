import type { LiveLesson } from '../types';

/**
 * Lesson 374 · A2 · Por y para: motivo y destino inicial (course unit G074).
 * The first por/para class. One scene runs through it: Pablo works at a small
 * bakery-café, La Espiga, that belongs to Ana Ruiz. His sister Marta is getting
 * married in Valencia on Saturday, so his colleague Lucía swaps shifts with him
 * («Trabajo para Ana; cambio el turno por ti»). Lucía works Saturday, Pablo
 * works her Tuesday; Ana needs the new rota for Thursday; the team buys cups
 * for Marta. In the voice message Ana (Spanish voice, tú with Lucía) thanks
 * her and organises the rota and the gift.
 * Scope (high-frequency uses only): para = purpose (para + infinitive, known
 * from G026), destination (salir para Valencia), recipient, deadline; por =
 * cause/motive (por + noun, gracias por), route (pasar por, por el parque),
 * area (por aquí), part of the day (por la mañana), price/exchange. Contrast:
 * por + noun / porque + conjugated verb. Ampliación: por teléfono / por correo,
 * por favor, por fin, por ejemplo, para mí. Left for G105 (B1, lesson 231):
 * para que + subjunctive and the «lo hice por ti / para ti» nuance in depth.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 374,
  level: 'A2',
  title: 'Por y para: motivo y destino inicial',
  subtitle: 'Pedir y organizar un cambio de turno: decir por qué, para qué, para quién, para cuándo, por dónde y por cuánto.',
  legend: [
    { tone: 'blue', label: 'POR · ¿por qué? la causa, el motivo, gracias por (cause, reason)' },
    { tone: 'teal', label: 'POR · ¿por dónde? ¿cuándo, más o menos? ¿por cuánto? (route, area, time of day, price)' },
    { tone: 'orange', label: 'PARA · ¿para qué? ¿adónde? el objetivo y el destino (purpose, destination)' },
    { tone: 'violet', label: 'PARA · ¿para quién? ¿para cuándo? (recipient, deadline)' },
  ],
  optionNotes: {
    por: '«Por» responde a ¿por qué? (la causa), ¿por dónde? (el camino o la zona), ¿cuándo, más o menos? (por la tarde) o ¿a cambio de qué? (el precio). Aquí la frase dice otra cosa.',
    Por: '«Por» responde a ¿por qué? (la causa), ¿por dónde? (el camino o la zona), ¿cuándo, más o menos? (por la tarde) o ¿a cambio de qué? (el precio). Aquí la frase dice otra cosa.',
    para: '«Para» mira hacia delante: ¿para qué? (el objetivo), ¿adónde? (el destino), ¿para quién? (quien lo recibe) o ¿para cuándo? (el plazo). Aquí la frase dice otra cosa.',
    Para: '«Para» mira hacia delante: ¿para qué? (el objetivo), ¿adónde? (el destino), ¿para quién? (quien lo recibe) o ¿para cuándo? (el plazo). Aquí la frase dice otra cosa.',
    porque: '«Porque» va con un verbo conjugado: «porque llueve», «porque tengo una boda». Con un nombre solo, la causa va con «por»: «por la lluvia».',
    Porque: '«Porque» va con un verbo conjugado: «porque llueve», «porque tengo una boda». Con un nombre solo, la causa va con «por»: «por la lluvia».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Por y para', coach: '¿Por qué? ¿Para qué? Why? What for?',
      steps: [
        { title: 'Un favor en la panadería · A favour at the bakery', blocks: [
          { kind: 'lead', text: 'Pablo trabaja en La Espiga, una panadería con café. La dueña es Ana Ruiz. El sábado Pablo no puede trabajar: su hermana se casa. Su compañera Lucía le ayuda. Lee lo que dicen: los dos usan **para** y **por**.', en: 'Pablo works at La Espiga, a bakery with a café. The owner is Ana Ruiz. On Saturday Pablo can’t work: his sister is getting married. His colleague Lucía helps him. Read what they say: they both use para and por.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases y tu alumno repite. Después tu alumno dice quién recibe el trabajo de Pablo y por qué Lucía cambia el turno.', self: 'Lee las dos frases en voz alta. ¿Quién recibe el trabajo de Pablo? ¿Por qué cambia Lucía el turno? (Who gets Pablo’s work? Why does Lucía swap the shift?)' } },
          { kind: 'compare', title: 'Dos frases, dos preposiciones · Two sentences, two prepositions', columns: [
            { tone: 'violet', label: 'PARA · ¿para quién?', sentence: 'Pablo: «Trabajo [[para Ana|violet]]».', idea: 'Ana es su jefa: el trabajo de Pablo es para ella. Para mira hacia la persona que lo recibe.', en: 'Pablo: “I work for Ana.” Ana is his boss: his work goes to her.' },
            { tone: 'blue', label: 'POR · ¿por qué?', sentence: 'Lucía: «Cambio el turno [[por ti|blue]]».', idea: 'Pablo es el motivo: Lucía cambia el turno porque él lo necesita.', en: 'Lucía: “I’ll swap the shift for you.” Pablo is the reason: she does it because he needs it.' },
          ] },
          { kind: 'tip', icon: '🧭', title: 'Una imagen para empezar · A picture to start with', text: '**Para** mira hacia delante: el objetivo, el destino, la persona que recibe algo, el plazo. **Por** mira hacia atrás o por el camino: la causa, el lugar por donde pasas, el momento del día, lo que pagas.', en: 'Para looks ahead: the goal, the destination, the person who receives something, the deadline. Por looks back or along the way: the cause, the place you go through, the time of day, what you pay.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Trabajo para Ana» significa…', options: ['Trabajo porque Ana está enferma.', 'Trabajo en lugar de Ana hoy.', 'Ana es mi jefa: trabajo en su panadería.'], answer: 2, why: 'Trabajar para + persona o empresa: a quién va tu trabajo, tu jefe o tu empresa.', en: '“Trabajo para Ana” means…' },
            { prompt: '«Cambio el turno por ti» significa…', options: ['Cambio el turno para trabajar contigo.', 'Cambio el turno y te lo regalo.', 'Cambio el turno porque tú lo necesitas.'], answer: 2, why: 'Por + persona: esa persona es el motivo, la razón de la acción.', en: '“Cambio el turno por ti” means…' },
          ] },
        ] },
        { title: 'Para: mirar hacia delante · Para: looking ahead', mascot: '/brand/mascot/studying.webp', coach: '¿Para qué? ¿Adónde? ¿Para quién? ¿Para cuándo?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'PARA · OBJETIVO Y DESTINO', question: '¿Para qué? ¿Adónde?', en: 'What for? Where to?', formula: ['para + infinitivo → el objetivo', 'salir / el tren / el autobús + para + lugar → el destino'],
            meaning: 'Ya conoces **para + infinitivo** (clase 026): lo que quieres conseguir. Con un lugar, **para** dice hacia dónde vas: el final del viaje.',
            examples: [
              { es: 'Pablo pide el sábado libre [[para ir|orange]] a la boda.', en: 'Pablo asks for Saturday off to go to the wedding.' },
              { es: 'Lucía va a la tienda [[para comprar|orange]] un regalo.', en: 'Lucía goes to the shop to buy a present.' },
              { es: 'El viernes Pablo sale [[para Valencia|orange]].', en: 'On Friday Pablo leaves for Valencia.' },
              { es: 'El autobús [[para Valencia|orange]] sale a las seis.', en: 'The bus to Valencia leaves at six.' },
            ],
            note: '«Voy **a** Valencia» también es correcto. Con salir, tren, autobús o vuelo es muy frecuente «para»: el destino del viaje.' },
          { kind: 'concept', tone: 'violet', label: 'PARA · DESTINATARIO Y PLAZO', question: '¿Para quién? ¿Para cuándo?', en: 'For whom? By when?', formula: ['para + persona → quien lo recibe', 'para + día u hora → el plazo (deadline)'],
            meaning: 'Con una persona, **para** dice quién recibe algo. Con un día o una hora, dice cuándo tiene que estar listo: como muy tarde ese día.',
            examples: [
              { es: 'Este café es [[para la señora|violet]] de la mesa dos.', en: 'This coffee is for the lady at table two.' },
              { es: 'Queremos un regalo [[para Marta|violet]].', en: 'We want a present for Marta.' },
              { es: 'Ana necesita el horario nuevo [[para el jueves|violet]].', en: 'Ana needs the new rota by Thursday.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía va al mercado ___ comprar fruta.', options: ['porque', 'para', 'por'], answer: 1, why: 'Comprar fruta es el objetivo: para + infinitivo.', en: 'Lucía goes to the market to buy fruit.' },
            { prompt: 'Estos pasteles son ___ la fiesta de la oficina de enfrente.', options: ['por', 'para'], answer: 1, why: 'Los pasteles van a esa fiesta: es el destino, quien los recibe. Para.', en: 'These cakes are for the party at the office across the street.' },
            { prompt: 'Necesito las cajas ___ las once, por favor.', options: ['por', 'para'], answer: 1, why: 'Las once es el plazo: como muy tarde a esa hora. Para.', en: 'I need the boxes by eleven, please.' },
          ] },
        ] },
        { title: 'Por: la causa y el camino · Por: the cause and the way', mascot: '/brand/mascot/speaking.webp', coach: '¿Por qué? ¿Por dónde? ¿Por cuánto?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'POR · CAUSA Y MOTIVO', question: '¿Por qué?', en: 'Why? Because of what?', formula: ['por + nombre → la causa', 'gracias por + nombre o infinitivo'],
            meaning: 'Con **por** dices qué causa la acción: algo que pasa antes. También la persona que te motiva («por ti»). Después de **gracias**, siempre **por**.',
            examples: [
              { es: 'Pablo no trabaja el sábado [[por la boda|blue]] de su hermana.', en: 'Pablo isn’t working on Saturday because of his sister’s wedding.' },
              { es: 'Hoy cerramos antes [[por una avería|blue]] en el horno.', en: 'Today we are closing early because of a fault in the oven.' },
              { es: 'Gracias [[por el cambio|blue]]. Gracias [[por venir|blue]].', en: 'Thanks for the swap. Thanks for coming.' },
            ],
            note: '«Gracias **por** venir» lleva infinitivo, pero no es un objetivo: venir es la causa de las gracias.' },
          { kind: 'concept', tone: 'teal', label: 'POR · CAMINO, ZONA, MOMENTO, PRECIO', question: '¿Por dónde? ¿Cuándo, más o menos? ¿Por cuánto?', en: 'Which way? Roughly when? For how much?', formula: ['pasar por / ir por + lugar → el camino', 'por aquí, por el centro → la zona', 'por la mañana / la tarde / la noche', 'por + precio → lo que pagas a cambio'],
            meaning: '**Por** también dice el lugar por donde pasas (no el final), una zona sin decir el punto exacto, la parte del día y el precio: lo que das a cambio.',
            examples: [
              { es: 'Lucía pasa [[por la tienda|teal]] antes del trabajo.', en: 'Lucía stops by the shop before work.' },
              { es: '¿Hay una farmacia [[por aquí|teal]]?', en: 'Is there a pharmacy around here?' },
              { es: 'Pablo sale [[por la tarde|teal]].', en: 'Pablo leaves in the afternoon.' },
              { es: 'Compramos tres tazas [[por treinta euros|teal]].', en: 'We bought three cups for thirty euros.' },
            ],
            note: 'En muchos países de América también se dice «**en** la mañana», «en la tarde»: las dos formas son correctas.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El autobús llega tarde ___ el tráfico.', options: ['para', 'por', 'porque'], answer: 1, why: 'El tráfico es la causa del retraso. Es un nombre, sin verbo: por.', en: 'The bus is late because of the traffic.' },
            { prompt: 'Todos los días voy al trabajo ___ el parque: es más bonito.', options: ['para', 'por'], answer: 1, why: 'El parque es el camino, no el destino: paso por el parque.', en: 'Every day I go to work through the park: it’s nicer.' },
            { prompt: 'Vendo mi bicicleta ___ cien euros.', options: ['para', 'por'], answer: 1, why: 'Cien euros es el precio: lo que recibo a cambio de la bici. Por.', en: 'I’m selling my bike for a hundred euros.' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/brand/mascot/seated.webp', coach: 'Primero piensa qué quieres decir.', blocks: [
          { kind: 'table', title: 'Las preguntas de hoy · Today’s questions', head: ['Pregunta (question)', 'Uso (use)', 'Ejemplo'], rows: [
            ['¿Para qué? (what for?)', '[[para|orange]] + infinitivo: el objetivo', 'Voy [[para comprar|orange]] pan.'],
            ['¿Adónde? (where to?)', '[[para|orange]] + lugar: el destino', 'Salgo [[para Valencia|orange]].'],
            ['¿Para quién? (for whom?)', '[[para|violet]] + persona: quien lo recibe', 'Es [[para Marta|violet]].'],
            ['¿Para cuándo? (by when?)', '[[para|violet]] + día u hora: el plazo', 'Lo necesito [[para el jueves|violet]].'],
            ['¿Por qué? (why?)', '[[por|blue]] + nombre: la causa', 'No vengo [[por la boda|blue]].'],
            ['¿Por dónde? (which way? where about?)', '[[por|teal]] + lugar: el camino o la zona', 'Paso [[por la tienda|teal]]. Vive [[por aquí|teal]].'],
            ['¿Cuándo, más o menos? (roughly when?)', '[[por|teal]] + parte del día', 'Salgo [[por la tarde|teal]].'],
            ['¿Por cuánto? (for how much?)', '[[por|teal]] + precio: el intercambio', 'Las compré [[por treinta euros|teal]].'],
          ], note: 'Por y para tienen más usos; en B1 (clase 105) vas a ver más. Hoy, estos ocho son los más frecuentes.' },
          { kind: 'compare', title: 'Por o porque · Por or porque', columns: [
            { tone: 'blue', label: 'POR + NOMBRE', sentence: 'No trabajo [[por la boda|blue]].', idea: 'Después de «por» viene un nombre: la boda, la lluvia, el tráfico.', en: 'I’m not working because of the wedding.' },
            { tone: 'neutral', label: 'PORQUE + VERBO', sentence: 'No trabajo **porque** mi hermana **se casa**.', idea: 'Después de «porque» viene un verbo conjugado: se casa, llueve, hay tráfico.', en: 'I’m not working because my sister is getting married.' },
          ] },
          { kind: 'decide', title: '¿Por, para o porque?', steps: [
            { q: '¿Después viene un verbo conjugado con la causa? (llueve, tengo, está…) · Is a conjugated verb coming next?', yes: 'Usa **porque**: «porque llueve», «porque tengo una boda».', no: 'next' },
            { q: '¿Hablas del objetivo, del destino, de quién recibe algo o del plazo? · Goal, destination, recipient or deadline?', yes: 'Usa **para**: «[[para comprar|orange]]», «[[para Valencia|orange]]», «[[para Marta|violet]]», «[[para el jueves|violet]]».', no: 'next' },
            { q: '¿Hablas de la causa, del camino, de una zona, de la parte del día o del precio? · Cause, route, area, time of day or price?', yes: 'Usa **por**: «[[por la lluvia|blue]]», «[[por el parque|teal]]», «[[por aquí|teal]]», «[[por la tarde|teal]]», «[[por diez euros|teal]]».', no: 'Quizá no necesitas ninguna: «Voy **a** casa», «Entrego el horario **el** jueves».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Pablo está nervioso ___ tiene que hablar en la boda.', options: ['por', 'porque', 'para'], answer: 1, why: 'Después viene un verbo conjugado (tiene): porque.', en: 'Pablo is nervous because he has to speak at the wedding.' },
            { prompt: 'Pablo está nervioso ___ la boda.', options: ['para', 'por', 'porque'], answer: 1, why: 'La boda es un nombre y es la causa: por.', en: 'Pablo is nervous because of the wedding.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy normales.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué pregunta responde: ¿por qué?, ¿para qué?, ¿para quién?, ¿para cuándo?, ¿por cuánto? Después aparece la corrección.', self: 'Lee cada frase y piensa qué pregunta responde. Después toca para ver la corrección. (Which question does it answer?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Gracias para el café, Lucía.', right: 'Gracias por el café, Lucía.', why: 'Después de «gracias» siempre va «por»: el café es la causa de las gracias. (Thanks for… = gracias por.)' },
            { wrong: 'Estudio inglés por trabajar en un hotel.', right: 'Estudio inglés para trabajar en un hotel.', why: 'Trabajar en un hotel es el objetivo, lo que quieres conseguir: para + infinitivo.' },
            { wrong: 'No vengo hoy porque la lluvia.', right: 'No vengo hoy por la lluvia. / No vengo hoy porque llueve.', why: '«Porque» necesita un verbo conjugado. Con un nombre solo, usa «por».' },
            { wrong: 'Este pastel es por Marta.', right: 'Este pastel es para Marta.', why: 'Marta recibe el pastel: para + persona.' },
            { wrong: 'Ana necesita el horario por el jueves.', right: 'Ana necesita el horario para el jueves.', why: 'El jueves es el plazo, el último día posible: para.' },
            { wrong: 'Compré las tazas para treinta euros.', right: 'Compré las tazas por treinta euros.', why: 'El precio es lo que das a cambio: por.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Muchas gracias ___ tu ayuda con el horario.', options: ['para', 'porque', 'por'], answer: 2, why: 'Gracias por + la causa del agradecimiento.', en: 'Thank you very much for your help with the rota.' },
            { prompt: 'Lucía ahorra dinero ___ viajar en verano.', options: ['por', 'para'], answer: 1, why: 'Viajar es el objetivo: para + infinitivo.', en: 'Lucía is saving money to travel in the summer.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice dos frases sobre su trabajo o sus estudios: «Trabajo / estudio para…» y «Este año no… por…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El cambio de turno', coach: 'Toca las expresiones marcadas. Tap the marked words.',
      steps: [
        { title: 'En la cocina de La Espiga · In the kitchen at La Espiga', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lucía y tu alumno es Pablo. Después tu alumno toca cada expresión marcada y dice qué pregunta responde.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di qué pregunta responde: ¿por qué?, ¿para qué?, ¿para quién?… (Which question does it answer?)' } },
          { kind: 'explore', title: 'Un favor antes de abrir', setting: 'Martes, siete de la mañana. Pablo y Lucía preparan el café antes de abrir la panadería. (Tuesday, 7 a.m. Pablo and Lucía are making coffee before the bakery opens.)', lines: [
            { who: 'Pablo', text: 'Lucía, ¿tienes un minuto? Te quiero pedir un favor.', en: 'Lucía, have you got a minute? I want to ask you a favour.' },
            { who: 'Lucía', text: 'Claro. ¿Qué pasa?', en: 'Sure. What’s up?' },
            { who: 'Pablo', text: 'El sábado no puedo trabajar [[por la boda|blue]] de mi hermana Marta. Es en Valencia.', en: 'I can’t work on Saturday because of my sister Marta’s wedding. It’s in Valencia.' },
            { who: 'Lucía', text: '¡Qué bien! ¿Y cuándo sales [[para Valencia|orange]]?', en: 'How nice! And when are you leaving for Valencia?' },
            { who: 'Pablo', text: 'El viernes [[por la tarde|teal]]. Voy en autobús.', en: 'On Friday afternoon. I’m going by bus.' },
            { who: 'Lucía', text: 'Tranquilo, cambio el turno [[por ti|blue]]. Te cambio mi martes [[por tu sábado|teal]]: el sábado trabajo yo y el martes que viene trabajas tú.', en: 'Don’t worry, I’ll swap the shift for you. I’ll give you my Tuesday for your Saturday: I work on Saturday and you work next Tuesday.' },
            { who: 'Pablo', text: '¡Perfecto! Mil gracias [[por hacerlo|blue]].', en: 'Perfect! Thanks so much for doing it.' },
            { who: 'Lucía', text: 'De nada. Pero Ana necesita el horario nuevo [[para el jueves|violet]]. Hoy se lo digo.', en: 'You’re welcome. But Ana needs the new rota by Thursday. I’ll tell her today.' },
            { who: 'Pablo', text: 'De acuerdo. Ella siempre manda los horarios el viernes.', en: 'All right. She always sends out the rotas on Friday.' },
            { who: 'Lucía', text: 'Otra cosa: Ana y yo queremos comprar un regalo [[para Marta|violet]].', en: 'Another thing: Ana and I want to buy a present for Marta.' },
            { who: 'Pablo', text: '¡Qué detalle! Hay una tienda de cerámica [[por aquí|teal]], en la calle de atrás. Venden tazas muy bonitas [[por unos diez euros|teal]].', en: 'How thoughtful! There’s a pottery shop around here, on the street behind. They sell lovely cups for about ten euros.' },
            { who: 'Lucía', text: 'Genial. Mañana paso [[por la tienda|teal]] [[para ver|orange]] las tazas.', en: 'Great. Tomorrow I’ll stop by the shop to look at the cups.' },
          ], notes: {
            'por la boda': '**Causa**: la boda es la razón; por eso Pablo no puede trabajar. Con verbo sería «porque mi hermana se casa».',
            'para Valencia': '**Destino**: salir para + lugar, el final del viaje. También es correcto «¿Cuándo vas a Valencia?».',
            'por la tarde': '**Parte del día**: por la mañana, por la tarde, por la noche. En muchos países de América también se oye «en la tarde».',
            'por ti': '**Motivo**: Pablo es la razón del cambio. Lucía lo hace porque él lo necesita.',
            'por tu sábado': '**Intercambio**: cambiar una cosa por otra. Lucía da su martes y recibe el sábado de Pablo.',
            'por hacerlo': '**Gracias por** + infinitivo: hacer el cambio es la causa de las gracias. No es un objetivo. (Thanks for doing it.)',
            'para el jueves': '**Plazo**: el jueves es el último día posible para tener el horario.',
            'para Marta': '**Destinataria**: Marta va a recibir el regalo.',
            'por aquí': '**Zona**: cerca de aquí, sin decir el lugar exacto. (Around here.)',
            'por unos diez euros': '**Precio**: lo que pagas a cambio de una taza. «Unos» = más o menos (about).',
            'por la tienda': '**Camino**: pasar por un lugar es parar allí un momento, en el camino a otro sitio. (To stop by.)',
            'para ver': '**Objetivo**: para + infinitivo, lo que Lucía quiere hacer en la tienda.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no puede trabajar Pablo el sábado?', options: ['Porque tiene que hacer el horario.', 'Porque está enfermo.', 'Por la boda de su hermana.'], answer: 2, why: '«El sábado no puedo trabajar por la boda de mi hermana Marta».', en: 'Why can’t Pablo work on Saturday?' },
            { prompt: '¿Qué día trabaja Pablo en lugar de Lucía?', options: ['El viernes por la tarde.', 'El jueves.', 'El martes que viene.'], answer: 2, why: '«El sábado trabajo yo y el martes que viene trabajas tú».', en: 'Which day does Pablo work instead of Lucía?' },
            { prompt: '¿Para qué pasa Lucía por la tienda mañana?', options: ['Para comprar pan.', 'Para hablar con Ana.', 'Para ver las tazas.'], answer: 2, why: '«Mañana paso por la tienda para ver las tazas».', en: 'Why is Lucía stopping by the shop tomorrow?' },
          ] },
        ] },
        { title: '¿Qué pregunta responde? · Which question does it answer?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Las expresiones del diálogo · Expressions from the dialogue', categories: [
            { id: 'causa', label: 'POR · ¿por qué?', tone: 'blue' },
            { id: 'camino', label: 'POR · ¿por dónde? ¿cuándo? ¿por cuánto?', tone: 'teal' },
            { id: 'objetivo', label: 'PARA · ¿para qué? ¿adónde?', tone: 'orange' },
            { id: 'quien', label: 'PARA · ¿para quién? ¿para cuándo?', tone: 'violet' },
          ], items: [
            { text: 'por la boda de mi hermana', answer: 'causa', why: 'La boda es la razón: ¿por qué no trabaja Pablo?' },
            { text: 'para Valencia', answer: 'objetivo', why: 'El destino del viaje: ¿adónde sale Pablo?' },
            { text: 'por la tarde', answer: 'camino', why: 'La parte del día: ¿cuándo, más o menos?' },
            { text: 'para el jueves', answer: 'quien', why: 'El plazo: ¿para cuándo necesita Ana el horario?' },
            { text: 'por hacerlo', answer: 'causa', why: 'Gracias por: la causa de las gracias.' },
            { text: 'para Marta', answer: 'quien', why: 'Marta recibe el regalo: ¿para quién?' },
            { text: 'por unos diez euros', answer: 'camino', why: 'El precio: ¿por cuánto?' },
            { text: 'para ver las tazas', answer: 'objetivo', why: 'El objetivo: ¿para qué pasa Lucía por la tienda?' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y tú? ¿Por qué cambiaste un plan la última vez? ¿Para quién compraste tu último regalo?». Tu alumno responde con por + nombre y para + persona.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Antes de elegir, haz la pregunta: ¿por qué? ¿para qué?',
      steps: [
        { title: 'Un día en La Espiga · A day at La Espiga', blocks: [
          { kind: 'choice', items: [
            { context: 'El horno no funciona desde las cuatro. (The oven hasn’t worked since four.)', prompt: 'Hoy cerramos una hora antes ___ una avería.', options: ['para', 'porque', 'por'], answer: 2, why: 'La avería es la causa del cierre, y es un nombre: por.', en: 'Today we are closing an hour early because of a fault.' },
            { context: 'Lucía lleva un café a una clienta. (Lucía takes a coffee to a customer.)', prompt: 'Este café con leche es ___ la señora de la ventana.', options: ['por', 'para'], answer: 1, why: 'La señora recibe el café: para + persona.', en: 'This white coffee is for the lady by the window.' },
            { context: 'Ana va a Madrid en tren. (Ana is taking the train to Madrid.)', prompt: 'El tren ___ Madrid sale a las nueve y diez.', options: ['por', 'para', 'en'], answer: 1, why: 'Madrid es el destino del tren: el tren para Madrid. («El tren a Madrid» también se dice.)', en: 'The train to Madrid leaves at ten past nine.' },
            { context: 'Pablo siempre camina al trabajo. (Pablo always walks to work.)', prompt: 'Pablo viene al trabajo ___ la plaza: es más corto.', options: ['para', 'por'], answer: 1, why: 'La plaza es el camino, no el destino: por.', en: 'Pablo comes to work through the square: it’s shorter.' },
            { context: 'La gestora espera las facturas. (The accountant is waiting for the invoices.)', prompt: 'Ana necesita las facturas ___ el lunes como muy tarde.', options: ['por', 'para'], answer: 1, why: '«Como muy tarde»: el lunes es el plazo. Para.', en: 'Ana needs the invoices by Monday at the latest.' },
          ] },
        ] },
        { title: '¿Qué pregunta responde? · Which question does it answer?', blocks: [
          { kind: 'classify', title: 'Frases nuevas · New sentences', categories: [
            { id: 'causa', label: 'POR · ¿por qué?', tone: 'blue' },
            { id: 'camino', label: 'POR · ¿por dónde? ¿cuándo? ¿por cuánto?', tone: 'teal' },
            { id: 'objetivo', label: 'PARA · ¿para qué? ¿adónde?', tone: 'orange' },
            { id: 'quien', label: 'PARA · ¿para quién? ¿para cuándo?', tone: 'violet' },
          ], items: [
            { text: 'Llegó tarde por el tráfico.', answer: 'causa', why: 'El tráfico es la causa del retraso.' },
            { text: 'Te llamo mañana por la mañana.', answer: 'camino', why: 'La parte del día: ¿cuándo, más o menos?' },
            { text: 'Vendo mi sofá por doscientos euros.', answer: 'camino', why: 'El precio: lo que recibo a cambio.' },
            { text: 'Este libro es para mi padre.', answer: 'quien', why: 'Mi padre recibe el libro.' },
            { text: 'Voy a yoga para relajarme.', answer: 'objetivo', why: 'Relajarme es el objetivo: para + infinitivo.' },
            { text: 'El vuelo para Lima sale con retraso.', answer: 'objetivo', why: 'Lima es el destino del vuelo.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Muchas gracias para las flores, Ana.', ok: false, options: ['Muchas gracias por las flores, Ana.', 'Muchas gracias a las flores, Ana.', 'Muchas gracias porque las flores, Ana.'], answer: 0, why: 'Gracias por + la causa: las flores.' },
            { sentence: 'Compré este pastel por quince euros.', ok: true, why: 'Correcta: el precio va con «por».' },
            { sentence: 'Hoy no salimos porque la lluvia.', ok: false, options: ['Hoy no salimos por que la lluvia.', 'Hoy no salimos por la lluvia.', 'Hoy no salimos para la lluvia.'], answer: 1, why: '«La lluvia» es un nombre: por. Con verbo, «porque llueve».' },
            { sentence: 'Pablo hace un curso por aprender a hacer pan.', ok: false, options: ['Pablo hace un curso a aprender a hacer pan.', 'Pablo hace un curso para aprender a hacer pan.', 'Pablo hace un curso porque aprender a hacer pan.'], answer: 1, why: 'Aprender a hacer pan es el objetivo: para + infinitivo.' },
            { sentence: 'Necesito tu respuesta por el viernes.', ok: false, options: ['Necesito tu respuesta porque el viernes.', 'Necesito tu respuesta para el viernes.', 'Necesito tu respuesta en el viernes.'], answer: 1, why: 'El viernes es el plazo: para.' },
          ] },
        ] },
        { title: 'En la tienda de cerámica · At the pottery shop', blocks: [
          { kind: 'chat-fill', title: 'Lucía compra el regalo · Lucía buys the present', lines: [
            { who: 'Dependienta', text: 'Buenos días. ¿Qué busca?' },
            { who: 'Lucía', text: 'Busco un regalo ___ una amiga. Se casa el sábado.', options: ['para', 'por', 'a'], answer: 0, why: 'La amiga recibe el regalo: para + persona.' },
            { who: 'Dependienta', text: '¿Le gustan estas tazas? Están hechas a mano. (They’re handmade.)' },
            { who: 'Lucía', text: 'Son preciosas. Entonces, ¿pago treinta euros ___ las tres?', options: ['para', 'por', 'porque'], answer: 1, why: 'Treinta euros a cambio de las tres tazas: el precio, por.' },
            { who: 'Dependienta', text: 'Sí. ¿Quiere una caja ___ llevarlas mejor?', options: ['por', 'para'], answer: 1, why: 'Llevarlas mejor es el objetivo de la caja: para + infinitivo.' },
            { who: 'Lucía', text: 'Sí, por favor. Y gracias ___ su paciencia.', options: ['para', 'porque', 'por'], answer: 2, why: 'Gracias por + la causa: su paciencia.' },
            { who: 'Dependienta', text: 'De nada. Pase ___ aquí cuando quiera.', options: ['para', 'por'], answer: 1, why: 'Pasar por un lugar: una visita corta en el camino.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Trabajo', 'para', 'Ana', 'desde', 'hace', 'dos', 'años'], accept: ['Trabajo para Ana desde hace dos años', 'Desde hace dos años trabajo para Ana'], en: 'I’ve been working for Ana for two years.' },
            { tiles: ['Cambio', 'el', 'turno', 'por', 'ti'], accept: ['Cambio el turno por ti'], en: 'I’ll swap the shift for you.' },
            { tiles: ['Pablo', 'sale', 'para', 'Valencia', 'por', 'la', 'tarde'], accept: ['Pablo sale para Valencia por la tarde', 'Pablo sale por la tarde para Valencia', 'Por la tarde Pablo sale para Valencia'], en: 'Pablo leaves for Valencia in the afternoon.' },
            { tiles: ['Gracias', 'por', 'el', 'regalo', 'para', 'mi', 'hermana'], accept: ['Gracias por el regalo para mi hermana'], en: 'Thanks for the present for my sister.' },
          ] },
        ] },
        { title: 'Di lo mismo con por o para · Say it with por or para', mascot: '/brand/mascot/kneeling.webp', coach: 'Una idea, otra forma.', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase nueva · Write the new sentence', items: [
            { prompt: 'No trabajo el sábado porque mi hermana se casa.', instruction: 'Usa «por» + «la boda de mi hermana». (Use por + a noun.)', accept: ['No trabajo el sábado por la boda de mi hermana', 'Por la boda de mi hermana no trabajo el sábado'] },
            { prompt: 'Voy a la tienda. Quiero comprar un regalo.', instruction: 'Une las dos ideas con «para» + infinitivo. (Join them with para + infinitive.)', accept: ['Voy a la tienda para comprar un regalo'] },
            { prompt: 'Marta va a recibir estas tazas.', instruction: 'Empieza con «Estas tazas son…». (Start with “Estas tazas son…”.)', accept: ['Estas tazas son para Marta'] },
            { prompt: 'Las tazas costaron treinta euros.', instruction: 'Empieza con «Compré las tazas…» y usa «por». (Start with “Compré las tazas…”.)', accept: ['Compré las tazas por treinta euros'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno dice tres frases sobre su semana: una causa con «por», un plazo con «para» y un precio con «por».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Ana', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Ana organiza la semana · Ana organises the week', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno dice «¡por!» o «¡para!» cada vez que oye una y después explica qué pregunta responde. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada «por» y cada «para» que oyes. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Ana para Lucía', channel: 'MENSAJE DE VOZ · DE ANA PARA LUCÍA', src: '/audio/grammar-live/374.mp3',
            before: 'Ana, la dueña de La Espiga, manda un audio a Lucía el martes por la noche. ¿De qué crees que habla: del horario, del regalo, del sábado…? (Ana sends Lucía a voice message. What do you think she talks about?)',
            gist: { prompt: '¿Cuál es la idea general?', options: ['Ana da las gracias a Lucía y organiza el horario y el regalo.', 'Ana dice que la panadería cierra el sábado.', 'Ana pide a Lucía un viaje a Valencia.'], answer: 0, why: 'Ana da las gracias por el cambio, pide el horario, habla del sábado y del regalo para Marta.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Para cuándo necesita Ana el horario nuevo?', options: ['Para el jueves.', 'Para el viernes.', 'Para el sábado.'], answer: 0, why: '«Necesito el horario nuevo para el jueves, porque el viernes lo mando a todo el equipo».', en: 'By when does Ana need the new rota?' },
              { prompt: '¿Por qué abren a las ocho el sábado?', options: ['Por la boda de Marta.', 'Por el mercado de la plaza.', 'Por una avería.'], answer: 1, why: '«El sábado abrimos a las ocho por el mercado de la plaza».', en: 'Why are they opening at eight on Saturday?' },
              { prompt: '¿Por cuánto compró Ana las tazas?', options: ['Por diez euros.', 'Por veinte euros.', 'Por treinta euros.'], answer: 2, why: '«Ya compré unas tazas muy bonitas por treinta euros».', en: 'How much did Ana pay for the cups?' },
              { prompt: '¿Para qué llevan las tazas a la panadería?', options: ['Para envolverlas.', 'Para venderlas.', 'Para usarlas en el café.'], answer: 0, why: '«Las llevamos a la panadería para envolverlas».', en: 'Why are they taking the cups to the bakery?' },
            ],
            transcript: 'Hola, Lucía, soy Ana. Primero, muchas gracias [[por el cambio|blue]] con Pablo: entonces el sábado trabajas tú y el martes trabaja él. Necesito el horario nuevo [[para el jueves|violet]], porque el viernes lo mando a todo el equipo. Otra cosa: el sábado abrimos a las ocho [[por el mercado|blue]] de la plaza; siempre viene mucha gente temprano. Y el regalo [[para Marta|violet]], la hermana de Pablo: ya compré unas tazas muy bonitas [[por treinta euros|teal]]. ¿Puedes pasar [[por mi casa|teal]] el viernes antes del trabajo? Te las doy y las llevamos a la panadería [[para envolverlas|orange]]. Pablo sale [[para Valencia|orange]] el viernes a las seis, así que se las damos antes. Un beso y hasta mañana.',
            reply: { teacher: 'Tú eres Ana. Tu alumno es Lucía y responde al audio con tres frases: da las gracias por algo, dice para cuándo tiene el horario y a qué hora pasa por casa de Ana.', self: 'Responde a Ana en voz alta como Lucía: da las gracias por algo, di para cuándo tienes el horario y a qué hora pasas por su casa. (Answer as Lucía.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Turnos, viajes y regalos', coach: '¿Por qué? ¿Para qué? ¿Para quién?',
      steps: [
        { title: 'Tu trabajo, tus planes · Your work, your plans', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las tarjetas. Tú sigues lo que tu alumno quiere contar y repreguntas con «¿por qué?», «¿para qué?», «¿para quién?» y «¿para cuándo?». Si tu alumno se equivoca, tú repites su frase con la preposición correcta.', self: 'Lee cada pregunta y responde en voz alta, como en una conversación. Si quieres, escribe después tu respuesta. (Answer aloud, like in a conversation.)' } },
          { kind: 'talk', cards: [
            { q: '¿Para quién trabajas o para qué empresa? ¿O para qué estudias? · Who do you work for? Or what are you studying for?', followUps: ['¿Desde cuándo trabajas o estudias allí? (Since when?)', '¿Por qué elegiste ese trabajo o esos estudios? (Why did you choose it?)'], phrases: ['Trabajo [[para|violet]] una empresa de…', 'Estudio [[para|orange]] ser…', 'Lo escogí [[por|blue]] el horario / [[porque|blue]]…'], hint: 'Para + empresa o persona: para quién trabajas. Por + nombre o porque + verbo: la razón.', example: 'Trabajo para una escuela de idiomas desde hace tres años. Escogí este trabajo por el horario: termino a las tres.', next: 'Ahora, un favor.' },
            { q: 'Un compañero necesita un día libre. ¿Cambias el turno por él? ¿Qué le propones? · A colleague needs a day off. Do you swap with him? What do you offer?', followUps: ['¿Qué día te da a cambio? (What day does he give you?)', '¿Por qué lo haces? (Why do you do it?)'], phrases: ['Cambio el turno [[por ti|blue]].', 'Te cambio mi… [[por tu|teal]]…', 'Lo hago [[por|blue]] ti / [[porque|blue]]…'], hint: 'Cambiar una cosa por otra: «Te cambio mi lunes por tu sábado».', example: 'Claro, cambio el turno por ti. Te cambio mi lunes por tu sábado: el sábado trabajo yo y el lunes trabajas tú.', next: 'Ahora, un viaje.' },
            { q: '¿Cuándo es tu próximo viaje? ¿Para dónde sales? ¿Sales por la mañana o por la tarde? · When is your next trip? Where are you leaving for?', followUps: ['¿Para qué vas? (What for?)', '¿Por dónde pasas en el camino? (What places do you go through?)'], phrases: ['Salgo [[para|orange]]… el…', 'Voy allí [[para|orange]] ver a…', 'Salgo [[por la mañana|teal]] y paso [[por|teal]]…'], hint: 'Para + lugar: el destino. Por + lugar: el camino. Por la mañana / por la tarde: la parte del día.', example: 'En agosto salgo para Lisboa en tren. Salgo por la mañana y paso por varios pueblos. Voy allí para ver a unos amigos.', next: 'Hablemos de regalos.' },
            { q: '¿Cuál fue el último regalo que compraste? ¿Para quién era? · What was the last present you bought? Who was it for?', followUps: ['¿Por cuánto lo compraste? (How much did you pay for it?)', '¿Por qué elegiste ese regalo? (Why that present?)'], phrases: ['Era [[para|violet]] mi…', 'Lo compré [[por|teal]] … euros / pesos.', 'Lo escogí [[porque|blue]]…'], hint: 'Para + la persona que lo recibe. Por + el precio.', example: 'El último regalo fue para mi madre: un libro de cocina. Lo compré por veinte euros. Lo escogí porque le encanta cocinar.', next: 'Ahora, tus plazos.' },
            { q: '¿Qué tienes que terminar esta semana? ¿Para cuándo? · What do you have to finish this week? By when?', followUps: ['¿Para quién es? (Who is it for?)', '¿Qué haces para terminar a tiempo? (What do you do to finish on time?)'], phrases: ['Tengo que terminar… [[para el|violet]] viernes.', 'Es [[para|violet]] mi jefe / mi profesora.', 'Me levanto temprano [[para|orange]]…'], hint: 'El plazo con para: para el viernes, para las cinco, para fin de mes.', example: 'Tengo que terminar un informe para el viernes. Es para mi jefa. Para terminarlo a tiempo, trabajo una hora más por la tarde.', next: 'Para terminar, gracias.', teacher: 'Tú preguntas también: «¿Y lo entregas el viernes o para el viernes?». Tu alumno explica la diferencia: el día exacto o el último día posible.' },
            { q: '¿A quién quieres dar las gracias esta semana? ¿Por qué? · Who do you want to thank this week? What for?', followUps: ['¿Qué hizo esa persona? (What did that person do?)', '¿Cómo le das las gracias? (How do you thank them?)'], phrases: ['Gracias [[por|blue]] tu ayuda / [[por|blue]] venir.', 'Quiero dar las gracias a… [[por|blue]]…', 'Le compro algo [[para|orange]]…'], hint: 'Gracias siempre con por: por + nombre o por + infinitivo.', example: 'Quiero dar las gracias a mi vecina por cuidar a mi gato el fin de semana. Le compro unas flores para darle las gracias.', teacher: 'Tú también das las gracias a tu alumno por algo real de la clase: «Gracias por tu paciencia», «Gracias por las preguntas».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas con «¿Para quién…?», «¿Para cuándo…?», «¿Por qué…?» y tú respondes.', self: 'Escribe tres preguntas con «¿Para quién…?», «¿Para cuándo…?» y «¿Por qué…?» y házselas a alguien esta semana. (Write three questions and ask someone.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Pedir un cambio de turno', coach: 'Un mensaje claro y amable. A clear, friendly message.',
      steps: [
        { title: 'Un mensaje a un compañero · A message to a colleague', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos qué pregunta responde cada «por» y cada «para».', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después mira cada «por» y cada «para»: ¿qué pregunta responde? (Check which question each one answers.)' } },
          { kind: 'write', title: '¿Me cambias el turno? · Can you swap shifts with me?', situation: 'Trabajas en una tienda, un café o una oficina. Un día de la semana que viene no puedes trabajar. Escribe un mensaje a un compañero: pide un cambio de turno y organiza los detalles. (You can’t work one day next week. Write to a colleague: ask to swap shifts and sort out the details.)', task: [
            'Explica la causa con «por» + nombre (por un viaje, por una cita médica…). (Give the reason with por + noun.)',
            'Propón el intercambio: «Te cambio mi… por tu…». (Offer the swap.)',
            'Di para cuándo necesita el jefe o la jefa el horario. (Say by when the boss needs the rota.)',
            'Usa «para» + infinitivo o «para» + persona una vez. (Use para + infinitive or para + person once.)',
            'Da las gracias con «gracias por». (Say thank you with gracias por.)',
          ], starters: ['Hola, … ¿Qué tal?', 'Te escribo para pedirte un favor.', 'El… no puedo trabajar por…', 'Te cambio mi… por tu…', 'Nuestra jefa necesita el horario para el…', 'Muchas gracias por…'],
            words: ['el turno', 'el horario', 'el día libre', 'cambiar… por…', 'por la mañana', 'por la tarde', 'para el lunes', 'gracias por', 'un favor'],
            model: 'Hola, Sergio. ¿Qué tal? Te escribo [[para pedirte|orange]] un favor. El miércoles que viene no puedo trabajar [[por una cita médica|blue]]. ¿Te cambio mi miércoles [[por tu viernes|teal]]? El miércoles trabajas tú [[por la mañana|teal]] y el viernes trabajo yo. Si estás de acuerdo, se lo digo a Elena hoy: necesita el horario nuevo [[para el lunes|violet]]. Y si quieres, el viernes te llevo un café [[para el descanso|orange]]. Muchas gracias [[por todo|blue]]. Un abrazo, Clara.',
            minWords: 60,
            checks: [
              { label: 'Gracias por (thanks for)', pattern: '(?<!\\p{L})gracias\\s+por(?!\\p{L})', tip: 'Termina con las gracias: «Muchas gracias por tu ayuda».' },
              { label: 'Un intercambio: cambiar… por… (a swap)', pattern: '(?<!\\p{L})cambi\\p{L}*(?:\\s+\\p{L}+){0,4}\\s+por(?!\\p{L})', tip: 'Propón el cambio: «Te cambio mi lunes por tu sábado».' },
              { label: 'Para + día: el plazo (a deadline)', pattern: '(?<!\\p{L})para\\s+(?:el\\s+|este\\s+|esta\\s+)?(?:lunes|martes|miércoles|miercoles|jueves|viernes|sábado|sabado|domingo|mañana|manana|hoy|fin\\s+de\\s+mes|la\\s+una|las\\s+(?:\\d+|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce))(?!\\p{L})', tip: 'Di el plazo: «Elena necesita el horario para el lunes».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})gracias\\s+para(?!\\p{L})', why: 'Después de «gracias» va siempre **por**: «gracias por tu ayuda».' },
              { pattern: '(?<!\\p{L})porque\\s+(?:el|la|los|las|un|una|mi|tu|su)\\s+\\p{L}+\\s*[.,;!?]', why: 'Si después de «porque» solo hay un nombre, usa **por**: «por una cita médica». Con «porque» hace falta un verbo: «porque tengo una cita».' },
              { pattern: '(?<!\\p{L})para\\s+(?:\\d+|diez|quince|veinte|treinta|cuarenta|cincuenta|cien)\\s+(?:euros|pesos|dólares|dolares|soles)(?!\\p{L})', why: 'El precio va con **por**: «por veinte euros».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take with you?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'POR · CAUSA', formula: 'por + nombre · gracias por', example: 'No trabajo por la boda. Gracias por el cambio.', caption: '¿por qué? la razón, lo que pasa antes', en: 'why? the reason, what comes first' },
            { tone: 'teal', label: 'POR · CAMINO, ZONA, MOMENTO, PRECIO', formula: 'pasar por · por aquí · por la tarde · por diez euros', example: 'Paso por la tienda por la tarde. Las compré por treinta euros.', caption: '¿por dónde? ¿cuándo, más o menos? ¿por cuánto?', en: 'which way? roughly when? for how much?' },
            { tone: 'orange', label: 'PARA · OBJETIVO Y DESTINO', formula: 'para + infinitivo · salir para + lugar', example: 'Voy para comprar un regalo. Pablo sale para Valencia.', caption: '¿para qué? ¿adónde?', en: 'what for? where to?' },
            { tone: 'violet', label: 'PARA · DESTINATARIO Y PLAZO', formula: 'para + persona · para + día', example: 'Es para Marta. Lo necesito para el jueves.', caption: '¿para quién? ¿para cuándo?', en: 'for whom? by when?' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Primero haz la pregunta. **¿Para qué, adónde, para quién, para cuándo?** → para. **¿Por qué, por dónde, cuándo más o menos, por cuánto?** → por. Y recuerda: **por** + nombre, **porque** + verbo; **gracias por**, siempre.', en: 'Ask the question first. What for, where to, for whom, by when? → para. Why, which way, roughly when, for how much? → por. And remember: por + noun, porque + verb; always gracias por.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'La carretera está cerrada ___ la nieve.', options: ['porque', 'por', 'para'], answer: 1, why: 'La nieve es la causa, y es un nombre: por.', en: 'The road is closed because of the snow.' },
            { prompt: 'Estas magdalenas son ___ los niños de la vecina.', options: ['por', 'para'], answer: 1, why: 'Los niños reciben las magdalenas: para.', en: 'These muffins are for the neighbour’s children.' },
            { prompt: 'Mañana salgo ___ Bogotá a las siete.', options: ['por', 'para'], answer: 1, why: 'Bogotá es el destino del viaje: salir para.', en: 'Tomorrow I leave for Bogotá at seven.' },
            { prompt: 'Gracias ___ esperarme.', options: ['para', 'por', 'porque'], answer: 1, why: 'Gracias por + infinitivo: esperar es la causa de las gracias.', en: 'Thanks for waiting for me.' },
            { prompt: '¿Hay un cajero ___ aquí?', options: ['para', 'por'], answer: 1, why: 'Por aquí: la zona, cerca de aquí.', en: 'Is there a cash machine around here?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en la estación.', blocks: [
          { kind: 'lead', text: 'El viernes, Pablo está en la estación de autobuses. Escribe cada idea con «por» o «para».', en: 'On Friday, Pablo is at the bus station. Write each idea with por or para.' },
          { kind: 'rewrite', title: 'En la estación · At the station', items: [
            { prompt: 'El autobús va a Valencia. Sale a las seis.', instruction: 'Empieza con «El autobús…» y usa «para». (Start with “El autobús…”.)', accept: ['El autobús para Valencia sale a las seis', 'El autobús sale para Valencia a las seis', 'El autobús sale a las seis para Valencia'] },
            { prompt: 'El autobús llega tarde porque hay mucha niebla.', instruction: 'Usa «por» + «la niebla». (Use por + la niebla.)', accept: ['El autobús llega tarde por la niebla', 'Por la niebla el autobús llega tarde'] },
            { prompt: 'Pablo compra una botella de agua. Paga dos euros.', instruction: 'Empieza con «Pablo compra…» y usa «por». (Start with “Pablo compra…”.)', accept: ['Pablo compra una botella de agua por dos euros'] },
          ] },
        ] },
        { title: 'Ampliación · Por teléfono, por fin, para mí', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional: un paso más. Optional: one step further.', blocks: [
          { kind: 'tip', icon: '💡', title: 'Más usos muy frecuentes · More very frequent uses', text: 'Opcional. **Por** también dice cómo envías o recibes algo: **por teléfono**, **por correo**, **por mensaje**. Y aparece en expresiones fijas: **por favor**, **por fin** (at last), **por ejemplo**, **por supuesto** (of course). **Para mí** sirve para dar tu opinión: «Para mí, el sábado es el mejor día». En la clase 105 (B1) vas a ver más diferencias, como «lo hice por ti» y «lo hice para ti».', en: 'Optional. Por also says how you send or receive something: by phone, by email, by message. And it appears in fixed expressions: por favor, por fin (at last), por ejemplo, por supuesto (of course). Para mí gives your opinion: “In my opinion, Saturday is the best day.” In class 105 (B1) you will see more differences, like “lo hice por ti” and “lo hice para ti”.' },
          { kind: 'choice', title: 'Un paso más · One step further', items: [
            { prompt: 'Ana manda el horario a todo el equipo ___ correo.', options: ['para', 'por', 'en'], answer: 1, why: 'Por + medio: cómo envías algo (por correo, por teléfono).', en: 'Ana sends the rota to the whole team by email.' },
            { prompt: '¡___ sale el autobús de Pablo! Tenía una hora de retraso.', options: ['Por fin', 'Para fin', 'Por favor'], answer: 0, why: 'Por fin = at last: algo que esperabas mucho tiempo.', en: 'At last Pablo’s bus is leaving! It was an hour late.' },
            { prompt: '___, la boda fue preciosa. ¿Y para ti?', options: ['Por ejemplo', 'Por mí', 'Para mí'], answer: 2, why: 'Para mí = en mi opinión (in my opinion).', en: 'In my opinion, the wedding was beautiful. What about you?' },
            { prompt: 'Lucía habla con Pablo ___ teléfono el domingo.', options: ['para', 'por'], answer: 1, why: 'Por teléfono: el medio de la comunicación.', en: 'Lucía talks to Pablo on the phone on Sunday.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Tu alumno cuenta cómo habla con su familia (por teléfono, por mensaje) y da una opinión con «para mí».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 075 · Ser, estar y llevar para descripciones cambiantes', text: 'Ya explicas por qué, para qué y para quién haces algo: «No trabajo por la boda», «El regalo es para Marta». En la clase 075 vuelves a describir personas, pero ahora lo que cambia: «**es** alto», «hoy **está** muy elegante», «**lleva** un traje azul». Es el paso natural: la boda de Marta llega, y para contarla necesitas describir a la gente de ese día.', en: 'You can now explain why, what for and for whom you do something: “No trabajo por la boda”, “El regalo es para Marta”. In class 075 you go back to describing people, but now what changes: “es alto”, “hoy está muy elegante”, “lleva un traje azul”. It is the natural next step: Marta’s wedding is coming, and to talk about it you need to describe the people on that day.', href: '/gramatica/ser-estar-y-llevar-para-descripciones', label: 'Ir a la clase 075' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Para quién trabajas y por qué cambiarías un turno?». Respuesta esperada: para + persona o empresa y por + nombre. Tarea: escribir el mensaje de Escribir para una situación real.' },
        ] },
      ],
    },
  ],
};
