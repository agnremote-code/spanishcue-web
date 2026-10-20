import type { LiveLesson } from '../types';

/**
 * Lesson 353 · A2 · Marcadores temporales: ayer, antes, ya, todavía (course unit G053).
 * One scene runs through the class: a Saturday evening in Guadalajara (Mexico).
 * Valeria Montes hosts a reunion dinner for her old university classmates (they
 * studied Tourism together). At half past seven she texts her friend Rodrigo:
 * «Ya terminé, pero todavía no llegó nadie». Hugo arrives first and they catch
 * up on what has changed (he no longer lives in Zapopan; she still works at the
 * hotel). In the voice message Paula (Mexican voice) explains she is stuck in
 * traffic. Content, built on G045–G052: ya / todavía no (has an expected action
 * happened?) and todavía / ya no (does a situation continue?), ayer, anoche,
 * anteayer + indefinido (a finished day) and antes … ahora + imperfecto (another
 * period). With ya / todavía no, indefinido (frequent in Mexico and much of
 * Latin America) and perfecto (frequent in Spain) are both correct (G051).
 * Typical mistakes: «—¿Ya llegó? —*No, ya no» (→ todavía no), *no todavía +
 * verb, todavía for a finished situation, *ayer he hablado, *antes vivo.
 * «Antes de + infinitivo» is next class (G054) and appears only receptively.
 * Instructions use tú; the characters use tú with each other.
 */
export const lesson: LiveLesson = {
  id: 353,
  level: 'A2',
  title: 'Marcadores temporales: ayer, antes, ya, todavía',
  subtitle: 'Decir qué ya pasó y qué todavía no, qué sigue igual y qué ya no, y situar los hechos en ayer o en otra época con antes.',
  legend: [
    { tone: 'teal', label: 'YA · TODAVÍA NO · ¿pasó la acción? (already · not yet)' },
    { tone: 'violet', label: 'TODAVÍA · YA NO · ¿sigue la situación? (still · no longer)' },
    { tone: 'orange', label: 'AYER · ANOCHE · ANTEAYER · un día terminado (indefinido)' },
    { tone: 'blue', label: 'ANTES … AHORA · otra época (imperfecto … presente)' },
  ],
  optionNotes: {
    'no todavía': 'El orden es **todavía no** + verbo («todavía no llegó») o **no** + verbo + **todavía** («no llegó todavía»). Nunca «no todavía» delante del verbo.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Ya pasó? ¿Todavía sigue?', coach: 'Cuatro palabras para el tiempo. Four time words.',
      steps: [
        { title: 'Un sábado en Guadalajara · A Saturday in Guadalajara', blocks: [
          { kind: 'lead', text: 'Valeria Montes vive en Guadalajara, en México. Hoy organiza una cena en su casa con sus compañeros de la universidad: estudiaron Turismo juntos y terminaron la carrera en 2016. Son las siete y media. La comida está lista, pero la casa está en silencio. Valeria le escribe a su amigo Rodrigo: «**Ya** terminé, pero **todavía no** llegó nadie». Hoy aprendes cuatro palabras para situar las cosas en el tiempo: **ayer**, **antes**, **ya** y **todavía**.', en: 'Valeria Montes lives in Guadalajara, Mexico. Today she is hosting a dinner at home for her university classmates: they studied Tourism together and graduated in 2016. It is half past seven. The food is ready, but the house is silent. Valeria texts her friend Rodrigo: “I’ve finished, but nobody has arrived yet”. Today you learn four words to place things in time: ayer, antes, ya and todavía.' },
          { kind: 'guide', text: { teacher: 'Tú lees el mensaje de Valeria y tu alumno repite. Después tu alumno dice qué cosa ya pasó y qué cosa todavía no.', self: 'Lee el mensaje de Valeria en voz alta. ¿Qué cosa ya pasó? ¿Qué cosa todavía no? (What has already happened? What hasn’t happened yet?)' } },
          { kind: 'compare', title: 'Un mensaje, dos ideas · One message, two ideas', columns: [
            { tone: 'teal', label: 'YA · sí, pasó', sentence: '[[Ya|teal]] terminé.', idea: 'Una acción esperada ya pasó: la comida está lista.', en: 'I’ve already finished. (the expected action has happened)' },
            { tone: 'teal', label: 'TODAVÍA NO · no pasó', sentence: '[[Todavía no|teal]] llegó nadie.', idea: 'La acción no pasó, pero Valeria la espera: sus amigos van a llegar.', en: 'Nobody has arrived yet. (it hasn’t happened, but she expects it)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Ya terminé» quiere decir…', options: ['La acción pasó: la comida está lista.', 'La acción no pasó.', 'Valeria termina todos los sábados.'], answer: 0, why: '«Ya» + pasado: la acción esperada ya pasó.', en: '“Ya terminé” means…' },
            { prompt: '«Todavía no llegó nadie». ¿Valeria espera a sus amigos?', options: ['Sí: no llegaron, pero van a llegar.', 'No: los amigos llegaron ayer.', 'No: nadie viene a la cena.'], answer: 0, why: '«Todavía no» = not yet: algo no pasó, pero se espera.', en: '“Nobody has arrived yet”. Is Valeria expecting her friends?' },
            { prompt: 'Valeria pregunta a Rodrigo a las siete y media: «¿___ saliste del trabajo?».', options: ['Ya', 'Ayer', 'Todavía'], answer: 0, why: 'Para preguntar si una acción esperada pasó: ¿ya…? «Ayer» no funciona: la cena es hoy.', en: 'Valeria asks Rodrigo at half past seven: “Have you left work yet?”' },
          ] },
        ] },
        { title: 'Ya y todavía no · Already and not yet', mascot: '/brand/mascot/studying.webp', coach: '¿Pasó o no pasó? Has it happened?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'YA · TODAVÍA NO', question: '¿Pasó o no pasó?', en: 'Has it happened or not?', formula: ['ya + verbo → sí, ya pasó', 'todavía no + verbo → no pasó (pero se espera)'],
            meaning: 'Con **ya** dices que una acción esperada ya pasó. Con **todavía no** dices que no pasó, pero esperas que pase. Para hoy puedes usar el indefinido (ya terminé: frecuente en México y gran parte de América) o el perfecto (ya he terminado: frecuente en España), como en la clase 051.',
            examples: [
              { es: '[[Ya|teal]] preparé la mesa. · [[Ya|teal]] he preparado la mesa.', en: 'I’ve already set the table.' },
              { es: 'Los invitados [[todavía no|teal]] llegaron. · Los invitados [[todavía no|teal]] han llegado.', en: 'The guests haven’t arrived yet.' },
              { es: '¿[[Ya|teal]] compraste el hielo? —No, [[todavía no|teal]].', en: 'Have you bought the ice yet? —No, not yet.' },
            ],
            note: '**Ya** y **todavía no** van normalmente delante del verbo. También es posible **no** + verbo + **todavía** al final: «No llegó nadie todavía».' },
          { kind: 'table', title: 'Preguntar y responder · Asking and answering', head: ['Pregunta', 'Sí', 'No'], rows: [
            ['¿[[Ya|teal]] cenaste? (Have you had dinner?)', 'Sí, [[ya|teal]] cené.', 'No, [[todavía no|teal]].'],
            ['¿[[Ya|teal]] has hablado con Elena? (Have you talked to Elena yet?)', 'Sí, [[ya|teal]] he hablado con ella.', 'No, [[todavía no|teal]] he hablado con ella.'],
            ['¿[[Ya|teal]] llegó Hugo? (Has Hugo arrived yet?)', 'Sí, [[ya|teal]] llegó.', 'No, [[todavía no|teal]] llegó.'],
          ], note: 'La respuesta negativa a «¿Ya…?» es **todavía no** (not yet). «Ya no» significa otra cosa: lo ves en el paso siguiente.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rodrigo: «Valeria, ¿___ pusiste la música?».', options: ['antes', 'ya no', 'ya'], answer: 2, why: 'Rodrigo pregunta si una acción esperada pasó: ¿ya…?', en: 'Rodrigo: “Valeria, have you put the music on yet?”' },
            { prompt: '—¿Ya llegó Paula? —No, ___.', options: ['ya no', 'ayer no', 'todavía no'], answer: 2, why: 'Not yet: **todavía no**. Paula no llegó, pero va a llegar.', en: '—Has Paula arrived yet? —No, not yet.' },
          ] },
        ] },
        { title: 'Todavía y ya no · Still and no longer', mascot: '/brand/mascot/standing.webp', coach: '¿Sigue o no sigue? Still or not?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'TODAVÍA · YA NO', question: '¿Sigue o no sigue?', en: 'Is it still going on or not?', formula: ['todavía + verbo → sí, sigue igual', 'ya no + verbo → antes sí, ahora no'],
            meaning: 'Con **todavía** dices que una situación de antes **continúa** ahora. Con **ya no** dices que una situación de antes **terminó**: antes sí, ahora no. Normalmente van con el presente.',
            examples: [
              { es: 'Valeria [[todavía|violet]] trabaja en el hotel.', en: 'Valeria still works at the hotel.' },
              { es: 'Hugo [[ya no|violet]] vive en Zapopan.', en: 'Hugo doesn’t live in Zapopan any more.' },
              { es: '¿[[Todavía|violet]] tocas la guitarra? —No, [[ya no|violet]].', en: 'Do you still play the guitar? —No, not any more.' },
            ],
            note: '**Aún** (con tilde) significa lo mismo que todavía: «aún trabaja en el hotel», «aún no llegó».' },
          { kind: 'table', title: 'Cuatro respuestas · Four answers', head: ['', 'SÍ', 'NO'], rows: [
            ['¿Pasó? (has it happened?)', '[[Ya|teal]] llegó. (already)', '[[Todavía no|teal]] llegó. (not yet)'],
            ['¿Sigue? (is it still true?)', '[[Todavía|violet]] vive aquí. (still)', '[[Ya no|violet]] vive aquí. (no longer)'],
          ], note: 'Mira la cruz: **ya** ↔ **todavía no** y **todavía** ↔ **ya no**. Al decir «no», las dos palabras cambian de lugar.' },
          { kind: 'decide', title: '¿Qué palabra uso? · Which word?', steps: [
            { q: '¿Dices o preguntas si una acción esperada pasó? (has it happened?)', yes: 'Sí pasó → **ya**. No pasó → **todavía no**: «Ya llegó Hugo», «Todavía no llegó Paula».', no: 'next' },
            { q: '¿Hablas de una situación de antes: sigue o terminó? (still or no longer?)', yes: 'Sigue → **todavía**. Terminó → **ya no**: «Todavía vivo aquí», «Ya no vivo allí».', no: 'next' },
            { q: '¿Hablas de un día terminado o de otra época? (a finished day or another period?)', yes: 'Un día terminado → **ayer**, anoche + indefinido. Otra época → **antes** + imperfecto (paso siguiente).', no: 'Lee la frase otra vez: ¿acción esperada, situación que sigue o momento del pasado?' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hugo vivía en Zapopan; ahora vive en el centro. Hugo ___ vive en Zapopan.', options: ['todavía no', 'todavía', 'ya no'], answer: 2, why: 'Antes sí, ahora no: **ya no**.', en: 'Hugo used to live in Zapopan; now he lives downtown. Hugo no longer lives in Zapopan.' },
            { prompt: 'Valeria empezó en el hotel en 2017 y hoy trabaja allí. Valeria ___ trabaja en el hotel.', options: ['ya', 'ya no', 'todavía'], answer: 2, why: 'La situación de antes continúa: **todavía** (still).', en: 'Valeria started at the hotel in 2017 and works there today. She still works at the hotel.' },
            { prompt: '—¿Todavía tienes tu coche viejo? —No, ___. Lo vendí el año pasado.', options: ['todavía no', 'ayer', 'ya no'], answer: 2, why: 'Antes tenía el coche, ahora no: **ya no**. «Todavía no» es para algo que no pasó y se espera.', en: '—Do you still have your old car? —No, not any more. I sold it last year.' },
          ] },
        ] },
        { title: 'Ayer y antes · Yesterday and before', mascot: '/brand/mascot/speaking.webp', coach: 'Un día o una época. A day or a period.', blocks: [
          { kind: 'compare', title: 'Dos maneras de mirar atrás · Two ways of looking back', columns: [
            { tone: 'orange', label: 'AYER · un día terminado', sentence: '[[Ayer|orange]] Elena llamó a Valeria.', idea: 'Un día concreto que ya terminó: indefinido (llamó, fui, llegó), en todas las variedades.', en: 'Yesterday Elena called Valeria.' },
            { tone: 'blue', label: 'ANTES · otra época', sentence: '[[Antes|blue]] los amigos se veían cada semana; [[ahora|blue]] casi no se ven.', idea: 'Una época pasada, diferente de ahora: imperfecto (vivía, trabajaba), como con «solía» (clase 052).', en: 'The friends used to see each other every week; now they hardly ever meet.' },
          ] },
          { kind: 'table', title: 'Palabras para el pasado · Past time words', head: ['Marcador', 'Tiempo verbal', 'Ejemplo'], rows: [
            ['[[ayer|orange]] (yesterday) · [[anoche|orange]] (last night) · [[anteayer|orange]] (the day before yesterday)', 'indefinido', 'Anoche Rodrigo compró el hielo.'],
            ['[[el sábado pasado|orange]] · [[la semana pasada|orange]] (last Saturday · last week)', 'indefinido', 'La semana pasada Valeria invitó a todos.'],
            ['[[antes|blue]] (before, in the past) … [[ahora|blue]] (now)', 'imperfecto … presente', 'Antes Paula vivía cerca; ahora vive lejos.'],
          ], note: '**Anteayer** también se dice **antes de ayer**. En la conversación, en México y en otros países de América, también se oye **antier**.' },
          { kind: 'tip', icon: '💡', title: '«Antes» solo · “Antes” on its own', text: 'Hoy usas **antes** solo: «Antes vivía en Zapopan» (in the past). **Antes** también puede significar «más temprano»: «Hugo llegó antes» (earlier). En la clase 054 vas a ver **antes de** + algo: «antes de la cena», «antes de salir».', en: 'Today you use antes on its own: “Antes vivía en Zapopan” (I used to live in Zapopan). Antes can also mean “earlier”: “Hugo llegó antes”. In class 054 you will see antes de + something: “before dinner”, “before going out”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ por la tarde, Valeria compró flores para la mesa.', options: ['Todavía', 'Ayer', 'Antes'], answer: 1, why: 'Un día concreto y terminado + un hecho (compró): **ayer**.', en: 'Yesterday afternoon Valeria bought flowers for the table.' },
            { prompt: '___ los amigos jugaban a las cartas todos los viernes; ahora casi no se ven.', options: ['Ayer', 'Antes', 'Ya'], answer: 1, why: 'Una costumbre de otra época, en imperfecto, contra «ahora»: **antes**.', en: 'The friends used to play cards every Friday; now they hardly ever see each other.' },
            { prompt: 'Anoche Rodrigo ___ el hielo para la fiesta.', options: ['compró', 'compra', 'compraba'], answer: 0, why: '«Anoche» es un momento terminado y comprar el hielo es un hecho completo: **compró**.', en: 'Last night Rodrigo bought the ice for the party.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Not yet = todavía no.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿la palabra, el orden o el tiempo del verbo? Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: la palabra, el orden o el tiempo del verbo. Toca para ver la corrección. (The word, the order or the tense?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: '—¿Ya llegó Paula? —No, ya no.', right: '—¿Ya llegó Paula? —No, todavía no.', why: 'Not yet es **todavía no**. «Ya no» es no longer: algo que antes pasaba y ahora no.' },
            { wrong: 'No todavía he terminado.', right: 'Todavía no he terminado. · No he terminado todavía.', why: 'El orden es **todavía no** + verbo, o **no** + verbo + **todavía**. (Not “no todavía” before the verb.)' },
            { wrong: 'Hugo todavía vive en Zapopan: ahora vive en el centro.', right: 'Hugo ya no vive en Zapopan: ahora vive en el centro.', why: 'La situación de antes terminó: **ya no**. «Todavía» dice que continúa (still).' },
            { wrong: 'Ayer he hablado con Elena.', right: 'Ayer hablé con Elena.', why: 'Con **ayer**, la norma de todas las variedades es el indefinido (clase 051).' },
            { wrong: 'Antes vivo en Puebla; ahora vivo en Guadalajara.', right: 'Antes vivía en Puebla; ahora vivo en Guadalajara.', why: '«Antes» habla de otra época: el verbo va en pasado, normalmente en imperfecto (vivía).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Todavía vives con tus padres? —No, ___. Ahora vivo solo.', options: ['todavía no', 'ya no', 'no todavía'], answer: 1, why: 'Antes vivía con sus padres, ahora no: **ya no**.', en: '—Do you still live with your parents? —No, not any more. Now I live on my own.' },
            { prompt: 'Son las ocho y Paula ___ llegó.', options: ['no todavía', 'todavía no', 'todavía'], answer: 1, why: 'La acción no pasó, pero se espera: **todavía no** + verbo.', en: 'It’s eight o’clock and Paula hasn’t arrived yet.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice cuatro frases reales: una cosa que ya hizo hoy, una que todavía no, una que todavía hace como antes y una que ya no hace. Tú preguntas cada vez: «¿Pasó o sigue?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El primer invitado', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Llega Hugo · Hugo arrives', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Hugo y tu alumno es Valeria. Después tu alumno toca cada palabra marcada y dice qué idea expresa: ¿pasó?, ¿sigue?, ¿un día?, ¿otra época?', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada y di: ¿pasó?, ¿sigue?, ¿un día terminado?, ¿otra época? (Has it happened? Is it still true? A finished day? Another period?)' } },
          { kind: 'explore', title: '¡Eres el primero!', setting: 'Sábado, ocho de la noche, en casa de Valeria, en Guadalajara (México). Llega Hugo, el primer invitado. Hugo y Valeria estudiaron Turismo juntos y se tratan de tú. (Saturday, 8 pm, at Valeria’s home in Guadalajara, Mexico. Hugo, the first guest, arrives. They studied Tourism together.)', lines: [
            { who: 'Valeria', text: '¡Hugo, qué alegría! Pasa, pasa. Eres el primero: [[todavía no|teal]] llegó nadie.', en: 'Hugo, how lovely! Come in, come in. You’re the first one: nobody has arrived yet.' },
            { who: 'Hugo', text: '¿En serio? ¡Qué raro! [[Antes|blue]] yo siempre llegaba tarde a todo.', en: 'Really? How strange! I always used to be late for everything.' },
            { who: 'Valeria', text: '¡Es verdad! ¿Y [[todavía|violet]] vives en Zapopan?', en: 'That’s true! And do you still live in Zapopan?' },
            { who: 'Hugo', text: 'No, [[ya no|violet]]. Ahora vivo en el centro, cerca de mi trabajo. ¿Y tú? ¿[[Todavía|violet]] trabajas en el hotel?', en: 'No, not any more. Now I live downtown, near work. And you? Do you still work at the hotel?' },
            { who: 'Valeria', text: 'Sí, [[todavía|violet]] trabajo allí, pero ahora soy la gerente.', en: 'Yes, I still work there, but now I’m the manager.' },
            { who: 'Hugo', text: '¡Felicidades! Oye, ¿[[ya|teal]] hablaste con Elena? ¿Viene?', en: 'Congratulations! Hey, have you talked to Elena yet? Is she coming?' },
            { who: 'Valeria', text: 'Sí, viene. [[Ayer|orange]] me llamó desde el aeropuerto: llegó de Madrid por la mañana.', en: 'Yes, she’s coming. Yesterday she called me from the airport: she flew in from Madrid in the morning.' },
            { who: 'Hugo', text: '¡Qué bien! ¿Y Paula?', en: 'Great! And Paula?' },
            { who: 'Valeria', text: '[[Todavía no|teal]] me contestó. [[Antes|blue]] vivía muy cerca de aquí, pero ahora vive en Tlaquepaque, un poco lejos.', en: 'She hasn’t answered me yet. She used to live very close to here, but now she lives in Tlaquepaque, a bit far away.' },
            { who: 'Hugo', text: 'Bueno, ¿te ayudo con algo? ¿[[Ya|teal]] preparaste la mesa?', en: 'Well, can I help with anything? Have you set the table yet?' },
            { who: 'Valeria', text: 'Sí, [[ya|teal]] está todo listo. Bueno, [[todavía no|teal]] puse la música…', en: 'Yes, everything’s ready now. Well, I haven’t put the music on yet…' },
            { who: 'Hugo', text: '¡Yo la pongo! [[Antes|blue]] bailábamos cumbia en todas las fiestas, ¿te acuerdas?', en: 'I’ll do it! We used to dance cumbia at every party, remember?' },
          ], notes: {
            'todavía no': 'Not yet: la acción no pasó, pero se espera. Valeria usa el indefinido (llegó, puse), frecuente en México; en España es frecuente «todavía no ha llegado nadie».',
            'Antes': 'Otra época, diferente de ahora. Va con imperfecto: **llegaba**, **vivía**, **bailábamos**. Muchas veces contrasta con «ahora».',
            'todavía': 'Still: la situación de antes **continúa**. «¿Todavía vives…?» «Sí, todavía trabajo allí».',
            'ya no': 'No longer: antes sí, ahora no. Hugo vivía en Zapopan; ahora vive en el centro.',
            'Todavía': 'Still, en una pregunta: ¿la situación de antes continúa? Respuesta: «Sí, todavía…» o «No, ya no».',
            'ya': 'En la pregunta («¿ya hablaste…?») pide un sí o un no sobre una acción esperada. En «ya está todo listo», la situación esperada ya es una realidad.',
            'Ayer': 'Un día terminado: con ayer, el indefinido (**llamó**, **llegó**), en todas las variedades.',
            'Todavía no': 'Not yet, al principio de la frase: Paula no contestó, pero Valeria espera su respuesta.',
            'Ya': '¿Ya…? pregunta si una acción esperada pasó. Respuesta: «Sí, ya…» o «No, todavía no».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Dónde vive Hugo ahora?', options: ['En Zapopan.', 'En Tlaquepaque.', 'En el centro.'], answer: 2, why: '«No, ya no. Ahora vivo en el centro, cerca de mi trabajo».', en: 'Where does Hugo live now?' },
            { prompt: '¿Valeria trabaja todavía en el hotel?', options: ['No, ya no trabaja allí.', 'Todavía no: empieza el lunes.', 'Sí, y ahora es la gerente.'], answer: 2, why: '«Sí, todavía trabajo allí, pero ahora soy la gerente».', en: 'Does Valeria still work at the hotel?' },
            { prompt: '¿Qué cosa todavía no hizo Valeria?', options: ['Preparar la mesa.', 'Poner la música.', 'Hablar con Elena.'], answer: 1, why: '«Ya está todo listo. Bueno, todavía no puse la música».', en: 'What hasn’t Valeria done yet?' },
          ] },
        ] },
        { title: '¿Qué idea es? · Which idea is it?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases de la fiesta · Sentences from the party', categories: [
            { id: 'pasa', label: 'YA · TODAVÍA NO · ¿pasó?', tone: 'teal' },
            { id: 'sigue', label: 'TODAVÍA · YA NO · ¿sigue?', tone: 'violet' },
            { id: 'ayer', label: 'AYER · un día terminado', tone: 'orange' },
            { id: 'antes', label: 'ANTES · otra época', tone: 'blue' },
          ], items: [
            { text: 'Todavía no llegó nadie.', answer: 'pasa', why: 'Una acción esperada que no pasó: todavía no.' },
            { text: 'Hugo ya no vive en Zapopan.', answer: 'sigue', why: 'Una situación de antes que terminó: ya no.' },
            { text: 'Ayer Elena llegó de Madrid.', answer: 'ayer', why: 'Un día terminado + un hecho en indefinido.' },
            { text: 'Antes Hugo siempre llegaba tarde.', answer: 'antes', why: 'Una costumbre de otra época, en imperfecto.' },
            { text: 'Valeria todavía trabaja en el hotel.', answer: 'sigue', why: 'La situación continúa: todavía.' },
            { text: '¿Ya preparaste la mesa?', answer: 'pasa', why: 'Pregunta si una acción esperada pasó: ¿ya…?' },
            { text: 'Antes bailaban cumbia en todas las fiestas.', answer: 'antes', why: 'Otra época, con imperfecto: bailaban.' },
            { text: 'Ayer Elena llamó a Valeria desde el aeropuerto.', answer: 'ayer', why: 'Un hecho de un día terminado: llamó.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y tú? ¿Todavía vives en la misma casa que hace cinco años?» (five years ago). Tu alumno responde con «Sí, todavía…» o «No, ya no. Antes vivía en…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Ya ↔ todavía no. Todavía ↔ ya no.',
      steps: [
        { title: 'La lista de Valeria · Valeria’s list', blocks: [
          { kind: 'choice', items: [
            { context: 'Las seis de la tarde. Valeria mira su lista. (6 pm. Valeria checks her list.)', prompt: 'Las flores: ___ las compré esta mañana.', options: ['ya no', 'ya', 'todavía'], answer: 1, why: 'La acción esperada pasó (esta mañana): **ya**.', en: 'The flowers: I already bought them this morning.' },
            { context: 'Las seis de la tarde. Valeria mira su lista. (6 pm. Valeria checks her list.)', prompt: 'El postre: ___ lo preparé. ¡Necesito una hora más!', options: ['todavía no', 'ya no', 'ya'], answer: 0, why: 'No pasó, pero va a pasar en una hora: **todavía no**.', en: 'The dessert: I haven’t made it yet. I need one more hour!' },
            { context: 'Valeria piensa en sus amigos. (Valeria thinks about her friends.)', prompt: 'Marcos ___ vive en Guadalajara: ahora vive en Monterrey.', options: ['ya no', 'todavía', 'todavía no'], answer: 0, why: 'Antes vivía en Guadalajara, ahora no: **ya no**.', en: 'Marcos no longer lives in Guadalajara: now he lives in Monterrey.' },
            { context: 'Valeria piensa en sus amigos. (Valeria thinks about her friends.)', prompt: 'Sofía ___ vive en la misma casa, con el mismo perro. ¡No cambió nada!', options: ['ya', 'ya no', 'todavía'], answer: 2, why: 'Nada cambió: la situación continúa, **todavía**.', en: 'Sofía still lives in the same house, with the same dog. Nothing has changed!' },
            { context: 'Rodrigo cuenta su día de ayer. (Rodrigo talks about yesterday.)', prompt: '___ por la noche compré el hielo y los refrescos.', options: ['Ya no', 'Todavía', 'Ayer'], answer: 2, why: 'Un día terminado + hechos en indefinido (compré): **ayer**.', en: 'Yesterday evening I bought the ice and the soft drinks.' },
          ] },
        ] },
        { title: '¿Pasó o sigue? · Has it happened, or is it still true?', blocks: [
          { kind: 'classify', title: 'Dos preguntas diferentes · Two different questions', categories: [
            { id: 'pasa', label: 'YA · TODAVÍA NO · ¿pasó la acción? (already · not yet)', tone: 'teal' },
            { id: 'sigue', label: 'TODAVÍA · YA NO · ¿sigue la situación? (still · no longer)', tone: 'violet' },
          ], items: [
            { text: 'Rodrigo ya salió de su casa.', answer: 'pasa', why: 'Una acción esperada que ya pasó.' },
            { text: 'Paula todavía trabaja los sábados.', answer: 'sigue', why: 'Una situación de antes que continúa.' },
            { text: 'Marcos todavía no contestó el mensaje.', answer: 'pasa', why: 'Una acción esperada que no pasó.' },
            { text: 'Hugo ya no fuma.', answer: 'sigue', why: 'Antes fumaba, ahora no: la situación terminó.' },
            { text: '¿Ya pusiste los vasos en la mesa?', answer: 'pasa', why: 'Pregunta si una acción esperada pasó.' },
            { text: '¿Todavía hablas francés?', answer: 'sigue', why: 'Pregunta si una situación de antes continúa.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Valeria todavía no ha puesto la música.', ok: true, why: 'Correcta: todavía no + perfecto, frecuente en España. En México es frecuente «todavía no puso la música». Las dos están bien.' },
            { sentence: 'Marcos no todavía contestó.', ok: false, options: ['Marcos todavía no contestó.', 'Marcos no todavía ha contestado.', 'Marcos todavía contestó no.'], answer: 0, why: 'El orden es **todavía no** + verbo.' },
            { sentence: '¿Todavía estudias inglés? —No, todavía no. Lo dejé el año pasado.', ok: false, options: ['¿Todavía estudias inglés? —No, ya. Lo dejé el año pasado.', '¿Todavía estudias inglés? —Sí, todavía no. Lo dejé el año pasado.', '¿Todavía estudias inglés? —No, ya no. Lo dejé el año pasado.'], answer: 2, why: 'Antes estudiaba, ahora no: **ya no**. «Todavía no» es para algo que no pasó y se espera.' },
            { sentence: 'Anteayer Hugo ha llamado a Valeria.', ok: false, options: ['Anteayer Hugo llamaba a Valeria.', 'Anteayer Hugo llamó a Valeria.', 'Anteayer Hugo llama a Valeria.'], answer: 1, why: 'Anteayer es un día terminado: un hecho en indefinido, en todas las variedades.' },
            { sentence: 'Antes Paula vivía a cinco minutos de Valeria.', ok: true, why: 'Correcta: antes + imperfecto para una situación de otra época.' },
          ] },
        ] },
        { title: 'Los mensajes de las siete y media · The 7:30 messages', blocks: [
          { kind: 'chat-fill', title: 'Valeria y Rodrigo, por mensaje · Valeria and Rodrigo, texting', lines: [
            { who: 'Rodrigo', text: 'Hola, Valeria. ¿Qué tal todo? ¿___ terminaste la comida?', options: ['Ya no', 'Todavía', 'Ya'], answer: 2, why: 'Rodrigo pregunta si una acción esperada pasó: ¿ya…?' },
            { who: 'Valeria', text: 'Sí, la comida ___ está lista. ¡Y la mesa también!', options: ['ya no', 'todavía no', 'ya'], answer: 2, why: 'Lo esperado ya es una realidad: **ya** está lista.' },
            { who: 'Rodrigo', text: 'Perdón, yo ___ salí del trabajo. Llego a las ocho y media.', options: ['no todavía', 'todavía no', 'ya no'], answer: 1, why: 'No salió, pero va a salir: **todavía no** + verbo.' },
            { who: 'Valeria', text: 'No pasa nada. Oye, ¿Marcos viene?' },
            { who: 'Rodrigo', text: 'No, Marcos ___ vive en Guadalajara: se fue a Monterrey en marzo.', options: ['todavía no', 'todavía', 'ya no'], answer: 2, why: 'Antes vivía en Guadalajara, ahora no: **ya no**.' },
            { who: 'Valeria', text: '¡Qué pena! ___ siempre venía a todas las fiestas.', options: ['Antes', 'Ayer', 'Todavía'], answer: 0, why: 'Una costumbre de otra época, en imperfecto (venía): **antes**.' },
            { who: 'Rodrigo', text: 'Sí… Bueno, ___ hablé con él por teléfono y te manda saludos.', options: ['todavía no', 'ayer', 'todavía'], answer: 1, why: 'Un hecho de un día terminado (hablé): **ayer**.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Todavía', 'no', 'llegó', 'Paula'], accept: ['Todavía no llegó Paula', 'Paula todavía no llegó', 'Paula no llegó todavía'], en: 'Paula hasn’t arrived yet.' },
            { tiles: ['ya', 'Hugo', 'no', 'vive', 'en', 'Zapopan'], accept: ['Hugo ya no vive en Zapopan'], en: 'Hugo no longer lives in Zapopan.' },
            { tiles: ['¿Ya', 'pusiste', 'los', 'vasos?'], accept: ['¿Ya pusiste los vasos?'], en: 'Have you put the glasses out yet?' },
            { tiles: ['Antes', 'cumbia', 'bailábamos', 'todos', 'los', 'sábados'], accept: ['Antes bailábamos cumbia todos los sábados', 'Antes todos los sábados bailábamos cumbia'], en: 'We used to dance cumbia every Saturday.' },
          ] },
        ] },
        { title: 'Cambia la frase · Change the sentence', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'rewrite', title: 'Ya, todavía, antes · Already, still, before', items: [
            { prompt: 'Valeria: «Ya preparé el postre».', instruction: 'Escribe lo contrario: la acción no pasó. Empieza con «Todavía».', accept: ['Todavía no preparé el postre', 'Todavía no he preparado el postre'] },
            { prompt: 'Sofía: «Todavía toco la guitarra». (→ ahora no)', instruction: 'Ahora Sofía no toca la guitarra. Escribe la frase con «ya no». Empieza con «Ya».', accept: ['Ya no toco la guitarra', 'Ya no toco la guitarra ahora'] },
            { prompt: 'Paula: «Ahora vivo lejos del centro». (antes → cerca del centro)', instruction: 'Di cómo era antes, en imperfecto. Empieza con «Antes».', accept: ['Antes vivía cerca del centro', 'Antes yo vivía cerca del centro'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno compara su vida de hace cinco años (five years ago) con su vida de ahora en cuatro frases: una con antes, una con todavía, una con ya no y una con ayer.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Paula', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Paula llega tarde · Paula is running late', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿dónde está Paula?). Segunda escucha: tu alumno levanta la mano cada vez que oye ya, ya no, todavía, antes o ayer. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta cuántas veces oyes ya, todavía, antes y ayer. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Paula', channel: 'MENSAJE DE VOZ · DE PAULA PARA VALERIA', src: '/audio/grammar-live/353.mp3',
            before: 'Son las ocho y cuarto y Paula todavía no llegó. Valeria recibe un mensaje de voz de ella. ¿Qué crees que dice? ¿Dónde está? (It’s a quarter past eight and Paula hasn’t arrived yet. Valeria gets a voice message from her. What do you think she says? Where is she?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Paula no puede ir a la cena.', 'Paula llega tarde: está en el coche y hay mucho tráfico.', 'Paula pide a Valeria comprar un pastel.'], answer: 1, why: '«Ya salí de la oficina, pero todavía estoy en el coche: hay muchísimo tráfico».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Dónde está Paula ahora?', options: ['En el coche.', 'En la oficina.', 'En la pastelería.'], answer: 0, why: '«Ya salí de la oficina, pero todavía estoy en el coche».', en: 'Where is Paula now?' },
              { prompt: '¿Dónde vive Paula ahora?', options: ['En Tlaquepaque.', 'En el centro.', 'A cinco minutos de Valeria.'], answer: 0, why: '«Antes vivía a cinco minutos de tu casa… Ahora vivo en Tlaquepaque».', en: 'Where does Paula live now?' },
              { prompt: '¿Qué pregunta Paula?', options: ['Si Hugo todavía vive en Zapopan.', 'A qué hora empieza la cena.', 'Si Elena ya llegó.'], answer: 2, why: '«Oye, ¿ya llegó Elena?».', en: 'What does Paula ask?' },
              { prompt: '¿Cuándo compró Paula el pastel?', options: ['Todavía no lo compró.', 'Ayer.', 'Hoy por la tarde.'], answer: 1, why: '«Ya tengo el pastel, lo compré ayer en la pastelería de la esquina».', en: 'When did Paula buy the cake?' },
            ],
            transcript: 'Hola, Valeria, soy Paula. ¡Perdón! [[Ya|teal]] salí de la oficina, pero [[todavía|violet]] estoy en el coche: hay muchísimo tráfico en la avenida. Hoy trabajé toda la tarde en un informe urgente. [[Antes|blue]] vivía a cinco minutos de tu casa, ¿te acuerdas? Llegaba caminando. Ahora vivo en Tlaquepaque y [[ya no|violet]] es tan fácil. Oye, ¿[[ya|teal]] llegó Elena? Tengo muchas ganas de verla. Ah, y no te preocupes por el postre: [[ya|teal]] tengo el pastel, lo compré [[ayer|orange]] en la pastelería de la esquina. Creo que llego en media hora. ¡Nos vemos en un ratito! Un beso.',
            reply: { teacher: 'Tú eres Paula. Tu alumno es Valeria y responde al mensaje con tres frases: quién ya llegó, quién todavía no y algo sobre el pastel.', self: 'Responde a Paula en voz alta como Valeria: quién ya llegó, quién todavía no y algo sobre el pastel. (Answer as Valeria: who is already there, who isn’t yet, and something about the cake.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Antes y ahora', coach: '¿Qué cambió? ¿Qué sigue igual? What changed?',
      steps: [
        { title: 'Un reencuentro · Catching up', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas como un viejo amigo de tu alumno. Tu alumno habla de su vida real. Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Imagina que encuentras a un viejo amigo. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Imagine you meet an old friend. Answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Dónde vivías antes y dónde vives ahora? · Where did you use to live, and where do you live now?', followUps: ['¿Todavía vas a tu barrio de antes? (Do you still go to your old neighbourhood?)', '¿Qué te gusta más: antes o ahora? (Which do you like more: then or now?)'], phrases: ['[[Antes|blue]] vivía en…', '[[Ahora|blue]] vivo en…', '[[Todavía|violet]] voy a… / [[Ya no|violet]] voy a…'], hint: 'Antes + imperfecto (vivía); ahora + presente (vivo).', example: 'Antes vivía con mis padres en un pueblo pequeño. Ahora vivo sola en la ciudad. Todavía voy al pueblo algunos domingos.', next: 'Ahora, lo que cambió.', teacher: 'Cuenta tú también: «Antes yo vivía en…». Así tu alumno oye otra vez antes + imperfecto.' },
            { q: '¿Qué cosas todavía haces como antes? ¿Y qué cosas ya no haces? · What do you still do? What don’t you do any more?', followUps: ['¿Por qué ya no lo haces? (Why don’t you do it any more?)', '¿Quieres hacerlo otra vez? (Do you want to do it again?)'], phrases: ['[[Todavía|violet]] toco… / juego…', '[[Ya no|violet]] salgo… / [[Ya no|violet]] tengo…', '[[Antes|blue]] iba… / salía…'], hint: 'Todavía: sigue igual. Ya no: antes sí, ahora no.', example: 'Todavía toco la guitarra, pero ya no juego al tenis. Antes jugaba todos los sábados, pero ahora no tengo tiempo.', next: 'Ahora, ayer.' },
            { q: '¿Qué hiciste ayer? ¿Y anoche? · What did you do yesterday? And last night?', followUps: ['¿Con quién estuviste? (Who were you with?)', '¿A qué hora volviste a casa? (What time did you get home?)'], phrases: ['[[Ayer|orange]] fui a… / trabajé…', '[[Anoche|orange]] cené… / vi…', '[[Anteayer|orange]]…'], hint: 'Con ayer, anoche y anteayer: indefinido, en todas las variedades.', example: 'Ayer trabajé hasta las seis y después fui al gimnasio. Anoche cené con mi hermana y vimos una película.', next: 'Ahora, tu día de hoy.' },
            { q: '¿Qué cosas ya hiciste hoy y qué cosas todavía no? · What have you already done today, and what not yet?', followUps: ['¿Ya comiste? / ¿Ya has comido? (Have you eaten yet?)', '¿Qué tienes que hacer todavía? (What do you still have to do?)'], phrases: ['[[Ya|teal]] desayuné / [[Ya|teal]] he desayunado.', '[[Todavía no|teal]] llamé a… / [[Todavía no|teal]] he llamado a…', '—¿[[Ya|teal]]…? —No, [[todavía no|teal]].'], hint: 'Para hoy, elige una variedad: ya hice / ya he hecho (clase 051).', example: 'Hoy ya desayuné, ya fui al supermercado y ya terminé un informe. Todavía no llamé a mi madre y todavía no hice la cena.', next: 'Ahora, un juego de papeles.', teacher: 'Responde tú con la otra variedad: «Yo ya he desayunado, pero todavía no he ido al supermercado».' },
            { q: 'Eres Valeria. Llega Rodrigo y pregunta: «¿Todavía trabajas en el hotel? ¿Ya llegaron todos?». Responde. · You are Valeria. Answer Rodrigo.', followUps: ['¿Y Marcos? ¿Todavía vive aquí? (And Marcos? Does he still live here?)', '¿Ya pusiste la música? (Have you put the music on yet?)'], phrases: ['Sí, [[todavía|violet]] trabajo…', 'Hugo [[ya|teal]] llegó, pero Paula [[todavía no|teal]].', 'Marcos [[ya no|violet]] vive…'], hint: 'Recuerda la historia: Hugo ya está en la casa, Paula todavía no, Marcos vive en Monterrey.', example: 'Sí, todavía trabajo en el hotel, pero ahora soy la gerente. Hugo ya llegó, pero Paula todavía no: está en el coche. Marcos ya no vive aquí: ahora vive en Monterrey.', next: 'Ahora, tu español.', teacher: 'Tú eres Rodrigo y sigues: «¿Y Elena? ¿Todavía vive en Madrid?». Después, cambian los papeles.' },
            { q: 'Un compañero pregunta: «¿Ya hablas bien español?». ¿Qué ya sabes hacer y qué todavía no? · What can you already do in Spanish, and what not yet?', followUps: ['¿Qué cosas antes eran difíciles y ahora no? (What used to be hard but isn’t now?)', '¿Todavía estudias con el mismo libro? (Do you still study with the same book?)'], phrases: ['[[Ya|teal]] entiendo… / [[Ya|teal]] sé…', '[[Todavía no|teal]] entiendo…', '[[Antes|blue]] no entendía… y [[ahora|blue]]…'], hint: 'Ya + presente también funciona: «ya entiendo» (I can understand now).', example: 'Ya entiendo series con subtítulos y ya sé contar una historia en pasado. Todavía no entiendo bien las noticias en la radio. Antes no entendía nada, ¡y ahora sí!' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Todavía vives en…?», «¿Ya…?», «¿Qué hiciste ayer?») y tú respondes. Tu alumno dice si tus respuestas hablan de algo que pasó o de algo que sigue.', self: 'Ahora haz tú las preguntas en voz alta («¿Todavía…?», «¿Ya…?», «¿Qué hiciste ayer?») y responde como Hugo. (Now ask the questions aloud and answer as Hugo.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para Marcos', coach: 'Lo que cambió y lo que sigue. What changed and what didn’t.',
      steps: [
        { title: 'Al día siguiente · The next day', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada marcador: ¿ya, todavía no, todavía, ya no, ayer o antes? ¿El tiempo del verbo va bien con él? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después mira cada marcador y su verbo: ayer + indefinido, antes + imperfecto. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Te extrañamos · We missed you', situation: 'Eres Valeria (o eres tú, después de ver a viejos amigos). Escribe un mensaje a Marcos, un amigo de la universidad que ya no vive en Guadalajara y no pudo venir a la cena. Cuéntale la cena de ayer, qué cambió y qué sigue igual. (You are Valeria, or yourself after seeing old friends. Write to Marcos, a university friend who no longer lives in Guadalajara and couldn’t come. Tell him about yesterday’s dinner, what has changed and what is still the same.)', task: [
            'Saluda y cuenta dos cosas de la cena de ayer con el indefinido. (Say hello and tell him two things about yesterday’s dinner.)',
            'Di qué cambió: una frase con antes … ahora y una con ya no. (Say what changed: antes … ahora, and ya no.)',
            'Di qué sigue igual con todavía. (Say what is still the same, with todavía.)',
            'Haz una pregunta a Marcos con ¿Ya…? o ¿Todavía…? y despídete. (Ask Marcos a question with ¿Ya…? or ¿Todavía…? and say goodbye.)',
          ], starters: ['Hola, Marcos:', 'Ayer…', 'Antes… y ahora…', '… ya no…', '… todavía…', '¿Ya…? / ¿Todavía…?', 'Un abrazo,'],
            words: ['ayer', 'anoche', 'antes', 'ahora', 'ya', 'ya no', 'todavía', 'todavía no', 'llegó', 'cenamos', 'bailamos', 'vivía', 'llegaba', 'vive', 'trabaja'],
            model: 'Hola, Marcos: ¿Cómo estás? [[Ayer|orange]] hicimos la cena en mi casa y te extrañamos mucho. Hugo llegó primero. ¡Qué raro! [[Antes|blue]] siempre llegaba tarde, y [[ahora|blue]] es muy puntual. Paula llegó a las nueve porque había mucho tráfico. [[Ya no|violet]] vive cerca de mí: ahora vive en Tlaquepaque. Elena [[todavía|violet]] vive en Madrid, pero vino a Guadalajara de vacaciones. Cenamos tacos, bailamos cumbia y hablamos mucho de la universidad. ¿Y tú? ¿[[Ya|teal]] conoces bien Monterrey? ¿[[Todavía|violet]] tocas la guitarra? Un abrazo, Valeria.',
            minWords: 60,
            checks: [
              { label: 'Un día terminado: ayer, anoche… (a finished day)', pattern: '(?<!\\p{L})(?:ayer|anoche|anteayer)(?!\\p{L})', tip: 'Cuenta la cena con un marcador de día terminado: «Ayer hicimos la cena…».' },
              { label: 'Antes, para otra época (antes = in the past)', pattern: '(?<!\\p{L})antes(?!\\p{L})(?!\\s+de(?!\\p{L}))', tip: 'Compara con otra época: «Antes siempre llegaba tarde, y ahora…».' },
              { label: 'Todavía o ya no (still / no longer)', pattern: '(?<!\\p{L})(?:ya\\s+no|todavía|todavia|aún)(?!\\p{L})', tip: 'Di qué sigue igual y qué cambió: «Elena todavía vive en Madrid», «Paula ya no vive cerca».' },
              { label: 'Una pregunta (a question)', pattern: '¿[^?]+\\?', tip: 'Pregunta algo a Marcos: «¿Ya conoces bien Monterrey?», «¿Todavía tocas la guitarra?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})no\\s+todav[ií]a\\s+\\p{L}', why: 'El orden es **todavía no** + verbo: «todavía no llegó», no «no todavía llegó».' },
              { pattern: '(?<!\\p{L})(?:ayer|anoche|anteayer)\\s+(?:ya\\s+|no\\s+|yo\\s+)?(?:he|has|ha|hemos|han)\\s+\\p{L}+(?:ado|ido|to|cho)(?!\\p{L})', why: 'Con **ayer**, **anoche** y **anteayer**, la norma de todas las variedades es el indefinido: «ayer cenamos», no «ayer hemos cenado».' },
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
            { tone: 'teal', label: 'YA · TODAVÍA NO · ¿pasó?', formula: 'ya + verbo · todavía no + verbo', example: '—¿Ya llegó Hugo? —Sí, ya llegó. —¿Y Paula? —Todavía no.', caption: 'una acción esperada: ya pasó o todavía no', en: 'an expected action: it has already happened, or not yet' },
            { tone: 'violet', label: 'TODAVÍA · YA NO · ¿sigue?', formula: 'todavía + presente · ya no + presente', example: 'Valeria todavía trabaja en el hotel. Hugo ya no vive en Zapopan.', caption: 'una situación de antes: continúa o terminó', en: 'a situation from before: still going on, or over' },
            { tone: 'orange', label: 'AYER · un día terminado', formula: 'ayer · anoche · anteayer · el sábado pasado + indefinido', example: 'Ayer Elena llegó de Madrid.', caption: 'en todas las variedades', en: 'a finished day: indefinido in every variety' },
            { tone: 'blue', label: 'ANTES … AHORA · otra época', formula: 'antes + imperfecto … ahora + presente', example: 'Antes Paula vivía cerca; ahora vive en Tlaquepaque.', caption: 'cómo eran las cosas, diferente de ahora', en: 'how things used to be, different from now' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Dos preguntas, dos parejas. ¿**Pasó** la acción? → **ya** / **todavía no**. ¿**Sigue** la situación? → **todavía** / **ya no**. Not yet es **todavía no**, nunca «ya no». Y para el pasado: **ayer** + indefinido (un día), **antes** + imperfecto (otra época).', en: 'Two questions, two pairs. Has the action happened? → ya / todavía no. Is the situation still true? → todavía / ya no. “Not yet” is todavía no, never “ya no”. And for the past: ayer + indefinido (a day), antes + imperfecto (another period).' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '—¿Ya terminaste el informe? —No, ___. Lo termino mañana.', options: ['todavía no', 'no todavía', 'ya no'], answer: 0, why: 'No pasó, pero va a pasar mañana: **todavía no**.', en: '—Have you finished the report yet? —No, not yet. I’ll finish it tomorrow.' },
            { prompt: 'Mi abuela tiene noventa años y ___ cocina todos los días, como cuando era joven.', options: ['ya no', 'todavía', 'todavía no'], answer: 1, why: 'Sigue igual que antes: **todavía**.', en: 'My grandmother is ninety and still cooks every day, as when she was young.' },
            { prompt: '___ hubo una tormenta y hoy las calles están mojadas.', options: ['Todavía', 'Ya no', 'Anoche'], answer: 2, why: 'Un hecho de un momento terminado (hubo): **anoche**.', en: 'Last night there was a storm and today the streets are wet.' },
            { prompt: 'Antes ___ al trabajo en autobús; ahora voy en bicicleta.', options: ['fui', 'voy', 'iba'], answer: 2, why: 'Antes + una costumbre de otra época: imperfecto, **iba**.', en: 'I used to go to work by bus; now I go by bike.' },
            { prompt: 'Lucas ___ desayunó: no tiene hambre.', options: ['ya', 'no todavía', 'todavía'], answer: 0, why: 'La acción pasó y por eso no tiene hambre: **ya** desayunó.', en: 'Lucas has already had breakfast: he isn’t hungry.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, el trabajo nuevo de Hugo.', blocks: [
          { kind: 'lead', text: 'Un mes después, Hugo empieza en un trabajo nuevo: ahora es profesor en una escuela de turismo. Escribe sus frases con antes, ya no y todavía no.', en: 'A month later, Hugo starts a new job: he is now a teacher at a tourism school. Write his sentences with antes, ya no and todavía no.' },
          { kind: 'rewrite', title: 'El trabajo nuevo de Hugo · Hugo’s new job', items: [
            { prompt: '(Hugo · antes: trabajar en un banco · ahora: trabajar en una escuela)', instruction: 'Escribe la frase de Hugo con yo, en imperfecto. Empieza con «Antes» y termina con «en un banco».', accept: ['Antes trabajaba en un banco', 'Antes yo trabajaba en un banco'] },
            { prompt: 'Hugo: «Ahora no llevo corbata. Antes sí».', instruction: 'Di lo mismo en una frase con «ya no». Empieza con «Ya».', accept: ['Ya no llevo corbata', 'Ya no llevo corbata ahora'] },
            { prompt: 'Hugo: «Ya aprendí los nombres de mis alumnos».', instruction: 'Escribe lo contrario: la acción no pasó. Empieza con «Todavía».', accept: ['Todavía no aprendí los nombres de mis alumnos', 'Todavía no he aprendido los nombres de mis alumnos'] },
          ] },
        ] },
        { title: 'Ampliación: aún, «todavía no llega» y adverbios en -mente · Extension', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Un paso extra, si tienes tiempo. **Aún** (con tilde) significa lo mismo que todavía. Y en México, en la conversación, es muy frecuente **todavía no** + presente para decir not yet: «Paula todavía no llega» = «Paula todavía no llegó».', en: 'An extra step, if you have time. Aún (with an accent) means the same as todavía. And in Mexico, in conversation, todavía no + present is very common for “not yet”: “Paula todavía no llega” = “Paula hasn’t arrived yet”.' },
          { kind: 'tip', icon: '💡', title: 'Más marcadores en -mente · More time words in -mente', text: 'Muchos adverbios se forman con el adjetivo en femenino + **-mente**: reciente → **recientemente** (recently), último → **últimamente** (lately), actual → **actualmente** (currently, nowadays). Si el adjetivo tiene tilde, la conserva: último → últimamente. Atención: **actualmente** no significa actually; significa «ahora, en esta época»: «Antes trabajaba en un banco; actualmente trabajo en una escuela».', en: 'Many adverbs are made with the feminine adjective + -mente: recientemente (recently), últimamente (lately), actualmente (currently, nowadays). If the adjective has a written accent, it keeps it: último → últimamente. Careful: actualmente does not mean “actually”; it means “now, these days”.' },
          { kind: 'choice', title: 'Otras formas · Other forms', items: [
            { prompt: '«Aún no llegó Paula» significa…', options: ['Paula ya no viene.', 'Paula todavía no llegó.', 'Paula llegó antes.'], answer: 1, why: '**Aún** = todavía; **aún no** = todavía no.', en: '“Aún no llegó Paula” means…' },
            { prompt: 'Una amiga de Guadalajara dice: «Son las nueve y Rodrigo todavía no llega». ¿Qué significa?', options: ['Rodrigo no llegó, pero lo esperan.', 'Rodrigo nunca llega a tiempo.', 'Rodrigo ya no viene.'], answer: 0, why: 'En México, «todavía no llega» = «todavía no llegó / no ha llegado»: not yet.', en: 'A friend from Guadalajara says: “It’s nine and Rodrigo still hasn’t arrived”. What does it mean?' },
            { prompt: 'Un correo del hotel: «El cliente ___ ha confirmado la reserva».', options: ['no aún', 'aún no', 'ya no'], answer: 1, why: 'Not yet: **aún no** (= todavía no) + verbo. «Ya no» es no longer, y «no aún» no es el orden correcto.', en: 'An email from the hotel: “The guest has not confirmed the booking yet”.' },
            { prompt: 'Hugo: «Antes trabajaba en un banco; ___ trabajo en una escuela».', options: ['actualmente', 'anteayer', 'todavía no'], answer: 0, why: '**Actualmente** = ahora, en esta época (currently). Contrasta con «antes».', en: 'Hugo: “I used to work at a bank; these days I work at a school”.' },
            { prompt: 'El adverbio en -mente de «último» es…', options: ['ultimamente', 'últimamente', 'últimomente'], answer: 1, why: 'Femenino + -mente (última → **últimamente**), y conserva la tilde del adjetivo.', en: 'The -mente adverb from “último” is…' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Tu alumno reconoce «aún», «todavía no llega» y los adverbios en -mente; no necesita producirlos todavía.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 054 · Antes de, después de y cuando + indicativo', text: 'Ya sitúas las cosas en el tiempo: «Ayer llegó Elena», «Antes vivía cerca», «Todavía no llegó nadie». En la clase 054 das el paso siguiente: unes dos acciones en una sola frase con **antes de**, **después de** y **cuando**: «Después de cenar, llamé a Ana». Es el paso natural: de «antes» solo pasas a «antes de» + una acción.', en: 'You can now place things in time: “Ayer llegó Elena”, “Antes vivía cerca”, “Todavía no llegó nadie”. In class 054 you take the next step: you join two actions in one sentence with antes de, después de and cuando: “After dinner, I called Ana”. It is the natural next step: from antes on its own to antes de + an action.', href: '/antes-despues-cuando', label: 'Ir a la clase 054' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué ya hiciste esta semana y qué todavía no? ¿Qué hacías antes que ya no haces?». Respuesta esperada: una frase con ya, una con todavía no y una con antes + imperfecto y ya no. Tarea: escribir el mensaje de Escribir a un viejo amigo real.' },
        ] },
      ],
    },
  ],
};
