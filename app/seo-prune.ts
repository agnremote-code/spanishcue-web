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
]);

/** Where an internal link to `path` should point: the consolidated URL, or the path itself. */
export function livePath(path: string): string {
  return prunedRedirects.get(path) ?? path;
}

/** True when `path` must not be listed (sitemap, index, link lists) because it redirects. */
export function isPrunedPath(path: string): boolean {
  return prunedRedirects.has(path);
}
