// SpanishCue · Jugar: the student hub. One entry per 3D world a student can
// play as a game. Titles, covers, levels and routes come from the lesson
// catalog on the server (app/jugar/page.tsx); this file only adds what the
// catalog does not know: where each world keeps its own save in the browser,
// how many scenes it has and which public door a student without PRO uses.
//
// `save.shape`:
//   'levels' → { done: { A1: [ids], B1: [ids] } }  (most Modo Play worlds)
//   'list'   → { done: [ids] }                      (HR Crisis)
//   null     → the world keeps no readable save; the hub only knows it was visited.
// `total` is the number of scenes at one level (tests/jugar-hub.test.mjs keeps
// it equal to each engine's own count). `open` is a public route that needs no
// PRO: a free demo or a FREE lesson of the access ledger. It never grants access.

export const HUB_PATH = '/jugar';
export const HUB_STORAGE_KEY = 'spanishcue:jugar:v1';

/** @typedef {{ id: number, slug: string, kind: 'historia' | 'pais', save: { key: string, shape: 'levels' | 'list' } | null, total: number | null, open?: string, tint: string }} HubWorld */

/** @type {HubWorld[]} */
export const HUB_WORLDS = [
  { id: 223, slug: 'noche-abierta', kind: 'historia', save: null, total: null, open: '/demo/noche-abierta?from=jugar&level=A1', tint: '#f2a541' },
  { id: 240, slug: 'hospital-san-casi-vivo', kind: 'historia', save: { key: 'spanishcue:hospital-san-casi-vivo:v1', shape: 'levels' }, total: 21, open: '/demo/hospital-san-casi-vivo', tint: '#3fa7a3' },
  { id: 210, slug: 'mexico', kind: 'pais', save: { key: 'spanishcue:mundo-3d:mexico', shape: 'levels' }, total: 20, open: '/mexico', tint: '#c8553d' },
  { id: 36, slug: 'estados-unidos', kind: 'pais', save: { key: 'spanishcue:mundo-3d:estados-unidos', shape: 'levels' }, total: 30, open: '/estados-unidos-a2-b1', tint: '#3b6fb6' },
  { id: 256, slug: 'el-tren-de-las-2340', kind: 'historia', save: { key: 'spanishcue:el-tren-de-las-2340:v1', shape: 'levels' }, total: 18, tint: '#7a5cc4' },
  { id: 244, slug: 'vuelo-cancelado', kind: 'historia', save: { key: 'spanishcue:vuelo-cancelado:v1', shape: 'levels' }, total: 18, tint: '#4d8fd1' },
  { id: 257, slug: 'la-boda', kind: 'historia', save: { key: 'spanishcue:la-boda:v1', shape: 'levels' }, total: 18, tint: '#d98fa6' },
  { id: 245, slug: 'el-consorcio', kind: 'historia', save: { key: 'spanishcue:el-consorcio:v1', shape: 'levels' }, total: 18, tint: '#b9773f' },
  { id: 242, slug: 'madrid-infectada', kind: 'historia', save: { key: 'spanishcue:madrid-infectada:v1', shape: 'levels' }, total: 50, tint: '#7fae4a' },
  { id: 259, slug: 'el-mundo-en-blanco', kind: 'historia', save: { key: 'spanishcue:el-mundo-en-blanco:v1', shape: 'levels' }, total: 12, tint: '#8c97a8' },
  { id: 261, slug: 'ultimo-crucero', kind: 'historia', save: { key: 'spanishcue:ultimo-crucero:v1', shape: 'levels' }, total: 18, tint: '#3b5b86' },
  { id: 243, slug: 'mas-alla', kind: 'historia', save: { key: 'spanishcue:mas-alla:v1', shape: 'levels' }, total: 12, tint: '#e0b84f' },
  { id: 237, slug: 'marketing-de-casinos', kind: 'historia', save: { key: 'spanishcue:gran-meridiano:v1', shape: 'levels' }, total: 30, tint: '#c23b4a' },
  { id: 258, slug: 'hr-crisis', kind: 'historia', save: { key: 'spanishcue:hr-crisis:v1', shape: 'list' }, total: null, tint: '#2f9e77' },
  { id: 241, slug: 'la-feria-de-villaluz', kind: 'historia', save: { key: 'spanishcue:la-feria-de-villaluz:v1', shape: 'levels' }, total: 8, tint: '#e2703a' },
  { id: 238, slug: 'el-reino-de-la-rosa-dormida', kind: 'historia', save: null, total: null, tint: '#a25bb5' },
  { id: 226, slug: 'bosque-de-los-hongos-gigantes', kind: 'historia', save: null, total: null, tint: '#5aa05a' },
  { id: 228, slug: 'argentina', kind: 'pais', save: { key: 'spanishcue:mundo-3d:argentina', shape: 'levels' }, total: 20, tint: '#5aa9dd' },
  { id: 229, slug: 'espana', kind: 'pais', save: { key: 'spanishcue:mundo-3d:espana', shape: 'levels' }, total: 20, tint: '#d9a13b' },
];

export const hubWorld = (id) => HUB_WORLDS.find((world) => world.id === id) ?? null;
