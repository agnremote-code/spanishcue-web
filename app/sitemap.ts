import type { MetadataRoute } from "next";
import { isFreeLesson, localLessonPath } from "./access-policy";
import { freeAutoestudioModules } from "./autoestudio/access";
import { CONVERSATION_HUB_PATH, CONVERSATION_QUESTIONS_PATH, conversationLevels } from "./growth/conversation-levels";
import { grammarLevels } from './growth/grammar';
import { grammarTopicPages } from './growth/grammar-topics';
import { guideModifiedDate } from "./guides/guide-format";
import { lessons } from "./lesson-catalog";
import { resourceLessons, resourcePathForLesson } from "./resource-seo";
import { canonicalUrl, isSearchPrivatePath, languageAlternates } from "./seo";
import { teachingGuides } from "./teaching-guides";

type Entry = MetadataRoute.Sitemap[number];
type Frequency = NonNullable<Entry["changeFrequency"]>;

/** Public Autoestudio level maps; module bodies are PRO except the free weeks. */
export const autoestudioLevelPaths = ["a1", "a2", "b1", "b2", "c1", "c2"].map((level) => `/autoestudio/${level}`);

/**
 * Hand-curated public routes with their crawl priority. Only clean, canonical
 * URLs appear here: no `?lang=` variants, no campaign (/lp) pages, nothing
 * that carries noindex.
 */
const curatedRoutes: { path: string; priority: number; changeFrequency: Frequency }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/spanish-teacher-resources", priority: 0.9, changeFrequency: "weekly" },
  { path: CONVERSATION_HUB_PATH, priority: 0.9, changeFrequency: "weekly" },
  ...conversationLevels.map((level) => ({ path: level.path, priority: 0.8, changeFrequency: "monthly" as Frequency })),
  { path: CONVERSATION_QUESTIONS_PATH, priority: 0.8, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.8, changeFrequency: "weekly" },
  { path: "/guides", priority: 0.8, changeFrequency: "weekly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/spanish-grammar-lessons", priority: 0.9, changeFrequency: "weekly" },
  ...grammarLevels.map(level => ({path: level.path, priority: 0.8, changeFrequency: "monthly" as Frequency})),
  ...grammarTopicPages.filter(topic => topic.path.startsWith("/spanish-grammar-lessons/")).map(topic => ({path: topic.path, priority: 0.7, changeFrequency: "monthly" as Frequency})),
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
  { path: "/ele-recursos-profesores", priority: 0.7, changeFrequency: "monthly" },
  { path: "/free-spanish-lesson", priority: 0.7, changeFrequency: "monthly" },
  { path: "/online-spanish-teaching-resources", priority: 0.6, changeFrequency: "monthly" },
  { path: "/sistema-verbal", priority: 0.6, changeFrequency: "monthly" },
  { path: "/autoestudio", priority: 0.7, changeFrequency: "monthly" },
  ...autoestudioLevelPaths.map((path) => ({ path, priority: 0.6, changeFrequency: "monthly" as Frequency })),
  ...[...freeAutoestudioModules].map((path) => ({ path, priority: 0.5, changeFrequency: "monthly" as Frequency })),
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];

function entry(path: string, priority: number, changeFrequency: Frequency, lastModified?: string): Entry {
  const languages = languageAlternates(path);
  return {
    url: canonicalUrl(path),
    priority,
    changeFrequency,
    ...(lastModified ? { lastModified } : {}),
    ...(languages ? { alternates: { languages } } : {}),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  const entries: Entry[] = [];
  const push = (item: Entry) => {
    if (seen.has(item.url) || isSearchPrivatePath(new URL(item.url).pathname)) return;
    seen.add(item.url);
    entries.push(item);
  };

  for (const route of curatedRoutes) push(entry(route.path, route.priority, route.changeFrequency));

  for (const lesson of lessons) {
    if (!isFreeLesson(lesson.id)) continue;
    const path = localLessonPath(lesson);
    if (path) push(entry(path, 0.7, "monthly"));
  }

  for (const lesson of resourceLessons) push(entry(resourcePathForLesson(lesson), 0.6, "monthly"));

  for (const item of teachingGuides.map((guide) => entry(`/guides/${guide.slug}`, 0.6, "monthly", guideModifiedDate(guide)))) push(item);

  return entries;
}
