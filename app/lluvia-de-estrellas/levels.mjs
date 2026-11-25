// Lluvia de estrellas · the scenes of every level, loaded on demand (one chunk
// per level, so the Worker and the first paint never carry them). A0 is
// bilingual: every text is { es, en }; A1 keeps its scene words as { es, en };
// the rest is Spanish only.
// The server build (import.meta.env.SSR) gets no scenes: they only load in the browser, as in app/escucha-3d/loaders.ts.
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

// The seven levels (labels only, no scene text).
export const LEVELS = [
  { id: 'A0', label: 'A0', hint: 'Español e inglés, frase a frase' },
  { id: 'A1', label: 'A1', hint: 'Presentarse, pedir y proponer' },
  { id: 'A2', label: 'A2', hint: 'Contar lo que pasó y comparar' },
  { id: 'B1', label: 'B1', hint: 'Aconsejar, animar y opinar' },
  { id: 'B2', label: 'B2', hint: 'Hipótesis y arrepentimientos' },
  { id: 'C1', label: 'C1', hint: 'Matices, ironía y tacto' },
  { id: 'C2', label: 'C2', hint: 'La voz del cielo: tesis y registros' },
];
