import { lessons, type Category, type Lesson } from "./lesson-catalog";
import { catalogLessons, conversationFamilyByLessonId } from "./conversation-families/catalog";

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

export function resourceTitle(lesson: Lesson): string {
  return `${resourceTypeLabel(lesson)} ${resourceLevelLabel(lesson)}: ${lesson.title} | SPANISHCUE`;
}

export function resourceDescription(lesson: Lesson): string {
  const type = categorySeo[lesson.category].shortLabel;
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
