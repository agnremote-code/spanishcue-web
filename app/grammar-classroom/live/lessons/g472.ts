import type { LiveLesson } from '../types';

/**
 * Lesson 472 · C1 · Condicionales elípticas: de + infinitivo / gerundio (course unit G172).
 * Builds on G131–G135 (si + imperfecto / pluscuamperfecto de subjuntivo, mixed conditionals;
 * lesson 435 only previewed «de haberlo sabido» and «de ser así»).
 * One scene runs through the class: the eve and first day of an Ibero-American libraries
 * congress in Valparaíso. Carmen Ibarra (coordinator) runs the organising committee with
 * Raúl Fuentes (logistics) and Nuria Prats (communication, who writes the attendee guide);
 * Gabriel Soto is a volunteer. Carmen sends the volunteers a voice note (es-CL-CatalinaNeural,
 * ustedes). Content: conditions without «si»: de + infinitivo simple (= si + presente or
 * si + imperfecto de subjuntivo, the main clause decides), de + infinitivo compuesto
 * (= si + pluscuamperfecto; in formal instructions also = si + perfecto: «De no haber
 * recibido…»), explicit subject after the infinitive (de llegar ella tarde, de ser yo tú),
 * shared vs different subjects and when to keep «si»; conditional gerund (only with a future,
 * hypothetical or generic main clause); participle formulas (bien mirado, visto así) for
 * recognition (absolutes come in G177); con + infinitivo (minimal condition), sin + infinitivo
 * (negative condition), en caso de + sustantivo / infinitivo / que + subjuntivo, de no ser por,
 * a juzgar por, a decir verdad. Register: formal written vs speech (yo que tú). Transformations
 * si ↔ reduced form. Ampliación: concessive con + infinitivo, a no ser por, gerund ambiguity.
 */
export const lesson: LiveLesson = {
  id: 472,
  level: 'C1',
  title: 'Condicionales elípticas: de + infinitivo / gerundio',
  subtitle: 'Expresar condiciones sin «si» (de saberlo, siguiendo así, en caso de, sin avisar) y elegir la forma según el sujeto y el registro.',
  legend: [
    { tone: 'blue', label: 'DE + INFINITIVO · de seguir así, de haberlo sabido, de no ser por' },
    { tone: 'teal', label: 'GERUNDIO Y PARTICIPIO · siguiendo las flechas, bien mirado' },
    { tone: 'orange', label: 'OTRAS FÓRMULAS · en caso de, sin / con + infinitivo, yo que tú' },
    { tone: 'violet', label: 'RESULTADO · el verbo principal: será, sería, habría sido, avise' },
  ],
  optionNotes: {
    'Si seguiría': 'Tras «si» condicional nunca va el condicional. Aquí, además, la forma reducida pide infinitivo: **de seguir**.',
    'que muestre': '«Sin que» + subjuntivo se usa cuando los sujetos son distintos; con el mismo sujeto, **sin + infinitivo**.',
    'hubiéramos detectado': 'El subjuntivo va con «si» (si hubiéramos detectado); tras «de», infinitivo: **de haber detectado**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Condiciones sin «si»', coach: 'La misma condición, menos palabras. The same condition, fewer words.',
      steps: [
        { title: 'La víspera del congreso · The day before the congress', blocks: [
          { kind: 'lead', text: 'Mañana empieza en Valparaíso el Congreso Iberoamericano de Bibliotecas: tres días, trescientos inscritos y un comité organizador agotado. Carmen Ibarra coordina; Raúl Fuentes se ocupa de la logística y Nuria Prats redacta la guía del asistente. En sus conversaciones y en sus textos aparecen muchas condiciones **sin «si»**: «de seguir así», «en caso de lluvia», «siguiendo las flechas». Hoy aprendes a entenderlas, a producirlas y a saber cuándo no conviene usarlas.', en: 'An Ibero-American libraries congress opens in Valparaíso tomorrow. The organisers keep expressing conditions without «si»: reduced forms with an infinitive, a gerund or a fixed phrase. You will learn to understand them, produce them and spot when the full si-clause is the better choice.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres versiones y tu alumno dice cuál pondría en la guía impresa, cuál en un mensaje al equipo y por qué.', self: 'Lee las tres versiones en voz alta. ¿Cuál pondrías en una guía impresa y cuál en un mensaje al equipo? (Which version would you print in a guide, and which would you text to the team?)' } },
          { kind: 'compare', title: 'Tres maneras de decir lo mismo · Three ways to say the same thing', columns: [
            { tone: 'neutral', label: 'CON «SI»', sentence: 'Si llueve el jueves, la cena [[será|violet]] en el salón Pacífico.', idea: 'La forma completa: sirve en cualquier registro y siempre es clara.', en: 'The full if-clause: neutral, clear, valid everywhere.' },
            { tone: 'blue', label: 'DE + INFINITIVO', sentence: '[[De llover|blue]] el jueves, la cena [[será|violet]] en el salón Pacífico.', idea: 'Más compacta y más cuidada; muy propia de textos escritos y del habla formal.', en: 'More compact and more careful in tone; typical of written texts and formal speech.' },
            { tone: 'orange', label: 'EN CASO DE + SUSTANTIVO', sentence: '[[En caso de lluvia|orange]], la cena [[será|violet]] en el salón Pacífico.', idea: 'La fórmula de los avisos, normas e instrucciones.', en: 'The standard formula for notices, rules and instructions.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«De seguir así las inscripciones, tendremos que abrir otra sala». ¿A qué equivale «de seguir así»?', options: ['Aunque siguen así', 'Como siguen así', 'Si siguen así'], answer: 2, why: 'Es una condición: «de + infinitivo» equivale aquí a «si + presente», porque el resultado va en futuro (tendremos).', en: '“De seguir así” works like an if-clause, not a concession or a cause.' },
            { prompt: '¿Dónde encaja mejor «En caso de pérdida de la acreditación, diríjase a la secretaría»?', options: ['En una conversación en el café', 'En un audio a una amiga', 'En la guía impresa del congreso'], answer: 2, why: '«En caso de» + sustantivo y el imperativo de usted son el estilo típico de las instrucciones escritas.', en: '“En caso de + noun” belongs to written instructions and notices.' },
          ] },
        ] },
        { title: 'De + infinitivo: simple y compuesto · Simple and perfect infinitive', mascot: '/brand/mascot/studying.webp', coach: 'El verbo principal decide. The main verb decides.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'DE + INFINITIVO', question: '¿Quieres una condición compacta, con el mismo sujeto que la oración principal?', en: 'De + infinitive replaces a si-clause. The simple infinitive covers both real conditions (si + present) and hypotheses about now (si + imperfect subjunctive); the main verb tells you which. The perfect infinitive (de haber + participle) looks back at a past that did not happen.', formula: ['de + infinitivo simple  → futuro / presente / imperativo  (= si + presente)', 'de + infinitivo simple  → condicional simple  (= si + imperfecto de subjuntivo)', 'de + haber + participio  → condicional simple o compuesto  (= si + pluscuamperfecto de subjuntivo)'],
            meaning: 'El infinitivo **no tiene tiempo propio**: el verbo principal indica si la condición es posible (**será**, **avise**) o irreal (**sería**). Con **haber + participio**, la condición es pasada y normalmente contraria a los hechos. La negación va delante: **de no + infinitivo**.',
            examples: [
              { es: '[[De seguir|blue]] así las inscripciones, [[necesitaremos|violet]] más voluntarios.', en: 'If registrations keep up like this, we’ll need more volunteers: a real, open possibility.' },
              { es: '[[De tener|blue]] más presupuesto, [[invitaríamos|violet]] a ponentes de Brasil.', en: 'If we had a bigger budget, we would invite speakers from Brazil: a hypothesis about now.' },
              { es: '[[De haber reservado|blue]] en marzo, [[habríamos conseguido|violet]] el auditorio grande.', en: 'Had we booked in March, we would have got the big auditorium: a past that did not happen.' },
              { es: '[[De no haber firmado|blue]] con la imprenta de siempre, hoy [[tendríamos|violet]] las credenciales.', en: 'If we hadn’t signed with the usual printer, we would have the badges today: a past cause with a present result.' },
            ],
            note: 'Los pronombres van pegados al infinitivo: **de saberlo**, **de haberlo sabido**, **de confirmarse**. En instrucciones formales, «de + haber + participio» también puede equivaler a «si + pretérito perfecto»: «De no haber recibido el correo el lunes, escriba a la secretaría» (= si no lo ha recibido).' },
          { kind: 'table', title: 'De la oración con «si» a la forma reducida · From the si-clause to the reduced form', head: ['Con «si»', 'Reducida', 'Resultado'], rows: [
            ['Si seguimos así…', '**De seguir** así…', '…perderemos el patrocinio. (futuro)'],
            ['Si lo supiera…', '**De saberlo**…', '…te lo diría. (condicional simple)'],
            ['Si lo hubiera sabido…', '**De haberlo sabido**…', '…habría reservado otra sala. (condicional compuesto)'],
            ['Si no ha recibido el correo…', '**De no haber recibido** el correo…', '…escriba a la secretaría. (instrucción formal)'],
            ['Si es necesario…', '**De ser** necesario…', '…abriremos la sala C. (fórmula muy frecuente)'],
          ], note: '«De ser así» (if so), «de ser necesario» (if necessary) y «de haberlo sabido» (had I known) son tan frecuentes que se oyen también en la conversación.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'De ___ la verdad, Raúl no estaría tan tranquilo.', options: ['supiera', 'sabría', 'saber'], answer: 2, why: 'Tras «de» condicional va el infinitivo. El condicional «estaría» muestra que equivale a «si supiera».', en: 'If Raúl knew the truth, he wouldn’t be so calm.' },
            { prompt: 'De ___ antes el problema del sonido, lo habríamos solucionado a tiempo.', options: ['hubiéramos detectado', 'detectar', 'haber detectado'], answer: 2, why: 'Condición pasada y no cumplida, con resultado en condicional compuesto: infinitivo compuesto, de haber detectado.', en: 'Had we spotted the sound problem earlier, we would have fixed it in time.' },
          ] },
        ] },
        { title: '¿Quién es el sujeto? · Who is the subject?', mascot: '/brand/mascot/standing.webp', coach: 'Un sujeto o dos. One subject or two.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'SUJETO COMPARTIDO O SUJETO EXPRESO', question: '¿La condición tiene el mismo sujeto que la oración principal?', en: 'Without an expressed subject, the infinitive is read as sharing the subject of the main clause. If the subjects differ, put the subject after the infinitive; if that sounds forced or ambiguous, keep the si-clause.', formula: ['mismo sujeto  → de llegar tarde, Raúl perderá el autobús', 'otro sujeto  → de + infinitivo + SUJETO: de retrasarse el vuelo…, de ser yo tú…'],
            meaning: 'Sin sujeto expreso, entendemos que el sujeto del infinitivo es **el mismo** que el de la oración principal (o uno general: «de seguir así…»). Si es **otro**, se escribe **detrás del infinitivo**, nunca delante: **de llegar ella tarde**, no «de ella llegar tarde».',
            examples: [
              { es: '[[De llegar tarde|blue]], Raúl [[perderá|violet]] el último autobús.', en: 'If Raúl arrives late, he’ll miss the last bus: one subject, Raúl.' },
              { es: '[[De retrasarse el vuelo|blue]], Raúl [[irá|violet]] a buscar a los ponentes al aeropuerto.', en: 'If the flight is delayed, Raúl will pick the speakers up: two subjects, the second one placed after the infinitive.' },
              { es: '[[De ser yo tú|blue]], [[cambiaría|violet]] el orden de las mesas.', en: 'If I were you, I’d change the order of the panels: a careful, slightly formal version of «yo que tú».' },
              { es: 'Si llegas tarde, Carmen [[se enfadará|violet]].', en: 'If you arrive late, Carmen will be annoyed: «de llegar tarde» would mean Carmen is the one arriving late, so «si» is clearer.' },
            ],
            note: 'En la conversación, «de ser yo tú» se sustituye por **yo que tú** (general) o **yo de ti** (frecuente en España): «Yo que tú, cambiaría el orden». Algunas hablas caribeñas anteponen el sujeto al infinitivo con otras preposiciones («para yo entenderlo»); en la lengua estándar, con «de» condicional, el sujeto va detrás.' },
          { kind: 'decide', title: '¿Puedo quitar el «si»? · Can I drop the «si»?', steps: [
            { q: '¿El «si» introduce de verdad una condición? (En «No sé si vendrá», «si» introduce una pregunta indirecta.)', yes: 'next', no: 'No se reduce: «No sé si vendrá» se queda como está.' },
            { q: '¿La condición y la oración principal tienen el mismo sujeto, o la condición es impersonal (llover, ser necesario)?', yes: 'Reduce sin más: «**De seguir** así, perderemos el patrocinio».', no: 'next' },
            { q: '¿Puedes poner el sujeto detrás del infinitivo y la frase se entiende sin dudas?', yes: 'Reduce con sujeto expreso: «**De retrasarse el vuelo**, Raúl irá al aeropuerto».', no: 'Mantén «si»: «Si llegas tarde, Carmen se enfadará».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«De llegar tarde, Carmen empezará sin nosotros». ¿Quién llega tarde, según la frase?', options: ['No se sabe: es ambigua', 'Nosotros', 'Carmen'], answer: 2, why: 'Sin sujeto expreso, el infinitivo comparte el sujeto de la oración principal: Carmen. Si llegamos tarde nosotros, hay que decir «Si llegamos tarde, Carmen empezará sin nosotros».', en: 'Who is late, according to the sentence?' },
            { prompt: '¿Qué versión es correcta en la lengua estándar?', options: ['De ella confirmar la asistencia, la incluiremos en el panel.', 'De confirmar ella la asistencia, la incluiremos en el panel.', 'De confirmando ella la asistencia, la incluiremos en el panel.'], answer: 1, why: 'Cuando el sujeto es distinto, va detrás del infinitivo: de confirmar ella…', en: 'If she confirms, we’ll include her in the panel: which version is standard?' },
          ] },
        ] },
        { title: 'Gerundio y participio · Gerund and participle', mascot: '/brand/mascot/speaking.webp', coach: '¿Condición o circunstancia? Condition or circumstance?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'GERUNDIO CONDICIONAL', question: '¿El gerundio indica lo que tiene que pasar para que se cumpla algo futuro o hipotético?', en: 'A gerund placed before the main clause can work as a condition, but only when the main clause points to the future, to a hypothesis or to something generally true. With a past event, the same gerund reads as means, time or cause.', formula: ['gerundio + futuro / presente / condicional  (= si + verbo)', 'siguiendo las flechas, llegará a la sala B  (= si sigue las flechas)'],
            meaning: 'El gerundio condicional suele ir **delante** y su sujeto es normalmente el de la oración principal. Solo tiene valor de condición si el resultado **no ha pasado todavía** o es general (**llegará**, **llegaría**, **se llega**). Con un hecho pasado, el gerundio indica modo, tiempo o causa.',
            examples: [
              { es: '[[Siguiendo|teal]] las flechas verdes, [[llegará|violet]] a la sala B en dos minutos.', en: 'If you follow the green arrows, you’ll reach room B in two minutes: typical of instructions.' },
              { es: '[[Trabajando|teal]] en parejas, los voluntarios [[atenderían|violet]] el doble de rápido.', en: 'If they worked in pairs, the volunteers would deal with people twice as fast.' },
              { es: '[[Reservando|teal]] con el código del congreso, el hotel [[sale|violet]] más barato.', en: 'If you book with the congress code, the hotel works out cheaper: a general condition with an impersonal result.' },
            ],
            note: 'En «Reservando con el código, el hotel sale más barato» el sujeto del gerundio es general («uno», «quien reserva»): es un uso frecuente en consejos e instrucciones.' },
          { kind: 'compare', title: 'El mismo gerundio, dos valores · Same gerund, two meanings', columns: [
            { tone: 'teal', label: 'CONDICIÓN', sentence: '[[Saliendo|teal]] a las siete, [[llegaremos|violet]] antes del montaje.', idea: 'El resultado es futuro: «si salimos a las siete».', en: 'Future result: the gerund sets a condition.' },
            { tone: 'neutral', label: 'TIEMPO O MODO', sentence: 'Saliendo del hotel, Nuria [[vio|violet]] el cartel del congreso.', idea: 'El resultado ya pasó: «cuando salía del hotel». No es una condición.', en: 'Past event: the gerund means “as/when she was leaving”, not “if”.' },
          ] },
          { kind: 'table', title: 'Participios con valor condicional · Participles as conditions', head: ['Fórmula', 'Ejemplo', 'Equivale a'], rows: [
            ['**Bien mirado**', 'Bien mirado, el retraso nos da un día más de margen.', 'si se mira bien (on reflection)'],
            ['**Visto así**', 'Visto así, el cambio de sala no es tan grave.', 'si se ve de esta manera (seen that way)'],
            ['**Bien pensado**', 'Bien pensado, mejor imprimimos la guía mañana.', 'si se piensa bien (come to think of it)'],
          ], note: 'Son fórmulas fijas, frecuentes en la conversación y en el ensayo. Las construcciones absolutas de participio en general («Terminada la sesión, …») se estudian en la clase 177; hoy solo tienes que reconocerlas.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿En qué frase tiene el gerundio valor de condición?', options: ['Gabriel pasó la tarde revisando la lista.', 'Revisando la lista, Gabriel encontró dos errores.', 'Revisando la lista con calma, encontrarás los errores.'], answer: 2, why: 'Solo con el resultado futuro (encontrarás) el gerundio equivale a «si revisas». Con «encontró» indica tiempo o modo, y en «pasó la tarde revisando» es parte del predicado.', en: 'In which sentence does the gerund act as a condition?' },
            { prompt: '«Visto así, el retraso no es un desastre». ¿Qué significa «visto así»?', options: ['Aunque lo hemos visto', 'Si lo miramos de esta manera', 'Después de verlo'], answer: 1, why: 'Es una fórmula fija de participio con valor condicional: «si se ve así».', en: '“Visto así” means “seen this way”, a fixed conditional formula.' },
          ] },
        ] },
        { title: 'En caso de, sin, con y otras fórmulas · Other formulas', mascot: '/brand/mascot/portrait.webp', coach: 'Cada fórmula, su registro. Each formula, its register.', blocks: [
          { kind: 'table', title: 'Fórmulas condicionales sin «si» · Conditional formulas without «si»', head: ['Fórmula', 'Ejemplo', 'Equivale a', 'Registro'], rows: [
            ['**en caso de** + sustantivo / infinitivo', 'En caso de emergencia, siga las flechas verdes.', 'si hay una emergencia', 'formal: avisos, normas'],
            ['**en caso de que** + subjuntivo', 'En caso de que falte un ponente, Nuria moderará la mesa.', 'si falta', 'formal y general'],
            ['**sin** + infinitivo / sustantivo', 'Sin confirmar la asistencia, no podrán reservar hotel.', 'si no confirman', 'general; condición negativa'],
            ['**con** + infinitivo', 'Con enseñar la acreditación, te darán el almuerzo.', 'basta con que la enseñes', 'más bien oral; condición mínima'],
            ['**de no ser por** + sustantivo', 'De no ser por los voluntarios, no llegaríamos a todo.', 'si no fuera por', 'general, muy frecuente'],
            ['**a juzgar por** + sustantivo', 'A juzgar por las inscripciones, la sala se quedará pequeña.', 'si juzgamos por', 'fórmula fija'],
            ['**a decir verdad**', 'A decir verdad, el programa es demasiado largo.', 'to be honest', 'fórmula fija de comentario'],
          ], note: '«Sin» y «con» + infinitivo son condiciones cuando el resultado es futuro, hipotético o general; en «Salió sin despedirse» «sin» solo indica modo. Fuera de las fórmulas fijas, «a + infinitivo» condicional es hoy sobre todo literario.' },
          { kind: 'tip', icon: '✍', title: 'Escrito y oral · Written and spoken', text: 'En textos formales (guías, normas, correos institucionales) son muy frecuentes **de + infinitivo**, **en caso de** y el gerundio de las instrucciones. En la conversación se prefiere **si**, pero se oyen mucho «de ser así», «de haberlo sabido», «con + infinitivo» y **yo que tú**. Si dudas, «si» nunca suena mal.', en: 'Formal texts love de + infinitive, en caso de and instruction gerunds. Speech prefers si, though de ser así, de haberlo sabido, con + infinitive and yo que tú are common. When in doubt, a plain si-clause never sounds wrong.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En caso de que ___ cambios en el programa, los anunciaremos en las pantallas.', options: ['haya', 'habrá', 'hay'], answer: 0, why: '«En caso de que» exige subjuntivo, igual que «a no ser que» o «siempre que» con valor condicional.', en: 'Should there be any changes to the programme, we will announce them on the screens.' },
            { prompt: 'Sin ___ antes de las doce, no podrás comer en el comedor del congreso.', options: ['que te inscribas', 'inscribiéndote', 'inscribirte'], answer: 2, why: 'El sujeto es el mismo (tú): sin + infinitivo. «Sin que» + subjuntivo se usa cuando los sujetos son distintos.', en: 'If you don’t sign up before twelve, you can’t eat in the congress canteen.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Forma, sujeto y valor. Form, subject and meaning.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: la forma, el sujeto o el valor. Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: ¿la forma, el sujeto o el valor? Toca para ver la corrección. (Is it the form, the subject or the meaning?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'De lo haber sabido, habríamos reservado otra sala.', right: 'De haberlo sabido, habríamos reservado otra sala.', why: 'Con infinitivo, el pronombre va detrás y pegado: haberlo.' },
            { wrong: 'De hubiéramos sabido lo del sonido, habríamos traído altavoces.', right: 'De haber sabido lo del sonido, habríamos traído altavoces.', why: 'Tras «de» va siempre infinitivo; el subjuntivo va con «si»: si hubiéramos sabido.' },
            { wrong: 'De ella llegar tarde, empezaremos con la mesa redonda.', right: 'De llegar ella tarde, empezaremos con la mesa redonda.', why: 'En la lengua estándar, el sujeto distinto va detrás del infinitivo.' },
            { wrong: 'De llamar al hotel la semana pasada, habríamos conseguido el descuento.', right: 'De haber llamado al hotel la semana pasada, habríamos conseguido el descuento.', why: 'Una condición pasada no cumplida pide infinitivo compuesto.' },
            { wrong: 'En caso de que el ponente no llega, cancelaremos la sesión.', right: 'En caso de que el ponente no llegue, cancelaremos la sesión.', why: '«En caso de que» va siempre con subjuntivo.' },
            { wrong: 'De trabajar en la secretaría, los ponentes te preguntarán por las salas. (= si tú trabajas…)', right: 'Si trabajas en la secretaría, los ponentes te preguntarán por las salas.', why: 'Sin sujeto expreso, se entiende que trabajan los ponentes. Con sujetos distintos, «si» es más claro.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Elige la forma correcta: ___ que el wifi fallaría, habríamos impreso las presentaciones.', options: ['De hubiéramos sabido', 'De saber', 'De haber sabido'], answer: 2, why: 'Condición pasada no cumplida (resultado en condicional compuesto): de + haber + participio.', en: 'Had we known the wifi would fail, we would have printed the slides.' },
            { prompt: 'Carmen quiere decir que, si NOSOTROS nos retrasamos, ella abrirá el congreso. ¿Qué frase lo dice de la forma más clara y natural?', options: ['De retrasarnos, Carmen abrirá el congreso.', 'De retrasarse, Carmen abrirá el congreso.', 'Si nos retrasamos, Carmen abrirá el congreso.'], answer: 2, why: 'Con sujetos distintos, «si» es lo más claro. «De retrasarse» se entendería como «si Carmen se retrasa»; «de retrasarnos» es posible, pero suena forzado.', en: 'Which sentence says it most clearly and naturally?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno transforma dos frases suyas con «si» en formas reducidas (de + infinitivo y un gerundio) y explica por qué una tercera frase, con sujetos distintos, se queda con «si».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La guía del asistente', coach: 'Toca cada forma marcada. Tap each marked form.',
      steps: [
        { title: 'En la oficina del comité · In the committee office', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Carmen y tu alumno es Nuria (y después Raúl). Luego tu alumno toca cada forma marcada y dice a qué oración con «si» equivale.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada y di a qué oración con «si» equivale. (Tap each marked form and say the full si-clause it stands for.)' } },
          { kind: 'explore', title: 'Las últimas horas', setting: 'Miércoles, cinco de la tarde, en la oficina del comité organizador, en Valparaíso. Nuria quiere mandar la guía a la imprenta antes de las seis. Se tratan de tú. (Wednesday, 5 p.m., in the organising committee office.)', lines: [
            { who: 'Nuria', text: 'Carmen, ¿revisamos la guía? La imprenta cierra a las seis.', en: 'Carmen, shall we go over the guide? The printer closes at six.' },
            { who: 'Carmen', text: 'Vamos. Lo primero: ¿qué pusiste para la cena del jueves si llueve?', en: 'Let’s do it. First: what did you write about Thursday’s dinner if it rains?' },
            { who: 'Nuria', text: '«[[En caso de lluvia|orange]], la cena se celebrará en el salón Pacífico». Y debajo: «[[De no poder asistir|blue]], [[avise|violet]] a la secretaría».', en: '“In case of rain, dinner will be held in the Pacific room.” And below: “If you are unable to attend, please let the secretariat know.”' },
            { who: 'Raúl', text: 'Muy formal, pero para una guía está perfecto. Malas noticias: las credenciales no llegan hasta las nueve de la noche.', en: 'Very formal, but perfect for a guide. Bad news: the badges won’t arrive until nine tonight.' },
            { who: 'Carmen', text: '¿A las nueve? [[De haberlo sabido|blue]], las [[habría encargado|violet]] a la imprenta de la universidad. [[De seguir así|blue]], [[vamos a abrir|violet]] el congreso sin credenciales.', en: 'At nine? Had I known, I’d have ordered them from the university printer. At this rate we’ll open the congress without badges.' },
            { who: 'Raúl', text: 'Tranquila. [[Saliendo a las ocho|teal]], [[estoy|violet]] de vuelta antes de las diez con todas las cajas.', en: 'Relax. If I leave at eight, I’ll be back before ten with all the boxes.' },
            { who: 'Nuria', text: '¿Y los voluntarios? [[Sin conocer|orange]] el edificio, [[van a mandar|violet]] a la gente a cualquier sala.', en: 'And the volunteers? If they don’t know the building, they’ll send people to the wrong rooms.' },
            { who: 'Carmen', text: '[[Con darles|orange]] el plano esta tarde, [[basta|violet]]. Y, [[de ser necesario|blue]], hacemos un recorrido mañana a las siete y media.', en: 'Giving them the map this afternoon will do. And if necessary, we’ll do a walk-through tomorrow at half past seven.' },
            { who: 'Raúl', text: '[[Yo que tú|orange]], lo [[haría|violet]] hoy: mañana no vamos a tener ni un minuto.', en: 'If I were you, I’d do it today: tomorrow we won’t have a minute to spare.' },
            { who: 'Carmen', text: 'Tienes razón. [[Bien mirado|teal]], un recorrido hoy nos [[ahorra|violet]] muchos sustos mañana.', en: 'You’re right. Come to think of it, a walk-through today will save us a lot of scares tomorrow.' },
            { who: 'Nuria', text: 'Última cosa: ¿pongo «[[de llegar tarde|blue]] las credenciales, se entregarán en el vestíbulo»?', en: 'One last thing: shall I write “should the badges arrive late, they will be handed out in the lobby”?' },
            { who: 'Carmen', text: 'Mejor no: la guía es para los asistentes, no tienen por qué enterarse. [[De ser yo tú|blue]], [[lo quitaría|violet]].', en: 'Better not: the guide is for attendees, they don’t need to know. If I were you, I’d leave it out.' },
          ], notes: {
            'En caso de lluvia': 'En caso de + sustantivo: la fórmula de los avisos. Equivale a «si llueve».',
            'De no poder asistir': 'De no + infinitivo = «si no puede asistir». El sujeto (usted, el asistente) es el mismo que el de «avise».',
            'avise': 'Imperativo de usted: con un resultado así, «de + infinitivo» equivale a «si + presente».',
            'De haberlo sabido': 'De + haber + participio = «si lo hubiera sabido». «Lo» va pegado a «haber».',
            'habría encargado': 'Resultado pasado no cumplido: condicional compuesto.',
            'De seguir así': 'De + infinitivo simple con resultado futuro = «si seguimos así». Sujeto general: la situación.',
            'vamos a abrir': 'Ir a + infinitivo: resultado futuro, así que la condición es posible, no irreal.',
            'Saliendo a las ocho': 'Gerundio condicional = «si salgo a las ocho». El resultado no ha pasado todavía.',
            'estoy': 'Presente con valor de futuro, muy normal en la conversación: «estoy de vuelta» = «estaré de vuelta».',
            'Sin conocer': 'Sin + infinitivo como condición negativa = «si no conocen el edificio». Mismo sujeto: los voluntarios.',
            'van a mandar': 'Resultado futuro: por eso «sin conocer» es aquí una condición y no un simple modo.',
            'Con darles': 'Con + infinitivo: condición mínima, «basta con que les demos el plano». «Les» va pegado al infinitivo.',
            'basta': 'Bastar es el verbo típico de la condición mínima: «con + infinitivo, basta».',
            'de ser necesario': 'Fórmula muy frecuente = «si es necesario». Se oye en la conversación y se lee en textos formales.',
            'Yo que tú': 'Versión oral y general de «si yo fuera tú». En España también se dice «yo de ti».',
            'haría': 'Tras «yo que tú», el consejo va en condicional simple.',
            'Bien mirado': 'Participio en fórmula fija = «si se mira bien». Introduce una reflexión que cambia la valoración.',
            'ahorra': 'Presente con valor general o futuro: el recorrido de hoy evita problemas mañana.',
            'de llegar tarde': 'Aquí el sujeto (las credenciales) va detrás del infinitivo y del adverbio. La frase es correcta, pero Carmen decide quitarla por otra razón: el contenido.',
            'De ser yo tú': 'Versión cuidada de «yo que tú»: el sujeto «yo» va detrás del infinitivo.',
            'lo quitaría': 'Consejo en condicional simple, como después de «yo que tú».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué pasará con la cena del jueves si llueve?', options: ['Se celebrará en el salón Pacífico.', 'Se trasladará al viernes.', 'Se cancelará.'], answer: 0, why: '«En caso de lluvia, la cena se celebrará en el salón Pacífico».', en: 'What happens to Thursday’s dinner if it rains?' },
            { prompt: '¿Por qué está preocupada Carmen?', options: ['Porque las credenciales llegan muy tarde.', 'Porque la imprenta no quiere imprimir la guía.', 'Porque faltan voluntarios.'], answer: 0, why: '«¿A las nueve? De haberlo sabido, las habría encargado a la imprenta de la universidad».', en: 'Why is Carmen worried?' },
            { prompt: '¿Qué le aconseja Raúl a Carmen?', options: ['Cancelar el recorrido.', 'Hacer el recorrido con los voluntarios hoy mismo.', 'Mandar la guía mañana.'], answer: 1, why: '«Yo que tú, lo haría hoy: mañana no vamos a tener ni un minuto».', en: 'What does Raúl advise Carmen to do?' },
          ] },
        ] },
        { title: 'El borrador de la guía · The draft guide', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Nuria y Carmen terminan la guía · Finishing the guide', lines: [
            { who: 'Nuria', text: '«De ___ la acreditación, preséntese en la secretaría con un documento de identidad». ¿Así?', options: ['perdido', 'perder', 'perdiera'], answer: 1, why: 'Tras «de» condicional va el infinitivo; el imperativo «preséntese» indica una condición posible (= si pierde).' },
            { who: 'Carmen', text: 'Perfecto. Y para la salida de emergencia: «___ evacuación, utilice las escaleras y no los ascensores».', options: ['En caso de', 'De ser', 'En caso de que'], answer: 0, why: 'Delante de un sustantivo va «en caso de»; «en caso de que» necesita un verbo en subjuntivo.' },
            { who: 'Nuria', text: '¿Y las salas? «___ las señales verdes, llegará a todas las salas sin perderse».', options: ['Sin seguir', 'Siguiendo', 'Seguido'], answer: 1, why: 'Gerundio condicional con resultado futuro (llegará): «si sigue las señales».' },
            { who: 'Carmen', text: 'Bien. Y lo del wifi: «___ ser posible, descargue el programa antes de llegar».', options: ['Sin', 'Con', 'De'], answer: 2, why: '«De ser posible» es la fórmula fija: «si es posible».' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno redacta en voz alta dos normas reales de su lugar de trabajo o estudio con «en caso de» y «de + infinitivo».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Reduce cuando puedas; mantén «si» cuando debas. Reduce when you can, keep «si» when you must.',
      steps: [
        { title: 'El primer día · Day one', blocks: [
          { kind: 'choice', items: [
            { context: 'Un ponente pregunta por la conexión. (A speaker asks about the internet.)', prompt: 'De ___ problemas con el wifi, diríjase al mostrador de información.', options: ['tuviera', 'tener', 'tenga'], answer: 1, why: 'Tras «de» condicional va el infinitivo: de tener = si tiene.', en: 'Should you have any problems with the wifi, please go to the information desk.' },
            { context: 'El doctor Rivas no confirmó a tiempo. (Dr Rivas didn’t confirm in time.)', prompt: 'De haber confirmado la asistencia, el doctor Rivas ___ en el panel de esta mañana.', options: ['esté', 'estará', 'habría estado'], answer: 2, why: 'Condición pasada no cumplida: el resultado pasado va en condicional compuesto.', en: 'Had he confirmed, Dr Rivas would have been on this morning’s panel.' },
            { context: 'Nuria aconseja a un asistente perdido. (Nuria helps a lost attendee.)', prompt: '___ el programa con calma, verás que hay un hueco a las cuatro.', options: ['Leer', 'Para leer', 'Leyendo'], answer: 2, why: 'Gerundio condicional con resultado futuro (verás) = «si lees». El infinitivo solo no forma una condición, y «para» expresa finalidad.', en: 'If you read the programme carefully, you’ll see there’s a gap at four.' },
            { context: 'Gabriel controla la entrada del auditorio. (Gabriel checks the auditorium door.)', prompt: 'Sin ___ la acreditación, usted no podrá entrar en el auditorio.', options: ['mostrar', 'mostrando', 'que muestre'], answer: 0, why: 'Mismo sujeto (usted): sin + infinitivo. «Sin que» + subjuntivo se usa con sujetos distintos.', en: 'Without showing your badge, you won’t be able to enter the auditorium.' },
            { context: 'Hay mucha gente en la cafetería. (The café is packed.)', prompt: 'A juzgar ___ las colas, la pausa de las once se ha quedado corta.', options: ['de', 'por', 'en'], answer: 1, why: 'La fórmula fija es «a juzgar por».', en: 'Judging by the queues, the eleven o’clock break is too short.' },
          ] },
        ] },
        { title: '¿Qué condición esconde? · Which condition is hidden?', blocks: [
          { kind: 'classify', title: 'Busca la oración con «si» equivalente · Find the equivalent si-clause', categories: [
            { id: 'posible', label: 'POSIBLE · si + presente', tone: 'blue' },
            { id: 'irreal', label: 'IRREAL AHORA · si + imperfecto de subjuntivo', tone: 'violet' },
            { id: 'pasado', label: 'PASADO NO CUMPLIDO · si + pluscuamperfecto', tone: 'orange' },
            { id: 'nocond', label: 'NO ES CONDICIÓN · tiempo, modo o causa', tone: 'neutral' },
          ], items: [
            { text: 'De seguir lloviendo, la visita al puerto se suspenderá.', answer: 'posible', why: 'Resultado futuro: «si sigue lloviendo».' },
            { text: 'De tener un auditorio más grande, admitiríamos a otros cien inscritos.', answer: 'irreal', why: 'Resultado en condicional simple: «si tuviéramos».' },
            { text: 'De no haberse caído la red, la sesión habría empezado puntual.', answer: 'pasado', why: 'Infinitivo compuesto y condicional compuesto: «si no se hubiera caído».' },
            { text: 'Revisando la lista anoche, Carmen encontró tres errores.', answer: 'nocond', why: 'El resultado es un hecho pasado: el gerundio indica tiempo o modo.' },
            { text: 'Sin la ayuda de los voluntarios, el congreso no habría salido adelante.', answer: 'pasado', why: '«Sin» + sustantivo con condicional compuesto: «si no hubiera sido por los voluntarios».' },
            { text: 'Gabriel salió de la sala sin despedirse.', answer: 'nocond', why: '«Sin despedirse» indica modo: cómo salió. No hay condición.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'De lo haber sabido, habría reservado otra sala.', ok: false, options: ['De lo hubiera sabido, habría reservado otra sala.', 'De sabiéndolo, habría reservado otra sala.', 'De haberlo sabido, habría reservado otra sala.'], answer: 2, why: 'Con infinitivo, el pronombre va pegado detrás: haberlo sabido.' },
            { sentence: 'De ella llegar a tiempo, presentará la primera ponencia.', ok: false, options: ['De que llegue ella a tiempo, presentará la primera ponencia.', 'De ella llegando a tiempo, presentará la primera ponencia.', 'De llegar ella a tiempo, presentará la primera ponencia.'], answer: 2, why: 'El sujeto expreso va detrás del infinitivo. «De que» + subjuntivo no forma una condición.' },
            { sentence: 'En caso de que el traductor no llega, Nuria hará la presentación en inglés.', ok: false, options: ['En caso de el traductor no llega, Nuria hará la presentación en inglés.', 'En caso que el traductor no llegaría, Nuria hará la presentación en inglés.', 'En caso de que el traductor no llegue, Nuria hará la presentación en inglés.'], answer: 2, why: '«En caso de que» exige subjuntivo: llegue.' },
            { sentence: 'De terminar pronto la mesa redonda, Nuria tendrá tiempo de comer.', ok: true, why: 'Correcta: el sujeto del infinitivo (la mesa redonda) es distinto y va detrás del verbo.' },
            { sentence: 'De reservar el hotel el mes pasado, habríamos pagado la mitad.', ok: false, options: ['De haber reservado el hotel el mes pasado, habríamos pagado la mitad.', 'De reservando el hotel el mes pasado, habríamos pagado la mitad.', 'De reservaríamos el hotel el mes pasado, habríamos pagado la mitad.'], answer: 0, why: 'Una condición pasada no cumplida («el mes pasado») pide infinitivo compuesto.' },
            { sentence: 'Bien mirado, la pausa larga ha sido un acierto.', ok: true, why: 'Correcta: «bien mirado» es una fórmula fija de participio (= si se mira bien).' },
          ] },
        ] },
        { title: 'El grupo de voluntarios · The volunteers’ chat', blocks: [
          { kind: 'chat-fill', title: 'Jueves, once de la mañana · Thursday, 11 a.m.', lines: [
            { who: 'Gabriel', text: 'La sala B está llena. ___ así, habrá que abrir la C.', options: ['De seguir', 'De siga', 'Si seguiría'], answer: 0, why: 'De + infinitivo con resultado futuro (habrá que) = «si sigue así».' },
            { who: 'Nuria', text: 'Con ___ el cartel de la puerta, la gente se enterará.', options: ['cambie', 'cambiando', 'cambiar'], answer: 2, why: 'Con + infinitivo: condición mínima (basta con cambiar el cartel).' },
            { who: 'Raúl', text: 'Yo que tú, no lo ___ ahora: espera al descanso.', options: ['haga', 'haría', 'hiciera'], answer: 1, why: 'Tras «yo que tú», el consejo va en condicional simple.' },
            { who: 'Gabriel', text: 'Vale. ¿Y en caso de ___ falten sillas?', options: ['que', 'si', 'de que'], answer: 0, why: '«En caso de que» + subjuntivo (falten). Ya está escrito «en caso de», así que solo falta «que».' },
            { who: 'Carmen', text: 'Llama a Raúl. Y de ___ él ocupado, a mí.', options: ['esté', 'estar', 'estando'], answer: 1, why: 'De + infinitivo con sujeto distinto expreso detrás: de estar él ocupado = si él está ocupado.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['De', 'no', 'ser', 'por', 'Raúl', 'hoy', 'no', 'tendríamos', 'credenciales'], accept: ['De no ser por Raúl hoy no tendríamos credenciales', 'De no ser por Raúl no tendríamos credenciales hoy', 'Hoy no tendríamos credenciales de no ser por Raúl', 'No tendríamos credenciales hoy de no ser por Raúl'], en: 'If it weren’t for Raúl, we wouldn’t have badges today.' },
            { tiles: ['Siguiendo', 'estas', 'instrucciones', 'no', 'tendrá', 'ningún', 'problema'], accept: ['Siguiendo estas instrucciones no tendrá ningún problema', 'No tendrá ningún problema siguiendo estas instrucciones'], en: 'If you follow these instructions, you won’t have any problems.' },
            { tiles: ['En', 'caso', 'de', 'incendio', 'no', 'utilice', 'el', 'ascensor'], accept: ['En caso de incendio no utilice el ascensor', 'No utilice el ascensor en caso de incendio'], en: 'In case of fire, do not use the lift.' },
          ] },
        ] },
        { title: 'Con «si» y sin «si» · With and without «si»', blocks: [
          { kind: 'rewrite', title: 'Transforma · Transform', items: [
            { prompt: 'Si se confirma el retraso del vuelo, la ponencia inaugural pasará a la tarde.', instruction: 'Reduce la condición. Empieza: «De…».', accept: ['De confirmarse el retraso del vuelo, la ponencia inaugural pasará a la tarde'] },
            { prompt: 'Si hubiéramos contratado más intérpretes, ahora no habría quejas.', instruction: 'Usa de + infinitivo compuesto. Empieza: «De…».', accept: ['De haber contratado más intérpretes, ahora no habría quejas'] },
            { prompt: 'De no recibir la confirmación antes del viernes, cancelaremos su reserva.', instruction: 'Vuelve a la oración con «si». Ojo: ¿quién recibe la confirmación? Empieza: «Si…».', accept: ['Si no recibimos la confirmación antes del viernes, cancelaremos su reserva', 'Si no recibimos su confirmación antes del viernes, cancelaremos su reserva'] },
            { prompt: 'Si no te inscribes antes, no podrás asistir al taller.', instruction: 'Usa «sin» + infinitivo. Empieza: «Sin…».', accept: ['Sin inscribirte antes, no podrás asistir al taller'] },
            { prompt: 'Si reservas con el código del congreso, pagarás un veinte por ciento menos.', instruction: 'Usa un gerundio condicional. Empieza con el gerundio.', accept: ['Reservando con el código del congreso, pagarás un veinte por ciento menos', 'Reservando con el código del congreso, pagarás un 20 % menos', 'Reservando con el código del congreso, pagarás un 20% menos'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno da tres instrucciones para un acto que conoce (una boda, una mudanza, un examen) con «en caso de», «de + infinitivo» y un gerundio, y dice una frase en la que prefiere mantener «si».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El audio de Carmen', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Para el equipo de voluntarios · For the volunteer team', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada condición sin «si» y la dice con «si». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada condición sin «si» y dila con «si». Carmen es chilena y habla de «ustedes» al equipo. (Carmen is Chilean and addresses the team as «ustedes».)' } },
          { kind: 'listen', title: 'El audio de Carmen', channel: 'NOTA DE VOZ · DE CARMEN PARA LOS VOLUNTARIOS', src: '/audio/grammar-live/472.mp3',
            before: 'Es miércoles, once de la noche. Carmen sale de la sede y manda una nota de voz a los voluntarios. ¿Qué crees que les dice: horarios, problemas, consejos? (Carmen sends the volunteers a voice note late at night. What do you think she tells them?)',
            gist: { prompt: '¿Cuál es la idea principal del mensaje? · What is the main idea?', options: ['Carmen da instrucciones prácticas para mañana y agradece la ayuda de Raúl.', 'Carmen se queja de que los voluntarios no han trabajado.', 'Carmen anuncia que el congreso se aplaza.'], answer: 0, why: 'Habla de la entrada, la lluvia, el plano, las parejas y las credenciales, y termina agradeciendo a Raúl.', en: 'Practical instructions for tomorrow, plus thanks to Raúl.' },
            details: [
              { prompt: '¿Por dónde tienen que entrar los voluntarios que lleguen después de las ocho?', options: ['Por la puerta principal.', 'Por el estacionamiento.', 'Por la puerta lateral.'], answer: 2, why: '«De llegar alguno de ustedes después de las ocho, que entre por la puerta lateral».', en: 'Which door should volunteers use if they arrive after eight?' },
              { prompt: '¿Dónde será la recepción si llueve?', options: ['En el salón Pacífico.', 'En la sala B.', 'En el vestíbulo del segundo piso.'], answer: 2, why: '«En caso de lluvia, la recepción se traslada al vestíbulo del segundo piso».', en: 'Where will the reception desk be if it rains?' },
              { prompt: '¿Qué no deben hacer los voluntarios sin revisar antes la lista?', options: ['Contestar preguntas.', 'Abrir las salas.', 'Entregar credenciales.'], answer: 2, why: '«Sin revisar antes la lista de acreditaciones, no entreguen ninguna credencial».', en: 'What must they not do without checking the list first?' },
              { prompt: '¿Qué habría hecho Carmen de haber sabido lo del proveedor?', options: ['Habría encargado las credenciales en septiembre.', 'Habría cambiado la fecha del congreso.', 'Habría impreso las credenciales ella misma.'], answer: 0, why: '«De haber sabido que el proveedor de las credenciales se iba a retrasar tanto, las habría encargado en septiembre».', en: 'What would Carmen have done had she known about the supplier?' },
            ],
            transcript: 'Hola, equipo, les habla Carmen. Son las once de la noche y acabo de salir de la sede, así que seré breve. Mañana abrimos puertas a las ocho y media. [[De llegar alguno de ustedes|blue]] después de las ocho, que entre por la puerta lateral, porque la principal va a estar ocupada con el montaje del escenario. [[En caso de lluvia|orange]], y el pronóstico no es muy optimista, la recepción se traslada al vestíbulo del segundo piso. [[Con mirar|orange]] el plano que les mandé esta tarde, sabrán dónde está todo. Vamos a superar las trescientas personas, así que nada de improvisar. [[Trabajando en parejas|teal]], como en el ensayo del lunes, no tendrán problemas con las colas. Y, por favor, [[sin revisar|orange]] antes la lista de acreditaciones, no entreguen ninguna credencial. [[De haber sabido|blue]] que el proveedor de las credenciales se iba a retrasar tanto, las habría encargado en septiembre, pero bueno, ya están aquí. [[De no ser por Raúl|blue]], que fue a buscarlas y se ha quedado hasta ahora clasificándolas, mañana tendríamos un problema serio. [[Bien mirado|teal]], hemos tenido suerte. Descansen, que mañana va a ser un día largo. Un abrazo a todos.',
            reply: { teacher: 'Tú eres Carmen. Tu alumno es Gabriel y responde con otra nota de voz: confirma las instrucciones, pregunta qué hacer en un caso concreto («En caso de que…», «De no…») y termina con una frase de ánimo.', self: 'Responde a Carmen como Gabriel, en voz alta: confirma las instrucciones, pregunta qué hacer en un caso concreto («En caso de que…», «De no…») y despídete. (Reply to Carmen as Gabriel.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Consejos, avisos y lamentos', coach: 'Condiciones compactas, con naturalidad. Compact conditions, said naturally.',
      steps: [
        { title: 'Seis situaciones · Six situations', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con situaciones reales. Si usa una forma reducida con sujetos distintos que no se entiende, tú preguntas «¿quién?» y tu alumno reformula con «si».', self: 'Lee cada pregunta y responde en voz alta con ejemplos reales. Antes de reducir una condición, comprueba que el sujeto está claro. (Before reducing a condition, check the subject is clear.)' } },
          { kind: 'talk', cards: [
            { q: 'Un compañero quiere aceptar tres ponencias en el mismo congreso. Aconséjale. · A colleague wants to give three talks at one congress: advise them.', followUps: ['¿Qué le pasará si no te hace caso?', '¿Qué harías tú en su lugar?'], phrases: ['[[De ser yo tú|blue]], [[aceptaría|violet]] solo…', '[[Yo que tú|orange]], …', '[[De aceptar|blue]] las tres, [[vas a acabar|violet]]…'], hint: 'Consejo: de ser yo tú / yo que tú + condicional. Advertencia: de + infinitivo + futuro.', example: 'Yo que tú, aceptaría solo una. De aceptar las tres, vas a acabar agotado y ninguna te va a salir bien. De ser yo tú, elegiría la que más se acerca a tu investigación.', next: 'Ahora, una advertencia.' },
            { q: 'En tu trabajo o en tus estudios algo va mal: el presupuesto, los plazos, el ambiente. Advierte de lo que puede pasar. · Warn about where a problem is heading.', followUps: ['¿Qué solución propones?', '¿Qué bastaría para mejorarlo?'], phrases: ['[[De seguir así|blue]], [[vamos a…|violet]]', '[[Sin cambiar|orange]]…, no [[podremos|violet]]…', '[[Con + infinitivo|orange]]…, [[bastaría|violet]].'], hint: 'De seguir así + futuro; sin + infinitivo como condición negativa; con + infinitivo para la solución mínima.', example: 'De seguir así, vamos a terminar el proyecto con dos meses de retraso. Sin cambiar el sistema de reuniones, no podremos recuperar el ritmo. Con reducir las reuniones a una por semana, bastaría.', next: 'Ahora, un lamento.' },
            { q: 'Un acto que organizaste o al que fuiste salió regular. ¿Qué habrías hecho de otra manera? · An event that went so-so: what would you have done differently?', followUps: ['¿Quién te ayudó?', '¿Qué aprendiste?'], phrases: ['[[De haberlo sabido|blue]], [[habría…|violet]]', '[[De haber empezado|blue]] antes, …', '[[De no ser por|blue]]…, [[habría sido|violet]] un desastre.'], hint: 'De + haber + participio para el pasado no cumplido; de no ser por para agradecer una ayuda.', example: 'De haber sabido que vendría tanta gente, habría alquilado un local más grande. De haber empezado los preparativos antes, no habría estado tan nervioso. De no ser por mi hermana, habría sido un desastre.', teacher: 'Tú preguntas por un detalle concreto y tu alumno responde con otra forma reducida.' },
            { q: 'Explica oralmente tres normas de un lugar que conoces bien: una biblioteca, un gimnasio, una oficina. · State three rules of a place you know, in formal style.', followUps: ['¿Qué pasa si alguien no las cumple?', '¿Alguna norma te parece absurda?'], phrases: ['[[En caso de|orange]] + sustantivo, …', '[[De necesitar|blue]]…, [[diríjase|violet]] a…', '[[Siguiendo|teal]]…, [[evitará|violet]]…'], hint: 'Registro formal: usted, imperativo, en caso de, de + infinitivo, gerundio de instrucción.', example: 'En caso de pérdida del carné, diríjase al mostrador de préstamo. De necesitar una sala de estudio, resérvela con un día de antelación. Siguiendo estas normas, evitará sanciones.' },
            { q: 'Cuenta algo que es más fácil de lo que parece. ¿Qué basta para conseguirlo? · Something easier than it looks: what is enough to achieve it?', followUps: ['¿Y sin eso, qué pasa?', '¿Cómo lo descubriste?'], phrases: ['[[Con|orange]] + infinitivo, [[basta|violet]].', '[[Practicando|teal]]…, [[verás|violet]]…', '[[Sin|orange]] + infinitivo, no…'], hint: 'Con + infinitivo (condición mínima), gerundio condicional y sin + infinitivo.', example: 'Hacer pan en casa es más fácil de lo que parece. Con dejar la masa reposar toda la noche, basta. Practicando un par de fines de semana, verás que te sale perfecto. Eso sí, sin medir bien la harina, no hay manera.' },
            { q: 'Transforma un aviso formal en un mensaje a un amigo, y al revés. · Turn a formal notice into a text to a friend, and vice versa.', followUps: ['¿Qué palabras cambian?', '¿Qué forma reducida se mantiene en los dos registros?'], phrases: ['[[En caso de que|orange]] no pueda asistir, … → Si no puedes venir, …', '[[De ser necesario|blue]]… (en los dos registros)', '[[Bien pensado|teal]], …'], hint: 'Formal: en caso de, de + infinitivo, usted. Informal: si, yo que tú, tú. «De ser así» y «de ser necesario» sirven en los dos.', example: 'Aviso: «En caso de no poder asistir, comuníquelo con antelación». A un amigo: «Si al final no puedes venir, avísame antes, ¿vale? Y, bien pensado, si llueve, lo hacemos en mi casa».', teacher: 'Tú dices el aviso formal y tu alumno lo convierte en un audio informal; después, al revés.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes con algún error a propósito («de tú llegar tarde», «de lo haber sabido», un gerundio con sujeto confuso). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas pensando en otra persona: un compañero, un familiar. (Now ask the questions aloud and answer about someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Indicaciones para ponentes', coach: 'Un correo formal y preciso. A precise formal email.',
      steps: [
        { title: 'El correo del comité · The committee’s email', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada condición sin «si»: ¿a qué oración con «si» equivale? ¿El sujeto está claro? Después tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después repasa cada condición sin «si»: ¿a qué oración con «si» equivale? ¿El sujeto está claro? (Check each reduced condition and its subject.)' } },
          { kind: 'write', title: 'Indicaciones para ponentes · Instructions for speakers', situation: 'Eres Nuria Prats, del comité organizador. Escribe un correo formal a todos los ponentes del congreso con las indicaciones prácticas: entrega de presentaciones, tiempo de cada intervención, acreditación y posibles cambios. (You are Nuria: write a formal email to all the speakers with practical instructions.)', task: [
            'Usa al menos dos veces de + infinitivo (simple o compuesto). (At least two de + infinitive.)',
            'Usa «en caso de» con un sustantivo o un infinitivo.',
            'Usa una condición con «sin» o «con» + infinitivo y un gerundio condicional.',
            'Mantén el registro formal (ustedes, saludo y despedida) y comprueba que el sujeto de cada condición está claro.',
          ], starters: ['Estimados ponentes:', 'Les escribimos para…', 'De no haberlo hecho todavía,', 'En caso de necesitar…,', 'Enviándola en formato PDF,', 'De producirse algún cambio,', 'Reciban un cordial saludo,'],
            words: ['de no haberlo hecho', 'de producirse', 'de surgir', 'en caso de', 'sin ajustarse', 'con presentar', 'enviándola', 'a juzgar por', 'con antelación', 'les rogamos'],
            model: 'Estimados ponentes: Les escribimos para darles algunas indicaciones prácticas antes del congreso. [[De no haberlo hecho|blue]] todavía, les rogamos que envíen su presentación antes del miércoles a las 18:00; [[enviándola|teal]] en formato PDF, evitarán problemas de compatibilidad. Cada intervención dura veinte minutos: [[sin ajustarse|orange]] a ese tiempo, no podrán atender el turno de preguntas. [[En caso de necesitar|orange]] algún equipo especial, como un micrófono inalámbrico o una conexión de vídeo, comuníquenlo a la secretaría con antelación. [[Con presentar|orange]] su acreditación en el mostrador de entrada, recibirán la carpeta y el programa impreso. [[De producirse|blue]] algún cambio de horario, se lo comunicaremos por mensaje y en las pantallas del vestíbulo. Por último, a juzgar por las inscripciones, las salas estarán llenas, así que les aconsejamos llegar quince minutos antes de su intervención. [[De surgir|blue]] cualquier duda, pueden escribirnos a esta misma dirección. Reciban un cordial saludo. Nuria Prats, Comité organizador',
            minWords: 120,
            checks: [
              { label: 'De + infinitivo al empezar una condición', pattern: '(?:^|[.;:!?¡¿,]\\s*)de\\s+(?:no\\s+)?\\p{L}+(?:ar|er|ir)(?:se|lo|la|los|las|le|les|nos)?(?!\\p{L})', tip: 'Empieza una condición con «de + infinitivo»: «De producirse algún cambio, …», «De no haberlo hecho todavía, …».' },
              { label: 'En caso de', pattern: '(?<!\\p{L})en\\s+caso\\s+de(?!\\p{L})', tip: 'Añade una instrucción con «en caso de»: «En caso de necesitar…, comuníquenlo…».' },
              { label: 'Sin o con + infinitivo', pattern: '(?<!\\p{L})(?:sin|con)\\s+\\p{L}+(?:ar|er|ir)(?:se|lo|la|los|las|le|les|nos)?(?!\\p{L})', tip: 'Usa «sin + infinitivo» (condición negativa) o «con + infinitivo» (condición mínima).' },
              { label: 'Un gerundio (comprueba que tenga valor de condición)', pattern: '(?<!\\p{L})(?!cuando(?!\\p{L}))\\p{L}+(?:[aá]ndo|i[eé]ndo|y[eé]ndo)(?:me|te|se|lo|la|los|las|le|les|nos)*(?!\\p{L})', tip: 'Usa un gerundio de instrucción: «Enviándola en formato PDF, evitarán…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})de\\s+(?:lo|la|los|las|le|les|me|te|se|nos)\\s+(?:haber|ser|estar|tener|saber|hacer|poder|recibir|enviar|necesitar)(?!\\p{L})', why: 'Con infinitivo, el pronombre va pegado detrás: «de **haberlo** hecho», «de **necesitarlo**».' },
              { pattern: '(?<!\\p{L})de\\s+(?:yo|tú|él|ella|usted|nosotros|nosotras|ellos|ellas|ustedes)\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', why: 'El sujeto va detrás del infinitivo: «de llegar **usted** tarde», no «de usted llegar».' },
              { pattern: '(?<!\\p{L})en\\s+caso\\s+de\\s+que\\s+(?:\\p{L}+\\s+){0,3}?(?:hay|es|está|puede|tiene|llega|necesita|surge|son|están|pueden|tienen|llegan|necesitan)(?!\\p{L})', why: '«En caso de que» va con subjuntivo: «en caso de que **haya**», «**pueda**», «**necesite**».' },
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
            { tone: 'blue', label: 'DE + INFINITIVO', formula: 'de + infinitivo (simple / compuesto) → el verbo principal decide', example: 'De seguir así, perderemos el patrocinio. · De haberlo sabido, habría reservado otra sala.', caption: 'simple = si + presente o imperfecto de subjuntivo; compuesto = si + pluscuamperfecto', en: 'the infinitive has no tense of its own: the main verb tells you whether the condition is real, hypothetical or past' },
            { tone: 'blue', label: 'EL SUJETO', formula: 'mismo sujeto: de llegar tarde… · otro: de llegar ella tarde…', example: 'De retrasarse el vuelo, Raúl irá al aeropuerto.', caption: 'si el sujeto no queda claro, mantén «si»', en: 'an unexpressed subject is read as the main-clause subject; a different one goes after the infinitive, or you keep si' },
            { tone: 'teal', label: 'GERUNDIO Y PARTICIPIO', formula: 'gerundio + futuro / condicional · bien mirado, visto así', example: 'Siguiendo las flechas, llegará a la sala B.', caption: 'con un hecho pasado, el gerundio no es condición', en: 'the gerund is conditional only before a future, hypothetical or general result; participle formulas are fixed' },
            { tone: 'orange', label: 'OTRAS FÓRMULAS', formula: 'en caso de (que) · sin / con + infinitivo · de no ser por · a juzgar por', example: 'En caso de lluvia, la cena será en el salón Pacífico.', caption: 'en caso de que + subjuntivo; sin = si no; con = basta con', en: 'en caso de for notices, sin for negative conditions, con for minimal ones; en caso de que takes the subjunctive' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de quitar el «si», haz tres preguntas. ¿Es de verdad una condición? ¿El sujeto es el mismo, o puedo ponerlo detrás del infinitivo sin ambigüedad? ¿El registro lo pide? En una guía o un correo formal, **de + infinitivo** y **en caso de** dan precisión; en la conversación, **si** y **yo que tú** suenan más naturales.', en: 'Before dropping si, ask three questions: is it really a condition? Is the subject shared, or can I place it after the infinitive without ambiguity? Does the register call for it? Reduced forms bring precision to formal writing; si and yo que tú sound more natural in conversation.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'De ___ el tren a su hora, llegaremos antes del almuerzo.', options: ['saliera', 'sale', 'salir'], answer: 2, why: 'Tras «de» condicional, infinitivo; el sujeto (el tren) va detrás. Resultado futuro: = si sale.', en: 'If the train leaves on time, we’ll arrive before lunch.' },
            { prompt: 'De haber leído la letra pequeña, no ___ ese contrato.', options: ['firmé', 'firmara', 'habría firmado'], answer: 2, why: 'Condición pasada no cumplida: el resultado pasado va en condicional compuesto.', en: 'Had I read the small print, I wouldn’t have signed that contract.' },
            { prompt: '___ un poco cada día, en junio hablarás con soltura.', options: ['Practicando', 'Practicado', 'Practicar'], answer: 0, why: 'Gerundio condicional con resultado futuro: = si practicas.', en: 'If you practise a little every day, you’ll speak fluently by June.' },
            { prompt: '¿Qué oración NO admite una forma reducida con «de + infinitivo»?', options: ['Si llueve, cancelaremos la excursión.', 'No sé si iré a la cena.', 'Si tuviera tiempo, te ayudaría.'], answer: 1, why: 'En «No sé si iré», «si» introduce una pregunta indirecta, no una condición.', en: 'Which sentence cannot be reduced to de + infinitive?' },
            { prompt: 'En caso de que ___ algún problema con la reserva, llame a recepción.', options: ['tenga', 'tendrá', 'tiene'], answer: 0, why: '«En caso de que» exige subjuntivo.', en: 'Should you have any problem with your booking, call reception.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en la montaña. Now, in the mountains.', blocks: [
          { kind: 'lead', text: 'Ester Robles guía un grupo de senderismo en los Andes y escribe las normas del refugio. Reduce sus condiciones.', en: 'Ester Robles leads a hiking group in the Andes and is writing the mountain hut rules. Reduce her conditions.' },
          { kind: 'rewrite', title: 'Las normas del refugio · The mountain hut rules', items: [
            { prompt: 'Si el tiempo empeora, regresen al refugio.', instruction: 'Empieza: «De…».', accept: ['De empeorar el tiempo, regresen al refugio'] },
            { prompt: 'Si no llevan crampones, no podrán cruzar el glaciar.', instruction: 'Usa «sin». Empieza: «Sin…».', accept: ['Sin llevar crampones, no podrán cruzar el glaciar', 'Sin crampones, no podrán cruzar el glaciar'] },
            { prompt: 'Si hubiéramos salido antes, habríamos visto el amanecer desde la cumbre.', instruction: 'Empieza: «De…».', accept: ['De haber salido antes, habríamos visto el amanecer desde la cumbre'] },
          ] },
        ] },
        { title: 'Ampliación · Valores cercanos y formas literarias · Related meanings', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: las mismas construcciones pueden expresar concesión, tiempo o una condición en registro literario.', en: 'For strong students or spare time: the same constructions can express concession or time, or appear in literary conditionals.' },
          { kind: 'choice', title: '¿Qué valor tiene? · What does it mean?', items: [
            { prompt: '«Con ser tan experta, Ester se perdió en la bajada». ¿Qué valor tiene «con ser»?', options: ['Condición: si es tan experta', 'Concesión: aunque es tan experta', 'Causa: porque es tan experta'], answer: 1, why: 'Con + infinitivo puede ser concesivo cuando el resultado contradice lo esperado: «aunque es tan experta». Es un uso cuidado.', en: '“Con ser tan experta” here means “expert as she is”: a concession.' },
            { prompt: '«A no ser por la niebla, habríamos llegado a la cumbre». ¿A qué equivale?', options: ['Aunque había niebla, llegamos.', 'Cuando se fue la niebla, llegamos.', 'Si no hubiera sido por la niebla, habríamos llegado.'], answer: 2, why: '«A no ser por» equivale a «de no ser por»: una condición negativa. Es algo más formal.', en: '“A no ser por” is a slightly more formal “de no ser por”: “if it hadn’t been for”.' },
            { prompt: '«Bajando del refugio, vimos un cóndor». ¿Es una condición?', options: ['No: indica tiempo (cuando bajábamos)', 'Sí: si hubiéramos bajado…', 'Sí: si bajábamos…'], answer: 0, why: 'El resultado es un hecho pasado (vimos): el gerundio es temporal, no condicional.', en: 'With a past event, the gerund means “as we were coming down”.' },
            { prompt: '¿Qué versión es la más natural en un audio informal a un amigo?', options: ['En caso de ser yo tú, no subiría solo.', 'De ser yo tú, no subiría solo.', 'Yo que tú, no subiría solo.'], answer: 2, why: '«Yo que tú» es la opción oral y general; «de ser yo tú» es correcta pero más cuidada, y «en caso de ser yo tú» no se usa.', en: 'Which version sounds most natural in a casual voice message?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno inventa una frase concesiva con «con + infinitivo» y otra con un gerundio temporal, y explica por qué ninguna es una condición.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 173 · Modalidad epistémica: evidencialidad y grados de certeza', text: 'Ya expresas condiciones con precisión y eliges la forma según el sujeto y el registro. En la clase 173 das otro paso en la misma dirección: matizar cuánto sabes y de dónde lo sabes («al parecer», «por lo visto», «a lo mejor», «es posible que»…). Condiciones e hipótesis comparten ese terreno de lo que todavía no es seguro, así que es el paso natural.', en: 'You can now express conditions precisely and choose the form by subject and register. Class 173 takes the next step: showing how certain you are and where your information comes from (apparently, it seems, maybe, it is possible that…). Conditions and hypotheses share that territory of what is not yet certain, so it is the natural next step.', href: '/gramatica/modalidad-epistemica-evidencialidad-y-grados-de', label: 'Ir a la clase 173' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué consejo darías a alguien que organiza su primer evento?». Respuesta esperada: «yo que tú» o «de ser yo tú», una advertencia con «de + infinitivo» y una instrucción con «en caso de». Tarea: el correo de Escribir.' },
        ] },
      ],
    },
  ],
};
