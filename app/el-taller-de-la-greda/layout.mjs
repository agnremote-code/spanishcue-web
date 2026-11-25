// El taller de la greda · the workshop without WebGL: bounds, the eight white
// circles along the production line, who stands where, the order's props
// (they move one station along as each circle is done), solid things.
// World3D, the 2D map and the tests all read from here.
//
// A family pottery workshop: a covered shed (counter, clay table, wheel,
// drying shelves, two kilns, glaze bench), an open office corner and the
// dispatch yard with the truck. A working place: sacks, shelves, buckets,
// boxes. No folkloric décor and no town name (concept §6.5, Martin §10).
//
// Coordinates: metres, y up. heading = atan2(dx, dz), so heading 0 looks to
// +z (south, the yard gate) and π looks to -z (north, the back wall).

export const BOUNDS = { minX: -22, maxX: 22, minZ: -15, maxZ: 19 };
export const SPAWN = { x: -4, z: 16, heading: Math.PI };
export const SPOT_RADIUS = 1.15;
/** The covered shed: roof over posts, back wall on the north bound. */
export const SHED = { x0: -22, x1: 12.4, z0: -15, z1: 3, h: 4.2 };

const towards = (from, to) => Math.atan2(to.x - from.x, to.z - from.z);

// The eight circles, in the order the order travels (games.mjs spots).
// `npc` is the main speaker's place (the camera frames the player and them);
// `slots` place every cast member on stage at that circle.
export const CIRCLES = [
  { id: 'mostrador', n: 1, name: 'El mostrador', place: 'El mostrador con el teléfono', spot: { x: -13, z: 7.5 }, npc: { x: -13, z: 3.8 }, slots: { gonzalo: { x: -13, z: 3.8 } } },
  { id: 'greda', n: 2, name: 'La mesa de la greda', place: 'La mesa de amasar', spot: { x: -17, z: -1 }, npc: { x: -17.4, z: -3 }, slots: { paola: { x: -17.4, z: -3 } } },
  { id: 'torno', n: 3, name: 'El torno', place: 'El torno de Gonzalo', spot: { x: -9, z: -5 }, npc: { x: -9, z: -9.1 }, slots: { gonzalo: { x: -9, z: -9.1 }, paola: { x: -7.2, z: -7.4 } } },
  { id: 'secadero', n: 4, name: 'El secadero', place: 'Los estantes del secadero', spot: { x: -1, z: -7 }, npc: { x: -1, z: -9.8 }, slots: { emilio: { x: -1, z: -9.8 } } },
  { id: 'horno', n: 5, name: 'El horno', place: 'El horno pequeño', spot: { x: 6.5, z: -5 }, npc: { x: 7, z: -7.2 }, slots: { emilio: { x: 7, z: -7.2 }, marina: { x: 5, z: -6.2 } } },
  { id: 'esmaltes', n: 6, name: 'Los esmaltes', place: 'La mesa de los esmaltes', spot: { x: 7, z: 0.4 }, npc: { x: 8.9, z: -1.4 }, slots: { paola: { x: 8.9, z: -1.4 }, emilio: { x: 8.9, z: 1.9 } } },
  { id: 'oficina', n: 7, name: 'La oficina', place: 'El escritorio de Marina', spot: { x: 1.5, z: 7.5 }, npc: { x: 1.5, z: 10.8 }, slots: { marina: { x: 1.5, z: 10.8 } } },
  { id: 'patio', n: 8, name: 'El patio', place: 'El patio de despacho', spot: { x: 15, z: 7 }, npc: { x: 15.5, z: 9.2 }, slots: { roberto: { x: 15.5, z: 9.2 }, marina: { x: 13.3, z: 8.6 } } },
];
export const CIRCLE_IDS = CIRCLES.map(c => c.id);
export const circleById = id => CIRCLES.find(c => c.id === id) ?? null;

// Where each person works when no circle needs them (the home slot is one of
// their circle slots, so nobody is ever shown twice).
export const HOMES = { gonzalo: 'torno', paola: 'greda', emilio: 'secadero', marina: 'oficina', roberto: 'patio' };
// The closing round («La cadena del recado»): everyone comes out to the yard.
export const CLOSING_SLOTS = { gonzalo: { x: 11.2, z: 6.6 }, paola: { x: 12, z: 5 }, emilio: { x: 17.6, z: 5.4 }, marina: { x: 13.3, z: 8.6 }, roberto: { x: 15.5, z: 9.2 } };

/** Where every person stands: at the open circle if they are in its cast,
 * otherwise at home. `closing` brings everyone to the yard. */
export function standings(openId = null, closing = false) {
  const open = openId ? circleById(openId) : null;
  const out = {};
  for (const [who, home] of Object.entries(HOMES)) {
    const at = closing ? CLOSING_SLOTS[who] : open?.slots[who] ?? circleById(home).slots[who];
    out[who] = { x: at.x, z: at.z };
  }
  return out;
}

// Furniture and machines (solid, the hero can't walk through them).
export const COUNTER = { x0: -15, x1: -11, z0: 4.6, z1: 5.4 };
export const KNEAD_TABLE = { x0: -20.5, x1: -18.5, z0: -2.6, z1: 0.6 };
export const SACKS = { x0: -21.6, x1: -20.6, z0: -7, z1: -3.4 };
export const COVERED = { x0: -21.6, x1: -20.6, z0: 1.2, z1: 2.6 };
export const WHEEL = { x0: -9.5, x1: -8.5, z0: -8.5, z1: -7.5 };
export const PLATE_RACK = { x0: -12.6, x1: -11.8, z0: -9.4, z1: -6.2 };
export const DRY_SHELVES = { x0: -4.2, x1: 2.2, z0: -13.6, z1: -12.8 };
export const CRACKED_BOX = { x0: 1.6, x1: 2.4, z0: -10.4, z1: -9.6 };
export const SMALL_KILN = { x0: 6.2, x1: 8, z0: -10.2, z1: -8.4 };
export const BIG_KILN = { x0: 9, x1: 11.6, z0: -13.8, z1: -10.6 };
export const SAMPLE_TABLE = { x0: 3.6, x1: 5.2, z0: -8.6, z1: -7.6 };
export const GLAZE_TABLE = { x0: 9.6, x1: 11.4, z0: -0.8, z1: 1.4 };
export const DESK = { x0: 0, x1: 3, z0: 9.2, z1: 10 };
export const OFFICE_SHELF = { x0: -0.4, x1: 3.4, z0: 12.1, z1: 12.6 };
export const OFFICE_WALLS = [{ x0: -0.9, x1: 4, z0: 12.6, z1: 12.9 }, { x0: -1.2, x1: -0.9, z0: 9, z1: 12.9 }];
export const CRATES = { x0: 11.6, x1: 14, z0: 9.9, z1: 11.5 };
export const TRUCK = { x0: 16.2, x1: 19, z0: 10, z1: 17.2 };
// The shed's east wall (the glaze bench stands against it) and its posts.
export const EAST_WALL = { x0: 12, x1: 12.4, z0: -15, z1: -2 };
export const POSTS = [{ x: -21.4, z: 2.6 }, { x: -8, z: 2.6 }, { x: 4, z: 2.6 }, { x: 12.2, z: 2.6 }, { x: -8, z: -14.4 }, { x: 4, z: -14.4 }];

/** Boxes the hero can't walk through: { x0, x1, z0, z1, top?, pole? }. */
export function solids() {
  const boxes = [COUNTER, KNEAD_TABLE, SACKS, COVERED, WHEEL, PLATE_RACK, DRY_SHELVES, CRACKED_BOX, SMALL_KILN, BIG_KILN, SAMPLE_TABLE, GLAZE_TABLE, DESK, OFFICE_SHELF, ...OFFICE_WALLS, CRATES, TRUCK, EAST_WALL].map(b => ({ ...b }));
  for (const p of POSTS) boxes.push({ x0: p.x - 0.14, x1: p.x + 0.14, z0: p.z - 0.14, z1: p.z + 0.14, pole: true });
  return boxes;
}
export const SOLIDS = solids();

export function isFree(x, z, radius = 0.35, boxes = SOLIDS) {
  const b = BOUNDS;
  if (x < b.minX + radius || x > b.maxX - radius || z < b.minZ + radius || z > b.maxZ - radius) return false;
  return !boxes.some(s => s.top == null && x > s.x0 - radius && x < s.x1 + radius && z > s.z0 - radius && z < s.z1 + radius);
}

/** Free ground for a person standing on the floor (nothing low to stand in). */
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
 * ground, so closing the card never reopens it underfoot. */
export function arrival(id) {
  const c = circleById(id);
  if (!c) return { ...SPAWN };
  for (const back of [2.4, 3, 3.6]) {
    for (let i = 0; i < 12; i++) {
      const a = towards(c.npc, c.spot) + (i % 2 ? 1 : -1) * Math.ceil(i / 2) * (Math.PI / 6);
      const x = c.spot.x + Math.sin(a) * back, z = c.spot.z + Math.cos(a) * back;
      if (isClearGround(x, z) && !spotAt(x, z)) return { x, z, heading: towards({ x, z }, c.spot) };
    }
  }
  return { ...SPAWN };
}

// The order's props (concept §5.4, «El recado viaja»): each sits at its
// `from` station until the circle `after` is done, then at `to`.
export const PROPS = [
  { id: 'cuaderno', after: 'mostrador', from: { x: -12.2, y: 1.06, z: 5 }, to: { x: -19.5, y: 0.96, z: 0.1 } },
  { id: 'bolas', after: 'greda', from: { x: -19.5, y: 0.96, z: -1.6 }, to: { x: -12.2, y: 1.42, z: -6.6 } },
  { id: 'tabla', after: 'torno', from: { x: -12.2, y: 0.94, z: -8.8 }, to: { x: -2.6, y: 1.28, z: -13.2 } },
  { id: 'muestra', after: 'secadero', from: { x: 0.6, y: 1.28, z: -13.2 }, to: { x: 4.4, y: 0.98, z: -8.1 } },
  { id: 'balde', after: 'horno', from: { x: 5.8, y: 0, z: -11.4 }, to: { x: 10.1, y: 0.98, z: 0.2 } },
  { id: 'jarra', after: 'esmaltes', from: { x: 10.8, y: 0.98, z: 0.9 }, to: { x: 2.4, y: 1.18, z: 12.35 } },
  { id: 'factura', after: 'oficina', from: { x: 1.1, y: 0.98, z: 9.6 }, to: { x: 13.6, y: 1.62, z: 10.7 } },
];
/** Where a prop is with these circles done. */
export const propAt = (prop, done) => (done.includes(prop.after) ? prop.to : prop.from);

// One frame of the white circles (same rule as the feria): a circle opens once
// the player has stood still in it for a moment; after that it stays spent
// until they walk out.
export function circleStep(circle, here, opened, speed, dt) {
  let { inside, still, spent } = circle;
  if (opened) return { inside: null, still: 0, spent: opened, open: null };
  if (here !== inside) { inside = here; still = 0; if (!here) spent = null; }
  still = inside && speed < 0.3 ? still + dt : 0;
  const open = inside && spent !== inside && still > 0.45 ? inside : null;
  if (open) spent = open;
  return { inside, still, spent, open };
}
