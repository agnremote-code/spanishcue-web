import { MATERIAL_ELE_PATH } from "./data";
import { lessons } from "../lesson-catalog";
import { isFreeLesson } from "../access-policy";

/**
 * Printable grammar worksheets: one open page per live grammar class, built from the
 * class itself (theory, typical mistakes, exercises and an answer key). Catalog data
 * only here, so the sitemap and the index stay light; the content comes from
 * ./ficha-content, which only the worksheet page imports.
 */
export const FICHAS_PATH = `${MATERIAL_ELE_PATH}/fichas`;
export const FICHA_PATH = `${MATERIAL_ELE_PATH}/ficha`;
export const fichasPublished = "2026-11-04";

/** The free live grammar classes (three per level plus the Clase inicial). */
export const fichaLessonIds = [239, 332, 350, 358, 374, 389, 390, 402, 436, 439, 461, 468, 480, 481, 507, 515, 523] as const;

export type FichaPage = { id: number; slug: string; path: string; lessonPath: string; level: string; name: string; title: string; description: string; h1: string };

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const lessonById = new Map(lessons.map((lesson) => [lesson.id, lesson]));

function fichaPage(id: number): FichaPage {
  const lesson = lessonById.get(id);
  if (!lesson?.path || !isFreeLesson(id)) throw new Error(`ficha ${id}: not a free catalog lesson with a path`);
  const slug = lesson.path.split("/").filter(Boolean).pop()!;
  const level = LEVELS.includes(lesson.level) ? lesson.level : "A1";
  const name = lesson.title;
  const long = `Ficha ELE ${level}: ${name} (PDF con soluciones)`;
  const title = long.length <= 78 ? long : `Ficha ELE ${level}: ${name}`.slice(0, 78);
  let description = `Ficha ELE gratis para imprimir: ${name.charAt(0).toLowerCase()}${name.slice(1)} (${level}), con teoría, errores típicos, ejercicios y soluciones.`;
  if (description.length > 165) description = `Ficha ELE ${level} gratis para imprimir: teoría, errores típicos, ejercicios y soluciones de la clase «${name}».`.slice(0, 165);
  if (description.length < 110) description = `${description} Sin registro, lista para proyectar.`;
  return { id, slug, path: `${FICHA_PATH}/${slug}`, lessonPath: lesson.path, level, name, title, description, h1: `Ficha ELE ${level}: ${name}` };
}

export const fichaPages: FichaPage[] = fichaLessonIds.map(fichaPage);
export const fichaBySlug = new Map(fichaPages.map((page) => [page.slug, page]));
export const fichasTitle = "Fichas ELE de gramática gratis para imprimir, con soluciones";
export const fichasDescription = `${fichaPages.length} fichas ELE de gramática gratis, de A1 a C2: teoría, errores típicos, ejercicios y soluciones de cada clase, para imprimir en PDF o proyectar.`;
