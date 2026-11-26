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
]);

/**
 * Families taken out of the index (`noindex, follow`), applied one family per batch
 * (owner decision, 26/11/2026). The pages stay available and linkable for visitors;
 * they only leave search results, the sitemap and the hreflang pairs.
 */
const NOINDEX_FAMILIES: readonly string[] = [
  // Lote N1: English conjugation pages (1,259 URLs, no internal links, SERP owned by dictionaries).
  "/spanish-verbs",
];

export function isPrunedNoindexPath(path: string): boolean {
  return NOINDEX_FAMILIES.some((prefix) => path === prefix || path.startsWith(prefix + "/"));
}

/** Where an internal link to `path` should point: the consolidated URL, or the path itself. */
export function livePath(path: string): string {
  return prunedRedirects.get(path) ?? path;
}

/** True when `path` must not be listed (sitemap, index, link lists) because it redirects. */
export function isPrunedPath(path: string): boolean {
  return prunedRedirects.has(path);
}
