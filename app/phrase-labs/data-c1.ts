import type { PhraseToken } from "./data";

export type C1LabData = {
  slug: string;
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
  timeline: { label: string; minutes: string }[];
  discovery: { question: string; instruction: string; contrast: string[] };
  chapters: {
    eyebrow: string;
    title: string;
    description: string;
    explanation: string;
    formula: string;
    examples: string[];
    optional?: { title: string; text: string; examples: string[] };
  }[];
  cases: {
    source: string;
    sentence: string;
    prompt: string;
    firstReading: string;
    secondReading: string;
    reformulations: string[];
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
  production: { title: string; prompt: string; checklist: string[] }[];
  conversation: {
    question: string;
    starter: string;
    vocabulary: string;
    followUp: string;
    challenge: string;
  }[];
};

export const ambiguedadC1: C1LabData = {
  slug: "cuando-una-frase-puede-significar-dos-cosas",
  module: "MÓDULO 10–11 · C1",
  pcic: "10. El sintagma nominal + 11. El sintagma adjetival · C1",
  title: "El Archivo de las Dos Lecturas",
  displayTitle: "El Archivo de\nlas Dos Lecturas",
  subtitle: "Una investigación sobre matiz, ambigüedad y decisiones de estilo",
  goal: "Interpretar dos sentidos posibles y reformular para eliminar —o producir deliberadamente— la ambigüedad.",
  accent: "#f97316",
  accent2: "#22d3ee",
  coreFormula: [
    { text: "FRASE", role: "anchor" },
    { text: "→ HIPÓTESIS", role: "signal" },
    { text: "→ OTRA LECTURA", role: "detail" },
    { text: "→ REFORMULACIÓN", role: "link" },
  ],
  auditNote: "Las clases B1 y B2 ya trabajan la elipsis básica, las comas explicativas, la restricción y la desambiguación inicial de complementos. Este archivo C1 avanza hacia elipsis discursiva, dislocación, nominalizaciones estilísticas, roles semánticos, concordancia coordinada y construcciones con lo más.",
  timeline: [
    { label: "Hipótesis", minutes: "5 min" },
    { label: "Análisis", minutes: "10 min" },
    { label: "Investigación", minutes: "10 min" },
    { label: "Edición", minutes: "10 min" },
    { label: "Conversación", minutes: "10–15 min" },
  ],
  discovery: {
    question: "¿La directora criticó o fue criticada?",
    instruction: "Proponé una lectura antes de abrir nada. Después compará qué interpretaciones permite de, cuál favorece el uso real y cómo escribirías cada intención sin riesgo. Usá «el asesino de Juan» como prueba límite.",
    contrast: ["el asesino de Juan", "la crítica de la directora", "Ordenador, tengo uno viejo.", "el temor de que te vayas"],
  },
  chapters: [
    {
      eyebrow: "PISTA 01 · CONTEXTO",
      title: "El núcleo elíptico vive en el discurso",
      description: "Omitir es preciso solamente cuando el referente sigue disponible.",
      explanation: "En C1, la pregunta no es si se puede borrar un sustantivo, sino cuántos candidatos deja el contexto. Si dos núcleos compiten, la elipsis deja de ser elegante y empieza a ser ambigua.",
      formula: "EL INFORME BREVE Y EL Ø DE AYER",
      examples: ["Revisé la propuesta inicial y la corregida.", "Entre el informe técnico y el de ventas, prefiero el primero.", "¿La versión de Ana o la de Luis?"],
      optional: { title: "Prueba de recuperabilidad", text: "Pedile al interlocutor que complete mentalmente el hueco. Si propone más de un núcleo razonable, repetí el nombre o elegí otro sustituto.", examples: ["Trajo el informe y la copia revisada; después archivó el de Marta. ¿Informe o copia?", "Archivó el informe de Marta: lectura inequívoca."] },
    },
    {
      eyebrow: "PISTA 02 · TEMA",
      title: "La dislocación instala un bloque semántico",
      description: "Primero aparece el tema; después, una oración que lo retoma.",
      explanation: "En «Ordenador, tengo uno viejo», ordenador funciona como tema separado y uno lo recupera dentro de la oración. La estructura es común en la conversación, pero su naturalidad depende del contexto y de la variedad.",
      formula: "TEMA, + ORACIÓN CON ELEMENTO DE RETOMA",
      examples: ["Ordenador, tengo uno viejo.", "Computadora, tengo una bastante vieja.", "Ese proyecto, no sé qué hacer con él."],
      optional: { title: "No confundir con una lista rota", text: "La pausa necesita una función discursiva: abrir un tema, contrastarlo o recuperarlo. Sin contexto, la dislocación puede sonar teatral o artificial.", examples: ["¿Y de transporte? Auto, no tengo.", "El auto no lo tengo acá: dislocación con pronombre de retoma."] },
    },
    {
      eyebrow: "PISTA 03 · ESTILO",
      title: "Nominalizar cambia la perspectiva",
      description: "Una acción puede convertirse en fenómeno, tema o imagen.",
      explanation: "El infinitivo sustantivado permite mirar la acción desde afuera. «El cantar de los pájaros» no equivale estilísticamente a «los pájaros cantan»: presenta el sonido como una entidad y tiene un tono literario.",
      formula: "EL + INFINITIVO + COMPLEMENTOS",
      examples: ["el cantar de los pájaros", "el ir y venir de la gente", "su manera de mirar"],
      optional: { title: "Elegir registro", text: "La nominalización puede condensar y dar distancia; acumulada, vuelve el texto abstracto. Alterná con verbos cuando necesites agentes y acciones visibles.", examples: ["La reducción del gasto generó protestas.", "El Gobierno redujo el gasto y la gente protestó."] },
    },
    {
      eyebrow: "PISTA 04 · ROLES",
      title: "De no siempre dice quién hace qué",
      description: "La gramática abre relaciones; el uso y el contexto las jerarquizan.",
      explanation: "En «la crítica de la directora», la directora puede emitir o recibir la crítica. «El asesino de Juan» muestra otro límite: la lectura normal presenta a Juan como víctima; para presentar a Juan como asesino usamos «Juan, el asesino». No toda lectura imaginable tiene el mismo peso real.",
      formula: "NOMBRE DE EVENTO + DE + PARTICIPANTE",
      examples: ["la crítica de la directora", "la elección del presidente", "el retrato de Elena"],
      optional: { title: "Roles explícitos", text: "Cuando la relación importa, reemplazá de por una estructura que codifique el papel semántico.", examples: ["la crítica formulada por la directora", "la crítica dirigida contra la directora", "el retrato pintado por Elena / el retrato de Elena pintado por otra artista"] },
    },
    {
      eyebrow: "PISTA 05 · SUJETO",
      title: "Infinitivo u oración: ¿quién vive el temor?",
      description: "La arquitectura elegida distribuye participantes y distancia.",
      explanation: "«El temor a perderte» presenta perder como posibilidad compacta y suele conservar al experimentante como sujeto implícito. «El temor de que te vayas» introduce otra situación y hace explícito que vos podrías irte.",
      formula: "TEMOR A + INFINITIVO / TEMOR DE QUE + SUBJUNTIVO",
      examples: ["el deseo de volver", "el deseo de que vuelvas", "la posibilidad de cambiar / de que cambie"],
      optional: { title: "No es una sustitución mecánica", text: "La preposición depende también del nombre y del uso. Antes de reformular, comprobá el patrón léxico y después decidí si necesitás un sujeto explícito.", examples: ["la dificultad de explicarlo", "la dificultad para que todos lo entiendan"] },
    },
    {
      eyebrow: "PISTA 06 · ALCANCE",
      title: "Resultado, concordancia y grado",
      description: "Una forma breve puede concentrar varias decisiones de interpretación.",
      explanation: "«Una versión reducida» puede evocar el proceso de reducir o funcionar como una propiedad lexicalizada: una versión más corta. Con nombres coordinados, el plural hace visible que el modificador alcanza a ambos; el singular puede agruparlos como un bloque semántico, pero también crear ambigüedad. «De lo más» intensifica, pero el adjetivo sigue concordando.",
      formula: "NOMBRES COORDINADOS + ADJ. PLURAL · DE LO MÁS + ADJ.",
      examples: ["el análisis y la propuesta presentados", "la entrada y salida controlada del personal", "una película de lo más divertida"],
      optional: { title: "Bloque, alcance y variedad", text: "«Entrada y salida controlada» puede empaquetarse como un único procedimiento administrativo, pero el singular también puede parecer ligado solo a salida. «La entrada y la salida controladas» explicita el alcance doble. En buena parte de Hispanoamérica, «estar lo más bien» significa estar perfectamente o sin problema; bien es invariable.", examples: ["la entrada y la salida controladas", "Después del susto, estoy lo más bien.", "Una versión muy reducida: muy favorece la lectura de propiedad graduable."] },
    },
  ],
  cases: [
    { source: "TITULAR", sentence: "Polémica por la crítica de la directora", prompt: "¿La directora criticó o fue criticada?", firstReading: "La directora emitió una crítica que generó polémica.", secondReading: "Alguien criticó a la directora y eso generó polémica.", reformulations: ["Polémica por las críticas formuladas por la directora.", "Polémica por las críticas dirigidas contra la directora."] },
    { source: "CONVERSACIÓN", sentence: "El informe nuevo y el de Paula ya están listos.", prompt: "¿Qué sustantivo recupera «el»?", firstReading: "El contexto inmediato favorece informe: el informe de Paula.", secondReading: "Un contexto anterior podría activar otro nombre masculino; sin él, esa lectura no es accesible.", reformulations: ["Los dos informes, el nuevo y el de Paula, ya están listos.", "El informe nuevo y el informe de Paula ya están listos."] },
    { source: "RESEÑA", sentence: "Es una adaptación de lo más cuidada y una versión reducida.", prompt: "¿Reducida describe un resultado o un tipo de producto?", firstReading: "El equipo redujo la obra: se mantiene visible el proceso.", secondReading: "Versión reducida funciona como una categoría: más breve que la completa.", reformulations: ["Es una adaptación muy cuidada que el equipo redujo a noventa minutos.", "Es una versión abreviada y especialmente cuidada."] },
    { source: "CHAT", sentence: "Mudanza, tengo una pendiente.", prompt: "¿Por qué la frase puede sonar natural en un diálogo y rara aislada?", firstReading: "Responde a un tema ya activado y una retoma mudanza.", secondReading: "Sin una pregunta o contraste previo, parece un fragmento desconectado.", reformulations: ["—¿Y la mudanza? —Tengo una pendiente.", "Tengo una mudanza pendiente."] },
  ],
  orderTasks: [
    { prompt: "Desambiguá: la directora produjo la crítica.", tokens: ["por la directora", "la crítica", "formulada"], answers: [["la crítica", "formulada", "por la directora"]], explanation: "Por introduce de manera explícita al agente de la crítica." },
    { prompt: "Creá una dislocación conversacional con retoma.", tokens: ["tengo una vieja.", "Computadora,", "sí,"], answers: [["Computadora,", "sí,", "tengo una vieja."]], explanation: "El tema queda separado y una recupera el núcleo dentro de la oración." },
    { prompt: "Expresá temor por la acción de otra persona.", tokens: ["de que", "El temor", "te vayas"], answers: [["El temor", "de que", "te vayas"]], explanation: "Que + verbo conjugado hace visible que la segunda acción tiene otro sujeto." },
  ],
  choices: [
    { prompt: "¿Qué versión deja claro que criticaron a la directora?", options: ["la crítica de la directora", "la crítica contra la directora", "la directora de la crítica"], correct: 1, explanation: "Contra codifica a la directora como objetivo de la crítica." },
    { prompt: "¿Qué concordancia muestra que el adjetivo alcanza a los dos núcleos?", options: ["el análisis y la propuesta presentada", "el análisis y la propuesta presentados", "el análisis y la propuesta presentado"], correct: 1, explanation: "El plural masculino no marcado incluye análisis y propuesta." },
    { prompt: "¿Qué frase pertenece a un registro literario?", options: ["Los pájaros cantan.", "El cantar de los pájaros llenaba el patio.", "Los pájaros están cantando ahora."], correct: 1, explanation: "El infinitivo sustantivado convierte el canto en imagen o fenómeno." },
    { prompt: "¿Qué opción usa correctamente el intensificador?", options: ["una película de lo más divertida", "una película de la más divertido", "una película lo más divertidamente"], correct: 0, explanation: "De lo más intensifica y divertida concuerda con película." },
    { prompt: "En uso rioplatense coloquial, ¿qué significa «estoy lo más bien»?", options: ["Estoy perfectamente.", "Estoy en el lugar más bueno.", "Estoy comparándome con alguien."], correct: 0, explanation: "La construcción intensifica bien y presenta un estado plenamente satisfactorio." },
  ],
  production: [
    { title: "Titular bajo investigación", prompt: "Escribí un titular ambiguo y dos versiones que asignen roles distintos a sus participantes.", checklist: ["ambigüedad plausible", "dos interpretaciones", "dos reformulaciones inequívocas"] },
    { title: "Diálogo con tema", prompt: "Creá un intercambio breve donde una dislocación sea natural gracias a la pregunta anterior.", checklist: ["tema activado", "pausa visible", "elemento de retoma"] },
    { title: "Cambio de estilo", prompt: "Contá un hecho con verbos y después convertilo en una versión nominalizada más distante o literaria.", checklist: ["misma información", "efecto estilístico claro", "sin acumular abstracciones"] },
  ],
  conversation: [
    { question: "¿Creés que los titulares ambiguos se usan deliberadamente para conseguir clics?", starter: "En muchos casos creo que…", vocabulary: "doble lectura, insinuar, exagerar, captar atención", followUp: "¿Dónde pondrías el límite ético?", challenge: "Incluí un ejemplo y anticipá una objeción." },
    { question: "¿Qué expresiones de tu idioma son difíciles de traducir sin perder un matiz?", starter: "Una expresión difícil de trasladar es…", vocabulary: "registro, connotación, equivalente, contexto", followUp: "¿La explicarías o la reemplazarías?", challenge: "Compará dos traducciones imperfectas." },
    { question: "¿Hasta qué punto el lenguaje puede manipular nuestra interpretación de una noticia?", starter: "Puede influir especialmente cuando…", vocabulary: "encuadre, agente, omitir, atribuir", followUp: "¿El lector también tiene responsabilidad?", challenge: "Defendé una postura y después limitála." },
    { question: "¿Hay palabras que hayan cambiado de significado para tu generación?", starter: "Para mi generación, la palabra…", vocabulary: "antes, ahora, ironía, resignificar", followUp: "¿La generación anterior la interpreta igual?", challenge: "Dá un ejemplo en dos contextos." },
    { question: "¿Qué tipo de discurso te resulta artificial aunque sea gramaticalmente correcto?", starter: "Me resulta artificial…", vocabulary: "solemne, corporativo, impostado, espontáneo", followUp: "¿Cómo lo reformularías sin perder cortesía?", challenge: "Contrastá una versión artificial con otra natural." },
    { question: "¿Preferís que una persona sea directa o que suavice lo que quiere decir?", starter: "En general prefiero…, salvo cuando…", vocabulary: "franqueza, tacto, insinuación, conflicto", followUp: "¿Cambia tu respuesta en el trabajo?", challenge: "Presentá un contraejemplo." },
    { question: "¿Qué ejemplos de ambigüedad generan problemas reales en el trabajo o las relaciones?", starter: "Un problema frecuente aparece cuando…", vocabulary: "responsabilidad, plazo, intención, sobreentendido", followUp: "¿Cómo se podría prevenir?", challenge: "Contá un caso y asigná responsabilidades." },
    { question: "¿Pensás que hablar con precisión siempre es mejor o a veces la ambigüedad es útil?", starter: "La precisión es necesaria cuando…, pero…", vocabulary: "proteger, negociar, humor, margen", followUp: "¿Cuándo la ambigüedad se convierte en engaño?", challenge: "Formulá una regla y una excepción." },
    { question: "¿Qué ambigüedades resultan creativas en el humor, la literatura o la publicidad?", starter: "La ambigüedad funciona creativamente cuando…", vocabulary: "juego de palabras, expectativa, sorpresa, interpretación", followUp: "¿Se puede traducir ese efecto?", challenge: "Explicá por qué funcionan las dos lecturas." },
    { question: "¿Qué cambia cuando presentamos una acción como verbo o como nombre?", starter: "Al nominalizar una acción…", vocabulary: "responsable, distancia, proceso, abstracción", followUp: "¿Qué forma preferiría una institución y por qué?", challenge: "Compará dos versiones de la misma noticia." },
  ],
};

export const arquitecturaVerbalC1: C1LabData = {
  slug: "la-accion-vista-desde-dentro",
  module: "MÓDULO 12 · C1",
  pcic: "12. El sintagma verbal · Arquitectura verbal avanzada C1",
  title: "La Cámara de la Acción",
  displayTitle: "La Cámara de\nla Acción",
  subtitle: "Inicio, desarrollo, acumulación y resultado vistos desde perspectivas distintas",
  goal: "Elegir desde qué fase mostrar una acción para narrar procesos, logros, resultados y aproximaciones con precisión.",
  accent: "#8b5cf6",
  accent2: "#34d399",
  coreFormula: [
    { text: "MISMA ACCIÓN", role: "anchor" },
    { text: "+ PERSPECTIVA", role: "signal" },
    { text: "= OTRO PERFIL", role: "detail" },
  ],
  auditNote: "La clase B1 ya presenta soler, volver a, dejar de, ponerse a, estar a punto de y seguir + gerundio; La Ciudad de los Motores cubre los tiempos generales. Esta cámara C1 excluye esos recorridos y selecciona solamente perspectivas productivas de inicio, proceso, logro, acumulación, resultado y aproximación.",
  timeline: [
    { label: "Perspectiva", minutes: "5 min" },
    { label: "Recorrido", minutes: "10 min" },
    { label: "Interpretación", minutes: "8 min" },
    { label: "Práctica", minutes: "10 min" },
    { label: "Conversación", minutes: "12+ min" },
  ],
  discovery: {
    question: "¿Qué ve el hablante: la acción, el camino o el resultado?",
    instruction: "Compará las frases sin buscar equivalentes fijos. Decidí dónde coloca la cámara cada una y qué parte de la historia deja fuera.",
    contrast: ["Lee el libro.", "Va leyendo el libro.", "Llegó a entenderlo.", "La habitación está limpia."],
  },
  chapters: [
    {
      eyebrow: "02 · INICIO",
      title: "Un comienzo puede irrumpir",
      description: "Echarse a y romper a enfocan un inicio brusco, pero no se combinan libremente con cualquier verbo.",
      explanation: "Echarse a suele introducir acciones súbitas como correr, reír o llorar. Romper a se especializa especialmente en llorar y reír: el valor de irrupción importa más que una traducción palabra por palabra.",
      formula: "ECHARSE A / ROMPER A + INFINITIVO",
      examples: ["Se echó a correr al oír la alarma.", "Rompió a llorar en mitad del discurso.", "Todos se echaron a reír."],
      optional: { title: "Extensión de contraste", text: "Ponerse a es más general y ya se trabaja en B1. En C1 elegimos echarse a o romper a cuando el modo de comenzar forma parte del relato.", examples: ["Se puso a estudiar: comienzo neutro.", "Se echó a correr: comienzo brusco y dinámico."] },
    },
    {
      eyebrow: "03 · PROCESO",
      title: "El gerundio abre el interior de la acción",
      description: "Ir, venir y andar no muestran el proceso desde el mismo punto de vista.",
      explanation: "Ir + gerundio presenta avance gradual; venir + gerundio conecta un proceso anterior con el presente o punto de referencia; andar + gerundio sugiere actividad repetida, dispersa o valorada por el hablante.",
      formula: "IR / VENIR / ANDAR + GERUNDIO",
      examples: ["Voy entendiendo el problema.", "La situación viene mejorando.", "Anda diciendo que se va."],
      optional: { title: "No es simplemente «estar + gerundio»", text: "Estar sitúa una acción en desarrollo. Estos auxiliares añaden trayectoria, procedencia o distribución y suelen aportar una evaluación discursiva.", examples: ["Está leyendo: acción en curso.", "Va leyendo: progreso parcial.", "Viene leyendo sobre el tema: continuidad desde antes."] },
    },
    {
      eyebrow: "04 · RESULTADO",
      title: "La acción termina; el estado permanece",
      description: "La cámara puede mostrar el evento o el resultado disponible después.",
      explanation: "«Han limpiado la habitación» informa la acción y sus responsables implícitos. «La habitación está limpia» describe el estado resultante. Con participios, estar enfoca un estado: la puerta está cerrada.",
      formula: "ACCIÓN: HAN LIMPIADO → RESULTADO: ESTÁ LIMPIA",
      examples: ["Cerraron la puerta. / La puerta está cerrada.", "Organizaron los archivos. / Los archivos están organizados.", "Han resuelto el problema. / El problema está resuelto."],
      optional: { title: "Pasiva de resultado", text: "Estar + participio no cuenta necesariamente quién produjo el cambio. Si el agente o el evento importan, elegimos una forma verbal activa o una pasiva de acción.", examples: ["El informe fue aprobado ayer por el comité: evento.", "El informe está aprobado: estado vigente."] },
    },
    {
      eyebrow: "05 · ACUMULACIÓN",
      title: "Tener, llevar y dejar conservan una huella",
      description: "El participio concuerda con el resultado acumulado o producido.",
      explanation: "Tener + participio presenta un resultado disponible o bajo control; llevar + participio cuantifica progreso acumulado; dejar + participio enfoca el estado que una acción produce.",
      formula: "TENER / LLEVAR / DEJAR + PARTICIPIO CONCORDADO",
      examples: ["Tengo preparada la presentación.", "Llevo leídos cuatro capítulos.", "Dejaron resuelto el conflicto."],
      optional: { title: "Concordancia visible", text: "El participio concuerda con el objeto: preparada la propuesta, leídos cuatro capítulos, resueltas tres dudas. Esa concordancia ayuda a reconocer que describimos un resultado.", examples: ["Tenemos reservadas dos salas.", "Lleva escritas veinte páginas."] },
    },
    {
      eyebrow: "06 · LOGRO Y DESENLACE",
      title: "Llegar a, acabar por y no alcanzar a",
      description: "Tres estructuras miran el final desde caminos diferentes.",
      explanation: "Llegar a presenta un logro después de dificultad o proceso; acabar por introduce el desenlace al que se llega; no alcanzar a señala que la capacidad, el tiempo o la oportunidad no bastaron.",
      formula: "LLEGAR A · ACABAR POR · NO ALCANZAR A + INFINITIVO",
      examples: ["Llegó a comprender la teoría.", "Acabó por aceptar la propuesta.", "No alcancé a despedirme."],
      optional: { title: "Contraste de perspectiva", text: "Empezar a entender marca el comienzo del proceso; llegar a entender enfoca el logro. Acabar por no equivale simplemente a terminar una tarea: presenta un desenlace, a menudo tras resistencia o alternativas.", examples: ["Empezó a entenderlo.", "Llegó a entenderlo.", "Terminó de leer / acabó por admitirlo."] },
    },
    {
      eyebrow: "07 · APROXIMACIÓN",
      title: "Venir a calcula sin dar una cifra exacta",
      description: "El hablante presenta una equivalencia o cantidad aproximada.",
      explanation: "Venir a + infinitivo puede expresar que algo equivale aproximadamente a otra cosa. El contexto debe separarlo del valor de movimiento o de un proceso anterior con venir + gerundio.",
      formula: "VENIR A + INFINITIVO ≈ APROXIMADAMENTE",
      examples: ["El arreglo viene a costar unos cien dólares.", "Eso viene a ser la mitad del presupuesto.", "La medida viene a resolver parte del problema."],
      optional: { title: "No confundir las cámaras", text: "Viene cambiando muestra un proceso que se desarrolla desde antes. Viene a cambiar puede presentar una aproximación interpretativa: en esencia, introduce un cambio.", examples: ["La tecnología viene cambiando nuestra vida.", "La reforma viene a cambiar las reglas del sector."] },
    },
  ],
  cases: [
    { source: "ESCENA DOMÉSTICA", sentence: "Han limpiado la habitación. / La habitación está limpia.", prompt: "¿Qué información pone en primer plano cada cámara?", firstReading: "La primera presenta el evento y permite preguntar quién lo hizo o cuándo.", secondReading: "La segunda presenta el estado actual; el agente puede ser irrelevante.", reformulations: ["El personal limpió la habitación esta mañana.", "La habitación ya está limpia y disponible."] },
    { source: "APRENDIZAJE", sentence: "Empezó a entenderlo. / Llegó a entenderlo.", prompt: "¿Las dos frases confirman el mismo grado de comprensión?", firstReading: "Empezó a marca el inicio; la comprensión puede quedar incompleta.", secondReading: "Llegó a presenta la comprensión como logro alcanzado tras un proceso.", reformulations: ["Empezó a entenderlo, pero todavía tenía dudas.", "Después de años, finalmente llegó a entenderlo."] },
    { source: "INFORME", sentence: "La economía viene mejorando. / La economía va mejorando.", prompt: "¿Desde dónde observa el hablante el proceso?", firstReading: "Viene mejorando conecta una trayectoria previa con el presente.", secondReading: "Va mejorando sigue el avance gradual hacia adelante.", reformulations: ["La economía mejora de forma sostenida desde abril.", "La economía progresa poco a poco, aunque falta mucho."] },
    { source: "CONVERSACIÓN", sentence: "El arreglo viene a costar cien dólares.", prompt: "¿Hay movimiento o una estimación?", firstReading: "En este contexto de precio, venir a expresa una cantidad aproximada.", secondReading: "Sin contexto, venir puede activar una lectura de movimiento; el complemento de precio la bloquea casi por completo.", reformulations: ["El arreglo cuesta aproximadamente cien dólares.", "Calculamos un costo cercano a cien dólares."] },
  ],
  orderTasks: [
    { prompt: "Mostrá progreso gradual, no solo lectura en curso.", tokens: ["el informe.", "leyendo", "Va"], answers: [["Va", "leyendo", "el informe."]], explanation: "Ir + gerundio presenta avance progresivo por el texto." },
    { prompt: "Expresá acumulación con concordancia.", tokens: ["tres capítulos.", "Llevo", "leídos"], answers: [["Llevo", "leídos", "tres capítulos."]], explanation: "Leídos concuerda con capítulos y cuantifica el progreso acumulado." },
    { prompt: "Presentá el logro después de un proceso.", tokens: ["Llegó", "el problema.", "a comprender"], answers: [["Llegó", "a comprender", "el problema."]], explanation: "Llegar a enfoca la meta cognitiva finalmente alcanzada." },
  ],
  choices: [
    { prompt: "¿Qué frase enfoca un desenlace tras cierta resistencia?", options: ["Acabó por aceptar la propuesta.", "Acabó de aceptar la propuesta.", "Está aceptando la propuesta."], correct: 0, explanation: "Acabar por presenta el resultado final de un recorrido o resistencia." },
    { prompt: "¿Qué opción indica que faltó tiempo u oportunidad?", options: ["No llegó de llamar.", "No alcanzó a llamar.", "No acabó por llamar."], correct: 1, explanation: "No alcanzar a + infinitivo muestra que la acción no llegó a realizarse por insuficiencia." },
    { prompt: "¿Qué frase describe un estado vigente?", options: ["El comité aprobó el informe.", "El informe está aprobado.", "El comité viene aprobando informes."], correct: 1, explanation: "Estar + participio enfoca el resultado, no el evento de aprobación." },
    { prompt: "¿Qué construcción presenta actividad repetida y una posible evaluación del hablante?", options: ["Anda diciendo que se va.", "Está por decir que se va.", "Tiene dicho que se va."], correct: 0, explanation: "Andar + gerundio distribuye la actividad y suele añadir una mirada evaluativa." },
    { prompt: "¿Cuál expresa una estimación?", options: ["El arreglo viene costando desde mayo.", "El arreglo viene a costar cien dólares.", "El arreglo llega costado."], correct: 1, explanation: "Venir a + infinitivo ofrece aquí un cálculo aproximado." },
  ],
  production: [
    { title: "Proceso completo", prompt: "Contá una historia que empiece bruscamente, se desarrolle poco a poco y deje un resultado visible.", checklist: ["inicio marcado", "ir/venir + gerundio", "estado resultante"] },
    { title: "Balance de proyecto", prompt: "Explicá cuánto llevás hecho, qué tenés preparado y qué no alcanzaste a terminar.", checklist: ["participio concordado", "cantidad acumulada", "límite real"] },
    { title: "Dos cámaras", prompt: "Presentá el mismo cambio como acción y como resultado; explicá por qué elegirías cada versión.", checklist: ["agente o evento", "estado posterior", "elección discursiva"] },
  ],
  conversation: [
    { question: "¿Qué idea llegaste a entender solamente después de muchos años?", starter: "Con los años llegué a entender que…", vocabulary: "proceso, experiencia, perspectiva, darse cuenta", followUp: "¿Qué experiencia fue decisiva?", challenge: "Explicá el proceso y formulá un contraejemplo." },
    { question: "¿Qué costumbre acabaste por aceptar aunque inicialmente no te gustaba?", starter: "Al principio…, pero acabé por…", vocabulary: "resistencia, adaptarse, hábito, convivencia", followUp: "¿Aceptar significa que ahora te gusta?", challenge: "Matizá la diferencia entre aceptar y aprobar." },
    { question: "¿Qué problema de tu país se viene agravando o mejorando?", starter: "Desde hace…, se viene…", vocabulary: "tendencia, gradual, desigual, sostenido", followUp: "¿Qué datos confirmarían esa percepción?", challenge: "Incluí una causa y cuestioná otra explicación." },
    { question: "¿Qué proyecto llevás avanzado y cuánto te falta?", starter: "Llevo… terminado/a/os/as y todavía…", vocabulary: "etapa, pendiente, plazo, avance", followUp: "¿Qué parte no alcanzaste a resolver?", challenge: "Dá un balance concreto y una previsión prudente." },
    { question: "¿Qué situación terminó resultando muy distinta de lo que esperabas?", starter: "Esperaba…, pero acabó por…", vocabulary: "desenlace, giro, previsión, resultado", followUp: "¿En qué momento cambió la trayectoria?", challenge: "Contrastá expectativa, proceso y resultado." },
    { question: "¿Qué persona llegó a influir mucho en tu forma de pensar?", starter: "Con el tiempo, … llegó a…", vocabulary: "referente, cuestionar, perspectiva, influencia", followUp: "¿En qué tema no estarías de acuerdo con esa persona?", challenge: "Mostrá influencia sin idealización." },
    { question: "¿Qué tecnología viene cambiando más rápidamente nuestra vida?", starter: "La tecnología que viene cambiando…", vocabulary: "automatizar, privacidad, acceso, dependencia", followUp: "¿Ese cambio va mejorando realmente la vida?", challenge: "Defendé un beneficio y un costo." },
    { question: "¿Qué cambio social se ha ido produciendo lentamente en tu país?", starter: "Se ha ido produciendo…", vocabulary: "generación, actitud, norma, gradual", followUp: "¿Quién impulsa el cambio y quién lo resiste?", challenge: "Diferenciá tendencia de resultado consolidado." },
    { question: "¿Hay alguna habilidad que no alcanzaste a dominar todavía?", starter: "Todavía no alcancé a dominar…", vocabulary: "práctica, constancia, límite, estrategia", followUp: "¿Vas avanzando o estás estancado?", challenge: "Explicá qué parte concreta falta." },
    { question: "¿Qué situación empezó de una forma y terminó de otra completamente distinta?", starter: "Todo empezó cuando… y acabó por…", vocabulary: "irrumpir, trayectoria, giro, dejar resuelto", followUp: "¿El final era previsible mirando hacia atrás?", challenge: "Narrá tres fases y evaluá el desenlace." },
  ],
};
