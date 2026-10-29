// Más allá · the three places as plain data, so the 3D scenes, the tests and
// the no-WebGL list share one truth: bounds, spawn, the portals, the twelve
// encounters (the white circle and where its character stands), every solid
// box (nobody walks or stands inside one: owner rule 2026-10-21), the
// people who are just there and the paths of those who walk.
// x grows east, z grows south; a heading `a` looks along (sin a, cos a).
import { SPOTS } from './story.mjs';

const box = (x0, x1, z0, z1, extra = {}) => ({ x0, x1, z0, z1, ...extra });
const around = (cx, cz, half) => box(cx - half, cx + half, cz - half, cz + half);
/** Posts of a round cage (or a ring of mirrors): `n` slots, `skip` left open. */
function ring(cx, cz, r, n, size, skip = []) {
  const out = [];
  for (let i = 0; i < n; i++) {
    if (skip.includes(i)) continue;
    const a = (i / n) * Math.PI * 2;
    out.push(around(cx + Math.sin(a) * r, cz + Math.cos(a) * r, size / 2));
  }
  return out;
}
export const TALK_DIST = 1.9;
const spot = (id, x, z, angle, pose = 'stand') => ({ id, x, z, heading: angle, pose, talker: { x: x + Math.sin(angle) * TALK_DIST, z: z + Math.cos(angle) * TALK_DIST, heading: angle + Math.PI } });

// ---------------------------------------------------------------- the Umbral
const UMBRAL = {
  id: 'umbral',
  bounds: { minX: -24, maxX: 24, minZ: -24, maxZ: 30 },
  spawn: { x: 0, z: 22, heading: Math.PI },
  portals: [
    { to: 'cielo', x: -10, z: -8, r: 2.1 },
    { to: 'infierno', x: 10, z: -8, r: 2.1 },
  ],
  // The hourglass in the middle: where the class ends, once a world has been walked.
  final: { x: 0, z: 4, r: 3.2 },
  exit: null,
  spots: [],
  solids: [
    around(0, 2, 1.1),
    // The frames of the two portals.
    box(-12.9, -12.2, -8.4, -7.6), box(-7.8, -7.1, -8.4, -7.6),
    box(7.1, 7.8, -8.4, -7.6), box(12.2, 12.9, -8.4, -7.6),
  ],
  extras: [],
  walkers: [
    { seed: 901, kind: 'soul', speed: 0.7, path: [{ x: -3, z: 18 }, { x: -9, z: -3 }] },
    { seed: 902, kind: 'soul', speed: 0.6, path: [{ x: 3, z: 18 }, { x: 9, z: -3 }] },
    { seed: 903, kind: 'soul', speed: 0.5, path: [{ x: -16, z: 12 }, { x: -16, z: 22 }, { x: -20, z: 22 }, { x: -20, z: 12 }] },
  ],
};

// ---------------------------------------------------------------- the Cielo
const gate = [box(-7, -4.5, 36, 38.5), box(4.5, 7, 36, 38.5)];
const shelves = [box(28, 29, 6, 26), box(31.5, 32.5, 6, 26), box(35, 36, 6, 26), box(24, 27, 4.5, 5.5), box(24, 27, 26.5, 27.5)];
const gardenTrees = [[-30, 30], [-28, 21], [-19, 32], [-33, 25], [-17, 20], [-26, 34]].map(([x, z]) => around(x, z, 0.35));
const CIELO = {
  id: 'cielo',
  bounds: { minX: -58, maxX: 58, minZ: -56, maxZ: 62 },
  spawn: { x: 0, z: 52, heading: Math.PI },
  exit: { x: 0, z: 58.5 },
  portals: [],
  spots: [
    spot('puerta', 0, 42, Math.PI / 2),
    spot('jardin', -24, 26, -Math.PI / 2, 'crouch'),
    spot('biblioteca', 24, 16, Math.PI / 2, 'read'),
    spot('rio', -20, -2, Math.PI, 'fish'),
    spot('banquete', -22, -30, Math.PI / 2),
    spot('mirador', 24, -36, Math.PI),
  ],
  solids: [
    ...gate,
    box(2.7, 3.3, 41.6, 42.4, { top: 1.15, kind: 'lectern' }),
    ...gardenTrees,
    around(-31, 16, 1.6),
    ...shelves,
    // The river of forgetting, with the bridge at x −4…0.
    box(-58, -4, -10, -5, { kind: 'water' }), box(0, 14, -10, -5, { kind: 'water' }),
    box(-31, -24.5, -33, -27, { top: 0.85, kind: 'table' }),
    box(-58, 58, -43, -42, { kind: 'rail' }),
    // Columns of the Cumbre.
    around(-8, -32, 0.6), around(8, -32, 0.6), around(-8, -40, 0.6), around(8, -40, 0.6),
  ],
  extras: [
    { seed: 311, kind: 'soul', x: -26.5, z: -34.2, heading: 0, pose: 'sit' },
    { seed: 312, kind: 'soul', x: -29.5, z: -34.2, heading: 0, pose: 'sit' },
    { seed: 313, kind: 'soul', x: -26.5, z: -25.8, heading: Math.PI, pose: 'sit' },
    { seed: 314, kind: 'soul', x: -29.5, z: -25.8, heading: Math.PI, pose: 'sit' },
    { seed: 315, kind: 'angel', x: -12, z: 44, heading: Math.PI / 2, pose: 'stand' },
    { seed: 316, kind: 'angel', x: 12, z: 44, heading: -Math.PI / 2, pose: 'stand' },
    { seed: 317, kind: 'soul', x: -20, z: 22, heading: 2.2, pose: 'ground' },
    { seed: 318, kind: 'soul', x: 20, z: 21, heading: -1.2, pose: 'read' },
    { seed: 319, kind: 'soul', x: -12, z: -2.4, heading: Math.PI, pose: 'sit' },
    { seed: 320, kind: 'soul', x: 18, z: -38, heading: Math.PI, pose: 'stand' },
    { seed: 321, kind: 'soul', x: 30, z: -38.5, heading: Math.PI, pose: 'hug' },
  ],
  walkers: [
    { seed: 331, kind: 'angel', speed: 1.0, path: [{ x: -2, z: 32 }, { x: -2, z: -20 }] },
    { seed: 332, kind: 'soul', speed: 0.8, path: [{ x: 10, z: 30 }, { x: 16, z: 30 }, { x: 16, z: 0 }, { x: 10, z: 0 }] },
    { seed: 333, kind: 'soul', speed: 0.7, path: [{ x: -14, z: -16 }, { x: -34, z: -16 }, { x: -34, z: -22 }, { x: -14, z: -22 }] },
    { seed: 334, kind: 'angel', speed: 1.1, path: [{ x: 8, z: -20 }, { x: 30, z: -20 }, { x: 30, z: -28 }, { x: 8, z: -28 }] },
    { seed: 335, kind: 'soul', speed: 0.6, path: [{ x: -10, z: 48 }, { x: -10, z: 12 }, { x: -36, z: 12 }, { x: -36, z: 40 }] },
    { seed: 336, kind: 'angel', speed: 0.9, path: [{ x: 18, z: 48 }, { x: 40, z: 48 }, { x: 40, z: 30 }, { x: 18, z: 30 }] },
  ],
};

// ---------------------------------------------------------------- the Infierno
const mirrors = ring(-24.6, 30, 5, 10, 0.5, [2, 3]);
const cage = (cx, cz, door) => ring(cx, cz, 1.3, 10, 0.16, door);
const spires = [[-40, 44], [38, 46], [-44, 10], [44, 14], [-36, -36], [40, -40], [-12, 20], [10, 24], [-48, -20], [48, -16]].map(([x, z]) => around(x, z, 1.4));
const INFIERNO = {
  id: 'infierno',
  bounds: { minX: -58, maxX: 58, minZ: -56, maxZ: 62 },
  spawn: { x: 0, z: 52, heading: Math.PI },
  exit: { x: 0, z: 58.5 },
  portals: [],
  spots: [
    spot('ventanilla', 18, 36, Math.PI / 2),
    spot('espejos', -22, 30, -Math.PI / 2),
    spot('tribunal', 22, 4, Math.PI / 2),
    spot('barca', -22, -4, Math.PI),
    spot('jaula', 20, -26, Math.PI, 'sit'),
    spot('trono', 0, -40, Math.PI),
  ],
  solids: [
    ...gate,
    box(20.75, 21.35, 33, 39, { top: 1.1, kind: 'counter' }), box(23, 23.6, 31, 41, { kind: 'wall' }),
    ...mirrors,
    box(25.4, 27.4, -0.5, 8.5, { top: 1.4, kind: 'bench' }),
    // The river of fire, with the stone bridge at x −4…0.
    box(-58, -4, -12, -7, { kind: 'lava' }), box(0, 58, -12, -7, { kind: 'lava' }),
    ...cage(20, -28.6, [0]),
    ...cage(26, -31, []), ...cage(14, -31, []), ...cage(23, -36, []),
    box(-1.3, 1.3, -45.4, -43.3, { top: 1.1, kind: 'throne' }),
    ...spires,
    around(-8, 40, 1), around(8, 40, 1),
  ],
  extras: [
    // The queue at the window.
    { seed: 411, kind: 'soul', x: 18, z: 32.6, heading: 0, pose: 'stand' },
    { seed: 412, kind: 'soul', x: 18, z: 31.4, heading: 0, pose: 'phone' },
    { seed: 413, kind: 'soul', x: 18, z: 30.2, heading: 0, pose: 'arms' },
    { seed: 414, kind: 'soul', x: 18, z: 29, heading: 0, pose: 'stand' },
    { seed: 415, kind: 'soul', x: 18, z: 27.8, heading: 0, pose: 'cry' },
    // In the cages that nobody locked.
    { seed: 421, kind: 'soul', x: 26, z: -31, heading: 0.4, pose: 'ground' },
    { seed: 422, kind: 'soul', x: 14, z: -31, heading: -0.4, pose: 'cry' },
    { seed: 423, kind: 'soul', x: 23, z: -36, heading: 0, pose: 'ground' },
    { seed: 431, kind: 'demon', x: 28.6, z: 0.6, heading: -Math.PI / 2, pose: 'arms' },
    { seed: 432, kind: 'soul', x: 18.4, z: 1, heading: Math.PI / 2, pose: 'cuffed' },
    { seed: 433, kind: 'demon', x: -6, z: -40, heading: Math.PI / 2, pose: 'arms' },
    { seed: 434, kind: 'demon', x: 6, z: -40, heading: -Math.PI / 2, pose: 'arms' },
    { seed: 435, kind: 'soul', x: -16, z: -4.4, heading: Math.PI, pose: 'sit' },
  ],
  walkers: [
    { seed: 441, kind: 'demon', speed: 1.2, path: [{ x: -2, z: 32 }, { x: -2, z: -24 }] },
    { seed: 442, kind: 'soul', speed: 0.5, path: [{ x: -14, z: 14 }, { x: -30, z: 14 }, { x: -30, z: 6 }, { x: -14, z: 6 }] },
    { seed: 443, kind: 'soul', speed: 0.45, path: [{ x: 6, z: 18 }, { x: 16, z: 18 }, { x: 16, z: 12 }, { x: 6, z: 12 }] },
    { seed: 444, kind: 'demon', speed: 1.0, path: [{ x: -10, z: -18 }, { x: -34, z: -18 }, { x: -34, z: -28 }, { x: -10, z: -28 }] },
    { seed: 445, kind: 'soul', speed: 0.55, path: [{ x: 6, z: -18 }, { x: 34, z: -18 }, { x: 34, z: -22 }, { x: 6, z: -22 }] },
    { seed: 446, kind: 'demon', speed: 0.9, path: [{ x: -16, z: 48 }, { x: -34, z: 48 }, { x: -34, z: 22 }, { x: -16, z: 22 }] },
  ],
};

export const LAYOUTS = { umbral: UMBRAL, cielo: CIELO, infierno: INFIERNO };
export const PLACE_IDS = Object.keys(LAYOUTS);
export const layoutOf = (id) => LAYOUTS[id] ?? null;
export const solidsFor = (id) => LAYOUTS[id]?.solids ?? [];
/** Everyone who stands somewhere: the characters of the encounters and the extras. */
export function peopleOf(id) {
  const L = LAYOUTS[id];
  if (!L) return [];
  return [
    ...L.spots.map((s) => ({ id: s.id, x: s.talker.x, z: s.talker.z, seated: ['sit', 'ground', 'crouch'].includes(s.pose) })),
    ...L.extras.map((e) => ({ id: `extra-${e.seed}`, x: e.x, z: e.z, seated: ['sit', 'ground', 'crouch'].includes(e.pose) })),
  ];
}
/** The world each encounter lives in, checked against story.mjs. */
export const SPOT_PLACE = Object.fromEntries(SPOTS.map((s) => [s.id, s.world]));
