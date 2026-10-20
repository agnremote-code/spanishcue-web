import type { LiveLesson } from '../types';

/**
 * Lesson 459 · B2 · Perífrasis aspectuales avanzadas (course unit G159).
 * Builds on G106 (empezar a, ponerse a, echarse a, estar a punto de), G107
 * (lesson 115: seguir + gerundio, volver a, dejar de), G108 (acabar de, dejar de,
 * acabar + gerundio, acabar por) and G109 (volver a). It does not reteach them:
 * they come back only as a short review of phases. C1 G175 (lesson 119) goes further.
 * Scene: Marina Ochoa and Daniel Ferrer left their city jobs and bought an old
 * stone house in a mountain village to turn it into a small rural guesthouse.
 * They have been renovating it for eight months; the builder, Ernesto Gil, keeps
 * delaying the work; a neighbour, doña Remedios, goes around the village saying
 * they will never open. On Saturday Lucía Paredes, an architect friend, visits.
 * Later Sonia Cruz, a new builder, takes over the kitchen. In the listening,
 * Marina records an episode of her podcast «Diario de una casa de piedra»
 * (Colombian voice, ustedes).
 * Content: llevar + tiempo + gerundio (duration up to now; llevaba, llevaré; not
 * in perfective tenses: estuve dos años viviendo), llevar + tiempo + sin + inf.,
 * llevar + lugar / estado; ir + gerundio (gradual progress; ve + gerundio = start
 * doing it); venir + gerundio (a process from a past point up to now, often
 * insistent; frequent in the press); andar + gerundio (colloquial, here and there,
 * often critical; very frequent and neutral in Mexico and other areas). Review of
 * phases: echarse a / romper a (sudden start), volver a (repetition), estar a punto
 * de / estar por (imminence; estar por = be tempted to), acabar + gerundio /
 * terminar por (outcome). Pronoun position. Ampliación: llevar + participio,
 * venir a + inf. (approximation), estar por = a punto de in many areas of
 * Latin America, venir + gerundio in the news.
 * Anchor: Lleva dos horas trabajando; viene diciendo lo mismo. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 459,
  level: 'B2',
  title: 'Perífrasis aspectuales avanzadas',
  subtitle: 'Contar un proyecto largo: cuánto tiempo llevas, cómo va avanzando, qué viene pasando desde hace meses y cómo acabó.',
  legend: [
    { tone: 'blue', label: 'LLEVAR + GERUNDIO · LLEVAR SIN · el tiempo acumulado hasta ahora (have been doing / haven’t done for)' },
    { tone: 'teal', label: 'IR · VENIR + GERUNDIO · un proceso que avanza o que viene del pasado (gradually / has been… since)' },
    { tone: 'violet', label: 'ANDAR + GERUNDIO · coloquial, aquí y allá (going around doing)' },
    { tone: 'orange', label: 'FASES · inicio brusco, repetición, inminencia, desenlace (repaso)' },
  ],
  optionNotes: {
    'va a': 'Ir a + infinitivo es el futuro; después de «a» nunca va gerundio. Para un proceso gradual: **va** + gerundio, sin «a».',
    'anda a': 'Andar + gerundio no lleva preposición: **anda diciendo**, **anda preguntando**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Cómo se desarrolla una acción?', coach: 'Cuánto dura, cómo avanza, de dónde viene. How long, how it moves, where it comes from.',
      steps: [
        { title: 'Una casa de piedra · A stone house', blocks: [
          { kind: 'lead', text: 'Marina Ochoa y Daniel Ferrer dejaron sus trabajos en la ciudad y compraron una casa de piedra en un pueblo de la sierra para convertirla en un pequeño alojamiento rural. Marina le cuenta a una amiga: «**Llevamos ocho meses reformando** la casa. **Vamos avanzando** poco a poco, pero el constructor **viene retrasando** la obra desde marzo, y una vecina **anda diciendo** por el pueblo que no vamos a abrir nunca». Ya sabes decir cuándo empieza o termina una acción (clases 106–109). Hoy miras **dentro** de la acción: cuánto tiempo dura, cómo avanza y desde cuándo se repite.', en: 'Marina and Daniel left their city jobs and bought a stone house in a mountain village to turn it into a small rural guesthouse. Marina tells a friend: “We’ve been renovating the house for eight months. We’re getting there little by little, but the builder has been holding up the work since March, and a neighbour is going round the village saying we’ll never open.” You already know how to say when an action starts or ends (classes 106–109). Today you look inside the action: how long it has lasted, how it develops and since when it keeps happening.' },
          { kind: 'guide', text: { teacher: 'Tú lees las cuatro frases y tu alumno dice cuál mide el tiempo, cuál habla de un avance poco a poco, cuál de algo que se repite desde hace meses y cuál suena a crítica.', self: 'Lee las cuatro frases en voz alta. ¿Cuál mide el tiempo? ¿Cuál habla de un avance poco a poco? ¿Cuál, de algo que se repite desde hace meses? ¿Cuál suena a crítica? (Time, progress, repetition from the past, criticism?)' } },
          { kind: 'compare', title: 'Cuatro maneras de mirar una acción · Four ways of looking at an action', columns: [
            { tone: 'blue', label: 'TIEMPO ACUMULADO · llevar', sentence: '[[Llevamos ocho meses reformando|blue]] la casa.', idea: 'Empezaron hace ocho meses y siguen: cuenta el tiempo hasta hoy.', en: 'We’ve been renovating the house for eight months (and we still are).' },
            { tone: 'teal', label: 'AVANCE GRADUAL · ir', sentence: '[[Vamos avanzando|teal]] poco a poco.', idea: 'El proceso progresa paso a paso.', en: 'We’re making progress little by little.' },
            { tone: 'teal', label: 'DESDE UN PUNTO DEL PASADO · venir', sentence: 'Ernesto [[viene retrasando|teal]] la obra desde marzo.', idea: 'Empezó en marzo, se repite y llega hasta hoy; suena a queja.', en: 'Ernesto has been holding up the work since March (again and again).' },
            { tone: 'violet', label: 'AQUÍ Y ALLÁ · andar', sentence: 'Una vecina [[anda diciendo|violet]] que no vamos a abrir.', idea: 'Lo dice por ahí, a unos y a otros; coloquial y con crítica.', en: 'A neighbour is going around saying we won’t open.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Llevamos ocho meses reformando la casa» significa…', options: ['Reformaron la casa durante ocho meses y ya terminaron.', 'Empezaron hace ocho meses y siguen reformándola.', 'Van a reformar la casa dentro de ocho meses.'], answer: 1, why: 'Llevar + tiempo + gerundio: la acción empezó en el pasado y continúa ahora.', en: '“Llevamos ocho meses reformando la casa” means…' },
            { prompt: 'La vecina «anda diciendo» que no van a abrir. ¿Qué matiz tiene?', options: ['Lo va contando aquí y allá, y a Marina no le gusta.', 'Está a punto de decirlo.', 'Lo dijo una vez, en una reunión formal.'], answer: 0, why: 'Andar + gerundio: una actividad repetida, por ahí, en registro coloquial y a menudo con crítica.', en: 'The neighbour “anda diciendo” they won’t open. What nuance does it have?' },
          ] },
        ] },
        { title: 'Llevar + gerundio y llevar sin · Time that adds up', mascot: '/brand/mascot/studying.webp', coach: 'Cuenta el tiempo hasta ahora. Count the time up to now.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'LLEVAR + GERUNDIO · LLEVAR SIN + INFINITIVO', question: '¿Cuánto tiempo dura ya algo que empezó en el pasado y sigue ahora? ¿O cuánto tiempo hace que no pasa?', en: 'How long has something that started in the past been going on? Or how long has it not happened?', formula: ['llevar + tiempo + gerundio → Llevamos ocho meses reformando la casa.', 'llevar + gerundio + tiempo → Llevamos reformando la casa ocho meses.', 'llevar + tiempo + sin + infinitivo → Llevo dos semanas sin dormir bien.'],
            meaning: '**Llevar + gerundio** mide el **tiempo acumulado** de una acción que empezó en el pasado y **sigue** ahora (have been doing). Necesita una expresión de tiempo: dos años, toda la mañana, desde las ocho. Para el tiempo que pasa **sin** hacer algo, usa **llevar + tiempo + sin + infinitivo**: «Llevo un mes sin fumar». Con un lugar o un estado, no hace falta gerundio: «Llevamos ocho meses aquí», «Daniel lleva dos días resfriado».',
            examples: [
              { es: 'Daniel [[lleva toda la mañana buscando|blue]] unas bisagras antiguas.', en: 'Daniel has been looking for some old hinges all morning.' },
              { es: '[[Llevamos desde septiembre pidiendo|blue]] permiso para cambiar el tejado.', en: 'We’ve been asking for permission to replace the roof since September.' },
              { es: 'La casa [[llevaba treinta años sin tener|blue]] dueño cuando la compraron.', en: 'The house had been without an owner for thirty years when they bought it.' },
            ], note: 'Las tres formas dicen lo mismo, pero llevar es la más natural en la conversación y subraya el esfuerzo acumulado: «Hace ocho meses que reformamos la casa» = «Reformamos la casa desde hace ocho meses» = «**Llevamos ocho meses reformando** la casa».' },
          { kind: 'table', title: 'Llevar en cada tiempo · Llevar in each tense', head: ['Tiempo', 'Ejemplo', '¿Hasta cuándo?'], rows: [
            ['presente: llevo, llevas…', '**Llevo** dos semanas **durmiendo** mal.', 'hasta ahora (I have been…)'],
            ['imperfecto: llevaba…', 'Cuando llegó Lucía, Daniel **llevaba** tres horas **buscando** bisagras.', 'hasta un momento del pasado (had been…)'],
            ['futuro: llevaré…', 'En septiembre **llevaremos** un año **viviendo** aquí.', 'hasta un momento del futuro (will have been…)'],
            ['indefinido o perfecto: ✗', 'Daniel **estuvo** dos años **viviendo** en Quito. / **Vivió** dos años allí.', 'una etapa cerrada: no se usa llevar, sino estar + gerundio o el verbo solo'],
          ], note: 'Llevar + gerundio siempre mira hacia un punto (ahora, entonces, mañana) en el que la acción todavía no ha terminado. Por eso no funciona con una etapa cerrada: no se dice «llevé dos años viviendo».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Daniel ___ toda la mañana buscando bisagras y todavía no las encuentra.', options: ['hace', 'viene', 'lleva'], answer: 2, why: 'El tiempo acumulado hasta ahora: llevar + tiempo + gerundio.', en: 'Daniel has been looking for hinges all morning and still can’t find them.' },
            { prompt: 'Marina no duerme bien desde hace dos semanas: ___ dos semanas ___ dormir bien.', options: ['hace… sin', 'lleva… sin', 'lleva… no'], answer: 1, why: 'El tiempo que pasa sin hacer algo: llevar + tiempo + sin + infinitivo.', en: 'Marina hasn’t slept well for two weeks.' },
            { prompt: 'Vivieron en Lima de 2015 a 2018. Es una etapa cerrada: ___ tres años viviendo allí.', options: ['Estuvieron', 'Llevan', 'Llevaron'], answer: 0, why: 'Para una etapa terminada, estar + gerundio en indefinido. Llevar + gerundio no va en indefinido.', en: 'They lived in Lima from 2015 to 2018: they spent three years living there.' },
          ] },
        ] },
        { title: 'Ir, venir y andar + gerundio · Progress, insistence, here and there', mascot: '/brand/mascot/standing.webp', coach: 'Tres verbos de movimiento, tres miradas. Three verbs of motion, three views.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'IR + GERUNDIO · VENIR + GERUNDIO', question: '¿El proceso avanza poco a poco? ¿O viene de un punto del pasado y llega hasta hoy?', en: 'Is the process moving forward step by step? Or does it come from a point in the past up to today?', formula: ['ir + gerundio → La obra va avanzando. · Las habitaciones van quedando preciosas.', 'venir + gerundio → Lo vengo diciendo desde hace meses.', 've / vaya + gerundio → Ve sacando los platos, que ya voy.'],
            meaning: '**Ir + gerundio** presenta un proceso **gradual**, paso a paso; va muy bien con poco a poco, cada vez más, a medida que (gradually). En imperativo invita a **empezar** algo mientras llega otra cosa: «Ve sacando los platos». **Venir + gerundio** mira desde un **punto del pasado** hasta ahora: la acción se repite o se acumula, y muchas veces suena a **queja o insistencia** (has been… for some time, and still is). Es muy frecuente con desde, desde hace, últimamente y en las noticias. Las dos funcionan también en pasado: «La obra **fue avanzando** despacio», «Los vecinos **venían pidiendo** un alojamiento rural desde hacía años».',
            examples: [
              { es: 'Con cada capa de pintura, las paredes [[van quedando|teal]] más blancas.', en: 'With every coat of paint, the walls are getting whiter.' },
              { es: '[[Te lo vengo diciendo|teal]] desde hace meses: necesitamos otro constructor.', en: 'I’ve been telling you for months: we need another builder.' },
              { es: 'El precio de la madera [[viene subiendo|teal]] desde el año pasado.', en: 'The price of timber has been going up since last year.' },
            ], note: 'No confundas: **voy mejorando** (avance gradual) / **voy a mejorar** (futuro) / **estoy mejorando** (en este momento). Y venir + gerundio no es venir a + infinitivo: «vengo diciendo» ≠ «vengo a decir».' },
          { kind: 'concept', tone: 'violet', label: 'ANDAR + GERUNDIO', question: '¿Alguien hace algo aquí y allá, de vez en cuando o sin rumbo fijo, y lo cuentas en registro coloquial?', en: 'Is someone doing something here and there, on and off or without a clear direction, and are you telling it informally?', formula: ['andar + gerundio → Doña Remedios anda diciendo que no vamos a abrir.', '¿Qué andas + gerundio? → ¿Qué andas buscando?'],
            meaning: '**Andar + gerundio** es coloquial. Presenta una actividad **repetida o dispersa**, por ahí, a ratos. Con verbos como decir, contar, criticar o quejarse, suele llevar una **valoración negativa**: «anda diciendo mentiras». En México y en otras zonas de América es muy frecuente y muchas veces neutro: «Ando buscando trabajo».',
            examples: [
              { es: 'Ernesto [[anda contando|violet]] que el retraso es culpa de la lluvia.', en: 'Ernesto is going around telling people the delay is the rain’s fault.' },
              { es: 'Daniel [[anda buscando|violet]] un fontanero que pueda venir en sábado.', en: 'Daniel is on the lookout for a plumber who can come on a Saturday.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Las paredes estaban negras; ahora, con cada capa de pintura, ___ recuperando su color.', options: ['van a', 'llevan', 'van'], answer: 2, why: 'Un proceso gradual, paso a paso: ir + gerundio, sin «a».', en: 'The walls were black; now, with every coat of paint, they’re gradually getting their colour back.' },
            { prompt: '«El precio de la madera viene subiendo desde el año pasado» significa…', options: ['Subió una vez el año pasado.', 'Empezó a subir el año pasado y sigue subiendo.', 'Va a subir el año que viene.'], answer: 1, why: 'Venir + gerundio: desde un punto del pasado hasta hoy, una y otra vez.', en: '“The price of timber viene subiendo since last year” means…' },
            { prompt: '—¿Qué ___ buscando por aquí, Daniel? —Unas bisagras antiguas.', options: ['llevas', 'andas', 'andas a'], answer: 1, why: 'Una pregunta coloquial y amistosa: ¿qué andas + gerundio? Llevar necesitaría una expresión de tiempo.', en: '—What are you looking for round here, Daniel? —Some old hinges.' },
          ] },
        ] },
        { title: 'Repaso de fases · Review: how actions start, repeat and end', mascot: '/brand/mascot/speaking.webp', coach: 'Lo que ya sabes, ahora en una historia. What you know, now in a story.', blocks: [
          { kind: 'lead', text: 'Una historia larga también tiene momentos: algo empieza de golpe, se repite, está a punto de pasar o acaba de una manera inesperada. Estas perífrasis ya las viste en las clases 106, 108 y 109. Aquí las combinas con llevar, ir, venir y andar.', en: 'A long story also has moments: something starts suddenly, happens again, is about to happen or ends in an unexpected way. You saw these periphrases in classes 106, 108 and 109. Here you combine them with llevar, ir, venir and andar.' },
          { kind: 'table', title: 'Las fases de la acción · The phases of an action', head: ['Fase', 'Perífrasis', 'Ejemplo'], rows: [
            ['inicio brusco', '[[echarse a|orange]] (reír, llorar, correr, temblar) · [[romper a|orange]] (llorar, reír, llover; más literario)', 'Al ver el tejado nuevo, Marina **se echó a llorar**. / De pronto **rompió a llover**.'],
            ['repetición', '[[volver a|orange]] + infinitivo', 'El sábado **volvió a entrar** agua por el tejado.'],
            ['inminencia', '[[estar a punto de|orange]] + infinitivo', 'Los primeros huéspedes **están a punto de llegar**.'],
            ['inclinación (coloquial)', '[[estar por|orange]] + infinitivo', '**Estoy por llamar** a otra empresa. (I’m tempted to…)'],
            ['desenlace', '[[acabar|orange]] / terminar + gerundio · acabar / [[terminar por|orange]] + infinitivo', 'Ernesto **acabó reconociendo** el retraso. / **Terminó por reconocerlo**.'],
          ], note: 'Echarse a necesita un sujeto que actúa (una persona, un animal): no se dice «se echó a llover» (sino «se puso a llover» o «rompió a llover»). Y «estar por» con el sentido de «a punto de» es propio de muchas zonas de América: lo ves en la Ampliación.' },
          { kind: 'decide', title: '¿Qué perífrasis uso? · Which one?', steps: [
            { q: '¿Quieres decir cuánto tiempo lleva pasando algo (o sin pasar)?', yes: 'Usa **llevar** + tiempo + gerundio, o llevar + tiempo + sin + infinitivo: «Llevo un mes sin fumar».', no: 'next' },
            { q: '¿El proceso avanza poco a poco?', yes: 'Usa **ir** + gerundio: «La obra va avanzando».', no: 'next' },
            { q: '¿Viene de un punto del pasado, se repite hasta hoy y quizá te molesta?', yes: 'Usa **venir** + gerundio: «Lo vengo diciendo desde marzo».', no: 'next' },
            { q: '¿Alguien hace algo por ahí, a ratos, y lo cuentas en tono coloquial?', yes: 'Usa **andar** + gerundio: «Anda diciendo que…».', no: 'Mira la fase: echarse a, volver a, estar a punto de, acabar + gerundio.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Al ver el tejado terminado, Marina ___ llorar de alegría.', options: ['se puso de', 'volvió de', 'rompió a'], answer: 2, why: 'Un inicio brusco e intenso: romper a + llorar (también «se echó a llorar»).', en: 'When she saw the finished roof, Marina burst into tears of joy.' },
            { prompt: 'El sábado ___ entrar agua por la misma grieta.', options: ['estuvo por', 'volvió a', 'acabó de'], answer: 1, why: 'Una repetición: volver a + infinitivo.', en: 'On Saturday water came in again through the same crack.' },
            { prompt: 'Al principio la casa no les gustaba nada, pero ___ comprarla.', options: ['terminó por', 'terminó de', 'estuvo a punto'], answer: 0, why: 'El desenlace: terminar por + infinitivo (= acabaron comprándola). Terminar de es completar una tarea.', en: 'At first they didn’t like the house at all, but they ended up buying it.' },
          ] },
        ] },
        { title: 'Pronombres y errores frecuentes · Pronouns and common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Gerundio, sin preposición. Gerund, no preposition.', blocks: [
          { kind: 'table', title: '¿Dónde va el pronombre? · Where does the pronoun go?', head: ['Perífrasis', 'Delante del verbo conjugado', 'Unido al gerundio'], rows: [
            ['llevar + gerundio', '**Lo** llevo esperando una hora.', 'Llevo una hora esperándo**lo**.'],
            ['venir + gerundio', '**Te lo** vengo diciendo desde marzo.', 'Vengo diciéndo**telo** desde marzo.'],
            ['ir + gerundio', '**La** vamos pintando por partes.', 'Vamos pintándo**la** por partes.'],
          ], note: 'Las dos posiciones son correctas. Unido al gerundio, el pronombre obliga a poner tilde: esperándolo, diciéndotelo. Nunca en medio: no «vengo te lo diciendo».' },
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿la forma del segundo verbo, la preposición, el tiempo o la perífrasis? Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: ¿la forma del segundo verbo, la preposición, el tiempo o la perífrasis? Toca para ver la corrección. (Second verb, preposition, tense or periphrasis?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Llevo dos años de estudiar piano.', right: 'Llevo dos años estudiando piano.', why: 'Llevar + tiempo + **gerundio**, sin «de». (It takes the gerund.)' },
            { wrong: 'Daniel llevó tres años viviendo en Quito.', right: 'Daniel estuvo tres años viviendo en Quito. / Daniel vivió tres años en Quito.', why: 'Una etapa cerrada no va con llevar: estar + gerundio o el verbo en indefinido.' },
            { wrong: 'Llevo un mes no fumando.', right: 'Llevo un mes sin fumar.', why: 'El tiempo sin hacer algo: llevar + tiempo + **sin** + infinitivo.' },
            { wrong: 'La obra va a avanzando poco a poco.', right: 'La obra va avanzando poco a poco.', why: 'Ir **a** + infinitivo es el futuro. Para un avance gradual, ir + gerundio, sin «a».' },
            { wrong: 'Te lo vengo a decir desde hace meses.', right: 'Te lo vengo diciendo desde hace meses.', why: 'Desde un punto del pasado hasta hoy: venir + **gerundio**. Venir a + infinitivo es otra cosa.' },
            { wrong: 'De repente se echó a llover.', right: 'De repente se puso a llover. / De repente rompió a llover.', why: 'Echarse a va con personas o animales: se echó a reír, a correr. Para la lluvia, ponerse a o romper a.' },
            { wrong: 'Ernesto acabó de aceptar que la obra iba lenta.', right: 'Ernesto acabó aceptando que la obra iba lenta.', why: 'Para el desenlace (ended up), acabar + gerundio o acabar por + infinitivo. Acabar de es pasado reciente o terminar.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Le dijiste a Ernesto lo del tejado? —Sí, ___ desde hace semanas.', options: ['vengo se lo diciendo', 'se lo vengo diciendo', 'se lo vengo a decir'], answer: 1, why: 'Venir + gerundio, con los pronombres delante del verbo conjugado (o unidos al gerundio: vengo diciéndoselo).', en: '—Did you tell Ernesto about the roof? —Yes, I’ve been telling him for weeks.' },
            { prompt: '¿Qué frase es correcta?', options: ['Las dos son correctas.', 'Lo llevo esperando una hora.', 'Llevo esperándolo una hora.'], answer: 0, why: 'El pronombre puede ir delante de llevar o unido al gerundio, con tilde.', en: 'Which sentence is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases sobre su vida: una con llevar (o llevar sin), una con ir + gerundio y una con venir + gerundio. Tú repreguntas: «¿Desde cuándo?», «¿Y cómo va?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La visita de Lucía', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Sábado en la obra · Saturday at the building site', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lucía y tu alumno es Marina. Después tu alumno toca cada expresión marcada y dice si mide el tiempo, si habla de un proceso, si suena coloquial o si marca una fase.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di: ¿tiempo acumulado, proceso, «aquí y allá» o una fase? (Time, process, here and there, or a phase?)' } },
          { kind: 'explore', title: 'Ocho meses de obra', setting: 'Sábado por la mañana. Lucía Paredes, arquitecta y amiga de Marina desde la universidad, visita por primera vez la casa de piedra. Daniel no está. Se tratan de tú. (Saturday morning. Lucía, an architect and an old university friend, visits the stone house for the first time.)', lines: [
            { who: 'Lucía', text: '¡Qué maravilla de casa, Marina! ¿Y Daniel?', en: 'What a wonderful house, Marina! And where’s Daniel?' },
            { who: 'Marina', text: 'Bajó al pueblo. [[Lleva toda la mañana buscando|blue]] unas bisagras para las contraventanas.', en: 'He went down to the village. He’s been looking for hinges for the shutters all morning.' },
            { who: 'Lucía', text: 'Parece que la obra está casi terminada, ¿no?', en: 'It looks like the work is almost finished, doesn’t it?' },
            { who: 'Marina', text: '¡Qué va! [[Llevamos ocho meses reformando|blue]] y todavía falta la cocina. Eso sí, [[vamos avanzando|teal]]: cada semana terminamos algo.', en: 'Not at all! We’ve been renovating for eight months and the kitchen still isn’t done. Still, we’re getting there: every week we finish something.' },
            { who: 'Lucía', text: '¿Y el constructor? Me dijiste que había problemas.', en: 'And the builder? You told me there were problems.' },
            { who: 'Marina', text: 'Ernesto [[viene retrasando|teal]] la obra desde marzo: siempre tiene otra urgencia. Y encima una vecina [[anda diciendo|violet]] por el pueblo que no vamos a abrir nunca.', en: 'Ernesto has been holding up the work since March: he always has something more urgent. And on top of that, a neighbour is going round the village saying we’ll never open.' },
            { who: 'Lucía', text: '¡Qué injusto! ¿Y tú cómo lo llevas?', en: 'That’s so unfair! And how are you coping?' },
            { who: 'Marina', text: 'Regular. [[Llevo dos semanas sin dormir|blue]] bien. El martes, cuando [[volvió a entrar|orange]] agua por el tejado, [[me eché a llorar|orange]] delante de Ernesto.', en: 'Not great. I haven’t slept properly for two weeks. On Tuesday, when water came in through the roof again, I burst into tears in front of Ernesto.' },
            { who: 'Lucía', text: 'Es normal. Pero mira el lado bueno: las habitaciones [[van quedando|teal]] preciosas.', en: 'That’s understandable. But look on the bright side: the bedrooms are turning out beautifully.' },
            { who: 'Marina', text: 'Eso dice todo el mundo. La verdad es que [[estoy por llamar|orange]] a otra empresa para la cocina.', en: 'That’s what everyone says. To be honest, I’m tempted to call another firm for the kitchen.' },
            { who: 'Lucía', text: 'Hazlo. Mi hermano esperó un año a un constructor como Ernesto y [[acabó haciendo|orange]] la cocina él mismo.', en: 'Do it. My brother waited a year for a builder like Ernesto and ended up doing the kitchen himself.' },
            { who: 'Marina', text: 'Pues no lo descarto. De hecho, [[estamos a punto de cerrar|orange]] un presupuesto con una constructora del valle.', en: 'Well, I’m not ruling it out. In fact, we’re about to agree a quote with a builder from the valley.' },
          ], notes: {
            'Lleva toda la mañana buscando': 'Llevar + tiempo + gerundio: Daniel empezó a buscar temprano y sigue buscando. (He’s been looking all morning.)',
            'Llevamos ocho meses reformando': 'Llevar + gerundio: ocho meses acumulados, y la obra sigue. Equivale a «Hace ocho meses que reformamos». El complemento (la casa) se sobrentiende.',
            'vamos avanzando': 'Ir + gerundio: un avance gradual, paso a paso. No es futuro (vamos a avanzar) ni algo puntual (estamos avanzando). (We’re gradually getting there.)',
            'viene retrasando': 'Venir + gerundio: desde marzo hasta hoy, una y otra vez. El tono es de queja. (He has been holding it up since March.)',
            'anda diciendo': 'Andar + gerundio: lo dice aquí y allá, a unos y a otros. Es coloquial y, con «decir», crítico. (She’s going around saying.)',
            'Llevo dos semanas sin dormir': 'Llevar + tiempo + sin + infinitivo: el tiempo que pasa sin hacer algo. No se dice «llevo dos semanas no durmiendo».',
            'volvió a entrar': 'Volver a + infinitivo (clase 109): una repetición; ya había entrado agua antes. (Water came in again.)',
            'me eché a llorar': 'Echarse a + infinitivo (clase 106): un inicio brusco, sin control. El pronombre cambia con la persona: me eché, se echó. (I burst into tears.)',
            'van quedando': 'Ir + gerundio: el resultado se ve poco a poco, habitación tras habitación. (They’re turning out…)',
            'estoy por llamar': 'Estar por + infinitivo, coloquial: estar casi decidida a hacer algo. (I’m tempted to call.) En muchas zonas de América también significa «estar a punto de».',
            'acabó haciendo': 'Acabar + gerundio (clase 108): el desenlace, no planeado. (He ended up doing it.)',
            'estamos a punto de cerrar': 'Estar a punto de + infinitivo: va a pasar muy pronto. Cerrar un presupuesto = llegar a un acuerdo sobre el precio. (We’re about to agree a quote.)',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no está Daniel en la casa?', options: ['Está hablando con Ernesto.', 'Está durmiendo.', 'Bajó al pueblo a buscar bisagras.'], answer: 2, why: '«Bajó al pueblo. Lleva toda la mañana buscando unas bisagras».', en: 'Why isn’t Daniel at the house?' },
            { prompt: '¿Qué problema tiene la obra desde marzo?', options: ['El constructor la retrasa una y otra vez.', 'La vecina no los deja trabajar.', 'No tienen dinero.'], answer: 0, why: '«Ernesto viene retrasando la obra desde marzo: siempre tiene otra urgencia».', en: 'What problem has the work had since March?' },
            { prompt: '¿Qué está pensando hacer Marina?', options: ['Vender la casa.', 'Abrir sin cocina.', 'Contratar a otra empresa para la cocina.'], answer: 2, why: '«Estoy por llamar a otra empresa para la cocina» y están a punto de cerrar un presupuesto.', en: 'What is Marina thinking of doing?' },
          ] },
        ] },
        { title: 'Más momentos de la obra · More moments from the renovation', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Cómo se mira la acción? · How is the action seen?', categories: [
            { id: 'tiempo', label: 'TIEMPO ACUMULADO · llevar', tone: 'blue' },
            { id: 'proceso', label: 'PROCESO · ir, venir + gerundio', tone: 'teal' },
            { id: 'andar', label: 'AQUÍ Y ALLÁ · andar + gerundio', tone: 'violet' },
            { id: 'fase', label: 'FASE · inicio, repetición, desenlace', tone: 'orange' },
          ], items: [
            { text: 'Marina lleva una semana sin abrir el correo del banco.', answer: 'tiempo', why: 'El tiempo sin hacer algo: llevar + sin + infinitivo.' },
            { text: 'Las facturas de la luz vienen subiendo desde el otoño.', answer: 'proceso', why: 'Desde un punto del pasado hasta hoy: venir + gerundio.' },
            { text: 'Poco a poco, el jardín va tomando forma.', answer: 'proceso', why: 'Un avance gradual: ir + gerundio.' },
            { text: 'Ernesto anda contando que la culpa es del mal tiempo.', answer: 'andar', why: 'Lo cuenta por ahí, en tono coloquial y con crítica: andar + gerundio.' },
            { text: 'Cuando llegó Lucía, Daniel llevaba tres horas en el pueblo.', answer: 'tiempo', why: 'Llevar + tiempo + lugar, sin gerundio: tiempo acumulado hasta un momento pasado.' },
            { text: 'Cuando Lucía vio el salón, se echó a reír: todavía no había suelo.', answer: 'fase', why: 'Un inicio brusco: echarse a + infinitivo.' },
            { text: 'Al final, Daniel acabó pintando las puertas él mismo.', answer: 'fase', why: 'El desenlace: acabar + gerundio.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Cuánto tiempo lleva Marina sin dormir bien? ¿Qué viene haciendo Ernesto desde marzo? ¿Qué anda diciendo la vecina?». Tu alumno responde con la misma perífrasis.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero decide: ¿tiempo, proceso, «por ahí» o fase? Decide how you see the action first.',
      steps: [
        { title: 'Las semanas siguientes · The following weeks', blocks: [
          { kind: 'choice', items: [
            { context: 'Daniel habla con un vecino del pueblo. (Daniel talks to a villager.)', prompt: '—¿Cuánto tiempo ___ en la casa? —Ocho meses, desde septiembre.', options: ['llevan viviendo', 'están viviendo', 'llevan vivir'], answer: 0, why: 'La pregunta por el tiempo acumulado: ¿cuánto tiempo llevan + gerundio?', en: '—How long have you been living in the house? —Eight months, since September.' },
            { context: 'Sonia Cruz, la nueva constructora, visita la casa. (Sonia, the new builder, visits the house.)', prompt: '«Las casas de piedra se ___ estropeando con la humedad si nadie las cuida».', options: ['vienen a', 'van', 'llevan'], answer: 1, why: 'Un deterioro gradual: ir + gerundio. Llevar necesitaría una expresión de tiempo.', en: '“Stone houses gradually deteriorate with the damp if nobody looks after them.”' },
            { context: 'Marina, en una reunión con Sonia. (Marina, meeting Sonia.)', prompt: '«Ernesto ___ prometiendo la cocina desde diciembre y todavía no la ha empezado».', options: ['anda a', 'va', 'viene'], answer: 2, why: 'Desde un punto del pasado hasta hoy, con queja: venir + gerundio. Ir + gerundio no mira desde diciembre.', en: '“Ernesto has been promising the kitchen since December and still hasn’t started it.”' },
            { context: 'Un mensaje de Lucía. (A message from Lucía.)', prompt: '«Me han dicho que Ernesto ___ diciendo por ahí que ustedes no le pagan».', options: ['lleva', 'va a', 'anda'], answer: 2, why: 'Lo dice aquí y allá, con crítica: andar + gerundio. «Lleva diciendo» necesitaría un tiempo.', en: '“I’ve heard Ernesto is going around saying you don’t pay him.”' },
            { context: 'Marina, aliviada. (Marina, relieved.)', prompt: '«Desde que llegó Sonia, ___ tres noches ___ despertarme a las cuatro».', options: ['llevo… sin', 'estoy… sin', 'llevo… no'], answer: 0, why: 'El tiempo que pasa sin hacer algo: llevar + tiempo + sin + infinitivo.', en: '“Since Sonia arrived, I haven’t woken up at four for three nights.”' },
          ] },
        ] },
        { title: '¿Suena natural? · Does it sound natural?', blocks: [
          { kind: 'classify', title: 'Natural o no · Natural or not', categories: [
            { id: 'si', label: 'NATURAL', tone: 'teal' },
            { id: 'no', label: 'NO NATURAL', tone: 'neutral' },
          ], items: [
            { text: 'Llevamos desde las ocho esperando al electricista.', answer: 'si', why: 'Llevar admite desde + un punto de partida: mide el tiempo hasta ahora.' },
            { text: 'Llevamos esperando al electricista.', answer: 'no', why: 'Falta la expresión de tiempo: llevamos una hora / desde las ocho esperando.' },
            { text: 'El verano pasado llevamos dos meses pintando la fachada.', answer: 'no', why: 'Una etapa cerrada: estuvimos dos meses pintando. Llevar no va en indefinido.' },
            { text: 'Te lo vengo advirtiendo desde que compramos la casa.', answer: 'si', why: 'Venir + gerundio desde un punto del pasado, con insistencia.' },
            { text: 'Ve encendiendo la estufa, que ahora bajo.', answer: 'si', why: 'Ir + gerundio en imperativo: empieza a hacerlo mientras llego.' },
            { text: 'La humedad se echó a subir por las paredes.', answer: 'no', why: 'Echarse a necesita un sujeto que actúa (una persona, un animal). Aquí: empezó a subir o va subiendo.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Llevamos un mes sin tener agua caliente.', ok: true, why: 'Correcta: llevar + tiempo + sin + infinitivo.' },
            { sentence: 'Sonia lleva dos semanas a trabajar en la cocina.', ok: false, options: ['Sonia lleva a trabajar dos semanas en la cocina.', 'Sonia lleva dos semanas trabajando en la cocina.', 'Sonia lleva dos semanas de trabajar en la cocina.'], answer: 1, why: 'Llevar + tiempo + gerundio, sin preposición.' },
            { sentence: 'Los precios de los materiales vienen subir desde enero.', ok: false, options: ['Los precios de los materiales vienen subiendo desde enero.', 'Los precios de los materiales vienen de subir desde enero.', 'Los precios de los materiales vienen a subir desde enero.'], answer: 0, why: 'Venir + gerundio: desde enero hasta hoy. «Vienen a subir» no tiene ese sentido.' },
            { sentence: 'Cuando vio la cocina terminada, Daniel rompió a reír.', ok: true, why: 'Correcta: romper a + reír, un inicio brusco e intenso (también «se echó a reír»).' },
            { sentence: 'El año pasado llevo seis meses buscando una casa.', ok: false, options: ['El año pasado he llevado seis meses buscando una casa.', 'El año pasado estuve seis meses buscando una casa.', 'El año pasado llevé seis meses buscando una casa.'], answer: 1, why: 'Una etapa cerrada del pasado: estar + gerundio en indefinido. Llevar no va en indefinido ni en perfecto.' },
          ] },
        ] },
        { title: 'Una llamada por la noche · A phone call at night', blocks: [
          { kind: 'chat-fill', title: 'Marina y Daniel hablan por teléfono · Marina and Daniel on the phone', lines: [
            { who: 'Daniel', text: '¿Qué tal con Sonia hoy?' },
            { who: 'Marina', text: 'Muy bien. La cocina ___ tomando forma: ya están los muebles.', options: ['va a', 'va', 'lleva'], answer: 1, why: 'Un avance gradual: ir + gerundio, sin «a».' },
            { who: 'Daniel', text: '¿Y el horno? ¿Llegó?' },
            { who: 'Marina', text: 'No. ___ tres semanas esperándolo.', options: ['Venimos', 'Hacemos', 'Llevamos'], answer: 2, why: 'Tiempo acumulado hasta ahora: llevar + tiempo + gerundio.' },
            { who: 'Daniel', text: 'Por cierto, doña Remedios ___ preguntando a todo el mundo cuándo abrimos.', options: ['lleva a', 'anda', 'anda a'], answer: 1, why: 'Pregunta aquí y allá: andar + gerundio, sin preposición. Esta vez no hay crítica: es curiosidad.' },
            { who: 'Marina', text: '¡Qué cambio! Hace un mes decía que nunca íbamos a abrir. ¿Y el tejado?' },
            { who: 'Daniel', text: 'Esta tarde, con la tormenta, ___ entrar agua en el desván.', options: ['se echó a', 'acabó de', 'volvió a'], answer: 2, why: 'Otra vez, como antes: volver a + infinitivo.' },
            { who: 'Marina', text: '¡No puede ser! Ernesto ___ diciendo desde octubre que ya estaba arreglado.', options: ['venía', 'iba a', 'llevaba a'], answer: 0, why: 'Desde octubre hasta ese momento, una y otra vez: venir + gerundio en imperfecto.' },
            { who: 'Daniel', text: 'Tranquila. Llamé a Sonia; al principio decía que no podía, pero ___ venir mañana a primera hora.', options: ['acabó aceptando', 'acabó de aceptar', 'volvió a aceptando'], answer: 0, why: 'El desenlace: acabar + gerundio (= acabó por aceptar).' },
            { who: 'Marina', text: 'Menos mal. Me voy a dormir, que estoy a punto de caerme de sueño.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Llevo', 'una', 'semana', 'sin', 'ver', 'a', 'Ernesto'], accept: ['Llevo una semana sin ver a Ernesto', 'Llevo sin ver a Ernesto una semana'], en: 'I haven’t seen Ernesto for a week.' },
            { tiles: ['Las', 'habitaciones', 'van', 'quedando', 'cada', 'vez', 'mejor'], accept: ['Las habitaciones van quedando cada vez mejor'], en: 'The bedrooms are turning out better and better.' },
            { tiles: ['Te', 'lo', 'vengo', 'diciendo', 'desde', 'hace', 'meses'], accept: ['Te lo vengo diciendo desde hace meses', 'Desde hace meses te lo vengo diciendo'], en: 'I’ve been telling you for months.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Usa la perífrasis · Use the periphrasis', items: [
            { prompt: 'Sonia empezó a trabajar en la casa hace dos semanas y sigue trabajando.', instruction: 'Usa llevar + gerundio. Empieza con «Sonia». (Use llevar + gerund.)', accept: ['Sonia lleva dos semanas trabajando en la casa', 'Sonia lleva trabajando dos semanas en la casa', 'Sonia lleva trabajando en la casa dos semanas', 'Sonia lleva dos semanas trabajando'] },
            { prompt: 'Daniel no fuma desde hace un mes.', instruction: 'Usa llevar + sin + infinitivo. Empieza con «Daniel».', accept: ['Daniel lleva un mes sin fumar', 'Daniel lleva sin fumar un mes'] },
            { prompt: 'Desde marzo, Ernesto retrasa la obra una y otra vez.', instruction: 'Usa venir + gerundio. Empieza con «Ernesto».', accept: ['Ernesto viene retrasando la obra desde marzo', 'Ernesto viene retrasando desde marzo la obra', 'Ernesto, desde marzo, viene retrasando la obra', 'Ernesto viene retrasando la obra una y otra vez desde marzo', 'Ernesto viene retrasando la obra desde marzo una y otra vez'] },
            { prompt: 'Poco a poco, aprendemos a vivir en el pueblo.', instruction: 'Usa ir + gerundio. Empieza con «Poco a poco».', accept: ['Poco a poco vamos aprendiendo a vivir en el pueblo'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta un proyecto suyo con cuatro frases: cuánto tiempo lleva con él, cómo va avanzando, qué problema viene arrastrando y cómo acabó una parte.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El pódcast de Marina', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Diario de una casa de piedra · A stone house diary', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye llevar, ir, venir o andar + gerundio, y da una palmada con cada fase (me eché a, acabamos, a punto de). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Busca: llevamos…, veníamos esperando, va avanzando, andaba diciendo… (Listen once for the gist, once for details.)' } },
          { kind: 'listen', title: 'Un nuevo episodio', channel: 'PÓDCAST · «DIARIO DE UNA CASA DE PIEDRA» · EPISODIO 31', src: '/audio/grammar-live/459.mp3',
            before: 'Casi un mes después de la visita de Lucía, Marina graba un nuevo episodio de su pódcast sobre la reforma. ¿Qué noticias crees que trae: sobre la obra, sobre Ernesto, sobre la vecina, sobre la apertura? (What news do you think she brings?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Marina anuncia que la obra se para por falta de dinero.', 'Marina se queja de los vecinos del pueblo.', 'Marina cuenta que la obra avanza y que están muy cerca de abrir.'], answer: 2, why: 'Habla de las ventanas, del avance de la obra, de la vecina y de que están a punto de abrir.', en: 'Marina’s episode is mainly about…' },
            details: [
              { prompt: '¿Cuánto tiempo llevan con la reforma?', options: ['Casi nueve meses.', 'Un año y medio.', 'Desde enero.'], answer: 0, why: '«Llevamos casi nueve meses reformando esta casa».', en: 'How long have they been renovating?' },
              { prompt: '¿Qué pasó con las ventanas?', options: ['Todavía no han llegado.', 'Se rompieron con la tormenta.', 'Llegaron el martes, después de esperarlas desde enero.'], answer: 2, why: '«El martes llegaron por fin las ventanas que veníamos esperando desde enero».', en: 'What happened with the windows?' },
              { prompt: '¿Cómo reaccionó Marina al verlas puestas?', options: ['Llamó a Ernesto.', 'Se echó a llorar.', 'Se echó a reír.'], answer: 1, why: '«Cuando las vi puestas, me eché a llorar como una niña».', en: 'How did Marina react when she saw them fitted?' },
              { prompt: '¿Qué hizo doña Remedios?', options: ['Siguió diciendo que nunca iban a abrir.', 'Reservó la primera habitación.', 'Fue a verlos con una tarta y tomó café con ellos.'], answer: 2, why: '«Vino a vernos con una tarta. Al final acabamos tomando café los tres en la cocina».', en: 'What did doña Remedios do?' },
            ],
            transcript: 'Hola a todos y bienvenidos a un nuevo episodio de «Diario de una casa de piedra». Hoy les traigo buenas noticias. Como saben, [[llevamos casi nueve meses reformando|blue]] esta casa, y les confieso que [[llevo semanas sin dormir|blue]] bien. Pero esta semana pasó algo importante: el martes llegaron por fin las ventanas que [[veníamos esperando|teal]] desde enero. Cuando las vi puestas, [[me eché a llorar|orange]] como una niña. Daniel dice que él no, pero también tenía los ojos rojos. La obra [[va avanzando|teal]] a buen ritmo: ya tenemos agua caliente y la cocina está casi lista. El jueves se fue la luz otra vez, claro, pero eso ya ni nos sorprende. Y una curiosidad: doña Remedios, la vecina que [[andaba diciendo|violet]] que nunca íbamos a abrir, vino a vernos con una tarta. Al final [[acabamos tomando|orange]] café los tres en la cocina, entre cajas y herramientas. Así que sí: [[estamos a punto de abrir|orange]]. Si quieren ser nuestros primeros huéspedes, escríbannos. Nos escuchamos en el próximo episodio.',
            reply: { teacher: 'Tú eres Marina. Tu alumno es un oyente del pódcast y deja un comentario de voz con tres frases: cuánto tiempo lleva escuchando el pódcast, qué va notando en la casa y algo que acabó pasando en un proyecto suyo.', self: 'Responde a Marina en voz alta como oyente: cuánto tiempo llevas siguiendo su pódcast, qué cambios vas notando en la casa y qué acabó pasando en algún proyecto tuyo. (Answer as a listener.)' } },
          { kind: 'tip', icon: '💡', title: 'Veníamos esperando · Venir in the past', text: 'Marina dice «las ventanas que **veníamos esperando** desde enero». Venir + gerundio en **imperfecto** mira desde un punto del pasado (enero) hasta otro momento pasado (el martes, cuando llegaron). Con llevar, la idea sería la misma, pero contada como tiempo acumulado: «**llevábamos** tres meses **esperándolas**».', en: 'Marina says “the windows we had been waiting for since January”. Venir + gerund in the imperfect looks from one point in the past (January) to a later past moment (Tuesday, when they arrived). With llevar the idea would be the same, but told as accumulated time: “we had been waiting for them for three months”.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus proyectos largos', coach: 'Cuánto llevas, cómo vas, qué viene pasando. How long, how it’s going, what keeps happening.',
      steps: [
        { title: '¿Cómo va tu proyecto? · How is your project going?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con experiencias reales o inventadas. Si usa una perífrasis poco natural, tú repites la frase con la forma natural y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta con una experiencia real o inventada y, si quieres, escribe tu respuesta. (Answer aloud with a real or invented experience.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cuánto tiempo llevas estudiando español? ¿Y qué otra cosa llevas años haciendo? · How long have you been learning Spanish? What else have you been doing for years?', followUps: ['¿Qué te ha costado más en ese tiempo? (What has been hardest?)', '¿Cuánto tiempo llevabas haciéndolo cuando notaste el progreso? (How long had you been doing it when you noticed progress?)'], phrases: ['[[Llevo|blue]] … años / meses + gerundio', '[[Llevo desde|blue]] 2020 + gerundio', 'Cuando empecé, …'], hint: 'Llevar + tiempo + gerundio, en presente. Para un momento pasado: llevaba.', example: 'Llevo tres años estudiando español, casi siempre por las noches. Y llevo desde la universidad tocando el violonchelo en una orquesta de aficionados.', next: 'Ahora, lo que llevas tiempo sin hacer.' },
            { q: '¿Qué llevas mucho tiempo sin hacer? ¿Lo echas de menos? · What haven’t you done for a long time? Do you miss it?', followUps: ['¿Por qué lo dejaste? (Why did you stop?)', '¿Vas a volver a hacerlo? (Are you going to do it again?)'], phrases: ['[[Llevo|blue]] … [[sin|blue]] + infinitivo', 'Lo echo de menos porque…', 'Quiero [[volver a|orange]]…'], hint: 'Llevar + tiempo + sin + infinitivo, no «llevo… no + gerundio».', example: 'Llevo casi dos años sin ir a la montaña: con el trabajo nuevo no tengo fines de semana libres. Lo echo mucho de menos, y este verano quiero volver a subir a algún pico.', next: 'Ahora, algo que va mejorando.' },
            { q: '¿En qué vas mejorando poco a poco este año? ¿Qué te va costando menos? · What are you gradually getting better at this year? What is getting easier?', followUps: ['¿Qué haces para mejorar? (What do you do to improve?)', '¿Cuándo empezaste a notarlo? (When did you start to notice it?)'], phrases: ['Poco a poco [[voy|teal]] + gerundio', 'Cada vez… [[vamos|teal]] + gerundio', 'A medida que…'], hint: 'Ir + gerundio, sin «a»: voy entendiendo, voy perdiendo el miedo.', example: 'Poco a poco voy entendiendo las series en español sin subtítulos. Y en el trabajo voy perdiendo el miedo a hablar en las reuniones.', next: 'Ahora, algo que viene pasando.' },
            { q: '¿Qué viene pasando últimamente en tu ciudad, en tu trabajo o en las noticias? · What has been happening lately in your city, at work or in the news?', followUps: ['¿Desde cuándo pasa? (Since when?)', '¿Te preocupa o te parece normal? (Does it worry you?)'], phrases: ['Desde hace meses, … [[viene|teal]] + gerundio', 'Los precios [[vienen|teal]] subiendo…', '[[Lo vengo diciendo|teal]] desde…'], hint: 'Venir + gerundio: desde un punto del pasado hasta hoy, muchas veces con queja.', example: 'En mi ciudad, el precio del alquiler viene subiendo desde la pandemia. Y en mi oficina, el sistema informático viene fallando todos los lunes desde enero: se lo vengo diciendo al jefe desde hace semanas.', next: 'Ahora, lo que anda diciendo la gente.' },
            { q: '¿Qué anda diciendo la gente de tu barrio o de tu trabajo últimamente? ¿Y tú qué andas haciendo estos días? · What are people around you going around saying lately? And what are you up to these days?', followUps: ['¿Es verdad lo que dicen? (Is it true?)', '¿Cómo te enteraste? (How did you find out?)'], phrases: ['Un compañero [[anda diciendo|violet]] que…', 'Ahora [[ando|violet]] buscando…', 'No sé si es verdad, pero…'], hint: 'Andar + gerundio: coloquial, aquí y allá; con decir o contar, a menudo crítico.', example: 'Un compañero anda diciendo que van a cerrar la oficina de nuestra ciudad, pero nadie lo ha confirmado. Yo, por si acaso, ando mirando ofertas de trabajo.', next: 'Para terminar, tú eres Marina.' },
            { q: 'Ahora tú eres Marina. Una periodista del periódico de la comarca te pregunta: «¿Cómo ha sido la reforma?». Responde con llevar, ir, venir y una fase. · Now you are Marina: a local journalist asks about the renovation.', followUps: ['¿Y cuándo abren? (When do you open?)', '¿Qué le diría a alguien que quiere hacer lo mismo? (What would you tell someone who wants to do the same?)'], phrases: ['[[Llevamos|blue]] casi un año…', 'La obra [[fue avanzando|teal]]…', 'El constructor [[venía|teal]]…', 'Al final [[acabamos|orange]]…', '[[Estamos a punto de|orange]]…'], hint: 'Una de cada: tiempo acumulado, proceso, desde el pasado, desenlace o inminencia.', example: 'Llevamos casi un año reformando la casa. La obra fue avanzando muy despacio, porque el primer constructor venía retrasando cada fase. Al final acabamos contratando a una constructora del valle, y ahora estamos a punto de abrir.', teacher: 'Tú eres la periodista y repreguntas: «¿Y la vecina sigue diciendo lo mismo?». Después cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Cuánto tiempo llevas…?», «¿Qué viene pasando…?») y tú respondes con tus propias historias.', self: 'Ahora haz tú las preguntas en voz alta («¿Cuánto tiempo llevas…?», «¿En qué vas mejorando?») y respóndelas con otra historia. (Now ask the questions and answer them with another story.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo con novedades', coach: 'Tiempo, avance, problema y desenlace. Time, progress, problem and outcome.',
      steps: [
        { title: 'Cuéntale a una amiga cómo va · Tell a friend how it’s going', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada perífrasis: ¿lleva gerundio o infinitivo? ¿Hay preposición donde no debe? ¿Llevar está en presente o imperfecto? Después, tu alumno lee su correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después, mira cada perífrasis: ¿gerundio o infinitivo? ¿Sobra alguna preposición? (Write your email and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Novedades de un proyecto largo · News about a long project', situation: 'Eres Marina, o eres tú con un proyecto real: una reforma, unos estudios, un entrenamiento, un negocio, una mudanza. Escribe un correo a una amiga que hace tiempo que no ves para contarle cómo va. (You are Marina, or yourself with a real long project. Write an email to a friend you haven’t seen for a while telling her how it’s going.)', task: [
            'Di cuánto tiempo llevas con el proyecto y algo que llevas tiempo sin hacer. (Llevar + gerund; llevar sin + infinitive.)',
            'Cuenta qué va mejorando poco a poco. (Ir + gerund.)',
            'Explica un problema que viene pasando desde hace tiempo o algo que alguien anda diciendo. (Venir or andar + gerund.)',
            'Cuenta cómo acabó una parte de la historia y qué estás a punto de hacer. (Outcome and imminence.)',
          ], starters: ['Querida…:', '¡Por fin tengo un rato para escribirte!', 'Ya llevamos…', 'Llevo… sin…', 'Poco a poco vamos…', 'Desde hace meses viene…', 'Al final acabamos…', 'Estamos a punto de…', 'Un abrazo enorme,'],
            words: ['llevar + gerundio', 'llevar sin + infinitivo', 'ir + gerundio', 'venir + gerundio', 'andar + gerundio', 'acabar + gerundio', 'estar a punto de', 'poco a poco', 'desde hace', 'cada vez más', 'al final'],
            model: 'Querida Lucía: ¡Por fin tengo un rato para escribirte! Ya [[llevamos casi diez meses reformando|blue]] la casa, pero esta vez te escribo con buenas noticias. Seguimos tu consejo: despedimos a Ernesto, que [[venía retrasando|teal]] la obra desde marzo, y [[acabamos contratando|orange]] a Sonia Cruz, una constructora del valle. ¡Qué diferencia! Con ella la cocina [[va avanzando|teal]] a buen ritmo, y yo [[llevo diez días sin despertarme|blue]] a las cuatro de la mañana. Doña Remedios ya no [[anda diciendo|violet]] que no vamos a abrir: ahora le cuenta a todo el mundo que la casa es preciosa. El otro día, cuando colgamos el cartel con el nombre, Daniel [[se echó a reír|orange]] de puros nervios. [[Estamos a punto de abrir|orange]]: el primero de agosto llegan los primeros huéspedes. ¿Por qué no vienes el fin de semana anterior y lo celebramos? Te guardo la habitación del balcón. Un abrazo enorme, Marina',
            minWords: 120,
            checks: [
              { label: 'Llevar + tiempo + gerundio, o llevar + sin + infinitivo (time so far)', pattern: '(?<!\\p{L})llev(?:o|as|a|amos|áis|an|aba|abas|ábamos|abais|aban)\\s+(?:\\p{L}+\\s+){0,4}?(?:\\p{L}+(?:ando|iendo|yendo|ándo|iéndo|yéndo)(?:me|te|se|lo|la|le|nos|os|los|las|les)*|sin\\s+\\p{L}+(?:ar|er|ir|ír)(?:me|te|se|lo|la|le|nos|os|los|las|les)*)(?!\\p{L})', tip: 'Di cuánto tiempo llevas: «Llevamos diez meses reformando la casa», «Llevo diez días sin despertarme a las cuatro».' },
              { label: 'Ir + gerundio (gradual progress)', pattern: '(?<!\\p{L})(?:voy|vas|va|vamos|vais|van|iba|ibas|íbamos|ibais|iban|fue|fueron)\\s+(?!cuando(?!\\p{L}))\\p{L}+(?:ando|iendo|yendo|ándo|iéndo|yéndo)(?:me|te|se|lo|la|le|nos|os|los|las|les)*(?!\\p{L})', tip: 'Cuenta qué avanza poco a poco: «La cocina va avanzando», «Vamos aprendiendo».' },
              { label: 'Venir o andar + gerundio (since some time / here and there)', pattern: '(?<!\\p{L})(?:vengo|vienes|viene|venimos|vienen|venía|venías|veníamos|veníais|venían|ando|andas|anda|andamos|andáis|andan|andaba|andabas|andábamos|andaban)\\s+(?!cuando(?!\\p{L}))\\p{L}+(?:ando|iendo|yendo|ándo|iéndo|yéndo)(?:me|te|se|lo|la|le|nos|os|los|las|les)*(?!\\p{L})', tip: 'Explica un problema que viene de antes o un rumor: «Ernesto venía retrasando la obra», «La vecina anda diciendo que…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:voy|vas|va|vamos|van|iba|iban)\\s+a\\s+\\p{L}+(?:ando|iendo|yendo)(?!\\p{L})', why: 'Para un proceso gradual, ir + gerundio sin «a»: **va avanzando**, no «va a avanzando».' },
              { pattern: '(?<!\\p{L})llev\\p{L}*\\s+(?:\\p{L}+\\s+){0,4}?(?:sin|no)\\s+\\p{L}+(?:ando|iendo|yendo)(?!\\p{L})', why: 'El tiempo sin hacer algo: llevar + tiempo + **sin + infinitivo**: «llevo un mes sin fumar».' },
              { pattern: '(?<!\\p{L})llev(?:é|aste|ó|asteis|aron)\\s+(?:\\p{L}+\\s+){1,4}?\\p{L}+(?:ando|iendo|yendo)(?!\\p{L})', why: 'Para una etapa cerrada, **estuve** + gerundio: «Estuve dos años viviendo allí». (Llevamos, en presente, sí es correcto.)' },
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
            { tone: 'blue', label: 'LLEVAR', formula: 'llevar + tiempo + gerundio · llevar + tiempo + sin + infinitivo', example: 'Llevamos ocho meses reformando. Llevo un mes sin fumar.', caption: 'tiempo acumulado hasta ahora (o hasta entonces); no en indefinido', en: 'time built up to now (or to a past point); never in the preterite' },
            { tone: 'teal', label: 'IR · VENIR', formula: 'ir + gerundio · venir + gerundio', example: 'La obra va avanzando. Lo vengo diciendo desde marzo.', caption: 'avance gradual; desde un punto del pasado, con insistencia', en: 'gradual progress; from a point in the past, often insistently' },
            { tone: 'violet', label: 'ANDAR', formula: 'andar + gerundio', example: 'Anda diciendo que no vamos a abrir.', caption: 'coloquial: aquí y allá, a menudo con crítica', en: 'informal: here and there, often critical' },
            { tone: 'orange', label: 'FASES', formula: 'echarse a · romper a · volver a · estar a punto de · acabar + gerundio', example: 'Me eché a llorar. Acabamos tomando café.', caption: 'inicio brusco, repetición, inminencia, desenlace', en: 'sudden start, repetition, imminence, outcome' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Con **gerundio** miras la acción por dentro: **llevar** cuenta el tiempo, **ir** el avance, **venir** el recorrido desde el pasado y **andar** el ir y venir coloquial. Ninguna lleva preposición. Para lo que **no** pasa: llevar + tiempo + **sin** + infinitivo. Y las fases (echarse a, volver a, estar a punto de) llevan preposición + infinitivo.', en: 'With the gerund you look at the action from inside: “llevar” counts the time, “ir” the progress, “venir” the path from the past and “andar” the informal coming and going. None of them takes a preposition. For what does not happen: llevar + time + “sin” + infinitive. And the phases (echarse a, volver a, estar a punto de) take a preposition + infinitive.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '___ media hora esperando el autobús y no pasa ninguno.', options: ['Llevo', 'Estoy', 'Hago'], answer: 0, why: 'Tiempo acumulado hasta ahora: llevar + tiempo + gerundio.', en: 'I’ve been waiting for the bus for half an hour and none have come.' },
            { prompt: 'Desde la crisis, el número de lectores del periódico ___ bajando.', options: ['lleva', 'anda', 'viene'], answer: 2, why: 'Desde un punto del pasado hasta hoy: venir + gerundio. Llevar necesitaría una cantidad de tiempo.', en: 'Since the crisis, the newspaper’s readership has been falling.' },
            { prompt: 'Mi abuela ___ un año sin salir del pueblo.', options: ['lleva', 'viene', 'va'], answer: 0, why: 'El tiempo sin hacer algo: llevar + tiempo + sin + infinitivo.', en: 'My grandmother hasn’t left the village for a year.' },
            { prompt: 'Con la práctica, ___ perdiendo el miedo a hablar en público.', options: ['voy', 'llevo', 'voy a'], answer: 0, why: 'Un avance gradual: ir + gerundio, sin «a».', en: 'With practice, I’m gradually losing my fear of public speaking.' },
            { prompt: 'Cuando el payaso se cayó, los niños ___ reír.', options: ['se pusieron de', 'acabaron de', 'se echaron a'], answer: 2, why: 'Un inicio brusco: echarse a + reír.', en: 'When the clown fell over, the children burst out laughing.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una carrera. Now, a race.', blocks: [
          { kind: 'lead', text: 'Paula Ríos se prepara para su primera media maratón. Transforma lo que cuenta su entrenador.', en: 'Paula Ríos is training for her first half marathon. Transform what her coach says.' },
          { kind: 'rewrite', title: 'El entrenamiento de Paula · Paula’s training', items: [
            { prompt: 'Paula empezó a entrenar en enero y sigue entrenando.', instruction: 'Usa llevar + gerundio con «desde enero». Empieza con «Paula».', accept: ['Paula lleva entrenando desde enero', 'Paula lleva desde enero entrenando'] },
            { prompt: 'Cada semana mejora un poco su tiempo.', instruction: 'Usa ir + gerundio. Empieza con «Cada semana».', accept: ['Cada semana va mejorando un poco su tiempo', 'Cada semana va mejorando su tiempo un poco', 'Cada semana va mejorando su tiempo'] },
            { prompt: 'Al principio no quería un entrenador, pero al final contrató a uno.', instruction: 'Usa acabar + gerundio. Empieza con «Al final».', accept: ['Al final acabó contratando a uno', 'Al final acabó contratando a un entrenador', 'Al final terminó contratando a uno', 'Al final terminó contratando a un entrenador'] },
          ] },
        ] },
        { title: 'Ampliación: llevar + participio, venir a y variedades · Extension: more nuances', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: matices, registro y regiones. Optional: nuance, register and regions.', blocks: [
          { kind: 'lead', text: '**Llevar + participio** cuenta lo que ya está hecho hasta ahora, cuando falta más: «Llevamos pintadas seis habitaciones de ocho». El participio concuerda con el objeto (pintadas, instalados). **Venir a + infinitivo** no es venir + gerundio: expresa aproximación o resumen, «más o menos», «en el fondo»: «La reforma viene a costar lo mismo que un piso pequeño». En las noticias, **venir + gerundio** es muy frecuente: «El paro viene descendiendo desde hace tres trimestres». Y en muchas zonas de América, **estar por + infinitivo** significa «estar a punto de»: «El tren está por salir».', en: '“Llevar” + past participle counts what has been done so far, with more still to do: “We’ve painted six of the eight rooms so far.” The participle agrees with the object. “Venir a” + infinitive is not “venir” + gerund: it means roughly, or in essence: “The renovation costs about the same as a small flat.” In the news, “venir” + gerund is very common: “Unemployment has been falling for three quarters.” And in many parts of Latin America, “estar por” + infinitive means “to be about to”: “The train is about to leave.”' },
          { kind: 'choice', title: 'Matices y registro · Nuance and register', items: [
            { context: 'Un informe de obra. (A site report.)', prompt: '«A día de hoy ___ instaladas cuarenta ventanas de las sesenta previstas».', options: ['andamos', 'llevamos', 'venimos'], answer: 1, why: 'Llevar + participio: lo hecho hasta ahora, cuando falta más. El participio concuerda: instaladas (ventanas).', en: '“As of today we have fitted forty of the sixty planned windows.”' },
            { context: 'Una amiga resume una película. (A friend sums up a film.)', prompt: '«En el fondo, la película ___ decir que nunca es tarde para empezar».', options: ['viene', 'viene a', 'lleva a'], answer: 1, why: 'Venir a + infinitivo: un resumen aproximado, «más o menos dice».', en: '“Basically, the film is saying it’s never too late to start.”' },
            { context: 'En Bogotá, en la estación. (At a station in Bogotá.)', prompt: '«Corre, que el bus ___ salir».', options: ['va por', 'anda por', 'está por'], answer: 2, why: 'En muchas zonas de América, estar por + infinitivo = estar a punto de.', en: '“Hurry, the bus is about to leave.”' },
            { context: 'Una noticia económica. (A business news item.)', prompt: '«El precio del alquiler ___ subiendo de forma constante desde 2021».', options: ['viene', 'va a', 'anda'], answer: 0, why: 'Venir + gerundio, muy frecuente en la prensa: desde 2021 hasta hoy.', en: '“Rents have been rising steadily since 2021.”' },
            { context: 'En México, entre amigos. (In Mexico, among friends.)', prompt: '«—¿Y Carlos? —___ buscando trabajo: ya no aguanta a su jefe».', options: ['Anda', 'Viene', 'Lleva'], answer: 0, why: 'Andar + gerundio, coloquial y muy frecuente en México, aquí sin crítica. Lleva necesitaría un tiempo.', en: '“—What about Carlos? —He’s looking for a job: he can’t stand his boss any more.”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno resume una película o un libro con «viene a decir que…» y cuenta lo que lleva hecho de una tarea con llevar + participio («Llevo leídas cien páginas»).' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 160 · Futuro compuesto: anterioridad y conjetura', text: 'Ya miras una acción por dentro: cuánto tiempo llevas con ella, cómo va avanzando y desde cuándo viene pasando. En la clase 160 la miras desde el futuro, ya terminada: «En agosto ya **habremos abierto**», y aprendes a hacer conjeturas sobre el pasado: «Ernesto **habrá tenido** otra urgencia». Es el paso natural: de un proceso en marcha a su final en el futuro.', en: 'You can now look at an action from inside: how long you’ve been at it, how it is progressing and how long it has been happening. In class 160 you look at it from the future, already finished: “By August we’ll have opened”, and you learn to make guesses about the past: “Ernesto must have had another emergency.” It is the natural next step: from a process under way to its end in the future.', href: '/sistema-verbal/futuro-compuesto-indicativo', label: 'Ir a la clase 160' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cuánto tiempo llevas estudiando perífrasis y en qué vas mejorando?». Respuesta esperada: llevar + gerundio e ir + gerundio. Tarea: escribir el correo de Escribir con un proyecto real.' },
        ] },
      ],
    },
  ],
};
