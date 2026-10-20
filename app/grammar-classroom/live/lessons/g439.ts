import type { LiveLesson } from '../types';

/**
 * Lesson 439 · B2 · Temporales con subjuntivo para futuro incierto (course unit G139).
 * Builds on G098 (lesson 398: cuando / en cuanto / hasta que / mientras + present
 * subjunctive for a future moment, antes de que always subjunctive, same subject →
 * infinitive), G128 (imperfect subjunctive forms) and G130 (sequence of tenses).
 * Here, at B2 depth: the uncertain future seen from the past with the imperfect
 * subjunctive (dijo que me avisaría cuando llegara; decidimos esperar hasta que se
 * fueran); tan pronto como, una vez que, apenas; cada vez que / siempre que (habit →
 * indicative, future → subjunctive; conditional siempre que → subjunctive); mientras
 * (simultaneity vs condition «as long as») and mientras que (contrast); antes de que
 * always subjunctive, also in the past (antes de que llegaras); nada más + infinitive,
 * al + infinitive, después de haber + participle; hasta que no + subjunctive
 * (expletive negation, accepted by the NGLE). Ampliación: después de que + imperfect
 * subjunctive for past facts (press), una vez + participle, the two meanings of apenas.
 * Scene: Inés Calvo, director of a small Madrid theatre company, prepares its first
 * tour of Mexico with the producer Rodrigo Paz (Mexico City); the set is held at
 * customs, the work permits are pending and the second venue has not signed.
 * Explorar: video call Inés–Rodrigo. Escuchar: Rodrigo's voice note (es-MX-JorgeNeural,
 * ustedes). Escribir: Inés's email to the actress Lola Vega.
 */
export const lesson: LiveLesson = {
  id: 439,
  level: 'B2',
  title: 'Temporales con subjuntivo para futuro incierto',
  subtitle: 'Hablar de lo que pasará, o iba a pasar, cuando ocurra algo incierto: «en cuanto llegara», «una vez que tengamos», «nada más llegar».',
  legend: [
    { tone: 'blue', label: 'DESDE AHORA · conector + presente de subjuntivo (futuro incierto; también mientras / siempre que de condición)' },
    { tone: 'orange', label: 'DESDE EL PASADO · conector + imperfecto de subjuntivo (futuro visto desde antes; antes de que en pasado)' },
    { tone: 'teal', label: 'HECHO O COSTUMBRE · conector + indicativo (ya pasó o pasa siempre)' },
    { tone: 'violet', label: 'SIN VERBO CONJUGADO · nada más / al / después de haber + infinitivo' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un futuro que todavía no es seguro', coach: '¿Ya pasó, pasa siempre o todavía no? Has it happened, does it always happen, or not yet?',
      steps: [
        { title: 'Una gira pendiente · A tour still up in the air', blocks: [
          { kind: 'lead', text: 'Inés Calvo dirige una pequeña compañía de teatro de Madrid. En septiembre empieza su primera gira por México: Guadalajara y, si se confirma, Ciudad de México. El productor, Rodrigo Paz, vive en la Ciudad de México. La escenografía viaja en barco y está retenida en la aduana, los permisos de trabajo no han llegado y el segundo teatro no ha firmado: todo depende de cosas que todavía no han pasado. En la clase 098 usaste «cuando llegue», «en cuanto sepa», «hasta que vuelvas». Hoy das el paso de B2: ese futuro incierto **visto desde el pasado** («me dijo que me avisaría **cuando llegara**»), nuevos conectores y las construcciones con **infinitivo**.', en: 'Inés Calvo runs a small theatre company in Madrid. In September it starts its first tour of Mexico. The set is held at customs, the work permits haven’t arrived and the second venue hasn’t signed: everything depends on things that haven’t happened yet. In class 098 you talked about a future moment from now; today you look at that uncertain future from a point in the past, add new connectors and use infinitive constructions.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno dice en cuál la llegada del barco ya es un hecho y en cuál todavía no lo es.', self: 'Lee las tres frases en voz alta. ¿En cuál la llegada del barco ya es un hecho? ¿En cuál todavía no lo es? (In which sentence is the arrival already a fact?)' } },
          { kind: 'compare', title: 'Tres veces «en cuanto» · Three times “en cuanto”', columns: [
            { tone: 'blue', label: 'FUTURO DESDE AHORA', sentence: 'Rodrigo: «Te aviso [[en cuanto llegue|blue]] el barco».', idea: 'Hoy el barco todavía no ha llegado: presente de subjuntivo.', en: 'Seen from today, the arrival is still pending, so the verb after the connector goes in the present subjunctive.' },
            { tone: 'orange', label: 'FUTURO DESDE EL PASADO', sentence: 'En marzo, Rodrigo me dijo que me avisaría [[en cuanto llegara|orange]] el barco.', idea: 'En marzo, la llegada era futura: imperfecto de subjuntivo.', en: 'When Rodrigo spoke in March, the arrival was still ahead of him: the same uncertain future, shifted into the past, takes the imperfect subjunctive.' },
            { tone: 'teal', label: 'HECHO', sentence: 'Rodrigo me avisó [[en cuanto llegó|teal]] el barco.', idea: 'Cuentas lo que pasó: indicativo.', en: 'You are reporting what actually happened, so the connector takes the indicative.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Rodrigo me dijo que me avisaría en cuanto llegara el barco.» Cuando Rodrigo lo dijo, ¿había llegado el barco?', options: ['Sí: ya estaba en Veracruz.', 'No se sabe: «llegara» es una condición.', 'No: la llegada era futura en ese momento.'], answer: 2, why: '«Llegara» (imperfecto de subjuntivo) marca un futuro visto desde el momento en que Rodrigo habló.', en: 'When Rodrigo said it, had the ship arrived?' },
            { prompt: '¿Qué frase cuenta un hecho real?', options: ['Rodrigo llamó a Inés tan pronto como supo la noticia.', 'Rodrigo llamará a Inés tan pronto como sepa la noticia.', 'Rodrigo dijo que llamaría a Inés tan pronto como supiera la noticia.'], answer: 0, why: '«Supo» (indefinido): la llamada ya ocurrió. Las otras dos hablan de algo que, en su momento, todavía no había pasado.', en: 'Which sentence reports a real event?' },
          ] },
        ] },
        { title: 'El futuro visto desde el pasado · The future seen from the past', mascot: '/brand/mascot/studying.webp', coach: 'Mira desde dónde se habla. Look at where the speaker stands.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CONECTOR + IMPERFECTO DE SUBJUNTIVO', question: '¿Cómo cuento hoy un plan o una promesa que se hizo en el pasado?', en: 'When you report a plan, promise or instruction made in the past, the time clause moves from the present to the imperfect subjunctive, just as the main verb moves from the future to the conditional.', formula: ['dijo / prometió / decidimos … + condicional o infinitivo', '+ cuando / en cuanto / hasta que / antes de que + IMPERFECTO DE SUBJUNTIVO'],
            meaning: 'Si el momento futuro se mira **desde un punto del pasado**, el conector lleva **imperfecto de subjuntivo**. Normalmente el verbo principal está en **condicional** (futuro del pasado) o es un verbo de plan, orden o promesa en pasado. Es la correlación de la clase 130 aplicada a las temporales.',
            examples: [
              { es: 'El agente de aduanas aseguró que liberarían la escenografía [[cuando pagáramos|orange]] los impuestos.', en: 'The customs agent said they would release the set once we paid the duties.' },
              { es: 'Lola nos pidió que no compráramos los billetes [[hasta que tuviéramos|orange]] los permisos.', en: 'Lola asked us not to buy the tickets until we had the permits.' },
              { es: 'Decidimos esperar en el teatro [[hasta que se fueran|orange]] los técnicos.', en: 'We decided to wait at the theatre until the technicians left (their leaving was still ahead).' },
              { es: 'Inés quería salir de Madrid [[antes de que empezaran|orange]] las vacaciones.', en: 'Inés wanted to leave Madrid before the holidays started.' },
            ],
            note: 'Compara: «Esperamos hasta que se **fueron**» cuenta el hecho, con indicativo. En narraciones también se encuentra «Esperamos hasta que se **fueran**», que presenta el final como algo previsto o buscado; para contar sin más lo que pasó, lo normal es el indicativo.' },
          { kind: 'table', title: 'Desde hoy y desde el pasado · From today and from the past', head: ['Conector', 'Desde hoy · presente de subjuntivo', 'Desde el pasado · imperfecto de subjuntivo'], rows: [
            ['cuando', 'Te llamaré **cuando aterrice**.', 'Me dijo que me llamaría **cuando aterrizara**.'],
            ['en cuanto', 'Montamos **en cuanto llegue** el camión.', 'Iban a montar **en cuanto llegara** el camión.'],
            ['hasta que', 'No anunciamos nada **hasta que firmen**.', 'Decidieron no anunciar nada **hasta que firmaran**.'],
            ['antes de que', 'Hay que salir **antes de que anochezca**.', 'Había que salir **antes de que anocheciera**.'],
          ], note: 'Las formas en -se también son correctas: aterrizase, llegase, firmasen, anocheciese. En la lengua oral, y sobre todo en América, domina la forma en -ra.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rodrigo prometió que mandaría los carteles en cuanto el teatro ___ la fecha.', options: ['confirmara', 'confirmó', 'confirme'], answer: 0, why: '«Mandaría» es un futuro visto desde «prometió»: la confirmación era futura en ese momento. En cuanto + imperfecto de subjuntivo.', en: 'Rodrigo promised he would send the posters as soon as the theatre confirmed the date.' },
            { prompt: 'Lola llegó al ensayo y esperó en la puerta hasta que Inés ___ con las llaves.', options: ['aparecería', 'apareció', 'aparezca'], answer: 1, why: 'Narras lo que pasó: Lola esperó e Inés apareció. Hasta que + indicativo. «Aparecería» (condicional) no va tras «hasta que».', en: 'Lola got to the rehearsal and waited at the door until Inés turned up with the keys.' },
            { prompt: 'El año pasado acordamos que no estrenaríamos la obra hasta que ___ listo el vestuario.', options: ['estuviera', 'estará', 'estaba'], answer: 0, why: 'Un acuerdo del pasado sobre un momento que entonces era futuro: hasta que + imperfecto de subjuntivo.', en: 'Last year we agreed we wouldn’t open the play until the costumes were ready.' },
          ] },
        ] },
        { title: 'Inmediatez y repetición · Straight after, and every time', mascot: '/brand/mascot/speaking.webp', coach: 'Nuevos conectores, la misma lógica. New connectors, same logic.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'TAN PRONTO COMO · UNA VEZ QUE · APENAS', question: '¿Qué conectores dicen «inmediatamente después»?', en: 'These connectors stress that one thing follows straight after another. They follow the same rule as cuando: subjunctive for a future moment, indicative for facts and habits.', formula: ['tan pronto como = en cuanto (un poco más formal)', 'una vez que = cuando ya esté hecho', 'apenas = en cuanto (muy frecuente en América)'],
            meaning: '**Tan pronto como** y **apenas** significan lo mismo que «en cuanto». **Una vez que** subraya que la primera acción tiene que estar **terminada**. Con un momento futuro van con **subjuntivo**; con hechos o costumbres, con **indicativo**.',
            examples: [
              { es: '[[Tan pronto como tengamos|blue]] los permisos, compramos los billetes.', en: 'As soon as we have the permits, we’ll buy the tickets.' },
              { es: '[[Una vez que esté|blue]] montado el decorado, ensayaremos con luces.', en: 'Once the set is up, we’ll rehearse with the lights.' },
              { es: '[[Apenas sepa|blue]] algo del segundo teatro, te escribo.', en: 'The moment I hear anything about the second venue, I’ll write to you.' },
              { es: '[[Apenas terminó|teal]] la función, el público se puso de pie.', en: 'As soon as the show ended, the audience stood up (a past fact: indicative).' },
            ] },
          { kind: 'table', title: 'Cada vez que, siempre que · Every time, whenever', head: ['Conector', 'Costumbre o hecho → indicativo', 'Futuro → subjuntivo'], rows: [
            ['cada vez que', '**Cada vez que viajamos**, algo se retrasa.', '**Cada vez que necesites** algo, llámame.'],
            ['siempre que (temporal)', '**Siempre que viene** a Madrid, nos trae dulces.', '**Siempre que vengas** a México, tienes casa aquí.'],
          ], note: 'Con indicativo cuentas lo que pasa o pasaba cada vez. Con subjuntivo hablas de veces futuras que todavía no conoces.' },
          { kind: 'tip', icon: '💡', title: 'Siempre que con otro sentido · Another meaning of siempre que', text: '«Siempre que» también puede expresar una **condición** (= con tal de que, «as long as»), y entonces lleva **siempre subjuntivo**: «Haremos la gira **siempre que** nos **den** los permisos». El contexto decide: si significa «cada vez que», es temporal; si significa «solo si», es condicional.', en: 'Siempre que can also set a condition, like “as long as” or “provided that”, and then it always takes the subjunctive. Ask yourself whether it means “every time” or “only if”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Una vez que la aduana ___ la escenografía, la mandaremos a Guadalajara.', options: ['libera', 'libere', 'liberará'], answer: 1, why: 'Momento futuro e incierto: una vez que + presente de subjuntivo. Después de estos conectores nunca va el futuro.', en: 'Once customs releases the set, we’ll send it to Guadalajara.' },
            { prompt: 'Cada vez que Lola ___ de gira, se lleva su propia almohada.', options: ['sale', 'salga', 'saldrá'], answer: 0, why: 'Es una costumbre: cada vez que + indicativo.', en: 'Every time Lola goes on tour, she takes her own pillow.' },
            { prompt: '«Te presto mi maleta grande siempre que me la devuelvas en octubre.» ¿Qué significa «siempre que» aquí?', options: ['Con la condición de que…', 'Cada vez que…', 'Mientras…'], answer: 0, why: 'No habla de varias veces, sino de una condición para prestar la maleta: siempre que = con tal de que.', en: 'What does siempre que mean here?' },
          ] },
        ] },
        { title: 'Mientras: tiempo o condición · Mientras: time or condition', mascot: '/brand/mascot/standing.webp', coach: '¿Durante o con tal de que? While, or as long as?', blocks: [
          { kind: 'compare', title: 'Tres usos de «mientras» · Three uses of mientras', columns: [
            { tone: 'teal', label: 'AL MISMO TIEMPO · HECHO', sentence: '[[Mientras Lola ensayaba|teal]], Rodrigo hablaba con la aduana.', idea: 'Dos acciones simultáneas y reales: indicativo.', en: 'Two things really happening at the same time take the indicative.' },
            { tone: 'blue', label: 'AL MISMO TIEMPO · FUTURO', sentence: '[[Mientras estemos|blue]] en Guadalajara, dormiremos en el mismo hotel.', idea: 'Un periodo futuro: subjuntivo.', en: 'A stretch of time that is still ahead takes the subjunctive.' },
            { tone: 'blue', label: 'CONDICIÓN', sentence: '[[Mientras no llueva|blue]], la función será al aire libre.', idea: 'Mientras = con tal de que, «as long as»: siempre subjuntivo.', en: 'Here mientras sets a condition (as long as / provided that), and it always takes the subjunctive.' },
          ] },
          { kind: 'tip', icon: '🔎', title: 'Mientras que · Whereas', text: 'Hoy **mientras que** se usa sobre todo para **contrastar** dos ideas, con indicativo: «Inés prefiere ensayar de noche, **mientras que** Lola rinde más por la mañana». Para expresar tiempo o condición, lo habitual es **mientras** sin «que».', en: 'In present-day Spanish mientras que mainly contrasts two facts (“whereas”) and takes the indicative. For time or condition, plain mientras is the usual choice.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Mientras no firmen el contrato, no anunciaremos las funciones.» ¿Qué expresa «mientras»?', options: ['Dos acciones reales simultáneas.', 'Un contraste entre dos personas.', 'Una condición: hasta que firmen, no hay anuncio.'], answer: 2, why: '«Mientras no» + subjuntivo = «as long as… not»: la firma es la condición para anunciar.', en: 'What does mientras express here?' },
            { prompt: 'Rodrigo trabaja con teatros grandes, ___ Inés prefiere salas pequeñas.', options: ['mientras', 'siempre que', 'mientras que'], answer: 2, why: 'Contraste entre dos hechos: «mientras que» + indicativo. «Siempre que» introduciría una condición o una repetición.', en: 'Rodrigo works with big theatres, whereas Inés prefers small venues.' },
          ] },
        ] },
        { title: 'Antes de que y el infinitivo · Antes de que and the infinitive', mascot: '/autoestudio/mascot/noting.webp', coach: 'Siempre subjuntivo, o ningún verbo conjugado. Always subjunctive, or no conjugated verb at all.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'ANTES DE QUE · SIEMPRE SUBJUNTIVO', question: '¿Y si lo que pasó después ya es un hecho?', en: 'Antes de que always takes the subjunctive, even when you narrate a real past event: in a past narrative it simply moves to the imperfect subjunctive.', formula: ['presente o futuro → antes de que + presente de subjuntivo', 'pasado → antes de que + imperfecto de subjuntivo'],
            meaning: 'Lo que sigue a **antes de que** todavía no había ocurrido en ese momento, por eso va **siempre en subjuntivo**, también cuando cuentas el pasado: «Salimos **antes de que llegaras**», nunca «antes de que llegaste».',
            examples: [
              { es: 'En Bogotá montamos el decorado [[antes de que abrieran|orange]] la sala.', en: 'In Bogotá we put the set up before they opened the venue.' },
              { es: 'Inés se fue del teatro [[antes de que terminara|orange]] la reunión.', en: 'Inés left the theatre before the meeting ended (it did end, but later).' },
            ] },
          { kind: 'table', title: 'Sin verbo conjugado: mismo sujeto · No conjugated verb: same subject', head: ['Construcción', 'Significado', 'Ejemplo'], rows: [
            ['[[nada más|violet]] + infinitivo', 'inmediatamente después (just after)', '**Nada más aterrizar**, Lola llamó a su madre.'],
            ['[[al|violet]] + infinitivo', 'en el momento de, cuando (on …ing)', '**Al entrar** en el teatro, Inés vio el decorado.'],
            ['[[después de haber|violet]] + participio', 'acción terminada antes de otra (having done)', '**Después de haber ensayado** seis horas, cenamos.'],
            ['[[antes de|violet]] + infinitivo', 'mismo sujeto (clase 098)', '**Antes de subir** al escenario, Lola respira hondo.'],
          ], note: 'Sirven para el pasado, el presente y el futuro: el tiempo lo da el otro verbo. «Nada más» + infinitivo es especialmente frecuente en España; en América se oye más «apenas» o «en cuanto» con verbo conjugado. «Al» + infinitivo puede llevar un sujeto propio detrás: «al salir el sol».' },
          { kind: 'tip', icon: '🔑', title: 'Hasta que no · A “no” that does not deny', text: 'En «No compramos los billetes **hasta que no** tengamos los permisos», el segundo «no» **no niega nada**: significa lo mismo que «hasta que tengamos». Es una negación expletiva, muy frecuente sobre todo cuando la oración principal es negativa, y la gramática académica la admite. En textos muy cuidados muchos prefieren la versión sin «no».', en: 'In “hasta que no tengamos”, the second no adds no negative meaning: it means exactly “until we have”. This expletive negation is very common, especially after a negative main clause, and the RAE grammar accepts it; very careful writing often leaves it out.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El técnico apagó las luces antes de que los actores ___ del escenario.', options: ['salieran', 'salieron', 'salgan'], answer: 0, why: 'Antes de que + subjuntivo siempre; en un relato pasado, imperfecto: salieran.', en: 'The technician turned off the lights before the actors left the stage.' },
            { prompt: '___ la carta del teatro, Inés sonrió.', options: ['Al leyó', 'Al que leyó', 'Al leer'], answer: 2, why: 'Al + infinitivo («en el momento de leer»). Después de «al» no va un verbo conjugado.', en: 'On reading the theatre’s letter, Inés smiled.' },
            { prompt: '«No salgo de aquí hasta que no me expliques qué ha pasado.» ¿Qué significa?', options: ['No saldré aunque me lo expliques.', 'Saldré cuando me lo expliques.', 'Saldré si no me lo explicas.'], answer: 1, why: 'El «no» de «hasta que no» es expletivo: no cambia el significado. Equivale a «hasta que me expliques».', en: 'What does this sentence mean?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Futuro, pasado o hecho? Future, past, or fact?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿el momento era futuro?, ¿es «antes de que»?, ¿hace falta infinitivo?', self: 'Lee cada frase y piensa qué falla: ¿el momento era futuro?, ¿es «antes de que»?, ¿hace falta infinitivo? Después toca para ver la corrección. (Decide what goes wrong before you look.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Rodrigo dijo que nos avisaría cuando llegó el barco.', right: 'Rodrigo dijo que nos avisaría cuando llegara el barco.', why: 'Cuando Rodrigo habló, la llegada era futura: imperfecto de subjuntivo. «Llegó» solo si cuentas el hecho: «Nos avisó cuando llegó».' },
            { wrong: 'Salimos del teatro antes de que empezó a llover.', right: 'Salimos del teatro antes de que empezara a llover.', why: '«Antes de que» lleva subjuntivo siempre, también en el pasado. (Always subjunctive, even in the past.)' },
            { wrong: 'Tan pronto como tendremos los permisos, compraremos los billetes.', right: 'Tan pronto como tengamos los permisos, compraremos los billetes.', why: 'Tras un conector temporal no va el futuro: presente de subjuntivo.' },
            { wrong: 'Cada vez que necesitarás algo, llámame.', right: 'Cada vez que necesites algo, llámame.', why: 'Veces futuras: cada vez que + subjuntivo, nunca futuro.' },
            { wrong: 'Al llegué al hotel, me di una ducha.', right: 'Al llegar al hotel, me di una ducha.', why: '«Al» va con infinitivo, no con un verbo conjugado.' },
            { wrong: 'Nada más que aterrizar, Lola se durmió.', right: 'Nada más aterrizar, Lola se durmió.', why: '«Nada más que» significa «solo». Para «inmediatamente después» se dice «nada más» + infinitivo.' },
            { wrong: 'Después de haber comer, seguimos ensayando.', right: 'Después de haber comido, seguimos ensayando.', why: 'Infinitivo compuesto: «haber» + participio (comido), como en el pretérito perfecto.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La directora del teatro nos aseguró que nos devolvería la fianza una vez que ___ la sala limpia.', options: ['dejáramos', 'dejamos', 'dejaremos'], answer: 0, why: 'Futuro visto desde «aseguró»: una vez que + imperfecto de subjuntivo.', en: 'The theatre manager assured us she’d return the deposit once we left the venue clean.' },
            { prompt: '___ el ensayo general, toda la compañía se fue a cenar.', options: ['Nada más terminar', 'Nada más que terminar', 'Nada más terminó'], answer: 0, why: '«Nada más» + infinitivo = inmediatamente después de terminar.', en: 'Straight after the dress rehearsal, the whole company went out for dinner.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta una promesa que alguien le hizo («Me dijo que… en cuanto…») y un plan propio que depende de algo incierto («Tan pronto como…»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La videollamada', coach: 'Toca cada forma marcada. Tap each marked form.',
      steps: [
        { title: 'Madrid–Ciudad de México · A video call', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Rodrigo y tu alumno es Inés. Después tu alumno toca cada forma marcada y dice si mira desde ahora, desde el pasado o cuenta un hecho.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada y decide: ¿desde ahora, desde el pasado o un hecho? (From now, from the past, or a fact?)' } },
          { kind: 'explore', title: 'Todo pendiente', setting: 'Un martes de agosto. Inés, en Madrid, y Rodrigo, en la Ciudad de México, repasan por videollamada lo que falta para la gira. Se tratan de tú. (Inés and Rodrigo go over what is still pending for the tour.)', lines: [
            { who: 'Inés', text: 'Rodrigo, ¿alguna novedad del barco? En marzo me dijiste que me avisarías [[en cuanto llegara|orange]] a Veracruz.', en: 'Rodrigo, any news about the ship? In March you told me you’d let me know as soon as it reached Veracruz.' },
            { who: 'Rodrigo', text: 'Llegó el lunes, pero sigue en la aduana. [[Tan pronto como la liberen|blue]], la mandamos en camión a Guadalajara.', en: 'It got in on Monday, but it’s still at customs. As soon as they release it, we’ll send it to Guadalajara by truck.' },
            { who: 'Inés', text: '¿Y llegará a tiempo? Acuérdate de Bogotá: el productor nos juró que todo estaría montado [[antes de que llegáramos|orange]], y lo montamos nosotros a las tres de la mañana.', en: 'And will it get there in time? Remember Bogotá: the producer swore everything would be set up before we arrived, and we ended up building it ourselves at three in the morning.' },
            { who: 'Rodrigo', text: 'Esta vez no. [[Una vez que esté|blue]] en el teatro, mi equipo la monta en dos días, [[mientras ustedes ensayen|blue]] en la sala pequeña.', en: 'Not this time. Once it’s in the theatre, my crew will put it up in two days while you rehearse in the small room.' },
            { who: 'Inés', text: 'Perfecto. ¿Y los permisos de trabajo? No quiero comprar los billetes [[hasta que no los tengamos|blue]].', en: 'Great. And the work permits? I don’t want to buy the tickets until we have them.' },
            { who: 'Rodrigo', text: 'Lógico. Me dijeron que me los darían [[cuando estuviera|orange]] completa la documentación, y ya lo está. [[Apenas me los manden|blue]], te reenvío el correo.', en: 'Makes sense. They told me they’d issue them when the paperwork was complete, and it is now. The moment they send them, I’ll forward you the email.' },
            { who: 'Inés', text: 'Genial. Otra cosa: Lola me pregunta lo mismo [[cada vez que hablamos|teal]]: ¿tendremos tiempo de descansar?', en: 'Great. Another thing: Lola asks me the same thing every time we talk: will we have time to rest?' },
            { who: 'Rodrigo', text: 'Claro. [[Nada más aterrizar|violet]], los llevamos al hotel y tienen la tarde libre. Y [[siempre que quieran|blue]] salir a cenar, me avisan y los acompaño.', en: 'Of course. Straight after landing, we’ll take you to the hotel and you’ll have the afternoon off. And whenever you want to go out for dinner, let me know and I’ll come with you.' },
            { who: 'Inés', text: 'Qué lujo. ¿Y el teatro de la Ciudad de México?', en: 'What luxury. And the theatre in Mexico City?' },
            { who: 'Rodrigo', text: 'Ahí vamos más lentos. [[Mientras no confirmen|blue]] la fecha, no puedo anunciar nada.', en: 'That’s moving more slowly. Until they confirm the date, I can’t announce anything.' },
            { who: 'Inés', text: 'Bueno. [[Después de haber vivido|violet]] lo de Bogotá, prefiero ir con calma. Eso sí, yo, [[al llegar|violet]] a Guadalajara, quiero ver el teatro antes que el hotel.', en: 'Fine. After what we went through in Bogotá, I’d rather take it slowly. But I want to see the theatre before the hotel when I get to Guadalajara.' },
            { who: 'Rodrigo', text: 'Me lo imaginaba. Te llamo [[en cuanto sepa|blue]] algo del segundo teatro.', en: 'I thought you’d say that. I’ll call you as soon as I hear anything about the second venue.' },
          ], notes: {
            'en cuanto llegara': '«Me dijiste que me avisarías…»: en marzo, la llegada era futura. Futuro visto desde el pasado → imperfecto de subjuntivo.',
            'Tan pronto como la liberen': 'Hoy la liberación es todavía incierta: tan pronto como (= en cuanto) + presente de subjuntivo.',
            'antes de que llegáramos': '«Antes de que» va siempre con subjuntivo; en un relato pasado, imperfecto. La llegada fue real, pero posterior al momento de la promesa.',
            'Una vez que esté': '«Una vez que» subraya que la escenografía tiene que estar ya en el teatro. Futuro → presente de subjuntivo.',
            'mientras ustedes ensayen': 'Simultaneidad en el futuro: mientras + presente de subjuntivo. Rodrigo, mexicano, usa «ustedes» para el plural.',
            'hasta que no los tengamos': 'Negación expletiva: «hasta que no los tengamos» = «hasta que los tengamos». Es frecuente tras una principal negativa («No quiero…»).',
            'cuando estuviera': '«Me dijeron que me los darían…»: un futuro visto desde el pasado → imperfecto de subjuntivo.',
            'Apenas me los manden': '«Apenas» = en cuanto. Momento futuro → presente de subjuntivo. Es muy frecuente en el español de México.',
            'cada vez que hablamos': 'Una costumbre real (Lola siempre pregunta): cada vez que + indicativo.',
            'Nada más aterrizar': '«Nada más» + infinitivo = inmediatamente después de aterrizar. El tiempo (futuro) lo da «los llevamos».',
            'siempre que quieran': '«Siempre que» temporal = cada vez que. Veces futuras → presente de subjuntivo.',
            'Mientras no confirmen': '«Mientras no» + subjuntivo expresa una condición: mientras no haya fecha, no hay anuncio («as long as… not»).',
            'Después de haber vivido': 'Infinitivo compuesto: «haber» + participio. Presenta lo de Bogotá como algo terminado antes de la decisión de Inés.',
            'al llegar': '«Al» + infinitivo = en el momento de llegar. Mismo sujeto: Inés llega e Inés quiere ver el teatro.',
            'en cuanto sepa': 'Momento futuro desde ahora: en cuanto + presente de subjuntivo (saber → sepa), como en la clase 098.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué le había prometido Rodrigo a Inés en marzo?', options: ['Comprar los billetes de avión.', 'Avisarla en cuanto el barco llegara a Veracruz.', 'Montar el decorado antes de que llegaran.'], answer: 1, why: '«En marzo me dijiste que me avisarías en cuanto llegara a Veracruz».', en: 'What had Rodrigo promised Inés in March?' },
            { prompt: '¿Qué pasó en la gira de Bogotá?', options: ['El teatro canceló las funciones.', 'El productor prometió tenerlo todo montado y no lo cumplió.', 'La escenografía se quedó en la aduana.'], answer: 1, why: '«Nos juró que todo estaría montado antes de que llegáramos, y lo montamos nosotros».', en: 'What happened on the Bogotá tour?' },
            { prompt: '¿Cuándo comprará Inés los billetes?', options: ['Cuando tengan los permisos de trabajo.', 'Cuando el barco salga de la aduana.', 'Cuando el segundo teatro confirme la fecha.'], answer: 0, why: '«No quiero comprar los billetes hasta que no los tengamos» (los permisos).', en: 'When will Inés buy the tickets?' },
          ] },
        ] },
        { title: 'Inés llama a Lola · Inés calls Lola', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Después de la videollamada · After the video call', lines: [
            { who: 'Inés', text: 'Lola, hablé con Rodrigo. En marzo me dijo que me avisaría en cuanto el barco ___ a Veracruz, y ha cumplido.', options: ['llegara', 'llegue', 'llegó'], answer: 0, why: 'Futuro visto desde «me dijo»: en cuanto + imperfecto de subjuntivo, aunque después se cumpliera.' },
            { who: 'Lola', text: '¿Y los billetes? Yo no compro nada hasta que no ___ los permisos.', options: ['tengamos', 'tendremos', 'tenemos'], answer: 0, why: 'Hasta que (no) + momento futuro → presente de subjuntivo. El «no» es expletivo.' },
            { who: 'Inés', text: 'Eso le dije. Rodrigo me los reenvía apenas se los ___.', options: ['mandan', 'mandaran', 'manden'], answer: 2, why: '«Apenas» = en cuanto; momento futuro desde hoy → presente de subjuntivo.' },
            { who: 'Lola', text: 'Perfecto. Y nada más ___, me voy a dormir: ya me conoces.', options: ['que aterrizo', 'aterrizar', 'aterrice'], answer: 1, why: '«Nada más» va con infinitivo: nada más aterrizar.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué te prometió alguien que haría en cuanto pudiera? ¿Lo cumplió?». Tu alumno responde con un imperfecto de subjuntivo y, después, con un indicativo para el hecho.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Desde ahora, desde el pasado o un hecho. From now, from the past, or a fact.',
      steps: [
        { title: 'Correos y recuerdos · Emails and memories', blocks: [
          { kind: 'choice', items: [
            { context: 'Inés recuerda la gira de Bogotá. (Inés remembers the Bogotá tour.)', prompt: 'El productor nos aseguró que el decorado estaría montado antes de que ___.', options: ['llegáramos', 'lleguemos', 'llegábamos'], answer: 0, why: 'Antes de que + subjuntivo siempre; el marco es pasado («aseguró»): imperfecto, llegáramos.', en: 'The producer assured us the set would be up before we arrived.' },
            { context: 'Correo de Rodrigo a Inés. (Rodrigo’s email to Inés.)', prompt: 'Tan pronto como ___ los permisos, te los reenvío.', options: ['reciba', 'recibiré', 'recibo'], answer: 0, why: 'Un momento futuro desde hoy: tan pronto como + presente de subjuntivo. Nunca el futuro tras el conector.', en: 'As soon as I get the permits, I’ll forward them to you.' },
            { context: 'Lola habla de sus costumbres. (Lola talks about her habits.)', prompt: 'Cada vez que la compañía ___ de gira, me llevo mi propia almohada.', options: ['sale', 'saliera', 'salga'], answer: 0, why: 'Es una costumbre real: cada vez que + indicativo.', en: 'Every time the company goes on tour, I take my own pillow.' },
            { context: 'Inés cuenta la llamada de ayer. (Inés reports yesterday’s call.)', prompt: 'Rodrigo dijo que mandaría el camión una vez que la aduana ___ la escenografía.', options: ['liberara', 'liberaría', 'liberó'], answer: 0, why: '«Mandaría» es un futuro visto desde «dijo»: una vez que + imperfecto de subjuntivo. El condicional no va tras el conector.', en: 'Rodrigo said he’d send the truck once customs released the set.' },
            { context: 'Lola escribe en su diario. (Lola writes in her diary.)', prompt: '___ al aeropuerto de Guadalajara, encendí el teléfono y vi diez mensajes de Inés.', options: ['Nada más llegar', 'Nada más que llegar', 'Nada más de llegar'], answer: 0, why: '«Nada más» + infinitivo = inmediatamente después de llegar. «Nada más que» significa «solo».', en: 'The moment I landed at Guadalajara airport, I switched on my phone and saw ten messages from Inés.' },
          ] },
        ] },
        { title: '¿Qué modo pide? · Which mood?', blocks: [
          { kind: 'classify', title: 'Desde dónde se mira · Where the speaker stands', categories: [
            { id: 'ind', label: 'INDICATIVO (hecho o costumbre)', tone: 'teal' },
            { id: 'pres', label: 'PRESENTE DE SUBJUNTIVO (futuro desde ahora)', tone: 'blue' },
            { id: 'imp', label: 'IMPERFECTO DE SUBJUNTIVO (futuro desde el pasado)', tone: 'orange' },
          ], items: [
            { text: 'Lola siempre se pone nerviosa cuando… (subir al escenario)', answer: 'ind', why: '«Siempre»: una costumbre → cuando sube.' },
            { text: 'Te prometo que ensayaremos hasta que la escena… (salir perfecta)', answer: 'pres', why: 'Futuro desde ahora («ensayaremos») → hasta que salga.' },
            { text: 'Rodrigo nos aseguró que, en cuanto… (abrir la taquilla), se venderían todas las entradas.', answer: 'imp', why: 'Futuro visto desde «aseguró» → en cuanto abrieran.' },
            { text: 'Anoche, apenas… (terminar el ensayo), todos se fueron a cenar.', answer: 'ind', why: '«Anoche»: un hecho → apenas terminó.' },
            { text: 'Inés quería salir de Madrid antes de que… (empezar las vacaciones)', answer: 'imp', why: 'Antes de que + subjuntivo; marco pasado → antes de que empezaran.' },
            { text: 'Lola no comprará el billete hasta que Inés le… (confirmar la fecha)', answer: 'pres', why: 'Futuro desde ahora («no comprará») → hasta que le confirme.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El técnico dijo que llamaría cuando terminó la revisión de las luces.', ok: false, options: ['El técnico dijo que llamaría cuando termine la revisión de las luces.', 'El técnico dijo que llamaría cuando terminara la revisión de las luces.', 'El técnico dijo que llamaría cuando terminaría la revisión de las luces.'], answer: 1, why: 'Cuando el técnico habló, la revisión era futura: cuando + imperfecto de subjuntivo.' },
            { sentence: 'No anunciaremos las funciones hasta que no firmen el contrato.', ok: true, why: 'Correcta: «hasta que no» con negación expletiva, tras una principal negativa. Significa «hasta que firmen».' },
            { sentence: 'Antes de que salió el avión, Inés ya había mandado los horarios.', ok: false, options: ['Antes de que saldría el avión, Inés ya había mandado los horarios.', 'Antes de que salía el avión, Inés ya había mandado los horarios.', 'Antes de que saliera el avión, Inés ya había mandado los horarios.'], answer: 2, why: '«Antes de que» lleva siempre subjuntivo; en el pasado, imperfecto: saliera.' },
            { sentence: 'Una vez que lleguemos al hotel, dejaremos las maletas y saldremos a cenar.', ok: true, why: 'Correcta: futuro desde ahora → una vez que + presente de subjuntivo.' },
            { sentence: 'Siempre que Rodrigo viajará a Madrid, nos trae dulces de Puebla.', ok: false, options: ['Siempre que Rodrigo viaje a Madrid, nos trae dulces de Puebla.', 'Siempre que Rodrigo viaja a Madrid, nos trae dulces de Puebla.', 'Siempre que Rodrigo viajara a Madrid, nos trae dulces de Puebla.'], answer: 1, why: '«Nos trae» describe una costumbre: siempre que (= cada vez que) + indicativo. Nunca el futuro tras el conector.' },
            { sentence: 'Después de haber ensayado toda la tarde, la compañía cenó en el teatro.', ok: true, why: 'Correcta: «después de haber» + participio, con el mismo sujeto (la compañía ensaya y cena).' },
          ] },
        ] },
        { title: 'Chat con Lola · Chatting with Lola', blocks: [
          { kind: 'chat-fill', title: 'Mensajes del jueves · Thursday messages', lines: [
            { who: 'Lola', text: 'Inés, ¿ya tienes los billetes?' },
            { who: 'Inés', text: 'Todavía no. Rodrigo me prometió que me mandaría los permisos en cuanto los ___.', options: ['recibiría', 'recibiera', 'reciba'], answer: 1, why: 'Futuro visto desde «prometió»: en cuanto + imperfecto de subjuntivo. El condicional no va tras «en cuanto».' },
            { who: 'Lola', text: 'Vale, pero avísame tan pronto como los ___, que quiero elegir asiento.', options: ['compras', 'compres', 'comprarás'], answer: 1, why: 'Momento futuro desde hoy: tan pronto como + presente de subjuntivo.' },
            { who: 'Inés', text: 'Claro. Y ___ al hotel, duerme un poco: el primer ensayo es al día siguiente.', options: ['al que llegues', 'al llegar', 'al llegues'], answer: 1, why: '«Al» + infinitivo = en el momento de llegar. No admite un verbo conjugado.' },
            { who: 'Lola', text: 'Lo intentaré. En la última gira, cada vez que ___ dormir, sonaba el teléfono.', options: ['intente', 'intentaba', 'intentara'], answer: 1, why: 'Una costumbre del pasado: cada vez que + indicativo (imperfecto).' },
            { who: 'Inés', text: 'Esta vez yo atiendo a Rodrigo hasta que ___ la primera función. Tú, a descansar.', options: ['pasará', 'pase', 'pasa'], answer: 1, why: 'Futuro desde ahora: hasta que + presente de subjuntivo.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Dijo', 'que', 'nos', 'avisaría', 'en', 'cuanto', 'llegara', 'el', 'barco'], accept: ['Dijo que nos avisaría en cuanto llegara el barco', 'Dijo que nos avisaría en cuanto el barco llegara', 'Dijo que en cuanto llegara el barco nos avisaría', 'Dijo que en cuanto el barco llegara nos avisaría'], en: 'He said he would let us know as soon as the ship arrived.' },
            { tiles: ['Nada', 'más', 'aterrizar,', 'Lola', 'llamó', 'a', 'su', 'madre'], accept: ['Nada más aterrizar, Lola llamó a su madre'], en: 'As soon as she landed, Lola called her mother.' },
            { tiles: ['Una', 'vez', 'que', 'tengamos', 'los', 'permisos,', 'compraremos', 'los', 'billetes'], accept: ['Una vez que tengamos los permisos, compraremos los billetes'], en: 'Once we have the permits, we’ll buy the tickets.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Cambia el punto de vista o la construcción · Change the viewpoint or the structure', items: [
            { prompt: 'Rodrigo, en marzo: «Te avisaré en cuanto llegue el barco».', instruction: 'Cuéntalo hoy, como Inés. Empieza: «En marzo, Rodrigo me dijo que…».', accept: ['En marzo Rodrigo me dijo que me avisaría en cuanto llegara el barco', 'En marzo Rodrigo me dijo que me avisaría en cuanto llegase el barco', 'En marzo Rodrigo me dijo que me avisaría en cuanto el barco llegara', 'En marzo Rodrigo me dijo que me avisaría en cuanto el barco llegase'] },
            { prompt: 'Lola: «Termino de cenar y enseguida llamo a mi hermana».', instruction: 'Une las dos acciones con «nada más» + infinitivo. Empieza: «Nada más…».', accept: ['Nada más terminar de cenar llamo a mi hermana', 'Nada más cenar llamo a mi hermana'] },
            { prompt: 'Inés: «Primero ensayamos el final. Después elegimos el vestuario».', instruction: 'Usa «después de» + infinitivo compuesto. Empieza: «Después de haber…».', accept: ['Después de haber ensayado el final elegimos el vestuario', 'Después de haber ensayado el final elegiremos el vestuario'] },
            { prompt: 'Rodrigo se fue del teatro. Un poco más tarde llegó Inés.', instruction: 'Únelo con «antes de que». Empieza: «Rodrigo se fue del teatro…».', accept: ['Rodrigo se fue del teatro antes de que llegara Inés', 'Rodrigo se fue del teatro antes de que llegase Inés', 'Rodrigo se fue del teatro antes de que Inés llegara', 'Rodrigo se fue del teatro antes de que Inés llegase'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta una promesa que le hicieron y no se cumplió («Me dijeron que… en cuanto…, pero…») y un plan que tiene ahora («Una vez que…»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una nota de voz de Rodrigo', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Por fin hay noticias · News at last', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada conector temporal y el verbo que lo sigue, y dice si mira desde ahora, desde el pasado o cuenta un hecho. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada conector temporal y el verbo que lo sigue. Rodrigo es mexicano: usa «ustedes» para el plural. (Listen once for the gist and once for the details.)' } },
          { kind: 'listen', title: 'Una nota de voz de Rodrigo', channel: 'NOTA DE VOZ · DE RODRIGO PARA INÉS', src: '/audio/grammar-live/439.mp3',
            before: 'Es viernes. Rodrigo le manda a Inés una nota de voz desde la Ciudad de México. ¿Qué noticias crees que trae: la escenografía, los permisos, el segundo teatro…? (What news do you think Rodrigo brings?)',
            gist: { prompt: '¿Para qué manda Rodrigo la nota de voz? · Why does Rodrigo send the voice note?', options: ['Para cancelar la gira porque la aduana no libera la escenografía.', 'Para pedirle a Inés que adelante el viaje una semana.', 'Para dar novedades de la escenografía, los permisos y el segundo teatro, y pedir los horarios de los vuelos.'], answer: 2, why: 'Cuenta que la escenografía ya va en camino, que los permisos están listos y que el segundo teatro aún no ha firmado; al final pide los horarios.', en: 'He gives an update on the set, the permits and the second venue, and asks for the flight times.' },
            details: [
              { prompt: '¿Qué había dicho el agente de aduanas?', options: ['Que necesitaban otra vez los permisos.', 'Que liberarían la escenografía en cuanto pagaran los impuestos.', 'Que la escenografía no saldría antes de septiembre.'], answer: 1, why: '«Me había dicho que liberarían la escenografía en cuanto pagáramos los impuestos».', en: 'What had the customs agent said?' },
              { prompt: '¿Qué hará Rodrigo apenas cuelgue?', options: ['Llamar al segundo teatro.', 'Ir a recoger el camión.', 'Reenviarle a Inés los permisos de trabajo.'], answer: 2, why: '«Los permisos de trabajo también están listos; te los reenvío apenas cuelgue».', en: 'What will Rodrigo do the moment he hangs up?' },
              { prompt: '¿Por qué no anuncia todavía las funciones de la Ciudad de México?', options: ['Porque el teatro no ha firmado el contrato.', 'Porque no hay entradas a la venta.', 'Porque Inés no ha confirmado la fecha.'], answer: 0, why: '«Mientras no firmen el contrato, prefiero no anunciar las funciones».', en: 'Why isn’t he announcing the Mexico City shows yet?' },
              { prompt: '¿Qué quiere hacer Rodrigo por Lola?', options: ['Encargarse de sus maletas al llegar.', 'Buscarle otro hotel.', 'Cambiarle el vuelo.'], answer: 0, why: '«Dile a Lola que, nada más aterrizar, se olvide de las maletas, que de eso me encargo yo».', en: 'What does Rodrigo want to do for Lola?' },
              { prompt: '¿Qué tiene que mandarle Inés a Rodrigo?', options: ['El contrato del segundo teatro.', 'El dinero de los impuestos.', 'Los horarios de los vuelos, una vez que tengan los billetes.'], answer: 2, why: '«Una vez que tengan los billetes, mándame los horarios de los vuelos».', en: 'What does Inés have to send Rodrigo?' },
            ],
            transcript: 'Inés, ¿qué tal? Soy Rodrigo. Te mando esta nota de voz porque por fin hay noticias. El agente de aduanas me había dicho que liberarían la escenografía [[en cuanto pagáramos|orange]] los impuestos, y así fue: pagamos ayer y esta mañana ya iba en el camión. [[Tan pronto como llegue|blue]] a Guadalajara, mi equipo empieza a montar. Los permisos de trabajo también están listos; te los reenvío [[apenas cuelgue|blue]]. Lo del segundo teatro va más lento. [[Mientras no firmen|blue]] el contrato, prefiero no anunciar las funciones, pero me prometieron que lo firmarían [[antes de que acabara|orange]] el mes. Ah, y dile a Lola que, [[nada más aterrizar|violet]], se olvide de las maletas, que de eso me encargo yo. [[Cada vez que viene|teal]] a México, quiere cargar ella sola con todo. Bueno, [[una vez que tengan|blue]] los billetes, mándame los horarios de los vuelos y organizo los traslados. Y tranquila: esta vez no vamos a esperar a que algo salga mal para reaccionar. Un abrazo.',
            reply: { teacher: 'Tú eres Rodrigo. Tu alumno es Inés y le contesta con otra nota de voz: reacciona a las noticias, dice qué hará en cuanto tenga los billetes y recuerda una promesa de Bogotá con «nos dijeron que… antes de que…».', self: 'Contesta como Inés con una nota de voz, en voz alta: reacciona a las noticias, di qué harás en cuanto tengas los billetes y recuerda una promesa de Bogotá con «nos dijeron que… antes de que…». (Reply to Rodrigo as Inés.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Planes inciertos y promesas', coach: 'Habla de lo que todavía no sabes. Talk about what you don’t know yet.',
      steps: [
        { title: 'Lo que depende de otra cosa · What depends on something else', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno habla de experiencias y planes reales. Si el modo no encaja con el momento, tú repites la frase con la forma correcta y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta con ejemplos reales. Antes de cada conector, piensa: ¿desde ahora, desde el pasado o un hecho? (Answer aloud with real examples.)' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en un plan tuyo que depende de algo que todavía no sabes: un trabajo, un viaje, una mudanza. ¿Qué harás en cuanto se resuelva? · A plan of yours that depends on something you don’t know yet.', followUps: ['¿Y qué no harás hasta que lo sepas?', '¿Qué harás mientras esperas? (What will you do while you wait?)'], phrases: ['[[Tan pronto como me confirmen|blue]]…', '[[Una vez que tenga|blue]]…', 'No pienso… [[hasta que no sepa|blue]]…'], hint: 'Futuro desde ahora: conector + presente de subjuntivo; nunca el futuro tras el conector.', example: 'Estoy esperando la respuesta de una empresa de Valencia. Tan pronto como me confirmen el puesto, buscaré piso allí. No pienso decir nada en mi trabajo hasta que no tenga el contrato firmado.', next: 'Ahora, una promesa del pasado.' },
            { q: 'Cuenta una promesa que alguien te hizo: un casero, un jefe, una empresa. ¿Qué te dijeron que harían y cuándo? ¿Lo cumplieron? · A promise someone made you: did they keep it?', followUps: ['¿Cómo reaccionaste?', '¿Volverías a confiar en esa persona?'], phrases: ['Me dijo que me llamaría [[en cuanto supiera|orange]]…', 'Me prometieron que lo arreglarían [[antes de que llegara|orange]]…', 'Al final me llamó [[cuando ya no hacía falta|teal]].'], hint: 'La promesa mira al futuro desde el pasado: imperfecto de subjuntivo. Lo que pasó de verdad: indicativo.', example: 'Mi casero me prometió que arreglaría la calefacción antes de que llegara el invierno. Me dijo que me llamaría en cuanto tuviera la pieza, pero me llamó en febrero, cuando ya no hacía falta.', next: 'Ahora, tus costumbres.' },
            { q: '¿Qué haces siempre que viajas o cada vez que vuelves a casa después de un viaje? · What do you always do when you travel or get back home?', followUps: ['¿Y qué te gustaría que hicieran por ti cada vez que llegas cansado?', '¿Qué hacías de niño cada vez que viajaba tu familia?'], phrases: ['[[Cada vez que viajo|teal]]…', '[[Nada más llegar|violet]] a casa…', '[[Al abrir|violet]] la maleta…'], hint: 'Costumbres: cada vez que / siempre que + indicativo. «Nada más» y «al» van con infinitivo.', example: 'Cada vez que viajo, llevo un libro que no termino nunca. Nada más llegar a casa, pongo una lavadora, y al abrir la maleta siempre encuentro algo que no he usado.' },
            { q: 'Eres Rodrigo. Lola te pregunta por su llegada a Guadalajara. Explícale con claridad qué tiene que hacer ese día. · You are Rodrigo: give Lola clear instructions for her arrival.', followUps: ['¿Y si el vuelo llega de madrugada?', '¿Qué tiene que hacer antes de que empiece el primer ensayo?'], phrases: ['[[Nada más aterrizar|violet]]…', '[[En cuanto salgas|blue]] de la aduana…', '…[[antes de que empiece|blue]] el ensayo.'], hint: 'Futuro desde ahora + imperativo o presente; «antes de que», siempre subjuntivo.', example: 'Nada más aterrizar, escríbeme. En cuanto salgas de la aduana, vas a ver a un chico con un cartel de la compañía. Descansa en el hotel y, antes de que empiece el ensayo, pasa por el teatro para probarte el vestuario.', teacher: 'Tú haces de Lola y pones dificultades («¿Y si pierdo la maleta?»). Tu alumno responde con «en cuanto», «una vez que» o «mientras».' },
            { q: '¿Con qué condiciones aceptarías trabajar seis meses en otro país? · On what conditions would you work abroad for six months?', followUps: ['¿Qué no harías mientras estuvieras allí?', '¿Qué pedirías antes de firmar?'], phrases: ['Lo aceptaría [[siempre que pudiera|orange]]…', '[[Mientras no tenga|blue]]… no…', 'No firmaría nada [[hasta que no supiera|orange]]…'], hint: 'Condición: siempre que / mientras + subjuntivo. Con un condicional («aceptaría»), imperfecto de subjuntivo.', example: 'Lo aceptaría siempre que pudiera volver a casa una vez al mes. No firmaría nada hasta que no supiera cuánto cuesta vivir allí. Y mientras no tenga a alguien que cuide a mi perro, no puedo irme.', teacher: 'Si tu alumno dice «siempre que puedo» con sentido de condición, tú preguntas: «¿cada vez, o solo si…?».' },
            { q: 'Cuenta un día de viaje que salió mal o muy bien: qué hiciste al llegar, qué pasó antes de que pudieras reaccionar… · Tell the story of a travel day that went very wrong or very well.', followUps: ['¿Qué te habían dicho que pasaría?', '¿Qué hiciste después de haberlo resuelto?'], phrases: ['[[Al llegar|violet]] al aeropuerto…', '[[Antes de que pudiera|orange]] reaccionar…', '[[Después de haber esperado|violet]] tres horas…'], hint: 'Relato pasado: antes de que + imperfecto de subjuntivo; al / nada más / después de haber + infinitivo.', example: 'Al llegar al aeropuerto vi que habían cancelado el vuelo. Antes de que pudiera preguntar nada, la cola ya llegaba a la puerta. Después de haber esperado tres horas, me dieron una plaza para el día siguiente.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno hace las preguntas y tú respondes con algún error a propósito («Me dijo que me llamaría cuando llegó»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas con otra experiencia distinta. (Now ask the questions aloud and answer with a different experience.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo con todo pendiente', coach: 'Ordena lo que depende de qué. Sort out what depends on what.',
      steps: [
        { title: 'Para Lola · For Lola', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada conector temporal: ¿mira desde ahora, desde el pasado o cuenta un hecho? Después tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después repasa cada conector temporal: ¿desde ahora, desde el pasado o un hecho? (Check every time connector.)' } },
          { kind: 'write', title: 'Lo que sabemos y lo que no · What we know and what we don’t', situation: 'Eres Inés (o eres tú, organizando un viaje o un proyecto con alguien). Lola no pudo estar en la videollamada y le escribes un correo: le cuentas qué se prometió antes, qué depende todavía de otras cosas y qué tiene que hacer ella al llegar. (You are Inés, or yourself organising a trip or project. Write to someone who missed the meeting: what was promised, what is still pending and what they must do on arrival.)', task: [
            'Cuenta una o dos cosas que alguien prometió o decidió antes, con un futuro visto desde el pasado: me dijo que… en cuanto…, decidimos… hasta que… (imperfecto de subjuntivo).',
            'Explica dos cosas que todavía dependen de algo incierto: tan pronto como…, una vez que…, hasta que no…, mientras no… (presente de subjuntivo).',
            'Da instrucciones para la llegada con «nada más» o «al» + infinitivo, y con «antes de que».',
            'Recuerda una costumbre o un hecho real con indicativo: cada vez que…, apenas… (Add a real habit or fact.)',
            'Cierra con un plan de contacto: te escribo en cuanto…, te llamo apenas… (Close with how you’ll keep in touch.)',
          ], starters: ['Querida Lola:', 'Te cuento lo que hablamos ayer.', 'En marzo, Rodrigo me dijo que…', 'Tan pronto como…', 'Una vez que…', 'No compraremos nada hasta que no…', 'Nada más aterrizar…', 'Antes de que…', 'Te escribo en cuanto…'],
            words: ['en cuanto', 'tan pronto como', 'una vez que', 'apenas', 'hasta que', 'mientras no', 'antes de que', 'cada vez que', 'nada más', 'al llegar', 'después de haber'],
            model: 'Querida Lola: Te cuento lo que hablamos ayer Rodrigo y yo. En marzo me dijo que me avisaría [[en cuanto llegara|orange]] el barco, y ha cumplido: la escenografía está en Veracruz, aunque todavía en la aduana. [[Tan pronto como la liberen|blue]], irá en camión a Guadalajara. Lo de los billetes va más despacio: los permisos de trabajo están casi listos, pero no compraremos nada [[hasta que no los tengamos|blue]]; no quiero repetir lo de Bogotá, cuando nos prometieron que todo estaría montado [[antes de que llegáramos|orange]]. El segundo teatro tampoco ha firmado y, [[mientras no firmen|blue]], Rodrigo no puede anunciar las funciones. Para el viaje: [[nada más aterrizar|violet]], Rodrigo nos lleva al hotel y tenemos la tarde libre. Ya sé que, [[cada vez que viajamos|teal]], quieres ir directamente al teatro, pero esta vez descansa. Eso sí, pásate por el camerino [[antes de que empiece|blue]] el primer ensayo, porque hay que probar el vestuario. [[Apenas tenga|blue]] los billetes, te mando los horarios. Un abrazo, Inés.',
            minWords: 120,
            checks: [
              { label: 'Un conector de inmediatez (tan pronto como, una vez que, apenas, en cuanto)', pattern: '(?<!\\p{L})(?:tan\\s+pronto\\s+como|una\\s+vez\\s+que|apenas|en\\s+cuanto)(?!\\p{L})', tip: 'Añade un plan que dependa de algo incierto: «Tan pronto como…», «Una vez que…», «Apenas…».' },
              { label: 'Un futuro visto desde el pasado: conector + imperfecto de subjuntivo (en cuanto llegara…)', pattern: '(?<!\\p{L})(?:cuando|en\\s+cuanto|tan\\s+pronto\\s+como|una\\s+vez\\s+que|antes\\s+de\\s+que|hasta\\s+que)\\s+(?:no\\s+)?(?:\\p{L}+\\s+){0,2}?\\p{L}+(?:ara|aras|áramos|aran|iera|ieras|iéramos|ieran|ase|ases|ásemos|asen|iese|ieses|iésemos|iesen)(?!\\p{L})', tip: 'Cuenta una promesa o una decisión del pasado: «Me dijo que me avisaría en cuanto llegara…», «Nos prometieron que… antes de que llegáramos».' },
              { label: '«Nada más», «al» o «después de haber» + infinitivo', pattern: '(?<!\\p{L})(?:nada\\s+más\\s+\\p{L}+(?:ar|er|ir)|al\\s+\\p{L}+(?:ar|er|ir)|después\\s+de\\s+haber\\s+\\p{L}+(?:ado|ido))(?:me|te|se|nos|lo|la|los|las)?(?!\\p{L})', tip: 'Da una instrucción para la llegada: «Nada más aterrizar…», «Al llegar al hotel…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:cuando|en\\s+cuanto|tan\\s+pronto\\s+como|una\\s+vez\\s+que|apenas|hasta\\s+que|antes\\s+de\\s+que|cada\\s+vez\\s+que)\\s+(?:no\\s+)?(?:\\p{L}+\\s+)?\\p{L}+(?:aré|arás|ará|aremos|arán|eré|erás|erá|eremos|erán|iré|irás|irá|iremos|irán|dré|drás|drá|dremos|drán)(?!\\p{L})', why: 'Después de un conector temporal no va el futuro: «tan pronto como **tengamos**», no «tendremos».' },
              { pattern: '(?<!\\p{L})antes\\s+de\\s+que\\s+(?:\\p{L}+\\s+)?\\p{L}+(?:aste|aron|iste|ieron|ó)(?!\\p{L})', why: '**Antes de que** va siempre con subjuntivo, también en el pasado: «antes de que **llegáramos**», no «antes de que llegamos».' },
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
            { tone: 'blue', label: 'DESDE AHORA', formula: 'tan pronto como · una vez que · apenas · hasta que (no) · mientras + presente de subjuntivo', example: 'Tan pronto como la liberen, la mandamos a Guadalajara.', caption: 'futuro incierto visto desde hoy; también condición', en: 'an uncertain future seen from now, or a condition with mientras / siempre que: present subjunctive' },
            { tone: 'orange', label: 'DESDE EL PASADO', formula: 'dijo que… / prometió que… + conector + imperfecto de subjuntivo', example: 'Me dijo que me avisaría en cuanto llegara el barco.', caption: 'el futuro de entonces; antes de que, también en pasado', en: 'a future seen from a past moment, and antes de que in any past narrative: imperfect subjunctive' },
            { tone: 'teal', label: 'HECHO O COSTUMBRE', formula: 'cada vez que · siempre que · apenas · mientras + indicativo', example: 'Cada vez que viajamos, algo se retrasa.', caption: 'lo que pasó o pasa siempre', en: 'real events and habits stay in the indicative' },
            { tone: 'violet', label: 'SIN VERBO CONJUGADO', formula: 'nada más / al + infinitivo · después de haber + participio', example: 'Nada más aterrizar, Lola llamó a su madre.', caption: 'mismo sujeto; el tiempo lo da el otro verbo', en: 'with the same subject, these infinitive phrases replace a full time clause in any tense' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate **desde dónde** se mira el momento. ¿Es todavía futuro desde hoy? → **presente de subjuntivo**. ¿Era futuro desde un momento pasado (dijo que…, prometió que…)? → **imperfecto de subjuntivo**. ¿Es un hecho o una costumbre? → **indicativo**. Y dos reglas fijas: **antes de que**, siempre subjuntivo; **nada más** y **al**, con infinitivo.', en: 'Ask where the moment is viewed from. Still future from today: present subjunctive. Future from a past moment: imperfect subjunctive. A fact or a habit: indicative. And two fixed rules: antes de que always takes the subjunctive; nada más and al take the infinitive.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Mi jefe me prometió que me subiría el sueldo en cuanto ___ el proyecto.', options: ['terminé', 'terminaré', 'terminara'], answer: 2, why: 'Futuro visto desde «prometió»: en cuanto + imperfecto de subjuntivo.', en: 'My boss promised he’d give me a raise as soon as I finished the project.' },
            { prompt: 'Ayer salimos de casa antes de que ___ a llover.', options: ['empiece', 'empezó', 'empezara'], answer: 2, why: '«Antes de que» va siempre con subjuntivo; en pasado, imperfecto.', en: 'Yesterday we left home before it started to rain.' },
            { prompt: 'Cada vez que ___ ayuda con la mudanza, llámame.', options: ['necesitas', 'necesitarás', 'necesites'], answer: 2, why: 'Veces futuras, todavía desconocidas: cada vez que + presente de subjuntivo.', en: 'Whenever you need help with the move, call me.' },
            { prompt: '___ la noticia, María llamó a toda la familia.', options: ['Al saber', 'Al sabía', 'Al que supo'], answer: 0, why: '«Al» + infinitivo: en el momento de saber la noticia.', en: 'On hearing the news, María called the whole family.' },
            { prompt: 'Te dejo el coche siempre que me lo ___ con el depósito lleno.', options: ['devuelves', 'devuelvas', 'devolverás'], answer: 1, why: '«Siempre que» de condición (= con tal de que) lleva siempre subjuntivo.', en: 'I’ll lend you the car as long as you return it with a full tank.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un piso nuevo. Now, a new flat.', blocks: [
          { kind: 'lead', text: 'Andrea se mudó a un piso nuevo en primavera. Ahora cuenta cómo fue. Cambia el punto de vista o la construcción.', en: 'Andrea moved into a new flat in the spring. Now she tells how it went. Change the viewpoint or the structure.' },
          { kind: 'rewrite', title: 'La mudanza de Andrea · Andrea’s move', items: [
            { prompt: 'La agencia, en enero: «Le daremos las llaves en cuanto firme el contrato».', instruction: 'Ya es junio. Eres Andrea. Empieza: «La agencia me dijo que…».', accept: ['La agencia me dijo que me darían las llaves en cuanto firmara el contrato', 'La agencia me dijo que me darían las llaves en cuanto firmase el contrato', 'La agencia me dijo que me daría las llaves en cuanto firmara el contrato', 'La agencia me dijo que me daría las llaves en cuanto firmase el contrato'] },
            { prompt: 'Llegué al piso. Inmediatamente puse música.', instruction: 'Únelo con «nada más» + infinitivo. Empieza: «Nada más…».', accept: ['Nada más llegar al piso puse música', 'Nada más llegar puse música'] },
            { prompt: 'Pinté el salón. Los muebles llegaron dos días después.', instruction: 'Únelo con «antes de que». Empieza: «Pinté el salón…».', accept: ['Pinté el salón antes de que llegaran los muebles', 'Pinté el salón antes de que llegasen los muebles', 'Pinté el salón antes de que los muebles llegaran', 'Pinté el salón antes de que los muebles llegasen'] },
          ] },
        ] },
        { title: 'Ampliación · Matices de registro · Register and nuance', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: tres usos que vas a encontrar en la prensa y en la literatura, y un conector con dos significados.', en: 'For strong students or spare time: three uses you will meet in the press and in fiction, plus a connector with two meanings.' },
          { kind: 'choice', title: '¿Qué está pasando aquí? · What is going on here?', items: [
            { prompt: 'Noticia: «Después de que el teatro ___ sus puertas en 2019, el barrio cambió por completo». ¿Qué formas aparecen?', options: ['Solo «cerrara», porque «después de que» exige subjuntivo.', 'Solo «cierre».', '«Cerró» y «cerrara»: las dos se usan; el indicativo es la opción tradicional para un hecho.'], answer: 2, why: 'Con un hecho pasado, «después de que» admite indicativo (lo tradicional) y también imperfecto de subjuntivo, muy frecuente en la prensa. Con un momento futuro, solo subjuntivo: «después de que cierre».', en: 'News report: after the theatre closed in 2019, the neighbourhood changed completely.' },
            { prompt: '«Una vez liberada la escenografía, el camión salió hacia Guadalajara.» ¿Qué significa «una vez liberada»?', options: ['Para liberar la escenografía.', 'Cuando la escenografía ya estaba liberada.', 'Aunque la escenografía no estaba liberada.'], answer: 1, why: '«Una vez» + participio (que concuerda con el sustantivo) es una construcción culta: equivale a «una vez que la liberaron».', en: 'Once the set had been released, the truck left for Guadalajara.' },
            { prompt: '«Apenas llegó, se puso a trabajar» y «Apenas habla en las reuniones». ¿Qué significa «apenas» en cada frase?', options: ['En las dos, «casi no».', 'En las dos, «en cuanto».', 'En la primera, «en cuanto»; en la segunda, «casi no».'], answer: 2, why: '«Apenas» como conector temporal = en cuanto; como adverbio = casi no («hardly»). El contexto decide.', en: 'What does apenas mean in each sentence?' },
            { prompt: 'En un informe muy formal, ¿qué versión prefieren muchos redactores?', options: ['«No se publicarán los datos hasta que se verificarán.»', '«No se publicarán los datos hasta que se verifiquen.»', '«No se publicarán los datos hasta que no se verifiquen.»'], answer: 1, why: 'Las dos primeras significan lo mismo y la gramática académica admite la segunda; en estilo muy cuidado se suele evitar el «no» expletivo. La tercera es incorrecta: nunca futuro tras «hasta que».', en: 'In a very formal report, which version do many writers prefer?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca un titular con «después de que» + imperfecto de subjuntivo y lo reformula con indicativo.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 140 · Finales con subjuntivo: con el fin de que, sin que', text: 'Ya sabes situar un momento incierto desde hoy o desde el pasado: «en cuanto llegue», «en cuanto llegara». En la clase 140 aplicas la misma lógica a otra familia de subordinadas: las que expresan finalidad o una acción que no ocurre («con el fin de que lo **sepan**», «salió **sin que** nadie lo **viera**»). Es el paso natural: cambia el conector, pero el subjuntivo y la correlación de tiempos funcionan igual.', en: 'You can now place an uncertain moment from today or from the past. In class 140 you apply the same logic to another family of clauses: those expressing purpose, or an action that does not happen (“so that they know”, “she left without anyone seeing her”). It is the natural next step: the connector changes, but the subjunctive and the sequence of tenses work the same way.', href: '/gramatica/finales-con-subjuntivo-con-el-fin', label: 'Ir a la clase 140' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué te prometieron la última vez que esperabas algo importante, y qué harás en cuanto se resuelva lo que esperas ahora?». Respuesta esperada: un imperfecto y un presente de subjuntivo tras el conector. Tarea: el correo de Escribir sobre un plan real.' },
        ] },
      ],
    },
  ],
};
