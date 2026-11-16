// La casa · the reality-show house as plain data. One floor under a 3.2 m
// ceiling (z from -6 to 20) and the walled garden behind it (z from -24 to
// -6). South: the entrance hall with the main door and the red door of
// those who quit, and the production area (the corridor of monitors and the
// make-up room) behind a door marked SOLO PRODUCCIÓN. Middle: the living
// room with the giant screen, the open kitchen and the dining table, the
// confessional and the laundry. West wing: the dormitory, the bathroom (its
// mirror hides a camera corridor) and the punishment room. Garden: the
// pool, the pergola with the hammock and the outdoor gym. Units are metres:
// x grows east, z grows south (the main door), y is up; a heading of 0 faces
// +z. The renderer (casa3d.ts, World3D.tsx) only draws what is here, so
// movement, the circles and «nobody inside an object» are tested without
// WebGL.
import { STORY } from './story.mjs';

export const WALL = 0.25;
export const CEILING = 3.2;
export const BOUNDS = { minX: -24, maxX: 24, minZ: -24, maxZ: 20 };
/** Indoors the ceiling is 3.2 m: a short jump, so nobody's head goes through it from a table. */
export const JUMP_SPEED = 5.4;
/** The north wall of the house: the garden starts here. */
export const GARDEN_Z = -6;

// You walk in through the main door, live, facing the living room.
export const SPAWN = { x: 0.6, z: 18.4, heading: Math.PI };

const inside = (r, x, z) => x > r.x0 && x < r.x1 && z > r.z0 && z < r.z1;
export const HOUSE = { x0: -24, x1: 24, z0: GARDEN_Z, z1: 20 };
export const POOL = { x0: -6, x1: 6, z0: -19, z1: -11 };
export const PERGOLA = { x0: 12.4, x1: 19.6, z0: -17.6, z1: -12.4 };
// How high the camera may rise where the mascot stands.
export function ceilingAt(x, z) { return inside(HOUSE, x, z) ? CEILING - 0.3 : 14; }
export const roofed = (x, z) => ceilingAt(x, z) < 10;

// ------------------------------------------------------------------ sectors
const S = (id, name, x0, z0, x1, z1, sound) => ({ id, name, x0, z0, x1, z1, sound });
export const SECTORS = [
  S('confesionario', 'El confesionario', 18, 4, 24, 12, 'confession'),
  S('lavanderia', 'La lavandería', 18, -6, 24, 4, 'laundry'),
  S('maquillaje', 'La sala de maquillaje', 16, 12, 24, 20, 'crew'),
  S('pasillo', 'El pasillo de producción', 6, 12, 16, 20, 'crew'),
  S('entrada', 'La entrada', -10, 12, 6, 20, 'hall'),
  S('comedor', 'El comedor', 6, 5, 18, 12, 'kitchen'),
  S('cocina', 'La cocina', 6, -6, 18, 5, 'kitchen'),
  S('salon', 'El salón', -10, -6, 6, 12, 'living'),
  S('dormitorio', 'El dormitorio', -24, 4, -10, 20, 'bedroom'),
  S('bano', 'El baño', -22.8, -6, -15, 4, 'bathroom'),
  S('castigo', 'El cuarto de castigo', -15, -6, -10, 4, 'punishment'),
  S('piscina', 'La piscina', -8, -21, 8, -9, 'pool'),
  S('gimnasio', 'El gimnasio del jardín', -24, -24, -11, -9, 'garden'),
  S('pergola', 'La pérgola', 10, -20, 22, -9, 'garden'),
  S('jardin', 'El jardín', -24, -24, 24, GARDEN_Z, 'garden'),
];
export const sectorAt = (x, z) => SECTORS.find((s) => x >= s.x0 && x <= s.x1 && z >= s.z0 && z <= s.z1) ?? null;

// ------------------------------------------------------------------ walls
// Segments [x0, z0, x1, z1, kind]: 'ext' outer walls of the house, 'int'
// inner walls, 'glass' the glass front onto the garden, 'mirror' the
// bathroom mirror (a camera corridor behind it), 'garden' the tall wall
// round the garden. Openings are gaps.
const W = (x0, z0, x1, z1, kind) => [x0, z0, x1, z1, kind];
export const WALLS = [
  // Outside of the house.
  W(-24, 20, 24, 20, 'ext'), W(-24, GARDEN_Z, -24, 20, 'ext'), W(24, GARDEN_Z, 24, 20, 'ext'),
  // The north front: solid at the wings, glass in the middle, open at the living room and the kitchen.
  W(-24, GARDEN_Z, -10, GARDEN_Z, 'ext'), W(-10, GARDEN_Z, -4, GARDEN_Z, 'glass'), W(0, GARDEN_Z, 6, GARDEN_Z, 'glass'),
  W(6, GARDEN_Z, 11, GARDEN_Z, 'glass'), W(13, GARDEN_Z, 18, GARDEN_Z, 'glass'), W(18, GARDEN_Z, 24, GARDEN_Z, 'ext'),
  // Hall and living room (a wide opening between them).
  W(-10, 12, -4, 12, 'int'), W(2, 12, 6, 12, 'int'),
  // The production area: one wall along z = 12 and two doors.
  W(6, 12, 24, 12, 'int'),
  W(6, 12, 6, 15.2, 'int'), W(6, 16.8, 6, 20, 'int'),
  W(16, 12, 16, 15.2, 'int'), W(16, 16.8, 16, 20, 'int'),
  // Living room and kitchen: open plan with two short wall ends.
  W(6, GARDEN_Z, 6, -3, 'int'), W(6, 9, 6, 12, 'int'),
  // Laundry and confessional, each with its door onto the kitchen side.
  W(18, GARDEN_Z, 18, -1.8, 'int'), W(18, -0.2, 18, 4, 'int'),
  W(18, 4, 18, 9.8, 'int'), W(18, 11.4, 18, 12, 'int'),
  W(18, 4, 24, 4, 'int'),
  // West wing: punishment room and dormitory doors onto the living room; the dormitory against the hall.
  W(-10, GARDEN_Z, -10, -1.8, 'int'), W(-10, -0.2, -10, 4, 'int'),
  W(-10, 4, -10, 7.2, 'int'), W(-10, 8.8, -10, 20, 'int'),
  // Dormitory against the bathroom and the punishment room; the bathroom door.
  W(-24, 4, -19.8, 4, 'int'), W(-18.2, 4, -10, 4, 'int'),
  W(-15, GARDEN_Z, -15, 4, 'int'),
  // The bathroom mirror, with the camera corridor behind it.
  W(-22.8, GARDEN_Z, -22.8, 4, 'mirror'),
  // The garden wall.
  W(-24, -24, 24, -24, 'garden'), W(-24, -24, -24, GARDEN_Z, 'garden'), W(24, -24, 24, GARDEN_Z, 'garden'),
];
export const DOORS = [
  { x: 6, z: 16, w: 1.6, along: 'z', label: 'SOLO PRODUCCIÓN' },
  { x: 16, z: 16, w: 1.6, along: 'z', label: 'MAQUILLAJE' },
  { x: 18, z: -1, w: 1.6, along: 'z', label: 'LAVANDERÍA' },
  { x: 18, z: 10.6, w: 1.6, along: 'z', label: 'CONFESIONARIO' },
  { x: -10, z: -1, w: 1.6, along: 'z', label: 'CASTIGO' },
  { x: -10, z: 8, w: 1.6, along: 'z', label: 'DORMITORIO' },
  { x: -19, z: 4, w: 1.6, along: 'x', label: 'BAÑO' },
];

// ------------------------------------------------------------------ furniture
// { type, x, z, w, d, rot } — w along x, d along z before `rot` quarter turns
// (rot 0: the front of a seat faces +z). `solid: false` for things you can
// walk over or through.
const F = (type, x, z, w, d, rot = 0, extra = {}) => ({ type, x, z, w, d, rot, ...extra });
// Dormitory beds: head against the wall, 2.1 m long along x.
export const BEDS = [
  ...[6.5, 9.5, 12.5, 15.5, 18.5].map((z) => ({ x: -22.75, z })),
  ...[12.8, 15.8, 18.6].map((z) => ({ x: -11.25, z })),
];
// The dining table and its chairs, one every 0.7 m on both sides.
export const TABLE = { x: 12, z: 9.4, w: 6, d: 1.1 };
export const chairX = (i) => TABLE.x - TABLE.w / 2 + 0.55 + i * 0.7;
export const FURNITURE = [
  // The hall: the main door you came in by, the red door of those who quit, a bench, the show's wall.
  F('door', 0, 19.86, 2, 0.1, 0, { solid: false, label: 'main' }),
  F('door', -7, 19.86, 1.6, 0.1, 0, { solid: false, label: 'red' }),
  F('bench', -2.6, 19.2, 2.2, 0.55, 2),
  F('plant', 5.4, 19.4, 0.6, 0.6), F('plant', -9.4, 12.6, 0.6, 0.6),
  F('showwall', 4.8, 15.4, 0.2, 3.6, 0, { solid: false }),
  F('clock', -9.86, 16, 0.1, 0.8, 0, { solid: false }),
  // The living room: the giant screen, three sofas round a coffee table, the board of nominees.
  F('screen', -9.86, 4, 0.12, 4.4, 0, { solid: false }),
  F('sofa', -1.3, 4, 3, 0.95, 3),
  F('sofa', -4.4, 0.4, 2.8, 0.95, 0),
  F('sofa', -4.4, 7.6, 2.8, 0.95, 2),
  F('coffeetable', -4.6, 4, 1.4, 0.8),
  F('rug', -4.2, 4, 5.4, 5.2, 0, { solid: false }),
  F('board', 0.5, 11.86, 3.4, 0.1, 0, { solid: false }),
  F('lamp', -8.8, -4.8, 0.4, 0.4), F('plant', 5.2, -5.2, 0.6, 0.6), F('plant', -9.2, 10.8, 0.6, 0.6),
  // The kitchen: counters along the east wall, the island, the shelf of tins, the sponsor's fridge, the hatch.
  F('counter', 17.3, -4.2, 1.2, 3.4), F('counter', 17.3, 1.9, 1.2, 3.2),
  F('island', 11, -1, 3.2, 1.2),
  F('stool', 9.8, 0.25, 0.4, 0.4), F('stool', 11, 0.25, 0.4, 0.4), F('stool', 12.2, 0.25, 0.4, 0.4),
  F('shelf', 12.2, -5.6, 3.2, 0.5),
  F('fridge', 17.3, 4.3, 1.0, 0.9, 0, { label: 'sponsor' }),
  F('hatch', 6.9, -5.86, 1.2, 0.1, 0, { solid: false }),
  // The dining table.
  F('table', TABLE.x, TABLE.z, TABLE.w, TABLE.d),
  F('chairs', TABLE.x, TABLE.z - 1.0, TABLE.w - 0.4, 0.5, 0), F('chairs', TABLE.x, TABLE.z + 1.0, TABLE.w - 0.4, 0.5, 2),
  // The confessional: the red armchair and the camera that is La Voz.
  F('armchair', 23.05, 7.6, 0.95, 1.0, 3),
  F('camera', 19.5, 7.6, 0.5, 0.5),
  F('curtain', 23.86, 7.6, 0.1, 3.2, 0, { solid: false }),
  // The laundry.
  F('washer', 23.4, -5.2, 0.8, 0.8), F('washer', 23.4, -4.3, 0.8, 0.8), F('washer', 23.4, -3.4, 0.8, 0.8), F('dryer', 23.4, -2.5, 0.8, 0.8),
  F('foldtable', 20.8, 2.6, 1.8, 0.8), F('rack', 19.2, -5.2, 1.6, 0.5),
  // The dormitory.
  ...BEDS.map((b) => F('bed', b.x, b.z, 2.1, 1.0)),
  F('wardrobe', -16.5, 19.5, 3.0, 0.6), F('wardrobe', -16.5, 4.5, 2.4, 0.6),
  // The bathroom: the sinks along the mirror, the shower.
  F('sinks', -22.45, -1, 0.6, 5.2), F('shower', -16.3, -4.7, 2.2, 2.2),
  // The punishment room: a stool, a mat, wool everywhere.
  F('stool', -13.45, -2.8, 0.42, 0.42), F('mat', -12.6, 1.8, 1.9, 1.0),
  // Production: the wall of monitors, the night producer's chair; the make-up room.
  F('monitors', 11, 12.7, 6.4, 0.9),
  F('officechair', 11, 13.95, 0.55, 0.55),
  F('watercooler', 15.4, 19.4, 0.4, 0.4),
  F('vanity', 23.55, 16, 0.9, 4.2), F('makeupchair', 22.5, 16, 0.6, 0.6, 1), F('coatrack', 18, 19.45, 2.4, 0.5),
  // The garden: the pool and its loungers, the pergola and the hammock, the outdoor gym, palms, cameras on posts.
  F('pool', (POOL.x0 + POOL.x1) / 2, (POOL.z0 + POOL.z1) / 2, POOL.x1 - POOL.x0, POOL.z1 - POOL.z0, 0, { solid: false }),
  F('lounger', -8.2, -17.6, 0.7, 1.9), F('lounger', -8.2, -14.6, 0.7, 1.9), F('lounger', -8.2, -11.6, 0.7, 1.9),
  ...[[PERGOLA.x0, PERGOLA.z0], [PERGOLA.x1, PERGOLA.z0], [PERGOLA.x0, PERGOLA.z1], [PERGOLA.x1, PERGOLA.z1]].map(([x, z]) => F('post', x, z, 0.24, 0.24)),
  F('pergola', (PERGOLA.x0 + PERGOLA.x1) / 2, (PERGOLA.z0 + PERGOLA.z1) / 2, PERGOLA.x1 - PERGOLA.x0, PERGOLA.z1 - PERGOLA.z0, 0, { solid: false }),
  F('hammock', 16, -15.6, 2.8, 0.9),
  F('button', -16, -16.2, 0.5, 0.5),
  F('weights', -21.6, -16, 0.7, 2.2), F('bike', -19.6, -21.6, 0.7, 1.5), F('bike', -17.6, -21.6, 0.7, 1.5),
  F('palm', -21.4, -8.6, 0.6, 0.6), F('palm', 21.6, -8.6, 0.6, 0.6), F('palm', 21.6, -21.6, 0.6, 0.6), F('palm', 9.4, -21.8, 0.6, 0.6),
  F('campost', -11, -22.6, 0.25, 0.25), F('campost', 22.6, -11.4, 0.25, 0.25), F('campost', 11.2, -8.4, 0.25, 0.25),
  F('deck', 0, -7.6, 48, 3.2, 0, { solid: false }),
];

// ------------------------------------------------------------------ scenes
const L = (skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras = [], extra = {}) =>
  ({ skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras, ...extra });
// The confessional circle: three scenes share it. La Voz has no body: he is the camera.
const CONFESSION = { spot: { x: 21.5, z: 7.6 }, npc: { x: 19.5, z: 7.6, heading: Math.PI / 2 }, pose: 'stand', mood: 'neutral', voice: true, look: null };

const PLACES = {
  entrada: { spot: { x: 2.4, z: 15.4 }, npc: { x: 3.9, z: 13.6, heading: -2.4 }, pose: 'point', mood: 'worried',
    look: L('#e8c4a4', 'adult', 'f', 'ponytail', '#3a2416', 'jacket', '#1e1e24', 'jeans', '#1f2840', ['headphones'], { seed: 11 }) },
  confesionario: CONFESSION,
  alianza: { spot: { x: -3.2, z: 2.6 }, npc: { x: -1.85, z: 3.2, heading: -Math.PI / 2, seat: true }, pose: 'sit', mood: 'smile',
    look: L('#c99468', 'young', 'f', 'long', '#2a1a12', 'shirt', '#e0408a', 'pants', '#1a1a20', ['earrings'], { seed: 21 }),
    extras: [{ x: -2.6, z: 5.7, heading: -2.4, pose: 'arms', mood: 'neutral', look: L('#e8c0a0', 'adult', 'm', 'short', '#2a1a12', 'tshirt', '#2a6ac8', 'shorts', '#2a2a30', [], { seed: 22, build: 'athletic' }) }] },
  cocina: { spot: { x: 13.8, z: -3.4 }, npc: { x: 16.0, z: -3.6, heading: Math.PI / 2 }, pose: 'cook', mood: 'angry',
    look: L('#8d5a3c', 'elderly', 'f', 'bun', '#e8e8e8', 'apron', '#f0c040', 'pants', '#3a3a40', ['glasses', 'earrings'], { seed: 31 }) },
  mudo: { spot: { x: 13.6, z: 6.6 }, npc: { x: 13.25, z: 8.65, heading: 0, seat: true }, pose: 'sit', mood: 'worried',
    look: L('#f0d6c0', 'adult', 'm', 'short', '#5a4a3a', 'shirt', '#e8e4dc', 'pants', '#3a3a42', ['glasses', 'beard'], { seed: 41 }) },
  nostalgia: { spot: { x: -20.4, z: 14.1 }, npc: { x: -22.3, z: 13.05, heading: 0.35, seat: true }, pose: 'sit', mood: 'sad',
    look: L('#c48f69', 'young', 'f', 'curly', '#120d0b', 'hoodie', '#f0a0c0', 'pants', '#3a2a3a', [], { seed: 51 }) },
  espejo: { spot: { x: -20.9, z: -1 }, npc: { x: -23.4, z: -1, heading: Math.PI / 2 }, pose: 'arms', mood: 'surprised',
    look: L('#a8724e', 'adult', 'm', 'cap', '#120d0b', 'tshirt', '#141418', 'jeans', '#1f2840', ['headphones'], { seed: 61 }) },
  romance: { spot: { x: 14.6, z: -11.2 }, npc: { x: 13.4, z: -13.4, heading: 0.6 }, pose: 'arms', mood: 'worried',
    look: L('#f0d6c0', 'young', 'f', 'bob', '#e0c070', 'dress', '#c81e2a', null, null, ['earrings'], { seed: 71 }),
    extras: [{ x: 16, z: -15.3, heading: 0, pose: 'sit', seat: true, mood: 'smitten', look: L('#e2b896', 'young', 'm', 'short', '#3a2416', 'shirt', '#f4f0ea', 'shorts', '#2a3a5a', ['beard'], { seed: 72 }) }] },
  edad: { spot: { x: 8.6, z: -14.4 }, npc: { x: 7.1, z: -16.4, heading: 0.7 }, pose: 'arms', mood: 'scared',
    look: L('#e8c0a0', 'adult', 'm', 'short', '#3a2416', 'shirt', '#3fb0a0', 'shorts', '#f0c020', ['glasses'], { seed: 81 }) },
  prueba: { spot: { x: -16, z: -13.2 }, npc: { x: -16, z: -15.45, heading: Math.PI }, pose: 'point', mood: 'pain',
    look: L('#8d5a3c', 'young', 'm', 'buzz', '#120d0b', 'tshirt', '#f0f0f0', 'shorts', '#c8302a', [], { seed: 91, build: 'heavy' }) },
  patrocinador: { spot: { x: 14.2, z: 2.9 }, npc: { x: 16.0, z: 4.0, heading: Math.PI / 2 }, pose: 'carry', mood: 'worried',
    look: L('#b9825c', 'adult', 'm', 'short', '#120d0b', 'suit', '#3a4a6a', 'pants', '#2a2a30', ['mustache'], { seed: 101 }) },
  nominaciones: CONFESSION,
  castigo: { spot: { x: -11.6, z: -3.6 }, npc: { x: -13.2, z: -2.8, heading: Math.PI / 2, seat: true }, pose: 'sit', mood: 'smile',
    look: L('#c99468', 'adult', 'f', 'long', '#120d0b', 'sweater', '#2a2a2a', 'pants', '#5a1a2a', ['earrings'], { seed: 111 }) },
  pasillo: { spot: { x: 11.4, z: 16.4 }, npc: { x: 11, z: 13.75, heading: Math.PI, seat: true }, pose: 'sit', mood: 'sleepy',
    look: L('#e2b896', 'old', 'f', 'bob', '#9a9a9a', 'jacket', '#3a3a3a', 'jeans', '#1f2840', ['glasses', 'headphones'], { seed: 121 }) },
  abandono: { spot: { x: -6.4, z: 16.1 }, npc: { x: -7, z: 18.5, heading: 0 }, pose: 'arms', mood: 'sad',
    look: L('#a8724e', 'adult', 'm', 'short', '#120d0b', 'sweater', '#5a6a3a', 'pants', '#3a3028', [], { seed: 131 }),
    extras: [{ x: -4.9, z: 18.1, heading: -2.3, pose: 'arms', mood: 'worried', look: L('#8d5a3c', 'elderly', 'f', 'bun', '#e8e8e8', 'apron', '#f0c040', 'pants', '#3a3a40', ['glasses', 'earrings'], { seed: 31 }) }] },
  maquillaje: { spot: { x: 19.6, z: 16 }, npc: { x: 21.5, z: 14.6, heading: -0.9 }, pose: 'arms', mood: 'laugh',
    look: L('#c48f69', 'adult', 'f', 'braids', '#2a1a12', 'apron', '#141418', 'pants', '#141418', ['earrings'], { seed: 141 }) },
  secreto: { spot: { x: 20.6, z: -2.6 }, npc: { x: 22.3, z: -3.6, heading: Math.PI / 2 }, pose: 'carry', mood: 'scared',
    look: L('#f0d6c0', 'young', 'f', 'ponytail', '#7a3a1e', 'sweater', '#b8a0d8', 'jeans', '#24304a', [], { seed: 151 }) },
  veredicto: CONFESSION,
};

export const SCENES = STORY.map((story) => ({ ...story, ...PLACES[story.id] }));
export const SCENE_IDS = SCENES.map((s) => s.id);
export const sceneById = (id) => SCENES.find((s) => s.id === id);
export const SPOT_RADIUS = 1.1;
/** The circles on the floor: one per place (the red armchair holds three scenes). */
export const SPOTS = (() => {
  const out = [];
  for (const s of SCENES) {
    const same = out.find((o) => o.x === s.spot.x && o.z === s.spot.z);
    if (same) same.ids.push(s.id); else out.push({ key: s.id, x: s.spot.x, z: s.spot.z, ids: [s.id] });
  }
  return out;
})();

// ------------------------------------------------------------------ the house
// Seventeen people who stay put and talk to you (E): see invitados.mjs.
export const CROWD = [
  { x: -7.6, z: -3.2, heading: 0.6, pose: 'crouch', mood: 'smile' },
  { x: 2.4, z: -3.6, heading: -2.4, pose: 'arms', mood: 'sleepy' },
  { x: -1.0, z: 17.2, heading: Math.PI, pose: 'arms', mood: 'neutral' },
  { x: -4.15, z: 7.2, heading: Math.PI, pose: 'sit', seat: true, mood: 'tipsy' },
  { x: -4.45, z: 0.85, heading: 0, pose: 'sleep', seat: true, mood: 'sleepy' },
  { x: -13.4, z: 9.6, heading: -Math.PI / 2, pose: 'phone', mood: 'laugh' },
  { x: -11.25, z: 15.3, heading: Math.PI / 2, pose: 'sit', seat: true, mood: 'neutral' },
  { x: 9.4, z: 2.4, heading: 0.4, pose: 'wave', mood: 'smitten' },
  { x: 9.6, z: 15.2, heading: 2.2, pose: 'phone', mood: 'worried' },
  { x: 22.6, z: 1.4, heading: -2.6, pose: 'sweep', mood: 'neutral' },
  { x: 10.15, z: 10.15, heading: Math.PI, pose: 'read', seat: true, mood: 'neutral' },
  { x: -8.15, z: -14.6, heading: Math.PI / 2, pose: 'sit', seat: true, mood: 'smile' },
  { x: 8.6, z: -4.2, heading: -0.8, pose: 'cook', mood: 'neutral' },
  { x: -19.2, z: -18.4, heading: 0.4, pose: 'arms', mood: 'pain' },
  { x: 3.4, z: -7.6, heading: -2.8, pose: 'dance', mood: 'laugh' },
  { x: 13.6, z: 18.6, heading: -2.6, pose: 'read', mood: 'worried' },
  { x: -18.4, z: -2.8, heading: 2.2, pose: 'arms', mood: 'surprised' },
];

// More housemates: they do not stop for a long talk, but each has a charla circle.
export const FILLERS = [
  { x: -7.6, z: -1.2, heading: 2.6, pose: 'dance', mood: 'tipsy' },
  { x: 14.6, z: 8.65, heading: 0, pose: 'sit', seat: true, mood: 'laugh' },
  { x: -22.4, z: 7.05, heading: 0.2, pose: 'sit', seat: true, mood: 'sleepy' },
  { x: -8.15, z: -11.6, heading: Math.PI / 2, pose: 'sit', seat: true, mood: 'sleepy' },
  { x: 10.4, z: -11.6, heading: -2.0, pose: 'arms', mood: 'laugh' },
  { x: -12.8, z: -18.6, heading: -0.6, pose: 'ground', mood: 'pain' },
];

// Two housemates who cannot sleep and walk.
export const WALKERS = [
  { path: [[-9.6, -9.6], [9.6, -9.6], [9.6, -20.6], [-9.6, -20.6]], speed: 0.9, pause: 2 },
  { path: [[-6.6, 10.4], [4.0, 10.4], [4.0, -4.2], [-6.6, -4.2]], speed: 0.8, pause: 3, delay: 9 },
];

// Short lines people say as you walk past.
export const CHATTER = [
  'Así que tú eres la sorpresa.', 'Aquí todo se graba, ¿eh?', 'Mañana nomino a Óscar.', 'Alguien se ha comido mi yogur Vitalín.', 'Saluda a la cámara tres.',
  'No digas mi nombre en el baño.', 'Esta noche hay gala.', '¿Ya votó el público?', 'Quiero ir a mi casa.', 'El atún es de Fela.',
  'Sonríe, nos ven tres millones.', 'Esa hamaca es para los romances.', 'La Voz está rara hoy.', 'Me duele la cara de sonreír.', '¿Qué hora es? Aquí no hay relojes.',
];

// The voice of the house, now and then over the speakers.
export const ANNOUNCEMENTS = [
  'La Voz: concursantes, recuerden que el micrófono no se quita ni para dormir.',
  'La Voz: Óscar, al confesionario. Óscar. Al confesionario.',
  'La Voz: la piscina se cierra a las dos. Bueno, a las tres.',
  'La Voz: queda prohibido hablar de lo que pasa fuera. Queda prohibido hablar de La Voz.',
  'La Voz: alguien tapó la cámara siete con una toalla. Sabemos quién fue.',
  'La Voz: Toño, si necesitas el baño, aguanta. Es una prueba.',
  'La Voz: recordamos que el yogur Vitalín es delicioso. Gracias.',
  'La Voz: la audiencia está votando. Pórtense como siempre. O peor.',
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

// The pool is water: one box, the ladder is only for show.
export function poolBoxes() {
  return [{ ...box(POOL.x0, POOL.z0, POOL.x1, POOL.z1), water: true }];
}

const NOT_SOLID = new Set(['door', 'showwall', 'clock', 'screen', 'rug', 'board', 'hatch', 'curtain', 'pool', 'pergola', 'deck']);
const TALL = new Set(['wardrobe', 'fridge', 'shower', 'coatrack', 'palm', 'campost', 'lamp', 'shelf', 'camera', 'post']);
// How high you stand after jumping onto something (Space). Low on purpose: the ceiling is at 3.2 m.
const TOPS = { bench: 0.45, sofa: 0.45, coffeetable: 0.42, island: 0.9, stool: 0.62, table: 0.76, chairs: 0.46, bed: 0.55, counter: 0.9, washer: 0.86, dryer: 0.86, foldtable: 0.8, mat: 0.15, monitors: 0.76, vanity: 0.78, lounger: 0.38, hammock: 0.6, button: 1.0, weights: 0.5, bike: 0.9, armchair: 0.5, officechair: 0.5, makeupchair: 0.55, sinks: 0.86, plant: 0.5, watercooler: 1.1 };
export function topOf(item) { return TOPS[item.type] ?? null; }

export function cameraBlockers() {
  return [...WALLS.filter((w) => w[4] !== 'glass' && w[4] !== 'mirror').map(wallBox), ...FURNITURE.filter((f) => TALL.has(f.type)).map(footprint)];
}

function scenePeople() {
  return SCENES.filter((s) => !s.voice).flatMap((s) => [s.npc, ...(s.extras ?? [])]);
}
export function solidsFor() {
  const walls = WALLS.map((w) => ({ ...wallBox(w), wall: w[4] }));
  const things = FURNITURE.filter((f) => f.solid !== false && !NOT_SOLID.has(f.type)).map((f) => ({ ...footprint(f), ...(topOf(f) != null ? { top: topOf(f) } : {}), prop: f.type }));
  const people = scenePeople().map((p) => ({ ...box(p.x - 0.3, p.z - 0.3, p.x + 0.3, p.z + 0.3), person: true }));
  return [...walls, ...things, ...people, ...poolBoxes()];
}

// The white circle under the player, if any. Where several scenes share a
// circle (the red armchair), the first one not played yet opens.
export function spotAt(x, z, done = [], radius = SPOT_RADIUS) {
  let best = null, distance = radius;
  for (const spot of SPOTS) {
    const d = Math.hypot(spot.x - x, spot.z - z);
    if (d < distance) { distance = d; best = spot; }
  }
  if (!best) return null;
  return best.ids.find((id) => !done.includes(id)) ?? best.ids[best.ids.length - 1];
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

// Where the player stands when a scene opens: in the circle, facing the person (or the camera).
export function sceneFraming(scene) {
  const dx = scene.npc.x - scene.spot.x, dz = scene.npc.z - scene.spot.z;
  return { x: scene.spot.x, z: scene.spot.z, heading: Math.atan2(dx, dz) };
}

// One frame of the white circles: a circle opens once the player has stood
// still in it; it stays spent until they walk out.
export function circleStep(circle, here, opened, speed, dt) {
  let { inside, still, spent } = circle;
  if (opened) return { inside: null, still: 0, spent: opened, open: null };
  if (here !== inside) { inside = here; still = 0; if (!here) spent = null; }
  still = inside && speed < 0.3 ? still + dt : 0;
  const open = inside && spent !== inside && still > 0.45 ? inside : null;
  if (open) spent = open;
  return { inside, still, spent, open };
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

// ------------------------------------------------------------------ charlas
// Landmarks with a conversation circle (charlas-3d), away from the scene circles.
export const LANDMARKS = [
  { id: 'pantalla', x: -7.8, z: 4, title: 'La pantalla gigante', intro: 'Aquí aparece La Voz cuando quiere hablar con toda la casa.', themes: ['tecnologia', 'poder'] },
  { id: 'tablero', x: 0.5, z: 10.4, title: 'El tablero de los nominados', intro: 'Fotos con una cruz roja: los que se fueron. Fotos sin cruz: los que todavía no.', themes: ['miedo', 'juego'] },
  { id: 'puerta', x: -2.4, z: 13.0, title: 'La puerta por la que entraste', intro: 'Detrás hay un plató, un público y tu vida de antes.', themes: ['viaje', 'tiempo'] },
  { id: 'atun', x: 10.8, z: -4.6, title: 'La despensa de las cuarenta latas', intro: 'Atún, atún, atún. Y una lata de melocotones que nadie toca.', themes: ['comida', 'familia'] },
  { id: 'piscina', x: 0, z: -9.6, title: 'La piscina de noche', intro: 'El agua está iluminada de azul. Nadie se baña: el agua sale fatal en cámara.', themes: ['noche', 'soledad'] },
  { id: 'camara', x: 21.2, z: -11.6, title: 'La cámara del poste', intro: 'Gira despacio y te sigue. Tiene una lucecita roja que nunca se apaga.', themes: ['tecnologia', 'miedo'] },
  { id: 'cama', x: -14.6, z: 9.4, title: 'La cama vacía', intro: 'Era de la última expulsada. Todavía tiene su almohada con forma de corazón.', themes: ['soledad', 'amor'] },
  { id: 'tendedero', x: 20.0, z: 1.0, title: 'El tendedero de catorce personas', intro: 'Calcetines de catorce desconocidos que ahora viven juntos.', themes: ['persona', 'familia'] },
];
