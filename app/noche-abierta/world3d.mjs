// Noche Abierta · the walkable 3D neighbourhood as data plus pure movement
// logic. Units are metres: x grows east, z grows south, y is up. The avenue
// runs east–west along z = 0 and the cross street north–south along x = 0.
// Everything here is plain data so it can be tested without WebGL; the
// renderer (World3D.tsx) only draws what this file describes.
//
// Reusing it for another 3D world means swapping the data (BUILDINGS,
// VEHICLES, NPCS, TARGETS, STAGES, ROOMS) and the lesson content; the
// movement, camera and interaction functions below do not know about
// this particular night.

export const WORLD_BOUNDS = { minX: -44, maxX: 44, minZ: -40, maxZ: 38 };
export const ROAD_HALF = 4;
export const SIDEWALK = 3.2;
export const PLAYER_RADIUS = 0.35;

// Movement feel. The learner runs by default; Shift sprints, Alt walks.
export const WALK_SPEED = 2.6;
export const RUN_SPEED = 6.6;
export const SPRINT_SPEED = 9.2;
export const ACCELERATION = 30;
export const DECELERATION = 26;
export const TURN_RATE = 14;
// Distance covered by one full run cycle (two steps) and one walk cycle:
// the legs move with the ground, so the feet do not slide.
export const RUN_STRIDE = 2.7;
export const WALK_STRIDE = 1.45;

// Where the learner gets off the bus, facing north up the cross street.
export const SPAWN = { x: 5.6, z: 24, heading: Math.PI };

// Buildings: footprint (x0..x1, z0..z1), height h, style and optional door.
// `door.side` is the facade the door is on; `door.at` is along that facade.
export const BUILDINGS = [
  { id: "cafe", x0: -16, x1: -8, z0: -16, z1: -8, h: 5.2, style: "cafe", location: "cafe", sign: "CAFÉ MARTINA", door: { side: "south", at: -11.5 } },
  { id: "departamento", x0: -31, x1: -18, z0: -24, z1: -8, h: 21, style: "cream", location: "departamento", door: { side: "south", at: -24.5 } },
  { id: "norte-fondo", x0: -16, x1: -8, z0: -30, z1: -18, h: 13, style: "slate" },
  { id: "bar", x0: -44, x1: -33, z0: -22, z1: -8, h: 9, style: "bar", location: "bar", sign: "BAR LA PERSIANA", door: { side: "south", at: -38.5 } },
  { id: "restaurante", x0: 8, x1: 19, z0: -16, z1: -8, h: 6, style: "restaurant", location: "restaurante", sign: "EL TOLDO" },
  { id: "terraza", x0: 22, x1: 32, z0: -22, z1: -8, h: 25, style: "teal", location: "terraza", door: { side: "south", at: 27 }, rooftop: true },
  { id: "este-fondo", x0: 8, x1: 19, z0: -30, z1: -19, h: 15, style: "slate" },
  { id: "este-final", x0: 34, x1: 44, z0: -20, z1: -8, h: 11, style: "brick" },
  { id: "tienda", x0: -16, x1: -8, z0: 8, z1: 15, h: 4.6, style: "store", location: "tienda", sign: "ALMACÉN 24 H", door: { side: "north", at: -12 } },
  { id: "museo", x0: -31, x1: -19, z0: 8, z1: 20, h: 10, style: "museum", location: "museo", sign: "MUSEO DEL PASADO", door: { side: "north", at: -25 } },
  { id: "sur-fondo", x0: -16, x1: -8, z0: 18, z1: 28, h: 8, style: "brick" },
  { id: "sur-final", x0: -44, x1: -34, z0: 8, z1: 18, h: 7, style: "cream" },
];

// The plaza occupies the south-east block; it has no walls, only props.
export const PLAZA = { x0: 8, x1: 34, z0: 8, z1: 32, fountain: { x: 20, z: 19, r: 2.6 } };

// Parking lanes sit against the kerb; the inner lanes carry moving traffic.
export const PARK_LANE = 2.95;
export const TRAFFIC_LANE = 1.15;

// Parked and ambient vehicles. The taxi and the broken car are interactive.
export const VEHICLES = [
  { id: "taxi", kind: "taxi", x: 22, z: -PARK_LANE, heading: Math.PI, location: "taxi" },
  { id: "auto-roto", kind: "broken", x: -21, z: PARK_LANE, heading: 0, location: "auto", hoodOpen: true },
  { id: "parked-1", kind: "sedan", x: -34, z: -PARK_LANE, heading: Math.PI, color: "#6e2a25" },
  { id: "parked-2", kind: "sedan", x: 29, z: PARK_LANE, heading: 0, color: "#2f4f6a" },
  { id: "parked-3", kind: "coupe", x: 2.4, z: -22, heading: -Math.PI / 2, color: "#8fb7c9" },
  { id: "parked-4", kind: "sedan", x: -2.4, z: 16, heading: Math.PI / 2, color: "#3b3b3f" },
  { id: "parked-5", kind: "coupe", x: 36, z: -PARK_LANE, heading: Math.PI, color: "#c9a24a" },
];
export const VEHICLE_SIZE = { length: 4.3, width: 1.8 };
// Vehicles are modelled along +x; heading h points them to (cos h, sin h).
// Traffic keeps right: westbound in the north lane, eastbound in the south one.
export const TRAFFIC = [
  { id: "trafico-1", lane: -TRAFFIC_LANE, dir: -1, start: 30, speed: 8.5, kind: "sedan", color: "#5d6f7a" },
  { id: "trafico-2", lane: -TRAFFIC_LANE, dir: -1, start: -25, speed: 7.5, kind: "coupe", color: "#a8442f" },
  { id: "trafico-3", lane: TRAFFIC_LANE, dir: 1, start: -10, speed: 8, kind: "sedan", color: "#d8d2c4" },
  { id: "trafico-4", lane: TRAFFIC_LANE, dir: 1, start: 40, speed: 9, kind: "coupe", color: "#2e3b52" },
];
export const TRAFFIC_SPAN = 62;

// Street furniture that blocks walking: the bus shelter, the restaurant's
// outdoor table (with the friends sitting at it) and the overpass pillars.
export const SOLID_PROPS = [
  { id: "refugio", x0: 6.8, x1: 7.3, z0: 25, z1: 29 },
  { id: "mesa-afuera", x0: 10.8, x1: 16, z0: -7.4, z1: -5.1 },
  { id: "pilar-oeste", x0: -6.2, x1: -5.2, z0: 34.2, z1: 35.8 },
  { id: "pilar-este", x0: 5.2, x1: 6.2, z0: 34.2, z1: 35.8 },
  { id: "carrito", x0: 15.2, x1: 16.8, z0: 14.8, z1: 15.6 },
];
export const OVERPASS = { x0: -16, x1: 16, z0: 33.5, z1: 36.5, y: 5.6 };

// People in the street. `location` (and `activity`) make them part of a
// place; the rest is street life.
export const NPCS = [
  { id: "chofer-roto", x: -21, z: 5.4, facing: Math.PI, location: "auto", look: { shirt: "#3f6d8c", hair: "#3a2a1e", skin: "#e0b089" } },
  { id: "vendedor", x: 17.4, z: 15.9, facing: 0.4, look: { shirt: "#6b8f4e", hair: "#161616", skin: "#8d5b3c" } },
  { id: "pablo", x: 12, z: 14.6, facing: 0.3, location: "plaza", activity: "pablo", look: { shirt: "#3b5d8a", pants: "#2a2e36", hair: "#1c140e", skin: "#c99064" } },
  { id: "ines", x: 14.6, z: 19, facing: Math.PI / 2, location: "plaza", activity: "ines", seated: true, look: { shirt: "#c98a3c", pants: "#3a3440", hair: "#6b3a1e", skin: "#efcaa6" } },
  { id: "ana", x: 24.4, z: 13.4, facing: 0.9, location: "plaza", activity: "pareja", look: { shirt: "#8a3d5c", pants: "#23262c", hair: "#2a1a12", skin: "#d49d74" } },
  { id: "diego", x: 25.6, z: 13.7, facing: -1.6, location: "plaza", activity: "pareja", look: { shirt: "#e0d6c2", pants: "#3a4a5a", hair: "#0f0f0f", skin: "#7a4b30" } },
  { id: "ramiro", x: 8.8, z: 22.5, facing: -Math.PI / 2, location: "plaza", activity: "ramiro", look: { shirt: "#5a5048", pants: "#2c2c30", hair: "#8a8a8a", skin: "#c99a74" } },
  { id: "marta", x: 20, z: 24.6, facing: Math.PI, location: "plaza", activity: "marta", seated: true, look: { shirt: "#d9a441", pants: "#2f3440", hair: "#b8b0a4", skin: "#b87a55" } },
  { id: "kenji", x: 27.6, z: 22, facing: -Math.PI / 2, location: "plaza", activity: "kenji", look: { shirt: "#e8e4da", pants: "#4a5240", hair: "#121212", skin: "#e6c39c" } },
  { id: "sofia", x: 25.4, z: 19, facing: -Math.PI / 2, location: "plaza", activity: "sofia", seated: true, look: { shirt: "#2f6a5a", pants: "#26262c", hair: "#3a2416", skin: "#a8704c" } },
  { id: "amigos-1", x: 11.6, z: -6.5, facing: 0, location: "restaurante", seated: true, look: { shirt: "#7a2e3e", hair: "#2a1a12", skin: "#d49d74" } },
  { id: "amigos-2", x: 13.4, z: -6.5, facing: 0, location: "restaurante", seated: true, look: { shirt: "#e6e0d4", hair: "#0f0f0f", skin: "#7a4b30" } },
  { id: "amigos-3", x: 15.2, z: -6.5, facing: 0, location: "restaurante", seated: true, look: { shirt: "#4a5d8a", hair: "#c49a5a", skin: "#f0caa5" } },
  { id: "paseante-1", x: -5.8, z: -20, facing: 0, walk: { axis: "z", from: -30, to: -9, speed: 1.2 }, look: { shirt: "#c47a3a", hair: "#241812", skin: "#b57d57" } },
  { id: "paseante-2", x: 30, z: 5.8, facing: -Math.PI / 2, walk: { axis: "x", from: 9, to: 40, speed: 1.3 }, look: { shirt: "#324a3e", hair: "#3b2618", skin: "#e2b48c" } },
  { id: "paseante-3", x: -30, z: -5.8, facing: Math.PI / 2, walk: { axis: "x", from: -42, to: -9, speed: 1.1 }, look: { shirt: "#6a4a7a", hair: "#9a6a3a", skin: "#efc8a4" } },
  { id: "paseante-4", x: 5.8, z: 12, facing: 0, walk: { axis: "z", from: 9, to: 30, speed: 1.4 }, look: { shirt: "#b33a2c", hair: "#141414", skin: "#9a6a48" } },
];

// Interaction targets in the street. Each maps a lesson place (and, for the
// people in the plaza, one of its activities) to a spot, a key, a verb and
// where the encounter happens: the street, a room, the taxi or the rooftop.
const talkTo = (npc, dx, dz, radius = 1.6) => {
  const data = NPCS.find((item) => item.id === npc);
  return { id: `plaza-${data.activity}`, location: "plaza", activity: data.activity, x: data.x + dx, z: data.z + dz, radius, key: "E", verb: "HABLAR", stage: "calle", npc };
};
export const TARGETS = [
  { id: "puerta-cafe", location: "cafe", x: -11.5, z: -6.9, radius: 1.8, key: "E", verb: "ENTRAR", stage: "interior-cafe" },
  { id: "puerta-departamento", location: "departamento", x: -24.5, z: -6.9, radius: 1.8, key: "E", verb: "TOCAR TIMBRE", stage: "interior-departamento" },
  { id: "puerta-bar", location: "bar", x: -38.5, z: -6.9, radius: 1.8, key: "E", verb: "ENTRAR", stage: "interior-bar" },
  { id: "taxi", location: "taxi", x: 22, z: -4.6, radius: 2.3, key: "F", verb: "SUBIR", stage: "taxi", vehicle: "taxi" },
  { id: "mesa-restaurante", location: "restaurante", x: 13.4, z: -4.3, radius: 1.6, key: "E", verb: "SENTARME", stage: "calle", shot: { camera: { x: 17.4, y: 2.5, z: -1.4 }, look: { x: 13.4, y: 1, z: -5.6 } } },
  talkTo("pablo", 0.3, 1.2),
  talkTo("ines", 1.3, 0),
  { ...talkTo("ana", 0.6, 1.3), radius: 1.8 },
  talkTo("ramiro", 1.1, 0),
  talkTo("marta", 0, -1.3),
  talkTo("kenji", -1.2, 0),
  talkTo("sofia", -1.3, 0),
  { id: "puerta-tienda", location: "tienda", x: -12, z: 6.9, radius: 1.8, key: "E", verb: "ENTRAR", stage: "interior-tienda" },
  { id: "puerta-museo", location: "museo", x: -25, z: 6.9, radius: 1.8, key: "E", verb: "ENTRAR", stage: "interior-museo" },
  { id: "puerta-terraza", location: "terraza", x: 27, z: -6.9, radius: 1.8, key: "E", verb: "SUBIR", stage: "terraza" },
  { id: "auto-roto", location: "auto", x: -21, z: 4.6, radius: 2.4, key: "E", verb: "AYUDAR", stage: "calle", npc: "chofer-roto", vehicle: "auto-roto", shot: { camera: { x: -15.9, y: 2.3, z: 7.8 }, look: { x: -21.3, y: 1.2, z: 4.2 } } },
];

// Rooms you walk around in. Coordinates are relative to the room's origin;
// `hotspots` are what you can walk up to (one per activity) and `exit` is the
// door back to the street. `solids` block walking inside.
export const ROOMS = {
  "interior-museo": {
    location: "museo",
    origin: { x: 320, z: 0 }, size: { w: 18, d: 14 }, height: 4.4,
    spawn: { x: 0, z: 2.9, heading: Math.PI },
    exit: { x: 0, z: 6.2, radius: 1.2 },
    hotspots: [
      { activity: "foto", x: -7.5, z: -3.5, at: { x: -8.8, z: -3.5 }, verb: "MIRAR" },
      { activity: "telefono", x: -7.5, z: 2, at: { x: -8.8, z: 2 }, verb: "MIRAR" },
      { activity: "televisor", x: -5, z: -4.9, at: { x: -5, z: -6.3 }, verb: "MIRAR" },
      { activity: "habitacion", x: 3, z: -3.9, at: { x: 3, z: -5.8 }, verb: "ASOMARME" },
      { activity: "bicicleta", x: 6.8, z: -3.5, at: { x: 8.2, z: -3.5 }, verb: "MIRAR" },
      { activity: "valija", x: 6.7, z: 2.4, at: { x: 8, z: 2.4 }, verb: "ABRIR" },
      { activity: "boleto", x: -3, z: 0.75, at: { x: -3, z: -0.4 }, verb: "MIRAR" },
      { activity: "carta", x: 0.4, z: -0.4, at: { x: 0.4, z: -1.6 }, verb: "LEER" },
      { activity: "caja", x: 3.9, z: 1.75, at: { x: 3.9, z: 0.6 }, verb: "INVESTIGAR" },
    ],
    solids: [
      { x0: -0.6, x1: 6.6, z0: -7, z1: -5 },
      { x0: 7.5, x1: 9, z0: -4.6, z1: -2.4 },
      { x0: 7.4, x1: 9, z0: 1.8, z1: 3 },
      { x0: -3.45, x1: -2.55, z0: -0.85, z1: 0.05 },
      { x0: -0.05, x1: 0.85, z0: -2.05, z1: -1.15 },
      { x0: 3.45, x1: 4.35, z0: 0.15, z1: 1.05 },
      { x0: -5.6, x1: -4.4, z0: -7, z1: -5.7 },
    ],
  },
  "interior-bar": {
    location: "bar",
    origin: { x: 370, z: 0 }, size: { w: 14, d: 11 }, height: 3.6,
    spawn: { x: -5, z: 1.7, heading: Math.PI },
    exit: { x: -5, z: 4.8, radius: 1.1 },
    hotspots: [
      { activity: "fuerte", x: -4.4, z: -1.35, at: { x: -4.5, z: -2.4 }, verb: "HABLAR" },
      { activity: "fila", x: 1, z: -1.35, at: { x: 0.9, z: -2.35 }, verb: "HABLAR" },
      { activity: "billetera", x: 4.3, z: -1.7, at: { x: 5.2, z: -2.6 }, verb: "AYUDAR" },
      { activity: "quedarse", x: -1.1, z: 1.3, at: { x: -2.4, z: 1.6 }, verb: "HABLAR" },
      { activity: "caro", x: 2.6, z: 1.8, at: { x: 4.6, z: 1.8 }, verb: "SENTARME" },
      { activity: "cancelo", x: 5.3, z: 4, at: { x: 6.2, z: 4.6 }, verb: "ATENDER" },
      { activity: "invitacion", x: -2.5, z: 3.65, at: { x: -2.5, z: 4.7 }, verb: "HABLAR" },
    ],
    solids: [
      { x0: -6.4, x1: 2.6, z0: -3.8, z1: -2.85 },
      { x0: 4.6, x1: 5.8, z0: -3.8, z1: -2.6 },
      { x0: -3, x1: -2, z0: 1.1, z1: 2.1 },
      { x0: 3.4, x1: 5.8, z0: 1.2, z1: 2.4 },
      { x0: 6.1, x1: 7, z0: 4.1, z1: 5.5 },
    ],
  },
};
// Every walkable room as absolute coordinates, ready for collisions.
export function roomLayout(stage) {
  const room = ROOMS[stage];
  if (!room) return null;
  const { x: ox, z: oz } = room.origin;
  const shift = (p) => ({ ...p, x: p.x + ox, z: p.z + oz });
  const half = { w: room.size.w / 2, d: room.size.d / 2 };
  return {
    stage, location: room.location, height: room.height,
    bounds: { minX: ox - half.w + 0.15, maxX: ox + half.w - 0.15, minZ: oz - half.d + 0.15, maxZ: oz + half.d - 0.15 },
    spawn: shift(room.spawn),
    exit: { ...shift(room.exit), id: `${stage}-salida`, key: "E", verb: "SALIR", location: room.location, exit: true },
    hotspots: room.hotspots.map((spot) => ({
      ...shift(spot), id: `${stage}-${spot.activity}`, key: "E", location: room.location, radius: spot.radius ?? 1.4, at: shift(spot.at),
    })),
    solids: room.solids.map((b) => ({ x0: b.x0 + ox, x1: b.x1 + ox, z0: b.z0 + oz, z1: b.z1 + oz })),
  };
}
export const WALKABLE_STAGES = new Set(Object.values(ROOMS).map((room) => room.location));

// Focused micro-worlds. Interiors sit far outside the street so they never
// overlap it; the rooftop is the real roof of the terraza building.
export const STAGES = {
  "interior-cafe": { origin: { x: 200, z: 0 }, size: { w: 12, d: 9 }, spot: { x: 200, z: 2.6, heading: Math.PI }, camera: { x: 203.6, y: 2.2, z: 5.4 }, look: { x: 199, y: 1.2, z: -1.2 } },
  "interior-departamento": { origin: { x: 240, z: 0 }, size: { w: 12, d: 10 }, spot: { x: 240, z: 3, heading: Math.PI }, camera: { x: 236, y: 2.4, z: 5.8 }, look: { x: 241, y: 1.2, z: -1.4 } },
  "interior-tienda": { origin: { x: 280, z: 0 }, size: { w: 11, d: 12 }, spot: { x: 280, z: 3.6, heading: Math.PI }, camera: { x: 283.4, y: 2.3, z: 6.4 }, look: { x: 279, y: 1.2, z: -1.5 } },
  "interior-museo": { origin: { x: 320, z: 0 }, size: { w: 18, d: 14 }, walk: true, spot: { x: 320, z: 5.1, heading: Math.PI }, camera: { x: 320, y: 3, z: 9.4 }, look: { x: 320, y: 1.3, z: 2 } },
  "interior-bar": { origin: { x: 370, z: 0 }, size: { w: 14, d: 11 }, walk: true, spot: { x: 365, z: 3.9, heading: Math.PI }, camera: { x: 365, y: 2.6, z: 7.8 }, look: { x: 365, y: 1.3, z: 1 } },
  terraza: { origin: { x: 27, z: -15 }, roof: 25, spot: { x: 29.7, z: -17.8, heading: 0 }, camera: { x: 31, y: 28.2, z: -7.6 }, look: { x: 25, y: 25.8, z: -16 } },
};

// Encounter framing in the street: a fixed shot when the place has one,
// otherwise a two-shot beside the learner and the character they talk to.
export function streetFraming(target, player) {
  if (target.shot) return target.shot;
  const focus = target.npc ? NPCS.find((npc) => npc.id === target.npc) : null;
  const other = focus ? { x: focus.x, z: focus.z } : { x: target.x, z: target.z - 1.5 };
  const mid = { x: (player.x + other.x) / 2, z: (player.z + other.z) / 2 };
  const dx = other.x - player.x;
  const dz = other.z - player.z;
  const length = Math.hypot(dx, dz) || 1;
  // Perpendicular to the line between the two people, on whichever side is open.
  const place = (sx, sz) => ({ x: mid.x + sx * 3.6 - (dx / length) * 1.1, z: mid.z + sz * 3.6 - (dz / length) * 1.1 });
  const clear = (p) => !insideBuilding(p.x, p.z, 0.2) && !SOLIDS.some((b) => !b.npc && p.x > b.x0 - 0.3 && p.x < b.x1 + 0.3 && p.z > b.z0 - 0.3 && p.z < b.z1 + 0.3);
  let camera = place(-dz / length, dx / length);
  if (!clear(camera)) camera = place(dz / length, -dx / length);
  return { camera: { x: camera.x, y: 1.9, z: camera.z }, look: { x: mid.x, y: 1.3, z: mid.z } };
}

// Solid boxes used for collision: buildings, vehicles, the fountain basin,
// street furniture and people standing still. Interiors are separate stages.
export function colliders() {
  const boxes = BUILDINGS.map((b) => ({ x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1 }));
  for (const v of VEHICLES) {
    const along = Math.abs(Math.cos(v.heading)) > 0.5;
    const hx = (along ? VEHICLE_SIZE.length : VEHICLE_SIZE.width) / 2;
    const hz = (along ? VEHICLE_SIZE.width : VEHICLE_SIZE.length) / 2;
    boxes.push({ x0: v.x - hx, x1: v.x + hx, z0: v.z - hz, z1: v.z + hz, vehicle: v.id, top: 1.6 });
  }
  const f = PLAZA.fountain;
  boxes.push({ x0: f.x - f.r, x1: f.x + f.r, z0: f.z - f.r, z1: f.z + f.r });
  for (const prop of SOLID_PROPS) boxes.push({ x0: prop.x0, x1: prop.x1, z0: prop.z0, z1: prop.z1 });
  // People standing still are small obstacles; walkers and seated people are not.
  for (const npc of NPCS) {
    if (npc.walk || npc.seated) continue;
    boxes.push({ x0: npc.x - 0.25, x1: npc.x + 0.25, z0: npc.z - 0.25, z1: npc.z + 0.25, npc: npc.id });
  }
  return boxes;
}
const SOLIDS = colliders();

export function insideBuilding(x, z, margin = 0) {
  return BUILDINGS.some((b) => x > b.x0 - margin && x < b.x1 + margin && z > b.z0 - margin && z < b.z1 + margin);
}

function blocked(x, z, boxes, radius, bounds) {
  if (x < bounds.minX + radius || x > bounds.maxX - radius || z < bounds.minZ + radius || z > bounds.maxZ - radius) return true;
  return boxes.some((b) => x > b.x0 - radius && x < b.x1 + radius && z > b.z0 - radius && z < b.z1 + radius);
}

export function isWalkable(x, z, boxes = SOLIDS, bounds = WORLD_BOUNDS) {
  return !blocked(x, z, boxes, PLAYER_RADIUS, bounds);
}

const wrap = (angle) => Math.atan2(Math.sin(angle), Math.cos(angle));
export const angleBetween = (from, to) => wrap(to - from);

// Turn camera-relative input into a world direction. `x` is right, `y` is
// forward (away from the camera); `yaw` is the direction the camera looks.
export function inputDirection(input, yaw) {
  const x = input.x || 0;
  const y = input.y || 0;
  const length = Math.min(1, Math.hypot(x, y));
  if (length < 0.05) return null;
  const dx = Math.sin(yaw) * y - Math.cos(yaw) * x;
  const dz = Math.cos(yaw) * y + Math.sin(yaw) * x;
  return { heading: Math.atan2(dx, dz), amount: length };
}

// One simulation step. The avatar turns smoothly toward where the stick or
// keys point (relative to the camera), speeds up and slows down instead of
// starting and stopping dead, pivots on sharp turns rather than sliding
// backwards, and slides along walls instead of sticking to them.
export function stepPlayer(player, input, dt, boxes = SOLIDS, bounds = WORLD_BOUNDS) {
  const step = Math.min(Math.max(dt, 0), 0.1);
  const want = inputDirection(input, input.yaw ?? player.heading);
  let heading = player.heading;
  let goal = 0;
  if (want) {
    const diff = angleBetween(heading, want.heading);
    heading = wrap(heading + diff * (1 - Math.exp(-TURN_RATE * step)));
    const top = input.walk ? WALK_SPEED : input.sprint ? SPRINT_SPEED : RUN_SPEED;
    // Facing away from where you want to go: turn first, then run.
    const facing = Math.max(0.12, Math.min(1, (Math.cos(diff) + 0.35) / 1.35));
    goal = top * want.amount * facing;
  }
  const current = player.speed || 0;
  const rate = goal > current ? ACCELERATION : DECELERATION;
  const speed = goal > current ? Math.min(goal, current + rate * step) : Math.max(goal, current - rate * step);
  const dx = Math.sin(heading) * speed * step;
  const dz = Math.cos(heading) * speed * step;
  let { x, z } = player;
  const oldY = player.y || 0;
  const contains = (b, px, pz) => px > b.x0 - PLAYER_RADIUS && px < b.x1 + PLAYER_RADIUS && pz > b.z0 - PLAYER_RADIUS && pz < b.z1 + PLAYER_RADIUS;
  const support = boxes.reduce((h, b) => b.vehicle && contains(b, x, z) && oldY >= (b.top ?? 1.6) - 0.001 ? Math.max(h, b.top ?? 1.6) : h, 0);
  let vy = player.vy || 0;
  if (input.jump && !player.jumpHeld && oldY <= support + 0.001) vy = 10.5;
  let y = oldY + vy * step - 9 * step * step;
  vy -= 18 * step;
  if (y <= support) { y = support; vy = 0; }
  const activeBoxes = boxes.filter(b => !b.vehicle || y < (b.top ?? 1.6) - 0.001);
  // A moving car can enter the avatar's footprint. Resolve that overlap
  // toward the nearest clear side instead of rejecting every escape step.
  for (const b of activeBoxes) {
    if (!b.vehicle || !contains(b, x, z)) continue;
    const candidates = [
      { x: b.x0 - PLAYER_RADIUS - 0.002, z }, { x: b.x1 + PLAYER_RADIUS + 0.002, z },
      { x, z: b.z0 - PLAYER_RADIUS - 0.002 }, { x, z: b.z1 + PLAYER_RADIUS + 0.002 },
    ].sort((a,c) => Math.hypot(a.x-x,a.z-z)-Math.hypot(c.x-x,c.z-z));
    const clear = candidates.find(c => !blocked(c.x,c.z,activeBoxes,PLAYER_RADIUS,bounds));
    if (clear) { x = clear.x; z = clear.z; }
  }
  if (!blocked(x + dx, z, activeBoxes, PLAYER_RADIUS, bounds)) x += dx;
  if (!blocked(x, z + dz, activeBoxes, PLAYER_RADIUS, bounds)) z += dz;
  const floor = boxes.reduce((h,b) => b.vehicle && contains(b,x,z) && oldY >= (b.top ?? 1.6) - 0.001 ? Math.max(h,b.top ?? 1.6) : h, 0);
  if (y <= floor) { y = floor; vy = 0; }
  const moved = Math.hypot(x - player.x, z - player.z);
  // Against a wall the legs stop too: speed is what actually moved.
  const real = step > 0 ? Math.min(speed, moved / step) : 0;
  return { x, z, y, vy, jumpHeld: Boolean(input.jump), heading, speed: real, moving: moved > 1e-4 };
}

// The camera drifts back behind the avatar while it runs away from the
// camera; running sideways or toward the camera leaves it alone, so the
// controls never fight the view.
export function followYaw(yaw, heading, speed, dt) {
  if (speed < 0.5) return yaw;
  const diff = angleBetween(yaw, heading);
  const ahead = Math.max(0, Math.cos(diff));
  const rate = 2.4 * ahead * Math.min(1, speed / RUN_SPEED);
  return wrap(yaw + diff * (1 - Math.exp(-rate * Math.min(dt, 0.1))));
}

// The nearest target the learner is standing close to, if any.
export function nearestTarget(player, targets = TARGETS) {
  let best = null;
  let bestDistance = Infinity;
  for (const target of targets) {
    const distance = Math.hypot(target.x - player.x, target.z - player.z);
    if (distance <= (target.radius ?? 1.4) && distance < bestDistance) {
      best = target;
      bestDistance = distance;
    }
  }
  return best;
}

// Third-person follow camera: behind and above the avatar, looking slightly
// ahead. It is pulled in when a wall would sit between it and the player.
export const CAMERA_PRESETS = [
  { id: "cerca", distance: 4.4, height: 2.1, ahead: 1.6 },
  { id: "media", distance: 6.2, height: 3, ahead: 2.2 },
  { id: "alta", distance: 9, height: 6, ahead: 1.6 },
];
export const ROOM_PRESET = { id: "sala", distance: 4.6, height: 2.3, ahead: 1.4 };

export function followCamera(player, preset, yaw = player.heading, room = null) {
  const back = yaw + Math.PI;
  const look = { x: player.x + Math.sin(yaw) * preset.ahead, y: 1.35, z: player.z + Math.cos(yaw) * preset.ahead };
  const outside = room
    ? (px, pz) => px < room.minX + 0.3 || px > room.maxX - 0.3 || pz < room.minZ + 0.3 || pz > room.maxZ - 0.3
    : (px, pz) => insideBuilding(px, pz, 0.3);
  let distance = preset.distance;
  for (let d = 0.4; d <= preset.distance; d += 0.2) {
    const px = player.x + Math.sin(back) * d;
    const pz = player.z + Math.cos(back) * d;
    if (outside(px, pz)) { distance = Math.max(0.2, d - 0.4); break; }
  }
  // With a wall close behind the avatar the camera rises and looks down instead.
  let y = preset.height * (distance / preset.distance) + 0.6 + Math.max(0, 2.6 - distance) * 1.6;
  if (room) y = Math.min(y, 3.2);
  return { x: player.x + Math.sin(back) * distance, y, z: player.z + Math.cos(back) * distance, look };
}

// Where the avatar stands when an encounter ends: back in the street, just
// outside the door or beside the vehicle, facing away from it.
export function exitSpot(target) {
  const door = BUILDINGS.find((b) => b.location === target.location && b.door);
  if (door) {
    const north = door.door.side === "north";
    return { x: door.door.at, z: target.z + (north ? -0.6 : 0.6), heading: north ? Math.PI : 0 };
  }
  return { x: target.x, z: target.z, heading: target.z < 0 ? 0 : Math.PI };
}

// Minimap projection: world metres to a 0..1 square.
export function toMinimap(x, z) {
  return {
    u: (x - WORLD_BOUNDS.minX) / (WORLD_BOUNDS.maxX - WORLD_BOUNDS.minX),
    v: (z - WORLD_BOUNDS.minZ) / (WORLD_BOUNDS.maxZ - WORLD_BOUNDS.minZ),
  };
}

// Keyboard map: WASD and arrows move, Shift sprints, Alt walks, E acts,
// F gets in or out, V changes the camera, M toggles the minimap.
export function keyAction(code) {
  switch (code) {
    case "KeyW": case "ArrowUp": return "forward";
    case "KeyS": case "ArrowDown": return "back";
    case "KeyA": case "ArrowLeft": return "left";
    case "KeyD": case "ArrowRight": return "right";
    case "ShiftLeft": case "ShiftRight": return "sprint";
    case "AltLeft": case "AltRight": return "walk";
    case "Space": return "jump";
    case "KeyE": case "Enter": return "interact";
    case "KeyF": return "vehicle";
    case "KeyV": return "camera";
    case "KeyM": return "map";
    default: return null;
  }
}

// Movement input from the held actions: x is right, y is forward.
export function inputFrom(held) {
  return {
    x: (held.has("right") ? 1 : 0) - (held.has("left") ? 1 : 0),
    y: (held.has("forward") ? 1 : 0) - (held.has("back") ? 1 : 0),
    sprint: held.has("sprint"),
    walk: held.has("walk"),
    jump: held.has("jump"),
  };
}

// Only react to keys when the learner is not typing somewhere.
export function canUseKeys(target) {
  if (!target) return true;
  const tag = target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable) return false;
  return true;
}

// Moving traffic: one car per entry, looping along its lane. A car slows
// to a stop when the learner (or the car ahead) is in its way.
export function stepTraffic(cars, player, dt, blockers = []) {
  const step = Math.min(Math.max(dt, 0), 0.1);
  return cars.map((car) => {
    const ahead = (x) => (x - car.x) * car.dir;
    let free = Infinity;
    if (Math.abs(player.z - car.lane) < 1.9) {
      const gap = ahead(player.x);
      if (gap > 0) free = Math.min(free, gap - 2.6);
    }
    for (const other of [...cars, ...blockers]) {
      if (other === car || Math.abs((other.lane ?? other.z) - car.lane) > 0.5) continue;
      const gap = ahead(other.x);
      if (gap > 0) free = Math.min(free, gap - 5.2);
    }
    const goal = free < 0.5 ? 0 : Math.min(car.cruise, free * 1.4);
    const speed = goal > car.speed ? Math.min(goal, car.speed + 6 * step) : Math.max(goal, car.speed - 14 * step);
    let x = car.x + car.dir * speed * step;
    if (x > TRAFFIC_SPAN) x -= TRAFFIC_SPAN * 2;
    if (x < -TRAFFIC_SPAN) x += TRAFFIC_SPAN * 2;
    return { ...car, x, speed };
  });
}
