import { CEFR_LEVELS, type CEFRLevel, type ConversationLessonFamily } from './types';

type LevelFamily = { availableLevels: readonly string[]; defaultLevel: string };
export function resolveConversationLevel(family: LevelFamily, requested?: string | null): CEFRLevel {
  return (requested && family.availableLevels.includes(requested) ? requested : family.defaultLevel) as CEFRLevel;
}
export function validateConversationFamily(family: ConversationLessonFamily) {
  if (!family.id || !family.slug || !family.title.trim() || !family.preview.image || !family.canonicalPath.startsWith('/'))
    throw new Error('Conversation family requires id, slug, title, preview and local path');
  if (!family.availableLevels.length || new Set(family.availableLevels).size !== family.availableLevels.length)
    throw new Error(`${family.id}: duplicate or empty levels`);
  if (!family.availableLevels.includes(family.defaultLevel)) throw new Error(`${family.id}: unavailable default level`);
  for (const level of family.availableLevels) {
    const variant = family.variants[level];
    if (!CEFR_LEVELS.includes(level) || !variant || variant.level !== level || !variant.contentRef || !variant.communicativeObjectives.length)
      throw new Error(`${family.id}: missing or invalid ${level} variant`);
  }
  if (Object.keys(family.variants).some(level => !family.availableLevels.includes(level as CEFRLevel)))
    throw new Error(`${family.id}: variant omitted from availableLevels`);
  return family;
}
export type FamilyCatalogMetadata = {
  familyId?: string;
  level: string;
  levels?: string[];
  path?: string;
  previewByLevel?: Partial<Record<CEFRLevel, { hook: string; image?: string }>>;
};
export function conversationLessonHref(lesson: FamilyCatalogMetadata, requested?: string) {
  if (!lesson.path || !lesson.familyId) return lesson.path;
  const level = resolveConversationLevel({ availableLevels: lesson.levels || [lesson.level], defaultLevel: lesson.level }, requested);
  return `${lesson.path}?level=${level}`;
}
/** Query updates preserve locale, attribution and hash; never accept an unsupported level. */
export function conversationLevelUrl(href: string, family: LevelFamily, requested: string) {
  const url = new URL(href, 'https://spanishcue.local');
  url.searchParams.set('level', resolveConversationLevel(family, requested));
  return `${url.pathname}${url.search}${url.hash}`;
}
