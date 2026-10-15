// Hospital San Casi Vivo · the 3D hospital: four floors, the street and the
// ambulance bay, every bed, curtain and monitor, and the people who fill it.
// Original procedural geometry and canvas textures only; people come from
// Noche abierta's people3d and the player is the SpanishCue mascot (hero3d).
// Static furniture is merged by material (batchStatic), so a floor costs a
// few hundred draw calls; only the floor you are on is drawn.
import * as THREE from 'three';
import { batchStatic, canvas, random } from '../noche-abierta/build3d';
import { addBlobShadow, animatePerson, createPerson, setMood, setPose, type Look, type Person } from '../noche-abierta/people3d';
import type { Voice } from '../escucha-3d/bump.mjs';
import { CEILING, CHATTER, CROWD, DOORS, ELEVATOR, FLOORS, FURNITURE, SCENES, SECTORS, STAIRS, WALKERS, WALL, WALLS, walkerAt, type Walker } from './layout.mjs';

type Item = { type: string; x: number; z: number; w: number; d: number; rot?: number; solid?: boolean };
export type Npc = { person: Person; floor: number; scene?: string; main?: boolean; x: number; z: number; heading: number; baseMood: string; lying?: boolean; seated?: boolean; talk?: string; body?: string; seed: number; angryUntil?: number; smoker?: { tip: THREE.Object3D; puffs: THREE.Sprite[]; phase: number } };
export type Mover = { walker: Walker; person: Person; floor: number; offset: number; carry?: THREE.Object3D; rider?: Person; x: number; z: number; moving?: boolean; body?: string; seed: number; angryUntil?: number; heading?: number };
export type Cry = Voice;
export type DoorRig = { floor: number; x: number; z: number; leaves: { mesh: THREE.Object3D; open: (k: number) => void }[]; k: number };
export type Spot = { id: string; floor: number; group: THREE.Group; ring: THREE.Mesh; gem: THREE.Mesh; material: THREE.MeshBasicMaterial };
export type Hospital = {
  floors: Record<number, THREE.Group>;
  exterior: THREE.Group;
  npcs: Npc[];
  movers: Mover[];
  spots: Spot[];
  doors: DoorRig[];
  lift: Record<number, { left: THREE.Object3D; right: THREE.Object3D }>;
  animate: (t: number, dt: number, floor: number, px: number, pz: number) => void;
  setSceneMood: (id: string | null, mood: string | null) => void;
  /** Starts the ambulance arrival (also runs by itself every minute or so). */
  ambulance: () => void;
  /** A speech bubble over someone: plain talk or a red yell. */
  say: (who: Npc | Mover, text: string, seconds?: number, yell?: boolean) => void;
};

// People currently speaking in an open scene.
export const talking = new WeakSet<Person>();

// ---------------------------------------------------------------- materials
const cache = new Map<string, THREE.Material>();
function std(color: string, roughness = 0.7, metalness = 0, emissive?: string, intensity = 1) {
  const key = `${color}|${roughness}|${metalness}|${emissive}|${intensity}`;
  let m = cache.get(key) as THREE.MeshStandardMaterial | undefined;
  if (!m) {
    m = new THREE.MeshStandardMaterial({ color, roughness, metalness });
    if (emissive) { m.emissive.set(emissive); m.emissiveIntensity = intensity; }
    cache.set(key, m);
  }
  return m;
}
function bright(color: string, opacity = 1) {
  const key = `bright|${color}|${opacity}`;
  let m = cache.get(key) as THREE.MeshBasicMaterial | undefined;
  if (!m) { m = new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity, toneMapped: false }); cache.set(key, m); }
  return m;
}
const B = (w: number, h: number, d: number) => new THREE.BoxGeometry(w, h, d);
const C = (rt: number, rb: number, h: number, seg = 14) => new THREE.CylinderGeometry(rt, rb, h, seg);
function add(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x = 0, y = 0, z = 0, ry = 0) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.rotation.y = ry;
  parent.add(mesh);
  return mesh;
}
const WHITE = () => std('#eef1f2', 0.5);
const STEEL = () => std('#b8c0c6', 0.32, 0.75);
const DARK = () => std('#2a2f36', 0.5, 0.3);
const BLOOD = () => std('#6e0a0a', 0.35, 0, '#2a0000', 0.4);
const SHEET = () => std('#e9eef0', 0.85);

// ---------------------------------------------------------------- textures
// Speckled vinyl floor that keeps a soft reflection of the ceiling panels.
function vinyl(base: string, fleck: string, seed: number) {
  const rand = random(seed);
  const t = canvas(256, 256, ctx => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 2600; i++) { ctx.fillStyle = rand() < 0.5 ? fleck : 'rgba(255,255,255,.35)'; ctx.globalAlpha = 0.25 + rand() * 0.35; ctx.fillRect(rand() * 256, rand() * 256, 1 + rand() * 2, 1 + rand() * 2); }
    ctx.globalAlpha = 0.35; ctx.strokeStyle = 'rgba(0,0,0,.25)'; ctx.lineWidth = 1;
    for (let i = 0; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(i * 128, 0); ctx.lineTo(i * 128, 256); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, i * 128); ctx.lineTo(256, i * 128); ctx.stroke(); }
  }, true);
  return t;
}
// Walls are one vertical texture: a coloured band, the handrail and paint.
function wallTexture(band: string, paint: string, rail: string) {
  return canvas(8, 256, ctx => {
    ctx.fillStyle = paint; ctx.fillRect(0, 0, 8, 256);
    ctx.fillStyle = band; ctx.fillRect(0, 256 - 72, 8, 72);
    ctx.fillStyle = rail; ctx.fillRect(0, 256 - 74, 8, 5);
    ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(0, 252, 8, 4);
  });
}
function ceilingTexture() {
  return canvas(128, 128, ctx => {
    ctx.fillStyle = '#e4e6e2'; ctx.fillRect(0, 0, 128, 128);
    ctx.strokeStyle = '#b9bcb6'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, 128, 128);
    for (let i = 0; i < 300; i++) { ctx.fillStyle = 'rgba(0,0,0,.08)'; ctx.fillRect(Math.random() * 128, Math.random() * 128, 1, 1); }
  }, true);
}
function textTexture(text: string, bg: string, fg: string, w = 512, h = 128, font = 'bold 64px "Arial Narrow", Arial, sans-serif', icon?: string) {
  return canvas(w, h, ctx => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = fg; ctx.font = font; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    if (icon) { ctx.fillText(icon, h * 0.55, h / 2 + 2); ctx.fillText(text, w / 2 + h * 0.3, h / 2 + 2); } else ctx.fillText(text, w / 2, h / 2 + 2);
  });
}
function sign(parent: THREE.Object3D, text: string, x: number, y: number, z: number, ry: number, width = 2.2, bg = '#1d5fa8', fg = '#ffffff', both = true) {
  const tex = textTexture(text, bg, fg);
  const mat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false, side: both ? THREE.DoubleSide : THREE.FrontSide });
  const mesh = add(parent, new THREE.PlaneGeometry(width, width / 4), mat, x, y, z, ry);
  return mesh;
}
function windowTexture(seed: number) {
  const rand = random(seed);
  return canvas(256, 256, ctx => {
    const g = ctx.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, '#16213a'); g.addColorStop(1, '#3a3050');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 9; i++) {
      const x = rand() * 240, w = 20 + rand() * 40, h = 60 + rand() * 180;
      ctx.fillStyle = '#0d1220'; ctx.fillRect(x, 256 - h, w, h);
      for (let k = 0; k < 30; k++) if (rand() < 0.35) { ctx.fillStyle = rand() < 0.7 ? '#ffd58a' : '#cfe4ff'; ctx.fillRect(x + 3 + rand() * (w - 6), 256 - h + 4 + rand() * (h - 8), 2, 3); }
    }
    ctx.strokeStyle = '#b8c0c6'; ctx.lineWidth = 6; ctx.strokeRect(0, 0, 256, 256); ctx.beginPath(); ctx.moveTo(128, 0); ctx.lineTo(128, 256); ctx.stroke();
  });
}
// The heart monitor: one canvas redrawn every frame and shared by every screen.
const ecg = (() => {
  if (typeof document === 'undefined') return null;
  const el = document.createElement('canvas'); el.width = 256; el.height = 128;
  const tex = new THREE.CanvasTexture(el); tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false });
  return { el, ctx: el.getContext('2d')!, tex, mat, x: 0 };
})();
function drawEcg(t: number) {
  if (!ecg) return;
  const { ctx } = ecg;
  ctx.fillStyle = 'rgba(4,16,10,.28)'; ctx.fillRect(0, 0, 256, 128);
  const x = Math.floor((t * 90) % 256);
  ctx.fillStyle = '#04100a'; ctx.fillRect(x, 0, 14, 128);
  const beat = (u: number) => { const p = u % 1; return p < 0.04 ? -40 * Math.sin(p / 0.04 * Math.PI) : p < 0.08 ? 18 * Math.sin((p - 0.04) / 0.04 * Math.PI) : p > 0.3 && p < 0.42 ? -8 * Math.sin((p - 0.3) / 0.12 * Math.PI) : 0; };
  ctx.strokeStyle = '#3dff8b'; ctx.lineWidth = 2; ctx.beginPath();
  for (let i = -4; i <= 0; i++) { const u = t * 1.2 + i * 0.01; ctx.lineTo(x + i, 64 + beat(u)); }
  ctx.stroke();
  ctx.fillStyle = '#3dff8b'; ctx.font = 'bold 22px monospace'; ctx.fillStyle = '#04100a'; ctx.fillRect(196, 4, 58, 26);
  ctx.fillStyle = '#3dff8b'; ctx.fillText(String(72 + Math.round(Math.sin(t * 0.3) * 6)), 204, 26);
  ecg.tex.needsUpdate = true;
}
function puff() {
  return canvas(64, 64, ctx => {
    const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30); g.addColorStop(0, 'rgba(230,230,230,.9)'); g.addColorStop(1, 'rgba(230,230,230,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  });
}

function cautionTexture() {
  return canvas(128, 256, ctx => {
    ctx.fillStyle = '#f2c81e'; ctx.fillRect(0, 0, 128, 256);
    ctx.fillStyle = '#1a1a1a'; ctx.beginPath(); ctx.moveTo(64, 30); ctx.lineTo(108, 110); ctx.lineTo(20, 110); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#f2c81e'; ctx.font = 'bold 60px Arial'; ctx.textAlign = 'center'; ctx.fillText('!', 64, 100);
    ctx.fillStyle = '#1a1a1a'; ctx.font = 'bold 22px Arial'; ctx.fillText('CUIDADO', 64, 150); ctx.fillText('PISO', 64, 180); ctx.fillText('MOJADO', 64, 208);
  });
}
// A palm tree: a leaning ringed trunk and drooping fronds.
const FROND = (() => {
  if (typeof document === 'undefined') return null;
  return new THREE.MeshStandardMaterial({ color: '#2f6a2a', roughness: 0.8, side: THREE.DoubleSide });
})();
function palm(g: THREE.Object3D, x: number, z: number, h: number) {
  const lean = 0.08 + (Math.abs(x) % 5) * 0.03, dir = (x * 1.7) % (Math.PI * 2);
  const seg = 7, bark = std('#7a6248', 0.95), ring = std('#5a4632', 0.95);
  let px = x, pz = z;
  for (let i = 0; i < seg; i++) {
    const y = (i + 0.5) * h / seg;
    px = x + Math.sin(dir) * lean * y * y / h; pz = z + Math.cos(dir) * lean * y * y / h;
    add(g, C(0.15 - i * 0.008, 0.18 - i * 0.008, h / seg, 8), bark, px, y, pz);
    add(g, C(0.19 - i * 0.008, 0.19 - i * 0.008, 0.06, 8), ring, px, y + h / seg / 2 - 0.03, pz);
  }
  if (!FROND) return;
  for (let k = 0; k < 9; k++) {
    const holder = new THREE.Group(); holder.position.set(px, h, pz); holder.rotation.y = k * (Math.PI * 2 / 9) + x; g.add(holder);
    const leaf = add(holder, new THREE.PlaneGeometry(0.7, 3.4, 1, 4), FROND, 0, 0, 1.6);
    leaf.rotation.x = -Math.PI / 2 + 0.45 + (k % 3) * 0.12;
    const pos = leaf.geometry.attributes.position;
    for (let v = 0; v < pos.count; v++) { const t = (pos.getY(v) + 1.7) / 3.4; pos.setZ(v, -t * t * 1.1); if (Math.abs(pos.getX(v)) > 0.1) pos.setX(v, pos.getX(v) * (1 - t * 0.7)); }
    leaf.geometry.computeVertexNormals();
  }
  add(g, new THREE.SphereGeometry(0.28, 8, 6), std('#5a3a1a', 0.9), px, h - 0.15, pz);
}
function carMesh(x: number, z: number, heading: number, color: string, hearse = false) {
  const group = new THREE.Group(); group.position.set(x, 0, z); group.rotation.y = heading;
  const paint = std(color, 0.3, 0.5), glass = std('#1a2430', 0.08, 0.6);
  const len = hearse ? 5.6 : 4.2;
  add(group, B(1.8, 0.7, len), paint, 0, 0.65, 0);
  add(group, B(1.6, 0.6, hearse ? 3.6 : 2.1), hearse ? paint : glass, 0, 1.28, hearse ? -0.6 : -0.2);
  if (hearse) {
    for (const sx of [-1, 1]) add(group, B(0.02, 0.4, 2.6), glass, sx * 0.81, 1.3, -0.9);
    add(group, B(0.02, 0.3, 1.8), std('#c8a040', 0.4, 0.8), 0.82, 1.3, -0.9);
    add(group, B(0.5, 0.4, 2), std('#6a3a1a', 0.5), 0, 1.2, -1.2);
  }
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(group, C(0.34, 0.34, 0.25, 12), DARK(), sx * 0.88, 0.34, sz * (len / 2 - 0.8)).rotation.z = Math.PI / 2;
  for (const sx of [-1, 1]) add(group, B(0.3, 0.12, 0.05), std('#fff6d8', 0.3, 0, '#fff0c0', 1.4), sx * 0.6, 0.72, len / 2 + 0.01);
  return group;
}

// ---------------------------------------------------------------- furniture
function bedFrame(g: THREE.Object3D, item: Item, kind: 'bed' | 'trauma' | 'icubed' | 'gurney') {
  const holder = new THREE.Group();
  holder.position.set(item.x, 0, item.z);
  holder.rotation.y = (item.rot ?? 0) * Math.PI / 2;
  g.add(holder);
  const len = kind === 'gurney' ? 2 : 2.05, wid = kind === 'gurney' ? 0.66 : 0.95;
  const h = kind === 'gurney' ? 0.78 : 0.58;
  add(holder, B(wid, 0.08, len), STEEL(), 0, h - 0.06, 0);
  add(holder, B(wid - 0.06, 0.14, len - 0.1), kind === 'trauma' ? std('#2c3a46', 0.6) : std('#dfe7ea', 0.8), 0, h + 0.04, 0);
  add(holder, B(wid - 0.1, 0.05, len - 0.2), SHEET(), 0, h + 0.13, 0.04);
  add(holder, B(wid * 0.55, 0.1, 0.36), WHITE(), 0, h + 0.17, -len / 2 + 0.28);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    add(holder, C(0.025, 0.025, h - 0.1, 6), STEEL(), sx * (wid / 2 - 0.06), (h - 0.1) / 2 + 0.06, sz * (len / 2 - 0.08));
    add(holder, new THREE.SphereGeometry(0.05, 8, 6), DARK(), sx * (wid / 2 - 0.06), 0.05, sz * (len / 2 - 0.08));
  }
  if (kind !== 'gurney') {
    add(holder, B(wid, 0.5, 0.05), kind === 'icubed' ? std('#c9d6e0', 0.4) : std('#d6dde0', 0.45), 0, h + 0.2, -len / 2);
    add(holder, B(0.03, 0.22, len * 0.55), STEEL(), wid / 2, h + 0.18, 0.1);
  }
  if (kind === 'gurney' || kind === 'trauma') add(holder, B(0.03, 0.18, len * 0.7), STEEL(), -wid / 2, h + 0.15, 0.1);
  return holder;
}
function monitor(g: THREE.Object3D, x: number, z: number, y = 0, ry = 0, stand = true) {
  if (stand) {
    add(g, C(0.03, 0.03, 1.2, 6), STEEL(), x, y + 0.6, z);
    add(g, C(0.25, 0.25, 0.04, 10), DARK(), x, y + 0.02, z);
  }
  const head = new THREE.Group(); head.position.set(x, y + (stand ? 1.35 : 0), z); head.rotation.y = ry; g.add(head);
  add(head, B(0.46, 0.34, 0.12), std('#d8dcd8', 0.5), 0, 0, 0);
  if (ecg) add(head, new THREE.PlaneGeometry(0.38, 0.24), ecg.mat, 0, 0.01, 0.062);
  return head;
}
function chairRow(g: THREE.Object3D, item: Item) {
  const n = Math.max(1, Math.round(item.w / 0.62));
  const seat = std('#2d6aa0', 0.55), frame = STEEL();
  add(g, B(item.w, 0.05, 0.08), frame, item.x, 0.38, item.z);
  for (let i = 0; i < n; i++) {
    const x = item.x - item.w / 2 + 0.31 + i * (item.w / n);
    add(g, B(0.5, 0.06, 0.46), seat, x, 0.45, item.z);
    add(g, B(0.5, 0.48, 0.05), seat, x, 0.72, item.z - 0.24);
  }
  for (const sx of [-1, 1]) add(g, B(0.05, 0.4, 0.4), frame, item.x + sx * (item.w / 2 - 0.1), 0.2, item.z);
}
function vending(g: THREE.Object3D, item: Item, seed: number) {
  const holder = new THREE.Group(); holder.position.set(item.x, 0, item.z); holder.rotation.y = -(item.rot ?? 0) * Math.PI / 2; g.add(holder);
  add(holder, B(1.2, 1.9, 0.9), std('#b3122e', 0.4, 0.2), 0, 0.95, 0);
  const rand = random(seed);
  const face = canvas(128, 200, ctx => {
    ctx.fillStyle = '#10141a'; ctx.fillRect(0, 0, 128, 200);
    for (let r = 0; r < 6; r++) for (let c = 0; c < 4; c++) { ctx.fillStyle = ['#f0c040', '#3a9ad0', '#e0503a', '#5ac06a', '#c060c0'][Math.floor(rand() * 5)]; ctx.fillRect(8 + c * 30, 10 + r * 30, 20, 22); }
    ctx.fillStyle = '#ffe8a0'; ctx.font = 'bold 13px Arial'; ctx.fillText('NO DEVUELVE', 18, 196);
  });
  add(holder, new THREE.PlaneGeometry(0.8, 1.3), new THREE.MeshStandardMaterial({ map: face, emissive: '#ffffff', emissiveMap: face, emissiveIntensity: 0.55 }), -0.1, 1.15, 0.452);
}
function buildItem(g: THREE.Group, item: Item, floor: number, glowMats: THREE.MeshStandardMaterial[], low: boolean) {
  const r = (item.rot ?? 0) * Math.PI / 2;
  const turned = item.rot === 1 || item.rot === 3;
  switch (item.type) {
    case 'bed': case 'trauma': case 'icubed': case 'gurney': {
      const holder = bedFrame(g, item, item.type);
      if (item.type === 'icubed' || item.type === 'trauma') {
        add(holder, C(0.02, 0.02, 1.9, 6), STEEL(), 0.62, 0.95, -0.85);
        add(holder, B(0.16, 0.24, 0.05), std('#e8f4f8', 0.2, 0, '#bfe6ff', 0.2), 0.62, 1.75, -0.85);
      }
      if (item.type === 'trauma') { add(g, B(0.9, 0.01, 0.7), BLOOD(), item.x + 0.4, 0.012, item.z + 1.2); add(g, B(0.3, 0.01, 0.4), BLOOD(), item.x - 0.5, 0.012, item.z + 1.6); }
      break;
    }
    case 'counter': case 'nursedesk': {
      add(g, B(item.w, 1.05, item.d), std('#e9e4da', 0.55), item.x, 0.52, item.z);
      add(g, B(item.w + 0.1, 0.06, item.d + 0.2), std('#3a7a8a', 0.35), item.x, 1.08, item.z);
      add(g, B(item.w * 0.9, 0.08, 0.4), std('#f2f2ee', 0.4), item.x, 0.78, item.z - item.d / 2 + 0.2);
      for (let i = 0; i < Math.floor(item.w / 2); i++) { const x = item.x - item.w / 2 + 1 + i * 2; add(g, B(0.5, 0.32, 0.04), DARK(), x, 1.3, item.z - item.d / 4); add(g, B(0.46, 0.28, 0.01), std('#5a8ab0', 0.3, 0, '#3a7ad0', 0.6), x, 1.3, item.z - item.d / 4 + 0.025); }
      add(g, B(0.3, 0.06, 0.2), std('#f4f0e0', 0.8), item.x + 0.7, 1.13, item.z);
      break;
    }
    case 'ticket': {
      add(g, B(0.42, 1.3, 0.34), std('#d8301e', 0.4), item.x, 0.65, item.z);
      add(g, B(0.3, 0.16, 0.02), bright('#101010'), item.x, 1.05, item.z + 0.18);
      add(g, new THREE.PlaneGeometry(0.26, 0.1), new THREE.MeshBasicMaterial({ map: textTexture('FUERA DE SERVICIO', '#101010', '#ff4a2a', 256, 64, 'bold 24px Arial'), toneMapped: false }), item.x, 1.05, item.z + 0.192);
      break;
    }
    case 'plant': add(g, C(0.3, 0.24, 0.5), std('#c8b8a0', 0.8), item.x, 0.25, item.z); add(g, new THREE.IcosahedronGeometry(0.55, 0), std('#3a7a3a', 0.8), item.x, 1, item.z); break;
    case 'chairs': chairRow(g, item); break;
    case 'vending': vending(g, item, Math.round(item.x * 7 + item.z)); break;
    case 'tv': {
      const tv = textTexture('TELENOVELA · CAP. 3.412', '#141820', '#ffd28a', 512, 256, 'bold 34px Arial');
      add(g, B(item.w, 0.9, 0.08), DARK(), item.x, 2.5, item.z);
      const m = new THREE.MeshStandardMaterial({ map: tv, emissive: '#ffffff', emissiveMap: tv, emissiveIntensity: 0.6 });
      add(g, new THREE.PlaneGeometry(item.w - 0.12, 0.8), m, item.x, 2.5, item.z + (item.z < 0 ? -0.05 : 0.05), item.z < 0 ? Math.PI : 0);
      glowMats.push(m);
      break;
    }
    case 'sofa': add(g, B(item.w, 0.45, item.d), std('#7a3a4a', 0.8), item.x, 0.25, item.z); add(g, B(item.w, 0.5, 0.25), std('#7a3a4a', 0.8), item.x, 0.6, item.z + item.d / 2 - 0.12); break;
    case 'watercooler': add(g, B(0.4, 1, 0.4), WHITE(), item.x, 0.5, item.z); add(g, C(0.16, 0.16, 0.45, 12), std('#9ad0f0', 0.1, 0, '#4aa0e0', 0.2), item.x, 1.23, item.z); break;
    case 'desk': add(g, B(turned ? item.d : item.w, 0.06, turned ? item.w : item.d), std('#c8b89a', 0.6), item.x, 0.76, item.z); add(g, B((turned ? item.d : item.w) - 0.1, 0.7, 0.05), std('#a89878', 0.6), item.x, 0.38, item.z - item.d / 2 + 0.05); add(g, B(0.5, 0.34, 0.05), DARK(), item.x, 1.0, item.z - 0.2); break;
    case 'examchair': add(g, B(0.7, 0.45, 1.4), std('#2d5a7a', 0.5), item.x, 0.5, item.z); add(g, B(0.7, 0.6, 0.2), std('#2d5a7a', 0.5), item.x, 0.95, item.z - 0.6); break;
    case 'curtain': case 'curtains': {
      const mat = new THREE.MeshStandardMaterial({ color: '#8fc4c8', roughness: 0.9, side: THREE.DoubleSide, transparent: true, opacity: 0.88 });
      if (item.type === 'curtain') { add(g, new THREE.PlaneGeometry(item.w, 2.1, 12, 1), mat, item.x, 1.25, item.z); break; }
      // Bed bays: a curtain between every bed of the row.
      const n = Math.round(item.w / 4.5);
      for (let i = 0; i <= n; i++) add(g, new THREE.PlaneGeometry(item.d, 2.1), mat, item.x - item.w / 2 + i * (item.w / n) - 0.2, 1.25, item.z, Math.PI / 2);
      add(g, B(item.w, 0.03, 0.03), STEEL(), item.x, 2.32, item.z + item.d / 2);
      break;
    }
    case 'monitor': monitor(g, item.x, item.z); break;
    case 'surglight': {
      add(g, C(0.03, 0.03, 0.9, 6), STEEL(), item.x, CEILING - 0.45, item.z);
      add(g, new THREE.SphereGeometry(0.45, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), std('#e8ecee', 0.3, 0.3), item.x, CEILING - 0.95, item.z).rotation.x = Math.PI;
      const lamp = std('#fffbe8', 0.2, 0, '#fff6d0', 2.2);
      add(g, C(0.34, 0.34, 0.02, 20), lamp, item.x, CEILING - 1.0, item.z);
      break;
    }
    case 'crashcart': case 'medcart': case 'trolley': {
      const color = item.type === 'crashcart' ? '#c8201e' : item.type === 'medcart' ? '#2d6aa0' : '#d8dcd8';
      add(g, B(item.w, 0.9, item.d), std(color, 0.45), item.x, 0.5, item.z);
      for (let i = 0; i < 4; i++) add(g, B(item.w - 0.06, 0.02, 0.01), std('#f0f0f0', 0.4), item.x, 0.2 + i * 0.2, item.z + item.d / 2 + 0.005);
      add(g, B(item.w * 0.6, 0.16, item.d * 0.6), std('#f4f4f0', 0.6), item.x, 1.03, item.z);
      break;
    }
    case 'cabinet': case 'shelves': case 'lockers': {
      const w = turned ? item.d : item.w, d = turned ? item.w : item.d;
      const color = item.type === 'lockers' ? '#5a7a9a' : item.type === 'cabinet' ? '#e8ece8' : '#c8ccc8';
      add(g, B(w, 2, d), std(color, 0.5, 0.2), item.x, 1, item.z);
      if (item.type === 'shelves') for (let i = 0; i < 4; i++) for (let k = 0; k < Math.floor(w / 0.5); k++) add(g, B(0.3, 0.25, 0.3), std(['#e0d0a0', '#a0c0e0', '#f0f0f0'][(i + k) % 3], 0.8), item.x - w / 2 + 0.3 + k * 0.5, 0.35 + i * 0.48, item.z + d / 2 - 0.2);
      break;
    }
    case 'foodcounter': {
      add(g, B(item.w, 0.95, item.d), std('#b8c0c6', 0.3, 0.6), item.x, 0.47, item.z);
      add(g, B(item.w, 0.03, 0.5), new THREE.MeshPhysicalMaterial({ color: '#dff4ff', transparent: true, opacity: 0.35, roughness: 0.05 }), item.x, 1.35, item.z + 0.1).rotation.x = 0.4;
      for (let i = 0; i < 8; i++) add(g, B(0.6, 0.08, 0.4), std(['#c8a040', '#7a4a20', '#e8d070', '#5a8a3a'][i % 4], 0.6), item.x - item.w / 2 + 1 + i * 1.6, 1.0, item.z);
      const menu = textTexture('MENÚ DEL DÍA (DESDE 1998)', '#1a2a1a', '#f4f0d0', 1024, 160, 'bold 64px Georgia, serif');
      add(g, new THREE.PlaneGeometry(6, 0.9), new THREE.MeshBasicMaterial({ map: menu, toneMapped: false }), item.x, 2.5, -39.8);
      break;
    }
    case 'table': {
      add(g, C(0.75, 0.75, 0.05, 20), std('#e8e4da', 0.5), item.x, 0.74, item.z);
      add(g, C(0.05, 0.05, 0.72, 8), STEEL(), item.x, 0.37, item.z);
      for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + 0.4; add(g, B(0.42, 0.06, 0.42), std('#d0602a', 0.6), item.x + Math.sin(a) * 1.0, 0.45, item.z + Math.cos(a) * 1.0); }
      add(g, C(0.12, 0.1, 0.03, 12), WHITE(), item.x + 0.2, 0.78, item.z);
      break;
    }
    case 'windows': {
      add(g, B(item.w, 1.1, item.d), std('#d8d0c0', 0.6), item.x, 0.55, item.z);
      const glass = new THREE.MeshPhysicalMaterial({ color: '#cfe8f0', transparent: true, opacity: 0.25, roughness: 0.05 });
      add(g, B(item.w, 1.2, 0.04), glass, item.x, 1.7, item.z + item.d / 2 - 0.1);
      for (let i = 0; i < 5; i++) {
        const x = item.x - item.w / 2 + 2.2 + i * 4.4;
        sign(g, `VENTANILLA ${i + 1}`, x, 2.55, item.z + item.d / 2 - 0.08, 0, 1.6, '#2a3a4a');
      }
      break;
    }
    case 'posts': for (let i = 0; i < 6; i++) { const x = item.x - item.w / 2 + i * (item.w / 5); add(g, C(0.04, 0.04, 0.95, 8), STEEL(), x, 0.48, item.z); add(g, C(0.15, 0.15, 0.03, 10), DARK(), x, 0.015, item.z); if (i) add(g, B(item.w / 5, 0.05, 0.01), std('#b3122e', 0.6), x - item.w / 10, 0.9, item.z); } break;
    case 'bench': add(g, B(turned ? item.d : item.w, 0.08, turned ? item.w : item.d), std('#6a4a2a', 0.7), item.x, 0.45, item.z); add(g, B(0.08, 0.42, 0.08), DARK(), item.x - (item.w / 2 - 0.2) * (turned ? 0 : 1), 0.21, item.z - (item.d / 2 - 0.2) * (turned ? 1 : 0)); break;
    case 'bollard': add(g, C(0.15, 0.15, 0.9, 10), std('#e8c020', 0.5), item.x, 0.45, item.z); break;
    case 'ambulance': g.add(ambulanceMesh(item.x, item.z, 0)); break;
    case 'labbench': {
      add(g, B(item.w, 0.9, item.d), std('#e4e8ea', 0.5), item.x, 0.45, item.z);
      add(g, B(item.w + 0.05, 0.05, item.d + 0.05), std('#1c2a30', 0.3), item.x, 0.92, item.z);
      for (let i = 0; i < Math.floor(item.w / 1.5); i++) {
        const x = item.x - item.w / 2 + 0.8 + i * 1.5;
        if (i % 2) { add(g, B(0.22, 0.4, 0.3), std('#f0f0ee', 0.4), x, 1.15, item.z); add(g, C(0.03, 0.03, 0.3, 8), DARK(), x, 1.4, item.z + 0.08); }
        else for (let k = 0; k < 6; k++) add(g, C(0.015, 0.015, 0.12, 6), std(k % 3 ? '#8a1010' : '#e8d040', 0.3, 0, k % 3 ? '#300000' : undefined, 0.3), x - 0.2 + k * 0.08, 1.02, item.z);
      }
      break;
    }
    case 'centrifuge': add(g, C(0.4, 0.42, 0.45, 18), WHITE(), item.x, 1.15, item.z); add(g, B(item.w, 0.9, item.d), std('#d8dcd8', 0.5), item.x, 0.45, item.z); break;
    case 'fridge': add(g, B(turned ? item.d : item.w, 2, turned ? item.w : item.d), WHITE(), item.x, 1, item.z); add(g, B(0.04, 0.6, 0.04), STEEL(), item.x + 0.52, 1.2, item.z + 0.5); break;
    case 'kitchen': {
      add(g, B(item.w, 0.9, item.d), std('#d8c8a8', 0.6), item.x, 0.45, item.z);
      add(g, B(0.6, 0.35, 0.45), DARK(), item.x - 2, 1.12, item.z);
      add(g, B(0.4, 0.4, 0.3), std('#f0f0f0', 0.4), item.x + 1, 1.1, item.z);
      add(g, C(0.08, 0.06, 0.12, 10), std('#c04020', 0.5), item.x + 2.4, 0.97, item.z);
      break;
    }
    case 'xray': {
      add(g, B(item.w, 0.8, item.d), std('#e8ecee', 0.4), item.x, 0.4, item.z);
      add(g, B(0.5, 0.06, 2.2), std('#cfe0e8', 0.3), item.x, 0.84, item.z);
      add(g, C(0.06, 0.06, 2.6, 8), STEEL(), item.x - 1, 1.3, item.z - 1.2);
      add(g, B(0.6, 0.4, 0.6), std('#d8dce0', 0.4), item.x - 0.4, 2.2, item.z);
      break;
    }
    case 'lightbox': {
      const shot = canvas(512, 160, ctx => {
        ctx.fillStyle = '#d8e8f4'; ctx.fillRect(0, 0, 512, 160);
        for (let i = 0; i < 3; i++) {
          const x = 20 + i * 168; ctx.fillStyle = '#0a0e14'; ctx.fillRect(x, 10, 150, 140);
          ctx.fillStyle = 'rgba(220,235,255,.75)'; ctx.beginPath(); ctx.ellipse(x + 75, 80, 40, 60, 0, 0, 7); ctx.fill();
          ctx.fillStyle = '#0a0e14'; ctx.beginPath(); ctx.ellipse(x + 75, 80, 30, 50, 0, 0, 7); ctx.fill();
          ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 5;
          if (i === 1) { ctx.beginPath(); ctx.arc(x + 75, 70, 12, 0, 7); ctx.stroke(); ctx.fillStyle = '#fff'; ctx.fillRect(x + 92, 100, 18, 6); ctx.beginPath(); ctx.arc(x + 60, 110, 8, 0, 7); ctx.fill(); }
        }
      });
      const m = new THREE.MeshStandardMaterial({ map: shot, emissive: '#ffffff', emissiveMap: shot, emissiveIntensity: 0.9 });
      add(g, new THREE.PlaneGeometry(item.w, 1.25), m, item.x, 1.7, item.z + 0.16);
      add(g, B(item.w + 0.1, 1.35, 0.12), DARK(), item.x, 1.7, item.z + 0.08);
      break;
    }
    case 'leadglass': add(g, B(item.w, 2.4, item.d), new THREE.MeshPhysicalMaterial({ color: '#b8d8c8', transparent: true, opacity: 0.35, roughness: 0.1 }), item.x, 1.2, item.z); break;
    case 'ortable': {
      add(g, C(0.12, 0.2, 0.8, 10), STEEL(), item.x, 0.4, item.z);
      add(g, B(0.6, 0.12, 2.1), std('#2c5a6a', 0.5), item.x, 0.86, item.z);
      add(g, B(0.65, 0.04, 1.6), std('#3a8a7a', 0.9), item.x, 0.95, item.z + 0.2);
      add(g, B(0.4, 0.01, 0.4), BLOOD(), item.x + 0.1, 0.975, item.z + 0.1);
      break;
    }
    case 'anesthesia': add(g, B(0.7, 1.3, 0.6), std('#d8e0e4', 0.4), item.x, 0.65, item.z); monitor(g, item.x, item.z, 1.6, 0.6, false); add(g, C(0.06, 0.06, 0.4, 8), std('#2a8a4a', 0.4), item.x + 0.25, 1.5, item.z); break;
    case 'callpanel': {
      const panel = textTexture('TIMBRES: 401 402 403 404 405 406', '#101418', '#ff6a4a', 1024, 128, 'bold 52px monospace');
      const m = new THREE.MeshStandardMaterial({ map: panel, emissive: '#ffffff', emissiveMap: panel, emissiveIntensity: 1 });
      add(g, new THREE.PlaneGeometry(item.w, item.w / 8), m, item.x, 2.6, item.z);
      glowMats.push(m);
      break;
    }
    case 'balloons': for (let i = 0; i < 6; i++) { const b = add(g, new THREE.SphereGeometry(0.2, 12, 10), std(['#e8287a', '#ffd23f', '#2fd3ff', '#9b5cff'][i % 4], 0.35), item.x + Math.sin(i) * 0.4, 2.3 + (i % 3) * 0.25, item.z + Math.cos(i * 2) * 0.4); b.scale.y = 1.15; } break;
    case 'washer': for (let i = 0; i < 3; i++) { const z = item.z - item.d / 2 + 1 + i * 2; add(g, B(1.1, 1.3, 1.6), std('#d8dcd8', 0.4, 0.3), item.x, 0.65, z); add(g, C(0.4, 0.4, 0.04, 20), std('#8ab0c8', 0.1, 0.2), item.x + 0.56, 0.7, z).rotation.z = Math.PI / 2; } break;
    case 'linencart': add(g, B(item.w, 0.9, item.d), std('#3a5a8a', 0.8), item.x, 0.6, item.z); add(g, B(item.w - 0.1, 0.25, item.d - 0.1), SHEET(), item.x, 1.1, item.z); break;
    case 'drawers': {
      add(g, B(item.w, 2.4, item.d), std('#b8c0c6', 0.3, 0.7), item.x, 1.2, item.z);
      for (let r = 0; r < 3; r++) for (let c = 0; c < 8; c++) {
        const z = item.z - item.d / 2 + 1.4 + c * 2.7;
        add(g, B(0.03, 0.62, 0.62), std('#d8dee2', 0.25, 0.8), item.x - item.w / 2 - 0.01, 0.5 + r * 0.75, z);
        add(g, B(0.06, 0.04, 0.3), DARK(), item.x - item.w / 2 - 0.05, 0.5 + r * 0.75, z);
      }
      break;
    }
    case 'autopsy': add(g, C(0.1, 0.18, 0.85, 10), STEEL(), item.x, 0.42, item.z); add(g, B(0.9, 0.06, 2.3), std('#c8d0d4', 0.15, 0.85), item.x, 0.88, item.z); break;
    case 'pipes': for (let i = 0; i < 3; i++) add(g, C(0.08 + i * 0.03, 0.08 + i * 0.03, item.w, 10), std(['#8a6a3a', '#5a6a5a', '#9aa0a0'][i], 0.5, 0.4), item.x, CEILING - 0.25 - i * 0.05, item.z - 0.4 + i * 0.4).rotation.z = Math.PI / 2; break;
    case 'boiler': add(g, C(1.1, 1.1, 2.8, 18), std('#7a5a3a', 0.5, 0.5), item.x, 1.4, item.z); break;
    case 'ct': {
      // The CT scanner: a gantry ring with its dark tunnel and the sliding table.
      const holder = new THREE.Group(); holder.position.set(item.x, 0, item.z); holder.rotation.y = (item.rot ?? 0) * Math.PI / 2; g.add(holder);
      add(holder, new THREE.TorusGeometry(0.95, 0.32, 14, 32), std('#eef0f2', 0.35), 0, 1.27, -1.3);
      add(holder, B(2.6, 0.5, 0.75), std('#e4e8ea', 0.4), 0, 0.25, -1.3);
      add(holder, C(0.63, 0.63, 0.7, 28), DARK(), 0, 1.27, -1.3).rotation.x = Math.PI / 2;
      add(holder, B(0.5, 0.06, 0.05), bright('#3dc8ff'), 0, 2.3, -1.12);
      add(holder, B(0.6, 0.72, 2.4), std('#d8dde0', 0.45), 0, 0.36, 0.6);
      add(holder, B(0.55, 0.08, 3.2), std('#2a3a4a', 0.5), 0, 0.76, 0.2);
      add(holder, B(0.5, 0.01, 0.5), BLOOD(), 0.1, 0.81, 0.9);
      break;
    }
    case 'delivery': {
      // The delivery bed: raised back, stirrups, and what a birth leaves on the floor.
      const holder = bedFrame(g, item, 'bed');
      add(holder, B(0.9, 0.55, 0.08), std('#c8d4dc', 0.5), 0, 0.95, -0.7).rotation.x = -0.5;
      for (const sx of [-1, 1]) {
        add(holder, C(0.02, 0.02, 0.7, 6), STEEL(), sx * 0.36, 0.95, 1.05).rotation.x = 0.7;
        add(holder, B(0.14, 0.06, 0.26), std('#2a3a4a', 0.5), sx * 0.36, 1.22, 1.3);
      }
      const puddle = add(g, new THREE.CircleGeometry(0.75, 14), BLOOD(), item.x + 0.6, 0.012, item.z + 0.3); puddle.rotation.x = -Math.PI / 2; puddle.scale.set(1.3, 1, 1);
      add(g, C(0.2, 0.18, 0.3, 12), STEEL(), item.x + 1.1, 0.15, item.z - 0.4);
      break;
    }
    case 'warmer': {
      add(g, B(0.8, 0.9, 0.6), WHITE(), item.x, 0.45, item.z);
      add(g, B(0.75, 0.12, 0.55), std('#f4c8d0', 0.7), item.x, 0.98, item.z);
      add(g, C(0.02, 0.02, 1.1, 6), STEEL(), item.x - 0.35, 1.5, item.z);
      add(g, B(0.6, 0.08, 0.4), std('#ff6a3a', 0.4, 0, '#ff3a1a', 1.6), item.x, 2.05, item.z);
      add(g, new THREE.CapsuleGeometry(0.08, 0.18, 4, 8), std('#f8f0f4', 0.9), item.x, 1.1, item.z).rotation.z = Math.PI / 2;
      break;
    }
    case 'wetfloor': {
      const mat = new THREE.MeshStandardMaterial({ map: cautionTexture(), roughness: 0.5 });
      for (const sz of [-1, 1]) { const leaf = add(g, B(0.34, 0.64, 0.02), mat, item.x, 0.31, item.z + sz * 0.09); leaf.rotation.x = sz * 0.28; }
      const smear = add(g, new THREE.CircleGeometry(0.5, 10), BLOOD(), item.x + 0.5, 0.011, item.z + 0.2); smear.rotation.x = -Math.PI / 2; smear.scale.set(2.2, 0.5, 1);
      break;
    }
    case 'bin': {
      add(g, C(0.26, 0.22, 0.72, 12), std('#c81e1e', 0.6), item.x, 0.36, item.z);
      add(g, C(0.28, 0.28, 0.05, 12), std('#a01414', 0.6), item.x + 0.1, 0.76, item.z).rotation.z = 0.5;
      for (let k = 0; k < 4; k++) add(g, new THREE.SphereGeometry(0.09, 7, 5), k % 2 ? SHEET() : std('#c89a9a', 0.9), item.x + Math.sin(k * 2) * 0.12, 0.76 + (k % 2) * 0.06, item.z + Math.cos(k * 2) * 0.12);
      add(g, B(0.18, 0.18, 0.005), bright('#ffd23f'), item.x, 0.45, item.z + 0.24);
      break;
    }
    case 'palm': palm(g, item.x, item.z, 7 + (Math.abs(item.x * 13 + item.z * 7) % 3)); break;
    case 'lamppost': {
      add(g, C(0.08, 0.11, 6, 8), DARK(), item.x, 3, item.z);
      add(g, B(0.08, 0.08, 1.4), DARK(), item.x, 5.95, item.z - 0.65);
      add(g, B(0.4, 0.1, 0.25), std('#ffffff', 0.4, 0, '#ffc870', 2.2), item.x, 5.88, item.z - 1.3);
      break;
    }
    case 'car': g.add(carMesh(item.x, item.z, (item.rot ?? 0) * Math.PI / 2, ['#8a1c1c', '#2a4a7a', '#d8d8d0', '#1c1c20', '#5a6a3a'][Math.abs(Math.round(item.x + item.z)) % 5])); break;
    case 'hearse': g.add(carMesh(item.x, item.z, (item.rot ?? 0) * Math.PI / 2, '#0c0c0e', true)); break;
    default: add(g, B(item.w, 0.8, item.d), std('#c8c8c8', 0.6), item.x, 0.4, item.z, r);
  }
  void floor; void low;
}

function ambulanceMesh(x: number, z: number, heading: number) {
  const group = new THREE.Group();
  group.position.set(x, 0, z); group.rotation.y = heading;
  const body = std('#f4f4f0', 0.35, 0.1), red = std('#d01e1e', 0.4);
  add(group, B(2.3, 2.3, 4.2), body, 0, 1.55, -0.6);
  add(group, B(2.2, 1.5, 1.6), body, 0, 1.15, 2.2);
  add(group, B(2.32, 0.28, 4.22), red, 0, 1.25, -0.6);
  add(group, B(2.0, 0.6, 0.05), std('#1a2a3a', 0.05, 0.4), 0, 1.6, 3.02);
  for (const sx of [-1, 1]) for (const sz of [-1.6, 2.2]) add(group, C(0.42, 0.42, 0.3, 14), DARK(), sx * 1.05, 0.42, sz).rotation.z = Math.PI / 2;
  const cross = canvas(128, 128, ctx => { ctx.fillStyle = '#f4f4f0'; ctx.fillRect(0, 0, 128, 128); ctx.fillStyle = '#d01e1e'; ctx.fillRect(48, 16, 32, 96); ctx.fillRect(16, 48, 96, 32); });
  for (const sx of [-1, 1]) add(group, new THREE.PlaneGeometry(1.1, 1.1), new THREE.MeshStandardMaterial({ map: cross }), sx * 1.16, 1.9, -0.6, sx * Math.PI / 2);
  const lightL = add(group, B(0.5, 0.16, 0.22), std('#ff2020', 0.3, 0, '#ff0000', 2), -0.6, 2.78, 0.9);
  const lightR = add(group, B(0.5, 0.16, 0.22), std('#2060ff', 0.3, 0, '#0040ff', 2), 0.6, 2.78, 0.9);
  group.userData.lights = [lightL, lightR];
  return group;
}

// ---------------------------------------------------------------- people
function injure(person: Person, list: string[] = [], shadows = false) {
  const p = person.parts;
  for (const kind of list) {
    if (kind === 'head') {
      const band = add(p.head, new THREE.TorusGeometry(0.115, 0.03, 8, 20), std('#f4f4f0', 0.9), 0, 0.07, 0);
      band.rotation.x = Math.PI / 2;
      add(p.head, new THREE.SphereGeometry(0.03, 8, 6), BLOOD(), 0.06, 0.1, 0.09);
    } else if (kind === 'eye') {
      add(p.head, new THREE.SphereGeometry(0.04, 10, 8), std('#5a2a5a', 0.6), 0.045, 0.02, 0.1).scale.set(1, 0.8, 0.5);
      const rig = person.rig as unknown as { handL?: THREE.Object3D };
      if (rig.handL) add(rig.handL, B(0.14, 0.04, 0.12), std('#4aa04a', 0.7), 0, -0.05, 0.04);
    } else if (kind === 'brow') {
      const hook = add(p.head, new THREE.TorusGeometry(0.02, 0.003, 4, 10, Math.PI * 1.4), STEEL(), 0.05, 0.07, 0.11);
      hook.rotation.y = 0.3;
      add(p.head, B(0.01, 0.06, 0.005), BLOOD(), 0.05, 0.02, 0.112);
    } else if (kind === 'arm') {
      add(p.foreL, C(0.05, 0.05, 0.26, 10), std('#f2f2ee', 0.9), 0, -0.13, 0);
      add(p.torso, B(0.06, 0.4, 0.02), std('#3a6aa8', 0.9), 0.06, 0.3, 0.12).rotation.z = -0.6;
    } else if (kind === 'leg') {
      add(p.shinR, C(0.065, 0.06, 0.36, 10), std('#f2f2ee', 0.9), 0, -0.2, 0);
      add(p.shinR, B(0.1, 0.12, 0.02), BLOOD(), 0, -0.15, 0.06);
    } else if (kind === 'blood') {
      const s = BLOOD();
      add(p.torso, new THREE.CircleGeometry(0.07, 9), s, 0.04, 0.32, 0.135).scale.set(1, 1.4, 1);
      add(p.torso, new THREE.CircleGeometry(0.04, 7), s, -0.06, 0.2, 0.13);
    } else if (kind === 'tube') {
      add(p.head, C(0.045, 0.03, 0.06, 10), new THREE.MeshStandardMaterial({ color: '#bfe6d0', transparent: true, opacity: 0.7 }), 0, -0.04, 0.11).rotation.x = Math.PI / 2;
    }
  }
  void shadows;
}
function ivPole(parent: THREE.Object3D, x: number, z: number) {
  const g = new THREE.Group(); g.position.set(x, 0, z); parent.add(g);
  add(g, C(0.015, 0.015, 1.9, 6), STEEL(), 0, 0.95, 0);
  for (let i = 0; i < 4; i++) add(g, B(0.3, 0.02, 0.02), STEEL(), 0, 0.05, 0, i * Math.PI / 4);
  add(g, B(0.12, 0.2, 0.04), new THREE.MeshStandardMaterial({ color: '#e8f4ff', transparent: true, opacity: 0.75 }), 0, 1.75, 0);
  return g;
}

const SITS = new Set(['sit']);
function makePerson(look: Look, pose: string, opts: { seat?: boolean; lying?: boolean; mood?: string; injury?: string[] }) {
  const person = createPerson(look, false);
  const seated = Boolean(opts.seat) || SITS.has(pose);
  setPose(person, opts.lying ? 'lie' : pose, opts.lying ? false : seated);
  if (opts.mood) setMood(person, opts.mood);
  injure(person, opts.injury);
  addBlobShadow(person, 0.8);
  return person;
}

const CROWD_LOOKS: Look[] = [
  { skin: '#e8c0a0', age: 'old', body: 'f', hairStyle: 'curly', hairColor: '#d8d0e0', top: 'sweater', topColor: '#3a6aa8', bottom: 'pants', bottomColor: '#2a2a30' },
  { skin: '#c48f69', age: 'adult', body: 'm', hairStyle: 'cap', hairColor: '#1a1210', top: 'shirt', topColor: '#d8a040', bottom: 'jeans', bottomColor: '#24304a' },
  { skin: '#8d5a3c', age: 'adult', body: 'f', hairStyle: 'long', hairColor: '#120d0b', top: 'jacket', topColor: '#d43a6a', bottom: 'jeans', bottomColor: '#1f2840', extras: ['earrings'] },
  { skin: '#f0d0b4', age: 'old', body: 'm', hairStyle: 'bald', hairColor: '#999', top: 'jacket', topColor: '#5a4632', bottom: 'pants', bottomColor: '#2a2a2a', extras: ['glasses'] },
  { skin: '#b9825c', age: 'young', body: 'm', hairStyle: 'short', hairColor: '#2a1a12', top: 'hoodie', topColor: '#4a6a3a', bottom: 'jeans', bottomColor: '#121214' },
  { skin: '#dcae88', age: 'adult', body: 'f', hairStyle: 'ponytail', hairColor: '#6a2a18', top: 'sweater', topColor: '#8a3a8a', bottom: 'pants', bottomColor: '#1a1a20' },
  { skin: '#a8724e', age: 'teen', body: 'f', hairStyle: 'braids', hairColor: '#120d0b', top: 'tshirt', topColor: '#f0c040', bottom: 'jeans', bottomColor: '#24304a' },
  { skin: '#e2b896', age: 'elderly', body: 'm', hairStyle: 'short', hairColor: '#e8e8e8', top: 'coat', topColor: '#4a4a3a', bottom: 'pants', bottomColor: '#2a2a2a', extras: ['mustache'] },
];
const STAFF: Record<string, Look> = {
  scrubs: { skin: '#c99468', age: 'adult', body: 'f', hairStyle: 'bun', hairColor: '#2a1a12', top: 'scrubs', topColor: '#2f6fb0', bottom: 'pants', bottomColor: '#2f6fb0' },
  coat: { skin: '#e2b896', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#3a2a20', top: 'coat', topColor: '#f4f6f6', bottom: 'pants', bottomColor: '#2c3a4a', extras: ['glasses'] },
  surgeon: { skin: '#e8c0a0', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#1a1210', top: 'scrubs', topColor: '#2e7d6e', bottom: 'pants', bottomColor: '#2e7d6e' },
  paramedic: { skin: '#b9825c', age: 'adult', body: 'm', hairStyle: 'buzz', hairColor: '#1a1210', top: 'jacket', topColor: '#e8601e', bottom: 'pants', bottomColor: '#1e2a3a' },
};
const GOWN_LOOK: Look = { skin: '#d7a982', age: 'old', body: 'm', hairStyle: 'short', hairColor: '#bbbbbb', top: 'shirt', topColor: '#b9d2e2', bottom: 'pants', bottomColor: '#b9d2e2' };

// A lying person goes onto the nearest bed, along it.
function bedFor(floor: number, x: number, z: number) {
  let best: Item | null = null, d = 1.8;
  for (const item of (FURNITURE[floor] ?? []) as Item[]) {
    if (!['bed', 'trauma', 'icubed', 'gurney', 'ortable', 'autopsy', 'ct', 'delivery'].includes(item.type)) continue;
    const k = Math.hypot(item.x - x, item.z - z);
    if (k < d) { d = k; best = item; }
  }
  return best;
}
function laydown(person: Person, floor: number, x: number, z: number, heading: number) {
  const bed = bedFor(floor, x, z);
  if (!bed) { person.root.position.set(x, 0.05, z); person.root.rotation.y = heading; return { x, z, heading }; }
  const along = (bed.rot ?? 0) % 2 === 0 ? 0 : Math.PI / 2;
  // Keep the head on the pillow side (the pillow is at -len/2 in bed space).
  const dir = along + (bed.rot === 2 || bed.rot === 3 ? Math.PI : 0) + Math.PI;
  const h = bed.type === 'gurney' ? 0.88 : bed.type === 'ortable' ? 0.98 : bed.type === 'autopsy' ? 0.92 : bed.type === 'ct' ? 0.9 : 0.7;
  const bx = bed.x - Math.sin(dir) * 0.85, bz = bed.z - Math.cos(dir) * 0.85;
  person.root.position.set(bx, h - 0.1, bz);
  person.root.rotation.y = dir;
  return { x: bx, z: bz, heading: dir };
}
function sheetOver(parent: THREE.Object3D, floor: number, x: number, z: number) {
  const bed = bedFor(floor, x, z);
  const along = bed && (bed.rot ?? 0) % 2 === 1;
  const g = new THREE.Group(); g.position.set(bed?.x ?? x, (bed?.type === 'autopsy' ? 0.92 : 0.72), bed?.z ?? z); g.rotation.y = along ? Math.PI / 2 : 0; parent.add(g);
  add(g, new THREE.CapsuleGeometry(0.2, 1.4, 4, 10), SHEET(), 0, 0.12, 0).rotation.x = Math.PI / 2;
  add(g, new THREE.SphereGeometry(0.15, 10, 8), SHEET(), 0, 0.14, -0.86);
  add(g, B(0.05, 0.08, 0.005), std('#e8d080', 0.7), 0.1, 0.1, 0.96);
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
const PALETTE: Record<number, { band: string; paint: string; rail: string; floor: [string, string] }> = {
  0: { band: '#6a7a6a', paint: '#c8c8b4', rail: '#4a4a3a', floor: ['#8a8c80', '#4a4a40'] },
  1: { band: '#3a8a8a', paint: '#eef0ea', rail: '#e8e8e0', floor: ['#c9d3cf', '#5a7a7a'] },
  2: { band: '#3a6aa0', paint: '#eef1f4', rail: '#f0f0f0', floor: ['#cdd2da', '#4a5a7a'] },
  3: { band: '#a0784a', paint: '#f3efe6', rail: '#f4f0e6', floor: ['#d6cfc2', '#7a6a50'] },
};
function buildFloor(id: number, low: boolean, glowMats: THREE.MeshStandardMaterial[], doors: DoorRig[], lift: Hospital['lift'], flicks: { floor: number; x: number; z: number; mat: THREE.MeshStandardMaterial }[]) {
  const group = new THREE.Group();
  const info = FLOORS.find(f => f.id === id)!;
  group.position.y = info.y;
  const pal = PALETTE[id];
  const inside = { minX: -40, maxX: 40, minZ: -40, maxZ: id === 0 ? -2 : 32 };
  const w = inside.maxX - inside.minX, d = inside.maxZ - inside.minZ;
  const tex = vinyl(pal.floor[0], pal.floor[1], 40 + id);
  tex.repeat.set(w / 4, d / 4);
  const floorMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.22, metalness: 0.05, envMapIntensity: 1.4 });
  const ground = add(group, new THREE.PlaneGeometry(w, d), floorMat, 0, 0, (inside.minZ + inside.maxZ) / 2);
  ground.rotation.x = -Math.PI / 2;
  ground.position.x = 0;
  ground.receiveShadow = true;
  // Ceiling (seen from below only) and the fluorescent panels.
  const ceil = ceilingTexture(); ceil.repeat.set(w / 1.2, d / 1.2);
  const ceiling = add(group, new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ map: ceil, roughness: 0.9 }), 0, CEILING, (inside.minZ + inside.maxZ) / 2);
  ceiling.rotation.x = Math.PI / 2;
  for (const sector of SECTORS.filter(s => s.floor === id)) {
    if (sector.id === 'calle' || sector.id === 'bahia') continue;
    const lamp = std('#ffffff', 0.4, 0, sector.light, sector.sound === 'morgue' ? 1.1 : 1.5);
    if (sector.sound === 'morgue' || sector.sound === 'basement') glowMats.push(lamp);
    for (let x = sector.x0 + 2.5; x < sector.x1 - 1; x += 4.5) for (let z = sector.z0 + 2.5; z < sector.z1 - 1; z += 4.5) {
      // One panel in six is dying: it flickers, and some hang from a cable.
      const k = Math.abs(Math.round(x * 7 + z * 13 + id * 5));
      if (k % 6 === 0) {
        const mat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.4, emissive: sector.light, emissiveIntensity: 1.5 });
        mat.userData.flick = k % 97;
        glowMats.push(mat);
        const hang = k % 4 === 0;
        const panel = add(group, B(1.2, 0.04, 0.6), mat, x, CEILING - (hang ? 0.28 : 0.03), z);
        if (hang) { panel.rotation.z = 0.35; add(group, C(0.006, 0.006, 0.3, 4), DARK(), x + 0.55, CEILING - 0.12, z); }
        flicks.push({ floor: id, x, z, mat });
      } else if (k % 23 === 1) {
        // A missing ceiling tile and the wires behind it.
        add(group, B(1.2, 0.01, 1.2), std('#0a0a0a', 0.95), x, CEILING - 0.01, z);
        for (let w = 0; w < 3; w++) add(group, C(0.008, 0.008, 0.7 + w * 0.2, 4), std(['#c81e1e', '#2a2a2a', '#2a6ac8'][w], 0.6), x - 0.3 + w * 0.3, CEILING - 0.4 - w * 0.1, z).rotation.z = 0.2 * (w - 1);
      } else add(group, B(1.2, 0.04, 0.6), lamp, x, CEILING - 0.03, z);
    }
  }
  // Walls: a coloured band, the handrail and paint, or glass.
  const wallMat = new THREE.MeshStandardMaterial({ map: wallTexture(pal.band, pal.paint, pal.rail), roughness: 0.75 });
  const glass = new THREE.MeshPhysicalMaterial({ color: '#d6eef4', transparent: true, opacity: 0.16, roughness: 0.04, metalness: 0, depthWrite: false });
  for (const seg of WALLS[id] as (number | string)[][]) {
    const [x0, z0, x1, z1] = seg as number[];
    const len = Math.hypot(x1 - x0, z1 - z0);
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const ry = x0 === x1 ? Math.PI / 2 : 0;
    if (seg[4] === 'glass') {
      add(group, B(len, CEILING - 1, 0.04), glass, cx, (CEILING - 1) / 2 + 1, cz, ry);
      add(group, B(len, 1, WALL), wallMat, cx, 0.5, cz, ry);
      for (let k = 0; k <= len; k += 2.5) add(group, B(0.06, CEILING - 1, 0.08), STEEL(), x0 === x1 ? x0 : x0 + k, (CEILING - 1) / 2 + 1, x0 === x1 ? z0 + k : z0);
      continue;
    }
    add(group, B(len + WALL, CEILING, WALL), wallMat, cx, CEILING / 2, cz, ry);
  }
  // Night windows on the outer walls upstairs.
  if (id >= 2) {
    const winMat = new THREE.MeshStandardMaterial({ map: windowTexture(id * 31), emissive: '#ffffff', emissiveMap: windowTexture(id * 31), emissiveIntensity: 0.55 });
    for (let x = -34; x <= 34; x += 8) { add(group, new THREE.PlaneGeometry(2.4, 1.6), winMat, x, 1.9, 31.82, Math.PI); add(group, new THREE.PlaneGeometry(2.4, 1.6), winMat, x, 1.9, -39.82, 0); }
    for (let z = -30; z <= 26; z += 8) { add(group, new THREE.PlaneGeometry(2.4, 1.6), winMat, -39.82, 1.9, z, Math.PI / 2); add(group, new THREE.PlaneGeometry(2.4, 1.6), winMat, 39.82, 1.9, z, -Math.PI / 2); }
  }
  // Doors.
  for (const door of DOORS[id] ?? []) {
    const rig: DoorRig = { floor: id, x: door.x, z: door.z, leaves: [], k: 0 };
    const half = door.w / 2;
    const along = door.axis === 'x';
    if (door.kind === 'slide') {
      const leafMat = new THREE.MeshPhysicalMaterial({ color: '#cfe8f0', transparent: true, opacity: 0.32, roughness: 0.05, depthWrite: false });
      for (const s of [-1, 1]) {
        const leaf = add(group, B(half, 2.6, 0.06), leafMat, door.x + (along ? s * half / 2 : 0), 1.3, door.z + (along ? 0 : s * half / 2), along ? 0 : Math.PI / 2);
        const base = leaf.position.clone();
        rig.leaves.push({ mesh: leaf, open: k => { if (along) leaf.position.x = base.x + s * k * half * 0.95; else leaf.position.z = base.z + s * k * half * 0.95; } });
      }
      add(group, B(along ? door.w : 0.3, 1, along ? 0.3 : door.w), wallMat, door.x, CEILING - 0.5, door.z);
    } else {
      const leafMat = std('#d8dcd8', 0.5);
      for (const s of [-1, 1]) {
        const hinge = new THREE.Group();
        hinge.position.set(door.x + (along ? s * half : 0), 0, door.z + (along ? 0 : s * half));
        group.add(hinge);
        const leaf = add(hinge, B(half - 0.05, 2.2, 0.05), leafMat, along ? -s * (half / 2) : 0, 1.1, along ? 0 : -s * (half / 2), along ? 0 : Math.PI / 2);
        add(hinge, B(0.3, 0.3, 0.06), new THREE.MeshPhysicalMaterial({ color: '#cfe8f0', transparent: true, opacity: 0.4 }), leaf.position.x, 1.6, leaf.position.z, along ? 0 : Math.PI / 2);
        rig.leaves.push({ mesh: hinge, open: k => { hinge.rotation.y = s * k * 1.35 * (along ? 1 : 1); } });
      }
      add(group, B(along ? door.w : 0.3, CEILING - 2.3, along ? 0.3 : door.w), wallMat, door.x, (CEILING + 2.3) / 2, door.z);
    }
    if (door.label) {
      const red = /TRAUMA|MORGUE|AMBULANCIAS/.test(door.label);
      sign(group, door.label, door.x, 2.55, door.z + (along ? 0.17 : 0), along ? 0 : Math.PI / 2, Math.min(2.4, door.w * 0.6), red ? '#a01818' : '#1d5fa8');
    }
    doors.push(rig);
  }
  // The elevator: steel doors in the north wall, the stairs next to it.
  const shaft = std('#9aa4ac', 0.25, 0.85);
  add(group, B(3.2, CEILING, 0.2), std('#4a5058', 0.4, 0.5), ELEVATOR.x, CEILING / 2, ELEVATOR.wallZ + 0.25);
  const left = add(group, B(0.62, 2.3, 0.06), shaft, ELEVATOR.x - 0.31, 1.15, ELEVATOR.wallZ + 0.38);
  const right = add(group, B(0.62, 2.3, 0.06), shaft, ELEVATOR.x + 0.31, 1.15, ELEVATOR.wallZ + 0.38);
  lift[id] = { left, right };
  const display = textTexture(`▲▼  ${id === 0 ? 'S' : id === 1 ? 'PB' : id - 1}`, '#101010', '#ff8a3a', 256, 64, 'bold 40px monospace');
  add(group, new THREE.PlaneGeometry(0.8, 0.2), new THREE.MeshBasicMaterial({ map: display, toneMapped: false }), ELEVATOR.x, 2.55, ELEVATOR.wallZ + 0.36);
  sign(group, 'ASCENSOR', ELEVATOR.x, 3.1, ELEVATOR.wallZ + 0.37, 0, 1.6, '#1d5fa8', '#ffffff', false);
  // Stairs: a flight going up and one going down behind a railing.
  const stepMat = std('#b8b8b0', 0.7);
  for (let i = 0; i < 10; i++) {
    add(group, B(2.6, 0.18, 0.7), stepMat, 6.6, 0.09 + i * 0.35, -33.6 - i * 0.62);
    add(group, B(2.6, 0.18, 0.7), stepMat, 3.4, -0.09 - i * 0.35, -33.6 - i * 0.62);
  }
  add(group, B(0.06, 1, 7), STEEL(), 5, 1, -36.6);
  sign(group, 'ESCALERAS', STAIRS.x, 2.7, -32.6, 0, 1.6, '#2a7a3a');
  // Sector names on the corridor side.
  if (id === 1) {
    sign(group, 'GUARDIA', 11, 2.9, -7.6, 0, 2.6, '#a01818');
    sign(group, 'RECEPCIÓN', 0, 3.0, 12.4, Math.PI, 2.6);
    sign(group, 'SALA DE ESPERA', -26, 3.15, 31.6, Math.PI, 3.2, '#2a5a3a');
    sign(group, 'TOME SU NÚMERO', 6.4, 2.2, 24.5, Math.PI, 1.4, '#d8301e');
  }
  if (id === 2) sign(group, 'ÁREA QUIRÚRGICA · SOLO PERSONAL', 20, 3.2, 3.7, Math.PI, 4.6, '#2e7d6e');
  if (id === 3) { sign(group, 'UCI · SILENCIO', 4.3, 3.0, 12, Math.PI / 2, 2.6, '#3a4a8a'); sign(group, 'ENFERMERÍA', -4, 3.1, 1.2, 0, 2.4, '#1d5fa8'); }
  if (id === 0) { sign(group, 'MORGUE →', 0, 2.7, -13.6, 0, 2.2, '#3a3a3a'); sign(group, 'PERSONAL AUTORIZADO', 24, 3.0, -13.6, Math.PI, 3, '#3a3a3a'); }
  // Floor decals: blood trails where the day went wrong.
  const blood = BLOOD();
  const trail = (pts: [number, number][], r = 0.18) => pts.forEach(([x, z], i) => { const m = add(group, new THREE.CircleGeometry(r * (0.6 + (i % 3) * 0.25), 9), blood, x, 0.011, z); m.rotation.x = -Math.PI / 2; });
  if (id === 1) trail([[38, 20], [36.4, 19.4], [34.8, 18.4], [33.6, 16.6], [32.6, 14.4], [32.2, 12], [32, 9.4], [31.6, 6.8]]);
  if (id === 0) trail([[-24, -9.6], [-25.4, -9.8], [-26.8, -10.4], [-28.6, -10.6], [-30.4, -10.2], [-32.2, -10.6], [-34, -11]], 0.22);
  // Furniture.
  if (id === 1) {
    trail([[30, -11.4], [26, -11.8], [22, -11.2], [18, -11.6], [14, -11.3], [10, -11.7], [6, -11.4], [2, -11.6], [-2, -11.2]], 0.15);
    trail([[-10.6, -11.2], [-11.2, -10.6], [-10.2, -10.9]], 0.4);
    trail([[20.6, 9.6], [21.4, 10.4], [22.6, 11.6], [23.4, 12.8]], 0.25);
  }
  if (id === 2) trail([[14, 2], [16, 1.6], [18, 2.2], [20, 1.8], [22, 2.3], [-24, 14], [-27, 16], [-30, 19]], 0.18);
  if (id === 3) trail([[-28, 20], [-26.6, 18.6], [-24.4, 17.2], [-22, 15.4], [-19, 13.6], [-16, 12.2], [12, 6], [14, 6.6]], 0.2);
  // Grime: dark stains on the floor that no mop gets out.
  const stain = new THREE.MeshStandardMaterial({ color: '#2e2a22', transparent: true, opacity: 0.28, depthWrite: false, roughness: 1 });
  const rand = random(900 + id);
  for (let i = 0; i < 26; i++) { const st = add(group, new THREE.CircleGeometry(0.5 + rand() * 1.4, 10), stain, inside.minX + 2 + rand() * (w - 4), 0.008, inside.minZ + 2 + rand() * (d - 4)); st.rotation.x = -Math.PI / 2; st.scale.set(1, 0.5 + rand(), 1); }
  for (const item of (FURNITURE[id] ?? []) as Item[]) buildItem(group, item, id, glowMats, low);
  return group;
}

// ---------------------------------------------------------------- outside
function buildExterior() {
  const g = new THREE.Group();
  const road = add(g, new THREE.PlaneGeometry(260, 40), std('#2a2c30', 0.85), 0, -0.02, 58);
  road.rotation.x = -Math.PI / 2;
  const walk = add(g, new THREE.PlaneGeometry(120, 14), std('#9a9890', 0.9), 9, 0.0, 39);
  walk.rotation.x = -Math.PI / 2;
  const bay = add(g, new THREE.PlaneGeometry(20, 30), std('#5a5a58', 0.8), 49, 0.0, 19);
  bay.rotation.x = -Math.PI / 2;
  for (let x = -60; x < 80; x += 6) add(g, B(3, 0.01, 0.2), bright('#f0f0e0'), x, 0.01, 56);
  // The hospital façade above and around the entrance, with its name.
  const facade = new THREE.MeshStandardMaterial({ color: '#d8d2c4', roughness: 0.85 });
  add(g, B(80.6, 24, 0.5), facade, 0, 12 + 3.7, 32.3).scale.set(1, 1, 1);
  add(g, B(36, 3.7, 0.5), facade, -22, 1.85, 32.3); add(g, B(36, 3.7, 0.5), facade, 22, 1.85, 32.3);
  add(g, B(0.5, 27.7, 72), facade, 40.3, 13.85 - 3.7 / 2 + 1.85, -4);
  const winMat = new THREE.MeshStandardMaterial({ map: windowTexture(77), emissive: '#ffffff', emissiveMap: windowTexture(78), emissiveIntensity: 0.4 });
  for (let row = 1; row < 4; row++) for (let x = -34; x <= 34; x += 8) add(g, new THREE.PlaneGeometry(2.6, 1.8), winMat, x, row * 7 + 2.2, 32.56);
  // The name: the whole of it fits on the board, «VIVO» is crossed out in red
  // spray with «MUERTO» painted over it, and the motto under it is the truth.
  const name = canvas(2048, 512, ctx => {
    ctx.fillStyle = '#ece6d6'; ctx.fillRect(0, 0, 2048, 512);
    const rand = random(41);
    for (let i = 0; i < 70; i++) { ctx.fillStyle = `rgba(70,50,30,${0.04 + rand() * 0.1})`; ctx.beginPath(); ctx.ellipse(rand() * 2048, rand() * 512, 20 + rand() * 120, 8 + rand() * 40, 0, 0, Math.PI * 2); ctx.fill(); }
    for (let i = 0; i < 9; i++) { const x = rand() * 2048; const gr = ctx.createLinearGradient(0, 0, 0, 512); gr.addColorStop(0, 'rgba(60,40,20,.35)'); gr.addColorStop(1, 'rgba(60,40,20,0)'); ctx.fillStyle = gr; ctx.fillRect(x, 0, 6 + rand() * 10, 512); }
    ctx.fillStyle = '#c81e1e'; ctx.fillRect(70, 150, 52, 170); ctx.fillRect(11, 209, 170, 52);
    ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
    ctx.font = 'bold 150px Georgia, serif';
    const main = 'HOSPITAL SAN CASI ';
    let size = 150;
    while (ctx.measureText(main + 'VIVO').width > 1780 && size > 60) { size -= 4; ctx.font = `bold ${size}px Georgia, serif`; }
    const x0 = 220, y = 250;
    ctx.fillStyle = '#18324a'; ctx.fillText(main, x0, y);
    const vx = x0 + ctx.measureText(main).width, vw = ctx.measureText('VIVO').width;
    ctx.fillStyle = '#5a6a7a'; ctx.fillText('VIVO', vx, y);
    // The spray: two crossing strokes, drips and the new word above.
    ctx.strokeStyle = '#b00d0d'; ctx.lineCap = 'round'; ctx.lineWidth = 22;
    ctx.beginPath(); ctx.moveTo(vx - 20, y - 40); ctx.lineTo(vx + vw + 20, y + 30); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(vx - 20, y + 30); ctx.lineTo(vx + vw + 20, y - 46); ctx.stroke();
    ctx.fillStyle = '#b00d0d';
    for (let i = 0; i < 9; i++) { const dx = vx + rand() * vw; ctx.fillRect(dx, y + 20, 7, 40 + rand() * 120); ctx.beginPath(); ctx.arc(dx + 3.5, y + 60 + rand() * 120, 7, 0, Math.PI * 2); ctx.fill(); }
    ctx.font = 'bold italic 120px "Arial Black", Impact, sans-serif'; ctx.save(); ctx.translate(vx + vw / 2, 70); ctx.rotate(-0.06); ctx.textAlign = 'center'; ctx.fillText('MUERTO', 0, 0); ctx.restore();
    for (let i = 0; i < 6; i++) { const dx = vx + vw / 2 - 180 + rand() * 360; ctx.fillRect(dx, 110, 6, 20 + rand() * 60); }
    ctx.textAlign = 'center'; ctx.fillStyle = '#18324a'; ctx.font = 'bold 54px Georgia, serif';
    ctx.fillText('ENTRADA DE PACIENTES  ·  SALIDA POR LA MORGUE', 1024, 430);
  });
  add(g, new THREE.PlaneGeometry(26, 6.5), new THREE.MeshStandardMaterial({ map: name, emissive: '#ffffff', emissiveMap: name, emissiveIntensity: 0.16 }), -2, 7.4, 32.58);
  // An LED board that has never moved off zero.
  const led = canvas(1024, 160, ctx => {
    ctx.fillStyle = '#060606'; ctx.fillRect(0, 0, 1024, 160);
    ctx.fillStyle = '#ff2a1a'; ctx.font = 'bold 56px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('DÍAS SIN PERDER UN PACIENTE: 0', 512, 82);
  });
  add(g, new THREE.PlaneGeometry(7.6, 1.2), new THREE.MeshBasicMaterial({ map: led, toneMapped: false }), 14.5, 4.4, 32.6);
  const urg = textTexture('URGENCIAS', '#c81e1e', '#ffffff', 512, 128);
  add(g, new THREE.PlaneGeometry(5, 1.25), new THREE.MeshStandardMaterial({ map: urg, emissive: '#ffffff', emissiveMap: urg, emissiveIntensity: 0.9 }), 40.58, 4.4, 20, Math.PI / 2);
  add(g, B(8, 0.25, 6), std('#c8c8c0', 0.6), 44, 3.9, 20);
  // The city across the street.
  for (let i = 0; i < 12; i++) {
    const h = 14 + ((i * 37) % 24), x = -70 + i * 13;
    const tex = windowTexture(100 + i);
    add(g, B(11, h, 10), new THREE.MeshStandardMaterial({ map: tex, emissive: '#ffffff', emissiveMap: tex, emissiveIntensity: 0.35 }), x, h / 2, 86);
  }
  // Parked along the curb: a hearse waiting with the engine running, and cars.
  g.add(carMesh(8, 49, Math.PI / 2, '#0c0c0e', true));
  for (const [x, color] of [[-34, '#8a1c1c'], [-26, '#2a4a7a'], [-17, '#d8d8d0'], [21, '#5a6a3a'], [29, '#1c1c20']] as const) g.add(carMesh(x, 49, -Math.PI / 2, color));
  const hearse = textTexture('FUNERARIA EL ÚLTIMO SUSPIRO · 24 H', '#0c0c0e', '#c8a040', 1024, 96, 'bold 44px Georgia, serif');
  add(g, new THREE.PlaneGeometry(4.2, 0.4), new THREE.MeshBasicMaterial({ map: hearse, toneMapped: false }), 8, 1.05, 48.08, Math.PI);
  return g;
}

// ---------------------------------------------------------------- the whole hospital
export function buildHospital(scene: THREE.Scene, opts: { low: boolean; shadows: boolean; cries?: Cry[]; onCry?: (cry: Cry | null, volume: number) => void }): Hospital {
  const floors: Record<number, THREE.Group> = {};
  const doors: DoorRig[] = [];
  const glowMats: THREE.MeshStandardMaterial[] = [];
  const lift: Hospital['lift'] = {};
  const flicks: { floor: number; x: number; z: number; mat: THREE.MeshStandardMaterial }[] = [];
  for (const f of FLOORS) {
    const group = buildFloor(f.id, opts.low, glowMats, doors, lift, flicks);
    const moving = [...doors.filter(d => d.floor === f.id).flatMap(d => d.leaves.map(l => l.mesh)), lift[f.id].left, lift[f.id].right];
    batchStatic(group, moving);
    floors[f.id] = group;
    scene.add(group);
  }
  const exterior = buildExterior();
  scene.add(exterior);
  // A few real lights per floor: warm in the cafeteria, red in trauma, cold
  // in the morgue. The number stays the same on every floor.
  const pulses: { light: THREE.PointLight; base: number; speed: number }[] = [];
  const lights: Record<number, [string, number, number, number, number][]> = {
    0: [['#9ad8ff', 24, -27, 0.8, 0], ['#d8d0a0', -20, -9, 1.0, 0], ['#d8d0a0', -24, -27, 0.9, 0]],
    1: [['#ff3030', 32, 0, 1.2, 2.2], ['#ffd8a0', -24, -28, 1.1, 0], ['#ff3030', 33, 22, 0.8, 1.4]],
    2: [['#d8fff0', 22, 18, 1.4, 0], ['#ffd8a0', 24, -30, 1.0, 0], ['#a8c8ff', -28, 6, 0.9, 0]],
    3: [['#9ab8ff', 20, 12, 1.2, 0], ['#ffe0b0', -18, -30, 1.0, 0], ['#ffffff', -4, 6, 0.9, 0]],
  };
  for (const f of FLOORS) for (const [color, x, z, intensity, speed] of lights[f.id]) {
    const light = new THREE.PointLight(color, intensity * 14, 18, 1.6);
    light.position.set(x, CEILING - 0.6, z);
    floors[f.id].add(light);
    if (speed) pulses.push({ light, base: intensity * 14, speed });
  }
  const flickLights: { light: THREE.PointLight; mat: THREE.MeshStandardMaterial }[] = [];
  for (const f of FLOORS) {
    const first = flicks.find(k => k.floor === f.id && Math.abs(k.x) < 30);
    if (!first) continue;
    const light = new THREE.PointLight('#e8f0ff', 3, 10, 2);
    light.position.set(first.x, CEILING - 0.5, first.z);
    floors[f.id].add(light);
    flickLights.push({ light, mat: first.mat });
  }

  // People at the circles.
  const npcs: Npc[] = [];
  const puffTex = puff();
  for (const s of SCENES) {
    const group = floors[s.floor];
    const people = [{ ...s.npc, pose: s.pose, mood: s.mood, look: s.look, injury: s.injury, smoke: s.smoke, mop: s.mop, main: true },
      ...(s.extras ?? []).map(e => ({ ...e, main: false }))];
    for (const p of people) {
      const anyP = p as typeof p & { seat?: boolean; lying?: boolean; sheet?: boolean; gurney?: boolean; carryBox?: boolean; surgeon?: boolean; smoke?: boolean; mop?: boolean };
      if (anyP.sheet) { sheetOver(group, s.floor, p.x, p.z); continue; }
      const person = makePerson(p.look as Look, p.pose, { seat: anyP.seat, lying: anyP.lying || p.pose === 'lie', mood: p.mood, injury: p.injury });
      let at = { x: p.x, z: p.z, heading: p.heading };
      if (anyP.gurney) {
        const gur = bedFrame(group, { type: 'gurney', x: p.x, z: p.z, w: 0.66, d: 2, rot: 0 }, 'gurney');
        void gur;
        person.root.position.set(p.x, 0.78, p.z - 0.85); person.root.rotation.y = 0;
        at = { x: p.x, z: p.z - 0.85, heading: 0 };
      } else if (anyP.lying || p.pose === 'lie' || p.pose === 'sleep' && anyP.lying) at = laydown(person, s.floor, p.x, p.z, p.heading);
      else { person.root.position.set(p.x, 0, p.z); person.root.rotation.y = p.heading; }
      if (s.id === 'descanso' && p.main) { setPose(person, 'lie', false); person.root.position.set(p.x - 0.8, 0.5, p.z); person.root.rotation.y = Math.PI / 2; }
      if (anyP.mop) { const rig = person.rig as unknown as { handR?: THREE.Object3D }; if (rig.handR) add(rig.handR, C(0.015, 0.015, 1.4, 6), std('#c8a060', 0.7), 0, -0.2, 0.05); add(group, C(0.25, 0.22, 0.35, 12), std('#f0c020', 0.6), p.x + 0.6, 0.18, p.z + 0.4); }
      if (anyP.carryBox) { const rig = person.rig as unknown as { handL?: THREE.Object3D }; if (rig.handL) add(rig.handL, B(0.4, 0.3, 0.3), std('#c8a070', 0.8), 0, -0.15, 0.1); }
      if (p.injury?.includes('iv')) ivPole(group, at.x + 0.6, at.z + 0.2);
      if (anyP.seat && !anyP.lying) {
        const back = new THREE.Vector3(0, 0, -0.12).applyAxisAngle(new THREE.Vector3(0, 1, 0), p.heading);
        add(group, B(0.5, 0.06, 0.46), std('#2d6aa0', 0.55), p.x + back.x, 0.45, p.z + back.z);
      }
      group.add(person.root);
      const npc: Npc = { person, floor: s.floor, scene: s.id, main: p.main, x: at.x, z: at.z, heading: at.heading, baseMood: p.mood ?? 'neutral', lying: anyP.lying || p.pose === 'lie', seated: anyP.seat || p.pose === 'sit', body: (p.look as Look).body, seed: npcs.length * 31 + 7 };
      if (anyP.smoke) {
        const rig = person.rig as unknown as { handR: THREE.Object3D };
        const tip = add(rig.handR, new THREE.SphereGeometry(0.008, 6, 4), bright('#ff5a1a'), 0.02, -0.075, 0.09);
        add(rig.handR, C(0.005, 0.005, 0.08, 6), std('#f4f0e6', 0.8), 0.02, -0.075, 0.05).rotation.x = Math.PI / 2;
        const puffs = Array.from({ length: 6 }, () => { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: puffTex, transparent: true, depthWrite: false, opacity: 0 })); group.add(sp); return sp; });
        npc.smoker = { tip, puffs, phase: Math.random() * 9 };
      }
      npcs.push(npc);
    }
  }
  // Background people.
  for (const [floorId, list] of Object.entries(CROWD)) {
    const floor = Number(floorId);
    list.forEach((c, i) => {
      if (opts.low && i % 3 === 2 && !c.lying) return;
      if (c.sheet) { sheetOver(floors[floor], floor, c.x, c.z); return; }
      const look = c.look && STAFF[c.look] ? { ...STAFF[c.look], seed: floor * 100 + i }
        : c.lying || c.injury?.includes('gown') ? { ...GOWN_LOOK, seed: floor * 100 + i, body: i % 2 ? 'f' : 'm', hairStyle: i % 2 ? 'curly' : 'short', skin: CROWD_LOOKS[i % CROWD_LOOKS.length].skin }
          : { ...CROWD_LOOKS[(i + floor) % CROWD_LOOKS.length], seed: floor * 100 + i * 7 };
      const person = makePerson(look as Look, c.pose, { seat: c.seat, lying: c.lying, mood: c.mood, injury: c.injury });
      let at = { x: c.x, z: c.z, heading: c.heading };
      if (c.lying) at = laydown(person, floor, c.x, c.z, c.heading); else { person.root.position.set(c.x, 0, c.z); person.root.rotation.y = c.heading; }
      if (c.injury?.includes('iv')) ivPole(floors[floor], at.x + 0.6, at.z + 0.3);
      floors[floor].add(person.root);
      npcs.push({ person, floor, x: at.x, z: at.z, heading: at.heading, baseMood: c.mood ?? 'neutral', lying: c.lying, seated: c.seat || c.pose === 'sit', talk: `${floor}-${i}`, body: (look as Look).body, seed: floor * 100 + i });
    });
  }
  // People who walk, run and push things.
  const movers: Mover[] = [];
  for (const [floorId, list] of Object.entries(WALKERS)) {
    const floor = Number(floorId);
    list.forEach((walker, i) => {
      if (opts.low && i % 3 === 2) return;
      const person = makePerson(walker.look as Look, walker.carry === 'tray' ? 'carry' : walker.carry === 'mop' ? 'sweep' : 'stand', { injury: walker.injury });
      floors[floor].add(person.root);
      const mover: Mover = { walker, person, floor, offset: walker.delay ?? i * 13.7, x: 0, z: 0, body: (walker.look as Look).body, seed: floor * 50 + i * 3 };
      if (walker.carry === 'stretcher') {
        const holder = new THREE.Group();
        bedFrame(holder, { type: 'gurney', x: 0, z: 0, w: 0.66, d: 2, rot: 0 }, 'gurney');
        if (walker.sheet) sheetOver(holder, -1, 0, 0);
        else {
          const rider = makePerson({ ...GOWN_LOOK, seed: 700 + i }, 'lie', { lying: true, mood: walker.patient?.mood, injury: walker.patient?.injury });
          rider.root.position.set(0, 0.78, -0.85);
          holder.add(rider.root);
          mover.rider = rider;
          add(holder, B(0.5, 0.01, 0.6), BLOOD(), 0.05, 0.92, 0.3);
        }
        floors[floor].add(holder);
        mover.carry = holder;
      } else if (walker.carry === 'cart') {
        const cart = new THREE.Group(); add(cart, B(0.8, 0.9, 0.55), std('#2d6aa0', 0.5), 0, 0.5, 0); add(cart, B(0.7, 0.14, 0.45), WHITE(), 0, 1.02, 0);
        floors[floor].add(cart); mover.carry = cart;
      } else if (walker.carry === 'wheelchair') {
        const chair = new THREE.Group();
        for (const s of [-1, 1]) add(chair, C(0.3, 0.3, 0.04, 16), DARK(), s * 0.3, 0.3, 0).rotation.z = Math.PI / 2;
        add(chair, B(0.55, 0.06, 0.5), std('#2a2a2a', 0.6), 0, 0.5, 0); add(chair, B(0.55, 0.5, 0.05), std('#2a2a2a', 0.6), 0, 0.78, -0.25);
        const rider = makePerson({ ...CROWD_LOOKS[3], seed: 800 + i }, 'sit', { seat: true, injury: ['leg'] });
        rider.root.position.set(0, 0.05, 0.02); chair.add(rider.root); mover.rider = rider;
        floors[floor].add(chair); mover.carry = chair;
      } else if (walker.carry === 'iv') {
        const pole = ivPole(floors[floor], 0, 0); mover.carry = pole;
      } else if (walker.carry === 'mop') {
        const rig = person.rig as unknown as { handR?: THREE.Object3D };
        if (rig.handR) add(rig.handR, C(0.015, 0.015, 1.4, 6), std('#c8a060', 0.7), 0, -0.2, 0.05);
      } else if (walker.carry === 'flowers') {
        const rig = person.rig as unknown as { handL?: THREE.Object3D };
        if (rig.handL) for (let k = 0; k < 5; k++) add(rig.handL, new THREE.SphereGeometry(0.04, 6, 5), std(['#e8287a', '#ffd23f', '#ffffff'][k % 3], 0.6), Math.sin(k) * 0.05, 0.05 + (k % 2) * 0.04, 0.06 + Math.cos(k) * 0.04);
      }
      movers.push(mover);
    });
  }

  // White circles.
  const spots = SCENES.map(s => { const spot = buildSpot(s.id, s.floor, s.spot.x, s.spot.z); floors[s.floor].add(spot.group); return spot; });

  // The ambulance that arrives at the bay now and then.
  const arriving = ambulanceMesh(80, 50, -Math.PI / 2);
  exterior.add(arriving);
  let ambulanceAt = -100;
  const parked = exterior.children.length;
  void parked;

  // Speech bubbles for chatter near the player.
  const bubbles: { sprite: THREE.Sprite; until: number; npc: Npc | Mover }[] = [];
  let nextBubble = 3;
  function bubble(text: string, yell = false) {
    const tex = canvas(512, 128, ctx => {
      ctx.fillStyle = yell ? 'rgba(200,20,20,.96)' : 'rgba(255,255,255,.94)';
      ctx.beginPath(); ctx.roundRect(8, 8, 496, 92, 26); ctx.fill();
      ctx.beginPath(); ctx.moveTo(230, 98); ctx.lineTo(256, 124); ctx.lineTo(270, 98); ctx.fill();
      ctx.fillStyle = yell ? '#ffffff' : '#1a2230'; ctx.font = `${yell ? 800 : 600} ${text.length > 30 ? 24 : 30}px Arial, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(text.length > 44 ? text.slice(0, 43) + '…' : text, 256, 54);
    });
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: true, toneMapped: false }));
    sprite.scale.set(2.2, 0.55, 1);
    return sprite;
  }

  function say(who: Npc | Mover, text: string, seconds = 3.6, yell = false) {
    const old = bubbles.findIndex(b => b.npc === who);
    if (old >= 0) { const b = bubbles[old]; b.sprite.removeFromParent(); (b.sprite.material as THREE.SpriteMaterial).map?.dispose(); b.sprite.material.dispose(); bubbles.splice(old, 1); }
    const sprite = bubble(text, yell);
    floors[who.floor].add(sprite);
    bubbles.push({ sprite, until: clockNow + seconds, npc: who });
  }
  let clockNow = 0, nextCry = 6;
  const SCREAMS = ['¡AAAAAH!', '¡AAAY!', '¡SOCORRO!', '¡NOOO!', '¡AYUDA!'];

  const wp = new THREE.Vector3();
  let sceneMood: { id: string; mood: string } | null = null;
  function setSceneMood(id: string | null, mood: string | null) {
    sceneMood = id && mood ? { id, mood } : null;
    for (const npc of npcs) if (npc.scene) setMood(npc.person, sceneMood && npc.scene === sceneMood.id && npc.main ? sceneMood.mood : npc.baseMood);
  }

  function animate(t: number, dt: number, floor: number, px: number, pz: number) {
    clockNow = t;
    drawEcg(t);
    for (const p of pulses) p.light.intensity = p.base * (0.55 + 0.45 * Math.abs(Math.sin(t * p.speed)));
    glowMats.forEach((m, i) => {
      const phase = m.userData.flick as number | undefined;
      if (phase != null) {
        // Dying tubes: long buzzing stretches, sudden stutters, dark gaps.
        const slow = Math.sin(t * 0.7 + phase) + Math.sin(t * 0.31 + phase * 2);
        const fast = Math.sin(t * 31 + phase * 5) * Math.sin(t * 13.7 + phase);
        m.emissiveIntensity = slow < -1.1 ? 0.03 : slow < -0.4 ? (fast > 0 ? 1.2 : 0.05) : fast > 0.85 ? 0.15 : 1.1;
      } else if (Math.random() < 0.004) m.emissiveIntensity = 0.2; else m.emissiveIntensity += (1.1 + (i % 2) * 0.3 - m.emissiveIntensity) * 0.2;
    });
    for (const f of flickLights) f.light.intensity = f.mat.emissiveIntensity * 2.5;
    for (const spot of spots) {
      if (spot.floor !== floor) continue;
      spot.gem.position.y = 2.3 + Math.sin(t * 2 + spot.group.position.x) * 0.12;
      spot.gem.rotation.y += dt * 1.5;
      spot.ring.scale.setScalar(1 + Math.sin(t * 3) * 0.03);
    }
    // People who move.
    const nearDoor: { x: number; z: number }[] = [{ x: px, z: pz }];
    for (const m of movers) {
      if (m.floor !== floor) continue;
      const at = walkerAt(m.walker, t + m.offset);
      m.x = at.x; m.z = at.z; m.moving = at.moving; m.heading = at.heading;
      const run = m.walker.run;
      if (m.person.pose !== (run ? 'run' : m.walker.carry === 'tray' ? 'carry' : m.walker.carry === 'mop' ? 'sweep' : 'stand')) setPose(m.person, run ? 'run' : m.walker.carry === 'tray' ? 'carry' : m.walker.carry === 'mop' ? 'sweep' : 'stand', false);
      m.person.root.position.set(at.x, 0, at.z);
      m.person.root.rotation.y = at.heading;
      animatePerson(m.person, dt, at.moving ? m.walker.speed : 0, false);
      if (m.carry) {
        const ahead = m.walker.carry === 'stretcher' ? 1.35 : m.walker.carry === 'iv' ? 0.4 : 0.85;
        const side = m.walker.carry === 'iv' ? 0.35 : 0;
        m.carry.position.set(at.x + Math.sin(at.heading) * ahead + Math.cos(at.heading) * side, 0, at.z + Math.cos(at.heading) * ahead - Math.sin(at.heading) * side);
        m.carry.rotation.y = at.heading;
        if (m.rider) animatePerson(m.rider, dt, 0, false);
      }
      nearDoor.push({ x: at.x + Math.sin(at.heading) * 1.4, z: at.z + Math.cos(at.heading) * 1.4 });
    }
    // Somebody screams now and then: a runner who yells as they pass, or
    // someone in a bed or a chair who loses it. Near ones are heard in full.
    if (t > nextCry) {
      nextCry = t + (floor === 0 ? 18 : 7) + Math.random() * 9;
      const near = (n: { x: number; z: number }) => Math.hypot(n.x - px, n.z - pz);
      const runners = movers.filter(m => m.floor === floor && m.walker.scream && near(m) < 22);
      const scared = npcs.filter(n => n.floor === floor && !n.main && ['terror', 'pain', 'scared', 'furious'].includes(n.baseMood) && near(n) < 22);
      const pool: (Npc | Mover)[] = [...runners, ...runners, ...scared];
      if (pool.length) {
        const who = pool[Math.floor(Math.random() * pool.length)];
        const cries = opts.cries ?? [];
        const cry = cries.length && Math.random() < 0.6 ? cries[Math.floor(Math.random() * cries.length)] : null;
        say(who, cry ? cry.text : SCREAMS[Math.floor(Math.random() * SCREAMS.length)], 2.6, true);
        opts.onCry?.(cry, Math.max(0.15, 1 - near(who) / 24));
      }
    }
    // Doors open for anyone close.
    for (const door of doors) {
      if (door.floor !== floor) continue;
      const want = nearDoor.some(p => Math.hypot(p.x - door.x, p.z - door.z) < 3) ? 1 : 0;
      door.k += (want - door.k) * Math.min(1, dt * 5);
      for (const leaf of door.leaves) leaf.open(door.k);
    }
    // People who stay: breathe, look around, smoke.
    for (const npc of npcs) {
      if (npc.floor !== floor) continue;
      if (Math.abs(npc.x - px) > 30 || Math.abs(npc.z - pz) > 30) continue;
      animatePerson(npc.person, dt, 0, talking.has(npc.person));
      const smoker = npc.smoker;
      if (smoker) {
        smoker.phase += dt;
        smoker.tip.getWorldPosition(wp); floors[npc.floor].worldToLocal(wp);
        smoker.puffs.forEach((sprite, i) => {
          const age = (smoker.phase * 0.5 + i / smoker.puffs.length) % 1;
          if (age < 0.05) sprite.userData.from = wp.clone();
          const from = (sprite.userData.from as THREE.Vector3 | undefined) ?? wp;
          sprite.position.set(from.x + Math.sin(age * 6 + i) * 0.08, from.y + age * 1.1, from.z);
          sprite.scale.setScalar(0.1 + age * 0.6);
          (sprite.material as THREE.SpriteMaterial).opacity = (1 - age) * 0.4;
        });
      }
    }
    // The ambulance: every ~80 s it comes down the street into the bay.
    if (floor === 1) {
      if (t - ambulanceAt > 80) ambulanceAt = t;
      const k = t - ambulanceAt;
      let x = 90, z = 52, h = -Math.PI / 2;
      if (k < 7) { x = 90 - k * 6; z = 52; }
      else if (k < 11) { const u = (k - 7) / 4; x = 48 + (1 - u) * 0; z = 52 - u * 18; h = -Math.PI / 2 - u * Math.PI / 2; x = 48 - Math.sin(u * Math.PI / 2) * 0; }
      else if (k < 30) { x = 48; z = 34 - Math.min(1, (k - 11) / 3) * 18; h = Math.PI; }
      else if (k < 36) { const u = (k - 30) / 6; x = 48; z = 16 + u * 36; h = 0; }
      else { x = 48 - (k - 36) * 8; z = 52; h = -Math.PI / 2; }
      arriving.position.set(x, 0, z); arriving.rotation.y = h;
      const [a, b] = arriving.userData.lights as THREE.Mesh[];
      const on = Math.floor(t * 6) % 2 === 0;
      a.visible = on; b.visible = !on;
    }
    // Chatter bubbles.
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      const who = 'person' in b.npc ? b.npc.person : null;
      if (who) { who.root.getWorldPosition(wp); floors[floor].worldToLocal(wp); b.sprite.position.set(wp.x, wp.y + 2.25, wp.z); }
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

  return { floors, exterior, npcs, movers, spots, doors, lift, animate, setSceneMood, ambulance: () => { ambulanceAt = -1000; }, say };
}
