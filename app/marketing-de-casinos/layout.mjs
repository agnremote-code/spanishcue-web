// El Gran Meridiano · the casino as plain data: three floors, the Strip in
// front, furniture, colliders, the people at each white circle and the
// elevator. Units are metres: x grows east, z grows south, y is up. A
// heading of 0 faces +z (toward the Strip), π faces the back of the casino.
// The renderer (casino3d.ts, World3D.tsx) only draws what is described here,
// so the layout and the movement rules can be tested without WebGL.

export const FLOOR_H = 7;
export const CEILING = 6;
export const WALL = 0.4;

// The interior of every floor; the ground floor also opens to the plaza.
export const FLOORS = [
  { id: 1, name: 'La Planta', sub: 'Recepción · tragamonedas · mesas · bar', y: 0, bounds: { minX: -42, maxX: 42, minZ: -52, maxZ: 50 } },
  { id: 2, name: 'El Bulevar', sub: 'Apuestas · póker · bufé · teatro · capilla · club', y: FLOOR_H, bounds: { minX: -42, maxX: 42, minZ: -52, maxZ: 20 } },
  { id: 3, name: 'Piso VIP', sub: 'Bacará · puros · anfitrión · oficina · terraza', y: FLOOR_H * 2, bounds: { minX: -42, maxX: 42, minZ: -52, maxZ: 26 } },
];
export const floorById = (id) => FLOORS.find((f) => f.id === id) ?? FLOORS[0];

// Arrival on the Strip, looking at the entrance.
export const SPAWN = { floor: 1, x: 0, z: 43, heading: Math.PI };
// The elevator lobby is in the same place on every floor.
export const ELEVATOR = { x: 31, z: -46.6, radius: 1.5, doors: [28, 34], wallZ: -52 };
export const ELEVATOR_ARRIVAL = { x: 31, z: -44.2, heading: 0 };

// ------------------------------------------------------------------ walls
// Wall segments [x0, z0, x1, z1]; openings are simply gaps between segments.
const outer = (south, doorHalf) => [
  [-42, -52, 42, -52],
  [-42, -52, -42, south], [42, -52, 42, south],
  [-42, south, -doorHalf, south], [doorHalf, south, 42, south],
];
export const WALLS = {
  1: [
    ...outer(20, 4.5),
    // Cashier cage and the corridor to the elevators.
    [-42, -33, -33, -33], [-33, -33, -33, -36], [-33, -44, -33, -52],
    [24, -52, 24, -48.5], [24, -43, 24, -42], [24, -42, 26, -42], [38, -42, 42, -42],
  ],
  2: [
    ...outer(20, 0),
    // Sports book, poker salon, theatre, chapel and club have their own walls.
    [-42, -24, -30, -24], [-24, -24, -16, -24], [-16, -52, -16, -46], [-16, -40, -16, -30],
    [-16, 8, -16, -2], [-16, -8, -16, -14],
    [16, -30, 16, -22], [16, -16, 16, 2], [16, 2, 24, 2], [30, 2, 42, 2],
    [-10, 20, -10, 6], [10, 20, 10, 6], [-10, 6, -3, 6], [3, 6, 10, 6],
    [24, -52, 24, -48.5], [24, -43, 24, -42], [24, -42, 26, -42], [38, -42, 42, -42],
  ],
  3: [
    [-42, -52, 42, -52], [-42, -52, -42, 0], [42, -52, 42, 0],
    [-42, 0, -7, 0], [7, 0, 42, 0],
    // Cigar room, office, baccarat salon and the VIP door.
    [-42, -26, -32, -26], [-26, -26, -16, -26], [-16, -52, -16, -42], [-16, -36, -16, -26],
    [-42, -22, -30, -22], [-24, -22, -16, -22], [-16, -22, -16, -14], [-16, -6, -16, 0],
    [-12, -52, -12, -30], [-12, -30, 14, -30], [14, -52, 14, -48], [14, -40, 14, -30],
    [24, -52, 24, -48.5], [24, -43, 24, -42], [24, -42, 26, -42], [38, -42, 42, -42],
    // Glass railing around the terrace.
    [-30, 0, -30, 26], [30, 0, 30, 26], [-30, 26, 30, 26],
  ],
};

// ------------------------------------------------------------------ furniture
// { type, x, z, w, d, rot } — w along x and d along z before `rot` quarter
// turns. `solid: false` for things the heroine can walk over or through.
const slotBank = (x, z0, z1) => ({ type: 'slots', x, z: (z0 + z1) / 2, w: 1.4, d: z1 - z0 });
export const FURNITURE = {
  1: [
    // Lobby and hotel.
    { type: 'desk', x: -20, z: 10, w: 12, d: 1.6 },
    { type: 'backwall', x: -20, z: 6.6, w: 14, d: 0.6 },
    { type: 'chandelier', x: 0, z: 12, w: 1, d: 1, solid: false },
    { type: 'fountain-in', x: 0, z: 4, w: 6, d: 6 },
    { type: 'column', x: -9, z: 15, w: 1.2, d: 1.2 }, { type: 'column', x: 9, z: 15, w: 1.2, d: 1.2 },
    { type: 'column', x: -9, z: -6, w: 1.2, d: 1.2 }, { type: 'column', x: 9, z: -6, w: 1.2, d: 1.2 },
    { type: 'column', x: -9, z: -30, w: 1.2, d: 1.2 }, { type: 'column', x: 9, z: -30, w: 1.2, d: 1.2 },
    { type: 'sofa', x: 18, z: 16, w: 4, d: 1.2 }, { type: 'sofa', x: -30, z: 16, w: 4, d: 1.2 },
    // Slots: four double banks with a cross aisle.
    slotBank(18, -26, -6), slotBank(18, 0, 12), slotBank(26, -26, -6), slotBank(26, 0, 12),
    slotBank(34, -26, -6), slotBank(34, 0, 12),
    { type: 'bigslot', x: 39.6, z: -2, w: 1.6, d: 3 },
    // Table games.
    { type: 'roulette', x: -18, z: -8, w: 3.4, d: 1.8 },
    { type: 'roulette', x: -30, z: -8, w: 3.4, d: 1.8 },
    { type: 'blackjack', x: -4, z: -14, w: 3, d: 1.7 },
    { type: 'blackjack', x: -4, z: -22, w: 3, d: 1.7 },
    { type: 'craps', x: 8, z: -26, w: 4.6, d: 2.2 },
    { type: 'blackjack', x: -26, z: -20, w: 3, d: 1.7 },
    // Cashier, bar and piano.
    { type: 'cage', x: -37.5, z: -40, w: 9, d: 14 },
    { type: 'bar', x: -6, z: -42, w: 8, d: 5 },
    { type: 'piano', x: 4, z: -46, w: 2.2, d: 1.6 },
    { type: 'lounge', x: 10, z: -40, w: 1.8, d: 1.8 }, { type: 'lounge', x: -18, z: -42, w: 1.8, d: 1.8 },
    { type: 'planter', x: 22, z: 18.6, w: 1.4, d: 1.4 }, { type: 'planter', x: -22, z: 18.6, w: 1.4, d: 1.4 },
  ],
  2: [
    { type: 'screens', x: -41.4, z: -38, w: 0.6, d: 24 },
    { type: 'betdesk', x: -30, z: -46, w: 8, d: 1.4 },
    { type: 'betseats', x: -32, z: -36, w: 6, d: 1 }, { type: 'betseats', x: -32, z: -31, w: 6, d: 1 },
    { type: 'poker', x: -34, z: -12, w: 3.4, d: 2 }, { type: 'poker', x: -25, z: -4, w: 3.4, d: 2 }, { type: 'poker', x: -34, z: 2, w: 3.4, d: 2 },
    { type: 'buffet', x: 0, z: -47, w: 18, d: 1.6 },
    { type: 'buffet', x: -6, z: -37, w: 6, d: 1.4 }, { type: 'buffet', x: 6, z: -37, w: 6, d: 1.4 },
    { type: 'chocolate', x: 0, z: -37, w: 1.4, d: 1.4 },
    { type: 'stage', x: 33, z: -16, w: 16, d: 16 },
    { type: 'vanity', x: 19, z: -28, w: 5, d: 1 },
    { type: 'altar', x: 0, z: 18.2, w: 4, d: 1 },
    { type: 'pew', x: -4, z: 8.5, w: 4.4, d: 0.8 }, { type: 'pew', x: 4, z: 8.5, w: 4.4, d: 0.8 },
    { type: 'pew', x: -4, z: 11, w: 4.4, d: 0.8 }, { type: 'pew', x: 4, z: 11, w: 4.4, d: 0.8 },
    { type: 'pew', x: -4, z: 13.5, w: 4.4, d: 0.8 }, { type: 'pew', x: 4, z: 13.5, w: 4.4, d: 0.8 },
    { type: 'djbooth', x: 38, z: 11, w: 2.4, d: 5 },
    { type: 'dancefloor', x: 28, z: 11, w: 10, d: 10, solid: false },
    { type: 'vipbooth', x: 20, z: 18, w: 5, d: 1.4 },
    { type: 'column', x: -9, z: -10, w: 1.2, d: 1.2 }, { type: 'column', x: 9, z: -10, w: 1.2, d: 1.2 },
    { type: 'column', x: -9, z: -24, w: 1.2, d: 1.2 }, { type: 'column', x: 9, z: -24, w: 1.2, d: 1.2 },
    { type: 'statue', x: 0, z: -14, w: 3, d: 3 },
    { type: 'chandelier', x: 0, z: -14, w: 1, d: 1, solid: false },
  ],
  3: [
    { type: 'baccarat', x: 0, z: -43, w: 4, d: 2.2 },
    { type: 'sofa', x: -8, z: -34, w: 3.4, d: 1.2 }, { type: 'sofa', x: 9, z: -34, w: 3.4, d: 1.2 },
    { type: 'cardtable', x: -30, z: -40, w: 2.4, d: 2.4 },
    { type: 'armchair', x: -38, z: -48, w: 1.4, d: 1.4 }, { type: 'armchair', x: -22, z: -48, w: 1.4, d: 1.4 },
    { type: 'armchair', x: -38, z: -31, w: 1.4, d: 1.4 },
    { type: 'humidor', x: -41, z: -40, w: 1, d: 6 },
    { type: 'officedesk', x: -32.5, z: -12, w: 1.8, d: 4 },
    { type: 'safe', x: -40.8, z: -18, w: 1.2, d: 1.4 },
    { type: 'bookcase', x: -41.4, z: -8, w: 0.8, d: 8 },
    { type: 'hostdesk', x: 0, z: -17.6, w: 4, d: 1.2 },
    { type: 'photos', x: 0, z: -21.8, w: 8, d: 0.3, solid: false },
    { type: 'velvet', x: 20, z: -40, w: 0.3, d: 1.2 }, { type: 'velvet', x: 20, z: -48, w: 0.3, d: 1.2 },
    { type: 'column', x: 20, z: -10, w: 1.2, d: 1.2 }, { type: 'column', x: -8, z: -4, w: 1.2, d: 1.2 },
    { type: 'lounge', x: 26, z: -16, w: 1.8, d: 1.8 },
    { type: 'chandelier', x: 0, z: -42, w: 1, d: 1, solid: false },
    { type: 'deckchair', x: -20, z: 14, w: 1, d: 2.2 }, { type: 'deckchair', x: -16, z: 14, w: 1, d: 2.2 },
    { type: 'firepit', x: -18, z: 6, w: 2.4, d: 2.4 },
    { type: 'cardtable', x: 10, z: -20, w: 2.4, d: 2.4 },
    { type: 'planter', x: 16, z: 6, w: 1.4, d: 1.4 },
  ],
};

// ------------------------------------------------------------------ scenes
// The twenty white circles. `npc` is where the main person stands or sits,
// `spot` the circle, `look` their appearance (people3d Look) and `pose`.
// `extras` are background people that belong to the scene.
const blonde = '#e9cf8a';
// Casino security: black suit, earpiece, no neck.
const GUARD = (seed) => ({ skin: seed % 2 ? '#c48f69' : '#e2b896', age: 'adult', body: 'm', build: 'heavy', height: 1.9, hairStyle: 'buzz', hairColor: '#1a1210', top: 'suit', topColor: '#121214', bottom: 'pants', bottomColor: '#121214', extras: ['headphones'], seed });
export const SCENES = [
  { id: 'portero', floor: 1, place: 'La entrada', name: 'Rocco', role: 'Portero', spot: { x: 1.4, z: 26.2 }, npc: { x: 3.4, z: 23.4, heading: 0.35 }, pose: 'stand', look: { skin: '#d7a982', age: 'old', body: 'm', build: 'heavy', hairStyle: 'short', hairColor: '#cfcfcf', top: 'uniform', topColor: '#6e1424', bottom: 'pants', bottomColor: '#1a1414', extras: ['mustache'], seed: 101 } },
  { id: 'recepcion', floor: 1, place: 'Recepción del hotel', name: 'Marisol', role: 'Recepcionista', spot: { x: -20, z: 12.3 }, npc: { x: -20, z: 8.2, heading: 0 }, pose: 'stand', look: { skin: '#b9825c', age: 'young', body: 'f', hairStyle: 'bun', hairColor: '#2a1a12', top: 'suit', topColor: '#1d2433', bottom: 'skirt', bottomColor: '#1d2433', extras: ['earrings'], seed: 102 } },
  { id: 'tragamonedas', floor: 1, place: 'Tragamonedas', name: 'Doña Pilar', role: 'Jugadora de toda la vida', spot: { x: 21.8, z: 3.4 }, npc: { x: 24.3, z: 4.2, heading: Math.PI / 2 }, pose: 'sit', smoke: true, look: { skin: '#e8c3a6', age: 'elderly', body: 'f', build: 'heavy', hairStyle: 'curly', hairColor: '#b9a7c9', top: 'sweater', topColor: '#c2477d', bottom: 'pants', bottomColor: '#3a3340', extras: ['glasses', 'earrings'], seed: 103 } },
  { id: 'ruleta', floor: 1, place: 'Ruleta', name: 'Nico', role: 'Crupier', spot: { x: -19.8, z: -4.6 }, npc: { x: -18, z: -9.6, heading: 0 }, pose: 'stand', look: { skin: '#c48f69', age: 'young', body: 'm', build: 'slim', hairStyle: 'short', hairColor: '#1a1210', top: 'suit', topColor: '#1a1a1d', bottom: 'pants', bottomColor: '#141416', seed: 104 },
    extras: [{ x: -16.2, z: -6.6, heading: Math.PI + 0.3, pose: 'sit', smoke: true, cigar: true, look: { skin: '#e2b896', age: 'old', body: 'm', build: 'heavy', hairStyle: 'bald', hairColor: '#8a8a8a', top: 'suit', topColor: '#e9e4d6', bottom: 'pants', bottomColor: '#e9e4d6', extras: ['mustache'], seed: 141 } },
      { x: -20.2, z: -6.5, heading: Math.PI - 0.3, pose: 'sit', look: { skin: '#8d5a3c', age: 'adult', body: 'f', hairStyle: 'long', hairColor: '#120d0b', top: 'dress', topColor: '#1f6e5a', extras: ['earrings'], seed: 142 } }] },
  { id: 'blackjack', floor: 1, place: 'Blackjack', name: 'Sam Ortega', role: 'Jugador de blackjack', spot: { x: -6.6, z: -10.6 }, npc: { x: -3.6, z: -12.7, heading: Math.PI }, pose: 'sit', look: { skin: '#d3a27c', age: 'adult', body: 'm', build: 'slim', hairStyle: 'short', hairColor: '#4a3020', top: 'jacket', topColor: '#3d3a52', bottom: 'jeans', bottomColor: '#1f2840', extras: ['glasses'], seed: 105 },
    extras: [{ x: -4, z: -15.3, heading: 0, pose: 'stand', look: { skin: '#e9c7a8', age: 'young', body: 'f', hairStyle: 'ponytail', hairColor: '#6a2a18', top: 'suit', topColor: '#1a1a1d', bottom: 'pants', bottomColor: '#141416', seed: 151 } },
      { x: 1.6, z: -9.6, heading: -2.4, pose: 'arms', look: { skin: '#6e4a34', age: 'adult', body: 'm', build: 'athletic', hairStyle: 'buzz', hairColor: '#0e0b0a', top: 'suit', topColor: '#141418', bottom: 'pants', bottomColor: '#141418', extras: ['headphones'], seed: 152 } }] },
  { id: 'dados', floor: 1, place: 'Mesa de dados', name: 'Kike', role: 'El novio', spot: { x: 11.4, z: -22.6 }, npc: { x: 8.6, z: -24.3, heading: Math.PI }, pose: 'wave', look: { skin: '#e1b48e', age: 'young', body: 'm', build: 'average', hairStyle: 'curly', hairColor: '#3a2416', top: 'shirt', topColor: '#f2f0ea', bottom: 'jeans', bottomColor: '#2a3550', extras: ['hat'], seed: 106 },
    extras: [{ x: 6.4, z: -24.4, heading: Math.PI, pose: 'dance', look: { skin: '#c99468', age: 'young', body: 'm', hairStyle: 'short', hairColor: '#20140e', top: 'tshirt', topColor: '#d43a3a', bottom: 'jeans', bottomColor: '#24304a', seed: 161 } },
      { x: 10.6, z: -25, heading: -1.6, pose: 'arms', look: { skin: '#9a6644', age: 'young', body: 'm', build: 'heavy', hairStyle: 'buzz', hairColor: '#120d0b', top: 'tshirt', topColor: '#2a7ad0', bottom: 'shorts', bottomColor: '#cbb48a', seed: 162 } },
      { x: 6, z: -27.6, heading: 0.3, pose: 'scream', look: { skin: '#e8c0a0', age: 'young', body: 'm', hairStyle: 'cap', hairColor: '#5a3a24', top: 'hoodie', topColor: '#2f2f35', bottom: 'jeans', bottomColor: '#1f2840', seed: 163 } },
      { x: 8, z: -27.7, heading: 0, pose: 'stand', look: { skin: '#c48f69', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#1a1210', top: 'suit', topColor: '#1a1a1d', bottom: 'pants', bottomColor: '#141416', seed: 164 } }] },
  { id: 'caja', floor: 1, place: 'La caja', name: 'Dolores', role: 'Cajera', spot: { x: -30.6, z: -40 }, npc: { x: -34.4, z: -40, heading: Math.PI / 2 }, pose: 'stand', look: { skin: '#e6c2a0', age: 'old', body: 'f', build: 'average', hairStyle: 'bob', hairColor: '#5a5a5a', top: 'shirt', topColor: '#e8e2d4', bottom: 'skirt', bottomColor: '#2a2a30', extras: ['glasses'], seed: 107 } },
  { id: 'bar', floor: 1, place: 'Bar central', name: 'Leo', role: 'Bartender', spot: { x: -6, z: -37.2 }, npc: { x: -6, z: -38.3, heading: 0 }, pose: 'stand', look: { skin: '#a8724e', age: 'adult', body: 'm', build: 'athletic', hairStyle: 'short', hairColor: '#0e0b0a', top: 'shirt', topColor: '#121214', bottom: 'pants', bottomColor: '#121214', extras: ['beard'], seed: 108 },
    extras: [{ x: 4, z: -44.4, heading: Math.PI, pose: 'sit', piano: true, look: { skin: '#5e3c28', age: 'old', body: 'm', hairStyle: 'short', hairColor: '#d8d8d8', top: 'suit', topColor: '#f1ede2', bottom: 'pants', bottomColor: '#121214', extras: ['glasses'], seed: 181 } },
      { x: -10.4, z: -38.4, heading: 2.6, pose: 'sit', smoke: true, look: { skin: '#f0d0b4', age: 'adult', body: 'f', hairStyle: 'bob', hairColor: '#111111', top: 'dress', topColor: '#121214', extras: ['earrings'], seed: 182 } }] },

  { id: 'apuestas', floor: 2, place: 'Apuestas deportivas', name: 'Ramiro', role: 'Apostador', spot: { x: -25.2, z: -38.6 }, npc: { x: -27.8, z: -39.6, heading: -Math.PI / 2 }, pose: 'phone', look: { skin: '#d8a57e', age: 'adult', body: 'm', build: 'heavy', hairStyle: 'short', hairColor: '#3a2a20', top: 'shirt', topColor: '#7d97b8', bottom: 'pants', bottomColor: '#3a3530', seed: 201 },
    extras: [{ x: -32, z: -35.2, heading: -Math.PI / 2, pose: 'sit', look: { skin: '#c48f69', age: 'adult', body: 'm', hairStyle: 'cap', hairColor: '#1a1210', top: 'tshirt', topColor: '#2c6e3a', bottom: 'jeans', bottomColor: '#24304a', seed: 211 } },
      { x: -34, z: -30.2, heading: -Math.PI / 2, pose: 'sit', smoke: true, look: { skin: '#e8c0a0', age: 'old', body: 'm', hairStyle: 'bald', hairColor: '#888888', top: 'jacket', topColor: '#5a4632', bottom: 'pants', bottomColor: '#2a2a2a', seed: 212 } }] },
  { id: 'poker', floor: 2, place: 'Salón Esmeralda', name: 'El Holandés', role: 'Jugador de póker', spot: { x: -22.4, z: -1.4 }, npc: { x: -25, z: -2.6, heading: Math.PI }, pose: 'sit', smoke: true, look: { skin: '#f0d6c0', age: 'old', body: 'm', build: 'slim', hairStyle: 'short', hairColor: '#e8e2d0', top: 'suit', topColor: '#2a2e2a', bottom: 'pants', bottomColor: '#1a1c1a', extras: ['glasses', 'beard'], seed: 202 },
    extras: [{ x: -25, z: -5.4, heading: 0, pose: 'stand', look: { skin: '#c48f69', age: 'young', body: 'f', hairStyle: 'ponytail', hairColor: '#1a1210', top: 'suit', topColor: '#14301e', bottom: 'pants', bottomColor: '#141416', seed: 221 } },
      { x: -27, z: -4.2, heading: Math.PI / 2, pose: 'sit', look: { skin: '#8d5a3c', age: 'adult', body: 'm', hairStyle: 'cap', hairColor: '#120d0b', top: 'hoodie', topColor: '#3a3a44', bottom: 'jeans', bottomColor: '#24304a', extras: ['headphones'], seed: 222 } },
      { x: -34, z: -10.4, heading: Math.PI, pose: 'sit', smoke: true, look: { skin: '#e2b896', age: 'adult', body: 'f', hairStyle: 'long', hairColor: '#8a2a18', top: 'dress', topColor: '#5a1030', extras: ['earrings'], seed: 223 } }] },
  { id: 'bufe', floor: 2, place: 'Bufé', name: 'Tere', role: 'Chef', spot: { x: 3.2, z: -44.4 }, npc: { x: 3.2, z: -49.2, heading: 0 }, pose: 'cook', look: { skin: '#c99468', age: 'adult', body: 'f', build: 'heavy', hairStyle: 'bun', hairColor: '#2a1a12', top: 'apron', topColor: '#f4f2ec', bottom: 'pants', bottomColor: '#232323', seed: 203 },
    extras: [{ x: -4, z: -40.6, heading: Math.PI, pose: 'carry', look: { skin: '#e8c0a0', age: 'adult', body: 'm', build: 'heavy', hairStyle: 'short', hairColor: '#6a4a2a', top: 'tshirt', topColor: '#e8c84a', bottom: 'shorts', bottomColor: '#3a5a8a', seed: 231 } }] },
  { id: 'teatro', floor: 2, place: 'Camerino del teatro', name: 'El Gran Faustino', role: 'Mago', spot: { x: 19.6, z: -24.2 }, npc: { x: 19.4, z: -26.8, heading: 0 }, pose: 'point', look: { skin: '#e2b896', age: 'adult', body: 'm', build: 'slim', hairStyle: 'short', hairColor: '#0e0b0a', top: 'suit', topColor: '#3a0e4a', bottom: 'pants', bottomColor: '#121214', extras: ['mustache'], seed: 204 },
    extras: [{ x: 22, z: -26.6, heading: -0.6, pose: 'dance', look: { skin: '#b9825c', age: 'young', body: 'f', build: 'athletic', hairStyle: 'long', hairColor: '#e0b860', top: 'dress', topColor: '#d4af37', extras: ['earrings'], seed: 241 } }] },
  { id: 'capilla', floor: 2, place: 'Capilla «Amor Exprés»', name: 'Elvis', role: 'Oficiante', spot: { x: -2.8, z: 16.2 }, npc: { x: 0, z: 19.2, heading: Math.PI }, pose: 'guitar', look: { skin: '#e8c0a0', age: 'adult', body: 'm', build: 'heavy', hairStyle: 'short', hairColor: '#0a0a0c', top: 'jacket', topColor: '#f6f2ea', bottom: 'pants', bottomColor: '#f6f2ea', extras: ['glasses'], seed: 205 },
    extras: [{ x: -0.7, z: 16.8, heading: 0, pose: 'hug', look: { skin: '#f0d0b4', age: 'young', body: 'f', hairStyle: 'long', hairColor: '#6a3a1a', top: 'dress', topColor: '#fbf7f0', seed: 251 } },
      { x: 0.7, z: 16.8, heading: 0, pose: 'hug', look: { skin: '#a8724e', age: 'young', body: 'm', hairStyle: 'short', hairColor: '#1a1210', top: 'suit', topColor: '#2a3a6a', bottom: 'pants', bottomColor: '#2a3a6a', seed: 252 } }] },
  { id: 'discoteca', floor: 2, place: 'Club nocturno', name: 'Bruno', role: 'Hombre del traje gris', spot: { x: 24.6, z: 14.6 }, npc: { x: 22.4, z: 15.4, heading: Math.PI / 2 }, pose: 'arms', look: { skin: '#c48f69', age: 'adult', body: 'm', build: 'heavy', height: 1.92, hairStyle: 'buzz', hairColor: '#1a1210', top: 'suit', topColor: '#6b6e74', bottom: 'pants', bottomColor: '#6b6e74', seed: 206 },
    extras: [{ x: 28, z: 9, heading: 0.4, pose: 'dance', look: { skin: '#8d5a3c', age: 'young', body: 'f', hairStyle: 'afro', hairColor: '#120d0b', top: 'dress', topColor: '#e8287a', seed: 261 } },
      { x: 30, z: 12, heading: 2.2, pose: 'dance', look: { skin: '#e8c0a0', age: 'young', body: 'm', hairStyle: 'short', hairColor: '#e0c070', top: 'shirt', topColor: '#20a0c0', bottom: 'jeans', bottomColor: '#1f2840', seed: 262 } },
      { x: 26.4, z: 12.6, heading: -1, pose: 'dance', look: { skin: '#f0d0b4', age: 'young', body: 'f', hairStyle: 'ponytail', hairColor: '#2a1a12', top: 'tshirt', topColor: '#9a40e0', bottom: 'skirt', bottomColor: '#121214', seed: 263 } },
      { x: 40.4, z: 11, heading: -Math.PI / 2, pose: 'dance', look: { skin: '#b9825c', age: 'young', body: 'm', hairStyle: 'cap', hairColor: '#120d0b', top: 'hoodie', topColor: '#121214', bottom: 'jeans', bottomColor: '#121214', extras: ['headphones'], seed: 264 } }] },

  { id: 'vip', floor: 3, place: 'La puerta VIP', name: 'Tano', role: 'Guardaespaldas', spot: { x: 22.6, z: -44.6 }, npc: { x: 20.2, z: -42.8, heading: Math.PI / 2 }, pose: 'arms', look: { skin: '#e2b896', age: 'adult', body: 'm', build: 'heavy', height: 1.9, hairStyle: 'short', hairColor: '#0e0b0a', top: 'suit', topColor: '#121214', bottom: 'pants', bottomColor: '#121214', extras: ['glasses'], seed: 301 },
    extras: [{ x: 20.2, z: -46.4, heading: Math.PI / 2, pose: 'arms', smoke: true, look: { skin: '#c48f69', age: 'adult', body: 'm', build: 'heavy', height: 1.94, hairStyle: 'buzz', hairColor: '#1a1210', top: 'suit', topColor: '#6b6e74', bottom: 'pants', bottomColor: '#6b6e74', seed: 206 } }] },
  { id: 'bacara', floor: 3, place: 'Salón privado de bacará', name: 'La Condesa', role: 'Gran apostadora', spot: { x: 2.8, z: -38.8 }, npc: { x: 0.6, z: -41.2, heading: Math.PI }, pose: 'sit', smoke: true, look: { skin: '#f3dcc8', age: 'adult', body: 'f', build: 'slim', height: 1.72, hairStyle: 'bob', hairColor: '#111114', top: 'dress', topColor: '#0d3b2e', extras: ['earrings'], seed: 302 },
    extras: [{ x: 0, z: -44.8, heading: 0, pose: 'stand', look: { skin: '#c48f69', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#1a1210', top: 'suit', topColor: '#121214', bottom: 'pants', bottomColor: '#121214', seed: 321 } }] },
  { id: 'puros', floor: 3, place: 'Sala de puros', name: 'Don Carmine', role: 'Jefe de la Familia', spot: { x: -26.6, z: -36.4 }, npc: { x: -29.4, z: -38.4, heading: Math.PI * 0.8 }, pose: 'sit', smoke: true, cigar: true, look: { skin: '#dcae88', age: 'old', body: 'm', build: 'heavy', hairStyle: 'short', hairColor: '#d0d0d0', top: 'suit', topColor: '#1c1c22', bottom: 'pants', bottomColor: '#1c1c22', extras: ['mustache', 'glasses'], seed: 303 },
    extras: [{ x: -31.6, z: -40, heading: Math.PI / 2, pose: 'sit', smoke: true, cigar: true, look: { skin: '#e2b896', age: 'adult', body: 'm', build: 'heavy', hairStyle: 'bald', hairColor: '#333333', top: 'suit', topColor: '#3a1418', bottom: 'pants', bottomColor: '#121214', extras: ['beard'], seed: 331 } },
      { x: -30, z: -41.8, heading: 0, pose: 'sit', smoke: true, look: { skin: '#c48f69', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#0e0b0a', top: 'suit', topColor: '#24242a', bottom: 'pants', bottomColor: '#24242a', extras: ['hat'], seed: 332 } },
      { x: -37, z: -33, heading: 0.6, pose: 'arms', look: { skin: '#e8c0a0', age: 'adult', body: 'm', build: 'athletic', hairStyle: 'buzz', hairColor: '#2a1a12', top: 'suit', topColor: '#121214', bottom: 'pants', bottomColor: '#121214', seed: 333 } }] },
  { id: 'anfitrion', floor: 3, place: 'Mesa del anfitrión', name: 'Ignacio', role: 'Anfitrión VIP', spot: { x: 0, z: -15.4 }, npc: { x: 0, z: -19, heading: 0 }, pose: 'stand', look: { skin: '#d7a982', age: 'old', body: 'm', build: 'slim', hairStyle: 'short', hairColor: '#9a9a9a', top: 'suit', topColor: '#121214', bottom: 'pants', bottomColor: '#121214', extras: ['glasses'], seed: 304 } },
  { id: 'terraza', floor: 3, place: 'Terraza sobre el Strip', name: 'Marco Montalbán', role: 'El hijo del dueño', spot: { x: 3.4, z: 20.6 }, npc: { x: 6, z: 23.6, heading: 0.2 }, pose: 'lean', smoke: true, look: { skin: '#e2b896', age: 'young', body: 'm', build: 'athletic', height: 1.84, hairStyle: 'short', hairColor: '#2a1a12', top: 'suit', topColor: '#f1ede2', bottom: 'pants', bottomColor: '#121214', seed: 305 } },
  { id: 'oficina', floor: 3, place: 'Oficina del dueño', name: 'Don Aurelio', role: 'El dueño del casino', spot: { x: -30.2, z: -12 }, npc: { x: -34.6, z: -12, heading: Math.PI / 2 }, pose: 'sit', smoke: true, cigar: true, look: { skin: '#e6c2a0', age: 'elderly', body: 'm', build: 'average', hairStyle: 'short', hairColor: '#f2f2f2', top: 'suit', topColor: '#2a0e14', bottom: 'pants', bottomColor: '#121214', extras: ['glasses'], seed: 306 } },
  // Ten wild side scenes (owner request, 2026-10-14): chaos around the games.
  { id: 'borracho', floor: 1, place: 'Junto a la mesa de dados', name: 'Billy', role: 'Turista de Texas', spot: { x: 2, z: -31.4 }, npc: { x: 3.6, z: -33.6, heading: -0.6 }, pose: 'wave', mood: 'tipsy', look: { skin: '#f0c8a8', age: 'adult', body: 'm', build: 'heavy', hairStyle: 'short', hairColor: '#c89a5a', top: 'shirt', topColor: '#d8c09a', bottom: 'jeans', bottomColor: '#2a3a5a', extras: ['hat', 'mustache'], seed: 401 },
    extras: [{ x: 2.2, z: -34.6, heading: 0.4, pose: 'arms', mood: 'angry', look: GUARD(402) }, { x: 5.2, z: -34.4, heading: -0.5, pose: 'arms', look: GUARD(403) }] },
  { id: 'jackpot', floor: 1, place: 'El gran tragamonedas', name: 'Yolanda', role: 'Ganadora del jackpot', spot: { x: 36.8, z: -3.6 }, npc: { x: 36.4, z: -0.9, heading: Math.PI }, pose: 'dance', mood: 'laugh', look: { skin: '#f0d0b4', age: 'elderly', body: 'f', build: 'heavy', hairStyle: 'curly', hairColor: '#e0d8e8', top: 'hoodie', topColor: '#d0408a', bottom: 'pants', bottomColor: '#d0408a', extras: ['glasses'], seed: 411 },
    extras: [{ x: 39, z: -6.6, heading: -0.5, pose: 'hands-up', mood: 'surprised', look: { skin: '#8d5a3c', age: 'adult', body: 'm', hairStyle: 'buzz', hairColor: '#120d0b', top: 'tshirt', topColor: '#f0c040', bottom: 'jeans', bottomColor: '#24304a', seed: 412 } },
      { x: 35.6, z: 1.8, heading: 2.4, pose: 'wave', mood: 'smile', look: { skin: '#e8c0a0', age: 'young', body: 'f', hairStyle: 'ponytail', hairColor: '#2a1a12', top: 'uniform', topColor: '#8a0a1e', bottom: 'skirt', bottomColor: '#121214', seed: 413 } }] },
  { id: 'tramposo', floor: 1, place: 'Detrás del blackjack', name: 'Gus', role: 'Contador de cartas', spot: { x: -21.8, z: -16.4 }, npc: { x: -23.6, z: -17.8, heading: 0.9 }, pose: 'cuffed', mood: 'worried', look: { skin: '#e2b896', age: 'adult', body: 'm', build: 'slim', hairStyle: 'afro', hairColor: '#b04a1a', top: 'jacket', topColor: '#6a5a8a', bottom: 'pants', bottomColor: '#2a2a2a', extras: ['glasses', 'mustache'], seed: 421 },
    extras: [{ x: -24.8, z: -16.4, heading: 1.2, pose: 'arms', look: GUARD(422) }, { x: -22.4, z: -19.4, heading: 0.2, pose: 'point', mood: 'angry', look: { skin: '#c48f69', age: 'adult', body: 'f', hairStyle: 'bun', hairColor: '#1a1210', top: 'suit', topColor: '#141418', bottom: 'pants', bottomColor: '#141418', seed: 423 } }] },
  { id: 'perdedor', floor: 1, place: 'Al lado de la ruleta', name: 'Andrés', role: 'El que lo perdió todo', spot: { x: -36.2, z: -1.6 }, npc: { x: -36.4, z: -4.2, heading: 0.1 }, pose: 'ground', mood: 'sad', look: { skin: '#d7a982', age: 'adult', body: 'm', build: 'average', hairStyle: 'short', hairColor: '#3a2a20', top: 'suit', topColor: '#2a2a3a', bottom: 'pants', bottomColor: '#2a2a3a', seed: 431 } },

  { id: 'despedida', floor: 2, place: 'Entrada del club', name: 'Cinthia', role: 'La novia de la despedida', spot: { x: 19.4, z: 6.2 }, npc: { x: 21.4, z: 7.8, heading: -2.2 }, pose: 'dance', mood: 'tipsy', look: { skin: '#e9c7a8', age: 'young', body: 'f', build: 'average', hairStyle: 'long', hairColor: '#7a3a1a', top: 'dress', topColor: '#ff7ab8', extras: ['earrings'], seed: 441 },
    extras: [{ x: 23.6, z: 7.4, heading: -1.6, pose: 'dance', mood: 'laugh', look: { skin: '#b9825c', age: 'young', body: 'f', hairStyle: 'bob', hairColor: '#120d0b', top: 'dress', topColor: '#121214', seed: 442 } },
      { x: 22.6, z: 9.6, heading: 3, pose: 'hands-up', mood: 'laugh', look: { skin: '#f0d0b4', age: 'young', body: 'f', hairStyle: 'long', hairColor: '#e0b860', top: 'dress', topColor: '#ff7ab8', seed: 443 } }] },
  { id: 'pelea', floor: 2, place: 'Pasillo de las apuestas', name: 'Toño', role: 'Aficionado furioso', spot: { x: -21.6, z: -31.6 }, npc: { x: -22.2, z: -28.8, heading: Math.PI }, pose: 'fight', mood: 'furious', look: { skin: '#c99468', age: 'adult', body: 'm', build: 'heavy', hairStyle: 'buzz', hairColor: '#1a1210', top: 'tshirt', topColor: '#d43a3a', bottom: 'jeans', bottomColor: '#24304a', seed: 451 },
    extras: [{ x: -20, z: -28.4, heading: -1.9, pose: 'fight', mood: 'furious', look: { skin: '#e8c0a0', age: 'adult', body: 'm', build: 'athletic', hairStyle: 'cap', hairColor: '#3a2a20', top: 'tshirt', topColor: '#2a7ad0', bottom: 'shorts', bottomColor: '#cbb48a', seed: 452 } }] },
  { id: 'gritona', floor: 2, place: 'Puerta de la capilla', name: 'Marta', role: 'Recién casada', spot: { x: -4.6, z: 1.4 }, npc: { x: -2.6, z: 3, heading: -2.3 }, pose: 'scream', mood: 'furious', look: { skin: '#f0d0b4', age: 'young', body: 'f', hairStyle: 'bun', hairColor: '#2a1a12', top: 'dress', topColor: '#fbf7f0', extras: ['earrings'], seed: 461 },
    extras: [{ x: -7.4, z: 3.4, heading: Math.PI / 2, pose: 'sleep', mood: 'sleepy', look: { skin: '#a8724e', age: 'young', body: 'm', hairStyle: 'short', hairColor: '#1a1210', top: 'suit', topColor: '#121214', bottom: 'pants', bottomColor: '#121214', seed: 462 } }] },

  { id: 'habano', floor: 3, place: 'El salón de los sofás', name: 'Sergio Valdés', role: 'Multimillonario', spot: { x: 22.4, z: -21.6 }, npc: { x: 25.6, z: -22.6, heading: -1.3 }, pose: 'sit', smoke: true, cigar: true, mood: 'smile', look: { skin: '#e2b896', age: 'old', body: 'm', build: 'heavy', hairStyle: 'bald', hairColor: '#cccccc', top: 'suit', topColor: '#f1ede2', bottom: 'pants', bottomColor: '#f1ede2', extras: ['glasses'], seed: 471 },
    extras: [{ x: 27, z: -24.2, heading: -2.4, pose: 'stand', mood: 'smile', look: { skin: '#8d5a3c', age: 'young', body: 'f', build: 'slim', height: 1.8, hairStyle: 'long', hairColor: '#120d0b', top: 'dress', topColor: '#d4af37', extras: ['earrings'], seed: 472 } },
      { x: 27.2, z: -21, heading: -1.2, pose: 'stand', look: { skin: '#f0d0b4', age: 'young', body: 'f', build: 'slim', height: 1.78, hairStyle: 'long', hairColor: '#f0e0b0', top: 'dress', topColor: '#121214', extras: ['earrings'], seed: 473 } },
      { x: 28.6, z: -25.6, heading: -2.6, pose: 'arms', look: GUARD(474) }] },
  { id: 'yate', floor: 3, place: 'La mesa del heredero', name: 'Julián', role: 'Heredero de un yate', spot: { x: 6.8, z: -20 }, npc: { x: 10, z: -21.8, heading: 0 }, pose: 'sit', mood: 'worried', look: { skin: '#f0d6c0', age: 'young', body: 'm', build: 'slim', hairStyle: 'short', hairColor: '#e0c070', top: 'jacket', topColor: '#2a4a8a', bottom: 'pants', bottomColor: '#e9e4d6', seed: 481 },
    extras: [{ x: 10, z: -18.2, heading: Math.PI, pose: 'sit', smoke: true, mood: 'smile', look: { skin: '#c48f69', age: 'old', body: 'm', build: 'heavy', hairStyle: 'short', hairColor: '#888888', top: 'suit', topColor: '#121214', bottom: 'pants', bottomColor: '#121214', extras: ['mustache'], seed: 482 } },
      { x: 12.8, z: -20, heading: -1.6, pose: 'stand', look: { skin: '#e8c0a0', age: 'young', body: 'f', hairStyle: 'ponytail', hairColor: '#2a1a12', top: 'suit', topColor: '#14301e', bottom: 'pants', bottomColor: '#141416', seed: 483 } }] },
  { id: 'senador', floor: 3, place: 'Rincón de la terraza', name: 'El senador Robles', role: 'Político pillado', spot: { x: -11.6, z: 9.4 }, npc: { x: -13.8, z: 11, heading: 2.2 }, pose: 'hands-up', mood: 'scared', look: { skin: '#e6c2a0', age: 'old', body: 'm', build: 'average', hairStyle: 'short', hairColor: '#d8d8d8', top: 'suit', topColor: '#1a2238', bottom: 'pants', bottomColor: '#1a2238', seed: 491 },
    extras: [{ x: -15.2, z: 9.8, heading: 2.4, pose: 'stand', mood: 'smile', look: { skin: '#b9825c', age: 'young', body: 'f', hairStyle: 'long', hairColor: '#120d0b', top: 'dress', topColor: '#b3081f', extras: ['earrings'], seed: 492 } },
      { x: -9.2, z: 13.4, heading: -2.6, pose: 'hands-up', mood: 'scared', look: { skin: '#e8c0a0', age: 'adult', body: 'm', hairStyle: 'cap', hairColor: '#3a2a20', top: 'jacket', topColor: '#5a5a5a', bottom: 'jeans', bottomColor: '#24304a', seed: 493 } },
      { x: -8.4, z: 11.8, heading: -2, pose: 'arms', mood: 'angry', look: GUARD(494) }] },
];// Life at the tables around the original scenes: people win, lose, shout.
const WILD = (skin, body, hairStyle, hairColor, top, topColor, seed, extra = {}) => ({ skin, age: 'adult', body, hairStyle, hairColor, top, topColor, bottom: body === 'f' ? 'skirt' : 'pants', bottomColor: '#1a1a20', seed, ...extra });
const AROUND = {
  tragamonedas: [{ x: 22.2, z: 9.6, heading: Math.PI / 2, pose: 'scream', mood: 'furious', look: WILD('#e8c0a0', 'm', 'cap', '#3a2a20', 'hoodie', '#3a6a3a', 501) }],
  ruleta: [{ x: -15, z: -8.2, heading: -Math.PI / 2, pose: 'hands-up', mood: 'laugh', look: WILD('#8d5a3c', 'f', 'afro', '#120d0b', 'dress', '#e8287a', 502) },
    { x: -21.6, z: -9.4, heading: Math.PI / 2, pose: 'cry', mood: 'sad', look: WILD('#dcae88', 'm', 'short', '#6a4a2a', 'shirt', '#9ab0d0', 503) }],
  blackjack: [{ x: -5.2, z: -12.7, heading: Math.PI, pose: 'sit', mood: 'laugh', look: WILD('#f0d0b4', 'f', 'long', '#e0b860', 'dress', '#1f6e5a', 504) },
    { x: -1.2, z: -12.2, heading: -2.4, pose: 'hands-up', mood: 'surprised', look: WILD('#c48f69', 'm', 'buzz', '#1a1210', 'shirt', '#f0f0f0', 505) }],
  dados: [{ x: 11, z: -28.2, heading: -0.6, pose: 'hands-up', mood: 'laugh', look: WILD('#f0c8a8', 'm', 'short', '#c89a5a', 'tshirt', '#d43a3a', 506, { bottom: 'shorts', bottomColor: '#cbb48a' }) }],
  bar: [{ x: -1.2, z: -38.4, heading: -Math.PI / 2, pose: 'lean', mood: 'tipsy', look: WILD('#e2b896', 'm', 'bald', '#888888', 'suit', '#5a1830', 507) }],
  apuestas: [{ x: -28, z: -33.4, heading: -Math.PI / 2, pose: 'hands-up', mood: 'laugh', look: WILD('#a8724e', 'm', 'cap', '#120d0b', 'tshirt', '#f0c040', 508) },
    { x: -36.4, z: -33.6, heading: -Math.PI / 2, pose: 'cry', mood: 'sad', look: WILD('#f0d6c0', 'm', 'short', '#2a1a12', 'jacket', '#4a4a50', 509) }],
  poker: [{ x: -22.6, z: -6.8, heading: -0.8, pose: 'arms', look: WILD('#e6c2a0', 'f', 'bob', '#111111', 'dress', '#121214', 510) }],
  discoteca: [{ x: 32.4, z: 14.6, heading: -2.4, pose: 'dance', mood: 'laugh', look: WILD('#c99468', 'f', 'long', '#2a1a12', 'dress', '#20c0a0', 511) }],
  bacara: [{ x: -2.6, z: -41, heading: 2, pose: 'hands-up', mood: 'surprised', look: WILD('#f3dcc8', 'f', 'bun', '#e0c070', 'dress', '#d4af37', 512) }],
};
for (const scene of SCENES) if (AROUND[scene.id]) scene.extras = [...(scene.extras ?? []), ...AROUND[scene.id]];
export const SCENE_IDS = SCENES.map((s) => s.id);
export const sceneById = (id) => SCENES.find((s) => s.id === id);
export const SPOT_RADIUS = 1.25;

// The heroine: long blonde hair, a red dress, gold earrings, heels.
export const HEROINE = { name: 'Valentina', look: { skin: '#f1d4bc', age: 'young', body: 'f', build: 'slim', height: 1.74, hairStyle: 'long', hairColor: blonde, top: 'dress', topColor: '#b3081f', shoes: '#5a0410', extras: ['earrings'], seed: 7 } };

// Background life that is not part of a scene: gamblers at the slots,
// waiters and smokers. Kept small: every person is about thirty meshes.
export const CROWD = {
  1: [
    { x: 19.3, z: -20, heading: -Math.PI / 2, pose: 'sit', smoke: true },
    { x: 24.7, z: -12, heading: Math.PI / 2, pose: 'sit' },
    { x: 32.7, z: 6, heading: -Math.PI / 2, pose: 'sit', smoke: true },
    { x: 35.3, z: -18, heading: Math.PI / 2, pose: 'sit' },
    { x: 19.3, z: 8, heading: -Math.PI / 2, pose: 'sit' },
    { x: -30, z: -6.5, heading: Math.PI, pose: 'sit', smoke: true },
    { x: -4, z: -20.4, heading: Math.PI, pose: 'sit' },
    { x: 12, z: 14, heading: 2.6, pose: 'walk', walk: { axis: 'z', from: -20, to: 14, speed: 1.1 } },
    { x: -12, z: -28.9, heading: 0, pose: 'walk', walk: { axis: 'x', from: -28, to: 14, speed: 1.2 } },
    { x: -26, z: 14, heading: 0, pose: 'phone' },
  ],
  2: [
    { x: -36, z: -12, heading: Math.PI / 2, pose: 'sit', smoke: true },
    { x: -32, z: 2, heading: -Math.PI / 2, pose: 'sit' },
    { x: 33, z: -15, y: 1.1, heading: -Math.PI / 2, pose: 'dance' },
    { x: 2, z: -30, heading: Math.PI, pose: 'walk', walk: { axis: 'x', from: -12, to: 12, speed: 1 } },
    { x: 4, z: 13.3, heading: 0, pose: 'sit' },
  ],
  3: [
    { x: -8, z: -34, heading: 0, pose: 'sit', smoke: true },
    { x: 9, z: -34, heading: 0, pose: 'sit' },
    { x: -20, z: 14.8, heading: Math.PI, pose: 'lie' },
    { x: 26, z: -14, heading: Math.PI, pose: 'sit', smoke: true },
  ],
};

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

// Outside the ground floor: the fountain pools and the road edge.
const PLAZA_SOLIDS = [box(-42, 27, -9, 38.6), box(9, 27, 42, 38.6), box(-42, 48, 42, 50)];

// The stage's curtains stand on it: walls once you are up there.
const curtains = (floor) => (FURNITURE[floor] ?? []).filter((f) => f.type === 'stage').flatMap(({ x, z, w, d }) => [
  box(x + w / 2 - 0.55, z - d / 2, x + w / 2 - 0.25, z + d / 2),
  ...[-1, 1].map((s) => box(x + w / 2 - w * 0.6, z + s * (d / 2 - 0.2) - 0.15, x + w / 2, z + s * (d / 2 - 0.2) + 0.15)),
]);

// Tall things the camera should not pass through.
const TALL = new Set(['slots', 'bigslot', 'backwall', 'cage', 'screens', 'bookcase', 'humidor', 'djbooth', 'column', 'vanity']);
export function cameraBlockers(floor) {
  return [...(WALLS[floor] ?? []).map(wallBox), ...(FURNITURE[floor] ?? []).filter((f) => TALL.has(f.type)).map(footprint), ...curtains(floor)];
}

// Low furniture Valentina can jump onto (Space) and walk on: the height of
// its top in metres, as built in casino3d.ts. Anything with screens, glass,
// bottles, a palm, flames or a spinning die on top stays a plain obstacle.
export const TOPS = {
  desk: 1.21, hostdesk: 1.15, betdesk: 1.1, stage: 1.1, craps: 1.03, altar: 1,
  roulette: 0.92, blackjack: 0.92, poker: 0.92, baccarat: 0.92, cardtable: 0.84, officedesk: 0.84, betseats: 0.75,
  sofa: 0.45, vipbooth: 0.45, lounge: 0.45, armchair: 0.45, pew: 0.45, deckchair: 0.45,
};

// Walls and furniture. People are not boxes: they are round and solid
// (pushOut in escucha-3d/bump.mjs), see peopleAt.
export function solidsFor(floor) {
  const walls = (WALLS[floor] ?? []).map(wallBox);
  const things = (FURNITURE[floor] ?? []).filter((f) => f.solid !== false && f.type !== 'chandelier')
    .map((f) => TOPS[f.type] != null ? { ...footprint(f), top: TOPS[f.type] } : footprint(f));
  const elevatorWall = [box(24, -52, 42, -51.4)];
  return [...walls, ...things, ...curtains(floor), ...elevatorWall, ...(floor === 1 ? PLAZA_SOLIDS : [])];
}

// Everyone who stays put on a floor (scene people and the crowd that does
// not walk), with how high they stand (the dancer is on the stage).
export function peopleAt(floor) {
  return [
    ...SCENES.filter((s) => s.floor === floor).flatMap((s) => [s.npc, ...(s.extras ?? [])]),
    ...(CROWD[floor] ?? []).filter((c) => !c.walk),
  ].map((p) => ({ x: p.x, z: p.z, y: p.y ?? 0 }));
}

// The white circle the heroine is standing in, if any.
export function spotAt(floor, x, z, radius = SPOT_RADIUS) {
  let best = null, distance = radius;
  for (const scene of SCENES) {
    if (scene.floor !== floor) continue;
    const d = Math.hypot(scene.spot.x - x, scene.spot.z - z);
    if (d < distance) { distance = d; best = scene.id; }
  }
  return best;
}

export function atElevator(x, z) {
  return Math.hypot(ELEVATOR.x - x, ELEVATOR.z - z) < ELEVATOR.radius;
}

// The closest circle on this floor that has not been played yet: the guide
// arrow on the map points there.
export function nextSpot(floor, x, z, done = []) {
  let best = null, distance = Infinity;
  for (const scene of SCENES) {
    if (scene.floor !== floor || done.includes(scene.id)) continue;
    const d = Math.hypot(scene.spot.x - x, scene.spot.z - z);
    if (d < distance) { distance = d; best = scene; }
  }
  return best;
}

// Where the heroine stands when a scene opens: in the circle, facing the NPC.
export function sceneFraming(scene) {
  const dx = scene.npc.x - scene.spot.x, dz = scene.npc.z - scene.spot.z;
  const heading = Math.atan2(dx, dz);
  return { x: scene.spot.x, z: scene.spot.z, heading };
}

// One frame of the white circles. A circle opens its scene once Valentina has
// stood still in it for a moment; after that it stays spent until she walks
// out, so closing a conversation never reopens it under her feet.
export function circleStep(circle, here, opened, speed, dt) {
  let { inside, still, spent } = circle;
  if (opened) return { inside: null, still: 0, spent: opened, open: null };
  if (here !== inside) { inside = here; still = 0; if (!here) spent = null; }
  still = inside && speed < 0.3 ? still + dt : 0;
  const open = inside && spent !== inside && still > 0.45 ? inside : null;
  if (open) spent = open;
  return { inside, still, spent, open };
}
