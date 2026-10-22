// Madrid infectada · the scenes of every level, loaded on demand (one chunk
// per level, so the Worker and the first paint never carry them). A0 is
// bilingual: every text is { es, en }; A1 keeps its scene words as { es, en };
// the rest is Spanish only.
export const LOADERS = {
  A0: () => import('./levels/a0.mjs'),
  A1: () => import('./levels/a1.mjs'),
  A2: () => import('./levels/a2.mjs'),
  B1: () => import('./levels/b1.mjs'),
  B2: () => import('./levels/b2.mjs'),
  C1: () => import('./levels/c1.mjs'),
  C2: () => import('./levels/c2.mjs'),
};
export const loadLevel = (level) => (LOADERS[level] ? LOADERS[level]().then((m) => m.default) : Promise.reject(new Error(`Unknown level ${level}`)));
