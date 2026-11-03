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
      { question: "¿Cuánto cuesta tener todas las clases?", answer: "En SpanishCue, US$15,50 al mes o US$129 al año, con tarjeta o PayPal, y se cancela cuando quieras. Se prueban primero las clases marcadas GRATIS." },
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
      { question: "¿Las clases de SpanishCue son gratis?", answer: `Hay ${free} clases gratis, incluidas tres de gramática en cada nivel, y todas las fichas, ejercicios y preguntas de Material ELE son gratis sin registro. El resto de clases está en la suscripción de US$15,50 al mes.` },
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
      { question: "¿Las actividades de conversación son gratis?", answer: `Las preguntas de conversación, las fichas y los ejercicios de Material ELE son gratis sin registro. De los mundos 3D, Estados Unidos es gratis completo y Noche abierta tiene el centro gratis; el resto está en la suscripción de US$15,50 al mes, que incluye las ${total} clases.` },
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
];

export const guiaBySlug = new Map(guiaPages.map((page) => [page.slug, page]));
