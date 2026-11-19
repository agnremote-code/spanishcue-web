import { MATERIAL_ELE_PATH } from "./data";
import { fichaPages, type FichaPage } from "./fichas";

/**
 * «Fichas completas y gratis» (owner request 2026-11-19): a self-contained section of COMPLETE
 * worksheets (theory, typical mistakes, exercises, writing, conversation and answer key) that
 * teachers and resource sites can use and link with no account and no payment. Link partners
 * declined the sample-based /material-ele/fichas, so this section is free end to end: no prices,
 * no subscription, no class links and no calls to buy anywhere in it or in its PDFs (owner rule).
 * The interactive classes stay as they are; only the printable worksheet of these classes opens.
 * Ids only here; content comes from ./ficha-content on the pages.
 */
export const FICHAS_GRATIS_PATH = `${MATERIAL_ELE_PATH}/fichas-gratis`;
export const fichasGratisPublished = "2026-11-19";
export const FICHAS_GRATIS_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

/** Curated by topic demand: the core of each level's grammar programme. */
export const FICHAS_GRATIS_IDS: readonly number[] = [
  // A1
  42, 43, 44, 48, 140, 303, 305, 311, 312, 314, 318, 320, 323, 327, 331, 337, 338, 339,
  // A2
  141, 142, 143, 144, 145, 213, 214, 230, 348, 352, 353, 362, 363, 364, 366, 369, 372, 373, 375, 380,
  // B1
  18, 146, 147, 148, 149, 217, 231, 391, 392, 393, 394, 398, 399, 401, 415, 416, 418, 419, 537, 538,
  // B2
  23, 150, 151, 152, 153, 219, 220, 232, 233, 234, 438, 440, 443, 450, 455, 456,
  // C1
  37, 119, 469, 470, 471, 472, 473, 476, 479, 482, 489, 490, 491, 498,
  // C2
  508, 509, 516, 517, 519, 521, 522, 524, 527, 530, 531, 532,
];

export type FichaGratisPage = FichaPage & { freePath: string; freeTitle: string; freeDescription: string; freeH1: string };

const byId = new Map(fichaPages.map((page) => [page.id, page]));

function fichaGratis(page: FichaPage): FichaGratisPage {
  const freeH1 = `Ficha ${page.level} completa y gratis: ${page.name}`;
  const long = `Ficha ELE ${page.level} completa y gratis: ${page.name}`;
  const freeTitle = long.length <= 78 ? long : `Ficha ${page.level} gratis: ${page.name}`.slice(0, 78).trim();
  const lower = `${page.name.charAt(0).toLowerCase()}${page.name.slice(1)}`;
  let freeDescription = `Ficha ELE ${page.level} completa y 100 % gratis: ${lower}. Teoría, errores típicos, ejercicios y soluciones en PDF.`;
  if (freeDescription.length > 165) freeDescription = `Ficha ELE ${page.level} completa y gratis en PDF, con teoría, ejercicios y soluciones: ${lower}`;
  if (freeDescription.length > 165) freeDescription = `${freeDescription.slice(0, 162).trim()}…`;
  if (freeDescription.length < 110) freeDescription = `${freeDescription} Sin registro y sin pagos.`;
  if (freeDescription.length < 110) freeDescription = `${freeDescription} Lista para imprimir o proyectar.`;
  return { ...page, freePath: `${FICHAS_GRATIS_PATH}/${page.slug}`, freeTitle, freeDescription, freeH1 };
}

/** Every curated worksheet, in level order and then in the order above. */
export const fichasGratis: FichaGratisPage[] = FICHAS_GRATIS_IDS
  .map((id) => byId.get(id))
  .filter((page): page is FichaPage => Boolean(page))
  .map(fichaGratis)
  .sort((a, b) => FICHAS_GRATIS_LEVELS.indexOf(a.level as never) - FICHAS_GRATIS_LEVELS.indexOf(b.level as never));
export const fichaGratisBySlug = new Map(fichasGratis.map((page) => [page.slug, page]));
export const fichaGratisById = new Map(fichasGratis.map((page) => [page.id, page]));

/** One printable pack per level: every worksheet of the level in one PDF. */
export const packSlug = (level: string) => `pack-${level.toLowerCase()}`;
export const packPath = (level: string) => `${FICHAS_GRATIS_PATH}/${packSlug(level)}`;
export const packLevelBySlug = new Map(FICHAS_GRATIS_LEVELS.map((level) => [packSlug(level), level]));

export const fichasGratisTitle = "Fichas ELE completas y 100 % gratis, con soluciones (PDF)";
export const fichasGratisDescription = `${fichasGratis.length} fichas ELE completas y 100 % gratis, de A1 a C2: teoría, errores típicos, ejercicios y soluciones. Sin registro y sin pagos.`;
