// La boda · Estancia Los Aromos in 3D: the pampa at sunset going to night,
// the gate with its arch, the avenue of aromos in bloom, the white chapel,
// the main house with its galería, the gardens with the long tables under
// string lights, the asado, the big white tent with the band, the dance
// floor and the bar, the red barn, the pond with its jetty. Original
// procedural geometry and canvas textures only; people come from Noche
// abierta's people3d and the player is the SpanishCue mascot (hero3d).
// Static pieces are merged by material (batchStatic).
import * as THREE from 'three';
import { batchStatic, canvas, random } from '../noche-abierta/build3d';
import { addBlobShadow, animatePerson, createPerson, setMood, setPose, type Look, type Person } from '../noche-abierta/people3d';
import { BOUNDS, CHAPEL, CHAPEL_H, CHATTER, CROWD, DANCE, DOORS, FILLERS, FURNITURE, HOUSE, HOUSE_H, JETTY, POND, SCENES, TENT, WALKERS, WALL, WALLS, type Walker, walkerAt } from './layout.mjs';
import { B, C, IRON, SEAT_TOP, WOOD, add, buildItem, mapped, std, textTexture, type Anim, type Item } from './estancia-items';
// Feet on top of the 1 cm dance floor, not inside it.
const floorAt = (x: number, z: number) => (x > DANCE.x0 && x < DANCE.x1 && z > DANCE.z0 && z < DANCE.z1 ? 0.025 : 0);
// Sad and sleepy people slump on their seat: lift them so their hips stay on it.
const seatLift = (seat: unknown, mood?: string) => (seat && (mood === 'sad' || mood === 'sleepy') ? 0.035 : 0);

export type Npc = { person: Person; scene?: string; main?: boolean; x: number; z: number; y: number; heading: number; baseMood: string; seated?: boolean; talk?: string; body?: string; seed: number; angryUntil?: number };
export type Mover = { walker: Walker; person: Person; offset: number; x: number; z: number; moving?: boolean; body?: string; seed: number; angryUntil?: number; heading?: number };
export type Spot = { id: string; group: THREE.Group; ring: THREE.Mesh; gem: THREE.Mesh; material: THREE.MeshBasicMaterial };
export type Body = { x: number; z: number; radius?: number; who: Npc | Mover };
export type Estancia = {
  npcs: Npc[];
  movers: Mover[];
  spots: Spot[];
  animate: (t: number, dt: number, px: number, pz: number) => void;
  setSceneMood: (id: string | null, mood: string | null) => void;
  /** The night follows the lesson: 0 at 17:00, 1 at midnight, 2 at dawn. */
  setNight: (phase: number) => void;
  night: () => number;
  bodies: () => Body[];
  say: (who: Npc | Mover, text: string, seconds?: number, yell?: boolean) => void;
};

// People currently speaking in an open scene.
export const talking = new WeakSet<Person>();

// ---------------------------------------------------------------- textures
function grass(seed: number) {
  const rand = random(seed);
  return canvas(256, 256, ctx => {
    ctx.fillStyle = '#6a8a3a'; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 3000; i++) { ctx.fillStyle = rand() < 0.5 ? 'rgba(40,70,20,.25)' : 'rgba(150,170,80,.2)'; ctx.fillRect(rand() * 256, rand() * 256, 1 + rand() * 2, 2 + rand() * 4); }
    for (let i = 0; i < 40; i++) { ctx.fillStyle = ['#f4f0ea', '#f0d030', '#c8a0e0'][i % 3]; ctx.fillRect(rand() * 256, rand() * 256, 2, 2); }
  }, true);
}
function gravel(seed: number) {
  const rand = random(seed);
  return canvas(256, 256, ctx => {
    ctx.fillStyle = '#c8b898'; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 2600; i++) { ctx.fillStyle = rand() < 0.5 ? 'rgba(90,70,50,.25)' : 'rgba(255,250,240,.25)'; ctx.beginPath(); ctx.arc(rand() * 256, rand() * 256, 0.8 + rand() * 1.6, 0, Math.PI * 2); ctx.fill(); }
  }, true);
}
function bricks() {
  return canvas(256, 256, ctx => {
    ctx.fillStyle = '#b8603a'; ctx.fillRect(0, 0, 256, 256);
    const rand = random(12);
    for (let r = 0; r < 16; r++) for (let q = 0; q < 8; q++) { ctx.fillStyle = `rgba(${rand() < 0.5 ? '255,200,170' : '60,20,10'},${rand() * 0.15})`; ctx.fillRect(q * 32 + (r % 2) * 16, r * 16, 31, 15); }
    ctx.strokeStyle = 'rgba(230,220,200,.6)'; ctx.lineWidth = 1.5;
    for (let r = 0; r <= 16; r++) { ctx.beginPath(); ctx.moveTo(0, r * 16); ctx.lineTo(256, r * 16); ctx.stroke(); }
  }, true);
}
function tiles() {
  return canvas(256, 256, ctx => {
    ctx.fillStyle = '#9a4a32'; ctx.fillRect(0, 0, 256, 256);
    for (let r = 0; r < 8; r++) { ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(0, r * 32 + 26, 256, 6); for (let q = 0; q < 8; q++) { ctx.fillStyle = 'rgba(255,220,180,.08)'; ctx.fillRect(q * 32 + (r % 2) * 16, r * 32, 14, 26); } }
  }, true);
}
function plaster(color: string, seed: number) {
  const rand = random(seed);
  return canvas(128, 128, ctx => {
    ctx.fillStyle = color; ctx.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 500; i++) { ctx.fillStyle = `rgba(0,0,0,${rand() * 0.035})`; ctx.fillRect(rand() * 128, rand() * 128, 2, 2); }
  }, true);
}
function wood(seed: number, tone = '#a8774a') {
  const rand = random(seed);
  return canvas(256, 256, ctx => {
    ctx.fillStyle = tone; ctx.fillRect(0, 0, 256, 256);
    for (let r = 0; r < 16; r++) { ctx.fillStyle = `rgba(${rand() < 0.5 ? '255,240,220' : '40,20,10'},${rand() * 0.18})`; ctx.fillRect(0, r * 16, 256, 16); ctx.fillStyle = 'rgba(40,20,8,.35)'; ctx.fillRect(0, r * 16, 256, 1); }
  }, true);
}
function bubbleTexture(text: string, yell = false) {
  return canvas(512, 128, ctx => {
    ctx.fillStyle = yell ? 'rgba(200,20,20,.96)' : 'rgba(255,255,255,.94)';
    ctx.beginPath(); ctx.roundRect(8, 8, 496, 92, 26); ctx.fill();
    ctx.beginPath(); ctx.moveTo(230, 98); ctx.lineTo(256, 124); ctx.lineTo(270, 98); ctx.fill();
    ctx.fillStyle = yell ? '#ffffff' : '#1a2230'; ctx.font = `${yell ? 800 : 600} ${text.length > 30 ? 24 : 30}px Arial, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text.length > 44 ? text.slice(0, 43) + '…' : text, 256, 54);
  });
}

// ---------------------------------------------------------------- people
const SEATING = new Set(['chairs', 'pew', 'bench', 'rocker', 'roundtable']);
function seatUnder(x: number, z: number) {
  return (FURNITURE as Item[]).some(item => {
    if (!SEATING.has(item.type)) return false;
    const turned = item.rot === 1 || item.rot === 3, w = turned ? item.d : item.w, d = turned ? item.w : item.d;
    return x > item.x - w / 2 - 0.3 && x < item.x + w / 2 + 0.3 && z > item.z - d / 2 - 0.3 && z < item.z + d / 2 + 0.3;
  });
}
function makePerson(look: Look, pose: string, opts: { seat?: boolean; mood?: string }) {
  const person = createPerson(look, false);
  person.root.userData.person = true; // the no-ghost QA check finds people by this tag
  const seated = Boolean(opts.seat) || pose === 'sit';
  setPose(person, pose, seated);
  if (opts.mood) setMood(person, opts.mood);
  addBlobShadow(person, 0.8);
  return person;
}
// Wedding guests: suits, long dresses, a few hats. Seated ones wear pants.
const GUEST_LOOKS: Look[] = [
  { skin: '#e8c0a0', age: 'old', body: 'f', hairStyle: 'curly', hairColor: '#d8d0e0', top: 'dress', topColor: '#3a6aa8', extras: ['glasses', 'earrings'] },
  { skin: '#c48f69', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#1a1210', top: 'suit', topColor: '#2a3a5a', bottom: 'pants', bottomColor: '#2a3a5a' },
  { skin: '#8d5a3c', age: 'adult', body: 'f', hairStyle: 'long', hairColor: '#120d0b', top: 'dress', topColor: '#d43a6a', extras: ['earrings'] },
  { skin: '#f0d0b4', age: 'old', body: 'm', hairStyle: 'bald', hairColor: '#999', top: 'suit', topColor: '#5a4a3a', bottom: 'pants', bottomColor: '#3a3028', extras: ['glasses', 'mustache'] },
  { skin: '#b9825c', age: 'young', body: 'm', hairStyle: 'curly', hairColor: '#2a1a12', top: 'shirt', topColor: '#f4f0ea', bottom: 'pants', bottomColor: '#141418' },
  { skin: '#dcae88', age: 'adult', body: 'f', hairStyle: 'bun', hairColor: '#6a2a18', top: 'dress', topColor: '#2a8a6a', extras: ['earrings'] },
  { skin: '#e2b896', age: 'elderly', body: 'm', hairStyle: 'short', hairColor: '#e8e8e8', top: 'suit', topColor: '#3a3a30', bottom: 'pants', bottomColor: '#2a2a2a', extras: ['hat'] },
  { skin: '#c99468', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#120d0b', top: 'suit', topColor: '#141418', bottom: 'pants', bottomColor: '#141418', extras: ['beard'] },
  { skin: '#f0d6c0', age: 'young', body: 'f', hairStyle: 'bob', hairColor: '#e0c070', top: 'dress', topColor: '#e0a020', extras: ['earrings'] },
];
const seatedLook = (look: Look, i: number): Look => look.top === 'dress' ? { ...look, top: 'shirt', topColor: look.topColor, bottom: 'pants', bottomColor: ['#2a2a30', '#3a2a3a', '#1a2a3a'][i % 3] } : look;
const MARIACHI: Look = { skin: '#c48f69', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#120d0b', top: 'suit', topColor: '#141418', bottom: 'pants', bottomColor: '#141418', extras: ['hat', 'mustache'] };

// ---------------------------------------------------------------- spots
function buildSpot(id: string, x: number, z: number): Spot {
  const group = new THREE.Group();
  group.position.set(x, 0.03, z);
  const material = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.9, depthWrite: false, toneMapped: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.98, 1.18, 48), material);
  ring.rotation.x = -Math.PI / 2;
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.98, 48), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.12, depthWrite: false, toneMapped: false }));
  disc.rotation.x = -Math.PI / 2;
  const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.11), material);
  gem.position.y = 2.3;
  group.add(ring, disc, gem);
  return { id, group, ring, gem, material };
}

// ---------------------------------------------------------------- ground, paths, pond
function buildGround(g: THREE.Group) {
  // The lawn has a hole where the pond is; the water sits a little lower.
  const shape = new THREE.Shape();
  const E = 260;
  shape.moveTo(-E, -E); shape.lineTo(E, -E); shape.lineTo(E, E); shape.lineTo(-E, E); shape.lineTo(-E, -E);
  const hole = new THREE.Path(); hole.absellipse(POND.x, POND.z, POND.rx + 0.4, POND.rz + 0.4, 0, Math.PI * 2, false, 0); shape.holes.push(hole);
  const tex = grass(3); tex.repeat.set(0.25, 0.25);
  const lawn = new THREE.Mesh(new THREE.ShapeGeometry(shape, 48), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95 }));
  lawn.rotation.x = Math.PI / 2; lawn.scale.y = -1; lawn.receiveShadow = true; g.add(lawn);
  const flat = (x0: number, z0: number, x1: number, z1: number, mat: THREE.Material, y = 0.01) => { const p = add(g, new THREE.PlaneGeometry(x1 - x0, z1 - z0), mat, (x0 + x1) / 2, y, (z0 + z1) / 2); p.rotation.x = -Math.PI / 2; p.receiveShadow = true; return p; };
  const gr = (w: number, d: number) => { const t = gravel(9); t.repeat.set(w / 3, d / 3); return new THREE.MeshStandardMaterial({ map: t, roughness: 0.95 }); };
  // The gravel avenue, the parking lot, the paths to every place.
  flat(-2.4, -18, 2.4, 46, gr(4.8, 64));
  flat(-24, 31, 26, 44, gr(50, 13));
  flat(-22, 22, -2.4, 24.6, gr(20, 2.6));
  flat(2.4, 4.6, 16, 7, gr(14, 2.4));
  flat(-16, -18.4, 16, -16.6, gr(32, 1.8));
  flat(16, -24, 40, -21.6, gr(24, 2.4));
  flat(-22, -31, -2.4, -29, gr(20, 2));
  // Brick under the galería, wood under the tent, a dirt yard at the barn.
  const brick = bricks(); brick.repeat.set(16, 2);
  flat(HOUSE.x0, HOUSE.z1, HOUSE.x1, HOUSE.porch, new THREE.MeshStandardMaterial({ map: brick, roughness: 0.8 }), 0.012);
  const deck = wood(4, '#c8a878'); deck.repeat.set(8, 10);
  flat(TENT.x0, TENT.z0, TENT.x1, TENT.z1, new THREE.MeshStandardMaterial({ map: deck, roughness: 0.6 }), 0.012);
  flat(18, -35, 41, -24, std('#8a6a48', 1), 0.008);
  // Inside the house and the chapel: wooden floors and stone.
  const parquet = wood(7, '#a8774a'); parquet.repeat.set(12, 5);
  flat(HOUSE.x0, HOUSE.z0, HOUSE.x1, HOUSE.z1, new THREE.MeshStandardMaterial({ map: parquet, roughness: 0.5 }), 0.014);
  flat(CHAPEL.x0, CHAPEL.z0, CHAPEL.x1, CHAPEL.z1, std('#d8d0c0', 0.5), 0.014);
  // The pond: a muddy bank, the water, lily pads.
  const bank = add(g, new THREE.RingGeometry(1, 1.06, 48), std('#6a5a3a', 1), POND.x, -0.02, POND.z); bank.rotation.x = -Math.PI / 2; bank.scale.set(POND.rx + 0.4, POND.rz + 0.4, 1);
  const bed = add(g, new THREE.CircleGeometry(1, 48), std('#3a3a24', 1), POND.x, -0.5, POND.z); bed.rotation.x = -Math.PI / 2; bed.scale.set(POND.rx + 0.5, POND.rz + 0.5, 1);
  const water = add(g, new THREE.CircleGeometry(1, 48), new THREE.MeshStandardMaterial({ color: '#3a6a7a', roughness: 0.08, metalness: 0.3, transparent: true, opacity: 0.88 }), POND.x, -0.12, POND.z);
  water.rotation.x = -Math.PI / 2; water.scale.set(POND.rx + 0.4, POND.rz + 0.4, 1);
  const rand = random(31);
  for (let i = 0; i < 14; i++) { const a = rand() * Math.PI * 2, r = 0.4 + rand() * 0.5; const pad = add(g, new THREE.CircleGeometry(0.3, 10), std('#4a7a3a', 0.8), POND.x + Math.cos(a) * POND.rx * r, -0.1, POND.z + Math.sin(a) * POND.rz * r); pad.rotation.x = -Math.PI / 2; }
  return water.material as THREE.MeshStandardMaterial;
}

// ---------------------------------------------------------------- walls and roofs
function wallSegment(g: THREE.Group, seg: (number | string)[], mats: Record<string, THREE.Material>) {
  const [x0, z0, x1, z1] = seg as number[];
  const kind = String(seg[4]);
  const len = Math.hypot(x1 - x0, z1 - z0);
  const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
  const ry = x0 === x1 ? Math.PI / 2 : 0;
  if (kind === 'fence') {
    for (let t = 0; t <= len + 0.01; t += 2.4) { const k = len ? t / len : 0; add(g, B(0.12, 1.2, 0.12), mats.post, x0 + (x1 - x0) * k, 0.6, z0 + (z1 - z0) * k); }
    for (const y of [0.45, 0.9]) add(g, B(len, 0.1, 0.05), mats.rail, cx, y, cz, ry);
    return;
  }
  if (kind === 'hedge') { add(g, B(len, 1.2, 0.9), mats.hedge, cx, 0.6, cz, ry); for (let t = 0.4; t < len; t += 0.7) { const k = t / len; add(g, new THREE.SphereGeometry(0.1, 6, 4), mats.rose, x0 + (x1 - x0) * k, 1.05 + (t % 1.4 > 0.7 ? 0.1 : 0), z0 + (z1 - z0) * k + (t % 2 > 1 ? 0.46 : -0.46)); } return; }
  const chapel = kind.startsWith('chapel');
  const H = chapel ? CHAPEL_H : HOUSE_H;
  const mat = chapel ? mats.chapel : mats.house;
  if (kind.endsWith('glass')) {
    const sill = chapel ? 1.4 : 0.9, top = chapel ? 3.6 : 2.4;
    add(g, B(len, sill, WALL), mat, cx, sill / 2, cz, ry);
    add(g, B(len, H - top, WALL), mat, cx, (H + top) / 2, cz, ry);
    add(g, B(len, top - sill, 0.03), chapel ? mats.stained : mats.glass, cx, (top + sill) / 2, cz, ry);
    if (!chapel) for (const s of [-1, 1]) add(g, B(ry ? 0.04 : len / 2, top - sill, ry ? len / 2 : 0.04), mats.shutter, cx + (ry ? s * 0.18 : s * (len * 0.75)), (top + sill) / 2, cz + (ry ? s * (len * 0.75) : (cz > -28 ? 0.18 : -0.18)), 0);
    return;
  }
  add(g, B(len + WALL, H, WALL), mat, cx, H / 2, cz, ry);
  add(g, B(len + WALL + 0.02, 0.18, WALL + 0.04), mats.base, cx, 0.09, cz, ry);
}
function gable(g: THREE.Group, x0: number, z0: number, x1: number, z1: number, y: number, rise: number, mat: THREE.Material, alongZ: boolean) {
  // A pitched roof whose ridge runs along z (alongZ) or along x.
  const span = alongZ ? x1 - x0 : z1 - z0, length = alongZ ? z1 - z0 : x1 - x0;
  const shape = new THREE.Shape(); shape.moveTo(-span / 2 - 0.5, 0); shape.lineTo(0, rise); shape.lineTo(span / 2 + 0.5, 0); shape.lineTo(-span / 2 - 0.5, 0);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: length + 0.8, bevelEnabled: false });
  const roof = add(g, geo, mat, 0, y, 0);
  if (alongZ) roof.position.set((x0 + x1) / 2, y, z0 - 0.4);
  else { roof.rotation.y = Math.PI / 2; roof.position.set(x0 - 0.4, y, (z0 + z1) / 2); }
  return roof;
}
function buildBuildings(g: THREE.Group, anim: Anim) {
  const mats: Record<string, THREE.Material> = {
    house: new THREE.MeshStandardMaterial({ map: plaster('#f2ece0', 5), roughness: 0.85 }),
    chapel: new THREE.MeshStandardMaterial({ map: plaster('#f8f6f0', 6), roughness: 0.85 }),
    base: std('#8a7a68', 0.9),
    glass: new THREE.MeshPhysicalMaterial({ color: '#cfe6f2', transparent: true, opacity: 0.25, roughness: 0.05, depthWrite: false }),
    stained: mapped(canvas(128, 256, ctx => { const c = ['#c83a3a', '#3a6ac8', '#f0c020', '#3a9a5a', '#9a4ac8']; for (let r = 0; r < 8; r++) for (let q = 0; q < 4; q++) { ctx.fillStyle = c[(r * 3 + q) % 5]; ctx.fillRect(q * 32, r * 32, 32, 32); } ctx.strokeStyle = '#141414'; ctx.lineWidth = 3; for (let i = 0; i <= 8; i++) { ctx.beginPath(); ctx.moveTo(0, i * 32); ctx.lineTo(128, i * 32); ctx.stroke(); } for (let i = 0; i <= 4; i++) { ctx.beginPath(); ctx.moveTo(i * 32, 0); ctx.lineTo(i * 32, 256); ctx.stroke(); } }), 0.5, 0.3),
    shutter: std('#3a6a5a', 0.7),
    post: std('#6a4a2a', 0.9), rail: std('#8a6a48', 0.9),
    hedge: std('#2f5a2a', 0.95), rose: std('#c81e3a', 0.8),
  };
  for (const seg of WALLS as (number | string)[][]) wallSegment(g, seg, mats);
  // Lintels over the doors and the names of the rooms.
  for (const door of DOORS) {
    const chapel = door.label === 'CAPILLA', H = chapel ? CHAPEL_H : HOUSE_H, top = chapel ? 3.0 : 2.3;
    add(g, B(door.w, H - top, WALL), chapel ? mats.chapel : mats.house, door.x, (H + top) / 2, door.z);
    if (!chapel) { const p = add(g, new THREE.PlaneGeometry(0.8, 0.2), mapped(textTexture(door.label ?? '', '#3a6a5a', '#f4ecd8', 256, 64, 'bold 40px Georgia')), door.x, top + 0.2, door.z + WALL / 2 + 0.01); void p; }
  }
  const tile = new THREE.MeshStandardMaterial({ map: tiles(), roughness: 0.8 });
  (tile.map as THREE.Texture).repeat.set(0.3, 0.3);
  // The house: a tiled roof over the rooms and a lower one over the galería.
  gable(g, HOUSE.x0, HOUSE.z0, HOUSE.x1, HOUSE.z1, HOUSE_H, 2.4, tile, false);
  add(g, B(HOUSE.x1 - HOUSE.x0 + 0.6, 0.12, HOUSE.porch - HOUSE.z1 + 0.6), tile, 0, 3.05, (HOUSE.z1 + HOUSE.porch) / 2);
  add(g, B(HOUSE.x1 - HOUSE.x0 + 0.2, 0.05, HOUSE.z1 - HOUSE.z0), std('#f4f0e8', 0.95), 0, HOUSE_H - 0.02, (HOUSE.z0 + HOUSE.z1) / 2);
  // A chimney and lamps on the galería.
  add(g, B(0.8, 2.6, 0.8), std('#d8ccb8', 0.9), 8, HOUSE_H + 1.8, -30);
  for (const x of [-10, 0, 10]) { const l = add(g, new THREE.SphereGeometry(0.12, 10, 8), std('#fff4dc', 0.4, 0, '#ffd890', 0.3), x, 2.7, -19.2); l.userData.lamp = true; anim.glows.push(l.material as THREE.MeshStandardMaterial); }
  // The chapel: white gable with a bell tower over the door, a cross on top.
  gable(g, CHAPEL.x0, CHAPEL.z0, CHAPEL.x1, CHAPEL.z1, CHAPEL_H, 3.2, std('#5a5a62', 0.6, 0.2), true);
  add(g, B(CHAPEL.x1 - CHAPEL.x0 + 0.2, 0.05, CHAPEL.z1 - CHAPEL.z0), std('#f4f0e8', 0.95), (CHAPEL.x0 + CHAPEL.x1) / 2, CHAPEL_H - 0.02, (CHAPEL.z0 + CHAPEL.z1) / 2);
  const front = new THREE.Shape(); front.moveTo(-5, 0); front.lineTo(0, 3.2); front.lineTo(5, 0); front.lineTo(-5, 0);
  for (const z of [CHAPEL.z0, CHAPEL.z1]) add(g, new THREE.ShapeGeometry(front), mats.chapel, -26, CHAPEL_H, z + (z === CHAPEL.z1 ? 0.13 : -0.13)).rotation.y = z === CHAPEL.z1 ? 0 : Math.PI;
  add(g, B(2.2, 3.6, 2.2), mats.chapel, -26, CHAPEL_H + 3.0, CHAPEL.z1 - 1.0);
  const bell = add(g, new THREE.ConeGeometry(0.4, 0.6, 12, 1, true), std('#b88a3a', 0.3, 0.8), -26, CHAPEL_H + 3.4, CHAPEL.z1 - 1.0); void bell;
  add(g, new THREE.ConeGeometry(1.7, 2.2, 4), std('#5a5a62', 0.6, 0.2), -26, CHAPEL_H + 5.9, CHAPEL.z1 - 1.0).rotation.y = Math.PI / 4;
  add(g, B(0.1, 1.0, 0.1), IRON(), -26, CHAPEL_H + 7.4, CHAPEL.z1 - 1.0); add(g, B(0.5, 0.1, 0.1), IRON(), -26, CHAPEL_H + 7.6, CHAPEL.z1 - 1.0);
  // Inside the chapel: two warm lamps over the altar.
  for (const x of [-28, -24]) { const l = add(g, new THREE.SphereGeometry(0.14, 10, 8), std('#fff4dc', 0.4, 0, '#ffd890', 0.6), x, 3.4, 11); anim.glows.push(l.material as THREE.MeshStandardMaterial); }
  // The big tent: white canvas with a ridge, scalloped eaves, open sides.
  const canvasMat = new THREE.MeshStandardMaterial({ color: '#fbf8f2', roughness: 0.9, side: THREE.DoubleSide, emissive: '#ffe8c0', emissiveIntensity: 0 });
  anim.glows.push(canvasMat);
  const midX = (TENT.x0 + TENT.x1) / 2, half = (TENT.x1 - TENT.x0) / 2, len = TENT.z1 - TENT.z0;
  const slope = Math.hypot(half, TENT.ridge - TENT.h), tilt = Math.atan2(TENT.ridge - TENT.h, half);
  for (const s of [-1, 1]) { const side = new THREE.Group(); side.position.set(midX + s * half / 2, (TENT.h + TENT.ridge) / 2, (TENT.z0 + TENT.z1) / 2); side.rotation.z = -s * tilt; g.add(side); add(side, new THREE.PlaneGeometry(slope + 0.4, len + 0.6), canvasMat).rotation.x = -Math.PI / 2; }
  for (const z of [TENT.z0, TENT.z1]) { const tri = new THREE.Shape(); tri.moveTo(-half, 0); tri.lineTo(0, TENT.ridge - TENT.h); tri.lineTo(half, 0); tri.lineTo(-half, 0); add(g, new THREE.ShapeGeometry(tri), canvasMat, midX, TENT.h, z); }
  for (let x = TENT.x0; x < TENT.x1; x += 1) for (const z of [TENT.z0, TENT.z1]) { const v = add(g, new THREE.SphereGeometry(0.5, 10, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), canvasMat, x + 0.5, TENT.h + 0.02, z); v.scale.set(1, 0.4, 0.15); }
  for (let z = TENT.z0; z < TENT.z1; z += 1) for (const x of [TENT.x0, TENT.x1]) { const v = add(g, new THREE.SphereGeometry(0.5, 10, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), canvasMat, x, TENT.h + 0.02, z + 0.5); v.scale.set(0.15, 0.4, 1); }
  for (const z of [TENT.z0, TENT.z1]) add(g, C(0.09, 0.1, TENT.ridge, 8), std('#f2ece0', 0.6), midX, TENT.ridge / 2, z);
  // A white post-and-rail fence far away round the park.
  const post = std('#e8e0d0', 0.8);
  for (const [ax, az, bx, bz] of [[BOUNDS.minX, BOUNDS.minZ, BOUNDS.maxX, BOUNDS.minZ], [BOUNDS.minX, BOUNDS.minZ, BOUNDS.minX, 30], [BOUNDS.maxX, BOUNDS.minZ, BOUNDS.maxX, 30]] as [number, number, number, number][]) {
    const l = Math.hypot(bx - ax, bz - az);
    for (let t = 0; t <= l; t += 3) add(g, B(0.12, 1.1, 0.12), post, ax + (bx - ax) * t / l, 0.55, az + (bz - az) * t / l);
    for (const y of [0.4, 0.85]) add(g, B(ax === bx ? 0.05 : l, 0.09, ax === bx ? l : 0.05), post, (ax + bx) / 2, y, (az + bz) / 2);
  }
  void WOOD; void JETTY;
}
// Far away: the pampa, rows of trees, a windmill, the silos of a neighbour.
function buildPampa(g: THREE.Group) {
  const rand = random(257);
  const leaf = std('#3a5a2a', 0.95), trunk = std('#6a5a48', 0.95);
  for (let i = 0; i < 90; i++) {
    const a = rand() * Math.PI * 2, r = 70 + rand() * 120;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    add(g, C(0.3, 0.4, 5, 6), trunk, x, 2.5, z);
    const b = add(g, new THREE.SphereGeometry(3 + rand() * 2, 8, 6), leaf, x, 6.5 + rand() * 2, z); b.scale.y = 1.3;
  }
  // A windmill to the west, silos to the east.
  add(g, C(0.15, 0.6, 12, 4), IRON(), -90, 6, 40);
  for (let i = 0; i < 12; i++) { const blade = add(g, B(0.2, 2.4, 0.04), std('#c8c8c8', 0.4, 0.6), -90, 12, 40.5); blade.rotation.z = i * Math.PI / 6; blade.geometry.translate(0, 1.2, 0); }
  for (let i = 0; i < 3; i++) { add(g, C(3, 3, 14, 16), std('#c8ccd0', 0.4, 0.7), 120 + i * 7, 7, -60); add(g, new THREE.ConeGeometry(3.1, 2, 16), std('#b8bcc0', 0.4, 0.7), 120 + i * 7, 15, -60); }
}

// ---------------------------------------------------------------- the whole estancia
export function buildEstancia(scene: THREE.Scene, opts: { low: boolean; shadows: boolean }): Estancia {
  const anim: Anim = { glows: [], bulbs: [], flames: [], sway: [], tails: [], disco: [] };
  const world = new THREE.Group();
  scene.add(world);
  const waterMat = buildGround(world);
  buildBuildings(world, anim);
  for (const item of FURNITURE as Item[]) buildItem(world, item, anim);
  const pampa = new THREE.Group(); buildPampa(pampa); world.add(pampa);
  const moving = [...anim.flames, ...anim.sway.map(s => s.mesh), ...anim.tails.map(t => t.mesh)];
  batchStatic(world, moving);

  // Real lights: the tent, the gardens, the chapel, the house rooms.
  const lamps: THREE.PointLight[] = [];
  for (const [color, x, y, z, intensity, range] of [
    ['#ffd8a0', 29, 3.6, -6, 10, 22], ['#ffd8a0', 29, 3.6, 6, 7, 18], ['#ffe0b0', 0, 3.6, -6, 8, 18], ['#ffd8a0', -26, 3.6, 14, 5, 12],
    ['#fff0d8', -11, 2.6, -28, 4, 9], ['#fff0d8', -1, 2.6, -28, 4, 9], ['#fff0d8', 10, 2.6, -28, 4, 9], ['#ff9a50', -15, 1.6, -5, 4, 7],
  ] as [string, number, number, number, number, number][]) {
    const light = new THREE.PointLight(color, 0, range, 1.6);
    light.position.set(x, y, z); light.userData.base = intensity; scene.add(light); lamps.push(light);
  }
  // The sun going down over the pampa, the moon and the stars, then dawn.
  const sun = new THREE.DirectionalLight('#ffc890', 1.2);
  sun.position.set(-80, 40, 60); scene.add(sun, sun.target);
  const sunDisc = new THREE.Mesh(new THREE.CircleGeometry(9, 24), new THREE.MeshBasicMaterial({ color: '#ffb060', toneMapped: false, fog: false }));
  scene.add(sunDisc);
  const starGeo = new THREE.BufferGeometry();
  const starPos = new Float32Array(900 * 3); const sr = random(77);
  for (let i = 0; i < 900; i++) { const a = sr() * Math.PI * 2, e = 0.12 + sr() * 1.3; starPos.set([Math.cos(a) * Math.cos(e) * 400, Math.sin(e) * 400, Math.sin(a) * Math.cos(e) * 400], i * 3); }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: '#ffffff', size: 1.4, sizeAttenuation: false, transparent: true, opacity: 0, fog: false }));
  scene.add(stars);
  const moon = new THREE.Mesh(new THREE.CircleGeometry(5, 24), new THREE.MeshBasicMaterial({ color: '#f4f0e0', toneMapped: false, fog: false, transparent: true, opacity: 0 }));
  moon.position.set(140, 150, -240); moon.lookAt(0, 0, 0); scene.add(moon);
  // Fireflies over the grass, once it is dark.
  const flyGeo = new THREE.BufferGeometry(); const fr = random(91);
  const flyPos = new Float32Array(160 * 3);
  for (let i = 0; i < 160; i++) flyPos.set([(fr() - 0.5) * 80, 0.4 + fr() * 1.6, (fr() - 0.5) * 80], i * 3);
  flyGeo.setAttribute('position', new THREE.BufferAttribute(flyPos, 3));
  const flies = new THREE.Points(flyGeo, new THREE.PointsMaterial({ color: '#e8ff80', size: 3, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false }));
  scene.add(flies);

  // People at the circles.
  const npcs: Npc[] = [];
  for (const s of SCENES) {
    const people = [{ ...s.npc, pose: s.pose, mood: s.mood, look: s.look, main: true }, ...(s.extras ?? []).map(e => ({ ...e, main: false }))];
    for (const p of people) {
      const anyP = p as typeof p & { seat?: boolean; y?: number };
      const person = makePerson(p.look as Look, p.pose, { seat: anyP.seat, mood: p.mood });
      person.root.position.set(p.x, (anyP.y ?? floorAt(p.x, p.z)) + seatLift(anyP.seat, p.mood), p.z); person.root.rotation.y = p.heading;
      world.add(person.root);
      npcs.push({ person, scene: s.id, main: p.main, x: p.x, z: p.z, y: anyP.y ?? 0, heading: p.heading, baseMood: p.mood ?? 'neutral', seated: anyP.seat || p.pose === 'sit', body: (p.look as Look).body, seed: npcs.length * 31 + 7 });
    }
  }
  // Every other guest: the seventeen who talk, then the ones who only party.
  const crowd = (list: typeof CROWD, talk: boolean) => list.forEach((c, i) => {
    const any = c as typeof c & { mariachi?: boolean };
    const base = any.mariachi ? MARIACHI : GUEST_LOOKS[(i * 4 + (talk ? 0 : 5)) % GUEST_LOOKS.length];
    const look = { ...(c.seat ? seatedLook(base, i) : base), seed: (talk ? 300 : 500) + i * 7 };
    const person = makePerson(look as Look, c.pose, { seat: c.seat, mood: c.mood });
    person.root.position.set(c.x, floorAt(c.x, c.z) + seatLift(c.seat, c.mood), c.z); person.root.rotation.y = c.heading;
    if (c.seat && !seatUnder(c.x, c.z)) console.warn('La boda: a seated guest without a seat', c);
    world.add(person.root);
    npcs.push({ person, x: c.x, z: c.z, y: 0, heading: c.heading, baseMood: c.mood ?? 'neutral', seated: Boolean(c.seat), talk: talk ? String(i) : undefined, body: (look as Look).body, seed: (talk ? 300 : 500) + i });
  });
  crowd(CROWD, true);
  crowd(FILLERS, false);
  // Waiters with trays and children running.
  const movers: Mover[] = [];
  WALKERS.forEach((walker, i) => {
    const person = makePerson(walker.look as Look, 'stand', {});
    if ((walker as Walker & { tray?: boolean }).tray) {
      const tray = new THREE.Group(); tray.position.set(0.32, 1.25, 0.2); person.root.add(tray);
      add(tray, C(0.22, 0.22, 0.02, 16), std('#c8c8c0', 0.3, 0.8));
      for (let k = 0; k < 5; k++) add(tray, C(0.025, 0.02, 0.14, 8), std('#f0e0a0', 0.1, 0.1), Math.sin(k * 1.3) * 0.12, 0.08, Math.cos(k * 1.3) * 0.12);
    }
    world.add(person.root);
    movers.push({ walker, person, offset: i * 13.7, x: walker.path[0][0], z: walker.path[0][1], body: (walker.look as Look).body, seed: 900 + i * 3 });
  });

  const spots = SCENES.map(s => { const spot = buildSpot(s.id, s.spot.x, s.spot.z); world.add(spot.group); return spot; });

  // Speech bubbles.
  const bubbles: { sprite: THREE.Sprite; until: number; npc: Npc | Mover }[] = [];
  let nextBubble = 3, clockNow = 0;
  function say(who: Npc | Mover, text: string, seconds = 3.6, yell = false) {
    const old = bubbles.findIndex(b => b.npc === who);
    if (old >= 0) { const b = bubbles[old]; b.sprite.removeFromParent(); (b.sprite.material as THREE.SpriteMaterial).map?.dispose(); b.sprite.material.dispose(); bubbles.splice(old, 1); }
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: bubbleTexture(text, yell), transparent: true, depthTest: true, toneMapped: false }));
    sprite.scale.set(2.2, 0.55, 1);
    world.add(sprite);
    bubbles.push({ sprite, until: clockNow + seconds, npc: who });
  }
  function setSceneMood(id: string | null, mood: string | null) {
    for (const npc of npcs) if (npc.scene) setMood(npc.person, id && mood && npc.scene === id && npc.main ? mood : npc.baseMood);
  }

  // The night: 17:00 gold, 19:30 sunset, 21:00 blue, midnight, then dawn.
  let k = 0;
  const SKY: [number, string][] = [[0, '#a8c8e0'], [0.3, '#f2b07a'], [0.48, '#d06a6a'], [0.65, '#3a3a6a'], [1, '#0c1430'], [1.5, '#2a2a5a'], [2, '#f0a8a0']];
  const tmp = new THREE.Color(), tmp2 = new THREE.Color();
  function skyAt(x: number) {
    for (let i = 1; i < SKY.length; i++) if (x <= SKY[i][0]) { const [a, ca] = SKY[i - 1], [b, cb] = SKY[i]; return tmp.set(ca).lerp(tmp2.set(cb), (x - a) / (b - a)); }
    return tmp.set(SKY[SKY.length - 1][1]);
  }
  function applyNight() {
    const sky = skyAt(k);
    if (scene.background instanceof THREE.Color) scene.background.copy(sky); else scene.background = sky.clone();
    if (scene.fog) (scene.fog as THREE.Fog).color.copy(sky).multiplyScalar(0.85);
    const dawn = Math.max(0, k - 1);
    const sunK = k <= 1 ? Math.max(0, 1 - k / 0.5) : dawn * 0.8;
    sun.intensity = 0.12 + sunK * 1.3; sun.color.set(k > 1 ? '#ffb0a0' : k < 0.25 ? '#ffe0b0' : '#ff9a60');
    if (k > 0.6 && k <= 1.3) { sun.color.set('#7a8ac8'); sun.intensity = 0.3; }
    sun.position.set(k > 1 ? 80 : -80, 10 + sunK * 40, k > 1 ? -40 : 60);
    sunDisc.position.set(k > 1 ? 260 : -260, -20 + sunK * 90, k > 1 ? -60 : 120); sunDisc.lookAt(0, 10, 0); sunDisc.visible = sunK > 0.02;
    const dark = k <= 1 ? Math.max(0, (k - 0.55) / 0.45) : Math.max(0, 1 - dawn * 1.2);
    (stars.material as THREE.PointsMaterial).opacity = dark * 0.9;
    (moon.material as THREE.MeshBasicMaterial).opacity = Math.min(1, dark * 1.4);
    (flies.material as THREE.PointsMaterial).opacity = dark * 0.85;
    const lightsOn = k <= 1 ? Math.max(0, Math.min(1, (k - 0.3) / 0.35)) : Math.max(0.3, 1 - dawn);
    for (const m of anim.glows) { if (m.userData.base == null) m.userData.base = m.emissiveIntensity; m.emissiveIntensity = (m.userData.base as number) * 0.3 + lightsOn * 1.4 * Math.max(0.3, m.userData.base as number); }
    for (const b of anim.bulbs) b.color.set(lightsOn > 0.2 ? '#ffd890' : '#d8d0b8');
    for (const l of lamps) l.intensity = (l.userData.base as number) * (0.15 + lightsOn);
    waterMat.color.set(dark > 0.5 ? '#1a2a40' : '#3a6a7a');
  }
  applyNight();
  function setNight(phase: number) { k = Math.max(0, Math.min(2, phase)); applyNight(); }

  function bodies(): Body[] {
    const out: Body[] = [];
    for (const n of npcs) out.push({ x: n.x, z: n.z, who: n });
    for (const m of movers) out.push({ x: m.x, z: m.z, who: m });
    return out;
  }

  const wp = new THREE.Vector3();
  const far = opts.low ? 30 : 46;
  function animate(t: number, dt: number, px: number, pz: number) {
    clockNow = t;
    for (const spot of spots) {
      spot.gem.position.y = 2.3 + Math.sin(t * 2 + spot.group.position.x) * 0.12;
      spot.gem.rotation.y += dt * 1.5;
      spot.ring.scale.setScalar(1 + Math.sin(t * 3) * 0.03);
    }
    for (const s of anim.sway) { if (s.phase < 0) s.mesh.rotation.y += dt * 0.6; else s.mesh.rotation.z = Math.sin(t * 0.8 + s.phase) * 0.04; }
    for (const tl of anim.tails) tl.mesh.rotation.y = Math.sin(t * 2.2 + tl.phase) * 0.5;
    for (const f of anim.flames) f.scale.setScalar(0.85 + Math.sin(t * 13 + f.position.x * 9) * 0.15 + Math.sin(t * 29 + f.position.z * 7) * 0.08);
    for (const m of anim.disco) m.emissive.setHSL((t * 0.08) % 1, 0.6, 0.5);
    const fp = flyGeo.attributes.position as THREE.BufferAttribute;
    if (k > 0.55) { for (let i = 0; i < fp.count; i++) fp.setY(i, 0.5 + ((i * 0.37 + t * 0.15) % 1.6) + Math.sin(t * 2 + i) * 0.1); fp.needsUpdate = true; }
    // People who walk.
    for (const m of movers) {
      const at = walkerAt(m.walker, t + m.offset);
      m.x = at.x; m.z = at.z; m.moving = at.moving; m.heading = at.heading;
      m.person.root.position.set(at.x, 0, at.z);
      m.person.root.rotation.y = at.heading;
      animatePerson(m.person, dt, at.moving ? m.walker.speed : 0, false);
    }
    // Everyone near enough moves; far away they are not even drawn.
    for (const npc of npcs) {
      const d = Math.max(Math.abs(npc.x - px), Math.abs(npc.z - pz));
      npc.person.root.visible = d < far;
      if (d > 26) continue;
      animatePerson(npc.person, dt, 0, talking.has(npc.person));
    }
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.npc.person.root.getWorldPosition(wp); world.worldToLocal(wp); b.sprite.position.set(wp.x, wp.y + 2.25, wp.z);
      if (t > b.until) { b.sprite.removeFromParent(); (b.sprite.material as THREE.SpriteMaterial).map?.dispose(); b.sprite.material.dispose(); bubbles.splice(i, 1); }
    }
    if (t > nextBubble) {
      nextBubble = t + 2.5 + Math.random() * 3;
      const pool = [...npcs.filter(n => !n.main), ...movers].filter(n => { const d = Math.hypot(n.x - px, n.z - pz); return d > 1.5 && d < 11; });
      if (pool.length && bubbles.length < 2) {
        const npc = pool[Math.floor(Math.random() * pool.length)];
        if (!bubbles.some(b => b.npc === npc)) say(npc, CHATTER[Math.floor(Math.random() * CHATTER.length)]);
      }
    }
  }

  void SEAT_TOP;
  return { npcs, movers, spots, animate, setSceneMood, setNight, night: () => k, bodies, say };
}
