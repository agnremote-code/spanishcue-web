import type { LiveLesson } from '../types';

/**
 * Lesson 430 · B2 · Correlación temporal: presente, pasado y futuro (course unit G130).
 * Builds on G128 (imperfecto de subjuntivo, forms) and G129 (influence verbs in the past).
 * One scene runs through the class: Nuria Campos, editor at a small publishing house
 * in Madrid, prepares the Friday launch of Héctor Lima's first novel at Carmen Vidal's
 * bookshop; Paula Ortiz designs the poster and a local radio wants an interview.
 * Explorar: Monday meeting Nuria–Héctor. Escuchar: Nuria's voicemail to Héctor
 * (es-ES-ElviraNeural). Escribir: Héctor's thank-you email after the launch.
 * Content: main verb in present / future / imperative / present perfect → presente de
 * subjuntivo (quiero que vengas, le diré que venga, dile que venga, he pedido que lo
 * revisen); past tenses and conditional → imperfecto de subjuntivo (quería que vinieras,
 * le había pedido que, me gustaría que vinieras); perfecto de subjuntivo for a prior
 * action seen from now (espero que hayas llegado bien) and imperfecto for a closed past
 * seen from a present (me alegra que vinieras ayer); the same logic in temporal and final
 * clauses (cuando llegara, para que pudiera; me llamó cuando llegó = indicative).
 * Exception (NGLE): past main verb + presente de subjuntivo when the content is still
 * pending or valid (Ayer me pidió que lo llame mañana); the imperfect is always correct.
 * Pluscuamperfecto de subjuntivo (G133) appears only receptively, glossed.
 */
export const lesson: LiveLesson = {
  id: 430,
  level: 'B2',
  title: 'Correlación temporal: presente, pasado y futuro',
  subtitle: 'Elegir venga, viniera o haya venido según el verbo principal y el momento de la acción, también tras cuando y para que.',
  legend: [
    { tone: 'blue', label: 'MARCO PRESENTE · quiero, diré, dile, he pedido → presente de subjuntivo (venga)' },
    { tone: 'orange', label: 'MARCO PASADO · quería, pidió, había pedido, me gustaría → imperfecto de subjuntivo (viniera)' },
    { tone: 'teal', label: 'ANTERIOR AL AHORA · espero que hayas llegado, me alegra que vinieras ayer' },
    { tone: 'violet', label: 'EXCEPCIÓN · pasado + presente de subjuntivo si el contenido sigue pendiente' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El verbo principal marca el tiempo', coach: 'Mira primero el verbo principal. Look at the main verb first.',
      steps: [
        { title: 'Cuatro días antes · Four days before', blocks: [
          { kind: 'lead', text: 'Nuria Campos es editora en una editorial pequeña de Madrid. El viernes presentan la primera novela de Héctor Lima en la librería de Carmen Vidal. Hace un mes, Carmen **quería que** la presentación **fuera** un sábado; hoy Nuria **quiere que** todo **esté** listo para el viernes. Hoy aprendes a elegir el tiempo del subjuntivo según el verbo principal y según el momento de la acción: la **correlación temporal** (o concordancia de tiempos).', en: 'Nuria Campos is an editor at a small publishing house in Madrid. On Friday they launch Héctor Lima’s first novel at Carmen Vidal’s bookshop. A month ago Carmen wanted the launch to be on a Saturday; today Nuria wants everything ready for Friday. Today you learn to choose the subjunctive tense from the main verb and from when the action happens: the sequence of tenses.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases y tu alumno dice en qué tiempo está cada verbo principal y qué subjuntivo lo acompaña.', self: 'Lee las dos frases en voz alta. ¿En qué tiempo está el verbo principal? ¿Qué subjuntivo lo acompaña? (Which tense is the main verb in, and which subjunctive follows it?)' } },
          { kind: 'compare', title: 'Mismo deseo, dos marcos · Same wish, two frames', columns: [
            { tone: 'blue', label: 'MARCO PRESENTE', sentence: 'Nuria quiere que Héctor [[venga|blue]] media hora antes.', idea: 'El verbo principal está en presente: el subjuntivo va en presente.', en: 'Nuria wants Héctor to come half an hour early: the wish is made now, so the subjunctive stays in the present.' },
            { tone: 'orange', label: 'MARCO PASADO', sentence: 'Hace un mes, Carmen quería que la presentación [[fuera|orange]] un sábado.', idea: 'El verbo principal está en pasado: el subjuntivo pasa al imperfecto.', en: 'A month ago Carmen wanted the launch to be on a Saturday: the wish belongs to the past, so the subjunctive moves to the imperfect.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Nuria necesita que Paula ___ los carteles hoy.', options: ['diseña', 'diseñara', 'diseñe'], answer: 2, why: '«Necesita» (presente) → presente de subjuntivo: diseñe. «Diseña» es indicativo y no va tras «necesitar que».', en: 'Nuria needs Paula to design the posters today.' },
            { prompt: 'La semana pasada, Héctor le pidió a Nuria que ___ la fecha, y ella la cambió.', options: ['cambiara', 'cambie', 'cambió'], answer: 0, why: '«Pidió» (indefinido) y la petición ya se cumplió: imperfecto de subjuntivo, cambiara.', en: 'Last week Héctor asked Nuria to change the date, and she did.' },
          ] },
        ] },
        { title: 'Dos marcos · Two frames', mascot: '/brand/mascot/studying.webp', coach: 'Desde ahora o desde el pasado. From now or from the past.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'MARCO PRESENTE O FUTURO', question: '¿El verbo principal mira desde ahora?', en: 'When the main verb speaks from the present (present, future, imperative or present perfect), the subordinate verb goes in the present subjunctive.', formula: ['presente · futuro · imperativo · pretérito perfecto', '+ que + PRESENTE DE SUBJUNTIVO'],
            meaning: 'Si el verbo que pide, desea, valora o necesita está en **presente, futuro, imperativo o pretérito perfecto**, el verbo de la subordinada va en **presente de subjuntivo**.',
            examples: [
              { es: 'Quiero que la presentación [[sea|blue]] sencilla.', en: 'I want the launch to be simple.' },
              { es: 'Le diré a Paula que [[cambie|blue]] el color del título.', en: 'I’ll tell Paula to change the colour of the title.' },
              { es: 'Dile a Carmen que [[prepare|blue]] ochenta sillas.', en: 'Tell Carmen to set out eighty chairs.' },
              { es: 'Esta mañana he pedido que [[revisen|blue]] las pruebas de imprenta.', en: 'This morning I asked them to check the printer’s proofs.' },
            ],
            note: 'Con el **pretérito perfecto** lo más frecuente es el presente de subjuntivo. También aparece el imperfecto («Le he pedido que lo revisara»), sobre todo cuando la acción pedida se ve ya como pasada; hoy practicas el presente, que es la opción general.' },
          { kind: 'concept', tone: 'orange', label: 'MARCO PASADO O CONDICIONAL', question: '¿El verbo principal mira desde el pasado o es hipotético?', en: 'When the main verb is in a past tense or in the conditional, the subordinate verb normally goes in the imperfect subjunctive.', formula: ['indefinido · imperfecto · pluscuamperfecto · condicional', '+ que + IMPERFECTO DE SUBJUNTIVO'],
            meaning: 'Si el verbo principal está en un **tiempo del pasado** o en **condicional**, la subordinada va en **imperfecto de subjuntivo** (en -ra o en -se, clase 128).',
            examples: [
              { es: 'Carmen me pidió que le [[mandara|orange]] el cartel.', en: 'Carmen asked me to send her the poster.' },
              { es: 'Al principio, Héctor no quería que su foto [[apareciera|orange]] en el libro.', en: 'At first, Héctor didn’t want his photo to appear in the book.' },
              { es: 'Héctor ya me había pedido que [[reserváramos|orange]] una mesa para firmar.', en: 'Héctor had already asked me to book a table for signing.' },
              { es: 'Me gustaría que [[leyeras|orange]] el primer capítulo.', en: 'I’d like you to read the first chapter.' },
            ] },
          { kind: 'table', title: 'El mismo mensaje en ocho marcos · The same message in eight frames', head: ['Verbo principal', 'Ejemplo', 'Subjuntivo'], rows: [
            ['Presente · quiero', 'Quiero que Héctor **venga** a las seis y media.', 'presente'],
            ['Futuro · le diré', 'Le diré que **venga** a las seis y media.', 'presente'],
            ['Imperativo · dile', 'Dile que **venga** a las seis y media.', 'presente'],
            ['Pretérito perfecto · le he pedido', 'Le he pedido que **venga** a las seis y media.', 'presente (lo más frecuente)'],
            ['Indefinido · le pedí', 'Le pedí que **viniera** a las seis y media.', 'imperfecto'],
            ['Imperfecto · quería', 'Quería que **viniera** a las seis y media.', 'imperfecto'],
            ['Pluscuamperfecto · le había pedido', 'Le había pedido que **viniera** a las seis y media.', 'imperfecto'],
            ['Condicional · me gustaría', 'Me gustaría que **viniera** a las seis y media.', 'imperfecto'],
          ], note: '«Viniera» y «viniese» son equivalentes. En la lengua oral domina la forma en -ra, sobre todo en América.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El jueves le pediré a Paula que ___ los carteles a la librería.', options: ['llevara', 'lleve', 'llevaría'], answer: 1, why: '«Pediré» (futuro) mira desde ahora hacia delante: presente de subjuntivo, lleve. El condicional no va tras «pedir que».', en: 'On Thursday I’ll ask Paula to take the posters to the bookshop.' },
            { prompt: 'Nos encantaría que ___ muchos lectores el viernes.', options: ['vengan', 'vinieran', 'vendrían'], answer: 1, why: '«Encantaría» (condicional) → imperfecto de subjuntivo: vinieran.', en: 'We’d love lots of readers to come on Friday.' },
            { prompt: 'Al principio, Héctor no quería que la novela ___ tan larga, pero luego cambió de idea.', options: ['sea', 'era', 'fuera'], answer: 2, why: '«Quería» describe una opinión del pasado que ya cambió: imperfecto de subjuntivo, fuera.', en: 'At first Héctor didn’t want the novel to be so long, but then he changed his mind.' },
          ] },
        ] },
        { title: 'Antes, ahora, después · Before, now, after', mascot: '/brand/mascot/standing.webp', coach: '¿Cuándo pasa la acción? When does the action happen?', blocks: [
          { kind: 'compare', title: 'Desde un presente puedes mirar atrás · From a present you can look back', columns: [
            { tone: 'blue', label: 'AHORA O DESPUÉS · presente', sentence: 'Espero que [[llegues|blue]] bien a Valencia.', idea: 'Héctor todavía está en el tren: la llegada es ahora o después.', en: 'I hope you get to Valencia safely (he is still travelling).' },
            { tone: 'teal', label: 'ANTES DE AHORA · perfecto', sentence: 'Espero que [[hayas llegado|teal]] bien a Valencia.', idea: 'Nuria supone que Héctor ya ha llegado: la acción es anterior al momento en que habla.', en: 'I hope you got to Valencia safely (she assumes the trip is over).' },
            { tone: 'teal', label: 'PASADO CERRADO · imperfecto', sentence: 'Me alegra que [[vinieras|teal]] ayer a la reunión.', idea: 'El verbo principal está en presente, pero el hecho está en un pasado cerrado (ayer).', en: 'I’m glad you came to the meeting yesterday: a present feeling about a finished past event.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'La correlación no es automática · It is not automatic', text: 'Los dos marcos sirven para la mayoría de los casos, pero lo que decide de verdad es **cuándo ocurre** lo que dice la subordinada. Desde un presente puedes hablar de un pasado: «No creo que Héctor **supiera** nada de la entrevista», «Es una pena que ayer no **pudieras** venir».', en: 'The two frames cover most cases, but what really decides is when the action in the subordinate clause takes place. From a present-tense main verb you can refer back to the past: “I don’t think Héctor knew anything about the interview”, “It’s a pity you couldn’t come yesterday”.' },
          { kind: 'tip', icon: '🔎', title: 'Solo para reconocer · Recognition only: hubiera avisado', text: 'Si el verbo principal está en pasado y la acción de la subordinada es todavía anterior, aparece el **pluscuamperfecto de subjuntivo**: «Me molestó que la imprenta no nos **hubiera avisado** del retraso». Lo estudias en la clase 133; hoy solo tienes que reconocerlo.', en: 'If the main verb is in the past and the subordinate action happened even earlier, Spanish uses the pluperfect subjunctive: “It annoyed me that the printer hadn’t warned us about the delay”. You study it in class 133; today you only need to recognise it.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Héctor salió de Madrid a las ocho. A las once, Nuria le escribe: «Espero que ___ bien».', options: ['habrás llegado', 'llegues', 'hayas llegado'], answer: 2, why: 'Nuria supone que el viaje ya ha terminado: acción anterior al momento de hablar → perfecto de subjuntivo. «Llegues» miraría a una llegada todavía futura.', en: 'Nuria assumes he has already arrived.' },
            { prompt: 'Es una pena que ayer no ___ venir a la reunión.', options: ['pudieras', 'podías', 'puedas'], answer: 0, why: '«Es una pena» (presente) pide subjuntivo; el hecho está en un pasado cerrado (ayer): imperfecto, pudieras. «Podías» es indicativo.', en: 'It’s a pity you couldn’t come to the meeting yesterday.' },
            { prompt: '«Me sorprendió que no nos hubieran avisado». ¿Qué expresa «hubieran avisado»?', options: ['Una acción anterior a «me sorprendió».', 'Una acción posterior a «me sorprendió».', 'Un deseo para el futuro.'], answer: 0, why: 'Pluscuamperfecto de subjuntivo: primero no nos avisaron; después nos sorprendió.', en: 'What does “hubieran avisado” express?' },
          ] },
        ] },
        { title: 'Cuando y para que · Time and purpose clauses', mascot: '/brand/mascot/speaking.webp', coach: 'La misma lógica. The same logic.', blocks: [
          { kind: 'table', title: 'La misma correlación en temporales y finales · The same pattern in time and purpose clauses', head: ['Tipo', 'Desde ahora · presente de subjuntivo', 'Desde el pasado · imperfecto de subjuntivo'], rows: [
            ['Temporal futura', 'Te llamaré **cuando llegue** a Valencia.', 'Me dijo que me llamaría **cuando llegara** a Valencia.'],
            ['En cuanto', 'Te escribo **en cuanto sepa** algo.', 'Me prometió que me escribiría **en cuanto supiera** algo.'],
            ['Final', 'Te mando el texto **para que** lo **revises**.', 'Le mandé el texto **para que** lo **revisara**.'],
          ], note: '«Cuando» + subjuntivo solo si la acción es futura respecto al verbo principal. Si cuentas un hecho real del pasado, va en indicativo: «Me llamó **cuando llegó**».' },
          { kind: 'compare', title: 'La excepción: el contenido sigue pendiente · The exception', columns: [
            { tone: 'orange', label: 'SIEMPRE CORRECTO · imperfecto', sentence: 'Ayer Carmen me pidió que le [[confirmara|orange]] el número de sillas antes del jueves.', idea: 'El subjuntivo sigue al verbo principal en pasado.', en: 'Yesterday Carmen asked me to confirm the number of chairs before Thursday: the standard sequence, always correct.' },
            { tone: 'violet', label: 'TAMBIÉN POSIBLE · presente', sentence: 'Ayer Carmen me pidió que le [[confirme|violet]] el número de sillas antes del jueves.', idea: 'La petición sigue pendiente: el jueves todavía no ha llegado. Es muy frecuente en América y en la prensa, y también se usa en España.', en: 'The present subjunctive is possible after a past verb when what was asked is still pending or still true now; it stresses that the request is still open.' },
          ] },
          { kind: 'decide', title: 'Tras un verbo en pasado: ¿imperfecto o presente?', steps: [
            { q: '¿La acción de la subordinada ya pasó o solo pertenece a esa situación pasada?', yes: 'Solo **imperfecto de subjuntivo**: «En marzo me pidió que cambiara la fecha, y la cambié».', no: 'next' },
            { q: '¿Lo que se pidió, se deseó o se dijo sigue pendiente o vigente ahora?', yes: 'Las dos formas son correctas: «Ayer me pidió que lo **llamara** / **llame** mañana». El imperfecto es siempre seguro; el presente subraya que sigue pendiente.', no: 'Usa el **imperfecto de subjuntivo**: es la opción general.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hace un mes, Carmen nos pidió que ___ la presentación, y la retrasamos una semana.', options: ['retrasáramos', 'retrasamos', 'retrasemos'], answer: 0, why: 'La petición ya se cumplió: pasado cerrado. Solo imperfecto de subjuntivo: retrasáramos.', en: 'A month ago Carmen asked us to postpone the launch, and we put it back a week.' },
            { prompt: 'El lunes, Héctor me dijo que me llamaría en cuanto ___ a Valencia, y me llamó el martes por la noche.', options: ['llegara', 'llegue', 'llegó'], answer: 0, why: '«Llamaría» es un futuro visto desde el pasado y todo ya ocurrió: en cuanto + imperfecto de subjuntivo, llegara.', en: 'On Monday Héctor told me he’d call as soon as he got to Valencia, and he called on Tuesday night.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Marco presente o pasado? Present or past frame?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: el marco del verbo principal o el momento de la acción. Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿qué falla, el marco o el momento de la acción? Toca para ver la corrección. (What goes wrong: the frame or the time of the action?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Mi editor anterior quería que cambie el final, y al final lo cambié.', right: 'Mi editor anterior quería que cambiara el final, y al final lo cambié.', why: '«Quería» habla de una situación pasada y cerrada: imperfecto de subjuntivo. (A closed past wish takes the imperfect subjunctive.)' },
            { wrong: 'Me gustaría que vengas a la presentación.', right: 'Me gustaría que vinieras a la presentación.', why: 'Tras condicional, imperfecto de subjuntivo. «Me gustaría que vengas» se oye en el habla coloquial de algunas zonas de América, pero la lengua cuidada usa «vinieras».' },
            { wrong: 'Quiero que mañana vinieras antes.', right: 'Quiero que mañana vengas antes.', why: '«Quiero» (presente) + acción futura (mañana): presente de subjuntivo.' },
            { wrong: 'Me llamó cuando llegara a Valencia.', right: 'Me llamó cuando llegó a Valencia.', why: 'Es un hecho real del pasado: cuando + indicativo. «Cuando llegara» solo si la llegada es futura desde ese pasado: «Dijo que me llamaría cuando llegara».' },
            { wrong: 'Espero que llegaste bien.', right: 'Espero que hayas llegado bien.', why: '«Esperar que» (deseo) pide subjuntivo; si la acción ya terminó, perfecto de subjuntivo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En 2023, Nuria contrató a Paula para que ___ las portadas de una colección de poesía, que salió en junio.', options: ['diseñe', 'diseñara', 'diseñó'], answer: 1, why: '«Contrató» (pasado) + para que, y la colección ya salió: imperfecto de subjuntivo, diseñara.', en: 'In 2023 Nuria hired Paula to design the covers of a poetry series, which came out in June.' },
            { prompt: 'Antes de colgar, Nuria le dice a Héctor: «Llámame cuando ___ el mensaje».', options: ['escucharas', 'escuchas', 'escuches'], answer: 2, why: 'Imperativo («llámame») + cuando + acción futura: presente de subjuntivo, escuches.', en: 'Call me when you listen to this message.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice una cosa que sus padres querían que hiciera de niño y una cosa que quiere que pase este año. Tú preguntas: «¿Por qué cambia el subjuntivo?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reunión del lunes', coach: 'Toca cada subjuntivo marcado. Tap each marked subjunctive.',
      steps: [
        { title: 'En la editorial · At the publishing house', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Nuria y tu alumno es Héctor. Después tu alumno toca cada forma marcada y dice cuál es el verbo principal que la explica.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada y busca el verbo principal que la explica. (Find the main verb behind each marked form.)' } },
          { kind: 'explore', title: 'Faltan cuatro días', setting: 'Lunes por la mañana, en la editorial. Nuria y Héctor repasan los detalles de la presentación del viernes. Se tratan de tú. (Monday morning at the publishing house: Nuria and Héctor go over the details of Friday’s launch.)', lines: [
            { who: 'Nuria', text: 'Bueno, Héctor, faltan cuatro días. Carmen me llamó ayer y me pidió que le [[confirmáramos|orange]] cuánta gente esperamos.', en: 'Right, Héctor, four days to go. Carmen called me yesterday and asked us to confirm how many people we expect.' },
            { who: 'Héctor', text: '¿Y qué le dijiste?', en: 'And what did you tell her?' },
            { who: 'Nuria', text: 'Que [[prepare|violet]] unas ochenta sillas. Todavía no lo ha cerrado, así que hoy le escribo otra vez.', en: 'To set out about eighty chairs. She hasn’t settled it yet, so I’m writing to her again today.' },
            { who: 'Héctor', text: '¿Ochenta? Mi editor anterior quería que las presentaciones [[fueran|orange]] siempre pequeñas, para que nadie [[viera|orange]] sillas vacías.', en: 'Eighty? My previous editor wanted launches to be small every time, so that nobody would see empty chairs.' },
            { who: 'Nuria', text: 'Pues yo prefiero que la sala [[esté|blue]] llena. Por cierto, la radio local ha pedido que [[hagas|blue]] una entrevista el jueves.', en: 'Well, I’d rather the room were full. By the way, the local radio station has asked you to do an interview on Thursday.' },
            { who: 'Héctor', text: '¿Una entrevista? Me encantaría, pero me gustaría que me [[mandaran|orange]] las preguntas antes.', en: 'An interview? I’d love to, but I’d like them to send me the questions beforehand.' },
            { who: 'Nuria', text: 'Se lo diré, aunque no creo que te las [[manden|blue]]: es un programa en directo. Eso sí, les pediré que te [[dejen|blue]] leer un fragmento.', en: 'I’ll tell them, though I doubt they’ll send them: it’s a live programme. I will ask them to let you read an extract, though.' },
            { who: 'Héctor', text: 'Vale. Y espero que Paula ya [[haya terminado|teal]] el cartel. El viernes pasado me dijo que lo tendría listo en cuanto [[recibiera|orange]] la foto.', en: 'OK. And I hope Paula has finished the poster by now. Last Friday she told me she’d have it ready as soon as she got the photo.' },
            { who: 'Nuria', text: 'Lo terminó ayer. Me alegra que al final [[eligieras|teal]] la foto del puerto; la otra no convencía a nadie.', en: 'She finished it yesterday. I’m glad you went for the harbour photo in the end; nobody liked the other one.' },
            { who: 'Héctor', text: '¿Y qué quieres que [[haga|blue]] yo el viernes?', en: 'And what do you want me to do on Friday?' },
            { who: 'Nuria', text: 'Que [[llegues|blue]] a las seis y media, para que [[probemos|blue]] el micrófono. Y me gustaría que [[leyeras|orange]] el primer capítulo en voz alta.', en: 'Get there at half past six, so we can test the microphone. And I’d like you to read the first chapter aloud.' },
            { who: 'Héctor', text: '¿Entero? Entonces dile a Carmen que me [[guarde|blue]] un vaso de agua en la mesa.', en: 'The whole thing? Then tell Carmen to keep a glass of water on the table for me.' },
          ], notes: {
            'confirmáramos': '«Me pidió» (indefinido) → imperfecto de subjuntivo. Es la correlación general y siempre es correcta.',
            'prepare': 'Excepción: «(Le dije) que prepare»: tras un verbo en pasado, presente de subjuntivo, porque la petición sigue pendiente (Carmen aún no lo ha cerrado). «Que preparara» también sería correcto.',
            'fueran': '«Quería» (imperfecto) habla de una costumbre del editor anterior, ya pasada: imperfecto de subjuntivo.',
            'viera': 'Final con «para que» dentro de un marco pasado: el subjuntivo también pasa al imperfecto.',
            'esté': '«Prefiero» (presente) → presente de subjuntivo: esté.',
            'hagas': '«Ha pedido» (pretérito perfecto) → presente de subjuntivo, lo más frecuente. La entrevista todavía es futura.',
            'mandaran': '«Me gustaría» (condicional) → imperfecto de subjuntivo. Es una petición suave.',
            'manden': '«No creo que» (presente, opinión negada, clase 093) + acción futura → presente de subjuntivo.',
            'dejen': '«Les pediré» (futuro) → presente de subjuntivo.',
            'haya terminado': '«Espero que» + acción que Héctor supone ya terminada → perfecto de subjuntivo.',
            'recibiera': '«Me dijo que lo tendría listo en cuanto recibiera»: un futuro visto desde el pasado. En cuanto + imperfecto de subjuntivo.',
            'eligieras': '«Me alegra» está en presente, pero la elección es un hecho pasado y cerrado: imperfecto de subjuntivo. También es posible «que hayas elegido».',
            'haga': '«Quieres» (presente) → presente de subjuntivo: ¿qué quieres que haga?',
            'llegues': 'Respuesta elíptica: «(Quiero) que llegues». Marco presente y acción futura.',
            'probemos': '«Para que» dentro de un marco presente: presente de subjuntivo.',
            'leyeras': '«Me gustaría» (condicional) → imperfecto de subjuntivo. Más amable que «quiero que leas».',
            'guarde': '«Dile» (imperativo) → presente de subjuntivo.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué le pidió Carmen a Nuria?', options: ['Que le mandara el cartel.', 'Que le confirmara cuánta gente esperan.', 'Que cambiara la fecha.'], answer: 1, why: '«Me pidió que le confirmáramos cuánta gente esperamos».', en: 'What did Carmen ask Nuria?' },
            { prompt: '¿Qué le gustaría a Héctor antes de la entrevista?', options: ['Que Nuria fuera con él.', 'Que la entrevista fuera grabada.', 'Que la radio le mandara las preguntas.'], answer: 2, why: '«Me gustaría que me mandaran las preguntas antes».', en: 'What would Héctor like before the interview?' },
            { prompt: '¿Qué quiere Nuria que haga Héctor el viernes?', options: ['Que llegue a las seis y media y lea el primer capítulo.', 'Que firme libros toda la tarde.', 'Que hable de su editor anterior.'], answer: 0, why: '«Que llegues a las seis y media» y «me gustaría que leyeras el primer capítulo».', en: 'What does Nuria want Héctor to do on Friday?' },
          ] },
        ] },
        { title: 'Nuria llama a Carmen · Nuria calls Carmen', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Después de la reunión · After the meeting', lines: [
            { who: 'Nuria', text: 'Hola, Carmen. Ayer me pediste que te ___ el número de asistentes: unos ochenta.', options: ['confirmaré', 'confirmaría', 'confirmara'], answer: 2, why: '«Me pediste» (indefinido) → imperfecto de subjuntivo: confirmara.' },
            { who: 'Carmen', text: 'Perfecto. Quiero que la gente ___ cómoda, así que pondré sillas para todos.', options: ['esté', 'estuviera', 'está'], answer: 0, why: '«Quiero» (presente) → presente de subjuntivo: esté.' },
            { who: 'Nuria', text: 'Genial. Héctor también me ha pedido que ___ una mesa para firmar libros.', options: ['pondrás', 'pongas', 'pones'], answer: 1, why: '«Me ha pedido» (pretérito perfecto) → presente de subjuntivo: pongas.' },
            { who: 'Carmen', text: 'Claro. Y me encantaría que Héctor ___ algunos ejemplares firmados para la librería.', options: ['dejara', 'deja', 'deje'], answer: 0, why: '«Me encantaría» (condicional) → imperfecto de subjuntivo: dejara.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué te pidió alguien la semana pasada? ¿Qué quieres que haga alguien esta semana?». Tu alumno responde con una frase de cada marco.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Marco y momento. Frame and timing.',
      steps: [
        { title: 'Los correos de la semana · The week’s emails', blocks: [
          { kind: 'choice', items: [
            { context: 'Correo de Nuria a la imprenta. (Nuria’s email to the printer.)', prompt: 'Les ruego que nos ___ los libros antes del miércoles.', options: ['envían', 'enviaran', 'envíen'], answer: 2, why: '«Ruego» (presente) + petición pendiente → presente de subjuntivo: envíen.', en: 'Please send us the books before Wednesday.' },
            { context: 'Respuesta de la imprenta. (The printer’s reply.)', prompt: 'Lamentamos que el pedido ___ con retraso la semana pasada.', options: ['saliera', 'salga', 'salía'], answer: 0, why: '«Lamentamos» está en presente, pero el retraso es un hecho cerrado (la semana pasada): imperfecto de subjuntivo.', en: 'We are sorry the order went out late last week.' },
            { context: 'Nota de Nuria para Paula. (A note for Paula.)', prompt: 'Revisa el cartel antes de imprimirlo, para que no ___ ninguna errata.', options: ['hubiera', 'haya', 'hay'], answer: 1, why: 'Imperativo («revisa») + para que → presente de subjuntivo: haya.', en: 'Check the poster before printing it, so there are no typos.' },
            { context: 'Héctor recuerda su primer contrato. (Héctor remembers his first contract.)', prompt: 'En 2019 me exigieron que ___ cien páginas de la novela, y las quité.', options: ['recortara', 'recorte', 'recortaría'], answer: 0, why: '«Exigieron» (indefinido) + hecho ya cumplido → imperfecto de subjuntivo: recortara.', en: 'In 2019 they demanded that I cut a hundred pages from the novel, and I did.' },
            { context: 'Nuria piensa en la radio. (Nuria thinks about the radio.)', prompt: 'Nos convendría que la radio ___ la entrevista antes del viernes.', options: ['emitiría', 'emita', 'emitiera'], answer: 2, why: '«Convendría» (condicional) → imperfecto de subjuntivo: emitiera.', en: 'It would suit us if the radio aired the interview before Friday.' },
          ] },
        ] },
        { title: '¿Qué subjuntivo pide? · Which subjunctive?', blocks: [
          { kind: 'classify', title: 'Mira el verbo principal y el momento · Look at the main verb and the timing', categories: [
            { id: 'presente', label: 'PRESENTE DE SUBJUNTIVO (venga)', tone: 'blue' },
            { id: 'imperfecto', label: 'IMPERFECTO DE SUBJUNTIVO (viniera)', tone: 'orange' },
            { id: 'perfecto', label: 'PERFECTO DE SUBJUNTIVO (haya venido)', tone: 'teal' },
          ], items: [
            { text: 'Mañana le recordaré a Paula que… (traer los carteles)', answer: 'presente', why: '«Recordaré» (futuro) → presente: que traiga.' },
            { text: 'En la primera edición, la editorial no permitió que… (cambiar la portada)', answer: 'imperfecto', why: '«No permitió» (indefinido), situación cerrada → que cambiara.' },
            { text: 'Espero que la imprenta ya… (mandar los libros; Nuria supone que ya los mandó)', answer: 'perfecto', why: 'Acción anterior al momento de hablar → que ya haya mandado.' },
            { text: 'Sería estupendo que… (venir algún periodista)', answer: 'imperfecto', why: '«Sería» (condicional) → que viniera.' },
            { text: 'Pídele a Carmen que… (apagar la música a las siete)', answer: 'presente', why: '«Pídele» (imperativo) → que apague.' },
            { text: 'Me extraña que Paula todavía no… (contestar mi correo)', answer: 'perfecto', why: '«Todavía no» une el pasado con ahora: que todavía no haya contestado.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'En la presentación de 2022, el director quería que los autores firmen en la entrada.', ok: false, options: ['En la presentación de 2022, el director quería que los autores firmaran en la entrada.', 'En la presentación de 2022, el director quería que los autores firmarían en la entrada.', 'En la presentación de 2022, el director quería que los autores firmaron en la entrada.'], answer: 0, why: '«Quería» en una situación de 2022, ya cerrada: imperfecto de subjuntivo, firmaran.' },
            { sentence: 'Te mandaré la lista de invitados en cuanto Carmen me la confirme.', ok: true, why: 'Correcta: futuro («mandaré») + en cuanto + acción futura → presente de subjuntivo.' },
            { sentence: 'Nos gustaría que el público haga preguntas al final.', ok: false, options: ['Nos gustaría que el público hará preguntas al final.', 'Nos gustaría que el público hacía preguntas al final.', 'Nos gustaría que el público hiciera preguntas al final.'], answer: 2, why: '«Nos gustaría» (condicional) → imperfecto de subjuntivo en la lengua cuidada: hiciera.' },
            { sentence: 'Me alegra que ayer la radio aceptó la entrevista.', ok: false, options: ['Me alegra que ayer la radio acepte la entrevista.', 'Me alegra que ayer la radio aceptara la entrevista.', 'Me alegra que ayer la radio aceptaría la entrevista.'], answer: 1, why: '«Me alegra» (emoción) pide subjuntivo; el hecho está en un pasado cerrado (ayer): imperfecto, aceptara.' },
            { sentence: 'Ayer Carmen me pidió que le confirme hoy el número de sillas.', ok: true, why: 'Correcta: la petición sigue pendiente (hoy), por eso el presente es posible tras «pidió». «Confirmara» también sería correcto.' },
            { sentence: 'Héctor me escribió cuando llegara a la estación.', ok: false, options: ['Héctor me escribió cuando llegó a la estación.', 'Héctor me escribió cuando llegue a la estación.', 'Héctor me escribió cuando llegaría a la estación.'], answer: 0, why: 'Un hecho real del pasado: cuando + indicativo, llegó. El subjuntivo solo va si la llegada es futura.' },
          ] },
        ] },
        { title: 'Mensajes con Paula · Messages with Paula', blocks: [
          { kind: 'chat-fill', title: 'Chat del miércoles · Wednesday chat', lines: [
            { who: 'Paula', text: 'Nuria, ya he impreso los carteles en A3, como me pediste que los ___.', options: ['imprimía', 'imprimiera', 'imprima'], answer: 1, why: '«Me pediste» (indefinido) y la acción ya está hecha: imperfecto de subjuntivo, imprimiera.' },
            { who: 'Nuria', text: '¡Perfecto! Ahora necesito que ___ diez a la librería.', options: ['llevas', 'lleves', 'llevaras'], answer: 1, why: '«Necesito» (presente) → presente de subjuntivo: lleves.' },
            { who: 'Paula', text: 'Vale. Carmen me había pedido que ___ uno en el escaparate, y ya está puesto.', options: ['ponga', 'pondría', 'pusiera'], answer: 2, why: '«Me había pedido» (pluscuamperfecto) y ya está hecho → imperfecto de subjuntivo: pusiera.' },
            { who: 'Nuria', text: 'Genial. Y dile que ___ otro en la puerta, si puede.', options: ['coloca', 'colocara', 'coloque'], answer: 2, why: '«Dile» (imperativo) → presente de subjuntivo: coloque.' },
            { who: 'Paula', text: 'Hecho. Por cierto, me encantaría que Héctor me ___ un libro el viernes.', options: ['firme', 'firmaría', 'firmara'], answer: 2, why: '«Me encantaría» (condicional) → imperfecto de subjuntivo: firmara.' },
            { who: 'Nuria', text: 'Seguro que lo hace. Se lo diré en cuanto lo ___.', options: ['vea', 'veo', 'viera'], answer: 0, why: '«Diré» (futuro) + en cuanto + acción futura → presente de subjuntivo: vea.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Quería', 'que', 'la', 'portada', 'fuera', 'azul'], accept: ['Quería que la portada fuera azul', 'Quería que fuera azul la portada'], en: 'I wanted the cover to be blue.' },
            { tiles: ['Le', 'diré', 'que', 'traiga', 'los', 'carteles'], accept: ['Le diré que traiga los carteles'], en: 'I’ll tell her to bring the posters.' },
            { tiles: ['Me', 'gustaría', 'que', 'leyeras', 'el', 'primer', 'capítulo'], accept: ['Me gustaría que leyeras el primer capítulo'], en: 'I’d like you to read the first chapter.' },
          ] },
        ] },
        { title: 'Cambia el marco · Change the frame', blocks: [
          { kind: 'rewrite', title: 'Del presente al pasado y al revés · From present to past and back', items: [
            { prompt: 'Héctor, hace un año: «Quiero que la portada sea más oscura».', instruction: 'Cuéntalo hoy. Empieza: «Hace un año, Héctor quería…».', accept: ['Hace un año Héctor quería que la portada fuera más oscura', 'Hace un año Héctor quería que la portada fuese más oscura'] },
            { prompt: 'Nuria, antes de la presentación: «Te pido que llegues a las seis y media».', instruction: 'Ahora es sábado y la presentación ya pasó. Eres Héctor. Empieza: «Nuria me pidió…».', accept: ['Nuria me pidió que llegara a las seis y media', 'Nuria me pidió que llegase a las seis y media'] },
            { prompt: 'Carmen, el mes pasado: «Es importante que la sala esté limpia».', instruction: 'Cuéntalo en pasado. Empieza: «Para Carmen era importante…».', accept: ['Para Carmen era importante que la sala estuviera limpia', 'Para Carmen era importante que la sala estuviese limpia'] },
            { prompt: 'Héctor: «Me gustaría que me mandaran las preguntas».', instruction: 'Héctor lo dice ahora como un deseo firme, en presente. Empieza: «Quiero…».', accept: ['Quiero que me manden las preguntas'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta una petición real que le hicieron hace tiempo («Mi jefa me pidió que…») y una que tiene ahora («Mi jefa quiere que…»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de Nuria', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'El buzón de voz de Héctor · Héctor’s voicemail', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada subjuntivo y el verbo principal que lo pide. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada subjuntivo y el verbo que lo pide. Vas a oír «aunque sea tarde» (even if it’s late): solo tienes que entenderlo. (Listen once for the gist and once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de Nuria', channel: 'BUZÓN DE VOZ · DE NURIA PARA HÉCTOR', src: '/audio/grammar-live/430.mp3',
            before: 'Es martes por la noche. Héctor está en Valencia y Nuria le deja un mensaje. ¿Qué crees que le cuenta: peticiones de otras personas, planes para el viernes…? (Nuria leaves Héctor a voicemail. What do you think she tells him?)',
            gist: { prompt: '¿Para qué llama Nuria? · Why does Nuria call?', options: ['Para cancelar la entrevista de la radio.', 'Para contarle lo que han pedido otras personas y lo que ella quiere que haga.', 'Para pedirle que cambie el final de la novela.'], answer: 1, why: 'Cuenta qué pidieron Carmen y el periodista, y qué quiere ella para el viernes.', en: 'She passes on other people’s requests and says what she wants him to do.' },
            details: [
              { prompt: '¿Qué le pidió Carmen a Nuria?', options: ['Que le mandaran los libros.', 'Que retrasaran la presentación.', 'Que le confirmaran cuánta gente esperan.'], answer: 2, why: '«Me pidió que le confirmáramos cuánta gente esperamos».', en: 'What did Carmen ask Nuria to do?' },
              { prompt: '¿Qué tiene que hacer Héctor antes del jueves?', options: ['Llamar a Carmen.', 'Llevar los carteles a la librería.', 'Mandar dos o tres párrafos de la novela al periodista.'], answer: 2, why: '«El periodista me ha pedido que le mandes dos o tres párrafos de la novela antes del jueves».', en: 'What does Héctor have to do before Thursday?' },
              { prompt: '¿A qué hora tiene que llegar Héctor el viernes?', options: ['A las seis y media.', 'A las siete y media.', 'A las seis.'], answer: 0, why: '«Quiero que llegues a las seis y media, media hora antes».', en: 'What time does Héctor have to arrive on Friday?' },
              { prompt: '¿Qué le encantaría a Nuria?', options: ['Que Héctor hablara poco.', 'Que Héctor leyera el primer capítulo en voz alta.', 'Que Héctor fuera solo a la radio.'], answer: 1, why: '«Me encantaría que leyeras el primer capítulo en voz alta».', en: 'What would Nuria love?' },
            ],
            transcript: 'Hola, Héctor, soy Nuria. Espero que [[hayas llegado|teal]] bien a Valencia. Te llamo por lo del viernes, que ya está casi todo. Ayer hablé con Carmen, la de la librería. Me pidió que le [[confirmáramos|orange]] cuánta gente esperamos, y le dije que [[preparara|orange]] unas ochenta sillas, por si acaso. Los carteles se los lleva Paula mañana. Lo de la radio, al final, sale bien: el periodista me ha pedido que le [[mandes|blue]] dos o tres párrafos de la novela antes del jueves, para que [[pueda|blue]] preparar la entrevista. No necesita nada más. El viernes quiero que [[llegues|blue]] a las seis y media, media hora antes, para probar el micrófono con calma. Y una última cosa: me encantaría que [[leyeras|orange]] el primer capítulo en voz alta. Ya sé que te da vergüenza, pero a los lectores les gusta mucho. Bueno, cuando [[escuches|blue]] este mensaje, llámame, aunque sea tarde. Un abrazo.',
            reply: { teacher: 'Tú eres Nuria. Tu alumno es Héctor y le devuelve la llamada: confirma lo que le has pedido, dice qué le gustaría a él y pide una cosa con «dile a Carmen que…».', self: 'Devuelve la llamada como Héctor, en voz alta: confirma lo que te pidió Nuria, di qué te gustaría a ti y pide algo con «dile a Carmen que…». (Call Nuria back as Héctor.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Peticiones de antes y de ahora', coach: 'Cambia de marco al hablar. Switch frames as you speak.',
      steps: [
        { title: 'Lo que querían, lo que quieres · What they wanted, what you want', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno habla de experiencias reales. Si el subjuntivo no sigue al verbo principal, tú repites la frase con la forma correcta y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta con ejemplos reales. Fíjate en el tiempo del verbo principal antes de elegir el subjuntivo. (Answer aloud with real examples.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué querían tus padres o tus profesores que estudiaras o que hicieras cuando eras joven? ¿Y qué quieres tú ahora? · What did your parents or teachers want you to do? What do you want now?', followUps: ['¿Les hiciste caso? (Did you listen to them?)', '¿Qué te gustaría que hicieran tus hijos o tus alumnos?'], phrases: ['Mis padres querían que [[estudiara|orange]]…', 'No les gustaba que [[saliera|orange]]…', 'Ahora quiero que mi vida [[sea|blue]]…'], hint: 'Pasado → imperfecto de subjuntivo; ahora → presente de subjuntivo.', example: 'Mis padres querían que estudiara Derecho, pero yo elegí Periodismo. Ahora quiero que mi trabajo sea más tranquilo.', next: 'Ahora, un proyecto.' },
            { q: 'Piensa en un evento o un proyecto que organizaste. ¿Qué te pidieron los demás? ¿Qué les pediste tú? · An event or project you organised: what did people ask of you, and you of them?', followUps: ['¿Alguien te pidió algo imposible?', '¿Qué harías diferente?'], phrases: ['Mi jefa me pidió que [[preparara|orange]]…', 'Yo les había pedido que [[trajeran|orange]]…', 'Les mandé un correo para que [[supieran|orange]]…'], hint: 'Todo es pasado y ya terminó: imperfecto de subjuntivo.', example: 'Organicé la cena de fin de año de mi empresa. Mi jefa me pidió que buscara un restaurante barato y yo les pedí a todos que confirmaran antes del día diez.', next: 'Ahora, organizas tú.' },
            { q: 'Eres Nuria. Mañana es la presentación. ¿Qué quieres que haga cada persona: Héctor, Paula, Carmen? · You are Nuria: what do you want each person to do tomorrow?', followUps: ['¿Y si algo sale mal? (And if something goes wrong?)', '¿Qué le dirás a la radio?'], phrases: ['Quiero que Héctor [[llegue|blue]]…', 'Dile a Paula que [[lleve|blue]]…', 'Le pediré a Carmen que [[ponga|blue]]…'], hint: 'Presente, futuro o imperativo → presente de subjuntivo.', example: 'Quiero que Héctor llegue pronto y que pruebe el micrófono. Dile a Paula que lleve los carteles que faltan. Le pediré a Carmen que ponga agua en la mesa.', teacher: 'Haz tú de Paula y protesta un poco: «¿Otra vez yo?». Tu alumno responde con «Te pido que…» o «Me gustaría que…».' },
            { q: 'Algo que te alegró o te molestó hace poco, y algo que esperas ahora. · Something that pleased or annoyed you recently, and something you hope for now.', followUps: ['¿Por qué te molestó?', '¿Se lo dijiste a esa persona?'], phrases: ['Me alegró que [[vinieran|orange]]…', 'Me molesta que [[hayan cambiado|teal]]…', 'Espero que [[sea|blue]] / [[haya sido|teal]]…'], hint: 'Mira el verbo principal y el momento de la acción: ¿ya pasó o todavía no?', example: 'Me alegró que mis amigos vinieran a mi cumpleaños. En cambio, me molesta que hayan cambiado el horario del gimnasio. Espero que lo arreglen pronto.' },
            { q: 'Tu evento ideal: una boda, una fiesta, una presentación. ¿Qué te gustaría que pasara? ¿Qué no te gustaría que pasara? · Your ideal event: what would you like to happen, or not?', followUps: ['¿A quién te encantaría que invitaran?', '¿Qué música te gustaría que pusieran?'], phrases: ['Me gustaría que [[hubiera|orange]]…', 'No me gustaría que nadie [[tuviera|orange]] que…', 'Me encantaría que [[tocara|orange]]…'], hint: 'Condicional → imperfecto de subjuntivo, también en la lengua oral cuidada.', example: 'Me gustaría que mi boda fuera en el campo y que hubiera mucha comida. No me gustaría que nadie tuviera que conducir de noche.' },
            { q: 'Un recado: ayer Héctor te dijo: «Dile a Paula que me mande el cartel y que me llame cuando lo tenga». Hoy se lo cuentas a Paula. · Pass on Héctor’s message to Paula today.', followUps: ['¿Y si Paula ya se lo mandó?', '¿Cómo lo dices el mes que viene, cuando todo ya pasó?'], phrases: ['Héctor me dijo que le [[mandaras|orange]] / [[mandes|violet]]…', '…y que lo [[llamaras|orange]] / [[llames|violet]] cuando lo [[tuvieras|orange]] / [[tengas|violet]].'], hint: 'Si el recado sigue pendiente, las dos opciones son correctas. Si ya pasó todo, solo el imperfecto.', example: 'Paula, ayer Héctor me dijo que le mandaras el cartel y que lo llamaras cuando lo tuvieras. (También: que le mandes el cartel y que lo llames cuando lo tengas.)', teacher: 'Pregunta después: «¿Y cómo lo cuentas dentro de un mes?». Respuesta esperada: solo con imperfecto de subjuntivo.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes con alguna forma equivocada a propósito («Mis padres querían que estudie…»). Tu alumno la detecta y la corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas con otra experiencia distinta. (Now ask the questions aloud and answer with a different experience.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo de agradecimiento', coach: 'Lo que pidieron, lo que pides. What they asked, what you ask.',
      steps: [
        { title: 'Después de la presentación · After the launch', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada subjuntivo: ¿qué verbo principal lo pide y cuándo ocurre la acción? Después tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después repasa cada subjuntivo: ¿qué verbo lo pide y cuándo ocurre la acción? (Check every subjunctive against its main verb.)' } },
          { kind: 'write', title: 'Gracias por todo · Thanks for everything', situation: 'Eres Héctor (o eres tú, después de un evento o un proyecto que organizaste con alguien). La presentación ya pasó y escribes un correo a la persona que te ayudó: cuentas lo que querías y lo que te pidieron antes, valoras cómo salió y haces peticiones para el futuro. (You are Héctor, or yourself after an event you organised with someone. Write to the person who helped you: what you wanted and what you were asked before, how it went, and requests for the future.)', task: [
            'Da las gracias y di de qué evento o proyecto hablas. (Say thank you and name the event.)',
            'Cuenta dos cosas que alguien quería o pidió antes del evento: quería que…, me pediste que… (imperfecto de subjuntivo).',
            'Valora algo que ya pasó: me alegra que…, me gustó que…',
            'Haz dos peticiones o deseos para el futuro: quiero que…, te pido que…, me gustaría que…',
            'Cierra con un deseo o una cita: espero que…, cuando tengas un rato… (Close with a wish or a plan.)',
          ], starters: ['Querida…:', 'Te escribo para darte las gracias por…', 'Al principio yo quería que…', 'Tú me pediste que…', 'Me alegra mucho que…', 'Ahora te pido que…', 'Me gustaría que…', 'Espero que…', 'Cuando tengas un rato…'],
            words: ['quería que', 'me pediste que', 'me alegra que', 'me gustó que', 'quiero que', 'te pido que', 'me gustaría que', 'espero que', 'para que', 'cuando'],
            model: 'Querida Nuria: Te escribo para darte las gracias por lo de ayer. Cuando empezamos a preparar la presentación, yo [[quería que|orange]] [[fuera|orange]] algo pequeño, casi entre amigos, y tú me pediste que [[confiara|orange]] en ti. Tenías razón: me alegra que Carmen [[pusiera|teal]] ochenta sillas, porque al final hubo gente de pie. También me gustó mucho que la radio me [[dejara|orange]] leer un fragmento. Ahora te pido dos cosas: quiero que le [[des|blue]] las gracias a Paula por el cartel, y me gustaría que [[organizáramos|orange]] otra presentación en Valencia en primavera, para que mi familia [[pueda|blue]] venir. Espero que [[hayas descansado|teal]] hoy. Cuando [[tengas|blue]] un rato, llámame y lo hablamos. Un abrazo, Héctor.',
            minWords: 110,
            checks: [
              { label: 'Un marco presente + que (quiero que, te pido que, espero que…)', pattern: '(?<!\\p{L})(?:quiero|queremos|espero|esperamos|pido|pedimos|necesito|necesitamos|alegra|prefiero)\\s+que(?!\\p{L})', tip: 'Añade una petición o un deseo desde ahora: «Quiero que…», «Te pido que…», «Espero que…».' },
              { label: 'Un marco pasado o condicional + que (quería que, me pediste que, me gustaría que…)', pattern: '(?<!\\p{L})(?:quería|querías|queríamos|pidió|pediste|pedí|pidieron|dijo|dijiste|había\\s+pedido|gustaría|encantaría|gustó|alegró)\\s+(?:\\p{L}+\\s+)?que(?!\\p{L})', tip: 'Cuenta qué se quería o se pidió antes: «Al principio yo quería que…», «Me pediste que…».' },
              { label: 'Un imperfecto de subjuntivo tras «que» (fuera, pusiera, dejara…)', pattern: '(?<!\\p{L})que\\s+(?:\\p{L}+\\s+){0,3}?\\p{L}+(?:ara|aras|áramos|aran|iera|ieras|iéramos|ieran|uera|ueras|uéramos|ueran|ase|ases|asen|iese|ieses|iesen)(?!\\p{L})', tip: 'Tras un verbo en pasado o en condicional, usa el imperfecto de subjuntivo: «quería que fuera», «me gustaría que organizáramos».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:gustaría|encantaría)\\s+que\\s+(?:\\p{L}+\\s+)?(?:sea|seas|sean|venga|vengas|vengan|pueda|puedas|puedan|tenga|tengas|tengan|haga|hagas|hagan|esté|estés|estén|organicemos|organices|vaya|vayas|vayan)(?!\\p{L})', why: 'Tras **me gustaría que** / **me encantaría que**, la lengua cuidada usa el imperfecto de subjuntivo: «me gustaría que **vinieras**», no «que vengas».' },
              { pattern: '(?<!\\p{L})espero\\s+que\\s+(?:\\p{L}+\\s+)?(?:llegaste|descansaste|estás|estuviste|fue|pasaste)(?!\\p{L})', why: '**Espero que** pide subjuntivo: «espero que **hayas llegado** bien», «espero que **hayas descansado**».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take away?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'MARCO PRESENTE', formula: 'quiero · diré · dile · he pedido + que + presente de subjuntivo', example: 'Dile a Carmen que prepare ochenta sillas.', caption: 'el verbo principal mira desde ahora', en: 'the main verb speaks from now: present subjunctive' },
            { tone: 'orange', label: 'MARCO PASADO O CONDICIONAL', formula: 'quería · pidió · había pedido · me gustaría + que + imperfecto de subjuntivo', example: 'Me gustaría que leyeras el primer capítulo.', caption: 'el verbo principal mira desde el pasado o imagina', en: 'past or conditional main verb: imperfect subjunctive, also after cuando and para que' },
            { tone: 'teal', label: 'ANTERIOR AL AHORA', formula: 'espero que hayas llegado · me alegra que vinieras ayer', example: 'Espero que hayas llegado bien a Valencia.', caption: 'desde un presente, una acción ya ocurrida', en: 'from a present verb you can look back: perfect or imperfect subjunctive' },
            { tone: 'violet', label: 'EXCEPCIÓN', formula: 'pasado + presente de subjuntivo si sigue pendiente', example: 'Ayer me pidió que lo llame (o llamara) mañana.', caption: 'el imperfecto siempre es correcto', en: 'a past request still open now may take the present; the imperfect is always safe' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Primero mira el **verbo principal**: presente, futuro, imperativo o perfecto → **venga**; pasado o condicional → **viniera**. Después pregúntate **cuándo ocurre** la acción: si ya pasó vista desde ahora, **haya venido** o **viniera**; si una petición pasada sigue pendiente, el presente también es posible. Y recuerda: «me llamó **cuando llegó**», con indicativo, si cuentas un hecho real.', en: 'First look at the main verb: present, future, imperative or present perfect → venga; past or conditional → viniera. Then ask when the action happens: something already done, seen from now, takes haya venido or viniera; a past request that is still open can also take the present. And remember: a real past event after cuando stays in the indicative.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Cuando yo era niña, mis padres no permitían que ___ después de las diez.', options: ['saliera', 'salga', 'salía'], answer: 0, why: '«No permitían» (imperfecto), una costumbre ya terminada: imperfecto de subjuntivo.', en: 'When I was a child, my parents didn’t let me go out after ten.' },
            { prompt: 'Te devolveré el libro en cuanto lo ___.', options: ['termine', 'termino', 'terminara'], answer: 0, why: 'Futuro + en cuanto + acción futura: presente de subjuntivo.', en: 'I’ll give you the book back as soon as I finish it.' },
            { prompt: 'Sería genial que este verano ___ las vacaciones juntos.', options: ['pasaremos', 'pasemos', 'pasáramos'], answer: 2, why: '«Sería» (condicional) → imperfecto de subjuntivo.', en: 'It would be great if we spent the holidays together this summer.' },
            { prompt: 'Te mandé el paquete hace una semana. Espero que ya lo ___.', options: ['hayas recibido', 'recibiste', 'recibas'], answer: 0, why: 'Acción que supones ya terminada, vista desde ahora: perfecto de subjuntivo.', en: 'I hope you’ve received it by now.' },
            { prompt: 'En enero mi jefa me pidió que ___ el informe, y lo entregué en febrero.', options: ['prepare', 'preparara', 'preparé'], answer: 1, why: 'Petición pasada y ya cumplida: imperfecto de subjuntivo.', en: 'In January my boss asked me to prepare the report, and I handed it in in February.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una mudanza. Now, a house move.', blocks: [
          { kind: 'lead', text: 'Lorena se mudó el mes pasado. Ahora cuenta lo que le pidieron y lo que quiere. Cambia el marco y ajusta el subjuntivo.', en: 'Lorena moved house last month. Now she tells what she was asked and what she wants. Change the frame and adjust the subjunctive.' },
          { kind: 'rewrite', title: 'La mudanza de Lorena · Lorena’s move', items: [
            { prompt: 'La dueña del piso, antes de la mudanza: «Quiero que dejes las llaves en el buzón».', instruction: 'La mudanza ya pasó. Empieza: «La dueña quería que Lorena…».', accept: ['La dueña quería que Lorena dejara las llaves en el buzón', 'La dueña quería que Lorena dejase las llaves en el buzón'] },
            { prompt: 'Lorena a su hermano, antes de su examen: «Te ayudaré cuando termines el examen».', instruction: 'El examen ya pasó. Empieza: «Lorena le dijo a su hermano que…».', accept: ['Lorena le dijo a su hermano que lo ayudaría cuando terminara el examen', 'Lorena le dijo a su hermano que le ayudaría cuando terminara el examen', 'Lorena le dijo a su hermano que lo ayudaría cuando terminase el examen', 'Lorena le dijo a su hermano que le ayudaría cuando terminase el examen'] },
            { prompt: 'Lorena: «Me gustaría que mis amigos me ayudaran el sábado».', instruction: 'Dilo como un deseo firme, en presente. Empieza: «Quiero que…».', accept: ['Quiero que mis amigos me ayuden el sábado'] },
          ] },
        ] },
        { title: 'Ampliación · ¿Sigue pendiente? · Is it still open?', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: decide cuándo es posible el presente de subjuntivo tras un verbo en pasado, y reconoce el registro.', en: 'For strong students or spare time: decide when the present subjunctive is possible after a past verb, and recognise the register.' },
          { kind: 'choice', title: '¿Qué formas son posibles? · Which forms are possible?', items: [
            { prompt: 'Noticia: «Ayer el alcalde pidió que los vecinos ___ agua durante todo el verano».', options: ['«Ahorraran» y «ahorren»: las dos son correctas.', 'Solo «ahorraran».', 'Solo «ahorren».'], answer: 0, why: 'La petición sigue vigente (todo el verano): tras un pasado, el presente es posible y es muy frecuente en la prensa. El imperfecto también es correcto.', en: 'News report: the mayor asked residents to save water all summer.' },
            { prompt: 'Historia local: «En 1995 el alcalde pidió que los vecinos ___ agua aquel verano».', options: ['Solo «ahorraran».', 'Solo «ahorren».', '«Ahorraran» y «ahorren»: las dos son correctas.'], answer: 0, why: 'Todo pertenece a un pasado cerrado («aquel verano»): solo imperfecto de subjuntivo.', en: 'A request from 1995, about that summer only.' },
            { prompt: 'En un correo formal escribes «Me gustaría que ___ a la reunión». ¿Qué opción es la adecuada?', options: ['«Asistiría»: el condicional se repite en la subordinada.', '«Asistiera»: la lengua cuidada pide imperfecto tras condicional.', '«Asista»: es la forma más formal.'], answer: 1, why: '«Me gustaría que asista» se oye en el habla coloquial de algunas zonas, pero en un texto formal se usa «asistiera».', en: 'In a formal email, which form fits?' },
            { prompt: '«Me dolió que no me hubieras llamado». ¿Cuál es el orden de los hechos?', options: ['Primero me dolió; después no me llamaste.', 'Las dos cosas pasan ahora.', 'Primero no me llamaste; después me dolió.'], answer: 2, why: 'Pluscuamperfecto de subjuntivo: acción anterior a otro pasado («me dolió»). Lo estudias en la clase 133.', en: 'It hurt me that you hadn’t called: which came first?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno inventa un titular de prensa con «pidió que» + presente y explica por qué el presente es posible.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 131 · Si + imperfecto de subjuntivo + condicional', text: 'Ya eliges entre «quiero que vengas» y «me gustaría que vinieras» según el verbo principal y el momento. En la clase 131 usas ese mismo imperfecto de subjuntivo de otra manera: en la condición, para imaginar el presente: «Si **tuviera** tiempo, **viajaría** más». Es el paso natural: el imperfecto de subjuntivo deja de seguir a un verbo en pasado y pasa a construir hipótesis.', en: 'You can now choose between “quiero que vengas” and “me gustaría que vinieras” from the main verb and the timing. In class 131 you use the same imperfect subjunctive in a new way: in the if-clause, to imagine the present: “If I had time, I’d travel more”. It is the natural next step: the imperfect subjunctive stops following a past verb and starts building hypotheses.', href: '/si-fuera-distinto', label: 'Ir a la clase 131' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué te pidieron la última vez que organizaste algo, y qué quieres que pase la próxima vez?». Respuesta esperada: una frase con imperfecto y otra con presente de subjuntivo. Tarea: el correo de Escribir sobre un evento real.' },
        ] },
      ],
    },
  ],
};
