// La boda · the furniture and props of Estancia Los Aromos, one builder per
// item type of layout.mjs. Original procedural geometry and canvas textures
// only; the basic helpers (materials, boxes, seat height) are shared with El
// consorcio. Every piece is built in its own frame: w along local x, d along
// local z, the front facing +z; `rot` turns it in quarter turns. Seats are at
// 0.42 m, where people3d's seated hips rest, so nobody sinks into a cushion.
import * as THREE from 'three';
import { canvas, random } from '../noche-abierta/build3d';
import { B, BRASS, C, DARKWOOD, IRON, SEAT_TOP, WHITE, WOOD, add, bright, mapped, plantMesh, std, textTexture } from '../el-consorcio/edificio-items';
import { DANCE, STAGE } from './layout.mjs';

export { B, C, add, bright, mapped, std, textTexture, SEAT_TOP, IRON, WOOD, DARKWOOD, WHITE, BRASS };

export type Item = { type: string; x: number; z: number; w: number; d: number; rot?: number; label?: string; kind?: string; color?: string; open?: boolean };
export type Anim = {
  glows: THREE.MeshStandardMaterial[];
  bulbs: THREE.MeshBasicMaterial[];
  flames: THREE.Mesh[];
  sway: { mesh: THREE.Object3D; phase: number }[];
  tails: { mesh: THREE.Object3D; phase: number }[];
  disco: THREE.MeshStandardMaterial[];
};

const LINEN = () => std('#f6f2ea', 0.85);
function chairMesh(h: THREE.Object3D, x: number, z: number, ry = 0, color = '#d8c8a8') {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; h.add(g);
  const m = std(color, 0.55);
  add(g, B(0.44, 0.04, 0.42), m, 0, SEAT_TOP - 0.02, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(g, C(0.018, 0.018, SEAT_TOP - 0.04, 6), m, sx * 0.19, (SEAT_TOP - 0.04) / 2, sz * 0.18);
  add(g, B(0.44, 0.04, 0.04), m, 0, SEAT_TOP + 0.42, -0.2);
  for (const sx of [-1, -0.33, 0.33, 1]) add(g, C(0.012, 0.012, 0.42, 5), m, sx * 0.19, SEAT_TOP + 0.21, -0.2);
  // A ribbon on the back.
  add(g, B(0.46, 0.08, 0.05), std('#e8c8d0', 0.8), 0, SEAT_TOP + 0.3, -0.21);
}
function carMesh(h: THREE.Object3D, color: string, open = false) {
  const paint = std(color, 0.35, 0.4);
  add(h, B(1.8, 0.62, 4.3), paint, 0, 0.62, 0);
  add(h, B(1.62, 0.5, 2.2), std('#1a2028', 0.1, 0.3), 0, 1.18, -0.2);
  add(h, B(1.7, 0.06, 2.3), paint, 0, 1.45, -0.2);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(h, C(0.33, 0.33, 0.22, 12), std('#141414', 0.9), sx * 0.86, 0.33, sz * 1.4).rotation.z = Math.PI / 2;
  for (const sx of [-1, 1]) { add(h, B(0.3, 0.12, 0.04), bright('#fff4d0'), sx * 0.6, 0.72, 2.16); add(h, B(0.3, 0.1, 0.04), bright('#e0201a'), sx * 0.6, 0.76, -2.16); }
  if (open) {
    // The driver's door wide open, the best man's jacket on the seat.
    const door = add(h, B(0.06, 0.55, 1.0), paint, -1.25, 0.75, 0.55); door.rotation.y = -0.9;
    add(h, B(0.5, 0.08, 0.4), std('#141418', 0.8), -0.4, 0.98, 0.1);
  }
}
function treeMesh(h: THREE.Object3D, kind: string, seed: number) {
  const rand = random(seed);
  if (kind === 'sauce') {
    add(h, C(0.25, 0.4, 3.2, 8), std('#5a4a38', 0.95), 0, 1.6, 0);
    const leaf = std('#7a9a4a', 0.9);
    for (let i = 0; i < 9; i++) { const a = i * 0.7; const b = add(h, new THREE.ConeGeometry(1.1, 3.4, 8), leaf, Math.sin(a) * 1.6, 2.4, Math.cos(a) * 1.6); b.rotation.x = Math.PI; }
    return;
  }
  const tall = kind === 'eucalipto';
  const trunkH = tall ? 7 : 2.6;
  add(h, C(tall ? 0.22 : 0.16, tall ? 0.35 : 0.24, trunkH, 8), std(tall ? '#d8d0c0' : '#5a4a38', 0.9), 0, trunkH / 2, 0);
  const leaf = std(tall ? '#5a7a5a' : rand() < 0.5 ? '#6a8a2a' : '#7a9a34', 0.9);
  const n = tall ? 9 : 7;
  for (let i = 0; i < n; i++) {
    const a = i * 0.9, r = tall ? 1.4 : 1.0;
    const b = add(h, new THREE.SphereGeometry((tall ? 1.6 : 1.1) + rand() * 0.5, 9, 7), leaf, Math.sin(a) * r, trunkH + 0.4 + rand() * (tall ? 3 : 1.2), Math.cos(a) * r);
    b.scale.y = 0.8;
  }
  // The aromos are in bloom: yellow dots on the green.
  if (!tall) for (let i = 0; i < 18; i++) add(h, new THREE.SphereGeometry(0.12, 6, 4), std('#f0d030', 0.8), (rand() - 0.5) * 2.8, trunkH + 0.4 + rand() * 1.6, (rand() - 0.5) * 2.8);
}
function stringOfBulbs(h: THREE.Object3D, a: THREE.Vector3, b: THREE.Vector3, sag: number, count: number, anim: Anim, seed: number) {
  const rand = random(seed);
  const at = (t: number) => new THREE.Vector3().lerpVectors(a, b, t).add(new THREE.Vector3(0, -Math.sin(t * Math.PI) * sag, 0));
  add(h, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(Array.from({ length: 13 }, (_, k) => at(k / 12))), 36, 0.012, 4), std('#1a1a1a', 0.8));
  for (let k = 1; k < count; k++) {
    const p = at(k / count);
    const bulb = add(h, new THREE.SphereGeometry(0.055, 8, 6), bright(rand() < 0.5 ? '#ffd890' : '#fff0c8'), p.x, p.y - 0.06, p.z);
    anim.bulbs.push(bulb.material as THREE.MeshBasicMaterial);
  }
}
function horseMesh(h: THREE.Object3D, color: string, anim: Anim, seed: number) {
  const hide = std(color, 0.8), dark = std('#2a1a12', 0.8);
  // Built along local z (the item turns it): head at +z.
  const body = add(h, new THREE.CapsuleGeometry(0.34, 1.1, 6, 12), hide, 0, 1.25, 0); body.rotation.x = Math.PI / 2;
  for (const sz of [-0.55, 0.55]) for (const sx of [-0.18, 0.18]) { add(h, C(0.07, 0.06, 1.0, 8), hide, sx, 0.55, sz); add(h, C(0.075, 0.075, 0.1, 8), dark, sx, 0.05, sz); }
  const neck = add(h, C(0.16, 0.24, 0.9, 10), hide, 0, 1.65, 0.85); neck.rotation.x = 0.7;
  const head = add(h, B(0.24, 0.26, 0.62), hide, 0, 1.95, 1.25); head.rotation.x = 0.5;
  for (const s of [-1, 1]) add(h, new THREE.ConeGeometry(0.05, 0.14, 4), hide, s * 0.08, 2.2, 1.06);
  add(h, B(0.06, 0.12, 0.5), dark, 0, 1.95, 0.78).rotation.x = 0.7;
  const tail = new THREE.Group(); tail.position.set(0, 1.4, -0.85); h.add(tail);
  add(tail, C(0.05, 0.1, 0.8, 6), dark, 0, -0.38, -0.08).rotation.x = 0.25;
  anim.tails.push({ mesh: tail, phase: seed });
}

// ---------------------------------------------------------------- the builders
export function buildItem(g: THREE.Group, item: Item, anim: Anim) {
  const h = new THREE.Group();
  h.position.set(item.x, 0, item.z);
  h.rotation.y = (item.rot ?? 0) * Math.PI / 2;
  g.add(h);
  const { w, d } = item;
  switch (item.type) {
    // -------------------------------------------- gate, parking, avenue
    case 'gatepost': add(h, B(w, 2.8, d), std('#e8e0d0', 0.85), 0, 1.4, 0); add(h, B(w + 0.1, 0.15, d + 0.1), std('#b8603a', 0.8), 0, 2.85, 0); { const l = add(h, new THREE.SphereGeometry(0.14, 10, 8), std('#fff4dc', 0.4, 0, '#ffd890', 0.3), 0, 3.05, 0); l.userData.lamp = true; anim.glows.push(l.material as THREE.MeshStandardMaterial); } break;
    case 'arch': {
      add(h, B(w, 0.25, 0.12), IRON(), 0, 3.6, 0);
      const sign = add(h, new THREE.PlaneGeometry(4.6, 0.6), mapped(textTexture('ESTANCIA LOS AROMOS', '#22262a', '#e8d8a8', 1024, 132, 'bold 74px Georgia, serif'), 0.1), 0, 4.05, 0.07); void sign;
      const back = add(h, new THREE.PlaneGeometry(4.6, 0.6), mapped(textTexture('ESTANCIA LOS AROMOS', '#22262a', '#e8d8a8', 1024, 132, 'bold 74px Georgia, serif'), 0.1), 0, 4.05, -0.07); back.rotation.y = Math.PI;
      for (const s of [-1, 1]) { const leaf = add(h, B(3.0, 1.6, 0.05), IRON(), s * 3.2, 0.95, -0.25); leaf.rotation.y = s * 0.05; }
      // White ribbons and a garland of flowers over the gate.
      for (let i = 0; i < 14; i++) add(h, new THREE.SphereGeometry(0.11, 6, 4), std(i % 2 ? '#f4f0ea' : '#e8a0b8', 0.8), -3.2 + i * 0.5, 3.42 - Math.sin(i / 13 * Math.PI) * 0.25, 0.1);
      break;
    }
    case 'car': carMesh(h, item.color ?? '#9aa4ac', item.open); break;
    case 'vintage': {
      // The bride's 1950s car: cream, round fenders, «Recién casados».
      const paint = std('#efe4c8', 0.3, 0.3);
      add(h, B(1.7, 0.6, 4.6), paint, 0, 0.7, 0);
      add(h, B(1.5, 0.55, 1.9), paint, 0, 1.25, -0.4);
      add(h, B(1.4, 0.4, 1.7), std('#1a2028', 0.1, 0.3), 0, 1.25, -0.4);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) { add(h, new THREE.SphereGeometry(0.42, 12, 8), paint, sx * 0.82, 0.62, sz * 1.5).scale.set(0.5, 0.8, 1.2); add(h, C(0.34, 0.34, 0.2, 14), std('#141414', 0.9), sx * 0.86, 0.34, sz * 1.5).rotation.z = Math.PI / 2; }
      add(h, B(1.72, 0.1, 0.12), std('#d8d8d8', 0.2, 0.9), 0, 0.5, 2.35);
      add(h, new THREE.PlaneGeometry(1.2, 0.3), mapped(textTexture('RECIÉN CASADOS', '#ffffff', '#c8304a', 512, 128, 'bold 60px Georgia, serif')), 0, 0.82, -2.32).rotation.y = Math.PI;
      for (let i = 0; i < 4; i++) add(h, C(0.08, 0.08, 0.14, 8), std('#c8c8c0', 0.3, 0.8), -0.5 + i * 0.33, 0.12, -2.9 - (i % 2) * 0.2).rotation.x = Math.PI / 2;
      break;
    }
    case 'van': add(h, B(w, 2.1, d), std('#f2f2ee', 0.4, 0.2), 0, 1.35, 0); add(h, B(w - 0.1, 0.6, 1.2), std('#1a2028', 0.1, 0.3), 0, 1.9, d / 2 - 0.65); for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(h, C(0.36, 0.36, 0.24, 12), std('#141414', 0.9), sx * w / 2, 0.36, sz * (d / 2 - 0.9)).rotation.z = Math.PI / 2; add(h, new THREE.PlaneGeometry(2.6, 0.5), mapped(textTexture('MARIACHI LOS COMPADRES', '#f2f2ee', '#8a1a1a', 1024, 196, 'bold 92px Georgia')), w / 2 + 0.01, 1.5, 0).rotation.y = Math.PI / 2; break;
    case 'sign': add(h, C(0.04, 0.04, 1.5, 6), WOOD(), -0.5, 0.75, 0); add(h, C(0.04, 0.04, 1.5, 6), WOOD(), 0.5, 0.75, 0); add(h, B(1.4, 0.7, 0.05), WOOD(), 0, 1.5, 0); { const t = mapped(canvas(512, 256, ctx => { ctx.fillStyle = '#f4ecd8'; ctx.fillRect(0, 0, 512, 256); ctx.fillStyle = '#5a3a22'; ctx.font = 'italic 54px Georgia, serif'; ctx.textAlign = 'center'; ctx.fillText('Valentina', 256, 90); ctx.fillText('& Joaquín', 256, 160); ctx.font = '30px Georgia, serif'; ctx.fillText('bienvenidos · capilla →', 256, 222); })); add(h, new THREE.PlaneGeometry(1.3, 0.62), t, 0, 1.5, 0.03); } break;
    case 'tree': treeMesh(h, item.kind ?? 'aromo', Math.round(item.x * 7 + item.z * 13)); break;
    case 'ombu': {
      // The old ombú: a fat, ribbed trunk, roots above ground, a huge crown.
      const bark = std('#7a6a58', 0.95);
      add(h, C(1.0, 1.3, 3.2, 12), bark, 0, 1.6, 0);
      for (let i = 0; i < 6; i++) { const a = i * 1.05; const r = add(h, C(0.18, 0.3, 1.6, 6), bark, Math.sin(a) * 1.2, 0.15, Math.cos(a) * 1.2); r.rotation.set(Math.cos(a) * 1.3, 0, -Math.sin(a) * 1.3); }
      const leaf = std('#3a6a2a', 0.9), rand = random(77);
      for (let i = 0; i < 14; i++) { const a = i * 0.45; const r = 2 + rand() * 2.6; const b = add(h, new THREE.SphereGeometry(1.8 + rand() * 0.9, 10, 8), leaf, Math.sin(a) * r, 4.6 + rand() * 1.6, Math.cos(a) * r); b.scale.y = 0.7; }
      break;
    }
    case 'tripod': for (let i = 0; i < 3; i++) { const l = add(h, C(0.012, 0.012, 1.5, 5), IRON(), Math.sin(i * 2.1) * 0.2, 0.72, Math.cos(i * 2.1) * 0.2); l.rotation.set(Math.cos(i * 2.1) * 0.25, 0, -Math.sin(i * 2.1) * 0.25); } add(h, B(0.16, 0.12, 0.1), std('#141418', 0.4), 0, 1.5, 0); add(h, C(0.04, 0.04, 0.1, 10), std('#2a2a2a', 0.2), 0, 1.5, 0.08).rotation.x = Math.PI / 2; break;
    // -------------------------------------------- the chapel
    case 'altar': add(h, B(w, 1.0, d), LINEN(), 0, 0.5, 0); add(h, B(w + 0.04, 0.04, d + 0.04), std('#c8a04a', 0.4, 0.6), 0, 1.0, 0); for (const s of [-0.8, 0.8]) { add(h, C(0.03, 0.04, 0.3, 8), BRASS(), s, 1.17, 0); const f = add(h, new THREE.SphereGeometry(0.03, 6, 4), bright('#ffd890'), s, 1.36, 0); anim.flames.push(f); } add(h, B(0.05, 0.9, 0.05), BRASS(), 0, 1.47, -0.2); add(h, B(0.4, 0.05, 0.05), BRASS(), 0, 1.7, -0.2); break;
    case 'flowerstand': add(h, C(0.08, 0.15, 1.0, 10), WHITE(), 0, 0.5, 0); for (let i = 0; i < 9; i++) add(h, new THREE.SphereGeometry(0.1, 8, 6), std(['#f4f0ea', '#f0b8c8', '#e8d0a0'][i % 3], 0.8), Math.sin(i * 1.3) * 0.18, 1.08 + (i % 3) * 0.08, Math.cos(i * 1.3) * 0.18); break;
    case 'pew': add(h, B(w, 0.06, d - 0.1), WOOD(), 0, SEAT_TOP - 0.03, 0.03); add(h, B(w, 0.5, 0.05), WOOD(), 0, SEAT_TOP + 0.25, -d / 2 + 0.03); for (const s of [-1, 1]) add(h, B(0.06, SEAT_TOP + 0.5, d), DARKWOOD(), s * (w / 2 - 0.03), (SEAT_TOP + 0.5) / 2, 0); add(h, B(0.18, 0.18, 0.04), std('#f4f0ea', 0.8), w / 2 - 0.2, SEAT_TOP + 0.4, -d / 2); break;
    case 'carpet': add(h, B(w, 0.01, d), std('#8a1a2a', 0.95), 0, 0.006, 0); for (let i = 0; i < 12; i++) add(h, new THREE.CircleGeometry(0.04, 6), std(['#f4f0ea', '#f0b8c8'][i % 2], 0.9), (i % 2 - 0.5) * 0.6, 0.013, -d / 2 + 0.5 + i * (d - 1) / 11).rotation.x = -Math.PI / 2; break;
    case 'flowerbed': add(h, B(w, 0.3, d), std('#5a3a22', 0.95), 0, 0.15, 0); for (let i = 0; i < 16; i++) add(h, new THREE.SphereGeometry(0.12, 6, 4), std(['#e84a6a', '#f0d030', '#f4f0ea', '#9a4ac8'][i % 4], 0.8), -w / 2 + 0.2 + (i % 8) * (w - 0.4) / 7, 0.42, (i < 8 ? -0.3 : 0.3)); add(h, B(0.7, 0.02, 0.4), std('#3a2a1a', 1), 0.6, 0.31, -0.1); break;
    case 'spade': { const s = add(h, B(0.04, 0.9, 0.04), WOOD(), 0, 0.45, 0); s.rotation.z = 0.3; add(h, B(0.2, 0.25, 0.02), IRON(), 0.14, 0.05, 0); add(h, B(0.06, 0.04, 0.02), std('#e04a4a', 0.6), 0.18, 0.04, 0.05); break; }
    // -------------------------------------------- rose garden, gardens, asado
    case 'arch-flowers': for (const s of [-1, 1]) add(h, C(0.04, 0.04, 2.3, 6), WHITE(), s * w / 2, 1.15, 0); { const arc = add(h, new THREE.TorusGeometry(w / 2, 0.05, 6, 20, Math.PI), WHITE(), 0, 2.3, 0); void arc; } for (let i = 0; i < 26; i++) { const a = (i / 25) * Math.PI; add(h, new THREE.SphereGeometry(0.11, 6, 4), std(['#f4f0ea', '#e88aa8', '#c81e3a'][i % 3], 0.8), Math.cos(a) * w / 2, 2.3 + Math.sin(a) * w / 2, 0); } break;
    case 'buckets': for (let i = 0; i < 3; i++) { add(h, C(0.16, 0.12, 0.4, 10), std('#7a8a9a', 0.4, 0.5), 0, 0.2, -0.3 + i * 0.3); for (let k = 0; k < 5; k++) add(h, new THREE.SphereGeometry(0.07, 6, 4), std(['#c81e3a', '#f4f0ea', '#f0b8c8'][i], 0.8), Math.sin(k) * 0.08, 0.5 + (k % 2) * 0.06, -0.3 + i * 0.3 + Math.cos(k) * 0.08); } break;
    case 'longtable': {
      add(h, B(w, 0.04, d), LINEN(), 0, 0.74, 0);
      // A short skirt, above the knees of whoever sits at the table.
      add(h, B(w + 0.02, 0.14, 0.02), LINEN(), 0, 0.69, d / 2); add(h, B(w + 0.02, 0.14, 0.02), LINEN(), 0, 0.69, -d / 2);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(h, B(0.06, 0.72, 0.06), WOOD(), sx * (w / 2 - 0.1), 0.36, sz * (d / 2 - 0.1));
      // Plates, glasses, bottles, candles and flowers down the middle.
      const rand = random(Math.round(item.z * 10));
      for (let x = -w / 2 + 0.36; x < w / 2 - 0.2; x += 0.56) for (const s of [-1, 1]) {
        add(h, C(0.12, 0.12, 0.012, 14), WHITE(), x, 0.765, s * 0.28);
        add(h, C(0.03, 0.025, 0.14, 8), std('#d8ecf4', 0.05, 0.1), x + 0.16, 0.83, s * 0.36);
      }
      for (let x = -w / 2 + 0.8; x < w / 2; x += 1.6) {
        add(h, C(0.04, 0.045, 0.3, 8), std(rand() < 0.5 ? '#3a1a2a' : '#2a4a2a', 0.2, 0.3), x, 0.91, 0);
        const c = add(h, new THREE.SphereGeometry(0.025, 6, 4), bright('#ffd890'), x + 0.5, 0.86, 0); anim.flames.push(c);
        add(h, C(0.02, 0.02, 0.09, 6), WHITE(), x + 0.5, 0.8, 0);
        for (let k = 0; k < 4; k++) add(h, new THREE.SphereGeometry(0.06, 6, 4), std(['#f4f0ea', '#e8a0b8', '#f0d030'][k % 3], 0.8), x - 0.4 + (k % 2) * 0.1, 0.82, (k < 2 ? -0.05 : 0.05));
      }
      break;
    }
    case 'chairs': { const n = Math.max(1, Math.round(w / 0.56)); for (let i = 0; i < n; i++) chairMesh(h, -w / 2 + 0.28 + i * (w / n), 0); break; }
    case 'lightpole': add(h, C(0.07, 0.09, 4.2, 8), WOOD(), 0, 2.1, 0); break;
    case 'lights': {
      // Cables between the four poles round the tables, zigzagging across.
      const p = (x: number, z: number) => new THREE.Vector3(x - item.x, 4.05, z - item.z);
      const xs = [-9.6, 9.6], z0 = -13.2, z1 = 1.8;
      stringOfBulbs(h, p(xs[0], z0), p(xs[1], z0), 0.4, 24, anim, 1);
      stringOfBulbs(h, p(xs[0], z1), p(xs[1], z1), 0.4, 24, anim, 2);
      stringOfBulbs(h, p(xs[0], z0), p(xs[0], z1), 0.4, 18, anim, 3);
      stringOfBulbs(h, p(xs[1], z0), p(xs[1], z1), 0.4, 18, anim, 4);
      for (let k = 0; k < 4; k++) stringOfBulbs(h, p(xs[0], z0 + k * 5), p(xs[1], z0 + (k + 1) * 3.75), 0.7, 24, anim, 10 + k);
      break;
    }
    case 'parrilla': {
      add(h, B(w, 0.85, d), std('#9a4a3a', 0.9), 0, 0.42, 0);
      add(h, B(w - 0.2, 0.04, d - 0.2), IRON(), 0, 0.92, 0);
      for (let i = 0; i < 8; i++) add(h, B(0.22, 0.05, 0.3), std(i % 3 ? '#7a2a1a' : '#a85a3a', 0.7), -0.9 + i * 0.26, 0.96, -0.1 + (i % 2) * 0.2);
      for (let i = 0; i < 8; i++) { const ember = add(h, B(0.14, 0.05, 0.1), std('#3a1a0a', 0.9, 0, '#ff5a1a', 1.2), -0.9 + i * 0.26, 0.86, 0.2); anim.flames.push(ember); }
      add(h, B(w, 1.4, 0.25), std('#9a4a3a', 0.9), 0, 1.55, -d / 2 + 0.12); add(h, B(0.5, 1.4, 0.5), std('#9a4a3a', 0.9), 0, 2.95, -d / 2 + 0.25);
      break;
    }
    case 'woodpile': for (let i = 0; i < 12; i++) add(h, C(0.07, 0.07, d * 0.9, 8), std(i % 2 ? '#7a5a3a' : '#5a3e24', 0.95), -0.18 + (i % 3) * 0.16, 0.08 + Math.floor(i / 3) * 0.13, 0).rotation.x = Math.PI / 2; break;
    case 'sidetable': add(h, B(w, 0.04, d), WOOD(), 0, 0.6, 0); for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(h, B(0.04, 0.58, 0.04), WOOD(), sx * (w / 2 - 0.05), 0.29, sz * (d / 2 - 0.05)); if (w < 0.8) { add(h, new THREE.SphereGeometry(0.07, 8, 6), std('#6a4a2a', 0.6), 0, 0.68, 0); add(h, C(0.008, 0.008, 0.18, 4), std('#c8c8c0', 0.3, 0.8), 0.03, 0.74, 0); } else { add(h, B(0.6, 0.04, 0.4), WOOD(), 0, 0.64, 0); for (let i = 0; i < 4; i++) add(h, B(0.12, 0.04, 0.3), std('#a8402a', 0.7), -0.2 + i * 0.14, 0.68, 0); } break;
    // -------------------------------------------- the house
    case 'rocker': add(h, B(w - 0.1, 0.06, d - 0.2), DARKWOOD(), 0, SEAT_TOP - 0.03, 0.05); add(h, B(w - 0.1, 0.7, 0.05), DARKWOOD(), 0, SEAT_TOP + 0.35, -d / 2 + 0.08); for (const s of [-1, 1]) { add(h, B(0.05, 0.05, d), DARKWOOD(), s * (w / 2 - 0.05), 0.04, 0); add(h, B(0.04, SEAT_TOP, 0.04), DARKWOOD(), s * (w / 2 - 0.05), SEAT_TOP / 2, 0.25); add(h, B(0.04, SEAT_TOP, 0.04), DARKWOOD(), s * (w / 2 - 0.05), SEAT_TOP / 2, -0.25); add(h, B(0.05, 0.05, d - 0.2), DARKWOOD(), s * (w / 2 - 0.05), SEAT_TOP + 0.22, 0.05); } add(h, B(w - 0.16, 0.04, d - 0.3), std('#c84a3a', 0.9), 0, SEAT_TOP + 0.01, 0.05); break;
    case 'column': add(h, B(w, 3.0, d), std('#f2ece0', 0.8), 0, 1.5, 0); add(h, B(w + 0.1, 0.12, d + 0.1), std('#e2d8c8', 0.8), 0, 0.06, 0); break;
    case 'bed': add(h, B(w, 0.4, d), DARKWOOD(), 0, 0.2, 0); add(h, B(w - 0.06, 0.16, d - 0.1), LINEN(), 0, 0.47, 0.03); add(h, B(w, 1.0, 0.08), DARKWOOD(), 0, 0.5, -d / 2); add(h, B(w - 0.3, 0.1, 0.4), WHITE(), 0, 0.6, -d / 2 + 0.3); add(h, B(w - 0.04, 0.05, d * 0.5), std(item.x < 0 ? '#e8c8d0' : '#c8d8e8', 0.9), 0, 0.57, d * 0.2); if (item.x > 0) for (const s of [-1, 1]) { add(h, C(0.36, 0.36, 0.03, 16), std('#2a2a2a', 0.6), s * 0.35, 0.62, 0.3); add(h, C(0.14, 0.18, 0.2, 12), std('#2a2a2a', 0.6), s * 0.35, 0.73, 0.3); } break;
    case 'vanity': add(h, B(w, 0.78, d), WHITE(), 0, 0.39, 0); add(h, B(w * 0.8, 1.0, 0.04), std('#c8a04a', 0.4, 0.6), 0, 1.35, -d / 2 + 0.05); add(h, B(w * 0.72, 0.9, 0.01), std('#dfe8ee', 0.05, 0.9), 0, 1.35, -d / 2 + 0.08); for (let i = 0; i < 5; i++) add(h, C(0.03, 0.03, 0.1, 8), std(['#e0408a', '#f0c020', '#2a6ac8'][i % 3], 0.3), -0.4 + i * 0.2, 0.83, 0.05); break;
    case 'mannequin': add(h, C(0.18, 0.2, 0.04, 12), DARKWOOD(), 0, 0.02, 0); add(h, C(0.02, 0.02, 0.5, 6), DARKWOOD(), 0, 0.27, 0); { const skirt = add(h, new THREE.ConeGeometry(0.42, 1.0, 16, 1, true), std('#f2ead8', 0.8), 0, 0.98, 0); void skirt; add(h, C(0.13, 0.17, 0.5, 12), std('#f2ead8', 0.8), 0, 1.7, 0); add(h, new THREE.SphereGeometry(0.06, 8, 6), DARKWOOD(), 0, 2.0, 0); } for (let i = 0; i < 10; i++) add(h, new THREE.SphereGeometry(0.02, 4, 3), std('#f8f8ff', 0.2, 0.3), Math.sin(i) * 0.14, 1.6 + (i % 5) * 0.06, 0.14); break;
    case 'wardrobe': add(h, B(w, 2.1, d), DARKWOOD(), 0, 1.05, 0); add(h, B(0.01, 1.9, 0.02), std('#2a1a0a', 0.6), 0, 1.05, d / 2 + 0.005); for (const s of [-1, 1]) add(h, new THREE.SphereGeometry(0.03, 8, 6), BRASS(), s * 0.08, 1.05, d / 2 + 0.02); break;
    case 'ironing': add(h, B(w, 0.04, d), std('#d8d8e8', 0.8), 0, 0.88, 0); for (const s of [-1, 1]) { const l = add(h, B(0.03, 1.0, 0.03), STEELISH(), s * 0.3, 0.44, 0); l.rotation.z = s * 0.35; } add(h, B(0.24, 0.12, 0.13), std('#2a6ac8', 0.4), 0.35, 0.96, 0); add(h, B(0.5, 0.01, 0.34), WHITE(), -0.15, 0.905, 0); add(h, new THREE.CircleGeometry(0.06, 10), std('#3a2a1a', 1), -0.12, 0.912, 0).rotation.x = -Math.PI / 2; break;
    case 'mirror': add(h, B(w, 1.6, d), std('#c8a04a', 0.4, 0.6), 0, 1.4, 0); add(h, B(w - 0.1, 1.5, 0.01), std('#dfe8ee', 0.05, 0.9), 0, 1.4, d / 2 + 0.005); break;
    case 'kitchen': add(h, B(w, 0.9, d), std('#e8e0d0', 0.6), 0, 0.45, 0); add(h, B(w, 0.04, d + 0.02), std('#3a3a3a', 0.3), 0, 0.92, 0); add(h, B(w, 0.7, 0.35), std('#d8c8a8', 0.6), 0, 1.9, -0.12); for (let i = 0; i < 7; i++) add(h, C(0.18, 0.16, 0.22, 12), STEELISH(), -w / 2 + 0.8 + i * 1.4, 1.05, 0); break;
    case 'oven': add(h, B(w, 0.9, d), STEELISH(), 0, 0.45, 0); add(h, B(w - 0.1, 0.4, 0.02), std('#141418', 0.2), 0.0, 0.45, d / 2 + 0.01); for (let i = 0; i < 4; i++) add(h, C(0.1, 0.1, 0.02, 12), IRON(), (i % 2 - 0.5) * 0.4, 0.91, (Math.floor(i / 2) - 0.5) * 0.5); break;
    case 'worktable': {
      add(h, B(w, 0.06, d), STEELISH(), 0, 0.87, 0); for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(h, B(0.05, 0.85, 0.05), STEELISH(), sx * (w / 2 - 0.08), 0.42, sz * (d / 2 - 0.08));
      // The three-tier cake with the wrong names on it.
      for (const [r, y] of [[0.42, 0.98], [0.32, 1.2], [0.22, 1.4]] as [number, number][]) add(h, C(r, r, 0.22, 20), std('#fbf6ee', 0.7), 0.4, y, 0);
      for (let i = 0; i < 8; i++) add(h, new THREE.SphereGeometry(0.04, 6, 4), std('#f0b8c8', 0.7), 0.4 + Math.sin(i) * 0.4, 1.09, Math.cos(i) * 0.4);
      add(h, new THREE.PlaneGeometry(0.4, 0.12), mapped(textTexture('Joaquín y Renata', '#fbf6ee', '#c8304a', 512, 150, 'italic bold 58px Georgia')), 0.4, 1.0, 0.43);
      add(h, C(0.25, 0.25, 0.1, 16), std('#e8e0d0', 0.6), -0.9, 0.95, 0.1); add(h, B(0.3, 0.02, 0.05), STEELISH(), -0.4, 0.91, 0.3);
      break;
    }
    case 'crates': for (let i = 0; i < 3; i++) add(h, B(w * 0.9, 0.3, d * 0.9), std('#b88a55', 0.9), 0, 0.15 + i * 0.3, 0).rotation.y = i * 0.1; break;
    // -------------------------------------------- the tent
    case 'pole': add(h, C(0.07, 0.08, 4.4, 8), WHITE(), 0, 2.2, 0); break;
    case 'stage': {
      add(h, B(w, STAGE.top, d), std('#2a2a30', 0.6), 0, STAGE.top / 2, 0);
      add(h, B(w, 0.02, d), std('#3a3a44', 0.4), 0, STAGE.top + 0.01, 0);
      add(h, B(w, 3.4, 0.1), std('#3a1a3a', 0.9), 0, STAGE.top + 1.7, -d / 2 + 0.05);
      add(h, new THREE.PlaneGeometry(4, 0.7), mapped(textTexture('SON DE ARECO', '#3a1a3a', '#f0d080', 1024, 180, 'bold 110px Georgia, serif'), 0.4), 0, STAGE.top + 2.8, -d / 2 + 0.11);
      // Drums, a keyboard, three microphones, the congas.
      add(h, C(0.3, 0.3, 0.45, 16), std('#c83030', 0.4), -3.2, STAGE.top + 0.25, -1.2); add(h, C(0.22, 0.22, 0.3, 14), std('#c83030', 0.4), -2.6, STAGE.top + 0.45, -1.2);
      add(h, B(1.2, 0.1, 0.35), std('#141418', 0.3), 3.2, STAGE.top + 0.85, -1.0); add(h, B(0.05, 0.8, 0.05), IRON(), 3.2, STAGE.top + 0.4, -1.0);
      for (const x of [4.6, 5.0]) add(h, C(0.15, 0.12, 0.8, 12), std('#a8602a', 0.6), x, STAGE.top + 0.4, -1.5);
      break;
    }
    case 'dancefloor': {
      const tex = canvas(256, 256, ctx => { for (let r = 0; r < 4; r++) for (let q = 0; q < 4; q++) { ctx.fillStyle = (r + q) % 2 ? '#f2ece0' : '#2a2420'; ctx.fillRect(q * 64, r * 64, 64, 64); } }, true);
      tex.repeat.set(w / 2, d / 2);
      const m = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.25, metalness: 0.1 });
      add(h, B(w, 0.012, d), m, 0, 0.006, 0);
      void DANCE;
      break;
    }
    case 'speaker': add(h, B(w, 1.2, d), std('#141418', 0.7), 0, 0.6, 0); for (const y of [0.35, 0.85]) add(h, C(0.18, 0.18, 0.02, 14), std('#2a2a2a', 0.5), 0, y, d / 2 + 0.01).rotation.x = Math.PI / 2; break;
    case 'bar': add(h, B(w, 1.1, d), DARKWOOD(), 0, 0.55, 0); add(h, B(w + 0.1, 0.05, d + 0.1), std('#e8e0d0', 0.3), 0, 1.12, 0); for (let i = 0; i < 9; i++) add(h, C(0.03, 0.025, 0.15, 8), std('#d8ecf4', 0.05, 0.1), -0.2 + (i % 2) * 0.1, 1.22, -d / 2 + 0.6 + i * 0.85); add(h, new THREE.PlaneGeometry(1.4, 0.3), mapped(textTexture('BARRA', DARKWOODHEX, '#f0d080', 512, 110, 'bold 70px Georgia')), -w / 2 - 0.01, 0.7, 0).rotation.y = -Math.PI / 2; break;
    case 'backbar': add(h, B(w, 2.0, d), DARKWOOD(), 0, 1.0, 0); { const rand = random(5); for (let s = 0; s < 3; s++) for (let i = 0; i < 18; i++) add(h, C(0.035, 0.04, 0.3, 8), std(['#3a6a3a', '#8a3a1a', '#e8d8a0', '#2a2a3a', '#c8c8d8'][Math.floor(rand() * 5)], 0.15, 0.2), -w / 2 - 0.05, 0.6 + s * 0.55, -d / 2 + 0.3 + i * (d - 0.6) / 17); } break;
    case 'headtable': {
      add(h, B(w, 0.04, d), LINEN(), 0, 0.74, 0); add(h, B(w + 0.02, 0.7, 0.02), LINEN(), 0, 0.4, -d / 2);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(h, B(0.06, 0.72, 0.06), WOOD(), sx * (w / 2 - 0.1), 0.36, sz * (d / 2 - 0.1));
      // Flowers all along the front and two glasses for the toast.
      for (let i = 0; i < 24; i++) add(h, new THREE.SphereGeometry(0.09, 6, 4), std(['#f4f0ea', '#e88aa8', '#f0d030'][i % 3], 0.8), -w / 2 + 0.15 + i * (w - 0.3) / 23, 0.8, -d / 2 + 0.05);
      for (const s of [-0.35, 0.35]) { add(h, C(0.03, 0.02, 0.18, 8), std('#e8f0f4', 0.05, 0.1), s, 0.86, 0.1); add(h, C(0.005, 0.005, 0.1, 4), std('#e8f0f4', 0.05, 0.1), s, 0.77, 0.1); }
      break;
    }
    case 'mic': add(h, C(0.15, 0.15, 0.02, 12), IRON(), 0, 0.01, 0); add(h, C(0.012, 0.012, 1.5, 6), IRON(), 0, 0.75, 0); add(h, new THREE.SphereGeometry(0.04, 8, 6), std('#2a2a2a', 0.4, 0.6), 0, 1.53, 0); break;
    case 'roundtable': {
      add(h, C(0.8, 0.8, 0.04, 24), LINEN(), 0, 0.74, 0); // No skirt: the knees of the six guests go under the top. add(h, C(0.06, 0.06, 0.72, 8), WOOD(), 0, 0.36, 0);
      for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3; chairMesh(h, Math.sin(a) * 1.2, Math.cos(a) * 1.2, a + Math.PI); add(h, C(0.11, 0.11, 0.012, 12), WHITE(), Math.sin(a) * 0.55, 0.765, Math.cos(a) * 0.55); }
      add(h, C(0.08, 0.1, 0.25, 10), std('#d8ecf4', 0.05, 0.1), 0, 0.88, 0); for (let i = 0; i < 6; i++) add(h, new THREE.SphereGeometry(0.06, 6, 4), std(['#f4f0ea', '#e88aa8'][i % 2], 0.8), Math.sin(i) * 0.08, 1.05, Math.cos(i) * 0.08);
      break;
    }
    case 'tentlights': {
      // Garlands of bulbs under the canvas, from the ridge to the eaves.
      const p = (x: number, z: number, y: number) => new THREE.Vector3(x - item.x, y, z - item.z);
      for (let i = 0; i < 6; i++) { const z = -16 + i * 5.4; stringOfBulbs(h, p(16.2, z, 3.9), p(29, z, 5.6), 0.25, 14, anim, 30 + i); stringOfBulbs(h, p(29, z, 5.6), p(41.8, z, 3.9), 0.25, 14, anim, 40 + i); }
      // A mirror ball over the dance floor.
      const ball = add(h, new THREE.IcosahedronGeometry(0.35, 1), std('#e8e8f0', 0.1, 1.0, '#8a8aa8', 0.3), 0, 5.0, -2.5); anim.disco.push(ball.material as THREE.MeshStandardMaterial); anim.sway.push({ mesh: ball, phase: -1 });
      break;
    }
    // -------------------------------------------- stables and pond
    case 'barn': {
      const red = std('#9a3a2a', 0.85), white = std('#f2ece0', 0.8);
      add(h, B(w, 4.0, d), red, 0, 2.0, 0);
      const roof = new THREE.Shape(); roof.moveTo(-d / 2 - 0.4, 0); roof.lineTo(0, 2.4); roof.lineTo(d / 2 + 0.4, 0); roof.lineTo(-d / 2 - 0.4, 0);
      const r = add(h, new THREE.ExtrudeGeometry(roof, { depth: w + 0.4, bevelEnabled: false }), std('#4a4a50', 0.7, 0.3), -w / 2 - 0.2, 4.0, 0); r.rotation.y = Math.PI / 2;
      // The big doors on the south face, with the white X.
      for (const s of [-1, 1]) { const x = s * 1.2; add(h, B(2.3, 3.2, 0.06), std('#7a2a1a', 0.85), x, 1.6, d / 2 + 0.03); for (const k of [-1, 1]) { const bar = add(h, B(0.14, 3.6, 0.05), white, x, 1.6, d / 2 + 0.07); bar.rotation.z = k * 0.6; } }
      add(h, B(w + 0.02, 0.14, d + 0.02), white, 0, 4.0, 0);
      add(h, new THREE.PlaneGeometry(2.4, 0.5), mapped(textTexture('LOS AROMOS · 1911', '#9a3a2a', '#f2ece0', 768, 160, 'bold 84px Georgia')), 0, 4.6, d / 2 + 0.1);
      break;
    }
    case 'hitch': for (const s of [-1, 1]) add(h, C(0.07, 0.07, 1.0, 8), WOOD(), s * (w / 2 - 0.1), 0.5, 0); add(h, B(w, 0.1, 0.1), WOOD(), 0, 0.98, 0); break;
    case 'horse': horseMesh(h, item.color ?? '#7a4a2a', anim, item.x); break;
    case 'hay': add(h, B(w, 0.8, d), std('#d8b860', 0.95), 0, 0.4, 0); for (const y of [0.25, 0.55]) add(h, B(w + 0.01, 0.03, d + 0.01), std('#a8603a', 0.8), 0, y, 0); break;
    case 'trough': add(h, B(w, 0.5, d), std('#8a8a90', 0.5, 0.4), 0, 0.25, 0); add(h, B(w - 0.1, 0.02, d - 0.1), std('#5a8aa8', 0.05, 0.2), 0, 0.46, 0); break;
    case 'jetty': {
      for (let x = -w / 2; x < w / 2; x += 0.3) add(h, B(0.27, 0.06, d), std(Math.round(x * 3) % 2 ? '#8a6a48' : '#7a5a3a', 0.9), x + 0.15, -0.03, 0);
      for (let x = -w / 2; x <= w / 2 - 2; x += 2.4) for (const s of [-1, 1]) add(h, C(0.08, 0.08, 1.4, 8), std('#5a3e24', 0.9), x, -0.4, s * (d / 2 + 0.1));
      const lamp = add(h, new THREE.SphereGeometry(0.12, 10, 8), std('#fff4dc', 0.4, 0, '#ffd890', 0.3), -w / 2 + 0.2, 1.5, -d / 2 - 0.2); lamp.userData.lamp = true; anim.glows.push(lamp.material as THREE.MeshStandardMaterial);
      add(h, C(0.03, 0.03, 1.5, 6), IRON(), -w / 2 + 0.2, 0.7, -d / 2 - 0.2);
      break;
    }
    case 'bench': add(h, B(w, 0.06, d), WOOD(), 0, SEAT_TOP - 0.03, 0); add(h, B(w, 0.35, 0.05), WOOD(), 0, SEAT_TOP + 0.3, -d / 2 + 0.03); for (const s of [-1, 1]) add(h, B(0.06, SEAT_TOP - 0.06, d - 0.06), IRON(), s * (w / 2 - 0.15), (SEAT_TOP - 0.06) / 2, 0); break;
    case 'boat': { const hull = add(h, new THREE.SphereGeometry(1, 14, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), std('#c8d8e8', 0.6), 0, 0.02, 0); hull.scale.set(w / 2, 0.35, d / 2); add(h, B(w * 0.8, 0.04, 0.2), WOOD(), 0, -0.05, 0); const oar = add(h, B(0.04, 0.04, 1.8), WOOD(), 0.3, 0.05, 0.3); oar.rotation.y = 0.4; anim.sway.push({ mesh: h, phase: 2 }); break; }
    case 'reeds': { const rand = random(Math.round(item.x)); for (let i = 0; i < 26; i++) { const r = add(h, C(0.01, 0.015, 1.2 + rand() * 0.6, 4), std('#6a8a3a', 0.9), (rand() - 0.5) * w, 0.6, (rand() - 0.5) * d); r.rotation.z = (rand() - 0.5) * 0.3; } break; }
    case 'rug': add(h, B(w, 0.012, d), std('#8a3a2a', 0.98), 0, 0.006, 0); add(h, B(w - 0.3, 0.014, d - 0.3), std('#e8d8b0', 0.98), 0, 0.007, 0); break;
    case 'plant': plantMesh(h, 0, 0, 1.15); break;
    default:
      add(h, B(w, 0.8, d), std('#9a9a9a'), 0, 0.4, 0);
  }
  return h;
}
const DARKWOODHEX = '#4a2e1a';
function STEELISH() { return std('#b8c0c6', 0.35, 0.7); }
