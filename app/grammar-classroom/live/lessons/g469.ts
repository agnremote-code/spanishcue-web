import type { LiveLesson } from '../types';

/**
 * Lesson 469 · C1 · Subjuntivo en relativas no específicas y genéricas (course unit G169).
 * Builds on G100 (lesson 218, known or sought antecedent), G145 (lesson 445: cualquiera que,
 * dondequiera que, lo que sea, pase lo que pase, no hay nadie que) and G167 (sequence of tenses).
 * Here, the C1 nuance: the article or quantifier does not decide the mood; what decides it is
 * whether the speaker identifies a real referent (los que llegaron tarde) or speaks of whoever
 * may fit (los que lleguen tarde). Also: negated existence vs negation of a known antecedent
 * (no hay ningún relato que me convenza / no he leído el relato que me prestaste); fixed generic
 * indicative in proverbs (quien calla otorga, el que avisa no es traidor) and the real alternation
 * in present generic statements (quien conoce / conozca a Elena sabe…); prospective frames (el que
 * gane se publicará, quien quiera venir que venga); lo que + mood (haz lo que quieras / quieres);
 * cuanto(s) + subjunctive (formal); superlatives, ordinals and «único» (audit gap 26): el mejor
 * relato que he leído / haya leído (both correct: fact vs emphatic evaluation), la única que ha
 * leído todo (identified) vs el único relato que pase a la final (not yet known), es la primera
 * vez que vengo (indicative).
 * Scene: the jury of a short-story prize at the Biblioteca Municipal de Valdeluz. Elena Robles
 * (editor, jury chair), Rodrigo Salas (novelist), Valeria Montes (librarian, secretary, no vote).
 * Explorar: the final jury meeting. Escuchar: Elena on local radio presenting next year's rules
 * (es-MX-DaliaNeural, ustedes). Escribir: the jury's email to all participants.
 * Exercises never ask the learner to choose a mood where both are correct: those cases are
 * taught as meaning contrasts. Future subjunctive (G202) appears only receptively, glossed.
 */
export const lesson: LiveLesson = {
  id: 469,
  level: 'C1',
  title: 'Subjuntivo en relativas no específicas y genéricas',
  subtitle: 'Distinguir lo identificado de lo que solo es posible: los que llegaron / lleguen, el mejor que he leído / haya leído, quien calla otorga.',
  legend: [
    { tone: 'teal', label: 'IDENTIFICADO · un referente real y concreto → indicativo (los que llegaron)' },
    { tone: 'blue', label: 'NO IDENTIFICADO · quien sea, si lo hay, todavía no se sabe → subjuntivo (el que gane)' },
    { tone: 'violet', label: 'INEXISTENTE · se niega o se pone en duda que exista → subjuntivo (no hay nada que…)' },
    { tone: 'orange', label: 'GENÉRICO FIJO · refranes y sentencias → indicativo (quien calla, otorga)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Sabes de quién hablas?', coach: '¿Un referente real o cualquiera que encaje? A real referent, or whoever fits?',
      steps: [
        { title: 'Las bases del premio · The contest rules', blocks: [
          { kind: 'lead', text: 'La Biblioteca Municipal de Valdeluz convoca cada año un premio de relato breve. Las bases se escriben meses antes de que llegue ningún texto, así que hablan de personas y relatos que **nadie conoce todavía**: «Quien **tenga** dudas puede escribir a la secretaría». Hoy el jurado (Elena Robles, editora y presidenta; Rodrigo Salas, novelista; y Valeria Montes, la bibliotecaria que hace de secretaria) tiene que elegir al ganador. En esta clase afinas algo que ya conoces: el modo de la relativa depende de si **identificas** el referente o hablas de **cualquiera que encaje**.', en: 'Every year the Valdeluz public library runs a short-story prize. The rules are written months before any text arrives, so they talk about people and stories nobody knows yet: “Anyone with questions can write to the secretary.” Today the jury has to choose the winner. In this class you fine-tune something you already know: the mood of a relative clause depends on whether you identify the referent or speak of whoever fits the description.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno explica, con sus palabras, de qué relatos habla cada una: ¿unos concretos, cualquiera que llegue o una costumbre de la biblioteca?', self: 'Lee las tres frases en voz alta y explica de qué relatos habla cada una: ¿unos concretos, cualquiera que llegue o una costumbre? (Which stories does each sentence refer to?)' } },
          { kind: 'compare', title: 'El mismo antecedente, tres miradas · Same antecedent, three angles', columns: [
            { tone: 'teal', label: 'IDENTIFICADO · indicativo', sentence: 'Los relatos que [[llegaron|teal]] tarde se devolvieron el lunes.', idea: 'Son tres relatos concretos: Valeria los tiene en la mesa.', en: 'Three specific stories that really exist: the speaker can point at them.' },
            { tone: 'blue', label: 'NO IDENTIFICADO · subjuntivo', sentence: 'Los relatos que [[lleguen|blue]] tarde no se leerán.', idea: 'Cualquier relato que, en el futuro, llegue tarde. Quizá no llegue ninguno.', en: 'Any story that may arrive late in the future: no specific text, and perhaps there will be none.' },
            { tone: 'orange', label: 'HÁBITO GENERAL · indicativo', sentence: 'Aquí, los relatos que [[llegan|orange]] tarde no se leen.', idea: 'Describe una práctica real y conocida de la biblioteca, como un hecho.', en: 'Describes how things are actually done here, presented as an established fact.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Los relatos que lleguen tarde no se leerán.» ¿Sabe Elena qué relatos van a llegar tarde?', options: ['No: habla de cualquier relato que llegue tarde, si llega alguno.', 'Sí: ya están en la mesa de Valeria.', 'Sí: son los tres de este año.'], answer: 0, why: 'El subjuntivo presenta el antecedente como no identificado: el que sea, si lo hay.', en: 'The subjunctive presents the stories as not identified: whichever, if any.' },
            { prompt: '«Los relatos que llegaron tarde se devolvieron.» ¿De qué relatos habla?', options: ['De unos relatos concretos que ya existen.', 'De cualquier relato posible.', 'De una norma para el año que viene.'], answer: 0, why: 'Indicativo: un grupo real, identificado, del que se cuenta un hecho.', en: 'The indicative refers to a real, identified group of stories.' },
          ] },
        ] },
        { title: 'Ni el artículo ni el pronombre deciden · Neither article nor pronoun decides', mascot: '/brand/mascot/studying.webp', coach: 'Decide el referente, no la palabra. The referent decides, not the word.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'NO IDENTIFICADO → SUBJUNTIVO', question: '¿Hablas de quien sea, de lo que sea, de algo que quizá ni exista?', en: 'At C1 the key point is that “el que”, “quien”, “lo que”, “todo el que” or “cuanto” can take either mood. The subjunctive says: I am not picking out a real referent, I mean whoever or whatever turns out to fit.', formula: ['el / la / los / las que · quien · lo que · todo el que + SUBJUNTIVO', 'cuanto / cuantos / cuantas + SUBJUNTIVO (registro formal)'],
            meaning: 'Con artículo definido parece que hablamos de algo concreto, pero no siempre es así: «el que **gane**» no señala a nadie, porque todavía no hay ganador. El subjuntivo marca que el referente **no está identificado**: puede ser cualquiera, o puede no existir.',
            examples: [
              { es: 'El que [[gane|blue]] presentará su libro en la feria de octubre.', en: 'Whoever wins will present their book at the October fair.' },
              { es: 'Todo el que [[quiera|blue]] asistir a la entrega tiene que reservar plaza.', en: 'Anyone who wants to attend the ceremony has to book a seat.' },
              { es: 'Cuantos textos [[se presenten|blue]] serán leídos por los tres miembros del jurado.', en: 'All texts submitted, however many, will be read by all three jury members (formal).' },
            ] },
          { kind: 'table', title: 'La misma estructura, dos modos · Same structure, two moods', head: ['Estructura', 'Indicativo · referente real, identificado', 'Subjuntivo · el que sea, si lo hay'], rows: [
            ['el / los que', 'Los alumnos que [[llegan|teal]] tarde son siempre los mismos: Iker y Sara. (we know who)', 'Los alumnos que [[lleguen|blue]] tarde esperarán al descanso. (whoever does)'],
            ['quien', 'Quien me [[llamó|teal]] anoche era Rodrigo. (a specific caller)', 'Quien [[tenga|blue]] dudas puede preguntar. (anyone who does)'],
            ['lo que', 'Me has dicho que quieres escribir: haz lo que [[quieres|teal]]. (that very thing)', 'No te voy a decir nada: haz lo que [[quieras|blue]]. (whatever you like)'],
            ['cuanto', 'Cuanto [[dijo|teal]] aquel día resultó ser cierto. (all he actually said)', 'Cuanto [[digas|blue]] podrá ser utilizado en tu contra. (anything you may say)'],
            ['todo el que', 'Todo el que la [[conoce|teal]] la respeta. (a real group of people)', 'Todo el que [[llegue|blue]] antes de las ocho tendrá sitio. (anyone who may)'],
          ], note: '«Cuanto / cuantos» equivale a «todo lo que / todos los que» y es propio del registro formal o escrito. En la conversación se dice «todo lo que digas».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Valeria: «Los participantes que ___ su asistencia antes del viernes recibirán la invitación por correo».', options: ['confirman', 'confirmen', 'confirmarán'], answer: 1, why: 'No se sabe quién confirmará: antecedente no identificado en un marco futuro → subjuntivo.', en: 'Whoever confirms attendance before Friday will receive the invitation by email.' },
            { prompt: '—¿Qué título le pongo al acta? —___; tú eres la secretaria.', options: ['El que quieres', 'El que querrás', 'El que quieras'], answer: 2, why: 'Elena no sabe ni le importa qué título será: «el que quieras» = cualquiera que elijas.', en: '“Whatever title you like; you’re the secretary.”' },
            { prompt: 'Elena abre la sesión: «Cuanto ___ a partir de ahora constará en el acta».', options: ['se dice', 'se dirá', 'se diga'], answer: 2, why: '«Cuanto» + subjuntivo = todo lo que se diga, sea lo que sea. Todavía no se ha dicho nada.', en: '“Everything said from now on will be recorded in the minutes.”' },
          ] },
        ] },
        { title: 'Genérico: refrán, verdad general o caso futuro · Generic statements', mascot: '/brand/mascot/standing.webp', coach: 'Un tipo de persona o un caso por venir. A type of person, or a case still to come.', blocks: [
          { kind: 'compare', title: 'Quien, el que: tres usos genéricos · Three generic uses', columns: [
            { tone: 'orange', label: 'REFRÁN · indicativo fijo', sentence: '[[El que avisa|orange]] no es traidor.', idea: 'Define un tipo de persona como verdad intemporal. Los refranes no cambian de modo.', en: 'A proverb defines a type of person as a timeless truth; its wording is fixed, always indicative.' },
            { tone: 'teal', label: 'VERDAD GENERAL · alternancia', sentence: 'Quien [[conoce|teal]] / [[conozca|blue]] a Elena sabe que no exagera.', idea: 'Las dos son correctas: el indicativo presenta una clase real de personas; el subjuntivo, a cualquiera que la conozca.', en: 'Both are correct: the indicative refers to a real class of people, the subjunctive to anyone who might know her.' },
            { tone: 'blue', label: 'CASO FUTURO O MANDATO · subjuntivo', sentence: 'Quien [[quiera|blue]] venir, que venga.', idea: 'Mira hacia delante: una invitación, una norma, un plan. Solo subjuntivo.', en: 'Looks ahead to a possible case (invitation, rule, plan): only the subjunctive works.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Los refranes no siguen la regla del futuro · Proverbs keep the indicative', text: 'En los refranes el verbo de la relativa va en indicativo aunque la principal esté en futuro, porque definen un tipo de persona: «Quien bien te **quiere** te hará llorar», «**Quien calla**, otorga», «Quien mucho **abarca**, poco aprieta», «Quien **ríe** el último ríe mejor». Si cambias el modo, el refrán deja de ser refrán.', en: 'In proverbs the relative clause stays in the indicative even when the main verb is future, because they define a type of person rather than a future case: “Quien bien te quiere te hará llorar” (those who truly love you will make you cry). Change the mood and it no longer sounds like the proverb.' },
          { kind: 'decide', title: '¿Indicativo o subjuntivo en una relativa genérica?', steps: [
            { q: '¿Es un refrán o una fórmula fija?', yes: '**Indicativo**, tal como se dice siempre: «Quien calla, otorga».', no: 'next' },
            { q: '¿La frase mira a un caso futuro o posible: una norma que se aplicará, una invitación, una orden, un plan?', yes: '**Subjuntivo**: «El que gane se publicará», «Quien quiera, que venga».', no: 'next' },
            { q: '¿Es una afirmación general en presente sobre un tipo de personas?', yes: 'Los dos modos son posibles: el **indicativo** habla de una clase real; el **subjuntivo**, de cualquiera que encaje.', no: 'Vuelve a la pregunta básica: ¿identificas un referente concreto? Entonces, indicativo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rodrigo, con una sonrisa: «Ya lo sabes: el que ___ no es traidor».', options: ['avisará', 'avise', 'avisa'], answer: 2, why: 'Es un refrán: forma fija en indicativo, «el que avisa no es traidor».', en: 'Proverb: forewarned is forearmed (lit. he who warns is no traitor).' },
            { prompt: 'Elena, sobre la entrega del premio: «Quien ___ venir, que venga; hay sitio para todos».', options: ['quiere', 'querrá', 'quiera'], answer: 2, why: 'Invitación hacia el futuro con «que venga»: el referente es cualquiera → subjuntivo.', en: '“Anyone who wants to come is welcome; there’s room for everyone.”' },
            { prompt: '«Quien conoce a Elena sabe que no exagera» / «Quien conozca a Elena sabe que no exagera».', options: ['Solo la segunda es correcta.', 'Las dos son correctas: la primera habla de una clase real de personas; la segunda, de cualquiera que la conozca.', 'Solo la primera es correcta.'], answer: 1, why: 'En las afirmaciones generales en presente los dos modos alternan; cambia el matiz, no la corrección.', en: 'In general statements in the present both moods are possible; only the nuance changes.' },
          ] },
        ] },
        { title: 'Superlativos, ordinales y «único» · Superlatives, ordinals, “único”', mascot: '/brand/mascot/speaking.webp', coach: 'Constatar o ponderar. Stating a fact or weighing it up.', blocks: [
          { kind: 'table', title: 'Pares con significado · Meaningful pairs', head: ['Estructura', 'Indicativo', 'Subjuntivo'], rows: [
            ['superlativo + experiencia', 'Es el mejor relato que [[he leído|teal]] este año. (a verifiable fact within a closed set)', 'Es el mejor relato que [[haya leído|blue]] nunca. (emphatic evaluation, an open set; more careful register)'],
            ['«único» + referente conocido o no', 'Elena es la única del jurado que [[ha leído|teal]] los cuarenta textos dos veces. (identified person)', 'El único relato que [[pase|blue]] a la final será el que convenza a los tres. (not decided yet)'],
            ['«único» + persona', 'Eres la única persona que me [[entiende|teal]]. (I say it of you, a real person)', 'La única persona que me [[entienda|blue]] será alguien que haya pasado por lo mismo. (whoever that may be)'],
            ['ordinal', 'Es la primera vez que [[formo|teal]] parte de un jurado. («la primera vez que» + hecho: indicativo)', 'La primera persona que [[llegue|blue]] recogerá las llaves. (whoever arrives first)'],
          ], note: 'Con un superlativo referido a tu experiencia pasada, **los dos modos son correctos**: el indicativo lo presenta como un dato; el subjuntivo subraya la valoración («de todo lo que pueda haber leído») y es frecuente con «nunca», «jamás», «en años». Con «la primera vez que» lo normal es el indicativo.' },
          { kind: 'tip', icon: '🔑', title: '«Único»: ¿alguien concreto o quien sea? · “Único”: someone specific or whoever?', text: '«Eres la única persona que me **entiende**» afirma algo de una persona real que tienes delante. «La única persona que me **entienda** será alguien que haya pasado por lo mismo» habla de una persona que no sabes quién es, ni si existe. El adjetivo es el mismo; cambia lo que sabes del referente.', en: '“Eres la única persona que me entiende” says something about a real person in front of you. “La única persona que me entienda…” talks about someone you cannot identify and who may not exist. Same adjective; what changes is what you know about the referent.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Elena: «Es el mejor relato que haya leído en años». ¿Qué aporta el subjuntivo?', options: ['Es obligatorio después de cualquier superlativo.', 'Indica que Elena no ha leído el relato.', 'Subraya la valoración; «que he leído» también sería correcto.'], answer: 2, why: 'Con superlativos alternan los dos modos: el subjuntivo pondera, el indicativo constata.', en: 'With superlatives both moods are possible: the subjunctive emphasises the judgement.' },
            { prompt: 'Rodrigo, en su primera reunión: «Es la primera vez que ___ parte de un jurado».', options: ['formo', 'formaré', 'forme'], answer: 0, why: '«La primera vez que» + un hecho real: indicativo.', en: '“It’s the first time I’ve been on a jury.”' },
            { prompt: 'Todavía no han votado. «El único relato que ___ a la final será el que convenza a los tres.»', options: ['pasará', 'pasa', 'pase'], answer: 2, why: 'Aún no se sabe cuál será: «único» con referente no identificado → subjuntivo.', en: 'They haven’t voted yet: the only story that goes through will be the one that convinces all three.' },
          ] },
        ] },
        { title: 'Negar la existencia · Denying that something exists', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Niegas la existencia o solo el verbo? Denying existence, or just the verb?', blocks: [
          { kind: 'compare', title: 'No basta con un «no» · A “no” is not enough', columns: [
            { tone: 'violet', label: 'EXISTENCIA NEGADA · subjuntivo', sentence: 'No conozco ningún sitio donde [[se pueda|violet]] escribir tan tranquilo.', idea: 'Niegas que exista un lugar así.', en: 'You deny that such a place exists: subjunctive.' },
            { tone: 'teal', label: 'NEGACIÓN DEL VERBO · indicativo', sentence: 'No he leído el relato que me [[prestaste|teal]].', idea: 'El relato existe y lo identificas; solo niegas que lo hayas leído.', en: 'The story exists and you know which one; you only deny having read it.' },
            { tone: 'violet', label: 'PREGUNTA RETÓRICA · subjuntivo', sentence: '¿Hay alguien aquí que no [[haya soñado|violet]] con publicar?', idea: 'La pregunta espera «nadie»: pone en duda que exista esa persona.', en: 'A rhetorical question expecting “nobody”: it questions whether such a person exists.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rodrigo: «No conozco ninguna editorial que ___ relatos sueltos».', options: ['publicará', 'publica', 'publique'], answer: 2, why: '«Ninguna editorial»: niega que exista → subjuntivo.', en: '“I don’t know of any publisher that publishes single short stories.”' },
            { prompt: 'Valeria me recomendó un relato ayer, pero todavía no he leído el relato que me ___.', options: ['recomendó', 'recomiende', 'recomendará'], answer: 0, why: 'El relato existe y está identificado; el «no» afecta a «he leído», no al antecedente → indicativo.', en: 'The story exists and is identified; the negation does not affect it.' },
            { prompt: 'Elena, en la entrega: «¿Hay alguien en esta sala que no ___ soñado alguna vez con escribir un libro?».', options: ['ha', 'habrá', 'haya'], answer: 2, why: 'Pregunta retórica que espera «nadie»: se cuestiona la existencia → subjuntivo.', en: '“Is there anyone in this room who has never dreamed of writing a book?”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/portrait.webp', coach: 'Ni todo subjuntivo ni todo indicativo. Neither all subjunctive nor all indicative.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué sabe el hablante del referente. Después aparece la corrección.', self: 'Lee cada frase y pregúntate: ¿el hablante identifica el referente? Toca para ver la corrección. (Does the speaker identify the referent?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Los relatos que llegarán después del día 30 no se leerán.', right: 'Los relatos que lleguen después del día 30 no se leerán.', why: 'Calco del inglés «that will arrive». Con un referente no identificado en un marco futuro, la relativa va en subjuntivo, no en futuro.' },
            { wrong: 'No hay ningún finalista que tiene más de cuarenta años.', right: 'No hay ningún finalista que tenga más de cuarenta años.', why: '«No hay ningún…» niega que exista: subjuntivo.' },
            { wrong: 'Quien quiere venir a la entrega, que venga.', right: 'Quien quiera venir a la entrega, que venga.', why: 'Invitación hacia el futuro, con «que venga»: el referente es cualquiera → quiera.' },
            { wrong: 'El que avise no es traidor.', right: 'El que avisa no es traidor.', why: 'Es un refrán: su forma es fija, en indicativo. Hipercorrección por pensar «el que» = subjuntivo.' },
            { wrong: 'Ayer no encontré el libro que me hayas pedido.', right: 'Ayer no encontré el libro que me pediste.', why: 'El libro está identificado (tú me lo pediste); el «no» niega «encontré», no la existencia del libro → indicativo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Las bases dicen: «El participante que ___ más de un relato quedará descalificado».', options: ['enviará', 'envía', 'envíe'], answer: 2, why: 'Norma para casos futuros, sin referente identificado → subjuntivo, no futuro.', en: 'Any participant who submits more than one story will be disqualified.' },
            { prompt: 'Rodrigo: «Ya lo dice el refrán: quien mucho ___, poco aprieta».', options: ['abarca', 'abarcará', 'abarque'], answer: 0, why: 'Refrán fijo: indicativo.', en: 'Proverb: grasp all, lose all (lit. who embraces much, squeezes little).' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice una norma de su trabajo o de su clase («Los que…») y una frase sobre personas concretas con el mismo antecedente. Tú preguntas: «¿Sabes ya quiénes son?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La última reunión del jurado', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En la sala de juntas · In the meeting room', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena y tu alumno es Rodrigo; el papel de Valeria lo leen por turnos. Después tu alumno toca cada expresión marcada y explica qué sabe el hablante del referente.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y explica qué sabe el hablante del referente. (Then tap each marked expression.)' } },
          { kind: 'explore', title: 'Agua de marzo', setting: 'Sala de juntas de la Biblioteca Municipal de Valdeluz. Última reunión del jurado: Elena Robles (presidenta), Rodrigo Salas y Valeria Montes (secretaria, sin voto). Se tutean. Tienen que elegir entre tres finalistas: «La casa del faro», «Agua de marzo» y «Los inquilinos». (The jury’s final meeting: they must choose the winner among three finalists.)', lines: [
            { who: 'Valeria', text: 'Antes de votar, un asunto práctico: han llegado tres relatos fuera de plazo. ¿Qué hago con [[los que llegaron el lunes|teal]]?', en: 'Before we vote, a practical matter: three stories came in after the deadline. What do I do with the ones that arrived on Monday?' },
            { who: 'Elena', text: 'Las bases son claras: «[[Los relatos que lleguen después del día 30|blue]] quedarán fuera de concurso». Lo siento por ellos, pero se devuelven.', en: 'The rules are clear: “Stories arriving after the 30th will be excluded.” I’m sorry for them, but they go back.' },
            { who: 'Rodrigo', text: 'Una pena. Bueno, a lo nuestro. Para mí, «La casa del faro» es [[el mejor relato que he leído en esta convocatoria|teal]].', en: 'A shame. Right, back to business. For me, “La casa del faro” is the best story I’ve read in this round.' },
            { who: 'Elena', text: 'Pues yo me quedo con «Agua de marzo». Es [[lo mejor que haya leído en años|blue]], y no exagero.', en: 'Well, I’m going with “Agua de marzo”. It’s the best thing I’ve read in years, and I’m not exaggerating.' },
            { who: 'Valeria', text: '¿Y «Los inquilinos»? El final está muy cuidado.', en: 'And “Los inquilinos”? The ending is very polished.' },
            { who: 'Rodrigo', text: 'Está bien escrito, pero [[no hay nada en él que me sorprenda|violet]]. [[Quien haya leído a los clásicos del género|blue]] ya conoce ese final.', en: 'It’s well written, but there’s nothing in it that surprises me. Anyone who has read the classics of the genre already knows that ending.' },
            { who: 'Valeria', text: '¿Y si hay empate entre Rodrigo y tú? ¿Qué pongo en el acta?', en: 'And if there’s a tie between you and Rodrigo? What do I put in the minutes?' },
            { who: 'Elena', text: 'Pondrás [[lo que decidamos|blue]], claro. Pero antes quiero convencer a Rodrigo.', en: 'You’ll put whatever we decide, of course. But first I want to win Rodrigo over.' },
            { who: 'Rodrigo', text: 'Inténtalo. Eso sí, [[el que gane|blue]] se publica en libro, así que tiene que aguantar una edición en papel.', en: 'Go ahead. Mind you, whichever story wins gets published as a book, so it has to hold up in print.' },
            { who: 'Elena', text: '«Agua de marzo» aguanta eso y más: [[quien lo lea|blue]] no lo va a olvidar. ¿Nada que objetar? [[Quien calla, otorga|orange]].', en: '“Agua de marzo” can take that and more: nobody who reads it will forget it. No objections? Silence means consent.' },
            { who: 'Rodrigo', text: 'No callo: otorgo. Tiene una voz que [[no he encontrado en ningún otro texto|teal]].', en: 'I’m not silent: I consent. It has a voice I haven’t found in any other text.' },
            { who: 'Valeria', text: 'Apuntado. Y [[es la primera vez que|teal]] el premio se decide por unanimidad.', en: 'Noted. And it’s the first time the prize has been decided unanimously.' },
          ], notes: {
            'los que llegaron el lunes': 'Indicativo: son tres relatos concretos, ya recibidos. Valeria los identifica por el día de llegada.',
            'Los relatos que lleguen después del día 30': 'Elena cita las bases, escritas antes de que llegara ningún texto: por eso subjuntivo. Se refería a cualquier relato que pudiera llegar tarde.',
            'el mejor relato que he leído en esta convocatoria': 'Superlativo con indicativo: Rodrigo constata un dato dentro de un conjunto cerrado, los textos de este año. «Que haya leído» también sería correcto.',
            'lo mejor que haya leído en años': 'Superlativo con subjuntivo: Elena pondera, compara con todo lo que pueda haber leído. «Que he leído» también sería correcto, con un tono más neutro.',
            'no hay nada en él que me sorprenda': 'Existencia negada: no hay nada que… → subjuntivo.',
            'Quien haya leído a los clásicos del género': 'Afirmación general sobre cualquier lector posible: subjuntivo. «Quien ha leído…» también es posible y presenta a esos lectores como una clase real.',
            'lo que decidamos': 'Todavía no han decidido: lo que sea que decidan → subjuntivo. Compara: «Pondré lo que hemos decidido» (ya está decidido).',
            'el que gane': 'No hay ganador todavía: «el que» no señala a nadie → subjuntivo, aunque la principal esté en presente («se publica» = se publicará).',
            'quien lo lea': 'Cualquier lector futuro: quien lo lea → subjuntivo, con una principal que mira hacia delante («no lo va a olvidar»).',
            'Quien calla, otorga': 'Refrán: forma fija en indicativo. Define un tipo de persona, no un caso futuro. (Silence gives consent.)',
            'no he encontrado en ningún otro texto': 'Hay un «ningún», pero el antecedente es «una voz», la de este relato: está identificado → indicativo. El «ningún» está dentro de la relativa, no niega el antecedente.',
            'es la primera vez que': '«La primera vez que» + hecho real: indicativo («se decide»).',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué pasa con los tres relatos que llegaron tarde?', options: ['Pasan a la edición del año siguiente.', 'Se leen, pero no pueden ganar.', 'Se devuelven: quedan fuera de concurso.'], answer: 2, why: '«Lo siento por ellos, pero se devuelven.»', en: 'What happens to the three late stories?' },
            { prompt: '¿Por qué no convence «Los inquilinos» a Rodrigo?', options: ['Porque está mal escrito.', 'Porque es demasiado largo para publicarlo.', 'Porque su final es previsible para un buen lector del género.'], answer: 2, why: '«No hay nada en él que me sorprenda. Quien haya leído a los clásicos del género ya conoce ese final.»', en: 'Why does “Los inquilinos” fail to convince Rodrigo?' },
            { prompt: '¿Cómo termina la votación?', options: ['Con empate, y decide la presidenta.', '«Agua de marzo» gana por unanimidad.', '«La casa del faro» gana con el voto de Rodrigo.'], answer: 1, why: 'Rodrigo dice «otorgo» y Valeria anota que es la primera vez que se decide por unanimidad.', en: 'How does the vote end?' },
          ] },
        ] },
        { title: '¿Qué sabe el hablante? · What does the speaker know?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases de la reunión · Sentences from the meeting', categories: [
            { id: 'identificado', label: 'IDENTIFICADO → indicativo', tone: 'teal' },
            { id: 'noidentificado', label: 'NO IDENTIFICADO → subjuntivo', tone: 'blue' },
            { id: 'inexistente', label: 'INEXISTENTE → subjuntivo', tone: 'violet' },
            { id: 'generico', label: 'REFRÁN → indicativo fijo', tone: 'orange' },
          ], items: [
            { text: '¿Qué hago con los que llegaron el lunes?', answer: 'identificado', why: 'Tres relatos concretos, ya en la biblioteca.' },
            { text: 'Pondrás lo que decidamos.', answer: 'noidentificado', why: 'La decisión todavía no existe: lo que sea que decidan.' },
            { text: 'No hay nada en él que me sorprenda.', answer: 'inexistente', why: 'Rodrigo niega que exista algo sorprendente en el relato.' },
            { text: 'Quien calla, otorga.', answer: 'generico', why: 'Refrán: indicativo fijo.' },
            { text: 'El que gane se publica en libro.', answer: 'noidentificado', why: 'Aún no hay ganador: el que sea.' },
            { text: 'Tiene una voz que no he encontrado en ningún otro texto.', answer: 'identificado', why: 'La voz es la de este relato; el «ningún» va dentro de la relativa.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué cambiaría si Rodrigo dijera “el mejor relato que haya leído nunca”?». Respuesta esperada: nada de corrección; más énfasis en la valoración.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Antes de elegir, pregunta: ¿quién, cuál, existe? Before choosing, ask: who, which, does it exist?',
      steps: [
        { title: 'Las bases de la próxima edición · Next year’s rules', blocks: [
          { kind: 'choice', items: [
            { context: 'Valeria redacta las bases nuevas. (Valeria drafts the new rules.)', prompt: 'Los relatos que ___ las tres mil palabras quedarán fuera de concurso.', options: ['superan', 'superarán', 'superen'], answer: 2, why: 'Norma para textos que aún no existen: referente no identificado → superen.', en: 'Stories exceeding three thousand words will be excluded.' },
            { context: 'Valeria redacta las bases nuevas.', prompt: 'Quien ___ recibir un comentario del jurado deberá marcar la casilla correspondiente.', options: ['desea', 'deseará', 'desee'], answer: 2, why: 'Cualquier participante futuro: quien + subjuntivo.', en: 'Anyone who wishes to receive feedback from the jury must tick the box.' },
            { context: 'Valeria deja una nota a Rodrigo. (A note for Rodrigo.)', prompt: 'Te he dejado en la mesa los relatos que ___ fuera de plazo, por si quieres echarles un vistazo.', options: ['llegaran', 'llegaron', 'lleguen'], answer: 1, why: 'Relatos concretos que están en la mesa: identificados → indicativo.', en: 'I’ve left the stories that came in late on the table, in case you want to look at them.' },
            { context: 'Rodrigo recuerda otras ediciones. (Rodrigo remembers past editions.)', prompt: 'Llevo veinte años de jurado y no recuerdo ningún año en que ___ tantos textos.', options: ['se recibieron', 'se recibieran', 'se reciban'], answer: 1, why: '«Ningún año en que…» niega la existencia → subjuntivo; como habla de años pasados, imperfecto («se hayan recibido» también sería posible).', en: 'I’ve been on juries for twenty years and I can’t remember a year with so many entries.' },
            { context: 'Antes de votar, Elena recuerda una condición. (Before voting.)', prompt: 'El autor que ___ tendrá que presentar el libro en la feria de octubre.', options: ['ganará', 'gana', 'gane'], answer: 2, why: 'Todavía no hay ganador: el que sea → subjuntivo, no futuro.', en: 'Whichever author wins will have to present the book at the October fair.' },
          ] },
        ] },
        { title: '¿Qué sabe el hablante? · What does the speaker know?', blocks: [
          { kind: 'classify', title: 'Frases de la biblioteca · Sentences from the library', categories: [
            { id: 'identificado', label: 'IDENTIFICADO → indicativo', tone: 'teal' },
            { id: 'noidentificado', label: 'NO IDENTIFICADO → subjuntivo', tone: 'blue' },
            { id: 'inexistente', label: 'INEXISTENTE → subjuntivo', tone: 'violet' },
            { id: 'generico', label: 'REFRÁN → indicativo fijo', tone: 'orange' },
          ], items: [
            { text: 'Avisaremos por correo a los que pasen a la final.', answer: 'noidentificado', why: 'Todavía no se sabe quiénes pasarán.' },
            { text: 'Los que pasaron a la final son tres mujeres y un hombre.', answer: 'identificado', why: 'Un grupo concreto, ya conocido.' },
            { text: 'No queda ni una sala que esté libre el sábado.', answer: 'inexistente', why: '«Ni una sala que…» niega que exista.' },
            { text: 'Quien ríe el último ríe mejor.', answer: 'generico', why: 'Refrán: indicativo fijo.' },
            { text: 'Elena es la única del jurado que ha leído todos los textos dos veces.', answer: 'identificado', why: '«La única» señala a una persona concreta: Elena.' },
            { text: 'Haremos lo que diga la directora de la biblioteca.', answer: 'noidentificado', why: 'Todavía no ha dicho nada: lo que sea que diga.' },
            { text: '¿Hay alguien que no haya leído los tres finalistas?', answer: 'inexistente', why: 'Pregunta que pone en duda que exista esa persona.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Cualquier participante que enviará dos relatos quedará descalificado.', ok: false, options: ['Cualquier participante que enviaría dos relatos quedará descalificado.', 'Cualquier participante que envíe dos relatos quedará descalificado.', 'Cualquier participante que envía dos relatos quedará descalificado.'], answer: 1, why: 'Referente no identificado en una norma: subjuntivo. El futuro de indicativo en la relativa es un calco del inglés.' },
            { sentence: 'No he leído todavía el relato que me pasaste ayer.', ok: true, why: 'Correcta: el relato está identificado; el «no» afecta a «he leído», no al antecedente.' },
            { sentence: 'Quien bien te quiere te hará llorar.', ok: true, why: 'Correcta: es un refrán. El indicativo es fijo aunque la principal esté en futuro.' },
            { sentence: 'No hay ningún jurado que lee los textos con tanto cuidado como este.', ok: false, options: ['No hay ningún jurado que lea los textos con tanto cuidado como este.', 'No hay ningún jurado que leerá los textos con tanto cuidado como este.', 'No hay ningún jurado que leyó los textos con tanto cuidado como este.'], answer: 0, why: '«No hay ningún…» niega la existencia: subjuntivo, lea.' },
            { sentence: 'Los que lleguen tarde ayer no pudieron votar.', ok: false, options: ['Los que llegarán tarde ayer no pudieron votar.', 'Los que llegaran tarde ayer no pueden votar.', 'Los que llegaron tarde ayer no pudieron votar.'], answer: 2, why: 'Hipercorrección: «ayer» y «no pudieron» hablan de personas concretas que ya llegaron tarde → indicativo.' },
            { sentence: 'En la reunión dijeron que los que entregaran el texto en papel tendrían que enviarlo también por correo electrónico.', ok: true, why: 'Correcta: norma futura contada desde el pasado → imperfecto de subjuntivo (concordancia de la clase 167).' },
          ] },
        ] },
        { title: 'Mensajes después de la reunión · Messages after the meeting', blocks: [
          { kind: 'chat-fill', title: 'Rodrigo y Valeria · Rodrigo and Valeria', lines: [
            { who: 'Rodrigo', text: '¿Ya has escrito a los participantes?' },
            { who: 'Valeria', text: 'Sí. A los que no han ganado les he dicho que quien ___ un comentario del jurado lo pida antes del viernes.', options: ['quiera', 'querrá', 'quiere'], answer: 0, why: 'Cualquiera de ellos, si lo quiere: referente no identificado → quiera.' },
            { who: 'Rodrigo', text: '¿Y los tres relatos que ___ fuera de plazo?', options: ['llegaron', 'lleguen', 'llegaran'], answer: 0, why: 'Relatos concretos, ya recibidos: indicativo.' },
            { who: 'Valeria', text: 'Los devuelvo hoy. Oye, para el libro de «Agua de marzo», no encuentro ninguna imprenta que ___ tiradas tan cortas.', options: ['hará', 'haga', 'hace'], answer: 1, why: '«Ninguna imprenta que…» niega que exista: subjuntivo.' },
            { who: 'Rodrigo', text: 'Pregúntale a Elena: es la única del jurado que ___ con imprentas.', options: ['trabajara', 'trabaja', 'trabaje'], answer: 1, why: '«La única» señala a una persona identificada, Elena: indicativo.' },
            { who: 'Valeria', text: 'Buena idea. Y lo que ella me ___ mañana, eso haremos.', options: ['dice', 'dijo', 'diga'], answer: 2, why: 'Todavía no ha dicho nada: lo que sea que diga mañana → subjuntivo.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Quien', 'necesite', 'más', 'tiempo,', 'que', 'lo', 'pida', 'por', 'escrito'], accept: ['Quien necesite más tiempo, que lo pida por escrito'], en: 'Anyone who needs more time should ask for it in writing.' },
            { tiles: ['No', 'hay', 'ningún', 'relato', 'que', 'me', 'haya', 'convencido', 'del', 'todo'], accept: ['No hay ningún relato que me haya convencido del todo'], en: 'There isn’t a single story that has fully convinced me.' },
            { tiles: ['Es', 'el', 'mejor', 'final', 'que', 'haya', 'leído', 'nunca'], accept: ['Es el mejor final que haya leído nunca'], en: 'It’s the best ending I have ever read (emphatic).' },
            { tiles: ['Los', 'que', 'lleguen', 'tarde', 'esperarán', 'fuera'], accept: ['Los que lleguen tarde esperarán fuera', 'Esperarán fuera los que lleguen tarde'], en: 'Anyone who arrives late will wait outside.' },
          ] },
        ] },
        { title: 'De este año al próximo · From this year to the next', blocks: [
          { kind: 'rewrite', title: 'Convierte el hecho en norma · Turn the fact into a rule', items: [
            { prompt: 'Este año, los participantes que enviaron dos relatos quedaron descalificados.', instruction: 'Escribe la norma para la próxima edición, en futuro. Empieza con «Los participantes que».', accept: ['Los participantes que envíen dos relatos quedarán descalificados'] },
            { prompt: 'Este año, todo el que pidió un comentario lo recibió.', instruction: 'Escribe la norma para la próxima edición, en futuro. Empieza con «Quien».', accept: ['Quien pida un comentario lo recibirá', 'Quien pida un comentario, lo recibirá'] },
            { prompt: 'Elena: «Votaré la opción que prefieres» (Rodrigo ya le ha dicho cuál prefiere).', instruction: 'Ahora Rodrigo todavía no ha dicho qué opción prefiere. Escribe la frase de Elena.', accept: ['Votaré la opción que prefieras'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta una norma real de su trabajo o de su comunidad de vecinos con «los que…» y «quien…», y después habla de las personas concretas que la incumplieron la última vez.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Elena en la radio', coach: 'Primero la idea; después, los relativos. First the gist, then the relatives.',
      steps: [
        { title: 'Las bases, en antena · The rules, on air', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo para qué habla Elena. Segunda escucha: tu alumno anota cada relativa y dice si el referente está identificado o no. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada relativa y decide: ¿referente identificado o no? (Listen twice: gist, then details.)' } },
          { kind: 'listen', title: 'Elena Robles en Radio Valdeluz', channel: 'RADIO VALDELUZ · PROGRAMA CULTURAL «HOJA EN BLANCO»', src: '/audio/grammar-live/469.mp3',
            before: 'Al día siguiente del fallo, Elena habla en la radio local. ¿De qué crees que hablará: del ganador, de las normas del año que viene, de consejos para escribir…? (The day after the verdict, Elena speaks on local radio. What do you think she will talk about?)',
            gist: { prompt: '¿Para qué habla Elena en la radio? · Why is Elena on the radio?', options: ['Para presentar las bases de la próxima edición y dar un consejo a los participantes.', 'Para pedir disculpas a los autores que llegaron tarde.', 'Para explicar por qué ganó «Agua de marzo».'], answer: 0, why: '«Hoy vengo a hablar de la próxima edición, porque cambian algunas cosas», y termina con un consejo.', en: 'What is the main purpose of Elena’s talk?' },
            details: [
              { prompt: '¿Qué pasará con los relatos que lleguen después del 30 de abril?', options: ['Se leerán el año siguiente.', 'Se leerán, pero sin opción a premio.', 'No se leerán, sin excepciones.'], answer: 2, why: '«Los relatos que lleguen después no se leerán, sin excepciones.»', en: 'What will happen to late entries?' },
              { prompt: '¿Qué dice Elena de los relatos que llegaron tarde este año?', options: ['Que eran todos flojos.', 'Que uno de ellos era excelente.', 'Que los va a publicar igualmente.'], answer: 1, why: '«Uno de los que llegaron tarde era excelente.»', en: 'What does she say about this year’s late entries?' },
              { prompt: '¿Cuál es la novedad que más ilusión le hace?', options: ['Que los participantes que lo pidan recibirán un comentario del jurado.', 'Un premio en dinero más alto.', 'Un tema obligatorio nuevo.'], answer: 0, why: '«Cuantos participantes lo pidan recibirán un breve comentario del jurado.»', en: 'Which new feature is she most excited about?' },
              { prompt: '¿Por qué cita Elena el refrán «quien mucho abarca, poco aprieta»?', options: ['Porque un relato breve tiene que elegir y no puede contarlo todo.', 'Porque el plazo es muy corto.', 'Porque los relatos largos ganan más.'], answer: 0, why: '«Un relato breve no puede contarlo todo; tiene que elegir.»', en: 'Why does she quote the proverb?' },
            ],
            transcript: 'Buenas tardes y gracias por invitarme. Soy Elena Robles, presidenta del jurado del Premio Valdeluz de relato breve. Ayer anunciamos el ganador, «Agua de marzo», y les confieso que es [[lo mejor que haya leído en mucho tiempo|blue]]. Pero hoy vengo a hablar de la próxima edición, porque cambian algunas cosas. [[Quien quiera participar|blue]] tendrá de plazo hasta el treinta de abril, y [[los relatos que lleguen después|blue]] no se leerán, sin excepciones. Lo digo con pena, porque este año [[uno de los que llegaron tarde|teal]] era excelente. Tampoco habrá tema obligatorio; de hecho, [[no hay ningún asunto que esté prohibido|violet]], siempre que el texto sea inédito. [[El que gane|blue]] verá su relato publicado y pasará un mes en nuestra residencia de escritura. Y una novedad que me hace especial ilusión: [[cuantos participantes lo pidan|blue]] recibirán un breve comentario del jurado. Mi consejo es sencillo: escriban sobre [[lo que de verdad les importe|blue]], no sobre lo que crean que nos gusta a nosotros. Ya lo dice el refrán: [[quien mucho abarca, poco aprieta|orange]]. Un relato breve no puede contarlo todo; tiene que elegir. Las bases completas están en la web de la biblioteca. Mucha suerte a todos.',
            reply: { teacher: 'Tú eres la locutora del programa. Tu alumno llama a la radio como futuro participante y hace dos preguntas sobre las bases; tú respondes con relativas como «los que…», «quien…». Después cambian los papeles.', self: 'Imagina que llamas a la radio como futuro participante. Haz dos preguntas sobre las bases y responde tú como Elena, con «los que…» y «quien…». (Call in as a future participant: ask and answer.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Normas, valoraciones y refranes', coach: 'Decide qué sabes del referente. Decide what you know about the referent.',
      steps: [
        { title: 'Tu mundo, tus normas · Your world, your rules', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y repreguntas. Tu alumno responde con su experiencia real. Si usa un modo que cambia el sentido, tú preguntas: «¿Sabes ya quién es?» o «¿Existe?».', self: 'Responde en voz alta a cada tarjeta con tu experiencia real. Antes de cada relativa, pregúntate: ¿sé quién o cuál es? (Answer aloud with your real experience.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué normas hay en tu trabajo, en tu clase o en tu edificio para casos que todavía no han pasado? · What rules apply where you work or live to cases that haven’t happened yet?', followUps: ['¿Y qué pasó la última vez con los que no la cumplieron? (And what happened to those who broke it last time?)', '¿Te parece justa esa norma? (Is it fair?)'], phrases: ['[[Los que lleguen|blue]] tarde…', '[[Quien necesite|blue]]… tiene que…', 'La última vez, [[los que no avisaron|teal]]…'], hint: 'La norma, con subjuntivo; las personas concretas de la última vez, con indicativo.', example: 'En mi oficina, quien quiera teletrabajar un viernes tiene que avisar el lunes. La última vez, los que no avisaron tuvieron que venir.', next: 'Ahora, tus valoraciones.', teacher: 'Insiste en el contraste: la norma (lleguen) y el caso real (llegaron) con el mismo antecedente.' },
            { q: '¿Cuál es el mejor libro, película o serie que hayas visto o leído nunca? ¿Y el mejor de este año? · The best book, film or series ever, and the best this year?', followUps: ['¿Por qué ese y no otro? (Why that one?)', '¿Hay alguno que todo el mundo adore y a ti no te guste? (One everyone loves but you don’t?)'], phrases: ['Es [[lo mejor que haya visto|blue]] nunca.', 'Es [[el mejor que he leído|teal]] este año.', 'Es [[la primera vez que|teal]]…'], hint: 'Los dos modos son correctos con el superlativo: el subjuntivo pondera, el indicativo constata.', example: 'Es la mejor serie que haya visto nunca, de verdad. Este año, el mejor libro que he leído es una novela corta sobre una familia de pescadores.', next: 'Ahora, lo que no existe.' },
            { q: 'Piensa en algo que buscas y no encuentras en tu ciudad: un tipo de café, un servicio, un lugar. · Something you look for and can’t find in your town.', followUps: ['¿Y conoces algún sitio en otra ciudad donde lo haya? (Somewhere else that has it?)', '¿Hay alguien que pueda abrir algo así? (Could anyone open one?)'], phrases: ['No conozco [[ningún sitio donde se pueda|violet]]…', 'No hay [[nadie que venda|violet]]…', 'En cambio, en… hay un café que [[abre|teal]]…'], hint: 'Si niegas que exista, subjuntivo. Si hablas de un lugar concreto que conoces, indicativo.', example: 'En mi barrio no hay ningún café donde se pueda trabajar tranquilo. En cambio, cerca de la estación hay uno que abre a las siete y tiene enchufes en todas las mesas.', next: 'Ahora, los refranes.' },
            { q: '¿Qué refranes con «quien» o «el que» conoces en español? ¿Tienen equivalente en tu lengua? · Proverbs with “quien / el que” and their equivalents.', followUps: ['¿Cuándo lo usarías? (When would you use it?)', '¿Estás de acuerdo con lo que dice? (Do you agree?)'], phrases: ['[[Quien calla, otorga|orange]].', '[[El que avisa|orange]] no es traidor.', 'En mi lengua se dice algo parecido: …'], hint: 'Los refranes conservan su forma fija, en indicativo.', example: 'Me gusta «el que avisa no es traidor»: en inglés diríamos algo como «forewarned is forearmed». Lo uso cuando ya he advertido a alguien y luego se queja.', next: 'Ahora, un consejo.', teacher: 'Si tu alumno conoce otro refrán, comprueban juntos su forma exacta antes de darlo por bueno.' },
            { q: 'Un amigo duda entre dos ofertas de trabajo y te pide consejo. Responde con «lo que» e indicativo o subjuntivo, según lo que sepas. · A friend can’t choose between two job offers.', followUps: ['¿Y si ya te ha dicho cuál prefiere? (What if he’s already told you?)', '¿Y si no tienes ni idea de lo que quiere? (And if you have no idea?)'], phrases: ['Haz [[lo que quieras|blue]]: …', 'Si ya sabes qué quieres, haz [[lo que quieres|teal]].', '[[Lo que decidas|blue]] estará bien.'], hint: '«Lo que quieras» = lo que sea; «lo que quieres» = eso que ya sé que quieres.', example: 'Mira, haz lo que quieras, pero piénsalo bien. Y si de verdad lo que quieres es vivir junto al mar, ya sabes cuál elegir: lo que decidas estará bien.' },
            { q: 'Ahora tú eres del jurado de un concurso (de cocina, fotografía o relato). Anuncia las reglas y el premio. · You are on a contest jury: announce the rules.', followUps: ['¿Qué pasa con los que no cumplan las reglas? (Those who break the rules?)', '¿Qué se llevará el que gane? (The winner?)'], phrases: ['[[Quien quiera participar|blue]]…', '[[El que gane|blue]] se llevará…', '[[Cuantos|blue]]… [[lo pidan|blue]]…'], hint: 'Normas para casos futuros: subjuntivo. Una sola forma formal con «cuantos» basta.', example: 'Quien quiera participar tendrá que enviar tres fotos antes del día 15. Las que superen los diez megas no se aceptarán. El que gane se llevará una exposición en el centro cultural, y cuantos lo pidan recibirán un comentario.', teacher: 'Reacciona como un participante: «¿Y si llego tarde?», «¿Y los que ya se han apuntado?». Así tu alumno alterna modo según el referente.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes con un error de modo a propósito en una relativa; tu alumno lo detecta y lo explica.', self: 'Ahora haz tú las preguntas en voz alta y responde otra vez, pero con un referente distinto: si antes era concreto, que sea cualquiera, y al revés. (Ask again and swap the referent type.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El correo del jurado', coach: 'Lo que ya pasó y lo que pasará. What happened and what will.',
      steps: [
        { title: 'A todos los participantes · To all participants', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada relativa: ¿el referente está identificado o no? Tu alumno justifica cada modo.', self: 'Escribe el correo y toca «Revisar mi texto». Después repasa cada relativa: ¿referente identificado o no? (Write the email, then check each relative clause.)' } },
          { kind: 'write', title: 'Fallo y bases nuevas · Verdict and new rules', situation: 'Eres Elena Robles (o el jurado de otro concurso que conozcas). Escribe un correo formal a todos los participantes: anuncia el ganador, agradece la participación y adelanta las bases de la próxima edición. (You are the jury chair, or on the jury of another contest. Write a formal email to all participants: announce the winner, thank them and preview next year’s rules.)', task: [
            'Anuncia el ganador con un superlativo, «el único» o «la primera vez que», y decide el modo según lo que quieras expresar. (Announce the winner with a superlative or “único”.)',
            'Da al menos tres normas de la próxima edición con relativas no identificadas: quien, los que, el que, cuantos + subjuntivo. (At least three rules for next year.)',
            'Incluye una relativa con antecedente negado: «no hay / no habrá ningún… que». (One negated antecedent.)',
            'Agradece a los participantes de este año con una relativa identificada en indicativo. (Thank this year’s participants.)',
            'Mantén el registro formal (ustedes) y cierra con una despedida adecuada. (Formal register and closing.)',
          ], starters: ['Estimados participantes:', 'Nos complace comunicarles que…', 'Es, sin exagerar, el mejor relato que…', 'Quien desee participar en la próxima edición…', 'Los textos que…', 'No se aceptará ningún relato que…', 'Gracias a todos los que…', 'Un cordial saludo,'],
            words: ['quien desee', 'los que superen', 'el que gane', 'cuantos lo soliciten', 'no hay ningún… que', 'el único… que', 'la primera vez que', 'los que participaron'],
            model: 'Estimados participantes: Nos complace comunicarles que el jurado del Premio Valdeluz ha elegido como ganador «Agua de marzo», de Nora Ibarra. Es, sin exagerar, [[el mejor relato que hayamos recibido|blue]] en doce ediciones, y [[el único que ha convencido|teal]] por unanimidad a los tres miembros del jurado. Además, [[es la primera vez que|teal]] concedemos una mención especial, que será para «La casa del faro». En cuanto a la próxima edición, [[quien desee participar|blue]] podrá enviar su texto hasta el 30 de abril. [[Los relatos que superen|blue]] las tres mil palabras o lleguen fuera de plazo no se tendrán en cuenta, y [[no habrá ninguna excepción que|violet]] altere esta norma. [[El que gane|blue]] verá su relato publicado, y [[cuantos lo soliciten|blue]] recibirán un breve comentario del jurado. Por último, gracias de corazón a [[todos los que participaron|teal]] este año: leer sus textos ha sido un privilegio. Un cordial saludo, Elena Robles, presidenta del jurado.',
            minWords: 120,
            checks: [
              { label: 'Una relativa libre o con artículo: quien, los que, el que… (a free or headed relative)', pattern: '(?<!\\p{L})(?:quienes?|cuant[oa]s?|(?:el|la|los|las|todo\\s+el|todos\\s+los)\\s+que)(?!\\p{L})', tip: 'Da normas para casos futuros: «Quien desee participar…», «Los relatos que superen…».' },
              { label: 'Un antecedente negado: ningún, ninguna, nadie, nada (a negated antecedent)', pattern: '(?<!\\p{L})(?:ningún|ninguna|nadie|nada)(?!\\p{L})', tip: 'Añade una frase como «No habrá ninguna excepción que altere esta norma».' },
              { label: 'Un superlativo, «único» o «primera vez» (a superlative or “único”)', pattern: '(?<!\\p{L})(?:mejor|peor|únic[oa]s?|primera\\s+vez|más\\s+\\p{L}+\\s+que)(?!\\p{L})', tip: 'Anuncia el ganador con «el mejor relato que…», «el único que…» o «es la primera vez que…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})quienes?\\s+\\p{L}+(?:rá|rán)(?!\\p{L})', why: '«Quien» con un futuro de indicativo suele ser un calco del inglés: para un caso futuro, **quien desee**, **quien gane**, no «quien deseará».' },
              { pattern: '(?<!\\p{L})(?:el|la|los|las)\\s+que\\s+\\p{L}+(?:rá|rán)(?!\\p{L})', why: 'Revisa esta relativa: si todavía no sabes quién o cuál será, usa subjuntivo (**los que lleguen**, **el que gane**). El futuro solo encaja si el referente ya está identificado.' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What are you taking away today?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'teal', label: 'IDENTIFICADO → INDICATIVO', formula: 'el / los que · quien · lo que · único + indicativo', example: 'Los relatos que llegaron tarde se devolvieron.', caption: 'un referente real, que puedes señalar', en: 'a real referent you can point to' },
            { tone: 'blue', label: 'NO IDENTIFICADO → SUBJUNTIVO', formula: 'el que · quien · lo que · cuanto + subjuntivo', example: 'El que gane se publicará. Haz lo que quieras.', caption: 'quien sea, lo que sea, si lo hay: normas, planes, invitaciones', en: 'whoever, whatever, if any: rules, plans, invitations' },
            { tone: 'violet', label: 'INEXISTENTE → SUBJUNTIVO', formula: 'no hay / ningún / nadie / ¿hay alguien…? + que + subjuntivo', example: 'No hay nada en él que me sorprenda.', caption: 'se niega o se cuestiona que exista; un «no» sobre un referente conocido no basta', en: 'existence denied or questioned; a “no” about a known referent is not enough' },
            { tone: 'orange', label: 'REFRANES → INDICATIVO FIJO', formula: 'quien calla otorga · el que avisa no es traidor', example: 'Quien bien te quiere te hará llorar.', caption: 'definen un tipo de persona; no cambian de modo', en: 'they define a type of person; their mood never changes' },
            { tone: 'blue', label: 'SUPERLATIVO · ALTERNANCIA', formula: 'el mejor… que he leído / que haya leído', example: 'Es lo mejor que he leído / haya leído en años.', caption: 'los dos son correctos: constatar o ponderar; «la primera vez que» + indicativo', en: 'both correct: stating or emphasising; “la primera vez que” takes the indicative' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'La palabra no decide el modo: «el que», «quien», «lo que» o «único» admiten los dos. Decide lo que **sabes del referente**: si lo identificas, indicativo; si es quien sea, lo que sea o puede no existir, subjuntivo. Los refranes son la excepción fija, y con superlativos eliges entre constatar y ponderar.', en: 'The word does not choose the mood: “el que”, “quien”, “lo que” or “único” take either. What decides is what you know about the referent: if you can identify it, indicative; if it is whoever, whatever, or may not exist, subjunctive. Proverbs are the fixed exception, and with superlatives you choose between stating and emphasising.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Los empleados que ___ teletrabajar los viernes deberán avisar con una semana de antelación.', options: ['quieran', 'querrán', 'quieren'], answer: 0, why: 'Norma para cualquier empleado que lo quiera: subjuntivo.', en: 'Employees who wish to work from home on Fridays must give a week’s notice.' },
            { prompt: 'Ayer por fin conocí a la vecina que ___ en el tercero.', options: ['vive', 'viviera', 'viva'], answer: 0, why: 'Una persona concreta: indicativo.', en: 'Yesterday I finally met the neighbour who lives on the third floor.' },
            { prompt: 'En este barrio no hay ninguna farmacia que ___ abierta por la noche.', options: ['está', 'estará', 'esté'], answer: 2, why: '«No hay ninguna…» niega la existencia: subjuntivo.', en: 'There’s no pharmacy in this area that’s open at night.' },
            { prompt: 'Ya lo dice el refrán: quien ___ el último ríe mejor.', options: ['ríe', 'ría', 'reirá'], answer: 0, why: 'Refrán: indicativo fijo.', en: 'Proverb: he who laughs last laughs best.' },
            { prompt: 'Es la primera vez que ___ a esta ciudad y ya me encanta.', options: ['vengo', 'vendré', 'venga'], answer: 0, why: '«La primera vez que» + hecho real: indicativo.', en: 'It’s the first time I’ve come to this city and I already love it.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un concurso de cocina.', blocks: [
          { kind: 'lead', text: 'El centro cultural de Valdeluz organiza un concurso de cocina tradicional. Este año ya pasó; ahora escribes las normas del año que viene a partir de lo que ocurrió.', en: 'The Valdeluz cultural centre runs a traditional cooking contest. This year’s is over; now you write next year’s rules based on what happened.' },
          { kind: 'rewrite', title: 'El concurso de cocina · The cooking contest', items: [
            { prompt: 'Este año, los cocineros que trajeron ingredientes ya cocinados quedaron eliminados.', instruction: 'Escribe la norma para el año que viene, en futuro. Empieza con «Los cocineros que».', accept: ['Los cocineros que traigan ingredientes ya cocinados quedarán eliminados'] },
            { prompt: 'Este año, el que ganó se llevó una cena para dos.', instruction: 'Escribe la norma para el año que viene, en futuro. Empieza con «El que».', accept: ['El que gane se llevará una cena para dos'] },
            { prompt: 'Este año, todos los que lo pidieron recibieron la receta ganadora.', instruction: 'Escribe la norma en registro formal, en futuro. Empieza con «Cuantos».', accept: ['Cuantos lo pidan recibirán la receta ganadora', 'Cuantos la pidan recibirán la receta ganadora', 'Cuantos lo soliciten recibirán la receta ganadora'] },
          ] },
        ] },
        { title: 'Ampliación · Registro culto y formas antiguas · Formal register and old forms', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: relativas que vas a leer en textos legales, avisos oficiales y prosa cuidada.', en: 'For strong students or spare time: relative clauses you will meet in legal texts, official notices and careful prose.' },
          { kind: 'choice', title: 'Lee y decide · Read and decide', items: [
            { prompt: '«Cuanto digas podrá ser utilizado en tu contra.» ¿Qué significa «cuanto»?', options: ['Todo lo que (registro formal).', 'Cuánto, con valor de cantidad.', 'Cuando.'], answer: 0, why: '«Cuanto» relativo = todo lo que. Con subjuntivo, cualquier cosa que digas.', en: 'Relative “cuanto” means “everything that”, in a formal register.' },
            { prompt: 'Un reglamento antiguo dice: «El socio que no pagare la cuota será dado de baja». ¿Qué es «pagare»?', options: ['Un condicional.', 'Un error por «pagara».', 'Futuro de subjuntivo, propio de textos jurídicos antiguos; hoy se dice «pague».'], answer: 2, why: 'Lo verás en la clase 202. Hoy solo sobrevive en textos jurídicos y fórmulas: lo reconoces, no lo usas.', en: 'An old legal form (future subjunctive): today you would write “pague”.' },
            { prompt: 'Coloquial: «Al que le interese, que me escriba». ¿Cuál es el equivalente formal correcto en un aviso?', options: ['Los cuales estén interesados pueden dirigirse a la secretaría.', 'Quien estén interesados puede dirigirse a la secretaría.', 'Quienes estén interesados pueden dirigirse a la secretaría.'], answer: 2, why: '«Quienes» concuerda en plural con el verbo; «los cuales» no introduce relativas sin antecedente.', en: 'Which is the correct formal version for a notice?' },
            { prompt: '«Es lo mejor que me ha pasado nunca» / «Es lo mejor que me haya pasado nunca».', options: ['Las dos son correctas: la primera lo presenta como un hecho de tu vida; la segunda pone el acento en la valoración y es frecuente en un registro cuidado.', 'Solo la segunda es correcta, porque hay un superlativo.', 'Solo la primera es correcta.'], answer: 0, why: 'Con superlativos alternan los dos modos; no es un error elegir uno u otro.', en: 'With superlatives both moods are correct; the nuance changes.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca en un aviso oficial o en un reglamento una relativa con «quienes», «cuantos» o «el que» y la reformula en lengua coloquial.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 170 · Alternancias en concesivas con valor pragmático', text: 'Ya eliges el modo según lo que sabes del referente: «los que **llegaron**» frente a «los que **lleguen**», «lo mejor que he leído / haya leído». En la clase 170 aplicas esa misma lógica a la concesión: «Aunque **es** buen relato, no ganará» frente a «Aunque **sea** buen relato, no ganará», donde el subjuntivo puede retomar un hecho conocido para quitarle importancia. Es el paso natural: el modo como herramienta para presentar la información.', en: 'You now choose the mood according to what you know about the referent. In class 170 you apply the same logic to concession: “aunque es” versus “aunque sea”, where the subjunctive can even take up a known fact in order to play it down. It is the natural next step: mood as a tool for how you present information.', href: '/gramatica/alternancias-en-concesivas-con-valor-pragmatico', label: 'Ir a la clase 170' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué es lo mejor que has hecho este año? ¿Y lo mejor que hayas hecho nunca?». Tu alumno responde y explica el matiz. Tarea: escribir el correo de Escribir sobre un concurso o una convocatoria real que conozca.' },
        ] },
      ],
    },
  ],
};
