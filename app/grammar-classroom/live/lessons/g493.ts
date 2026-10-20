import type { LiveLesson } from '../types';

/**
 * Lesson 493 · C1 · Polifonía y atribución: según, supuestamente, se dice (course unit G193).
 * Builds on G146 (lesson 233: reported speech, tense and deixis shifts) and G173 (lesson 473:
 * evidentiality, al parecer / por lo visto, the conditional of rumour). C1 step: a text carries
 * several voices, and the writer decides how much responsibility to take for each one.
 * Content: reporting verbs and the stance they reveal (decir / explicar neutral; afirmar,
 * asegurar, sostener; reconocer, admitir, which present the content as true; negar, desmentir;
 * alegar; insinuar; advertir; matizar, puntualizar; denunciar; pretender que + ind. = a dubious
 * claim, vs pretender que + subj. and the false friend «pretend»); mood after them (+ ind.;
 * negar / desmentir que + subj.; advertir que + ind. warning vs + subj. order); sources: según +
 * noun / tú, yo / verb (según dicen), never «según que»; en palabras de (quotation), a juicio de
 * and para + persona (opinions, not data); se dice que, se comenta que, corre el rumor de que;
 * distance: supuestamente, presuntamente / presunto (legal register), el llamado / el supuesto,
 * distancing quotation marks; aparentemente (mainly «seemingly», calque risk) vs al parecer;
 * echoic «que» in speech (¿Que no vienes? / Que dice Pilar que la llames). Ampliación: dizque
 * (colloquial, several American countries), admitir que + subj. (tolerate), negated reporting verbs.
 * Scene: the residents’ association of the San Lorenzo neighbourhood and the city’s «Plan Plaza
 * Viva» (an underground car park under the plaza del Olmo). Natalia Cifuentes (secretary) and
 * Rubén Salgado (treasurer) read how the district paper reports it; Pilar Ferrán speaks for the
 * shopkeepers; councillor Marcos Llorente defends the plan. Escuchar: Verónica Paredes on the
 * community radio programme «Voces del barrio» (es-PE-CamilaNeural). Escribir: the association’s
 * newsletter item on the meeting, with every voice attributed.
 */
export const lesson: LiveLesson = {
  id: 493,
  level: 'C1',
  title: 'Polifonía y atribución: según, supuestamente, se dice',
  subtitle: 'Atribuir cada dato a su voz y decidir cuánto te comprometes con él: reconoce que, niega que, según ella, supuestamente.',
  legend: [
    { tone: 'blue', label: 'VERBO DE POSTURA · reconoce, niega que, sostiene, matiza (what the source does)' },
    { tone: 'teal', label: 'FUENTE · según, en palabras de, a juicio de, para (whose voice it is)' },
    { tone: 'orange', label: 'DISTANCIA · supuestamente, el llamado, «comillas», pretende que (I don’t vouch for it)' },
    { tone: 'violet', label: 'QUE DE ECO · ¿Que no vienes? Que dice Pilar que… (speech only)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Quién lo dice y quién responde?', coach: 'Cada voz, su responsabilidad. Every voice, its responsibility.',
      steps: [
        { title: 'Un dato, tres titulares · One fact, three headlines', blocks: [
          { kind: 'lead', text: 'Barrio de San Lorenzo. El ayuntamiento presenta el «Plan Plaza Viva»: un aparcamiento subterráneo bajo la plaza del Olmo. Natalia Cifuentes, secretaria de la asociación vecinal, prepara el boletín del barrio y compara cómo cuentan la noticia tres medios. El dato es el mismo; lo que cambia es **quién responde de él**. Un texto tiene varias voces (eso es la **polifonía**), y la gramática dice cuánto se compromete quien escribe con cada una.', en: 'The city wants to build an underground car park under the neighbourhood square. Natalia, secretary of the residents’ association, compares how three outlets report it. The fact is the same; what changes is who answers for it. Every text carries several voices, and grammar shows how far the writer commits to each of them.' },
          { kind: 'guide', text: { teacher: 'Tú lees los tres titulares. Tu alumno dice en cuál el periódico da el dato por cierto, en cuál solo lo atribuye y en cuál deja ver que no se lo cree.', self: 'Lee los tres titulares en voz alta y decide: ¿el periódico lo da por cierto, solo lo atribuye o duda? (Does the paper vouch for it, just attribute it, or doubt it?)' } },
          { kind: 'compare', title: 'Tres titulares · Three headlines', columns: [
            { tone: 'blue', label: 'LO DA POR CIERTO', sentence: 'El concejal [[reconoce|blue]] que habrá que talar doce árboles.', idea: 'El concejal admite algo que no le favorece; el periódico lo presenta como verdad.', en: '“Reconoce” presents the content as true: the source concedes something that goes against its own interest.' },
            { tone: 'teal', label: 'SOLO ATRIBUYE', sentence: '[[Según|teal]] el concejal, habrá que talar doce árboles.', idea: 'El dato es del concejal; el periódico no se pronuncia.', en: 'Neutral attribution: the claim belongs to the councillor and the paper takes no position on it.' },
            { tone: 'orange', label: 'SE DISTANCIA', sentence: 'El concejal [[pretende|orange]] que solo se talarán doce árboles.', idea: 'El periódico transmite la afirmación y deja ver que no se la cree.', en: '“Pretende que” + indicative reports a claim the writer finds doubtful, roughly “would have us believe”.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Titular: «El concejal reconoce que el informe técnico llegó tarde». ¿Qué piensa el periódico del retraso?', options: ['Que es un hecho: el propio concejal lo admite.', 'Que es un rumor sin confirmar.', 'Que el concejal miente.'], answer: 0, why: '«Reconocer» presenta el contenido como verdadero: la fuente acepta algo que no le conviene.', en: 'With “reconoce”, the paper treats the delay as a fact the councillor has conceded.' },
            { prompt: '¿En qué titular el periódico no toma ninguna postura?', options: ['Según el concejal, las obras durarán un año.', 'El concejal pretende que las obras durarán un año.', 'El concejal admite que las obras durarán un año.'], answer: 0, why: '«Según» solo atribuye. «Pretende que» deja ver duda; «admite» lo da por cierto y como concesión.', en: 'Which headline is neutral? “Según” attributes without judging.' },
          ] },
        ] },
        { title: 'Verbos que toman postura · Verbs that take a stance', mascot: '/brand/mascot/studying.webp', coach: 'Elegir el verbo ya es opinar. Choosing the verb is an opinion.', blocks: [
          { kind: 'table', title: 'El verbo introductor y lo que deja ver · Reporting verbs and what they reveal', head: ['Verbo', 'Qué hace la fuente', 'Qué deja ver quien escribe', 'Ejemplo'], rows: [
            ['**decir · explicar · señalar · comentar**', 'informa', 'nada: atribución neutra', 'El concejal [[explicó|blue]] que las obras empezarán en marzo.'],
            ['**afirmar · asegurar**', 'presenta algo como cierto (asegurar: con más énfasis)', 'la responsabilidad es de la fuente', 'La constructora [[asegura|blue]] que el ruido será mínimo.'],
            ['**sostener · mantener**', 'defiende una postura, a menudo frente a otros', 'hay un debate', 'Los vecinos [[sostienen|blue]] que el barrio ya tiene aparcamientos de sobra.'],
            ['**reconocer · admitir**', 'acepta algo que no le conviene', 'el contenido se da por cierto', 'El concejal [[admitió|blue]] que el presupuesto ha subido.'],
            ['**negar · desmentir**', 'rechaza un dato o una acusación', 'alguien lo había dicho antes', 'El ayuntamiento [[niega|blue]] que haya prisa por adjudicar la obra.'],
            ['**alegar**', 'da una razón para justificarse o defenderse', 'a menudo, que es una excusa', 'La constructora [[alegó|blue]] que el retraso se debía a la lluvia.'],
            ['**insinuar**', 'lo sugiere sin decirlo abiertamente', 'hay que leer entre líneas', 'Pilar [[insinuó|blue]] que la asociación exagera.'],
            ['**advertir**', 'avisa de un riesgo', 'anticipa consecuencias', 'Los técnicos [[advierten|blue]] que el suelo es inestable.'],
            ['**matizar · puntualizar**', 'corrige o precisa algo dicho antes', 'una afirmación previa se ajusta', 'El concejal [[matizó|blue]] que no se talarán todos los árboles.'],
            ['**denunciar**', 'presenta algo como injusto o ilegal', 'una acusación', 'La asociación [[denuncia|blue]] que no se ha consultado a los vecinos.'],
            ['**pretender que** + indicativo', 'afirma algo poco creíble', 'duda o ironía de quien escribe', 'El ayuntamiento [[pretende|orange]] que nadie sabía nada.'],
          ], note: 'Con el sentido de ‘avisar’, **advertir** admite «advertir que» y «advertir de que»: las dos son correctas. «Dijo», «reconoció» y «pretende» pueden contar el mismo dato con tres posturas distintas.' },
          { kind: 'tip', icon: '🔑', title: '«Pretender» no es «to pretend»', text: '‘To pretend’ es **fingir**. **Pretender** + infinitivo es ‘tener la intención’: «El plan **pretende** reducir el tráfico». **Pretender que** + subjuntivo es ‘querer que otro haga algo’, a menudo con reproche: «¿**Pretenden** que firmemos sin leer?». Y **pretender que** + indicativo, en registro culto, es ‘afirmar algo dudoso’: «**Pretende** que no sabía nada».', en: '“To pretend” is “fingir”. “Pretender + infinitive” means “to aim / intend”; “pretender que + subjunctive” means “to expect someone to do something”, often reproachfully; and in formal writing “pretender que + indicative” means “to claim” something the writer doubts.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La asociación ___ que el proyecto se aprobó sin consultar a nadie.', options: ['denuncia', 'reconoce', 'matiza'], answer: 0, why: 'La asociación presenta el hecho como una irregularidad: «denunciar». «Reconocer» sería admitir algo en su contra; «matizar», corregir algo dicho antes.', en: 'The association presents it as wrongdoing: which verb fits?' },
            { prompt: 'Primero el concejal habló de «toda la plaza»; después ___ que la obra solo ocupará la mitad.', options: ['alegó', 'matizó', 'denunció'], answer: 1, why: '«Matizar» es precisar o corregir una afirmación anterior. No hay acusación ni excusa.', en: 'He first said “the whole square”, then qualified it: only half.' },
          ] },
        ] },
        { title: 'El modo después del verbo · Mood after the verb', mascot: '/brand/mascot/speaking.webp', coach: '¿Transmite o rechaza? Passing it on or rejecting it?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'INDICATIVO O SUBJUNTIVO', question: '¿La fuente transmite un contenido o lo rechaza?', en: 'Verbs that pass on a content take the indicative, even when the writer keeps their distance (“pretende que no sabía nada”). Verbs that reject the content, “negar” and “desmentir”, normally take the subjunctive: the content stays outside what is asserted. When a reporting verb is itself negated (“no afirmó que…”), the subjunctive is common too.', formula: ['afirmar · asegurar · sostener · reconocer · admitir · alegar · insinuar · matizar · denunciar + que + indicativo', 'negar · desmentir + que + subjuntivo (lo normal)', 'verbo negado: no afirmó que / no reconoció que + subjuntivo (frecuente)'],
            meaning: 'Elegir el modo no depende de si **tú** te lo crees, sino de lo que hace la fuente: si **transmite** un contenido, indicativo; si lo **rechaza**, subjuntivo.',
            examples: [
              { es: 'El concejal [[reconoce|blue]] que el informe **llegó** tarde.', en: 'The councillor acknowledges that the report arrived late (presented as true).' },
              { es: 'El concejal [[niega|blue]] que el informe **llegara** tarde.', en: 'The councillor denies that the report arrived late (content rejected: subjunctive).' },
              { es: 'La constructora [[desmiente|blue]] que **vaya** a cortar la calle durante un año.', en: 'The construction company denies it is going to close the street for a year.' },
              { es: 'Los vecinos [[sostienen|blue]] que la plaza **funciona** bien como está.', en: 'Residents maintain that the square works fine as it is.' },
            ],
            note: 'Con **negar**, el indicativo es posible en registro cuidado cuando quien escribe presenta el hecho como verdadero: «Negó que **había** estado allí» (lo negó, pero estuvo). Es un uso marcado: en caso de duda, subjuntivo.' },
          { kind: 'compare', title: 'Mismo verbo, otro modo, otro sentido · Same verb, other mood, other meaning', columns: [
            { tone: 'blue', label: 'ADVERTIR QUE + IND. · AVISO', sentence: 'Los técnicos [[advierten|blue]] que las obras **durarán** dos años.', idea: 'Informan de un riesgo.', en: 'A warning that informs: “they warn that the works will take two years”.' },
            { tone: 'blue', label: 'ADVERTIR QUE + SUBJ. · ORDEN', sentence: 'El vigilante [[advirtió|blue]] que nadie **entrara** en la zona de obras.', idea: 'Equivale a «ordenó que».', en: 'A warning that orders: “he told everyone not to enter”.' },
            { tone: 'orange', label: 'PRETENDER QUE + IND. · AFIRMAR', sentence: 'Llorente [[pretende|orange]] que nadie le **avisó**.', idea: 'Lo afirma, pero quien escribe duda.', en: 'A claim the writer doubts: “he would have us believe nobody told him”.' },
            { tone: 'neutral', label: 'PRETENDER QUE + SUBJ. · QUERER', sentence: '¿**Pretendes** que me lo **crea**?', idea: 'Querer que otro haga algo, con reproche.', en: '“Do you expect me to believe that?”' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La concejalía desmiente que el proyecto ___ más de diez millones.', options: ['cueste', 'cuesta', 'costará'], answer: 0, why: '«Desmentir que» rechaza el contenido y pide subjuntivo.', en: 'The council denies that the project costs more than ten million.' },
            { prompt: 'El concejal admitió que la consulta vecinal ___ demasiado tarde.', options: ['llegó', 'llegara', 'haya llegado'], answer: 0, why: '«Admitir que» (= reconocer) transmite un contenido que se da por cierto: indicativo.', en: 'The councillor admitted that the public consultation came too late.' },
          ] },
        ] },
        { title: '¿De quién es la voz? · Whose voice is it?', mascot: '/autoestudio/mascot/noting.webp', coach: 'Dato, cita u opinión. Data, quote or opinion.', blocks: [
          { kind: 'table', title: 'Introducir la fuente · Introducing the source', head: ['Expresión', 'Qué introduce', 'Ejemplo'], rows: [
            ['**según** + nombre o pronombre', 'un dato o una opinión de otra fuente', '[[Según|teal]] el informe técnico, la obra durará dos años. · [[Según|teal]] ella, el plan es necesario.'],
            ['**según** + verbo, sin «que»', 'la fuente es un acto de decir o saber', '[[Según dicen|teal]], la obra ya está adjudicada. · [[Según ha declarado|teal]] el concejal, no hay prisa.'],
            ['**en palabras de** + persona', 'una cita, normalmente literal', '[[En palabras de|teal]] Pilar Ferrán, «sin aparcamiento, el comercio se muere».'],
            ['**a juicio de** + persona', 'una valoración (registro formal)', '[[A juicio de|teal]] los técnicos, el proyecto es viable.'],
            ['**para** + persona', 'una opinión (registro general)', '[[Para|teal]] Rubén, el plan es un error.'],
            ['**se dice que · dicen que · se comenta que · corre el rumor de que**', 'una fuente anónima o colectiva: nadie responde', '[[Se dice que|teal]] la constructora ya tiene los permisos.'],
          ], note: '«Según» es una preposición especial: va con **tú** y **yo** («según tú»), nunca con *mí* o *ti*, y nunca lleva «que» detrás de la fuente. Para dar tu propia opinión, lo más natural es «para mí» o «a mi juicio». **Para** y **a juicio de** presentan opiniones, no datos: «**Según** el informe, cuesta cuatro millones», no «Para el informe…». Ojo: «según» también significa ‘depending on’: «según el día».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rubén acaba de dar su opinión. Natalia contesta: «___, el plan es un error; para mí, es una oportunidad perdida».', options: ['Según a ti', 'Según tú', 'Según ti'], answer: 1, why: '«Según» va con los pronombres «yo» y «tú», sin preposición: «según tú».', en: '“According to you…”: según takes the subject pronoun.' },
            { prompt: 'El informe técnico calcula un coste de cuatro millones. ¿Cómo lo transmites?', options: ['Según el informe técnico, la obra costará cuatro millones.', 'Para el informe técnico, la obra costará cuatro millones.', 'Según que el informe técnico, la obra costará cuatro millones.'], answer: 0, why: 'Es un dato atribuido: «según» + la fuente, sin «que». «Para» introduce opiniones de personas.', en: 'A figure taken from a report: how do you attribute it?' },
          ] },
        ] },
        { title: 'Tomar distancia · Keeping your distance', mascot: '/brand/mascot/seated.webp', coach: 'Lo transmito, no lo firmo. I pass it on, I don’t sign it.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'MARCAS DE DISTANCIA', question: '¿Transmites algo sin hacerte responsable, o incluso con duda?', en: '“Supuestamente” (supposedly) attributes the claim to others and usually shows doubt. “Presuntamente / presunto” (allegedly, alleged) belong to legal and news language: they do not express distrust, they respect the presumption of innocence. “El llamado” (the so-called / the plan known as) presents a name someone else gave, neutrally or with a touch of irony. Distancing quotation marks put a word in someone else’s mouth: los «expertos» = the people who call themselves experts.', formula: ['supuestamente · presuntamente (jurídico y periodístico)', 'el supuesto · el presunto · el llamado + nombre', 'comillas de distancia: los «expertos», la «consulta»'],
            meaning: 'Con estas marcas, quien escribe deja claro que **la palabra o el dato no son suyos**. «Supuestamente» y las comillas suelen añadir duda o ironía; «presunto» solo protege a alguien que no ha sido juzgado.',
            examples: [
              { es: '[[Supuestamente|orange]], el aparcamiento iba a estar listo en un año.', en: 'Supposedly the car park was going to be ready in a year (the speaker doubts it).' },
              { es: 'La policía ha identificado al [[presunto|orange]] autor de las pintadas del mercado.', en: 'The police have identified the alleged author of the graffiti: no court has ruled yet.' },
              { es: '[[El llamado|orange]] Plan Plaza Viva incluye doscientas plazas de aparcamiento.', en: 'The so-called Plaza Viva Plan (the official name) includes two hundred parking spaces.' },
              { es: 'El ayuntamiento cita a sus [[«expertos»|orange]], pero nadie conoce sus nombres.', en: 'The council quotes its “experts”, but nobody knows their names (ironic quotation marks).' },
            ] },
          { kind: 'tip', icon: '💡', title: '«Aparentemente» no es «apparently»', text: 'En español, **aparentemente** habla sobre todo de la **apariencia**: «**Aparentemente** estaba tranquilo» (parecía tranquilo; quizá no lo estaba). Para transmitir algo que te han contado, como el inglés *apparently*, lo más natural es **al parecer**, **por lo visto** o **según parece**: «**Al parecer**, la asamblea se ha aplazado». «Aparentemente» con ese valor se oye, pero a menudo suena a traducción.', en: 'In Spanish “aparentemente” mostly means “seemingly, on the surface”. For “apparently” in the sense of “I’ve been told”, use “al parecer”, “por lo visto” or “según parece”; “aparentemente” with that meaning often sounds translated.' },
          { kind: 'table', title: 'En la conversación: el «que» de eco · Echoic “que” in speech', head: ['Uso', 'Ejemplo', 'Valor'], rows: [
            ['repetir con sorpresa lo que acabas de oír', '—No voy a la asamblea. —[[¿Que no vienes?|violet]]', '‘¿has dicho que…?’ (You’re not coming?!)'],
            ['pasar un recado de otra persona', '[[Que dice Pilar que|violet]] la llames.', '‘Pilar dice que…’ (Pilar says to call her.)'],
            ['repetir lo que tú ya dijiste', '—¿Cómo? —[[Que|violet]] la asamblea es a las siete.', '‘lo que he dicho es que…’ (I said…)'],
          ], note: 'Este **que** inicial, sin tilde, es propio de la lengua oral en todo el mundo hispánico. No lo uses en un texto formal.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En la plaza, Rubén oye: «Mañana cortan los árboles». Responde sorprendido:', options: ['¿Que cortan los árboles mañana?', '¿Qué cortan los árboles mañana?', '¿Cortan que los árboles mañana?'], answer: 0, why: 'Es un «que» de eco, sin tilde: repite lo que acaba de oír. «¿Qué…?» con tilde pregunta por una cosa y aquí no tiene sentido.', en: 'Rubén echoes what he has just heard, in surprise.' },
            { prompt: 'Una vecina te ha contado que la obra empezará en marzo. ¿Cómo lo transmites?', options: ['Presuntamente, las obras empezarán en marzo.', 'Al parecer, las obras empezarán en marzo.', 'Aparentemente, las obras empezarán en marzo.'], answer: 1, why: 'Para algo oído, «al parecer». «Aparentemente» habla de la apariencia y «presuntamente» pertenece al registro jurídico.', en: '“Apparently (I’ve been told), the works start in March.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Verbo, modo o fuente? Verb, mood or source?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿el verbo, el modo o la manera de introducir la fuente?', self: 'Lee cada frase y decide qué falla: ¿el verbo, el modo o la fuente? Después toca para ver la corrección. (Is the problem the verb, the mood or the source?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Según que el informe, la obra durará dos años.', right: 'Según el informe, la obra durará dos años.', why: '«Según» va directamente con la fuente. Detrás de un verbo tampoco lleva «que»: «según dicen».' },
            { wrong: 'Según mí, el plan es un error.', right: 'Para mí (o A mi juicio), el plan es un error.', why: '«Según» no se combina con «mí» ni «ti». Para tu propia opinión, lo general es «para mí» o «a mi juicio».' },
            { wrong: 'El concejal niega que el presupuesto ha subido.', right: 'El concejal niega que el presupuesto haya subido.', why: '«Negar que» rechaza el contenido y pide normalmente subjuntivo.' },
            { wrong: 'El concejal reconoció que la consulta haya sido insuficiente.', right: 'El concejal reconoció que la consulta fue (o había sido) insuficiente.', why: '«Reconocer que» presenta el contenido como cierto: indicativo.' },
            { wrong: 'El concejal pretendía estar sorprendido, pero ya lo sabía.', right: 'El concejal fingía estar sorprendido, pero ya lo sabía.', why: 'Falso amigo: ‘to pretend’ es «fingir». «Pretender» + infinitivo es ‘tener la intención de’.' },
            { wrong: 'Para el informe técnico, el suelo es inestable.', right: 'Según el informe técnico, el suelo es inestable.', why: 'Un informe aporta datos, no opiniones personales: «según». «Para» y «a juicio de» van con personas que opinan.' },
            { wrong: 'Aparentemente, la asamblea se ha aplazado (nos lo ha dicho Pilar).', right: 'Al parecer, la asamblea se ha aplazado.', why: 'Para lo que te han contado, «al parecer» o «por lo visto». «Aparentemente» habla de la apariencia.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El portavoz desmintió que el ayuntamiento ___ talar más árboles.', options: ['iba a', 'irá a', 'fuera a'], answer: 2, why: '«Desmentir» rechaza el contenido: subjuntivo. Con el verbo principal en pasado, imperfecto de subjuntivo: «fuera a talar».', en: 'The spokesman denied the council was going to cut down more trees.' },
            { prompt: 'Natalia no quiere responder de un dato que solo ha oído en la calle. ¿Qué frase elige?', options: ['Supuestamente, la constructora ya tiene los permisos.', 'La constructora reconoce que ya tiene los permisos.', 'La constructora ya tiene los permisos.'], answer: 0, why: '«Supuestamente» atribuye el dato a otros y marca distancia. La frase sin marcas y «reconoce» lo dan por cierto.', en: 'Natalia doesn’t want to vouch for something she heard in the street.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno elige una noticia de la semana y la cuenta con tres verbos distintos (uno neutro, uno que la da por cierta y uno que toma distancia).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Lo que dice el periódico', coach: 'Toca cada marca: ¿qué postura revela? Tap each mark.',
      steps: [
        { title: 'En el local de la asociación · At the association’s office', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Rubén y tu alumno es Natalia. Después tu alumno toca cada expresión marcada y explica quién habla a través de ella y qué postura revela.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿de quién es la voz y qué postura revela? (Whose voice, and what stance?)' } },
          { kind: 'explore', title: 'El artículo del diario del distrito', setting: 'El día después de la asamblea. Rubén Salgado, tesorero de la asociación, llega al local con el diario del distrito. Natalia Cifuentes ya lo ha leído.', lines: [
            { who: 'Rubén', text: '¿Has visto lo que publica hoy el diario del distrito? [[Según|teal]] el titular, todo el barrio apoya el aparcamiento.', en: 'Have you seen today’s district paper? According to the headline, the whole neighbourhood backs the car park.' },
            { who: 'Natalia', text: 'Ya lo he leído. Y fíjate en los verbos: Pilar Ferrán [[asegura|blue]] que el aparcamiento salvará el comercio, mientras que nosotros [[pretendemos|orange]] que la plaza no se puede tocar.', en: 'I’ve read it. Look at the verbs: Pilar “assures” readers the car park will save local shops, while we “would have people believe” the square can’t be touched.' },
            { who: 'Rubén', text: '[[¿Que pretendemos?|violet]] O sea, que lo de ella es un dato y lo nuestro, una ocurrencia.', en: 'We “claim”? So what she says is a fact and what we say is a whim.' },
            { who: 'Natalia', text: 'Exacto. Y a nosotros nos llaman [[«vecinos críticos»|orange]], entre comillas, como si fuéramos cuatro.', en: 'Exactly. And they call us “critical residents”, in quotation marks, as if there were only a handful of us.' },
            { who: 'Rubén', text: 'Al concejal, en cambio, lo tratan muy bien: «[[A juicio de|teal]] Llorente, el proyecto es una oportunidad histórica».', en: 'The councillor, on the other hand, gets kind treatment: “In Llorente’s view, the project is a historic opportunity.”' },
            { who: 'Natalia', text: 'Y no dicen nada de los árboles. Ayer, en la asamblea, [[reconoció|blue]] que habrá que talar doce, y eso no aparece.', en: 'And nothing about the trees. Yesterday at the meeting he admitted that twelve will have to be cut down, and that’s missing.' },
            { who: 'Rubén', text: 'Bueno, luego [[matizó|blue]] que plantarán el doble en otras calles.', en: 'Well, he then added that they’ll plant twice as many in other streets.' },
            { who: 'Natalia', text: 'Eso lo dijo él. En el boletín no lo pondremos como un hecho: escribiremos «según el concejal» y ya veremos dónde los plantan.', en: 'That’s his claim. In the newsletter we won’t present it as a fact: we’ll write “according to the councillor”, and we’ll see where they plant them.' },
            { who: 'Rubén', text: 'Me parece justo. Ah, [[y que dice Pilar que|violet]] la llames antes del viernes.', en: 'Fair enough. Oh, and Pilar says to call her before Friday.' },
            { who: 'Natalia', text: 'La llamo esta tarde. Ella [[niega|blue]] que el plan perjudique a nadie, y quiero entender por qué.', en: 'I’ll call her this afternoon. She denies the plan harms anyone, and I want to understand why.' },
            { who: 'Rubén', text: '[[Para|teal]] mí, lo mejor es dar todas las voces y que cada vecino saque sus conclusiones.', en: 'For me, the best thing is to include every voice and let each resident draw their own conclusions.' },
          ], notes: {
            'Según': '«Según» + la fuente (aquí, el titular): solo atribuye. Rubén deja claro que el dato es del periódico, no suyo.',
            'asegura': 'Verbo de afirmación firme: el periódico presenta la opinión de Pilar con seguridad y la deja en boca de ella. Va con indicativo: «salvará».',
            'pretendemos': '«Pretender que» + indicativo: transmite una afirmación y deja ver que quien escribe no se la cree. El periódico elige un verbo con duda para la asociación.',
            '¿Que pretendemos?': '«Que» de eco, sin tilde: Rubén repite con sorpresa e indignación lo que acaba de oír. Es propio de la conversación.',
            '«vecinos críticos»': 'Comillas de distancia: el periódico pone la etiqueta en boca de otros o la usa con ironía. Natalia lo nota: «entre comillas».',
            'A juicio de': '«A juicio de» + persona introduce una valoración en registro formal. Presenta lo dicho como opinión de Llorente.',
            'reconoció': '«Reconocer que» + indicativo: el concejal admitió algo que no le favorece y el contenido se da por cierto.',
            'matizó': '«Matizar» precisa o corrige algo dicho antes: después de admitir la tala, el concejal añade un dato que suaviza el efecto.',
            'y que dice Pilar que': '«Que» de eco para pasar un recado: «(Te digo) que Pilar dice que la llames». La petición va en subjuntivo.',
            'niega': '«Negar que» rechaza el contenido y pide subjuntivo: «niega que el plan perjudique».',
            'Para': '«Para» + persona: opinión en registro general. Rubén presenta su postura como suya.',
          } },
          { kind: 'choice', title: '¿Has entendido? · Did you understand?', items: [
            { prompt: '¿Por qué está molesta Natalia con el artículo?', options: ['Porque el periódico usa verbos más favorables para unos que para otros.', 'Porque el periódico no menciona a la asociación.', 'Porque el periódico inventa una cita del concejal.'], answer: 0, why: 'Para Pilar elige «asegura» y para la asociación «pretendemos»: la elección del verbo ya toma partido.', en: 'Why is Natalia annoyed? The paper uses friendlier verbs for some voices than for others.' },
            { prompt: '¿Qué dato no aparece en el artículo?', options: ['Que el concejal reconoció que habrá que talar doce árboles.', 'Que Pilar apoya el aparcamiento.', 'Que el concejal ve el proyecto como una oportunidad.'], answer: 0, why: '«Ayer, en la asamblea, reconoció que habrá que talar doce, y eso no aparece».', en: 'Which fact is missing from the article?' },
            { prompt: '¿Cómo presentará el boletín la promesa de plantar el doble de árboles?', options: ['Atribuida al concejal: «según el concejal».', 'Como un hecho confirmado.', 'Entre comillas irónicas.'], answer: 0, why: 'Natalia dice que no lo pondrá como un hecho, sino con «según el concejal»: atribución neutra.', en: 'How will the newsletter present the promise to plant twice as many trees?' },
          ] },
        ] },
        { title: 'La llamada a Pilar · The call to Pilar', mascot: '/brand/mascot/kneeling.webp', coach: 'Elige la voz correcta. Pick the right voice.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees el papel de Pilar y tu alumno el de Natalia; en cada hueco, tu alumno elige y justifica.', self: 'Completa la llamada. En cada hueco, piensa: ¿dato, eco, rechazo o postura mantenida? (Data, echo, denial or a position held?)' } },
          { kind: 'chat-fill', title: 'Natalia llama a Pilar · Natalia calls Pilar', lines: [
            { who: 'Pilar', text: 'Natalia, gracias por llamar. ¿Has leído el artículo?' },
            { who: 'Natalia', text: 'Sí. ___ el artículo, ochocientos vecinos han firmado a favor del aparcamiento.', options: ['A juicio de', 'Según', 'Para'], answer: 1, why: 'Es un dato atribuido a un texto: «según». «Para» y «a juicio de» introducen opiniones de personas.' },
            { who: 'Pilar', text: '¿___ han firmado ochocientos vecinos? Yo hablé de ochenta comerciantes.', options: ['Que', 'Qué', 'Cómo'], answer: 0, why: '«Que» de eco, sin tilde: Pilar repite con sorpresa lo que acaba de oír.' },
            { who: 'Natalia', text: 'Entonces, ¿puedo escribir en el boletín que el periódico se equivocó?' },
            { who: 'Pilar', text: 'Puedes escribir que yo ___ que esa cifra sea correcta. Lo voy a decir también en la radio.', options: ['niego', 'reconozco', 'admito'], answer: 0, why: 'Pilar rechaza la cifra: «negar que» + subjuntivo («sea»). «Reconozco» y «admito» darían el dato por cierto.' },
            { who: 'Natalia', text: 'Perfecto. ¿Y sobre el aparcamiento? ¿Sigues a favor?' },
            { who: 'Pilar', text: 'Sí, y lo ___: sin aparcamiento, muchas tiendas no aguantarán. Pero admito que la consulta llegó tarde.', options: ['niego', 'pretendo', 'sostengo'], answer: 2, why: '«Sostener» es mantener una postura frente a otras. «Lo pretendo» significaría ‘lo intento’ y «lo niego» diría lo contrario.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Elegir la voz y el compromiso', coach: 'Cada decisión, su razón. Every choice has a reason.',
      steps: [
        { title: '¿Quién responde del dato? · Who answers for it?', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada frase en voz alta y decide qué hace quien escribe con el dato. Tú preguntas qué palabra lo revela.', self: 'Lee cada frase y decide: ¿quien escribe lo da por cierto, solo lo atribuye o se distancia? (Vouches, attributes, or distances?)' } },
          { kind: 'classify', title: 'Tres actitudes · Three attitudes', categories: [
            { id: 'cierto', label: 'LO DA POR CIERTO', tone: 'blue' },
            { id: 'neutro', label: 'SOLO ATRIBUYE', tone: 'teal' },
            { id: 'distancia', label: 'SE DISTANCIA', tone: 'orange' },
          ], items: [
            { text: 'La constructora admite que las obras afectarán al mercado.', answer: 'cierto', why: '«Admitir que» presenta el contenido como verdadero: la constructora acepta algo que no le conviene.' },
            { text: 'Según la concejalía, el tráfico bajará un veinte por ciento.', answer: 'neutro', why: '«Según» + fuente: atribución sin valoración.' },
            { text: 'El supuesto estudio de tráfico no se ha publicado nunca.', answer: 'distancia', why: '«El supuesto» pone en duda que el estudio exista de verdad.' },
            { text: 'Fuentes municipales explicaron que el proyecto se votará en abril.', answer: 'neutro', why: '«Explicar» es un verbo introductor neutro.' },
            { text: 'El concejal pretende que los vecinos estaban informados desde el principio.', answer: 'distancia', why: '«Pretender que» + indicativo deja ver que quien escribe no se lo cree.' },
            { text: 'El portavoz reconoció que el presupuesto inicial era insuficiente.', answer: 'cierto', why: '«Reconocer que» da el contenido por cierto.' },
            { text: 'Los «estudios independientes» que cita la empresa los ha pagado la propia empresa.', answer: 'distancia', why: 'Las comillas marcan ironía: los estudios no son tan independientes.' },
          ] },
        ] },
        { title: 'Verbo y modo · Verb and mood', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'choice', title: 'Elige · Choose', items: [
            { prompt: 'La asociación denuncia que nadie ___ a los vecinos del número 14.', options: ['habría avisado', 'ha avisado', 'haya avisado'], answer: 1, why: '«Denunciar que» presenta el contenido como un hecho (injusto): indicativo.', en: 'The association complains that nobody has informed the residents at number 14.' },
            { prompt: 'La arquitecta negó que el aparcamiento ___ problemas en los edificios cercanos.', options: ['causaba', 'causa', 'causara'], answer: 2, why: '«Negar que» rechaza el contenido: subjuntivo; con «negó», en imperfecto: «causara».', en: 'The architect denied that the car park caused problems in nearby buildings.' },
            { prompt: 'La constructora alegó que el retraso ___ a la falta de permisos.', options: ['se debía', 'se debiera', 'se deba'], answer: 0, why: '«Alegar que» transmite una justificación de la fuente: indicativo.', en: 'The construction company claimed that the delay was due to the lack of permits.' },
            { prompt: '¿Pretendes que los vecinos ___ el plan sin leerlo?', options: ['firmarán', 'firmen', 'firman'], answer: 1, why: '«Pretender que» con el sentido de ‘querer que otro haga algo’ pide subjuntivo.', en: 'Do you expect residents to sign the plan without reading it?' },
            { prompt: 'Los técnicos advirtieron ___ el suelo podía hundirse.', options: ['en que', 'a que', 'de que'], answer: 2, why: 'Con el sentido de ‘avisar’, «advertir que» y «advertir de que» son correctos; «en que» y «a que» no.', en: 'The engineers warned that the ground could subside.' },
          ] },
        ] },
        { title: 'Corrige el boletín · Fix the newsletter', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son frases del primer borrador del boletín. Tu alumno decide si cada una está bien y, si no, elige la corrección y explica por qué.', self: 'Son frases del borrador del boletín. ¿Están bien? Si no, elige la corrección. (Is each sentence right? If not, pick the fix.)' } },
          { kind: 'fix', title: '¿Está bien? · Is it right?', items: [
            { sentence: 'Según que la concejalía, la plaza se cerrará en junio.', ok: false, options: ['Según la concejalía, la plaza se cerrará en junio.', 'Según de la concejalía, la plaza se cerrará en junio.', 'Para la concejalía, la plaza se cerrará en junio.'], answer: 0, why: '«Según» va directamente con la fuente. «Para» presentaría un dato como si fuera una opinión.' },
            { sentence: 'El presidente de la asociación reconoció que se habían equivocado con las fechas.', ok: true, why: '«Reconocer que» + indicativo: admite un error propio y el contenido se da por cierto.' },
            { sentence: 'Rubén niega que ha firmado el documento.', ok: false, options: ['Rubén niega de que ha firmado el documento.', 'Rubén niega que habría firmado el documento.', 'Rubén niega que haya firmado el documento.'], answer: 2, why: '«Negar que» pide subjuntivo y no lleva «de».' },
            { sentence: 'Aparentemente, el ayuntamiento ha recibido más de cien quejas (nos lo ha contado una vecina).', ok: false, options: ['Al parecer, el ayuntamiento ha recibido más de cien quejas.', 'Presuntamente, el ayuntamiento ha recibido más de cien quejas.', 'A juicio de una vecina, el ayuntamiento ha recibido más de cien quejas.'], answer: 0, why: 'Para algo que te han contado, «al parecer». «Presuntamente» es jurídico y «a juicio de» introduce una opinión, no un dato.' },
            { sentence: 'Una vecina pretendía estar dormida cuando llamaron a su puerta para firmar.', ok: false, options: ['Una vecina fingía estar dormida cuando llamaron a su puerta para firmar.', 'Una vecina presumía estar dormida cuando llamaron a su puerta para firmar.', 'Una vecina suponía estar dormida cuando llamaron a su puerta para firmar.'], answer: 0, why: '‘To pretend’ = «fingir». «Pretender estar» sería ‘tener la intención de estar’.' },
          ] },
        ] },
        { title: 'Redactando juntos · Writing together', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'chat-fill', title: 'Natalia y Rubén escriben el boletín', lines: [
            { who: 'Rubén', text: '¿Cómo empiezo? «___ Plan Plaza Viva prevé doscientas plazas de aparcamiento».', options: ['El presunto', 'El aparente', 'El llamado'], answer: 2, why: '«El llamado» presenta el nombre que otro le ha puesto al plan. «Presunto» es para delitos; «aparente» habla de apariencia.' },
            { who: 'Natalia', text: 'Bien. Luego la cita de Llorente: «___ el concejal, “la plaza será más verde que nunca”».', options: ['En palabras de', 'Según que', 'Para'], answer: 0, why: 'Una cita literal entre comillas se introduce con «en palabras de». «Según que» no existe con este valor.' },
            { who: 'Rubén', text: '¿Más verde? ¡Si talan doce árboles! ¿Pongo que el concejal ___ que la plaza será más verde?', options: ['reconoce', 'admite', 'pretende'], answer: 2, why: 'Rubén quiere transmitir una afirmación que considera falsa: «pretender que» + indicativo deja ver la duda.' },
            { who: 'Natalia', text: 'No: eso sería opinar. Mejor que el concejal ___ que el informe llegó tarde: lo dijo delante de todos.', options: ['pretendió', 'reconoció', 'negó'], answer: 1, why: 'Lo admitió en público: «reconocer que» + indicativo da el contenido por cierto sin añadir opinión.' },
          ] },
        ] },
        { title: 'Construye · Build', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'build', title: 'Ordena · Put in order', items: [
            { tiles: ['Según', 'el', 'informe,', 'la', 'obra', 'durará', 'dos', 'años.'], accept: ['Según el informe, la obra durará dos años.'], en: 'According to the report, the works will take two years.' },
            { tiles: ['La', 'asociación', 'niega', 'que', 'el', 'plan', 'tenga', 'apoyo', 'vecinal.'], accept: ['La asociación niega que el plan tenga apoyo vecinal.'], en: 'The association denies that the plan has residents’ support.' },
            { tiles: ['Para', 'Rubén,', 'el', 'llamado', 'plan', 'verde', 'es', 'un', 'error.'], accept: ['Para Rubén, el llamado plan verde es un error.'], en: 'In Rubén’s view, the so-called green plan is a mistake.' },
          ] },
        ] },
        { title: 'Cambia el compromiso · Change the commitment', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno reescribe cada fragmento de noticia según la instrucción y lee en voz alta las dos versiones: ¿qué ha cambiado en la responsabilidad de quien escribe?', self: 'Reescribe cada fragmento según la instrucción y compara: ¿quién responde ahora del dato? (Who answers for the claim now?)' } },
          { kind: 'rewrite', title: 'Reescribe la noticia · Rewrite the news', items: [
            { prompt: 'El aparcamiento costará cuatro millones. Las obras empezarán en marzo.', instruction: 'Atribuye las dos informaciones al ayuntamiento, sin tomar postura: empieza con «Según el ayuntamiento,» y une con «y».', accept: ['Según el ayuntamiento, el aparcamiento costará cuatro millones y las obras empezarán en marzo'] },
            { prompt: 'Las obras no cortarán el tráfico de la calle Mayor.', instruction: 'No te lo crees: empieza con «Supuestamente,».', accept: ['Supuestamente, las obras no cortarán el tráfico de la calle Mayor'] },
            { prompt: 'El concejal dijo: «El informe llegó tarde».', instruction: 'Estilo indirecto con un verbo que muestre que admite algo que no le conviene (en pasado).', accept: ['El concejal reconoció que el informe llegó tarde', 'El concejal reconoció que el informe había llegado tarde', 'El concejal admitió que el informe llegó tarde', 'El concejal admitió que el informe había llegado tarde'] },
            { prompt: 'El portavoz dijo: «No es verdad que el proyecto esté aprobado».', instruction: 'Resúmelo con «negar» en pretérito indefinido.', accept: ['El portavoz negó que el proyecto estuviera aprobado', 'El portavoz negó que el proyecto estuviese aprobado', 'El portavoz negó que el proyecto esté aprobado'] },
            { prompt: 'Según fuentes municipales, la obra empezará en marzo.', instruction: 'Ahora el ayuntamiento lo ha anunciado oficialmente: usa «confirmar» en pretérito perfecto, con «El ayuntamiento» como sujeto.', accept: ['El ayuntamiento ha confirmado que la obra empezará en marzo'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno toma un titular real de esta semana y lo reescribe tres veces: con un verbo neutro, con un verbo que lo da por cierto y con una marca de distancia.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Voces del barrio', coach: 'Primero la idea; después, quién dijo qué. Gist, then who said what.',
      steps: [
        { title: 'La radio comunitaria · Community radio', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada voz que aparece y el verbo con el que la presenta la locutora. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para anotar cada voz con su verbo. Vas a oír «talar» (to cut down trees) y «el pleno» (the full council meeting). (Note each voice and its verb.)' } },
          { kind: 'listen', title: 'Voces del barrio', channel: 'RADIO SAN LORENZO · VOCES DEL BARRIO', src: '/audio/grammar-live/493.mp3',
            before: 'La radio del barrio resume la asamblea sobre la plaza. ¿Qué voces crees que aparecerán y qué postura tendrá cada una? (Which voices will you hear, and what stance will each take?)',
            gist: { prompt: '¿Qué hace la locutora? · What does the presenter do?', options: ['Anuncia que el pleno ya ha aprobado el plan.', 'Resume la asamblea atribuyendo cada postura a su fuente.', 'Defiende el aparcamiento frente a los vecinos.'], answer: 1, why: 'Presenta voz por voz: el concejal, Pilar, la asociación y los técnicos, cada uno con su verbo.', en: 'She sums up the meeting, attributing every position to its source.' },
            details: [
              { prompt: '¿Qué reconoció el concejal Llorente?', options: ['Que el informe técnico se entregó con retraso.', 'Que el aparcamiento no resolverá el tráfico.', 'Que no se plantarán árboles nuevos.'], answer: 0, why: '«Reconoció que el informe técnico se entregó con retraso».', en: 'What did councillor Llorente acknowledge?' },
              { prompt: '¿Qué ha dicho Pilar Ferrán en la emisora?', options: ['Ha negado que haya ochocientas firmas a favor.', 'Ha reconocido que el plan perjudica a las tiendas.', 'Ha pedido que se vote el plan en abril.'], answer: 0, why: '«Ha negado en esta emisora que haya ochocientas firmas a favor del plan».', en: 'What has Pilar Ferrán said on air?' },
              { prompt: '¿Cómo presenta la locutora la fecha de la votación?', options: ['Con distancia: «supuestamente», y aclara que nadie la ha confirmado.', 'Como un hecho confirmado por el ayuntamiento.', 'Como una opinión de la asociación.'], answer: 0, why: '«Supuestamente, el pleno votará el plan en abril, aunque esa fecha nadie la ha confirmado».', en: 'How does she present the date of the vote?' },
              { prompt: '¿De qué advierten los técnicos?', options: ['De que las obras podrían durar el doble si el suelo no es estable.', 'De que el aparcamiento será demasiado pequeño.', 'De que hay que talar más árboles.'], answer: 0, why: '«Los técnicos advierten de que, si el suelo no es estable, las obras podrían durar el doble».', en: 'What do the engineers warn about?' },
            ],
            transcript: 'Buenas tardes y bienvenidos a «Voces del barrio». Anoche, en el centro cultural, más de cien vecinos debatieron durante tres horas [[el llamado|orange]] Plan Plaza Viva. Les resumo quién dijo qué. El concejal de Urbanismo, Marcos Llorente, [[aseguró|blue]] que el aparcamiento acabará con el problema del tráfico y [[reconoció|blue]] que el informe técnico se entregó con retraso. También admitió que habrá que talar doce árboles, aunque [[matizó|blue]] que se plantarán veinticuatro en otras calles. Hoy, la presidenta de los comerciantes, Pilar Ferrán, [[ha negado|blue]] en esta emisora que haya ochocientas firmas a favor del plan, como publicó un diario del distrito: [[según|teal]] ella, son ochenta, y todas de comerciantes. Por su parte, la asociación vecinal [[denuncia|blue]] que nadie consultó a los vecinos antes de redactar el proyecto. [[A juicio de|teal]] su secretaria, Natalia Cifuentes, la plaza no necesita más coches, sino más sombra. [[Supuestamente|orange]], el pleno votará el plan en abril, aunque esa fecha nadie la ha confirmado. Y una última nota: los técnicos [[advierten|blue]] de que, si el suelo no es estable, las obras podrían durar el doble. Seguiremos informando. Esto ha sido «Voces del barrio».',
            reply: { teacher: 'Tú eres un vecino que no fue a la asamblea y llamas a la radio. Tu alumno es Verónica y te resume tres voces, cada una con un verbo distinto.', self: 'Resume en voz alta tres voces de la asamblea, cada una con un verbo distinto (reconoció, negó que…, denuncia…). (Summarise three voices with three different verbs.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Dar voz a otros', coach: 'Cita, atribuye y toma postura. Quote, attribute, take a stance.',
      steps: [
        { title: 'Voces, datos y opiniones · Voices, facts and opinions', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde atribuyendo cada idea a su fuente. Si presenta como hecho algo que solo ha oído, tú preguntas «¿Eso lo dices tú o lo dice alguien?» y tu alumno reformula.', self: 'Lee cada pregunta y responde en voz alta. En cada respuesta, atribuye al menos una idea a otra voz y di tu postura. (Attribute at least one idea to another voice in each answer.)' } },
          { kind: 'talk', cards: [
            { q: 'Cuenta una noticia de tu ciudad tres veces: dándola por cierta, atribuyéndola sin opinar y tomando distancia. · Tell one local story three ways.', followUps: ['¿Qué versión es la más honesta?', '¿Cuál usaría un medio que apoya la noticia?', '¿Y uno que está en contra?'], phrases: ['[[Según|teal]]…', '…[[reconoce|blue]] que…', '[[Supuestamente|orange]], …', '…[[pretende|orange]] que + indicativo…'], hint: 'Cambia solo la marca de atribución; el dato es el mismo.', example: 'El ayuntamiento reconoce que el metro llegará con un año de retraso. Según el ayuntamiento, el metro llegará con un año de retraso. Supuestamente, el metro llegará con «solo» un año de retraso, pero nadie se lo cree.' },
            { q: 'Un vecino te dice: «Van a cerrar la plaza un año entero». Reacciona y después pásale el recado a otra persona. · React, then pass the message on.', followUps: ['¿Cómo reaccionas si no te lo crees?', '¿Cómo se lo cuentas a alguien de tu familia?'], phrases: ['[[¿Que…?|violet]]', '[[Que dice… que|violet]]…', '[[Al parecer|teal]], …', '[[Se dice que|teal]]…'], hint: 'Primero el «que» de eco con sorpresa; después el recado, con «que dice X que…».', example: '¿Que cierran la plaza un año entero? ¡No puede ser! … Oye, que dice el vecino del tercero que van a cerrar la plaza un año. Al parecer, lo han anunciado en la asamblea, pero yo no me lo creo hasta verlo.' },
            { q: '¿Aparcamiento o plaza verde? Presenta dos posturas ajenas y después la tuya. · Present two other views, then yours.', followUps: ['¿Qué argumento te parece más débil?', '¿Qué dato te falta para decidir?'], phrases: ['[[Para|teal]] los comerciantes, …', '[[A juicio de|teal]] los técnicos, …', '…[[sostiene|blue]] que…', '[[Para|teal]] mí, …'], hint: 'Separa las voces: primero los demás, con su verbo; al final, tu opinión con «para mí» o «a mi juicio».', example: 'Para los comerciantes, el aparcamiento es la única forma de salvar las tiendas. La asociación vecinal, en cambio, sostiene que el barrio necesita sombra y no más coches. A mi juicio, las dos cosas son compatibles si el aparcamiento se hace fuera de la plaza.' },
            { q: 'Compara dos titulares: «El alcalde admite que hubo errores» y «El alcalde pretende que no hubo errores». ¿Qué medio te inspira más confianza? · Which headline do you trust more?', followUps: ['¿Qué dice cada verbo de la postura del periódico?', '¿Cómo lo escribirías tú de forma neutra?'], phrases: ['[[admite que|blue]] + indicativo…', '[[niega que|blue]] + subjuntivo…', '[[Según|teal]] el alcalde, …'], hint: 'Fíjate en lo que el verbo dice de quien escribe, no solo del alcalde.', example: 'El primer titular da los errores por ciertos: el alcalde los admite. El segundo insinúa que el alcalde miente. Yo escribiría algo neutro: «El alcalde niega que hubiera errores» o «Según el alcalde, no hubo errores».', next: 'Ahora, las comillas.' },
            { q: '¿Cuándo pones una palabra entre comillas, con los dedos o al escribir? Da ejemplos de tu trabajo o de las noticias. · When do you use “air quotes”?', followUps: ['¿Te parece una forma elegante de criticar?', '¿Qué diferencia hay entre «el llamado» y «el supuesto»?', '¿Has visto «presunto» en las noticias de tu país?'], phrases: ['[[«…»|orange]], entre comillas', '[[el llamado|orange]]…', '[[el supuesto|orange]]…', '[[presuntamente|orange]]…'], hint: 'Explica qué voz hay detrás de la palabra entre comillas y qué piensas tú de ella.', example: 'En mi empresa hablan de la «flexibilidad horaria», entre comillas, porque en realidad tenemos que estar en la oficina de nueve a seis. El llamado plan de bienestar consiste en una fruta los lunes. Y el supuesto aumento de sueldo todavía no ha llegado.', teacher: 'Tú dices una palabra de moda en el trabajo o en la política; tu alumno la usa en una frase con comillas de distancia.' },
          ], swap: { teacher: 'Cambien los papeles: tu alumno te cuenta una noticia y tú la atribuyes con un verbo; tu alumno decide qué postura revela tu verbo.', self: 'Graba tu respuesta a dos tarjetas y escúchala: ¿has dejado claro de quién es cada idea? (Is it clear whose idea each one is?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El boletín del barrio', coach: 'Todas las voces, cada una en su sitio. Every voice in its place.',
      steps: [
        { title: 'La Hoja de San Lorenzo · The neighbourhood newsletter', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada voz: ¿quién lo dice, con qué verbo, y se compromete quien escribe?', self: 'Escribe la noticia y toca «Revisar mi texto». Después repasa cada voz: ¿está atribuida? ¿El verbo y el modo dicen lo que quieres? (Check that every voice is attributed.)' } },
          { kind: 'write', title: 'La asamblea, voz por voz · The meeting, voice by voice', situation: 'Eres Natalia (o el secretario de una asociación de tu ciudad, con un conflicto local). Escribes para el boletín que reciben todos los socios, también los que no fueron a la asamblea. Tienen que saber quién dijo qué y qué está confirmado. (Write for members who missed the meeting: who said what, and what is confirmed.)', task: [
            'Un titular y una primera frase con el tema, sin opinión.',
            'Al menos cuatro voces, cada una con un verbo introductor distinto (reconoció, sostiene, matizó, denuncia…).',
            'Una frase con «negar que» o «desmentir que» + subjuntivo.',
            'Al menos un «según» + fuente y una marca de distancia (supuestamente, el llamado, comillas).',
            'Una frase final que separe lo confirmado de lo que aún no lo está.',
          ], starters: ['Más de… vecinos acudieron…', 'El concejal… reconoció que…', '…niega que…', 'Según…, …', 'A juicio de…, …', 'Supuestamente, …, aunque…'],
            words: ['afirmar', 'asegurar', 'sostener', 'reconocer', 'admitir', 'negar que', 'matizar', 'denunciar', 'advertir de que', 'según', 'a juicio de', 'en palabras de', 'el llamado', 'supuestamente'],
            model: 'Asamblea sobre la plaza del Olmo: quién dijo qué. Más de cien vecinos acudieron el martes al centro cultural para debatir el llamado Plan Plaza Viva. El concejal de Urbanismo, Marcos Llorente, aseguró que el aparcamiento resolverá el problema del tráfico y reconoció que el informe técnico se entregó con retraso. También admitió que habrá que talar doce árboles, aunque matizó que se plantarán veinticuatro en otras calles; dónde, exactamente, no lo explicó. Pilar Ferrán, presidenta de los comerciantes, sostiene que sin aparcamiento muchas tiendas no aguantarán, pero niega que haya ochocientas firmas a favor del proyecto, como publicó un diario del distrito: según ella, son ochenta. Por nuestra parte, denunciamos que nadie consultó a los vecinos antes de redactar el plan. A juicio de los técnicos que nos asesoran, el suelo de la plaza exige un estudio más detallado. Lo único confirmado es la tala; supuestamente, el pleno votará en abril, pero esa fecha nadie la ha anunciado oficialmente. Seguiremos informando a todos los socios.',
            minWords: 130,
            checks: [
              { label: 'Una fuente introducida con «según»', pattern: '(?<!\\p{L})según(?!\\p{L})', tip: 'Atribuye un dato: «Según el informe, …», «según ella, son ochenta».' },
              { label: 'Un verbo de postura (reconoció, admite, sostiene, matizó, denuncia…)', pattern: '(?<!\\p{L})(?:reconoci[óo]|reconocen?|admiti[óo]|admiten?|asegur[óo]|aseguran?|sostuvo|sostienen?|matiz[óo]|matizan?|puntualiz[óo]|denunci[óo]|denunciamos|denuncian?|advirti[óo]|advierten?|aleg[óo])(?!\\p{L})', tip: 'Elige el verbo según lo que hace la fuente: «reconoció que…», «sostiene que…», «matizó que…».' },
              { label: '«Negar que» o «desmentir que»', pattern: '(?<!\\p{L})(?:niegan?|neg[óo]|negaron|desmienten?|desminti[óo]|desmintieron)\\s+que(?!\\p{L})', tip: 'Incluye un rechazo con subjuntivo: «niega que **haya** ochocientas firmas».' },
              { label: 'Una marca de distancia', pattern: '(?<!\\p{L})(?:supuestamente|supuest[oa]s?|presuntamente|presunt[oa]s?|(?:el|los)\\s+llamados?)(?!\\p{L})', tip: 'Toma distancia: «supuestamente», «el llamado Plan…», «el supuesto estudio».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})según\\s+(?:mí|ti)(?!\\p{L})', why: '«Según» va con **tú** y **yo**: «según tú». Para tu opinión, «para mí» o «a mi juicio».' },
              { pattern: '(?<!\\p{L})según\\s+que\\s+(?:el|la|los|las)(?!\\p{L})', why: '«Según» va directamente con la fuente: «**según el** informe», sin «que».' },
              { pattern: '(?<!\\p{L})(?:niegan?|neg[óo]|desmienten?|desminti[óo])\\s+que\\s+(?:\\p{L}+\\s+){0,3}?(?:hay|ha|han|es|son|está|están|tiene|tienen|va|van)(?!\\p{L})', why: 'Tras **negar que / desmentir que**, lo normal es subjuntivo: «niega que **haya**», «desmiente que **sea**».' },
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
            { tone: 'blue', label: 'VERBO DE POSTURA', formula: 'reconocer / admitir que + ind. · negar / desmentir que + subj.', example: 'Reconoció que el informe **llegó** tarde; niega que **haya** prisa.', caption: 'El verbo dice qué hace la fuente y cuánto se compromete quien escribe.', en: 'The reporting verb shows what the source does and how far the writer commits; rejecting verbs take the subjunctive.' },
            { tone: 'teal', label: 'FUENTE', formula: 'según + fuente / tú / verbo · en palabras de · a juicio de · para', example: 'Según el informe, cuesta cuatro millones. Para Rubén, es un error.', caption: '«Según» para datos u opiniones; «para» y «a juicio de», solo opiniones.', en: '“Según” attributes facts or opinions (never “según que”, never “según mí”); “para” and “a juicio de” introduce opinions only.' },
            { tone: 'orange', label: 'DISTANCIA', formula: 'supuestamente · presunto · el llamado · «comillas» · pretende que + ind.', example: 'Supuestamente, el pleno vota en abril.', caption: 'Transmites sin hacerte responsable; «presunto» es jurídico.', en: 'Distance markers pass a claim on without vouching for it; “presunto” is a legal safeguard, not doubt. For “apparently”, prefer “al parecer”.' },
            { tone: 'violet', label: 'ECO (ORAL)', formula: '¿Que + frase? · Que dice X que…', example: '¿Que no vienes? · Que dice Pilar que la llames.', caption: 'Repetir con sorpresa o pasar un recado; solo en la conversación.', en: 'Echoic “que” repeats what you heard or relays a message; it belongs to speech only.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La pregunta clave · The key question', text: 'Antes de escribir una frase con datos ajenos, pregúntate: **¿quién responde de esto?** Si eres tú, afírmalo. Si es otro, **atribúyelo** con el verbo que describa lo que hace (explica, reconoce, niega, denuncia). Si no te lo crees, **márcalo**: supuestamente, el llamado, comillas.', en: 'Before writing a sentence with someone else’s information, ask who answers for it. If you do, state it. If someone else does, attribute it with a verb that describes what they do. If you don’t believe it, mark your distance.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: 'La directora del colegio desmiente que ___ a cerrar el comedor.', options: ['van', 'irán', 'vayan'], answer: 2, why: '«Desmentir que» rechaza el contenido: subjuntivo.', en: 'The head teacher denies they are going to close the canteen.' },
            { prompt: '___ los inspectores, el edificio necesita una reforma urgente.', options: ['Según', 'Según que', 'Según a'], answer: 0, why: '«Según» va directamente con la fuente, sin «que» ni «a».', en: 'According to the inspectors, the building needs urgent renovation.' },
            { prompt: 'El jefe ___ que el proyecto se había retrasado por su culpa.', options: ['pretendió', 'reconoció', 'negó'], answer: 1, why: 'Admite algo en su contra y el contenido va en indicativo: «reconoció».', en: 'The boss admitted the project had been delayed through his fault.' },
            { prompt: 'Titular: «Detenido el ___ autor del robo de la joyería».', options: ['llamado', 'presunto', 'supuestamente'], answer: 1, why: 'Registro jurídico y periodístico: «presunto» protege a quien no ha sido juzgado. «Supuestamente» es un adverbio y no acompaña al nombre.', en: 'Headline: “Alleged jewellery shop thief arrested”.' },
            { prompt: 'Te han contado que el gimnasio cierra en agosto. Lo transmites:', options: ['Aparentemente, el gimnasio cierra en agosto.', 'A juicio del gimnasio, cierra en agosto.', 'Al parecer, el gimnasio cierra en agosto.'], answer: 2, why: 'Información oída: «al parecer». «Aparentemente» habla de la apariencia; «a juicio de» introduce una opinión.', en: 'You’ve been told the gym closes in August.' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Otra situación, la misma regla. New situation, same rule.', blocks: [
          { kind: 'guide', text: { teacher: 'Una situación nueva: el correo interno de una empresa. Tu alumno reescribe cada frase y explica qué ha cambiado.', self: 'Ahora, en una empresa: reescribe cada frase según la instrucción. (A new setting: a company newsletter.)' } },
          { kind: 'rewrite', title: 'El boletín de la empresa · The company newsletter', items: [
            { prompt: 'La dirección dijo: «No vamos a cerrar la oficina de Valencia».', instruction: 'Resúmelo con «negar que» en presente: «La dirección niega que…».', accept: ['La dirección niega que vaya a cerrar la oficina de Valencia', 'La dirección niega que vayan a cerrar la oficina de Valencia'] },
            { prompt: 'Los nuevos horarios mejorarán la productividad.', instruction: 'Atribúyelo a «la consultora», sin tomar postura, empezando por «Según».', accept: ['Según la consultora, los nuevos horarios mejorarán la productividad'] },
            { prompt: 'La directora de Recursos Humanos dijo: «Es verdad, la encuesta llegó tarde».', instruction: 'Estilo indirecto con «admitir» en pretérito indefinido.', accept: ['La directora de Recursos Humanos admitió que la encuesta llegó tarde', 'La directora de Recursos Humanos admitió que la encuesta había llegado tarde'] },
          ] },
        ] },
        { title: 'Ampliación · Dizque, admitir que + subjuntivo, verbos negados', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Tres matices más. **Dizque**: en el habla coloquial de varios países americanos, como Colombia o México, significa ‘según dicen’, casi siempre con duda o ironía: «**Dizque** iban a arreglar la plaza este año»; ante un nombre, equivale a «supuesto»: «un **dizque** experto». **Admitir que** + subjuntivo no es ‘reconocer’, sino ‘tolerar, aceptar’: «No **admito** que me **hables** así». Y con un verbo de lengua **negado**, el subjuntivo es frecuente porque el contenido no se afirma: «El concejal **no aseguró** que la obra **terminara** en un año».', en: 'For strong students or spare time. “Dizque” is colloquial in several Latin American countries, such as Colombia or Mexico: “so they say”, usually with doubt or irony; before a noun it means “so-called”. “Admitir que + subjunctive” means “to tolerate”, not “to acknowledge”. And when a reporting verb is negated, the subjunctive is common, because the content is not asserted.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: '«La directora no admite que los empleados lleguen tarde». ¿Qué significa?', options: ['Que no lo tolera.', 'Que niega que lleguen tarde.', 'Que no reconoce un error propio.'], answer: 0, why: '«Admitir que» + subjuntivo = ‘tolerar, permitir’.', en: '“Admitir que” + subjunctive means “to tolerate”.' },
            { prompt: 'En un mensaje informal desde Bogotá: «Dizque ya arreglaron el ascensor». ¿Qué expresa?', options: ['Que lo ha comprobado.', 'Que lo deduce de una pista.', 'Que se lo han contado y no termina de creérselo.'], answer: 2, why: '«Dizque» es reportativo y coloquial: transmite lo oído, a menudo con escepticismo.', en: 'Colloquial “dizque”: what does the speaker express?' },
            { prompt: '«El portavoz no afirmó que el acuerdo estuviera cerrado». ¿Qué aporta aquí el subjuntivo?', options: ['Que el contenido queda sin afirmar: nadie lo garantiza.', 'Que el portavoz dio una orden.', 'Que el acuerdo se cerrará más adelante.'], answer: 0, why: 'Con el verbo de lengua negado, el contenido no se afirma, y por eso es frecuente el subjuntivo. No es una orden ni un futuro.', en: 'A negated reporting verb: what does the subjunctive convey?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca una noticia con «presunto» o con comillas de distancia y explica qué voz hay detrás de cada marca.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 194 · Citas indirectas y distanciamiento en textos', text: 'Ya sabes atribuir cada dato a su voz y elegir cuánto te comprometes con él. En la clase 194 llevas esto a textos completos: integrar citas directas e indirectas en un párrafo, alternar verbos introductores sin repetir «dijo» y mantener la distancia a lo largo de un artículo o un informe.', en: 'You can now attribute each claim to its voice and choose how far you commit to it. Class 194 takes this to whole texts: weaving direct and indirect quotations into a paragraph, varying reporting verbs instead of repeating “said”, and keeping your distance consistently through an article or report.', href: '/gramatica/citas-indirectas-y-distanciamiento-en-textos', label: 'Ir a la clase 194' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “El concejal reconoce que…”, “Según el concejal, …” y “El concejal pretende que…”?». Respuesta esperada: lo da por cierto; solo lo atribuye; se distancia y duda. Tarea: el boletín de Escribir con un conflicto real de su barrio o su trabajo.' },
        ] },
      ],
    },
  ],
};
