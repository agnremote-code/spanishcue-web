// Último crucero · the Albatros as plain data. One deck, bow to the north
// (-z) and stern to the south (+z): the bow with its mast and bell, the
// bridge with the starboard wing, the radio cabin, the engine room, the
// corridor of the cabins (12, 15 and 21 are open), the kitchen and the
// infirmary, the ballroom with the bar, the stage and the dance floor, the
// stern deck, and the two lifeboat decks that run along both sides. Units
// are metres: x grows to starboard, z grows towards the stern, y is up; a
// heading of 0 faces +z (the stern). The renderer (barco3d.ts, World3D.tsx)
// only draws what is here, so movement, the circles and «nobody inside an
// object» are tested without WebGL.
import { STORY } from './story.mjs';

export const WALL = 0.25;
export const HULL = { x0: -12, x1: 12, z0: -48, z1: 58, bow: -64 };
export const BOUNDS = { minX: -12.4, maxX: 12.4, minZ: -64.4, maxZ: 58.4 };
// The bow narrows from the full beam at z = -48 to a point at z = -64.
export const halfBeam = (z) => (z >= HULL.z0 ? HULL.x1 : z <= HULL.bow ? 0 : HULL.x1 * Math.sqrt((z - HULL.bow) / (HULL.z0 - HULL.bow)));

// You come out of the ballroom onto the stern deck at eight in the evening.
export const SPAWN = { x: 0, z: 44, heading: Math.PI };

// ------------------------------------------------------------------ rooms
// The superstructure covers x -7..7 from the bridge to the ballroom; the
// bridge is wider. Every room has a ceiling; the decks are open to the storm.
export const SUPER = { x0: -7, x1: 7, z0: -40, z1: 38 };
export const BRIDGE = { x0: -8.5, x1: 8.5, z0: -48, z1: -40 };
export const SALON = { x0: -7, x1: 7, z0: 14, z1: 38 };
export const ENGINE = { x0: -7, x1: 7, z0: -34, z1: -20 };
export const CORRIDOR = { x0: -1.6, x1: 1.6, z0: -20, z1: 14 };
export const STAGE = { x0: 1.8, x1: 6.8, z0: 14.2, z1: 17.4, top: 0.5 };
export const DANCE = { x0: -2.4, x1: 2.4, z0: 22, z1: 32 };
const CABIN_LEN = 22 / 6;
// Cabins along the corridor, fore to aft: starboard 22..12, port 21..11.
export const CABINS = [];
for (let i = 0; i < 6; i++) {
  const z0 = -20 + i * CABIN_LEN, z1 = z0 + CABIN_LEN;
  CABINS.push({ n: 22 - i * 2, side: 1, x0: 1.6, x1: 7, z0, z1 }, { n: 21 - i * 2, side: -1, x0: -7, x1: -1.6, z0, z1 });
}
export const cabin = (n) => CABINS.find((c) => c.n === n);
export const OPEN_CABINS = [12, 15, 21];

const inside = (r, x, z) => x > r.x0 && x < r.x1 && z > r.z0 && z < r.z1;
// How high the camera may rise: under a ceiling it stays below the beams; on
// deck it can climb, though not far, with this wind.
export function ceilingAt(x, z) {
  if (inside(BRIDGE, x, z)) return 3.2;
  if (inside(SALON, x, z)) return 4.2;
  if (inside(ENGINE, x, z)) return 4.6;
  if (inside(SUPER, x, z)) return 3.1;
  return 9;
}
export const roofed = (x, z) => ceilingAt(x, z) < 8;
// Under a low ceiling the jump is short (no head through the roof).
export const jumpSpeedFor = (x, z) => (roofed(x, z) && ceilingAt(x, z) < 4 ? 5.4 : 7.6);

// ------------------------------------------------------------------ sectors
const S = (id, name, x0, z0, x1, z1, sound) => ({ id, name, x0, z0, x1, z1, sound });
export const SECTORS = [
  S('puente', 'El puente de mando', BRIDGE.x0, BRIDGE.z0, BRIDGE.x1, BRIDGE.z1, 'bridge'),
  S('aleron', 'El alerón de estribor', 8.5, -48, 12.4, -40, 'deck'),
  S('radio', 'La cabina de radio', -7, -40, -1.2, -34, 'radio'),
  S('maquinas', 'La sala de máquinas', ENGINE.x0, ENGINE.z0, ENGINE.x1, ENGINE.z1, 'engine'),
  S('cocina', 'La cocina', -7, 2, -1.6, 14, 'kitchen'),
  S('enfermeria', 'La enfermería', 1.6, 2, 7, 14, 'room'),
  ...OPEN_CABINS.map((n) => { const c = cabin(n); return S(`camarote-${n}`, `El camarote ${n}`, c.x0, c.z0, c.x1, c.z1, 'room'); }),
  S('pasillo', 'El pasillo de los camarotes', -7, -40, 7, 14, 'corridor'),
  S('salon', 'El salón de baile', SALON.x0, SALON.z0, SALON.x1, SALON.z1, 'salon'),
  S('popa', 'La cubierta de popa', -12.4, 38, 12.4, 58.4, 'deck'),
  S('proa', 'La proa', -12.4, -64.4, 12.4, -48, 'deck'),
  S('babor', 'La cubierta de botes, babor', -12.4, -48, -7, 38, 'deck'),
  S('estribor', 'La cubierta de botes, estribor', 7, -48, 12.4, 38, 'deck'),
];
export const sectorAt = (x, z) => SECTORS.find((s) => x >= s.x0 && x <= s.x1 && z >= s.z0 && z <= s.z1) ?? null;

// ------------------------------------------------------------------ walls
// Segments [x0, z0, x1, z1, kind]: 'wall' a full wall, 'glass' a wall with
// windows, 'rail' the ship's rail (too high to climb in this wind), 'door'
// a closed cabin door (drawn as a door, solid as a wall). Gaps are openings.
const W = (x0, z0, x1, z1, kind = 'wall') => [x0, z0, x1, z1, kind];
// A wall along x = `x` from z0 to z1 with openings [z, width].
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
// Cabin doors on the corridor: the three open cabins have a gap, the rest a closed door.
export const CABIN_DOOR = { 12: 0.6, 15: -6.0, 21: -17.2 };
function cabinWalls() {
  const out = [];
  for (const c of CABINS) {
    const open = OPEN_CABINS.includes(c.n);
    const doorZ = open ? CABIN_DOOR[c.n] : (c.z0 + c.z1) / 2;
    const xc = c.side > 0 ? c.x0 : c.x1;
    if (open) out.push(...alongZ(xc, c.z0, c.z1, 'wall', [[doorZ, 1.0]]));
    else out.push(...alongZ(xc, c.z0, doorZ - 0.5, 'wall'), W(xc, doorZ - 0.5, xc, doorZ + 0.5, 'door'), ...alongZ(xc, doorZ + 0.5, c.z1, 'wall'));
    // Every cabin is closed at its fore end; the last one aft has the kitchen or the infirmary behind it.
    out.push(W(c.x0, c.z0, c.x1, c.z0, 'wall'));
  }
  return out;
}
export const WALLS = [
  // The rail around the deck: both sides, the stern, and the bow (see bowRail()).
  W(-12, -48, -12, 58, 'rail'), W(12, -48, 12, 58, 'rail'), W(-12, 58, 12, 58, 'rail'),
  // The bridge: windows forward, doors to both wings, the door aft to the radio passage.
  W(-8.5, -48, 8.5, -48, 'glass'), ...alongZ(-8.5, -48, -40, 'glass', [[-43.6, 1.2]]), ...alongZ(8.5, -48, -40, 'glass', [[-43.6, 1.2]]),
  ...alongX(-40, -8.5, 8.5, 'wall', [[0, 1.6]]),
  // The radio cabin (port) and the chart room (starboard, closed), with the passage between them.
  ...alongZ(-1.2, -40, -34, 'wall', [[-36.6, 1.0]]), W(1.2, -40, 1.2, -34, 'wall'),
  ...alongZ(-7, -40, -34, 'glass'), ...alongZ(7, -40, -34, 'glass'),
  // The engine room: doors fore and aft in the middle, and one to each lifeboat deck.
  ...alongX(-34, -7, 7, 'wall', [[0, 1.6]]), ...alongX(-20, -7, -1.6, 'wall'), ...alongX(-20, 1.6, 7, 'wall'), W(-1.6, -20, -0.8, -20, 'wall'), W(0.8, -20, 1.6, -20, 'wall'),
  ...alongZ(-7, -34, -20, 'wall', [[-32.6, 1.2]]), ...alongZ(7, -34, -20, 'wall', [[-32.6, 1.2]]),
  // The cabins and their outer walls with portholes.
  ...cabinWalls(), ...alongZ(-7, -20, 2, 'glass'), ...alongZ(7, -20, 2, 'glass'),
  // The kitchen (port) and the infirmary (starboard), each with its door on the corridor.
  W(-7, 2, -1.6, 2, 'wall'), W(1.6, 2, 7, 2, 'wall'),
  ...alongZ(-1.6, 2, 14, 'wall', [[8, 1.4]]), ...alongZ(1.6, 2, 14, 'wall', [[8, 1.4]]),
  ...alongZ(-7, 2, 14, 'wall'), ...alongZ(7, 2, 14, 'wall', [[12.6, 1.2]]),
  // The ballroom: the corridor opens into it; two doors aft, doors to both decks.
  W(-7, 14, -1.6, 14, 'wall'), W(1.6, 14, 7, 14, 'wall'),
  ...alongX(38, -7, 7, 'glass', [[-1.8, 2.0], [1.8, 2.0]]),
  ...alongZ(-7, 14, 38, 'glass', [[27, 1.6], [32.6, 1.0]]), ...alongZ(7, 14, 38, 'glass', [[25.5, 1.6]]),
];
export const DOORS = [
  { x: 0, z: -40, w: 1.6, label: 'PUENTE' }, { x: -1.2, z: -36.6, w: 1.0, label: 'RADIO' },
  { x: 0, z: -34, w: 1.6, label: 'MÁQUINAS' }, { x: 0, z: -20, w: 1.6, label: 'MÁQUINAS' },
  { x: -1.6, z: 8, w: 1.4, label: 'COCINA' }, { x: 1.6, z: 8, w: 1.4, label: 'ENFERMERÍA' },
  ...OPEN_CABINS.map((n) => ({ x: cabin(n).side > 0 ? 1.6 : -1.6, z: CABIN_DOOR[n], w: 1.0, label: String(n) })),
];

// ------------------------------------------------------------------ furniture
// { type, x, z, w, d, rot } — w along x, d along z before `rot` quarter turns
// (rot 0: the front of a chair, a bench or a deck chair faces +z).
const F = (type, x, z, w, d, rot = 0, extra = {}) => ({ type, x, z, w, d, rot, ...extra });
// Round tables of the ballroom: the table and six chairs around it.
export const ROUND = [{ x: 4.6, z: 22.4 }, { x: 4.6, z: 28.6 }, { x: 4.6, z: 34.6 }, { x: -4.4, z: 30.0 }, { x: -4.4, z: 35.0 }];
export const SEAT_R = 0.98;
export const roundSeat = (t, k) => ({ x: t.x + Math.sin(k * Math.PI / 3) * SEAT_R, z: t.z + Math.cos(k * Math.PI / 3) * SEAT_R, heading: k * Math.PI / 3 + Math.PI });
const boats = [-33, -23, -13, -3, 7];
export const FURNITURE = [
  // The bow: the mast with the bell, the winches, the anchor chains.
  F('mast', 0, -61.2, 0.4, 0.4), F('winch', -3.4, -52, 1.2, 1.0), F('winch', 3.4, -52, 1.2, 1.0),
  F('chain', -2.2, -56, 0.5, 6, 0, { solid: false }), F('chain', 2.2, -56, 0.5, 6, 0, { solid: false }),
  // The bridge.
  F('console', 0, -47.3, 10, 0.8), F('wheel', 0, -46.2, 0.5, 0.4), F('chartable', 5.6, -42, 2, 1.2), F('captainchair', -5.6, -42.4, 0.7, 0.7),
  // The radio cabin.
  F('radiodesk', -6.65, -37.9, 0.6, 3.4), F('chair', -5.85, -38, 0.5, 0.5, 3),
  // The engine room.
  F('engine', -4.4, -27, 2.4, 8), F('engine', 4.4, -27, 2.4, 8), F('toolbench', 6.5, -22.2, 0.8, 2.4), F('telegraph', -0.9, -21.2, 0.4, 0.4),
  // Cabin 12 (starboard, the newlyweds): bed, a chair, a wardrobe.
  F('bed', 5.9, -0.6, 1.9, 1.5), F('chair', 5.2, 1.2, 0.5, 0.5, 2), F('wardrobe', 6.5, 1.55, 0.7, 0.5),
  // Cabin 15 (port, the long marriage): bed, wardrobe.
  F('bed', -5.95, -8.1, 1.9, 1.4), F('wardrobe', -2.3, -8.6, 1.0, 0.6),
  // Cabin 21 (port, the letters): bunk, a chair, a small table full of letters.
  F('bed', -6.0, -16.9, 1.8, 1.0), F('chair', -5.8, -18.4, 0.5, 0.5, 1), F('lettertable', -5.6, -19.45, 0.9, 0.6),
  // The corridor: the housekeeper's trolley.
  F('trolley', 1.15, -12.6, 0.55, 1.1),
  // The kitchen.
  F('stove', -6.55, 8, 0.7, 11.2), F('island', -4.8, 6.5, 1.2, 5),
  // The infirmary.
  F('cabinet', 6.7, 4.5, 0.6, 3), F('stretcher', 5.4, 9.6, 2.4, 1.2), F('chair', 3.4, 12.6, 0.5, 0.5, 0), F('desk', 3.0, 3.0, 1.6, 0.7),
  // The ballroom: the bar, the stage with the piano, the round tables, the bingo drum.
  F('bar', -5.4, 21.6, 0.8, 8), F('backbar', -6.75, 22, 0.5, 7),
  ...[18.6, 20.0, 24.0, 25.2].map((z) => F('stool', -4.6, z, 0.4, 0.4)),
  F('stage', (STAGE.x0 + STAGE.x1) / 2, (STAGE.z0 + STAGE.z1) / 2, STAGE.x1 - STAGE.x0, STAGE.z1 - STAGE.z0),
  F('piano', 4.3, 15.0, 1.8, 1.2), F('pianobench', 4.3, 16.35, 1.0, 0.4, 2),
  F('dancefloor', 0, 27, 4.8, 10, 0, { solid: false }), F('bingo', 0.6, 31.2, 0.6, 0.6),
  ...ROUND.map((t) => F('roundtable', t.x, t.z, 2.9, 2.9)),
  F('map', -5.0, 37.7, 2.4, 0.15, 0, { solid: false }),
  // The lifeboats on their davits, port and starboard.
  ...boats.flatMap((z) => [F('lifeboat', -10.95, z, 1.5, 6), F('lifeboat', 10.95, z, 1.5, 6)]),
  F('crate', 10.9, -8.4, 0.6, 0.6),
  // The stern: deck chairs, a bench, the flagpole, the bollards, life rings.
  F('deckchair', 7.6, 44, 0.7, 1.8), F('deckchair', 8.8, 44, 0.7, 1.8), F('deckchair', 10.0, 44, 0.7, 1.8),
  F('bench', -6.8, 50.4, 1.6, 0.5), F('flagpole', 0, 57.2, 0.25, 0.25),
  F('bollard', -10.6, 56.8, 0.5, 0.5), F('bollard', 10.6, 56.8, 0.5, 0.5), F('lifering', -11.5, 46, 0.3, 0.3), F('lifering', 11.5, 46, 0.3, 0.3),
];

// ------------------------------------------------------------------ scenes
const L = (skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras = [], extra = {}) =>
  ({ skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras, ...extra });
const CAPTAIN = L('#e2b896', 'old', 'm', 'short', '#e8e8e8', 'uniform', '#f4f4f0', 'pants', '#141a2a', ['beard', 'hat'], { seed: 171 });
const OFFICER = L('#a8724e', 'adult', 'f', 'bun', '#120d0b', 'uniform', '#1a2440', 'pants', '#1a2440', [], { seed: 161 });
const AMPARO = L('#f0d6c0', 'elderly', 'f', 'bun', '#f0f0f0', 'coat', '#2a2a30', 'pants', '#2a2a30', ['scarf', 'earrings'], { seed: 11 });
const face = (from, to) => Math.atan2(to.x - from.x, to.z - from.z);

const PLACES = {
  popa: { spot: { x: 3.4, z: 52.2 }, npc: { x: 3.4, z: 55.6, heading: Math.PI }, pose: 'stand', mood: 'sad', look: AMPARO,
    extras: [{ x: 5.2, z: 55.1, heading: -2.6, pose: 'arms', mood: 'worried', look: L('#c99468', 'adult', 'm', 'short', '#2a1a12', 'uniform', '#f4f4f0', 'pants', '#141a2a', ['mustache'], { seed: 12 }) }] },
  maquinas: { spot: { x: -0.2, z: -25 }, npc: { x: -2.5, z: -26.4, heading: Math.PI / 2 }, pose: 'arms', mood: 'angry', look: L('#c48f69', 'old', 'm', 'bald', '#9a9a9a', 'uniform', '#3a4a5a', 'pants', '#3a4a5a', ['mustache'], { seed: 21 }),
    extras: [{ x: 2.6, z: -28.6, heading: -Math.PI / 2, pose: 'crouch', mood: 'scared', look: L('#8d5a3c', 'young', 'm', 'short', '#120d0b', 'uniform', '#3a5a8a', 'pants', '#3a5a8a', [], { seed: 22 }) }] },
  cocina: { spot: { x: -3.0, z: 7.8 }, npc: { x: -3.2, z: 11.2, heading: Math.PI }, pose: 'cook', mood: 'furious', look: L('#b9825c', 'adult', 'f', 'bun', '#120d0b', 'apron', '#f4f0ea', 'pants', '#2a2a2a', [], { seed: 31 }),
    extras: [{ x: -5.6, z: 11.8, heading: Math.PI / 2, pose: 'cook', mood: 'worried', look: L('#c48f69', 'young', 'm', 'short', '#120d0b', 'apron', '#f4f0ea', 'pants', '#2a2a2a', [], { seed: 32 }) }] },
  pasillo: { spot: { x: -0.6, z: -8.4 }, npc: { x: 1.0, z: -10.6, heading: -0.6 }, pose: 'stand', mood: 'sad', look: L('#a8724e', 'adult', 'f', 'ponytail', '#2a1a12', 'uniform', '#5a8aa0', 'pants', '#2a2a30', [], { seed: 41 }) },
  luna: { spot: { x: 3.2, z: 0.4 }, npc: { x: 5.2, z: 0.95, heading: Math.PI, seat: true }, pose: 'sit', mood: 'pain', look: L('#c99468', 'young', 'f', 'long', '#2a1a12', 'sweater', '#e0a0b8', 'pants', '#3a3a5a', ['earrings'], { seed: 51 }),
    extras: [{ x: 2.6, z: -0.95, heading: 0.6, pose: 'arms', mood: 'worried', look: L('#c99468', 'young', 'm', 'curly', '#120d0b', 'shirt', '#f4f0ea', 'jeans', '#24304a', [], { seed: 52 }) }] },
  pareja: { spot: { x: -2.8, z: -6.0 }, npc: { x: -3.4, z: -8.2, heading: 0.3 }, pose: 'arms', mood: 'angry', look: L('#e8c0a0', 'old', 'f', 'bob', '#c8a080', 'dress', '#2a5a7a', null, null, ['earrings', 'glasses'], { seed: 61 }),
    extras: [{ x: -5.6, z: -6.2, heading: -Math.PI / 2, pose: 'stand', mood: 'sad', look: L('#e8c0a0', 'old', 'm', 'short', '#9a9a9a', 'sweater', '#5a4a3a', 'pants', '#3a3028', ['glasses'], { seed: 62 }) }] },
  cartas: { spot: { x: -3.4, z: -17.4 }, npc: { x: -5.55, z: -18.4, heading: Math.PI / 2, seat: true }, pose: 'read', mood: 'sad', look: L('#b9825c', 'elderly', 'm', 'bald', '#d8d8d8', 'sweater', '#6a5a4a', 'pants', '#3a3028', ['glasses'], { seed: 71 }) },
  enfermeria: { spot: { x: 2.8, z: 7.2 }, npc: { x: 4.6, z: 6.0, heading: -1.2 }, pose: 'arms', mood: 'worried', look: L('#8d5a3c', 'adult', 'f', 'curly', '#120d0b', 'scrubs', '#e8eef0', 'pants', '#e8eef0', ['glasses'], { seed: 81 }) },
  nina: { spot: { x: -8.6, z: -6.4 }, npc: { x: -10.6, z: -8.0, heading: Math.PI / 2 }, pose: 'stand', mood: 'smile', look: L('#c99468', 'child', 'f', 'braids', '#2a1a12', 'coat', '#e8c020', 'pants', '#2a3a5a', [], { seed: 91 }),
    extras: [{ x: -9.4, z: -9.2, heading: 0.7, pose: 'arms', mood: 'worried', look: L('#c48f69', 'elderly', 'm', 'cap', '#d8d8d8', 'coat', '#3a3a30', 'pants', '#2a2a2a', ['mustache'], { seed: 92 }) }] },
  polizon: { spot: { x: 8.6, z: -6.6 }, npc: { x: 10.65, z: -8.4, heading: -Math.PI / 2, seat: true }, pose: 'sit', mood: 'smile', look: L('#8d5a3c', 'elderly', 'm', 'short', '#e8e8e8', 'jacket', '#5a4a3a', 'pants', '#3a3028', ['hat'], { seed: 101 }),
    extras: [{ x: 9.0, z: -10.0, heading: 0.4, pose: 'arms', mood: 'angry', look: L('#c48f69', 'adult', 'm', 'short', '#120d0b', 'jacket', '#1a2440', 'pants', '#1a2440', ['beard'], { seed: 102 }) }] },
  barra: { spot: { x: -3.9, z: 22.0 }, npc: { x: -6.15, z: 22.0, heading: Math.PI / 2 }, pose: 'cook', mood: 'neutral', look: L('#a8724e', 'old', 'm', 'short', '#5a5a5a', 'suit', '#7a1a2a', 'pants', '#141418', ['mustache'], { seed: 111 }) },
  bingo: { spot: { x: -0.6, z: 27.6 }, npc: { x: -0.8, z: 30.6, heading: Math.PI }, pose: 'wave', mood: 'laugh', look: L('#c48f69', 'adult', 'f', 'curly', '#3a1a10', 'dress', '#e0408a', null, null, ['earrings'], { seed: 121 }) },
  piano: { spot: { x: 3.0, z: 19.2 }, npc: { x: 4.3, z: 16.1, heading: Math.PI, seat: true, y: STAGE.top }, pose: 'sit', mood: 'sad', look: L('#e2b896', 'elderly', 'm', 'short', '#e8e8e8', 'suit', '#141418', 'pants', '#141418', ['glasses'], { seed: 131 }) },
  radio: { spot: { x: -3.6, z: -36.8 }, npc: { x: -6.1, z: -38, heading: -Math.PI / 2, seat: true }, pose: 'sit', mood: 'worried', look: L('#b9825c', 'adult', 'f', 'bob', '#120d0b', 'uniform', '#1a2440', 'pants', '#1a2440', ['headphones'], { seed: 141 }) },
  proa: { spot: { x: 0, z: -54.4 }, npc: { x: -0.7, z: -57.4, heading: 0.2 }, pose: 'stand', mood: 'worried', look: L('#a8724e', 'adult', 'm', 'short', '#2a1a12', 'coat', '#3a4a3a', 'pants', '#2a2a2a', ['beard'], { seed: 151 }),
    extras: [{ x: 0.7, z: -57.6, heading: -0.2, pose: 'arms', mood: 'surprised', look: L('#a8724e', 'adult', 'f', 'long', '#120d0b', 'coat', '#8a2a2a', 'pants', '#2a2a2a', ['earrings'], { seed: 152 }) }] },
  oficial: { spot: { x: 10.2, z: -42.4 }, npc: { x: 10.6, z: -46.0, heading: -0.11 }, pose: 'arms', mood: 'worried', look: OFFICER },
  capitan: { spot: { x: -1.0, z: -42.6 }, npc: { x: -1.6, z: -45.4, heading: 0.21 }, pose: 'stand', mood: 'sad', look: CAPTAIN,
    extras: [{ x: 2.2, z: -45.2, heading: -0.6, pose: 'arms', mood: 'worried', look: OFFICER }] },
  amanecer: { spot: { x: -3.6, z: 47.6 }, npc: { x: -3.6, z: 50.4, heading: Math.PI }, pose: 'stand', mood: 'smile', look: CAPTAIN },
};
for (const p of Object.values(PLACES)) if (p.npc.heading == null) p.npc.heading = face(p.npc, p.spot);

export const SCENES = STORY.map((story) => ({ ...story, ...PLACES[story.id] }));
export const SCENE_IDS = SCENES.map((s) => s.id);
export const sceneById = (id) => SCENES.find((s) => s.id === id);
export const SPOT_RADIUS = 1.1;

// ------------------------------------------------------------------ the crowd
// Seventeen people who stay put and talk to you (E): see invitados.mjs.
const atRound = (t, k, mood) => ({ ...roundSeat(ROUND[t], k), pose: 'sit', seat: true, mood });
export const CROWD = [
  atRound(1, 4, 'smile'), // Doña Pilar
  { x: 9.4, z: 21.0, heading: -Math.PI / 2, pose: 'arms', mood: 'worried' }, // Tobías
  { x: -9.6, z: 46.0, heading: Math.PI / 2, pose: 'carry', mood: 'smile' }, // Hernán
  { x: -1.4, z: 18.8, heading: 2.6, pose: 'wave', mood: 'worried' }, // Celia
  atRound(0, 1, 'laugh'), // Ignacio
  atRound(3, 2, 'neutral'), // Doña Remedios
  { x: -3.0, z: 24.8, heading: 2.2, pose: 'carry', mood: 'tipsy' }, // Felipe
  { x: 2.0, z: 33.8, heading: Math.PI, pose: 'phone', mood: 'sad' }, // Lorena
  { x: -9.2, z: 12.0, heading: 1.2, pose: 'phone', mood: 'sleepy' }, // Sebas
  atRound(0, 4, 'love'), // Doña Consuelo
  { x: -9.4, z: 1.6, heading: Math.PI / 2, pose: 'arms', mood: 'terror' }, // Raúl
  { x: 9.2, z: -18.4, heading: -1.8, pose: 'carry', mood: 'neutral' }, // Marisa
  { x: 9.6, z: -28.4, heading: -Math.PI / 2, pose: 'arms', mood: 'surprised' }, // Abel
  { x: 8.8, z: 44.25, heading: Math.PI, pose: 'sit', seat: true, mood: 'smile' }, // Graciela
  { x: -6.8, z: 50.65, heading: 0, pose: 'sit', seat: true, mood: 'neutral' }, // Don Ulises
  { x: 1.4, z: 25.4, heading: -0.5, pose: 'dance', mood: 'laugh' }, // Paloma
  { x: -2.4, z: -60.0, heading: 0.6, pose: 'arms', mood: 'worried' }, // Óscar
];

// More people on board: they don't stop to talk (their circles are charlas).
export const FILLERS = [
  atRound(0, 0, 'tipsy'), atRound(0, 2, 'smile'), atRound(1, 1, 'worried'), atRound(1, 3, 'laugh'),
  atRound(2, 0, 'smile'), atRound(2, 2, 'sad'), atRound(2, 5, 'tipsy'), atRound(3, 0, 'scared'), atRound(3, 4, 'smile'), atRound(4, 1, 'sleepy'), atRound(4, 3, 'laugh'),
  { x: 0.6, z: 23.2, heading: 2.4, pose: 'dance', mood: 'laugh' }, { x: -1.8, z: 23.4, heading: -0.8, pose: 'dance', mood: 'tipsy' },
  { x: 1.6, z: 30.8, heading: -2.6, pose: 'dance', mood: 'love' }, { x: 2.0, z: 28.4, heading: 1.8, pose: 'dance', mood: 'smile' },
  { x: -5.7, z: 4.0, heading: -Math.PI / 2, pose: 'cook', mood: 'scared' },
  { x: 4.4, z: -21.6, heading: Math.PI, pose: 'arms', mood: 'sleepy' },
  { x: -8.0, z: 56.8, heading: 0, pose: 'balcony', mood: 'sad' },
  { x: -9.6, z: -22.0, heading: Math.PI / 2, pose: 'arms', mood: 'worried' }, { x: 9.4, z: 2.0, heading: -Math.PI / 2, pose: 'phone', mood: 'scared' },
  { x: 0, z: -45.6, heading: Math.PI, pose: 'stand', mood: 'worried' },
  { x: 3.4, z: 12.85, heading: 0, pose: 'sit', seat: true, mood: 'pain' },
];

// A waiter in the ballroom and two people who walk the lifeboat decks.
const P = (skin, age, body, hair, hairColor, top, topColor, bottom, bottomColor, extras = [], seed = 0) => L(skin, age, body, hair, hairColor, top, topColor, bottom, bottomColor, extras, { seed });
export const WALKERS = [
  { look: P('#c48f69', 'young', 'm', 'short', '#120d0b', 'suit', '#f4f0ea', 'pants', '#141418', [], 901), path: [[-3.0, 19.6], [0.6, 19.6], [2.8, 25.0], [2.8, 37.2], [-2.2, 37.2], [-2.2, 26.6]], speed: 1.1, pause: 1.2, tray: true },
  { look: P('#a8724e', 'young', 'f', 'ponytail', '#120d0b', 'jacket', '#e8c020', 'pants', '#1a2440', [], 902), path: [[8.0, -38], [8.0, 36]], speed: 1.3, pause: 2 },
  { look: P('#e8c0a0', 'old', 'm', 'short', '#9a9a9a', 'coat', '#3a3a4a', 'pants', '#2a2a2a', [], 903), path: [[-8.2, 36], [-8.2, -36]], speed: 0.8, pause: 3 },
];

// Short lines people say as you walk past (shown as bubbles near them).
export const CHATTER = [
  '¡Cómo se mueve esto!', '¿Dónde está el capitán?', 'Yo me casé en este salón.', '¿Quedan pastillas para el mareo?', 'Mañana a las siete, Cádiz.',
  '¿Has visto el gato?', 'Dicen que hay un polizón.', 'Otra canción, maestro.', 'Esta orquesta ya tocaba en 1980.', 'Agárrate, que viene otra.',
  '¡Bingo! Ah, no.', 'Qué pena, un barco tan bonito.', 'El bufé sigue abierto.', 'No mires por la ventana.', 'Esta noche no duerme nadie.',
];

// The ship's loudspeakers, a new message every minute or so.
export const ANNOUNCEMENTS = [
  'Megafonía: señores pasajeros, por favor, no salgan a cubierta sin chaleco salvavidas.',
  'Megafonía: el bingo continúa en el salón. El cartón ganador no puede pagarse en especie.',
  'Megafonía: se ruega al dueño de un gato llamado Almirante que no lo busque en la cocina.',
  'Megafonía: la tienda de recuerdos vende su último cenicero con forma de ancla.',
  'Megafonía: llegada prevista a Cádiz a las siete. El capitán les agradece cincuenta y cinco años de compañía.',
  'Megafonía: se informa que el barco se mueve. Es normal. Más o menos.',
  'Megafonía: la enfermería recuerda que las pastillas para el mareo no se mezclan con ron.',
  'Megafonía: concierto de despedida del maestro Aurelio en el escenario. Último pase.',
];

// ------------------------------------------------------------------ colliders
const box = (x0, z0, x1, z1) => ({ x0: Math.min(x0, x1), x1: Math.max(x0, x1), z0: Math.min(z0, z1), z1: Math.max(z0, z1) });
export function footprint(item) {
  const turned = item.rot === 1 || item.rot === 3;
  const w = turned ? item.d : item.w, d = turned ? item.w : item.d;
  return box(item.x - w / 2, item.z - d / 2, item.x + w / 2, item.z + d / 2);
}
export function wallBox([x0, z0, x1, z1, kind]) {
  const h = kind === 'rail' ? 0.12 : WALL / 2;
  return x0 === x1 ? box(x0 - h, z0, x1 + h, z1) : box(x0, z0 - h, x1, z1 + h);
}

// The bow: the rail follows the narrowing hull in short straight pieces, and
// the sea outside it is solid (strips from the rail to the edge of the world).
export function bowBoxes() {
  const out = [];
  const step = 0.5;
  for (let z = HULL.bow; z < HULL.z0 - 1e-6; z += step) {
    const z1 = Math.min(HULL.z0, z + step);
    const hw = halfBeam(z); // the narrow end of the strip, so the rail never leaves a gap
    out.push({ ...box(-hw - 0.12, z, -hw + 0.12, z1), prop: 'rail' }, { ...box(hw - 0.12, z, hw + 0.12, z1), prop: 'rail' });
    out.push({ ...box(BOUNDS.minX, z, -hw - 0.12, z1), water: true }, { ...box(hw + 0.12, z, BOUNDS.maxX, z1), water: true });
  }
  return out;
}

const NOT_SOLID = new Set(['chain', 'dancefloor', 'map', 'rug']);
const TALL = new Set(['mast', 'engine', 'wardrobe', 'cabinet', 'backbar', 'lifeboat', 'flagpole', 'wheel']);
// How high you stand after jumping onto something (Space).
const TOPS = { winch: 0.9, console: 1.0, chartable: 0.95, captainchair: 0.5, radiodesk: 0.9, chair: 0.45, toolbench: 0.95, telegraph: 1.1, bed: 0.55, lettertable: 0.7, trolley: 0.95, stove: 0.92, island: 0.92, stretcher: 0.7, desk: 0.76, bar: 1.1, stool: 0.75, stage: STAGE.top, piano: 1.5, pianobench: STAGE.top + 0.45, bingo: 0.95, roundtable: 0.76, crate: 0.45, deckchair: 0.42, bench: 0.45, bollard: 0.5, lifering: 1.2 };
export function topOf(item) { return TOPS[item.type] ?? null; }

export function cameraBlockers() {
  return [...WALLS.filter((w) => w[4] !== 'rail').map(wallBox), ...FURNITURE.filter((f) => TALL.has(f.type) && f.type !== 'lifeboat').map(footprint)];
}

function scenePeople() {
  return SCENES.flatMap((s) => [s.npc, ...(s.extras ?? [])]);
}
export function solidsFor() {
  const walls = WALLS.map((w) => ({ ...wallBox(w), prop: w[4] }));
  const things = FURNITURE.filter((f) => f.solid !== false && !NOT_SOLID.has(f.type)).map((f) => ({ ...footprint(f), ...(topOf(f) != null ? { top: topOf(f) } : {}), prop: f.type }));
  const people = scenePeople().map((p) => ({ ...box(p.x - 0.3, p.z - 0.3, p.x + 0.3, p.z + 0.3), person: true }));
  return [...walls, ...things, ...people, ...bowBoxes()];
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
  { id: 'campana', x: 2.6, z: -60.0, r: 1.3, title: 'La campana de bronce', intro: 'Tiene grabado «Albatros 1971». Suena sola con cada ola.', themes: ['tiempo', 'historia'] },
  { id: 'botes', x: -8.6, z: 26.0, r: 1.4, title: 'Los botes salvavidas', intro: 'Cinco botes naranjas, con cincuenta años y sin estrenar.', themes: ['miedo', 'supervivencia'] },
  { id: 'bandera', x: -0.6, z: 54.4, r: 1.3, title: 'La bandera de popa', intro: 'Mañana la arriarán por última vez y se la darán al capitán.', themes: ['muerte', 'mar'] },
  { id: 'mapa', x: -1.6, z: 36.4, r: 1.0, title: 'El mapa de las rutas', intro: 'Cincuenta y cinco años de líneas rojas entre puertos.', themes: ['viaje', 'historia'] },
  { id: 'chimenea', x: 9.6, z: 31.0, r: 1.2, title: 'La chimenea roja', intro: 'Echa humo negro contra la lluvia, como si protestara.', themes: ['transporte', 'tiempo'] },
];
