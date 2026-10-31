// Vuelo cancelado · the Aeropuerto Internacional de Puerto Bruma as plain
// data: three floors joined by an elevator and an escalator (arrivals below,
// departures with the rainy kerb in the middle, the gates above), sectors,
// walls, doors, furniture, the people at each white circle and the people who
// keep the airport moving through the night. Units are metres: x grows east,
// z grows south, y is up; a heading of 0 faces +z (the kerb and the runway).
// The renderer (aeropuerto3d.ts, World3D.tsx) only draws what is here, so
// movement, the circles and «nobody inside an object» can be tested without
// WebGL.
import { STORY } from './story.mjs';

export const FLOOR_H = 9;
export const CEILING = 6.2;
export const WALL = 0.3;

const HALL = { minX: -48, maxX: 48, minZ: -30, maxZ: 30 };
// Floor 0 is arrivals; 1 departures with the kerb outside; 2 the gates.
export const FLOORS = [
  { id: 0, name: 'Llegadas', sub: 'Equipaje · aduana · objetos perdidos · alquiler de autos', y: -FLOOR_H, bounds: { ...HALL } },
  { id: 1, name: 'Salidas', sub: 'Acera · facturación · atención al pasajero · seguridad', y: 0, bounds: { ...HALL, maxZ: 45.6 } },
  { id: 2, name: 'Embarque', sub: 'Free shop · comidas · sala VIP · capilla · puerta 12', y: FLOOR_H, bounds: { ...HALL } },
];
export const FLOOR_IDS = FLOORS.map((f) => f.id);
export const floorById = (id) => FLOORS.find((f) => f.id === id) ?? FLOORS[1];
export const FLOOR_LABEL = { 0: 'L', 1: 'S', 2: 'E' };

// Arrival on the kerb in the rain, looking at the terminal doors.
export const SPAWN = { floor: 1, x: 0, z: 37.2, heading: Math.PI };
// The elevator and the escalator are in the same core on every floor.
export const ELEVATOR = { x: -3, z: -27.2, radius: 1.4, doorX: -3, wallZ: -30 };
export const ELEVATOR_ARRIVAL = { x: -3, z: -24.6, heading: 0 };
export const STAIRS = { x: 5.2, z: -20.4, radius: 1.3 };
export const STAIRS_ARRIVAL = { x: 5.2, z: -18.2, heading: 0 };

// ------------------------------------------------------------------ sectors
// Rectangles that name where you are; `sound` picks the ambience and `light`
// the colour of the ceiling light. The first match wins, so small rooms go
// before the big halls around them.
const S = (floor, id, name, x0, z0, x1, z1, sound, light = '#f2f6ff') => ({ floor, id, name, x0, z0, x1, z1, sound, light });
export const SECTORS = [
  S(1, 'vereda', 'Acera de salidas', -48, 30, 48, 46, 'kerb'),
  S(1, 'hall', 'Hall de salidas', -48, 6, 48, 30, 'hall'),
  S(1, 'facturacion', 'Mostradores de facturación', -48, -14, -10, 6, 'checkin'),
  S(1, 'reprogramacion', 'Atención al pasajero', 10, -14, 48, 6, 'queue', '#fff4e2'),
  S(1, 'centro', 'Hall de salidas', -10, -14, 10, 6, 'hall'),
  S(1, 'cambio', 'Casa de cambio y tiendas', -48, -30, -10, -14, 'shops', '#fff1dc'),
  S(1, 'nucleo', 'Ascensor y escalera mecánica', -10, -30, 10, -14, 'lobby'),
  S(1, 'seguridad', 'Control de seguridad', 10, -30, 48, -14, 'security', '#eaf2ff'),
  S(0, 'perdidos', 'Equipaje perdido', -48, -6, -26, 8, 'office', '#fff3df'),
  S(0, 'alquiler', 'Alquiler de autos', 26, -6, 48, 8, 'office', '#f3f6ee'),
  S(0, 'cintas', 'Recogida de equipaje', -48, -30, -10, -6, 'belts'),
  S(0, 'aduana', 'Aduana', 10, -30, 48, -6, 'customs', '#e6f0ff'),
  S(0, 'nucleo', 'Ascensor y escalera mecánica', -10, -30, 10, -14, 'lobby'),
  S(0, 'paso', 'Pasillo de llegadas', -26, -14, 26, 8, 'hall'),
  S(0, 'llegadas', 'Hall de llegadas', -48, 8, 48, 30, 'arrivals', '#fff6e8'),
  S(2, 'freeshop', 'Free shop', -48, -30, -10, -14, 'shop', '#fff2e0'),
  S(2, 'nucleo', 'Ascensor y escalera mecánica', -10, -30, 10, -14, 'lobby'),
  S(2, 'vip', 'Sala VIP', 10, -30, 48, -14, 'vip', '#ffe2b8'),
  S(2, 'fumadores', 'Sala de fumadores', 14, -14, 28, -2, 'smoke', '#e8e0d0'),
  S(2, 'capilla', 'Capilla del aeropuerto', 30, -14, 48, 2, 'chapel', '#ffdcb0'),
  S(2, 'comidas', 'Patio de comidas', -48, -14, -14, 8, 'food', '#fff0d8'),
  S(2, 'descanso', 'Zona de descanso', -48, 8, -14, 30, 'rest', '#dfe6ff'),
  S(2, 'puerta', 'Puerta 12', 14, 8, 48, 30, 'gate'),
  S(2, 'pasillo', 'Pasillo de embarque', -14, -14, 48, 30, 'concourse'),
];
export function sectorAt(floor, x, z) {
  return SECTORS.find((s) => s.floor === floor && x >= s.x0 && x <= s.x1 && z >= s.z0 && z <= s.z1) ?? null;
}

// ------------------------------------------------------------------ walls
// Segments [x0, z0, x1, z1]; a fifth value 'glass' draws see-through glass.
// Openings are gaps; DOORS below put moving leaves in some of them.
const shell = [[-48, -30, 48, -30], [-48, -30, -48, 30], [48, -30, 48, 30]];
export const WALLS = {
  0: [
    ...shell, [-48, 30, 48, 30, 'glass'],
    // Lost luggage: a closed office with its door on the corridor.
    [-48, -6, -26, -6], [-26, -6, -26, -0.5], [-26, 3.5, -26, 8], [-48, 8, -40, 8, 'glass'], [-36, 8, -26, 8, 'glass'],
    // Customs: glass between the core and the hall, and the two channels.
    [10, -30, 10, -14, 'glass'], [10, -6, 17, -6, 'glass'], [23, -6, 35, -6, 'glass'], [41, -6, 48, -6, 'glass'],
  ],
  1: [
    ...shell,
    // The façade on the kerb: glass with three sliding doors.
    [-48, 30, -23, 30, 'glass'], [-17, 30, -3, 30, 'glass'], [3, 30, 17, 30, 'glass'], [23, 30, 48, 30, 'glass'],
    // The back of the customer service desk.
    [16, -14, 46, -14],
  ],
  2: [
    ...shell,
    // The runway side: glass from end to end, the jet bridge door at gate 12.
    [-48, 30, 36.5, 30, 'glass'], [39.5, 30, 48, 30, 'glass'],
    // The VIP lounge, closed, with its door on the corridor.
    [10, -30, 10, -14], [10, -14, 17, -14], [21, -14, 48, -14],
    // The smoking room: a glass box.
    [14, -14, 14, -2, 'glass'], [14, -2, 19, -2, 'glass'], [23, -2, 28, -2, 'glass'], [28, -14, 28, -2, 'glass'],
    // The chapel.
    [30, -14, 30, -7.5], [30, -4.5, 30, 2], [30, 2, 48, 2],
  ],
};

// Doors that open by themselves when someone comes close: 'slide' for glass,
// 'swing' for the double doors of the offices. `axis` is the wall direction.
export const DOORS = {
  0: [
    { x: -26, z: 1.5, w: 4, axis: 'z', kind: 'swing', label: 'EQUIPAJE PERDIDO' },
    { x: -38, z: 8, w: 4, axis: 'x', kind: 'slide' },
    { x: 20, z: -6, w: 6, axis: 'x', kind: 'slide', label: 'NADA QUE DECLARAR' },
    { x: 38, z: -6, w: 6, axis: 'x', kind: 'slide', label: 'ALGO QUE DECLARAR' },
  ],
  1: [
    { x: -20, z: 30, w: 6, axis: 'x', kind: 'slide', label: 'SALIDAS' },
    { x: 0, z: 30, w: 6, axis: 'x', kind: 'slide', label: 'SALIDAS' },
    { x: 20, z: 30, w: 6, axis: 'x', kind: 'slide', label: 'SALIDAS' },
  ],
  2: [
    { x: 19, z: -14, w: 4, axis: 'x', kind: 'slide', label: 'SALA VIP' },
    { x: 21, z: -2, w: 4, axis: 'x', kind: 'slide', label: 'FUMADORES' },
    { x: 30, z: -6, w: 3, axis: 'z', kind: 'swing', label: 'CAPILLA' },
    { x: 38, z: 30, w: 3, axis: 'x', kind: 'slide', label: 'PUERTA 12' },
  ],
};

// ------------------------------------------------------------------ furniture
// { type, x, z, w, d, rot } — w along x, d along z before `rot` quarter turns.
// `solid: false` for things you can walk over or through.
const seats = (x, z, w, rot = 0) => ({ type: 'seats', x, z, w, d: 0.7, rot });
const column = (x, z) => ({ type: 'column', x, z, w: 1.1, d: 1.1 });
const plant = (x, z) => ({ type: 'plant', x, z, w: 0.9, d: 0.9 });
const bin = (x, z) => ({ type: 'bin', x, z, w: 0.5, d: 0.5 });
const tables = (xs, zs) => xs.flatMap((x) => zs.map((z) => ({ type: 'table', x, z, w: 1.1, d: 1.1 })));
export const FURNITURE = {
  0: [
    // Baggage reclaim: two carousels and the trolleys.
    { type: 'carousel', x: -29, z: -23.2, w: 16, d: 3.8 }, { type: 'carousel', x: -29, z: -12.6, w: 16, d: 3.8 },
    { type: 'trolleys', x: -46.8, z: -18, w: 1, d: 8 }, { type: 'trolleys', x: -12.8, z: -27.6, w: 4, d: 1 },
    { type: 'screen', x: -29, z: -29.6, w: 6, d: 0.4 },
    column(-18, -18), column(-40, -18),
    // Lost luggage: the counter, shelves of suitcases nobody claims.
    { type: 'desk', x: -38, z: 0.6, w: 10, d: 1 }, { type: 'luggageshelf', x: -38, z: -5.2, w: 18, d: 1.1 },
    { type: 'suitcases', x: -46.4, z: 4.4, w: 2.4, d: 2.4 }, { type: 'suitcases', x: -29.6, z: -2.6, w: 2.2, d: 2 },
    seats(-38, 6.6, 4),
    // Customs: inspection tables, the scanner, the dog's corner.
    { type: 'inspect', x: 28, z: -12.4, w: 3.2, d: 1.2 }, { type: 'inspect', x: 20, z: -20, w: 3.2, d: 1.2 }, { type: 'inspect', x: 36, z: -20, w: 3.2, d: 1.2 },
    { type: 'xray', x: 44, z: -22, w: 1.4, d: 4, rot: 0 }, { type: 'cage', x: 46.6, z: -12, w: 1, d: 1.4 },
    // The core.
    { type: 'bench', x: 0, z: -15.6, w: 3, d: 0.6 },
    // Arrivals hall: the meeting rail, the flower stall, the café, the rental desks.
    { type: 'rail', x: -11, z: 11.4, w: 18, d: 0.3 }, { type: 'rail', x: 11, z: 11.4, w: 18, d: 0.3 },
    { type: 'flowers', x: 14, z: 22.6, w: 3.2, d: 1.4 }, { type: 'cafebar', x: -30, z: 24, w: 7, d: 1.2 },
    ...tables([-38, -33, -26], [17.6]), plant(-46.6, 28.4), plant(46.6, 28.4), bin(-20, 20), bin(24, 18),
    seats(30, 20, 6), seats(30, 24, 6), seats(-4, 26, 6),
    { type: 'rentdesk', x: 43, z: 1, w: 1.2, d: 12 }, { type: 'showcar', x: 33, z: -1.4, w: 2, d: 3.8 },
    column(-18, 20), column(18, 26), column(-8, 0), column(8, 0),
  ],
  1: [
    // The kerb: bollards, the canopy columns, the queue of taxis.
    ...[-40, -32, -24, -4, 4, 16, 28, 36, 44].map((x) => ({ type: 'bollard', x, z: 38.8, w: 0.4, d: 0.4 })),
    { type: 'taxi', x: -15.4, z: 42.2, w: 4.6, d: 2 }, { type: 'taxi', x: -24, z: 42.2, w: 4.6, d: 2 }, { type: 'taxi', x: -33, z: 42.2, w: 4.6, d: 2 },
    { type: 'bus', x: 26, z: 42.4, w: 12, d: 2.8 }, { type: 'canopy', x: 0, z: 34.4, w: 96, d: 8, solid: false },
    column(-36, 34.6), column(-12, 34.6), column(12, 34.6), column(36, 34.6),
    // The departures hall: the big board, seats, trolleys, the check-in kiosks.
    { type: 'fids', x: 0, z: 13, w: 13, d: 0.6, solid: false },
    seats(-32, 20, 8), seats(-32, 23, 8, 2), seats(32, 20, 8), seats(32, 23, 8, 2),
    { type: 'trolleys', x: -44, z: 27.4, w: 6, d: 1 }, plant(-46.6, 9), plant(46.6, 9), bin(-12, 22), bin(12, 22),
    ...[-42, -38, -34, -18, -14].map((x) => ({ type: 'kiosk', x, z: 8.4, w: 0.8, d: 0.7 })),
    column(-24, 16), column(24, 16), column(-24, -2), column(24, -2.4),
    // Check-in: a long island, the belt behind it, the queue in front.
    { type: 'checkin', x: -29, z: -6, w: 30, d: 1.1 }, { type: 'belt', x: -29, z: -8.6, w: 30, d: 0.9 },
    { type: 'airlinewall', x: -29, z: -13.4, w: 34, d: 0.5 },
    { type: 'queue', x: -29, z: -1.4, w: 26, d: 3.6, solid: false },
    // Customer service: one desk, two agents, three hundred people.
    { type: 'servicedesk', x: 31, z: -10, w: 26, d: 1.2 },
    { type: 'queue', x: 31, z: -2.4, w: 30, d: 8, solid: false },
    // Exchange office, the newsstand, the pharmacy and the ATM.
    { type: 'exchange', x: -36, z: -22.6, w: 5.4, d: 1.1 }, { type: 'wallshelf', x: -36, z: -29.3, w: 7, d: 0.7 },
    { type: 'rates', x: -36, z: -29.62, w: 4, d: 0.2, solid: false },
    { type: 'newsstand', x: -21, z: -26.6, w: 6, d: 1.4 }, { type: 'shopfront', x: -21, z: -29.7, w: 8, d: 0.4, solid: false },
    { type: 'atm', x: -47.2, z: -20, w: 0.8, d: 0.7 }, { type: 'atm', x: -47.2, z: -17.6, w: 0.8, d: 0.7 },
    // The core.
    { type: 'bench', x: 0, z: -15.6, w: 3, d: 0.6 },
    // Security: three lanes with their scanners, arches and tray tables.
    ...[20, 30, 40].flatMap((x) => [
      { type: 'xray', x, z: -23.6, w: 1.2, d: 4.4 }, { type: 'arch', x: x + 2.6, z: -23.6, w: 1.4, d: 0.5, solid: false },
      { type: 'trays', x, z: -18.4, w: 1.2, d: 1.6 }, { type: 'xscreen', x: x - 1.4, z: -25, w: 0.8, d: 0.7 },
    ]),
    { type: 'binpile', x: 46.4, z: -18, w: 1, d: 1 }, { type: 'queue', x: 30, z: -16, w: 28, d: 2.2, solid: false },
  ],
  2: [
    // Free shop: shelves, the perfume counter, the whisky tower.
    { type: 'shelf', x: -40, z: -24.6, w: 10, d: 0.8 }, { type: 'shelf', x: -18, z: -24.6, w: 8, d: 0.8 },
    { type: 'perfume', x: -26, z: -19.6, w: 4.4, d: 1.1 }, { type: 'tower', x: -40, z: -18, w: 1.6, d: 1.6 },
    { type: 'chocolates', x: -16, z: -18.6, w: 3, d: 1.2 }, { type: 'wallshelf', x: -29, z: -29.3, w: 30, d: 0.7 },
    // The core.
    { type: 'bench', x: 0, z: -15.6, w: 3, d: 0.6 },
    // VIP: the desk at the door, sofas, the bar.
    { type: 'vipdesk', x: 19, z: -17.6, w: 3.6, d: 1 }, { type: 'sofa', x: 26, z: -25.2, w: 3, d: 1, rot: 0 },
    { type: 'sofa', x: 33, z: -25.2, w: 3, d: 1 }, { type: 'sofa', x: 33, z: -19.2, w: 3, d: 1, rot: 2 },
    { type: 'lowtable', x: 33, z: -22.2, w: 1.6, d: 0.9 }, { type: 'bar', x: 42, z: -28, w: 9, d: 1 }, plant(46.6, -16.4), plant(12, -28.6),
    { type: 'aquarium', x: 12.4, z: -22, w: 0.8, d: 6 },
    // Smoking room: two ash columns and a fan that does nothing.
    { type: 'ashtray', x: 16.2, z: -12.6, w: 0.5, d: 0.5 }, { type: 'ashtray', x: 25.8, z: -12.6, w: 0.5, d: 0.5 },
    // Chapel: pews facing the candle table.
    { type: 'altar', x: 42, z: -13, w: 4, d: 0.8 },
    ...[-10, -7, -4, -1].map((z) => ({ type: 'pew', x: 42, z, w: 5, d: 0.6 })),
    // Food court: stalls on the west wall, tables in a grid.
    { type: 'foodstall', x: -45.6, z: -8, w: 1.4, d: 7 }, { type: 'foodstall', x: -45.6, z: 2, w: 1.4, d: 7 },
    ...tables([-38, -34], [-10, -6, -2, 2]), ...tables([-22, -18], [-10, -6, 2]), { type: 'table', x: -30, z: -2, w: 1.1, d: 1.1 },
    // Rest area: rows of gate seats where people sleep, Esteban's camp.
    seats(-40, 12, 8), seats(-28, 12, 8), seats(-40, 16, 8, 2), seats(-28, 16, 8, 2),
    seats(-28, 22, 8), seats(-28, 25.4, 8, 2),
    { type: 'camp', x: -42.4, z: 26.2, w: 4, d: 3, solid: false }, { type: 'trolleys', x: -46.8, z: 22, w: 1, d: 4 },
    // Gate 12: seats, the podium, the window on the runway.
    seats(22, 12, 8), seats(34, 12, 8), seats(22, 15.4, 8, 2), seats(34, 15.4, 8, 2), seats(44.6, 18.4, 5, 1),
    { type: 'podium', x: 34, z: 25.6, w: 2.6, d: 0.9 }, { type: 'gatescreen', x: 30, z: 29.4, w: 4, d: 0.3, solid: false },
    // The concourse: an ad screen, plants, a charging column.
    { type: 'charging', x: 0, z: 6, w: 1, d: 1 }, plant(-12.6, 28.4), plant(12.6, 28.4), bin(-8, -8), bin(8, 18),
    column(-6, -6), column(6, -6), column(-6, 18), column(6, 18),
  ],
};

// ------------------------------------------------------------------ scenes
// One white circle per STORY entry: where the circle is, where the main
// person stands, how they look and what they are doing.
const L = (skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras = [], extra = {}) =>
  ({ skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras, ...extra });
// Aerobruma's uniform: navy with a red scarf; ground staff wear a yellow vest.
const CREW = (skin, body, hairStyle, hairColor, extras = [], seed = 0) => L(skin, 'adult', body, hairStyle, hairColor, 'uniform', '#1f2f5a', body === 'f' ? 'skirt' : 'pants', '#1a2440', ['scarf', ...extras], { seed });
const GROUND = (skin, body, hairStyle, hairColor, extras = [], seed = 0) => L(skin, 'adult', body, hairStyle, hairColor, 'jacket', '#f2c21a', 'pants', '#2a3040', extras, { seed });
const GUARD = (skin, body, hairStyle, hairColor, extras = [], seed = 0) => L(skin, 'adult', body, hairStyle, hairColor, 'uniform', '#2a3a2a', 'pants', '#1e241e', extras, { seed });

const PLACES = {
  taxi: { spot: { x: -11.6, z: 36.4 }, npc: { x: -11.4, z: 39.9, heading: Math.PI }, pose: 'arms', mood: 'smile', look: L('#d8a57e', 'adult', 'm', 'short', '#2a1a12', 'jacket', '#3a3a30', 'jeans', '#24304a', ['mustache', 'umbrella'], { seed: 11 }) },
  pantalla: { spot: { x: 1.6, z: 18.2 }, npc: { x: 3.6, z: 16.2, heading: Math.PI * 0.85 }, pose: 'cry', mood: 'terror', look: L('#c99468', 'young', 'f', 'long', '#2a1a12', 'dress', '#f4f0ea', null, null, ['earrings', 'suitcase'], { seed: 21 }),
    extras: [{ x: 5.8, z: 17.4, heading: -2.2, pose: 'phone', mood: 'worried', look: L('#c48f69', 'young', 'm', 'short', '#1a1210', 'suit', '#2a3550', 'pants', '#2a3550', [], { seed: 22 }) }] },
  facturacion: { spot: { x: -26, z: -3.4 }, npc: { x: -26, z: -7.35, heading: 0 }, pose: 'point', look: CREW('#8d5a3c', 'f', 'bun', '#120d0b', ['earrings'], 31),
    extras: [{ x: -23.6, z: -4.4, heading: Math.PI * 0.9, pose: 'stand', mood: 'sad', urn: true, look: L('#b9825c', 'elderly', 'm', 'short', '#e8e8e8', 'suit', '#2a2a2a', 'pants', '#2a2a2a', ['glasses', 'mustache'], { seed: 32 }) }] },
  reprogramacion: { spot: { x: 31, z: -7.4 }, npc: { x: 31, z: -11.5, heading: 0 }, pose: 'phone', mood: 'sleepy', look: CREW('#c48f69', 'm', 'short', '#1a1210', ['glasses'], 41),
    extras: [{ x: 34.2, z: -7.9, heading: -2.4, pose: 'sit', seat: true, mood: 'angry', look: L('#f0d6c0', 'old', 'f', 'curly', '#d8d0c8', 'coat', '#7a2a3a', 'skirt', '#2a2a30', ['glasses', 'earrings'], { seed: 42 }) }] },
  cambio: { spot: { x: -36, z: -19.4 }, npc: { x: -36, z: -24.4, heading: 0 }, pose: 'read', mood: 'smile', look: L('#a8724e', 'adult', 'm', 'short', '#120d0b', 'shirt', '#e8eef4', 'pants', '#2a3040', ['glasses'], { seed: 51 }),
    extras: [{ x: -33.4, z: -20.2, heading: -2.5, pose: 'arms', mood: 'worried', look: L('#b9825c', 'young', 'f', 'braids', '#120d0b', 'tshirt', '#e07a2a', 'shorts', '#3a4a3a', ['backpack', 'headphones'], { seed: 52 }) }] },
  seguridad: { spot: { x: 32.6, z: -18.4 }, npc: { x: 31.2, z: -20.6, heading: 0.6 }, pose: 'point', mood: 'angry', look: GUARD('#e2b896', 'f', 'ponytail', '#3a2416', [], 61),
    extras: [{ x: 34.6, z: -20.4, heading: -1.6, pose: 'hands-up', mood: 'scared', look: L('#e8c0a0', 'young', 'm', 'curly', '#3a2416', 'hoodie', '#2f6f4f', 'jeans', '#1f2840', ['backpack'], { seed: 62 }) }] },
  cintas: { spot: { x: -24, z: -18 }, npc: { x: -26.2, z: -20.1, heading: Math.PI * 0.85 }, pose: 'cry', mood: 'furious', look: L('#f0d6c0', 'young', 'f', 'bob', '#7a3a1e', 'jacket', '#d0408a', 'jeans', '#1f2840', ['earrings'], { seed: 71 }),
    extras: [{ x: -21.4, z: -19.8, heading: -2.6, pose: 'arms', mood: 'laugh', look: GROUND('#a8724e', 'm', 'buzz', '#120d0b', ['headphones'], 72) }] },
  perdidos: { spot: { x: -38, z: 3.6 }, npc: { x: -38, z: -0.75, heading: 0 }, pose: 'read', mood: 'sleepy', look: L('#c48f69', 'old', 'f', 'bun', '#3a3a3a', 'sweater', '#6a5a8a', 'skirt', '#2a2a30', ['glasses'], { seed: 81 }),
    extras: [{ x: -35.4, z: 4.4, heading: -2.4, pose: 'phone', mood: 'worried', look: L('#c48f69', 'young', 'm', 'short', '#1a1210', 'suit', '#2a3550', 'pants', '#2a3550', [], { seed: 22 }) }] },
  aduana: { spot: { x: 28, z: -9.4 }, npc: { x: 28, z: -13.9, heading: 0 }, pose: 'point', mood: 'surprised', look: GUARD('#c99468', 'm', 'short', '#2a1a12', ['mustache'], 91),
    extras: [{ x: 30.6, z: -10.4, heading: -2.4, pose: 'arms', mood: 'angry', look: L('#8d5a3c', 'elderly', 'f', 'curly', '#f2f2f2', 'dress', '#e0a020', null, null, ['earrings', 'glasses'], { seed: 92 }) }] },
  reencuentro: { spot: { x: 2.4, z: 16.8 }, npc: { x: 2.4, z: 13.4, heading: Math.PI }, pose: 'sign', mood: 'smitten', look: L('#d8a57e', 'adult', 'm', 'short', '#3a2416', 'suit', '#5a2a3a', 'pants', '#24242a', [], { seed: 101 }),
    extras: [{ x: 5.6, z: 15.2, heading: -2, pose: 'stand', mood: 'sad', look: L('#e2b896', 'old', 'f', 'bob', '#9a9a9a', 'apron', '#3a7a4a', 'pants', '#2a2a2a', ['flowers'], { seed: 102 }) }] },
  alquiler: { spot: { x: 39.6, z: 1 }, npc: { x: 44.1, z: 1, heading: -Math.PI / 2 }, pose: 'sign', mood: 'smile', look: L('#e8c0a0', 'adult', 'm', 'short', '#2a1a12', 'shirt', '#2a6ac8', 'pants', '#2a3040', [], { seed: 111 }),
    extras: [{ x: 40.2, z: 3.6, heading: Math.PI * 0.75, pose: 'arms', mood: 'furious', look: L('#c48f69', 'young', 'f', 'afro', '#120d0b', 'jacket', '#d8301e', 'jeans', '#1f2840', ['earrings', 'suitcase'], { seed: 112 }) }] },
  freeshop: { spot: { x: -26, z: -16.4 }, npc: { x: -26, z: -21, heading: 0 }, pose: 'stand', mood: 'smile', look: L('#f0d6c0', 'adult', 'f', 'long', '#e0c070', 'suit', '#141418', 'skirt', '#141418', ['earrings'], { seed: 121 }),
    extras: [{ x: -23.4, z: -17.4, heading: -2.5, pose: 'arms', mood: 'worried', look: L('#a8724e', 'adult', 'm', 'short', '#1a1210', 'jacket', '#5a4632', 'pants', '#2a2a2a', ['glasses'], { seed: 122 }) }] },
  comidas: { spot: { x: -27.6, z: -0.2 }, npc: { x: -30, z: -3.1, heading: 0, seat: true }, pose: 'sit', mood: 'worried', look: L('#e8c0a0', 'adult', 'm', 'short', '#9a9a9a', 'uniform', '#1a2440', 'pants', '#1a2440', ['beard'], { seed: 131 }),
    extras: [{ x: -28.6, z: -3.3, heading: -Math.PI / 2, pose: 'cook', mood: 'smile', look: L('#b9825c', 'adult', 'f', 'bun', '#120d0b', 'apron', '#f4f2ec', 'pants', '#2a2a2a', [], { seed: 132 }) }] },
  vip: { spot: { x: 19, z: -15.4 }, npc: { x: 19, z: -19.3, heading: 0 }, pose: 'arms', mood: 'angry', look: L('#8d5a3c', 'adult', 'f', 'bun', '#120d0b', 'suit', '#7a1a2a', 'skirt', '#1a1a20', ['earrings', 'glasses'], { seed: 141 }),
    extras: [{ x: 26, z: -25.08, heading: 0, pose: 'sit', seat: true, mood: 'scared', look: L('#c99468', 'young', 'm', 'cap', '#120d0b', 'hoodie', '#141418', 'jeans', '#141418', ['glasses', 'headphones'], { seed: 142 }) }] },
  capilla: { spot: { x: 37, z: -5.6 }, npc: { x: 40.2, z: -7.12, heading: Math.PI, seat: true }, pose: 'sit', mood: 'terror', look: L('#c48f69', 'adult', 'f', 'ponytail', '#2a1a12', 'sweater', '#3a6aa8', 'jeans', '#24304a', ['earrings'], { seed: 151 }),
    extras: [{ x: 36.8, z: -10.4, heading: 0.3, pose: 'stand', mood: 'smile', look: L('#a8724e', 'adult', 'm', 'short', '#2a2a2a', 'shirt', '#141418', 'pants', '#141418', ['glasses'], { seed: 152 }) }] },
  descanso: { spot: { x: -36.4, z: 20.2 }, npc: { x: -38.6, z: 23.6, heading: 0.4 }, pose: 'wave', mood: 'laugh', look: L('#c99468', 'adult', 'm', 'curly', '#2a1a12', 'sweater', '#6a4a3a', 'pants', '#3a3a3a', ['beard', 'scarf'], { seed: 161 }),
    extras: [{ x: -31.4, z: 22.12, heading: 0, pose: 'sit', seat: true, mood: 'sleepy', look: L('#8d5a3c', 'adult', 'f', 'braids', '#120d0b', 'scrubs', '#4a6aa0', 'pants', '#4a6aa0', [], { seed: 162 }) }] },
  fumadores: { spot: { x: 21, z: -5.6 }, npc: { x: 19.6, z: -9.4, heading: 0.5 }, pose: 'smoke-free', smoke: true, mood: 'smile', look: CREW('#5a3a28', 'f', 'bun', '#120d0b', ['earrings'], 171),
    extras: [{ x: 22.6, z: -9.2, heading: -0.6, pose: 'arms', mood: 'laugh', look: CREW('#6a4430', 'm', 'short', '#120d0b', [], 172) }] },
  puerta: { spot: { x: 34, z: 22.4 }, npc: { x: 34, z: 26.9, heading: Math.PI }, pose: 'phone', mood: 'neutral', look: CREW('#e2b896', 'f', 'ponytail', '#e0c070', [], 181),
    extras: [{ x: 36.6, z: 23.4, heading: -2.4, pose: 'cry', mood: 'worried', look: L('#c48f69', 'old', 'm', 'short', '#bbbbbb', 'jacket', '#3a5a7a', 'pants', '#2a2a2a', ['glasses'], { seed: 182 }) },
      { x: 31.4, z: 23.2, heading: 2.4, pose: 'stand', mood: 'smitten', look: L('#c99468', 'young', 'f', 'long', '#2a1a12', 'dress', '#f4f0ea', null, null, ['earrings'], { seed: 21 }) }] },
};

export const SCENES = STORY.map((story) => ({ ...story, ...PLACES[story.id] }));
export const SCENE_IDS = SCENES.map((s) => s.id);
export const sceneById = (id) => SCENES.find((s) => s.id === id);
export const SPOT_RADIUS = 1.25;

// ------------------------------------------------------------------ life
// People who keep the airport moving: they walk routes pulling suitcases,
// push trolleys, drive the cleaning machine or the airport buggy. `path` is
// a loop of points; `pause` seconds at each one. `carry`: case, trolley,
// cleaner, buggy, crew (a whole crew walks in a line).
const T = (skin, age, body, hair, hairColor, top, topColor, bottom, bottomColor, extras = [], seed = 0) => L(skin, age, body, hair, hairColor, top, topColor, bottom, bottomColor, extras, { seed });
export const WALKERS = {
  0: [
    { look: T('#c48f69', 'adult', 'm', 'short', '#1a1210', 'jacket', '#2a4a7a', 'jeans', '#24304a', [], 901), path: [[-8, 19], [36, 19], [36, 16], [-8, 16]], speed: 1.3, carry: 'case' },
    { look: GROUND('#8d5a3c', 'm', 'buzz', '#120d0b', [], 902), path: [[-12, -8.4], [-44, -8.4]], speed: 1.1, pause: 3, carry: 'trolley' },
    { look: T('#f0d6c0', 'young', 'f', 'ponytail', '#e0c070', 'hoodie', '#d8508a', 'jeans', '#1f2840', ['backpack'], 903), path: [[20, -2], [20, 4], [-20, 4], [-20, -2]], speed: 1.6, carry: 'case' },
    { look: T('#b9825c', 'adult', 'f', 'bun', '#2a1a12', 'uniform', '#7aa0b8', 'pants', '#3a4a5a', [], 904), path: [[-44, 27], [44, 27], [44, 29], [-44, 29]], speed: 0.8, carry: 'cleaner' },
  ],
  1: [
    { look: T('#e2b896', 'adult', 'm', 'short', '#3a2a20', 'coat', '#3a3a3a', 'pants', '#2a2a2a', ['glasses'], 911), path: [[-6, 28], [-6, 2], [-40, 2], [-40, 28]], speed: 1.4, carry: 'case' },
    { look: T('#8d5a3c', 'young', 'f', 'afro', '#120d0b', 'jacket', '#e0a020', 'jeans', '#1f2840', ['headphones'], 912), path: [[8, 28], [8, 2], [44, 2.6], [44, 28]], speed: 1.7, carry: 'case' },
    { look: CREW('#c99468', 'm', 'short', '#1a1210', [], 913), path: [[-8, 33], [44, 33], [44, 32], [-8, 32]], speed: 1.5, carry: 'crew' },
    { look: T('#c48f69', 'old', 'm', 'bald', '#999', 'sweater', '#6a4a3a', 'pants', '#2a2a2a', ['mustache'], 914), path: [[-46, 32], [-6, 32], [-6, 33], [-46, 33]], speed: 0.9, carry: 'trolley' },
    { look: T('#b9825c', 'adult', 'f', 'bun', '#2a1a12', 'uniform', '#7aa0b8', 'pants', '#3a4a5a', [], 915), path: [[-8, -12], [8, -12], [8, 4], [-8, 4]], speed: 0.8, carry: 'cleaner' },
  ],
  2: [
    { look: GROUND('#c99468', 'm', 'short', '#1a1210', [], 921), path: [[-10, -11], [-10, 26], [10, 26], [10, -11]], speed: 3.2, carry: 'buggy' },
    { look: CREW('#e8c0a0', 'm', 'short', '#9a9a9a', ['beard'], 922), path: [[-12, 7.8], [12, 7.8], [12, 10.8], [-12, 10.8]], speed: 1.5, carry: 'crew' },
    { look: T('#a8724e', 'adult', 'f', 'long', '#120d0b', 'coat', '#8a1a3a', 'jeans', '#1f2840', ['earrings'], 923), path: [[-46, -12.2], [-26, -12.2], [-26, -12.8], [-46, -12.8]], speed: 1.2, carry: 'case' },
    { look: T('#e8c0a0', 'young', 'm', 'cap', '#3a2416', 'tshirt', '#2a6a8a', 'shorts', '#3a3a3a', ['backpack'], 924), path: [[18, 18.4], [42, 18.4], [42, 20.6], [18, 20.6]], speed: 1.4, carry: 'case' },
  ],
};

// People who wait, sleep, queue and complain. You can talk to all of them (E).
export const CROWD = {
  0: [
    { x: -33, z: -20.2, heading: Math.PI, pose: 'arms' }, { x: -30.4, z: -16.2, heading: 0, pose: 'phone' },
    { x: -39.2, z: 6.48, heading: Math.PI, pose: 'sit', seat: true }, { x: 22, z: -18.4, heading: Math.PI, pose: 'hands-up', mood: 'scared' },
    { x: -2.4, z: 13.6, heading: Math.PI, pose: 'sign' }, { x: -8.6, z: 14, heading: Math.PI, pose: 'stand', mood: 'smile' },
    { x: 31, z: 20.12, heading: 0, pose: 'sleep', seat: true }, { x: -33, z: 18.5, heading: Math.PI, pose: 'read', seat: true },
    { x: 34.6, z: 4.2, heading: -2.6, pose: 'phone', mood: 'worried' },
  ],
  1: [
    { x: -36, z: 35.6, heading: Math.PI, pose: 'phone', mood: 'worried' }, { x: -30, z: -2.2, heading: Math.PI, pose: 'stand', mood: 'sleepy' },
    { x: -33, z: -2.4, heading: Math.PI, pose: 'arms', mood: 'angry' }, { x: 26, z: -4.6, heading: Math.PI, pose: 'phone' },
    { x: 29.4, z: -2.6, heading: Math.PI, pose: 'cry', mood: 'sad' }, { x: 36, z: -4.4, heading: Math.PI, pose: 'sit', seat: true, mood: 'sleepy' },
    { x: -30, z: 20.12, heading: 0, pose: 'sleep', seat: true }, { x: 33.5, z: 20.12, heading: 0, pose: 'read', seat: true },
    { x: 22, z: -15.8, heading: Math.PI, pose: 'stand', mood: 'worried' }, { x: -20.4, z: -24.6, heading: Math.PI, pose: 'read' },
  ],
  2: [
    { x: -40, z: 12.12, heading: 0, pose: 'sleep', seat: true }, { x: -26, z: 15.88, heading: Math.PI, pose: 'sit', seat: true },
    { x: -24.6, z: 22.12, heading: 0, pose: 'read', seat: true }, { x: 24, z: 12.12, heading: 0, pose: 'phone', seat: true },
    { x: 36, z: 15.28, heading: Math.PI, pose: 'sleep', seat: true }, { x: -36.85, z: -6, heading: -Math.PI / 2, pose: 'sit', seat: true },
    { x: 41, z: -29.2, heading: 0, pose: 'cook' }, { x: 43.4, z: -10.12, heading: Math.PI, pose: 'sit', seat: true, mood: 'sad' },
    { x: -18, z: -17.4, heading: Math.PI, pose: 'phone', mood: 'smile' }, { x: 32.4, z: -19.32, heading: Math.PI, pose: 'sit', seat: true, mood: 'tipsy' },
  ],
};

// Short lines people say as you walk past (shown as bubbles near them).
export const CHATTER = {
  0: ['¿Esa maleta es la mía?', 'Mi maleta se fue a Lima sin mí.', 'Aquí huele a queso, ¿no?', '¡Bienvenida, mamá!', 'El perro de la aduana me miró raro.', 'Treinta minutos y la cinta no se mueve.'],
  1: ['¿Cancelado? ¿Cómo que cancelado?', 'Yo nunca más vuelo con Aerobruma.', '¿Alguien sabe dónde se hace la cola?', 'Mi abuela llega en ese vuelo.', 'Me dijeron mostrador doce y no hay mostrador doce.', '¡Paso, paso, que llego tarde!', 'Treinta kilos de equipaje y un solo calcetín limpio.', 'La tormenta tiene nombre: se llama Aerobruma.'],
  2: ['Última llamada para Montevideo.', 'Un café más y vuelo sin avión.', '¿Este enchufe funciona?', 'Me quedo a vivir aquí, ¿qué más da?', 'Shhh, que el piloto duerme.', 'Dicen que en la sala VIP hay sushi gratis.', 'Mi perfume cuesta más que mi pasaje.'],
};

// Announcements on the airport speakers, one every minute or so.
export const ANNOUNCEMENTS = [
  'Aerobruma informa que el vuelo AB 2317 está cancelado. Agradecemos su paciencia, que es lo único que no cancelamos.',
  'Se ruega a la pasajera Delfina Orozco que se presente en equipaje perdido. Su vestido de novia la está esperando.',
  'Recordamos a los señores pasajeros que el dulce de leche es un líquido. Sí, aunque no lo parezca.',
  'El vuelo a Montevideo embarca por la puerta siete. La puerta siete está en obras. Gracias.',
  'Por motivos de seguridad, no deje su equipaje sin vigilancia. Ni a su suegra.',
  'Comandante Lezcano, su tripulación lo espera en la puerta doce. Deje ese café, comandante.',
  'Aerobruma: volamos cuando podemos. Hoy no podemos.',
  'Se ha encontrado un loro que dice malas palabras en la zona de aduana. Su dueña puede pasar a recogerlo.',
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

// The road beyond the kerb: the far lane is closed off by the barrier.
const OUTSIDE = [box(-48, 45.2, 48, 45.6)];
const NOT_SOLID = new Set(['canopy', 'fids', 'queue', 'arch', 'rates', 'shopfront', 'camp', 'gatescreen']);
const TALL = new Set(['column', 'luggageshelf', 'shelf', 'wallshelf', 'airlinewall', 'tower', 'bus', 'xray', 'aquarium', 'newsstand', 'screen', 'atm', 'kiosk', 'charging', 'cage']);
// How high you stand after jumping onto something (Space). Things taller
// than a jump (columns, shelves, the bus) have no top.
const TOPS = { seats: 0.5, bench: 0.5, pew: 0.5, table: 0.78, lowtable: 0.45, sofa: 0.75, belt: 0.62, bar: 1.1, rail: 1.0, bollard: 0.9, taxi: 1.5, showcar: 1.45, suitcases: 1.0, trolleys: 1.0, ashtray: 1.0, bin: 0.85, binpile: 1.1 };
export function topOf(item) { return TOPS[item.type] ?? null; }

export function cameraBlockers(floor) {
  return [...(WALLS[floor] ?? []).filter((w) => w[4] !== 'glass').map(wallBox), ...(FURNITURE[floor] ?? []).filter((f) => TALL.has(f.type)).map(footprint)];
}

// Everyone at a circle stands on their own spot: standing people are solid.
function scenePeople(floor) {
  return SCENES.filter((s) => s.floor === floor).flatMap((s) => [s.npc, ...(s.extras ?? [])]).filter((p) => !p.lying);
}
export function solidsFor(floor) {
  const walls = (WALLS[floor] ?? []).map(wallBox);
  const things = (FURNITURE[floor] ?? []).filter((f) => f.solid !== false && !NOT_SOLID.has(f.type)).map((f) => ({ ...footprint(f), ...(topOf(f) ? { top: topOf(f) } : {}) }));
  const people = scenePeople(floor).map((p) => box(p.x - 0.3, p.z - 0.3, p.x + 0.3, p.z + 0.3));
  // The metal-detector arch: you walk between its two posts.
  const posts = (FURNITURE[floor] ?? []).filter((f) => f.type === 'arch').flatMap((f) => [box(f.x - f.w / 2, f.z - f.d / 2, f.x - f.w / 2 + 0.16, f.z + f.d / 2), box(f.x + f.w / 2 - 0.16, f.z - f.d / 2, f.x + f.w / 2, f.z + f.d / 2)]);
  // The elevator shaft and the escalator: you get on at their mouths.
  const core = [box(-5, -30, -1, -29.2), box(3.4, -30, 7.4, -22)];
  return [...walls, ...things, ...people, ...posts, ...core, ...(floor === 1 ? OUTSIDE : [])];
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
export const atElevator = (x, z) => Math.hypot(ELEVATOR.x - x, ELEVATOR.z + 2.2 - z) < ELEVATOR.radius + 0.4;
export const atStairs = (x, z) => Math.hypot(STAIRS.x - x, STAIRS.z - z) < STAIRS.radius;

// The closest circle on this floor not played yet (the map points there).
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

// One frame of the white circles: a circle opens once the player has stood
// still in it for a moment; after that it stays spent until they walk out,
// so closing an activity never reopens it under their feet.
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
