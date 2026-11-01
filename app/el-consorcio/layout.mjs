// El consorcio · Edificio Las Glicinas as plain data: the planta baja with
// the street door, the hall and the patio; seven pisos with the same palier
// (four flats A–D around the elevator and the stairs); and the terrace with
// the clotheslines, the barbecue and the chairs of the meeting. Units are
// metres: x grows east, z grows south (the street), y is up; a heading of 0
// faces +z. The renderer (edificio3d.ts, World3D.tsx) only draws what is
// here, so movement, the circles and «nobody inside an object» can be tested
// without WebGL.
import { STORY } from './story.mjs';

export const FLOOR_H = 3.6;
export const CEILING = 3.2;
export const WALL = 0.25;

const FLAT = { minX: -12, maxX: 12, minZ: -10, maxZ: 10 };
const PISO = (n, sub) => ({ id: n, name: `${n}.° piso`, sub, y: n * FLOOR_H, bounds: { ...FLAT } });
export const FLOORS = [
  { id: 0, name: 'Planta baja', sub: 'Vereda · hall · buzones · patio', y: 0, bounds: { ...FLAT, maxZ: 14 } },
  PISO(1, 'Consultorio del 1.° B · la batería del 1.° C'),
  PISO(2, 'La gotera del 2.° A · los gatos del 2.° D'),
  PISO(3, 'Teletrabajo en el 3.° A · turistas del 3.° C'),
  PISO(4, 'Tu departamento: 4.° B · el tango del 4.° C'),
  PISO(5, 'Cumpleaños en el 5.° D · el ataúd del 5.° A'),
  PISO(6, 'El administrador · la herencia del 6.° B'),
  PISO(7, 'El vecino del 7.° D · la obra del 7.° A'),
  { id: 8, name: 'Terraza', sub: 'Sogas · parrilla · asamblea de las 21:00', y: 8 * FLOOR_H, bounds: { ...FLAT } },
];
export const FLOOR_IDS = FLOORS.map((f) => f.id);
export const floorById = (id) => FLOORS.find((f) => f.id === id) ?? FLOORS[0];
export const FLOOR_LABEL = { 0: 'PB', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: 'T' };
export const OPEN_AIR = (floor, x, z) => floor === 8 || (floor === 0 && (z > 10 || (x > 4 && z < -2.5)));

// You arrive on the sidewalk with your moving van, facing the street door.
export const SPAWN = { floor: 0, x: 0, z: 12.9, heading: Math.PI };
// The elevator (a 1958 cage with a folding grille) and the stairs share the
// core in the middle of every palier, on the north side.
export const ELEVATOR = { x: -2.2, z: -1.3, radius: 0.85, doorX: -2.2, wallZ: -2.5 };
export const ELEVATOR_ARRIVAL = { x: -2.2, z: -0.1, heading: 0 };
export const STAIRS = { x: 2.4, z: -1.5, radius: 0.8 };
export const STAIRS_ARRIVAL = { x: 2.4, z: -0.3, heading: 0 };

// Which flats are open on each floor (the door opens as you come close and
// the flat is furnished inside); the rest stay closed with their door.
export const OPEN_FLATS = {
  1: ['B', 'C'], 2: ['A', 'D'], 3: ['A'], 4: ['B', 'C'], 5: ['A', 'D'], 6: ['B'], 7: ['A'],
};
const FLAT_BOX = { A: [-12, -10, -4, -2.5], B: [4, -10, 12, -2.5], C: [-12, 2.5, 0, 10], D: [0, 2.5, 12, 10] };
const FLAT_DOOR = { A: { x: -8, z: -2.5 }, B: { x: 8, z: -2.5 }, C: { x: -6, z: 2.5 }, D: { x: 6, z: 2.5 } };
export const flatAt = (floor, x, z) => (OPEN_FLATS[floor] ?? []).find((f) => { const [x0, z0, x1, z1] = FLAT_BOX[f]; return x > x0 && x < x1 && z > z0 && z < z1; }) ?? null;

// ------------------------------------------------------------------ sectors
const S = (floor, id, name, x0, z0, x1, z1, sound, light = '#fff2dc') => ({ floor, id, name, x0, z0, x1, z1, sound, light });
const FLAT_SECTOR = {
  1: { B: ['consultorio', 'Consultorio del 1.° B', 'office', '#f4eadc'], C: ['bateria', 'Departamento 1.° C', 'drums', '#e8e0ff'] },
  2: { A: ['gotera', 'Departamento 2.° A', 'drip', '#eef2f4'], D: ['gatos', 'Departamento 2.° D', 'cats', '#fff0d8'] },
  3: { A: ['teletrabajo', 'Departamento 3.° A', 'office', '#e6f0ff'] },
  4: { B: ['mudanza', 'Tu departamento: 4.° B', 'empty', '#fff6e8'], C: ['tango', 'Departamento 4.° C', 'tango', '#ffe2b8'] },
  5: { A: ['ataud', 'Departamento 5.° A', 'flat', '#f0e6d6'], D: ['cumple', 'Departamento 5.° D', 'party', '#ffe8f4'] },
  6: { B: ['herencia', 'Departamento 6.° B', 'flat', '#f2ead8'] },
  7: { A: ['obra', 'Departamento 7.° A', 'works', '#f4f0e8'] },
};
export const SECTORS = [
  S(0, 'vereda', 'Vereda de Medrano', -12, 10, 12, 14, 'street'),
  S(0, 'hall', 'Hall y buzones', -4, 2.5, 4, 10, 'hall'),
  S(0, 'patio', 'Patio interno', 4, -10, 12, -2.5, 'patio'),
  S(0, 'palier', 'Pasillo de planta baja', -12, -2.5, 12, 2.5, 'corridor'),
  ...Object.entries(FLAT_SECTOR).flatMap(([floor, flats]) => Object.entries(flats).map(([f, [id, name, sound, light]]) => S(Number(floor), id, name, ...FLAT_BOX[f], sound, light))),
  ...[1, 2, 3, 4, 5, 6, 7].map((n) => S(n, 'palier', `Palier del ${['', 'primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto', 'séptimo'][n]}`, -12, -2.5, 12, 2.5, 'corridor')),
  S(8, 'nucleo', 'Sala de máquinas', -4, -10, 4, -2.5, 'terrace'),
  S(8, 'sogas', 'Terraza: las sogas', -12, -10, -4, 10, 'terrace'),
  S(8, 'asamblea', 'Terraza: la asamblea', -4, -2.5, 12, 10, 'terrace'),
  S(8, 'terraza', 'Terraza', -12, -10, 12, 10, 'terrace'),
];
export function sectorAt(floor, x, z) {
  return SECTORS.find((s) => s.floor === floor && x >= s.x0 && x <= s.x1 && z >= s.z0 && z <= s.z1) ?? null;
}

// ------------------------------------------------------------------ walls
// Segments [x0, z0, x1, z1]; a fifth value: 'glass' (a window or a glass
// door), 'low' (the terrace parapet, chest high). Openings are gaps.
const NORTH = [[-12, -10, -9.5, -10], [-9.5, -10, -6.5, -10, 'glass'], [-6.5, -10, 4, -10], [4, -10, 6.5, -10], [6.5, -10, 9.5, -10, 'glass'], [9.5, -10, 12, -10]];
const SOUTH = [[-12, 10, -10, 10], [-10, 10, -7, 10, 'glass'], [-7, 10, -5, 10], [-5, 10, -2, 10, 'glass'], [-2, 10, 2, 10], [2, 10, 5, 10, 'glass'], [5, 10, 7, 10], [7, 10, 10, 10, 'glass'], [10, 10, 12, 10]];
const SIDES = [[-12, -10, -12, 10], [12, -10, 12, 10]];
// The core: the shaft (west) and the stairwell (east) behind the palier.
const CORE = [[-4, -10, -4, -2.5], [4, -10, 4, -2.5], [-0.2, -10, -0.2, -2.5], [-4, -2.5, -2.8, -2.5], [-1.6, -2.5, 1.4, -2.5], [3.4, -2.5, 4, -2.5]];
function palierWalls(floor) {
  const open = OPEN_FLATS[floor] ?? [];
  const north = (f, x0, x1) => {
    const d = FLAT_DOOR[f].x;
    return open.includes(f) ? [[x0, -2.5, d - 0.55, -2.5], [d + 0.55, -2.5, x1, -2.5]] : [[x0, -2.5, x1, -2.5]];
  };
  const south = (f, x0, x1) => {
    const d = FLAT_DOOR[f].x;
    return open.includes(f) ? [[x0, 2.5, d - 0.55, 2.5], [d + 0.55, 2.5, x1, 2.5]] : [[x0, 2.5, x1, 2.5]];
  };
  return [...SIDES, ...NORTH, ...SOUTH, ...CORE, ...north('A', -12, -4), ...north('B', 4, 12), ...south('C', -12, 0), ...south('D', 0, 12), [0, 2.5, 0, 10]];
}
export const WALLS = {
  0: [
    ...SIDES, ...NORTH, ...CORE,
    // The street front: the iron and glass door in the middle of the hall.
    [-12, 10, -1.2, 10], [1.2, 10, 12, 10],
    // The portería (west) looks onto the hall through a window; the meter room (east) is locked.
    [-4, 2.5, -4, 4], [-4, 4, -4, 8, 'glass'], [-4, 8, -4, 10], [4, 2.5, 4, 10], [-12, 2.5, -4, 2.5], [4, 2.5, 12, 2.5],
    // The encargado's flat (north-west, closed) and the glass door to the patio.
    [-12, -2.5, -4, -2.5], [4, -2.5, 7, -2.5], [7, -2.5, 9, -2.5, 'glass-door'], [9, -2.5, 12, -2.5],
  ],
  ...Object.fromEntries([1, 2, 3, 4, 5, 6, 7].map((n) => [n, palierWalls(n)])),
  8: [
    [-12, -10, 12, -10, 'low'], [-12, -10, -12, 10, 'low'], [12, -10, 12, 10, 'low'], [-12, 10, 12, 10, 'low'],
    // The machine room and the stair house, with the water tanks on top.
    [-4, -10, -4, -2.5], [4, -10, 4, -2.5], [-4, -2.5, -2.8, -2.5], [-1.6, -2.5, 1.4, -2.5], [3.4, -2.5, 4, -2.5],
  ],
};

// Doors that open by themselves when someone comes close. `axis` is the
// wall direction; `flat` names the flat behind (its number plate).
export const DOORS = {
  0: [
    { x: 0, z: 10, w: 2.4, axis: 'x', kind: 'iron', label: 'LAS GLICINAS · 1417' },
    { x: 8, z: -2.5, w: 2, axis: 'x', kind: 'slide', label: 'PATIO' },
  ],
  ...Object.fromEntries([1, 2, 3, 4, 5, 6, 7].map((n) => [n, (OPEN_FLATS[n] ?? []).map((f) => ({ ...FLAT_DOOR[f], w: 1.1, axis: 'x', kind: 'swing', flat: `${n}.° ${f}` }))])),
  8: [],
};
// Closed flat doors: wood on the wall with the number plate, not a gap.
export const CLOSED_DOORS = Object.fromEntries([1, 2, 3, 4, 5, 6, 7].map((n) => [n, ['A', 'B', 'C', 'D'].filter((f) => !(OPEN_FLATS[n] ?? []).includes(f)).map((f) => ({ ...FLAT_DOOR[f], flat: `${n}.° ${f}` }))]));
CLOSED_DOORS[0] = [{ x: -8, z: -2.5, flat: 'ENCARGADO' }, { x: 8, z: 2.5, flat: 'MEDIDORES' }];

// ------------------------------------------------------------------ furniture
// { type, x, z, w, d, rot } — w along x, d along z before `rot` quarter turns
// (rot 0: the front of a sofa or a chair faces +z). `solid: false` for things
// you can walk over or through.
const F = (type, x, z, w, d, rot = 0, extra = {}) => ({ type, x, z, w, d, rot, ...extra });
const plant = (x, z) => F('plant', x, z, 0.7, 0.7);
const rug = (x, z, w, d) => F('rug', x, z, w, d, 0, { solid: false });
// Every palier: a ceiling lamp, the doormats, a plant by the elevator.
const palier = (n) => [plant(-4.6, -1.9), F('lamp-ceiling', 0, 0, 0.6, 0.6, 0, { solid: false }), F('notice', -0.6, -2.36, 1.2, 0.08, 0, { solid: false }),
  ...['A', 'B', 'C', 'D'].map((f) => F('doormat', FLAT_DOOR[f].x, FLAT_DOOR[f].z + (FLAT_DOOR[f].z < 0 ? 0.45 : -0.45), 1.0, 0.5, 0, { solid: false, label: `${n}${f}` }))];
export const FURNITURE = {
  0: [
    // The sidewalk: the plane tree, the bins, your boxes, the doorbell panel.
    F('tree', -8.6, 12.6, 1.0, 1.0), F('tree', 8.6, 12.6, 1.0, 1.0), F('bins', 10.6, 11.0, 1.6, 0.7),
    F('boxes', -3.4, 11.2, 1.4, 1.0), F('boxes', -4.8, 11.4, 1.0, 0.9), F('mattress-up', -5.8, 10.5, 1.4, 0.3),
    F('intercom', 1.7, 10.16, 0.3, 0.06, 0, { solid: false }), F('kerb', 0, 13.95, 24, 0.12),
    // The hall: marble, the mailboxes, the portería window, a bench, the notice board.
    F('mailboxes', 3.72, 5.6, 3.0, 0.3, 3), F('bench', -3.6, 5.2, 2.0, 0.5, 1), F('notice', 3.82, 8.4, 1.2, 0.08, 3, { solid: false }),
    F('porteria', -4.8, 6, 3.4, 0.8, 1), F('bike', 1.2, 8.4, 0.5, 1.7), plant(-3.4, 9.3), plant(3.4, 9.3), rug(0, 6, 2.2, 5),
    // The corridor and the patio: pots, bicycles, the drain, a garden chair.
    plant(-11.4, -1.9), plant(11.4, 1.9), F('lamp-ceiling', 0, 0, 0.6, 0.6, 0, { solid: false }),
    F('planter', 11.3, -6.2, 0.9, 6), F('bikes', 5.2, -8.8, 2.8, 1.1), F('chair', 9.4, -4.4, 0.5, 0.5, 2), plant(4.8, -3.4), F('drain', 8, -6.2, 0.4, 0.4, 0, { solid: false }),
  ],
  1: [...palier(1),
    // 1.° B · the consultorio: the couch along the east wall, her armchair at its head, books everywhere.
    F('divan', 10.9, -6.6, 0.85, 2.0), F('armchair', 10.6, -8.95, 0.8, 0.8, 0), F('bookshelf', 6.4, -9.7, 3.4, 0.4), F('bookshelf', 4.35, -6.6, 3.0, 0.4, 1),
    F('desk', 6.2, -5.4, 1.6, 0.7), F('chair', 6.2, -6.0, 0.5, 0.5, 0), F('tissues', 9.6, -6.2, 0.4, 0.4), rug(9.4, -7.2, 2.6, 2.6), plant(11.4, -3.2), F('diploma', 7.4, -9.86, 0.9, 0.05, 0, { solid: false }),
    F('chairs', 5.4, -3.2, 1.4, 0.5, 2),
    // 1.° C · Thiago's room: the drum kit, the amplifier, posters, an unmade bed.
    F('drums', -6.8, 6.6, 2.2, 1.8), F('amp', -9.2, 5.2, 0.7, 0.5), F('bed', -10.4, 8.6, 1.3, 2.0, 1), F('posters', -6, 9.86, 3, 0.05, 0, { solid: false }), F('egg-foam', -2, 9.86, 2.4, 0.05, 0, { solid: false }), rug(-6.8, 6.6, 3, 2.6),
  ],
  2: [...palier(2),
    // 2.° A · the leak: buckets under the stain, towels, the sofa pulled away from the wall.
    F('bucket', -8.6, -7.4, 0.42, 0.42), F('bucket', -10.4, -5.2, 0.42, 0.42), F('bucket', -6.2, -8.6, 0.42, 0.42), F('towels', -9.4, -8.8, 1.2, 0.5, 0, { solid: false }),
    F('sofa', -10.2, -9.2, 2.4, 0.9, 0), F('kitchen', -4.6, -6.6, 5.0, 0.6, 3), F('table-dining', -10.4, -4.2, 1.4, 0.9), F('stain', -8.6, -7.2, 3, 3, 0, { solid: false }),
    // 2.° D · fourteen cats: the cat tree, the litter boxes, the armchair, the kitchen sink Gastón is fighting.
    F('armchair', 8.6, 8.95, 0.8, 0.8, 2), F('cattree', 10.9, 3.6, 0.9, 0.9), F('cattree', 1.3, 6.6, 0.9, 0.9), F('litter', 11.3, 8.6, 0.7, 0.5), F('litter', 11.3, 7.6, 0.7, 0.5),
    F('kitchen', 3.2, 9.4, 4.4, 0.6, 2), F('sofa', 8.2, 5.2, 2.2, 0.9, 2), F('coffeetable', 8.2, 6.6, 1.0, 0.5), rug(8, 6.4, 3.4, 2.4), F('cats', 0, 0, 0, 0, 0, { solid: false }),
  ],
  3: [...palier(3),
    // 3.° A · the home office: three screens, the ring light, and the bathroom door wide open.
    F('desk', -10.6, -6.8, 2.4, 0.8, 1), F('gamingchair', -9.75, -6.8, 0.6, 0.6, 1), F('ringlight', -10.8, -8.6, 0.5, 0.5), F('bathtub', -5.2, -8.6, 1.6, 0.8),
    F('bed', -10.4, -3.6, 2.0, 1.4, 0), F('beanbag', -6.4, -4.6, 0.8, 0.8), F('bathwall', -6.0, -7.4, 4.0, 0.15), F('puddle', -6.6, -6.4, 2.6, 1.6, 0, { solid: false }),
    // The palier: the lockbox of the rented flat.
    F('lockbox', -6.7, 2.36, 0.25, 0.08, 0, { solid: false }),
  ],
  4: [...palier(4),
    // 4.° B · your flat: boxes, a mattress on the floor, one bulb, the inventory.
    F('boxes', 10.6, -8.6, 1.4, 1.2), F('boxes', 6.0, -8.8, 1.2, 1.0), F('boxes', 11.0, -4.2, 1.0, 1.2), F('mattress', 7.2, -6.8, 1.4, 1.9, 0, { top: 0.22 }),
    F('bulb', 8, -6, 0.3, 0.3, 0, { solid: false }), F('ladder', 4.8, -5.2, 0.5, 0.9),
    // 4.° C · Don Washington: the record player, the mate on the table, the photos of his wife.
    F('gramophone', -11.2, 4.0, 0.7, 0.6), F('table-dining', -9.6, 7.4, 1.4, 0.9), F('chair', -9.6, 8.25, 0.5, 0.5, 2), F('chair', -9.6, 6.55, 0.5, 0.5, 0),
    F('sofa', -2.6, 8.9, 2.4, 0.9, 2), F('photos', -6, 9.86, 3, 0.05, 0, { solid: false }), F('bookshelf', -0.45, 5.4, 3.0, 0.4, 3), rug(-6, 6.4, 3.6, 2.6), F('cage', -11.3, 8.8, 0.5, 0.5),
  ],
  5: [...palier(5),
    // 5.° A · the coffin bought in instalments, on its trestles, next to the armchair.
    F('coffin', -8.4, -8.6, 2.1, 0.75), F('armchair', -10.8, -6.4, 0.8, 0.8, 1), F('tv', -4.5, -6.4, 1.4, 0.3, 3), F('sidetable', -10.9, -5.2, 0.5, 0.5),
    F('flowers-vase', -6.6, -9.2, 0.4, 0.4), F('cross', -8.4, -9.86, 0.4, 0.05, 0, { solid: false }), rug(-8.6, -5.6, 3, 2.2),
    // 5.° D · the birthday: balloons, the table with the cake, the garland.
    F('partytable', 9.4, 8.6, 2.6, 1.0), F('balloons', 11.2, 3.4, 0.6, 0.6), F('balloons', 1.0, 9.2, 0.6, 0.6), F('garland', 6, 9.86, 10, 0.05, 0, { solid: false }),
    F('sofa', 0.75, 5.6, 2.2, 0.9, 1), F('gifts', 3.4, 9.2, 1.0, 0.7), rug(6.4, 6.4, 4, 3),
  ],
  6: [...palier(6),
    // 6.° B · the aunt's flat: the piano, her portrait, everything with a sticky note.
    F('piano', 10.6, -9.2, 1.6, 0.7), F('portrait', 7.6, -9.86, 1.0, 0.05, 0, { solid: false }), F('boxes', 5.2, -8.8, 1.2, 1.0), F('cabinet', 4.45, -5.8, 1.8, 0.6, 1),
    F('table-dining', 8.2, -7.0, 1.4, 0.9), F('lamp-floor', 11.4, -4.0, 0.4, 0.4), F('boxes', 11.2, -6.4, 0.9, 1.0), rug(8.2, -6, 3, 2.4),
  ],
  7: [...palier(7),
    // 7.° A · the secret works: rubble, cement, a jacuzzi where the kitchen was, a wall half gone.
    F('jacuzzi', -8.6, -8.4, 2.2, 2.0), F('rubble', -11.0, -4.0, 1.4, 1.2), F('cementbags', -5.0, -9.2, 1.2, 0.8), F('wheelbarrow', -5.0, -5.6, 0.6, 1.3),
    F('halfwall', -11.0, -7.0, 1.8, 0.2), F('ladder', -11.4, -8.6, 0.5, 0.9), F('tools', -6.2, -3.4, 1.0, 0.5),
    // The palier: the note under the door of 7.° D, the food Lili leaves.
    F('tupper', 6.5, 2.0, 0.3, 0.3, 0, { solid: false }), F('notepaper', 5.6, 2.2, 0.3, 0.2, 0, { solid: false }),
  ],
  8: [
    // The machine room and the stair house: the water tanks, the antenna.
    F('tanks', 0, -6.4, 7.6, 7.2, 0, { solid: false }), F('antenna', 10.6, -8.6, 0.4, 0.4),
    // The clotheslines (west), Doña Hilda's basket, Kevin's barbecue in the corner.
    F('clothesline', -8, -6.4, 7.6, 0.2), F('clothesline', -8, -3.6, 7.6, 0.2), F('clothesline', -8, -0.8, 7.6, 0.2),
    F('basket', -6.4, 1.4, 0.6, 0.45), F('parrilla', -10.9, 8.6, 1.6, 1.0), F('woodpile', -11.4, 6.6, 0.6, 1.4), F('table-dining', -8.6, 8.4, 1.4, 0.9),
    // The meeting: the folding table, rows of plastic chairs, the string lights.
    F('foldtable', 6, -0.6, 2.2, 0.8), F('chairs', 3.8, 2.8, 2.8, 0.5, 2), F('chairs', 8.2, 2.8, 2.8, 0.5, 2), F('chairs', 3.8, 4.6, 2.8, 0.5, 2), F('chairs', 8.2, 4.6, 2.8, 0.5, 2),
    F('chairs', 3.8, 6.4, 2.8, 0.5, 2), F('chairs', 8.2, 6.4, 2.8, 0.5, 2), F('lights', 4, 3, 16, 12, 0, { solid: false }), plant(11.3, 9.3), plant(-3.4, 9.3), plant(11.3, -1.6),
  ],
};

// ------------------------------------------------------------------ scenes
const L = (skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras = [], extra = {}) =>
  ({ skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras, ...extra });
const RAMON = L('#b9825c', 'old', 'm', 'short', '#c8c8c8', 'uniform', '#3a4a6a', 'pants', '#2a2e3a', ['mustache'], { seed: 11 });
const FREDDY = L('#a8724e', 'adult', 'm', 'cap', '#120d0b', 'tshirt', '#2a6a4a', 'jeans', '#24304a', [], { seed: 12 });
const ELVIRA = L('#f0d6c0', 'old', 'f', 'curly', '#d8d0e0', 'sweater', '#7a3a5a', 'skirt', '#2a2a30', ['glasses', 'earrings'], { seed: 21 });
const BARRIONUEVO = L('#d8a57e', 'adult', 'm', 'bald', '#5a4a3a', 'suit', '#3a3a40', 'pants', '#2a2a30', ['glasses', 'mustache'], { seed: 131 });

const PLACES = {
  llegada: { spot: { x: 0, z: 11.6 }, npc: { x: 1.5, z: 12.5, heading: -2.2 }, pose: 'sweep', mood: 'smile', look: RAMON,
    extras: [{ x: -1.9, z: 12.2, heading: 2.3, pose: 'carry', mood: 'worried', look: FREDDY }] },
  buzones: { spot: { x: 1.8, z: 5.0 }, npc: { x: 3.05, z: 6.2, heading: -1.9 }, pose: 'read', mood: 'surprised', look: ELVIRA,
    extras: [{ x: 0.4, z: 6.9, heading: 2.6, pose: 'phone', mood: 'neutral', look: L('#c99468', 'young', 'm', 'cap', '#2a1a12', 'jacket', '#e05a1a', 'jeans', '#1f2840', ['backpack'], { seed: 22 }) }] },
  consultorio: { spot: { x: 8.6, z: -4.6 }, npc: { x: 10.6, z: -8.83, heading: 0, seat: true }, pose: 'sit', mood: 'neutral', look: L('#f0d6c0', 'adult', 'f', 'bob', '#3a2416', 'sweater', '#2a2a2a', 'pants', '#2a2a30', ['glasses', 'earrings'], { seed: 31 }),
    extras: [{ x: 10.9, z: -6.6, heading: 0, pose: 'lie', lying: true, y: 0.42, mood: 'sad', look: L('#d8a57e', 'adult', 'm', 'short', '#2a1a12', 'shirt', '#5a7a9a', 'pants', '#24304a', [], { seed: 32 }) }] },
  bateria: { spot: { x: -6, z: 0.4 }, npc: { x: -7.3, z: 1.6, heading: 2.6 }, pose: 'arms', mood: 'furious', look: L('#c48f69', 'adult', 'f', 'ponytail', '#2a1a12', 'apron', '#3a7a6a', 'jeans', '#24304a', ['earrings'], { seed: 41 }),
    extras: [{ x: -4.9, z: 1.7, heading: -2.4, pose: 'stand', mood: 'sleepy', look: L('#c48f69', 'teen', 'm', 'curly', '#120d0b', 'hoodie', '#141418', 'jeans', '#1f2840', ['headphones'], { seed: 42 }) }] },
  gotera: { spot: { x: -8, z: -4.0 }, npc: { x: -9.6, z: -6.2, heading: 0.6 }, pose: 'carry', mood: 'angry', look: L('#b9825c', 'adult', 'm', 'short', '#120d0b', 'tshirt', '#c8301e', 'pants', '#3a3a3a', [], { seed: 51 }),
    extras: [{ x: -6.6, z: -6.2, heading: -0.7, pose: 'arms', mood: 'worried', look: L('#b9825c', 'adult', 'f', 'braids', '#120d0b', 'sweater', '#e0a020', 'skirt', '#2a2a30', ['earrings'], { seed: 52 }) }] },
  gatos: { spot: { x: 6.2, z: 4.4 }, npc: { x: 8.6, z: 8.83, heading: Math.PI, seat: true }, pose: 'sit', mood: 'smitten', look: L('#e8c0a0', 'old', 'f', 'bun', '#e8e8e8', 'dress', '#6a4a8a', null, null, ['glasses'], { seed: 61 }),
    extras: [{ x: 3.4, z: 8.45, heading: Math.PI, pose: 'crouch', mood: 'pain', look: L('#c99468', 'adult', 'm', 'short', '#2a1a12', 'uniform', '#2a5a8a', 'pants', '#2a5a8a', ['beard'], { seed: 62 }) }] },
  teletrabajo: { spot: { x: -8, z: -4.4 }, npc: { x: -9.85, z: -6.8, heading: -Math.PI / 2, seat: true }, pose: 'sit', mood: 'scared', look: L('#c99468', 'young', 'f', 'long', '#1a1210', 'sweater', '#e88ab0', 'pants', '#f0b8d0', ['headphones', 'glasses'], { seed: 71 }),
    extras: [{ x: -7.0, z: -5.6, heading: -2.4, pose: 'carry', mood: 'furious', look: L('#b9825c', 'adult', 'm', 'short', '#120d0b', 'tshirt', '#c8301e', 'pants', '#3a3a3a', [], { seed: 51 }) }] },
  turistas: { spot: { x: -4.2, z: 0.2 }, npc: { x: -5.7, z: 1.6, heading: 2.2 }, pose: 'phone', mood: 'worried', look: L('#f0d6c0', 'young', 'm', 'short', '#3a2416', 'jacket', '#2a4a7a', 'shorts', '#c8b890', ['backpack'], { seed: 81 }),
    extras: [{ x: -7.0, z: 1.2, heading: 1.8, pose: 'arms', mood: 'angry', look: L('#f0d6c0', 'young', 'f', 'ponytail', '#7a3a1e', 'tshirt', '#f4f0ea', 'shorts', '#2a4a6a', ['suitcase'], { seed: 82 }) }] },
  mudanza: { spot: { x: 8.4, z: -4.4 }, npc: { x: 10.0, z: -6.4, heading: -0.6 }, pose: 'read', mood: 'neutral', look: L('#e8c0a0', 'old', 'f', 'bun', '#9a9a9a', 'coat', '#3a3a5a', 'skirt', '#2a2a30', ['glasses', 'earrings'], { seed: 91 }),
    extras: [{ x: 5.6, z: -6.0, heading: 0.9, pose: 'carry', mood: 'sleepy', look: FREDDY }] },
  tango: { spot: { x: -6, z: 4.4 }, npc: { x: -6.6, z: 6.8, heading: 0.3 }, pose: 'dance', mood: 'love', look: L('#e2b896', 'elderly', 'm', 'short', '#e8e8e8', 'suit', '#2a2a2a', 'pants', '#2a2a2a', ['mustache', 'hat'], { seed: 101 }) },
  cumple: { spot: { x: 6, z: 4.2 }, npc: { x: 7.8, z: 5.9, heading: -2.6 }, pose: 'arms', mood: 'worried', look: L('#c48f69', 'adult', 'f', 'long', '#2a1a12', 'dress', '#e0408a', null, null, ['earrings'], { seed: 111 }),
    extras: [{ x: 4.0, z: 6.4, heading: 2.4, pose: 'wave', mood: 'laugh', look: L('#a8724e', 'adult', 'm', 'afro', '#d8301e', 'suit', '#f0c020', 'pants', '#2a6ac8', ['hat'], { seed: 112 }) }] },
  ataud: { spot: { x: -8, z: -4.0 }, npc: { x: -10.68, z: -6.4, heading: Math.PI / 2, seat: true }, pose: 'sit', mood: 'laugh', look: L('#c48f69', 'elderly', 'm', 'bald', '#e8e8e8', 'sweater', '#6a5a3a', 'pants', '#3a3a3a', ['glasses', 'mustache'], { seed: 121 }),
    extras: [{ x: -6.8, z: -5.8, heading: -2.0, pose: 'arms', mood: 'worried', look: L('#a8724e', 'adult', 'f', 'bun', '#120d0b', 'scrubs', '#7ab0c8', 'pants', '#7ab0c8', [], { seed: 122 }) }] },
  administrador: { spot: { x: 6.0, z: 0.2 }, npc: { x: 7.4, z: -1.2, heading: -2.4 }, pose: 'read', mood: 'smile', look: BARRIONUEVO,
    extras: [{ x: 7.8, z: 1.4, heading: -2.0, pose: 'arms', mood: 'sleepy', look: RAMON }] },
  herencia: { spot: { x: 8.2, z: -4.2 }, npc: { x: 6.6, z: -5.9, heading: 0.8 }, pose: 'point', mood: 'furious', look: L('#c99468', 'adult', 'f', 'bob', '#7a3a1e', 'coat', '#8a1a3a', 'pants', '#2a2a30', ['earrings', 'glasses'], { seed: 141 }),
    extras: [{ x: 9.8, z: -5.9, heading: -0.8, pose: 'arms', mood: 'angry', look: L('#c99468', 'adult', 'm', 'short', '#3a2416', 'shirt', '#e8eef4', 'pants', '#2a3040', ['beard'], { seed: 142 }) }] },
  misterio: { spot: { x: 4.6, z: 0.2 }, npc: { x: 6.0, z: 1.75, heading: Math.PI }, pose: 'stand', mood: 'scared', look: L('#f4e2d4', 'adult', 'm', 'curly', '#3a3a3a', 'coat', '#7a2a2a', 'pants', '#3a3a3a', ['beard', 'glasses'], { seed: 151 }),
    extras: [{ x: 3.2, z: 1.5, heading: 2.2, pose: 'carry', mood: 'smile', look: L('#8d5a3c', 'young', 'f', 'afro', '#120d0b', 'sweater', '#2a8a6a', 'jeans', '#24304a', ['earrings'], { seed: 152 }) }] },
  obra: { spot: { x: -8, z: -4.2 }, npc: { x: -6.6, z: -6.0, heading: -0.7 }, pose: 'point', mood: 'smile', look: L('#c48f69', 'adult', 'm', 'buzz', '#120d0b', 'tshirt', '#141418', 'jeans', '#1f2840', [], { seed: 161 }),
    extras: [{ x: -9.8, z: -6.1, heading: 0.7, pose: 'arms', mood: 'sleepy', look: L('#a8724e', 'old', 'm', 'cap', '#9a9a9a', 'shirt', '#c8b890', 'pants', '#5a5040', ['mustache'], { seed: 162 }) }] },
  sogas: { spot: { x: -7.2, z: 3.4 }, npc: { x: -8.8, z: 1.9, heading: 0.9 }, pose: 'point', mood: 'angry', look: L('#a8724e', 'old', 'f', 'braids', '#3a3a3a', 'apron', '#c84a2a', 'skirt', '#2a3a5a', ['earrings'], { seed: 171 }),
    extras: [{ x: -10.0, z: 7.6, heading: -Math.PI / 2, pose: 'cook', mood: 'smile', look: L('#c99468', 'adult', 'm', 'cap', '#120d0b', 'tshirt', '#f0c020', 'shorts', '#2a3040', ['beard'], { seed: 172 }) }] },
  asamblea: { spot: { x: 6, z: 1.0 }, npc: { x: 6, z: -1.5, heading: 0 }, pose: 'read', mood: 'neutral', look: BARRIONUEVO,
    extras: [{ x: 4.9, z: 2.68, heading: Math.PI, pose: 'sit', seat: true, mood: 'angry', look: ELVIRA }, { x: 8.8, z: 0.4, heading: -2.4, pose: 'arms', mood: 'smile', look: RAMON }] },
};

export const SCENES = STORY.map((story) => ({ ...story, ...PLACES[story.id] }));
export const SCENE_IDS = SCENES.map((s) => s.id);
export const sceneById = (id) => SCENES.find((s) => s.id === id);
export const SPOT_RADIUS = 1.1;

// ------------------------------------------------------------------ life
// Neighbours who walk: up and down the palier, across the hall, the kids at
// the party. `path` is a loop of points; `pause` seconds at each one.
const T = (skin, age, body, hair, hairColor, top, topColor, bottom, bottomColor, extras = [], seed = 0) => L(skin, age, body, hair, hairColor, top, topColor, bottom, bottomColor, extras, { seed });
export const WALKERS = {
  0: [
    { look: T('#e2b896', 'adult', 'f', 'ponytail', '#3a2416', 'coat', '#3a6a8a', 'jeans', '#24304a', ['bag'], 901), path: [[-10, 13.4], [10, 13.4]], speed: 1.3, pause: 1 },
    { look: T('#8d5a3c', 'young', 'm', 'short', '#120d0b', 'hoodie', '#4a6a3a', 'jeans', '#121214', ['headphones'], 902), path: [[-1.2, 3.6], [-1.2, 1.4], [-10.4, 1.4], [-10.4, 0], [-1.2, 0]], speed: 1.2, pause: 2 },
  ],
  3: [{ look: T('#f0d6c0', 'young', 'f', 'bob', '#e0c070', 'tshirt', '#2a8a8a', 'shorts', '#2a2a30', [], 931), path: [[9.6, 1.6], [9.6, -1.6], [5.2, -1.6], [5.2, 1.6]], speed: 0.9, pause: 2 }],
  5: [
    { look: T('#c48f69', 'child', 'm', 'short', '#120d0b', 'tshirt', '#2a6ac8', 'shorts', '#2a2a30', [], 951), path: [[10.2, 3.6], [10.2, 7.0], [8.8, 7.0], [8.8, 3.6]], speed: 1.8 },
    { look: T('#e8c0a0', 'child', 'f', 'braids', '#3a2416', 'dress', '#f0c040', null, null, [], 952), path: [[1.6, 3.4], [3.0, 3.4], [3.0, 5.0], [1.6, 5.0]], speed: 1.6 },
  ],
  8: [{ look: T('#b9825c', 'adult', 'f', 'curly', '#120d0b', 'apron', '#3a7a4a', 'pants', '#2a2a2a', [], 981), path: [[-3.6, -0.4], [-3.6, 8.4], [-2.6, 8.4], [-2.6, -0.4]], speed: 0.9, pause: 2 }],
};

// Neighbours who stay put. You can talk to all of them (E): see vecinos.mjs.
export const CROWD = {
  0: [
    { x: -3.48, z: 4.6, heading: Math.PI / 2, pose: 'sit', seat: true, mood: 'sleepy' }, { x: 9.2, z: 11.4, heading: Math.PI, pose: 'phone', mood: 'worried' },
    { x: 9.8, z: -7.2, heading: -0.6, pose: 'read', mood: 'smile' },
  ],
  1: [{ x: 5.0, z: -3.32, heading: Math.PI, pose: 'sit', seat: true, mood: 'worried' }, { x: -10.6, z: -0.6, heading: Math.PI / 2, pose: 'stand', mood: 'angry' }],
  2: [{ x: 10.6, z: 0.8, heading: -Math.PI / 2, pose: 'phone', mood: 'smile' }],
  3: [{ x: 10.4, z: -1.2, heading: -2.2, pose: 'read', mood: 'neutral' }],
  4: [{ x: -10.6, z: 1.2, heading: Math.PI / 2, pose: 'arms', mood: 'smile' }],
  5: [{ x: 9.0, z: 7.85, heading: Math.PI, pose: 'stand', mood: 'laugh', child: true }, { x: 10.6, z: 7.85, heading: Math.PI, pose: 'stand', mood: 'smile', child: true }],
  6: [{ x: -10.4, z: -1.2, heading: Math.PI / 2, pose: 'phone', mood: 'worried' }],
  7: [{ x: -2.6, z: 1.6, heading: -2.6, pose: 'arms', mood: 'scared' }],
  8: [
    { x: 3.2, z: 2.68, heading: Math.PI, pose: 'sit', seat: true, mood: 'sleepy' }, { x: 8.8, z: 2.68, heading: Math.PI, pose: 'sit', seat: true, mood: 'angry' },
    { x: 7.6, z: 4.48, heading: Math.PI, pose: 'sit', seat: true, mood: 'smile' }, { x: 3.2, z: 6.28, heading: Math.PI, pose: 'sit', seat: true, mood: 'worried' },
    { x: 10.4, z: 8.6, heading: -2.4, pose: 'phone', mood: 'neutral' },
  ],
};

// Short lines people say as you walk past (shown as bubbles near them).
export const CHATTER = {
  0: ['¿Llegó el gas?', 'Ramón, el ascensor otra vez…', 'Buenas tardes, vecino.', '¿Usted es el nuevo del cuarto?', 'Hay olor a asado, ¿no?', 'Esta noche hay asamblea.'],
  1: ['Shhh, que la licenciada atiende.', 'Otra vez la batería…', '¿Quién dejó la bici en el palier?'],
  2: ['¡Miau!', 'Se moja todo, ¡todo!', 'Hay un gato en la escalera.'],
  3: ['¿Alguien vio al plomero?', '¿El wifi del edificio es gratis?', 'Hola, ¿hablas inglés?'],
  4: ['Bienvenido al edificio.', 'Esa caja pesa como un muerto.', 'Hoy hay tango, seguro.'],
  5: ['¡Feliz cumpleaños!', '¿Quién quiere torta?', 'Ese payaso me da miedo.'],
  6: ['Las expensas subieron otra vez.', 'El administrador nunca contesta.', '¿Ya vendieron el 6.° B?'],
  7: ['¿Escuchaste el martillo?', 'Dicen que el del 7.° D existe.', 'Acá arriba se ve todo Almagro.'],
  8: ['¿A qué hora empieza?', 'Yo voto que no.', 'Ese chori huele bien.', 'Traje mi propia silla.', 'Esto va para largo.'],
};

// The consorcio's WhatsApp group, a new message every minute or so.
export const ANNOUNCEMENTS = [
  'Administración: recordamos la asamblea extraordinaria de hoy a las 21:00 en la terraza. Tema único: el ascensor.',
  '1.° A: ¿Alguien sabe por qué el chico nuevo trae TANTAS cajas?',
  '2.° A: Sigue cayendo agua del techo. Adjunto foto. Y otra. Y un video.',
  '2.° D: Se perdió un gato gris. Responde a «Rulo». O a «Sardina».',
  'Encargado: por favor, no tiren la basura después de las 21. Gracias. Ramón.',
  '7.° A: No estoy haciendo ninguna obra. Ese ruido es mi televisor.',
  '5.° D: ¡Esta noche cumple seis años Benjamín! Perdón por el ruido.',
  '1.° B: Pido silencio de 18 a 20. Estoy atendiendo pacientes. Gracias.',
  'Administración: el aumento de expensas es de solo el cuarenta por ciento. Solo.',
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

const NOT_SOLID = new Set(['rug', 'notice', 'doormat', 'lamp-ceiling', 'intercom', 'diploma', 'posters', 'egg-foam', 'towels', 'stain', 'cats', 'puddle', 'lockbox', 'bulb', 'photos', 'cross', 'garland', 'portrait', 'tupper', 'notepaper', 'tanks', 'lights', 'drain']);
const TALL = new Set(['bookshelf', 'tree', 'cattree', 'kitchen', 'mailboxes', 'porteria', 'cabinet', 'halfwall', 'bathwall', 'piano', 'mattress-up', 'antenna', 'balloons', 'ringlight']);
// How high you stand after jumping onto something (Space).
const TOPS = { bench: 0.45, chair: 0.45, chairs: 0.45, sofa: 0.45, armchair: 0.45, divan: 0.45, bed: 0.55, mattress: 0.22, coffeetable: 0.42, 'table-dining': 0.76, desk: 0.76, boxes: 0.9, bucket: 0.36, bins: 1.0, coffin: 0.95, partytable: 0.76, foldtable: 0.74, parrilla: 0.95, woodpile: 0.6, rubble: 0.6, cementbags: 0.5, jacuzzi: 0.6, bathtub: 0.6, gifts: 0.5, kerb: 0.15, planter: 0.6, sidetable: 0.6, basket: 0.4, litter: 0.2, tools: 0.4, beanbag: 0.4, drums: 0.9, amp: 0.6 };
export function topOf(item) { return TOPS[item.type] ?? null; }

export function cameraBlockers(floor) {
  return [...(WALLS[floor] ?? []).filter((w) => w[4] !== 'glass' && w[4] !== 'low' && w[4] !== 'glass-door').map(wallBox), ...(FURNITURE[floor] ?? []).filter((f) => TALL.has(f.type)).map(footprint)];
}

function scenePeople(floor) {
  return SCENES.filter((s) => s.floor === floor).flatMap((s) => [s.npc, ...(s.extras ?? [])]).filter((p) => !p.lying);
}
export function solidsFor(floor) {
  const walls = (WALLS[floor] ?? []).map(wallBox);
  const things = (FURNITURE[floor] ?? []).filter((f) => f.solid !== false && !NOT_SOLID.has(f.type)).map((f) => ({ ...footprint(f), ...(topOf(f) != null || f.top != null ? { top: f.top ?? topOf(f) } : {}) }));
  const people = scenePeople(floor).map((p) => box(p.x - 0.3, p.z - 0.3, p.x + 0.3, p.z + 0.3));
  // The closed grille of the elevator and the stairwell behind its doorway.
  const core = [box(-2.8, -2.65, -1.6, -2.35), box(-0.2, -10, 4, -2.75), box(-4, -10, -0.2, -2.65)];
  // Closed flats: the space behind their walls.
  const closed = floor >= 1 && floor <= 7 ? ['A', 'B', 'C', 'D'].filter((f) => !(OPEN_FLATS[floor] ?? []).includes(f)).map((f) => { const [x0, z0, x1, z1] = FLAT_BOX[f]; return box(x0, z0, x1, z1); }) : [];
  const street = floor === 0 ? [box(-12, 2.5, -4, 10), box(4, 2.5, 12, 10), box(-12, -10, -4, -2.5)] : [];
  const machine = floor === 8 ? [box(-4, -10, 4, -2.7)] : [];
  return [...walls, ...things, ...people, ...core, ...closed, ...street, ...machine];
}

// The white circle under the player, if any.
export function spotAt(floor, x, z, radius = SPOT_RADIUS) {
  let best = null, distance = radius;
  for (const scene of SCENES) {
    if (scene.floor !== floor) continue;
    const d = Math.hypot(scene.spot.x - x, scene.spot.z - z);
    if (d < distance) { distance = d; best = scene.id; }
  }
  return best;
}
export const atElevator = (x, z) => Math.hypot(ELEVATOR.x - x, ELEVATOR.z - z) < ELEVATOR.radius;
export const atStairs = (x, z) => Math.hypot(STAIRS.x - x, STAIRS.z - z) < STAIRS.radius;

// The closest circle on this floor not played yet.
export function nextSpot(floor, x, z, done = []) {
  let best = null, distance = Infinity;
  for (const scene of SCENES) {
    if (scene.floor !== floor || done.includes(scene.id)) continue;
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

// One frame of the white circles (see Vuelo cancelado): a circle opens once
// the player has stood still in it; it stays spent until they walk out.
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
  let left = ((t % total) + total) % total;
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
