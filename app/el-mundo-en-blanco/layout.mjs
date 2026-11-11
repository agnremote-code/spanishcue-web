// El mundo en blanco · the world as plain data, so the 3D scene, the tests and
// the no-WebGL list share one truth: bounds, spawn, the inkwell in the middle
// (where the class ends), the twelve encounters (the white circle and where
// its paper being stands), every solid box (nobody walks or stands inside one:
// owner rule 2026-10-21) and everything that is only scenery.
// x grows east, z grows south; a heading `a` looks along (sin a, cos a).
import { CAST, SPOTS } from './story.mjs';

const box = (x0, x1, z0, z1, extra = {}) => ({ x0, x1, z0, z1, ...extra });
const around = (cx, cz, half, extra = {}) => box(cx - half, cx + half, cz - half, cz + half, extra);

export const BOUNDS = { minX: -50, maxX: 50, minZ: -56, maxZ: 48.5 };
export const SPAWN = { x: 0, z: 43, heading: Math.PI };
/** The great inkwell: it fills as the ink comes back, and it writes «tu página». */
export const FINAL = { x: 0, z: 0, r: 4.4 };
/** How far the ink of one encounter reaches. Twelve wells cover the whole sheet. */
export const INK_REACH = 23;

// circle (x, z), where the being is from the circle (angle, dist), its body radius and height off the ground.
const place = (id, x, z, angle, dist, radius, extra = {}) => ({
  id, x, z, heading: angle,
  being: { x: x + Math.sin(angle) * dist, z: z + Math.cos(angle) * dist, heading: angle + Math.PI, radius, y: 0, air: false, ...extra },
});
const W = -Math.PI / 2, E = Math.PI / 2, N = Math.PI, S = 0;
export const PLACES = [
  place('grulla', -14, 34, W, 2.1, 0.6),
  place('barco', 16, 42.4, S, 2.5, 1.15),
  place('zorro', -3, 22, N, 2.0, 0.6),
  place('bola', -22, 8, W, 2.0, 0.7),
  place('rana', -34, -5, N, 2.0, 0.65),
  place('buho', -19, -17, W, 2.1, 0.7),
  place('munecas', 22, 10, E, 2.2, 0.5),
  place('avion', 34, -4, S, 2.0, 0.55, { y: 1.35 }),
  place('dragon', 19, -17, E, 3.2, 1.6),
  place('farol', -12, -31, W, 1.9, 0.5, { y: 0.55 }),
  // Mar swims above your head: she is never in the way.
  place('ballena', 13, -34, E, 6.2, 0, { y: 3.9, air: true }),
  place('hoja', 0, -44.5, N, 2.2, 0.6),
];
export const placeOf = (id) => PLACES.find((p) => p.id === id) ?? null;
/** Lina's four sisters, hand in hand with her along z. */
export const SISTERS = [-2.2, -1.1, 1.1, 2.2].map((dz, i) => ({ id: `hermana-${i + 1}`, x: placeOf('munecas').being.x, z: placeOf('munecas').being.z + dz, radius: 0.5 }));

// ---------------------------------------------------------------- scenery with a body
export const BUILDINGS = [
  { x0: 28, x1: 34, z0: 14, z1: 19, h: 7, roof: 'gable', tint: 0 },
  { x0: 37, x1: 43, z0: 7, z1: 12, h: 9.5, roof: 'flat', tint: 1 },
  { x0: 27.5, x1: 31.5, z0: -1.5, z1: 2.5, h: 6, roof: 'gable', tint: 2 },
  { x0: 39, x1: 45, z0: -9, z1: -4, h: 8, roof: 'point', tint: 3 },
  { x0: 27, x1: 32, z0: -12, z1: -8, h: 5, roof: 'flat', tint: 1 },
  { x0: 30, x1: 36, z0: -24, z1: -19, h: 11, roof: 'point', tint: 0 },
  { x0: 40, x1: 45, z0: -18, z1: -13, h: 7, roof: 'gable', tint: 2 },
  { x0: 11, x1: 15, z0: 13, z1: 17, h: 5.5, roof: 'gable', tint: 3 },
  { x0: 38, x1: 44, z0: 20, z1: 25, h: 6.5, roof: 'flat', tint: 0 },
];
export const LAMPS = [[-4.2, -11], [4.2, -11], [-4.2, -21], [4.2, -21], [-4.2, -37], [4.2, -37], [-4.2, 12], [4.2, 12], [-4.2, 31], [4.2, 31]].map(([x, z]) => ({ x, z }));
export const MAILBOX = { x: -5.4, z: 19.4 };
export const BASKET = { x: -26.6, z: 6.2 };
export const DESK = { x0: -3.4, x1: 3.4, z0: -52.4, z1: -50.2 };
export const POND = { x: -36.5, z: -9.5, r: 4.2 };
export const DOCK = { x0: -9.5, x1: -6.5, z0: 40, z1: 48.5 };

// Things scattered by a seed: the same forest in the scene and in the tests.
function seeded(seed) { let s = seed; return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }
const KEEP_OUT = [
  ...PLACES.flatMap((p) => [{ x: p.x, z: p.z, r: 3.4 }, { x: p.being.x, z: p.being.z, r: p.id === 'ballena' ? 5 : 3.2 }]),
  { x: FINAL.x, z: FINAL.z, r: 8 }, { x: SPAWN.x, z: SPAWN.z, r: 5 }, { x: POND.x, z: POND.z, r: POND.r + 1.2 },
  { x: MAILBOX.x, z: MAILBOX.z, r: 1.6 }, { x: BASKET.x, z: BASKET.z, r: 1.8 },
];
const onPath = (x, z) => (Math.abs(x) < 5.6 && z > -50 && z < 48) || (Math.abs(z) < 3.6 && Math.abs(x) < 30) || (Math.abs(z - 8) < 2.6 && x < -4 && x > -24) || (Math.abs(z - 10) < 2.6 && x > 4 && x < 24);
const inBuilding = (x, z, m) => BUILDINGS.some((b) => x > b.x0 - m && x < b.x1 + m && z > b.z0 - m && z < b.z1 + m);
function scatter(seed, count, area, gap, sizes) {
  const r = seeded(seed), out = [];
  for (let tries = 0; tries < count * 60 && out.length < count; tries++) {
    const x = area.x0 + r() * (area.x1 - area.x0), z = area.z0 + r() * (area.z1 - area.z0), size = sizes[0] + r() * (sizes[1] - sizes[0]), kind = Math.floor(r() * 3);
    if (onPath(x, z) || inBuilding(x, z, 2) || KEEP_OUT.some((k) => Math.hypot(k.x - x, k.z - z) < k.r + 0.8)) continue;
    if (out.some((o) => Math.hypot(o.x - x, o.z - z) < gap)) continue;
    out.push({ x: Math.round(x * 10) / 10, z: Math.round(z * 10) / 10, size: Math.round(size * 100) / 100, kind });
  }
  return out;
}
/** The forest of drafts: trees whose crowns are crumpled sheets, folded firs and rolled scrolls. */
export const TREES = [
  ...scatter(11, 34, { x0: -48, x1: -8, z0: -26, z1: 20 }, 4.2, [0.85, 1.45]),
  ...scatter(23, 7, { x0: -48, x1: -18, z0: 22, z1: 40 }, 6, [0.8, 1.2]),
  ...scatter(31, 6, { x0: 8, x1: 26, z0: 22, z1: 36 }, 6, [0.8, 1.1]),
];
/** Folded rocks on the mountain. */
export const ROCKS = scatter(47, 16, { x0: -46, x1: 46, z0: -54, z1: -24 }, 5.5, [0.9, 2.1]);
/** Moorings on the shore. */
export const POSTS = [[-9.8, 41], [-6.2, 41], [-9.8, 45], [-6.2, 45], [8, 46.6], [24, 46.4]].map(([x, z]) => ({ x, z }));

export function solidsFor() {
  return [
    around(FINAL.x, FINAL.z, 2.35, { kind: 'tintero' }),
    ...BUILDINGS.map((b) => box(b.x0, b.x1, b.z0, b.z1, { kind: 'edificio' })),
    ...LAMPS.map((l) => around(l.x, l.z, 0.22, { kind: 'farola' })),
    around(MAILBOX.x, MAILBOX.z, 0.42, { kind: 'buzon' }),
    around(BASKET.x, BASKET.z, 0.8, { kind: 'papelera' }),
    box(DESK.x0, DESK.x1, DESK.z0, DESK.z1, { kind: 'escritorio' }),
    ...TREES.map((t) => around(t.x, t.z, 0.34 * t.size, { kind: 'arbol' })),
    ...ROCKS.map((r) => around(r.x, r.z, 0.62 * r.size, { kind: 'roca' })),
    ...POSTS.map((p) => around(p.x, p.z, 0.2, { kind: 'poste' })),
  ];
}

/** Everybody who stands on the ground (for the «nobody inside an object» test and for bumping). */
export function peopleOf() {
  return [
    ...PLACES.filter((p) => !p.being.air).map((p) => ({ id: p.id, x: p.being.x, z: p.being.z, radius: p.being.radius, name: CAST[SPOTS.find((s) => s.id === p.id).cast[0]].name })),
    ...SISTERS.map((s) => ({ id: s.id, x: s.x, z: s.z, radius: s.radius, name: 'Una hermana de Lina' })),
  ];
}
