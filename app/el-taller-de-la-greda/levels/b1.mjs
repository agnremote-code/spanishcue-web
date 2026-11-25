// «El taller de la greda» · B1 · Conversación data (authoritative for the world).
//
// Author: Martin (CLRQO), docs/board/content/taller-greda-b1-conversacion.md
// (2026-11-23). Transcribed into the Feria house shape by Sofia (2026-11-25)
// without changing the pedagogy. G4 review: Alejandro or a fresh agent (never
// Martin). The listening is app/escucha-3d/content/taller/b1.json (`taller` in
// app/escucha-3d/games.mjs); this file is the Conversación mode of the same world.
// Validate with: node scripts/check-taller-greda.mjs
//
// Shape (house style of app/la-feria-de-villaluz/levels/a2.mjs, BD-001 fields):
// - title, place, task (communicative task), line (scene line), dialogue
//   ([castKey, text]; empty when the doc has none), talk (5), words (6),
//   scaffolding, teacher.
// - objective (primary B1 id), related, exponents (G1).
// - beats, in order. kind "contrast" = linguistic contrast: exactly one correct
//   option; every wrong option names the `feature` it gets wrong and its
//   `feedback` says why. kind "stimulus" = conversation stimulus, never scored:
//   `options` (say / reply / end / mood) or `frames` (open reply).
// - cast: who is on stage at the circle (the 3D world places them there).
// - handoff: «El recado viaja», the message the student carries to the next
//   station (the 3D prop of the order moves one station along when the circle is done).
// - opening (circle 5), production (circles 5 and 7): the doc's production tasks.
//
// Transcription notes (format only, listed in the build report): inner "…"
// quotes became «…»; the doc's board annotations (objective ids, «HYPOTHESIS,
// ver §10») are kept in the fields above and not shown inside teacher notes;
// English stage notes of the doc (route table, circle 5 fact card) are in Spanish here.
//
// Language: neutral international Spanish, tú with the student; the clients
// (Valentina, Andrés) speak usted. No voseo, no regional particles in any line.

export const SPOTS = ['mostrador', 'greda', 'torno', 'secadero', 'horno', 'esmaltes', 'oficina', 'patio'];

// One voice per character for the whole world (scenes and listenings), from
// app/escucha-3d/voices.json. `phone` = only heard on the phone or in an audio.
export const CAST = {
  marina: { name: 'Marina', full: 'Marina', role: 'Dueña del taller, ceramista', gender: 'f', voice: 'es-CO-SalomeNeural', country: 'Colombia' },
  gonzalo: { name: 'Gonzalo', full: 'Gonzalo', role: 'Tornero, hermano de Marina', gender: 'm', voice: 'es-CO-GonzaloNeural', country: 'Colombia' },
  paola: { name: 'Paola', full: 'Paola', role: 'Aprendiz de segundo año, esmaltes', gender: 'f', voice: 'es-VE-PaolaNeural', country: 'Venezuela' },
  emilio: { name: 'Emilio', full: 'Emilio', role: 'Encargado del secadero y del horno', gender: 'm', voice: 'es-DO-EmilioNeural', country: 'República Dominicana' },
  valentina: { name: 'Valentina', full: 'Valentina', role: 'Dueña del restaurante de Bogotá (clienta)', gender: 'f', voice: 'es-UY-ValentinaNeural', country: 'Uruguay', phone: true },
  andres: { name: 'Andrés', full: 'Andrés', role: 'Chef del restaurante de Valentina', gender: 'm', voice: 'es-GT-AndresNeural', country: 'Guatemala', phone: true },
  roberto: { name: 'Roberto', full: 'Roberto', role: 'Transportista', gender: 'm', voice: 'es-PA-RobertoNeural', country: 'Panamá' },
};

export const ROLE = 'Eres la persona nueva del taller. Ayudas en todo y llevas los recados.';

export const CIRCLES = {
  mostrador: {
    title: 'Un recado para Marina',
    place: 'El mostrador del taller, con el teléfono fijo y un cuaderno de pedidos',
    cast: ['gonzalo'],
    objective: 'b1.fun.w07-pedir-requisitos',
    related: ['b1.gram.g100', 'b1.gram.g099'],
    exponents: [
      { id: 'busco-que', form: 'Busco / necesito + algo que + subjuntivo', use: 'requisito de algo que todavía no existe: «necesito platos que aguanten el lavaplatos»' },
      { id: 'para-que', form: 'para que + subjuntivo', use: 'finalidad con otro sujeto: «para que usted vea el color»' },
      { id: 'que-sean', form: 'Que sean / que tengan…', use: 'requisito abreviado al teléfono' },
      { id: 'apuntar-recado', form: '¿Le dejo algún recado? / Le doy el mensaje apenas llegue', use: 'tomar y dejar un recado' },
    ],
    task: 'Marina no está. Tú contestas el teléfono con Gonzalo, anotas qué quiere la clienta y para qué, y después le dejas el recado a Marina por escrito.',
    line: 'Es lunes, ocho de la mañana. Marina salió temprano al mercado. Suena el teléfono del taller y Gonzalo, con las manos llenas de barro, te pide que contestes tú.',
    dialogue: [
      ['gonzalo', 'Contesta tú, porfa, que yo tengo las manos así. Y apunta todo, que Marina luego pregunta.'],
      ['valentina', 'Buenos días. Tengo un restaurante en Bogotá y vamos a abrir otro local. Necesito una vajilla completa.'],
      ['gonzalo', '(bajito) Pregúntale cómo la quiere. Y para cuándo.'],
    ],
    beats: [
      {
        id: 'requisito', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['busco-que'], who: 'valentina',
        context: 'Valentina explica lo que busca. Tú lo repites para confirmarlo.',
        prompt: 'Confirma el requisito más importante de la clienta.',
        options: [
          { id: 'aguanten', label: 'Entonces usted necesita platos que aguanten el lavaplatos, ¿verdad?', correct: true,
            feedback: 'Bien: los platos todavía no existen, por eso «que aguanten», en subjuntivo.' },
          { id: 'aguantan', label: 'Entonces usted necesita platos que aguantan el lavaplatos, ¿verdad?', correct: false, feature: 'modo en la relativa',
            feedback: 'Modo en la relativa: «que aguantan» habla de unos platos que ya conoces. Estos todavía hay que hacerlos: «que aguanten».' },
          { id: 'para-aguantar', label: 'Entonces usted necesita platos para aguantar el lavaplatos, ¿verdad?', correct: false, feature: 'requisito o finalidad',
            feedback: 'Requisito o finalidad: «para aguantar» dice para qué los quiere ella, no cómo tienen que ser los platos.' },
        ],
        after: 'Valentina: «Exacto. En la cocina no hay tiempo para lavar a mano.»',
      },
      {
        id: 'muestra', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['para-que'], who: 'valentina',
        context: 'Gonzalo te dice al oído: «Dile que primero mandamos una muestra.»',
        prompt: 'Explícale a la clienta para qué sirve la muestra.',
        options: [
          { id: 'para-ver', label: 'Primero le mandamos una muestra para ver usted el color.', correct: false, feature: 'sujeto distinto',
            feedback: 'Sujeto distinto: mandas tú y mira ella. Con dos sujetos va «para que» + subjuntivo.' },
          { id: 'para-que-vea', label: 'Primero le mandamos una muestra para que usted vea el color y el peso.', correct: true,
            feedback: 'Bien: «para que usted vea», otro sujeto, subjuntivo.' },
          { id: 'para-que-ve', label: 'Primero le mandamos una muestra para que usted ve el color y el peso.', correct: false, feature: 'modo después de «para que»',
            feedback: 'Modo: después de «para que» siempre va subjuntivo: «vea», no «ve».' },
        ],
        after: 'Valentina: «Perfecto. Que me la manden esta semana, si se puede.»',
      },
      {
        id: 'valentina', kind: 'stimulus', label: 'Estímulo de conversación', who: 'valentina',
        ask: 'Valentina pregunta: «¿Y ustedes hacen piezas con el nombre del restaurante?» (Marina no lo sabe todavía; tú decides qué contestar.)',
        options: [
          { say: 'No lo sé, pero se lo pregunto a Marina y la llamamos.', reply: 'Muy bien, mejor así.', end: 'Anotas la pregunta en el cuaderno, con un signo de interrogación grande.', mood: 'smile' },
          { say: 'Sí, claro, hacemos de todo.', reply: '¡Qué bien! Entonces quiero el logo en cada taza.', end: 'Gonzalo te mira con cara de «¿y ahora quién hace cuarenta logos?».', mood: 'surprised' },
          { say: 'Creo que no, pero ¿para qué lo necesita?', reply: 'Para que los clientes se acuerden del lugar.', end: 'Anotas la idea para Marina: no prometiste nada.', mood: 'smile' },
        ],
        teacher: 'No hay respuesta correcta. Pregunta a la clase cuál es la opción más profesional y por qué: prometer algo que no depende de ti tiene consecuencias.',
      },
    ],
    handoff: { who: 'gonzalo', text: 'Llévale el cuaderno a Paola, a la mesa de la greda. Marina le va a mandar un audio.', prop: 'El cuaderno de pedidos pasa a la mesa de la greda.' },
    talk: [
      '¿Qué es lo más importante para ti cuando compras algo para tu casa?',
      '¿Alguna vez encargaste algo hecho a medida? ¿Cómo explicaste lo que querías?',
      '¿Prefieres hablar por teléfono o escribir cuando haces un pedido? ¿Por qué?',
      '¿Qué haces cuando contestas un teléfono que no es tuyo?',
      'Si tuvieras un restaurante, ¿qué tipo de platos buscarías?',
    ],
    words: ['la vajilla', 'el recado', 'la muestra', 'aguantar', 'el lavaplatos (o lavavajillas)', 'color tierra'],
    scaffolding: 'En la pizarra, antes del círculo: «Necesito algo que + subjuntivo» / «Lo mando para que usted + subjuntivo». Tarjeta para el recado: «Llamó ___. Dijo que ___. Quiere que ___.»',
    teacher: 'Antes de empezar, pregunta: ¿qué datos anotas cuando tomas un recado? (quién, qué, para qué, para cuándo, cómo contactarla). Después del círculo, cada pareja escribe el recado para Marina en tres líneas con el marco de la tarjeta. Es el primer recado del mundo: no corrijas todavía los tiempos del estilo indirecto, solo que esté completo.',
  },

  greda: {
    title: 'Un audio desde la carretera',
    place: 'La mesa de la greda, con sacos, una mesa de amasar y un rincón con piezas tapadas con plástico',
    cast: ['paola'],
    objective: 'b1.voc.w16-taller-artesania',
    related: ['b1.read.w16-como-se-hace'],
    exponents: [
      { id: 'greda-barro', form: 'la greda, el barro', use: 'vocabulario del taller: la materia prima' },
      { id: 'amasar', form: 'amasar', use: 'vocabulario del taller: preparar la greda' },
      { id: 'torno', form: 'el torno', use: 'vocabulario del taller: la máquina que gira' },
      { id: 'muestra-anticipo', form: 'la muestra, el anticipo', use: 'vocabulario del encargo' },
      { id: 'plazo-envio', form: 'el plazo de entrega, el envío', use: 'vocabulario del encargo' },
    ],
    task: 'Paola y tú escuchan el audio de Marina y ordenan las tareas de la tarde. Usan el vocabulario del taller para explicar qué hay que hacer y en qué orden.',
    line: 'Paola tiene el teléfono en la mano: «Escucha esto conmigo, que Marina habla rapidísimo.»',
    dialogue: [],
    beats: [
      {
        id: 'palabra', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['greda-barro'], who: 'paola',
        context: 'Paola: «¿Cómo le explico a la gente de Bogotá qué es la greda?»',
        prompt: 'Elige la mejor explicación.',
        options: [
          { id: 'tierra', label: 'Es la tierra arcillosa con la que hacemos las piezas: el barro antes de trabajarlo.', correct: true,
            feedback: 'Bien: explicas una palabra local con palabras generales.' },
          { id: 'pintura', label: 'Es la pintura brillante que se pone al final.', correct: false, feature: 'significado',
            feedback: 'Significado: eso es el esmalte. La greda es la materia prima.' },
          { id: 'maquina', label: 'Es la máquina que gira para dar forma.', correct: false, feature: 'significado',
            feedback: 'Significado: eso es el torno.' },
        ],
      },
      {
        id: 'orden', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['amasar'], who: 'paola',
        context: 'Paola anota las tareas en un papel, pero se equivoca de orden.',
        prompt: 'Elige el orden correcto del trabajo con la greda.',
        options: [
          { id: 'torno-primero', label: 'Primero se lleva al torno, después se amasa y al final se moja.', correct: false, feature: 'secuencia del proceso',
            feedback: 'Secuencia: la greda no se tornea sin amasar. Primero se revisa la humedad y se amasa.' },
          { id: 'esmalte-primero', label: 'Primero se esmalta, después se amasa y al final se tornea.', correct: false, feature: 'secuencia del proceso',
            feedback: 'Secuencia: el esmalte va al final, sobre la pieza ya quemada una vez.' },
          { id: 'humedad', label: 'Primero se revisa que no esté seca, después se amasa y al final se hacen bolas para el torno.', correct: true,
            feedback: 'Bien: humedad, amasado, bolas para el torno.' },
        ],
      },
      {
        id: 'paola', kind: 'stimulus', label: 'Estímulo de conversación', who: 'paola',
        ask: 'Paola: «Llevo dos años aquí y todavía me cuesta el torno. ¿Tú qué preferirías aprender primero?»',
        frames: [
          { id: 'preferiria', label: 'Preferiría aprender ___ porque ___.' },
          { id: 'miedo', label: 'A mí me daría miedo ___.' },
          { id: 'empezaria', label: 'Yo empezaría por ___.' },
        ],
        teacher: 'Respuesta libre. Pide una razón con «porque» y una palabra del taller.',
      },
    ],
    handoff: { who: 'paola', text: 'Llévale estas seis bolas a Gonzalo y pregúntale qué dijo exactamente la clienta. Marina me dejó con dudas.', prop: 'Las bolas de greda pasan al torno.' },
    talk: [
      '¿Mandas audios largos o cortos? ¿Qué te molesta de los audios de otras personas?',
      '¿Hay en tu ciudad un oficio artesanal conocido? ¿Cuál?',
      '¿Qué cosas de tu casa están hechas a mano?',
      '¿Qué es más difícil para ti: seguir instrucciones orales o escritas?',
      '¿Te gustaría trabajar con las manos? ¿En qué?',
    ],
    words: ['la greda', 'el barro', 'amasar', 'el torno', 'el horno', 'el plástico'],
    scaffolding: 'Una tira de dibujos del proceso, sin palabras (greda → amasar → torno → secadero → horno → esmalte → horno): la clase pone el nombre a cada paso. Glosario de la escucha.',
    teacher: '«Greda» es la palabra que usa el taller; «arcilla» y «barro» son las generales. En Colombia también se oye «greda» fuera del taller. Ojo: «torno» y «horno» se parecen mucho al oído; pide que los pronuncien con la mano en la garganta (la t no vibra). Esa pareja no se usa nunca como respuesta en la escucha.',
  },

  torno: {
    title: '¿Qué dijo exactamente?',
    place: 'El torno de Gonzalo, con platos frescos en una tabla',
    cast: ['gonzalo', 'paola'],
    objective: 'b1.gram.g118',
    related: ['b1.pron.w16-pregunta-referida', 'b1.disc.w16-voces-y-procesos'],
    exponents: [
      { id: 'dijo-que-imperfecto', form: 'dijo que + imperfecto', use: 'presente → imperfecto: «quiero» → «dijo que quería»' },
      { id: 'dijo-que-pluscuamperfecto', form: 'dijo que + pluscuamperfecto', use: 'pasado → pluscuamperfecto: «vi su página» → «dijo que había visto»' },
      { id: 'pregunto-si', form: 'preguntó si…', use: 'pregunta sí/no, frente a «preguntó cuándo / cuánto…»' },
      { id: 'pidio-que-subjuntivo', form: 'pidió que + imperfecto de subjuntivo', use: '«mándenme» → «pidió que le mandáramos»' },
      { id: 'dice-que-modo', form: 'dice que + indicativo / dice que + subjuntivo', use: 'información frente a petición' },
    ],
    task: 'Gonzalo cuenta la llamada de la mañana. Tú le haces preguntas y después le cuentas a Paola, sin cambiar el sentido, lo que dijo, preguntó y pidió la clienta.',
    line: 'Gonzalo no para el torno mientras habla. Paola llega con el cuaderno del mostrador.',
    dialogue: [
      ['gonzalo', 'La señora habló como diez minutos. Lo importante: platos hondos, planos y tazas, color tierra.'],
      ['paola', '¿Y qué preguntó? Marina va a querer saberlo todo.'],
    ],
    beats: [
      {
        id: 'informa-o-pide', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['dice-que-modo'], who: 'gonzalo',
        context: 'La clienta, por teléfono: «Les traigo yo las fotos del local.» Paola pregunta: «¿Qué dice?»',
        prompt: 'Cuéntale a Paola lo que dice la clienta.',
        options: [
          { id: 'trae', label: 'Dice que nos trae ella las fotos del local.', correct: true,
            feedback: 'Bien: es una información, por eso indicativo: «trae».' },
          { id: 'traigamos', label: 'Dice que le traigamos las fotos del local.', correct: false, feature: 'información o petición',
            feedback: 'Información o petición: «que le traigamos» sería una petición, y ella no pidió nada: ofreció traerlas.' },
          { id: 'traiga', label: 'Dice que nos traiga ella las fotos del local.', correct: false, feature: 'modo en el estilo indirecto',
            feedback: 'Modo: «decir que» + subjuntivo convierte la frase en una orden. Ella informa: «trae».' },
        ],
        after: 'Paola: «Ah, bueno, entonces no hay que pedírselas.»',
      },
      {
        id: 'pidio-que', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['pidio-que-subjuntivo'], who: 'gonzalo',
        context: 'Esta vez la clienta dijo: «Mándenme una muestra esta semana, por favor.»',
        prompt: 'Cuéntale a Paola, en pasado, lo que pidió la clienta.',
        options: [
          { id: 'mandamos', label: 'Pidió que le mandamos una muestra esta semana.', correct: false, feature: 'modo después de «pedir que»',
            feedback: 'Modo: «pedir que» siempre lleva subjuntivo. En pasado: «que le mandáramos».' },
          { id: 'semana-pasada', label: 'Pidió que le mandemos una muestra la semana pasada.', correct: false, feature: 'referencia de tiempo',
            feedback: 'Referencia de tiempo: «esta semana» no se vuelve «la semana pasada». Si lo cuentas el mismo día, sigue siendo «esta semana».' },
          { id: 'mandaramos', label: 'Pidió que le mandáramos una muestra esta semana.', correct: true,
            feedback: 'Bien: «pidió que» + imperfecto de subjuntivo. Y «esta semana» no cambia porque lo cuentas la misma semana.' },
        ],
        after: 'Paola: «Esta semana… Uy. El horno grande está lleno.»',
      },
      {
        id: 'pregunto-si', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['pregunto-si'], who: 'paola',
        context: 'La clienta preguntó: «¿Pueden entregar todo antes de la inauguración?»',
        prompt: 'Cuéntale a Paola la pregunta de la clienta.',
        options: [
          { id: 'que', label: 'Preguntó que podemos entregar todo antes de la inauguración.', correct: false, feature: 'pregunta sí/no contada',
            feedback: 'Pregunta sí/no: se cuenta con «si», no con «que».' },
          { id: 'si', label: 'Preguntó si podíamos entregar todo antes de la inauguración.', correct: true,
            feedback: 'Bien: «preguntó si» + imperfecto («podemos» → «podíamos»).' },
          { id: 'cuando', label: 'Preguntó cuándo podíamos entregar todo antes de la inauguración.', correct: false, feature: 'tipo de pregunta',
            feedback: 'Tipo de pregunta: ella no preguntó «cuándo»; preguntó sí o no. «Cuándo» cambia la pregunta.' },
        ],
        after: 'Gonzalo: «Eso. Y yo le dije que eso lo decide Marina.»',
        teacher: 'Momento de pronunciación guiado por ti (objetivo relacionado, no evaluado por la aplicación): la clase dice la pregunta directa con el tono que sube y la contada con el tono que baja. La aplicación no puede comprobarlo.',
      },
      {
        id: 'dijo-que', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['dijo-que-imperfecto', 'dijo-que-pluscuamperfecto'], who: 'gonzalo',
        context: 'La clienta dijo: «Vi sus platos en una feria y me encantaron.»',
        prompt: 'Cuéntaselo a Paola.',
        options: [
          { id: 'nuestros', label: 'Dijo que había visto nuestros platos en una feria y que le habían encantado.', correct: true,
            feedback: 'Bien: pasado → pluscuamperfecto, y «sus platos» → «nuestros platos» porque ahora habla alguien del taller.' },
          { id: 'sus', label: 'Dijo que había visto sus platos en una feria y que le habían encantado.', correct: false, feature: 'cambio de persona',
            feedback: 'Cambio de persona: «sus platos» era la clienta hablándole al taller. Contado desde el taller son «nuestros platos».' },
          { id: 'vera', label: 'Dijo que verá nuestros platos en una feria y que le encantarán.', correct: false, feature: 'tiempo verbal',
            feedback: 'Tiempo: ella habló del pasado («vi»). En el relato va pluscuamperfecto, no futuro.' },
        ],
      },
      {
        id: 'gonzalo', kind: 'stimulus', label: 'Estímulo de conversación', who: 'gonzalo',
        ask: 'Gonzalo: «Yo solo hago platos. ¿A ti te gusta llevar recados o te pone nervioso?»',
        options: [
          { say: 'Me gusta, pero siempre lo apunto, porque se me olvidan los detalles.', reply: 'Eso hacía yo de joven. Ahora Marina me lo apunta a mí.', end: 'Gonzalo se ríe y casi deforma un plato.', mood: 'laugh' },
          { say: 'Me pone nervioso cambiar algo sin querer.', reply: 'Por eso hay que preguntar: «¿Qué dijo exactamente?»', end: 'Gonzalo te enseña su truco: repetir el recado antes de irse.', mood: 'surprised' },
          { say: 'Prefiero que la gente se hable directamente.', reply: 'Ojalá. Aquí nadie contesta el teléfono.', end: 'Suena el teléfono del mostrador. Nadie lo contesta.', mood: 'laugh' },
        ],
        teacher: 'No hay respuesta correcta.',
      },
    ],
    handoff: { who: 'paola', text: 'Llévale esta tabla de platos a Emilio, al secadero, y pregúntale si nos deja espacio en el horno pequeño.', prop: 'La tabla de platos pasa al secadero.' },
    talk: [
      'Cuenta un recado que alguien te dejó y que llegó cambiado. ¿Qué cambió?',
      '¿Qué te preguntó alguien esta semana? Cuéntalo con «me preguntó si…» o «me preguntó qué…».',
      '¿Qué te pidió tu familia o tu jefe la última vez? Cuéntalo con «me pidió que…».',
      '¿Qué palabras cambian cuando cuentas lo que dijo otra persona? Da un ejemplo.',
      '¿Es fácil para ti repetir un mensaje sin cambiar el sentido? ¿Por qué?',
    ],
    words: ['dijo que…', 'preguntó si…', 'pidió que…', 'la inauguración', 'exactamente', 'el sentido'],
    scaffolding: 'En la pizarra, una tabla de tiempos: presente → imperfecto; pasado → pluscuamperfecto; futuro → condicional; imperativo → «pidió que» + imperfecto de subjuntivo. Y una fila de referencias: aquí → allí; esta semana → esa semana (solo si se cuenta más tarde); yo → él / ella; mi / su → su / nuestro.',
    teacher: 'Este es el círculo de gramática del mundo. Los cuatro contrastes van de lo más frecuente a lo más difícil: informar o pedir, pedir que + subjuntivo, preguntar si, y el pluscuamperfecto con cambio de persona. Si la clase falla el primero, para y haz tres ejemplos orales: «Dice que viene» / «Dice que vengas». En la escucha de este círculo no hay ninguna pregunta que dependa del modo ni de la entonación: esas diferencias se practican aquí, por escrito.',
  },

  secadero: {
    title: 'Despacio, que se raja',
    place: 'El secadero, con estantes de madera, piezas tapadas y una caja de piezas con grietas',
    cast: ['emilio'],
    objective: 'b1.gram.g119',
    related: ['b1.read.w16-como-se-hace', 'b1.disc.w16-voces-y-procesos'],
    exponents: [
      { id: 'se-pasiva-plural', form: 'se + verbo en plural con cosa plural', use: '«se dejan las piezas»' },
      { id: 'se-pasiva-singular', form: 'se + verbo en singular con cosa singular', use: '«se revisa cada plato»' },
      { id: 'se-impersonal', form: 'se + verbo en singular sin cosa', use: '«aquí no se entra con comida»' },
      { id: 'uno-dicen', form: 'uno / dicen que', use: 'otras formas de hablar en general' },
    ],
    task: 'Emilio te explica cómo se secan las piezas. Después tú le explicas el proceso a una persona que visita el taller, sin decir quién hace cada cosa.',
    line: 'Huele a tierra mojada. Emilio levanta un plástico con cuidado: «Aquí nada se apura.»',
    dialogue: [],
    beats: [
      {
        id: 'concordancia', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['se-pasiva-plural'], who: 'emilio',
        context: 'Una visitante pregunta: «¿Y cuánto tiempo están aquí las piezas?»',
        prompt: 'Explícale el primer paso.',
        options: [
          { id: 'deja', label: 'Se deja las piezas unos días lejos de la ventana.', correct: false, feature: 'concordancia con «se»',
            feedback: 'Concordancia: la cosa es plural («las piezas»), así que el verbo va en plural: «se dejan».' },
          { id: 'dejan', label: 'Se dejan las piezas unos días lejos de la ventana.', correct: true,
            feedback: 'Bien: «se dejan las piezas», el verbo concuerda con la cosa.' },
          { id: 'a-las', label: 'Se dejan a las piezas unos días lejos de la ventana.', correct: false, feature: '«a» con cosas',
            feedback: '«a» con cosas: «se + verbo + a» se usa con personas concretas («se busca a los dueños»), no con piezas.' },
        ],
      },
      {
        id: 'impersonal', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['se-impersonal'], who: 'emilio',
        context: 'La visitante quiere entrar con un café.',
        prompt: 'Dile la regla del secadero sin decir quién la puso.',
        options: [
          { id: 'se-entra', label: 'Perdón, aquí no se entra con comida ni bebida.', correct: true,
            feedback: 'Bien: «se entra», impersonal, en singular porque no hay cosa.' },
          { id: 'se-entran', label: 'Perdón, aquí no se entran con comida ni bebida.', correct: false, feature: 'singular sin cosa',
            feedback: 'Singular: no hay una cosa que concuerde; con «se» impersonal el verbo va en singular.' },
          { id: 'usted', label: 'Perdón, aquí usted no entra con comida ni bebida.', correct: false, feature: 'proceso o persona',
            feedback: 'Proceso o persona: es correcto, pero suena a orden personal. La regla es para todos: «no se entra».' },
        ],
      },
      {
        id: 'uno', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['uno-dicen'], who: 'emilio',
        context: 'Emilio: «Dile cómo se sabe que una pieza está seca, como lo diría cualquiera.»',
        prompt: 'Elige la frase con el mismo sentido que «se sabe que está seca cuando cambia de color».',
        options: [
          { id: 'uno-sabes', label: 'Uno sabes que está seca cuando cambia de color.', correct: false, feature: 'persona con «uno»',
            feedback: 'Persona: «uno» va con el verbo en tercera persona: «uno sabe».' },
          { id: 'dice', label: 'Dice que está seca cuando cambia de color.', correct: false, feature: '«dice» o «dicen»',
            feedback: '«dice» habla de una persona concreta; la idea general es «dicen» o «uno sabe».' },
          { id: 'uno-sabe', label: 'Uno sabe que está seca cuando cambia de color.', correct: true,
            feedback: 'Bien: «uno» + tercera persona es otra forma de hablar en general.' },
        ],
      },
      {
        id: 'emilio', kind: 'stimulus', label: 'Estímulo de conversación', who: 'emilio',
        ask: 'Emilio: «En mi trabajo lo más importante es la paciencia. ¿Y en el tuyo?»',
        frames: [
          { id: 'importante', label: 'En mi trabajo lo más importante es ___.' },
          { id: 'no-se-puede', label: 'En mi trabajo no se puede ___.' },
          { id: 'alli-se', label: 'Allí se ___ todos los días.' },
        ],
        teacher: 'Respuesta libre. Pide al menos una frase con «se».',
      },
    ],
    handoff: { who: 'emilio', text: 'Dile a Marina que la muestra entra en el horno pequeño el jueves. Ella está en la oficina.', prop: 'La muestra espera en el horno pequeño.' },
    talk: [
      '¿Cómo se prepara un plato típico de tu país? Explícalo con «se».',
      '¿Qué no se puede hacer en tu trabajo o en tu escuela?',
      '¿Qué se dice en tu país cuando alguien tiene mucha prisa?',
      '¿Qué cosa se hace mejor despacio?',
      '¿Qué se recicla en tu ciudad y qué no?',
    ],
    words: ['el secadero', 'rajarse', 'la grieta', 'la quema', 'se deja / se dejan', 'se prohíbe'],
    scaffolding: 'Dos columnas en la pizarra: «quién lo hace» (Emilio deja las piezas) / «se hace» (se dejan las piezas). La clase pasa tres frases de Emilio de una columna a la otra.',
    teacher: 'Este círculo es de proceso, no de recado: sirve de descanso y prepara el texto de la semana 16 (cómo se hace una pieza). Insiste en la concordancia: «se seca la pieza / se secan las piezas». El error «se deja las piezas» es muy común también entre hablantes nativos; acéptalo en la charla libre y corrígelo solo en el contraste.',
  },

  horno: {
    title: 'La muestra sale del horno',
    place: 'El horno pequeño, con la muestra recién sacada en una mesa: platos y una taza con el asa rajada',
    cast: ['emilio', 'marina'],
    objective: 'b1.spk.w16-contar-conversacion',
    related: ['b1.gram.g118'],
    exponents: [
      { id: 'quien-dijo', form: 'fue Marina la que dijo que…', use: 'decir quién dijo cada cosa' },
      { id: 'aclarar', form: 'no, no lo dijo ella, lo preguntó Valentina', use: 'aclarar quién habló' },
      { id: 'prometer-pasado', form: 'le prometió que se los mandaría', use: 'futuro → condicional al contar una promesa' },
      { id: 'por-telefono', form: 'lo hablaron por teléfono: ella dijo que prefería…', use: 'contar una conversación por teléfono' },
    ],
    task: 'Emilio no estuvo en la llamada entre Marina y Valentina. Tú se la cuentas durante dos minutos y respondes a sus preguntas, aclarando quién dijo cada cosa.',
    line: 'Diez días después. Emilio abre el horno pequeño. Los platos salieron perfectos; una taza, no.',
    opening: 'Antes de empezar, cuéntale a Marina el recado de Emilio, en voz alta: «Emilio dice que…»',
    dialogue: [],
    beats: [
      {
        id: 'promesa', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['prometer-pasado'], who: 'emilio',
        context: 'Marina le dijo a Valentina por teléfono: «Le mando los platos el lunes.» Emilio pregunta: «¿Qué le prometió?»',
        prompt: 'Cuéntale a Emilio la promesa, en pasado.',
        options: [
          { id: 'mandaria', label: 'Le prometió que le mandaría los platos el lunes.', correct: true,
            feedback: 'Bien: el presente con valor de futuro pasa a condicional, «mandaría». También es correcto «le mandaba».' },
          { id: 'mandara', label: 'Le prometió que le mandara los platos el lunes.', correct: false, feature: 'prometer no es pedir',
            feedback: 'Prometer no es pedir: «que le mandara» sería una petición. Prometer lleva indicativo o condicional.' },
          { id: 'habia-mandado', label: 'Le prometió que le había mandado los platos el lunes.', correct: false, feature: 'orden de los hechos',
            feedback: 'Orden de los hechos: el envío es posterior a la promesa; el pluscuamperfecto lo pone antes.' },
        ],
      },
      {
        id: 'aclarar', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['aclarar'], who: 'emilio',
        context: 'Emilio: «Entonces fue Marina la que pidió el esmalte sin plomo, ¿no?» En realidad lo pidió Valentina, por seguridad.',
        prompt: 'Corrige a Emilio con amabilidad.',
        options: [
          { id: 'marina', label: 'No, Marina dijo que era seguro.', correct: false, feature: 'quién lo dijo',
            feedback: 'Quién lo dijo: sigues atribuyéndoselo a Marina. Fue la clienta.' },
          { id: 'fuera', label: 'No exactamente: fue Valentina la que pidió que fuera sin plomo, por seguridad.', correct: true,
            feedback: 'Bien: corriges quién habló y mantienes «pidió que» + subjuntivo.' },
          { id: 'es', label: 'No exactamente: fue Valentina la que pidió que es sin plomo.', correct: false, feature: 'modo después de «pedir que»',
            feedback: 'Modo: «pidió que fuera», subjuntivo.' },
        ],
      },
      {
        id: 'emilio-marina', kind: 'stimulus', label: 'Estímulo de conversación', who: 'marina',
        ask: 'Marina: «Una taza rajada. ¿Se lo digo hoy a Valentina o espero a tener la nueva?»',
        options: [
          { say: 'Hoy. Es mejor que lo sepa por usted y no por la caja.', reply: 'Tienes razón. La llamo ahora.', end: 'Marina marca el número. Emilio levanta el pulgar.', mood: 'love' },
          { say: 'Espere a tener la nueva; así le da una solución, no un problema.', reply: 'Mmm. Es verdad, pero no me gusta esconder cosas.', end: 'Marina escribe un mensaje corto y honesto: «Una taza salió mal; la repetimos.»', mood: 'surprised' },
          { say: 'Mándele una foto de los platos primero, que salieron preciosos.', reply: 'Buena idea: primero lo bueno.', end: 'La foto sale con la taza rajada en una esquina. Ya no hay secretos.', mood: 'laugh' },
        ],
        teacher: 'No hay respuesta correcta. Abre una discusión breve: ¿se dan las malas noticias enseguida?',
      },
    ],
    production: {
      kind: 'speaking',
      title: 'Tarea de expresión oral',
      prompt: 'Cuéntale a Emilio, en dos minutos, la conversación de Marina con Valentina: qué dijo cada una, qué preguntó Valentina y qué le prometió Marina. Emilio te interrumpe dos veces.',
      interruptions: ['Espera, ¿eso lo dijo Marina o Valentina?', '¿Y le preguntó algo del precio?'],
      facts: ['Los platos salieron bien.', 'Una taza se rajó en el asa.', 'Marina prometió los platos para el lunes.', 'Valentina prefiere pagar más por el esmalte sin plomo.'],
    },
    handoff: { who: 'emilio', text: 'Avísale a Paola que prepare el esmalte sin plomo.', prop: 'El balde de esmalte sin plomo se prepara en la mesa de los esmaltes.' },
    talk: [
      'Cuenta una conversación importante que tuviste este mes. ¿Quién dijo qué?',
      '¿Prefieres dar una mala noticia en persona, por teléfono o por mensaje?',
      '¿Qué haces cuando alguien cuenta mal lo que dijiste?',
      '¿Pagarías más por algo hecho de forma más segura o más ecológica?',
      '¿Qué promesa de trabajo es difícil de cumplir?',
    ],
    words: ['el asa', 'rajarse', 'el esmalte', 'sin plomo', 'prometer', 'aclarar'],
    scaffolding: 'Una tarjeta «quién dijo qué» con dos columnas (Marina / Valentina) y flechas para «dijo / preguntó / pidió / prometió».',
    teacher: 'Organiza parejas: A cuenta, B es Emilio y lee las interrupciones. Después cambian. Escucha sobre todo si aclaran quién habló («fue Valentina la que…»). El esmalte sin plomo es una cuestión real de seguridad en la cerámica para comida; no lo presentes como algo exótico ni como un reproche al oficio.',
  },

  esmaltes: {
    title: 'Lo que dijo, lo que preguntó y lo que pidió',
    place: 'La mesa de los esmaltes, con baldes, pinceles y la jarra de prueba',
    cast: ['paola', 'emilio'],
    objective: 'b1.lis.w16-encargo-taller',
    related: ['b1.gram.g118', 'b1.gram.g119'],
    exponents: [
      { id: 'le-encantaron', form: 'dijo que le encantaban / habían encantado', use: 'opinión contada' },
      { id: 'pregunto-si-wh', form: 'preguntó si… / preguntó qué…', use: 'pregunta sí/no frente a pregunta abierta' },
      { id: 'pidio-que', form: 'pidió que…', use: 'repaso de la petición contada' },
      { id: 'como-se-hara', form: 'se hará así: se esmaltan…', use: 'explicar cómo se va a hacer' },
    ],
    task: 'Paola contestó una llamada de Valentina. Tú la ayudas a ordenar la información en tres listas (dijo, preguntó, pidió) y después explicas cómo se va a hacer el pedido.',
    line: 'Paola tiene tres papelitos de colores pegados en la mesa: verde «dijo», amarillo «preguntó», rojo «pidió».',
    dialogue: [],
    beats: [
      {
        id: 'clasificar', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['pregunto-si-wh'], who: 'paola',
        context: 'Valentina preguntó: «¿Qué esmalte usan?»',
        prompt: 'Escribe el papelito amarillo.',
        options: [
          { id: 'si-que', label: 'Preguntó si qué esmalte usábamos.', correct: false, feature: '«si» con pregunta abierta',
            feedback: '«si» solo va con preguntas de sí o no. Con «qué» la palabra interrogativa se queda sola.' },
          { id: 'que-esmalte', label: 'Preguntó qué esmalte usábamos.', correct: true,
            feedback: 'Bien: pregunta abierta contada con la misma palabra interrogativa, «qué».' },
          { id: 'que-usabamos', label: 'Preguntó que usábamos un esmalte.', correct: false, feature: 'pregunta o afirmación',
            feedback: 'Pregunta o afirmación: «preguntó que usábamos» convierte la pregunta en un dato.' },
        ],
      },
      {
        id: 'opinion', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['le-encantaron'], who: 'paola',
        context: 'Valentina: «Me encantan los platos. Son justo lo que busco.»',
        prompt: 'Escribe el papelito verde, contado por la tarde.',
        options: [
          { id: 'eran', label: 'Dijo que le encantaban los platos y que eran justo lo que buscaba.', correct: true,
            feedback: 'Bien: presente → imperfecto en los tres verbos.' },
          { id: 'mezcla', label: 'Dijo que le encantaban los platos y que son justo lo que buscara.', correct: false, feature: 'mezcla de tiempos y modo',
            feedback: 'Mezcla: «son» no retrocede y «buscara» es subjuntivo sin razón. Va «eran… buscaba».' },
          { id: 'te', label: 'Dijo que te encantaban los platos y que eran justo lo que buscabas.', correct: false, feature: 'cambio de persona',
            feedback: 'Persona: a quien le encantan es a ella: «le encantaban… buscaba».' },
        ],
      },
      {
        id: 'proceso', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['como-se-hara'], who: 'emilio',
        context: 'Emilio: «Bueno, ¿y cómo se hace la jarra que pidió?»',
        prompt: 'Explícale el proceso sin decir quién hace cada paso.',
        options: [
          { id: 'se-pegan', label: 'Primero se tornea la jarra, después se pegan el asa y al final se esmalta.', correct: false, feature: 'concordancia con «se»',
            feedback: 'Concordancia: «el asa» es singular: «se pega el asa».' },
          { id: 'sin-se', label: 'Primero tornea la jarra, después pega el asa y al final esmalta.', correct: false, feature: 'proceso sin persona',
            feedback: 'Sin persona: así parece que lo hace alguien concreto. Para un proceso, «se tornea, se pega, se esmalta».' },
          { id: 'se-pega', label: 'Primero se tornea la jarra, después se pega el asa y al final se esmalta.', correct: true,
            feedback: 'Bien: cada verbo concuerda con su cosa.' },
        ],
      },
      {
        id: 'paola-emilio', kind: 'stimulus', label: 'Estímulo de conversación', who: 'paola',
        ask: 'Paola: «Valentina no se molestó por la taza. ¿Tú te habrías molestado?»',
        frames: [
          { id: 'molestado', label: 'Yo sí / no me habría molestado, porque ___.' },
          { id: 'depende', label: 'Depende de ___.' },
        ],
        teacher: 'Respuesta libre; acepta «me molestaría» si no sale el condicional compuesto.',
      },
    ],
    handoff: { who: 'paola', text: 'Valentina dijo que su chef iba a llamar a Marina. Ve a la oficina, por si acaso.', prop: 'La jarra esmaltada pasa al estante de la oficina.' },
    talk: [
      'Cuenta qué te dijo, qué te preguntó y qué te pidió alguien hoy.',
      '¿Qué haces para no olvidar lo que te dicen por teléfono?',
      '¿Tienes una taza o un plato especial? ¿De dónde es?',
      '¿Qué preguntas haces antes de comprar algo para comer o beber en ello?',
      '¿Te gustaría tener una vajilla hecha a mano? ¿Por qué?',
    ],
    words: ['el esmalte', 'la jarra', 'el asa', 'molestarse', 'el encargo', 'preguntó qué / si'],
    scaffolding: 'Los tres papelitos de colores como objeto real: antes de la escucha, la clase escribe una frase en cada papelito.',
    teacher: 'Este círculo copia la situación del objetivo de escucha de la semana 16 (una aprendiz cuenta lo que dijo, preguntó y pidió una clienta). Haz la escucha primero si quieres comprobar comprensión, o la conversación primero si quieres preparar el vocabulario. El contraste «preguntó si / preguntó qué» se practica aquí, por escrito; en la escucha las preguntas son de contenido.',
  },

  oficina: {
    title: 'El recado del chef',
    place: 'La oficina del taller: un escritorio, el cuaderno de pedidos, el computador y la jarra de prueba en un estante',
    cast: ['marina'],
    objective: 'b1.wri.w16-correo-reunion',
    related: ['b1.disc.w16-voces-y-procesos', 'b1.fun.w16-transmitir-mensajes'],
    exponents: [
      { id: 'me-pidio-que-le-dijera', form: 'me pidió que le dijera que…', use: 'recado de recado' },
      { id: 'se-adelanto', form: 'la inauguración se adelantó una semana', use: 'contar un cambio de fecha' },
      { id: 'se-va-a-organizar', form: 'se va a organizar así:…', use: 'explicar cómo se va a hacer lo decidido' },
      { id: 'anticipo-saldo', form: 'el anticipo, el saldo, transferir', use: 'hablar del pago' },
      { id: 'cierre-correo', form: 'Quedo atenta / Un saludo cordial', use: 'cerrar un correo profesional' },
    ],
    task: 'Marina habló con Andrés y prometió confirmarlo todo por escrito. Tú escribes con ella el correo para Valentina: qué se dijo, qué se preguntó, qué se pidió y cómo se va a organizar lo decidido.',
    line: 'Marina cuelga y suspira: «¿Me ayudas con el correo? Si no lo escribo ahora, mañana no me acuerdo de nada.»',
    dialogue: [],
    beats: [
      {
        id: 'recado-de-recado', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['me-pidio-que-le-dijera'], who: 'marina',
        context: 'Andrés dijo: «Valentina me pidió que la llamara a usted.»',
        prompt: 'Escribe la primera frase del correo, dirigida a Valentina.',
        options: [
          { id: 'usted-le-pidio', label: 'Ayer me llamó Andrés de su parte, como usted le pidió.', correct: true,
            feedback: 'Bien: cambias la perspectiva: ahora le escribes a Valentina, así que «usted le pidió».' },
          { id: 'tercera', label: 'Ayer me llamó Andrés y me dijo que Valentina le pidió que la llamara.', correct: false, feature: 'destinatario',
            feedback: 'Destinatario: le escribes a Valentina; no hables de ella en tercera persona.' },
          { id: 'pide', label: 'Ayer me llamó Andrés, como usted le pide.', correct: false, feature: 'tiempo verbal',
            feedback: 'Tiempo: la petición fue antes de la llamada; va en pasado: «le pidió».' },
        ],
      },
      {
        id: 'organizar', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['se-va-a-organizar'], who: 'marina',
        context: 'Marina: «Ahora explícale cómo lo vamos a hacer, sin decir quién hace cada cosa.»',
        prompt: 'Elige la frase del correo.',
        options: [
          { id: 'se-va', label: 'Se va a entregar los platos el jueves por la mañana.', correct: false, feature: 'concordancia con «se»',
            feedback: 'Concordancia: «los platos» es plural: «se van a entregar».' },
          { id: 'se-van', label: 'Los platos se van a entregar el jueves por la mañana, y el saldo se paga a la entrega.', correct: true,
            feedback: 'Bien: dos procesos con «se», cada uno concuerda con su cosa.' },
          { id: 'sin-se', label: 'Los platos van a entregar el jueves por la mañana.', correct: false, feature: 'falta «se»',
            feedback: 'Falta «se»: sin «se», parece que los platos entregan algo.' },
        ],
      },
      {
        id: 'registro', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['cierre-correo'], who: 'marina',
        context: 'Falta cerrar el correo. Valentina es una clienta nueva.',
        prompt: 'Elige el cierre más adecuado.',
        options: [
          { id: 'chao', label: 'Chao, besos.', correct: false, feature: 'registro',
            feedback: 'Registro: demasiado informal para una clienta nueva.' },
          { id: 'suscribe', label: 'Atentamente le saluda la que suscribe.', correct: false, feature: 'registro',
            feedback: 'Registro: demasiado formal y antiguo para un correo.' },
          { id: 'cordial', label: 'Quedo atenta a cualquier duda. Un saludo cordial, Marina.', correct: true,
            feedback: 'Bien: cordial y profesional.' },
        ],
      },
      {
        id: 'marina', kind: 'stimulus', label: 'Estímulo de conversación', who: 'marina',
        ask: 'Marina: «Ahora tenemos una semana menos. ¿Qué harías tú: pedir más gente o trabajar el fin de semana?»',
        frames: [
          { id: 'pediria', label: 'Yo pediría ___ porque ___.' },
          { id: 'trabajar', label: 'Mejor trabajar ___, siempre que ___.' },
        ],
        teacher: 'Respuesta libre.',
      },
    ],
    production: {
      kind: 'writing',
      title: 'Tarea de expresión escrita',
      prompt: 'Escribe con Marina el correo para Valentina (unas 120–150 palabras): saludo; qué te contó Andrés de su parte (la inauguración se adelantó una semana); qué preguntó (el anticipo y la cuenta) y la respuesta (la mitad del total, los datos van abajo); qué pidió (entrega un jueves); cómo se va a organizar (entrega el jueves por la mañana, el saldo se transfiere al recibir todo); cierre.',
      skeleton: ['Saludo', 'Me contó…', 'Me preguntó…', 'Me pidió…', 'Se va a organizar así…', 'Cierre'],
      model: [
        'Estimada Valentina:',
        'Ayer me llamó Andrés de su parte, como usted le pidió. Me contó que la inauguración se adelantó una semana y que necesitan el pedido completo para esa fecha. No hay problema: vamos a organizarnos para llegar a tiempo.',
        'Andrés también me preguntó cuánto era el anticipo y a qué cuenta podían transferirlo. El anticipo es la mitad del total; le dejo los datos de la cuenta al final de este correo.',
        'Además, me dijo que usted prefería recibir el pedido un jueves, porque ese día la cocina está más tranquila. Así lo haremos: las cajas se entregan el jueves por la mañana y el saldo se transfiere cuando usted reciba todo.',
        'Quedo atenta a cualquier duda.',
        'Un saludo cordial,\nMarina',
      ],
    },
    handoff: { who: 'marina', text: 'Ahora ve al patio. Roberto viene por las cajas y hay que darle las indicaciones de la clienta.', prop: 'Las cajas del pedido salen al patio.' },
    talk: [
      '¿Escribes correos formales en tu trabajo o en tus estudios? ¿Cómo los empiezas?',
      '¿Te han cambiado alguna vez una fecha importante? ¿Qué pasó?',
      // Reworded from Martin's question 3 (an advance payment in your country): the listening of this circle asks the same open question (platform near-duplicate audit).
      'Cuando encargas algo hecho a medida, ¿pagas una parte antes? ¿Te parece justo?',
      '¿Qué es más claro para ti: un audio o un correo?',
      '¿Cómo cuentas por escrito una reunión a alguien que no estuvo?',
    ],
    words: ['el anticipo', 'el saldo', 'transferir', 'adelantarse', 'de parte de', 'por escrito'],
    scaffolding: 'Un esqueleto de correo con cajas (saludo / me contó / me preguntó / me pidió / se va a organizar / cierre). El modelo está oculto al principio.',
    teacher: 'Si falta tiempo, que cada pareja escriba solo dos párrafos (lo que se dijo y cómo se va a organizar) y que termine el resto de tarea: es el texto de la semana 16 (un correo para contar una reunión). Corrige primero la perspectiva (le escribes a Valentina: «usted»), después los tiempos.',
  },

  patio: {
    title: 'Todo listo para Bogotá',
    place: 'El patio de despacho: doce cajas, el camión de Roberto y la factura en una tablilla',
    cast: ['roberto', 'marina'],
    objective: 'b1.fun.w16-transmitir-mensajes',
    related: ['b1.gram.g118', 'b1.spk.w16-contar-conversacion'],
    exponents: [
      { id: 'la-duena-me-pidio', form: 'la dueña me pidió que entregaras…', use: 'transmitir una petición a la persona que la cumple' },
      { id: 'dice-que-informa', form: 'dice que el chef revisa las cajas', use: 'información: indicativo' },
      { id: 'dice-que-pide', form: 'dice que le mandes una foto', use: 'petición: subjuntivo' },
      { id: 'sin-cambiar-sentido', form: 'reformular sin cambiar el sentido', use: 'transmitir un recado con otras palabras' },
      { id: 'que-te-dijo', form: '¿qué te dijo exactamente?', use: 'comprobar un recado' },
    ],
    task: 'El último recado. Marina tiene que irse y tú le das a Roberto todas las indicaciones de la clienta y del chef sin cambiar su sentido. Después, toda la clase reconstruye la cadena de recados del pedido.',
    line: 'Las cajas ya están en el patio. A Marina la llaman del banco. «Dale tú las indicaciones a Roberto, que yo vuelvo en un rato.»',
    dialogue: [],
    beats: [
      {
        id: 'entregar', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['la-duena-me-pidio'], who: 'roberto',
        context: 'Indicación de Valentina (por escrito): «Que el transportista entregue el jueves antes de las diez, por la puerta de atrás.»',
        prompt: 'Dile a Roberto qué pidió la dueña.',
        options: [
          { id: 'entregaras', label: 'La dueña pidió que entregaras el jueves antes de las diez, por la puerta de atrás.', correct: true,
            feedback: 'Bien: petición → «pidió que» + subjuntivo, y «el transportista» → «tú» porque ahora le hablas a él.' },
          { id: 'entregabas', label: 'La dueña dijo que entregabas el jueves antes de las diez, por la puerta de atrás.', correct: false, feature: 'petición o información',
            feedback: 'Petición o información: «dijo que entregabas» suena a un dato sobre lo que haces normalmente. Ella lo pidió: «que entregaras».' },
          { id: 'transportista', label: 'La dueña pidió que el transportista entregue el jueves antes de las diez.', correct: false, feature: 'persona',
            feedback: 'Persona: el transportista eres tú, Roberto. Le hablas a él: «que entregaras».' },
        ],
      },
      {
        id: 'informa-o-pide-2', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['dice-que-informa', 'dice-que-pide'], who: 'roberto',
        context: 'Dos notas de Andrés: (1) «El chef revisa caja por caja.» (2) «Manden una foto de la factura firmada.»',
        prompt: 'Elige la versión que mantiene el sentido de las dos notas.',
        options: [
          { id: 'al-reves', label: 'Dice que revise caja por caja y que mandas una foto de la factura.', correct: false, feature: 'se cruzan información y petición',
            feedback: 'Se cruzan: la primera nota es información (indicativo) y la segunda es una petición (subjuntivo). Aquí están al revés.' },
          { id: 'mandes', label: 'Dice que el chef revisa caja por caja y que le mandes una foto de la factura firmada.', correct: true,
            feedback: 'Bien: información con indicativo, petición con subjuntivo.' },
          { id: 'mandas', label: 'Dice que el chef revisa caja por caja y que le mandas una foto de la factura firmada.', correct: false, feature: 'petición con indicativo',
            feedback: 'Petición: «que le mandas» informa de algo que ya haces. Andrés lo pide: «que le mandes».' },
        ],
      },
      {
        id: 'sentido', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['sin-cambiar-sentido'], who: 'roberto',
        context: 'Roberto: «¿Y el saldo? ¿Lo cobro yo?» Marina dejó escrito: «El saldo lo transfiere ella cuando reciba todo.»',
        prompt: 'Contéstale a Roberto sin cambiar el sentido.',
        options: [
          { id: 'la-clienta', label: 'No, Marina dice que el saldo lo transfiere la clienta cuando reciba todo.', correct: true,
            feedback: 'Bien: mismo sentido, y «ella» se aclara: «la clienta».' },
          { id: 'cobres', label: 'Sí, Marina dice que lo cobres cuando entregues todo.', correct: false, feature: 'sentido cambiado',
            feedback: 'Sentido cambiado: Marina no pidió que cobraras; dijo que la clienta transfiere.' },
          { id: 'ella', label: 'No, Marina dice que el saldo lo transfiere ella cuando reciba todo.', correct: false, feature: 'referencia ambigua',
            feedback: 'Referencia ambigua: contado por ti, «ella» puede ser Marina o la clienta. Aclara: «la clienta».' },
        ],
        after: 'Roberto: «Clarísimo. Salgo el miércoles por la noche.»',
      },
      {
        id: 'cadena', kind: 'stimulus', label: 'Estímulo de conversación', who: 'marina', closing: true, title: 'La cadena del recado',
        ask: 'Todos los personajes salen al patio. Marina: «A ver, ¿cómo llegó este pedido hasta aquí? Cuéntenlo desde la primera llamada.»',
        frames: [
          { id: 'f1', label: 'El lunes llamó ___ y dijo que ___.' },
          { id: 'f2', label: 'Gonzalo le contó a Paola que ___.' },
          { id: 'f3', label: 'Marina le pidió a Paola que ___.' },
          { id: 'f4', label: 'Emilio explicó que en el secadero se ___.' },
          { id: 'f5', label: 'En el horno, Emilio y Marina vieron que ___.' },
          { id: 'f6', label: 'Paola le contó a Emilio que la clienta había preguntado si ___.' },
          { id: 'f7', label: 'Andrés llamó de parte de Valentina y dijo que ___.' },
          { id: 'f8', label: 'Y Roberto va a entregar el pedido ___.' },
        ],
        teacher: 'No hay respuesta correcta. Cada pareja reconstruye una frase en el orden del recorrido; la clase escucha si cambió el sentido de algún recado y lo corrige con «no exactamente: dijo que…».',
      },
    ],
    talk: [
      '¿Qué recado importante tuviste que transmitir alguna vez? ¿Salió bien?',
      '¿Por qué crees que los mensajes cambian cuando pasan por muchas personas?',
      '¿Qué haces cuando no entiendes bien un mensaje que tienes que transmitir?',
      '¿Prefieres recibir instrucciones de la persona que decide o de alguien que las transmite?',
      'Si trabajaras en este taller, ¿qué puesto elegirías? ¿Por qué?',
    ],
    words: ['el transportista', 'el saldo', 'la factura firmada', 'la puerta de atrás', 'entregar', 'sin cambiar el sentido'],
    scaffolding: 'La cadena completa en la pizarra: ocho flechas con nombres (Valentina → Gonzalo → Paola → … → Roberto); la clase completa una flecha cada pareja.',
    teacher: 'Es el cierre del mundo y su objetivo principal (transmitir mensajes y recados). Deja al menos 8 minutos para la ronda de la cadena. El mensaje escrito puede quedar de tarea; en clase basta con que cada pareja lea en voz alta su primera frase. Para la ficha de progreso: «Terminar» marca el cierre de la lección, no que la clase haya aprendido.',
  },
};

// The closing production at «patio» (E1 «Terminar»).
export const CLOSING = {
  production: {
    title: 'Recado final, por escrito',
    prompt: 'Recado final, por escrito (130–170 palabras): Marina está de viaje mañana. Déjale a Paola un mensaje que le cuente lo que pidió la dueña del restaurante, lo que dijo el chef, lo que preguntó Roberto y cómo se va a hacer la entrega. Usa al menos un «dijo que», un «preguntó si», un «pidió que» y un «se» de proceso.',
  },
  // Success criteria shown to the class; ticked by the teacher or the group, never computed.
  selfCheck: {
    scope: 'El grupo en esta sesión',
    items: [
      { id: 'sentido', label: 'Ninguna indicación cambia de sentido.' },
      { id: 'quien', label: 'Queda claro quién dijo qué.' },
      { id: 'modo', label: 'Las peticiones van en subjuntivo y la información en indicativo.' },
    ],
  },
  sessionLabel: 'Notas de esta sesión: no se guardan por alumno',
  reset: 'Nueva clase / nuevo grupo',
};

// Teacher route as data (Martin §9, about 45 minutes; timing is the author's
// estimate until a class trial). A step with `oneOf` lets the teacher pick one
// circle; `listening` means the step uses that circle's listening.
export const ROUTES = [
  {
    id: 'clase', mode: 'conversacion', title: 'Clase de 45 minutos', minutes: 45,
    steps: [
      { id: 'calentamiento', minutes: 4, do: 'Pregunta: «¿Alguna vez llevaste un recado y llegó cambiado?». Dos o tres historias cortas. En la pizarra: «dijo que / preguntó si / pidió que».' },
      { circle: 'mostrador', minutes: 6, do: 'Contrastes 1 y 2 y la tarjeta del recado. La escucha del círculo es opcional: presenta el pedido.' },
      { circle: 'greda', minutes: 3, do: 'Solo el contraste 1 (vocabulario); glosario en la pizarra.' },
      { circle: 'torno', minutes: 8, do: 'Los cuatro contrastes. Es el centro gramatical: no lo saltes.' },
      { circle: 'secadero', minutes: 3, do: 'Contrastes 1 y 2 («se» pasivo e impersonal).' },
      { circle: 'esmaltes', minutes: 6, listening: true, do: 'Modo Comprensión auditiva (dos escuchas, opción múltiple, huecos) y después el contraste 1 en modo Conversación.' },
      { oneOf: ['horno', 'oficina'], minutes: 5, do: 'Elige uno: la tarea oral de dos minutos (horno) o el esqueleto del correo (oficina).' },
      { circle: 'patio', minutes: 10, closing: true, do: 'Contrastes 1 a 3 y después «La cadena del recado». El mensaje escrito (130–170 palabras) puede quedar de tarea.' },
    ],
  },
];

export const EXTENSIONS = 'Para una segunda clase o para el trabajo autónomo: todas las escuchas (ocho), la tarea del horno o de la oficina que no se hizo, los contrastes que faltan de la greda y del secadero, y las preguntas de conversación.';

// E1 (BOARD-DECISION-001 §3.2): progress = round(100 × route circles done ÷
// route circles); 100 only on the closing «Terminar». N4 wording only.
export const E1_LABEL = 'accounts that have reached the closing of lesson X at least once ÷ accounts that opened lesson X; signed-in PRO accounts only; not learning; reaching the closing ≠ teaching the route';

export const PLACEMENT = 'Para B1, semana 16 del plan: contar lo que otra persona dijo, preguntó y pidió (dijo que, preguntó si, pidió que) y explicar procesos con «se».';
