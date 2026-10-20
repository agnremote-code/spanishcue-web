import type { LiveLesson } from '../types';

/**
 * Lesson 356 · A2 · Ir a + infinitivo frente al futuro simple (course unit G056).
 * One scene runs through the class: the community garden of calle Sol. It is
 * Friday afternoon and Elena Ruiz, the coordinator, prepares Saturday’s planting
 * day with Pablo Méndez, a new volunteer: plans already decided (vamos a plantar,
 * van a venir), what they see coming (mira esas nubes: va a llover), Pablo’s
 * promises (las traeré mañana, te llamaré esta noche) and their hopes for the
 * summer (comeremos los primeros tomates). In the voice message Rosa (Colombian
 * voice, tú with Elena) explains she will arrive late and promises to help.
 * Content: ir a + infinitivo (A1 review) for decided plans and present evidence;
 * futuro simple, regular forms (infinitive + -é, -ás, -á, -emos, -éis, -án), for
 * promises and offers, predictions without present evidence, forecasts and
 * formal announcements. Irregular stems (tendré, podré, haré, saldré, vendré,
 * habrá) only for recognition: class 057 teaches them. Anchor: Voy a llamar
 * mañana; te llamaré luego. Mistakes: *voy a llamaré, *mañana te llamé,
 * *va llover, *regarémos, *llamara (no accent). Honest about overlap: both
 * forms are often possible; ir a is the most frequent in conversation, above
 * all in much of Latin America. No «cuando + future» (needs the subjunctive).
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 356,
  level: 'A2',
  title: 'Ir a + infinitivo frente al futuro simple',
  subtitle: 'Contar planes ya decididos con «voy a», y prometer o imaginar el futuro con «te llamaré» o «comeremos».',
  legend: [
    { tone: 'blue', label: 'IR A + INFINITIVO · plan decidido o señal de ahora (going to: plan or evidence)' },
    { tone: 'orange', label: 'FUTURO SIMPLE · promesa, predicción, anuncio (will: promise, prediction)' },
    { tone: 'teal', label: 'MARCADORES · mañana, esta noche, algún día (time words)' },
  ],
  optionNotes: {
    'llamé': '«Llamé» es pasado (indefinido): ayer llamé. El futuro termina en **-aré**: llamaré.',
    'ayudé': '«Ayudé» es pasado: ayer te ayudé. Para el futuro: ayud**aré**.',
    'regarémos': 'Nosotros no lleva tilde en el futuro: **regaremos**, como hablaremos o comeremos.',
    'terminarémos': 'Nosotros no lleva tilde en el futuro: **terminaremos**.',
    'va llover': 'Falta la **a**: va **a** llover. Las tres piezas: ir + a + infinitivo.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Dos maneras de hablar del futuro', coach: 'Un plan o una promesa. A plan or a promise.',
      steps: [
        { title: 'El huerto de la calle Sol · The calle Sol garden', blocks: [
          { kind: 'lead', text: 'Elena Ruiz coordina el huerto comunitario de la calle Sol. Mañana, sábado, hay una jornada de plantación con los vecinos. Elena ya tiene la lista de tareas. Su teléfono suena: es Rosa, una vecina. Elena le dice: «**Voy a llamar** a los vecinos mañana temprano». Después, a Rosa, que tiene prisa: «Vale, **te llamaré** luego». Hoy aprendes a elegir entre estas dos formas del futuro.', en: 'Elena Ruiz coordinates the community garden on calle Sol. Tomorrow, Saturday, there is a planting day with the neighbours. Elena already has the list of jobs. Her phone rings: it’s Rosa, a neighbour. Elena tells her: “I’m going to call the neighbours early tomorrow”. Then, to Rosa, who is in a hurry: “OK, I’ll call you later”. Today you learn to choose between these two forms of the future.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases de Elena y tu alumno repite. Después tu alumno dice cuál es un plan de la lista y cuál es una promesa de ese momento.', self: 'Lee las dos frases de Elena en voz alta. ¿Cuál es un plan de su lista? ¿Cuál es una promesa de ese momento? (Which one is a plan, which one is a promise?)' } },
          { kind: 'compare', title: 'Una idea, dos futuros · One idea, two futures', columns: [
            { tone: 'blue', label: 'IR A + INFINITIVO', sentence: '[[Voy a llamar|blue]] a los vecinos [[mañana|teal]].', idea: 'Un plan que Elena ya decidió antes de hablar: está en su lista.', en: 'I’m going to call the neighbours tomorrow. (a plan she already made)' },
            { tone: 'orange', label: 'FUTURO SIMPLE', sentence: '[[Te llamaré|orange]] [[luego|teal]].', idea: 'Una promesa que Elena hace en ese momento, a Rosa.', en: 'I’ll call you later. (a promise she makes right now)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Voy a llamar a los vecinos mañana» es…', options: ['algo que Elena hace todos los días.', 'un plan que Elena ya tiene en su lista.', 'algo que Elena hizo ayer.'], answer: 1, why: 'Ir a + infinitivo: un plan decidido antes de hablar.', en: '“Voy a llamar a los vecinos mañana” is…' },
            { prompt: '«Te llamaré luego» es…', options: ['un hábito de Elena.', 'una promesa que Elena hace a Rosa en ese momento.', 'una llamada del pasado.'], answer: 1, why: 'Futuro simple: Elena promete algo a Rosa ahora, en la conversación.', en: '“Te llamaré luego” is…' },
          ] },
        ] },
        { title: 'Las formas · The forms', mascot: '/brand/mascot/studying.webp', coach: 'Infinitivo completo + -é, -ás, -á…', blocks: [
          { kind: 'concept', tone: 'blue', label: 'IR A + INFINITIVO · YA LO CONOCES', question: '¿Qué vas a hacer?', en: 'What are you going to do?', formula: ['voy · vas · va · vamos · vais · van', '+ a + infinitivo'],
            meaning: 'Lo estudiaste en la clase 039: **ir** en presente + **a** + **infinitivo**. Las tres piezas siempre.',
            examples: [
              { es: 'Mañana [[vamos a plantar|blue]] tomates.', en: 'Tomorrow we’re going to plant tomatoes.' },
              { es: 'Los vecinos [[van a venir|blue]] a las nueve.', en: 'The neighbours are going to come at nine.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'FUTURO SIMPLE · NUEVO', question: '¿Qué harás? ¿Qué pasará?', en: 'What will you do? What will happen?', formula: ['infinitivo completo + -é · -ás · -á · -emos · -éis · -án', 'llamar → llamaré · comer → comeré · abrir → abriré'],
            meaning: 'No quitas nada: tomas el **infinitivo completo** y añades la terminación. Las terminaciones son **iguales** para -ar, -er e -ir.',
            examples: [
              { es: '[[Te llamaré|orange]] [[luego|teal]].', en: 'I’ll call you later.' },
              { es: 'En julio [[comeremos|orange]] nuestros tomates.', en: 'In July we’ll eat our own tomatoes.' },
            ],
            note: 'Ser, estar e ir son **regulares** en futuro: seré, estaré, iré.' },
          { kind: 'table', title: 'Futuro simple regular · Regular future', head: ['Persona', 'llamar', 'comer', 'abrir'], rows: [
            ['yo', 'llamar**é**', 'comer**é**', 'abrir**é**'],
            ['tú', 'llamar**ás**', 'comer**ás**', 'abrir**ás**'],
            ['él, ella, usted', 'llamar**á**', 'comer**á**', 'abrir**á**'],
            ['nosotros, nosotras', 'llamar**emos**', 'comer**emos**', 'abrir**emos**'],
            ['vosotros, vosotras (España)', 'llamar**éis**', 'comer**éis**', 'abrir**éis**'],
            ['ellos, ellas, ustedes', 'llamar**án**', 'comer**án**', 'abrir**án**'],
          ], note: 'Todas las formas llevan tilde menos **nosotros**: llamaremos. Cuidado: **llamé** (yo, pasado) y **llamaré** (yo, futuro) son muy parecidas.' },
          { kind: 'tip', icon: '💡', title: 'Solo para reconocer · Just to recognise', text: 'Algunos verbos cambian la raíz, con las mismas terminaciones: tener → **tendré**, poder → **podré**, hacer → **haré**, salir → **saldré**, venir → **vendré**, hay → **habrá**. Hoy solo los reconoces; los practicas en la clase 057.', en: 'Some verbs change their stem, with the same endings: tendré (I’ll have), podré (I’ll be able to), haré (I’ll do), saldré (I’ll leave), vendré (I’ll come), habrá (there will be). Today you only recognise them; you practise them in class 057.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Futuro de abrir, nosotros: «El sábado ___ el huerto a las nueve».', options: ['abriremos', 'abrimos a', 'abrirémos'], answer: 0, why: 'Abrir + -emos = abriremos. Nosotros no lleva tilde.', en: 'On Saturday we’ll open the garden at nine.' },
            { prompt: 'Futuro de estar, yo: «Mañana ___ en el huerto toda la mañana».', options: ['estaba', 'estuve', 'estaré'], answer: 2, why: 'Estar es regular en futuro: estar + -é = estaré. «Estaba» y «estuve» son pasado.', en: 'Tomorrow I’ll be at the garden all morning.' },
          ] },
        ] },
        { title: '¿Cuándo uso cada una? · When do I use each one?', mascot: '/brand/mascot/standing.webp', coach: '¿Ya decidido? ¿Lo ves venir? ¿Lo prometes?', blocks: [
          { kind: 'table', title: 'Pares mínimos · Minimal pairs', head: ['IR A + INFINITIVO', 'FUTURO SIMPLE'], rows: [
            ['Plan ya decidido: Mañana [[voy a llamar|blue]] a Rosa. Ya está en mi agenda. (I’m going to call Rosa tomorrow.)', 'Promesa u oferta de ahora: —Estoy ocupada. —Vale, [[te llamaré|orange]] luego. (OK, I’ll call you later.)'],
            ['Señal de ahora: ¡Mira el cielo! [[Va a llover|blue]]. (Look at the sky! It’s going to rain.)', 'Pronóstico del tiempo: Mañana [[lloverá|orange]] en el norte. (Tomorrow it will rain in the north.)'],
            ['Plan concreto: En mayo [[vamos a abrir|blue]] un segundo huerto. (We’re going to open a second garden in May.)', 'Futuro lejano o un sueño: [[Algún día|teal]] el barrio [[será|orange]] más verde. (One day the neighbourhood will be greener.)'],
          ], note: 'Con **ir a**, el futuro está unido al presente: ya está decidido o ya lo ves venir. Con el **futuro simple**, prometes, imaginas o anuncias algo, sin esa unión con el ahora.' },
          { kind: 'decide', title: '¿Ir a + infinitivo o futuro simple?', steps: [
            { q: '¿Es un plan ya decidido antes de hablar? (está en tu agenda, ya tienes las cosas)', yes: 'Lo más natural es **ir a + infinitivo**: «Mañana vamos a plantar tomates».', no: 'next' },
            { q: '¿Ves ahora una señal de lo que viene? (nubes negras, un vaso al borde de la mesa)', yes: 'Usa **ir a + infinitivo**: «¡Mira esas nubes! Va a llover».', no: 'next' },
            { q: '¿Prometes u ofreces algo ahora, imaginas un futuro lejano o lees un pronóstico o un anuncio?', yes: 'El **futuro simple** es muy frecuente: «Te llamaré luego», «Algún día venderemos verduras», «Mañana lloverá en el norte».', no: 'Muchas veces las dos formas son posibles. En la conversación, ir a + infinitivo es la opción más frecuente.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Elena ve un vaso al borde de la mesa. (Elena sees a glass at the edge of the table.)', prompt: '¡Cuidado, Pablo! El vaso ___.', options: ['se va a caer', 'se cae todos los días', 'se cayó'], answer: 0, why: 'Elena ve la señal ahora: el vaso está al borde. Ir a + infinitivo: se va a caer.', en: 'Careful, Pablo! The glass is going to fall.' },
            { context: 'La radio da el pronóstico del tiempo. (The radio gives the weather forecast.)', prompt: '«El domingo las temperaturas ___ en todo el país.»', options: ['subían', 'subirán', 'subieron'], answer: 1, why: 'Un pronóstico en la radio: futuro simple, subirán. Las otras formas son pasado.', en: 'On Sunday temperatures will rise all over the country.' },
          ] },
        ] },
        { title: 'En la conversación y en la radio · In conversation and on the radio', mascot: '/brand/mascot/speaking.webp', coach: 'Hablar o anunciar. Talking or announcing.', blocks: [
          { kind: 'compare', title: 'Dónde aparece cada forma · Where each form appears', columns: [
            { tone: 'blue', label: 'EN LA CONVERSACIÓN', sentence: '—¿Qué [[vas a hacer|blue]] el sábado? —[[Voy a ir|blue]] al huerto.', idea: 'Ir a + infinitivo es la forma más frecuente al hablar de planes, en España y en América.', en: '“What are you going to do on Saturday?” “I’m going to go to the garden.”' },
            { tone: 'orange', label: 'EN ANUNCIOS Y NOTICIAS', sentence: 'El huerto [[abrirá|orange]] el sábado a las nueve.', idea: 'El futuro simple es muy frecuente en carteles, noticias, pronósticos y textos formales.', en: 'The garden will open on Saturday at nine.' },
            { tone: 'orange', label: 'EN PROMESAS', sentence: 'Tranquila, [[te ayudaré|orange]] con las plantas.', idea: 'Para prometer u ofrecer ayuda, el futuro simple es muy natural.', en: 'Don’t worry, I’ll help you with the plants.' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Variación · Variation', text: 'En la conversación de muchos países de América, **ir a + infinitivo** es mucho más frecuente que el futuro simple. En España también es muy frecuente. Para una promesa rápida también oyes el **presente**: «Vale, te llamo luego». Las tres opciones son correctas.', en: 'In everyday conversation in many Latin American countries, ir a + infinitive is much more frequent than the simple future. In Spain it is very frequent too. For a quick promise you also hear the present: “Vale, te llamo luego”. All three options are correct.' },
          { kind: 'tip', icon: '🔑', title: 'La palabra de tiempo no decide · The time word does not decide', text: '«Mañana», «esta noche» o «luego» van con las dos formas: «Esta noche **va a llover**» (lo ves venir) y «Esta noche **te llamaré**» (lo prometes). Decide lo que quieres hacer: contar un plan, avisar de una señal o prometer.', en: '“Mañana”, “esta noche” or “luego” go with both forms: “Esta noche va a llover” (you see it coming) and “Esta noche te llamaré” (you promise it). What decides is what you want to do: tell a plan, point out a sign or make a promise.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Un cartel en la puerta del huerto dice: «La jornada de plantación ___ a las nueve».', options: ['empezó', 'empezará', 'empezaba'], answer: 1, why: 'Un anuncio escrito sobre el futuro: empezará. Las otras formas hablan del pasado.', en: 'A sign on the garden gate says: “The planting day will start at nine”.' },
            { prompt: '—Pablo, ¿qué ___ mañana por la tarde? —Voy a descansar.', options: ['vas hacer', 'vas a harás', 'vas a hacer'], answer: 2, why: 'Una pregunta de conversación sobre planes: vas a hacer, con las tres piezas.', en: '“Pablo, what are you going to do tomorrow afternoon?” “I’m going to rest.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Infinitivo o futuro? ¿Dónde va la tilde?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿la forma de ir a, la terminación o la tilde? Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: ¿la forma de ir a, la terminación o la tilde? Toca para ver la corrección. (What is wrong: the ir a form, the ending or the accent?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Mañana voy a llamaré a los vecinos.', right: 'Mañana voy a llamar a los vecinos.', why: 'Después de «voy a» va el infinitivo, nunca el futuro. Elige una forma: «voy a llamar» o «llamaré». (After voy a: the infinitive.)' },
            { wrong: 'Tranquila, mañana te llamé.', right: 'Tranquila, mañana te llamaré.', why: '«Llamé» es pasado (ayer te llamé). El futuro de yo termina en -aré: llamaré. (llamé = I called; llamaré = I’ll call.)' },
            { wrong: 'Mira esas nubes: va llover.', right: 'Mira esas nubes: va a llover.', why: 'La «a» no desaparece: ir + a + infinitivo. (Don’t drop the “a”.)' },
            { wrong: 'El sábado regarémos las plantas.', right: 'El sábado regaremos las plantas.', why: 'Nosotros es la única forma del futuro sin tilde: regaremos. (No accent on the nosotros form.)' },
            { wrong: 'Elena llamara a Rosa esta noche.', right: 'Elena llamará a Rosa esta noche.', why: 'El futuro lleva tilde en la última sílaba: llamará. «Llamara» sin tilde es otra forma verbal. (The accent is part of the future.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Esta tarde vamos a ___ las lechugas.', options: ['regamos', 'regaremos', 'regar'], answer: 2, why: 'Después de «vamos a» va el infinitivo: regar.', en: 'This afternoon we’re going to water the lettuces.' },
            { prompt: 'Te lo prometo: mañana te ___ con las cajas.', options: ['ayudare', 'ayudaré', 'ayudé'], answer: 1, why: 'Una promesa para mañana: ayudaré, con tilde. «Ayudé» es pasado.', en: 'I promise: tomorrow I’ll help you with the boxes.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice un plan real que ya tiene para este fin de semana («Voy a…») y una promesa para ti («Te… -é»). Tú preguntas: «¿Cuál es el plan? ¿Cuál es la promesa?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Viernes en el huerto', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Todo listo para mañana · All ready for tomorrow', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena y tu alumno es Pablo. Después tu alumno toca cada forma marcada y dice si es un plan, una señal, una promesa o una predicción.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada y di: ¿plan, señal, promesa o predicción? (Plan, sign, promise or prediction?)' } },
          { kind: 'explore', title: 'Mañana plantamos', setting: 'Viernes, a las seis de la tarde, en el huerto comunitario de la calle Sol. Elena, la coordinadora, y Pablo, un voluntario nuevo, preparan la jornada del sábado. Se tratan de tú. (Friday, 6 p.m., at the community garden. Elena, the coordinator, and Pablo, a new volunteer, get Saturday ready.)', lines: [
            { who: 'Elena', text: '¡Hola, Pablo! Gracias por venir. [[Mañana|teal]] [[vamos a plantar|blue]] los tomates y las lechugas.', en: 'Hi, Pablo! Thanks for coming. Tomorrow we’re going to plant the tomatoes and the lettuces.' },
            { who: 'Pablo', text: '¡Qué bien! ¿Cuántas personas [[van a venir|blue]]?', en: 'Great! How many people are going to come?' },
            { who: 'Elena', text: 'Unas quince. La familia Ortiz [[va a traer|blue]] las plantas a las nueve. Ya está todo organizado.', en: 'About fifteen. The Ortiz family is going to bring the plants at nine. Everything is organised.' },
            { who: 'Pablo', text: '¿Y las herramientas? Aquí solo hay dos palas.', en: 'And the tools? There are only two spades here.' },
            { who: 'Elena', text: 'Sí, ya lo sé. [[Voy a llamar|blue]] a Rosa [[ahora mismo|teal]]: ella tiene más.', en: 'Yes, I know. I’m going to call Rosa right now: she has more.' },
            { who: 'Pablo', text: 'No te preocupes. Yo tengo tres en casa: [[las traeré|orange]] mañana.', en: 'Don’t worry. I have three at home: I’ll bring them tomorrow.' },
            { who: 'Elena', text: '¡Gracias! Oye, mira esas nubes negras…', en: 'Thanks! Hey, look at those black clouds…' },
            { who: 'Pablo', text: 'Uf, sí. [[Va a llover|blue]] [[esta noche|teal]].', en: 'Oh, yes. It’s going to rain tonight.' },
            { who: 'Elena', text: 'Mejor: así la tierra [[estará|orange]] blanda para plantar.', en: 'Good: that way the soil will be soft for planting.' },
            { who: 'Pablo', text: '¿Y cuándo [[comeremos|orange]] los primeros tomates?', en: 'And when will we eat the first tomatoes?' },
            { who: 'Elena', text: 'En julio, si todo va bien. Y [[algún día|teal]] [[venderemos|orange]] verduras en el mercado del barrio.', en: 'In July, if all goes well. And one day we’ll sell vegetables at the neighbourhood market.' },
            { who: 'Pablo', text: '¡Seguro que sí! Bueno, me voy. [[Te llamaré|orange]] [[esta noche|teal]] para confirmar la hora.', en: 'I’m sure we will! Well, I’m off. I’ll call you tonight to confirm the time.' },
          ], notes: {
            'Mañana': 'Una palabra de tiempo. Aquí va con un plan (vamos a plantar), pero también puede ir con el futuro simple.',
            'vamos a plantar': 'Ir a + infinitivo, nosotros. Es el plan de la jornada: ya está decidido.',
            'van a venir': 'Ir a + infinitivo, ellos. Pablo pregunta por un plan ya organizado.',
            'va a traer': 'Ir a + infinitivo: la familia Ortiz ya lo tiene organizado. «Ya está todo organizado».',
            'Voy a llamar': 'Ir a + infinitivo: Elena decide y lo va a hacer enseguida. Es su intención, ya clara.',
            'ahora mismo': 'Right now. Con ir a, el plan está muy cerca del presente.',
            'las traeré': 'Futuro simple de traer, yo. Pablo ofrece y promete ayuda en ese momento. «Las» = las palas (them). Traer es regular en futuro: traeré.',
            'Va a llover': 'Ir a + infinitivo: Pablo ve las nubes negras. Es una señal de ahora.',
            'esta noche': 'Aparece dos veces: con «va a llover» (una señal) y con «te llamaré» (una promesa). La palabra de tiempo no decide la forma.',
            'estará': 'Futuro simple de estar: una predicción. Estar es regular en futuro: estaré, estará.',
            'comeremos': 'Futuro simple, nosotros: una pregunta por un futuro más lejano. Sin tilde, como todas las formas de nosotros.',
            'algún día': 'One day. Un futuro lejano, sin fecha: suele ir con el futuro simple.',
            'venderemos': 'Futuro simple, nosotros: un sueño de Elena, sin plan concreto todavía.',
            'Te llamaré': 'Futuro simple de llamar, yo: una promesa. Compara con «Voy a llamar a Rosa» (un plan que Elena ya decidió).',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Quién va a traer las plantas?', options: ['La familia Ortiz.', 'Pablo.', 'Rosa.'], answer: 0, why: '«La familia Ortiz va a traer las plantas a las nueve».', en: 'Who is going to bring the plants?' },
            { prompt: '¿Qué promete Pablo?', options: ['Llamar a Rosa ahora mismo.', 'Vender verduras en el mercado.', 'Traer sus tres palas mañana y llamar a Elena esta noche.'], answer: 2, why: '«Las traeré mañana» y «Te llamaré esta noche»: dos promesas en futuro simple.', en: 'What does Pablo promise?' },
            { prompt: '¿Por qué dice Pablo «va a llover»?', options: ['Porque escuchó el pronóstico en la radio.', 'Porque siempre llueve los viernes.', 'Porque ve nubes negras.'], answer: 2, why: 'Elena dice «mira esas nubes negras»: es una señal de ahora, por eso «va a llover».', en: 'Why does Pablo say “va a llover”?' },
          ] },
        ] },
        { title: '¿Plan o promesa? · Plan or promise?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases del viernes · Friday’s sentences', categories: [
            { id: 'ira', label: 'IR A + INFINITIVO · plan decidido o señal de ahora', tone: 'blue' },
            { id: 'futuro', label: 'FUTURO SIMPLE · promesa o predicción', tone: 'orange' },
          ], items: [
            { text: 'Mañana vamos a plantar los tomates.', answer: 'ira', why: 'El plan de la jornada: ya está decidido.' },
            { text: 'Las traeré mañana.', answer: 'futuro', why: 'Pablo ofrece y promete: futuro simple, traeré.' },
            { text: 'Va a llover esta noche.', answer: 'ira', why: 'Pablo ve las nubes negras: una señal de ahora.' },
            { text: 'Algún día venderemos verduras en el mercado.', answer: 'futuro', why: 'Un sueño lejano, sin fecha: futuro simple.' },
            { text: 'La familia Ortiz va a traer las plantas.', answer: 'ira', why: 'Un plan ya organizado: ir a + infinitivo.' },
            { text: 'Te llamaré esta noche.', answer: 'futuro', why: 'Una promesa de Pablo a Elena: futuro simple.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué va a pasar mañana en el huerto? ¿Qué promete Pablo?». Tu alumno responde con una frase con ir a y una frase con futuro simple.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Voy a + infinitivo. Infinitivo + -é.',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Elena escribe en la pizarra del huerto. (Elena writes on the garden whiteboard.)', prompt: 'El sábado vamos a ___ las zanahorias.', options: ['plantaremos', 'plantar', 'plantamos'], answer: 1, why: 'Después de «vamos a» va el infinitivo: plantar.', en: 'On Saturday we’re going to plant the carrots.' },
            { context: 'Elena: «¿Quién trae el agua?». (Who is bringing the water?)', prompt: 'Pablo: «Tranquila, yo ___ dos botellas grandes de agua».', options: ['traje', 'traeré', 'traía'], answer: 1, why: 'Pablo se ofrece en ese momento: una promesa en futuro, traeré. «Traje» y «traía» son pasado.', en: 'Pablo: “Don’t worry, I’ll bring two big bottles of water”.' },
            { context: 'Los voluntarios prometen a Elena cuidar el huerto en agosto. (The volunteers promise Elena to look after the garden in August.)', prompt: 'En agosto nosotros ___ las plantas todos los días.', options: ['regábamos', 'regarémos', 'regaremos'], answer: 2, why: 'Futuro de nosotros: regar + -emos, sin tilde. «Regábamos» es imperfecto (pasado).', en: 'In August we’ll water the plants every day.' },
            { context: 'Pablo ve a Mateo, un niño, en una escalera con una caja muy grande. (Pablo sees Mateo on a ladder with a very big box.)', prompt: '¡Cuidado, Mateo! ¡Te ___ caer!', options: ['vas a', 'vas', 'irás a'], answer: 0, why: 'Pablo ve el peligro ahora: ir a + infinitivo, con la «a»: te vas a caer.', en: 'Careful, Mateo! You’re going to fall!' },
            { context: 'Elena habla de sus sueños para el huerto, sin fecha. (Elena talks about her dreams for the garden, with no date.)', prompt: '«Algún día los niños del barrio ___ aquí a cultivar verduras.»', options: ['aprendían', 'aprenderán', 'aprendieron'], answer: 1, why: 'Un futuro lejano, sin fecha: futuro simple, aprenderán. Las otras formas son pasado.', en: '“One day the neighbourhood children will learn to grow vegetables here.”' },
          ] },
        ] },
        { title: '¿Plan, señal o promesa? · Plan, sign or promise?', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Qué quiere hacer la persona?', blocks: [
          { kind: 'classify', title: '¿Qué expresa la frase? · What does the sentence express?', categories: [
            { id: 'plan', label: 'IR A · un plan ya decidido', tone: 'blue' },
            { id: 'senal', label: 'IR A · una señal de ahora', tone: 'violet' },
            { id: 'futuro', label: 'FUTURO · promesa o predicción sin pruebas', tone: 'orange' },
          ], items: [
            { text: 'Ya tenemos las semillas: el lunes vamos a plantar calabazas.', answer: 'plan', why: 'Ya tienen las semillas: el plan está decidido.' },
            { text: 'Esa planta está muy seca: se va a morir.', answer: 'senal', why: 'La planta seca es una señal que ves ahora.' },
            { text: 'Tranquilo, Pablo: yo te ayudaré con el agua.', answer: 'futuro', why: 'Una oferta y una promesa de ese momento: ayudaré.' },
            { text: 'Creo que dentro de diez años el barrio será más verde.', answer: 'futuro', why: 'Una predicción lejana, sin pruebas: «creo que» + será.' },
            { text: 'Rosa ya pidió sus vacaciones: en agosto va a viajar a Cali.', answer: 'plan', why: 'Ya pidió las vacaciones: un plan decidido.' },
            { text: 'Son las ocho y el sol ya está muy fuerte: va a hacer calor.', answer: 'senal', why: 'El sol fuerte de ahora es la señal: va a hacer calor.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/kneeling.webp', coach: 'Mira la «a», la terminación y la tilde.', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Mañana voy a plantaré las lechugas.', ok: false, options: ['Mañana voy a plantar las lechugas.', 'Mañana voy plantar las lechugas.', 'Mañana voy a planté las lechugas.'], answer: 0, why: 'Después de «voy a» va el infinitivo: plantar. No se mezclan las dos formas.' },
            { sentence: 'En julio comeremos nuestros tomates.', ok: true, why: 'Correcta: comer + -emos = comeremos, sin tilde. Un futuro más lejano.' },
            { sentence: 'Las plantas no tienen agua: se van secar.', ok: false, options: ['Las plantas no tienen agua: se va a secar.', 'Las plantas no tienen agua: se van a secarán.', 'Las plantas no tienen agua: se van a secar.'], answer: 2, why: 'Falta la «a»: se van a secar. «Las plantas» es plural: van.' },
            { sentence: 'Tranquila, mañana te ayudé con las cajas.', ok: false, options: ['Tranquila, mañana te ayudaba con las cajas.', 'Tranquila, mañana te ayudara con las cajas.', 'Tranquila, mañana te ayudaré con las cajas.'], answer: 2, why: '«Ayudé» es pasado; con «mañana» y una promesa: ayudaré, con tilde.' },
            { sentence: 'Los vecinos van a llegar a las nueve.', ok: true, why: 'Correcta: un plan organizado, con las tres piezas: van + a + llegar.' },
          ] },
        ] },
        { title: 'Sábado por la mañana · Saturday morning', mascot: '/brand/mascot/speaking.webp', coach: 'Mensajes a las ocho y media.', blocks: [
          { kind: 'chat-fill', title: 'Pablo y Elena se escriben · Pablo and Elena text each other', lines: [
            { who: 'Pablo', text: 'Buenos días, Elena. Ya salgo de casa. ¿A qué hora ___ los vecinos?', options: ['van llegar', 'van a llegar', 'van a llegarán'], answer: 1, why: 'Una pregunta sobre un plan organizado: van + a + infinitivo.' },
            { who: 'Elena', text: 'A las nueve. Yo ya estoy aquí. ¡Y el cielo está azul: hoy no ___!', options: ['va a llover', 'llovió', 'va llover'], answer: 0, why: 'Elena ve el cielo azul: una señal de ahora. Va a llover, con la «a».' },
            { who: 'Pablo', text: '¡Qué bien! Ay, no tengo guantes…' },
            { who: 'Elena', text: 'No pasa nada. Yo te ___ unos.', options: ['dejara', 'dejé', 'dejaré'], answer: 2, why: 'Elena ofrece algo en ese momento: futuro, dejaré. «Dejé» es pasado.' },
            { who: 'Pablo', text: '¡Gracias! ¿Y después de plantar, qué ___?', options: ['vamos a hacer', 'vamos hacer', 'haremos a'], answer: 0, why: 'Una pregunta por el plan del día: vamos a hacer, con las tres piezas.' },
            { who: 'Elena', text: 'A la una ___ todos juntos aquí. ¡Ya tengo las mesas!', options: ['vamos comer', 'vamos a comer', 'comimos'], answer: 1, why: 'Un plan ya decidido («ya tengo las mesas»): vamos a comer.' },
            { who: 'Pablo', text: '¡Perfecto! ___ ahí en diez minutos.', options: ['Estaré', 'Estuve', 'Estaba'], answer: 0, why: 'Pablo anuncia cuándo llega: futuro, estaré. «Estuve» y «estaba» son pasado.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/portrait.webp', coach: 'Ir, a, infinitivo. Infinitivo + -é.', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['vamos', 'Mañana', 'a', 'sembrar', 'flores'], accept: ['Mañana vamos a sembrar flores', 'Vamos a sembrar flores mañana'], en: 'Tomorrow we’re going to sow flowers.' },
            { tiles: ['llamaré', 'Te', 'la', 'después', 'de', 'cena'], accept: ['Te llamaré después de la cena', 'Después de la cena te llamaré'], en: 'I’ll call you after dinner.' },
            { tiles: ['está', 'El', 'cielo', 'muy', 'gris:', 'a', 'va', 'llover'], accept: ['El cielo está muy gris: va a llover'], en: 'The sky is very grey: it’s going to rain.' },
            { tiles: ['septiembre', 'En', 'recogeremos', 'las', 'calabazas'], accept: ['En septiembre recogeremos las calabazas', 'Recogeremos las calabazas en septiembre'], en: 'In September we’ll pick the pumpkins.' },
          ] },
        ] },
        { title: 'Cambia la forma · Change the form', mascot: '/autoestudio/mascot/writing.webp', coach: 'Plan → promesa. Promesa → plan.', blocks: [
          { kind: 'rewrite', title: 'Escribe la otra forma · Write the other form', items: [
            { prompt: 'Voy a regar las plantas.', instruction: 'Ahora es una promesa a Elena: escribe la frase con el futuro simple.', accept: ['Regaré las plantas', 'Yo regaré las plantas'] },
            { prompt: 'Pablo va a traer las palas.', instruction: 'Escribe la frase con el futuro simple.', accept: ['Pablo traerá las palas'] },
            { prompt: 'Mañana plantaremos lechugas.', instruction: 'Es un plan ya decidido: escribe la frase con ir a + infinitivo.', accept: ['Mañana vamos a plantar lechugas', 'Vamos a plantar lechugas mañana'] },
            { prompt: 'Los vecinos llegarán a las nueve.', instruction: 'Es un plan ya organizado: escribe la frase con ir a + infinitivo.', accept: ['Los vecinos van a llegar a las nueve', 'A las nueve van a llegar los vecinos'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno dice dos planes reales de la semana que viene con ir a y una promesa para ti con el futuro simple: «El martes voy a…; te mandaré…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Rosa', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Rosa responde · Rosa answers', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿a qué hora va a llegar Rosa?). Segunda escucha: tu alumno levanta la mano con cada «voy a, va a» y da una palmada con cada futuro (llegaré, lloverá…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Separa las formas con ir a y las formas en futuro simple. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Rosa', channel: 'MENSAJE DE VOZ · DE ROSA PARA ELENA', src: '/audio/grammar-live/356.mp3',
            before: 'Elena llamó a Rosa por las herramientas, pero Rosa no contestó. Ahora Rosa le manda un mensaje de voz. ¿Qué crees que dice: si va a ir mañana, a qué hora, qué va a llevar…? (Rosa sends Elena a voice message. What do you think she says?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Rosa quiere cambiar la jornada al domingo.', 'Rosa no va a ir al huerto mañana.', 'Rosa va a llegar más tarde, pero promete llevar herramientas y ayudar.'], answer: 2, why: '«Mañana no voy a llegar a las nueve… Pero tranquila: llegaré a las once».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Por qué no va a llegar a las nueve?', options: ['Va a llevar a su mamá al médico.', 'Va a trabajar toda la mañana.', 'Va a comprar las plantas.'], answer: 0, why: '«Voy a llevar a mi mamá al médico».', en: 'Why isn’t she going to arrive at nine?' },
              { prompt: '¿Qué va a llevar Rosa?', options: ['El café para todos.', 'Más palas y unos guantes.', 'Las semillas para el huerto.'], answer: 1, why: '«Te llevaré más palas y unos guantes».', en: 'What is Rosa going to bring?' },
              { prompt: '¿Quién va a ir con Rosa?', options: ['Pablo.', 'Su hijo Mateo.', 'Su mamá.'], answer: 1, why: '«Mi hijo Mateo va a venir conmigo».', en: 'Who is going to go with Rosa?' },
              { prompt: '¿Qué dice el pronóstico de la radio?', options: ['Mañana hará mucho calor.', 'Esta noche va a llover mucho.', 'Mañana por la tarde lloverá un poco.'], answer: 2, why: '«Escuché el pronóstico en la radio: mañana por la tarde lloverá un poco».', en: 'What does the radio forecast say?' },
            ],
            transcript: 'Hola, Elena, soy Rosa. Vi tu llamada perdida, perdona: estaba en el trabajo. Te cuento: mañana no [[voy a llegar|blue]] a las nueve, porque [[voy a llevar|blue]] a mi mamá al médico. Pero tranquila: [[llegaré|orange]] a las once, más o menos, y te [[llevaré|orange]] más palas y unos guantes. Mi hijo Mateo [[va a venir|blue]] conmigo; le encanta trabajar con la tierra. Ah, y escuché el pronóstico en la radio: mañana por la tarde [[lloverá|orange]] un poco. Entonces, ¿por qué no plantamos todo por la mañana? Yo creo que en julio [[comeremos|orange]] unos tomates buenísimos. Bueno, te [[llamaré|orange]] esta noche, después de la cena. ¡Un abrazo!',
            reply: { teacher: 'Tú eres Rosa. Tu alumno es Elena y responde al mensaje con tres frases: el plan de la mañana (vamos a…), una promesa para Rosa (te guardaré…, te llamaré…) y un comentario sobre la lluvia.', self: 'Responde a Rosa en voz alta como Elena: el plan de la mañana con «vamos a…», una promesa con el futuro simple y algo sobre la lluvia. (Answer as Elena: a plan, a promise and the rain.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus planes y tus promesas', coach: 'Planes con «voy a», promesas con «-é». Plans and promises.',
      steps: [
        { title: 'Tú también eres voluntario · You are a volunteer too', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Elena y haces las preguntas. Tu alumno responde como voluntario del huerto o con su vida real. Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. Piensa primero: ¿es un plan, una señal o una promesa? (Answer aloud. First think: plan, sign or promise?)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué vas a hacer este fin de semana? Cuenta dos planes ya decididos. · What are you going to do this weekend? Tell two plans you have already made.', followUps: ['¿Con quién? (With whom?)', '¿A qué hora? (At what time?)'], phrases: ['El sábado [[voy a|blue]] …', 'Por la tarde [[vamos a|blue]] …', 'Ya tengo … , así que …'], hint: 'Son planes decididos: ir a + infinitivo.', example: 'El sábado voy a ir al mercado con mi pareja. Por la tarde vamos a visitar a mis padres: ya les dije que sí.', next: 'Ahora, mira por la ventana.', teacher: 'Cuenta tú también un plan tuyo con ir a. Tu alumno hace una repregunta: «¿Y a qué hora vas a…?».' },
            { q: 'Mira por la ventana o piensa en el día de hoy. ¿Qué va a pasar? · Look out of the window or think about today. What is going to happen?', followUps: ['¿Va a llover? ¿Por qué lo piensas? (Is it going to rain? Why do you think so?)', '¿Vas a llegar tarde a algún sitio? (Are you going to be late somewhere?)'], phrases: ['Hay nubes: [[va a llover|blue]].', 'Hace sol: [[va a hacer|blue]] calor.', 'Hay mucho tráfico: [[voy a llegar|blue]] tarde.'], hint: 'Ves una señal ahora: ir a + infinitivo.', example: 'Hay muchas nubes grises: creo que va a llover esta tarde. Y hay mucho tráfico: mi hermana va a llegar tarde a casa.', next: 'Ahora, Elena te pide ayuda.' },
            { q: 'Elena dice: «Mañana necesitamos agua, bolsas y una mesa más». ¿Qué ofreces? · Elena says: “Tomorrow we need water, bags and one more table”. What do you offer?', followUps: ['¿A qué hora llegarás? (What time will you arrive?)', '¿Llamarás a alguien más? (Will you call anyone else?)'], phrases: ['Tranquila, yo [[llevaré|orange]] …', '[[Te ayudaré|orange]] con …', '[[Llegaré|orange]] a las …'], hint: 'Ofreces y prometes ahora: futuro simple, -é.', example: 'Tranquila, yo llevaré el agua y las bolsas. Llegaré a las ocho y media y te ayudaré con la mesa.', next: 'Ahora, el futuro lejano.' },
            { q: '¿Cómo será tu barrio o tu ciudad dentro de diez años? · What will your neighbourhood or city be like in ten years?', followUps: ['¿Vivirás en el mismo lugar? (Will you live in the same place?)', '¿Qué cambiará? (What will change?)'], phrases: ['Creo que mi barrio [[será|orange]] …', '[[Dentro de diez años|teal]] la gente [[viajará|orange]] …', 'Yo [[viviré|orange]] …'], hint: 'Una predicción sin pruebas, lejana: futuro simple, regular (será, viviré, cambiará).', example: 'Creo que dentro de diez años mi ciudad será más verde. La gente viajará más en bicicleta. Yo viviré en el mismo barrio, cerca del parque.', next: 'Ahora, un problema.' },
            { q: 'Mañana no puedes llegar a las nueve. Llama a Elena: explica tu plan y promete algo. · Tomorrow you can’t arrive at nine. Call Elena: explain your plan and promise something.', followUps: ['¿Qué vas a hacer a esa hora? (What are you going to do at that time?)', '¿Cuándo llegarás? (When will you arrive?)'], phrases: ['Mañana [[voy a|blue]] … , así que …', 'Pero [[llegaré|orange]] a las …', '[[Te llamaré|orange]] …'], hint: 'El plan que ya tienes: ir a. Lo que prometes: futuro simple.', example: 'Elena, mañana voy a llevar a mi hijo al dentista a las nueve. Pero llegaré a las once y trabajaré toda la tarde. Te llamaré esta noche.', teacher: 'Tú eres Elena y reaccionas: «¿Y qué vas a traer?», «¿Me lo prometes?». Tu alumno combina las dos formas.' },
            { q: 'Ahora tú eres Elena: presenta la jornada a los vecinos. Tres planes y una promesa. · Now you are Elena: present the planting day to the neighbours.', followUps: ['¿Qué van a plantar? (What are they going to plant?)', '¿Qué pasará en julio? (What will happen in July?)'], phrases: ['Hoy [[vamos a|blue]] plantar …', 'A la una [[vamos a|blue]] comer …', 'En julio [[comeremos|orange]] …'], hint: 'Los planes del día con ir a; el futuro lejano y las promesas con el futuro simple.', example: 'Buenos días a todos. Hoy vamos a plantar tomates y lechugas. A la una vamos a comer juntos aquí. Y en julio comeremos nuestros primeros tomates. ¡Lo prometo!', teacher: 'Tú eres un vecino y preguntas: «¿Y qué vamos a hacer después?», «¿Cuándo comeremos los tomates?». Tu alumno responde como Elena.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Elena y hace las preguntas («¿Qué vas a hacer el sábado?», «¿Qué llevarás?») y tú respondes como voluntario.', self: 'Ahora tú eres Elena: haz las preguntas en voz alta («¿Qué vas a hacer el sábado?», «¿Qué llevarás?») y responde como Pablo. (Now you are Elena: ask and answer as Pablo.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje al grupo del huerto', coach: 'Planes, promesas y una predicción.',
      steps: [
        { title: 'Un mensaje para todos · A message for everyone', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada verbo de futuro: ¿es un plan (ir a) o una promesa (futuro simple)? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada verbo: ¿plan o promesa? ¿Está la «a»? ¿Está la tilde? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Mañana llego más tarde · I’ll be later tomorrow', situation: 'Eres voluntario del huerto de la calle Sol. Mañana es la jornada de plantación, pero no puedes llegar a las nueve. Escribe un mensaje al grupo de voluntarios: explica tu plan y promete ayudar. (You volunteer at the garden. Tomorrow is the planting day, but you can’t arrive at nine. Write to the volunteers’ group: explain your plan and promise to help.)', task: [
            'Saluda al grupo y di que mañana no llegas a las nueve. (Greet the group and say you won’t be there at nine.)',
            'Explica por qué con un plan que ya tienes: ir a + infinitivo. (Explain why with a plan you already have.)',
            'Promete dos cosas con el futuro simple: a qué hora llegarás, qué llevarás. (Promise two things with the simple future.)',
            'Añade una predicción: el tiempo, el huerto o la comida. (Add a prediction.)',
            'Despídete. (Say goodbye.)',
          ], starters: ['¡Hola a todos!', 'Mañana no voy a llegar a las nueve, porque…', 'Pero tranquilos: llegaré a las…', 'Llevaré…', 'Te llamaré…', 'Creo que…', '¡Hasta mañana!'],
            words: ['voy a', 'vamos a', 'va a', 'llegaré', 'llevaré', 'ayudaré', 'te llamaré', 'será', 'estará', 'comeremos', 'mañana', 'esta noche', 'creo que', 'tranquilos'],
            model: '¡Hola a todos! Mañana no [[voy a llegar|blue]] a las nueve, porque [[voy a acompañar|blue]] a mi hermana al aeropuerto. Pero tranquilos: [[llegaré|orange]] a las once y [[llevaré|orange]] agua y fruta para todos. Por la tarde [[ayudaré|orange]] con las lechugas. Elena, [[te llamaré|orange]] esta noche para confirmar. El cielo está azul: no [[va a llover|blue]]. Creo que mañana [[será|orange]] un día perfecto. ¡Hasta mañana!',
            minWords: 50,
            checks: [
              { label: 'Un plan con ir a + infinitivo (a plan)', pattern: '(?<!\\p{L})(?:voy|vas|va|vamos|vais|van)\\s+a\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Cuenta el plan que ya tienes: «Mañana voy a acompañar a mi hermana».' },
              { label: 'Una promesa o predicción en futuro simple (simple future)', pattern: '(?<!\\p{L})(?:\\p{L}+(?:aré|eré|iré|arás|erás|irás|ará|erá|irá|aremos|eremos|iremos|aréis|eréis|iréis|arán|erán|irán)|(?:tendr|podr|saldr|vendr|habr|querr|sabr|pondr)(?:é|ás|á|emos|éis|án))(?!\\p{L})', tip: 'Promete algo: «Llegaré a las once», «Llevaré agua para todos».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:voy|vas|va|vamos|vais|van)\\s+a\\s+\\p{L}+(?:aré|eré|iré|arás|erás|irás|ará|erá|irá|aremos|eremos|iremos|aréis|eréis|iréis|arán|erán|irán)(?!\\p{L})', why: 'Después de «voy a» va el **infinitivo**: «voy a llegar», no «voy a llegaré». O usa solo el futuro: «llegaré».' },
              { pattern: '(?<!\\p{L})(?:voy|vas|va|vamos|van)\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', why: 'Falta la **a**: «voy **a** llegar», «va **a** llover».' },
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
            { tone: 'blue', label: 'IR A + INFINITIVO', formula: 'voy · vas · va · vamos · van + a + infinitivo', example: 'Mañana voy a llamar a los vecinos. ¡Mira esas nubes! Va a llover.', caption: 'un plan ya decidido o una señal de ahora', en: 'a plan already made, or a sign you can see now' },
            { tone: 'orange', label: 'FUTURO SIMPLE', formula: 'infinitivo + -é · -ás · -á · -emos · -éis · -án', example: 'Te llamaré luego. En julio comeremos tomates.', caption: 'una promesa, una predicción lejana, un pronóstico o un anuncio', en: 'a promise, a distant prediction, a forecast or an announcement' },
            { tone: 'neutral', label: 'CUIDADO CON LA FORMA', formula: 'voy a llamar (no «voy a llamaré») · llamé ≠ llamaré · regaremos', example: 'Ayer te llamé. Mañana te llamaré.', caption: 'la «a», el infinitivo y la tilde', en: 'the “a”, the infinitive and the accent' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: ¿ya está decidido o lo ves venir? → «**Voy a** llamar mañana», «**Va a** llover». ¿Lo prometes ahora, lo imaginas lejos o lo anuncias? → «Te **llamaré** luego», «Algún día **venderemos** verduras». Muchas veces las dos son posibles; en la conversación, ir a es la más frecuente.', en: 'Ask yourself: is it already decided, or can you see it coming? → “Voy a llamar mañana”, “Va a llover”. Are you promising it now, imagining it far ahead or announcing it? → “Te llamaré luego”, “Algún día venderemos verduras”. Often both are possible; in conversation, ir a is the most frequent.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Ya reservé el hotel: en junio ___ a Lima.', options: ['voy viajar', 'viajé', 'voy a viajar'], answer: 2, why: 'Un plan decidido (ya reservé el hotel): voy a viajar, con las tres piezas.', en: 'I’ve already booked the hotel: in June I’m going to travel to Lima.' },
            { prompt: '—¿Me ayudas con la mudanza? —¡Claro! Te ___ el sábado.', options: ['ayudare', 'ayudé', 'ayudaré'], answer: 2, why: 'Una promesa en ese momento: ayudaré, con tilde. «Ayudé» es pasado.', en: '“Will you help me with the move?” “Of course! I’ll help you on Saturday.”' },
            { prompt: 'El niño tiene mucho sueño: se ___ dormir enseguida.', options: ['va', 'vas a', 'va a'], answer: 2, why: 'Una señal de ahora (tiene sueño), con la «a»: se va a dormir. «Vas» es tú.', en: 'The little boy is very sleepy: he’s going to fall asleep any minute.' },
            { prompt: 'Lo prometo: nosotros ___ el informe mañana.', options: ['terminamos a', 'terminaremos', 'terminarémos'], answer: 1, why: 'Una promesa, nosotros: terminaremos, sin tilde.', en: 'I promise: we’ll finish the report tomorrow.' },
            { prompt: 'Anuncio en el aeropuerto: «El vuelo de Bogotá ___ con veinte minutos de retraso».', options: ['llegará', 'llegó a', 'va llegar'], answer: 0, why: 'Un anuncio formal: futuro simple, llegará. «Va llegar» no tiene la «a».', en: 'Airport announcement: “The flight from Bogotá will arrive twenty minutes late”.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un cumpleaños.', blocks: [
          { kind: 'lead', text: 'Un mes después, Elena cumple cincuenta años. Pablo y Rosa preparan una fiesta sorpresa en el huerto. Escribe sus frases con la forma adecuada.', en: 'A month later, Elena turns fifty. Pablo and Rosa prepare a surprise party at the garden. Write their sentences with the right form.' },
          { kind: 'rewrite', title: 'La fiesta sorpresa · The surprise party', items: [
            { prompt: 'Pablo y Rosa ya lo decidieron: preparar una fiesta el viernes.', instruction: 'Escribe el plan con ir a + infinitivo. Empieza con «El viernes vamos».', accept: ['El viernes vamos a preparar una fiesta'] },
            { prompt: 'Rosa promete a Pablo: «Yo preparo la comida».', instruction: 'Escribe la promesa de Rosa con el futuro simple de preparar.', accept: ['Yo prepararé la comida', 'Prepararé la comida'] },
            { prompt: 'Pablo mira el cielo el viernes: está muy negro. (llover)', instruction: 'Escribe lo que dice Pablo: una señal de ahora.', accept: ['Va a llover', 'Va a llover hoy', 'Hoy va a llover'] },
          ] },
        ] },
        { title: 'Ampliación · El boletín del barrio', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional: del chat al texto formal. Optional extension.', blocks: [
          { kind: 'lead', text: 'Elena escribe en el chat de voluntarios con ir a. Ahora escribe la noticia para el boletín del barrio, un texto más formal. Allí usa el futuro simple.', en: 'Elena writes to the volunteers’ chat with ir a. Now she writes the news item for the neighbourhood bulletin, a more formal text. There she uses the simple future.' },
          { kind: 'rewrite', title: 'Del chat al boletín · From the chat to the bulletin', items: [
            { prompt: 'Chat: «Vamos a abrir el huerto a las nueve».', instruction: 'Boletín: escribe la frase con el futuro simple. Empieza con «El huerto».', accept: ['El huerto abrirá a las nueve'] },
            { prompt: 'Chat: «Los vecinos van a plantar tomates y lechugas».', instruction: 'Boletín: escribe la frase con el futuro simple.', accept: ['Los vecinos plantarán tomates y lechugas'] },
          ] },
          { kind: 'choice', title: 'Futuros irregulares: ¿qué significa? · Irregular futures: what does it mean?', items: [
            { prompt: 'Boletín: «Habrá café para todos».', options: ['There will be coffee for everyone.', 'There is coffee for everyone.', 'There was coffee for everyone.'], answer: 0, why: '«Habrá» es el futuro de hay (haber): there will be.', en: 'What does “Habrá café para todos” mean?' },
            { prompt: 'Boletín: «Los niños podrán regar las plantas».', options: ['The children want to water the plants.', 'The children will be able to water the plants.', 'The children could water the plants yesterday.'], answer: 1, why: '«Podrán» es el futuro de poder, con la raíz podr-: will be able to.', en: 'What does “Los niños podrán regar las plantas” mean?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Muestra el cambio de registro (chat → boletín) y presenta, solo para reconocer, los futuros irregulares que se practican en la clase 057.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 057 · Futuro simple: planes, promesas y predicciones', text: 'Ya eliges entre «**voy a** llamar» y «te **llamaré**», y conoces las formas regulares del futuro simple. En la clase 057 trabajas el futuro simple a fondo: los irregulares (tendré, podré, haré, saldré, habrá…), las promesas y las predicciones. Es el paso natural: ya sabes cuándo usarlo; ahora aprendes todas sus formas.', en: 'You can now choose between “voy a llamar” and “te llamaré”, and you know the regular forms of the simple future. In class 057 you work on the simple future in depth: the irregular forms (tendré, podré, haré, saldré, habrá…), promises and predictions. It is the natural next step: you already know when to use it; now you learn all its forms.', href: '/sistema-verbal/futuro-simple-indicativo', label: 'Ir a la clase 057' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué vas a hacer esta noche? ¿Y qué me prometes para la próxima clase?». Respuesta esperada: un plan con ir a y una promesa con el futuro simple regular. Tarea: escribir el mensaje de Escribir con un plan real.' },
        ] },
      ],
    },
  ],
};
