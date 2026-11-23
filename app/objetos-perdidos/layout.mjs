// Objetos perdidos · the municipal lost-and-found office of Puerto Alba as
// plain data. One floor: the street with the pharmacy to the south (+z), the
// waiting room and the counter at the front, the boss's office in the front
// right corner and the phone room in the front left, the corridor, then the
// shelves of umbrellas and keys, the cold room, the archive, the room of
// oversized objects and, out the back, the loading dock with a bus and a
// taxi. The rooftop break area is its own walled square far to the north: a
// stair door on the dock takes you up and the stair hut on the roof brings
// you down (TELEPORTS). Units are metres: x grows to the east, z to the
// south (the street), y is up; a heading of 0 faces +z. The renderer
// (oficina3d.ts, World3D.tsx) only draws what is here, so movement, the
// circles and «nobody inside an object» are tested without WebGL.
import { STORY } from './story.mjs';

export const WALL = 0.25;
export const BOUNDS = { minX: -16.4, maxX: 16.4, minZ: -150.4, maxZ: 30.4 };

// The building, the street, the dock and the roof.
export const STREET = { x0: -16, x1: 16, z0: 16, z1: 30 };
export const BUILDING = { x0: -16, x1: 16, z0: -30, z1: 16 };
export const HALL = { x0: -9, x1: 9, z0: 6, z1: 16 };
export const OFFICE_ROOM = { x0: 9, x1: 16, z0: 6, z1: 16 };
export const PHONES = { x0: -16, x1: -9, z0: 6, z1: 16 };
export const CORRIDOR = { x0: -16, x1: 16, z0: 2, z1: 6 };
export const SHELVES = { x0: -16, x1: -2, z0: -14, z1: 2 };
export const COLD = { x0: -2, x1: 6, z0: -14, z1: 2 };
export const ARCHIVE = { x0: 6, x1: 16, z0: -14, z1: 2 };
export const BIG = { x0: -16, x1: 16, z0: -30, z1: -14 };
export const DOCK = { x0: -16, x1: 16, z0: -46, z1: -30 };
export const ROOF = { x0: -10, x1: 10, z0: -150, z1: -130 };
// The roof floats far from the rest; between them nothing is walkable.
export const onRoof = (x, z) => z < -100;

// You start on the street, in front of the door, at eleven at night.
export const SPAWN = { x: 0, z: 20, heading: Math.PI };

const inside = (r, x, z) => x > r.x0 && x < r.x1 && z > r.z0 && z < r.z1;
// How high the camera may rise: indoors it stays under the ceiling.
export function ceilingAt(x, z) {
  if (inside(BIG, x, z)) return 5.4;
  if (inside(BUILDING, x, z)) return 3.4;
  return 9;
}
export const roofed = (x, z) => ceilingAt(x, z) < 8;
export const jumpSpeedFor = (x, z) => (roofed(x, z) && ceilingAt(x, z) < 4 ? 5.4 : 7.6);

// ------------------------------------------------------------------ sectors
// The first sector that contains a point wins, so small ones come first.
const S = (id, name, r, sound) => ({ id, name, x0: r.x0, z0: r.z0, x1: r.x1, z1: r.z1, sound });
export const SECTORS = [
  S('farmacia', 'La puerta de la farmacia', { x0: -16, x1: -3, z0: 23, z1: 30.4 }, 'street'),
  S('calle', 'La calle', { x0: -16.4, x1: 16.4, z0: 16, z1: 30.4 }, 'street'),
  S('mostrador', 'El mostrador', { x0: -9, x1: 9, z0: 6, z1: 10.4 }, 'hall'),
  S('espera', 'La sala de espera', HALL, 'hall'),
  S('despacho', 'El despacho de la jefa', OFFICE_ROOM, 'office'),
  S('telefonos', 'La sala de los teléfonos', PHONES, 'room'),
  S('pasillo', 'El pasillo', CORRIDOR, 'room'),
  S('llaves', 'El pasillo de las llaves', { x0: -6, x1: -2, z0: -14, z1: 2 }, 'room'),
  S('paraguas', 'Las estanterías de paraguas', SHELVES, 'room'),
  S('camara', 'La cámara fría', COLD, 'cold'),
  S('archivo', 'El archivo', ARCHIVE, 'archive'),
  S('grandes', 'La sala de objetos grandes', BIG, 'big'),
  S('muelle', 'El muelle de carga', { x0: -16.4, x1: 16.4, z0: -46.4, z1: -30 }, 'dock'),
  S('azotea', 'La azotea', { x0: -10.4, x1: 10.4, z0: -150.4, z1: -129.6 }, 'roof'),
];
export const sectorAt = (x, z) => SECTORS.find((s) => x >= s.x0 && x <= s.x1 && z >= s.z0 && z <= s.z1) ?? null;

// ------------------------------------------------------------------ walls
// Segments [x0, z0, x1, z1, kind]: 'wall' a full wall, 'glass' a wall with
// windows, 'facade' the houses across the street, 'fence' the dock fence,
// 'parapet' the low wall of the roof (too high to climb). Gaps are openings.
const W = (x0, z0, x1, z1, kind = 'wall') => [x0, z0, x1, z1, kind];
function alongZ(x, z0, z1, kind, holes = []) {
  const out = []; let at = z0;
  for (const [z, w] of [...holes].sort((a, b) => a[0] - b[0])) { if (z - w / 2 > at) out.push(W(x, at, x, z - w / 2, kind)); at = z + w / 2; }
  if (z1 > at) out.push(W(x, at, x, z1, kind));
  return out;
}
function alongX(z, x0, x1, kind, holes = []) {
  const out = []; let at = x0;
  for (const [x, w] of [...holes].sort((a, b) => a[0] - b[0])) { if (x - w / 2 > at) out.push(W(at, z, x - w / 2, z, kind)); at = x + w / 2; }
  if (x1 > at) out.push(W(at, z, x1, z, kind));
  return out;
}
export const WALLS = [
  // The edges of the ground: the alleys east and west, the houses across the street, the dock fence.
  W(-16, -46, -16, 30, 'facade'), W(16, -46, 16, 30, 'facade'), W(-16, 30, 16, 30, 'facade'), W(-16, -46, 16, -46, 'fence'),
  // The front of the office: glass with the main door; the back wall with the big loading door.
  ...alongX(16, -16, 16, 'glass', [[0, 2.4]]),
  ...alongX(-30, -16, 16, 'wall', [[0, 4.0]]),
  // The waiting room: the phone room to the west, the boss's office to the east (door), the corridor behind the counter.
  W(-9, 6, -9, 16, 'wall'), ...alongZ(9, 6, 16, 'wall', [[11, 1.2]]),
  ...alongX(6, -16, 16, 'wall', [[-12.5, 1.2], [6.8, 1.6]]),
  // The corridor's back wall with the doors of the shelves, the cold room and the archive.
  ...alongX(2, -16, 16, 'wall', [[-9, 1.6], [2, 1.4], [11, 1.4]]),
  W(-2, -14, -2, 2, 'wall'), W(6, -14, 6, 2, 'wall'),
  // The wall of the room of oversized objects, with doors from the shelves and the archive.
  ...alongX(-14, -16, 16, 'wall', [[-9, 1.6], [11, 1.4]]),
  // The roof: a low wall all round.
  W(ROOF.x0, ROOF.z0, ROOF.x1, ROOF.z0, 'parapet'), W(ROOF.x0, ROOF.z1, ROOF.x1, ROOF.z1, 'parapet'),
  W(ROOF.x0, ROOF.z0, ROOF.x0, ROOF.z1, 'parapet'), W(ROOF.x1, ROOF.z0, ROOF.x1, ROOF.z1, 'parapet'),
];
export const DOORS = [
  { x: 0, z: 16, w: 2.4, label: 'OBJETOS PERDIDOS', out: true },
  { x: 9, z: 11, w: 1.2, label: 'JEFA' }, { x: -12.5, z: 6, w: 1.2, label: 'TELÉFONOS' }, { x: 6.8, z: 6, w: 1.6, label: 'PERSONAL' },
  { x: -9, z: 2, w: 1.6, label: 'ESTANTERÍAS' }, { x: 2, z: 2, w: 1.4, label: 'CÁMARA FRÍA' }, { x: 11, z: 2, w: 1.4, label: 'ARCHIVO' },
  { x: -9, z: -14, w: 1.6, label: 'GRANDES' }, { x: 11, z: -14, w: 1.4, label: 'GRANDES' }, { x: 0, z: -30, w: 4.0, label: 'MUELLE' },
];

// The stairs: a door on the dock and the hut on the roof. Walking into one
// takes you to the other (only when you walk in, never on arrival).
export const TELEPORTS = [
  { id: 'subir', label: 'Subir a la azotea', x: 13.55, z: -38, r: 0.75, to: { x: 12.0, z: -38, heading: -Math.PI / 2 }, goes: 'bajar' },
  { id: 'bajar', label: 'Bajar al muelle', x: 5.55, z: -132, r: 0.75, to: { x: 4.0, z: -132, heading: -Math.PI / 2 }, goes: 'subir' },
];
// Where each door sends you: the arrival point is in front of the other door.
export const teleportTarget = (id) => { const t = TELEPORTS.find((d) => d.id === id); const there = TELEPORTS.find((d) => d.id === t?.goes); return there ? there.to : null; };
export const teleportAt = (x, z) => TELEPORTS.find((d) => Math.hypot(d.x - x, d.z - z) < d.r)?.id ?? null;
// One frame of the stair doors: fire on the way in, and stay quiet until the player walks out.
export function teleportStep(armed, x, z) {
  const here = teleportAt(x, z);
  if (!here) return { armed: true, go: null };
  if (!armed) return { armed: false, go: null };
  return { armed: false, go: teleportTarget(here) };
}

// ------------------------------------------------------------------ furniture
// { type, x, z, w, d, rot } — w along x, d along z before `rot` quarter turns
// (rot 0: the front of a chair, a bench or a row of seats faces +z).
const F = (type, x, z, w, d, rot = 0, extra = {}) => ({ type, x, z, w, d, rot, ...extra });
// Rows of joined plastic seats in the waiting room, facing the counter.
export const ROWS = [{ x: -5.0, z: 13.6, w: 5.2 }, { x: 3.0, z: 13.6, w: 4.0 }];
export const ROW_SEAT = 0.25; // a seated person's root sits this far towards the front edge
export const rowSeat = (row, dx) => ({ x: row.x + dx, z: row.z - ROW_SEAT, heading: Math.PI });
export const FURNITURE = [
  // The street: the pharmacy across the road, lamps, a kiosk and what the festival left behind.
  F('pharmacy', -10, 29.7, 6, 0.4, 0, { solid: false }), F('neoncross', -10, 29.6, 1, 0.3, 0, { solid: false }),
  F('bench', -6.2, 28.6, 1.6, 0.5, 2), F('streetlamp', -5, 17.0, 0.3, 0.3), F('streetlamp', 5, 17.0, 0.3, 0.3),
  F('streetlamp', 12, 29.2, 0.3, 0.3), F('kiosk', 12.6, 26.4, 2.4, 2.0), F('bin', -14.6, 17.2, 0.6, 0.6), F('bin', 14.6, 17.2, 0.6, 0.6),
  F('barrier', 1.6, 27.8, 2.4, 0.4), F('garland', 0, 23, 32, 0.2, 0, { solid: false }), F('confetti', 0, 22, 30, 10, 0, { solid: false }),
  // The waiting room: the counter, the ticket machine, the rows of seats, the clock and a plant.
  F('counter', -0.7, 8.5, 10.6, 0.8), F('ticketmachine', 7.6, 14.6, 0.5, 0.5), F('screen', 0, 15.9, 1.6, 0.1, 0, { solid: false }),
  ...ROWS.map((r) => F('seatrow', r.x, r.z, r.w, 0.55, 2)),
  F('plant', 8.3, 7.0, 0.6, 0.6), F('plant', -8.3, 15.2, 0.6, 0.6), F('noticeboard', -8.85, 9.6, 0.1, 2.4, 0, { solid: false }),
  // The boss's office: desk, chair, filing cabinet, a coat stand.
  F('desk', 13.2, 9.4, 2.0, 0.9), F('chair', 13.2, 8.4, 0.5, 0.5, 0), F('cabinet', 15.55, 13.4, 0.6, 1.6), F('coatstand', 15.4, 6.6, 0.4, 0.4),
  F('chair', 10.8, 9.4, 0.5, 0.5, 1),
  // The phone room: shelves full of phones and a table where they charge.
  F('phoneshelf', -15.5, 11, 0.7, 7), F('phoneshelf', -12.5, 15.5, 5, 0.7), F('table', -11, 13.2, 1.4, 0.8),
  // The shelves: two rows of umbrellas to the west, the key rack and the key wall to the east.
  F('umbrellashelf', -14.6, -6, 0.8, 10), F('umbrellashelf', -11.6, -6, 0.8, 9),
  F('keyrack', -5.6, -7, 0.8, 6), F('keywall', -2.45, -6, 0.5, 12), F('umbrellabin', -8.2, -1.2, 0.7, 0.7),
  // The cold room: plants to the north, food to the south, the bonsai on its table.
  F('plantshelf', 5.4, -10, 0.8, 6), F('plantshelf', -1.4, -10.5, 0.8, 5), F('fridge', 5.45, -2.5, 0.7, 5), F('foodshelf', -1.45, -2.5, 0.7, 5),
  F('bonsaitable', 2.0, -12.6, 1.2, 0.7),
  // The archive: forty years of ledgers on shelves, and a reading desk.
  ...[-2, -5, -8, -11].map((z) => F('ledgershelf', 8.0, z, 3.2, 0.6)),
  ...[-3, -6, -9, -12].map((z) => F('ledgershelf', 14.1, z, 3.2, 0.6)),
  F('desk', 14.2, 0.6, 1.6, 0.8), F('chair', 14.2, -0.35, 0.5, 0.5, 0),
  // The room of oversized objects: the canoe, the wedding dress, the tuba and more.
  F('canoe', -10, -22, 1.2, 6.5), F('mannequin', 2.0, -17.0, 0.6, 0.6), F('tubastand', 9.0, -24.5, 0.8, 0.8),
  F('teddy', 13.8, -27.6, 1.4, 1.2), F('scooter', -13.6, -27.6, 0.8, 1.8), F('crate', -14.6, -16.0, 1.0, 1.0), F('crate', -13.4, -16.0, 1.0, 1.0),
  F('drumkit', 14.2, -17.4, 1.4, 1.2), F('bigclock', 5.4, -28.9, 1.2, 0.6), F('wheelchair', -4.6, -28.6, 0.7, 0.8),
  // The loading dock: the bus of line 14, a taxi, the birdcage on a crate, the stair door.
  F('bus', -8.5, -40.5, 11, 2.6), F('taxi', 8.5, -41.5, 4.4, 1.8), F('cagecrate', 9.8, -38.4, 0.6, 0.6),
  F('stairhut', 15.0, -38, 2.0, 4.0), F('bin', -14.6, -32, 0.9, 0.9), F('pallet', 13.2, -44.2, 1.2, 1.0), F('streetlamp', -15.4, -45.4, 0.3, 0.3),
  // The roof: the stair hut, the water tank, the air conditioning, the break bench.
  F('stairhut', 8, -132, 4, 4), F('tank', -7, -146, 3, 3), F('acunit', 6.5, -146, 2, 1.4),
  F('bench', -4, -133.0, 1.8, 0.5, 2), F('table', -6.4, -133.4, 0.8, 0.8), F('chair', -7.4, -134.6, 0.5, 0.5, 3),
  F('lights', 0, -140, 20, 20, 0, { solid: false }), F('lantern', 3.4, -145.4, 0.6, 0.6),
];

// ------------------------------------------------------------------ scenes
const L = (skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras = [], extra = {}) =>
  ({ skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras, ...extra });
const CELESTINO = L('#e2b896', 'old', 'm', 'short', '#d8d8d8', 'sweater', '#6a5a3a', 'pants', '#3a3028', ['glasses'], { seed: 11 });
const face = (from, to) => Math.atan2(to.x - from.x, to.z - from.z);

const PLACES = {
  dentadura: { spot: { x: -0.2, z: 10.6 }, npc: { x: -1.8, z: 9.6 }, pose: 'arms', mood: 'worried', look: L('#e8c0a0', 'elderly', 'm', 'bald', '#e8e8e8', 'suit', '#3a3a4a', 'pants', '#2a2a30', ['mustache'], { seed: 21 }),
    extras: [{ x: -0.6, z: 7.3, heading: 0, pose: 'stand', mood: 'smile', look: CELESTINO }] },
  paraguas: { spot: { x: -13.1, z: -5.4 }, npc: { x: -13.1, z: -8.0 }, pose: 'stand', mood: 'smitten', look: L('#c99468', 'young', 'f', 'long', '#2a1a12', 'coat', '#c8a040', 'jeans', '#24304a', ['earrings'], { seed: 31 }) },
  llaves: { spot: { x: -3.9, z: -5.8 }, npc: { x: -3.9, z: -8.6 }, pose: 'arms', mood: 'neutral', look: L('#8d5a3c', 'adult', 'm', 'short', '#120d0b', 'jacket', '#3a4a3a', 'pants', '#2a2a2a', ['beard'], { seed: 41 }) },
  telefono: { spot: { x: -12.2, z: 10.6 }, npc: { x: -14.3, z: 10.0 }, pose: 'phone', mood: 'sad', look: L('#f0d6c0', 'elderly', 'f', 'bun', '#f0f0f0', 'coat', '#2a2a40', 'pants', '#2a2a30', ['glasses', 'earrings'], { seed: 51 }) },
  bonsai: { spot: { x: 2.0, z: -9.4 }, npc: { x: 2.0, z: -11.6, heading: Math.PI }, pose: 'arms', mood: 'surprised', look: L('#e2b896', 'old', 'm', 'short', '#9a9a9a', 'sweater', '#3a6a3a', 'pants', '#3a3028', [], { seed: 61 }) },
  taper: { spot: { x: 2.0, z: -0.6 }, npc: { x: 3.4, z: -3.0 }, pose: 'carry', mood: 'sad', look: L('#c48f69', 'adult', 'm', 'curly', '#2a1a12', 'hoodie', '#5a2a6a', 'jeans', '#24304a', [], { seed: 71 }) },
  guante: { spot: { x: 11.1, z: -5.4 }, npc: { x: 10.4, z: -7.8 }, pose: 'stand', mood: 'love', look: L('#e8c0a0', 'elderly', 'f', 'bob', '#e0d8e8', 'coat', '#7a1a2a', 'pants', '#2a2a30', ['scarf', 'earrings'], { seed: 81 }),
    extras: [{ x: 11.9, z: -8.5, heading: -0.6, pose: 'stand', mood: 'smitten', look: CELESTINO }] },
  anillo: { spot: { x: 2.6, z: -20.4 }, npc: { x: 3.4, z: -18.3 }, pose: 'arms', mood: 'angry', look: L('#b9825c', 'young', 'f', 'curly', '#120d0b', 'dress', '#2a8a7a', null, null, ['earrings'], { seed: 91 }),
    extras: [{ x: 4.6, z: -18.9, heading: -1.4, pose: 'stand', mood: 'worried', look: L('#c48f69', 'young', 'm', 'short', '#2a1a12', 'shirt', '#f4f0ea', 'pants', '#141418', [], { seed: 92 }) }] },
  tuba: { spot: { x: 10.0, z: -21.8 }, npc: { x: 10.4, z: -24.3 }, pose: 'stand', mood: 'smile', look: L('#a8724e', 'adult', 'm', 'short', '#120d0b', 'uniform', '#7a1a2a', 'pants', '#141418', ['hat'], { seed: 101 }) },
  canoa: { spot: { x: -6.4, z: -22.4 }, npc: { x: -8.2, z: -21.2 }, pose: 'arms', mood: 'angry', look: L('#e2b896', 'adult', 'm', 'short', '#3a2416', 'jacket', '#2a4a7a', 'jeans', '#24304a', ['beard'], { seed: 111 }),
    extras: [{ x: -8.1, z: -23.6, heading: 1.0, pose: 'arms', mood: 'sad', look: L('#c99468', 'adult', 'm', 'buzz', '#120d0b', 'sweater', '#8a6a3a', 'pants', '#2a2a2a', [], { seed: 112 }) }] },
  cenizas: { spot: { x: -7.6, z: -35.4 }, npc: { x: -6.4, z: -37.4 }, pose: 'carry', mood: 'sad', look: L('#e8c0a0', 'old', 'm', 'short', '#9a9a9a', 'coat', '#5a4a3a', 'pants', '#2a2a2a', ['glasses'], { seed: 121 }),
    extras: [{ x: -4.6, z: -37.8, heading: -0.8, pose: 'arms', mood: 'smile', look: L('#dcae88', 'adult', 'f', 'ponytail', '#6a2a18', 'uniform', '#2a4a8a', 'pants', '#1a2440', [], { seed: 122 }) }] },
  loro: { spot: { x: 7.6, z: -35.8 }, npc: { x: 7.0, z: -38.6 }, pose: 'arms', mood: 'worried', look: L('#a8724e', 'adult', 'm', 'short', '#2a1a12', 'jacket', '#1a1a1a', 'pants', '#2a2a2a', ['mustache'], { seed: 131 }),
    extras: [{ x: 9.0, z: -37.5, heading: -2.0, pose: 'arms', mood: 'angry', look: L('#c48f69', 'elderly', 'f', 'curly', '#d8d8d8', 'dress', '#d43a6a', null, null, ['earrings'], { seed: 132 }) }] },
  ladron: { spot: { x: 4.6, z: 23.4 }, npc: { x: 6.4, z: 25.4 }, pose: 'carry', mood: 'smile', look: L('#c99468', 'adult', 'm', 'cap', '#120d0b', 'hoodie', '#2a2a2a', 'jeans', '#24304a', [], { seed: 141 }) },
  sonambulo: { spot: { x: -7.0, z: 25.8 }, npc: { x: -6.2, z: 28.35, heading: Math.PI, seat: true }, pose: 'sit', mood: 'sleepy', look: L('#a8724e', 'young', 'm', 'curly', '#120d0b', 'shirt', '#5a8ac8', 'pants', '#5a8ac8', [], { seed: 151 }),
    extras: [{ x: -8.4, z: 28.2, heading: 2.6, pose: 'arms', mood: 'smile', look: L('#b9825c', 'adult', 'f', 'bun', '#120d0b', 'scrubs', '#f4f4f0', 'pants', '#f4f4f0', ['glasses'], { seed: 152 }) }] },
  farol: { spot: { x: 1.6, z: -142.2 }, npc: { x: 2.6, z: -144.6 }, pose: 'stand', mood: 'worried', look: L('#c48f69', 'young', 'f', 'ponytail', '#2a1a12', 'jacket', '#e0a020', 'jeans', '#24304a', ['earrings'], { seed: 161 }) },
  diario: { spot: { x: -4.0, z: -135.4 }, npc: { x: -4.0, z: -133.25, heading: Math.PI, seat: true }, pose: 'read', mood: 'surprised', look: L('#8d5a3c', 'young', 'm', 'short', '#120d0b', 'uniform', '#1a2440', 'pants', '#1a2440', [], { seed: 171 }) },
  alcalde: { spot: { x: -3.2, z: 11.6 }, npc: { ...rowSeat(ROWS[0], 1.8), seat: true }, pose: 'sit', mood: 'worried', look: L('#e2b896', 'adult', 'm', 'short', '#3a2416', 'suit', '#1a2440', 'pants', '#1a2440', ['glasses'], { seed: 181 }) },
  relevo: { spot: { x: 11.0, z: 12.6 }, npc: { x: 12.8, z: 11.2 }, pose: 'arms', mood: 'neutral', look: L('#c99468', 'adult', 'f', 'bob', '#3a2a20', 'suit', '#2a2a2a', 'pants', '#2a2a2a', ['glasses', 'earrings'], { seed: 191 }),
    extras: [{ x: 14.4, z: 12.8, heading: -1.8, pose: 'stand', mood: 'smile', look: CELESTINO }] },
};
for (const p of Object.values(PLACES)) if (p.npc.heading == null) p.npc.heading = face(p.npc, p.spot);

export const SCENES = STORY.map((story) => ({ ...story, ...PLACES[story.id] }));
export const SCENE_IDS = SCENES.map((s) => s.id);
export const sceneById = (id) => SCENES.find((s) => s.id === id);
export const SPOT_RADIUS = 1.1;

// ------------------------------------------------------------------ the crowd
// Seventeen people who stay put and talk to you (E): see invitados.mjs.
export const CROWD = [
  { ...rowSeat(ROWS[0], -1.4), pose: 'sit', seat: true, mood: 'sleepy' }, // Doña Amparo, número 112
  { ...rowSeat(ROWS[1], -1.0), pose: 'sit', seat: true, mood: 'worried' }, // Marcos, sin zapatos
  { x: 6.8, z: 14.0, heading: -2.4, pose: 'phone', mood: 'neutral' }, // Lucía, la del ticket
  { x: -2.4, z: 22.4, heading: 2.8, pose: 'dance', mood: 'tipsy' }, // Toño, disfrazado
  { x: 9.2, z: 21.0, heading: -1.6, pose: 'carry', mood: 'neutral' }, // Doña Rosario, barrendera
  { x: -12.6, z: 20.4, heading: 1.4, pose: 'phone', mood: 'worried' }, // Kevin, repartidor
  { x: -11.0, z: 14.3, heading: Math.PI, pose: 'arms', mood: 'smile' }, // Paula, voluntaria de los teléfonos
  { x: 14.6, z: 4.6, heading: -Math.PI / 2, pose: 'arms', mood: 'sleepy' }, // Don Ramiro, el de mantenimiento
  { x: -8.4, z: -11.2, heading: 0.6, pose: 'carry', mood: 'neutral' }, // Inés, que clasifica guantes
  { x: 0.4, z: -6.0, heading: 1.2, pose: 'arms', mood: 'scared' }, // Dani, el becario con frío
  { x: 14.2, z: -0.1, heading: 0, pose: 'read', seat: true, mood: 'neutral' }, // Don Aurelio, archivero jubilado
  { x: -1.0, z: -26.0, heading: 0.4, pose: 'carry', mood: 'laugh' }, // Pili, la del bombo
  { x: 12.6, z: -18.4, heading: -2.2, pose: 'arms', mood: 'worried' }, // Doña Chelo, madre de la novia
  { x: 2.4, z: -44.6, heading: 0.2, pose: 'arms', mood: 'neutral' }, // Jairo, mecánico de autobuses
  { x: 1.8, z: -33.6, heading: 2.8, pose: 'phone', mood: 'surprised' }, // Noelia, taxista
  { x: -7.6, z: -140.0, heading: 1.2, pose: 'balcony', mood: 'smile' }, // Mateo, el DJ
  { x: 5.4, z: -140.4, heading: -2.2, pose: 'arms', mood: 'sleepy' }, // Carla, la fotógrafa
];

// More people in the office and the street: they don't stop to talk (their circles are charlas).
export const FILLERS = [
  { ...rowSeat(ROWS[0], 0.2), pose: 'sit', seat: true, mood: 'sleepy' }, { ...rowSeat(ROWS[1], 1.4), pose: 'sit', seat: true, mood: 'tipsy' },
  { x: 10.4, z: 27.2, heading: -2.0, pose: 'arms', mood: 'laugh' }, { x: -1.6, z: 27.0, heading: 0.4, pose: 'dance', mood: 'tipsy' },
  { x: -14.4, z: 26.4, heading: 1.6, pose: 'phone', mood: 'sad' }, { x: -12.0, z: -25.6, heading: 2.2, pose: 'arms', mood: 'surprised' },
  { x: 0.8, z: -38.6, heading: -0.4, pose: 'arms', mood: 'sleepy' },
];

// Three people who walk: the cleaner in the corridor, a reveller on the street, a dock worker.
const P = (skin, age, body, hair, hairColor, top, topColor, bottom, bottomColor, extras = [], seed = 0) => L(skin, age, body, hair, hairColor, top, topColor, bottom, bottomColor, extras, { seed });
export const WALKERS = [
  { look: P('#a8724e', 'adult', 'f', 'ponytail', '#120d0b', 'uniform', '#5a8aa0', 'pants', '#2a2a30', [], 901), path: [[-14, 3.4], [12.6, 3.4]], speed: 0.9, pause: 2.5, mop: true },
  { look: P('#c48f69', 'young', 'm', 'curly', '#2a1a12', 'shirt', '#e8c020', 'jeans', '#24304a', [], 902), path: [[-13, 18.6], [13, 18.6]], speed: 1.2, pause: 1.5 },
  { look: P('#e2b896', 'adult', 'm', 'short', '#3a2416', 'jacket', '#f07020', 'pants', '#2a2a2a', [], 903), path: [[-1.2, -32], [-1.2, -44.6]], speed: 1.0, pause: 3 },
];

// Short lines people say as you walk past (shown as bubbles near them).
export const CHATTER = [
  '¿Alguien ha visto un zapato rojo?', 'Qué noche de faroles…', 'Yo solo vengo por mi paraguas.', '¿Hasta qué hora abren?', 'Dicen que hay un loro que habla.',
  'Me falta el número 113.', 'Mañana no me levanto.', '¿Esto es la cola de las llaves?', 'Hace un frío aquí dentro…', 'La banda tocó genial.',
  'Se me perdió hasta la vergüenza.', 'Mi madre me va a matar.', '¿Dónde está la máquina de café?', 'Qué paciencia tiene ese señor.', 'Esta noche no duerme nadie.',
];

// The office loudspeaker, a new message every minute or so.
export const ANNOUNCEMENTS = [
  'Megafonía: se ruega al dueño de un zapato de tacón dorado que pase por el mostrador. El zapato le espera.',
  'Megafonía: la máquina de números funciona de nuevo. Más o menos.',
  'Megafonía: se ha encontrado una dentadura. No, no es la de la tuba. Es otra.',
  'Megafonía: recordamos que la cámara fría no es un comedor. Gracias.',
  'Megafonía: el turno de noche termina a las siete. Hasta entonces, paciencia y café.',
  'Megafonía: hay mil cuatrocientos doce paraguas negros. Si el suyo es negro, describa la etiqueta.',
  'Megafonía: el loro del muelle no es un objeto. Es un vecino. Trátenlo con respeto.',
  'Megafonía: la oficina municipal de objetos perdidos les desea una feliz Noche de los Faroles.',
];

// ------------------------------------------------------------------ colliders
const box = (x0, z0, x1, z1) => ({ x0: Math.min(x0, x1), x1: Math.max(x0, x1), z0: Math.min(z0, z1), z1: Math.max(z0, z1) });
export function footprint(item) {
  const turned = item.rot === 1 || item.rot === 3;
  const w = turned ? item.d : item.w, d = turned ? item.w : item.d;
  return box(item.x - w / 2, item.z - d / 2, item.x + w / 2, item.z + d / 2);
}
export function wallBox([x0, z0, x1, z1]) {
  const h = WALL / 2;
  return x0 === x1 ? box(x0 - h, z0, x1 + h, z1) : box(x0, z0 - h, x1, z1 + h);
}

const NOT_SOLID = new Set(['pharmacy', 'neoncross', 'garland', 'confetti', 'screen', 'noticeboard', 'lights']);
const TALL = new Set(['phoneshelf', 'umbrellashelf', 'keyrack', 'keywall', 'plantshelf', 'fridge', 'foodshelf', 'ledgershelf', 'cabinet', 'stairhut', 'tank', 'bus', 'kiosk']);
// How high you stand after jumping onto something (Space).
const TOPS = { bench: 0.45, chair: 0.45, seatrow: 0.45, counter: 1.05, desk: 0.76, table: 0.75, ticketmachine: 1.4, plant: 0.8, coatstand: 1.7, umbrellabin: 0.7, bonsaitable: 0.75, canoe: 1.1, crate: 1.0, scooter: 0.9, teddy: 1.6, drumkit: 0.9, bigclock: 2.0, wheelchair: 0.5, taxi: 1.5, cagecrate: 0.6, bin: 0.9, pallet: 0.15, acunit: 1.1, mannequin: 1.7, tubastand: 1.2, barrier: 1.0, lantern: 0.5 };
export function topOf(item) { return TOPS[item.type] ?? null; }

export function cameraBlockers() {
  return [...WALLS.filter((w) => w[4] !== 'parapet' && w[4] !== 'fence').map(wallBox), ...FURNITURE.filter((f) => TALL.has(f.type)).map(footprint)];
}

function scenePeople() {
  return SCENES.flatMap((s) => [s.npc, ...(s.extras ?? [])]);
}
// Between the dock and the roof there is nothing to stand on.
export function voidBoxes() {
  return [{ ...box(BOUNDS.minX, -129.75, BOUNDS.maxX, -46.15), void: true }, { ...box(BOUNDS.minX, ROOF.z0, ROOF.x0 - 0.15, ROOF.z1), void: true }, { ...box(ROOF.x1 + 0.15, ROOF.z0, BOUNDS.maxX, ROOF.z1), void: true }];
}
export function solidsFor() {
  const walls = WALLS.map((w) => ({ ...wallBox(w), prop: w[4] }));
  const things = FURNITURE.filter((f) => f.solid !== false && !NOT_SOLID.has(f.type)).map((f) => ({ ...footprint(f), ...(topOf(f) != null ? { top: topOf(f) } : {}), prop: f.type }));
  const people = scenePeople().map((p) => ({ ...box(p.x - 0.3, p.z - 0.3, p.x + 0.3, p.z + 0.3), person: true }));
  return [...walls, ...things, ...people, ...voidBoxes()];
}

// The white circle under the player, if any.
export function spotAt(x, z, radius = SPOT_RADIUS) {
  let best = null, distance = radius;
  for (const scene of SCENES) {
    const d = Math.hypot(scene.spot.x - x, scene.spot.z - z);
    if (d < distance) { distance = d; best = scene.id; }
  }
  return best;
}

// The closest circle not played yet.
export function nextSpot(x, z, done = []) {
  let best = null, distance = Infinity;
  for (const scene of SCENES) {
    if (done.includes(scene.id)) continue;
    const d = Math.hypot(scene.spot.x - x, scene.spot.z - z);
    if (d < distance) { distance = d; best = scene; }
  }
  return best;
}

// Where the player stands when a scene opens: in the circle, facing the person.
export function sceneFraming(scene) {
  const dx = scene.npc.x - scene.spot.x, dz = scene.npc.z - scene.spot.z;
  return { x: scene.spot.x, z: scene.spot.z, heading: Math.atan2(dx, dz) };
}

// One frame of the white circles: a circle opens once the player has stood
// still in it; it stays spent until they walk out.
export function circleStep(circle, here, opened, speed, dt) {
  let { inside: at, still, spent } = circle;
  if (opened) return { inside: null, still: 0, spent: opened, open: null };
  if (here !== at) { at = here; still = 0; if (!here) spent = null; }
  still = at && speed < 0.3 ? still + dt : 0;
  const open = at && spent !== at && still > 0.45 ? at : null;
  if (open) spent = open;
  return { inside: at, still, spent, open };
}

// A walker's position after `t` seconds on its loop (with pauses).
export function walkerAt(walker, t) {
  const pts = walker.path;
  const legs = pts.map((p, i) => { const q = pts[(i + 1) % pts.length]; return { p, q, len: Math.hypot(q[0] - p[0], q[1] - p[1]) }; });
  const pause = walker.pause ?? 0;
  const total = legs.reduce((s, l) => s + l.len / walker.speed + pause, 0) || 1;
  let left = (((t + (walker.delay ?? 0)) % total) + total) % total;
  for (const leg of legs) {
    const walk = leg.len / walker.speed;
    if (left < walk) {
      const k = walk ? left / walk : 0;
      return { x: leg.p[0] + (leg.q[0] - leg.p[0]) * k, z: leg.p[1] + (leg.q[1] - leg.p[1]) * k, heading: Math.atan2(leg.q[0] - leg.p[0], leg.q[1] - leg.p[1]), moving: true };
    }
    left -= walk;
    if (left < pause) return { x: leg.q[0], z: leg.q[1], heading: Math.atan2(leg.q[0] - leg.p[0], leg.q[1] - leg.p[1]), moving: false };
    left -= pause;
  }
  return { x: pts[0][0], z: pts[0][1], heading: 0, moving: false };
}

// Landmarks with a conversation circle of their own (charlas-3d).
export const LANDMARKS = [
  { id: 'numeros', x: 6.4, z: 15.0, r: 1.0, title: 'La máquina de números', intro: 'Escupe tickets de cien en cien desde la fiesta. Va por el 112.', themes: ['tiempo', 'tecnologia'] },
  { id: 'paraguas', x: -9.4, z: -4.0, r: 1.1, title: 'La montaña de paraguas', intro: 'Mil cuatrocientos doce paraguas negros. Todos parecen el mismo.', themes: ['calle', 'persona'] },
  { id: 'libro', x: 11.0, z: -0.6, r: 1.0, title: 'El primer libro de registro', intro: 'Noviembre de 1986. La primera línea dice: «guante rojo de señora».', themes: ['historia', 'amor'] },
  { id: 'linea14', x: -11.6, z: -37.6, r: 1.2, title: 'El autobús de la línea 14', intro: 'Todavía tiene confeti en los asientos y un farol de papel en el retrovisor.', themes: ['transporte', 'fiesta'] },
  { id: 'cruz', x: -11.6, z: 26.6, r: 1.1, title: 'La cruz verde de la farmacia', intro: 'Parpadea toda la noche. Es la única luz que no se apaga en el barrio.', themes: ['salud', 'noche'] },
  { id: 'ciudad', x: -1.0, z: -147.6, r: 1.2, title: 'Puerto Alba desde la azotea', intro: 'Desde aquí se ven el puerto, los faroles caídos y el mar.', themes: ['naturaleza', 'noche'] },
];
