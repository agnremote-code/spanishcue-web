// La casa · the scenes of every level, loaded on demand (one chunk per
// level, so the Worker and the first paint never carry them). A0 is
// bilingual: every text is { es, en }; A1 keeps its scene words as { es, en }
// keywords; the rest is plain Spanish. The server build (import.meta.env.SSR)
// gets no scenes: they only load in the browser, which keeps the Worker
// bundle inside its memory budget (same rule as app/escucha-3d/loaders.ts).
export const LOADERS = import.meta.env?.SSR ? {} : {
  A0: () => import('./levels/a0.mjs'),
  A1: () => import('./levels/a1.mjs'),
  A2: () => import('./levels/a2.mjs'),
  B1: () => import('./levels/b1.mjs'),
  B2: () => import('./levels/b2.mjs'),
  C1: () => import('./levels/c1.mjs'),
  C2: () => import('./levels/c2.mjs'),
};
export const loadLevel = (level) => (LOADERS[level] ? LOADERS[level]().then((m) => m.default) : Promise.reject(new Error(`Unknown level ${level}`)));
