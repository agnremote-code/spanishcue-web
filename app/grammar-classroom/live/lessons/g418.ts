import type { LiveLesson } from '../types';

/**
 * Lesson 418 · B1 · Discurso referido introductorio: dijo que / pidió que (course unit G118).
 * Builds on G096 (dice que / te pide que + present subjunctive: relaying in the
 * present), G087 (pluscuamperfecto), G103 (condicional) and G083 (indirect
 * questions: no sé dónde). The in-depth B2 class (G146, lesson 233) comes later.
 * Scene: Rumbo Sur, a small travel agency in Lima. On Monday Rocío Vargas tells
 * her colleague Daniel Ortega about Friday's call from a client, Clara Molina,
 * who is travelling in Cusco with her husband Javier; the boss is Elena Quispe.
 * In the voice message (Peruvian voice, tú) Rocío reports Tuesday's calls to Daniel.
 * Content: dijo que + basic tense shifts (presente → imperfecto, indefinido /
 * perfecto → pluscuamperfecto, futuro → condicional, voy a → iba a; imperfecto
 * stays); the shift is optional when the content is still true or pending now;
 * person, possessive and deixis changes (mi → su, aquí → allí, mañana → al día
 * siguiente, hoy → ese día); questions (preguntó si / dónde / cuándo…); past
 * requests with pidió / dijo que + -ra taught only as three fixed chunks
 * (viniera, llamara, hiciera; imperfect subjunctive itself is G128).
 * Ampliación: other reporting verbs (prometió, avisó de que, comunicó) and the
 * oral «preguntó que si». Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 418,
  level: 'B1',
  title: 'Discurso referido introductorio: dijo que / pidió que',
  subtitle: 'Contar en pasado lo que otra persona dijo, preguntó o pidió: «Dijo que estaba cansada», «Me pidió que la llamara».',
  legend: [
    { tone: 'blue', label: 'Verbo para contar · dijo que, preguntó si, pidió que (reporting verb)' },
    { tone: 'teal', label: 'Tiempo que retrocede · estaba, había perdido, volvería, iba a (tense shift)' },
    { tone: 'violet', label: 'Referencia que cambia · su, allí, al día siguiente (person, place, time)' },
    { tone: 'orange', label: 'Petición en pasado · viniera, llamara, hiciera (past request)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Contar lo que alguien dijo', coach: 'Cuando cuentas en pasado, el verbo también va hacia atrás. When you report in the past, the verb moves back too.',
      steps: [
        { title: 'Lunes en la agencia · Monday at the agency', blocks: [
          { kind: 'lead', text: 'Lima, agencia de viajes Rumbo Sur, lunes por la mañana. **Daniel Ortega** vuelve de un viaje de trabajo. Su compañera, **Rocío Vargas**, le cuenta lo que pasó el viernes: llamó una clienta, **Clara Molina**, que está de viaje en Cusco con su marido, Javier. Hoy aprendes a **contar en pasado** lo que otra persona dijo, preguntó o pidió: «Dijo que estaba cansada», «Me pidió que la llamara».', en: 'Lima, Rumbo Sur travel agency, Monday morning. Daniel Ortega is back from a business trip. His colleague, Rocío Vargas, tells him what happened on Friday: a client, Clara Molina, who is travelling in Cusco with her husband Javier, called. Today you learn to report in the past what someone else said, asked or requested: “She said she was tired”, “She asked me to call her”.' },
          { kind: 'guide', text: { teacher: 'Tú lees las palabras de Clara y tu alumno lee la versión de Rocío. Tu alumno dice qué palabras cambian y por qué.', self: 'Lee en voz alta las palabras de Clara y después la versión de Rocío. ¿Qué palabras cambian? (Which words change?)' } },
          { kind: 'compare', title: 'Viernes en Cusco, lunes en Lima · Friday in Cusco, Monday in Lima', columns: [
            { tone: 'neutral', label: 'CLARA · VIERNES, EN CUSCO', sentence: '«Estoy muy cansada y aquí hace mucho frío».', idea: 'Las palabras originales de Clara, por teléfono.', en: '“I’m very tired and it’s very cold here.”' },
            { tone: 'blue', label: 'ROCÍO · LUNES, EN LIMA', sentence: 'Clara [[dijo que|blue]] [[estaba|teal]] muy cansada y que [[allí|violet]] [[hacía|teal]] mucho frío.', idea: 'Rocío lo cuenta tres días después y en otra ciudad: cambian el tiempo del verbo y el lugar.', en: 'Clara said she was very tired and that it was very cold there.' },
            { tone: 'neutral', label: 'CON «DICE QUE» (clase 096)', sentence: 'Clara [[dice que|blue]] está muy cansada.', idea: 'Con el verbo para contar en presente, el tiempo no cambia.', en: 'Clara says she’s very tired.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué cambia en la frase de Rocío?', options: ['El tiempo del verbo y el lugar: estoy → estaba, aquí → allí.', 'Solo el nombre de la ciudad.', 'Nada: es la misma frase.'], answer: 0, why: 'Rocío cuenta en pasado (dijo) desde Lima: está → estaba, hace → hacía, aquí → allí.', en: 'What changes in Rocío’s sentence?' },
            { prompt: '«Clara dice que está cansada». ¿Por qué no cambia «está»?', options: ['Porque «dice» está en presente.', 'Porque Clara es la clienta.', 'Porque es una pregunta.'], answer: 0, why: 'Con «dice que» (presente) no hay cambio de tiempo, como en la clase 096. El cambio llega con «dijo».', en: '“Clara says she’s tired.” Why doesn’t “está” change?' },
          ] },
        ] },
        { title: 'Los tiempos van hacia atrás · Tenses move back', mascot: '/brand/mascot/studying.webp', coach: 'Un paso atrás en el pasado. One step back into the past.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'DIJO QUE + TIEMPO DEL PASADO', question: '¿Qué tiempo uso después de «dijo que»?', en: 'Which tense do I use after “dijo que”?', formula: ['presente → imperfecto · indefinido / perfecto → pluscuamperfecto', 'futuro → condicional · voy a → iba a · imperfecto → no cambia'],
            meaning: 'Cuando el verbo para contar está en **pasado** (dijo, contó, explicó, preguntó), el verbo de la información normalmente da **un paso atrás**: lo que era presente para Clara es pasado para Rocío. Ya conoces todos estos tiempos: el **pluscuamperfecto** (clase 087) y el **condicional** (clase 103).',
            examples: [
              { es: '«Javier [[tiene|teal]] fiebre». → Clara dijo que Javier [[tenía|teal]] fiebre.', en: '“Javier has a temperature.” → Clara said Javier had a temperature.' },
              { es: '«[[Perdí|teal]] mi maleta». → Dijo que [[había perdido|teal]] [[su|violet]] maleta.', en: '“I lost my suitcase.” → She said she had lost her suitcase.' },
              { es: '«[[Volveremos|teal]] el martes». → Dijo que [[volverían|teal]] el martes.', en: '“We’ll come back on Tuesday.” → She said they would come back on Tuesday.' },
            ],
            note: 'Con el indefinido, en la conversación también se oye «Dijo que perdió su maleta», y es correcto. El pluscuamperfecto deja más claro que eso pasó antes de la llamada.' },
          { kind: 'table', title: 'Lo que dijo Clara → lo que cuenta Rocío · What Clara said → what Rocío reports', head: ['Clara (viernes)', 'Rocío (lunes)', 'Cambio · Change'], rows: [
            ['«Estoy cansada».', 'Dijo que [[estaba|teal]] cansada.', 'presente → imperfecto'],
            ['«He llamado al hotel».', 'Dijo que [[había llamado|teal]] al hotel.', 'perfecto → pluscuamperfecto'],
            ['«Perdí mi maleta».', 'Dijo que [[había perdido|teal]] su maleta.', 'indefinido → pluscuamperfecto'],
            ['«Volveremos el martes».', 'Dijo que [[volverían|teal]] el martes.', 'futuro → condicional'],
            ['«Vamos a ir a Machu Picchu».', 'Dijo que [[iban a ir|teal]] a Machu Picchu.', 'voy a → iba a'],
            ['«Antes viajábamos poco».', 'Dijo que antes [[viajaban|teal]] poco.', 'imperfecto → no cambia'],
          ], note: 'Fíjate también en la persona: «volveremos» (nosotros, Clara y Javier) → «volverían» (ellos), porque ahora habla Rocío.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Clara: «Hemos reservado un tour». → Clara dijo que ___ un tour.', options: ['reservarían', 'habían reservado', 'hemos reservado'], answer: 1, why: 'Perfecto → pluscuamperfecto, y la persona cambia: nosotros → ellos (habían reservado).', en: 'Clara said they had booked a tour.' },
            { prompt: 'Clara: «Mañana vamos a ir a Ollantaytambo». → Dijo que al día siguiente ___ a ir a Ollantaytambo.', options: ['vamos', 'irían', 'iban'], answer: 2, why: '«Vamos a ir» → «iban a ir»: el verbo «ir» pasa al imperfecto. «Irían a ir» no se dice.', en: 'She said they were going to go to Ollantaytambo the next day.' },
            { prompt: 'Javier: «Pediré otra habitación». → Javier dijo que ___ otra habitación.', options: ['pidiera', 'pediría', 'pediré'], answer: 1, why: 'Futuro → condicional: pediré → pediría. «Pediré» es la voz de Javier; «pidiera» sería una petición.', en: 'Javier said he would ask for another room.' },
          ] },
        ] },
        { title: '¿Siempre hay que cambiar? · Do you always have to change it?', mascot: '/brand/mascot/standing.webp', coach: 'Si sigue siendo verdad, puedes no cambiar. If it is still true, you may keep the tense.', blocks: [
          { kind: 'compare', title: 'Vivía / vive · Lived / lives', columns: [
            { tone: 'teal', label: 'CAMBIA · lo más frecuente en un relato', sentence: 'Clara [[dijo que|blue]] [[vivía|teal]] en Miraflores.', idea: 'Cuentas lo que dijo. No dices si hoy sigue igual.', en: 'Clara said she lived in Miraflores.' },
            { tone: 'blue', label: 'NO CAMBIA · sigue siendo verdad', sentence: 'Clara [[dijo que|blue]] [[vive|teal]] en Miraflores.', idea: 'Lo dijo antes y tú lo presentas como verdad también ahora.', en: 'Clara said she lives in Miraflores (and she still does).' },
          ] },
          { kind: 'decide', title: '¿Cambio el tiempo? · Do I shift the tense?', steps: [
            { q: '¿El verbo para contar está en pasado (dijo, contó, preguntó)?', yes: 'Pasa a la pregunta siguiente.', no: 'No cambies el tiempo: «Dice que está cansada» (clase 096).' },
            { q: '¿Lo que dijo sigue siendo verdad o todavía no ha pasado?', yes: 'Puedes mantener el tiempo («Dijo que vive en Lima», «Dijo que vuelven el martes») o cambiarlo: las dos opciones son correctas.', no: 'Cambia el tiempo: «Dijo que estaba cansada», «Dijo que volverían el martes».' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Lunes: «vuelven el martes» · Monday: “they’re back on Tuesday”', text: 'Hoy es lunes y Clara vuelve **mañana**, martes. Rocío puede decir «Clara dijo que **vuelven** el martes» (todavía va a pasar) o «que **volverían** el martes». Pero el miércoles, cuando ya volvieron, solo funciona «dijo que **volverían**».', en: 'Today is Monday and Clara is coming back tomorrow, Tuesday. Rocío can say “Clara said they’re coming back on Tuesday” (it still lies ahead) or “that they would come back on Tuesday”. But on Wednesday, when they are already back, only “dijo que volverían” works.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hoy es lunes. El viernes Clara dijo: «Vuelvo el martes». ¿Qué frase NO es correcta hoy?', options: ['Clara dijo que vuelvo el martes.', 'Clara dijo que vuelve el martes.', 'Clara dijo que volvía el martes.'], answer: 0, why: '«Vuelvo» es la voz de Clara: Rocío tiene que decir «vuelve» (todavía no ha pasado) o «volvía».', en: 'Which sentence is NOT correct today?' },
            { prompt: 'Es jueves y Clara ya está en Lima. «Clara dijo que ___ el martes, y así fue».', options: ['volverá', 'vuelvo', 'volvería'], answer: 2, why: 'El martes ya pasó: el futuro de entonces se cuenta con condicional, volvería.', en: '“Clara said she would come back on Tuesday, and she did.”' },
            { prompt: 'Ayer Elena dijo: «Clara es nuestra mejor clienta». Hoy sigue siendo verdad. ¿Qué es posible?', options: ['Solo «Elena dijo que Clara era nuestra mejor clienta».', 'Ninguna de las dos.', 'Las dos: «Elena dijo que Clara es…» y «…que Clara era…».'], answer: 2, why: 'Si sigue siendo verdad, puedes mantener el presente o cambiarlo al imperfecto.', en: 'Yesterday Elena said Clara is our best client. It is still true today. What is possible?' },
          ] },
        ] },
        { title: 'Personas, posesivos y referencias · People, possessives and references', mascot: '/brand/mascot/kneeling.webp', coach: 'Cambia lo que ya no sirve. Change only what no longer works.', blocks: [
          { kind: 'lead', text: 'Rocío no habla desde Cusco ni el viernes: habla desde Lima, el lunes. Por eso cambian también las **personas** (yo → ella), los **posesivos** (mi → su) y las palabras de **lugar y tiempo** que dependen de dónde y cuándo se habla.', en: 'Rocío is not speaking from Cusco or on Friday: she is speaking from Lima, on Monday. So the people (I → she), the possessives (my → her) and the place and time words that depend on where and when you speak also change.' },
          { kind: 'table', title: 'Referencias que suelen cambiar · References that usually change', head: ['Clara, el viernes en Cusco', 'Rocío, el lunes en Lima'], rows: [
            ['yo, **mi** maleta', 'ella, [[su|violet]] maleta'],
            ['**aquí**', '[[allí|violet]] / [[allá|violet]]'],
            ['**hoy**', '[[ese día|violet]]'],
            ['**mañana**', '[[al día siguiente|violet]]'],
            ['**ayer**', '[[el día anterior|violet]]'],
            ['**este** hotel', '[[ese|violet]] hotel'],
          ], note: '«Allá» es muy frecuente en América. Solo cambias lo que ya no sirve: si lo cuentas el mismo día, «hoy» sigue siendo hoy.' },
          { kind: 'tip', icon: '🔑', title: '¿Dónde y cuándo hablas tú? · Where and when are you speaking?', text: 'Antes de contar, piensa **desde dónde y cuándo** hablas. Si Rocío cuenta el viernes por la tarde la llamada de la mañana, dice: «Clara dijo que **mañana** iban a Machu Picchu»: mañana sigue siendo mañana. Si lo cuenta el lunes, dice: «**al día siguiente**» o «**el sábado**».', en: 'Before reporting, think about where and when you are speaking. If Rocío reports the morning call on Friday afternoon, she says “Clara said they were going to Machu Picchu tomorrow”: tomorrow is still tomorrow. If she reports it on Monday, she says “the next day” or “on Saturday”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Clara (viernes): «Hoy he visitado la catedral». Rocío (lunes): «Dijo que ___ había visitado la catedral».', options: ['hoy', 'mañana', 'ese día'], answer: 2, why: 'Para Rocío, el lunes, el viernes ya no es «hoy»: ese día.', en: 'She said she had visited the cathedral that day.' },
            { prompt: 'Clara: «Mi marido está en el hotel». → Clara dijo que ___ marido estaba en el hotel.', options: ['su', 'mi', 'tu'], answer: 0, why: '«Mi» es de Clara; Rocío habla de ella en tercera persona: su marido.', en: 'Clara said her husband was at the hotel.' },
            { prompt: 'Clara, en Cusco: «Aquí llueve mucho». Rocío, en Lima: «Dijo que ___ llovía mucho».', options: ['aquí', 'acá', 'allí'], answer: 2, why: 'Rocío no está en Cusco: aquí → allí.', en: 'She said it was raining a lot there.' },
          ] },
        ] },
        { title: 'Preguntas y peticiones · Questions and requests', mascot: '/brand/mascot/speaking.webp', coach: 'Preguntó si… Pidió que… Asked whether… asked me to…', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PREGUNTÓ SI / PREGUNTÓ DÓNDE', question: '¿Cómo cuento una pregunta?', en: 'How do I report a question?', formula: ['pregunta de sí o no → preguntó si + verbo', 'otras preguntas → preguntó dónde / cuándo / qué / cuánto… + verbo'],
            meaning: 'Para contar una pregunta usas **preguntar**. Si la respuesta es «sí» o «no», el enlace es **si**. Si la pregunta tiene una palabra interrogativa, la mantienes **con tilde**, como en «no sé dónde» (clase 083). El tiempo retrocede igual que con «dijo que».',
            examples: [
              { es: '«¿Pueden cambiar mi vuelo?» → [[Preguntó si|blue]] [[podíamos|teal]] cambiar [[su|violet]] vuelo.', en: '“Can you change my flight?” → She asked whether we could change her flight.' },
              { es: '«¿Dónde está la oficina de la aerolínea?» → [[Preguntó dónde|blue]] [[estaba|teal]] la oficina.', en: '“Where is the airline office?” → She asked where the office was.' },
            ],
            note: '«¿Pueden…?» (ustedes, la agencia) → «podíamos» (nosotros): ahora habla Rocío, que es parte de la agencia.' },
          { kind: 'concept', tone: 'orange', label: 'PIDIÓ QUE + VINIERA, LLAMARA, HICIERA', question: '¿Cómo cuento una petición en pasado?', en: 'How do I report a request in the past?', formula: ['«Llámeme» → me pidió que la llamara', '«Ven temprano» → me pidió que viniera temprano · «Hazlo hoy» → me pidió que lo hiciera ese día'],
            meaning: 'En presente ya sabes decir «me pide que la **llame**» (clase 096). En pasado, «me **pidió** que…» va con otra forma, el **imperfecto de subjuntivo**, que estudiarás en la clase 128. Hoy solo usas tres formas fijas muy frecuentes, iguales para yo y para él / ella: **viniera**, **llamara**, **hiciera**. «Dijo que» + una de estas formas también es una petición: «Me dijo que la llamara».',
            examples: [
              { es: 'Clara [[me pidió que|blue]] la [[llamara|orange]] esa tarde.', en: 'Clara asked me to call her that afternoon.' },
              { es: 'Elena [[le pidió a Daniel que|blue]] [[viniera|orange]] temprano a la oficina.', en: 'Elena asked Daniel to come to the office early.' },
              { es: 'Javier me [[dijo que|blue]] le [[hiciera|orange]] una reserva para el lunes.', en: 'Javier told me to make him a booking for Monday.' },
            ],
            note: 'Verás también la forma en -se (llamase, viniese), con el mismo significado. Las dos formas llegan en la clase 128.' },
          { kind: 'compare', title: 'Dijo que llamaba / dijo que la llamara', columns: [
            { tone: 'teal', label: 'INFORMACIÓN · indicativo', sentence: 'Clara me [[dijo que|blue]] [[llamaba|teal]] por la tarde.', idea: 'Clara iba a llamar: es lo que ella pensaba hacer.', en: 'Clara told me she would call in the afternoon.' },
            { tone: 'orange', label: 'PETICIÓN · -ra', sentence: 'Clara me [[dijo que|blue]] la [[llamara|orange]] por la tarde.', idea: 'Yo tenía que llamarla: es una petición.', en: 'Clara told me to call her in the afternoon.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Javier: «¿Hay ascensor en el hotel?» → Javier preguntó ___ ascensor en el hotel.', options: ['si había', 'que hay', 'qué había'], answer: 0, why: 'Pregunta de sí o no: preguntó si, y hay → había.', en: 'Javier asked whether there was a lift in the hotel.' },
            { prompt: 'Clara: «¿A qué hora sale el tren?» → Clara preguntó ___ salía el tren.', options: ['si a qué hora', 'si', 'a qué hora'], answer: 2, why: 'La pregunta tenía palabra interrogativa: se mantiene, con tilde, sin «si». «Preguntó si salía» cambia la pregunta.', en: 'Clara asked what time the train left.' },
            { prompt: 'Elena a Daniel: «Ven temprano mañana». Daniel, al día siguiente en la oficina: «Elena me pidió que ___ temprano».', options: ['viniera', 'venía', 'vendría'], answer: 0, why: 'Es una petición contada en pasado: pidió que + viniera.', en: '“Elena asked me to come early.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Lee, corrige y explica. Read, correct, explain.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error. Tu alumno dice dónde está el problema y la dice bien. Después aparece la corrección.', self: 'Lee cada frase, busca el error y dila bien en voz alta. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Clara me preguntó que podíamos cambiar el vuelo.', right: 'Clara me preguntó si podíamos cambiar el vuelo.', why: 'Una pregunta de sí o no se cuenta con «si», no con «que». (Yes/no question → si.)' },
            { wrong: 'Hugo dijo que llegaré el jueves.', right: 'Hugo dijo que llegaría el jueves.', why: '«Llegaré» era la voz de Hugo: cambia la persona y el futuro pasa a condicional. (Change person and tense.)' },
            { wrong: 'Elena me pidió que la llamaba.', right: 'Elena me pidió que la llamara.', why: 'Una petición en pasado va con -ra: llamara. «Llamaba» informa. (Request → llamara.)' },
            { wrong: 'Me preguntó donde estaba la oficina.', right: 'Me preguntó dónde estaba la oficina.', why: 'La palabra interrogativa mantiene la tilde también dentro de la frase. (Keep the accent.)' },
            { wrong: '(Una semana después) Clara dijo que mañana iban a Machu Picchu.', right: 'Clara dijo que al día siguiente iban a Machu Picchu.', why: 'Una semana después, «mañana» ya no sirve: al día siguiente. (Adapt the time word.)' },
            { wrong: 'Clara dijo que había perdido mi maleta. (= la maleta de Clara)', right: 'Clara dijo que había perdido su maleta.', why: 'La maleta es de Clara: mi → su. (Adapt the possessive.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['Javier preguntó cuánto costaba la excursión.', 'Javier preguntó que cuanto cuesta la excursión.', 'Javier preguntó si cuánto costaba la excursión.'], answer: 0, why: 'Pregunta con «cuánto»: se mantiene, con tilde y sin «si»; cuesta → costaba.', en: 'Javier asked how much the excursion cost.' },
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['Rocío dijo que Elena la llamara ayer.', 'Rocío dijo que Elena la había llamado el día anterior.', 'Rocío dijo que Elena la llamará ayer.'], answer: 1, why: 'Un hecho anterior al momento en que habló Rocío: pluscuamperfecto (había llamado) y «ayer» → el día anterior.', en: 'Rocío said Elena had called her the day before.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta en pasado tres frases que alguien le dijo ayer: una información («Dijo que…»), una pregunta («Me preguntó si…») y una petición («Me pidió que lo llamara»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La llamada del viernes', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Rocío se lo cuenta a Daniel · Rocío tells Daniel', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Daniel, tu alumno es Rocío. Después tu alumno toca cada expresión marcada y dice qué dijo Clara exactamente.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di qué palabras usó Clara exactamente. (Say Clara’s exact words.)' } },
          { kind: 'explore', title: 'Lunes, nueve de la mañana', setting: 'Agencia Rumbo Sur, Lima. Daniel llega a la oficina y Rocío le cuenta la llamada de Clara Molina del viernes. (Rumbo Sur agency, Lima. Daniel arrives and Rocío tells him about Clara Molina’s call on Friday.)', lines: [
            { who: 'Daniel', text: 'Buenos días, Rocío. ¿Pasó algo importante el viernes?', en: 'Morning, Rocío. Did anything important happen on Friday?' },
            { who: 'Rocío', text: 'Sí, llamó Clara Molina desde Cusco. [[Dijo que|blue]] [[estaba|teal]] agotada y que [[allí|violet]] hacía un frío terrible.', en: 'Yes, Clara Molina called from Cusco. She said she was exhausted and that it was terribly cold there.' },
            { who: 'Daniel', text: '¿Y el viaje? ¿Todo bien?', en: 'And the trip? Everything OK?' },
            { who: 'Rocío', text: 'Más o menos. [[Me contó que|blue]] [[había perdido|teal]] [[su|violet]] maleta en el aeropuerto.', en: 'More or less. She told me she had lost her suitcase at the airport.' },
            { who: 'Daniel', text: '¡Qué mala suerte! ¿Y la encontraron?', en: 'What bad luck! Did they find it?' },
            { who: 'Rocío', text: 'Todavía no. Dijo que [[iban a ir|teal]] a Machu Picchu [[al día siguiente|violet]], o sea, el sábado, y que [[volverían|teal]] a Lima el martes.', en: 'Not yet. She said they were going to go to Machu Picchu the next day, that is, Saturday, and that they would come back to Lima on Tuesday.' },
            { who: 'Daniel', text: '¿Y qué necesitaba de nosotros?', en: 'And what did she need from us?' },
            { who: 'Rocío', text: '[[Me preguntó si|blue]] [[podíamos|teal]] cambiarle el vuelo de vuelta. Y también [[preguntó dónde|blue]] [[quedaba|teal]] la oficina de la aerolínea en Cusco.', en: 'She asked me if we could change her return flight. And she also asked where the airline office was in Cusco.' },
            { who: 'Daniel', text: '¿Y se lo cambiaste?', en: 'And did you change it for her?' },
            { who: 'Rocío', text: 'Sí. Pero [[me pidió que|blue]] la [[llamara|orange]] [[esa misma tarde|violet]] y no pude: estuve en una reunión con Elena.', en: 'Yes. But she asked me to call her that same afternoon and I couldn’t: I was in a meeting with Elena.' },
            { who: 'Daniel', text: 'Entonces la llamo yo ahora. ¿Algo más?', en: 'Then I’ll call her now. Anything else?' },
            { who: 'Rocío', text: 'Sí. Elena dijo que Clara [[es|teal]] nuestra clienta más antigua, así que trátala muy bien.', en: 'Yes. Elena said Clara is our oldest client, so treat her really well.' },
          ], notes: {
            'Dijo que': 'Verbo para contar en **pasado**: el verbo siguiente retrocede. Clara dijo: «Estoy agotada».',
            estaba: '«Estoy» (presente) → **estaba** (imperfecto): Rocío cuenta en pasado y habla de ella.',
            'allí': 'Clara dijo «**aquí**»; Rocío está en Lima, no en Cusco: aquí → allí.',
            'Me contó que': '**Contar que** funciona como «decir que»: también va en pasado y el tiempo retrocede.',
            'había perdido': 'Clara dijo «**Perdí** mi maleta»: indefinido → pluscuamperfecto. Pasó antes de la llamada.',
            su: 'Clara dijo «**mi** maleta»; Rocío habla de ella: mi → su.',
            'iban a ir': '«**Vamos a ir**» → iban a ir: el verbo ir pasa al imperfecto y la persona cambia (nosotros → ellos).',
            'al día siguiente': 'Clara dijo «**mañana**» el viernes. El lunes, ese «mañana» es el sábado: al día siguiente.',
            volverían: '«**Volveremos**» → volverían: futuro → condicional. Como el martes todavía no ha llegado, Rocío también podría decir «vuelven».',
            'Me preguntó si': 'Clara preguntó «**¿Pueden** cambiar mi vuelo?»: pregunta de sí o no → preguntó si.',
            'podíamos': '«Pueden» (ustedes, la agencia) → **podíamos** (nosotros): Rocío es parte de la agencia.',
            'preguntó dónde': 'Clara preguntó «**¿Dónde** queda la oficina?»: la palabra interrogativa se mantiene, con tilde.',
            quedaba: '**Quedar** = estar situado. «Queda» → quedaba: presente → imperfecto.',
            'me pidió que': 'Una **petición** en pasado. Clara dijo «Llámeme esta tarde»: pidió que + llamara.',
            llamara: 'Una de las tres formas fijas de hoy (**viniera, llamara, hiciera**): lo que Rocío tenía que hacer.',
            'esa misma tarde': 'Clara dijo «**esta tarde**». El lunes ya no sirve: esa misma tarde.',
            es: 'Presente sin cambio: Clara **sigue siendo** la clienta más antigua. También sería correcto «era».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué le pasó a Clara en el aeropuerto?', options: ['Perdió el pasaporte.', 'Perdió su maleta.', 'Perdió el vuelo.'], answer: 1, why: '«Me contó que había perdido su maleta en el aeropuerto».', en: 'What happened to Clara at the airport?' },
            { prompt: '¿Por qué Rocío no llamó a Clara el viernes?', options: ['Porque ya había cambiado el vuelo.', 'Porque estaba en una reunión con Elena.', 'Porque Clara no contestaba.'], answer: 1, why: '«No pude: estuve en una reunión con Elena».', en: 'Why didn’t Rocío call Clara on Friday?' },
            { prompt: '«Elena dijo que Clara es nuestra clienta más antigua». ¿Por qué Rocío usa el presente?', options: ['Porque es una pregunta.', 'Porque Clara sigue siendo su clienta más antigua.', 'Porque Elena habla en presente siempre.'], answer: 1, why: 'Si lo que se dijo sigue siendo verdad, el tiempo puede quedarse en presente.', en: 'Why does Rocío use the present tense?' },
          ] },
        ] },
        { title: 'Las notas de Daniel · Daniel’s notes', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Daniel apunta lo que dijeron otros clientes por teléfono el viernes. ¿Cómo va a contar cada frase: con «dijo que», con «preguntó si / dónde…» o con «pidió que»?', en: 'Daniel writes down what other clients said on the phone on Friday. How will he report each sentence: with “dijo que”, with “preguntó si / dónde…” or with “pidió que”?' },
          { kind: 'classify', title: 'Clasifica las frases · Sort the sentences', categories: [
            { id: 'dijo', label: 'DIJO QUE · información', tone: 'teal' },
            { id: 'pregunto', label: 'PREGUNTÓ SI / DÓNDE… · pregunta', tone: 'blue' },
            { id: 'pidio', label: 'PIDIÓ QUE · petición', tone: 'orange' },
          ], items: [
            { text: '«El tren a Puno sale a las seis».', answer: 'dijo', why: 'Da una información: dijo que el tren salía a las seis.' },
            { text: '«¿Hay wifi en el hotel?»', answer: 'pregunto', why: 'Pregunta de sí o no: preguntó si había wifi.' },
            { text: '«Llámeme mañana temprano, por favor».', answer: 'pidio', why: 'Es una petición: pidió que lo llamara.' },
            { text: '«¿Cuánto cuesta la excursión al lago?»', answer: 'pregunto', why: 'Pregunta con «cuánto»: preguntó cuánto costaba.' },
            { text: '«Vamos a cancelar el tour del domingo».', answer: 'dijo', why: 'Informa de un plan: dijo que iban a cancelar el tour.' },
            { text: '«Venga a buscarme a la estación».', answer: 'pidio', why: 'Es una petición: se cuenta con «pidió que» + -ra.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿La persona informa, pregunta o pide algo?». Informa: dijo que. Pregunta: preguntó si / dónde. Pide: pidió que + -ra.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Qué dijo, qué preguntó, qué pidió? What was said, asked, requested?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'El señor Ramos llamó ayer: «Mi esposa está enferma». (Mr Ramos called yesterday.)', prompt: 'Rocío: «El señor Ramos dijo que su esposa ___ enferma».', options: ['estaba', 'estaría', 'estuviera'], answer: 0, why: 'Presente → imperfecto: estaba. «Estaría» sería un futuro; «estuviera», una petición.', en: '“Mr Ramos said his wife was ill.”' },
            { context: 'Los Fuentes escribieron: «Ya hemos pagado el hotel». (The Fuentes family wrote.)', prompt: '«Los Fuentes dijeron que ya ___ el hotel».', options: ['pagarían', 'habían pagado', 'hemos pagado'], answer: 1, why: 'Perfecto → pluscuamperfecto, y nosotros → ellos: habían pagado.', en: '“The Fuentes said they had already paid for the hotel.”' },
            { context: 'Hace dos semanas, Hugo, el guía, dijo: «Llegaré el jueves». (Two weeks ago Hugo, the guide, said this.)', prompt: '«Hugo dijo que ___ el jueves, pero llegó el viernes».', options: ['llegaría', 'llegaré', 'llegara'], answer: 0, why: 'Ese jueves ya pasó: futuro → condicional, llegaría. «Llegara» sería una petición.', en: '“Hugo said he would arrive on Thursday, but he arrived on Friday.”' },
            { context: 'Una clienta preguntó: «¿Aceptan tarjeta?» (A client asked.)', prompt: '«La clienta preguntó ___ aceptábamos tarjeta».', options: ['si', 'que', 'qué'], answer: 0, why: 'Pregunta de sí o no: preguntó si.', en: '“The client asked if we accepted cards.”' },
            { context: 'El señor Ramos a Daniel: «Hágame la reserva hoy, por favor». (Mr Ramos to Daniel.)', prompt: 'Daniel: «El señor Ramos me pidió que le ___ la reserva ese mismo día».', options: ['hiciera', 'hacía', 'haré'], answer: 0, why: 'Petición en pasado: pidió que + hiciera.', en: '“Mr Ramos asked me to make the booking that same day.”' },
          ] },
        ] },
        { title: 'Corrige las frases · Correct the sentences', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La señora Ríos preguntó cuando salía el bus a Paracas.', ok: false, options: ['La señora Ríos preguntó si cuando salía el bus a Paracas.', 'La señora Ríos preguntó que cuando sale el bus a Paracas.', 'La señora Ríos preguntó cuándo salía el bus a Paracas.'], answer: 2, why: 'Pregunta con palabra interrogativa: «cuándo», con tilde y sin «si».' },
            { sentence: 'Hugo me pidió que lo llamaba antes de las cinco.', ok: false, options: ['Hugo me pidió que lo llamaré antes de las cinco.', 'Hugo me pidió que lo llamara antes de las cinco.', 'Hugo me pidió que lo llamo antes de las cinco.'], answer: 1, why: 'Una petición en pasado: pidió que + llamara.' },
            { sentence: 'Los Fuentes dijeron que habían perdido el bus y que llegarían tarde.', ok: true, why: 'Correcta: indefinido → pluscuamperfecto (habían perdido) y futuro → condicional (llegarían).' },
            { sentence: 'Clara dijo que yo volveré a Lima el martes.', ok: false, options: ['Clara dijo que volveré a Lima el martes.', 'Clara dijo que volviera a Lima el martes.', 'Clara dijo que volvería a Lima el martes.'], answer: 2, why: 'Clara habló de sí misma: yo → ella, futuro → condicional. «Volviera» sería una petición.' },
            { sentence: 'El guía nos preguntó si teníamos los billetes.', ok: true, why: 'Correcta: pregunta de sí o no con «si» y presente → imperfecto (tenemos → teníamos).' },
          ] },
        ] },
        { title: 'Daniel informa a Elena · Daniel reports to Elena', blocks: [
          { kind: 'chat-fill', title: 'En el despacho de Elena · In Elena’s office', lines: [
            { who: 'Elena', text: 'Daniel, ¿hablaste con Clara Molina?' },
            { who: 'Daniel', text: 'Sí, esta mañana. Dijo que el viaje ___ precioso, pero muy cansado.', options: ['fuera', 'había sido', 'será'], answer: 1, why: 'Clara dijo «El viaje ha sido precioso»: perfecto → pluscuamperfecto.' },
            { who: 'Elena', text: '¿Y la maleta?' },
            { who: 'Daniel', text: 'Me contó que la aerolínea se la ___ al hotel el domingo.', options: ['había llevado', 'llevaría', 'llevara'], answer: 0, why: 'Clara dijo «Me la llevó el domingo»: algo anterior a la llamada, pluscuamperfecto.' },
            { who: 'Elena', text: '¡Menos mal! ¿Y su marido? ¿Está mejor?' },
            { who: 'Daniel', text: 'Sí, Clara dijo que Javier ya no ___ fiebre.', options: ['tendré', 'tenía', 'tuviera'], answer: 1, why: '«Ya no tiene fiebre» → tenía. Como sigue siendo verdad, «tiene» también sería posible.' },
            { who: 'Elena', text: 'Muy bien. ¿Necesitan algo más?' },
            { who: 'Daniel', text: 'Me preguntó ___ podía tener un asiento de ventana en el vuelo del martes.', options: ['si', 'que', 'cuál'], answer: 0, why: 'Clara preguntó «¿Puedo tener…?»: sí o no, preguntó si.' },
            { who: 'Elena', text: 'Eso es fácil. ¿Algo más?' },
            { who: 'Daniel', text: 'Sí, me pidió que la ___ mañana para confirmar la hora del traslado.', options: ['llamaré', 'llamara', 'llamaba'], answer: 1, why: 'Petición en pasado: pidió que + llamara. «Mañana» no cambia: Daniel habla hoy y la llamada es mañana.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['que', 'Clara', 'cansada.', 'estaba', 'dijo'], accept: ['Clara dijo que estaba cansada.'], en: 'Clara said she was tired.' },
            { tiles: ['si', 'Me', 'el', 'preguntó', 'podíamos', 'vuelo.', 'cambiar'], accept: ['Me preguntó si podíamos cambiar el vuelo.'], en: 'She asked me if we could change the flight.' },
            { tiles: ['pidió', 'Me', 'la', 'que', 'llamara.'], accept: ['Me pidió que la llamara.'], en: 'She asked me to call her.' },
          ] },
        ] },
        { title: 'Cuéntalo en pasado · Report it in the past', blocks: [
          { kind: 'rewrite', title: 'Transforma · Transform', items: [
            { prompt: 'Hugo (el viernes): «Estoy en el hotel y tengo las llaves».', instruction: 'Cuéntalo el lunes: «Hugo dijo que…». (Report it on Monday.)', accept: ['Hugo dijo que estaba en el hotel y que tenía las llaves.', 'Hugo dijo que estaba en el hotel y tenía las llaves.'] },
            { prompt: 'La señora Ríos: «He reservado dos habitaciones».', instruction: 'Cuéntalo: «La señora Ríos dijo que…». (Report it.)', accept: ['La señora Ríos dijo que había reservado dos habitaciones.', 'La señora Ríos dijo que había reservado 2 habitaciones.'] },
            { prompt: 'Javier (hace una semana): «Mañana iremos al lago Titicaca».', instruction: 'Cuéntalo hoy: «Javier dijo que…» y cambia «mañana». (Report it today and change “mañana”.)', accept: ['Javier dijo que al día siguiente irían al lago Titicaca.', 'Javier dijo que irían al lago Titicaca al día siguiente.', 'Javier dijo que al día siguiente iban a ir al lago Titicaca.', 'Javier dijo que iban a ir al lago Titicaca al día siguiente.'] },
            { prompt: 'Un cliente: «¿Dónde está la oficina de turismo?»', instruction: 'Cuéntalo: «Un cliente preguntó…». (Report the question.)', accept: ['Un cliente preguntó dónde estaba la oficina de turismo.'] },
            { prompt: 'Elena a Daniel: «Llámame a las cinco».', instruction: 'Daniel lo cuenta: «Elena me pidió que…». (Daniel reports it.)', accept: ['Elena me pidió que la llamara a las cinco.', 'Elena me pidió que a las cinco la llamara.'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Rocío', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Rocío cuenta las llamadas · Rocío reports the calls', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno apunta quién llamó, qué dijo y qué pidió. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Apunta quién llamó, qué dijo y qué pidió. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Rocío', channel: 'MENSAJE DE VOZ · ROCÍO, AGENCIA RUMBO SUR', src: '/audio/grammar-live/418.mp3',
            before: 'Es martes. Daniel está visitando hoteles en Arequipa y Rocío le manda un audio. ¿Qué noticias crees que le cuenta de Clara? (It is Tuesday. Daniel is visiting hotels in Arequipa and Rocío sends him a voice message. What news about Clara do you think she gives him?)',
            gist: { prompt: '¿Para qué manda Rocío el audio?', options: ['Para pedirle a Daniel que cambie un vuelo.', 'Para invitar a Daniel a una reunión en Arequipa.', 'Para contarle a Daniel dos llamadas de la mañana.'], answer: 2, why: 'Cuenta lo que dijeron Clara y Elena por teléfono esa mañana.', en: 'Why does Rocío send the message?' },
            details: [
              { prompt: '¿Qué dijo Clara de su maleta?', options: ['Que la había perdido otra vez.', 'Que la iba a buscar en Lima.', 'Que por fin la había encontrado.'], answer: 2, why: '«Dijo que por fin había encontrado su maleta».', en: 'What did Clara say about her suitcase?' },
              { prompt: '¿Cuándo iban a llegar Clara y Javier a Lima?', options: ['No antes de las once de la noche.', 'Antes de las once de la noche.', 'Tres horas antes de lo previsto.'], answer: 0, why: '«Me contó que el vuelo tenía tres horas de retraso y que no iban a llegar a Lima antes de las once».', en: 'When were Clara and Javier going to arrive in Lima?' },
              { prompt: '¿Por qué Rocío manda un audio y no llama?', options: ['Porque llamó a Daniel y no contestaba.', 'Porque Elena le pidió que no lo llamara.', 'Porque estaba en una reunión.'], answer: 0, why: '«Me pidió que te llamara, pero no contestabas, así que te dejo este mensaje».', en: 'Why does Rocío send a voice message instead of calling?' },
              { prompt: '¿Dónde va a ser la reunión del jueves?', options: ['En la oficina de la agencia.', 'En el hotel.', 'En Arequipa.'], answer: 0, why: '«Dijo que la reunión sería aquí, en la oficina, no en el hotel».', en: 'Where is Thursday’s meeting going to be?' },
            ],
            transcript: 'Daniel, hola, soy Rocío. Te mando este audio porque sé que hoy estás visitando hoteles en Arequipa. Esta mañana llamó Clara Molina desde el aeropuerto de Cusco. [[Dijo que|blue]] por fin [[había encontrado|teal]] su maleta, ¡qué alivio! Pero también [[me contó que|blue]] el vuelo [[tenía|teal]] tres horas de retraso y que no [[iban a llegar|teal]] a Lima antes de las once de la noche. [[Me preguntó si|blue]] [[podíamos|teal]] cambiarles el traslado al hotel, y ya lo cambié. Después llamó Elena. [[Preguntó cuándo|blue]] [[volverías|teal]] de Arequipa, porque el jueves hay reunión con el nuevo hotel de Paracas. [[Me pidió que|blue]] te [[llamara|orange]], pero no contestabas, así que te dejo este mensaje. Ah, y [[dijo que|blue]] la reunión [[sería|teal]] aquí, en la oficina, no en el hotel. Bueno, eso es todo. Escríbele a Elena cuando puedas. ¡Un abrazo!',
            reply: { teacher: 'Tú eres Elena. Tu alumno, como Daniel, te llama y te cuenta lo que le dijo Rocío en el audio: «Rocío me dijo que…», «Me contó que Clara…».', self: 'Eres Daniel. Cuéntale a Elena en voz alta tres cosas del audio: «Rocío me dijo que…», «Me contó que Clara…». (You are Daniel: report three things aloud.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tú cuentas lo que te dijeron', coach: 'Cuenta en pasado lo que dijeron, preguntaron y pidieron. Report what people said, asked and requested.',
      steps: [
        { title: 'Llamadas, mensajes y favores · Calls, messages and favours', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y las preguntas de seguimiento. Si un tiempo falla, tú repites la frase bien y siguen.', self: 'Lee la situación y responde en voz alta. Antes de hablar, piensa: ¿afirmación, pregunta o petición? (Read the situation and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en una llamada o un mensaje que recibiste la semana pasada. ¿Quién era y qué te dijo? · Think of a call or message you got last week. Who was it and what did they tell you?', followUps: ['¿Te dio alguna buena noticia? (Did they give you any good news?)', '¿Qué planes tenía esa persona? (What plans did that person have?)'], phrases: ['[[Me dijo que|blue]] [[estaba|teal]]…', '[[Me contó que|blue]] [[había|teal]]…', 'Dijo que [[iba a|teal]]… / que [[volvería|teal]]…'], hint: 'Verbo para contar en pasado → el tiempo retrocede: está → estaba, va a → iba a, vendrá → vendría.', example: 'El jueves me llamó mi hermana. Me dijo que estaba muy contenta porque había encontrado trabajo en Quito. Me contó que iba a mudarse en enero y que me invitaría a su casa.', next: 'Ahora, un mensaje desde lejos.' },
            { q: 'Un amigo te escribió desde otro país: «Aquí hace calor, hoy fui a la playa y mañana visito el museo». Cuéntaselo a otra persona unos días después. · A friend wrote to you from abroad. Report it a few days later.', followUps: ['¿Cómo cambias «aquí», «hoy» y «mañana»? (How do you change “aquí”, “hoy” and “mañana”?)', '¿Y si se lo cuentas el mismo día? (And if you tell it the same day?)'], phrases: ['Dijo que [[allí|violet]] [[hacía|teal]]…', 'que [[ese día|violet]] [[había ido|teal]]…', 'y que [[al día siguiente|violet]]…'], hint: 'Cambia solo lo que ya no sirve: aquí → allí, hoy → ese día, mañana → al día siguiente.', example: 'Mi amigo Pablo me escribió desde Cartagena. Dijo que allí hacía mucho calor, que ese día había ido a la playa y que al día siguiente iba a visitar el museo.', next: 'Ahora, las preguntas.' },
            { q: 'Recuerda una entrevista de trabajo, una visita al médico o un control en el aeropuerto. ¿Qué te preguntaron? · Remember a job interview, a doctor’s visit or an airport check. What did they ask you?', followUps: ['¿Qué contestaste? (What did you answer?)', '¿Te hicieron alguna pregunta difícil? (Did they ask you any difficult question?)'], phrases: ['[[Me preguntó si|blue]]…', '[[Me preguntó dónde|blue]] / [[cuánto|blue]] / [[por qué|blue]]…', 'Le dije que…'], hint: 'Pregunta de sí o no → si. Otras preguntas → la palabra interrogativa, con tilde.', example: 'En la entrevista, la directora me preguntó si hablaba inglés y cuántos años había trabajado en ventas. También me preguntó por qué quería cambiar de empresa. Le dije que buscaba algo nuevo.', next: 'Ahora, los favores.' },
            { q: 'Alguien te pidió un favor hace poco: tu jefe, un vecino, tu familia. ¿Qué te pidió? ¿Lo hiciste? · Someone asked you a favour recently. What did they ask? Did you do it?', followUps: ['¿Te gustó hacerlo? (Did you like doing it?)', '¿Y tú qué favor pediste? (And what favour did you ask for?)'], phrases: ['[[Me pidió que|blue]] lo [[llamara|orange]]…', 'Me pidió que [[viniera|orange]]…', 'Me pidió que le [[hiciera|orange]] un favor…'], hint: 'Petición en pasado: pidió que + viniera, llamara, hiciera.', example: 'El lunes mi jefe me pidió que viniera el sábado a la oficina y que lo llamara si tenía algún problema. No me gustó mucho, pero lo hice.', next: 'Ahora, las promesas.' },
            { q: 'Alguien te prometió algo y no lo cumplió: un técnico, un amigo, una tienda. ¿Qué dijo? ¿Qué pasó al final? · Someone promised you something and didn’t keep the promise. What did they say?', followUps: ['¿Qué excusa te dio? (What excuse did they give you?)', '¿Qué hiciste tú? (What did you do?)'], phrases: ['Dijo que [[vendría|teal]]…', 'Dijo que me lo [[enviaría|teal]]…', 'Pero al final…'], hint: 'El futuro de entonces se cuenta con condicional: vendrá → vendría.', example: 'El técnico dijo que vendría el martes a las diez y que arreglaría la lavadora en una hora. Pero al final no vino, y el jueves me dijo que había estado enfermo.', next: 'Para terminar, algo que sigue siendo verdad.' },
            { q: 'Cuenta algo que te dijo un amigo o un compañero hace tiempo y que todavía es verdad. ¿Mantienes el presente o lo cambias? · Report something a friend said long ago that is still true.', followUps: ['¿Y algo que ya no es verdad? (And something that is no longer true?)', '¿Cómo cambia la frase? (How does the sentence change?)'], phrases: ['Me dijo que [[vive|teal]]… (todavía)', 'Me dijo que [[quería|teal]]…', 'Ahora… / Ya no…'], hint: 'Si sigue siendo verdad, puedes mantener el presente; si no, cambia el tiempo.', example: 'Hace un año, un compañero me dijo que quería estudiar Medicina. El mes pasado me contó que ya estudia en la universidad y que le encanta.', teacher: 'Cuando tu alumno lo dice bien, tú le dices una frase nueva («Mañana no vengo a clase») y tu alumno la cuenta como si fuera la semana siguiente.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno te dice tres frases (una información, una pregunta y una petición) y tú las cuentas en pasado; tu alumno revisa si cambiaste bien los tiempos y las referencias.', self: 'Ahora inventa tres frases que te dijo alguien esta semana (una información, una pregunta y una petición) y cuéntalas en voz alta con «dijo que», «preguntó si» y «pidió que». (Invent three sentences and report them aloud.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo a la jefa', coach: 'Cuenta una llamada con claridad. Report a phone call clearly.',
      steps: [
        { title: 'Lo que dijo el cliente · What the client said', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada frase: ¿afirmación, pregunta o petición? ¿Retrocede bien el tiempo? ¿Cambian las referencias? Después tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Mira cada frase: ¿afirmación, pregunta o petición? ¿Cambiaste los tiempos y las referencias? (Write your email and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Correo a Elena · Email to Elena', situation: 'Eres Daniel. Ayer hablaste por teléfono con un cliente, el señor Ramos, que tenía un viaje a Cusco. Escribe un correo a Elena, tu jefa, para contarle qué dijo, qué preguntó y qué pidió. También puedes contar una llamada real de tu semana a un compañero o a tu jefe. (You are Daniel. Yesterday you spoke on the phone with a client. Write an email to your boss reporting what he said, asked and requested. Or report a real call from your week.)', task: [
            'Cuenta dos cosas que dijo el cliente con «dijo que / me contó que» y cambia los tiempos. (Report two statements, shifting the tenses.)',
            'Cuenta una pregunta con «me preguntó si…» y otra con «me preguntó cuándo / dónde / cuánto…». (Report a yes/no question and a question word question.)',
            'Cuenta una petición con «me pidió que» + viniera, llamara o hiciera. (Report a request.)',
            'Adapta una referencia de tiempo o lugar: al día siguiente, allí, ese día… (Adapt a time or place reference.)',
            'Termina con lo que vas a hacer tú. (End with what you are going to do.)',
          ], starters: ['Hola, Elena:', 'Ayer por la tarde me llamó…', 'Dijo que…', 'Me contó que…', 'Me preguntó si…', 'Al final me pidió que…', 'Un saludo,'],
            words: ['dijo que', 'me contó que', 'me preguntó si', 'me preguntó cuánto', 'me pidió que', 'estaba', 'había', 'podrían', 'iban a', 'al día siguiente', 'allí', 'llamara', 'hiciera'],
            model: 'Hola, Elena: Ayer por la tarde me llamó el señor Ramos desde Trujillo. Dijo que su esposa estaba mejor, pero que el médico le había recomendado descansar una semana más. Me contó que por eso no podían viajar a Cusco el viernes y que irían el mes que viene. Me preguntó si podíamos cambiar las fechas sin pagar más y también me preguntó cuánto costaba el seguro de viaje. Le dije que lo consultaría contigo. Al final me pidió que le hiciera una propuesta nueva y que lo llamara al día siguiente, o sea, hoy. Esta tarde lo llamo y te cuento. Un saludo, Daniel',
            minWords: 90,
            checks: [
              { label: 'Una afirmación contada (dijo que, me contó que…)', pattern: '(?<!\\p{L})(?:dijo|dijeron|contó|explicó|comentó)\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «Dijo que su esposa estaba mejor».' },
              { label: 'Una pregunta contada (preguntó si / cuándo / cuánto…)', pattern: '(?<!\\p{L})preguntó\\s+(?:si|qué|cuándo|dónde|cuánto|cuánta|cuántos|cuántas|cómo|quién|cuál|por\\s+qué)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Me preguntó si podíamos cambiar las fechas».' },
              { label: 'Una petición contada (pidió que…)', pattern: '(?<!\\p{L})pidió\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «Me pidió que lo llamara».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})pidió\\s+que\\s+(?:no\\s+)?(?:(?:me|te|le|lo|la|nos|les|los|las)\\s+)?(?:llamaba|llamo|llamaré|venía|vengo|vendré|hacía|hago|haré)(?!\\p{L})', why: 'Una petición en pasado va con -ra: «me pidió que lo llamara», «que viniera», «que lo hiciera».' },
              { pattern: '(?<!\\p{L})preguntó\\s+(?:cuando|donde|cuanto|cuanta|cuantos|cuantas|como|quien|cual)(?!\\p{L})', why: 'En una pregunta contada, la palabra interrogativa lleva tilde: preguntó cuándo, dónde, cuánto, cómo…' },
              { pattern: '(?<!\\p{L})preguntó\\s+que(?!\\s+si(?!\\p{L}))(?!\\p{L})', why: 'Para contar una pregunta de sí o no se usa «si»: «me preguntó si podíamos…».' },
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
            { tone: 'blue', label: 'DICE QUE / DIJO QUE', formula: 'dice que + mismo tiempo · dijo que + tiempo hacia atrás', example: 'Dice que está cansada. · Dijo que estaba cansada.', caption: 'el verbo para contar decide', en: 'Present reporting verb: same tense; past reporting verb: the tense moves back' },
            { tone: 'teal', label: 'TIEMPOS', formula: 'presente → imperfecto · indefinido / perfecto → pluscuamperfecto · futuro → condicional · voy a → iba a', example: 'Dijo que había perdido su maleta y que volverían el martes.', caption: 'si sigue siendo verdad, puede no cambiar', en: 'Tense shifts; optional when the content is still true or pending' },
            { tone: 'violet', label: 'REFERENCIAS', formula: 'mi → su · aquí → allí · hoy → ese día · mañana → al día siguiente', example: 'Dijo que allí hacía frío y que al día siguiente iban a Machu Picchu.', caption: 'cambia solo lo que ya no sirve', en: 'People, possessives, place and time words adapt to where and when you speak' },
            { tone: 'blue', label: 'PREGUNTAS', formula: 'preguntó si · preguntó dónde / cuándo / cuánto…', example: 'Preguntó si podíamos cambiar el vuelo y dónde quedaba la oficina.', caption: 'sí o no → si; otras → palabra con tilde', en: 'Questions: si for yes/no, the question word (with its accent) for the rest' },
            { tone: 'orange', label: 'PETICIONES', formula: 'pidió que / dijo que + viniera, llamara, hiciera', example: 'Me pidió que la llamara esa misma tarde.', caption: 'tres formas fijas por ahora', en: 'Past requests: pidió que + -ra (three fixed forms for now)' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de contar, hazte tres preguntas: **¿informa, pregunta o pide?** (dijo que / preguntó si / pidió que); **¿cuento en pasado?** (entonces el tiempo va hacia atrás, salvo si sigue siendo verdad); y **¿desde dónde y cuándo hablo yo?** (entonces adapto yo, mi, aquí, mañana).', en: 'Before reporting, ask yourself three questions: does the person inform, ask or request? (dijo que / preguntó si / pidió que); am I reporting in the past? (then the tense moves back, unless it is still true); and where and when am I speaking? (then I adapt I, my, here, tomorrow).' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Ana: «Tengo hambre». → Ana dijo que ___ hambre.', options: ['tenía', 'tengo', 'tuviera'], answer: 0, why: 'Presente → imperfecto, y yo → ella: tenía.' },
            { prompt: 'Mi primo: «Te llamaré el sábado». → Mi primo dijo que me ___ el sábado, pero no me llamó.', options: ['llamara', 'llamaría', 'llamará'], answer: 1, why: 'Futuro → condicional: llamaría. El sábado ya pasó.' },
            { prompt: 'Mi vecino: «¿Tienes coche?» → Mi vecino me preguntó ___ tenía coche.', options: ['si', 'que', 'qué'], answer: 0, why: 'Pregunta de sí o no: preguntó si.' },
            { prompt: 'Una señora: «¿Dónde trabajas?» → Me preguntó ___ trabajaba.', options: ['dónde', 'si dónde', 'donde que'], answer: 0, why: 'Se mantiene la palabra interrogativa, con tilde.' },
            { prompt: 'Mi pareja: «Haz la cena, por favor». → Mi pareja me pidió que ___ la cena.', options: ['hiciera', 'hacía', 'haré'], answer: 0, why: 'Petición en pasado: pidió que + hiciera.' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Edificio Los Pinos, en Arequipa. El sábado, el administrador, Óscar Medina, habló con una vecina, Lucía. El lunes, Lucía se lo cuenta a su marido, Mateo.', en: 'Los Pinos building, in Arequipa. On Saturday the building manager, Óscar Medina, spoke to a neighbour, Lucía. On Monday Lucía tells her husband, Mateo.' },
          { kind: 'rewrite', title: 'Lucía se lo cuenta a Mateo · Lucía tells Mateo', items: [
            { prompt: 'Óscar (sábado): «Mañana cortan el agua de nueve a doce».', instruction: 'Lucía, el lunes: «Óscar dijo que el domingo…». (Lucía on Monday.)', accept: ['Óscar dijo que el domingo cortaban el agua de nueve a doce.', 'Óscar dijo que el domingo cortaban el agua de 9 a 12.', 'Óscar dijo que el domingo iban a cortar el agua de nueve a doce.', 'Óscar dijo que el domingo cortarían el agua de nueve a doce.'] },
            { prompt: 'Óscar: «¿Ustedes tienen la llave del garaje?»', instruction: 'Lucía: «Óscar me preguntó si…» (ustedes → nosotros).', accept: ['Óscar me preguntó si teníamos la llave del garaje.', 'Óscar me preguntó si nosotros teníamos la llave del garaje.'] },
            { prompt: 'Óscar: «Llámeme si hay algún problema».', instruction: 'Lucía: «Óscar me pidió que…». (Lucía reports the request.)', accept: ['Óscar me pidió que lo llamara si había algún problema.', 'Óscar me pidió que lo llamara si hay algún problema.', 'Óscar me pidió que le llamara si había algún problema.'] },
          ] },
        ] },
        { title: 'Ampliación: otros verbos para contar · Extension: other reporting verbs', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: más precisión al contar. Optional: report more precisely.', blocks: [
          { kind: 'lead', text: 'Además de **decir**, **preguntar** y **pedir**, hay verbos que dicen **cómo** habló la persona: **prometió que** (+ condicional), **avisó de que**, **explicó que**, **contestó que** y, en registro formal, **comunicó que** o **informó de que**. En la conversación también oirás «**me preguntó que si**…»: es oral e informal y significa lo mismo que «me preguntó si».', en: 'Besides decir, preguntar and pedir, some verbs show how the person spoke: prometió que (+ conditional), avisó de que, explicó que, contestó que and, in formal registers, comunicó que or informó de que. In conversation you will also hear “me preguntó que si…”: it is spoken and informal, and means the same as “me preguntó si”.' },
          { kind: 'choice', title: 'Elige el verbo · Choose the verb', items: [
            { prompt: 'Clara: «No te preocupes, mañana te devuelvo el libro». → Clara ___ que me lo devolvería al día siguiente.', options: ['preguntó', 'pidió', 'prometió'], answer: 2, why: 'Se compromete a hacer algo: prometer que + condicional (devolvería).', en: 'Clara promised she would give it back the next day.' },
            { prompt: 'En la calle oyes: «Me preguntó que si quería café». ¿Qué significa?', options: ['He told me to want coffee.', 'He said he wanted coffee.', 'He asked me whether I wanted coffee.'], answer: 2, why: '«Preguntó que si» es oral e informal: igual que «preguntó si».', en: 'What does it mean?' },
            { prompt: 'Aviso oficial: «El vuelo sale con retraso». → La aerolínea nos ___ de que el vuelo salía con retraso.', options: ['avisó', 'dijo', 'pidió'], answer: 0, why: 'Avisar **de** que. Con «decir» no hay «de»: «nos dijo que», nunca «dijo de que».', en: 'The airline warned us that the flight was leaving late.' },
            { prompt: 'Correo formal de un hotel: «El cliente nos ___ que no estaba satisfecho con la habitación».', options: ['preguntó', 'pidió', 'comunicó'], answer: 2, why: '«Comunicar que» es un verbo formal para transmitir una información.', en: 'Formal email: “The guest informed us that he was not satisfied with the room.”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno vuelve a contar la llamada de Clara con prometió, avisó y explicó en lugar de «dijo».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 119 · Se pasivo y se impersonal introductorio', text: 'Ya sabes contar lo que dijo, preguntó o pidió una persona concreta. El paso natural: hablar de lo que se hace **sin decir quién** lo hace, con «se»: «Se venden billetes», «Se dice que el hotel es muy bueno», «En esta agencia se trabaja mucho».', en: 'You can now report what a specific person said, asked or requested. The natural next step: talking about what is done without saying who does it, with “se”: “Tickets are sold here”, “People say the hotel is very good”, “People work hard at this agency”.', href: '/gramatica/se-pasivo-y-se-impersonal-introductorio', label: 'Ir a la clase 119' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “me dijo que llamaba” y “me dijo que lo llamara”?». Respuesta esperada: la primera es una información (él iba a llamar); la segunda, una petición (yo tenía que llamarlo). Tarea: contar por escrito tres cosas que alguien te dijo, preguntó o pidió esta semana.' },
        ] },
      ],
    },
  ],
};
