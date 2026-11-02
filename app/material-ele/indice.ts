import { MATERIAL_ELE_PATH, eleLevels, eleTopics } from "./data";
import { ACTIVIDADES_PATH, actividadPages, ejercicioPages, preguntasPages } from "./actividades";
import { temaGroups, temaLevelPages, temaPages } from "./temas";

export const INDICE_PATH = `${MATERIAL_ELE_PATH}/indice`;
export const FEED_PATH = `${MATERIAL_ELE_PATH}/feed.xml`;

/** One row of the full Material ELE index and of the Atom feed. `published` is the day the page family went live. */
export type IndiceEntry = { path: string; title: string; description: string; section: string; published: string };

/* Publication days of each page family (production deploys, UTC). A new family gets its own day here, and the
 * sitemap and the feed use it as lastmod, so crawlers see a real date instead of the build time. */
const published = { hub: "2026-10-30", levels: "2026-10-30", topics: "2026-10-31", groups: "2026-11-01", temas: "2026-11-01", banco: "2026-11-01", niveles: "2026-11-01", indice: "2026-11-01" } as const;

export const indiceSections: { id: string; title: string; entries: IndiceEntry[] }[] = [
  { id: "portadas", title: "Portadas", entries: [
    { path: MATERIAL_ELE_PATH, title: "Material ELE: clases listas para profesores de español | SpanishCue", description: "La portada de Material ELE: niveles, guías, temas y banco de actividades.", section: "Portadas", published: published.hub },
    { path: ACTIVIDADES_PATH, title: "Banco de actividades ELE: fichas, ejercicios y preguntas | SpanishCue", description: "Todas las fichas, ejercicios con soluciones y preguntas de conversación, cada una en su página.", section: "Portadas", published: published.banco },
  ] },
  { id: "niveles", title: "Material ELE por nivel", entries: eleLevels.map((page) => ({ path: page.path, title: page.title, description: page.description, section: "Por nivel", published: published.levels })) },
  { id: "guias", title: "Guías por tema con fichas imprimibles", entries: eleTopics.map((page) => ({ path: page.path, title: page.title, description: page.description, section: "Guías", published: published.topics })) },
  { id: "indices", title: "Índices de temas", entries: temaGroups.map((group) => ({ path: group.path, title: group.title, description: group.description, section: group.label, published: published.groups })) },
  ...temaGroups.map((group) => ({ id: `temas-${group.id}`, title: `${group.label}: temas`, entries: temaPages.filter((page) => page.group === group.id).map((page) => ({ path: page.path, title: page.title, description: page.description, section: group.label, published: published.temas })) })),
  ...temaGroups.map((group) => ({ id: `niveles-${group.id}`, title: `${group.label}: temas por nivel`, entries: temaLevelPages.filter((page) => page.group === group.id).map((page) => ({ path: page.path, title: page.title, description: page.description, section: `${group.label} por nivel`, published: page.group === "gramatica" ? published.niveles : "2026-11-02" })) })),
  { id: "actividades", title: "Banco de actividades", entries: actividadPages.map((page) => ({ path: page.path, title: page.title, description: page.description, section: "Actividades", published: published.banco })) },
  { id: "ejercicios", title: "Ejercicios con soluciones", entries: ejercicioPages.map((page) => ({ path: page.path, title: page.title, description: page.description, section: "Ejercicios", published: published.banco })) },
  { id: "preguntas", title: "Preguntas de conversación por nivel", entries: preguntasPages.map((page) => ({ path: page.path, title: page.title, description: page.description, section: "Preguntas", published: published.banco })) },
];

export const indiceEntries: IndiceEntry[] = indiceSections.flatMap((section) => section.entries);
export const lastModifiedByPath = new Map<string, string>([[INDICE_PATH, published.indice], ...indiceEntries.map((entry): [string, string] => [entry.path, entry.published])]);
export const indiceCount = indiceEntries.length;
export const indiceTitle = `Índice completo de Material ELE: ${indiceCount} páginas para profesores | SpanishCue`;
export const indiceDescription = `Todas las páginas de Material ELE en una lista: ${eleLevels.length} niveles, ${eleTopics.length} guías, ${temaPages.length} temas, ${temaLevelPages.length} temas por nivel y ${actividadPages.length + ejercicioPages.length + preguntasPages.length} fichas del banco de actividades.`;

/** Atom feed of every Material ELE page, newest family first. Search engines accept it as a sitemap-style feed. */
export function materialEleAtom(): string {
  const escape = (text: string) => text.replace(/[<>&"']/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[char] ?? char);
  const entries = [...indiceEntries].sort((a, b) => (a.published < b.published ? 1 : a.published > b.published ? -1 : a.path.localeCompare(b.path)));
  const updated = entries[0]?.published ?? published.indice;
  const item = (entry: IndiceEntry) => `  <entry>\n    <title>${escape(entry.title)}</title>\n    <link rel="alternate" type="text/html" href="https://spanishcue.com${entry.path}"/>\n    <id>https://spanishcue.com${entry.path}</id>\n    <updated>${entry.published}T06:00:00Z</updated>\n    <published>${entry.published}T06:00:00Z</published>\n    <category term="${escape(entry.section)}"/>\n    <summary>${escape(entry.description)}</summary>\n  </entry>`;
  return `<?xml version="1.0" encoding="UTF-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="es">\n  <title>Material ELE de SpanishCue</title>\n  <subtitle>Clases, temas, fichas y ejercicios para profesores de español como lengua extranjera.</subtitle>\n  <link rel="self" type="application/atom+xml" href="https://spanishcue.com${FEED_PATH}"/>\n  <link rel="alternate" type="text/html" href="https://spanishcue.com${MATERIAL_ELE_PATH}"/>\n  <id>https://spanishcue.com${MATERIAL_ELE_PATH}</id>\n  <updated>${updated}T06:00:00Z</updated>\n  <author><name>SpanishCue</name><uri>https://spanishcue.com</uri></author>\n${entries.map(item).join("\n")}\n</feed>\n`;
}
