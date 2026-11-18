import { MATERIAL_ELE_PATH } from "./data";

/**
 * Free printable templates for Spanish teachers. Each one is a PDF (A4 and US Letter) with
 * a preview image, served as static assets from public/plantillas, and has its own page
 * with what the sheet contains and how to use it in class. The PDFs are printed by
 * scripts/plantillas/build.mjs from scripts/plantillas/designs.mjs: a new template needs a
 * design there and an entry here, with the same slug.
 */
export const PLANTILLAS_PATH = `${MATERIAL_ELE_PATH}/plantillas`;
export const plantillasPublished = "2026-11-18";

export type Plantilla = {
  slug: string;
  path: string;
  /** Short name for cards and breadcrumbs. */
  name: string;
  title: string;
  description: string;
  h1: string;
  kind: "Planificación" | "Seguimiento" | "Juegos y conversación" | "Gramática" | "Organización";
  sheets: number;
  landscape: boolean;
  intro: string;
  includes: string[];
  steps: string[];
  tip: string;
  faq: { question: string; answer: string }[];
  /** Material ELE pages that go with the sheet. */
  related: { href: string; label: string }[];
};

const guia = (slug: string) => `${MATERIAL_ELE_PATH}/guia/${slug}`;
const ele = (slug: string) => `${MATERIAL_ELE_PATH}/${slug}`;

const entries: Omit<Plantilla, "path">[] = [
  {
    slug: "plan-de-clase",
    name: "Plan de clase",
    title: "Plantilla de plan de clase de español en PDF (45 y 60 minutos)",
    description: "Plantilla gratis de plan de clase de español en PDF: objetivo comunicativo, fases con minutos, errores y tarea. Dos hojas, para clases de 45 y de 60 minutos.",
    h1: "Plantilla de plan de clase de español (45 y 60 minutos)",
    kind: "Planificación",
    sheets: 2,
    landscape: false,
    intro: "Una hoja para preparar una clase particular o de grupo pequeño sin escribir un documento entero. Empieza por el objetivo comunicativo («al final de la clase el alumno puede…») y reparte el tiempo en fases, con una columna para lo que hace el alumno, que es lo que más se olvida al planificar.",
    includes: ["Cabecera con alumno o grupo, nivel y fecha.", "Objetivo comunicativo, gramática y vocabulario de la clase.", "Tabla de fases con los minutos ya repartidos: calentamiento, presentación, práctica guiada, producción y cierre.", "Recuadros para los errores que se corrigen al final, la tarea y lo que queda para la próxima clase.", "Una hoja para 45 minutos y otra para 60, con una fase de repaso añadida."],
    steps: ["Escribe primero el objetivo comunicativo en una frase que el alumno pueda entender.", "Rellena la columna «Qué hace el alumno» antes que la de material: si en una fase solo escucha, acórtala.", "Durante la clase, apunta los errores en su recuadro sin interrumpir la conversación.", "Al terminar, anota en «Para la próxima clase» lo que no dio tiempo a hacer."],
    tip: "Una regla práctica para clases de conversación: el alumno habla al menos la mitad del tiempo. Si al repasar el plan no se cumple, cambia una explicación por una pregunta.",
    faq: [
      { question: "¿Sirve para clases online?", answer: "Sí. Puedes imprimirla o rellenarla en la tableta o en el ordenador con cualquier lector de PDF que permita escribir encima." },
      { question: "¿Qué pongo en la columna de material?", answer: "El enlace o el nombre de lo que vas a abrir en cada fase: una ficha, una clase interactiva, un audio o una lista de preguntas." },
    ],
    related: [{ href: guia("preparar-una-clase-de-espanol-rapido"), label: "Cómo preparar una clase de español rápido" }, { href: guia("como-dar-clases-de-espanol-online"), label: "Cómo dar clases de español online" }, { href: `${MATERIAL_ELE_PATH}/fichas`, label: "Fichas de gramática con soluciones" }],
  },
  {
    slug: "primera-clase-analisis-de-necesidades",
    name: "Ficha de primera clase",
    title: "Ficha de primera clase de español: análisis de necesidades (PDF)",
    description: "Plantilla gratis en PDF para la primera clase de español: para qué quiere el idioma el alumno, experiencia previa, nivel por destreza, temas y objetivo a tres meses.",
    h1: "Ficha de primera clase: análisis de necesidades del alumno",
    kind: "Planificación",
    sheets: 1,
    landscape: false,
    intro: "La primera clase decide si el alumno sigue. Esta ficha ordena la conversación inicial para que salgas con lo que necesitas para planificar: para qué quiere el español, qué ha hecho antes, qué nivel tiene en cada destreza y qué quiere poder hacer dentro de tres meses.",
    includes: ["Datos básicos: nombre, país, lengua materna, profesión y otras lenguas.", "Casillas con los motivos habituales: trabajo, viajes, vivir en un país hispano, familia o pareja, estudios, examen o gusto personal.", "Experiencia previa con el español, también en casillas.", "Tabla de nivel por destreza (hablar, entender, leer, escribir) de A1 a C2.", "Temas que le interesan y lo que más le cuesta.", "Objetivo a tres meses, horario, frecuencia y acuerdos de la primera clase."],
    steps: ["No la entregues como un formulario: úsala de guion y rellénala tú mientras conversáis.", "Marca el nivel por destreza al final, después de escuchar al alumno, no al principio.", "Escribe el objetivo a tres meses con sus palabras y léeselo en voz alta para confirmarlo.", "Guarda la ficha: es el punto de partida del primer informe de progreso."],
    tip: "La tabla de nivel es una estimación del profesor para planificar, no una certificación. Si el alumno necesita un nivel acreditado, el camino es un examen oficial.",
    faq: [
      { question: "¿Puedo usarla en una clase de prueba?", answer: "Sí, está pensada para eso: cabe en veinte minutos de conversación y deja tiempo para una actividad corta que muestre cómo son tus clases." },
      { question: "¿En qué idioma hago las preguntas?", answer: "En español siempre que el alumno pueda seguirte. Con principiantes absolutos, usa la lengua común para esta parte y deja el español para la actividad." },
    ],
    related: [{ href: ele("primera-clase-de-espanol"), label: "Primera clase de español: material y preguntas" }, { href: ele("preguntas-de-conversacion"), label: "Preguntas de conversación por nivel" }, { href: ele("a1"), label: "Material ELE de A1" }],
  },
  {
    slug: "informe-de-progreso-del-alumno",
    name: "Informe de progreso",
    title: "Plantilla de informe de progreso del alumno de español (PDF)",
    description: "Plantilla gratis en PDF de informe de progreso para alumnos de español: valoración por destreza, lo que ya puede hacer, lo que falta y plan del próximo periodo.",
    h1: "Plantilla de informe de progreso del alumno",
    kind: "Seguimiento",
    sheets: 1,
    landscape: false,
    intro: "Un informe corto, de una hoja, para entregar cada mes o al final de un bloque de clases. Le muestra al alumno, o a quien paga las clases, qué ha avanzado y qué viene después, y a ti te obliga a decidir el plan del próximo periodo.",
    includes: ["Cabecera con alumno, nivel, periodo, clases dadas, asistencia y profesor.", "Tabla de valoración de 1 a 4 por destreza y área: expresión oral, comprensión auditiva, gramática en uso, vocabulario, pronunciación, comprensión lectora y expresión escrita.", "Leyenda de la escala para que el alumno la entienda sin explicación.", "Recuadros «Lo que ya puede hacer» y «Lo que vamos a trabajar».", "Plan para el próximo periodo y recomendaciones para practicar entre clases.", "Firma del profesor y fecha."],
    steps: ["Parte del registro de errores y de tus planes de clase: el informe sale de ahí en diez minutos.", "Escribe ejemplos concretos en «Lo que ya puede hacer»: una frase que ahora dice bien vale más que un adjetivo.", "Limita «Lo que vamos a trabajar» a dos o tres puntos.", "Coméntalo en clase durante cinco minutos antes de entregarlo."],
    tip: "La escala de 1 a 4 mide el avance dentro del nivel del alumno. No equivale a un nivel del Marco Común Europeo ni a una nota de examen.",
    faq: [
      { question: "¿Cada cuánto conviene entregar un informe?", answer: "Con clases semanales, cada dos o tres meses. Con clases intensivas, al final de cada bloque. Lo importante es que la fecha sea fija y el alumno la conozca." },
      { question: "¿Sirve para academias?", answer: "Sí. La hoja no lleva precio ni datos de un profesor concreto; cada academia puede añadir su sello junto a la firma." },
    ],
    related: [{ href: "/material-ele/plantillas/registro-de-errores", label: "Plantilla de registro de errores" }, { href: "/material-ele/plantillas/rubrica-de-expresion-oral", label: "Rúbrica de expresión oral" }, { href: guia("como-dar-clases-de-espanol-online"), label: "Cómo dar clases de español online" }],
  },
  {
    slug: "registro-de-errores",
    name: "Registro de errores",
    title: "Plantilla de registro de errores para clase de español (PDF)",
    description: "Plantilla gratis en PDF para anotar los errores del alumno durante la conversación y corregirlos al final: lo que dijo, la forma correcta y el tipo de error.",
    h1: "Plantilla de registro de errores del alumno",
    kind: "Seguimiento",
    sheets: 1,
    landscape: false,
    intro: "Corregir cada error en el momento corta la conversación; no corregir ninguno deja al alumno donde estaba. Esta tabla permite anotar mientras habla y dedicar los últimos minutos de la clase a los errores que de verdad se repiten.",
    includes: ["Cabecera con alumno, nivel y mes.", "Tabla con cinco columnas: fecha, lo que dijo, forma correcta, tipo y repasado.", "Leyenda de tipos de error: gramática, vocabulario, pronunciación y registro.", "Filas suficientes para un mes de clases semanales."],
    steps: ["Anota la frase tal como la dijo el alumno, sin corregirla todavía.", "Al final de la clase, enséñale la lista y pídele que corrija él primero.", "Marca el tipo de error: al cabo de un mes verás cuál se repite y qué conviene trabajar.", "Marca «Repasado» cuando la forma correcta salga sola en otra clase."],
    tip: "No apuntes todo. Tres o cuatro errores por clase, elegidos porque se repiten o porque impiden entender, son más útiles que una hoja llena.",
    faq: [
      { question: "¿Se lo doy al alumno?", answer: "Puedes hacerle una foto al final de cada clase o compartir la hoja al terminar el mes. Muchos alumnos la usan para repasar antes de la clase siguiente." },
      { question: "¿Funciona con grupos?", answer: "Sí, con una hoja por grupo: anota los errores sin nombre y corrígelos en la pizarra al final, entre todos." },
    ],
    related: [{ href: "/material-ele/plantillas/informe-de-progreso-del-alumno", label: "Plantilla de informe de progreso" }, { href: guia("actividades-de-conversacion-en-espanol-para-adultos"), label: "Actividades de conversación para adultos" }, { href: guia("ejercicios-ele-con-soluciones"), label: "Ejercicios ELE con soluciones" }],
  },
  {
    slug: "bingo-en-blanco",
    name: "Bingo en blanco",
    title: "Bingo en blanco para imprimir: cartones 5×5 y 4×4 para clase (PDF)",
    description: "Cartones de bingo en blanco gratis en PDF para clase de español: uno de 5×5 con casilla libre y dos de 4×4. Para vocabulario, verbos o «busca a alguien que».",
    h1: "Bingo en blanco para clase de español (5×5 y 4×4)",
    kind: "Juegos y conversación",
    sheets: 2,
    landscape: false,
    intro: "Un cartón vacío sirve para cualquier tema: lo rellena el alumno, y con eso ya ha practicado antes de empezar a jugar. La primera hoja trae un cartón grande de 5×5 con casilla libre; la segunda, dos cartones de 4×4 para partidas cortas o para recortar.",
    includes: ["Hoja 1: cartón de 5×5 con casilla central «LIBRE», tema y nombre.", "Hoja 2: dos cartones de 4×4 en la misma hoja.", "Casillas grandes, para escribir palabras o dibujar.", "Instrucciones breves al pie."],
    steps: ["Escribe en la pizarra más palabras que casillas (por ejemplo, 30 para el cartón de 25).", "Cada alumno elige y copia las suyas en el orden que quiera: así no hay dos cartones iguales.", "No cantes la palabra: da una definición, un sinónimo o una frase con hueco.", "Quien completa una línea la lee en voz alta con una frase por palabra."],
    tip: "Para verbos funciona muy bien al revés: en el cartón van los infinitivos y tú dices la forma conjugada («fuimos»), o una frase en presente que el alumno tiene que pasar al tiempo que estáis trabajando.",
    faq: [
      { question: "¿Cómo se juega en una clase individual?", answer: "Rellenad un cartón cada uno y turnaos para dar las definiciones. El alumno practica el doble: escucha las tuyas y produce las suyas." },
      { question: "¿Sirve para «busca a alguien que»?", answer: "Sí. Escribe en cada casilla una experiencia («ha vivido en otro país») y los alumnos preguntan a sus compañeros hasta completar una línea con nombres." },
    ],
    related: [{ href: ele("juegos-para-clase-de-espanol"), label: "Juegos para clase de español" }, { href: ele("vocabulario-por-temas"), label: "Vocabulario por temas" }, { href: "/material-ele/plantillas/ruleta-de-preguntas", label: "Ruleta de preguntas" }],
  },
  {
    slug: "tarjetas-de-conversacion",
    name: "Tarjetas de conversación",
    title: "Tarjetas de conversación en español para imprimir y recortar (PDF)",
    description: "Tarjetas de conversación gratis en PDF para clase de español: ocho preguntas listas para recortar y una hoja de ocho tarjetas en blanco para escribir las tuyas.",
    h1: "Tarjetas de conversación recortables, con hoja en blanco",
    kind: "Juegos y conversación",
    sheets: 2,
    landscape: false,
    intro: "Ocho tarjetas con preguntas abiertas que funcionan desde A2 y una segunda hoja con ocho tarjetas vacías para adaptar el juego al tema de tu clase. Cada tarjeta lleva al pie tres preguntas de seguimiento para que la respuesta no se quede en una frase.",
    includes: ["Hoja 1: ocho tarjetas con preguntas sobre el fin de semana, la ciudad, la comida, lo que quieres aprender, un día perfecto, el trabajo o los estudios, los viajes y el aprendizaje del español.", "Hoja 2: ocho tarjetas en blanco con líneas para escribir.", "Pie de seguimiento en cada tarjeta: «¿Por qué? · ¿Y tú? · Cuéntame más».", "Líneas de corte punteadas."],
    steps: ["Recorta las tarjetas y ponlas boca abajo. En clase online, muestra la hoja y deja que el alumno elija un número.", "El alumno lee la pregunta en voz alta y responde durante un minuto.", "El compañero, o el profesor, hace al menos una de las tres preguntas de seguimiento.", "En la hoja en blanco, pide a los alumnos que escriban las preguntas para la clase siguiente."],
    tip: "Con niveles altos, cambia la regla: quien responde tiene que usar un conector o una estructura que estéis trabajando («aunque», «si hubiera…») antes de pasar la tarjeta.",
    faq: [
      { question: "¿Para qué nivel son las preguntas?", answer: "Las ocho preguntas escritas se pueden responder desde A2 y dan para respuestas largas en B1 y B2. Para A1 o para C1, usa la hoja en blanco." },
      { question: "¿Dónde encuentro más preguntas?", answer: "En las páginas de preguntas de conversación de Material ELE, ordenadas por nivel y por tema, para copiar en las tarjetas en blanco." },
    ],
    related: [{ href: ele("preguntas-de-conversacion"), label: "Preguntas de conversación por nivel" }, { href: guia("actividades-de-conversacion-en-espanol-para-adultos"), label: "Actividades de conversación para adultos" }, { href: "/material-ele/plantillas/ruleta-de-preguntas", label: "Ruleta de preguntas" }],
  },
  {
    slug: "ruleta-de-preguntas",
    name: "Ruleta de preguntas",
    title: "Ruleta de preguntas para imprimir: temas de conversación y en blanco",
    description: "Ruleta de conversación gratis en PDF para clase de español: una con ocho temas listos y otra en blanco para tus preguntas, verbos o tiempos. Se juega con un clip.",
    h1: "Ruleta de preguntas para conversar, con ruleta en blanco",
    kind: "Juegos y conversación",
    sheets: 2,
    landscape: false,
    intro: "Una ruleta de papel que no necesita aplicación ni recortar nada: se pone un clip en el centro, se sujeta con la punta de un lápiz y se hace girar. La primera hoja trae ocho temas de conversación; la segunda está vacía para que escribas preguntas, verbos, tiempos o situaciones.",
    includes: ["Hoja 1: ruleta de ocho sectores numerados con temas: la familia, el trabajo, los viajes, la comida, el tiempo libre, tu ciudad, los planes y los recuerdos.", "Hoja 2: ruleta en blanco con ocho sectores, tema y nivel.", "Instrucciones al pie de la primera hoja."],
    steps: ["Pon un clip en el centro y sujétalo con un lápiz; un golpe con el dedo lo hace girar. También vale un dado de ocho caras.", "El alumno habla un minuto del tema que salga.", "El profesor, o un compañero, hace dos preguntas sobre lo que ha contado.", "En la ruleta en blanco, escribe un tiempo verbal en cada sector y combínala con las tarjetas de conversación."],
    tip: "En clase online, comparte la hoja en pantalla y pide al alumno que diga un número del 1 al 8 antes de ver los temas. Funciona igual y no hay que imprimir.",
    faq: [
      { question: "¿Hay que recortarla?", answer: "No. La ruleta se usa en la hoja tal como sale de la impresora; lo único que gira es el clip." },
      { question: "¿Para qué más sirve la ruleta en blanco?", answer: "Para repasar verbos (un infinitivo por sector), para elegir quién habla, para repartir papeles en un juego de rol o para sortear la tarea." },
    ],
    related: [{ href: ele("juegos-para-clase-de-espanol"), label: "Juegos para clase de español" }, { href: "/material-ele/plantillas/tarjetas-de-conversacion", label: "Tarjetas de conversación recortables" }, { href: ele("preguntas-de-conversacion"), label: "Preguntas de conversación por nivel" }],
  },
  {
    slug: "tabla-de-conjugacion",
    name: "Tabla de conjugación",
    title: "Tabla de conjugación en blanco para imprimir: verbos en español (PDF)",
    description: "Tabla de conjugación en blanco gratis en PDF: un verbo, seis tiempos y las seis personas en una hoja, con imperativo y frases propias. Para practicar verbos.",
    h1: "Tabla de conjugación en blanco: un verbo, seis tiempos",
    kind: "Gramática",
    sheets: 1,
    landscape: true,
    intro: "Una hoja horizontal para conjugar un verbo completo a mano, que es como mejor se fija. Tiene las seis personas en filas y seis tiempos en columnas, un recuadro para el imperativo y espacio para escribir tres frases propias con el verbo.",
    includes: ["Cabecera con el verbo en infinitivo, gerundio, participio y significado.", "Tabla con yo, tú, él/ella/usted, nosotros, vosotros y ellos/ustedes.", "Seis columnas: presente, pretérito indefinido, pretérito imperfecto, futuro, condicional y presente de subjuntivo.", "Recuadro de imperativo y de irregularidades del verbo.", "Líneas para tres frases propias."],
    steps: ["Elige un verbo por hoja; con principiantes, rellena solo las columnas de los tiempos que ya conocen.", "Pide al alumno que marque con color las formas irregulares.", "Las tres frases del final tienen que ser verdad para él: así el verbo se queda con un contexto.", "Guarda las hojas en una carpeta: en pocas semanas el alumno tiene su propio cuaderno de verbos."],
    tip: "Con alumnos de América, tacha la fila de «vosotros» o úsala para comparar. La hoja la incluye porque aparece en exámenes y en materiales de España.",
    faq: [
      { question: "¿Por qué esos seis tiempos?", answer: "Son los que más se usan y los que tienen formas simples propias. Los tiempos compuestos se forman con «haber» más participio, que ya está en la cabecera de la hoja." },
      { question: "¿Con qué verbos empiezo?", answer: "Con los irregulares más frecuentes: ser, estar, tener, ir, hacer, poder, decir y querer. Después, un verbo regular de cada conjugación como modelo." },
    ],
    related: [{ href: ele("presente-de-indicativo"), label: "Presente de indicativo: material ELE" }, { href: ele("indefinido-e-imperfecto"), label: "Indefinido e imperfecto" }, { href: ele("subjuntivo"), label: "Subjuntivo" }],
  },
  {
    slug: "rubrica-de-expresion-oral",
    name: "Rúbrica de expresión oral",
    title: "Rúbrica de expresión oral en español para imprimir (PDF gratis)",
    description: "Rúbrica gratis en PDF para evaluar la expresión oral: seis criterios (fluidez, gramática, vocabulario, pronunciación, interacción, coherencia) y 4 niveles.",
    h1: "Rúbrica de expresión oral: seis criterios y cuatro niveles",
    kind: "Seguimiento",
    sheets: 1,
    landscape: true,
    intro: "Una rúbrica de una hoja para valorar una presentación, un juego de rol o una conversación. Cada criterio tiene cuatro descripciones escritas en lenguaje claro, de modo que el alumno entiende por qué recibe esa valoración y qué tiene que hacer para subir un escalón.",
    includes: ["Cabecera con alumno, nivel, tarea y fecha.", "Seis criterios: fluidez, corrección gramatical, vocabulario, pronunciación, interacción y coherencia.", "Cuatro niveles de logro por criterio, del 1 (inicial) al 4 (destacado), cada uno con su descripción.", "Puntos totales, lo mejor de la intervención y un objetivo para la próxima vez."],
    steps: ["Enseña la rúbrica antes de la tarea, no después: el alumno tiene que saber qué se mira.", "Durante la intervención, marca solo la casilla de cada criterio; los comentarios, al final.", "Elige un único objetivo para la próxima vez y escríbelo en la hoja.", "Repite la misma tarea un mes después con la misma rúbrica y compara las dos hojas."],
    tip: "Los niveles de la rúbrica describen el desempeño en una tarea concreta para el nivel del alumno. No sustituyen las escalas de un examen oficial ni equivalen a un nivel del Marco.",
    faq: [
      { question: "¿Puede usarla el propio alumno?", answer: "Sí. La autoevaluación con la misma hoja, antes de ver la del profesor, suele ser la parte más útil: las diferencias entre las dos dan tema para cinco minutos de conversación." },
      { question: "¿Para qué niveles sirve?", answer: "De A2 a C1. Las descripciones hablan de lo que el alumno consigue en la tarea, así que la misma hoja vale para una presentación sencilla o para un debate." },
    ],
    related: [{ href: "/material-ele/plantillas/informe-de-progreso-del-alumno", label: "Plantilla de informe de progreso" }, { href: guia("actividades-de-conversacion-en-espanol-para-adultos"), label: "Actividades de conversación para adultos" }, { href: ele("conectores"), label: "Conectores: material ELE" }],
  },
  {
    slug: "acuerdo-de-clases-y-cancelaciones",
    name: "Acuerdo de clases",
    title: "Plantilla de acuerdo de clases particulares y cancelaciones (PDF)",
    description: "Plantilla gratis en PDF para profesores particulares de español: horario, pagos, cancelaciones, retrasos y vacaciones en una hoja que firman profesor y alumno.",
    h1: "Plantilla de acuerdo de clases particulares y cancelaciones",
    kind: "Organización",
    sheets: 1,
    landscape: false,
    intro: "La mayoría de los problemas con alumnos particulares vienen de lo que no se habló el primer día: qué pasa si cancela una hora antes, cuándo se paga, qué ocurre en vacaciones. Esta hoja deja las reglas escritas, con huecos para que pongas tus propias condiciones.",
    includes: ["Datos del profesor y del alumno, días, hora, duración y modalidad.", "Precio por clase o por paquete y forma y fecha de pago.", "Siete puntos con huecos para completar: cancelaciones, cambios de horario, retrasos, ausencia del profesor, paquetes, vacaciones y material.", "Espacio para otros acuerdos.", "Firmas del profesor y del alumno, con fecha."],
    steps: ["Rellena tus condiciones antes de la primera clase: plazo de cancelación, minutos de espera, validez de los paquetes.", "Léela con el alumno en cinco minutos y cambia lo que acordéis en «Otros acuerdos».", "Firmad los dos y que cada uno guarde una copia o una foto.", "Revísala una vez al año o cuando cambie el precio."],
    tip: "Es un modelo para dejar claras las condiciones entre profesor y alumno. No es un documento legal ni sustituye el asesoramiento de un profesional: las normas sobre contratos y consumo cambian según el país.",
    faq: [
      { question: "¿Qué plazo de cancelación pongo?", answer: "Lo decides tú; la hoja deja el hueco. Lo habitual entre profesores particulares es pedir aviso con 24 horas, pero lo importante es que el plazo esté escrito y se aplique siempre igual." },
      { question: "¿Sirve si doy clases en una plataforma?", answer: "Las plataformas suelen tener sus propias reglas de cancelación y pago, que mandan sobre cualquier acuerdo. La hoja es útil para alumnos directos." },
    ],
    related: [{ href: guia("como-dar-clases-de-espanol-online"), label: "Cómo dar clases de español online" }, { href: "/material-ele/plantillas/primera-clase-analisis-de-necesidades", label: "Ficha de primera clase" }, { href: ele("primera-clase-de-espanol"), label: "Primera clase de español" }],
  },
  {
    slug: "calendario-de-curso",
    name: "Calendario de curso",
    title: "Plantilla de calendario de curso de español de 12 semanas (PDF)",
    description: "Plantilla gratis en PDF para planificar un curso de español de 12 semanas: fecha, tema y objetivo, gramática y vocabulario, tarea y una casilla para marcar lo hecho.",
    h1: "Calendario de curso de 12 semanas",
    kind: "Planificación",
    sheets: 1,
    landscape: false,
    intro: "El plan de un trimestre en una sola hoja. Sirve para presentar un curso a un alumno nuevo, para no improvisar el tema cada semana y para que, al terminar, los dos veáis todo lo que se ha trabajado.",
    includes: ["Cabecera con alumno o grupo, nivel e inicio del curso.", "Objetivo del curso en una frase: al terminar, el alumno puede…", "Doce filas numeradas con fecha, tema y objetivo, gramática y vocabulario y tarea.", "Columna «Hecho» para marcar cada semana."],
    steps: ["Escribe primero el objetivo del curso y la semana 12: qué tiene que poder hacer el alumno al final.", "Reparte los temas hacia atrás desde ahí y deja las semanas 6 y 12 para repaso.", "Comparte la hoja con el alumno en la primera clase.", "Marca «Hecho» al final de cada clase; si una semana se retrasa, mueve el repaso, no el objetivo."],
    tip: "Doce semanas son un trimestre con una clase semanal. Con dos clases por semana, usa cada fila como una unidad de dos sesiones: presentación y práctica en la primera, producción en la segunda.",
    faq: [
      { question: "¿Cómo elijo los temas de cada semana?", answer: "Parte de lo que el alumno necesita hacer con el idioma y busca la gramática que hace falta para eso. Las páginas por nivel de Material ELE listan los contenidos habituales de A1 a C2." },
      { question: "¿Y si el alumno compra paquetes más cortos?", answer: "Usa solo las filas que necesites. Un paquete de diez clases cabe igual, y las dos filas libres sirven para clases de recuperación." },
    ],
    related: [{ href: "/material-ele/plantillas/plan-de-clase", label: "Plantilla de plan de clase" }, { href: ele("a2"), label: "Material ELE de A2" }, { href: ele("b1"), label: "Material ELE de B1" }],
  },
  {
    slug: "certificado-de-curso",
    name: "Certificado de curso",
    title: "Plantilla de certificado de curso de español para imprimir (PDF)",
    description: "Plantilla gratis en PDF de certificado de asistencia a un curso de español: nombre, horas, fechas, nivel trabajado y firma del profesor. No es un título oficial.",
    h1: "Plantilla de certificado de curso de español",
    kind: "Organización",
    sheets: 1,
    landscape: true,
    intro: "Un diploma horizontal para cerrar un curso con un reconocimiento. Deja constancia de las horas, las fechas y el nivel cuyos contenidos se han trabajado, con la firma del profesor. El propio documento indica que no es una certificación oficial de nivel.",
    includes: ["Título «Certificado de curso · Español como lengua extranjera».", "Línea para el nombre del alumno.", "Texto con huecos para las horas, las fechas de inicio y fin y el nivel trabajado.", "Firmas del profesor y lugar y fecha.", "Nota al pie: lo emite el profesor por el trabajo realizado y no es una certificación oficial de nivel."],
    steps: ["Imprímelo en papel grueso, en horizontal, o rellénalo en el ordenador y envíalo en PDF.", "Escribe las horas reales del curso y el nivel de los contenidos trabajados.", "Fírmalo y entrégalo en la última clase, junto con el informe de progreso.", "Guarda una copia por si el alumno la necesita más adelante."],
    tip: "Un certificado de curso dice qué se ha estudiado, no qué nivel tiene el alumno. Para acreditar un nivel hacen falta exámenes oficiales como el DELE o el SIELE; conviene explicárselo al alumno al entregarlo.",
    faq: [
      { question: "¿Tiene validez oficial?", answer: "No. Es un reconocimiento del profesor por un curso realizado. No acredita un nivel del Marco Común Europeo ni sustituye un examen oficial, y así lo indica la propia hoja." },
      { question: "¿Puedo añadir mi logo o el de mi academia?", answer: "Sí. Puedes poner tu sello o tu logo junto a la firma. La marca de SpanishCue queda en el pie como origen de la plantilla." },
    ],
    related: [{ href: "/material-ele/plantillas/informe-de-progreso-del-alumno", label: "Plantilla de informe de progreso" }, { href: "/material-ele/plantillas/calendario-de-curso", label: "Calendario de curso de 12 semanas" }, { href: guia("materiales-para-ensenar-espanol"), label: "Materiales para enseñar español" }],
  },
];

export const plantillas: Plantilla[] = entries.map((entry) => ({ ...entry, path: `${PLANTILLAS_PATH}/${entry.slug}` }));
export const plantillaBySlug = new Map(plantillas.map((page) => [page.slug, page]));
export const plantillaKinds = ["Planificación", "Seguimiento", "Juegos y conversación", "Gramática", "Organización"] as const;

/** Static files of a template, as printed by scripts/plantillas/build.mjs. */
export const plantillaFiles = (slug: string) => ({ a4: `/plantillas/${slug}.pdf`, letter: `/plantillas/${slug}-carta.pdf`, preview: `/plantillas/${slug}.jpg`, pin: `/pinterest/plantilla-${slug}.jpg` });

export const plantillasTitle = "Plantillas para profesores de español: PDF gratis para imprimir";
export const plantillasDescription = `${plantillas.length} plantillas gratis en PDF para profesores de español: plan de clase, primera clase, informe de progreso, rúbrica, bingo, tarjetas y más. En A4 y carta, sin registro.`;
