export type PhraseToken = {
  text: string;
  role: "anchor" | "action" | "detail" | "link" | "signal";
};

export type PhraseLabData = {
  slug: string;
  level: "A1" | "A2" | "B1" | "B2";
  module: string;
  pcic: string;
  title: string;
  displayTitle: string;
  subtitle: string;
  goal: string;
  accent: string;
  accent2: string;
  coreFormula: PhraseToken[];
  auditNote: string;
  visualTitle?: string;
  visualDescription?: string;
  transformTitle?: string;
  transformDescription?: string;
  conversationMinutes?: string;
  timeline: { label: string; minutes: string }[];
  discovery: {
    question: string;
    instruction: string;
    contrast: string[];
  };
  layers: {
    label: string;
    tokens: PhraseToken[];
    note: string;
  }[];
  principles: {
    kicker: string;
    title: string;
    explanation: string;
    formula: string;
    examples: string[];
  }[];
  orderTasks: {
    prompt: string;
    tokens: string[];
    answers: string[][];
    explanation: string;
  }[];
  choices: {
    prompt: string;
    options: string[];
    correct: number;
    explanation: string;
  }[];
  transformations: {
    label: string;
    sentence: string;
    note: string;
  }[];
  production: {
    title: string;
    prompt: string;
    checklist: string[];
  }[];
  conversation: {
    question: string;
    starter: string;
    vocabulary: string;
    followUp: string;
  }[];
};

export const gruposConSentido: PhraseLabData = {
  slug: "grupos-de-palabras-con-sentido",
  level: "A1",
  module: "MÓDULO 10–11 · A1",
  pcic: "10. El sintagma nominal + 11. El sintagma adjetival",
  title: "El Taller de las Capas",
  displayTitle: "El Taller de\nlas Capas",
  subtitle: "De una palabra a un grupo completo que describe de verdad",
  goal:
    "Pasar de palabras sueltas a grupos claros para describir personas, objetos y lugares.",
  accent: "#35d3a4",
  accent2: "#ffd166",
  coreFormula: [
    { text: "DETERMINANTE", role: "signal" },
    { text: "+ SUSTANTIVO", role: "anchor" },
    { text: "+ (ADJETIVO)", role: "detail" },
    { text: "+ (COMPLEMENTO)", role: "link" },
  ],
  auditNote:
    "Esta clase combina conocimientos ya adquiridos. No vuelve a enseñar género, número, artículos ni qué es un adjetivo: esas bases ya están en La Fábrica de los Nombres, El Atelier de la Concordancia y La Galería de los Artículos.",
  timeline: [
    { label: "Descubrir", minutes: "5 min" },
    { label: "Ver el sistema", minutes: "10 min" },
    { label: "Practicar", minutes: "12–15 min" },
    { label: "Producir", minutes: "5 min" },
    { label: "Conversar", minutes: "10+ min" },
  ],
  discovery: {
    question: "¿Qué versión permite imaginar mejor el lugar?",
    instruction:
      "Leé las cuatro versiones sin explicar la regla. El alumno elige la más informativa y dice qué agrega cada capa.",
    contrast: [
      "casa",
      "una casa",
      "una casa grande",
      "una casa grande con jardín",
    ],
  },
  layers: [
    {
      label: "NÚCLEO",
      tokens: [{ text: "casa", role: "anchor" }],
      note: "La palabra nombra, pero todavía ofrece poca información.",
    },
    {
      label: "CAPA 1 · PRESENTAR",
      tokens: [
        { text: "una", role: "signal" },
        { text: "casa", role: "anchor" },
      ],
      note: "El determinante presenta el núcleo.",
    },
    {
      label: "CAPA 2 · DESCRIBIR",
      tokens: [
        { text: "una", role: "signal" },
        { text: "casa", role: "anchor" },
        { text: "grande", role: "detail" },
      ],
      note: "El adjetivo añade una cualidad y concuerda dentro del grupo.",
    },
    {
      label: "CAPA 3 · PRECISAR",
      tokens: [
        { text: "una", role: "signal" },
        { text: "casa", role: "anchor" },
        { text: "grande", role: "detail" },
        { text: "con jardín", role: "link" },
      ],
      note: "El complemento agrega una característica sin crear otra oración.",
    },
  ],
  principles: [
    {
      kicker: "LA BASE",
      title: "Un núcleo y sus capas",
      explanation:
        "El sustantivo es el núcleo. Las otras piezas lo presentan, describen o precisan. No todas son obligatorias.",
      formula: "(DETERMINANTE) + SUSTANTIVO + (MODIFICADORES)",
      examples: ["el libro", "una clase práctica", "la clase de hoy"],
    },
    {
      kicker: "CONTROL INTERNO",
      title: "El grupo tiene que encajar",
      explanation:
        "Cuando el grupo cambia, revisamos rápidamente si determinante, sustantivo y adjetivo siguen concordando. Es una comprobación, no una nueva clase de género y número.",
      formula: "UNOS + LIBROS + INTERESANTES",
      examples: ["una mesa redonda", "dos habitaciones cómodas", "las casas blancas"],
    },
    {
      kicker: "ENLACES",
      title: "De, con y para agregan información",
      explanation:
        "De puede indicar tema, relación o momento; con agrega una característica; para expresa una finalidad sencilla.",
      formula: "NÚCLEO + DE / CON / PARA + INFORMACIÓN",
      examples: ["libro de español", "clase de hoy", "casa con jardín", "mesa para dos"],
    },
    {
      kicker: "CONTRACCIÓN RECUPERADA",
      title: "De + el vuelve como del",
      explanation:
        "Cuando la expansión necesita de + el, usamos la contracción ya conocida. Ahora la aplicamos dentro de un grupo más largo.",
      formula: "DE + EL = DEL",
      examples: ["la página del libro", "la puerta del hotel", "el final del día"],
    },
    {
      kicker: "INTENSIDAD",
      title: "Una cualidad puede graduarse",
      explanation:
        "Muy, poco y bastante van delante del adjetivo y no cambian aquí. La concordancia sigue apareciendo en el adjetivo.",
      formula: "MUY / POCO / BASTANTE + ADJETIVO",
      examples: ["muy cómodo", "poco práctica", "bastante interesantes"],
    },
    {
      kicker: "LLAMAR A ALGUIEN",
      title: "El vocativo queda fuera del grupo",
      explanation:
        "Usamos un nombre para llamar o dirigirnos a una persona. En la escritura lo separamos con coma.",
      formula: "NOMBRE, + MENSAJE",
      examples: ["Ana, tu café está listo.", "Leo, esta página es importante."],
    },
  ],
  orderTasks: [
    {
      prompt: "Construí un grupo para describir una vivienda.",
      tokens: ["con balcón", "luminoso", "un departamento"],
      answers: [["un departamento", "luminoso", "con balcón"]],
      explanation:
        "Primero aparece el núcleo presentado; después, la cualidad y la característica adicional.",
    },
    {
      prompt: "Construí un grupo para identificar una parte.",
      tokens: ["la página", "interesante", "del libro"],
      answers: [["la página", "interesante", "del libro"]],
      explanation:
        "Del libro precisa qué página. Interesante concuerda con página.",
    },
    {
      prompt: "Armá una llamada natural.",
      tokens: ["tu mochila", "está acá.", "Ana,"],
      answers: [["Ana,", "tu mochila", "está acá."]],
      explanation:
        "El nombre funciona como vocativo y queda separado del mensaje por una coma.",
    },
  ],
  choices: [
    {
      prompt: "¿Qué grupo encaja por dentro?",
      options: ["unas habitaciones bastante cómodas", "unas habitación bastante cómodo", "una habitaciones muy cómodas"],
      correct: 0,
      explanation:
        "Habitaciones exige plural en unas y cómodas; bastante permanece igual delante del adjetivo.",
    },
    {
      prompt: "¿Cuál expresa el tema del libro?",
      options: ["un libro con español", "un libro de español", "un libro para español"],
      correct: 1,
      explanation: "De introduce el tema o contenido: un libro de español.",
    },
    {
      prompt: "¿Cuál usa correctamente la contracción?",
      options: ["la página de el libro", "la página del libro", "la página al libro"],
      correct: 1,
      explanation: "De + el se contrae obligatoriamente en del.",
    },
    {
      prompt: "¿Qué opción describe con naturalidad?",
      options: ["una casa con muy jardín", "una muy casa grande", "una casa muy grande con jardín"],
      correct: 2,
      explanation: "Muy modifica grande; con jardín expande el grupo nominal.",
    },
    {
      prompt: "¿Dónde está bien separado el vocativo?",
      options: ["Ana tu café, está listo.", "Ana, tu café está listo.", "Ana tu, café está listo."],
      correct: 1,
      explanation: "Ana llama a la persona y se separa del mensaje con coma.",
    },
  ],
  transformations: [
    { label: "PALABRA", sentence: "mochila", note: "Solo nombra." },
    { label: "PRESENTAR", sentence: "una mochila", note: "Introduce el objeto." },
    { label: "DESCRIBIR", sentence: "una mochila bastante grande", note: "Añade una cualidad graduada." },
    { label: "PRECISAR", sentence: "una mochila bastante grande para el viaje", note: "Explica para qué sirve." },
  ],
  production: [
    {
      title: "Un objeto imprescindible",
      prompt: "Elegí un objeto que usás todos los días y describilo por capas.",
      checklist: ["determinante + sustantivo", "una cualidad", "un complemento con de, con o para"],
    },
    {
      title: "Un lugar real",
      prompt: "Describí un lugar de tu ciudad sin construir una frase artificialmente larga.",
      checklist: ["dos grupos nominales", "muy, poco o bastante", "una precisión útil"],
    },
    {
      title: "Una persona",
      prompt: "Presentá a una persona importante y agregá dos datos que permitan imaginarla.",
      checklist: ["un grupo para identificar", "un adjetivo que concuerda", "una característica con de o con"],
    },
  ],
  conversation: [
    { question: "¿Cómo es tu casa?", starter: "Mi casa es… / Tiene…", vocabulary: "grande, pequeña, luminosa, con balcón, con jardín", followUp: "¿Qué parte de la casa te gusta más?" },
    { question: "¿Cuál es tu lugar favorito de tu ciudad?", starter: "Mi lugar favorito es…", vocabulary: "un parque tranquilo, una cafetería pequeña, una plaza con árboles", followUp: "¿Qué tiene de especial?" },
    { question: "¿Cómo es una persona importante para vos?", starter: "Es una persona…", vocabulary: "muy amable, bastante divertida, con mucha energía", followUp: "¿Qué hacen juntos?" },
    { question: "¿Qué objeto usás todos los días?", starter: "Uso…", vocabulary: "un teléfono, una computadora, una botella de agua", followUp: "¿Cómo es y para qué lo usás?" },
    { question: "¿Cómo es tu habitación?", starter: "Es una habitación…", vocabulary: "cómoda, poco luminosa, con una ventana grande", followUp: "¿Qué querés cambiar?" },
    { question: "¿Qué tipo de comida te gusta?", starter: "Me gusta la comida…", vocabulary: "picante, casera, de mi país, con muchas verduras", followUp: "¿Cuál es un plato concreto?" },
    { question: "¿Cuál es un buen lugar para descansar en tu ciudad?", starter: "Un buen lugar es…", vocabulary: "un parque con sombra, una playa tranquila, una cafetería silenciosa", followUp: "¿Cuándo vas normalmente?" },
    { question: "¿Qué llevás normalmente en tu mochila o bolso?", starter: "Llevo…", vocabulary: "un libro de…, una botella con…, una libreta pequeña", followUp: "¿Qué objeto es el más importante?" },
    { question: "¿Cómo es una clase de español ideal para vos?", starter: "Para mí, una clase ideal es…", vocabulary: "muy práctica, bastante dinámica, con conversación", followUp: "¿Qué actividad no puede faltar?" },
    { question: "¿Qué lugar de tu país querés conocer?", starter: "Quiero conocer…", vocabulary: "una ciudad con…, un pueblo pequeño, una zona de montañas", followUp: "¿Por qué ese lugar?" },
  ],
};

export const oracionesCompletas: PhraseLabData = {
  slug: "de-palabras-a-oraciones-completas",
  level: "A1",
  module: "MÓDULO 12–13 · A1",
  pcic: "12. El sintagma verbal + 13. La oración simple",
  title: "La Mesa de Montaje",
  displayTitle: "La Mesa de\nMontaje",
  subtitle: "De palabras sueltas a oraciones que se sostienen",
  goal:
    "Construir una idea completa, transformarla y mover información sencilla sin perder claridad.",
  accent: "#5bc0ff",
  accent2: "#ffca5c",
  coreFormula: [
    { text: "QUIÉN", role: "anchor" },
    { text: "+ VERBO", role: "action" },
    { text: "+ INFORMACIÓN", role: "detail" },
  ],
  auditNote:
    "Esta clase muestra la arquitectura de la oración. No vuelve a enseñar conjugaciones, el sistema verbal ni OD/OI: esos contenidos ya están desarrollados en La Ciudad de los Motores y La estación de los dos destinos.",
  timeline: [
    { label: "Descubrir", minutes: "5 min" },
    { label: "Construir", minutes: "8 min" },
    { label: "Transformar", minutes: "7 min" },
    { label: "Corregir y expandir", minutes: "10 min" },
    { label: "Producir", minutes: "5 min" },
    { label: "Conversar", minutes: "10+ min" },
  ],
  discovery: {
    question: "¿Cuándo deja de ser una lista y aparece una idea completa?",
    instruction:
      "Mostrá las piezas una por una. El alumno decide desde qué capa puede entender quién hace qué.",
    contrast: [
      "Ana / Madrid / lunes",
      "Ana / trabaja",
      "Ana / trabaja / en Madrid",
      "Ana / trabaja / en Madrid / los lunes",
    ],
  },
  layers: [
    {
      label: "QUIÉN",
      tokens: [{ text: "ANA", role: "anchor" }],
      note: "Sabemos de quién hablamos, pero todavía no hay acción.",
    },
    {
      label: "QUIÉN + ACCIÓN",
      tokens: [
        { text: "ANA", role: "anchor" },
        { text: "TRABAJA", role: "action" },
      ],
      note: "Ya existe una idea mínima y el verbo concuerda con Ana.",
    },
    {
      label: "+ LUGAR",
      tokens: [
        { text: "ANA", role: "anchor" },
        { text: "TRABAJA", role: "action" },
        { text: "EN MADRID", role: "detail" },
      ],
      note: "Agregamos dónde sucede la acción.",
    },
    {
      label: "+ TIEMPO",
      tokens: [
        { text: "ANA", role: "anchor" },
        { text: "TRABAJA", role: "action" },
        { text: "EN MADRID", role: "detail" },
        { text: "LOS LUNES", role: "signal" },
      ],
      note: "La oración ahora responde quién, qué hace, dónde y cuándo.",
    },
  ],
  principles: [
    {
      kicker: "ESQUELETO",
      title: "Quién + verbo + información",
      explanation:
        "El verbo organiza la oración. El sujeto indica quién realiza la acción o de quién hablamos; la información restante completa la idea.",
      formula: "SUJETO + VERBO + COMPLEMENTOS",
      examples: ["Ana trabaja en Madrid.", "Mis amigos viven cerca.", "Yo estudio español."],
    },
    {
      kicker: "CONCORDANCIA",
      title: "El verbo mira al sujeto",
      explanation:
        "Un sujeto singular pide una forma singular; uno plural pide una forma plural. Aplicamos las formas ya aprendidas.",
      formula: "ANA TRABAJA · ANA Y LEO TRABAJAN",
      examples: ["Mi hermano cocina.", "Mis hermanos cocinan.", "La gente trabaja."],
    },
    {
      kicker: "ATRIBUTO",
      title: "Con ser, la descripción también encaja",
      explanation:
        "Cuando ser conecta al sujeto con una descripción, el atributo concuerda con el sujeto.",
      formula: "SUJETO + SER + ATRIBUTO",
      examples: ["Ana es médica.", "Leo es argentino.", "Ana y Leo son argentinos."],
    },
    {
      kicker: "ORDEN NEUTRO",
      title: "SVO es un punto de partida",
      explanation:
        "Para empezar, sujeto + verbo + información ofrece un orden claro. No es la única posibilidad, pero ayuda a construir sin perder piezas.",
      formula: "ANA + TOMA + CAFÉ",
      examples: ["Yo leo un libro.", "Marta prepara la cena.", "Nosotros visitamos el museo."],
    },
    {
      kicker: "TRES VERSIONES",
      title: "Afirmar, negar y preguntar",
      explanation:
        "No va delante del verbo. Una pregunta total mantiene la idea y cambia la entonación; una pregunta parcial abre con qué, dónde, cuándo, quién o cómo.",
      formula: "TRABAJA → NO TRABAJA → ¿TRABAJA? → ¿DÓNDE TRABAJA?",
      examples: ["Ana trabaja.", "Ana no trabaja.", "¿Ana trabaja?", "¿Dónde trabaja Ana?"],
    },
    {
      kicker: "MOVILIDAD BÁSICA",
      title: "Tiempo y lugar pueden cambiar de posición",
      explanation:
        "Un complemento breve puede ir al principio o al final. La coma después de un inicio corto ayuda a leer, aunque no siempre es obligatoria.",
      formula: "LOS LUNES, ANA TRABAJA EN MADRID.",
      examples: ["Hoy estudio en casa.", "Estudio en casa hoy.", "En Madrid, Ana trabaja los lunes."],
    },
  ],
  orderTasks: [
    {
      prompt: "Construí la oración neutra.",
      tokens: ["en Madrid", "Ana", "los lunes.", "trabaja"],
      answers: [["Ana", "trabaja", "en Madrid", "los lunes."]],
      explanation: "El orden neutro presenta sujeto, verbo, lugar y tiempo.",
    },
    {
      prompt: "Mové el tiempo al comienzo sin romper la oración.",
      tokens: ["estudio", "Por la mañana,", "español.", "yo"],
      answers: [["Por la mañana,", "yo", "estudio", "español."]],
      explanation: "El complemento temporal puede abrir la oración; la estructura central sigue intacta.",
    },
    {
      prompt: "Construí una oración negativa.",
      tokens: ["los domingos.", "no", "Mi hermano", "cocina"],
      answers: [["Mi hermano", "no", "cocina", "los domingos."]],
      explanation: "No aparece inmediatamente antes del verbo conjugado.",
    },
    {
      prompt: "Construí una pregunta parcial neutra.",
      tokens: ["Ana?", "trabaja", "¿Dónde"],
      answers: [["¿Dónde", "trabaja", "Ana?"]],
      explanation: "La palabra interrogativa abre la pregunta y el sujeto puede aparecer después del verbo.",
    },
  ],
  choices: [
    { prompt: "¿Qué oración tiene concordancia sujeto-verbo?", options: ["Mi amiga trabajan en casa.", "Mis amigas trabaja en casa.", "Mis amigas trabajan en casa."], correct: 2, explanation: "El sujeto plural mis amigas combina con trabajan." },
    { prompt: "¿Qué descripción concuerda con el sujeto?", options: ["Ana y Luis son argentinos.", "Ana y Luis es argentino.", "Ana y Luis son argentina."], correct: 0, explanation: "El sujeto es plural y mixto; en la forma no marcada usamos argentinos." },
    { prompt: "¿Dónde está bien colocada la negación?", options: ["Ana trabaja no hoy.", "Ana no trabaja hoy.", "No Ana trabaja hoy."], correct: 1, explanation: "En la estructura básica, no va delante del verbo conjugado." },
    { prompt: "¿Cuál es la pregunta parcial más neutra?", options: ["¿Dónde trabaja Ana?", "¿Ana trabaja dónde?", "¿Trabaja dónde Ana?"], correct: 0, explanation: "Dónde abre la pregunta y dirige la información que falta." },
    { prompt: "¿Qué cambio conserva la idea principal?", options: ["Los lunes, Ana trabaja en Madrid.", "Ana los lunes Madrid trabaja.", "Trabaja los Ana lunes en Madrid."], correct: 0, explanation: "Mover el tiempo al inicio no destruye la estructura central." },
  ],
  transformations: [
    { label: "AFIRMACIÓN", sentence: "Ana trabaja en Madrid los lunes.", note: "Presenta la información." },
    { label: "NEGACIÓN", sentence: "Ana no trabaja en Madrid los lunes.", note: "No aparece delante del verbo." },
    { label: "PREGUNTA TOTAL", sentence: "¿Ana trabaja en Madrid los lunes?", note: "La respuesta esperada es sí o no." },
    { label: "PREGUNTA PARCIAL", sentence: "¿Dónde trabaja Ana los lunes?", note: "Dónde reemplaza la información de lugar." },
    { label: "TIEMPO PRIMERO", sentence: "Los lunes, Ana trabaja en Madrid.", note: "La misma acción con otro punto de partida." },
  ],
  production: [
    { title: "Tu mañana", prompt: "Construí tres oraciones completas sobre una mañana normal.", checklist: ["quién", "verbo que concuerda", "una información de tiempo o lugar"] },
    { title: "Tres transformaciones", prompt: "Elegí una oración tuya y convertíla en negación, pregunta total y pregunta parcial.", checklist: ["no delante del verbo", "signos de pregunta", "palabra interrogativa adecuada"] },
    { title: "Otra persona", prompt: "Describí la rutina de una persona y después cambiala a plural.", checklist: ["sujeto claro", "concordancia verbal", "una descripción con ser"] },
  ],
  conversation: [
    { question: "¿Dónde trabajás o estudiás?", starter: "Trabajo / Estudio…", vocabulary: "en casa, en una oficina, en una universidad", followUp: "¿Qué te gusta de ese lugar?" },
    { question: "¿Qué hacés normalmente por la mañana?", starter: "Por la mañana, yo…", vocabulary: "me levanto, desayuno, trabajo, estudio", followUp: "¿A qué hora empezás?" },
    { question: "¿Con quién hablás mucho durante la semana?", starter: "Hablo mucho con…", vocabulary: "mi familia, un amigo, mis compañeros", followUp: "¿De qué hablan normalmente?" },
    { question: "¿Qué hacés los fines de semana?", starter: "Los fines de semana…", vocabulary: "descanso, salgo, cocino, visito…", followUp: "¿Dónde lo hacés?" },
    { question: "¿Qué cosas no hacés nunca?", starter: "Yo nunca… / No… nunca.", vocabulary: "cocinar, correr, trabajar de noche, mirar televisión", followUp: "¿Por qué no?" },
    { question: "¿Qué lugar visitás frecuentemente?", starter: "Visito…", vocabulary: "un parque, una cafetería, la casa de…", followUp: "¿Cuándo vas normalmente?" },
    { question: "¿Qué querés hacer esta semana?", starter: "Esta semana quiero…", vocabulary: "descansar, estudiar, visitar, comprar", followUp: "¿Con quién?" },
    { question: "¿Qué pregunta querés hacerle al profesor?", starter: "Quiero preguntarte… / ¿…?", vocabulary: "dónde, cuándo, qué, quién, cómo", followUp: "¿Podés hacer otra pregunta sobre la respuesta?" },
    { question: "¿Cómo es un día normal para una persona de tu familia?", starter: "Mi… trabaja / estudia…", vocabulary: "por la mañana, en…, normalmente", followUp: "¿Qué hace diferente los fines de semana?" },
    { question: "¿Qué actividad hacés bien y qué actividad no hacés bien?", starter: "Yo… bien, pero no… bien.", vocabulary: "cocino, dibujo, hablo, canto, organizo", followUp: "¿Querés mejorar esa actividad?" },
  ],
};

export const describirConPrecision: PhraseLabData = {
  slug: "expandir-y-precisar-descripciones",
  level: "A2",
  module: "MÓDULO 10–11 · A2",
  pcic: "10. El sintagma nominal + 11. El sintagma adjetival · extensión A2",
  title: "El Estudio del Detalle",
  displayTitle: "El Estudio\ndel Detalle",
  subtitle: "Describir, comparar, recomendar y reaccionar con más precisión",
  goal:
    "Convertir una descripción básica en información útil, matizada y natural sin crear grupos interminables.",
  accent: "#ff9f6e",
  accent2: "#6ee7d8",
  coreFormula: [
    { text: "NÚCLEO", role: "anchor" },
    { text: "+ CUALIDAD", role: "detail" },
    { text: "+ PRECISIÓN", role: "link" },
  ],
  auditNote:
    "Esta ampliación no vuelve a presentar sustantivos, adjetivos, concordancia básica ni cuantificadores. Recupera esas piezas y añade participios adjetivales, aposición, colectivos, comparación descriptiva y reacción exclamativa.",
  timeline: [
    { label: "Activar", minutes: "5 min" },
    { label: "Precisar", minutes: "10–12 min" },
    { label: "Practicar", minutes: "15 min" },
    { label: "Producir", minutes: "5 min" },
    { label: "Conversar", minutes: "10+ min" },
  ],
  discovery: {
    question: "¿Qué versión ayuda más a decidir si querés ver la película?",
    instruction:
      "El alumno ordena las versiones de menos a más informativas y explica qué dato nuevo aporta cada una.",
    contrast: [
      "una película",
      "una película interesante",
      "una película muy interesante",
      "una película conocida y muy interesante",
    ],
  },
  layers: [
    { label: "NÚCLEO", tokens: [{ text: "una película", role: "anchor" }], note: "Identifica el tipo de cosa." },
    { label: "+ DESCRIPCIÓN", tokens: [{ text: "una película", role: "anchor" }, { text: "interesante", role: "detail" }], note: "Añade una evaluación básica." },
    { label: "+ GRADO", tokens: [{ text: "una película", role: "anchor" }, { text: "muy interesante", role: "detail" }], note: "Intensifica la valoración." },
    { label: "+ DATO PRECISO", tokens: [{ text: "una película", role: "anchor" }, { text: "conocida", role: "link" }, { text: "y muy interesante", role: "detail" }], note: "El participio añade una característica y concuerda como adjetivo." },
  ],
  principles: [
    {
      kicker: "RESULTADO COMO CUALIDAD",
      title: "El participio puede describir",
      explanation:
        "Cuando un participio funciona como adjetivo, presenta una característica y concuerda con el sustantivo.",
      formula: "SUSTANTIVO + PARTICIPIO-ADJETIVO",
      examples: ["una película conocida", "unas puertas cerradas", "un restaurante recomendado"],
    },
    {
      kicker: "APOSICIÓN",
      title: "Un nombre puede identificar a otro",
      explanation:
        "La aposición agrega una identificación directa, sin repetir artículo ni verbo.",
      formula: "MI HERMANO + JUAN",
      examples: ["mi amiga Laura", "el escritor Borges", "la profesora Elena"],
    },
    {
      kicker: "COLECTIVOS FRECUENTES",
      title: "El núcleo singular controla la concordancia",
      explanation:
        "Gente, familia, equipo y grupo suelen funcionar como núcleos singulares, aunque incluyan varias personas.",
      formula: "LA GENTE ES · EL EQUIPO ESTÁ",
      examples: ["la gente amable", "mi familia es grande", "el equipo está preparado"],
    },
    {
      kicker: "COMPARAR CUALIDADES",
      title: "Más, menos y tan precisan la comparación",
      explanation:
        "Aplicamos comparadores ya conocidos a cualidades concretas: más/menos… que y tan… como.",
      formula: "MÁS / MENOS + ADJETIVO + QUE · TAN + ADJETIVO + COMO",
      examples: ["más tranquila que el centro", "menos conocida que esa", "tan interesante como la primera"],
    },
    {
      kicker: "REACCIÓN",
      title: "Qué + adjetivo expresa una reacción",
      explanation:
        "El exclamativo qué lleva tilde y permite reaccionar sin construir una oración larga.",
      formula: "¡QUÉ + ADJETIVO!",
      examples: ["¡Qué interesante!", "¡Qué bonito!", "¡Qué caras!"],
    },
    {
      kicker: "EDICIÓN",
      title: "Más información no siempre es mejor",
      explanation:
        "Una descripción precisa elige datos útiles y elimina repeticiones o intensificadores que compiten entre sí.",
      formula: "PRECISIÓN > ACUMULACIÓN",
      examples: ["una serie corta y divertida", "un barrio tranquilo con buenos cafés", "una guía actualizada"],
    },
  ],
  orderTasks: [
    {
      prompt: "Construí una recomendación compacta.",
      tokens: ["y muy interesante", "una película", "conocida"],
      answers: [["una película", "conocida", "y muy interesante"]],
      explanation: "El grupo suma un dato reconocible y una valoración sin repetir el núcleo.",
    },
    {
      prompt: "Identificá a la persona sin una oración extra.",
      tokens: ["vive en Berlín.", "mi hermano Juan", "Ahora"],
      answers: [["Ahora", "mi hermano Juan", "vive en Berlín."]],
      explanation: "Juan identifica directamente a mi hermano mediante aposición.",
    },
    {
      prompt: "Armá una comparación completa.",
      tokens: ["que el centro.", "es menos ruidoso", "Este barrio"],
      answers: [["Este barrio", "es menos ruidoso", "que el centro."]],
      explanation: "Menos + adjetivo + que establece la comparación.",
    },
  ],
  choices: [
    { prompt: "¿Qué participio funciona y concuerda como adjetivo?", options: ["una película conocido", "una película conocida", "una conocida película por todos muy"], correct: 1, explanation: "Conocida concuerda con película, femenino singular." },
    { prompt: "¿Qué aposición identifica sin repetir piezas?", options: ["mi hermano el Juan", "mi hermano se llama Juan hermano", "mi hermano Juan"], correct: 2, explanation: "Mi hermano Juan reúne la relación y el nombre en un solo grupo." },
    { prompt: "¿Qué concordancia es adecuada con el colectivo?", options: ["La gente es amable.", "La gente son amables.", "Las gente es amable."], correct: 0, explanation: "Gente es un núcleo singular femenino." },
    { prompt: "¿Qué comparación está completa?", options: ["Es tan tranquila que esa.", "Es tan tranquila como esa.", "Es más tranquila como esa."], correct: 1, explanation: "La igualdad se construye con tan + adjetivo + como." },
    { prompt: "¿Qué reacción exclamativa es natural?", options: ["¡Qué interesante!", "¡Qué es interesante!", "¡Que muy interesante es!"], correct: 0, explanation: "Qué lleva tilde y puede combinar directamente con el adjetivo." },
    { prompt: "¿Qué opción evita una acumulación redundante?", options: ["una película muy extremadamente increíblemente larga", "una película muy larga", "una película larga muy extremadamente"], correct: 1, explanation: "Un solo intensificador claro suele ser suficiente." },
  ],
  transformations: [
    { label: "BÁSICA", sentence: "Es una ciudad bonita.", note: "Comunica una valoración general." },
    { label: "MÁS PRECISA", sentence: "Es una ciudad costera muy bonita.", note: "Añade un dato y gradúa la cualidad." },
    { label: "COMPARADA", sentence: "Es menos ruidosa que la capital.", note: "La ubica frente a otra opción." },
    { label: "RECOMENDADA", sentence: "Es una ciudad costera poco conocida y muy agradable.", note: "Dos rasgos útiles justifican una recomendación." },
    { label: "REACCIÓN", sentence: "¡Qué interesante!", note: "La otra persona responde de forma natural." },
  ],
  production: [
    { title: "Cartel de cine", prompt: "Recomendá una película o serie con una descripción precisa de dos o tres rasgos.", checklist: ["un participio-adjetivo", "una valoración graduada", "sin redundancias"] },
    { title: "Guía de ciudad", prompt: "Compará dos zonas y recomendá una según una necesidad concreta.", checklist: ["más, menos o tan", "dos grupos informativos", "una razón clara"] },
    { title: "Presentación breve", prompt: "Presentá a una persona usando una aposición y una cualidad relevante.", checklist: ["relación + nombre", "concordancia", "un dato que ayude a imaginarla"] },
  ],
  conversation: [
    { question: "¿Qué ciudad te parece especialmente interesante? ¿Por qué?", starter: "Me parece especialmente interesante…", vocabulary: "costera, histórica, poco conocida, muy animada", followUp: "¿Es más tranquila o más activa que tu ciudad?" },
    { question: "¿Quién es una persona conocida que te parece interesante?", starter: "Una persona conocida que me parece interesante es…", vocabulary: "admirada, reconocida, creativa, polémica", followUp: "¿Qué aspecto de su vida te interesa?" },
    { question: "¿Qué película o serie viste recientemente?", starter: "Vi una película / serie…", vocabulary: "recomendada, divertida, bastante lenta, muy conocida", followUp: "¿La recomendarías? ¿A quién?" },
    { question: "¿Cuál es el lugar más bonito que conocés?", starter: "El lugar más bonito que conozco es…", vocabulary: "rodeado de…, menos turístico, tan bonito como…", followUp: "¿Qué detalle recordás mejor?" },
    { question: "¿Qué comida de tu país es difícil de explicar a un extranjero?", starter: "Es una comida…", vocabulary: "preparada con…, parecida a…, más dulce que…", followUp: "¿En qué momento se come?" },
    { question: "¿Qué lugar de tu ciudad recomendarías y cómo lo describirías?", starter: "Recomendaría… Es un lugar…", vocabulary: "bien ubicado, poco conocido, muy agradable", followUp: "¿Para qué tipo de persona es ideal?" },
    { question: "¿Qué cosa te parece demasiado cara actualmente?", starter: "Me parece demasiado caro/a…", vocabulary: "más caro que antes, menos accesible, bastante necesario", followUp: "¿Existe una opción más barata?" },
    { question: "¿Qué fue lo más interesante de tu última semana?", starter: "Lo más interesante fue…", vocabulary: "inesperado, organizado, compartido, emocionante", followUp: "¿Por qué fue especial?" },
    { question: "¿Qué producto conocido te parece sobrevalorado?", starter: "Me parece sobrevalorado…", vocabulary: "tan bueno como…, menos útil que…, demasiado caro", followUp: "¿Qué alternativa preferís?" },
    { question: "¿Cómo describirías a tu familia o a un grupo importante para vos?", starter: "Mi familia / mi grupo es…", vocabulary: "grande, unido, diverso, bastante tranquilo", followUp: "¿Qué hacen juntos?" },
  ],
};

export const oracionFlexible: PhraseLabData = {
  slug: "una-oracion-puede-moverse",
  level: "A2",
  module: "MÓDULO 12–13 · A2",
  pcic: "12. El sintagma verbal + 13. La oración simple · extensión A2",
  title: "La Sala de las Posiciones",
  displayTitle: "La Sala de\nlas Posiciones",
  subtitle: "Mover, enfocar y transformar una oración sin volverla robótica",
  goal:
    "Ganar flexibilidad para organizar tiempo, lugar y modo según lo que queremos destacar.",
  accent: "#a990ff",
  accent2: "#5ee1d5",
  coreFormula: [
    { text: "TIEMPO", role: "signal" },
    { text: "↔ ORACIÓN BASE", role: "anchor" },
    { text: "↔ LUGAR / MODO", role: "detail" },
  ],
  auditNote:
    "La auditoría mostró que OD/OI, los tiempos verbales y la posición de pronombres con perífrasis ya están suficientemente cubiertos. Esta clase no los repite: se concentra en movilidad, foco y tipos de oración A2.",
  timeline: [
    { label: "Descubrir", minutes: "5 min" },
    { label: "Construir y mover", minutes: "10 min" },
    { label: "Transformar", minutes: "8 min" },
    { label: "Corregir y expandir", minutes: "7 min" },
    { label: "Producir", minutes: "5 min" },
    { label: "Conversar", minutes: "10–12 min" },
  ],
  discovery: {
    question: "¿Estas dos frases cuentan el mismo hecho? ¿Qué destaca cada una?",
    instruction:
      "Leé ambas versiones en voz alta. El alumno marca la información que escucha primero y decide si el hecho central cambia.",
    contrast: [
      "Por la tarde tomo café con mi abuela.",
      "Tomo café con mi abuela por la tarde.",
      "Solo Ana trabaja los lunes.",
      "Ana trabaja solo los lunes.",
    ],
  },
  layers: [
    { label: "ORACIÓN BASE", tokens: [{ text: "TOMO CAFÉ", role: "anchor" }], note: "La acción central ya se entiende." },
    { label: "+ COMPAÑÍA", tokens: [{ text: "TOMO CAFÉ", role: "anchor" }, { text: "CON MI ABUELA", role: "detail" }], note: "Agregamos con quién." },
    { label: "+ TIEMPO AL FINAL", tokens: [{ text: "TOMO CAFÉ", role: "anchor" }, { text: "CON MI ABUELA", role: "detail" }, { text: "POR LA TARDE", role: "signal" }], note: "El tiempo completa la escena." },
    { label: "TIEMPO AL PRINCIPIO", tokens: [{ text: "POR LA TARDE,", role: "signal" }, { text: "TOMO CAFÉ", role: "anchor" }, { text: "CON MI ABUELA", role: "detail" }], note: "El hecho no cambia; ahora el marco temporal recibe el foco inicial." },
  ],
  principles: [
    {
      kicker: "ESCENA COMPLETA",
      title: "Tiempo, lugar y modo pueden convivir",
      explanation:
        "Una oración puede reunir varias coordenadas. Las organizamos alrededor del verbo y evitamos acumularlas sin jerarquía.",
      formula: "ACCIÓN + MODO + LUGAR + TIEMPO",
      examples: ["Trabajo tranquilamente en casa por la mañana.", "Caminamos despacio por el parque los domingos."],
    },
    {
      kicker: "MOVILIDAD",
      title: "El marco puede ir al principio o al final",
      explanation:
        "Mover tiempo o lugar suele conservar el hecho y cambiar el punto de partida del mensaje.",
      formula: "POR LA TARDE, TOMO CAFÉ. ↔ TOMO CAFÉ POR LA TARDE.",
      examples: ["En casa trabajo mejor.", "Trabajo mejor en casa.", "Mañana cenamos afuera."],
    },
    {
      kicker: "DOS OPCIONES",
      title: "La pregunta disyuntiva ofrece alternativas",
      explanation:
        "La conjunción o conecta dos opciones dentro de una misma pregunta.",
      formula: "¿PREFERÍS X O Y?",
      examples: ["¿Preferís té o café?", "¿Trabajás en casa o en una oficina?"],
    },
    {
      kicker: "REACCIÓN Y ACCIÓN",
      title: "Exclamar o exhortar cambia la intención",
      explanation:
        "Una exclamativa reacciona; una exhortativa invita, pide o indica una acción. Aquí usamos formas frecuentes sin volver a enseñar toda la conjugación.",
      formula: "¡QUÉ CALOR! · ABRÍ LA VENTANA, POR FAVOR.",
      examples: ["¡Qué bien trabajás!", "Tomá asiento.", "Vamos al parque."],
    },
    {
      kicker: "CLIMA IMPERSONAL",
      title: "Hacer no necesita un sujeto personal",
      explanation:
        "Para hablar del clima usamos hace de forma impersonal. No buscamos una persona que realiza la acción.",
      formula: "HACE FRÍO · HACE CALOR",
      examples: ["Hoy hace mucho calor.", "En invierno hace frío.", "¿Hace buen tiempo?"],
    },
    {
      kicker: "FOCO",
      title: "Mover un modificador sí puede cambiar el significado",
      explanation:
        "Los complementos de marco suelen moverse con libertad. En cambio, solo modifica lo que tiene cerca y puede cambiar quién o cuándo queda excluido.",
      formula: "SOLO ANA… ≠ ANA… SOLO LOS LUNES",
      examples: ["Solo Ana trabaja los lunes.", "Ana trabaja solo los lunes."],
    },
  ],
  orderTasks: [
    {
      prompt: "Construí una versión con el tiempo al principio.",
      tokens: ["con mi abuela.", "tomo café", "Por la tarde,"],
      answers: [["Por la tarde,", "tomo café", "con mi abuela."]],
      explanation: "El marco temporal abre la frase y la acción central permanece unida.",
    },
    {
      prompt: "Construí otra versión natural del mismo hecho.",
      tokens: ["por la tarde.", "Tomo café", "con mi abuela"],
      answers: [["Tomo café", "con mi abuela", "por la tarde."]],
      explanation: "El tiempo también puede cerrar la escena.",
    },
    {
      prompt: "Construí una pregunta con dos opciones.",
      tokens: ["té", "¿Preferís", "café?", "o"],
      answers: [["¿Preferís", "té", "o", "café?"]],
      explanation: "O enlaza las dos alternativas de la pregunta.",
    },
    {
      prompt: "Describí el clima sin inventar un sujeto.",
      tokens: ["mucho calor", "Hoy", "hace"],
      answers: [["Hoy", "hace", "mucho calor"]],
      explanation: "Hace funciona de forma impersonal en expresiones meteorológicas.",
    },
  ],
  choices: [
    { prompt: "¿Qué versión suena natural para destacar la tarde?", options: ["Por la tarde, tomo café con mi abuela.", "Yo por la tarde café tomo con mi abuela.", "Por la tomo tarde con café mi abuela."], correct: 0, explanation: "El complemento temporal abre la oración y la estructura central sigue clara." },
    { prompt: "¿Cuál es una pregunta disyuntiva?", options: ["¿Preferís té?", "¿Preferís té o café?", "Preferís té y café."], correct: 1, explanation: "La pregunta ofrece dos alternativas conectadas por o." },
    { prompt: "¿Qué expresión del clima es impersonal y natural?", options: ["Es calor.", "Tiene calor el día.", "Hace calor."], correct: 2, explanation: "Para el clima usamos hacer de forma impersonal: hace calor." },
    { prompt: "¿Cuál es una exhortación sencilla?", options: ["Abrí la ventana, por favor.", "La ventana está abierta.", "¡Qué ventana!"], correct: 0, explanation: "La frase pide una acción de manera directa y cortés." },
    { prompt: "¿Qué significa que ninguna otra persona trabaja los lunes?", options: ["Ana trabaja solo los lunes.", "Solo Ana trabaja los lunes.", "Los lunes trabajan solo."], correct: 1, explanation: "Solo junto a Ana limita quién realiza la acción." },
    { prompt: "¿Qué frase conserva el hecho y cambia solamente el marco inicial?", options: ["En casa trabajo mejor. / Trabajo mejor en casa.", "Solo Ana trabaja. / Ana trabaja solo los lunes.", "Hace frío. / Tengo frío."], correct: 0, explanation: "Las dos versiones mantienen la misma relación entre trabajar mejor y estar en casa." },
  ],
  transformations: [
    { label: "BASE", sentence: "Trabajás desde casa por la mañana.", note: "La información temporal cierra la oración." },
    { label: "MARCO PRIMERO", sentence: "Por la mañana, trabajás desde casa.", note: "El tiempo queda en primer plano." },
    { label: "NEGACIÓN", sentence: "Por la mañana, no trabajás desde casa.", note: "La negación transforma la acción." },
    { label: "DOS OPCIONES", sentence: "¿Trabajás desde casa o en una oficina por la mañana?", note: "La pregunta ofrece dos lugares posibles." },
    { label: "REACCIÓN", sentence: "¡Qué bien trabajás desde casa!", note: "La exclamativa reacciona al modo." },
    { label: "EXHORTACIÓN", sentence: "Trabajá desde casa por la mañana.", note: "La misma escena se convierte en indicación." },
  ],
  production: [
    { title: "Rutina flexible", prompt: "Contá tres acciones de tu día y mové el tiempo en la segunda versión de cada una.", checklist: ["tiempo al principio o al final", "estructura central clara", "una forma que suene natural"] },
    { title: "Elegir entre dos", prompt: "Creá tres preguntas disyuntivas sobre comida, trabajo y tiempo libre.", checklist: ["dos opciones reales", "o como enlace", "una repregunta después de elegir"] },
    { title: "Clima y plan", prompt: "Describí el clima de hoy y proponé una acción adecuada.", checklist: ["hace + clima", "una exhortación sencilla", "tiempo o lugar"] },
  ],
  conversation: [
    { question: "¿Qué hacés normalmente después de trabajar o estudiar?", starter: "Después de trabajar / estudiar…", vocabulary: "descanso, voy a…, hablo con…, tranquilamente", followUp: "¿Dónde lo hacés normalmente?" },
    { question: "¿Qué preferís hacer por la mañana y qué preferís hacer por la noche?", starter: "Por la mañana prefiero…, pero por la noche…", vocabulary: "trabajar, entrenar, cocinar, descansar", followUp: "¿Por qué cambia tu preferencia?" },
    { question: "¿Cómo cambia tu rutina los fines de semana?", starter: "Los fines de semana…", vocabulary: "más tarde, con calma, afuera, en casa", followUp: "¿Qué actividad movés a otro momento?" },
    { question: "¿Qué hacés cuando hace mucho calor?", starter: "Cuando hace mucho calor…", vocabulary: "me quedo en…, voy a…, tomo…, por la tarde", followUp: "¿Y cuando hace frío?" },
    { question: "¿Preferís trabajar desde casa o ir a un lugar de trabajo? ¿Por qué?", starter: "Prefiero… porque…", vocabulary: "más tranquilo, con otras personas, por la mañana", followUp: "¿Tu respuesta cambia según el día?" },
    { question: "¿Qué plan tenés para los próximos días?", starter: "En los próximos días…", vocabulary: "voy a…, primero, después, en…", followUp: "¿Podés decir la misma idea empezando por el lugar?" },
    { question: "¿Qué actividad te gustaría hacer más seguido?", starter: "Me gustaría… más seguido.", vocabulary: "caminar, cocinar, estudiar, ver a…", followUp: "¿Cuándo podrías hacerla?" },
    { question: "¿Cómo es un día normal para vos?", starter: "Normalmente, por la mañana…", vocabulary: "primero, después, en casa, con…", followUp: "¿Qué parte del día es más flexible?" },
    { question: "¿Preferís hacer ejercicio solo o con otra persona?", starter: "Prefiero hacer ejercicio…", vocabulary: "solo, con amigos, por la noche, al aire libre", followUp: "¿Dónde y cuándo?" },
    { question: "¿Qué consejo simple le darías a una persona que visita tu ciudad?", starter: "Visitá… / No vayas… / Tomá…", vocabulary: "por la mañana, cuando hace calor, en el centro", followUp: "¿Qué dos opciones puede elegir esa persona?" },
  ],
};

export const phraseLabs = {
  [gruposConSentido.slug]: gruposConSentido,
  [oracionesCompletas.slug]: oracionesCompletas,
  [describirConPrecision.slug]: describirConPrecision,
  [oracionFlexible.slug]: oracionFlexible,
};
