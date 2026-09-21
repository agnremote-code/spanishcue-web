export type SyntaxMode = "connector" | "clause";

export type SyntaxPattern = {
  key: string;
  label: string;
  intention: string;
  formula: string;
  example: string;
  preview: { left: string; connector: string; right: string };
  explanation: string;
};

export type SyntaxDecision = {
  intention: string;
  prompt: string;
  left: string;
  right: string;
  options: string[];
  correct: number;
  feedback: string;
};

export type SyntaxRepair = {
  prompt: string;
  original: string;
  options: string[];
  correct: number;
  feedback: string;
};

export type SyntaxLabData = {
  slug: string;
  level: "A1";
  category: "Gramática";
  mode: SyntaxMode;
  module: string;
  pcic: string;
  title: string;
  displayTitle: string;
  subtitle: string;
  goal: string;
  accent: string;
  accent2: string;
  productiveTargets: string[];
  boundaries: string;
  timeline: { label: string; minutes: number }[];
  activation: {
    instruction: string;
    cards: { first: string; second: string; intention: string }[];
  };
  patterns: SyntaxPattern[];
  decisions: SyntaxDecision[];
  questionAnswerCycle: { question: string; answer: string; cue: string }[];
  repairs: SyntaxRepair[];
  retrieval: { intention: string; prompt: string; challenge: string }[];
  production: { title: string; prompt: string; checklist: string[] }[];
  conversationMinutes: number;
  conversation: { question: string; starter: string; followUp: string }[];
  finalTask: string;
};

export const conectaLaFrase: SyntaxLabData = {
  slug: "conecta-la-frase",
  level: "A1",
  category: "Gramática",
  mode: "connector",
  module: "MÓDULO 14 · A1",
  pcic: "PCIC 14 · coordinación A1",
  title: "Conecta la frase",
  displayTitle: "Conecta\nla frase",
  subtitle: "Sumar, negar, elegir, contrastar y repartir ideas sin hablar como una lista",
  goal: "Unir ideas cotidianas con el conector que expresa la relación correcta y usarlas al hablar de la vida real.",
  accent: "#ff7a5c",
  accent2: "#ffd166",
  productiveTargets: ["y", "ni", "o", "pero", "uno… otro"],
  boundaries: "La clase trabaja las formas básicas de coordinación documentadas para A1. Las alternancias ortográficas de nivel posterior quedan fuera del objetivo productivo.",
  timeline: [
    { label: "Activación", minutes: 5 },
    { label: "Descubrimiento", minutes: 7 },
    { label: "Conecta", minutes: 8 },
    { label: "Repara", minutes: 7 },
    { label: "Hazlo verdadero", minutes: 8 },
    { label: "Cadena oral", minutes: 5 },
    { label: "Conversación", minutes: 5 },
  ],
  activation: {
    instruction: "Leé cada par sin mostrar conectores. El alumno decide si las ideas se suman, se niegan juntas, ofrecen una elección, contrastan o reparten acciones.",
    cards: [
      { first: "Trabajo por la mañana", second: "estudio por la tarde", intention: "SUMAR" },
      { first: "No tomo café", second: "no tomo té", intention: "NEGAR DOS COSAS" },
      { first: "Podemos cocinar", second: "podemos pedir comida", intention: "ELEGIR" },
      { first: "La casa es pequeña", second: "es muy luminosa", intention: "CONTRASTAR" },
      { first: "Un amigo prepara la cena", second: "otro pone la mesa", intention: "REPARTIR" },
    ],
  },
  patterns: [
    {
      key: "y",
      label: "Y",
      intention: "SUMAR",
      formula: "IDEA + Y + IDEA",
      example: "Trabajo en casa y estudio español.",
      preview: { left: "Trabajo en casa", connector: "y", right: "estudio español." },
      explanation: "Y añade una idea compatible: las dos informaciones son verdaderas al mismo tiempo.",
    },
    {
      key: "ni",
      label: "NI",
      intention: "NEGAR DOS ELEMENTOS",
      formula: "NO + VERBO + A + NI + B",
      example: "No como carne ni pescado.",
      preview: { left: "No como carne", connector: "ni", right: "pescado." },
      explanation: "Ni suma un segundo elemento dentro de una negación; no presenta una alternativa.",
    },
    {
      key: "o",
      label: "O",
      intention: "ELEGIR",
      formula: "OPCIÓN A + O + OPCIÓN B",
      example: "¿Cocinamos o pedimos comida?",
      preview: { left: "¿Cocinamos", connector: "o", right: "pedimos comida?" },
      explanation: "O abre una elección entre posibilidades reales para el hablante.",
    },
    {
      key: "pero",
      label: "PERO",
      intention: "CONTRASTAR",
      formula: "IDEA + PERO + CONTRASTE",
      example: "Es pequeño, pero es cómodo.",
      preview: { left: "Es pequeño", connector: "pero", right: "es cómodo." },
      explanation: "Pero avisa que la segunda idea contrasta con la expectativa creada por la primera.",
    },
    {
      key: "uno-otro",
      label: "UNO… OTRO",
      intention: "REPARTIR",
      formula: "UNO + ACCIÓN A; OTRO + ACCIÓN B",
      example: "Uno cocina y otro lava los platos.",
      preview: { left: "Uno cocina", connector: "y", right: "otro lava los platos." },
      explanation: "Uno… otro distribuye acciones o características entre dos participantes.",
    },
  ],
  decisions: [
    {
      intention: "SUMAR",
      prompt: "Querés contar dos actividades de tu rutina.",
      left: "Trabajo por la mañana",
      right: "estudio por la tarde.",
      options: ["y", "o", "pero"],
      correct: 0,
      feedback: "Las dos actividades forman parte de la misma rutina; y permite sumar ambas informaciones.",
    },
    {
      intention: "NEGAR DOS COSAS",
      prompt: "Decís dos bebidas que no tomás.",
      left: "No tomo café",
      right: "té.",
      options: ["y", "ni", "pero"],
      correct: 1,
      feedback: "La negación ya aparece con no; ni incorpora el segundo elemento dentro de esa misma negación.",
    },
    {
      intention: "ELEGIR",
      prompt: "Ofrecés dos planes posibles para esta noche.",
      left: "Podemos ver una película",
      right: "salir a caminar.",
      options: ["y", "o", "ni"],
      correct: 1,
      feedback: "Se presentan dos planes como alternativas; o invita a elegir uno de los dos.",
    },
    {
      intention: "CONTRASTAR",
      prompt: "El precio es alto, aunque tu valoración es positiva.",
      left: "El restaurante es caro",
      right: "la comida es excelente.",
      options: ["y", "pero", "o"],
      correct: 1,
      feedback: "La segunda valoración rompe la expectativa negativa del precio; por eso funciona pero.",
    },
    {
      intention: "REPARTIR",
      prompt: "Dos compañeros hacen tareas diferentes.",
      left: "Uno escribe el mensaje",
      right: "otro busca la dirección.",
      options: ["y", "pero", "ni"],
      correct: 0,
      feedback: "Uno… otro ya reparte las tareas; y conecta las dos acciones que forman el plan común.",
    },
    {
      intention: "SUMAR",
      prompt: "Describís una clase con dos cualidades compatibles.",
      left: "La clase es práctica",
      right: "divertida.",
      options: ["pero", "y", "o"],
      correct: 1,
      feedback: "Práctica y divertida son dos cualidades compatibles que se añaden a la misma descripción.",
    },
    {
      intention: "NEGAR DOS ACCIONES",
      prompt: "Contás lo que nunca hacés antes de dormir.",
      left: "No trabajo",
      right: "miro el teléfono en la cama.",
      options: ["ni", "o", "pero"],
      correct: 0,
      feedback: "No inicia la negación y ni añade la segunda acción también negada, sin repetir no.",
    },
    {
      intention: "ELEGIR",
      prompt: "Preguntás qué medio de transporte prefiere una persona.",
      left: "¿Vas en autobús",
      right: "en metro?",
      options: ["y", "pero", "o"],
      correct: 2,
      feedback: "La pregunta ofrece dos medios posibles; o marca con claridad la elección esperada.",
    },
    {
      intention: "CONTRASTAR",
      prompt: "Tenés ganas de salir, aunque hoy no podés.",
      left: "Quiero ir a la fiesta",
      right: "tengo que trabajar.",
      options: ["y", "pero", "ni"],
      correct: 1,
      feedback: "Tener que trabajar choca con el deseo de ir; pero hace visible ese contraste.",
    },
    {
      intention: "REPARTIR",
      prompt: "Comparás dos hermanos con gustos diferentes.",
      left: "A uno le gusta el fútbol",
      right: "al otro le gusta el tenis.",
      options: ["y", "o", "ni"],
      correct: 0,
      feedback: "Uno… otro distribuye los gustos y y reúne los dos datos en una sola comparación.",
    },
  ],
  questionAnswerCycle: [],
  repairs: [
    {
      prompt: "Queremos sumar dos gustos, no presentar una elección.",
      original: "Me gusta el cine o la música.",
      options: ["Me gusta el cine y la música.", "No me gusta el cine ni la música.", "Me gusta el cine, pero la música."],
      correct: 0,
      feedback: "Si los dos gustos son verdaderos, y suma; o cambiaría el mensaje y abriría una alternativa.",
    },
    {
      prompt: "Queremos negar las dos actividades.",
      original: "No corro y nado.",
      options: ["No corro ni nado.", "Corro o nado.", "No corro, pero nado."],
      correct: 0,
      feedback: "Ni mantiene las dos acciones dentro de la negación; las otras versiones cambian el significado.",
    },
    {
      prompt: "Queremos mostrar un contraste positivo.",
      original: "El piso es pequeño y tiene mucho espacio.",
      options: ["El piso es pequeño, pero tiene mucho espacio.", "El piso es pequeño o tiene mucho espacio.", "El piso ni es pequeño ni tiene espacio."],
      correct: 0,
      feedback: "Pero comunica la sorpresa: a pesar de ser pequeño, el piso ofrece mucho espacio.",
    },
    {
      prompt: "Queremos pedir una decisión.",
      original: "¿Tomamos café y té?",
      options: ["¿Tomamos café o té?", "No tomamos café ni té.", "Tomamos café, pero té."],
      correct: 0,
      feedback: "O convierte las dos bebidas en alternativas y permite que la otra persona elija.",
    },
    {
      prompt: "Queremos repartir dos objetos entre dos personas.",
      original: "Uno lleva las dos maletas y otro.",
      options: ["Uno lleva una maleta y otro lleva la otra.", "Uno no lleva ni otro.", "Uno lleva una maleta, pero otro."],
      correct: 0,
      feedback: "La estructura completa necesita una acción clara para cada participante: uno… y otro…",
    },
  ],
  retrieval: [
    { intention: "SUMAR", prompt: "Sin banco de respuestas: decí dos cosas que hacés todos los días.", challenge: "Unilas con y y agregá cuándo." },
    { intention: "NEGAR", prompt: "Sin opciones: decí dos alimentos o bebidas que no consumís.", challenge: "Usá no… ni… sin repetir no." },
    { intention: "ELEGIR", prompt: "Ofrecele al profesor dos planes reales para el fin de semana.", challenge: "Formulá una pregunta con o y pedí una decisión." },
    { intention: "CONTRASTAR", prompt: "Describí algo que tiene una desventaja y una ventaja.", challenge: "Usá pero para que el contraste sea claro." },
    { intention: "REPARTIR", prompt: "Imaginá dos personas preparando una comida.", challenge: "Distribuí las tareas con uno… otro." },
  ],
  production: [
    {
      title: "Cadena de rutina",
      prompt: "Contá tu rutina en cuatro ideas conectadas, sin convertirla en una lista de frases aisladas.",
      checklist: ["al menos dos usos de y", "una negación con ni", "un contraste con pero"],
    },
    {
      title: "Dos decisiones",
      prompt: "Proponé dos elecciones reales de esta semana y respondé qué preferís en cada caso.",
      checklist: ["pregunta con o", "respuesta completa", "una razón sencilla"],
    },
    {
      title: "Trabajo en equipo",
      prompt: "Repartí cuatro tareas entre dos personas y explicá el plan en voz alta.",
      checklist: ["uno… otro", "acciones diferentes", "una conexión final con y o pero"],
    },
  ],
  conversationMinutes: 5,
  conversation: [
    { question: "¿Qué dos cosas hacés siempre por la mañana?", starter: "Por la mañana… y…", followUp: "¿Qué no hacés nunca a esa hora?" },
    { question: "¿Preferís vivir en una ciudad grande o en un lugar tranquilo?", starter: "Prefiero…", followUp: "¿Qué ventaja y qué desventaja tiene tu opción?" },
    { question: "¿Qué comida te gusta, pero no comés con frecuencia?", starter: "Me gusta…, pero…", followUp: "¿Por qué no la comés con frecuencia?" },
    { question: "¿Qué dos cosas no pueden faltar en una buena clase?", starter: "No puede faltar ni… ni…", followUp: "¿Y qué cosa no es necesaria?" },
    { question: "Cuando viajás con otra persona, ¿cómo reparten las tareas?", starter: "Uno… y otro…", followUp: "¿Qué tarea preferís hacer vos?" },
    { question: "¿Trabajás mejor por la mañana o por la noche?", starter: "Trabajo mejor…", followUp: "¿Tu horario ideal es práctico o difícil de mantener?" },
    { question: "¿Qué te gusta de tu ciudad y qué querés cambiar?", starter: "Me gusta…, pero…", followUp: "¿Qué otra cosa positiva podés sumar?" },
    { question: "¿Qué elegís: más tiempo libre o más dinero?", starter: "Elijo…", followUp: "¿La otra opción también tiene una ventaja?" },
  ],
  finalTask: "Mi vida en 8 conexiones: hablá durante 2–3 minutos y usá y, ni, o, pero y uno… otro al menos una vez; después respondé repreguntas reales.",
};

export const ideasDentroDeIdeas: SyntaxLabData = {
  slug: "ideas-dentro-de-ideas",
  level: "A1",
  category: "Gramática",
  mode: "clause",
  module: "MÓDULO 15 · A1",
  pcic: "PCIC 15 · subordinación A1",
  title: "Ideas dentro de ideas",
  displayTitle: "Ideas dentro\nde ideas",
  subtitle: "Una idea principal abre un espacio para una actividad, una opinión, una identificación, una razón o un objetivo",
  goal: "Construir mensajes A1 con una idea principal y otra dependiente para hablar de gustos, deseos, opiniones, personas, razones y objetivos.",
  accent: "#55c8ff",
  accent2: "#b9f36b",
  productiveTargets: [
    "ser + infinitivo",
    "gustar + infinitivo",
    "querer + infinitivo",
    "creer que + oración",
    "nombre + que + presente",
    "porque",
    "para + infinitivo",
  ],
  boundaries: "La clase se limita a arquitecturas A1: infinitivo, presente de indicativo, que con antecedente expreso, porque y para + infinitivo. No convierte estructuras de niveles posteriores en objetivos productivos.",
  timeline: [
    { label: "Activación", minutes: 4 },
    { label: "Mapa", minutes: 8 },
    { label: "Encaja", minutes: 8 },
    { label: "Por qué / porque", minutes: 5 },
    { label: "Repara", minutes: 6 },
    { label: "Personaliza", minutes: 6 },
    { label: "Repetí con menos apoyo", minutes: 3 },
    { label: "Conversación", minutes: 5 },
  ],
  activation: {
    instruction: "Compará la frase mínima con la versión ampliada. El alumno dice qué información nueva aparece: actividad, opinión, identificación, razón u objetivo.",
    cards: [
      { first: "Es útil.", second: "Hablar español es útil.", intention: "ACTIVIDAD" },
      { first: "Tengo una opinión.", second: "Creo que la ciudad es segura.", intention: "OPINIÓN" },
      { first: "Conozco a la persona.", second: "Conozco a la persona que trabaja aquí.", intention: "IDENTIFICAR" },
      { first: "Estudio español.", second: "Estudio español porque vivo en Madrid.", intention: "RAZÓN" },
      { first: "Voy al mercado.", second: "Voy al mercado para comprar fruta.", intention: "OBJETIVO" },
    ],
  },
  patterns: [
    {
      key: "actividad",
      label: "ACTIVIDAD",
      intention: "VALORAR UNA ACTIVIDAD",
      formula: "INFINITIVO + ES + ADJETIVO",
      example: "Caminar es saludable.",
      preview: { left: "Caminar", connector: "es", right: "saludable." },
      explanation: "El infinitivo nombra la actividad completa y funciona como el tema de la valoración.",
    },
    {
      key: "gusto",
      label: "GUSTO",
      intention: "DECIR QUÉ ACTIVIDAD GUSTA",
      formula: "ME GUSTA + INFINITIVO",
      example: "Me gusta cocinar.",
      preview: { left: "Me gusta", connector: "+", right: "cocinar." },
      explanation: "Después de gusta usamos el infinitivo para nombrar la actividad, sin añadir otro sujeto.",
    },
    {
      key: "deseo",
      label: "DESEO",
      intention: "DECIR QUÉ QUERÉS HACER",
      formula: "QUIERO + INFINITIVO",
      example: "Quiero conocer México.",
      preview: { left: "Quiero", connector: "+", right: "conocer México." },
      explanation: "Querer abre un espacio para la acción deseada; la acción aparece en infinitivo.",
    },
    {
      key: "opinion",
      label: "OPINIÓN",
      intention: "EXPRESAR UNA OPINIÓN AFIRMATIVA",
      formula: "CREO QUE + ORACIÓN",
      example: "Creo que este barrio es tranquilo.",
      preview: { left: "Creo", connector: "que", right: "este barrio es tranquilo." },
      explanation: "Que introduce una idea completa que el hablante presenta como su opinión básica.",
    },
    {
      key: "identificacion",
      label: "IDENTIFICACIÓN",
      intention: "IDENTIFICAR UNA PERSONA O COSA",
      formula: "NOMBRE + QUE + PRESENTE",
      example: "La profesora que vive aquí habla italiano.",
      preview: { left: "La profesora", connector: "que", right: "vive aquí habla italiano." },
      explanation: "Aquí que no introduce una opinión: identifica de qué persona o cosa hablamos.",
    },
    {
      key: "razon",
      label: "RAZÓN",
      intention: "RESPONDER POR QUÉ",
      formula: "IDEA + PORQUE + RAZÓN",
      example: "Estudio español porque viajo mucho.",
      preview: { left: "Estudio español", connector: "porque", right: "viajo mucho." },
      explanation: "Porque introduce la respuesta o explicación; por qué aparece en la pregunta.",
    },
    {
      key: "objetivo",
      label: "OBJETIVO",
      intention: "DECIR PARA QUÉ",
      formula: "IDEA + PARA + INFINITIVO",
      example: "Voy al mercado para comprar fruta.",
      preview: { left: "Voy al mercado", connector: "para", right: "comprar fruta." },
      explanation: "Para + infinitivo expresa el objetivo inmediato de una acción.",
    },
  ],
  decisions: [
    {
      intention: "VALORAR UNA ACTIVIDAD",
      prompt: "Querés valorar la actividad de practicar cada día.",
      left: "Practicar cada día",
      right: "importante.",
      options: ["es", "que", "porque"],
      correct: 0,
      feedback: "Practicar nombra la actividad completa y es la conecta con la valoración importante.",
    },
    {
      intention: "GUSTO",
      prompt: "Decís una actividad que disfrutás.",
      left: "Me gusta",
      right: "música.",
      options: ["escuchar", "escucho", "que escuchar"],
      correct: 0,
      feedback: "Después de me gusta, el infinitivo escuchar nombra la actividad sin conjugar otro verbo.",
    },
    {
      intention: "DESEO",
      prompt: "Expresás un plan personal.",
      left: "Quiero",
      right: "Argentina.",
      options: ["visito", "visitar", "que visitar"],
      correct: 1,
      feedback: "Quiero abre el deseo y visitar aparece en infinitivo porque el sujeto de las dos acciones es el mismo.",
    },
    {
      intention: "OPINIÓN",
      prompt: "Das una opinión afirmativa sobre el curso.",
      left: "Creo",
      right: "el curso es útil.",
      options: ["que", "porque", "para"],
      correct: 0,
      feedback: "Creo que introduce una idea completa presentada como opinión: el curso es útil.",
    },
    {
      intention: "IDENTIFICAR",
      prompt: "Precisás de qué café hablás.",
      left: "El café",
      right: "está en la esquina es barato.",
      options: ["porque", "que", "para"],
      correct: 1,
      feedback: "Que identifica el café mediante una característica; el antecedente expreso es el café.",
    },
    {
      intention: "RAZÓN",
      prompt: "Explicás tu motivo para estudiar.",
      left: "Estudio español",
      right: "mi pareja es argentina.",
      options: ["por qué", "porque", "para"],
      correct: 1,
      feedback: "La frase responde a una pregunta sobre el motivo; porque introduce esa razón.",
    },
    {
      intention: "OBJETIVO",
      prompt: "Explicás el objetivo de ir al gimnasio.",
      left: "Voy al gimnasio",
      right: "más energía.",
      options: ["para tener", "porque tengo", "que tener"],
      correct: 0,
      feedback: "Para tener presenta el objetivo de ir; después de para usamos el infinitivo tener.",
    },
    {
      intention: "ACTIVIDAD",
      prompt: "Valorás una actividad cotidiana.",
      left: "Dormir bien",
      right: "necesario.",
      options: ["que", "es", "para"],
      correct: 1,
      feedback: "Dormir bien es el tema de la valoración y es lo conecta con necesario.",
    },
    {
      intention: "GUSTO",
      prompt: "Completás una preferencia real.",
      left: "A Marta le gusta",
      right: "con amigos.",
      options: ["sale", "salir", "que salir"],
      correct: 1,
      feedback: "El infinitivo salir nombra la actividad que le gusta a Marta, sin conjugar una segunda acción.",
    },
    {
      intention: "OPINIÓN",
      prompt: "Expresás una impresión básica del barrio.",
      left: "Creo",
      right: "hay buenos restaurantes.",
      options: ["para", "que", "porque"],
      correct: 1,
      feedback: "Creo que abre la opinión y la idea dependiente mantiene su verbo conjugado: hay.",
    },
    {
      intention: "IDENTIFICAR",
      prompt: "Identificás a una persona por su trabajo.",
      left: "La mujer",
      right: "trabaja en recepción habla francés.",
      options: ["porque", "para", "que"],
      correct: 2,
      feedback: "Que conecta mujer con la característica que permite identificarla: trabaja en recepción.",
    },
    {
      intention: "OBJETIVO",
      prompt: "Decís para qué usás una aplicación.",
      left: "Uso esta aplicación",
      right: "vocabulario.",
      options: ["porque practico", "para practicar", "que practico"],
      correct: 1,
      feedback: "Para practicar explica la finalidad de usar la aplicación y conserva practicar en infinitivo.",
    },
  ],
  questionAnswerCycle: [
    { question: "¿Por qué estudiás español?", answer: "Estudio español porque quiero viajar.", cue: "estudiar / viajar" },
    { question: "¿Por qué vivís en esta ciudad?", answer: "Vivo aquí porque trabajo cerca.", cue: "vivir / trabajar" },
    { question: "¿Por qué aprendés vocabulario nuevo?", answer: "Aprendo palabras porque quiero hablar mejor.", cue: "aprender / hablar" },
    { question: "¿Por qué cocinás en casa?", answer: "Cocino en casa porque es más barato.", cue: "cocinar / barato" },
  ],
  repairs: [
    {
      prompt: "Después de para necesitamos una acción en infinitivo.",
      original: "Voy al mercado para compro fruta.",
      options: ["Voy al mercado para comprar fruta.", "Voy al mercado porque comprar fruta.", "Voy al mercado que compro fruta."],
      correct: 0,
      feedback: "Comprar aparece en infinitivo porque expresa el objetivo de ir al mercado.",
    },
    {
      prompt: "La respuesta necesita porque, no la forma de pregunta por qué.",
      original: "Estudio español por qué vivo aquí.",
      options: ["Estudio español porque vivo aquí.", "¿Estudio español porque vivo aquí?", "Estudio español para vivo aquí."],
      correct: 0,
      feedback: "Porque introduce la razón dentro de la respuesta; por qué se reserva para preguntar por el motivo.",
    },
    {
      prompt: "Creer necesita que antes de una idea con verbo conjugado.",
      original: "Creo este barrio es tranquilo.",
      options: ["Creo que este barrio es tranquilo.", "Creo para este barrio es tranquilo.", "Creo porque este barrio tranquilo."],
      correct: 0,
      feedback: "Que abre la idea completa que funciona como contenido de la opinión expresada con creo.",
    },
    {
      prompt: "El infinitivo ya nombra la actividad; no necesita un segundo sujeto.",
      original: "Me gusta yo cocinar.",
      options: ["Me gusta cocinar.", "Me gusta que cocinar.", "Yo me gusta cocino."],
      correct: 0,
      feedback: "Me gusta cocinar presenta una sola persona y una actividad; el infinitivo evita una estructura innecesaria.",
    },
    {
      prompt: "El relativo necesita un antecedente claro antes de que.",
      original: "Que trabaja aquí habla francés.",
      options: ["La mujer que trabaja aquí habla francés.", "Creo que trabaja aquí habla francés.", "Porque trabaja aquí habla francés."],
      correct: 0,
      feedback: "La mujer es el antecedente expreso; que añade la información que permite identificarla.",
    },
  ],
  retrieval: [
    { intention: "ACTIVIDAD", prompt: "Sin banco de respuestas: valorá una actividad de tu vida con infinitivo + ser.", challenge: "Repetí la frase una segunda vez sin mirar la fórmula." },
    { intention: "GUSTO Y DESEO", prompt: "Decí algo que te gusta hacer y algo que querés hacer este mes.", challenge: "Usá dos infinitivos distintos y después repetí con menos apoyo." },
    { intention: "OPINIÓN", prompt: "Dá una opinión sencilla sobre tu ciudad con creo que.", challenge: "Cambiá la opinión para hablar de tu trabajo o estudio." },
    { intention: "IDENTIFICACIÓN", prompt: "Identificá una persona o cosa real con nombre + que + presente.", challenge: "Comprobá que el antecedente aparece antes de que." },
    { intention: "RAZÓN Y OBJETIVO", prompt: "Contá una acción, su razón con porque y su objetivo con para + infinitivo.", challenge: "Repetí la respuesta con más fluidez y sin leer." },
  ],
  production: [
    {
      title: "Lo que hago",
      prompt: "Explicá dos actividades que te gustan y una que querés empezar.",
      checklist: ["gustar + infinitivo", "querer + infinitivo", "una razón con porque"],
    },
    {
      title: "Lo que pienso",
      prompt: "Dá una opinión sobre tu ciudad y otra sobre aprender idiomas.",
      checklist: ["dos usos afirmativos de creo que", "una valoración con infinitivo + ser", "sin leer una respuesta preparada"],
    },
    {
      title: "Personas y objetivos",
      prompt: "Identificá a una persona real y explicá un objetivo actual.",
      checklist: ["antecedente + que + presente", "para + infinitivo", "una repregunta del profesor"],
    },
  ],
  conversationMinutes: 5,
  conversation: [
    { question: "¿Qué actividad te gusta hacer cuando tenés tiempo libre?", starter: "Me gusta…", followUp: "¿Por qué te gusta esa actividad?" },
    { question: "¿Qué querés hacer durante los próximos meses?", starter: "Quiero…", followUp: "¿Para qué querés hacerlo?" },
    { question: "¿Qué actividad es importante para estar bien?", starter: "… es importante porque…", followUp: "¿La hacés con frecuencia?" },
    { question: "¿Qué pensás de la ciudad donde vivís?", starter: "Creo que…", followUp: "¿Qué lugar que conocés representa bien esa opinión?" },
    { question: "¿Quién es una persona que te ayuda mucho?", starter: "… es una persona que…", followUp: "¿Por qué es importante para vos?" },
    { question: "¿Para qué estudiás español ahora?", starter: "Estudio español para…", followUp: "¿Y por qué elegiste español?" },
    { question: "¿Qué objeto que usás todos los días es indispensable?", starter: "El/La… que uso…", followUp: "¿Para qué lo usás exactamente?" },
    { question: "¿Qué creés que hace buena una clase?", starter: "Creo que una buena clase…", followUp: "¿Por qué esa característica es importante?" },
  ],
  finalTask: "Mi mapa A1: conversá durante 3–5 minutos sobre algo que te gusta hacer, algo que querés hacer, una opinión, una persona o cosa con que, una razón con porque y un objetivo con para + infinitivo.",
};
