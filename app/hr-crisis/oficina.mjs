// HR Crisis · the company building, as plain data (no three.js) so the
// collision test can read it: one floor of Caos y Asociados, S. A. with the
// reception, two interview rooms, payroll, the corridor, the HR department,
// the open-plan offices with the kitchen, the meeting room and the director's
// office. Units are metres; x grows east, z grows south (the entrance).

export const WALL = 0.25;
export const CEILING = 3.2;
export const BOUNDS = { minX: -24, maxX: 24, minZ: -18, maxZ: 18 };
// Inside the glass doors of the reception, looking into the building.
export const SPAWN = { x: 0, z: 15.6, heading: Math.PI };
// A low jump: the ceiling is 3.2 m and the mascot's head must stay below it.
export const JUMP_SPEED = 5.4;

export const ROOMS = [
  { id: 'recepcion', name: 'Recepción', x0: -8, z0: 6, x1: 8, z1: 18, floor: '#d9cfc0', wall: '#f3eee4' },
  { id: 'entrevista-1', name: 'Sala de entrevistas 1', x0: -24, z0: 6, x1: -16, z1: 18, floor: '#c9d4dc', wall: '#e8eef2' },
  { id: 'entrevista-2', name: 'Sala de entrevistas 2', x0: -16, z0: 6, x1: -8, z1: 18, floor: '#c9d4dc', wall: '#eef0e6' },
  { id: 'nominas', name: 'Nóminas y administración', x0: 8, z0: 6, x1: 24, z1: 18, floor: '#cfc6b4', wall: '#f0e6d2' },
  { id: 'pasillo', name: 'Pasillo', x0: -24, z0: 2, x1: 24, z1: 6, floor: '#b9b2a6', wall: '#ece6dc' },
  { id: 'rrhh', name: 'Departamento de RR. HH.', x0: -24, z0: -18, x1: -10, z1: 2, floor: '#d6c7d8', wall: '#f4ecf4' },
  { id: 'oficinas', name: 'Oficinas de empleados', x0: -10, z0: -18, x1: 6, z1: 2, floor: '#c4ccc0', wall: '#eef2ea' },
  { id: 'reuniones', name: 'Sala de reuniones', x0: 6, z0: -18, x1: 16, z1: 2, floor: '#bfc6d2', wall: '#e6ebf4' },
  { id: 'direccion', name: 'Despacho del director', x0: 16, z0: -18, x1: 24, z1: 2, floor: '#7a5a44', wall: '#efe4d4' },
];
export const roomAt = (x, z) => ROOMS.find(r => r.id !== 'pasillo' && x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1)
  ?? ROOMS.find(r => x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1) ?? null;

// Wall segments [x0, z0, x1, z1, kind]: the gaps between segments are doors.
export const WALLS = [
  [-24, 18, -1.6, 18, 'ext'], [1.6, 18, 24, 18, 'ext'],
  [-24, -18, 24, -18, 'ext'], [-24, -18, -24, 18, 'ext'], [24, -18, 24, 18, 'ext'],
  // Between the south rooms and the corridor.
  [-24, 6, -21, 6, 'int'], [-19, 6, -13, 6, 'int'], [-11, 6, -5, 6, 'int'], [5, 6, 13, 6, 'int'], [15, 6, 24, 6, 'int'],
  [-16, 6, -16, 18, 'int'], [-8, 6, -8, 18, 'int'], [8, 6, 8, 18, 'int'],
  // Between the corridor and the north rooms.
  [-24, 2, -18, 2, 'int'], [-16, 2, -8, 2, 'int'], [0, 2, 9, 2, 'int'], [11.5, 2, 19, 2, 'int'], [21, 2, 24, 2, 'int'],
  [-10, -18, -10, 2, 'int'], [6, -18, 6, 2, 'glass'], [16, -18, 16, 2, 'int'],
];
// The glass entrance stays shut behind you: a solid pane in the doorway.
export const ENTRANCE = { x0: -1.6, x1: 1.6, z: 18 };

export const DOORS = [
  { x: -20, z: 6, w: 2, axis: 'x', label: 'ENTREVISTAS 1' },
  { x: -12, z: 6, w: 2, axis: 'x', label: 'ENTREVISTAS 2' },
  { x: 14, z: 6, w: 2, axis: 'x', label: 'NÓMINAS' },
  { x: -17, z: 2, w: 2, axis: 'x', label: 'RR. HH.' },
  { x: 10.25, z: 2, w: 2.5, axis: 'x', label: 'SALA DE REUNIONES' },
  { x: 20, z: 2, w: 2, axis: 'x', label: 'DIRECCIÓN' },
];

// Furniture: centre, size, optional top (people and the mascot can stand on
// it). Types are drawn by oficina3d.ts.
export const FURNITURE = [
  // Reception.
  { type: 'mostrador', x: 0, z: 10.5, w: 4.4, d: 1, top: 1.08 },
  { type: 'sofa', x: -6.6, z: 15.2, w: 1, d: 2.6, top: 0.45, rot: 1 },
  { type: 'sofa', x: 6.6, z: 15.2, w: 1, d: 2.6, top: 0.45, rot: -1 },
  { type: 'mesita', x: -4.9, z: 15.2, w: 0.8, d: 1.2, top: 0.42 },
  { type: 'planta', x: -7.2, z: 7, w: 0.7, d: 0.7 },
  { type: 'planta', x: 7.2, z: 7, w: 0.7, d: 0.7 },
  { type: 'cafetera', x: 6.9, z: 9.6, w: 0.7, d: 0.6, top: 1.3 },
  // Interview rooms.
  { type: 'mesa', x: -20, z: 12, w: 1.8, d: 1.2, top: 0.76 },
  { type: 'silla', x: -20, z: 13.3, w: 0.5, d: 0.5, top: 0.46 },
  { type: 'planta', x: -23.1, z: 17, w: 0.7, d: 0.7 },
  { type: 'archivador', x: -17, z: 16.9, w: 1, d: 0.6, top: 1.2 },
  { type: 'mesa', x: -12, z: 12, w: 1.8, d: 1.2, top: 0.76 },
  { type: 'silla', x: -12, z: 13.3, w: 0.5, d: 0.5, top: 0.46 },
  { type: 'planta', x: -8.9, z: 17, w: 0.7, d: 0.7 },
  { type: 'dispensador', x: -15.1, z: 16.9, w: 0.5, d: 0.5 },
  // Payroll and administration.
  { type: 'escritorio', x: 12, z: 10, w: 1.8, d: 0.9, top: 0.76, screen: true },
  { type: 'escritorio', x: 18, z: 8, w: 1.8, d: 0.8, top: 0.76, screen: true },
  { type: 'archivador', x: 23.3, z: 9, w: 0.6, d: 1.6, top: 1.2 },
  { type: 'archivador', x: 23.3, z: 11, w: 0.6, d: 1.6, top: 1.2 },
  { type: 'archivador', x: 23.3, z: 13, w: 0.6, d: 1.6, top: 1.2 },
  { type: 'caja-fuerte', x: 22.9, z: 16.9, w: 1, d: 0.8, top: 1.1 },
  { type: 'impresora', x: 9.2, z: 16.8, w: 1.1, d: 0.8, top: 1 },
  { type: 'cajas', x: 15.4, z: 16.9, w: 1.2, d: 0.9, top: 0.9 },
  // Corridor.
  { type: 'fuente', x: 3.4, z: 2.5, w: 0.45, d: 0.45 },
  { type: 'impresora', x: -6.8, z: 5.45, w: 1.1, d: 0.7, top: 1 },
  { type: 'planta', x: 23.3, z: 4, w: 0.7, d: 0.7 },
  { type: 'planta', x: -23.3, z: 4, w: 0.7, d: 0.7 },
  // HR department.
  { type: 'escritorio', x: -17, z: -6, w: 1.8, d: 0.9, top: 0.76, screen: true },
  { type: 'escritorio', x: -13, z: -12, w: 1.8, d: 0.9, top: 0.76, sign: 'De vacaciones desde 2019' },
  { type: 'estanteria', x: -23.5, z: -8, w: 0.6, d: 3.6, top: 2 },
  { type: 'estanteria', x: -23.5, z: -13, w: 0.6, d: 3.6, top: 2 },
  { type: 'planta', x: -11, z: 1, w: 0.7, d: 0.7 },
  { type: 'archivador', x: -20.5, z: -17.3, w: 1.6, d: 0.6, top: 1.2 },
  // Open-plan offices and the kitchen.
  { type: 'isla', x: -5.5, z: -5, w: 3.2, d: 1.6, top: 0.76 },
  { type: 'isla', x: 1.5, z: -5, w: 3.2, d: 1.6, top: 0.76 },
  { type: 'isla', x: -5.5, z: -10, w: 3.2, d: 1.6, top: 0.76 },
  { type: 'isla', x: 1.5, z: -10, w: 3.2, d: 1.6, top: 0.76 },
  { type: 'encimera', x: -8.8, z: -16.6, w: 2, d: 1, top: 0.92 },
  { type: 'nevera', x: -6.6, z: -17.25, w: 0.8, d: 0.7 },
  { type: 'planta', x: 5.2, z: -17.2, w: 0.7, d: 0.7 },
  { type: 'planta', x: -9.2, z: 1, w: 0.7, d: 0.7 },
  // Meeting room.
  { type: 'mesa-larga', x: 11, z: -8, w: 3, d: 6, top: 0.76 },
  { type: 'pantalla', x: 11, z: -17.6, w: 3, d: 0.3 },
  { type: 'planta', x: 15.2, z: 1.2, w: 0.7, d: 0.7 },
  // Director's office.
  { type: 'escritorio-director', x: 20, z: -12, w: 2.4, d: 1.1, top: 0.78 },
  { type: 'sofa', x: 23.2, z: -4.5, w: 1, d: 2.6, top: 0.45, rot: -1 },
  { type: 'jaula', x: 23, z: -16.8, w: 0.9, d: 0.9 },
  { type: 'mesita', x: 16.9, z: -1.2, w: 0.6, d: 0.6, top: 0.9, mic: true },
  { type: 'planta', x: 17, z: -17, w: 0.7, d: 0.7 },
];

/** A furniture item's footprint as a box. */
export function footprint(f) {
  return { x0: f.x - f.w / 2, x1: f.x + f.w / 2, z0: f.z - f.d / 2, z1: f.z + f.d / 2 };
}
export function wallBox([x0, z0, x1, z1]) {
  const h = WALL / 2;
  return { x0: Math.min(x0, x1) - h, x1: Math.max(x0, x1) + h, z0: Math.min(z0, z1) - h, z1: Math.max(z0, z1) + h, wall: true };
}

// ------------------------------------------------------------ people
// Everyone with a role in a mission. `look` feeds people3d.createPerson.
export const CAST = {
  marga: { name: 'Marga', role: 'recepcionista', voice: 'es-ES-ElviraNeural', x: 0, z: 9.4, heading: 0, pose: 'phone', mood: 'worried', look: { skin: '#e8b48c', body: 'f', age: 'adult', hairStyle: 'bun', hairColor: '#8a3a22', top: 'shirt', topColor: '#d84a6a', bottom: 'skirt', bottomColor: '#2a2f3a' } },
  bruno: { name: 'Bruno Salvatierra', role: 'candidato', voice: 'es-AR-TomasNeural', x: -20, z: 10.25, heading: 0, pose: 'sit', seated: true, mood: 'smile', look: { skin: '#f0c8a8', body: 'm', age: 'young', hairStyle: 'short', hairColor: '#2a1a10', top: 'suit', topColor: '#2c3e8a', bottom: 'pants', bottomColor: '#1e2a5a' } },
  lucia: { name: 'Lucía Ferrán', role: 'candidata', voice: 'es-CR-MariaNeural', x: -12, z: 10.25, heading: 0, pose: 'sit', seated: true, mood: 'worried', look: { skin: '#c88a5a', body: 'f', age: 'young', hairStyle: 'ponytail', hairColor: '#1a1210', top: 'jacket', topColor: '#6a8a5a', bottom: 'pants', bottomColor: '#2a2f3a' } },
  paloma: { name: 'Paloma', role: 'compañera de RR. HH.', voice: 'es-UY-ValentinaNeural', x: -17, z: -7.05, heading: 0, pose: 'sit', seated: true, mood: 'smile', look: { skin: '#f2c8a0', body: 'f', age: 'adult', hairStyle: 'curly', hairColor: '#c8a050', top: 'sweater', topColor: '#8a4ab0', bottom: 'pants', bottomColor: '#3a3040' } },
  sonia: { name: 'Sonia', role: 'analista', voice: 'es-CO-SalomeNeural', x: 3.55, z: -5, heading: -Math.PI / 2, pose: 'sit', seated: true, mood: 'angry', look: { skin: '#e0a880', body: 'f', age: 'adult', hairStyle: 'bob', hairColor: '#1a1a1a', top: 'shirt', topColor: '#e0e4ea', bottom: 'pants', bottomColor: '#2a2f3a' } },
  ivan: { name: 'Iván', role: 'diseñador', voice: 'es-CL-LorenzoNeural', x: 3.8, z: -14, heading: 0, pose: 'guitar', mood: 'laugh', look: { skin: '#f0d0b0', body: 'm', age: 'young', hairStyle: 'curly', hairColor: '#d8a040', top: 'hoodie', topColor: '#f08a24', bottom: 'jeans', bottomColor: '#3a5a8a' } },
  rafa: { name: 'Rafa', role: 'contable', voice: 'es-EC-LuisNeural', x: -7.6, z: -14.5, heading: Math.PI / 2, pose: 'arms', mood: 'angry', look: { skin: '#b07850', body: 'm', age: 'adult', hairStyle: 'bald', hairColor: '#2a1a10', top: 'shirt', topColor: '#7aa0c8', bottom: 'pants', bottomColor: '#3a3a40' } },
  carmen: { name: 'Carmen', role: 'jefa de ventas', voice: 'es-DO-RamonaNeural', x: -5.4, z: -14.5, heading: -Math.PI / 2, pose: 'point', mood: 'furious', look: { skin: '#f0c0a0', body: 'f', age: 'old', hairStyle: 'short', hairColor: '#b8b8b8', top: 'jacket', topColor: '#c83a3a', bottom: 'skirt', bottomColor: '#2a2f3a' } },
  tomas: { name: 'Don Ernesto', role: 'responsable de nóminas', voice: 'es-CU-ManuelNeural', x: 12, z: 8.95, heading: 0, pose: 'sit', seated: true, mood: 'sleepy', look: { skin: '#e8c0a0', body: 'm', age: 'elderly', hairStyle: 'bald', hairColor: '#e0e0e0', top: 'sweater', topColor: '#7a6a4a', bottom: 'pants', bottomColor: '#4a4030' } },
  jimena: { name: 'Jimena', role: 'técnica de logística', voice: 'es-PE-CamilaNeural', x: 19, z: 12.2, heading: 0, pose: 'arms', mood: 'angry', look: { skin: '#a86a40', body: 'f', age: 'young', hairStyle: 'braids', hairColor: '#1a1210', top: 'uniform', topColor: '#3a7a9a', bottom: 'jeans', bottomColor: '#2a3a5a' } },
  nacho: { name: 'Nacho', role: 'informático', voice: 'es-MX-JorgeNeural', x: 1.6, z: 3, heading: 0, pose: 'phone', mood: 'scared', look: { skin: '#f0d0b8', body: 'm', age: 'young', hairStyle: 'cap', hairColor: '#4a3020', top: 'tshirt', topColor: '#2a2a2a', bottom: 'jeans', bottomColor: '#3a4a6a' } },
  olga: { name: 'Olga', role: 'directora financiera', voice: 'es-VE-PaolaNeural', x: 11, z: -15.4, heading: 0, pose: 'point', mood: 'neutral', look: { skin: '#f4d0b8', body: 'f', age: 'adult', hairStyle: 'long', hairColor: '#e0c070', top: 'suit', topColor: '#2a2a30', bottom: 'skirt', bottomColor: '#2a2a30' } },
  hugo: { name: 'Hugo', role: 'director comercial', voice: 'es-PR-VictorNeural', x: 8.95, z: -7, heading: Math.PI / 2, pose: 'sit', seated: true, mood: 'smile', look: { skin: '#d8a070', body: 'm', age: 'adult', hairStyle: 'short', hairColor: '#3a2a1a', top: 'suit', topColor: '#6a5a8a', bottom: 'pants', bottomColor: '#2a2a3a' } },
  ramiro: { name: 'Ramiro', role: 'consejero delegado adjunto', voice: 'es-GT-AndresNeural', x: 14.6, z: -14.6, heading: -Math.PI / 4, pose: 'arms', mood: 'angry', look: { skin: '#e8c0a0', body: 'm', age: 'old', hairStyle: 'short', hairColor: '#9a9a9a', top: 'suit', topColor: '#1e1e24', bottom: 'pants', bottomColor: '#1e1e24' } },
  alvaro: { name: 'Álvaro Montenegro', role: 'director general', voice: 'es-ES-AlvaroNeural', x: 20, z: -13.3, heading: 0, pose: 'sit', seated: true, mood: 'scared', look: { skin: '#f0c8a8', body: 'm', age: 'old', hairStyle: 'short', hairColor: '#f0f0f0', top: 'suit', topColor: '#5a2a2a', bottom: 'pants', bottomColor: '#2a2020' } },
};

// Extras: everyone else who works here (each with a conversation circle).
export const CROWD = [
  { x: -6.4, z: -3.75, heading: Math.PI, pose: 'sit', seed: 11 },
  { x: -4.6, z: -3.75, heading: Math.PI, pose: 'phone', seed: 12, seated: true },
  { x: -6.4, z: -6.25, heading: 0, pose: 'sit', seed: 13 },
  { x: 0.6, z: -3.75, heading: Math.PI, pose: 'sit', seed: 14 },
  { x: -4.6, z: -8.75, heading: Math.PI, pose: 'sit', seed: 15 },
  { x: -6.4, z: -11.25, heading: 0, pose: 'sleep', seed: 16 },
  { x: 2.4, z: -8.75, heading: Math.PI, pose: 'sit', seed: 17 },
  { x: 0.6, z: -11.25, heading: 0, pose: 'sit', seed: 18 },
  { x: -6.55, z: 14.4, heading: Math.PI / 2, pose: 'sit', seed: 19 },
  { x: 6.55, z: 16, heading: -Math.PI / 2, pose: 'read', seed: 20, seated: true },
  { x: 18, z: 7.05, heading: 0, pose: 'sit', seed: 21 },
  { x: -13, z: -13.05, heading: 0, pose: 'stand', seed: 22, cutout: true },
  { x: 12.55, z: -5.5, heading: -Math.PI / 2, pose: 'sit', seed: 23 },
];
export const crowdSeated = (c) => Boolean(c.seated || c.pose === 'sit' || c.pose === 'sleep');

// People who walk loops: a courier, a colleague with boxes, the cleaner.
export const WALKERS = [
  { path: [[-21, 4.2], [21, 4.2]], speed: 1.3, seed: 31, carry: true },
  { path: [[-2, 0.4], [-2, -15.6]], speed: 1.1, seed: 32, carry: true, delay: 4 },
  { path: [[-4, 13.6], [4, 13.6]], speed: 0.7, seed: 33, pause: 2 },
  { path: [[-19.5, -2.6], [-11, -2.6], [-11, -14.4], [-19.5, -14.4]], speed: 1, seed: 34, delay: 7 },
];

/** A walker's position after `t` seconds on its loop (with pauses at corners). */
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

// ------------------------------------------------------------ mission spots
// Where each task happens: the circle, who you talk to (or the thing you use).
export const SPOTS = {
  'm1-recepcion': { x: 0, z: 12.5, npc: 'marga' },
  'm1-bruno': { x: -20, z: 14.5, npc: 'bruno' },
  'm1-lucia': { x: -12, z: 14.5, npc: 'lucia' },
  'm1-decision': { x: -17, z: -4.5, npc: 'paloma' },
  'm2-correo': { x: 5.2, z: -5, npc: 'sonia' },
  'm2-ivan': { x: 3.8, z: -11.8, npc: 'ivan' },
  'm2-cocina': { x: -6.5, z: -12.4, npc: 'rafa', also: 'carmen' },
  'm3-nomina': { x: 12, z: 11.8, npc: 'tomas' },
  'm3-jimena': { x: 19, z: 14.3, npc: 'jimena' },
  'm3-correo': { x: 18, z: 9.7, thing: 'ordenador', heading: Math.PI },
  'm4-ordenar': { x: -14, z: -16, thing: 'corcho', heading: Math.PI },
  'm4-anuncio': { x: -6, z: 0.4, thing: 'equipo', heading: Math.PI },
  'm4-rumor': { x: 1.6, z: 4.9, npc: 'nacho' },
  'm5-informe': { x: 11, z: -12.6, npc: 'olga' },
  'm5-propuesta': { x: 7.1, z: -9, npc: 'hugo' },
  'm5-pregunta': { x: 14.2, z: -12.2, npc: 'ramiro' },
  'm6-crisis': { x: 20, z: -9.6, npc: 'alvaro' },
  'm6-plan': { x: 22.6, z: -8, thing: 'pizarra', heading: Math.PI / 2 },
  'm6-mensaje': { x: 18.3, z: -1.2, thing: 'microfono', heading: -Math.PI / 2 },
};
export const SPOT_IDS = Object.keys(SPOTS);
export const SPOT_RADIUS = 1.05;

/** Where the mascot stands in a circle, facing the person (or the thing). */
export function spotFraming(id) {
  const s = SPOTS[id];
  if (!s) return null;
  const who = s.npc ? CAST[s.npc] : null;
  const heading = who ? Math.atan2(who.x - s.x, who.z - s.z) : (s.heading ?? 0);
  return { x: s.x, z: s.z, heading };
}

/** The circle under the player, if any (only open circles count). */
export function spotAt(x, z, open = SPOT_IDS, radius = SPOT_RADIUS) {
  let best = null, distance = radius;
  for (const id of open) {
    const s = SPOTS[id];
    if (!s) continue;
    const d = Math.hypot(s.x - x, s.z - z);
    if (d < distance) { distance = d; best = id; }
  }
  return best;
}

/** One frame of the circles: a circle opens once you stand still in it; it stays spent until you walk out. */
export function circleStep(circle, here, opened, speed, dt) {
  let { inside, still, spent } = circle;
  if (opened) return { inside: null, still: 0, spent: opened, open: null };
  if (here !== inside) { inside = here; still = 0; if (!here) spent = null; }
  still = inside && speed < 0.3 ? still + dt : 0;
  const open = inside && spent !== inside && still > 0.45 ? inside : null;
  if (open) spent = open;
  return { inside, still, spent, open };
}

// ------------------------------------------------------------ solids
const NOT_SOLID = new Set(['pantalla']);
const personBox = (x, z) => ({ x0: x - 0.3, x1: x + 0.3, z0: z - 0.3, z1: z + 0.3, person: true });

export function solidsFor() {
  const walls = WALLS.map(wallBox);
  const door = { x0: ENTRANCE.x0, x1: ENTRANCE.x1, z0: ENTRANCE.z - WALL / 2, z1: ENTRANCE.z + WALL / 2, wall: true };
  const things = FURNITURE.filter(f => !NOT_SOLID.has(f.type)).map(f => ({ ...footprint(f), ...(f.top != null ? { top: f.top } : {}), prop: f.type }));
  const people = Object.values(CAST).filter(c => !c.seated).map(c => personBox(c.x, c.z));
  return [...walls, door, ...things, ...people];
}

/** Walls only: the camera arm is shortened when one stands in the way. */
export function cameraBlockers() {
  return WALLS.filter(w => w[4] !== 'glass').map(wallBox);
}
