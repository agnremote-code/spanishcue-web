import type { LiveLesson } from '../types';

/**
 * Lesson 465 · B2 · Conectores para exposición y refutación (course unit G165).
 * Builds on G077 (g377: primero, por eso, es decir, o sea), G116 (g416: así que,
 * por lo tanto, en consecuencia), G117 (g417: además, incluso, encima, es más; en
 * primer lugar / por último as a light recap), G093 (no creo que + subjuntivo),
 * G153 (g453: causal connectors) and G156 (g456: sin embargo, no obstante, aun así,
 * ahora bien). Those connectors are not taught again here: the focus is on building
 * a whole exposition and refuting an opponent.
 * Content: ordering (en primer lugar… por último, para empezar, a continuación, por
 * un lado / por otro (lado), por una parte / por otra); adding (además, asimismo,
 * es más, incluso; encima, colloquial); exemplifying (por ejemplo, es el caso de,
 * pongamos por caso); reformulating (es decir, o sea, en otras palabras, mejor
 * dicho = self-correction); consequence (por (lo) tanto, por consiguiente, así que;
 * de ahí que + subjuntivo, with tense by frame; de ahí + noun); conclusion (en
 * resumen, en definitiva, en conclusión; total, que…, colloquial); refutation (no
 * es cierto / no es verdad que + subjuntivo vs es cierto que + indicativo, al
 * contrario after a negated idea, no…, sino más bien, lejos de + infinitivo, en
 * absoluto = not at all, nada más lejos de la realidad); attribution (según + noun /
 * según tú, de acuerdo con, como señala). Register and punctuation throughout.
 * Ampliación: register shift (chat → speech), de ahí + noun, and «a saber» (G189)
 * receptively.
 * Scene: the debate league of the Universidad Popular de Arenales (adult
 * education). Motion for Saturday's final: «Los museos públicos deberían ser
 * gratuitos». Valeria Ibáñez (nurse) and Rubén Ortega (engineer) argue for it;
 * Clara Montero (retired philosophy teacher) coaches them. Escuchar: the opening
 * speech of the opposing captain, Gonzalo Beltrán (es-CO-GonzaloNeural, one voice).
 * Escribir: an opinion column for the university bulletin. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 465,
  level: 'B2',
  title: 'Conectores para exposición y refutación',
  subtitle: 'Organizar una exposición o un discurso, apoyarlo con ejemplos y fuentes y refutar los argumentos contrarios con precisión.',
  legend: [
    { tone: 'blue', label: 'ORDENAR Y AÑADIR · en primer lugar, por un lado, a continuación, asimismo, es más' },
    { tone: 'teal', label: 'EJEMPLIFICAR, REFORMULAR Y CITAR · por ejemplo, es el caso de, es decir, mejor dicho, según' },
    { tone: 'violet', label: 'CONSECUENCIA Y CONCLUSIÓN · por lo tanto, por consiguiente, de ahí que + subj., en definitiva' },
    { tone: 'orange', label: 'REFUTAR · no es cierto que + subj., al contrario, más bien, lejos de + inf., en absoluto' },
  ],
  optionNotes: {
    'Según de': '«Según» va directamente delante del nombre: «según el informe», «según los datos». Nunca lleva «de».',
    'En otra mano': 'Es un calco del inglés «on the other hand». En español se dice «por otro lado» o «por otra parte».',
    'Nada más lejos que la realidad': 'La expresión fija es «nada más lejos **de** la realidad».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Exponer y refutar', coach: 'Un discurso con mapa. A speech with a map.',
      steps: [
        { title: 'Tres minutos para convencer · Three minutes to persuade', blocks: [
          { kind: 'lead', text: 'La Universidad Popular de Arenales celebra el sábado la final de su liga de debate. La moción: «Los museos públicos deberían ser gratuitos». Valeria Ibáñez, enfermera, y Rubén Ortega, ingeniero, defienden el «sí»; Clara Montero, profesora jubilada de Filosofía, los entrena. Cada orador tiene tres minutos, y si el discurso no tiene estructura, el jurado se pierde. Ya conoces «primero», «por eso», «además» o «incluso» (clases 077, 116 y 117), y en la clase 156 aprendiste a conceder y objetar. Hoy construyes una **exposición completa**: ordenar, añadir, ejemplificar, reformular, citar y concluir. Y aprendes a **refutar** el argumento contrario: «No es cierto que…», «Lejos de…», «Al contrario».', en: 'The adult-education college in Arenales holds the final of its debate league on Saturday; the motion is “Public museums should be free”. Valeria and Rubén argue for it and Clara coaches them. Each speaker has three minutes, and without structure the judges get lost. Today you build a complete exposition and learn to refute the other side.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres versiones del mismo argumento. Tu alumno dice cuál convencería más al jurado y qué palabras le dan forma.', self: 'Lee las tres versiones en voz alta. ¿Cuál convencería más a un jurado? ¿Qué palabras le dan forma? (Which version would convince a jury, and which words give it shape?)' } },
          { kind: 'compare', title: 'Ideas sueltas, argumento, refutación · Loose ideas, argument, rebuttal', columns: [
            { tone: 'blue', label: 'IDEAS SUELTAS', sentence: 'La entrada cuesta doce euros. Muchas familias no van. Los museos son de todos.', idea: 'Las ideas están, pero el oyente no sabe cuál es la causa, cuál la consecuencia ni adónde lleva el razonamiento.', en: 'The ideas are there, but the listener can’t tell cause from consequence or where the reasoning is going.' },
            { tone: 'violet', label: 'UN ARGUMENTO', sentence: '[[En primer lugar|blue]], la entrada cuesta doce euros; [[de ahí que|violet]] muchas familias no vayan. [[En definitiva|violet]], un museo público debería ser de todos.', idea: 'Los conectores dicen qué lugar ocupa cada idea: primer argumento, consecuencia, conclusión.', en: 'The connectors tell the listener what role each idea plays: first point, consequence, conclusion.' },
            { tone: 'orange', label: 'UNA REFUTACIÓN', sentence: 'Dicen que lo gratis no se valora. [[Nada más lejos de la realidad|orange]]: los domingos gratuitos, las visitas duran lo mismo.', idea: 'Se cita la idea contraria, se rechaza y se da un dato.', en: 'The opposing claim is quoted, rejected and answered with evidence.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La entrada es cara; de ahí que muchas familias no vayan». ¿Qué introduce «de ahí que»?', options: ['Una consecuencia de lo anterior.', 'Un ejemplo.', 'Una refutación.'], answer: 0, why: '«De ahí que» presenta lo que sigue como resultado de lo dicho antes: el precio explica que las familias no vayan.', en: 'Here “de ahí que” presents what follows as a result of the price.' },
            { prompt: '¿Qué hace la frase «Nada más lejos de la realidad»?', options: ['Rechaza con énfasis una idea que alguien ha dicho.', 'Añade un argumento en la misma dirección.', 'Resume el discurso.'], answer: 0, why: 'Rechaza la afirmación anterior con mucha fuerza: «eso es completamente falso».', en: 'It emphatically rejects a claim someone has made: “that couldn’t be further from the truth”.' },
          ] },
        ] },
        { title: 'Ordenar y añadir · Ordering and adding', mascot: '/brand/mascot/studying.webp', coach: '¿Primero, después o además? First, next or on top of that?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ORDENAR Y AÑADIR', question: '¿Quieres que el oyente sepa en qué parte del discurso estás?', en: 'Ordering connectors build the map of a speech: en primer lugar… en segundo lugar… por último; para empezar… a continuación (next, in a talk)… para terminar; por un lado… por otro (lado) to present two sides or two aspects. Adding connectors stack arguments: además (neutral), asimismo (formal, written), es más (the next point is even stronger), incluso (the most surprising item) and encima (colloquial, often a complaint).', formula: ['En primer lugar, … En segundo lugar, … Por último, …', 'Para empezar, … A continuación, … Para terminar, …', 'Por un lado, … Por otro (lado), … · Por una parte, … Por otra (parte), …', 'Además / Asimismo / Es más, + nuevo argumento · incluso + el dato más fuerte'],
            meaning: 'Los conectores de **orden** dibujan el mapa del discurso: el jurado sabe cuántas ideas hay y cuándo terminas. **Por un lado… por otro** presenta dos aspectos o dos caras de un tema. Los de **adición** suman argumentos: **además** es neutro; **asimismo** es formal y escrito; **es más** anuncia un argumento todavía más fuerte; **incluso** señala el dato más sorprendente; **encima** es coloquial y suele añadir una queja.',
            examples: [
              { es: '[[En primer lugar|blue]], los museos públicos se pagan con impuestos. [[Por último|blue]], la cultura no debería depender del bolsillo.', en: 'First, public museums are paid for with taxes. Finally, culture shouldn’t depend on how much money you have.' },
              { es: '[[Por un lado|blue]], la entrada libre atrae público; [[por otro|blue]], el museo pierde ingresos.', en: 'On the one hand, free entry draws visitors; on the other, the museum loses income: two sides of the issue.' },
              { es: 'El horario es corto. [[Es más|blue]], los lunes el museo no abre.', en: 'The opening hours are short. What’s more, the museum is closed on Mondays: a stronger point follows.' },
              { es: 'La exposición atrajo a todo tipo de público, [[incluso|blue]] a personas que nunca habían entrado en un museo.', en: 'The exhibition drew all kinds of visitors, even people who had never set foot in a museum.' },
            ] },
          { kind: 'table', title: 'Función y registro · Function and register', head: ['Conector', 'Qué hace', 'Registro'], rows: [
            ['[[en primer lugar|blue]] · en segundo lugar · por último', 'numera los argumentos', 'neutro; discursos e informes'],
            ['[[para empezar|blue]] · [[a continuación|blue]] · para terminar', 'abre, pasa al siguiente punto, cierra', 'neutro; muy útil al hablar en público'],
            ['[[por un lado|blue]]… por otro (lado) · por una parte… por otra', 'presenta dos aspectos del tema', 'neutro'],
            ['[[asimismo|blue]] (también: así mismo)', 'añade (= también, además)', 'formal, sobre todo escrito'],
            ['[[es más|blue]]', 'añade un argumento más fuerte', 'neutro'],
            ['[[encima|blue]]', 'añade algo negativo, con queja', 'coloquial'],
          ], note: 'Puntuación: al principio de la oración, **coma detrás** («Asimismo, el museo…»); en medio, **entre comas** («El museo, además, cierra pronto»). **Incluso** no lleva coma: «Incluso los jubilados pagan».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Informe escrito para el jurado.', prompt: 'Las entradas cubren una parte pequeña del presupuesto. ___, las donaciones aumentan cuando la entrada es libre.', options: ['Encima', 'Asimismo', 'Total'], answer: 1, why: 'Se añade un argumento en un texto formal: «asimismo». «Encima» y «total» son coloquiales.', en: 'Ticket sales cover a small part of the budget. In addition, donations increase when entry is free.' },
            { prompt: 'Han subido el precio, han reducido el horario y, ___, han cerrado la cafetería.', options: ['encima', 'por un lado', 'a continuación'], answer: 0, why: 'Una conversación con queja: «encima» suma otro dato negativo. «A continuación» ordena los pasos de una exposición.', en: 'They’ve raised the price, cut the opening hours and, on top of that, closed the café.' },
            { prompt: 'Primero les explico el problema. ___, les presento nuestra propuesta.', options: ['Es más', 'Incluso', 'A continuación'], answer: 2, why: 'En una presentación, «a continuación» anuncia el siguiente paso. «Es más» e «incluso» añaden argumentos, no ordenan partes.', en: 'First I’ll explain the problem. Next, I’ll present our proposal.' },
          ] },
        ] },
        { title: 'Ejemplificar, reformular y citar · Examples, rephrasing, sources', mascot: '/brand/mascot/speaking.webp', coach: 'Un dato, una fuente, una aclaración. A fact, a source, a clarification.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'EJEMPLO, REFORMULACIÓN Y FUENTE', question: '¿Quieres apoyar una idea con un caso, aclararla o decir de dónde viene el dato?', en: 'Por ejemplo introduces a case; es el caso de + noun points to a real example of what you just said; pongamos por caso sets up a hypothetical one. Es decir explains the same idea in other words; o sea does the same in conversation; en otras palabras sounds more careful; mejor dicho corrects what you have just said (or rather). Según, de acuerdo con and como señala attribute an idea or a figure to a source: the speaker does not take full responsibility for it.', formula: ['por ejemplo, … · es el caso de + nombre · pongamos por caso + nombre / que…', 'es decir, … · o sea, … (coloquial) · en otras palabras, … · mejor dicho, … (corrige)', 'según + nombre · según tú / ella · de acuerdo con + nombre · como señala / afirma + fuente'],
            meaning: '**Por ejemplo** introduce un caso; **es el caso de** + nombre señala un ejemplo real de lo que acabas de decir; **pongamos por caso** plantea un ejemplo imaginado. **Es decir** explica lo mismo con otras palabras; **o sea** hace lo mismo en la conversación; **en otras palabras** es más cuidado; **mejor dicho** **corrige** lo que acabas de decir. **Según**, **de acuerdo con** y **como señala** atribuyen una idea o un dato a una fuente.',
            examples: [
              { es: 'Algunas ciudades ya han eliminado la entrada; [[es el caso de|teal]] Valdemora, donde las visitas se duplicaron.', en: 'Some cities have already scrapped entry fees; Valdemora is a case in point, where visits doubled.' },
              { es: '[[Pongamos por caso|teal]] una familia de cuatro: entre entradas y transporte, una tarde en el museo cuesta casi cincuenta euros.', en: 'Take, say, a family of four: with tickets and transport, an afternoon at the museum costs almost fifty euros.' },
              { es: 'Asistieron unas cien personas, [[mejor dicho|teal]], ciento veinte.', en: 'About a hundred people attended, or rather, a hundred and twenty: the speaker corrects the figure.' },
              { es: '[[Según|teal]] el informe municipal, solo una de cada tres familias visita el museo.', en: 'According to the council’s report, only one family in three visits the museum: the figure belongs to the report.' },
            ] },
          { kind: 'tip', icon: '💡', title: '«Según» y «de acuerdo con» · Two ways to cite', text: '«Según» no lleva «de» («según el informe») y con pronombres usa **tú**, no «ti»: «según tú», «según ella». **De acuerdo con el informe** significa «según el informe»; no lo confundas con **estar de acuerdo con** alguien, que es compartir su opinión.', en: '“Según” takes no “de” and uses subject pronouns: según tú, según ella. “De acuerdo con el informe” means “according to the report”; “estar de acuerdo con alguien” means “to agree with someone”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El debate empieza a las seis, ___, a las seis y media: lo acaban de cambiar.', options: ['es decir', 'mejor dicho', 'por ejemplo'], answer: 1, why: 'El hablante corrige un dato: «mejor dicho». «Es decir» explicaría lo mismo con otras palabras, no lo corregiría.', en: 'The debate starts at six, or rather, at half past six: they’ve just changed it.' },
            { prompt: 'La entrada es gratuita para los mayores de sesenta y cinco, ___, los jubilados no pagan.', options: ['es el caso de', 'es decir', 'mejor dicho'], answer: 1, why: 'La segunda parte explica la primera con otras palabras, sin corregirla: «es decir».', en: 'Entry is free for over-65s; in other words, retired people don’t pay.' },
            { prompt: '___ la directora del museo, el número de visitantes ha subido un veinte por ciento.', options: ['Según de', 'Según', 'Es decir'], answer: 1, why: 'Para atribuir un dato a una persona: «según» + nombre, sin «de».', en: 'According to the museum director, visitor numbers have risen by twenty per cent.' },
          ] },
        ] },
        { title: 'Consecuencia y conclusión · Consequences and conclusions', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Indicativo o subjuntivo? Indicative or subjunctive?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CONSECUENCIA Y CONCLUSIÓN', question: '¿Lo que sigue es el resultado de lo dicho, o el cierre de todo el discurso?', en: 'You already know así que and por lo tanto (class 116). Por consiguiente is the formal equivalent. De ahí que also introduces a consequence, but presents it as something explained by what came before, and in careful Spanish it takes the subjunctive: present subjunctive in a present frame, imperfect subjunctive in a past one. De ahí + noun is a short form: “De ahí su éxito”. To close: en resumen sums up, en definitiva gives the final verdict, en conclusión is the formal closing of a speech or essay, and “total, que…” wraps up a story in conversation.', formula: ['causa; por lo tanto / por tanto / por consiguiente, + indicativo', 'causa, así que + indicativo (neutro, muy oral)', 'causa; de ahí que + subjuntivo · de ahí + nombre', 'en resumen · en definitiva · en conclusión · total, que… (coloquial)'],
            meaning: 'Ya conoces **así que** y **por lo tanto** (clase 116); **por consiguiente** es su equivalente formal. **De ahí que** también introduce una consecuencia, pero la presenta como algo que **se explica** por lo anterior, y en la lengua cuidada va con **subjuntivo**: presente si el marco es presente, imperfecto si es pasado. **De ahí** + nombre es la forma breve: «De ahí su éxito». Para cerrar: **en resumen** resume; **en definitiva** da la valoración final; **en conclusión** es el cierre formal de un discurso o un ensayo; **total, que…** cierra una historia en la conversación.',
            examples: [
              { es: 'Las entradas cubren solo el doce por ciento del gasto; [[por consiguiente|violet]], la gratuidad no arruinaría el museo.', en: 'Tickets cover only twelve per cent of costs; consequently, free entry would not ruin the museum: formal.' },
              { es: 'El museo cierra a las seis; [[de ahí que|violet]] tan pocos trabajadores lo visiten.', en: 'The museum closes at six, which is why so few working people visit it: present frame, present subjunctive.' },
              { es: 'El año pasado subieron la entrada; [[de ahí que|violet]] las visitas bajaran un quince por ciento.', en: 'Last year they raised the price, hence the fifteen per cent drop in visits: past frame, imperfect subjunctive.' },
              { es: '[[En definitiva|violet]], un museo que no puede visitar todo el mundo no es del todo público.', en: 'In short, a museum that not everyone can visit is not fully public: the final verdict.' },
            ] },
          { kind: 'compare', title: 'Misma idea, distinto modo · Same idea, different mood', columns: [
            { tone: 'violet', label: 'POR LO TANTO + INDICATIVO', sentence: 'La entrada es cara; [[por lo tanto|violet]], muchas familias no van.', idea: 'La consecuencia se afirma como información nueva.', en: 'The consequence is stated as new information: indicative.' },
            { tone: 'violet', label: 'DE AHÍ QUE + SUBJUNTIVO', sentence: 'La entrada es cara; [[de ahí que|violet]] muchas familias no vayan.', idea: 'La consecuencia se presenta como explicada por lo anterior: subjuntivo.', en: 'The consequence is presented as explained by what came before: subjunctive.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El museo no tiene ascensor; de ahí que muchas personas mayores no ___ subir a la segunda planta.', options: ['pueden', 'podrán', 'puedan'], answer: 2, why: '«De ahí que» + subjuntivo. El marco es presente («no tiene»): presente de subjuntivo, «puedan».', en: 'The museum has no lift, which is why many older people can’t get up to the second floor.' },
            { prompt: 'El año pasado la exposición fue gratuita; de ahí que ___ tantas colas.', options: ['hay', 'hubiera', 'haya'], answer: 1, why: 'Marco pasado («fue»): «de ahí que» + imperfecto de subjuntivo, «hubiera».', en: 'Last year the exhibition was free, hence the long queues.' },
            { context: 'Rubén le cuenta a un amigo cómo fue el ensayo.', prompt: 'Clara nos hizo repetir el discurso cinco veces. ___, que llegué a casa a medianoche.', options: ['Total', 'En conclusión', 'Por consiguiente'], answer: 0, why: '«Total, que…» cierra una historia en la conversación. «En conclusión» y «por consiguiente» son formales y no van con «que».', en: 'Clara made us run through the speech five times. Long story short, I got home at midnight.' },
          ] },
        ] },
        { title: 'Refutar · Refuting', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Cita, rechaza y demuestra. Quote, reject, prove.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'REFUTAR UN ARGUMENTO', question: '¿Quieres decir que lo que afirma el otro es falso y poner algo en su lugar?', en: 'No es cierto / no es verdad que deny a specific claim and take the subjunctive (compare es cierto que + indicative). Al contrario follows a negated idea and asserts the opposite. Más bien replaces an idea with a more accurate one, often cautiously. Lejos de + infinitive says the result is the opposite of what was expected; the infinitive shares the subject of the main clause. En absoluto means “not at all”, never “absolutely”. Nada más lejos de la realidad rejects a claim emphatically, right after quoting it.', formula: ['No es cierto / No es verdad que + subjuntivo', 'idea negada; al contrario, + idea opuesta', 'no…, sino más bien… · …; más bien, …', 'Lejos de + infinitivo, + resultado contrario', 'En absoluto (= no, de ninguna manera) · Nada más lejos de la realidad'],
            meaning: '**No es cierto / no es verdad que** niegan una afirmación concreta y llevan **subjuntivo** (compara: **es cierto que** + indicativo). **Al contrario** va **después de una idea negada** y afirma lo opuesto. **Más bien** sustituye una idea por otra más exacta, a menudo con prudencia. **Lejos de** + **infinitivo** dice que el resultado es el contrario del esperado; el infinitivo tiene el mismo sujeto que la oración principal. **En absoluto** significa «no, de ninguna manera». **Nada más lejos de la realidad** rechaza con énfasis una idea que acabas de citar.',
            examples: [
              { es: '[[No es cierto que|orange]] los jóvenes no vayan a los museos: el año pasado fueron la mitad del público.', en: 'It isn’t true that young people don’t go to museums: last year they were half the visitors.' },
              { es: 'La entrada libre no es un gasto; [[al contrario|orange]], es una inversión en el barrio.', en: 'Free entry is not an expense; on the contrary, it’s an investment in the neighbourhood.' },
              { es: '[[Lejos de|orange]] vaciar las salas, la gratuidad las llenó de público nuevo.', en: 'Far from emptying the galleries, free entry filled them with new visitors.' },
              { es: 'El problema no es el precio, sino [[más bien|orange]] el horario.', en: 'The problem isn’t really the price; it’s more the opening hours.' },
            ] },
          { kind: 'table', title: 'Fórmulas para refutar · Formulas for refuting', head: ['Fórmula', 'Qué hace', 'Registro'], rows: [
            ['[[No es cierto que|orange]] · No es verdad que + subjuntivo', 'niega una afirmación concreta', 'neutro'],
            ['…no…; [[al contrario|orange]], …', 'tras una idea negada, afirma lo opuesto', 'neutro'],
            ['no…, sino [[más bien|orange]]…', 'corrige con una idea más exacta', 'neutro, prudente'],
            ['[[Lejos de|orange]] + infinitivo, …', 'el resultado es el contrario del esperado', 'formal: discursos, prensa, ensayos'],
            ['—¿…? —[[En absoluto|orange]]. · No estoy en absoluto de acuerdo.', 'niega con fuerza', 'neutro'],
            ['Dicen que… [[Nada más lejos de la realidad|orange]].', 'rechaza con énfasis lo que otros afirman', 'enfático: debates, prensa, conversación'],
          ], note: 'Fíjate en el modo: **es cierto que** el precio **influye** (afirmas: indicativo) / **no es cierto que** el precio **influya** (niegas: subjuntivo), como «creo que» / «no creo que» (clase 093).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No es cierto que la entrada gratuita ___ a los visitantes de pago.', options: ['espantará', 'espanta', 'espante'], answer: 2, why: '«No es cierto que» niega la afirmación: subjuntivo, «espante».', en: 'It isn’t true that free entry scares off paying visitors.' },
            { prompt: '___ reducir los ingresos, la entrada libre aumentó las donaciones.', options: ['Al contrario', 'Lejos de', 'En absoluto'], answer: 1, why: 'Delante de un infinitivo, para decir que pasó lo contrario de lo esperado: «lejos de».', en: 'Far from cutting income, free entry increased donations.' },
            { prompt: '—¿Crees que la cultura es un lujo? —___. Es un derecho.', options: ['En absoluto', 'Absolutamente', 'Asimismo'], answer: 0, why: '«En absoluto» = no, de ninguna manera. «Absolutamente» como respuesta afirmaría, justo lo contrario.', en: '—Do you think culture is a luxury? —Not at all. It’s a right.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/seated.webp', coach: '¿Modo, forma o falso amigo? Mood, form or false friend?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿el modo, la forma del conector, la puntuación o un calco del inglés?', self: 'Lee cada frase y piensa qué falla: ¿el modo, la forma del conector, la puntuación o un calco del inglés? Después toca para ver la corrección. (What’s wrong in each sentence?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'La entrada es cara; de ahí que muchas familias no pueden ir.', right: 'La entrada es cara; de ahí que muchas familias no puedan ir.', why: '«De ahí que» va con subjuntivo en la lengua cuidada.' },
            { wrong: 'No es cierto que lo gratis se valora menos.', right: 'No es cierto que lo gratis se valore menos.', why: 'Al negar la verdad de una afirmación, subjuntivo. Con «es cierto que» (sin «no»), indicativo.' },
            { wrong: 'Lejos de reducen las visitas, las aumentan.', right: 'Lejos de reducir las visitas, la entrada libre las aumenta.', why: '«Lejos de» es una preposición: va con infinitivo, y el infinitivo comparte sujeto con la oración principal.' },
            { wrong: 'En otra mano, el horario es muy corto.', right: 'Por otro lado, el horario es muy corto.', why: 'Calco del inglés «on the other hand». En español: por otro lado, por otra parte.' },
            { wrong: '—¿Te parece un buen argumento? —En absoluto. Es el mejor.', right: '—¿Te parece un buen argumento? —Sí, totalmente. Es el mejor.', why: '«En absoluto» niega: significa «no, de ninguna manera», no «absolutely».' },
            { wrong: 'Según ti, ¿cuál es el mejor argumento?', right: 'Según tú, ¿cuál es el mejor argumento?', why: '«Según» va con las formas «yo, tú»: según tú, según ella.' },
            { wrong: 'Dicen que el museo pierde dinero. Nada más lejos que la realidad.', right: 'Dicen que el museo pierde dinero. Nada más lejos de la realidad.', why: 'La expresión fija es «nada más lejos de la realidad».' },
            { wrong: 'Hay pocas visitas por lo tanto el museo cierra antes.', right: 'Hay pocas visitas; por lo tanto, el museo cierra antes.', why: 'Entre dos oraciones, punto o punto y coma delante del conector y coma detrás.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Las salas no tienen calefacción; de ahí que en invierno ___ tan pocos visitantes.', options: ['vienen', 'vengan', 'vendrán'], answer: 1, why: '«De ahí que» + subjuntivo, en un marco presente: «vengan».', en: 'The galleries have no heating, which is why so few visitors come in winter.' },
            { prompt: 'El museo no está vacío; ___, los domingos hay que hacer cola.', options: ['al contrario', 'por ejemplo', 'en otra mano'], answer: 0, why: 'Tras una idea negada («no está vacío»), «al contrario» afirma lo opuesto: está lleno.', en: 'The museum isn’t empty; on the contrary, you have to queue on Sundays.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno presenta en tres oraciones una opinión sobre un servicio público de su ciudad: «En primer lugar…», «de ahí que…» y «En definitiva…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El ensayo general', coach: 'Toca cada conector marcado. Tap each marked connector.',
      steps: [
        { title: 'Jueves por la tarde, aula 4 · Thursday evening, room 4', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Clara, tu alumno es Valeria y los dos leen a Rubén por turnos. Después tu alumno toca cada expresión marcada y explica su función y su registro.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿ordena, añade, ejemplifica, reformula, concluye o refuta? ¿Es formal o coloquial? (Tap each marked phrase and think about its function and register.)' } },
          { kind: 'explore', title: 'Tres minutos, ni uno más', setting: 'Aula 4 de la Universidad Popular, dos días antes de la final. Clara cronometra; Valeria y Rubén ensayan sus discursos. (Room 4, two days before the final: Clara times the speeches.)', lines: [
            { who: 'Clara', text: 'Valeria, empieza tú. Tres minutos, y el jurado tiene que saber en todo momento en qué parte del discurso estás.', en: 'Valeria, you start. Three minutes, and the judges must always know which part of the speech you’re in.' },
            { who: 'Valeria', text: 'Defendemos que los museos públicos deben ser gratuitos, por tres razones. [[En primer lugar|blue]], son de todos: se mantienen con impuestos, [[es decir|teal]], ya los hemos pagado.', en: 'We argue that public museums should be free, for three reasons. First, they belong to everyone: they’re funded by taxes; in other words, we’ve already paid for them.' },
            { who: 'Rubén', text: '[[En segundo lugar|blue]], el precio aleja a muchas familias. [[Según|teal]] la encuesta municipal, una de cada tres no ha visitado nunca el museo.', en: 'Second, the price keeps many families away. According to the council survey, one in three has never visited the museum.' },
            { who: 'Rubén', text: '[[Por ejemplo|teal]], una familia de cuatro paga casi cuarenta euros por una tarde. Y [[encima|blue]] el museo cierra a las seis, justo cuando la gente sale de trabajar.', en: 'For example, a family of four pays almost forty euros for an afternoon. And on top of that, the museum closes at six, just as people finish work.' },
            { who: 'Clara', text: 'Cuidado, Rubén: «encima» suena a queja de sobremesa. En la final, mejor «[[es más|blue]]» o «[[asimismo|blue]]».', en: 'Careful, Rubén: “encima” sounds like an after-dinner grumble. In the final, say “es más” or “asimismo”.' },
            { who: 'Valeria', text: 'Entendido. ¿Y la refutación? El otro equipo va a decir que lo gratis no se valora.', en: 'Got it. And the rebuttal? The other team will say people don’t value what’s free.' },
            { who: 'Clara', text: 'Pues lo refutas con datos: «[[No es cierto que|orange]] el público valore menos un museo gratuito: los domingos de entrada libre, la visita media dura lo mismo».', en: 'Then you refute it with data: “It isn’t true that people value a free museum less: on free Sundays, the average visit lasts just as long.”' },
            { who: 'Valeria', text: 'Y añado: «[[Lejos de|orange]] devaluar el museo, la entrada libre lo llena de público nuevo». [[Mejor dicho|teal]], de gente que nunca había cruzado la puerta.', en: 'And I’ll add: “Far from devaluing the museum, free entry fills it with new visitors.” Or rather, with people who had never walked through the door.' },
            { who: 'Rubén', text: 'Y si dicen que es un gasto inútil: «No es un gasto inútil; [[al contrario|orange]], cada visitante consume en la cafetería, en la tienda y en el barrio».', en: 'And if they call it a waste of money: “It’s not a waste; on the contrary, every visitor spends money in the café, the shop and the neighbourhood.”' },
            { who: 'Clara', text: 'Muy bien. Recuerden también que las entradas solo cubren una pequeña parte del presupuesto; [[de ahí que|violet]] la gratuidad no sea tan cara como parece.', en: 'Very good. Remember too that ticket sales cover only a small part of the budget, which is why free entry isn’t as expensive as it looks.' },
            { who: 'Valeria', text: '¿Y cómo cierro? ¿Con «[[En conclusión|violet]]»?', en: 'And how do I finish? With “En conclusión”?' },
            { who: 'Clara', text: 'Es correcto y formal. «[[En definitiva|violet]]» también funciona y suena un poco más natural al hablar. Lo que no puedes decir es «[[total|violet]]»: eso es para contarles algo a tus amigos.', en: 'That’s correct and formal. “En definitiva” also works and sounds a bit more natural when speaking. What you can’t say is “total”: that’s for telling your friends a story.' },
          ], notes: {
            'En primer lugar': 'Abre la lista de argumentos. Valeria anuncia «tres razones», así que el jurado espera un «en segundo lugar» y un «por último».',
            'es decir': 'Reformula: explica «se mantienen con impuestos» con otras palabras más claras. Va entre comas.',
            'En segundo lugar': 'Segundo elemento de la lista: Rubén sigue el mapa que ha dibujado Valeria.',
            'Según': 'Atribuye el dato a una fuente (la encuesta). Va directamente delante del nombre, sin «de».',
            'Por ejemplo': 'Concreta el argumento del precio con un caso fácil de imaginar.',
            'encima': 'Añade otro dato negativo, con tono de queja. Es coloquial: en la conversación funciona, en un debate formal no.',
            'es más': 'Añade un argumento todavía más fuerte que el anterior. Neutro: sirve en un debate.',
            'asimismo': 'Añade información en registro formal (= también, además). Muy frecuente por escrito y en discursos.',
            'No es cierto que': 'Niega la afirmación del otro equipo: va con subjuntivo («valore»). Después de los dos puntos llega el dato que la refuta.',
            'Lejos de': '«Lejos de» + infinitivo: el resultado es el contrario del que anuncia el rival. El sujeto de «devaluar» es el mismo que el de «llena»: la entrada libre.',
            'Mejor dicho': 'Valeria corrige y precisa lo que acaba de decir: no solo «público nuevo», sino gente que nunca había entrado.',
            'al contrario': 'Va después de una idea negada («no es un gasto inútil») y afirma lo opuesto: es útil para el barrio.',
            'de ahí que': 'Presenta la consecuencia como explicada por el dato anterior. Va con subjuntivo: «no sea».',
            'En conclusión': 'Cierre formal de un discurso o un ensayo. Es correcto en la final.',
            'En definitiva': 'Cierra con una valoración final. Neutro: funciona por escrito y al hablar.',
            'total': '«Total, que…» resume una historia en la conversación. En un debate formal sonaría demasiado coloquial.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Clara corrige a Rubén?', options: ['Porque «encima» es demasiado coloquial para la final.', 'Porque ha hablado más de tres minutos.', 'Porque el dato del precio es falso.'], answer: 0, why: '«“Encima” suena a queja de sobremesa. En la final, mejor “es más” o “asimismo”».', en: 'Why does Clara correct Rubén?' },
            { prompt: '¿Qué argumento espera Valeria del otro equipo?', options: ['Que el horario es demasiado largo.', 'Que lo gratis no se valora.', 'Que los museos están vacíos.'], answer: 1, why: '«El otro equipo va a decir que lo gratis no se valora».', en: 'Which argument does Valeria expect from the other team?' },
            { prompt: 'Según Clara, ¿por qué la gratuidad no es tan cara como parece?', options: ['Porque las entradas cubren solo una pequeña parte del presupuesto.', 'Porque el museo recibe muchas donaciones.', 'Porque el ayuntamiento pagará la diferencia.'], answer: 0, why: '«Las entradas solo cubren una pequeña parte del presupuesto; de ahí que la gratuidad no sea tan cara».', en: 'According to Clara, why is free entry not as expensive as it seems?' },
          ] },
        ] },
        { title: 'Las fichas de Valeria · Valeria’s cue cards', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Valeria le manda a Rubén sus fichas por mensaje · Valeria texts Rubén her cue cards', lines: [
            { who: 'Valeria', text: 'Ficha 1: «___, los museos se pagan con impuestos; por otro, la entrada se paga dos veces».', options: ['Al contrario', 'Por un lado', 'En otra mano'], answer: 1, why: '«Por otro» exige su pareja: «por un lado». «En otra mano» es un calco del inglés.' },
            { who: 'Valeria', text: 'Ficha 2: «Hay ciudades que ya lo han hecho; ___ Valdemora, donde las visitas se duplicaron».', options: ['es el caso de', 'mejor dicho', 'es decir'], answer: 0, why: '«Es el caso de» + nombre presenta un ejemplo real de la idea anterior.' },
            { who: 'Rubén', text: 'Ficha 3, la mía: «No es verdad que los turistas ___ la mayor parte del público».', options: ['serán', 'sean', 'son'], answer: 1, why: '«No es verdad que» niega la afirmación: subjuntivo, «sean».' },
            { who: 'Valeria', text: 'Y la última: «___, la cultura no debería depender del bolsillo de cada uno».', options: ['En definitiva', 'Encima', 'Total'], answer: 0, why: 'Cierre de un discurso con una valoración final: «en definitiva». «Total» y «encima» son coloquiales.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Hay en tu ciudad algún servicio que debería ser gratuito?». Tu alumno responde con «en primer lugar», un «según» y un «de ahí que».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Función, modo y registro. Function, mood and register.',
      steps: [
        { title: 'Elige el conector · Pick the connector', blocks: [
          { kind: 'choice', items: [
            { context: 'Discurso de Rubén en la final.', prompt: 'El museo cierra a las seis. ___, los lunes no abre.', options: ['En otra mano', 'Asimismo', 'Al contrario'], answer: 1, why: 'Se añade otro dato en la misma dirección, en registro formal: «asimismo». «Al contrario» necesita una idea negada delante.', en: 'The museum closes at six. In addition, it’s closed on Mondays.' },
            { prompt: 'Las entradas son caras para muchos hogares; ___ tantas familias no vayan nunca al museo.', options: ['por lo tanto', 'de ahí que', 'es decir'], answer: 1, why: 'El verbo está en subjuntivo («vayan»): solo «de ahí que» lo admite. «Por lo tanto» pediría «van».', en: 'Tickets are expensive for many households, which is why so many families never go to the museum.' },
            { prompt: 'Dicen que a los jóvenes no les interesa el arte. ___: el año pasado, la mitad de los visitantes tenía menos de treinta años.', options: ['Nada más lejos de la realidad', 'Mejor dicho', 'En resumen'], answer: 0, why: 'Se cita una idea y se rechaza con énfasis antes de dar el dato: «nada más lejos de la realidad».', en: 'They say young people aren’t interested in art. That couldn’t be further from the truth: last year half the visitors were under thirty.' },
            { prompt: 'La final es el sábado, ___, el domingo: la han cambiado esta mañana.', options: ['es decir', 'por ejemplo', 'mejor dicho'], answer: 2, why: 'El hablante corrige su propio dato: «mejor dicho». «Es decir» explicaría lo mismo, no lo corregiría.', en: 'The final is on Saturday, or rather, on Sunday: they changed it this morning.' },
            { prompt: '___ el informe del museo, las donaciones crecieron un treinta por ciento el año de la entrada libre.', options: ['Pongamos por caso', 'De acuerdo con', 'Lejos de'], answer: 1, why: 'Para atribuir un dato a una fuente: «de acuerdo con» (= según). «Lejos de» va con infinitivo.', en: 'According to the museum’s report, donations grew by thirty per cent in the year of free entry.' },
          ] },
        ] },
        { title: '¿Qué hace cada frase? · What does each sentence do?', blocks: [
          { kind: 'classify', title: 'Clasifica por función · Sort by function', categories: [
            { id: 'orden', label: 'ORDENAR O AÑADIR', tone: 'blue' },
            { id: 'ejemplo', label: 'EJEMPLIFICAR, REFORMULAR O CITAR', tone: 'teal' },
            { id: 'consec', label: 'CONSECUENCIA O CONCLUSIÓN', tone: 'violet' },
            { id: 'refutar', label: 'REFUTAR', tone: 'orange' },
          ], items: [
            { text: 'Pongamos por caso una familia con tres hijos.', answer: 'ejemplo', why: '«Pongamos por caso» plantea un ejemplo imaginado.' },
            { text: 'A continuación, les presento los datos de la encuesta.', answer: 'orden', why: '«A continuación» anuncia el siguiente punto de la exposición.' },
            { text: 'De ahí que el museo esté vacío los lunes.', answer: 'consec', why: '«De ahí que» + subjuntivo presenta una consecuencia de lo anterior.' },
            { text: 'Lejos de ahorrar, el ayuntamiento perdería dinero.', answer: 'refutar', why: '«Lejos de» + infinitivo: pasaría lo contrario de lo que se espera.' },
            { text: 'Es más, la entrada sube cada año.', answer: 'orden', why: '«Es más» añade un argumento más fuerte.' },
            { text: 'Como señala el informe, las visitas han crecido.', answer: 'ejemplo', why: '«Como señala» atribuye el dato a una fuente.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'No es cierto que los museos gratuitos reciben menos donaciones.', ok: false, options: ['No es cierto que los museos gratuitos recibirán menos donaciones.', 'No es cierto de que los museos gratuitos reciben menos donaciones.', 'No es cierto que los museos gratuitos reciban menos donaciones.'], answer: 2, why: '«No es cierto que» niega la afirmación: subjuntivo, «reciban». Y sin «de».' },
            { sentence: 'Lejos de mejorar con el nuevo horario, la situación del museo empeoró.', ok: true, why: 'Correcta: «lejos de» + infinitivo, con el mismo sujeto que la oración principal (la situación del museo).' },
            { sentence: 'Según de la encuesta, el precio es el principal obstáculo.', ok: false, options: ['Según que la encuesta, el precio es el principal obstáculo.', 'Según la encuesta, el precio es el principal obstáculo.', 'Según por la encuesta, el precio es el principal obstáculo.'], answer: 1, why: '«Según» va directamente delante del nombre: «según la encuesta».' },
            { sentence: 'Las salas estaban llenas por lo tanto abrieron otra sala.', ok: false, options: ['Las salas estaban llenas, por lo tanto abrieron, otra sala.', 'Las salas estaban llenas; por lo tanto, abrieron otra sala.', 'Las salas estaban llenas por lo tanto, abrieron otra sala.'], answer: 1, why: 'Entre dos oraciones: punto y coma (o punto) delante de «por lo tanto» y coma detrás.' },
            { sentence: 'La entrada subió dos euros; de ahí que las visitas bajaron.', ok: false, options: ['La entrada subió dos euros; de ahí que las visitas bajaran.', 'La entrada subió dos euros; de ahí que las visitas bajen.', 'La entrada subió dos euros; de ahí que las visitas bajarán.'], answer: 0, why: '«De ahí que» + subjuntivo; el marco es pasado («subió»): imperfecto, «bajaran».' },
            { sentence: '—¿Te parece bien cobrar entrada? —En absoluto, es una idea excelente.', ok: false, options: ['—¿Te parece bien cobrar entrada? —Absoluto, es una idea excelente.', '—¿Te parece bien cobrar entrada? —En absoluto: es una idea excelente.', '—¿Te parece bien cobrar entrada? —Sí, totalmente: es una idea excelente.'], answer: 2, why: '«En absoluto» significa «no, de ninguna manera»: contradice «es una idea excelente». Para decir que sí con fuerza: «sí, totalmente».' },
          ] },
        ] },
        { title: 'La víspera de la final · The night before the final', blocks: [
          { kind: 'chat-fill', title: 'Grupo «Equipo del sí» · The team group chat', lines: [
            { who: 'Valeria', text: 'Repaso del orden: ___, Rubén abre con los datos; después hablo yo y cierro con la refutación.', options: ['para empezar', 'en absoluto', 'de ahí que'], answer: 0, why: '«Para empezar» abre la secuencia de la exposición.' },
            { who: 'Rubén', text: 'Perfecto. ___ el informe municipal, las entradas solo cubren el doce por ciento del gasto.', options: ['Lejos de', 'Según', 'Según de'], answer: 1, why: 'Atribuye el dato a una fuente: «según» + nombre, sin «de».' },
            { who: 'Valeria', text: 'Genial. Entonces no es verdad que la gratuidad ___ el museo.', options: ['arruina', 'arruinará', 'arruine'], answer: 2, why: '«No es verdad que» niega la afirmación: subjuntivo, «arruine».' },
            { who: 'Clara', text: 'Y para cerrar, nada de «total»: mejor «___», que suena a discurso.', options: ['o sea', 'en definitiva', 'encima'], answer: 1, why: 'Un cierre de discurso: «en definitiva». «O sea» y «encima» son coloquiales.' },
            { who: 'Rubén', text: 'Si nos dicen que el público gratuito no respeta las obras: «___: los domingos gratuitos no ha habido ni un incidente».', options: ['Nada más lejos de la realidad', 'Nada más lejos que la realidad', 'Es decir'], answer: 0, why: 'Rechazo enfático de la idea contraria: «nada más lejos de la realidad», con «de».' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Lejos', 'de', 'perder', 'público,', 'el', 'museo', 'ganó', 'visitantes', 'nuevos'], accept: ['Lejos de perder público, el museo ganó visitantes nuevos'], en: 'Far from losing visitors, the museum gained new ones.' },
            { tiles: ['No', 'es', 'cierto', 'que', 'el', 'arte', 'sea', 'un', 'lujo'], accept: ['No es cierto que el arte sea un lujo'], en: 'It isn’t true that art is a luxury.' },
            { tiles: ['El', 'horario', 'es', 'muy', 'corto;', 'de', 'ahí', 'que', 'pocos', 'trabajadores', 'puedan', 'ir'], accept: ['El horario es muy corto; de ahí que pocos trabajadores puedan ir'], en: 'The opening hours are very short, which is why few working people can go.' },
          ] },
        ] },
        { title: 'Del borrador al discurso · From draft to speech', blocks: [
          { kind: 'rewrite', title: 'Clara corrige las notas · Clara edits the notes', items: [
            { prompt: 'El museo no tiene aparcamiento, así que mucha gente de los pueblos no viene.', instruction: 'Usa «de ahí que» (cuidado con el modo).', accept: ['El museo no tiene aparcamiento; de ahí que mucha gente de los pueblos no venga'] },
            { prompt: 'Es verdad que los museos gratuitos atraen solo a turistas.', instruction: 'Refútalo: empieza con «No es cierto que».', accept: ['No es cierto que los museos gratuitos atraigan solo a turistas'] },
            { prompt: 'La entrada libre no vació la caja del museo. Atrajo donaciones.', instruction: 'Una sola oración que empiece con «Lejos de» + infinitivo.', accept: ['Lejos de vaciar la caja del museo, la entrada libre atrajo donaciones', 'Lejos de vaciar la caja del museo, la entrada libre atrajo más donaciones'] },
            { prompt: 'La exposición no fue un fracaso. Fue la más visitada del año.', instruction: 'Una sola oración con «al contrario».', accept: ['La exposición no fue un fracaso; al contrario, fue la más visitada del año'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno defiende en voz alta una idea en cuatro oraciones: un orden («en primer lugar»), un ejemplo, una consecuencia con «de ahí que» y un cierre con «en definitiva».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El discurso del rival', coach: 'Escucha la estructura para poder refutarla. Listen for the structure so you can refute it.',
      steps: [
        { title: 'La apertura del equipo contrario · The opposing team’s opening', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota los conectores y dibuja el mapa del discurso (argumento 1, 2, 3, consecuencia, refutación, conclusión). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para dibujar el mapa del discurso: ¿cuántos argumentos hay, dónde está la consecuencia y dónde la conclusión? (Listen once for the gist and once to map the speech.)' } },
          { kind: 'listen', title: 'Apertura: equipo del «no»', channel: 'LIGA DE DEBATE · FINAL · GRABACIÓN', src: '/audio/grammar-live/465.mp3',
            before: 'Gonzalo Beltrán abre la final por el equipo contrario: defiende que los museos públicos no deben ser gratuitos. ¿Qué argumentos crees que va a usar? (What arguments do you expect from the other side?)',
            gist: { prompt: '¿Qué defiende Gonzalo? · What does Gonzalo argue?', options: ['Que los museos deberían ser privados.', 'Que los museos deberían abrir más horas.', 'Que la entrada de los museos públicos no debe ser gratuita.'], answer: 2, why: 'Lo dice al principio: «Nuestro equipo defiende que los museos públicos no deben ser gratuitos».', en: 'He argues that entry to public museums should not be free.' },
            details: [
              { prompt: '¿Cuántos argumentos anuncia?', options: ['Dos.', 'Cuatro.', 'Tres.'], answer: 2, why: '«Lo vamos a demostrar con tres argumentos»: en primer lugar, en segundo lugar, por último.', en: 'How many arguments does he announce?' },
              { prompt: 'Según Gonzalo, ¿quién paga si la entrada es gratis?', options: ['Solo los turistas.', 'Las empresas patrocinadoras.', 'Todos los contribuyentes, vayan o no al museo.'], answer: 2, why: '«Alguien tiene que pagarlo, es decir, todos los contribuyentes, vayan o no al museo».', en: 'According to Gonzalo, who pays if entry is free?' },
              { prompt: '¿Qué dice el informe que cita sobre los días de entrada libre?', options: ['Que la visita media dura la mitad.', 'Que hay más incidentes en las salas.', 'Que se venden más libros en la tienda.'], answer: 0, why: '«Según el último informe del observatorio regional de cultura, en los días de entrada libre la visita media dura la mitad».', en: 'What does the report he cites say about free-entry days?' },
              { prompt: '¿Qué ejemplo da para negar que el precio aleje a las familias?', options: ['Que en su ciudad el museo más visitado es también el más caro.', 'Que las familias prefieren el cine.', 'Que los niños nunca pagan.'], answer: 0, why: '«Es el caso de nuestra ciudad, donde el museo más visitado es también el más caro».', en: 'What example does he give to deny that the price keeps families away?' },
            ],
            transcript: 'Buenas tardes al jurado y al público. Nuestro equipo defiende que los museos públicos no deben ser gratuitos, y lo vamos a demostrar con tres argumentos. [[En primer lugar|blue]], mantener un museo cuesta mucho dinero: luz, seguridad, restauración, personal. Si la entrada es gratis, alguien tiene que pagarlo, [[es decir|teal]], todos los contribuyentes, vayan o no al museo. [[En segundo lugar|blue]], lo gratuito se valora menos. [[Según|teal]] el último informe del observatorio regional de cultura, en los días de entrada libre la visita media dura la mitad. [[Es más|blue]], aumenta el número de personas que entran solo para hacerse una foto. [[Por último|blue]], ya existen entradas reducidas: estudiantes, jubilados y desempleados pagan muy poco o nada. [[De ahí que|violet]] la gratuidad total no tenga mucho sentido. Algunos dirán que el precio aleja a las familias. [[Nada más lejos de la realidad|orange]]: es el caso de nuestra ciudad, donde el museo más visitado es también el más caro. [[En definitiva|violet]], un museo de calidad necesita ingresos propios. Muchas gracias.',
            reply: { teacher: 'Tú eres Gonzalo y repites uno de sus argumentos. Tu alumno es Valeria y lo refuta con «No es cierto que…», «Lejos de…» o «Al contrario», da un dato con «según» y cierra con «En definitiva».', self: 'Eres Valeria: elige un argumento de Gonzalo y refútalo en voz alta con «No es cierto que…» o «Lejos de…», un dato con «según» y un cierre con «En definitiva». (Refute one of Gonzalo’s arguments aloud.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Exponer y refutar en voz alta', coach: 'Ordena, demuestra y rebate. Organise, prove and rebut.',
      steps: [
        { title: 'Debates y explicaciones · Debates and explanations', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y a veces defiendes la postura contraria. Tu alumno estructura cada respuesta con al menos tres conectores de funciones distintas. Si falla el modo tras «de ahí que» o «no es cierto que», tú repites la frase corregida y sigues.', self: 'Lee cada pregunta y responde en voz alta con al menos tres conectores de funciones distintas: orden, ejemplo, consecuencia, refutación o conclusión. (Use at least three connectors with different functions in each answer.)' } },
          { kind: 'talk', cards: [
            { q: 'Explica en dos minutos algo que conoces bien (tu trabajo, una receta, un deporte), con una estructura clara. · Explain something you know well, with a clear structure.', followUps: ['¿Qué es lo más difícil para un principiante?', '¿Puedes dar un ejemplo concreto?'], phrases: ['[[Para empezar|blue]], …', '[[A continuación|blue]], …', '[[es decir|teal]], …', '[[Por último|blue]], …'], hint: 'Anuncia los pasos con conectores de orden, aclara con «es decir» y termina con «en definitiva».', example: 'Para empezar, hacer pan en casa no es tan difícil como parece. A continuación, te explico qué necesitas: harina, agua, sal y levadura, es decir, solo cuatro ingredientes. Por ejemplo, si mezclas la masa por la noche, a la mañana siguiente está lista. Por último, el horno tiene que estar muy caliente. En definitiva, es cuestión de paciencia.', next: 'Ahora, a refutar.' },
            { q: 'Hay muchos tópicos sobre tu ciudad, tu país o tu profesión. Elige uno y refútalo. · Pick a cliché and refute it.', followUps: ['¿De dónde crees que viene ese tópico?', '¿Hay algo de verdad en él?'], phrases: ['Se dice que… [[Nada más lejos de la realidad|orange]].', '[[No es cierto que|orange]] + subjuntivo', '[[Al contrario|orange]], …'], hint: 'Cita el tópico, recházalo y demuéstralo con un dato o un caso. «No es cierto que» + subjuntivo.', example: 'Se dice que el trabajo de enfermería es sobre todo técnico. Nada más lejos de la realidad. No es cierto que solo pongamos inyecciones; al contrario, pasamos horas explicando tratamientos y tranquilizando a las familias. Es el caso de mi unidad, donde cada enfermera atiende a ocho pacientes por turno.' },
            { q: 'Eres Valeria. Gonzalo acaba de decir: «Lo gratuito no se valora». Responde en la final. · You are Valeria: refute Gonzalo in the final.', followUps: ['¿Y si Gonzalo dice que el museo se quedará sin dinero?', '¿Qué dato usarías para cerrar?'], phrases: ['[[Según|teal]] …', '[[Lejos de|orange]] + infinitivo, …', '[[de ahí que|violet]] + subjuntivo'], hint: 'Cita al rival, da un dato atribuido con «según», refuta con «lejos de» y saca una consecuencia con «de ahí que».', example: 'Mi rival afirma que lo gratuito no se valora. Según los datos del propio museo, los domingos de entrada libre la visita media dura lo mismo que el resto de la semana. Lejos de devaluar el museo, la gratuidad atrae a un público nuevo. Además, las entradas cubren una parte mínima del presupuesto; de ahí que la gratuidad no sea un gasto insostenible.', teacher: 'Tú eres Gonzalo y contestas con un argumento nuevo; tu alumno refuta otra vez sin repetir el mismo conector.' },
            { q: 'Explica un concepto de tu trabajo o de tus estudios a alguien que no sabe nada del tema. · Explain a concept from your field to a layperson.', followUps: ['¿Para qué sirve en la vida diaria?', '¿Puedes decirlo con palabras todavía más sencillas?'], phrases: ['[[es decir|teal]], …', '[[en otras palabras|teal]], …', '[[o sea|teal]], … (coloquial)', '[[Pongamos por caso|teal]] …'], hint: 'Reformula dos veces con conectores distintos y pon un ejemplo imaginado con «pongamos por caso».', example: 'Trabajo en ciberseguridad, es decir, protejo los datos de una empresa. Pongamos por caso que alguien recibe un correo falso del banco: si hace clic en el enlace, puede abrir la puerta a un ataque. En otras palabras, mi trabajo consiste en evitar que esas puertas se abran. O sea, soy un poco el portero digital de la empresa.' },
            { q: 'Cuéntale a un amigo un día en el que todo salió mal. · Tell a friend about a day when everything went wrong.', followUps: ['¿Qué fue lo peor?', '¿Cómo terminó el día?'], phrases: ['[[encima|blue]] …', '[[o sea|teal]], …', '[[Total|violet]], que…'], hint: 'Registro coloquial: aquí sí funcionan «encima», «o sea» y «total, que…».', example: 'El lunes el autobús pasó antes de hora y llegué tarde a una reunión importante. Encima, me había dejado la memoria USB en casa, o sea, que presenté el proyecto sin diapositivas. Total, que mi jefa me pidió repetir la presentación el viernes.', next: 'Ahora, un debate público.' },
            { q: 'Defiende una postura en público: «El teletrabajo debería ser un derecho». · Argue a full position in public.', followUps: ['¿Qué responderías a quien dice que aísla a los trabajadores?', '¿Cuál es tu conclusión?'], phrases: ['[[Por un lado|blue]], … por otro, …', '[[Asimismo|blue]], …', '[[No es cierto que|orange]] …', '[[En definitiva|violet]], …'], hint: 'Ordena los argumentos, añade uno formal con «asimismo», refuta la objeción principal y cierra.', example: 'Por un lado, el teletrabajo ahorra horas de transporte; por otro, permite organizar mejor la vida familiar. Asimismo, reduce el tráfico en las ciudades. Se dice que aísla a los trabajadores, pero no es cierto que un equipo a distancia tenga que estar aislado: basta con reunirse en persona una vez por semana. En definitiva, debería ser un derecho, aunque no una obligación.', teacher: 'Tú defiendes la postura contraria con dos objeciones; tu alumno refuta cada una con una fórmula distinta.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún error a propósito («de ahí que muchas familias no pueden», «en otra mano», «en absoluto» para decir que sí). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas defendiendo la postura contraria. (Now ask the questions aloud and argue the opposite side.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una columna de opinión', coach: 'Ordena, demuestra, refuta y concluye. Organise, prove, refute, conclude.',
      steps: [
        { title: 'El boletín de la Universidad Popular · The college bulletin', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos el mapa del texto: ¿se ve el orden de los argumentos, hay un ejemplo y una fuente, una consecuencia, una refutación y una conclusión? Después tu alumno lee la columna en voz alta.', self: 'Escribe tu texto y toca «Revisar mi texto». Después revisa el mapa: ¿se ve el orden, hay un ejemplo y una fuente, una consecuencia, una refutación y una conclusión? (Check that the structure is visible.)' } },
          { kind: 'write', title: 'Mi columna · My opinion column', situation: 'Después de la final, el boletín de la Universidad Popular de Arenales abre una sección de opinión. Escribe una columna para sus lectores sobre la moción del debate (a favor o en contra) o sobre otro tema público de tu ciudad. (After the final, the college bulletin opens an opinion section: write a column on the debate motion or on another public issue in your city.)', task: [
            'Ordena tus argumentos con conectores de orden: en primer lugar, por un lado, para empezar… (Structure the text.)',
            'Apoya un argumento con un ejemplo (por ejemplo, es el caso de) y un dato atribuido (según, de acuerdo con, como señala). (Give an example and cite a source.)',
            'Presenta una consecuencia con «de ahí que» + subjuntivo o con «por lo tanto». (State a consequence.)',
            'Refuta un argumento contrario con «no es cierto que» + subjuntivo, «lejos de» + infinitivo o «al contrario». (Refute an opposing view.)',
            'Cierra con «en definitiva» o «en conclusión», en registro formal: sin «total», «o sea» ni «encima». (Conclude formally.)',
          ], starters: ['En primer lugar,…', 'Por un lado,… Por otro,…', 'Según…,', 'Es el caso de…', 'Asimismo,…', '…; de ahí que…', 'Hay quien sostiene que… No es cierto que…', 'Lejos de…,', 'En definitiva,…'],
            words: ['en primer lugar', 'asimismo', 'es más', 'por ejemplo', 'según', 'de ahí que', 'no es cierto que', 'lejos de', 'al contrario', 'en definitiva'],
            model: '¿Museos gratis? Sí, y por buenas razones. [[En primer lugar|blue]], los museos públicos se mantienen con dinero de todos; [[es decir|teal]], ya los pagamos con nuestros impuestos. [[En segundo lugar|blue]], el precio deja fuera a muchas familias. [[Según|teal]] la última encuesta municipal, una de cada tres no ha visitado nunca el museo de la ciudad. [[Por ejemplo|teal]], una pareja con dos hijos paga casi cuarenta euros por una tarde. [[Asimismo|blue]], las entradas cubren solo una pequeña parte del presupuesto; [[de ahí que|violet]] la gratuidad no resulte tan cara como parece. Hay quien sostiene que lo gratuito no se valora. [[No es cierto que|orange]] el público respete menos un museo abierto: los domingos de entrada libre, las visitas duran lo mismo. [[Lejos de|orange]] devaluar la cultura, la gratuidad atrae a personas que nunca habían cruzado la puerta. [[En definitiva|violet]], un museo que no puede visitar todo el mundo no es, en realidad, del todo público. Valeria Ibáñez, equipo del «sí».',
            minWords: 140,
            checks: [
              { label: 'Un conector de orden (en primer lugar, por un lado, por una parte, para empezar)', pattern: '(?<!\\p{L})(?:en\\s+primer\\s+lugar|por\\s+un\\s+lado|por\\s+una\\s+parte|para\\s+empezar)(?!\\p{L})', tip: 'Abre tu primer argumento con «En primer lugar,…» o «Por un lado,…».' },
              { label: 'Un dato atribuido (según, de acuerdo con, como señala)', pattern: '(?<!\\p{L})(?:según|de\\s+acuerdo\\s+con|como\\s+(?:señala|señalan|afirma|afirman|indica|indican))(?!\\p{L})', tip: 'Cita una fuente: «Según la encuesta municipal,…».' },
              { label: 'Una consecuencia (de ahí que, por lo tanto, por consiguiente)', pattern: '(?<!\\p{L})(?:de\\s+ahí\\s+que|por\\s+(?:lo\\s+)?tanto|por\\s+consiguiente)(?!\\p{L})', tip: 'Saca una consecuencia: «…; de ahí que muchas familias no vayan».' },
              { label: 'Una refutación (no es cierto que, no es verdad que, lejos de, al contrario, nada más lejos)', pattern: '(?<!\\p{L})(?:no\\s+es\\s+(?:cierto|verdad)\\s+que|lejos\\s+de|al\\s+contrario|nada\\s+más\\s+lejos)(?!\\p{L})', tip: 'Cita la idea contraria y recházala: «No es cierto que… + subjuntivo».' },
              { label: 'Una conclusión (en definitiva, en conclusión, en resumen)', pattern: '(?<!\\p{L})(?:en\\s+definitiva|en\\s+conclusión|en\\s+resumen)(?!\\p{L})', tip: 'Cierra con «En definitiva,…» o «En conclusión,…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})de\\s+ahí\\s+que\\s+(?:\\p{L}+\\s+){0,3}?(?:es|son|está|están|hay|tiene|tienen|puede|pueden|va|van)(?!\\p{L})', why: 'Después de **de ahí que** parece haber un indicativo. En registro cuidado, usa subjuntivo: «de ahí que **sea**, **haya**, **puedan**…».' },
              { pattern: '(?<!\\p{L})no\\s+es\\s+(?:cierto|verdad)\\s+que\\s+(?:\\p{L}+\\s+){0,3}?(?:es|son|está|están|hay|tiene|tienen|puede|pueden|va|van)(?!\\p{L})', why: 'Después de **no es cierto que** parece haber un indicativo. Al negar, usa subjuntivo: «no es cierto que **sea**, **haya**…».' },
              { pattern: '(?<!\\p{L})según\\s+(?:de|ti)(?!\\p{L})', why: 'Escribe **según** + nombre («según el informe») o **según tú**, nunca «según de» ni «según ti».' },
              { pattern: '(?<!\\p{L})en\\s+otra\\s+mano(?!\\p{L})', why: '«En otra mano» es un calco del inglés: escribe **por otro lado** o **por otra parte**.' },
              { pattern: '(?<!\\p{L})nada\\s+más\\s+lejos\\s+que(?!\\p{L})', why: 'La expresión fija es **nada más lejos de la realidad**.' },
              { pattern: '(?:(?<!\\p{L})o\\s+sea(?!\\p{L})|(?:^|[.;:]\\s*)total\\s*,)', why: '«O sea» y «total, que…» son coloquiales. En una columna, usa **es decir** o **en definitiva**.' },
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
            { tone: 'blue', label: 'ORDENAR Y AÑADIR', formula: 'en primer lugar · a continuación · por último · por un lado / por otro · asimismo · es más', example: 'En primer lugar, el precio. Es más, el horario.', caption: '«asimismo», formal; «encima», coloquial y con queja', en: 'they map the speech and stack arguments; asimismo is formal, encima is colloquial' },
            { tone: 'teal', label: 'EJEMPLO, REFORMULACIÓN, FUENTE', formula: 'por ejemplo · es el caso de · es decir · mejor dicho · según + nombre', example: 'Vinieron cien personas, mejor dicho, ciento veinte.', caption: '«mejor dicho» corrige; «según» sin «de»', en: 'mejor dicho corrects, es decir explains; según takes no “de”' },
            { tone: 'violet', label: 'CONSECUENCIA Y CONCLUSIÓN', formula: 'por lo tanto + ind. · de ahí que + subj. · en definitiva', example: 'Cierra a las seis; de ahí que pocos trabajadores vayan.', caption: '«de ahí que» + subjuntivo; «total, que…», solo en la conversación', en: 'de ahí que takes the subjunctive; total, que… only in conversation' },
            { tone: 'orange', label: 'REFUTAR', formula: 'no es cierto que + subj. · no…; al contrario · lejos de + inf. · en absoluto', example: 'Lejos de vaciar el museo, la gratuidad lo llenó.', caption: '«al contrario» tras una idea negada; «en absoluto» = no', en: 'al contrario follows a negated idea; en absoluto means “not at all”' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Un buen discurso tiene **mapa**: el oyente sabe dónde empieza cada argumento, de dónde sale cada dato y cuándo llegas a la conclusión. Al refutar, **cita** la idea contraria, **recházala** y **demuéstralo**. Y vigila el modo: **de ahí que** y **no es cierto que** van con **subjuntivo**.', en: 'A good speech has a map: the listener knows where each argument starts, where each figure comes from and when you reach the conclusion. When refuting, quote the opposing idea, reject it and prove your point. And watch the mood: de ahí que and no es cierto que take the subjunctive.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El tren llegó con dos horas de retraso; de ahí que ___ la reunión.', options: ['nos perdiéramos', 'nos perderemos', 'nos perdimos'], answer: 0, why: '«De ahí que» + subjuntivo; marco pasado: imperfecto, «nos perdiéramos».', en: 'The train arrived two hours late, which is why we missed the meeting.' },
            { prompt: 'Dicen que el teletrabajo baja la productividad. ___: en nuestro equipo, ha subido.', options: ['Asimismo', 'Nada más lejos de la realidad', 'Por ejemplo'], answer: 1, why: 'Se rechaza con énfasis la idea citada antes de dar el dato.', en: 'They say remote work lowers productivity. That couldn’t be further from the truth: in our team it has gone up.' },
            { prompt: 'Mi hermano vive en Lima, ___, en las afueras de Lima.', options: ['al contrario', 'mejor dicho', 'por lo tanto'], answer: 1, why: 'El hablante corrige y precisa: «mejor dicho».', en: 'My brother lives in Lima, or rather, on the outskirts of Lima.' },
            { context: 'Correo formal de una empresa a sus clientes.', prompt: 'Hemos renovado nuestra página web. ___, hemos actualizado las tarifas.', options: ['Encima', 'Asimismo', 'Total'], answer: 1, why: 'Se añade información en registro formal: «asimismo».', en: 'We have redesigned our website. We have also updated our rates.' },
            { prompt: 'No es cierto que el nuevo horario ___ a los clientes.', options: ['perjudique', 'perjudica', 'perjudicará'], answer: 0, why: '«No es cierto que» + subjuntivo: «perjudique».', en: 'It isn’t true that the new timetable harms customers.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en una empresa. Now, at a company.', blocks: [
          { kind: 'lead', text: 'Sandra Pineda trabaja en una empresa de logística y el lunes presenta a la dirección un proyecto de teletrabajo. Sus notas son demasiado informales: tú las conviertes en frases para la presentación.', en: 'Sandra works for a logistics company and on Monday she presents a remote-work plan to management. Her notes are too informal: you turn them into sentences for the presentation.' },
          { kind: 'rewrite', title: 'Las notas de Sandra · Sandra’s notes', items: [
            { prompt: 'Primero hablaré del problema. Luego, de la propuesta. Al final, del presupuesto.', instruction: 'Hazlo más formal con «En primer lugar», «A continuación» y «Por último».', accept: ['En primer lugar, hablaré del problema. A continuación, de la propuesta. Por último, del presupuesto', 'En primer lugar hablaré del problema. A continuación hablaré de la propuesta. Por último hablaré del presupuesto', 'En primer lugar, hablaré del problema. A continuación, hablaré de la propuesta. Por último, hablaré del presupuesto'] },
            { prompt: 'El alquiler de la oficina es muy caro, así que proponemos dos días de teletrabajo.', instruction: 'Usa «de ahí que».', accept: ['El alquiler de la oficina es muy caro; de ahí que propongamos dos días de teletrabajo'] },
            { prompt: 'Dicen que el teletrabajo reduce la productividad. Eso es falso.', instruction: 'Refútalo en una oración que empiece con «No es cierto que».', accept: ['No es cierto que el teletrabajo reduzca la productividad'] },
          ] },
        ] },
        { title: 'Ampliación · De la charla al discurso · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: el mismo argumento cambia de forma según el registro. «Y encima…» se convierte en «Asimismo,…»; «o sea» en «es decir»; «total, que…» en «en definitiva». Y dos adelantos: **de ahí** + nombre («De ahí su éxito») y **a saber**, que anuncia una lista que concreta lo dicho («dos problemas, a saber: el precio y el horario»); lo estudiarás en la clase 189. Hoy solo tienes que reconocerlos.', en: 'For strong students or spare time: the same argument changes shape with register. And two previews: de ahí + noun (“hence its success”) and a saber, which introduces a list spelling out what was just mentioned (“namely”); you will study it in class 189. For now, just recognise them.' },
          { kind: 'choice', title: 'Cambia de registro · Shift the register', items: [
            { prompt: 'Pasa a un discurso formal: «Y encima el museo cierra a las seis».', options: ['Total, que el museo cierra a las seis.', 'O sea, el museo cierra a las seis.', 'Asimismo, el museo cierra a las seis.'], answer: 2, why: '«Asimismo» añade el dato en registro formal; «o sea» y «total, que…» son coloquiales.', en: 'Make it formal.' },
            { prompt: 'Pasa a un discurso formal: «O sea, que no hay dinero».', options: ['Encima no hay dinero.', 'Total, no hay dinero.', 'Es decir, el presupuesto no es suficiente.'], answer: 2, why: '«Es decir» reformula en registro neutro o formal; «encima» y «total» son coloquiales.', en: 'Make it formal.' },
            { prompt: '¿Qué frase usa bien «a saber»?', options: ['A saber, el museo es gratis.', 'El museo es caro, a saber, lo pagamos.', 'El museo tiene dos problemas, a saber: el precio y el horario.'], answer: 2, why: '«A saber» anuncia los elementos que concretan lo que se acaba de mencionar («dos problemas»).', en: 'Which sentence uses “a saber” (namely) correctly?' },
            { prompt: '¿Qué frase es correcta?', options: ['La entrada es libre los domingos. De ahí que las colas.', 'La entrada es libre los domingos. De ahí que hay colas.', 'La entrada es libre los domingos. De ahí las colas.'], answer: 2, why: '«De ahí» + nombre («las colas») o «de ahí que» + verbo en subjuntivo («de ahí que haya colas»).', en: 'Which sentence is correct?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno cuenta una queja de forma coloquial («encima…», «o sea…», «total, que…») y después la reformula como en un discurso.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 166 · Síntesis B2: debate, explicación y texto formal', text: 'Ya sabes construir una exposición con mapa y refutar un argumento: «En primer lugar…», «de ahí que…», «No es cierto que…», «En definitiva…». La clase 166 es la síntesis del nivel B2: reúnes estos conectores con la concesión, la causa, el subjuntivo y el registro formal para debatir, explicar y escribir un texto completo. Es el paso natural para cerrar el nivel.', en: 'You can now build a structured exposition and refute an argument. Class 166 is the B2 synthesis: you combine these connectors with concession, cause, the subjunctive and formal register to debate, explain and write a complete text. It is the natural way to round off the level.', href: '/gramatica/sintesis-b2-debate-explicacion-y-texto', label: 'Ir a la clase 166' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “La entrada es cara; por lo tanto, muchas familias no van” y “La entrada es cara; de ahí que muchas familias no vayan”?». Respuesta esperada: las dos expresan consecuencia; «de ahí que» la presenta como explicada por lo anterior y va con subjuntivo. Tarea: la columna de Escribir sobre un tema público de su ciudad.' },
        ] },
      ],
    },
  ],
};
