/**
 * Error category → real SpanishCue classes. Server composition only: it reads
 * the catalog and returns compact cards, never lesson bodies.
 *
 * Only classes that really exist in app/lesson-catalog.ts and have a guided
 * classroom (so a free preview can be rendered) are ever recommended.
 */
import { isFreeLesson } from "../../access-policy";
import { classroomIds } from "../../grammar-classroom/lessons";
import { lessons, type Lesson } from "../../lesson-catalog";
import type { CategoryId } from "./categorize";

export type RecommendedClass = { id: number; title: string; path: string; level: string; image: string; topic: string; free: boolean };
export type RecommendationCatalog = Partial<Record<CategoryId, RecommendedClass[]>>;

/** grammarTopic (app/grammar-classroom/catalog.ts) plus preferred ids per category. */
const mapping: Partial<Record<CategoryId, { topics: string[]; prefer: number[] }>> = {
  "ser-estar": { topics: ["ser-estar"], prefer: [48] },
  "por-para": { topics: [], prefer: [231] },
  "desde-hace": { topics: [], prefer: [230] },
  pasados: { topics: [], prefer: [18, 142, 143, 141, 154] },
  pluscuamperfecto: { topics: [], prefer: [147, 18] },
  subjuntivo: { topics: ["subjuntivo"], prefer: [148, 150, 149, 37, 151, 155, 156] },
  condicionales: { topics: ["condicionales"], prefer: [214, 31, 219, 23] },
  imperativo: { topics: ["imperativo"], prefer: [145] },
  pronombres: { topics: [], prefer: [106, 46] },
  relativos: { topics: [], prefer: [218, 234] },
  preposiciones: { topics: ["preposiciones"], prefer: [117, 231] },
  concordancia: { topics: ["concordancia"], prefer: [41, 40, 110, 112, 114, 116, 118] },
  determinantes: { topics: ["determinantes"], prefer: [42, 43, 44] },
  conectores: { topics: ["oraciones"], prefer: [211, 212, 213, 217, 220, 235, 111, 113] },
  perifrasis: { topics: ["perifrasis"], prefer: [115, 119] },
  presente: { topics: [], prefer: [140, 48, 3, 107] },
  "futuro-condicional": { topics: [], prefer: [144, 146, 153, 152] },
  cantidad: { topics: ["cantidad"], prefer: [45] },
  "voz-pasiva": { topics: ["voz"], prefer: [232] },
  "estilo-indirecto": { topics: ["discurso"], prefer: [233] },
};

const levelIndex = (level: string) => ["A0", "A1", "A2", "B1", "B2", "C1", "C2"].indexOf(level.toUpperCase());

function card(lesson: Lesson): RecommendedClass | null {
  const path = lesson.path;
  if (!path || !path.startsWith("/")) return null;
  return { id: lesson.id, title: lesson.title, path, level: lesson.level, image: lesson.image, topic: lesson.tag, free: isFreeLesson(lesson.id) };
}

/** Up to `limit` real classes for one category, nearest to the learner's level first. */
export function classesFor(category: CategoryId, learnerLevel: string, limit = 3): RecommendedClass[] {
  const rule = mapping[category];
  if (!rule) return [];
  const target = levelIndex(learnerLevel);
  const candidates = lessons.filter((lesson) => lesson.category === "Gramática" && classroomIds.includes(lesson.id) && (rule.prefer.includes(lesson.id) || (lesson.grammarTopic !== undefined && rule.topics.includes(lesson.grammarTopic))));
  const rank = (lesson: Lesson) => {
    const distance = Math.abs(levelIndex(lesson.level) - target);
    const preferred = rule.prefer.indexOf(lesson.id);
    // Same level first; one level up is still useful; preferred order breaks ties.
    return distance * 10 + (levelIndex(lesson.level) > target ? 1 : 0) + (preferred < 0 ? 5 : preferred * 0.1);
  };
  return candidates.sort((a, b) => rank(a) - rank(b)).map(card).filter((c): c is RecommendedClass => Boolean(c)).slice(0, limit);
}

/** Compact catalog for one learner level, safe to pass to a client component. */
export function recommendationCatalog(learnerLevel: string): RecommendationCatalog {
  const result: RecommendationCatalog = {};
  for (const category of Object.keys(mapping) as CategoryId[]) {
    const list = classesFor(category, learnerLevel);
    if (list.length) result[category] = list;
  }
  return result;
}

export const previewableLessonIds: readonly number[] = classroomIds;
