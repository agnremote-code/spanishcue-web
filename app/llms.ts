import { catalogSummary, freeLessonCards } from "./growth/lessons";
import { MATERIAL_ELE_PATH } from "./material-ele/data";
import { ACTIVIDADES_PATH } from "./material-ele/actividades";
import { FICHAS_PATH, fichaPages } from "./material-ele/fichas";
import { FICHAS_GRATIS_PATH, fichasGratis } from "./material-ele/fichas-gratis";
import { guiaPages } from "./material-ele/guias";
import { INDICE_PATH, FEED_PATH } from "./material-ele/indice";
import { SITE_ORIGIN } from "./seo";

export const LLMS_PATH = "/llms.txt";
/** Same price as PRICE_LABEL in material-ele/components (a test keeps them equal); typed here so this file stays free of React and CSS imports. */
export const LLMS_PRICE = "US$19,90 al mes";
const PRICING_PATH = "/pricing";

const url = (path: string) => `${SITE_ORIGIN}${path}`;
const link = (title: string, path: string, note?: string) => `- [${title}](${url(path)})${note ? `: ${note}` : ""}`;

/**
 * /llms.txt: a plain-Markdown map of the site for AI search assistants
 * (ChatGPT search, Perplexity, Copilot…), following the llms.txt convention:
 * one H1, a short summary, then sections of links. Only facts that the
 * catalog and the pricing page already state; counts come from the catalog,
 * never from hand-typed numbers. Open pages only: nothing PRO is listed.
 */
export function llmsTxt(): string {
  const free = freeLessonCards().filter((lesson) => lesson.lessonPath);
  const lines = [
    "# SpanishCue",
    "",
    `> SpanishCue (spanishcue.com) es una biblioteca de ${catalogSummary.total} clases de español interactivas y listas para dar, de A1 a C2, hecha para profesores de español como lengua extranjera (ELE) y tutores online. El profesor elige una clase, la abre en el navegador y la comparte en pantalla: teoría, práctica, audio y conversación en el mismo lugar. Lema: «Choose. Open. Teach.»`,
    "",
    "SpanishCue is a library of ready-to-teach interactive Spanish lessons (CEFR A1 to C2) for Spanish teachers and online tutors. It is a tool for teachers, not a self-study app for learners.",
    "",
    "## Datos clave",
    "",
    "- Para quién: profesores de ELE, tutores online (Zoom, Meet, Preply, italki) y academias de español.",
    `- Qué incluye: ${catalogSummary.grammar} clases de gramática por uso, ${catalogSummary.conversation} clases de conversación (incluidos mundos 3D inmersivos con modo de comprensión auditiva), fichas imprimibles, ejercicios con soluciones y preguntas de conversación por nivel.`,
    "- Niveles: A1, A2, B1, B2, C1 y C2, con el MCER y el Plan Curricular del Instituto Cervantes como referencia.",
    `- Precio: ${catalogSummary.free} clases completas son gratis y se abren sin pagar. La suscripción PRO cuesta ${LLMS_PRICE} (también hay plan anual), sin permanencia.`,
    "- Idiomas de la interfaz: español e inglés.",
    "- SpanishCue es un proyecto independiente; no tiene relación con ProfeDeELE ni con otros sitios de material ELE.",
    "",
    "## Páginas principales",
    "",
    link("Inicio", "/", "qué es SpanishCue y cómo se usa en clase"),
    link("Material ELE", MATERIAL_ELE_PATH, "portada del material gratuito para profesores: niveles, guías, temas y actividades"),
    link("Precios", PRICING_PATH, "plan mensual y anual"),
    link("Para academias", "/academias", "licencias para academias y equipos de profesores"),
    link("Sobre SpanishCue y su método", "/about", "metodología, MCER y PCIC (en inglés)"),
    link("Clases de español listas para dar online", "/clases-de-espanol-listas-para-dar", "qué plataformas ofrecen clases preparadas para compartir en pantalla y cómo elegir"),
    link("Alternativa a ProfeDeELE", "/alternativa-a-profedeele", "comparativa de formatos entre sitios de material ELE"),
    link("Verbos irregulares por tiempo", "/conjugacion/irregulares", "lista de verbos irregulares en cada tiempo verbal, con los patrones explicados y ejercicio"),
    link("Conjugación de verbos en español", "/conjugacion", "más de 1.200 verbos conjugados en todos los tiempos, con las irregularidades explicadas y un ejercicio por verbo"),
    "",
    "## Guías para profesores de español",
    "",
    ...guiaPages.map((page) => link(page.h1, page.path, page.description)),
    "",
    "## Material gratis para imprimir o proyectar",
    "",
    link("Fichas ELE completas y 100 % gratis", FICHAS_GRATIS_PATH, `${fichasGratis.length} fichas enteras de A1 a C2, con soluciones, sin registro ni pagos`),
    link("Fichas ELE de gramática con soluciones", FICHAS_PATH, `${fichaPages.length} fichas de A1 a C2`),
    link("Banco de actividades ELE", ACTIVIDADES_PATH, "fichas, ejercicios con soluciones y preguntas de conversación"),
    link("Índice completo de Material ELE", INDICE_PATH, "todas las páginas abiertas en una lista"),
    link("Feed Atom de Material ELE", FEED_PATH),
    "",
    "## Clases completas gratis",
    "",
    ...free.map((lesson) => link(`${lesson.title} (${lesson.level})`, lesson.lessonPath!, lesson.subtitle || undefined)),
    "",
    "## Uso",
    "",
    "Los asistentes de búsqueda con IA pueden leer, citar y enlazar estas páginas abiertas para responder a una persona. El contenido no está disponible para entrenar modelos (ver /robots.txt).",
    "",
  ];
  return lines.join("\n");
}
