import type { LiveLesson } from '../types';

/**
 * Lesson 146 · B1 · Condicional simple.
 * Core: polite requests and advice, and the future seen from the past;
 * the hypothetical consequence ("imaginar") is support. One story runs through
 * the class: Julia and a presentation whose schedule changed.
 */
export const lesson: LiveLesson = {
  id: 146,
  level: 'B1',
  title: 'Condicional simple',
  subtitle: 'Pedir y aconsejar con cortesía, contar lo que alguien dijo que pasaría e imaginar situaciones posibles.',
  legend: [
    { tone: 'blue', label: 'Pedir o aconsejar con cortesía' },
    { tone: 'teal', label: 'Futuro visto desde el pasado' },
    { tone: 'orange', label: 'Imaginar una consecuencia' },
  ],
  optionNotes: {
    viva: '«Viva» es subjuntivo presente; aquí se imagina una consecuencia y se necesita el condicional.',
    vendrá: '«Vendrá» mira el futuro desde hoy. Si el verbo principal está en pasado («dijo»), se usa el condicional.',
    llamará: '«Llamará» mira el futuro desde hoy. Con «dijo que…» se usa el condicional.',
    tendrá: '«Tendrá» mira el futuro desde hoy. Con un verbo de lengua en pasado se usa el condicional.',
    tenería: 'El condicional de «tener» es irregular: la raíz es «tendr-» → tendría.',
    podería: 'El condicional de «poder» es irregular: la raíz es «podr-» → podría.',
    hacería: 'El condicional de «hacer» es irregular: la raíz es «har-» → haría.',
    decería: 'El condicional de «decir» es irregular: la raíz es «dir-» → diría.',
    salería: 'El condicional de «salir» es irregular: la raíz es «saldr-» → saldría.',
    puedes: 'Es correcto, pero más directo. El condicional suaviza la petición.',
    quiero: '«Quiero» es más directo; en una petición formal suena mejor «me gustaría» o «querría».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El condicional simple', coach: 'Una forma, tres usos muy útiles.',
      steps: [
        { title: 'Una forma fácil de formar · Easy to form', blocks: [
          { kind: 'lead', text: 'Julia tiene una presentación en el trabajo y el horario cambió. En sus mensajes aparece muchas veces una misma forma verbal: **podría, preferiría, me gustaría, empezaría**. Es el **condicional simple**.', en: 'Julia has a presentation at work and the schedule has changed. The same verb form keeps appearing in her messages: podría, preferiría, me gustaría, empezaría. It is the simple conditional, roughly English “would / could”.' },
          { kind: 'guide', text: { teacher: 'Muestra la tabla y tu alumno descubre la regla antes de leer la nota: ¿qué parte del verbo no cambia?', self: 'Mira la tabla: ¿qué parte del verbo se mantiene? ¿Qué se añade?' } },
          { kind: 'table', title: 'Formas regulares: infinitivo + terminación', head: ['', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'hablar**ía**', 'comer**ía**', 'vivir**ía**'],
            ['tú', 'hablar**ías**', 'comer**ías**', 'vivir**ías**'],
            ['él / ella / usted', 'hablar**ía**', 'comer**ía**', 'vivir**ía**'],
            ['nosotros / nosotras', 'hablar**íamos**', 'comer**íamos**', 'vivir**íamos**'],
            ['vosotros / vosotras', 'hablar**íais**', 'comer**íais**', 'vivir**íais**'],
            ['ellos / ellas / ustedes', 'hablar**ían**', 'comer**ían**', 'vivir**ían**'],
          ], note: 'Se conserva **el infinitivo completo** y se añaden las mismas terminaciones para -ar, -er e -ir. Todas llevan tilde en la **í**.' },
          { kind: 'tip', icon: '👀', title: 'No lo confundas con el imperfecto', text: 'Imperfecto: **com**ía (raíz + -ía). Condicional: **comer**ía (infinitivo + -ía). Fíjate en la **r** antes de la terminación: hablab**a** / hablar**ía**.', en: 'Imperfect: com-ía (stem + -ía). Conditional: comer-ía (whole infinitive + -ía). Look for the r before the ending: hablaba / hablaría.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Cuál es el condicional de «viajar» para «nosotros»?', options: ['viajaríamos', 'viajábamos', 'viajaremos'], answer: 0, why: 'Infinitivo «viajar» + «-íamos».', en: 'Which is the conditional of “viajar” for “nosotros”?' },
            { prompt: '¿Qué forma es **condicional**?', options: ['escribía', 'escribiría', 'escribirá'], answer: 1, why: '«Escribir» + «-ía». «Escribía» es imperfecto y «escribirá», futuro.', en: 'Which form is the conditional?' },
          ] },
        ] },
        { title: 'Los irregulares · The irregulars', mascot: '/brand/mascot/studying.webp', coach: 'Los mismos irregulares del futuro.', blocks: [
          { kind: 'concept', tone: 'neutral', label: 'RAÍZ IRREGULAR + -ÍA', question: '¿Qué verbos cambian?', en: 'A few very common verbs change their stem, but the endings never change. They are the same irregular verbs as in the future: if you know “tendré”, you know “tendría”', formula: ['raíz irregular + -ía, -ías, -ía, -íamos, -íais, -ían'],
            meaning: 'Unos pocos verbos muy frecuentes cambian la raíz, pero las terminaciones son **siempre las mismas**. Son los mismos irregulares del futuro: si sabes «tendré», sabes «tendría».',
            examples: [
              { es: '¿[[Podrías|blue]] confirmar la hora?', en: 'Could you confirm the time?' },
              { es: 'La coordinadora dijo que cada uno [[tendría|teal]] cinco minutos.', en: 'The coordinator said each person would have five minutes.' },
              { es: 'Yo en tu lugar no [[haría|blue]] eso.', en: 'If I were you, I wouldn’t do that.' },
              { es: 'Con más tiempo, [[saldría|orange]] más con mis amigos.', en: 'With more time, I’d go out more with my friends.' },
            ] },
          { kind: 'table', title: 'Raíces irregulares', head: ['infinitivo', 'raíz', 'yo', 'ellos / ellas / ustedes'], rows: [
            ['tener', '**tendr-**', 'tendría', 'tendrían'],
            ['poner', '**pondr-**', 'pondría', 'pondrían'],
            ['salir', '**saldr-**', 'saldría', 'saldrían'],
            ['venir', '**vendr-**', 'vendría', 'vendrían'],
            ['poder', '**podr-**', 'podría', 'podrían'],
            ['saber', '**sabr-**', 'sabría', 'sabrían'],
            ['querer', '**querr-**', 'querría', 'querrían'],
            ['haber', '**habr-**', 'habría', 'habrían'],
            ['hacer', '**har-**', 'haría', 'harían'],
            ['decir', '**dir-**', 'diría', 'dirían'],
          ], note: 'Tres grupos: una **d** en lugar de la vocal (tendr-, pondr-, saldr-, vendr-), la vocal desaparece (podr-, sabr-, querr-, habr-) y dos raíces especiales (har-, dir-).' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'La raíz del condicional de «poder» es…', options: ['podr-', 'poder-', 'pud-'], answer: 0, why: 'La vocal desaparece: podr- → podría.', en: 'The conditional stem of “poder” is…' },
            { prompt: 'Yo que tú, se lo ___ a tu jefa.', options: ['decería', 'diría', 'dijera'], answer: 1, why: '«Decir» tiene la raíz especial «dir-» → diría.', en: 'If I were you, I ___ (tell) your boss.' },
          ] },
        ] },
        { title: 'Pedir con cortesía · Asking politely', mascot: '/brand/mascot/speaking.webp', coach: 'Menos imposición, más amabilidad.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PETICIÓN ATENUADA', question: '¿Cómo pido algo sin imponerlo?', en: 'The conditional softens a request or a wish, so the other person feels they have a choice: “Could you…?”, “I’d like…”, “Would you mind…?”. Very common in work emails, in shops and with people you don’t know well', formula: ['¿Podrías / Podría usted + infinitivo?', 'Me gustaría / Preferiría / Querría + infinitivo', '¿Te importaría + infinitivo?'],
            meaning: 'El condicional **suaviza** una petición o un deseo: la otra persona siente que tiene opción. Es muy común en correos de trabajo, en tiendas y con personas que no conocemos bien.',
            examples: [
              { es: '¿[[Podrías|blue]] confirmar la hora de la presentación?', en: 'Could you confirm the time of the presentation?' },
              { es: '[[Preferiría|blue]] presentar después de Marta.', en: 'I’d rather present after Marta.' },
              { es: '[[Me gustaría|blue]] saber si hay tiempo para preguntas.', en: 'I’d like to know if there’s time for questions.' },
              { es: '¿[[Te importaría|blue]] cerrar la ventana?', en: 'Would you mind closing the window?' },
            ] },
          { kind: 'compare', title: 'La misma petición, dos tonos', columns: [
            { tone: 'neutral', label: 'DIRECTO', sentence: '¿**Puedes** confirmar la hora? **Quiero** presentar después de Marta.', idea: 'Correcto y claro. Entre amigos funciona bien; en un correo de trabajo puede sonar exigente.', en: 'Correct and clear. Fine among friends, but in a work email it can sound demanding.' },
            { tone: 'blue', label: 'CONDICIONAL', sentence: '¿[[Podrías|blue]] confirmar la hora? [[Preferiría|blue]] presentar después de Marta.', idea: 'La misma información, pero con más distancia y amabilidad.', en: 'The same information, with more distance and friendliness.' },
          ] },
          { kind: 'tip', icon: '🤝', title: 'La cortesía no es solo gramática', text: 'El tono, «por favor», «gracias» y una razón («porque compartimos el tema») también cuentan. El condicional es una herramienta más, no una fórmula mágica.', en: 'Tone, “please”, “thank you” and a reason also count. The conditional is one more tool, not a magic formula.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué petición es **más suave**?', options: ['¿Podrías cerrar la puerta?', 'Cierra la puerta.', 'Tienes que cerrar la puerta.'], answer: 0, why: 'El condicional convierte la orden en una petición con opción.', en: 'Which request is softer?' },
            { prompt: 'En una tienda: «Buenos días, ___ ver esos zapatos, por favor».', options: ['querría', 'quise', 'quiera'], answer: 0, why: '«Querría» expresa un deseo atenuado y amable.', en: 'In a shop: “Good morning, I ___ to see those shoes, please.”' },
          ] },
        ] },
        { title: 'Aconsejar · Giving advice', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Qué harías tú en mi lugar?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CONSEJO', question: '¿Qué me recomiendas?', en: 'To give advice without imposing it, we put ourselves in the other person’s place (“If I were you…”) or present the idea as a possibility (“You should…”, “It would be better…”)', formula: ['Deberías + infinitivo', 'Yo que tú / Yo en tu lugar + condicional', 'Sería mejor / Sería buena idea + infinitivo'],
            meaning: 'Para dar un consejo sin imponer, nos ponemos en el lugar de la otra persona o presentamos la idea como una posibilidad.',
            examples: [
              { es: '[[Deberías|blue]] hablar con la coordinadora.', en: 'You should talk to the coordinator.' },
              { es: '[[Yo que tú, preguntaría|blue]] antes de cambiar las diapositivas.', en: 'If I were you, I’d ask before changing the slides.' },
              { es: '[[Yo en tu lugar, no enviaría|blue]] ese correo hoy.', en: 'In your place, I wouldn’t send that email today.' },
              { es: '[[Sería mejor|blue]] preparar una versión corta.', en: 'It would be better to prepare a short version.' },
            ],
            note: '«Deberías» es más suave que «debes» o «tienes que».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Tu amigo está muy cansado. Le dices: «___ descansar este fin de semana».', options: ['Deberías', 'Debiste', 'Debías'], answer: 0, why: 'Un consejo para el presente o el futuro: «deberías» + infinitivo.', en: 'Your friend is very tired. You tell him: “___ rest this weekend.”' },
            { prompt: 'Yo en tu lugar, ___ un taxi. Es muy tarde.', options: ['tomaría', 'tomaba', 'tomé'], answer: 0, why: '«Yo en tu lugar» + condicional: un consejo.', en: 'If I were you, ___ (take) a taxi. It’s very late.' },
          ] },
        ] },
        { title: 'El futuro visto desde el pasado · The future seen from the past', mascot: '/brand/mascot/seated.webp', coach: 'Lo que alguien dijo que iba a pasar.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'FUTURO DESDE EL PASADO', question: '¿Qué dijo que pasaría?', en: 'When we report what someone said or thought in the past about something that came later, that “future” goes into the conditional, as in English “she said it would start on Friday”', formula: ['dijo / explicó / prometió / pensaba que + condicional'],
            meaning: 'Cuando contamos lo que alguien **dijo o pensaba en el pasado** sobre un momento **posterior**, ese futuro se expresa con el condicional.',
            examples: [
              { es: 'El lunes, la coordinadora dijo que la presentación [[empezaría|teal]] el viernes.', en: 'On Monday the coordinator said the presentation would start on Friday.' },
              { es: 'Explicó que cada participante [[tendría|teal]] cinco minutos.', en: 'She explained that each participant would have five minutes.' },
              { es: 'Ramiro prometió que [[revisaría|teal]] el programa por la tarde.', en: 'Ramiro promised he would check the programme in the afternoon.' },
              { es: 'Pensaba que [[sería|teal]] más fácil.', en: 'I thought it would be easier.' },
            ] },
          { kind: 'compare', title: 'Desde hoy o desde el pasado', columns: [
            { tone: 'neutral', label: 'HOY', sentence: 'Ramiro **dice** que **revisará** el programa.', idea: 'El verbo principal está en presente: el futuro se mira desde hoy.', en: 'The main verb is in the present: the future is seen from today.' },
            { tone: 'teal', label: 'DESDE EL PASADO', sentence: 'Ramiro **dijo** que [[revisaría|teal]] el programa.', idea: 'El verbo principal está en pasado: el futuro se mira desde ese momento.', en: 'The main verb is in the past: the future is seen from that moment.' },
          ] },
          { kind: 'tip', icon: '⏪', title: 'Un truco', text: 'Si conviertes una frase con **dice que + futuro** en **dijo que…**, el futuro pasa a condicional: «vendrá» → «vendría», «tendrá» → «tendría».', en: 'If you turn “dice que + future” into “dijo que…”, the future becomes conditional, just like “will” becomes “would” in English.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Ayer Ana me dijo que ___ tarde a la reunión.', options: ['llegaría', 'llegará', 'llegue'], answer: 0, why: '«Dijo» está en pasado: el futuro desde ese momento va en condicional.', en: 'Yesterday Ana told me she ___ (arrive) late to the meeting.' },
            { prompt: 'Pasa al pasado: «Dice que vendrá». → «Dijo que ___».', options: ['vendrá', 'vendría', 'viene'], answer: 1, why: 'Con «dijo», el futuro «vendrá» pasa a condicional: «vendría».', en: 'Put it in the past: “Dice que vendrá.” → “Dijo que ___.”' },
          ] },
        ] },
        { title: 'Imaginar · Imagining', mascot: '/brand/mascot/kneeling.webp', coach: '¿Qué pasaría si…?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CONSECUENCIA IMAGINADA', question: '¿Qué harías?', en: 'The conditional presents a possible or imaginary action that depends on a condition. It is not a real plan: it is what would happen in another situation', formula: ['(condición) + condicional', 'Con más tiempo / En tu lugar / Si pudiera, + condicional'],
            meaning: 'Presenta una acción **posible o imaginaria**, que depende de una condición. No es un plan real: es lo que pasaría en otra situación.',
            examples: [
              { es: 'Con más tiempo, [[viajaría|orange]] por toda Sudamérica.', en: 'With more time, I’d travel all over South America.' },
              { es: 'Si pudiera elegir, [[viviría|orange]] cerca del mar.', en: 'If I could choose, I’d live near the sea.' },
              { es: 'Con siete minutos, las dos partes [[quedarían|orange]] mejor conectadas.', en: 'With seven minutes, the two parts would be better connected.' },
              { es: '¿Qué [[harías|orange]] con un mes libre?', en: 'What would you do with a month off?' },
            ],
            note: '«Si pudiera» y «si tuviera» son formas del subjuntivo que vas a estudiar más adelante. Hoy úsalas como fórmula fija: la consecuencia va en **condicional**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Si pudiera elegir, ___ cerca del mar.', options: ['viviría', 'viviré', 'viva'], answer: 0, why: 'Una consecuencia imaginada: condicional.', en: 'If I could choose, I ___ (live) near the sea.' },
            { prompt: '«Con más dinero, compraría una casa.» ¿Tiene más dinero?', options: ['No, es una situación imaginada.', 'Sí, y va a comprar la casa.'], answer: 0, why: 'El condicional presenta una consecuencia que depende de una condición que no es real ahora.', en: '“Con más dinero, compraría una casa.” Does the person have more money?' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/brand/mascot/standing.webp', coach: 'Misma forma, tres intenciones.', blocks: [
          { kind: 'decide', title: 'Piensa en tu frase con condicional y responde', steps: [
            { q: '¿Le pides algo a alguien o le das un consejo?', yes: 'Es una **petición o un consejo**: «¿[[Podrías|blue]] ayudarme?» · «[[Deberías|blue]] descansar».', no: 'next' },
            { q: '¿Cuentas lo que alguien dijo o pensaba en el pasado sobre algo posterior?', yes: 'Es el **futuro desde el pasado**: «Dijo que [[llegaría|teal]] tarde».', no: 'Es una **consecuencia imaginada**: «Con más tiempo, [[viajaría|orange]]».' },
          ] },
          { kind: 'tip', icon: '🧭', title: 'Busca las pistas', text: '**¿Podrías…? / Me gustaría / Yo que tú** → cortesía y consejo. **Dijo que / Prometió que / Pensaba que** → futuro desde el pasado. **Si pudiera / Con más… / En otra vida** → imaginar.', en: 'Look for the clues: “Could you…? / I’d like / If I were you” → politeness and advice. “Said that / promised that / thought that” → future seen from the past. “If I could / With more… / In another life” → imagining.' },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error antes de que muestres la corrección y dice qué uso del condicional es.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: '¿Poderías ayudarme?', right: '¿Podrías ayudarme?', why: '«Poder» es irregular: la raíz es «podr-».' },
            { wrong: 'Yo en tu lugar, no lo hacería.', right: 'Yo en tu lugar, no lo haría.', why: '«Hacer» tiene la raíz especial «har-».' },
            { wrong: 'Ayer dijo que vendrá hoy, pero no vino.', right: 'Ayer dijo que vendría hoy, pero no vino.', why: 'Con «dijo», el futuro visto desde el pasado va en condicional.' },
            { wrong: 'Me gustaba saber si hay tiempo para preguntas.', right: 'Me gustaría saber si hay tiempo para preguntas.', why: '«Gustaba» es imperfecto (un gusto del pasado). Para pedir con cortesía: «me gustaría».' },
            { wrong: 'Si pudiera, viajaré a Japón.', right: 'Si pudiera, viajaría a Japón.', why: 'Una consecuencia imaginada va en condicional, no en futuro.' },
            { wrong: 'Tú deberías de hablar con él.', right: 'Tú deberías hablar con él.', why: 'Para aconsejar, «deber» va directamente con el infinitivo, sin «de».' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno tres frases sobre su semana: una petición a un compañero, algo que alguien le dijo que pasaría y algo que haría con un día libre.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El condicional en situaciones reales', coach: 'Toca las formas marcadas.',
      steps: [
        { title: 'Cambia el horario · The schedule changes', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada forma marcada y dice si es cortesía, futuro desde el pasado o algo imaginado.', self: 'Lee el diálogo. Después toca cada forma marcada para descubrir por qué se usó el condicional.' } },
          { kind: 'explore', title: 'Una llamada a la coordinación', setting: 'Julia recibió una invitación con una hora distinta para su presentación. Llama a Ramiro, de coordinación.', lines: [
            { who: 'Ramiro', text: 'Coordinación, buenos días.', en: 'Coordination, good morning.' },
            { who: 'Julia', text: 'Hola, Ramiro. Soy Julia. ¿Tienes un minuto? [[Me gustaría|blue]] aclarar una duda.', en: 'Hi, Ramiro. It’s Julia. Have you got a minute? I’d like to clear something up.' },
            { who: 'Ramiro', text: 'Claro, dime.', en: 'Of course, go ahead.' },
            { who: 'Julia', text: 'El lunes, Elena dijo que la presentación [[empezaría|teal]] a las diez, pero la invitación dice a las once.', en: 'On Monday Elena said the presentation would start at ten, but the invitation says eleven.' },
            { who: 'Ramiro', text: 'Sí, cambió esta mañana. Lo siento, pensaba que todos [[recibirían|teal]] un aviso.', en: 'Yes, it changed this morning. Sorry, I thought everyone would get a notice.' },
            { who: 'Julia', text: 'No pasa nada. ¿[[Podrías|blue]] confirmar también el orden?', en: 'No problem. Could you also confirm the order?' },
            { who: 'Ramiro', text: 'Todavía no está cerrado. ¿Tienes alguna preferencia?', en: 'It isn’t settled yet. Do you have a preference?' },
            { who: 'Julia', text: '[[Preferiría|blue]] presentar después de Marta. Compartimos parte del tema y así [[quedaría|orange]] todo más claro.', en: 'I’d rather present after Marta. We share part of the topic, so everything would be clearer.' },
            { who: 'Ramiro', text: 'Tiene sentido. ¿Necesitas más tiempo?', en: 'That makes sense. Do you need more time?' },
            { who: 'Julia', text: 'Elena nos explicó que cada uno [[tendría|teal]] cinco minutos. Con dos más, [[podría|orange]] incluir las preguntas.', en: 'Elena told us each of us would have five minutes. With two more, I could include questions.' },
            { who: 'Ramiro', text: 'Lo hablo con ella. ¿[[Te importaría|blue]] enviarme un resumen esta tarde?', en: 'I’ll talk to her about it. Would you mind sending me a summary this afternoon?' },
            { who: 'Julia', text: 'Perfecto. Te lo envío antes de las cinco. ¡Gracias!', en: 'Perfect. I’ll send it before five. Thanks!' },
          ], notes: {
            'Me gustaría': 'Julia presenta su deseo **con suavidad**: no exige, solo pide un momento para aclarar algo.',
            empezaría: 'Elena habló **el lunes** sobre el viernes: un futuro visto desde el pasado.',
            recibirían: '**Pensaba** (pasado) que más tarde todos recibirían el aviso: futuro desde el pasado.',
            Podrías: 'Una **petición atenuada**: más amable que «¿Puedes…?» en un contexto de trabajo.',
            Preferiría: 'Expresa una preferencia **sin imponerla**: Ramiro todavía puede decir que no.',
            quedaría: 'Una **consecuencia imaginada**: si presenta después de Marta, todo quedaría más claro.',
            tendría: '**Explicó** (pasado) lo que pasaría después: futuro desde el pasado.',
            podría: 'Una **consecuencia** que depende de una condición: con dos minutos más.',
            'Te importaría': 'Ramiro también pide con cortesía: «¿Te importaría + infinitivo?».',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué dijo Elena el lunes?', options: ['Que la presentación empezaría a las diez.', 'Que la presentación sería a las once.', 'Que Julia hablaría después de Marta.'], answer: 0, why: '«El lunes, Elena dijo que la presentación empezaría a las diez».', en: 'What did Elena say on Monday?' },
            { prompt: '¿Por qué quiere Julia presentar después de Marta?', options: ['Porque comparten parte del tema.', 'Porque llega tarde.', 'Porque no tiene el resumen.'], answer: 0, why: '«Compartimos parte del tema y así quedaría todo más claro».', en: 'Why does Julia want to present after Marta?' },
          ] },
        ] },
        { title: '¿Qué harías tú? · What would you do?', blocks: [
          { kind: 'explore', title: 'Un consejo entre amigos', setting: 'Por la noche, Julia le cuenta a su amigo Nico que está nerviosa por la presentación.', lines: [
            { who: 'Julia', text: 'Estoy nerviosa. Solo tengo cinco minutos y hay mucha información.', en: 'I’m nervous. I only have five minutes and there’s a lot of information.' },
            { who: 'Nico', text: '[[Yo que tú, prepararía|blue]] una versión corta, por si acaso.', en: 'If I were you, I’d prepare a short version, just in case.' },
            { who: 'Julia', text: 'Sí, ya empecé. Pero no sé si quitar los gráficos.', en: 'Yes, I’ve already started. But I don’t know whether to take out the charts.' },
            { who: 'Nico', text: 'Yo no los quitaría todos. [[Deberías|blue]] dejar el más importante.', en: 'I wouldn’t take them all out. You should keep the most important one.' },
            { who: 'Julia', text: 'Tienes razón. ¿Y si me hacen una pregunta difícil?', en: 'You’re right. And what if they ask me a difficult question?' },
            { who: 'Nico', text: '[[Sería buena idea|blue]] preparar dos o tres respuestas posibles.', en: 'It would be a good idea to prepare two or three possible answers.' },
            { who: 'Julia', text: 'Ay, con una semana más, todo [[sería|orange]] más fácil.', en: 'Oh, with one more week everything would be easier.' },
            { who: 'Nico', text: 'Con una semana más, [[estarías|orange]] igual de nerviosa. ¡Te conozco!', en: 'With one more week, you’d be just as nervous. I know you!' },
            { who: 'Julia', text: 'Jaja, puede ser. Gracias, Nico.', en: 'Ha ha, maybe. Thanks, Nico.' },
          ], notes: {
            'Yo que tú, prepararía': 'Nico **se pone en el lugar** de Julia para dar un consejo: «yo que tú» + condicional.',
            Deberías: '«Deberías» + infinitivo es un **consejo** suave, más amable que «tienes que».',
            'Sería buena idea': 'Otra forma de aconsejar: presenta la idea como **una posibilidad**.',
            sería: 'Julia **imagina** otra situación: con una semana más, todo sería más fácil.',
            estarías: 'Nico responde con otra **consecuencia imaginada**, en broma.',
          } },
          { kind: 'teacher', text: 'Pide al alumno un consejo más para Julia con «Yo en tu lugar…» y otro con «Sería mejor…».' },
        ] },
        { title: 'Tres intenciones · Three intentions', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'cortesia', label: 'Pedir o aconsejar', tone: 'blue' },
            { id: 'pasado', label: 'Futuro desde el pasado', tone: 'teal' },
            { id: 'imaginar', label: 'Imaginar', tone: 'orange' },
          ], items: [
            { text: '¿Podrías confirmar también el orden?', answer: 'cortesia', why: 'Una petición atenuada.' },
            { text: 'Elena dijo que la presentación empezaría a las diez.', answer: 'pasado', why: '«Dijo» + condicional: futuro desde el pasado.' },
            { text: 'Con una semana más, todo sería más fácil.', answer: 'imaginar', why: 'Una situación imaginada con una condición.' },
            { text: 'Yo que tú, prepararía una versión corta.', answer: 'cortesia', why: 'Un consejo con «yo que tú».' },
            { text: 'Pensaba que todos recibirían un aviso.', answer: 'pasado', why: '«Pensaba» + condicional: futuro desde el pasado.' },
            { text: 'Con dos minutos más, podría incluir las preguntas.', answer: 'imaginar', why: 'Una consecuencia que depende de una condición.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si te equivocas, lee la pista y prueba otra vez.',
      steps: [
        { title: 'Elige según el contexto · Choose by context', blocks: [
          { kind: 'choice', items: [
            { context: 'Escribes a una profesora que no conoces.', prompt: '¿___ enviarme el programa del curso, por favor?', options: ['Podría usted', 'Pudo usted', 'Podrá usted'], answer: 0, why: 'Una petición atenuada y formal: «¿Podría usted…?».', en: 'You are writing to a teacher you don’t know. ___ send me the course programme, please?' },
            { context: 'Tu amigo quiere dejar su trabajo sin tener otro.', prompt: 'Yo en tu lugar, ___ otro trabajo primero.', options: ['buscaría', 'buscaré', 'buscaba'], answer: 0, why: '«Yo en tu lugar» + condicional: un consejo.', en: 'Your friend wants to quit his job without having another one. In your place, ___ (look for) another job first.' },
            { context: 'El técnico habló contigo el martes.', prompt: 'El técnico me dijo que ___ el jueves, pero no vino.', options: ['vendrá', 'vendría', 'venga'], answer: 1, why: '«Dijo» en pasado: el futuro desde ese momento va en condicional.', en: 'The technician spoke to you on Tuesday. He told me he ___ (come) on Thursday, but he didn’t come.' },
            { context: 'Imaginas un año sabático.', prompt: 'Con un año libre, ___ a tocar la guitarra.', options: ['aprendería', 'aprenderé', 'aprendía'], answer: 0, why: 'Una consecuencia imaginada: condicional.', en: 'You imagine a sabbatical year. With a year off, ___ (learn) to play the guitar.' },
            { context: 'En un restaurante.', prompt: '___ una mesa junto a la ventana, si es posible.', options: ['Querría', 'Quise', 'Quiera'], answer: 0, why: '«Querría» presenta el deseo con cortesía.', en: 'In a restaurant: ___ a table by the window, if possible.' },
            { context: 'Recuerdas tus planes de adolescente.', prompt: 'A los quince años pensaba que ___ médica.', options: ['sería', 'seré', 'fui'], answer: 0, why: '«Pensaba» (pasado) + algo posterior: futuro desde el pasado.', en: 'You remember your teenage plans. At fifteen I thought I ___ (be) a doctor.' },
          ] },
        ] },
        { title: 'Compara los significados · Compare the meanings', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase es **más cortés** en un correo de trabajo?', options: ['¿Me envías el informe?', '¿Me enviarías el informe?'], answer: 1, why: 'El condicional suaviza la petición. La otra es correcta, pero más directa.', en: 'Which sentence is more polite in a work email?' },
            { prompt: '«Me dijo que llegaría a las ocho.» ¿Desde qué momento se mira la llegada?', options: ['Desde el momento en que me lo dijo.', 'Desde hoy.'], answer: 0, why: 'El condicional mira el futuro desde un momento del pasado.', en: '“Me dijo que llegaría a las ocho.” From which moment is the arrival seen?' },
            { prompt: '«Viviría en el campo.» ¿Qué significa?', options: ['Es una situación imaginada o un deseo.', 'Es un plan seguro.', 'Es un hábito del pasado.'], answer: 0, why: 'El condicional presenta algo posible, no un plan real.', en: '“Viviría en el campo.” What does it mean?' },
            { prompt: '¿Qué frase es un **consejo**?', options: ['Deberías dormir más.', 'Debías dormir más.', 'Dijo que dormiría más.'], answer: 0, why: '«Deberías» + infinitivo es un consejo. «Debías» habla del pasado y la tercera cuenta lo que alguien dijo.', en: 'Which sentence is advice?' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', blocks: [
          { kind: 'chat-fill', title: 'En la recepción de un hotel', lines: [
            { who: 'Recepcionista', text: 'Buenas noches. ¿En qué puedo ayudarle?' },
            { who: 'Cliente', text: 'Buenas noches. ¿___ cambiar de habitación? Hay mucho ruido.', options: ['Podría', 'Podería', 'Pude'], answer: 0, why: '«Poder» → raíz «podr-»: «¿Podría…?», una petición formal.' },
            { who: 'Recepcionista', text: 'Lo siento. Esta tarde mi compañero dijo que el ruido ___ a las diez.', options: ['terminará', 'terminaría', 'termine'], answer: 1, why: '«Dijo» en pasado: futuro desde el pasado, en condicional.' },
            { who: 'Cliente', text: 'Pues son las once. Me ___ una habitación interior.', options: ['gustaba', 'gustaría', 'gustará'], answer: 1, why: '«Me gustaría» expresa el deseo con cortesía.' },
            { who: 'Recepcionista', text: 'Tengo una en el quinto piso. ___ más tranquila, pero no tiene vistas.', options: ['Sería', 'Era', 'Fue'], answer: 0, why: 'Presenta una posibilidad, la consecuencia del cambio: condicional.' },
            { who: 'Cliente', text: 'No me importa. Yo en su lugar, ___ un cartel en la puerta del bar.', options: ['pondría', 'ponería', 'puse'], answer: 0, why: '«Poner» → raíz «pondr-»: un consejo con «yo en su lugar».' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Si tuviera tiempo, haceríamos una fiesta.', ok: false, options: ['Si tuviera tiempo, haríamos una fiesta.', 'Si tuviera tiempo, haremos una fiesta.', 'Si tuviera tiempo, hacíamos una fiesta.'], answer: 0, why: '«Hacer» tiene la raíz irregular «har-».' },
            { sentence: '¿Te importaría hablar un poco más despacio?', ok: true, why: 'Correcta: «¿Te importaría + infinitivo?» es una petición cortés.' },
            { sentence: 'Marta me prometió que me llamará ayer.', ok: false, options: ['Marta me prometió que me llamaría.', 'Marta me promete que me llamaría ayer.', 'Marta me prometió que me llama ayer.'], answer: 0, why: '«Prometió» en pasado: el futuro desde ese momento va en condicional.' },
            { sentence: 'Yo que tú, saliría antes para no llegar tarde.', ok: false, options: ['Yo que tú, saldría antes para no llegar tarde.', 'Yo que tú, salgo antes para no llegar tarde.', 'Yo que tú, salía antes.'], answer: 0, why: '«Salir» → raíz «saldr-»: saldría.' },
            { sentence: 'Pensábamos que el examen sería más difícil.', ok: true, why: 'Correcta: «pensábamos» + condicional, futuro visto desde el pasado.' },
            { sentence: 'Deberías de llamar a tu madre.', ok: false, options: ['Deberías llamar a tu madre.', 'Debías de llamar a tu madre.', 'Deberías a llamar a tu madre.'], answer: 0, why: 'Para aconsejar: «deberías» + infinitivo, sin preposición.' },
          ] },
        ] },
        { title: 'Construye frases · Build sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['¿Podrías', 'ayudarme', 'con', 'la', 'mudanza?'], accept: ['¿Podrías ayudarme con la mudanza?'], en: 'Could you help me with the move?' },
            { tiles: ['Dijo', 'que', 'llegaría', 'un', 'poco', 'tarde'], accept: ['Dijo que llegaría un poco tarde'], en: 'He said he would be a little late.' },
            { tiles: ['Yo', 'que', 'tú', 'no', 'compraría', 'ese', 'coche'], accept: ['Yo que tú no compraría ese coche', 'No compraría ese coche yo que tú'], en: 'If I were you, I wouldn’t buy that car.' },
            { tiles: ['Con', 'más', 'tiempo', 'leería', 'más', 'novelas'], accept: ['Con más tiempo leería más novelas', 'Leería más novelas con más tiempo'], en: 'With more time, I’d read more novels.' },
          ] },
        ] },
        { title: 'Transforma las frases · Transform the sentences', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase con el condicional', items: [
            { prompt: 'Ayúdame.', instruction: 'Convierte la orden en una petición cortés con «poder» (tú).', accept: ['¿Podrías ayudarme?', 'Podrías ayudarme', '¿Me podrías ayudar?', 'Me podrías ayudar'] },
            { prompt: 'Dice que vendrá.', instruction: 'Empieza con «Dijo que…».', accept: ['Dijo que vendría'] },
            { prompt: 'Quiero hablar con el director.', instruction: 'Hazla más cortés con «gustar».', accept: ['Me gustaría hablar con el director'] },
            { prompt: 'Tienes que descansar más.', instruction: 'Da el consejo con «deber» (tú).', accept: ['Deberías descansar más'] },
            { prompt: 'La coordinadora explica que tendremos cinco minutos.', instruction: 'Empieza con «La coordinadora explicó que…».', accept: ['La coordinadora explicó que tendríamos cinco minutos'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una respuesta de la coordinación', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una respuesta de la coordinación · A reply from coordination', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada condicional que oye y dice si es una petición, un futuro desde el pasado o una consecuencia.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad y leer la transcripción al final.' } },
          { kind: 'listen', title: 'Elena, de coordinación', channel: 'NOTA DE VOZ · PARA JULIA', src: '/audio/grammar-classroom/146.mp3',
            before: 'Elena, la coordinadora, responde a Julia sobre la hora y el orden de la presentación. ¿Crees que va a aceptar lo que pidió Julia?',
            gist: { prompt: '¿Qué hace Elena en este mensaje?', options: ['Confirma la nueva hora y organiza la presentación con Julia.', 'Cancela la presentación del viernes.', 'Le pide a Julia que presente antes de Marta.'], answer: 0, why: 'Dice que la presentación será a las once, pide un resumen y propone el orden y el tiempo.', en: 'What does Elena do in this message?' },
            details: [
              { prompt: '¿Qué dijo Elena ayer?', options: ['Que revisaría el programa.', 'Que la presentación sería a las once.', 'Que Julia tendría siete minutos.'], answer: 0, why: '«Ayer dije que revisaría el programa».', en: 'What did Elena say yesterday?' },
              { prompt: '¿A qué hora es la presentación?', options: ['A las diez.', 'A las once.', 'A las cinco.'], answer: 1, why: '«La presentación será a las once, no a las diez».', en: 'What time is the presentation?' },
              { prompt: '¿Qué le pide Elena a Julia?', options: ['Un resumen esta tarde.', 'Una presentación más larga.', 'Una llamada a Marta.'], answer: 0, why: '«¿Podrías enviar un resumen esta tarde?».', en: 'What does Elena ask Julia for?' },
              { prompt: '¿Por qué prefiere que Julia hable después de Marta?', options: ['Porque así las dos partes quedarían conectadas.', 'Porque Marta llega tarde.', 'Porque Julia tiene menos tiempo.'], answer: 0, why: '«Preferiría que hablaras después de ella… porque así las dos partes quedarían conectadas».', en: 'Why does she prefer Julia to speak after Marta?' },
              { prompt: '¿Cuánto tiempo puede tener Julia ahora?', options: ['Cinco minutos.', 'Siete minutos, con las preguntas.', 'Diez minutos.'], answer: 1, why: '«Te dije que tendrías cinco minutos, pero podemos darte siete si incluimos las preguntas».', en: 'How much time can Julia have now?' },
            ],
            transcript: 'Hola, Julia. Gracias por avisar. Ayer dije que [[revisaría|teal]] el programa y ya lo tengo delante. La presentación será a las once, no a las diez. ¿[[Podrías|blue]] enviar un resumen esta tarde? [[Me gustaría|blue]] compartirlo con Marta antes de cerrar el orden. [[Preferiría|blue]] que hablaras después de ella, como propusiste, porque así las dos partes [[quedarían|orange]] conectadas. Te dije que [[tendrías|teal]] cinco minutos, pero podemos darte siete si incluimos las preguntas. Confírmame si ese cambio te sirve y preparo la invitación definitiva. Así podrás organizar tu parte sin rehacer toda la presentación.',
            reply: { teacher: 'El alumno responde a Elena en voz alta, como si fuera Julia: acepta o propone otro cambio, con al menos una petición en condicional.', self: 'Responde a Elena como si fueras Julia: confirma el cambio y haz una petición más con «¿Podrías…?» o «Me gustaría…».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Pedir, aconsejar, imaginar', coach: 'Habla de tu vida real y de tus sueños.',
      steps: [
        { title: 'Pedir, aconsejar, imaginar · Ask, advise, imagine', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar y repregunta. Comparte también tus respuestas.', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta antes de decirla.' } },
          { kind: 'talk', cards: [
            { q: '¿Cuándo te cuesta pedir algo a otra persona?', followUps: ['¿Cómo pides un favor en el trabajo o en clase?', '¿Es diferente con tu familia?', '¿Qué frase usas en una tienda o en un restaurante?'], phrases: ['¿[[Podrías|blue]]…?', '[[Me gustaría|blue]]…', '¿[[Te importaría|blue]]…?'], hint: 'Piensa en una situación concreta y di la petición exacta, con el condicional.', example: 'Me cuesta pedir favores en el trabajo. Normalmente escribo: «¿Podrías ayudarme con esto cuando tengas un momento?».', next: 'Ahora imagina que tienes que negociar un cambio.' },
            { q: 'Tienes una presentación el viernes, pero ese día tienes una cita médica. ¿Cómo pides el cambio?', followUps: ['¿Qué día preferirías?', '¿Qué razón darías?', '¿Y si te dicen que no es posible?'], phrases: ['[[Preferiría|blue]] presentar el…', '¿[[Sería|blue]] posible…?', 'Me vendría mejor…'], hint: 'Da una razón y propón una alternativa. Si la primera opción no funciona, ofrece otra.', example: 'Hola, ¿sería posible cambiar mi presentación? El viernes tengo una cita médica. Preferiría presentar el jueves, pero el lunes también me vendría bien.', next: 'Hablemos de planes que cambiaron.', teacher: 'Haz de coordinador o coordinadora y rechaza la primera opción para que el alumno negocie.' },
            { q: '¿Alguien te prometió algo que al final no pasó?', followUps: ['¿Qué te dijo exactamente?', '¿Qué pasó al final?', '¿Cómo reaccionaste?'], phrases: ['Me dijo que [[vendría|teal]]…', 'Me prometió que [[tendría|teal]]…', 'Pensaba que [[sería|teal]]…, pero…'], hint: 'Cuenta lo que dijo con «dijo que» + condicional y después lo que pasó realmente, en indefinido.', example: 'El año pasado una empresa me dijo que me llamaría en una semana. Pensaba que sería un trabajo perfecto, pero nunca me llamaron.', next: 'Ahora te toca dar consejos.' },
            { q: 'Un amigo quiere aprender español en tres meses. ¿Qué le aconsejarías?', followUps: ['¿Qué no harías nunca?', '¿Qué te funcionó a ti?', '¿Sería mejor estudiar solo o en grupo?'], phrases: ['[[Deberías|blue]]…', '[[Yo que tú|blue]]…', '[[Sería buena idea|blue]]…'], hint: 'Da al menos tres consejos con estructuras diferentes.', example: 'Yo que tú, escucharía pódcast todos los días. Deberías hablar con nativos desde el primer día. Y sería buena idea ver series con subtítulos en español.', next: 'Y ahora, a imaginar.' },
            { q: 'Si pudieras vivir un año en otro país, ¿adónde irías?', followUps: ['¿Qué harías allí cada día?', '¿Qué echarías de menos?', '¿Con quién irías?'], phrases: ['[[Viviría|orange]] en…', 'Cada día [[iría|orange]]…', '[[Echaría|orange]] de menos…'], hint: '«Si pudieras» es una fórmula; responde con el condicional: «Iría a…».', example: 'Iría a Colombia, a Medellín. Viviría en un barrio tranquilo, tomaría clases de salsa y echaría de menos a mi familia.', next: 'Para terminar, una pregunta para pensar.' },
            { q: '¿Qué cambiarías de tu rutina si tuvieras una hora más cada día?', followUps: ['¿Qué dejarías de hacer?', '¿Qué te gustaría aprender?', '¿Crees que serías más feliz?'], phrases: ['[[Dedicaría|orange]] esa hora a…', '[[Me gustaría|blue]]…', 'Creo que [[estaría|orange]] más…'], hint: 'Imagina con el condicional y explica por qué.', example: 'Dedicaría esa hora a caminar por el parque. También me gustaría leer más. Creo que estaría más tranquila.', teacher: 'Cierra con una pregunta de reflexión: «¿Qué uso del condicional te parece más útil para tu vida?».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le pide al profesor un favor con cortesía y le da un consejo.', self: 'Escribe tres frases para usar esta semana: una petición, un consejo y algo que imaginas. Dilas en voz alta.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo a la coordinación', coach: 'Pide con cortesía y explica tus razones.',
      steps: [
        { title: 'Un correo a la coordinación · An email to coordination', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos el tono: ¿suena cortés?', self: 'Escribe tu correo y toca «Revisar mi texto». Después léelo como si fueras la persona que lo recibe: ¿suena amable?' } },
          { kind: 'write', title: 'Aclarar un cambio de programa', situation: 'Te inscribiste en un curso, un taller o una reunión. Lo que anunciaron al principio y lo que dice ahora el programa no coinciden. Escribe a la persona responsable.', task: [
            'Recuerda lo que se anunció con **dijo que / explicó que** + condicional.',
            'Haz dos peticiones con cortesía (**¿Podría…? / Me gustaría…**).',
            'Expresa una preferencia y explica la razón.',
            'Termina con una consecuencia positiva: «Así podría… / Así sería más fácil…».',
          ], starters: ['Estimada…:', 'En la reunión del lunes, usted explicó que…', '¿Podría confirmarme…?', 'Me gustaría saber si…', 'Preferiría… porque…', 'Así sería más fácil…'],
            words: ['podría', 'me gustaría', 'preferiría', 'sería', 'tendría', 'empezaría', 'por favor', 'muchas gracias', 'un saludo'],
            model: 'Estimada Elena: En la reunión del lunes, usted explicó que la presentación [[empezaría|teal]] el viernes a las diez y que cada participante [[tendría|teal]] cinco minutos. Sin embargo, la invitación nueva indica las once. ¿[[Podría|blue]] confirmarme la hora correcta? [[Me gustaría|blue]] saber también si hay tiempo para preguntas. [[Preferiría|blue]] presentar después de Marta, porque nuestros temas están muy relacionados: así [[sería|orange]] más fácil para el público seguir las ideas. Le envío mi resumen esta tarde. Muchas gracias por su ayuda. Un saludo, Julia',
            minWords: 70 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'PEDIR Y ACONSEJAR', formula: '¿Podrías…? · Me gustaría… · Deberías… · Yo que tú…', example: '¿Podrías confirmar la hora? Yo que tú, prepararía una versión corta.', caption: 'Suaviza peticiones y consejos.', en: 'Softens requests and advice: “Could you…?”, “I’d like…”, “You should…”, “If I were you…”.' },
            { tone: 'teal', label: 'FUTURO DESDE EL PASADO', formula: 'dijo / pensaba que + condicional', example: 'Dijo que la presentación empezaría a las diez.', caption: 'Un futuro visto desde un momento pasado.', en: 'A future seen from a moment in the past: “she said it would…”.' },
            { tone: 'orange', label: 'IMAGINAR', formula: 'condición + condicional', example: 'Con más tiempo, viajaría por Sudamérica.', caption: 'Una consecuencia posible o imaginada.', en: 'A possible or imagined consequence: “I would…”.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La forma', text: '**Infinitivo + -ía, -ías, -ía, -íamos, -íais, -ían**. Irregulares, los mismos del futuro: tendr-, pondr-, saldr-, vendr-, podr-, sabr-, querr-, habr-, har-, dir-.', en: 'The form: infinitive + -ía, -ías, -ía, -íamos, -íais, -ían. The irregular stems are the same as in the future: tendr-, pondr-, saldr-, vendr-, podr-, sabr-, querr-, habr-, har-, dir-.' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: '¿Me ___ la sal, por favor?', options: ['pasarías', 'pasabas', 'pasaste'], answer: 0, why: 'Una petición atenuada: condicional.' },
            { prompt: 'Mis padres pensaban que yo ___ abogado como mi abuelo.', options: ['seré', 'sería', 'sea'], answer: 1, why: '«Pensaban» + algo posterior: futuro desde el pasado.' },
            { prompt: 'Yo que tú, no le ___ nada todavía.', options: ['decería', 'diría', 'dijera'], answer: 1, why: '«Decir» → raíz «dir-»: un consejo con «yo que tú».' },
            { prompt: 'Con un coche, ___ más a la montaña.', options: ['iríamos', 'iremos', 'íbamos'], answer: 0, why: 'Una consecuencia imaginada: condicional.' },
          ] },
        ] },
        { title: 'Tus errores y repaso · Your mistakes and review', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Puedes ayudarme?» y «¿Podrías ayudarme?»: ¿qué diferencia hay? Las dos piden lo mismo; la segunda deja más espacio a la otra persona y suena más amable.' },
        ] },
      ],
    },
  ],
};
