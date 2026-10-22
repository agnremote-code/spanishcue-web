// Madrid infectada · the survivors met in the street: one short scene each
// (situation, dialogue, «TU TURNO» with two questions about real life), in
// four bands, loaded on demand: A0 bilingual { es, en }, A (A1–A2), B
// (B1–B2) and C (C1–C2). The speaker of each scene is the survivor's id
// (city.mjs SURVIVORS), «yo» or «*Someone».
export const BANDS = { A0: 'a0', A1: 'a', A2: 'a', B1: 'b', B2: 'b', C1: 'c', C2: 'c' };
export const BAND_LABEL = { a0: 'A0', a: 'A1–A2', b: 'B1–B2', c: 'C1–C2' };
export const LOADERS = {
  a0: () => import('./calle/a0.mjs'),
  a: () => import('./calle/a.mjs'),
  b: () => import('./calle/b.mjs'),
  c: () => import('./calle/c.mjs'),
};
export const bandOf = (level) => BANDS[level] ?? 'a';
export const loadStreet = (level) => LOADERS[bandOf(level)]().then((m) => m.default);
