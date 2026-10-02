import { localLessonPath } from '../access-policy';

export type LessonUpdate = { kind: 'new' | 'featured'; publishedAt: string; expiresAt?: string; priority?: number };
export type Announcement = { id: string; kind: 'announcement'; title: string; copy: string; href: string; image?: string; publishedAt: string; expiresAt?: string; priority?: number };
export type FeaturedUpdate = { id: string; lessonId?: number; kind: 'new' | 'featured' | 'announcement'; title: string; copy: string; href: string; image?: string; category?: string; level?: string; publishedAt: string; priority: number };
type UpdateLesson = { id: number; title: string; subtitle: string; category: string; level: string; displayLevel?: string; image: string; path?: string; special?: boolean; update?: LessonUpdate };

/** Promotion metadata by canonical lesson ID; the historical teaching catalog stays byte-identical. */
export const lessonUpdates: Readonly<Record<number, LessonUpdate>> = {
  224: { kind: 'new', publishedAt: '2026-10-01', priority: 10 },
  223: { kind: 'new', publishedAt: '2026-09-30', priority: 8 },
  216: { kind: 'featured', publishedAt: '2026-09-28', priority: 6 },
};

/** Add collection/function announcements here. */
export const announcements: Announcement[] = [];

export function selectFeaturedUpdates(lessons: readonly UpdateLesson[], notices: readonly Announcement[] = announcements, now = new Date()): FeaturedUpdate[] {
  const eligible = (item: { publishedAt: string; expiresAt?: string }) => {
    const published = Date.parse(item.publishedAt);
    const expires = item.expiresAt ? Date.parse(item.expiresAt) : Infinity;
    return Number.isFinite(published) && published <= now.getTime() && expires > now.getTime();
  };
  const items: FeaturedUpdate[] = lessons.flatMap(lesson => {
    const update = lesson.update ?? lessonUpdates[lesson.id];
    if (!update || !eligible(update)) return [];
    const href = localLessonPath(lesson);
    if (!href) return [];
    return [{ id: `lesson-${lesson.id}`, lessonId: lesson.id, kind: update.kind, title: lesson.title, copy: lesson.subtitle,
      href, image: lesson.image, category: lesson.category, level: lesson.displayLevel || lesson.level,
      publishedAt: update.publishedAt, priority: update.priority || 0 }];
  });
  for (const notice of notices) {
    if (!eligible(notice) || !notice.href.startsWith('/') || notice.href.startsWith('//') || /[\\\u0000-\u001f]/.test(notice.href)) continue;
    items.push({ ...notice, priority: notice.priority || 0 });
  }
  return items.sort((a,b) => b.priority-a.priority || Date.parse(b.publishedAt)-Date.parse(a.publishedAt) || a.id.localeCompare(b.id)).slice(0,6);
}
