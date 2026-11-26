import { noindexLevelPaths } from "./seo-prune-n4";

/**
 * SEO plan, step 4 (docs/seo-plan/04_PLAN_PODA.csv): one search intent = one URL.
 *
 * `prunedRedirects` holds the URLs consolidated into another one (301). Entries are
 * added in batches of at most 20 (docs/seo-plan/lotes/R*.csv); each destination is a
 * final URL, never another redirect. The Worker answers these paths with a 301 before
 * routing, the sitemap and the Material ELE index drop them, and internal links go
 * straight to the destination through `livePath`.
 */
export const prunedRedirects: ReadonlyMap<string, string> = new Map([
  // Lote R1 (26/11/2026): exercise pages whose intent the interactive hub already owns.
  ["/material-ele/ejercicio/gustar", "/ejercicios-de-gustar"],
  ["/material-ele/ejercicio/imperativo", "/ejercicios-de-imperativo"],
  ["/material-ele/ejercicio/indefinido-e-imperfecto", "/indefinido-o-imperfecto"],
  ["/material-ele/ejercicio/indicativo-o-subjuntivo", "/indicativo-o-subjuntivo"],
  ["/material-ele/ejercicio/por-y-para", "/por-o-para"],
  ["/material-ele/ejercicio/pronombres-de-objeto", "/ejercicios-de-pronombres"],
  ["/material-ele/ejercicio/ser-y-estar", "/ser-o-estar"],
  // Lote R1: grammar index topics duplicating the Material ELE topic page, with their levels.
  ["/material-ele/gramatica/acentuacion", "/material-ele/acentuacion"],
  ["/material-ele/gramatica/acentuacion/a1", "/material-ele/acentuacion"],
  ["/material-ele/gramatica/adjetivos", "/material-ele/adjetivos"],
  ["/material-ele/gramatica/adjetivos/a1", "/material-ele/adjetivos"],
  ["/material-ele/gramatica/adjetivos/a2", "/material-ele/adjetivos"],
  ["/material-ele/gramatica/adjetivos/b2", "/material-ele/adjetivos"],
  ["/material-ele/gramatica/adverbios-de-frecuencia", "/material-ele/adverbios-de-frecuencia"],
  ["/material-ele/gramatica/adverbios-de-frecuencia/a1", "/material-ele/adverbios-de-frecuencia"],
  ["/material-ele/gramatica/articulos", "/material-ele/articulos"],
  ["/material-ele/gramatica/articulos/a1", "/material-ele/articulos"],
  ["/material-ele/gramatica/comparativos-y-superlativos", "/material-ele/comparativos-y-superlativos"],
  ["/material-ele/gramatica/comparativos-y-superlativos/a2", "/material-ele/comparativos-y-superlativos"],
  ["/material-ele/gramatica/comparativos-y-superlativos/b2", "/material-ele/comparativos-y-superlativos"],
  // Lote R2 (26/11/2026): grammar index topics duplicating the Material ELE topic page, with their levels.
  ["/material-ele/gramatica/conectores", "/material-ele/conectores"],
  ["/material-ele/gramatica/conectores/a2", "/material-ele/conectores"],
  ["/material-ele/gramatica/conectores/b1", "/material-ele/conectores"],
  ["/material-ele/gramatica/conectores/b2", "/material-ele/conectores"],
  ["/material-ele/gramatica/conectores/c1", "/material-ele/conectores"],
  ["/material-ele/gramatica/cuantificadores", "/material-ele/cuantificadores"],
  ["/material-ele/gramatica/cuantificadores/a2", "/material-ele/cuantificadores"],
  ["/material-ele/gramatica/cuantificadores/b1", "/material-ele/cuantificadores"],
  ["/material-ele/gramatica/estilo-indirecto", "/material-ele/estilo-indirecto"],
  ["/material-ele/gramatica/estilo-indirecto/b1", "/material-ele/estilo-indirecto"],
  ["/material-ele/gramatica/estilo-indirecto/b2", "/material-ele/estilo-indirecto"],
  ["/material-ele/gramatica/expresiones-de-tiempo", "/material-ele/expresiones-de-tiempo"],
  ["/material-ele/gramatica/expresiones-de-tiempo/a2", "/material-ele/expresiones-de-tiempo"],
  ["/material-ele/gramatica/genero-y-numero", "/material-ele/genero-y-numero"],
  ["/material-ele/gramatica/genero-y-numero/a1", "/material-ele/genero-y-numero"],
  ["/material-ele/gramatica/genero-y-numero/b1", "/material-ele/genero-y-numero"],
  ["/material-ele/gramatica/gustar", "/material-ele/gustar"],
  ["/material-ele/gramatica/imperativo", "/material-ele/imperativo"],
  ["/material-ele/gramatica/imperativo/a2", "/material-ele/imperativo"],
  // Lote R3 (26/11/2026): grammar index topics duplicating the Material ELE topic page, with their levels.
  ["/material-ele/gramatica/indicativo-o-subjuntivo", "/material-ele/indicativo-o-subjuntivo"],
  ["/material-ele/gramatica/indicativo-o-subjuntivo/b1", "/material-ele/indicativo-o-subjuntivo"],
  ["/material-ele/gramatica/indicativo-o-subjuntivo/c1", "/material-ele/indicativo-o-subjuntivo"],
  ["/material-ele/gramatica/interrogativos", "/material-ele/interrogativos"],
  ["/material-ele/gramatica/interrogativos/a1", "/material-ele/interrogativos"],
  ["/material-ele/gramatica/negacion", "/material-ele/negacion"],
  ["/material-ele/gramatica/oraciones-causales", "/material-ele/oraciones-causales"],
  ["/material-ele/gramatica/oraciones-causales/b1", "/material-ele/oraciones-causales"],
  ["/material-ele/gramatica/oraciones-concesivas", "/material-ele/oraciones-concesivas"],
  ["/material-ele/gramatica/oraciones-concesivas/b1", "/material-ele/oraciones-concesivas"],
  ["/material-ele/gramatica/oraciones-concesivas/b2", "/material-ele/oraciones-concesivas"],
  ["/material-ele/gramatica/oraciones-consecutivas", "/material-ele/oraciones-consecutivas"],
  ["/material-ele/gramatica/oraciones-de-relativo", "/material-ele/oraciones-de-relativo"],
  ["/material-ele/gramatica/oraciones-de-relativo/a2", "/material-ele/oraciones-de-relativo"],
  ["/material-ele/gramatica/oraciones-de-relativo/c1", "/material-ele/oraciones-de-relativo"],
  ["/material-ele/gramatica/oraciones-finales", "/material-ele/oraciones-finales"],
  ["/material-ele/gramatica/oraciones-finales/b1", "/material-ele/oraciones-finales"],
  ["/material-ele/gramatica/oraciones-temporales", "/material-ele/oraciones-temporales"],
  ["/material-ele/gramatica/oraciones-temporales/a2", "/material-ele/oraciones-temporales"],
  ["/material-ele/gramatica/oraciones-temporales/b2", "/material-ele/oraciones-temporales"],
  // Lote R4 (26/11/2026): grammar index topics duplicating the Material ELE topic page, with their levels.
  ["/material-ele/gramatica/perifrasis-verbales", "/material-ele/perifrasis-verbales"],
  ["/material-ele/gramatica/perifrasis-verbales/b1", "/material-ele/perifrasis-verbales"],
  ["/material-ele/gramatica/perifrasis-verbales/b2", "/material-ele/perifrasis-verbales"],
  ["/material-ele/gramatica/perifrasis-verbales/c1", "/material-ele/perifrasis-verbales"],
  ["/material-ele/gramatica/por-y-para", "/material-ele/por-y-para"],
  ["/material-ele/gramatica/preposiciones", "/material-ele/preposiciones"],
  ["/material-ele/gramatica/preposiciones-de-lugar", "/material-ele/preposiciones-de-lugar"],
  ["/material-ele/gramatica/preposiciones/a1", "/material-ele/preposiciones"],
  ["/material-ele/gramatica/preposiciones/b2", "/material-ele/preposiciones"],
  ["/material-ele/gramatica/presente-de-indicativo", "/material-ele/presente-de-indicativo"],
  ["/material-ele/gramatica/presente-de-indicativo/a1", "/material-ele/presente-de-indicativo"],
  ["/material-ele/gramatica/presente-de-indicativo/a2", "/material-ele/presente-de-indicativo"],
  ["/material-ele/gramatica/preterito-perfecto", "/material-ele/preterito-perfecto"],
  ["/material-ele/gramatica/preterito-perfecto/a2", "/material-ele/preterito-perfecto"],
  ["/material-ele/gramatica/preterito-pluscuamperfecto", "/material-ele/preterito-pluscuamperfecto"],
  ["/material-ele/gramatica/pronombres-de-objeto", "/material-ele/pronombres-de-objeto"],
  ["/material-ele/gramatica/pronombres-de-objeto/a2", "/material-ele/pronombres-de-objeto"],
  ["/material-ele/gramatica/pronombres-de-objeto/c1", "/material-ele/pronombres-de-objeto"],
  ["/material-ele/gramatica/pronombres-personales", "/material-ele/pronombres-personales"],
  ["/material-ele/gramatica/pronombres-personales/a1", "/material-ele/pronombres-personales"],
]);

/**
 * Families taken out of the index (`noindex, follow`), applied one family per batch
 * (owner decision, 26/11/2026). The pages stay available and linkable for visitors;
 * they only leave search results, the sitemap and the hreflang pairs.
 */
const NOINDEX_FAMILIES: readonly { prefix: string; keep?: (path: string) => boolean }[] = [
  // Lote N1: English conjugation pages (1,259 URLs, no internal links, SERP owned by dictionaries).
  { prefix: "/spanish-verbs" },
  // Lote N2: one template table per verb (1,258 URLs, SERP owned by WordReference, Reverso and the RAE).
  // The hub and the irregular-verb guides by tense stay indexable.
  { prefix: "/conjugacion", keep: (path) => path === "/conjugacion" || path === "/conjugacion/irregulares" || path.startsWith("/conjugacion/irregulares/") },
  // Lote N3: one page per rule under each exercise mini-app (181 URLs, 0 impressions in 90 days,
  // 55–65% template). The hub owns the exercise intent and stays indexable; /dudas-del-espanol/* stays too.
  ...[
    "/verbos-con-preposicion",
    "/indicativo-o-subjuntivo",
    "/ser-o-estar",
    "/indefinido-o-imperfecto",
    "/por-o-para",
    "/ejercicios-de-gustar",
    "/ejercicios-de-imperativo",
    "/ejercicios-de-pronombres",
  ].map((prefix) => ({ prefix, keep: (path: string) => path === prefix })),
];

/**
 * Lote N5: level variants that repeat their hub's title (0 impressions in 90 days). The hub
 * keeps the intent: /material-ele/preguntas for the six question pages, /spanish-grammar-lessons for A2 and B2.
 */
const NOINDEX_SAME_TITLE_PATHS: ReadonlySet<string> = new Set([
  "/material-ele/preguntas/a1",
  "/material-ele/preguntas/a2",
  "/material-ele/preguntas/b1",
  "/material-ele/preguntas/b2",
  "/material-ele/preguntas/c1",
  "/material-ele/preguntas/c2",
  "/spanish-grammar-lessons/a2",
  "/spanish-grammar-lessons/b2",
]);

export function isPrunedNoindexPath(path: string): boolean {
  if (noindexLevelPaths.has(path) || NOINDEX_SAME_TITLE_PATHS.has(path)) return true;
  return NOINDEX_FAMILIES.some(({ prefix, keep }) => (path === prefix || path.startsWith(prefix + "/")) && !keep?.(path));
}

/** Where an internal link to `path` should point: the consolidated URL, or the path itself. */
export function livePath(path: string): string {
  return prunedRedirects.get(path) ?? path;
}

/** True when `path` must not be listed (sitemap, index, link lists) because it redirects. */
export function isPrunedPath(path: string): boolean {
  return prunedRedirects.has(path);
}
