import type { LiveLesson } from '../types';

/**
 * Lesson 318 · A1 · Presente irregular: ser, estar, ir, tener (course unit G018).
 * One shared office agenda runs through the class: Paula (coordinator), Hugo
 * (designer) and Rosa (administration) work in a small design studio in
 * Guadalajara and plan their week on Monday morning. Content: the four
 * high-frequency irregular presents in one paradigm table, IR as the new verb
 * (voy, vas, va, vamos, vais, van), ir a + place (al only as a chunk: the
 * contraction class comes later) and the anchor contrast «Voy al trabajo» /
 * «Estoy en el trabajo». The team speaks with tú; vosotros is marked Spain and
 * vos (sos, tenés, vas) appears only in a variety note. Paula records the audio.
 */
export const lesson: LiveLesson = {
  id: 318,
  level: 'A1',
  title: 'Presente irregular: ser, estar, ir, tener',
  subtitle: 'Contar tu semana de trabajo con ser, estar, ir y tener: quién eres, dónde estás, adónde vas y qué reuniones tienes.',
  legend: [
    { tone: 'blue', label: 'SER · quién es, qué es (who / what)' },
    { tone: 'teal', label: 'ESTAR · dónde está, cómo está (where / how)' },
    { tone: 'orange', label: 'IR · adónde va: ir a + lugar (where to)' },
    { tone: 'violet', label: 'TENER · qué tiene: reuniones, tiempo, años (have)' },
  ],
  optionNotes: {
    voy: '«Voy» es ir con yo (I go).',
    vas: '«Vas» es ir con tú (you go).',
    va: '«Va» es ir con él, ella o usted (he / she goes).',
    vamos: '«Vamos» es ir con nosotros (we go).',
    van: '«Van» es ir con ellos, ellas o ustedes (they go).',
    estoy: '«Estoy» es estar con yo: un lugar (estoy en…) o un estado.',
    está: '«Está» es estar con él, ella o usted: un lugar (está en…) o un estado.',
    están: '«Están» es estar con ellos, ellas o ustedes: un lugar o un estado.',
    estamos: '«Estamos» es estar con nosotros: un lugar o un estado.',
    es: '«Es» es ser con él, ella o usted: identidad, profesión, origen, el día.',
    son: '«Son» es ser con ellos, ellas o ustedes: identidad, profesión, origen.',
    tieno: '«Tieno» no existe. Tener con yo es especial: tengo.',
    tenimos: '«Tenimos» no existe. Tener con nosotros: tenemos.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'La agenda de la semana', coach: 'Cuatro verbos para toda la semana. Four verbs for the whole week.',
      steps: [
        { title: 'La agenda · The agenda', blocks: [
          { kind: 'lead', text: 'Paula, Hugo y Rosa trabajan en un pequeño estudio de diseño en Guadalajara, México. Los lunes por la mañana miran juntos la **agenda de la semana**: quién es quién, dónde está cada uno, adónde va y qué reuniones tiene. Para eso usan cuatro verbos: **ser, estar, ir y tener**.', en: 'Paula, Hugo and Rosa work in a small design studio in Guadalajara, Mexico. On Monday mornings they look at the week’s agenda together: who is who, where everyone is, where they are going and what meetings they have. For that they use four verbs: ser, estar, ir and tener.' },
          { kind: 'guide', text: { teacher: 'Tú lees las cuatro frases y tu alumno repite. Después, tu alumno dice qué frase habla de un lugar y cuál de un movimiento.', self: 'Lee las cuatro frases en voz alta. Busca cuál dice quién, cuál dice dónde, cuál dice adónde y cuál dice qué tiene.' } },
          { kind: 'compare', title: 'Cuatro frases de la agenda · Four sentences from the agenda', columns: [
            { tone: 'blue', label: 'SER · quién', sentence: 'Paula [[es|blue]] la coordinadora.', idea: 'Identidad, profesión: quién es.', en: 'Paula is the coordinator.' },
            { tone: 'teal', label: 'ESTAR · dónde', sentence: 'Hugo [[está|teal]] en la oficina.', idea: 'Un lugar o un estado: dónde está, cómo está.', en: 'Hugo is in the office.' },
            { tone: 'orange', label: 'IR · adónde', sentence: 'Rosa [[va|orange]] al banco.', idea: 'Movimiento hacia un lugar: adónde va.', en: 'Rosa is going to the bank.' },
            { tone: 'violet', label: 'TENER · qué', sentence: 'Yo [[tengo|violet]] dos reuniones.', idea: 'Lo que tienes: citas, cosas, tiempo, años.', en: 'I have two meetings.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La frase de hoy · Today’s sentence', text: '«**Voy** al trabajo y **tengo** dos reuniones». Con estas dos formas ya cuentas tu lunes: adónde vas y qué tienes.', en: '“I go to work and I have two meetings.” With these two forms you can already tell your Monday: where you go and what you have.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Rosa va al banco» dice…', options: ['adónde va Rosa.', 'qué tiene Rosa.', 'quién es Rosa.'], answer: 0, why: 'Ir a + lugar = movimiento: adónde va.', en: '“Rosa va al banco” tells you…' },
            { prompt: '«Hugo está en la oficina» dice…', options: ['adónde va Hugo.', 'dónde está Hugo.', 'la profesión de Hugo.'], answer: 1, why: 'Estar en + lugar = dónde está ahora.', en: '“Hugo está en la oficina” tells you…' },
            { prompt: '«Tengo dos reuniones» usa…', options: ['tener', 'ser', 'ir'], answer: 0, why: 'Las reuniones son algo que tienes en la agenda: tener.', en: '“Tengo dos reuniones” uses…' },
          ] },
        ] },
        { title: 'Cuatro verbos, una tabla · Four verbs, one table', mascot: '/brand/mascot/studying.webp', coach: 'Mira la columna de yo. Look at the “yo” row.', blocks: [
          { kind: 'lead', text: 'Ser, estar, ir y tener son **irregulares**: no siguen la tabla de hablar, comer y vivir. Pero son los verbos más frecuentes del español, y los vas a usar todos los días. Ser, estar y tener ya los conoces; **ir** es nuevo.', en: 'Ser, estar, ir and tener are irregular: they don’t follow the pattern of hablar, comer and vivir. But they are the most frequent verbs in Spanish, and you will use them every day. You already know ser, estar and tener; ir is new.' },
          { kind: 'table', title: 'El presente de los cuatro verbos · The present of the four verbs', head: ['Persona', 'ser', 'estar', 'ir', 'tener'], rows: [
            ['yo', '**soy**', '**estoy**', '[[voy|orange]]', '**tengo**'],
            ['tú', 'eres', 'estás', '[[vas|orange]]', 'tienes'],
            ['él · ella · usted', 'es', 'está', '[[va|orange]]', 'tiene'],
            ['nosotros · nosotras', 'somos', 'estamos', '[[vamos|orange]]', 'tenemos'],
            ['vosotros · vosotras (España)', 'sois', 'estáis', '[[vais|orange]]', 'tenéis'],
            ['ellos · ellas · ustedes', 'son', 'están', '[[van|orange]]', 'tienen'],
          ], note: '**Vosotros** se usa en España. En América Latina, para varias personas se dice **ustedes**: ustedes son, están, van, tienen.' },
          { kind: 'tip', icon: '🔑', title: 'Tres verbos en -oy · Three verbs in -oy', text: 'Con yo, tres verbos terminan en **-oy**: s**oy**, est**oy**, v**oy**. Tener es diferente: **tengo**. Y ojo con la vocal: t**ie**nes, t**ie**ne, t**ie**nen, pero t**e**nemos.', en: 'With “yo”, three verbs end in -oy: soy, estoy, voy. Tener is different: tengo. And watch the vowel: tienes, tiene, tienen, but tenemos.' },
          { kind: 'tip', icon: '🇦🇷', title: 'Otra forma de decir «tú» · Another “you”', text: 'En Argentina y Uruguay muchas personas dicen **vos** en lugar de tú: vos **sos**, vos **estás**, vos **vas**, vos **tenés**. Hoy solo lo reconoces; tú usas tú: eres, estás, vas, tienes.', en: 'In Argentina and Uruguay many people say “vos” instead of “tú”: vos sos, vos estás, vos vas, vos tenés. Today you only need to recognise it; you use tú: eres, estás, vas, tienes.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Yo ___ diseñador.', options: ['es', 'eres', 'soy'], answer: 2, why: 'Ser con yo: soy.', en: 'I am a designer.' },
            { prompt: 'Nosotros ___ una reunión a las diez.', options: ['tengo', 'tienen', 'tenemos'], answer: 2, why: 'Tener con nosotros: tenemos (con e, sin ie).', en: 'We have a meeting at ten.' },
            { prompt: 'Paula y Hugo ___ en la oficina.', options: ['está', 'están', 'estamos'], answer: 1, why: 'Paula y Hugo = ellos: están.', en: 'Paula and Hugo are in the office.' },
            { prompt: 'Tú ___ al banco hoy.', options: ['voy', 'vas', 'va'], answer: 1, why: 'Ir con tú: vas.', en: 'You are going to the bank today.' },
          ] },
        ] },
        { title: 'IR: adónde vas · Where you are going', mascot: '/brand/mascot/walking.webp', coach: 'Ir es movimiento. “Ir” means moving somewhere.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'IR A + LUGAR', question: '¿Adónde vas?', en: 'to go (where to?)', formula: ['ir + a + lugar', 'a + la → a la oficina · a la sala', 'a + el → al trabajo · al banco'],
            meaning: '**Ir** dice que te mueves hacia un lugar. Después de ir, el lugar va con **a**: voy **a** la oficina, vamos **a** Puebla.',
            examples: [
              { es: '[[Voy|orange]] a la oficina a las nueve.', en: 'I go to the office at nine.' },
              { es: '¿[[Vas|orange]] al banco hoy?', en: 'Are you going to the bank today?' },
              { es: 'El martes Paula [[va|orange]] a Puebla.', en: 'On Tuesday Paula is going to Puebla.' },
              { es: '[[Vamos|orange]] a la sala de reuniones.', en: 'We are going to the meeting room.' },
              { es: 'Hugo y Rosa [[van|orange]] al centro en metro.', en: 'Hugo and Rosa go downtown by metro.' },
            ],
            note: '**Al** = a + el. Hoy lo usas como un bloque: **al** trabajo, **al** banco, **al** centro. La regla completa llega en otra clase. Con ciudades no hay artículo: voy a Puebla, va a Monterrey.' },
          { kind: 'tip', icon: '💡', title: '¿Adónde? o ¿dónde? · Where to or where?', text: 'Con ir, la pregunta es **¿adónde vas?** (where are you going?). Con estar, la pregunta es **¿dónde estás?** (where are you?).', en: 'With ir, the question is “¿adónde vas?” (where are you going?). With estar, the question is “¿dónde estás?” (where are you?).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El jueves ___ a la feria de diseño. (nosotros)', options: ['vamos', 'van', 'vais'], answer: 0, why: 'Ir con nosotros: vamos.', en: 'On Thursday we are going to the design fair.' },
            { prompt: 'Hugo va ___ trabajo en bicicleta.', options: ['en el', 'al', 'a el'], answer: 1, why: 'Ir a + el trabajo → al trabajo (un bloque).', en: 'Hugo goes to work by bike.' },
            { prompt: '—¿___ vas? —A la oficina.', options: ['Cuándo', 'Qué', 'Adónde'], answer: 2, why: 'La respuesta es un lugar con a: ¿adónde vas?', en: '—Where are you going? —To the office.' },
          ] },
        ] },
        { title: 'Ir a o estar en · Going there or being there', mascot: '/brand/mascot/speaking.webp', coach: '¿Te mueves o ya estás allí? Moving or already there?', blocks: [
          { kind: 'compare', title: 'El mismo lugar, dos verbos · Same place, two verbs', columns: [
            { tone: 'orange', label: 'IR A · movimiento', sentence: '[[Voy|orange]] al trabajo.', idea: 'Salgo de casa: estoy en camino.', en: 'I’m going to work. (on my way)' },
            { tone: 'teal', label: 'ESTAR EN · lugar', sentence: '[[Estoy|teal]] en el trabajo.', idea: 'Ya estoy allí, en mi mesa.', en: 'I’m at work. (already there)' },
          ] },
          { kind: 'table', title: 'Tres pares · Three pairs', head: ['IR A · movimiento', 'ESTAR EN · lugar', 'English'], rows: [
            ['[[Voy|orange]] al trabajo.', '[[Estoy|teal]] en el trabajo.', 'I’m going to work. · I’m at work.'],
            ['Rosa [[va|orange]] a la sala.', 'Rosa [[está|teal]] en la sala.', 'Rosa is going to the room. · Rosa is in the room.'],
            ['[[Vamos|orange]] al banco.', '[[Estamos|teal]] en el banco.', 'We’re going to the bank. · We’re at the bank.'],
          ], note: 'Ir va con **a**. Estar va con **en**. Y tener es otra cosa: «[[Tengo|violet]] una reunión» (está en mi agenda) / «[[Estoy|teal]] en una reunión» (ahora, en la sala).' },
          { kind: 'decide', title: 'Antes de elegir el verbo, responde · Before you choose the verb', steps: [
            { q: '¿Dices quién es, qué es o de dónde es? ¿O qué día es? (who / what / origin / day)', yes: 'Usa **ser**: «Paula [[es|blue]] la coordinadora», «Hoy [[es|blue]] lunes».', no: 'next' },
            { q: '¿Dices dónde está alguien o cómo está hoy? (where / how today)', yes: 'Usa **estar**: «Hugo [[está|teal]] en la oficina», «[[Estoy|teal]] cansada».', no: 'next' },
            { q: '¿Alguien se mueve hacia un lugar? (going somewhere)', yes: 'Usa **ir a**: «[[Voy|orange]] al trabajo», «Rosa [[va|orange]] a la sala».', no: 'next' },
            { q: '¿Dices qué tiene: una reunión, tiempo, una cosa, años? (have)', yes: 'Usa **tener**: «[[Tengo|violet]] dos reuniones», «Hugo [[tiene|violet]] treinta años».', no: 'Lee la frase otra vez con tu profesor: hoy casi todo es ser, estar, ir o tener.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Son las diez. Paula ya ___ en la sala.', options: ['es', 'va', 'está'], answer: 2, why: 'Ya está allí: estar en + lugar.', en: 'It’s ten o’clock. Paula is already in the room.' },
            { prompt: 'A las nueve menos diez, Hugo sale de casa: ___ a la oficina.', options: ['tiene', 'va', 'está'], answer: 1, why: 'Hay movimiento hacia la oficina: ir a.', en: 'At ten to nine, Hugo leaves home: he is going to the office.' },
            { prompt: 'Rosa no contesta el teléfono: ___ en una reunión.', options: ['está', 'tiene', 'va'], answer: 0, why: 'Ahora, dentro de la reunión: estar en.', en: 'Rosa isn’t answering the phone: she is in a meeting.' },
            { prompt: 'Mira la agenda: el viernes ___ una reunión con un cliente.', options: ['voy', 'tengo', 'estoy'], answer: 1, why: 'La reunión está en tu agenda: tener.', en: 'Look at the agenda: on Friday I have a meeting with a client.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Mira la persona y el lugar. Check the person and the place.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Qué persona? ¿Movimiento o lugar?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Yo va al trabajo.', right: 'Yo voy al trabajo.', why: '«Va» es para él, ella o usted. Con yo, ir es **voy**: s-oy, est-oy, v-oy.' },
            { wrong: 'Estoy al trabajo.', right: 'Estoy en el trabajo.', why: 'Estar dice dónde estás: va con **en**. «Al» es para ir: «Voy al trabajo».' },
            { wrong: 'Voy en la oficina.', right: 'Voy a la oficina.', why: 'Ir es movimiento hacia un lugar: va con **a**.' },
            { wrong: 'Yo tieno una reunión.', right: 'Yo tengo una reunión.', why: 'Tener es especial con yo: **tengo**.' },
            { wrong: 'Hugo es treinta años.', right: 'Hugo tiene treinta años.', why: 'La edad va con **tener** en español: tiene treinta años (he is thirty).' },
            { wrong: 'Nosotros vamos a el banco.', right: 'Nosotros vamos al banco.', why: 'A + el se escribe **al**: al banco, al trabajo, al centro.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Yo vas a la sala.', 'Yo va a la sala.', 'Yo voy a la sala.'], answer: 2, why: 'Ir con yo: voy.', en: 'Which sentence is correct?' },
            { prompt: '¿Qué frase es correcta?', options: ['Rosa es en el banco.', 'Rosa está en el banco.', 'Rosa está al banco.'], answer: 1, why: 'Un lugar: estar en.', en: 'Which sentence is correct?' },
            { prompt: '¿Qué frase es correcta?', options: ['Paula está cuarenta años.', 'Paula tiene cuarenta años.', 'Paula es cuarenta años.'], answer: 1, why: 'La edad va con tener.', en: 'Which sentence is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice cuatro frases reales de su lunes, una con cada verbo: «Soy…», «Estoy en…», «Voy a / al…», «Tengo…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Lunes, nueve de la mañana', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'La reunión del lunes · The Monday meeting', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Paula y tu alumno es Hugo y Rosa. Después, tu alumno toca cada palabra marcada y dice qué verbo es y por qué.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada para ver por qué se usa ese verbo.' } },
          { kind: 'explore', title: 'La agenda de la semana', setting: 'Lunes, nueve de la mañana, en el estudio. Paula y Hugo miran la agenda compartida en la pantalla. Rosa llega un poco tarde. (Monday, 9 a.m. Paula and Hugo look at the shared agenda on the screen. Rosa arrives a little late.)', lines: [
            { who: 'Paula', text: 'Buenos días, Hugo. ¿Dónde [[está|teal]] Rosa?', en: 'Good morning, Hugo. Where is Rosa?' },
            { who: 'Hugo', text: '[[Está en el banco|teal]], con las facturas. Hoy [[es|blue]] lunes: día de banco.', en: 'She’s at the bank, with the invoices. Today is Monday: bank day.' },
            { who: 'Paula', text: 'Ah, claro. ¿[[Tienes|violet]] la agenda de la semana?', en: 'Oh, of course. Do you have the agenda for the week?' },
            { who: 'Hugo', text: 'Sí, aquí [[está|teal]]. Yo [[tengo dos reuniones|violet]]: el martes y el jueves.', en: 'Yes, here it is. I have two meetings: on Tuesday and on Thursday.' },
            { who: 'Paula', text: 'El martes yo no [[estoy|teal]] aquí: [[voy a Puebla|orange]] con un cliente.', en: 'On Tuesday I’m not here: I’m going to Puebla with a client.' },
            { who: 'Hugo', text: '¿Y el miércoles? ¿[[Vamos al centro|orange]] los tres?', en: 'And on Wednesday? Are the three of us going downtown?' },
            { who: 'Paula', text: 'Sí, a la feria de diseño. Rosa [[tiene|violet]] las entradas.', en: 'Yes, to the design fair. Rosa has the tickets.' },
            { who: 'Rosa', text: '¡Hola! Perdón, [[estoy|teal]] un poco cansada. El banco [[es|blue]] un caos los lunes.', en: 'Hi! Sorry, I’m a bit tired. The bank is chaos on Mondays.' },
            { who: 'Hugo', text: 'Tranquila. Mira: el miércoles [[vamos|orange]] a la feria.', en: 'Don’t worry. Look: on Wednesday we’re going to the fair.' },
            { who: 'Rosa', text: 'Perfecto. Y el viernes [[no voy a la oficina|orange]]: [[tengo el día libre|violet]].', en: 'Perfect. And on Friday I’m not going to the office: I have the day off.' },
            { who: 'Paula', text: 'Muy bien, equipo. [[Somos|blue]] tres y [[tenemos|violet]] una semana muy completa.', en: 'Great, team. There are three of us and we have a very full week.' },
          ], notes: {
            'está': 'Estar con él, ella o una cosa: **está**. Para el lugar de una persona («¿Dónde está Rosa?») y de una cosa («Aquí está», la agenda).',
            'Está en el banco': '**Estar en** + lugar: Rosa ya está allí, en el banco. No es movimiento.',
            'es': 'Ser con él, ella o una cosa: **es**. Para el día («Hoy es lunes») y para describir algo («El banco es un caos»).',
            'Tienes': 'Tener con tú: **tienes**. Paula pregunta si Hugo tiene la agenda (have).',
            'tengo dos reuniones': 'Tener con yo: **tengo**. Las reuniones están en su agenda: tener, no estar.',
            'estoy': 'Estar con yo: **estoy**. Para un lugar («no estoy aquí») y para un estado de hoy («estoy un poco cansada»).',
            'voy a Puebla': 'Ir con yo: **voy**. Movimiento hacia una ciudad: voy a Puebla, sin artículo.',
            'Vamos al centro': 'Ir con nosotros: **vamos**. Al centro = a + el centro. Una pregunta para proponer un plan.',
            'tiene': 'Tener con ella: **tiene**. Rosa tiene las entradas de la feria.',
            'vamos': 'Otra vez **vamos**, ahora en una afirmación: «el miércoles vamos a la feria» (a + la feria).',
            'no voy a la oficina': 'Para negar, **no** antes del verbo: no voy. Ir a + la oficina.',
            'tengo el día libre': 'Tener el día libre = not working that day. Tener con yo: **tengo**.',
            'Somos': 'Ser con nosotros: **somos**. «Somos tres» = there are three of us.',
            'tenemos': 'Tener con nosotros: **tenemos**. Ojo: con e, no con ie.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Dónde está Rosa al principio?', options: ['En la feria.', 'En Puebla.', 'En el banco.'], answer: 2, why: '«Está en el banco, con las facturas».', en: 'Where is Rosa at the beginning?' },
            { prompt: '¿Adónde va Paula el martes?', options: ['Al centro.', 'Al banco.', 'A Puebla, con un cliente.'], answer: 2, why: '«El martes yo no estoy aquí: voy a Puebla con un cliente».', en: 'Where is Paula going on Tuesday?' },
            { prompt: '¿Quién tiene las entradas de la feria?', options: ['Rosa.', 'Hugo.', 'Paula.'], answer: 0, why: '«Rosa tiene las entradas».', en: 'Who has the tickets for the fair?' },
          ] },
        ] },
        { title: 'Los cuatro verbos en la agenda · The four verbs in the agenda', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada línea de la agenda en voz alta con el verbo y elige la columna. Tú preguntas por qué.', self: 'Lee cada línea de la agenda con el verbo y elige: ser, estar, ir o tener.' } },
          { kind: 'classify', title: '¿Qué verbo? · Which verb?', categories: [
            { id: 'ser', label: 'SER · quién / qué', tone: 'blue' },
            { id: 'estar', label: 'ESTAR · dónde / cómo', tone: 'teal' },
            { id: 'ir', label: 'IR · adónde', tone: 'orange' },
            { id: 'tener', label: 'TENER · qué tiene', tone: 'violet' },
          ], items: [
            { text: 'Rosa … en el banco hasta las diez.', answer: 'estar', why: 'Un lugar: Rosa está en el banco.' },
            { text: 'Paula … a Puebla el martes.', answer: 'ir', why: 'Movimiento hacia una ciudad: Paula va a Puebla.' },
            { text: 'Hugo … dos reuniones esta semana.', answer: 'tener', why: 'Reuniones en la agenda: Hugo tiene dos reuniones.' },
            { text: 'Paula … la coordinadora del equipo.', answer: 'ser', why: 'Su función en el equipo: Paula es la coordinadora.' },
            { text: 'Los tres … al centro el miércoles.', answer: 'ir', why: 'Movimiento: los tres van al centro.' },
            { text: 'Rosa … un poco cansada hoy.', answer: 'estar', why: 'Un estado de hoy: Rosa está cansada.' },
            { text: 'Rosa … el día libre el viernes.', answer: 'tener', why: 'Tener el día libre: Rosa tiene el día libre.' },
            { text: 'Hoy … lunes.', answer: 'ser', why: 'El día de la semana: hoy es lunes.' },
          ] },
          { kind: 'teacher', text: 'Pregunta rápida: «¿Dónde está Rosa el lunes a las nueve? ¿Y adónde va el miércoles?». Las dos respuestas muestran el par estar en / ir a.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero la persona, después el verbo. Person first, then the verb.',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Hablas de tu mañana. (You talk about your morning.)', prompt: 'Yo ___ a la oficina en autobús.', options: ['va', 'voy', 'vas'], answer: 1, why: 'Ir con yo: voy. «Va» es para él o ella.', en: 'I go to the office by bus.' },
            { context: 'Hugo y Rosa ya llegaron. (Hugo and Rosa have arrived.)', prompt: 'Hugo y Rosa ___ en la sala de reuniones.', options: ['están', 'estamos', 'son'], answer: 0, why: 'Ellos + lugar: están en.', en: 'Hugo and Rosa are in the meeting room.' },
            { context: 'Hugo le pregunta a Paula (tú). (Hugo asks Paula.)', prompt: 'Paula, ¿___ tiempo hoy a las cinco?', options: ['tengo', 'tienen', 'tienes'], answer: 2, why: 'Hugo habla con Paula (tú): tienes.', en: 'Paula, do you have time today at five?' },
            { context: 'Paula presenta el estudio a un cliente. (Paula introduces the studio.)', prompt: 'Nosotros ___ un equipo pequeño.', options: ['somos', 'estamos', 'son'], answer: 0, why: 'Quiénes son (identidad): somos.', en: 'We are a small team.' },
            { context: 'Hablas de la edad de Rosa. (You talk about Rosa’s age.)', prompt: 'Rosa ___ treinta y dos años.', options: ['tiene', 'es', 'está'], answer: 0, why: 'La edad va con tener: tiene treinta y dos años.', en: 'Rosa is thirty-two.' },
            { context: 'Paula pregunta a Hugo y a Rosa. (Paula asks Hugo and Rosa.)', prompt: '¿Ustedes ___ al centro el jueves?', options: ['va', 'vamos', 'van'], answer: 2, why: 'Ustedes: van.', en: 'Are you two going downtown on Thursday?' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Yo va a la sala de reuniones.', ok: false, options: ['Yo vas a la sala de reuniones.', 'Yo estoy a la sala de reuniones.', 'Yo voy a la sala de reuniones.'], answer: 2, why: 'Con yo, ir es voy. «Vas» es tú; estar no va con «a la».' },
            { sentence: 'Paula está en Puebla hoy.', ok: true, why: 'Correcta: un lugar, estar en.' },
            { sentence: 'Hugo está al trabajo.', ok: false, options: ['Hugo está a el trabajo.', 'Hugo es en el trabajo.', 'Hugo está en el trabajo.'], answer: 2, why: 'Estar + lugar va con en: está en el trabajo.' },
            { sentence: 'Nosotros tenimos dos reuniones.', ok: false, options: ['Nosotros tienen dos reuniones.', 'Nosotros tienemos dos reuniones.', 'Nosotros tenemos dos reuniones.'], answer: 2, why: 'Tener con nosotros: tenemos (con e, sin ie).' },
            { sentence: 'Rosa y yo vamos en la oficina.', ok: false, options: ['Rosa y yo vamos a la oficina.', 'Rosa y yo van a la oficina.', 'Rosa y yo vamos al la oficina.'], answer: 0, why: 'Ir + lugar va con a: vamos a la oficina. Rosa y yo = nosotros.' },
          ] },
        ] },
        { title: 'El chat del equipo · The team chat', blocks: [
          { kind: 'chat-fill', title: 'Martes, 8:50', lines: [
            { who: 'Rosa', text: 'Buenos días. ¿Dónde ___, Hugo?', options: ['estoy', 'estás', 'eres'], answer: 1, why: 'Rosa pregunta a Hugo (tú) por un lugar: estás.' },
            { who: 'Hugo', text: '___ en la cafetería, abajo.', options: ['Voy', 'Soy', 'Estoy'], answer: 2, why: 'Ya está allí: estoy en. «Voy» necesita a.' },
            { who: 'Rosa', text: '¿___ las llaves de la sala?', options: ['Eres', 'Vas', 'Tienes'], answer: 2, why: 'Las llaves son algo que tienes: tienes.' },
            { who: 'Hugo', text: 'No, Paula ___ las llaves.', options: ['es', 'tiene', 'tienes'], answer: 1, why: 'Paula = ella: tiene.' },
            { who: 'Rosa', text: 'Pero Paula ___ en Puebla hoy.', options: ['es', 'va', 'está'], answer: 2, why: 'Un lugar con en: está en Puebla.' },
            { who: 'Hugo', text: 'Uf. Entonces ___ a recepción: allí hay otra llave.', options: ['soy', 'voy', 'estoy'], answer: 1, why: 'Movimiento hacia recepción: voy a.' },
            { who: 'Rosa', text: '¡Gracias! Yo llego en cinco minutos.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['al', 'Voy', 'en', 'trabajo', 'metro'], accept: ['Voy al trabajo en metro', 'En metro voy al trabajo'], en: 'I go to work by metro.' },
            { tiles: ['la', 'Estamos', 'sala', 'en', 'de', 'reuniones'], accept: ['Estamos en la sala de reuniones'], en: 'We are in the meeting room.' },
            { tiles: ['tres', 'Rosa', 'hoy', 'tiene', 'reuniones'], accept: ['Rosa tiene tres reuniones hoy', 'Hoy Rosa tiene tres reuniones'], en: 'Rosa has three meetings today.' },
            { tiles: ['vas', '¿Adónde', 'jueves?', 'el'], accept: ['¿Adónde vas el jueves?'], en: 'Where are you going on Thursday?' },
          ] },
        ] },
        { title: 'Cambia la persona · Change the person', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase con la nueva persona · Write it with the new person', items: [
            { prompt: 'Yo voy a la oficina a las ocho.', instruction: 'Escribe la frase con nosotros. (we)', accept: ['Nosotros vamos a la oficina a las ocho', 'Vamos a la oficina a las ocho', 'Nosotras vamos a la oficina a las ocho'] },
            { prompt: 'Hugo tiene una reunión el viernes.', instruction: 'Escribe la frase con yo. (I)', accept: ['Yo tengo una reunión el viernes', 'Tengo una reunión el viernes', 'El viernes tengo una reunión'] },
            { prompt: 'Paula está en Puebla.', instruction: 'Escribe la frase con Paula y Hugo. (they)', accept: ['Paula y Hugo están en Puebla'] },
            { prompt: 'Rosa es de Guadalajara.', instruction: 'Pregunta a Rosa con tú. (Ask Rosa: are you…?)', accept: ['¿Eres de Guadalajara?', '¿Tú eres de Guadalajara?', 'Rosa, ¿eres de Guadalajara?', '¿Eres de Guadalajara, Rosa?'] },
          ] },
        ] },
        { title: '¿Va o está? · Going or there?', blocks: [
          { kind: 'classify', title: 'Hugo… ¿va o está? · Is Hugo going or already there?', categories: [
            { id: 'va', label: 'VA · ir a (movimiento)', tone: 'orange' },
            { id: 'esta', label: 'ESTÁ · estar en (lugar)', tone: 'teal' },
          ], items: [
            { text: 'Hugo … al banco.', answer: 'va', why: 'Al = a + el: movimiento, va al banco.' },
            { text: 'Hugo … en la sala.', answer: 'esta', why: 'En + lugar: está en la sala.' },
            { text: 'Hugo … a la cafetería.', answer: 'va', why: 'A + lugar: movimiento, va a la cafetería.' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una nota de voz de Paula', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Paula cambia la agenda · Paula changes the agenda', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿quién habla y por qué?). Segunda escucha: tu alumno levanta la mano cada vez que oye voy, vamos, estoy o está. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta cuántas veces oyes ir o estar. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Una nota de voz de Paula', channel: 'NOTA DE VOZ · CHAT DEL EQUIPO', src: '/audio/grammar-live/318.mp3',
            before: 'Es miércoles por la noche. Paula manda una nota de voz al chat del equipo. ¿Qué crees que cambia en la agenda? (It is Wednesday night. Paula sends a voice note to the team chat. What do you think changes in the agenda?)',
            gist: { prompt: '¿Por qué habla Paula?', options: ['Porque busca una oficina nueva.', 'Porque hay cambios en la agenda de la semana.', 'Porque está enferma.'], answer: 1, why: '«La agenda cambia un poco».', en: 'Why is Paula speaking?' },
            details: [
              { prompt: '¿Dónde está Paula el jueves por la mañana?', options: ['En el banco.', 'En la oficina.', 'En el aeropuerto, con un cliente.'], answer: 2, why: '«Mañana por la mañana estoy en el aeropuerto, con un cliente».', en: 'Where is Paula on Thursday morning?' },
              { prompt: '¿Cuándo tiene Hugo la reunión con el banco?', options: ['El jueves.', 'El viernes.', 'El miércoles.'], answer: 0, why: '«Hugo, tú tienes la reunión con el banco el jueves».', en: 'When does Hugo have the meeting with the bank?' },
              { prompt: '¿Adónde van Paula y Rosa el lunes?', options: ['A la feria.', 'Al centro, a las diez.', 'A Puebla.'], answer: 1, why: '«Rosa, el lunes tú y yo vamos al centro, a las diez».', en: 'Where are Paula and Rosa going on Monday?' },
              { prompt: '¿Dónde están las llaves nuevas?', options: ['En recepción.', 'En la cafetería.', 'En el escritorio de Paula.'], answer: 2, why: '«Las llaves nuevas de la sala están en mi escritorio».', en: 'Where are the new keys?' },
            ],
            transcript: 'Hola, Hugo. Hola, Rosa. [[Soy|blue]] Paula. Ya [[es|blue]] miércoles por la noche y la agenda cambia un poco. Mañana por la mañana [[estoy|teal]] en el aeropuerto, con un cliente, y por la tarde [[voy|orange]] a la oficina. Hugo, tú [[tienes|violet]] la reunión con el banco el jueves, ¿verdad? Rosa, el lunes tú y yo [[vamos|orange]] al centro, a las diez. Ah, una cosa más: las llaves nuevas de la sala [[están|teal]] en mi escritorio. La reunión del viernes [[es|blue]] a las once. ¡Gracias, equipo! Hasta mañana.',
            reply: { teacher: 'Tú eres Paula. Tu alumno responde a la nota de voz con tres frases: dónde está mañana, adónde va y qué tiene esta semana, y termina con una pregunta para Paula.', self: 'Responde a Paula en voz alta: «Hola, Paula. Mañana estoy en… Voy a… Tengo…». Termina con una pregunta: «¿Y tú? ¿Adónde vas el viernes?». (Answer Paula aloud: where you are, where you go, what you have.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu semana de trabajo', coach: 'Ahora hablas de tu semana. Now it’s your week.',
      steps: [
        { title: 'Tu agenda · Your agenda', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres una compañera o un compañero de oficina y preguntas con tú. Tu alumno responde con su semana real, en frases cortas. Tú repites su frase bien dicha y sigues con la repregunta.', self: 'Imagina que una compañera de trabajo te pregunta. Lee la pregunta, responde en voz alta con tu semana real y, si quieres, escribe tu respuesta.' } },
          { kind: 'talk', cards: [
            { q: '¿Quién eres y de dónde eres? · Who are you and where are you from?', followUps: ['¿Cuál es tu trabajo o qué estudias? (Your job or your studies?)', '¿Cómo es tu lugar de trabajo? (What is your workplace like?)'], phrases: ['[[Soy|blue]] … (nombre / profesión)', '[[Soy|blue]] de …', 'Mi oficina [[es|blue]] grande / pequeña / tranquila.'], hint: '«Soy» + nombre, profesión o origen. Para describir un lugar: «es».', example: 'Soy Sam. Soy diseñadora y soy de Toronto. Mi oficina es pequeña, pero es muy tranquila.', next: 'Ahora, dónde estás.', teacher: 'Responde tú también con información simple: «Yo soy Paula, soy de Guadalajara». Así tu alumno oye otra persona del verbo.' },
            { q: '¿Dónde estás ahora y cómo estás? · Where are you now and how are you?', followUps: ['¿Estás en casa o en el trabajo? (At home or at work?)', '¿Y tu familia o tus compañeros, dónde están? (And your family or colleagues?)'], phrases: ['[[Estoy|teal]] en casa / en la oficina.', '[[Estoy|teal]] bien / cansado / cansada.', 'Mis compañeros [[están|teal]] en …'], hint: '«Estoy en» + lugar; «estoy» + cómo te sientes.', example: 'Ahora estoy en casa, en la cocina. Estoy bien, un poco cansada. Mis compañeros están en la oficina.', next: 'Ahora, adónde vas.' },
            { q: '¿Adónde vas el lunes por la mañana? · Where do you go on Monday morning?', followUps: ['¿A qué hora vas? (At what time?)', '¿Vas en autobús, en metro, en coche o a pie? (By bus, metro, car or on foot?)'], phrases: ['[[Voy|orange]] al trabajo / a la oficina / a la universidad.', '[[Voy|orange]] en metro / en autobús / a pie.', 'A las nueve [[estoy|teal]] en …'], hint: '«Voy a» + lugar (a la oficina, al trabajo). Cuando llegas: «estoy en».', example: 'El lunes voy al trabajo a las ocho. Voy en metro. A las nueve estoy en la oficina.', next: 'Ahora, tus reuniones.', teacher: 'Si tu alumno dice «estoy al trabajo», repite la pregunta: «¿Vas o ya estás?». Así elige solo ir a o estar en.' },
            { q: '¿Cuántas reuniones o citas tienes esta semana? · How many meetings or appointments do you have this week?', followUps: ['¿Qué día tienes más trabajo? (Which day is busiest?)', '¿Tienes un día libre? (Do you have a day off?)'], phrases: ['[[Tengo|violet]] dos / tres reuniones.', 'El martes [[tengo|violet]] una cita con …', 'El viernes [[tengo|violet]] el día libre.'], hint: '«Tengo» + reuniones, citas, tiempo, el día libre.', example: 'Esta semana tengo tres reuniones. El martes tengo una cita con el médico. El viernes no tengo reuniones.', next: 'Ahora, tu equipo.' },
            { q: '¿Y tu equipo o tu familia? ¿Dónde están, adónde van, qué tienen? · And your team or family? Where are they, where do they go, what do they have?', followUps: ['¿Cuántos son? (How many of you are there?)', '¿Van juntos a algún lugar esta semana? (Are you going somewhere together?)', '¿Quién tiene más reuniones? (Who has the most meetings?)'], phrases: ['[[Somos|blue]] cuatro en el equipo.', 'El jueves [[vamos|orange]] a …', 'Mi compañera [[tiene|violet]] … / [[está|teal]] en …'], hint: 'Con nosotros: somos, estamos, vamos, tenemos. Con otra persona: es, está, va, tiene.', example: 'Somos cuatro en el equipo. Mi compañera Ana está en Madrid esta semana. El jueves vamos a una feria y tenemos una reunión con un cliente.', next: 'Para terminar, tu día de mañana.' },
            { q: 'Cuenta tu día de mañana con los cuatro verbos. · Tell your plan for tomorrow with the four verbs.', followUps: ['¿Dónde estás a las tres? (Where are you at three?)', '¿Y después, adónde vas? (And then, where do you go?)'], phrases: ['Mañana [[voy|orange]] a …', 'A las … [[estoy|teal]] en …', '[[Tengo|violet]] …', '[[Es|blue]] un día …'], hint: 'Una frase con cada verbo: voy a, estoy en, tengo, es.', example: 'Mañana voy a la oficina a las nueve. Tengo dos reuniones. A las tres estoy en el banco. Es un día muy completo.', teacher: 'Cambia una parte del plan: «La reunión es a las cuatro». Tu alumno ajusta su día con los mismos verbos.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta («¿Adónde vas?», «¿Dónde estás?», «¿Cuántas reuniones tienes?») y tú respondes con tu semana.', self: 'Ahora haz tú las preguntas en voz alta («¿Adónde vas?», «¿Dónde estás?», «¿Qué tienes esta semana?») y responde como Paula, Hugo o Rosa. (Now you ask the questions and answer as one of them.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu parte de la agenda', coach: 'Corto y claro. Short and clear.',
      steps: [
        { title: 'Un mensaje para el equipo · A message for the team', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos ir a / estar en y la forma de yo de cada verbo. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien voy a / estoy en y la forma de yo.' } },
          { kind: 'write', title: 'Tu semana en la agenda compartida · Your week in the shared agenda', situation: 'La semana que viene Rosa está de vacaciones y tú trabajas con Paula y Hugo. Escribe un mensaje en el chat del equipo con tu parte de la agenda. (Next week Rosa is on holiday and you work with Paula and Hugo. Write a message in the team chat with your part of the agenda.)', task: [
            'Saluda y di quién eres con **soy**. (Say hello and who you are.)',
            'Di dónde estás un día de la semana con **estar en**. (Where you are one day.)',
            'Di adónde vas otro día con **ir a / al**. (Where you are going another day.)',
            'Di qué reuniones o citas tienes con **tener**. (What meetings you have.)',
            'Termina con una pregunta para Paula y Hugo. (End with a question for them.)',
          ], starters: ['Hola, Paula. Hola, Hugo.', 'Soy …', 'El lunes estoy en …', 'El martes voy a / al …', 'Tengo … reuniones.', '¿Y ustedes? ¿Dónde están el …?', 'Un saludo.'],
            words: ['soy', 'estoy en', 'voy a', 'voy al', 'vamos', 'tengo', 'tenemos', 'la oficina', 'el trabajo', 'el banco', 'la sala de reuniones', 'una reunión', 'el día libre'],
            model: 'Hola, Paula. Hola, Hugo. [[Soy|blue]] Carla, la nueva compañera de administración. El lunes [[estoy|teal]] en la oficina todo el día. El martes por la mañana [[voy|orange]] al banco y por la tarde [[tengo|violet]] dos reuniones con clientes. El miércoles [[vamos|orange]] al centro los tres, ¿verdad? El jueves tengo el día libre. ¿Y ustedes? ¿Cuándo están en la oficina? Un saludo.',
            minWords: 35,
            checks: [
              { label: 'Soy + quién eres (who you are)', pattern: '(?<!\\p{L})soy(?!\\p{L})', tip: 'Di quién eres: «Soy Carla», «Soy la nueva compañera».' },
              { label: 'Estar en + lugar (where you are)', pattern: '(?<!\\p{L})(?:estoy|estamos|está|están)\\s+en(?!\\p{L})', tip: 'Di dónde estás un día: «El lunes estoy en la oficina».' },
              { label: 'Ir a + lugar (where you are going)', pattern: '(?<!\\p{L})(?:voy|vamos|va|van)\\s+(?:a|al)(?!\\p{L})', tip: 'Di adónde vas: «El martes voy al banco», «Vamos a la feria».' },
              { label: 'Tener + reuniones o citas (what you have)', pattern: '(?<!\\p{L})(?:tengo|tenemos|tiene|tienen)(?!\\p{L})', tip: 'Di qué tienes: «Tengo dos reuniones», «Tengo el día libre».' },
              { label: 'Una pregunta para el equipo (a question)', pattern: '¿[^?]+\\?', tip: 'Termina con una pregunta: «¿Y ustedes? ¿Dónde están el lunes?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:estoy|estás|está|estamos|están)\\s+(?:al|a\\s+la)\\s+(?:trabajo|oficina|banco|sala|centro|cafetería|feria)(?!\\p{L})', why: 'Revisa: con estar, el lugar va con en («estoy en el trabajo»). «Al» y «a la» van con ir («voy al trabajo»).' },
              { pattern: '(?<!\\p{L})(?:voy|vas|va|vamos|van)\\s+en\\s+(?:el|la)\\s+(?:oficina|trabajo|banco|sala|centro|feria)(?!\\p{L})', why: 'Revisa: con ir, el lugar va con a («voy a la oficina», «voy al banco»).' },
              { pattern: '(?<!\\p{L})yo\\s+(?:va|vas|tiene|tienes|está|estás)(?!\\p{L})', why: 'Con yo: voy, tengo, estoy.' },
              { pattern: '(?<!\\p{L})a\\s+el\\s+(?:trabajo|banco|centro|aeropuerto)(?!\\p{L})', why: 'A + el se escribe al: «al trabajo», «al banco».' },
              { pattern: '(?<!\\p{L})(?:tieno|tenimos|tienemos)(?!\\p{L})', why: 'Tener: tengo (yo), tenemos (nosotros).' },
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
            { tone: 'blue', label: 'SER', formula: 'soy · eres · es · somos · son', example: 'Paula es la coordinadora.', caption: 'quién es, qué es, qué día es', en: 'to be (who / what)' },
            { tone: 'teal', label: 'ESTAR EN', formula: 'estoy · estás · está · estamos · están + en', example: 'Estoy en el trabajo.', caption: 'dónde está (ya allí) y cómo está', en: 'to be (where / how)' },
            { tone: 'orange', label: 'IR A', formula: 'voy · vas · va · vamos · van + a / al', example: 'Voy al trabajo.', caption: 'adónde va (movimiento)', en: 'to go (where to)' },
            { tone: 'violet', label: 'TENER', formula: 'tengo · tienes · tiene · tenemos · tienen', example: 'Tengo dos reuniones.', caption: 'qué tiene: reuniones, tiempo, años', en: 'to have' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Con yo: **soy, estoy, voy, tengo**. Y el par de hoy: **voy al** trabajo (me muevo) / **estoy en el** trabajo (ya estoy allí).', en: 'With “yo”: soy, estoy, voy, tengo. And today’s pair: voy al trabajo (I’m moving) / estoy en el trabajo (I’m already there).' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El lunes yo ___ a la oficina temprano.', options: ['va', 'estoy', 'voy'], answer: 2, why: 'Movimiento, con yo: voy a.' },
            { prompt: 'Hoy Paula ___ en Puebla, con un cliente.', options: ['va', 'es', 'está'], answer: 2, why: 'Un lugar con en: está.' },
            { prompt: '¿Ustedes ___ reunión a las cinco?', options: ['tienen', 'son', 'tenemos'], answer: 0, why: 'Tener con ustedes: tienen.' },
            { prompt: 'Hugo y yo ___ diseñadores.', options: ['somos', 'estamos', 'son'], answer: 0, why: 'Hugo y yo = nosotros + profesión: somos.' },
            { prompt: 'Rosa, ¿___ al banco hoy?', options: ['vas', 'tienes', 'estás'], answer: 0, why: 'Al banco = movimiento: vas.' },
          ] },
        ] },
        { title: 'Fuera de la oficina · Outside the office', mascot: '/autoestudio/mascot/noting.webp', coach: 'La misma regla, otro lugar. Same rule, new place.', blocks: [
          { kind: 'lead', text: 'Ahora usas los cuatro verbos fuera del trabajo: tu fin de semana con la familia.', en: 'Now you use the four verbs outside work: your weekend with your family.' },
          { kind: 'rewrite', title: 'Escríbelo en español · Write it in Spanish', items: [
            { prompt: 'My sister is at the gym.', instruction: 'Escribe la frase en español. (sister = hermana, gym = el gimnasio)', accept: ['Mi hermana está en el gimnasio'] },
            { prompt: 'We go to the park on Sundays.', instruction: 'Escribe la frase en español. (park = el parque, on Sundays = los domingos)', accept: ['Los domingos vamos al parque', 'Vamos al parque los domingos', 'Nosotros vamos al parque los domingos', 'Los domingos nosotros vamos al parque'] },
            { prompt: 'I have two brothers.', instruction: 'Escribe la frase en español. (brothers = hermanos)', accept: ['Tengo dos hermanos', 'Yo tengo dos hermanos'] },
            { prompt: 'My parents are from Chile.', instruction: 'Escribe la frase en español. (parents = padres)', accept: ['Mis padres son de Chile'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 019 · Presente irregular: hacer, poner, salir, venir', text: 'Ya usas los cuatro verbos irregulares más frecuentes: soy, estoy, voy, tengo. En la clase 019 llegan cuatro verbos más con una forma especial de yo: **hago, pongo, salgo, vengo**. Con ellos cuentas tu rutina completa: a qué hora sales, qué haces y de dónde vienes.', en: 'You can now use the four most frequent irregular verbs: soy, estoy, voy, tengo. In class 019 four more verbs arrive with a special “yo” form: hago, pongo, salgo, vengo. With them you can tell your full routine: what time you leave, what you do and where you come from.', href: '/gramatica/presente-irregular-hacer-poner-salir-venir', label: 'Ir a la clase 019' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Adónde vas mañana y dónde estás a las tres?». Respuesta esperada: «Voy a / al… A las tres estoy en…». Tarea para la próxima clase: tu alumno escribe su agenda real de la semana con una frase por día.' },
        ] },
      ],
    },
  ],
};
