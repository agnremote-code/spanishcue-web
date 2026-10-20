import type { LiveLesson } from '../types';

/**
 * Lesson 396 · B1 · Imperativo y peticiones indirectas con subjuntivo (course unit G096).
 * Builds on G058 (affirmative imperative tú / vos / usted), G059 (negative tú
 * imperative), G065 (pronoun position), G088 (present subjunctive forms), G089
 * (querer que, ¡que te vaya bien!) and G090 (pedir / decir que + subjunctive).
 * Scene: the day of a premiere at Teatro La Lumbre, a small independent theatre
 * in Guadalajara. Marisol Peña, the director, gives orders to her assistant
 * Iván Soto (tú), who passes them on to the technician Raúl and the actors Lucas
 * and Celia; doña Amparo Ruiz, the theatre owner, arrives early with guests
 * (usted / ustedes). In the voice message Marisol (Mexican voice, tú) leaves
 * Iván the tasks for the afternoon.
 * Content: only the affirmative tú imperative has its own form (ven, di, espera);
 * negative tú, usted and ustedes commands ARE present subjunctive (no vengas,
 * venga, vengan); relaying commands in the present with the shift of person and
 * pronouns (dile que venga, te dice que lo llames, me pide que…, les pide que no
 * lleguen tarde); «dile que viene» (information, indicative) vs «dile que venga»
 * (order); que + subjunctive on its own (—¿Qué dice? —Que subas; ¡Que pasen!;
 * ¡Que salga todo bien!); pronoun placement (dímelo / no me lo digas / dígamelo
 * / dile que me lo dé / dáselas). Voseo (vení, decile, decímelo, andá) in a 🌎
 * note only. Ampliación: past reported requests (me dijo que viniera) for
 * recognition only, glossed. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 396,
  level: 'B1',
  title: 'Imperativo y peticiones indirectas con subjuntivo',
  subtitle: 'Dar órdenes con tú, usted y ustedes, y transmitir lo que otra persona pide: «dile que venga», «te pide que lo llames».',
  legend: [
    { tone: 'blue', label: 'Imperativo de tú afirmativo · ven, dile, dáselas (own form)' },
    { tone: 'orange', label: 'Forma de subjuntivo · no vengas, venga, que pasen (subjunctive form)' },
    { tone: 'teal', label: 'Transmitir · dile que, dice que, te pide que (passing on a message)' },
    { tone: 'violet', label: 'Información · indicativo: viene, no hay prisa (information)' },
  ],
  optionNotes: {
    apagen: 'Ortografía: apagar → apag**u**en. Delante de «e», la «g» necesita «u» para sonar como en «apago».',
    'Di subas': '«Di» es una orden («di algo»). Para repetir o transmitir una orden, basta con **que**: «Que subas».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Ven, no vengas, venga', coach: 'Casi todas las órdenes ya las conoces: son subjuntivo. Most commands are subjunctive forms you know.',
      steps: [
        { title: 'Día de estreno · Opening night', blocks: [
          { kind: 'lead', text: 'Hoy es el **estreno** de una obra en el Teatro La Lumbre, un teatro pequeño de Guadalajara. La directora, **Marisol Peña**, da órdenes a todo el mundo. Su ayudante, **Iván Soto**, las pasa al técnico, Raúl, y a los actores, Lucas y Celia. Y a las cinco llega la dueña del teatro, **doña Amparo**, con invitados. Hoy aprendes a dar órdenes con **tú, usted y ustedes** y a **transmitir** lo que otra persona pide: «Dile que venga».', en: 'Today is the opening night of a play at Teatro La Lumbre, a small theatre in Guadalajara. The director, Marisol Peña, gives orders to everyone. Her assistant, Iván Soto, passes them on to the technician, Raúl, and to the actors, Lucas and Celia. At five the theatre owner, doña Amparo, arrives with guests. Today you learn to give orders with tú, usted and ustedes and to pass on what someone else asks: “Tell him to come”.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres órdenes de Marisol y tu alumno dice a quién habla en cada una y qué forma del verbo reconoce de la clase de subjuntivo.', self: 'Lee las tres órdenes en voz alta. ¿A quién habla Marisol? ¿Qué forma reconoces de la clase de subjuntivo? (Who is Marisol talking to? Which form do you recognise?)' } },
          { kind: 'compare', title: 'Tres órdenes de Marisol · Three orders from Marisol', columns: [
            { tone: 'blue', label: 'TÚ · AFIRMATIVO', sentence: 'Iván, [[ven|blue]] al escenario.', idea: 'Forma propia del imperativo (clase 058).', en: 'Iván, come to the stage.' },
            { tone: 'orange', label: 'TÚ · NEGATIVO', sentence: 'Lucas, no [[vengas|orange]] tarde hoy.', idea: '«Vengas» es el presente de subjuntivo de tú.', en: 'Lucas, don’t come late today.' },
            { tone: 'orange', label: 'USTED', sentence: 'Doña Amparo, [[venga|orange]] por aquí.', idea: '«Venga» es el presente de subjuntivo de usted.', en: 'Doña Amparo, come this way.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Doña Amparo, venga por aquí». ¿Por qué «venga» y no «ven»?', options: ['Porque Marisol habla de usted con doña Amparo.', 'Porque es una orden negativa.', 'Porque es pasado.'], answer: 0, why: 'Con usted, la orden usa la forma de subjuntivo: venga.', en: 'Why “venga” and not “ven”?' },
            { prompt: '¿Qué orden usa una forma que ya conoces del subjuntivo?', options: ['Ven al escenario.', 'No vengas tarde.', 'Di la verdad.'], answer: 1, why: '«(Que tú) vengas» es presente de subjuntivo. «Ven» y «di» son formas propias del imperativo.', en: 'Which order uses a form you already know from the subjunctive?' },
          ] },
        ] },
        { title: 'Una sola forma propia · Only one form of its own', mascot: '/brand/mascot/studying.webp', coach: 'Tú afirmativo: forma propia. El resto: subjuntivo. Affirmative tú is special.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'IMPERATIVO = SUBJUNTIVO', question: '¿De dónde salen las órdenes?', en: 'Where do commands come from?', formula: ['tú afirmativo → forma propia: espera, ven, di, haz', 'tú negativo · usted · ustedes → presente de subjuntivo: no esperes, espere, esperen'],
            meaning: 'Solo la orden **afirmativa de tú** tiene una forma propia (clase 058). **Todas las demás** son el presente de subjuntivo (clase 088): la orden negativa de tú (**no vengas**), usted (**venga / no venga**) y ustedes (**vengan / no vengan**). Si sabes el subjuntivo, ya sabes casi todo el imperativo.',
            examples: [
              { es: 'Celia, [[espera|blue]] un momento. / Celia, no [[esperes|orange]] más.', en: 'Celia, wait a moment. / Celia, don’t wait any longer.' },
              { es: 'Señor, [[espere|orange]] aquí, por favor. / No [[espere|orange]] en la puerta.', en: 'Sir, please wait here. / Don’t wait at the door.' },
              { es: 'Chicos, [[esperen|orange]] en el camerino. / No [[esperen|orange]] en el pasillo.', en: 'Guys, wait in the dressing room. / Don’t wait in the corridor.' },
            ],
            note: 'Con usted y ustedes, la forma es la misma en afirmativo y en negativo: solo se añade **no**.' },
          { kind: 'table', title: 'Seis verbos frecuentes · Six common verbs', head: ['Verbo', 'tú (sí)', 'tú (no) = subj.', 'usted = subj.', 'ustedes = subj.'], rows: [
            ['esperar', '**espera**', 'no esperes', '(no) espere', '(no) esperen'],
            ['venir', '**ven**', 'no vengas', '(no) venga', '(no) vengan'],
            ['decir', '**di**', 'no digas', '(no) diga', '(no) digan'],
            ['hacer', '**haz**', 'no hagas', '(no) haga', '(no) hagan'],
            ['ir', '**ve**', 'no vayas', '(no) vaya', '(no) vayan'],
            ['dar', '**da**', 'no des', '(no) dé', '(no) den'],
          ], note: 'En España, con vosotros, el afirmativo también tiene forma propia (esperad, venid) y el negativo es subjuntivo (no esperéis, no vengáis).' },
          { kind: 'tip', icon: '🌎', title: 'Con vos · With vos', text: 'En el Río de la Plata y en buena parte de Centroamérica, el afirmativo de **vos** es el infinitivo sin **-r**, con acento al final: **vení**, **esperá**, **decí**, **hacé**; ir → **andá**. Con pronombres: **decile**, **decímelo**. En negativo, lo más general es la forma de tú: **no vengas**, **no me lo digas** (también se oye «no vengás»). Usted y ustedes no cambian.', en: 'In the River Plate region and much of Central America, the affirmative vos command is the infinitive without -r, stressed at the end: vení, esperá, decí, hacé; ir becomes andá. With pronouns: decile, decímelo. In the negative the most widespread form is the tú form: no vengas, no me lo digas (you also hear “no vengás”). Usted and ustedes do not change.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Chicos, no ___ ruido detrás del telón.', options: ['hacen', 'hagas', 'hagan'], answer: 2, why: 'Ustedes, negativo: subjuntivo de hacer, hagan.', en: 'Guys, don’t make noise behind the curtain.' },
            { prompt: 'Raúl, ___ a la cabina de luces, por favor.', options: ['vaya', 'vayas', 've'], answer: 2, why: 'Tú afirmativo: forma propia, ve. «Vayas» solo va en negativo (no vayas); «vaya» es usted.', en: 'Raúl, go to the lighting booth, please.' },
            { prompt: 'Señor, no le ___ la entrada a nadie.', options: ['des', 'dé', 'da'], answer: 1, why: 'Usted, negativo: subjuntivo de dar, dé (con tilde).', en: 'Sir, don’t give the ticket to anyone.' },
          ] },
        ] },
        { title: 'Pasar una orden · Passing on an order', mascot: '/brand/mascot/standing.webp', coach: 'Una orden contada: que + subjuntivo. A relayed order takes que + subjunctive.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'TRANSMITIR UNA ORDEN', question: '¿Cómo paso a otra persona lo que pide Marisol?', en: 'How do I pass on what Marisol asks for?', formula: ['dile (a Raúl) que + subjuntivo', 'te dice que · te pide que · me pide que · les pide que + subjuntivo'],
            meaning: 'Cuando una orden **pasa por otra persona**, el imperativo se convierte en **que + subjuntivo**: «Ven» → «Dile que **venga**». Ojo: al pasar la orden **cambian la persona del verbo y los pronombres**, porque ahora habla otra persona a otro oyente.',
            examples: [
              { es: 'Marisol: «Iván, [[dile a Raúl que|teal]] [[revise|orange]] las luces».', en: 'Marisol: “Iván, tell Raúl to check the lights.”' },
              { es: 'Iván: «Raúl, Marisol [[te dice que|teal]] [[revises|orange]] las luces».', en: 'Iván: “Raúl, Marisol says you should check the lights.”' },
              { es: 'Raúl: «Marisol [[me pide que|teal]] [[revise|orange]] las luces otra vez».', en: 'Raúl: “Marisol is asking me to check the lights again.”' },
            ] },
          { kind: 'table', title: 'Lo que dice Marisol → lo que transmite Iván · What Marisol says → what Iván passes on', head: ['Marisol', 'Iván, a la otra persona'], rows: [
            ['A Lucas: «Llám**ame** esta noche».', 'Lucas, Marisol dice que **la** [[llames|orange]] esta noche.'],
            ['A los actores: «No lleguen tarde».', 'Chicos, Marisol **les** pide que no [[lleguen|orange]] tarde.'],
            ['A doña Amparo: «Espére**me** en la sala».', 'Doña Amparo, Marisol **le** pide que **la** [[espere|orange]] en la sala.'],
            ['A Iván: «Tráe**me** el guion».', 'Iván, a Raúl: Marisol **me** pide que **le** [[lleve|orange]] el guion.'],
          ], note: '«Me» (Marisol) pasa a ser **la** o **le**: ahora ella es una tercera persona. «Tráeme» se cuenta con **llevar**: Iván va hacia ella.' },
          { kind: 'compare', title: 'Dile que viene / dile que venga', columns: [
            { tone: 'violet', label: 'INFORMACIÓN · indicativo', sentence: 'Dile a Lucas que Celia [[viene|violet]] a las seis.', idea: 'Una noticia: Celia va a llegar a las seis.', en: 'Tell Lucas (that) Celia is coming at six.' },
            { tone: 'orange', label: 'ORDEN · subjuntivo', sentence: 'Dile a Lucas que [[venga|orange]] a las seis.', idea: 'Una orden: Lucas tiene que llegar a las seis.', en: 'Tell Lucas to come at six.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Marisol a Celia: «Llámame después». Iván a Celia: «Marisol dice que ___ después».', options: ['me llames', 'llámala', 'la llames'], answer: 2, why: 'Marisol ya no habla: «me» pasa a «la», y la orden contada va en subjuntivo (llames).', en: '“Marisol says you should call her later.”' },
            { prompt: 'Dile a Raúl que el telón ___ un ruido raro.', options: ['haz', 'haga', 'hace'], answer: 2, why: 'Es una información sobre el telón, no una orden: indicativo, hace.', en: 'Tell Raúl the curtain makes a strange noise.' },
            { prompt: 'Iván, dile a Celia que ___ las entradas a la prensa.', options: ['repartir', 'reparte', 'reparta'], answer: 2, why: 'Celia tiene que hacerlo: orden transmitida, que + subjuntivo (reparta).', en: 'Iván, tell Celia to hand out the tickets to the press.' },
          ] },
        ] },
        { title: '«Que» solo · “Que” on its own', mascot: '/brand/mascot/speaking.webp', coach: 'A veces «que» + subjuntivo ya es la orden. Sometimes que + subjunctive is the whole order.', blocks: [
          { kind: 'concept', tone: 'orange', label: '¡QUE + SUBJUNTIVO!', question: '¿Puedo usar «que» + subjuntivo sin otro verbo?', en: 'Can I use que + subjunctive without another verb?', formula: ['orden para otra persona: Que pase. · Que esperen allí.', 'repetir o pasar una orden: —¿Qué dice? —Que subas.', 'deseo (clase 089): ¡Que salga todo bien!'],
            meaning: 'En la conversación, **que + subjuntivo** al principio de la frase es una orden o un deseo completos. Sirve para dar una orden a alguien **que no está hablando contigo** («Que pase»), para **repetir** una orden que el otro no oyó o para **pasar** un recado sin «dice». Y, como ya sabes, para desear algo: ¡Que te vaya bien!',
            examples: [
              { es: '—Doña Amparo está en la puerta. —¡[[Que pase|orange]]!', en: '“Doña Amparo is at the door.” “Show her in! / Let her in!”' },
              { es: '—¿Qué dice Raúl? No lo oigo. —[[Que subas|orange]] a la cabina.', en: '“What’s Raúl saying? I can’t hear him.” “(He says) to go up to the booth.”' },
              { es: '—¿Cómo? —[[Que no toques|orange]] el telón, por favor.', en: '“Sorry?” “(I said) don’t touch the curtain, please.”' },
              { es: '¡[[Que salga|orange]] todo bien esta noche!', en: 'I hope everything goes well tonight!' },
            ],
            note: 'En «Que pase», la persona que tiene que pasar no está en la conversación: la orden llega a través de otra persona.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Iván: «Marisol, los invitados ya están aquí». Marisol: «¡___ a la sala pequeña!»', options: ['Que pasen', 'Pasen ustedes', 'Pasan'], answer: 0, why: 'Marisol habla con Iván, no con los invitados: orden para otras personas, «Que pasen».', en: '“Show them into the small room!”' },
            { prompt: 'Lucas no oye bien. —¿Qué dices? —___ me esperes en la puerta.', options: ['Di', 'Dice', 'Que'], answer: 2, why: 'Para repetir una orden, basta con «que» + subjuntivo.', en: '“What are you saying?” “(I said) wait for me at the door.”' },
            { prompt: 'Celia sale al escenario. Iván le dice: «¡Que te ___ muy bien!»', options: ['vaya', 've', 'va'], answer: 0, why: 'Un deseo con «que»: subjuntivo de ir, vaya.', en: '“Good luck! / Hope it goes really well!”' },
          ] },
        ] },
        { title: '¿Dónde va el pronombre? · Where does the pronoun go?', mascot: '/brand/mascot/kneeling.webp', coach: 'Afirmativo: detrás y unido. Negativo y «que»: delante. After in affirmative, before otherwise.', blocks: [
          { kind: 'lead', text: 'La regla de la clase 065 vale para todas las personas: en la orden **afirmativa**, el pronombre va **detrás y unido**; en la **negativa** y después de **que**, va **delante** del verbo. Con dos pronombres, **le / les** + lo, la, los, las se convierte en **se**: dáselo, no se lo des.', en: 'The rule from class 065 works for every person: in an affirmative command, the pronoun goes after the verb and joined to it; in a negative command and after “que”, it goes before the verb. With two pronouns, le / les + lo, la, los, las becomes se: dáselo, no se lo des.' },
          { kind: 'table', title: 'Decir y dar con pronombres · Decir and dar with pronouns', head: ['', 'Afirmativo (detrás)', 'Negativo (delante)', 'Con «que» (delante)'], rows: [
            ['tú', '[[dímelo|blue]]', 'no me lo [[digas|orange]]', 'dile que me lo [[diga|orange]]'],
            ['usted', '[[dígamelo|orange]]', 'no me lo [[diga|orange]]', 'le pido que me lo [[diga|orange]]'],
            ['ustedes', '[[díganmelo|orange]]', 'no me lo [[digan|orange]]', 'les pido que me lo [[digan|orange]]'],
            ['tú + se', '[[dáselas|blue]] (a Celia)', 'no se las [[des|orange]]', 'dile que se las [[dé|orange]]'],
          ], note: 'Al unir pronombres, la palabra se alarga y muchas veces necesita tilde: dímelo, dígamelo, díganmelo, dáselas. Pero: dile, dame.' },
          { kind: 'tip', icon: '🔑', title: 'Dile que me lo dé · Tell him to give it to me', text: 'En una orden transmitida hay **dos verbos**: el primero es imperativo, con el pronombre detrás (**dile**); el segundo es subjuntivo, con los pronombres delante (**que me lo dé**).', en: 'A relayed order has two verbs: the first is an imperative with the pronoun after it (dile); the second is a subjunctive with the pronouns before it (que me lo dé).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿El final de la obra? ¡No ___! Quiero verlo esta noche.', options: ['me lo dices', 'me lo digas', 'dímelo'], answer: 1, why: 'Negativo: pronombres delante y subjuntivo, «no me lo digas».', en: 'The end of the play? Don’t tell me! I want to see it tonight.' },
            { prompt: 'Doña Amparo, si tiene una pregunta, ___ a mí.', options: ['me la haga', 'hágamela', 'hágame la'], answer: 1, why: 'Usted afirmativo: pronombres detrás y unidos, con tilde: hágamela.', en: 'Doña Amparo, if you have a question, ask me.' },
            { prompt: 'Lucas tiene la chaqueta azul. Dile que ___ a Celia.', options: ['se la dé', 'le la dé', 'dásela'], answer: 0, why: 'Después de «que», delante; y le + la → se la: «que se la dé».', en: 'Lucas has the blue jacket. Tell him to give it to Celia.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Lee, corrige y explica. Read, correct, explain.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error. Tu alumno dice dónde está el problema y la dice bien. Después aparece la corrección.', self: 'Lee cada frase, busca el error y dila bien en voz alta. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Lucas, no ven tarde.', right: 'Lucas, no vengas tarde.', why: 'El negativo de tú es subjuntivo: no vengas. (Negative tú = subjunctive.)' },
            { wrong: 'Doña Amparo, espera aquí, por favor.', right: 'Doña Amparo, espere aquí, por favor.', why: 'Con usted, forma de subjuntivo: espere. (Usted = subjunctive form.)' },
            { wrong: 'Dile a Lucas que viene a las seis. (= una orden)', right: 'Dile a Lucas que venga a las seis.', why: 'Si Lucas tiene que hacerlo, es una orden: subjuntivo. «Que viene» solo informa. (Order → subjunctive.)' },
            { wrong: 'Dile a Celia que llámame.', right: 'Dile a Celia que me llame.', why: 'Después de «que» no hay imperativo: subjuntivo, con el pronombre delante. (No imperative after que.)' },
            { wrong: 'No dímelo todavía.', right: 'No me lo digas todavía.', why: 'En negativo, los pronombres van delante y el verbo es subjuntivo. (Negative: pronouns first.)' },
            { wrong: 'Dile que le lo dé a Raúl.', right: 'Dile que se lo dé a Raúl.', why: 'Le + lo → se lo. (“Le lo” does not exist.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['Señores, siéntanse aquí.', 'Señores, siéntense aquí.', 'Señores, se sienten aquí.'], answer: 1, why: 'Ustedes afirmativo: sienten + se, unido y con tilde: siéntense.', en: 'Gentlemen, sit here.' },
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['Marisol te pide que espérala.', 'Marisol te pide que la esperes.', 'Marisol te pide que la esperas.'], answer: 1, why: 'Petición transmitida: que + subjuntivo, con el pronombre delante.', en: 'Marisol is asking you to wait for her.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno da una orden a Iván (tú), otra a doña Amparo (usted) y la pasa después a otra persona con «Marisol dice que…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Tres horas antes del estreno', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Marisol, Iván y doña Amparo · Marisol, Iván and doña Amparo', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Marisol y doña Amparo, tu alumno es Iván. Después tu alumno toca cada expresión marcada y dice si es una orden directa, una orden transmitida o una información.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿orden directa, orden transmitida o información?' } },
          { kind: 'explore', title: 'Antes de abrir las puertas', setting: 'Teatro La Lumbre, cinco de la tarde. El estreno es a las ocho. Marisol e Iván revisan todo en el escenario. (Teatro La Lumbre, 5 p.m. The premiere is at eight. Marisol and Iván check everything on stage.)', lines: [
            { who: 'Marisol', text: 'Iván, faltan tres horas para el estreno. [[Ven|blue]] un momento, por favor.', en: 'Iván, it’s three hours till opening night. Come here a moment, please.' },
            { who: 'Iván', text: 'Aquí estoy. Dime, ¿qué hago primero?', en: 'I’m here. Tell me, what do I do first?' },
            { who: 'Marisol', text: '[[Dile a Raúl que|teal]] [[revise|orange]] las luces del segundo acto. Ayer una no funcionaba.', en: 'Tell Raúl to check the lights for the second act. Yesterday one wasn’t working.' },
            { who: 'Iván', text: 'De acuerdo. Ah, Lucas me [[pide que|teal]] le [[abra|orange]] el camerino a las cinco y media.', en: 'OK. Oh, Lucas is asking me to open the dressing room for him at half past five.' },
            { who: 'Marisol', text: '[[Ábreselo|blue]], claro. Pero [[no le des|orange]] la llave: es la única que tenemos.', en: 'Open it for him, of course. But don’t give him the key: it’s the only one we have.' },
            { who: 'Iván', text: 'Entendido. Oye, Raúl [[dice que|teal]] el telón [[hace|violet]] un ruido raro.', en: 'Got it. Listen, Raúl says the curtain is making a strange noise.' },
            { who: 'Marisol', text: 'Ya lo sé. [[No se lo digas|orange]] a nadie, por favor. Mañana lo arreglamos.', en: 'I know. Don’t tell anyone, please. We’ll fix it tomorrow.' },
            { who: 'Iván', text: 'Tranquila. Mira, doña Amparo ya está en la puerta con dos invitados.', en: 'Don’t worry. Look, doña Amparo is already at the door with two guests.' },
            { who: 'Marisol', text: '¡Qué pronto! [[Que pasen|orange]] a la sala pequeña. Y [[pídeles que|teal]] [[esperen|orange]] allí unos minutos.', en: 'So early! Show them into the small room. And ask them to wait there for a few minutes.' },
            { who: 'Iván', text: 'Buenas tardes, doña Amparo. [[Pasen|orange]], por favor, y [[siéntense|orange]] aquí. [[No se preocupe|orange]]: Marisol viene enseguida.', en: 'Good afternoon, doña Amparo. Come in, please, and sit down here. Don’t worry: Marisol is coming right away.' },
            { who: 'Doña Amparo', text: 'Gracias, Iván. [[Dile que|teal]] [[no hay prisa|violet]]. Ah, y [[que no se olvide|orange]] de las fotos para la prensa.', en: 'Thank you, Iván. Tell her there’s no hurry. Oh, and she mustn’t forget the photos for the press.' },
            { who: 'Iván', text: 'Marisol, doña Amparo [[dice que|teal]] [[no hay prisa|violet]], pero [[te pide que|teal]] no [[te olvides|orange]] de las fotos.', en: 'Marisol, doña Amparo says there’s no hurry, but she asks you not to forget the photos.' },
          ], notes: {
            Ven: 'Imperativo de **tú** afirmativo: la única forma propia (venir → ven).',
            'Dile a Raúl que': '**Dile** = di + le (a Raúl). Marisol pide a Iván que pase la orden: después de «que», subjuntivo.',
            revise: 'Subjuntivo de **revisar**: es lo que Raúl tiene que hacer.',
            'pide que': 'Iván cuenta una **petición** de Lucas: pedir que + subjuntivo (clase 090).',
            abra: 'Subjuntivo de **abrir** para yo: Lucas me pide que (yo) le abra.',
            'Ábreselo': 'Abre + le (a Lucas) + lo (el camerino): le + lo → **se lo**, unido y con tilde.',
            'no le des': 'Orden **negativa** de tú: subjuntivo de dar, con el pronombre delante.',
            'dice que': '**Decir que** transmite lo que dijo otra persona. El verbo siguiente decide: indicativo si es información, subjuntivo si es una orden.',
            hace: 'Indicativo: es una **información** sobre el telón, no una orden.',
            'No se lo digas': 'Negativo de **dímelo**: pronombres delante, verbo en subjuntivo. Se = a nadie (le + lo → se lo).',
            'Que pasen': '**Que + subjuntivo** para una orden a personas que no están en la conversación: Iván se la pasa a los invitados.',
            'pídeles que': 'Pide (imperativo de tú) + les (a los invitados), unido y con tilde. Pasa una petición: después, subjuntivo.',
            esperen: 'Subjuntivo de **esperar** para ellos: lo que tienen que hacer los invitados.',
            Pasen: 'Orden con **ustedes**: es la forma de subjuntivo (pasen).',
            'siéntense': 'Ustedes + pronombre: **sienten + se**, unido y con tilde.',
            'No se preocupe': 'Orden negativa con **usted**: no + se + preocupe (subjuntivo).',
            'Dile que': 'Doña Amparo trata de **tú** a Iván: dile (a Marisol) que… Aquí el recado es una información, no una orden.',
            'no hay prisa': 'Indicativo: es una **información**, no una orden. Por eso no es «que no haya prisa».',
            'que no se olvide': '**Que + subjuntivo** sin otro verbo: es otro recado para Marisol, como «dile que no se olvide».',
            'te pide que': 'Iván pasa la petición a Marisol: ahora ella es «tú». Doña Amparo dijo «que no se olvide»; Iván dice «te pide que no te olvides».',
            'te olvides': 'Subjuntivo de **olvidarse** para tú: el pronombre cambia con la persona (se → te).',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué tiene que hacer Raúl?', options: ['Abrir el camerino de Lucas.', 'Revisar las luces del segundo acto.', 'Arreglar el telón hoy.'], answer: 1, why: '«Dile a Raúl que revise las luces del segundo acto».', en: 'What does Raúl have to do?' },
            { prompt: '¿Qué no quiere Marisol?', options: ['Que doña Amparo entre.', 'Que Lucas use el camerino.', 'Que Iván le dé la llave a Lucas.'], answer: 2, why: '«No le des la llave: es la única que tenemos».', en: 'What doesn’t Marisol want?' },
            { prompt: '«Dile que no hay prisa». Doña Amparo…', options: ['informa: Marisol puede tomarse su tiempo.', 'pide a Iván que corra.', 'da una orden a Marisol.'], answer: 0, why: 'Indicativo (hay): es una información, no una orden.', en: '“Tell her there’s no hurry.” Doña Amparo…' },
          ] },
        ] },
        { title: 'La libreta de Iván · Iván’s notebook', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Iván apunta todo lo que oye esta tarde. ¿Cada frase es una orden directa, una orden transmitida o una información?', en: 'Iván writes down everything he hears this afternoon. Is each sentence a direct order, a relayed order or information?' },
          { kind: 'classify', title: 'Clasifica las frases · Sort the sentences', categories: [
            { id: 'directa', label: 'ORDEN DIRECTA · imperativo', tone: 'blue' },
            { id: 'pasada', label: 'ORDEN TRANSMITIDA · que + subjuntivo', tone: 'teal' },
            { id: 'info', label: 'INFORMACIÓN · indicativo', tone: 'violet' },
          ], items: [
            { text: 'Iván, apaga la luz del pasillo.', answer: 'directa', why: 'Marisol habla directamente a Iván: imperativo (apaga).' },
            { text: 'Raúl dice que bajes a la entrada.', answer: 'pasada', why: 'Una orden de Raúl contada por otra persona: que + subjuntivo (bajes).' },
            { text: 'Celia dice que el vestido le queda grande.', answer: 'info', why: 'Cuenta un hecho sobre el vestido: indicativo (queda).' },
            { text: 'Doña Amparo, no se siente ahí, por favor.', answer: 'directa', why: 'Orden directa con usted (no se siente), en forma de subjuntivo.' },
            { text: 'Marisol les pide a los actores que no hagan ruido.', answer: 'pasada', why: 'Les pide que + subjuntivo (hagan): una petición transmitida.' },
            { text: 'Dile a Marisol que los invitados ya llegaron.', answer: 'info', why: 'Una noticia para Marisol: indicativo (llegaron).' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿Habla con la persona que tiene que actuar, o pasa el recado a través de otra?». Directa: imperativo. A través de otra: que + subjuntivo. Si nadie tiene que hacer nada: información.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Directa, transmitida o información? Direct, relayed or information?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Marisol ve a Lucas cerca del telón. (Marisol sees Lucas near the curtain.)', prompt: '«Lucas, no ___ el telón, por favor: está roto».', options: ['toques', 'tocas', 'toca'], answer: 0, why: 'Negativo de tú: subjuntivo (toques). «No tocas» describe; «toca» es el afirmativo.', en: '“Lucas, don’t touch the curtain, please: it’s broken.”' },
            { context: 'Iván recibe a un periodista mayor. (Iván welcomes an older journalist.)', prompt: '«Buenas tardes, señor. ___ por aquí, por favor».', options: ['Ven', 'Viene', 'Venga'], answer: 2, why: 'Usted: forma de subjuntivo, venga. «Ven» es tú; «viene» es presente.', en: '“Good afternoon, sir. Come this way, please.”' },
            { context: 'Marisol habla a todo el elenco. (Marisol talks to the whole cast.)', prompt: '«Chicos, ___ los teléfonos antes de salir al escenario».', options: ['apagen', 'apaguen', 'apagan'], answer: 1, why: 'Ustedes: subjuntivo de apagar, con «gu»: apaguen.', en: '“Guys, switch off your phones before going on stage.”' },
            { context: 'Marisol a Iván. (Marisol to Iván.)', prompt: '«Dile a Celia que me ___ en cuanto llegue».', options: ['llama', 'llamas', 'llame'], answer: 2, why: 'Orden transmitida: que + subjuntivo, para ella (llame).', en: '“Tell Celia to call me as soon as she arrives.”' },
            { context: 'Iván informa a Lucas. (Iván informs Lucas.)', prompt: '«Marisol dice que Celia ___ un poco tarde hoy: tiene médico».', options: ['llegues', 'llega', 'llegue'], answer: 1, why: 'Es una información sobre Celia, no una orden: indicativo (llega).', en: '“Marisol says Celia is arriving a bit late today: she has a doctor’s appointment.”' },
            { context: 'Lucas no oye a Raúl desde el escenario. (Lucas can’t hear Raúl from the stage.)', prompt: 'Lucas: «¿Qué dice Raúl?». Iván: «___ subas a la cabina».', options: ['Que', 'Dice', 'Di subas'], answer: 0, why: 'Para pasar o repetir una orden basta con «que» + subjuntivo: «Que subas».', en: '“(He says) to go up to the booth.”' },
          ] },
        ] },
        { title: '¿Forma propia o subjuntivo? · Own form or subjunctive?', blocks: [
          { kind: 'classify', title: 'Las órdenes de la tarde · The afternoon’s orders', categories: [
            { id: 'propia', label: 'FORMA PROPIA · tú afirmativo', tone: 'blue' },
            { id: 'subj', label: 'FORMA DE SUBJUNTIVO · no…, usted, ustedes', tone: 'orange' },
          ], items: [
            { text: 'Sal por la puerta de atrás.', answer: 'propia', why: 'Tú afirmativo de salir: sal, forma propia.' },
            { text: 'No salgas todavía.', answer: 'subj', why: 'Negativo de tú: subjuntivo (salgas).' },
            { text: 'Salga por aquí, señora.', answer: 'subj', why: 'Usted: subjuntivo (salga).' },
            { text: 'Pon las sillas en fila.', answer: 'propia', why: 'Tú afirmativo de poner: pon, forma propia.' },
            { text: 'Pongan las sillas en fila.', answer: 'subj', why: 'Ustedes: subjuntivo (pongan).' },
          ] },
        ] },
        { title: 'Corrige las frases · Correct the sentences', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Pídeles a los invitados que esperan en la sala.', ok: false, options: ['Pídeles a los invitados esperen en la sala.', 'Pídeles a los invitados que esperen en la sala.', 'Pídeles a los invitados que esperan en la sala, por favor.'], answer: 1, why: 'Pedir que + subjuntivo: esperen. Y el «que» es obligatorio.' },
            { sentence: 'No me lo cuentes todavía: quiero ver el ensayo primero.', ok: true, why: 'Correcta: negativo de tú, pronombres delante y subjuntivo (cuentes).' },
            { sentence: 'Señora, no se preocupa: la obra empieza a las ocho.', ok: false, options: ['Señora, no se preocupe: la obra empieza a las ocho.', 'Señora, no te preocupes: la obra empieza a las ocho.', 'Señora, no preocúpese: la obra empieza a las ocho.'], answer: 0, why: 'Usted, negativo: subjuntivo con el pronombre delante, no se preocupe.' },
            { sentence: 'Dile a Raúl que me lo trae mañana.', ok: false, options: ['Dile a Raúl que tráemelo mañana.', 'Dile a Raúl que me lo traer mañana.', 'Dile a Raúl que me lo traiga mañana.'], answer: 2, why: 'Raúl tiene que hacerlo: que + subjuntivo (traiga), con los pronombres delante.' },
            { sentence: 'Lucas, Marisol dice que llámala.', ok: false, options: ['Lucas, Marisol dice que la llames.', 'Lucas, Marisol dice que me llames.', 'Lucas, Marisol dice que la llamas.'], answer: 0, why: 'Después de «que», subjuntivo (llames); «me» de Marisol pasa a «la».' },
          ] },
        ] },
        { title: 'Iván llama a Raúl · Iván calls Raúl', blocks: [
          { kind: 'chat-fill', title: 'Un recado por teléfono · A message by phone', lines: [
            { who: 'Iván', text: 'Raúl, soy Iván. Marisol me pide que te ___ una cosa.', options: ['digo', 'decir', 'diga'], answer: 2, why: 'Me pide que + subjuntivo para yo: diga.' },
            { who: 'Raúl', text: 'A ver, ¿qué pasa ahora?' },
            { who: 'Iván', text: 'Dice que ___ las luces del segundo acto antes de las seis.', options: ['revisa', 'revisas', 'revises'], answer: 2, why: 'Una orden de Marisol para ti: dice que + subjuntivo (revises).' },
            { who: 'Raúl', text: '¿Otra vez? ¿Y si no me da tiempo?' },
            { who: 'Iván', text: 'Entonces, que la ___ tú a ella antes de las seis.', options: ['llamas', 'llama', 'llames'], answer: 2, why: '«Que» + subjuntivo para pasar la orden: llames.' },
            { who: 'Raúl', text: 'Bueno. ¿Tienes tú el cable nuevo?' },
            { who: 'Iván', text: 'Sí, aquí está. ¿Te lo subo a la cabina?' },
            { who: 'Raúl', text: 'No, no ___: déjalo en la entrada y bajo yo.', options: ['me lo subes', 'me lo subas', 'súbemelo'], answer: 1, why: 'Negativo: pronombres delante y subjuntivo, no me lo subas.' },
            { who: 'Iván', text: 'Perfecto. ¿Algo para Marisol?' },
            { who: 'Raúl', text: 'Sí. Dile que ___ tranquila, que todo va a salir bien.', options: ['esté', 'estar', 'está'], answer: 0, why: 'Una petición para Marisol: dile que + subjuntivo (esté). «Que todo va a salir bien» es información.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['esperen', 'Pídeles', 'aquí.', 'que'], accept: ['Pídeles que esperen aquí.'], en: 'Ask them to wait here.' },
            { tiles: ['lo', 'No', 'Marisol.', 'se', 'a', 'digas'], accept: ['No se lo digas a Marisol.'], en: 'Don’t tell Marisol.' },
            { tiles: ['me', 'Dile', 'traiga.', 'Lucas', 'la', 'que', 'a'], accept: ['Dile a Lucas que me la traiga.'], en: 'Tell Lucas to bring it to me.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Cambia la orden · Change the order', items: [
            { prompt: 'Marisol a Lucas: «Llámame esta noche».', instruction: 'Iván se lo dice a Lucas: «Marisol dice que…». (Iván tells Lucas.)', accept: ['Marisol dice que la llames esta noche.', 'Marisol dice que esta noche la llames.'] },
            { prompt: 'Espera aquí y no abras la puerta.', instruction: 'Dilo con usted. (Say it with usted.)', accept: ['Espere aquí y no abra la puerta.'] },
            { prompt: 'Dímelo.', instruction: 'Dilo en negativo. (Make it negative.)', accept: ['No me lo digas.'] },
            { prompt: 'Marisol a los actores: «No lleguen tarde».', instruction: 'Celia se lo cuenta a Lucas: «Marisol nos pide que…». (Celia reports it.)', accept: ['Marisol nos pide que no lleguemos tarde.'] },
            { prompt: 'Dale las entradas a Celia.', instruction: 'Cambia «las entradas» por un pronombre. (Replace “las entradas” with a pronoun.)', accept: ['Dáselas a Celia.', 'Dáselas.'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Marisol', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Marisol deja instrucciones · Marisol leaves instructions', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno apunta qué tiene que decir Iván y a quién. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Apunta qué tiene que decir Iván y a quién. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Marisol', channel: 'MENSAJE DE VOZ · MARISOL, DIRECTORA', src: '/audio/grammar-live/396.mp3',
            before: 'Es la mañana del estreno y Marisol no puede estar en el teatro hasta la tarde. ¿Qué recados crees que deja a Iván? (It is the morning of the premiere and Marisol can’t be at the theatre until the afternoon. What messages do you think she leaves Iván?)',
            gist: { prompt: '¿Para qué manda Marisol el audio?', options: ['Para dar a Iván tareas y recados para la tarde.', 'Para pedir perdón a doña Amparo.', 'Para cancelar el estreno.'], answer: 0, why: 'Llega tarde y le explica a Iván qué tiene que hacer y qué tiene que decir a cada persona.', en: 'Why does Marisol send the message?' },
            details: [
              { prompt: '¿Qué tiene que revisar Raúl?', options: ['Las luces del segundo acto.', 'Las entradas de la prensa.', 'El telón.'], answer: 0, why: '«Dile que revise las luces del segundo acto».', en: 'What does Raúl have to check?' },
              { prompt: '«Si no puede, dile que lo llamo yo». ¿Quién va a llamar?', options: ['Iván.', 'Marisol.', 'Raúl.'], answer: 1, why: '«Lo llamo yo»: indicativo, una información. Marisol va a llamar a Raúl.', en: 'Who is going to call?' },
              { prompt: '¿A qué hora tienen que llegar los actores?', options: ['A las ocho.', 'A las seis.', 'A las cinco.'], answer: 1, why: '«Pídeles a los actores que lleguen a las seis, no más tarde».', en: 'What time do the actors have to arrive?' },
              { prompt: '¿Qué tienen que hacer los invitados de doña Amparo?', options: ['Esperar en la entrada.', 'Llamar a Marisol.', 'Esperar en la sala pequeña.'], answer: 2, why: '«Que pasen a la sala pequeña y que esperen allí».', en: 'What do doña Amparo’s guests have to do?' },
              { prompt: '¿Qué tiene que hacer Iván con las entradas de la prensa?', options: ['Repartirlas él.', 'Dárselas a Celia.', 'Dejarlas en el escritorio.'], answer: 1, why: '«Dáselas a Celia, ella las reparte».', en: 'What does Iván have to do with the press tickets?' },
            ],
            transcript: 'Iván, soy Marisol. Estoy en una cita médica con mi hija y no llego al teatro hasta las cinco, así que hasta entonces tú organizas todo. Primero, llama a Raúl y [[dile que|teal]] [[revise|orange]] las luces del segundo acto: ayer una no funcionaba. Si no puede, dile que [[lo llamo|violet]] yo después. Segundo, [[pídeles|teal]] a los actores [[que lleguen|orange]] a las seis, no más tarde. A Lucas dile también que [[traiga|orange]] la chaqueta azul; la tiene en su casa. Si viene doña Amparo con los invitados, [[que pasen|orange]] a la sala pequeña y [[que esperen|orange]] allí. Las entradas de la prensa están en mi escritorio: [[dáselas|blue]] a Celia, ella las reparte. Y por favor, [[no le digas|orange]] nada a nadie del problema del telón; mañana lo arreglamos. Bueno, nos vemos en un rato. [[¡Que salga todo bien!|orange]]',
            reply: { teacher: 'Tú eres Raúl, Lucas o doña Amparo. Tu alumno, como Iván, te pasa el recado de Marisol que te corresponde: «Marisol dice que…», «Marisol te pide que…».', self: 'Eres Iván. Pasa en voz alta tres recados: a Raúl, a los actores y a Lucas. «Raúl, Marisol dice que…». (You are Iván: pass on three messages aloud.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tú pasas los recados', coach: 'Da órdenes y transmítelas. Give orders and pass them on.',
      steps: [
        { title: 'Órdenes, recados y deseos · Orders, messages and wishes', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y, cuando la tarjeta lo pide, haces de la persona que recibe el recado. Si la forma falla, tú repites la frase bien y siguen.', self: 'Lee la situación y responde en voz alta. Fíjate en quién habla con quién: ¿tú, usted, ustedes? (Read the situation and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: 'Tu jefa sale de la oficina y te deja tres recados para un compañero que no está. ¿Cómo se los pasas? · Your boss leaves three messages for an absent colleague. How do you pass them on?', followUps: ['¿Y si tu compañero no oye bien por teléfono? (What if he can’t hear you well on the phone?)', '¿Hay alguna información, no una orden? (Is there any information, not an order?)'], phrases: ['[[La jefa dice que|teal]] [[mandes|orange]]…', '[[Te pide que|teal]] no…', '—¿Cómo? —[[Que|orange]]…'], hint: 'Orden transmitida: que + subjuntivo. Si no oye, repite solo con «que».', example: 'La jefa dice que mandes el informe antes de las tres y dice que el cliente llega a las cinco. También te pide que no llames al banco hoy. ¿No me oyes? ¡Que no llames al banco hoy!', next: 'Ahora, en casa.' },
            { q: 'En casa, alguien te pide algo para otra persona: «Dile a tu hermano que…». ¿Qué recados son típicos en tu casa? · At home, someone asks you to pass something on. What messages are typical in your home?', followUps: ['¿Quién da más órdenes en tu casa? (Who gives the most orders at home?)', '¿Tú pasas los recados o no? (Do you pass the messages on?)'], phrases: ['Mi madre me dice: «[[Dile a tu hermano que|teal]]…»', '[[Dile que|teal]] me [[devuelva|orange]]…', 'Y yo le digo: «Mamá [[dice que|teal]]…»'], hint: 'Dos pasos: la orden con «dile que» y después tu frase a la otra persona.', example: 'Mi padre siempre me dice: «Dile a tu hermana que me devuelva el coche». Y yo le digo a mi hermana: «Papá dice que le devuelvas el coche esta noche».', next: 'Ahora, con usted.' },
            { q: 'Trabajas en una recepción. Llega una señora mayor para una cita. ¿Qué le dices? · You work at a reception desk. An older lady arrives for an appointment. What do you tell her?', followUps: ['¿Y si llega con su marido? (And if she comes with her husband?)', '¿Qué no tiene que hacer? (What shouldn’t she do?)'], phrases: ['[[Pase|orange]], por favor. / [[Siéntese|orange]] aquí.', '[[No se preocupe|orange]]…', '[[Pasen|orange]] / [[siéntense|orange]] (ustedes)'], hint: 'Usted y ustedes: formas de subjuntivo, con el pronombre detrás en afirmativo.', example: 'Buenos días, señora. Pase, por favor, y siéntese aquí. Espere cinco minutos y no se preocupe: la doctora la llama enseguida.', next: 'Ahora, los secretos.' },
            { q: 'Una amiga quiere contarte el final de una serie que estás viendo. ¿Qué le dices? ¿Y cuándo dices «¡Dímelo ya!»? · A friend wants to tell you the end of a series you’re watching. What do you say?', followUps: ['¿Qué cosas no quieres saber antes? (What don’t you want to know in advance?)', '¿Y qué noticias quieres saber ya? (What news do you want to hear now?)'], phrases: ['¡[[No me lo digas|orange]]!', '¡No me lo [[cuentes|orange]]!', '¡[[Dímelo|blue]] ya!'], hint: 'Afirmativo: pronombres detrás y unidos. Negativo: delante.', example: '¡No me lo digas! No me lo cuentes, por favor, quiero verlo yo. Pero si son los resultados del examen, ¡dímelo ya!', next: 'Ahora, los deseos.' },
            { q: '¿Qué dices en cada caso? Un amigo tiene un examen, otro se va de viaje, otro está enfermo. · What do you say in each case?', followUps: ['¿Y a alguien que se va a dormir? (And to someone going to bed?)', '¿Y a un actor antes de un estreno? (And to an actor before a premiere?)'], phrases: ['¡[[Que te vaya|orange]] bien!', '¡[[Que tengas|orange]] buen viaje!', '¡[[Que te mejores|orange]]!'], hint: 'Deseos cortos: ¡que + subjuntivo!', example: 'Al del examen: ¡Que te vaya muy bien! Al del viaje: ¡Que tengas buen viaje! Y al enfermo: ¡Que te mejores pronto!', next: 'Para terminar, tus peticiones.' },
            { q: 'Piensa en alguien que te pide cosas todos los días: tu jefe, tu familia, tu profesor. ¿Qué te pide? · Think of someone who asks you for things every day. What do they ask you?', followUps: ['¿Y tú qué les pides a ellos? (And what do you ask them?)', '¿Hay algo que te dice que no hagas? (Is there something they tell you not to do?)'], phrases: ['[[Me pide que|teal]]…', '[[Me dice que|teal]] no…', 'Yo [[le pido que|teal]]…'], hint: 'Me pide que / me dice que + subjuntivo. Y una petición tuya.', example: 'Mi jefe me pide que llegue a las ocho y me dice que no use el teléfono en las reuniones. Yo le pido que me mande los horarios con tiempo.', teacher: 'Cuando tu alumno lo dice bien, tú le das un recado para otra persona y tu alumno lo transmite.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú das tres órdenes a tu alumno para otra persona («Dile a… que…») y tu alumno las transmite con «Dice que…», cambiando los pronombres.', self: 'Ahora inventa tres órdenes de tu jefe o de tu familia para otra persona y transmítelas en voz alta: «Dile que…» → «Dice que…». (Invent three orders and pass them on aloud.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Los recados de la directora', coach: 'Transmite órdenes con claridad. Pass on orders clearly.',
      steps: [
        { title: 'Un mensaje al grupo · A message to the group', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada recado: ¿orden (subjuntivo) o información (indicativo)? ¿Están bien los pronombres? Después, tu alumno lee el mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira cada recado: ¿orden o información? ¿Dónde van los pronombres? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Mensaje al grupo del teatro · Message to the theatre group', situation: 'Eres Iván. Marisol tiene fiebre y te pide que escribas al grupo del teatro con sus instrucciones para la función del domingo. También puedes transmitir los recados de tu jefe o de tu profesor a tus compañeros. (You are Iván. Marisol has a fever and asks you to write to the theatre group with her instructions for Sunday’s show. Or pass on your boss’s or teacher’s messages to your colleagues.)', task: [
            'Saluda y explica por qué escribes tú. (Greet them and say why you are writing.)',
            'Transmite tres órdenes con «dice que…» o «les pide que…» + subjuntivo, una de ellas negativa. (Pass on three orders, one negative.)',
            'Da una información con «dice que» + indicativo. (Give one piece of information.)',
            'Da una orden directa a una persona con pronombres: dásela, pídeselas… (One direct order with pronouns.)',
            'Despídete con un deseo: ¡Que…! (End with a wish.)',
          ], starters: ['Hola a todos:', 'Marisol está enferma y me pide que…', 'Dice que…', 'También les pide que no…', 'Lucas, …', 'Si tienen dudas, …', '¡Que…!'],
            words: ['dice que', 'les pide que', 'me pide que', 'lleguen', 'no dejen', 'traigas', 'dásela', 'pídeselas', 'escríbanme', 'no la llamen', '¡que salga bien!'],
            model: 'Hola a todos: Marisol tiene fiebre y me pide que les mande sus instrucciones para el domingo. Primero, dice que lleguen a las cinco y media, porque Raúl quiere probar las luces otra vez. También les pide que no dejen ropa en los camerinos, porque el lunes los limpian. Dice que el teatro está casi lleno: ¡qué bien! Lucas, Marisol dice que traigas la chaqueta azul; si no puedes, dásela a Celia el sábado. Celia, las entradas para tu familia están en recepción: pídeselas a doña Amparo. Si tienen dudas, escríbanme a mí, no la llamen a ella. ¡Que se mejore Marisol y que salga todo genial! Iván',
            minWords: 80,
            checks: [
              { label: 'Una orden transmitida (dice que, les pide que…)', pattern: '(?<!\\p{L})(?:dice|dicen|pide|piden)\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «Marisol dice que lleguen a las cinco y media».' },
              { label: 'Un deseo con «¡Que…!»', pattern: '¡\\s*que(?!\\p{L})', tip: 'Termina, por ejemplo, con «¡Que salga todo bien!».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:pide|piden|pido|pedimos)\\s+que\\s+(?:no\\s+)?(?:(?:me|te|le|les|nos|lo|la|los|las|se)\\s+)?(?:llegan|llegas|traes|traen|dejan|dejas|vienen|vienes|hacen|haces|llaman|llamas|mandas|mandan|ponen|pones)(?!\\p{L})', why: 'Después de «pedir que», el verbo va en subjuntivo: lleguen, traigas, dejen, vengan, hagan, llamen…' },
              { pattern: '(?<!\\p{L})les?\\s+l[oa]s?(?!\\p{L})', why: '«Le lo», «le la», «les los»… no existen: le / les + lo, la, los, las → se lo, se la, se los, se las.' },
              { pattern: '(?<!\\p{L})no\\s+(?:dímelo|dámelo|dáselo|dásela|díselo|pídeselas|llámame|llámala)(?!\\p{L})', why: 'En negativo, los pronombres van delante y el verbo en subjuntivo: no me lo digas, no se la des, no la llames.' },
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
            { tone: 'blue', label: 'TÚ AFIRMATIVO', formula: 'forma propia + pronombres detrás', example: 'Ven. · Dímelo. · Dáselas a Celia.', caption: 'la única forma propia', en: 'Affirmative tú: its own form, pronouns attached' },
            { tone: 'orange', label: 'NO… · USTED · USTEDES', formula: 'presente de subjuntivo', example: 'No vengas. · Venga. · No me lo digan.', caption: 'el resto de las órdenes', en: 'Negative tú, usted, ustedes: present subjunctive' },
            { tone: 'teal', label: 'ORDEN TRANSMITIDA', formula: 'dile que · te dice que · me pide que + subjuntivo', example: 'Dile a Raúl que me lo traiga.', caption: 'cambian la persona y los pronombres', en: 'Relayed order: que + subjunctive, with person and pronoun changes' },
            { tone: 'violet', label: 'INFORMACIÓN', formula: 'dile que · dice que + indicativo', example: 'Dile que Celia viene a las seis.', caption: 'nadie tiene que hacer nada', en: 'Information: indicative' },
            { tone: 'orange', label: '¡QUE + SUBJUNTIVO!', formula: 'que + subjuntivo, sin otro verbo', example: '¡Que pasen! · —¿Qué? —Que subas. · ¡Que salga bien!', caption: 'orden a otra persona, repetición, deseo', en: 'Que + subjunctive alone: order for someone else, repetition, wish' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate dos cosas: **¿hablo directamente con quien tiene que actuar?** Si sí, imperativo (forma propia solo con tú afirmativo). Si la orden pasa por otra persona, **que + subjuntivo**. Y **¿alguien tiene que hacer algo?** Si no, es información: indicativo.', en: 'Ask yourself two things: am I speaking directly to the person who has to act? If so, use the imperative (its own form only with affirmative tú). If the order goes through someone else, use que + subjunctive. And does anyone have to do anything? If not, it’s information: indicative.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Señores, ___ aquí, por favor.', options: ['esperen', 'esperan', 'espera'], answer: 0, why: 'Ustedes: forma de subjuntivo, esperen.' },
            { prompt: 'Dile a tu hermano que me ___ la bici mañana.', options: ['devolver', 'devuelva', 'devuelve'], answer: 1, why: 'Orden transmitida: que + subjuntivo (devuelva).' },
            { prompt: 'Ana dice que el concierto ___ a las nueve.', options: ['empiece', 'empezar', 'empieza'], answer: 2, why: 'Información: indicativo (empieza).' },
            { prompt: '¿El resultado del partido? ¡No ___! Lo veo esta noche.', options: ['me lo cuentes', 'me lo cuentas', 'cuéntamelo'], answer: 0, why: 'Negativo: pronombres delante y subjuntivo.' },
            { prompt: '—Tengo el examen mañana. —¡Que te ___ muy bien!', options: ['va', 've', 'vaya'], answer: 2, why: 'Deseo con «que»: subjuntivo de ir, vaya.' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Clínica dental Sonrisa, lunes por la mañana. La doctora Lidia Campos da instrucciones a la recepcionista, Mónica, y Mónica habla con un paciente, el señor Paredes (usted).', en: 'Sonrisa dental clinic, Monday morning. Dr Lidia Campos gives instructions to the receptionist, Mónica, and Mónica talks to a patient, Mr Paredes (usted).' },
          { kind: 'rewrite', title: 'Mónica pasa los recados · Mónica passes on the messages', items: [
            { prompt: 'Doctora: «Mónica, dile al señor Paredes que espere diez minutos».', instruction: 'Mónica al señor Paredes: «La doctora le pide que…». (Mónica to Mr Paredes.)', accept: ['La doctora le pide que espere diez minutos.', 'La doctora le pide que espere 10 minutos.'] },
            { prompt: 'Doctora: «Que pase el señor Paredes».', instruction: 'Mónica se lo dice a él directamente, con usted: «Señor Paredes, …». (Directly, with usted.)', accept: ['Señor Paredes, pase, por favor.', 'Señor Paredes, pase.', 'Señor Paredes, pase usted.', 'Señor Paredes, pase usted, por favor.'] },
            { prompt: 'Doctora al señor Paredes: «Tráigame la radiografía el lunes».', instruction: 'Mónica se lo recuerda por teléfono: «La doctora dice que…». (Mónica reminds him.)', accept: ['La doctora dice que le traiga la radiografía el lunes.', 'La doctora dice que el lunes le traiga la radiografía.'] },
          ] },
        ] },
        { title: 'Ampliación: órdenes contadas en pasado · Extension: reported orders in the past', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: solo para reconocer. Optional, just to recognise.', blocks: [
          { kind: 'lead', text: 'Cuando contamos una orden **en pasado** («me dijo», «nos pidió»), el subjuntivo cambia a otra forma, el **imperfecto de subjuntivo**: «Marisol me dijo que **viniera**» (= told me to come). Lo vas a estudiar más adelante; hoy solo tienes que **reconocerlo**. Compara: «Me dijo que **venía**» (indicativo) es una información: ella iba a venir.', en: 'When we report an order in the past (“me dijo”, “nos pidió”), the subjunctive changes to another form, the imperfect subjunctive: “Marisol me dijo que viniera” (she told me to come). You will study it later; today you only need to recognise it. Compare: “Me dijo que venía” (indicative) is information: she was coming.' },
          { kind: 'choice', title: 'Reconoce la orden · Recognise the order', items: [
            { prompt: '«Ayer Marisol me dijo que llegara a las seis». ¿Qué significa?', options: ['Marisol will arrive at six.', 'Marisol told me to arrive at six.', 'Marisol said she arrived at six.'], answer: 1, why: '«Llegara» (imperfecto de subjuntivo): una orden contada en pasado.', en: 'What does it mean?' },
            { prompt: '«Celia me dijo que llegaba a las seis». ¿Qué significa?', options: ['Celia asked me to wait until six.', 'Celia told me to arrive at six.', 'Celia said she was arriving at six.'], answer: 2, why: '«Llegaba» (indicativo): una información sobre Celia.', en: 'What does it mean?' },
            { prompt: '«Doña Amparo nos pidió que la esperáramos en la sala». ¿Quién tenía que esperar?', options: ['Nosotros.', 'Marisol.', 'Doña Amparo.'], answer: 0, why: '«Esperáramos» es nosotros: doña Amparo pidió y nosotros esperamos.', en: 'Who had to wait?' },
            { prompt: '¿Qué frase cuenta en pasado la orden «No toques el telón»?', options: ['Me dijo que no tocaba el telón.', 'Me dijo que no tocara el telón.', 'Me dice que no toque el telón.'], answer: 1, why: '«No tocara»: orden en pasado. «No tocaba» informa; «me dice que no toque» es presente.', en: 'Which sentence reports the order “Don’t touch the curtain” in the past?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Solo comprensión: el imperfecto de subjuntivo se estudia más adelante. Extra: tu alumno cuenta en presente («Marisol me dice que…») las órdenes de las frases.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 097 · Perfecto de subjuntivo: pasado valorado desde ahora', text: 'Ya usas el presente de subjuntivo para dar órdenes, pasarlas a otras personas y desear cosas. El paso natural: el **perfecto de subjuntivo** (haya llegado, hayas terminado), para reaccionar y valorar desde ahora algo que ya pasó: «Me alegra que hayas venido», «Espero que Raúl haya revisado las luces».', en: 'You now use the present subjunctive to give orders, pass them on and wish things. The natural next step: the present perfect subjunctive (haya llegado, hayas terminado), to react to and evaluate, from now, something that has already happened: “I’m glad you’ve come”, “I hope Raúl has checked the lights”.', href: '/sistema-verbal/preterito-perfecto-subjuntivo', label: 'Ir a la clase 097' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “dile que viene” y “dile que venga”?». Respuesta esperada: la primera es una información; la segunda, una orden. Tarea: cinco recados reales de esta semana (de la familia, del trabajo), contados con «me dice que…» o «me pide que…».' },
        ] },
      ],
    },
  ],
};
