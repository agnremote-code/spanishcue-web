// Lluvia de estrellas · Camping Los Cardones as plain data. One flat stretch
// of high desert, the entrance to the south (+z) and the rocky lookout to the
// north (-z): the barrier and the car park, the tents, the caravans, the
// campfire, the kitchen tent, the llama pen, the showers, the hammocks, the
// path up to the lookout, the observatory with its dome, the old miner's hut,
// the salt flat with its shore, the rocks and the generator shed. Units are
// metres: x grows to the east, z grows to the south (the entrance), y is up;
// a heading of 0 faces +z. The renderer (campamento3d.ts, World3D.tsx) only
// draws what is here, so movement, the circles and «nobody inside an object»
// are tested without WebGL.
import { STORY } from './story.mjs';

export const WALL = 0.25;
export const BOUNDS = { minX: -62, maxX: 62, minZ: -86, maxZ: 62 };

// You arrive on foot at the barrier at nine in the evening, facing the camp.
export const SPAWN = { x: 0, z: 56, heading: Math.PI };

// ------------------------------------------------------------------ areas
export const KITCHEN = { x0: 12, x1: 20, z0: -2, z1: 8 };
export const DOME = { x0: -31, x1: -19, z0: -36, z1: -24 };
export const CORRAL = { x0: 30, x1: 40, z0: 2, z1: 14 };
export const SALAR = { x0: 14, x1: 62, z0: -86, z1: -40 };
export const PARKING = { x0: 18, x1: 46, z0: 34, z1: 58 };
export const PATH = { x0: -1.4, x1: 1.4, z0: -66, z1: 8 };
export const LOOKOUT = { x0: -14, x1: 14, z0: -86, z1: -64 };
export const FIRE = { x: 0, z: 12 };

const inside = (r, x, z) => x > r.x0 && x < r.x1 && z > r.z0 && z < r.z1;
// How high the camera may rise: under the kitchen tent and the dome it stays
// below the canvas; under the open sky it can climb.
export function ceilingAt(x, z) {
  if (inside(KITCHEN, x, z)) return 3.2;
  if (inside(DOME, x, z)) return 3.3;
  return 14;
}
export const roofed = (x, z) => ceilingAt(x, z) < 8;
// Under the low canvas the jump is short (no head through the tent).
export const jumpSpeedFor = (x, z) => (ceilingAt(x, z) < 4 ? 5.4 : 7.6);

// ------------------------------------------------------------------ sectors
const S = (id, name, x0, z0, x1, z1, sound) => ({ id, name, x0, z0, x1, z1, sound });
export const SECTORS = [
  S('cocina', 'La carpa cocina', KITCHEN.x0, KITCHEN.z0, KITCHEN.x1, KITCHEN.z1, 'kitchen'),
  S('cupula', 'La cúpula del observatorio', DOME.x0, DOME.z0, DOME.x1, DOME.z1, 'dome'),
  S('corral', 'El corral de las llamas', CORRAL.x0, CORRAL.z0, CORRAL.x1, CORRAL.z1, 'animals'),
  S('entrada', 'La entrada del camping', -14, 40, 14, 62, 'wind'),
  S('estacionamiento', 'El estacionamiento', PARKING.x0, PARKING.z0, 62, PARKING.z1 + 4, 'wind'),
  S('carpas', 'Las carpas', -40, 16, -14, 40, 'camp'),
  S('caravanas', 'Las caravanas', -62, -4, -40, 20, 'radio'),
  S('generador', 'La caseta del generador', -62, 24, -36, 46, 'engine'),
  S('carpa-azul', 'La carpa azul', -22, 0, -8, 16, 'camp'),
  S('fogata', 'El círculo de la fogata', -6, 6, 8, 18, 'fire'),
  S('duchas', 'Las duchas', 20, -16, 32, -4, 'water'),
  S('hamacas', 'Las hamacas', -16, -18, -2, -6, 'wind'),
  S('mirador', 'El mirador', LOOKOUT.x0, LOOKOUT.z0, LOOKOUT.x1, LOOKOUT.z1, 'night'),
  S('sendero', 'El sendero del mirador', -6, -64, 6, 0, 'night'),
  S('mina', 'La casucha minera', 34, -38, 56, -20, 'wind'),
  S('rocas', 'Las rocas', -56, -62, -28, -38, 'wind'),
  S('orilla', 'La orilla del salar', 4, -52, 14, -38, 'night'),
  S('salar', 'El salar', SALAR.x0, SALAR.z0, SALAR.x1, SALAR.z1, 'night'),
  S('camping', 'El camping', -62, -40, 62, 62, 'camp'),
];
export const sectorAt = (x, z) => SECTORS.find((s) => x >= s.x0 && x <= s.x1 && z >= s.z0 && z <= s.z1) ?? null;

// ------------------------------------------------------------------ walls
// Segments [x0, z0, x1, z1, kind]: 'wall' the stone wall of the observatory,
// 'rail' the wooden fence of the llama pen. Gaps are openings.
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
  // The observatory: a square stone drum under the dome, its door to the south.
  ...alongX(DOME.z0, DOME.x0, DOME.x1, 'wall'), ...alongX(DOME.z1, DOME.x0, DOME.x1, 'wall', [[-25, 1.8]]),
  ...alongZ(DOME.x0, DOME.z0, DOME.z1, 'wall'), ...alongZ(DOME.x1, DOME.z0, DOME.z1, 'wall'),
  // The llama pen: a fence with its gate to the west.
  ...alongX(CORRAL.z0, CORRAL.x0, CORRAL.x1, 'rail'), ...alongX(CORRAL.z1, CORRAL.x0, CORRAL.x1, 'rail'),
  ...alongZ(CORRAL.x1, CORRAL.z0, CORRAL.z1, 'rail'), ...alongZ(CORRAL.x0, CORRAL.z0, CORRAL.z1, 'rail', [[8, 2.4]]),
];
export const DOORS = [{ x: -25, z: DOME.z1, w: 1.8, label: 'OBSERVATORIO OJO DE ANCOYO' }];

// ------------------------------------------------------------------ furniture
// { type, x, z, w, d, rot } — w along x, d along z before `rot` quarter turns
// (rot 0: the front of a chair or a bench faces +z).
const F = (type, x, z, w, d, rot = 0, extra = {}) => ({ type, x, z, w, d, rot, ...extra });
const TENT_COLORS = ['#d8642a', '#3a7a4a', '#e0b020', '#8a3a5a', '#4a6aa8', '#c8c0a8'];
export const FURNITURE = [
  // The entrance: the barrier post with its raised arm, the little booth, the sign.
  F('barrierpost', -3.4, 50, 0.4, 0.4), F('booth', -7, 48, 2.4, 2.4), F('welcome', 6.4, 50.6, 3.2, 0.3),
  // The car park: two rows of dusty cars, and Don Cosme's folding table.
  ...[22, 25.4, 28.8, 32.2, 35.6, 39].map((x) => F('car', x, 53, 1.9, 4.4, 0, { color: ['#c8c4b8', '#8a2a2a', '#3a4a5a', '#e0dcd0', '#2a3a2a', '#a88a5a'][Math.round(x) % 6] })),
  ...[36.4, 39.8, 43.2].map((x) => F('car', x, 39.6, 1.9, 4.4, 0, { color: ['#5a5a62', '#c8c4b8', '#6a3a1a'][Math.round(x) % 3] })),
  F('foldtable', 30, 45.8, 1.6, 0.7),
  // The tents, and Nora and Iván's car.
  F('tent', -20, 34, 2.6, 2.6, 0, { color: TENT_COLORS[0] }), F('tent', -26, 34.4, 2.6, 2.6, 0, { color: TENT_COLORS[1] }), F('tent', -32, 33.6, 2.6, 2.6, 0, { color: TENT_COLORS[2] }),
  F('tent', -36.4, 26, 2.6, 2.6, 0, { color: TENT_COLORS[3] }), F('tent', -21.6, 23.6, 2.6, 2.6, 0, { color: TENT_COLORS[5] }), F('tent', -34, 19.4, 2.6, 2.6, 0, { color: TENT_COLORS[0] }),
  F('car', -28, 22, 1.9, 4.4, 1, { color: '#6a7a5a', open: true }),
  // The caravans and Doña Hortensia's radio corner.
  F('caravan', -51, 12, 2.4, 6), F('caravan', -51, 1.6, 2.4, 6), F('antenna', -46.4, 10, 0.3, 0.3),
  F('radiotable', -46.6, 6.8, 1.2, 0.7), F('campchair', -46.6, 7.75, 0.55, 0.55, 2),
  // The generator shed, its generator and the light pole.
  F('shed', -44, 34, 3.2, 2.6), F('generator', -44, 37.2, 1.4, 0.9), F('lightpole', -38.6, 30.4, 0.3, 0.3),
  // The blue tent with Simón's contact base.
  F('tent', -15, 6, 2.6, 2.6, 0, { color: '#2a5ac8', patched: true }), F('contactsign', -12.2, 9.4, 0.9, 0.12), F('campchair', -16.8, 9.0, 0.55, 0.55, 0),
  // The campfire and its four log benches.
  F('campfire', FIRE.x, FIRE.z, 1.4, 1.4),
  F('log', 0, 14.6, 2.2, 0.45), F('log', 0, 9.4, 2.2, 0.45), F('log', -2.6, 12, 0.45, 2.2), F('log', 2.6, 12, 0.45, 2.2),
  // The kitchen tent: four poles, the long table and the gas stove.
  F('pole', KITCHEN.x0 + 0.2, KITCHEN.z0 + 0.2, 0.2, 0.2), F('pole', KITCHEN.x1 - 0.2, KITCHEN.z0 + 0.2, 0.2, 0.2), F('pole', KITCHEN.x0 + 0.2, KITCHEN.z1 - 0.2, 0.2, 0.2), F('pole', KITCHEN.x1 - 0.2, KITCHEN.z1 - 0.2, 0.2, 0.2),
  F('cooktable', 16, 6.6, 6, 0.9), F('stove', 18.8, 2, 0.9, 2.4),
  // The llama pen: Estrella lying in the straw, two more llamas, a bale.
  F('llamalie', 36.6, 9.4, 0.8, 1.6), F('llama', 37.6, 4.4, 0.6, 1.4), F('llama', 38.2, 12, 0.6, 1.4), F('hay', 33, 12.4, 1.2, 0.8),
  // The showers.
  F('showers', 25, -10, 6, 3.6),
  // The hammocks between two carob trees.
  F('tree', -12.4, -12, 0.7, 0.7), F('tree', -5.6, -12, 0.7, 0.7), F('hammock', -9, -12, 6.0, 0.8, 0, { solid: false }),
  F('tree', -14, -2, 0.7, 0.7), F('tree', 8, -6, 0.7, 0.7),
  // The path to the lookout: Elías's rock and the signpost.
  F('rock', -2.2, -20, 1.0, 0.9), F('signpost', 2.4, -17.6, 0.3, 0.3),
  // The observatory: the telescope on its pier, the stuck motor, the desk.
  F('telescope', -25, -31, 1.4, 1.4), F('motor', -20.4, -34.6, 0.9, 0.9), F('obsdesk', -29.8, -27.2, 0.8, 1.8),
  // The old miner's hut, the boarded mine mouth and a crate.
  F('hut', 42, -30, 4, 3.4), F('minemouth', 49, -33, 3, 1.2), F('crate', 42, -26.4, 0.6, 0.6),
  // The salt flat: Ulises's tripod and the bucket.
  F('tripod', 30, -56, 0.7, 0.7), F('bucket', 31.6, -54.4, 0.4, 0.4),
  // The shore of the salt flat: Madame Zulema's stall under its parasol.
  F('stall', 10, -46, 1.6, 0.8),
  // The rocks.
  F('boulder', -40, -52, 3, 2.6), F('boulder', -45, -46, 2.4, 2.2), F('boulder', -34, -56.4, 2.8, 2.4), F('boulder', -50, -55, 3.4, 3),
  // The lookout: two benches and the stones around it.
  F('bench', -2.4, -74, 1.8, 0.5), F('bench', 2.4, -74, 1.8, 0.5), F('bench', -6.6, -76.6, 1.8, 0.5), F('bench', 6.6, -76.6, 1.8, 0.5),
  F('boulder', -10, -81, 3.4, 3), F('boulder', 9.4, -82, 3.6, 3.2), F('boulder', 0, -84, 4, 2.6), F('boulder', -12, -70, 2.6, 2.4), F('boulder', 11.6, -69, 2.4, 2.2),
  // Cardones, the tall cactus that names the campsite.
  ...[[-8, 30], [10, 28], [-44, -12], [-30, 8], [22, 20], [48, 22], [52, -10], [-54, -30], [-20, -50], [-8, -40], [14, -26], [56, 48], [-56, 50], [-24, 50], [40, -50]].map(([x, z]) => F('cardon', x, z, 0.7, 0.7)),
];

// ------------------------------------------------------------------ scenes
const L = (skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras = [], extra = {}) =>
  ({ skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras, ...extra });
export const LOOKS = {
  celeste: L('#c99468', 'adult', 'f', 'ponytail', '#2a1a12', 'jacket', '#b0402a', 'jeans', '#24304a', ['scarf'], { seed: 11 }),
  rogelio: L('#a8724e', 'old', 'm', 'cap', '#5a5a5a', 'jacket', '#5a4a2a', 'pants', '#3a3028', ['mustache'], { seed: 12 }),
  amalia: L('#f0d6c0', 'elderly', 'f', 'bun', '#f0f0f0', 'coat', '#3a4a6a', 'pants', '#2a2a30', ['glasses', 'scarf'], { seed: 13 }),
  ramiro: L('#a8724e', 'elderly', 'm', 'short', '#d8d8d8', 'coat', '#5a4a3a', 'pants', '#2a2a2a', ['hat', 'mustache'], { seed: 14 }),
};
const face = (from, to) => Math.atan2(to.x - from.x, to.z - from.z);

const PLACES = {
  entrada: { spot: { x: 0.6, z: 46.4 }, npc: { x: 0.6, z: 43.4 }, pose: 'arms', mood: 'worried', look: LOOKS.celeste,
    extras: [{ x: 2.8, z: 44.0, pose: 'stand', mood: 'neutral', look: LOOKS.rogelio }] },
  lentes: { spot: { x: 30, z: 43.4 }, npc: { x: 30, z: 46.8 }, pose: 'arms', mood: 'sad', look: L('#c48f69', 'old', 'm', 'short', '#9a9a9a', 'sweater', '#6a5a3a', 'pants', '#3a3028', ['glasses', 'mustache'], { seed: 21 }) },
  urna: { spot: { x: -25.2, z: 28.4 }, npc: { x: -25.0, z: 25.4 }, pose: 'cry', mood: 'sad', look: L('#e2b896', 'adult', 'f', 'long', '#3a2416', 'coat', '#2a3a3a', 'jeans', '#24304a', ['earrings'], { seed: 31 }),
    extras: [{ x: -28.4, z: 24.0, pose: 'arms', mood: 'worried', look: L('#e2b896', 'adult', 'm', 'short', '#2a1a12', 'jacket', '#5a6a7a', 'jeans', '#24304a', ['beard'], { seed: 32 }) }] },
  radio: { spot: { x: -43.6, z: 7.8 }, npc: { x: -46.6, z: 7.75, heading: Math.PI, seat: true }, pose: 'sit', mood: 'worried', look: L('#c99468', 'elderly', 'f', 'curly', '#e8e8e8', 'sweater', '#7a3a6a', 'pants', '#2a2a30', ['glasses', 'headphones'], { seed: 41 }) },
  alien: { spot: { x: -12.2, z: 11.6 }, npc: { x: -12.4, z: 7.6 }, pose: 'wave', mood: 'smile', look: L('#c48f69', 'child', 'm', 'short', '#120d0b', 'hoodie', '#e8c020', 'jeans', '#24304a', [], { seed: 51 }),
    extras: [{ x: -16.8, z: 9.0, heading: 0.6, seat: true, pose: 'sit', mood: 'sleepy', look: L('#c48f69', 'adult', 'f', 'bun', '#120d0b', 'sweater', '#4a6a5a', 'pants', '#2a2a30', [], { seed: 52 }) }] },
  cita: { spot: { x: 4.8, z: 15.0 }, npc: { x: 2.6, z: 11.4, heading: -Math.PI / 2, seat: true }, pose: 'sit', mood: 'worried', look: L('#a8724e', 'adult', 'm', 'short', '#120d0b', 'shirt', '#f4f0ea', 'pants', '#2a2a30', [], { seed: 61 }),
    extras: [{ x: 0.6, z: 14.6, heading: Math.PI, seat: true, pose: 'sit', mood: 'smile', look: L('#c99468', 'adult', 'f', 'curly', '#2a1a12', 'jacket', '#2a5a8a', 'jeans', '#24304a', ['glasses', 'earrings'], { seed: 62 }) }] },
  cocina: { spot: { x: 14.6, z: 2.4 }, npc: { x: 15.6, z: 5.6, heading: 0 }, pose: 'cook', mood: 'furious', look: L('#a8724e', 'old', 'f', 'braids', '#2a2a2a', 'apron', '#f4f0ea', 'skirt', '#8a2a2a', [], { seed: 71 }),
    extras: [{ x: 17.8, z: 2.4, heading: Math.PI / 2, pose: 'cook', mood: 'worried', look: L('#e8c0a0', 'young', 'm', 'curly', '#5a3a1a', 'apron', '#f4f0ea', 'jeans', '#24304a', [], { seed: 72 }) }] },
  llama: { spot: { x: 32.6, z: 8.2 }, npc: { x: 35.0, z: 9.4, heading: Math.PI / 2 }, pose: 'crouch', mood: 'worried', look: L('#a8724e', 'young', 'm', 'short', '#120d0b', 'sweater', '#c8402a', 'pants', '#2a2a2a', ['hat'], { seed: 81 }) },
  duchas: { spot: { x: 25.2, z: -4.4 }, npc: { x: 25.0, z: -7.4 }, pose: 'phone', mood: 'worried', look: L('#e8c0a0', 'adult', 'm', 'short', '#3a2416', 'shirt', '#f4f4f4', 'shorts', '#2a3a5a', ['glasses'], { seed: 91 }) },
  hamacas: { spot: { x: -9, z: -8.8 }, npc: { x: -9, z: -12, heading: Math.PI / 2, lying: true, y: 0.58 }, pose: 'lie', mood: 'sleepy', look: L('#dcae88', 'adult', 'f', 'long', '#2a1a12', 'sweater', '#c890a8', 'pants', '#2a2a30', [], { seed: 101 }) },
  sendero: { spot: { x: 0.8, z: -20.6 }, npc: { x: -2.2, z: -20, heading: Math.PI / 2, seat: true }, pose: 'sit', mood: 'smile', look: L('#c48f69', 'adult', 'm', 'short', '#120d0b', 'jacket', '#2a2a2a', 'pants', '#2a2a30', ['glasses', 'headphones'], { seed: 111 }),
    extras: [{ x: -2.0, z: -22.4, pose: 'arms', mood: 'sad', look: L('#c48f69', 'adult', 'f', 'long', '#120d0b', 'coat', '#6a3a2a', 'jeans', '#24304a', ['earrings'], { seed: 112 }) }] },
  cupula: { spot: { x: -24.6, z: -26.6 }, npc: { x: -26.6, z: -28.8 }, pose: 'arms', mood: 'angry', look: LOOKS.amalia,
    extras: [{ x: -21.6, z: -33.6, heading: Math.PI * 0.75, pose: 'crouch', mood: 'worried', look: L('#a8724e', 'young', 'm', 'short', '#120d0b', 'jacket', '#3a5a3a', 'jeans', '#24304a', [], { seed: 122 }) }] },
  mina: { spot: { x: 42.4, z: -23.4 }, npc: { x: 42, z: -26.4, seat: true }, pose: 'sit', mood: 'scared', look: LOOKS.ramiro },
  salar: { spot: { x: 29.6, z: -51.4 }, npc: { x: 30, z: -54.6 }, pose: 'arms', mood: 'sad', look: L('#c99468', 'adult', 'm', 'curly', '#3a2a1a', 'jacket', '#4a5a3a', 'pants', '#3a3028', ['beard', 'hat'], { seed: 141 }) },
  astrologa: { spot: { x: 10, z: -43.2 }, npc: { x: 10, z: -47.2, heading: 0 }, pose: 'wave', mood: 'smile', look: L('#b9825c', 'adult', 'f', 'curly', '#120d0b', 'dress', '#5a2a7a', null, null, ['earrings', 'scarf'], { seed: 151 }) },
  dron: { spot: { x: -39.6, z: -45.2 }, npc: { x: -40.6, z: -48.4 }, pose: 'phone', mood: 'smile', look: L('#8d5a3c', 'young', 'f', 'long', '#120d0b', 'jacket', '#e0408a', 'jeans', '#24304a', ['earrings'], { seed: 161 }),
    extras: [{ x: -37.8, z: -47.8, pose: 'phone', mood: 'worried', look: L('#8d5a3c', 'young', 'm', 'buzz', '#120d0b', 'hoodie', '#2a2a2a', 'jeans', '#24304a', ['cap'], { seed: 162 }) }] },
  apagon: { spot: { x: -40.4, z: 40.2 }, npc: { x: -41.6, z: 37.4 }, pose: 'phone', mood: 'worried', look: LOOKS.rogelio },
  mirador: { spot: { x: 0.4, z: -68.6 }, npc: { x: 1.2, z: -71.4 }, pose: 'wave', mood: 'smile', look: LOOKS.celeste,
    extras: [
      { x: -2.9, z: -74.0, heading: 0, seat: true, pose: 'sit', mood: 'love', look: LOOKS.amalia },
      { x: -1.9, z: -74.0, heading: 0, seat: true, pose: 'sit', mood: 'surprised', look: LOOKS.ramiro },
    ] },
};
for (const p of Object.values(PLACES)) {
  if (p.npc.heading == null) p.npc.heading = face(p.npc, p.spot);
  for (const e of p.extras ?? []) if (e.heading == null) e.heading = face(e, p.spot);
}

export const SCENES = STORY.map((story) => ({ ...story, ...PLACES[story.id] }));
export const SCENE_IDS = SCENES.map((s) => s.id);
export const sceneById = (id) => SCENES.find((s) => s.id === id);
export const SPOT_RADIUS = 1.1;

// ------------------------------------------------------------------ the crowd
// Seventeen campers who stay put and talk to you (E): see invitados.mjs.
export const CROWD = [
  { x: -2.6, z: 12.6, heading: Math.PI / 2, pose: 'sit', seat: true, mood: 'smile' }, // Tomasa, the guitar at the fire
  { x: -6.4, z: 46.2, heading: Math.PI, pose: 'arms', mood: 'neutral' }, // Gustavo, the booth
  { x: 26.6, z: 47.0, heading: 2.6, pose: 'phone', mood: 'worried' }, // Matilde, the car park
  { x: -30.2, z: 30.0, heading: 0.8, pose: 'carry', mood: 'smile' }, // Ezequiel, the tents
  { x: -36.2, z: 22.4, heading: 2.0, pose: 'read', mood: 'neutral' }, // Paula, the tents
  { x: -48.6, z: 4.6, heading: 0.4, pose: 'arms', mood: 'laugh' }, // Don Anselmo, the caravans
  { x: -0.6, z: 9.4, heading: Math.PI, pose: 'sit', seat: true, mood: 'love' }, // Rosario, the fire
  { x: 21.0, z: 6.6, heading: -Math.PI / 2, pose: 'carry', mood: 'tipsy' }, // Rufino, by the kitchen
  { x: 28.4, z: 11.2, heading: Math.PI / 2, pose: 'arms', mood: 'surprised' }, // Vera, by the pen
  { x: 21.6, z: -6.2, heading: 2.2, pose: 'phone', mood: 'sleepy' }, // Bautista, the showers queue
  { x: -4.2, z: -9.4, heading: -1.4, pose: 'read', mood: 'neutral' }, // Gloria, the hammocks
  { x: 5.4, z: -34.0, heading: -0.6, pose: 'arms', mood: 'worried' }, // Lautaro, the path
  { x: -21.8, z: -22.0, heading: 2.8, pose: 'point', mood: 'smile' }, // Clara, the observatory door
  { x: 37.6, z: -27.2, heading: 1.0, pose: 'stand', mood: 'neutral' }, // Héctor, the hut
  { x: 18.6, z: -44.0, heading: -2.0, pose: 'arms', mood: 'love' }, // Irene, the salt flat
  { x: -33.0, z: -46.4, heading: -1.2, pose: 'phone', mood: 'angry' }, // Ricardo, the rocks
  { x: 6.6, z: -76.6, heading: 0, pose: 'sit', seat: true, mood: 'smile' }, // Abuela Chela, the lookout
];

// More campers: they don't stop to talk (their circles are charlas).
export const FILLERS = [
  { x: -2.6, z: 11.2, heading: Math.PI / 2, pose: 'sit', seat: true, mood: 'laugh' },
  { x: 0.6, z: 9.4, heading: Math.PI, pose: 'sit', seat: true, mood: 'smile' },
  { x: -0.6, z: 14.6, heading: Math.PI, pose: 'sit', seat: true, mood: 'tipsy' },
  { x: 2.6, z: 12.6, heading: -Math.PI / 2, pose: 'sit', seat: true, mood: 'smile' },
  { x: -23.6, z: 30.6, heading: 2.4, pose: 'phone', mood: 'neutral' },
  { x: -33.6, z: 30.4, heading: 0.2, pose: 'arms', mood: 'sleepy' },
  { x: -18.4, z: 21.0, heading: -0.8, pose: 'wave', mood: 'smile' },
  { x: 15.2, z: -0.8, heading: -2.6, pose: 'carry', mood: 'neutral' },
  { x: 33.6, z: 38.6, heading: 1.2, pose: 'arms', mood: 'neutral' },
  { x: -48.0, z: -2.4, heading: 0.6, pose: 'phone', mood: 'smile' },
  { x: 23.0, z: -6.0, heading: 2.8, pose: 'arms', mood: 'angry' },
  { x: -6.8, z: -76.6, heading: 0, pose: 'sit', seat: true, mood: 'love' },
  { x: -6.0, z: -76.6, heading: 0, pose: 'sit', seat: true, mood: 'smile' },
  { x: 2.0, z: -74.0, heading: 0, pose: 'sit', seat: true, mood: 'surprised' },
  { x: 2.8, z: -74.0, heading: 0, pose: 'sit', seat: true, mood: 'smile' },
  { x: 7.4, z: -76.6, heading: 0, pose: 'sit', seat: true, mood: 'sleepy' },
  { x: 4.6, z: -70.6, heading: 0.3, pose: 'point', mood: 'surprised' },
  { x: -4.4, z: -70.2, heading: -0.4, pose: 'arms', mood: 'love' },
  { x: 12.4, z: -49.6, heading: 1.8, pose: 'arms', mood: 'smile' },
];

// Three people who walk: a camper with a torch on the path, the night
// watchman round the camp, a girl going to the showers and back.
const P = (skin, age, body, hair, hairColor, top, topColor, bottom, bottomColor, extras = [], seed = 0) => L(skin, age, body, hair, hairColor, top, topColor, bottom, bottomColor, extras, { seed });
export const WALKERS = [
  { look: P('#c48f69', 'adult', 'm', 'short', '#120d0b', 'jacket', '#3a5a8a', 'jeans', '#24304a', [], 901), path: [[3.6, 4], [3.6, -60]], speed: 1.0, pause: 4, torch: true },
  { look: P('#a8724e', 'old', 'm', 'cap', '#5a5a5a', 'coat', '#4a4a3a', 'pants', '#2a2a2a', ['mustache'], 902), path: [[-6, 22], [12, 22], [12, 25.6], [-6, 25.6]], speed: 0.8, pause: 3, torch: true },
  { look: P('#e8c0a0', 'young', 'f', 'ponytail', '#6a2a18', 'hoodie', '#c8a0d8', 'pants', '#2a2a30', [], 903), path: [[8, 4], [24, -2], [8, 4]], speed: 1.1, pause: 2 },
];

// Short lines people say as you walk past (shown as bubbles near them).
export const CHATTER = [
  '¡Ahí va una!', '¿Viste esa?', 'Qué frío, por favor.', '¿Alguien tiene una frazada de más?', '¿A qué hora es el pico?',
  'A las tres y doce, dicen.', 'Nunca vi tantas estrellas.', 'Pide un deseo, rápido.', '¿Esa luz es un avión?', 'Apaga la linterna, porfa.',
  'Huele a sopa.', '¿Dónde está el mirador?', 'Mis pies son de hielo.', 'Esta noche no duerme nadie.', 'Mira la Vía Láctea.',
];

// The campsite loudspeaker: Rogelio speaks every minute or so.
export const ANNOUNCEMENTS = [
  'Altavoz: buenas noches, campistas. A las once en punto se apagan todas las luces del camping.',
  'Altavoz: se ruega no darles malvaviscos a las llamas. Les gustan, pero luego no duermen.',
  'Altavoz: la carpa cocina recuerda que la sopa es gratis y los fideos, una aventura.',
  'Altavoz: el pico de la lluvia es a las tres y doce. Del fogón al mirador hay veinte minutos a pie.',
  'Altavoz: si ven una luz que se mueve despacio, es un satélite. Si se mueve rápido, es el dron de alguien.',
  'Altavoz: hace cinco grados bajo cero. Las frazadas de recepción no se devuelven mojadas.',
  'Altavoz: por favor, luces rojas en el sendero. La luz blanca nos deja a todos ciegos un rato.',
  'Altavoz: les habla Rogelio. Si alguien encuentra un gorro con orejas de llama, es mío.',
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

const NOT_SOLID = new Set(['hammock']);
const TALL = new Set(['booth', 'caravan', 'shed', 'showers', 'hut', 'telescope', 'boulder', 'tree', 'cardon', 'lightpole']);
// How high you stand after jumping onto something (Space).
const TOPS = { foldtable: 0.75, radiotable: 0.8, campchair: 0.45, generator: 1.0, log: 0.45, cooktable: 0.92, stove: 0.95, hay: 0.55, rock: 0.55, obsdesk: 0.76, crate: 0.45, bucket: 0.4, stall: 0.8, bench: 0.45, car: 1.45, campfire: 0.3, motor: 0.9 };
export function topOf(item) { return TOPS[item.type] ?? null; }

export function cameraBlockers() {
  return [...WALLS.filter((w) => w[4] !== 'rail').map(wallBox), ...FURNITURE.filter((f) => TALL.has(f.type) && !['tree', 'cardon', 'lightpole'].includes(f.type)).map(footprint)];
}

function scenePeople() {
  return SCENES.flatMap((s) => [s.npc, ...(s.extras ?? [])]);
}
export function solidsFor() {
  const walls = WALLS.map((w) => ({ ...wallBox(w), prop: w[4] }));
  const things = FURNITURE.filter((f) => f.solid !== false && !NOT_SOLID.has(f.type)).map((f) => ({ ...footprint(f), ...(topOf(f) != null ? { top: topOf(f) } : {}), prop: f.type }));
  const people = scenePeople().map((p) => ({ ...box(p.x - 0.3, p.z - 0.3, p.x + 0.3, p.z + 0.3), person: true }));
  return [...walls, ...things, ...people];
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
  { id: 'cardon', x: -8, z: 32.4, r: 1.3, title: 'El cardón más viejo', intro: 'Tiene más de trescientos años y crece un centímetro por año.', themes: ['naturaleza', 'tiempo'] },
  { id: 'cartel', x: 8.6, z: 47.6, r: 1.2, title: 'El cartel de bienvenida', intro: '«Camping Los Cardones · 3600 m · Aquí la noche es de todos».', themes: ['viaje', 'noche'] },
  { id: 'puerta-cupula', x: -25, z: -20.8, r: 1.3, title: 'La puerta del observatorio', intro: 'Una placa dice: «Cometa Ledesma, descubierto en 1966».', themes: ['historia', 'aventura'] },
  { id: 'orilla', x: 18.2, z: -38.6, r: 1.3, title: 'La orilla del salar', intro: 'Una costra blanca que cruje como pan tostado hasta el horizonte.', themes: ['naturaleza', 'soledad'] },
  { id: 'via-lactea', x: -6.4, z: -68.4, r: 1.3, title: 'La Vía Láctea', intro: 'Desde aquí se ve como una nube de leche derramada sobre el cielo.', themes: ['noche', 'espiritu'] },
];
