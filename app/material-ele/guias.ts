import { MATERIAL_ELE_PATH } from "./data";
import { ACTIVIDADES_PATH, actividadPages, ejercicioPages, preguntasPages } from "./actividades";
import { temasByGroup } from "./temas";
import { catalogSummary } from "../growth/lessons";

/**
 * Long-form guides of Material ELE: one page per pillar query a teacher types
 * into Google. Each guide is authored prose with real internal links and a
 * FAQ, so the page answers the query instead of listing classes. Counts come
 * from the catalog and the activity bank, never from hand-typed numbers.
 */
export const GUIAS_PATH = `${MATERIAL_ELE_PATH}/guia`;

/** Inline text may carry `**bold**` and `[label](/path)` links; the renderer turns both into elements. */
export type GuiaBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };
export type GuiaSection = { id: string; title: string; blocks: GuiaBlock[]; subsections?: { title: string; blocks: GuiaBlock[] }[] };
export type GuiaPage = {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  kicker: string;
  intro: string;
  keywords: string[];
  published: string;
  /** Classes the guide points at; the first free one is the hero button, the covers feed og:image and the sitemap. */
  lessonIds: number[];
  sections: GuiaSection[];
  faq: { question: string; answer: string }[];
  /** Topic slugs of `elePages` shown under «Sigue con». */
  related: string[];
};

const total = catalogSummary.total;
const free = catalogSummary.free;
const activities = actividadPages.length;
const exercises = ejercicioPages.length;
const questions = preguntasPages.reduce((n, page) => n + page.set.items.length, 0);
const worlds3d = temasByGroup("formatos").find((page) => page.slug === "mundos-3d")?.lessonIds.length ?? 0;
const conversationGames = temasByGroup("formatos").find((page) => page.slug === "juegos-de-conversacion")?.lessonIds.length ?? 0;
const roleplays = temasByGroup("formatos").find((page) => page.slug === "roleplays")?.lessonIds.length ?? 0;

export const guiaPages: GuiaPage[] = [
  {
    slug: "materiales-para-ensenar-espanol",
    path: `${GUIAS_PATH}/materiales-para-ensenar-espanol`,
    title: "Materiales para enseñar español: guía completa para profesores | SpanishCue",
    description:
      "Qué materiales para enseñar español necesitas por nivel, dónde conseguirlos gratis, cómo evaluarlos y cómo convertir una ficha en una clase completa de 45 minutos.",
    h1: "Materiales para enseñar español: guía completa para profesores",
    kicker: "Guía para profesores de ELE",
    intro:
      "Si enseñas español como lengua extranjera, ya conoces el problema: hay miles de materiales sueltos y muy pocos que entren en una clase real de 45 minutos sin que tengas que montarlos tú. Esta guía ordena qué materiales necesita cada nivel, dónde encontrarlos gratis, cómo saber si valen y cómo pasar de una ficha a una clase completa que puedas dar hoy, en persona o por pantalla compartida.",
    keywords: ["materiales para enseñar español", "materiales para profesores de español", "recursos ELE", "material ELE gratis", "materiales ELE por niveles", "fichas ELE"],
    published: "2026-11-02",
    lessonIds: [239, 36, 223, 240, 244],
    sections: [
      {
        id: "que-son",
        title: "Qué entendemos por «materiales para enseñar español»",
        blocks: [
          { type: "p", text: "Un material para enseñar español es cualquier recurso que ponga al alumno a entender, practicar y producir lengua con un objetivo claro: una ficha de gramática, un audio con preguntas, una lista de preguntas de conversación, un juego, un texto adaptado, una unidad didáctica entera. Lo que separa un buen material de uno mediocre no es el formato, sino tres cosas:" },
          { type: "ol", items: [
            "**Tiene un objetivo comunicativo**, no solo una regla: «dar consejos a un amigo» en vez de «el condicional».",
            "**Está secuenciado**: presenta, practica con corrección y termina con producción. Un ejercicio de huecos sin cierre oral es media clase.",
            "**Indica el nivel con honestidad** (MCER y, si se puede, PCIC). «Para todos los niveles» suele significar «para ninguno».",
          ] },
        ],
      },
      {
        id: "por-nivel",
        title: "Materiales por nivel: qué pedir en cada etapa",
        blocks: [],
        subsections: [
          { title: "Principiantes absolutos y A1", blocks: [
            { type: "p", text: "El alumno necesita decir cosas desde la primera hora. Los materiales útiles son los que traen **vocabulario con apoyo visual y bilingüe**, frases mínimas y una situación donde usarlas: presentarse, pedir en un bar, decir de dónde eres. Una clase inicial que funcione tiene que terminar con el alumno diciendo diez frases sobre sí mismo. En SpanishCue, la [Clase inicial](/gramatica/clase-inicial) es gratis y está pensada exactamente para esa primera hora; el resto del nivel está en [Material ELE A1](/material-ele/a1)." },
          ] },
          { title: "A2", blocks: [
            { type: "p", text: "Aquí entran los pasados, los gustos, la ciudad, la comida, las rutinas. Pide materiales con **contraste** (indefinido frente a imperfecto, ser frente a estar) y con escenas reales: un mercado, un hospital, un viaje. Las páginas de [pretérito indefinido](/material-ele/gramatica/preterito-indefinido) y [ser y estar](/material-ele/gramatica/ser-y-estar) reúnen las clases que lo enseñan, ordenadas de lo regular a lo irregular." },
          ] },
          { title: "B1", blocks: [
            { type: "p", text: "El nivel donde el alumno se estanca si solo hace ejercicios. Necesita **tareas de producción largas**: narrar, aconsejar, quejarse, hacer planes. Los materiales que mejor funcionan son los que lo obligan a decidir: un roleplay con consecuencias, un debate con posiciones asignadas, una historia que tiene que contar. Mira las [funciones comunicativas](/material-ele/funciones) y [Material ELE B1](/material-ele/b1)." },
          ] },
          { title: "B2", blocks: [
            { type: "p", text: "Subjuntivo por usos, estilo indirecto, argumentación. Busca materiales que presenten **un uso por sesión** (deseos hoy, valoraciones mañana) y no «el subjuntivo» entero en una tabla. La página de [presente de subjuntivo](/material-ele/gramatica/presente-de-subjuntivo) está organizada así." },
          ] },
          { title: "C1 y C2", blocks: [
            { type: "p", text: "Matices, ironía, registro, variedades del español. Aquí el mejor material es una **situación compleja** con lengua auténtica y preguntas que no tienen respuesta correcta. Los [mundos 3D de SpanishCue](/material-ele/formatos/mundos-3d) cambian lo que hay que hacer con la lengua según el nivel: el mismo aeropuerto pide frases mínimas en A1 y leer el subtexto en C2." },
          ] },
        ],
      },
      {
        id: "donde-gratis",
        title: "Dónde encontrar materiales gratis (y qué esperar de cada sitio)",
        blocks: [
          { type: "p", text: "Estos son los sitios en español que más aparecen cuando un profesor busca materiales, con lo que ofrecían en noviembre de 2026 según sus propias webs:" },
          { type: "ul", items: [
            "**ProfeDeELE.es**: actividades interactivas por nivel, categoría y formato (dictados, canciones, escape rooms). Parte gratis, descargables y formación con membresía de pago.",
            "**profe-de-espanol.de**: blog con recursos por destrezas, tipología y foco, muchos gratis, más membresía y cursos de formación.",
            "**Lección-E**: tienda de materiales por unidad (guías de lectura, secuencias, ejercicios DELE) que se compran uno a uno, con algunos recursos gratuitos.",
            "**DELE Ahora**: ejercicios autocorregibles por categoría, pensados para el alumno más que para el profesor.",
            "**Lesson Here**: materiales interactivos para profes online con un plan gratis limitado y planes de pago.",
            `**SpanishCue · Material ELE**: cientos de páginas gratis en español con ${activities} actividades, ${exercises} ejercicios con soluciones, preguntas de conversación por nivel y el índice de las ${total} clases interactivas (${free} gratis), organizadas por nivel, tema y formato: [spanishcue.com/material-ele](/material-ele).`,
          ] },
          { type: "p", text: "El patrón es el mismo en todos: lo gratis sirve para probar; la clase completa, secuenciada y lista para compartir en pantalla suele ser de pago. La diferencia está en qué compras: fichas sueltas para montar tú, o clases que ya están montadas." },
        ],
      },
      {
        id: "evaluar",
        title: "Cómo evaluar un material en dos minutos",
        blocks: [
          { type: "p", text: "Antes de llevar algo a clase, hazle estas preguntas:" },
          { type: "ul", items: [
            "¿Dice el nivel y se nota en la lengua que usa?",
            "¿Tiene un **cierre de producción** (hablar o escribir) o termina en el último hueco?",
            "¿Las instrucciones las puede leer el alumno en pantalla sin que tú las traduzcas?",
            "¿Funciona en pantalla compartida? Un PDF de tres columnas y letra 9 no funciona.",
            "¿Te da la respuesta modelo y la corrección frecuente, o te deja solo?",
            "¿Puedes reutilizarlo con otro alumno sin rehacerlo?",
          ] },
          { type: "p", text: "Si falla dos de estas, no es un material: es materia prima." },
        ],
      },
      {
        id: "clase-45",
        title: "De una ficha a una clase de 45 minutos",
        blocks: [
          { type: "p", text: "Una secuencia que funciona con casi cualquier material:" },
          { type: "ol", items: [
            "**Entrar hablando (5 min)**: una pregunta de calentamiento sobre la vida del alumno relacionada con el tema. En [preguntas de conversación por nivel](/material-ele/preguntas-de-conversacion) hay 60 listas para copiar.",
            "**Entender (8 min)**: la regla o el léxico con ejemplos marcados. Mejor en pantalla que en explicación oral.",
            `**Practicar con corrección (12 min)**: ejercicios cortos con respuesta inmediata. El [banco de actividades](${ACTIVIDADES_PATH}) tiene ${exercises} ejercicios con soluciones.`,
            "**Escuchar (5 min)**: un audio corto con dos preguntas. Si no tienes audio, lee tú un texto breve dos veces.",
            "**Conversar (10 min)**: una tarea donde el alumno necesita el punto de la clase para decir lo que quiere decir. Un roleplay, una decisión, una historia.",
            "**Cerrar (5 min)**: el alumno resume en tres frases qué puede hacer ahora que antes no podía. Esa es tu evaluación.",
          ] },
          { type: "p", text: "Las clases de gramática de SpanishCue siguen exactamente este orden en siete pasos, en una sola pantalla que avanza contigo. Puedes ver tres completas gratis en cada nivel desde [Material ELE por nivel](/material-ele#niveles)." },
        ],
      },
      {
        id: "por-formato",
        title: "Materiales por formato: cuando no buscas un tema sino un tipo de clase",
        blocks: [
          { type: "p", text: "A veces lo que necesitas es «algo para romper el hielo» o «una hora entera sin preparar». Por eso Material ELE también se organiza por [formato](/material-ele/formatos): [mundos 3D de conversación](/material-ele/formatos/mundos-3d), [comprensión auditiva](/material-ele/formatos/comprension-auditiva), [juegos de conversación](/material-ele/formatos/juegos-de-conversacion), [roleplays](/material-ele/formatos/roleplays), [clases para principiantes absolutos](/material-ele/formatos/principiantes-absolutos), [para adultos](/material-ele/formatos/ele-para-adultos) y [para fines específicos](/material-ele/formatos/fines-especificos)." },
        ],
      },
    ],
    faq: [
      { question: "¿Qué materiales necesito para empezar a enseñar español online?", answer: "Una clase inicial lista, una lista de preguntas de conversación por nivel y un material de gramática secuenciado para A1 y A2. Con eso cubres las primeras semanas con cualquier alumno." },
      { question: "¿Hay materiales para enseñar español gratis de verdad?", answer: `Sí. En Material ELE todas las fichas, ejercicios y preguntas son gratis sin registro, y hay ${free} clases interactivas gratis, incluidas tres de gramática por nivel. Los sitios de la lista de arriba también tienen parte gratuita.` },
      { question: "¿Cuánto cuesta tener todas las clases?", answer: "En SpanishCue, US$19,90 al mes o US$150 al año, con tarjeta o PayPal, y se cancela cuando quieras. Se prueban primero las clases marcadas GRATIS." },
      { question: "¿Sirven para clases presenciales?", answer: "Sí: cada guía tiene una ficha imprimible, y las clases interactivas se proyectan igual que se comparten por pantalla." },
      { question: "¿Cómo sé el nivel de un material?", answer: "Por el MCER y el PCIC. Cada clase y cada página de SpanishCue indica su nivel y, en los mundos 3D, el nivel se elige dentro." },
    ],
    related: ["a1", "b1", "preguntas-de-conversacion", "primera-clase-de-espanol", "juegos-para-clase-de-espanol", "comprension-auditiva"],
  },
  {
    slug: "preparar-una-clase-de-espanol-rapido",
    path: `${GUIAS_PATH}/preparar-una-clase-de-espanol-rapido`,
    title: "Cómo preparar una clase de español en 10 minutos (con ejemplos por nivel)",
    description:
      "Método en seis pasos para preparar una clase de español rápido: objetivo, material listo, calentamiento, práctica, conversación y cierre. Con ejemplos de A1 a C2.",
    h1: "Cómo preparar una clase de español en 10 minutos (con ejemplos por nivel)",
    kicker: "Guía para profesores de ELE",
    intro:
      "Preparar una clase de español no debería costar más que darla. Si cada sesión de 45 minutos te lleva una hora de búsqueda, recorte y montaje, el problema no eres tú: es que trabajas con materia prima en vez de con clases. Esta guía te da un método de diez minutos que funciona con cualquier alumno, un ejemplo concreto por nivel y los enlaces a las clases ya montadas para que mañana solo tengas que elegir, abrir y enseñar.",
    keywords: ["preparar clases de español rápido", "cómo preparar una clase de español", "planificar una clase de ELE", "plan de clase de español", "clases de español listas", "profesor de español online"],
    published: "2026-11-02",
    lessonIds: [239, 350, 389, 439, 468, 515],
    sections: [
      {
        id: "por-que-tarda",
        title: "Por qué preparar una clase tarda tanto (y qué cambia cuando no)",
        blocks: [
          { type: "p", text: "La preparación se come el tiempo en tres sitios: buscar (abrir diez pestañas para encontrar una actividad decente), adaptar (recortar un PDF pensado para un grupo de veinte y convertirlo en algo que sirva para un alumno por videollamada) y montar (pegar la explicación, los ejercicios, el audio y las preguntas en un documento que puedas compartir en pantalla). Ninguno de los tres es enseñar." },
          { type: "p", text: "Cuando el material ya viene secuenciado, el único trabajo real es decidir **qué** necesita tu alumno hoy. Ese es el paso que vale tu tiempo, y es el único que esta guía te pide hacer con cuidado. El resto se resuelve con enlaces." },
        ],
      },
      {
        id: "metodo",
        title: "El método de diez minutos, paso a paso",
        blocks: [
          { type: "ol", items: [
            "**Minuto 1 a 2: un objetivo que se pueda decir.** No «el pretérito indefinido» sino «contar qué hizo el fin de semana con cinco verbos en pasado». Si el objetivo cabe en una frase que el alumno podría decir al final, está bien formulado. Si no, es un tema, no un objetivo.",
            `**Minuto 3 a 4: elegir la clase ya montada.** Busca el tema en [Material ELE](/material-ele): hay ${total} clases interactivas organizadas por [nivel](/material-ele#niveles), por [tema de gramática](/material-ele/gramatica), por [vocabulario](/material-ele/vocabulario), por [función comunicativa](/material-ele/funciones) y por [formato](/material-ele/formatos). Cada página de tema dice qué clases lo enseñan y en qué nivel.`,
            `**Minuto 5: la pregunta de entrada.** Copia una o dos de las [preguntas de conversación por nivel](/material-ele/preguntas-de-conversacion) relacionadas con el tema. Son ${questions} preguntas ordenadas de fácil a difícil, pensadas para que el alumno hable de su vida, no de la gramática.`,
            `**Minuto 6 a 7: la práctica con corrección.** Si la clase elegida ya trae ejercicios, no busques más. Si quieres uno extra, el [banco de actividades](${ACTIVIDADES_PATH}) tiene ${activities} actividades con pasos y respuesta modelo y ${exercises} ejercicios con soluciones, uno por nivel y punto gramatical.`,
            "**Minuto 8 a 9: la tarea de producción.** Decide qué va a hacer el alumno con la lengua durante diez minutos: contar, aconsejar, quejarse, negociar, convencer. Un [roleplay](/material-ele/formatos/roleplays) o un [juego de conversación](/material-ele/formatos/juegos-de-conversacion) resuelven esto sin que tengas que inventar nada.",
            "**Minuto 10: el cierre.** Escribe la pregunta final: «¿Qué puedes decir ahora que antes no podías?». El alumno responde con tres frases. Esa respuesta es tu evaluación y, de paso, el punto de partida de la clase siguiente.",
          ] },
          { type: "p", text: "Diez minutos. Nada de buscar, nada de recortar, nada de montar. Lo que has hecho es decidir y enlazar." },
        ],
      },
      {
        id: "ejemplos",
        title: "Un ejemplo por nivel, de principiantes absolutos a C2",
        blocks: [],
        subsections: [
          { title: "Principiantes absolutos y A1: la primera clase", blocks: [
            { type: "p", text: "Objetivo: que el alumno diga diez frases sobre sí mismo. Clase: la [Clase inicial](/gramatica/clase-inicial), que es gratis y está pensada para la primera hora, con el inglés al lado cuando hace falta. Entrada: «¿De dónde eres?». Producción: presentarse a un compañero imaginario. Cierre: tres frases con «soy», «vivo» y «me gusta». El resto del nivel está en [Material ELE A1](/material-ele/a1) y en las clases para [principiantes absolutos](/material-ele/formatos/principiantes-absolutos)." },
          ] },
          { title: "A2: contar el fin de semana", blocks: [
            { type: "p", text: "Objetivo: narrar con indefinido e imperfecto sin mezclarlos. Clase: [Indefinido e imperfecto: evento y contexto](/gramatica/indefinido-e-imperfecto), gratis en este nivel. Entrada: «¿Qué hiciste el sábado?». Práctica: el ejercicio de [indefinido o imperfecto](/material-ele/ejercicio/a2). Producción: contar una anécdota real con un detalle inventado que el profesor tiene que detectar. Más clases en [Material ELE A2](/material-ele/a2) y en la página de [contraste de pasados](/material-ele/gramatica/contraste-de-pasados)." },
          ] },
          { title: "B1: dar consejos a un amigo", blocks: [
            { type: "p", text: "Objetivo: expresar deseos y dar consejos con subjuntivo. Clase: [Deseos: querer que, esperar que, ojalá](/gramatica/deseos-querer-que-esperar-que-ojala). Entrada: «¿Qué le deseas a alguien que conoces esta semana?». Producción: un amigo tiene tres problemas y el alumno le aconseja; la página de [dar consejos y recomendaciones](/material-ele/funciones/dar-consejos-y-recomendaciones) tiene las clases que lo trabajan. Cierre: tres consejos con «te recomiendo que»." },
          ] },
          { title: "B2: hablar del futuro incierto", blocks: [
            { type: "p", text: "Objetivo: usar «cuando», «en cuanto» y «hasta que» con subjuntivo para planes. Clase: [Temporales con subjuntivo para futuro incierto](/gramatica/temporales-con-subjuntivo-para-futuro-incierto). Entrada: «¿Qué vas a hacer cuando termine el curso?». Producción: planificar un viaje con un presupuesto que cambia. Más en [oraciones temporales](/material-ele/gramatica/oraciones-temporales) y [Material ELE B2](/material-ele/b2)." },
          ] },
          { title: "C1: tomar postura", blocks: [
            { type: "p", text: "Objetivo: elegir indicativo o subjuntivo según la actitud del hablante. Clase: [Alternancia de indicativo y subjuntivo según postura](/gramatica/alternancia-de-indicativo-y-subjuntivo-segun). Entrada: una noticia polémica y «¿Qué opinas?». Producción: defender una posición que no es la propia. La página de [argumentar y debatir](/material-ele/funciones/argumentar-y-debatir) reúne las clases de debate." },
          ] },
          { title: "C2: cambiar de registro", blocks: [
            { type: "p", text: "Objetivo: pasar de «tú» a «usted» y a «vos» según la situación. Clase: [Voseo, tuteo y ustedeo](/gramatica/voseo-tuteo-y-ustedeo-cambios-pragmaticos). Entrada: «¿Con quién usas usted en tu lengua, si existe?». Producción: la misma queja a un amigo, a un jefe y a un desconocido en Buenos Aires. Más en [registro y cortesía](/material-ele/gramatica/registro-y-cortesia) y [variedades del español](/material-ele/cultura/variedades-del-espanol)." },
          ] },
        ],
      },
      {
        id: "sin-preparar",
        title: "Cuando no tienes ni diez minutos: clases que se dan sin preparar",
        blocks: [
          { type: "p", text: `Hay días en que el alumno aparece sin avisar o la clase anterior se alarga. Para eso existen las clases que no necesitan preparación porque la secuencia ya está dentro: las [clases de gramática en vivo](/material-ele/formatos/clases-de-gramatica-en-vivo) avanzan contigo en siete pasos (entender, explorar, practicar, escuchar, conversar, escribir, cerrar) en una sola pantalla, y los [mundos 3D de conversación](/material-ele/formatos/mundos-3d) (${worlds3d} en total) traen la situación, las preguntas y la escucha dentro del mismo mundo, con el nivel elegible desde principiantes hasta C2.` },
          { type: "p", text: "En los dos casos tu única decisión es el nivel. Lo demás lo hace la clase mientras tú escuchas y corriges, que es para lo que te pagan." },
        ],
      },
      {
        id: "errores",
        title: "Cinco errores que alargan la preparación",
        blocks: [
          { type: "ul", items: [
            "**Preparar «el tema» entero.** Una clase es un objetivo, no un capítulo. El subjuntivo son doce clases, no una.",
            "**Buscar el material perfecto.** No existe. Existe el material secuenciado que termina en producción; lo demás se corrige en clase.",
            "**Traducir instrucciones.** Si el alumno no puede leer la consigna en pantalla, el material no era para pantalla compartida.",
            "**Empezar por la gramática.** Empieza por una pregunta sobre su vida. La gramática llega cuando el alumno la necesita para responder.",
            "**No cerrar.** Sin las tres frases finales, el alumno sale sin saber qué aprendió y tú sin saber qué preparar la próxima vez.",
          ] },
        ],
      },
    ],
    faq: [
      { question: "¿Cuánto tiempo debería tardar en preparar una clase de español de 45 minutos?", answer: "Con material secuenciado, entre cinco y diez minutos: elegir el objetivo, la clase, la pregunta de entrada y la tarea de producción. Más de veinte minutos suele significar que estás montando material en vez de eligiéndolo." },
      { question: "¿Sirve el mismo método para clases presenciales?", answer: "Sí. Los seis pasos son los mismos; cambia solo el soporte: proyectas en vez de compartir pantalla, y las fichas se imprimen desde cada guía." },
      { question: "¿Qué hago si el alumno no sabe su nivel?", answer: "Empieza por la pregunta de entrada de un nivel por debajo del que crees. Si responde con soltura, sube. La respuesta a tres preguntas de conversación te dice más que un test de huecos." },
      { question: "¿Puedo preparar varias clases de golpe?", answer: "Sí, y es lo más eficiente: elige el objetivo de las próximas cuatro sesiones en la página de nivel de tu alumno y guarda las clases como favoritas. Cada día solo ajustas la pregunta de entrada según lo que pasó en la clase anterior." },
      { question: "¿Las clases de SpanishCue son gratis?", answer: `Hay ${free} clases gratis, incluidas tres de gramática en cada nivel, y todas las fichas, ejercicios y preguntas de Material ELE son gratis sin registro. El resto de clases está en la suscripción de US$19,90 al mes.` },
    ],
    related: ["primera-clase-de-espanol", "a1", "a2", "b1", "indefinido-e-imperfecto", "subjuntivo"],
  },
  {
    slug: "fichas-ele-para-imprimir-y-proyectar",
    path: `${GUIAS_PATH}/fichas-ele-para-imprimir-y-proyectar`,
    title: `Fichas ELE para imprimir y proyectar: ${activities + exercises} fichas gratis por nivel y tema`,
    description:
      "Fichas ELE gratis para imprimir o compartir en pantalla: actividades con respuesta modelo, ejercicios con soluciones y preguntas de conversación, de A1 a C2.",
    h1: "Fichas ELE para imprimir y proyectar: fichas gratis por nivel y tema",
    kicker: "Guía para profesores de ELE",
    intro:
      `Una ficha ELE buena hace dos cosas: le da al alumno algo que leer y hacer, y te da a ti la respuesta modelo y la forma de corregir. Esta guía explica qué tipos de fichas existen, cómo elegir la correcta según el nivel y el momento de la clase, y dónde están las ${activities + exercises} fichas gratuitas de SpanishCue, cada una con su página, su versión imprimible y su versión para pantalla compartida.`,
    keywords: ["fichas ELE", "fichas ELE para imprimir", "fichas de español para extranjeros", "fichas ELE gratis", "actividades ELE imprimibles", "ejercicios ELE con soluciones"],
    published: "2026-11-02",
    lessonIds: [239, 350, 389, 36, 223],
    sections: [
      {
        id: "tipos",
        title: "Los cuatro tipos de ficha ELE y para qué sirve cada uno",
        blocks: [
          { type: "ul", items: [
            "**Ficha de actividad comunicativa.** Una situación, pasos numerados, frases que el alumno puede usar y una respuesta modelo. Sirve para la parte de «conversar» de la clase. Ejemplo: [La oficina compartida](/material-ele/actividad/la-oficina-compartida) o [Mi semana en cinco frases](/material-ele/actividad/mi-semana-en-cinco-frases).",
            "**Ficha de ejercicio con soluciones.** Diez frases para completar o elegir, con las respuestas y la explicación del error más frecuente. Sirve para «practicar con corrección». Ejemplo: [ser, estar o hay](/material-ele/ejercicio/a1), [indefinido o imperfecto](/material-ele/ejercicio/a2), [infinitivo, indicativo o subjuntivo](/material-ele/ejercicio/b1).",
            `**Ficha de preguntas de conversación.** Diez preguntas por nivel, ordenadas de fácil a difícil, para abrir la clase o cerrarla. Hay ${questions} en [preguntas de conversación por nivel](/material-ele/preguntas-de-conversacion).`,
            "**Ficha de tema.** La guía completa de un punto gramatical o de un tema de vocabulario: objetivos, calentamiento, tarea de producción y errores frecuentes, más las clases interactivas que lo enseñan. Ejemplo: [ser y estar](/material-ele/ser-y-estar), [por y para](/material-ele/por-y-para), [el imperativo](/material-ele/imperativo).",
          ] },
          { type: "p", text: "Las cuatro se imprimen con el botón «Descargar ficha en PDF» de cada página, que quita los menús y deja solo lo que va al papel, y las cuatro se comparten en pantalla tal cual, porque están escritas para que el alumno lea la consigna sin que tú la traduzcas." },
        ],
      },
      {
        id: "por-nivel",
        title: "Qué ficha elegir según el nivel",
        blocks: [],
        subsections: [
          { title: "Principiantes absolutos y A1", blocks: [
            { type: "p", text: "Fichas con mucho apoyo visual, instrucciones de una línea y vocabulario antes que reglas. Empieza por la [Clase inicial](/gramatica/clase-inicial), gratis, y sigue con las fichas de [Material ELE A1](/material-ele/a1): presentarse, la familia, la casa, los números y las horas. El ejercicio de [ser, estar o hay](/material-ele/ejercicio/a1) es el primero que conviene hacer dos veces." },
          ] },
          { title: "A2", blocks: [
            { type: "p", text: "Fichas de contraste: pasados, gustos, rutinas, la ciudad. Las de [Material ELE A2](/material-ele/a2) terminan todas con una producción corta (contar, describir, pedir). El tema estrella es [indefinido e imperfecto](/material-ele/indefinido-e-imperfecto), con su ejercicio y su actividad de anécdotas." },
          ] },
          { title: "B1 y B2", blocks: [
            { type: "p", text: "Fichas que obligan a decidir: aconsejar, quejarse, hacer planes, argumentar. Mira [Material ELE B1](/material-ele/b1) y [B2](/material-ele/b2), y las fichas de [funciones comunicativas](/material-ele/funciones) cuando lo que necesitas no es un punto gramatical sino «que el alumno sepa negociar». Para el subjuntivo, la [guía del subjuntivo](/material-ele/subjuntivo) presenta un uso por ficha." },
          ] },
          { title: "C1 y C2", blocks: [
            { type: "p", text: "Fichas con lengua auténtica, registro y variedades. Las de [Material ELE C1](/material-ele/c1) y [C2](/material-ele/c2) no tienen respuesta única: la respuesta modelo es un punto de partida para discutir matices. Las fichas de [estilo indirecto](/material-ele/estilo-indirecto) y de [conectores](/material-ele/conectores) son las que más piden los alumnos que preparan exámenes." },
          ] },
        ],
      },
      {
        id: "como-usar",
        title: "Cómo usar una ficha en clase sin que se convierta en deberes",
        blocks: [
          { type: "ol", items: [
            "**Léela con el alumno, no para el alumno.** La consigna está escrita para que la lea él en pantalla. Tú escuchas cómo la lee: ahí ya hay corrección.",
            "**Haz la mitad en clase y deja la otra mitad para la próxima.** Diez frases son demasiadas para una sesión si cada una genera conversación, que es lo que quieres.",
            "**Corrige con la respuesta modelo, no contra ella.** Si el alumno dice algo distinto pero correcto, gana él. La respuesta modelo existe para que tú no tengas que improvisar la explicación.",
            "**Termina con producción.** Cada ficha de actividad acaba en una tarea oral o escrita. No la saltes: es la parte que el alumno recuerda.",
            "**Guarda la ficha para el cierre.** Al final, el alumno vuelve a la ficha y marca qué puede hacer ahora. Eso es la evaluación, sin examen.",
          ] },
        ],
      },
      {
        id: "imprimir-o-proyectar",
        title: "Imprimir o proyectar: cuándo conviene cada cosa",
        blocks: [
          { type: "p", text: "Imprime cuando el alumno escribe a mano (dictados, completar, escribir un párrafo) o cuando la clase es presencial y quieres que se lleve algo. Proyecta o comparte pantalla cuando la ficha se usa para hablar: la consigna a la vista, el alumno responde, tú anotas. En clases online, la ficha compartida en pantalla funciona mejor que el PDF enviado antes, porque el alumno no la hace solo de antemano." },
          { type: "p", text: `Cuando la ficha se queda corta, la clase interactiva del mismo tema la continúa: cada página de tema enlaza las clases que lo enseñan, de las que ${free} son gratis. Y si lo que buscas es una clase entera sin preparar, mira las [clases de gramática en vivo](/material-ele/formatos/clases-de-gramatica-en-vivo) o el [banco de actividades](${ACTIVIDADES_PATH}) completo.` },
        ],
      },
      {
        id: "diez-para-empezar",
        title: "Diez fichas para empezar esta semana",
        blocks: [
          { type: "p", text: "Si no sabes por dónde empezar, estas diez cubren una semana de clases con alumnos de niveles distintos. Cada una se abre, se imprime o se comparte en pantalla en un clic:" },
          { type: "ol", items: [
            "[¿Dónde está la lámpara?](/material-ele/actividad/donde-esta-la-lampara): la casa y las preposiciones de lugar para A1, con un plano que el alumno describe.",
            "[Mi semana en cinco frases](/material-ele/actividad/mi-semana-en-cinco-frases): rutinas y frecuencia en A1, cierre oral obligatorio.",
            "[Ejercicio A1: ser, estar o hay](/material-ele/ejercicio/a1): el contraste que más errores produce en el primer mes, con soluciones y explicación.",
            "[Preguntas de conversación A2](/material-ele/preguntas/a2): diez preguntas de pasados y planes para abrir cualquier clase de A2.",
            "[Ejercicio A2: indefinido o imperfecto](/material-ele/ejercicio/a2): diez frases de una anécdota para elegir el pasado correcto.",
            "[La oficina compartida](/material-ele/actividad/la-oficina-compartida): quejas, normas y negociación entre compañeros, de B1 en adelante.",
            "[Ejercicio B1: infinitivo, indicativo o subjuntivo](/material-ele/ejercicio/b1): la primera decisión de modo, explicada frase a frase.",
            "[Preguntas de conversación B2](/material-ele/preguntas/b2): hipótesis y valoraciones para que el alumno se moje.",
            "[Guía de por y para](/material-ele/por-y-para): la ficha de tema completa, con calentamiento, producción y errores frecuentes.",
            "[Preguntas de conversación C1](/material-ele/preguntas/c1): matices e ironía para alumnos que ya hablan y quieren afinar.",
          ] },
          { type: "p", text: "Después de esta semana, el resto está ordenado por tema y por nivel en el banco completo, y cada ficha enlaza la clase interactiva que la continúa." },
        ],
      },
      {
        id: "por-tema",
        title: "Fichas por tema: gramática, vocabulario, funciones y cultura",
        blocks: [
          { type: "p", text: "Además de por nivel, cada ficha está clasificada por tema, que es como suele buscarse en el momento de preparar: [gramática](/material-ele/gramatica) (tiempos verbales, pronombres, preposiciones, oraciones), [vocabulario](/material-ele/vocabulario) (familia, casa, ciudad, comida, trabajo, viajes), [funciones](/material-ele/funciones) (saludar, describir, narrar, opinar, aconsejar, negociar) y [cultura](/material-ele/cultura) (países, fiestas, historia, cine, variedades del español). Y cuando lo que falta es un tipo de clase y no un tema, por [formato](/material-ele/formatos)." },
        ],
      },
    ],
    faq: [
      { question: "¿Las fichas ELE son gratis de verdad?", answer: "Sí. Todas las fichas de actividad, los ejercicios con soluciones y las preguntas de conversación de Material ELE se abren e imprimen sin registro. Lo que es de pago son las clases interactivas marcadas PRO." },
      { question: "¿En qué formato se descargan?", answer: "En PDF desde el botón «Descargar ficha en PDF» de cada página, que usa la impresión del navegador y quita menús y botones. No hay archivos sueltos que mantener: la ficha siempre es la versión actual de la página." },
      { question: "¿Sirven para grupos o solo para clases individuales?", answer: "Sirven para las dos cosas. Las fichas de actividad tienen pasos pensados para un alumno, pero cada paso se reparte sin cambios entre parejas o grupos pequeños." },
      { question: "¿Vienen con las soluciones?", answer: "Los ejercicios sí, con la explicación del error más frecuente. Las actividades comunicativas traen una respuesta modelo, que es una posibilidad, no la única correcta." },
      { question: "¿Cómo sé el nivel de cada ficha?", answer: "Cada ficha indica su nivel del MCER en la cabecera y en su página de nivel. Si dudas entre dos, elige la inferior: una ficha fácil que termina en conversación rinde más que una difícil que termina en silencio." },
    ],
    related: ["a1", "a2", "b1", "ser-y-estar", "preguntas-de-conversacion", "vocabulario-por-temas"],
  },
  {
    slug: "actividades-de-conversacion-en-espanol-para-adultos",
    path: `${GUIAS_PATH}/actividades-de-conversacion-en-espanol-para-adultos`,
    title: `Actividades de conversación en español para adultos: preguntas, roleplays y 3D`,
    description:
      "Actividades de conversación en español para adultos por nivel: preguntas, roleplays, juegos y mundos 3D que ponen al alumno a hablar de su vida real.",
    h1: "Actividades de conversación en español para adultos: de las preguntas a los mundos 3D",
    kicker: "Guía para profesores de ELE",
    intro:
      "Los adultos no quieren jugar a ser niños ni hablar de temas de manual. Quieren contar su trabajo, quejarse de su casero, decidir qué hacer en un aeropuerto cerrado o convencer a un vecino en una reunión de consorcio. Esta guía reúne las actividades de conversación que funcionan con adultos, de principiantes a C2, explica cómo llevarlas sin que se conviertan en un interrogatorio y enlaza cada una a la página donde ya está lista.",
    keywords: ["actividades de conversación en español", "actividades de conversación para adultos", "conversación ELE", "temas de conversación en español", "roleplays en español", "juegos de conversación ELE"],
    published: "2026-11-02",
    lessonIds: [36, 223, 240, 244, 245, 243],
    sections: [
      {
        id: "que-funciona",
        title: "Qué hace que una actividad de conversación funcione con adultos",
        blocks: [
          { type: "p", text: "Tres condiciones. Primera: el alumno habla de algo que le importa o que tiene que resolver, no de un tema abstracto. «¿Qué opinas de la tecnología?» produce silencio; «¿Qué aplicación borrarías hoy del teléfono y por qué?» produce tres minutos. Segunda: hay una decisión o un desenlace, para que hablar sirva para algo. Tercera: el nivel está controlado por el profesor, no por el tema; la misma situación se puede jugar en A1 con frases mínimas y en C2 leyendo el subtexto." },
          { type: "p", text: "Todo lo que sigue cumple las tres." },
        ],
      },
      {
        id: "preguntas",
        title: `${questions} preguntas de conversación por nivel`,
        blocks: [
          { type: "p", text: "La base. Diez preguntas por nivel, ordenadas de fácil a difícil, sobre la vida real del alumno: rutinas, dinero, vecinos, trabajo, manías, decisiones. Se usan para abrir la clase, para rellenar diez minutos que sobran o como cierre. Cada lista tiene su página para copiarla al chat o proyectarla:" },
          { type: "ul", items: [
            "[Preguntas A1](/material-ele/preguntas/a1): presente, gustos, rutina, familia.",
            "[Preguntas A2](/material-ele/preguntas/a2): pasados, ciudad, comida, planes.",
            "[Preguntas B1](/material-ele/preguntas/b1): consejos, experiencias, opiniones con «creo que».",
            "[Preguntas B2](/material-ele/preguntas/b2): hipótesis, valoraciones, desacuerdo cortés.",
            "[Preguntas C1](/material-ele/preguntas/c1): matices, ironía, posturas incómodas.",
            "[Preguntas C2](/material-ele/preguntas/c2): registro, variedades, lo que no se dice.",
          ] },
          { type: "p", text: "Regla para llevarlas: una pregunta, una repregunta, y después el alumno te la hace a ti. Si te la hace, la actividad funcionó." },
        ],
      },
      {
        id: "roleplays",
        title: `Roleplays con desenlace: ${roleplays} clases`,
        blocks: [
          { type: "p", text: "Un roleplay para adultos necesita un conflicto y un final abierto: reclamar un cobro, negociar un alquiler, convencer a un jefe, pedir un favor incómodo. Los [roleplays de SpanishCue](/material-ele/formatos/roleplays) traen el papel del alumno, el del profesor y las frases que cada uno puede usar, con el nivel marcado. Las funciones que más se practican con ellos tienen su propia página: [expresar quejas y reclamar](/material-ele/funciones/expresar-quejas-y-reclamar), [negociar y convencer](/material-ele/funciones/negociar-y-convencer), [invitar y hacer planes](/material-ele/funciones/invitar-y-hacer-planes) y [dar consejos](/material-ele/funciones/dar-consejos-y-recomendaciones)." },
        ],
      },
      {
        id: "juegos",
        title: `Juegos de conversación: ${conversationGames} clases para hablar sin darse cuenta`,
        blocks: [
          { type: "p", text: "Los juegos funcionan con adultos cuando el reto es intelectual, no infantil: detectar la mentira en una anécdota, decidir con un presupuesto que cambia, sobrevivir a una noche en una ciudad desconocida. En los [juegos de conversación](/material-ele/formatos/juegos-de-conversacion) la lengua es la herramienta para ganar, y por eso el alumno habla más de lo que hablaría en un ejercicio. Si lo que quieres es un juego corto para empezar, los [juegos para clase de español](/material-ele/juegos-para-clase-de-espanol) tienen varios de cinco minutos." },
        ],
      },
      {
        id: "mundos-3d",
        title: `Mundos 3D: ${worlds3d} situaciones donde la conversación es el juego`,
        blocks: [
          { type: "p", text: "Es el diferencial de SpanishCue y lo que más engancha a los adultos: el alumno camina por un lugar real (un aeropuerto con el vuelo cancelado, un hospital, un edificio de Buenos Aires en plena reunión de consorcio, una ciudad de noche) y cada persona con la que se cruza abre una conversación. El profesor elige el nivel dentro del mundo: la misma situación pide frases mínimas a un principiante y leer el subtexto a un C2. Cada mundo tiene también su modo de comprensión auditiva, con escuchas por zona." },
          { type: "ul", items: [
            "[Estados Unidos](/estados-unidos-a2-b1), gratis: seis estados, cinco lugares cada uno y escuchas cortas; ideal para probar el formato.",
            "[Vuelo cancelado](/resources/spanish-conversation-activity-a0-c2-vuelo-cancelado): un aeropuerto cerrado, decisiones con tiempo y dinero, quejas y negociación.",
            "[El consorcio](/resources/spanish-conversation-activity-a0-c2-el-consorcio): la reunión de vecinos donde hay que convencer, ceder y votar.",
            "[Hospital San Casi Vivo](/resources/spanish-conversation-activity-a0-c2-hospital-san-casi-vivo): pacientes, médicos y familiares con más de cien audios de voz.",
            "[Noche abierta](/resources/spanish-conversation-activity-a0-c2-noche-abierta): una noche en la ciudad, con el centro gratis para probar.",
            "[Más allá: cielo e infierno](/resources/spanish-conversation-activity-a0-c2-mas-alla-cielo-e-infierno): doce encuentros con preguntas que no tienen respuesta correcta.",
          ] },
          { type: "p", text: "Todos están en [mundos 3D de conversación](/material-ele/formatos/mundos-3d), con su nivel y su escucha. Se juegan por pantalla compartida: el alumno dice adónde ir y qué responder, el profesor mueve y corrige." },
        ],
      },
      {
        id: "temas",
        title: "Doce temas de conversación que funcionan con adultos (y la pregunta que los abre)",
        blocks: [
          { type: "p", text: "Los temas de manual (la familia, las vacaciones, el medio ambiente) no fallan por el tema sino por la pregunta. Estos doce, con su pregunta de apertura, producen conversación real en casi cualquier nivel; abajo de cada uno, la página de tema con las clases que lo trabajan:" },
          { type: "ol", items: [
            "**Dinero**: «¿En qué gastas más de lo que deberías?» → [compras y dinero](/material-ele/vocabulario/compras-y-dinero).",
            "**Vecinos**: «¿Qué haría falta para que te mudaras?» → [la casa](/material-ele/vocabulario/la-casa).",
            "**Trabajo**: «¿Qué parte de tu trabajo haría mejor una máquina?» → [trabajo y profesiones](/material-ele/vocabulario/trabajo-y-profesiones).",
            "**Comida**: «¿Qué plato no volverías a pedir nunca?» → [comida y restaurante](/material-ele/vocabulario/comida-y-restaurante).",
            "**Viajes**: «¿Cuál fue el peor hotel de tu vida?» → [viajes y transporte](/material-ele/vocabulario/viajes-y-transporte).",
            "**Tecnología**: «¿Qué aplicación borrarías hoy?» → [tecnología y medios](/material-ele/vocabulario/tecnologia-y-medios).",
            "**Salud**: «¿Cuándo fue la última vez que fuiste al médico sin querer ir?» → [el cuerpo y la salud](/material-ele/vocabulario/el-cuerpo-y-la-salud).",
            "**Emociones**: «¿Qué te pone de mal humor antes de las nueve?» → [emociones y sentimientos](/material-ele/vocabulario/emociones-y-sentimientos).",
            "**Tiempo libre**: «¿Qué hobby abandonaste y por qué?» → [ocio y tiempo libre](/material-ele/vocabulario/ocio-y-tiempo-libre).",
            "**Opinión**: «¿En qué tema cambiaste de opinión el último año?» → [expresar opinión](/material-ele/funciones/expresar-opinion).",
            "**Hipótesis**: «¿Qué harías con un mes libre y sin dinero?» → [expresar hipótesis y probabilidad](/material-ele/funciones/expresar-hipotesis-y-probabilidad).",
            "**Cultura**: «¿Qué costumbre de otro país adoptarías?» → [fiestas y tradiciones](/material-ele/cultura/fiestas-y-tradiciones).",
          ] },
          { type: "p", text: "Con un principiante, la misma pregunta se hace con dos opciones («¿té o café?») y se responde con una frase. Con un C2, se pide la razón, la excepción y la opinión contraria. El tema no cambia; cambia lo que se exige." },
        ],
      },
      {
        id: "llevarlas",
        title: "Cómo llevar una actividad de conversación sin que sea un interrogatorio",
        blocks: [
          { type: "ol", items: [
            "**Tú primero.** Responde tú la primera pregunta en dos frases. Das modelo, bajas la tensión y muestras el nivel esperado.",
            "**Repregunta antes de corregir.** «¿Y por qué?» produce más lengua que «se dice *fui*». La corrección va después, agrupada.",
            "**Anota, no interrumpas.** Tres errores recurrentes apuntados valen más que diez correcciones en vivo. Al final se repasan con el alumno.",
            "**Cierra con una decisión.** ¿Qué harías? ¿A quién le darías la razón? Una decisión obliga a usar lo que se practicó.",
            "**Reutiliza.** La misma actividad, un nivel más arriba, es otra clase. Los mundos 3D están diseñados para eso.",
          ] },
          { type: "p", text: `Las clases que lo trabajan de forma guiada están en [funciones comunicativas](/material-ele/funciones) y en [Material ELE por nivel](/material-ele#niveles); de las ${total} clases, ${free} son gratis para empezar hoy.` },
        ],
      },
    ],
    faq: [
      { question: "¿Qué actividades de conversación funcionan con adultos principiantes?", answer: "Preguntas cerradas sobre su vida con apoyo visual, roleplays de una situación cotidiana (pedir en un bar, presentarse) y un mundo 3D en nivel principiante, donde cada escena trae cuatro o seis palabras clave. La Clase inicial gratis termina con el alumno diciendo diez frases sobre sí mismo." },
      { question: "¿Cómo evito que el alumno conteste con monosílabos?", answer: "Pregunta por decisiones y razones, no por hechos: «¿qué harías?» y «¿por qué?» en vez de «¿te gusta?». Y responde tú primero: el modelo baja la tensión y marca la longitud esperada." },
      { question: "¿Sirven estas actividades para clases presenciales en grupo?", answer: "Sí. Las preguntas y los roleplays se reparten en parejas sin cambios; los mundos 3D se proyectan y el grupo decide adónde ir y qué responder." },
      { question: "¿Las actividades de conversación son gratis?", answer: `Las preguntas de conversación, las fichas y los ejercicios de Material ELE son gratis sin registro. De los mundos 3D, Estados Unidos es gratis completo y Noche abierta tiene el centro gratis; el resto está en la suscripción de US$19,90 al mes, que incluye las ${total} clases.` },
      { question: "¿Cuánto dura una actividad de conversación?", answer: "Una lista de preguntas, de cinco a diez minutos; un roleplay, de diez a quince; un mundo 3D, la clase entera de 45 minutos, con su escucha incluida." },
    ],
    related: ["preguntas-de-conversacion", "juegos-para-clase-de-espanol", "comprension-auditiva", "b1", "b2", "c1"],
  },
  {
    slug: "ejercicios-ele-con-soluciones",
    path: `${GUIAS_PATH}/ejercicios-ele-con-soluciones`,
    title: `Ejercicios ELE con soluciones: ${exercises} ejercicios gratis por nivel y tema`,
    description:
      "Ejercicios ELE con soluciones, gratis y sin registro: por nivel y por tema (ser y estar, pasados, subjuntivo, por y para…), con tres formas de corregirlos en clase.",
    h1: "Ejercicios ELE con soluciones: por nivel, por tema y listos para corregir en clase",
    kicker: "Guía para profesores de ELE",
    intro:
      "Un ejercicio sin solución es trabajo para el profesor; un ejercicio con solución es un material que se corrige solo, en clase o en casa. Esta guía reúne los ejercicios ELE con soluciones que puedes usar hoy, ordenados por nivel y por tema, y explica cómo corregirlos sin que la clase se convierta en una lectura de respuestas: qué hacer antes, qué hacer con el error y cómo pasar del ejercicio a una conversación.",
    keywords: ["ejercicios ELE con soluciones", "ejercicios de español con soluciones", "ejercicios ELE", "ejercicios de gramática española con respuestas", "ejercicios ser y estar con soluciones", "ejercicios subjuntivo con soluciones"],
    published: "2026-11-03",
    lessonIds: [239, 350, 389, 439, 48, 374],
    sections: [
      {
        id: "que-es",
        title: "Qué tiene que tener un ejercicio ELE con soluciones para servir en clase",
        blocks: [
          { type: "p", text: "No todos los ejercicios con respuestas valen lo mismo. Para que uno funcione en una clase real, en persona o por pantalla compartida, tiene que cumplir cuatro condiciones. **Una sola cosa por ejercicio**: ocho frases sobre ser y estar, no ocho frases que mezclan ser, estar, pasados y pronombres. **Frases con contexto**: «Mi profesora ___ argentina» se entiende sola; «___ alto» no. **Una solución visible a voluntad**: el alumno decide cuándo mirarla, el profesor decide si la proyecta. **Una consigna de una línea**: si la instrucción necesita un párrafo, el ejercicio está mal diseñado." },
          { type: "p", text: `Los ${exercises} ejercicios del [banco de actividades](/material-ele/actividades) de SpanishCue cumplen las cuatro: entre seis y diez frases cada uno, una consigna, y cada frase se abre para ver la solución. Son gratis y no piden registro. Abajo están ordenados por nivel y por tema, con lo que practica cada uno.` },
        ],
      },
      {
        id: "por-nivel",
        title: "Ejercicios con soluciones por nivel",
        blocks: [
          { type: "p", text: "Un ejercicio por nivel, pensado como prueba rápida de lo que el alumno debería dominar al terminar ese nivel. Sirven para la primera clase con un alumno nuevo (diez minutos y sabes dónde está) y para repasar antes de un examen." },
          { type: "ul", items: [
            "[Ejercicio A1: ser, estar o hay](/material-ele/ejercicio/a1). La confusión más frecuente del primer año, en frases de la vida diaria.",
            "[Ejercicio A2: indefinido o imperfecto](/material-ele/ejercicio/a2). Elegir el pasado correcto en un relato corto.",
            "[Ejercicio B1: infinitivo, indicativo o subjuntivo](/material-ele/ejercicio/b1). La decisión que separa un B1 de un A2.",
            "[Ejercicio B2: oraciones condicionales](/material-ele/ejercicio/b2). Reales, posibles e imposibles, con la concordancia de tiempos.",
          ] },
          { type: "p", text: "Para C1 y C2 no hay un ejercicio de huecos porque a ese nivel el error ya no es de forma sino de registro y de matiz; lo que corresponde ahí son las [preguntas de conversación C1](/material-ele/preguntas/c1) y [C2](/material-ele/preguntas/c2), que obligan a elegir cómo decir las cosas, no solo qué forma usar." },
        ],
      },
      {
        id: "por-tema",
        title: "Ejercicios con soluciones por tema",
        blocks: [
          { type: "p", text: "Cada tema de gramática de Material ELE tiene su ejercicio con soluciones, enlazado desde la guía del tema. Aquí están agrupados por el tipo de dificultad que trabajan." },
        ],
        subsections: [
          {
            title: "Las parejas que siempre se confunden",
            blocks: [
              { type: "ul", items: [
                "[Ser, estar o hay](/material-ele/ejercicio/ser-y-estar) (A1–B1), con la [guía de ser y estar](/material-ele/ser-y-estar) para explicar antes de practicar.",
                "[Indefinido o imperfecto](/material-ele/ejercicio/indefinido-e-imperfecto) (A2–B1): conjugar el verbo en el pasado que pide el relato. La [guía de los pasados](/material-ele/indefinido-e-imperfecto) tiene la explicación con ejemplos.",
                "[Por o para](/material-ele/ejercicio/por-y-para) (A2–B1), diez frases con las preposiciones que más errores producen; guía en [por y para](/material-ele/por-y-para).",
                "[Indicativo o subjuntivo](/material-ele/ejercicio/subjuntivo) (B1–C1): elegir el modo en frases con «creo que», «no creo que», «cuando», «aunque». Explicación en la [guía del subjuntivo](/material-ele/subjuntivo).",
              ] },
            ],
          },
          {
            title: "Verbos y tiempos",
            blocks: [
              { type: "ul", items: [
                "[Pretérito perfecto](/material-ele/ejercicio/preterito-perfecto) (A1–A2): el primer pasado que aprende un alumno, con «hoy», «esta semana», «ya» y «todavía no».",
                "[Futuro: ir a, presente o futuro simple](/material-ele/ejercicio/futuro) (A2–B1): la forma más natural para cada plan, no la más gramatical.",
                "[Condicional y oraciones con si](/material-ele/ejercicio/condicional) (B1–B2): condicional simple, compuesto o imperfecto de subjuntivo.",
                "[Imperativo afirmativo y negativo](/material-ele/ejercicio/imperativo) (A2–B1), con la persona indicada en cada frase.",
                "[Verbos reflexivos](/material-ele/ejercicio/verbos-reflexivos) (A1–A2): el pronombre y la forma en presente.",
                "[Perífrasis verbales](/material-ele/ejercicio/perifrasis-verbales) (B1–B2): «acabar de», «seguir + gerundio», «volver a», «dejar de».",
                "[Verbos de cambio](/material-ele/ejercicio/verbos-de-cambio) (B1–B2): ponerse, volverse, hacerse, quedarse, convertirse en, llegar a ser.",
                "[Gustar, encantar, interesar, doler](/material-ele/ejercicio/gustar) (A1–A2): pronombre más verbo concordado con lo que gusta.",
              ] },
            ],
          },
          {
            title: "Pronombres, conectores y textos",
            blocks: [
              { type: "ul", items: [
                "[Lo, la, le, se lo](/material-ele/ejercicio/pronombres-de-objeto) (A1–B1): completar respuestas con el pronombre o los pronombres correctos.",
                "[Conectores](/material-ele/ejercicio/conectores) (A2–C1): porque, como, por eso, sin embargo, además, en el lugar que pide cada frase.",
                "[Estilo indirecto](/material-ele/ejercicio/estilo-indirecto) (B1–B2): transmitir un mensaje con el verbo introductor en pasado.",
                "[Acentuación](/material-ele/ejercicio/acentuacion) (A1–B2): escribir la palabra con tilde si la necesita.",
                "[Vocabulario por temas](/material-ele/ejercicio/vocabulario-por-temas) (A1–B1): la palabra del tema que falta en cada frase.",
                "[Comprensión auditiva](/material-ele/ejercicio/comprension-auditiva) (A1–C2): un mensaje de voz que lees dos veces y seis preguntas con solución; el único ejercicio de la lista que se corrige escuchando.",
              ] },
            ],
          },
        ],
      },
      {
        id: "como-corregir",
        title: "Tres formas de corregir un ejercicio con soluciones en clase",
        blocks: [
          { type: "p", text: "La solución visible cambia quién corrige. Hay tres maneras de aprovecharlo, y conviene alternarlas." },
          { type: "ol", items: [
            "**Corrección a ciegas.** El alumno completa las ocho frases sin abrir nada. Después abre las soluciones una por una y marca sus errores. Tú solo intervienes en los que marcó: ahí está la explicación que necesita, no en las frases que acertó.",
            "**Corrección en voz alta.** Proyectas el ejercicio en pantalla compartida, el alumno lee cada frase completa y justifica la forma en una palabra («es porque es nacionalidad»). Abres la solución después de la justificación, nunca antes. Sirve para B1 en adelante, donde explicar la regla es parte de la práctica.",
            "**Corrección invertida.** Abres primero todas las soluciones y el alumno tiene que explicar por qué cada una es correcta, o inventar una frase nueva con la misma forma. Es la versión para repasar un tema que ya conoce: no busca el acierto sino la regla.",
          ] },
          { type: "p", text: "En las tres, el error es el material. Un ejercicio de ocho frases en el que el alumno falla dos te da los dos puntos exactos para la siguiente explicación; uno en el que acierta todo te dice que el tema está cerrado y puedes pasar a la producción." },
        ],
      },
      {
        id: "de-ejercicio-a-clase",
        title: "Del ejercicio a la clase completa",
        blocks: [
          { type: "p", text: "Un ejercicio dura diez minutos; una clase, cuarenta y cinco. El error habitual es encadenar cuatro ejercicios y llamarlo clase. Lo que funciona es la secuencia **entender, practicar, usar**: una explicación corta con ejemplos, el ejercicio con soluciones y una tarea de producción en la que el alumno use la forma para decir algo suyo." },
          { type: "p", text: "Las clases de gramática de SpanishCue ya vienen con esa secuencia montada en siete pasos (entender, explorar, practicar, escuchar, conversar, escribir, cerrar), con el modo profesor que oculta las respuestas en la pantalla del alumno. La [clase inicial](/gramatica/clase-inicial) es gratis y muestra el formato; las de [A1](/material-ele/a1), [A2](/material-ele/a2), [B1](/material-ele/b1) y [B2](/material-ele/b2) tienen tres clases gratis por nivel para probar antes de pagar." },
          { type: "p", text: "Si prefieres montar la clase tú, la guía [cómo preparar una clase de español en 10 minutos](/material-ele/guia/preparar-una-clase-de-espanol-rapido) explica cómo elegir el ejercicio, la explicación y la producción para cada nivel, y [fichas ELE para imprimir y proyectar](/material-ele/guia/fichas-ele-para-imprimir-y-proyectar) cubre la versión en papel." },
        ],
      },
      {
        id: "errores",
        title: "Cinco errores al usar ejercicios con soluciones",
        blocks: [
          { type: "ul", items: [
            "**Darlos como deberes sin volver sobre ellos.** Si el alumno corrige solo en casa y nadie mira qué falló, el ejercicio no enseñó nada. Pide que te mande las dos frases que falló, no las ocho.",
            "**Mezclar temas para «hacerlo más difícil».** Un ejercicio difícil no es uno que mezcla; es uno con frases más largas o más ambiguas sobre el mismo punto.",
            "**Corregir el acierto.** Explicar por qué una frase correcta es correcta aburre al que ya lo sabía. Explica solo el error.",
            "**Usar el ejercicio como examen.** Con la solución a un clic, no mide nada. Mide la corrección en voz alta, donde el alumno justifica.",
            "**Saltar la producción.** Ocho huecos bien rellenados no demuestran que el alumno pueda usar la forma hablando. Cierra siempre con dos minutos de conversación sobre el tema; las [preguntas de conversación por nivel](/material-ele/preguntas-de-conversacion) sirven para eso.",
          ] },
        ],
      },
      {
        id: "imprimir",
        title: "Imprimir, proyectar o compartir",
        blocks: [
          { type: "p", text: "Cada ejercicio tiene su propia página, con el botón «Descargar ficha en PDF» para imprimirlo o mandarlo por el chat de la clase. Proyectado en pantalla compartida, las soluciones se abren frase por frase, así que no hace falta una versión «para el profesor» y otra «para el alumno»: es la misma página. El [índice completo de Material ELE](/material-ele/indice) lista los ejercicios junto con las fichas y las preguntas, y el [banco de actividades](/material-ele/actividades) los agrupa por nivel." },
        ],
      },
    ],
    faq: [
      { question: "¿Los ejercicios ELE con soluciones son gratis?", answer: `Sí. Los ${exercises} ejercicios del banco de actividades se abren sin registro, se pueden imprimir en PDF y cada frase muestra su solución. Las clases completas de gramática a las que enlazan son de pago, salvo tres gratis por nivel y la clase inicial.` },
      { question: "¿Para qué niveles hay ejercicios?", answer: "De A1 a B2 por nivel y de A1 a C1 por tema (conectores, subjuntivo). Para C1 y C2 el material recomendado son las preguntas de conversación y las clases de esos niveles, porque el error ya no es de forma." },
      { question: "¿Cómo se ven las soluciones?", answer: "Cada frase del ejercicio se abre al tocarla o al hacer clic y muestra la respuesta. El alumno puede corregirse solo y el profesor puede abrirlas una por una en pantalla compartida." },
      { question: "¿Puedo usar los ejercicios en una clase online?", answer: "Sí. Están pensados para pantalla compartida: una página, una consigna de una línea y soluciones que se abren a voluntad. También se pueden mandar como PDF por el chat de la clase." },
    ],
    related: ["ser-y-estar", "indefinido-e-imperfecto", "subjuntivo", "por-y-para", "a1", "b1"],
  },
  {
    slug: "como-dar-clases-de-espanol-online",
    path: `${GUIAS_PATH}/como-dar-clases-de-espanol-online`,
    title: "Cómo dar clases de español online: guía práctica para profesores de ELE",
    description:
      "Cómo dar clases de español online que funcionen: la pantalla, el ritmo de 45 minutos, qué compartir en cada nivel y cómo hacer hablar al alumno desde el primer día.",
    h1: "Cómo dar clases de español online: pantalla, ritmo y materiales que funcionan",
    kicker: "Guía para profesores de ELE",
    intro:
      "Dar clases de español online no es dar la misma clase de siempre delante de una cámara. Cambia lo que el alumno ve, cambia el ritmo y cambia lo que cuenta como material. Esta guía reúne lo que funciona en clases particulares y grupos pequeños por videollamada: cómo preparar la pantalla, cómo repartir los 45 minutos, qué compartir en cada nivel y cómo conseguir que el alumno hable más que tú.",
    keywords: ["cómo dar clases de español online", "clases de español online", "enseñar español online", "profesor de español online", "dar clases de ELE online", "material para clases de español online"],
    published: "2026-11-03",
    lessonIds: [239, 332, 358, 390, 36, 28],
    sections: [
      {
        id: "que-cambia",
        title: "Qué cambia cuando la clase de español es online",
        blocks: [
          { type: "p", text: "En una clase presencial el alumno mira al profesor, a la pizarra, al libro y a sus compañeros. En una clase online mira **una sola ventana**. Todo lo que no está en esa ventana no existe: la ficha que tienes en el escritorio, el gesto que haces fuera de cámara, el ejemplo que escribiste en un papel. Por eso la primera regla de una clase online es que el material tiene que estar pensado para la pantalla compartida, no adaptado a ella." },
          { type: "p", text: "La segunda diferencia es la atención. Delante de una pantalla el alumno tiene el correo, el móvil y otra pestaña a un clic. Una explicación de diez minutos sin interacción pierde a cualquiera, en cualquier nivel. Lo que funciona son bloques cortos, de cinco a ocho minutos, que terminan siempre con el alumno haciendo algo: contestar, elegir, leer en voz alta, contar." },
          { type: "p", text: "La tercera es a favor: la clase online permite cosas que en el aula son difíciles. El alumno puede escuchar un audio con buenos auriculares, ver una imagen a pantalla completa, moverse por un escenario o corregirse solo abriendo una solución. Una buena clase online aprovecha eso en lugar de imitar la pizarra." },
        ],
      },
      {
        id: "preparar-pantalla",
        title: "Cómo preparar la pantalla antes de empezar",
        blocks: [
          { type: "p", text: "Cinco minutos de preparación técnica ahorran diez de clase perdida. Antes de cada sesión:" },
          { type: "ol", items: [
            "**Abre todo lo que vas a compartir en pestañas de un mismo navegador**, en el orden de la clase. Cambiar de programa en mitad de la clase es donde se pierde el ritmo.",
            "**Comparte la pestaña, no la pantalla entera.** El alumno no necesita ver tus notificaciones ni tu escritorio, y el audio de la pestaña llega mejor.",
            "**Comprueba el audio compartido** si la clase tiene escucha. Muchas plataformas de videollamada necesitan que actives «compartir sonido» al compartir la pestaña.",
            "**Ten las respuestas fuera de la vista del alumno.** Si el material muestra las soluciones en la misma página, necesitas un modo que las oculte; si no, el ejercicio se corrige solo antes de empezar.",
            "**Prepara un plan B sin pantalla compartida**: tres preguntas de conversación por si falla la conexión. Las [preguntas de conversación por nivel](/material-ele/preguntas-de-conversacion) sirven para eso.",
          ] },
          { type: "p", text: "Las clases de SpanishCue están pensadas para este punto: cada una se abre en una pestaña, ocupa la pantalla compartida y tiene un **modo profesor** que oculta las respuestas en la pantalla del alumno. Puedes probar el formato completo con la [Clase inicial](/gramatica/clase-inicial), que es gratis." },
        ],
      },
      {
        id: "estructura-45",
        title: "La estructura de una clase online de 45 minutos",
        blocks: [
          { type: "p", text: "Una clase online de 45 minutos funciona mejor con una secuencia fija que el alumno reconoce. La que usan las clases de gramática de SpanishCue tiene siete pasos, y sirve también si montas la clase con tu propio material:" },
          { type: "ol", items: [
            "**Entrada (3 minutos).** Una pregunta personal que conecta con el tema: «¿Qué hiciste el sábado?» antes de los pasados, «¿Qué te gusta hacer los domingos?» antes de gustar.",
            "**Entender (7 minutos).** La regla con ejemplos en pantalla. Corta: tres ejemplos claros valen más que una tabla completa.",
            "**Explorar (5 minutos).** El alumno descubre la forma en un texto o en un diálogo antes de practicarla.",
            "**Practicar (10 minutos).** Ejercicios con solución, que el alumno contesta en voz alta. Los [ejercicios ELE con soluciones](/material-ele/guia/ejercicios-ele-con-soluciones) explican tres formas de corregirlos.",
            "**Escuchar (5 minutos).** Un audio corto con la forma en uso. La [comprensión auditiva](/material-ele/comprension-auditiva) es donde más gana la clase online frente a la presencial.",
            "**Conversar (10 minutos).** Preguntas abiertas que obligan a usar lo aprendido para decir algo propio.",
            "**Cerrar (5 minutos).** Tres frases que el alumno escribe en el chat. Te las quedas: son el punto de partida de la próxima clase.",
          ] },
          { type: "p", text: "Si quieres montar esta secuencia con tus propios materiales, la guía [cómo preparar una clase de español en 10 minutos](/material-ele/guia/preparar-una-clase-de-espanol-rapido) explica cómo elegir cada pieza. Si prefieres no montarla, las [clases de gramática en vivo](/material-ele/formatos/clases-de-gramatica-en-vivo) ya la traen hecha, con tres gratis en cada nivel." },
        ],
      },
      {
        id: "por-nivel",
        title: "Qué compartir en pantalla en cada nivel",
        blocks: [
          { type: "p", text: "La pantalla compartida no es igual de útil en todos los niveles. Lo que necesita el alumno cambia mucho de A1 a C2." },
        ],
        subsections: [
          {
            title: "A1 y A2: imagen, palabra y frase mínima",
            blocks: [
              { type: "p", text: "En los primeros niveles la pantalla hace el trabajo que en el aula hacen los gestos y los objetos. Funciona el vocabulario con imagen, el apoyo bilingüe cuando hace falta y frases cortas que el alumno pueda repetir y cambiar. Una clase de [gustar y encantar](/gramatica/gustar-y-encantar) o de [imperativo](/material-ele/imperativo) se entiende mejor con una imagen por ejemplo que con una tabla de conjugación. Material de los dos niveles en [Material ELE A1](/material-ele/a1) y [A2](/material-ele/a2)." },
            ],
          },
          {
            title: "B1 y B2: texto, contraste y opinión",
            blocks: [
              { type: "p", text: "A partir de B1 la pantalla sirve para mostrar contraste: dos frases casi iguales con un modo distinto, un mensaje con dos interpretaciones, un texto corto con los conectores marcados. Es el nivel del [subjuntivo](/material-ele/subjuntivo), de las [recomendaciones con «que»](/gramatica/recomendaciones-sugerir-que-aconsejar-que) y de la opinión argumentada. Comparte poco texto y deja que el alumno lo comente: a este nivel la producción es la clase. Más en [Material ELE B1](/material-ele/b1) y [B2](/material-ele/b2)." },
            ],
          },
          {
            title: "C1 y C2: registro, matiz y situación",
            blocks: [
              { type: "p", text: "En los niveles altos la pantalla compartida casi desaparece: lo que importa es la conversación. Comparte una situación, un fragmento o un dilema, y el resto es hablar. El error ya no es de forma sino de registro, así que la corrección se hace sobre cómo dijo el alumno algo, no sobre qué dijo. Ideas para esos niveles en [Material ELE C1](/material-ele/c1) y [C2](/material-ele/c2)." },
            ],
          },
        ],
      },
      {
        id: "hacer-hablar",
        title: "Cómo conseguir que el alumno hable más que tú",
        blocks: [
          { type: "p", text: "El problema más común de las clases online es que el profesor habla demasiado. La cámara invita a explicar, y el alumno, que no quiere interrumpir con el micrófono, escucha. Algunas reglas que lo corrigen:" },
          { type: "ul", items: [
            "**Pregunta en segunda persona desde el minuto uno.** No «el pretérito indefinido se usa para…», sino «¿qué hiciste ayer?».",
            "**Cuenta los minutos que hablas.** Si en un bloque de diez minutos hablaste más de cuatro, el bloque era una explicación, no una práctica.",
            "**Usa el silencio.** En videollamada parece más largo de lo que es. Espera cinco segundos antes de reformular una pregunta.",
            "**Da una tarea con un motivo para hablar.** Un [juego de conversación](/material-ele/formatos/juegos-de-conversacion) o un [roleplay](/material-ele/formatos/roleplays) da al alumno algo que conseguir, no solo algo que contestar.",
            "**Corrige después, no durante.** Anota los errores en el chat y repásalos al final del bloque; interrumpir cada frase en una videollamada corta la conversación.",
          ] },
          { type: "p", text: "La guía [actividades de conversación en español para adultos](/material-ele/guia/actividades-de-conversacion-en-espanol-para-adultos) tiene actividades concretas por nivel, y los [juegos para la clase de español](/material-ele/juegos-para-clase-de-espanol) funcionan igual de bien por pantalla compartida." },
        ],
      },
      {
        id: "mundos-3d",
        title: "Lo que solo se puede hacer online: escenarios para recorrer",
        blocks: [
          { type: "p", text: "Una ventaja de la clase online que casi nadie aprovecha es que el alumno puede **recorrer un lugar**. En lugar de describir un aeropuerto con una ficha, el alumno camina por uno, encuentra a una persona con un problema y tiene que resolverlo hablando. Es la diferencia entre practicar el vocabulario del viaje y vivir un vuelo cancelado." },
          { type: "p", text: "SpanishCue tiene varios [mundos 3D](/material-ele/formatos/mundos-3d) pensados para eso: el alumno se mueve por la escena y cada punto de conversación abre preguntas para su nivel. Puedes probar la [demo gratis de Noche abierta](/demo/noche-abierta), una ciudad de noche con locales para conversar, o la clase gratis de [Estados Unidos](/estados-unidos-a2-b1). Para escuchar, [Latinoamérica al Oído](/latinoamerica-al-oido) es gratis y trabaja acentos de distintos países." },
        ],
      },
      {
        id: "primera-clase",
        title: "La primera clase online con un alumno nuevo",
        blocks: [
          { type: "p", text: "La primera clase decide si el alumno vuelve. En una clase online, además, es cuando el alumno descubre si la tecnología le va a complicar la vida. Tres objetivos para esa clase: que hable en español en los primeros cinco minutos, que tú sepas su nivel real al final y que se lleve algo que pueda usar." },
          { type: "p", text: "Para lo primero, empieza con preguntas personales en el nivel más bajo posible y sube hasta que el alumno se trabe. Para lo segundo, usa un ejercicio corto con solución: diez minutos de [ejercicio por nivel](/material-ele/ejercicio/a1) dicen más que una prueba larga. Para lo tercero, cierra con tres frases escritas en el chat. La guía de la [primera clase de español](/material-ele/primera-clase-de-espanol) tiene la secuencia completa." },
        ],
      },
      {
        id: "errores",
        title: "Cinco errores frecuentes al dar clases de español online",
        blocks: [
          { type: "ul", items: [
            "**Compartir un PDF y leerlo.** Un documento pensado para imprimir es pequeño, denso y obliga a hacer zoom. Si usas fichas, que sean las que están pensadas para proyectar; las [fichas ELE para imprimir y proyectar](/material-ele/guia/fichas-ele-para-imprimir-y-proyectar) explican la diferencia.",
            "**Cambiar de herramienta cada diez minutos.** Una pizarra digital, un documento, un vídeo y un juego en cuatro programas distintos es una clase de informática.",
            "**Mostrar las respuestas sin querer.** Si el alumno ve la solución antes de contestar, el ejercicio no sirvió.",
            "**No dejar nada escrito.** Sin pizarra física, el alumno olvida lo que no está en el chat o en su cuaderno. Termina siempre con algo escrito.",
            "**Preparar cada clase desde cero.** Es el error que más horas cuesta. Un banco de clases y actividades por nivel, como el [banco de actividades de Material ELE](/material-ele/actividades), te deja preparar en diez minutos.",
          ] },
        ],
      },
    ],
    faq: [
      { question: "¿Qué necesito para dar clases de español online?", answer: "Una plataforma de videollamada que permita compartir una pestaña con sonido, un navegador con el material abierto en el orden de la clase y un material pensado para la pantalla compartida, con las respuestas ocultas para el alumno." },
      { question: "¿Cuánto debe durar una clase de español online?", answer: "Lo habitual son 45 o 60 minutos. Con 45 minutos y una secuencia fija (entrada, explicación, práctica, escucha, conversación y cierre) el alumno no pierde la atención y hay tiempo para que hable." },
      { question: "¿Qué material uso para clases de español online?", answer: "Material pensado para pantalla compartida: clases que ocupan la pantalla y avanzan contigo, ejercicios con soluciones que se abren a voluntad y preguntas de conversación por nivel. En Material ELE todo eso es gratis y sin registro, y hay tres clases de gramática completas gratis en cada nivel." },
      { question: "¿Cómo hago que el alumno hable más en una clase online?", answer: "Pregunta en segunda persona desde el primer minuto, da tareas con un motivo para hablar (juegos, roleplays, escenarios), espera antes de reformular y corrige al final del bloque, no en mitad de cada frase." },
    ],
    related: ["primera-clase-de-espanol", "preguntas-de-conversacion", "juegos-para-clase-de-espanol", "comprension-auditiva", "a1", "b1"],
  },
  {
    slug: "recursos-ele-gratis",
    path: `${GUIAS_PATH}/recursos-ele-gratis`,
    title: "Recursos ELE gratis: clases, fichas, ejercicios y audios por nivel",
    description:
      "Recursos ELE gratis y sin registro, ordenados por tipo y por nivel: clases completas, fichas, ejercicios con soluciones, preguntas de conversación y audios.",
    h1: "Recursos ELE gratis: qué hay, dónde está y cómo usarlo en clase",
    kicker: "Guía para profesores de ELE",
    intro:
      "Buscar recursos ELE gratis suele terminar en veinte pestañas abiertas y ninguna clase lista. Esta guía es un mapa: qué recursos gratuitos hay en Material ELE de SpanishCue, dónde está cada uno, para qué nivel sirve y cómo combinarlos para tener una clase completa sin pagar nada. Todo lo que aparece aquí se abre sin registro.",
    keywords: ["recursos ELE gratis", "material ELE gratis", "recursos para profesores de español gratis", "fichas ELE gratis", "clases de español gratis para profesores", "recursos de español para extranjeros"],
    published: "2026-11-04",
    lessonIds: [239, 332, 374, 390, 461, 28],
    sections: [
      {
        id: "mapa",
        title: "El mapa: seis tipos de recursos ELE gratis",
        blocks: [
          { type: "p", text: "Un profesor de ELE necesita, casi siempre, las mismas seis cosas: una **clase completa** para cuando no hay tiempo de preparar, **fichas** para una actividad suelta, **ejercicios con soluciones** para practicar una forma, **preguntas de conversación** para hacer hablar, **audios** para entrenar el oído y **guías** para pensar la clase. Material ELE tiene las seis gratis, organizadas por nivel y por tema." },
          { type: "ol", items: [
            `**Clases completas gratis**: ${free} clases interactivas, entre ellas tres de gramática en cada nivel de A1 a C2 y la Clase inicial.`,
            `**Fichas de actividades**: ${activities} fichas con consigna, pasos y respuesta modelo, en el [banco de actividades](/material-ele/actividades).`,
            `**Ejercicios con soluciones**: ${exercises} ejercicios por nivel y por tema, cada frase con su solución.`,
            `**Preguntas de conversación**: ${questions} preguntas ordenadas de A1 a C2.`,
            "**Audios y comprensión auditiva**: mensajes de voz con preguntas y una clase de escucha gratis.",
            "**Guías largas**: cómo preparar, dar y corregir una clase, con ejemplos por nivel.",
          ] },
          { type: "p", text: "Si quieres verlo todo en una sola lista, el [índice de Material ELE](/material-ele/indice) enumera cada página; si prefieres navegar por categoría, empieza por [gramática](/material-ele/gramatica), [vocabulario](/material-ele/vocabulario), [funciones](/material-ele/funciones), [cultura](/material-ele/cultura) o [formatos](/material-ele/formatos)." },
        ],
      },
      {
        id: "clases-gratis",
        title: "Clases completas gratis, nivel por nivel",
        blocks: [
          { type: "p", text: "Una clase completa es el recurso que más tiempo ahorra: trae explicación, práctica, audio, conversación y escritura en una secuencia de unos 45 minutos, con un modo profesor que oculta las respuestas en la pantalla del alumno. Estas son las de gramática que se abren gratis:" },
        ],
        subsections: [
          {
            title: "A1 y A2",
            blocks: [
              { type: "ul", items: [
                "A1: la [Clase inicial](/gramatica/clase-inicial) para la primera hora, [sustantivos](/la-fabrica-de-los-nombres), [adjetivos y concordancia](/el-atelier-de-la-concordancia) y [gustar y encantar](/gramatica/gustar-y-encantar).",
                "A2: [indefinido e imperfecto](/gramatica/indefinido-e-imperfecto), el imperativo afirmativo y [por y para](/gramatica/por-y-para-motivo-y-destino).",
              ] },
            ],
          },
          {
            title: "B1 y B2",
            blocks: [
              { type: "ul", items: [
                "B1: [deseos con «querer que» y «ojalá»](/gramatica/deseos-querer-que-esperar-que-ojala), [recomendaciones](/gramatica/recomendaciones-sugerir-que-aconsejar-que) y [condiciones reales con si](/gramatica/condiciones-reales-si-presente-y-futuro).",
                "B2: [como si](/gramatica/como-si-imperfecto-pluscuamperfecto-subjuntivo), [temporales con subjuntivo](/gramatica/temporales-con-subjuntivo-para-futuro-incierto) y [futuro y condicional de probabilidad](/gramatica/futuro-y-condicional-de-probabilidad).",
              ] },
            ],
          },
          {
            title: "C1 y C2",
            blocks: [
              { type: "ul", items: [
                "C1: [alternancia de indicativo y subjuntivo](/gramatica/alternancia-de-indicativo-y-subjuntivo-segun), [queísmo y dequeísmo](/gramatica/queismo-y-dequeismo-regimen-y-norma) y [pronombres átonos](/gramatica/pronombres-atonos-leismo-laismo-loismo-y).",
                "C2: [selección fina de indicativo y subjuntivo](/gramatica/seleccion-fina-de-indicativo-y-subjuntivo), una clase de registro y tratamiento, e [ironía, litotes y negación pragmática](/gramatica/ironia-litotes-y-negacion-pragmatica).",
              ] },
              { type: "p", text: "Todas siguen el mismo formato de siete pasos, descrito en [clases de gramática en vivo](/material-ele/formatos/clases-de-gramatica-en-vivo). Probar una del nivel de tu alumno es la forma más rápida de saber si el formato te sirve." },
            ],
          },
        ],
      },
      {
        id: "fichas-ejercicios",
        title: "Fichas y ejercicios gratis para una actividad suelta",
        blocks: [
          { type: "p", text: "Cuando ya tienes la clase y te falta una pieza, lo que necesitas es una ficha o un ejercicio. El [banco de actividades](/material-ele/actividades) tiene las dos cosas separadas por nivel." },
          { type: "ul", items: [
            "**Fichas de actividades**: cada una con objetivo, consigna, pasos y respuesta modelo. Se imprimen con el botón de PDF o se proyectan en pantalla compartida. La guía [fichas ELE para imprimir y proyectar](/material-ele/guia/fichas-ele-para-imprimir-y-proyectar) explica cuándo conviene cada formato.",
            "**Ejercicios con soluciones**: entre seis y diez frases sobre un solo punto, con la solución oculta hasta que el alumno la abre. Hay uno por nivel, como el de [ser, estar o hay en A1](/material-ele/ejercicio/a1), y uno por tema, como [ser y estar](/material-ele/ejercicio/ser-y-estar). La guía [ejercicios ELE con soluciones](/material-ele/guia/ejercicios-ele-con-soluciones) los lista todos con tres formas de corregirlos.",
          ] },
          { type: "p", text: "Cada tema de gramática tiene además su propia página con explicación, actividades y la clase recomendada: por ejemplo [ser y estar](/material-ele/ser-y-estar), [subjuntivo](/material-ele/subjuntivo) o [por y para](/material-ele/por-y-para)." },
        ],
      },
      {
        id: "conversacion",
        title: "Recursos gratis para hacer hablar al alumno",
        blocks: [
          { type: "p", text: "La conversación es la parte de la clase que más improvisamos y la que más se nota cuando falla. Tres recursos gratuitos para que no dependa de la inspiración del día:" },
          { type: "ol", items: [
            "**Preguntas de conversación por nivel.** Preguntas personales y de actualidad, de [A1](/material-ele/preguntas/a1) a [C2](/material-ele/preguntas/c2), que obligan a usar la gramática del nivel. Todas juntas en [preguntas de conversación](/material-ele/preguntas-de-conversacion).",
            "**Juegos de conversación.** Dinámicas con un motivo para hablar, explicadas en [juegos para la clase de español](/material-ele/juegos-para-clase-de-espanol) y en la guía [actividades de conversación para adultos](/material-ele/guia/actividades-de-conversacion-en-espanol-para-adultos).",
            "**Escenarios para recorrer.** La [demo gratis de Noche abierta](/demo/noche-abierta) es una ciudad 3D donde el alumno camina hasta cada local y conversa según su nivel; la clase de [Estados Unidos](/estados-unidos-a2-b1) también es gratis.",
          ] },
        ],
      },
      {
        id: "audio",
        title: "Audios y comprensión auditiva gratis",
        blocks: [
          { type: "p", text: "El audio es el recurso más difícil de encontrar gratis con calidad y con preguntas preparadas. En Material ELE hay dos entradas:" },
          { type: "ul", items: [
            "**Clase de escucha gratis**: [Latinoamérica al Oído](/latinoamerica-al-oido), una clase de escucha gratis con acentos de distintos países, pensada para A2.",
            "**Ejercicio de comprensión auditiva**: el [ejercicio de escucha](/material-ele/ejercicio/comprension-auditiva) es un mensaje de voz con seis preguntas y sus soluciones, más la página del tema [comprensión auditiva](/material-ele/comprension-auditiva) con actividades por nivel.",
          ] },
          { type: "p", text: "Las clases de gramática gratis también traen su propio audio en el paso «Escuchar», así que cada una sirve como recurso de escucha para su tema." },
        ],
      },
      {
        id: "combinar",
        title: "Cómo armar una clase completa solo con recursos gratis",
        blocks: [
          { type: "p", text: "Con lo anterior se puede dar una clase de 45 minutos sin pagar nada. Un ejemplo para B1, sobre recomendaciones:" },
          { type: "ol", items: [
            "**Entrada (5 minutos):** dos [preguntas de conversación B1](/material-ele/preguntas/b1) sobre un problema real del alumno.",
            "**Clase (30 minutos):** la clase gratis de [recomendaciones](/gramatica/recomendaciones-sugerir-que-aconsejar-que), en pantalla compartida y con el modo profesor.",
            "**Práctica extra (5 minutos):** el [ejercicio de subjuntivo](/material-ele/ejercicio/subjuntivo) con corrección en voz alta.",
            "**Cierre (5 minutos):** el alumno escribe en el chat tres consejos para un amigo que se muda a otro país.",
          ] },
          { type: "p", text: "La misma estructura funciona en cualquier nivel cambiando la clase y las preguntas. Si quieres el paso a paso para prepararla en poco tiempo, está en [cómo preparar una clase de español en 10 minutos](/material-ele/guia/preparar-una-clase-de-espanol-rapido); si la clase es por videollamada, en [cómo dar clases de español online](/material-ele/guia/como-dar-clases-de-espanol-online)." },
        ],
      },
      {
        id: "gratis-y-pro",
        title: "Qué es gratis y qué no",
        blocks: [
          { type: "p", text: "Para que no haya sorpresas: son gratis y sin registro todas las fichas, todos los ejercicios, todas las preguntas, las guías, las tres clases de gramática por nivel, la Clase inicial y las clases y demos marcadas como gratis. El resto de las clases interactivas, incluidos la mayoría de los mundos 3D y el resto de la gramática, son de la suscripción de SpanishCue, cuyos detalles están en [precios](/pricing)." },
          { type: "p", text: "Si estás comparando sitios de material ELE, la guía [materiales para enseñar español](/material-ele/guia/materiales-para-ensenar-espanol) repasa los principales y qué ofrece gratis cada uno." },
        ],
      },
    ],
    faq: [
      { question: "¿Dónde encuentro recursos ELE gratis?", answer: `En Material ELE de SpanishCue hay ${activities} fichas, ${exercises} ejercicios con soluciones, ${questions} preguntas de conversación, guías y ${free} clases interactivas gratis, todo sin registro y ordenado por nivel y tema.` },
      { question: "¿Hay clases de español completas gratis para profesores?", answer: "Sí. Tres clases de gramática por nivel, de A1 a C2, y la Clase inicial se abren gratis, con explicación, práctica, audio, conversación y escritura, y un modo profesor que oculta las respuestas." },
      { question: "¿Los recursos gratis se pueden imprimir?", answer: "Las fichas y los ejercicios tienen un botón para descargarlos en PDF. Las clases interactivas están pensadas para proyectar o compartir en pantalla." },
      { question: "¿Necesito registrarme para usar los recursos?", answer: "No. Todos los recursos gratis de Material ELE se abren sin cuenta. La cuenta solo hace falta para la suscripción y para guardar el progreso de tus alumnos." },
    ],
    related: ["preguntas-de-conversacion", "ser-y-estar", "subjuntivo", "comprension-auditiva", "a1", "b1"],
  },
  {
    slug: "como-ensenar-el-subjuntivo",
    path: `${GUIAS_PATH}/como-ensenar-el-subjuntivo`,
    title: "Cómo enseñar el subjuntivo en ELE: secuencia de B1 a C2 con clases",
    description:
      "Cómo enseñar el subjuntivo en clase de ELE paso a paso: qué va primero, cómo explicarlo sin listas eternas, errores típicos y clases y fichas gratis por nivel.",
    h1: "Cómo enseñar el subjuntivo en ELE: una secuencia que funciona de B1 a C2",
    kicker: "Guía para profesores de ELE",
    intro:
      "El subjuntivo es el tema que más miedo da a los alumnos y el que más tiempo nos hace dudar a los profesores: ¿por dónde empiezo?, ¿le doy la lista de verbos?, ¿cuándo paso al imperfecto? Esta guía propone una secuencia concreta, nivel por nivel, con una forma de explicarlo que no depende de memorizar listas, los errores que vas a ver en cada etapa y las clases, fichas y ejercicios de Material ELE que puedes usar en cada paso, muchos de ellos gratis y sin registro.",
    keywords: ["cómo enseñar el subjuntivo", "enseñar subjuntivo ELE", "subjuntivo para extranjeros", "actividades de subjuntivo", "subjuntivo B1", "presente de subjuntivo ejercicios", "secuencia didáctica subjuntivo"],
    published: "2026-11-05",
    lessonIds: [389, 390, 148, 393, 439, 468],
    sections: [
      {
        id: "idea",
        title: "La idea que ordena todo: el subjuntivo no informa, reacciona",
        blocks: [
          { type: "p", text: "Antes de cualquier tabla, el alumno necesita una idea que pueda aplicar en el momento de hablar. La más útil en clase es esta: **con el indicativo informo de algo; con el subjuntivo no lo presento como información, sino que reacciono ante ello, lo deseo, lo valoro, lo pido o lo pongo en duda**. «Sé que viene» informa; «quiero que venga», «me alegra que venga» o «no creo que venga» no informan de su llegada, la desean, la valoran o la niegan." },
          { type: "p", text: "Esta idea no explica cada caso del sistema, pero explica los suficientes para que el alumno deje de verlo como una lista arbitraria. Cuando aparezca un caso que no encaja, como las temporales de futuro, se presenta como un uso con su propia lógica: lo que todavía no ha pasado no se puede afirmar como hecho." },
          { type: "p", text: "Si quieres una explicación del tema lista para proyectar, la página de [subjuntivo](/material-ele/subjuntivo) de Material ELE resume los usos con ejemplos por nivel, y la guía [materiales para enseñar español](/material-ele/guia/materiales-para-ensenar-espanol) sitúa el tema dentro del resto del programa." },
        ],
      },
      {
        id: "secuencia",
        title: "La secuencia: qué enseñar en cada nivel",
        blocks: [
          { type: "p", text: "El error más común es querer enseñar todo el subjuntivo en una semana. Funciona mejor repartirlo en etapas cortas, cada una con una función comunicativa clara y una sola forma nueva. Esta es la secuencia que siguen las clases de gramática de SpanishCue:" },
        ],
        subsections: [
          {
            title: "A2: el primer contacto, sin nombrarlo",
            blocks: [
              { type: "p", text: "En A2 el alumno ya usa formas de subjuntivo sin saberlo: el [imperativo negativo](/material-ele/imperativo) («no hables», «no vengas») se forma con el presente de subjuntivo. No hace falta llamarlo así todavía; basta con que la forma le suene cuando llegue a B1." },
            ],
          },
          {
            title: "B1: presente de subjuntivo con funciones concretas",
            blocks: [
              { type: "p", text: "B1 es el nivel del presente de subjuntivo. El orden que mejor funciona es este:" },
              { type: "ol", items: [
                "**La forma**, con los verbos regulares primero y los irregulares después: [ficha de presente de subjuntivo](/material-ele/ficha/presente-de-subjuntivo).",
                "**Deseos**, porque es el uso más fácil de sentir: [querer que, esperar que, ojalá](/gramatica/deseos-querer-que-esperar-que-ojala).",
                "**Consejos y recomendaciones**, muy útiles en la vida real: [sugerir que, aconsejar que](/gramatica/recomendaciones-sugerir-que-aconsejar-que).",
                "**Valoraciones y emociones**: [es importante que](/material-ele/ficha/valoraciones-es-importante-que-es-bueno) y [me alegra que](/material-ele/ficha/emociones-y-reacciones-con-que-subjuntivo).",
                "**Opinión afirmada y negada**, el contraste clave del nivel: [creo que / no creo que](/material-ele/ficha/opinion-afirmativa-frente-a-opinion-negada).",
                "**Mismo sujeto u otro sujeto**: [quiero ir / quiero que vayas](/material-ele/ficha/infinitivo-o-que-subjuntivo-mismo-sujeto).",
              ] },
              { type: "p", text: "Al final del nivel entra el [perfecto de subjuntivo](/material-ele/ficha/preterito-perfecto-subjuntivo) para valorar algo que ya pasó: «me alegra que hayas venido»." },
            ],
          },
          {
            title: "B2: el imperfecto y las oraciones complejas",
            blocks: [
              { type: "p", text: "En B2 aparece el [imperfecto de subjuntivo](/material-ele/ficha/preterito-imperfecto-subjuntivo) y, con él, la concordancia en pasado: «me pidió que lo llamara». Después vienen las [temporales con subjuntivo](/gramatica/temporales-con-subjuntivo-para-futuro-incierto) («cuando llegues»), las condicionales irreales con [si + imperfecto de subjuntivo](/material-ele/ficha/si-fuera-distinto), las concesivas con [aunque](/material-ele/ficha/aunque-cambie-el-dato) y [como si](/gramatica/como-si-imperfecto-pluscuamperfecto-subjuntivo)." },
            ],
          },
          {
            title: "C1 y C2: elegir según la intención",
            blocks: [
              { type: "p", text: "En los niveles superiores ya no se enseñan formas nuevas sino elecciones: la [alternancia de indicativo y subjuntivo según la postura](/gramatica/alternancia-de-indicativo-y-subjuntivo-segun) del hablante, el subjuntivo en [relativas no específicas](/material-ele/ficha/subjuntivo-en-relativas-no-especificas-y), la [concordancia temporal en contextos complejos](/material-ele/ficha/subjuntivo-pais-maravillas) y, en C2, la [selección fina según la perspectiva](/gramatica/seleccion-fina-de-indicativo-y-subjuntivo)." },
            ],
          },
        ],
      },
      {
        id: "explicar",
        title: "Cómo explicarlo en clase sin listas eternas",
        blocks: [
          { type: "p", text: "Las listas de verbos que «llevan subjuntivo» tienen un problema: el alumno las memoriza para el examen y las olvida al hablar. Tres técnicas que funcionan mejor:" },
          { type: "ol", items: [
            "**Contrastar pares mínimos.** Pon en la pantalla «Creo que viene» y «No creo que venga», o «Sé que está» y «Espero que esté». Pregunta qué cambia en la intención, no en la forma. El alumno descubre la regla y la recuerda mejor.",
            "**Partir de una situación real.** Un amigo se muda a otro país: ¿qué le aconsejas?, ¿qué esperas?, ¿qué te preocupa? Las frases salen solas con subjuntivo y el alumno ve para qué sirve.",
            "**Una función por clase.** Deseos un día, consejos otro, valoraciones otro. Mezclarlo todo el primer día es la receta para que el alumno sienta que «el subjuntivo es imposible».",
          ] },
          { type: "p", text: "Las clases interactivas siguen este orden: primero la teoría en pantalla, después ejemplos con contraste, práctica guiada, audio y una producción final. El formato completo está explicado en [clases de gramática en vivo](/material-ele/formatos/clases-de-gramatica-en-vivo)." },
        ],
      },
      {
        id: "errores",
        title: "Los errores típicos en cada etapa",
        blocks: [
          { type: "p", text: "Saber qué error va a aparecer ayuda a corregirlo sin cortar la conversación. Los más frecuentes:" },
          { type: "ul", items: [
            "**«Quiero que voy».** El alumno conoce la regla pero no tiene la forma automatizada. Solución: práctica corta y frecuente de la forma antes de la función, por ejemplo con el [ejercicio de subjuntivo](/material-ele/ejercicio/subjuntivo).",
            "**«Creo que venga».** Generaliza el subjuntivo a toda oración con «que». Solución: el contraste afirmado/negado con pares mínimos.",
            "**«Quiero que yo vaya».** No distingue mismo sujeto y otro sujeto. Solución: dibujar dos personas en la pizarra y preguntar quién hace la acción.",
            "**«Cuando llegaré».** Traslada el futuro de su lengua a las temporales. Solución: presentar «cuando + subjuntivo» como la forma normal de hablar de un futuro que todavía no es un hecho.",
            "**«Me pidió que lo llame».** Concordancia en pasado en B2. Solución: trabajar la concordancia con historias contadas en pasado, no con frases sueltas.",
          ] },
          { type: "p", text: "La guía [ejercicios ELE con soluciones](/material-ele/guia/ejercicios-ele-con-soluciones) propone tres formas de corregir estos errores en clase sin que el alumno se bloquee." },
        ],
      },
      {
        id: "practica",
        title: "Actividades para practicar el subjuntivo",
        blocks: [
          { type: "p", text: "La práctica controlada es necesaria, pero el subjuntivo se fija cuando el alumno lo necesita para decir algo. Algunas actividades que funcionan en clase individual y en grupo:" },
          { type: "ul", items: [
            "**Consultorio sentimental.** Cada alumno escribe un problema; el otro responde con tres consejos («te recomiendo que…», «es mejor que…»).",
            "**Deseos para el año.** Cinco deseos personales con «ojalá» y «espero que», y una pregunta de seguimiento para cada uno.",
            "**Debate con «no creo que».** Una afirmación polémica y la obligación de responder con opinión negada antes de dar la propia.",
            "**Instrucciones para el futuro.** «Cuando llegues a casa…», «antes de que te vayas…»: el alumno prepara instrucciones para alguien que va a cuidar su casa.",
          ] },
          { type: "p", text: "Hay más dinámicas en el [banco de actividades](/material-ele/actividades) y preguntas listas para B1 en [preguntas de conversación](/material-ele/preguntas-de-conversacion). Si prefieres material para imprimir, en [fichas de gramática](/material-ele/fichas) hay una ficha por clase, con soluciones." },
        ],
      },
      {
        id: "clase-ejemplo",
        title: "Una clase de 45 minutos de ejemplo (B1, deseos)",
        blocks: [
          { type: "p", text: "Para la primera clase de subjuntivo en B1, esta secuencia deja al alumno usando la forma en una conversación real:" },
          { type: "ol", items: [
            "**Entrada (5 minutos):** «¿Qué quieres hacer este año?». Respuestas con infinitivo, sin corregir nada.",
            "**Contraste (5 minutos):** «Quiero viajar» frente a «Quiero que mi hermano viaje conmigo». ¿Qué cambia?",
            "**Clase (25 minutos):** la clase gratis de [deseos con querer que, esperar que y ojalá](/gramatica/deseos-querer-que-esperar-que-ojala), con el modo profesor en pantalla compartida.",
            "**Producción (10 minutos):** cinco deseos para alguien importante, con una pregunta de seguimiento para cada uno.",
          ] },
          { type: "p", text: "Si la clase es por videollamada, la guía [cómo dar clases de español online](/material-ele/guia/como-dar-clases-de-espanol-online) explica cómo preparar la pantalla; si tienes poco tiempo, [cómo preparar una clase de español en 10 minutos](/material-ele/guia/preparar-una-clase-de-espanol-rapido) da el paso a paso." },
        ],
      },
      {
        id: "gratis",
        title: "Qué material de subjuntivo es gratis",
        blocks: [
          { type: "p", text: "Se abren gratis y sin registro las clases de [deseos](/gramatica/deseos-querer-que-esperar-que-ojala) y [recomendaciones](/gramatica/recomendaciones-sugerir-que-aconsejar-que) de B1, las de [temporales con subjuntivo](/gramatica/temporales-con-subjuntivo-para-futuro-incierto) y [como si](/gramatica/como-si-imperfecto-pluscuamperfecto-subjuntivo) de B2, la de alternancia de C1 y la de selección fina de C2. También son gratis todas las fichas, ejercicios y preguntas. El resto de clases de subjuntivo forman parte de la suscripción, cuyos detalles están en [precios](/pricing), y cada una tiene una ficha de muestra gratis." },
          { type: "p", text: "Para ver todo lo gratuito ordenado por tipo y nivel, consulta la guía [recursos ELE gratis](/material-ele/guia/recursos-ele-gratis)." },
        ],
      },
    ],
    faq: [
      { question: "¿En qué nivel se enseña el subjuntivo?", answer: "El presente de subjuntivo se enseña en B1, con funciones como deseos, consejos, valoraciones y opinión negada. El imperfecto y las oraciones complejas llegan en B2, y en C1 y C2 se trabaja la elección entre indicativo y subjuntivo según la intención." },
      { question: "¿Cuál es la mejor forma de explicar el subjuntivo?", answer: "Partir de una idea general (el indicativo informa; el subjuntivo desea, valora, pide o duda) y contrastar pares mínimos como «creo que viene» y «no creo que venga», enseñando una función por clase en lugar de una lista de verbos." },
      { question: "¿Qué se enseña primero, la forma o el uso?", answer: "La forma regular del presente de subjuntivo va primero, en una sesión corta, y enseguida se aplica a una función concreta como los deseos. Los irregulares se incorporan poco a poco en las clases siguientes." },
      { question: "¿Hay clases de subjuntivo gratis?", answer: "Sí. En Material ELE de SpanishCue hay clases gratis de subjuntivo en B1, B2, C1 y C2, además de fichas, ejercicios con soluciones y preguntas de conversación, todo sin registro." },
    ],
    related: ["subjuntivo", "b1", "b2", "c1"],
  },
  {
    slug: "como-ensenar-ser-y-estar",
    path: `${GUIAS_PATH}/como-ensenar-ser-y-estar`,
    title: "Cómo enseñar ser y estar en ELE: secuencia de A1 a B1 con fichas",
    description:
      "Cómo enseñar ser y estar paso a paso: qué va primero, una regla que el alumno puede usar al hablar, errores típicos, actividades y fichas gratis de A1 a B1.",
    h1: "Cómo enseñar ser y estar en ELE: una secuencia clara de A1 a B1",
    kicker: "Guía para profesores de ELE",
    intro:
      "Ser y estar es el primer gran problema de gramática de casi cualquier alumno de español, y uno de los que más vuelve. Las listas de usos («ser para profesión, origen, material, hora…») sirven para un examen, pero no ayudan a decidir en medio de una frase. Esta guía propone una secuencia concreta de A1 a B1, una idea que el alumno puede aplicar al hablar, los errores que vas a ver en cada etapa y las clases, fichas y ejercicios de Material ELE para cada paso, gratis y sin registro.",
    keywords: ["cómo enseñar ser y estar", "ser y estar ELE", "ser y estar para extranjeros", "actividades ser y estar", "ser y estar A1", "diferencia entre ser y estar", "fichas ser y estar"],
    published: "2026-11-06",
    lessonIds: [239, 311, 312, 48, 375, 537],
    sections: [
      {
        id: "idea",
        title: "La idea que ordena todo: qué es algo frente a cómo está o dónde está",
        blocks: [
          { type: "p", text: "Antes de cualquier lista, el alumno necesita una pregunta que pueda hacerse en el momento de hablar. La más útil en clase es esta: **¿estoy diciendo qué es algo o quién es alguien, o estoy diciendo cómo está o dónde está?** «Ana es médica» dice quién es Ana; «Ana está cansada» dice cómo está hoy; «Ana está en el hospital» dice dónde está." },
          { type: "p", text: "Esta idea no cubre todos los casos, pero cubre los suficientes para que el alumno deje de adivinar. Los casos que no encajan, como «la fiesta es en mi casa» o «está muerto», se presentan después como excepciones con su propia lógica, nunca el primer día." },
          { type: "p", text: "Evita la explicación de «permanente frente a temporal». Es intuitiva, pero falla pronto: «es joven» no es permanente y «está muerto» no es temporal. El alumno que la aprende tiene que desaprenderla en A2. La página de [ser y estar](/material-ele/ser-y-estar) de Material ELE resume los usos con ejemplos listos para proyectar." },
        ],
      },
      {
        id: "secuencia",
        title: "La secuencia: qué enseñar en cada nivel",
        blocks: [
          { type: "p", text: "El error más común es presentar ser y estar juntos y completos en una sola clase. Funciona mejor separarlos y juntarlos después, con una función nueva en cada paso. Esta es la secuencia de las clases de gramática de SpanishCue:" },
        ],
        subsections: [
          {
            title: "Primera clase: presentarse con ser",
            blocks: [
              { type: "p", text: "La [Clase inicial](/gramatica/clase-inicial) arranca con «soy», «me llamo» y «soy de…». El alumno usa ser antes de saber que hay otro verbo, y eso está bien: primero necesita frases que funcionen." },
            ],
          },
          {
            title: "A1: ser, estar y hay por separado",
            blocks: [
              { type: "ol", items: [
                "**Ser para identidad, profesión y origen**: [ficha de ser](/material-ele/ficha/ser-identidad-y-origen).",
                "**Estar para estados y lugares**: [ficha de estar](/material-ele/ficha/estar-estados-y-lugares). Estados de ánimo y ubicación de personas y cosas conocidas.",
                "**Hay frente a estar**: [ficha de hay y estar](/material-ele/ficha/la-ciudad-de-los-motores). «Hay un banco en la plaza» frente a «el banco está en la plaza».",
                "**El presente irregular**: [ser, estar, ir y tener](/material-ele/ficha/presente-irregular-ser-estar-ir-tener), para que la forma no frene el uso.",
              ] },
              { type: "p", text: "Al final de A1 entra [estar + gerundio](/material-ele/ficha/estar-gerundio) para hablar de lo que está pasando ahora." },
            ],
          },
          {
            title: "A2: describir personas y cosas",
            blocks: [
              { type: "p", text: "En A2 se juntan los dos verbos para describir: «es alto, pero hoy está muy serio», «lleva una camisa azul». La ficha de [ser, estar y llevar para descripciones](/material-ele/ficha/ser-estar-y-llevar-para-descripciones) trabaja este contraste con fotos y personas reales." },
            ],
          },
          {
            title: "B1: participios y adjetivos que cambian de significado",
            blocks: [
              { type: "p", text: "En B1 llegan [estar + participio](/material-ele/ficha/estar-participio-para-estados-resultantes) («la puerta está cerrada»), la [diferencia entre ser + participio y estar + participio](/material-ele/ficha/diferencia-entre-ser-participio-y-estar) y los [adjetivos que cambian de significado](/material-ele/ficha/ser-y-estar-con-adjetivos-que-cambian-de-significado): ser listo y estar listo, ser rico y estar rico, ser aburrido y estar aburrido." },
            ],
          },
        ],
      },
      {
        id: "explicar",
        title: "Cómo explicarlo en clase sin listas de usos",
        blocks: [
          { type: "p", text: "Tres técnicas que funcionan mejor que la lista de usos:" },
          { type: "ol", items: [
            "**Pares mínimos.** «Es nervioso» frente a «está nervioso», «es aburrido» frente a «está aburrido». Pregunta qué cambia en la persona, no en el verbo. El alumno descubre la diferencia y la recuerda.",
            "**Una persona real.** Pide al alumno que describa a alguien de su familia: cómo es y cómo está esta semana. Ser y estar salen en la misma frase, con un motivo real.",
            "**Un mapa.** Para hay y estar, un plano del barrio en la pantalla: qué hay en la plaza y dónde está la farmacia. Es la forma más rápida de que el contraste se vea.",
          ] },
          { type: "p", text: "Las clases interactivas siguen este orden: teoría en pantalla, ejemplos con contraste, práctica guiada, audio y una producción final. El formato está explicado en [clases de gramática en vivo](/material-ele/formatos/clases-de-gramatica-en-vivo)." },
        ],
      },
      {
        id: "errores",
        title: "Los errores típicos en cada etapa",
        blocks: [
          { type: "p", text: "Saber qué error va a aparecer ayuda a corregirlo sin cortar la conversación:" },
          { type: "ul", items: [
            "**«Estoy profesor».** Usa estar para la profesión, a menudo por influencia de su lengua. Solución: la pregunta «¿qué es o cómo está?» y un ejercicio corto de presentarse.",
            "**«Soy en casa».** Usa ser para la ubicación. Solución: el mapa del barrio y la regla «dónde está = estar».",
            "**«Hay el banco en la plaza».** Usa hay con algo ya conocido. Solución: el contraste hay + un/una frente a el/la + está.",
            "**«Es cansado».** Confunde una característica con un estado. Solución: pares mínimos con adjetivos de ánimo.",
            "**«La fiesta está en mi casa».** El caso de los eventos. Solución: presentarlo como excepción en A2, con ejemplos de conciertos, reuniones y clases.",
          ] },
          { type: "p", text: "El [ejercicio de ser y estar](/material-ele/ejercicio/ser-y-estar) y el [ejercicio de A1](/material-ele/ejercicio/a1) sirven para practicar estos puntos con soluciones. La guía [ejercicios ELE con soluciones](/material-ele/guia/ejercicios-ele-con-soluciones) propone tres formas de corregirlos sin bloquear al alumno." },
        ],
      },
      {
        id: "practica",
        title: "Actividades para practicar ser y estar",
        blocks: [
          { type: "p", text: "La práctica controlada fija la forma; la conversación fija la elección. Actividades que funcionan en clase individual y en grupo:" },
          { type: "ul", items: [
            "**¿Quién es?** El alumno describe a un famoso con ser (profesión, origen, carácter) y el otro adivina.",
            "**Hoy estoy…** Cada clase empieza con «hoy estoy… porque…». Dos minutos, todos los días, y estar se automatiza.",
            "**El piso ideal.** Qué hay en el piso y dónde está cada cosa, con un plano dibujado en la pantalla.",
            "**Antes y ahora.** Una foto de alguien hace diez años y hoy: cómo era, cómo es y cómo está.",
          ] },
          { type: "p", text: "Hay más dinámicas en el [banco de actividades](/material-ele/actividades) y preguntas listas para el nivel en [preguntas de conversación de A1](/material-ele/preguntas/a1). Si prefieres material para imprimir, en [fichas de gramática](/material-ele/fichas) hay una ficha por clase, con soluciones." },
        ],
      },
      {
        id: "clase-ejemplo",
        title: "Una clase de 45 minutos de ejemplo (A1, ser y estar)",
        blocks: [
          { type: "p", text: "Para la primera clase que junta los dos verbos en A1, esta secuencia deja al alumno eligiendo con criterio:" },
          { type: "ol", items: [
            "**Entrada (5 minutos):** «¿Cómo estás hoy?» y «¿De dónde eres?». Respuestas libres, sin corregir.",
            "**Contraste (10 minutos):** tres pares mínimos en la pantalla y la pregunta «¿qué es o cómo está?».",
            "**Práctica (15 minutos):** la [ficha de estar](/material-ele/ficha/estar-estados-y-lugares), con corrección en voz alta.",
            "**Producción (15 minutos):** el alumno describe a una persona de su familia, cómo es y cómo está esta semana, y el profesor hace dos preguntas de seguimiento.",
          ] },
          { type: "p", text: "Si la clase es por videollamada, la guía [cómo dar clases de español online](/material-ele/guia/como-dar-clases-de-espanol-online) explica cómo preparar la pantalla; si tienes poco tiempo, [cómo preparar una clase de español en 10 minutos](/material-ele/guia/preparar-una-clase-de-espanol-rapido) da el paso a paso." },
        ],
      },
      {
        id: "gratis",
        title: "Qué material de ser y estar es gratis",
        blocks: [
          { type: "p", text: "Se abren gratis y sin registro la [Clase inicial](/gramatica/clase-inicial), todas las fichas de esta guía, el ejercicio de ser y estar y las preguntas de conversación. Las clases interactivas completas de ser y estar forman parte de la suscripción, cuyos detalles están en [precios](/pricing), y cada una tiene su ficha abierta con teoría y ejercicios." },
          { type: "p", text: "Si estás preparando también el resto del nivel, la página de [A1](/material-ele/a1) ordena todo el material del nivel, y la guía [recursos ELE gratis](/material-ele/guia/recursos-ele-gratis) reúne todo lo gratuito por tipo. Para el siguiente gran tema, sigue con [cómo enseñar el subjuntivo](/material-ele/guia/como-ensenar-el-subjuntivo)." },
        ],
      },
    ],
    faq: [
      { question: "¿En qué nivel se enseña ser y estar?", answer: "Desde A1. Primero ser para identidad y origen, después estar para estados y lugares y el contraste entre hay y estar. En A2 se juntan para describir, y en B1 llegan estar + participio y los adjetivos que cambian de significado." },
      { question: "¿Cuál es la mejor forma de explicar ser y estar?", answer: "Con una pregunta que el alumno pueda hacerse al hablar: ¿digo qué es algo, o cómo está o dónde está? Funciona mejor que la regla de permanente y temporal, que falla con ejemplos como «es joven» o «está muerto»." },
      { question: "¿Cómo se explica la diferencia entre hay y estar?", answer: "Hay presenta algo nuevo, con un, una o sin artículo: «hay un banco en la plaza». Estar ubica algo ya conocido, con el o la: «el banco está en la plaza». Un plano del barrio en la pantalla es la forma más rápida de practicarlo." },
      { question: "¿Hay fichas de ser y estar gratis?", answer: "Sí. En Material ELE de SpanishCue hay fichas gratis de ser, estar, hay y estar, descripciones y adjetivos que cambian de significado, con soluciones y sin registro, además de un ejercicio de ser y estar y preguntas de conversación." },
    ],
    related: ["ser-y-estar", "a1", "a2", "b1"],
  },
  {
    slug: "como-ensenar-indefinido-e-imperfecto",
    path: `${GUIAS_PATH}/como-ensenar-indefinido-e-imperfecto`,
    title: "Cómo enseñar indefinido e imperfecto en ELE: secuencia A2–B1",
    description:
      "Cómo enseñar el pretérito indefinido y el imperfecto paso a paso: qué va primero, cómo explicar el contraste, errores típicos, actividades y fichas gratis.",
    h1: "Cómo enseñar el indefinido y el imperfecto en ELE: una secuencia de A2 a B1",
    kicker: "Guía para profesores de ELE",
    intro:
      "El contraste entre el pretérito indefinido y el imperfecto es el gran tema de A2 y uno de los que más tiempo de clase consume en B1. Las reglas de «acción terminada frente a acción habitual» ayudan al principio, pero se quedan cortas cuando el alumno empieza a contar historias de verdad. Esta guía propone una secuencia concreta, una forma de explicar el contraste que funciona al narrar, los errores que vas a ver en cada etapa y las clases, fichas y ejercicios de Material ELE para cada paso, muchos gratis y sin registro.",
    keywords: ["cómo enseñar indefinido e imperfecto", "indefinido e imperfecto ELE", "contraste pasados español", "actividades indefinido imperfecto", "pretérito indefinido A2", "imperfecto ejercicios", "secuencia didáctica pasados"],
    published: "2026-11-10",
    lessonIds: [350, 142, 348, 143, 141, 18],
    sections: [
      {
        id: "idea",
        title: "La idea que ordena todo: la historia y el escenario",
        blocks: [
          { type: "p", text: "Antes de cualquier tabla, el alumno necesita una imagen que pueda usar al contar. La más útil en clase es la de una película: **el indefinido cuenta lo que pasa, los hechos que hacen avanzar la historia; el imperfecto describe el escenario, cómo eran las cosas mientras tanto**. «Ana llegó a casa, abrió la puerta y vio a su hermano» avanza; «era tarde, llovía y no había nadie en la calle» pinta el fondo." },
          { type: "p", text: "Esta idea funciona mejor que «terminado frente a no terminado», porque «vivió diez años en Madrid» está terminado y también dura mucho. El alumno que piensa en hechos que avanzan y en fondo que describe elige bien en la mayoría de las frases que va a decir en clase." },
          { type: "p", text: "La página de [indefinido e imperfecto](/material-ele/indefinido-e-imperfecto) de Material ELE resume los usos con ejemplos listos para proyectar, y la de [pretérito perfecto](/material-ele/preterito-perfecto) cubre el tercer pasado que el alumno ya conoce." },
        ],
      },
      {
        id: "secuencia",
        title: "La secuencia: qué enseñar en cada paso",
        blocks: [
          { type: "p", text: "El error más común es presentar las dos formas y el contraste en la misma semana. Funciona mejor separar las formas, automatizarlas y juntarlas después. Esta es la secuencia de las clases de gramática de SpanishCue:" },
        ],
        subsections: [
          {
            title: "Antes: el pretérito perfecto",
            blocks: [
              { type: "p", text: "Muchos programas empiezan los pasados con el [pretérito perfecto para experiencias](/material-ele/ficha/preterito-perfecto-compuesto-indicativo) («¿has estado en México?»), porque se forma con un verbo que el alumno ya conoce. Más adelante conviene mostrar la [variación regional entre perfecto e indefinido](/material-ele/ficha/perfecto-e-indefinido-variacion), sobre todo si el alumno escucha español de América." },
            ],
          },
          {
            title: "A2: las formas, una por una",
            blocks: [
              { type: "ol", items: [
                "**Indefinido regular**: [ficha del indefinido regular](/material-ele/ficha/preterito-perfecto-simple-indicativo), con marcadores como ayer, el año pasado, en 2019.",
                "**Indefinido irregular de alta frecuencia**: [ficha de irregulares](/material-ele/ficha/indefinido-irregular). Fui, tuve, hice, estuve, dije: pocos verbos, mucho uso.",
                "**Imperfecto para hábitos y descripciones**: [ficha del imperfecto](/material-ele/ficha/preterito-imperfecto-indicativo). «Cuando era pequeño, vivía en el campo y jugaba en la calle».",
              ] },
            ],
          },
          {
            title: "A2: el contraste",
            blocks: [
              { type: "p", text: "Con las tres formas automatizadas llega el contraste: la clase gratis de [indefinido e imperfecto](/gramatica/indefinido-e-imperfecto), evento y contexto. Después, la ficha de [duración y frecuencia en pasado](/material-ele/ficha/expresar-duracion-y-frecuencia-en-pasado) («estuve dos horas», «iba todos los días»)." },
            ],
          },
          {
            title: "B1: contar con intención",
            blocks: [
              { type: "p", text: "En B1 se repasan los pasados para contar historias con intención, en la ficha de [revisión de pasados](/material-ele/ficha/past-b1), y entra el [pluscuamperfecto](/material-ele/ficha/preterito-pluscuamperfecto-indicativo) para lo que había pasado antes: «cuando llegué, la película ya había empezado»." },
            ],
          },
        ],
      },
      {
        id: "explicar",
        title: "Cómo explicarlo en clase sin listas de marcadores",
        blocks: [
          { type: "p", text: "Las listas de marcadores («ayer va con indefinido, siempre va con imperfecto») funcionan hasta que aparece «ayer hacía mucho frío». Tres técnicas que funcionan mejor:" },
          { type: "ol", items: [
            "**La línea del tiempo.** Dibuja una línea larga para el escenario (imperfecto) y puntos encima para los hechos (indefinido). «Llovía» es la línea; «sonó el teléfono» es el punto.",
            "**La misma historia, dos versiones.** Cuenta una anécdota solo con indefinido y pregunta qué falta. Después añade el imperfecto y el alumno ve que la historia «se ve».",
            "**Pares mínimos.** «Iba al gimnasio» frente a «fui al gimnasio», «tenía un perro» frente a «tuve un perro». Pregunta qué cambia en lo que imagina el oyente.",
          ] },
          { type: "p", text: "Las clases interactivas siguen este orden: teoría en pantalla, ejemplos con contraste, práctica guiada, audio y una producción final. El formato está explicado en [clases de gramática en vivo](/material-ele/formatos/clases-de-gramatica-en-vivo)." },
        ],
      },
      {
        id: "errores",
        title: "Los errores típicos en cada etapa",
        blocks: [
          { type: "p", text: "Saber qué error va a aparecer ayuda a corregirlo sin cortar la historia:" },
          { type: "ul", items: [
            "**«Yo fue», «él hací».** Formas sin automatizar. Solución: práctica corta y diaria de la forma antes del contraste, por ejemplo con el [ejercicio de A2](/material-ele/ejercicio/a2).",
            "**«Ayer estaba en el cine y vi una película» para un hecho cerrado.** Usa el imperfecto para todo lo que «dura». Solución: la línea del tiempo y la pregunta «¿hace avanzar la historia?».",
            "**«Cuando fui pequeño…».** Usa el indefinido para una etapa de la vida. Solución: presentar «cuando era…» como bloque fijo desde el primer día.",
            "**Todo en indefinido.** El alumno cuenta una lista de hechos sin escenario. Solución: pedir siempre dos frases de fondo antes de empezar la historia.",
            "**«Ya empezó cuando llegué».** Falta el pluscuamperfecto en B1. Solución: dos hechos en la línea del tiempo y la pregunta «¿cuál pasó antes?».",
          ] },
          { type: "p", text: "El [ejercicio de indefinido e imperfecto](/material-ele/ejercicio/indefinido-e-imperfecto) practica estos puntos con soluciones. La guía [ejercicios ELE con soluciones](/material-ele/guia/ejercicios-ele-con-soluciones) propone tres formas de corregirlos sin bloquear al alumno." },
        ],
      },
      {
        id: "practica",
        title: "Actividades para practicar los pasados",
        blocks: [
          { type: "p", text: "La práctica controlada fija la forma; contar historias fija la elección. Actividades que funcionan en clase individual y en grupo:" },
          { type: "ul", items: [
            "**Mi primer día.** El primer día de trabajo, de colegio o en otro país: dos frases de escenario y tres hechos.",
            "**La foto antigua.** Una foto de la infancia del alumno: cómo era todo (imperfecto) y qué pasó ese día (indefinido).",
            "**Historia en cadena.** El profesor da el escenario; el alumno añade un hecho; el profesor añade otro; y así hasta un final.",
            "**El interrogatorio.** «¿Qué hacías ayer a las ocho?» y «¿qué pasó después?»: el alumno defiende su coartada con los dos pasados.",
          ] },
          { type: "p", text: "Hay más dinámicas en el [banco de actividades](/material-ele/actividades) y preguntas listas para el nivel en [preguntas de conversación de A2](/material-ele/preguntas/a2). Si prefieres material para imprimir, en [fichas de gramática](/material-ele/fichas) hay una ficha por clase, con soluciones." },
        ],
      },
      {
        id: "clase-ejemplo",
        title: "Una clase de 45 minutos de ejemplo (A2, contraste)",
        blocks: [
          { type: "p", text: "Para la primera clase de contraste en A2, esta secuencia deja al alumno contando una historia con los dos pasados:" },
          { type: "ol", items: [
            "**Entrada (5 minutos):** «¿Qué hiciste el fin de semana?». Respuestas libres, sin corregir.",
            "**Contraste (5 minutos):** la misma anécdota en dos versiones, solo hechos y con escenario. ¿Qué cambia?",
            "**Clase (25 minutos):** la clase gratis de [indefinido e imperfecto](/gramatica/indefinido-e-imperfecto), con el modo profesor en pantalla compartida.",
            "**Producción (10 minutos):** el alumno cuenta su primer día en un trabajo o en un país nuevo, con dos frases de escenario y tres hechos.",
          ] },
          { type: "p", text: "Si la clase es por videollamada, la guía [cómo dar clases de español online](/material-ele/guia/como-dar-clases-de-espanol-online) explica cómo preparar la pantalla; si tienes poco tiempo, [cómo preparar una clase de español en 10 minutos](/material-ele/guia/preparar-una-clase-de-espanol-rapido) da el paso a paso." },
        ],
      },
      {
        id: "gratis",
        title: "Qué material de pasados es gratis",
        blocks: [
          { type: "p", text: "Se abre gratis y sin registro la clase interactiva de [indefinido e imperfecto](/gramatica/indefinido-e-imperfecto), con su ficha completa de doce ejercicios, además de todas las fichas de esta guía, el ejercicio de indefinido e imperfecto y las preguntas de conversación. El resto de clases de pasados forman parte de la suscripción, cuyos detalles están en [precios](/pricing), y cada una tiene su ficha abierta." },
          { type: "p", text: "Para preparar el resto del nivel, la página de [A2](/material-ele/a2) ordena todo el material, y la guía [recursos ELE gratis](/material-ele/guia/recursos-ele-gratis) reúne lo gratuito por tipo. Las guías anteriores de esta serie son [cómo enseñar ser y estar](/material-ele/guia/como-ensenar-ser-y-estar) y [cómo enseñar el subjuntivo](/material-ele/guia/como-ensenar-el-subjuntivo)." },
        ],
      },
    ],
    faq: [
      { question: "¿En qué nivel se enseña el contraste entre indefinido e imperfecto?", answer: "En A2. Primero se enseñan las formas por separado (indefinido regular, irregulares frecuentes e imperfecto) y después el contraste. En B1 se repasa para contar historias con intención y se añade el pluscuamperfecto." },
      { question: "¿Cuál es la mejor forma de explicar la diferencia?", answer: "Con la imagen de una película: el indefinido cuenta los hechos que hacen avanzar la historia y el imperfecto describe el escenario. Funciona mejor que «terminado frente a no terminado», que falla con frases como «vivió diez años en Madrid»." },
      { question: "¿Qué se enseña primero, el indefinido o el imperfecto?", answer: "Lo más habitual es empezar por el indefinido regular y los irregulares frecuentes, porque sirven para contar qué hiciste. El imperfecto llega después para hábitos y descripciones, y el contraste cuando las tres formas ya salen sin esfuerzo." },
      { question: "¿Hay una clase gratis de indefinido e imperfecto?", answer: "Sí. La clase interactiva de indefinido e imperfecto de SpanishCue se abre gratis, con su ficha completa, y en Material ELE hay fichas, un ejercicio con soluciones y preguntas de conversación, todo sin registro." },
    ],
    related: ["indefinido-e-imperfecto", "preterito-perfecto", "a2", "b1"],
  },
  {
    slug: "como-ensenar-por-y-para",
    path: `${GUIAS_PATH}/como-ensenar-por-y-para`,
    title: "Cómo enseñar por y para en ELE: secuencia de A1 a B1 con fichas",
    description:
      "Cómo enseñar por y para paso a paso: una idea que el alumno puede usar al hablar, qué va en cada nivel, errores típicos, actividades y una clase gratis de A2.",
    h1: "Cómo enseñar por y para en ELE: una secuencia clara de A1 a B1",
    kicker: "Guía para profesores de ELE",
    intro:
      "Por y para es el error de preposición que más se repite en clase de español, y uno de los que más dura: hay alumnos de C1 que todavía dudan entre «gracias por» y «gracias para». Las listas de usos tienen diez o doce entradas por preposición y no ayudan a decidir en medio de una frase. Esta guía propone una secuencia concreta de A1 a B1, una idea que el alumno puede aplicar al hablar, los errores que vas a ver en cada etapa y las clases, fichas y ejercicios de Material ELE para cada paso, con una clase completa gratis.",
    keywords: ["cómo enseñar por y para", "por y para ELE", "por y para para extranjeros", "actividades por y para", "diferencia entre por y para", "ejercicios por y para", "fichas por y para"],
    published: "2026-11-11",
    lessonIds: [374, 231, 212, 327, 373, 117],
    sections: [
      {
        id: "idea",
        title: "La idea que ordena todo: la causa detrás y la meta delante",
        blocks: [
          { type: "p", text: "Antes de cualquier lista, el alumno necesita una imagen que pueda usar al hablar. La más útil en clase es una flecha: **para mira hacia delante, a la meta, al destino o al destinatario; por mira hacia atrás, a la causa o al motivo, o señala el camino por donde se pasa**. «Estudio para aprobar» mira a la meta; «estudio por mis padres» mira al motivo; «paseo por el parque» señala el camino." },
          { type: "p", text: "Esta idea cubre la mayoría de las frases que el alumno va a decir en A2 y B1. Los usos que no encajan del todo, como el precio («lo compró por diez euros») o el medio («hablamos por teléfono»), se presentan después como bloques fijos, nunca el primer día." },
          { type: "p", text: "La página de [por y para](/material-ele/por-y-para) de Material ELE resume los usos con ejemplos listos para proyectar, y la de [conectores](/material-ele/conectores) cubre las formas de causa y finalidad que vienen después." },
        ],
      },
      {
        id: "secuencia",
        title: "La secuencia: qué enseñar en cada nivel",
        blocks: [
          { type: "p", text: "El error más común es presentar por y para juntos, con todos sus usos, en una sola clase. Funciona mejor empezar por la idea de causa y finalidad, separar las preposiciones y juntarlas cuando el alumno ya tiene frases que funcionan. Esta es la secuencia de las clases de gramática de SpanishCue:" },
        ],
        subsections: [
          {
            title: "A1: porque y para, antes de por",
            blocks: [
              { type: "ol", items: [
                "**Causa y finalidad con porque y para + infinitivo**: [ficha de causa y finalidad](/material-ele/ficha/ideas-dentro-de-ideas). «Estudio español porque me gusta» y «estudio español para viajar».",
                "**Preposiciones básicas**: [ficha de a, de, en, con y sin](/material-ele/ficha/preposiciones-basicas), para que el alumno tenga el sistema antes de los casos difíciles.",
              ] },
              { type: "p", text: "En A1 conviene no introducir por como preposición de causa: «porque» ya cumple esa función y evita la confusión temprana." },
            ],
          },
          {
            title: "A2: el primer contraste",
            blocks: [
              { type: "p", text: "Con la base de A1 llega la clase gratis de [por y para: motivo y destino](/gramatica/por-y-para-motivo-y-destino), que trabaja los usos más frecuentes: para + destino, destinatario y finalidad; por + motivo y lugar de paso. Al lado, la ficha de [preposiciones de movimiento y ubicación](/material-ele/ficha/preposiciones-de-movimiento-y-ubicacion) ayuda con «por el centro» frente a «al centro»." },
            ],
          },
          {
            title: "B1: plazo, precio, medio y causa formal",
            blocks: [
              { type: "p", text: "En B1 se amplía con la ficha de [por y para: causa, propósito, plazo y destinatario](/material-ele/ficha/por-para-razones-objetivos): «para el viernes», «por la mañana», «por diez euros», «por correo». Al mismo tiempo entran los [conectores causales](/material-ele/ficha/causales-ya-que-puesto-que-como) ya que, puesto que y como, que dan al alumno alternativas para explicar motivos." },
            ],
          },
          {
            title: "B2: verbos con preposición fija",
            blocks: [
              { type: "p", text: "En B2 el foco pasa a los [verbos que rigen preposición](/material-ele/ficha/verbos-que-piden-una-estructura): preocuparse por, luchar por, servir para. Aquí la flecha ayuda menos y conviene trabajar los verbos como bloques de vocabulario." },
            ],
          },
        ],
      },
      {
        id: "explicar",
        title: "Cómo explicarlo en clase sin listas de usos",
        blocks: [
          { type: "p", text: "Tres técnicas que funcionan mejor que la lista de usos:" },
          { type: "ol", items: [
            "**La flecha en la pantalla.** Dibuja una persona en el centro: a la derecha, la meta (para); a la izquierda, el motivo (por). Cada frase nueva se coloca en un lado.",
            "**Pares mínimos.** «Lo hago para ti» frente a «lo hago por ti», «salgo para Madrid» frente a «paso por Madrid». Pregunta qué cambia en la situación, no en la preposición.",
            "**Bloques fijos aparte.** Gracias por, por favor, por ejemplo, por teléfono, para siempre: una lista corta de expresiones que se aprenden enteras, separadas de la regla.",
          ] },
          { type: "p", text: "Las clases interactivas siguen este orden: teoría en pantalla, ejemplos con contraste, práctica guiada, audio y una producción final. El formato está explicado en [clases de gramática en vivo](/material-ele/formatos/clases-de-gramatica-en-vivo)." },
        ],
      },
      {
        id: "errores",
        title: "Los errores típicos en cada etapa",
        blocks: [
          { type: "p", text: "Saber qué error va a aparecer ayuda a corregirlo sin cortar la conversación:" },
          { type: "ul", items: [
            "**«Gracias para todo».** El caso más frecuente. Solución: tratar «gracias por» como bloque fijo desde el primer día.",
            "**«Estudio por aprobar».** Usa por para la finalidad. Solución: la flecha y la pregunta «¿es la meta o el motivo?».",
            "**«Para qué no viniste».** Confunde la pregunta de finalidad con la de causa. Solución: contrastar «¿por qué?» y «¿para qué?» con respuestas con porque y para.",
            "**«Trabajo para la mañana».** Usa para con partes del día. Solución: presentar por la mañana, por la tarde y por la noche como bloque.",
            "**«Necesito el informe por el viernes».** Plazo con por. Solución: en B1, para + fecha límite con ejemplos reales de trabajo.",
          ] },
          { type: "p", text: "El [ejercicio de por y para](/material-ele/ejercicio/por-y-para) practica estos puntos con soluciones, y el [ejercicio de A2](/material-ele/ejercicio/a2) los mezcla con el resto del nivel. La guía [ejercicios ELE con soluciones](/material-ele/guia/ejercicios-ele-con-soluciones) propone tres formas de corregirlos sin bloquear al alumno." },
        ],
      },
      {
        id: "practica",
        title: "Actividades para practicar por y para",
        blocks: [
          { type: "p", text: "La práctica controlada fija la regla; la conversación fija la elección. Actividades que funcionan en clase individual y en grupo:" },
          { type: "ul", items: [
            "**Regalos.** El alumno elige tres regalos: para quién son, para qué sirven y por qué los eligió.",
            "**El viaje.** Un itinerario en el mapa: salgo para Lima, paso por Cusco, voy en tren por el valle.",
            "**¿Por qué o para qué?** Diez decisiones de la vida del alumno (estudiar español, vivir en su ciudad, su trabajo) y una respuesta con cada pregunta.",
            "**Lo haría por…** «¿Qué harías por un amigo?» frente a «¿qué harías para ser feliz?»: una conversación que obliga a elegir.",
          ] },
          { type: "p", text: "Hay más dinámicas en el [banco de actividades](/material-ele/actividades) y preguntas listas para el nivel en [preguntas de conversación de A2](/material-ele/preguntas/a2) y de [B1](/material-ele/preguntas/b1). Si prefieres material para imprimir, en [fichas de gramática](/material-ele/fichas) hay una ficha por clase, con soluciones." },
        ],
      },
      {
        id: "clase-ejemplo",
        title: "Una clase de 45 minutos de ejemplo (A2, por y para)",
        blocks: [
          { type: "p", text: "Para la primera clase de contraste en A2, esta secuencia deja al alumno eligiendo con criterio:" },
          { type: "ol", items: [
            "**Entrada (5 minutos):** «¿Por qué estudias español? ¿Para qué?». Respuestas libres, sin corregir.",
            "**Contraste (5 minutos):** la flecha en la pantalla y tres pares mínimos.",
            "**Clase (25 minutos):** la clase gratis de [por y para: motivo y destino](/gramatica/por-y-para-motivo-y-destino), con el modo profesor en pantalla compartida.",
            "**Producción (10 minutos):** el alumno cuenta un viaje que quiere hacer: para dónde sale, por dónde pasa, para qué va y por qué ese lugar.",
          ] },
          { type: "p", text: "Si la clase es por videollamada, la guía [cómo dar clases de español online](/material-ele/guia/como-dar-clases-de-espanol-online) explica cómo preparar la pantalla; si tienes poco tiempo, [cómo preparar una clase de español en 10 minutos](/material-ele/guia/preparar-una-clase-de-espanol-rapido) da el paso a paso." },
        ],
      },
      {
        id: "gratis",
        title: "Qué material de por y para es gratis",
        blocks: [
          { type: "p", text: "Se abre gratis y sin registro la clase interactiva de [por y para: motivo y destino](/gramatica/por-y-para-motivo-y-destino), con su ficha completa, además de todas las fichas de esta guía, el ejercicio de por y para y las preguntas de conversación. El resto de clases forman parte de la suscripción, cuyos detalles están en [precios](/pricing), y cada una tiene su ficha abierta." },
          { type: "p", text: "Para preparar el resto del nivel, la página de [A2](/material-ele/a2) ordena todo el material, y la guía [recursos ELE gratis](/material-ele/guia/recursos-ele-gratis) reúne lo gratuito por tipo. Las otras guías de esta serie son [cómo enseñar ser y estar](/material-ele/guia/como-ensenar-ser-y-estar), [cómo enseñar el indefinido y el imperfecto](/material-ele/guia/como-ensenar-indefinido-e-imperfecto) y [cómo enseñar el subjuntivo](/material-ele/guia/como-ensenar-el-subjuntivo)." },
        ],
      },
    ],
    faq: [
      { question: "¿En qué nivel se enseña por y para?", answer: "El primer contraste llega en A2, con los usos más frecuentes: para + meta, destino y destinatario; por + motivo y lugar de paso. En A1 conviene trabajar antes porque y para + infinitivo. En B1 se añaden plazo, precio, medio y partes del día." },
      { question: "¿Cuál es la mejor forma de explicar la diferencia entre por y para?", answer: "Con una flecha: para mira hacia delante, a la meta o al destinatario; por mira hacia atrás, al motivo, o señala el camino. Los usos que no encajan, como el precio o el medio, se enseñan como bloques fijos." },
      { question: "¿Por qué los alumnos dicen «gracias para»?", answer: "Porque en muchas lenguas la misma preposición sirve para causa y finalidad. La solución más eficaz es enseñar «gracias por» como expresión fija desde el primer día, separada de la regla general." },
      { question: "¿Hay una clase gratis de por y para?", answer: "Sí. La clase interactiva de por y para de A2 de SpanishCue se abre gratis, con su ficha completa, y en Material ELE hay fichas, un ejercicio con soluciones y preguntas de conversación, todo sin registro." },
    ],
    related: ["por-y-para", "conectores", "a2", "b1"],
  },
  {
    slug: "como-ensenar-gustar",
    path: `${GUIAS_PATH}/como-ensenar-gustar`,
    title: "Cómo enseñar gustar en ELE: secuencia de A1 a B1 con fichas",
    description:
      "Cómo enseñar gustar y los verbos como gustar: la idea que evita «yo gusto», qué va en cada nivel, errores típicos, actividades y una clase gratis de A1.",
    h1: "Cómo enseñar gustar en ELE: una secuencia clara de A1 a B1",
    kicker: "Guía para profesores de ELE",
    intro:
      "Gustar es de los primeros verbos que un alumno quiere usar y de los que más tarda en dominar: «yo gusto el café», «me gusta los libros» o «a mí me gusto» aparecen en A1 y siguen apareciendo en B1. El problema casi nunca es la forma, que es sencilla, sino que la frase está construida al revés de lo que el alumno espera. Esta guía propone una secuencia concreta de A1 a B1, una idea que el alumno puede aplicar al hablar, los errores que vas a ver en cada etapa y las clases, fichas y ejercicios de Material ELE para cada paso, con una clase completa gratis.",
    keywords: ["cómo enseñar gustar", "gustar ELE", "verbos como gustar", "actividades gustar", "gustar para extranjeros", "ejercicios gustar", "fichas gustar"],
    published: "2026-11-12",
    lessonIds: [332, 362, 363, 333, 392, 463],
    sections: [
      {
        id: "idea",
        title: "La idea que ordena todo: la cosa es la que gusta",
        blocks: [
          { type: "p", text: "Antes de cualquier tabla, el alumno necesita entender quién hace qué en la frase. La imagen más útil en clase es esta: **en «me gusta el café», el sujeto es el café; el café produce algo en mí**. Por eso el verbo concuerda con la cosa: «me gusta el café», «me gustan los libros». La persona va con un pronombre de objeto indirecto: me, te, le, nos, os, les." },
          { type: "p", text: "Con esta idea, la mayoría de los errores se corrigen con una sola pregunta: «¿qué es lo que gusta?». Si es una cosa, gusta; si son varias, gustan; si es una acción en infinitivo, gusta. La forma «a mí», «a ti», «a ella» se presenta después, como forma de dar énfasis o de aclarar a quién." },
          { type: "p", text: "La página de [gustar](/material-ele/gustar) de Material ELE resume la estructura con ejemplos listos para proyectar, y la de [pronombres de objeto](/material-ele/pronombres-de-objeto) cubre el sistema de me, te, le que sostiene todo el tema." },
        ],
      },
      {
        id: "secuencia",
        title: "La secuencia: qué enseñar en cada nivel",
        blocks: [
          { type: "p", text: "El error más común es presentar gustar, encantar, interesar, doler y parecer en la misma clase, con todas las personas. Funciona mejor empezar por me gusta y te gusta, añadir el plural y el infinitivo, y abrir el grupo de verbos cuando la estructura ya es automática. Esta es la secuencia de las clases de gramática de SpanishCue:" },
        ],
        subsections: [
          {
            title: "A1: me gusta, me gustan y me encanta",
            blocks: [
              { type: "ol", items: [
                "**Gustar y encantar con nombre e infinitivo**: la clase gratis de [gustar y encantar](/gramatica/gustar-y-encantar). «Me gusta el cine», «me gustan las series», «me encanta cocinar».",
                "**Pronombres tras preposición**: [ficha de a mí, a ti, conmigo](/material-ele/ficha/pronombres-tras-preposicion), para que «a mí también» y «a mí tampoco» lleguen con la forma correcta.",
              ] },
              { type: "p", text: "En A1 conviene trabajar sobre todo la primera y la segunda persona: el alumno habla de sus gustos y pregunta por los del otro. Le y les pueden esperar unas semanas." },
            ],
          },
          {
            title: "A2: el grupo de verbos y la tercera persona",
            blocks: [
              { type: "p", text: "Con la base de A1 llega la ficha de [gustar, interesar, doler y faltar](/material-ele/ficha/gustar-interesar-doler-faltar-concordancia): «me duele la cabeza», «nos falta tiempo», «le interesan los idiomas». Al lado, la ficha de [objeto indirecto: le, les, me, te](/material-ele/ficha/objeto-indirecto-le-les-me-te) ordena el sistema completo de pronombres y explica por qué decimos «a mi hermana le gusta» con los dos elementos." },
            ],
          },
          {
            title: "B1: me gusta que + subjuntivo",
            blocks: [
              { type: "p", text: "En B1, gustar abre la puerta al subjuntivo: «me gusta que me llames», «me molesta que llegue tarde». La ficha de [emociones y reacciones con que + subjuntivo](/material-ele/ficha/emociones-y-reacciones-con-que-subjuntivo) trabaja este paso, que funciona mejor si el alumno ya usa gustar con infinitivo sin pensar. La regla práctica: mismo sujeto, infinitivo; sujeto distinto, que + subjuntivo." },
            ],
          },
          {
            title: "B2: duplicación y foco",
            blocks: [
              { type: "p", text: "En B2 el foco pasa a la [duplicación de pronombres y el foco](/material-ele/ficha/pronombres-redundancia-duplicacion-y-foco): por qué «a Juan le gusta» lleva los dos elementos y cómo cambia el sentido al poner la persona delante o detrás. Aquí también entran verbos como parecer, caer bien o quedar bien con valoraciones." },
            ],
          },
        ],
      },
      {
        id: "explicar",
        title: "Cómo explicarlo en clase sin tablas eternas",
        blocks: [
          { type: "p", text: "Tres técnicas que funcionan mejor que la tabla completa de personas:" },
          { type: "ol", items: [
            "**La flecha al revés.** Dibuja la cosa a la izquierda y a la persona a la derecha, con una flecha de la cosa a la persona. La cosa es el sujeto; la persona recibe el efecto.",
            "**Pares de frases.** «Me gusta el libro» frente a «me gustan los libros», «me gusta leer» frente a «me gustan las novelas». Pregunta qué cambia en la cosa, no en la persona.",
            "**Respuestas cortas aparte.** A mí también, a mí tampoco, a mí sí, a mí no: un bloque de cuatro respuestas que se practica en conversación desde el primer día.",
          ] },
          { type: "p", text: "Las clases interactivas siguen este orden: teoría en pantalla, ejemplos con contraste, práctica guiada, audio y una producción final. El formato está explicado en [clases de gramática en vivo](/material-ele/formatos/clases-de-gramatica-en-vivo)." },
        ],
      },
      {
        id: "errores",
        title: "Los errores típicos en cada etapa",
        blocks: [
          { type: "p", text: "Saber qué error va a aparecer ayuda a corregirlo sin cortar la conversación:" },
          { type: "ul", items: [
            "**«Yo gusto el café».** El alumno traslada la estructura de su lengua. Solución: la flecha al revés y la pregunta «¿qué es lo que gusta?».",
            "**«Me gusta los libros».** Falta la concordancia con el plural. Solución: pares de frases con singular y plural, siempre con la cosa subrayada.",
            "**«A mí gusta la música».** Falta el pronombre. Solución: presentar «a mí me gusta» como bloque y explicar que «a mí» es opcional y «me» no.",
            "**«Le gusta a ellos».** Confusión entre le y les. Solución: en A2, contar las personas que reciben el efecto antes de elegir el pronombre.",
            "**«Me gusta que vienes».** Indicativo después de que en B1. Solución: la regla del sujeto distinto y ejemplos de reacciones reales.",
          ] },
          { type: "p", text: "El [ejercicio de gustar](/material-ele/ejercicio/gustar) practica estos puntos con soluciones, el de [pronombres de objeto](/material-ele/ejercicio/pronombres-de-objeto) refuerza el sistema completo y el [ejercicio de A1](/material-ele/ejercicio/a1) los mezcla con el resto del nivel. La guía [ejercicios ELE con soluciones](/material-ele/guia/ejercicios-ele-con-soluciones) propone tres formas de corregirlos sin bloquear al alumno." },
        ],
      },
      {
        id: "practica",
        title: "Actividades para practicar gustar",
        blocks: [
          { type: "p", text: "La práctica controlada fija la forma; la conversación fija el uso. Actividades que funcionan en clase individual y en grupo:" },
          { type: "ul", items: [
            "**Gustos en común.** La actividad [gustos en común](/material-ele/actividad/gustos-en-comun): el alumno busca tres cosas que le gustan a los dos y tres que no, con a mí también y a mí tampoco.",
            "**El médico.** Un juego de roles en la consulta: ¿qué te duele?, me duele la espalda, me duelen los pies.",
            "**La lista del otro.** El alumno adivina qué le gusta y qué le molesta a una persona famosa o a alguien de su familia, en tercera persona.",
            "**Lo que me molesta.** En B1, cinco situaciones cotidianas y una reacción con me molesta que o me encanta que.",
          ] },
          { type: "p", text: "Hay más dinámicas en el [banco de actividades](/material-ele/actividades), materiales de la función [expresar gustos](/material-ele/funciones/expresar-gustos) y preguntas listas para el nivel en [preguntas de conversación de A1](/material-ele/preguntas/a1). Si prefieres material para imprimir, en [fichas de gramática](/material-ele/fichas) hay una ficha por clase, con soluciones." },
        ],
      },
      {
        id: "clase-ejemplo",
        title: "Una clase de 45 minutos de ejemplo (A1, gustar)",
        blocks: [
          { type: "p", text: "Para la primera clase de gustar en A1, esta secuencia deja al alumno hablando de sus gustos con la estructura correcta:" },
          { type: "ol", items: [
            "**Entrada (5 minutos):** fotos de comida, deportes y lugares en pantalla. El alumno señala lo que prefiere, sin estructura todavía.",
            "**Contraste (5 minutos):** la flecha al revés y tres pares de frases en singular y plural.",
            "**Clase (25 minutos):** la clase gratis de [gustar y encantar](/gramatica/gustar-y-encantar), con el modo profesor en pantalla compartida.",
            "**Producción (10 minutos):** el alumno describe un fin de semana perfecto: qué le gusta hacer, qué le encanta comer y qué no le gusta nada. El profesor responde con a mí también o a mí no.",
          ] },
          { type: "p", text: "Si la clase es por videollamada, la guía [cómo dar clases de español online](/material-ele/guia/como-dar-clases-de-espanol-online) explica cómo preparar la pantalla; si tienes poco tiempo, [cómo preparar una clase de español en 10 minutos](/material-ele/guia/preparar-una-clase-de-espanol-rapido) da el paso a paso." },
        ],
      },
      {
        id: "gratis",
        title: "Qué material de gustar es gratis",
        blocks: [
          { type: "p", text: "Se abre gratis y sin registro la clase interactiva de [gustar y encantar](/gramatica/gustar-y-encantar), con su ficha completa, además de todas las fichas de esta guía, el ejercicio de gustar y las preguntas de conversación. El resto de clases forman parte de la suscripción, cuyos detalles están en [precios](/pricing), y cada una tiene su ficha abierta." },
          { type: "p", text: "Para preparar el resto del nivel, la página de [A1](/material-ele/a1) ordena todo el material, y la guía [recursos ELE gratis](/material-ele/guia/recursos-ele-gratis) reúne lo gratuito por tipo. Las otras guías de esta serie son [cómo enseñar por y para](/material-ele/guia/como-ensenar-por-y-para), [cómo enseñar ser y estar](/material-ele/guia/como-ensenar-ser-y-estar) y [cómo enseñar el indefinido y el imperfecto](/material-ele/guia/como-ensenar-indefinido-e-imperfecto)." },
        ],
      },
    ],
    faq: [
      { question: "¿En qué nivel se enseña gustar?", answer: "Desde A1, con me gusta, me gustan y me encanta con nombres e infinitivos. En A2 se amplía a la tercera persona y a verbos como interesar, doler y faltar. En B1 llega me gusta que + subjuntivo." },
      { question: "¿Cuál es la mejor forma de explicar gustar?", answer: "Con la idea de que la cosa es el sujeto: en «me gusta el café», el café produce algo en la persona. Por eso el verbo concuerda con la cosa y la persona va con me, te, le, nos, os o les." },
      { question: "¿Por qué los alumnos dicen «yo gusto»?", answer: "Porque en muchas lenguas la persona es el sujeto del verbo equivalente. La solución más eficaz es la pregunta «¿qué es lo que gusta?», que obliga a buscar el sujeto real de la frase." },
      { question: "¿Hay una clase gratis de gustar?", answer: "Sí. La clase interactiva de gustar y encantar de A1 de SpanishCue se abre gratis, con su ficha completa, y en Material ELE hay fichas, un ejercicio con soluciones y preguntas de conversación, todo sin registro." },
    ],
    related: ["gustar", "pronombres-de-objeto", "a1", "a2"],
  },
];

export const guiaBySlug = new Map(guiaPages.map((page) => [page.slug, page]));
