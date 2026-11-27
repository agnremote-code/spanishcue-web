import { isPrunedNoindexPath, isPrunedPath } from "./seo-prune";
import type { MetadataRoute } from "next";
import { isFreeLesson, localLessonPath } from "./access-policy";
import { freeAutoestudioModules } from "./autoestudio/access";
import { CONVERSATION_HUB_PATH, CONVERSATION_QUESTIONS_PATH, conversationLevels } from "./growth/conversation-levels";
import { grammarLevels } from './growth/grammar';
import { grammarTopicPages } from './growth/grammar-topics';
import { guideModifiedDate } from "./guides/guide-format";
import { lessons } from "./lesson-catalog";
import { MATERIAL_ELE_PATH, elePages } from "./material-ele/data";
import { temaGroups, temaLevelPages, temaPages } from "./material-ele/temas";
import { ACTIVIDADES_PATH, bancoPaths } from "./material-ele/actividades";
import { INDICE_PATH, lastModifiedByPath } from "./material-ele/indice";
import { elePreviewLesson } from "./material-ele/media";
import { guiaPages } from "./material-ele/guias";
import { FICHAS_PATH, fichaPages } from "./material-ele/fichas";
import { FICHAS_GRATIS_LEVELS, FICHAS_GRATIS_PATH, fichasGratis, packPath } from "./material-ele/fichas-gratis";
import { PLANTILLAS_PATH, plantillaFiles, plantillas } from "./material-ele/plantillas";
import { CONJUGACION_PATH, verbPath, verbos } from "./conjugacion/verbos";
import { SPANISH_VERBS_PATH, verbPathEn } from "./conjugacion/verbos-en";
import { IRREGULARES_PATH, tiempoPages } from "./conjugacion/tiempos";
import { MODO_PATH, modoPath } from "./indicativo-o-subjuntivo/data";
import { expresiones } from "./indicativo-o-subjuntivo/expresiones";
import { PREP_PATH, prepGroups, prepVerbPath } from "./verbos-con-preposicion/data";
import { verbosPrep } from "./verbos-con-preposicion/verbos";
import { PASADO_PATH, pasadoPath } from "./indefinido-o-imperfecto/data";
import { marcadores } from "./indefinido-o-imperfecto/marcadores";
import { SER_PATH, serPath, serSlugs } from "./ser-o-estar/data";
import { PORPARA_PATH, porParaPath } from "./por-o-para/data";
import { TRAINER_PATH, TRAINER_PATH_EN } from "./practicar-conjugacion/drill";
import { usosPorPara } from "./por-o-para/usos";
import { gapPaths } from "./ejercicios-gramatica/data";
import { lessonCards } from "./growth/lessons";
import { RECURSOS_PATH, recursoPathForLesson, resourceLessons, resourcePathForLesson } from "./resource-seo";
import { canonicalUrl, isSearchPrivatePath, languageAlternates } from "./seo";
import { teachingGuides } from "./teaching-guides";
import { usCatalog } from "./us-content/catalog.generated";

type Entry = MetadataRoute.Sitemap[number];
type Frequency = NonNullable<Entry["changeFrequency"]>;

/** Public Autoestudio level maps; module bodies are PRO except the free weeks. */
export const autoestudioLevelPaths = ["a1", "a2", "b1", "b2", "c1", "c2"].map((level) => `/autoestudio/${level}`);

/**
 * Hand-curated public routes with their crawl priority. Only clean, canonical
 * URLs appear here: no `?lang=` variants, only the two explicitly indexable
 * purchase landings under /lp, and nothing that carries noindex.
 */
const curatedRoutes: { path: string; priority: number; changeFrequency: Frequency }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/academias", priority: 0.9, changeFrequency: "monthly" },
  { path: "/para-profesores", priority: 0.9, changeFrequency: "monthly" },
  { path: "/aprender-espanol", priority: 0.8, changeFrequency: "monthly" },
  { path: "/spanish-teacher-resources", priority: 0.9, changeFrequency: "weekly" },
  { path: "/lp/spanish-teacher-resources", priority: 0.95, changeFrequency: "weekly" },
  { path: "/lp/online-spanish-teaching-resources", priority: 0.95, changeFrequency: "weekly" },
  { path: CONVERSATION_HUB_PATH, priority: 0.9, changeFrequency: "weekly" },
  ...conversationLevels.map((level) => ({ path: level.path, priority: 0.8, changeFrequency: "monthly" as Frequency })),
  { path: CONVERSATION_QUESTIONS_PATH, priority: 0.8, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.8, changeFrequency: "weekly" },
  { path: RECURSOS_PATH, priority: 0.85, changeFrequency: "weekly" },
  { path: "/guides", priority: 0.8, changeFrequency: "weekly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/spanish-grammar-lessons", priority: 0.9, changeFrequency: "weekly" },
  ...grammarLevels.map(level => ({path: level.path, priority: 0.8, changeFrequency: "monthly" as Frequency})),
  ...grammarTopicPages.filter(topic => topic.path.startsWith("/spanish-grammar-lessons/")).map(topic => ({path: topic.path, priority: 0.7, changeFrequency: "monthly" as Frequency})),
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
  { path: "/equipo", priority: 0.5, changeFrequency: "monthly" },
  { path: "/datos", priority: 0.6, changeFrequency: "weekly" },
  { path: "/spanish-reading-comprehension", priority: 0.6, changeFrequency: "monthly" },
  ...["a1", "a2", "b1"].map((level) => ({ path: `/spanish-reading-comprehension/${level}`, priority: 0.5, changeFrequency: "monthly" as Frequency })),
  { path: "/spanish-vocabulary", priority: 0.6, changeFrequency: "monthly" },
  ...usCatalog.filter((entry) => entry.family === "vocabulary").map((entry) => ({ path: `/spanish-vocabulary/${entry.slug}`, priority: 0.5, changeFrequency: "monthly" as Frequency })),
  { path: "/spanish-verb-practice", priority: 0.6, changeFrequency: "monthly" },
  ...usCatalog.filter((entry) => entry.family === "verbs").map((entry) => ({ path: `/spanish-verb-practice/${entry.slug}`, priority: 0.5, changeFrequency: "monthly" as Frequency })),
  { path: "/spanish-grammar-practice", priority: 0.6, changeFrequency: "monthly" },
  { path: "/ap-spanish-language", priority: 0.6, changeFrequency: "monthly" },
  { path: "/spanish-sub-plans", priority: 0.6, changeFrequency: "monthly" },
  ...["spanish-1", "spanish-2", "spanish-3"].map((course) => ({ path: `/spanish-sub-plans/${course}`, priority: 0.5, changeFrequency: "monthly" as Frequency })),
  ...["argumentative-essay", "project-presentation", "listening-and-reading"].map((part) => ({ path: `/ap-spanish-language/${part}`, priority: 0.5, changeFrequency: "monthly" as Frequency })),
  ...["ser-vs-estar", "preterite-vs-imperfect", "subjunctive", "por-vs-para", "preterite", "imperfect", "present-perfect", "future-tense", "reflexive-verbs", "direct-object-pronouns"].map((topic) => ({ path: `/spanish-grammar-practice/${topic}`, priority: 0.5, changeFrequency: "monthly" as Frequency })),
  ...usCatalog.filter((entry) => entry.family === "grammar").map((entry) => ({ path: `/spanish-grammar-practice/${entry.slug}`, priority: 0.5, changeFrequency: "monthly" as Frequency })),
  { path: "/datos/errores-preterito-perfecto-a2", priority: 0.6, changeFrequency: "monthly" },
  { path: "/datos/que-autocompleta-google-en-gramatica", priority: 0.6, changeFrequency: "monthly" },
  { path: MATERIAL_ELE_PATH, priority: 0.95, changeFrequency: "weekly" },
  { path: "/alternativa-a-profedeele", priority: 0.8, changeFrequency: "monthly" },
  { path: "/clases-de-espanol-listas-para-dar", priority: 0.85, changeFrequency: "monthly" },
  ...guiaPages.map((page) => ({ path: page.path, priority: 0.85, changeFrequency: "monthly" as Frequency })),
  ...elePages.map((page) => ({ path: page.path, priority: page.kind === "level" ? 0.85 : 0.8, changeFrequency: "monthly" as Frequency })),
  ...temaGroups.map((group) => ({ path: group.path, priority: 0.85, changeFrequency: "weekly" as Frequency })),
  ...temaPages.map((page) => ({ path: page.path, priority: 0.75, changeFrequency: "monthly" as Frequency })),
  ...temaLevelPages.map((page) => ({ path: page.path, priority: 0.7, changeFrequency: "monthly" as Frequency })),
  { path: ACTIVIDADES_PATH, priority: 0.85, changeFrequency: "weekly" },
  ...bancoPaths.map((path) => ({ path, priority: 0.7, changeFrequency: "monthly" as Frequency })),
  { path: FICHAS_GRATIS_PATH, priority: 0.9, changeFrequency: "weekly" },
  ...fichasGratis.map((page) => ({ path: page.freePath, priority: 0.8, changeFrequency: "monthly" as Frequency })),
  ...FICHAS_GRATIS_LEVELS.map((level) => ({ path: packPath(level), priority: 0.75, changeFrequency: "monthly" as Frequency })),
  { path: FICHAS_PATH, priority: 0.85, changeFrequency: "weekly" },
  ...fichaPages.map((page) => ({ path: page.path, priority: 0.75, changeFrequency: "monthly" as Frequency })),
  { path: PLANTILLAS_PATH, priority: 0.85, changeFrequency: "weekly" },
  ...plantillas.map((page) => ({ path: page.path, priority: 0.8, changeFrequency: "monthly" as Frequency })),
  { path: INDICE_PATH, priority: 0.8, changeFrequency: "weekly" },
  { path: CONJUGACION_PATH, priority: 0.85, changeFrequency: "monthly" },
  { path: TRAINER_PATH, priority: 0.85, changeFrequency: "monthly" },
  { path: TRAINER_PATH_EN, priority: 0.85, changeFrequency: "monthly" },
  { path: SPANISH_VERBS_PATH, priority: 0.85, changeFrequency: "monthly" },
  ...verbos.map((verb) => ({ path: verbPathEn(verb), priority: 0.6, changeFrequency: "monthly" as Frequency })),
  { path: IRREGULARES_PATH, priority: 0.8, changeFrequency: "monthly" },
  ...tiempoPages.map((page) => ({ path: page.path, priority: 0.75, changeFrequency: "monthly" as Frequency })),
  ...verbos.map((verb) => ({ path: verbPath(verb), priority: 0.6, changeFrequency: "monthly" as Frequency })),
  { path: MODO_PATH, priority: 0.85, changeFrequency: "monthly" },
  ...expresiones.map((e) => ({ path: modoPath(e.slug), priority: 0.7, changeFrequency: "monthly" as Frequency })),
  { path: PREP_PATH, priority: 0.85, changeFrequency: "monthly" },
  ...prepGroups.map((g) => ({ path: g.path, priority: 0.75, changeFrequency: "monthly" as Frequency })),
  ...verbosPrep.map((e) => ({ path: prepVerbPath(e), priority: 0.7, changeFrequency: "monthly" as Frequency })),
  { path: PASADO_PATH, priority: 0.85, changeFrequency: "monthly" },
  ...marcadores.map((m) => ({ path: pasadoPath(m.slug), priority: 0.7, changeFrequency: "monthly" as Frequency })),
  { path: SER_PATH, priority: 0.85, changeFrequency: "monthly" },
  ...serSlugs().map((slug) => ({ path: serPath(slug), priority: 0.7, changeFrequency: "monthly" as Frequency })),
  { path: PORPARA_PATH, priority: 0.85, changeFrequency: "monthly" },
  ...usosPorPara.map((u) => ({ path: porParaPath(u.slug), priority: 0.7, changeFrequency: "monthly" as Frequency })),
  ...gapPaths().map((path) => ({ path, priority: path.split("/").length === 2 ? 0.85 : 0.7, changeFrequency: "monthly" as Frequency })),
  { path: "/ele-recursos-profesores", priority: 0.7, changeFrequency: "monthly" },
  { path: "/free-spanish-lesson", priority: 0.7, changeFrequency: "monthly" },
  { path: "/online-spanish-teaching-resources", priority: 0.6, changeFrequency: "monthly" },
  { path: "/sistema-verbal", priority: 0.6, changeFrequency: "monthly" },
  { path: "/material-ele/conjugador-para-tu-web", priority: 0.75, changeFrequency: "monthly" },
  { path: "/autoestudio", priority: 0.7, changeFrequency: "monthly" },
  ...autoestudioLevelPaths.map((path) => ({ path, priority: 0.6, changeFrequency: "monthly" as Frequency })),
  ...[...freeAutoestudioModules].map((path) => ({ path, priority: 0.5, changeFrequency: "monthly" as Frequency })),
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];

type Media = Pick<Entry, "images" | "videos">;

/** Image and video sitemap data of a Material ELE page: the covers of its classes and the recording the page shows.
 * The recording itself is public (it plays without an account), so `requires_subscription` is always "no", even for a PRO class. */
function pageMedia(path: string, lessonIds: readonly number[]): Media {
  const images = [...new Set(lessonCards(lessonIds).slice(0, 8).map((card) => canonicalUrl(card.image)))];
  const preview = elePreviewLesson(lessonIds);
  const videos: Entry["videos"] = preview
    ? [{ title: `Así se ve la clase «${preview.title}»`, thumbnail_loc: canonicalUrl(preview.image), description: `${preview.subtitle} Grabación de la clase interactiva de SpanishCue (${preview.level}), tal como la ve el alumno en pantalla.`, content_loc: canonicalUrl(preview.video), publication_date: `${preview.addedAt}T06:00:00Z`, family_friendly: "yes", requires_subscription: "no", live: "no" }]
    : undefined;
  return { ...(images.length ? { images } : {}), ...(videos ? { videos } : {}) };
}
const mediaByPath = new Map<string, Media>([...temaPages, ...temaLevelPages].map((page) => [page.path, pageMedia(page.path, page.lessonIds)]));
for (const page of [...elePages, ...guiaPages]) mediaByPath.set(page.path, pageMedia(page.path, page.lessonIds));
for (const page of plantillas) mediaByPath.set(page.path, { images: [canonicalUrl(plantillaFiles(page.slug).preview)] });
mediaByPath.set(PLANTILLAS_PATH, { images: plantillas.map((page) => canonicalUrl(plantillaFiles(page.slug).preview)) });

function entry(path: string, priority: number, changeFrequency: Frequency, lastModified?: string, media?: Media): Entry {
  const languages = languageAlternates(path);
  return {
    url: canonicalUrl(path),
    priority,
    changeFrequency,
    ...(lastModified ? { lastModified } : {}),
    ...(languages ? { alternates: { languages } } : {}),
    ...(media ?? {}),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  const entries: Entry[] = [];
  const push = (item: Entry) => {
    if (seen.has(item.url) || isSearchPrivatePath(new URL(item.url).pathname) || isPrunedPath(new URL(item.url).pathname) || isPrunedNoindexPath(new URL(item.url).pathname)) return;
    seen.add(item.url);
    entries.push(item);
  };

  for (const route of curatedRoutes) push(entry(route.path, route.priority, route.changeFrequency, lastModifiedByPath.get(route.path), mediaByPath.get(route.path)));

  for (const lesson of lessons) {
    if (!isFreeLesson(lesson.id)) continue;
    const path = localLessonPath(lesson);
    if (path) push(entry(path, 0.7, "monthly", undefined, { images: [canonicalUrl(lesson.image)] }));
  }

  for (const lesson of resourceLessons) push(entry(resourcePathForLesson(lesson), 0.6, "monthly", undefined, { images: [canonicalUrl(lesson.image)] }));
  for (const lesson of resourceLessons) push(entry(recursoPathForLesson(lesson), 0.65, "monthly", undefined, { images: [canonicalUrl(lesson.image)] }));

  for (const item of teachingGuides.map((guide) => entry(`/guides/${guide.slug}`, 0.6, "monthly", guideModifiedDate(guide)))) push(item);

  return entries;
}
