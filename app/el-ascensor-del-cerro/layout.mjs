// El ascensor del cerro · the hillside without WebGL: three flat terraces at
// different heights (the port, the middle street by the stairway, the top of
// the cerro), the six white circles, solid things, the people standing about,
// and the two ways between heights: the funicular («el ascensor») and the
// stairway. World3D, the 2D plan and the tests all read from here.
//
// Coordinates: metres, y up. heading = atan2(dx, dz), so heading 0 looks to
// +z (down the hill, to the sea) and π looks to -z (up the hill).
//
// Movement stays in x/z, as in every world (noche-abierta/world3d.mjs
// stepPlayer, unchanged). The terraces never overlap in x/z, so the ground
// height is a function of where you stand (groundY). The slopes between them
// are solid: you change height only by the funicular or the stairway, both
// scripted rides (ridePose), never by physics.

export const BOUNDS = { minX: -30, maxX: 30, minZ: -36, maxZ: 34 };
export const SPAWN = { x: 2, z: 28, heading: Math.PI };
export const SPOT_RADIUS = 1.15;
export const LINK_RADIUS = 1.0;

const towards = (from, to) => Math.atan2(to.x - from.x, to.z - from.z);

// The three heights, bottom to top. z0 is the uphill edge, z1 the downhill one.
export const TERRACES = [
  { id: 'puerto', name: 'El puerto', short: 'Abajo · el puerto', y: 0, z0: 15, z1: 34 },
  { id: 'medio', name: 'La calle de la escalera', short: 'A media altura', y: 9, z0: -3, z1: 5 },
  { id: 'alto', name: 'Arriba del cerro', short: 'Arriba · el cerro', y: 18, z0: -36, z1: -13 },
];
export const terraceById = id => TERRACES.find(t => t.id === id) ?? null;
/** The terrace under (x, z): by z band (the slopes between them are solid). */
export function terraceAt(x, z) {
  if (z > 10) return TERRACES[0];
  if (z > -8) return TERRACES[1];
  return TERRACES[2];
}
export const groundY = (x, z) => terraceAt(x, z).y;

// The six circles, bottom to top; the closing (asamblea) is last. `npc` is
// the person who talks at the circle.
export const CIRCLES = [
  { id: 'estacion', n: 1, name: 'La estación de abajo', place: 'La estación del ascensor, junto al puerto', terrace: 'puerto', spot: { x: -15, z: 23 }, npc: { x: -17.6, z: 21.4 } },
  { id: 'escalera', n: 2, name: 'La escalera del mural', place: 'El descanso de la escalera, junto al mural', terrace: 'medio', spot: { x: 14, z: 1.4 }, npc: { x: 16.6, z: -1.2 } },
  { id: 'cafe', n: 3, name: 'El café', place: 'El café junto a la estación de arriba', terrace: 'alto', spot: { x: -12, z: -21.5 }, npc: { x: -12, z: -24.8 } },
  { id: 'taller', n: 4, name: 'El taller', place: 'El taller de restauración', terrace: 'alto', spot: { x: 2, z: -21.5 }, npc: { x: 2, z: -24.6 } },
  { id: 'mirador', n: 5, name: 'El mirador', place: 'El mirador sobre la bahía', terrace: 'alto', spot: { x: 10, z: -16.8 }, npc: { x: 12.6, z: -15.2 } },
  { id: 'asamblea', n: 6, name: 'La asamblea', place: 'La sede de la junta de vecinos', terrace: 'alto', spot: { x: 17, z: -23.6 }, npc: { x: 19.4, z: -26 } },
];
export const CIRCLE_IDS = CIRCLES.map(c => c.id);
export const circleById = id => CIRCLES.find(c => c.id === id) ?? null;
/** Circles from the bottom of the cerro to the top (the no-WebGL order). */
export const CIRCLES_BY_HEIGHT = [...CIRCLES].sort((a, b) => terraceById(a.terrace).y - terraceById(b.terrace).y || a.n - b.n);

// ------------------------------------------------------------------ the funicular
// Two cabins on two rails that pass each other, as real funiculars do: when
// one goes up the other comes down. `bottom`/`top` are the cabin floor at each
// station (level with the platform).
export const FUNICULAR = {
  rails: [-25.3, -22.7],
  bottom: { z: 17.6, y: 0 },
  top: { z: -15.6, y: 18 },
  chassis: 0.7,
  seconds: 5.2,
};
/** The cabin floor at s (0 = lower station, 1 = upper station). */
export function cabinAt(s, rail = FUNICULAR.rails[0]) {
  const k = Math.min(1, Math.max(0, s));
  const { bottom, top } = FUNICULAR;
  return { x: rail, y: bottom.y + (top.y - bottom.y) * k, z: bottom.z + (top.z - bottom.z) * k };
}
export const TRACK_ANGLE = Math.atan2(FUNICULAR.top.y - FUNICULAR.bottom.y, FUNICULAR.bottom.z - FUNICULAR.top.z);

// The stairway: two steep flights on the east side, port → middle → top.
export const STAIRS = { x: 24, width: 3.2, flights: [{ z0: 15, y0: 0, z1: 7, y1: 9 }, { z0: -3, y0: 9, z1: -11, y1: 18 }] };

// The ways between heights. `at` is the marker you stand on; `enter` is the
// heading that walks you into it; `exit` is where you stand after the ride
// (outside every marker, facing away, so it never starts again underfoot).
const flight1 = [[24, 0, 16.8], [24, 0, 15.1], [24, 9, 6.9], [24, 9, 4.3], [24, 9, 2.4]];
const flight2 = [[24, 9, -1.6], [24, 9, -3.1], [24, 18, -11.1], [24, 18, -13.6], [24, 18, -16.2]];
const back = (path, last) => [...path].reverse().slice(0, -1).concat([last]);
export const LINKS = [
  { id: 'ascensor-sube', kind: 'funicular', label: 'Subir en el ascensor', from: 'puerto', to: 'alto', at: { x: -24, z: 21.2 }, enter: Math.PI, exit: { x: -24, z: -20.8, heading: Math.PI } },
  { id: 'ascensor-baja', kind: 'funicular', label: 'Bajar en el ascensor', from: 'alto', to: 'puerto', at: { x: -24, z: -19.2 }, enter: 0, exit: { x: -24, z: 22.8, heading: 0 } },
  { id: 'escalera-sube-1', kind: 'escalera', label: 'Subir por la escalera', from: 'puerto', to: 'medio', at: { x: 24, z: 16.8 }, enter: Math.PI, path: flight1, exit: { x: 24, z: 2.4, heading: Math.PI } },
  { id: 'escalera-baja-1', kind: 'escalera', label: 'Bajar al puerto', from: 'medio', to: 'puerto', at: { x: 24, z: 3.9 }, enter: 0, path: back(flight1, [24, 0, 18.4]).slice(1), exit: { x: 24, z: 18.4, heading: 0 } },
  { id: 'escalera-sube-2', kind: 'escalera', label: 'Subir por la escalera', from: 'medio', to: 'alto', at: { x: 24, z: -1.6 }, enter: Math.PI, path: flight2, exit: { x: 24, z: -16.2, heading: Math.PI } },
  { id: 'escalera-baja-2', kind: 'escalera', label: 'Bajar por la escalera', from: 'alto', to: 'medio', at: { x: 24, z: -14.4 }, enter: 0, path: back(flight2, [24, 9, 0.1]).slice(1), exit: { x: 24, z: 0.1, heading: 0 } },
];
export const linkById = id => LINKS.find(l => l.id === id) ?? null;
/** The ride marker under (x, z), or null. */
export function linkAt(x, z) {
  for (const l of LINKS) if (Math.hypot(x - l.at.x, z - l.at.z) < LINK_RADIUS) return l.id;
  return null;
}
/** Walking into a marker starts the ride (E or the button too). */
export function walksInto(link, heading, speed) {
  if (!link || speed < 0.6) return false;
  return Math.cos(heading - link.enter) > 0.5;
}

const pathLength = path => path.slice(1).reduce((sum, p, i) => sum + Math.hypot(p[0] - path[i][0], p[1] - path[i][1], p[2] - path[i][2]), 0);
const ease = t => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

/** How long a ride lasts, in seconds (4–6 s by the brief). */
export function rideSeconds(link) {
  const l = typeof link === 'string' ? linkById(link) : link;
  if (!l) return 0;
  if (l.kind === 'funicular') return FUNICULAR.seconds;
  return Math.min(5.5, Math.max(4, pathLength(l.path) / 3.4));
}

/** Where the rider is at t ∈ [0, 1] of a ride: { x, y, z, heading, cabin }.
 * Funicular: the rider stands in the cabin, which climbs (or comes down) the
 * rail (`rail`: which of the two cabins); `cabin` is how far up the cabin is (0 bottom, 1 top). Stairs: the
 * rider walks the flight; `cabin` is null. */
export function ridePose(link, t, rail = FUNICULAR.rails[0]) {
  const l = typeof link === 'string' ? linkById(link) : link;
  const k = Math.min(1, Math.max(0, t));
  if (!l) return null;
  if (l.kind === 'funicular') {
    const up = l.to === 'alto';
    // A short pause at each station, then a smooth run.
    const run = ease(Math.min(1, Math.max(0, (k - 0.08) / 0.84)));
    const s = up ? run : 1 - run;
    const p = cabinAt(s, rail);
    return { x: p.x, y: p.y, z: p.z, heading: up ? Math.PI : 0, cabin: s };
  }
  const path = l.path;
  const total = pathLength(path);
  let d = ease(k) * total;
  for (let i = 1; i < path.length; i++) {
    const a = path[i - 1], b = path[i];
    const seg = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    if (d <= seg || i === path.length - 1) {
      const f = seg ? Math.min(1, d / seg) : 1;
      return { x: a[0] + (b[0] - a[0]) * f, y: a[1] + (b[1] - a[1]) * f, z: a[2] + (b[2] - a[2]) * f, heading: Math.atan2(b[0] - a[0], b[2] - a[2]), cabin: null };
    }
    d -= seg;
  }
  const last = path[path.length - 1];
  return { x: last[0], y: last[1], z: last[2], heading: l.exit.heading, cabin: null };
}

// ------------------------------------------------------------------ things
export const POLES = [
  { x: -12, z: 26.5 }, { x: 6, z: 20 }, { x: 18, z: 23 },
  { x: -10, z: 4.2 }, { x: 4, z: 4.2 },
  { x: -20, z: -24 }, { x: 8, z: -20.5 }, { x: -4.6, z: -24.4 },
];
export const TREES = [{ x: -4.2, z: -17.4 }, { x: 26, z: -30 }];
export const BOLLARDS = [-20, -10, 0, 10, 20].map(x => ({ x, z: 33.2 }));

// Buildings that stand on a terrace (the circles' own, the stations, the port
// containers). { x0, x1, z0, z1, h, color }.
export const BUILDINGS = {
  estacionBaja: { x0: -28.4, x1: -19.6, z0: 15, z1: 19.4, h: 4.6, color: '#d8cbb0' },
  estacionAlta: { x0: -28.4, x1: -19.6, z0: -17.4, z1: -13, h: 4.2, color: '#d8cbb0' },
  cafe: { x0: -17, x1: -7, z0: -36, z1: -27.6, h: 6.4, color: '#e7b04a' },
  taller: { x0: -3, x1: 7, z0: -36, z1: -27.4, h: 6.8, color: '#5f7f8c' },
  asamblea: { x0: 11, x1: 25, z0: -36, z1: -28.2, h: 7.4, color: '#e9e1cf' },
  kiosco: { x0: -5.2, x1: -2.8, z0: 17.4, z1: 19.2, h: 2.8, color: '#2f6f6a' },
  contenedores: { x0: 7, x1: 16, z0: 25, z1: 28.6, h: 5.2, color: '#b5452f' },
};

/** Boxes the hero can't walk through: { x0, x1, z0, z1, top? }. */
export function solids() {
  const boxes = [];
  // The slopes between the terraces, full width.
  boxes.push({ x0: -31, x1: 31, z0: 5, z1: 15, slope: 'puerto-medio' });
  boxes.push({ x0: -31, x1: 31, z0: -13, z1: -3, slope: 'medio-alto' });
  // The funicular cutting crosses the middle street behind a fence.
  boxes.push({ x0: -28.2, x1: -19.8, z0: -3, z1: 5 });
  for (const b of Object.values(BUILDINGS)) boxes.push({ x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1 });
  // Café tables (you can jump onto them), the old cabin in front of the
  // workshop, the mirador's bench and its coin telescope.
  for (const x of [-15.8, -8.2]) boxes.push({ x0: x - 0.5, x1: x + 0.5, z0: -24.7, z1: -23.7, top: 0.75 });
  boxes.push({ x0: 4.3, x1: 7, z0: -26.6, z1: -24.8, top: 1.9 });
  boxes.push({ x0: 6.2, x1: 8.6, z0: -14.2, z1: -13.4, top: 0.45 });
  boxes.push({ x0: 14.6, x1: 15, z0: -14, z1: -13.6, pole: true });
  // Port benches.
  boxes.push({ x0: -8.6, x1: -6.4, z0: 30, z1: 30.6, top: 0.45 });
  boxes.push({ x0: 21.4, x1: 23.6, z0: 29, z1: 29.6, top: 0.45 });
  for (const p of POLES) boxes.push({ x0: p.x - 0.12, x1: p.x + 0.12, z0: p.z - 0.12, z1: p.z + 0.12, pole: true });
  for (const t of TREES) boxes.push({ x0: t.x - 0.35, x1: t.x + 0.35, z0: t.z - 0.35, z1: t.z + 0.35 });
  for (const b of BOLLARDS) boxes.push({ x0: b.x - 0.25, x1: b.x + 0.25, z0: b.z - 0.25, z1: b.z + 0.25, top: 0.6 });
  return boxes;
}
export const SOLIDS = solids();

export function isFree(x, z, radius = 0.35, boxes = SOLIDS) {
  const b = BOUNDS;
  if (x < b.minX + radius || x > b.maxX - radius || z < b.minZ + radius || z > b.maxZ - radius) return false;
  return !boxes.some(s => s.top == null && x > s.x0 - radius && x < s.x1 + radius && z > s.z0 - radius && z < s.z1 + radius);
}

/** Free ground for a person standing on the floor: not even inside
 * something low you could jump onto (a bench, a table). */
export function isClearGround(x, z, radius = 0.35, boxes = SOLIDS) {
  return isFree(x, z, radius, boxes) && !boxes.some(s => x > s.x0 - radius && x < s.x1 + radius && z > s.z0 - radius && z < s.z1 + radius);
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

/** Teacher click-to-travel: stand just outside the circle, facing it, on free
 * ground, on the circle's own terrace (so the list changes height too), and
 * never on a ride marker. */
export function arrival(id) {
  const c = circleById(id);
  if (!c) return { ...SPAWN };
  const t = terraceById(c.terrace);
  const centre = { x: 0, z: (t.z0 + t.z1) / 2 };
  for (const back of [2.4, 3, 3.6]) {
    for (let i = 0; i < 12; i++) {
      const a = towards(c.spot, centre) + (i % 2 ? 1 : -1) * Math.ceil(i / 2) * (Math.PI / 6);
      const x = c.spot.x + Math.sin(a) * back, z = c.spot.z + Math.cos(a) * back;
      if (isClearGround(x, z) && !spotAt(x, z) && !linkAt(x, z) && terraceAt(x, z).id === c.terrace) return { x, z, heading: towards({ x, z }, c.spot) };
    }
  }
  return { ...SPAWN };
}

/** Teacher jump to a terrace (the list's «Ir a…» buttons). */
export const TERRACE_ARRIVAL = {
  puerto: { ...SPAWN },
  medio: { x: 0, z: 1.2, heading: Math.PI / 2 },
  alto: { x: -6, z: -16.2, heading: Math.PI },
};

// ------------------------------------------------------------------ people
// The neighbours and visitors standing about: fixed places, never inside a
// circle, on a ride marker or in anything solid.
export const CROWD = [
  { x: -6, z: 24.5, heading: 2.4, seed: 101, pose: 'phone' },
  { x: 10.5, z: 31, heading: 0.2, seed: 202, pose: 'arms' },
  { x: -20.5, z: 28.5, heading: -2.6, seed: 303, pose: 'stand' },
  { x: 3.5, z: 17.4, heading: 3.0, seed: 404, pose: 'stand' },
  { x: -4, z: 0.6, heading: 1.4, seed: 505, pose: 'stand' },
  { x: 7, z: 3.4, heading: -1.6, seed: 606, pose: 'phone' },
  { x: 6.4, z: -17.6, heading: 0.1, seed: 707, pose: 'stand' },
  { x: -5, z: -31, heading: 0.4, seed: 808, pose: 'arms' },
  { x: 22, z: -20, heading: -2.2, seed: 909, pose: 'phone' },
  { x: -17.5, z: -21, heading: 2.0, seed: 1001, pose: 'stand' },
];
export function crowd(count = CROWD.length) { return CROWD.slice(0, count); }

// One frame of the white circles (same rule as the other worlds): a circle
// opens once the player has stood still in it for a moment; after that it
// stays spent until they walk out.
export function circleStep(circle, here, opened, speed, dt) {
  let { inside, still, spent } = circle;
  if (opened) return { inside: null, still: 0, spent: opened, open: null };
  if (here !== inside) { inside = here; still = 0; if (!here) spent = null; }
  still = inside && speed < 0.3 ? still + dt : 0;
  const open = inside && spent !== inside && still > 0.45 ? inside : null;
  if (open) spent = open;
  return { inside, still, spent, open };
}

// ------------------------------------------------------------------ camera
/** Keep the follow camera out of the hillside: on the uphill side of a
 * terrace (and past its ends) it rises instead of going into the houses; and
 * it never stands inside a building on the terraces (the stations, the café,
 * the workshop, the hall): it slides in towards the player until it is out. */
export function clampCamera(px, pz, cx, cy, cz) {
  const t = terraceAt(px, pz);
  let x = cx, y = cy, z = cz;
  const minZ = t.z0 + 0.4;
  if (z < minZ) { y += (minZ - z) * 1.1; z = minZ; }
  const lim = 33;
  if (Math.abs(x) > lim) { y += (Math.abs(x) - lim) * 0.6; x = Math.sign(x) * lim; }
  const inside = (qx, qy, qz) => Object.values(BUILDINGS).some(b => {
    const base = groundY((b.x0 + b.x1) / 2, (b.z0 + b.z1) / 2);
    return qx > b.x0 - 0.4 && qx < b.x1 + 0.4 && qz > b.z0 - 0.4 && qz < b.z1 + 0.4 && qy < base + b.h + 0.6;
  });
  if (inside(x, y, z)) {
    const py = t.y + 1.6;
    let done = false;
    for (let k = 0.95; k >= 0.2; k -= 0.05) {
      const qx = px + (x - px) * k, qz = pz + (z - pz) * k, qy = py + (y - py) * k + (1 - k) * 1.2;
      if (!inside(qx, qy, qz)) { x = qx; y = qy; z = qz; done = true; break; }
    }
    if (!done) { x = px + (x - px) * 0.2; z = pz + (z - pz) * 0.2; y = t.y + 3.4; }
  }
  return { x, y: Math.max(y, t.y + 0.9), z };
}
