// La casa · the reality-show house in 3D: the entrance hall with the show's
// wall and the red door, the living room with the giant screen and the board
// of nominees, the open kitchen with the sponsor's yellow fridge and the
// shelf of tins, the dining table, the confessional (red armchair, black
// curtain, the camera that is La Voz), the laundry, the dormitory, the
// bathroom whose mirror hides a camera corridor, the punishment room, the
// production corridor and the make-up room, and the garden at night: the
// lit pool, the pergola with the hammock, the outdoor gym, palms and cameras
// on posts. Original procedural geometry and canvas textures; in realistic
// mode floors, walls, ceilings and wood take the photographic surfaces of
// app/mundo-real (fitSurfaces before batching). People come from Noche
// abierta's people3d (with real bodies on computers, see mundo-real/persona)
// and the player is the SpanishCue mascot (hero3d).
import * as THREE from 'three';
import { batchStatic, canvas, random } from '../noche-abierta/build3d';
import { addBlobShadow, animatePerson, createPerson, setMood, setPose, type Look, type Person } from '../noche-abierta/people3d';
import { B, C, SEAT_TOP, add, bright, mapped, plantMesh, std, textTexture } from '../el-consorcio/edificio-items';
import { fitSurfaces, surface } from '../mundo-real/real3d';
import { CEILING, CHATTER, CROWD, DOORS, FILLERS, FURNITURE, GARDEN_Z, HOUSE, POOL, SCENES, SECTORS, SPOTS, WALKERS, WALL, WALLS, walkerAt } from './layout.mjs';

type Item = { type: string; x: number; z: number; w: number; d: number; rot?: number; label?: string; solid?: boolean };
type Walker = { path: [number, number][]; speed: number; pause?: number; delay?: number };
export type Npc = { person: Person; key: string; scene?: string; main?: boolean; x: number; z: number; heading: number; baseMood: string; seated?: boolean; talk?: string; body?: string; seed: number; angryUntil?: number };
export type Mover = { walker: Walker; person: Person; key: string; x: number; z: number; moving?: boolean; body?: string; seed: number; angryUntil?: number; heading?: number };
export type Spot = { id: string; ids: string[]; group: THREE.Group; ring: THREE.Mesh; gem: THREE.Mesh; material: THREE.MeshBasicMaterial };
export type Body = { x: number; z: number; radius?: number; who: Npc | Mover };
export type Casa = {
  npcs: Npc[];
  movers: Mover[];
  spots: Spot[];
  animate: (t: number, dt: number, px: number, pz: number) => void;
  setSceneMood: (id: string | null, mood: string | null) => void;
  /** The night follows the lesson: 0 at 22:00, 1 at 05:30, 2 at dawn after the last confession. */
  setNight: (phase: number) => void;
  night: () => number;
  bodies: () => Body[];
  say: (who: Npc | Mover, text: string, seconds?: number, yell?: boolean) => void;
};

// People currently speaking in an open scene.
export const talking = new WeakSet<Person>();

// ---------------------------------------------------------------- textures
function tiles(base: string, line: string, cells = 8) {
  return canvas(256, 256, ctx => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, 256, 256);
    const rand = random(cells * 13);
    const s = 256 / cells;
    for (let r = 0; r < cells; r++) for (let q = 0; q < cells; q++) { ctx.fillStyle = `rgba(${rand() < 0.5 ? '255,255,255' : '0,0,0'},${rand() * 0.06})`; ctx.fillRect(q * s, r * s, s, s); }
    ctx.strokeStyle = line; ctx.lineWidth = 2;
    for (let i = 0; i <= cells; i++) { ctx.beginPath(); ctx.moveTo(0, i * s); ctx.lineTo(256, i * s); ctx.stroke(); ctx.beginPath(); ctx.moveTo(i * s, 0); ctx.lineTo(i * s, 256); ctx.stroke(); }
  }, true);
}
function grass() {
  const rand = random(7);
  return canvas(256, 256, ctx => {
    ctx.fillStyle = '#3c5a2c'; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 3200; i++) { ctx.fillStyle = rand() < 0.5 ? 'rgba(20,40,10,.3)' : 'rgba(120,150,70,.18)'; ctx.fillRect(rand() * 256, rand() * 256, 1 + rand() * 2, 2 + rand() * 4); }
  }, true);
}
function planks(tone: string) {
  const rand = random(19);
  return canvas(256, 256, ctx => {
    ctx.fillStyle = tone; ctx.fillRect(0, 0, 256, 256);
    for (let r = 0; r < 8; r++) { ctx.fillStyle = `rgba(${rand() < 0.5 ? '255,240,220' : '40,20,10'},${rand() * 0.16})`; ctx.fillRect(0, r * 32, 256, 32); ctx.fillStyle = 'rgba(30,16,6,.45)'; ctx.fillRect(0, r * 32, 256, 2); }
  }, true);
}
function screenTexture() {
  return canvas(1024, 512, ctx => {
    const g = ctx.createLinearGradient(0, 0, 0, 512); g.addColorStop(0, '#16121c'); g.addColorStop(1, '#2a0e14');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 1024, 512);
    ctx.fillStyle = '#d8202a'; ctx.beginPath(); ctx.arc(150, 120, 26, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#f4f0ea'; ctx.font = 'bold 44px Arial, sans-serif'; ctx.textBaseline = 'middle'; ctx.fillText('EN DIRECTO', 196, 122);
    ctx.font = 'bold 170px Georgia, serif'; ctx.textAlign = 'center'; ctx.fillText('LA CASA', 512, 290);
    ctx.font = '600 40px Arial, sans-serif'; ctx.fillStyle = '#e8c870'; ctx.fillText('40 cámaras · 0 secretos', 512, 410);
  });
}
function boardTexture() {
  const rand = random(41);
  return canvas(1024, 300, ctx => {
    ctx.fillStyle = '#1c1c24'; ctx.fillRect(0, 0, 1024, 300);
    ctx.fillStyle = '#f4f0ea'; ctx.font = 'bold 34px Arial, sans-serif'; ctx.textAlign = 'center'; ctx.fillText('NOMINADOS · SEMANA 6', 512, 40);
    const skins = ['#e8c4a4', '#c99468', '#8d5a3c', '#f0d6c0', '#a8724e', '#c48f69'];
    for (let i = 0; i < 12; i++) {
      const x = 40 + i * 80, y = 80;
      ctx.fillStyle = '#e8e4dc'; ctx.fillRect(x, y, 64, 84);
      ctx.fillStyle = skins[i % skins.length]; ctx.beginPath(); ctx.arc(x + 32, y + 36, 18, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = ['#2a1a12', '#120d0b', '#e0c070', '#7a3a1e'][Math.floor(rand() * 4)]; ctx.fillRect(x + 14, y + 12, 36, 12);
      ctx.fillStyle = '#3a4a6a'; ctx.fillRect(x + 12, y + 58, 40, 26);
      if (i < 5) { ctx.strokeStyle = '#d8202a'; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(x + 4, y + 4); ctx.lineTo(x + 60, y + 80); ctx.moveTo(x + 60, y + 4); ctx.lineTo(x + 4, y + 80); ctx.stroke(); }
    }
    ctx.fillStyle = '#e8c870'; ctx.font = '600 26px Arial, sans-serif'; ctx.fillText('El domingo, el público decide', 512, 230);
  });
}
function wallLogo() {
  return canvas(512, 1024, ctx => {
    ctx.fillStyle = '#141018'; ctx.fillRect(0, 0, 512, 1024);
    ctx.strokeStyle = '#d8202a'; ctx.lineWidth = 14; ctx.strokeRect(40, 40, 432, 944);
    ctx.fillStyle = '#f4f0ea'; ctx.textAlign = 'center'; ctx.font = 'bold 120px Georgia, serif';
    ctx.fillText('LA', 256, 360); ctx.fillText('CASA', 256, 500);
    ctx.fillStyle = '#e8c870'; ctx.font = '600 36px Arial, sans-serif';
    ctx.fillText('40 cámaras', 256, 640); ctx.fillText('0 secretos', 256, 690);
    ctx.fillStyle = '#d8202a'; ctx.beginPath(); ctx.arc(256, 820, 40, 0, Math.PI * 2); ctx.fill();
  });
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
function makePerson(look: Look, pose: string, opts: { seat?: boolean; mood?: string }) {
  const person = createPerson(look, false);
  person.root.userData.person = true; // the no-ghost QA check finds people by this tag
  setPose(person, pose, Boolean(opts.seat) || pose === 'sit');
  if (opts.mood) setMood(person, opts.mood);
  addBlobShadow(person, 0.8);
  return person;
}
// Housemates at night: T-shirts, hoodies, pyjama bottoms, a few in gym clothes.
const HOUSE_LOOKS: Look[] = [
  { skin: '#e8c0a0', age: 'young', body: 'f', hairStyle: 'ponytail', hairColor: '#3a2416', top: 'tshirt', topColor: '#f0a0c0', bottom: 'shorts', bottomColor: '#2a2a3a' },
  { skin: '#8d5a3c', age: 'young', body: 'm', hairStyle: 'buzz', hairColor: '#120d0b', top: 'tshirt', topColor: '#f4f0ea', bottom: 'shorts', bottomColor: '#3a5a8a', build: 'athletic' },
  { skin: '#c48f69', age: 'adult', body: 'f', hairStyle: 'curly', hairColor: '#1a1210', top: 'hoodie', topColor: '#6a4ac8', bottom: 'pants', bottomColor: '#2a2a30' },
  { skin: '#f0d6c0', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#7a5a3a', top: 'shirt', topColor: '#3fb0a0', bottom: 'pants', bottomColor: '#3a3a42', extras: ['glasses'] },
  { skin: '#b9825c', age: 'young', body: 'f', hairStyle: 'long', hairColor: '#120d0b', top: 'tshirt', topColor: '#f0c040', bottom: 'jeans', bottomColor: '#24304a', extras: ['earrings'] },
  { skin: '#e2b896', age: 'adult', body: 'm', hairStyle: 'curly', hairColor: '#2a1a12', top: 'hoodie', topColor: '#c8302a', bottom: 'pants', bottomColor: '#1a1a20', extras: ['beard'] },
  { skin: '#dcae88', age: 'old', body: 'f', hairStyle: 'bob', hairColor: '#c8c0c8', top: 'sweater', topColor: '#2a8a6a', bottom: 'pants', bottomColor: '#3a3028', extras: ['glasses'] },
  { skin: '#a8724e', age: 'young', body: 'm', hairStyle: 'cap', hairColor: '#120d0b', top: 'tshirt', topColor: '#141418', bottom: 'shorts', bottomColor: '#c8a040' },
  { skin: '#f0d6c0', age: 'young', body: 'f', hairStyle: 'bun', hairColor: '#e0c070', top: 'shirt', topColor: '#e8e4dc', bottom: 'pants', bottomColor: '#5a3a6a' },
];
const NIGHT_WALKERS: Look[] = [
  { skin: '#c99468', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#120d0b', top: 'hoodie', topColor: '#3a4a6a', bottom: 'pants', bottomColor: '#2a2a30' },
  { skin: '#e8c4a4', age: 'young', body: 'f', hairStyle: 'long', hairColor: '#6a2a18', top: 'sweater', topColor: '#d8a0b0', bottom: 'pants', bottomColor: '#3a2a3a' },
];

// ---------------------------------------------------------------- spots
function buildSpot(id: string, ids: string[], x: number, z: number): Spot {
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
  return { id, ids, group, ring, gem, material };
}

// ---------------------------------------------------------------- materials
type Mats = Record<string, THREE.Material>;
function materials(real: boolean): Mats {
  const kitchenTile = tiles('#e8e4dc', 'rgba(120,110,100,.5)', 8); kitchenTile.repeat.set(0.5, 0.5);
  const bathTile = tiles('#cfe0e4', 'rgba(70,100,110,.5)', 10); bathTile.repeat.set(0.6, 0.6);
  const grassTex = grass(); grassTex.repeat.set(0.3, 0.3);
  const deckTex = planks('#a8805a'); deckTex.repeat.set(0.5, 0.5);
  const stoneTex = tiles('#cdc4b4', 'rgba(90,80,70,.35)', 4); stoneTex.repeat.set(0.4, 0.4);
  return {
    floor: real ? surface('laminate_floor_02', '#d8c4ac') : new THREE.MeshStandardMaterial({ map: planks('#b89470'), roughness: 0.55 }),
    crewFloor: real ? surface('dirty_carpet', '#7a8090') : std('#5a6070', 0.95),
    kitchen: new THREE.MeshStandardMaterial({ map: kitchenTile, roughness: 0.4 }),
    bath: new THREE.MeshStandardMaterial({ map: bathTile, roughness: 0.25 }),
    grass: new THREE.MeshStandardMaterial({ map: grassTex, roughness: 0.95 }),
    deck: new THREE.MeshStandardMaterial({ map: deckTex, roughness: 0.7 }),
    stone: new THREE.MeshStandardMaterial({ map: stoneTex, roughness: 0.8 }),
    rubber: std('#2a2a2e', 0.95),
    ceiling: real ? surface('ceiling_interior', '#f4f2ee') : std('#f2f0ec', 0.95),
    roof: std('#3a3c42', 0.9),
    wall: real ? surface('plastered_wall_04', '#f1ece4') : std('#ece6dc', 0.92),
    extWall: real ? surface('plastered_wall_04', '#d8d2c8') : std('#d8d2c8', 0.9),
    gardenWall: real ? surface('plastered_wall_04', '#c8c0b0') : std('#c8c0b0', 0.95),
    ivy: std('#2f4a2a', 0.95),
    skirting: std('#3a3a40', 0.7),
    glass: new THREE.MeshPhysicalMaterial({ color: '#bcd8e4', transparent: true, opacity: 0.22, roughness: 0.05, depthWrite: false }),
    frame: std('#26262c', 0.5, 0.4),
    mirror: std('#cfd8dc', 0.04, 1),
    wood: real ? surface('wood_table_001', '#d4ac84') : std('#a8805a', 0.6),
    darkwood: real ? surface('wood_table_001', '#6a4a32') : std('#5a3a24', 0.6),
    carpet: real ? surface('dirty_carpet', '#c8b8a8') : std('#b8a898', 0.95),
  };
}

// ---------------------------------------------------------------- floors, walls, ceiling
function buildShell(g: THREE.Group, M: Mats) {
  const flat = (x0: number, z0: number, x1: number, z1: number, mat: THREE.Material, y = 0) => {
    const p = add(g, new THREE.PlaneGeometry(x1 - x0, z1 - z0), mat, (x0 + x1) / 2, y, (z0 + z1) / 2);
    p.rotation.x = -Math.PI / 2; p.receiveShadow = true; return p;
  };
  // The garden, the stone round the pool, the gym's rubber, the pergola's stone.
  flat(-26, -26, 26, GARDEN_Z, M.grass, -0.002);
  flat(POOL.x0 - 2, POOL.z0 - 2, POOL.x1 + 2, POOL.z1 + 2, M.stone, 0.004);
  const gym = SECTORS.find((s: { id: string }) => s.id === 'gimnasio')!;
  flat(gym.x0 + 0.4, gym.z0 + 0.4, gym.x1, gym.z1, M.rubber, 0.004);
  flat(10.8, -19, 21.2, -11, M.stone, 0.004);
  // The house: wood everywhere, tiles in the kitchen and the bathroom, carpet behind the grey door.
  flat(HOUSE.x0, HOUSE.z0, HOUSE.x1, HOUSE.z1, M.floor, 0.002);
  for (const s of SECTORS as { id: string; x0: number; z0: number; x1: number; z1: number }[]) {
    if (s.id === 'cocina') flat(s.x0, s.z0, s.x1, s.z1, M.kitchen, 0.006);
    if (s.id === 'bano' || s.id === 'castigo') flat(s.x0, s.z0, s.x1, s.z1, s.id === 'bano' ? M.bath : std('#f4f4f2', 0.6), 0.006);
    if (s.id === 'pasillo' || s.id === 'maquillaje') flat(s.x0, s.z0, s.x1, s.z1, M.crewFloor, 0.006);
  }
  // The ceiling over the whole house (seen from below) and the flat roof (seen from the garden).
  const ceil = add(g, new THREE.PlaneGeometry(HOUSE.x1 - HOUSE.x0, HOUSE.z1 - HOUSE.z0), M.ceiling, 0, CEILING, (HOUSE.z0 + HOUSE.z1) / 2);
  ceil.rotation.x = Math.PI / 2;
  const roof = add(g, new THREE.PlaneGeometry(HOUSE.x1 - HOUSE.x0 + 0.6, HOUSE.z1 - HOUSE.z0 + 0.6), M.roof, 0, CEILING + 0.06, (HOUSE.z0 + HOUSE.z1) / 2);
  roof.rotation.x = -Math.PI / 2;
  // Walls.
  for (const seg of WALLS as (number | string)[][]) {
    const [x0, z0, x1, z1] = seg as number[];
    const kind = String(seg[4]);
    const len = Math.hypot(x1 - x0, z1 - z0);
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, ry = x0 === x1 ? Math.PI / 2 : 0;
    if (kind === 'glass') {
      add(g, B(len, 0.12, WALL), M.frame, cx, 0.06, cz, ry);
      add(g, B(len, 0.12, WALL), M.frame, cx, CEILING - 0.06, cz, ry);
      add(g, B(len, CEILING - 0.24, 0.03), M.glass, cx, CEILING / 2, cz, ry);
      for (let t = 0; t <= len + 0.01; t += 2) { const k = len ? t / len : 0; add(g, B(0.08, CEILING, 0.08), M.frame, x0 + (x1 - x0) * k, CEILING / 2, z0 + (z1 - z0) * k); }
      continue;
    }
    if (kind === 'garden') {
      add(g, B(len + WALL, 3, WALL), M.gardenWall, cx, 1.5, cz, ry);
      add(g, B(len + WALL, 1.6, WALL + 0.12), M.ivy, cx, 0.8, cz, ry);
      continue;
    }
    if (kind === 'mirror') {
      add(g, B(len, CEILING, WALL), M.wall, cx, CEILING / 2, cz, ry);
      add(g, B(len - 0.4, 1.2, 0.02), M.mirror, cx + WALL / 2 + 0.012, 1.55, cz, ry);
      continue;
    }
    add(g, B(len + WALL, CEILING, WALL), kind === 'ext' ? M.extWall : M.wall, cx, CEILING / 2, cz, ry);
    add(g, B(len + WALL + 0.02, 0.1, WALL + 0.02), M.skirting, cx, 0.05, cz, ry);
  }
  // Lintels over the doors, with the name of the room on both sides.
  for (const door of DOORS as { x: number; z: number; w: number; along: string; label?: string }[]) {
    const ry = door.along === 'z' ? Math.PI / 2 : 0;
    add(g, B(door.w, CEILING - 2.2, WALL), M.wall, door.x, (CEILING + 2.2) / 2, door.z, ry);
    if (!door.label) continue;
    const sign = mapped(textTexture(door.label, door.label === 'SOLO PRODUCCIÓN' ? '#d8202a' : '#26262c', '#f4f0ea', 512, 96, 'bold 52px Arial, sans-serif'), 0.25);
    for (const s of [-1, 1]) {
      const p = add(g, new THREE.PlaneGeometry(1.1, 0.2), sign, door.x + (ry ? s * (WALL / 2 + 0.01) : 0), 2.42, door.z + (ry ? 0 : s * (WALL / 2 + 0.01)));
      p.rotation.y = ry ? (s > 0 ? Math.PI / 2 : -Math.PI / 2) : (s > 0 ? 0 : Math.PI);
    }
  }
}

// ---------------------------------------------------------------- furniture
type Anim = { glows: THREE.MeshStandardMaterial[]; leds: THREE.Mesh[]; water: THREE.MeshStandardMaterial[]; sway: THREE.Object3D[] };

function chair(h: THREE.Object3D, x: number, z: number, mat: THREE.Material, ry = 0) {
  const c = new THREE.Group(); c.position.set(x, 0, z); c.rotation.y = ry; h.add(c);
  add(c, B(0.44, 0.04, 0.42), mat, 0, SEAT_TOP - 0.02, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(c, B(0.035, SEAT_TOP - 0.04, 0.035), std('#26262c', 0.5, 0.5), sx * 0.19, (SEAT_TOP - 0.04) / 2, sz * 0.18);
  add(c, B(0.44, 0.42, 0.04), mat, 0, SEAT_TOP + 0.24, -0.2);
}
// A box against a wall: which way does its front look? Toward the room's middle.
function facingIn(item: Item) {
  const s = SECTORS.find((r: { x0: number; x1: number; z0: number; z1: number }) => item.x >= r.x0 && item.x <= r.x1 && item.z >= r.z0 && item.z <= r.z1) as { x0: number; x1: number; z0: number; z1: number } | undefined;
  if (!s) return 0;
  const dx = (s.x0 + s.x1) / 2 - item.x, dz = (s.z0 + s.z1) / 2 - item.z;
  return Math.abs(dx) > Math.abs(dz) ? (dx > 0 ? Math.PI / 2 : -Math.PI / 2) : (dz > 0 ? 0 : Math.PI);
}

function buildItem(g: THREE.Group, item: Item, M: Mats, anim: Anim, soft: THREE.Group) {
  const h = new THREE.Group();
  h.position.set(item.x, 0, item.z);
  h.rotation.y = (item.rot ?? 0) * Math.PI / 2;
  g.add(h);
  const { w, d } = item;
  const turned = item.rot === 1 || item.rot === 3;
  const W = turned ? d : w, D = turned ? w : d; // world extents
  switch (item.type) {
    case 'door': {
      const red = item.label === 'red';
      add(h, B(w + 0.16, 2.3, 0.08), M.frame, 0, 1.15, 0);
      add(h, B(w, 2.2, 0.1), red ? std('#b81e26', 0.4) : std('#2a2a30', 0.35, 0.3), 0, 1.1, -0.02);
      const sign = mapped(textTexture(red ? 'SALIDA VOLUNTARIA' : 'LA CASA', red ? '#f4f0ea' : '#141018', red ? '#b81e26' : '#e8c870', 512, 96, 'bold 50px Arial, sans-serif'), 0.4);
      add(h, new THREE.PlaneGeometry(w * 0.9, 0.22), sign, 0, 2.5, -0.08).rotation.y = Math.PI;
      if (!red) { const l = add(h, B(0.4, 0.12, 0.05), std('#300', 0.4, 0, '#ff2020', 1.2), 0, 2.78, -0.1); anim.leds.push(l); }
      break;
    }
    case 'bench': add(h, B(w, 0.06, d), M.wood, 0, 0.42, 0); for (const s of [-1, 1]) add(h, B(0.06, 0.42, d * 0.8), M.frame, s * (w / 2 - 0.12), 0.21, 0); break;
    case 'plant': plantMesh(h, 0, 0, 1.1); break;
    case 'showwall': {
      const p = add(h, new THREE.PlaneGeometry(D, 2.8), mapped(wallLogo(), 0.35), -0.06, 1.5, 0); p.rotation.y = -Math.PI / 2;
      add(h, B(0.1, 2.9, D + 0.1), std('#141018', 0.4), 0, 1.5, 0);
      break;
    }
    case 'clock': {
      const face = add(h, new THREE.CircleGeometry(0.34, 32), mapped(textTexture('SIN HORA', '#f4f0ea', '#26262c', 256, 256, 'bold 40px Arial, sans-serif')), 0.06, 2.2, 0); face.rotation.y = Math.PI / 2;
      break;
    }
    case 'screen': {
      add(h, B(0.1, 2.4, D + 0.12), std('#0a0a0c', 0.3, 0.4), 0, 1.6, 0);
      const mat = mapped(screenTexture(), 0.9); (mat as THREE.MeshStandardMaterial).toneMapped = false;
      const p = add(h, new THREE.PlaneGeometry(D, 2.25), mat, 0.06, 1.6, 0); p.rotation.y = Math.PI / 2;
      break;
    }
    case 'sofa': {
      const fabric = std('#d8d2c8', 0.95), base = std('#8a8478', 0.9);
      add(h, B(w, 0.3, d), base, 0, 0.15, 0);
      add(h, B(w - 0.2, 0.14, d - 0.25), fabric, 0, SEAT_TOP - 0.07, 0.08);
      add(h, B(w, 0.5, 0.22), fabric, 0, 0.62, -d / 2 + 0.11);
      for (const s of [-1, 1]) add(h, B(0.16, 0.28, d), fabric, s * (w / 2 - 0.08), 0.5, 0);
      for (let i = 0; i < 3; i++) add(h, B(0.38, 0.34, 0.12), std(['#d8202a', '#e8c870', '#26262c'][i], 0.95), -w / 3 + i * w / 3, 0.62, -d / 2 + 0.3).rotation.x = -0.25;
      break;
    }
    case 'coffeetable': add(h, B(w, 0.05, d), M.darkwood, 0, 0.4, 0); for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(h, C(0.025, 0.025, 0.38, 6), M.frame, sx * (w / 2 - 0.08), 0.19, sz * (d / 2 - 0.08)); add(h, C(0.04, 0.04, 0.1, 10), std('#e8c870', 0.3, 0.6), 0.3, 0.48, 0); break;
    case 'rug': { const p = add(h, new THREE.PlaneGeometry(w, d), M.carpet, 0, 0.012, 0); p.rotation.x = -Math.PI / 2; p.receiveShadow = true; break; }
    case 'board': { add(h, B(w + 0.1, 1.0, 0.04), std('#141018', 0.5), 0, 1.7, 0); const p = add(h, new THREE.PlaneGeometry(w, 0.9), mapped(boardTexture(), 0.25), 0, 1.7, -0.03); p.rotation.y = Math.PI; break; }
    case 'lamp': { add(h, C(0.15, 0.15, 0.03, 16), M.frame, 0, 0.015, 0); add(h, C(0.015, 0.015, 1.5, 6), M.frame, 0, 0.75, 0); const shade = add(h, C(0.16, 0.24, 0.3, 16, ), std('#f4ecd8', 0.8, 0, '#ffd8a0', 0.6), 0, 1.55, 0); anim.glows.push(shade.material as THREE.MeshStandardMaterial); break; }
    case 'counter': case 'island': {
      add(h, B(w, 0.86, d), std('#f4f2ee', 0.5), 0, 0.43, 0);
      add(h, B(w + 0.04, 0.04, d + 0.04), std('#2a2a2e', 0.25, 0.2), 0, 0.88, 0);
      if (item.type === 'counter') { add(h, B(0.6, 0.02, 0.4), std('#b8c0c6', 0.25, 0.8), 0, 0.905, -0.4); add(h, C(0.18, 0.18, 0.12, 16), std('#2a2a2e', 0.4, 0.5), 0, 0.96, 0.8); }
      else for (let i = 0; i < 3; i++) add(h, new THREE.SphereGeometry(0.07, 10, 8), std(['#d8302a', '#f0c020', '#3a8a3a'][i], 0.6), -0.4 + i * 0.25, 0.97, 0);
      break;
    }
    case 'stool': add(h, C(0.2, 0.2, 0.05, 14), std('#d8202a', 0.5), 0, 0.6, 0); add(h, C(0.03, 0.03, 0.58, 8), M.frame, 0, 0.29, 0); add(h, C(0.16, 0.16, 0.02, 14), M.frame, 0, 0.01, 0); break;
    case 'shelf': {
      add(h, B(w, 1.9, d), M.darkwood, 0, 0.95, 0);
      const tin = std('#c8ccd0', 0.3, 0.7), label = std('#2a6ac8', 0.6);
      for (let r = 0; r < 4; r++) for (let i = 0; i < 10; i++) { add(h, C(0.045, 0.045, 0.09, 10), tin, -w / 2 + 0.2 + i * 0.3, 0.3 + r * 0.45, d / 2 + 0.05); add(h, C(0.046, 0.046, 0.04, 10), label, -w / 2 + 0.2 + i * 0.3, 0.3 + r * 0.45, d / 2 + 0.05); }
      add(h, C(0.05, 0.05, 0.1, 10), std('#f0a040', 0.5), w / 2 - 0.2, 1.65, d / 2 + 0.05);
      break;
    }
    case 'fridge': {
      const f = new THREE.Group(); f.rotation.y = facingIn(item) - (item.rot ?? 0) * Math.PI / 2; h.add(f);
      add(f, B(0.9, 1.9, 0.8), std('#f0c020', 0.35, 0.1), 0, 0.95, 0);
      add(f, B(0.9, 0.02, 0.81), std('#c89a10', 0.4), 0, 1.25, 0);
      add(f, new THREE.PlaneGeometry(0.7, 0.3), mapped(textTexture('Vitalín', '#ffffff', '#d8202a', 512, 200, 'bold 120px Georgia, serif')), 0, 1.55, 0.41);
      add(f, B(0.04, 0.5, 0.04), std('#e8e8e8', 0.3, 0.7), 0.36, 1.0, 0.42);
      break;
    }
    case 'hatch': add(h, B(w, 0.6, 0.06), M.frame, 0, 1.3, 0); break;
    case 'table': add(h, B(w, 0.06, d), M.wood, 0, 0.73, 0); for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(h, B(0.06, 0.7, 0.06), M.frame, sx * (w / 2 - 0.1), 0.35, sz * (d / 2 - 0.1)); for (let i = 0; i < 6; i++) add(h, new THREE.CircleGeometry(0.12, 16), std('#ffffff', 0.4), -w / 2 + 0.6 + i * 0.96, 0.765, (i % 2 ? 0.3 : -0.3)).rotation.x = -Math.PI / 2; break;
    case 'chairs': { const n = Math.max(1, Math.round(w / 0.7)); for (let i = 0; i < n; i++) chair(h, -w / 2 + 0.35 + i * (w / n), 0, std('#f4f2ee', 0.5)); break; }
    case 'armchair': {
      const velvet = std('#a8101e', 0.85);
      add(h, B(w, 0.3, d), velvet, 0, 0.15, 0);
      add(h, B(w - 0.18, 0.14, d - 0.2), velvet, 0, SEAT_TOP - 0.07, 0.06);
      add(h, B(w, 0.9, 0.2), velvet, 0, 0.75, -d / 2 + 0.1);
      for (const s of [-1, 1]) add(h, B(0.16, 0.36, d), velvet, s * (w / 2 - 0.08), 0.52, 0);
      add(h, B(w, 0.08, 0.24), std('#d8b048', 0.3, 0.7), 0, 1.24, -d / 2 + 0.1);
      break;
    }
    case 'camera': {
      for (let i = 0; i < 3; i++) { const leg = add(h, C(0.015, 0.015, 1.4, 6), M.frame, Math.sin(i * 2.1) * 0.18, 0.66, Math.cos(i * 2.1) * 0.18); leg.rotation.set(Math.cos(i * 2.1) * 0.25, 0, -Math.sin(i * 2.1) * 0.25); }
      const cam = new THREE.Group(); cam.position.set(0, 1.42, 0); cam.rotation.y = Math.PI / 2; h.add(cam);
      add(cam, B(0.22, 0.24, 0.44), std('#141418', 0.35, 0.5), 0, 0, 0);
      add(cam, C(0.08, 0.1, 0.18, 16), std('#0a0a0c', 0.2, 0.6), 0, 0, 0.3).rotation.x = Math.PI / 2;
      add(cam, new THREE.CircleGeometry(0.07, 16), std('#2a3a5a', 0.05, 0.9), 0, 0, 0.395);
      anim.leds.push(add(cam, new THREE.SphereGeometry(0.025, 8, 6), std('#300', 0.4, 0, '#ff2020', 2), 0.08, 0.14, 0.2));
      break;
    }
    case 'curtain': {
      const cloth = new THREE.MeshStandardMaterial({ color: '#0e0e12', roughness: 1, side: THREE.DoubleSide });
      const geo = new THREE.PlaneGeometry(D, CEILING - 0.05, 32, 1);
      const pos = geo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < pos.count; i++) pos.setZ(i, Math.sin(pos.getX(i) * 9) * 0.05);
      geo.computeVertexNormals();
      const p = add(h, geo, cloth, 0, (CEILING - 0.05) / 2, 0); p.rotation.y = Math.PI / 2;
      break;
    }
    case 'washer': case 'dryer': {
      const f = new THREE.Group(); f.rotation.y = facingIn(item) - (item.rot ?? 0) * Math.PI / 2; h.add(f);
      add(f, B(0.78, 0.86, 0.76), std('#f4f4f2', 0.4), 0, 0.43, 0);
      add(f, new THREE.CircleGeometry(0.22, 24), std('#3a4a5a', 0.1, 0.5), 0, 0.42, 0.385);
      add(f, new THREE.RingGeometry(0.22, 0.27, 24), std('#b8c0c6', 0.3, 0.7), 0, 0.42, 0.386);
      break;
    }
    case 'foldtable': add(h, B(w, 0.04, d), std('#e8e4dc', 0.6), 0, 0.78, 0); for (const sx of [-1, 1]) add(h, B(0.04, 0.76, d * 0.8), M.frame, sx * (w / 2 - 0.1), 0.38, 0); for (let i = 0; i < 4; i++) add(h, B(0.32, 0.03 + i * 0.03, 0.26), std(['#f4f0ea', '#3a6ac8', '#141418', '#d8a0b0'][i], 0.95), -0.5 + i * 0.32, 0.82 + i * 0.015, 0); break;
    case 'rack': { for (const s of [-1, 1]) add(h, C(0.015, 0.015, 1.6, 6), M.frame, s * w / 2, 0.8, 0); add(h, C(0.012, 0.012, w, 6), M.frame, 0, 1.6, 0).rotation.z = Math.PI / 2; for (let i = 0; i < 6; i++) add(h, B(0.3, 0.6, 0.04), std(['#c8302a', '#2a4a7a', '#f0c020', '#3a8a5a', '#f4f0ea', '#6a4ac8'][i], 0.95), -w / 2 + 0.15 + i * (w - 0.3) / 5, 1.25, 0); break; }
    case 'bed': {
      const head = item.x < -17 ? -1 : 1; // the pillow against the wall
      add(h, B(w, 0.3, d), M.darkwood, 0, 0.15, 0);
      add(h, B(w - 0.06, 0.22, d - 0.06), std('#f4f2ee', 0.95), 0, 0.41, 0);
      add(h, B(w * 0.62, 0.06, d - 0.02), std(['#3a5a8a', '#c8302a', '#e8c870', '#3a8a6a'][Math.abs(Math.round(item.z)) % 4], 0.95), -head * w * 0.17, 0.55, 0);
      add(h, B(0.4, 0.1, d * 0.7), std('#ffffff', 0.95), head * (w / 2 - 0.26), 0.56, 0);
      add(h, B(0.06, 0.8, d), M.darkwood, head * (w / 2 - 0.03), 0.4, 0);
      break;
    }
    case 'wardrobe': add(h, B(w, 2.2, d), M.wood, 0, 1.1, 0); add(h, B(0.02, 2.1, 0.01), M.frame, 0, 1.1, d / 2 + 0.005); break;
    case 'sinks': {
      add(h, B(w, 0.84, d), std('#f4f4f2', 0.5), 0, 0.42, 0);
      for (const z of [-1.6, 0, 1.6]) { add(h, C(0.2, 0.16, 0.06, 18), std('#ffffff', 0.15), 0.05, 0.86, z); add(h, C(0.015, 0.015, 0.2, 6), std('#c8ccd0', 0.2, 0.9), -0.2, 0.96, z); }
      break;
    }
    case 'shower': add(h, B(w, 0.06, d), std('#f4f4f2', 0.4), 0, 0.03, 0); add(h, B(w, 2.1, 0.02), M.glass, 0, 1.08, d / 2); add(h, B(0.02, 2.1, d), M.glass, -w / 2, 1.08, 0); add(h, C(0.08, 0.08, 0.02, 12), std('#c8ccd0', 0.2, 0.9), w / 2 - 0.3, 2.1, -d / 2 + 0.3); break;
    case 'mat': add(h, B(w, 0.04, d), std('#6a4ac8', 0.9), 0, 0.02, 0); for (let i = 0; i < 6; i++) add(h, new THREE.SphereGeometry(0.06, 8, 6), std(['#3a8a3a', '#e8c870', '#d8202a'][i % 3], 0.95), -0.6 + i * 0.24, 0.08, d / 2 - 0.15); break;
    case 'monitors': {
      add(h, B(w, 0.05, d), std('#2a2a2e', 0.5), 0, 0.74, 0);
      for (const sx of [-1, 1]) add(h, B(0.05, 0.72, d * 0.8), M.frame, sx * (w / 2 - 0.1), 0.36, 0);
      const rand = random(3);
      for (let r = 0; r < 2; r++) for (let i = 0; i < 6; i++) {
        add(h, B(0.96, 0.58, 0.04), std('#0a0a0c', 0.3), -w / 2 + 0.55 + i * 1.06, 1.1 + r * 0.62, -d / 2 + 0.1);
        const m = std('#000', 0.3, 0, ['#4a6a9a', '#3a6a5a', '#8a6a4a', '#5a5a7a'][Math.floor(rand() * 4)], 0.9);
        anim.glows.push(m as THREE.MeshStandardMaterial);
        add(h, new THREE.PlaneGeometry(0.9, 0.52), m, -w / 2 + 0.55 + i * 1.06, 1.1 + r * 0.62, -d / 2 + 0.125);
      }
      add(h, B(0.3, 0.05, 0.3), std('#c8a060', 0.8), w / 2 - 0.6, 0.79, 0.1); // the cold pizza box
      break;
    }
    case 'officechair': chair(h, 0, 0, std('#26262c', 0.6), Math.PI); break;
    case 'watercooler': add(h, B(0.36, 0.95, 0.36), std('#f4f4f2', 0.5), 0, 0.48, 0); add(h, C(0.15, 0.15, 0.4, 14), new THREE.MeshStandardMaterial({ color: '#a8d0f0', transparent: true, opacity: 0.6, roughness: 0.1 }), 0, 1.15, 0); break;
    case 'vanity': {
      const f = new THREE.Group(); f.rotation.y = facingIn(item) - (item.rot ?? 0) * Math.PI / 2; h.add(f);
      add(f, B(D, 0.76, 0.6), std('#f4f2ee', 0.5), 0, 0.38, 0);
      add(f, B(D * 0.9, 1.0, 0.03), M.mirror, 0, 1.4, -0.28);
      for (let i = 0; i < 9; i++) { const b = add(f, new THREE.SphereGeometry(0.045, 8, 6), std('#fff4dc', 0.3, 0, '#ffe8b0', 1.4), -D * 0.45 + i * D * 0.9 / 8, 1.95, -0.26); anim.glows.push(b.material as THREE.MeshStandardMaterial); }
      for (let i = 0; i < 12; i++) add(f, C(0.012, 0.012, 0.16, 6), std(['#d8202a', '#141418', '#e8c870'][i % 3], 0.5), -0.8 + i * 0.14, 0.84, 0.05);
      break;
    }
    case 'makeupchair': chair(h, 0, 0, std('#141418', 0.5)); break;
    case 'coatrack': { add(h, C(0.015, 0.015, w, 6), M.frame, 0, 1.6, 0).rotation.z = Math.PI / 2; for (const s of [-1, 1]) add(h, C(0.015, 0.015, 1.6, 6), M.frame, s * w / 2, 0.8, 0); for (let i = 0; i < 7; i++) add(h, B(0.32, 0.9, 0.06), std(['#d8202a', '#e8c870', '#141418', '#f4f0ea', '#6a4ac8', '#2a8a6a', '#c8a060'][i], 0.85), -w / 2 + 0.2 + i * (w - 0.4) / 6, 1.12, 0); break; }
    case 'pool': {
      const waterMat = new THREE.MeshStandardMaterial({ color: '#2aa8d8', roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.85, emissive: '#0a6a9a', emissiveIntensity: 0.6 });
      anim.water.push(waterMat);
      const water = add(g, new THREE.PlaneGeometry(w, d), waterMat, item.x, -0.12, item.z); water.rotation.x = -Math.PI / 2;
      const bed = add(g, new THREE.PlaneGeometry(w, d), std('#8ad0e8', 0.6), item.x, -1.4, item.z); bed.rotation.x = -Math.PI / 2;
      for (const s of [-1, 1]) { add(g, B(w, 1.4, 0.05), std('#a8dcef', 0.5), item.x, -0.7, item.z + s * d / 2); add(g, B(0.05, 1.4, d), std('#a8dcef', 0.5), item.x + s * w / 2, -0.7, item.z); }
      for (const s of [-1, 1]) { add(g, B(w + 0.5, 0.06, 0.25), std('#f4f0ea', 0.6), item.x, 0.03, item.z + s * (d / 2 + 0.12)); add(g, B(0.25, 0.06, d), std('#f4f0ea', 0.6), item.x + s * (w / 2 + 0.12), 0.03, item.z); }
      for (const s of [-0.2, 0.2]) { const r = add(g, new THREE.TorusGeometry(0.25, 0.012, 6, 16, Math.PI), std('#c8ccd0', 0.2, 0.9), item.x + w / 2 - 0.6 + s, 0.25, item.z + d / 2 - 0.05); r.rotation.y = Math.PI / 2; }
      break;
    }
    case 'lounger': add(h, B(w, 0.08, d), std('#f4f4f2', 0.6), 0, 0.34, 0); add(h, B(w, 0.08, 0.6), std('#f4f4f2', 0.6), 0, 0.55, -d / 2 + 0.25).rotation.x = -0.6; for (const sz of [-1, 1]) add(h, B(w * 0.9, 0.3, 0.04), M.frame, 0, 0.15, sz * (d / 2 - 0.1)); add(h, B(w * 0.85, 0.04, d * 0.6), std('#3a8ac8', 0.9), 0, 0.4, 0.2); break;
    case 'post': add(h, B(w, 2.6, d), M.wood, 0, 1.3, 0); break;
    case 'pergola': { for (let i = 0; i <= 8; i++) add(h, B(0.08, 0.12, d + 0.4), M.wood, -w / 2 + i * w / 8, 2.62, 0); for (const s of [-1, 1]) add(h, B(w + 0.4, 0.16, 0.12), M.wood, 0, 2.5, s * d / 2); for (let i = 0; i < 16; i++) { const b = add(h, new THREE.SphereGeometry(0.05, 8, 6), std('#fff4dc', 0.3, 0, '#ffd890', 1.4), -w / 2 + i * w / 15, 2.42 - Math.sin(i / 15 * Math.PI) * 0.2, 0); anim.glows.push(b.material as THREE.MeshStandardMaterial); } break; }
    case 'hammock': {
      for (const s of [-1, 1]) { add(h, C(0.04, 0.05, 1.4, 8), M.frame, s * (w / 2), 0.7, 0); }
      const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(-w / 2, 1.2, 0), new THREE.Vector3(-w / 4, 0.68, 0), new THREE.Vector3(0, 0.6, 0), new THREE.Vector3(w / 4, 0.68, 0), new THREE.Vector3(w / 2, 1.2, 0)]);
      const cloth = add(h, new THREE.TubeGeometry(curve, 24, d / 2.4, 8, false), std('#e8d0a0', 0.95), 0, 0, 0); cloth.scale.set(1, 0.35, 1); cloth.position.y = 0.42;
      anim.sway.push(cloth);
      break;
    }
    case 'button': { add(h, C(0.22, 0.26, 0.92, 16), std('#f4f4f2', 0.5), 0, 0.46, 0); const b = add(h, C(0.17, 0.17, 0.1, 20), std('#a00', 0.3, 0, '#ff2020', 0.6), 0, 0.97, 0); anim.glows.push(b.material as THREE.MeshStandardMaterial); add(h, new THREE.PlaneGeometry(0.4, 0.14), mapped(textTexture('NO SOLTAR', '#f0c020', '#141418', 256, 90, 'bold 46px Arial, sans-serif')), 0, 0.7, 0.25); break; }
    case 'weights': { add(h, B(w, 0.06, d), M.frame, 0, 0.45, 0); for (const sx of [-1, 1]) add(h, B(0.05, 0.45, d), M.frame, sx * (w / 2 - 0.05), 0.22, 0); for (let i = 0; i < 6; i++) { const z = -d / 2 + 0.2 + i * (d - 0.4) / 5; add(h, C(0.012, 0.012, 0.36, 6), std('#c8ccd0', 0.3, 0.8), 0, 0.52, z).rotation.z = Math.PI / 2; for (const s of [-1, 1]) add(h, C(0.05 + i * 0.006, 0.05 + i * 0.006, 0.05, 12), std('#141418', 0.5), s * 0.15, 0.52, z).rotation.z = Math.PI / 2; } break; }
    case 'bike': add(h, B(0.12, 0.1, d * 0.9), M.frame, 0, 0.12, 0); add(h, C(0.04, 0.04, 0.8, 8), M.frame, 0, 0.5, -d / 4); add(h, B(0.22, 0.06, 0.3), std('#141418', 0.8), 0, 0.92, -d / 4); add(h, C(0.04, 0.04, 1.0, 8), M.frame, 0, 0.6, d / 3); add(h, B(0.46, 0.04, 0.04), M.frame, 0, 1.1, d / 3); add(h, C(0.26, 0.26, 0.06, 18), std('#c8302a', 0.5), 0, 0.36, d / 6).rotation.z = Math.PI / 2; break;
    case 'palm': {
      add(h, C(0.12, 0.2, 5.2, 8), std('#8a7458', 0.95), 0, 2.6, 0);
      const leaf = std('#3a6a2a', 0.9);
      for (let i = 0; i < 9; i++) { const f = new THREE.Group(); f.position.y = 5.2; f.rotation.y = i * 0.7; h.add(f); const l = add(f, B(0.3, 0.03, 1.9), leaf, 0, -0.25, 0.9); l.rotation.x = 0.45; anim.sway.push(f); }
      break;
    }
    case 'campost': { add(h, C(0.06, 0.08, 3.4, 8), M.frame, 0, 1.7, 0); const cam = add(h, B(0.2, 0.18, 0.36), std('#141418', 0.35, 0.5), 0, 3.5, 0.1); cam.rotation.x = 0.3; anim.sway.push(cam); anim.leds.push(add(h, new THREE.SphereGeometry(0.03, 8, 6), std('#300', 0.4, 0, '#ff2020', 2), 0.08, 3.62, 0.22)); break; }
    case 'deck': { const p = add(h, new THREE.PlaneGeometry(w, d), M.deck, 0, 0.008, 0); p.rotation.x = -Math.PI / 2; p.receiveShadow = true; break; }
    default: add(h, B(W, 0.6, D), std('#888', 0.8), 0, 0.3, 0);
  }
  void soft;
}

// ---------------------------------------------------------------- the whole house
export function buildCasa(scene: THREE.Scene, opts: { low: boolean; shadows: boolean; real?: boolean }): Casa {
  const real = Boolean(opts.real);
  const anim: Anim = { glows: [], leds: [], water: [], sway: [] };
  const world = new THREE.Group();
  scene.add(world);
  const statics = new THREE.Group();
  world.add(statics);
  const soft = new THREE.Group();
  const M = materials(real);
  buildShell(statics, M);
  for (const item of FURNITURE as Item[]) buildItem(statics, item, M, anim, soft);
  // Rooms are lit from the ceiling; production by its monitors; the garden by the pool and the string lights.
  const lamps: THREE.PointLight[] = [];
  for (const [color, x, y, z, intensity, range] of [
    ['#fff0dc', -2, 3.0, 4, 6, 14], ['#fff0dc', 12, 3.0, 0, 6, 14], ['#fff0dc', 12, 3.0, 9, 4, 10], ['#ffe0c0', -2, 3.0, 16, 5, 12],
    ['#ff8a80', 21, 3.0, 7.6, 3, 7], ['#fff0dc', 21, 3.0, -1, 3, 8], ['#e0e8ff', -17, 3.0, 12, 3, 12], ['#e8f4ff', -19, 3.0, -1, 3, 8],
    ['#ffffff', -12.5, 3.0, -1, 3, 6], ['#a8c0ff', 11, 2.6, 15, 4, 9], ['#ffe8b0', 20, 2.6, 16, 4, 8],
    ['#40c0ff', 0, 0.4, -15, 6, 12], ['#ffd890', 16, 2.4, -15, 4, 10], ['#fff0dc', -17, 2.8, -16, 3, 10],
  ] as [string, number, number, number, number, number][]) {
    const light = new THREE.PointLight(color, intensity * (real ? 0.6 : 1), range, 1.6);
    light.position.set(x, y, z); light.userData.base = light.intensity; scene.add(light); lamps.push(light);
  }
  // Ceiling panels that glow (seen when you look up).
  for (const [x, z] of [[-2, 4], [12, 0], [12, 9], [-2, 16], [-17, 12], [-17, 7], [21, -1], [11, 16], [-19, -1]] as [number, number][]) {
    const m = std('#ffffff', 0.4, 0, '#fff4e4', 1.2);
    const p = add(statics, new THREE.PlaneGeometry(1.2, 0.6), m, x, CEILING - 0.01, z); p.rotation.x = Math.PI / 2;
  }
  // The night sky over the garden: stars, a moon, then dawn.
  const starGeo = new THREE.BufferGeometry();
  const starPos = new Float32Array(700 * 3); const sr = random(77);
  for (let i = 0; i < 700; i++) { const a = sr() * Math.PI * 2, e = 0.15 + sr() * 1.3; starPos.set([Math.cos(a) * Math.cos(e) * 300, Math.sin(e) * 300, Math.sin(a) * Math.cos(e) * 300], i * 3); }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: '#ffffff', size: 1.4, sizeAttenuation: false, transparent: true, opacity: 0.85, fog: false }));
  scene.add(stars);
  const moon = new THREE.Mesh(new THREE.CircleGeometry(6, 24), new THREE.MeshBasicMaterial({ color: '#f4f0e0', toneMapped: false, fog: false, transparent: true }));
  moon.position.set(-120, 140, -200); moon.lookAt(0, 0, 0); scene.add(moon);
  // The city behind the garden wall: a few lit towers far away.
  const city = new THREE.Group();
  const rand = random(301);
  for (let i = 0; i < 26; i++) {
    const a = -Math.PI * 0.9 + rand() * Math.PI * 0.8, r = 70 + rand() * 60, hgt = 10 + rand() * 30;
    const m = std('#16161c', 0.9, 0, '#f0c070', 0.05 + rand() * 0.15);
    add(city, B(6 + rand() * 6, hgt, 6 + rand() * 6), m, Math.cos(a) * r, hgt / 2, Math.sin(a) * r);
  }
  statics.add(city);

  // Realistic mode: photographic surfaces need UVs in metres; walls and furniture cast real shadows.
  if (real) {
    fitSurfaces(statics);
    statics.traverse(o => { const m = o as THREE.Mesh; const mat = m.material as THREE.MeshStandardMaterial; if (m.isMesh && mat?.isMeshStandardMaterial && !mat.transparent && mat !== M.ceiling && mat !== M.roof) m.castShadow = true; });
  }
  const moving = [...anim.leds, ...anim.sway];
  batchStatic(statics, moving);

  // People at the circles (La Voz has no body: he is the camera of the confessional).
  const npcs: Npc[] = [];
  for (const s of SCENES) {
    if (s.voice) continue;
    const people = [{ ...s.npc, pose: s.pose, mood: s.mood, look: s.look, main: true }, ...(s.extras ?? []).map((e: object) => ({ ...e, main: false }))] as { x: number; z: number; heading: number; pose: string; mood?: string; look: Look; main: boolean; seat?: boolean; y?: number }[];
    people.forEach((p, k) => {
      const person = makePerson(p.look, p.pose, { seat: p.seat, mood: p.mood });
      person.root.position.set(p.x, p.y ?? 0, p.z); person.root.rotation.y = p.heading;
      world.add(person.root);
      npcs.push({ person, key: `${s.id}-${k}`, scene: s.id, main: p.main, x: p.x, z: p.z, heading: p.heading, baseMood: p.mood ?? 'neutral', seated: Boolean(p.seat) || p.pose === 'sit', body: p.look.body, seed: npcs.length * 31 + 7 });
    });
  }
  // The seventeen housemates who talk (E), then the others around them (charla circles).
  const house = (list: typeof CROWD, talk: boolean) => list.forEach((c: { x: number; z: number; heading: number; pose: string; mood?: string; seat?: boolean }, i: number) => {
    const look = { ...HOUSE_LOOKS[(i * 4 + (talk ? 0 : 5)) % HOUSE_LOOKS.length], seed: (talk ? 300 : 500) + i * 7 };
    const person = makePerson(look, c.pose, { seat: c.seat, mood: c.mood });
    person.root.position.set(c.x, 0, c.z); person.root.rotation.y = c.heading;
    world.add(person.root);
    npcs.push({ person, key: talk ? `c${i}` : `f${i}`, x: c.x, z: c.z, heading: c.heading, baseMood: c.mood ?? 'neutral', seated: Boolean(c.seat), talk: talk ? String(i) : undefined, body: look.body, seed: (talk ? 300 : 500) + i });
  });
  house(CROWD, true);
  house(FILLERS, false);
  // Two housemates who cannot sleep and walk round and round.
  const movers: Mover[] = [];
  (WALKERS as Walker[]).forEach((walker, i) => {
    const look = NIGHT_WALKERS[i % NIGHT_WALKERS.length];
    const person = makePerson(look, 'stand', {});
    world.add(person.root);
    movers.push({ walker, person, key: `m${i}`, x: walker.path[0][0], z: walker.path[0][1], body: look.body, seed: 900 + i * 3 });
  });

  const spots = (SPOTS as { key: string; x: number; z: number; ids: string[] }[]).map(s => { const spot = buildSpot(s.key, s.ids, s.x, s.z); world.add(spot.group); return spot; });

  // Speech bubbles.
  const bubbles: { sprite: THREE.Sprite; until: number; npc: Npc | Mover }[] = [];
  let nextBubble = 3, clockNow = 0;
  function dropBubble(i: number) { const b = bubbles[i]; b.sprite.removeFromParent(); (b.sprite.material as THREE.SpriteMaterial).map?.dispose(); b.sprite.material.dispose(); bubbles.splice(i, 1); }
  function say(who: Npc | Mover, text: string, seconds = 3.6, yell = false) {
    const old = bubbles.findIndex(b => b.npc === who);
    if (old >= 0) dropBubble(old);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: bubbleTexture(text, yell), transparent: true, depthTest: true, toneMapped: false }));
    sprite.scale.set(2.2, 0.55, 1);
    world.add(sprite);
    bubbles.push({ sprite, until: clockNow + seconds, npc: who });
  }
  function setSceneMood(id: string | null, mood: string | null) {
    for (const npc of npcs) if (npc.scene) setMood(npc.person, id && mood && npc.scene === id && npc.main ? mood : npc.baseMood);
  }

  // The night: deep blue from 22:00, darkest at three, a grey sky before
  // half past five, and a pink dawn once the last confession is done.
  let k = 0;
  const SKY: [number, string][] = [[0, '#0e1430'], [0.5, '#070a1c'], [1, '#2a3050'], [2, '#e8a8a0']];
  const tmp = new THREE.Color(), tmp2 = new THREE.Color();
  function skyAt(x: number) {
    for (let i = 1; i < SKY.length; i++) if (x <= SKY[i][0]) { const [a, ca] = SKY[i - 1], [b, cb] = SKY[i]; return tmp.set(ca).lerp(tmp2.set(cb), (x - a) / (b - a)); }
    return tmp.set(SKY[SKY.length - 1][1]);
  }
  function applyNight() {
    const sky = skyAt(k);
    if (scene.background instanceof THREE.Color) scene.background.copy(sky); else scene.background = sky.clone();
    if (scene.fog) (scene.fog as THREE.Fog).color.copy(sky);
    const dawn = Math.max(0, k - 1);
    (stars.material as THREE.PointsMaterial).opacity = 0.85 * (1 - Math.min(1, dawn * 1.2));
    (moon.material as THREE.MeshBasicMaterial).opacity = 1 - Math.min(1, dawn);
    for (const w of anim.water) w.emissiveIntensity = 0.6 * (1 - dawn * 0.7);
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
  const far = opts.low ? 26 : 40;
  function animate(t: number, dt: number, px: number, pz: number) {
    clockNow = t;
    for (const spot of spots) {
      spot.gem.position.y = 2.3 + Math.sin(t * 2 + spot.group.position.x) * 0.12;
      spot.gem.rotation.y += dt * 1.5;
      spot.ring.scale.setScalar(1 + Math.sin(t * 3) * 0.03);
    }
    // The red lights of the cameras blink; the cameras on posts turn to follow you.
    const blink = Math.sin(t * 3) > -0.2;
    for (const led of anim.leds) led.visible = blink;
    for (const s of anim.sway) {
      if ((s as THREE.Mesh).isMesh && (s as THREE.Mesh).geometry.type === 'BoxGeometry') s.rotation.y = Math.sin(t * 0.4 + s.id) * 0.9;
      else if ((s as THREE.Mesh).isMesh) s.rotation.x = Math.sin(t * 0.9) * 0.05;
      else s.rotation.z = Math.sin(t * 0.7 + s.id) * 0.03;
    }
    for (const w of anim.water) w.emissiveIntensity = (0.5 + Math.sin(t * 1.3) * 0.08) * (1 - Math.max(0, k - 1) * 0.7);
    for (const m of movers) {
      const at = walkerAt(m.walker, t);
      m.x = at.x; m.z = at.z; m.moving = at.moving; m.heading = at.heading;
      m.person.root.position.set(at.x, 0, at.z);
      m.person.root.rotation.y = at.heading;
      animatePerson(m.person, dt, at.moving ? m.walker.speed : 0, false);
    }
    for (const npc of npcs) {
      const d = Math.max(Math.abs(npc.x - px), Math.abs(npc.z - pz));
      npc.person.root.visible = d < far || talking.has(npc.person);
      if (d > 22 && !talking.has(npc.person)) continue;
      animatePerson(npc.person, dt, 0, talking.has(npc.person));
    }
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.npc.person.root.getWorldPosition(wp); world.worldToLocal(wp); b.sprite.position.set(wp.x, wp.y + 2.25, wp.z);
      if (t > b.until) dropBubble(i);
    }
    if (t > nextBubble) {
      nextBubble = t + 2.5 + Math.random() * 3;
      const pool = [...npcs.filter(n => !n.main), ...movers].filter(n => { const d = Math.hypot(n.x - px, n.z - pz); return d > 1.5 && d < 10; });
      if (pool.length && bubbles.length < 2) {
        const npc = pool[Math.floor(Math.random() * pool.length)];
        if (!bubbles.some(b => b.npc === npc)) say(npc, CHATTER[Math.floor(Math.random() * CHATTER.length)]);
      }
    }
  }

  void bright;
  return { npcs, movers, spots, animate, setSceneMood, setNight, night: () => k, bodies, say };
}
