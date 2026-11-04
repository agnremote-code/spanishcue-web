import { MATERIAL_ELE_PATH } from "./data";
import { lessons } from "../lesson-catalog";
import { isFreeLesson } from "../access-policy";
import { liveLessonIds } from "../grammar-classroom/live/registry";

/**
 * Printable grammar worksheets: one open page per live grammar class, built from the
 * class itself. A FREE class gets the full worksheet (theory, mistakes, exercises, tasks
 * and answer key); a PRO class gets a sample (summarised theory and five exercises with
 * answers) and the rest stays in the class (owner decision 2026-11-04). Only ids and
 * catalog data here, so the sitemap and the index stay light; the content comes from
 * ./ficha-content, which only the worksheet page imports.
 */
export const FICHAS_PATH = `${MATERIAL_ELE_PATH}/fichas`;
export const FICHA_PATH = `${MATERIAL_ELE_PATH}/ficha`;
export const fichasPublished = "2026-11-04";

export type FichaPage = { id: number; slug: string; path: string; lessonPath: string; level: string; name: string; title: string; description: string; h1: string; sample: boolean };

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const lessonById = new Map(lessons.map((lesson) => [lesson.id, lesson]));

function fichaPage(id: number): FichaPage | undefined {
  const lesson = lessonById.get(id);
  if (!lesson?.path || !LEVELS.includes(lesson.level)) return undefined;
  const slug = lesson.path.split("/").filter(Boolean).pop()!;
  const level = lesson.level;
  const name = lesson.title;
  const sample = !isFreeLesson(id);
  const lower = `${name.charAt(0).toLowerCase()}${name.slice(1)}`;
  const long = `Ficha ELE ${level}: ${name} (PDF con soluciones)`;
  const title = long.length <= 78 ? long : `Ficha ELE ${level}: ${name}`.slice(0, 78).trim();
  const what = sample ? "teoría resumida y cinco ejercicios con soluciones" : "teoría, errores típicos, ejercicios y soluciones";
  let description = `Ficha ELE gratis para imprimir: ${lower} (${level}), con ${what}.`;
  if (description.length > 165) description = `Ficha ELE ${level} gratis para imprimir, con ${what}: ${lower}`;
  if (description.length > 165) description = `${description.slice(0, 162).trim()}…`;
  if (description.length < 110) description = `${description} Sin registro, lista para proyectar.`;
  if (description.length < 110) description = `${description} De la clase interactiva de SpanishCue.`;
  return { id, slug, path: `${FICHA_PATH}/${slug}`, lessonPath: lesson.path, level, name, title, description, h1: `Ficha ELE ${level}: ${name}`, sample };
}

const levelRank = (level: string) => LEVELS.indexOf(level);
/** Every live grammar class with a catalog route, free ones first within each level. */
export const fichaPages: FichaPage[] = liveLessonIds
  .map(fichaPage)
  .filter((page): page is FichaPage => Boolean(page))
  .sort((a, b) => levelRank(a.level) - levelRank(b.level) || Number(a.sample) - Number(b.sample) || a.id - b.id);
export const fichaBySlug = new Map(fichaPages.map((page) => [page.slug, page]));
export const fichasTitle = "Fichas ELE de gramática gratis para imprimir, con soluciones";
export const fichasDescription = `${fichaPages.length} fichas ELE de gramática gratis, de A1 a C2, con teoría, ejercicios y soluciones de cada clase, para imprimir en PDF o proyectar.`;
