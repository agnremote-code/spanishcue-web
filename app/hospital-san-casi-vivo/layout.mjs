// Hospital San Casi Vivo · the building as plain data: four floors joined by
// an elevator and stairs, the street and the ambulance bay outside, sectors,
// walls, doors, furniture, the people at each white circle and the people
// who keep the hospital moving. Units are metres: x grows east, z grows
// south, y is up; a heading of 0 faces +z (the street). The renderer
// (hospital3d.ts, World3D.tsx) only draws what is here, so movement and the
// circles can be tested without WebGL.
import { STORY } from './story.mjs';

export const FLOOR_H = 7;
export const CEILING = 3.6;
export const WALL = 0.3;

// Floor 0 is the basement; 1 the ground floor with the street outside.
export const FLOORS = [
  { id: 0, name: 'Subsuelo', sub: 'Morgue · lavandería · pasillos de servicio', y: -FLOOR_H, bounds: { minX: -40, maxX: 40, minZ: -40, maxZ: -2 } },
  { id: 1, name: 'Planta baja', sub: 'Recepción · espera · triaje · guardia · trauma · cafetería', y: 0, bounds: { minX: -40, maxX: 58, minZ: -40, maxZ: 46 } },
  { id: 2, name: 'Primer piso', sub: 'Laboratorio · radiología · quirófanos · descanso', y: FLOOR_H, bounds: { minX: -40, maxX: 40, minZ: -40, maxZ: 32 } },
  { id: 3, name: 'Segundo piso', sub: 'Internación · habitaciones · enfermería · UCI', y: FLOOR_H * 2, bounds: { minX: -40, maxX: 40, minZ: -40, maxZ: 32 } },
];
export const FLOOR_IDS = FLOORS.map((f) => f.id);
export const floorById = (id) => FLOORS.find((f) => f.id === id) ?? FLOORS[1];

// Arrival on the street, looking at the main entrance.
export const SPAWN = { floor: 1, x: 0, z: 41, heading: Math.PI };
// The elevator and the stairs are in the same core on every floor.
export const ELEVATOR = { x: -3, z: -37.2, radius: 1.4, doorX: -3, wallZ: -40 };
export const ELEVATOR_ARRIVAL = { x: -3, z: -34.6, heading: 0 };
export const STAIRS = { x: 5.2, z: -30.6, radius: 1.3 };
export const STAIRS_ARRIVAL = { x: 5.2, z: -28.4, heading: 0 };

// ------------------------------------------------------------------ sectors
// Rectangles that name where you are; `sound` picks the ambience and `light`
// the colour of the ceiling panels.
const S = (floor, id, name, x0, z0, x1, z1, sound, light = '#eef6ff') => ({ floor, id, name, x0, z0, x1, z1, sound, light });
export const SECTORS = [
  S(1, 'recepcion', 'Entrada y recepción', -12, 12, 12, 32, 'lobby'),
  S(1, 'espera', 'Sala de espera', -40, 12, -12, 32, 'crowd', '#f4f2e6'),
  S(1, 'triage', 'Triaje de urgencias', 12, 12, 24, 32, 'ward'),
  S(1, 'ambulancias', 'Pasillo de ambulancias', 24, 12, 40, 32, 'bay', '#ffe9e6'),
  S(1, 'guardia', 'Guardia de emergencias', -2, -8, 24, 12, 'ward'),
  S(1, 'trauma', 'Sala de traumatología', 24, -8, 40, 12, 'trauma', '#fff1f1'),
  S(1, 'observacion', 'Observación', -40, -8, -14, 12, 'ward', '#e9f2ff'),
  S(1, 'curaciones', 'Sala de curaciones', -14, -8, -2, 12, 'ward'),
  S(1, 'cafeteria', 'Cafetería', -40, -40, -8, -14, 'cafe', '#fff1dc'),
  S(1, 'facturacion', 'Administración y facturación', 8, -40, 40, -14, 'office', '#f3f6ee'),
  S(1, 'nucleo', 'Ascensores y escaleras', -8, -40, 8, -14, 'lobby'),
  S(1, 'pasillo', 'Pasillo central', -40, -14, 40, -8, 'corridor'),
  S(1, 'calle', 'La calle', -40, 32, 58, 46, 'street'),
  S(1, 'bahia', 'Bahía de ambulancias', 40, 6, 58, 32, 'street'),
  S(2, 'laboratorio', 'Laboratorio', -40, -40, -8, -14, 'lab', '#f2f8ff'),
  S(2, 'descanso', 'Sala de descanso de médicos', 8, -40, 40, -14, 'rest', '#ffeeda'),
  S(2, 'radiologia', 'Rayos X', -40, -8, -10, 12, 'lab', '#dfe8ff'),
  S(2, 'tomografia', 'Tomografía', -40, 12, -10, 32, 'lab', '#d8e4ff'),
  S(2, 'galeria', 'Galería del área quirúrgica', -10, -8, 40, 4, 'corridor'),
  S(2, 'recuperacion', 'Recuperación posquirúrgica', -10, 4, 0, 32, 'ward'),
  S(2, 'quirofanos', 'Quirófanos', 0, 4, 40, 32, 'surgery', '#e6fff8'),
  S(2, 'nucleo', 'Ascensores y escaleras', -8, -40, 8, -14, 'lobby'),
  S(2, 'pasillo', 'Pasillo del primer piso', -40, -14, 40, -8, 'corridor'),
  S(3, 'habitaciones', 'Habitaciones 401 y 402', -40, -40, -8, -14, 'room', '#fff4e6'),
  S(3, 'habitaciones-este', 'Habitaciones 403 y 404', 8, -40, 40, -14, 'room', '#fff4e6'),
  S(3, 'habitaciones-sur', 'Habitaciones 405 y 406', -40, -8, -12, 12, 'room', '#fff4e6'),
  S(3, 'partos', 'Sala de partos', -40, 12, -12, 32, 'birth', '#fff0f4'),
  S(3, 'enfermeria', 'Estación de enfermería', -12, -8, 4, 32, 'nurses'),
  S(3, 'uci', 'Unidad de Cuidados Intensivos', 4, -8, 40, 32, 'icu', '#dfeaff'),
  S(3, 'nucleo', 'Ascensores y escaleras', -8, -40, 8, -14, 'lobby'),
  S(3, 'internacion', 'Pasillos de internación', -40, -14, 40, -8, 'corridor'),
  S(0, 'lavanderia', 'Lavandería', -40, -40, -8, -14, 'laundry', '#f2f2ea'),
  S(0, 'morgue', 'Morgue', 8, -40, 40, -14, 'morgue', '#d8f0ff'),
  S(0, 'nucleo', 'Ascensores y escaleras', -8, -40, 8, -14, 'basement', '#e8e8dc'),
  S(0, 'servicio', 'Pasillos de servicio', -40, -14, 40, -2, 'basement', '#e8e8dc'),
];
export function sectorAt(floor, x, z) {
  return SECTORS.find((s) => s.floor === floor && x >= s.x0 && x <= s.x1 && z >= s.z0 && z <= s.z1) ?? null;
}

// ------------------------------------------------------------------ walls
// Segments [x0, z0, x1, z1]; a fifth value 'glass' draws see-through glass.
// Openings are gaps; DOORS below put moving leaves in some of them.
const core = [
  // North blocks and the core around the elevator and the stairs.
  [-8, -40, -8, -14], [8, -40, 8, -14],
  [-40, -14, -27, -14], [-21, -14, -8, -14], [8, -14, 21, -14], [27, -14, 40, -14],
];
const shell = (south) => [[-40, -40, 40, -40], [-40, -40, -40, south], [40, -40, 40, south]];
export const WALLS = {
  0: [
    ...shell(-2), [-40, -2, 40, -2],
    [-8, -40, -8, -14], [8, -40, 8, -14],
    [-40, -14, -27, -14], [-21, -14, -8, -14], [8, -14, 21, -14], [27, -14, 40, -14],
  ],
  1: [
    [-40, -40, 40, -40], [-40, -40, -40, 32], [40, -40, 40, 16], [40, 24, 40, 32],
    [-40, 32, -4, 32], [4, 32, 40, 32],
    ...core,
    // South of the corridor: observation, wound care, emergency ward, trauma.
    [-40, -8, -30, -8], [-25, -8, -14, -8], [-14, -8, -10, -8], [-6, -8, -2, -8], [24, -8, 29, -8], [35, -8, 40, -8],
    [-14, -8, -14, 12], [-2, -8, -2, 1], [-2, 4, -2, 12], [24, -8, 24, 12],
    [-40, 12, -14, 12], [-14, 12, -2, 12], [-2, 12, 4, 12], [12, 12, 24, 12], [24, 12, 30, 12], [34, 12, 40, 12],
    // Triage between reception and the ambulance corridor.
    [12, 12, 12, 20], [12, 24, 12, 32], [24, 12, 24, 26], [24, 29, 24, 32],
  ],
  2: [
    ...shell(32), [-40, 32, 40, 32],
    ...core,
    // Radiology, the surgical gallery with glass, recovery and the theatres.
    [-40, -8, -30, -8], [-24, -8, -10, -8], [-10, -8, -10, 32], [-10, -8, -4, -8],
    [0, 4, 40, 4, 'glass'], [0, 4, 0, 32],
    // Tomography behind X-ray.
    [-40, 12, -29.5, 12], [-24.5, 12, -10, 12],
  ],
  3: [
    ...shell(32), [-40, 32, 40, 32],
    [-8, -40, -8, -14], [8, -40, 8, -14], [-24, -40, -24, -14], [24, -40, 24, -14],
    [-40, -14, -35, -14], [-31, -14, -19, -14], [-15, -14, -8, -14],
    [8, -14, 13, -14], [17, -14, 29, -14], [33, -14, 40, -14],
    // Rooms 405–406 and the ICU behind glass.
    [-40, -8, -12, -8], [-12, -8, -12, 0], [-12, 4, -12, 20], [-12, 24, -12, 32], [-40, 12, -12, 12],
    [4, -8, 20, -8], [25, -8, 40, -8], [4, -8, 4, 32, 'glass'],
  ],
};

// Doors that open by themselves when someone comes close: 'slide' for glass,
// 'swing' for the double doors of the wards. `axis` is the wall direction.
export const DOORS = {
  0: [{ x: -24, z: -14, w: 6, axis: 'x', kind: 'swing' }, { x: 24, z: -14, w: 6, axis: 'x', kind: 'swing', label: 'MORGUE' }],
  1: [
    { x: 0, z: 32, w: 8, axis: 'x', kind: 'slide', label: 'ENTRADA' },
    { x: 40, z: 20, w: 8, axis: 'z', kind: 'slide', label: 'AMBULANCIAS' },
    { x: -27.5, z: -8, w: 5, axis: 'x', kind: 'swing', label: 'OBSERVACIÓN' },
    { x: -8, z: -8, w: 4, axis: 'x', kind: 'swing', label: 'CURACIONES' },
    { x: 32, z: -8, w: 6, axis: 'x', kind: 'swing', label: 'TRAUMA' },
    { x: 32, z: 12, w: 4, axis: 'x', kind: 'swing' },
    { x: -24, z: -14, w: 6, axis: 'x', kind: 'swing', label: 'CAFETERÍA' },
    { x: 24, z: -14, w: 6, axis: 'x', kind: 'swing', label: 'FACTURACIÓN' },
    { x: 12, z: 22, w: 4, axis: 'z', kind: 'swing', label: 'TRIAJE' },
  ],
  2: [
    { x: -24, z: -14, w: 6, axis: 'x', kind: 'swing', label: 'LABORATORIO' },
    { x: 24, z: -14, w: 6, axis: 'x', kind: 'swing', label: 'DESCANSO MÉDICOS' },
    { x: -27, z: -8, w: 6, axis: 'x', kind: 'swing', label: 'RAYOS X' },
    { x: -27, z: 12, w: 5, axis: 'x', kind: 'swing', label: 'TOMOGRAFÍA' },
  ],
  3: [
    { x: -33, z: -14, w: 4, axis: 'x', kind: 'swing', label: '401' },
    { x: -17, z: -14, w: 4, axis: 'x', kind: 'swing', label: '402' },
    { x: 15, z: -14, w: 4, axis: 'x', kind: 'swing', label: '403' },
    { x: 31, z: -14, w: 4, axis: 'x', kind: 'swing', label: '404' },
    { x: 22.5, z: -8, w: 5, axis: 'x', kind: 'swing', label: 'UCI' },
  ],
};

// ------------------------------------------------------------------ furniture
// { type, x, z, w, d, rot } — w along x, d along z before `rot` quarter turns.
// `solid: false` for things you can walk over or through.
const beds = (xs, z, rot = 0, type = 'bed') => xs.map((x) => ({ type, x, z, w: 1.05, d: 2.1, rot }));
const chairs = (x, z, w) => ({ type: 'chairs', x, z, w, d: 0.7 });
export const FURNITURE = {
  0: [
    { type: 'washer', x: -38.6, z: -36, w: 1.2, d: 6 }, { type: 'washer', x: -38.6, z: -26, w: 1.2, d: 6 },
    { type: 'linencart', x: -30, z: -30, w: 1.4, d: 0.9 }, { type: 'linencart', x: -20, z: -34, w: 1.4, d: 0.9 },
    { type: 'shelves', x: -24, z: -39.2, w: 10, d: 0.8 },
    { type: 'drawers', x: 39.2, z: -27, w: 1.4, d: 22 },
    { type: 'autopsy', x: 26, z: -27, w: 1, d: 2.4 },
    { type: 'desk', x: 13, z: -36, w: 2.4, d: 1.1 },
    { type: 'gurney', x: 20, z: -20, w: 0.8, d: 2.1, rot: 1 },
    { type: 'pipes', x: 0, z: -11, w: 80, d: 0.5, solid: false },
    { type: 'linencart', x: 18, z: -5, w: 1.4, d: 0.9 }, { type: 'gurney', x: -34, z: -5, w: 0.8, d: 2.1, rot: 1 },
    { type: 'boiler', x: -36, z: -6, w: 2.4, d: 2.4 },
  ],
  1: [
    // Reception and the entrance.
    { type: 'counter', x: 0, z: 18.6, w: 9, d: 1.2 },
    { type: 'ticket', x: 6.4, z: 24, w: 0.6, d: 0.5 },
    { type: 'plant', x: -10.6, z: 30.4, w: 1, d: 1 }, { type: 'plant', x: 10.6, z: 30.4, w: 1, d: 1 },
    // Waiting room: rows of chairs, vending machines, a TV and the good chairs.
    chairs(-31, 15.5, 12), chairs(-31, 19.5, 12), chairs(-31, 23.5, 12), chairs(-31, 27.5, 12),
    chairs(-19, 19.5, 6), chairs(-19, 23.5, 6),
    { type: 'vending', x: -39.3, z: 16, w: 0.9, d: 1.2, rot: 1 }, { type: 'vending', x: -39.3, z: 18, w: 0.9, d: 1.2, rot: 1 },
    { type: 'tv', x: -26, z: 12.3, w: 3, d: 0.2, solid: false },
    { type: 'sofa', x: -17, z: 30.4, w: 4, d: 1 },
    { type: 'watercooler', x: -13, z: 13, w: 0.5, d: 0.5 },
    // Triage.
    { type: 'desk', x: 18, z: 15.4, w: 3.4, d: 1.1 }, { type: 'examchair', x: 20.6, z: 26, w: 1, d: 1.6 },
    { type: 'curtain', x: 18, z: 22.6, w: 6, d: 0.1, solid: false },
    // Ambulance corridor: stretchers waiting along the wall.
    { type: 'gurney', x: 38.6, z: 28, w: 0.8, d: 2.1 }, { type: 'wheelchair', x: 26, z: 30.6, w: 0.8, d: 0.8 },
    { type: 'gurney', x: 27, z: 14.4, w: 2.1, d: 0.8, rot: 0 },
    // Emergency ward: beds with curtains along the walls and the desk.
    ...beds([1.5, 6, 10.5, 15, 19.5], -6.3),
    ...beds([1.5, 6, 19.5], 10, 2),
    { type: 'curtains', x: 10.5, z: -6.3, w: 22, d: 2.6, solid: false },
    { type: 'counter', x: 11.5, z: 3.2, w: 6, d: 1.2 },
    { type: 'monitor', x: 22.8, z: -6.8, w: 0.5, d: 0.5 },
    // Trauma: two resuscitation bays.
    ...beds([29, 35.5], 0, 0, 'trauma'), { type: 'surglight', x: 29, z: 0, w: 1, d: 1, solid: false }, { type: 'surglight', x: 35.5, z: 0, w: 1, d: 1, solid: false },
    { type: 'crashcart', x: 32.2, z: -6.6, w: 1, d: 0.6 }, { type: 'monitor', x: 26.6, z: -1.6, w: 0.5, d: 0.5 }, { type: 'monitor', x: 38.4, z: -1.6, w: 0.5, d: 0.5 },
    // Observation.
    ...beds([-37.6], -4, 1), ...beds([-37.6], 0.5, 1), ...beds([-37.6], 5, 1), ...beds([-37.6], 9.5, 1),
    ...beds([-16.4], -4, 3), ...beds([-16.4], 5, 3),
    { type: 'monitor', x: -38.6, z: -1.8, w: 0.5, d: 0.5 }, { type: 'monitor', x: -38.6, z: 7.2, w: 0.5, d: 0.5 },
    // Wound care.
    { type: 'bed', x: -8, z: 1, w: 1.05, d: 2.1, rot: 0 }, { type: 'trolley', x: -5.2, z: -1.8, w: 0.9, d: 0.6 }, { type: 'cabinet', x: -13.4, z: -2, w: 0.6, d: 3 },
    // Cafeteria.
    { type: 'foodcounter', x: -24, z: -37.8, w: 14, d: 1.3 },
    { type: 'table', x: -34, z: -28, w: 1.6, d: 1.6 }, { type: 'table', x: -28, z: -28, w: 1.6, d: 1.6 }, { type: 'table', x: -22, z: -28, w: 1.6, d: 1.6 },
    { type: 'table', x: -34, z: -21, w: 1.6, d: 1.6 }, { type: 'table', x: -28, z: -21, w: 1.6, d: 1.6 }, { type: 'table', x: -16, z: -22, w: 1.6, d: 1.6 },
    { type: 'vending', x: -9.4, z: -30, w: 0.9, d: 1.2, rot: 3 }, { type: 'vending', x: -9.4, z: -32, w: 0.9, d: 1.2, rot: 3 },
    // Billing.
    { type: 'windows', x: 24, z: -37.4, w: 22, d: 1.4 },
    chairs(18, -26, 8), chairs(30, -26, 8), chairs(18, -21, 8),
    { type: 'posts', x: 24, z: -32, w: 12, d: 0.2, solid: false },
    // Core.
    { type: 'bench', x: -6.2, z: -24, w: 0.6, d: 3 }, { type: 'plant', x: 6.5, z: -16, w: 1, d: 1 },
    { type: 'wetfloor', x: -12, z: -8.9, w: 0.6, d: 0.4 }, { type: 'wetfloor', x: 18, z: 13.4, w: 0.6, d: 0.4 },
    { type: 'bin', x: -13, z: 31, w: 0.5, d: 0.5 }, { type: 'bin', x: 39, z: -9, w: 0.5, d: 0.5 }, { type: 'bin', x: 23, z: 13, w: 0.5, d: 0.5 },
    // Street.
    { type: 'bench', x: -14, z: 36, w: 3, d: 0.6 }, { type: 'bench', x: 14, z: 36, w: 3, d: 0.6 },
    { type: 'bollard', x: -6, z: 34, w: 0.4, d: 0.4 }, { type: 'bollard', x: 6, z: 34, w: 0.4, d: 0.4 },
    { type: 'ambulance', x: 50, z: 26, w: 2.4, d: 6 },
    // Outside: palms, street lights and the bins along the sidewalk.
    ...[-36, -27, -18, -9, 9, 18, 27, 36].map((x) => ({ type: 'palm', x, z: 43.8, w: 0.5, d: 0.5 })),
    { type: 'palm', x: 56, z: 40, w: 0.5, d: 0.5 }, { type: 'palm', x: 56, z: 12, w: 0.5, d: 0.5 },
    ...[-31.5, -13.5, 13.5, 31.5].map((x) => ({ type: 'lamppost', x, z: 44.8, w: 0.3, d: 0.3 })),
  ],
  2: [
    { type: 'labbench', x: -30, z: -31, w: 12, d: 1.4 }, { type: 'labbench', x: -18, z: -24, w: 10, d: 1.4 },
    { type: 'centrifuge', x: -16, z: -38.8, w: 1, d: 0.8 }, { type: 'fridge', x: -39.2, z: -20, w: 1, d: 1.8 },
    { type: 'shelves', x: -26, z: -39.4, w: 8, d: 0.6 },
    { type: 'sofa', x: 30, z: -38.6, w: 5, d: 1.1 }, { type: 'kitchen', x: 14, z: -39.2, w: 8, d: 0.9 },
    { type: 'table', x: 18, z: -26, w: 2.4, d: 1.4 }, { type: 'lockers', x: 39.4, z: -26, w: 0.7, d: 10 },
    { type: 'tv', x: 30, z: -14.3, w: 3, d: 0.2, solid: false },
    { type: 'xray', x: -30, z: 8, w: 1.2, d: 2.6 }, { type: 'lightbox', x: -32, z: -7.4, w: 4, d: 0.3 },
    { type: 'ct', x: -31, z: 22, w: 2.6, d: 4.6 }, { type: 'leadglass', x: -21, z: 22, w: 0.3, d: 12 }, { type: 'desk', x: -15, z: 22, w: 1.2, d: 3, rot: 0 },
    chairs(-17, 4.6, 6), { type: 'wetfloor', x: -20, z: 9, w: 0.6, d: 0.4 },
    ...beds([-5], 10, 0), ...beds([-5], 18, 0), ...beds([-5], 26, 0),
    { type: 'ortable', x: 14, z: 18, w: 1, d: 2.4 }, { type: 'ortable', x: 31, z: 18, w: 1, d: 2.4 },
    { type: 'surglight', x: 14, z: 18, w: 1, d: 1, solid: false }, { type: 'surglight', x: 31, z: 18, w: 1, d: 1, solid: false },
    { type: 'anesthesia', x: 11.6, z: 15.6, w: 0.8, d: 0.8 }, { type: 'anesthesia', x: 28.6, z: 15.6, w: 0.8, d: 0.8 },
    { type: 'monitor', x: 16.4, z: 15.8, w: 0.5, d: 0.5 }, { type: 'monitor', x: 33.4, z: 15.8, w: 0.5, d: 0.5 },
    { type: 'bench', x: 10, z: 2.4, w: 6, d: 0.6 }, { type: 'bench', x: 26, z: 2.4, w: 6, d: 0.6 },
  ],
  3: [
    ...beds([-37.6], -34, 1), ...beds([-26.4], -34, 3), ...beds([-21.6], -36, 1), ...beds([-10.4], -36, 3),
    ...beds([10.4], -34, 1), ...beds([21.6], -34, 3), ...beds([26.4], -34, 1), ...beds([37.6], -34, 3),
    ...beds([-37.6], -2, 1), ...beds([-37.6], 4, 1),
    // Delivery room.
    { type: 'delivery', x: -30, z: 22, w: 1.3, d: 2.2, rot: 1 }, { type: 'warmer', x: -24, z: 15, w: 1, d: 0.8 }, { type: 'monitor', x: -31.8, z: 19.8, w: 0.5, d: 0.5 },
    { type: 'wetfloor', x: -16, z: 23.2, w: 0.6, d: 0.4 },
    { type: 'nursedesk', x: -4, z: 4, w: 7, d: 2.4 }, { type: 'medcart', x: -9, z: 14, w: 0.9, d: 0.6 }, { type: 'medcart', x: 1.6, z: 16, w: 0.9, d: 0.6 },
    { type: 'callpanel', x: -4, z: -1.2, w: 3, d: 0.2, solid: false },
    ...beds([10, 20, 30], 2, 0, 'icubed'), ...beds([10, 20, 30], 22, 2, 'icubed'),
    { type: 'monitor', x: 11.8, z: 0.6, w: 0.5, d: 0.5 }, { type: 'monitor', x: 21.8, z: 0.6, w: 0.5, d: 0.5 }, { type: 'monitor', x: 31.8, z: 0.6, w: 0.5, d: 0.5 },
    { type: 'monitor', x: 11.8, z: 23.4, w: 0.5, d: 0.5 }, { type: 'monitor', x: 21.8, z: 23.4, w: 0.5, d: 0.5 }, { type: 'monitor', x: 31.8, z: 23.4, w: 0.5, d: 0.5 },
    { type: 'plant', x: 6.5, z: -16, w: 1, d: 1 }, { type: 'balloons', x: -18, z: -31, w: 0.6, d: 0.6, solid: false },
  ],
};

// ------------------------------------------------------------------ scenes
// One white circle per STORY entry: where the circle is, where the main
// person stands, how they look and what they are doing. Injuries are drawn
// on people: head, brow, arm, leg, blood, gown, iv.
const L = (skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras = [], extra = {}) =>
  ({ skin, age, body, hairStyle, hairColor, top, topColor, bottom, bottomColor, extras, ...extra });
const SCRUBS = (skin, body, hairStyle, hairColor, color = '#3f8f98', extras = []) => L(skin, 'adult', body, hairStyle, hairColor, 'scrubs', color, 'pants', color, extras);
const COAT = (skin, age, body, hairStyle, hairColor, extras = []) => L(skin, age, body, hairStyle, hairColor, 'coat', '#f4f6f6', 'pants', '#2c3a4a', extras);
const GOWN = (skin, age, body, hairStyle, hairColor, extras = []) => L(skin, age, body, hairStyle, hairColor, 'shirt', '#b9d2e2', 'pants', '#b9d2e2', extras);

const PLACES = {
  recepcion: { spot: { x: 0, z: 22.4 }, npc: { x: 0, z: 17.6, heading: 0 }, pose: 'phone', look: L('#e2b896', 'adult', 'f', 'bob', '#7a3a1e', 'uniform', '#2f5a8a', 'skirt', '#20263a', ['glasses', 'earrings'], { seed: 11 }),
    extras: [{ x: 3.2, z: 23.6, heading: Math.PI, pose: 'stand', mood: 'pain', injury: ['eye'], look: L('#c99468', 'adult', 'm', 'short', '#2a1a12', 'jacket', '#5a5a3a', 'jeans', '#24304a', [], { seed: 12 }) }] },
  espera: { spot: { x: -24.6, z: 21.6 }, npc: { x: -24.6, z: 23.5, heading: Math.PI, seat: true }, pose: 'sit', look: L('#e6c2a0', 'elderly', 'm', 'short', '#e8e8e8', 'sweater', '#6a4a3a', 'pants', '#3a3a3a', ['glasses', 'mustache'], { seed: 21 }),
    extras: [{ x: -26.4, z: 23.5, heading: Math.PI, pose: 'sit', look: L('#a8724e', 'young', 'm', 'cap', '#1a1210', 'hoodie', '#2f4f6f', 'jeans', '#1f2840', [], { seed: 22 }) }] },
  vip: { spot: { x: -17, z: 27.4 }, npc: { x: -18.2, z: 30, heading: Math.PI * 0.9, seat: true }, pose: 'sit', mood: 'angry', look: L('#f0d6c0', 'old', 'f', 'bun', '#d8c8b0', 'coat', '#8a1a3a', 'skirt', '#1a1a20', ['earrings', 'glasses'], { seed: 31 }),
    extras: [{ x: -15.6, z: 30, heading: Math.PI * 1.1, pose: 'sit', mood: 'sleepy', look: L('#dcae88', 'old', 'm', 'short', '#9a9a9a', 'sweater', '#5a6a5a', 'pants', '#3a3a40', ['glasses'], { seed: 32 }) }] },
  triage: { spot: { x: 18, z: 19.6 }, npc: { x: 19.4, z: 17.6, heading: -0.4 }, pose: 'cry', mood: 'terror', look: L('#c48f69', 'adult', 'f', 'long', '#1a1210', 'dress', '#d0408a', null, null, ['earrings'], { seed: 41 }),
    extras: [{ x: 17.4, z: 14.4, heading: 0, pose: 'stand', look: SCRUBS('#8d5a3c', 'm', 'buzz', '#120d0b', '#2f6fb0'), seat: false }] },
  guardia: { spot: { x: 7, z: 0.4 }, npc: { x: 9.6, z: 1.6, heading: -1.6 }, pose: 'point', mood: 'furious', look: COAT('#e8c0a0', 'adult', 'm', 'short', '#2a1a12', ['beard', 'glasses']),
    extras: [{ x: 12.6, z: 1.6, heading: -1.6, pose: 'arms', mood: 'worried', look: COAT('#e2b896', 'adult', 'f', 'ponytail', '#4a2a18') }] },
  ambulancias: { spot: { x: 31, z: 22 }, npc: { x: 33.4, z: 22.6, heading: -1.4 }, pose: 'stand', look: L('#8d5a3c', 'adult', 'f', 'braids', '#120d0b', 'uniform', '#c8401e', 'pants', '#2a2a30', [], { seed: 61 }),
    extras: [{ x: 34.2, z: 24.6, heading: Math.PI, pose: 'lie', gurney: true, mood: 'pain', injury: ['leg', 'blood'], look: L('#c99468', 'young', 'm', 'curly', '#1a1210', 'tshirt', '#f0f0f0', 'shorts', '#2a3550', [], { seed: 62 }) },
      { x: 36.2, z: 22.4, heading: -1.8, pose: 'stand', look: L('#a8724e', 'adult', 'm', 'buzz', '#1a1210', 'uniform', '#c8401e', 'pants', '#2a2a30', [], { seed: 63 }) }] },
  trauma: { spot: { x: 29.4, z: 4.2 }, npc: { x: 29, z: 0.2, heading: 0, lying: true }, pose: 'lie', mood: 'smitten', injury: ['head', 'arm', 'blood'], look: L('#e8c0a0', 'young', 'm', 'short', '#3a2416', 'tshirt', '#2a5a8a', 'jeans', '#24304a', [], { seed: 71 }),
    extras: [{ x: 31.2, z: 1.4, heading: -1.5, pose: 'stand', look: SCRUBS('#f0d6c0', 'f', 'ponytail', '#2a1a12', '#4a6aa0', ['glasses']) },
      { x: 27, z: 3.4, heading: 1.8, pose: 'stand', mood: 'smile', carryBox: true, look: L('#b9825c', 'young', 'f', 'long', '#2a1a12', 'jacket', '#e0a020', 'jeans', '#1f2840', ['earrings'], { seed: 73 }) }] },
  observacion: { spot: { x: -34.4, z: 0.5 }, npc: { x: -37.6, z: 0.5, heading: Math.PI / 2, lying: true }, pose: 'lie', mood: 'pain', injury: ['gown', 'iv'], look: GOWN('#d7a982', 'elderly', 'm', 'bald', '#cccccc', ['mustache']),
    extras: [{ x: -36.4, z: 9.5, heading: Math.PI / 2, pose: 'lie', mood: 'sleepy', look: GOWN('#e8c0a0', 'old', 'f', 'curly', '#bbbbbb') }] },
  curaciones: { spot: { x: -8.4, z: 4.6 }, npc: { x: -8, z: 1.4, heading: 0, seat: true }, pose: 'sit', mood: 'pain', injury: ['brow'], look: L('#c48f69', 'adult', 'm', 'short', '#1a1210', 'shirt', '#e8c84a', 'shorts', '#3a5a3a', ['hat'], { seed: 91 }),
    extras: [{ x: -5.6, z: 1.8, heading: -1.6, pose: 'stand', look: SCRUBS('#a8724e', 'f', 'bun', '#120d0b', '#8a4a9a') }] },
  cafeteria: { spot: { x: -24, z: -33.4 }, npc: { x: -24, z: -39, heading: 0 }, pose: 'cook', look: L('#8d5a3c', 'old', 'f', 'bun', '#3a3a3a', 'apron', '#f4f2ec', 'pants', '#2a2a2a', ['earrings'], { seed: 101 }),
    extras: [{ x: -21.4, z: -34.4, heading: Math.PI, pose: 'lean', look: L('#c99468', 'adult', 'm', 'short', '#1a1210', 'scrubs', '#6a6a8a', 'pants', '#6a6a8a', ['glasses'], { seed: 102 }) },
      { x: -28.8, z: -26.4, heading: 2.6, pose: 'stand', injury: ['blood'], look: SCRUBS('#e2b896', 'm', 'buzz', '#3a2a20', '#2f7a5a') }] },
  facturacion: { spot: { x: 24, z: -32.6 }, npc: { x: 24, z: -38.6, heading: 0 }, pose: 'sign', look: L('#c48f69', 'adult', 'm', 'short', '#1a1210', 'shirt', '#e8eef4', 'pants', '#2a3040', ['glasses'], { seed: 111 }),
    extras: [{ x: 25.6, z: -34.4, heading: Math.PI, pose: 'arms', mood: 'furious', injury: ['arm'], look: L('#d8a57e', 'adult', 'm', 'short', '#3a2a20', 'jacket', '#7a2a1a', 'jeans', '#24304a', ['mustache'], { seed: 112 }) }] },
  laboratorio: { spot: { x: -24, z: -27.6 }, npc: { x: -24, z: -30, heading: 0 }, pose: 'read', look: COAT('#e8c0a0', 'young', 'f', 'curly', '#2a1a12', ['glasses']),
    extras: [{ x: -18, z: -26.2, heading: Math.PI, pose: 'arms', mood: 'sleepy', look: COAT('#b9825c', 'adult', 'm', 'short', '#1a1210', ['beard']) }] },
  radiologia: { spot: { x: -26.4, z: -2.6 }, npc: { x: -29.4, z: -5.6, heading: 0.5 }, pose: 'point', look: L('#a8724e', 'adult', 'm', 'short', '#120d0b', 'scrubs', '#2a4a7a', 'pants', '#2a4a7a', ['glasses'], { seed: 131 }),
    extras: [{ x: -24, z: -4.6, heading: -2.4, pose: 'stand', mood: 'worried', injury: ['gown'], look: L('#c99468', 'young', 'f', 'long', '#1a1210', 'shirt', '#b9d2e2', 'pants', '#b9d2e2', ['earrings'], { seed: 132 }) },
      { x: -22.4, z: -2.6, heading: -2, pose: 'phone', look: L('#8d5a3c', 'young', 'f', 'afro', '#120d0b', 'jacket', '#2a6a4a', 'jeans', '#1f2840', [], { seed: 133 }) }] },
  quirofano: { spot: { x: 22, z: 0.6 }, npc: { x: 24.4, z: 1.6, heading: Math.PI }, pose: 'window', look: SCRUBS('#e2b896', 'f', 'ponytail', '#6a3a1a', '#5a8a3a'),
    extras: [{ x: 13.2, z: 18.6, heading: 1.4, pose: 'fight', mood: 'angry', surgeon: true, look: SCRUBS('#e8c0a0', 'm', 'short', '#9a9a9a', '#2e7d6e') },
      { x: 14.8, z: 17.4, heading: -1.6, pose: 'point', mood: 'furious', surgeon: true, look: SCRUBS('#c48f69', 'f', 'bun', '#1a1210', '#2e7d6e') },
      { x: 14, z: 20.6, heading: Math.PI, pose: 'lie', lying: true, look: GOWN('#d7a982', 'adult', 'm', 'short', '#2a1a12') }] },
  descanso: { spot: { x: 26, z: -34.6 }, npc: { x: 29, z: -38.4, heading: 0, lying: true }, pose: 'sleep', mood: 'sleepy', look: SCRUBS('#c48f69', 'm', 'curly', '#2a1a12', '#3a5a8a', ['beard']),
    extras: [{ x: 15, z: -38.2, heading: 0, pose: 'cook', look: SCRUBS('#f0d6c0', 'm', 'short', '#e0c070', '#3f8f98') }] },
  enfermeria: { spot: { x: -4, z: 7.6 }, npc: { x: -4, z: 2.4, heading: 0 }, pose: 'phone', look: SCRUBS('#8d5a3c', 'f', 'bun', '#120d0b', '#1f4f8f', ['glasses']),
    extras: [{ x: -1.4, z: 2.2, heading: 0.4, pose: 'read', look: SCRUBS('#c99468', 'm', 'short', '#120d0b', '#1f4f8f') }] },
  internacion: { spot: { x: 12.4, z: -11 }, npc: { x: 10.4, z: -12.6, heading: 1.4 }, pose: 'smoke-free', smoke: true, injury: ['gown', 'iv'], look: GOWN('#d8a57e', 'old', 'm', 'short', '#cfcfcf', ['mustache']),
    extras: [{ x: 15.6, z: -9.4, heading: -2, pose: 'sweep', mop: true, look: L('#b9825c', 'adult', 'f', 'bun', '#2a1a12', 'uniform', '#7aa0b8', 'pants', '#3a4a5a', [], { seed: 172 }) }] },
  habitacion: { spot: { x: -16, z: -27 }, npc: { x: -21.6, z: -36, heading: Math.PI / 2, lying: true }, pose: 'lie', mood: 'laugh', injury: ['gown'], look: GOWN('#a8724e', 'elderly', 'f', 'curly', '#f2f2f2', ['earrings', 'glasses']),
    extras: [{ x: -10.4, z: -36, heading: -Math.PI / 2, pose: 'lie', lying: true, mood: 'angry', injury: ['gown'], look: GOWN('#e2b896', 'adult', 'm', 'short', '#3a2a20') },
      { x: -19, z: -32.6, heading: 2.8, pose: 'dance', mood: 'laugh', look: L('#8d5a3c', 'young', 'f', 'long', '#120d0b', 'dress', '#e0408a', null, null, ['earrings'], { seed: 183 }) },
      { x: -17.6, z: -34.4, heading: -2.4, pose: 'guitar', look: L('#a8724e', 'adult', 'm', 'short', '#1a1210', 'shirt', '#f2f0ea', 'pants', '#2a2a2a', ['hat', 'mustache'], { seed: 184 }) }] },
  uci: { spot: { x: 20, z: 6.2 }, npc: { x: 22.2, z: 3.6, heading: -0.5, seat: true }, pose: 'sit', mood: 'sad', look: L('#c99468', 'young', 'f', 'long', '#3a2416', 'sweater', '#5a4a7a', 'jeans', '#1f2840', [], { seed: 191 }),
    extras: [{ x: 20, z: 2, heading: Math.PI, pose: 'lie', lying: true, injury: ['gown', 'iv', 'tube'], look: GOWN('#c48f69', 'old', 'm', 'short', '#bbbbbb') },
      { x: 17, z: 4.4, heading: 1.2, pose: 'read', look: COAT('#8d5a3c', 'adult', 'm', 'short', '#120d0b', ['glasses']) }] },
  morgue: { spot: { x: 30.4, z: -31.8 }, npc: { x: 33.4, z: -33.6, heading: -1.2, seat: true }, pose: 'sit', look: L('#c48f69', 'old', 'm', 'short', '#888888', 'apron', '#c8d4c8', 'pants', '#2a3a3a', ['mustache'], { seed: 201 }),
    extras: [{ x: 27.6, z: -35, heading: 1.6, pose: 'hands-up', mood: 'terror', look: COAT('#a8724e', 'young', 'f', 'braids', '#120d0b') },
      { x: 26, z: -27, heading: 0, pose: 'lie', lying: true, sheet: true, look: GOWN('#d7a982', 'adult', 'm', 'short', '#2a1a12') }] },
  limpieza: { spot: { x: -18.4, z: -8.2 }, npc: { x: -21, z: -9.6, heading: 1.2 }, pose: 'sweep', mop: true, look: L('#b9825c', 'adult', 'f', 'bun', '#2a1a12', 'uniform', '#7aa0b8', 'pants', '#3a4a5a', ['earrings'], { seed: 211 }),
    extras: [{ x: -15.8, z: -7.2, heading: -2.2, pose: 'arms', mood: 'scared', look: COAT('#a8724e', 'young', 'f', 'braids', '#120d0b') }] },
};

export const SCENES = STORY.map((story) => ({ ...story, ...PLACES[story.id] }));
export const SCENE_IDS = SCENES.map((s) => s.id);
export const sceneById = (id) => SCENES.find((s) => s.id === id);
export const SPOT_RADIUS = 1.25;

// ------------------------------------------------------------------ life
// People who keep the hospital moving: they walk routes, push stretchers and
// carts, mop, wait. `path` is a loop of points; `pause` seconds at each one.
// `carry`: stretcher (with a patient), cart, wheelchair, iv, mop, tray.
const N = (skin, body, hair, hairColor, color) => SCRUBS(skin, body, hair, hairColor, color);
export const WALKERS = {
  0: [
    { look: L('#c48f69', 'adult', 'm', 'short', '#1a1210', 'uniform', '#5a6a5a', 'pants', '#3a3a3a', [], { seed: 901 }), path: [[-34, -11], [30, -11], [30, -6], [-34, -6]], speed: 1.1, carry: 'cart' },
    { look: L('#e2b896', 'adult', 'm', 'bald', '#888', 'uniform', '#5a6a5a', 'pants', '#3a3a3a', [], { seed: 902 }), path: [[-2, -10], [-2, -12.6], [-24, -12.6], [-24, -30], [-24, -12.6], [-2, -12.6]], speed: 0.9, carry: 'stretcher', sheet: true },
  ],
  1: [
    { look: N('#8d5a3c', 'f', 'ponytail', '#120d0b', '#2f6fb0'), path: [[0, -11], [34, -11], [34, -4], [34, -11], [-30, -11]], speed: 2.6, run: true },
    { look: N('#e8c0a0', 'm', 'short', '#3a2a20', '#3f8f98'), path: [[2, 6], [20, 6], [20, -2], [2, -2]], speed: 1.3, pause: 2, carry: 'cart' },
    { look: L('#c99468', 'adult', 'm', 'buzz', '#120d0b', 'uniform', '#c8401e', 'pants', '#2a2a30', [], { seed: 913 }), path: [[46, 20], [36, 20], [32, 16], [32, 8], [32, 2], [32, 8], [32, 16], [36, 20]], speed: 2.2, carry: 'stretcher', patient: { injury: ['blood', 'head'], mood: 'pain' } },
    { look: COAT('#f0d6c0', 'adult', 'm', 'short', '#6a4a2a', ['glasses']), path: [[-6, -10], [-29.4, -10], [-29.4, 0], [-29.4, -10]], speed: 1.4, pause: 3 },
    { look: L('#e6c2a0', 'old', 'f', 'curly', '#d8d0e0', 'sweater', '#3a6aa8', 'pants', '#2a2a30', ['glasses'], { seed: 915 }), path: [[-6, 26], [-6, 14], [5.2, 14], [5.2, 26]], speed: 0.6, pause: 4, carry: 'wheelchair' },
    { look: L('#b9825c', 'adult', 'f', 'bun', '#2a1a12', 'uniform', '#7aa0b8', 'pants', '#3a4a5a', [], { seed: 916 }), path: [[-37.5, 28.3], [-14, 28.3], [-14, 14], [-37.5, 14]], speed: 0.5, pause: 3, carry: 'mop' },
    { look: L('#c48f69', 'adult', 'm', 'cap', '#1a1210', 'hoodie', '#3a3a44', 'jeans', '#24304a', [], { seed: 917 }), path: [[-4, 40], [0, 34], [0, 26], [-3, 26], [-3, 34]], speed: 1.2, pause: 2 },
    { look: N('#a8724e', 'm', 'short', '#120d0b', '#6a3a8a'), path: [[-12, -24], [-30, -24], [-30, -32], [-12, -32]], speed: 1, pause: 4, carry: 'tray' },
    { look: L('#f0d0b4', 'adult', 'f', 'long', '#6a3a1a', 'coat', '#3a2a4a', 'pants', '#1a1a20', [], { seed: 919 }), path: [[10, -30], [38, -30], [38, -18], [10, -18]], speed: 0.9, pause: 5 },
    { look: L('#8d5a3c', 'young', 'm', 'curly', '#120d0b', 'tshirt', '#d43a3a', 'jeans', '#24304a', [], { seed: 920 }), path: [[-38.2, 30], [-38.2, 18.2]], speed: 1.6, pause: 1, injury: ['arm'] },
    // Chaos: a patient escaping in a gown, two nurses after him, a stretcher at full speed.
    { look: GOWN('#e2b896', 'adult', 'm', 'short', '#3a2a20'), path: [[-34, -10.6], [34, -10.6]], speed: 4.2, run: true, scream: true, injury: ['blood', 'iv'], delay: 0 },
    { look: N('#c99468', 'f', 'bun', '#2a1a12', '#2f6fb0'), path: [[-34, -10.6], [34, -10.6]], speed: 4.2, run: true, scream: true, delay: 1.4 },
    { look: N('#a8724e', 'm', 'buzz', '#120d0b', '#2f6fb0'), path: [[-34, -10.6], [34, -10.6]], speed: 4.2, run: true, delay: 2.3 },
    { look: N('#e8c0a0', 'f', 'ponytail', '#6a3a1a', '#c8401e'), path: [[30, -11.6], [-4, -11.6], [-4, -11.6]], speed: 3.4, run: true, pause: 3, carry: 'stretcher', patient: { injury: ['blood', 'head', 'leg'], mood: 'terror' } },
    { look: L('#f0d0b4', 'young', 'f', 'long', '#3a2416', 'dress', '#e8e0d0', null, null, [], { seed: 924 }), path: [[-38, 13.6], [-14, 13.6]], speed: 3.6, run: true, scream: true, injury: ['blood'] },
  ],
  2: [
    { look: N('#e2b896', 'f', 'bob', '#1a1210', '#2e7d6e'), path: [[-3.4, -11], [34, -11], [34, -3], [-3.4, -3]], speed: 1.4, pause: 2 },
    { look: COAT('#c48f69', 'adult', 'm', 'short', '#1a1210'), path: [[-36, -11], [-6, -11]], speed: 1.2, pause: 3 },
    { look: N('#8d5a3c', 'm', 'buzz', '#120d0b', '#3f8f98'), path: [[-6, 6], [-6, 30], [-2, 30], [-2, 6]], speed: 0.9, pause: 3, carry: 'iv' },
    { look: SCRUBS('#f0d6c0', 'm', 'short', '#2a1a12', '#2e7d6e'), path: [[24, 10], [36, 10], [36, 28], [24, 28]], speed: 1, pause: 2, surgeon: true },
    { look: N('#c48f69', 'm', 'short', '#1a1210', '#2e7d6e'), path: [[-3.2, -11.4], [36, -11.4], [36, -4], [-3.2, -4]], speed: 3.2, run: true, pause: 2, carry: 'stretcher', patient: { injury: ['blood', 'tube'], mood: 'pain' } },
  ],
  3: [
    { look: N('#c99468', 'f', 'ponytail', '#2a1a12', '#1f4f8f'), path: [[-36, -11], [36, -11], [36, -10.3], [-36, -10.3]], speed: 1.5, pause: 2, carry: 'cart' },
    { look: GOWN('#e8c0a0', 'old', 'f', 'curly', '#cccccc'), path: [[-30, -11], [-14, -11]], speed: 0.35, pause: 4, carry: 'iv' },
    { look: N('#a8724e', 'm', 'short', '#120d0b', '#1f4f8f'), path: [[8, 12], [36, 12], [36, 14], [8, 14]], speed: 1, pause: 3 },
    { look: L('#dcae88', 'adult', 'm', 'short', '#3a2a20', 'jacket', '#4a5a3a', 'jeans', '#24304a', [], { seed: 934 }), path: [[-6, -11], [-17, -11], [-17, -18], [-17, -11]], speed: 1, pause: 6, carry: 'flowers' },
    { look: GOWN('#a8724e', 'old', 'm', 'bald', '#cccccc', ['mustache']), path: [[36, -10.4], [-36, -10.4]], speed: 3.6, run: true, scream: true, carry: 'iv' },
    { look: L('#c48f69', 'young', 'm', 'short', '#1a1210', 'shirt', '#5a7aa0', 'jeans', '#24304a', [], { seed: 936 }), path: [[-13, 22], [-13, 22], [-20, 22], [-20, 14], [-13, 14]], speed: 3, run: true, pause: 2, scream: true },
  ],
};

// People who wait, sit and argue in the background.
export const CROWD = {
  1: [
    { x: -36, z: 15, heading: Math.PI, pose: 'sit' }, { x: -33, z: 15, heading: Math.PI, pose: 'phone', seat: true },
    { x: -28, z: 15, heading: Math.PI, pose: 'sleep', seat: true }, { x: -35, z: 19, heading: Math.PI, pose: 'sit', injury: ['head'] },
    { x: -30, z: 19, heading: Math.PI, pose: 'read', seat: true }, { x: -26, z: 19, heading: Math.PI, pose: 'cry', seat: true },
    { x: -34, z: 23, heading: Math.PI, pose: 'sit', injury: ['arm'] }, { x: -29, z: 23, heading: Math.PI, pose: 'sit' },
    { x: -36, z: 27, heading: Math.PI, pose: 'sleep', seat: true }, { x: -31, z: 27, heading: Math.PI, pose: 'phone', seat: true },
    { x: -20, z: 19, heading: Math.PI, pose: 'sit', injury: ['blood'] }, { x: -22, z: 27.8, heading: 0.4, pose: 'scream', mood: 'furious' },
    { x: -24, z: 29, heading: 3.4, pose: 'arms', mood: 'angry' }, { x: -38.2, z: 17, heading: -Math.PI / 2, pose: 'stand' },
    { x: 2.4, z: 23.4, heading: Math.PI, pose: 'stand' }, { x: 2.4, z: 25.2, heading: Math.PI, pose: 'phone' }, { x: 2.4, z: 27, heading: Math.PI, pose: 'stand', injury: ['head'] },
    { x: 1.5, z: -6.3, heading: Math.PI / 2, pose: 'lie', lying: true, injury: ['gown'] }, { x: 10.5, z: -6.3, heading: Math.PI / 2, pose: 'lie', lying: true, injury: ['gown', 'blood'] },
    { x: 15, z: -6.3, heading: Math.PI / 2, pose: 'lie', lying: true, injury: ['gown'] }, { x: 6, z: 10, heading: Math.PI / 2, pose: 'lie', lying: true, injury: ['gown'] },
    { x: 35.5, z: 0, heading: Math.PI / 2, pose: 'lie', lying: true, injury: ['blood', 'head'], mood: 'pain' },
    { x: 37, z: 1.6, heading: -1.6, pose: 'stand', look: 'scrubs' },
    { x: -37.6, z: -4, heading: Math.PI / 2, pose: 'lie', lying: true, injury: ['gown', 'iv'] },
    { x: -16.4, z: -4, heading: -Math.PI / 2, pose: 'lie', lying: true, injury: ['gown'] },
    { x: -34, z: -26.8, heading: Math.PI, pose: 'sit', seat: true, look: 'scrubs' }, { x: -28, z: -29.2, heading: 0, pose: 'sit', seat: true },
    { x: -22, z: -20, heading: Math.PI, pose: 'sit', seat: true, look: 'coat' }, { x: -16, z: -23.2, heading: 0, pose: 'phone', seat: true },
    { x: 20, z: -34.6, heading: Math.PI, pose: 'stand' }, { x: 28, z: -34.6, heading: Math.PI, pose: 'phone' },
    { x: 16, z: -25.6, heading: Math.PI, pose: 'sleep', seat: true }, { x: 32, z: -25.6, heading: Math.PI, pose: 'sit' },
    { x: 18, z: 36.6, heading: 0, pose: 'smoke-free', smoke: true, injury: ['gown', 'iv'] },
    { x: -14, z: 36.6, heading: 0, pose: 'phone', seat: true },
    { x: -10.6, z: -12.9, heading: Math.PI / 2, pose: 'fallen', mood: 'pain', injury: ['leg'] },
    { x: 20.6, z: 9.6, heading: Math.PI, pose: 'injured', mood: 'pain', injury: ['blood', 'head'] },
    { x: 26.4, z: 18, heading: -1.6, pose: 'scream', mood: 'terror', injury: ['arm'] },
    { x: 44, z: 24.6, heading: 0.4, pose: 'smoke-free', smoke: true, look: 'paramedic' },
  ],
  2: [
    { x: -30, z: 8, heading: Math.PI / 2, pose: 'lie', lying: true, injury: ['gown'] },
    { x: -31, z: 22.6, heading: 0, pose: 'lie', lying: true, injury: ['gown'], mood: 'scared' }, { x: -16, z: 21, heading: -Math.PI / 2, pose: 'read', seat: true, look: 'scrubs' },
    { x: -18.4, z: 4.6, heading: Math.PI, pose: 'sit', injury: ['leg'] }, { x: -15.6, z: 4.6, heading: Math.PI, pose: 'phone', seat: true },
    { x: -5, z: 18, heading: Math.PI, pose: 'lie', lying: true, injury: ['gown', 'iv'] },
    { x: 31, z: 18, heading: Math.PI, pose: 'lie', lying: true, injury: ['gown'] },
    { x: 29.4, z: 18.8, heading: 1.5, pose: 'stand', look: 'surgeon' }, { x: 32.6, z: 17.4, heading: -1.5, pose: 'stand', look: 'surgeon' },
    { x: 11.6, z: 16.6, heading: 0.6, pose: 'sit', seat: true, look: 'surgeon' },
    { x: 18, z: -24.6, heading: Math.PI, pose: 'phone', seat: true, look: 'scrubs' }, { x: 16.6, z: -26, heading: Math.PI / 2, pose: 'read', seat: true, look: 'coat' },
    { x: 8.8, z: 1.7, heading: Math.PI, pose: 'window', look: 'scrubs' },
  ],
  3: [
    { x: -37.6, z: -34, heading: Math.PI / 2, pose: 'lie', lying: true, injury: ['gown'] }, { x: 10.4, z: -34, heading: Math.PI / 2, pose: 'lie', lying: true, injury: ['gown', 'iv'] },
    { x: 37.6, z: -34, heading: -Math.PI / 2, pose: 'lie', lying: true, injury: ['gown'] }, { x: 26.4, z: -34, heading: Math.PI / 2, pose: 'lie', lying: true, injury: ['gown', 'head'] },
    { x: -37.6, z: 4, heading: Math.PI / 2, pose: 'lie', lying: true, injury: ['gown'] },
    { x: -30, z: 22, heading: Math.PI / 2, pose: 'lie', lying: true, injury: ['gown', 'iv'], mood: 'terror' },
    { x: -27.6, z: 23.6, heading: -2.2, pose: 'point', look: 'scrubs' }, { x: -25.4, z: 27, heading: 0.6, pose: 'fallen', mood: 'sleepy' },
    { x: -36.4, z: 29, heading: 2.6, pose: 'cry', seat: true },
    { x: 10, z: 2, heading: Math.PI, pose: 'lie', lying: true, injury: ['gown', 'tube'] }, { x: 30, z: 2, heading: Math.PI, pose: 'lie', lying: true, injury: ['gown', 'tube'] },
    { x: 20, z: 22, heading: 0, pose: 'lie', lying: true, injury: ['gown', 'tube'] }, { x: 30, z: 22, heading: 0, pose: 'lie', lying: true, injury: ['gown', 'iv'] },
    { x: 32.4, z: 21, heading: -1.6, pose: 'stand', look: 'scrubs' },
    { x: -20, z: -32.2, heading: Math.PI, pose: 'hug' }, { x: -20.8, z: -32.4, heading: Math.PI, pose: 'hug' },
  ],
  0: [
    { x: 26, z: -22.4, heading: 0, pose: 'lie', lying: true, sheet: true },
    { x: -30, z: -36.6, heading: Math.PI, pose: 'carry' },
  ],
};

// Short lines people say as you walk past (shown as bubbles near them).
export const CHATTER = {
  0: ['¿Alguien vio la camilla siete?', 'Aquí abajo nadie se queja.', 'La lavadora vuelve a cantar.', 'Este pasillo no sale en ningún plano.'],
  1: ['¿Qué número va?', 'Llevo aquí desde el lunes.', '¡Me salteó la fila!', '¿Esto es triaje o una feria?', 'Mamá, ya viene el médico.', 'Café de máquina: mi único amigo.', '¡Camilla, paso!', '¿Quién pidió una pizza a la guardia?', 'Dicen que el doctor existe.', 'Me duele todo, pero sobre todo la espera.'],
  2: ['¿Quién se llevó mi bolígrafo?', 'Rayos X, sala dos: libre.', 'El quirófano tres huele a café.', 'No me mires, estoy de guardia.', 'La centrífuga hace ruidos raros otra vez.'],
  3: ['Habitación 404 pide el control remoto.', '¿La contraseña del wifi? Paciencia.', 'Shhh, que la UCI escucha todo.', 'Feliz cumpleaños, Doña Karina.', 'Otra vez el timbre de la 405.'],
};

// Announcements on the hospital speakers, one every minute or so.
export const ANNOUNCEMENTS = [
  'Se ruega al propietario de un riñón olvidado en la cafetería que pase a recogerlo.',
  'Código amarillo: la máquina de café del primer piso vuelve a funcionar.',
  'El ascensor B no existe. Repetimos: el ascensor B no existe.',
  'Doctor Funes, despierte, por favor. Doctor Funes.',
  'Se informa que el número siete ya no se entrega en recepción.',
  'Familiares de la habitación 402: el pastel no está permitido. Bueno, un trozo sí.',
  'Ambulancia entrando por la bahía. Despejen el pasillo.',
  'Se busca a un señor con una bata abierta y un cigarrillo. Ya saben quién.',
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

// Outside the ground floor: the parts of the plot that are not street or bay.
const OUTSIDE = [box(40, -40, 58, 6), box(-40, 45.5, 58, 46)];
const NOT_SOLID = new Set(['curtain', 'curtains', 'tv', 'surglight', 'posts', 'pipes', 'balloons', 'callpanel']);
const TALL = new Set(['vending', 'lockers', 'shelves', 'washer', 'drawers', 'fridge', 'windows', 'kitchen', 'ambulance', 'leadglass', 'boiler', 'cabinet']);
// How high you stand after jumping onto a piece of furniture (Space). Things
// taller than a jump (lockers, shelves, the boiler) have no top.
const TOPS = { bed: 0.72, trauma: 0.72, icubed: 0.72, gurney: 0.9, ortable: 1, autopsy: 0.92, counter: 1.1, nursedesk: 1.1, ticket: 1.3, chairs: 0.8, sofa: 0.75, desk: 0.8, examchair: 0.95, crashcart: 1, medcart: 1, trolley: 1, foodcounter: 1.1, table: 0.78, bench: 0.5, bollard: 0.9, labbench: 0.95, centrifuge: 1.4, xray: 1, anesthesia: 1.3, linencart: 1.2, watercooler: 1.45, plant: 1.4, monitor: 1.6, ct: 1.2, delivery: 1, warmer: 1, wetfloor: 0.62, bin: 0.85, washer: 1.3, vending: 1.9, ambulance: 2.7 };
export function topOf(item) { return TOPS[item.type] ?? null; }

export function cameraBlockers(floor) {
  return [...(WALLS[floor] ?? []).map(wallBox), ...(FURNITURE[floor] ?? []).filter((f) => TALL.has(f.type)).map(footprint)];
}

export function solidsFor(floor) {
  const walls = (WALLS[floor] ?? []).map(wallBox);
  const things = (FURNITURE[floor] ?? []).filter((f) => f.solid !== false && !NOT_SOLID.has(f.type)).map((f) => ({ ...footprint(f), ...(topOf(f) ? { top: topOf(f) } : {}) }));
  const people = SCENES.filter((s) => s.floor === floor).flatMap((s) => [s.npc, ...(s.extras ?? [])])
    .filter((p) => !p.lying && !p.surgeon)
    .map((p) => box(p.x - 0.3, p.z - 0.3, p.x + 0.3, p.z + 0.3));
  const shaft = [box(-5, -40, -1, -39.2), box(2, -40, 8, -33)];
  return [...walls, ...things, ...people, ...shaft, ...(floor === 1 ? OUTSIDE : [])];
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
