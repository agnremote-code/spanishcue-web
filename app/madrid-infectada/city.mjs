// Madrid infectada · the city as one continuous map. The ten places of the
// story (layout.mjs) are set into a Madrid you can walk from end to end: each
// zone keeps its own square, props and people, turned and moved to where it
// is in the real city, and the streets between them (Montera, Mayor, Arenal,
// Bailén, Fuencarral, Alcalá, San Jerónimo, the Paseo del Prado, Toledo, the
// Rondas) join them. Every block that is not street, square or park is built
// up with the city's buildings; the Retiro and the Templo de Debod are green.
// The Metro is the only place below: its entrances in the city lead to the
// ghost station, and the station comes out at the Retiro or back at Sol.
//
// World axes: +x east, +z north, one unit a metre. Plain data and pure
// functions, so the tests can prove nobody stands inside anything.
import { SPOTS } from './story.mjs';
import { layoutOf, npcOf, propBox, solidsFor } from './layout.mjs';

const rect = (x0, z0, x1, z1, extra = {}) => ({ x0: Math.min(x0, x1), x1: Math.max(x0, x1), z0: Math.min(z0, z1), z1: Math.max(z0, z1), ...extra });
const hits = (a, b, m = 0) => a.x0 < b.x1 + m && a.x1 > b.x0 - m && a.z0 < b.z1 + m && a.z1 > b.z0 - m;
const inRect = (r, x, z, m = 0) => x > r.x0 - m && x < r.x1 + m && z > r.z0 - m && z < r.z1 + m;

export const CITY_BOUNDS = { minX: -176, maxX: 200, minZ: -162, maxZ: 162 };

// ------------------------------------------------------------------ where each zone sits
// c: the centre of the zone in the city; k: quarter turns (k = 1 puts the
// zone's north to the east). Gran Vía runs east-west, as it does.
export const PLACEMENT = {
  sol: { c: [0, 0], k: 2 },
  granvia: { c: [10, 75], k: 1 },
  plaza: { c: [-55, -45], k: 0 },
  retiro: { c: [165, 20], k: 0 },
  malasana: { c: [-15, 128], k: 0 },
  atocha: { c: [100, -90], k: 0 },
  palacio: { c: [-140, -10], k: 0 },
  hospital: { c: [100, -20], k: 0 },
  rio: { c: [-60, -125], k: 2 },
};
export const CITY_ZONES = Object.keys(PLACEMENT);

/** A point of a zone (its own coordinates) in the city. */
export function toWorld(zone, x, z) {
  const p = PLACEMENT[zone];
  if (!p) return { x, z };
  const [cx, cz] = p.c;
  switch (((p.k % 4) + 4) % 4) {
    case 1: return { x: cx + z, z: cz - x };
    case 2: return { x: cx - x, z: cz - z };
    case 3: return { x: cx - z, z: cz + x };
    default: return { x: cx + x, z: cz + z };
  }
}
/** A heading (or a prop's turn) of a zone in the city. */
export const turnOf = (zone) => ((PLACEMENT[zone]?.k ?? 0) * Math.PI) / 2;
export function boxToWorld(zone, b) {
  const a = toWorld(zone, b.x0, b.z0), c = toWorld(zone, b.x1, b.z1);
  return { ...b, x0: Math.min(a.x, c.x), x1: Math.max(a.x, c.x), z0: Math.min(a.z, c.z), z1: Math.max(a.z, c.z) };
}
export function zoneRect(zone) {
  const b = layoutOf(zone).bounds;
  return boxToWorld(zone, { x0: b.minX, x1: b.maxX, z0: b.minZ, z1: b.maxZ });
}

// ------------------------------------------------------------------ the rest of Madrid
// Squares and parks that are not a zone of the story.
export const PLACES = [
  { id: 'cibeles', name: 'Plaza de Cibeles', area: rect(82, 56, 118, 96), ground: 'stone' },
  { id: 'alcala', name: 'Puerta de Alcalá', area: rect(136, 64, 166, 88), ground: 'stone' },
  { id: 'espana', name: 'Plaza de España', area: rect(-124, 60, -80, 98), ground: 'stone' },
  { id: 'debod', name: 'Templo de Debod', area: rect(-170, 64, -124, 102), ground: 'park' },
  { id: 'oriente', name: 'Plaza de Oriente', area: rect(-106, 6, -68, 34), ground: 'gravel' },
  { id: 'almudena', name: 'Plaza de la Armería', area: rect(-168, -52, -112, -34), ground: 'gravel' },
];

// The streets, with the name on their blue plaques.
export const STREETS = [
  { name: 'Calle de la Montera', area: rect(-6, 24, 6, 66) },
  { name: 'Calle Mayor', area: rect(-38, -34, -24, -20) },
  { name: 'Calle Mayor', area: rect(-114, -46, -73, -36) },
  { name: 'Calle del Arenal', area: rect(-72, -2, -24, 8) },
  { name: 'Calle de Bailén', area: rect(-114, -52, -100, 64) },
  { name: 'Gran Vía', area: rect(-82, 66, -28, 84) },
  { name: 'Calle de Alcalá', area: rect(48, 66, 84, 84) },
  { name: 'Calle de Alcalá', area: rect(116, 70, 138, 82) },
  { name: 'Calle de Fuencarral', area: rect(-16, 84, -6, 102) },
  { name: 'Paseo del Prado', area: rect(92, 2, 108, 58) },
  { name: 'Paseo del Prado', area: rect(94, -64, 106, -42) },
  { name: 'Calle de Alfonso XII', area: rect(156, 46, 168, 66) },
  { name: 'Calle de Felipe IV', area: rect(122, -22, 139, -12) },
  { name: 'Carrera de San Jerónimo', area: rect(24, 4, 94, 14) },
  { name: 'Ronda de Atocha', area: rect(-32, -112, 80, -102) },
  { name: 'Calle de Toledo', area: rect(-62, -105, -50, -61) },
];

/** Every patch of open ground: the zones, the squares and the streets. */
export function openAreas() {
  return [...CITY_ZONES.map(zoneRect), ...PLACES.map((p) => p.area), ...STREETS.map((s) => s.area)];
}

// ------------------------------------------------------------------ landmarks of the city
// Drawn by madrid3d.ts; their footprints block the way.
export const MONUMENTS = [
  { kind: 'cibeles', x: 100, z: 76, r: 4.2 },
  { kind: 'alcala', x: 151, z: 76, w: 15, d: 3.2 },
  { kind: 'cervantes', x: -102, z: 82, w: 6, d: 4 },
  { kind: 'debod', x: -150, z: 86, w: 9, d: 6 },
  // The two stone gates in front of the temple: you walk through them.
  { kind: 'pylon', x: -152.5, z: 74, w: 1.2, d: 1.2 }, { kind: 'pylon', x: -147.5, z: 74, w: 1.2, d: 1.2 },
  { kind: 'pylon', x: -152.5, z: 69, w: 1.2, d: 1.2 }, { kind: 'pylon', x: -147.5, z: 69, w: 1.2, d: 1.2 },
  { kind: 'oriente', x: -87, z: 22, w: 3.4, d: 3.4 },
  { kind: 'almudena', x0: -158, x1: -122, z0: -72, z1: -52 },
  { kind: 'teatro', x0: -68, x1: -48, z0: 12, z1: 32 },
  { kind: 'comunicaciones', x0: 118, x1: 140, z0: 52, z1: 64 },
  { kind: 'prado', x0: 110, x1: 122, z0: -4, z1: 50 },
  { kind: 'edificio-espana', x0: -128, x1: -104, z0: 98, z1: 112 },
];
export function monumentSolids() {
  const out = [];
  for (const m of MONUMENTS) {
    if (m.x0 != null) { out.push(rect(m.x0, m.z0, m.x1, m.z1, { building: m.kind })); continue; }
    if (m.r) { out.push(rect(m.x - m.r, m.z - m.r, m.x + m.r, m.z + m.r, { prop: m.kind })); continue; }
    if (m.kind === 'alcala') {
      // Five arches: the three middle ones are open, the piers block.
      for (const px of [-7.5, -4.5, -1.5, 1.5, 4.5, 7.5]) out.push(rect(m.x + px - 0.6, m.z - m.d / 2, m.x + px + 0.6, m.z + m.d / 2, { prop: 'puerta-de-alcala' }));
      continue;
    }
    out.push(rect(m.x - m.w / 2, m.z - m.d / 2, m.x + m.w / 2, m.z + m.d / 2, { prop: m.kind }));
  }
  return out;
}

// Props of the city's own squares and streets (same kinds as the zones).
export const CITY_PROPS = [
  // Cibeles: the crossing, cars left where they stopped.
  { kind: 'burnt', x: 88, z: 62, r: 0.6 }, { kind: 'car', x: 112, z: 90, r: 2.2 }, { kind: 'police', x: 86, z: 92, r: -0.4 },
  { kind: 'bus', x: 108, z: 63, r: 0.3 }, { kind: 'lamp', x: 84, z: 74 }, { kind: 'lamp', x: 116, z: 78 }, { kind: 'semaforo', x: 90, z: 82 },
  { kind: 'debris', x: 96, z: 90 }, { kind: 'barricade', x: 116.5, z: 64, w: 6, r: Math.PI / 2 },
  // Calle de Alcalá up to the Puerta.
  { kind: 'car', x: 66, z: 70, r: 1.5 }, { kind: 'burnt', x: 74, z: 79, r: 1.8 }, { kind: 'van', x: 56, z: 78, r: -1.6 }, { kind: 'lamp', x: 60, z: 82.5 },
  { kind: 'car', x: 126, z: 74, r: 1.4 }, { kind: 'lamp', x: 140, z: 86 }, { kind: 'lamp', x: 162, z: 66 }, { kind: 'debris', x: 145, z: 68 },
  // Plaza de España and the temple.
  { kind: 'tree', x: -118, z: 66 }, { kind: 'tree', x: -86, z: 66 }, { kind: 'tree', x: -118, z: 94 }, { kind: 'tree', x: -86, z: 94 },
  { kind: 'fountain', x: -100, z: 70 }, { kind: 'burnt', x: -90, z: 88, r: 0.4 }, { kind: 'bench', x: -110, z: 72 }, { kind: 'lamp', x: -94, z: 92 },
  { kind: 'tree', x: -166, z: 70 }, { kind: 'tree', x: -132, z: 70 }, { kind: 'tree', x: -166, z: 98 }, { kind: 'tree', x: -140, z: 98 }, { kind: 'tree', x: -130, z: 92 },
  // Plaza de Oriente: statues, hedges, the theatre behind.
  { kind: 'tree', x: -100, z: 10 }, { kind: 'tree', x: -76, z: 10 }, { kind: 'tree', x: -100, z: 30 }, { kind: 'tree', x: -76, z: 30 },
  { kind: 'statue', x: -96, z: 20 }, { kind: 'statue', x: -78, z: 20 }, { kind: 'jeep', x: -92, z: 8.5, r: 0.1 }, { kind: 'lamp', x: -70.5, z: 24 },
  // Plaza de la Armería, between the palace and the cathedral.
  { kind: 'sandbags', x: -140, z: -38, w: 10 }, { kind: 'jeep', x: -126, z: -44, r: 1.4 }, { kind: 'tent', x: -158, z: -44, w: 6, d: 5, look: 'militar' },
  { kind: 'crates', x: -146, z: -48 }, { kind: 'lamp', x: -116, z: -38 }, { kind: 'container', x: -126, z: -36, r: 0 },
  // The streets.
  { kind: 'burnt', x: 2, z: 44, r: 0.2 }, { kind: 'debris', x: -3, z: 56 }, { kind: 'lamp', x: 5.5, z: 34 },
  { kind: 'car', x: -48, z: 3, r: 1.6 }, { kind: 'debris', x: -60, z: 5 }, { kind: 'lamp', x: -40, z: 7.5 },
  { kind: 'car', x: -106, z: 46, r: 0.1 }, { kind: 'burnt', x: -103, z: 0, r: -0.2 }, { kind: 'lamp', x: -100.5, z: -20 }, { kind: 'police', x: -109, z: -26, r: 3.0 },
  { kind: 'car', x: -88, z: -40, r: 1.6 }, { kind: 'debris', x: -60, z: 76 }, { kind: 'burnt', x: -44, z: 70, r: 1.4 }, { kind: 'lamp', x: -70, z: 83.5 },
  { kind: 'car', x: -9, z: 92, r: 0.1 },
  { kind: 'van', x: 98, z: 30, r: 0.05, look: 'ambulancia' }, { kind: 'burnt', x: 104, z: 46, r: 0.3 }, { kind: 'lamp', x: 92.5, z: 20 }, { kind: 'lamp', x: 107.5, z: 40 },
  { kind: 'car', x: 100, z: -52, r: 0.1 }, { kind: 'tree', x: 95, z: 10 }, { kind: 'tree', x: 105, z: 52 }, { kind: 'tree', x: 95, z: 52 },
  { kind: 'car', x: 128, z: -18, r: 1.4 }, { kind: 'car', x: 40, z: 8, r: 1.7 }, { kind: 'burnt', x: 70, z: 10, r: 1.5 }, { kind: 'lamp', x: 55, z: 13.5 },
  { kind: 'bus', x: 20, z: -107, r: 0.1 }, { kind: 'car', x: -10, z: -104, r: 1.5 }, { kind: 'burnt', x: 52, z: -109, r: 1.6 }, { kind: 'lamp', x: 0, z: -102.5 }, { kind: 'lamp', x: 60, z: -111.5 },
  { kind: 'car', x: -56, z: -80, r: 0.1 }, { kind: 'debris', x: -55, z: -92 }, { kind: 'lamp', x: -50.5, z: -70 },
  { kind: 'car', x: 159, z: 50, r: 0.1 },
  // More ways down to the Metro.
  { kind: 'metro', x: 105, z: 91, r: 0, name: 'BANCO DE ESPAÑA' }, { kind: 'metro', x: -72, z: 18, r: Math.PI, name: 'ÓPERA' },
  { kind: 'metro', x: -120, z: 84, r: Math.PI / 2, name: 'PLAZA DE ESPAÑA' },
];

// ------------------------------------------------------------------ the buildings
// Old zone buildings (the porticoes of the Plaza Mayor, the brick of Atocha,
// the tall facades of Gran Vía) stay where they do not cover a street; every
// other built block is filled in on a 4 m grid.
const CELL = 4;
const STYLE_AT = [
  { at: [10, 75], style: 'classic', colors: ['#d8c3a0', '#e3d6bd', '#c9b8a0', '#bfa98a'], h: [24, 36] },
  { at: [-15, 128], style: 'barrio', colors: ['#d9a46a', '#c97b5a', '#e2c79a', '#8fa6a0', '#d88a7a'], h: [10, 16] },
  { at: [100, -20], style: 'modern', colors: ['#b8bcc0', '#cfd2d4', '#9aa2a8'], h: [16, 28] },
  { at: [100, -90], style: 'brick', colors: ['#a45a3e', '#9a4a36', '#b2563c'], h: [12, 18] },
  { at: [-55, -45], style: 'mayor', colors: ['#9a4a36', '#a24f3a'], h: [15, 18] },
  { at: [-140, -10], style: 'palace', colors: ['#e6e1d4', '#ece6d6'], h: [9, 14] },
  { at: [-60, -125], style: 'modern', colors: ['#d8c3a0', '#c9b8a0', '#e3d6bd'], h: [16, 24] },
  { at: [0, 0], style: 'classic', colors: ['#c9b8a0', '#d8c3a0', '#b98a6a', '#e3d6bd', '#a87a5a'], h: [16, 24] },
];
// Green: the Retiro and its surroundings, the slopes of the temple and the river.
export const GREEN = [rect(126, -40, 200, 46), rect(168, 46, 200, 100), rect(-176, 62, -124, 120), rect(-176, -162, 200, -157)];
// The Manzanares runs the whole south edge (the zone of Madrid Río is one stretch of it).
export const RIVER = rect(-176, -157, 200, -145, { water: true });

const step = (seed) => { const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };

let cache = null;
/** Buildings of the whole city (zone ones kept + the filled blocks), and the green blocks. */
export function cityBlocks() {
  if (cache) return cache;
  const open = openAreas();
  const water = [...solidsFor('rio').filter((b) => b.water).map((b) => boxToWorld('rio', b)), RIVER];
  const monuments = monumentSolids();
  const kept = [];
  for (const zone of CITY_ZONES) {
    layoutOf(zone).buildings.forEach((b, index) => {
      const w = boxToWorld(zone, b);
      if (open.some((a) => hits(a, w)) || monuments.some((m) => hits(m, w))) return;
      kept.push({ ...w, zone, index });
    });
  }
  const nx = Math.ceil((CITY_BOUNDS.maxX - CITY_BOUNDS.minX) / CELL), nz = Math.ceil((CITY_BOUNDS.maxZ - CITY_BOUNDS.minZ) / CELL);
  const state = new Uint8Array(nx * nz); // 0 free, 1 to build, 2 green, 3 taken
  const cellRect = (i, j) => rect(CITY_BOUNDS.minX + i * CELL, CITY_BOUNDS.minZ + j * CELL, CITY_BOUNDS.minX + (i + 1) * CELL, CITY_BOUNDS.minZ + (j + 1) * CELL);
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    const c = cellRect(i, j);
    if (open.some((a) => hits(a, c, 0.01))) continue;
    if (water.some((a) => hits(a, c, -0.5)) || kept.some((a) => hits(a, c, -0.5)) || monuments.some((a) => hits(a, c, -0.5))) { state[j * nx + i] = 3; continue; }
    state[j * nx + i] = GREEN.some((g) => hits(g, c, -0.5)) ? 2 : 1;
  }
  const blocks = [], green = [];
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    const kind = state[j * nx + i];
    if (kind !== 1 && kind !== 2) continue;
    const seed = i * 131 + j * 17;
    const maxW = kind === 2 ? 8 : 3 + Math.floor(step(seed) * 4), maxD = kind === 2 ? 8 : 3 + Math.floor(step(seed + 5) * 3);
    let w = 1;
    while (w < maxW && i + w < nx && state[j * nx + i + w] === kind) w++;
    let d = 1;
    grow: while (d < maxD && j + d < nz) { for (let k = 0; k < w; k++) if (state[(j + d) * nx + i + k] !== kind) break grow; d++; }
    for (let jj = 0; jj < d; jj++) for (let ii = 0; ii < w; ii++) state[(j + jj) * nx + i + ii] = 4;
    const r = rect(CITY_BOUNDS.minX + i * CELL, CITY_BOUNDS.minZ + j * CELL, CITY_BOUNDS.minX + (i + w) * CELL, CITY_BOUNDS.minZ + (j + d) * CELL);
    if (kind === 2) { green.push({ ...r, green: true }); continue; }
    const cx = (r.x0 + r.x1) / 2, cz = (r.z0 + r.z1) / 2;
    const near = STYLE_AT.reduce((best, s) => (Math.hypot(s.at[0] - cx, s.at[1] - cz) < Math.hypot(best.at[0] - cx, best.at[1] - cz) ? s : best));
    const h = near.h[0] + step(seed + 9) * (near.h[1] - near.h[0]);
    blocks.push({ ...r, h: Math.round(h), color: near.colors[Math.floor(step(seed + 3) * near.colors.length)], style: near.style, ruin: step(seed + 11), seed });
  }
  cache = { kept, blocks, green };
  return cache;
}

// ------------------------------------------------------------------ what blocks the way
/** Props of a zone in the city, without those that would close a street. */
export function zoneProps(zone) {
  const streets = [...STREETS.map((s) => s.area), ...PLACES.map((p) => p.area)];
  return layoutOf(zone).props.filter((p) => {
    const b = propBox(p);
    if (!b) return true;
    const w = boxToWorld(zone, b);
    return !streets.some((s) => hits(s, w));
  });
}

let solidCache = null;
export function citySolids() {
  if (solidCache) return solidCache;
  const out = [];
  const { kept, blocks, green } = cityBlocks();
  kept.forEach((b, i) => out.push({ x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1, building: `${b.zone}-${i}` }));
  blocks.forEach((b, i) => out.push({ x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1, building: `bloque-${i}` }));
  green.forEach((b, i) => out.push({ x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1, building: `jardin-${i}` }));
  for (const zone of CITY_ZONES) {
    const keep = new Set(zoneProps(zone).map((p) => `${p.kind}@${p.x},${p.z}`));
    for (const b of solidsFor(zone)) {
      if (b.building && !b.building.startsWith(zone)) { out.push(boxToWorld(zone, b)); continue; } // landmarks
      if (b.water) { out.push(boxToWorld(zone, b)); continue; }
      if (b.prop && (keep.has(b.prop) || !b.prop.includes('@') || b.prop.startsWith('poste@') || b.prop.startsWith('tent@'))) out.push(boxToWorld(zone, b));
    }
  }
  out.push({ ...RIVER }, ...monumentSolids());
  for (const p of CITY_PROPS) { const b = propBox(p); if (b) out.push(b); }
  solidCache = out;
  return out;
}

// ------------------------------------------------------------------ people and places
/** The twenty circles that are in the city (the metro has its own two). */
export function citySpots() {
  return CITY_ZONES.flatMap((zone) => layoutOf(zone).spots.map((s) => {
    const p = toWorld(zone, s.x, s.z);
    return { id: s.id, zone, x: p.x, z: p.z, angle: s.angle + turnOf(zone) };
  }));
}

/** Survivors you can stop and talk to in the street (their words: calle/*.mjs). */
export const ENCOUNTERS = [
  { id: 'farmaceutica', x: 4, z: 40, heading: -1.6, pose: 'stand', seed: 501, look: { body: 'f', age: 'adult', top: 'coat', topColor: '#e8ecee' } },
  { id: 'repartidor', x: -45, z: 6, heading: 3.0, pose: 'stand', seed: 502, look: { body: 'm', age: 'young', top: 'jacket', topColor: '#d8a020', extras: ['backpack'] } },
  { id: 'abuelo', x: -104, z: 42, heading: 1.6, pose: 'stand', seed: 503, look: { body: 'm', age: 'elderly', top: 'coat', topColor: '#4a4038' } },
  { id: 'turista', x: -95, z: 76, heading: 0.8, pose: 'stand', seed: 504, look: { body: 'f', age: 'young', top: 'tshirt', topColor: '#e86a5a', extras: ['backpack'] } },
  { id: 'monja', x: -146, z: 74, heading: -0.4, pose: 'stand', seed: 505, look: { body: 'f', age: 'old', top: 'coat', topColor: '#1e1e22' } },
  { id: 'soldado', x: -110, z: -30, heading: 1.2, pose: 'stand', seed: 506, look: { body: 'm', age: 'young', top: 'uniform', topColor: '#4a5236', extras: ['helmet'] } },
  { id: 'cura', x: -140, z: -48, heading: 0.2, pose: 'stand', seed: 507, look: { body: 'm', age: 'old', top: 'suit', topColor: '#141416' } },
  { id: 'musico', x: -84, z: 14, heading: 1.0, pose: 'guitar', seed: 508, look: { body: 'm', age: 'adult', top: 'jacket', topColor: '#2a2a3a' } },
  { id: 'taxista', x: -50, z: 74, heading: -2.4, pose: 'stand', seed: 509, look: { body: 'm', age: 'adult', build: 'heavy', top: 'shirt', topColor: '#e8e4d8' } },
  { id: 'estudiante', x: -11, z: 96, heading: 3.0, pose: 'stand', seed: 510, look: { body: 'f', age: 'young', top: 'hoodie', topColor: '#3a5a8a', extras: ['backpack'] } },
  { id: 'tatuador', x: -26, z: 150, heading: 2.4, pose: 'lean', seed: 511, look: { body: 'm', age: 'adult', top: 'tshirt', topColor: '#1a1a1a', extras: ['beard', 'earrings'] } },
  { id: 'vecino', x: 61, z: 80, heading: -1.6, pose: 'stand', seed: 512, look: { body: 'm', age: 'old', top: 'sweater', topColor: '#5a6a4a' } },
  { id: 'bombera', x: 112, z: 72, heading: -1.8, pose: 'stand', seed: 513, look: { body: 'f', age: 'adult', top: 'jacket', topColor: '#2a2a2a', extras: ['helmet'] } },
  { id: 'jubilada', x: 143, z: 82, heading: 2.6, pose: 'stand', seed: 514, look: { body: 'f', age: 'elderly', top: 'coat', topColor: '#6a3a4a', extras: ['scarf'] } },
  { id: 'corredor', x: 164, z: 58, heading: 3.0, pose: 'stand', seed: 515, look: { body: 'm', age: 'young', build: 'athletic', top: 'tshirt', topColor: '#2a8a6a' } },
  { id: 'jardinero', x: 140, z: 40, heading: 0.9, pose: 'stand', seed: 516, look: { body: 'm', age: 'adult', top: 'uniform', topColor: '#3a5a2a' } },
  { id: 'guia', x: 102, z: 26, heading: 1.6, pose: 'stand', seed: 517, look: { body: 'f', age: 'adult', top: 'jacket', topColor: '#7a2a3a', extras: ['glasses'] } },
  { id: 'pintor', x: 107, z: 12, heading: -1.4, pose: 'stand', seed: 518, look: { body: 'm', age: 'old', top: 'shirt', topColor: '#c8b898', extras: ['beard'] } },
  { id: 'camionero', x: 132, z: -14, heading: 3.0, pose: 'stand', seed: 519, look: { body: 'm', age: 'adult', build: 'heavy', top: 'tshirt', topColor: '#6a6a6a' } },
  { id: 'madre', x: 100, z: -58, heading: 0.2, pose: 'carry', seed: 520, look: { body: 'f', age: 'adult', top: 'coat', topColor: '#5a4a6a' } },
  { id: 'revisor', x: 70, z: -105, heading: 1.6, pose: 'stand', seed: 521, look: { body: 'm', age: 'adult', top: 'uniform', topColor: '#5a2a5a', extras: ['hat'] } },
  { id: 'patinadora', x: 26, z: -110, heading: -1.6, pose: 'stand', seed: 522, look: { body: 'f', age: 'teen', top: 'hoodie', topColor: '#e8a0c0' } },
  { id: 'carnicero', x: -20, z: -106, heading: 0.2, pose: 'stand', seed: 523, look: { body: 'm', age: 'adult', build: 'heavy', top: 'apron', topColor: '#f4efe4' } },
  { id: 'gemelos', x: -51.5, z: -96, heading: 1.6, pose: 'stand', seed: 524, look: { body: 'm', age: 'teen', top: 'hoodie', topColor: '#3a3a5a' } },
  { id: 'pescador', x: -82, z: -136, heading: 0.0, pose: 'fish', seed: 525, look: { body: 'm', age: 'old', top: 'jacket', topColor: '#4a5a6a', extras: ['hat'] } },
  { id: 'cantante', x: -58, z: 6.8, heading: Math.PI, pose: 'stand', seed: 526, look: { body: 'f', age: 'adult', top: 'dress', topColor: '#7a1a2a', extras: ['earrings'] } },
  { id: 'informatico', x: 36, z: 12, heading: -2.4, pose: 'stand', seed: 527, look: { body: 'm', age: 'young', top: 'hoodie', topColor: '#2a2a2a', extras: ['glasses', 'backpack'] } },
  { id: 'peluquera', x: 14, z: 16, heading: 2.0, pose: 'stand', seed: 528, look: { body: 'f', age: 'adult', top: 'shirt', topColor: '#d8a8c8' } },
  { id: 'mendigo', x: -14, z: -14, heading: 0.4, pose: 'ground', seed: 529, look: { body: 'm', age: 'old', top: 'coat', topColor: '#3a3428', extras: ['beard'] } },
  { id: 'deportista', x: 30, z: 79, heading: -3.0, pose: 'stand', seed: 530, look: { body: 'f', age: 'young', build: 'athletic', top: 'tshirt', topColor: '#2a6ab8' } },
];
export const ENCOUNTER_IDS = ENCOUNTERS.map((e) => e.id);
/** Who each survivor is: name, what they did before, and the voice (f/m) the browser reads them with. */
export const SURVIVORS = {
  farmaceutica: { name: 'Marta', role: 'farmacéutica', gender: 'f' },
  repartidor: { name: 'Iván', role: 'repartidor', gender: 'm' },
  abuelo: { name: 'Don Eusebio', role: 'jubilado', gender: 'm' },
  turista: { name: 'Hanna', role: 'turista', gender: 'f' },
  monja: { name: 'Sor Inés', role: 'monja', gender: 'f' },
  soldado: { name: 'Rubén', role: 'cabo del ejército', gender: 'm' },
  cura: { name: 'Padre Anselmo', role: 'cura de la Almudena', gender: 'm' },
  musico: { name: 'Nacho', role: 'músico de la calle', gender: 'm' },
  taxista: { name: 'Fermín', role: 'taxista', gender: 'm' },
  estudiante: { name: 'Lucía', role: 'estudiante de Medicina', gender: 'f' },
  tatuador: { name: 'Dani', role: 'tatuador', gender: 'm' },
  vecino: { name: 'Don Ramón', role: 'portero de un edificio', gender: 'm' },
  bombera: { name: 'Carmen', role: 'bombera', gender: 'f' },
  jubilada: { name: 'Doña Amparo', role: 'jubilada', gender: 'f' },
  corredor: { name: 'Álex', role: 'corredor', gender: 'm' },
  jardinero: { name: 'Julián', role: 'jardinero del Retiro', gender: 'm' },
  guia: { name: 'Elena', role: 'guía del Museo del Prado', gender: 'f' },
  pintor: { name: 'Ernesto', role: 'pintor', gender: 'm' },
  camionero: { name: 'Manolo', role: 'camionero', gender: 'm' },
  madre: { name: 'Rocío', role: 'madre de un recién nacido', gender: 'f' },
  revisor: { name: 'Sergio', role: 'revisor de tren', gender: 'm' },
  patinadora: { name: 'Vega', role: 'patinadora', gender: 'f' },
  carnicero: { name: 'Andrés', role: 'carnicero', gender: 'm' },
  gemelos: { name: 'Hugo', role: 'busca a su hermano gemelo', gender: 'm' },
  pescador: { name: 'Benito', role: 'pescador del Manzanares', gender: 'm' },
  cantante: { name: 'Sofía', role: 'cantante de ópera', gender: 'f' },
  informatico: { name: 'Pablo', role: 'informático', gender: 'm' },
  peluquera: { name: 'Yolanda', role: 'peluquera', gender: 'f' },
  mendigo: { name: 'Ginés', role: 'vive en la calle', gender: 'm' },
  deportista: { name: 'Irene', role: 'atleta', gender: 'f' },
};

/** Where you stand to talk to a survivor: 1.6 m in front of them. */
export const encounterSpot = (e) => ({ x: e.x + Math.sin(e.heading) * 1.6, z: e.z + Math.cos(e.heading) * 1.6, heading: e.heading + Math.PI });

/** Everyone standing or sitting in the city (circles, pairs, survivors, encounters). */
export function cityPeople() {
  const out = [];
  for (const zone of CITY_ZONES) {
    const z = layoutOf(zone), turn = turnOf(zone);
    for (const s of z.spots) {
      const spot = SPOTS.find((x) => x.id === s.id);
      const n = npcOf(s), p = toWorld(zone, n.x, n.z);
      out.push({ id: s.id, zone, cast: spot.cast[0], x: p.x, z: p.z, heading: n.heading + turn, seated: false });
      const pair = z.pairs?.[s.id];
      if (pair && spot.cast[1]) { const q = toWorld(zone, pair.x, pair.z); out.push({ id: `${s.id}-2`, zone, cast: spot.cast[1], x: q.x, z: q.z, heading: pair.heading + turn, seated: false }); }
    }
    z.extras.forEach((e, i) => {
      const p = toWorld(zone, e.x, e.z);
      out.push({ ...e, id: `${zone}-extra-${i}`, zone, x: p.x, z: p.z, heading: e.heading + turn, seated: /sit|ground|sleep|guitar|lie/.test(e.pose), lying: Boolean(e.lying) });
    });
  }
  for (const e of ENCOUNTERS) out.push({ ...e, id: `calle-${e.id}`, encounter: e.id, seated: /sit|ground|sleep|guitar|lie|fish/.test(e.pose) });
  return out;
}

// ------------------------------------------------------------------ the Metro
// Every Metro entrance of the city goes down to the station; its two ends come
// out at Sol (west) and at the Retiro (east).
export function metroEntrances() {
  const out = [];
  const all = [...CITY_ZONES.flatMap((zone) => zoneProps(zone).map((p) => ({ zone, p }))), ...CITY_PROPS.map((p) => ({ zone: null, p }))];
  for (const { zone, p } of all) {
    if (p.kind !== 'metro') continue;
    const at = zone ? toWorld(zone, p.x, p.z) : p, r = (p.r ?? 0) + (zone ? turnOf(zone) : 0);
    // The railing closes the +z end; you come in from -z and face the stairs.
    out.push({ zone: zone ?? whereIs(at.x, at.z).zone, name: p.name, at: { x: at.x, z: at.z }, x: at.x - Math.sin(r) * 3.4, z: at.z - Math.cos(r) * 3.4, heading: r });
  }
  return out;
}
export const METRO_EXITS = {
  // Where the station's west end and east end come out.
  west: { zone: 'sol', x: 0, z: 18, heading: Math.PI },
  east: { zone: 'retiro', x: 140.5, z: -6, heading: 0.6 },
};

// ------------------------------------------------------------------ where am I
const DISTRICT_OF_PLACE = { cibeles: 'hospital', alcala: 'retiro', espana: 'granvia', debod: 'granvia', oriente: 'palacio', almudena: 'palacio' };
const NAMES = { cibeles: 'Plaza de Cibeles', alcala: 'Puerta de Alcalá', espana: 'Plaza de España', debod: 'Templo de Debod', oriente: 'Plaza de Oriente', almudena: 'Plaza de la Armería' };
/** The zone of the story a point belongs to (the nearest one when in a street), and the name of the square or street. */
export function whereIs(x, z) {
  for (const zone of CITY_ZONES) if (inRect(zoneRect(zone), x, z)) return { zone, place: null };
  for (const p of PLACES) if (inRect(p.area, x, z)) return { zone: DISTRICT_OF_PLACE[p.id], place: NAMES[p.id] };
  const street = STREETS.find((s) => inRect(s.area, x, z));
  let best = 'sol', d = Infinity;
  for (const zone of CITY_ZONES) {
    const r = zoneRect(zone), dx = Math.max(r.x0 - x, 0, x - r.x1), dz = Math.max(r.z0 - z, 0, z - r.z1), dd = Math.hypot(dx, dz);
    if (dd < d) { d = dd; best = zone; }
  }
  return { zone: best, place: street?.name ?? null };
}

/** The point where "Ir" in the route puts you in a zone: the spawn of the zone. */
export function arrivalOf(zone) {
  const z = layoutOf(zone);
  const s = z.spawn, p = toWorld(zone, s.x, s.z);
  return { x: p.x, z: p.z, heading: s.heading + turnOf(zone) };
}

/** Points along the streets and squares where zombies can appear. */
export function zombieGround() {
  const out = [];
  for (const a of [...STREETS.map((s) => s.area), ...PLACES.map((p) => p.area), ...CITY_ZONES.map(zoneRect)]) {
    for (let x = a.x0 + 2; x < a.x1 - 1; x += 6) for (let z = a.z0 + 2; z < a.z1 - 1; z += 6) out.push({ x, z });
  }
  return out;
}

// ------------------------------------------------------------------ the creepy things
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
let creepyCache = null;
/**
 * Bodies under white sheets in the squares (some with a zombie crouched over
 * them) and a few dropped things: a child's doll, a pram, a shoe. All of them
 * low solids, far from every circle, survivor and way through.
 */
export function creepyProps() {
  if (creepyCache) return creepyCache;
  const solids = citySolids();
  const people = [...cityPeople(), ...citySpots(), ...ENCOUNTERS.map(encounterSpot), ...metroEntrances(), ...Object.values(METRO_EXITS), ...CITY_ZONES.map(arrivalOf)];
  const wide = [...PLACES.map((p) => p.area), ...CITY_ZONES.filter((z) => z !== 'hospital').map(zoneRect)];
  const out = [];
  const kinds = ['sheet', 'sheet', 'doll', 'sheet', 'pram', 'sheet', 'suitcase'];
  let n = 0;
  for (const a of wide) {
    for (let x = a.x0 + 4; x < a.x1 - 3; x += 7) for (let z = a.z0 + 4; z < a.z1 - 3; z += 9) {
      if (step(x * 3.1 + z * 1.7) > 0.3) continue;
      const kind = kinds[n % kinds.length];
      const r = step(x + z) * Math.PI;
      const p = { kind, x, z, r };
      const b = propBox(p);
      if (solids.some((s) => hits(s, b, 1.6))) continue;
      if (people.some((q) => dist(q, p) < 5)) continue;
      if (out.some((q) => dist(q, p) < 6)) continue;
      out.push({ ...p, feeder: kind === 'sheet' && n % 3 === 0 });
      n++;
    }
  }
  creepyCache = out;
  return out;
}

/** Where the zombies crouched over a body kneel: beside the sheet, facing it, clear of it. */
export function feederSpots() {
  const solids = allSolids();
  return creepyProps().filter((p) => p.feeder).map((p) => {
    for (const side of [1, -1]) for (let d = 1.0; d <= 2.2; d += 0.2) {
      const x = p.x + Math.sin(p.r) * d * side, z = p.z + Math.cos(p.r) * d * side;
      if (!solids.some((b) => x > b.x0 - 0.4 && x < b.x1 + 0.4 && z > b.z0 - 0.4 && z < b.z1 + 0.4)) return { x, z, heading: Math.atan2(p.x - x, p.z - z) };
    }
    return null;
  }).filter(Boolean);
}

let allCache = null;
/** Every solid of the open city: buildings, props, monuments, the river and the creepy things. */
export function allSolids() {
  if (!allCache) allCache = [...citySolids(), ...creepyProps().map(propBox)];
  return allCache;
}

export { npcOf };
