export type Pair = { es: string; en: string };

export type ConditionalChapter = {
  id: string;
  number: string;
  level: string;
  icon: string;
  title: string;
  english: string;
  color: string;
  tagline: Pair;
  meaning: Pair;
  formula: string;
  formulaEn: string;
  uses: Pair[];
  examples: { es: string; en: string; note: string; noteEn?: string }[];
  traps: Pair[];
  exercises: { prompt: string; promptEn?: string; answer: string; why: string; whyEn?: string }[];
  speaking: Pair[];
};

export const chapters: ConditionalChapter[] = [
  {
    id: "realidad",
    number: "01",
    level: "A1",
    icon: "🌱",
    title: "El mundo real",
    english: "The real world · Zero conditional",
    color: "#52d6a5",
    tagline: { es: "Cuando pasa A, normalmente pasa B.", en: "When A happens, B normally happens." },
    meaning: { es: "Usamos esta estructura para verdades generales, hábitos, instrucciones y consecuencias que consideramos normales o seguras.", en: "We use this structure for general truths, habits, instructions and consequences we consider normal or certain." },
    formula: "SI + PRESENTE → PRESENTE",
    formulaEn: "IF + PRESENT → PRESENT",
    uses: [
      { es: "Verdades: Si calentás hielo, se derrite.", en: "Facts: If you heat ice, it melts." },
      { es: "Hábitos: Si tengo tiempo, camino al trabajo.", en: "Habits: If I have time, I walk to work." },
      { es: "Instrucciones: Si no entendés, preguntá.", en: "Instructions: If you don’t understand, ask." }
    ],
    examples: [
      { es: "Si tomo café de noche, no duermo.", en: "If I drink coffee at night, I don’t sleep.", note: "resultado habitual", noteEn: "habitual result" },
      { es: "Si llueve, usamos el subte.", en: "If it rains, we take the subway.", note: "decisión habitual", noteEn: "habitual decision" },
      { es: "Si necesitás ayuda, llamame.", en: "If you need help, call me.", note: "presente + imperativo", noteEn: "present + command" }
    ],
    traps: [
      { es: "No significa que esté pasando ahora: puede ser una regla general.", en: "It does not mean it is happening now: it may be a general rule." },
      { es: "La cláusula con si puede ir primero o después; solo cambia la coma.", en: "The if-clause can come first or second; only the comma changes." }
    ],
    exercises: [
      { prompt: "Si no ___ (comer) bien, me siento cansado.", promptEn: "If I don’t eat well, I feel tired.", answer: "como", why: "Es un resultado habitual: presente + presente.", whyEn: "It is a habitual result: present + present." },
      { prompt: "Si vos ___ (tener) dudas, preguntame.", promptEn: "If you have questions, ask me.", answer: "tenés", why: "Con vos: tenés. El resultado es una instrucción.", whyEn: "With vos: tenés. The result is an instruction." },
      { prompt: "Las plantas mueren si no ___ (recibir) agua.", promptEn: "Plants die if they do not receive water.", answer: "reciben", why: "La cláusula con si puede aparecer al final.", whyEn: "The si clause can appear at the end." }
    ],
    speaking: [
      { es: "¿Qué pasa si dormís menos de seis horas?", en: "What happens if you sleep less than six hours?" },
      { es: "Dame tres reglas para vivir con vos.", en: "Give me three rules for living with you." },
      { es: "¿Qué hacés si estás estresado/a?", en: "What do you do if you are stressed?" }
    ]
  },
  {
    id: "posible",
    number: "02",
    level: "A2",
    icon: "🚀",
    title: "El futuro posible",
    english: "The possible future · First conditional",
    color: "#5cc8ff",
    tagline: { es: "La condición es realmente posible.", en: "The condition is genuinely possible." },
    meaning: { es: "Hablamos de una posibilidad real presente o futura y de su consecuencia probable, promesa, advertencia, decisión u orden.", en: "We talk about a real present or future possibility and its probable consequence, promise, warning, decision or command." },
    formula: "SI + PRESENTE → FUTURO / PRESENTE / IMPERATIVO",
    formulaEn: "IF + PRESENT → FUTURE / PRESENT / COMMAND",
    uses: [
      { es: "Predicción: Si llueve, nos quedaremos en casa.", en: "Prediction: If it rains, we’ll stay home." },
      { es: "Promesa: Si venís, cocino para vos.", en: "Promise: If you come, I’ll cook for you." },
      { es: "Orden: Si llegás primero, esperame afuera.", en: "Command: If you arrive first, wait for me outside." }
    ],
    examples: [
      { es: "Si mañana hace sol, iremos al parque.", en: "If it is sunny tomorrow, we’ll go to the park.", note: "posibilidad + predicción", noteEn: "possibility + prediction" },
      { es: "Te aviso si termino temprano.", en: "I’ll let you know if I finish early.", note: "orden invertido", noteEn: "reversed order" },
      { es: "Si encontrás mi celular, no mires las fotos.", en: "If you find my phone, don’t look at the photos.", note: "posibilidad + imperativo", noteEn: "possibility + command" }
    ],
    traps: [
      { es: "Después de si NO usamos futuro: Si vendrás ❌ → Si venís ✅.", en: "After si we do NOT use the future: Si vendrás ❌ → Si venís ✅." },
      { es: "El presente puede expresar futuro cuando aparece la condición.", en: "The present can express future time inside the condition." }
    ],
    exercises: [
      { prompt: "Si mañana ___ (llover), cancelaremos el picnic.", promptEn: "If it rains tomorrow, we will cancel the picnic.", answer: "llueve", why: "Después de si usamos presente, aunque hablamos del futuro.", whyEn: "After si we use the present, even when we are talking about the future." },
      { prompt: "Te ___ (llamar) si tengo novedades.", promptEn: "I will call you if I have news.", answer: "llamaré / llamo", why: "El resultado admite futuro o presente con sentido futuro.", whyEn: "The result can use the future or the present with a future meaning." },
      { prompt: "Si ves a Ana, ___ (decirle) que llego tarde.", promptEn: "If you see Ana, tell her I am running late.", answer: "decile / dile", why: "La consecuencia es una orden: imperativo.", whyEn: "The result is a command, so we use the imperative." }
    ],
    speaking: [
      { es: "Si tenés un día libre mañana, ¿qué vas a hacer?", en: "If you have a free day tomorrow, what will you do?" },
      { es: "Hacé una promesa y una advertencia.", en: "Make one promise and one warning." },
      { es: "¿Qué cambiará si tu ciudad elimina los autos?", en: "What will change if your city removes cars?" }
    ]
  },
  {
    id: "hipotetico",
    number: "03",
    level: "B1–B2",
    icon: "🪐",
    title: "El universo hipotético",
    english: "The hypothetical universe · Second conditional",
    color: "#9d7cff",
    tagline: { es: "No digo que sea imposible; lo imagino como lejano o contrario a la realidad.", en: "I am not saying it is impossible; I imagine it as remote or contrary to reality." },
    meaning: { es: "Presentamos situaciones imaginarias, poco probables o directamente contrarias al presente. También sirve para consejos con Si yo fuera vos…", en: "We present imaginary, unlikely or present-contrary situations. It also gives advice with Si yo fuera vos…" },
    formula: "SI + IMPERFECTO DE SUBJUNTIVO → CONDICIONAL SIMPLE",
    formulaEn: "IF + PAST SUBJUNCTIVE → WOULD + INFINITIVE",
    uses: [
      { es: "Deseo imaginario: Si viviera frente al mar, nadaría todos los días.", en: "Imaginary wish: If I lived by the sea, I would swim every day." },
      { es: "Consejo: Si yo fuera vos, hablaría con ella.", en: "Advice: If I were you, I would talk to her." },
      { es: "Hipótesis: ¿Qué harías si ganaras un millón de dólares?", en: "Hypothesis: What would you do if you won a million dollars?" }
    ],
    examples: [
      { es: "Si tuviera más tiempo, aprendería japonés.", en: "If I had more time, I would learn Japanese.", note: "ahora no tengo suficiente" },
      { es: "Compraría esa casa si fuera más barata.", en: "I would buy that house if it were cheaper.", note: "resultado primero" },
      { es: "Si pudieras hablar con tu yo del futuro, ¿qué le preguntarías?", en: "If you could talk to your future self, what would you ask?", note: "pregunta hipotética" }
    ],
    traps: [
      { es: "Si tendría ❌ → Si tuviera ✅. El condicional no va normalmente después de si.", en: "Si tendría ❌ → Si tuviera ✅. The conditional does not normally follow si." },
      { es: "Las terminaciones -ra y -se son equivalentes: tuviera = tuviese. -ra es más frecuente.", en: "The -ra and -se endings are equivalent: tuviera = tuviese. -ra is more frequent." }
    ],
    exercises: [
      { prompt: "Si yo ___ (ser) vos, no aceptaría.", answer: "fuera / fuese", why: "Consejo hipotético: imperfecto de subjuntivo." },
      { prompt: "¿Qué ___ (hacer) si pudieras cambiar una ley?", answer: "harías", why: "La consecuencia usa condicional simple." },
      { prompt: "Viajaríamos más si los vuelos ___ (costar) menos.", answer: "costaran / costasen", why: "La condición puede ir después del resultado." }
    ],
    speaking: [
      { es: "Si fueras alcalde por un día, ¿qué cambiarías primero?", en: "If you were mayor for a day, what would you change first?" },
      { es: "¿Qué harías si no necesitaras trabajar?", en: "What would you do if you did not need to work?" },
      { es: "Dale un consejo real a otra persona usando Si yo fuera vos…", en: "Give someone real advice using Si yo fuera vos…" }
    ]
  },
  {
    id: "pasado",
    number: "04",
    level: "B2",
    icon: "⏳",
    title: "El pasado imposible",
    english: "The impossible past · Third conditional",
    color: "#ffb44c",
    tagline: { es: "La condición ya no puede cambiarse.", en: "The condition can no longer be changed." },
    meaning: { es: "Imaginamos un pasado diferente para hablar de resultados que no ocurrieron, arrepentimientos, críticas o alivio.", en: "We imagine a different past to discuss results that did not happen, regrets, criticism or relief." },
    formula: "SI + PLUSCUAMPERFECTO DE SUBJUNTIVO → CONDICIONAL COMPUESTO",
    formulaEn: "IF + PAST PERFECT SUBJUNCTIVE → WOULD HAVE + PARTICIPLE",
    uses: [
      { es: "Arrepentimiento: Si hubiera estudiado, habría aprobado.", en: "Regret: If I had studied, I would have passed." },
      { es: "Crítica: Si me hubieras avisado, habría ido.", en: "Criticism: If you had told me, I would have gone." },
      { es: "Alivio: Si hubiéramos salido antes, habríamos estado allí durante el terremoto.", en: "Relief: If we had left earlier, we would have been there during the earthquake." }
    ],
    examples: [
      { es: "Si hubiera sabido la verdad, habría decidido otra cosa.", en: "If I had known the truth, I would have decided differently.", note: "pero no la sabía" },
      { es: "No nos habríamos perdido si hubieras mirado el mapa.", en: "We would not have got lost if you had checked the map.", note: "resultado negativo" },
      { es: "Si no te hubiera conocido, mi vida habría sido muy distinta.", en: "If I had not met you, my life would have been very different.", note: "pasado alternativo" }
    ],
    traps: [
      { es: "Hubiera + participio construye la condición; habría + participio es la consecuencia estándar.", en: "Hubiera + participle builds the condition; habría + participle is the standard result." },
      { es: "En el español real también se oye hubiera en el resultado: Si sabía, hubiera ido. En un registro formal y neutro, usá habría ido.", en: "Real Spanish also uses hubiera in the result. In a formal, neutral register, use habría ido." }
    ],
    exercises: [
      { prompt: "Si me lo ___ (decir), te habría ayudado.", answer: "hubieras dicho", why: "Condición pasada imposible: hubiera + participio irregular dicho." },
      { prompt: "No ___ (llegar) tarde si hubiéramos tomado un taxi.", answer: "habríamos llegado", why: "Consecuencia no realizada: condicional compuesto." },
      { prompt: "Si no hubiera llovido, la fiesta ___ (ser) afuera.", answer: "habría sido", why: "El participio de ser es sido." }
    ],
    speaking: [
      { es: "¿Qué habría cambiado si no hubieras aprendido español?", en: "What would have changed if you had not learned Spanish?" },
      { es: "Contá una decisión pequeña que tuvo una consecuencia enorme.", en: "Describe a small decision that had a huge consequence." },
      { es: "Reescribí el final de un viaje real.", en: "Rewrite the ending of a real trip." }
    ]
  },
  {
    id: "mixtos",
    number: "05",
    level: "C1",
    icon: "🌀",
    title: "Los universos mixtos",
    english: "Mixed & advanced conditionals",
    color: "#ff6f91",
    tagline: { es: "La causa vive en un tiempo y la consecuencia en otro.", en: "The cause exists in one time and the result in another." },
    meaning: { es: "Mezclamos pasado y presente cuando la lógica lo exige. Después reemplazamos si con conectores que expresan requisito, excepción, amenaza o condición implícita.", en: "We mix past and present when logic requires it. Then we replace si with connectors expressing requirements, exceptions, warnings or implied conditions." },
    formula: "PASADO IRREAL → RESULTADO PRESENTE · ESTADO PRESENTE → RESULTADO PASADO",
    formulaEn: "UNREAL PAST → PRESENT RESULT · PRESENT STATE → PAST RESULT",
    uses: [
      { es: "Pasado → presente: Si hubiera dormido, ahora estaría mejor.", en: "Past → present: If I had slept, I would feel better now." },
      { es: "Presente → pasado: Si fuera más paciente, ayer no habría discutido.", en: "Present → past: If I were more patient, I would not have argued yesterday." },
      { es: "Condición formal: De haberlo sabido, no habría venido.", en: "Formal condition: Had I known, I would not have come." }
    ],
    examples: [
      { es: "Si hubieras aceptado ese trabajo, ahora vivirías en Tokio.", en: "If you had accepted that job, you would live in Tokyo now.", note: "causa pasada → presente" },
      { es: "Si no fuera tan impulsivo, no habría comprado eso ayer.", en: "If I were not so impulsive, I would not have bought that yesterday.", note: "característica presente → pasado" },
      { es: "Te acompaño con tal de que volvamos temprano.", en: "I’ll go with you provided that we return early.", note: "requisito + subjuntivo" }
    ],
    traps: [
      { es: "No mezcles tiempos por apariencia: preguntá cuándo ocurre la causa y cuándo ocurre el resultado.", en: "Do not mix tenses for appearance: ask when the cause and result occur." },
      { es: "A menos que, con tal de que, salvo que y en caso de que llevan subjuntivo.", en: "A menos que, con tal de que, salvo que and en caso de que take the subjunctive." }
    ],
    exercises: [
      { prompt: "Si hubiera aceptado la oferta, ahora ___ (trabajar) en Madrid.", answer: "trabajaría", why: "Causa pasada; resultado presente." },
      { prompt: "Voy con vos con tal de que me ___ (esperar).", answer: "esperes", why: "Con tal de que exige presente de subjuntivo." },
      { prompt: "De ___ (saber) eso, habría actuado de otra manera.", answer: "haber sabido", why: "De + infinitivo compuesto expresa una condición pasada formal." }
    ],
    speaking: [
      { es: "¿Cómo sería tu vida hoy si hubieras nacido en otro país?", en: "What would your life be like today if you had been born in another country?" },
      { es: "Negociá un plan usando tres condiciones diferentes.", en: "Negotiate a plan using three different conditions." },
      { es: "Transformá una decisión pasada en una consecuencia presente.", en: "Turn a past decision into a present consequence." }
    ]
  }
];

export type TenseTable = {
  id: string;
  title: string;
  english: string;
  cue: string;
  cueEn?: string;
  rows: [string, string, string, string][];
};

export const tenseTables: TenseTable[] = [
  {
    id: "presente",
    title: "Presente de indicativo",
    english: "Present indicative",
    cue: "Portal 01–02 · después de SI para condiciones reales",
    cueEn: "Portal 01–02 · after SI for real conditions",
    rows: [
      ["yo", "hablo", "como", "vivo"], ["vos", "hablás", "comés", "vivís"], ["tú", "hablas", "comes", "vives"],
      ["él / ella / usted", "habla", "come", "vive"], ["nosotros/as", "hablamos", "comemos", "vivimos"],
      ["ustedes / ellos/as", "hablan", "comen", "viven"]
    ]
  },
  {
    id: "futuro",
    title: "Futuro simple",
    english: "Simple future",
    cue: "Portal 02 · consecuencia probable",
    cueEn: "Portal 02 · probable result",
    rows: [
      ["yo", "hablaré", "comeré", "viviré"], ["vos / tú", "hablarás", "comerás", "vivirás"],
      ["él / ella / usted", "hablará", "comerá", "vivirá"], ["nosotros/as", "hablaremos", "comeremos", "viviremos"],
      ["ustedes / ellos/as", "hablarán", "comerán", "vivirán"]
    ]
  },
  {
    id: "imperativo",
    title: "Imperativo afirmativo / negativo",
    english: "Affirmative / negative commands",
    cue: "Portal 01–02 · instrucciones y consecuencias",
    cueEn: "Portal 01–02 · instructions and results",
    rows: [
      ["vos", "hablá / no hables", "comé / no comas", "viví / no vivas"],
      ["tú", "habla / no hables", "come / no comas", "vive / no vivas"],
      ["usted", "hable / no hable", "coma / no coma", "viva / no viva"],
      ["nosotros/as", "hablemos / no hablemos", "comamos / no comamos", "vivamos / no vivamos"],
      ["ustedes", "hablen / no hablen", "coman / no coman", "vivan / no vivan"]
    ]
  },
  {
    id: "presente-subjuntivo",
    title: "Presente de subjuntivo",
    english: "Present subjunctive",
    cue: "Portal 05 · requisitos, excepciones y advertencias",
    rows: [
      ["yo", "hable", "coma", "viva"], ["vos / tú", "hables", "comas", "vivas"],
      ["él / ella / usted", "hable", "coma", "viva"], ["nosotros/as", "hablemos", "comamos", "vivamos"],
      ["ustedes / ellos/as", "hablen", "coman", "vivan"]
    ]
  },
  {
    id: "imperfecto-subjuntivo",
    title: "Imperfecto de subjuntivo",
    english: "Past subjunctive · -RA form",
    cue: "Portal 03 · condición hipotética",
    rows: [
      ["yo", "hablara", "comiera", "viviera"], ["vos / tú", "hablaras", "comieras", "vivieras"],
      ["él / ella / usted", "hablara", "comiera", "viviera"], ["nosotros/as", "habláramos", "comiéramos", "viviéramos"],
      ["ustedes / ellos/as", "hablaran", "comieran", "vivieran"]
    ]
  },
  {
    id: "condicional-simple",
    title: "Condicional simple",
    english: "Simple conditional",
    cue: "Portal 03 · consecuencia imaginaria",
    rows: [
      ["yo", "hablaría", "comería", "viviría"], ["vos / tú", "hablarías", "comerías", "vivirías"],
      ["él / ella / usted", "hablaría", "comería", "viviría"], ["nosotros/as", "hablaríamos", "comeríamos", "viviríamos"],
      ["ustedes / ellos/as", "hablarían", "comerían", "vivirían"]
    ]
  },
  {
    id: "pluscuamperfecto-subjuntivo",
    title: "Pluscuamperfecto de subjuntivo",
    english: "Past perfect subjunctive",
    cue: "Portal 04 · condición pasada imposible",
    rows: [
      ["yo", "hubiera hablado", "hubiera comido", "hubiera vivido"], ["vos / tú", "hubieras hablado", "hubieras comido", "hubieras vivido"],
      ["él / ella / usted", "hubiera hablado", "hubiera comido", "hubiera vivido"], ["nosotros/as", "hubiéramos hablado", "hubiéramos comido", "hubiéramos vivido"],
      ["ustedes / ellos/as", "hubieran hablado", "hubieran comido", "hubieran vivido"]
    ]
  },
  {
    id: "condicional-compuesto",
    title: "Condicional compuesto",
    english: "Perfect conditional",
    cue: "Portal 04 · consecuencia pasada no realizada",
    rows: [
      ["yo", "habría hablado", "habría comido", "habría vivido"], ["vos / tú", "habrías hablado", "habrías comido", "habrías vivido"],
      ["él / ella / usted", "habría hablado", "habría comido", "habría vivido"], ["nosotros/as", "habríamos hablado", "habríamos comido", "habríamos vivido"],
      ["ustedes / ellos/as", "habrían hablado", "habrían comido", "habrían vivido"]
    ]
  }
];

export const irregularStems = [
  ["decir", "dir-", "diría / diré"], ["hacer", "har-", "haría / haré"], ["poder", "podr-", "podría / podré"],
  ["poner", "pondr-", "pondría / pondré"], ["querer", "querr-", "querría / querré"], ["saber", "sabr-", "sabría / sabré"],
  ["salir", "saldr-", "saldría / saldré"], ["tener", "tendr-", "tendría / tendré"], ["venir", "vendr-", "vendría / vendré"],
  ["haber", "habr-", "habría / habrá"], ["caber", "cabr-", "cabría / cabrá"], ["valer", "valdr-", "valdría / valdrá"]
];

export const irregularParticiples = [
  ["abrir", "abierto"], ["decir", "dicho"], ["escribir", "escrito"], ["hacer", "hecho"], ["morir", "muerto"],
  ["poner", "puesto"], ["resolver", "resuelto"], ["romper", "roto"], ["ver", "visto"], ["volver", "vuelto"]
];

export const presentSubjIrregulars = [
  ["dar", "dé, des, dé, demos, den"], ["estar", "esté, estés, esté, estemos, estén"],
  ["haber", "haya, hayas, haya, hayamos, hayan"], ["ir", "vaya, vayas, vaya, vayamos, vayan"],
  ["saber", "sepa, sepas, sepa, sepamos, sepan"], ["ser", "sea, seas, sea, seamos, sean"]
];

export const advancedConnectors: [string, string, string][] = [
  ["a menos que / salvo que", "unless / except if", "No voy a menos que vengas conmigo."],
  ["con tal de que", "provided that", "Acepto con tal de que seas sincero."],
  ["siempre que", "as long as / whenever", "Podés quedarte siempre que respetes las reglas."],
  ["en caso de que", "in case", "Llevá efectivo en caso de que no acepten tarjeta."],
  ["como + subjuntivo", "if you… (warning)", "Como llegues tarde otra vez, me voy."],
  ["de + infinitivo", "if / were…", "De tener tiempo, viajaría más."],
  ["de haber + participio", "had…", "De haberlo sabido, no habría venido."],
  ["siempre y cuando", "only as long as", "Te ayudo siempre y cuando me digas la verdad."]
];

export const finalMission = [
  { situation: "Una regla personal que siempre se cumple", target: "Real · presente + presente" },
  { situation: "Un plan posible para la semana próxima", target: "Posible · presente + futuro" },
  { situation: "Una vida alternativa que te gustaría probar", target: "Hipotético · imperfecto subj. + condicional" },
  { situation: "Una decisión pasada que cambiarías", target: "Imposible · pluscuamperfecto subj. + condicional compuesto" },
  { situation: "Una causa del pasado que todavía afecta tu presente", target: "Mixto · pasado irreal + resultado presente" }
];
