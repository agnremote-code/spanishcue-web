// Noche Abierta · the walkable 3D neighbourhood as data plus pure movement
// logic. Units are metres: x grows east, z grows south, y is up. The avenue
// runs east–west along z = 0 and the cross street north–south along x = 0.
// Everything here is plain data so it can be tested without WebGL; the
// renderer (World3D.tsx) only draws what this file describes.

export const WORLD_BOUNDS = { minX: -44, maxX: 44, minZ: -40, maxZ: 38 };
export const ROAD_HALF = 4;
export const SIDEWALK = 3.2;
export const PLAYER_RADIUS = 0.35;
export const WALK_SPEED = 2.4;
export const RUN_SPEED = 5.2;
export const TURN_SPEED = 2.6;

// Where the learner gets off the bus, facing north up the cross street.
export const SPAWN = { x: 5.6, z: 24, heading: Math.PI };

// Buildings: footprint (x0..x1, z0..z1), height h, style and optional door.
// `door.side` is the facade the door is on; `door.at` is along that facade.
export const BUILDINGS = [
  { id: "cafe", x0: -16, x1: -8, z0: -16, z1: -8, h: 5.2, style: "cafe", location: "cafe", sign: "CAFÉ MARTINA", door: { side: "south", at: -11.5 } },
  { id: "departamento", x0: -31, x1: -18, z0: -24, z1: -8, h: 21, style: "cream", location: "departamento", door: { side: "south", at: -24.5 } },
  { id: "norte-fondo", x0: -16, x1: -8, z0: -30, z1: -18, h: 13, style: "slate" },
  { id: "norte-oeste", x0: -44, x1: -33, z0: -22, z1: -8, h: 9, style: "brick" },
  { id: "restaurante", x0: 8, x1: 19, z0: -16, z1: -8, h: 6, style: "restaurant", location: "restaurante", sign: "EL TOLDO" },
  { id: "terraza", x0: 22, x1: 32, z0: -22, z1: -8, h: 25, style: "teal", location: "terraza", door: { side: "south", at: 27 }, rooftop: true },
  { id: "este-fondo", x0: 8, x1: 19, z0: -30, z1: -19, h: 15, style: "slate" },
  { id: "este-final", x0: 34, x1: 44, z0: -20, z1: -8, h: 11, style: "brick" },
  { id: "tienda", x0: -16, x1: -8, z0: 8, z1: 15, h: 4.6, style: "store", location: "tienda", sign: "ALMACÉN 24 H", door: { side: "north", at: -12 } },
  { id: "sur-oeste", x0: -31, x1: -19, z0: 8, z1: 20, h: 10, style: "plaster" },
  { id: "sur-fondo", x0: -16, x1: -8, z0: 18, z1: 28, h: 8, style: "brick" },
  { id: "sur-final", x0: -44, x1: -34, z0: 8, z1: 18, h: 7, style: "cream" },
];

// The plaza occupies the south-east block; it has no walls, only props.
export const PLAZA = { x0: 8, x1: 34, z0: 8, z1: 32, fountain: { x: 20, z: 19, r: 2.6 } };

// Parked and ambient vehicles. The taxi and the broken car are interactive.
export const VEHICLES = [
  { id: "taxi", kind: "taxi", x: 22, z: -2.4, heading: Math.PI, location: "taxi" },
  { id: "auto-roto", kind: "broken", x: -21, z: 2.4, heading: 0, location: "auto", hoodOpen: true },
  { id: "parked-1", kind: "sedan", x: -34, z: -2.4, heading: Math.PI, color: "#6e2a25" },
  { id: "parked-2", kind: "sedan", x: 29, z: 2.4, heading: 0, color: "#2f4f6a" },
  { id: "parked-3", kind: "coupe", x: 2.4, z: -22, heading: -Math.PI / 2, color: "#8fb7c9" },
  { id: "parked-4", kind: "sedan", x: -2.4, z: 16, heading: Math.PI / 2, color: "#3b3b3f" },
  { id: "parked-5", kind: "coupe", x: 36, z: -2.4, heading: Math.PI, color: "#c9a24a" },
];
export const VEHICLE_SIZE = { length: 4.3, width: 1.8 };
// Vehicles are modelled along +x; heading h points them to (cos h, sin h).
// Traffic keeps right: westbound in the north lane, eastbound in the south one.

// Street furniture that blocks walking: the bus shelter, the restaurant's
// outdoor table (with the friends sitting at it) and the overpass pillars.
export const SOLID_PROPS = [
  { id: "refugio", x0: 6.8, x1: 7.3, z0: 25, z1: 29 },
  { id: "mesa-afuera", x0: 10.8, x1: 16, z0: -7.4, z1: -5.1 },
  { id: "pilar-oeste", x0: -6.2, x1: -5.2, z0: 34.2, z1: 35.8 },
  { id: "pilar-este", x0: 5.2, x1: 6.2, z0: 34.2, z1: 35.8 },
];
export const OVERPASS = { x0: -16, x1: 16, z0: 33.5, z1: 36.5, y: 5.6 };

// People in the street. `location` makes them part of an encounter.
export const NPCS = [
  { id: "mujer-farol", x: -6.4, z: 6.2, facing: -Math.PI / 4, location: "esquina", look: { shirt: "#3c6e71", hair: "#1d1410", skin: "#c68b62" } },
  { id: "chofer-roto", x: -21, z: 5.4, facing: Math.PI, location: "auto", look: { shirt: "#3f6d8c", hair: "#3a2a1e", skin: "#e0b089" } },
  { id: "vendedor", x: 17.4, z: 15.6, facing: 0.4, location: "plaza", look: { shirt: "#6b8f4e", hair: "#161616", skin: "#8d5b3c" } },
  { id: "ciclista", x: 22.6, z: 15.2, facing: -0.5, location: "plaza", look: { shirt: "#d9c46a", hair: "#5a3b22", skin: "#e7c19d" }, bike: true },
  { id: "amigos-1", x: 11.6, z: -6.5, facing: 0, location: "restaurante", seated: true, look: { shirt: "#8a3d5c", hair: "#2a1a12", skin: "#d49d74" } },
  { id: "amigos-2", x: 13.4, z: -6.5, facing: 0, location: "restaurante", seated: true, look: { shirt: "#e0d6c2", hair: "#0f0f0f", skin: "#7a4b30" } },
  { id: "amigos-3", x: 15.2, z: -6.5, facing: 0, location: "restaurante", seated: true, look: { shirt: "#4a5d8a", hair: "#c49a5a", skin: "#f0caa5" } },
  { id: "parada", x: 6.3, z: 26.4, facing: Math.PI, look: { shirt: "#7d7466", hair: "#9a9a9a", skin: "#c99a74" } },
  { id: "paseante-1", x: -5.8, z: -20, facing: 0, walk: { axis: "z", from: -30, to: -9, speed: 1.1 }, look: { shirt: "#c47a3a", hair: "#241812", skin: "#b57d57" } },
  { id: "paseante-2", x: 30, z: 5.8, facing: -Math.PI / 2, walk: { axis: "x", from: 9, to: 40, speed: 1.2 }, look: { shirt: "#324a3e", hair: "#3b2618", skin: "#e2b48c" } },
];

// Interaction targets: what the learner can walk up to. Each maps an existing
// lesson place to a spot in the street, a key, a prompt and where the
// encounter happens (the street itself, an interior or the rooftop).
export const TARGETS = [
  { id: "puerta-cafe", location: "cafe", x: -11.5, z: -6.9, radius: 1.8, key: "E", verb: "ENTRAR", stage: "interior-cafe" },
  { id: "puerta-departamento", location: "departamento", x: -24.5, z: -6.9, radius: 1.8, key: "E", verb: "ENTRAR", stage: "interior-departamento" },
  { id: "mujer-farol", location: "esquina", x: -5.3, z: 5.1, radius: 2.2, key: "E", verb: "HABLAR", stage: "calle", npc: "mujer-farol", shot: { camera: { x: -1.6, y: 2.2, z: 3 }, look: { x: -5.9, y: 1.4, z: 5.7 } } },
  { id: "taxi", location: "taxi", x: 22, z: -4.6, radius: 2.3, key: "F", verb: "SUBIR", stage: "taxi", vehicle: "taxi" },
  { id: "mesa-restaurante", location: "restaurante", x: 13.4, z: -4.3, radius: 1.6, key: "E", verb: "SENTARME", stage: "calle", shot: { camera: { x: 17.4, y: 2.5, z: -1.4 }, look: { x: 13.4, y: 1, z: -5.6 } } },
  { id: "plaza-fuente", location: "plaza", x: 20, z: 15.4, radius: 2.6, key: "E", verb: "HABLAR", stage: "calle", npc: "vendedor", shot: { camera: { x: 21.8, y: 2.3, z: 10.4 }, look: { x: 18.8, y: 1.3, z: 15.4 } } },
  { id: "puerta-tienda", location: "tienda", x: -12, z: 6.9, radius: 1.8, key: "E", verb: "ENTRAR", stage: "interior-tienda" },
  { id: "puerta-terraza", location: "terraza", x: 27, z: -6.9, radius: 1.8, key: "E", verb: "SUBIR", stage: "terraza" },
  { id: "auto-roto", location: "auto", x: -21, z: 4.3, radius: 2.4, key: "E", verb: "ACERCARME", stage: "calle", npc: "chofer-roto", vehicle: "auto-roto", shot: { camera: { x: -15.9, y: 2.3, z: 7.5 }, look: { x: -21.3, y: 1.2, z: 3.9 } } },
];

// Focused micro-worlds. Interiors sit far outside the street so they never
// overlap it; the rooftop is the real roof of the terraza building.
export const STAGES = {
  "interior-cafe": { origin: { x: 200, z: 0 }, size: { w: 12, d: 9 }, spot: { x: 200, z: 2.6, heading: Math.PI }, camera: { x: 203.6, y: 2.2, z: 5.4 }, look: { x: 199, y: 1.2, z: -1.2 } },
  "interior-departamento": { origin: { x: 240, z: 0 }, size: { w: 12, d: 10 }, spot: { x: 240, z: 3, heading: Math.PI }, camera: { x: 236, y: 2.4, z: 5.8 }, look: { x: 241, y: 1.2, z: -1.4 } },
  "interior-tienda": { origin: { x: 280, z: 0 }, size: { w: 11, d: 12 }, spot: { x: 280, z: 3.6, heading: Math.PI }, camera: { x: 283.4, y: 2.3, z: 6.4 }, look: { x: 279, y: 1.2, z: -1.5 } },
  terraza: { origin: { x: 27, z: -15 }, roof: 25, spot: { x: 27, z: -11.5, heading: Math.PI }, camera: { x: 31, y: 28.2, z: -7.6 }, look: { x: 25, y: 25.8, z: -16 } },
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
  // Perpendicular to the line between the two people, on the open side.
  let side = { x: -dz / length, z: dx / length };
  const probe = { x: mid.x + side.x * 4, z: mid.z + side.z * 4 };
  if (insideBuilding(probe.x, probe.z, 0.2)) side = { x: -side.x, z: -side.z };
  return {
    camera: { x: mid.x + side.x * 4.2 - (dx / length) * 1.2, y: 2.1, z: mid.z + side.z * 4.2 - (dz / length) * 1.2 },
    look: { x: mid.x, y: 1.25, z: mid.z },
  };
}

// Solid boxes used for collision: buildings, vehicles, the fountain basin,
// street furniture and people standing still. Interiors are separate stages.
export function colliders() {
  const boxes = BUILDINGS.map((b) => ({ x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1 }));
  for (const v of VEHICLES) {
    const along = Math.abs(Math.cos(v.heading)) > 0.5;
    const hx = (along ? VEHICLE_SIZE.length : VEHICLE_SIZE.width) / 2;
    const hz = (along ? VEHICLE_SIZE.width : VEHICLE_SIZE.length) / 2;
    boxes.push({ x0: v.x - hx, x1: v.x + hx, z0: v.z - hz, z1: v.z + hz, vehicle: v.id });
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

function blocked(x, z, boxes, radius) {
  if (x < WORLD_BOUNDS.minX + radius || x > WORLD_BOUNDS.maxX - radius || z < WORLD_BOUNDS.minZ + radius || z > WORLD_BOUNDS.maxZ - radius) return true;
  return boxes.some((b) => x > b.x0 - radius && x < b.x1 + radius && z > b.z0 - radius && z < b.z1 + radius);
}

export function isWalkable(x, z, boxes = SOLIDS) {
  return !blocked(x, z, boxes, PLAYER_RADIUS);
}

// One simulation step. Input: forward (-1..1), turn (-1..1), run. The avatar
// turns with A/D, walks along its heading with W/S and slides along walls.
export function stepPlayer(player, input, dt, boxes = SOLIDS) {
  const step = Math.min(Math.max(dt, 0), 0.1);
  const heading = player.heading + (input.turn || 0) * TURN_SPEED * step;
  const forward = Math.max(-1, Math.min(1, input.forward || 0));
  const speed = (input.run && forward > 0 ? RUN_SPEED : WALK_SPEED) * (forward < 0 ? 0.6 : 1);
  const dx = Math.sin(heading) * forward * speed * step;
  const dz = Math.cos(heading) * forward * speed * step;
  let { x, z } = player;
  if (!blocked(x + dx, z, boxes, PLAYER_RADIUS)) x += dx;
  if (!blocked(x, z + dz, boxes, PLAYER_RADIUS)) z += dz;
  const moved = Math.hypot(x - player.x, z - player.z);
  return { x, z, heading, speed: step > 0 ? moved / step : 0, moving: moved > 1e-4 };
}

// The nearest target the learner is standing close to, if any.
export function nearestTarget(player, targets = TARGETS) {
  let best = null;
  let bestDistance = Infinity;
  for (const target of targets) {
    const distance = Math.hypot(target.x - player.x, target.z - player.z);
    if (distance <= target.radius && distance < bestDistance) {
      best = target;
      bestDistance = distance;
    }
  }
  return best;
}

// Third-person follow camera: behind and above the avatar, looking slightly
// ahead. It is pulled in when a building would sit between it and the player.
export const CAMERA_PRESETS = [
  { id: "cerca", distance: 4.6, height: 2.3, ahead: 2.2 },
  { id: "media", distance: 6.4, height: 3.4, ahead: 3 },
  { id: "alta", distance: 9, height: 6.2, ahead: 2 },
];

export function followCamera(player, preset, yawOffset = 0) {
  const angle = player.heading + Math.PI + yawOffset;
  const look = { x: player.x + Math.sin(player.heading) * preset.ahead, y: 1.3, z: player.z + Math.cos(player.heading) * preset.ahead };
  let distance = preset.distance;
  for (let d = 0.4; d <= preset.distance; d += 0.2) {
    const px = player.x + Math.sin(angle) * d;
    const pz = player.z + Math.cos(angle) * d;
    if (insideBuilding(px, pz, 0.3)) { distance = Math.max(0.2, d - 0.4); break; }
  }
  // With a wall close behind the avatar the camera rises and looks down instead.
  const y = preset.height * (distance / preset.distance) + 0.6 + Math.max(0, 2.6 - distance) * 1.6;
  return { x: player.x + Math.sin(angle) * distance, y, z: player.z + Math.cos(angle) * distance, look };
}

// Where the avatar stands when an encounter ends: back in the street, just
// outside the door or beside the vehicle.
export function exitSpot(target) {
  const door = BUILDINGS.find((b) => b.location === target.location && b.door);
  const heading = door?.door.side === "north" ? Math.PI : 0;
  return { x: target.x, z: target.z + (door?.door.side === "north" ? -0.6 : door ? 0.6 : 0), heading };
}

// Minimap projection: world metres to a 0..1 square.
export function toMinimap(x, z) {
  return {
    u: (x - WORLD_BOUNDS.minX) / (WORLD_BOUNDS.maxX - WORLD_BOUNDS.minX),
    v: (z - WORLD_BOUNDS.minZ) / (WORLD_BOUNDS.maxZ - WORLD_BOUNDS.minZ),
  };
}

// Keyboard map: WASD and arrows move, Shift runs, E acts, F gets in or out,
// V changes the camera, M toggles the minimap. Returns null for other keys.
export function keyAction(code) {
  switch (code) {
    case "KeyW": case "ArrowUp": return "forward";
    case "KeyS": case "ArrowDown": return "back";
    case "KeyA": case "ArrowLeft": return "left";
    case "KeyD": case "ArrowRight": return "right";
    case "ShiftLeft": case "ShiftRight": return "run";
    case "KeyE": case "Enter": return "interact";
    case "KeyF": return "vehicle";
    case "KeyV": return "camera";
    case "KeyM": return "map";
    default: return null;
  }
}

// Movement input from the held actions.
export function inputFrom(held) {
  return {
    forward: (held.has("forward") ? 1 : 0) - (held.has("back") ? 1 : 0),
    turn: (held.has("left") ? 1 : 0) - (held.has("right") ? 1 : 0),
    run: held.has("run"),
  };
}

// Only react to keys when the learner is not typing somewhere.
export function canUseKeys(target) {
  if (!target) return true;
  const tag = target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable) return false;
  return true;
}
