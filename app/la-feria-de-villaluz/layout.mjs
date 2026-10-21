// La feria de Villaluz · the fair ground without WebGL: bounds, the eight
// white circles with their stall, the candidate clusters of "Busca y
// describe", solid things, and the ambient crowd. World3D, the 2D map and the
// tests all read from here.
//
// Coordinates: metres, y up. heading = atan2(dx, dz), so heading 0 looks to
// +z and π looks to -z (north, towards the Ferris wheel).

export const BOUNDS = { minX: -40, maxX: 40, minZ: -40, maxZ: 40 };
export const SPAWN = { x: 0, z: 33, heading: Math.PI };
export const SPOT_RADIUS = 1.15;
// The candidate cluster sits this far in front of a Busca circle.
export const CLUSTER_AHEAD = 5;

const towards = (from, to) => Math.atan2(to.x - from.x, to.z - from.z);

// The eight circles, in route order of the decision (§3). `npc` is the person
// who talks at the circle; `stall` is the solid booth behind them; `look` is
// the direction the Busca camera faces (towards the open plaza).
export const CIRCLES = [
  { id: 'informacion', n: 1, name: 'Información', place: 'La caseta de información', spot: { x: -9, z: 24 }, npc: { x: -11.4, z: 25.6 }, stall: { x: -13, z: 27, w: 4, d: 3, color: '#2f6fb0' }, busca: true },
  { id: 'churreria', n: 2, name: 'La churrería', place: 'El puesto de churros', spot: { x: -24, z: 10 }, npc: { x: -27, z: 10 }, stall: { x: -29, z: 10, w: 3, d: 4.5, color: '#d9832a' } },
  { id: 'tombola', n: 3, name: 'La tómbola', place: 'La tómbola de los premios', spot: { x: -24, z: -8 }, npc: { x: -27, z: -8 }, stall: { x: -29, z: -8, w: 3, d: 5, color: '#c0392b' } },
  { id: 'noria', n: 4, name: 'La noria', place: 'La taquilla de la noria', spot: { x: -10, z: -24 }, npc: { x: -10, z: -27 }, stall: { x: -10, z: -29.5, w: 3.4, d: 2.4, color: '#7a3ab0' } },
  { id: 'artesania', n: 5, name: 'Artesanía', place: 'El puesto de artesanía', spot: { x: 12, z: -24 }, npc: { x: 12, z: -27 }, stall: { x: 12, z: -29, w: 5, d: 3, color: '#2f8a4a' } },
  { id: 'escenario', n: 6, name: 'El escenario', place: 'El escenario de la plaza', spot: { x: 22, z: -6 }, npc: { x: 21, z: -8.6 }, stall: { x: 31, z: -6, w: 6, d: 9, color: '#e0b030' }, busca: true },
  { id: 'fotos', n: 7, name: 'Las fotos', place: 'El rincón de las fotos', spot: { x: 22, z: 14 }, npc: { x: 25, z: 15.5 }, stall: { x: 29, z: 16, w: 3, d: 3, color: '#e47aa8' }, busca: true },
  { id: 'baile', n: 8, name: 'El baile', place: 'El baile de la plaza', spot: { x: 0, z: 9 }, npc: { x: -2.6, z: 10.5 }, stall: null, busca: true },
];
export const CIRCLE_IDS = CIRCLES.map(c => c.id);
export const circleById = id => CIRCLES.find(c => c.id === id) ?? null;

// Where each Busca camera looks: from the circle into the open plaza.
const LOOK_AT = { informacion: { x: -11.5, z: 14 }, escenario: { x: 26, z: -6 }, fotos: { x: 19, z: 8 }, baile: { x: 4, z: 15 } };
export function buscaHeading(circle) {
  const c = typeof circle === 'string' ? circleById(circle) : circle;
  return towards(c.spot, LOOK_AT[c.id] ?? c.npc);
}

// The Ferris wheel and the bandstand: big landmarks, solid at the base.
export const WHEEL = { x: -10, z: -34, radius: 9, cabins: 12 };
export const STAGE = { x: 31, z: -6, w: 6, d: 9, h: 1.1 };
export const DANCE_FLOOR = { x: 0, z: 1, r: 6.5 };
export const FOUNTAIN = { x: 0, z: 20, r: 1.8 };
// Poles of the strings of bulbs: a ring of ten and a tall one in the middle
// of the dance floor.
export const POLES = [...Array.from({ length: 10 }, (_, i) => { const a = (i / 10) * Math.PI * 2 + 0.3; return { x: Math.sin(a) * 17, z: Math.cos(a) * 17, h: 5.2 }; }), { x: DANCE_FLOOR.x, z: DANCE_FLOOR.z, h: 7.2 }];

/** Boxes the hero can't walk through: { x0, x1, z0, z1, top? }. */
export function solids() {
  const boxes = [];
  for (const c of CIRCLES) {
    if (!c.stall) continue;
    const s = c.stall;
    boxes.push({ x0: s.x - s.w / 2, x1: s.x + s.w / 2, z0: s.z - s.d / 2, z1: s.z + s.d / 2, top: c.id === 'escenario' ? STAGE.h : undefined });
  }
  boxes.push({ x0: WHEEL.x - 3, x1: WHEEL.x + 3, z0: WHEEL.z - 1.5, z1: WHEEL.z + 1.5 });
  boxes.push({ x0: FOUNTAIN.x - FOUNTAIN.r, x1: FOUNTAIN.x + FOUNTAIN.r, z0: FOUNTAIN.z - FOUNTAIN.r, z1: FOUNTAIN.z + FOUNTAIN.r, top: 0.6 });
  return boxes;
}
export const SOLIDS = solids();

export function isFree(x, z, radius = 0.35, boxes = SOLIDS) {
  const b = BOUNDS;
  if (x < b.minX + radius || x > b.maxX - radius || z < b.minZ + radius || z > b.maxZ - radius) return false;
  return !boxes.some(s => s.top == null && x > s.x0 - radius && x < s.x1 + radius && z > s.z0 - radius && z < s.z1 + radius);
}

/** The circle under (x, z), or null. */
export function spotAt(x, z) {
  for (const c of CIRCLES) if (Math.hypot(x - c.spot.x, z - c.spot.z) < SPOT_RADIUS) return c.id;
  return null;
}

/** Where the hero stands when a circle opens (from the list or on foot). */
export function framing(id) {
  const c = circleById(id);
  if (!c) return null;
  return { x: c.spot.x, z: c.spot.z, heading: towards(c.spot, c.npc) };
}

/** Teacher click-to-travel (AM-5): stand just outside the circle, facing it,
 * on free ground, so closing the card never reopens it underfoot. */
export function arrival(id) {
  const c = circleById(id);
  if (!c) return { ...SPAWN };
  for (const back of [2.4, 3, 3.6]) {
    for (let i = 0; i < 12; i++) {
      const a = towards(c.spot, { x: 0, z: 10 }) + (i % 2 ? 1 : -1) * Math.ceil(i / 2) * (Math.PI / 6);
      const x = c.spot.x + Math.sin(a) * back, z = c.spot.z + Math.cos(a) * back;
      if (isFree(x, z) && !spotAt(x, z)) return { x, z, heading: towards({ x, z }, c.spot) };
    }
  }
  return { ...SPAWN };
}

// ------------------------------------------------------------------ Busca
// A slot { x, z } is in the circle's fixed view: x to the screen-right, z away
// from the camera, metres from the cluster centre.
const DEFAULT_SLOTS = [
  [{ x: -2.4, z: 0.6 }, { x: -0.8, z: -0.4 }, { x: 0.8, z: 0.5 }, { x: 2.4, z: -0.3 }],
  [{ x: -3, z: 0.4 }, { x: -1.5, z: -0.5 }, { x: 0, z: 0.6 }, { x: 1.5, z: -0.4 }, { x: 3, z: 0.5 }],
];
export const defaultSlots = count => DEFAULT_SLOTS[count >= 5 ? 1 : 0].slice(0, count);

/** World position and heading (facing the camera) of a slot at a circle. */
export function slotToWorld(circle, slot) {
  const c = typeof circle === 'string' ? circleById(circle) : circle;
  const h = buscaHeading(c);
  const fx = Math.sin(h), fz = Math.cos(h);
  const rx = -Math.cos(h), rz = Math.sin(h);
  const cx = c.spot.x + fx * CLUSTER_AHEAD, cz = c.spot.z + fz * CLUSTER_AHEAD;
  return { x: cx + rx * slot.x + fx * slot.z, z: cz + rz * slot.x + fz * slot.z, heading: h + Math.PI };
}

// The Busca camera (risk 3; D6 framing fix, 2026-10-21). It stays behind the
// mascot and looks along the mascot's heading, so screen-left is the mascot's
// left. It is raised so the mascot's head sits below the candidates' feet (the
// mascot no longer hides a slot), and its field of view widens until every
// candidate, number label included, fits the screen at any aspect (390 px
// portrait included).
export const BUSCA_CAMERA = { back: 3.4, height: 4.0, lookY: 0.9, halfWidth: 0.45, margin: 0.05 };

/** Camera position, look target and vertical FOV (degrees) for a Busca
 * cluster. `points` are the candidates' world positions (default: the widest
 * default layout). */
export function buscaCamera(circle, aspect = 16 / 9, points = null) {
  const c = typeof circle === 'string' ? circleById(circle) : circle;
  const h = buscaHeading(c);
  const fx = Math.sin(h), fz = Math.cos(h);
  const rx = -Math.cos(h), rz = Math.sin(h);
  const { back, height, lookY, halfWidth, margin } = BUSCA_CAMERA;
  const position = { x: c.spot.x - fx * back, y: height, z: c.spot.z - fz * back };
  const target = { x: c.spot.x + fx * CLUSTER_AHEAD, y: lookY, z: c.spot.z + fz * CLUSTER_AHEAD };
  const list = points ?? DEFAULT_SLOTS[1].map(slot => slotToWorld(c, slot));
  let half = 0;
  for (const p of list) {
    const dx = p.x - position.x, dz = p.z - position.z;
    const depth = dx * fx + dz * fz, side = Math.abs(dx * rx + dz * rz);
    half = Math.max(half, Math.atan2(side + halfWidth, depth));
  }
  const base = aspect < 0.8 ? 70 : 58;
  const fit = (2 * Math.atan(Math.tan(half + margin) / aspect) * 180) / Math.PI;
  return { position, target, fov: Math.max(base, fit), heading: h };
}

/** The figures of a set placed in the world (authored slots or defaults). */
export function placeSet(set, circleId) {
  const slots = defaultSlots(set.figures.length);
  return set.figures.map((figure, i) => ({ figure, n: i + 1, ...slotToWorld(circleId, figure.slot ?? slots[i]) }));
}

// ------------------------------------------------------------------ crowd
// The ambient crowd: deterministic places and seeds, never inside a circle,
// a stall or a Busca cluster (so it can't be mistaken for a candidate).
function rand(seed) {
  let s = seed >>> 0;
  return () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const CLUSTERS = CIRCLES.filter(c => c.busca).map(c => slotToWorld(c, { x: 0, z: 0 }));
const POSES = ['stand', 'stand', 'phone', 'wave', 'arms', 'stand', 'dance'];

export function crowd(count = 24) {
  const r = rand(4021);
  const out = [];
  let guard = 0;
  while (out.length < count && guard++ < 4000) {
    const x = (r() * 2 - 1) * 34, z = (r() * 2 - 1) * 34;
    if (!isFree(x, z, 1.2)) continue;
    if (CIRCLES.some(c => Math.hypot(x - c.spot.x, z - c.spot.z) < 4 || Math.hypot(x - c.npc.x, z - c.npc.z) < 2)) continue;
    if (CLUSTERS.some(c => Math.hypot(x - c.x, z - c.z) < 6.5)) continue;
    if (Math.hypot(x - SPAWN.x, z - SPAWN.z) < 4) continue;
    if (out.some(p => Math.hypot(x - p.x, z - p.z) < 2.2)) continue;
    const onFloor = Math.hypot(x - DANCE_FLOOR.x, z - DANCE_FLOOR.z) < DANCE_FLOOR.r;
    out.push({ x: Math.round(x * 10) / 10, z: Math.round(z * 10) / 10, heading: r() * Math.PI * 2, seed: Math.floor(r() * 1e9), pose: onFloor ? 'dance' : POSES[Math.floor(r() * POSES.length)] });
  }
  return out;
}

// One frame of the white circles (same rule as the hospital): a circle opens
// once the player has stood still in it for a moment; after that it stays
// spent until they walk out.
export function circleStep(circle, here, opened, speed, dt) {
  let { inside, still, spent } = circle;
  if (opened) return { inside: null, still: 0, spent: opened, open: null };
  if (here !== inside) { inside = here; still = 0; if (!here) spent = null; }
  still = inside && speed < 0.3 ? still + dt : 0;
  const open = inside && spent !== inside && still > 0.45 ? inside : null;
  if (open) spent = open;
  return { inside, still, spent, open };
}
