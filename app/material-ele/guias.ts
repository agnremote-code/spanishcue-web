import { MATERIAL_ELE_PATH } from "./data";
import { ACTIVIDADES_PATH, actividadPages, ejercicioPages } from "./actividades";
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
          { type: "p", text: "Las clases de gramática de SpanishCue siguen exactamente este orden en siete pasos, en una sola pantalla que avanza contigo. Puedes ver una completa gratis en cada nivel desde [Material ELE por nivel](/material-ele#niveles)." },
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
      { question: "¿Hay materiales para enseñar español gratis de verdad?", answer: `Sí. En Material ELE todas las fichas, ejercicios y preguntas son gratis sin registro, y hay ${free} clases interactivas gratis, incluida una de gramática por nivel. Los sitios de la lista de arriba también tienen parte gratuita.` },
      { question: "¿Cuánto cuesta tener todas las clases?", answer: "En SpanishCue, US$15,50 al mes o US$129 al año, con tarjeta o PayPal, y se cancela cuando quieras. Se prueban primero las clases marcadas GRATIS." },
      { question: "¿Sirven para clases presenciales?", answer: "Sí: cada guía tiene una ficha imprimible, y las clases interactivas se proyectan igual que se comparten por pantalla." },
      { question: "¿Cómo sé el nivel de un material?", answer: "Por el MCER y el PCIC. Cada clase y cada página de SpanishCue indica su nivel y, en los mundos 3D, el nivel se elige dentro." },
    ],
    related: ["a1", "b1", "preguntas-de-conversacion", "primera-clase-de-espanol", "juegos-para-clase-de-espanol", "comprension-auditiva"],
  },
];

export const guiaBySlug = new Map(guiaPages.map((page) => [page.slug, page]));
