// La boda · Estancia Los Aromos as plain data: the gate and the parking lot
// (south), the avenue of trees, the white chapel (west), the gardens with two
// long tables and the asado (centre), the rose garden, the old ombú, the big
// tent with the stage, the dance floor and the bar (east), the main house
// with its galería, the bride's room, the groom's room and the kitchen
// (north), the stables and the corral (north-east) and the pond with its
// jetty (north-west). One open world, no floors. Units are metres: x grows
// east, z grows south (the gate), y is up; a heading of 0 faces +z. The
// renderer (estancia3d.ts, World3D.tsx) only draws what is here, so
// movement, the circles and «nobody inside an object» are tested without
// WebGL.
import { STORY } from './story.mjs';

export const WALL = 0.25;
export const HOUSE_H = 3.2;
export const CHAPEL_H = 4.4;
export const BOUNDS = { minX: -46, maxX: 46, minZ: -46, maxZ: 46 };

// You arrive through the gate at five in the afternoon, facing the estancia.
export const SPAWN = { x: 0, z: 42, heading: Math.PI };

// ------------------------------------------------------------------ zones
export const CHAPEL = { x0: -31, z0: 8, x1: -21, z1: 22, door: [-27, -25] };
export const HOUSE = { x0: -16, z0: -34, x1: 16, z1: -22, porch: -18.4 };
export const TENT = { x0: 16, z0: -18, x1: 42, z1: 12, h: 4.2, ridge: 6.6 };
export const BARN = { x0: 21, z0: -45, x1: 37, z1: -35 };
export const POND = { x: -32, z: -30, rx: 9, rz: 8 };
export const JETTY = { x0: -33.2, x1: -21.6, z0: -30.8, z1: -29.2 };
export const DANCE = { x0: 21.5, z0: -9.8, x1: 36.5, z1: -1.2 };
export const STAGE = { x0: 22, z0: -17.8, x1: 36, z1: -13.2, top: 0.6 };

const inside = (r, x, z) => x > r.x0 && x < r.x1 && z > r.z0 && z < r.z1;
// How high the camera may rise where the mascot stands: under a roof it stays
// below the beams; in the open it can climb into the sky.
export function ceilingAt(x, z) {
  if (inside(CHAPEL, x, z)) return CHAPEL_H - 0.4;
  if (inside(HOUSE, x, z)) return HOUSE_H - 0.3;
  if (x > HOUSE.x0 && x < HOUSE.x1 && z >= HOUSE.z1 && z < HOUSE.porch) return 2.7;
  if (inside(TENT, x, z)) return TENT.h - 0.3;
  return 14;
}
export const roofed = (x, z) => ceilingAt(x, z) < 10;

// ------------------------------------------------------------------ sectors
const S = (id, name, x0, z0, x1, z1, sound) => ({ id, name, x0, z0, x1, z1, sound });
export const SECTORS = [
  S('capilla', 'La capilla', CHAPEL.x0, CHAPEL.z0, CHAPEL.x1, CHAPEL.z1, 'chapel'),
  S('novia', 'El cuarto de la novia', -16, -34, -6, -22, 'room'),
  S('novio', 'El cuarto del novio', -6, -34, 4, -22, 'room'),
  S('cocina', 'La cocina', 4, -34, 16, -22, 'kitchen'),
  S('galeria', 'La galería de la casa', -16, -22, 16, -16.5, 'porch'),
  S('escenario', 'El escenario', 16, -18, 42, -12.4, 'stage'),
  S('barra', 'La barra', 36.6, -12.4, 42, 2, 'bar'),
  S('carpa', 'La carpa', TENT.x0, TENT.z0, TENT.x1, TENT.z1, 'party'),
  S('parrilla', 'La parrilla', -20, -10, -11, 0.5, 'asado'),
  S('mesas', 'Las mesas largas', -11, -14, 13, 2.5, 'tables'),
  S('rosedal', 'El rosedal', -19, 5, -8, 18, 'garden'),
  S('cantero', 'El cantero de la capilla', -21, 18, -12, 30, 'garden'),
  S('ombu', 'El ombú', 5, 9, 16, 24, 'garden'),
  S('establo', 'El establo y el corral', 17, -46, 46, -22, 'farm'),
  S('laguna', 'La laguna', -46, -46, -20, -16, 'pond'),
  S('porton', 'El portón y el estacionamiento', -46, 30, 46, 46, 'gate'),
  S('avenida', 'La avenida de los aromos', -8, 2.5, 8, 30, 'garden'),
  S('campo', 'El parque de la estancia', -46, -46, 46, 46, 'field'),
];
export const sectorAt = (x, z) => SECTORS.find((s) => x >= s.x0 && x <= s.x1 && z >= s.z0 && z <= s.z1) ?? null;

// ------------------------------------------------------------------ walls
// Segments [x0, z0, x1, z1, kind]: 'house' and 'chapel' are full walls (the
// '-glass' kinds a window in them), 'fence' a wooden rail fence, 'hedge' a
// clipped hedge; openings are gaps.
const W = (x0, z0, x1, z1, kind) => [x0, z0, x1, z1, kind];
const chapelSide = (x) => [W(x, 8, x, 11.5, 'chapel'), W(x, 11.5, x, 13.5, 'chapel-glass'), W(x, 13.5, x, 16.5, 'chapel'), W(x, 16.5, x, 18.5, 'chapel-glass'), W(x, 18.5, x, 22, 'chapel')];
export const WALLS = [
  // The chapel: the door in the south front, two windows each side.
  W(-31, 8, -21, 8, 'chapel'), ...chapelSide(-31), ...chapelSide(-21), W(-31, 22, -27, 22, 'chapel'), W(-25, 22, -21, 22, 'chapel'),
  // The main house: three rooms, each with its door onto the galería.
  W(-16, -34, -13, -34, 'house'), W(-13, -34, -9, -34, 'house-glass'), W(-9, -34, -3, -34, 'house'), W(-3, -34, 1, -34, 'house-glass'), W(1, -34, 8, -34, 'house'), W(8, -34, 12, -34, 'house-glass'), W(12, -34, 16, -34, 'house'),
  W(-16, -34, -16, -22, 'house'), W(16, -34, 16, -22, 'house'), W(-6, -34, -6, -22, 'house'), W(4, -34, 4, -22, 'house'),
  W(-16, -22, -14.5, -22, 'house'), W(-14.5, -22, -12.5, -22, 'house-glass'), W(-12.5, -22, -11.7, -22, 'house'), W(-10.3, -22, -6, -22, 'house'),
  W(-6, -22, -1.7, -22, 'house'), W(-0.3, -22, 1, -22, 'house'), W(1, -22, 3, -22, 'house-glass'), W(3, -22, 4, -22, 'house'),
  W(4, -22, 9.3, -22, 'house'), W(10.7, -22, 12.5, -22, 'house'), W(12.5, -22, 14.5, -22, 'house-glass'), W(14.5, -22, 16, -22, 'house'),
  // The front fence with the gate in the middle.
  W(-46, 30, -3.6, 30, 'fence'), W(3.6, 30, 46, 30, 'fence'),
  // The corral next to the stables (open to the west).
  W(31, -27, 40, -27, 'fence'), W(40, -34.8, 40, -27, 'fence'), W(31, -34.8, 31, -31, 'fence'),
  // The rose garden: two clipped hedges.
  W(-16.5, 8, -10.5, 8, 'hedge'), W(-16.5, 12.8, -10.5, 12.8, 'hedge'),
];
export const DOORS = [
  { x: -11, z: -22, w: 1.4, label: 'NOVIA' },
  { x: -1, z: -22, w: 1.4, label: 'NOVIO' },
  { x: 10, z: -22, w: 1.4, label: 'COCINA' },
  { x: -26, z: 22, w: 2, label: 'CAPILLA' },
];

// ------------------------------------------------------------------ furniture
// { type, x, z, w, d, rot } — w along x, d along z before `rot` quarter turns
// (rot 0: the front of a chair or a bench faces +z). `solid: false` for
// things you can walk over or through.
const F = (type, x, z, w, d, rot = 0, extra = {}) => ({ type, x, z, w, d, rot, ...extra });
const tree = (x, z, kind = 'aromo') => F('tree', x, z, 0.8, 0.8, 0, { kind });
// The two long tables and their rows of chairs, one every 0.56 m.
export const TABLES = [{ x: 0, z: -9 }, { x: 0, z: -3 }];
export const TABLE_LEN = 16;
const CHAIR_ROW = 15.68;
export const chairX = (i) => -CHAIR_ROW / 2 + 0.28 + i * (CHAIR_ROW / Math.round(CHAIR_ROW / 0.56));
// Round tables in the tent: the table and six chairs around it.
export const ROUND = [{ x: 21.6, z: 9 }, { x: 27, z: 9.2 }, { x: 32.4, z: 9.2 }, { x: 37.8, z: 9 }];
export const SEAT_R = 0.98; // chairs stand at 1.2 from the centre; you sit on the front half
export const roundSeat = (t, k) => ({ x: t.x + Math.sin(k * Math.PI / 3) * SEAT_R, z: t.z + Math.cos(k * Math.PI / 3) * SEAT_R, heading: k * Math.PI / 3 + Math.PI });
const poles = [];
for (const x of [16, 21.2, 26.4, 31.6, 36.8, 42]) poles.push(F('pole', x, TENT.z0, 0.18, 0.18), F('pole', x, TENT.z1, 0.18, 0.18));
for (const z of [-12, -6, 0, 6]) poles.push(F('pole', TENT.x0, z, 0.18, 0.18), F('pole', TENT.x1, z, 0.18, 0.18));
export const FURNITURE = [
  // The gate and the parking lot.
  F('gatepost', -3.6, 30, 0.5, 0.5), F('gatepost', 3.6, 30, 0.5, 0.5), F('arch', 0, 30, 7.2, 0.3, 0, { solid: false }),
  F('car', -8.2, 35.4, 1.9, 4.4, 0, { color: '#2a3a5a', open: true }), F('vintage', -14.6, 38.2, 2.0, 4.8, 0), F('van', -20.6, 38, 2.2, 5.2, 0),
  ...[9.4, 12.4, 15.4, 18.4, 21.4, 24.4].map((x, i) => F('car', x, 38.6, 1.9, 4.4, 2, { color: ['#c8302a', '#e8e8e8', '#141414', '#9aa4ac', '#3a6a4a', '#f0c020'][i] })),
  ...[10.9, 16.9, 22.9].map((x, i) => F('car', x, 33.8, 1.9, 4.4, 0, { color: ['#2a6ac8', '#5a3a2a', '#d8d8d0'][i] })),
  F('sign', 2.2, 28.8, 1.2, 0.2, 0, { label: 'BODA · VALENTINA Y JOAQUÍN' }),
  // The avenue of aromos from the gate to the gardens.
  ...[26, 20, 14, 8].flatMap((z) => [tree(-4.6, z), tree(4.6, z)]),
  // The chapel: pews facing the altar, flowers, the bell rope.
  F('altar', -26, 9.2, 2.4, 0.8), F('flowerstand', -28.4, 9.5, 0.5, 0.5), F('flowerstand', -23.6, 9.5, 0.5, 0.5),
  ...[14.2, 15.7, 17.2, 18.7, 20.2].flatMap((z) => [F('pew', -28.6, z, 3.4, 0.55, 2), F('pew', -23.4, z, 3.4, 0.55, 2)]),
  F('carpet', -26, 15, 1.4, 12, 0, { solid: false }),
  // The flowerbed by the chapel where the page boys dig.
  F('flowerbed', -19.4, 26.6, 3.2, 1.4), F('spade', -18.2, 25.6, 0.3, 0.3, 0, { solid: false }),
  // The rose garden: the arch of flowers and the florist's buckets.
  F('arch-flowers', -9.6, 10.4, 1.8, 0.3, 1), F('buckets', -16.2, 10.2, 0.6, 0.9),
  // The old ombú and the photographer's tripod.
  F('ombu', 10, 14, 2.6, 2.6), F('tripod', 13.2, 16.4, 0.4, 0.4, 0, { solid: false }),
  // The gardens: two long tables, their chairs, the string lights; the asado.
  ...TABLES.flatMap((t) => [F('longtable', t.x, t.z, TABLE_LEN, 1.0), F('chairs', t.x, t.z - 1.0, CHAIR_ROW, 0.5, 0), F('chairs', t.x, t.z + 1.0, CHAIR_ROW, 0.5, 2)]),
  F('lightpole', -9.6, -13.2, 0.18, 0.18), F('lightpole', 9.6, -13.2, 0.18, 0.18), F('lightpole', -9.6, 1.8, 0.18, 0.18), F('lightpole', 9.6, 1.8, 0.18, 0.18),
  F('lights', 0, -5.7, 19.2, 15, 0, { solid: false }),
  F('parrilla', -15, -6, 2.4, 1.0), F('woodpile', -17.6, -6.2, 0.6, 1.4), F('sidetable', -12.4, -6.4, 1.2, 0.7),
  // The galería: the grandmother's rocking chair and her mate table.
  F('rocker', -13.6, -20.4, 0.7, 0.8), F('sidetable', -12.4, -20.7, 0.5, 0.5),
  ...[-15.6, -12.4, -8.4, -4.6, 2.4, 6.6, 12.8, 15.6].map((x) => F('column', x, -18.7, 0.3, 0.3)),
  // The bride's room.
  F('bed', -14.6, -31.0, 1.6, 2.1), F('vanity', -9.6, -33.5, 1.4, 0.5), F('mannequin', -7.0, -31.2, 0.6, 0.6), F('wardrobe', -6.55, -26.6, 1.6, 0.6, 3), F('rug', -11, -28.6, 3, 2.4, 0, { solid: false }),
  // The groom's room: the ironing board, the bed with the mariachi hats.
  F('bed', 2.4, -31.2, 1.6, 2.1), F('ironing', -2.4, -30.0, 1.3, 0.4), F('wardrobe', -5.45, -27.6, 1.6, 0.6, 1), F('mirror', 0.8, -33.75, 0.8, 0.1), F('rug', -1, -28.4, 2.6, 2.2, 0, { solid: false }),
  // The kitchen: counters, the oven, the big work table with the cake.
  F('kitchen', 10, -33.5, 10, 0.6), F('oven', 15.4, -29.6, 0.8, 1.2), F('worktable', 10, -29.6, 3.2, 1.2), F('crates', 5.0, -32.6, 0.9, 0.9),
  // The tent: poles, the stage, the dance floor, the bar, the head table, round tables.
  ...poles,
  F('stage', 29, -15.5, 14, 4.6), F('dancefloor', 29, -5.5, 15, 8.6, 0, { solid: false }), F('speaker', 22.6, -12.6, 0.6, 0.6), F('speaker', 35.4, -12.6, 0.6, 0.6),
  F('bar', 38.6, -4, 0.9, 8), F('backbar', 41.4, -4, 0.5, 7),
  F('headtable', 29, 3.0, 6, 0.9), F('mic', 30.2, 1.0, 0.3, 0.3, 0, { solid: false }),
  ...ROUND.map((t) => F('roundtable', t.x, t.z, 3.2, 3.2)),
  F('tentlights', 29, -3, 26, 30, 0, { solid: false }),
  // The stables, the horse at the hitching post, the corral, the hay.
  F('barn', 29, -40, 16, 10), F('hitch', 25.4, -31.6, 2.8, 0.16), F('horse', 25.4, -30.6, 0.7, 2.3, 1), F('horse', 35.6, -31.0, 0.7, 2.3, 1, { color: '#e8e0d0' }),
  F('hay', 19.8, -33.2, 1.2, 0.8), F('hay', 19.8, -31.8, 1.2, 0.8), F('trough', 38.2, -28.6, 1.4, 0.5),
  // The pond: the jetty, the bench at its end, a rowing boat, reeds.
  F('jetty', (JETTY.x0 + JETTY.x1) / 2, (JETTY.z0 + JETTY.z1) / 2, JETTY.x1 - JETTY.x0, JETTY.z1 - JETTY.z0, 0, { solid: false }),
  F('bench', -32.5, -30, 1.4, 0.5, 3), F('boat', -35, -26.4, 1.2, 3, 0, { solid: false }), F('reeds', -26, -23.4, 2, 1, 0, { solid: false }), F('reeds', -38, -36, 2.4, 1.2, 0, { solid: false }),
  // Trees around the park.
  tree(-40, 4, 'eucalipto'), tree(-38, 20, 'eucalipto'), tree(-42, 34, 'eucalipto'), tree(40, 22, 'eucalipto'), tree(44, -2, 'eucalipto'), tree(-12, 36, 'aromo'),
  tree(-36, -10, 'sauce'), tree(-19, -40, 'eucalipto'), tree(14, -42, 'eucalipto'), tree(44, -38, 'eucalipto'), tree(31, 26, 'aromo'), tree(-30, 28, 'aromo'),
];

// ------------------------------------------------------------------ scenes
const L = (skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras = [], extra = {}) =>
  ({ skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras, ...extra });
const BRIDE = L('#f0d6c0', 'young', 'f', 'bun', '#5a3420', 'dress', '#fbf8f2', null, null, ['earrings'], { seed: 41 });
const GROOM = L('#c99468', 'young', 'm', 'short', '#1a1210', 'suit', '#1e2430', 'pants', '#1e2430', ['beard'], { seed: 21 });

const PLACES = {
  porton: { spot: { x: 0, z: 35.2 }, npc: { x: 1.9, z: 32.2, heading: 2.6 }, pose: 'read', mood: 'worried', look: L('#b9825c', 'old', 'm', 'cap', '#c8c8c8', 'shirt', '#c8b890', 'pants', '#4a3a2a', ['mustache', 'scarf'], { seed: 11 }),
    extras: [{ x: -5.6, z: 34.0, heading: 1.8, pose: 'phone', mood: 'scared', look: L('#a8724e', 'young', 'm', 'short', '#120d0b', 'uniform', '#1a1a1a', 'pants', '#1a1a1a', [], { seed: 12 }) }] },
  capilla: { spot: { x: -26, z: 12.6 }, npc: { x: -26, z: 10.6, heading: 0 }, pose: 'read', mood: 'smile', look: L('#f0d6c0', 'old', 'm', 'bald', '#d8d8d8', 'coat', '#141414', 'pants', '#141414', ['glasses'], { seed: 31 }),
    extras: [{ x: -24.5, z: 11.4, heading: -2.0, pose: 'arms', mood: 'scared', look: GROOM }] },
  ninos: { spot: { x: -16.6, z: 22.8 }, npc: { x: -17.0, z: 25.0, heading: -2.4 }, pose: 'arms', mood: 'furious', look: L('#8d5a3c', 'adult', 'f', 'curly', '#120d0b', 'dress', '#2a8a8a', null, null, ['earrings'], { seed: 51 }),
    extras: [{ x: -19.4, z: 25.2, heading: 0, pose: 'crouch', mood: 'laugh', child: true, look: L('#8d5a3c', 'child', 'm', 'short', '#120d0b', 'suit', '#f4f0ea', 'shorts', '#f4f0ea', [], { seed: 52 }) }] },
  novia: { spot: { x: -11, z: -25.6 }, npc: { x: -11.0, z: -29.2, heading: 0 }, pose: 'arms', mood: 'worried', look: BRIDE,
    extras: [{ x: -11.0, z: -30.2, heading: 0, pose: 'crouch', mood: 'scared', look: L('#c48f69', 'young', 'f', 'long', '#2a1a12', 'dress', '#b8a0d8', null, null, ['earrings'], { seed: 42 }) }] },
  abuela: { spot: { x: -13.6, z: -17.2 }, npc: { x: -13.6, z: -20.04, heading: 0, seat: true }, pose: 'sit', mood: 'angry', look: L('#f0d6c0', 'elderly', 'f', 'bun', '#f0f0f0', 'sweater', '#3a3a5a', 'pants', '#2a2a30', ['glasses', 'earrings'], { seed: 61 }) },
  novio: { spot: { x: -1, z: -25.6 }, npc: { x: -2.4, z: -29.2, heading: Math.PI }, pose: 'carry', mood: 'pain', look: L('#c48f69', 'old', 'f', 'bob', '#2a1a12', 'dress', '#d8a030', null, null, ['earrings'], { seed: 71 }),
    extras: [{ x: 0.6, z: -28.4, heading: -2.4, pose: 'arms', mood: 'laugh', look: L('#e8c0a0', 'adult', 'f', 'ponytail', '#3a2416', 'dress', '#2a4a8a', null, null, ['glasses'], { seed: 72 }) }] },
  cocina: { spot: { x: 10, z: -25.6 }, npc: { x: 8.0, z: -28.2, heading: 2.5 }, pose: 'cook', mood: 'terror', look: L('#a8724e', 'adult', 'm', 'short', '#120d0b', 'apron', '#f4f0ea', 'pants', '#2a2a2a', ['mustache'], { seed: 81 }),
    extras: [{ x: 12.2, z: -28.2, heading: -2.4, pose: 'arms', mood: 'worried', look: L('#a8724e', 'young', 'f', 'braids', '#120d0b', 'apron', '#f0c8d8', 'pants', '#2a2a2a', [], { seed: 82 }) }] },
  asado: { spot: { x: -15, z: -2.4 }, npc: { x: -15, z: -4.85, heading: Math.PI }, pose: 'cook', mood: 'angry', look: L('#c48f69', 'old', 'm', 'cap', '#9a9a9a', 'shirt', '#e8e4dc', 'pants', '#3a3a3a', ['mustache', 'scarf'], { seed: 91 }) },
  mesa: { spot: { x: 11.4, z: -3.6 }, npc: { x: 9.3, z: -3.0, heading: -Math.PI / 2 }, pose: 'point', mood: 'furious', look: L('#c99468', 'old', 'f', 'curly', '#7a3a1e', 'dress', '#2a7a5a', null, null, ['earrings', 'glasses'], { seed: 101 }),
    extras: [{ x: 9.7, z: -5.3, heading: -2.6, pose: 'arms', mood: 'sleepy', look: L('#c99468', 'old', 'm', 'bald', '#5a4a3a', 'suit', '#5a5a62', 'pants', '#3a3a42', ['mustache'], { seed: 102 }) }] },
  ex: { spot: { x: -12.2, z: 15.4 }, npc: { x: -12.6, z: 10.4, heading: 0.4 }, pose: 'stand', mood: 'smile', look: L('#c99468', 'young', 'f', 'long', '#120d0b', 'dress', '#c81e2a', null, null, ['earrings'], { seed: 111 }),
    extras: [{ x: -14.9, z: 10.2, heading: 1.0, pose: 'carry', mood: 'worried', look: L('#b9825c', 'adult', 'f', 'braids', '#2a1a12', 'apron', '#5a8a4a', 'jeans', '#24304a', [], { seed: 112 }) }] },
  planner: { spot: { x: 12.2, z: 7.6 }, npc: { x: 14.4, z: 6.0, heading: -2.2 }, pose: 'phone', mood: 'worried', look: L('#e2b896', 'adult', 'f', 'ponytail', '#2a1a12', 'suit', '#141418', 'pants', '#141418', ['headphones'], { seed: 121 }) },
  banda: { spot: { x: 29.6, z: -9.8 }, npc: { x: 27.6, z: -14.6, heading: 0.3, y: STAGE.top }, pose: 'arms', mood: 'angry', look: L('#8d5a3c', 'adult', 'm', 'short', '#2a2a2a', 'shirt', '#f0c020', 'pants', '#f4f0ea', ['hat'], { seed: 131 }),
    extras: [
      { x: 31.6, z: -11.8, heading: -2.6, pose: 'point', mood: 'furious', look: L('#c48f69', 'adult', 'm', 'short', '#120d0b', 'suit', '#141418', 'pants', '#141418', ['mustache', 'hat'], { seed: 132 }) },
      { x: 30.6, z: -14.4, heading: 0, pose: 'phone', mood: 'laugh', y: STAGE.top, look: L('#a8724e', 'adult', 'f', 'long', '#120d0b', 'dress', '#e0408a', null, null, ['earrings'], { seed: 133 }) },
    ] },
  pista: { spot: { x: 24, z: -2.8 }, npc: { x: 24.0, z: -5.4, heading: 0 }, pose: 'dance', mood: 'pain', look: L('#e2b896', 'old', 'm', 'short', '#d8d8d8', 'suit', '#2a2a2a', 'pants', '#2a2a2a', ['mustache', 'glasses'], { seed: 141 }) },
  barra: { spot: { x: 35.4, z: -4.8 }, npc: { x: 39.9, z: -4.6, heading: -Math.PI / 2 }, pose: 'cook', mood: 'smile', look: L('#c99468', 'adult', 'm', 'buzz', '#120d0b', 'shirt', '#141418', 'pants', '#141418', ['beard'], { seed: 151 }),
    extras: [{ x: 37.2, z: -2.6, heading: Math.PI / 2, pose: 'stand', mood: 'sad', look: L('#f0d6c0', 'adult', 'f', 'bob', '#3a2416', 'dress', '#1a1a2a', null, null, ['earrings'], { seed: 72 }) }] },
  establo: { spot: { x: 24.4, z: -26.6 }, npc: { x: 23.4, z: -29.4, heading: 1.2 }, pose: 'arms', mood: 'worried', look: L('#a8724e', 'adult', 'm', 'short', '#120d0b', 'shirt', '#3a5a8a', 'pants', '#5a4a3a', ['scarf', 'hat'], { seed: 161 }) },
  fotos: { spot: { x: 13.6, z: 18.6 }, npc: { x: 12.4, z: 16.6, heading: 0.6 }, pose: 'phone', mood: 'terror', look: L('#e8c0a0', 'young', 'm', 'curly', '#2a1a12', 'jacket', '#3a3a3a', 'jeans', '#1f2840', ['backpack', 'glasses'], { seed: 171 }) },
  muelle: { spot: { x: -28.6, z: -30 }, npc: { x: -32.85, z: -30, heading: -Math.PI / 2, seat: true }, pose: 'sit', mood: 'sad', look: L('#e2b896', 'young', 'm', 'short', '#3a2416', 'shirt', '#f4f0ea', 'pants', '#1e2430', ['beard'], { seed: 181 }) },
  brindis: { spot: { x: 29, z: 0.9 }, npc: { x: 28.3, z: 4.2, heading: Math.PI }, pose: 'wave', mood: 'love', look: BRIDE,
    extras: [{ x: 29.7, z: 4.2, heading: Math.PI, pose: 'arms', mood: 'smile', look: GROOM }] },
};

export const SCENES = STORY.map((story) => ({ ...story, ...PLACES[story.id] }));
export const SCENE_IDS = SCENES.map((s) => s.id);
export const sceneById = (id) => SCENES.find((s) => s.id === id);
export const SPOT_RADIUS = 1.1;

// ------------------------------------------------------------------ guests
// Seventeen guests who stay put and talk to you (E): see invitados.mjs.
// Seated at the long tables, at the round tables of the tent and on a pew;
// dancing on the floor; at the gate, the galería, the pond, the corral.
// Whoever sits does so at the front of the seat (chair centre ± 1.0; 0.25 nearer the table, past half its depth, so skirts clear the seat).
const T = (i, row) => { const t = TABLES[i]; return row < 0 ? { z: t.z - 0.75, heading: 0 } : { z: t.z + 0.75, heading: Math.PI }; };
const atTable = (i, row, chair, mood) => ({ x: chairX(chair), ...T(i, row), pose: 'sit', seat: true, mood });
// `out` moves a guest that far further from the table centre (whose hands would touch the top).
const atRound = (t, k, mood, out = 0) => { const s = roundSeat(ROUND[t], k), a = k * Math.PI / 3; s.x += Math.sin(a) * out; s.z += Math.cos(a) * out; return { x: s.x, z: s.z, heading: s.heading, pose: 'sit', seat: true, mood }; };
export const CROWD = [
  atTable(0, -1, 3, 'tipsy'), atTable(0, 1, 5, 'sad'), atTable(1, -1, 7, 'worried'), atTable(1, 1, 12, 'laugh'),
  { x: -28.6, z: 13.93, heading: Math.PI, pose: 'sit', seat: true, mood: 'neutral' },
  { x: 5.6, z: 41.6, heading: Math.PI, pose: 'phone', mood: 'sleepy' },
  { x: 6.8, z: -20.0, heading: 0.4, pose: 'arms', mood: 'angry' },
  { x: 26.2, z: -7.4, heading: 0.5, pose: 'dance', mood: 'laugh' }, { x: 31.8, z: -3.2, heading: -2.4, pose: 'dance', mood: 'sad' },
  { x: 33.6, z: -7.6, heading: 2.8, pose: 'dance', mood: 'smitten' }, { x: 28.8, z: -5.0, heading: 1.2, pose: 'dance', mood: 'love' },
  atRound(0, 1, 'smile'), atRound(2, 5, 'worried', 0.04),
  { x: -22.6, z: -24.6, heading: -1.9, pose: 'fish', mood: 'sleepy' },
  { x: -10.0, z: 16.4, heading: -2.6, pose: 'phone', mood: 'scared' },
  { x: 28.4, z: -25.6, heading: Math.PI, pose: 'arms', mood: 'scared' },
  { x: -2.6, z: 33.4, heading: 2.4, pose: 'carry', mood: 'worried' },
];

// More people who make the party: they don't stop to talk.
export const FILLERS = [
  atTable(0, -1, 10, 'laugh'), atTable(0, -1, 19, 'smile'), atTable(0, 1, 14, 'smile'), atTable(0, 1, 23, 'tipsy'),
  atTable(1, -1, 16, 'laugh'), atTable(1, -1, 25, 'smile'), atTable(1, 1, 2, 'tipsy'), atTable(1, 1, 21, 'smile'),
  atRound(1, 0, 'smile'), atRound(1, 3, 'laugh'), atRound(3, 2, 'tipsy'), atRound(3, 4, 'smile'),
  { x: 23.8, z: -8.6, heading: 2.2, pose: 'dance', mood: 'laugh' }, { x: 34.8, z: -5.0, heading: -1.6, pose: 'dance', mood: 'smile' },
  { x: 27.4, z: -3.0, heading: -0.6, pose: 'dance', mood: 'tipsy' }, { x: 30.6, z: -7.8, heading: 2.6, pose: 'dance', mood: 'love' },
  { x: 34.8, z: -11.4, heading: -2.8, pose: 'guitar', mood: 'smile', mariachi: true }, { x: 33.4, z: -11.0, heading: -2.4, pose: 'guitar', mood: 'laugh', mariachi: true },
  { x: -24.4, z: 16.93, heading: Math.PI, pose: 'sit', seat: true, mood: 'sleepy' },
];

// Waiters with trays and two children who run up and down the avenue.
const P = (skin, age, body, hair, hairColor, top, topColor, bottom, bottomColor, extras = [], seed = 0) => L(skin, age, body, hair, hairColor, top, topColor, bottom, bottomColor, extras, { seed });
export const WALKERS = [
  { look: P('#c48f69', 'young', 'm', 'short', '#120d0b', 'shirt', '#f4f0ea', 'pants', '#141418', [], 901), path: [[-10.6, -12.2], [10.8, -12.2], [10.8, 0.8], [-10.6, 0.8]], speed: 1.2, pause: 1.5, tray: true },
  { look: P('#e2b896', 'young', 'f', 'ponytail', '#3a2416', 'shirt', '#f4f0ea', 'pants', '#141418', [], 902), path: [[19.2, -11], [19.2, 6.2], [35.6, 6.2], [19.2, 6.2]], speed: 1.1, pause: 2, tray: true },
  { look: P('#f0d6c0', 'child', 'f', 'braids', '#7a3a1e', 'dress', '#f0c040', null, null, [], 903), path: [[-2.2, 26], [2.2, 26], [2.2, 4], [-2.2, 4]], speed: 2.2 },
  { look: P('#8d5a3c', 'child', 'm', 'short', '#120d0b', 'tshirt', '#2a6ac8', 'shorts', '#2a2a30', [], 904), path: [[2.2, 4], [-2.2, 4], [-2.2, 26], [2.2, 26]], speed: 2.4, delay: 6 },
];

// Short lines people say as you walk past (shown as bubbles near them).
export const CHATTER = [
  '¡Vivan los novios!', '¿Dónde está el padrino?', '¡Qué linda la novia!', '¿Ya sirvieron el vacío?', '¿Quién eres tú?',
  'Dicen que vino la ex…', 'Esa torta tiene otro nombre, ¿no?', '¡Otra de cumbia!', 'Mañana no me levanto.', '¿Alguien vio los anillos?',
  '¡Que se besen!', 'El caballo se comió el ramo.', 'Yo me casé en esta misma capilla.', '¿A qué hora es el brindis?', 'Esta música es de mi época.',
];

// The family's WhatsApp group, a new message every minute or so.
export const ANNOUNCEMENTS = [
  'Mariela (organización): la ceremonia empieza 17:30 en punto. Bueno, 17:45.',
  'Tía Gloria: NADIE cambie de lugar en las mesas. Lo digo por algunos.',
  'Doña Lupita: llegó el mariachi. Sorpresa. 🎺',
  'Camila: ¿alguien tiene hilo blanco? Urgente. No pregunten.',
  'Wilmer (valet): el auto azul con el motor encendido, ¿de quién es?',
  'Don Horacio: el vino de la mesa 4 no es para llevar.',
  'Chef Ramiro: torta en camino. Con el nombre correcto, esperamos.',
  'Ceferino: Lucero está bien. El ramo no.',
  'Facundo: (sin conexión desde las 17:02)',
];

// ------------------------------------------------------------------ colliders
const box = (x0, z0, x1, z1) => ({ x0: Math.min(x0, x1), x1: Math.max(x0, x1), z0: Math.min(z0, z1), z1: Math.max(z0, z1) });

export function footprint(item) {
  const turned = item.rot === 1 || item.rot === 3;
  const w = turned ? item.d : item.w, d = turned ? item.w : item.d;
  return box(item.x - w / 2, item.z - d / 2, item.x + w / 2, item.z + d / 2);
}
export function wallBox([x0, z0, x1, z1, kind]) {
  const h = (kind === 'fence' ? 0.12 : kind === 'hedge' ? 0.45 : WALL / 2);
  return x0 === x1 ? box(x0 - h, z0, x1 + h, z1) : box(x0, z0 - h, x1, z1 + h);
}

// The pond is water: strips across its ellipse, cut by the jetty.
export function pondBoxes() {
  const out = [];
  const step = 0.8;
  const cuts = [POND.z - POND.rz, JETTY.z0, JETTY.z1, POND.z + POND.rz];
  for (let i = 0; i < 3; i++) {
    for (let z = cuts[i]; z < cuts[i + 1] - 1e-6; z += step) {
      const z1 = Math.min(cuts[i + 1], z + step);
      const zm = Math.max(z, Math.min(z1, POND.z));
      const k = 1 - ((zm - POND.z) / POND.rz) ** 2;
      if (k <= 0) continue;
      const hw = POND.rx * Math.sqrt(k);
      const b = { ...box(POND.x - hw, z, POND.x + hw, z1), water: true };
      // The strip the jetty crosses keeps only its west end, past the bench.
      if (i === 1) { if (POND.x - hw < JETTY.x0) out.push({ ...box(POND.x - hw, z, JETTY.x0, z1), water: true }); continue; }
      out.push(b);
    }
  }
  return out;
}

const NOT_SOLID = new Set(['arch', 'carpet', 'spade', 'tripod', 'lights', 'rug', 'dancefloor', 'mic', 'tentlights', 'jetty', 'boat', 'reeds', 'sign']);
const TALL = new Set(['tree', 'ombu', 'wardrobe', 'barn', 'van', 'vintage', 'gatepost', 'kitchen', 'backbar', 'column', 'mannequin', 'speaker', 'pole', 'lightpole']);
// How high you stand after jumping onto something (Space).
const TOPS = { pew: 0.45, chairs: 0.45, bench: 0.45, bed: 0.55, longtable: 0.76, roundtable: 0.76, headtable: 0.76, worktable: 0.9, sidetable: 0.6, stage: 0.6, hay: 0.8, flowerbed: 0.3, car: 1.45, parrilla: 0.95, woodpile: 0.6, crates: 0.9, rocker: 0.45, trough: 0.5, altar: 1.0, bar: 1.1, hitch: 1.0, buckets: 0.5, ironing: 0.9, vanity: 0.8, oven: 0.9 };
export function topOf(item) { return TOPS[item.type] ?? null; }

export function cameraBlockers() {
  return [...WALLS.filter((w) => w[4] === 'house' || w[4] === 'chapel').map(wallBox), ...FURNITURE.filter((f) => TALL.has(f.type)).map(footprint)];
}

function scenePeople() {
  return SCENES.flatMap((s) => [s.npc, ...(s.extras ?? [])]).filter((p) => !p.lying);
}
export function solidsFor() {
  const walls = WALLS.map((w) => ({ ...wallBox(w), ...(w[4] === 'fence' ? { top: 1.1 } : {}) }));
  const things = FURNITURE.filter((f) => f.solid !== false && !NOT_SOLID.has(f.type)).map((f) => ({ ...footprint(f), ...(topOf(f) != null || f.top != null ? { top: f.top ?? topOf(f) } : {}), prop: f.type }));
  const people = scenePeople().map((p) => box(p.x - 0.3, p.z - 0.3, p.x + 0.3, p.z + 0.3));
  return [...walls, ...things, ...people, ...pondBoxes()];
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
