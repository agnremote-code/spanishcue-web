// El Gran Meridiano · the 3D casino: three floors, the Strip outside and
// everyone inside. Original procedural geometry and canvas textures only;
// people come from Noche abierta's people3d. Static furniture is merged by
// material so a floor costs a few hundred draw calls, not thousands.
import * as THREE from 'three';
import { addPalm, batchStatic, canvas, makeCar, placeVehicle, random } from '../noche-abierta/build3d';
import { addBlobShadow, animatePerson, createPerson, setMood, setPose, type Look, type Person } from '../noche-abierta/people3d';
import { CEILING, CROWD, ELEVATOR, FLOOR_H, FLOORS, FURNITURE, HEROINE, SCENES, WALL, WALLS, footprint } from './layout.mjs';

type Item = { type: string; x: number; z: number; w: number; d: number; rot?: number; solid?: boolean };
export type Smoker = { person: Person; puffs: THREE.Sprite[]; tip: THREE.Object3D; phase: number; cigar: boolean };
export type Npc = {
  person: Person; floor: number; scene?: string; x: number; z: number; y: number; heading: number;
  walk?: { axis: 'x' | 'z'; from: number; to: number; speed: number }; dir: number; smoker?: Smoker; main?: boolean;
};
export type Spot = { id: string; floor: number; group: THREE.Group; ring: THREE.Mesh; gem: THREE.Mesh; material: THREE.MeshBasicMaterial };
export type Doors = { floor: number; panels: { left: THREE.Mesh; right: THREE.Mesh; x: number }[]; open: number };
export type Casino = {
  floors: Record<number, THREE.Group>;
  exterior: THREE.Group;
  npcs: Npc[];
  spots: Spot[];
  elevatorMarkers: Record<number, THREE.Group>;
  doors: Doors[];
  heroine: Person;
  animate: (t: number, dt: number, floor: number) => void;
};

// People currently speaking in an open scene.
export const talking = new WeakSet<Person>();

// ---------------------------------------------------------------- materials

const cache = new Map<string, THREE.Material>();
function std(color: string, roughness = 0.6, metalness = 0, emissive?: string, intensity = 1): THREE.MeshStandardMaterial {
  const key = `s|${color}|${roughness}|${metalness}|${emissive}|${intensity}`;
  let m = cache.get(key) as THREE.MeshStandardMaterial | undefined;
  if (!m) {
    m = new THREE.MeshStandardMaterial({ color, roughness, metalness });
    if (emissive) { m.emissive.set(emissive); m.emissiveIntensity = intensity; }
    cache.set(key, m);
  }
  return m;
}
const gold = () => std('#c9a24a', 0.28, 0.85);
const blackGloss = () => std('#0d0c0e', 0.18, 0.4);
const felt = (color: string) => std(color, 0.95);
function bright(color: string, opacity = 1) {
  const key = `b|${color}|${opacity}`;
  let m = cache.get(key) as THREE.MeshBasicMaterial | undefined;
  if (!m) {
    m = new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity, toneMapped: false });
    cache.set(key, m);
  }
  return m;
}

function add(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x = 0, y = 0, z = 0, ry = 0) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.rotation.y = ry;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}
const B = (w: number, h: number, d: number) => new THREE.BoxGeometry(w, h, d);
const C = (rt: number, rb: number, h: number, seg = 20) => new THREE.CylinderGeometry(rt, rb, h, seg);

// ---------------------------------------------------------------- textures

function carpetTexture(base: string, a: string, b: string) {
  const t = canvas(256, 256, ctx => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, 256, 256);
    // A loud Las Vegas carpet: medallions, swirls and stars.
    for (const [cx, cy] of [[64, 64], [192, 192], [192, 64], [64, 192]]) {
      ctx.strokeStyle = a; ctx.lineWidth = 6;
      ctx.beginPath(); ctx.arc(cx, cy, 34, 0, Math.PI * 2); ctx.stroke();
      ctx.strokeStyle = b; ctx.lineWidth = 3;
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        ctx.beginPath(); ctx.arc(cx + Math.cos(angle) * 34, cy + Math.sin(angle) * 34, 12, angle, angle + Math.PI); ctx.stroke();
      }
      ctx.fillStyle = a; ctx.beginPath(); ctx.arc(cx, cy, 9, 0, Math.PI * 2); ctx.fill();
    }
    ctx.strokeStyle = b; ctx.lineWidth = 2;
    for (let i = 0; i < 4; i++) {
      ctx.beginPath(); ctx.moveTo(128, i * 64 + 32 - 14); ctx.lineTo(142, i * 64 + 32); ctx.lineTo(128, i * 64 + 32 + 14); ctx.lineTo(114, i * 64 + 32); ctx.closePath(); ctx.stroke();
    }
  }, true);
  return t;
}

function marbleTexture(base = '#e9e4da', vein = 'rgba(90,80,70,.35)') {
  return canvas(512, 512, ctx => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, 512, 512);
    const r = random(9);
    ctx.strokeStyle = vein;
    for (let i = 0; i < 26; i++) {
      ctx.lineWidth = 0.6 + r() * 1.8;
      ctx.beginPath();
      let x = r() * 512, y = r() * 512;
      ctx.moveTo(x, y);
      for (let j = 0; j < 8; j++) { x += (r() - 0.3) * 70; y += (r() - 0.5) * 70; ctx.lineTo(x, y); }
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(160,130,60,.45)'; ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, 512, 512);
  }, true);
}

function woodTexture(base: string, line: string) {
  return canvas(256, 256, ctx => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, 256, 256);
    const r = random(3);
    for (let y = 0; y < 256; y += 32) {
      ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(0, y, 256, 1.5);
      for (let i = 0; i < 6; i++) {
        ctx.strokeStyle = line; ctx.globalAlpha = 0.25; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, y + 4 + r() * 24);
        ctx.bezierCurveTo(80, y + r() * 30, 170, y + r() * 30, 256, y + 4 + r() * 24); ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
  }, true);
}

function damaskTexture(base: string, ink: string) {
  return canvas(128, 256, ctx => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, 128, 256);
    ctx.fillStyle = ink;
    for (const [x, y] of [[64, 64], [0, 192], [128, 192]]) {
      ctx.beginPath(); ctx.ellipse(x, y, 18, 34, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(x, y - 44, 6, 10, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(x, y + 44, 6, 10, 0, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.fillRect(0, 230, 128, 26);
    ctx.fillStyle = 'rgba(201,162,74,.8)'; ctx.fillRect(0, 228, 128, 3);
  }, true);
}

function ceilingTexture(line: string, light: string) {
  const t = canvas(256, 256, ctx => {
    ctx.fillStyle = '#120c10'; ctx.fillRect(0, 0, 256, 256);
    ctx.strokeStyle = line; ctx.lineWidth = 6; ctx.strokeRect(8, 8, 240, 240);
    ctx.lineWidth = 2; ctx.strokeRect(28, 28, 200, 200);
    ctx.fillStyle = light;
    for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) {
      ctx.beginPath(); ctx.arc(48 + i * 40, 48 + j * 40, 3.2, 0, Math.PI * 2); ctx.fill();
    }
  }, true);
  return t;
}

const SLOT_NAMES = ['7 DE ORO', 'DIAMANTE', 'FORTUNA', 'TORO BRAVO', 'FARAÓN', 'DRAGÓN', 'CEREZAS', 'RULETA SOLAR'];
const SLOT_COLORS = ['#ff2d55', '#2fd3ff', '#ffd23f', '#9b5cff', '#3dff8b', '#ff7a1a'];
function slotTexture(i: number) {
  return canvas(128, 192, ctx => {
    const color = SLOT_COLORS[i % SLOT_COLORS.length];
    const g = ctx.createLinearGradient(0, 0, 0, 192);
    g.addColorStop(0, '#120616'); g.addColorStop(1, '#2a0c2c');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 192);
    ctx.fillStyle = color; ctx.fillRect(6, 6, 116, 34);
    ctx.fillStyle = '#120616'; ctx.font = 'bold 15px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(SLOT_NAMES[i % SLOT_NAMES.length], 64, 29);
    // Three reels.
    for (let r = 0; r < 3; r++) {
      ctx.fillStyle = '#f7f2e6'; ctx.fillRect(10 + r * 37, 52, 33, 70);
      const symbols = ['7', '★', '♦', 'BAR', '♣', '♥'];
      ctx.font = 'bold 24px serif';
      for (let k = 0; k < 2; k++) {
        const s = symbols[(i * 3 + r * 2 + k) % symbols.length];
        ctx.fillStyle = s === '7' || s === '♥' || s === '♦' ? '#d10a2a' : '#1a1a1a';
        ctx.font = s === 'BAR' ? 'bold 13px sans-serif' : 'bold 26px serif';
        ctx.fillText(s, 26.5 + r * 37, 80 + k * 32);
      }
    }
    ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.strokeRect(8, 50, 112, 74);
    ctx.fillStyle = '#d10a2a'; ctx.fillRect(8, 86, 112, 2);
    for (let b = 0; b < 4; b++) { ctx.fillStyle = ['#ff3b3b', '#ffd23f', '#3dff8b', '#2fd3ff'][b]; ctx.fillRect(14 + b * 27, 140, 20, 12); }
    ctx.fillStyle = color; ctx.font = 'bold 13px sans-serif';
    ctx.fillText(`${(i + 2) * 1250} $`, 64, 178);
  });
}

function neonTexture(text: string, color: string, width = 512, height = 128, font = 'bold 72px Georgia, serif') {
  return canvas(width, height, ctx => {
    ctx.clearRect(0, 0, width, height);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = font;
    // Shrink the font until the text fits the board.
    let size = Number(/(\d+)px/.exec(font)?.[1] ?? 72);
    while (size > 12 && ctx.measureText(text).width > width * 0.9) { size -= 2; ctx.font = font.replace(/\d+px/, `${size}px`); }
    ctx.shadowColor = color; ctx.shadowBlur = 22;
    ctx.fillStyle = color;
    ctx.fillText(text, width / 2, height / 2 + 4);
    ctx.shadowBlur = 0; ctx.fillStyle = '#fffaf0';
    ctx.globalAlpha = 0.65;
    ctx.fillText(text, width / 2, height / 2 + 4);
  });
}

function sign(parent: THREE.Object3D, text: string, color: string, x: number, y: number, z: number, w: number, ry = 0, font?: string) {
  const h = w / 4;
  const material = new THREE.MeshBasicMaterial({ map: neonTexture(text, color, 512, 128, font), transparent: true, toneMapped: false, depthWrite: false });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), material);
  mesh.position.set(x, y, z);
  mesh.rotation.y = ry;
  parent.add(mesh);
  return mesh;
}

function feltTexture(kind: 'roulette' | 'blackjack' | 'craps' | 'poker' | 'baccarat') {
  return canvas(512, 256, ctx => {
    const base = kind === 'baccarat' ? '#5a0f1c' : kind === 'poker' ? '#0f4a2a' : '#0d5a34';
    ctx.fillStyle = base; ctx.fillRect(0, 0, 512, 256);
    ctx.strokeStyle = '#f2e6c4'; ctx.fillStyle = '#f2e6c4'; ctx.lineWidth = 3;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    if (kind === 'roulette') {
      for (let i = 0; i < 12; i++) for (let j = 0; j < 3; j++) {
        const n = i * 3 + (3 - j);
        ctx.fillStyle = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(n) ? '#b0101e' : '#141414';
        ctx.fillRect(150 + i * 28, 40 + j * 40, 26, 38);
        ctx.fillStyle = '#f2e6c4'; ctx.font = 'bold 16px sans-serif'; ctx.fillText(String(n), 163 + i * 28, 59 + j * 40);
      }
      ctx.fillStyle = '#0a7a3a'; ctx.fillRect(118, 40, 30, 118); ctx.fillStyle = '#f2e6c4'; ctx.fillText('0', 133, 99);
      ctx.font = 'bold 18px sans-serif'; ctx.fillText('PAR   ROJO   NEGRO   IMPAR', 320, 200);
    } else if (kind === 'blackjack') {
      ctx.beginPath(); ctx.arc(256, -60, 260, 0.25 * Math.PI, 0.75 * Math.PI); ctx.stroke();
      ctx.font = 'bold 26px Georgia, serif'; ctx.fillText('BLACKJACK PAGA 3 A 2', 256, 120);
      ctx.font = '16px Georgia, serif'; ctx.fillText('El crupier se planta en 17', 256, 152);
      for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.arc(70 + i * 74, 200 + Math.sin((i / 5) * Math.PI) * 26, 20, 0, Math.PI * 2); ctx.stroke(); }
    } else if (kind === 'craps') {
      ctx.strokeRect(20, 20, 472, 216);
      ctx.font = 'bold 28px Georgia, serif'; ctx.fillText('PASA', 256, 210);
      ctx.font = 'bold 22px sans-serif';
      ['4', '5', 'SEIS', '8', 'NUEVE', '10'].forEach((n, i) => { ctx.strokeRect(60 + i * 66, 40, 62, 50); ctx.fillText(n, 91 + i * 66, 66); });
      ctx.fillText('CAMPO · 2 · 3 · 4 · 9 · 10 · 11 · 12', 256, 140);
    } else {
      ctx.beginPath(); ctx.ellipse(256, 128, 200, 90, 0, 0, Math.PI * 2); ctx.stroke();
      ctx.font = 'bold 30px Georgia, serif';
      ctx.fillText(kind === 'baccarat' ? 'BANCA · JUGADOR · EMPATE' : 'EL GRAN MERIDIANO', 256, 128);
    }
  });
}

function screenTexture(kind: number) {
  return canvas(256, 144, ctx => {
    if (kind % 3 === 0) {
      ctx.fillStyle = '#1d7a2e'; ctx.fillRect(0, 0, 256, 144);
      ctx.strokeStyle = '#e8f5e0'; ctx.lineWidth = 2; ctx.strokeRect(10, 10, 236, 124);
      ctx.beginPath(); ctx.moveTo(128, 10); ctx.lineTo(128, 134); ctx.stroke();
      ctx.beginPath(); ctx.arc(128, 72, 20, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#ffffff'; for (let i = 0; i < 8; i++) { ctx.beginPath(); ctx.arc(40 + i * 25, 30 + ((i * 37) % 90), 3.5, 0, Math.PI * 2); ctx.fill(); }
    } else if (kind % 3 === 1) {
      ctx.fillStyle = '#7a5a2a'; ctx.fillRect(0, 0, 256, 144);
      ctx.fillStyle = '#3a8a3a'; ctx.fillRect(0, 0, 256, 50);
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 96, 256, 4);
      for (let i = 0; i < 5; i++) { ctx.fillStyle = ['#d22', '#22d', '#dd2', '#2d2', '#d2d'][i]; ctx.fillRect(30 + i * 40 + (i % 2) * 12, 62 + i * 3, 26, 12); }
    } else {
      ctx.fillStyle = '#0a1230'; ctx.fillRect(0, 0, 256, 144);
      ctx.fillStyle = '#ffd23f'; ctx.font = 'bold 18px sans-serif'; ctx.fillText('CUOTAS EN VIVO', 12, 26);
      ctx.font = '15px monospace'; ctx.fillStyle = '#e8eef8';
      ['HALCONES  +150', 'TOROS     -120', 'LOBOS     +210', 'PUMAS     -180', 'ÁGUILAS   +300'].forEach((l, i) => ctx.fillText(l, 14, 52 + i * 19));
    }
  });
}

function photoTexture(seed: number) {
  return canvas(128, 160, ctx => {
    const r = random(seed);
    ctx.fillStyle = '#d8c39a'; ctx.fillRect(0, 0, 128, 160);
    ctx.fillStyle = 'rgba(80,55,30,.75)';
    for (let i = 0; i < 2; i++) {
      const x = 40 + i * 48 + r() * 6;
      ctx.beginPath(); ctx.arc(x, 62, 13, 0, Math.PI * 2); ctx.fill();
      ctx.fillRect(x - 17, 78, 34, 70);
    }
    ctx.fillStyle = 'rgba(60,40,20,.5)'; ctx.fillRect(10, 140, 108, 10);
    ctx.strokeStyle = '#f2ead6'; ctx.lineWidth = 6; ctx.strokeRect(3, 3, 122, 154);
  });
}

function windowsTexture(seed: number, warm = true) {
  const t = canvas(256, 512, ctx => {
    const r = random(seed);
    ctx.fillStyle = warm ? '#120c06' : '#0a0d18'; ctx.fillRect(0, 0, 256, 512);
    for (let y = 0; y < 512; y += 32) for (let x = 0; x < 256; x += 32) {
      const on = r() < 0.42;
      ctx.fillStyle = on ? (warm ? (r() < 0.75 ? '#ffcf7a' : '#fff1c9') : (r() < 0.7 ? '#9fd4ff' : '#f2e6ff')) : (warm ? '#24180c' : '#141a2a');
      ctx.globalAlpha = on ? 0.45 + r() * 0.4 : 1;
      ctx.fillRect(x + 4, y + 5, 24, 22);
    }
    ctx.globalAlpha = 1;
    ctx.fillStyle = warm ? 'rgba(201,162,74,.55)' : 'rgba(140,160,200,.35)';
    for (let x = 0; x < 256; x += 32) ctx.fillRect(x, 0, 2, 512);
  }, true);
  return t;
}

let puffTexture: THREE.Texture | null = null;
function puff() {
  if (!puffTexture) puffTexture = canvas(64, 64, ctx => {
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(235,235,240,.55)'); g.addColorStop(0.5, 'rgba(220,220,228,.22)'); g.addColorStop(1, 'rgba(220,220,228,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  });
  return puffTexture;
}

// ---------------------------------------------------------------- furniture

function stool(g: THREE.Object3D, x: number, z: number, h = 0.55, color = '#5a0e1c') {
  add(g, C(0.05, 0.08, h - 0.05, 8), gold(), x, (h - 0.05) / 2, z);
  add(g, C(0.22, 0.2, 0.08, 14), std(color, 0.7), x, h - 0.04, z);
}

function slotMachine(g: THREE.Object3D, x: number, z: number, face: number, i: number, screens: THREE.Material[]) {
  const cab = new THREE.Group();
  cab.position.set(x, 0, z);
  cab.rotation.y = face;
  g.add(cab);
  add(cab, B(0.66, 1.05, 0.62), blackGloss(), 0, 0.525, 0);
  add(cab, B(0.66, 0.08, 0.7), gold(), 0, 1.06, 0.02);
  add(cab, B(0.62, 0.86, 0.12), std('#1a1420', 0.3, 0.3), 0, 1.5, -0.12);
  add(cab, new THREE.PlaneGeometry(0.54, 0.8), screens[i % screens.length], 0, 1.5, -0.055).rotation.x = -0.12;
  add(cab, B(0.6, 0.16, 0.05), bright(SLOT_COLORS[i % SLOT_COLORS.length], 0.9), 0, 2.0, -0.07);
  add(cab, B(0.64, 0.22, 0.14), std('#1a1420', 0.3, 0.5), 0, 2.0, -0.15);
  add(cab, B(0.5, 0.06, 0.24), std('#2a2a30', 0.4, 0.5), 0, 1.0, 0.22);
  stool(cab, 0, 0.62);
}

function oval(g: THREE.Object3D, item: Item, top: THREE.Material, rail = std('#4a2412', 0.4, 0.1)) {
  const group = new THREE.Group();
  group.position.set(item.x, 0, item.z);
  if (item.rot) group.rotation.y = (item.rot * Math.PI) / 2;
  g.add(group);
  const rx = item.w / 2, rz = item.d / 2;
  const base = add(group, C(1, 1, 0.12, 36), rail, 0, 0.82, 0); base.scale.set(rx, 1, rz);
  const felted = add(group, C(1, 1, 0.02, 36), top, 0, 0.89, 0); felted.scale.set(rx - 0.16, 1, rz - 0.16);
  const pad = add(group, new THREE.TorusGeometry(1, 0.06, 8, 40), std('#2a140a', 0.5), 0, 0.9, 0); pad.rotation.x = Math.PI / 2; pad.scale.set(rx - 0.04, rz - 0.04, 1);
  add(group, C(0.3, 0.45, 0.8, 16), std('#1a0e08', 0.5), 0, 0.4, 0);
  return group;
}

function chips(g: THREE.Object3D, x: number, y: number, z: number, seed: number) {
  const r = random(seed);
  for (let i = 0; i < 5; i++) {
    const n = 2 + Math.floor(r() * 7);
    add(g, C(0.035, 0.035, 0.008 * n, 12), std(['#c8102e', '#1a1a1a', '#2a5ad0', '#0e8a3e', '#e8e2d0'][i], 0.4), x + (i % 3) * 0.08, y + 0.004 * n, z + Math.floor(i / 3) * 0.08);
  }
}

function cards(g: THREE.Object3D, x: number, y: number, z: number, n: number, spread = 0.12) {
  for (let i = 0; i < n; i++) {
    const card = add(g, B(0.06, 0.003, 0.085), std('#f6f2ea', 0.5), x + (i - n / 2) * spread, y, z);
    card.rotation.y = (i - n / 2) * 0.12;
  }
}

export type Anim = { roulette: THREE.Object3D[]; slotMaterials: THREE.MeshStandardMaterial[]; flicker: THREE.MeshBasicMaterial[]; spin: { object: THREE.Object3D; speed: number; axis: 'y' | 'z' }[]; jets: { mesh: THREE.InstancedMesh; base: THREE.Vector3[] }[]; beams: THREE.Object3D[]; dance?: THREE.InstancedMesh; flames: THREE.Mesh[]; cars: { group: THREE.Group; x: number; z: number; dir: number; speed: number }[]; haze: THREE.Sprite[]; marquee?: { material: THREE.MeshBasicMaterial; canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D; texture: THREE.CanvasTexture }; helicopter?: THREE.Group; rotor?: THREE.Object3D };

function buildItem(g: THREE.Group, item: Item, floor: number, anim: Anim, screens: THREE.MeshStandardMaterial[], low: boolean) {
  const { x, z, w, d } = item;
  switch (item.type) {
    case 'slots': {
      const count = Math.floor(d / 1.05);
      for (let i = 0; i < count; i++) {
        const zz = z - d / 2 + 0.55 + i * 1.05;
        slotMachine(g, x - 0.36, zz, -Math.PI / 2, i + Math.round(x), screens);
        slotMachine(g, x + 0.36, zz, Math.PI / 2, i + Math.round(x) + 3, screens);
      }
      add(g, B(0.5, 0.08, d), gold(), x, 2.3, z);
      const strip = new THREE.MeshBasicMaterial({ color: '#ff2d55', toneMapped: false });
      add(g, B(0.56, 0.06, d), strip, x, 2.37, z);
      anim.flicker.push(strip);
      sign(g, SLOT_NAMES[Math.abs(Math.round(x + z)) % SLOT_NAMES.length], SLOT_COLORS[Math.abs(Math.round(x)) % SLOT_COLORS.length], x - 0.3, 2.7, z, 2.4, -Math.PI / 2);
      sign(g, SLOT_NAMES[Math.abs(Math.round(x + z)) % SLOT_NAMES.length], SLOT_COLORS[Math.abs(Math.round(x)) % SLOT_COLORS.length], x + 0.3, 2.7, z, 2.4, Math.PI / 2);
      break;
    }
    case 'bigslot': {
      add(g, B(w, 3.4, d), blackGloss(), x, 1.7, z);
      add(g, new THREE.PlaneGeometry(d * 0.86, 1.9), screens[2], x - w / 2 - 0.01, 2.1, z, -Math.PI / 2);
      sign(g, 'JACKPOT', '#ffd23f', x - w / 2 - 0.05, 3.9, z, 3.4, -Math.PI / 2);
      sign(g, '1.000.000 $', '#ff2d55', x - w / 2 - 0.05, 3.25, z, 3.2, -Math.PI / 2, 'bold 80px sans-serif');
      break;
    }
    case 'roulette': {
      const table = oval(g, item, new THREE.MeshStandardMaterial({ map: feltTexture('roulette'), roughness: 0.95 }));
      const wheel = new THREE.Group();
      wheel.position.set(-w / 2 + 0.42, 0.92, 0);
      table.add(wheel);
      add(wheel, C(0.36, 0.3, 0.1, 32), std('#3a1a0a', 0.3, 0.3), 0, 0, 0);
      const disc = add(wheel, C(0.3, 0.3, 0.03, 37), new THREE.MeshStandardMaterial({ map: canvas(128, 128, ctx => {
        for (let i = 0; i < 37; i++) {
          ctx.fillStyle = i === 0 ? '#0a7a3a' : i % 2 ? '#b0101e' : '#141414';
          ctx.beginPath(); ctx.moveTo(64, 64); ctx.arc(64, 64, 64, (i / 37) * Math.PI * 2, ((i + 1) / 37) * Math.PI * 2); ctx.fill();
        }
        ctx.fillStyle = '#c9a24a'; ctx.beginPath(); ctx.arc(64, 64, 28, 0, Math.PI * 2); ctx.fill();
      }), roughness: 0.35, metalness: 0.2 }), 0, 0.06, 0);
      add(disc, C(0.03, 0.06, 0.12, 8), gold(), 0, 0.06, 0);
      anim.roulette.push(disc);
      chips(table, 0.2, 0.9, -0.2, Math.round(x * 3));
      chips(table, 0.7, 0.9, 0.25, Math.round(x * 5));
      break;
    }
    case 'blackjack': {
      const table = oval(g, { ...item, d: d * 1.4 }, new THREE.MeshStandardMaterial({ map: feltTexture('blackjack'), roughness: 0.95 }));
      add(table, B(w + 0.4, 1, d * 0.75), std('#0b0a0c', 0.9), 0, 0.45, -d * 0.62);
      cards(table, 0, 0.905, 0.25, 4, 0.3);
      chips(table, -0.3, 0.9, -0.1, Math.round(z * 7));
      add(table, B(0.5, 0.12, 0.3), std('#c8b28a', 0.4), 0.7, 0.96, -0.2);
      for (let i = 0; i < 4; i++) stool(g, x - 1.1 + i * 0.75, z + d * 0.8, 0.55);
      break;
    }
    case 'craps': {
      const group = new THREE.Group(); group.position.set(x, 0, z); g.add(group);
      add(group, B(w, 0.8, d), std('#3a1a0a', 0.5), 0, 0.4, 0);
      add(group, B(w - 0.3, 0.02, d - 0.3), new THREE.MeshStandardMaterial({ map: feltTexture('craps'), roughness: 0.95 }), 0, 0.81, 0);
      for (const s of [-1, 1]) add(group, B(w, 0.22, 0.14), std('#2a140a', 0.4), 0, 0.92, s * (d / 2 - 0.07));
      for (const s of [-1, 1]) add(group, B(0.14, 0.22, d), std('#2a140a', 0.4), s * (w / 2 - 0.07), 0.92, 0);
      for (let i = 0; i < 2; i++) { const die = add(group, B(0.06, 0.06, 0.06), std('#e8102a', 0.2), 0.3 + i * 0.1, 0.85, 0.1); die.rotation.y = i; }
      chips(group, -1.2, 0.83, -0.3, 77);
      break;
    }
    case 'poker': case 'baccarat': {
      const table = oval(g, item, new THREE.MeshStandardMaterial({ map: feltTexture(item.type), roughness: 0.95 }));
      cards(table, 0, 0.905, 0, 5, 0.1);
      chips(table, -0.6, 0.9, 0.3, Math.round(z * 3));
      chips(table, 0.6, 0.9, -0.3, Math.round(x * 3));
      const n = item.type === 'poker' ? 6 : 5;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2;
        const cx = x + Math.cos(a) * (w / 2 + 0.45), cz = z + Math.sin(a) * (d / 2 + 0.45);
        add(g, B(0.5, 0.5, 0.5), std(item.type === 'baccarat' ? '#5a0f1c' : '#2a1a10', 0.6), cx, 0.25, cz);
      }
      break;
    }
    case 'cage': {
      const fx = x + w / 2;
      add(g, B(0.5, 1.15, d), std('#3a2414', 0.4, 0.1), fx - 0.25, 0.575, z);
      add(g, B(0.7, 0.06, d), marble(), fx - 0.25, 1.18, z);
      for (let i = 0; i < Math.floor(d / 0.22); i++) add(g, C(0.015, 0.015, 2, 6), gold(), fx - 0.1, 2.2, z - d / 2 + 0.1 + i * 0.22);
      add(g, B(0.3, 0.6, d), std('#3a2414', 0.4), fx - 0.1, 3.5, z);
      sign(g, 'CAJA', '#ffd23f', fx + 0.02, 3.55, z, 3, Math.PI / 2);
      add(g, B(0.1, CEILING, d), damask(1), x - w / 2 + 0.05, CEILING / 2, z);
      for (let i = 0; i < 3; i++) add(g, B(0.4, 1.2, 1.2), std('#5a5a62', 0.3, 0.8), x - 2 + i * 0.1, 0.6, z - 4 + i * 4);
      break;
    }
    case 'bar': {
      const group = new THREE.Group(); group.position.set(x, 0, z); g.add(group);
      const r = Math.min(w, d) / 2;
      const counter = add(group, C(1, 1, 1.1, 40, ), std('#2a0e14', 0.35, 0.2), 0, 0.55, 0); counter.scale.set(w / 2, 1, d / 2);
      const top = add(group, C(1, 1, 0.06, 40), marble(), 0, 1.13, 0); top.scale.set(w / 2 + 0.15, 1, d / 2 + 0.15);
      const rim = add(group, new THREE.TorusGeometry(1, 0.03, 6, 48), bright('#ffb347'), 0, 0.15, 0); rim.rotation.x = Math.PI / 2; rim.scale.set(w / 2 + 0.02, d / 2 + 0.02, 1);
      // A tower of bottles in the middle, lit from below.
      add(group, C(r * 0.45, r * 0.5, 2.6, 24), std('#120a0c', 0.3), 0, 1.3, 0);
      const r2 = random(5);
      for (let i = 0; i < 26; i++) {
        const a = (i / 26) * Math.PI * 2, rr = r * 0.5 + 0.05;
        add(group, C(0.035, 0.045, 0.3, 8), bright(['#ffb347', '#7ad3ff', '#ff5a7a', '#b7ff7a', '#ffe9a8'][Math.floor(r2() * 5)], 0.85), Math.cos(a) * rr, 1.32 + (i % 3) * 0.55, Math.sin(a) * rr);
      }
      const halo = add(group, new THREE.TorusGeometry(r * 0.6, 0.04, 6, 40), bright('#ffd28a'), 0, 2.75, 0); halo.rotation.x = Math.PI / 2;
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        stool(g, x + Math.cos(a) * (w / 2 + 0.55), z + Math.sin(a) * (d / 2 + 0.55), 0.78, '#1a1a1e');
      }
      sign(g, 'BAR MERIDIANO', '#ffb347', x, 4.6, z + d / 2 + 0.6, 5.5);
      break;
    }
    case 'piano': {
      const group = new THREE.Group(); group.position.set(x, 0, z); group.rotation.y = Math.PI; g.add(group);
      add(group, B(1.5, 0.35, 1.9), blackGloss(), 0, 0.85, -0.2);
      const lid = add(group, B(1.45, 0.03, 1.8), blackGloss(), 0, 1.35, -0.25); lid.rotation.x = 0.55; lid.position.y = 1.5;
      add(group, B(1.4, 0.06, 0.22), std('#f5f2ea', 0.4), 0, 0.98, 0.78);
      for (const s of [-0.6, 0.6]) add(group, C(0.05, 0.04, 0.68, 8), blackGloss(), s, 0.34, -0.6);
      add(group, B(0.9, 0.5, 0.4), blackGloss(), 0, 0.25, 1.3);
      break;
    }
    case 'desk': {
      add(g, B(w, 1.15, d), std('#2a1408', 0.35, 0.2), x, 0.575, z);
      add(g, B(w + 0.2, 0.06, d + 0.2), marble(), x, 1.18, z);
      add(g, B(w, 0.04, 0.04), bright('#ffd28a'), x, 0.12, z + d / 2 + 0.02);
      for (let i = 0; i < 3; i++) add(g, B(0.4, 0.3, 0.05), std('#111', 0.3), x - 3 + i * 3, 1.36, z - 0.3);
      break;
    }
    case 'backwall': {
      add(g, B(w, 4.6, d), std('#1a0e0a', 0.4, 0.3), x, 2.3, z);
      for (let i = 0; i < 6; i++) add(g, B(0.08, 4.2, 0.1), gold(), x - w / 2 + 1 + i * (w - 2) / 5, 2.3, z + d / 2);
      sign(g, 'RECEPCIÓN', '#ffd28a', x, 3.5, z + d / 2 + 0.06, 6);
      sign(g, '★ EL GRAN MERIDIANO ★', '#f2e6c4', x, 2.4, z + d / 2 + 0.06, 6, 0, 'bold 44px Georgia, serif');
      break;
    }
    case 'chandelier': {
      const group = new THREE.Group(); group.position.set(x, CEILING - 0.2, z); g.add(group);
      const crystal = bright('#fff6e0', 0.9);
      const bead = new THREE.OctahedronGeometry(0.07);
      for (let tier = 0; tier < 4; tier++) {
        const r = 2.4 - tier * 0.5, y = -0.4 - tier * 0.45, n = 26 - tier * 5;
        const ring = add(group, new THREE.TorusGeometry(r, 0.03, 6, 48), gold(), 0, y, 0); ring.rotation.x = Math.PI / 2;
        for (let i = 0; i < n; i++) {
          const a = (i / n) * Math.PI * 2;
          for (let k = 0; k < 3; k++) add(group, bead, crystal, Math.cos(a) * r, y - 0.1 - k * 0.13, Math.sin(a) * r);
        }
      }
      add(group, new THREE.SphereGeometry(0.35, 16, 12), bright('#fff1c9'), 0, -2.1, 0);
      anim.spin.push({ object: group, speed: 0.05, axis: 'y' });
      const light = new THREE.PointLight('#ffd9a0', low ? 10 : 16, 18, 1.8);
      light.position.set(x, CEILING - 2.5, z);
      g.add(light);
      break;
    }
    case 'fountain-in': {
      const basin = add(g, C(w / 2, w / 2 + 0.2, 0.6, 40), marble(), x, 0.3, z);
      basin.castShadow = false;
      add(g, C(w / 2 - 0.25, w / 2 - 0.25, 0.04, 40), std('#2a6a8a', 0.05, 0.6, '#1a5a7a', 0.6), x, 0.56, z);
      add(g, C(0.4, 0.7, 1.6, 20), gold(), x, 1.1, z);
      add(g, new THREE.SphereGeometry(0.55, 20, 14), gold(), x, 2.2, z);
      jets(g, anim, [[x, z, 0]], 14, 1.2, 2.6, 0.9);
      break;
    }
    case 'column': {
      add(g, C(w / 2, w / 2, CEILING, 20), marble(), x, CEILING / 2, z);
      add(g, C(w / 2 + 0.12, w / 2 + 0.12, 0.3, 20), gold(), x, 0.15, z);
      add(g, C(w / 2 + 0.18, w / 2 + 0.06, 0.4, 20), gold(), x, CEILING - 0.2, z);
      add(g, C(w / 2 + 0.02, w / 2 + 0.02, 0.06, 20), bright('#ffd28a'), x, 2.8, z);
      break;
    }
    case 'sofa': case 'vipbooth': {
      const color = item.type === 'vipbooth' ? '#5a0e3a' : '#5a0e1c';
      add(g, B(w, 0.45, d), std(color, 0.75), x, 0.225, z);
      add(g, B(w, 0.6, 0.25), std(color, 0.75), x, 0.7, z + (z > 0 ? d / 2 - 0.12 : -d / 2 + 0.12));
      add(g, B(w * 0.5, 0.4, 0.7), std('#1a0e0a', 0.3, 0.2), x, 0.2, z + (z > 0 ? -1.2 : 1.2));
      break;
    }
    case 'lounge': case 'armchair': {
      add(g, B(w * 0.8, 0.45, d * 0.8), std(item.type === 'armchair' ? '#4a2a14' : '#3a0e1c', 0.6), x, 0.225, z);
      add(g, B(w * 0.8, 0.5, 0.22), std(item.type === 'armchair' ? '#4a2a14' : '#3a0e1c', 0.6), x, 0.7, z - d * 0.36);
      break;
    }
    case 'planter': {
      add(g, C(0.55, 0.42, 0.9, 16), gold(), x, 0.45, z);
      addPalm(g, x, z, 3.2, Math.round(x * 13 + z));
      break;
    }
    case 'screens': {
      for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) {
        const big = i === 1 || i === 2;
        const m = new THREE.MeshBasicMaterial({ map: screenTexture(i + j * 4), toneMapped: false });
        add(g, new THREE.PlaneGeometry(5.6, big && j === 0 ? 3.2 : 2.4), m, x + 0.35, j === 0 ? 3.3 : 1.3, z - d / 2 + 3 + i * 6, Math.PI / 2);
      }
      sign(g, 'APUESTAS DEPORTIVAS', '#2fd3ff', x + 0.4, 5.35, z, 9, Math.PI / 2);
      break;
    }
    case 'betdesk': {
      add(g, B(w, 1.1, d), std('#0f1424', 0.4, 0.3), x, 0.55, z);
      add(g, B(w, 0.05, 0.05), bright('#2fd3ff'), x, 1.1, z + d / 2);
      sign(g, 'VENTANILLA', '#2fd3ff', x, 2.6, z - d / 2 - 0.2, 4);
      break;
    }
    case 'betseats': {
      add(g, B(w, 0.75, d * 0.5), std('#141a2a', 0.5), x, 0.375, z - d * 0.25);
      for (let i = 0; i < 5; i++) add(g, B(0.4, 0.06, 0.3), bright('#7ad3ff', 0.8), x - w / 2 + 0.6 + i * (w - 1.2) / 4, 0.78, z - d * 0.25);
      for (let i = 0; i < 5; i++) stool(g, x - w / 2 + 0.6 + i * (w - 1.2) / 4, z + 0.45, 0.55, '#1a2440');
      break;
    }
    case 'buffet': {
      add(g, B(w, 0.9, d), std('#e8e2d4', 0.3, 0.1), x, 0.45, z);
      add(g, B(w, 0.05, d + 0.1), std('#c9a24a', 0.3, 0.7), x, 0.92, z);
      const glass = add(g, B(w, 0.02, d * 0.8), new THREE.MeshStandardMaterial({ color: '#cfe8ff', transparent: true, opacity: 0.25, roughness: 0.05 }), x, 1.4, z); glass.castShadow = false;
      const r = random(Math.round(x * 7 + z));
      const foods = ['#e85a3a', '#f2c14a', '#8ac04a', '#f5e6c8', '#c43a2a', '#ff9a7a', '#6a3a1a', '#f2f2e6'];
      for (let i = 0; i < Math.floor(w / 0.55); i++) {
        const fx = x - w / 2 + 0.3 + i * 0.55;
        add(g, B(0.46, 0.06, d * 0.6), std('#d8d8dc', 0.2, 0.8), fx, 0.96, z);
        for (let k = 0; k < 4; k++) add(g, new THREE.SphereGeometry(0.06 + r() * 0.04, 8, 6), std(foods[Math.floor(r() * foods.length)], 0.6), fx - 0.12 + (k % 2) * 0.24, 1.02, z - 0.12 + Math.floor(k / 2) * 0.24);
      }
      if (w > 10) {
        for (const sx of [-w / 3, w / 3]) {
          add(g, new THREE.ConeGeometry(0.4, 1.1, 16), std('#d8d8dc', 0.2, 0.7), x + sx, 1.5, z);
          for (let k = 0; k < 18; k++) add(g, new THREE.SphereGeometry(0.05, 6, 5), std(k % 2 ? '#ff6a4a' : '#ffb08a', 0.5), x + sx + Math.cos(k) * 0.3 * (1 - k / 22), 1.05 + k * 0.05, z + Math.sin(k) * 0.3 * (1 - k / 22));
        }
        sign(g, 'BUFÉ IMPERIAL', '#ffd23f', x, 3.6, z - d / 2 - 2.6, 7);
      }
      break;
    }
    case 'chocolate': {
      for (let i = 0; i < 4; i++) add(g, C(0.55 - i * 0.12, 0.55 - i * 0.1, 0.12, 20), std('#4a2410', 0.25, 0.1), x, 0.95 + i * 0.3, z);
      add(g, C(0.05, 0.05, 1.2, 8), std('#3a1a08', 0.2), x, 1.5, z);
      break;
    }
    case 'stage': {
      add(g, B(w, 1.1, d), std('#1a0a0a', 0.6), x, 0.55, z);
      add(g, B(w, 0.06, 0.1), bright('#ffd23f'), x - 0, 1.1, z + d / 2);
      const curtain = new THREE.MeshStandardMaterial({ map: canvas(128, 64, ctx => {
        for (let i = 0; i < 16; i++) { ctx.fillStyle = i % 2 ? '#7a0a14' : '#a0101e'; ctx.fillRect(i * 8, 0, 8, 64); }
      }, true), roughness: 0.9 });
      (curtain.map as THREE.Texture).repeat.set(4, 1);
      add(g, B(0.3, CEILING - 1.1, d), curtain, x + w / 2 - 0.4, 1.1 + (CEILING - 1.1) / 2, z);
      for (const s of [-1, 1]) add(g, B(w * 0.6, CEILING - 1.1, 0.3), curtain, x + w / 2 - w * 0.3, 1.1 + (CEILING - 1.1) / 2, z + s * (d / 2 - 0.2));
      sign(g, 'EL GRAN FAUSTINO', '#ffd23f', x - w / 2 + 0.4, 4.6, z, 9, -Math.PI / 2);
      sign(g, 'ESTA NOCHE · DOS FUNCIONES', '#f2e6c4', x - w / 2 + 0.4, 3.6, z, 7, -Math.PI / 2, 'bold 46px Georgia, serif');
      for (let i = 0; i < 3; i++) {
        const spot = new THREE.SpotLight('#fff1d0', low ? 40 : 80, 18, 0.35, 0.5, 1.2);
        spot.position.set(x - w / 2 - 6, CEILING - 0.3, z - 5 + i * 5);
        spot.target.position.set(x, 1.1, z - 5 + i * 5);
        g.add(spot, spot.target);
      }
      break;
    }
    case 'vanity': {
      add(g, B(w, 0.8, d), std('#2a1a2a', 0.4), x, 0.4, z);
      add(g, B(w - 0.4, 1.4, 0.05), std('#cfd8e0', 0.05, 0.95), x, 1.75, z - d / 2 + 0.05);
      for (let i = 0; i < 12; i++) add(g, new THREE.SphereGeometry(0.06, 8, 6), bright('#fff1c9'), x - w / 2 + 0.25 + (i % 6) * ((w - 0.5) / 5), i < 6 ? 2.55 : 0.95, z - d / 2 + 0.1);
      add(g, B(0.4, 0.5, 0.05), bright('#ffd23f', 0.5), x + w / 2 + 0.5, 1.6, z);
      break;
    }
    case 'altar': {
      add(g, B(w, 1, d), std('#f6f2ea', 0.4), x, 0.5, z);
      const arch = add(g, new THREE.TorusGeometry(2.4, 0.12, 8, 32, Math.PI), std('#f6f2ea', 0.4), x, 0.6, z + 0.6); arch.castShadow = false;
      const r = random(4);
      for (let i = 0; i < 40; i++) {
        const a = (i / 39) * Math.PI;
        add(g, new THREE.SphereGeometry(0.1 + r() * 0.06, 8, 6), std(i % 3 ? '#ff8ab0' : '#ffffff', 0.7), x + Math.cos(a) * 2.4, 0.6 + Math.sin(a) * 2.4, z + 0.6);
      }
      sign(g, '♥ AMOR EXPRÉS ♥', '#ff5a9a', x, 4.4, z + 1.4, 6, Math.PI);
      break;
    }
    case 'pew': {
      add(g, B(w, 0.45, d * 0.6), std('#f2ede4', 0.6), x, 0.225, z);
      add(g, B(w, 0.6, 0.08), std('#f2ede4', 0.6), x, 0.7, z + d / 2 - 0.04);
      add(g, new THREE.SphereGeometry(0.16, 8, 6), std('#ff8ab0', 0.7), x + (x < 0 ? w / 2 : -w / 2), 0.9, z);
      break;
    }
    case 'djbooth': {
      add(g, B(w, 1.2, d), std('#0b0b10', 0.3, 0.3), x, 0.6, z);
      add(g, B(0.05, 0.9, d - 0.2), bright('#9b5cff'), x - w / 2 - 0.03, 0.6, z);
      for (const s of [-1, 1]) add(g, C(0.25, 0.25, 0.04, 20), std('#1a1a1a', 0.3), x, 1.22, z + s * 0.8);
      for (const s of [-1, 1]) add(g, B(0.9, 2.2, 0.9), std('#101014', 0.6), x + 0.6, 1.1, z + s * (d / 2 + 0.8));
      sign(g, 'CLUB MEDIANOCHE', '#ff2d95', x + 1.1, 4.2, z, 8, -Math.PI / 2);
      break;
    }
    case 'dancefloor': {
      const n = 10;
      const tiles = new THREE.InstancedMesh(new THREE.PlaneGeometry(w / n - 0.04, d / n - 0.04), new THREE.MeshBasicMaterial({ toneMapped: false }), n * n);
      const m = new THREE.Matrix4();
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        m.makeRotationX(-Math.PI / 2); m.setPosition(x - w / 2 + (i + 0.5) * (w / n), 0.03, z - d / 2 + (j + 0.5) * (d / n));
        tiles.setMatrixAt(i * n + j, m); tiles.setColorAt(i * n + j, new THREE.Color('#9b5cff'));
      }
      g.add(tiles);
      anim.dance = tiles;
      for (let i = 0; i < 4; i++) {
        const beam = new THREE.Mesh(new THREE.ConeGeometry(1.2, CEILING, 20, 1, true), new THREE.MeshBasicMaterial({ color: ['#ff2d95', '#2fd3ff', '#9b5cff', '#ffd23f'][i], transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false }));
        const pivot = new THREE.Group(); pivot.position.set(x - 3 + i * 2, CEILING, z - 2 + (i % 2) * 4);
        beam.position.y = -CEILING / 2; pivot.add(beam); g.add(pivot);
        anim.beams.push(pivot);
      }
      const ball = add(g, new THREE.IcosahedronGeometry(0.6, 2), std('#e8e8f0', 0.1, 1, '#ffffff', 0.25), x, CEILING - 1, z);
      ball.castShadow = false;
      anim.spin.push({ object: ball, speed: 0.6, axis: 'y' });
      const light = new THREE.PointLight('#9b5cff', low ? 25 : 50, 18, 1.6); light.position.set(x, CEILING - 1.5, z); g.add(light);
      break;
    }
    case 'statue': {
      add(g, C(1.5, 1.6, 0.7, 32), marble(), x, 0.35, z);
      const die = add(g, B(1.4, 1.4, 1.4), std('#c9a24a', 0.25, 0.9), x, 1.9, z);
      die.rotation.set(0.6, 0.7, 0.2);
      anim.spin.push({ object: die, speed: 0.25, axis: 'y' });
      break;
    }
    case 'cardtable': {
      add(g, C(w / 2, w / 2, 0.08, 28), felt('#0f4a2a'), x, 0.8, z);
      add(g, C(0.2, 0.35, 0.78, 12), std('#2a1408', 0.4), x, 0.39, z);
      cards(g, x, 0.85, z, 6, 0.14);
      for (let i = 0; i < 3; i++) add(g, C(0.04, 0.035, 0.09, 10), new THREE.MeshStandardMaterial({ color: '#c88a3a', transparent: true, opacity: 0.8, roughness: 0.1 }), x - 0.5 + i * 0.5, 0.89, z + 0.5 - i * 0.4);
      add(g, C(0.09, 0.09, 0.03, 12), std('#3a3a3a', 0.3, 0.6), x + 0.3, 0.86, z + 0.3);
      const lamp = new THREE.PointLight('#ffb070', low ? 8 : 16, 7, 1.8); lamp.position.set(x, 2.6, z); g.add(lamp);
      add(g, C(0.3, 0.5, 0.3, 16, ), std('#1a3a1a', 0.5, 0, '#ffb070', 0.6), x, 2.7, z);
      break;
    }
    case 'humidor': {
      add(g, B(w, 2.6, d), std('#2a1408', 0.4), x, 1.3, z);
      add(g, B(0.05, 2.2, d - 0.3), new THREE.MeshStandardMaterial({ color: '#ffb070', transparent: true, opacity: 0.35, emissive: '#ffb070', emissiveIntensity: 0.4 }), x + w / 2 + 0.01, 1.4, z);
      break;
    }
    case 'officedesk': {
      add(g, B(w, 0.8, d), std('#3a1a08', 0.35, 0.1), x, 0.4, z);
      add(g, B(w + 0.1, 0.04, d + 0.1), std('#1a3a1a', 0.6), x, 0.82, z);
      add(g, C(0.12, 0.12, 0.25, 12), gold(), x - 0.3, 0.97, z - 1.2);
      add(g, B(0.4, 0.12, 0.2), std('#1a6a3a', 0.3, 0, '#c0ff9a', 0.7), x - 0.3, 1.12, z - 1.2);
      add(g, B(0.3, 0.01, 0.42), std('#f2ead6', 0.8), x + 0.2, 0.85, z + 0.4);
      add(g, C(0.05, 0.04, 0.12, 10), new THREE.MeshStandardMaterial({ color: '#c88a3a', transparent: true, opacity: 0.85 }), x + 0.4, 0.9, z - 0.4);
      const lamp = new THREE.PointLight('#ffcf8a', low ? 6 : 12, 7, 1.6); lamp.position.set(x - 0.3, 1.6, z - 1.2); g.add(lamp);
      break;
    }
    case 'safe': {
      add(g, B(w, 1.5, d), std('#3a3e44', 0.35, 0.8), x, 0.75, z);
      add(g, C(0.16, 0.16, 0.06, 20), gold(), x + w / 2 + 0.02, 0.9, z).rotation.z = Math.PI / 2;
      break;
    }
    case 'bookcase': {
      add(g, B(w, 3.2, d), std('#2a1408', 0.5), x, 1.6, z);
      const r = random(11);
      for (let s = 0; s < 5; s++) for (let i = 0; i < 18; i++) add(g, B(0.25, 0.4 + r() * 0.1, 0.18 + r() * 0.06), std(['#5a1a14', '#1a3a2a', '#2a2a4a', '#6a5a2a'][Math.floor(r() * 4)], 0.8), x + w / 2 - 0.1, 0.4 + s * 0.6, z - d / 2 + 0.3 + i * 0.42);
      break;
    }
    case 'hostdesk': {
      add(g, B(w, 1.1, d), std('#1a0e0a', 0.3, 0.3), x, 0.55, z);
      add(g, B(w + 0.1, 0.06, d + 0.1), gold(), x, 1.12, z);
      add(g, C(0.1, 0.1, 0.4, 10), std('#f6f2ea', 0.4), x + 1.2, 1.35, z);
      for (let i = 0; i < 5; i++) add(g, new THREE.SphereGeometry(0.09, 8, 6), std('#ff2a4a', 0.7), x + 1.2 + Math.cos(i) * 0.1, 1.6, z + Math.sin(i) * 0.1);
      break;
    }
    case 'photos': {
      for (let i = 0; i < 7; i++) add(g, new THREE.PlaneGeometry(0.8, 1), new THREE.MeshStandardMaterial({ map: photoTexture(i + 3), roughness: 0.8 }), x - 3.3 + i * 1.1, 2.1 + (i % 2) * 0.25, z + 0.2);
      sign(g, 'VEINTICINCO AÑOS DE NOCHES', '#ffd28a', x, 3.4, z + 0.25, 6, 0, 'bold 44px Georgia, serif');
      break;
    }
    case 'velvet': {
      for (const s of [-1, 1]) {
        add(g, C(0.05, 0.05, 1, 10), gold(), x, 0.5, z + s * 0.6);
        add(g, new THREE.SphereGeometry(0.08, 10, 8), gold(), x, 1.04, z + s * 0.6);
      }
      const rope = add(g, new THREE.TorusGeometry(0.6, 0.035, 6, 20, Math.PI), std('#8a0a1e', 0.6), x, 0.95, z);
      rope.rotation.set(Math.PI, Math.PI / 2, 0);
      break;
    }
    case 'deckchair': {
      const chair = add(g, B(w, 0.12, d), std('#f2ede4', 0.7), x, 0.4, z); chair.rotation.x = -0.15;
      add(g, B(w, 0.3, 0.6), std('#f2ede4', 0.7), x, 0.6, z - d / 2 + 0.3).rotation.x = -0.9;
      break;
    }
    case 'firepit': {
      add(g, C(w / 2, w / 2, 0.45, 24), std('#2a2a2e', 0.4, 0.5), x, 0.225, z);
      for (let i = 0; i < 7; i++) {
        const flame = add(g, new THREE.ConeGeometry(0.18, 0.7, 8), bright(i % 2 ? '#ff8a2a' : '#ffd23f', 0.85), x + Math.cos(i) * 0.5, 0.75, z + Math.sin(i) * 0.5);
        anim.flames.push(flame);
      }
      const light = new THREE.PointLight('#ff8a3a', low ? 12 : 24, 10, 1.6); light.position.set(x, 1.4, z); g.add(light);
      break;
    }
  }
}

const marbleMaterials = new Map<number, THREE.Material>();
function marble() {
  let m = marbleMaterials.get(0);
  if (!m) { m = new THREE.MeshStandardMaterial({ map: marbleTexture(), roughness: 0.18, metalness: 0.05 }); marbleMaterials.set(0, m); }
  return m;
}
function damask(floor: number) {
  let m = marbleMaterials.get(10 + floor);
  if (!m) {
    const t = floor === 3 ? damaskTexture('#123a30', '#1a4a3e') : floor === 2 ? damaskTexture('#2e1c52', '#3e2a6a') : damaskTexture('#3a0a14', '#4a0e1c');
    t.repeat.set(1, 1);
    m = new THREE.MeshStandardMaterial({ map: t, roughness: 0.8 });
    marbleMaterials.set(10 + floor, m);
  }
  return m;
}

function jets(g: THREE.Object3D, anim: Anim, centres: number[][], count: number, radius: number, height: number, width = 0.12) {
  const geometry = new THREE.CylinderGeometry(0.008 * width * 10, 0.05 * width * 10, 1, 6, 1, true);
  geometry.translate(0, 0.5, 0);
  const mesh = new THREE.InstancedMesh(geometry, new THREE.MeshBasicMaterial({ color: '#cfe8ff', transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }), centres.length * count);
  const base: THREE.Vector3[] = [];
  const m = new THREE.Matrix4();
  let k = 0;
  for (const [cx, cz] of centres) for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const p = new THREE.Vector3(cx + Math.cos(a) * radius, 0.5, cz + Math.sin(a) * radius);
    base.push(new THREE.Vector3(p.x, height, p.z));
    m.makeScale(1, height, 1); m.setPosition(p); mesh.setMatrixAt(k++, m);
  }
  mesh.frustumCulled = false;
  g.add(mesh);
  anim.jets.push({ mesh, base });
}

// ---------------------------------------------------------------- floors

function buildFloor(id: number, anim: Anim, low: boolean) {
  const info = FLOORS.find(f => f.id === id)!;
  const g = new THREE.Group();
  g.name = `Piso ${id}`;
  g.position.y = info.y;
  const b = info.bounds;
  const inner = { minX: -42, maxX: 42, minZ: -52, maxZ: id === 3 ? 0 : 20 };
  const w = inner.maxX - inner.minX, d = inner.maxZ - inner.minZ;
  const cx = (inner.minX + inner.maxX) / 2, cz = (inner.minZ + inner.maxZ) / 2;

  // Floors: carpet everywhere, marble in the lobby, wood and special rooms.
  const carpet = id === 1 ? carpetTexture('#4a0d1c', '#c9a24a', '#1f6e6a') : id === 2 ? carpetTexture('#1a1036', '#d4af37', '#9b2a6a') : carpetTexture('#0c2a24', '#c9a24a', '#5a1030');
  carpet.repeat.set(w / 1.7, d / 1.7);
  const floor = add(g, new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ map: carpet, roughness: 0.92 }), cx, 0.005, cz);
  floor.rotation.x = -Math.PI / 2;
  const patch = (x0: number, z0: number, x1: number, z1: number, material: THREE.Material, y = 0.012) => {
    const p = add(g, new THREE.PlaneGeometry(x1 - x0, z1 - z0), material, (x0 + x1) / 2, y, (z0 + z1) / 2);
    p.rotation.x = -Math.PI / 2;
    return p;
  };
  const marbleFloor = new THREE.MeshStandardMaterial({ map: marbleTexture('#a99e8b', 'rgba(60,50,40,.4)'), roughness: 0.28, metalness: 0.05 });
  (marbleFloor.map as THREE.Texture).repeat.set(6, 3);
  const wood = (base: string) => { const m = new THREE.MeshStandardMaterial({ map: woodTexture(base, '#120804'), roughness: 0.45 }); (m.map as THREE.Texture).repeat.set(5, 5); return m; };
  if (id === 1) {
    patch(-42, 0, 42, 20, marbleFloor);
    patch(-42, -0.15, 42, 0.15, gold(), 0.016);
    patch(-14, -50, 2, -34, wood('#3a1a0c'));
  }
  if (id === 2) {
    patch(-42, -24, -16, 20, wood('#2a140a'));
    const chapel = new THREE.MeshStandardMaterial({ map: marbleTexture('#f7f4ee', 'rgba(220,180,190,.35)'), roughness: 0.2 });
    patch(-10, 6, 10, 20, chapel);
    patch(16, 2, 42, 20, std('#060608', 0.15, 0.3));
  }
  if (id === 3) {
    patch(-42, -22, -16, 0, wood('#2a1208'));
    patch(-42, -52, -16, -26, wood('#1e0e06'));
    const deck = wood('#6a4a2a'); (deck.map as THREE.Texture).repeat.set(12, 6);
    patch(-30, 0, 30, 26, deck, 0.004);
  }

  // Ceiling with coffers and little lights; the terrace has none.
  const ceiling = new THREE.MeshStandardMaterial({ map: ceilingTexture(id === 2 ? '#7a5ad0' : '#8a6a2a', '#ffe7b0'), roughness: 0.8, emissive: '#ffffff', emissiveIntensity: 0.12 });
  (ceiling.map as THREE.Texture).repeat.set(w / 6, d / 6);
  ceiling.emissiveMap = ceiling.map;
  const top = add(g, new THREE.PlaneGeometry(w, d), ceiling, cx, CEILING, cz);
  top.rotation.x = Math.PI / 2;
  for (let i = 0; i < 6; i++) add(g, B(w, 0.06, 0.1), bright(id === 2 ? '#b59aff' : '#ffcf7a', 0.9), cx, CEILING - 0.05, inner.minZ + 6 + i * (d - 12) / 5);

  // Walls with wallpaper, a gold rail and a dark base.
  const wallMat = damask(id);
  for (const seg of WALLS[id as 1 | 2 | 3] ?? []) {
    const [x0, z0, x1, z1] = seg as number[];
    const length = Math.hypot(x1 - x0, z1 - z0);
    if (length < 0.01) continue;
    const terrace = id === 3 && z0 >= 0 && z1 >= 0;
    const h = terrace ? 1.1 : CEILING;
    const mat = terrace ? new THREE.MeshStandardMaterial({ color: '#bfe2ff', transparent: true, opacity: 0.22, roughness: 0.05 }) : wallMat.clone();
    if (!terrace) { const t = (mat as THREE.MeshStandardMaterial).map!.clone(); t.needsUpdate = true; t.repeat.set(Math.max(1, length / 2), 1); (mat as THREE.MeshStandardMaterial).map = t; }
    const wall = add(g, B(x0 === x1 ? WALL : length, h, x0 === x1 ? length : WALL), mat, (x0 + x1) / 2, h / 2, (z0 + z1) / 2);
    wall.castShadow = false;
    if (terrace) { add(g, B(x0 === x1 ? 0.08 : length, 0.08, x0 === x1 ? length : 0.08), gold(), (x0 + x1) / 2, 1.12, (z0 + z1) / 2); continue; }
    add(g, B(x0 === x1 ? WALL + 0.04 : length, 0.08, x0 === x1 ? length : WALL + 0.04), gold(), (x0 + x1) / 2, 2.4, (z0 + z1) / 2);
    add(g, B(x0 === x1 ? WALL + 0.03 : length, 0.35, x0 === x1 ? length : WALL + 0.03), std('#0d0a0a', 0.5), (x0 + x1) / 2, 0.175, (z0 + z1) / 2);
  }
  if (id !== 1) {
    // Upper floors look out over the city through tall windows on the south wall.
    const view = new THREE.MeshBasicMaterial({ map: windowsTexture(40 + id, false), toneMapped: false });
    (view.map as THREE.Texture).repeat.set(6, 1);
    if (id === 2) add(g, new THREE.PlaneGeometry(60, 4), view, 0, 3, 19.7, Math.PI).visible = false;
  }

  // The elevator bank: two gold doors, a frame, the floor indicator.
  const doors: Doors = { floor: id, panels: [], open: 0 };
  for (const dx of ELEVATOR.doors) {
    add(g, B(2.8, 3.6, 0.2), std('#1a0e0a', 0.35, 0.4), dx, 1.8, ELEVATOR.wallZ + 0.4);
    const frame = add(g, B(3, 0.25, 0.3), gold(), dx, 3.7, ELEVATOR.wallZ + 0.45); frame.castShadow = false;
    const left = add(g, B(1.05, 3.1, 0.08), std('#d4b060', 0.22, 0.95), dx - 0.53, 1.55, ELEVATOR.wallZ + 0.55);
    const right = add(g, B(1.05, 3.1, 0.08), std('#d4b060', 0.22, 0.95), dx + 0.53, 1.55, ELEVATOR.wallZ + 0.55);
    add(g, B(1.2, 0.35, 0.05), bright('#1a0e0a'), dx, 4.15, ELEVATOR.wallZ + 0.6);
    sign(g, `${id}`, '#ff3b3b', dx, 4.15, ELEVATOR.wallZ + 0.64, 1.2, 0, 'bold 96px monospace');
    doors.panels.push({ left, right, x: dx });
  }
  sign(g, 'ASCENSORES', '#ffd28a', 31, 4.9, ELEVATOR.wallZ + 0.62, 6);
  for (const s of [-1, 1]) add(g, C(0.3, 0.3, 0.1, 16), bright('#ffd28a'), 31 + s * 0.15, 1.2, ELEVATOR.wallZ + 0.52).rotation.x = Math.PI / 2;

  // Furniture.
  const screens: THREE.MeshStandardMaterial[] = [];
  if (id === 1) for (let i = 0; i < 6; i++) {
    const map = slotTexture(i);
    const m = new THREE.MeshStandardMaterial({ map, emissive: '#ffffff', emissiveMap: map, emissiveIntensity: 0.9, roughness: 0.3 });
    screens.push(m); anim.slotMaterials.push(m);
  }
  for (const item of FURNITURE[id as 1 | 2 | 3] as Item[]) buildItem(g, item, id, anim, screens, low);

  // Room signs and floor-specific dressing.
  if (id === 1) {
    sign(g, 'TRAGAMONEDAS', '#ff2d55', 26, 4.8, 13.4, 9, 0);
    sign(g, 'RULETA', '#ffd23f', -24, 4.6, -3.2, 6, 0);
    sign(g, 'BLACKJACK', '#2fd3ff', -4, 4.6, -9.6, 6, 0);
    sign(g, 'DADOS', '#3dff8b', 8, 4.6, -21.6, 5, 0);
    sign(g, 'BIENVENIDA', '#f2e6c4', 0, 4.8, 19.6, 6, Math.PI, 'bold 56px Georgia, serif');
  }
  if (id === 2) {
    sign(g, 'SALÓN ESMERALDA', '#3dff8b', -29, 4.6, -23.6, 8, 0);
    sign(g, 'PÓKER', '#3dff8b', -16.3, 3.6, -11, 4, Math.PI / 2);
    sign(g, 'TEATRO', '#ffd23f', 16.3, 4.4, -19, 5, -Math.PI / 2);
    sign(g, 'CAPILLA', '#ff8ab0', 0, 5.2, 5.7, 5, Math.PI);
  }
  if (id === 3) {
    sign(g, 'SALÓN PRIVADO', '#ffd28a', 14.3, 4.4, -44, 6, Math.PI / 2);
    sign(g, 'SALA DE PUROS', '#ffb070', -16.3, 4.4, -39, 6, Math.PI / 2);
    sign(g, 'DIRECCIÓN', '#ffd28a', -16.3, 4.4, -10, 5, Math.PI / 2);
    sign(g, 'TERRAZA', '#f2e6c4', 0, 5.2, -0.3, 5, Math.PI);
  }

  // Lights: warm pools across the floor; the shader keeps their number low.
  const lightSpots: [number, number, string][] = id === 1
    ? [[-20, 12, '#ffd9a0'], [26, -2, '#ff9ab0'], [-18, -14, '#ffcf8a'], [8, -26, '#ffcf8a'], [-6, -42, '#ffb070'], [-36, -40, '#ffd9a0'], [31, -46, '#ffd9a0']]
    : id === 2
      ? [[-30, -38, '#9adfff'], [-28, -4, '#c0ffd0'], [0, -42, '#ffd9a0'], [21, -25, '#ffcf8a'], [0, 13, '#ffe0ea'], [31, -46, '#ffd9a0'], [0, -20, '#ffe2b8'], [28, -14, '#ffd9a0']]
      : [[0, -42, '#ffd9a0'], [-30, -38, '#ff9a5a'], [-30, -12, '#ffcf8a'], [0, -16, '#ffd9a0'], [31, -46, '#ffd9a0'], [24, -20, '#ffcf8a']];
  for (const [x, z, color] of low ? lightSpots.slice(0, 4) : lightSpots) {
    const light = new THREE.PointLight(color, 42, 22, 1.5);
    light.position.set(x, CEILING - 0.6, z);
    g.add(light);
  }
  if (id === 3) {
    const moon = new THREE.DirectionalLight('#9ab0ff', 0.9);
    moon.position.set(-20, 30, 40);
    g.add(moon);
  }
  void b;
  return { group: g, doors };
}

// ---------------------------------------------------------------- outside

function buildExterior(anim: Anim, low: boolean) {
  const g = new THREE.Group();
  g.name = 'El Strip';
  const paving = canvas(128, 128, ctx => {
    ctx.fillStyle = '#4a4440'; ctx.fillRect(0, 0, 128, 128);
    ctx.strokeStyle = '#2e2a28'; ctx.lineWidth = 2;
    for (let i = 0; i <= 128; i += 32) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 128); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(128, i); ctx.stroke(); }
  }, true);
  paving.repeat.set(30, 12);
  const plaza = add(g, new THREE.PlaneGeometry(240, 30), new THREE.MeshStandardMaterial({ map: paving, roughness: 0.6, metalness: 0.15 }), 0, 0, 35);
  plaza.rotation.x = -Math.PI / 2;
  const road = canvas(256, 64, ctx => {
    ctx.fillStyle = '#18181c'; ctx.fillRect(0, 0, 256, 64);
    ctx.fillStyle = '#e8d070'; ctx.fillRect(0, 31, 256, 2);
    ctx.fillStyle = '#f2f2f2'; for (let i = 0; i < 256; i += 32) { ctx.fillRect(i, 15, 16, 1.5); ctx.fillRect(i, 47, 16, 1.5); }
  }, true);
  road.repeat.set(24, 1);
  const asphalt = add(g, new THREE.PlaneGeometry(400, 16), new THREE.MeshStandardMaterial({ map: road, roughness: 0.5, metalness: 0.2 }), 0, 0.002, 58);
  asphalt.rotation.x = -Math.PI / 2;
  const far = add(g, new THREE.PlaneGeometry(400, 160), std('#141418', 0.9), 0, -0.01, 140);
  far.rotation.x = -Math.PI / 2;
  const back = add(g, new THREE.PlaneGeometry(400, 200), std('#141418', 0.9), 0, -0.01, -80);
  back.rotation.x = -Math.PI / 2;
  // Curbs.
  add(g, B(400, 0.2, 0.4), std('#8a8580', 0.6), 0, 0.1, 49.8);
  add(g, B(400, 0.2, 0.4), std('#8a8580', 0.6), 0, 0.1, 66.2);

  // The dancing fountains on both sides of the drive.
  for (const sx of [-1, 1]) {
    const x0 = sx < 0 ? -42 : 9, x1 = sx < 0 ? -9 : 42;
    const cx = (x0 + x1) / 2;
    add(g, B(x1 - x0, 0.5, 11.6), std('#d8d2c4', 0.4), cx, 0.25, 32.8);
    const water = add(g, new THREE.PlaneGeometry(x1 - x0 - 0.8, 10.8), new THREE.MeshStandardMaterial({ color: '#0e3a5a', roughness: 0.05, metalness: 0.7, emissive: '#0a3a6a', emissiveIntensity: 0.5 }), cx, 0.52, 32.8);
    water.rotation.x = -Math.PI / 2;
    const centres: number[][] = [];
    for (let i = 0; i < 9; i++) centres.push([x0 + 2.5 + i * ((x1 - x0 - 5) / 8), 32.8, i]);
    jets(g, anim, centres, low ? 3 : 5, 0.5, 9, 0.12);
  }
  // Palms along the drive and the street.
  for (let i = 0; i < 4; i++) {
    addPalm(g, -8.2, 30 + i * 4.6, 7 + (i % 3), 50 + i);
    addPalm(g, 8.2, 30 + i * 4.6, 7 + ((i + 1) % 3), 70 + i);
  }
  for (let i = -6; i <= 6; i++) addPalm(g, i * 14 + 3, 47.6, 8 + (i % 2), 90 + i);

  // The casino itself: facade, entrance canopy and a gold tower.
  const facadeWin = windowsTexture(3, true);
  facadeWin.repeat.set(10, 3);
  const facade = new THREE.MeshStandardMaterial({ color: '#4a3618', map: facadeWin, emissive: '#ffffff', emissiveMap: facadeWin, emissiveIntensity: 0.85, roughness: 0.25, metalness: 0.6 });
  add(g, B(86, 21, 1), facade, 0, 10.5 + FLOOR_H * 0, 20.6).position.y = 13.5;
  add(g, B(10, 6, 1), std('#1a0e0a', 0.3, 0.4), -0, 3, 20.6).visible = false;
  for (const sx of [-1, 1]) add(g, B(38, 6, 1), std('#2a1a0a', 0.3, 0.5), sx * 23.5, 3, 20.6);
  add(g, B(86, 0.6, 1.2), gold(), 0, 6.1, 20.8);
  const glassDoor = new THREE.MeshStandardMaterial({ color: '#ffd9a0', transparent: true, opacity: 0.18, roughness: 0.05, metalness: 0.5, emissive: '#ffb060', emissiveIntensity: 0.25 });
  for (const sx of [-2.6, 2.6]) add(g, B(0.08, 5, 0.1), gold(), sx, 2.5, 20.6);
  add(g, B(9, 5, 0.06), glassDoor, 0, 2.5, 20.65).castShadow = false;
  // Canopy over the drive with a ceiling of bulbs.
  add(g, B(16, 0.6, 9), std('#1a0e0a', 0.3, 0.6), 0, 6.4, 25);
  add(g, B(16.2, 0.25, 9.2), gold(), 0, 6.1, 25);
  const bulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.08, 6, 4), bright('#fff1c9'), 120);
  { const m = new THREE.Matrix4(); let k = 0; for (let i = 0; i < 15; i++) for (let j = 0; j < 8; j++) { m.makeTranslation(-7 + i, 5.95, 21.2 + j * 1.05); bulbs.setMatrixAt(k++, m); } }
  g.add(bulbs);
  for (const sx of [-7.6, 7.6]) for (const sz of [21.2, 29]) add(g, C(0.3, 0.3, 6.1, 14), gold(), sx, 3.05, sz);
  const canopyLight = new THREE.PointLight('#ffd9a0', low ? 25 : 40, 18, 1.8);
  canopyLight.position.set(0, 5, 25);
  g.add(canopyLight);
  // Tower behind, rising over the casino.
  const towerWin = windowsTexture(17, true); towerWin.repeat.set(6, 8);
  const tower = new THREE.MeshStandardMaterial({ color: '#6a4a18', map: towerWin, emissive: '#ffffff', emissiveMap: towerWin, emissiveIntensity: 0.9, roughness: 0.2, metalness: 0.7 });
  add(g, B(56, 80, 22), tower, 0, 24 + 40, -30);
  add(g, B(56.4, 1.2, 22.4), bright('#ffd28a'), 0, 104, -30);
  add(g, B(44, 1, 16), bright('#ffd28a'), 0, 24 + 82, -30);
  // The name on top of the casino.
  sign(g, 'EL GRAN MERIDIANO', '#ff2d3a', 0, 27, 21.2, 46, 0, 'bold 64px Georgia, serif');
  sign(g, '★ CASINO · HOTEL · LAS VEGAS ★', '#ffd28a', 0, 21.6, 21.2, 30, 0, 'bold 40px Georgia, serif');
  sign(g, 'EL GRAN MERIDIANO', '#ffd28a', 0, 96, -18.8, 48, 0, 'bold 64px Georgia, serif');

  // A pylon with a moving screen.
  const pylon = new THREE.Group(); pylon.position.set(-16, 0, 45); g.add(pylon);
  add(pylon, B(1.2, 16, 1.2), gold(), 0, 8, 0);
  add(pylon, B(9, 5, 1.2), std('#120a0c', 0.3, 0.4), 0, 17, 0);
  const marqueeCanvas = document.createElement('canvas'); marqueeCanvas.width = 512; marqueeCanvas.height = 256;
  const marqueeCtx = marqueeCanvas.getContext('2d')!;
  const marqueeTexture = new THREE.CanvasTexture(marqueeCanvas); marqueeTexture.colorSpace = THREE.SRGBColorSpace;
  const marquee = new THREE.MeshBasicMaterial({ map: marqueeTexture, toneMapped: false });
  add(pylon, new THREE.PlaneGeometry(8.4, 4.4), marquee, 0, 17, 0.62);
  add(pylon, new THREE.PlaneGeometry(8.4, 4.4), marquee, 0, 17, -0.62, Math.PI);
  anim.marquee = { material: marquee, canvas: marqueeCanvas, ctx: marqueeCtx, texture: marqueeTexture };
  sign(pylon, 'GRAN MERIDIANO', '#ff2d3a', 0, 21.4, 0.7, 10, 0, 'bold 64px Georgia, serif');
  // A white limousine waiting at the door.
  const limo = makeCar('sedan', '#f2f0ea');
  limo.group.scale.set(1, 1, 1.7);
  placeVehicle(limo.group, -2.6, 25, Math.PI / 2);
  g.add(limo.group);

  // Traffic on the Strip.
  for (let i = 0; i < (low ? 6 : 12); i++) {
    const dir = i % 2 ? 1 : -1;
    const car = makeCar(i % 3 ? 'sedan' : 'coupe', ['#c8102e', '#121214', '#e8e2d0', '#2a5ad0', '#d4af37', '#6a6a72'][i % 6]);
    for (const s of [-1, 1]) {
      add(car.group, new THREE.SphereGeometry(0.12, 8, 6), bright('#fff6d8'), s * 0.65, 0.65, 2.15);
      add(car.group, new THREE.SphereGeometry(0.1, 8, 6), bright('#ff1a1a'), s * 0.7, 0.75, -2.15);
    }
    const x = -180 + i * 30;
    const z = dir > 0 ? 61.5 : 54.5;
    placeVehicle(car.group, x, z, dir > 0 ? Math.PI / 2 : -Math.PI / 2);
    g.add(car.group);
    anim.cars.push({ group: car.group, x, z, dir, speed: 9 + (i % 4) * 2.5 });
  }

  // The other side of the Strip: towers, signs, a pyramid and a wheel.
  const others: [number, number, number, number, number, string, string][] = [
    [-120, 100, 24, 90, 18, 'OASIS', '#2fd3ff'], [-80, 92, 20, 70, 16, 'IMPERIO', '#ffd23f'], [-35, 105, 30, 110, 20, 'LUNA AZUL', '#9b5cff'],
    [45, 98, 26, 80, 18, 'PALMERAS', '#3dff8b'], [130, 110, 30, 120, 22, 'CIELO ALTO', '#ff2d95'], [-160, 120, 22, 60, 18, 'SIRENA', '#ff7a1a'],
  ];
  others.forEach(([x, z, w, h, d, name, color], i) => {
    const t = windowsTexture(100 + i, i % 2 === 0); t.repeat.set(w / 10, h / 14);
    const m = new THREE.MeshStandardMaterial({ color: '#222', map: t, emissive: '#ffffff', emissiveMap: t, emissiveIntensity: 1, roughness: 0.3, metalness: 0.5 });
    add(g, B(w, h, d), m, x, h / 2, z);
    add(g, B(w + 0.4, 0.8, d + 0.4), bright(color), x, h, z);
    sign(g, name, color, x, h - 8, z - d / 2 - 0.4, w * 0.9, Math.PI, 'bold 80px sans-serif');
  });
  const pyramid = add(g, new THREE.ConeGeometry(40, 50, 4), std('#0b0b10', 0.2, 0.8), 95, 25, 120, Math.PI / 4);
  pyramid.castShadow = false;
  const beam = add(g, C(0.8, 1.2, 300, 12), new THREE.MeshBasicMaterial({ color: '#e8f4ff', transparent: true, opacity: 0.28, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }), 95, 200, 120);
  beam.castShadow = false;
  const wheel = new THREE.Group(); wheel.position.set(-70, 46, 80); g.add(wheel);
  const rim = add(wheel, new THREE.TorusGeometry(40, 0.6, 8, 80), std('#e8e8f0', 0.3, 0.8, '#ff2d95', 0.6), 0, 0, 0); rim.rotation.y = Math.PI / 2;
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    const pod = add(wheel, new THREE.SphereGeometry(1.5, 12, 8), bright(i % 2 ? '#ff2d95' : '#2fd3ff'), 0, Math.cos(a) * 40, Math.sin(a) * 40);
    pod.scale.set(1, 0.8, 1);
    const spoke = add(wheel, C(0.15, 0.15, 40, 4), std('#c8c8d0', 0.4, 0.8), 0, Math.cos(a) * 20, Math.sin(a) * 20);
    spoke.rotation.x = a;
  }
  add(g, C(1.2, 2, 46, 10), std('#c8c8d0', 0.4, 0.8), -70, 23, 80);
  anim.spin.push({ object: wheel, speed: 0.04, axis: 'z' });
  // Mountains and stars.
  const mountains = add(g, new THREE.CylinderGeometry(600, 600, 60, 48, 1, true), new THREE.MeshBasicMaterial({ color: '#0d0b1a', side: THREE.BackSide }), 0, 10, 0);
  mountains.scale.y = 1; mountains.castShadow = false;
  const starCount = 600;
  const positions = new Float32Array(starCount * 3);
  const r = random(42);
  for (let i = 0; i < starCount; i++) {
    const a = r() * Math.PI * 2, e = 0.15 + r() * 1.2, R = 700;
    positions.set([Math.cos(a) * Math.cos(e) * R, Math.sin(e) * R, Math.sin(a) * Math.cos(e) * R], i * 3);
  }
  const stars = new THREE.BufferGeometry(); stars.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  g.add(new THREE.Points(stars, new THREE.PointsMaterial({ color: '#ffffff', size: 1.6, sizeAttenuation: false })));
  // A helicopter circling the Strip.
  const heli = new THREE.Group();
  add(heli, new THREE.SphereGeometry(1.2, 14, 10), std('#1a1a22', 0.3, 0.6), 0, 0, 0).scale.set(1, 0.8, 1.7);
  add(heli, B(0.3, 0.3, 4), std('#1a1a22', 0.3, 0.6), 0, 0.2, -2.6);
  const rotor = add(heli, B(7, 0.05, 0.3), std('#333', 0.5), 0, 1.1, 0);
  add(heli, new THREE.SphereGeometry(0.15, 8, 6), bright('#ff1a1a'), 0, -0.9, 1.5);
  const searchlight = add(heli, new THREE.ConeGeometry(4, 40, 20, 1, true), new THREE.MeshBasicMaterial({ color: '#fff6d8', transparent: true, opacity: 0.08, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false }), 0, -20, 0);
  searchlight.castShadow = false;
  g.add(heli);
  anim.helicopter = heli; anim.rotor = rotor;
  return g;
}

// ---------------------------------------------------------------- people

function smokerFor(person: Person, cigar: boolean): Smoker {
  const rig = person.rig as unknown as { handR: THREE.Object3D };
  const stick = new THREE.Group();
  const body = add(stick, C(cigar ? 0.012 : 0.005, cigar ? 0.012 : 0.005, cigar ? 0.13 : 0.08, 6), std(cigar ? '#5a3418' : '#f4f0e6', 0.8), 0, 0, 0);
  body.rotation.x = Math.PI / 2;
  const ember = add(stick, new THREE.SphereGeometry(cigar ? 0.014 : 0.007, 6, 4), bright('#ff5a1a'), 0, 0, cigar ? 0.068 : 0.042);
  stick.position.set(0.02, -0.075, 0.05);
  rig.handR.add(stick);
  const puffs: THREE.Sprite[] = [];
  for (let i = 0; i < 7; i++) {
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: puff(), transparent: true, depthWrite: false, opacity: 0 }));
    sprite.scale.setScalar(0.2);
    puffs.push(sprite);
  }
  return { person, puffs, tip: ember, phase: Math.random() * 10, cigar };
}

function heroineLook(): Look { return HEROINE.look as Look; }

// Valentina: a people3d woman with long wavy hair, red lips, heels and a
// gold clutch, built on top of the shared rig so she animates like everyone.
export function createHeroine(shadows: boolean) {
  const person = createPerson(heroineLook(), shadows);
  const hairMat = std('#e9cf8a', 0.55, 0.15);
  const head = person.parts.head;
  // A long mane down the back, wider at the ends, plus two front locks.
  const mane = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.16, 0.62, 18, 4, true, Math.PI * 0.62, Math.PI * 1.76), hairMat);
  mane.position.set(0, -0.14, -0.035);
  mane.scale.set(1, 1, 0.82);
  mane.castShadow = shadows;
  head.add(mane);
  const crown = new THREE.Mesh(new THREE.SphereGeometry(0.118, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.62), hairMat);
  crown.position.set(0, 0.118, -0.012);
  crown.scale.set(0.98, 1.02, 1.04);
  head.add(crown);
  for (const s of [-1, 1]) {
    const lock = new THREE.Mesh(new THREE.CapsuleGeometry(0.032, 0.36, 4, 8), hairMat);
    lock.position.set(s * 0.085, -0.13, 0.05);
    lock.rotation.z = s * 0.08;
    lock.castShadow = shadows;
    head.add(lock);
  }
  const rig = person.rig as unknown as { lip: THREE.Mesh; handL: THREE.Object3D };
  (rig.lip.material as THREE.MeshStandardMaterial) = std('#b0081e', 0.35);
  // Gold clutch in the left hand.
  const clutch = add(rig.handL, B(0.2, 0.11, 0.04), std('#d4af37', 0.25, 0.9), 0, -0.1, 0.03);
  clutch.rotation.z = 0.1;
  // Heels under the shoes.
  for (const shin of [person.parts.shinL, person.parts.shinR]) {
    add(shin, C(0.012, 0.008, 0.07, 6), std('#5a0410', 0.3), 0, -0.4 - 0.05, -0.04);
  }
  // A thin gold necklace.
  const necklace = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.005, 6, 24), gold());
  necklace.rotation.x = Math.PI / 2.4;
  necklace.position.set(0, 0.47, 0.02);
  person.parts.torso.add(necklace);
  addBlobShadow(person, 1);
  return person;
}

function npcFor(look: Look, pose: string, x: number, z: number, y: number, heading: number, floor: number, opts: { smoke?: boolean; cigar?: boolean; scene?: string; main?: boolean; walk?: Npc['walk']; seat?: boolean; mood?: string } = {}): Npc {
  const person = createPerson(look, false);
  setPose(person, pose, pose === 'sit');
  if (opts.mood) setMood(person, opts.mood);
  person.root.position.set(x, y, z);
  person.root.rotation.y = heading;
  addBlobShadow(person, 0.9);
  const npc: Npc = { person, floor, scene: opts.scene, x, z, y, heading, walk: opts.walk, dir: 1, main: opts.main };
  if (opts.smoke) npc.smoker = smokerFor(person, Boolean(opts.cigar));
  return npc;
}

const CROWD_LOOKS: Look[] = [
  { skin: '#e8c0a0', age: 'old', body: 'f', hairStyle: 'curly', hairColor: '#d8d0e0', top: 'sweater', topColor: '#3a6aa8', bottom: 'pants', bottomColor: '#2a2a30' },
  { skin: '#c48f69', age: 'adult', body: 'm', hairStyle: 'cap', hairColor: '#1a1210', top: 'shirt', topColor: '#d8a040', bottom: 'jeans', bottomColor: '#24304a' },
  { skin: '#8d5a3c', age: 'adult', body: 'f', hairStyle: 'long', hairColor: '#120d0b', top: 'dress', topColor: '#d43a6a', extras: ['earrings'] },
  { skin: '#f0d0b4', age: 'old', body: 'm', hairStyle: 'bald', hairColor: '#999', top: 'jacket', topColor: '#5a4632', bottom: 'pants', bottomColor: '#2a2a2a', extras: ['glasses'] },
  { skin: '#b9825c', age: 'young', body: 'f', hairStyle: 'ponytail', hairColor: '#6a2a18', top: 'uniform', topColor: '#8a0a1e', bottom: 'skirt', bottomColor: '#121214' },
  { skin: '#dcae88', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#3a2a20', top: 'suit', topColor: '#2a3a5a', bottom: 'pants', bottomColor: '#1a1a20' },
];

function buildPeople(low: boolean) {
  const npcs: Npc[] = [];
  for (const scene of SCENES) {
    const main = npcFor(scene.look as Look, scene.pose, scene.npc.x, scene.npc.z, FLOORS[scene.floor - 1].y, scene.npc.heading, scene.floor, { smoke: scene.smoke, cigar: scene.cigar, scene: scene.id, main: true, mood: scene.mood });
    npcs.push(main);
    for (const extra of scene.extras ?? []) {
      npcs.push(npcFor(extra.look as Look, extra.pose, extra.x, extra.z, FLOORS[scene.floor - 1].y, extra.heading, scene.floor, { smoke: extra.smoke, cigar: extra.cigar, scene: scene.id, mood: extra.mood }));
    }
  }
  for (const [floorId, list] of Object.entries(CROWD)) {
    const floor = Number(floorId);
    (list as { x: number; z: number; y?: number; heading: number; pose: string; smoke?: boolean; walk?: Npc['walk'] }[]).forEach((c, i) => {
      if (low && i % 2) return;
      const look = { ...CROWD_LOOKS[(i + floor) % CROWD_LOOKS.length], seed: floor * 100 + i * 7 };
      npcs.push(npcFor(look, c.pose, c.x, c.z, FLOORS[floor - 1].y + (c.y ?? 0), c.heading, floor, { smoke: c.smoke, walk: c.walk }));
    });
  }
  return npcs;
}

// ---------------------------------------------------------------- spots

function buildSpot(id: string, floor: number, x: number, z: number, y: number): Spot {
  const group = new THREE.Group();
  group.position.set(x, y + 0.03, z);
  const material = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.85, depthWrite: false, toneMapped: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.98, 1.18, 48), material);
  ring.rotation.x = -Math.PI / 2;
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.98, 48), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.12, depthWrite: false, toneMapped: false }));
  disc.rotation.x = -Math.PI / 2;
  const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.11), material);
  gem.position.y = 2.3;
  group.add(ring, disc, gem);
  return { id, floor, group, ring, gem, material };
}

// ---------------------------------------------------------------- the whole casino

export function buildCasino(scene: THREE.Scene, opts: { low: boolean; shadows: boolean }): Casino {
  const anim: Anim = { roulette: [], slotMaterials: [], flicker: [], spin: [], jets: [], beams: [], flames: [], cars: [], haze: [] };
  const floors: Record<number, THREE.Group> = {};
  const doors: Doors[] = [];
  for (const f of FLOORS) {
    const built = buildFloor(f.id, anim, opts.low);
    batchStatic(built.group, [
      ...anim.roulette, ...anim.spin.map(s => s.object), ...anim.beams, ...anim.flames,
      ...built.doors.panels.flatMap(p => [p.left, p.right]),
      ...(anim.dance ? [anim.dance] : []), ...anim.jets.map(j => j.mesh),
    ]);
    floors[f.id] = built.group;
    doors.push(built.doors);
    scene.add(built.group);
  }
  const exterior = buildExterior(anim, opts.low);
  scene.add(exterior);

  const npcs = buildPeople(opts.low);
  for (const npc of npcs) {
    floors[npc.floor].add(npc.person.root);
    npc.person.root.position.y -= FLOORS[npc.floor - 1].y;
    if (npc.smoker) for (const p of npc.smoker.puffs) floors[npc.floor].add(p);
    if (npc.person.seated && !npc.walk) {
      // Every seated person gets a seat under them.
      const back = new THREE.Vector3(0, 0, -0.12).applyAxisAngle(new THREE.Vector3(0, 1, 0), npc.heading);
      stool(floors[npc.floor], npc.x + back.x, npc.z + back.z, 0.52, '#3a0e1c');
    }
  }

  const spots = SCENES.map(s => {
    const spot = buildSpot(s.id, s.floor, s.spot.x, s.spot.z, 0);
    floors[s.floor].add(spot.group);
    return spot;
  });
  const elevatorMarkers: Record<number, THREE.Group> = {};
  for (const f of FLOORS) {
    const group = new THREE.Group();
    group.position.set(ELEVATOR.x, 0.03, ELEVATOR.z);
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.0, 1.2, 48), new THREE.MeshBasicMaterial({ color: '#ffd28a', transparent: true, opacity: 0.9, toneMapped: false, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2;
    const arrows = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.4), new THREE.MeshBasicMaterial({ map: canvas(128, 128, ctx => {
      ctx.fillStyle = '#ffd28a';
      ctx.beginPath(); ctx.moveTo(64, 14); ctx.lineTo(96, 54); ctx.lineTo(32, 54); ctx.fill();
      ctx.beginPath(); ctx.moveTo(64, 114); ctx.lineTo(96, 74); ctx.lineTo(32, 74); ctx.fill();
    }), transparent: true, toneMapped: false, depthWrite: false }));
    arrows.rotation.x = -Math.PI / 2;
    arrows.position.y = 0.01;
    group.add(ring, arrows);
    floors[f.id].add(group);
    elevatorMarkers[f.id] = group;
  }

  // Cigarette haze under the ceiling of the gaming floor and the cigar room.
  const hazeAt: [number, number, number][] = [[-16, -12, 1], [10, -20, 1], [26, -6, 1], [-6, -40, 1], [-30, -40, 3], [-30, -8, 2], [0, -42, 3]];
  for (const [x, z, floor] of hazeAt) for (let i = 0; i < (opts.low ? 2 : 4); i++) {
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: puff(), transparent: true, depthWrite: false, opacity: 0.1, color: '#d8d0c8' }));
    sprite.position.set(x + (i - 1.5) * 4, 3.6 + (i % 2) * 0.8, z + ((i * 7) % 5) - 2.5);
    sprite.scale.setScalar(9 + i * 2);
    sprite.userData.base = sprite.position.clone();
    floors[floor].add(sprite);
    anim.haze.push(sprite);
  }

  const heroine = createHeroine(opts.shadows);
  scene.add(heroine.root);

  const v = new THREE.Vector3();
  const marqueeLines = ['ESTA NOCHE · EL GRAN FAUSTINO', 'BUFÉ IMPERIAL · TODA LA NOCHE', 'PÓKER · SALÓN ESMERALDA', 'BODAS EXPRÉS · CAPILLA', 'JACKPOT 1.000.000 $'];
  let marqueeAt = -1;
  function animate(t: number, dt: number, floor: number) {
    for (const disc of anim.roulette) disc.rotation.y += dt * 3.4;
    for (const s of anim.spin) s.object.rotation[s.axis] += dt * s.speed;
    anim.slotMaterials.forEach((m, i) => { m.emissiveIntensity = 0.75 + 0.35 * Math.max(0, Math.sin(t * 3 + i * 1.7)); });
    anim.flicker.forEach((m, i) => { m.color.setHSL(((t * 0.08 + i * 0.13) % 1), 0.9, 0.55); });
    for (const beam of anim.beams) { beam.rotation.z = Math.sin(t * 0.9 + beam.position.x) * 0.5; beam.rotation.x = Math.cos(t * 0.7 + beam.position.z) * 0.4; }
    for (const [i, flame] of anim.flames.entries()) flame.scale.set(1, 0.7 + 0.4 * Math.abs(Math.sin(t * 7 + i)), 1);
    if (anim.dance && floor === 2 && Math.floor(t * 4) !== Math.floor((t - dt) * 4)) {
      const colors = ['#ff2d95', '#2fd3ff', '#9b5cff', '#ffd23f', '#3dff8b', '#120a18'];
      const c = new THREE.Color();
      for (let i = 0; i < 100; i++) { c.set(colors[(i * 7 + Math.floor(t * 4)) % colors.length]); anim.dance.setColorAt(i, c); }
      if (anim.dance.instanceColor) anim.dance.instanceColor.needsUpdate = true;
    }
    const m = new THREE.Matrix4();
    for (const { mesh, base } of anim.jets) {
      if (!mesh.parent?.visible && mesh.parent !== exterior) continue;
      base.forEach((p, i) => {
        const h = Math.max(0.2, p.y * (0.35 + 0.65 * Math.abs(Math.sin(t * 1.3 + i * 0.45))));
        m.makeScale(1, h, 1); m.setPosition(p.x, 0.5, p.z); mesh.setMatrixAt(i, m);
      });
      mesh.instanceMatrix.needsUpdate = true;
    }
    for (const car of anim.cars) {
      car.x += car.dir * car.speed * dt;
      if (car.x > 200) car.x -= 400; if (car.x < -200) car.x += 400;
      placeVehicle(car.group, car.x, car.z, car.dir > 0 ? Math.PI / 2 : -Math.PI / 2);
    }
    if (anim.helicopter) {
      const a = t * 0.07;
      anim.helicopter.position.set(Math.cos(a) * 120, 70 + Math.sin(t * 0.3) * 4, 90 + Math.sin(a) * 50);
      anim.helicopter.rotation.y = -a;
      if (anim.rotor) anim.rotor.rotation.y += dt * 30;
    }
    for (const [i, s] of anim.haze.entries()) {
      const base = s.userData.base as THREE.Vector3;
      s.position.set(base.x + Math.sin(t * 0.05 + i) * 2, base.y, base.z + Math.cos(t * 0.04 + i) * 2);
    }
    if (anim.marquee && Math.floor(t * 2) !== marqueeAt) {
      marqueeAt = Math.floor(t * 2);
      const { ctx, texture } = anim.marquee;
      const line = marqueeLines[Math.floor(t / 4) % marqueeLines.length];
      const hue = (t * 20) % 360;
      ctx.fillStyle = `hsl(${hue},70%,12%)`; ctx.fillRect(0, 0, 512, 256);
      for (let i = 0; i < 32; i++) { ctx.fillStyle = (i + marqueeAt) % 2 ? '#ffd28a' : '#7a4a10'; ctx.beginPath(); ctx.arc(8 + i * 16, 8, 5, 0, 7); ctx.fill(); ctx.beginPath(); ctx.arc(8 + i * 16, 248, 5, 0, 7); ctx.fill(); }
      ctx.fillStyle = `hsl(${(hue + 180) % 360},95%,62%)`; ctx.font = 'bold 40px Georgia, serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const words = line.split(' · ');
      words.forEach((w, i) => ctx.fillText(w, 256, 128 + (i - (words.length - 1) / 2) * 56));
      texture.needsUpdate = true;
    }
    for (const spot of spots) {
      if (spot.floor !== floor) continue;
      spot.gem.position.y = 2.3 + Math.sin(t * 2 + spot.group.position.x) * 0.12;
      spot.gem.rotation.y += dt * 1.5;
      spot.ring.scale.setScalar(1 + Math.sin(t * 3) * 0.03);
    }
    // People on this floor: walkers walk, smokers smoke.
    for (const npc of npcs) {
      if (npc.floor !== floor) continue;
      if (npc.walk) {
        const pos = npc.walk.axis === 'x' ? npc.x : npc.z;
        let next = pos + npc.dir * npc.walk.speed * dt;
        if (next > npc.walk.to || next < npc.walk.from) { npc.dir *= -1; next = Math.max(npc.walk.from, Math.min(npc.walk.to, next)); }
        if (npc.walk.axis === 'x') npc.x = next; else npc.z = next;
        npc.heading = npc.walk.axis === 'x' ? (npc.dir > 0 ? Math.PI / 2 : -Math.PI / 2) : (npc.dir > 0 ? 0 : Math.PI);
        npc.person.root.position.set(npc.x, npc.person.root.position.y, npc.z);
        npc.person.root.rotation.y = npc.heading;
      }
      animatePerson(npc.person, dt, npc.walk ? npc.walk.speed : 0, talking.has(npc.person));
      const smoker = npc.smoker;
      if (smoker) {
        smoker.phase += dt;
        const cycle = smoker.phase % 9;
        // Bring the hand to the mouth for a drag, then lower it.
        const lift = cycle < 1.4 ? Math.sin((cycle / 1.4) * Math.PI) : 0;
        const p = npc.person.parts;
        p.armR.rotation.x = p.armR.rotation.x * (1 - lift) + (-1.25) * lift;
        p.armR.rotation.z = p.armR.rotation.z * (1 - lift) + (0.18) * lift;
        p.foreR.rotation.x = p.foreR.rotation.x * (1 - lift) + (-1.75) * lift;
        if (lift === 0) { p.foreR.rotation.x = Math.min(p.foreR.rotation.x, -0.9); }
        smoker.tip.getWorldPosition(v);
        floors[npc.floor].worldToLocal(v);
        smoker.puffs.forEach((sprite, i) => {
          const age = (smoker.phase * 0.55 + i / smoker.puffs.length) % 1;
          if (age < 0.04) sprite.userData.from = v.clone();
          const from = (sprite.userData.from as THREE.Vector3 | undefined) ?? v;
          sprite.position.set(from.x + Math.sin(age * 6 + i) * 0.08, from.y + age * 1.1, from.z + Math.cos(age * 5 + i) * 0.08);
          sprite.scale.setScalar((smoker.cigar ? 0.16 : 0.1) + age * 0.6);
          (sprite.material as THREE.SpriteMaterial).opacity = (1 - age) * (smoker.cigar ? 0.55 : 0.4);
        });
      }
    }
  }

  return { floors, exterior, npcs, spots, elevatorMarkers, doors, heroine, animate };
}

void footprint;
