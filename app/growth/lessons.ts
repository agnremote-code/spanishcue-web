import { isFreeLesson, localLessonPath } from "../access-policy";
import { catalogLessons, type ConversationCatalogLesson } from "../conversation-families/catalog";
import { translateCategory } from "../i18n/messages";
import { resourcePathForLesson } from "../resource-seo";

export type LessonCardData = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  level: string;
  category: string;
  duration: string;
  free: boolean;
  /** Where a teacher lands: the lesson itself when free, its public resource page when PRO. */
  href: string;
  /** Public, indexable description page for the lesson. */
  resourcePath: string;
  lessonPath: string | null;
};

const cardById = new Map<number, ConversationCatalogLesson>(catalogLessons.map((lesson) => [lesson.id, lesson]));

export function lessonCard(id: number): LessonCardData | null {
  const lesson = cardById.get(id);
  if (!lesson) return null;
  const free = isFreeLesson(lesson.id);
  const lessonPath = localLessonPath(lesson);
  const resourcePath = resourcePathForLesson(lesson);
  return {
    id: lesson.id,
    title: lesson.title,
    subtitle: lesson.subtitle,
    image: lesson.image,
    level: lesson.displayLevel || lesson.level,
    category: translateCategory("en", lesson.category),
    duration: lesson.duration,
    free,
    href: free && lessonPath ? lessonPath : resourcePath,
    resourcePath,
    lessonPath,
  };
}

/** Resolves ids in order, free lessons first, dropping ids that are not public catalog cards. */
export function lessonCards(ids: readonly number[]): LessonCardData[] {
  const cards = ids.map(lessonCard).filter((card): card is LessonCardData => Boolean(card));
  return [...cards.filter((card) => card.free), ...cards.filter((card) => !card.free)];
}

export function lessonsAtLevel(level: string, category?: string): LessonCardData[] {
  return lessonCards(
    catalogLessons
      .filter((lesson) => (lesson.levels || [lesson.level]).includes(level))
      .filter((lesson) => !category || lesson.category === category)
      .map((lesson) => lesson.id),
  );
}

export const freeLessonCards = (): LessonCardData[] => lessonCards(catalogLessons.filter((lesson) => isFreeLesson(lesson.id)).map((lesson) => lesson.id));

export const catalogSummary = {
  total: catalogLessons.length,
  free: catalogLessons.filter((lesson) => isFreeLesson(lesson.id)).length,
  conversation: catalogLessons.filter((lesson) => lesson.category === "Conversación").length,
  grammar: catalogLessons.filter((lesson) => lesson.category === "Gramática").length,
  listening: catalogLessons.filter((lesson) => lesson.category === "Escucha").length,
  pronunciation: catalogLessons.filter((lesson) => lesson.category === "Fonética").length,
  vocabulary: catalogLessons.filter((lesson) => lesson.category === "Vocabulario").length,
};
