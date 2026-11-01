// El consorcio · Edificio Las Glicinas in 3D: the sidewalk of Medrano with
// your moving van, the marble hall, seven pisos with their palier, the open
// flats, the 1958 cage elevator and the terrace of the meeting; the street,
// the neighbours' buildings and the sky going from dusk to night outside.
// Original procedural geometry and canvas textures only; people come from
// Noche abierta's people3d and the player is the SpanishCue mascot (hero3d).
// Static pieces are merged by material (batchStatic) and only the floor you
// are on is drawn.
import * as THREE from 'three';
import { batchStatic, canvas, random } from '../noche-abierta/build3d';
import { addBlobShadow, animatePerson, createPerson, setMood, setPose, type Look, type Person } from '../noche-abierta/people3d';
import { CEILING, CHATTER, CLOSED_DOORS, CROWD, DOORS, ELEVATOR, FLOORS, FLOOR_H, FURNITURE, OPEN_FLATS, SCENES, SECTORS, STAIRS, WALKERS, WALL, WALLS, footprint, walkerAt, type Furniture, type Walker } from './layout.mjs';
import { BUILDING } from './story.mjs';
import { B, BRASS, C, DARKWOOD, GLASS, IRON, SEAT_TOP, STEEL, WHITE, WOOD, add, bright, buildItem, mapped, std, textTexture, type Anim } from './edificio-items';

export type Npc = { person: Person; floor: number; scene?: string; main?: boolean; x: number; z: number; heading: number; baseMood: string; lying?: boolean; seated?: boolean; talk?: string; body?: string; seed: number; angryUntil?: number };
export type Mover = { walker: Walker; person: Person; floor: number; offset: number; x: number; z: number; moving?: boolean; body?: string; seed: number; angryUntil?: number; heading?: number };
export type DoorRig = { floor: number; x: number; z: number; leaves: { mesh: THREE.Object3D; open: (k: number) => void }[]; k: number };
export type Spot = { id: string; floor: number; group: THREE.Group; ring: THREE.Mesh; gem: THREE.Mesh; material: THREE.MeshBasicMaterial };
export type Body = { x: number; z: number; radius?: number; who: Npc | Mover };
export type Building = {
  floors: Record<number, THREE.Group>;
  outside: Record<number, THREE.Group>;
  npcs: Npc[];
  movers: Mover[];
  spots: Spot[];
  doors: DoorRig[];
  lift: Record<number, { left: THREE.Object3D; right: THREE.Object3D }>;
  animate: (t: number, dt: number, floor: number, px: number, pz: number) => void;
  setSceneMood: (id: string | null, mood: string | null) => void;
  /** The evening outside follows the lesson: the clock and the clipboard of the meeting. */
  setEvening: (clock: string, state: 'juntando' | 'quorum' | 'votado') => void;
  /** 0 at 18:00 (golden light) to 1 at 21:00 (night). */
  dusk: () => number;
  bodies: (floor: number) => Body[];
  say: (who: Npc | Mover, text: string, seconds?: number, yell?: boolean) => void;
};

// People currently speaking in an open scene.
export const talking = new WeakSet<Person>();

// ---------------------------------------------------------------- textures
function marble(seed: number, base = '#ece8e0', vein = 'rgba(90,90,100,.28)') {
  const rand = random(seed);
  return canvas(512, 512, ctx => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 2200; i++) { ctx.fillStyle = `rgba(0,0,0,${rand() * 0.03})`; ctx.fillRect(rand() * 512, rand() * 512, 3, 3); }
    ctx.strokeStyle = vein; ctx.lineCap = 'round';
    for (let v = 0; v < 14; v++) {
      ctx.lineWidth = 0.6 + rand() * 2.2;
      let x = rand() * 512, y = rand() * 512;
      ctx.beginPath(); ctx.moveTo(x, y);
      for (let k = 0; k < 18; k++) { x += (rand() - 0.3) * 42; y += (rand() - 0.5) * 42; ctx.lineTo(x, y); }
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(0,0,0,.18)'; ctx.lineWidth = 1.5;
    for (let i = 0; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(i * 256, 0); ctx.lineTo(i * 256, 512); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, i * 256); ctx.lineTo(512, i * 256); ctx.stroke(); }
  }, true);
}
// The palier: cement tiles with a printed pattern (baldosas calcáreas).
function calcareas(a: string, b: string, c: string) {
  return canvas(256, 256, ctx => {
    for (let r = 0; r < 4; r++) for (let q = 0; q < 4; q++) {
      const x = q * 64, y = r * 64;
      ctx.fillStyle = (r + q) % 2 ? a : b; ctx.fillRect(x, y, 64, 64);
      ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(x + 32, y + 8); ctx.lineTo(x + 56, y + 32); ctx.lineTo(x + 32, y + 56); ctx.lineTo(x + 8, y + 32); ctx.fill();
      ctx.fillStyle = (r + q) % 2 ? b : a; ctx.beginPath(); ctx.arc(x + 32, y + 32, 9, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,.25)'; ctx.lineWidth = 1; ctx.strokeRect(x + 0.5, y + 0.5, 63, 63);
    }
  }, true);
}
function parquet(seed: number, tone = '#a8774a') {
  const rand = random(seed);
  return canvas(256, 256, ctx => {
    ctx.fillStyle = tone; ctx.fillRect(0, 0, 256, 256);
    for (let r = 0; r < 16; r++) for (let q = 0; q < 4; q++) {
      const shade = Math.floor((rand() - 0.5) * 40);
      ctx.fillStyle = `rgba(${shade > 0 ? '255,240,220' : '40,20,10'},${Math.abs(shade) / 160})`;
      const x = q * 64 + (r % 2) * 32, y = r * 16;
      ctx.fillRect(x, y, 64, 16); ctx.fillRect(x - 256, y, 64, 16);
      ctx.strokeStyle = 'rgba(40,20,8,.35)'; ctx.lineWidth = 1; ctx.strokeRect(x + 0.5, y + 0.5, 63, 15);
    }
  }, true);
}
function terracotta() {
  return canvas(256, 256, ctx => {
    ctx.fillStyle = '#9a4a32'; ctx.fillRect(0, 0, 256, 256);
    const rand = random(88);
    for (let r = 0; r < 8; r++) for (let q = 0; q < 8; q++) { ctx.fillStyle = `rgba(${rand() < 0.5 ? '255,200,170' : '60,20,10'},${rand() * 0.12})`; ctx.fillRect(q * 32 + 1, r * 32 + 1, 30, 30); }
    ctx.strokeStyle = 'rgba(220,210,190,.5)'; ctx.lineWidth = 2;
    for (let i = 0; i <= 8; i++) { ctx.beginPath(); ctx.moveTo(i * 32, 0); ctx.lineTo(i * 32, 256); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, i * 32); ctx.lineTo(256, i * 32); ctx.stroke(); }
  }, true);
}
// Buenos Aires sidewalk: grey tiles with nine bumps each.
function vereda() {
  return canvas(256, 256, ctx => {
    ctx.fillStyle = '#b8b2a6'; ctx.fillRect(0, 0, 256, 256);
    for (let r = 0; r < 4; r++) for (let q = 0; q < 4; q++) {
      ctx.strokeStyle = 'rgba(60,55,50,.4)'; ctx.lineWidth = 2; ctx.strokeRect(q * 64 + 1, r * 64 + 1, 62, 62);
      for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { ctx.fillStyle = 'rgba(255,255,255,.18)'; ctx.beginPath(); ctx.arc(q * 64 + 16 + i * 16, r * 64 + 16 + j * 16, 4, 0, Math.PI * 2); ctx.fill(); }
    }
  }, true);
}
function asphalt(seed: number) {
  const rand = random(seed);
  return canvas(256, 256, ctx => {
    ctx.fillStyle = '#34363a'; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 3000; i++) { ctx.fillStyle = rand() < 0.5 ? '#46484c' : '#26272a'; ctx.fillRect(rand() * 256, rand() * 256, 1 + rand() * 2, 1 + rand() * 2); }
  }, true);
}
function plaster(color: string, seed: number) {
  const rand = random(seed);
  return canvas(128, 128, ctx => {
    ctx.fillStyle = color; ctx.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 500; i++) { ctx.fillStyle = `rgba(0,0,0,${rand() * 0.03})`; ctx.fillRect(rand() * 128, rand() * 128, 2, 2); }
  }, true);
}
// A façade with rows of windows; the lit ones glow through emissiveMap.
function facade(seed: number, cols: number, rows: number, wall: string, litShare = 0.45) {
  const rand = random(seed);
  const draw = (lit: boolean) => (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = lit ? '#000000' : wall; ctx.fillRect(0, 0, 256, 512);
    if (!lit) for (let i = 0; i < 600; i++) { ctx.fillStyle = `rgba(0,0,0,${rand() * 0.05})`; ctx.fillRect(rand() * 256, rand() * 512, 2, 2); }
    const cw = 256 / cols, rh = 512 / rows;
    const r2 = random(seed + 7);
    for (let r = 0; r < rows; r++) for (let q = 0; q < cols; q++) {
      const on = r2() < litShare, warm = r2() < 0.8;
      const x = q * cw + cw * 0.2, y = r * rh + rh * 0.22, w = cw * 0.6, h = rh * 0.58;
      if (lit) { if (on) { ctx.fillStyle = warm ? '#ffd88a' : '#cfe0ff'; ctx.fillRect(x, y, w, h); } }
      else {
        ctx.fillStyle = '#2a3038'; ctx.fillRect(x, y, w, h);
        ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.fillRect(x, y, w, h * 0.3);
        if (r2() < 0.35) { ctx.fillStyle = '#3a2e26'; ctx.fillRect(x - 3, y + h, w + 6, 4); }
      }
    }
  };
  const map = canvas(256, 512, draw(false));
  const glow = canvas(256, 512, draw(true));
  const mat = new THREE.MeshStandardMaterial({ map, emissiveMap: glow, emissive: '#ffffff', emissiveIntensity: 0.4, roughness: 0.85 });
  return mat;
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
function plaque(text: string, w = 0.34, h = 0.12) {
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), mapped(textTexture(text, '#c8a04a', '#2a1a0a', 256, 96, 'bold 58px Georgia, serif'), 0.05, 0.3));
}

// ---------------------------------------------------------------- people
const SEATING = new Set(['chair', 'chairs', 'sofa', 'armchair', 'bench', 'divan', 'gamingchair', 'bed']);
function seatUnder(floor: number, x: number, z: number) {
  return ((FURNITURE[floor] ?? []) as Furniture[]).some(item => SEATING.has(item.type) && (() => { const b = footprint(item); return x > b.x0 - 0.3 && x < b.x1 + 0.3 && z > b.z0 - 0.3 && z < b.z1 + 0.3; })());
}
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
  { skin: '#e8c0a0', age: 'old', body: 'f', hairStyle: 'curly', hairColor: '#d8d0e0', top: 'sweater', topColor: '#3a6aa8', bottom: 'skirt', bottomColor: '#2a2a30', extras: ['glasses'] },
  { skin: '#c48f69', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#1a1210', top: 'shirt', topColor: '#d8c8a0', bottom: 'jeans', bottomColor: '#24304a' },
  { skin: '#8d5a3c', age: 'adult', body: 'f', hairStyle: 'long', hairColor: '#120d0b', top: 'jacket', topColor: '#d43a6a', bottom: 'jeans', bottomColor: '#1f2840', extras: ['earrings'] },
  { skin: '#f0d0b4', age: 'old', body: 'm', hairStyle: 'bald', hairColor: '#999', top: 'sweater', topColor: '#5a4a3a', bottom: 'pants', bottomColor: '#2a2a2a', extras: ['glasses', 'mustache'] },
  { skin: '#b9825c', age: 'young', body: 'm', hairStyle: 'curly', hairColor: '#2a1a12', top: 'hoodie', topColor: '#4a6a3a', bottom: 'jeans', bottomColor: '#121214', extras: ['headphones'] },
  { skin: '#dcae88', age: 'adult', body: 'f', hairStyle: 'ponytail', hairColor: '#6a2a18', top: 'sweater', topColor: '#8a3a8a', bottom: 'pants', bottomColor: '#1a1a20' },
  { skin: '#e2b896', age: 'elderly', body: 'm', hairStyle: 'short', hairColor: '#e8e8e8', top: 'coat', topColor: '#4a4a3a', bottom: 'pants', bottomColor: '#2a2a2a', extras: ['scarf'] },
  { skin: '#c99468', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#120d0b', top: 'suit', topColor: '#1a2a4a', bottom: 'pants', bottomColor: '#1a2a4a', extras: ['beard'] },
  { skin: '#f0d6c0', age: 'young', body: 'f', hairStyle: 'bob', hairColor: '#e0c070', top: 'tshirt', topColor: '#2a8a8a', bottom: 'jeans', bottomColor: '#2a3a5a', extras: ['earrings'] },
];
const KID_LOOKS: Look[] = [
  { skin: '#c48f69', age: 'child', body: 'm', hairStyle: 'short', hairColor: '#120d0b', top: 'tshirt', topColor: '#e04a4a', bottom: 'shorts', bottomColor: '#2a2a30', extras: ['hat'] },
  { skin: '#f0d6c0', age: 'child', body: 'f', hairStyle: 'ponytail', hairColor: '#7a3a1e', top: 'dress', topColor: '#3ac06a', extras: [] },
];

// A plain chair for someone who sits where no seat was planned.
function chairFor(g: THREE.Group, x: number, z: number, heading: number) {
  const c = new THREE.Group(); c.position.set(x, 0, z); c.rotation.y = heading; g.add(c);
  const back = -0.12; // the seat centre sits 0.12 m behind the person's root
  const m = std('#7a4e2e', 0.6);
  add(c, B(0.44, 0.04, 0.42), m, 0, SEAT_TOP - 0.02, back);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(c, B(0.035, SEAT_TOP - 0.04, 0.035), m, sx * 0.19, (SEAT_TOP - 0.04) / 2, back + sz * 0.18);
  add(c, B(0.44, 0.42, 0.04), m, 0, SEAT_TOP + 0.24, back - 0.2);
}

// ---------------------------------------------------------------- spots
function buildSpot(id: string, floor: number, x: number, z: number): Spot {
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
  return { id, floor, group, ring, gem, material };
}

// ---------------------------------------------------------------- a floor
type Rect = [number, number, number, number];
const FLAT_BOX: Record<string, Rect> = { A: [-12, -10, -4, -2.5], B: [4, -10, 12, -2.5], C: [-12, 2.5, 0, 10], D: [0, 2.5, 12, 10] };
const WALL_TONES = ['#efe6d2', '#e8ecef', '#f2e4dc', '#e4eadc', '#efe2c8', '#e6e0ee', '#f0e8dc', '#e8e2d6'];
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
function wallSegment(g: THREE.Group, seg: (number | string)[], mat: THREE.Material, floor: number) {
  const [x0, z0, x1, z1] = seg as number[];
  const len = Math.hypot(x1 - x0, z1 - z0);
  const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
  const ry = x0 === x1 ? Math.PI / 2 : 0;
  const kind = seg[4];
  if (kind === 'low') {
    add(g, B(len + WALL, 1.1, WALL), std('#d8d0c4', 0.85), cx, 0.55, cz, ry);
    add(g, B(len + WALL + 0.06, 0.06, WALL + 0.08), std('#b8b0a4', 0.8), cx, 1.13, cz, ry);
    return;
  }
  if (kind === 'glass') {
    // A window: wall under the sill and over the lintel, the frame, the panes.
    add(g, B(len, 0.9, WALL), mat, cx, 0.45, cz, ry);
    add(g, B(len, CEILING - 2.4, WALL), mat, cx, (CEILING + 2.4) / 2, cz, ry);
    add(g, B(len + 0.04, 0.05, WALL + 0.12), std('#d8d4cc', 0.6), cx, 0.92, cz, ry);
    add(g, B(len, 1.5, 0.03), GLASS(), cx, 1.65, cz, ry);
    const frame = floor === 0 ? IRON() : std('#f2f0ea', 0.5);
    for (const t of [0, 0.5, 1]) {
      const x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t;
      add(g, B(ry ? WALL * 0.6 : 0.06, 1.5, ry ? 0.06 : WALL * 0.6), frame, x, 1.65, z);
    }
    add(g, B(ry ? 0.06 : len, 0.06, ry ? len : 0.06), frame, cx, 2.38, cz);
    add(g, B(ry ? 0.06 : len, 0.06, ry ? len : 0.06), frame, cx, 1.65, cz);
    // Blinds half down (persiana), as in every flat of the neighbourhood.
    add(g, B(ry ? 0.04 : len - 0.1, 0.5, ry ? len - 0.1 : 0.04), std('#c8beaa', 0.8), cx, 2.12, cz + (ry ? 0 : (cz > 0 ? 0.11 : -0.11)), 0);
    return;
  }
  add(g, B(len + WALL, CEILING, WALL), mat, cx, CEILING / 2, cz, ry);
  // The zócalo: a dark wooden skirting both sides.
  add(g, B(len + WALL + 0.01, 0.12, WALL + 0.03), DARKWOOD(), cx, 0.06, cz, ry);
}
function closedDoor(g: THREE.Group, x: number, z: number, label: string) {
  const sz = z < 0 ? 1 : -1; // the palier side
  const zf = z + sz * (WALL / 2 + 0.02);
  add(g, B(1.06, 2.2, 0.05), std('#5a3a22', 0.55), x, 1.1, zf);
  for (const [dx, dy] of [[-0.24, 1.55], [0.24, 1.55], [-0.24, 0.6], [0.24, 0.6]]) add(g, B(0.36, 0.7, 0.02), std('#6a4428', 0.5), x + dx, dy, zf + sz * 0.03);
  add(g, B(1.2, 0.08, 0.08), std('#3a2414', 0.6), x, 2.24, zf);
  add(g, new THREE.SphereGeometry(0.035, 10, 8), BRASS(), x + 0.4, 1.0, zf + sz * 0.05);
  add(g, C(0.015, 0.015, 0.02, 8), BRASS(), x, 1.55, zf + sz * 0.03).rotation.x = Math.PI / 2;
  const p = plaque(label); p.position.set(x, 1.95, zf + sz * 0.035); if (sz < 0) p.rotation.y = Math.PI; g.add(p);
}
function buildFloor(id: number, anim: Anim, doors: DoorRig[], lift: Building['lift']) {
  const group = new THREE.Group();
  const info = FLOORS.find(f => f.id === id)!;
  group.position.y = info.y;
  const tone = WALL_TONES[id % WALL_TONES.length];
  const wallMat = new THREE.MeshStandardMaterial({ map: plaster(tone, 30 + id), roughness: 0.85 });
  const floorMat = (tex: THREE.Texture, rough = 0.4) => new THREE.MeshStandardMaterial({ map: tex, roughness: rough, metalness: 0.02 });
  const parq = floorMat(parquet(40 + id), 0.45);
  const concrete = new THREE.MeshStandardMaterial({ color: '#8a8680', roughness: 0.95 });
  // Floors.
  if (id === 0) {
    surface(group, [-12, 10, 12, 14], floorMat(vereda(), 0.9), 0, 1);
    surface(group, [-4, 2.5, 4, 10], floorMat(marble(7), 0.18), 0, 2);
    surface(group, [-12, -2.5, 12, 2.5], floorMat(marble(8, '#e4dccc'), 0.2), 0, 2);
    surface(group, [4, -10, 12, -2.5], floorMat(calcareas('#c8b898', '#8a3a2a', '#e8dcc0'), 0.6), 0, 1.2);
    surface(group, [-12, 2.5, -4, 10], parq); surface(group, [4, 2.5, 12, 10], concrete); surface(group, [-12, -10, -4, -2.5], parq); surface(group, [-4, -10, 4, -2.5], concrete);
  } else if (id === 8) {
    surface(group, [-12, -10, 12, 10], floorMat(terracotta(), 0.8), 0, 2);
  } else {
    const pal = [['#e8e0d0', '#2a2a2a', '#8a3a2a'], ['#d8d0c0', '#3a4a6a', '#c8a050'], ['#ece4d4', '#4a6a4a', '#a83a2a']][id % 3];
    surface(group, [-12, -2.5, 12, 2.5], floorMat(calcareas(pal[0], pal[1], pal[2]), 0.5), 0, 1.2);
    for (const [f, r] of Object.entries(FLAT_BOX)) surface(group, r, (OPEN_FLATS[id] ?? []).includes(f) ? parq : concrete);
    surface(group, [-4, -10, 4, -2.5], concrete);
  }
  // Ceilings (none on the terrace); a skylight over the patio.
  if (id !== 8) {
    const ceil = new THREE.MeshStandardMaterial({ color: '#f4f0e8', roughness: 0.95 });
    if (id === 0) {
      surface(group, [-12, -2.5, 12, 10], ceil, CEILING, 2, true); surface(group, [-12, -10, 4, -2.5], ceil, CEILING, 2, true);
      const sky = add(group, new THREE.PlaneGeometry(8, 7.5), std('#c8dcec', 0.3, 0, '#b8d0e8', 0.6), 8, CEILING - 0.01, -6.25); sky.rotation.x = Math.PI / 2;
      anim.glows.push(sky.material as THREE.MeshStandardMaterial);
      for (let x = 4; x <= 12; x += 2) add(group, B(0.06, 0.08, 7.5), IRON(), x, CEILING - 0.04, -6.25);
      for (let z = -10; z <= -2.5; z += 2.5) add(group, B(8, 0.08, 0.06), IRON(), 8, CEILING - 0.04, z);
    } else surface(group, [-12, -10, 12, 10], ceil, CEILING, 2, true);
    // A plaster moulding along the palier.
    for (const z of [-2.36, 2.36]) add(group, B(24, 0.1, 0.06), std('#f8f4ec', 0.8), 0, CEILING - 0.05, z);
  }
  // Walls.
  for (const seg of WALLS[id] as (number | string)[][]) wallSegment(group, seg, wallMat, id);
  if (id === 0) {
    // The street front outside: granite base, barred windows, the number.
    const granite = std('#3a3634', 0.35, 0.1);
    for (const [x0, x1] of [[-12, -1.2], [1.2, 12]]) add(group, B(x1 - x0, 0.8, 0.06), granite, (x0 + x1) / 2, 0.4, 10.16);
    for (const x of [-8, 8]) {
      add(group, B(2.0, 1.5, 0.04), std('#1a2028', 0.2, 0.3), x, 1.75, 10.15);
      for (let k = -0.9; k <= 0.91; k += 0.18) add(group, C(0.012, 0.012, 1.6, 6), IRON(), x + k, 1.75, 10.22);
      add(group, B(2.1, 0.06, 0.12), IRON(), x, 2.55, 10.2); add(group, B(2.1, 0.06, 0.12), IRON(), x, 0.97, 10.2);
    }
    const num = add(group, new THREE.PlaneGeometry(0.7, 0.3), mapped(textTexture('1417', '#1a1a1a', '#e8d8a8', 256, 110, 'bold 80px Georgia, serif'), 0.1), 2.0, 2.6, 10.17);
    void num;
  }
  for (const d of CLOSED_DOORS[id] ?? []) closedDoor(group, d.x, d.z, d.flat);
  // Doors that open.
  for (const door of DOORS[id] ?? []) {
    const rig: DoorRig = { floor: id, x: door.x, z: door.z, leaves: [], k: 0 };
    const half = door.w / 2;
    if (door.kind === 'iron') {
      // Two leaves of black iron and glass, with scrolls, opening onto the sidewalk.
      for (const s of [-1, 1]) {
        const hinge = new THREE.Group(); hinge.position.set(door.x + s * half, 0, door.z + 0.02); group.add(hinge);
        const leaf = new THREE.Group(); leaf.position.x = -s * half / 2; hinge.add(leaf);
        add(leaf, B(half - 0.04, 2.5, 0.06), IRON(), 0, 1.25, 0);
        add(leaf, B(half - 0.24, 1.7, 0.02), GLASS(), 0, 1.45, 0.02);
        for (let k = 0; k < 3; k++) { const r = add(leaf, new THREE.TorusGeometry(0.16, 0.012, 6, 16), IRON(), 0, 0.85 + k * 0.4, 0.04); r.scale.set(1, 1.2, 1); }
        add(leaf, B(0.04, 0.18, 0.06), BRASS(), s * -(half / 2 - 0.12), 1.1, 0.06);
        rig.leaves.push({ mesh: hinge, open: k => { hinge.rotation.y = -s * k * 1.35; } });
      }
      add(group, B(door.w + 0.3, CEILING - 2.55, WALL), IRON(), door.x, (CEILING + 2.55) / 2, door.z);
      add(group, B(door.w, CEILING - 2.7, 0.03), GLASS(), door.x, (CEILING + 2.55) / 2, door.z + 0.13);
      if (door.label) { const s = add(group, new THREE.PlaneGeometry(2.4, 0.36), mapped(textTexture(door.label, '#c8a04a', '#2a1a0a', 768, 116, 'bold 66px Georgia, serif'), 0.15, 0.3), door.x, 3.0, door.z + 0.15); void s; }
    } else if (door.kind === 'slide') {
      const leafMat = new THREE.MeshPhysicalMaterial({ color: '#d8ecf4', transparent: true, opacity: 0.32, roughness: 0.05, depthWrite: false });
      for (const s of [-1, 1]) {
        const leaf = add(group, B(half, 2.3, 0.05), leafMat, door.x + s * half / 2, 1.15, door.z);
        add(leaf, B(half, 0.06, 0.07), IRON(), 0, 1.13, 0); add(leaf, B(half, 0.06, 0.07), IRON(), 0, -1.13, 0); add(leaf, B(0.05, 2.3, 0.07), IRON(), -s * half / 2, 0, 0);
        const base = leaf.position.clone();
        rig.leaves.push({ mesh: leaf, open: k => { leaf.position.x = base.x + s * k * half * 0.95; } });
      }
      add(group, B(door.w, CEILING - 2.3, WALL), wallMat, door.x, (CEILING + 2.3) / 2, door.z);
      if (door.label) add(group, new THREE.PlaneGeometry(0.9, 0.2), mapped(textTexture(door.label, '#1a2a3a', '#ffffff', 256, 64, 'bold 40px Arial')), door.x, 2.55, door.z + 0.14);
    } else {
      // One wooden leaf hinged on its west side, swinging into the flat.
      const into = door.z < 0 ? 1 : -1;
      const hinge = new THREE.Group(); hinge.position.set(door.x - half, 0, door.z); group.add(hinge);
      add(hinge, B(door.w - 0.06, 2.2, 0.05), std('#6a4428', 0.55), half - 0.02, 1.1, 0);
      add(hinge, new THREE.SphereGeometry(0.035, 10, 8), BRASS(), door.w - 0.2, 1.0, -into * 0.05);
      rig.leaves.push({ mesh: hinge, open: k => { hinge.rotation.y = into * k * 1.5; } });
      add(group, B(door.w, CEILING - 2.2, WALL), wallMat, door.x, (CEILING + 2.2) / 2, door.z);
      if (door.flat) { const p = plaque(door.flat); p.position.set(door.x + half + 0.3, 1.6, door.z - into * (WALL / 2 + 0.01)); if (into < 0) p.rotation.y = Math.PI; group.add(p); }
    }
    doors.push(rig);
  }
  // The 1958 elevator: a brass folding grille in the core, the wooden cabin behind.
  const cabZ = ELEVATOR.wallZ - 0.75;
  {
    const panel = std('#7a4e2e', 0.45);
    add(group, B(1.2, 0.06, 1.2), std('#3a2a1a', 0.5), ELEVATOR.x, 0.03, cabZ);
    add(group, B(1.2, 0.06, 1.2), panel, ELEVATOR.x, 2.25, cabZ);
    add(group, B(1.2, 2.2, 0.05), panel, ELEVATOR.x, 1.1, cabZ - 0.6);
    for (const s of [-1, 1]) add(group, B(0.05, 2.2, 1.2), panel, ELEVATOR.x + s * 0.6, 1.1, cabZ);
    add(group, B(0.8, 1.0, 0.02), std('#c8d0d8', 0.05, 0.9), ELEVATOR.x, 1.4, cabZ - 0.57);
    add(group, B(0.9, 0.04, 0.3), std('#5a3a22', 0.5), ELEVATOR.x, 0.5, cabZ - 0.42);
    const bulb = add(group, new THREE.SphereGeometry(0.06, 10, 8), std('#fff8e0', 0.3, 0, '#ffe8b0', 1.8), ELEVATOR.x, 2.15, cabZ);
    anim.glows.push(bulb.material as THREE.MeshStandardMaterial);
    add(group, B(1.6, 0.3, 0.08), BRASS(), ELEVATOR.x, 2.45, ELEVATOR.wallZ + 0.16);
    // The floor dial over the door: a brass half moon with the needle on this floor.
    const dial = add(group, new THREE.CircleGeometry(0.28, 24, 0, Math.PI), BRASS(), ELEVATOR.x, 2.75, ELEVATOR.wallZ + 0.15);
    void dial;
    const needle = add(group, B(0.02, 0.24, 0.01), IRON(), ELEVATOR.x, 2.75, ELEVATOR.wallZ + 0.16);
    needle.geometry.translate(0, 0.12, 0); needle.rotation.z = Math.PI / 2 - (id / 8) * Math.PI;
    const grille = (s: number) => {
      const leaf = new THREE.Group(); leaf.position.set(ELEVATOR.x + s * 0.31, 0, ELEVATOR.wallZ + 0.16); group.add(leaf);
      for (let k = -0.27; k <= 0.28; k += 0.09) add(leaf, B(0.018, 2.2, 0.018), BRASS(), k, 1.1, 0);
      for (let y = 0.25; y < 2.2; y += 0.48) for (let k = -0.27; k < 0.26; k += 0.09) { const x = add(leaf, B(0.12, 0.012, 0.012), BRASS(), k + 0.045, y, 0.01); x.rotation.z = 0.8; }
      add(leaf, B(0.62, 0.03, 0.03), BRASS(), 0, 2.2, 0); add(leaf, B(0.62, 0.03, 0.03), BRASS(), 0, 0.02, 0);
      return leaf;
    };
    lift[id] = { left: grille(-1), right: grille(1) };
    add(group, new THREE.PlaneGeometry(0.6, 0.14), mapped(textTexture('ASCENSOR', '#1a1a1a', '#e8d8a8', 256, 60, 'bold 40px Georgia')), ELEVATOR.x - 1.2, 2.0, ELEVATOR.wallZ + 0.135);
  }
  // The stairs behind their doorway: a flight up, a flight down, the banister.
  {
    const step = std('#b8b0a4', 0.7);
    for (let i = 0; i < 14; i++) add(group, B(1.6, 0.2, 0.3), step, STAIRS.x + 0.2, 0.1 + i * 0.2, -3.0 - i * 0.3);
    for (let i = 1; i < 6; i++) add(group, B(0.9, 0.2, 0.3), step, 0.5, -i * 0.2 + 0.1, -3.0 - i * 0.3);
    const rail = add(group, B(0.06, 0.06, 4.6), DARKWOOD(), STAIRS.x - 0.6, 1.9, -5.1); rail.rotation.x = Math.atan2(0.2, 0.3);
    for (let i = 0; i < 12; i += 2) add(group, C(0.015, 0.015, 0.9, 6), IRON(), STAIRS.x - 0.6, 0.55 + i * 0.2, -3.05 - i * 0.3);
    add(group, B(3.9, 0.1, 7.2), concrete, 1.9, CEILING - 0.05, -6.4);
  }
  // The floor's name by the elevator, painted on the core.
  const label = id === 0 ? 'PLANTA BAJA' : id === 8 ? 'TERRAZA' : `${id}.° PISO`;
  add(group, new THREE.PlaneGeometry(1.0, 0.24), mapped(textTexture(label, '#2a2420', '#f0e6d0', 384, 92, 'bold 50px Georgia, serif')), -3.4, 2.0, -2.36);
  // The terrace: the stair house roof and the parapet lamps.
  if (id === 8) {
    add(group, B(8.2, 0.2, 7.8), std('#b8b4ac', 0.9), 0, 3.3, -6.3);
    for (const [x, z] of [[-11.8, 9.8], [11.8, 9.8], [-11.8, -9.8], [11.8, -9.8]]) {
      add(group, C(0.03, 0.03, 1.4, 6), IRON(), x, 1.8, z);
      const lamp = add(group, new THREE.SphereGeometry(0.1, 10, 8), std('#fff4dc', 0.4, 0, '#ffe2a0', 0.2), x, 2.55, z);
      lamp.userData.streetlamp = true; anim.glows.push(lamp.material as THREE.MeshStandardMaterial);
    }
  }
  for (const item of (FURNITURE[id] ?? []) as Furniture[]) buildItem(group, item, id, anim);
  return group;
}

// ---------------------------------------------------------------- outside
function carMesh(color: string, bus = false) {
  const g = new THREE.Group();
  const paint = std(color, 0.35, 0.4);
  const L = bus ? 11 : 4.2, W = bus ? 2.5 : 1.75, H = bus ? 2.9 : 1.4;
  add(g, B(W, H * 0.55, L), paint, 0, 0.35 + H * 0.27, 0);
  add(g, B(W - 0.1, H * 0.4, bus ? L - 0.4 : L * 0.5), bus ? std('#1a2430', 0.1, 0.3) : std('#18202a', 0.1, 0.3), 0, 0.35 + H * 0.74, bus ? 0 : -0.2);
  if (bus) add(g, B(W + 0.01, 0.3, L - 0.5), std('#f0c020', 0.4), 0, 0.35 + H * 0.5, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(g, C(0.33, 0.33, 0.22, 12), std('#141414', 0.9), sx * W / 2, 0.33, sz * L * 0.33).rotation.z = Math.PI / 2;
  for (const sx of [-1, 1]) { add(g, B(0.3, 0.14, 0.05), bright('#fff4d0'), sx * (W / 2 - 0.3), 0.75, L / 2); add(g, B(0.3, 0.12, 0.05), bright('#e0201a'), sx * (W / 2 - 0.3), 0.8, -L / 2); }
  return g;
}
function streetTree(g: THREE.Object3D, x: number, z: number, seed: number) {
  const rand = random(seed);
  add(g, C(0.16, 0.22, 3.4, 8), std('#6a5a48', 0.95), x, 1.7, z);
  const leaf = std(rand() < 0.5 ? '#4a6a2a' : '#5a7a34', 0.9);
  for (let i = 0; i < 7; i++) { const a = i * 0.9; const b = add(g, new THREE.SphereGeometry(1.2 + rand() * 0.5, 10, 8), leaf, x + Math.sin(a) * 1.0, 4.0 + rand() * 1.4, z + Math.cos(a) * 1.0); b.scale.y = 0.8; }
}
function streetLamp(g: THREE.Object3D, x: number, z: number, glows: THREE.MeshStandardMaterial[]) {
  add(g, C(0.06, 0.09, 5.5, 8), IRON(), x, 2.75, z);
  add(g, B(0.08, 0.08, 1.4), IRON(), x, 5.5, z - 0.7);
  const head = add(g, B(0.5, 0.18, 0.3), std('#fff4dc', 0.4, 0, '#ffd890', 0.1), x, 5.4, z - 1.3);
  head.userData.streetlamp = true; glows.push(head.material as THREE.MeshStandardMaterial);
}
function buildCity(glows: THREE.MeshStandardMaterial[], cityWindows: THREE.MeshStandardMaterial[], cars: { mesh: THREE.Group; lane: number; speed: number; offset: number }[]) {
  const city = new THREE.Group();
  const street = asphalt(5); street.repeat.set(60, 3);
  const road = add(city, new THREE.PlaneGeometry(260, 12), new THREE.MeshStandardMaterial({ map: street, roughness: 0.9 }), 0, -0.01, 20); road.rotation.x = -Math.PI / 2;
  for (let x = -120; x < 120; x += 6) { const l = add(city, new THREE.PlaneGeometry(2.5, 0.14), std('#e8e4d8', 0.8), x, 0.0, 20); l.rotation.x = -Math.PI / 2; }
  const walk = vereda(); walk.repeat.set(64, 1);
  const side = add(city, new THREE.PlaneGeometry(260, 4), new THREE.MeshStandardMaterial({ map: walk, roughness: 0.9 }), 0, 0.12, 28); side.rotation.x = -Math.PI / 2;
  const ours = walk.clone(); ours.needsUpdate = true; ours.repeat.set(30, 1);
  for (const x of [-72, 72]) { const s = add(city, new THREE.PlaneGeometry(120, 4), new THREE.MeshStandardMaterial({ map: ours, roughness: 0.9 }), x, 0.0, 12); s.rotation.x = -Math.PI / 2; }
  add(city, B(260, 0.15, 0.2), std('#9a9690', 0.8), 0, 0.075, 26.05);
  for (const x of [-72, 72]) add(city, B(120, 0.15, 0.12), std('#9a9690', 0.8), x, 0.075, 13.95);
  const ground = add(city, new THREE.PlaneGeometry(900, 900), std('#2a2a2c', 0.95), 0, -0.05, 0); ground.rotation.x = -Math.PI / 2;
  // Plane trees and lamps on both sidewalks.
  for (let x = -60; x <= 60; x += 9) {
    if (Math.abs(x) > 14) streetTree(city, x, 12.6, 300 + x);
    streetTree(city, x + 4, 27.4, 400 + x);
    if (x % 18 === 0) { streetLamp(city, x + 2, 13.6, glows); streetLamp(city, x - 2, 26.4, glows); }
  }
  // Across Medrano: a row of buildings of every height, with their windows.
  const rand = random(1417);
  const row = (z: number, facing: number, from: number, to: number, seedBase: number) => {
    for (let x = from; x < to;) {
      const w = 8 + Math.floor(rand() * 4) * 2, floors = 2 + Math.floor(rand() * 11), h = floors * 3.2 + 1;
      const wall = ['#d8c8b0', '#c8b8a8', '#e0d4c0', '#b8a898', '#d0c0c8', '#c0c8c8', '#e8dcc8'][Math.floor(rand() * 7)];
      const mat = facade(seedBase + x, Math.max(2, Math.round(w / 3)), floors, wall, 0.25 + rand() * 0.35);
      mat.map!.repeat.set(1, 1); cityWindows.push(mat);
      const plain = std(wall, 0.9);
      const mats = [plain, plain, plain, plain, facing > 0 ? mat : plain, facing > 0 ? plain : mat];
      const b = new THREE.Mesh(B(w, h, 12), mats); b.position.set(x + w / 2, h / 2, z + facing * -6); city.add(b);
      add(city, B(w + 0.3, 0.3, 0.6), std('#a89a88', 0.9), x + w / 2, h, z + facing * 0.2);
      // Shops at street level on the sunny side.
      if (facing > 0 && rand() < 0.6) { const shop = add(city, B(w - 1, 2.4, 0.1), std(['#2a4a6a', '#6a2a2a', '#2a5a3a', '#5a4a2a'][Math.floor(rand() * 4)], 0.4, 0, '#fff0c8', 0.15), x + w / 2, 1.5, z + 0.06); glows.push(shop.material as THREE.MeshStandardMaterial); }
      x += w;
    }
  };
  row(30, 1, -110, 110, 500);
  // The neighbours on both sides of ours, and the block behind.
  const east = new THREE.Mesh(B(14, 18.4, 20.5), std('#cfc4b4', 0.9)); east.position.set(19.2, 9.2, 0); city.add(east);
  const eastMat = facade(611, 4, 5, '#cfc4b4', 0.4); cityWindows.push(eastMat);
  add(city, new THREE.PlaneGeometry(14, 17.5), eastMat, 19.2, 9.4, 10.26);
  add(city, B(14, 0.3, 20.5), std('#9a5a42', 0.9), 19.2, 18.5, 0);
  const west = new THREE.Mesh(B(12, 44, 20.5), std('#d8d0c4', 0.9)); west.position.set(-18.2, 22, 0); city.add(west);
  const westMat = facade(612, 4, 13, '#d8d0c4', 0.45); cityWindows.push(westMat);
  add(city, new THREE.PlaneGeometry(12, 43), westMat, -18.2, 22, 10.26);
  // The blind wall (medianera) of the tall one over our terrace, with an old painted ad.
  const ad = canvas(512, 512, ctx => {
    ctx.fillStyle = '#d8d0c4'; ctx.fillRect(0, 0, 512, 512);
    ctx.fillStyle = 'rgba(180,60,40,.55)'; ctx.fillRect(40, 60, 432, 260);
    ctx.fillStyle = 'rgba(250,240,220,.75)'; ctx.font = 'bold 74px Georgia, serif'; ctx.textAlign = 'center'; ctx.fillText('FIDEOS', 256, 160); ctx.fillText('LA NONA', 256, 250);
    ctx.font = 'italic 32px Georgia, serif'; ctx.fillText('desde 1932', 256, 300);
    ctx.fillStyle = 'rgba(0,0,0,.08)'; for (let i = 0; i < 40; i++) ctx.fillRect(Math.random() * 512, Math.random() * 512, 30, 2);
  });
  add(city, new THREE.PlaneGeometry(16, 16), new THREE.MeshStandardMaterial({ map: ad, roughness: 0.95 }), -12.22, 38, 0, Math.PI / 2);
  for (let x = -60; x < 60;) {
    const w = 10 + Math.floor(rand() * 3) * 4, h = 6 + Math.floor(rand() * 10) * 3.2;
    const mat = facade(700 + x, 4, Math.round(h / 3.2), '#c8c0b4', 0.35); cityWindows.push(mat);
    const plain = std('#c0b8ac', 0.9);
    const b = new THREE.Mesh(B(w, h, 14), [plain, plain, plain, plain, mat, plain]); b.position.set(x + w / 2, h / 2, -24); city.add(b);
    x += w;
  }
  // Far away: the city's skyline all around.
  for (let i = 0; i < 70; i++) {
    const a = (i / 70) * Math.PI * 2, r = 150 + rand() * 80, w = 14 + rand() * 20, h = 10 + rand() * 60;
    const mat = facade(900 + i, 5, Math.round(h / 4), '#8a8a92', 0.4); cityWindows.push(mat);
    const b = new THREE.Mesh(B(w, h, w), mat); b.position.set(Math.cos(a) * r, h / 2, Math.sin(a) * r - 20); b.rotation.y = -a; city.add(b);
  }
  // Traffic on Medrano: cars and a colectivo, with their lights.
  const colors = ['#c8302a', '#e8e8e8', '#2a4a8a', '#141414', '#9aa4ac', '#f0c020', '#3a6a4a'];
  for (let i = 0; i < 8; i++) {
    const bus = i === 3;
    const mesh = carMesh(bus ? '#2a6ac8' : colors[i % colors.length], bus);
    city.add(mesh);
    cars.push({ mesh, lane: i % 2, speed: bus ? 7 : 9 + (i % 3) * 2.5, offset: i * 37 });
  }
  return city;
}
// Our own building from the street: the façade above the planta baja, its
// balconies and windows, seen only from the sidewalk and the intro.
function buildFacade(glows: THREE.MeshStandardMaterial[], ownWindows: THREE.MeshStandardMaterial[]) {
  const g = new THREE.Group();
  const top = 8 * FLOOR_H;
  const stucco = std('#e6dccb', 0.85);
  add(g, B(24.25, top - CEILING + 1.1, 0.3), stucco, 0, (top + CEILING + 1.1) / 2, 10.0);
  for (const s of [-1, 1]) add(g, B(0.3, top - CEILING + 1.1, 20.25), stucco, s * 12, (top + CEILING + 1.1) / 2, 0);
  const rand = random(245);
  for (let n = 1; n <= 7; n++) {
    const y = n * FLOOR_H;
    add(g, B(24.6, 0.2, 0.5), std('#d0c4b0', 0.8), 0, y - 0.1, 10.2);
    for (const [x0, x1] of [[-10, -7], [-5, -2], [2, 5], [7, 10]]) {
      const cx = (x0 + x1) / 2;
      const lit = rand() < 0.6;
      const pane = std('#1a2028', 0.15, 0.3, lit ? (rand() < 0.8 ? '#ffd890' : '#cfe0ff') : '#000000', lit ? 0.9 : 0);
      if (lit) ownWindows.push(pane);
      add(g, B(3, 1.5, 0.04), pane, cx, y + 1.65, 10.17);
      add(g, B(3.1, 0.06, 0.1), std('#f2f0ea', 0.5), cx, y + 2.42, 10.18); add(g, B(0.06, 1.5, 0.1), std('#f2f0ea', 0.5), cx, y + 1.65, 10.18);
      add(g, B(3.0, 0.6, 0.05), std('#c8beaa', 0.8), cx, y + 2.1, 10.2);
      if (Math.abs(cx) < 5) {
        // A French balcony with a black iron railing and, sometimes, a plant.
        add(g, B(3.4, 0.14, 1.0), std('#d8ccb8', 0.8), cx, y + 0.0, 10.65);
        for (let k = -1.6; k <= 1.61; k += 0.16) add(g, C(0.012, 0.012, 1.0, 5), IRON(), cx + k, y + 0.57, 11.12);
        add(g, B(3.4, 0.05, 0.05), IRON(), cx, y + 1.07, 11.12);
        if (rand() < 0.5) { add(g, C(0.18, 0.14, 0.32, 10), std('#b8603a', 0.8), cx - 1.2, y + 0.23, 10.6); add(g, new THREE.SphereGeometry(0.3, 8, 6), std('#3a6a3a', 0.9), cx - 1.2, y + 0.6, 10.6); }
      }
    }
  }
  // The cornice and the terrace parapet against the sky; the name in relief.
  add(g, B(24.8, 0.4, 0.7), std('#d0c4b0', 0.8), 0, top + 1.1, 10.1);
  add(g, B(24.8, 0.3, 0.6), std('#d0c4b0', 0.8), 0, CEILING + 0.35, 10.2);
  const name = add(g, new THREE.PlaneGeometry(5, 0.6), mapped(textTexture(BUILDING.name.toUpperCase(), '#e6dccb', '#6a5a44', 1024, 124, 'bold 74px Georgia, serif'), 0, 0.8), 0, CEILING + 0.95, 10.16);
  void name; void glows;
  return g;
}

// ---------------------------------------------------------------- the whole building
export function buildBuilding(scene: THREE.Scene, opts: { low: boolean; shadows: boolean }): Building {
  const floors: Record<number, THREE.Group> = {};
  const doors: DoorRig[] = [];
  const lift: Building['lift'] = {};
  const anim: Anim = { glows: [], drips: [], bobs: [], tails: [], bulbs: [], flames: [] };
  for (const f of FLOORS) {
    const before = { bobs: anim.bobs.length, tails: anim.tails.length, flames: anim.flames.length };
    const group = buildFloor(f.id, anim, doors, lift);
    // Drops from the leak in 2.° A, one over each bucket.
    if (f.id === 2) for (const item of FURNITURE[2].filter(i => i.type === 'bucket')) {
      const drop = add(group, new THREE.SphereGeometry(0.025, 8, 6), std('#a8d0e8', 0.05, 0.1), item.x, CEILING - 0.05, item.z); drop.scale.y = 1.6;
      anim.drips.push({ mesh: drop, x: item.x, z: item.z, top: 0.3, phase: item.x * 1.7 });
    }
    const moving = [
      ...doors.filter(d => d.floor === f.id).flatMap(d => d.leaves.map(l => l.mesh)), lift[f.id].left, lift[f.id].right,
      ...anim.bobs.slice(before.bobs).map(b => b.mesh), ...anim.tails.slice(before.tails).map(t => t.mesh), ...anim.flames.slice(before.flames),
      ...anim.drips.filter(d => d.mesh.parent === group).map(d => d.mesh),
    ];
    batchStatic(group, moving);
    floors[f.id] = group;
    scene.add(group);
  }
  const cityGlows: THREE.MeshStandardMaterial[] = [];
  const cityWindows: THREE.MeshStandardMaterial[] = [];
  const ownWindows: THREE.MeshStandardMaterial[] = [];
  const cars: { mesh: THREE.Group; lane: number; speed: number; offset: number }[] = [];
  const city = buildCity(cityGlows, cityWindows, cars);
  scene.add(city);
  const outside: Record<number, THREE.Group> = { 0: buildFacade(cityGlows, ownWindows) };
  scene.add(outside[0]);

  // Real lights: the palier lamp, the open flats, the hall.
  for (const f of FLOORS) {
    const list: [string, number, number, number][] = f.id === 8 ? [] : [['#fff0d8', 0, 0, 0.9]];
    for (const s of SECTORS.filter(s => s.floor === f.id && !['palier', 'vereda', 'terraza', 'sogas', 'asamblea', 'nucleo'].includes(s.id))) list.push([s.light, (s.x0 + s.x1) / 2, (s.z0 + s.z1) / 2, 1.1]);
    for (const [color, x, z, intensity] of list) {
      const light = new THREE.PointLight(color, intensity * 6, 10, 1.6);
      light.position.set(x, CEILING - 0.5, z);
      floors[f.id].add(light);
    }
  }
  // The sun going down behind the blocks, the moon and the stars later.
  const sun = new THREE.DirectionalLight('#ffc890', 1.2);
  sun.position.set(-80, 40, 60); scene.add(sun, sun.target);
  const sunDisc = new THREE.Mesh(new THREE.CircleGeometry(9, 24), new THREE.MeshBasicMaterial({ color: '#ffb060', toneMapped: false, fog: false }));
  scene.add(sunDisc);
  const starGeo = new THREE.BufferGeometry();
  const starPos = new Float32Array(600 * 3); const sr = random(77);
  for (let i = 0; i < 600; i++) { const a = sr() * Math.PI * 2, e = 0.15 + sr() * 1.2; starPos.set([Math.cos(a) * Math.cos(e) * 400, Math.sin(e) * 400, Math.sin(a) * Math.cos(e) * 400], i * 3); }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: '#ffffff', size: 1.4, sizeAttenuation: false, transparent: true, opacity: 0, fog: false }));
  scene.add(stars);
  const moon = new THREE.Mesh(new THREE.CircleGeometry(5, 24), new THREE.MeshBasicMaterial({ color: '#f4f0e0', toneMapped: false, fog: false, transparent: true, opacity: 0 }));
  moon.position.set(120, 140, -260); moon.lookAt(0, 0, 0); scene.add(moon);

  // People at the circles.
  const npcs: Npc[] = [];
  for (const s of SCENES) {
    const group = floors[s.floor];
    const people = [{ ...s.npc, pose: s.pose, mood: s.mood, look: s.look, main: true }, ...(s.extras ?? []).map(e => ({ ...e, main: false }))];
    for (const p of people) {
      const anyP = p as typeof p & { seat?: boolean; lying?: boolean; y?: number };
      const person = makePerson(p.look as Look, p.pose, { seat: anyP.seat, lying: anyP.lying, mood: p.mood });
      person.root.position.set(p.x, anyP.y ?? 0, p.z); person.root.rotation.y = p.heading;
      if ((anyP.seat || p.pose === 'sit') && !seatUnder(s.floor, p.x, p.z)) chairFor(group, p.x, p.z, p.heading);
      group.add(person.root);
      npcs.push({ person, floor: s.floor, scene: s.id, main: p.main, x: p.x, z: p.z, heading: p.heading, baseMood: p.mood ?? 'neutral', lying: anyP.lying, seated: anyP.seat || p.pose === 'sit', body: (p.look as Look).body, seed: npcs.length * 31 + 7 });
    }
  }
  // Every other neighbour: you can talk to all of them.
  for (const [floorId, list] of Object.entries(CROWD)) {
    const floor = Number(floorId);
    list.forEach((c, i) => {
      const base = c.child ? KID_LOOKS[i % KID_LOOKS.length] : CROWD_LOOKS[(i * 4 + floor * 3) % CROWD_LOOKS.length];
      const look = { ...base, seed: floor * 100 + i * 7 };
      const person = makePerson(look as Look, c.pose, { seat: c.seat, mood: c.mood });
      person.root.position.set(c.x, 0, c.z); person.root.rotation.y = c.heading;
      if (c.seat && !seatUnder(floor, c.x, c.z)) chairFor(floors[floor], c.x, c.z, c.heading);
      floors[floor].add(person.root);
      npcs.push({ person, floor, x: c.x, z: c.z, heading: c.heading, baseMood: c.mood ?? 'neutral', lying: c.lying, seated: c.seat || c.pose === 'sit', talk: `${floor}-${i}`, body: (look as Look).body, seed: floor * 100 + i });
    });
  }
  // Neighbours who walk.
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
    sprite.scale.set(2.2, 0.55, 1);
    floors[who.floor].add(sprite);
    bubbles.push({ sprite, until: clockNow + seconds, npc: who });
  }
  function setSceneMood(id: string | null, mood: string | null) {
    for (const npc of npcs) if (npc.scene) setMood(npc.person, id && mood && npc.scene === id && npc.main ? mood : npc.baseMood);
  }

  // The evening: 18:00 golden, 19:00 sunset, 20:00 violet, 21:00 night.
  let k = 0, meeting: 'juntando' | 'quorum' | 'votado' = 'juntando';
  const SKY: [number, string][] = [[0, '#9cc4e4'], [0.3, '#f2b07a'], [0.5, '#d07a6a'], [0.7, '#4a4a7a'], [1, '#101a34']];
  const tmp = new THREE.Color(), tmp2 = new THREE.Color();
  function skyAt(x: number) {
    for (let i = 1; i < SKY.length; i++) if (x <= SKY[i][0]) { const [a, ca] = SKY[i - 1], [b, cb] = SKY[i]; return tmp.set(ca).lerp(tmp2.set(cb), (x - a) / (b - a)); }
    return tmp.set(SKY[SKY.length - 1][1]);
  }
  function applyEvening() {
    const sky = skyAt(k);
    if (scene.background instanceof THREE.Color) scene.background.copy(sky); else scene.background = sky.clone();
    if (scene.fog) (scene.fog as THREE.Fog).color.copy(sky).multiplyScalar(0.85);
    const sunK = Math.max(0, 1 - k / 0.55);
    sun.intensity = 0.15 + sunK * 1.3; sun.color.set(k < 0.25 ? '#ffe0b0' : '#ff9a60');
    if (k > 0.6) { sun.color.set('#8a9ac8'); sun.intensity = 0.35; }
    sunDisc.position.set(-260, -20 + sunK * 90, -120); sunDisc.lookAt(0, 10, 0); sunDisc.visible = sunK > 0.02;
    (stars.material as THREE.PointsMaterial).opacity = Math.max(0, (k - 0.6) / 0.4) * 0.9;
    (moon.material as THREE.MeshBasicMaterial).opacity = Math.max(0, (k - 0.5) / 0.5);
    const lightsOn = Math.max(0, Math.min(1, (k - 0.25) / 0.4));
    for (const m of cityWindows) m.emissiveIntensity = 0.12 + lightsOn * 1.0;
    for (const m of ownWindows) m.emissiveIntensity = 0.2 + lightsOn * 0.8;
    for (const m of [...cityGlows, ...anim.glows]) if (m.userData.base == null) m.userData.base = m.emissiveIntensity;
    for (const m of cityGlows) m.emissiveIntensity = (m.userData.base as number) + lightsOn * 1.6;
    // The string lights of the meeting come on once the quorum is there, or at night.
    const party = meeting !== 'juntando' || k > 0.75;
    for (const b of anim.bulbs) b.color.set(party ? '#ffd890' : '#d8d0b8');
  }
  applyEvening();
  function setEvening(clock: string, state: 'juntando' | 'quorum' | 'votado') {
    const [h, m] = clock.split(':').map(Number);
    const start = BUILDING.start[0] * 60 + BUILDING.start[1], end = BUILDING.meeting[0] * 60 + BUILDING.meeting[1];
    k = Math.max(0, Math.min(1, ((h * 60 + m) - start) / (end - start)));
    meeting = state;
    applyEvening();
  }

  function bodies(floor: number): Body[] {
    const out: Body[] = [];
    for (const n of npcs) if (n.floor === floor && !n.lying) out.push({ x: n.x, z: n.z, who: n });
    for (const m of movers) if (m.floor === floor) out.push({ x: m.x, z: m.z, who: m });
    return out;
  }

  const wp = new THREE.Vector3();
  function animate(t: number, dt: number, floor: number, px: number, pz: number) {
    clockNow = t;
    // Traffic on Medrano.
    for (const c of cars) {
      const span = 240, u = ((t * c.speed + c.offset) % span + span) % span;
      const x = c.lane ? -120 + u : 120 - u;
      c.mesh.position.set(x, 0, c.lane ? 21.6 : 17.8); c.mesh.rotation.y = c.lane ? Math.PI / 2 : -Math.PI / 2;
    }
    for (const spot of spots) {
      if (spot.floor !== floor) continue;
      spot.gem.position.y = 2.3 + Math.sin(t * 2 + spot.group.position.x) * 0.12;
      spot.gem.rotation.y += dt * 1.5;
      spot.ring.scale.setScalar(1 + Math.sin(t * 3) * 0.03);
    }
    if (floor === 2) for (const d of anim.drips) {
      const u = ((t * 0.7 + d.phase) % 1 + 1) % 1;
      d.mesh.position.y = CEILING - 0.05 - u * u * (CEILING - 0.05 - d.top);
    }
    for (const b of anim.bobs) {
      if (Number.isNaN(b.base)) b.mesh.rotation.x = Math.sin(t * 1.4 + b.phase) * 0.14;
      else b.mesh.position.y = b.base + Math.sin(t * 1.1 + b.phase) * 0.05;
    }
    for (const tl of anim.tails) tl.mesh.rotation.y = Math.sin(t * 2.2 + tl.phase) * 0.6;
    for (const f of anim.flames) f.scale.setScalar(0.85 + Math.sin(t * 13 + f.position.x * 9) * 0.15 + Math.sin(t * 29 + f.position.z * 7) * 0.08);
    for (const m of anim.glows) if (m.userData.tv) m.emissiveIntensity = 0.4 + Math.sin(t * 7) * 0.1 + Math.sin(t * 17) * 0.08;
    // People who walk.
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
      const want = nearDoor.some(p => Math.hypot(p.x - door.x, p.z - door.z) < 3) ? 1 : 0;
      door.k += (want - door.k) * Math.min(1, dt * 5);
      for (const leaf of door.leaves) leaf.open(door.k);
    }
    for (const npc of npcs) {
      if (npc.floor !== floor) continue;
      if (Math.abs(npc.x - px) > 26 || Math.abs(npc.z - pz) > 26) continue;
      animatePerson(npc.person, dt, 0, talking.has(npc.person));
    }
    // Chatter bubbles.
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.npc.person.root.getWorldPosition(wp); floors[floor].worldToLocal(wp); b.sprite.position.set(wp.x, wp.y + 2.25, wp.z);
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

  void opts;
  return { floors, outside, npcs, movers, spots, doors, lift, animate, setSceneMood, setEvening, dusk: () => k, bodies, say };
}
