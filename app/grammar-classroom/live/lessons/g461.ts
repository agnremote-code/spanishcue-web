import type { LiveLesson } from '../types';

/**
 * Lesson 461 · B2 · Futuro y condicional de probabilidad (course unit G161).
 * Builds on G057 (lesson 144: futuro simple, conjecture only recognised),
 * G103 (lesson 146: condicional simple), G134 (lesson 152: condicional compuesto)
 * and G160 (lesson 153: futuro compuesto, «habrá salido» as conjecture), plus
 * G094 / G126 (a lo mejor, quizás, puede que) and G158 (deber de + infinitivo).
 * The PCIC places plain conjecture («Estará en casa») at B1: the class opens with
 * a short recap and then works the B2 system: the conjecture moves one tense
 * forward. presente → futuro simple (Serán las ocho); pretérito perfecto →
 * futuro compuesto (Habrá salido); imperfecto / indefinido → condicional simple
 * (Serían las ocho cuando llegó; Tendría veinte años; Se conocerían en el barrio);
 * pluscuamperfecto → condicional compuesto (Ya habría salido), preview only
 * (C1 G174). Also: concessive use («Será muy listo, pero…», «Tendría dinero,
 * pero…»), questions of wonder (¿Dónde estará? ¿Quién sería?), equivalent
 * expressions (a lo mejor + ind., quizás, seguramente, debe de + inf., puede que
 * + subj.), conjecture vs hypothetical conditional, and a regional note (the
 * synthetic future is less used for plain future in much of Latin American speech,
 * while conjecture stays alive everywhere).
 * Scene: siblings Clara and Héctor Soler empty their grandmother Amparo's flat
 * (she has moved in with their mother, Pilar). Their cousin Iván is late. In a
 * wardrobe they find a photo of young Amparo with a postman in uniform signed
 * «R.» and a bundle of letters. Escuchar: Héctor's voice message to Clara after
 * talking to an old neighbour (es-MX-JorgeNeural). Escribir: a post in a
 * neighbourhood history group asking for help with the photo.
 */
export const lesson: LiveLesson = {
  id: 461,
  level: 'B2',
  title: 'Futuro y condicional de probabilidad',
  subtitle: 'Suponer qué pasa, qué ha pasado y qué pasó con el futuro y el condicional, y conceder con «será…, pero».',
  legend: [
    { tone: 'blue', label: 'AHORA · futuro simple (serán las ocho, estará en camino)' },
    { tone: 'teal', label: 'ACABA DE PASAR · futuro compuesto (habrá salido)' },
    { tone: 'orange', label: 'EN EL PASADO · condicional (serían las ocho, tendría veinte años)' },
    { tone: 'violet', label: 'CONCESIÓN · será…, pero / sería…, pero' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Suponer sin saber', coach: 'No lo sabes: lo supones. You don’t know it: you guess.',
      steps: [
        { title: 'Una caja en el armario · A box in the wardrobe', blocks: [
          { kind: 'lead', text: 'Clara y Héctor Soler vacían el piso de su abuela Amparo, que se ha ido a vivir con su madre. Su primo Iván tenía que llegar a las seis y no aparece. «**Estará** en el metro», dice Clara. Ya conoces este uso: el futuro no habla del mañana, sino de una **suposición sobre el ahora**. Hoy das el paso de B2: suponer también sobre lo que **acaba de pasar** y sobre el **pasado**, y usar estas formas para conceder.', en: 'Clara and Héctor Soler are emptying the flat of their grandmother Amparo, who has moved in with their mother. Their cousin Iván was due at six and hasn’t turned up. “He’ll be on the metro,” says Clara. You already know this use: the future here is not about tomorrow but a guess about now. Today you take the B2 step: guessing about what has just happened and about the past, and using these forms to concede a point.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres columnas. Tu alumno dice cuál es un dato, cuál una suposición con futuro y cuál una suposición con adverbio.', self: 'Lee las tres frases en voz alta. ¿Cuál es un dato? ¿Cuáles son suposiciones? (Which one is a fact and which ones are guesses?)' } },
          { kind: 'compare', title: 'Dato o suposición · Fact or guess', columns: [
            { tone: 'neutral', label: 'DATO', sentence: 'Son las seis y media.', idea: 'Héctor mira el reloj: lo sabe.', en: 'A fact: Héctor has checked the time.' },
            { tone: 'blue', label: 'SUPOSICIÓN CON FUTURO', sentence: '[[Serán|blue]] las seis y media.', idea: 'Clara no tiene reloj: calcula. Es una suposición sobre el presente.', en: 'A guess about the present: “it must be about half past six”. No future time is involved.' },
            { tone: 'neutral', label: 'SUPOSICIÓN CON ADVERBIO', sentence: 'Probablemente son las seis y media.', idea: 'El mismo significado, con presente y un adverbio.', en: 'Same meaning, built with the present and an adverb.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Iván estará en el metro». ¿Cuándo está Iván en el metro, según Clara?', options: ['Ahora mismo, probablemente.', 'Mañana por la mañana.', 'Ayer por la tarde.'], answer: 0, why: 'El futuro de probabilidad habla del presente: «estará» = probablemente está.', en: 'When, according to Clara, is Iván on the metro?' },
            { prompt: '¿Qué frase es un dato y no una suposición?', options: ['Tendrá unos treinta años.', 'Tiene treinta y dos años.', 'Debe de tener unos treinta años.'], answer: 1, why: 'El presente sin adverbio ni perífrasis afirma un dato. Las otras dos suponen.', en: 'Which sentence states a fact rather than a guess?' },
          ] },
        ] },
        { title: 'Un tiempo hacia delante · One tense forward', mascot: '/brand/mascot/studying.webp', coach: 'Lo que sabrías → un tiempo más. What you’d say if you knew, one tense forward.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'EL SISTEMA DE LA CONJETURA', question: '¿Qué dirías si lo supieras?', en: 'Start from the sentence you would say if you knew the fact. To turn it into a guess, move the verb one step “forward”: present → simple future, present perfect → future perfect, imperfect or preterite → conditional, pluperfect → conditional perfect. The time you are talking about does not change, only your certainty.', formula: ['está → estará (ahora)', 'ha salido → habrá salido (acaba de pasar)', 'estaba / salió → estaría / saldría (en el pasado)', 'había salido → habría salido (antes de otro pasado)'],
            meaning: 'Piensa en la frase que dirías **si supieras el dato**. Para convertirla en suposición, mueve el verbo **un tiempo hacia delante**. El momento del que hablas no cambia: solo cambia tu seguridad.',
            examples: [
              { es: 'El portero [[estará|blue]] comiendo; la portería está cerrada.', en: 'The doorman will be having lunch: the porter’s lodge is closed (guess about now).' },
              { es: 'Iván no contesta. [[Habrá dejado|teal]] el teléfono en casa.', en: 'Iván isn’t answering. He must have left his phone at home (guess about something that has just happened).' },
              { es: 'Cuando la abuela compró el piso, [[tendría|orange]] unos treinta años.', en: 'When grandma bought the flat, she must have been about thirty (guess about the past).' },
            ] },
          { kind: 'table', title: 'De lo que sabes a lo que supones · From fact to guess', head: ['Si lo sabes…', 'Si lo supones…', 'Equivale a…'], rows: [
            ['Iván **está** en camino.', 'Iván [[estará|blue]] en camino.', 'probablemente está'],
            ['Se **ha olvidado** de la hora.', 'Se [[habrá olvidado|teal]] de la hora.', 'probablemente se ha olvidado'],
            ['**Eran** las ocho cuando llamó.', '[[Serían|orange]] las ocho cuando llamó.', 'probablemente eran'],
            ['Se **conocieron** en el barrio.', 'Se [[conocerían|orange]] en el barrio.', 'probablemente se conocieron'],
            ['Ya **había salido**.', 'Ya [[habría salido|orange]].', 'probablemente ya había salido (lo verás en C1)'],
          ], note: 'El condicional simple corresponde tanto al **imperfecto** (eran → serían) como al **indefinido** (se conocieron → se conocerían). El futuro compuesto corresponde a «ha salido» y, según el contexto, también a «salió»: «Lo **habrá comprado** en algún mercadillo».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Clara oye ruido en el piso de arriba ahora mismo.', prompt: 'Los vecinos ___ de obras.', options: ['estarán', 'estarían', 'habrán estado'], answer: 0, why: 'Suposición sobre el presente: están → estarán.', en: 'The neighbours must be having building work done.' },
            { context: 'Héctor encuentra la puerta del trastero abierta.', prompt: 'La ___ abierto el portero esta mañana.', options: ['abrirá', 'habrá', 'habría'], answer: 1, why: 'Suposición sobre algo que acaba de pasar: la ha abierto → la habrá abierto.', en: 'The doorman must have opened it this morning.' },
            { context: 'Hablan de una foto antigua.', prompt: 'En esta foto la abuela ___ unos veinte años.', options: ['habrá tenido', 'tendrá', 'tendría'], answer: 2, why: 'Suposición sobre el pasado: tenía → tendría.', en: 'In this photo grandma must have been about twenty.' },
          ] },
        ] },
        { title: 'Suponer sobre el pasado · Guessing about the past', mascot: '/brand/mascot/speaking.webp', coach: 'Condicional = «seguramente era / fue». Conditional = it must have been.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CONDICIONAL DE PROBABILIDAD', question: '¿Supones algo de una época o de un momento pasado?', en: 'The conditional, besides hypotheses and politeness, expresses a guess about the past. “Serían las ocho cuando llegó” means “it must have been about eight when he arrived”. It is especially frequent with ser, estar, tener, haber and with ages, times and quantities.', formula: ['condicional = probablemente + imperfecto o indefinido', 'serían las + hora · tendría + edad · habría + cantidad'],
            meaning: 'Además de hipótesis y cortesía (clase 103), el condicional sirve para **suponer sobre el pasado**. Es muy frecuente con horas, edades y cantidades, y con verbos como **ser, estar, tener, haber**.',
            examples: [
              { es: '[[Serían|orange]] las diez cuando llamó Iván anoche; yo ya estaba cenando.', en: 'It must have been about ten when Iván called last night; I was already having dinner.' },
              { es: 'En aquella fiesta [[habría|orange]] más de cien invitados.', en: 'There must have been over a hundred guests at that party.' },
              { es: 'La carta no tiene sello: la [[traería|orange]] alguien en mano.', en: 'The letter has no stamp: someone must have delivered it by hand.' },
            ],
            note: 'Ojo con el contexto: «[[Tendría|orange]] veinte años» (suposición sobre el pasado) no es lo mismo que «Yo **tendría** más paciencia» (hipótesis: si fuera tú).' },
          { kind: 'compare', title: 'Mismo verbo, dos valores · Same verb, two meanings', columns: [
            { tone: 'orange', label: 'SUPOSICIÓN SOBRE EL PASADO', sentence: 'La abuela no comió nada: [[estaría|orange]] nerviosa.', idea: 'Un hecho pasado (no comió) y una explicación probable.', en: 'A past fact and a likely explanation: “she must have been nervous”.' },
            { tone: 'neutral', label: 'HIPÓTESIS', sentence: 'Yo, en su lugar, también estaría nerviosa.', idea: 'Una situación imaginada, no una suposición sobre lo que pasó.', en: 'An imagined situation (“in her place, I would be nervous too”), not a guess about what happened.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Se conocerían en el barrio». ¿Qué significa?', options: ['Se habrían conocido si vivieran allí.', 'Se conocerán en el barrio algún día.', 'Probablemente se conocieron en el barrio.'], answer: 2, why: 'Condicional de probabilidad = indefinido + «probablemente».', en: 'What does it mean?' },
            { prompt: 'Anoche Iván no contestó el teléfono. ___ dormido.', options: ['Estará', 'Estaría', 'Esté'], answer: 1, why: '«Anoche» sitúa la suposición en el pasado: estaba → estaría.', en: 'Last night Iván didn’t answer the phone. He must have been asleep.' },
          ] },
        ] },
        { title: 'Preguntarse y conceder · Wondering and conceding', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Quién sería? Será…, pero… Who could it be?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'DOS USOS MÁS', question: '¿Te haces una pregunta en voz alta o concedes algo para oponer otra idea?', en: 'Two more uses. In questions, the future and the conditional express wondering: you ask yourself, without expecting anyone to know (“¿Dónde estará?” = I wonder where he is). In statements followed by “pero”, they concede a point you don’t argue with in order to stress the opposite: “Será muy listo, pero no escucha” = he may well be clever, but he doesn’t listen.', formula: ['¿Dónde estará? · ¿Qué habrá pasado? · ¿Quién sería? (me pregunto…)', 'Será + cualidad, pero… = aunque es…, …', 'Sería / tendría…, pero… = aunque era / tenía…, …'],
            meaning: 'En **preguntas**, el futuro y el condicional expresan duda: te preguntas algo sin esperar que nadie lo sepa. Con **pero**, conceden algo que no discutes para destacar lo contrario: «Será muy listo, pero no escucha» = aunque es muy listo…',
            examples: [
              { es: '¿Dónde [[estará|blue]] la llave del trastero?', en: 'Where can the storeroom key be? (I wonder.)' },
              { es: '¿Quién [[sería|orange]] el chico de la foto?', en: 'Who might the boy in the photo have been?' },
              { es: 'El piso [[será antiguo|violet]], pero tiene una luz preciosa.', en: 'The flat may be old, but it gets lovely light.' },
              { es: 'El abuelo [[tendría poco dinero|violet]], pero nunca faltó nada en casa.', en: 'Grandpa may not have had much money, but the family never went without.' },
            ] },
          { kind: 'tip', icon: '💡', title: 'La concesión no duda · The concession doesn’t doubt', text: 'En «Será antiguo, pero tiene luz» no hay duda real: el hablante **acepta** que el piso es antiguo y le quita importancia. Equivale a «Es verdad que es antiguo, pero…» o «Aunque es antiguo…». Por eso casi siempre va seguida de **pero** o **sin embargo**.', en: 'In “Será antiguo, pero tiene luz” there is no real doubt: the speaker accepts the flat is old and downplays it. It equals “It’s true it’s old, but…”. That is why it is almost always followed by “pero” or “sin embargo”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Iván será muy simpático, pero siempre llega tarde». ¿Duda Héctor de que Iván sea simpático?', options: ['Sí, no está seguro.', 'No: lo acepta y destaca lo negativo.', 'Sí, cree que es antipático.'], answer: 1, why: 'Futuro concesivo: «Es verdad que es simpático, pero…».', en: 'Does Héctor doubt that Iván is friendly?' },
            { prompt: 'Clara mira el sobre y se pregunta en voz alta: «¿Desde dónde ___ R. estas cartas?».', options: ['escribiría', 'escribirá', 'escriba'], answer: 0, why: 'Una pregunta sobre el pasado (las cartas son antiguas): condicional.', en: 'Where might he have written these letters from?' },
          ] },
        ] },
        { title: 'Otras formas de suponer · Other ways to guess', mascot: '/brand/mascot/seated.webp', coach: 'Elige la herramienta. Choose your tool.', blocks: [
          { kind: 'table', title: 'La misma suposición, varias formas · One guess, several forms', head: ['Forma', 'Ahora', 'En el pasado'], rows: [
            ['futuro / condicional', 'Iván [[estará|blue]] en el metro.', 'Iván [[estaría|orange]] en el metro.'],
            ['**deber de** + infinitivo', 'Iván **debe de estar** en el metro.', 'Iván **debía de estar** en el metro.'],
            ['**a lo mejor** + indicativo', 'A lo mejor **está** en el metro.', 'A lo mejor **estaba** en el metro.'],
            ['**quizás / tal vez** + indicativo o subjuntivo', 'Quizás **está / esté** en el metro.', 'Quizás **estaba / estuviera** en el metro.'],
            ['**puede que** + subjuntivo', 'Puede que **esté** en el metro.', 'Puede que **estuviera** en el metro.'],
            ['**seguramente / probablemente** + indicativo', 'Seguramente **está** en el metro.', 'Seguramente **estaba** en el metro.'],
          ], note: 'Para lo que acaba de pasar: «debe de **haber salido**», «puede que **haya salido**», «a lo mejor **ha salido**». El futuro y el condicional se pueden combinar con un adverbio: «Seguramente **estará** en casa» es muy natural.' },
          { kind: 'tip', icon: '⚠', title: 'Deber de o deber · Deber de vs deber', text: '**Deber de** + infinitivo expresa suposición: «Debe de tener frío». **Deber** + infinitivo expresa obligación: «Debes cerrar con llave». La norma culta acepta también «deber» sin «de» para suponer, pero **no** recomienda «deber de» para la obligación: «Debes de cerrar con llave» suena a suposición, no a orden.', en: '“Deber de + infinitive” expresses a guess; “deber + infinitive” expresses obligation. Educated usage also accepts “deber” without “de” for guesses, but advises against “deber de” for obligation: it would sound like a guess, not an instruction.' },
          { kind: 'tip', icon: '🌎', title: 'En todo el mundo hispánico · Across the Spanish-speaking world', text: 'En muchas zonas de América, en la conversación, el futuro simple se usa poco para hablar del futuro: se prefiere «voy a + infinitivo». Pero el **futuro de probabilidad** sigue muy vivo en todas partes: «¿Qué hora será?», «Estará en camino».', en: 'In much of Latin America, everyday speech uses the simple future little for future plans and prefers “voy a + infinitive”. But the future of probability is alive everywhere: “¿Qué hora será?”, “Estará en camino”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase NO es una suposición?', options: ['Estará cansada.', 'Debe de estar cansada.', 'Debes descansar un poco.'], answer: 2, why: '«Deber» sin «de» y con «tú» aquí da un consejo u obligación. Las otras dos suponen.', en: 'Which sentence is NOT a guess?' },
            { prompt: 'Puede que la abuela ___ esa foto a propósito.', options: ['guardó', 'guardara', 'guardaría'], answer: 1, why: '«Puede que» pide subjuntivo; en pasado, imperfecto de subjuntivo.', en: 'Grandma may have kept that photo on purpose.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Ahora, hace un momento o antes? Now, just now or back then?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno dice qué falla antes de ver la corrección: ¿el tiempo de la suposición o el modo?', self: 'Lee cada frase y decide qué falla: ¿el tiempo o el modo? Después toca para ver la corrección. (Is the problem the tense or the mood?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Serán las once cuando llegó Iván.', right: 'Serían las once cuando llegó Iván.', why: '«Llegó» es pasado: la suposición sobre aquel momento va en condicional (eran → serían).' },
            { wrong: 'Ayer la abuela estará cansada.', right: 'Ayer la abuela estaría cansada.', why: 'El futuro de probabilidad habla del presente. Para el pasado, condicional.' },
            { wrong: 'No contesta: habría salido.', right: 'No contesta: habrá salido.', why: 'Algo que acaba de pasar y afecta al ahora: ha salido → habrá salido.' },
            { wrong: 'A lo mejor Iván esté en el metro.', right: 'A lo mejor Iván está en el metro.', why: '«A lo mejor» va con indicativo.' },
            { wrong: 'Puede que tiene razón.', right: 'Puede que tenga razón.', why: '«Puede que» pide subjuntivo.' },
            { wrong: 'Debes de bajar las cajas a la entrada.', right: 'Debes bajar las cajas a la entrada.', why: 'Para una obligación, «deber» sin «de». «Deber de» se reserva para suponer.' },
            { wrong: 'No hay reloj, pero habrá las nueve.', right: 'No hay reloj, pero serán las nueve.', why: 'La hora se dice con «ser»: son las nueve → serán las nueve. «Habrá» corresponde a «hay»: habrá libros.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cuando la conoció, el abuelo ___ en el puerto.', options: ['trabaje', 'trabajará', 'trabajaría'], answer: 2, why: 'Suposición sobre el pasado («la conoció»): trabajaba → trabajaría.', en: 'When he met her, grandpa must have been working at the port.' },
            { prompt: 'La caja pesa mucho. ___ libros dentro.', options: ['Habrá', 'Habría', 'Hubiera'], answer: 0, why: 'Suposición sobre el presente: hay → habrá.', en: 'The box is very heavy. There must be books inside.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno mira una foto antigua de su teléfono y dice qué hora sería, qué edad tendría y dónde estaría.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La foto del cartero', coach: 'Toca cada suposición marcada. Tap each marked guess.',
      steps: [
        { title: 'En el piso de la abuela · At grandma’s flat', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Héctor y tu alumno es Clara. Después tu alumno toca cada forma marcada y dice si la suposición es sobre ahora, sobre lo que acaba de pasar o sobre el pasado.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada: ¿ahora, acaba de pasar, pasado o concesión? (Tap each marked form and decide its time.)' } },
          { kind: 'explore', title: '¿Quién sería R.?', setting: 'Sábado por la tarde. Clara y Héctor llenan cajas en el piso de su abuela. Su primo Iván tenía que llegar a las seis. (Saturday afternoon: the siblings pack boxes in their grandmother’s flat.)', lines: [
            { who: 'Héctor', text: 'Son casi las siete y Iván sin aparecer. ¿Dónde [[estará|blue]]?', en: 'It’s almost seven and still no sign of Iván. Where can he be?' },
            { who: 'Clara', text: '[[Estará esperando|blue]] el autobús. Los sábados pasa cada media hora.', en: 'He’ll be waiting for the bus. On Saturdays it only comes every half hour.' },
            { who: 'Héctor', text: 'O se [[habrá olvidado|teal]] de que era hoy. Bueno, mira lo que había en el armario.', en: 'Or he’s forgotten it was today. Anyway, look what was in the wardrobe.' },
            { who: 'Clara', text: '¡Qué foto! Aquí la abuela [[tendría|orange]] unos veinte años. ¿Y este chico de uniforme? ¿Quién [[sería|orange]]?', en: 'What a photo! Grandma must have been about twenty here. And this boy in uniform? Who could he have been?' },
            { who: 'Héctor', text: 'Detrás pone «Para Amparo, con cariño. R.». El abuelo se llamaba Julio, así que no es él.', en: 'On the back it says “For Amparo, with love. R.” Grandpa’s name was Julio, so it isn’t him.' },
            { who: 'Clara', text: '[[Sería un novio|orange]] de antes de conocer al abuelo. ¡Qué callado se lo tenía!', en: 'He must have been a boyfriend from before she met grandpa. She kept that quiet!' },
            { who: 'Héctor', text: '[[Sería muy guapo|violet]], pero mira qué cara tan seria.', en: 'He may have been very handsome, but look how serious he looks.' },
            { who: 'Clara', text: 'Y por la bolsa, el uniforme [[debía de ser|orange]] de cartero. Hay más cartas suyas, todas desde el puerto.', en: 'And judging by the bag, it must have been a postman’s uniform. There are more letters from him, all from the port.' },
            { who: 'Héctor', text: '[[Se escribirían|orange]] durante años. ¿Y por qué las [[habrá guardado|teal]] la abuela aquí, entre las sábanas?', en: 'They must have written to each other for years. And why would grandma have kept them here, between the sheets?' },
            { who: 'Clara', text: 'Para que no las viera el abuelo, digo yo.', en: 'So that grandpa wouldn’t see them, I suppose.' },
            { who: 'Héctor', text: '(Suena el timbre.) ¡Por fin! [[Será Iván|blue]].', en: '(The doorbell rings.) At last! That’ll be Iván.' },
            { who: 'Clara', text: 'Pues que se prepare: esta historia va para largo.', en: 'Well, he’d better get ready: this story is going to take a while.' },
          ], notes: {
            'estará': 'Pregunta en el aire sobre el **presente**: Héctor no espera que Clara lo sepa. ¿Dónde estará? = me pregunto dónde está.',
            'Estará esperando': 'Futuro de probabilidad con gerundio: «probablemente está esperando» **ahora**.',
            'habrá olvidado': 'Futuro compuesto: suposición sobre algo que **acaba de pasar** y explica el presente (Iván no ha llegado). = probablemente se ha olvidado.',
            'tendría': 'Condicional: suposición sobre la **edad en el pasado**, cuando se hizo la foto. = probablemente tenía.',
            'sería': 'Pregunta en el aire sobre el **pasado**: me pregunto quién era. El chico de la foto pertenece a otra época.',
            'Sería un novio': 'Respuesta a la pregunta anterior, también en condicional: probablemente era un novio.',
            'Sería muy guapo': '**Concesión**: Héctor no duda de que fuera guapo; lo acepta y destaca otra cosa con «pero». = aunque era muy guapo…',
            'debía de ser': '**Deber de** en imperfecto: otra forma de suponer sobre el pasado. Equivale a «sería».',
            'Se escribirían': 'Condicional para una costumbre pasada que se supone: probablemente se escribían.',
            'habrá guardado': 'Pregunta en el aire con futuro compuesto: las guardó y siguen ahí. ¿Por qué lo habrá hecho?',
            'Será Iván': 'Suposición sobre **ahora** mismo: quien llama probablemente es Iván.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Sabe Clara por qué Iván llega tarde?', options: ['Sí, Iván le escribió.', 'No, solo lo supone.', 'Sí, ha perdido el autobús.'], answer: 1, why: '«Estará esperando el autobús» es una suposición.', en: 'Does Clara know why Iván is late?' },
            { prompt: '¿Por qué creen que el chico era cartero?', options: ['Porque la abuela se lo contó.', 'Por la bolsa del uniforme.', 'Porque lo dice detrás de la foto.'], answer: 1, why: '«Por la bolsa, el uniforme debía de ser de cartero».', en: 'Why do they think the young man was a postman?' },
            { prompt: '¿Qué opina Héctor del chico?', options: ['Que era feo.', 'Que era el abuelo de joven.', 'Que sería guapo, pero parecía muy serio.'], answer: 2, why: '«Sería muy guapo, pero mira qué cara tan seria».', en: 'What does Héctor think of the young man?' },
          ] },
        ] },
        { title: 'Mensajes con Iván · Texts with Iván', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Chat del sábado · Saturday chat', lines: [
            { who: 'Iván', text: 'Perdón, perdón. Ya subo. ¿Cómo van?' },
            { who: 'Clara', text: 'Hemos encontrado cartas de un tal R. Tú ___ algo, que eras el nieto favorito.', options: ['sabrás', 'sabrías', 'sepas'], answer: 0, why: 'Suposición sobre lo que Iván sabe **ahora**: sabes → sabrás.' },
            { who: 'Iván', text: 'Ni idea. Pero la abuela, de joven, ___ un carácter difícil.', options: ['tenga', 'tendría', 'tendrá'], answer: 1, why: '«De joven» sitúa la suposición en el pasado: tenía → tendría.' },
            { who: 'Héctor', text: 'Y tu madre, de joven, ___ algo de aquel novio, ¿no?', options: ['sabrá', 'sepa', 'sabría'], answer: 2, why: '«De joven» sitúa la suposición en el pasado: sabía → sabría. El subjuntivo no tiene aquí nada que lo pida.' },
            { who: 'Iván', text: 'Mi madre ___ muy curiosa, pero de esto nunca ha dicho nada.', options: ['fuera', 'será', 'sea'], answer: 1, why: 'Concesión sobre el presente: «Es verdad que es muy curiosa, pero…».' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué habrá pasado entre la abuela y R.?». Tu alumno propone dos explicaciones con condicional y una con «a lo mejor».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Ahora, hace un momento o antes? Now, just now or back then?',
      steps: [
        { title: 'Una tarde de mudanza · A moving afternoon', blocks: [
          { kind: 'choice', items: [
            { context: 'Se ve luz debajo de la puerta del vecino.', prompt: 'El vecino ___ en casa.', options: ['estará', 'estaría', 'esté'], answer: 0, why: 'Suposición sobre el presente: está → estará.', en: 'He must be at home.' },
            { context: 'Miran una foto de la calle en los años sesenta.', prompt: 'En esa época la calle no ___ asfaltada todavía.', options: ['estaría', 'esté', 'estará'], answer: 0, why: 'Suposición sobre el pasado: estaba → estaría.', en: 'Back then the street probably wasn’t paved yet.' },
            { context: 'Esta mañana había gente en el piso de enfrente; ahora no hay nadie.', prompt: 'Los vecinos ___ a trabajar.', options: ['saldrán', 'habrán salido', 'habrían salido'], answer: 1, why: 'Algo que acaba de pasar y explica el ahora: han salido → habrán salido.', en: 'The neighbours must have gone out to work.' },
            { context: 'Clara admite algo de la abuela joven y añade un dato que lo contradice.', prompt: 'De joven, la abuela ___ muy tímida, pero se escribía con un cartero.', options: ['será', 'haya sido', 'sería'], answer: 2, why: 'Concesión sobre el pasado («de joven»): condicional + pero.', en: 'Grandma may have been very shy as a young woman, but she wrote to a postman.' },
            { context: 'Iván no contesta al teléfono.', prompt: '___ en el ascensor, sin cobertura.', options: ['Puede que está', 'Debe de estar', 'A lo mejor esté'], answer: 1, why: 'Deber de + infinitivo = suposición. «Puede que» pide subjuntivo y «a lo mejor», indicativo.', en: 'He must be in the lift, with no signal.' },
          ] },
        ] },
        { title: '¿De qué momento hablan? · Which time are they guessing about?', blocks: [
          { kind: 'classify', title: 'Clasifica la suposición · Classify the guess', categories: [
            { id: 'ahora', label: 'AHORA · futuro simple', tone: 'blue' },
            { id: 'reciente', label: 'ACABA DE PASAR · futuro compuesto', tone: 'teal' },
            { id: 'pasado', label: 'EN EL PASADO · condicional', tone: 'orange' },
          ], items: [
            { text: 'Iván estará subiendo por la escalera.', answer: 'ahora', why: 'Futuro simple: probablemente está subiendo en este momento.' },
            { text: 'Se habrá quedado sin batería.', answer: 'reciente', why: 'Futuro compuesto: probablemente se ha quedado sin batería.' },
            { text: 'En la foto, el cartero tendría unos veinticinco años.', answer: 'pasado', why: 'Condicional: probablemente tenía esa edad cuando se hizo la foto.' },
            { text: 'Serían las once cuando llamó el vecino anoche.', answer: 'pasado', why: '«Anoche»: probablemente eran las once.' },
            { text: '¿Quién habrá dejado esta caja en la puerta?', answer: 'reciente', why: 'Alguien la ha dejado hace poco: me pregunto quién la ha dejado.' },
            { text: '¿Cuánto costará hoy un piso como este?', answer: 'ahora', why: '«Hoy»: me pregunto cuánto cuesta ahora.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Anoche Héctor no cenó: estará muy cansado.', ok: false, options: ['Anoche Héctor no cenó: esté muy cansado.', 'Anoche Héctor no cenó: estuviera muy cansado.', 'Anoche Héctor no cenó: estaría muy cansado.'], answer: 2, why: '«Anoche»: suposición sobre el pasado, en condicional. El subjuntivo necesita algo que lo pida.' },
            { sentence: 'A lo mejor la abuela se acuerde de ese cartero.', ok: false, options: ['A lo mejor la abuela se haya acordado de ese cartero.', 'A lo mejor la abuela se acordara de ese cartero.', 'A lo mejor la abuela se acuerda de ese cartero.'], answer: 2, why: '«A lo mejor» va siempre con indicativo.' },
            { sentence: 'Ya son las nueve. ¿Dónde estará Iván?', ok: true, why: 'Correcta: pregunta en el aire sobre el presente.' },
            { sentence: 'Puede que el cartero vivía en el puerto.', ok: false, options: ['Puede que el cartero viviría en el puerto.', 'Puede que el cartero vivirá en el puerto.', 'Puede que el cartero viviera en el puerto.'], answer: 2, why: '«Puede que» pide subjuntivo; para el pasado, imperfecto de subjuntivo: viviera.' },
            { sentence: 'Debes de vaciar el armario antes del sábado.', ok: false, options: ['Debes vaciar el armario antes del sábado.', 'Debes de que vaciar el armario antes del sábado.', 'Deberías de vaciar el armario antes del sábado.'], answer: 0, why: 'Es una obligación: «deber» + infinitivo, sin «de».' },
            { sentence: 'La abuela tendría treinta años cuando se casó.', ok: true, why: 'Correcta: suposición sobre la edad en un momento pasado.' },
            { sentence: 'Iván no contesta: habría apagado el teléfono.', ok: false, options: ['Iván no contesta: apagará el teléfono.', 'Iván no contesta: habrá apagado el teléfono.', 'Iván no contesta: haya apagado el teléfono.'], answer: 1, why: 'Acaba de pasar y explica el ahora: ha apagado → habrá apagado.' },
          ] },
        ] },
        { title: 'Mensajes con la madre · Texts with mum', blocks: [
          { kind: 'chat-fill', title: 'Clara escribe a su madre · Clara texts her mum', lines: [
            { who: 'Clara', text: 'Mamá, hemos encontrado una foto de la abuela con un cartero. ___ unos veinte años.', options: ['Tenga', 'Tendría', 'Tendrá'], answer: 1, why: 'La edad en el momento de la foto: suposición sobre el pasado.' },
            { who: 'Pilar', text: 'Ni idea, nunca me habló de él. Pero de joven ___ alguien importante para ella.', options: ['fuera', 'será', 'sería'], answer: 2, why: '«De joven» sitúa la suposición en el pasado: era → sería.' },
            { who: 'Pilar', text: 'Pregúntale a ella, aunque ahora ___ durmiendo la siesta: a estas horas siempre se acuesta un rato.', options: ['estará', 'estaría', 'esté'], answer: 0, why: '«Ahora»: suposición sobre el presente.' },
            { who: 'Clara', text: 'Vale. Iván todavía no ha llegado. Se ___ de hora.', options: ['habría equivocado', 'equivocaría', 'habrá equivocado'], answer: 2, why: 'Algo que acaba de pasar: se ha equivocado → se habrá equivocado.' },
            { who: 'Pilar', text: 'Tu primo ___ muy simpático, pero es un desastre con los horarios.', options: ['sea', 'sería', 'será'], answer: 2, why: 'Concesión sobre el presente: «es simpático, pero…».' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['¿Quién', 'sería', 'el', 'chico', 'de', 'la', 'foto?'], accept: ['¿Quién sería el chico de la foto?'], en: 'Who might the boy in the photo have been?' },
            { tiles: ['Serían', 'las', 'diez', 'cuando', 'llegó', 'Iván'], accept: ['Serían las diez cuando llegó Iván', 'Serían las diez cuando Iván llegó', 'Cuando llegó Iván serían las diez', 'Cuando Iván llegó serían las diez'], en: 'It must have been about ten when Iván arrived.' },
            { tiles: ['El', 'piso', 'será', 'pequeño,', 'pero', 'tiene', 'mucha', 'luz'], accept: ['El piso será pequeño, pero tiene mucha luz'], en: 'The flat may be small, but it gets a lot of light.' },
          ] },
        ] },
        { title: 'Reformula · Rephrase', blocks: [
          { kind: 'rewrite', title: 'Del adverbio al verbo · From adverb to verb', items: [
            { prompt: 'Probablemente Iván está en el metro.', instruction: 'La misma suposición, sin adverbio: usa el futuro.', accept: ['Iván estará en el metro', 'Estará en el metro'] },
            { prompt: 'Seguramente la abuela tenía veinte años en esta foto.', instruction: 'Sin adverbio: usa el condicional.', accept: ['La abuela tendría veinte años en esta foto', 'En esta foto la abuela tendría veinte años'] },
            { prompt: 'Supongo que el vecino ya se ha ido.', instruction: 'Sin «supongo que»: usa el futuro compuesto.', accept: ['El vecino ya se habrá ido', 'Ya se habrá ido el vecino', 'El vecino se habrá ido ya'] },
            { prompt: 'Es verdad que el armario es antiguo, pero cabe todo.', instruction: 'Concede con el futuro. Empieza con «El armario…».', accept: ['El armario será antiguo, pero cabe todo'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno explica con tres suposiciones por qué un amigo no ha contestado a su último mensaje.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Lo que recuerda la vecina', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Un audio de Héctor · A voice message from Héctor', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada suposición y dice si es sobre ahora, sobre lo que acaba de pasar o sobre el pasado. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada suposición y su momento. Vas a oír «no lo podía ni ver» (couldn’t stand him). (Listen once for the gist and once for details.)' } },
          { kind: 'listen', title: 'Un audio de Héctor', channel: 'MENSAJE DE VOZ · DE HÉCTOR PARA CLARA', src: '/audio/grammar-live/461.mp3',
            before: 'El lunes, Héctor habla con doña Rosario, una vecina mayor del edificio, y le manda un audio a Clara. ¿Qué crees que recuerda la vecina del chico de la foto? (On Monday Héctor talks to an elderly neighbour. What do you think she remembers?)',
            gist: { prompt: '¿Para qué manda Héctor el audio? · Why does Héctor send the message?', options: ['Para contar lo que recuerda la vecina sobre el cartero y la abuela.', 'Para decir que ha encontrado la foto de la boda.', 'Para cancelar la visita del domingo.'], answer: 0, why: 'Resume lo que le contó doña Rosario y propone preguntar a la abuela.', en: 'He passes on what the neighbour remembers and suggests asking grandma.' },
            details: [
              { prompt: '¿Quién era el chico de la foto, según la vecina?', options: ['Un primo de la abuela.', 'Ramón, el cartero del barrio.', 'Julio, el abuelo.'], answer: 1, why: '«Se llamaba Ramón y repartía el correo en todo el barrio».', en: 'Who was the young man, according to the neighbour?' },
              { prompt: '¿Qué edad tendría la abuela entonces?', options: ['Unos quince años.', 'Unos diecinueve años.', 'Unos treinta años.'], answer: 1, why: '«La abuela tendría unos diecinueve años».', en: 'How old would grandma have been then?' },
              { prompt: '¿Por qué no le gustaba Ramón al padre de la abuela?', options: ['Porque era antipático.', 'Porque vivía lejos.', 'Porque un cartero no le parecía suficiente para su hija.'], answer: 2, why: '«Sería muy simpático, pero para el padre de la abuela un cartero no era suficiente».', en: 'Why didn’t grandma’s father like Ramón?' },
              { prompt: '¿Dónde está la foto de la boda que tiene Rosario?', options: ['En el piso de la abuela.', 'No lo sabe; Héctor supone que la guardó su hija.', 'En el puerto.'], answer: 1, why: '«No la encuentra; la habrá guardado su hija»: es una suposición.', en: 'Where is Rosario’s wedding photo?' },
            ],
            transcript: 'Clara, soy Héctor. Te dejo un audio porque [[estarás|blue]] todavía en el trabajo. Acabo de hablar con doña Rosario, la vecina del tercero, y se acuerda perfectamente del chico de la foto: se llamaba Ramón y repartía el correo en todo el barrio. Según ella, aquello [[sería|orange]] hacia el año sesenta, así que la abuela [[tendría|orange]] unos diecinueve años. Por lo visto, Ramón era un encanto. [[Sería muy simpático|violet]], pero para el padre de la abuela un cartero no era suficiente, y no lo podía ni ver. Al final lo trasladaron al puerto, y de ahí [[vendrán|blue]] todas esas cartas. Lo que Rosario no sabe es por qué lo dejaron. ¿Qué [[pasaría|orange]]? A lo mejor la familia la presionó, o a lo mejor él conoció a otra persona allí. Ah, y Rosario tiene una foto de la boda de los abuelos, pero no la encuentra; la [[habrá guardado|teal]] su hija. El sábado vamos a ver a la abuela y se lo preguntamos con mucho tacto, ¿te parece? Un beso.',
            reply: { teacher: 'Tú eres Clara y le devuelves el audio a Héctor. Tu alumno es Héctor y responde a tus preguntas («¿Por qué lo dejarían?») con dos suposiciones distintas.', self: 'Responde a Héctor en voz alta como Clara: haz dos preguntas en el aire sobre Ramón y propón dos explicaciones con condicional. (Reply to Héctor aloud as Clara.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hacer de detective', coach: 'Supón, pregúntate, concede. Guess, wonder, concede.',
      steps: [
        { title: 'Suposiciones de cada día · Everyday guesses', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con suposiciones. Si usa un tiempo que no corresponde al momento, tú repites la frase corregida y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta. En cada respuesta usa al menos dos formas distintas de suponer. (Use at least two different ways of guessing in each answer.)' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en una foto antigua de tu familia. ¿Qué año sería? ¿Qué edad tendrían? · Think of an old family photo: what year would it be?', followUps: ['¿Dónde estarían?', '¿Quién haría la foto?', '¿Qué estarían celebrando?'], phrases: ['[[Sería|orange]] hacia el año…', '[[Tendría|orange]] unos… años.', 'La foto la [[haría|orange]]…'], hint: 'Es el pasado: condicional para suponer (sería, tendría, estarían).', example: 'Es una foto de mis padres en la playa. Sería hacia 1985, porque mi madre todavía no llevaba gafas. Ella tendría unos veinticinco años. La foto la haría mi tía, que siempre llevaba la cámara.', next: 'Ahora, el presente.' },
            { q: 'Un amigo iba a llegar hace media hora y no contesta. ¿Qué estará pasando? · A friend is half an hour late and not answering.', followUps: ['¿Te preocupas o esperas tranquilo?', '¿Qué haces si pasa una hora?'], phrases: ['[[Estará|blue]] en…', 'Se [[habrá quedado|teal]] sin…', '[[Debe de estar|blue]]…'], hint: 'Combina el futuro (ahora) y el futuro compuesto (lo que acaba de pasar).', example: 'Estará en el metro, sin cobertura. O se habrá quedado dormido después de comer: le pasa a menudo. Debe de estar corriendo hacia aquí.' },
            { q: 'En tu calle ha pasado algo raro: hay una ambulancia, una patrulla de policía o mucha gente en una puerta. ¿Qué habrá pasado? · Something odd is happening on your street.', followUps: ['¿Preguntarías a alguien?', '¿Qué es lo más probable?'], phrases: ['¿Qué [[habrá pasado|teal]]?', '[[A lo mejor|blue]]…', '[[Puede que|blue]] + subjuntivo…'], hint: 'Pregúntate en voz alta y propón al menos dos explicaciones.', example: '¿Qué habrá pasado? Será una mudanza, porque hay muchas cajas en la acera. Puede que el vecino del primero se haya ido por fin a vivir con su hija.', next: 'Ahora, recuerdos.' },
            { q: 'Cuenta un recuerdo de infancia del que no estás seguro: ¿cuántos años tendrías? · Tell a childhood memory you’re not sure about.', followUps: ['¿Dónde ocurrió?', '¿Quién estaría contigo?'], phrases: ['[[Tendría|orange]] unos… años.', '[[Serían|orange]] las…', '[[Debía de ser|orange]]…'], hint: 'Los hechos en indefinido o imperfecto; lo que no recuerdas bien, en condicional.', example: 'Una vez me separé de mi madre en un mercado. Tendría unos cinco años. Sería por la mañana, porque había mucha gente comprando fruta. Ella estaría pagando y yo me fui detrás de un perro.' },
            { q: 'Defiende a alguien a quien critican: concede lo negativo y destaca lo positivo. · Defend someone: concede the criticism, then praise them.', followUps: ['¿Y de joven, cómo era?', '¿Qué es lo más importante para ti en una persona?'], phrases: ['[[Será|violet]] un poco…, pero…', '[[Tendrá|violet]] sus defectos, pero…', '[[Sería|violet]]…, pero…'], hint: 'Futuro concesivo + pero: aceptas la crítica y la contrarrestas.', example: 'Mi jefe será un poco seco, pero es el más justo de la oficina. De joven sería muy impaciente, pero ahora escucha a todo el mundo.', teacher: 'Tú criticas a un personaje famoso inventado o a un conocido común. Tu alumno concede cada crítica con «será…, pero…».' },
            { q: 'Eres Clara. Vas a ver a la abuela y le preguntas por Ramón con tacto. · You are Clara: ask grandma about Ramón tactfully.', followUps: ['¿Y si la abuela no quiere hablar?', '¿Qué le dirías al final?'], phrases: ['Abuela, ¿quién [[sería|orange]]…?', 'Usted [[tendría|orange]] unos… años, ¿no?', '[[Sería|violet]]… , pero…'], hint: 'Haz preguntas suaves con condicional. En el ejemplo, Clara trata de usted a su abuela, como se hace en algunas familias.', example: 'Abuela, encontramos una foto suya con un chico de uniforme. Usted tendría unos diecinueve años, ¿no? ¿Quién sería ese chico? Sería muy serio, pero usted sale sonriendo.', teacher: 'Tú haces de abuela Amparo y respondes con pocas palabras al principio. Tu alumno insiste con suavidad y con nuevas suposiciones.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún error a propósito («Serán las diez cuando llegué»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas con otra situación. (Now ask the questions aloud and answer with a different situation.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: '¿Alguien reconoce esta foto?', coach: 'Describe, supón y pregunta. Describe, guess and ask.',
      steps: [
        { title: 'Una publicación en un grupo · A post in a local group', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada suposición: ¿ahora, acaba de pasar o en el pasado? Después tu alumno lee la publicación en voz alta.', self: 'Escribe tu publicación y toca «Revisar mi texto». Después repasa cada suposición: ¿el tiempo corresponde al momento? (Check that each guess uses the right tense.)' } },
          { kind: 'write', title: 'Ayuda con una foto antigua · Help with an old photo', situation: 'Eres Clara (o eres tú, con una foto o un objeto antiguo de tu familia). Escribes en un grupo de historia del barrio para pedir ayuda: describes la foto, explicas lo que supones y preguntas si alguien sabe algo. (Write a post in a local history group: describe an old photo, share your guesses and ask for help.)', task: [
            'Describe la foto y lo que sabes con seguridad (presente, indefinido, imperfecto).',
            'Haz al menos tres suposiciones sobre el pasado con condicional (sería, tendría, estarían…).',
            'Añade una suposición sobre el presente o lo que acaba de pasar (estará, habrá guardado…).',
            'Incluye una pregunta en el aire («¿Quién sería…?») y una concesión con «sería / será…, pero…».',
            'Termina pidiendo ayuda con educación.',
          ], starters: ['Hola a todos:', 'Vaciando el piso de mi abuela, encontré…', 'En la foto se ve…', 'Sería hacia…', 'Tendría unos… años.', '¿Quién sería…?', 'Será…, pero…', 'Si alguien sabe algo, …'],
            words: ['sería', 'tendría', 'estaría', 'habría', 'estará', 'habrá guardado', 'debía de', 'a lo mejor', 'puede que', 'pero'],
            model: 'Hola a todos: Vaciando el piso de mi abuela, en la calle del Olmo, encontré una foto que me tiene intrigada. Se ve a mi abuela Amparo, muy joven, delante de la antigua oficina de correos, con un chico vestido de cartero. Ella nació en 1941 y aquí [[tendría|orange]] unos diecinueve años, así que la foto [[sería|orange]] de hacia 1960. Por detrás solo pone «Para Amparo, con cariño. R.». ¿Quién [[sería|orange]] ese chico? Una vecina dice que se llamaba Ramón y que lo trasladaron al puerto, desde donde le escribía. [[Sería muy serio|violet]], pero en la foto mi abuela sale feliz. Las cartas [[se escribirían|orange]] durante años, porque hay más de cuarenta. Alguno de ustedes [[tendrá|blue]] fotos de la oficina de correos de aquella época, o a lo mejor sus padres conocían a Ramón. Si alguien sabe algo, le agradecería mucho que me escribiera. ¡Gracias!',
            minWords: 120,
            checks: [
              { label: 'Una suposición sobre el pasado en condicional (sería, tendría, estaría, habría…)', pattern: '(?<!\\p{L})(?:sería|serían|tendría|tendrían|estaría|estarían|habría|harían|haría|vivirían|viviría|trabajaría|trabajarían|se escribirían|conocerían|conocería)(?!\\p{L})', tip: 'Supón sobre la foto: «Tendría unos veinte años», «Sería hacia 1960».' },
              { label: 'Una pregunta en el aire con futuro o condicional', pattern: '¿[^?]*\\p{L}+(?:rá|rán|ría|rían)(?!\\p{L})[^?]*\\?', tip: 'Pregúntate algo en voz alta: «¿Quién sería ese chico?», «¿Dónde estará ahora?».' },
              { label: 'Una concesión con «será / sería…, pero»', pattern: '(?<!\\p{L})(?:será|sería|tendrá|tendría|estará|estaría)\\s+(?:\\p{L}+\\s+){0,3}?\\p{L}+,?\\s+pero(?!\\p{L})', tip: 'Concede y opón otra idea: «Sería muy serio, pero en la foto ella sale feliz».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})a\\s+lo\\s+mejor\\s+(?:\\p{L}+\\s+){0,2}?(?:esté|estén|sea|sean|tenga|tengan|haya|hayan|fuera|fueran|tuviera|tuvieran)(?!\\p{L})', why: '**A lo mejor** va con indicativo: «a lo mejor sus padres **conocían** a Ramón».' },
              { pattern: '(?<!\\p{L})puede\\s+que\\s+(?:\\p{L}+\\s+)?(?:está|están|es|son|tiene|tienen|era|eran|tenía|tenían|estaba|estaban)(?!\\p{L})', why: '**Puede que** pide subjuntivo: «puede que **tenga**», «puede que **estuviera**».' },
              { pattern: '(?<!\\p{L})(?:serán|será)\\s+las\\s+\\p{L}+\\s+cuando\\s+\\p{L}+(?:ó|ió|aron|ieron)(?!\\p{L})', why: 'Para una hora del pasado usa el condicional: «**serían** las ocho cuando llegó».' },
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
            { tone: 'blue', label: 'AHORA', formula: 'futuro simple = probablemente + presente', example: 'Serán las siete. Iván estará en el metro.', caption: 'también en preguntas: ¿dónde estará?', en: 'a guess about the present; in questions, wondering' },
            { tone: 'teal', label: 'ACABA DE PASAR', formula: 'habrá + participio = probablemente ha + participio', example: 'No contesta: habrá apagado el teléfono.', caption: 'explica algo que ves ahora', en: 'a guess about something that has just happened and explains the present' },
            { tone: 'orange', label: 'EN EL PASADO', formula: 'condicional = probablemente + imperfecto / indefinido', example: 'Serían las diez cuando llegó. Tendría veinte años.', caption: 'horas, edades, cantidades, explicaciones', en: 'a guess about a past moment; habría + participle for something earlier still (C1)' },
            { tone: 'violet', label: 'CONCESIÓN', formula: 'será / sería + cualidad, pero…', example: 'Sería muy guapo, pero tenía cara de serio.', caption: 'aceptas algo para destacar lo contrario', en: 'you accept a point in order to stress the opposite: no real doubt' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Piensa en la frase que dirías **si lo supieras** y mueve el verbo un tiempo hacia delante: está → **estará**; ha salido → **habrá salido**; estaba / salió → **estaría / saldría**. Si prefieres no usar el verbo, tienes **debe de**, **a lo mejor** + indicativo y **puede que** + subjuntivo.', en: 'Think of the sentence you would say if you knew, and move the verb one tense forward. If you’d rather not change the verb, use “debe de”, “a lo mejor” + indicative or “puede que” + subjunctive.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { context: 'Suena el teléfono a las once de la noche.', prompt: '¿Quién ___ a estas horas?', options: ['sería', 'sea', 'será'], answer: 2, why: 'Pregunta en el aire sobre el presente: futuro.', en: 'Who can that be at this time of night?' },
            { prompt: 'El museo estaba cerrado cuando llegamos; ___ las seis pasadas.', options: ['sean', 'serán', 'serían'], answer: 2, why: 'Una hora del pasado («llegamos»): condicional.', en: 'The museum was closed when we arrived; it must have been past six.' },
            { context: 'El jardín está mojado y no ha llovido.', prompt: 'El vecino ___ las plantas.', options: ['regará', 'habrá regado', 'habría regado'], answer: 1, why: 'Algo que acaba de pasar y explica lo que ves: habrá regado.', en: 'The neighbour must have watered the plants.' },
            { prompt: 'Este restaurante ___ caro, pero se come de maravilla.', options: ['fuera', 'será', 'sea'], answer: 1, why: 'Concesión sobre el presente: será…, pero…', en: 'This restaurant may be expensive, but the food is wonderful.' },
            { prompt: 'Puede que la reunión ___ más tarde de lo previsto.', options: ['empiece', 'empieza', 'empezará'], answer: 0, why: '«Puede que» pide subjuntivo.', en: 'The meeting may start later than planned.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en la oficina. Now, at the office.', blocks: [
          { kind: 'lead', text: 'Lunes por la mañana en una oficina. Nadia encuentra cosas raras en su mesa e intenta explicarlas. Transforma sus frases.', en: 'Monday morning at an office. Nadia finds strange things on her desk and tries to explain them. Transform her sentences.' },
          { kind: 'rewrite', title: 'El misterio de la mesa de Nadia · The mystery of Nadia’s desk', items: [
            { prompt: 'Probablemente alguien ha usado mi ordenador.', instruction: 'Sin «probablemente»: usa el futuro compuesto. Empieza con «Alguien…».', accept: ['Alguien habrá usado mi ordenador'] },
            { prompt: 'Seguramente eran las ocho cuando me fui el viernes.', instruction: 'Sin «seguramente»: usa el condicional.', accept: ['Serían las ocho cuando me fui el viernes', 'El viernes serían las ocho cuando me fui'] },
            { prompt: 'Es verdad que mi compañero es despistado, pero no toca mis cosas.', instruction: 'Concede con el futuro. Empieza con «Mi compañero…».', accept: ['Mi compañero será despistado, pero no toca mis cosas'] },
          ] },
        ] },
        { title: 'Ampliación · Habría salido y ¡será posible! · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **Habría + participio** supone algo anterior a otro momento pasado: «Cuando Ramón volvió del puerto, la abuela ya **habría conocido** al abuelo» = probablemente ya lo había conocido. Lo trabajarás a fondo en C1. Y una exclamación muy frecuente: **¡Será posible!** no supone nada; expresa enfado o sorpresa ante algo que molesta.', en: 'For strong students or spare time. “Habría + past participle” is a guess about something earlier than another past moment: “she would already have met grandpa” = she had probably already met him. You will study it in depth at C1. And a very common exclamation: “¡Será posible!” is not a guess; it shows annoyance or disbelief.' },
          { kind: 'choice', title: 'Reconocer · Recognise', items: [
            { prompt: '«Cuando llegamos al andén, el tren ya habría salido». ¿Qué significa?', options: ['Si hubiéramos llegado, el tren habría salido.', 'Probablemente el tren ya había salido cuando llegamos.', 'El tren saldrá antes de que lleguemos.'], answer: 1, why: 'Condicional compuesto de probabilidad = probablemente + pluscuamperfecto.', en: 'What does it mean?' },
            { prompt: '«¡Otra vez la música a todo volumen! ¡Será posible!». ¿Qué expresa?', options: ['Una suposición: quizás es posible.', 'Una predicción para mañana.', 'Enfado: el hablante no puede creer que vuelva a pasar.'], answer: 2, why: '«¡Será posible!» es una exclamación de enfado o incredulidad, no una conjetura.', en: 'What does it express?' },
            { prompt: '¿Qué frase supone algo anterior a otro momento pasado?', options: ['Ya habrá cerrado la tienda.', 'Ya cerraría la tienda.', 'Ya habría cerrado la tienda cuando llegó.'], answer: 2, why: 'Habría + participio, con «cuando llegó» como punto pasado: probablemente ya había cerrado.', en: 'Which sentence is a guess about something earlier than another past moment?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno cuenta una llegada tarde a algún sitio con «cuando llegué, ya habría…» y una queja con «¡será posible!».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 162 · Nominalización y grupos nominales complejos', text: 'Ya sabes suponer, preguntarte y conceder moviendo el verbo: «serían las ocho», «habrá salido», «será antiguo, pero…». En la clase 162 cambias de herramienta: en lugar del verbo, trabajas el **nombre**. Aprendes a condensar ideas en grupos nominales («la llegada tardía de Iván», «el hallazgo de las cartas»), algo clave en textos de nivel B2 como informes, noticias o la publicación que acabas de escribir.', en: 'You can now guess, wonder and concede by shifting the verb: “serían las ocho”, “habrá salido”, “será antiguo, pero…”. In class 162 you switch tools: instead of the verb, you work on the noun. You learn to pack ideas into noun phrases (“Iván’s late arrival”, “the discovery of the letters”), a key skill in B2 texts such as reports, news items or the post you have just written.', href: '/precision-grupo-nominal-adjetival', label: 'Ir a la clase 162' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “serán las ocho” y “serían las ocho”?». Respuesta esperada: la primera supone la hora de ahora; la segunda, la hora de un momento pasado. Tarea: la publicación de Escribir con una foto real de su familia.' },
        ] },
      ],
    },
  ],
};
