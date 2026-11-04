// El tren de las 23:40 · the things on board and on the platforms, one
// builder per item type of layout.mjs. Original procedural geometry and
// canvas textures only. Every piece is built in its own frame: w along local
// x, d along local z, the front facing +z; `rot` turns it in quarter turns.
// Seat tops are at 0.42 m, where people3d's seated hips rest, so nobody sinks
// into a cushion. Shared helpers (materials, boxes, text) come from El
// consorcio's item kit.
import * as THREE from 'three';
import { canvas, random } from '../noche-abierta/build3d';
import { B, BRASS, C, DARKWOOD, GLASS, IRON, SEAT_TOP, STEEL, WHITE, WOOD, add, bright, mapped, std, textTexture, type Anim } from '../el-consorcio/edificio-items';
import { CEILING, type Furniture } from './layout.mjs';

export { SEAT_TOP };
export type TrainAnim = Anim & { tails: Anim['tails']; curtains: THREE.Object3D[]; flakes: THREE.Points[] };

const VELVET = () => std('#7a1e2a', 0.85);
const BRONZE = () => std('#a07840', 0.35, 0.7);
const SNOW = () => std('#f2f6fa', 0.9);

function holder(g: THREE.Group, item: Furniture) {
  const h = new THREE.Group();
  h.position.set(item.x, 0, item.z);
  h.rotation.y = (item.rot ?? 0) * Math.PI / 2;
  g.add(h);
  return h;
}
function cushion(h: THREE.Object3D, w: number, d: number, color: string, x = 0, z = 0) {
  add(h, B(w, 0.14, d), std(color, 0.9), x, SEAT_TOP - 0.07, z);
}
function paper(lines: string[], w = 256, h = 200, bg = '#f6f0dc', fg = '#2a2a3a') {
  return canvas(w, h, ctx => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = fg; ctx.font = 'italic bold 24px Georgia, serif'; ctx.textBaseline = 'top';
    lines.forEach((line, i) => ctx.fillText(line, 14, 16 + i * 32, w - 24));
  });
}
function clockFace(time: string) {
  const [hh, mm] = time.split(':').map(Number);
  return canvas(256, 256, ctx => {
    ctx.fillStyle = '#f6f0e0'; ctx.beginPath(); ctx.arc(128, 128, 120, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#1a1a1a'; ctx.lineWidth = 8; ctx.stroke();
    for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; ctx.fillStyle = '#1a1a1a'; ctx.fillRect(128 + Math.sin(a) * 96 - 3, 128 - Math.cos(a) * 96 - 10, 6, 20); }
    const hand = (a: number, len: number, width: number) => { ctx.lineWidth = width; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(128, 128); ctx.lineTo(128 + Math.sin(a) * len, 128 - Math.cos(a) * len); ctx.stroke(); };
    hand(((hh % 12) + mm / 60) / 12 * Math.PI * 2, 60, 10); hand(mm / 60 * Math.PI * 2, 92, 6);
  });
}
// A suitcase with straps, in one of a few colours.
function suitcase(h: THREE.Object3D, x: number, y: number, z: number, w: number, hgt: number, d: number, seed: number) {
  const rand = random(seed);
  const col = ['#7a3a1e', '#2a4a6a', '#3a3a3a', '#8a6a3a', '#5a1e2a', '#2a5a3a'][Math.floor(rand() * 6)];
  add(h, B(w, hgt, d), std(col, 0.6), x, y + hgt / 2, z);
  add(h, B(w + 0.01, 0.03, d + 0.01), std('#2a1a10', 0.6), x, y + hgt * 0.3, z);
  add(h, B(w + 0.01, 0.03, d + 0.01), std('#2a1a10', 0.6), x, y + hgt * 0.7, z);
  add(h, B(0.14, 0.03, 0.04), BRASS(), x, y + hgt + 0.015, z);
}
function urnMesh(h: THREE.Object3D, y: number) {
  add(h, C(0.07, 0.05, 0.16, 16), BRONZE(), 0, y + 0.08, 0);
  add(h, C(0.075, 0.07, 0.03, 16), BRONZE(), 0, y + 0.175, 0);
  add(h, new THREE.SphereGeometry(0.025, 10, 8), BRONZE(), 0, y + 0.2, 0);
}
function dogMesh(anim: Anim) {
  const g = new THREE.Group();
  const fur = std('#c8904a', 0.95), dark = std('#3a2414', 0.9);
  const body = add(g, new THREE.SphereGeometry(0.17, 12, 10), fur, 0, 0.26, 0); body.scale.set(1, 0.85, 1.7);
  add(g, new THREE.SphereGeometry(0.12, 12, 10), fur, 0, 0.42, 0.28);
  add(g, B(0.08, 0.07, 0.12), fur, 0, 0.39, 0.4);
  add(g, new THREE.SphereGeometry(0.025, 8, 6), dark, 0, 0.41, 0.46);
  for (const s of [-1, 1]) { const ear = add(g, B(0.05, 0.12, 0.03), dark, s * 0.09, 0.44, 0.26); ear.rotation.z = s * 0.4; }
  for (const s of [-1, 1]) add(g, new THREE.SphereGeometry(0.014, 6, 4), bright('#141414'), s * 0.045, 0.46, 0.38);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(g, C(0.03, 0.03, 0.2, 6), fur, sx * 0.08, 0.1, sz * 0.16);
  const tail = new THREE.Group(); tail.position.set(0, 0.3, -0.26); g.add(tail);
  const t = add(tail, C(0.02, 0.03, 0.22, 6), fur, 0, 0.1, -0.04); t.rotation.x = -0.6;
  anim.tails.push({ mesh: tail, phase: 1.3 });
  return g;
}
function lampMesh(h: THREE.Object3D, anim: Anim) {
  add(h, B(0.7, 0.04, 0.26), BRASS(), 0, CEILING - 0.02, 0);
  const shade = add(h, B(0.62, 0.06, 0.2), std('#fff4dc', 0.4, 0, '#ffd890', 1.2), 0, CEILING - 0.07, 0);
  anim.glows.push(shade.material as THREE.MeshStandardMaterial);
}
// The train seen from the platform: three coaches in El Nocturno's blue and
// cream, lit windows, the open door of the sleeping car with its steps.
function trainside(h: THREE.Object3D, w: number, d: number, door: number, anim: Anim) {
  const blue = std('#1e3a6a', 0.45, 0.3), cream = std('#e8dcc0', 0.6), roof = std('#5a5e66', 0.5, 0.5);
  const face = d / 2; // the platform side of the box
  add(h, B(w, 3.2, d - 0.3), blue, 0, 1.9, -0.15);
  add(h, B(w + 0.02, 0.5, d - 0.28), cream, 0, 2.15, -0.15);
  add(h, B(w, 0.3, d), roof, 0, 3.6, -0.15);
  add(h, B(w, 0.22, d - 0.6), IRON(), 0, 0.2, -0.15);
  const pane = std('#ffe2a8', 0.3, 0, '#ffd890', 0.9); anim.glows.push(pane);
  for (let x = -w / 2 + 1.2; x < w / 2 - 0.8; x += 1.9) {
    if (Math.abs(x - door) < 1.0) continue;
    add(h, B(1.2, 0.75, 0.03), pane, x, 2.15, face + 0.01);
    add(h, B(1.3, 0.05, 0.05), std('#c8c0b0', 0.4, 0.5), x, 1.76, face + 0.03);
  }
  for (const gap of [-w / 2 + 8, w / 2 - 8]) add(h, B(0.3, 3.0, d - 0.2), std('#141418', 0.8), gap, 1.8, -0.15);
  // The door: dark, with its little steps and a lamp over it.
  add(h, B(0.95, 2.1, 0.04), std('#141820', 0.4), door, 1.35, face + 0.01);
  add(h, B(0.9, 0.06, 0.4), STEEL(), door, 0.25, face + 0.2);
  add(h, B(0.9, 0.06, 0.3), STEEL(), door, 0.55, face + 0.1);
  for (const s of [-1, 1]) add(h, C(0.02, 0.02, 1.6, 6), BRASS(), door + s * 0.52, 1.4, face + 0.06);
  const sign = add(h, new THREE.PlaneGeometry(2.6, 0.32), mapped(textTexture('EL NOCTURNO DE LOS ANDES', '#1e3a6a', '#f0e0b0', 1024, 128, 'bold 70px Georgia, serif'), 0.4), door + 4.0, 2.9, face + 0.02);
  void sign;
  for (let x = -w / 2 + 2; x < w / 2; x += 8) for (const s of [-1, 1]) { const wheel = add(h, C(0.45, 0.45, 0.12, 18), IRON(), x + s * 0.9, 0.45, face - 0.15); wheel.rotation.x = Math.PI / 2; }
}
// The station buildings at the back of each platform.
function station(h: THREE.Object3D, w: number, d: number, place: string, anim: Anim) {
  const inca = place === 'inca', andes = place === 'andes';
  const wall = inca ? std('#8a7a6a', 0.95) : andes ? std('#e8d8b8', 0.85) : std('#d8c8a4', 0.85);
  add(h, B(w, 4.2, d), wall, 0, 2.1, 0);
  add(h, B(w + 0.2, 0.3, d + 0.4), std(inca ? '#4a3a30' : '#7a4a30', 0.7), 0, 4.3, -0.1);
  if (inca) {
    // Stone blocks drawn on the wall, and snow on the roof.
    const rand = random(2720);
    for (let i = 0; i < 70; i++) add(h, B(0.5 + rand() * 0.5, 0.28, 0.04), std(['#7a6a5a', '#9a8a78', '#6a5a4a'][Math.floor(rand() * 3)], 0.95), -w / 2 + rand() * w, 0.3 + rand() * 3.6, -d / 2 - 0.02);
    add(h, B(w + 0.3, 0.18, d + 0.6), SNOW(), 0, 4.5, -0.1);
  }
  // Doors and tall windows, lit from inside.
  const lit = std('#ffe2a8', 0.3, 0, '#ffd890', andes ? 0.4 : 1.0); anim.glows.push(lit);
  for (let x = -w / 2 + 1.5; x < w / 2 - 1; x += 3) {
    const doorHere = Math.abs(x) < 1.6;
    add(h, B(doorHere ? 1.6 : 1.1, doorHere ? 2.6 : 1.9, 0.04), doorHere ? std('#4a2e1a', 0.6) : lit, x, doorHere ? 1.3 : 2.0, -d / 2 - 0.03);
    add(h, B(doorHere ? 1.8 : 1.3, 0.12, 0.08), std('#f0e8d8', 0.6), x, doorHere ? 2.7 : 3.0, -d / 2 - 0.05);
  }
  // A canopy on iron posts over the back of the platform.
  if (!inca) {
    add(h, B(w, 0.08, 3.0), std(andes ? '#8a3a2a' : '#3a4a3a', 0.6, 0.2), 0, 3.4, -d / 2 - 1.5);
    for (let x = -w / 2 + 2; x < w / 2; x += 6) add(h, C(0.06, 0.07, 3.4, 8), IRON(), x, 1.7, -d / 2 - 2.9);
  }
}

// ---------------------------------------------------------------- the builders
export function buildItem(g: THREE.Group, item: Furniture, floor: number, anim: TrainAnim) {
  const h = holder(g, item);
  const { w, d } = item;
  const on = item.on ?? 0;
  switch (item.type) {
    // -------------------------------------------- platforms
    case 'station': station(h, w, d, item.place ?? 'mendoza', anim); break;
    case 'trainside': trainside(h, w, d, item.door ?? 0, anim); break;
    case 'kiosk': {
      add(h, B(w, 1.1, d), std('#2a4a3a', 0.6), 0, 0.55, 0);
      add(h, B(w - 0.2, 0.9, d - 0.2), std('#ffe8b8', 0.3, 0, '#ffd890', 0.6), 0, 1.55, 0);
      add(h, B(w + 0.3, 0.12, d + 0.3), std('#2a4a3a', 0.6), 0, 2.1, 0);
      for (let i = 0; i < 8; i++) add(h, B(0.18, 0.26, 0.02), std(['#c8301e', '#2a6ac8', '#f0c020', '#3a8a4a'][i % 4], 0.6), -w / 2 + 0.3 + i * 0.27, 1.25, d / 2 + 0.01);
      add(h, new THREE.PlaneGeometry(1.6, 0.3), mapped(textTexture('DIARIOS · CAFÉ', '#2a4a3a', '#f0e0b0', 512, 96, 'bold 50px Georgia')), 0, 2.3, d / 2 + 0.16);
      break;
    }
    case 'bench': {
      // A platform bench: wooden slats on iron legs, the backrest behind (−z).
      for (let i = 0; i < 4; i++) add(h, B(w, 0.03, 0.11), WOOD(), 0, SEAT_TOP - 0.015, -d / 2 + 0.08 + i * 0.13);
      for (let i = 0; i < 3; i++) add(h, B(w, 0.09, 0.03), WOOD(), 0, SEAT_TOP + 0.18 + i * 0.13, -d / 2 + 0.02);
      for (const s of [-1, 1]) { add(h, B(0.05, SEAT_TOP, d - 0.1), IRON(), s * (w / 2 - 0.15), SEAT_TOP / 2, 0); add(h, B(0.05, 0.5, 0.05), IRON(), s * (w / 2 - 0.15), SEAT_TOP + 0.25, -d / 2 + 0.02); }
      break;
    }
    case 'lamppost': {
      add(h, C(0.07, 0.1, 3.6, 10), IRON(), 0, 1.8, 0);
      add(h, C(0.12, 0.12, 0.3, 10), IRON(), 0, 0.15, 0);
      const globe = add(h, new THREE.SphereGeometry(0.2, 14, 10), std('#fff4dc', 0.3, 0, '#ffd890', 1.6), 0, 3.75, 0);
      anim.glows.push(globe.material as THREE.MeshStandardMaterial);
      break;
    }
    case 'cart': {
      add(h, B(w, 0.06, d), std('#4a4a4a', 0.5, 0.6), 0, 0.5, 0);
      for (const sx of [-1, 1]) { const wh = add(h, C(0.2, 0.2, 0.06, 14), std('#141414', 0.8), sx * (w / 2 - 0.25), 0.2, d / 2); wh.rotation.x = Math.PI / 2; const wb = add(h, C(0.2, 0.2, 0.06, 14), std('#141414', 0.8), sx * (w / 2 - 0.25), 0.2, -d / 2); wb.rotation.x = Math.PI / 2; }
      add(h, B(0.04, 0.9, 0.04), IRON(), -w / 2, 0.9, 0); add(h, B(0.04, 0.04, d), IRON(), -w / 2, 1.35, 0);
      suitcase(h, 0.25, 0.53, 0, 0.7, 0.45, 0.5, 3); suitcase(h, 0.25, 0.98, 0, 0.55, 0.32, 0.4, 9);
      break;
    }
    case 'urn': urnMesh(h, on); break;
    case 'suitcases': {
      suitcase(h, -w / 4, 0, 0, w / 2 - 0.05, 0.6, d - 0.05, Math.round(item.x * 7));
      suitcase(h, w / 4, 0, 0, w / 2 - 0.05, 0.45, d - 0.1, Math.round(item.x * 11));
      suitcase(h, w / 4, 0.45, 0, w / 2 - 0.15, 0.3, d - 0.2, Math.round(item.z * 13));
      break;
    }
    case 'clock': {
      add(h, B(0.06, 0.06, 0.4), IRON(), 0, 3.6, -0.2);
      add(h, C(0.42, 0.42, 0.12, 24), IRON(), 0, 3.3, 0).rotation.x = Math.PI / 2;
      const face = add(h, new THREE.CircleGeometry(0.38, 24), mapped(clockFace(item.time ?? '23:40'), 0.5), 0, 3.3, -0.065); face.rotation.y = Math.PI;
      break;
    }
    case 'edge': add(h, B(w, 0.012, d), std('#f0c020', 0.7), 0, 0.006, 0); break;
    case 'sign': add(h, new THREE.PlaneGeometry(w, 0.5), mapped(textTexture(item.text ?? '', '#1a2a4a', '#f4f0e0', 1024, 160, 'bold 96px Georgia, serif'), 0.25), 0, 3.0, 0).rotation.y = Math.PI; break;
    case 'booth': {
      add(h, B(w, 2.4, d), std('#4a5a3a', 0.7), 0, 1.2, 0);
      add(h, B(w - 0.4, 0.8, 0.03), std('#ffe8b8', 0.3, 0, '#ffd890', 0.8), 0, 1.5, -d / 2 - 0.01);
      add(h, B(w + 0.3, 0.12, d + 0.3), std('#2a3a2a', 0.6), 0, 2.46, 0); add(h, B(w + 0.3, 0.12, d + 0.3), SNOW(), 0, 2.58, 0);
      add(h, new THREE.PlaneGeometry(1.8, 0.3), mapped(textTexture('GENDARMERÍA · CONTROL', '#2a3a2a', '#f0e0b0', 768, 110, 'bold 54px Arial')), 0, 2.15, -d / 2 - 0.02).rotation.y = Math.PI;
      break;
    }
    case 'stall': {
      // The souvenirs of Puente del Inca: things left in the sulphur spring until they turn to stone.
      add(h, B(w, 0.85, d), std('#6a4a2a', 0.8), 0, 0.42, 0);
      add(h, B(w + 0.2, 0.06, d + 0.3), std('#c84a2a', 0.7), 0, 2.1, 0);
      for (const s of [-1, 1]) add(h, C(0.03, 0.03, 1.25, 6), IRON(), s * (w / 2 - 0.05), 1.47, d / 2);
      const stone = std('#e0a040', 0.9);
      const rand = random(77);
      for (let i = 0; i < 9; i++) { const k = rand(); const m = k < 0.33 ? add(h, B(0.16, 0.24, 0.1), stone, 0, 0, 0) : k < 0.66 ? add(h, C(0.07, 0.08, 0.2, 10), stone, 0, 0, 0) : add(h, new THREE.SphereGeometry(0.1, 10, 8), stone, 0, 0, 0); m.position.set(-w / 2 + 0.2 + i * (w - 0.4) / 8, 0.95, (rand() - 0.5) * 0.4); }
      add(h, new THREE.PlaneGeometry(1.6, 0.26), mapped(textTexture('RECUERDOS DE PIEDRA', '#c84a2a', '#fff4dc', 768, 120, 'bold 56px Arial')), 0, 1.9, d / 2 + 0.17);
      break;
    }
    case 'snowbank': { const s = add(h, new THREE.SphereGeometry(1, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), SNOW(), 0, 0, 0); s.scale.set(w / 2, 0.7, d / 2); break; }
    case 'snowman': {
      add(h, new THREE.SphereGeometry(0.3, 14, 10), SNOW(), 0, 0.28, 0);
      add(h, new THREE.SphereGeometry(0.21, 14, 10), SNOW(), 0, 0.72, 0);
      add(h, new THREE.SphereGeometry(0.15, 14, 10), SNOW(), 0, 1.03, 0);
      const nose = add(h, new THREE.ConeGeometry(0.03, 0.14, 8), std('#e06a1a', 0.6), 0, 1.03, 0.2); nose.rotation.x = Math.PI / 2;
      add(h, C(0.13, 0.13, 0.14, 12), std('#141414', 0.6), 0, 1.22, 0);
      for (const s of [-1, 1]) add(h, new THREE.SphereGeometry(0.018, 6, 4), std('#141414', 0.6), s * 0.05, 1.08, 0.14);
      break;
    }
    case 'lantern': {
      add(h, B(0.16, 0.24, 0.16), IRON(), 0, 1.0, 0);
      const flame = add(h, new THREE.SphereGeometry(0.05, 8, 6), bright('#ffb040'), 0, 1.0, 0);
      anim.flames.push(flame);
      add(h, C(0.012, 0.012, 1.0, 6), IRON(), 0, 0.5, 0);
      break;
    }
    case 'palm': {
      const trunk = std('#7a5a3a', 0.9);
      for (let i = 0; i < 8; i++) add(h, C(0.16 - i * 0.008, 0.18 - i * 0.008, 0.6, 8), trunk, Math.sin(i * 0.3) * 0.08, 0.3 + i * 0.58, 0);
      const leaf = std('#3a6a2a', 0.8);
      for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2; const l = add(h, B(0.3, 0.04, 2.2), leaf, Math.sin(a) * 0.9, 4.6, Math.cos(a) * 0.9); l.rotation.y = a; l.rotation.x = 0.5; }
      break;
    }
    // -------------------------------------------- locomotive
    case 'engine': {
      add(h, B(w, 1.9, d), std('#4a5a4a', 0.6, 0.3), 0, 0.95, 0);
      for (let x = -w / 2 + 1; x < w / 2; x += 1.6) { add(h, B(0.9, 0.7, 0.03), std('#3a4a3a', 0.6, 0.3), x, 1.2, d / 2 + 0.01); add(h, B(0.9, 0.7, 0.03), std('#3a4a3a', 0.6, 0.3), x, 1.2, -d / 2 - 0.01); }
      for (let x = -w / 2 + 0.5; x < w / 2; x += 0.5) add(h, B(0.03, 0.4, d + 0.04), std('#2a2a2a', 0.5, 0.5), x, 1.6, 0);
      for (const s of [-1, 1]) add(h, C(0.03, 0.03, w, 8), std('#e0c040', 0.5, 0.3), 0, 1.05, s * (d / 2 + 0.25)).rotation.z = Math.PI / 2;
      const gauge = add(h, new THREE.CircleGeometry(0.1, 16), std('#f0f0e0', 0.4, 0, '#ffe8c0', 0.3), w / 2 - 0.4, 1.4, d / 2 + 0.02); void gauge;
      break;
    }
    case 'console': {
      // The driver's desk under the windscreen: levers, dials, the dead man's pedal.
      add(h, B(w, 0.95, d), std('#2a3a4a', 0.5, 0.4), 0, 0.47, 0);
      const top = add(h, B(w + 0.1, 0.06, d), std('#1a1a1a', 0.5, 0.3), -0.05, 0.98, 0); top.rotation.z = 0.25;
      for (let i = 0; i < 5; i++) add(h, new THREE.CircleGeometry(0.07, 14), std('#f0f0e0', 0.4, 0, '#c8ffd8', 0.5), -w / 2 - 0.005, 0.8, -1.0 + i * 0.5).rotation.y = -Math.PI / 2;
      for (const z of [-0.8, 0.5]) { const lever = add(h, C(0.02, 0.02, 0.35, 8), STEEL(), -0.1, 1.15, z); lever.rotation.z = 0.4; add(h, new THREE.SphereGeometry(0.04, 10, 8), std('#c8301e', 0.4), -0.17, 1.31, z); }
      break;
    }
    case 'cabseat': {
      add(h, C(0.04, 0.05, SEAT_TOP - 0.14, 8), IRON(), 0, (SEAT_TOP - 0.14) / 2, -0.05);
      cushion(h, w, d, '#3a3a3a');
      add(h, B(w, 0.6, 0.1), std('#3a3a3a', 0.9), 0, SEAT_TOP + 0.32, -d / 2 + 0.05);
      break;
    }
    case 'toolbox': add(h, B(w, 0.5, d), std('#c8301e', 0.5, 0.3), 0, 0.25, 0); add(h, B(0.3, 0.04, 0.04), IRON(), 0, 0.53, 0); break;
    case 'thermos': add(h, C(0.05, 0.05, 0.3, 12), std('#2a6a3a', 0.4, 0.4), 0, on + 0.15, 0); add(h, C(0.055, 0.055, 0.06, 12), std('#e8e8e8', 0.4), 0, on + 0.32, 0); break;
    case 'cups': for (const s of [-1, 1]) { add(h, C(0.04, 0.035, 0.09, 12), WHITE(), s * 0.08, on + 0.045, 0); } break;
    case 'blanket': add(h, B(w, 0.05, d), std('#8a2a2a', 0.95), 0, on + 0.02, 0); add(h, B(w * 0.98, 0.012, 0.04), std('#e8d8a0', 0.9), 0, on + 0.05, d * 0.3); break;
    case 'lamp-ceiling': lampMesh(h, anim); break;
    // -------------------------------------------- luggage van
    case 'guarddesk': {
      add(h, B(w, 0.05, d), DARKWOOD(), 0, 0.76, 0);
      for (const s of [-1, 1]) add(h, B(0.05, 0.74, d), DARKWOOD(), s * (w / 2 - 0.03), 0.37, 0);
      add(h, B(w - 0.1, 0.5, 0.03), DARKWOOD(), 0, 0.5, -d / 2 + 0.02);
      const ledger = add(h, new THREE.PlaneGeometry(0.4, 0.3), mapped(paper(['Bulto 14: perro', 'Bulto 15: chelo', 'Bulto 16: ¿queso?'])), 0.2, 0.79, 0.05); ledger.rotation.x = -Math.PI / 2;
      add(h, C(0.04, 0.05, 0.25, 10), std('#fff4dc', 0.4, 0, '#ffd890', 1.0), -0.5, 0.92, -0.1);
      break;
    }
    case 'chair': {
      const m = std('#5a3a22', 0.6);
      add(h, B(0.44, 0.04, 0.42), m, 0, SEAT_TOP - 0.02, 0);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(h, B(0.035, SEAT_TOP - 0.04, 0.035), m, sx * 0.19, (SEAT_TOP - 0.04) / 2, sz * 0.18);
      add(h, B(0.44, 0.42, 0.04), m, 0, SEAT_TOP + 0.24, -0.2);
      break;
    }
    case 'crates': {
      const wood = std('#a8804a', 0.85);
      const n = Math.max(1, Math.round(w / 0.8));
      for (let i = 0; i < n; i++) {
        const x = -w / 2 + (i + 0.5) * (w / n);
        add(h, B(w / n - 0.04, 0.7, d - 0.02), wood, x, 0.35, 0);
        if (i % 2 === 0) add(h, B(w / n - 0.14, 0.6, d - 0.12), wood, x, 1.0, 0);
        add(h, B(w / n - 0.02, 0.04, d), std('#6a4a2a', 0.8), x, 0.55, 0);
      }
      add(h, new THREE.PlaneGeometry(0.5, 0.2), mapped(textTexture('FRÁGIL', '#a8804a', '#8a1a1a', 256, 96, 'bold 60px Arial')), -w / 2 + 0.4, 0.4, d / 2 + 0.01);
      break;
    }
    case 'mailbags': {
      const bag = std('#8a7a5a', 0.95);
      for (let i = 0; i < 5; i++) { const b = add(h, new THREE.SphereGeometry(0.32, 10, 8), bag, -w / 2 + 0.3 + i * 0.36, 0.28 + (i % 2) * 0.1, (i % 2 ? 0.1 : -0.1)); b.scale.set(1, 0.8, 0.9); }
      add(h, new THREE.PlaneGeometry(0.5, 0.18), mapped(textTexture('CORREO', '#8a7a5a', '#2a2a2a', 256, 96, 'bold 56px Arial')), 0, 0.35, d / 2 + 0.02);
      break;
    }
    case 'dogcrate': {
      const wire = std('#9aa0a6', 0.4, 0.7);
      add(h, B(w, 0.04, d), std('#3a3a3a', 0.7), 0, 0.02, 0);
      for (let x = -w / 2; x <= w / 2 + 0.001; x += w / 10) add(h, C(0.008, 0.008, 0.72, 4), wire, x, 0.38, d / 2);
      for (let x = -w / 2; x <= w / 2 + 0.001; x += w / 10) add(h, C(0.008, 0.008, 0.72, 4), wire, x, 0.38, -d / 2);
      for (const s of [-1, 1]) for (let z = -d / 2; z <= d / 2 + 0.001; z += d / 6) add(h, C(0.008, 0.008, 0.72, 4), wire, s * w / 2, 0.38, z);
      add(h, B(w, 0.03, d), wire, 0, 0.74, 0);
      const dog = dogMesh(anim); dog.position.set(0, 0.04, 0); dog.rotation.y = 0.9; h.add(dog);
      add(h, new THREE.PlaneGeometry(0.4, 0.14), mapped(textTexture('TANGO', '#f0e0b0', '#1a1a1a', 256, 90, 'bold 60px Arial')), 0, 0.62, d / 2 + 0.02);
      break;
    }
    case 'cellocase': {
      const shell = add(h, new THREE.SphereGeometry(0.25, 16, 12), std('#1a1a22', 0.35, 0.2), 0, 0.42, 0); shell.scale.set(1, 1.7, 0.7);
      const neck = add(h, new THREE.SphereGeometry(0.14, 12, 10), std('#1a1a22', 0.35, 0.2), 0, 1.08, 0); neck.scale.set(1, 1.7, 0.7);
      add(h, B(0.06, 0.12, 0.04), BRASS(), 0.12, 0.6, 0.16);
      break;
    }
    case 'bikes': for (let i = 0; i < 2; i++) { const sub = new THREE.Group(); sub.position.set(-w / 4 + i * w / 2, 0, i ? 0.06 : -0.06); h.add(sub); for (const x of [-0.42, 0.42]) add(sub, new THREE.TorusGeometry(0.3, 0.02, 6, 18), std('#141414', 0.8), x, 0.32, 0); add(sub, B(0.85, 0.035, 0.035), std(['#2a6ac8', '#3a8a4a'][i], 0.4, 0.4), 0, 0.6, 0); add(sub, B(0.14, 0.04, 0.1), std('#141414', 0.7), -0.3, 0.8, 0); } break;
    case 'cheese': for (let i = 0; i < 3; i++) add(h, C(0.2, 0.2, 0.14, 18), std('#e8c060', 0.7), -0.22 + i * 0.22, 0.07 + (i === 1 ? 0.14 : 0), 0); break;
    // -------------------------------------------- sleeping cars
    case 'berth': {
      add(h, B(w, SEAT_TOP - 0.16, d), std('#5a3a22', 0.6), 0, (SEAT_TOP - 0.16) / 2, 0);
      add(h, B(w - 0.04, 0.16, d - 0.04), std('#e8e4dc', 0.9), 0, SEAT_TOP - 0.08, 0);
      add(h, B(w * 0.62, 0.04, d - 0.06), std('#2a4a7a', 0.95), w * 0.18, SEAT_TOP + 0.01, 0);
      add(h, B(0.42, 0.1, 0.32), WHITE(), -w / 2 + 0.3, SEAT_TOP + 0.04, -0.05);
      break;
    }
    case 'bunk': {
      add(h, B(w, 0.12, d), std('#5a3a22', 0.6), 0, 1.5, 0);
      add(h, B(w - 0.04, 0.1, d - 0.04), std('#e8e4dc', 0.9), 0, 1.61, 0);
      add(h, B(w - 0.2, 0.2, 0.03), std('#5a3a22', 0.6), 0, 1.72, d / 2 - 0.02);
      for (let i = 0; i < 4; i++) add(h, B(0.03, 0.03, 0.12), BRASS(), -w / 2 + 0.2 + i * 0.12, 1.2 - i * 0.25, d / 2 + 0.05);
      break;
    }
    case 'rack': add(h, B(w, 0.03, d), BRASS(), 0, CEILING - 0.35, 0); suitcase(h, 0.4, CEILING - 0.33, 0, 0.6, 0.22, 0.34, Math.round(item.x * 5)); break;
    case 'cabinlamp': { const l = add(h, new THREE.SphereGeometry(0.08, 10, 8), std('#fff4dc', 0.3, 0, '#ffd890', 1.4), 0, 1.25, -0.55); anim.glows.push(l.material as THREE.MeshStandardMaterial); add(h, B(0.06, 0.06, 0.12), BRASS(), 0, 1.25, -0.6); break; }
    case 'sink': {
      add(h, B(w, 0.8, d), std('#6a4428', 0.55), 0, 0.4, 0);
      add(h, B(w - 0.04, 0.06, d - 0.04), std('#e8eef0', 0.3), 0, 0.83, 0);
      add(h, C(0.012, 0.012, 0.2, 6), STEEL(), 0, 0.96, -d / 2 + 0.06);
      add(h, B(w - 0.1, 0.5, 0.02), std('#c8d4dc', 0.05, 0.9), 0, 1.4, -d / 2 + 0.01);
      break;
    }
    case 'book': add(h, B(0.22, 0.04, 0.15), std('#8a1a1a', 0.7), 0, on + 0.02, 0); break;
    case 'flowers': for (let i = 0; i < 7; i++) add(h, new THREE.SphereGeometry(0.04, 8, 6), std(['#f4f0ea', '#e8a0b8', '#f4f0ea'][i % 3], 0.8), (i - 3) * 0.035, on + 0.04, (i % 2) * 0.04); break;
    case 'note': { const n = add(h, new THREE.PlaneGeometry(0.21, 0.15), mapped(paper(['Si desaparezco,', 'que investigue', 'el pasajero del 8.', '— O. R.'], 256, 180))); n.rotation.x = -Math.PI / 2; n.position.y = on + 0.012; break; }
    case 'dentures': add(h, C(0.04, 0.035, 0.1, 12), GLASS(), 0, on + 0.05, 0); add(h, B(0.05, 0.02, 0.04), std('#f4ecd8', 0.4), 0, on + 0.03, 0); break;
    case 'curtain': {
      // The window of cabin 7 open and its curtain flying out in the cold.
      const c = new THREE.Group(); c.position.set(0, 1.9, 0); h.add(c);
      const cloth = add(c, B(w * 0.45, 0.9, 0.02), std('#8a2a3a', 0.9), -w * 0.3, -0.45, 0);
      void cloth;
      anim.curtains.push(c);
      break;
    }
    case 'backpack': add(h, B(w, 0.45, d), std('#3a6a8a', 0.8), 0, on + 0.22, 0); add(h, B(w * 0.6, 0.2, 0.06), std('#2a4a6a', 0.8), 0, on + 0.18, d / 2 + 0.03); break;
    case 'heater': {
      // The samovar of the sleeping car: hot water for mate, day and night.
      add(h, C(0.18, 0.2, 0.6, 16), BRASS(), 0, 1.0, 0);
      add(h, B(w, 0.7, d), std('#6a4428', 0.55), 0, 0.35, 0);
      add(h, C(0.015, 0.015, 0.12, 6), BRASS(), 0, 0.82, 0.2).rotation.x = Math.PI / 2;
      break;
    }
    // -------------------------------------------- dining car
    case 'dtable': {
      // Fixed to the wall on one side, one leg on the aisle side.
      const s = item.side ?? 1;
      add(h, B(w, 0.04, d), WHITE(), 0, 0.76, 0);
      add(h, B(w + 0.02, 0.2, 0.01), WHITE(), 0, 0.68, -s * d / 2);
      add(h, C(0.03, 0.04, 0.74, 10), STEEL(), 0, 0.37, -s * (d / 2 - 0.06));
      add(h, C(0.04, 0.035, 0.18, 10), std('#2a5a3a', 0.2, 0.3), 0, 0.87, s * 0.15);
      const l = add(h, new THREE.SphereGeometry(0.06, 10, 8), std('#fff4dc', 0.3, 0, '#ffd890', 1.3), 0, 0.98, s * 0.25); anim.glows.push(l.material as THREE.MeshStandardMaterial);
      for (const x of [-0.22, 0.22]) { add(h, C(0.11, 0.11, 0.015, 18), WHITE(), x, 0.785, 0); add(h, B(0.02, 0.01, 0.18), STEEL(), x + 0.14, 0.785, 0); }
      break;
    }
    case 'dbench': {
      add(h, B(w, SEAT_TOP - 0.14, d), VELVET(), 0, (SEAT_TOP - 0.14) / 2, 0);
      add(h, B(w - 0.06, 0.14, d - 0.06), VELVET(), 0, SEAT_TOP - 0.07, 0.02);
      add(h, B(w, 0.85, 0.12), VELVET(), 0, SEAT_TOP + 0.38, -d / 2 + 0.06);
      add(h, B(w, 0.06, 0.16), DARKWOOD(), 0, SEAT_TOP + 0.83, -d / 2 + 0.06);
      break;
    }
    case 'kcounter': add(h, B(w, 1.0, d), std('#c8c0b0', 0.4, 0.4), 0, 0.5, 0); add(h, B(w + 0.06, 0.04, d + 0.08), STEEL(), 0, 1.02, 0); for (let i = 0; i < 3; i++) add(h, C(0.1, 0.1, 0.015, 16), WHITE(), -0.6 + i * 0.6, 1.05, 0); break;
    case 'stove': {
      add(h, B(w, 0.9, d), STEEL(), 0, 0.45, 0);
      for (let i = 0; i < 3; i++) { add(h, C(0.13, 0.13, 0.02, 16), std('#141414', 0.6), -0.7 + i * 0.7, 0.91, 0); const f = add(h, new THREE.TorusGeometry(0.08, 0.015, 6, 14), bright('#4a8aff'), -0.7 + i * 0.7, 0.93, 0); f.rotation.x = Math.PI / 2; anim.flames.push(f); }
      add(h, B(w, 0.5, 0.25), STEEL(), 0, 1.9, -d / 2 + 0.12);
      break;
    }
    case 'fridge': add(h, B(w, 1.8, d), std('#e8e8e4', 0.4, 0.2), 0, 0.9, 0); add(h, B(0.03, 0.4, 0.04), STEEL(), w / 2 - 0.08, 1.1, d / 2 + 0.02); break;
    case 'kshelf': for (let i = 0; i < 3; i++) { add(h, B(w, 0.03, d), STEEL(), 0, 0.9 + i * 0.45, 0); for (let k = 0; k < 4; k++) add(h, C(0.06, 0.06, 0.16, 10), std(['#c8301e', '#e8e8e4', '#3a6a3a'][(i + k) % 3], 0.5), -w / 2 + 0.2 + k * 0.32, 1.0 + i * 0.45, 0); } add(h, B(w, 0.85, d), STEEL(), 0, 0.42, 0); break;
    case 'pot': add(h, C(0.15, 0.14, 0.22, 16), STEEL(), 0, on + 0.11, 0); break;
    // -------------------------------------------- bar car
    case 'barcounter': {
      add(h, B(w, 1.0, d), DARKWOOD(), 0, 0.5, 0);
      add(h, B(w + 0.06, 0.05, d + 0.12), std('#2a1a10', 0.3, 0.2), 0, 1.03, 0);
      add(h, C(0.02, 0.02, w, 8), BRASS(), 0, 0.18, d / 2 + 0.12).rotation.z = Math.PI / 2;
      for (let i = 0; i < 5; i++) add(h, C(0.035, 0.03, 0.12, 10), GLASS(), -2 + i * 1.1, 1.12, 0);
      add(h, C(0.06, 0.06, 0.3, 12), std('#e8d8a0', 0.2, 0.2), 0.5, 1.2, 0);
      break;
    }
    case 'backbar': {
      add(h, B(w, 0.9, d), DARKWOOD(), 0, 0.45, 0);
      add(h, B(w, 1.0, 0.02), std('#c8d4dc', 0.05, 0.9), 0, 1.5, -d / 2 + 0.01);
      const rand = random(17);
      for (let shelf = 0; shelf < 2; shelf++) {
        add(h, B(w, 0.03, d), GLASS(), 0, 1.15 + shelf * 0.4, 0);
        for (let x = -w / 2 + 0.15; x < w / 2 - 0.1; x += 0.16 + rand() * 0.1) {
          const col = ['#5a2a1a', '#2a5a2a', '#e8d8a0', '#8a1a1a', '#c8a050', '#f0f0e8'][Math.floor(rand() * 6)];
          add(h, C(0.035, 0.04, 0.26, 10), std(col, 0.15, 0.1), x, 1.3 + shelf * 0.4, 0);
        }
      }
      add(h, new THREE.PlaneGeometry(1.4, 0.3), mapped(textTexture('PISCO · VINO · MATE', '#2a1a10', '#e8c070', 640, 120, 'bold 56px Georgia'), 0.4), 0, 2.15, -d / 2 + 0.03);
      break;
    }
    case 'stool': add(h, C(0.04, 0.05, 0.72, 10), BRASS(), 0, 0.36, 0); add(h, C(0.19, 0.17, 0.08, 16), VELVET(), 0, 0.74, 0); add(h, new THREE.TorusGeometry(0.14, 0.012, 6, 16), BRASS(), 0, 0.3, 0).rotation.x = Math.PI / 2; break;
    case 'cardtable': {
      add(h, C(w / 2, w / 2, 0.04, 24), std('#1e5a3a', 0.9), 0, 0.74, 0);
      add(h, C(0.04, 0.06, 0.72, 10), DARKWOOD(), 0, 0.36, 0);
      add(h, C(0.25, 0.25, 0.03, 18), DARKWOOD(), 0, 0.015, 0);
      const rand = random(52);
      for (let i = 0; i < 10; i++) { const c = add(h, B(0.06, 0.004, 0.09), WHITE(), (rand() - 0.5) * 0.5, 0.765, (rand() - 0.5) * 0.5); c.rotation.y = rand() * 3; }
      for (let i = 0; i < 6; i++) add(h, C(0.02, 0.02, 0.01, 10), std(['#c8301e', '#141414', '#2a6ac8'][i % 3], 0.5), 0.15 + (i % 3) * 0.05, 0.77 + Math.floor(i / 3) * 0.01, -0.15);
      break;
    }
    case 'armchair': {
      const fab = std(['#6a2a3a', '#3a5a4a', '#7a5a2a'][Math.abs(Math.round(item.x)) % 3], 0.9);
      add(h, B(w, SEAT_TOP - 0.14, d), fab, 0, (SEAT_TOP - 0.14) / 2, 0);
      add(h, B(w - 0.24, 0.14, d - 0.2), fab, 0, SEAT_TOP - 0.07, 0.08);
      add(h, B(w, 0.6, 0.16), fab, 0, SEAT_TOP + 0.24, -d / 2 + 0.08);
      for (const s of [-1, 1]) add(h, B(0.12, 0.26, d), fab, s * (w / 2 - 0.06), SEAT_TOP + 0.02, 0);
      break;
    }
    case 'sidetable': add(h, C(w / 2, w / 2, 0.03, 16), DARKWOOD(), 0, 0.55, 0); add(h, C(0.03, 0.04, 0.54, 8), BRASS(), 0, 0.27, 0); add(h, C(0.04, 0.03, 0.1, 10), GLASS(), 0, 0.62, 0); break;
    case 'rug': add(h, B(w, 0.012, d), std('#6a1e2a', 0.98), 0, 0.006, 0); add(h, B(w - 0.2, 0.014, d - 0.2), std('#c8a060', 0.98), 0, 0.007, 0); add(h, B(w - 0.34, 0.016, d - 0.34), std('#6a1e2a', 0.98), 0, 0.008, 0); break;
    // -------------------------------------------- observation car
    case 'swivel': {
      add(h, C(0.22, 0.25, 0.05, 14), STEEL(), 0, 0.03, 0);
      add(h, C(0.04, 0.04, SEAT_TOP - 0.16, 8), STEEL(), 0, (SEAT_TOP - 0.1) / 2, 0);
      cushion(h, w, d - 0.05, '#2a3a5a');
      add(h, B(w, 0.55, 0.12), std('#2a3a5a', 0.9), 0, SEAT_TOP + 0.3, -d / 2 + 0.06);
      break;
    }
    case 'telescope': {
      for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2; const leg = add(h, C(0.015, 0.015, 1.3, 6), std('#e8e8e4', 0.4, 0.4), Math.sin(a) * 0.2, 0.62, Math.cos(a) * 0.2); leg.rotation.x = Math.cos(a) * 0.3; leg.rotation.z = -Math.sin(a) * 0.3; }
      const tube = add(h, C(0.07, 0.09, 0.9, 16), std('#e8e8e4', 0.3, 0.3), -0.1, 1.35, 0); tube.rotation.z = 1.0;
      break;
    }
    default:
      add(h, B(w, 0.8, d), std('#9a9a9a'), 0, 0.4, 0);
  }
  return h;
}
