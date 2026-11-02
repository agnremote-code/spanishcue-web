/**
 * Media of a Material ELE page (plain TS, no CSS: the sitemap imports it too): the cover that represents the page,
 * the class recording the page shows, and the Spanish date format shared by the visible date line and the hub.
 */
import { lessons } from "../lesson-catalog";
import { previewVideo } from "../conversation-preview-videos";
import { lessonCards, type LessonCardData } from "../growth/lessons";

/** The picture that represents a page: the cover of its first class (free first). */
export function pageImage(ids: readonly number[]): string | undefined {
  return lessonCards(ids)[0]?.image;
}

const catalogById = new Map(lessons.map((lesson) => [lesson.id, lesson]));
/** The first class of the page that has a short recording (free first), with the recording and the day the class went live. */
export function elePreviewLesson(ids: readonly number[]): (LessonCardData & { video: string; addedAt: string }) | undefined {
  for (const card of lessonCards(ids)) {
    const video = previewVideo(card.id);
    if (video) return { ...card, video, addedAt: catalogById.get(card.id)?.news?.addedAt ?? "2026-10-30" };
  }
  return undefined;
}

export const formatDateEs = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
