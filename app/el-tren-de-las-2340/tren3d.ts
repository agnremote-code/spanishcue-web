// El tren de las 23:40 · El Nocturno de los Andes in 3D: the platform at
// Mendoza under its lamps, the locomotive, the luggage van, two sleeping cars
// with their cabins, the dining car, the bar car, the observation car with
// its glass dome, the snowy platform of Puente del Inca with the stone bridge,
// and Los Andes at dawn. Outside the windows the Andes go by: poles, rocks,
// snow and mountains under the stars, with the sky turning from night to
// dawn as the lesson moves on. Original procedural geometry and canvas
// textures only; people come from Noche abierta's people3d and the player is
// the SpanishCue mascot (hero3d). Static pieces are merged by material
// (batchStatic) and only the place you are in is drawn.
import * as THREE from 'three';
import { batchStatic, canvas, random } from '../noche-abierta/build3d';
import { addBlobShadow, animatePerson, createPerson, setMood, setPose, type Look, type Person } from '../noche-abierta/people3d';
import { B, C, IRON, STEEL, add, bright, mapped, std, textTexture, GLASS } from '../el-consorcio/edificio-items';
import { CABIN, CEILING, CHATTER, CROWD, FLOORS, FURNITURE, HALF, OPEN_CABINS, PORTALS, SCENES, SECTORS, WALKERS, WALL, WALLS, cabinX0, doorZ, isCar, walkerAt, type Furniture, type Walker } from './layout.mjs';
import { nightProgress } from './story.mjs';
import { SEAT_TOP, buildItem, type TrainAnim } from './tren-items';

export type Npc = { person: Person; floor: number; scene?: string; main?: boolean; x: number; z: number; heading: number; baseMood: string; lying?: boolean; seated?: boolean; talk?: string; body?: string; seed: number; angryUntil?: number };
export type Mover = { walker: Walker; person: Person; floor: number; offset: number; x: number; z: number; moving?: boolean; body?: string; seed: number; angryUntil?: number; heading?: number };
export type DoorRig = { floor: number; x: number; z: number; leaves: { mesh: THREE.Object3D; open: (k: number) => void }[]; k: number };
export type Spot = { id: string; floor: number; group: THREE.Group; ring: THREE.Mesh; gem: THREE.Mesh; material: THREE.MeshBasicMaterial };
export type Body = { x: number; z: number; radius?: number; who: Npc | Mover };
export type Train = {
  floors: Record<number, THREE.Group>;
  npcs: Npc[];
  movers: Mover[];
  spots: Spot[];
  animate: (t: number, dt: number, floor: number, px: number, pz: number) => void;
  setSceneMood: (id: string | null, mood: string | null) => void;
  /** The night outside follows the lesson clock (23:40 → 06:40). */
  setNight: (clock: string) => void;
  /** Which place is shown: the scenery and the sky follow it. */
  setPlace: (floor: number) => void;
  /** 0 at departure, 1 at dawn, for the place being shown. */
  night: () => number;
  bodies: (floor: number) => Body[];
  say: (who: Npc | Mover, text: string, seconds?: number, yell?: boolean) => void;
};

export const talking = new WeakSet<Person>();
// Train speed: the scenery goes past at this many metres per second.
const SPEED = 16;

// ---------------------------------------------------------------- textures
function carpet(seed: number, base: string, figure: string) {
  const rand = random(seed);
  return canvas(256, 256, ctx => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 1600; i++) { ctx.fillStyle = `rgba(0,0,0,${rand() * 0.06})`; ctx.fillRect(rand() * 256, rand() * 256, 2, 2); }
    ctx.strokeStyle = figure; ctx.lineWidth = 3;
    for (let r = 0; r < 4; r++) for (let q = 0; q < 4; q++) { ctx.beginPath(); ctx.moveTo(q * 64 + 32, r * 64 + 10); ctx.lineTo(q * 64 + 54, r * 64 + 32); ctx.lineTo(q * 64 + 32, r * 64 + 54); ctx.lineTo(q * 64 + 10, r * 64 + 32); ctx.closePath(); ctx.stroke(); }
  }, true);
}
function planks(seed: number, tone: string) {
  const rand = random(seed);
  return canvas(256, 256, ctx => {
    ctx.fillStyle = tone; ctx.fillRect(0, 0, 256, 256);
    for (let r = 0; r < 16; r++) { ctx.fillStyle = `rgba(${rand() < 0.5 ? '255,240,220' : '30,15,5'},${rand() * 0.12})`; ctx.fillRect(0, r * 16, 256, 16); ctx.strokeStyle = 'rgba(30,15,5,.4)'; ctx.strokeRect(0.5, r * 16 + 0.5, 255, 15); }
  }, true);
}
function veneer(seed: number) {
  const rand = random(seed);
  return canvas(256, 256, ctx => {
    ctx.fillStyle = '#7a4a2a'; ctx.fillRect(0, 0, 256, 256);
    ctx.strokeStyle = 'rgba(40,20,8,.25)';
    for (let i = 0; i < 40; i++) { ctx.lineWidth = 1 + rand() * 2; ctx.beginPath(); const y = rand() * 256; ctx.moveTo(0, y); ctx.bezierCurveTo(80, y + (rand() - 0.5) * 30, 170, y + (rand() - 0.5) * 30, 256, y); ctx.stroke(); }
  }, true);
}
function stoneFloor(seed: number, base: string) {
  const rand = random(seed);
  return canvas(256, 256, ctx => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 2500; i++) { ctx.fillStyle = `rgba(0,0,0,${rand() * 0.07})`; ctx.fillRect(rand() * 256, rand() * 256, 2, 2); }
    ctx.strokeStyle = 'rgba(0,0,0,.25)'; ctx.lineWidth = 2;
    for (let i = 0; i <= 4; i++) { ctx.beginPath(); ctx.moveTo(i * 64, 0); ctx.lineTo(i * 64, 256); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, i * 64); ctx.lineTo(256, i * 64); ctx.stroke(); }
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
function plate(text: string, w = 0.3, h = 0.12) {
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), mapped(textTexture(text, '#c8a04a', '#2a1a0a', 256, 96, 'bold 58px Georgia, serif'), 0.1, 0.3));
}

// ---------------------------------------------------------------- people

function makePerson(look: Look, pose: string, opts: { seat?: boolean; lying?: boolean; mood?: string }) {
  const person = createPerson(look, false);
  person.root.userData.person = true; // the no-ghost QA check finds people by this tag
  const seated = Boolean(opts.seat) || pose === 'sit';
  setPose(person, opts.lying ? 'lie' : pose, opts.lying ? false : seated);
  if (opts.mood) setMood(person, opts.mood);
  addBlobShadow(person, 0.8);
  return person;
}
const CROWD_LOOKS: Look[] = [
  { skin: '#e8c0a0', age: 'old', body: 'f', hairStyle: 'curly', hairColor: '#d8d0e0', top: 'coat', topColor: '#3a6aa8', bottom: 'pants', bottomColor: '#2a2a30', extras: ['glasses', 'scarf'] },
  { skin: '#c48f69', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#1a1210', top: 'jacket', topColor: '#5a4a3a', bottom: 'jeans', bottomColor: '#24304a' },
  { skin: '#8d5a3c', age: 'adult', body: 'f', hairStyle: 'long', hairColor: '#120d0b', top: 'sweater', topColor: '#d43a6a', bottom: 'jeans', bottomColor: '#1f2840', extras: ['earrings'] },
  { skin: '#f0d0b4', age: 'old', body: 'm', hairStyle: 'bald', hairColor: '#999', top: 'sweater', topColor: '#5a4a3a', bottom: 'pants', bottomColor: '#2a2a2a', extras: ['glasses', 'mustache'] },
  { skin: '#b9825c', age: 'young', body: 'm', hairStyle: 'curly', hairColor: '#2a1a12', top: 'hoodie', topColor: '#4a6a3a', bottom: 'jeans', bottomColor: '#121214', extras: ['headphones'] },
  { skin: '#dcae88', age: 'adult', body: 'f', hairStyle: 'ponytail', hairColor: '#6a2a18', top: 'coat', topColor: '#8a3a8a', bottom: 'pants', bottomColor: '#1a1a20', extras: ['scarf'] },
  { skin: '#e2b896', age: 'elderly', body: 'm', hairStyle: 'short', hairColor: '#e8e8e8', top: 'coat', topColor: '#4a4a3a', bottom: 'pants', bottomColor: '#2a2a2a', extras: ['hat'] },
  { skin: '#c99468', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#120d0b', top: 'suit', topColor: '#1a2a4a', bottom: 'pants', bottomColor: '#1a2a4a', extras: ['beard'] },
  { skin: '#f0d6c0', age: 'young', body: 'f', hairStyle: 'bob', hairColor: '#e0c070', top: 'jacket', topColor: '#2a8a8a', bottom: 'jeans', bottomColor: '#2a3a5a', extras: ['earrings'] },
];

// ---------------------------------------------------------------- spots
function buildSpot(id: string, floor: number, x: number, z: number): Spot {
  const group = new THREE.Group();
  group.position.set(x, 0.03, z);
  const material = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.9, depthWrite: false, toneMapped: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.82, 1.0, 48), material);
  ring.rotation.x = -Math.PI / 2;
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.82, 48), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.12, depthWrite: false, toneMapped: false }));
  disc.rotation.x = -Math.PI / 2;
  const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.1), material);
  gem.position.y = 2.15;
  group.add(ring, disc, gem);
  return { id, floor, group, ring, gem, material };
}

// ---------------------------------------------------------------- a car
type Rect = [number, number, number, number];
function surface(g: THREE.Group, [x0, z0, x1, z1]: Rect, material: THREE.Material, y = 0, repeat = 2, down = false) {
  const w = x1 - x0, d = z1 - z0;
  const m = (material as THREE.MeshStandardMaterial).map ? (material as THREE.MeshStandardMaterial).clone() : material;
  const map = (m as THREE.MeshStandardMaterial).map;
  if (map) { (m as THREE.MeshStandardMaterial).map = map.clone(); (m as THREE.MeshStandardMaterial).map!.needsUpdate = true; (m as THREE.MeshStandardMaterial).map!.repeat.set(w / repeat, d / repeat); }
  const p = add(g, new THREE.PlaneGeometry(w, d), m, (x0 + x1) / 2, y, (z0 + z1) / 2);
  p.rotation.x = down ? Math.PI / 2 : -Math.PI / 2;
  p.receiveShadow = true;
  return p;
}
const CAR_STYLE: Record<number, { floor: () => THREE.Texture; wall: string; low: string }> = {
  1: { floor: () => planks(1, '#5a5a5a'), wall: '#c8ccc8', low: '#4a5a4a' },
  2: { floor: () => planks(2, '#8a6a4a'), wall: '#b8a888', low: '#6a5a3a' },
  3: { floor: () => carpet(3, '#7a1e2a', 'rgba(232,192,112,.35)'), wall: '#e8dcc0', low: '#6a3a22' },
  4: { floor: () => carpet(4, '#1e3a5a', 'rgba(232,192,112,.35)'), wall: '#e8dcc0', low: '#6a3a22' },
  5: { floor: () => carpet(5, '#5a1e22', 'rgba(232,200,140,.4)'), wall: '#f0e6d0', low: '#5a2e1a' },
  6: { floor: () => planks(6, '#5a3a22'), wall: '#3a2a22', low: '#2a1a10' },
  7: { floor: () => carpet(7, '#2a2a4a', 'rgba(180,200,255,.25)'), wall: '#d8d8d8', low: '#3a3a4a' },
};
function wallSegment(g: THREE.Group, seg: (number | string)[], wallMat: THREE.Material, lowMat: THREE.Material, floor: number) {
  const [x0, z0, x1, z1] = seg as number[];
  const len = Math.hypot(x1 - x0, z1 - z0);
  const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
  const ry = x0 === x1 ? Math.PI / 2 : 0;
  const kind = seg[4];
  if (kind === 'low') {
    // The rail at the back of a platform.
    add(g, B(len, 0.06, 0.06), IRON(), cx, 1.0, cz, ry);
    for (let t = 0; t <= len; t += 2) add(g, B(0.05, 1.0, 0.05), IRON(), x0 + (x1 - x0) * (t / len), 0.5, z0 + (z1 - z0) * (t / len));
    return;
  }
  if (kind === 'glass' || kind === 'dome') {
    const sill = kind === 'dome' ? 0.55 : 0.85, top = kind === 'dome' ? CEILING : 1.8;
    add(g, B(len, sill, WALL), lowMat, cx, sill / 2, cz, ry);
    if (top < CEILING) add(g, B(len, CEILING - top, WALL), wallMat, cx, (CEILING + top) / 2, cz, ry);
    add(g, B(len, top - sill, 0.02), GLASS(), cx, (sill + top) / 2, cz, ry);
    const frame = std(floor === 7 ? '#2a2a32' : '#b89850', 0.4, 0.6);
    add(g, B(ry ? 0.08 : len, 0.05, ry ? len : 0.08), frame, cx, sill, cz);
    add(g, B(ry ? 0.08 : len, 0.05, ry ? len : 0.08), frame, cx, top, cz);
    // Window blinds half rolled, and curtains in the sleeping and dining cars.
    if (kind === 'glass' && [3, 4, 5].includes(floor) && x0 !== x1) {
      const inward = cz > 0 ? -1 : 1;
      add(g, B(len, 0.18, 0.04), std('#d8c8a0', 0.8), cx, top - 0.1, cz + inward * 0.07);
      for (const s of [-1, 1]) add(g, B(0.22, top - sill + 0.1, 0.04), std(floor === 4 ? '#2a4a7a' : '#8a1e2a', 0.9), cx + s * (len / 2 - 0.1), (sill + top) / 2, cz + inward * 0.09);
    }
    return;
  }
  add(g, B(len + 0.02, CEILING, WALL), wallMat, cx, CEILING / 2, cz, ry);
  add(g, B(len + 0.03, 0.85, WALL + 0.02), lowMat, cx, 0.425, cz, ry);
  add(g, B(len + 0.04, 0.04, WALL + 0.05), std('#b89850', 0.4, 0.6), cx, 0.87, cz, ry);
}
function slidingDoor(g: THREE.Group, x: number, z: number, doors: DoorRig[], floor: number) {
  const rig: DoorRig = { floor, x, z, leaves: [], k: 0 };
  add(g, B(WALL, CEILING - 2.0, 1.1), std('#5a3a22', 0.6), x, (CEILING + 2.0) / 2, z);
  const leaf = new THREE.Group(); leaf.position.set(x, 0, z); g.add(leaf);
  add(leaf, B(0.05, 2.0, 1.1), std('#6a4428', 0.55), 0, 1.0, 0);
  add(leaf, B(0.06, 0.7, 0.5), GLASS(), 0, 1.45, 0);
  add(leaf, B(0.08, 0.3, 0.04), std('#c8a04a', 0.3, 0.8), 0, 1.0, 0.4);
  const base = z;
  rig.leaves.push({ mesh: leaf, open: k => { leaf.position.z = base + k * 1.0; leaf.visible = k < 0.98; } });
  doors.push(rig);
}
function buildCar(id: number, anim: TrainAnim, doors: DoorRig[]) {
  const group = new THREE.Group();
  const style = CAR_STYLE[id];
  const wallMat = id === 6 || id === 2 ? new THREE.MeshStandardMaterial({ map: id === 6 ? veneer(60) : planks(61, '#a8885a'), roughness: 0.6 }) : std(style.wall, 0.8);
  const lowMat = id === 1 || id === 2 || id === 7 ? std(style.low, 0.6) : new THREE.MeshStandardMaterial({ map: veneer(70 + id), roughness: 0.5 });
  surface(group, [-12, -HALF, 12, HALF], new THREE.MeshStandardMaterial({ map: style.floor(), roughness: 0.9 }), 0, 1.6);
  // The roof: flat in the middle with two coves, glass in the observation car.
  if (id === 7) {
    for (let x = -12; x <= 12; x += 2) { const rib = add(group, new THREE.TorusGeometry(HALF, 0.04, 6, 24, Math.PI), std('#2a2a32', 0.4, 0.6), x, CEILING - 0.6, 0); rib.rotation.y = Math.PI / 2; }
    const dome = add(group, new THREE.CylinderGeometry(HALF, HALF, 24, 24, 1, true, -Math.PI / 2, Math.PI), GLASS(), 0, CEILING - 0.6, 0); dome.rotation.z = Math.PI / 2;
  } else {
    surface(group, [-12, -HALF + 0.35, 12, HALF - 0.35], std(id === 6 ? '#2a1e18' : '#f4eedc', 0.9), CEILING, 2, true);
    for (const s of [-1, 1]) { const cove = add(group, B(24, 0.06, 0.55), std(id === 6 ? '#2a1e18' : '#e8e0cc', 0.9), 0, CEILING - 0.12, s * (HALF - 0.2)); cove.rotation.x = s * 0.45; }
    add(group, B(24, 0.03, 0.12), std('#b89850', 0.4, 0.6), 0, CEILING - 0.02, 0);
  }
  for (const seg of WALLS[id] as (number | string)[][]) wallSegment(group, seg, wallMat, lowMat, id);
  // End doors that slide open when you walk up to them.
  const dz = doorZ(id);
  for (const p of PORTALS[id] ?? []) {
    const x = p.id === 'front' ? 12 : -12;
    slidingDoor(group, x, dz, doors, id);
    const label = p.id === 'front' ? '→ HACIA LA LOCOMOTORA' : '← HACIA EL FINAL DEL TREN';
    const sign = add(group, new THREE.PlaneGeometry(1.0, 0.16), mapped(textTexture(label, '#1a2a4a', '#f0e0b0', 640, 100, 'bold 40px Arial'), 0.4), x + (x > 0 ? -0.1 : 0.1), 2.22, dz);
    sign.rotation.y = x > 0 ? -Math.PI / 2 : Math.PI / 2;
  }
  // The sleeping cars: the cabin doors, open or closed, with their numbers.
  if (id === 3 || id === 4) {
    for (let n = id === 3 ? 1 : 7, k = 0; k < 6; n++, k++) {
      const x0 = cabinX0(id, n), mid = x0 + 1.6;
      const open = OPEN_CABINS[id].includes(n);
      if (open) {
        add(group, B(0.9, CEILING - 2.0, WALL), wallMat, mid, (CEILING + 2.0) / 2, CABIN.z1);
        // The sliding door pushed back along the wall.
        add(group, B(0.88, 2.0, 0.04), std('#6a4428', 0.55), mid - 0.85, 1.0, CABIN.z1 + 0.11);
      } else {
        add(group, B(0.88, 2.0, 0.04), std('#6a4428', 0.55), mid, 1.0, CABIN.z1 + 0.1);
        add(group, B(0.05, 0.25, 0.04), std('#c8a04a', 0.3, 0.8), mid + 0.3, 1.0, CABIN.z1 + 0.13);
      }
      const p = plate(String(n)); p.position.set(mid + 0.65, 1.75, CABIN.z1 + 0.09); group.add(p);
      if (n === 8) { const you = plate('TÚ', 0.2, 0.1); you.position.set(mid + 0.65, 1.6, CABIN.z1 + 0.09); group.add(you); }
    }
  }
  // The locomotive: a rail around the engine, the windscreen and its wipers.
  if (id === 1) {
    for (const s of [-1, 1]) add(group, C(0.02, 0.02, 14.6, 6), std('#e0c040', 0.5, 0.3), -2.3, 1.05, s * 1.35).rotation.z = Math.PI / 2;
    for (const s of [-1, 1]) { const wiper = add(group, B(0.02, 0.7, 0.03), IRON(), 11.9, 1.5, s * 0.6); wiper.rotation.x = s * 0.4; }
    add(group, new THREE.PlaneGeometry(0.9, 0.16), mapped(textTexture('NO DISTRAER AL MAQUINISTA', '#c8301e', '#ffffff', 640, 100, 'bold 40px Arial')), 6.0, 2.0, -HALF + 0.09);
  }
  if (id === 5) {
    add(group, new THREE.PlaneGeometry(1.4, 0.3), mapped(textTexture('COCHE COMEDOR', '#5a1e22', '#e8c070', 640, 120, 'bold 60px Georgia'), 0.3), -11.9, 2.15, 0).rotation.y = Math.PI / 2;
    add(group, new THREE.PlaneGeometry(1.2, 0.5), mapped(textTexture('MENÚ: CAZUELA · EMPANADAS · FLAN', '#2a1a10', '#f4f0e0', 768, 300, 'bold 46px Georgia')), 6.42, 1.6, 0.8).rotation.y = -Math.PI / 2;
  }
  for (const item of (FURNITURE[id] ?? []) as Furniture[]) buildItem(group, item, id, anim);
  return group;
}

// ---------------------------------------------------------------- a platform
function buildPlatform(id: number, anim: TrainAnim) {
  const group = new THREE.Group();
  const inca = id === 8, andes = id === 9;
  surface(group, [-12, -1.0, 12, 7.6], new THREE.MeshStandardMaterial({ map: stoneFloor(80 + id, inca ? '#e8eef4' : andes ? '#c8b8a0' : '#a8a098'), roughness: 0.9 }), 0, 2);
  // The platform edge and the drop to the track.
  add(group, B(24, 0.25, 0.3), std(inca ? '#d8e0e8' : '#8a8478', 0.9), 0, -0.12, -0.9);
  if (inca) {
    const rand = random(31);
    for (let i = 0; i < 40; i++) { const s = add(group, new THREE.SphereGeometry(0.3 + rand() * 0.4, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2), std('#f4f8fc', 0.9), -11 + rand() * 22, 0, 0.2 + rand() * 6.8); s.scale.y = 0.15 + rand() * 0.15; }
  }
  for (const item of (FURNITURE[id] ?? []) as Furniture[]) buildItem(group, item, id, anim);
  return group;
}

// ---------------------------------------------------------------- outside
// The Andes going by: one scenery for the train (it scrolls) and one per stop.
type Scroll = { mesh: THREE.Object3D; base: number; span: number };
function mountain(g: THREE.Object3D, x: number, z: number, r: number, h: number, rock: THREE.Material, snow: THREE.Material, seed: number) {
  const rand = random(seed);
  const m = add(g, new THREE.ConeGeometry(r, h, 7 + Math.floor(rand() * 4), 1), rock, x, h / 2 - 2, z);
  m.rotation.y = rand() * 3;
  const cap = add(g, new THREE.ConeGeometry(r * 0.38, h * 0.38, 7, 1), snow, x, h - h * 0.19 - 2 + 0.05, z);
  cap.rotation.y = m.rotation.y;
  return [m, cap];
}
function buildScenery(scrolls: Scroll[], mats: { rock: THREE.MeshStandardMaterial; snow: THREE.MeshStandardMaterial; ground: THREE.MeshStandardMaterial }) {
  const g = new THREE.Group();
  const rand = random(2340);
  const ground = add(g, new THREE.PlaneGeometry(2000, 2000), mats.ground, 0, -1.1, 0); ground.rotation.x = -Math.PI / 2;
  // The track behind the observation car, its sleepers rushing away.
  for (const s of [-1, 1]) add(g, B(600, 0.08, 0.08), STEEL(), -312, -0.95, s * 0.72);
  const sleeper = std('#3a2a1e', 0.9);
  for (let i = 0; i < 60; i++) { const m = add(g, B(0.25, 0.08, 2.4), sleeper, -14 - i * 0.8, -1.0, 0); scrolls.push({ mesh: m, base: -14 - i * 0.8, span: 48 }); }
  // Telegraph poles, close: they flash past.
  for (let i = 0; i < 12; i++) for (const s of [-1, 1]) {
    const pole = new THREE.Group(); const x = -150 + i * 25 + (s > 0 ? 12 : 0);
    add(pole, C(0.1, 0.12, 7, 6), std('#3a2a1e', 0.9), 0, 2.4, 0);
    add(pole, B(0.08, 0.08, 1.4), std('#3a2a1e', 0.9), 0, 5.6, 0);
    pole.position.set(x, 0, s * 7.5); g.add(pole);
    scrolls.push({ mesh: pole, base: x, span: 300 });
  }
  // Rocks and boulders at the side of the line.
  for (let i = 0; i < 60; i++) {
    const s = rand() < 0.5 ? -1 : 1, x = -200 + rand() * 400, z = s * (9 + rand() * 40), r = 0.5 + rand() * 2.5;
    const m = add(g, new THREE.DodecahedronGeometry(r, 0), mats.rock, x, -0.8 + r * 0.4, z);
    m.rotation.set(rand() * 3, rand() * 3, rand() * 3);
    scrolls.push({ mesh: m, base: x, span: 400 });
  }
  // The mountains: near ridges and the high range behind.
  for (let i = 0; i < 46; i++) {
    const s = i % 2 ? -1 : 1, x = -700 + rand() * 1400, z = s * (70 + rand() * 260), r = 40 + rand() * 90, h = 60 + rand() * 170;
    for (const m of mountain(g, x, z, r, h, mats.rock, mats.snow, 300 + i)) scrolls.push({ mesh: m, base: m.position.x, span: 1400 });
  }
  return g;
}
function buildStop(id: number, mats: { rock: THREE.MeshStandardMaterial; snow: THREE.MeshStandardMaterial; ground: THREE.MeshStandardMaterial }) {
  const g = new THREE.Group();
  const rand = random(id * 97);
  const ground = add(g, new THREE.PlaneGeometry(2000, 2000), id === 8 ? std('#e8eef4', 0.95) : id === 9 ? std('#7a6a4a', 0.95) : std('#3a3832', 0.95), 0, -0.3, 0); ground.rotation.x = -Math.PI / 2;
  // The track in front of the platform.
  for (const s of [-1, 1]) add(g, B(400, 0.1, 0.08), STEEL(), 0, -0.25, -2.9 + s * 0.72);
  if (id === 0) {
    // Mendoza by night: low houses, the city glowing, plane trees.
    for (let i = 0; i < 40; i++) {
      const x = -200 + i * 10 + rand() * 4, z = 14 + rand() * 50, h = 3 + rand() * 12;
      add(g, B(6 + rand() * 6, h, 6), std('#2a2a30', 0.9), x, h / 2, z);
      if (rand() < 0.7) add(g, B(1.2, 1.0, 0.05), bright(rand() < 0.8 ? '#ffd890' : '#cfe0ff'), x, h * 0.6, z - 3.03);
    }
    for (let i = 0; i < 30; i++) { const s = rand() < 0.5 ? -1 : 1; add(g, B(20 + rand() * 30, 10 + rand() * 40, 20), std('#1e1e26', 0.9), -300 + rand() * 600, 10, s * (120 + rand() * 80)); }
  } else {
    // The mountains around the stop; at Puente del Inca, the stone bridge.
    for (let i = 0; i < 28; i++) { const a = rand() * Math.PI * 2, d = 120 + rand() * 260; mountain(g, Math.cos(a) * d, Math.sin(a) * d + (id === 8 ? 40 : 60), 50 + rand() * 80, 80 + rand() * (id === 8 ? 260 : 160), mats.rock, mats.snow, 500 + id * 10 + i); }
    if (id === 8) {
      // The natural bridge over the Las Cuevas river, stained orange and yellow by the sulphur springs.
      const arch = add(g, new THREE.TorusGeometry(9, 3.2, 10, 24, Math.PI), std('#d0902a', 0.95), 6, -1, 26); arch.scale.set(1.6, 0.8, 1);
      add(g, B(36, 3, 9), std('#c8862a', 0.95), 6, 6.0, 26);
      add(g, B(40, 0.2, 7), std('#e8eef4', 0.9), 6, 7.6, 26);
      const river = add(g, new THREE.PlaneGeometry(300, 6), std('#5a7a8a', 0.2, 0.2), 0, -0.9, 26); river.rotation.x = -Math.PI / 2;
      // The old spa hotel, a ruin since the 1965 avalanche.
      add(g, B(14, 6, 6), std('#9a8a7a', 0.95), -22, 3, 34); add(g, B(2, 7.5, 2), std('#8a7a6a', 0.95), -16, 3.7, 32);
    } else {
      // Los Andes: vineyards and poplars in the valley.
      for (let i = 0; i < 30; i++) add(g, C(0.8, 1.2, 14, 6), std('#4a6a2a', 0.9), -150 + i * 10 + rand() * 4, 7, 30 + rand() * 20);
    }
  }
  return g;
}

// ---------------------------------------------------------------- the whole train
export function buildTrain(scene: THREE.Scene, opts: { low: boolean; shadows: boolean }): Train {
  const floors: Record<number, THREE.Group> = {};
  const doors: DoorRig[] = [];
  const anim: TrainAnim = { glows: [], drips: [], bobs: [], tails: [], bulbs: [], flames: [], curtains: [], flakes: [] };
  for (const f of FLOORS) {
    const before = { tails: anim.tails.length, flames: anim.flames.length, curtains: anim.curtains.length };
    const group = isCar(f.id) ? buildCar(f.id, anim, doors) : buildPlatform(f.id, anim);
    const moving = [
      ...doors.filter(d => d.floor === f.id).flatMap(d => d.leaves.map(l => l.mesh)),
      ...anim.tails.slice(before.tails).map(t => t.mesh), ...anim.flames.slice(before.flames), ...anim.curtains.slice(before.curtains),
    ];
    batchStatic(group, moving);
    group.visible = false;
    floors[f.id] = group;
    scene.add(group);
  }
  // Three real lights in every place (the same count everywhere, so moving
  // between cars never recompiles a shader).
  for (const f of FLOORS) {
    const sector = SECTORS.find(s => s.floor === f.id)!;
    const xs = isCar(f.id) ? [-7, 0, 7] : [-8, 0, 8];
    for (const x of xs) {
      const light = new THREE.PointLight(sector.light, isCar(f.id) ? 5 : 9, isCar(f.id) ? 9 : 14, 1.6);
      light.position.set(x, isCar(f.id) ? CEILING - 0.35 : 3.6, isCar(f.id) ? 0 : 1.5);
      floors[f.id].add(light);
    }
  }
  const mats = {
    rock: std('#4a4a52', 0.95), snow: std('#e8eef4', 0.85), ground: std('#2a2a2e', 0.95),
  };
  const scrolls: Scroll[] = [];
  const scenery = buildScenery(scrolls, mats);
  scene.add(scenery);
  const stops: Record<number, THREE.Group> = { 0: buildStop(0, mats), 8: buildStop(8, mats), 9: buildStop(9, mats) };
  for (const s of Object.values(stops)) { s.visible = false; scene.add(s); }
  // Snow falling at Puente del Inca and past the windows in the high Andes.
  const flakeGeo = new THREE.BufferGeometry();
  const fr = random(9);
  const flakePos = new Float32Array(900 * 3);
  for (let i = 0; i < 900; i++) flakePos.set([-30 + fr() * 60, fr() * 14, -30 + fr() * 60], i * 3);
  flakeGeo.setAttribute('position', new THREE.BufferAttribute(flakePos, 3));
  const flakes = new THREE.Points(flakeGeo, new THREE.PointsMaterial({ color: '#ffffff', size: 0.07, transparent: true, opacity: 0.85, depthWrite: false }));
  scene.add(flakes);
  // The moon, the stars and the dawn sun.
  const sun = new THREE.DirectionalLight('#a8b8e0', 0.35);
  sun.position.set(80, 60, -40); scene.add(sun, sun.target);
  const sunDisc = new THREE.Mesh(new THREE.CircleGeometry(14, 24), new THREE.MeshBasicMaterial({ color: '#ffb060', toneMapped: false, fog: false }));
  scene.add(sunDisc);
  const starGeo = new THREE.BufferGeometry();
  const starPos = new Float32Array(900 * 3); const sr = random(77);
  for (let i = 0; i < 900; i++) { const a = sr() * Math.PI * 2, e = 0.12 + sr() * 1.3; starPos.set([Math.cos(a) * Math.cos(e) * 500, Math.sin(e) * 500, Math.sin(a) * Math.cos(e) * 500], i * 3); }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: '#ffffff', size: 1.5, sizeAttenuation: false, transparent: true, opacity: 0.9, fog: false }));
  scene.add(stars);
  const moon = new THREE.Mesh(new THREE.CircleGeometry(8, 24), new THREE.MeshBasicMaterial({ color: '#f4f0e0', toneMapped: false, fog: false, transparent: true }));
  moon.position.set(-160, 220, -380); moon.lookAt(0, 0, 0); scene.add(moon);

  // People at the circles.
  const npcs: Npc[] = [];
  for (const s of SCENES) {
    const group = floors[s.floor];
    const people = [{ ...s.npc, pose: s.pose, mood: s.mood, look: s.look, main: true }, ...(s.extras ?? []).map(e => ({ ...e, main: false }))];
    for (const p of people) {
      const anyP = p as typeof p & { seat?: boolean; lying?: boolean; y?: number };
      const person = makePerson(p.look as Look, p.pose, { seat: anyP.seat, lying: anyP.lying, mood: p.mood });
      person.root.position.set(p.x, anyP.y ?? 0, p.z); person.root.rotation.y = p.heading;
      group.add(person.root);
      npcs.push({ person, floor: s.floor, scene: s.id, main: p.main, x: p.x, z: p.z, heading: p.heading, baseMood: p.mood ?? 'neutral', lying: anyP.lying, seated: anyP.seat || p.pose === 'sit', body: (p.look as Look).body, seed: npcs.length * 31 + 7 });
    }
  }
  // Every other passenger: you can talk to all of them.
  for (const [floorId, list] of Object.entries(CROWD)) {
    const floor = Number(floorId);
    list.forEach((c, i) => {
      const base = CROWD_LOOKS[(i * 4 + floor * 3) % CROWD_LOOKS.length];
      const look = { ...base, seed: floor * 100 + i * 7 };
      const person = makePerson(look as Look, c.pose, { seat: c.seat, mood: c.mood });
      person.root.position.set(c.x, 0, c.z); person.root.rotation.y = c.heading;
      floors[floor].add(person.root);
      npcs.push({ person, floor, x: c.x, z: c.z, heading: c.heading, baseMood: c.mood ?? 'neutral', lying: c.lying, seated: c.seat || c.pose === 'sit', talk: `${floor}-${i}`, body: (look as Look).body, seed: floor * 100 + i });
    });
  }
  const movers: Mover[] = [];
  for (const [floorId, list] of Object.entries(WALKERS)) {
    const floor = Number(floorId);
    list.forEach((walker, i) => {
      const person = makePerson(walker.look as Look, 'stand', {});
      floors[floor].add(person.root);
      movers.push({ walker, person, floor, offset: walker.delay ?? i * 13.7, x: walker.path[0][0], z: walker.path[0][1], body: (walker.look as Look).body, seed: floor * 50 + i * 3 });
    });
  }
  const spots = SCENES.map(s => { const spot = buildSpot(s.id, s.floor, s.spot.x, s.spot.z); floors[s.floor].add(spot.group); return spot; });

  // Speech bubbles.
  const bubbles: { sprite: THREE.Sprite; until: number; npc: Npc | Mover }[] = [];
  let nextBubble = 3, clockNow = 0;
  function say(who: Npc | Mover, text: string, seconds = 3.6, yell = false) {
    const old = bubbles.findIndex(b => b.npc === who);
    if (old >= 0) { const b = bubbles[old]; b.sprite.removeFromParent(); (b.sprite.material as THREE.SpriteMaterial).map?.dispose(); b.sprite.material.dispose(); bubbles.splice(old, 1); }
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: bubbleTexture(text, yell), transparent: true, depthTest: true, toneMapped: false }));
    sprite.scale.set(1.9, 0.48, 1);
    floors[who.floor].add(sprite);
    bubbles.push({ sprite, until: clockNow + seconds, npc: who });
  }
  function setSceneMood(id: string | null, mood: string | null) {
    for (const npc of npcs) if (npc.scene) setMood(npc.person, id && mood && npc.scene === id && npc.main ? mood : npc.baseMood);
  }

  // The night: deep blue at 23:40, black and starry at 3, violet at 5, gold at dawn.
  let lessonK = 0, k = 0, place = 0;
  const SKY: [number, string][] = [[0, '#0e1630'], [0.35, '#05070f'], [0.7, '#141a3a'], [0.85, '#5a4a7a'], [0.94, '#e89a6a'], [1, '#f6c890']];
  const tmp = new THREE.Color(), tmp2 = new THREE.Color();
  function skyAt(x: number) {
    for (let i = 1; i < SKY.length; i++) if (x <= SKY[i][0]) { const [a, ca] = SKY[i - 1], [b, cb] = SKY[i]; return tmp.set(ca).lerp(tmp2.set(cb), (x - a) / (b - a)); }
    return tmp.set(SKY[SKY.length - 1][1]);
  }
  function apply() {
    k = place === 0 ? 0 : place === 8 ? 0.48 : place === 9 ? 1 : lessonK;
    const sky = skyAt(k);
    if (scene.background instanceof THREE.Color) scene.background.copy(sky); else scene.background = sky.clone();
    if (scene.fog) (scene.fog as THREE.Fog).color.copy(sky);
    // Snow covers the land in the high Andes (the middle of the night).
    const high = Math.max(0, 1 - Math.abs(k - 0.5) / 0.32);
    mats.ground.color.set('#2a2a2e').lerp(tmp2.set('#c8d0dc'), high * 0.85);
    mats.rock.color.set('#3a3a42').lerp(tmp2.set('#8a8a96'), k > 0.85 ? (k - 0.85) / 0.15 : 0);
    (flakes.material as THREE.PointsMaterial).opacity = place === 8 ? 0.9 : isCar(place) ? high * 0.8 : 0;
    flakes.visible = (flakes.material as THREE.PointsMaterial).opacity > 0.02;
    const dawn = Math.max(0, (k - 0.82) / 0.18);
    (stars.material as THREE.PointsMaterial).opacity = Math.max(0, 0.95 - dawn * 1.2);
    (moon.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 1 - dawn * 1.5);
    sunDisc.visible = dawn > 0.4;
    sunDisc.position.set(-420, -30 + dawn * 70, 160); sunDisc.lookAt(0, 0, 0);
    sun.color.set(dawn > 0.3 ? '#ffc890' : '#8a9ad0'); sun.intensity = 0.25 + dawn * 1.1;
    sun.position.set(dawn > 0.3 ? -80 : 80, 60, dawn > 0.3 ? 40 : -40);
    for (const m of anim.glows) { if (m.userData.base == null) m.userData.base = m.emissiveIntensity; m.emissiveIntensity = (m.userData.base as number) * (1 - dawn * 0.5); }
  }
  function setNight(clock: string) { lessonK = nightProgress(clock); apply(); }
  function setPlace(floor: number) {
    place = floor;
    for (const [fid, group] of Object.entries(floors)) group.visible = Number(fid) === floor;
    scenery.visible = isCar(floor);
    for (const [fid, s] of Object.entries(stops)) s.visible = Number(fid) === floor;
    apply();
  }
  setPlace(0);

  function bodies(floor: number): Body[] {
    const out: Body[] = [];
    for (const n of npcs) if (n.floor === floor && !n.lying) out.push({ x: n.x, z: n.z, who: n });
    for (const m of movers) if (m.floor === floor) out.push({ x: m.x, z: m.z, who: m });
    return out;
  }

  const wp = new THREE.Vector3();
  function animate(t: number, dt: number, floor: number, px: number, pz: number) {
    clockNow = t;
    if (isCar(floor)) for (const s of scrolls) {
      const half = s.span / 2;
      let x = s.base - t * SPEED;
      x = ((x + half) % s.span + s.span) % s.span - half;
      s.mesh.position.x = x;
    }
    if (flakes.visible) {
      const pos = flakes.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < pos.count; i++) {
        let y = pos.getY(i) - dt * 1.2, x = pos.getX(i) - (isCar(floor) ? dt * SPEED * 0.6 : dt * 0.3);
        if (y < 0) y += 14;
        if (x < -30) x += 60;
        pos.setXY(i, x, y);
      }
      pos.needsUpdate = true;
      flakes.position.set(px, 0, pz);
    }
    for (const spot of spots) {
      if (spot.floor !== floor) continue;
      spot.gem.position.y = 2.15 + Math.sin(t * 2 + spot.group.position.x) * 0.1;
      spot.gem.rotation.y += dt * 1.5;
      spot.ring.scale.setScalar(1 + Math.sin(t * 3) * 0.03);
    }
    for (const tl of anim.tails) tl.mesh.rotation.y = Math.sin(t * 6 + tl.phase) * 0.6;
    for (const c of anim.curtains) c.rotation.y = 0.7 + Math.sin(t * 3.1) * 0.25 + Math.sin(t * 7.3) * 0.08;
    for (const f of anim.flames) f.scale.setScalar(0.85 + Math.sin(t * 13 + f.position.x * 9) * 0.15 + Math.sin(t * 29 + f.position.z * 7) * 0.08);
    const nearDoor: { x: number; z: number }[] = [{ x: px, z: pz }];
    for (const m of movers) {
      if (m.floor !== floor) continue;
      const at = walkerAt(m.walker, t + m.offset);
      m.x = at.x; m.z = at.z; m.moving = at.moving; m.heading = at.heading;
      m.person.root.position.set(at.x, 0, at.z);
      m.person.root.rotation.y = at.heading;
      animatePerson(m.person, dt, at.moving ? m.walker.speed : 0, false);
      nearDoor.push({ x: at.x, z: at.z });
    }
    for (const door of doors) {
      if (door.floor !== floor) continue;
      const want = nearDoor.some(p => Math.hypot(p.x - door.x, p.z - door.z) < 2.2) ? 1 : 0;
      door.k += (want - door.k) * Math.min(1, dt * 5);
      for (const leaf of door.leaves) leaf.open(door.k);
    }
    for (const npc of npcs) {
      if (npc.floor !== floor) continue;
      if (Math.abs(npc.x - px) > 26 || Math.abs(npc.z - pz) > 26) continue;
      animatePerson(npc.person, dt, 0, talking.has(npc.person));
    }
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.npc.person.root.getWorldPosition(wp); floors[floor].worldToLocal(wp); b.sprite.position.set(wp.x, wp.y + 2.1, wp.z);
      if (t > b.until || b.sprite.parent !== floors[floor]) { b.sprite.removeFromParent(); (b.sprite.material as THREE.SpriteMaterial).map?.dispose(); b.sprite.material.dispose(); bubbles.splice(i, 1); }
    }
    if (t > nextBubble) {
      nextBubble = t + 2.5 + Math.random() * 3;
      const lines = CHATTER[floor] ?? [];
      const pool = [...npcs.filter(n => n.floor === floor && !n.main && !n.lying), ...movers.filter(m => m.floor === floor)]
        .filter(n => { const d = Math.hypot(n.x - px, n.z - pz); return d > 1.5 && d < 11; });
      if (lines.length && pool.length && bubbles.length < 2) {
        const npc = pool[Math.floor(Math.random() * pool.length)];
        if (!bubbles.some(b => b.npc === npc)) say(npc, lines[Math.floor(Math.random() * lines.length)]);
      }
    }
  }

  void opts; void SEAT_TOP;
  return { floors, npcs, movers, spots, animate, setSceneMood, setNight, setPlace, night: () => k, bodies, say };
}
