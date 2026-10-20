import type { LiveLesson } from '../types';

/**
 * Lesson 491 · C1 · Atenuación: en cierto modo, hasta cierto punto (course unit G191).
 * Builds on G164 (lesson 464: polite requests, conditional and imperfect of courtesy)
 * and G173 (lesson 473: certainty scale and evidentiality) without repeating request
 * formulas or the certainty scale. C1 step: softening OPINIONS and CRITICISM so that the
 * message stays and the relationship is protected. Four tools: (1) limit the claim:
 * hasta cierto punto, en cierta medida, en parte (extent), en cierto modo, de alguna
 * manera (manner), por así decirlo, digamos (word choice); (2) lower the force:
 * un poco / algo + negative adjective, diminutives, and the meaning gap «un poco caro»
 * vs «poco caro»; litotes (no está mal, no es muy claro, no es del todo adecuado, no es
 * precisamente barato, no es que + subj., pero…); (3) distance yourself: se diría que,
 * parece que, da la impresión de que, uno tiene la sensación de que; conditional and
 * imperfect of modesty (yo diría que, quería comentarte); a lo mejor me equivoco, pero…;
 * no sé si + ind.; igual + ind. (colloquial, very common in Spain); (4) seek agreement and
 * concede: ¿no?, ¿verdad?, tienes razón en parte, pero… Contrast: the right dose vs
 * over-hedging (the message gets lost). Ampliación: academic hedging (cabría pensar que,
 * podría decirse que) and capaz que (Río de la Plata and other American areas).
 * Scene: Estudio Brisa, a small design studio in Valencia. Irene Vidal, the creative lead,
 * gives feedback to the junior designer Óscar Molina on his website proposal for the
 * Hotel rural La Encina, owned by Carmen Rubio. Escuchar: Carmen's voice message to Óscar
 * (es-ES-ElviraNeural). Escribir: Irene's feedback email to the copywriter Nuria Paredes.
 */
export const lesson: LiveLesson = {
  id: 491,
  level: 'C1',
  title: 'Atenuación: en cierto modo, hasta cierto punto',
  subtitle: 'Dar una opinión crítica sin herir: acotar, rebajar y distanciarte lo justo para que el mensaje llegue y la relación no se resienta.',
  legend: [
    { tone: 'blue', label: 'ACOTAR · hasta cierto punto, en cierta medida, en cierto modo, digamos (limit the claim)' },
    { tone: 'teal', label: 'REBAJAR · un poco, algo, un poquito, no está mal, no es que + subj. (lower the force)' },
    { tone: 'violet', label: 'DISTANCIARSE · yo diría que, da la impresión de que, quería comentarte, igual (step back)' },
    { tone: 'orange', label: 'BUSCAR ACUERDO · ¿no?, ¿verdad?, tienes razón en parte, pero… (invite agreement)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Decirlo todo, pero con cuidado', coach: 'El mismo mensaje, otra fuerza. Same message, different force.',
      steps: [
        { title: 'Una crítica, dos versiones · One criticism, two versions', blocks: [
          { kind: 'lead', text: 'Lunes por la mañana en Estudio Brisa, un pequeño estudio de diseño de Valencia. Óscar Molina, diseñador júnior, ha preparado la propuesta de web para el Hotel rural La Encina. Irene Vidal, la directora creativa, tiene que decirle que hay cosas que no funcionan. Puede decirlo **a bocajarro** o puede **atenuarlo**: el contenido es el mismo, pero la fuerza y el efecto en la relación cambian mucho.', en: 'Monday morning at a small design studio in Valencia. A junior designer has prepared a website proposal for a rural hotel, and the creative lead has to tell him that some things don’t work. She can say it bluntly or soften it: the content stays the same, but the force of the criticism and its effect on the working relationship change a great deal.' },
          { kind: 'guide', text: { teacher: 'Tú lees la versión directa y tu alumno lee la atenuada. Después dice qué palabras de la segunda versión rebajan la crítica.', self: 'Lee las dos versiones en voz alta y subraya mentalmente qué palabras de la segunda rebajan la crítica. (Which words soften the second version?)' } },
          { kind: 'compare', title: 'El mismo mensaje · The same message', columns: [
            { tone: 'neutral', label: 'DIRECTA', sentence: 'La portada está cargada y los textos son malos.', idea: 'Clara, pero Óscar puede sentirse atacado y ponerse a la defensiva.', en: 'Clear, but it sounds like a verdict on the person. In a Spanish-speaking workplace this can come across as harsh, even between colleagues who trust each other.' },
            { tone: 'violet', label: 'ATENUADA', sentence: '[[Yo diría que|violet]] la portada está [[un poco|teal]] cargada, [[¿no?|orange]] Y los textos, [[no es que estén mal|teal]], pero [[en cierto modo|blue]] suenan a cualquier hotel.', idea: 'Dice lo mismo: la portada y los textos deben cambiar. Pero deja espacio para responder.', en: 'It still says that the home page and the copy need changing, so nothing is hidden. The softeners present it as a tentative view and leave room for the other person to reply.' },
          ] },
          { kind: 'concept', tone: 'blue', label: 'QUÉ ES ATENUAR', question: '¿Quieres decir algo que puede molestar sin renunciar a decirlo?', en: 'Hedging (atenuación) lowers the force of what you say, not its content. Speakers use it to protect the other person’s face and their own: if the opinion turns out to be wrong or unwelcome, it was only a tentative view. There are four families of tools: limit the claim, lower the force of the words, step back as a speaker, and invite agreement.', formula: ['ACOTAR: solo es verdad hasta cierto punto', 'REBAJAR: un poco, algo, no está mal, no es que…', 'DISTANCIARSE: yo diría que, da la impresión de que', 'BUSCAR ACUERDO: ¿no?, tienes razón en parte, pero…'],
            meaning: 'Atenuar es **rebajar la fuerza** de lo que dices, **no cambiar el mensaje**. Sirve para proteger la imagen del otro (y la tuya) cuando opinas, criticas o discrepas.',
            examples: [
              { es: '[[Hasta cierto punto|blue]], la propuesta es viable.', en: 'Up to a point, the proposal is workable (but not completely).' },
              { es: 'El vídeo de la portada es [[algo|teal]] lento.', en: 'The home-page video is a bit slow.' },
              { es: '[[Da la impresión de que|violet]] el menú tiene demasiadas opciones.', en: 'It looks as if the menu has too many options.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Yo diría que el logo es un poco pequeño, ¿no?». ¿Qué piensa realmente Irene?', options: ['Que el logo debería ser más grande.', 'Que no tiene ninguna opinión sobre el logo.', 'Que el logo es perfecto.'], answer: 0, why: 'Atenuar no cambia el mensaje: Irene cree que el logo es pequeño y quiere que cambie. Solo rebaja la fuerza de la crítica.', en: 'What does Irene actually think? Hedging changes the force, not the message.' },
            { prompt: '¿Para qué sirve sobre todo la atenuación?', options: ['Para no decir nada concreto.', 'Para parecer más culto.', 'Para decir algo delicado protegiendo la relación.'], answer: 2, why: 'La atenuación permite criticar o discrepar sin dañar la imagen del otro ni la propia.', en: 'What is hedging mainly for?' },
          ] },
        ] },
        { title: 'Acotar lo que dices · Limit the claim', mascot: '/brand/mascot/studying.webp', coach: 'Verdad, pero no del todo. True, but only partly.', blocks: [
          { kind: 'table', title: 'Tres cosas que puedes acotar · Three things you can limit', head: ['Qué acotas', 'Expresiones', 'Ejemplo'], rows: [
            ['**El alcance** · how far it is true', 'hasta cierto punto · en cierta medida · en parte', '[[En cierta medida|blue]], la propuesta es viable.'],
            ['**La manera** · in a way', 'en cierto modo · de alguna manera · de algún modo', '[[En cierto modo|blue]], la web es un folleto en pantalla.'],
            ['**La palabra** · so to speak', 'por así decirlo · digamos · si se quiere', 'Los textos son, [[digamos|blue]], demasiado comerciales.'],
          ], note: 'Van al principio con coma, entre comas o al final: «La idea es buena, **hasta cierto punto**». **Sin artículo**: «hasta cierto punto», «en cierta medida», nunca *«hasta un cierto punto». «En parte» puede ir sin comas delante del verbo: «**En parte** tienes razón».' },
          { kind: 'tip', icon: '💡', title: 'Lo que se calla también comunica · What goes unsaid also counts', text: 'Si dices «**Hasta cierto punto**, la portada funciona», el otro entiende enseguida la segunda parte: «…pero tiene problemas». Por eso estas expresiones suelen ir seguidas de **pero**, **aunque** o **ahora bien**. Con **digamos** y **por así decirlo**, en cambio, no limitas la verdad de la idea, sino la **palabra** elegida: avisas de que no es exacta o de que es algo fuerte.', en: 'Saying “up to a point, the home page works” makes the listener hear the unspoken “…but it has problems”, which is why these phrases are usually followed by “pero”, “aunque” or “ahora bien”. “Digamos” and “por así decirlo” work differently: they hedge the word you chose, flagging it as approximate or a little strong, not the truth of the idea.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Los colores son, digamos, atrevidos». ¿Qué atenúa «digamos»?', options: ['La elección de la palabra «atrevidos».', 'La probabilidad de que sean atrevidos.', 'La fuente de la información.'], answer: 0, why: '«Digamos» marca la palabra como aproximada o suavizada: quizá Irene piensa algo más fuerte, como «chillones».', en: '“Digamos” flags the word choice, perhaps a polite way of saying “garish”.' },
            { prompt: 'Óscar: «Las fotos grandes venden». Irene está solo parcialmente de acuerdo. ¿Qué dice?', options: ['Sin duda, las fotos grandes venden.', 'En parte es verdad, pero también ralentizan la página.', 'Por así decirlo, las fotos grandes venden.'], answer: 1, why: '«En parte» acota el alcance de la afirmación y el «pero» introduce la reserva.', en: 'Irene only partly agrees. What does she say?' },
          ] },
        ] },
        { title: 'Rebajar la fuerza · Lower the force', mascot: '/brand/mascot/speaking.webp', coach: '«Un poco caro» no es «poco caro». Watch the article!', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CUANTIFICADORES, DIMINUTIVOS Y LÍTOTES', question: '¿Quieres que la crítica pese menos?', en: 'Three ways of making a criticism weigh less. “Un poco” and “algo” go before qualities you see as negative or excessive (a bit long, a bit slow); before positive ones they usually sound odd. Diminutives and “pequeño” shrink the problem (a small detail). Litotes says something by denying its opposite: “no está mal” (it’s good), “no es muy claro” (it’s unclear), “no es precisamente barato” (it’s expensive). “No es que + subjunctive, pero…” rejects a harsh reading before stating the real reservation.', formula: ['un poco / algo + adjetivo negativo: un poco cargado, algo lento', 'diminutivo o «pequeño»: un poquito, un momentito, un pequeño detalle', 'lítote: no está mal · no es muy claro · no es del todo adecuado · no es precisamente barato', 'no es que + subjuntivo, pero…: No es que sea feo, pero…'],
            meaning: 'Reduces el tamaño del problema o lo dices **negando lo contrario**. «Un poco» y «algo» acompañan sobre todo a cualidades **negativas o excesivas**; con adjetivos positivos suenan raros o irónicos («un poco bonito»): para un elogio moderado se usa «bastante bonito».',
            examples: [
              { es: 'El menú es [[un poco|teal]] largo y la tipografía, [[algo|teal]] pequeña.', en: 'The menu is a bit long and the font slightly small.' },
              { es: 'Solo hay [[un pequeño detalle|teal]]: falta el teléfono de reservas.', en: 'There’s just one small thing: the booking phone number is missing.' },
              { es: 'El nuevo logo [[no está nada mal|teal]].', en: 'The new logo is actually rather good (lit. not bad at all).' },
              { es: '[[No es que|teal]] la idea **sea** mala, pero llega tarde.', en: 'It’s not that the idea is bad, but it comes too late.' },
            ] },
          { kind: 'compare', title: 'Con artículo o sin artículo · With or without “un”', columns: [
            { tone: 'teal', label: 'UN POCO CARO', sentence: 'El hotel es [[un poco|teal]] caro.', idea: 'Es caro, dicho con suavidad.', en: '“A bit expensive”: a softened criticism. The price is too high.' },
            { tone: 'neutral', label: 'POCO CARO', sentence: 'El hotel es poco caro.', idea: 'No es caro: el precio es razonable.', en: '“Not very expensive”: “poco” without the article negates the quality. It is a positive comment.' },
            { tone: 'teal', label: 'LÍTOTE', sentence: 'El hotel [[no es precisamente barato|teal]].', idea: 'Es caro, dicho con ironía suave.', en: '“It isn’t exactly cheap”: it is expensive, said with gentle irony.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Carmen está contenta con el presupuesto: «Para todo lo que incluye, el rediseño es ___ caro».', options: ['algo', 'un poco', 'poco'], answer: 2, why: 'Carmen está contenta: «poco caro» = no es caro. «Un poco caro» y «algo caro» serían una queja suavizada.', en: 'Carmen is happy with the quote: the redesign is not expensive for what it includes.' },
            { prompt: '¿Qué quiere decir «No es que la web sea lenta, pero las fotos tardan en cargar»?', options: ['Que la web es rapidísima.', 'Que no quiere llamar lenta a la web, aunque hay un problema real de carga.', 'Que no sabe si la web es lenta.'], answer: 1, why: '«No es que + subjuntivo» rechaza la interpretación dura y después, con «pero», aparece la crítica real.', en: 'What does “It’s not that the site is slow, but…” mean?' },
          ] },
        ] },
        { title: 'Distanciarte de tu opinión · Step back from your opinion', mascot: '/autoestudio/mascot/noting.webp', coach: 'Menos «yo afirmo», más «me da la impresión». Less verdict, more impression.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'DISTANCIA Y MODESTIA', question: '¿Quieres presentar tu crítica como una impresión, no como una sentencia?', en: 'You can step back from your own opinion in three ways. Make it impersonal: “parece que”, “se diría que”, “da la impresión de que”, “uno tiene la sensación de que” (all + indicative) present the criticism as an impression anyone could have. Use the modest conditional or imperfect: “yo diría que” (I’d say), “quería comentarte” (I wanted to mention). Or admit you might be wrong: “a lo mejor me equivoco, pero…”, “no sé si…” (I’m not sure whether), “igual” + indicative, a colloquial “maybe” very common in Spain.', formula: ['quitar el yo: parece que · se diría que · da la impresión de que · uno tiene la sensación de que + indicativo', 'modestia: yo diría que · me atrevería a decir que · quería comentarte…', 'abrir la puerta al error: a lo mejor me equivoco, pero… · no sé si + indicativo · igual + indicativo'],
            meaning: 'La crítica se presenta como **una impresión** (que cualquiera podría tener) o como **una opinión modesta**, no como un juicio sobre el otro. En la clase 173 «parece que» servía para indicar la fuente; aquí sirve sobre todo para **suavizar**.',
            examples: [
              { es: '[[Se diría que|violet]] nadie ha revisado los textos en inglés.', en: 'It looks as though nobody has checked the English copy.' },
              { es: '[[Uno tiene la sensación de que|violet]] la página no termina nunca.', en: 'You get the feeling the page never ends (“uno” = anyone, but really the speaker).' },
              { es: '[[Quería comentarte|violet]] una cosa sobre el presupuesto.', en: 'I wanted to mention something about the budget (the imperfect makes the opening less abrupt).' },
              { es: '[[No sé si|violet]] **es** buena idea cambiar el logo a estas alturas.', en: 'I’m not sure it’s a good idea to change the logo at this stage (= I think it isn’t).' },
              { es: '[[Igual|violet]] **conviene** esperar a que lo vea la clienta.', en: 'Maybe we should wait until the client has seen it (colloquial, typical of Spain).' },
            ] },
          { kind: 'tip', icon: '🌎', title: '«Igual» y el modo · “Igual” and mood', text: '**Igual** con el valor de ‘a lo mejor’ es coloquial y muy frecuente en España: «Igual **llego** tarde». Como «a lo mejor», va con **indicativo**. En un correo formal es preferible «quizá» o «tal vez». Y ojo: **no sé si** + indicativo («no sé si **funciona**») suele significar, por cortesía, ‘creo que no’.', en: '“Igual” meaning “maybe” is colloquial and very common in Spain; like “a lo mejor”, it takes the indicative. In a formal email, prefer “quizá” or “tal vez”. And note that “no sé si…” is often a polite way of saying “I don’t think so”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Igual ___ mejor quitar el vídeo de la portada.', options: ['fuera', 'sea', 'es'], answer: 2, why: '«Igual» (= a lo mejor) va con indicativo: «igual es mejor».', en: 'Maybe it’s better to remove the video from the home page.' },
            { prompt: '¿Qué frase presenta la crítica como una impresión general, no como un juicio personal?', options: ['El menú es un desastre.', 'Has hecho mal el menú.', 'Da la impresión de que el menú tiene demasiadas opciones.'], answer: 2, why: '«Da la impresión de que» quita al hablante del centro: es lo que parece, no lo que Irene sentencia.', en: 'Which sentence presents the criticism as a general impression?' },
          ] },
        ] },
        { title: 'Buscar acuerdo, y no pasarse · Invite agreement, and don’t overdo it', mascot: '/brand/mascot/seated.webp', coach: 'Ni a bocajarro ni en niebla. Neither blunt nor foggy.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'PREGUNTAS DE CONFIRMACIÓN Y CONCESIÓN', question: '¿Quieres que tu crítica suene a propuesta compartida?', en: 'A tag question turns a statement into an invitation to agree: “¿no?”, “¿verdad?”, “¿no te parece?”. A partial concession acknowledges the other person’s point before your reservation: “tienes razón en parte, pero…”, “entiendo lo que dices, pero…”, “puede que tengas razón, pero…”.', formula: ['afirmación + ¿no? / ¿verdad? / ¿no te parece?', 'tienes razón en parte, pero… · entiendo lo que dices, pero… · puede que tengas razón, pero…'],
            meaning: 'La pregunta final convierte la crítica en una **propuesta** que el otro puede aceptar. La concesión reconoce lo que el otro tiene de razón **antes** de discrepar.',
            examples: [
              { es: 'El naranja es demasiado intenso, [[¿no te parece?|orange]]', en: 'The orange is too strong, don’t you think?' },
              { es: '[[Tienes razón en parte, pero|orange]] la clienta quiere ver las habitaciones nada más entrar.', en: 'You’re partly right, but the client wants to see the rooms as soon as people land on the site.' },
            ] },
          { kind: 'compare', title: 'La dosis justa · The right dose', columns: [
            { tone: 'neutral', label: 'A BOCAJARRO', sentence: 'El presupuesto es demasiado alto.', idea: 'Clara, pero puede sonar a reproche.', en: 'Clear but abrupt: it can sound like a reproach.' },
            { tone: 'violet', label: 'DOSIS JUSTA', sentence: '[[Yo diría que|violet]] el presupuesto está [[un poco|teal]] por encima de lo previsto, [[¿no?|orange]]', idea: 'Dos o tres atenuadores: el mensaje llega entero.', en: 'Two or three softeners: polite, and the message still gets through.' },
            { tone: 'neutral', label: 'EN NIEBLA', sentence: 'Bueno, no sé, a lo mejor, digamos, en cierto modo, el presupuesto quizás es un poquito alto, ¿no?, o no sé.', idea: 'Tantos atenuadores que no se entiende qué piensas.', en: 'Over-hedging: so many softeners that nobody knows what you think. It also sounds insecure.' },
          ] },
          { kind: 'decide', title: '¿Cuánto atenúo? · How much should I soften?', steps: [
            { q: '¿Lo que dices puede molestar o afectar a la imagen del otro (crítica, desacuerdo, rechazo)?', yes: 'next', no: 'No hace falta atenuar: di la información con claridad.' },
            { q: '¿Es un dato que el otro **necesita** sí o sí (un plazo, un error grave, un no definitivo)?', yes: 'Atenúa la entrada («[[Quería comentarte|violet]] una cosa»), pero di el dato **sin rebajarlo**: «el plazo termina el viernes».', no: 'next' },
            { q: '¿Has usado ya dos o tres atenuadores en esa frase?', yes: 'Para: uno más y el mensaje se pierde en la niebla.', no: 'Elige uno o dos: acota, rebaja, distánciate o busca acuerdo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Irene necesita que Óscar entregue el viernes sin falta. ¿Qué frase es la más adecuada?', options: ['Igual, si puedes, a lo mejor podrías entregarlo el viernes, digamos, ¿no?', 'Quería comentarte una cosa: la entrega es el viernes, sin falta.', 'Entrégalo el viernes.'], answer: 1, why: 'Atenúa la entrada (imperfecto de modestia) y deja el dato claro. La primera se pierde en la niebla; la tercera es una orden seca.', en: 'Irene needs the work by Friday at the latest. Which sentence fits best?' },
            { prompt: '¿Qué frase reconoce el punto del otro antes de discrepar?', options: ['La clienta quiere otra cosa, por así decirlo.', 'No tienes razón: la clienta quiere otra cosa.', 'Entiendo lo que dices, pero la clienta quiere otra cosa.'], answer: 2, why: '«Entiendo lo que dices, pero…» es una concesión parcial: reconoce y después discrepa.', en: 'Which sentence acknowledges the other person’s point first?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Forma, modo o dosis? Form, mood or dose?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿la forma, el modo o el significado?', self: 'Lee cada frase y decide qué falla: ¿la forma, el modo o el significado? Después toca para ver la corrección. (Is it the form, the mood or the meaning?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Me gusta el piso, pero es poco caro para mi sueldo.', right: 'Me gusta el piso, pero es un poco caro para mi sueldo.', why: '«Poco caro» significa ‘barato, razonable’. Para quejarte con suavidad necesitas el artículo: «**un** poco caro».' },
            { wrong: 'No es que el diseño es feo, pero no encaja con el hotel.', right: 'No es que el diseño sea feo, pero no encaja con el hotel.', why: '«No es que» niega la interpretación y pide **subjuntivo**.' },
            { wrong: 'Hasta un cierto punto, la propuesta es viable.', right: 'Hasta cierto punto, la propuesta es viable.', why: 'Expresión fija sin artículo: «hasta cierto punto», «en cierta medida», «en cierto modo».' },
            { wrong: 'Igual tengamos que cambiar la fecha.', right: 'Igual tenemos que cambiar la fecha.', why: '«Igual» con valor de ‘a lo mejor’ va con **indicativo**, como «a lo mejor».' },
            { wrong: 'El equipo de recepción es un poco simpático.', right: 'El equipo de recepción es bastante simpático.', why: '«Un poco» acompaña a cualidades negativas o excesivas; con «simpático» suena extraño o irónico. Para un elogio moderado, «bastante».' },
            { wrong: 'Perdona, no sé, igual me equivoco, pero a lo mejor el plazo, digamos, quizás es un poquito corto, ¿no?, o no sé.', right: 'A lo mejor me equivoco, pero el plazo es un poco corto, ¿no?', why: 'No es un error de forma, sino de **dosis**: con tantos atenuadores el mensaje se pierde y el hablante parece inseguro.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No es que no me ___ la propuesta, pero necesito pensarlo.', options: ['gustará', 'gusta', 'guste'], answer: 2, why: '«No es que» pide subjuntivo: «no es que no me guste».', en: 'It’s not that I don’t like the proposal, but I need to think about it.' },
            { prompt: '¿Qué frase es correcta?', options: ['En una cierta medida, tienes razón.', 'En cierta medida, tienes razón.', 'En cierta media, tienes razón.'], answer: 1, why: 'La expresión es «en cierta medida», sin artículo. «Media» es otra palabra.', en: 'Which sentence is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno elige algo que no le gusta de su ciudad o de su trabajo y lo dice dos veces: primero a bocajarro y después con dos atenuadores de familias distintas.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reunión de los lunes', coach: 'Toca cada marca: ¿cómo suaviza Irene? Tap each mark.',
      steps: [
        { title: 'La propuesta de Óscar · Óscar’s proposal', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Irene y tu alumno es Óscar. Después tu alumno toca cada expresión marcada y dice qué hace: acotar, rebajar, distanciarse o buscar acuerdo.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y decide qué hace: acotar, rebajar, distanciarse o buscar acuerdo. (Limit, lower, step back or invite agreement?)' } },
          { kind: 'explore', title: 'Sé sincera', setting: 'Estudio Brisa, lunes a las diez. Irene revisa en la pantalla la propuesta de Óscar para la web del Hotel rural La Encina. (The creative lead reviews the junior designer’s website proposal.)', lines: [
            { who: 'Óscar', text: 'Bueno, ya la has visto. Sé sincera: ¿qué te parece?', en: 'Well, you’ve seen it. Be honest: what do you think?' },
            { who: 'Irene', text: 'Pues [[no está nada mal|teal]], de verdad: la paleta me encanta. Ahora, [[yo diría que|violet]] la portada está [[un poco|teal]] cargada.', en: 'Honestly, it’s pretty good: I love the palette. Now, I’d say the home page is a bit cluttered.' },
            { who: 'Óscar', text: '¿Cargada? Si solo tiene seis fotos…', en: 'Cluttered? It’s only got six photos…' },
            { who: 'Irene', text: 'Ya, y son preciosas. Pero [[da la impresión de que|violet]] el hotel quiere enseñarlo todo a la vez, [[¿no?|orange]] El ojo no sabe adónde ir.', en: 'I know, and they’re lovely. But it looks as if the hotel wants to show everything at once, doesn’t it? Your eye doesn’t know where to go.' },
            { who: 'Óscar', text: '[[En parte|blue]] tienes razón. Pero Carmen pidió que se vieran las habitaciones nada más entrar.', en: 'You’re partly right. But Carmen asked for the rooms to be visible as soon as you land on the site.' },
            { who: 'Irene', text: 'Y eso, [[hasta cierto punto|blue]], tiene sentido. [[A lo mejor me equivoco, pero|violet]] las habitaciones lucirían más en una segunda página.', en: 'And up to a point that makes sense. I may be wrong, but the rooms would look better on a second page.' },
            { who: 'Óscar', text: '¿Y los textos? Los escribió su hija, ¿eh?', en: 'And the copy? Her daughter wrote it, you know.' },
            { who: 'Irene', text: 'Son, [[digamos|blue]], muy de folleto: «un paraíso inolvidable», «una experiencia única»… [[No es que estén mal escritos|teal]], pero suenan a cualquier hotel.', en: 'They’re, let’s say, very brochure-like: “an unforgettable paradise”, “a unique experience”… It’s not that they’re badly written, but they could be about any hotel.' },
            { who: 'Óscar', text: '[[No sé si|violet]] Carmen va a querer cambiarlos. Les tiene mucho cariño.', en: 'I’m not sure Carmen will want to change them. She’s very attached to them.' },
            { who: 'Irene', text: 'Entonces [[igual|violet]] conviene proponérselo con tacto. [[En cierto modo|blue]], esos textos son su manera de contar el hotel.', en: 'Then maybe we should suggest it tactfully. In a way, that copy is her way of telling the hotel’s story.' },
            { who: 'Óscar', text: 'O sea, que sobran la portada y los textos.', en: 'So the home page and the copy have to go.' },
            { who: 'Irene', text: '¡No, hombre, tampoco es eso! Es un buen trabajo; solo hay que aligerarlo [[un poquito|teal]].', en: 'No, not at all! It’s good work; it just needs lightening a little.' },
          ], notes: {
            'no está nada mal': '**Lítote**: niega lo negativo para elogiar. «No está nada mal» es un elogio real, y prepara el terreno para la crítica que viene después.',
            'yo diría que': '**Condicional de modestia**: Irene presenta su crítica como una opinión prudente, no como un veredicto.',
            'un poco': '**Rebaja** el adjetivo negativo «cargada». Compárala con «poco cargada», que significaría lo contrario.',
            'da la impresión de que': '**Distancia**: la crítica se presenta como una impresión que cualquiera tendría, no como un juicio sobre Óscar. Va con indicativo (quiere).',
            '¿no?': '**Pregunta de confirmación**: convierte la crítica en una propuesta e invita a Óscar a darle la razón.',
            'En parte': '**Acota el alcance**: Óscar concede solo una parte y prepara su objeción con «pero».',
            'hasta cierto punto': '**Acota el alcance**: Irene reconoce el argumento de la clienta, pero deja entender que no del todo.',
            'A lo mejor me equivoco, pero': '**Abre la puerta al error**: fórmula de modestia antes de una propuesta que contradice a la clienta.',
            'digamos': '**Acota la palabra**: avisa de que «muy de folleto» es una forma suave (o aproximada) de decir algo más duro.',
            'No es que estén mal escritos': '**No es que + subjuntivo**: rechaza la lectura dura («están mal escritos») antes de la reserva real, introducida por «pero».',
            'No sé si': '**No sé si + indicativo**: en realidad Óscar cree que Carmen no querrá; lo dice sin afirmarlo.',
            'igual': '**Igual = a lo mejor**, coloquial y muy frecuente en España, con indicativo (conviene). En un correo formal, Irene escribiría «quizá».',
            'En cierto modo': '**Acota la manera**: los textos son, de alguna forma, la voz de Carmen. Irene muestra que entiende el valor que tienen para ella.',
            'un poquito': '**Diminutivo** que reduce el tamaño del cambio: Irene corrige la interpretación exagerada de Óscar.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué opina realmente Irene de la propuesta?', options: ['Que es buena, pero la portada y los textos necesitan cambios.', 'Que es perfecta tal como está.', 'Que hay que rehacerla entera.'], answer: 0, why: 'Elogia la paleta («no está nada mal») y pide aligerar la portada y los textos, pero aclara al final que «es un buen trabajo».', en: 'What does Irene really think of the proposal?' },
            { prompt: '¿Por qué atenúa tanto Irene al hablar de los textos?', options: ['Porque no ha leído los textos.', 'Porque los textos son de Óscar.', 'Porque los escribió la hija de la clienta y tienen valor para ella.'], answer: 2, why: 'Óscar le recuerda que los escribió la hija de Carmen; Irene reconoce que «en cierto modo» son su manera de contar el hotel.', en: 'Why is Irene so careful about the copy?' },
            { prompt: '«No sé si Carmen va a querer cambiarlos». ¿Qué piensa Óscar?', options: ['Que no tiene información sobre Carmen.', 'Que probablemente Carmen no querrá cambiarlos.', 'Que Carmen los cambiará sin problema.'], answer: 1, why: '«No sé si…» atenúa una previsión negativa: Óscar cree que Carmen se resistirá.', en: 'What does Óscar really think?' },
          ] },
        ] },
        { title: '¿Qué hace cada atenuador? · What does each softener do?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Clasifica el recurso · Classify the tool', categories: [
            { id: 'acotar', label: 'ACOTAR', tone: 'blue' },
            { id: 'rebajar', label: 'REBAJAR', tone: 'teal' },
            { id: 'distancia', label: 'DISTANCIARSE', tone: 'violet' },
            { id: 'acuerdo', label: 'BUSCAR ACUERDO', tone: 'orange' },
          ], items: [
            { text: 'En cierta medida, la idea de Carmen es buena.', answer: 'acotar', why: '«En cierta medida» limita hasta dónde es verdad la afirmación.' },
            { text: 'El formulario de reservas es algo confuso.', answer: 'rebajar', why: '«Algo» reduce la fuerza del adjetivo negativo «confuso».' },
            { text: 'Se diría que la web es de otra época.', answer: 'distancia', why: '«Se diría que» impersonaliza: la crítica parece una impresión general.' },
            { text: 'Las fotos de noche son más bonitas, ¿verdad?', answer: 'acuerdo', why: '«¿Verdad?» invita al otro a confirmar la opinión.' },
            { text: 'Los botones no son muy visibles.', answer: 'rebajar', why: 'Lítote: «no muy visibles» suena más suave que «poco visibles» o «invisibles».' },
            { text: 'Me atrevería a decir que la versión móvil es mejor.', answer: 'distancia', why: 'Condicional de modestia: la opinión se presenta con prudencia.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Cómo le dirías tú a Carmen que los textos de su hija son poco originales?». Tu alumno propone una frase con dos atenuadores y explica cuáles ha elegido.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Que el mensaje llegue entero. Keep the message intact.',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { prompt: 'El hotel está ___ lejos del pueblo, pero las vistas compensan.', options: ['un poquito de', 'poco', 'un poco'], answer: 2, why: 'El «pero» indica que la distancia es un inconveniente: crítica suavizada, «un poco lejos». «Poco lejos» diría lo contrario.', en: 'The hotel is a bit far from the village, but the views make up for it.' },
            { prompt: 'No es que el vídeo ___ feo, pero ralentiza la página.', options: ['será', 'es', 'sea'], answer: 2, why: '«No es que» pide subjuntivo.', en: 'It’s not that the video is ugly, but it slows the page down.' },
            { prompt: '___ me equivoco, pero creo que Carmen prefería el verde.', options: ['A lo mejor', 'Por lo visto', 'Sin duda'], answer: 0, why: '«A lo mejor me equivoco, pero…» abre la puerta al error. «Sin duda» refuerza; «por lo visto» indica que te lo han contado.', en: 'I may be wrong, but I think Carmen preferred the green.' },
            { prompt: '¿Cuál es la crítica más suave, sin perder el mensaje?', options: ['Este párrafo es confuso.', 'Este párrafo no es muy claro, ¿no?', 'Este párrafo es poco claro.'], answer: 1, why: 'Combina una lítote («no muy claro») y una pregunta de confirmación. «Poco claro» y «confuso» son más directos.', en: 'Which is the softest criticism that still gets the point across?' },
            { prompt: 'Óscar quiere admitir solo una parte del argumento de Irene: «Tienes razón ___, pero la clienta insiste».', options: ['parte', 'del todo', 'en parte'], answer: 2, why: '«En parte» acota el acuerdo. «Del todo» lo haría total; «parte» sin «en» no funciona aquí.', en: 'You’re partly right, but the client insists.' },
          ] },
        ] },
        { title: '¿Directa, justa o en niebla? · Blunt, balanced or foggy?', blocks: [
          { kind: 'classify', title: 'Ordena por fuerza · Sort by strength', categories: [
            { id: 'directa', label: 'A BOCAJARRO', tone: 'neutral' },
            { id: 'justa', label: 'DOSIS JUSTA', tone: 'teal' },
            { id: 'niebla', label: 'EN NIEBLA', tone: 'violet' },
          ], items: [
            { text: 'Este presupuesto es demasiado alto.', answer: 'directa', why: 'Sin ningún atenuador: clara, pero puede sonar a reproche.' },
            { text: 'Yo diría que el presupuesto está un poco por encima de lo previsto.', answer: 'justa', why: 'Dos atenuadores (modestia + «un poco»): suave y clara.' },
            { text: 'Bueno, no sé, a lo mejor, digamos, el presupuesto quizás es un poquito alto, o no sé.', answer: 'niebla', why: 'Demasiados atenuadores: no queda claro qué piensa el hablante.' },
            { text: 'Las fotos están mal.', answer: 'directa', why: 'Juicio seco, sin matices.' },
            { text: 'No es que las fotos estén mal, pero algunas se ven algo oscuras.', answer: 'justa', why: 'Una lítote y un «algo»: la crítica es concreta y amable.' },
            { text: 'Perdona, igual es una tontería, pero quizás, hasta cierto punto, el logo podría ser, por así decirlo, un poquito más grande, no sé.', answer: 'niebla', why: 'Acumula disculpas y atenuadores: el mensaje (logo más grande) casi desaparece.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Me encanta la habitación, aunque es poco cara para lo que suelo gastar.', ok: false, options: ['Me encanta la habitación, aunque es algo de cara para lo que suelo gastar.', 'Me encanta la habitación, aunque es un poco cara para lo que suelo gastar.', 'Me encanta la habitación, aunque es poca cara para lo que suelo gastar.'], answer: 1, why: '«Aunque» anuncia un inconveniente: hace falta «un poco cara». «Poco cara» significaría que es barata.' },
            { sentence: 'Hasta cierto punto, entiendo la decisión de la clienta.', ok: true, why: 'Correcta: expresión fija sin artículo que acota el alcance.' },
            { sentence: 'Igual llegue un poco tarde a la reunión con Carmen.', ok: false, options: ['Igual que llego un poco tarde a la reunión con Carmen.', 'Igual llegaría un poco tarde a la reunión con Carmen.', 'Igual llego un poco tarde a la reunión con Carmen.'], answer: 2, why: '«Igual» (= a lo mejor) va con indicativo: «igual llego». «Igual que» es una comparación.' },
            { sentence: 'No es que el texto tiene errores, pero le falta personalidad.', ok: false, options: ['No es que el texto tenga errores, pero le falta personalidad.', 'No es que el texto tendrá errores, pero le falta personalidad.', 'No es que el texto tuviera errores, pero le falta personalidad.'], answer: 0, why: '«No es que» + subjuntivo presente, porque habla del texto ahora: «tenga».' },
            { sentence: 'En una cierta medida, la propuesta es viable.', ok: false, options: ['En cierta medida, la propuesta es viable.', 'En cierta media, la propuesta es viable.', 'En la cierta medida, la propuesta es viable.'], answer: 0, why: 'Expresión fija sin artículo: «en cierta medida».' },
            { sentence: 'No sé si es buena idea enviárselo hoy a Carmen.', ok: true, why: 'Correcta: «no sé si» + indicativo; atenúa una opinión negativa (‘creo que no’).' },
          ] },
        ] },
        { title: 'El chat del estudio · The studio chat', blocks: [
          { kind: 'chat-fill', title: 'Óscar prepara su correo a Carmen · Óscar drafts his email to Carmen', lines: [
            { who: 'Óscar', text: '¿Cómo le digo a Carmen que hay que cambiar los textos? ¿«Los textos son malos»?' },
            { who: 'Irene', text: '¡Uf, no! Mejor: «___ los textos estén mal, pero podríamos hacerlos más personales».', options: ['Está claro que', 'Es que', 'No es que'], answer: 2, why: '«Estén» es subjuntivo y la frase sigue con «pero»: «No es que…». «Es que» y «está claro que» irían con indicativo y no atenúan.' },
            { who: 'Óscar', text: 'Vale. ¿Y lo del precio? Le quiero avisar de que el rediseño completo ___ barato.', options: ['no es precisamente', 'no es nada', 'es poco'], answer: 0, why: 'Lítote irónica y suave: «no es precisamente barato» = es caro. «No es nada barato» refuerza la crítica; «es poco barato» suena raro y más seco.' },
            { who: 'Irene', text: 'Bien. Y sobre la portada: «___ la portada queda algo cargada con seis fotos».', options: ['Yo diría que', 'Por lo visto', 'Sin duda'], answer: 0, why: 'Condicional de modestia: presenta la crítica como opinión prudente. «Sin duda» la refuerza; «por lo visto» indicaría que te lo han contado.' },
            { who: 'Óscar', text: 'Seguro que me dice que quiere las habitaciones en la portada. ¿Qué le contesto?' },
            { who: 'Irene', text: 'Concede primero: «Tienes razón ___, pero en una segunda página lucen más».', options: ['por así decirlo', 'en parte', 'del todo'], answer: 1, why: 'Concesión parcial antes de discrepar: «en parte». «Del todo» contradice el «pero»; «por así decirlo» acota una palabra, no el acuerdo.' },
            { who: 'Óscar', text: 'Y para cerrar, algo modesto: «___ me equivoco, pero creo que así funcionará mejor».', options: ['Igual que', 'A lo mejor', 'Seguro que'], answer: 1, why: '«A lo mejor me equivoco, pero…» es la fórmula de modestia. «Igual que» es comparativo; «seguro que» contradice la modestia.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Hasta', 'cierto', 'punto,', 'tienes', 'razón'], accept: ['Hasta cierto punto, tienes razón'], en: 'Up to a point, you’re right.' },
            { tiles: ['No', 'es', 'que', 'sea', 'caro,', 'pero', 'supera', 'el', 'presupuesto'], accept: ['No es que sea caro, pero supera el presupuesto'], en: 'It’s not that it’s expensive, but it’s over budget.' },
            { tiles: ['Yo', 'diría', 'que', 'el', 'vídeo', 'es', 'un', 'poco', 'largo'], accept: ['Yo diría que el vídeo es un poco largo'], en: 'I’d say the video is a bit long.' },
          ] },
        ] },
        { title: 'Suaviza la crítica · Soften the criticism', blocks: [
          { kind: 'rewrite', title: 'Del juicio seco a la crítica atenuada · From blunt to hedged', items: [
            { prompt: 'El informe es largo.', instruction: 'Atenúa con «Yo diría que» al principio y «un poco» delante del adjetivo.', accept: ['Yo diría que el informe es un poco largo', 'Yo diría que el informe está un poco largo'] },
            { prompt: 'Las conclusiones son malas.', instruction: 'Usa una lítote: empieza con «No es que» y termina con «pero les falta claridad».', accept: ['No es que las conclusiones sean malas, pero les falta claridad'] },
            { prompt: 'El cliente no ha entendido la propuesta.', instruction: 'Quita el juicio personal: empieza con «Da la impresión de que».', accept: ['Da la impresión de que el cliente no ha entendido la propuesta'] },
            { prompt: 'Te equivocas: el plazo es demasiado corto.', instruction: 'Cambia «Te equivocas» por una concesión parcial con «en parte… pero» y rebaja «demasiado» a «un poco».', accept: ['Tienes razón en parte, pero el plazo es un poco corto', 'En parte tienes razón, pero el plazo es un poco corto'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno da su opinión sincera sobre algo de esta clase (el diseño, el ritmo, los ejercicios) con la dosis justa: una crítica concreta y dos atenuadores.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El mensaje de Carmen', coach: 'Lo que dice y lo que quiere decir. What she says and what she means.',
      steps: [
        { title: 'Un audio de la clienta · A voice message from the client', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada crítica de Carmen y el atenuador que la acompaña. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para anotar cada crítica y su atenuador. Vas a oír «de golpe» (all at once) y «merece la pena» (it’s worth it). (Listen once for the gist, then note each criticism and how she softens it.)' } },
          { kind: 'listen', title: 'Mensaje de voz de Carmen Rubio', channel: 'MENSAJE DE VOZ · CARMEN RUBIO, HOTEL RURAL LA ENCINA', src: '/audio/grammar-live/491.mp3',
            before: 'Óscar ha enviado la propuesta a Carmen con una nota: propone pasar las habitaciones a una segunda página. ¿Crees que a Carmen le gustará todo? ¿Cómo lo dirá si no? (Will Carmen like everything? How will she say it if not?)',
            gist: { prompt: '¿Cuál es el mensaje principal de Carmen? · What is Carmen’s main message?', options: ['Rechaza la propuesta y busca otro estudio.', 'Le gusta la propuesta, pero pide con suavidad varios cambios.', 'Lo acepta todo sin comentarios.'], answer: 1, why: 'Empieza felicitando y después presenta cada crítica atenuada: portada, textos, habitaciones y precio.', en: 'She is happy overall and asks, gently, for several changes.' },
            details: [
              { prompt: '¿Qué le parece la portada?', options: ['Que está un poco cargada.', 'Que es perfecta.', 'Que está algo vacía.'], answer: 0, why: '«Yo diría que la portada está un poco cargada; da la impresión de que queremos enseñarlo todo de golpe».', en: 'What does she think of the home page?' },
              { prompt: '¿Qué propone hacer con los textos?', options: ['Conservar alguna frase de su hija y quitar las más exageradas.', 'Borrarlos todos.', 'No tocar nada.'], answer: 0, why: '«Igual podemos conservar alguna frase suya y quitar lo de “paraíso inolvidable”».', en: 'What does she suggest doing with the copy?' },
              { prompt: '¿Qué opina de pasar las habitaciones a una segunda página?', options: ['Que le da igual.', 'Que lo entiende en parte, pero prefiere verlas al entrar.', 'Que es una idea excelente.'], answer: 1, why: '«En parte lo entiendo, pero a los clientes les encanta verlas nada más entrar».', en: 'What does she think of moving the rooms to a second page?' },
              { prompt: '«El precio no es precisamente barato». ¿Qué quiere decir?', options: ['Que el precio es alto, aunque cree que merece la pena.', 'Que el precio es muy barato.', 'Que todavía no conoce el precio.'], answer: 0, why: 'Lítote: «no es precisamente barato» = es caro. Después añade: «si queda así de bien, merece la pena».', en: 'What does “the price isn’t exactly cheap” mean?' },
            ],
            transcript: 'Hola, Óscar, soy Carmen, la de La Encina. Ya he visto la propuesta y, antes que nada, enhorabuena: las fotos han quedado preciosas y el logo [[no está nada mal|teal]]. Ahora, [[quería comentarte|violet]] un par de cosillas, a ver qué te parece. [[Yo diría que|violet]] la portada está [[un poco|teal]] cargada; [[da la impresión de que|violet]] queremos enseñarlo todo de golpe, [[¿no?|orange]] Y los textos… [[no es que no me gusten|teal]], pero [[hasta cierto punto|blue]] suenan a cualquier hotel. Mi hija los escribió con mucha ilusión, así que [[igual|violet]] podemos conservar alguna frase suya y quitar lo de «paraíso inolvidable», que es, [[digamos|blue]], [[algo|teal]] exagerado. Lo de pasar las habitaciones a una segunda página… [[en parte|blue]] lo entiendo, pero a los clientes les encanta verlas nada más entrar. [[A lo mejor me equivoco|violet]], ¿eh?, que vosotros sabéis mucho más que yo de esto. Y bueno, el precio del rediseño [[no es precisamente barato|teal]], pero si queda así de bien, merece la pena. Llámame cuando puedas y lo hablamos con calma. Un abrazo.',
            reply: { teacher: 'Tú eres Carmen y repites tu crítica más dura. Tu alumno es Óscar: te contesta por teléfono, concede una parte y defiende otra con la dosis justa de atenuación.', self: 'Contesta a Carmen en voz alta como si fueras Óscar: agradece, concede algo con «en parte» y defiende una idea con «yo diría que». (Reply as Óscar: thank her, concede a point, defend another.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Opinar con tacto', coach: 'Di lo que piensas, con matices. Say what you think, with nuance.',
      steps: [
        { title: 'Críticas delicadas · Delicate criticism', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con una crítica clara y la dosis justa de atenuación. Si suena a bocajarro, tú dices «¡Ay!»; si se pierde en la niebla, tú preguntas «Entonces, ¿qué piensas de verdad?».', self: 'Lee cada situación y responde en voz alta. En cada respuesta incluye una crítica concreta y dos atenuadores de familias distintas. (One concrete criticism, two softeners from different families.)' } },
          { kind: 'talk', cards: [
            { q: 'Un compañero te enseña la presentación que hará mañana ante un cliente: dura cuarenta minutos y tiene sesenta diapositivas. ¿Qué le dices? · A colleague’s presentation is far too long. What do you say?', followUps: ['¿Qué parte quitarías?', '¿Y qué le dices de lo que sí funciona?'], phrases: ['[[No está nada mal|teal]]…', '[[Yo diría que|violet]] es [[un poco|teal]] larga…', '[[Da la impresión de que|violet]]…', '…[[¿no te parece?|orange]]'], hint: 'Empieza por lo positivo, atenúa la crítica y termina con una propuesta concreta.', example: 'La verdad es que no está nada mal: los datos son muy claros. Ahora, yo diría que es un poco larga para un cliente. Da la impresión de que quieres contarlo todo; igual podrías dejar veinte diapositivas y el resto como anexo, ¿no te parece?' },
            { q: 'Tu jefa propone trabajar todos los sábados durante un mes para terminar un proyecto. No estás de acuerdo. · Your boss suggests working every Saturday for a month.', followUps: ['¿Qué alternativa propones?', '¿Cómo reconoces lo que tiene de razón?'], phrases: ['[[Entiendo lo que dices, pero|orange]]…', '[[Hasta cierto punto|blue]]…', '[[No sé si|violet]] + indicativo…', '[[Quería comentarte|violet]]…'], hint: 'Concede primero y después discrepa con una alternativa. El desacuerdo debe quedar claro.', example: 'Entiendo lo que dices, y hasta cierto punto tiene sentido, porque el plazo es muy ajustado. Pero no sé si es la mejor solución: el equipo ya está bastante cansado. Quería comentarte otra opción: contratar a alguien durante un mes.' },
            { q: 'Un amigo te invita a cenar y te pregunta qué te parece su plato estrella. Está demasiado salado. · Your friend’s signature dish is too salty.', followUps: ['¿Le dices la verdad?', '¿Cambia tu respuesta si es un restaurante y él es el cocinero?'], phrases: ['[[No está mal|teal]]…', '[[No es que|teal]] + subjuntivo, pero…', '[[algo|teal]] / [[un poquito|teal]] salado'], hint: 'Entre amigos se atenúa mucho, pero puedes dar una pista útil.', example: 'Pues no está mal, de verdad, la salsa está buenísima. No es que esté salado, pero yo le pondría un poquito menos de sal la próxima vez. ¿Lo hiciste con caldo de pastilla?', next: 'Ahora, en una negociación.' },
            { q: 'Recibes el presupuesto de una empresa de mudanzas y te parece caro. Llamas para negociar (usted). · A moving company’s quote is too high: negotiate politely.', followUps: ['¿Qué argumento das?', '¿Qué propones?'], phrases: ['[[no es precisamente barato|teal]]', '[[Yo diría que|violet]]…', '[[en cierta medida|blue]]…', '¿Habría alguna posibilidad de…?'], hint: 'Usa una lítote para el precio y una concesión antes de proponer.', example: 'Buenos días. He visto su presupuesto y, sinceramente, no es precisamente barato. Entiendo que en cierta medida depende de los muebles, pero yo diría que está bastante por encima de otras ofertas. ¿Habría alguna posibilidad de ajustarlo un poco?', teacher: 'Tú haces de empleado de la empresa y defiendes el precio; tu alumno insiste con tacto.' },
            { q: 'Eres responsable de un equipo y un empleado entrega tarde por tercera vez. Debes decírselo con claridad, pero sin humillarlo. · Tell an employee clearly that he cannot be late again.', followUps: ['¿Qué parte del mensaje no atenúas?', '¿Cómo terminas la conversación?'], phrases: ['[[Quería comentarte|violet]] una cosa…', '[[Da la impresión de que|violet]]…', 'Lo que sí necesito es…'], hint: 'Atenúa la entrada, pero no el dato importante: la próxima entrega debe llegar a tiempo.', example: 'Quería comentarte una cosa. Da la impresión de que últimamente vas un poco desbordado, y lo entiendo. Pero lo que sí necesito es que la próxima entrega llegue el viernes, sin falta. ¿Qué te haría falta para conseguirlo?', teacher: 'Si tu alumno atenúa también el plazo («igual podrías…»), tú preguntas: «Entonces, ¿tengo que entregarlo el viernes o no?».' },
            { q: 'En tu cultura, ¿se atenúan las críticas más o menos que en español? Cuenta un malentendido. · Do people hedge more or less in your culture?', followUps: ['¿Te ha parecido alguien demasiado directo o demasiado indirecto?', '¿Qué atenuador de hoy vas a usar más?'], phrases: ['[[En cierto modo|blue]]…', '[[Uno tiene la sensación de que|violet]]…', '[[Tienes razón en parte, pero|orange]]…'], hint: 'Compara con ejemplos concretos y usa los atenuadores para matizar tus generalizaciones.', example: 'En mi país, en cierto modo, somos más directos en el trabajo. Una vez le dije a una compañera española que su informe era confuso y se ofendió. Uno tiene la sensación de que aquí hay que preparar más el terreno, aunque, hasta cierto punto, depende mucho de la persona.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú haces una crítica a bocajarro sobre algo de la clase y tu alumno la reformula dos veces: con la dosis justa y en niebla. Después comentan la diferencia.', self: 'Ahora piensa en una crítica real que tengas pendiente (a un compañero, un vecino, un proveedor) y dila en voz alta con la dosis justa. (Rehearse a real criticism you need to make.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo con comentarios', coach: 'Claro en el fondo, suave en la forma. Clear content, gentle form.',
      steps: [
        { title: 'Comentarios para la redactora · Feedback for the copywriter', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada crítica: ¿se entiende qué hay que cambiar? ¿Hay atenuadores de más o de menos?', self: 'Escribe el correo y toca «Revisar mi texto». Después repasa cada crítica: ¿está clara?, ¿tiene la dosis justa de atenuación? (Is each criticism clear and appropriately softened?)' } },
          { kind: 'write', title: 'Los textos de La Encina · The copy for La Encina', situation: 'Eres Irene. Nuria Paredes, redactora externa, ha reescrito los textos de la web del hotel. No te convencen del todo, pero Nuria trabaja bien y quieres seguir colaborando con ella. Le escribes un correo con tus comentarios. (Write tactful but clear feedback to a freelance copywriter you want to keep working with.)', task: [
            'Un elogio sincero al principio (puede ser una lítote: «no está nada mal»).',
            'Dos o tres críticas concretas, cada una con un atenuador distinto: acotar, rebajar, distanciarte.',
            'Una concesión: reconoce algo que tiene sentido antes de discrepar.',
            'Un dato que no atenúas (la fecha de entrega) y un cierre que invite a responder.',
          ], starters: ['Gracias por…; se nota…', 'Quería comentarte un par de cosas…', 'Yo diría que…', 'No es que…, pero…', 'Hasta cierto punto lo entiendo, pero…', 'Lo que sí necesito es…', '¿Te parece bien que…?'],
            words: ['hasta cierto punto', 'en cierta medida', 'un poco', 'algo', 'no está nada mal', 'no es que', 'yo diría que', 'da la impresión de que', 'quería comentarte', 'a lo mejor me equivoco'],
            model: 'Hola, Nuria: Gracias por los textos de La Encina; se nota el trabajo que hay detrás, y la sección sobre la historia de la casa [[no está nada mal|teal]], de verdad. [[Quería comentarte|violet]] un par de cosas antes de enviárselos a la clienta. [[Yo diría que|violet]] el texto de la portada es [[un poco|teal]] largo: [[da la impresión de que|violet]] queremos contarlo todo en el primer párrafo. Por otra parte, [[no es que|teal]] el tono sea inadecuado, pero [[en cierta medida|blue]] suena a cualquier hotel rural; quizá podríamos incluir alguna anécdota de la familia. Sé que la clienta pidió expresamente lo de «paraíso inolvidable» y, [[hasta cierto punto|blue]], lo entiendo, pero [[a lo mejor me equivoco|violet]]: creo que una frase más sencilla funcionaría mejor. Lo que sí necesito es la versión final el jueves, porque el viernes se la presentamos a Carmen. ¿Te parece bien que lo hablemos mañana por teléfono? Un abrazo, Irene',
            minWords: 130,
            checks: [
              { label: 'Una expresión que acota (hasta cierto punto, en cierta medida, en parte, en cierto modo, digamos…)', pattern: '(?<!\\p{L})(?:hasta\\s+cierto\\s+punto|en\\s+cierta\\s+medida|en\\s+cierto\\s+modo|en\\s+parte|de\\s+alguna\\s+manera|de\\s+algún\\s+modo|por\\s+así\\s+decirlo|digamos)(?!\\p{L})', tip: 'Limita el alcance de una crítica: «**Hasta cierto punto**, lo entiendo, pero…».' },
              { label: 'Un recurso que rebaja (un poco, un poquito, no está mal, no es muy…, no es que…)', pattern: '(?<!\\p{L})(?:un\\s+poc(?:o|uito)|no\\s+(?:está|están)\\s+(?:nada\\s+)?mal|no\\s+(?:es|son)\\s+(?:muy|del\\s+todo|precisamente)|no\\s+es\\s+que)(?!\\p{L})', tip: 'Rebaja la fuerza: «es **un poco** largo», «**no es que** sea malo, pero…».' },
              { label: 'Un recurso de distancia o modestia (yo diría que, da la impresión de que, quería comentarte…)', pattern: '(?<!\\p{L})(?:diría\\s+que|me\\s+atrevería|da\\s+la\\s+impresión|se\\s+diría|parece\\s+que|la\\s+sensación\\s+de\\s+que|quería\\s+(?:comentar|decir|preguntar)\\p{L}*|me\\s+equivoco|no\\s+sé\\s+si)(?!\\p{L})', tip: 'Preséntalo como impresión u opinión prudente: «**Yo diría que**…», «**Da la impresión de que**…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})no\\s+es\\s+que\\s+(?:\\p{L}+\\s+){0,2}?(?:es|está|son|están|tiene|tienen|hay)(?!\\p{L})', why: '**No es que** pide subjuntivo: «no es que **sea** malo», «no es que **tenga** errores».' },
              { pattern: '(?<!\\p{L})(?:hasta\\s+un\\s+cierto\\s+punto|en\\s+una\\s+cierta\\s+medida|en\\s+un\\s+cierto\\s+modo)(?!\\p{L})', why: 'Sin artículo: «hasta cierto punto», «en cierta medida», «en cierto modo».' },
              { pattern: '(?<!\\p{L})igual\\s+(?:sea|esté|tenga|haya|pueda|podamos|tengamos|convenga)(?!\\p{L})', why: '**Igual** (= a lo mejor) va con indicativo: «igual **es** mejor», «igual **podemos**…».' },
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
            { tone: 'blue', label: 'ACOTAR', formula: 'hasta cierto punto · en cierta medida · en parte · en cierto modo · digamos', example: 'Hasta cierto punto, la propuesta es viable.', caption: 'sin artículo; suele seguir un «pero»', en: 'limit how far, in what way or in what words your claim is true' },
            { tone: 'teal', label: 'REBAJAR', formula: 'un poco / algo + adj. negativo · diminutivo · lítote · no es que + subj.', example: 'Es un poco caro. No es precisamente barato.', caption: '«un poco caro» (queja) ≠ «poco caro» (barato)', en: 'make the criticism weigh less; mind the article: “un poco caro” is not “poco caro”' },
            { tone: 'violet', label: 'DISTANCIARSE', formula: 'da la impresión de que, se diría que + ind. · yo diría que · quería comentarte · igual + ind.', example: 'Da la impresión de que falta algo.', caption: 'una impresión, no un veredicto', en: 'present the criticism as an impression or a modest opinion' },
            { tone: 'orange', label: 'BUSCAR ACUERDO', formula: '¿no? · ¿verdad? · tienes razón en parte, pero… · entiendo lo que dices, pero…', example: 'Es demasiado intenso, ¿no te parece?', caption: 'concede antes de discrepar', en: 'invite agreement and acknowledge the other person’s point before disagreeing' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Atenúa la **forma**, no el **fondo**: el otro tiene que saber qué piensas y qué debe cambiar. Dos o tres atenuadores por crítica bastan; más, y la crítica se pierde en la niebla. Y lo que el otro necesita sí o sí (un plazo, un error grave) se dice con claridad.', en: 'Soften the form, not the substance: the other person must still know what you think and what needs to change. Two or three softeners per criticism are enough; more, and the point gets lost in the fog. Anything they really need to know, like a deadline or a serious error, should be stated plainly.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Este restaurante es ___ caro: comimos tres personas por cuarenta euros.', options: ['algo', 'un poco', 'poco'], answer: 2, why: 'Cuarenta euros para tres es barato: «poco caro». «Un poco» y «algo» serían una queja.', en: 'This restaurant is not expensive: three of us ate for forty euros.' },
            { prompt: 'No es que no ___ ayudarte, es que hoy no tengo tiempo.', options: ['querré', 'quiera', 'quiero'], answer: 1, why: '«No es que» pide subjuntivo: «no es que no quiera».', en: 'It’s not that I don’t want to help you; I just don’t have time today.' },
            { prompt: 'La película ___, pero esperaba algo más del final.', options: ['no estuvo mal', 'estuvo poco mal', 'no estuvo nada bien'], answer: 0, why: 'Lítote que elogia con moderación: «no estuvo mal». «Poco mal» no se usa así; «nada bien» es una crítica fuerte.', en: 'The film wasn’t bad, but I expected more from the ending.' },
            { prompt: 'Te preguntan: «¿Te gusta mi propuesta?». ¿Qué respuesta atenúa sin perder el mensaje?', options: ['Hasta cierto punto sí, aunque yo cambiaría el título.', 'No. El título es horrible.', 'Bueno, no sé, quizás, en cierto modo, igual sí, o no, no sé.'], answer: 0, why: 'Acota el acuerdo y presenta la crítica con modestia, pero concreta: el título. La primera está en niebla; la tercera, a bocajarro.', en: 'Which answer softens the criticism without losing it?' },
            { prompt: '___ es mejor esperar a la reunión del lunes. (coloquial, España)', options: ['Igual que', 'Por igual', 'Igual'], answer: 2, why: '«Igual» + indicativo = a lo mejor. «Igual que» compara; «por igual» significa ‘de la misma manera’.', en: 'Maybe it’s better to wait for Monday’s meeting (colloquial, Spain).' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en la universidad. Now, at university.', blocks: [
          { kind: 'lead', text: 'Paula, estudiante de doctorado, revisa el borrador del artículo de un compañero de grupo. Sus primeras notas son demasiado secas. Transforma sus comentarios para que sean claros y respetuosos.', en: 'Paula, a PhD student, is reviewing a fellow student’s article draft. Her first notes are too blunt. Rewrite her comments so that they stay clear but respectful.' },
          { kind: 'rewrite', title: 'Comentarios al borrador · Comments on the draft', items: [
            { prompt: 'La introducción es aburrida.', instruction: 'Usa una lítote con «no es precisamente» y el adjetivo «amena».', accept: ['La introducción no es precisamente amena'] },
            { prompt: 'Has citado mal a dos autores.', instruction: 'Distánciate: empieza con «Me da la impresión de que».', accept: ['Me da la impresión de que has citado mal a dos autores'] },
            { prompt: 'El método es inadecuado para este corpus.', instruction: 'Empieza con «Yo diría que» y usa «no es del todo adecuado».', accept: ['Yo diría que el método no es del todo adecuado para este corpus'] },
          ] },
        ] },
        { title: 'Ampliación · Registro académico y «capaz que» · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. En la escritura académica la atenuación es casi obligatoria: **cabría pensar que**, **podría decirse que**, **parece razonable suponer que** o **en principio** presentan una conclusión como prudente y discutible. En el otro extremo, el coloquial: en el Río de la Plata y en otras zonas de Sudamérica es frecuente **capaz que** con el valor de ‘a lo mejor’, normalmente con indicativo: «**Capaz que** llueve esta tarde». Con «capaz» solo, el hablante también rebaja su certeza: «—¿Vas a la fiesta? —Capaz».', en: 'For strong students or spare time. In academic writing hedging is almost compulsory: “cabría pensar que” (one might think), “podría decirse que” (it could be said), “parece razonable suponer que” (it seems reasonable to assume) and “en principio” (in principle) present a conclusion as cautious and open to debate. At the other end, in informal speech in the River Plate region and other parts of South America, “capaz que” often means “maybe”, usually with the indicative.' },
          { kind: 'choice', title: 'Reconocer · Recognise', items: [
            { prompt: '¿Qué frase es propia de un artículo académico?', options: ['Capaz que los datos están mal.', 'Igual los datos están mal.', 'Cabría pensar que los datos de 2019 no son representativos.'], answer: 2, why: '«Cabría pensar que» atenúa con el condicional y un tono formal. «Igual» y «capaz que» son coloquiales.', en: 'Which sentence belongs in an academic article?' },
            { prompt: 'Una amiga de Montevideo dice: «Capaz que voy al cine el sábado». ¿Qué significa?', options: ['Que a lo mejor va al cine el sábado.', 'Que irá seguro.', 'Que es capaz de ir sola.'], answer: 0, why: '«Capaz que» (Río de la Plata y otras zonas) equivale a ‘a lo mejor’: no habla de capacidad.', en: 'A friend from Montevideo says this. What does it mean?' },
            { prompt: '¿Qué conclusión suena más prudente en una tesis?', options: ['Los resultados demuestran que el método funciona.', 'Está claro que el método funciona.', 'Podría decirse que, en principio, el método funciona.'], answer: 2, why: '«Podría decirse que» y «en principio» presentan la conclusión como discutible, como se espera en la escritura académica.', en: 'Which conclusion sounds most cautious in a thesis?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno toma una opinión tajante de un periódico o de una red social y la reescribe dos veces: en registro académico (cabría pensar que…) y en registro coloquial (igual…, a lo mejor me equivoco, pero…).' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 192 · Intensificación y énfasis: ni siquiera, incluso, vaya si', text: 'Ya sabes rebajar la fuerza de lo que dices sin perder el mensaje. En la clase 192 haces el movimiento contrario: **intensificar** y **enfatizar** con «incluso», «ni siquiera» o «vaya si», para que tus argumentos suenen con toda su fuerza cuando la situación lo pide.', en: 'You can now soften what you say without losing the message. Class 192 does the opposite: intensifying and emphasising with “incluso”, “ni siquiera” or “vaya si”, so your arguments land with full force when the situation calls for it.', href: '/gramatica/intensificacion-y-enfasis-ni-siquiera-incluso', label: 'Ir a la clase 192' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Es poco caro”, “Es un poco caro” y “No es precisamente barato”?». Respuesta esperada: elogio (no es caro); queja suave; queja irónica (es caro). Tarea: el correo de Escribir con una crítica real que el alumno tenga pendiente.' },
        ] },
      ],
    },
  ],
};
