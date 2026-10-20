import type { LiveLesson } from '../types';

/**
 * Lesson 458 · B2 · Perífrasis de obligación e inferencia (course unit G158).
 * Builds on G040 (lesson 340: tener que + infinitivo) and G080 (lesson 380: hay
 * que, deber, tener que; «no tienes que» vs «no debes»; deber de only as a preview).
 * One scene runs through the class: Irene Salvat has bought an old apartment and
 * is renovating it with her architect, Hugo Lema (tú). A damp stain in the ceiling,
 * a wall that cannot come down and a cupboard full of old sheet music make them
 * deduce as much as they plan. The upstairs neighbour, señor Paredes, and the
 * building manager, Ximena Rojas, are addressed with usted. Explorar: Irene and
 * Hugo on site. Escuchar: Ximena's voicemail (es-CO-SalomeNeural). Escribir:
 * Irene's email to the neighbours.
 * Content: deber + infinitivo (obligation) vs deber de + infinitivo (inference), as
 * the DPD states it (deber without «de» is also accepted for inference; «deber de»
 * for obligation is advised against); tenses (debía de ser, debió de olvidarse,
 * debe de haber + participio); tener que for confident inference (tiene que estar
 * en casa, tiene que haber una fuga, tenía que ser él); a scale of certainty with
 * the future of probability only as a preview (class 161); haber de + infinitivo
 * (formal / written obligation; frequent in Mexican speech for inference: ha de
 * estar); impersonal haber que in every tense (hubo que, había que, habrá que,
 * habría que, haya que) and «debe de haber» always singular; venir a + infinitivo
 * (approximation: viene a costar; equivalence: viene a ser); tener que vs deber
 * (necessity vs duty) and softening with the conditional (deberías, tendrías que,
 * habría que). Ampliación: «deber» ambiguity, debió de (supposition) vs debió /
 * debería haber (reproach), vino a decir.
 */
export const lesson: LiveLesson = {
  id: 458,
  level: 'B2',
  title: 'Perífrasis de obligación e inferencia',
  subtitle: 'Planificar una reforma y deducir lo que no se ve: distinguir «debe» y «debe de», y usar haber de, hay que y venir a.',
  legend: [
    { tone: 'orange', label: 'OBLIGACIÓN · deber, tener que, haber de, hay que (duty, necessity)' },
    { tone: 'blue', label: 'INFERENCIA · deber de, tener que (deduces from clues)' },
    { tone: 'teal', label: 'APROXIMACIÓN · venir a + infinitivo (roughly)' },
    { tone: 'violet', label: 'SUAVIZAR · deberías, tendrías que, habría que (softened advice)' },
  ],
  optionNotes: {
    'debe que': '«Deber» nunca lleva «que» delante del infinitivo: «debe estar» (obligación o suposición) o «debe de estar» (suposición).',
    'habían que': '«Haber que» es impersonal: siempre en tercera persona del singular. «Había que», nunca «habían que».',
    'hubieron que': '«Haber que» es impersonal: «hubo que», nunca «hubieron que».',
    'habrán que': '«Haber que» es impersonal: «habrá que», nunca «habrán que».',
    'ha que': '«Haber de» lleva «de»: «ha de pedir». Con «que» solo existe la forma impersonal: «hay que pedir».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Lo que hay que hacer y lo que se deduce', coach: '¿Una obligación o una deducción? Duty or deduction?',
      steps: [
        { title: 'Una reforma con sorpresas · A renovation full of surprises', blocks: [
          { kind: 'lead', text: 'Irene Salvat acaba de comprar un apartamento de los años cincuenta y lo está reformando con su arquitecto, Hugo Lema. En la obra pasan dos cosas a la vez: hay **obligaciones** (permisos, horarios, presupuestos) y hay **pistas** que obligan a deducir (una mancha en el techo, un armario lleno de partituras). En la clase 080 usaste hay que, tener que y deber para obligar y aconsejar. Hoy verás que algunas de esas mismas perífrasis sirven también para **deducir**, y aprenderás otras nuevas: deber de, haber de y venir a.', en: 'Irene Salvat has just bought a 1950s apartment and is renovating it with her architect, Hugo Lema. On site, two things happen at once: there are obligations (permits, hours, quotes) and there are clues that force you to draw conclusions. In class 080 you used hay que, tener que and deber to oblige and advise. Today you will see that some of those same verb phrases also express deduction, and you will learn new ones: deber de, haber de and venir a.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de la obra. Tu alumno dice en cuál alguien está obligado a algo y en cuáles el hablante deduce algo, y con qué grado de seguridad.', self: 'Lee las tres frases en voz alta. ¿En cuál hay una obligación? ¿En cuáles se deduce algo? ¿Cuál suena más segura? (Which one is an obligation, which ones are deductions, and which one sounds more certain?)' } },
          { kind: 'compare', title: 'Tres frases en la obra · Three sentences on site', columns: [
            { tone: 'orange', label: 'OBLIGACIÓN', sentence: '[[Debemos pedir|orange]] permiso antes de tirar ningún muro.', idea: 'Es una norma: no hay opción.', en: 'A duty: a rule they must follow before knocking down any wall.' },
            { tone: 'blue', label: 'SUPOSICIÓN', sentence: 'El dueño anterior [[debía de ser|blue]] músico: hay partituras por todas partes.', idea: 'Irene no lo sabe: lo supone a partir de una pista.', en: 'A guess based on a clue: “he must have been a musician”. Irene does not know for sure.' },
            { tone: 'blue', label: 'DEDUCCIÓN SEGURA', sentence: 'Esta pared [[tiene que ser|blue]] de carga: mide cuarenta centímetros.', idea: 'Hugo está casi seguro: la prueba es muy clara.', en: 'A confident deduction: the evidence is so clear that Hugo is almost certain.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El dueño anterior debía de ser músico». ¿Qué hace Irene?', options: ['Dice que el dueño estaba obligado a tocar música.', 'Cuenta un hecho que conoce con seguridad.', 'Supone algo a partir de una pista.'], answer: 2, why: '«Debía de ser» expresa una suposición: Irene lo deduce de las partituras.', en: 'Irene is guessing from the sheet music, not stating a known fact.' },
            { prompt: '¿Qué frase expresa una obligación?', options: ['El dueño anterior debía de ser músico.', 'Debemos pedir permiso antes de tirar ningún muro.', 'Esta pared tiene que ser de carga.'], answer: 1, why: '«Debemos pedir», sin «de», presenta lo que es obligatorio. Las otras dos deducen algo.', en: 'Which sentence expresses an obligation?' },
          ] },
        ] },
        { title: 'Deber y deber de · Duty or guess', mascot: '/brand/mascot/studying.webp', coach: 'Una preposición cambia el sentido. One preposition changes the meaning.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'DEBER + INFINITIVO / DEBER DE + INFINITIVO', question: '¿Hablas de lo que es obligatorio o de lo que supones?', en: 'The standard keeps two meanings apart: “deber + infinitive” for obligation (what is required or right) and “deber de + infinitive” for supposition (what is probably true). It works in every tense: “debía de tener” = he probably had; “debió de olvidarse” = she probably forgot.', formula: ['deber + infinitivo → obligación, lo correcto', 'deber de + infinitivo → suposición, probabilidad'],
            meaning: 'La norma separa los dos sentidos: **deber + infinitivo** expresa obligación o lo que es correcto; **deber de + infinitivo** expresa una suposición: lo que probablemente es verdad. Funciona en todos los tiempos.',
            examples: [
              { es: 'Los vecinos [[deben respetar|orange]] el horario de las obras.', en: 'Neighbours must respect the building-work hours: a rule.' },
              { es: 'Estos azulejos [[deben de tener|blue]] setenta años.', en: 'These tiles must be about seventy years old: an estimate from what she sees.' },
              { es: 'La señora del quinto [[debió de oír|blue]] el ruido, porque bajó a preguntar.', en: 'The lady on the fifth floor must have heard the noise, because she came down to ask.' },
              { es: 'El técnico no ha venido: [[debe de haber tenido|blue]] un problema en otra obra.', en: 'The technician hasn’t come: he must have run into a problem on another job (an inference about the past, with “haber” + participle).' },
            ],
            note: 'Para deducir algo **anterior** desde el presente: **debe de haber + participio** («debe de haber salido» = probablemente ha salido).' },
          { kind: 'tip', icon: '📘', title: 'Lo que dice la norma · What the standard says', text: 'Según el «Diccionario panhispánico de dudas» (RAE-ASALE): para la **obligación**, la norma culta pide **deber** sin «de» («Debes firmar hoy»); «deber de» con este sentido se oye mucho, pero se desaconseja. Para la **suposición**, lo recomendado es **deber de**, aunque también se acepta **deber** sin «de» («Debe estar cansada»). Consejo práctico: pon «de» solo cuando supones; así nunca te equivocas.', en: 'According to the RAE-ASALE guide to usage: for obligation, educated usage requires “deber” without “de”; “deber de” with that meaning is common in speech but advised against. For supposition, “deber de” is recommended, although “deber” alone is also accepted. Practical rule: add “de” only when you are guessing, and you will always be correct.' },
          { kind: 'table', title: 'En varios tiempos · Across tenses', head: ['Tiempo', 'Obligación (deber)', 'Suposición (deber de)'], rows: [
            ['presente', '[[Debes avisar|orange]] a la administradora.', 'Ya [[deben de ser|blue]] las seis.'],
            ['imperfecto', 'Antes [[debíamos pedir|orange]] tres presupuestos.', 'El dueño [[debía de tener|blue]] muchos libros.'],
            ['indefinido', '[[Debiste avisarme|orange]] (reproche: no lo hiciste).', '[[Debió de olvidarse|blue]] de la cita.'],
            ['condicional', '[[Deberías descansar|violet]] un poco.', '—'],
            ['+ haber + participio', '[[Deberías haber llamado|violet]] (reproche, clase 134).', '[[Debe de haber llovido|blue]]: el suelo está mojado.'],
          ], note: 'Con el condicional, «deber» casi siempre aconseja: «deberías» = te recomiendo. Con valor de suposición se usan sobre todo el presente, el imperfecto y el indefinido.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Hugo ve que la pintura del techo se cae a trozos.', prompt: 'Aquí ___ haber humedad desde hace años.', options: ['debe de', 'debe que', 'hay que'], answer: 0, why: 'Hugo supone a partir de una pista: debe de + infinitivo. «Hay que» expresaría una necesidad.', en: 'There must have been damp here for years: Hugo is inferring from what he sees.' },
            { context: 'Es una norma del edificio.', prompt: 'Los propietarios ___ informar de las obras a la administración.', options: ['deben de', 'deben', 'debe que'], answer: 1, why: 'Obligación: deben + infinitivo, sin «de». «Deben de» se entendería como suposición.', en: 'Owners must notify the building management of any work: a rule.' },
          ] },
        ] },
        { title: 'Tener que para deducir · Tener que for deductions', mascot: '/brand/mascot/speaking.webp', coach: 'Cuanto más clara la prueba, más fuerte la deducción. The clearer the clue, the stronger the claim.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'TENER QUE: DEDUCCIÓN CASI SEGURA', question: '¿Las pistas son tan claras que casi no hay duda?', en: '“Tener que” is not only about obligation. With verbs like ser, estar, haber or venir, it can express a conclusion you are almost sure of: “tiene que estar en casa” = she must be at home (the light is on). “Tenía que ser él” means “of course it was him”: what was to be expected.', formula: ['tener que + ser / estar / haber / venir… → deducción casi segura', 'tenía que ser + persona o momento → «claro, era lo esperable»'],
            meaning: '**Tener que** no solo obliga: con verbos como ser, estar, haber o venir puede expresar una **conclusión casi segura**, más firme que «deber de». «**Tenía que ser** él / hoy» comenta que algo era previsible, a menudo con resignación o ironía.',
            examples: [
              { es: 'Con este olor, [[tiene que haber|blue]] una fuga detrás de los azulejos.', en: 'With this smell, there has to be a leak behind the tiles: Hugo is nearly certain.' },
              { es: 'Hay luz en el cuarto piso: los Paredes [[tienen que estar|blue]] en casa.', en: 'There’s a light on on the fourth floor: the Paredes family must be home.' },
              { es: '¿El ascensor, averiado el día de la mudanza? [[Tenía que ser|blue]] hoy.', en: 'The lift broken on moving day? Of course it had to be today (resigned irony).' },
            ],
            note: 'El contexto decide: «**Tienes que estar** aquí a las ocho» es una obligación; «**Tiene que estar** en casa: hay luz» es una deducción.' },
          { kind: 'table', title: '¿Cómo de seguro estás? · How sure are you?', head: ['Seguridad', 'Forma', 'Ejemplo'], rows: [
            ['casi seguro', '[[tener que|blue]] + infinitivo', 'La mancha [[tiene que venir|blue]] del piso de arriba.'],
            ['probable', '[[deber de|blue]] (o deber) + infinitivo', 'La mancha [[debe de venir|blue]] del piso de arriba.'],
            ['conjetura (clase 161)', 'futuro de probabilidad', 'La mancha vendrá del piso de arriba. (solo para reconocer)'],
            ['posible', 'puede que + subjuntivo (clase 094)', 'Puede que la mancha venga del piso de arriba.'],
          ], note: 'El futuro de probabilidad («vendrá» = probablemente viene) lo estudiarás en la clase 161. Hoy basta con reconocerlo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hugo no está nada seguro. ¿Qué frase encaja mejor con su duda?', options: ['Puede que sea una tubería rota, pero no lo sé.', 'Hay que ser una tubería rota.', 'Tiene que ser una tubería rota, sin duda.'], answer: 0, why: 'Con duda real encaja «puede que» (o «debe de»). «Tiene que ser… sin duda» expresa casi certeza; «hay que ser» es una necesidad impersonal y no tiene sentido aquí.', en: 'Hugo is not sure at all: which sentence fits his doubt?' },
            { prompt: 'Llaman a la puerta a las ocho en punto, como cada día. «___ ser Hugo: siempre es puntual».', options: ['Hay que', 'Tiene que', 'Tiene de'], answer: 1, why: 'Una deducción muy segura a partir de una costumbre: tiene que ser.', en: 'Someone knocks at eight sharp, as every day: it has to be Hugo.' },
          ] },
        ] },
        { title: 'Haber de y haber que · Formal duties, impersonal needs', mascot: '/autoestudio/mascot/noting.webp', coach: 'Registro formal y formas impersonales. Formal register and impersonal forms.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'HABER DE + INFINITIVO', question: '¿Lees un reglamento, unas instrucciones o un texto cuidado?', en: '“Haber de + infinitive” expresses obligation or necessity in a formal or written register: regulations, official instructions, literature. In everyday speech in Spain and many countries, people say “tener que”. In Mexico and parts of Central America, however, it is very common in conversation to make a guess: “ha de estar en su casa” = he must be at home.', formula: ['he / has / ha / hemos / habéis / han + de + infinitivo'],
            meaning: 'Expresa obligación o necesidad en **registro formal o escrito**: reglamentos, instrucciones oficiales, literatura. En la conversación de España y de muchos países se prefiere «tener que». En México y en parte de Centroamérica, en cambio, es muy frecuente en el habla diaria para **suponer**: «Ha de estar en su casa».',
            examples: [
              { es: 'Las obras [[han de realizarse|orange]] de lunes a viernes, de nueve a seis.', en: 'Building work is to be carried out Monday to Friday, nine to six: the wording of a regulation.' },
              { es: 'El propietario [[ha de comunicar|orange]] la fecha de inicio por escrito.', en: 'The owner must give the start date in writing.' },
              { es: '[[Has de saber|orange]] que este edificio tiene casi cien años.', en: 'You should know that this building is almost a hundred years old: solemn or literary.' },
              { es: 'México: «El técnico ya [[ha de estar|blue]] en camino».', en: 'Mexican Spanish: “The technician must be on his way by now” (a guess).' },
            ] },
          { kind: 'table', title: 'Haber que: impersonal en todos los tiempos · Impersonal in every tense', head: ['Tiempo', 'Forma', 'Ejemplo'], rows: [
            ['presente', '**hay que**', '[[Hay que|orange]] tapar los muebles.'],
            ['pretérito perfecto', '**ha habido que**', 'Esta semana [[ha habido que|orange]] cortar el agua dos veces.'],
            ['indefinido', '**hubo que**', 'En 2010 [[hubo que|orange]] cambiar el ascensor.'],
            ['imperfecto', '**había que**', 'Antes [[había que|orange]] subir el carbón a mano.'],
            ['futuro', '**habrá que**', '[[Habrá que|orange]] pedir otro presupuesto.'],
            ['condicional', '**habría que**', '[[Habría que|violet]] revisar toda la instalación.'],
            ['subjuntivo', '**haya que**', 'Avísennos cuando [[haya que|orange]] salir del apartamento.'],
          ], note: 'Siempre en **tercera persona del singular** y sin sujeto: *habían que, *hubieron que, *habrán que son errores. Lo mismo con «haber» existencial dentro de una perífrasis: «**debe de haber** dos fugas», «**tiene que haber** varias tuberías» (nunca *deben de haber dos fugas).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cuando compraron el edificio, ___ cambiar todas las ventanas.', options: ['hubieron que', 'han de que', 'hubo que'], answer: 2, why: '«Haber que» es impersonal: hubo que, en singular, aunque «ventanas» sea plural.', en: 'When they bought the building, all the windows had to be replaced.' },
            { context: 'Texto del reglamento del edificio.', prompt: 'Los residuos de obra ___ retirarse antes de las seis.', options: ['han de', 'deben de', 'hay que'], answer: 0, why: 'Registro formal y obligación: han de + infinitivo. «Deben de» es suposición y «hay que» no lleva sujeto.', en: 'Building waste is to be removed before six: regulation style.' },
          ] },
        ] },
        { title: 'Venir a y suavizar · Approximating and softening', mascot: '/brand/mascot/seated.webp', coach: 'Cifras aproximadas y consejos amables. Rough figures, gentle advice.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'VENIR A + INFINITIVO', question: '¿Das una cifra aproximada o resumes lo que algo equivale a ser?', en: '“Venir a + infinitive” gives an approximate figure (“viene a costar unos tres mil” = it comes to about three thousand) or says what something amounts to (“viene a ser lo mismo” = it amounts to the same thing). It sounds natural with costar, tener, durar, medir, ser and decir.', formula: ['venir a + costar / tener / durar / medir → cifra aproximada', 'venir a ser / venir a decir → equivale a, en resumen'],
            meaning: '**Venir a** + infinitivo da una **cifra aproximada** o dice a qué **equivale** algo. Suele ir con costar, tener, durar, medir, ser y decir, y a menudo con «unos», «más o menos», «casi».',
            examples: [
              { es: 'Arreglar el techo [[viene a costar|teal]] unos tres mil.', en: 'Fixing the ceiling comes to about three thousand.' },
              { es: 'El salón [[viene a medir|teal]] lo mismo que la cocina y el pasillo juntos.', en: 'The living room is about the same size as the kitchen and hallway put together.' },
              { es: 'Reparar la tubería o cambiarla [[viene a ser|teal]] lo mismo de caro.', en: 'Repairing the pipe or replacing it amounts to the same cost.' },
            ],
            note: 'No encaja con datos exactos: *«viene a costar exactamente 412». Si la cifra es exacta, «cuesta 412».' },
          { kind: 'compare', title: 'De la obligación al consejo · From obligation to advice', columns: [
            { tone: 'orange', label: 'DIRECTO', sentence: '[[Tienes que hablar|orange]] con el vecino hoy mismo.', idea: 'Necesidad clara; suena firme, casi una orden.', en: 'Direct: a clear necessity, close to an order.' },
            { tone: 'violet', label: 'CONSEJO', sentence: '[[Deberías hablar|violet]] con el vecino. / [[Tendrías que hablar|violet]] con él.', idea: 'Condicional: recomiendas sin imponer.', en: 'The conditional turns the obligation into a recommendation.' },
            { tone: 'violet', label: 'IMPERSONAL', sentence: '[[Habría que hablar|violet]] con el vecino.', idea: 'No señalas a nadie: propones algo para todos.', en: 'Impersonal and soft: you suggest it without pointing at anyone. Very useful with clients and neighbours.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Tener que y deber · Necessity and duty', text: '**Tener que** suele presentar una **necesidad** que viene de fuera: «Tengo que cortar el agua, la tubería pierde». **Deber** suena a **deber moral** o a norma: «Debo avisar a los vecinos, es lo correcto». En afirmativo están muy cerca, pero en negativo recuerda la clase 080: **no tienes que** = no es necesario; **no debes** = no está bien.', en: '“Tener que” usually presents a necessity imposed by circumstances; “deber” sounds like a moral duty or a rule. In the affirmative they are very close, but in the negative remember class 080: “no tienes que” = it is not necessary; “no debes” = it is not right.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La reforma completa ___ durar unos cuatro meses.', options: ['viene de', 'viene a', 'vienen a'], answer: 1, why: 'Cifra aproximada: viene a + durar. El sujeto es «la reforma», singular.', en: 'The full renovation should take about four months.' },
            { context: 'Irene habla con la administradora, con quien no tiene confianza.', prompt: '___ revisar las tuberías de todo el edificio, ¿no cree?', options: ['Habría que', 'Tiene que', 'Hay de'], answer: 0, why: '«Habría que» propone algo de forma impersonal y suave; es lo más adecuado con alguien a quien tratas de usted.', en: 'The pipes for the whole building ought to be checked, don’t you think?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿De o sin de? ¿Singular o plural? With or without de?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿la preposición, la concordancia o el sentido?', self: 'Lee cada frase y piensa qué falla: ¿la preposición, la concordancia o el sentido? Después toca para ver la corrección. (Is it the preposition, the agreement or the meaning?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Debes de firmar el presupuesto hoy.', right: 'Debes firmar el presupuesto hoy.', why: 'Es una obligación: deber sin «de». «Deber de» con este valor se oye, pero la norma lo desaconseja.' },
            { wrong: 'Habían que cambiar todas las tuberías.', right: 'Había que cambiar todas las tuberías.', why: '«Haber que» es impersonal: siempre en singular.' },
            { wrong: 'Deben de haber dos fugas en el baño.', right: 'Debe de haber dos fugas en el baño.', why: '«Haber» existencial no tiene sujeto, y el verbo que lo acompaña tampoco concuerda: debe de haber, tiene que haber.' },
            { wrong: 'Hemos que pedir permiso a los vecinos.', right: 'Hemos de pedir permiso. / Tenemos que pedir permiso.', why: '«Haber de» lleva «de». Con «que» solo existe la forma impersonal «hay que».' },
            { wrong: 'El vecino tiene que estar de viaje, pero no tengo ni idea.', right: 'El vecino debe de estar de viaje, pero no estoy segura.', why: 'Tener que deduce con mucha seguridad; con duda real, «debe de» o «puede que esté».' },
            { wrong: 'La reparación viene a costar exactamente 412.', right: 'La reparación viene a costar unos 400. / Cuesta exactamente 412.', why: '«Venir a» aproxima: no combina con cifras exactas.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En el sótano ___ haber unas cuarenta cajas.', options: ['deben que', 'debe de', 'deben de'], answer: 1, why: 'Con «haber» existencial, singular: debe de haber, aunque «cajas» sea plural.', en: 'There must be about forty boxes in the basement.' },
            { prompt: 'Para entrar con material, ___ dejar el ascensor en la planta baja.', options: ['habrá que', 'habrá de que', 'habrán que'], answer: 0, why: 'Impersonal en futuro: habrá que, en singular.', en: 'To bring materials in, the lift will have to be left on the ground floor.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno mira la sala en la que está y hace tres deducciones (con «debe de», «tiene que» y «debía de») y dice una norma del lugar con «hay que» o «ha de».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Visita a la obra', coach: 'Toca cada perífrasis marcada. Tap each marked verb phrase.',
      steps: [
        { title: 'Entre polvo y partituras · Dust and sheet music', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Hugo y tu alumno es Irene. Después tu alumno toca cada expresión marcada y dice si es obligación, deducción, aproximación o consejo.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y piensa: ¿obligación, deducción, aproximación o consejo? (Tap each marked phrase: obligation, deduction, approximation or advice?)' } },
          { kind: 'explore', title: 'Una mancha en el techo', setting: 'Martes por la mañana. Irene y Hugo revisan el apartamento con las paredes ya abiertas. Se tratan de tú. (Tuesday morning: Irene and her architect walk through the half-demolished apartment.)', lines: [
            { who: 'Hugo', text: 'Mira esa mancha del techo. [[Tiene que venir|blue]] del piso de arriba: por aquí no pasa ninguna tubería tuya.', en: 'Look at that stain on the ceiling. It has to be coming from upstairs: none of your pipes run through here.' },
            { who: 'Irene', text: '¿Del señor Paredes? Hace una semana que no lo veo. [[Debe de estar|blue]] en casa de su hija.', en: 'From señor Paredes? I haven’t seen him for a week. He’s probably staying at his daughter’s.' },
            { who: 'Hugo', text: 'En cualquier caso, [[habrá que avisar|orange]] a la administradora antes de tocar nada.', en: 'Either way, we’ll have to let the building manager know before touching anything.' },
            { who: 'Irene', text: 'De acuerdo. ¿Y esta pared? Me encantaría tirarla para ganar luz.', en: 'All right. And this wall? I’d love to knock it down to get more light.' },
            { who: 'Hugo', text: 'Imposible, mide cuarenta centímetros: es de carga seguro. Y según el reglamento, las obras [[han de hacerse|orange]] entre semana, de nueve a seis.', en: 'Impossible, it’s forty centimetres thick: it’s definitely load-bearing. And under the building rules, work must be done on weekdays, nine to six.' },
            { who: 'Irene', text: 'Entonces [[tendré que|orange]] cambiar el plano. ¿Y arreglar el techo?', en: 'Then I’ll have to change the plan. And what about fixing the ceiling?' },
            { who: 'Hugo', text: 'Depende de lo que encontremos, pero [[viene a costar|teal]] unos tres mil.', en: 'It depends on what we find, but it comes to about three thousand.' },
            { who: 'Irene', text: 'Mira este armario: está lleno de partituras antiguas. El dueño anterior [[debía de ser|blue]] músico.', en: 'Look at this cupboard: it’s full of old sheet music. The previous owner must have been a musician.' },
            { who: 'Hugo', text: 'O su mujer. Yo no las tiraría: [[deben de tener|blue]] valor para la familia. [[Deberías|violet]] guardarlas en una caja.', en: 'Or his wife. I wouldn’t throw them away: they probably matter to the family. You should keep them in a box.' },
            { who: 'Irene', text: 'Es que cuando firmé, [[hubo que|orange]] vaciar el apartamento en dos días y nadie miró los armarios.', en: 'The thing is, when I signed, the apartment had to be emptied in two days and nobody checked the cupboards.' },
            { who: 'Hugo', text: 'Pues [[habría que|violet]] llamar a la inmobiliaria para localizar a la familia.', en: 'Well, someone ought to call the estate agency to track down the family.' },
          ], notes: {
            'Tiene que venir': 'Tener que como deducción casi segura: Hugo lo concluye porque en ese techo no hay tuberías de Irene. No es una obligación.',
            'Debe de estar': 'Deber de + infinitivo: suposición. Irene no lo sabe; lo deduce de que no lo ve desde hace una semana. Es menos seguro que «tiene que estar».',
            'habrá que avisar': 'Haber que en futuro, impersonal: una necesidad que tienen por delante, sin decir quién la cumple. Siempre en singular.',
            'han de hacerse': 'Haber de + infinitivo: obligación en registro formal. Hugo repite casi literalmente el texto del reglamento.',
            'tendré que': 'Tener que en futuro: una necesidad que nace de la situación (no puede tirar la pared).',
            'viene a costar': 'Venir a + infinitivo: cifra aproximada. Va con «unos» y con «depende»: Hugo no da un precio exacto.',
            'debía de ser': 'Deber de en imperfecto: suposición sobre el pasado a partir de una pista (las partituras).',
            'deben de tener': 'Suposición en plural: el sujeto es «las partituras». Aquí sí hay concordancia, porque no es «haber» existencial.',
            'Deberías': 'Condicional de deber: un consejo, no una orden. Suaviza la obligación.',
            'hubo que': 'Haber que en indefinido: una necesidad puntual del pasado (vaciar el piso en dos días). Siempre en singular.',
            'habría que': 'Haber que en condicional: una propuesta amable e impersonal, sin decirle a Irene directamente «tienes que».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué cree Hugo que la mancha viene de arriba?', options: ['Porque el señor Paredes se lo ha dicho.', 'Porque la mancha es muy antigua.', 'Porque en esa zona del techo no hay tuberías de Irene.'], answer: 2, why: '«Por aquí no pasa ninguna tubería tuya»: es una deducción a partir de una prueba.', en: 'Why does Hugo think the stain comes from upstairs?' },
            { prompt: '¿Por qué no puede Irene tirar la pared?', options: ['Porque es una pared de carga.', 'Porque costaría tres mil.', 'Porque el reglamento lo prohíbe los martes.'], answer: 0, why: '«Mide cuarenta centímetros: es de carga seguro».', en: 'Why can’t Irene knock the wall down?' },
            { prompt: '¿Qué le aconseja Hugo sobre las partituras?', options: ['Guardarlas y localizar a la familia.', 'Venderlas.', 'Tirarlas con los escombros.'], answer: 0, why: '«Deberías guardarlas en una caja» y «habría que llamar a la inmobiliaria para localizar a la familia».', en: 'What does Hugo advise about the sheet music?' },
          ] },
        ] },
        { title: 'Las notas de Irene · Irene’s notes', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Ordena las notas de la libreta · Sort the notebook entries', categories: [
            { id: 'obl', label: 'OBLIGACIÓN · hay que hacerlo', tone: 'orange' },
            { id: 'inf', label: 'DEDUCCIÓN · lo supongo', tone: 'blue' },
            { id: 'apr', label: 'APROXIMACIÓN · más o menos', tone: 'teal' },
          ], items: [
            { text: 'La humedad debe de llevar años: la madera está podrida.', answer: 'inf', why: 'Deber de + infinitivo: Irene supone a partir del estado de la madera.' },
            { text: 'Habrá que comprar lámparas nuevas para el salón.', answer: 'obl', why: 'Haber que en futuro: una necesidad.' },
            { text: 'La pintura viene a salir por unos seiscientos.', answer: 'apr', why: 'Venir a + infinitivo con «unos»: precio aproximado.' },
            { text: 'Esta llave tiene que ser del sótano: no abre ninguna otra puerta.', answer: 'inf', why: 'Tener que como deducción casi segura: ha probado las demás puertas.' },
            { text: 'Los albañiles han de dejar la entrada limpia cada tarde.', answer: 'obl', why: 'Haber de: obligación formal, como en un reglamento.' },
            { text: 'La obra viene a durar lo mismo que un curso escolar.', answer: 'apr', why: 'Venir a + durar: una duración aproximada por comparación.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno piensa en un objeto antiguo de su casa y deduce cuántos años debe de tener y quién debía de usarlo.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Obligación, deducción, aproximación. Duty, deduction, approximation.',
      steps: [
        { title: 'El diario de la obra · The site diary', blocks: [
          { kind: 'choice', items: [
            { context: 'Hugo mira el color de los ladrillos.', prompt: 'Este muro ___ tener más de setenta años.', options: ['hay que', 'debe que', 'debe de'], answer: 2, why: 'Suposición a partir de una pista: debe de + infinitivo. «Hay que tener» sería una necesidad sin sentido aquí.', en: 'This wall must be over seventy years old.' },
            { prompt: 'El año pasado, para cambiar la caldera, ___ pedir tres presupuestos.', options: ['hubo que', 'debió de', 'hubieron que'], answer: 0, why: 'Necesidad pasada e impersonal: hubo que, en singular. «Debió de pedir» sería una suposición.', en: 'Last year, to replace the boiler, three quotes had to be requested.' },
            { context: 'Es un aviso oficial colgado en la entrada del edificio.', prompt: 'Los vecinos ___ retirar sus bicicletas del patio antes del lunes.', options: ['han de', 'deben de', 'hay que'], answer: 0, why: 'Obligación en registro formal: han de. «Deben de» expresa suposición y «hay que» no admite sujeto.', en: 'Residents are to remove their bicycles from the courtyard before Monday.' },
            { prompt: 'Cambiar todas las ventanas ___ costar unos seis mil, más o menos.', options: ['hay que', 'vienen a', 'viene a'], answer: 2, why: 'El sujeto es «cambiar todas las ventanas» (un infinitivo): singular, viene a. Venir a + costar = precio aproximado.', en: 'Replacing all the windows comes to roughly six thousand.' },
            { context: 'Irene le da un consejo a su hermana, sin imponer.', prompt: '___ pedir otro presupuesto antes de firmar.', options: ['Debes de', 'Has de', 'Deberías'], answer: 2, why: 'Consejo suave: condicional, deberías. «Debes de» se lee como suposición y «has de» suena formal y tajante.', en: 'You should get another quote before signing.' },
          ] },
        ] },
        { title: '¿Obligación o deducción? · Obligation or deduction?', blocks: [
          { kind: 'classify', title: '¿Qué expresa cada frase? · What does each sentence express?', categories: [
            { id: 'obl', label: 'OBLIGACIÓN · alguien está obligado', tone: 'orange' },
            { id: 'inf', label: 'DEDUCCIÓN · el hablante supone', tone: 'blue' },
          ], items: [
            { text: 'Con este olor a humedad, tiene que haber agua detrás del armario.', answer: 'inf', why: 'Tener que + haber: deducción casi segura a partir del olor.' },
            { text: 'El técnico tiene que traer el permiso firmado el lunes.', answer: 'obl', why: 'Tener que con un plazo y una tarea: obligación.' },
            { text: 'Nadie contesta en el cuarto piso: tienen que haberse ido de vacaciones.', answer: 'inf', why: 'Tener que + haber + participio: deducción sobre algo anterior.' },
            { text: 'Irene tiene que vaciar el armario antes del jueves.', answer: 'obl', why: 'Una tarea con plazo: obligación.' },
            { text: 'Las partituras deben de ser de los años cuarenta.', answer: 'inf', why: 'Deber de: suposición sobre la fecha.' },
            { text: 'Los vecinos deben dejar la entrada libre durante la mudanza.', answer: 'obl', why: 'Deber sin «de»: obligación, una norma.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Ayer habían que mover los muebles al balcón.', ok: false, options: ['Ayer debían de mover los muebles al balcón.', 'Ayer hubieron que mover los muebles al balcón.', 'Ayer había que mover los muebles al balcón.'], answer: 2, why: 'Haber que es impersonal: había que, en singular. «Debían de mover» sería una suposición.' },
            { sentence: 'Por las cartas que dejó, la dueña anterior debía de ser profesora.', ok: true, why: 'Correcta: deber de en imperfecto para suponer algo del pasado a partir de una pista.' },
            { sentence: 'Usted debe de presentar el permiso antes de empezar las obras.', ok: false, options: ['Usted ha que presentar el permiso antes de empezar las obras.', 'Usted viene a presentar el permiso antes de empezar las obras.', 'Usted debe presentar el permiso antes de empezar las obras.'], answer: 2, why: 'Es una obligación: deber sin «de». Con «de», la frase parecería una suposición.' },
            { sentence: 'Deben de haber unas veinte cajas de libros en el sótano.', ok: false, options: ['Debe de haber unas veinte cajas de libros en el sótano.', 'Deben haber unas veinte cajas de libros en el sótano.', 'Tienen que haber unas veinte cajas de libros en el sótano.'], answer: 0, why: '«Haber» existencial va en singular, y su auxiliar también: debe de haber.' },
            { sentence: 'Una buena pintura viene a durar unos diez años.', ok: true, why: 'Correcta: venir a + durar con «unos» para una duración aproximada.' },
            { sentence: 'Hemos que terminar la cocina antes de diciembre.', ok: false, options: ['Habemos que terminar la cocina antes de diciembre.', 'Hemos de que terminar la cocina antes de diciembre.', 'Hemos de terminar la cocina antes de diciembre.'], answer: 2, why: 'Haber de + infinitivo: hemos de terminar (o «tenemos que terminar»). Nunca «hemos que».' },
          ] },
        ] },
        { title: 'Mensajes con el vecino · Messages with the neighbour', blocks: [
          { kind: 'chat-fill', title: 'Chat con el señor Paredes · Chat with señor Paredes', lines: [
            { who: 'Irene', text: 'Buenos días, señor Paredes. Tengo una mancha enorme en el techo del salón. ___ venir de su baño, porque está justo encima.', options: ['Hay que', 'Tiene que', 'Ha que'], answer: 1, why: 'Deducción muy segura a partir de una prueba (el baño está encima): tiene que venir.' },
            { who: 'Sr. Paredes', text: '¡Cuánto lo siento! Estoy en casa de mi hija. ___ ser la tubería vieja: la del quinto la cambiaron hace poco.', options: ['Hay que', 'Debe que', 'Debe de'], answer: 2, why: 'El vecino supone sin estar seguro: debe de ser.' },
            { who: 'Irene', text: 'No se preocupe. La administradora dice que ___ revisarla esta misma semana.', options: ['habrá que', 'habrán que', 'tendrá de'], answer: 0, why: 'Necesidad impersonal en futuro: habrá que, siempre en singular.' },
            { who: 'Sr. Paredes', text: 'Claro, claro. ¿Y cuánto ___ costar la reparación, más o menos?', options: ['viene a', 'tiene de', 'hay que'], answer: 0, why: 'Pregunta por una cifra aproximada: viene a costar.' },
            { who: 'Irene', text: 'Unos cuatrocientos, y lo cubre el seguro. Eso sí, ___ dejarle una llave a la administradora, si no le importa.', options: ['debió de', 'debería de', 'debería'], answer: 2, why: 'Una petición amable: condicional «debería», sin «de». «Debió de» sería una suposición sobre el pasado.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Los', 'azulejos', 'deben', 'de', 'tener', 'setenta', 'años'], accept: ['Los azulejos deben de tener setenta años'], en: 'The tiles must be seventy years old.' },
            { tiles: ['Habrá', 'que', 'avisar', 'a', 'los', 'vecinos', 'del', 'cuarto', 'piso'], accept: ['Habrá que avisar a los vecinos del cuarto piso'], en: 'The fourth-floor neighbours will have to be told.' },
            { tiles: ['La', 'obra', 'viene', 'a', 'durar', 'unos', 'tres', 'meses'], accept: ['La obra viene a durar unos tres meses'], en: 'The work takes about three months.' },
          ] },
        ] },
        { title: 'Reformula · Rephrase', blocks: [
          { kind: 'rewrite', title: 'Con otra perífrasis · With another verb phrase', items: [
            { prompt: 'Seguramente el técnico está en otra obra.', instruction: 'Usa «deber de» + infinitivo.', accept: ['El técnico debe de estar en otra obra', 'Debe de estar en otra obra el técnico', 'Seguramente el técnico debe de estar en otra obra'] },
            { prompt: 'Era necesario sacar todos los muebles.', instruction: 'Usa «haber que» en imperfecto.', accept: ['Había que sacar todos los muebles'] },
            { prompt: 'La reforma cuesta quince mil, más o menos.', instruction: 'Usa «venir a» + infinitivo.', accept: ['La reforma viene a costar unos quince mil', 'La reforma viene a costar quince mil', 'La reforma viene a costar quince mil, más o menos', 'La reforma viene a costar unos quince mil, más o menos'] },
            { prompt: 'Tienes que hablar con la administradora.', instruction: 'Conviértelo en un consejo amable con el condicional de «deber».', accept: ['Deberías hablar con la administradora'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta algo que tuvo que hacer en una mudanza o una reforma real y hace una deducción sobre los antiguos dueños de su casa.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de la administradora', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'El buzón de voz de Irene · Irene’s voicemail', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada perífrasis y dice si obliga, deduce, aproxima o aconseja. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada perífrasis: ¿obliga, deduce, aproxima o aconseja? Vas a oír «antelación» (advance notice). (Listen once for the gist and once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de Ximena Rojas', channel: 'BUZÓN DE VOZ · DE XIMENA ROJAS, ADMINISTRADORA, PARA IRENE', src: '/audio/grammar-live/458.mp3',
            before: 'Irene le escribió a la administradora del edificio por la mancha del techo. Ahora Ximena le deja un mensaje de voz. ¿Qué crees que le dirá: de dónde viene la mancha, quién paga, qué normas hay…? (What do you think the building manager will say?)',
            gist: { prompt: '¿Para qué llama Ximena? · Why does Ximena call?', options: ['Para explicar la causa probable de la mancha y recordarle las normas de las obras.', 'Para decirle que tiene que parar las obras.', 'Para pedirle a Irene que pague la reparación.'], answer: 0, why: 'Explica de dónde debe de venir la mancha, cómo se arregla y qué normas hay que cumplir.', en: 'She explains the likely cause of the stain and reminds Irene of the rules for building work.' },
            details: [
              { prompt: '¿De dónde cree Ximena que viene la mancha?', options: ['De la tubería del cuarto piso.', 'De la terraza del edificio.', 'Del baño de Irene.'], answer: 0, why: '«Tiene que ser la tubería del cuarto piso».', en: 'Where does Ximena think the stain comes from?' },
              { prompt: '¿Por qué no contesta el señor Paredes?', options: ['Probablemente sigue en casa de su hija.', 'Está en el hospital.', 'Está enfadado con Irene.'], answer: 0, why: '«Debe de estar todavía en casa de su hija, porque no contesta».', en: 'Why isn’t señor Paredes answering?' },
              { prompt: '¿Quién paga la reparación?', options: ['Irene.', 'El señor Paredes.', 'El seguro del edificio.'], answer: 2, why: '«La paga el seguro del edificio».', en: 'Who pays for the repair?' },
              { prompt: '¿Qué le sugiere Ximena a Irene?', options: ['Cambiar de arquitecto.', 'Poner un cartel en el ascensor para avisar de las obras.', 'Hacer las obras el fin de semana.'], answer: 1, why: '«Debería poner un cartel en el ascensor».', en: 'What does Ximena suggest?' },
            ],
            transcript: 'Buenas tardes, señora Salvat, le habla Ximena Rojas, la administradora del edificio. Me llegó su mensaje sobre la mancha del techo. Por lo que me cuenta, [[tiene que ser|blue]] la tubería del cuarto piso: el señor Paredes ya tuvo el mismo problema hace dos años. Él [[debe de estar|blue]] todavía en casa de su hija, porque no contesta, pero yo tengo una llave para emergencias. Antes de seguir con su obra, [[habrá que|orange]] revisar esa tubería. El técnico me dijo que la reparación [[viene a costar|teal]] unos cuatrocientos, y la paga el seguro del edificio, así que por eso no se preocupe. Le recuerdo también las normas: las obras [[han de|orange]] hacerse de lunes a viernes, de nueve a seis, y usted [[tiene que|orange]] avisar a los vecinos con una semana de antelación. Y una sugerencia: [[debería|violet]] poner un cartel en el ascensor. La última vez nadie lo hizo y [[hubo que|orange]] pedir disculpas a medio edificio. Mañana paso por allí hacia las diez. Si no le viene bien, llámeme. Que tenga buena tarde.',
            reply: { teacher: 'Tú eres Ximena. Tu alumno es Irene y le devuelve la llamada: confirma lo que tiene que hacer, hace una deducción sobre la mancha o el vecino y propone algo con «habría que».', self: 'Devuelve la llamada como Irene, en voz alta: confirma lo que tienes que hacer, haz una deducción con «debe de» o «tiene que» y propón algo con «habría que». (Call Ximena back as Irene.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Deducir y organizar', coach: 'Supón con pistas y organiza con normas. Guess from clues, plan with rules.',
      steps: [
        { title: 'Pistas, normas y cifras · Clues, rules and figures', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con ejemplos reales. Si usa «deber de» para una obligación o dice «habían que», tú repites la frase corregida y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta con ejemplos reales. Usa al menos dos perífrasis distintas en cada respuesta. (Answer aloud, using at least two different verb phrases.)' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en la casa o el edificio donde vives. ¿Cómo debía de ser hace cincuenta años? ¿Quién debía de vivir allí? · How must your home have looked fifty years ago?', followUps: ['¿Qué pistas tienes? (What clues do you have?)', '¿Qué cosas tuvieron que cambiar desde entonces?'], phrases: ['[[Debía de ser|blue]] …', '[[Debe de tener|blue]] unos … años', '[[Tiene que haber sido|blue]] …', '[[Hubo que|orange]] …'], hint: 'Suposición sobre el pasado: debía de + infinitivo; deducción segura: tiene que haber + participio.', example: 'Mi edificio debe de tener unos ochenta años: los techos son altísimos. Antes debía de ser una casa de una sola familia, porque la escalera es de madera y muy elegante. Hace unos años hubo que poner ascensor.', next: 'Ahora, las normas.' },
            { q: '¿Qué normas hay en tu edificio, tu trabajo o tu ciudad? ¿Alguna te parece absurda? · What rules are there where you live or work?', followUps: ['¿Están escritas en algún reglamento?', '¿Qué norma cambiarías?'], phrases: ['[[Hay que|orange]] …', '[[Han de|orange]] … (texto oficial)', '[[No tienes que|orange]] …, pero [[no debes|orange]] …', '[[Habría que|violet]] cambiar …'], hint: 'Hay que para todos; han de cuando citas un texto formal; habría que para proponer un cambio.', example: 'En mi oficina hay que registrar la entrada y la salida. El reglamento dice que los empleados han de llevar la tarjeta visible. No tienes que llevar traje, pero no debes ir en pantalón corto. Habría que cambiar el horario de verano.' },
            { q: 'Eres Irene. Hablas con el señor Paredes por teléfono por la mancha. · You are Irene: call your upstairs neighbour about the leak.', followUps: ['¿Y si él dice que no es su tubería?', '¿Qué le propones?'], phrases: ['[[Tiene que venir|blue]] de…', '[[Debe de llevar|blue]] …', '[[Habría que|violet]] …', '[[Debería|violet]] …'], hint: 'Deduce con pruebas y propone con condicional: suena firme pero amable.', example: 'Señor Paredes, la mancha tiene que venir de su baño: está justo encima y en mi techo no hay tuberías. Debe de llevar meses perdiendo agua. Habría que llamar al técnico esta semana; usted debería dejarle una llave a la administradora.', teacher: 'Tú haces de señor Paredes y pones objeciones («Mi baño es nuevo», «Yo no estoy en casa»). Tu alumno deduce otras causas y propone soluciones.' },
            { q: '¿Cuánto viene a costar en tu ciudad alquilar un apartamento, comer fuera o reformar una cocina? · Roughly how much do things cost where you live?', followUps: ['¿Ha subido mucho en los últimos años?', '¿Qué viene a ser lo mismo de caro?'], phrases: ['[[Viene a costar|teal]] unos …', '[[Viene a ser|teal]] lo mismo que …', '[[Debe de haber subido|blue]] …'], hint: 'Venir a + infinitivo con «unos», «más o menos», «casi».', example: 'En mi ciudad, un apartamento pequeño viene a costar unos ochocientos al mes. Comer fuera tres veces por semana viene a ser lo mismo que la factura de la luz. Los precios deben de haber subido un veinte por ciento en dos años.' },
            { q: 'Un amigo quiere reformar su casa sin arquitecto y sin permisos. Aconséjale sin sonar autoritario. · Advise a friend tactfully.', followUps: ['¿Y si insiste en hacerlo solo?', '¿Qué tuviste que hacer tú alguna vez?'], phrases: ['[[Deberías|violet]] …', '[[Tendrías que|violet]] …', '[[Habría que|violet]] …', '[[Tienes que|orange]] … (si es muy importante)'], hint: 'Condicional para aconsejar; tener que en presente solo para lo imprescindible.', example: 'Yo que tú, pediría un presupuesto a un profesional. Deberías informarte de los permisos: en muchos edificios hay que avisar a los vecinos. Y si vas a tocar una pared, tienes que consultar a un arquitecto, porque podría ser de carga.', next: 'Por último, un misterio.' },
            { q: 'Llegas a casa y encuentras la puerta abierta, la luz encendida y dos tazas en la mesa. ¿Qué ha pasado? · Solve a small mystery with deductions.', followUps: ['¿Qué es lo más probable?', '¿Qué es casi seguro?'], phrases: ['[[Tiene que haber|blue]] …', '[[Debe de haber|blue]] + participio', '[[Tenía que ser|blue]] …', 'Puede que …'], hint: 'Ordena tus deducciones de más a menos seguras: tiene que, debe de, puede que.', example: 'Tiene que haber venido alguien con llave, porque la puerta no está forzada. Debe de haber sido mi hermana: siempre toma café con alguien. Puede que haya venido con su novio. ¡Y se ha dejado la puerta abierta! Tenía que ser ella.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún error a propósito («debes de firmar», «habían que»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas con otra experiencia. (Now ask the questions aloud and answer with a different experience.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Avisar a los vecinos', coach: 'Informa, deduce y propone. Inform, infer and propose.',
      steps: [
        { title: 'Un correo a la comunidad · An email to the neighbours', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada perífrasis: ¿obliga, deduce, aproxima o aconseja? ¿Lleva «de» cuando debe? Después tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después repasa cada perífrasis: ¿obliga, deduce, aproxima o aconseja? ¿Lleva «de» solo cuando supones? (Check each verb phrase.)' } },
          { kind: 'write', title: 'Obras en el 3B · Work in apartment 3B', situation: 'Eres Irene (o eres tú, con una obra o un problema real en tu edificio o tu oficina). Escribe un correo formal a los vecinos: explica qué ha pasado y su causa probable, qué habrá que hacer, cuánto viene a durar o a costar y qué normas se van a respetar. (Write a formal email to your neighbours about building work or a problem in the building: likely cause, what needs doing, rough cost or duration, and the rules.)', task: [
            'Explica la causa probable del problema con «debe de» o «tiene que» + infinitivo.',
            'Di qué habrá que hacer o qué tendremos que hacer («habrá que», «tendremos que»).',
            'Da una duración o un precio aproximado con «venir a» + infinitivo.',
            'Recuerda una norma con un tono formal («han de», «deben») y propón algo con «habría que» o «deberíamos».',
            'Cierra con una disculpa y un saludo formal.',
          ], starters: ['Estimados vecinos:', 'Les escribo para informarles de que…', 'Según el arquitecto, la humedad tiene que venir de…', 'Debe de llevar…', 'Habrá que…', 'La reparación viene a costar…', 'Les recuerdo que las obras han de…', 'Habría que…', 'Disculpen las molestias.'],
            words: ['debe de', 'tiene que', 'habrá que', 'tendremos que', 'han de', 'viene a', 'habría que', 'deberíamos', 'antelación', 'molestias'],
            model: 'Estimados vecinos: Les escribo como nueva propietaria del apartamento 3B. Como saben, estoy reformándolo, y las obras van a alargarse un poco. Al abrir el techo del salón encontramos una mancha de humedad muy grande. Según el arquitecto, [[tiene que venir|blue]] de la tubería general, porque por esa zona no pasa ninguna tubería mía, y [[debe de llevar|blue]] años perdiendo agua. Por eso [[habrá que|orange]] revisar la instalación del cuarto piso y, probablemente, la del quinto. La reparación [[viene a costar|teal]] unos cuatrocientos y, según la administradora, la cubre el seguro. Les recuerdo que las obras [[han de|orange]] hacerse de lunes a viernes, de nueve a seis, así que no habrá ruido por la noche ni los fines de semana. Eso sí, la semana que viene [[tendremos que|orange]] cortar el agua dos mañanas; [[habría que|violet]] dejar algo de agua guardada esos días. Disculpen las molestias y gracias por su paciencia. Un saludo, Irene Salvat (3B).',
            minWords: 120,
            checks: [
              { label: 'Una deducción (debe de, deben de, debía de, tiene que ser / estar / venir / haber)', pattern: '(?<!\\p{L})(?:deb(?:e|en|ía|ían|ió|ieron)\\s+de\\s+\\p{L}+|tiene[n]?\\s+que\\s+(?:ser|estar|venir|haber))(?!\\p{L})', tip: 'Explica la causa probable: «Debe de llevar meses…», «Tiene que venir de…».' },
              { label: 'Una necesidad impersonal o futura (habrá que, hay que, tendremos que)', pattern: '(?<!\\p{L})(?:habrá\\s+que|hay\\s+que|había\\s+que|hubo\\s+que|tendr(?:é|emos|án|á)\\s+que)(?!\\p{L})', tip: 'Di qué habrá que hacer: «Habrá que revisar…», «Tendremos que cortar el agua…».' },
              { label: 'Una aproximación con venir a (viene a costar, viene a durar…)', pattern: '(?<!\\p{L})(?:viene|vienen|vendrá|vendrán)\\s+a\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Da una cifra aproximada: «La reparación viene a costar unos…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:habían|habrán|hubieron|habrían|han\\s+habido)\\s+que(?!\\p{L})', why: '**Haber que** es impersonal y va siempre en singular: «había que», «habrá que», «hubo que», «habría que».' },
              { pattern: '(?<!\\p{L})(?:he|has|hemos|han)\\s+que(?!\\p{L})', why: '**Haber de** lleva «de»: «hemos de», «han de». Con «que» solo existe «hay que» (o usa «tener que»).' },
              { pattern: '(?<!\\p{L})(?:deben|tienen)\\s+(?:de\\s+|que\\s+)?haber\\s+(?:un|una|unos|unas|dos|tres|varios|varias|muchos|muchas|problemas|fugas)(?!\\p{L})', why: 'Con «haber» existencial, el verbo que acompaña va en singular: «**debe de haber** varias fugas», «**tiene que haber** un problema».' },
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
            { tone: 'orange', label: 'OBLIGACIÓN', formula: 'deber / tener que / haber de + infinitivo · hay que (todos los tiempos)', example: 'Debes firmar hoy. Las obras han de hacerse entre semana. Hubo que vaciar el apartamento.', caption: 'deber sin «de»; haber de, formal; haber que, impersonal y en singular', en: 'obligation: deber without “de”; haber de is formal; haber que is impersonal and always singular' },
            { tone: 'blue', label: 'INFERENCIA', formula: 'deber de + infinitivo · tener que + ser / estar / haber', example: 'Debe de estar en casa de su hija. La mancha tiene que venir de arriba.', caption: 'deber de = probable; tener que = casi seguro', en: 'inference: deber de = probably; tener que = almost certainly; debe de haber stays singular' },
            { tone: 'teal', label: 'APROXIMACIÓN', formula: 'venir a + costar / durar / tener / ser', example: 'La reparación viene a costar unos cuatrocientos.', caption: 'cifras aproximadas, nunca exactas', en: 'an approximate figure or what something amounts to; never with exact numbers' },
            { tone: 'violet', label: 'SUAVIZAR', formula: 'deberías / tendrías que / habría que + infinitivo', example: 'Habría que avisar a los vecinos.', caption: 'el condicional convierte la obligación en consejo', en: 'the conditional turns an obligation into tactful advice; habría que does not point at anyone' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate primero: **¿obligo o supongo?** Si obligas, **deber** sin «de», **tener que** o, en un texto formal, **haber de**; para todos, **hay que** (siempre en singular). Si supones, **deber de** (probable) o **tener que** (casi seguro). Si das una cifra aproximada, **venir a**. Y si quieres aconsejar con tacto, el condicional: **deberías, tendrías que, habría que**.', en: 'First ask yourself: am I obliging or guessing? To oblige: deber without “de”, tener que or, in formal writing, haber de; for everyone, hay que (always singular). To guess: deber de (probable) or tener que (almost certain). For a rough figure: venir a. And to advise tactfully, use the conditional: deberías, tendrías que, habría que.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'María no ha venido a la reunión; ___ estar enferma, porque nunca falta.', options: ['debe de', 'ha que', 'debe que'], answer: 0, why: 'Suposición a partir de una pista: debe de estar.', en: 'María hasn’t come to the meeting; she must be ill, because she never misses one.' },
            { prompt: 'El invierno pasado, con la nevada, ___ cerrar la oficina tres días.', options: ['hubieron que', 'habían que', 'hubo que'], answer: 2, why: 'Haber que impersonal en indefinido: hubo que, en singular.', en: 'Last winter, because of the snow, the office had to close for three days.' },
            { prompt: 'El viaje en tren ___ durar unas cinco horas.', options: ['viene a', 'hay que', 'viene de'], answer: 0, why: 'Duración aproximada: viene a durar, con «unas».', en: 'The train journey takes about five hours.' },
            { context: 'Instrucciones oficiales de un examen.', prompt: 'Los candidatos ___ presentarse con su documento de identidad.', options: ['han de', 'deben de', 'hay que'], answer: 0, why: 'Obligación en registro formal: han de. «Deben de» sería una suposición y «hay que» no lleva sujeto.', en: 'Candidates are to bring their ID document.' },
            { context: 'Son las diez de la noche y la luz del despacho de tu jefa sigue encendida; su abrigo está en la percha.', prompt: '___ seguir en la oficina.', options: ['Tiene que', 'Ha que', 'Hay que'], answer: 0, why: 'Dos pruebas claras: deducción casi segura con tener que.', en: 'She has to be still at the office: the evidence is clear.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una excursión. Now, a hiking trip.', blocks: [
          { kind: 'lead', text: 'Óscar organiza una excursión a la montaña con su club. Reformula sus notas con las perífrasis de hoy.', en: 'Óscar is organising a mountain hike for his club. Rephrase his notes with today’s verb phrases.' },
          { kind: 'rewrite', title: 'Las notas de Óscar · Óscar’s notes', items: [
            { prompt: 'Probablemente el refugio está cerrado en invierno.', instruction: 'Usa «deber de» + infinitivo.', accept: ['El refugio debe de estar cerrado en invierno', 'En invierno el refugio debe de estar cerrado'] },
            { prompt: 'Será necesario salir a las seis.', instruction: 'Usa «haber que» en futuro.', accept: ['Habrá que salir a las seis'] },
            { prompt: 'La ruta dura cuatro horas, más o menos.', instruction: 'Usa «venir a» + infinitivo.', accept: ['La ruta viene a durar unas cuatro horas', 'La ruta viene a durar cuatro horas', 'La ruta viene a durar cuatro horas, más o menos', 'La ruta viene a durar unas cuatro horas, más o menos'] },
          ] },
        ] },
        { title: 'Ampliación · Ambigüedad, reproches y «vino a decir» · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1.** Como la norma acepta «deber» sin «de» para suponer, «**Debe estar** en la obra» puede ser una obligación o una suposición; el contexto decide, y en un texto cuidado el «de» despeja la duda. **2.** En pasado: «**Debió de llamar**» = probablemente llamó; «**Debiste llamarme**» o «**Deberías haberme llamado**» = un reproche: no lo hiciste. **3.** «**Venir a decir**» resume lo esencial de un mensaje: «Vino a decir que no» = en el fondo, dijo que no.', en: 'For strong students or spare time. 1. Since “deber” without “de” is also accepted for guessing, “Debe estar en la obra” can be an obligation or a guess; context decides, and in careful writing “de” removes the doubt. 2. In the past, “Debió de llamar” = he probably called, while “Debiste llamarme” or “Deberías haberme llamado” is a reproach. 3. “Venir a decir” sums up the gist of a message: “Vino a decir que no” = basically, he said no.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: '«El técnico debió de llamar mientras estábamos fuera». ¿Qué significa?', options: ['Estaba obligado a llamar y no lo hizo.', 'Va a llamar más tarde.', 'Probablemente llamó, pero no lo sabemos seguro.'], answer: 2, why: '«Debió de» + infinitivo: suposición sobre el pasado.', en: 'What does the sentence mean?' },
            { prompt: '«Deberías haberme avisado antes de cortar el agua». ¿Qué expresa Irene?', options: ['Un reproche: no la avisaron.', 'Una cifra aproximada.', 'Una suposición.'], answer: 0, why: 'Condicional de deber + haber + participio: algo que había que hacer y no se hizo.', en: 'What is Irene expressing?' },
            { prompt: 'En un informe, quieres dejar claro que solo supones. ¿Qué escribes?', options: ['El edificio ha que tener unos cien años.', 'El edificio debe tener unos cien años.', 'El edificio debe de tener unos cien años.'], answer: 2, why: 'Las dos primeras son aceptables para suponer, pero «debe de» elimina la posible lectura de obligación.', en: 'In a report, which version makes it clear you are only estimating?' },
            { prompt: '«Le pedimos un descuento al técnico y vino a decir que era imposible». ¿Qué significa «vino a decir»?', options: ['Vino a mi casa para decírmelo.', 'En resumen, eso es lo que dijo.', 'Lo dijo exactamente con esas palabras.'], answer: 1, why: '«Venir a decir» resume la idea principal de lo que alguien dijo, no sus palabras exactas.', en: 'What does “vino a decir” mean here?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno resume una conversación reciente con «vino a decir que…» y formula un reproche suave con «deberías haber + participio».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 159 · Perífrasis aspectuales avanzadas', text: 'Ya usas perífrasis para obligar, deducir y aproximar: «habrá que revisarla», «debe de llevar años», «viene a costar». Son perífrasis que expresan la actitud del hablante. En la clase 159 trabajas otro grupo: las que muestran **cómo se desarrolla** una acción, si avanza poco a poco, se acumula o llega a su resultado («las obras **van avanzando**», «**llevo** tres habitaciones **pintadas**»). Es el paso natural: del qué piensas sobre la acción al cómo transcurre.', en: 'You can now use verb phrases to oblige, infer and approximate. In class 159 you work on another group: verb phrases that show how an action unfolds, whether it progresses gradually, builds up or reaches a result (“the work is gradually progressing”, “I’ve got three rooms painted so far”). It is the natural next step: from your attitude to the action to the way it develops.', href: '/gramatica/perifrasis-aspectuales-avanzadas', label: 'Ir a la clase 159' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “debe estar cansada”, “debe de estar cansada” y “tiene que estar cansada”?». Respuesta esperada: la primera puede ser obligación o suposición; la segunda es suposición; la tercera, deducción casi segura. Tarea: el correo de Escribir sobre un problema real del edificio o la oficina.' },
        ] },
      ],
    },
  ],
};
