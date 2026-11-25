import type { GuiaPage } from "./material-ele/guias";
import type { TeachingGuide } from "./guides/data";

/**
 * Full guide (card data + prose). In dev and tests the sources already carry
 * the prose; the Worker build swaps this module for a loader that decrypts the
 * body blob on demand (scripts/guide-bodies.mjs), so pages must always await it.
 */
export async function guiaWithBody(page: GuiaPage): Promise<GuiaPage> {
  return page;
}

export async function guideWithBody(guide: TeachingGuide): Promise<TeachingGuide> {
  return guide;
}
