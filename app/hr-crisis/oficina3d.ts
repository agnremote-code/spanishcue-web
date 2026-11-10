// HR Crisis · the company in 3D: floors, walls and glass, the furniture, the
// people (cast, extras and walkers), the mission circles and the chaos that
// makes the place feel alive: a printer spitting paper, a coffee machine that
// smokes, phones that ring, a flickering light, a parrot that shouts and a
// wall clock that cannot decide what time it is.
import * as THREE from 'three';
import { batchStatic } from '../noche-abierta/build3d';
import { addBlobShadow, animatePerson, createPerson, randomLook, setMood, setPose, type Look, type Person } from '../noche-abierta/people3d';
import { CAST, CEILING, CROWD, DOORS, ENTRANCE, FURNITURE, ROOMS, SPOTS, WALKERS, WALL, WALLS, crowdSeated, walkerAt } from './oficina.mjs';

export type Npc = { key: string; person: Person; x: number; z: number; heading: number; seated: boolean; baseMood: string; seed: number; cast?: string; angryUntil?: number; body?: string };
export type Mover = { key: string; person: Person; walker: (typeof WALKERS)[number]; x: number; z: number; heading: number; moving: boolean; seed: number; angryUntil?: number; body?: string };
export type Spot = { id: string; ring: THREE.Mesh; tag: THREE.Sprite; material: THREE.MeshBasicMaterial; mission: number };
export type Oficina = {
  npcs: Npc[]; movers: Mover[]; spots: Spot[];
  bodies: () => { x: number; z: number; who: Npc | Mover }[];
  setSpots: (open: string[], done: string[]) => void;
  say: (who: Npc | Mover, text: string, seconds?: number, yell?: boolean) => void;
  animate: (t: number, dt: number, px: number, pz: number) => void;
};
export const talking = new WeakSet<Person>();
export const MISSION_COLORS = ['#ffffff', '#f6d21c', '#ff7a59', '#3fd08a', '#5aa8ff', '#c27bff', '#ff4f7a'];

const mats = new Map<string, THREE.MeshStandardMaterial>();
function std(color: string, roughness = 0.8, metalness = 0, extra: THREE.MeshStandardMaterialParameters = {}) {
  const k = `${color}|${roughness}|${metalness}|${JSON.stringify(extra)}`;
  let v = mats.get(k);
  if (!v) { v = new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra }); mats.set(k, v); }
  return v;
}
function texture(w: number, h: number, draw: (c: CanvasRenderingContext2D) => void, repeat = false) {
  const canvas = document.createElement('canvas');
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (ctx) draw(ctx);
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.anisotropy = 4;
  return t;
}
function label(text: string, bg = '#1d3f9a', fg = '#ffffff', w = 512, h = 112, font = 'bold 54px Arial, sans-serif') {
  return texture(w, h, c => { c.fillStyle = bg; c.fillRect(0, 0, w, h); c.fillStyle = fg; c.font = font; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(text, w / 2, h / 2 + 2); });
}
const box = (parent: THREE.Object3D, w: number, h: number, d: number, mat: THREE.Material, x: number, y: number, z: number, shadows = false) => {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  mesh.position.set(x, y, z); mesh.castShadow = shadows; mesh.receiveShadow = true; parent.add(mesh); return mesh;
};
const cyl = (parent: THREE.Object3D, rt: number, rb: number, h: number, mat: THREE.Material, x: number, y: number, z: number, seg = 12) => {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
  mesh.position.set(x, y, z); parent.add(mesh); return mesh;
};

// Office chair (visual only: the seated person sits on it).
function chair(g: THREE.Group, x: number, z: number, heading: number, color = '#2a2f3a') {
  const c = new THREE.Group(); c.position.set(x, 0, z); c.rotation.y = heading; g.add(c);
  box(c, 0.48, 0.07, 0.46, std(color, 0.6), 0, 0.45, 0);
  box(c, 0.46, 0.5, 0.06, std(color, 0.6), 0, 0.74, -0.24);
  cyl(c, 0.03, 0.03, 0.4, std('#9a9ea8', 0.3, 0.7), 0, 0.22, 0);
  for (let i = 0; i < 5; i++) { const leg = box(c, 0.05, 0.03, 0.3, std('#2a2a2a', 0.5), Math.sin(i * 1.256) * 0.13, 0.04, Math.cos(i * 1.256) * 0.13); leg.rotation.y = i * 1.256; }
}
function monitor(g: THREE.Group, x: number, y: number, z: number, heading: number, screen: THREE.Material) {
  const m = new THREE.Group(); m.position.set(x, y, z); m.rotation.y = heading; g.add(m);
  box(m, 0.56, 0.34, 0.03, std('#1a1a1e', 0.4), 0, 0.3, 0);
  const s = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.3), screen); s.position.set(0, 0.3, 0.017); m.add(s);
  box(m, 0.05, 0.14, 0.05, std('#2a2a2e', 0.4), 0, 0.07, -0.02);
  box(m, 0.22, 0.015, 0.16, std('#2a2a2e', 0.4), 0, 0.007, 0);
}
function plant(g: THREE.Group, x: number, z: number, seed: number) {
  cyl(g, 0.24, 0.18, 0.42, std('#c8643a', 0.8), x, 0.21, z);
  const leaf = std(seed % 2 ? '#3d8a3a' : '#2f7a46', 0.8);
  for (let i = 0; i < 7; i++) {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), leaf);
    s.position.set(x + Math.sin(i * 2.4 + seed) * 0.16, 0.62 + (i % 3) * 0.2, z + Math.cos(i * 2.4 + seed) * 0.16);
    s.scale.set(1, 1.4, 1); g.add(s);
  }
}

const SCREEN_TEXTS = ['ERROR 404: NÓMINA', 'Excel 1998', '¡REUNIÓN YA!', 'Bandeja: 999+', 'actualizando… 3 %'];

export function buildOficina(scene: THREE.Scene, opts: { low: boolean; shadows: boolean }): Oficina {
  const world = new THREE.Group();
  world.name = 'oficina';
  scene.add(world);
  const statics = new THREE.Group();
  world.add(statics);
  const keep: THREE.Object3D[] = [];

  // ------------------------------------------------------------ floors, ceiling, walls
  for (const r of ROOMS) {
    const tile = texture(128, 128, c => { c.fillStyle = r.floor; c.fillRect(0, 0, 128, 128); c.strokeStyle = 'rgba(0,0,0,.08)'; c.lineWidth = 2; c.strokeRect(0, 0, 64, 64); c.strokeRect(64, 64, 64, 64); c.strokeRect(64, 0, 64, 64); c.strokeRect(0, 64, 64, 64); }, true);
    tile.repeat.set((r.x1 - r.x0) / 2, (r.z1 - r.z0) / 2);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(r.x1 - r.x0, r.z1 - r.z0), new THREE.MeshStandardMaterial({ map: tile, roughness: r.id === 'direccion' ? 0.4 : 0.85 }));
    floor.rotation.x = -Math.PI / 2; floor.position.set((r.x0 + r.x1) / 2, 0.005, (r.z0 + r.z1) / 2); floor.receiveShadow = true;
    world.add(floor);
  }
  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(48, 36), std('#f2f0ec', 0.95));
  ceiling.rotation.x = Math.PI / 2; ceiling.position.set(0, CEILING, 0); world.add(ceiling);
  const panel = std('#ffffff', 0.4, 0, { emissive: '#fff6e0', emissiveIntensity: 0.9 });
  const flicker = new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#fff6e0', emissiveIntensity: 0.9 });
  let flickerPanel: THREE.Mesh | null = null;
  for (let x = -21; x <= 21; x += 6) for (let z = -15; z <= 15; z += 5) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.6), x === 3 && z === 5 ? flicker : panel);
    p.rotation.x = Math.PI / 2; p.position.set(x, CEILING - 0.01, z);
    if (x === 3 && z === 5) { flickerPanel = p; world.add(p); keep.push(p); } else statics.add(p);
  }
  const wallMat = std('#efe9de', 0.92), extMat = std('#e2dccf', 0.9), skirting = std('#8a7a68', 0.7);
  const glass = new THREE.MeshStandardMaterial({ color: '#bfe0f0', transparent: true, opacity: 0.28, roughness: 0.05, metalness: 0.1, depthWrite: false });
  for (const [x0, z0, x1, z1, kind] of WALLS as [number, number, number, number, string][]) {
    const len = Math.max(Math.abs(x1 - x0), Math.abs(z1 - z0));
    const along = Math.abs(x1 - x0) > Math.abs(z1 - z0);
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    if (kind === 'glass') {
      const pane = box(world, along ? len : 0.05, CEILING, along ? 0.05 : len, glass, cx, CEILING / 2, cz);
      pane.renderOrder = 3;
      box(statics, along ? len : 0.1, 0.06, along ? 0.1 : len, std('#7a8088', 0.3, 0.6), cx, CEILING - 0.03, cz);
      box(statics, along ? len : 0.1, 0.06, along ? 0.1 : len, std('#7a8088', 0.3, 0.6), cx, 0.03, cz);
      continue;
    }
    box(statics, along ? len + WALL : WALL, CEILING, along ? WALL : len + WALL, kind === 'ext' ? extMat : wallMat, cx, CEILING / 2, cz);
    box(statics, along ? len + WALL + 0.02 : WALL + 0.02, 0.1, along ? WALL + 0.02 : len + WALL + 0.02, skirting, cx, 0.05, cz);
  }
  // The glass entrance with the company name, and windows on the outer walls.
  const door = box(world, ENTRANCE.x1 - ENTRANCE.x0, 2.6, 0.06, glass, 0, 1.3, ENTRANCE.z); door.renderOrder = 3;
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 0.6), new THREE.MeshBasicMaterial({ map: label('CAOS Y ASOCIADOS, S. A.', '#1d3f9a', '#ffd23f', 1024, 140, 'bold 76px Arial') }));
  sign.position.set(0, 2.85, ENTRANCE.z - 0.14); sign.rotation.y = Math.PI; statics.add(sign);
  const backLogo = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 0.8), new THREE.MeshBasicMaterial({ map: label('Caos y Asociados · «Aquí todo es urgente»', '#f3eee4', '#1d3f9a', 1024, 220, 'italic bold 58px Georgia') }));
  backLogo.position.set(0, 2.1, 6.14); statics.add(backLogo);
  const windowMat = std('#9ed0f0', 0.1, 0.2, { emissive: '#bfe6ff', emissiveIntensity: 0.55 });
  for (const z of [-14, -8, -2, 9, 14]) for (const x of [-23.86, 23.86]) { const w = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.4), windowMat); w.position.set(x, 1.7, z); w.rotation.y = x < 0 ? Math.PI / 2 : -Math.PI / 2; statics.add(w); }
  for (const x of [-20, -12, -4, 4, 12, 20]) { const w = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.4), windowMat); w.position.set(x, 1.7, -17.86); statics.add(w); }
  // Door signs above every doorway, readable from the corridor.
  for (const d of DOORS) {
    const s = new THREE.Mesh(new THREE.PlaneGeometry(Math.max(1.6, d.label.length * 0.13), 0.32), new THREE.MeshBasicMaterial({ map: label(d.label, '#1d3f9a', '#ffffff', 640, 112, 'bold 60px Arial') }));
    s.position.set(d.x, 2.55, d.z + 0.15); statics.add(s);
    const back = s.clone(); back.position.z = d.z - 0.15; back.rotation.y = Math.PI; statics.add(back);
  }

  // ------------------------------------------------------------ furniture
  const wood = std('#b8916a', 0.6), lightWood = std('#d8c0a0', 0.6), metal = std('#9aa0aa', 0.35, 0.6), dark = std('#2c2f38', 0.6), white = std('#f4f4f2', 0.6);
  const screens = SCREEN_TEXTS.map((t, i) => new THREE.MeshBasicMaterial({ map: label(t, i % 2 ? '#1a3a6a' : '#0d2a1a', i % 2 ? '#bfe0ff' : '#7aff9a', 512, 300, 'bold 52px monospace') }));
  let coffee: THREE.Vector3 | null = null;
  const printers: THREE.Vector3[] = [];
  let parrot: THREE.Group | null = null;
  let phoneSet: THREE.Group | null = null;
  FURNITURE.forEach((f, i) => {
    const turned = f.rot === 1 || f.rot === -1;
    switch (f.type) {
      case 'mostrador': {
        box(statics, f.w, f.top - 0.04, f.d, std('#f4f0e8', 0.5), f.x, (f.top - 0.04) / 2, f.z);
        box(statics, f.w + 0.1, 0.05, f.d + 0.1, std('#1d3f9a', 0.4), f.x, f.top - 0.02, f.z);
        const front = new THREE.Mesh(new THREE.PlaneGeometry(f.w * 0.8, 0.36), new THREE.MeshBasicMaterial({ map: label('RECEPCIÓN', '#f4f0e8', '#1d3f9a', 512, 112, 'bold 64px Arial') }));
        front.position.set(f.x, 0.62, f.z + f.d / 2 + 0.01); statics.add(front);
        monitor(statics, f.x + 1.2, f.top, f.z - 0.2, Math.PI, screens[2]);
        phoneSet = new THREE.Group(); phoneSet.position.set(f.x - 1.1, f.top, f.z - 0.15); world.add(phoneSet); keep.push(phoneSet);
        for (let k = 0; k < 3; k++) box(phoneSet, 0.18, 0.06, 0.14, std(['#c83a3a', '#2a2f3a', '#e0a020'][k], 0.5), k * 0.26 - 0.26, 0.03, 0);
        break;
      }
      case 'sofa': {
        const w = turned ? f.w : f.w, d = turned ? f.d : f.d;
        box(statics, w, 0.42, d, std('#3a6a8a', 0.9), f.x, 0.21, f.z);
        box(statics, 0.22, 0.4, d, std('#2f5a78', 0.9), f.x + (f.rot === 1 ? -w / 2 + 0.11 : w / 2 - 0.11), 0.62, f.z);
        break;
      }
      case 'mesita': {
        box(statics, f.w, 0.05, f.d, f.mic ? dark : lightWood, f.x, f.top - 0.025, f.z);
        for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(statics, 0.04, f.top - 0.05, 0.04, metal, f.x + sx * (f.w / 2 - 0.05), (f.top - 0.05) / 2, f.z + sz * (f.d / 2 - 0.05));
        if (f.mic) { cyl(statics, 0.012, 0.012, 0.3, metal, f.x, f.top + 0.15, f.z); const head = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), dark); head.position.set(f.x, f.top + 0.33, f.z); statics.add(head); }
        else for (let k = 0; k < 3; k++) box(statics, 0.24, 0.02, 0.3, std(['#d84a6a', '#4a8ad8', '#f0c020'][k], 0.7), f.x - 0.1 + k * 0.05, f.top + 0.01 + k * 0.02, f.z - 0.1 + k * 0.08);
        break;
      }
      case 'planta': plant(statics, f.x, f.z, i); break;
      case 'cafetera': {
        box(statics, f.w, f.top, f.d, std('#3a3a40', 0.4, 0.3), f.x, f.top / 2, f.z);
        const s = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.2), new THREE.MeshBasicMaterial({ map: label('FUERA DE SERVICIO', '#c83a3a', '#fff', 512, 160, 'bold 56px Arial') }));
        s.position.set(f.x - f.w / 2 - 0.005, 0.9, f.z); s.rotation.y = -Math.PI / 2; statics.add(s);
        coffee = new THREE.Vector3(f.x, f.top + 0.1, f.z);
        break;
      }
      case 'mesa': case 'mesa-larga': case 'escritorio': case 'isla': case 'escritorio-director': {
        const top = f.type === 'escritorio-director' ? std('#5a3a24', 0.4) : f.type === 'isla' ? white : wood;
        box(statics, f.w, 0.05, f.d, top, f.x, f.top - 0.025, f.z);
        if (f.type === 'escritorio-director') box(statics, f.w - 0.1, f.top - 0.05, 0.06, std('#4a2e1c', 0.5), f.x, (f.top - 0.05) / 2, f.z + f.d / 2 - 0.05);
        for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(statics, 0.05, f.top - 0.05, 0.05, metal, f.x + sx * (f.w / 2 - 0.06), (f.top - 0.05) / 2, f.z + sz * (f.d / 2 - 0.06));
        if (f.screen) monitor(statics, f.x, f.top, f.z - f.d / 2 + 0.2, 0, screens[i % screens.length]);
        if (f.type === 'isla') {
          monitor(statics, f.x - 0.9, f.top, f.z - 0.35, 0, screens[(i + 1) % screens.length]); monitor(statics, f.x + 0.9, f.top, f.z - 0.35, 0, screens[(i + 3) % screens.length]);
          monitor(statics, f.x - 0.9, f.top, f.z + 0.35, Math.PI, screens[(i + 2) % screens.length]); monitor(statics, f.x + 0.9, f.top, f.z + 0.35, Math.PI, screens[(i + 4) % screens.length]);
          // Paper chaos on the desks.
          for (let k = 0; k < 6; k++) { const p = box(statics, 0.21, 0.004, 0.29, white, f.x - 1.3 + k * 0.5, f.top + 0.003 + k * 0.001, f.z + ((k % 3) - 1) * 0.2); p.rotation.y = k * 0.7; }
        }
        if (f.type === 'mesa-larga') for (let k = 0; k < 4; k++) { chair(statics, f.x - f.w / 2 - 0.45, f.z - 2.2 + k * 1.5, Math.PI / 2); chair(statics, f.x + f.w / 2 + 0.45, f.z - 2.2 + k * 1.5, -Math.PI / 2); }
        if (f.sign) { const s = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.3), new THREE.MeshBasicMaterial({ map: label(f.sign, '#fff6c0', '#7a3a1a', 640, 200, 'bold 44px Arial') })); s.position.set(f.x, f.top + 0.2, f.z + f.d / 2 - 0.1); s.rotation.x = -0.4; statics.add(s); }
        if (f.type === 'escritorio-director') { const s = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.14), new THREE.MeshBasicMaterial({ map: label('DIRECTOR GENERAL', '#c8a050', '#2a1a10', 512, 112, 'bold 46px Georgia') })); s.position.set(f.x, f.top + 0.08, f.z + f.d / 2 - 0.08); s.rotation.x = -0.6; statics.add(s); }
        break;
      }
      case 'silla': break;
      case 'archivador': {
        box(statics, f.w, f.top, f.d, std('#8a909a', 0.45, 0.4), f.x, f.top / 2, f.z);
        for (let k = 0; k < 3; k++) box(statics, f.w - 0.06, 0.02, 0.02, dark, f.x, 0.3 + k * 0.38, f.z + (f.x > 20 ? -f.d / 2 : f.d / 2));
        break;
      }
      case 'estanteria': {
        box(statics, f.w, f.top, f.d, wood, f.x, f.top / 2, f.z);
        for (let k = 0; k < 4; k++) for (let b = 0; b < 8; b++) box(statics, 0.18, 0.3, 0.06 + (b % 3) * 0.02, std(['#c83a3a', '#2a6ab0', '#e0a020', '#3a8a5a'][(b + k) % 4], 0.8), f.x + 0.25, 0.28 + k * 0.46, f.z - 1.5 + b * 0.4);
        break;
      }
      case 'caja-fuerte': box(statics, f.w, f.top, f.d, std('#3a4048', 0.3, 0.7), f.x, f.top / 2, f.z); cyl(statics, 0.08, 0.08, 0.04, std('#c8a050', 0.3, 0.8), f.x, 0.6, f.z - f.d / 2 - 0.02).rotation.x = Math.PI / 2; break;
      case 'impresora': box(statics, f.w, f.top, f.d, std('#d8d8d4', 0.5), f.x, f.top / 2, f.z); box(statics, f.w * 0.7, 0.05, 0.3, dark, f.x, f.top + 0.02, f.z); printers.push(new THREE.Vector3(f.x, f.top + 0.05, f.z)); break;
      case 'cajas': for (let k = 0; k < 3; k++) box(statics, 0.55, 0.4, 0.45, std('#c8a070', 0.9), f.x - 0.3 + (k % 2) * 0.6, 0.2 + (k === 2 ? 0.4 : 0), f.z); break;
      case 'fuente': cyl(statics, 0.18, 0.2, 1, white, f.x, 0.5, f.z); cyl(statics, 0.14, 0.14, 0.4, std('#8ac8f0', 0.1, 0, { transparent: true, opacity: 0.7 }), f.x, 1.2, f.z); break;
      case 'encimera': {
        box(statics, f.w, f.top, f.d, std('#e8e2d6', 0.6), f.x, f.top / 2, f.z);
        box(statics, 0.5, 0.3, 0.36, dark, f.x + 0.4, f.top + 0.15, f.z);
        const note = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.18), new THREE.MeshBasicMaterial({ map: label('¡PROHIBIDO EL PESCADO!', '#fff6a0', '#c83a3a', 512, 200, 'bold 44px Arial') }));
        note.position.set(f.x + 0.4, f.top + 0.2, f.z + 0.185); statics.add(note);
        break;
      }
      case 'nevera': box(statics, f.w, 1.85, f.d, std('#e8ecf0', 0.35, 0.3), f.x, 0.925, f.z); break;
      case 'pantalla': { const s = new THREE.Mesh(new THREE.PlaneGeometry(f.w, 1.5), new THREE.MeshBasicMaterial({ map: label('BENEFICIOS 2026 ↘ ¿?', '#0d1a3a', '#ff6a6a', 1024, 512, 'bold 90px Arial') })); s.position.set(f.x, 1.7, f.z + 0.2); statics.add(s); break; }
      case 'jaula': {
        cyl(statics, 0.04, 0.06, 1.2, metal, f.x, 0.6, f.z);
        const cage = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.7, 12, 1, true), new THREE.MeshStandardMaterial({ color: '#c8a050', wireframe: true }));
        cage.position.set(f.x, 1.55, f.z); world.add(cage);
        parrot = new THREE.Group(); parrot.position.set(f.x, 1.42, f.z); world.add(parrot); keep.push(parrot, cage);
        const bird = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), std('#2ab04a', 0.6)); bird.scale.set(1, 1.4, 1); parrot.add(bird);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), std('#e84a3a', 0.6)); head.position.y = 0.17; parrot.add(head);
        const beak = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 6), std('#f0c020', 0.5)); beak.position.set(0, 0.16, 0.08); beak.rotation.x = Math.PI / 2; parrot.add(beak);
        break;
      }
    }
  });
  // Whiteboards and the cork board (where the mission things are).
  const board = (text: string, x: number, z: number, rotY: number, w = 2.4, bg = '#ffffff', fg = '#1a2a5a') => {
    const b = new THREE.Mesh(new THREE.PlaneGeometry(w, 1.2), new THREE.MeshBasicMaterial({ map: texture(640, 320, c => { c.fillStyle = bg; c.fillRect(0, 0, 640, 320); c.strokeStyle = '#8a8a8a'; c.lineWidth = 12; c.strokeRect(0, 0, 640, 320); c.fillStyle = fg; c.font = 'bold 40px "Comic Sans MS", Arial'; text.split('\n').forEach((line, k) => c.fillText(line, 30, 70 + k * 56)); }) }));
    b.position.set(x, 1.6, z); b.rotation.y = rotY; statics.add(b);
  };
  board('Plan:\n1) ¿?\n2) ¡PÁNICO!\n3) ¿café?', 23.86, -8, -Math.PI / 2);
  board('REESTRUCTURACIÓN\nVentas + Marketing\nHorario: ¿?', -14, -17.86, 0, 2.6, '#c89a5a', '#2a1a10');
  board('Preguntas de\nentrevista:\n¿Dónde trabajaba?', -23.86, 12, Math.PI / 2, 2);
  board('Hoy:\n12 reuniones\n0 soluciones', 2, -17.86, 0, 2.2);
  // A wall clock that cannot make up its mind.
  const clockFace = new THREE.Mesh(new THREE.CircleGeometry(0.32, 24), white); clockFace.position.set(0, 2.45, 17.84); clockFace.rotation.y = Math.PI; statics.add(clockFace);
  const hand = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.26, 0.01), dark); hand.geometry.translate(0, 0.12, 0); hand.position.set(0, 2.45, 17.82); world.add(hand); keep.push(hand);
  const hand2 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.18, 0.01), std('#c83a3a', 0.5)); hand2.geometry.translate(0, 0.08, 0); hand2.position.set(0, 2.45, 17.81); world.add(hand2); keep.push(hand2);

  // ------------------------------------------------------------ people
  const npcs: Npc[] = [];
  const makePerson = (look: Look, pose: string, seated: boolean, mood?: string) => {
    const person = createPerson(look, false);
    person.root.userData.person = true; // the no-ghost QA check finds people by this tag
    setPose(person, pose, seated);
    if (mood) setMood(person, mood);
    addBlobShadow(person, 0.8);
    world.add(person.root);
    keep.push(person.root);
    return person;
  };
  Object.entries(CAST).forEach(([key, c], i) => {
    const seated = Boolean((c as { seated?: boolean }).seated);
    const person = makePerson(c.look as Look, c.pose, seated, c.mood);
    person.root.position.set(c.x, 0, c.z); person.root.rotation.y = c.heading;
    if (seated) chair(statics, c.x - Math.sin(c.heading) * 0.05, c.z - Math.cos(c.heading) * 0.05, c.heading);
    npcs.push({ key, person, x: c.x, z: c.z, heading: c.heading, seated, baseMood: c.mood, seed: 100 + i * 7, cast: key, body: c.look.body });
  });
  CROWD.forEach((c, i) => {
    const seated = crowdSeated(c);
    let look = randomLook(c.seed * 13 + 5);
    if (seated && (look.top === 'dress' || look.bottom === 'skirt')) look = { ...look, top: 'shirt', bottom: 'pants', bottomColor: '#2a2f3a' };
    if (c.cutout) look = { skin: '#f0c8a8', body: 'm', age: 'adult', hairStyle: 'short', hairColor: '#3a2a1a', top: 'shirt', topColor: '#f0a0c0', bottom: 'shorts', bottomColor: '#f0c020', extras: ['hat', 'glasses'] };
    const person = makePerson(look, c.pose, seated, c.cutout ? 'laugh' : c.pose === 'sleep' ? 'sleepy' : undefined);
    person.root.position.set(c.x, 0, c.z); person.root.rotation.y = c.heading;
    if (c.cutout) person.root.scale.z = 0.12; // a cardboard cut-out of the boss «on holiday since 2019»
    if (seated && Math.abs(c.x) < 23 && !(c.pose === 'read' || c.x < -6.5 && c.z > 13)) chair(statics, c.x, c.z, c.heading);
    npcs.push({ key: `crowd-${i}`, person, x: c.x, z: c.z, heading: c.heading, seated, baseMood: 'neutral', seed: c.seed, body: look.body });
  });
  const movers: Mover[] = WALKERS.map((w, i) => {
    const look = randomLook(w.seed * 17 + 3);
    const person = makePerson(look, w.carry ? 'carry' : 'walk', false);
    return { key: `walker-${i}`, person, walker: w, x: w.path[0][0], z: w.path[0][1], heading: 0, moving: true, seed: w.seed, body: look.body };
  });

  // ------------------------------------------------------------ mission circles
  const spots: Spot[] = Object.entries(SPOTS).map(([id, s]) => {
    const mission = Number(id[1]);
    const material = new THREE.MeshBasicMaterial({ color: MISSION_COLORS[mission], transparent: true, opacity: 0.9, depthWrite: false });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.72, 0.95, 40), material);
    ring.rotation.x = -Math.PI / 2; ring.position.set(s.x, 0.03, s.z); ring.renderOrder = 2;
    const tag = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture(128, 128, c => { c.fillStyle = MISSION_COLORS[mission]; c.beginPath(); c.arc(64, 64, 58, 0, Math.PI * 2); c.fill(); c.fillStyle = '#1a1a2a'; c.font = 'bold 72px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(String(mission), 64, 68); }), depthWrite: false }));
    tag.scale.set(0.42, 0.42, 1); tag.position.set(s.x, 2.2, s.z);
    world.add(ring, tag); keep.push(ring, tag);
    return { id, ring, tag, material, mission };
  });
  function setSpots(open: string[], done: string[]) {
    for (const s of spots) {
      const isOpen = open.includes(s.id), isDone = done.includes(s.id);
      s.ring.visible = isOpen; s.tag.visible = isOpen && !isDone;
      s.material.color.set(isDone ? '#9aa4ac' : MISSION_COLORS[s.mission]);
      s.material.opacity = isDone ? 0.4 : 0.9;
    }
  }

  // ------------------------------------------------------------ chaos: paper, smoke, bubbles
  const paperMat = new THREE.MeshStandardMaterial({ color: '#ffffff', side: THREE.DoubleSide, roughness: 0.8 });
  const papers = printers.flatMap((p, k) => Array.from({ length: opts.low ? 3 : 6 }, (_, j) => {
    const sheet = new THREE.Mesh(new THREE.PlaneGeometry(0.21, 0.29), paperMat);
    world.add(sheet); keep.push(sheet);
    return { sheet, origin: p, phase: j * 0.7 + k * 1.3 };
  }));
  const smokeTex = texture(64, 64, c => { const g = c.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(200,200,200,.8)'); g.addColorStop(1, 'rgba(200,200,200,0)'); c.fillStyle = g; c.fillRect(0, 0, 64, 64); });
  const puffs = Array.from({ length: opts.low ? 3 : 6 }, (_, j) => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeTex, transparent: true, depthWrite: false })); world.add(s); keep.push(s); return { s, phase: j / 6 }; });
  const bubbles: { sprite: THREE.Sprite; until: number; who: Npc | Mover }[] = [];
  let clockNow = 0;
  function bubbleTexture(text: string, yell: boolean) {
    return texture(512, 128, c => {
      c.fillStyle = yell ? '#ffecec' : '#ffffff'; c.strokeStyle = yell ? '#c83a3a' : '#1d3f9a'; c.lineWidth = 6;
      c.beginPath(); c.roundRect(6, 6, 500, 100, 28); c.fill(); c.stroke();
      c.fillStyle = '#1a1a2a'; c.font = `${yell ? 'bold ' : ''}34px Arial`; c.textAlign = 'center'; c.textBaseline = 'middle';
      const t = text.length > 34 ? `${text.slice(0, 33)}…` : text;
      c.fillText(t, 256, 58);
    });
  }
  function say(who: Npc | Mover, text: string, seconds = 3.6, yell = false) {
    const old = bubbles.findIndex(b => b.who === who);
    if (old >= 0) { const b = bubbles[old]; b.sprite.removeFromParent(); b.sprite.material.map?.dispose(); b.sprite.material.dispose(); bubbles.splice(old, 1); }
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: bubbleTexture(text, yell), transparent: true, depthTest: true, toneMapped: false }));
    sprite.scale.set(2.2, 0.55, 1);
    world.add(sprite);
    bubbles.push({ sprite, until: clockNow + seconds, who });
  }
  const PARROT_LINES = ['¡Despedido!', '¡Reunión urgente!', '¡Aquí todo es urgente!', '¡Café, café!'];
  let parrotAt = 6, chatterAt = 4;
  const CHATTER = ['¿Alguien sabe dónde está el director?', '¡Otra vez la impresora!', '¿Me pagan este mes?', 'Tengo tres reuniones a la vez', '¿Quién se comió mi yogur?', 'El wifi no funciona', '¡Me han cambiado la mesa!'];

  batchStatic(statics, []);

  function animate(t: number, dt: number, px: number, pz: number) {
    clockNow = t;
    for (const m of movers) {
      const at = walkerAt(m.walker, t);
      m.x = at.x; m.z = at.z; m.moving = at.moving;
      if (at.moving) m.heading = at.heading;
      m.person.root.position.set(m.x, 0, m.z); m.person.root.rotation.y = m.heading;
      animatePerson(m.person, dt, at.moving ? m.walker.speed : 0, false);
    }
    for (const n of npcs) {
      const d = Math.hypot(n.x - px, n.z - pz);
      if (d > 24 && !talking.has(n.person)) continue;
      animatePerson(n.person, dt, 0, talking.has(n.person));
    }
    // Paper flying out of the printers.
    for (const p of papers) {
      const k = ((t * 0.5 + p.phase) % 3) / 3;
      p.sheet.position.set(p.origin.x + Math.sin(p.phase * 3 + k * 4) * k * 1.2, p.origin.y + Math.sin(k * Math.PI) * 1.1, p.origin.z + Math.cos(p.phase * 2) * k * 1.0);
      p.sheet.rotation.set(k * 6 + p.phase, k * 3, k * 2);
    }
    if (coffee) for (const puff of puffs) { const k = (t * 0.35 + puff.phase) % 1; puff.s.position.set(coffee.x + Math.sin(t + puff.phase * 9) * 0.1, coffee.y + k * 1.4, coffee.z); const s = 0.2 + k * 0.6; puff.s.scale.set(s, s, 1); puff.s.material.opacity = 0.8 * (1 - k); }
    if (phoneSet) phoneSet.children.forEach((ph, k) => { const ring = Math.sin(t * 2 + k * 2) > 0.6; ph.position.y = 0.03 + (ring ? Math.abs(Math.sin(t * 40)) * 0.02 : 0); ph.rotation.z = ring ? Math.sin(t * 50) * 0.08 : 0; });
    if (flickerPanel) flicker.emissiveIntensity = Math.sin(t * 13) * Math.sin(t * 7.3) > 0.4 ? 0.05 : 0.9;
    hand.rotation.z = -t * 2.1; hand2.rotation.z = t * 0.9;
    if (parrot) {
      (parrot as THREE.Group).rotation.y = Math.sin(t * 1.3) * 0.8; (parrot as THREE.Group).position.y = 1.42 + Math.abs(Math.sin(t * 3)) * 0.04;
      if (t > parrotAt) {
        parrotAt = t + 9 + Math.random() * 6;
        const p = parrot as THREE.Group;
        const fake = { key: 'loro', person: { root: p } } as unknown as Npc;
        if (Math.hypot(p.position.x - px, p.position.z - pz) < 10) say(fake, PARROT_LINES[Math.floor(Math.random() * PARROT_LINES.length)], 2.6, true);
      }
    }
    if (t > chatterAt) {
      chatterAt = t + 5 + Math.random() * 5;
      const near = npcs.filter(n => !n.cast && Math.hypot(n.x - px, n.z - pz) < 9 && !talking.has(n.person));
      if (near.length) say(near[Math.floor(Math.random() * near.length)], CHATTER[Math.floor(Math.random() * CHATTER.length)], 3.4);
    }
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      const root = b.who.person.root;
      b.sprite.position.set(root.position.x, (root.position.y || 0) + 2.25, root.position.z);
      if (t > b.until) { b.sprite.removeFromParent(); b.sprite.material.map?.dispose(); b.sprite.material.dispose(); bubbles.splice(i, 1); }
    }
    for (const s of spots) if (s.tag.visible) s.tag.position.y = 2.2 + Math.sin(t * 2 + s.mission) * 0.08;
  }

  return {
    npcs, movers, spots, setSpots, say, animate,
    bodies: () => [...npcs.map(n => ({ x: n.x, z: n.z, who: n })), ...movers.map(m => ({ x: m.x, z: m.z, who: m }))],
  };
}
