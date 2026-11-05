import type { Module } from "../../types";

/**
 * B1 · semana 4 · Autoestudio espejo de G093 (opinión afirmativa frente a
 * opinión negada) y G094 (duda, posibilidad y certeza). Repaso autónomo con
 * el debate de un equipo de Medellín sobre la semana laboral de cuatro días.
 * Audio mediante síntesis.
 */
export const b1w04: Module = {
  id: "b1-04",
  level: "b1",
  week: 4,
  kind: "core",
  title: "Creo que sí, no creo que funcione y a lo mejor…",
  subtitle: "Repaso de la opinión afirmada y negada (creo que / no creo que) y de cómo expresar certeza, posibilidad y duda.",
  stop: { place: "Medellín", country: "Colombia" },
  minutes: 95,
  newObjectives: [
    "b1.gram.g093",
    "b1.gram.g094",
    "b1.voc.w04-organizacion-trabajo",
    "b1.pron.w04-pregunta-afirmacion",
    "b1.lis.w04-reunion-equipo",
    "b1.read.w04-columna-opinion",
    "b1.wri.w04-comentario-foro",
    "b1.spk.w04-debate-propuesta",
    "b1.fun.w04-opinar-matizar",
    "b1.disc.w04-argumentar-postura",
  ],
  reviewObjectives: ["b1.gram.g090","b1.gram.g091","b1.gram.g092","b1.voc.w03-huerto-vecinal","b1.pron.w03-g-suave-fuerte","b1.lis.w03-asamblea-huerto","b1.read.w03-carta-socios","b1.wri.w03-correo-asociacion","b1.spk.w03-propuesta-vecinal","b1.fun.w03-aconsejar-reaccionar","b1.disc.w03-queja-constructiva"],
  prerequisites: ["b1-03"],
  goal: {
    canDo: "Al final de esta semana puedes dar tu opinión con creo que y negarla con no creo que, preguntar la opinión de otros, corregir una interpretación y graduar lo que dices entre la certeza, la posibilidad y la duda.",
    steps: [
      "Repasa la regla central: si afirmas, indicativo; si niegas la opinión, subjuntivo.",
      "Repasa las preguntas de opinión, _¿no crees que…?_ y _no es que…, es que…_",
      "Gradúa la seguridad: _seguro que, a lo mejor, puede que, es posible que, dudo que, quizás_.",
      "Escucha la reunión de un equipo de Medellín que discute la semana de cuatro días y lee una columna de opinión.",
      "Escribe tu comentario en un foro y graba tu postura en un debate.",
    ],
  },
  theory: {
    intro: "En tus dos últimas clases aprendiste a opinar, a negar una opinión y a decir qué tan seguro estás de algo. Aquí lo repasas en una agencia de diseño de Medellín: el equipo discute si probar una semana laboral de cuatro días. Unos están seguros, otros dudan y otros creen que es imposible. Fíjate en una pregunta: ¿la persona afirma o no?",
    parts: [
      {
        heading: "Afirmar tu opinión: indicativo",
        body: [
          "Con **creo que, pienso que, opino que, me parece que** y **estoy seguro de que** presentas tu opinión como verdadera. Por eso el verbo que sigue va en **indicativo**, en el tiempo que necesites: _Creo que el equipo **rinde** más los lunes_; _Pienso que **fue** una buena decisión_; _Me parece que **va a funcionar**_.",
          "No confundas **me parece que** (opinión, indicativo) con **me parece bien que** (valoración, subjuntivo, como viste la semana pasada): _Me parece que Luisa **tiene** razón_ / _Me parece bien que Luisa **tenga** el viernes libre_.",
          "Con **estar seguro** no olvides el **de**: _Estoy segura de que podemos hacerlo_.",
        ],
        examples: [
          { es: "Creo que los clientes no van a notar la diferencia.", note: "Opinión afirmada: indicativo." },
          { es: "Opino que deberíamos probarlo tres meses.", note: "_Opinar que_ + indicativo (aquí, condicional)." },
          { es: "Estoy seguro de que hay una solución.", note: "_Estar seguro de que_ + indicativo." },
        ],
        mistakes: [
          { wrong: "Creo que sea una buena idea.", right: "Creo que es una buena idea.", why: "_Creo que_ afirma: **indicativo**." },
          { wrong: "Pienso de que necesitamos más tiempo.", right: "Pienso que necesitamos más tiempo.", why: "_Pensar que_ no lleva _de_." },
        ],
      },
      {
        heading: "Negar tu opinión: subjuntivo",
        body: [
          "Cuando **niegas** el verbo de opinión, no afirmas lo que viene después: lo pones en duda o lo rechazas. Por eso va en **subjuntivo**: _No creo que el equipo **rinda** más_; _No pienso que **sea** tan fácil_; _No estoy segura de que los clientes lo **acepten**_.",
          "Funciona también cuando eres tú quien actúa: _No creo que **pueda** terminar el informe hoy_.",
          "Compara las dos frases. Afirmar: _Creo que **llegan** a tiempo_. Negar: _No creo que **lleguen** a tiempo_. Solo cambia el _no_… y el modo.",
        ],
        table: {
          caption: "Afirmar o negar",
          head: ["Afirmo: indicativo", "Niego: subjuntivo"],
          rows: [
            ["Creo que es posible.", "No creo que sea posible."],
            ["Pienso que tenemos tiempo.", "No pienso que tengamos tiempo."],
            ["Me parece que funciona.", "No me parece que funcione."],
            ["Estoy segura de que viene.", "No estoy segura de que venga."],
          ],
        },
        mistakes: [
          { wrong: "No creo que los clientes están contentos.", right: "No creo que los clientes estén contentos.", why: "Opinión negada: **subjuntivo**." },
        ],
      },
      {
        heading: "Preguntar, buscar acuerdo y corregir",
        body: [
          "En una pregunta normal, **¿crees que…?** va con **indicativo**: _¿Crees que es buena idea?_ Y con **¿no crees que…?** tampoco niegas nada: buscas que el otro esté de acuerdo contigo, así que también va **indicativo**: _¿No crees que trabajamos demasiado?_",
          "Para **corregir** lo que otra persona ha entendido, usa **no es que + subjuntivo** (rechazas esa interpretación) y después **es que + indicativo** (das la razón real): _No es que no **quiera** el viernes libre, es que **tengo** miedo de perder clientes_.",
        ],
        examples: [
          { es: "¿Piensas que los jefes van a aceptarlo?", note: "Pregunta normal: indicativo." },
          { es: "¿No crees que merece la pena intentarlo?", note: "Buscas acuerdo: indicativo." },
          { es: "No es que esté en contra, es que necesito más datos.", note: "Corriges una interpretación." },
        ],
        mistakes: [
          { wrong: "No es que no me gusta la propuesta, es que es arriesgada.", right: "No es que no me guste la propuesta, es que es arriesgada.", why: "Después de _no es que_ va **subjuntivo**." },
        ],
      },
      {
        heading: "Certeza y posibilidad: seguro que, a lo mejor, puede que",
        body: [
          "Para la **certeza** usa indicativo: **seguro que, está claro que, es evidente que, estoy convencido de que**. _Seguro que_ también sirve para una suposición fuerte: _Seguro que Valeria ya lo sabe_.",
          "**A lo mejor** significa «quizás», pero tiene una regla fija: siempre va con **indicativo**: _A lo mejor probamos en enero_.",
          "Para la **posibilidad** y la **duda** usa subjuntivo: **es posible que, es probable que, puede que, dudo que, no es seguro que**: _Puede que el piloto empiece en febrero_; _Dudo que todos estén de acuerdo_.",
          "Con **quizás, quizá, tal vez, probablemente** delante del verbo, las dos opciones son correctas: _Quizás funciona_ / _Quizás funcione_ (el subjuntivo suena algo más dudoso). Si el adverbio va después del verbo, solo indicativo: _Funciona, quizás, mejor en verano_.",
        ],
        table: {
          caption: "De más seguro a menos seguro",
          head: ["Grado", "Expresión", "Modo", "Ejemplo"],
          rows: [
            ["certeza", "seguro que, está claro que", "indicativo", "Seguro que el cliente lo entiende."],
            ["posibilidad alta", "a lo mejor", "siempre indicativo", "A lo mejor lo probamos en enero."],
            ["posibilidad", "es posible que, puede que", "subjuntivo", "Puede que haya cambios."],
            ["posibilidad", "quizás, tal vez", "indicativo o subjuntivo", "Tal vez tienen / tengan razón."],
            ["duda", "dudo que, no es seguro que", "subjuntivo", "Dudo que lo aprueben este año."],
          ],
        },
        examples: [
          { es: "Es probable que la productividad suba un poco.", note: "Probabilidad: subjuntivo." },
          { es: "A lo mejor nos sorprende el resultado.", note: "_A lo mejor_ + indicativo, siempre." },
        ],
        mistakes: [
          { wrong: "A lo mejor llueva esta tarde en el centro.", right: "A lo mejor llueve esta tarde en el centro.", why: "_A lo mejor_ va siempre con **indicativo**." },
          { wrong: "Seguro que Andrés tenga la presentación lista.", right: "Seguro que Andrés tiene la presentación lista.", why: "_Seguro que_ expresa certeza: **indicativo**." },
          { wrong: "Dudo que el piloto empieza en enero.", right: "Dudo que el piloto empiece en enero.", why: "_Dudo que_ expresa duda: **subjuntivo**." },
        ],
        tip: "_Dudo que_ + subjuntivo, pero _no dudo de que_ + indicativo: si no dudas, estás seguro.",
      },
    ],
  },
  grammar: {
    intro: "Primero practicas la opinión afirmada y negada; después, los grados de seguridad.",
    exercises: [
      {
        id: "b1-04-g1",
        type: "choice",
        title: "¿Afirmo o niego?",
        prompt: "Elige la forma correcta.",
        items: [
          { q: "Creo que la semana de cuatro días ___ una buena idea para nosotros.", options: ["sea", "es", "ser"], answer: 1, why: "_Creo que_ afirma: **indicativo**." },
          { q: "No creo que los clientes ___ el cambio.", options: ["noten", "notan", "notar"], answer: 0, why: "Opinión negada: **subjuntivo**." },
          { q: "¿No crees que ___ demasiadas reuniones los lunes?", options: ["tengamos", "tener", "tenemos"], answer: 2, why: "_¿No crees que…?_ busca acuerdo: **indicativo**." },
          { q: "No es que ___ cansada, es que quiero pasar más tiempo con mi hija.", options: ["estoy", "esté", "estar"], answer: 1, why: "_No es que_ + **subjuntivo**." },
          { q: "Me parece que Sebastián ___ razón.", options: ["tenga", "tener", "tiene"], answer: 2, why: "_Me parece que_ (opinión, sin _bien_): **indicativo**." },
        ],
      },
      {
        id: "b1-04-g2",
        type: "gap",
        title: "Grados de seguridad",
        prompt: "Completa con la forma correcta del verbo entre paréntesis.",
        items: [
          { q: "Es posible que la directora ___ la propuesta el lunes. (aprobar)", answers: [["apruebe"]], why: "Posibilidad: **subjuntivo**, _aprobar_ → _apruebe_." },
          { q: "A lo mejor ___ el piloto en marzo. (nosotros, empezar)", answers: [["empezamos"]], why: "_A lo mejor_ + **indicativo**." },
          { q: "Dudo que todos ___ trabajar los sábados a cambio. (querer)", answers: [["quieran"]], why: "Duda: **subjuntivo**." },
          { q: "Seguro que el equipo de ventas ___ algo que decir. (tener)", answers: [["tiene"]], why: "_Seguro que_: **indicativo**." },
          { q: "Puede que ___ que contratar a otra persona. (nosotros, tener)", answers: [["tengamos"]], why: "_Puede que_ + **subjuntivo**." },
          { q: "Está claro que este horario ___ a los diseñadores. (cansar)", answers: [["cansa"]], why: "_Está claro que_: certeza, **indicativo**." },
        ],
      },
      {
        id: "b1-04-g3",
        type: "error",
        title: "Corrige el chat del equipo",
        prompt: "Cada mensaje tiene un error. Escríbelo corregido.",
        items: [
          { sentence: "Creo que sea mejor esperar a los resultados.", answers: ["Creo que es mejor esperar a los resultados."], why: "Opinión afirmada: **indicativo**." },
          { sentence: "No estoy segura que la jefa esté de acuerdo.", answers: ["No estoy segura de que la jefa esté de acuerdo."], why: "_Estar seguro_ necesita **de que**." },
          { sentence: "A lo mejor vengan los clientes de Bogotá el viernes.", answers: ["A lo mejor vienen los clientes de Bogotá el viernes."], why: "_A lo mejor_ siempre con **indicativo**." },
          { sentence: "No pienso que el proyecto es un fracaso.", answers: ["No pienso que el proyecto sea un fracaso."], why: "Opinión negada: **subjuntivo**." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Las palabras para hablar de cómo se organiza el trabajo y para debatir una propuesta en una reunión.",
    groups: [
      {
        title: "La organización del trabajo",
        items: [
          { es: "la jornada laboral", note: "las horas que trabajas cada día o cada semana" },
          { es: "el teletrabajo", note: "trabajar desde casa o a distancia" },
          { es: "la productividad", note: "lo que produces en relación con el tiempo que trabajas" },
          { es: "un plan piloto", note: "una prueba limitada antes de decidir" },
          { es: "el plazo de entrega", note: "la fecha en que hay que terminar un trabajo" },
          { es: "rendir", note: "trabajar bien y producir resultados" },
          { es: "agotarse", note: "cansarse muchísimo" },
          { es: "conciliar", note: "combinar el trabajo con la vida personal y familiar" },
        ],
      },
      {
        title: "Debatir una propuesta",
        items: [
          { es: "estar a favor / en contra", note: "apoyar o rechazar una idea" },
          { es: "tener sus ventajas", note: "tener aspectos positivos" },
          { es: "correr un riesgo", note: "aceptar que algo puede salir mal" },
          { es: "merecer la pena", note: "ser útil a pesar del esfuerzo" },
          { es: "ponerse de acuerdo", note: "llegar a una decisión común" },
          { es: "en mi opinión", note: "para presentar lo que piensas" },
        ],
      },
    ],
    exercises: [
      {
        id: "b1-04-v1",
        type: "match",
        title: "¿Qué significa?",
        prompt: "Relaciona cada expresión con una situación.",
        pairs: [
          { left: "un plan piloto", right: "probamos el cambio solo tres meses y después decidimos" },
          { left: "conciliar", right: "puedo recoger a mis hijos y también cumplir con mi trabajo" },
          { left: "el plazo de entrega", right: "el diseño tiene que estar listo el jueves 14" },
          { left: "agotarse", right: "después de diez horas frente a la pantalla no puedo más" },
          { left: "merecer la pena", right: "cuesta esfuerzo, pero el resultado es bueno" },
          { left: "ponerse de acuerdo", right: "al final, todo el equipo vota lo mismo" },
        ],
      },
      {
        id: "b1-04-v2",
        type: "context",
        title: "En la reunión",
        prompt: "Elige la frase más natural para cada situación.",
        items: [
          { context: "Quieres apoyar la propuesta de tu compañera.", q: "Dices:", options: ["Estoy a favor de probarlo.", "Estoy en contra de probarlo.", "Me agoto de probarlo."], answer: 0, why: "Apoyar una idea: **estar a favor**." },
          { context: "Reconoces que la idea es buena, pero tiene peligros.", q: "Dices:", options: ["No merece la pena, es perfecta.", "Tiene sus ventajas, pero corremos un riesgo.", "Me pongo de acuerdo con el riesgo."], answer: 1, why: "_Tener sus ventajas_ y _correr un riesgo_ equilibran la opinión." },
          { context: "Quieres presentar tu punto de vista con educación.", q: "Empiezas:", options: ["Rindo que…", "Conciliando…", "En mi opinión…"], answer: 2, why: "**En mi opinión** introduce lo que piensas." },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Pregunta o afirmación: la melodía final",
    explanation: [
      "En español, una pregunta de sí o no puede tener exactamente las mismas palabras que una afirmación: _Crees que funciona._ / _¿Crees que funciona?_ Lo único que cambia es la **melodía final**: en la afirmación la voz baja al final; en la pregunta, sube.",
      "Con **¿no crees que…?** la voz también sube, pero suele empezar más alta: es una invitación a estar de acuerdo. Con **no es que…, es que…** hay dos partes: la primera queda suspendida y la segunda baja con fuerza.",
      "Escucha y decide; después repite exagerando un poco la subida o la bajada. La voz es sintética: úsala para percibir la diferencia, no como modelo regional.",
    ],
    examples: [
      { es: "Piensas que es caro.", note: "Afirmación: la voz baja al final." },
      { es: "¿Piensas que es caro?", note: "Pregunta: la voz sube al final." },
      { es: "No es que no quiera, es que no puedo.", note: "Primera parte suspendida, segunda parte baja." },
    ],
    perceive: {
      id: "b1-04-p1",
      type: "listen",
      title: "¿Pregunta o afirmación?",
      prompt: "Escucha y decide si es una pregunta o una afirmación.",
      items: [
        { q: "¿Qué oyes?", audio: "¿Crees que los clientes lo van a notar?", voice: "es-CO-f", options: ["una afirmación", "una pregunta"], answer: 1, why: "La voz sube al final: pregunta." },
        { q: "¿Qué oyes?", audio: "Crees que los jefes van a decir que no.", voice: "es-CO-m", options: ["una afirmación", "una pregunta"], answer: 0, why: "La voz baja al final: afirmación." },
        { q: "¿Qué oyes?", audio: "¿Tú también piensas que es buena idea?", voice: "es-CO-f", options: ["una afirmación", "una pregunta"], answer: 1, why: "Subida final: pregunta." },
        { q: "¿Qué oyes?", audio: "Piensas que deberíamos esperar.", voice: "es-CO-m", options: ["una afirmación", "una pregunta"], answer: 0, why: "Bajada final: afirmación." },
      ],
    },
    produce: [
      { text: "¿Crees que vale la pena?", tip: "Sube la voz en la última sílaba: _PE-na_ ↗.", voice: "es-CO-f" },
      { text: "Creo que vale la pena.", tip: "Ahora baja la voz al final.", voice: "es-CO-m" },
      { text: "¿No crees que es el momento?", tip: "Empieza alto, como si pidieras apoyo.", voice: "es-CO-f" },
      { text: "No es que no me guste, es que me da miedo.", tip: "Pausa breve después de _guste_; la segunda parte baja.", voice: "es-CO-m" },
    ],
    spelling: "Por escrito, el español abre y cierra las preguntas: **¿…?**. Si la pregunta empieza en mitad de la frase, el signo de apertura va donde empieza la pregunta: _Si te parece bien, ¿lo probamos?_",
  },
  listening: {
    title: "¿Cuatro días a la semana?",
    context: "En una agencia de diseño de Medellín, el equipo discute una propuesta: probar durante tres meses una semana laboral de cuatro días. Valeria dirige la reunión. Escucha primero sin leer la transcripción.",
    speakers: [
      { id: "valeria", name: "Valeria", voice: "es-CO-f", role: "directora de la agencia" },
      { id: "sebastian", name: "Sebastián", voice: "es-CO-m", role: "diseñador gráfico" },
      { id: "luisa", name: "Luisa", voice: "es-CO-f", role: "responsable de clientes" },
    ],
    script: [
      { speaker: "valeria", text: "Bueno, ya leyeron la propuesta. Trabajaríamos de lunes a jueves, diez horas al día, durante un plan piloto de tres meses. Quiero saber qué piensan con sinceridad." },
      { speaker: "sebastian", text: "Yo estoy a favor. Creo que rendimos mucho más cuando descansamos bien. Los viernes por la tarde, la verdad, nadie diseña nada bueno. Estoy seguro de que la calidad va a subir." },
      { speaker: "luisa", text: "Mmm, no estoy tan segura. No creo que los clientes acepten que no contestemos los viernes. Acuérdense del cliente del banco: escribe a cualquier hora." },
      { speaker: "sebastian", text: "¿No crees que podemos organizar un turno? Una persona de guardia cada viernes, y los demás libres." },
      { speaker: "luisa", text: "Puede que funcione, pero dudo que una sola persona pueda resolver todo. Y diez horas seguidas frente a la pantalla… es posible que nos agotemos." },
      { speaker: "valeria", text: "Luisa, ¿entonces estás en contra?" },
      { speaker: "luisa", text: "No, no es que esté en contra, es que tengo miedo de perder clientes. A lo mejor podemos empezar con un viernes libre cada dos semanas y ver qué pasa." },
      { speaker: "sebastian", text: "Me parece que es un buen punto de partida. Seguro que en un mes ya sabemos si merece la pena." },
      { speaker: "valeria", text: "Perfecto. Entonces probamos así: viernes alternos, turno de guardia y una reunión de evaluación a final de mes. Quizás no sea la solución definitiva, pero creo que vale la pena intentarlo." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Primera escucha: sin transcripción, quédate con la idea general.",
        exercise: {
          id: "b1-04-l1",
          type: "choice",
          prompt: "Responde con lo esencial de la reunión.",
          items: [
            { q: "¿Qué discute el equipo?", options: ["Contratar a más diseñadores", "Cambiar de oficina", "Probar una semana laboral más corta"], answer: 2, why: "Valeria presenta la propuesta de trabajar de lunes a jueves." },
            { q: "¿Cómo termina la reunión?", options: ["Con un acuerdo intermedio", "Sin ninguna decisión", "Con la propuesta rechazada"], answer: 0, why: "Deciden probar viernes alternos con un turno de guardia." },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a las razones de cada persona.",
        exercise: {
          id: "b1-04-l2",
          type: "choice",
          prompt: "Elige la respuesta correcta según el audio.",
          items: [
            { q: "¿Por qué está Sebastián a favor?", options: ["Porque vive lejos", "Porque cree que descansar mejora el trabajo", "Porque quiere ganar más"], answer: 1, why: "_Creo que rendimos mucho más cuando descansamos bien._" },
            { q: "¿Qué le preocupa a Luisa?", options: ["Perder clientes", "Trabajar con Sebastián", "El precio de la oficina"], answer: 0, why: "_Tengo miedo de perder clientes._" },
            { q: "¿Qué propone Luisa?", options: ["Trabajar solo por la mañana", "Cancelar el plan piloto", "Un viernes libre cada dos semanas"], answer: 2, why: "_Podemos empezar con un viernes libre cada dos semanas._" },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en qué tan segura está cada persona. Después puedes leer la transcripción.",
        exercise: {
          id: "b1-04-l3",
          type: "classify",
          prompt: "Clasifica cada fragmento según el modo del verbo que sigue.",
          categories: ["Afirmación o certeza: indicativo", "Negación, posibilidad o duda: subjuntivo"],
          items: [
            { text: "Creo que rendimos mucho más…", cat: 0 },
            { text: "No creo que los clientes acepten…", cat: 1 },
            { text: "Estoy seguro de que la calidad va a subir.", cat: 0 },
            { text: "Dudo que una sola persona pueda resolver todo.", cat: 1 },
            { text: "A lo mejor podemos empezar…", cat: 0, why: "_A lo mejor_ va siempre con indicativo, aunque expresa posibilidad." },
            { text: "No es que esté en contra…", cat: 1 },
            { text: "¿No crees que podemos organizar un turno?", cat: 0, why: "_¿No crees que…?_ busca acuerdo: indicativo." },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Trabajar menos para trabajar mejor: ¿moda o futuro?",
    genre: "Columna de opinión",
    frame: "Columna publicada en la revista digital de un gremio de pequeñas empresas de Antioquia.",
    text: [
      "Cada vez más empresas hablan de la semana laboral de cuatro días. Algunas ya la han probado en Europa y en América Latina, y los primeros resultados parecen positivos: menos estrés, menos bajas por enfermedad y, en muchos casos, la misma productividad. Pero ¿es una idea para todos? Sinceramente, no creo que exista una respuesta única.",
      "Estoy convencida de que el descanso mejora el trabajo creativo. Una diseñadora agotada no tiene buenas ideas, y eso lo sabe todo el que alguna vez ha pasado un viernes por la tarde mirando una pantalla en blanco. También creo que un día libre ayuda a conciliar, sobre todo a quienes cuidan de niños o de personas mayores.",
      "Sin embargo, no me parece que el modelo funcione igual en un restaurante, en un hospital o en una tienda que abre seis días a la semana. Es posible que en esos sectores haga falta contratar a más personas, y dudo que todas las pequeñas empresas puedan asumir ese coste. A lo mejor la solución no es un día libre fijo, sino horarios más flexibles.",
      "¿Moda o futuro? Quizás las dos cosas. Lo que está claro es que la conversación ya ha empezado. Mi consejo a los empresarios: no es que tengan que cambiarlo todo mañana, es que vale la pena hacer una prueba seria antes de decir que no.",
    ],
    glossary: [
      { es: "una baja por enfermedad", note: "permiso para no trabajar porque estás enfermo" },
      { es: "asumir un coste", note: "aceptar pagar algo" },
      { es: "el gremio", note: "asociación de personas o empresas del mismo sector" },
    ],
    tasks: [
      {
        id: "b1-04-r1",
        type: "choice",
        prompt: "Lee la columna y elige la respuesta que refleja la opinión de la autora.",
        items: [
          { q: "¿Qué piensa la autora sobre el trabajo creativo?", options: ["Que no cambia con el descanso", "Que mejora cuando las personas descansan", "Que necesita más horas"], answer: 1, why: "_Estoy convencida de que el descanso mejora el trabajo creativo._" },
          { q: "¿Qué duda tiene sobre algunos sectores?", options: ["Que las pequeñas empresas puedan pagar más contrataciones", "Que los clientes quieran comer fuera", "Que los hospitales cierren los viernes"], answer: 0, why: "_Dudo que todas las pequeñas empresas puedan asumir ese coste._" },
          { q: "¿Qué aconseja a los empresarios?", options: ["Cambiarlo todo de inmediato", "Rechazar la idea", "Probar en serio antes de decidir"], answer: 2, why: "_Vale la pena hacer una prueba seria antes de decir que no._" },
        ],
      },
      {
        id: "b1-04-r2",
        type: "classify",
        prompt: "¿Qué tan segura está la autora? Clasifica cada idea.",
        categories: ["Lo afirma con seguridad", "Lo presenta como posible o dudoso", "Lo niega"],
        items: [
          { text: "El descanso mejora el trabajo creativo.", cat: 0 },
          { text: "Un día libre ayuda a conciliar.", cat: 0 },
          { text: "Hace falta contratar a más personas en algunos sectores.", cat: 1 },
          { text: "Existe una respuesta única para todos.", cat: 2 },
          { text: "La solución son horarios más flexibles.", cat: 1, why: "_A lo mejor_ presenta una posibilidad." },
          { text: "El modelo funciona igual en un restaurante.", cat: 2 },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada fragmento para ver por qué lleva ese modo.",
      items: [
        { quote: "no creo que exista una respuesta única", note: "Opinión **negada**: subjuntivo, _exista_." },
        { quote: "Estoy convencida de que el descanso mejora el trabajo creativo", note: "Certeza: **indicativo**, _mejora_." },
        { quote: "A lo mejor la solución no es un día libre fijo", note: "_A lo mejor_ + **indicativo**, siempre." },
        { quote: "no es que tengan que cambiarlo todo mañana, es que vale la pena", note: "Corrige una interpretación: _no es que_ + **subjuntivo**; _es que_ + **indicativo**." },
      ],
    },
  },
  practice: {
    intro: "Ahora mezclas opinión y grados de seguridad. El último ejercicio te pide recuperar la semana pasada.",
    exercises: [
      {
        id: "b1-04-x1",
        type: "order",
        title: "Opiniones en orden",
        prompt: "Ordena las palabras.",
        items: [
          { words: ["No", "creo", "que", "el", "cliente", "llame", "el", "viernes."] },
          { words: ["A", "lo", "mejor", "probamos", "otro", "horario", "en", "enero."] },
          { words: ["Es", "probable", "que", "la", "jefa", "diga", "que", "sí."] },
        ],
      },
      {
        id: "b1-04-x2",
        type: "context",
        title: "Gradúa tu respuesta",
        prompt: "Lee la situación y elige la frase que expresa el grado de seguridad indicado.",
        items: [
          { context: "Estás completamente seguro de que Luisa va a aceptar.", q: "Dices:", options: ["Puede que Luisa acepte.", "Seguro que Luisa acepta.", "Dudo que Luisa acepte."], answer: 1, why: "Certeza: _seguro que_ + indicativo." },
          { context: "Crees que hay posibilidades, pero no lo sabes.", q: "Dices:", options: ["Está claro que lo aprueban.", "No creo que lo aprueben.", "Es posible que lo aprueben."], answer: 2, why: "Posibilidad: _es posible que_ + subjuntivo." },
          { context: "Tu compañero piensa que no te gusta el plan, pero el problema es otro: no tienes tiempo.", q: "Le aclaras:", options: ["No es que no me guste, es que no tengo tiempo.", "No es que no me gusta, es que no tenga tiempo.", "No me gusta que no tengo tiempo."], answer: 0, why: "_No es que_ + subjuntivo; _es que_ + indicativo." },
        ],
      },
      {
        id: "b1-04-x3",
        type: "gap",
        title: "De la opinión a la negación",
        prompt: "Escribe la forma que falta para negar la opinión.",
        items: [
          { q: "Creo que hay tiempo. → No creo que ___ tiempo.", answers: [["haya"]], why: "Negación: _haber_ → **haya**." },
          { q: "Pienso que vamos bien. → No pienso que ___ bien.", answers: [["vayamos"]], why: "Negación: _ir_ → **vayamos**." },
          { q: "Me parece que saben la respuesta. → No me parece que ___ la respuesta.", answers: [["sepan"]], why: "Negación: _saber_ → **sepan**." },
          { q: "Estoy seguro de que es fácil. → No estoy seguro de que ___ fácil.", answers: [["sea"]], why: "Negación: _ser_ → **sea**." },
        ],
      },
      {
        id: "b1-04-x4",
        type: "open",
        title: "Tu postura por partes",
        prompt: "Imagina que tu empresa o tu centro de estudios propone una semana de cuatro días. Escribe cada parte.",
        items: [
          {
            prompt: "Da tu opinión con _creo que_ y una razón; después niega la opinión contraria con _no creo que_.",
            model: "Creo que es una buena idea porque descansaríamos más. No creo que perdamos clientes por cerrar un día.",
            checklist: ["Indicativo después de _creo que_.", "Subjuntivo después de _no creo que_."],
          },
          {
            prompt: "Expresa una posibilidad y una duda sobre el resultado.",
            model: "Es posible que al principio sea difícil organizarnos. Dudo que todos los departamentos puedan hacerlo igual.",
            checklist: ["Uso una expresión de posibilidad con subjuntivo.", "Uso _dudo que_ con subjuntivo."],
          },
          {
            prompt: "Corrige una interpretación con _no es que…, es que…_ y cierra con _a lo mejor_.",
            model: "No es que quiera trabajar menos, es que quiero trabajar mejor. A lo mejor podemos probarlo en verano.",
            checklist: ["Subjuntivo tras _no es que_ e indicativo tras _es que_.", "Indicativo después de _a lo mejor_."],
          },
        ],
      },
      {
        id: "b1-04-retrieval",
        type: "open",
        title: "Recupera lo que ya sabías",
        prompt: "Sin mirar la teoría, recupera lo que viste la semana pasada. Escribe primero y compara después.",
        items: [
          {
            prompt: "Semana 3: escribe dos frases sobre tu lugar de trabajo o de estudio, una con _me parece que_ (opinión) y otra con _me parece bien que_ (valoración). Explica la diferencia de modo.",
            model: "Me parece que la oficina es demasiado pequeña. Me parece bien que la empresa pague el almuerzo. La primera afirma una opinión: indicativo; la segunda valora: subjuntivo.",
            checklist: ["Uso indicativo con _me parece que_.", "Uso subjuntivo con _me parece bien que_."],
          },
          {
            prompt: "Semana 3: da un consejo a un compañero agotado con _te aconsejo que_ y reacciona a su situación con una emoción.",
            model: "Te aconsejo que tomes unos días de vacaciones. Me preocupa que trabajes tantas horas.",
            checklist: ["El consejo lleva subjuntivo.", "La emoción va en singular + _que_ + subjuntivo."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un comentario de 140–180 palabras en un foro sobre esta pregunta: «¿Debería tu ciudad o tu país adoptar la semana laboral de cuatro días?». Da tu opinión, niega al menos una idea contraria y gradúa tu seguridad sobre las consecuencias.",
    context: "El foro es de un periódico digital y lo leen personas de opiniones muy distintas. Escribe con argumentos claros y un tono respetuoso.",
    steps: [
      "Decide tu postura: a favor, en contra o con matices.",
      "Anota dos argumentos a favor de tu postura y uno contrario que quieras rechazar.",
      "Escribe una primera versión con introducción, argumentos y conclusión.",
      "Revisa cada verbo después de _que_: ¿afirmas (indicativo) o niegas, dudas o ves una posibilidad (subjuntivo)? Corrige lo necesario.",
    ],
    useLanguage: ["Creo que… / Estoy convencido de que…", "No creo que…", "Es posible que… / Puede que…", "Dudo que…", "A lo mejor…", "No es que…, es que…"],
    model: [
      "Desde mi punto de vista, la semana de cuatro días tiene más ventajas que problemas, aunque no creo que sirva igual para todos los sectores. Estoy convencido de que las personas descansadas trabajan mejor y cometen menos errores. Además, pienso que un día libre ayudaría a muchas familias a conciliar y ahorraría transporte y energía.",
      "Algunos dicen que la economía se va a resentir. Sinceramente, no me parece que tengan razón: en los países que lo han probado, la productividad no ha bajado. Es posible que al principio haya problemas de organización y dudo que los hospitales o los restaurantes puedan aplicarlo sin contratar a más gente.",
      "No es que quiera trabajar menos, es que quiero trabajar mejor. A lo mejor la solución es empezar con planes piloto en oficinas y empresas pequeñas, y después decidir con datos. Seguro que en un par de años tenemos respuestas más claras.",
    ],
    checklist: [
      "Expreso mi opinión con indicativo y niego al menos una idea con subjuntivo.",
      "Uso al menos tres expresiones distintas de posibilidad, duda o certeza.",
      "Uso _a lo mejor_ con indicativo.",
      "El comentario tiene postura inicial, argumentos y conclusión.",
      "Mantengo un tono respetuoso con quien opina distinto.",
    ],
    words: [140, 180],
  },
  speaking: {
    intro: "Habla en voz alta y grábate en tu dispositivo. Prepara notas, no un texto para leer; el curso no puntúa tu pronunciación ni sube tu audio.",
    tasks: [
      {
        title: "Tu postura en dos minutos",
        prompt: "Durante dos minutos, defiende tu postura sobre la semana laboral de cuatro días (o sobre el teletrabajo). Da dos razones, rechaza una idea contraria y termina con una posibilidad para el futuro.",
        prep: ["Postura: _Creo que… / No creo que…_", "Dos razones con _porque_.", "Una idea contraria: _Algunos piensan que…, pero no creo que…_", "Futuro: _Es posible que… / A lo mejor…_"],
        seconds: 120,
        model: "Creo que el teletrabajo es positivo para muchas personas, porque ahorran tiempo de transporte y pueden organizarse mejor. Algunos piensan que la gente trabaja menos en casa, pero no creo que sea así: en mi equipo, la productividad no ha bajado. Es posible que en el futuro casi todas las oficinas sean mixtas. A lo mejor vamos solo dos días por semana.",
        selfCheck: ["Alterno indicativo y subjuntivo según afirme o niegue.", "Mi voz baja al final de las afirmaciones.", "Doy razones concretas."],
      },
      {
        title: "Pregunta, responde y aclara",
        prompt: "Tu interlocutor no está de acuerdo contigo. Pregúntale qué piensa con _¿crees que…?_ y _¿no crees que…?_, responde a su objeción y aclara un malentendido con _no es que…, es que…_. Imagina sus respuestas en voz alta.",
        prep: ["Pregunta: _¿Crees que…? ¿No crees que…?_", "Responde: _Entiendo lo que dices, pero dudo que…_", "Aclara: _No es que…, es que…_"],
        seconds: 90,
        model: "¿Crees que la gente trabaja menos en casa? Entiendo lo que dices, pero dudo que sea un problema general. ¿No crees que depende de cada persona? No es que esté en contra de la oficina, es que me gusta poder elegir.",
        selfCheck: ["Hago preguntas con la entonación correcta.", "Respondo a la objeción antes de seguir.", "Uso _no es que_ + subjuntivo."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que has repasado y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Opina", task: "Trae una noticia de esta semana y da tu opinión en dos frases: una afirmada y una negada.", phrases: ["Creo que…", "No creo que…"] },
      { move: "Pregunta", task: "Pregunta a tu profesor su opinión sobre la misma noticia y busca su acuerdo.", phrases: ["¿Tú crees que…?", "¿No crees que…?"] },
      { move: "Gradúa", task: "Haz tres predicciones sobre tu semana con distinto grado de seguridad.", phrases: ["Seguro que…", "A lo mejor…", "Dudo que…"] },
    ],
    bring: "Tu comentario del foro revisado con los verbos de opinión subrayados y la grabación de tu postura.",
  },
  quiz: {
    items: [
      { type: "choice", q: "No pienso que la reunión ___ más de una hora.", options: ["dura", "durar", "dure"], answer: 2, why: "Opinión negada: **subjuntivo**." },
      { type: "listen", q: "Escucha la frase de Sebastián: ¿es una pregunta o una afirmación?", audio: "¿No crees que podemos organizar un turno?", voice: "es-CO-m", options: ["Una afirmación", "Una pregunta para buscar acuerdo"], answer: 1, why: "La voz sube: es una pregunta con _¿no crees que…?_" },
      { type: "gap", q: "Estoy segura de que el piloto ___ bien. (salir)", answers: [["sale", "va a salir", "saldrá"]], why: "Certeza: **indicativo**." },
      { type: "gap", q: "Puede que los diseñadores ___ más los viernes libres. (descansar)", answers: [["descansen"]], why: "_Puede que_ + **subjuntivo**." },
      { type: "gap", q: "A lo mejor ___ mañana con el cliente de Cali. (yo, hablar)", answers: [["hablo"]], why: "_A lo mejor_ + **indicativo**." },
      { type: "error", sentence: "Dudo que la empresa cambia el horario este año.", answers: ["Dudo que la empresa cambie el horario este año."], why: "_Dudo que_ + **subjuntivo**." },
      { type: "error", sentence: "Creo que tengamos que hablar con recursos humanos.", answers: ["Creo que tenemos que hablar con recursos humanos."], why: "_Creo que_ afirma: **indicativo**." },
      { type: "order", words: ["No", "es", "que", "esté", "en", "contra,", "es", "que", "dudo."] },
      {
        type: "open",
        prompt: "Reformulación. Texto de partida: «Luisa: El turno de guardia funciona. Los clientes lo aceptan.» Luisa en realidad no está de acuerdo. Escribe su opinión negando las dos ideas con «No creo que…».",
        model: "No creo que el turno de guardia funcione ni que los clientes lo acepten.",
        checklist: ["Uso subjuntivo en los dos verbos.", "Conservo las dos ideas del texto de partida.", "Acepto otra formulación equivalente, por ejemplo con dos frases."],
      },
      {
        type: "open",
        prompt: "Escribe tres frases sobre el futuro de tu trabajo o tus estudios: una con certeza, una con posibilidad y una con duda.",
        model: "Seguro que voy a usar más la inteligencia artificial. Es posible que cambie de equipo. Dudo que vuelva a trabajar cinco días en la oficina.",
        checklist: ["Certeza con indicativo.", "Posibilidad con subjuntivo.", "Duda con subjuntivo."],
      },
    ],
  },
  complete: {
    canNow: [
      "Afirmar una opinión con creo que, pienso que o me parece que + indicativo.",
      "Negar una opinión con no creo que, no pienso que o no estoy seguro de que + subjuntivo.",
      "Preguntar opiniones, buscar acuerdo con ¿no crees que…? y corregir con no es que…, es que…",
      "Graduar la seguridad: seguro que y a lo mejor con indicativo; es posible que, puede que y dudo que con subjuntivo; quizás con los dos.",
    ],
    review: [
      "Afirmo → indicativo; niego la opinión → subjuntivo.",
      "A lo mejor + indicativo, siempre.",
      "No es que + subjuntivo, es que + indicativo.",
    ],
  },
  related: [
    { path: "/gramatica/opinion-afirmativa-frente-a-opinion-negada", label: "Clase: Opinión afirmativa frente a opinión negada" },
    { path: "/gramatica/duda-posibilidad-y-certeza-en-enunciados", label: "Clase: Duda, posibilidad y certeza en enunciados" },
  ],
};
