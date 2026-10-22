// Madrid infectada · the ten zones as plain data: buildings, props, where the
// people stand, the zombies' routes, the viral clouds and the ways in and out.
// app/madrid-infectada/madrid3d.ts draws them; the tests read the same data
// to prove that nobody (mascot, survivor or zombie) ever stands inside a solid.
//
// Every zone is entered from the south (spawn) and left through the north
// gate to the next one. The player stays inside `bounds`; the zombies wander
// the barricaded streets just outside them, so they are seen, never met.
import { CAST, SPOTS, ZONES } from './story.mjs';

// Footprints of the props that block the way (width along x before turning,
// depth along z) and the height you can jump onto (`top`) when there is one.
export const PROP_SIZE = {
  car: [4.3, 1.9, 1.45], burnt: [4.3, 1.9, 1.3], van: [4.8, 2.1, 2.3], police: [4.6, 2.0, 1.6], bus: [11, 2.6, 2.7],
  barricade: [null, 0.8, 1.1], sandbags: [null, 1.0, 0.9], fence: [null, 0.3, null], crates: [1.4, 1.4, 1.0], debris: [2.4, 2.0, 0.9],
  kiosk: [2.4, 2.4, null], statue: [2.6, 2.6, null], horse: [3.4, 3.4, null], fountain: [5.2, 5.2, 0.7], tree: [0.9, 0.9, null], lamp: [0.35, 0.35, null],
  semaforo: [0.35, 0.35, null], tent: [null, null, null], bed: [2.0, 0.95, 0.62], table: [1.8, 0.9, 0.8], generator: [1.7, 1.0, 1.1],
  train: [null, 3.0, null], metro: [3.2, 5.0, null], heli: [11, 3.2, null], jeep: [4.2, 2.0, 1.7], boat: [5.5, 2.0, 0.8], bench: [1.8, 0.6, 0.48],
  counter: [null, 0.8, 1.05], pillar: [0.8, 0.8, null], container: [6, 2.5, 2.6], stove: [1.2, 0.8, 0.95], screen: [0.25, 2.2, null],
};

const box = (x0, z0, x1, z1, extra = {}) => ({ x0: Math.min(x0, x1), x1: Math.max(x0, x1), z0: Math.min(z0, z1), z1: Math.max(z0, z1), ...extra });

/** The axis-aligned box of a prop, turned by r radians. */
export function propBox(p) {
  const size = PROP_SIZE[p.kind];
  if (!size) return null;
  const w = p.w ?? size[0], d = p.d ?? size[1];
  if (w == null || d == null) return null;
  const c = Math.abs(Math.cos(p.r ?? 0)), s = Math.abs(Math.sin(p.r ?? 0));
  const hw = (w * c + d * s) / 2, hd = (w * s + d * c) / 2;
  const top = p.top ?? size[2] ?? undefined;
  return box(p.x - hw, p.z - hd, p.x + hw, p.z + hd, { prop: `${p.kind}@${p.x},${p.z}`, ...(top != null ? { top } : {}) });
}

// ------------------------------------------------------------------ helpers
// A row of buildings from (x0, z0) to (x1, z1) along x or z, `depth` deep.
function row(axis, from, to, at, depth, seed, opts = {}) {
  const out = [];
  let p = from, i = 0;
  const step = (n) => ((seed * 9301 + n * 49297) % 233280) / 233280;
  while (p < to - 0.5) {
    const len = Math.min(to - p, (opts.min ?? 8) + step(i) * ((opts.max ?? 14) - (opts.min ?? 8)));
    const h = (opts.hmin ?? 14) + step(i + 7) * ((opts.hmax ?? 24) - (opts.hmin ?? 14));
    const color = (opts.colors ?? ['#c9b8a0', '#d8c3a0', '#b98a6a', '#e3d6bd', '#a87a5a'])[(seed + i) % (opts.colors?.length ?? 5)];
    const b = axis === 'x' ? { x0: p, x1: p + len, z0: at, z1: at + depth } : { x0: at, x1: at + depth, z0: p, z1: p + len };
    out.push({ ...box(b.x0, b.z0, b.x1, b.z1), h: Math.round(h * 10) / 10, color, ruin: step(i + 3), style: opts.style ?? 'classic', seed: seed + i });
    p += len + (opts.gap ?? 0.3);
    i++;
  }
  return out;
}

// ------------------------------------------------------------------ zones
const SOL = {
  id: 'sol', bounds: { minX: -26, maxX: 26, minZ: -26, maxZ: 26 }, ground: 'stone',
  spawn: { x: 0, z: -22, heading: 0 }, gate: { x: 0, z: 24 }, back: null,
  buildings: [
    ...row('z', -30, -2, -40, 12, 11, { hmin: 16, hmax: 22 }), ...row('z', 10, 20, -40, 12, 17, { hmin: 16, hmax: 22 }),
    ...row('z', -30, -7, 28, 12, 12, { hmin: 16, hmax: 24 }), ...row('z', 7, 20, 28, 12, 18, { hmin: 16, hmax: 24 }),
    ...row('x', -40, -16, 27, 12, 13, { hmin: 17, hmax: 22 }),
    ...row('x', 16, 40, 27, 12, 14, { hmin: 17, hmax: 22 }),
    ...row('x', -40, -6, -40, 10, 15, { hmin: 15, hmax: 20 }),
    ...row('x', 6, 40, -40, 10, 16, { hmin: 15, hmax: 20 }),
  ],
  // The Casa de Correos, with its clock: the kilómetro cero is in front of it.
  landmark: { kind: 'correos', x0: -13, x1: 13, z0: 27, z1: 37 },
  props: [
    { kind: 'horse', x: 2, z: 6 }, { kind: 'statue', x: -12, z: 0, look: 'oso' }, { kind: 'fountain', x: -10, z: -13 },
    { kind: 'metro', x: 13, z: 4, r: Math.PI / 2, name: 'SOL' }, { kind: 'kiosk', x: 20, z: -9, look: 'loteria' },
    { kind: 'police', x: -18, z: -5, r: 0.4 }, { kind: 'car', x: 9, z: -15, r: -0.25 }, { kind: 'burnt', x: -16, z: 13, r: 1.2 },
    { kind: 'car', x: 19, z: 15, r: 2.1 }, { kind: 'van', x: -4, z: -2, r: 1.45, look: 'cruz' },
    { kind: 'barricade', x: 24.8, z: 0, w: 14, r: Math.PI / 2 }, { kind: 'barricade', x: -24.8, z: 4, w: 12, r: Math.PI / 2 },
    { kind: 'debris', x: 6, z: 18 }, { kind: 'debris', x: -20, z: -18 }, { kind: 'crates', x: 22, z: 20 },
    { kind: 'semaforo', x: -6, z: -20 }, { kind: 'semaforo', x: 6, z: -20 }, { kind: 'semaforo', x: 23, z: 23 },
    { kind: 'lamp', x: -14, z: 22 }, { kind: 'lamp', x: 14, z: 22 }, { kind: 'lamp', x: -22, z: -22 },
    { kind: 'table', x: -4, z: 21.6, look: 'radio' },
  ],
  spots: [{ id: 'radio', x: -4, z: 17, angle: 0 }, { id: 'loteria', x: 15.2, z: -9, angle: Math.PI / 2 }],
  extras: [
    { x: -20, z: -12, heading: 1.2, pose: 'phone', seed: 101 }, { x: 8, z: 20, heading: 2.6, pose: 'ground', seed: 102 },
    { x: -8, z: 12, heading: -0.6, pose: 'stand', seed: 103, mood: 'worried' }, { x: -22, z: 18, heading: 0.9, pose: 'sit', seed: 104, mood: 'sad' },
  ],
  zombies: [
    { path: [[30, -2.5], [44, -2.5]], seed: 201 }, { path: [[46, 2.5], [31, 2.5]], seed: 202 }, { path: [[-29, 4], [-46, 4]], seed: 203 },
  ],
  clouds: [{ x: -12, z: 8, r: 9 }, { x: 14, z: 14, r: 7 }],
};

const GRANVIA = {
  id: 'granvia', bounds: { minX: -11, maxX: 11, minZ: -40, maxZ: 40 }, ground: 'asphalt',
  spawn: { x: 0, z: -36, heading: 0 }, gate: { x: 0, z: 38 }, back: { x: 0, z: -39 },
  buildings: [
    ...row('z', -50, -8, -24, 12, 21, { hmin: 24, hmax: 34, min: 10, max: 16, colors: ['#d8c3a0', '#e3d6bd', '#c9b8a0', '#bfa98a'] }),
    ...row('z', 2, 48, -24, 12, 23, { hmin: 24, hmax: 34, min: 10, max: 16, colors: ['#e3d6bd', '#c9b8a0', '#bfa98a', '#d8c3a0'] }),
    ...row('z', -50, -20, 12, 12, 22, { hmin: 24, hmax: 36, min: 10, max: 16, colors: ['#e3d6bd', '#d8c3a0', '#cbb594', '#b8a088'] }),
    ...row('z', -12, 34, 12, 12, 24, { hmin: 24, hmax: 36, min: 10, max: 16, colors: ['#cbb594', '#e3d6bd', '#b8a088', '#d8c3a0'] }),
  ],
  // The Metrópolis, with its black dome and the winged Victory on top, where Gran Vía meets Alcalá.
  landmark: { kind: 'metropolis', x0: 12, x1: 26, z0: 36, z1: 50 },
  props: [
    { kind: 'bus', x: -2, z: 4, r: 0.12, look: 'tumbado' }, { kind: 'car', x: 6, z: -22, r: 0.2 }, { kind: 'burnt', x: -6, z: -8, r: -0.35 },
    { kind: 'car', x: 7.5, z: 18, r: 1.4 }, { kind: 'burnt', x: -7, z: 26, r: 0.5 }, { kind: 'van', x: 7, z: -6, r: Math.PI },
    { kind: 'police', x: -6.5, z: -26, r: 0.1 }, { kind: 'debris', x: 3, z: 30 }, { kind: 'debris', x: -8, z: 14 }, { kind: 'crates', x: 9.5, z: 32 },
    { kind: 'semaforo', x: -10.6, z: -30 }, { kind: 'semaforo', x: 10.6, z: -30 }, { kind: 'semaforo', x: 10.6, z: 10 },
    { kind: 'lamp', x: -10.6, z: -14 }, { kind: 'lamp', x: 10.6, z: -14 }, { kind: 'lamp', x: -10.6, z: 20 }, { kind: 'lamp', x: 10.6, z: 26 },
    { kind: 'metro', x: -8.5, z: 36, r: 0, name: 'GRAN VÍA' }, { kind: 'barricade', x: -12, z: -3, w: 9, r: Math.PI / 2 }, { kind: 'barricade', x: 12, z: -16, w: 7.6, r: Math.PI / 2 },
  ],
  spots: [{ id: 'autobus', x: 5.8, z: 8.6, angle: -2.2 }, { id: 'directo', x: -3, z: -18, angle: 0.5 }],
  extras: [
    { x: 8.6, z: -31, heading: -1.2, pose: 'sit', seed: 111, mood: 'sad' }, { x: -9.4, z: 2, heading: 1.4, pose: 'lean', seed: 112 },
    { x: 2.8, z: 22, heading: 3, pose: 'crouch', seed: 113, mood: 'scared' },
  ],
  zombies: [{ path: [[-14, -3], [-34, -3]], seed: 211 }, { path: [[34, -16], [14, -16]], seed: 213 }],
  clouds: [{ x: 0, z: 14, r: 10 }, { x: -2, z: -10, r: 8 }, { x: 3, z: 28, r: 7 }],
};

const PLAZA = {
  id: 'plaza', bounds: { minX: -20, maxX: 20, minZ: -18, maxZ: 18 }, ground: 'cobble',
  spawn: { x: 0, z: -15, heading: 0 }, gate: { x: 0, z: 16.5 }, back: { x: -3, z: -17.4 },
  // The square closed on four sides: red porticoed houses; the Casa de la Panadería on the north.
  buildings: [
    { ...box(-32, -30, -10, -20), h: 17, color: '#9a4a36', ruin: 0.3, style: 'mayor', seed: 41, arcade: 'north' },
    { ...box(-6, -30, 32, -20), h: 17, color: '#9a4a36', ruin: 0.3, style: 'mayor', seed: 46, arcade: 'north' },
    { ...box(-32, 20, -4, 30), h: 17, color: '#9a4a36', ruin: 0.2, style: 'mayor', seed: 42, arcade: 'south' },
    { ...box(4, 20, 32, 30), h: 17, color: '#9a4a36', ruin: 0.25, style: 'mayor', seed: 43, arcade: 'south' },
    { ...box(-32, -20, -22, 20), h: 17, color: '#a24f3a', ruin: 0.15, style: 'mayor', seed: 44, arcade: 'east' },
    { ...box(22, -20, 32, 20), h: 17, color: '#a24f3a', ruin: 0.35, style: 'mayor', seed: 45, arcade: 'west' },
  ],
  landmark: { kind: 'panaderia', x0: -4, x1: 4, z0: 20, z1: 24 },
  props: [
    { kind: 'horse', x: 0, z: 2 },
    { kind: 'tent', x: -13, z: -9, w: 5, d: 4 }, { kind: 'tent', x: -13, z: 9, w: 5, d: 4 }, { kind: 'tent', x: 13, z: 9.5, w: 5, d: 4 },
    { kind: 'tent', x: 12.5, z: -11, w: 6, d: 4.5, look: 'escuela', solid: false },
    { kind: 'counter', x: -6, z: 13.5, w: 4 }, { kind: 'fence', x: 4.5, z: 13.5, w: 5 }, { kind: 'fence', x: -12, z: 13.5, w: 3 },
    { kind: 'table', x: -5, z: -2, look: 'reparto' }, { kind: 'generator', x: 18, z: 0 }, { kind: 'crates', x: -18, z: -1 },
    { kind: 'crates', x: 18, z: -14.5 }, { kind: 'lamp', x: -8, z: -15 }, { kind: 'lamp', x: 8, z: 15.5 },
  ],
  spots: [{ id: 'puerta', x: -1.5, z: 10.5, angle: 0 }, { id: 'escuela', x: 8.2, z: -8.6, angle: 2.0 }],
  extras: [
    { x: -9, z: 2, heading: 1.3, pose: 'sit', seed: 121 }, { x: -8.4, z: 4, heading: 2, pose: 'ground', seed: 122, mood: 'sad' },
    { x: 15.6, z: -10.6, heading: -1.5, pose: 'ground', seed: 123, look: { age: 'child' } }, { x: 14.2, z: -12.4, heading: -1.2, pose: 'ground', seed: 124, look: { age: 'child' } },
    { x: 16.2, z: -12.8, heading: -1.9, pose: 'ground', seed: 125, look: { age: 'teen' } },
    { x: -3, z: -4, heading: 0, pose: 'stand', seed: 126, mood: 'worried' }, { x: -7.4, z: -4, heading: 0.4, pose: 'stand', seed: 127 },
    { x: 6, z: 5, heading: -2.6, pose: 'arms', seed: 128 },
  ],
  zombies: [{ path: [[-8, -22], [-8, -36]], seed: 222, beyond: true }],
  clouds: [{ x: 0, z: 0, r: 8 }],
};

// Chamberí, the ghost station: two platforms in a tiled vault, tracks in a pit between them.
const METRO = {
  id: 'metro', bounds: { minX: -26, maxX: 26, minZ: -9, maxZ: 9 }, ground: 'tiles', under: true,
  spawn: { x: -23, z: 5.4, heading: Math.PI / 2 }, gate: { x: 24.5, z: 5.4 }, back: { x: -25, z: 2.6 },
  buildings: [
    { ...box(-30, 9, 30, 11), h: 6, color: '#efeae0', ruin: 0.1, style: 'tiles', seed: 51 },
    { ...box(-30, -11, 30, -9), h: 6, color: '#efeae0', ruin: 0.1, style: 'tiles', seed: 52 },
    { ...box(-32, -11, -28, 11), h: 6, color: '#d8d0c0', style: 'tiles', seed: 53 },
    { ...box(28, -11, 32, 11), h: 6, color: '#d8d0c0', style: 'tiles', seed: 54 },
  ],
  landmark: { kind: 'andenes', x0: -28, x1: 28, z0: -9, z1: 9 },
  // The pit with the rails (you cannot fall in: it is fenced) and an old train on the far platform side.
  props: [
    { kind: 'train', x: -2, z: -2.4, w: 34, look: 'vagones' },
    { kind: 'fence', x: 0, z: 0.7, w: 52, look: 'borde' },
    { kind: 'bench', x: -12, z: 8.2 }, { kind: 'bench', x: 10, z: 8.2 }, { kind: 'pillar', x: -16, z: 4 }, { kind: 'pillar', x: 0, z: 4 }, { kind: 'pillar', x: 16, z: 4 },
    { kind: 'crates', x: 21, z: 7.6 }, { kind: 'table', x: 13.5, z: 2.2, look: 'mapa' },
  ],
  ceilings: [{ x0: -30, x1: 30, z0: -11, z1: 11, y: 5.2 }],
  spots: [{ id: 'pareja', x: -7, z: 4.6, angle: Math.PI }, { id: 'jefe', x: 11, z: 5.6, angle: 2.6 }],
  // Sara talks; Toni stands beside her (in `pairs`).
  pairs: { pareja: { x: -5.6, z: 2.3, heading: -0.4 } },
  extras: [
    { x: -19, z: 8.3, heading: Math.PI, pose: 'sleep', seed: 131 }, { x: 5, z: 8.2, heading: Math.PI, pose: 'guitar', seed: 132 },
    { x: -14.6, z: 7.2, heading: 2.8, pose: 'sit', seed: 133, mood: 'worried' },
  ],
  zombies: [{ path: [[-27, -6.8], [27, -6.8]], seed: 231, beyond: true }],
  clouds: [{ x: 4, z: 2, r: 6 }],
};

const RETIRO = {
  id: 'retiro', bounds: { minX: -28, maxX: 28, minZ: -30, maxZ: 30 }, ground: 'grass',
  spawn: { x: -24, z: -26, heading: 0.6 }, gate: { x: 25, z: 27 }, back: { x: -26.5, z: -28.5 },
  buildings: [],
  // The pond (estanque) with the colonnade of Alfonso XII, and the Palacio de Cristal: the hidden lab.
  landmark: { kind: 'retiro', pond: { x0: -14, x1: 14, z0: 4, z1: 22 }, palace: { x0: 10, x1: 22, z0: -22, z1: -12 } },
  props: [
    { kind: 'tree', x: -20, z: -14 }, { kind: 'tree', x: -24, z: -4 }, { kind: 'tree', x: -18, z: 2 }, { kind: 'tree', x: -22, z: 14 }, { kind: 'tree', x: -24, z: 24 },
    { kind: 'tree', x: 24, z: -6 }, { kind: 'tree', x: 20, z: 2 }, { kind: 'tree', x: 25, z: 12 }, { kind: 'tree', x: -6, z: -24 }, { kind: 'tree', x: 2, z: -26 },
    { kind: 'tree', x: -10, z: -6 }, { kind: 'tree', x: 4, z: -4 },
    { kind: 'bench', x: -6, z: 1.6 }, { kind: 'bench', x: 6, z: 1.6 }, { kind: 'lamp', x: -16, z: 2 }, { kind: 'lamp', x: 16, z: 2 },
    { kind: 'boat', x: -8, z: 12, r: 0.4, solid: false }, { kind: 'boat', x: 6, z: 16, r: -0.8, solid: false },
    { kind: 'generator', x: 7, z: -19 }, { kind: 'table', x: 8.6, z: -14.4, look: 'lab' }, { kind: 'sandbags', x: 16, z: -9.6, w: 6 },
    { kind: 'crates', x: -2, z: -14 },
  ],
  spots: [{ id: 'laboratorio', x: 5, z: -10.5, angle: 1.9 }, { id: 'periodista', x: -16, z: 0, angle: 0.4 }],
  extras: [{ x: -2, z: 1.2, heading: 0.2, pose: 'fish', seed: 141 }, { x: -12, z: -18, heading: 2, pose: 'read', seed: 142 }, { x: 12, z: -8, heading: -2.4, pose: 'arms', seed: 143, look: { top: 'coat', topColor: '#eef0ee' } }],
  zombies: [{ path: [[-33, -20], [-33, 20]], seed: 241 }, { path: [[33, -24], [33, 18]], seed: 242 }],
  clouds: [{ x: 0, z: 12, r: 10 }, { x: -14, z: -14, r: 7 }],
};

const MALASANA = {
  id: 'malasana', bounds: { minX: -16, maxX: 16, minZ: -30, maxZ: 26 }, ground: 'cobble', night: true,
  spawn: { x: 0, z: -27, heading: 0 }, gate: { x: -10, z: 24 }, back: { x: 0, z: -29.4 },
  buildings: [
    ...row('z', -40, 4, -30, 12, 61, { hmin: 10, hmax: 15, min: 6, max: 9, colors: ['#d9a46a', '#c97b5a', '#e2c79a', '#8fa6a0', '#d88a7a'], style: 'barrio' }),
    ...row('z', -40, 4, 18, 12, 62, { hmin: 10, hmax: 15, min: 6, max: 9, colors: ['#e2c79a', '#d88a7a', '#a8b890', '#d9a46a', '#c97b5a'], style: 'barrio' }),
    ...row('x', -6, 40, 26, 10, 65, { hmin: 11, hmax: 15, min: 6, max: 9, style: 'barrio' }),
    ...row('z', 14, 26, -30, 12, 66, { hmin: 11, hmax: 14, min: 6, max: 7, style: 'barrio' }),
    ...row('z', 14, 26, 18, 12, 67, { hmin: 11, hmax: 14, min: 6, max: 7, style: 'barrio' }),
  ],
  // Plaza del Dos de Mayo, with the brick arch of Monteleón.
  landmark: { kind: 'monteleon', x: 0, z: 14 },
  props: [
    { kind: 'barricade', x: -12, z: 3, w: 8, look: 'muebles' }, { kind: 'barricade', x: 12, z: 3, w: 8, look: 'muebles' },
    { kind: 'table', x: -12.4, z: -14 }, { kind: 'table', x: -12.4, z: -8 }, { kind: 'stove', x: 13.4, z: -18 }, { kind: 'counter', x: 15, z: -14.5, w: 3, r: Math.PI / 2 },
    { kind: 'burnt', x: 9, z: -2, r: 1.6 }, { kind: 'car', x: -6, z: 20, r: 0.3 }, { kind: 'crates', x: 6, z: -26 }, { kind: 'debris', x: -10, z: -24 },
    { kind: 'lamp', x: -15.4, z: -20 }, { kind: 'lamp', x: 15.4, z: -2 }, { kind: 'lamp', x: 8, z: 22 }, { kind: 'tree', x: 8, z: 10 }, { kind: 'tree', x: -8, z: 10 },
    { kind: 'bench', x: 4, z: 18, r: Math.PI }, { kind: 'semaforo', x: 15.4, z: -28 },
    { kind: 'barricade', x: -16.8, z: 9, w: 9.6, r: Math.PI / 2 }, { kind: 'barricade', x: 16.8, z: 9, w: 9.6, r: Math.PI / 2 },
  ],
  spots: [{ id: 'bar', x: -8, z: -11, angle: -1.57 }, { id: 'cocina', x: 9, z: -16.5, angle: 1.57 }],
  extras: [
    { x: -13.2, z: -12.4, heading: 1.2, pose: 'sit', seed: 151 }, { x: -11.6, z: -6.6, heading: 2.6, pose: 'sit', seed: 152 }, { x: -13.4, z: -9.4, heading: 0.2, pose: 'dance', seed: 153 },
    { x: 2, z: 8, heading: -2.2, pose: 'guitar', seed: 154 }, { x: -4, z: 6, heading: 2.4, pose: 'ground', seed: 155 }, { x: 14.6, z: -22, heading: -1.6, pose: 'stand', seed: 156 },
  ],
  zombies: [{ path: [[-20, 9], [-36, 9]], seed: 251, beyond: true }, { path: [[36, 8.5], [20, 8.5]], seed: 252, beyond: true }],
  clouds: [{ x: 0, z: -4, r: 8 }],
};

const ATOCHA = {
  id: 'atocha', bounds: { minX: -22, maxX: 22, minZ: -28, maxZ: 28 }, ground: 'tiles', under: false,
  spawn: { x: 0, z: -25, heading: 0 }, gate: { x: 0, z: 26.5 }, back: { x: 3, z: -27.4 },
  buildings: [
    { ...box(-34, -36, -22, 36), h: 14, color: '#a45a3e', style: 'brick', seed: 71 },
    { ...box(22, -36, 34, 36), h: 14, color: '#a45a3e', style: 'brick', seed: 72 },
  ],
  // The old iron-and-glass hall, the tropical garden inside it and the trains at the platforms.
  landmark: { kind: 'atocha', x0: -22, x1: 22, z0: -28, z1: 28 },
  props: [
    { kind: 'counter', x: 0, z: 2, w: 16, d: 9, top: 0.5, look: 'jardin' },
    { kind: 'train', x: -17.6, z: 4, w: 38, r: Math.PI / 2 }, { kind: 'train', x: 17.6, z: 4, w: 38, r: Math.PI / 2 },
    { kind: 'fence', x: -14.4, z: -6, w: 26, r: Math.PI / 2 }, { kind: 'fence', x: 14.4, z: -6, w: 26, r: Math.PI / 2 },
    { kind: 'bench', x: -6, z: -14 }, { kind: 'bench', x: 6, z: -14 }, { kind: 'crates', x: 10, z: 18 }, { kind: 'table', x: -8.8, z: -20.2, look: 'megafono' },
    { kind: 'pillar', x: -10, z: 18 }, { kind: 'pillar', x: 10, z: -20 }, { kind: 'screen', x: 0, z: -18, w: 6, r: Math.PI / 2, look: 'paneles' },
  ],
  spots: [{ id: 'andenes', x: -6, z: -22.2, angle: -1.1 }, { id: 'dosis', x: 7.2, z: 13.4, angle: 1.3 }],
  extras: [
    { x: -12, z: -10, heading: 0.4, pose: 'sit', seed: 171 }, { x: -11, z: 12, heading: 2, pose: 'ground', seed: 172, mood: 'sad' },
    { x: 11.6, z: -6, heading: -1.4, pose: 'phone', seed: 173 }, { x: 12, z: 6, heading: -2, pose: 'carry', seed: 174 },
    { x: -4, z: 9.2, heading: 2.8, pose: 'stand', seed: 175 }, { x: 4.4, z: -6.4, heading: -0.2, pose: 'cry', seed: 176 },
    { x: -6, z: -14.6, heading: 0, pose: 'sit', seed: 177, mood: 'worried' },
  ],
  zombies: [{ path: [[-2, 33], [10, 33]], seed: 271, beyond: true }, { path: [[-8, -32], [-16, -32]], seed: 272, beyond: true }],
  clouds: [{ x: 0, z: 18, r: 8 }],
};

const PALACIO = {
  id: 'palacio', bounds: { minX: -28, maxX: 28, minZ: -24, maxZ: 22 }, ground: 'gravel',
  spawn: { x: 0, z: -21, heading: 0 }, gate: { x: -25, z: 18 }, back: { x: 3, z: -23.4 },
  buildings: [
    { ...box(-44, -40, -28, 24), h: 9, color: '#e6e1d4', style: 'palace', seed: 81 },
    { ...box(28, -40, 44, 24), h: 9, color: '#e6e1d4', style: 'palace', seed: 82 },
  ],
  // The white palace closes the north; the Plaza de la Armería is the camp.
  landmark: { kind: 'palacio', x0: -30, x1: 30, z0: 24, z1: 40 },
  props: [
    { kind: 'heli', x: 14, z: 2, r: 0.4 }, { kind: 'jeep', x: -14, z: -8, r: 0.2 }, { kind: 'jeep', x: -18, z: -14, r: -0.3 },
    { kind: 'tent', x: -15, z: 8, w: 7, d: 5, look: 'militar' }, { kind: 'tent', x: 18, z: -14, w: 6, d: 5, look: 'militar' },
    { kind: 'sandbags', x: 0, z: 18.6, w: 12 }, { kind: 'sandbags', x: -8, z: -4, w: 5 }, { kind: 'container', x: 22, z: 14, r: 0 },
    { kind: 'table', x: 4, z: -5, look: 'mapas' }, { kind: 'generator', x: -24, z: 2 }, { kind: 'crates', x: 9, z: 13 },
    { kind: 'lamp', x: -6, z: 14 }, { kind: 'lamp', x: 6, z: -12 },
  ],
  spots: [{ id: 'consejero', x: -10, z: 16, angle: -1.4 }, { id: 'capitana', x: 1.4, z: -8.6, angle: 0.6 }],
  extras: [
    { x: -1, z: 15.4, heading: Math.PI, pose: 'stand', seed: 181, look: { top: 'uniform', topColor: '#4a5236', bottomColor: '#3e4430', extras: ['helmet'] } },
    { x: 6, z: 16, heading: Math.PI, pose: 'stand', seed: 182, look: { top: 'uniform', topColor: '#4a5236', bottomColor: '#3e4430', extras: ['helmet'] } },
    { x: -11.8, z: -6.2, heading: 0.6, pose: 'phone', seed: 183, look: { top: 'uniform', topColor: '#4a5236', extras: ['helmet'] } },
    { x: 20, z: -4, heading: -1.6, pose: 'arms', seed: 184, look: { top: 'uniform', topColor: '#4a5236', extras: ['helmet'] } },
  ],
  zombies: [{ path: [[-20, -30], [20, -30]], seed: 281, beyond: true }],
  clouds: [{ x: 8, z: 6, r: 8 }],
};

const HOSPITAL = {
  id: 'hospital', bounds: { minX: -24, maxX: 24, minZ: -24, maxZ: 24 }, ground: 'asphalt',
  spawn: { x: 0, z: -21, heading: 0 }, gate: { x: 0, z: 22.5 }, back: { x: -3, z: -23.4 },
  buildings: [
    ...row('z', -36, -4, -38, 12, 91, { hmin: 18, hmax: 30, style: 'modern', colors: ['#b8bcc0', '#cfd2d4', '#9aa2a8'] }),
    ...row('z', 6, 36, -38, 12, 93, { hmin: 18, hmax: 30, style: 'modern', colors: ['#9aa2a8', '#b8bcc0', '#cfd2d4'] }),
    ...row('z', -36, 10, 26, 12, 92, { hmin: 18, hmax: 30, style: 'modern', colors: ['#cfd2d4', '#9aa2a8', '#b8bcc0'] }),
    ...row('z', 18, 36, 26, 12, 94, { hmin: 18, hmax: 30, style: 'modern', colors: ['#b8bcc0', '#cfd2d4', '#9aa2a8'] }),
  ],
  landmark: { kind: 'campana', x0: -24, x1: 24, z0: -24, z1: 24 },
  props: [
    { kind: 'tent', x: -12, z: 6, w: 14, d: 10, look: 'cruz', solid: false }, { kind: 'tent', x: 12, z: 6, w: 14, d: 10, look: 'cruz', solid: false },
    { kind: 'bed', x: -16, z: 3.4, r: Math.PI / 2 }, { kind: 'bed', x: -13, z: 3.4, r: Math.PI / 2 }, { kind: 'bed', x: -10, z: 3.4, r: Math.PI / 2 },
    { kind: 'bed', x: -16, z: 8.6, r: Math.PI / 2 }, { kind: 'bed', x: -13, z: 8.6, r: Math.PI / 2 },
    { kind: 'bed', x: 10, z: 3.4, r: Math.PI / 2 }, { kind: 'bed', x: 13, z: 3.4, r: Math.PI / 2 }, { kind: 'bed', x: 16, z: 3.4, r: Math.PI / 2 },
    { kind: 'bed', x: 13, z: 8.6, r: Math.PI / 2 }, { kind: 'bed', x: 16, z: 8.6, r: Math.PI / 2 },
    { kind: 'table', x: -4, z: -10, look: 'triaje' }, { kind: 'generator', x: 21, z: -6 }, { kind: 'generator', x: -21, z: -6 },
    { kind: 'van', x: 14, z: -16, r: 0.1, look: 'ambulancia' }, { kind: 'crates', x: 2, z: 18 }, { kind: 'crates', x: -18, z: 18 },
    { kind: 'container', x: -12, z: -17, r: 0 }, { kind: 'lamp', x: 0, z: 0 }, { kind: 'lamp', x: 0, z: 14 },
    { kind: 'barricade', x: -24.8, z: 1, w: 10, r: Math.PI / 2 }, { kind: 'barricade', x: 24.8, z: 14, w: 8, r: Math.PI / 2 },
  ],
  spots: [{ id: 'urgencias', x: -6.6, z: 6, angle: -1.57 }, { id: 'triaje', x: -4, z: -13.6, angle: 0 }],
  extras: [
    { x: -13, z: 3.4, heading: 0, pose: 'lie', seed: 191, lying: true, y: 0.62 }, { x: -10, z: 3.4, heading: 0, pose: 'lie', seed: 192, lying: true, y: 0.62 },
    { x: 13, z: 3.4, heading: 0, pose: 'lie', seed: 193, lying: true, y: 0.62 }, { x: 16, z: 8.6, heading: 0, pose: 'lie', seed: 194, lying: true, y: 0.62 },
    { x: 8.4, z: 6, heading: 1.57, pose: 'stand', seed: 195, look: { top: 'scrubs', topColor: '#3f7f86', bottom: 'pants', bottomColor: '#3f7f86' } },
    { x: 2, z: -16, heading: 3, pose: 'stand', seed: 196, mood: 'pain' }, { x: 3.4, z: -17.6, heading: 2.6, pose: 'ground', seed: 197, mood: 'sad' },
    { x: -1, z: -18.8, heading: 2.8, pose: 'stand', seed: 198, mood: 'worried' },
  ],
  zombies: [{ path: [[-28, 1], [-44, 1]], seed: 291 }, { path: [[44, 14], [28, 14]], seed: 292 }],
  clouds: [{ x: 0, z: 14, r: 8 }],
};

const RIO = {
  id: 'rio', bounds: { minX: -30, maxX: 30, minZ: -22, maxZ: 20 }, ground: 'park',
  spawn: { x: -26, z: -18, heading: 0.8 }, gate: null, back: { x: -28.5, z: -20.5 },
  buildings: [
    ...row('x', -44, 44, -36, 12, 101, { hmin: 18, hmax: 26, style: 'modern', colors: ['#d8c3a0', '#c9b8a0', '#e3d6bd'] }),
  ],
  // The Manzanares in its channel along the north, the Puente de Segovia and the pier of the last boat.
  landmark: { kind: 'rio', water: { x0: -60, x1: 60, z0: 20, z1: 32 }, bridge: { x: -12 } },
  props: [
    { kind: 'tree', x: -18, z: -6 }, { kind: 'tree', x: -8, z: 4 }, { kind: 'tree', x: 6, z: -8 }, { kind: 'tree', x: 18, z: 2 }, { kind: 'tree', x: 26, z: -10 },
    { kind: 'bench', x: -2, z: 14, r: Math.PI }, { kind: 'bench', x: 10, z: 14, r: Math.PI }, { kind: 'lamp', x: -20, z: 16 }, { kind: 'lamp', x: 4, z: 16 }, { kind: 'lamp', x: 24, z: 16 },
    { kind: 'counter', x: -20, z: -19.6, w: 6, look: 'portal' }, { kind: 'crates', x: 22, z: 12 }, { kind: 'burnt', x: 12, z: -16, r: 0.2 },
    { kind: 'boat', x: 22, z: 23.5, r: 0, look: 'barca', solid: false },
  ],
  spots: [{ id: 'vecina', x: -14, z: -14.6, angle: Math.PI }, { id: 'barca', x: 20, z: 15.4, angle: 0.4 }],
  extras: [{ x: -2, z: 14.6, heading: Math.PI, pose: 'sit', seed: 201 }, { x: 14, z: 10, heading: 0.6, pose: 'carry', seed: 202 }, { x: 10, z: 17.6, heading: 0, pose: 'stand', seed: 203 }],
  zombies: [{ path: [[-36, -10], [-36, 12]], seed: 301 }, { path: [[36, 12], [36, -12]], seed: 302 }],
  clouds: [{ x: 4, z: 4, r: 10 }],
};

export const ZONE_LAYOUTS = { sol: SOL, granvia: GRANVIA, plaza: PLAZA, metro: METRO, retiro: RETIRO, malasana: MALASANA, atocha: ATOCHA, palacio: PALACIO, hospital: HOSPITAL, rio: RIO };
export const layoutOf = (id) => ZONE_LAYOUTS[id] ?? null;

/** Where the person of a circle stands: 1.9 m from it, facing it. */
export function npcOf(spot) {
  return { x: spot.x + Math.sin(spot.angle) * 1.9, z: spot.z + Math.cos(spot.angle) * 1.9, heading: spot.angle + Math.PI };
}

/** Everything that blocks the mascot in a zone. */
export function solidsFor(id) {
  const z = layoutOf(id);
  if (!z) return [];
  const out = z.buildings.map((b, i) => box(b.x0, b.z0, b.x1, b.z1, { building: `${id}-${i}` }));
  for (const p of z.props) {
    // An open canopy (a field-hospital tent, the school of the refuge): only its poles stop you.
    if (p.kind === 'tent' && p.solid === false) {
      for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
        const x = p.x + sx * (p.w / 2 - 0.1), z = p.z + sz * (p.d / 2 - 0.1);
        out.push(box(x - 0.12, z - 0.12, x + 0.12, z + 0.12, { prop: `poste@${x},${z}` }));
      }
      continue;
    }
    if (p.solid === false) continue;
    if (p.kind === 'tent') { out.push(box(p.x - p.w / 2, p.z - p.d / 2, p.x + p.w / 2, p.z + p.d / 2, { prop: `tent@${p.x},${p.z}` })); continue; }
    const b = propBox(p);
    if (b) out.push(b);
  }
  out.push(...landmarkSolids(z));
  return out;
}

function landmarkSolids(z) {
  const l = z.landmark;
  switch (l.kind) {
    case 'correos': case 'metropolis': case 'palacio': return [box(l.x0, l.z0, l.x1, l.z1, { building: l.kind })];
    case 'panaderia': return [];
    case 'retiro': return [
      box(l.pond.x0, l.pond.z0, l.pond.x1, l.pond.z1, { water: true }),
      // The colonnade behind the pond.
      box(-14, 22, 14, 30, { building: 'alfonso-xii' }),
      // The glass palace: its door (south) is open, the rest is glass.
      box(l.palace.x0, l.palace.z0, l.palace.x1, l.palace.z1, { building: 'palacio-de-cristal' }),
    ];
    case 'monteleon': return [box(-3.4, 13.2, -2.2, 14.8, { prop: 'arco-pie-oeste' }), box(2.2, 13.2, 3.4, 14.8, { prop: 'arco-pie-este' })];
    case 'atocha': return [];
    case 'andenes': return [];
    case 'campana': return [];
    case 'rio': return [box(l.water.x0, l.water.z0, l.water.x1, l.water.z1, { water: true }), box(l.bridge.x - 3.5, 20, l.bridge.x + 3.5, 32, { prop: 'puente-de-segovia' })];
    default: return [];
  }
}

/** Every person standing or sitting in a zone (the circle people, survivors), for the tests and the scene. */
export function peopleOf(id) {
  const z = layoutOf(id);
  const out = [];
  for (const s of z.spots) {
    const spot = SPOTS.find((x) => x.id === s.id);
    out.push({ id: s.id, cast: spot.cast[0], ...npcOf(s), seated: false });
    const pair = z.pairs?.[s.id];
    if (pair && spot.cast[1]) out.push({ id: `${s.id}-2`, cast: spot.cast[1], ...pair, seated: false });
  }
  z.extras.forEach((e, i) => out.push({ id: `extra-${i}`, ...e, seated: /sit|ground|sleep|guitar|lie/.test(e.pose), lying: Boolean(e.lying) }));
  return out;
}

export const ZONE_ORDER = ZONES.map((z) => z.id);
export const nextZone = (id) => ZONE_ORDER[ZONE_ORDER.indexOf(id) + 1] ?? null;
export const previousZone = (id) => ZONE_ORDER[ZONE_ORDER.indexOf(id) - 1] ?? null;
export const castLook = (castId) => CAST[castId]?.look ?? {};
