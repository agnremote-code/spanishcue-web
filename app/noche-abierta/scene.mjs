// Noche Abierta · the neighbourhood as data. An isometric (pseudo-3D) block
// of city drawn in SVG from these boxes and props; nothing here is a bitmap.
// Grid units: gx grows towards the lower right, gy towards the lower left.
// Streets: the avenue runs along gy 5–7 and the cross street along gx 5–7.

export const TILE_W = 64;
export const TILE_H = 32;
export const ORIGIN = { x: 452, y: 200 };
export const VIEWBOX = { width: 904, height: 680 };
export const GRID = 12;

export function iso(gx, gy, z = 0) {
  return { x: ORIGIN.x + ((gx - gy) * TILE_W) / 2, y: ORIGIN.y + ((gx + gy) * TILE_H) / 2 - z };
}

// Palettes: face colours for the lit (+y, lower-left) and shaded (+x, lower-right)
// sides, plus the roof. Warm plaster and brick under sodium street light.
export const PALETTES = {
  plaster: { top: "#6d5a4c", left: "#c79a6b", right: "#7a5642", trim: "#e3c08f" },
  brick: { top: "#5a3a33", left: "#a45a41", right: "#6b3a2e", trim: "#d28a62" },
  cream: { top: "#6f6557", left: "#d8c3a0", right: "#8a7760", trim: "#f0dfbe" },
  slate: { top: "#3b4148", left: "#6f7780", right: "#474d55", trim: "#9aa3ab" },
  teal: { top: "#34494a", left: "#4f7471", right: "#35504f", trim: "#86aaa4" },
  far: { top: "#262c35", left: "#343b46", right: "#2a3039", trim: "#3f4753" },
};

// Buildings. `location` makes the building part of that place's hotspot.
export const BUILDINGS = [
  // Far row behind the neighbourhood: quiet silhouettes with a few lights.
  { id: "far-1", x0: 0.6, y0: -2.6, x1: 2.8, y1: -0.5, h: 150, palette: "far", windows: 0.25 },
  { id: "far-2", x0: 3.3, y0: -2.2, x1: 5.4, y1: -0.5, h: 110, palette: "far", windows: 0.25 },
  { id: "far-3", x0: 7.4, y0: -2.8, x1: 9.2, y1: -0.5, h: 190, palette: "far", windows: 0.2 },
  { id: "far-4", x0: 9.6, y0: -2.0, x1: 11.8, y1: -0.5, h: 120, palette: "far", windows: 0.25 },
  { id: "far-5", x0: -2.6, y0: 0.6, x1: -0.5, y1: 3.0, h: 170, palette: "far", windows: 0.2 },
  { id: "far-6", x0: -2.2, y0: 3.4, x1: -0.5, y1: 5.2, h: 100, palette: "far", windows: 0.25 },
  { id: "far-7", x0: -2.8, y0: 7.4, x1: -0.5, y1: 9.6, h: 135, palette: "far", windows: 0.2 },
  { id: "far-8", x0: -2.0, y0: 10.0, x1: -0.5, y1: 11.8, h: 90, palette: "far", windows: 0.25 },
  // North block: Vale's building behind the corner café.
  { id: "departamento", location: "departamento", x0: 0.4, y0: 0.4, x1: 2.9, y1: 3.0, h: 158, palette: "cream", windows: 0.62, balconies: true },
  { id: "norte-fondo", x0: 3.2, y0: 0.4, x1: 4.65, y1: 2.6, h: 96, palette: "slate", windows: 0.45 },
  { id: "bar", location: "bar", x0: 0.4, y0: 3.3, x1: 2.9, y1: 4.65, h: 64, palette: "brick", windows: 0.3, awning: { side: "left", color: "#5a2a22", stripe: "#d9a441" }, sign: "BAR" },
  { id: "cafe", location: "cafe", x0: 3.2, y0: 3.0, x1: 4.65, y1: 4.65, h: 50, palette: "plaster", windows: 0, awning: { side: "left", color: "#2f5d50", stripe: "#e8d9b5" }, sign: "CAFÉ" },
  // East block: the restaurant and the tall building with the rooftop.
  { id: "este-fondo", x0: 7.35, y0: 0.4, x1: 9.4, y1: 2.3, h: 112, palette: "slate", windows: 0.4 },
  { id: "restaurante", location: "restaurante", x0: 7.35, y0: 2.6, x1: 9.4, y1: 4.65, h: 54, palette: "brick", windows: 0, awning: { side: "left", color: "#a3302a", stripe: "#f0d9b0" }, sign: "EL TOLDO" },
  { id: "terraza", location: "terraza", x0: 9.8, y0: 1.0, x1: 11.6, y1: 4.65, h: 178, palette: "teal", windows: 0.5, rooftop: true },
  // South-west block: small shops, the 24-hour store facing the cross street.
  { id: "museo", location: "museo", x0: 0.4, y0: 7.35, x1: 3.0, y1: 9.0, h: 92, palette: "cream", windows: 0.2, awning: { side: "right", color: "#5a1f24", stripe: "#e9d6a8" }, sign: "MUSEO" },
  { id: "sur-bajo", x0: 0.4, y0: 9.4, x1: 3.0, y1: 11.6, h: 58, palette: "plaster", windows: 0.5 },
  { id: "sur-esquina", x0: 3.4, y0: 7.9, x1: 4.65, y1: 9.1, h: 72, palette: "cream", windows: 0.45 },
  { id: "tienda", location: "tienda", x0: 3.4, y0: 9.4, x1: 4.65, y1: 11.0, h: 42, palette: "slate", windows: 0, storefront: "right", sign: "24 H" },
  { id: "sur-final", x0: 3.4, y0: 11.3, x1: 4.65, y1: 11.7, h: 30, palette: "brick", windows: 0 },
];

// Everything that is not a building: lamps, trees, the fountain, the taxi,
// the broken-down car.
export const PROPS = [
  { type: "lamp", gx: 5.25, gy: 4.75 },
  { type: "lamp", gx: 7.2, gy: 4.8 },
  { type: "lamp", gx: 11.4, gy: 4.8 },
  { type: "lamp", gx: 2.2, gy: 4.85 },
  { type: "lamp", gx: 4.8, gy: 11.3 },
  { type: "lamp", gx: 7.2, gy: 11.4 },
  { type: "lamp", gx: 11.5, gy: 7.2 },
  { type: "farol", gx: 4.8, gy: 7.2 },
  { type: "tables", gx: 3.9, gy: 4.85, location: "cafe" },
  { type: "tables", gx: 8.3, gy: 4.85, location: "restaurante" },
  { type: "tree", gx: 7.8, gy: 7.8, location: "plaza" },
  { type: "tree", gx: 11.2, gy: 8.0, location: "plaza" },
  { type: "tree", gx: 7.9, gy: 11.2, location: "plaza" },
  { type: "tree", gx: 11.2, gy: 11.1, location: "plaza" },
  { type: "bench", gx: 8.4, gy: 9.5, location: "plaza" },
  { type: "bench", gx: 10.6, gy: 9.6, location: "plaza" },
  { type: "stall", gx: 9.6, gy: 11.0, location: "plaza" },
  { type: "fountain", gx: 9.5, gy: 9.5, location: "plaza" },
  { type: "person", gx: 10.2, gy: 8.6, location: "plaza", tone: "#c98f6a" },
  { type: "person", gx: 8.9, gy: 10.4, location: "plaza", tone: "#9fb4a8" },
  { type: "person", gx: 10.9, gy: 10.2, location: "plaza", tone: "#d9a441" },
  { type: "person", gx: 8.3, gy: 8.9, location: "plaza", tone: "#3b5d8a" },
  { type: "shelter", gx: 7.1, gy: 10.4 },
  { type: "taxi", gx: 9.4, gy: 5.7, location: "taxi" },
  { type: "broken", gx: 2.1, gy: 6.15, location: "auto" },
  { type: "person", gx: 2.75, gy: 7.3, location: "auto", tone: "#e0b089" },
];

// Where each place's label floats and where the learner stands in front of it.
export const PLACES = {
  cafe: { label: iso(3.9, 3.9, 96), spot: { gx: 4.2, gy: 5.3 } },
  departamento: { label: iso(1.65, 1.7, 210), spot: { gx: 2.4, gy: 5.3 } },
  bar: { label: iso(1.2, 4.2, 112), spot: { gx: 0.9, gy: 5.3 } },
  museo: { label: iso(1.4, 8.4, 140), spot: { gx: 3.6, gy: 7.4 } },
  taxi: { label: iso(10.3, 5.8, 58), spot: { gx: 9.2, gy: 6.9 } },
  restaurante: { label: iso(8.4, 3.6, 104), spot: { gx: 8.3, gy: 5.35 } },
  plaza: { label: iso(8.2, 10.4, 60), spot: { gx: 8.6, gy: 8.6 } },
  tienda: { label: iso(4.0, 10.2, 84), spot: { gx: 5.35, gy: 10.2 } },
  terraza: { label: iso(10.7, 2.8, 246), spot: { gx: 10.6, gy: 5.35 } },
  auto: { label: iso(1.6, 6.6, 50), spot: { gx: 2.4, gy: 6.95 } },
};

export const ARRIVAL_SPOT = { gx: 6.3, gy: 10.9 };

// Painter's order: things further back (smaller gx + gy of the front corner)
// are drawn first.
export function depthOf(item) {
  if ("x1" in item) return item.x1 + item.y1;
  return item.gx + item.gy;
}

// Deterministic "random" for window lights, so every render matches.
export function lit(seed, ratio) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value) < ratio;
}

export function points(list) {
  return list.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
}
