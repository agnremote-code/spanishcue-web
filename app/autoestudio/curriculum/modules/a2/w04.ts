import type { Module } from "../../types";

export const a2w04: Module = {
  id: "a2-04",
  level: "a2",
  week: 4,
  kind: "core",
  title: "Hoy he dicho, hoy dije; antes solía",
  subtitle: "Repaso de las dos maneras de contar lo reciente según la región (he hablado / hablé) y de solía + infinitivo para las costumbres de otra época.",
  stop: { place: "León", country: "Nicaragua" },
  minutes: 105,
  newObjectives: [
    "a2.gram.g051",
    "a2.gram.g052",
    "a2.voc.w04-vida-universitaria",
    "a2.pron.w04-entonacion-preguntas",
    "a2.lis.w04-sala-profesores",
    "a2.read.w04-exposicion-fotos",
    "a2.wri.w04-mensaje-antes-ahora",
    "a2.spk.w04-costumbres-de-otra-epoca",
    "a2.fun.w04-comparar-epocas",
    "a2.disc.w04-contraste-antes-ahora",
  ],
  reviewObjectives: ["a2.gram.g049","a2.gram.g050","a2.voc.w03-ciudad-antigua","a2.pron.w03-hiato-ia","a2.lis.w03-recuerdos-abuela","a2.read.w03-cronica-murcielago","a2.wri.w03-recuerdo-lugar","a2.spk.w03-anecdota-infancia","a2.fun.w03-describir-pasado","a2.disc.w03-escena-y-hechos"],
  prerequisites: ["a2-03"],
  goal: {
    canDo: "Al final de esta semana puedes entender y usar las dos maneras de contar tu día (he hablado / hablé), saber cuándo una forma es un error, y contar las costumbres de otra época con solía.",
    steps: [
      "Repasa dónde se prefiere `hoy he comido` y dónde `hoy comí`, y por qué las dos son correctas.",
      "Repasa qué no cambia en ninguna región: con `ayer` siempre va el indefinido.",
      "Repasa `solía` + infinitivo y compáralo con una vez y con ahora.",
      "Practica la entonación de las preguntas sobre el pasado.",
      "Escucha a dos profesores de León y lee los pies de foto de una exposición.",
      "Escribe y graba un mensaje sobre tu vida antes y ahora.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases: cómo cambia el uso del perfecto y del indefinido de una región a otra, y cómo contar costumbres antiguas con **solía**. Ya conoces las formas; ahora aprendes a elegir según dónde estás y qué quieres decir.",
    parts: [
      {
        heading: "Dos maneras de contar el día de hoy",
        body: [
          "Para algo que pasó **hoy** o **esta semana**, el español tiene dos costumbres. En la mayor parte de España se prefiere el perfecto: _Hoy he comido con mi jefa_. En México, Centroamérica, el Caribe y el Río de la Plata, y también en Canarias, se usa mucho el indefinido: _Hoy comí con mi jefa_.",
          "Las dos son **correctas**: no es un error, es una **variedad**. Un nicaragüense entiende perfectamente _he comido_ y una madrileña entiende _comí_.",
          "Tampoco es un simple «España contra América»: en zonas de Perú o Bolivia se oye mucho el perfecto, y en el noroeste de España, el indefinido. Lo importante es reconocer las dos y elegir una con coherencia.",
        ],
        support: [
          "For things that happened today, much of Spain uses the perfect (_he comido_) and much of Latin America uses the simple past (_comí_). Both are correct.",
        ],
        table: {
          caption: "La misma noticia en dos variedades",
          head: ["Más frecuente en España", "Más frecuente en gran parte de América"],
          rows: [
            ["Hoy he llegado tarde.", "Hoy llegué tarde."],
            ["Esta semana hemos trabajado mucho.", "Esta semana trabajamos mucho."],
            ["¿Has visto a Luis esta mañana?", "¿Viste a Luis esta mañana?"],
            ["¿Has estado alguna vez en León?", "¿Alguna vez estuviste en León?"],
          ],
        },
        examples: [
          { es: "—¿Qué tal el día? —Bien, he dado tres clases. (España)", en: "—How was your day? —Good, I've taught three classes." },
          { es: "—¿Qué tal el día? —Bien, di tres clases. (Nicaragua)", en: "—How was your day? —Good, I taught three classes." },
        ],
        mistakes: [
          { wrong: "Esta mañana he fui al banco.", right: "Esta mañana he ido al banco. / Esta mañana fui al banco.", why: "No mezcles las dos formas en el mismo verbo: o **he ido** o **fui**." },
        ],
        tip: "Si vives o estudias en un país concreto, imita lo que oyes allí. Si no, elige una variedad y no cambies a mitad del texto.",
      },
      {
        heading: "Lo que no cambia: el tiempo cerrado",
        body: [
          "Con un tiempo **cerrado** (**ayer**, **anoche**, **el lunes pasado**, **en 2018**, **el mes pasado**), todas las variedades usan el **indefinido**. _Ayer he ido al médico_ es un error en cualquier país.",
          "Por eso la pregunta clave es: ¿el tiempo de la frase incluye el presente? Si dices _hoy_, _esta semana_, _este año_ o no dices cuándo, puedes elegir según tu variedad. Si el tiempo está terminado, solo hay una opción.",
          "En una conversación entre personas de regiones distintas es normal oír las dos formas. No corrijas a nadie por decir _hoy comí_ o _hoy he comido_.",
        ],
        support: [
          "With finished time words (_ayer_, _el lunes pasado_), all varieties use the simple past. _Ayer he ido_ is a mistake everywhere.",
        ],
        examples: [
          { es: "Anoche cenamos en casa de Sofía.", en: "Last night we had dinner at Sofía's." },
          { es: "En 2020 mis padres se mudaron a León.", en: "In 2020 my parents moved to León." },
          { es: "Este año he leído / leí cinco novelas.", en: "This year I've read / I read five novels." },
        ],
        mistakes: [
          { wrong: "El domingo pasado hemos visitado la catedral.", right: "El domingo pasado visitamos la catedral.", why: "**El domingo pasado** es un tiempo cerrado: indefinido en todas las variedades." },
          { wrong: "En 2015 he terminado la carrera.", right: "En 2015 terminé la carrera.", why: "Un año terminado: **terminé**." },
        ],
      },
      {
        heading: "Solía + infinitivo: costumbres de otra época",
        body: [
          "**Solía** + infinitivo cuenta algo que pasaba **muchas veces** en una etapa del pasado: _De joven solía correr por las mañanas_. Es como el imperfecto de costumbre, pero subraya la repetición.",
          "Solo cambia **soler**; el segundo verbo va siempre en infinitivo: _solía ir_, _solíamos comer_. No lleva preposición: nunca _solía a ir_ ni _solía de ir_.",
          "Para contar costumbres del pasado, **soler** se usa casi solo en imperfecto. Para las costumbres de hoy existe el presente: _suelo_, _sueles_, _suele_… _Ahora suelo trabajar desde casa._",
        ],
        support: [
          "_Solía_ + infinitive = _used to_ + verb. Only _soler_ changes; the second verb stays in the infinitive.",
        ],
        table: {
          caption: "Soler en imperfecto",
          head: ["Persona", "soler", "Ejemplo"],
          rows: [
            ["yo", "solía", "solía estudiar de noche"],
            ["tú", "solías", "solías llegar tarde"],
            ["él, ella, usted", "solía", "solía cantar en el coro"],
            ["nosotros, nosotras", "solíamos", "solíamos ir al cine"],
            ["vosotros, vosotras", "solíais", "solíais jugar al ajedrez"],
            ["ellos, ellas, ustedes", "solían", "solían escribir cartas"],
          ],
        },
        examples: [
          { es: "Mi padre solía leer el periódico en el parque.", en: "My father used to read the paper in the park." },
          { es: "Los estudiantes solían copiar los apuntes a mano.", en: "Students used to copy their notes by hand." },
        ],
        mistakes: [
          { wrong: "De niña solía a jugar en la calle.", right: "De niña solía jugar en la calle.", why: "Entre **solía** y el infinitivo no va ninguna preposición." },
          { wrong: "Antes mi abuela solía cocinaba los domingos.", right: "Antes mi abuela solía cocinar los domingos.", why: "Después de **solía**, el verbo va en infinitivo: **cocinar**." },
        ],
      },
      {
        heading: "Costumbre, una vez o ahora",
        body: [
          "Compara tres frases. **Costumbre** del pasado: _Solía ir a la playa en Semana Santa_. **Una vez**, un hecho concreto: _En 2019 fui a la playa en Semana Santa_. **Ahora**: _Ahora voy a la montaña_.",
          "Por eso **solía** no combina con marcadores de una sola vez: _ayer_, _un día_, _el lunes pasado_. Con ellos usa el indefinido.",
          "Para contrastar épocas, une las frases con **pero** o **en cambio**: _Antes solíamos hablar por teléfono fijo; en cambio, ahora nos escribimos por el móvil._",
        ],
        support: [
          "Habit in the past → _solía_ / imperfect. One specific time → simple past. Now → present.",
        ],
        examples: [
          { es: "Antes solía comprar en el mercado; ahora compro por internet.", en: "I used to shop at the market; now I buy online." },
          { es: "Un día fui en bicicleta al trabajo y llegué empapado.", en: "One day I cycled to work and arrived soaked." },
        ],
        mistakes: [
          { wrong: "El sábado pasado solía ir al cine.", right: "El sábado pasado fui al cine.", why: "**El sábado pasado** es una sola vez: indefinido." },
        ],
        tip: "Haz la prueba de la frecuencia: si puedes añadir _normalmente_ o _casi siempre_, **solía** funciona.",
      },
    ],
  },
  grammar: {
    intro: "Primero distingues variedad y error en el perfecto y el indefinido; después practicas solía.",
    exercises: [
      {
        id: "g1",
        type: "classify",
        title: "¿Variedad o error?",
        prompt: "Decide si la frase es correcta en alguna variedad del español o si es un error en todas.",
        categories: ["correcta (en alguna variedad o en todas)", "error en todas las variedades"],
        items: [
          { text: "Hoy desayuné en la cafetería de la facultad.", cat: 0, why: "Variedad frecuente en América." },
          { text: "Ayer he desayunado en la cafetería.", cat: 1, why: "**Ayer** pide indefinido en todas partes." },
          { text: "Esta semana he tenido mucho trabajo.", cat: 0, why: "Variedad frecuente en España." },
          { text: "En 2021 hemos viajado a Costa Rica.", cat: 1, why: "Un año cerrado: **viajamos**." },
          { text: "¿Alguna vez probaste el quesillo?", cat: 0 },
          { text: "Anoche he dormido fatal.", cat: 1, why: "**Anoche** es tiempo cerrado: **dormí**." },
        ],
      },
      {
        id: "g2",
        type: "transform",
        title: "Cambia de variedad",
        prompt: "Escribe la misma frase con la otra forma. No cambies nada más.",
        items: [
          { source: "Hoy he terminado el informe.", instruction: "Dilo como en Nicaragua, con indefinido.", answers: ["Hoy terminé el informe."], why: "Yo: **terminé**." },
          { source: "Esta mañana vimos a la directora.", instruction: "Dilo como en Madrid, con perfecto.", answers: ["Esta mañana hemos visto a la directora."], why: "Nosotros + **visto** (irregular)." },
          { source: "¿Has hablado hoy con tu madre?", instruction: "Dilo con indefinido.", answers: ["¿Hablaste hoy con tu madre?"], why: "Tú: **hablaste**, sin -s final." },
          { source: "Este año mis hijos crecieron mucho.", instruction: "Dilo con perfecto.", answers: ["Este año mis hijos han crecido mucho."], why: "Ellos: **han crecido**." },
        ],
      },
      {
        id: "g3",
        type: "gap",
        title: "Las formas de solía",
        prompt: "Completa con soler en imperfecto y el verbo entre paréntesis.",
        items: [
          { q: "De estudiantes, mis amigos y yo ___ (estudiar) en la biblioteca hasta las diez.", answers: [["solíamos estudiar"]], why: "Nosotros: **solíamos** + infinitivo." },
          { q: "Mi abuelo ___ (contar) historias de fantasmas.", answers: [["solía contar"]], why: "Él: **solía** + infinitivo." },
          { q: "¿Tú ___ (ver) dibujos animados antes de ir a la escuela?", answers: [["solías ver"]], why: "Tú: **solías** + infinitivo." },
          { q: "Antes los vecinos ___ (dejar) la puerta abierta.", answers: [["solían dejar"]], why: "Ellos: **solían** + infinitivo." },
          { q: "Cuando vivía en Madrid, yo ___ (salir) a correr por el Retiro.", answers: [["solía salir"]], why: "Yo: **solía** + infinitivo." },
        ],
      },
      {
        id: "g4",
        type: "choice",
        title: "¿Costumbre, una vez o ahora?",
        prompt: "Elige la forma que encaja con el marcador de tiempo.",
        items: [
          { q: "Cuando era estudiante, ___ los apuntes en la copistería de la esquina.", options: ["fotocopié", "suelo fotocopiar", "solía fotocopiar"], answer: 2, why: "Costumbre de una etapa pasada: **solía**." },
          { q: "Un día ___ mi cartera en el autobús.", options: ["solía perder", "perdí", "pierdo"], answer: 1, why: "**Un día**: una sola vez, indefinido." },
          { q: "Ahora ___ desayunar en casa, pero antes desayunaba en la calle.", options: ["suelo", "solía", "solí"], answer: 0, why: "**Ahora**: costumbre presente, **suelo**." },
          { q: "En los años noventa la gente ___ cartas a sus familias.", options: ["escribió una vez", "solía escribir", "suele escribir"], answer: 1 },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "El tema de la semana es la vida universitaria en León, antes y ahora: cómo estudiaban, se comunicaban y se divertían los estudiantes.",
    groups: [
      {
        title: "Estudiar antes",
        items: [
          { es: "la máquina de escribir", en: "the typewriter" },
          { es: "los apuntes a mano", en: "handwritten notes" },
          { es: "la copistería", en: "the photocopy shop" },
          { es: "el fichero de la biblioteca", en: "the library card catalogue" },
          { es: "la cabina telefónica", en: "the phone box" },
          { es: "escribir cartas", en: "to write letters" },
        ],
      },
      {
        title: "Estudiar ahora",
        items: [
          { es: "el portátil", en: "the laptop" },
          { es: "la plataforma en línea", en: "the online platform" },
          { es: "el grupo de mensajes", en: "the group chat" },
          { es: "entregar un trabajo", en: "to hand in an assignment" },
          { es: "hacer una videollamada", en: "to make a video call" },
        ],
      },
      {
        title: "Para comparar épocas",
        items: [
          { es: "antes / ahora", en: "before / now" },
          { es: "en cambio", en: "on the other hand" },
          { es: "en aquella época", en: "back then" },
          { es: "hoy en día", en: "nowadays" },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "De antes a ahora",
        prompt: "Une cada costumbre de antes con lo que se hace ahora.",
        pairs: [
          { left: "Solían escribir los trabajos a máquina.", right: "Ahora los escriben en el portátil." },
          { left: "Solían buscar libros en el fichero.", right: "Ahora los buscan en el catálogo en línea." },
          { left: "Solían llamar desde una cabina.", right: "Ahora hacen videollamadas." },
          { left: "Solían dejar notas en el tablón.", right: "Ahora escriben en el grupo de mensajes." },
        ],
        why: "Las costumbres de otra época con **solían**; las de hoy, en presente.",
      },
      {
        id: "v2",
        type: "context",
        title: "¿Qué dices?",
        prompt: "Lee la situación y elige la frase natural.",
        items: [
          { context: "Le explicas a un joven cómo hacían los trabajos en tu época.", q: "Dices:", options: ["En aquella época solíamos entregar los trabajos en papel.", "Hoy en día solíamos entregar los trabajos en papel.", "En aquella época suelo entregar los trabajos en papel."], answer: 0 },
          { context: "Comparas cómo se comunicaba tu familia antes y cómo lo hace ahora.", q: "Dices:", options: ["Antes escribíamos cartas; en cambio, antes usamos el móvil.", "Antes escribíamos cartas; en cambio, ahora usamos el móvil.", "Ahora escribíamos cartas; en cambio, antes usamos el móvil."], answer: 1, why: "**En cambio** une dos épocas opuestas: antes / ahora." },
          { context: "Necesitas copiar cien páginas de un libro para tu clase.", q: "Vas a:", options: ["la cabina telefónica", "la máquina de escribir", "la copistería"], answer: 2 },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La entonación de las preguntas sobre el pasado",
    explanation: [
      "Una pregunta de **sí o no** sube al final: _¿Fuiste a la reunión?_ ↗. La misma frase con la voz que baja al final es una afirmación: _Fuiste a la reunión._ ↘ Como en español el orden de las palabras muchas veces no cambia, la **melodía** es lo único que distingue la pregunta.",
      "Una pregunta con **qué**, **dónde**, **cuándo**, **quién** o **cómo** normalmente **baja** al final: _¿Dónde comiste hoy?_ ↘. La palabra interrogativa ya dice que es una pregunta.",
      "Esto vale para las dos variedades: _¿Has comido?_ ↗ y _¿Comiste?_ ↗ suben igual.",
    ],
    support: [
      "Yes/no questions rise at the end; questions with _qué, dónde, cuándo…_ usually fall. Intonation is often the only clue that it's a question.",
    ],
    table: {
      caption: "Tres melodías",
      head: ["Tipo", "Ejemplo", "Final"],
      rows: [
        ["afirmación", "Has terminado.", "baja ↘"],
        ["pregunta de sí o no", "¿Has terminado?", "sube ↗"],
        ["pregunta con qué, dónde…", "¿Qué has terminado?", "baja ↘"],
      ],
    },
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Pregunta o afirmación?",
      prompt: "Escucha y decide qué es.",
      items: [
        { q: "¿Qué oyes?", audio: "¿Llegaste tarde a clase?", options: ["una afirmación", "una pregunta de sí o no"], answer: 1 },
        { q: "¿Qué oyes?", audio: "Has visto a la profesora.", options: ["una afirmación", "una pregunta de sí o no"], answer: 0 },
        { q: "¿Qué oyes?", audio: "¿Solías vivir en León?", options: ["una afirmación", "una pregunta de sí o no"], answer: 1 },
        { q: "¿Qué oyes?", audio: "Comieron en la residencia.", options: ["una afirmación", "una pregunta de sí o no"], answer: 0 },
        { q: "¿Qué oyes?", audio: "¿Han entregado el trabajo?", options: ["una afirmación", "una pregunta de sí o no"], answer: 1 },
      ],
    },
    produce: [
      { text: "¿Fuiste a la biblioteca? Sí, fui a la biblioteca.", tip: "La pregunta sube al final; la respuesta baja." },
      { text: "¿Has visto mi cuaderno?", tip: "Sube en la última sílaba fuerte: _cua-DER-no_ ↗." },
      { text: "¿Dónde solías estudiar?", tip: "Con **dónde**, la voz baja al final." },
      { text: "¿Comiste hoy en casa o en la universidad?", tip: "En una pregunta con **o**, sube en la primera opción y baja en la segunda." },
      { text: "Hoy he trabajado mucho. ¿Y tú?", tip: "Grábate y comprueba que _¿Y tú?_ sube." },
    ],
    spelling: "En español escrito, la pregunta se abre con **¿** y se cierra con **?**. El signo de apertura te avisa desde el principio de que la voz va a cambiar.",
  },
  listening: {
    title: "En la sala de profesores",
    context: "Son las seis de la tarde en la universidad de León. Marta, una profesora de Madrid que trabaja un semestre en Nicaragua, habla con su colega Joaquín, que es de León.",
    speakers: [
      { id: "marta", name: "Marta", voice: "es-ES-f", role: "profesora visitante, de Madrid" },
      { id: "joaquin", name: "Joaquín", voice: "es-MX-m", role: "profesor de historia, de León" },
    ],
    script: [
      { speaker: "joaquin", text: "Hola, Marta. ¿Qué tal tu día?" },
      { speaker: "marta", text: "Agotador. Hoy he dado cuatro clases y he corregido treinta exámenes. ¿Y tú?" },
      { speaker: "joaquin", text: "Yo hoy di solo una clase, pero después fui a una reunión eterna y comí a las cuatro." },
      { speaker: "marta", text: "Oye, una pregunta. Aquí todos dicen «hoy fui», «hoy comí». ¿Yo hablo raro cuando digo «he ido»?" },
      { speaker: "joaquin", text: "No, no, se entiende perfectamente. Es tu variedad. Nosotros preferimos el indefinido, pero las dos formas son correctas." },
      { speaker: "marta", text: "Menos mal. Ayer un estudiante me dijo «ayer he ido» y le corregí." },
      { speaker: "joaquin", text: "Ahí hiciste bien: con «ayer», todos usamos el indefinido. Mira, ¿te enseño algo? Son fotos de la universidad en los años ochenta." },
      { speaker: "marta", text: "¡Qué maravilla! ¿Ese eres tú?" },
      { speaker: "joaquin", text: "Sí, con veinte años. En aquella época solíamos estudiar en la biblioteca hasta que cerraban. No había internet, claro. Solíamos copiar los apuntes a mano." },
      { speaker: "marta", text: "¿Y para hablar con la familia?" },
      { speaker: "joaquin", text: "Yo solía escribir una carta a mi madre cada semana. Y los domingos hacíamos cola en la cabina de la plaza. Un domingo esperé dos horas y al final la cabina no funcionaba." },
      { speaker: "marta", text: "¡Pobre! Y ahora te quejas cuando el wifi va lento." },
      { speaker: "joaquin", text: "Exacto. Ahora suelo quejarme de todo." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Primera escucha: escucha todo y busca la idea general.",
        exercise: {
          id: "l1",
          type: "choice",
          prompt: "Responde con la idea general.",
          items: [
            { q: "¿De qué hablan Marta y Joaquín?", options: ["de un examen que van a preparar", "de su día, de cómo hablan y de la universidad de antes", "de un viaje a Madrid"], answer: 1 },
            { q: "¿Qué piensa Joaquín de la forma «he ido» de Marta?", options: ["Que es correcta: es su variedad.", "Que es un error.", "Que no la entiende."], answer: 0 },
            { q: "¿Qué le enseña Joaquín a Marta?", options: ["un examen corregido", "su nuevo portátil", "fotos antiguas de la universidad"], answer: 2 },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a los detalles de hoy y de antes.",
        exercise: {
          id: "l2",
          type: "choice",
          prompt: "Elige la respuesta correcta.",
          items: [
            { q: "¿Cuántas clases dio Marta hoy?", options: ["una", "cuatro", "treinta"], answer: 1 },
            { q: "¿Por qué corrigió Marta a un estudiante?", options: ["Porque dijo «ayer he ido».", "Porque dijo «hoy fui».", "Porque llegó tarde."], answer: 0 },
            { q: "¿Cómo se comunicaba Joaquín con su madre?", options: ["por correo electrónico", "por teléfono todos los días", "con una carta cada semana"], answer: 2 },
            { q: "¿Qué pasó un domingo en la cabina?", options: ["Habló dos horas.", "Perdió su carta.", "Esperó mucho y no funcionaba."], answer: 2 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en qué forma usa cada uno.",
        exercise: {
          id: "l3",
          type: "classify",
          prompt: "¿Qué cuenta cada frase?",
          categories: ["algo de hoy (variedad)", "una costumbre de otra época", "una sola vez en el pasado"],
          items: [
            { text: "Hoy he dado cuatro clases.", cat: 0, why: "Marta usa el perfecto, como en Madrid." },
            { text: "Yo hoy di solo una clase.", cat: 0, why: "Joaquín usa el indefinido, como en Nicaragua." },
            { text: "Solíamos estudiar en la biblioteca.", cat: 1 },
            { text: "Yo solía escribir una carta a mi madre.", cat: 1 },
            { text: "Un domingo esperé dos horas.", cat: 2, why: "**Un domingo**: una vez concreta." },
            { text: "Ayer un estudiante me dijo «ayer he ido».", cat: 2 },
          ],
        },
      },
    ],
  },
  reading: {
    title: "León, 1985: así éramos",
    genre: "Pies de foto de una exposición",
    frame: "La biblioteca de la universidad organiza una exposición de fotos antiguas. Cada foto lleva un texto escrito por un antiguo estudiante.",
    text: [
      "Foto 1. La biblioteca central. En los años ochenta no había ordenadores. Solíamos buscar los libros en un fichero de madera enorme y, si el libro estaba prestado, apuntábamos nuestro nombre en una lista. A veces esperábamos un mes. Yo solía llegar a las siete para conseguir mesa. (Ramiro, Derecho, 1984-1989)",
      "Foto 2. La copistería de doña Tere, enfrente de la facultad. Ella solía guardar los apuntes de los mejores estudiantes y los vendía a los demás. Un día de exámenes se rompió la máquina y toda la facultad estudió con los mismos tres cuadernos. (Auxiliadora, Medicina, 1985-1991)",
      "Foto 3. La cabina de la plaza. Los domingos solíamos hacer cola para llamar a nuestras familias. Cada llamada duraba cinco minutos como máximo, porque detrás siempre había alguien esperando. Mis padres vivían en el campo y no tenían teléfono, así que yo llamaba a la tienda del pueblo. (Gerardo, Ingeniería, 1983-1988)",
      "Foto 4. La fiesta de fin de curso, en junio de 1986. Esa noche hubo un apagón en todo el barrio, pero la banda siguió tocando con guitarras sin electricidad. Fue la mejor fiesta de mi vida. Hoy en día los estudiantes suelen celebrar el final del curso en un bar; en cambio, nosotros solíamos bailar en la calle. (Auxiliadora)",
    ],
    glossary: [
      { es: "el fichero", en: "the card catalogue" },
      { es: "prestado", en: "on loan" },
      { es: "enfrente de", en: "opposite" },
      { es: "el apagón", en: "the power cut" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee los pies de foto y responde.",
        items: [
          { q: "¿Por qué llegaba Ramiro a las siete a la biblioteca?", options: ["Para buscar en internet.", "Para conseguir una mesa.", "Para trabajar en el fichero."], answer: 1 },
          { q: "¿Qué hacía doña Tere con los mejores apuntes?", options: ["Los guardaba y los vendía.", "Los tiraba.", "Los llevaba a la biblioteca."], answer: 0 },
          { q: "¿A dónde llamaba Gerardo los domingos?", options: ["a casa de sus padres", "a la universidad", "a la tienda del pueblo"], answer: 2 },
        ],
      },
      {
        id: "r2",
        type: "classify",
        prompt: "¿Es una costumbre de aquella época o algo que pasó una sola vez?",
        categories: ["costumbre", "una sola vez"],
        items: [
          { text: "buscar libros en el fichero", cat: 0 },
          { text: "la máquina de la copistería se rompió", cat: 1 },
          { text: "hacer cola en la cabina los domingos", cat: 0 },
          { text: "hubo un apagón en el barrio", cat: 1 },
          { text: "bailar en la calle al final del curso", cat: 0 },
          { text: "la banda tocó sin electricidad", cat: 1 },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase de los pies de foto para ver qué gramática hay dentro.",
      items: [
        { quote: "Solíamos buscar los libros en un fichero", note: "**Solíamos** + infinitivo: costumbre de toda una etapa." },
        { quote: "Un día de exámenes se rompió la máquina", note: "**Un día**: una sola vez, indefinido, también en una lista de costumbres." },
        { quote: "Esa noche hubo un apagón", note: "Un suceso concreto: **hubo**." },
        { quote: "en cambio, nosotros solíamos bailar en la calle", note: "**En cambio** contrasta la costumbre de hoy (_suelen celebrar_) con la de antes." },
      ],
    },
  },
  practice: {
    intro: "Ahora mezclas las dos clases: la variación entre perfecto e indefinido y las costumbres con solía.",
    exercises: [
      {
        id: "x1",
        type: "order",
        title: "Antes y ahora",
        prompt: "Toca las palabras en orden.",
        items: [
          { words: ["En", "aquella", "época", "solíamos", "escribir", "cartas", "a", "mano."], en: "Back then we used to write letters by hand." },
          { words: ["Hoy", "he", "llegado", "tarde", "a", "la", "facultad."], en: "Today I arrived late at the faculty." },
          { words: ["Antes", "solía", "fumar;", "en", "cambio,", "ahora", "hago", "deporte."], en: "I used to smoke; now, on the other hand, I do sport." },
        ],
      },
      {
        id: "x2",
        type: "error",
        title: "Corrige los mensajes",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "El martes pasado he tenido un examen de historia.", answers: ["El martes pasado tuve un examen de historia."], why: "Tiempo cerrado: **tuve**, en todas las variedades." },
          { sentence: "De pequeño mi hermano solía de llorar mucho.", answers: ["De pequeño mi hermano solía llorar mucho."], why: "Sin preposición: **solía llorar**." },
          { sentence: "Antes solíamos comíamos juntos los domingos.", answers: ["Antes solíamos comer juntos los domingos."], why: "Después de **solíamos**, infinitivo: **comer**." },
          { sentence: "Ayer por la tarde solí ir al gimnasio.", answers: ["Ayer por la tarde fui al gimnasio."], why: "**Ayer** es una sola vez: indefinido de _ir_, **fui**." },
        ],
      },
      {
        id: "x3",
        type: "context",
        title: "¿Qué frase encaja?",
        prompt: "Lee la situación y elige la mejor frase.",
        items: [
          { context: "Estás en Managua. Un compañero te pregunta a las cinco de la tarde qué hiciste en la mañana.", q: "Respondes con la forma más frecuente allí:", options: ["Esta mañana fui al banco y pagué el alquiler.", "Esta mañana solía ir al banco.", "Esta mañana iba al banco y pagaba."], answer: 0 },
          { context: "Una amiga española te cuenta su día y dice «he comido con mis padres».", q: "Piensas:", options: ["Es un error: debe decir «comí».", "Es correcto: es su variedad.", "Es un error: debe decir «solía comer»."], answer: 1 },
          { context: "Hablas de tus vacaciones de niño en casa de tus tíos.", q: "Dices:", options: ["Un verano solía ir al río.", "Todos los veranos fui al río una vez.", "Todos los veranos solíamos bañarnos en el río."], answer: 2, why: "Repetición en una etapa: **solíamos**." },
        ],
      },
      {
        id: "x4",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases sobre ti y compáralas con el modelo.",
        items: [
          {
            prompt: "Cuenta tres cosas que hiciste hoy. Elige una variedad (perfecto o indefinido) y úsala en las tres.",
            model: "Hoy me levanté a las seis, preparé el desayuno para mis hijos y llegué a la oficina a las ocho.",
            checklist: ["Usas siempre la misma forma", "Las formas están bien conjugadas", "Hay un marcador de hoy"],
          },
          {
            prompt: "Escribe tres costumbres que solías tener cuando tenías quince años.",
            model: "Solía escuchar música en la radio por la noche. Solía jugar al baloncesto los sábados. Mis amigos y yo solíamos ir al centro comercial.",
            checklist: ["**Solía** + infinitivo, sin preposición", "Al menos una forma de plural (_solíamos_, _solían_)", "No hay marcadores de una sola vez"],
          },
          {
            prompt: "Compara una costumbre de antes con lo que haces ahora usando «en cambio».",
            model: "Antes solía comer comida rápida casi todos los días; en cambio, ahora cocino en casa.",
            checklist: ["**Solía** para antes", "Presente para ahora", "**En cambio** une las dos épocas"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un mensaje a un antiguo compañero de clase: cuéntale tu día de hoy y compara tu vida de antes con la de ahora.",
    context: "Un antiguo compañero de clase te escribe: «¡Cuánto tiempo! ¿Qué tal estás? ¿Qué haces ahora? ¿Te acuerdas de lo que hacíamos en el instituto?». Responde con un mensaje.",
    steps: [
      "Saluda y cuenta qué has hecho hoy o qué hiciste hoy (elige una variedad).",
      "Recuerda tres costumbres que solían tener juntos en aquella época.",
      "Cuenta una cosa que pasó una sola vez y que los dos recuerdan.",
      "Compara con tu vida de ahora con _en cambio_ o _pero ahora_.",
      "Revisa: ¿usas la misma variedad en todo el mensaje? ¿Hay preposición entre solía y el infinitivo? Corrígela.",
    ],
    useLanguage: ["Hoy he… / Hoy…", "¿Te acuerdas? Solíamos…", "Un día…", "En cambio, ahora…", "Hoy en día suelo…"],
    model: [
      "¡Hola, Rubén! ¡Qué sorpresa! Hoy fui al dentista y después trabajé toda la tarde, pero tengo un rato para escribirte. ¿Te acuerdas del instituto? Solíamos jugar al fútbol en el recreo y siempre perdíamos. Los viernes solíamos comer pupusas en el puesto de la esquina. Un día el profesor de química nos encontró allí en horario de clase. En cambio, ahora suelo comer ensalada en la oficina. ¡Qué aburrido!",
    ],
    checklist: [
      "Usas una sola variedad para el día de hoy.",
      "Usas solía o solíamos + infinitivo para las costumbres.",
      "Lo que pasó una vez está en indefinido.",
      "Comparas antes y ahora con en cambio o pero.",
    ],
    words: [60, 110],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Cuida la melodía de las preguntas.",
    tasks: [
      {
        title: "Mi vida en otra época",
        prompt: "Cuenta cómo era tu vida cuando tenías quince años: dónde vivías, qué solías hacer los fines de semana y qué solías comer. Después di qué ha cambiado.",
        prep: ["A los quince años vivía…", "Los fines de semana solía…", "En cambio, ahora…"],
        seconds: 75,
        model: "A los quince años vivía con mis padres en un pueblo pequeño. Solía ir al colegio en bicicleta y los fines de semana solía ayudar a mi padre en la tienda. Solíamos comer todos juntos los domingos. En cambio, ahora vivo sola en la ciudad y suelo comer delante del ordenador.",
        selfCheck: ["Uso **solía** + infinitivo sin preposición.", "Comparo con el presente."],
      },
      {
        title: "Dos variedades, un día",
        prompt: "Cuenta tu día de hoy dos veces: primero como en Madrid (he…) y después como en León, Nicaragua (fui…, comí…).",
        prep: ["Hoy me he levantado… / Hoy me levanté…", "He trabajado… / Trabajé…"],
        seconds: 60,
        model: "Hoy me he levantado temprano, he ido al trabajo y he comido con un cliente. Hoy me levanté temprano, fui al trabajo y comí con un cliente.",
        selfCheck: ["No mezclo las dos formas en la misma versión.", "Los participios irregulares están bien."],
      },
      {
        title: "Entrevista a una persona mayor",
        prompt: "Prepara y di en voz alta cinco preguntas para una persona mayor sobre su juventud. Usa preguntas de sí o no y preguntas con qué, dónde o cómo.",
        prep: ["¿Solías…?", "¿Dónde solías…?", "¿Qué hacían ustedes…?"],
        seconds: 50,
        selfCheck: ["Las preguntas de sí o no suben al final.", "Las preguntas con **dónde** o **qué** bajan."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que repasaste esta semana y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Pregúntale", task: "Pregunta a tu profesor qué forma usa para contar su día y de dónde es esa costumbre.", phrases: ["¿Tú dices «hoy he comido» o «hoy comí»?", "¿En tu país qué se dice más?"] },
      { move: "Cuéntale", task: "Cuenta tres costumbres que solías tener de niño y una que tienes ahora.", phrases: ["De niño solía…", "Ahora suelo…"] },
      { move: "Corrige", task: "Pide a tu profesor que diga frases con ayer y hoy, y di si son variedad o error.", phrases: ["Eso es una variedad.", "Eso es un error: con ayer…"] },
      { move: "Compara", task: "Compara con tu profesor cómo estudiaba la gente en la época de sus padres y cómo estudia ahora.", phrases: ["Antes solían…", "En cambio, hoy en día…"] },
    ],
    bring: "Trae una foto antigua de tu familia o de tu ciudad y prepara tres frases con solía.",
  },
  quiz: {
    items: [
      { type: "choice", q: "¿Qué frase es un error en todas las variedades?", options: ["Hoy he visto a tu hermano.", "Hoy vi a tu hermano.", "Ayer he visto a tu hermano."], answer: 2, why: "Con **ayer**, siempre indefinido." },
      { type: "listen", q: "¿Qué oyes?", audio: "¿Solían ir al cine los domingos?", options: ["una afirmación", "una pregunta de sí o no"], answer: 1, why: "La voz sube al final." },
      { type: "gap", q: "Cuando trabajaba en el hospital, yo ___ (dormir) solo cinco horas.", answers: [["solía dormir", "dormía"]], why: "Costumbre de una etapa: **solía dormir** o **dormía**." },
      { type: "gap", q: "Mis abuelos ___ (soler) pasear por la plaza después de cenar.", answers: [["solían"]], why: "Ellos: **solían** + infinitivo." },
      { type: "transform", source: "Esta semana he ido dos veces al gimnasio.", instruction: "Dilo con indefinido, como en gran parte de América.", answers: ["Esta semana fui dos veces al gimnasio."], why: "Yo: **fui**." },
      { type: "order", words: ["Antes", "solíamos", "pagar", "en", "efectivo;", "ahora", "pagamos", "con", "el", "móvil."] },
      { type: "error", sentence: "El año pasado hemos vivido tres meses en León.", answers: ["El año pasado vivimos tres meses en León."], why: "**El año pasado** está cerrado: **vivimos**." },
      { type: "error", sentence: "Mi madre solía a coser la ropa de toda la familia.", answers: ["Mi madre solía coser la ropa de toda la familia."], why: "Sin preposición: **solía coser**." },
      { type: "choice", q: "¿Qué frase cuenta algo que pasó una sola vez?", options: ["En 1999 conocí a mi mejor amiga.", "En los noventa solía ir a conciertos.", "De joven bailaba salsa los viernes."], answer: 0, why: "**En 1999** + indefinido: un hecho concreto." },
      { type: "open", prompt: "Escribe tres frases: algo que hiciste hoy (con la variedad que prefieras), algo que solías hacer de niño y algo que haces ahora.", model: "Hoy he cocinado una tortilla. De niño solía comer en casa de mi abuela. Ahora suelo cocinar para mis amigos.", checklist: ["Hoy + perfecto o indefinido", "Solía + infinitivo", "Presente o suelo para ahora"] },
    ],
  },
  complete: {
    canNow: [
      "Reconocer y usar las dos formas para contar el día de hoy: he comido / comí.",
      "Saber que con ayer, el lunes pasado o en 2018 todas las variedades usan el indefinido.",
      "Distinguir una variedad regional de un error.",
      "Contar costumbres de otra época con solía + infinitivo.",
      "Distinguir costumbre (solía), una sola vez (indefinido) y ahora (presente o suelo).",
      "Dar la melodía correcta a las preguntas sobre el pasado.",
    ],
    review: ["hoy he ido = hoy fui (dos variedades)", "ayer / el lunes pasado → indefinido siempre", "solía, solías, solía, solíamos, solíais, solían + infinitivo"],
  },
  related: [
    { path: "/gramatica/perfecto-e-indefinido-variacion", label: "Clase: Perfecto e indefinido: variación regional" },
    { path: "/gramatica/solia-infinitivo-y-costumbres-antiguas", label: "Clase: Solía + infinitivo y costumbres antiguas" },
  ],
};
