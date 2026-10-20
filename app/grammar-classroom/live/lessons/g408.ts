import type { LiveLesson } from '../types';

/**
 * Lesson 408 · B1 · Perífrasis terminativas: acabar de, dejar de (course unit G108).
 * Builds on G082 (acabar de previewed at A2), G106 (incoative periphrases), G107
 * (soler, seguir, volver a, dejar de as a basic habit change), G087 (pluperfect),
 * G059 (negative imperative) and G065 (pronoun position). G109 (volver a) follows.
 * Scene: Raquel Benítez presents «Buenos días, barrio» on a community radio
 * station. After twenty-five years, today (Friday) is her last show. Before going
 * on air she talks with Hugo Salinas, the young producer who takes over the show;
 * at the end she says goodbye on air (Mexican voice, ustedes); the afternoon
 * brings a farewell party, and on Monday Hugo presents for the first time.
 * Content: acabar de + inf. as recent past (present acabo de; imperfect acababa de
 * in narration) vs acabar de = terminar de in the preterite, perfect and future;
 * terminar de (finish a task) vs dejar de (stop, abandon); parar de (colloquial,
 * frequent with no); no dejar de (keep on; no dejes de = be sure to); dejar +
 * noun (quit / leave) and dejar + inf. (let); llegar a + inf. (culmination; no
 * llegar a = never got to); acabar / terminar + gerundio and acabar por + inf.
 * (end up). Pronoun position. Ampliación: no acabar de (not quite), recién +
 * preterite in many areas of Latin America, dejar de / no deje de in formal notices.
 * Anchor: Acabo de llegar; dejé de fumar. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 408,
  level: 'B1',
  title: 'Perífrasis terminativas: acabar de, dejar de',
  subtitle: 'Hablar del final de una acción: lo que acabas de hacer, lo que terminas, lo que dejas de hacer y cómo acaba una historia.',
  legend: [
    { tone: 'blue', label: 'ACABAR DE · pasado reciente (to have just done)' },
    { tone: 'teal', label: 'TERMINAR DE · completar una tarea (to finish doing)' },
    { tone: 'violet', label: 'DEJAR DE · PARAR DE · NO DEJAR DE · interrumpir o no parar (to stop / keep on)' },
    { tone: 'orange', label: 'LLEGAR A · ACABAR + GERUNDIO · el punto máximo o el resultado final (to go as far as / to end up)' },
  ],
  optionNotes: {
    'Acabé de': 'En indefinido, «acabar de» significa **terminar**: acabé de cenar = terminé de cenar. Para «I have just…», usa el presente: **acabo de**.',
    'dejó': 'Sin «de», dejar + infinitivo significa **permitir** (to let). Para «to stop», **dejar de**.',
    'no dejas de': 'Es el presente (you keep on…). Para un consejo o una invitación, el imperativo negativo: **no dejes de**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Cómo termina una acción?', coach: 'Recién hecho, completado o interrumpido. Just done, finished or stopped.',
      steps: [
        { title: 'El último programa · The last show', blocks: [
          { kind: 'lead', text: 'Raquel Benítez presenta «Buenos días, barrio» en una radio comunitaria desde hace veinticinco años. Hoy, viernes, es su último programa. Antes de entrar en el estudio, le dice a Hugo, el productor: «**Acabo de llegar**. **Termino de vaciar** mi mesa y empezamos. Y desde el lunes, **dejo de madrugar**». Hoy aprendes a hablar del final de una acción: lo que acaba de pasar, lo que terminas, lo que dejas de hacer y cómo acaba una historia.', en: 'Raquel Benítez has presented “Buenos días, barrio” on a community radio station for twenty-five years. Today, Friday, is her last show. Before going into the studio, she tells Hugo, the producer: “I’ve just arrived. I’ll finish clearing my desk and we’ll start. And from Monday, no more early mornings.” Today you learn to talk about the end of an action: what has just happened, what you finish, what you stop doing and how a story ends.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno dice cuál habla de algo que pasó hace un minuto, cuál de una tarea que se completa y cuál de un hábito que se termina.', self: 'Lee las tres frases en voz alta. ¿Cuál habla de algo que pasó hace un minuto? ¿Cuál, de una tarea que se completa? ¿Cuál, de un hábito que se termina? (Just happened, task completed, habit stopped?)' } },
          { kind: 'compare', title: 'Tres finales distintos · Three different endings', columns: [
            { tone: 'blue', label: 'PASADO RECIENTE · acabar de', sentence: 'Raquel [[acaba de llegar|blue]] a la radio.', idea: 'Llegó hace muy poco: hace un minuto.', en: 'Raquel has just arrived at the station.' },
            { tone: 'teal', label: 'COMPLETAR UNA TAREA · terminar de', sentence: 'Primero [[termina de vaciar|teal]] su mesa.', idea: 'Una tarea ya empezada llega a su final.', en: 'First she finishes clearing her desk.' },
            { tone: 'violet', label: 'INTERRUMPIR UN HÁBITO · dejar de', sentence: 'Desde el lunes [[deja de madrugar|violet]].', idea: 'Antes se levantaba a las cinco; desde el lunes, ya no.', en: 'From Monday she stops getting up early.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Raquel acaba de llegar» significa…', options: ['Siempre llega tarde.', 'Está a punto de llegar.', 'Llegó hace muy poco.'], answer: 2, why: 'Acabar de en presente: la acción pasó hace muy poco. «A punto de» habla de antes de llegar.', en: '“Raquel acaba de llegar” means…' },
            { prompt: '¿Qué frase habla de un hábito que se termina?', options: ['Dejo de madrugar.', 'Acabo de llegar.', 'Termino de vaciar mi mesa.'], answer: 0, why: 'Dejar de + infinitivo: antes madrugaba, ahora ya no.', en: 'Which sentence is about a habit that ends?' },
            { prompt: 'En «acabar de», «terminar de» y «dejar de», después de «de» va…', options: ['el gerundio', 'el infinitivo', 'el verbo conjugado'], answer: 1, why: 'Solo se conjuga el primer verbo; después de «de», siempre infinitivo: acabo de llegar, dejo de madrugar.', en: 'In “acabar de”, “terminar de” and “dejar de”, what comes after “de”?' },
          ] },
        ] },
        { title: 'Acabar de: hace muy poco · Acabar de: just now', mascot: '/brand/mascot/studying.webp', coach: 'Presente o imperfecto. Present or imperfect.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ACABAR DE · pasado reciente', question: '¿Pasó hace muy poco, justo antes de ahora o justo antes de otro momento del pasado?', en: 'Did it happen a moment ago, just before now or just before another moment in the past?', formula: ['acabar (presente) + de + infinitivo → acabo de llegar', 'acabar (imperfecto) + de + infinitivo → acababa de llegar'],
            meaning: 'En **presente**, «acabo de» + infinitivo presenta algo que pasó **hace muy poco** (I have just…). En **imperfecto**, «acababa de» lo sitúa justo antes de otro momento del pasado: es muy útil para narrar (I had just…). Solo se conjuga «acabar»; el segundo verbo va siempre en infinitivo.',
            examples: [
              { es: 'Un momento, [[acabo de entrar|blue]] en el estudio.', en: 'Just a moment, I’ve just walked into the studio.' },
              { es: 'Los oyentes [[acaban de enviar|blue]] más de cien mensajes.', en: 'The listeners have just sent more than a hundred messages.' },
              { es: 'Cuando Hugo llegó a la radio, [[acababa de terminar|blue]] la carrera.', en: 'When Hugo came to the station, he had just finished his degree.' },
            ], note: 'Con «acababa de», la otra acción del pasado suele ir en indefinido: «**Acababa de** sentarme cuando sonó el teléfono».' },
          { kind: 'table', title: 'Acabar de en cada tiempo · Acabar de in each tense', head: ['Forma', 'Ejemplo', '¿Qué significa?'], rows: [
            ['acabo de · acabas de… (presente)', '**Acabo de** hablar con el director.', 'hace muy poco (I have just spoken)'],
            ['acababa de… (imperfecto)', '**Acababa de** salir cuando me llamaste.', 'justo antes de otro momento pasado (I had just left)'],
            ['acabé de · he acabado de · voy a acabar de', 'Ayer **acabé de** leer la novela a las doce.', 'terminar: = terminé de leer (I finished reading)'],
          ], note: 'Con el sentido de «hace muy poco», usa el **presente** o el **imperfecto**. En indefinido, en perfecto o en futuro, «acabar de» significa casi siempre **terminar**: «Acabé de cenar a las diez» = terminé de cenar.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—Hugo, ¿estás libre? —Sí, ___ grabar la entrevista.', options: ['acabé', 'acabo', 'acabo de'], answer: 2, why: 'Algo muy reciente: acabo de + infinitivo, en presente y con «de».', en: '—Hugo, are you free? —Yes, I’ve just recorded the interview.' },
            { prompt: '«Ayer acabé de leer la novela a las doce» significa…', options: ['La leí hace un minuto.', 'Llegué al final de la novela a las doce.', 'Dejé la novela sin terminar.'], answer: 1, why: 'En indefinido, acabar de = terminar de: llegó a la última página a las doce.', en: '“Ayer acabé de leer la novela a las doce” means…' },
          ] },
        ] },
        { title: 'Dejar de, parar de, no dejar de · Stop and keep on', mascot: '/brand/mascot/standing.webp', coach: 'Antes sí, ahora ya no. Before yes, now no more.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'DEJAR DE · PARAR DE · NO DEJAR DE', question: '¿Una actividad o un hábito se interrumpe? ¿O, al contrario, no para nunca?', en: 'Does an activity or habit stop? Or, on the contrary, does it never stop?', formula: ['dejar + de + infinitivo → dejé de fumar', 'parar + de + infinitivo (coloquial) → no para de llover', 'no dejar de + infinitivo → no dejo de pensar en ello · no dejes de visitarlo'],
            meaning: '**Dejar de** dice que una actividad se interrumpe o un hábito termina: ya no lo haces (to stop doing). **Parar de** significa lo mismo, pero es más coloquial y muy frecuente en negativo: «no para de llover» = llueve sin parar. Con **no**, dejar de cambia de sentido: «**No dejo de** pensar en ello» = lo pienso todo el tiempo. Y en imperativo negativo, «**No dejes de** visitarlo» = visítalo, no te lo pierdas (be sure to visit him).',
            examples: [
              { es: 'En 2015, el barrio [[dejó de tener|violet]] cine.', en: 'In 2015 the neighbourhood stopped having a cinema.' },
              { es: 'Los oyentes [[no paran de escribir|violet]] mensajes.', en: 'The listeners keep on writing messages.' },
              { es: 'Si vas a Oaxaca, [[no dejes de probar|violet]] el mole.', en: 'If you go to Oaxaca, be sure to try the mole.' },
            ] },
          { kind: 'table', title: 'Cuatro usos de «dejar» · Four uses of “dejar”', head: ['Estructura', 'Ejemplo', 'Significado'], rows: [
            ['dejar + nombre', 'Raquel **deja** la radio. / **Dejé** las llaves en la mesa.', 'abandonar algo; poner algo en un sitio (to quit / to leave)'],
            ['dejar + infinitivo (sin de)', 'El director no me **dejaba poner** música en inglés.', 'permitir (to let)'],
            ['dejar de + infinitivo', 'El lunes **dejo de** trabajar.', 'interrumpir una actividad (to stop)'],
            ['no dejar de + infinitivo', 'Mis amigos **no dejan de** llamarme. / **No dejes de** escribirme.', 'una y otra vez; no olvidar hacerlo (keep on / be sure to)'],
          ], note: 'Una preposición cambia todo: «Mi jefe no me **dejaba** salir» (no me lo permitía) / «Mi jefe no **dejaba de** salir» (salía todo el tiempo).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Desde el lunes Raquel ___ poner el despertador a las cinco.', options: ['llega a', 'deja de', 'deja'], answer: 1, why: 'Un hábito que termina: dejar de + infinitivo. «Deja poner» significaría «permite poner».', en: 'From Monday Raquel stops setting the alarm for five.' },
            { prompt: 'Hace un año que el director no nos ___ comer en el estudio.', options: ['deja', 'para de', 'deja de'], answer: 0, why: 'Es un permiso: dejar + infinitivo, sin «de» (to let).', en: 'For a year now the director hasn’t let us eat in the studio.' },
            { prompt: 'Si visitas la radio, ___ saludar a Hugo.', options: ['no dejes de', 'no dejas', 'deja de'], answer: 0, why: 'Un consejo, «no te lo pierdas»: no dejes de + infinitivo (be sure to).', en: 'If you visit the station, be sure to say hello to Hugo.' },
          ] },
        ] },
        { title: 'Terminar de: completar una tarea · Finishing a task', mascot: '/brand/mascot/speaking.webp', coach: 'Terminar no es dejar. Finishing is not stopping.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'TERMINAR DE', question: '¿Completas una tarea que ya estaba empezada?', en: 'Are you completing a task that had already started?', formula: ['terminar + de + infinitivo → termino de leer · terminé de comer'],
            meaning: '**Terminar de** dice que una tarea llega a su **final**: la completas. No es lo mismo que **dejar de**: si dejas de leer un libro, lo abandonas; si terminas de leerlo, llegas a la última página. Y no es lo mismo que **acabo de**: «acabo de leer» dice **cuándo** (hace muy poco); «termino de leer» dice que **completas** la tarea.',
            examples: [
              { es: 'Hugo [[terminó de editar|teal]] el programa a medianoche.', en: 'Hugo finished editing the show at midnight.' },
              { es: 'Espera, [[termino de escribir|teal]] este correo y bajamos.', en: 'Hang on, I’ll finish writing this email and we’ll go down.' },
            ] },
          { kind: 'compare', title: 'Acabo de, termino de, dejé de · Three different “ends”', columns: [
            { tone: 'blue', label: 'ACABO DE LEER', sentence: '[[Acabo de leer|blue]] tu mensaje.', idea: 'Lo leí hace un minuto.', en: 'I’ve just read your message.' },
            { tone: 'teal', label: 'TERMINO DE LEER', sentence: '[[Termino de leer|teal]] el guion y te llamo.', idea: 'Completo la tarea y después hago otra cosa.', en: 'I’ll finish reading the script and call you.' },
            { tone: 'violet', label: 'DEJÉ DE LEER', sentence: '[[Dejé de leer|violet]] la novela en la página cincuenta.', idea: 'La abandoné: no la terminé.', en: 'I stopped reading the novel on page fifty.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Raquel leyó la mitad de la novela y la abandonó: ___ leerla.', options: ['terminó de', 'dejó de', 'acaba de'], answer: 1, why: 'No llegó al final: dejar de = abandonar. Terminar de diría que la completó.', en: 'Raquel read half the novel and gave up: she stopped reading it.' },
            { prompt: '—¿Ya podemos comer? —Sí, ya ___ cocinar.', options: ['terminé de', 'dejé de', 'llegué a'], answer: 0, why: 'La tarea está completa: terminar de. Dejar de diría que la abandonaste a la mitad.', en: '—Can we eat now? —Yes, I’ve finished cooking.' },
          ] },
        ] },
        { title: 'Cómo acaba la historia · How the story ends', mascot: '/brand/mascot/seated.webp', coach: 'Hasta dónde llegó y cómo acabó. How far it went and how it ended.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'LLEGAR A · ACABAR + GERUNDIO · ACABAR POR', question: '¿Cómo termina una historia: con un punto máximo o con un resultado inesperado?', en: 'How does a story end: with a high point or with an unexpected result?', formula: ['llegar a + infinitivo → llegó a ser directora', 'acabar · terminar + gerundio → acabó trabajando aquí', 'acabar por + infinitivo → acabó por aceptarlo'],
            meaning: '**Llegar a** + infinitivo marca el **punto máximo** de un proceso, muchas veces algo sorprendente o difícil: «llegó a ser directora» (she went on to become director). En negativo, algo que **no llegó a pasar**: «no llegó a conocer a su abuelo» (he never got to meet him). **Acabar** o **terminar** + gerundio y **acabar por** + infinitivo cuentan el **resultado final** de una historia, a menudo no planeado (to end up doing).',
            examples: [
              { es: 'Con los años, Raquel [[llegó a conocer|orange]] a casi todos los vecinos por su nombre.', en: 'Over the years, Raquel came to know almost every neighbour by name.' },
              { es: 'La entrevista duró tanto que Hugo [[no llegó a poner|orange]] la última canción.', en: 'The interview went on so long that Hugo never got to play the last song.' },
              { es: 'Hugo vino a hacer prácticas y [[acabó trabajando|orange]] aquí.', en: 'Hugo came to do an internship and ended up working here.' },
              { es: 'Al principio no quería el puesto, pero [[acabó por aceptarlo|orange]].', en: 'At first he didn’t want the job, but he ended up accepting it.' },
            ], note: 'No confundas: **acabar de** + infinitivo (hace muy poco / terminar) y **acabar** + gerundio (el resultado final). «Acabo de trabajar» ≠ «Acabé trabajando aquí».' },
          { kind: 'decide', title: '¿Qué perífrasis uso? · Which one?', steps: [
            { q: '¿Pasó hace muy poco, justo antes de ahora o de otro momento pasado?', yes: 'Usa **acabar de** en presente o imperfecto: «Acabo de llegar», «Acababa de salir».', no: 'next' },
            { q: '¿Completas una tarea que ya estaba empezada?', yes: 'Usa **terminar de** (o acabar de): «Termino de leer y salgo».', no: 'next' },
            { q: '¿Una actividad o un hábito se interrumpe y ya no lo haces?', yes: 'Usa **dejar de** (o **parar de**, más coloquial): «Dejé de madrugar».', no: 'next' },
            { q: '¿Es el punto máximo de un proceso o el resultado final de una historia?', yes: '**Llegar a** + infinitivo (punto máximo) o **acabar** + gerundio (resultado): «Llegó a ser directora», «Acabé quedándome».', no: 'Quizá no necesitas perífrasis: usa el verbo solo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Raquel pensaba trabajar un año en la radio y ___ veinticinco.', options: ['acabó quedándose', 'acabó de quedarse', 'llegó quedándose'], answer: 0, why: 'Un resultado final no planeado: acabar + gerundio. «Acabó de quedarse» no tiene ese sentido.', en: 'Raquel planned to work at the station for a year and ended up staying twenty-five.' },
            { prompt: 'El programa fue tan popular que ___ salir en la televisión nacional.', options: ['dejó de', 'llegó a', 'acabó de'], answer: 1, why: 'Un punto máximo, algo sorprendente: llegar a + infinitivo.', en: 'The show was so popular that it even made it onto national television.' },
            { prompt: 'Espera un minuto: ___ revisar el guion y te lo paso.', options: ['llego a', 'termino de', 'dejo de'], answer: 1, why: 'Completas una tarea empezada: terminar de.', en: 'Wait a minute: I’ll finish checking the script and pass it to you.' },
          ] },
        ] },
        { title: 'Pronombres y errores frecuentes · Pronouns and common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'La preposición lo cambia todo. The preposition changes everything.', blocks: [
          { kind: 'table', title: '¿Dónde va el pronombre? · Where does the pronoun go?', head: ['Perífrasis', 'Ejemplo', 'Nota'], rows: [
            ['acabar de · terminar de · dejar de', 'Acabo de leer**lo**. / **Lo** acabo de leer.', 'Las dos posiciones son correctas (clase 065). Detrás del infinitivo, unido, siempre funciona.'],
            ['con un verbo pronominal', 'Acabo de **darme** cuenta. / **Me** acabo de dar cuenta.', 'El pronombre cambia con la persona: acabas de darte, acaba de darse.'],
            ['acabar + gerundio', 'Acabé **comprándolo**. / **Lo** acabé comprando.', 'Unido al gerundio, con tilde (comprándolo), o delante del verbo conjugado.'],
          ] },
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿la preposición, el tiempo o la perífrasis? Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: ¿la preposición, el tiempo o la perífrasis? Toca para ver la corrección. (Preposition, tense or periphrasis?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Acabo de terminé el programa.', right: 'Acabo de terminar el programa.', why: 'Solo se conjuga «acabar»; después de «de», infinitivo. (Only the first verb is conjugated.)' },
            { wrong: 'Acabé de llegar hace cinco minutos.', right: 'Acabo de llegar. / Llegué hace cinco minutos.', why: 'Para «I just arrived», presente: acabo de llegar. «Acabé de» en indefinido significa terminar.' },
            { wrong: 'Mi hermano dejó fumar el año pasado.', right: 'Mi hermano dejó de fumar el año pasado.', why: 'Sin «de», dejar + infinitivo significa permitir (to let). Para «to stop», dejar **de**.' },
            { wrong: 'Dejé de leer el informe y se lo envié al director.', right: 'Terminé de leer el informe y se lo envié al director.', why: 'Si lo envías, la tarea está completa: terminar de. Dejar de = abandonar sin terminar.' },
            { wrong: 'Toda la mañana el teléfono no paró sonar.', right: 'Toda la mañana el teléfono no paró de sonar.', why: 'Parar **de** + infinitivo, como dejar de.' },
            { wrong: 'El programa llegó ser el más escuchado del barrio.', right: 'El programa llegó a ser el más escuchado del barrio.', why: 'Llegar **a** + infinitivo. (The “a” is needed.)' },
            { wrong: 'Vine por un año y acabé de quedarme veinte.', right: 'Vine por un año y acabé quedándome veinte.', why: 'Para «I ended up staying», acabar + gerundio (o acabé por quedarme). Acabar de + infinitivo es otra perífrasis.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Y el guion de mañana? —___ terminar.', options: ['Acabo de lo', 'Lo acabo', 'Lo acabo de'], answer: 2, why: 'El pronombre va delante del verbo conjugado (lo acabo de terminar) o unido al infinitivo (acabo de terminarlo).', en: '—And tomorrow’s script? —I’ve just finished it.' },
            { prompt: 'Raquel tenía miedo del cambio, pero ___.', options: ['acabó aceptándolo', 'llegó aceptándolo', 'acabó de aceptarlo'], answer: 0, why: 'El resultado final: acabar + gerundio, con el pronombre unido (aceptándolo).', en: 'Raquel was afraid of the change, but she ended up accepting it.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice una frase con «acabo de», una con «dejé de» y una con «llegué a» sobre su propia semana. Tú preguntas: «¿Hace cuánto?», «¿Por qué lo dejaste?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Antes del último programa', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En el estudio, a las nueve menos diez · In the studio, at ten to nine', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Hugo y tu alumno es Raquel. Después tu alumno toca cada expresión marcada y dice si habla de algo reciente, de una tarea, de algo que se interrumpe o del final de una historia.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di: ¿algo reciente, una tarea, algo que se interrumpe o el final de una historia? (Recent, task, stop, or how the story ends?)' } },
          { kind: 'explore', title: 'Veinticinco años', setting: 'Viernes, ocho y cincuenta de la mañana, en la radio comunitaria. Raquel entra en el estudio para su último programa. Hugo, el productor, va a presentarlo desde el lunes. Se tratan de tú. (Friday, 8:50 a.m. Raquel arrives for her last show. Hugo, the producer, will present it from Monday.)', lines: [
            { who: 'Hugo', text: 'Buenos días, Raquel. ¿Cómo estás? ¿Nerviosa?', en: 'Good morning, Raquel. How are you? Nervous?' },
            { who: 'Raquel', text: 'Un poco. [[Acabo de llegar|blue]] y el teléfono [[no para de sonar|violet]]. Son los oyentes.', en: 'A bit. I’ve just arrived and the phone hasn’t stopped ringing. It’s the listeners.' },
            { who: 'Hugo', text: 'Normal: es tu último programa. ¿Ya [[terminaste de vaciar|teal]] tu mesa?', en: 'Of course: it’s your last show. Have you finished clearing your desk?' },
            { who: 'Raquel', text: 'Casi. Mira lo que encontré: una foto de mi primer día. [[Acababa de cumplir|blue]] treinta y ocho años.', en: 'Almost. Look what I found: a photo of my first day. I had just turned thirty-eight.' },
            { who: 'Hugo', text: '¡Veinticinco años en esta radio! ¿Nunca pensaste en [[dejarlo|violet]]?', en: 'Twenty-five years at this station! Did you never think of quitting?' },
            { who: 'Raquel', text: 'Sí, una vez [[llegué a escribir|orange]] la carta de renuncia, pero no la entregué y al final [[acabé quedándome|orange]].', en: 'Yes, once I went as far as writing my resignation letter, but I didn’t hand it in and in the end I stayed.' },
            { who: 'Hugo', text: '¿Y ahora qué vas a hacer con tanto tiempo libre?', en: 'And what are you going to do with so much free time now?' },
            { who: 'Raquel', text: 'Lo primero, [[dejar de madrugar|violet]]. Llevo veinticinco años levantándome a las cinco.', en: 'First of all, stop getting up early. I’ve been getting up at five for twenty-five years.' },
            { who: 'Hugo', text: '¿Y también vas a [[dejar de escuchar|violet]] la radio?', en: 'And are you going to stop listening to the radio too?' },
            { who: 'Raquel', text: '¡Nunca! Te voy a escuchar cada mañana. Y tú, [[no dejes de llamarme|violet]] si tienes dudas.', en: 'Never! I’m going to listen to you every morning. And you, be sure to call me if you have any questions.' },
            { who: 'Hugo', text: 'Prometido. Bueno, son las nueve menos cinco: [[termina de tomarte|teal]] el café, que empezamos.', en: 'Promise. Right, it’s five to nine: finish your coffee, we’re about to start.' },
            { who: 'Raquel', text: 'Ya voy. [[Acabo de darme cuenta|blue]] de que es la última vez que digo «Buenos días, barrio».', en: 'Coming. I’ve just realised it’s the last time I’ll say “Buenos días, barrio”.' },
          ], notes: {
            'Acabo de llegar': 'Acabar de en presente: Raquel llegó hace un minuto. (I’ve just arrived.)',
            'no para de sonar': 'No parar de + infinitivo (coloquial): suena una y otra vez, sin parar. (It keeps ringing.)',
            'terminaste de vaciar': 'Terminar de: completar una tarea ya empezada. Hugo pregunta si la mesa ya está vacía. En España se diría también «¿Ya has terminado de vaciar…?».',
            'Acababa de cumplir': 'Acabar de en imperfecto: justo antes de otro momento del pasado (su primer día). (I had just turned thirty-eight.)',
            'dejarlo': 'Dejar + nombre o pronombre, sin «de»: abandonar algo. Aquí «lo» = el trabajo en la radio. (To quit it.)',
            'llegué a escribir': 'Llegar a + infinitivo: el punto máximo. Raquel fue tan lejos que escribió la carta. (I went as far as writing.)',
            'acabé quedándome': 'Acabar + gerundio: el resultado final, no planeado. El pronombre va unido al gerundio, con tilde. (I ended up staying.)',
            'dejar de madrugar': 'Dejar de + infinitivo: un hábito que termina. Madrugar = levantarse muy temprano.',
            'dejar de escuchar': 'Ir a + dejar de: un cambio en el futuro. Hugo pregunta si Raquel va a abandonar también esa costumbre.',
            'no dejes de llamarme': 'No dejar de en imperativo negativo: un consejo cariñoso, «llámame, no lo olvides». (Be sure to call me.)',
            'termina de tomarte': 'Terminar de en imperativo (tú): completa la tarea. El pronombre va unido al infinitivo: tomarte. (Finish your coffee.)',
            'Acabo de darme cuenta': 'Acabar de + un verbo pronominal: el pronombre cambia con la persona (darme, darte, darse). También: «Me acabo de dar cuenta».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué suena tanto el teléfono?', options: ['Llaman los oyentes.', 'Llama el director.', 'Hay un problema técnico.'], answer: 0, why: '«El teléfono no para de sonar. Son los oyentes».', en: 'Why does the phone keep ringing?' },
            { prompt: '¿Qué pasó con la carta de renuncia de Raquel?', options: ['Nunca la escribió.', 'La entregó y se fue un año.', 'La escribió, pero no la entregó.'], answer: 2, why: '«Llegué a escribir la carta de renuncia, pero no la entregué».', en: 'What happened to Raquel’s resignation letter?' },
            { prompt: '¿Qué le pide Raquel a Hugo?', options: ['Que la llame si tiene dudas.', 'Que deje de llamarla.', 'Que termine el café.'], answer: 0, why: '«No dejes de llamarme si tienes dudas»: llámame, no lo olvides.', en: 'What does Raquel ask Hugo to do?' },
          ] },
        ] },
        { title: 'Momentos del último día · Moments from the last day', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Qué tipo de final? · What kind of ending?', categories: [
            { id: 'reciente', label: 'RECIENTE · acabar de', tone: 'blue' },
            { id: 'tarea', label: 'TAREA COMPLETA · terminar de', tone: 'teal' },
            { id: 'parar', label: 'PARAR O NO PARAR · dejar de, parar de, no dejar de', tone: 'violet' },
            { id: 'resultado', label: 'PUNTO MÁXIMO O RESULTADO · llegar a, acabar + gerundio', tone: 'orange' },
          ], items: [
            { text: 'Hugo acaba de colgar el teléfono.', answer: 'reciente', why: 'Colgó hace un momento: acabar de en presente.' },
            { text: 'Hugo terminó de preparar la música a las ocho y media.', answer: 'tarea', why: 'Completó una tarea: terminar de.' },
            { text: 'Los vecinos no paran de traer flores.', answer: 'parar', why: 'Traen flores una y otra vez: no parar de.' },
            { text: 'Doña Carmen llegó a llamar cuatro veces en una mañana.', answer: 'resultado', why: 'Una cifra sorprendente, el punto máximo: llegar a.' },
            { text: 'Un vecino vino a despedirse y acabó cantando en el estudio.', answer: 'resultado', why: 'El resultado final, no planeado: acabar + gerundio.' },
            { text: 'Cuando llegó Hugo, Raquel acababa de abrir la caja de fotos.', answer: 'reciente', why: 'Justo antes de otro momento pasado: acababa de.' },
            { text: 'El lunes Raquel deja de poner el despertador.', answer: 'parar', why: 'Un hábito que termina: dejar de.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué acababa de cumplir Raquel en su primer día? ¿Qué llegó a hacer una vez?». Tu alumno responde con acababa de y llegó a.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero decide: ¿reciente, tarea, parar o resultado? Decide the kind of ending first.',
      steps: [
        { title: 'La fiesta de despedida · The farewell party', blocks: [
          { kind: 'choice', items: [
            { context: 'La fiesta de despedida, por la tarde. (The farewell party, in the afternoon.)', prompt: '—¿Dónde está Raquel? —___ salir: está en la puerta con los vecinos.', options: ['Acabó de', 'Deja de', 'Acaba de'], answer: 2, why: 'Salió hace muy poco: presente, acaba de. «Acabó de», en indefinido, no significa «hace muy poco».', en: '—Where’s Raquel? —She’s just gone out: she’s at the door with the neighbours.' },
            { context: 'La fiesta de despedida. (The farewell party.)', prompt: 'Cuando llegó el director, los invitados ya ___ cortar el pastel.', options: ['acaban de', 'dejaban de', 'acababan de'], answer: 2, why: 'Justo antes de otro momento pasado (llegó el director): imperfecto, acababan de.', en: 'When the director arrived, the guests had just cut the cake.' },
            { context: 'La fiesta de despedida. (The farewell party.)', prompt: 'Doña Carmen se emocionó y ___ llorar en toda la tarde.', options: ['terminó de', 'no paró de', 'no paró'], answer: 1, why: 'Lloró sin parar: no parar de + infinitivo, con «de».', en: 'Doña Carmen got emotional and didn’t stop crying all afternoon.' },
            { context: 'Raquel habla con Hugo. (Raquel talks to Hugo.)', prompt: 'Hugo, ___ venir a la cena del sábado: quiero verte.', options: ['no dejes de', 'deja de', 'no dejas de'], answer: 0, why: 'Una invitación insistente (be sure to come): imperativo negativo, no dejes de. «Deja de venir» diría lo contrario.', en: 'Hugo, be sure to come to dinner on Saturday: I want to see you.' },
            { context: 'El director da un discurso. (The director gives a speech.)', prompt: 'En veinticinco años, Raquel ___ entrevistar a más de tres mil vecinos.', options: ['dejó de', 'llegó a', 'acabó de'], answer: 1, why: 'Una cifra sorprendente, el punto máximo: llegar a + infinitivo.', en: 'In twenty-five years, Raquel interviewed as many as three thousand neighbours.' },
          ] },
        ] },
        { title: '¿Qué «dejar»? · Which “dejar”?', blocks: [
          { kind: 'classify', title: 'Permitir, parar o insistir · Let, stop or keep on', categories: [
            { id: 'permitir', label: 'DEJAR + INFINITIVO · permitir (let)', tone: 'neutral' },
            { id: 'parar', label: 'DEJAR DE · ya no lo hace (stop)', tone: 'violet' },
            { id: 'insistir', label: 'NO DEJAR DE · una y otra vez, o «no te lo pierdas»', tone: 'teal' },
          ], items: [
            { text: 'Mis padres no me dejaban escuchar la radio en la cena.', answer: 'permitir', why: 'Sin «de»: no me lo permitían.' },
            { text: 'Desde que tiene perro, Hugo dejó de dormir hasta tarde.', answer: 'parar', why: 'Un hábito que terminó: dejar de.' },
            { text: 'Los oyentes no dejan de preguntar por Raquel.', answer: 'insistir', why: 'Preguntan una y otra vez: no dejar de.' },
            { text: '¿Me dejas usar tu micrófono?', answer: 'permitir', why: 'Pide permiso: dejar + infinitivo.' },
            { text: 'Si pasas por Puebla, no dejes de comer chiles en nogada.', answer: 'insistir', why: 'Un consejo, «no te lo pierdas»: no dejes de.' },
            { text: 'La emisora dejó de emitir por la noche en 2020.', answer: 'parar', why: 'Una actividad que se interrumpió: dejar de.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Hugo acaba de llegó al estudio.', ok: false, options: ['Hugo acaba de llegar al estudio.', 'Hugo acaba llegar al estudio.', 'Hugo acabó de llegó al estudio.'], answer: 0, why: 'Solo se conjuga «acabar», y con «de»: acaba de llegar.' },
            { sentence: 'Acababa de sentarme cuando sonó el teléfono.', ok: true, why: 'Correcta: acababa de (imperfecto) + infinitivo, justo antes de otro hecho pasado.' },
            { sentence: 'Dejé de leer el libro anoche: me encantó el final.', ok: false, options: ['Llegué de leer el libro anoche: me encantó el final.', 'Dejé leer el libro anoche: me encantó el final.', 'Terminé de leer el libro anoche: me encantó el final.'], answer: 2, why: 'Si leíste el final, completaste la tarea: terminar de. Dejar de = abandonar.' },
            { sentence: 'Pensé en dejar la radio, pero acabé por quedarme.', ok: true, why: 'Correcta: dejar + nombre (abandonar) y acabar por + infinitivo (resultado final).' },
            { sentence: 'El vecino del quinto no para hablar de fútbol.', ok: false, options: ['El vecino del quinto no para a hablar de fútbol.', 'El vecino del quinto no para de hablar de fútbol.', 'El vecino del quinto no deja hablar de fútbol.'], answer: 1, why: 'Parar **de** + infinitivo. «No deja hablar» significaría «no permite hablar».' },
          ] },
        ] },
        { title: 'El primer programa de Hugo · Hugo’s first show', blocks: [
          { kind: 'chat-fill', title: 'Lunes, diez de la mañana: Raquel llama a Hugo · Monday, 10 a.m.: Raquel calls Hugo', lines: [
            { who: 'Raquel', text: '¡Hugo! ¿Qué tal tu primer programa?' },
            { who: 'Hugo', text: 'Bien, creo. ___ salir del estudio y todavía estoy temblando.', options: ['Dejo de', 'Acabo de', 'Acabé de'], answer: 1, why: 'Salió hace un minuto: presente, acabo de.' },
            { who: 'Raquel', text: '¿Y los oyentes? ¿Llamaron?' },
            { who: 'Hugo', text: 'Muchísimo. El teléfono ___ sonar en dos horas.', options: ['no paró de', 'no llegó de', 'no paró'], answer: 0, why: 'Sonó sin parar: no parar de + infinitivo, con «de».' },
            { who: 'Raquel', text: '¿Y la entrevista con el alcalde?' },
            { who: 'Hugo', text: 'Fue tan larga que no ___ poner la última canción.', options: ['llegué a', 'acabé de', 'dejé de'], answer: 0, why: 'Algo que al final no pasó: no llegar a + infinitivo (I never got to).' },
            { who: 'Raquel', text: 'No pasa nada. ¿Y ahora qué haces?' },
            { who: 'Hugo', text: 'Ahora ___ escribir el guion de mañana y me voy a dormir un rato.', options: ['termino de', 'acabo', 'dejo de'], answer: 0, why: 'Completar una tarea empezada: terminar de.' },
            { who: 'Raquel', text: 'Muy bien. Y escúchame: ___ ser tú mismo. Por eso te eligieron.', options: ['no dejas de', 'no dejes de', 'deja de'], answer: 1, why: 'Un consejo: imperativo negativo, no dejes de (be sure to stay yourself).' },
            { who: 'Raquel', text: 'Ya verás: al final ___ siendo el locutor favorito del barrio.', options: ['vas a dejar', 'vas a acabar de', 'vas a acabar'], answer: 2, why: 'Un resultado final: acabar + gerundio (siendo).' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Acabo', 'de', 'hablar', 'con', 'Raquel'], accept: ['Acabo de hablar con Raquel'], en: 'I’ve just spoken to Raquel.' },
            { tiles: ['No', 'dejes', 'de', 'escuchar', 'el', 'programa'], accept: ['No dejes de escuchar el programa'], en: 'Be sure to listen to the show.' },
            { tiles: ['Vine', 'por', 'un', 'año', 'y', 'acabé', 'quedándome'], accept: ['Vine por un año y acabé quedándome'], en: 'I came for a year and ended up staying.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Usa la perífrasis · Use the periphrasis', items: [
            { prompt: 'Hugo terminó el guion hace dos minutos.', instruction: 'Usa acabar de + infinitivo, en presente. Empieza con «Hugo». (Use acabar de.)', accept: ['Hugo acaba de terminar el guion'] },
            { prompt: 'Antes Raquel se levantaba a las cinco. Ahora ya no.', instruction: 'Usa dejar de + infinitivo, en indefinido. Empieza con «Raquel».', accept: ['Raquel dejó de levantarse a las cinco', 'Raquel dejó de levantarse a las cinco de la mañana'] },
            { prompt: 'Entré en la sala. Unos segundos antes, el programa había empezado.', instruction: 'Usa acabar de en imperfecto. Empieza con «Cuando entré en la sala, el programa».', accept: ['Cuando entré en la sala, el programa acababa de empezar'] },
            { prompt: 'Al final, Hugo aceptó el puesto, aunque al principio no quería.', instruction: 'Usa acabar + gerundio. Empieza con «Al final, Hugo».', accept: ['Al final, Hugo acabó aceptando el puesto', 'Al final, Hugo terminó aceptando el puesto', 'Al final, Hugo acabó aceptando el puesto, aunque al principio no quería', 'Al final, Hugo terminó aceptando el puesto, aunque al principio no quería'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta un cambio en su vida con cuatro frases: algo que acaba de hacer, algo que dejó de hacer, algo que llegó a hacer y algo que acabó haciendo sin planearlo.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La despedida de Raquel', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'En directo, a las doce menos cinco · On air, at five to twelve', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye una perífrasis de final (acabo de, dejo de, termino de, llegó a…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Busca las formas: acabo de…, no ha parado de…, dejo de…, termino de… (Listen once for the gist, once for details.)' } },
          { kind: 'listen', title: 'Las últimas palabras del programa', channel: 'RADIO · «BUENOS DÍAS, BARRIO» · ÚLTIMO PROGRAMA DE RAQUEL', src: '/audio/grammar-live/408.mp3',
            before: 'Son las doce menos cinco y termina el último programa de Raquel. ¿Qué crees que dice en su despedida: a quién da las gracias, qué recuerda, qué les pide a los oyentes? (What do you think she says in her goodbye?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Raquel se despide de los oyentes en su último programa.', 'Raquel anuncia que el programa se termina para siempre.', 'Raquel presenta a un invitado nuevo.'], answer: 0, why: 'Da las gracias, recuerda sus inicios, presenta a Hugo y dice adiós. El programa continúa con Hugo.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿De quién es el último mensaje del día?', options: ['De doña Carmen, una oyente del primer día.', 'Del director de la radio.', 'De Hugo, su compañero.'], answer: 0, why: '«Acabo de leer el último mensaje de hoy, de doña Carmen, que nos escucha desde el primer día».', en: 'Who is the last message of the day from?' },
              { prompt: '¿Cómo era la vida de Raquel cuando empezó en la radio?', options: ['Acababa de terminar la carrera.', 'Había llegado a la ciudad hacía muy poco.', 'Ya conocía a medio barrio.'], answer: 1, why: '«Cuando empecé aquí, acababa de llegar a la ciudad y no conocía a nadie».', en: 'What was Raquel’s life like when she started at the station?' },
              { prompt: '¿Qué va a dejar de hacer Raquel desde el lunes?', options: ['Desayunar.', 'Levantarse muy temprano.', 'Escuchar la radio.'], answer: 1, why: '«Dejo de madrugar» = ya no se levanta temprano. La radio la va a seguir escuchando.', en: 'What is Raquel going to stop doing from Monday?' },
              { prompt: '¿Qué les pide Raquel a los oyentes?', options: ['Que sigan llamando al programa con Hugo.', 'Que escuchen otra emisora.', 'Que le escriban mensajes a ella.'], answer: 0, why: '«Por favor, no dejen de llamarlo, como hacían conmigo»: llamen a Hugo, como antes.', en: 'What does Raquel ask the listeners to do?' },
            ],
            transcript: 'Bueno, vecinos, esto se termina. [[Acabo de leer|blue]] el último mensaje de hoy, de doña Carmen, que nos escucha desde el primer día. Gracias a todos: el teléfono [[no ha parado de sonar|violet]] en toda la mañana. Cuando empecé aquí, [[acababa de llegar|blue]] a la ciudad y no conocía a nadie. Con los años, este programa [[llegó a tener|orange]] veinte mil oyentes, y yo [[acabé sintiéndome|orange]] en casa. A partir del lunes [[dejo de madrugar|violet]], pero voy a seguir escuchando la radio cada mañana. Hugo, mi compañero, se queda con el programa. Es joven y tiene muchas ideas nuevas. Por favor, [[no dejen de llamarlo|violet]], como hacían conmigo. Ahora [[termino de recoger|teal]] mis cosas, apago este micrófono por última vez y me voy a desayunar sin prisa. Muchísimas gracias por estos veinticinco años. Buenos días, barrio, y hasta siempre.',
            reply: { teacher: 'Tú eres Raquel. Tu alumno es un oyente que llama al programa para despedirse con tres frases: una con «acabo de», una con «llegar a» o «acabar» + gerundio y una con «no dejes de».', self: 'Responde a Raquel en voz alta como oyente: qué acabas de escuchar, qué llegaste a aprender con su programa y un consejo con «no dejes de». (Answer as a listener.)' } },
          { kind: 'tip', icon: '💡', title: 'Seguir o no dejar de · Two ways to say “keep on”', text: 'Raquel dice «**voy a seguir escuchando** la radio» (clase 107). Con el mismo sentido podría decir «**no voy a dejar de escuchar** la radio». Seguir + gerundio presenta la continuidad de forma neutra; no dejar de + infinitivo la subraya: no se interrumpe.', en: 'Raquel says “I’m going to keep listening to the radio” (class 107). With the same meaning she could say “I’m not going to stop listening to the radio”. Seguir + gerund presents the continuity neutrally; no dejar de + infinitive stresses it: it doesn’t stop.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus finales y tus cambios', coach: 'Cuenta qué terminó y cómo acabó. Tell what ended and how.',
      steps: [
        { title: '¿Qué terminó? · What ended?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con experiencias reales o inventadas. Si usa una perífrasis equivocada, tú repites la frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta con una experiencia real o inventada y, si quieres, escribe tu respuesta. (Answer aloud with a real or invented experience.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué acabas de hacer antes de esta clase? ¿Y qué acababas de hacer ayer cuando pasó algo inesperado? · What have you just done before this class? And what had you just done yesterday when something unexpected happened?', followUps: ['¿Qué pasó después? (What happened next?)', '¿Hace cuánto? (How long ago?)'], phrases: ['[[Acabo de|blue]] comer / llegar / hablar con…', 'Ayer [[acababa de|blue]] salir de casa cuando…'], hint: 'Acabo de (ahora) y acababa de + cuando (en una historia pasada).', example: 'Acabo de terminar una reunión larga. Ayer acababa de salir de casa cuando empezó a llover, así que volví por el paraguas.', next: 'Ahora, un hábito que dejaste.' },
            { q: '¿Qué dejaste de hacer en los últimos años? ¿Y qué no dejas de hacer nunca? · What did you stop doing in recent years? And what do you never stop doing?', followUps: ['¿Por qué lo dejaste? (Why did you stop?)', '¿Lo echas de menos? (Do you miss it?)', '¿Qué cambió en tu vida? (What changed in your life?)'], phrases: ['Hace dos años [[dejé de|violet]]…', 'Nunca [[dejo de|violet]]…', 'Lo dejé porque…'], hint: 'Dejar **de** + infinitivo. Y «lo dejé», sin «de», con un pronombre o un nombre.', example: 'Hace dos años dejé de tomar café por la tarde: no dormía bien. Pero nunca dejo de caminar media hora al día, también cuando llueve.', next: 'Ahora, algo que no para.' },
            { q: '¿Qué cosa no para de pasar en tu barrio, en tu trabajo o en tu casa? · What keeps on happening in your neighbourhood, at work or at home?', followUps: ['¿Te molesta o te gusta? (Does it bother you or do you like it?)', '¿Qué haces para solucionarlo? (What do you do about it?)'], phrases: ['Mi vecino [[no para de|violet]]…', 'En mi trabajo, el teléfono [[no deja de|violet]]…', 'Este mes [[no ha parado de|violet]] llover.'], hint: 'No parar de (coloquial) = no dejar de: una y otra vez.', example: 'Mi vecino no para de hacer obras: lleva tres meses con el taladro. Y en mi trabajo el teléfono no deja de sonar los lunes.', next: 'Ahora, un logro.' },
            { q: 'Cuenta algo que llegaste a hacer y que nunca imaginaste, o algo que no llegaste a hacer. · Tell about something you went as far as doing and never imagined, or something you never got to do.', followUps: ['¿Cómo lo conseguiste? (How did you manage it?)', '¿Por qué no llegaste a hacerlo? (Why didn’t you get to do it?)'], phrases: ['Una vez [[llegué a|orange]] correr / hablar / ganar…', 'Al final [[no llegué a|orange]]…', 'Nunca pensé que…'], hint: 'Llegar **a** + infinitivo: el punto máximo; no llegar a: no pasó al final.', example: 'Hace unos años llegué a correr una maratón entera: nunca lo imaginé. Pero el viaje a Japón no llegué a hacerlo: cancelaron el vuelo.', next: 'Ahora, un plan que cambió.' },
            { q: '¿Alguna vez fuiste a hacer algo y acabaste haciendo otra cosa? · Did you ever set out to do one thing and end up doing something else?', followUps: ['¿Te gustó el resultado? (Did you like the result?)', '¿Te pasa a menudo? (Does it happen often?)'], phrases: ['Fui a… y [[acabé|orange]] comprando / hablando / trabajando…', 'Pensaba… pero [[terminé|orange]]…', 'Al final [[acabé por|orange]] + infinitivo.'], hint: 'Acabar o terminar + gerundio (o acabar por + infinitivo): el resultado final.', example: 'Fui a una tienda a comprar unos zapatos y acabé comprando un abrigo. Otra vez fui a una entrevista de prácticas y terminé trabajando allí cinco años.', next: 'Para terminar, tú eres Raquel.' },
            { q: 'Ahora tú eres Raquel. Un periodista te pregunta: «¿Cómo fueron estos veinticinco años?». Responde con cuatro perífrasis distintas. · Now you are Raquel: a journalist asks about your twenty-five years. Answer with four different periphrases.', followUps: ['¿Qué va a cambiar en su vida ahora? (What will change in your life now?)', '¿Qué consejo le da a Hugo? (What advice do you give Hugo?)'], phrases: ['Cuando empecé, [[acababa de|blue]]…', 'Pensaba quedarme un año y [[acabé|orange]]…', 'Una vez [[llegué a|orange]]…', 'Desde el lunes [[dejo de|violet]]…', 'Hugo, [[no dejes de|violet]]…'], hint: 'Una de cada tipo: reciente, resultado, punto máximo, parar.', example: 'Cuando empecé, acababa de llegar a la ciudad. Pensaba quedarme un año y acabé quedándome veinticinco. Una vez llegué a escribir la carta de renuncia. Desde el lunes dejo de madrugar. Y a Hugo le digo: no dejes de escuchar a los vecinos.', teacher: 'Tú eres el periodista y repreguntas: «¿Y por qué no entregó la carta?». Después cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué dejaste de hacer…?», «¿Alguna vez acabaste haciendo…?») y tú respondes con tus propias historias.', self: 'Ahora haz tú las preguntas en voz alta («¿Qué dejaste de hacer…?», «¿Alguna vez llegaste a…?») y respóndelas con otra historia. (Now ask the questions and answer with another story.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje de despedida', coach: 'Lo reciente, lo que dejas y cómo acabó. What’s recent, what you stop, how it ended.',
      steps: [
        { title: 'Despídete del grupo · Say goodbye to the group', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada perífrasis: ¿lleva la preposición correcta (de, a)? ¿Es reciente, una tarea, algo que se interrumpe o un resultado? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada perífrasis: ¿lleva la preposición correcta? ¿Dice lo que quieres decir? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Mi último día · My last day', situation: 'Dejas un trabajo, un equipo, un club o una clase (real o inventado). Escribe un mensaje de despedida al grupo: qué acabas de hacer, cómo fue tu historia allí, qué cambia ahora y qué les pides. (You are leaving a job, team, club or class. Write a goodbye message to the group.)', task: [
            'Di qué acabas de hacer hoy, en tu último día. (Say what you have just done on your last day.)',
            'Cuenta tu historia: algo que llegaste a hacer y algo que acabaste haciendo sin planearlo. (A high point and an unplanned result.)',
            'Di qué vas a dejar de hacer y qué vas a seguir haciendo. (What you will stop and what you will keep doing.)',
            'Termina con un consejo o una invitación con «no dejen de» o «no dejes de». (End with “be sure to…”.)',
          ], starters: ['¡Hola, equipo!', 'Acabo de…', 'Cuando llegué, acababa de…', 'Juntos llegamos a…', 'Pensaba… y acabé…', 'A partir del lunes dejo de…', 'Ahora termino de… y…', 'No dejen de…', 'Un abrazo,'],
            words: ['acabar de', 'acababa de', 'terminar de', 'dejar de', 'no dejar de', 'parar de', 'llegar a', 'acabar + gerundio', 'acabar por', 'a partir de', 'al final', 'con los años'],
            model: '¡Hola, equipo! [[Acabo de entregar|blue]] las llaves del estudio y quiero despedirme de ustedes. Cuando llegué a la radio, [[acababa de dejar|blue]] mi trabajo en una oficina y no sabía nada de micrófonos. Pensaba quedarme un año y [[acabé quedándome|orange]] veinticinco. Juntos [[llegamos a hacer|orange]] más de seis mil programas, ¡qué barbaridad! A partir del lunes [[dejo de madrugar|violet]] (por fin), pero voy a seguir escuchándolos cada mañana. Hugo, [[no dejes de llamarme|violet]] si tienes dudas. Y a todos: [[no dejen de cuidar|violet]] este programa, que es de los vecinos. Ahora [[termino de vaciar|teal]] mi última caja y me voy a comer con mi hermana. Gracias por todo. Un abrazo muy fuerte, Raquel.',
            minWords: 80,
            checks: [
              { label: 'Acabar de + infinitivo (just done)', pattern: '(?<!\\p{L})acab(?:o|as|a|amos|áis|an|aba|abas|ábamos|abais|aban)\\s+de\\s+\\p{L}+(?:ar|er|ir|ír)(?:me|te|se|lo|la|le|nos|os|los|las|les)?(?!\\p{L})', tip: 'Di qué acabas de hacer: «Acabo de entregar las llaves».' },
              { label: 'Dejar de o parar de + infinitivo (stop / keep on)', pattern: '(?<!\\p{L})(?:dej\\p{L}*|par(?:o|as|a|amos|an|é|ó|aron|ar))\\s+de\\s+\\p{L}+(?:ar|er|ir|ír)(?:me|te|se|lo|la|le|nos|os|los|las|les)?(?!\\p{L})', tip: 'Di qué vas a dejar de hacer: «A partir del lunes dejo de madrugar», o pide algo con «no dejen de…».' },
              { label: 'Llegar a + infinitivo, o acabar + gerundio (high point / result)', pattern: '(?<!\\p{L})(?:lleg\\p{L}*\\s+a\\s+\\p{L}+(?:ar|er|ir)|(?:acab|termin)\\p{L}*\\s+\\p{L}+(?:ando|iendo|yendo|ándo|iéndo|yéndo)(?:me|te|se|lo|la|le|nos|los|las|les)?|acab\\p{L}*\\s+por\\s+\\p{L}+(?:ar|er|ir))(?!\\p{L})', tip: 'Cuenta cómo acabó tu historia: «Acabé quedándome veinticinco años», «Llegamos a hacer seis mil programas».' },
              { label: 'Terminar de + infinitivo (finishing a task)', pattern: '(?<!\\p{L})termin\\p{L}*\\s+de\\s+\\p{L}+(?:ar|er|ir|ír)(?:me|te|se|lo|la|le|nos|os|los|las|les)?(?!\\p{L})', tip: 'Di qué tarea completas antes de irte: «Ahora termino de vaciar mi última caja».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})acab(?:o|as|a|amos|an|aba|abas|ábamos|aban)\\s+de\\s+\\p{L}+(?:é|ó|aste|aron|ieron|iste)(?!\\p{L})', why: 'Después de «acabar de», infinitivo: **acabo de llegar**, no «acabo de llegué».' },
              { pattern: '(?<!\\p{L})lleg(?:o|as|a|amos|an|ó|ué|aste|amos|aron|aba|aban)\\s+(?:ser|tener|hacer|ganar|conocer|pensar|trabajar)(?!\\p{L})', why: 'Llegar lleva **a** delante del infinitivo: **llegó a ser**, llegamos a hacer.' },
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
            { tone: 'blue', label: 'ACABAR DE', formula: 'acabo de · acababa de + infinitivo', example: 'Acabo de llegar. Acababa de salir cuando llamaste.', caption: 'hace muy poco; en indefinido o futuro = terminar', en: 'just done; in the preterite or future it means “to finish”' },
            { tone: 'teal', label: 'TERMINAR DE', formula: 'termino de · terminé de + infinitivo', example: 'Termino de leer el guion y te llamo.', caption: 'completar una tarea empezada', en: 'to complete a task already under way' },
            { tone: 'violet', label: 'DEJAR DE · PARAR DE · NO DEJAR DE', formula: 'dejé de · no para de · no dejes de + infinitivo', example: 'Dejé de madrugar. No dejes de llamarme.', caption: 'interrumpir; con «no», una y otra vez o «no te lo pierdas»', en: 'to stop; with “no”, to keep on or “be sure to”' },
            { tone: 'orange', label: 'LLEGAR A · ACABAR + GERUNDIO', formula: 'llegó a + infinitivo · acabé + gerundio · acabé por + infinitivo', example: 'Llegó a tener veinte mil oyentes. Acabé quedándome.', caption: 'el punto máximo; el resultado final', en: 'the high point; the final result' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: '**Acabo de** = hace muy poco; **termino de** = completo la tarea; **dejo de** = ya no lo hago. Sin «de», **dejar** + infinitivo es permitir. Con «no», **no dejar de** es insistir o aconsejar. Y para contar cómo acabó una historia: **llegar a** + infinitivo (hasta dónde llegó) y **acabar** + gerundio (cómo terminó).', en: '“Acabo de” = just now; “termino de” = I complete the task; “dejo de” = I don’t do it any more. Without “de”, “dejar” + infinitive means to let. With “no”, “no dejar de” means to keep on or to be sure to. And to tell how a story ended: “llegar a” + infinitive (how far it went) and “acabar” + gerund (how it turned out).' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '—¿Hay café? —Sí, Lola ___ hacerlo.', options: ['llega a', 'deja de', 'acaba de'], answer: 2, why: 'Lo hizo hace muy poco: acaba de.', en: '—Is there any coffee? —Yes, Lola has just made it.' },
            { prompt: 'Cuando llegamos al cine, la película ya ___ empezar.', options: ['acababa de', 'acaba de', 'llegaba a'], answer: 0, why: 'Justo antes de otro momento pasado: acababa de (imperfecto).', en: 'When we got to the cinema, the film had just started.' },
            { prompt: 'Mi abuela ___ conducir a los ochenta años: ya no veía bien.', options: ['terminó de', 'dejó de', 'dejó'], answer: 1, why: 'Un hábito que terminó: dejar de. Terminar de es para tareas concretas.', en: 'My grandmother stopped driving at eighty: she couldn’t see well any more.' },
            { prompt: 'Si vas a Lima, ___ visitar el barrio de Barranco.', options: ['no dejes de', 'no dejas de', 'deja de'], answer: 0, why: 'Un consejo: imperativo negativo, no dejes de (be sure to).', en: 'If you go to Lima, be sure to visit the Barranco district.' },
            { prompt: 'No me gustaba el jazz, pero con los años ___ por encantarme.', options: ['llegó', 'terminó de', 'acabó'], answer: 2, why: 'El resultado final: acabar por + infinitivo.', en: 'I didn’t like jazz, but over the years I ended up loving it.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Un año después. One year later.', blocks: [
          { kind: 'lead', text: 'Un año después, Raquel vive en la costa y le escribe a Hugo. Transforma sus frases.', en: 'A year later, Raquel lives on the coast and writes to Hugo. Transform her sentences.' },
          { kind: 'rewrite', title: 'El mensaje de Raquel · Raquel’s message', items: [
            { prompt: 'Al principio no quería vivir en la costa, pero al final me mudé.', instruction: 'Usa acabar + gerundio. Empieza con «Al final».', accept: ['Al final acabé mudándome a la costa', 'Al final terminé mudándome a la costa', 'Al final acabé mudándome', 'Al final terminé mudándome'] },
            { prompt: 'Ya no leo el periódico en papel.', instruction: 'Usa dejar de en indefinido. Empieza con «Dejé».', accept: ['Dejé de leer el periódico en papel'] },
            { prompt: 'Escuché tu programa hace un minuto.', instruction: 'Usa acabar de en presente y cambia «tu programa» por «lo». (Use acabar de and “lo”.)', accept: ['Lo acabo de escuchar', 'Acabo de escucharlo'] },
          ] },
        ] },
        { title: 'Ampliación: no acabar de, recién y registro formal · Extension: nuance and register', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: matices y variedades. Optional: nuance and varieties.', blocks: [
          { kind: 'lead', text: '**No acabar de** + infinitivo significa «no del todo» (not quite): «No acabo de entender este cambio», «La idea no me acaba de convencer». En muchas zonas de América, **recién** + indefinido equivale a «acabar de»: «Recién llegué» = acabo de llegar; en España, «recién» va sobre todo con participios: «pan recién hecho». **Terminar** + gerundio («terminé aceptando») es tan normal como acabar + gerundio, y muy frecuente en América. Y en avisos y cartas formales, **dejar de** anuncia cambios («El servicio dejará de funcionar») y **no deje de** invita con cortesía.', en: '“No acabar de” + infinitive means “not quite”: “I don’t quite understand this change”, “The idea doesn’t quite convince me.” In many parts of Latin America, “recién” + preterite works like “acabar de”: “Recién llegué” = I’ve just arrived; in Spain, “recién” goes mainly with past participles: “freshly baked bread”. “Terminar” + gerund is as normal as “acabar” + gerund, and very common in Latin America. And in formal notices and letters, “dejar de” announces changes (“The service will stop working”) and “no deje de” is a polite invitation.' },
          { kind: 'choice', title: 'Matices y registro · Nuance and register', items: [
            { context: 'Una reunión. (A meeting.)', prompt: '«Lo siento, pero tu propuesta no me ___ convencer».', options: ['acaba de', 'deja de', 'llega de'], answer: 0, why: 'No acabar de + infinitivo: no del todo. Es una forma suave de decir que no.', en: '“Sorry, but your proposal doesn’t quite convince me.”' },
            { context: 'En Ciudad de México, por teléfono. (In Mexico City, on the phone.)', prompt: '«¿Dónde estás? —___ llegué, estoy en la entrada».', options: ['Recién', 'Recientemente', 'Acabé'], answer: 0, why: 'En muchas zonas de América, recién + indefinido = acabo de llegar. «Recientemente» es más formal y aquí no suena natural.', en: '“Where are you? —I’ve just arrived, I’m at the entrance.”' },
            { context: 'Aviso de una empresa de transporte. (A transport company notice.)', prompt: '«La línea 4 ___ funcionar los domingos a partir de enero».', options: ['dejará de', 'acabará de', 'parará de'], answer: 0, why: 'En un aviso formal, dejar de. Parar de es coloquial; «acabará de funcionar» significaría «terminará de funcionar».', en: '“Line 4 will stop running on Sundays from January.”' },
            { context: 'Una carta formal. (A formal letter.)', prompt: '«Si tiene cualquier duda, no ___ consultarnos».', options: ['deje de', 'acabe de', 'pare de'], answer: 0, why: 'Una invitación cortés con usted: no deje de + infinitivo.', en: '“If you have any questions, please do not hesitate to contact us.”' },
            { context: 'Una amiga cuenta. (A friend tells a story.)', prompt: '«Fui a mirar zapatos y ___ comprándome un abrigo».', options: ['terminé', 'terminé de', 'dejé de'], answer: 0, why: 'El resultado final: terminar + gerundio, igual que acabar + gerundio.', en: '“I went to look at shoes and ended up buying myself a coat.”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno dice dos cosas que no acaba de entender de su trabajo o de su ciudad, con «no acabo de…».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 109 · Volver a + infinitivo y repetición', text: 'Ya hablas del final de una acción: lo que acabas de hacer, lo que terminas, lo que dejas de hacer y cómo acaba una historia. En la clase 109 ves qué pasa cuando algo que dejaste **vuelve** a empezar o se repite: «Volví a madrugar», «Mañana vuelvo a llamarte». Es el paso natural: después de dejar algo, a veces lo retomamos.', en: 'You can now talk about the end of an action: what you have just done, what you finish, what you stop doing and how a story ends. In class 109 you see what happens when something you stopped starts again or is repeated: “I started getting up early again”, “I’ll call you again tomorrow.” It is the natural next step: after stopping something, sometimes we take it up again.', href: '/gramatica/volver-a-infinitivo-y-repeticion', label: 'Ir a la clase 109' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué acabas de aprender hoy y qué vas a dejar de hacer cuando hablas español?». Respuesta esperada: acabar de + infinitivo y dejar de + infinitivo. Tarea: escribir el mensaje de Escribir con una historia real.' },
        ] },
      ],
    },
  ],
};
