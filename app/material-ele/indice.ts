import { MATERIAL_ELE_PATH, eleLevels, eleTopics } from "./data";
import { ACTIVIDADES_PATH, actividadPages, ejercicioPages, preguntasPages } from "./actividades";
import { temaGroups, temaLevelPages, temaPages } from "./temas";
import { lessons } from "../lesson-catalog";

export const INDICE_PATH = `${MATERIAL_ELE_PATH}/indice`;
export const FEED_PATH = `${MATERIAL_ELE_PATH}/feed.xml`;

/** One row of the full Material ELE index and of the Atom feed. `published` is the day the page family went live. */
export type IndiceEntry = { path: string; title: string; description: string; section: string; published: string; modified: string };

/* Publication days of each page family (production deploys, UTC). A new family gets its own day here, and the
 * sitemap and the feed use it as lastmod, so crawlers see a real date instead of the build time. */
const published = { hub: "2026-10-30", levels: "2026-10-30", topics: "2026-10-31", groups: "2026-11-01", temas: "2026-11-01", banco: "2026-11-01", niveles: "2026-11-01", indice: "2026-11-01", formatos: "2026-11-02", otherLevels: "2026-11-02" } as const;

const addedAtById = new Map(lessons.flatMap((lesson) => (lesson.news?.addedAt ? [[lesson.id, lesson.news.addedAt] as const] : [])));
/** A page changes when a class it lists goes live after the page did, so its modified day is the newest of both. */
export function modifiedDate(publishedDay: string, lessonIds: readonly number[] = []): string {
  return lessonIds.reduce<string>((latest, id) => { const added = addedAtById.get(id); return added && added > latest ? added : latest; }, publishedDay);
}
const row = (path: string, title: string, description: string, section: string, publishedDay: string, lessonIds: readonly number[] = []): IndiceEntry => ({ path, title, description, section, published: publishedDay, modified: modifiedDate(publishedDay, lessonIds) });
const temaPublished = (group: string) => (group === "formatos" ? published.formatos : published.temas);
const levelPublished = (group: string) => (group === "gramatica" ? published.niveles : group === "formatos" ? published.formatos : published.otherLevels);

export const indiceSections: { id: string; title: string; entries: IndiceEntry[] }[] = [
  { id: "portadas", title: "Portadas", entries: [
    row(MATERIAL_ELE_PATH, "Material ELE: clases listas para profesores de español | SpanishCue", "La portada de Material ELE: niveles, guías, temas y banco de actividades.", "Portadas", published.hub, lessons.map((lesson) => lesson.id)),
    row(ACTIVIDADES_PATH, "Banco de actividades ELE: fichas, ejercicios y preguntas | SpanishCue", "Todas las fichas, ejercicios con soluciones y preguntas de conversación, cada una en su página.", "Portadas", published.banco),
  ] },
  { id: "niveles", title: "Material ELE por nivel", entries: eleLevels.map((page) => row(page.path, page.title, page.description, "Por nivel", published.levels, page.lessonIds)) },
  { id: "guias", title: "Guías por tema con fichas imprimibles", entries: eleTopics.map((page) => row(page.path, page.title, page.description, "Guías", published.topics, page.lessonIds)) },
  { id: "indices", title: "Índices de temas", entries: temaGroups.map((group) => row(group.path, group.title, group.description, group.label, group.id === "formatos" ? published.formatos : published.groups, temaPages.filter((page) => page.group === group.id).flatMap((page) => page.lessonIds))) },
  ...temaGroups.map((group) => ({ id: `temas-${group.id}`, title: `${group.label}: temas`, entries: temaPages.filter((page) => page.group === group.id).map((page) => row(page.path, page.title, page.description, group.label, temaPublished(group.id), page.lessonIds)) })),
  ...temaGroups.map((group) => ({ id: `niveles-${group.id}`, title: `${group.label}: temas por nivel`, entries: temaLevelPages.filter((page) => page.group === group.id).map((page) => row(page.path, page.title, page.description, `${group.label} por nivel`, levelPublished(group.id), page.lessonIds)) })),
  { id: "actividades", title: "Banco de actividades", entries: actividadPages.map((page) => row(page.path, page.title, page.description, "Actividades", published.banco)) },
  { id: "ejercicios", title: "Ejercicios con soluciones", entries: ejercicioPages.map((page) => row(page.path, page.title, page.description, "Ejercicios", published.banco)) },
  { id: "preguntas", title: "Preguntas de conversación por nivel", entries: preguntasPages.map((page) => row(page.path, page.title, page.description, "Preguntas", published.banco)) },
];

export const indiceEntries: IndiceEntry[] = indiceSections.flatMap((section) => section.entries);
export const lastModifiedByPath = new Map<string, string>([[INDICE_PATH, published.indice], ...indiceEntries.map((entry): [string, string] => [entry.path, entry.modified])]);
const entryByPath = new Map(indiceEntries.map((entry) => [entry.path, entry]));
/** Publication and last-change days of a Material ELE page, for the visible date line and the WebPage schema. */
export function pageDates(path: string): { datePublished: string; dateModified: string } {
  const entry = entryByPath.get(path);
  return entry ? { datePublished: entry.published, dateModified: entry.modified } : { datePublished: published.indice, dateModified: published.indice };
}
export const indiceCount = indiceEntries.length;
export const indiceTitle = `Índice completo de Material ELE: ${indiceCount} páginas para profesores | SpanishCue`;
export const indiceDescription = `Todas las páginas de Material ELE en una lista: ${eleLevels.length} niveles, ${eleTopics.length} guías, ${temaPages.length} temas, ${temaLevelPages.length} temas por nivel y ${actividadPages.length + ejercicioPages.length + preguntasPages.length} fichas del banco de actividades.`;

/** Atom feed of every Material ELE page, newest family first. Search engines accept it as a sitemap-style feed. */
export function materialEleAtom(): string {
  const escape = (text: string) => text.replace(/[<>&"']/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[char] ?? char);
  const entries = [...indiceEntries].sort((a, b) => (a.modified < b.modified ? 1 : a.modified > b.modified ? -1 : a.path.localeCompare(b.path)));
  const updated = entries[0]?.modified ?? published.indice;
  const item = (entry: IndiceEntry) => `  <entry>\n    <title>${escape(entry.title)}</title>\n    <link rel="alternate" type="text/html" href="https://spanishcue.com${entry.path}"/>\n    <id>https://spanishcue.com${entry.path}</id>\n    <updated>${entry.modified}T06:00:00Z</updated>\n    <published>${entry.published}T06:00:00Z</published>\n    <category term="${escape(entry.section)}"/>\n    <summary>${escape(entry.description)}</summary>\n  </entry>`;
  return `<?xml version="1.0" encoding="UTF-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="es">\n  <title>Material ELE de SpanishCue</title>\n  <subtitle>Clases, temas, fichas y ejercicios para profesores de español como lengua extranjera.</subtitle>\n  <link rel="self" type="application/atom+xml" href="https://spanishcue.com${FEED_PATH}"/>\n  <link rel="alternate" type="text/html" href="https://spanishcue.com${MATERIAL_ELE_PATH}"/>\n  <id>https://spanishcue.com${MATERIAL_ELE_PATH}</id>\n  <updated>${updated}T06:00:00Z</updated>\n  <author><name>SpanishCue</name><uri>https://spanishcue.com</uri></author>\n${entries.map(item).join("\n")}\n</feed>\n`;
}
