import { lessons, type Category, type Lesson } from "./lesson-catalog";
import { catalogLessons, conversationFamilyByLessonId } from "./conversation-families/catalog";
import { GAMES } from "./escucha-3d/games.mjs";

const categorySeo: Record<Category, { prefix: string; label: string; pluralLabel: string; shortLabel: string }> = {
  "Gramática": {
    prefix: "spanish-grammar-lesson",
    label: "Spanish Grammar Lesson",
    pluralLabel: "Spanish Grammar Lessons",
    shortLabel: "grammar lesson",
  },
  "Conversación": {
    prefix: "spanish-conversation-activity",
    label: "Spanish Conversation Activity",
    pluralLabel: "Spanish Conversation Activities",
    shortLabel: "conversation activity",
  },
  "Escucha": {
    prefix: "spanish-listening-activity",
    label: "Spanish Listening Activity",
    pluralLabel: "Spanish Listening Activities",
    shortLabel: "listening activity",
  },
  "Fonética": {
    prefix: "spanish-pronunciation-lesson",
    label: "Spanish Pronunciation Lesson",
    pluralLabel: "Spanish Pronunciation Lessons",
    shortLabel: "pronunciation lesson",
  },
  "Vocabulario": {
    prefix: "spanish-vocabulary-lesson",
    label: "Spanish Vocabulary Lesson",
    pluralLabel: "Spanish Vocabulary Lessons",
    shortLabel: "vocabulary lesson",
  },
};

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’'“”"¿?¡!·…:;,()[\]{}]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function levelLabel(lesson: Lesson): string {
  return lesson.displayLevel || lesson.level;
}

const baseSlugById = new Map(
  lessons.map((lesson) => [
    lesson.id,
    `${categorySeo[lesson.category].prefix}-${slugify(levelLabel(lesson))}-${slugify(lesson.title)}`,
  ]),
);

const slugCounts = new Map<string, number>();
for (const slug of baseSlugById.values()) {
  slugCounts.set(slug, (slugCounts.get(slug) ?? 0) + 1);
}

const resourceSlugById = new Map(
  lessons.map((lesson) => {
    const base = baseSlugById.get(lesson.id)!;
    return [lesson.id, slugCounts.get(base) === 1 ? base : `${base}-${lesson.id}`];
  }),
);

const lessonBySlug = new Map(
  lessons.map((lesson) => [resourceSlugById.get(lesson.id)!, lesson]),
);
// Keep the original UK resource URL valid after its selectable levels change.
lessonBySlug.set("spanish-conversation-activity-a2-b1-reino-unido-en-relieve", lessons.find(lesson => lesson.id === 32)!);
// Same for the United States flagship, now a 3D world with more levels.
lessonBySlug.set("spanish-conversation-activity-a2-b1-estados-unidos", lessons.find(lesson => lesson.id === 36)!);
lessonBySlug.set("spanish-conversation-activity-b1-mexico", lessons.find(lesson => lesson.id === 210)!);

function cleanText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function truncate(value: string, maxLength = 158): string {
  const cleaned = cleanText(value);
  if (cleaned.length <= maxLength) return cleaned;
  const cut = cleaned.slice(0, maxLength - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 110 ? lastSpace : maxLength - 1).trim()}…`;
}

export function resourceSlugForLesson(lesson: Lesson): string {
  return resourceSlugById.get(conversationFamilyByLessonId.get(lesson.id)?.canonicalLessonId ?? lesson.id)!;
}

export function resourcePathForLesson(lesson: Lesson): string {
  return `/resources/${resourceSlugForLesson(lesson)}`;
}

export function lessonForResourceSlug(slug: string): Lesson | undefined {
  const original = lessonBySlug.get(slug);
  if (!original) return undefined;
  const family = conversationFamilyByLessonId.get(original.id);
  if (!family) return original;
  const card = catalogLessons.find(item => item.id === family.canonicalLessonId)!;
  return original.id === family.canonicalLessonId ? card : {...card, level:original.level,displayLevel:original.level,subtitle:original.subtitle,image:original.image};
}

export function resourceTypeLabel(lesson: Lesson): string {
  return categorySeo[lesson.category].label;
}

export function resourceTypePluralLabel(lesson: Lesson): string {
  return categorySeo[lesson.category].pluralLabel;
}

export function resourceLevelLabel(lesson: Lesson): string {
  return levelLabel(lesson);
}

/**
 * Catalog lessons that are immersive 3D worlds with both modes (Conversación
 * and Comprensión auditiva) in the same world, keyed by lesson id, with the
 * game key registered in app/escucha-3d/games.mjs. The test
 * tests/resource-3d-worlds.test.mjs keeps this list in sync with that registry.
 */
export const immersiveWorldGameByLessonId: ReadonlyMap<number, string> = new Map([
  [36, "usa"],
  [210, "mexico"],
  [228, "argentina"],
  [229, "espana"],
  [227, "suecia"],
  [32, "uk"],
  [33, "irlanda"],
  [30, "australia"],
  [29, "suiza"],
  [223, "noche"],
  [226, "bosque"],
  [237, "casino"],
  [238, "reino"],
  [240, "hospital"],
  [241, "feria"],
]);

export function isImmersiveWorld(lesson: Lesson): boolean {
  return immersiveWorldGameByLessonId.has(lesson.id);
}

/** Levels that have the Comprensión auditiva mode in a 3D world (from the listening registry). */
export function immersiveWorldListeningLevels(lesson: Lesson): string[] {
  const game = immersiveWorldGameByLessonId.get(lesson.id);
  const entry = game ? (GAMES as Record<string, { levels: string[] }>)[game] : undefined;
  return entry ? [...entry.levels] : [];
}

/** The other 3D worlds' resource lessons, in catalog order. */
export function otherImmersiveWorldLessons(lesson: Lesson): Lesson[] {
  return catalogLessons.filter((item) => item.id !== lesson.id && isImmersiveWorld(item));
}

/** Every level a lesson covers (its catalog `levels`); a single-level lesson gives its level label. */
export function resourceLevels(lesson: Lesson): string[] {
  return lesson.levels && lesson.levels.length > 1 ? [...lesson.levels] : [resourceLevelLabel(lesson)];
}

export function resourceTitle(lesson: Lesson): string {
  const prefix = isImmersiveWorld(lesson) ? "3D " : "";
  return `${prefix}${resourceTypeLabel(lesson)} ${resourceLevelLabel(lesson)}: ${lesson.title} | SPANISHCUE`;
}

export function resourceDescription(lesson: Lesson): string {
  const type = categorySeo[lesson.category].shortLabel;
  if (isImmersiveWorld(lesson)) {
    return truncate(
      `Browser-based 3D Spanish conversation and listening world for teachers, ${resourceLevelLabel(lesson)}: ${lesson.title}. ${lesson.subtitle}`,
    );
  }
  return truncate(
    `Ready-to-teach ${resourceLevelLabel(lesson)} Spanish ${type} for teachers: ${lesson.title}. ${lesson.subtitle}`,
  );
}

export function relatedResourceLessons(lesson: Lesson, limit = 6): Lesson[] {
  const sameLevelAndCategory = catalogLessons.filter(
    (candidate) =>
      candidate.id !== lesson.id &&
      candidate.category === lesson.category &&
      candidate.level === lesson.level,
  );
  const sameCategory = catalogLessons.filter(
    (candidate) =>
      candidate.id !== lesson.id &&
      candidate.category === lesson.category &&
      !sameLevelAndCategory.some((item) => item.id === candidate.id),
  );
  return [...sameLevelAndCategory, ...sameCategory].slice(0, limit);
}

export const resourceLessons = catalogLessons;
