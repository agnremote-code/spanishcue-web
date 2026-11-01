// El consorcio · the furniture of Edificio Las Glicinas, one builder per
// item type of layout.mjs. Original procedural geometry and canvas textures
// only. Every piece is built in its own frame: w along local x, d along local
// z, the front facing +z; `rot` turns it in quarter turns. Seat tops are at
// 0.42 m, where people3d's seated hips rest, so nobody sinks into a cushion.
import * as THREE from 'three';
import { canvas, random } from '../noche-abierta/build3d';
import type { Furniture } from './layout.mjs';

export const SEAT_TOP = 0.42;

// ---------------------------------------------------------------- materials
const cache = new Map<string, THREE.Material>();
export function std(color: string, roughness = 0.7, metalness = 0, emissive?: string, intensity = 1) {
  const key = `${color}|${roughness}|${metalness}|${emissive}|${intensity}`;
  let m = cache.get(key) as THREE.MeshStandardMaterial | undefined;
  if (!m) {
    m = new THREE.MeshStandardMaterial({ color, roughness, metalness });
    if (emissive) { m.emissive.set(emissive); m.emissiveIntensity = intensity; }
    cache.set(key, m);
  }
  return m;
}
export function bright(color: string, opacity = 1) {
  const key = `bright|${color}|${opacity}`;
  let m = cache.get(key) as THREE.MeshBasicMaterial | undefined;
  if (!m) { m = new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity, toneMapped: false }); cache.set(key, m); }
  return m;
}
export function mapped(texture: THREE.Texture, glowing = 0, roughness = 0.6) {
  const m = new THREE.MeshStandardMaterial({ map: texture, roughness });
  if (glowing) { m.emissive.set('#ffffff'); m.emissiveMap = texture; m.emissiveIntensity = glowing; }
  return m;
}
export const B = (w: number, h: number, d: number) => new THREE.BoxGeometry(w, h, d);
export const C = (rt: number, rb: number, h: number, seg = 14) => new THREE.CylinderGeometry(rt, rb, h, seg);
export function add(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x = 0, y = 0, z = 0, ry = 0) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.rotation.y = ry;
  parent.add(mesh);
  return mesh;
}
export const STEEL = () => std('#a8b0b6', 0.35, 0.8);
export const IRON = () => std('#22262a', 0.5, 0.6);
export const BRASS = () => std('#c8a04a', 0.3, 0.8);
export const WOOD = () => std('#7a4e2e', 0.6);
export const DARKWOOD = () => std('#4a2e1a', 0.55);
export const WHITE = () => std('#f0eeea', 0.5);
export const GLASS = () => {
  let m = cache.get('glass') as THREE.MeshPhysicalMaterial | undefined;
  if (!m) { m = new THREE.MeshPhysicalMaterial({ color: '#cfe6f2', transparent: true, opacity: 0.16, roughness: 0.04, depthWrite: false }); cache.set('glass', m); }
  return m;
};

export function textTexture(text: string, bg: string, fg: string, w = 512, h = 128, font = 'bold 64px Arial, sans-serif') {
  return canvas(w, h, ctx => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = fg; ctx.font = font; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    let size = Number(/(\d+)px/.exec(font)?.[1] ?? 64);
    while (ctx.measureText(text).width > w * 0.9 && size > 10) { size -= 2; ctx.font = font.replace(/\d+px/, `${size}px`); }
    ctx.fillText(text, w / 2, h / 2 + 2);
  });
}
// A sheet of paper with a few handwritten lines, for notes and notices.
function paperTexture(lines: string[], bg = '#f6f0dc', fg = '#2a2a3a') {
  return canvas(256, 320, ctx => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, 256, 320);
    ctx.fillStyle = fg; ctx.font = 'bold 26px "Comic Sans MS", cursive'; ctx.textBaseline = 'top';
    lines.forEach((line, i) => ctx.fillText(line, 18, 20 + i * 36, 220));
  });
}
function posterTexture(title: string, bg: string, fg: string, seed: number) {
  const rand = random(seed);
  return canvas(256, 360, ctx => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, 256, 360);
    for (let i = 0; i < 6; i++) { ctx.fillStyle = `rgba(255,255,255,${0.05 + rand() * 0.15})`; ctx.beginPath(); ctx.arc(rand() * 256, rand() * 260, 20 + rand() * 60, 0, Math.PI * 2); ctx.fill(); }
    ctx.fillStyle = fg; ctx.font = 'bold 40px "Arial Black", Arial'; ctx.textAlign = 'center';
    title.split(' ').forEach((w, i) => ctx.fillText(w, 128, 270 + i * 42, 236));
  });
}
function photoTexture(seed: number) {
  const rand = random(seed);
  return canvas(128, 160, ctx => {
    ctx.fillStyle = '#e8dcc0'; ctx.fillRect(0, 0, 128, 160);
    ctx.fillStyle = '#6a5a48'; ctx.fillRect(10, 10, 108, 120);
    ctx.fillStyle = '#c8b8a0'; ctx.beginPath(); ctx.arc(64, 60, 22 + rand() * 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillRect(34, 84, 60, 46);
  });
}

// ---------------------------------------------------------------- shared bits
export type Anim = {
  glows: THREE.MeshStandardMaterial[];
  drips: { mesh: THREE.Mesh; x: number; z: number; top: number; phase: number }[];
  bobs: { mesh: THREE.Object3D; base: number; phase: number }[];
  tails: { mesh: THREE.Object3D; phase: number }[];
  bulbs: THREE.MeshBasicMaterial[];
  flames: THREE.Mesh[];
};
function holder(g: THREE.Group, item: Furniture) {
  const h = new THREE.Group();
  h.position.set(item.x, 0, item.z);
  h.rotation.y = (item.rot ?? 0) * Math.PI / 2;
  g.add(h);
  return h;
}
export function plantMesh(g: THREE.Object3D, x: number, z: number, size = 1) {
  add(g, C(0.24 * size, 0.18 * size, 0.42 * size, 14), std('#b8603a', 0.8), x, 0.21 * size, z);
  const leaf = std('#2f6a3a', 0.8);
  for (let i = 0; i < 8; i++) { const a = i * 0.8; const l = add(g, new THREE.SphereGeometry(0.17 * size, 8, 6), leaf, x + Math.sin(a) * 0.12 * size, (0.6 + (i % 3) * 0.16) * size, z + Math.cos(a) * 0.12 * size); l.scale.set(1, 1.7, 0.5); l.rotation.y = a; }
}
function cushion(h: THREE.Object3D, w: number, d: number, color: string, x = 0, z = 0) {
  // Seat top exactly at SEAT_TOP.
  add(h, B(w, 0.14, d), std(color, 0.9), x, SEAT_TOP - 0.07, z);
}
function chairMesh(h: THREE.Object3D, x: number, z: number, color = '#7a4e2e', plastic = false) {
  const m = plastic ? std('#f2f2ee', 0.5) : std(color, 0.6);
  add(h, B(0.44, 0.04, 0.42), m, x, SEAT_TOP - 0.02, z);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(h, B(0.035, SEAT_TOP - 0.04, 0.035), m, x + sx * 0.19, (SEAT_TOP - 0.04) / 2, z + sz * 0.18);
  add(h, B(0.44, 0.42, 0.04), m, x, SEAT_TOP + 0.24, z - 0.2);
}
function bookRow(h: THREE.Object3D, x0: number, x1: number, y: number, z: number, seed: number) {
  const rand = random(seed);
  for (let x = x0; x < x1 - 0.05; x += 0.05 + rand() * 0.04) {
    const t = 0.18 + rand() * 0.12;
    add(h, B(0.04, t, 0.2), std(['#8a2a2a', '#2a4a7a', '#d8b860', '#3a6a3a', '#e8e0d0', '#5a3a6a', '#c86a2a'][Math.floor(rand() * 7)], 0.8), x, y + t / 2, z);
  }
}
function catMesh(color: string, seed: number, anim: Anim) {
  const g = new THREE.Group();
  const fur = std(color, 0.95);
  const body = add(g, new THREE.SphereGeometry(0.13, 10, 8), fur, 0, 0.14, 0); body.scale.set(1, 0.85, 1.6);
  const head = add(g, new THREE.SphereGeometry(0.09, 10, 8), fur, 0, 0.22, 0.2);
  for (const s of [-1, 1]) { const ear = add(g, new THREE.ConeGeometry(0.03, 0.06, 4), fur, s * 0.045, 0.31, 0.2); ear.rotation.z = -s * 0.2; }
  for (const s of [-1, 1]) add(g, new THREE.SphereGeometry(0.012, 6, 4), bright('#d8e870'), s * 0.035, 0.235, 0.28);
  const tail = new THREE.Group(); tail.position.set(0, 0.16, -0.2); g.add(tail);
  const t = add(tail, C(0.02, 0.025, 0.26, 6), fur, 0, 0.12, -0.04); t.rotation.x = -0.4;
  anim.tails.push({ mesh: tail, phase: seed });
  void head;
  return g;
}

// ---------------------------------------------------------------- the builders
export function buildItem(g: THREE.Group, item: Furniture & { label?: string }, floor: number, anim: Anim) {
  const h = holder(g, item);
  const { w, d } = item;
  switch (item.type) {
    // -------------------------------------------- street and hall
    case 'tree': {
      add(h, C(0.16, 0.22, 4.2, 10), std('#6a5a48', 0.9), 0, 2.1, 0);
      add(h, B(1.0, 0.06, 1.0), std('#3a2e24', 0.9), 0, 0.03, 0);
      const leaves = std('#3a6a34', 0.95);
      const rand = random(Math.round(item.x * 10));
      for (let i = 0; i < 5; i++) { const blob = add(h, new THREE.IcosahedronGeometry(1.1 + rand() * 0.5, 1), leaves, (rand() - 0.5) * 1.6, 4.6 + rand() * 1.2, (rand() - 0.5) * 1.4); blob.castShadow = true; }
      break;
    }
    case 'bins': for (const x of [-0.42, 0.42]) { add(h, B(0.7, 1.0, 0.7), std(x < 0 ? '#2a6a3a' : '#4a4a4a', 0.6), x, 0.5, 0); add(h, B(0.74, 0.06, 0.74), std('#1a1a1a', 0.6), x, 1.03, 0); } break;
    case 'boxes': {
      const rand = random(Math.round(item.x * 7 + item.z * 3 + floor));
      const n = Math.max(2, Math.round(w * d * 2.5));
      for (let i = 0; i < n; i++) {
        const bw = 0.45 + rand() * 0.2, bh = 0.35 + rand() * 0.15;
        const level = i % 2;
        const x = -w / 2 + bw / 2 + rand() * Math.max(0.01, w - bw), z = -d / 2 + bw / 2 + rand() * Math.max(0.01, d - bw);
        const m = add(h, B(bw, bh, bw), std(['#c89a5e', '#b8885a', '#d8aa70'][i % 3], 0.9), x, level * 0.42 + bh / 2, z); m.rotation.y = (rand() - 0.5) * 0.4;
        add(h, B(bw + 0.005, 0.02, 0.08), std('#c8b890', 0.5), x, level * 0.42 + bh + 0.005, z).rotation.y = m.rotation.y;
      }
      break;
    }
    case 'mattress-up': add(h, B(w, 1.9, d), std('#e8e0f0', 0.9), 0, 0.95, 0); add(h, B(w - 0.05, 1.85, d + 0.01), std('#b8c8e8', 0.9), 0, 0.95, 0); break;
    case 'mattress': { add(h, B(w, 0.22, d), std('#e8e0f0', 0.9), 0, 0.11, 0); add(h, B(0.6, 0.12, 0.35), WHITE(), 0, 0.28, -d / 2 + 0.3); break; }
    case 'intercom': {
      add(h, B(0.3, 0.5, 0.04), STEEL(), 0, 1.35, 0);
      for (let i = 0; i < 8; i++) add(h, B(0.06, 0.04, 0.02), std('#141418', 0.4), (i % 2 ? 0.07 : -0.07), 1.5 - Math.floor(i / 2) * 0.08, 0.025);
      add(h, C(0.04, 0.04, 0.02, 12), std('#141418', 0.5), 0, 1.18, 0.03).rotation.x = Math.PI / 2;
      break;
    }
    case 'kerb': add(h, B(w, 0.15, d), std('#9a9690', 0.8), 0, 0.075, 0); break;
    case 'mailboxes': {
      add(h, B(w, 1.6, 0.3), std('#6a4a2a', 0.5), 0, 1.3, 0);
      for (let r = 0; r < 4; r++) for (let c = 0; c < 7; c++) {
        const x = -w / 2 + 0.22 + c * (w - 0.44) / 6, y = 0.68 + r * 0.38;
        add(h, B(0.36, 0.3, 0.02), BRASS(), x, y, 0.16);
        add(h, B(0.2, 0.025, 0.01), std('#141414', 0.5), x, y + 0.07, 0.175);
      }
      // A letter sticks out of 1.° A: Doña Elvira's.
      add(h, B(0.22, 0.14, 0.01), WHITE(), -w / 2 + 0.22, 1.82, 0.19).rotation.z = 0.2;
      break;
    }
    case 'bench': add(h, B(w, 0.06, d), WOOD(), 0, SEAT_TOP - 0.03, 0); for (const s of [-1, 1]) add(h, B(0.06, SEAT_TOP - 0.06, d - 0.06), IRON(), s * (w / 2 - 0.15), (SEAT_TOP - 0.06) / 2, 0); break;
    case 'notice': {
      add(h, B(w, 0.9, 0.03), std('#b88a5a', 0.9), 0, 1.5, 0);
      const t = mapped(paperTexture(['ASAMBLEA', 'EXTRAORDINARIA', 'HOY · 21 H', 'TERRAZA', 'Tema: ascensor'], '#fff8e8', '#9a1a1a'));
      add(h, new THREE.PlaneGeometry(0.42, 0.52), t, -w * 0.18, 1.52, 0.02);
      const t2 = mapped(paperTexture(['Se busca', 'gato gris', '«Rulo»', '2.° D'], '#e8f0ff'));
      add(h, new THREE.PlaneGeometry(0.3, 0.38), t2, w * 0.26, 1.46, 0.02);
      break;
    }
    case 'porteria': {
      add(h, B(w, 0.95, d), DARKWOOD(), 0, 0.48, 0);
      add(h, B(w + 0.06, 0.04, d + 0.06), std('#e8e4dc', 0.3), 0, 0.97, 0);
      add(h, B(0.5, 0.32, 0.05), std('#141418', 0.4), 0.6, 1.16, -0.1);
      add(h, B(0.44, 0.26, 0.01), std('#3a6a8a', 0.3, 0, '#2a5a8a', 0.5), 0.6, 1.16, -0.07);
      add(h, B(0.22, 0.08, 0.16), std('#2a2a2a', 0.5), -0.8, 1.03, 0); // the radio
      add(h, B(0.3, 0.02, 0.22), WHITE(), -0.2, 0.99, 0.1);
      break;
    }
    case 'bike': {
      const frame = std('#c8301e', 0.4, 0.5);
      for (const z of [-0.6, 0.6]) { const wheel = add(h, new THREE.TorusGeometry(0.32, 0.025, 6, 20), std('#141414', 0.8), 0, 0.34, z); wheel.rotation.y = Math.PI / 2; }
      add(h, B(0.04, 0.04, 1.0), frame, 0, 0.62, 0); add(h, B(0.04, 0.5, 0.04), frame, 0, 0.5, -0.15); add(h, B(0.04, 0.45, 0.04), frame, 0, 0.6, 0.55);
      add(h, B(0.12, 0.05, 0.22), std('#141414', 0.7), 0, 0.82, -0.18); add(h, B(0.5, 0.03, 0.03), IRON(), 0, 0.86, 0.58);
      add(h, B(0.4, 0.4, 0.4), std('#e05a1a', 0.7), 0, 0.98, 0.0); // the delivery box
      break;
    }
    case 'bikes': for (let i = 0; i < 3; i++) { const sub = new THREE.Group(); sub.position.set(-w / 2 + 0.45 + i * 0.95, 0, 0); h.add(sub); for (const x of [-0.45, 0.45]) { const wheel = add(sub, new THREE.TorusGeometry(0.3, 0.02, 6, 18), std('#141414', 0.8), x, 0.32, 0); wheel.rotation.y = 0; } add(sub, B(0.9, 0.035, 0.035), std(['#2a6ac8', '#3a8a4a', '#d8d8d8'][i], 0.4, 0.4), 0, 0.6, 0); add(sub, B(0.14, 0.04, 0.1), std('#141414', 0.7), -0.3, 0.8, 0); } break;
    case 'planter': add(h, B(w, 0.55, d), std('#9a5a3a', 0.85), 0, 0.28, 0); for (let z = -d / 2 + 0.5; z < d / 2; z += 0.9) plantMesh(h, 0, z, 0.9); break;
    case 'drain': add(h, B(0.4, 0.01, 0.4), IRON(), 0, 0.005, 0); break;
    case 'doormat': add(h, B(w, 0.015, d), std(['#6a3a2a', '#3a4a3a', '#5a4a3a', '#2a3a5a'][(item.label?.charCodeAt(1) ?? 0) % 4], 0.95), 0, 0.008, 0); break;
    case 'lamp-ceiling': {
      add(h, C(0.012, 0.012, 0.5, 6), IRON(), 0, 3.2 - 0.25, 0);
      const shade = add(h, new THREE.SphereGeometry(0.22, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), std('#f4eadc', 0.5, 0, '#ffe0a8', 0.9), 0, 2.68, 0); shade.rotation.x = Math.PI;
      anim.glows.push(shade.material as THREE.MeshStandardMaterial);
      break;
    }
    case 'plant': plantMesh(h, 0, 0, 1.15); break;
    case 'rug': add(h, B(w, 0.012, d), std(['#8a3a2a', '#2a4a6a', '#7a6a3a', '#5a2a4a'][Math.abs(Math.round(item.x + item.z + floor)) % 4], 0.98), 0, 0.006, 0); add(h, B(w - 0.2, 0.014, d - 0.2), std('#e8d8b0', 0.98), 0, 0.007, 0).scale.set(1, 1, 1); add(h, B(w - 0.34, 0.016, d - 0.34), std(['#8a3a2a', '#2a4a6a', '#7a6a3a', '#5a2a4a'][Math.abs(Math.round(item.x + item.z + floor)) % 4], 0.98), 0, 0.008, 0); break;
    // -------------------------------------------- seats
    case 'chair': chairMesh(h, 0, 0); break;
    case 'chairs': { const n = Math.max(1, Math.round(w / 0.56)); for (let i = 0; i < n; i++) chairMesh(h, -w / 2 + 0.28 + i * (w / n), 0, '#7a4e2e', floor === 8 || floor === 1); break; }
    case 'gamingchair': {
      add(h, C(0.25, 0.25, 0.04, 10), IRON(), 0, 0.05, 0); add(h, C(0.03, 0.03, SEAT_TOP - 0.16, 8), IRON(), 0, (SEAT_TOP - 0.1) / 2, 0);
      cushion(h, 0.52, 0.5, '#1a1a1a'); add(h, B(0.5, 0.7, 0.1), std('#d8306a', 0.7), 0, SEAT_TOP + 0.38, -0.24);
      break;
    }
    case 'sofa': {
      const fab = std(['#6a2a3a', '#3a5a6a', '#7a6a4a', '#4a3a5a'][Math.abs(Math.round(item.x * 3 + floor)) % 4], 0.9);
      add(h, B(w, SEAT_TOP - 0.14, d), fab, 0, (SEAT_TOP - 0.14) / 2, 0);
      add(h, B(w - 0.36, 0.14, d - 0.24), fab, 0, SEAT_TOP - 0.07, 0.1);
      add(h, B(w, 0.5, 0.22), fab, 0, SEAT_TOP + 0.2, -d / 2 + 0.11);
      for (const s of [-1, 1]) add(h, B(0.18, 0.28, d), fab, s * (w / 2 - 0.09), SEAT_TOP + 0.0, 0);
      break;
    }
    case 'armchair': {
      const fab = std(['#7a3a2a', '#3a6a5a', '#8a6a3a'][Math.abs(Math.round(item.x + item.z)) % 3], 0.9);
      add(h, B(w, SEAT_TOP - 0.14, d), fab, 0, (SEAT_TOP - 0.14) / 2, 0);
      add(h, B(w - 0.24, 0.14, d - 0.2), fab, 0, SEAT_TOP - 0.07, 0.08);
      add(h, B(w, 0.6, 0.16), fab, 0, SEAT_TOP + 0.24, -d / 2 + 0.08);
      for (const s of [-1, 1]) add(h, B(0.12, 0.26, d), fab, s * (w / 2 - 0.06), SEAT_TOP + 0.02, 0);
      break;
    }
    case 'divan': {
      // The analyst's couch: long along z, the head rest at the north end (−z).
      add(h, B(w, SEAT_TOP - 0.12, d), std('#5a3a2a', 0.6), 0, (SEAT_TOP - 0.12) / 2, 0);
      add(h, B(w - 0.06, 0.12, d - 0.06), std('#8a4a3a', 0.85), 0, SEAT_TOP - 0.06, 0);
      add(h, B(w, 0.3, 0.2), std('#8a4a3a', 0.85), 0, SEAT_TOP + 0.1, -d / 2 + 0.1);
      break;
    }
    case 'bed': {
      add(h, B(w, 0.35, d), DARKWOOD(), 0, 0.18, 0); add(h, B(w - 0.06, 0.2, d - 0.06), std('#e8eef4', 0.9), 0, 0.45, 0);
      add(h, B(w, 0.8, 0.08), DARKWOOD(), 0, 0.4, -d / 2 + 0.04);
      add(h, B(w - 0.1, 0.06, d * 0.6), std(['#3a5a8a', '#8a3a3a', '#2a2a2a'][floor % 3], 0.9), 0, 0.58, d * 0.15).rotation.y = 0.04;
      add(h, B(0.5, 0.12, 0.3), WHITE(), 0, 0.6, -d / 2 + 0.3);
      break;
    }
    case 'beanbag': { const b = add(h, new THREE.SphereGeometry(0.42, 12, 8), std('#e0a020', 0.95), 0, 0.3, 0); b.scale.set(1, 0.7, 1); break; }
    // -------------------------------------------- tables and storage
    case 'table-dining': {
      add(h, B(w, 0.05, d), WOOD(), 0, 0.76, 0);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(h, B(0.06, 0.74, 0.06), WOOD(), sx * (w / 2 - 0.08), 0.37, sz * (d / 2 - 0.08));
      if (floor === 4) { add(h, C(0.05, 0.045, 0.1, 12), std('#5a3a1a', 0.6), 0.2, 0.84, 0); add(h, C(0.008, 0.008, 0.16, 6), STEEL(), 0.22, 0.92, 0); add(h, C(0.07, 0.07, 0.26, 12), STEEL(), -0.25, 0.92, 0.05); }
      if (floor === 8) { add(h, B(0.5, 0.02, 0.35), std('#c8a070', 0.7), 0, 0.79, 0); for (let i = 0; i < 4; i++) add(h, C(0.03, 0.03, 0.14, 6), std('#7a2a1a', 0.7), -0.15 + i * 0.1, 0.82, 0).rotation.z = Math.PI / 2; }
      break;
    }
    case 'coffeetable': add(h, B(w, 0.04, d), std('#2a2a2a', 0.3), 0, 0.42, 0); for (const sx of [-1, 1]) add(h, B(0.04, 0.4, d - 0.08), std('#2a2a2a', 0.3), sx * (w / 2 - 0.05), 0.2, 0); break;
    case 'sidetable': add(h, B(w, 0.6, d), DARKWOOD(), 0, 0.3, 0); add(h, C(0.04, 0.06, 0.25, 10), std('#e8d8a0', 0.4), 0, 0.73, 0); add(h, C(0.13, 0.09, 0.16, 12), std('#f4ead8', 0.6, 0, '#ffd8a0', 0.4), 0, 0.92, 0); break;
    case 'foldtable': add(h, B(w, 0.04, d), std('#f2f2ee', 0.5), 0, 0.74, 0); for (const sx of [-1, 1]) add(h, B(0.04, 0.72, d - 0.1), STEEL(), sx * (w / 2 - 0.1), 0.36, 0); add(h, B(0.32, 0.02, 0.24), WHITE(), -0.4, 0.77, 0.05); add(h, B(0.03, 0.18, 0.03), std('#2a6ac8', 0.5), 0.5, 0.85, 0); add(h, B(0.36, 0.25, 0.04), std('#141418', 0.5), 0.2, 0.89, -0.2); break;
    case 'desk': {
      add(h, B(w, 0.04, d), WHITE(), 0, 0.75, 0);
      for (const sx of [-1, 1]) add(h, B(0.05, 0.73, d - 0.05), IRON(), sx * (w / 2 - 0.04), 0.37, 0);
      const screens = floor === 3 ? 3 : 1;
      for (let i = 0; i < screens; i++) {
        const x = (i - (screens - 1) / 2) * 0.62;
        add(h, B(0.58, 0.36, 0.03), std('#141418', 0.4), x, 1.06, -d / 2 + 0.12).rotation.y = -x * 0.4;
        const scr = add(h, B(0.54, 0.32, 0.01), std('#2a3a5a', 0.3, 0, ['#3a8ad8', '#2ad890', '#d84a8a'][i % 3], 0.8), x, 1.06, -d / 2 + 0.14); scr.rotation.y = -x * 0.4;
        anim.glows.push(scr.material as THREE.MeshStandardMaterial);
        add(h, B(0.04, 0.14, 0.04), IRON(), x, 0.84, -d / 2 + 0.12);
      }
      add(h, B(0.44, 0.02, 0.15), std('#1a1a1a', 0.5), 0, 0.78, 0.05);
      add(h, C(0.04, 0.035, 0.1, 10), std(floor === 3 ? '#f0c8d8' : '#e8e0d0', 0.4), w / 2 - 0.2, 0.82, 0.1);
      break;
    }
    case 'bookshelf': {
      add(h, B(w, 2.2, d), DARKWOOD(), 0, 1.1, 0);
      for (let r = 0; r < 5; r++) bookRow(h, -w / 2 + 0.06, w / 2 - 0.06, 0.12 + r * 0.42, d / 2 - 0.08, Math.round(item.x * 11 + r + floor * 7));
      break;
    }
    case 'cabinet': add(h, B(w, 1.0, d), DARKWOOD(), 0, 0.5, 0); for (let i = 0; i < 3; i++) add(h, B(w / 3 - 0.06, 0.8, 0.02), WOOD(), -w / 3 + i * w / 3, 0.5, d / 2 + 0.01); add(h, B(0.35, 0.25, 0.25), std('#e8e0d0', 0.4), 0.3, 1.13, 0); add(h, B(0.12, 0.08, 0.01), std('#f0e070', 0.9), 0.3, 1.15, 0.13); break;
    case 'kitchen': {
      add(h, B(w, 0.88, d), WHITE(), 0, 0.44, 0);
      add(h, B(w + 0.02, 0.04, d + 0.02), std('#3a3a3a', 0.3), 0, 0.9, 0);
      add(h, B(0.6, 0.02, 0.4), STEEL(), -w / 4, 0.92, 0); add(h, C(0.015, 0.015, 0.3, 6), STEEL(), -w / 4, 1.05, -d / 2 + 0.06);
      for (let i = 0; i < 4; i++) add(h, C(0.08, 0.08, 0.02, 12), IRON(), w / 4 + (i % 2 ? 0.14 : -0.14), 0.93, i < 2 ? -0.1 : 0.1);
      add(h, B(w, 0.7, 0.35), WHITE(), 0, 1.9, -d / 2 + 0.18); // upper cupboards
      add(h, B(0.6, 1.8, 0.6), std('#e8eaec', 0.4, 0.2), w / 2 + 0.35 > w ? w / 2 - 0.3 : w / 2 - 0.3, 0.9, 0).visible = false;
      break;
    }
    case 'tv': add(h, B(w, 0.5, 0.4), DARKWOOD(), 0, 0.25, 0); add(h, B(1.1, 0.64, 0.06), std('#0a0a0e', 0.3), 0, 0.88, -0.05); { const s = add(h, B(1.04, 0.58, 0.01), std('#1a2a3a', 0.3, 0, '#5a8aa8', 0.5), 0, 0.88, -0.015); anim.glows.push(s.material as THREE.MeshStandardMaterial); } break;
    // -------------------------------------------- the flats' stories
    case 'tissues': add(h, B(0.4, 0.55, 0.4), DARKWOOD(), 0, 0.27, 0); add(h, B(0.2, 0.08, 0.12), std('#e8f0f8', 0.8), 0, 0.59, 0); add(h, B(0.06, 0.06, 0.02), WHITE(), 0, 0.66, 0); break;
    case 'diploma': add(h, B(0.9, 0.6, 0.03), DARKWOOD(), 0, 1.8, 0); add(h, new THREE.PlaneGeometry(0.8, 0.5), mapped(paperTexture(['Lic. M. Goldstein', 'Psicología', 'UBA · 1987'], '#f8f2e0')), 0, 1.8, 0.02); break;
    case 'drums': {
      const shell = std('#c8202a', 0.3, 0.4);
      const head = std('#f4f0e8', 0.6);
      const bass = add(h, C(0.32, 0.32, 0.4, 20), shell, 0, 0.34, 0); bass.rotation.x = Math.PI / 2;
      add(h, new THREE.CircleGeometry(0.31, 20), head, 0, 0.34, 0.205);
      for (const [x, z, r, y] of [[-0.5, 0.25, 0.18, 0.62], [0.42, 0.3, 0.16, 0.6], [-0.15, -0.1, 0.13, 0.82], [0.22, -0.1, 0.14, 0.84]]) { add(h, C(r, r, 0.18, 16), shell, x, y, z); add(h, C(r * 0.96, r * 0.96, 0.01, 16), head, x, y + 0.095, z); add(h, C(0.012, 0.012, y - 0.1, 6), STEEL(), x, (y - 0.1) / 2, z); }
      for (const [x, z, y] of [[-0.85, -0.2, 1.15], [0.85, -0.3, 1.25], [-0.75, 0.55, 0.95]]) { add(h, C(0.012, 0.012, y, 6), STEEL(), x, y / 2, z); add(h, C(0.22, 0.22, 0.01, 18), BRASS(), x, y, z); }
      chairMesh(h, 0, -0.75, '#141414');
      break;
    }
    case 'amp': add(h, B(w, 0.6, d), std('#141414', 0.7), 0, 0.3, 0); add(h, B(w - 0.08, 0.4, 0.01), std('#3a3a3a', 0.95), 0, 0.28, d / 2 + 0.005); add(h, B(w - 0.08, 0.06, 0.01), BRASS(), 0, 0.53, d / 2 + 0.006); break;
    case 'posters': ['METAL', 'LOS DEL PALIER', 'RUIDO SANTO'].forEach((t, i) => add(h, new THREE.PlaneGeometry(0.7, 1.0), mapped(posterTexture(t, ['#1a1a2a', '#8a1a1a', '#2a5a2a'][i], '#ffd84a', i + 3)), -1 + i, 1.7, 0.02)); break;
    case 'egg-foam': { const m = std('#3a3a44', 0.98); for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) add(h, B(0.38, 0.38, 0.06), m, -1 + c * 0.4, 0.9 + r * 0.4, 0.03).rotation.z = 0.785; break; }
    case 'bucket': add(h, C(0.21, 0.17, 0.36, 14), std(['#2a6ac8', '#e05a1a', '#3a8a4a'][Math.abs(Math.round(item.x + item.z)) % 3], 0.5), 0, 0.18, 0); add(h, C(0.19, 0.19, 0.01, 14), std('#5a8aa8', 0.05, 0.1), 0, 0.3, 0); break;
    case 'towels': add(h, B(w, 0.03, d), std('#e8a0a8', 0.95), 0, 0.015, 0); add(h, B(w * 0.6, 0.035, d * 0.8), std('#a0c8e8', 0.95), 0.2, 0.03, 0.05); break;
    case 'stain': {
      // The leak: a brown stain on the ceiling and the drops that fall into the buckets.
      const t = canvas(256, 256, ctx => { const gr = ctx.createRadialGradient(128, 128, 10, 128, 128, 126); gr.addColorStop(0, 'rgba(120,90,50,.85)'); gr.addColorStop(0.6, 'rgba(150,120,70,.5)'); gr.addColorStop(1, 'rgba(150,120,70,0)'); ctx.fillStyle = gr; ctx.fillRect(0, 0, 256, 256); });
      const s = add(h, new THREE.PlaneGeometry(w, d), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false }), 0, 3.19, 0); s.rotation.x = Math.PI / 2;
      break;
    }
    case 'cattree': add(h, B(w, 0.06, d), std('#c8b898', 0.95), 0, 0.03, 0); add(h, C(0.08, 0.08, 1.6, 10), std('#d8c8a8', 0.95), 0, 0.8, 0); for (const [y, s] of [[0.6, 0.5], [1.1, 0.42], [1.62, 0.5]]) add(h, B(s, 0.06, s), std('#8a6a4a', 0.95), 0, y, 0); break;
    case 'litter': add(h, B(w, 0.14, d), std('#3a8ac8', 0.5), 0, 0.07, 0); add(h, B(w - 0.06, 0.02, d - 0.06), std('#d8ccb0', 0.98), 0, 0.13, 0); break;
    case 'cats': {
      // Fourteen cats: on the sofa back, the cat tree, the shelf, the window sill, the floor.
      const where: [number, number, number, number][] = [[10.9, 3.6, 1.68, 0.4], [10.9, 3.6, 0.66, -0.8], [1.3, 6.6, 1.68, 2.2], [1.3, 6.6, 1.16, 0.3], [8.9, 4.88, 0.98, Math.PI], [7.3, 4.88, 0.98, 2.6],
        [11.35, 6.0, 0, -Math.PI / 2], [3.6, 7.2, 0, 1.1], [9.6, 7.4, 0, 2.2], [6.8, 7.6, 0, -2.6], [2.2, 3.2, 0, 0.6], [11.0, 9.3, 0, Math.PI], [5.0, 9.4, 0.92, 0.4], [3.6, 9.4, 0.92, -0.5]];
      const colors = ['#8a8a8a', '#e09a4a', '#1a1a1a', '#f0ece4', '#6a5a4a', '#c8c0b0', '#3a3a3a'];
      where.forEach(([x, z, y, hd], i) => { const cat = catMesh(colors[i % colors.length], i, anim); cat.position.set(x - item.x, y, z - item.z); cat.rotation.y = hd; h.add(cat); });
      break;
    }
    case 'ringlight': add(h, C(0.02, 0.02, 1.6, 6), IRON(), 0, 0.8, 0); { const ring = add(h, new THREE.TorusGeometry(0.22, 0.025, 8, 28), std('#ffffff', 0.4, 0, '#fff8e8', 1.4), 0, 1.65, 0.04); anim.glows.push(ring.material as THREE.MeshStandardMaterial); } add(h, C(0.25, 0.25, 0.03, 12), IRON(), 0, 0.02, 0); break;
    case 'bathtub': add(h, B(w, 0.55, d), WHITE(), 0, 0.28, 0); add(h, B(w - 0.12, 0.02, d - 0.12), std('#9ac8e0', 0.05, 0.1), 0, 0.555, 0); add(h, C(0.02, 0.02, 0.3, 6), STEEL(), w / 2 - 0.12, 0.7, -d / 2 + 0.08); break;
    case 'bathwall': add(h, B(w * 0.3, 2.4, d), std('#e8eef0', 0.6), -w * 0.35, 1.2, 0); add(h, B(w * 0.3, 2.4, d), std('#e8eef0', 0.6), w * 0.35, 1.2, 0); add(h, B(w, 0.8, d), std('#e8eef0', 0.6), 0, 2.8, 0); break;
    case 'puddle': { const p = add(h, new THREE.CircleGeometry(0.5, 24), std('#7ab0d0', 0.02, 0.2), 0, 0.006, 0); p.rotation.x = -Math.PI / 2; p.scale.set(w, d, 1); break; }
    case 'lockbox': add(h, B(0.22, 0.28, 0.08), IRON(), 0, 1.3, 0); for (let i = 0; i < 4; i++) add(h, C(0.02, 0.02, 0.02, 8), BRASS(), -0.06 + i * 0.04, 1.26, 0.05).rotation.x = Math.PI / 2; break;
    case 'bulb': add(h, C(0.005, 0.005, 0.5, 4), IRON(), 0, 2.95, 0); { const b = add(h, new THREE.SphereGeometry(0.05, 10, 8), std('#fff8e0', 0.3, 0, '#fff0c0', 2.2), 0, 2.66, 0); anim.glows.push(b.material as THREE.MeshStandardMaterial); } break;
    case 'ladder': for (const s of [-1, 1]) { const leg = add(h, B(0.05, 1.8, 0.05), std('#c8c8c0', 0.5, 0.4), s * 0.2, 0.88, 0.3); leg.rotation.x = 0.28; const back = add(h, B(0.05, 1.8, 0.05), std('#c8c8c0', 0.5, 0.4), s * 0.2, 0.88, -0.3); back.rotation.x = -0.28; } for (let i = 1; i < 5; i++) add(h, B(0.4, 0.03, 0.08), std('#c8c8c0', 0.5, 0.4), 0, i * 0.34, 0.3 - i * 0.08); break;
    case 'gramophone': add(h, B(w, 0.6, d), DARKWOOD(), 0, 0.3, 0); add(h, C(0.18, 0.18, 0.02, 20), std('#141414', 0.3), 0, 0.62, 0); { const horn = add(h, new THREE.ConeGeometry(0.22, 0.4, 18, 1, true), BRASS(), 0.15, 0.9, -0.1); horn.rotation.z = -1.0; } break;
    case 'photos': for (let i = 0; i < 5; i++) add(h, new THREE.PlaneGeometry(0.32, 0.4), mapped(photoTexture(i + 7)), -1.2 + i * 0.6, 1.55 + (i % 2) * 0.12, 0.02); break;
    case 'cage': add(h, C(0.03, 0.03, 1.2, 6), IRON(), 0, 0.6, 0); add(h, C(0.2, 0.2, 0.4, 12, ), new THREE.MeshStandardMaterial({ color: '#c8a04a', wireframe: true }), 0, 1.4, 0); add(h, new THREE.SphereGeometry(0.06, 8, 6), std('#f0d020', 0.8), 0, 1.38, 0); break;
    case 'coffin': {
      // On two trestles; the lid leans against the wall behind.
      for (const s of [-1, 1]) { add(h, B(0.06, 0.6, 0.6), DARKWOOD(), s * 0.7, 0.3, 0); add(h, B(0.1, 0.06, 0.6), DARKWOOD(), s * 0.7, 0.6, 0); }
      add(h, B(w, 0.34, d), std('#3a1e10', 0.35, 0.1), 0, 0.8, 0);
      add(h, B(w - 0.08, 0.02, d - 0.08), std('#e8e0f0', 0.9), 0, 0.98, 0);
      for (const s of [-1, 1]) add(h, B(0.12, 0.04, 0.04), BRASS(), s * 0.6, 0.85, d / 2 + 0.02);
      const lid = add(h, B(w, 0.05, d), std('#3a1e10', 0.35, 0.1), 0, 1.0, -d / 2 - 0.05); lid.rotation.x = -1.35; lid.position.set(0, 0.95, -d / 2 + 0.05);
      add(h, B(0.42, 0.02, 0.3), WHITE(), 0.5, 1.0, 0); // the receipt: «cuota 14 de 36»
      break;
    }
    case 'flowers-vase': add(h, C(0.1, 0.07, 0.35, 12), std('#2a4a7a', 0.2, 0.3), 0, 0.18, 0); for (let i = 0; i < 6; i++) add(h, new THREE.SphereGeometry(0.06, 8, 6), std(['#f0e040', '#e05a8a', '#f4f0ea'][i % 3], 0.8), Math.sin(i) * 0.08, 0.45 + (i % 2) * 0.06, Math.cos(i) * 0.08); break;
    case 'cross': add(h, B(0.06, 0.4, 0.03), DARKWOOD(), 0, 1.9, 0.02); add(h, B(0.24, 0.06, 0.03), DARKWOOD(), 0, 1.98, 0.02); break;
    case 'partytable': {
      add(h, B(w, 0.05, d), std('#f4f0ea', 0.7), 0, 0.76, 0); add(h, B(w + 0.02, 0.3, d + 0.02), std('#f0a0c8', 0.9), 0, 0.62, 0);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(h, B(0.05, 0.74, 0.05), WOOD(), sx * (w / 2 - 0.08), 0.37, sz * (d / 2 - 0.08));
      add(h, C(0.2, 0.2, 0.16, 18), std('#f4e8d0', 0.7), 0, 0.87, 0); add(h, C(0.2, 0.2, 0.04, 18), std('#e04a8a', 0.6), 0, 0.97, 0);
      for (let i = 0; i < 6; i++) { add(h, C(0.008, 0.008, 0.07, 4), std('#f0e070', 0.4), Math.sin(i) * 0.12, 1.02, Math.cos(i) * 0.12); const fl = add(h, new THREE.SphereGeometry(0.012, 6, 4), bright('#ffb030'), Math.sin(i) * 0.12, 1.07, Math.cos(i) * 0.12); anim.flames.push(fl); }
      for (let i = 0; i < 8; i++) add(h, C(0.08, 0.08, 0.01, 12), std(['#2a8ad8', '#f0c020', '#e04a4a'][i % 3], 0.5), -w / 2 + 0.25 + i * (w - 0.5) / 7, 0.79, (i % 2 ? 0.25 : -0.25));
      break;
    }
    case 'balloons': {
      add(h, B(0.3, 0.1, 0.3), std('#e8e0d0', 0.6), 0, 0.05, 0);
      ['#e04a4a', '#2a8ad8', '#f0c020', '#3ac06a', '#c04ad8'].forEach((c, i) => {
        const b = add(h, new THREE.SphereGeometry(0.2, 14, 10), std(c, 0.25, 0.1), Math.sin(i * 1.3) * 0.18, 1.9 + (i % 3) * 0.25, Math.cos(i * 1.3) * 0.18); b.scale.set(1, 1.2, 1);
        anim.bobs.push({ mesh: b, base: b.position.y, phase: i });
        add(h, C(0.003, 0.003, 1.8 + (i % 3) * 0.25, 3), WHITE(), Math.sin(i * 1.3) * 0.09, 0.95 + (i % 3) * 0.12, Math.cos(i * 1.3) * 0.09);
      });
      break;
    }
    case 'garland': { const letters = 'FELIZ CUMPLE BENJA'; for (let i = 0; i < letters.length; i++) { if (letters[i] === ' ') continue; const flag = add(h, new THREE.PlaneGeometry(0.42, 0.5), mapped(textTexture(letters[i], ['#e04a4a', '#2a8ad8', '#f0c020', '#3ac06a'][i % 4], '#ffffff', 128, 160, 'bold 110px Arial')), -w / 2 + 0.6 + i * (w - 1.2) / letters.length, 2.55 - Math.sin(i / letters.length * Math.PI) * 0.25, 0.02); flag.rotation.z = (i % 2 ? 0.05 : -0.05); } break; }
    case 'gifts': ['#e04a4a', '#2a8ad8', '#f0c020'].forEach((c, i) => { const s = 0.3 + i * 0.06; add(h, B(s, s, s), std(c, 0.6), -0.3 + i * 0.32, s / 2, (i % 2) * 0.1); add(h, B(s + 0.01, 0.04, 0.06), std('#f4f0ea', 0.5), -0.3 + i * 0.32, s + 0.01, (i % 2) * 0.1); }); break;
    case 'piano': {
      add(h, B(w, 1.25, d), std('#141012', 0.25, 0.1), 0, 0.62, 0);
      add(h, B(w - 0.1, 0.05, 0.3), WHITE(), 0, 0.76, d / 2 + 0.1);
      for (let i = 0; i < 20; i++) add(h, B(0.03, 0.03, 0.18), std('#141012', 0.3), -w / 2 + 0.15 + i * (w - 0.3) / 20, 0.8, d / 2 + 0.06);
      for (const s of [-1, 1]) add(h, B(0.06, 0.7, 0.3), std('#141012', 0.25), s * (w / 2 - 0.03), 0.35, d / 2 + 0.1);
      add(h, B(0.3, 0.04, 0.2), std('#f0e070', 0.9), 0.4, 1.27, 0); // a sticky note: «MÍO. R.»
      add(h, B(0.3, 0.04, 0.2), std('#f0a0c8', 0.9), -0.4, 1.27, 0.05); // and another: «NO. MÍO. M.»
      break;
    }
    case 'portrait': add(h, B(1.0, 1.25, 0.05), BRASS(), 0, 1.8, 0); add(h, new THREE.PlaneGeometry(0.86, 1.1), mapped(canvas(128, 160, ctx => { ctx.fillStyle = '#4a3a2a'; ctx.fillRect(0, 0, 128, 160); ctx.fillStyle = '#d8b898'; ctx.beginPath(); ctx.arc(64, 62, 26, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = '#7a7a7a'; ctx.beginPath(); ctx.arc(64, 48, 28, Math.PI, 0); ctx.fill(); ctx.fillStyle = '#2a2a3a'; ctx.fillRect(30, 92, 68, 68); ctx.fillStyle = '#f0f0f0'; ctx.fillRect(56, 92, 16, 10); })), 0, 1.8, 0.03); break;
    case 'lamp-floor': add(h, C(0.18, 0.18, 0.03, 12), IRON(), 0, 0.02, 0); add(h, C(0.015, 0.015, 1.5, 6), IRON(), 0, 0.77, 0); { const s = add(h, C(0.14, 0.24, 0.3, 14, ), std('#f0e0c0', 0.8, 0, '#ffd8a0', 0.6), 0, 1.6, 0); anim.glows.push(s.material as THREE.MeshStandardMaterial); } break;
    case 'jacuzzi': {
      add(h, B(w, 0.6, d), std('#f4f4f6', 0.3), 0, 0.3, 0);
      add(h, B(w - 0.2, 0.02, d - 0.2), std('#3ab0d8', 0.05, 0.1, '#1a6a8a', 0.3), 0, 0.5, 0);
      for (let i = 0; i < 6; i++) add(h, C(0.03, 0.03, 0.02, 8), STEEL(), Math.sin(i) * (w / 2 - 0.15), 0.52, Math.cos(i) * (d / 2 - 0.15));
      add(h, B(0.5, 0.08, 0.5), std('#e8a0a0', 0.9), 0, 0.64, 0).visible = false;
      break;
    }
    case 'rubble': { const rand = random(55); for (let i = 0; i < 14; i++) { const s = 0.15 + rand() * 0.25; add(h, B(s, s * 0.7, s), std(['#b8a890', '#8a7a6a', '#c8584a'][i % 3], 0.95), (rand() - 0.5) * (w - s), s * 0.35 + (i > 8 ? 0.2 : 0), (rand() - 0.5) * (d - s)).rotation.set(rand(), rand(), rand()); } break; }
    case 'cementbags': for (let i = 0; i < 6; i++) add(h, B(0.55, 0.16, 0.38), std('#d8d0c0', 0.95), (i % 2 ? 0.28 : -0.28), 0.08 + Math.floor(i / 2) * 0.16, 0).rotation.y = (i % 3) * 0.05; break;
    case 'wheelbarrow': add(h, B(0.55, 0.3, 0.8), std('#3a7a3a', 0.6, 0.3), 0, 0.5, 0.1); add(h, C(0.17, 0.17, 0.06, 12), std('#141414', 0.8), 0, 0.17, 0.55).rotation.z = Math.PI / 2; for (const s of [-1, 1]) add(h, B(0.04, 0.04, 0.9), IRON(), s * 0.22, 0.42, -0.4); add(h, B(0.5, 0.06, 0.6), std('#9a948a', 0.95), 0, 0.66, 0.1); break;
    case 'halfwall': add(h, B(w, 1.2, d), std('#e8e4dc', 0.9), 0, 0.6, 0); add(h, B(w * 0.6, 0.3, d), std('#e8e4dc', 0.9), -w * 0.2, 1.35, 0); break;
    case 'tools': add(h, B(0.5, 0.2, 0.25), std('#c8301e', 0.5), 0, 0.1, 0); add(h, B(0.3, 0.03, 0.03), DARKWOOD(), 0.3, 0.02, 0.1); add(h, B(0.08, 0.06, 0.12), IRON(), 0.45, 0.04, 0.1); add(h, C(0.08, 0.08, 0.2, 10), std('#f0c020', 0.6), -0.35, 0.1, 0); break;
    case 'tupper': add(h, B(0.22, 0.08, 0.16), std('#d8f0e8', 0.3), 0, 0.04, 0); add(h, B(0.23, 0.02, 0.17), std('#2a8a6a', 0.5), 0, 0.09, 0); break;
    case 'notepaper': { const p = add(h, new THREE.PlaneGeometry(0.21, 0.15), mapped(paperTexture(['Gracias.', 'No voy', 'a la asamblea.'])), 0, 0.006, 0); p.rotation.x = -Math.PI / 2; break; }
    // -------------------------------------------- the terrace
    case 'tanks': {
      // On the roof of the machine room (3.2 m): two water tanks and a ladder.
      add(h, B(w, 0.2, d), std('#b8b4ac', 0.9), 0, 3.3, 0);
      for (const s of [-1, 1]) { add(h, C(1.2, 1.2, 1.6, 20), std('#d8d8d0', 0.6, 0.2), s * 1.8, 4.2, 0); add(h, C(1.25, 1.25, 0.1, 20), std('#9a9a92', 0.6), s * 1.8, 5.0, 0); }
      break;
    }
    case 'antenna': add(h, C(0.03, 0.04, 4.0, 6), STEEL(), 0, 2.0, 0); for (let i = 0; i < 5; i++) add(h, B(0.8 - i * 0.1, 0.02, 0.02), STEEL(), 0, 3.0 + i * 0.2, 0); add(h, new THREE.SphereGeometry(0.5, 12, 8, 0, Math.PI), std('#e8e8e4', 0.4), 0, 2.2, 0.1); break;
    case 'clothesline': {
      for (const s of [-1, 1]) add(h, C(0.04, 0.05, 2.0, 8), IRON(), s * (w / 2 - 0.05), 1.0, 0);
      add(h, B(w, 0.01, 0.01), WHITE(), 0, 1.92, 0);
      const rand = random(Math.round(item.z * 10));
      for (let x = -w / 2 + 0.6; x < w / 2 - 0.5; x += 0.55 + rand() * 0.5) {
        const big = rand() < 0.35;
        const cw = big ? 1.1 : 0.4 + rand() * 0.2, ch = big ? 1.1 : 0.5 + rand() * 0.25;
        const cloth = add(h, B(cw, ch, 0.015), std(['#f4f0ea', '#e88a8a', '#8ab0e8', '#f0d060', '#a8d8a8', '#e0e0e8', '#c870a8'][Math.floor(rand() * 7)], 0.95), x + cw / 2, 1.9 - ch / 2, 0);
        anim.bobs.push({ mesh: cloth, base: NaN, phase: x });
        if (big) x += 0.6;
      }
      break;
    }
    case 'basket': add(h, C(0.3, 0.24, 0.36, 14), std('#c8a060', 0.9), 0, 0.18, 0); add(h, B(0.36, 0.08, 0.3), std('#e8a0a8', 0.95), 0.02, 0.38, 0); break;
    case 'parrilla': {
      add(h, B(w, 0.85, d), std('#9a4a3a', 0.9), 0, 0.42, 0);
      add(h, B(w - 0.2, 0.04, d - 0.2), IRON(), 0, 0.92, 0);
      for (let i = 0; i < 6; i++) add(h, C(0.03, 0.03, 0.22, 6), std('#7a2a1a', 0.7), -0.4 + i * 0.16, 0.96, 0.1).rotation.z = Math.PI / 2; // chorizos
      for (let i = 0; i < 6; i++) { const ember = add(h, B(0.12, 0.05, 0.1), std('#3a1a0a', 0.9, 0, '#ff5a1a', 1.2), -0.5 + i * 0.2, 0.88, -0.15 + (i % 2) * 0.2); anim.flames.push(ember); }
      add(h, B(w, 1.6, 0.25), std('#9a4a3a', 0.9), 0, 1.65, -d / 2 + 0.12); add(h, B(0.4, 1.0, 0.4), std('#9a4a3a', 0.9), 0, 2.8, -d / 2 + 0.2);
      break;
    }
    case 'woodpile': for (let i = 0; i < 12; i++) add(h, C(0.07, 0.07, d * 0.9, 8), std(i % 2 ? '#7a5a3a' : '#5a3e24', 0.95), -0.18 + (i % 3) * 0.16, 0.08 + Math.floor(i / 3) * 0.13, 0).rotation.x = Math.PI / 2; break;
    case 'lights': {
      // String lights over the meeting, between the machine room and the parapet.
      const rand = random(9);
      for (let line = 0; line < 4; line++) {
        const z0 = -2.4, z1 = 9.8, x = -w / 2 + 1 + line * (w - 2) / 3;
        // The cable they hang from, tied to the machine room and to a pole on the parapet.
        const sag = (t: number) => new THREE.Vector3(x, 2.96 - Math.sin(t * Math.PI) * 0.5, (z0 + (z1 - z0) * t) - item.z);
        add(h, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(Array.from({ length: 15 }, (_, k) => sag(k / 14))), 42, 0.012, 4), std('#1a1a1a', 0.8), 0, 0, 0);
        add(h, C(0.025, 0.03, 3.0, 8), IRON(), x, 1.5, z1 - item.z);
        for (let k = 0; k <= 14; k++) {
          const t = k / 14;
          const b = add(h, new THREE.SphereGeometry(0.05, 8, 6), bright(rand() < 0.5 ? '#ffd890' : '#fff0c8'), x, 2.9 - Math.sin(t * Math.PI) * 0.5, (z0 + (z1 - z0) * t) - item.z);
          anim.bulbs.push(b.material as THREE.MeshBasicMaterial);
        }
      }
      break;
    }
    default:
      add(h, B(w, 0.8, d), std('#9a9a9a'), 0, 0.4, 0);
  }
  return h;
}
