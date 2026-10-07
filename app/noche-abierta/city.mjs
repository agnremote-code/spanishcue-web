// Noche Abierta · the city beyond the centre, as data.
//
// The original neighbourhood (world3d.mjs) sits in the middle. Around it, eight
// districts with their own look and their own people: the Barrio Viejo
// (north-west), the Barrio Alto (north), the clinic and the police station
// (north-east), the night market (west), the riverside (east), the station
// (south-west), the Barrio Sur (south) and the old warehouses (south-east).
// Four new streets frame the centre; the avenue and the cross street run to
// the edges of the city, where walls, the river and the railway close it.
//
// Same units as world3d.mjs: metres, x east, z south, y up. Everything is an
// axis-aligned box so the collision code stays the same. The renderer
// (district3d.ts) only draws what this file describes; the tests walk it.

import { PLACEMENTS as CAOS_NORTE_PLACES } from "./street/caos-norte.mjs";
import { PLACEMENTS as CAOS_CENTRO_PLACES } from "./street/caos-centro.mjs";
import { PLACEMENTS as CAOS_SUR_PLACES } from "./street/caos-sur.mjs";

export const CITY_BOUNDS = { minX: -126, maxX: 126, minZ: -122, maxZ: 116 };

// Roads. The two original ones now cross the whole city.
export const ROADS = [
  { id: "avenida", x0: -126, x1: 126, z0: -4, z1: 4, axis: "x" },
  { id: "transversal", x0: -4, x1: 4, z0: -122, z1: 116, axis: "z" },
  { id: "calle-alta", x0: -126, x1: 126, z0: -52, z1: -45, axis: "x" },
  { id: "calle-estacion", x0: -126, x1: 126, z0: 46, z1: 53, axis: "x" },
  { id: "calle-oeste", x0: -60, x1: -53, z0: -122, z1: 116, axis: "z" },
  { id: "calle-este", x0: 53, x1: 60, z0: -122, z1: 116, axis: "z" },
];

// Paved areas with their own floor: the cobbled passage of the Barrio Viejo,
// the station square, the market lane, the riverside walk and the parks.
export const GROUNDS = [
  { id: "pasaje", kind: "cobbles", x0: -126, x1: -60, z0: -91, z1: -85 },
  { id: "patio-conventillo", kind: "cobbles", x0: -84, x1: -70, z0: -79, z1: -68 },
  { id: "plazoleta-tilos", kind: "park", x0: -42, x1: -8, z0: -112, z1: -86 },
  { id: "paseo-alto", kind: "stone", x0: 4, x1: 37, z0: -80, z1: -66 },
  { id: "pasillo-mercado", kind: "market", x0: -122, x1: -62, z0: -20, z1: -8 },
  { id: "patio-comidas", kind: "market", x0: -94, x1: -64, z0: 8, z1: 42 },
  { id: "costanera", kind: "stone", x0: 86, x1: 96, z0: -45, z1: 46 },
  { id: "parque-rio", kind: "park", x0: 108, x1: 126, z0: -45, z1: 46 },
  { id: "plaza-estacion", kind: "stone", x0: -122, x1: -62, z0: 56, z1: 80 },
  { id: "anden", kind: "stone", x0: -122, x1: -62, z0: 100, z1: 103.4 },
  { id: "parque-sur", kind: "park", x0: -50, x1: -8, z0: 84, z1: 112 },
  { id: "playon", kind: "gravel", x0: 100, x1: 126, z0: 88, z1: 116 },
  { id: "estacionamiento-policia", kind: "asphalt", x0: 66, x1: 98, z0: -96, z1: -86 },
];

// The canal at the riverside: water you cannot walk on, crossed by the
// avenue and two footbridges.
export const CANAL = { x0: 96, x1: 108, z0: -42, z1: 43, bridges: [{ z0: -31, z1: -27 }, { z0: -7, z1: 7 }, { z0: 26, z1: 30 }] };

// Districts: where they are and how they feel at night. `lamp` is the colour
// of the street light, `glow` the colour that dominates the windows.
export const DISTRICT_ZONES = [
  { id: "centro", name: "El centro", x0: -53, x1: 53, z0: -45, z1: 46, lamp: "#ffcf8a", glow: "#ffd08a" },
  { id: "viejo", name: "Barrio Viejo", x0: -126, x1: -53, z0: -122, z1: -45, lamp: "#e8b46a", glow: "#f2b866" },
  { id: "alto", name: "Barrio Alto", x0: -53, x1: 53, z0: -122, z1: -45, lamp: "#fff1d6", glow: "#ffe9c4" },
  { id: "clinica", name: "Hospital y comisaría", x0: 53, x1: 126, z0: -122, z1: -45, lamp: "#e4f0ff", glow: "#dfeaff" },
  { id: "mercado", name: "Mercado nocturno", x0: -126, x1: -53, z0: -45, z1: 46, lamp: "#ffbf73", glow: "#ffb35c" },
  { id: "costa", name: "La Costanera", x0: 53, x1: 126, z0: -45, z1: 46, lamp: "#d6e4ff", glow: "#ffd9a0" },
  { id: "estacion", name: "La Estación", x0: -126, x1: -53, z0: 46, z1: 116, lamp: "#f6e6c4", glow: "#f8e2b0" },
  { id: "sur", name: "Barrio Sur", x0: -53, x1: 53, z0: 46, z1: 116, lamp: "#ffd9a0", glow: "#ffcf86" },
  { id: "galpones", name: "Los Galpones", x0: 53, x1: 126, z0: 46, z1: 116, lamp: "#c9b4ff", glow: "#ff6fae" },
];
export function districtAt(x, z) {
  return DISTRICT_ZONES.find((d) => x >= d.x0 && x < d.x1 && z >= d.z0 && z < d.z1)?.id
    ?? (x < 0 ? (z < 0 ? "viejo" : "estacion") : (z < 0 ? "clinica" : "galpones"));
}

// Buildings. Same shape as world3d.mjs BUILDINGS plus the district, and
// optional balconies (`balconies`: facades that get them), a canopy over the
// door, a shutter for closed shops. Doors face the street they are on.
export const CITY_BUILDINGS = [
  // Centre: fills the gaps between the original blocks and the new streets.
  { id: "c-norte-1", district: "centro", x0: -42, x1: -26, z0: -43, z1: -33, h: 9, style: "brick", balconies: ["north"] },
  { id: "c-norte-2", district: "centro", x0: -22, x1: -8, z0: -43, z1: -34, h: 7, style: "cream", shutter: "south" },
  { id: "c-cine", district: "centro", x0: 8, x1: 21, z0: -42.5, z1: -34, h: 10, style: "cinema", sign: "CINE RIVOLI", door: { side: "south", at: 15 } },
  { id: "c-norte-4", district: "centro", x0: 26, x1: 44, z0: -43, z1: -33, h: 14, style: "slate", balconies: ["north", "south"] },
  { id: "c-sur-1", district: "centro", x0: -42, x1: -20, z0: 38, z1: 44, h: 8, style: "plaster", balconies: ["south"] },
  { id: "c-sur-2", district: "centro", x0: 22, x1: 44, z0: 37, z1: 44, h: 7, style: "brick", shutter: "south" },

  // Barrio Viejo.
  { id: "v-hotel", district: "viejo", x0: -122, x1: -100, z0: -72, z1: -56, h: 14, style: "oldhotel", sign: "HOTEL SOL", door: { side: "south", at: -111 }, balconies: ["south"] },
  { id: "v-kiosco", district: "viejo", x0: -98, x1: -94.5, z0: -61, z1: -56, h: 3.2, style: "kiosk", sign: "KIOSCO 24 H", door: { side: "south", at: -96.25 } },
  { id: "v-lavanderia", district: "viejo", x0: -90, x1: -76, z0: -64, z1: -56, h: 6, style: "laundry", sign: "LAVADERO 24 H", door: { side: "south", at: -83 } },
  { id: "v-ferreteria", district: "viejo", x0: -74, x1: -63, z0: -64, z1: -56, h: 8, style: "old", shutter: "south" },
  { id: "v-conventillo-o", district: "viejo", x0: -90, x1: -84, z0: -84, z1: -68, h: 10, style: "old" },
  { id: "v-conventillo-n", district: "viejo", x0: -84, x1: -70, z0: -84, z1: -79, h: 10, style: "old", door: { side: "south", at: -77 } },
  { id: "v-conventillo-e", district: "viejo", x0: -70, x1: -64, z0: -84, z1: -68, h: 10, style: "old", fireEscape: "east" },
  { id: "v-esquina", district: "viejo", x0: -122, x1: -100, z0: -84, z1: -76, h: 9, style: "brick", balconies: ["north"] },
  { id: "v-alto", district: "viejo", x0: -97, x1: -95, z0: -122, z1: -93, h: 12, style: "old" },
  { id: "v-edificio", district: "viejo", x0: -91, x1: -72, z0: -114, z1: -95, h: 18, style: "brick", balconies: ["south", "east"] },
  { id: "v-fondo", district: "viejo", x0: -72, x1: -63, z0: -122, z1: -116, h: 8, style: "old" },

  // Barrio Alto.
  { id: "a-hotel", district: "alto", x0: -42, x1: -12, z0: -80, z1: -57, h: 26, style: "grand", sign: "HOTEL IMPERIAL", door: { side: "south", at: -27 }, canopy: true, balconies: ["south"] },
  { id: "a-boutique", district: "alto", x0: -50, x1: -45, z0: -66, z1: -57, h: 8, style: "boutique", sign: "BOUTIQUE", door: { side: "south", at: -48.5 } },
  { id: "a-fila", district: "alto", x0: -50, x1: -45, z0: -112, z1: -72, h: 16, style: "elegant", balconies: ["east"] },
  { id: "a-norte", district: "alto", x0: -42, x1: -8, z0: -122, z1: -116, h: 14, style: "elegant" },
  { id: "a-galeria", district: "alto", x0: 8, x1: 22, z0: -66, z1: -57, h: 9, style: "gallery", sign: "GALERÍA NOCTURNA", door: { side: "south", at: 15 } },
  { id: "a-vinoteca", district: "alto", x0: 25, x1: 34, z0: -64, z1: -57, h: 6, style: "wine", sign: "VINOTECA LUNA", door: { side: "south", at: 29.5 } },
  { id: "a-torre", district: "alto", x0: 37, x1: 50, z0: -78, z1: -57, h: 22, style: "elegant", balconies: ["south", "west"] },
  { id: "a-embajada", district: "alto", x0: 8, x1: 30, z0: -112, z1: -84, h: 16, style: "stone", flags: true },
  { id: "a-noreste", district: "alto", x0: 34, x1: 50, z0: -112, z1: -86, h: 12, style: "elegant", balconies: ["south"] },

  // Hospital and police station.
  { id: "k-clinica", district: "clinica", x0: 68, x1: 98, z0: -86, z1: -58, h: 16, style: "clinic", sign: "CLÍNICA 24 H", door: { side: "south", at: 83 }, canopy: true },
  { id: "k-farmacia", district: "clinica", x0: 112, x1: 124, z0: -66, z1: -57, h: 5, style: "pharmacy", sign: "FARMACIA", door: { side: "south", at: 118 } },
  { id: "k-comisaria", district: "clinica", x0: 66, x1: 88, z0: -116, z1: -96, h: 10, style: "police", sign: "COMISARÍA", door: { side: "south", at: 77 } },
  { id: "k-cochera", district: "clinica", x0: 94, x1: 124, z0: -118, z1: -100, h: 11, style: "garage", sign: "COCHERA" },
  { id: "k-anexo", district: "clinica", x0: 112, x1: 124, z0: -88, z1: -74, h: 8, style: "slate" },

  // Night market.
  { id: "m-mercado", district: "mercado", x0: -112, x1: -82, z0: -40, z1: -20, h: 9, style: "market", sign: "MERCADO NOCTURNO", door: { side: "south", at: -97 } },
  { id: "m-este", district: "mercado", x0: -76, x1: -62, z0: -40, z1: -22, h: 10, style: "brick", balconies: ["south"] },
  { id: "m-oeste", district: "mercado", x0: -124, x1: -116, z0: -40, z1: -20, h: 12, style: "old" },
  { id: "m-sur", district: "mercado", x0: -122, x1: -98, z0: 12, z1: 40, h: 14, style: "plaster", sign: "BAR LOS TILOS", door: { side: "north", at: -110 }, balconies: ["east"] },

  // Riverside.
  { id: "r-viviendas", district: "costa", x0: 62, x1: 86, z0: -42, z1: -14, h: 12, style: "cream", balconies: ["east"] },
  { id: "r-viviendas-2", district: "costa", x0: 62, x1: 84, z0: 10, z1: 42, h: 8, style: "teal", balconies: ["east"] },
  { id: "r-cafe", district: "costa", x0: 88, x1: 92, z0: -12, z1: -8, h: 3, style: "kiosk", sign: "CAFÉ DEL RÍO", door: { side: "south", at: 90 } },

  // Station.
  { id: "e-estacion", district: "estacion", x0: -117.5, x1: -74, z0: 82, z1: 100, h: 13, style: "station", sign: "ESTACIÓN CENTRAL", door: { side: "north", at: -105 } },
  { id: "e-torre", district: "estacion", x0: -97, x1: -89, z0: 80, z1: 82, h: 22, style: "station", clock: true },
  { id: "e-hostal", district: "estacion", x0: -72, x1: -62.4, z0: 84, z1: 100, h: 10, style: "oldhotel", sign: "HOSTAL ANDÉN", door: { side: "north", at: -67 } },
  { id: "e-kiosco", district: "estacion", x0: -72, x1: -68, z0: 56, z1: 60, h: 3, style: "kiosk", sign: "24 H", door: { side: "south", at: -70 } },

  // Barrio Sur.
  { id: "s-balcones", district: "sur", x0: -50, x1: -30, z0: 57, z1: 76, h: 15, style: "plaster", balconies: ["north"] },
  { id: "s-fiesta", district: "sur", x0: -26, x1: -8, z0: 57, z1: 78, h: 12, style: "teal", door: { side: "north", at: -17 }, party: true },
  { id: "s-cochera", district: "sur", x0: 8, x1: 30, z0: 58, z1: 90, h: 9, style: "garage", sign: "ESTACIONAMIENTO", door: { side: "north", at: 19 } },
  { id: "s-torre", district: "sur", x0: 34, x1: 50, z0: 58, z1: 82, h: 18, style: "cream", balconies: ["north", "west"] },
  { id: "s-escuela", district: "sur", x0: 34, x1: 50, z0: 88, z1: 112, h: 8, style: "school", sign: "ESCUELA N.º 9" },
  { id: "s-casas", district: "sur", x0: 8, x1: 30, z0: 96, z1: 112, h: 7, style: "brick", balconies: ["north"] },

  // Warehouses.
  { id: "g-fabrica", district: "galpones", x0: 66, x1: 100, z0: 60, z1: 88, h: 10, style: "warehouse", sign: "LA FÁBRICA", door: { side: "north", at: 83 }, party: true },
  { id: "g-galpon", district: "galpones", x0: 106, x1: 124, z0: 60, z1: 84, h: 9, style: "warehouse", shutter: "north" },
];

// Things that block walking: fences, walls, stalls, benches with people,
// containers, the tunnel walls, the station fence. `kind` tells the renderer
// what to draw; `h` is how tall it is.
const stallRow = (z0, z1, xs, prefix, colors) => xs.map((x, i) => ({ id: `${prefix}-${i}`, kind: "stall", x0: x - 1.3, x1: x + 1.3, z0, z1, h: 2.5, color: colors[i % colors.length] }));
export const CITY_PROPS = [
  // Barrio Viejo: construction site fence, the low wall where the cat sleeps, the alley's end.
  { id: "obra-n", kind: "fence", x0: -124, x1: -102, z0: -118.4, z1: -118, h: 2.4 },
  { id: "obra-s", kind: "fence", x0: -124, x1: -102, z0: -95.4, z1: -95, h: 2.4 },
  { id: "obra-o", kind: "fence", x0: -124.4, x1: -124, z0: -118.4, z1: -95, h: 2.4 },
  { id: "obra-e1", kind: "fence", x0: -102.4, x1: -102, z0: -118.4, z1: -108, h: 2.4 },
  { id: "obra-e2", kind: "fence", x0: -102.4, x1: -102, z0: -104, z1: -95, h: 2.4 },
  { id: "obra-porton", kind: "gate", x0: -102.4, x1: -102, z0: -108, z1: -104, h: 2.4 },
  { id: "obra-andamio", kind: "scaffold", x0: -120, x1: -108, z0: -116, z1: -110, h: 14 },
  { id: "obra-casilla", kind: "booth", x0: -107, x1: -104.5, z0: -103, z1: -100.5, h: 2.6 },
  { id: "muro-gato", kind: "wall", x0: -88, x1: -78, z0: -93, z1: -92.4, h: 1.6 },
  { id: "callejon-fin", kind: "wall", x0: -95, x1: -91, z0: -122, z1: -121.4, h: 4 },
  { id: "telefono-publico", kind: "phone", x0: -64.6, x1: -63.8, z0: -103.4, z1: -102.6, h: 2.2 },
  { id: "banco-placita", kind: "bench", x0: -68.2, x1: -66.4, z0: -110.6, z1: -109.9, h: 0.9 },
  { id: "contenedor-viejo", kind: "dumpster", x0: -94.6, x1: -92.4, z0: -112, z1: -110.6, h: 1.4 },

  // Barrio Alto: the fountain and statue in the square, benches, flower beds.
  { id: "fuente-tilos", kind: "fountain", x0: -28, x1: -22, z0: -108, z1: -102, h: 1.2 },
  { id: "estatua-poeta", kind: "statue", x0: -26, x1: -24, z0: -100, z1: -98, h: 4.2 },
  { id: "banco-tilos-1", kind: "bench", x0: -31, x1: -29, z0: -89.2, z1: -88.5, h: 0.9 },
  { id: "banco-tilos-2", kind: "bench", x0: -38.8, x1: -38.1, z0: -100, z1: -98, h: 0.9 },
  { id: "cantero-paseo-1", kind: "planter", x0: 10, x1: 14, z0: -79, z1: -77.5, h: 0.6 },
  { id: "cantero-paseo-2", kind: "planter", x0: 26, x1: 30, z0: -79, z1: -77.5, h: 0.6 },

  // Clinic: the ambulance bay roof posts, the vending machine, the patrol cars.
  { id: "maquina", kind: "vending", x0: 98, x1: 99.2, z0: -63, z1: -61, h: 2 },
  { id: "banco-clinica-1", kind: "bench", x0: 73, x1: 75, z0: -57, z1: -56.3, h: 0.9 },
  { id: "banco-clinica-2", kind: "bench", x0: 91, x1: 93, z0: -57, z1: -56.3, h: 0.9 },
  { id: "patrullero-1", kind: "patrol", x0: 70, x1: 74.3, z0: -93.8, z1: -92, h: 1.6 },
  { id: "patrullero-2", kind: "patrol", x0: 80, x1: 84.3, z0: -93.8, z1: -92, h: 1.6 },
  { id: "ambulancia-base", kind: "ambulance", x0: 103.2, x1: 105, z0: -70, z1: -64.6, h: 2.4 },

  // Market: two rows of stalls, the alley's locked end, tables, the stage, the tent.
  ...stallRow(-16, -14.6, [-118, -114, -110, -104, -100, -92, -88, -84, -72, -68, -64.6], "puesto-n", ["#a04f3c", "#397467", "#c9a24a", "#5b4a8a", "#b3502e"]),
  ...stallRow(-9.4, -8, [-120, -116, -108, -100, -96, -90, -86, -80, -74, -70, -66], "puesto-s", ["#2f6a5a", "#a8442f", "#d1a03c", "#3b5d8a"]),
  { id: "callejon-reja", kind: "gate", x0: -82, x1: -76, z0: -37, z1: -36.4, h: 3 },
  { id: "escenario", kind: "stage", x0: -83, x1: -77, z0: 25, z1: 28, h: 0.4 },
  { id: "carpa-adivina", kind: "tent", x0: -72.5, x1: -67.5, z0: 35, z1: 40, h: 3 },
  { id: "mesa-1", kind: "table", x0: -90.6, x1: -89.4, z0: 18.4, z1: 19.6, h: 0.8 },
  { id: "mesa-2", kind: "table", x0: -84.6, x1: -83.4, z0: 18.4, z1: 19.6, h: 0.8 },
  { id: "mesa-3", kind: "table", x0: -76.6, x1: -75.4, z0: 16.4, z1: 17.6, h: 0.8 },
  { id: "mesa-4", kind: "table", x0: -90.6, x1: -89.4, z0: 26.4, z1: 27.6, h: 0.8 },
  { id: "mesa-5", kind: "table", x0: -72.6, x1: -71.4, z0: 24.4, z1: 25.6, h: 0.8 },
  { id: "parrilla", kind: "grill", x0: -64.5, x1: -62.5, z0: 12, z1: 14, h: 1.1 },

  // Riverside: the houseboat sits in the canal; benches along the water and in the park.
  { id: "banco-rio-1", kind: "bench", x0: 94.3, x1: 95, z0: -21, z1: -19, h: 0.9 },
  { id: "banco-rio-2", kind: "bench", x0: 94.3, x1: 95, z0: 9, z1: 11, h: 0.9 },
  { id: "banco-parque-1", kind: "bench", x0: 116.6, x1: 117.3, z0: -17, z1: -15, h: 0.9 },
  { id: "banco-parque-2", kind: "bench", x0: 120.6, x1: 121.3, z0: 29, z1: 31, h: 0.9 },
  { id: "kiosco-rio-mesa", kind: "table", x0: 89.4, x1: 90.6, z0: -15.6, z1: -14.4, h: 0.8 },

  // Station: the tunnel's west wall, the fences that keep the tracks closed,
  // the bus shelter and the taxi rank sign.
  { id: "tunel-muro", kind: "tunnel-wall", x0: -126, x1: -122, z0: 62, z1: 100, h: 3.4 },
  { id: "valla-anden", kind: "fence", x0: -126, x1: -60, z0: 103.4, z1: 103.8, h: 2.2 },
  { id: "valla-hostal", kind: "fence", x0: -74, x1: -72, z0: 82, z1: 100, h: 2.2 },
  { id: "valla-anden-este-1", kind: "fence", x0: -62.4, x1: -62, z0: 82, z1: 84, h: 2.2 },
  { id: "valla-anden-este-2", kind: "fence", x0: -62.4, x1: -62, z0: 100, z1: 103.4, h: 2.2 },
  { id: "refugio-bus", kind: "shelter", x0: -112, x1: -110.8, z0: 58, z1: 63, h: 2.6 },
  { id: "banco-estacion", kind: "bench", x0: -105, x1: -103, z0: 71, z1: 71.7, h: 0.9 },

  // Barrio Sur: swings and benches in the park, the garage ramp barrier.
  { id: "hamacas", kind: "swings", x0: -33, x1: -27, z0: 99.4, z1: 101.2, h: 2.4 },
  { id: "tobogan", kind: "slide", x0: -42, x1: -38, z0: 102, z1: 104, h: 2.2 },
  { id: "banco-parque-sur", kind: "bench", x0: -21, x1: -19, z0: 95, z1: 95.7, h: 0.9 },

  // Warehouses: the construction site, containers, the food truck, the queue rope.
  { id: "obra-g-n", kind: "fence", x0: 66, x1: 96, z0: 94, z1: 94.4, h: 2.4 },
  { id: "obra-g-s", kind: "fence", x0: 66, x1: 96, z0: 113.6, z1: 114, h: 2.4 },
  { id: "obra-g-o", kind: "fence", x0: 66, x1: 66.4, z0: 94, z1: 114, h: 2.4 },
  { id: "obra-g-e1", kind: "fence", x0: 95.6, x1: 96, z0: 94, z1: 102, h: 2.4 },
  { id: "obra-g-e2", kind: "fence", x0: 95.6, x1: 96, z0: 106, z1: 114, h: 2.4 },
  { id: "obra-g-porton", kind: "gate", x0: 95.6, x1: 96, z0: 102, z1: 106, h: 2.4 },
  { id: "grua", kind: "crane", x0: 78, x1: 80, z0: 102, z1: 104, h: 24 },
  { id: "foodtruck", kind: "foodtruck", x0: 102, x1: 106.6, z0: 92, z1: 94.4, h: 2.8 },
  { id: "contenedor-1", kind: "container", x0: 112, x1: 124, z0: 100, z1: 102.6, h: 2.6 },
  { id: "contenedor-2", kind: "container", x0: 114, x1: 124, z0: 106, z1: 108.6, h: 2.6 },
  { id: "soga-fila", kind: "rope", x0: 76, x1: 81.5, z0: 58.2, z1: 58.5, h: 1 },
];

// Places where the camera must stay low (a roof over the player).
export const CEILINGS = [
  { id: "tunel", x0: -122, x1: -117.5, z0: 62, z1: 100, height: 3.2 },
];

// Where every street encounter happens. The first person in the cast stands
// at (x, z) facing `face`; the white circle is in front of them, where the
// learner stops to talk. `room` places it inside a walkable room instead.
// `walk` makes the person stroll along a line between two points (the circle
// moves with them and they stop when the learner is close).
export const PLACEMENTS = {
  // The strong street events bring their own spots (see street/caos-*.mjs).
  ...CAOS_NORTE_PLACES, ...CAOS_CENTRO_PLACES, ...CAOS_SUR_PLACES,
  // Barrio Viejo.
  "viejo-herido": { x: -110, z: -88.2, face: 0, circle: { x: -110, z: -86.4 } },
  "viejo-auto": { x: -61.2, z: -97, face: -Math.PI / 2, car: { x: -59.05, z: -97, heading: Math.PI / 2 }, circle: { x: -62.9, z: -97 } },
  "viejo-discusion": { x: -77, z: -78.7, face: 0, behindDoor: true, circle: { x: -77, z: -77.6 } },
  "viejo-borracho": { x: -111, z: -55.2, face: 0, circle: { x: -111, z: -53.6 } },
  "viejo-lavanderia": { room: "sala-lavanderia", x: 3, z: -1.6, face: 0, circle: { x: 3, z: 0.2 } },
  "viejo-gato": { x: -83, z: -92.7, face: 0, y: 1.6, circle: { x: -83, z: -90.4 }, window: { x: -83, y: 4.4, z: -95.05 } },
  "viejo-grafiti": { x: -91.2, z: -75, face: Math.PI / 2, circle: { x: -93, z: -75 } },
  "viejo-kiosco": { x: -96.25, z: -56.6, face: 0, behindCounter: true, circle: { x: -96.25, z: -54.6 } },
  "viejo-telefono": { x: -64.2, z: -101.8, face: 0, circle: { x: -64.2, z: -100.6 }, nobody: true },
  "viejo-estrellas": { room: "azotea-viejo", x: -80, z: -82.2, face: 0, circle: { x: -80, z: -80.6 } },
  "viejo-palomas": { room: "azotea-viejo", x: -87.2, z: -72, face: Math.PI / 2, circle: { x: -85.6, z: -72 } },
  "viejo-sereno": { x: -101.2, z: -106, face: Math.PI / 2, circle: { x: -99.4, z: -106 } },

  // Barrio Alto.
  "alto-reconoce": { x: -30, z: -89.6, face: 0, circle: { x: -30, z: -87.6 } },
  "alto-turista": { x: 10, z: -72, face: Math.PI / 2, walk: { from: { x: 8, z: -72 }, to: { x: 33, z: -72 }, speed: 0.9 }, circle: { x: 0, z: 1.5, follow: true } },
  "alto-fiesta": { x: -48, z: -54.8, face: 0, circle: { x: -48, z: -53.2 } },
  "alto-feliz": { x: 20, z: -76, face: 0, circle: { x: 20, z: -74.2 } },
  "alto-misterioso": { x: -13.6, z: -104, face: -Math.PI / 2, circle: { x: -15.4, z: -104 } },
  "alto-estatua": { x: -25, z: -96.6, face: 0, circle: { x: -25, z: -95 } },
  "alto-portero": { x: -23.6, z: -55.6, face: 0, circle: { x: -23.6, z: -53.9 } },
  "alto-vinoteca": { x: 29.5, z: -55.8, face: 0, circle: { x: 29.5, z: -54.1 } },
  "alto-galeria": { x: 11.4, z: -55.8, face: 0, circle: { x: 11.4, z: -54.1 } },
  "alto-balcon": { x: -36, z: -56.2, y: 6.6, face: 0, balcony: true, circle: { x: -36, z: -54 } },

  // Clinic, police station and three corners of the centre.
  "clinica-ambulancia": { x: 74, z: -55.4, face: 0, circle: { x: 76.4, z: -54.2 } },
  "clinica-telefono": { x: 77, z: -94.8, face: 0, circle: { x: 77, z: -93.2 } },
  "clinica-ruben": { x: 92, z: -56.6, face: 0, seat: true, circle: { x: 92, z: -54.6 } },
  "clinica-control": { x: 63.2, z: -80, face: Math.PI, walk: { from: { x: 63.2, z: -110 }, to: { x: 63.2, z: -62 }, speed: 1 }, circle: { x: 0, z: 1.5, follow: true } },
  "clinica-farmacia": { x: 118, z: -55.8, face: 0, circle: { x: 118, z: -54.2 } },
  "clinica-espera": { x: 103.4, z: -80, face: 0, circle: { x: 103.4, z: -78.2 } },
  "clinica-maquina": { x: 100.4, z: -63.6, face: -Math.PI / 2, circle: { x: 101.4, z: -61.6 } },
  "centro-diarios": { x: -25.5, z: -26.4, face: 0, kiosk: { x0: -27, x1: -24, z0: -30, z1: -27 }, circle: { x: -25.5, z: -25 } },
  "centro-cine": { x: 17.4, z: -32.6, face: Math.PI, circle: { x: 15, z: -32.2 } },
  "centro-patineta": { x: 48.6, z: 9, face: -Math.PI / 2, circle: { x: 47, z: 9 } },

  // Night market.
  "mercado-perro": { x: -103, z: -12, face: Math.PI / 2, circle: { x: -101.2, z: -12 } },
  "mercado-vendedor": { x: -88, z: -16.7, face: 0, behindCounter: true, circle: { x: -88, z: -13.4 } },
  "mercado-musico": { x: -80, z: 26.4, face: Math.PI, y: 0.4, circle: { x: -80, z: 23.6 } },
  "mercado-amigos": { x: -87.4, z: 35, face: Math.PI / 2, circle: { x: -88, z: 32.8 } },
  "mercado-mover": { x: -116.4, z: -12.6, face: Math.PI / 2, circle: { x: -114.4, z: -11.8 } },
  "mercado-trastienda": { x: -80.6, z: -33.4, face: Math.PI / 2, circle: { x: -79, z: -33.4 } },
  "mercado-cartel": { x: -106.4, z: -18.8, face: Math.PI, circle: { x: -106.4, z: -17.6 }, poster: { x: -106.4, y: 1.8, z: -19.95 } },
  "mercado-flores": { x: -72, z: -16.7, face: 0, behindCounter: true, circle: { x: -72, z: -13.4 } },
  "mercado-libros": { x: -96, z: -7.4, face: Math.PI, behindCounter: true, circle: { x: -96, z: -10.8 } },
  "mercado-adivina": { x: -70, z: 34.2, face: Math.PI, circle: { x: -70, z: 32.4 } },
  "mercado-celular": { x: -90, z: 12.4, face: 0, circle: { x: -90, z: 14.2 } },

  // Riverside.
  "costa-llorando": { x: 94.6, z: -20, face: -Math.PI / 2, seat: true, circle: { x: 92.6, z: -20 } },
  "costa-pareja": { x: 90.6, z: 22, face: -Math.PI / 2, circle: { x: 88.6, z: 21 } },
  "costa-dormida": { x: 117, z: -16, face: -Math.PI / 2, seat: true, circle: { x: 114.8, z: -16 } },
  "costa-toto": { x: 121.4, z: 31.2, face: -Math.PI / 2, circle: { x: 119, z: 31.6 } },
  "costa-poemas": { x: 102, z: -28.2, face: 0, circle: { x: 99.8, z: -29 } },
  "costa-pescador": { x: 95.2, z: -38, face: Math.PI / 2, circle: { x: 93.2, z: -38 } },
  "costa-barco": { x: 98.6, z: 17, y: 0.9, face: -Math.PI / 2, boat: { x0: 96.4, x1: 102.6, z0: 13.5, z1: 20.5 }, circle: { x: 94.6, z: 17 } },
  "costa-camila": { x: 113.6, z: 9.6, face: -Math.PI / 2, circle: { x: 111.6, z: 9.6 } },
  "costa-paraguas": { x: 87, z: 7.2, face: Math.PI, circle: { x: 87, z: 5.6 } },

  // Station.
  "estacion-taxi": { x: -73.4, z: 66, face: -Math.PI / 2, circle: { x: -75.4, z: 66 } },
  "estacion-corre": { x: -104, z: 72.6, face: Math.PI, circle: { x: -104, z: 69.4 } },
  "estacion-tunel": { x: -119.8, z: 86, face: Math.PI, circle: { x: -119.8, z: 82.6 } },
  "estacion-ultimo": { x: -105, z: 80.4, face: Math.PI, circle: { x: -105, z: 78.6 } },
  "estacion-henrik": { x: -67, z: 82.4, face: Math.PI, circle: { x: -67, z: 80.6 } },
  "estacion-reloj": { x: -93, z: 78.6, face: Math.PI, circle: { x: -93, z: 76.8 } },
  "estacion-anuncio": { x: -88, z: 101.6, face: -Math.PI / 2, circle: { x: -90, z: 101.6 } },
  "estacion-kiosco": { x: -70, z: 55.4, face: Math.PI, behindCounter: true, circle: { x: -70, z: 54.4 } },
  "estacion-sinbus": { x: -110, z: 64.6, face: Math.PI / 2, circle: { x: -108.4, z: 64.6 } },

  // Barrio Sur and the warehouses.
  "sur-balcon": { x: -40, z: 56.4, y: 3.8, face: Math.PI, balcony: true, circle: { x: -40, z: 54.8 } },
  "sur-vecino": { x: -17.6, z: 55.4, face: Math.PI, circle: { x: -15.6, z: 54.6 } },
  "sur-estacionamiento": { x: 19, z: 56.4, face: Math.PI, circle: { x: 19, z: 54.6 } },
  "galpones-fabrica": { x: 85, z: 58.8, face: Math.PI, circle: { x: 85, z: 56.4 } },
  "galpones-secreto": { x: 104.4, z: 96.2, face: Math.PI / 2, circle: { x: 101.4, z: 97.4 } },
  "galpones-obra": { x: 97.2, z: 104, face: -Math.PI / 2, circle: { x: 98.8, z: 104 } },
  "sur-hamacas": { x: -30, z: 100.0, face: Math.PI, seat: true, circle: { x: -30, z: 97.6 } },
  "sur-ventana": { x: 43, z: 57.95, y: 3.2, face: Math.PI, window: true, circle: { x: 43, z: 55.6 } },
  "galpones-foodtruck": { x: 104, z: 91.4, face: Math.PI, behindCounter: true, circle: { x: 104, z: 89.8 } },
  "sur-perro": { x: 33.4, z: 70, y: 3.8, face: -Math.PI / 2, balcony: true, circle: { x: 31.8, z: 70 } },
};

// Walkable spaces of the street encounters that are not on the street:
// rooms far from the city (like the museum and the bar) and the secret
// rooftop of the old tenement, which is the real roof, 10 m up.
export const STREET_ROOMS = {
  "sala-lavanderia": {
    district: "viejo", label: "Lavadero 24 h",
    origin: { x: 430, z: 0 }, size: { w: 12, d: 9 }, height: 3.2,
    door: { x: -83, z: -55 },
    spawn: { x: 0, z: 2.6, heading: Math.PI },
    exit: { x: 0, z: 3.6, radius: 1.1 },
    solids: [
      { x0: -6, x1: -4.8, z0: -4.5, z1: 2 },
      { x0: 4.8, x1: 6, z0: -4.5, z1: 2 },
      { x0: -4, x1: 4, z0: -4.5, z1: -3.6 },
      { x0: -1, x1: 1, z0: -0.6, z1: 0.4 },
    ],
  },
  "azotea-viejo": {
    district: "viejo", label: "Azotea del conventillo", roof: 10,
    origin: { x: 0, z: 0 }, area: { x0: -90, x1: -64, z0: -84, z1: -68 }, height: 30,
    door: { x: -62.6, z: -76 },
    spawn: { x: -66, z: -76, heading: -Math.PI / 2 },
    exit: { x: -65.2, z: -76, radius: 1.1 },
    solids: [
      { x0: -84.3, x1: -69.7, z0: -79.3, z1: -68 },
      { x0: -89.6, x1: -87.4, z0: -83.6, z1: -81 },
      { x0: -73, x1: -71, z0: -83.4, z1: -81.4 },
    ],
  },
};
// The circle in the street that takes you into each of those rooms.
export const ROOM_DOORS = Object.entries(STREET_ROOMS).map(([stage, room]) => ({
  id: `puerta-${stage}`, stage, x: room.door.x, z: room.door.z, radius: 1.5, key: "E",
  verb: room.roof ? "SUBIR" : "ENTRAR", name: room.label,
}));

export function streetRoomLayout(stage) {
  const room = STREET_ROOMS[stage];
  if (!room) return null;
  if (room.roof) {
    const a = room.area;
    return {
      stage, roof: room.roof, height: room.height, district: room.district,
      bounds: { minX: a.x0 + 0.3, maxX: a.x1 - 0.3, minZ: a.z0 + 0.3, maxZ: a.z1 - 0.3 },
      spawn: room.spawn, exit: { ...room.exit, id: `${stage}-salida`, key: "E", verb: "BAJAR", exit: true },
      solids: room.solids,
    };
  }
  const { x: ox, z: oz } = room.origin;
  const half = { w: room.size.w / 2, d: room.size.d / 2 };
  return {
    stage, roof: 0, height: room.height, district: room.district,
    bounds: { minX: ox - half.w + 0.15, maxX: ox + half.w - 0.15, minZ: oz - half.d + 0.15, maxZ: oz + half.d - 0.15 },
    spawn: { ...room.spawn, x: room.spawn.x + ox, z: room.spawn.z + oz },
    exit: { ...room.exit, x: room.exit.x + ox, z: room.exit.z + oz, id: `${stage}-salida`, key: "E", verb: "SALIR", exit: true },
    solids: room.solids.map((b) => ({ x0: b.x0 + ox, x1: b.x1 + ox, z0: b.z0 + oz, z1: b.z1 + oz })),
  };
}

// Where an encounter's person stands and where its circle is, in world
// coordinates (rooms far from the street are shifted to their origin).
export function placementOf(id) {
  const place = PLACEMENTS[id];
  if (!place) return null;
  const room = place.room ? STREET_ROOMS[place.room] : null;
  const shift = room && !room.roof ? room.origin : { x: 0, z: 0 };
  return {
    ...place,
    x: place.x + shift.x, z: place.z + shift.z, y: place.y ?? (room?.roof ?? 0),
    circle: place.circle.follow ? place.circle : { x: place.circle.x + shift.x, z: place.circle.z + shift.z },
  };
}

// Street life that is not interactive: people walking their routes, groups
// talking, people on benches and balconies, dogs and cats. Routes run along
// sidewalks, as closed loops of points.
export const WALKER_ROUTES = [
  { id: "ruta-alta-n", points: [[-120, -54], [120, -54]], count: 4 },
  { id: "ruta-alta-s", points: [[118, -43.6], [-118, -43.6]], count: 3 },
  { id: "ruta-estacion-n", points: [[-120, 44.6], [120, 44.6]], count: 3 },
  { id: "ruta-estacion-s", points: [[118, 54.6], [-118, 54.6]], count: 4 },
  { id: "ruta-oeste-o", points: [[-61.6, -114], [-61.6, 101]], count: 3 },
  { id: "ruta-oeste-e", points: [[-51.4, 112], [-51.4, -118]], count: 2 },
  { id: "ruta-este-o", points: [[51.6, -118], [51.6, 112]], count: 2 },
  { id: "ruta-este-e", points: [[61.4, 112], [61.4, -45], [61.4, -118]], count: 3 },
  { id: "ruta-avenida-oeste", points: [[-124, 5.6], [-46, 5.6]], count: 2 },
  { id: "ruta-avenida-este", points: [[46, -5.6], [124, -5.6]], count: 2 },
  { id: "ruta-transversal-n", points: [[-5.6, -118], [-5.6, -46]], count: 2 },
  { id: "ruta-transversal-s", points: [[5.6, 112], [5.6, 54]], count: 2 },
  { id: "ruta-pasaje", points: [[-124, -88], [-62, -88]], count: 3 },
  { id: "ruta-mercado", points: [[-121, -12], [-63, -12]], count: 6 },
  { id: "ruta-patio-comidas", points: [[-93, 10], [-66, 10], [-66, 22], [-93, 22]], count: 4 },
  { id: "ruta-costanera", points: [[93.2, -43], [93.2, 44]], count: 4 },
  { id: "ruta-parque-rio", points: [[110, -40], [124, -40], [124, 40], [110, 40]], count: 2 },
  { id: "ruta-plaza-estacion", points: [[-118, 74], [-64, 74]], count: 4 },
  { id: "ruta-paseo-alto", points: [[6, -68], [35, -68]], count: 3 },
  { id: "ruta-tilos", points: [[-40, -114], [-10, -114], [-10, -87], [-40, -87]], count: 3 },
  { id: "ruta-parque-sur", points: [[-48, 86], [-10, 86], [-10, 110], [-48, 110]], count: 3 },
  { id: "ruta-playon", points: [[100, 90], [100, 114]], count: 2 },
  { id: "ruta-anden", points: [[-120, 101.6], [-64, 101.6]], count: 2 },
  { id: "ruta-centro-norte", points: [[-46, -31], [46, -31]], count: 3 },
  { id: "ruta-centro-sur", points: [[-46, 35], [-18, 35]], count: 2 },
];

// Groups of people talking among themselves (they glance at you, then go on).
export const GROUPS = [
  { id: "grupo-hotel", x: -20, z: -54.4, size: 3, district: "alto" },
  { id: "grupo-galeria", x: 18, z: -54.4, size: 2, district: "alto" },
  { id: "grupo-tilos", x: -36, z: -108, size: 2, district: "alto" },
  { id: "grupo-clinica", x: 110, z: -71, size: 2, district: "clinica", uniform: "#7fb7a8" },
  { id: "grupo-comisaria", x: 86, z: -90, size: 2, district: "clinica", uniform: "#1f2e4a" },
  { id: "grupo-mercado-1", x: -118, z: -11, size: 3, district: "mercado" },
  { id: "grupo-mercado-2", x: -76, z: -11.4, size: 2, district: "mercado" },
  { id: "grupo-comidas-1", x: -86, z: 18.6, size: 3, district: "mercado", seated: true },
  { id: "grupo-comidas-2", x: -74, z: 30, size: 4, district: "mercado" },
  { id: "grupo-comidas-3", x: -91.6, z: 27, size: 2, district: "mercado", seated: true },
  { id: "grupo-costa", x: 90.4, z: -2 + 12, size: 2, district: "costa" },
  { id: "grupo-parque-rio", x: 118, z: 0 + 20, size: 3, district: "costa" },
  { id: "grupo-estacion", x: -82, z: 62, size: 3, district: "estacion" },
  { id: "grupo-anden", x: -110, z: 101.6, size: 2, district: "estacion" },
  { id: "grupo-fila", x: 78.6, z: 57.4, size: 4, district: "galpones", line: true },
  { id: "grupo-playon", x: 116, z: 96, size: 3, district: "galpones" },
  { id: "grupo-fiesta-sur", x: -12, z: 55.4, size: 3, district: "sur" },
  { id: "grupo-viejo", x: -116, z: -88, size: 2, district: "viejo" },
  { id: "grupo-esquina", x: -48, z: 42, size: 2, district: "centro" },
  { id: "grupo-cine", x: 20, z: -31.6, size: 3, district: "centro" },
];

// People sitting on the benches nobody uses for a scene.
export const SITTERS = [
  { id: "sentado-tilos", x: -38.45, z: -99, face: Math.PI / 2 },
  { id: "sentado-rio", x: 94.65, z: 10, face: -Math.PI / 2 },
  { id: "sentado-parque-sur", x: -20, z: 95.35, face: 0 },
  { id: "sentado-placita", x: -67.3, z: -110.25, face: Math.PI },
  { id: "sentado-clinica", x: 74.6, z: -56.65, face: 0, tired: true },
];

// People on balconies and in windows: on the facade of a building, at a floor.
export const BALCONY_PEOPLE = [
  { id: "balcon-1", x: -112, z: -55.6, floor: 2, face: 0 },
  { id: "balcon-2", x: -80, z: -94.6, floor: 3, face: 0 },
  { id: "balcon-3", x: -18, z: -56.6, floor: 3, face: 0 },
  { id: "balcon-4", x: 44, z: -56.6, floor: 4, face: 0 },
  { id: "balcon-5", x: 86.4, z: -30, floor: 2, face: Math.PI / 2 },
  { id: "balcon-6", x: -46, z: 56.6, floor: 2, face: Math.PI },
  { id: "balcon-7", x: 48, z: 57.6, floor: 3, face: Math.PI },
  { id: "balcon-8", x: -34, z: -43.4, floor: 1, face: Math.PI },
];

// Animals of the night.
export const ANIMALS = [
  { id: "gato-callejon", species: "cat", x: -93, z: -116, face: 1, color: "#2a2a2a" },
  { id: "gato-mercado", species: "cat", x: -82.6, z: -21, face: 0.4, color: "#d8d2c4" },
  { id: "gato-galpones", species: "cat", x: 111, z: 99.6, y: 2.6, face: -1, color: "#c8833a" },
  { id: "gato-estacion", species: "cat", x: -73.2, z: 81, face: 2, color: "#6b5a4a" },
  { id: "perro-paseo", species: "dog", route: "ruta-costanera", color: "#e2d7c2", size: "medium" },
  { id: "perro-tilos", species: "dog", route: "ruta-tilos", color: "#2b2724", size: "small" },
  { id: "perro-sur", species: "dog", route: "ruta-parque-sur", color: "#8a5a32", size: "medium" },
];

// Moving traffic on the new streets. They are one-way, with parked cars on
// both kerbs and the moving lane in the middle; bicycles ride between them.
// `axis` x streets run east–west, z streets north–south. Every vehicle loops
// along its street and waits at crossings for whoever is already in them.
const mid = (id) => { const r = ROADS.find((road) => road.id === id); return r.axis === "x" ? (r.z0 + r.z1) / 2 : (r.x0 + r.x1) / 2; };
export const CITY_TRAFFIC = [
  { id: "alta-1", road: "calle-alta", axis: "x", lane: mid("calle-alta"), dir: -1, start: 60, speed: 8, kind: "sedan", color: "#3a4a5e" },
  { id: "alta-2", road: "calle-alta", axis: "x", lane: mid("calle-alta"), dir: -1, start: -40, speed: 7.5, kind: "taxi", color: "#f2c230" },
  { id: "alta-3", road: "calle-alta", axis: "x", lane: mid("calle-alta"), dir: -1, start: 110, speed: 8.5, kind: "coupe", color: "#8e2f2a" },
  { id: "estacion-1", road: "calle-estacion", axis: "x", lane: mid("calle-estacion"), dir: 1, start: 0, speed: 7, kind: "sedan", color: "#d8d2c4" },
  { id: "estacion-2", road: "calle-estacion", axis: "x", lane: mid("calle-estacion"), dir: 1, start: -60, speed: 8, kind: "taxi", color: "#f2c230" },
  { id: "estacion-3", road: "calle-estacion", axis: "x", lane: mid("calle-estacion"), dir: 1, start: 70, speed: 9, kind: "sedan", color: "#2f4f6a" },
  { id: "oeste-1", road: "calle-oeste", axis: "z", lane: mid("calle-oeste"), dir: -1, start: -40, speed: 7.5, kind: "coupe", color: "#5a6b3a" },
  { id: "oeste-2", road: "calle-oeste", axis: "z", lane: mid("calle-oeste"), dir: -1, start: 60, speed: 8, kind: "sedan", color: "#6e2a25" },
  { id: "este-1", road: "calle-este", axis: "z", lane: mid("calle-este"), dir: 1, start: -90, speed: 8, kind: "sedan", color: "#c9a24a" },
  { id: "este-2", road: "calle-este", axis: "z", lane: mid("calle-este"), dir: 1, start: 30, speed: 8.5, kind: "taxi", color: "#f2c230" },
  { id: "bici-1", road: "calle-alta", axis: "x", lane: mid("calle-alta") - 1.25, dir: -1, start: -10, speed: 4.2, kind: "bike", color: "#2b6a8a" },
  { id: "bici-2", road: "calle-estacion", axis: "x", lane: mid("calle-estacion") + 1.25, dir: 1, start: 30, speed: 4.6, kind: "bike", color: "#c45a2a" },
  { id: "bici-3", road: "calle-este", axis: "z", lane: mid("calle-este") - 1.25, dir: 1, start: 0, speed: 4, kind: "bike", color: "#3a8a5a" },
  { id: "bici-4", road: "calle-oeste", axis: "z", lane: mid("calle-oeste") + 1.25, dir: -1, start: 20, speed: 4.4, kind: "bike", color: "#8a3a7a" },
];
// The ambulance comes now and then along the east street and the avenue.
export const AMBULANCE_ROUTE = [[56.5, -120], [56.5, -1.2], [-124, -1.2]];
export const AMBULANCE_EVERY = 75;

// Parked cars along the new streets (static; they block walking like the others).
export const CITY_PARKED = [
  { id: "aparcado-1", kind: "sedan", x: -40, z: -51, heading: Math.PI, color: "#2f3b4a" },
  { id: "aparcado-2", kind: "coupe", x: 30, z: -46.1, heading: 0, color: "#8c8f94" },
  { id: "aparcado-3", kind: "sedan", x: 86, z: -51, heading: Math.PI, color: "#5a2d3a" },
  { id: "aparcado-4", kind: "taxi", x: -66, z: 62, heading: Math.PI / 2, color: "#f2c230" },
  { id: "aparcado-5", kind: "taxi", x: -66, z: 70.4, heading: Math.PI / 2, color: "#f2c230" },
  { id: "aparcado-6", kind: "sedan", x: -30, z: 52, heading: Math.PI, color: "#3b5d4a" },
  { id: "aparcado-7", kind: "coupe", x: 40, z: 47, heading: 0, color: "#c9a24a" },
  { id: "aparcado-8", kind: "sedan", x: 112, z: 52.05, heading: Math.PI, color: "#26303a" },
  { id: "aparcado-9", kind: "van", x: -54, z: 30, heading: -Math.PI / 2, color: "#e6e0d4" },
  { id: "aparcado-10", kind: "sedan", x: 59, z: 20, heading: Math.PI / 2, color: "#6a4a7a" },
  { id: "aparcado-11", kind: "coupe", x: -59, z: -70, heading: Math.PI / 2, color: "#a8442f" },
];

// Boundaries: what closes the city on each side, for the renderer.
export const EDGES = [
  { id: "muro-norte", kind: "wall", x0: -126, x1: 126, z0: -123, z1: -122, h: 6 },
  { id: "rieles-sur", kind: "rail", x0: -126, x1: 126, z0: 116, z1: 117, h: 2.4 },
  { id: "muro-oeste", kind: "wall", x0: -127, x1: -126, z0: -123, z1: 117, h: 6 },
  { id: "rio-este", kind: "river", x0: 126, x1: 127, z0: -123, z1: 117, h: 1.1 },
];
// The streets end in barriers where the city ends.
export const BARRIERS = ROADS.flatMap((road) => road.axis === "x"
  ? [{ id: `${road.id}-o`, x: road.x0 + 0.6, z: (road.z0 + road.z1) / 2, axis: "z", width: road.z1 - road.z0 }, { id: `${road.id}-e`, x: road.x1 - 0.6, z: (road.z0 + road.z1) / 2, axis: "z", width: road.z1 - road.z0 }]
  : [{ id: `${road.id}-n`, x: (road.x0 + road.x1) / 2, z: road.z0 + 0.6, axis: "x", width: road.x1 - road.x0 }, { id: `${road.id}-s`, x: (road.x0 + road.x1) / 2, z: road.z1 - 0.6, axis: "x", width: road.x1 - road.x0 }]);

// Street lamps: every ~15 m along both sides of every road, skipping
// crossings. Generated, so the city has light everywhere.
export function lampPositions() {
  const out = [];
  for (const road of ROADS) {
    if (road.id === "avenida" || road.id === "transversal") {
      // The centre already has its lamps; light the new stretches only.
      const inner = road.axis === "x" ? { from: -46, to: 46 } : { from: -42, to: 40 };
      const span = road.axis === "x" ? [road.x0, road.x1] : [road.z0, road.z1];
      for (let t = span[0] + 8; t < span[1] - 4; t += 15) {
        if (t > inner.from && t < inner.to) continue;
        if (road.axis === "x") out.push({ x: t, z: road.z0 - 1.4, arm: 1 }, { x: t + 7, z: road.z1 + 1.4, arm: -1 });
        else out.push({ x: road.x0 - 1.4, z: t, arm: 1, side: true }, { x: road.x1 + 1.4, z: t + 7, arm: -1, side: true });
      }
      continue;
    }
    const span = road.axis === "x" ? [road.x0, road.x1] : [road.z0, road.z1];
    for (let t = span[0] + 6; t < span[1] - 4; t += 15) {
      if (road.axis === "x") out.push({ x: t, z: road.z0 - 1.4, arm: 1 }, { x: t + 7, z: road.z1 + 1.4, arm: -1 });
      else out.push({ x: road.x0 - 1.4, z: t, arm: 1, side: true }, { x: road.x1 + 1.4, z: t + 7, arm: -1, side: true });
    }
  }
  return out;
}

// Trees in parks and along some streets.
export const TREES = [
  ...[[-38, -92], [-34, -110], [-14, -92], [-12, -110], [-40, -102], [-18, -100], [-30, -114]].map(([x, z]) => ({ x, z, kind: "lime", lights: true })),
  ...[[112, -40], [118, -30], [124, -20], [112, -6], [122, 12], [112, 24], [124, 40], [116, 36]].map(([x, z]) => ({ x, z, kind: "plane" })),
  ...[[-48, 88], [-44, 108], [-24, 88], [-14, 108], [-36, 92], [-12, 92]].map(([x, z]) => ({ x, z, kind: "plane" })),
  ...[[-66, -112], [-118, -90.4], [10, -82.6], [34, -82.6]].map(([x, z]) => ({ x, z, kind: "plane" })),
  ...[[-120, 76], [-64, 76]].map(([x, z]) => ({ x, z, kind: "palm" })),
];

// ------------------------------------------------------------ people

// Where each member of a scene's cast stands: the first at the placement,
// the others beside them, alternating sides, facing the same way.
export function castSpots(id, count) {
  const place = placementOf(id);
  if (!place) return [];
  const face = place.face ?? 0;
  const side = { x: Math.cos(face), z: -Math.sin(face) };
  const spots = [];
  const front = { x: Math.sin(face), z: Math.cos(face) };
  for (let i = 0; i < count; i++) {
    const step = i === 0 ? 0 : Math.ceil(i / 2) * 0.78 * (i % 2 ? 1 : -1);
    // Beside someone sitting, the others stand in front of the seat.
    const out = place.seat && i > 0 ? 0.95 : 0;
    spots.push({ x: place.x + side.x * step + front.x * out, z: place.z + side.z * step + front.z * out, y: place.y, face, seated: Boolean(place.seat) && i === 0 });
  }
  return spots;
}

// The members of a group of people talking: in a small circle facing its
// middle, or in a queue facing north.
export function groupMembers(group) {
  if (group.line) {
    return Array.from({ length: group.size }, (_, i) => ({ x: group.x + i * 0.8, z: group.z, face: Math.PI / 2 }));
  }
  const radius = 0.5 + group.size * 0.1;
  return Array.from({ length: group.size }, (_, i) => {
    const a = (i / group.size) * Math.PI * 2 + 0.4;
    const x = group.x + Math.sin(a) * radius;
    const z = group.z + Math.cos(a) * radius;
    return { x, z, face: Math.atan2(group.x - x, group.z - z) };
  });
}

// Everyone who stands still in the street: the encounter people (the first
// of each cast), the groups and the people on benches. Used as obstacles for
// the learner and for the people walking.
export function standingPeople(castSizes = {}) {
  const out = [];
  for (const [id, place] of Object.entries(PLACEMENTS)) {
    if (place.room || place.walk || place.nobody || place.balcony || place.window || place.behindCounter || (place.y ?? 0) > 0.2) continue;
    for (const spot of castSpots(id, castSizes[id] ?? 1)) out.push({ ...spot, id });
  }
  for (const group of GROUPS) for (const member of groupMembers(group)) out.push({ ...member, id: group.id, seated: Boolean(group.seated) });
  for (const sitter of SITTERS) out.push({ ...sitter, seated: true });
  return out;
}

// ------------------------------------------------------------ collisions

const VEHICLE_HALF = { length: 2.15, width: 0.9 };
const vehicleBox = (v, id) => {
  const along = Math.abs(Math.cos(v.heading)) > 0.5;
  const hx = along ? VEHICLE_HALF.length : VEHICLE_HALF.width;
  const hz = along ? VEHICLE_HALF.width : VEHICLE_HALF.length;
  return { x0: v.x - hx, x1: v.x + hx, z0: v.z - hz, z1: v.z + hz, vehicle: id, top: 1.6 };
};

// The water of the canal, cut where the bridges cross it.
export function canalWater() {
  const cuts = [...CANAL.bridges].sort((a, b) => a.z0 - b.z0);
  const out = [];
  let from = CANAL.z0;
  for (const bridge of cuts) {
    if (bridge.z0 > from) out.push({ x0: CANAL.x0, x1: CANAL.x1, z0: from, z1: bridge.z0, water: true });
    from = bridge.z1;
  }
  if (from < CANAL.z1) out.push({ x0: CANAL.x0, x1: CANAL.x1, z0: from, z1: CANAL.z1, water: true });
  return out;
}

// Everything in the city beyond the centre that blocks walking. `castSizes`
// says how many people stand in each scene (default one).
export function cityColliders(castSizes = {}) {
  const boxes = CITY_BUILDINGS.map((b) => ({ x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1, building: b.id }));
  for (const prop of CITY_PROPS) boxes.push({ x0: prop.x0, x1: prop.x1, z0: prop.z0, z1: prop.z1, prop: prop.id });
  for (const v of CITY_PARKED) boxes.push(vehicleBox(v, v.id));
  boxes.push(...canalWater());
  for (const [id, place] of Object.entries(PLACEMENTS)) {
    if (place.kiosk) boxes.push({ ...place.kiosk, prop: `${id}-kiosco` });
    if (place.boat) boxes.push({ ...place.boat, prop: `${id}-barco` });
    if (place.car) boxes.push(vehicleBox(place.car, `${id}-auto`));
  }
  for (const person of standingPeople(castSizes)) {
    if (person.seated) continue;
    boxes.push({ x0: person.x - 0.25, x1: person.x + 0.25, z0: person.z - 0.25, z1: person.z + 0.25, npc: person.id });
  }
  return boxes;
}

// ------------------------------------------------------------ traffic

const roadById = new Map(ROADS.map((road) => [road.id, road]));
const LENGTH = { bike: 1.8, default: 4.3 };
const halfLength = (car) => (car.kind === "bike" ? LENGTH.bike : LENGTH.default) / 2;

// A vehicle on a street, ready to move: `x`/`z` are its centre.
export function trafficCar(entry) {
  const along = entry.start;
  return {
    ...entry, cruise: entry.speed,
    x: entry.axis === "x" ? along : entry.lane,
    z: entry.axis === "z" ? along : entry.lane,
  };
}

// The stretch of a road where two streets cross.
export const CROSSINGS = ROADS.flatMap((a, i) => ROADS.slice(i + 1).filter((b) => a.axis !== b.axis).map((b) => {
  const x = a.axis === "z" ? a : b;
  const z = a.axis === "x" ? a : b;
  return { x0: x.x0, x1: x.x1, z0: z.z0, z1: z.z1 };
}));

// How far a vehicle's front is from entering a crossing (negative once in)
// and whether any of its body is still inside; null if its lane misses it.
function crossingApproach(car, box) {
  const axis = car.axis ?? "x";
  const lane = car.lane;
  if (!(axis === "x" ? lane > box.z0 && lane < box.z1 : lane > box.x0 && lane < box.x1)) return null;
  const pos = axis === "x" ? car.x : car.z;
  const lo = axis === "x" ? box.x0 : box.z0;
  const hi = axis === "x" ? box.x1 : box.z1;
  const half = halfLength(car);
  const entry = car.dir > 0 ? lo : hi;
  const distance = (entry - pos) * car.dir - half - 0.4;
  const inside = pos + half + 0.4 > lo && pos - half - 0.4 < hi;
  return { distance, inside };
}

// One step of all moving vehicles in the city (the avenue's cars too: those
// have no `road`, run along x and loop over `span`). A vehicle slows to a
// stop for people on its lane, for the vehicle ahead, and before a crossing
// where a vehicle on the other street is already inside.
export function stepCityTraffic(cars, people, dt, blockers = [], avenueSpan = 124) {
  const step = Math.min(Math.max(dt, 0), 0.1);
  return cars.map((car) => {
    const axis = car.axis ?? "x";
    const pos = (thing) => (axis === "x" ? thing.x : thing.z);
    const side = (thing) => (axis === "x" ? thing.z : thing.x);
    const lane = car.lane;
    const ahead = (thing) => (pos(thing) - pos(car)) * car.dir;
    const half = halfLength(car);
    let free = Infinity;
    for (const person of people) {
      if (Math.abs(side(person) - lane) > (car.kind === "bike" ? 1.1 : 1.9)) continue;
      const gap = ahead(person);
      if (gap > 0) free = Math.min(free, gap - half - 0.5);
    }
    for (const other of [...cars, ...blockers]) {
      if (other === car || other.id === car.id) continue;
      if ((other.axis ?? "x") !== axis && other.axis !== undefined) continue;
      if (Math.abs(side(other) - lane) > 1.2) continue;
      const gap = ahead(other);
      if (gap > 0) free = Math.min(free, gap - half - halfLength(other) - 1);
    }
    for (const box of CROSSINGS) {
      const mine = crossingApproach(car, box);
      if (!mine || mine.distance < 0 || mine.distance > 12) continue;
      // Someone on the other street is in the crossing, or reaches it first
      // (closer, or as close with a smaller id): wait at the line.
      const busy = cars.some((other) => {
        if (other === car || (other.axis ?? "x") === axis) return false;
        const theirs = crossingApproach(other, box);
        if (!theirs) return false;
        if (theirs.distance < 0) return theirs.inside;
        if (theirs.distance > 12) return false;
        return theirs.distance < mine.distance || (theirs.distance === mine.distance && String(other.id) < String(car.id));
      });
      if (busy) free = Math.min(free, mine.distance - 0.6);
    }
    const goal = free < 0.4 ? 0 : Math.min(car.cruise, free * 1.4);
    const speed = goal > car.speed ? Math.min(goal, car.speed + 5 * step) : Math.max(goal, car.speed - 14 * step);
    let along = pos(car) + car.dir * speed * step;
    const road = car.road ? roadById.get(car.road) : null;
    const lo = road ? (axis === "x" ? road.x0 : road.z0) + 1 : -avenueSpan;
    const hi = road ? (axis === "x" ? road.x1 : road.z1) - 1 : avenueSpan;
    if (along > hi) along = lo + (along - hi);
    if (along < lo) along = hi - (lo - along);
    return axis === "x" ? { ...car, x: along, speed } : { ...car, z: along, speed };
  });
}

// Where an ambulance or a police car comes when a scene calls one: along
// the nearest street, stopping beside the scene, then driving on.
export function emergencyRoute(x, z) {
  let best = null;
  for (const road of ROADS) {
    const centre = road.axis === "x" ? (road.z0 + road.z1) / 2 : (road.x0 + road.x1) / 2;
    const across = road.axis === "x" ? z : x;
    const along = road.axis === "x" ? x : z;
    const lo = road.axis === "x" ? road.x0 : road.z0;
    const hi = road.axis === "x" ? road.x1 : road.z1;
    if (along < lo || along > hi) continue;
    const lane = centre + Math.sign(across - centre || 1) * (road.id === "avenida" || road.id === "transversal" ? 1.15 : 0);
    const distance = Math.abs(across - lane);
    if (!best || distance < best.distance) best = { road, lane, along, lo, hi, distance };
  }
  if (!best) return null;
  const { road, lane, along, lo, hi } = best;
  const dir = along - lo > hi - along ? 1 : -1;
  const from = Math.max(lo + 2, Math.min(hi - 2, along - dir * 60));
  const to = Math.max(lo + 2, Math.min(hi - 2, along + dir * 60));
  const point = (t) => (road.axis === "x" ? [t, lane] : [lane, t]);
  return { points: [point(from), point(along), point(to)], stopAt: 1, axis: road.axis, dir };
}

// Along a polyline: total length and the point at a distance.
export function pathLength(points) {
  let total = 0;
  for (let i = 1; i < points.length; i++) total += Math.hypot(points[i][0] - points[i - 1][0], points[i][1] - points[i - 1][1]);
  return total;
}
export function pointOnPath(points, s) {
  let left = Math.max(0, s);
  for (let i = 1; i < points.length; i++) {
    const [ax, az] = points[i - 1];
    const [bx, bz] = points[i];
    const length = Math.hypot(bx - ax, bz - az);
    if (left <= length || i === points.length - 1) {
      const t = length ? Math.min(1, left / length) : 0;
      return { x: ax + (bx - ax) * t, z: az + (bz - az) * t, dx: length ? (bx - ax) / length : 0, dz: length ? (bz - az) / length : 1 };
    }
    left -= length;
  }
  const [x, z] = points[points.length - 1];
  return { x, z, dx: 0, dz: 1 };
}

// ------------------------------------------------------------ walkers

// Routes with four or more points are loops; the others go and come back.
const routeById = new Map(WALKER_ROUTES.map((route) => [route.id, route]));
function routePath(route) {
  const closed = route.points.length >= 4;
  const points = closed ? [...route.points, route.points[0]] : [...route.points, ...route.points.slice(0, -1).reverse()];
  return { points, length: pathLength(points) };
}
const paths = new Map(WALKER_ROUTES.map((route) => [route.id, routePath(route)]));

// Every walker of every route, spread along it, each with its own pace.
export function makeWalkers() {
  const out = [];
  let seed = 7;
  const rand = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (const route of WALKER_ROUTES) {
    const { length } = paths.get(route.id);
    for (let i = 0; i < route.count; i++) {
      out.push({ id: `${route.id}-${i}`, route: route.id, s: ((i + rand() * 0.6) / route.count) * length, offset: 0, speed: 1.05 + rand() * 0.5, pace: 1.05 + rand() * 0.5, seed: Math.floor(rand() * 1e6), x: 0, z: 0, heading: 0, wait: 0 });
    }
  }
  for (const animal of ANIMALS) {
    if (!animal.route) continue;
    const { length } = paths.get(animal.route);
    out.push({ id: animal.id, route: animal.route, animal: animal.species, s: rand() * length, offset: 0.5, speed: 1.2, pace: animal.size === "small" ? 1.3 : 1.15, seed: Math.floor(rand() * 1e6), x: 0, z: 0, heading: 0, wait: 0 });
  }
  return stepWalkers(out, [], [], 0, []);
}

const onRoad = (x, z) => ROADS.find((road) => x > road.x0 && x < road.x1 && z > road.z0 && z < road.z1) ?? null;
const hits = (x, z, boxes, radius) => boxes.some((b) => x > b.x0 - radius && x < b.x1 + radius && z > b.z0 - radius && z < b.z1 + radius);

// One step of everyone walking. They keep to their route, step aside (to
// their right) for people standing or coming the other way, wait when
// nothing works, and wait at the kerb while a car is coming.
export function stepWalkers(walkers, standing, cars, dt, boxes) {
  const step = Math.min(Math.max(dt, 0), 0.1);
  return walkers.map((walker) => {
    const obstacles = standing.concat(walkers.filter((w) => w !== walker && Math.abs(w.x - walker.x) < 3 && Math.abs(w.z - walker.z) < 3));
    const { points, length } = paths.get(walker.route);
    const here = pointOnPath(points, walker.s);
    const right = { x: -here.dz, z: here.dx };
    const at = (s, offset) => { const p = pointOnPath(points, s); return { x: p.x - p.dz * offset, z: p.z + p.dx * offset }; };
    const me = at(walker.s, walker.offset);
    let wanted = walker.animal ? 0.5 : 0;
    let blocked = false;
    for (const o of obstacles) {
      const rx = o.x - me.x, rz = o.z - me.z;
      const ahead = rx * here.dx + rz * here.dz;
      const lateral = rx * right.x + rz * right.z;
      if (ahead <= 0 || ahead > 2.4) continue;
      if (Math.abs(lateral) < 0.85) {
        wanted = lateral > 0.15 ? -1.1 : 1.1;
        if (ahead < 0.75) blocked = true;
      }
    }
    // The side step must stay on free ground; otherwise try the other side, or wait.
    const probe = (offset) => { const p = at(walker.s + 0.6, offset); return !hits(p.x, p.z, boxes, 0.3); };
    if (wanted !== walker.offset && !probe(wanted)) wanted = probe(-wanted) ? -wanted : walker.offset;
    let offset = walker.offset + Math.sign(wanted - walker.offset) * Math.min(Math.abs(wanted - walker.offset), 1.4 * step);
    // Wait at the kerb for cars.
    const next = at(walker.s + 1, offset);
    const road = onRoad(next.x, next.z);
    let wait = Math.max(0, walker.wait - step);
    if (road && !onRoad(me.x, me.z)) {
      const along = road.axis === "x" ? "x" : "z";
      const coming = cars.some((car) => {
        if ((car.axis ?? "x") !== road.axis) return false;
        if (!(along === "x" ? car.z > road.z0 && car.z < road.z1 : car.x > road.x0 && car.x < road.x1)) return false;
        const gap = ((along === "x" ? next.x : next.z) - (along === "x" ? car.x : car.z)) * car.dir;
        return gap > -3 && gap < 16 && car.speed > 0.3;
      });
      if (coming) wait = 0.6;
    }
    const go = !blocked && wait <= 0;
    const speed = go ? walker.pace : 0;
    let s = walker.s + speed * step;
    if (s >= length) s -= length;
    const p = at(s, offset);
    if (!go) offset = walker.offset;
    const heading = Math.atan2(p.x - me.x, p.z - me.z);
    return { ...walker, s, offset, x: p.x, z: p.z, heading: speed > 0 && Math.hypot(p.x - me.x, p.z - me.z) > 1e-4 ? heading : walker.heading || Math.atan2(here.dx, here.dz), speed, wait };
  });
}
export const routeOf = (id) => routeById.get(id) ?? null;
