// El tren de las 23:40 · El Nocturno de los Andes as plain data: the
// platform at Mendoza, the seven vehicles of the train from the front (the
// locomotive, the luggage van, two sleeping cars, the dining car, the bar car
// and the observation car) and the two stops of the night, Puente del Inca in
// the snow and Los Andes at dawn. Units are metres: inside a car x runs along
// the train (the locomotive is +x) and z across it; y is up; a heading of 0
// faces +z. Only one place is drawn at a time. The renderer (tren3d.ts,
// World3D.tsx) only draws what is here, so movement, the circles and «nobody
// inside an object» can be tested without WebGL.
import { STORY } from './story.mjs';

export const CEILING = 2.5;
export const WALL = 0.16;
export const HALF = 1.6; // half the inner width of a car: walls at z = ±1.6

const CAR = { minX: -12, maxX: 12, minZ: -1.7, maxZ: 1.7 };
const PLATFORM = { minX: -12, maxX: 12, minZ: -1.0, maxZ: 7.6 };
const P = (id, name, sub, kind, bounds = CAR) => ({ id, name, sub, kind, y: 0, bounds: { ...bounds } });
export const FLOORS = [
  P(0, 'Andén de Mendoza', '23:40 · salida del Nocturno', 'platform', PLATFORM),
  P(1, 'Locomotora', 'El motor y la cabina del maquinista', 'car'),
  P(2, 'Furgón de equipajes', 'Valijas, sacas de correo y un perro', 'car'),
  P(3, 'Coche cama A', 'Camarotes 1 a 6', 'car'),
  P(4, 'Coche cama B', 'Camarotes 7 a 12 · el tuyo es el 8', 'car'),
  P(5, 'Coche comedor', 'Cocina y diez mesas', 'car'),
  P(6, 'Coche bar', 'Barra, cartas y sillones', 'car'),
  P(7, 'Coche mirador', 'Cúpula de vidrio y ventanal trasero', 'car'),
  P(8, 'Andén de Puente del Inca', '03:10 · parada de veinte minutos', 'platform', PLATFORM),
  P(9, 'Andén de Los Andes', '06:40 · llegada a Chile', 'platform', PLATFORM),
];
export const FLOOR_IDS = FLOORS.map((f) => f.id);
export const floorById = (id) => FLOORS.find((f) => f.id === id) ?? FLOORS[0];
export const FLOOR_LABEL = { 0: 'M', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: 'PI', 9: 'LA' };
export const isCar = (floor) => floorById(floor).kind === 'car';
export const OPEN_AIR = (floor) => !isCar(floor);
// The train from the front: what a door at the end of a car leads to.
export const TRAIN_ORDER = [1, 2, 3, 4, 5, 6, 7];

// You arrive on the platform at Mendoza, the train in front of you.
export const SPAWN = { floor: 0, x: -1.0, z: 3.4, heading: Math.PI };

// ------------------------------------------------------------------ doors between cars
// Every car has a sliding door at each end (the locomotive only at the back,
// the observation car only at the front); a platform has the door of the
// sleeping car. Standing at a door opens the panel of the train.
const DOOR_Z = { 5: 0.6 };
export const doorZ = (floor) => DOOR_Z[floor] ?? 0;
export function portalsFor(floor) {
  if (!isCar(floor)) return [{ id: 'door', x: -4.0, z: -0.45, radius: 0.85, arrive: { x: -4.0, z: 0.75, heading: 0 } }];
  const z = doorZ(floor);
  const out = [];
  if (floor !== 1) out.push({ id: 'front', x: 11.2, z, radius: 0.8, arrive: { x: 10.1, z, heading: -Math.PI / 2 } });
  if (floor !== 7) out.push({ id: 'back', x: -11.2, z, radius: 0.8, arrive: { x: -10.1, z, heading: Math.PI / 2 } });
  return out;
}
export const PORTALS = Object.fromEntries(FLOOR_IDS.map((f) => [f, portalsFor(f)]));
export function portalAt(floor, x, z) {
  return (PORTALS[floor] ?? []).find((p) => Math.hypot(p.x - x, p.z - z) < p.radius) ?? null;
}
// Where you appear when you go from one place to another: walking forward
// you come in through the back door, walking back through the front one.
export function arrivalFor(from, to) {
  const list = PORTALS[to] ?? [];
  if (!isCar(to)) return list[0].arrive;
  const a = TRAIN_ORDER.indexOf(from), b = TRAIN_ORDER.indexOf(to);
  const forward = a < 0 || b < 0 ? true : b < a;
  const want = forward ? 'back' : 'front';
  return (list.find((p) => p.id === want) ?? list[0]).arrive;
}
export const ARRIVALS = FLOOR_IDS.flatMap((floor) => (PORTALS[floor] ?? []).map((p) => ({ floor, id: p.id, ...p.arrive })));

// ------------------------------------------------------------------ sleeping cars
// Six cabins of 3.2 m on the south side (z < 0.3), the corridor on the north
// side. A cabin's door is in its middle; its berth runs along the outer wall.
export const CABIN = { z0: -HALF, z1: 0.3, w: 3.2, first: -9.6 };
export const cabinX0 = (car, n) => CABIN.first + (n - (car === 3 ? 1 : 7)) * CABIN.w;
export const OPEN_CABINS = { 3: [3, 5], 4: [7, 8, 9] };
const cabinNumbers = (car) => (car === 3 ? [1, 2, 3, 4, 5, 6] : [7, 8, 9, 10, 11, 12]);
export function cabinAt(floor, x, z) {
  if (floor !== 3 && floor !== 4) return null;
  if (z > CABIN.z1) return null;
  return cabinNumbers(floor).find((n) => { const x0 = cabinX0(floor, n); return x > x0 && x < x0 + CABIN.w; }) ?? null;
}

// ------------------------------------------------------------------ sectors
const S = (floor, id, name, x0, z0, x1, z1, sound, light = '#ffe2b0') => ({ floor, id, name, x0, z0, x1, z1, sound, light });
export const SECTORS = [
  S(0, 'anden', 'Andén 1 · Mendoza', -12, -1.0, 12, 7.6, 'station', '#ffd890'),
  S(1, 'cabina', 'Cabina del maquinista', 5.6, -1.7, 12, 1.7, 'cab', '#a8c8ff'),
  S(1, 'motor', 'Sala de motores', -12, -1.7, 5.6, 1.7, 'engine', '#ffb070'),
  S(2, 'furgon', 'Furgón de equipajes', -12, -1.7, 12, 1.7, 'van', '#ffe0a8'),
  ...[3, 4].flatMap((car) => cabinNumbers(car).filter((n) => OPEN_CABINS[car].includes(n)).map((n) => S(car, `camarote-${n}`, n === 8 ? 'Camarote 8 · el tuyo' : `Camarote ${n}`, cabinX0(car, n), CABIN.z0, cabinX0(car, n) + CABIN.w, CABIN.z1, 'cabin', n === 7 ? '#d8e4ff' : '#ffd8a8'))),
  S(3, 'pasillo', 'Pasillo del coche cama A', -12, -1.7, 12, 1.7, 'sleeper'),
  S(4, 'pasillo', 'Pasillo del coche cama B', -12, -1.7, 12, 1.7, 'sleeper'),
  S(5, 'cocina', 'Cocina del comedor', 6.5, -1.7, 12, -0.2, 'kitchen', '#fff0d0'),
  S(5, 'comedor', 'Coche comedor', -12, -1.7, 12, 1.7, 'dining', '#ffd8a0'),
  S(6, 'bar', 'Coche bar', -12, -1.7, 12, 1.7, 'bar', '#ffb080'),
  S(7, 'mirador', 'Coche mirador', -12, -1.7, 12, 1.7, 'dome', '#b8c8ff'),
  S(8, 'anden', 'Andén de Puente del Inca · 2720 m', -12, -1.0, 12, 7.6, 'snow', '#ffe8c0'),
  S(9, 'anden', 'Andén de Los Andes', -12, -1.0, 12, 7.6, 'dawn', '#fff0d8'),
];
export function sectorAt(floor, x, z) {
  return SECTORS.find((s) => s.floor === floor && x >= s.x0 && x <= s.x1 && z >= s.z0 && z <= s.z1) ?? null;
}

// ------------------------------------------------------------------ walls
// Segments [x0, z0, x1, z1]; a fifth value: 'glass' (a window), 'dome' (the
// big glass of the observation car), 'low' (a platform rail, waist high).
function side(z, from, to, kind = 'glass', pane = 1.3, pier = 0.7) {
  const out = [];
  let x = from;
  while (x < to - 0.01) {
    const p = Math.min(pier, to - x);
    out.push([x, z, x + p, z]);
    x += p;
    if (x >= to - 0.01) break;
    const g = Math.min(pane, to - x);
    out.push([x, z, x + g, z, kind]);
    x += g;
  }
  return out;
}
function ends(floor) {
  const z = doorZ(floor);
  const out = [];
  for (const x of [-12, 12]) {
    const closed = (x === -12 && floor === 7) || (x === 12 && floor === 1);
    if (closed) out.push([x, -HALF, x, HALF, floor === 7 ? 'dome' : 'glass']);
    else out.push([x, -HALF, x, z - 0.55], [x, z + 0.55, x, HALF]);
  }
  return out;
}
function sleeperWalls(car) {
  const out = [...ends(car), ...side(HALF, -12, 12)];
  // The outer wall: one window per cabin, solid in the vestibules.
  out.push([-12, -HALF, -9.6, -HALF], [9.6, -HALF, 12, -HALF]);
  for (const n of cabinNumbers(car)) {
    const x0 = cabinX0(car, n);
    out.push([x0, -HALF, x0 + 0.6, -HALF], [x0 + 0.6, -HALF, x0 + 2.6, -HALF, 'glass'], [x0 + 2.6, -HALF, x0 + 3.2, -HALF]);
    // The cabin's corridor wall, with its door when the cabin is open.
    const mid = x0 + 1.6;
    if (OPEN_CABINS[car].includes(n)) out.push([x0, CABIN.z1, mid - 0.45, CABIN.z1], [mid + 0.45, CABIN.z1, x0 + 3.2, CABIN.z1]);
    else out.push([x0, CABIN.z1, x0 + 3.2, CABIN.z1]);
  }
  for (let k = 0; k <= 6; k++) { const x = CABIN.first + k * CABIN.w; out.push([x, -HALF, x, CABIN.z1]); }
  return out;
}
const PLATFORM_WALLS = [
  // The back of the platform: the station front with its doors, or a rail.
  [-12, 7.6, 12, 7.6, 'low'],
];
export const WALLS = {
  0: [...PLATFORM_WALLS],
  1: [...ends(1), ...side(HALF, -12, 5.6, 'glass', 0.6, 2.6), ...side(-HALF, -12, 5.6, 'glass', 0.6, 2.6), [5.6, HALF, 7.2, HALF], [7.2, HALF, 10.8, HALF, 'glass'], [10.8, HALF, 12, HALF], [5.6, -HALF, 7.2, -HALF], [7.2, -HALF, 10.8, -HALF, 'glass'], [10.8, -HALF, 12, -HALF]],
  2: [...ends(2), ...side(HALF, -12, 12, 'glass', 0.8, 3.2), ...side(-HALF, -12, 12, 'glass', 0.8, 3.2)],
  3: sleeperWalls(3),
  4: sleeperWalls(4),
  5: [...ends(5), ...side(HALF, -12, 12), ...side(-HALF, -12, 6.5),
    [6.5, -HALF, 12, -HALF], [6.5, -HALF, 6.5, -0.2], [6.5, -0.2, 7.8, -0.2], [9.8, -0.2, 12, -0.2]],
  6: [...ends(6), ...side(HALF, -12, 12, 'glass', 1.6, 0.6), ...side(-HALF, -12, 12, 'glass', 1.6, 0.6)],
  7: [...ends(7), ...side(HALF, -12, 12, 'dome', 2.2, 0.3), ...side(-HALF, -12, 12, 'dome', 2.2, 0.3)],
  8: [...PLATFORM_WALLS],
  9: [...PLATFORM_WALLS],
};

// ------------------------------------------------------------------ furniture
// { type, x, z, w, d, rot } — w along x, d along z before `rot` quarter turns
// (rot 0: the front of a seat faces +z; rot 1 faces +x). `solid: false` for
// things you can walk over or through.
const F = (type, x, z, w, d, rot = 0, extra = {}) => ({ type, x, z, w, d, rot, ...extra });
const flat = (type, x, z, w, d, extra = {}) => F(type, x, z, w, d, 0, { solid: false, ...extra });
const lamps = (z = 0) => [-8, -2, 4, 10].map((x) => flat('lamp-ceiling', x, z, 0.6, 0.6));
// A cabin: the berth (lower) along the outer wall, the bunk above, the
// little sink by the door, the luggage on the rack.
function cabin(car, n, extra = []) {
  const x0 = cabinX0(car, n);
  return [F('berth', x0 + 1.15, -1.1, 2.0, 0.72), flat('bunk', x0 + 1.15, -1.15, 2.0, 0.65), F('sink', x0 + 2.8, -1.32, 0.56, 0.48), flat('rack', x0 + 1.6, -1.35, 2.6, 0.4), flat('cabinlamp', x0 + 1.6, -1.0, 0.3, 0.3), ...extra];
}
// A table of the dining car against one wall, with its two benches.
function diningTable(x, s) {
  const z = s * 1.1;
  return [F('dtable', x, z, 0.8, 0.75, 0, { side: s }), F('dbench', x - 0.78, s * 1.12, 0.85, 0.45, 1), F('dbench', x + 0.78, s * 1.12, 0.85, 0.45, 3)];
}
export const DINING_TABLES = [-8.4, -5.4, -2.4, 0.6, 3.6];
export const FURNITURE = {
  0: [
    // The platform at Mendoza: the station front, benches, the kiosk, lamps, the big clock.
    F('station', 0, 7.35, 24, 0.5, 0, { place: 'mendoza' }), F('kiosk', 8.6, 5.9, 2.4, 1.4), F('bench', -9.0, 6.8, 2.0, 0.55, 2), F('bench', 4.0, 6.8, 2.0, 0.55, 2),
    F('lamppost', -10.5, 0.4, 0.24, 0.24), F('lamppost', -1.5, 0.4, 0.24, 0.24), F('lamppost', 7.5, 0.4, 0.24, 0.24),
    F('cart', 5.6, 1.8, 1.4, 0.8), flat('urn', 5.3, 1.8, 0.2, 0.2, { on: 0.62 }), F('suitcases', 2.9, 3.6, 0.9, 0.6),
    flat('clock', 0, 7.05, 1.0, 0.2, { time: '23:40' }), flat('edge', 0, -0.85, 24, 0.16), flat('sign', -6, 6.95, 3.2, 0.1, { text: 'MENDOZA' }),
    F('trainside', 0, -2.9, 24, 3.8, 0, { door: -4.0 }),
  ],
  1: [
    // The locomotive: the diesel engine down the middle, two walkways, the cab.
    F('engine', -2.3, 0, 14.6, 1.1), F('console', 11.5, 0, 0.6, 3.0), F('cabseat', 10.0, -0.8, 0.55, 0.55, 1), F('cabseat', 10.0, 0.8, 0.55, 0.55, 1),
    F('toolbox', 6.3, 1.25, 0.6, 0.45), flat('thermos', 11.4, 0.6, 0.2, 0.2, { on: 1.0 }), flat('cups', 11.4, -0.1, 0.3, 0.2, { on: 1.0 }), flat('urn', 11.4, -0.75, 0.2, 0.2, { on: 1.0, empty: true }),
    flat('blanket', 10.0, 0.8, 0.5, 0.5, { on: 0.46 }), flat('lamp-ceiling', 8.6, 0, 0.6, 0.6), flat('lamp-ceiling', -6, 0, 0.6, 0.6), flat('lamp-ceiling', 1, 0, 0.6, 0.6),
  ],
  2: [
    ...lamps(),
    // The luggage van: crates and suitcases, mail bags, the guard's desk, Tango's crate, the cello case.
    F('guarddesk', -9.2, -1.15, 1.6, 0.7), F('chair', -9.2, -0.45, 0.45, 0.45, 2), F('crates', -6.2, 1.15, 2.4, 0.75), F('suitcases', -3.4, -1.2, 1.6, 0.6),
    F('mailbags', -1.0, 1.15, 2.0, 0.75), F('dogcrate', 2.2, -1.12, 1.1, 0.75), F('crates', 9.4, -1.15, 2.6, 0.7), F('suitcases', 9.8, 1.2, 1.4, 0.55),
    F('cellocase', 6.2, 1.2, 0.5, 0.45), F('bikes', 3.4, 1.25, 1.6, 0.5), F('cheese', 7.4, -1.25, 0.8, 0.5),
  ],
  3: [...lamps(0.95), ...cabin(3, 3, [flat('book', -1.7, -1.2, 0.3, 0.2, { on: 0.47 })]), ...cabin(3, 5, [flat('flowers', 4.35, -1.3, 0.3, 0.3, { on: 0.47 })]), F('heater', -11.4, -1.25, 0.5, 0.5), F('heater', 11.4, -1.25, 0.5, 0.5)],
  4: [...lamps(0.95), ...cabin(4, 7, [flat('note', -8.7, -1.2, 0.25, 0.18, { on: 0.47 }), flat('dentures', -7.1, -1.3, 0.12, 0.12, { on: 0.92 }), flat('curtain', -8.0, -1.5, 2.0, 0.1, { open: true })]),
    ...cabin(4, 8, [F('backpack', -5.4, -1.3, 0.5, 0.35, 0, { on: 0.45, solid: false })]), ...cabin(4, 9), F('heater', -11.4, -1.25, 0.5, 0.5), F('heater', 11.4, -1.25, 0.5, 0.5)],
  5: [
    ...lamps(), ...DINING_TABLES.flatMap((x) => [...diningTable(x, 1), ...diningTable(x, -1)]),
    // The kitchen behind its pass-through counter.
    F('kcounter', 8.8, -0.2, 2.0, 0.3), F('stove', 10.4, -1.3, 2.2, 0.5), F('fridge', 11.5, -0.75, 0.7, 0.6), F('kshelf', 7.3, -1.38, 1.4, 0.35), F('pot', 10.0, -1.3, 0.3, 0.3, 0, { solid: false, on: 0.92 }),
  ],
  6: [
    ...lamps(),
    // The bar: the counter, the bottles behind it, stools, armchairs, the card table.
    F('barcounter', 1.0, -0.55, 8.0, 0.4), F('backbar', 1.0, -1.42, 8.0, 0.2), F('stool', -1.6, 0.0, 0.4, 0.4), F('stool', 3.6, 0.0, 0.4, 0.4),
    F('cardtable', -8.0, 0.75, 0.9, 0.9), F('chair', -8.85, 0.75, 0.45, 0.45, 1), F('chair', -7.15, 0.75, 0.45, 0.45, 3),
    F('armchair', -10.8, -1.12, 0.75, 0.75, 0), F('armchair', -5.2, -1.12, 0.75, 0.75, 0), F('sidetable', -6.2, -1.25, 0.45, 0.45),
    F('armchair', 8.6, 1.12, 0.75, 0.75, 2), F('armchair', 10.4, 1.12, 0.75, 0.75, 2), F('sidetable', 9.5, 1.25, 0.45, 0.45), flat('rug', -8, 0.2, 3.2, 2.4),
  ],
  7: [
    ...lamps().filter((l) => l.x > -6),
    // The observation car: swivel seats facing the glass, the telescope at the back.
    ...[-6.0, -3.0, 0.0, 6.5, 9.0].flatMap((x) => [F('swivel', x, 0.95, 0.6, 0.6, 0), F('swivel', x, -0.95, 0.6, 0.6, 2)]),
    F('telescope', -11.1, -0.6, 0.5, 0.5), flat('rug', -9.5, 0, 3.4, 2.2),
  ],
  8: [
    // Puente del Inca at 2720 m: the little stone station, snow, the gendarmes' booth.
    F('station', 0, 7.35, 24, 0.5, 0, { place: 'inca' }), F('booth', 9.0, 4.6, 2.2, 1.6), F('bench', -6.0, 6.8, 2.0, 0.55, 2), F('stall', -9.6, 5.6, 2.2, 1.2),
    F('lamppost', -10.5, 0.4, 0.24, 0.24), F('lamppost', 3.5, 0.4, 0.24, 0.24), F('snowbank', -11.3, 2.8, 1.0, 2.6), F('snowman', 5.0, 6.4, 0.6, 0.6),
    flat('edge', 0, -0.85, 24, 0.16), flat('sign', -2, 6.95, 4.4, 0.1, { text: 'PUENTE DEL INCA · 2720 m' }), flat('lantern', 1.6, 4.4, 0.2, 0.2),
    F('trainside', 0, -2.9, 24, 3.8, 0, { door: -4.0 }),
  ],
  9: [
    // Los Andes at dawn: the old station, the palms, the benches, the taxis' kerb.
    F('station', 0, 7.35, 24, 0.5, 0, { place: 'andes' }), F('bench', -8.0, 6.8, 2.0, 0.55, 2), F('bench', 6.0, 6.8, 2.0, 0.55, 2), F('palm', -11.0, 5.6, 0.6, 0.6), F('palm', 11.0, 5.6, 0.6, 0.6),
    F('lamppost', -6.5, 0.4, 0.24, 0.24), F('lamppost', 6.5, 0.4, 0.24, 0.24), F('cart', -9.6, 2.2, 1.4, 0.8),
    flat('edge', 0, -0.85, 24, 0.16), flat('sign', 0, 6.95, 3.6, 0.1, { text: 'LOS ANDES' }), flat('clock', 3.0, 7.05, 1.0, 0.2, { time: '06:40' }),
    F('trainside', 0, -2.9, 24, 3.8, 0, { door: -4.0 }),
  ],
};

// ------------------------------------------------------------------ scenes
const L = (skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras = [], extra = {}) =>
  ({ skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras, ...extra });
export const LOOKS = {
  olga: L('#f0d6c0', 'elderly', 'f', 'bun', '#e8e8ec', 'coat', '#b0202a', 'pants', '#2a2a34', ['glasses', 'earrings', 'scarf'], { seed: 7 }),
  ramiro: L('#b9825c', 'adult', 'm', 'short', '#1a1210', 'uniform', '#1f2e4a', 'pants', '#1f2e4a', ['mustache', 'hat'], { seed: 11 }),
  bruno: L('#e8c0a0', 'adult', 'm', 'short', '#3a2416', 'suit', '#5a5a62', 'pants', '#2a2a30', ['glasses'], { seed: 13 }),
  valentina: L('#f0d6c0', 'young', 'f', 'long', '#2a1a12', 'sweater', '#2a5a5a', 'pants', '#2a2a30', ['earrings'], { seed: 15 }),
};
const PLACES = {
  equipaje: { spot: { x: 2.6, z: 1.6 }, npc: { x: 3.9, z: 2.7, heading: -2.4 }, pose: 'carry', mood: 'smile', look: LOOKS.olga,
    extras: [{ x: 6.0, z: 3.0, heading: -2.0, pose: 'arms', mood: 'angry', look: L('#c99468', 'old', 'm', 'cap', '#9a9a9a', 'uniform', '#6a3a1e', 'pants', '#3a2a1a', ['mustache'], { seed: 21 }) }] },
  despedida: { spot: { x: -6.6, z: 2.2 }, npc: { x: -7.9, z: 3.3, heading: 2.3 }, pose: 'cry', mood: 'sad', look: L('#c48f69', 'adult', 'f', 'braids', '#1a1210', 'sweater', '#d8602a', 'skirt', '#2a3040', ['earrings', 'bag'], { seed: 31 }),
    extras: [{ x: -5.3, z: 3.6, heading: -2.5, pose: 'carry', mood: 'worried', look: L('#c48f69', 'young', 'm', 'short', '#120d0b', 'hoodie', '#2a4a7a', 'jeans', '#1f2840', ['backpack'], { seed: 32 }) }] },
  ronquidos: { spot: { x: -1.6, z: 0.95 }, npc: { x: -0.95, z: -0.3, heading: -0.5 }, pose: 'arms', mood: 'sleepy', look: L('#f0d6c0', 'young', 'm', 'curly', '#5a3a1e', 'tshirt', '#4a7a3a', 'shorts', '#2a3a4a', ['backpack'], { seed: 41 }),
    extras: [{ x: -1.85, z: -1.06, y: 0.42, heading: Math.PI / 2, pose: 'lie', lying: true, mood: 'sleepy', look: L('#e2b896', 'old', 'm', 'bald', '#d8d8d8', 'sweater', '#6a5a8a', 'pants', '#3a3a3a', ['mustache'], { seed: 42 }) }] },
  lunademiel: { spot: { x: 4.8, z: 0.95 }, npc: { x: 4.75, z: -0.74, heading: 0, seat: true }, pose: 'sit', mood: 'worried', look: L('#c48f69', 'young', 'f', 'long', '#1a1210', 'sweater', '#f4f0ea', 'pants', '#d8c8e8', ['earrings'], { seed: 51 }),
    extras: [{ x: 5.75, z: -0.35, heading: -2.4, pose: 'arms', mood: 'angry', look: L('#b9825c', 'young', 'm', 'short', '#120d0b', 'suit', '#2a2a30', 'pants', '#2a2a30', [], { seed: 52 }) }] },
  camarote7: { spot: { x: -8.0, z: 0.95 }, npc: { x: -7.25, z: -0.3, heading: -0.6 }, pose: 'read', mood: 'worried', look: LOOKS.ramiro,
    extras: [{ x: -9.0, z: -0.3, heading: 0.6, pose: 'arms', mood: 'scared', look: L('#a8724e', 'adult', 'f', 'bun', '#120d0b', 'uniform', '#7a1e2e', 'skirt', '#2a2a30', ['earrings'], { seed: 62 }) }] },
  sobrino: { spot: { x: -1.6, z: 0.95 }, npc: { x: -1.55, z: -0.74, heading: 0, seat: true }, pose: 'sit', mood: 'neutral', look: LOOKS.bruno },
  cena: { spot: { x: 8.8, z: 0.75 }, npc: { x: 8.8, z: -0.8, heading: 0 }, pose: 'cook', mood: 'angry', look: L('#c48f69', 'old', 'f', 'bun', '#3a3a3a', 'apron', '#f4f0ea', 'pants', '#2a2a30', ['earrings'], { seed: 71 }),
    extras: [{ x: 5.4, z: -0.95, heading: 1.2, pose: 'carry', mood: 'worried', look: L('#b9825c', 'young', 'm', 'short', '#120d0b', 'shirt', '#f4f0ea', 'pants', '#141418', ['mustache'], { seed: 72 }) }] },
  sobremesa: { spot: { x: -5.4, z: 0.15 }, npc: { x: -5.98, z: -1.12, heading: Math.PI / 2, seat: true }, pose: 'sit', mood: 'surprised', look: L('#f0d6c0', 'old', 'f', 'curly', '#c8c0d8', 'sweater', '#2a6a8a', 'pants', '#2a2a30', ['glasses', 'earrings'], { seed: 81 }),
    extras: [{ x: -4.82, z: -1.12, heading: -Math.PI / 2, pose: 'sit', seat: true, mood: 'smile', look: L('#c99468', 'old', 'm', 'bald', '#e8e8e8', 'suit', '#3a3a30', 'pants', '#2a2a30', ['glasses', 'mustache'], { seed: 82 }) }] },
  barman: { spot: { x: 1.5, z: 0.6 }, npc: { x: 1.5, z: -1.03, heading: 0 }, pose: 'cook', mood: 'smile', look: L('#c48f69', 'adult', 'm', 'short', '#120d0b', 'shirt', '#141418', 'pants', '#141418', ['beard'], { seed: 91 }) },
  cartas: { spot: { x: -8.0, z: -0.45 }, npc: { x: -8.73, z: 0.75, heading: Math.PI / 2, seat: true }, pose: 'sit', mood: 'smile', look: L('#c99468', 'adult', 'f', 'bob', '#120d0b', 'suit', '#5a1a2a', 'pants', '#2a2a30', ['glasses', 'earrings'], { seed: 101 }),
    extras: [{ x: -7.27, z: 0.75, heading: -Math.PI / 2, pose: 'sit', seat: true, mood: 'tipsy', look: L('#a8724e', 'adult', 'm', 'short', '#120d0b', 'shirt', '#e8d8a0', 'pants', '#3a3a30', ['hat'], { seed: 102 }) }] },
  astronoma: { spot: { x: -8.6, z: 0.0 }, npc: { x: -10.3, z: 0.45, heading: -1.9 }, pose: 'point', mood: 'surprised', look: L('#c99468', 'adult', 'f', 'ponytail', '#2a1a12', 'jacket', '#3a3a6a', 'jeans', '#1f2840', ['glasses', 'scarf'], { seed: 111 }) },
  directo: { spot: { x: 1.4, z: -0.25 }, npc: { x: 3.0, z: 0.45, heading: -2.0 }, pose: 'phone', mood: 'laugh', look: L('#c48f69', 'young', 'f', 'long', '#e0a060', 'jacket', '#e0408a', 'jeans', '#1f2840', ['earrings', 'glasses'], { seed: 121 }),
    extras: [{ x: 4.8, z: -0.45, heading: -1.6, pose: 'phone', mood: 'neutral', look: L('#c48f69', 'young', 'm', 'cap', '#120d0b', 'hoodie', '#141418', 'jeans', '#1f2840', ['headphones'], { seed: 122 }) }] },
  perro: { spot: { x: 1.4, z: 0.3 }, npc: { x: 3.4, z: -0.55, heading: -2.0 }, pose: 'crouch', mood: 'worried', look: L('#a8724e', 'old', 'm', 'cap', '#9a9a9a', 'uniform', '#3a4a3a', 'pants', '#3a4a3a', ['mustache'], { seed: 131 }) },
  violonchelo: { spot: { x: 6.6, z: -0.2 }, npc: { x: 7.6, z: 0.95, heading: -2.4 }, pose: 'arms', mood: 'scared', look: LOOKS.valentina },
  nieve: { spot: { x: 0.8, z: 2.6 }, npc: { x: 1.9, z: 4.0, heading: -2.6 }, pose: 'stand', mood: 'smile', look: L('#a8724e', 'elderly', 'm', 'cap', '#e8e8e8', 'coat', '#3a3a2a', 'pants', '#2a2a2a', ['scarf', 'mustache'], { seed: 141 }),
    extras: [{ x: -0.5, z: 3.9, heading: 2.6, pose: 'arms', mood: 'worried', look: LOOKS.ramiro }] },
  frontera: { spot: { x: 6.4, z: 1.6 }, npc: { x: 7.4, z: 3.0, heading: -2.4 }, pose: 'read', mood: 'angry', look: L('#c48f69', 'adult', 'f', 'bun', '#120d0b', 'uniform', '#4a5a3a', 'pants', '#4a5a3a', ['hat'], { seed: 151 }),
    extras: [{ x: 5.4, z: 3.1, heading: 2.4, pose: 'hands-up', mood: 'scared', look: L('#c99468', 'adult', 'm', 'curly', '#2a1a12', 'jacket', '#7a5a2a', 'jeans', '#1f2840', ['beard'], { seed: 152 }) }] },
  maquinista: { spot: { x: 8.0, z: 0.0 }, npc: { x: 10.3, z: -0.8, heading: Math.PI / 2, seat: true }, pose: 'sit', mood: 'surprised', look: L('#c99468', 'elderly', 'm', 'short', '#e8e8e8', 'uniform', '#2a3a5a', 'pants', '#2a3a5a', ['mustache', 'hat'], { seed: 161 }),
    extras: [{ x: 9.0, z: 1.0, heading: -2.2, pose: 'arms', mood: 'worried', look: L('#a8724e', 'young', 'f', 'ponytail', '#120d0b', 'uniform', '#e05a1a', 'pants', '#2a2a30', [], { seed: 162 }) }] },
  amanecer: { spot: { x: 1.0, z: 1.0 }, npc: { x: 1.1, z: 2.75, heading: Math.PI }, pose: 'wave', mood: 'smile', look: LOOKS.olga,
    extras: [{ x: 2.8, z: 2.3, heading: -2.4, pose: 'arms', mood: 'surprised', look: LOOKS.ramiro }, { x: -0.7, z: 2.5, heading: 2.4, pose: 'cry', mood: 'sad', look: LOOKS.bruno }] },
};

export const SCENES = STORY.map((story) => ({ ...story, ...PLACES[story.id] }));
export const SCENE_IDS = SCENES.map((s) => s.id);
export const sceneById = (id) => SCENES.find((s) => s.id === id);
export const SPOT_RADIUS = 1.0;

// ------------------------------------------------------------------ life
// Passengers who walk: along the platform, down the dining car aisle, in the snow.
const T = (skin, age, body, hair, hairColor, top, topColor, bottom, bottomColor, extras = [], seed = 0) => L(skin, age, body, hair, hairColor, top, topColor, bottom, bottomColor, extras, { seed });
export const WALKERS = {
  0: [{ look: T('#e2b896', 'adult', 'f', 'ponytail', '#3a2416', 'coat', '#3a6a8a', 'jeans', '#24304a', ['suitcase'], 901), path: [[-10.5, 4.6], [10.5, 4.6]], speed: 1.2, pause: 1.5 }],
  5: [{ look: T('#c48f69', 'young', 'f', 'bun', '#120d0b', 'shirt', '#f4f0ea', 'pants', '#141418', [], 951), path: [[-10.4, 0], [4.4, 0]], speed: 0.9, pause: 3 }],
  8: [{ look: T('#c48f69', 'child', 'm', 'short', '#120d0b', 'coat', '#2a6ac8', 'pants', '#2a2a30', ['hat'], 981), path: [[-3.5, 5.6], [2.6, 5.6], [2.6, 6.4], [-3.5, 6.4]], speed: 1.6, pause: 0.5 }],
};

// Passengers who stay put. You can talk to all of them (E): see pasajeros.mjs.
export const CROWD = {
  0: [{ x: -9.0, z: 6.5, heading: Math.PI, pose: 'sit', seat: true, mood: 'sleepy' }, { x: 10.6, z: 3.0, heading: -2.2, pose: 'phone', mood: 'worried' }],
  2: [{ x: -9.2, z: -0.57, heading: Math.PI, pose: 'sit', seat: true, mood: 'sleepy' }],
  3: [{ x: -11.3, z: 1.1, heading: 1.2, pose: 'phone', mood: 'neutral' }, { x: 10.8, z: -0.7, heading: -1.6, pose: 'read', mood: 'smile' }],
  4: [{ x: 10.8, z: -0.8, heading: -1.8, pose: 'arms', mood: 'worried' }, { x: 11.3, z: 1.1, heading: -1.2, pose: 'window', mood: 'sad' }],
  5: [{ x: 1.18, z: 1.12, heading: -Math.PI / 2, pose: 'sit', seat: true, mood: 'smile' }, { x: -2.98, z: 1.12, heading: Math.PI / 2, pose: 'sit', seat: true, mood: 'tipsy' }],
  6: [{ x: -10.8, z: -0.8, heading: 0, pose: 'sit', seat: true, mood: 'sleepy' }, { x: 5.6, z: 0.35, heading: -2.4, pose: 'stand', mood: 'tipsy' }],
  7: [{ x: -3.0, z: 1.05, heading: 0, pose: 'sit', seat: true, mood: 'love' }, { x: 6.5, z: -1.05, heading: Math.PI, pose: 'sit', seat: true, mood: 'surprised' }],
  8: [{ x: -9.6, z: 4.5, heading: 0.2, pose: 'arms', mood: 'smile' }, { x: -6.0, z: 6.5, heading: Math.PI, pose: 'sit', seat: true, mood: 'sleepy' }],
  9: [{ x: 8.6, z: 2.6, heading: -2.2, pose: 'sign', mood: 'smile' }, { x: -8.0, z: 6.5, heading: Math.PI, pose: 'sit', seat: true, mood: 'worried' }],
};

// Short lines people say as you walk past (shown as bubbles near them).
export const CHATTER = {
  0: ['¡Pasajeros al tren!', 'Andén uno, el Nocturno.', '¿Lleva todo?', 'Abrígate, que arriba nieva.', '¡Que te vaya bien!'],
  1: ['Señal en verde.', 'Ojo con la curva.', '¿Quién anda ahí?'],
  2: ['¡Guau!', 'Cuidado con esa valija.', 'Esto pesa como un muerto.'],
  3: ['Shhh, que hay gente durmiendo.', '¿Escuchaste ese ronquido?', '¿A qué hora llegamos?'],
  4: ['¿Dónde está la señora del siete?', 'Dicen que se cayó del tren.', 'Yo no escuché nada.'],
  5: ['¿Queda sopa?', 'La cuenta, por favor.', 'Esta mesa se mueve.'],
  6: ['Otra ronda, Wilmer.', 'Apuesto por el sobrino.', 'Salud.'],
  7: ['Mira, la Cruz del Sur.', 'Qué silencio hay arriba.', 'Ahí se ve el Aconcagua.'],
  8: ['¡Qué frío!', '¿Cuánto falta?', 'Mira el puente de piedra.', 'No se alejen del tren.'],
  9: ['¡Bienvenidos a Chile!', '¿Taxi?', 'Qué amanecer, ¿no?', 'Llegamos.'],
};

// The train's loudspeakers, a new announcement every minute or so.
export const ANNOUNCEMENTS = [
  'Buenas noches. El Nocturno de los Andes sale de Mendoza a las 23:40. Próxima parada: Uspallata.',
  'Se informa a los señores pasajeros que el coche comedor cierra a la una.',
  'Por favor, no saquen la cabeza por las ventanillas. Sobre todo en los túneles.',
  'Se busca a la señora Olga Ríos, del camarote 7. Si la ven, avisen al jefe de tren.',
  'Puente del Inca: veinte minutos de parada. Hace ocho grados bajo cero.',
  'Control de Gendarmería en el andén. Tengan su documento a mano.',
  'El coche bar recuerda que el pisco no se lleva a los camarotes. Bueno, sí, pero en vaso.',
  'Próxima estación: Los Andes. Hora estimada de llegada: 06:40.',
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

const NOT_SOLID = new Set(['rug', 'lamp-ceiling', 'urn', 'clock', 'edge', 'sign', 'thermos', 'cups', 'blanket', 'bunk', 'rack', 'cabinlamp', 'book', 'flowers', 'note', 'dentures', 'curtain', 'backpack', 'pot', 'lantern']);
const TALL = new Set(['station', 'kiosk', 'engine', 'backbar', 'crates', 'booth', 'fridge', 'stove', 'kshelf', 'trainside', 'stall', 'palm', 'heater']);
// How high you stand after jumping onto something (Space).
const TOPS = { bench: 0.42, chair: 0.42, berth: 0.42, dbench: 0.42, swivel: 0.42, armchair: 0.42, cabseat: 0.42, stool: 0.75, dtable: 0.76, cardtable: 0.74, suitcases: 0.62, cart: 0.6, mailbags: 0.6, dogcrate: 0.75, toolbox: 0.5, sink: 0.85, guarddesk: 0.76, cheese: 0.5, sidetable: 0.55, snowbank: 0.7 };
export function topOf(item) { return TOPS[item.type] ?? null; }

export function cameraBlockers(floor) {
  return [...(WALLS[floor] ?? []).filter((w) => w[4] !== 'glass' && w[4] !== 'low' && w[4] !== 'dome').map(wallBox), ...(FURNITURE[floor] ?? []).filter((f) => TALL.has(f.type)).map(footprint)];
}

function scenePeople(floor) {
  return SCENES.filter((s) => s.floor === floor).flatMap((s) => [s.npc, ...(s.extras ?? [])]).filter((p) => !p.lying);
}
export function solidsFor(floor) {
  const walls = (WALLS[floor] ?? []).map(wallBox);
  const things = (FURNITURE[floor] ?? []).filter((f) => f.solid !== false && !NOT_SOLID.has(f.type)).map((f) => ({ ...footprint(f), ...(topOf(f) != null || f.top != null ? { top: f.top ?? topOf(f) } : {}) }));
  const people = scenePeople(floor).map((p) => box(p.x - 0.3, p.z - 0.3, p.x + 0.3, p.z + 0.3));
  // Closed cabins: the space behind their walls.
  const closed = floor === 3 || floor === 4 ? cabinNumbers(floor).filter((n) => !OPEN_CABINS[floor].includes(n)).map((n) => box(cabinX0(floor, n), CABIN.z0, cabinX0(floor, n) + CABIN.w, CABIN.z1)) : [];
  // The kitchen of the dining car is staff only: its back wall and the cook's side.
  const kitchen = floor === 5 ? [box(6.5, -HALF, 7.8, -0.28)] : [];
  return [...walls, ...things, ...people, ...closed, ...kitchen];
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

// Where the camera stands while a scene is open. It tries both sides of the
// two people and twelve spots over the player's shoulder, pulls each one in
// front of the walls (and inside the car), and keeps the one that sees the
// most faces through the doors, then the one with the most room. A cabin
// scene is filmed from the corridor, through its door.
function sightClear(walls, ax, az, bx, bz) {
  for (let i = 1; i < 16; i++) {
    const k = i / 16, x = ax + (bx - ax) * k, z = az + (bz - az) * k;
    if (walls.some((w) => x > w.x0 && x < w.x1 && z > w.z0 && z < w.z1)) return false;
  }
  return true;
}
function armTo(floor, walls, x, z, cx, cz) {
  const b = floorById(floor).bounds;
  for (let i = 1; i <= 12; i++) {
    const k = i / 12, px = x + (cx - x) * k, pz = z + (cz - z) * k;
    const out = !OPEN_AIR(floor) && (px < b.minX + 0.35 || px > b.maxX - 0.35 || pz < b.minZ + 0.35 || pz > b.maxZ - 0.35);
    if (out || walls.some((w) => px > w.x0 - 0.25 && px < w.x1 + 0.25 && pz > w.z0 - 0.25 && pz < w.z1 + 0.25)) return Math.max(0.15, (i - 1) / 12);
  }
  return 1;
}
export function sceneCamera(scene, player = scene.spot) {
  const walls = cameraBlockers(scene.floor);
  const npc = scene.npc;
  const mid = { x: (player.x + npc.x) / 2, z: (player.z + npc.z) / 2 };
  const faces = [npc, ...(scene.extras ?? []), player];
  const gap = Math.hypot(npc.x - player.x, npc.z - player.z) || 1;
  const ux = (npc.x - player.x) / gap, uz = (npc.z - player.z) / gap; // player → npc
  const side = Math.atan2(ux, uz) + Math.PI / 2;
  const dist = Math.max(2.6, gap * 0.9 + 1.2);
  const tries = [
    ...[1, -1].map((sg) => ({ from: mid, x: mid.x + sg * Math.sin(side) * dist, z: mid.z + sg * Math.cos(side) * dist })),
    ...[0.4, 1.2].flatMap((back) => [-1.8, -1.1, -0.5, 0.5, 1.1, 1.8].map((l) => ({ from: player, x: player.x - ux * back + uz * l, z: player.z - uz * back - ux * l }))),
  ];
  let best = null;
  for (const t of tries) {
    const k = armTo(scene.floor, walls, t.from.x, t.from.z, t.x, t.z);
    const x = t.from.x + (t.x - t.from.x) * k, z = t.from.z + (t.z - t.from.z) * k;
    const seen = faces.filter((f) => sightClear(walls, x, z, f.x, f.z)).length;
    const room = Math.min(Math.hypot(x - mid.x, z - mid.z), 3);
    const score = (sightClear(walls, x, z, npc.x, npc.z) ? 100 : 0) + seen * 10 + room * 3;
    if (!best || score > best.score) best = { x, z, score, seen, room };
  }
  return { x: best.x, z: best.z, look: mid, seen: best.seen, faces: faces.length, room: best.room };
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
