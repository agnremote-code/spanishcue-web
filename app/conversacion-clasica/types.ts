export const LEVEL_IDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
export type LevelId = (typeof LEVEL_IDS)[number];
/** A0 text is { es, en }; A1 starters too; everything else is plain Spanish. */
export type Bi = string | { es: string; en: string };
export type Categoria = { icon: string; title: Bi; questions: Bi[]; starters: Bi[] };
export type ClassicLevel = { intro: Bi; categorias: Categoria[] };
export type ClassicContent = Record<LevelId, ClassicLevel>;
export type ClassicMeta = { slug: string; title: string; kicker: string; image: string; accent: string; ink?: string };
