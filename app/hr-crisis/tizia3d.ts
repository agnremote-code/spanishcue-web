// HR Crisis · Tizia, the reusable student mascot, in procedural three.js
// geometry (no model files, nothing heavy in the bundle). She follows the
// reference art: big curly brown hair with a yellow ribbon, green eyes, gold
// hoop earrings, a yellow polo with the flag badge, green shorts, white
// trainers and backpack straps; plus a lanyard with her HR card. The flag and
// the clothing colours come from the profile's country, so the same mascot
// works for any student. Faces change with the mood; gestures (wave,
// celebrate, think, facepalm, hands on hips) play on top of walking.
import * as THREE from 'three';
import { COUNTRIES } from './config.mjs';

export type TiziaMood = 'smile' | 'laugh' | 'surprised' | 'worried' | 'sad' | 'neutral' | 'proud';
export type TiziaGesture = 'wave' | 'celebrate' | 'think' | 'facepalm' | 'hips' | 'none';
export type Tizia = {
  root: THREE.Group;
  setMood: (mood: TiziaMood) => void;
  gesture: (g: TiziaGesture, seconds?: number) => void;
  state: { phase: number; blink: number; gesture: TiziaGesture; until: number; clock: number; mood: TiziaMood };
  parts: {
    body: THREE.Group; head: THREE.Group; hair: THREE.Group;
    armL: THREE.Group; armR: THREE.Group; foreL: THREE.Group; foreR: THREE.Group;
    legL: THREE.Group; legR: THREE.Group; browL: THREE.Mesh; browR: THREE.Mesh; lids: THREE.Mesh[];
    mouth: THREE.Mesh;
  };
};

const mats = new Map<string, THREE.MeshStandardMaterial>();
function m(color: string, roughness = 0.6, metalness = 0) {
  const k = `${color}-${roughness}-${metalness}`;
  let v = mats.get(k);
  if (!v) { v = new THREE.MeshStandardMaterial({ color, roughness, metalness }); mats.set(k, v); }
  return v;
}
function canvasTexture(w: number, h: number, draw: (c: CanvasRenderingContext2D) => void) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  if (ctx) draw(ctx);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** Draws a country's flag in a w×h rectangle. */
export function drawFlag(ctx: CanvasRenderingContext2D, code: string, w: number, h: number) {
  const stripesV = (cols: string[]) => cols.forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect((i * w) / cols.length, 0, w / cols.length + 1, h); });
  const stripesH = (cols: string[]) => cols.forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(0, (i * h) / cols.length, w, h / cols.length + 1); });
  switch (code) {
    case 'PT': ctx.fillStyle = '#046a38'; ctx.fillRect(0, 0, w * 0.4, h); ctx.fillStyle = '#da291c'; ctx.fillRect(w * 0.4, 0, w * 0.6, h); ctx.fillStyle = '#ffe900'; ctx.beginPath(); ctx.arc(w * 0.4, h / 2, h * 0.22, 0, Math.PI * 2); ctx.fill(); break;
    case 'US': stripesH(['#b22234', '#fff', '#b22234', '#fff', '#b22234', '#fff', '#b22234']); ctx.fillStyle = '#3c3b6e'; ctx.fillRect(0, 0, w * 0.42, h * 0.54); break;
    case 'GB': ctx.fillStyle = '#012169'; ctx.fillRect(0, 0, w, h); ctx.strokeStyle = '#fff'; ctx.lineWidth = h * 0.2; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(w, h); ctx.moveTo(w, 0); ctx.lineTo(0, h); ctx.stroke(); ctx.fillStyle = '#fff'; ctx.fillRect(w * 0.4, 0, w * 0.2, h); ctx.fillRect(0, h * 0.35, w, h * 0.3); ctx.fillStyle = '#c8102e'; ctx.fillRect(w * 0.44, 0, w * 0.12, h); ctx.fillRect(0, h * 0.41, w, h * 0.18); break;
    case 'FR': stripesV(['#0055a4', '#fff', '#ef4135']); break;
    case 'IT': stripesV(['#009246', '#fff', '#ce2b37']); break;
    case 'DE': stripesH(['#000', '#dd0000', '#ffce00']); break;
    case 'NL': stripesH(['#ae1c28', '#fff', '#21468b']); break;
    case 'SE': ctx.fillStyle = '#006aa7'; ctx.fillRect(0, 0, w, h); ctx.fillStyle = '#fecc00'; ctx.fillRect(w * 0.3, 0, w * 0.14, h); ctx.fillRect(0, h * 0.42, w, h * 0.16); break;
    case 'JP': ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); ctx.fillStyle = '#bc002d'; ctx.beginPath(); ctx.arc(w / 2, h / 2, h * 0.3, 0, Math.PI * 2); ctx.fill(); break;
    case 'CN': ctx.fillStyle = '#de2910'; ctx.fillRect(0, 0, w, h); ctx.fillStyle = '#ffde00'; ctx.beginPath(); ctx.arc(w * 0.2, h * 0.3, h * 0.13, 0, Math.PI * 2); ctx.fill(); break;
    case 'CA': stripesV(['#d52b1e', '#fff', '#fff', '#d52b1e']); ctx.fillStyle = '#d52b1e'; ctx.beginPath(); ctx.moveTo(w / 2, h * 0.18); ctx.lineTo(w * 0.62, h * 0.7); ctx.lineTo(w * 0.38, h * 0.7); ctx.closePath(); ctx.fill(); break;
    default: { // Brasil
      ctx.fillStyle = '#009c3b'; ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#ffdf00'; ctx.beginPath(); ctx.moveTo(w / 2, h * 0.1); ctx.lineTo(w * 0.92, h / 2); ctx.lineTo(w / 2, h * 0.9); ctx.lineTo(w * 0.08, h / 2); ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#002776'; ctx.beginPath(); ctx.arc(w / 2, h / 2, h * 0.24, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#fff'; ctx.lineWidth = h * 0.05; ctx.beginPath(); ctx.arc(w / 2, h * 0.78, h * 0.36, Math.PI * 1.22, Math.PI * 1.78); ctx.stroke();
    }
  }
}

const MOUTHS: Record<TiziaMood, (c: CanvasRenderingContext2D) => void> = {
  smile: c => { c.fillStyle = '#7a1e24'; c.beginPath(); c.moveTo(14, 18); c.quadraticCurveTo(64, 70, 114, 18); c.quadraticCurveTo(64, 44, 14, 18); c.fill(); c.fillStyle = '#fff'; c.fillRect(34, 22, 60, 8); },
  proud: c => { c.strokeStyle = '#7a1e24'; c.lineWidth = 7; c.lineCap = 'round'; c.beginPath(); c.moveTo(24, 24); c.quadraticCurveTo(70, 52, 108, 16); c.stroke(); },
  laugh: c => { c.fillStyle = '#7a1e24'; c.beginPath(); c.moveTo(10, 10); c.quadraticCurveTo(64, 92, 118, 10); c.closePath(); c.fill(); c.fillStyle = '#fff'; c.fillRect(26, 12, 76, 10); c.fillStyle = '#e06a7a'; c.beginPath(); c.arc(64, 44, 16, 0, Math.PI); c.fill(); },
  surprised: c => { c.fillStyle = '#7a1e24'; c.beginPath(); c.ellipse(64, 32, 18, 24, 0, 0, Math.PI * 2); c.fill(); },
  worried: c => { c.strokeStyle = '#7a1e24'; c.lineWidth = 7; c.lineCap = 'round'; c.beginPath(); c.moveTo(30, 36); c.bezierCurveTo(48, 22, 64, 44, 80, 30); c.lineTo(98, 34); c.stroke(); },
  sad: c => { c.strokeStyle = '#7a1e24'; c.lineWidth = 7; c.lineCap = 'round'; c.beginPath(); c.moveTo(30, 44); c.quadraticCurveTo(64, 14, 98, 44); c.stroke(); },
  neutral: c => { c.strokeStyle = '#7a1e24'; c.lineWidth = 7; c.lineCap = 'round'; c.beginPath(); c.moveTo(36, 32); c.lineTo(92, 32); c.stroke(); },
};
const BROWS: Record<TiziaMood, [number, number]> = { smile: [0, 0], proud: [0.12, 0.02], laugh: [0.04, 0.03], surprised: [0, 0.07], worried: [-0.35, 0.03], sad: [-0.28, -0.01], neutral: [0, 0] };

export function createTizia(profile: { pais?: string } = {}, shadows = true): Tizia {
  const country = COUNTRIES[(profile.pais ?? 'BR') as keyof typeof COUNTRIES] ?? COUNTRIES.BR;
  const skin = m('#c98d62', 0.55), hairC = m('#4a2c1a', 0.7), hairL = m('#6e4228', 0.7);
  const top = m(country.top, 0.62), bottom = m(country.bottom, 0.7), white = m('#f4f4f2', 0.5), gold = m('#e8b64a', 0.3, 0.8);
  const root = new THREE.Group();
  root.name = 'tizia';
  const body = new THREE.Group();
  root.add(body);
  const add = <T extends THREE.Object3D>(parent: THREE.Object3D, o: T, x = 0, y = 0, z = 0) => { o.position.set(x, y, z); parent.add(o); if ((o as unknown as THREE.Mesh).isMesh) { o.castShadow = shadows; } return o; };
  const mesh = (g: THREE.BufferGeometry, mat: THREE.Material) => new THREE.Mesh(g, mat);

  // Legs (pivot at the hip).
  const leg = (side: number) => {
    const g = new THREE.Group(); g.position.set(side * 0.1, 0.74, 0);
    add(g, mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.36, 10), skin), 0, -0.26, 0);
    add(g, mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.3, 10), skin), 0, -0.52, 0);
    const shoe = add(g, mesh(new THREE.BoxGeometry(0.13, 0.09, 0.24), white), 0, -0.69, 0.04);
    add(shoe, mesh(new THREE.BoxGeometry(0.135, 0.025, 0.12), m(country.bottom)), 0, 0, -0.02);
    body.add(g); return g;
  };
  const legL = leg(1), legR = leg(-1);
  // Shorts and polo.
  add(body, mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.2, 14), bottom), 0, 0.72, 0);
  const torso = add(body, mesh(new THREE.CylinderGeometry(0.19, 0.205, 0.42, 16), top), 0, 1.0, 0);
  torso.scale.z = 0.78;
  add(body, mesh(new THREE.SphereGeometry(0.19, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), top), 0, 1.2, 0).scale.set(1.04, 0.45, 0.8);
  // Collar and placket.
  for (const s of [-1, 1]) { const c = add(body, mesh(new THREE.BoxGeometry(0.1, 0.03, 0.07), top), s * 0.055, 1.235, 0.11); c.rotation.z = s * 0.5; }
  add(body, mesh(new THREE.BoxGeometry(0.035, 0.12, 0.01), m(country.top, 0.5)), 0, 1.17, 0.148);
  // Flag badge on the chest (her left, +x) and the HR card on a lanyard.
  const flagTex = canvasTexture(96, 64, c => drawFlag(c, profile.pais ?? 'BR', 96, 64));
  const badge = add(body, mesh(new THREE.CircleGeometry(0.052, 20), new THREE.MeshStandardMaterial({ map: flagTex, roughness: 0.5 })), 0.085, 1.12, 0.152);
  badge.rotation.y = 0.18;
  add(body, mesh(new THREE.TorusGeometry(0.054, 0.006, 6, 24), gold), 0.085, 1.12, 0.153).rotation.y = 0.18;
  const cardTex = canvasTexture(64, 96, c => { c.fillStyle = '#1d3f9a'; c.fillRect(0, 0, 64, 96); c.fillStyle = '#fff'; c.fillRect(8, 10, 48, 34); c.font = 'bold 18px Arial'; c.fillText('RR. HH.', 2, 70); c.fillStyle = country.top; c.fillRect(0, 84, 64, 12); });
  add(body, mesh(new THREE.PlaneGeometry(0.07, 0.1), new THREE.MeshStandardMaterial({ map: cardTex, roughness: 0.5 })), -0.06, 0.93, 0.158);
  for (const s of [-1, 1]) { const l = add(body, mesh(new THREE.BoxGeometry(0.012, 0.26, 0.006), m('#1d3f9a')), -0.06 + s * 0.05, 1.08, 0.152); l.rotation.z = s * -0.28; }
  // Backpack straps and a small grey backpack.
  for (const s of [-1, 1]) { const st = add(body, mesh(new THREE.BoxGeometry(0.035, 0.44, 0.02), white), s * 0.12, 1.02, 0.14); st.rotation.x = -0.08; add(body, mesh(new THREE.BoxGeometry(0.035, 0.44, 0.02), white), s * 0.12, 1.02, -0.14); }
  const pack = add(body, mesh(new THREE.BoxGeometry(0.28, 0.32, 0.12), m('#b8bcc4', 0.55)), 0, 1.0, -0.21);
  const packFlag = canvasTexture(48, 32, c => drawFlag(c, profile.pais ?? 'BR', 48, 32));
  add(pack, mesh(new THREE.PlaneGeometry(0.09, 0.06), new THREE.MeshStandardMaterial({ map: packFlag })), 0.06, 0.06, -0.061).rotation.y = Math.PI;

  // Arms (pivot at the shoulder), short yellow sleeves.
  const arm = (side: number) => {
    const g = new THREE.Group(); g.position.set(side * 0.24, 1.17, 0);
    add(g, mesh(new THREE.SphereGeometry(0.08, 12, 10), top), 0, -0.02, 0);
    add(g, mesh(new THREE.CylinderGeometry(0.075, 0.07, 0.12, 12), top), 0, -0.08, 0);
    add(g, mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.2, 10), skin), 0, -0.2, 0);
    const fore = new THREE.Group(); fore.position.set(0, -0.3, 0); g.add(fore);
    add(fore, mesh(new THREE.CylinderGeometry(0.045, 0.04, 0.22, 10), skin), 0, -0.11, 0);
    add(fore, mesh(new THREE.SphereGeometry(0.05, 10, 8), skin), 0, -0.24, 0).scale.set(0.9, 1.1, 0.7);
    body.add(g); return { g, fore };
  };
  const { g: armL, fore: foreL } = arm(1);
  const { g: armR, fore: foreR } = arm(-1);

  // Head.
  const head = new THREE.Group(); head.position.set(0, 1.36, 0); body.add(head);
  add(body, mesh(new THREE.CylinderGeometry(0.05, 0.055, 0.1, 10), skin), 0, 1.28, 0);
  add(head, mesh(new THREE.SphereGeometry(0.2, 24, 18), skin), 0, 0.08, 0).scale.set(1, 1.04, 0.95);
  // Eyes: big, green, with a highlight; lids for blinking.
  const lids: THREE.Mesh[] = [];
  for (const s of [-1, 1]) {
    const eye = add(head, mesh(new THREE.SphereGeometry(0.05, 16, 12), m('#ffffff', 0.3)), s * 0.075, 0.1, 0.155);
    eye.scale.set(0.9, 1.15, 0.5);
    add(head, mesh(new THREE.CircleGeometry(0.03, 18), m('#3c9a3a', 0.3)), s * 0.075, 0.095, 0.182);
    add(head, mesh(new THREE.CircleGeometry(0.016, 14), m('#101010', 0.2)), s * 0.075, 0.093, 0.183);
    add(head, mesh(new THREE.CircleGeometry(0.008, 10), m('#ffffff', 0.1)), s * 0.068, 0.106, 0.184);
    const lid = add(head, mesh(new THREE.SphereGeometry(0.052, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), skin), s * 0.075, 0.1, 0.158);
    lid.scale.set(0.95, 0.05, 0.6); lids.push(lid);
  }
  const brow = (s: number) => { const b = add(head, mesh(new THREE.BoxGeometry(0.07, 0.014, 0.01), hairC), s * 0.078, 0.175, 0.17); return b; };
  const browL = brow(1), browR = brow(-1);
  add(head, mesh(new THREE.SphereGeometry(0.018, 10, 8), m('#b97a52', 0.55)), 0, 0.04, 0.19);
  for (const s of [-1, 1]) add(head, mesh(new THREE.CircleGeometry(0.025, 14), new THREE.MeshStandardMaterial({ color: '#e88a7a', transparent: true, opacity: 0.45 })), s * 0.12, 0.02, 0.168).rotation.y = s * 0.5;
  const mouthTex: Record<string, THREE.CanvasTexture> = {};
  const mouthMat = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false });
  const mouth = add(head, mesh(new THREE.PlaneGeometry(0.1, 0.05), mouthMat), 0, -0.035, 0.186);
  // Gold hoops.
  for (const s of [-1, 1]) add(head, mesh(new THREE.TorusGeometry(0.035, 0.006, 8, 24), gold), s * 0.19, -0.02, 0.02).rotation.y = Math.PI / 2;
  // Hair: a big cloud of curls around the back, top and sides, to the shoulders.
  const hair = new THREE.Group(); head.add(hair);
  const curl = new THREE.SphereGeometry(1, 10, 8);
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let i = 0; i < 70; i++) {
    const a = rnd() * Math.PI * 2;
    const up = rnd();
    const y = 0.32 - up * 0.62;
    const r = 0.2 + 0.08 * Math.sin(up * Math.PI) + rnd() * 0.05;
    const x = Math.sin(a) * r * 1.15;
    let z = Math.cos(a) * r - 0.04;
    // Keep the face clear: nothing in front of it below the hairline.
    if (z > 0.06 && y < 0.2 && Math.abs(x) < 0.17) z = -0.02 - rnd() * 0.1;
    const c = add(hair, mesh(curl, rnd() > 0.5 ? hairC : hairL), x, y + 0.08, z);
    const s = 0.06 + rnd() * 0.05;
    c.scale.set(s, s * 1.1, s);
  }
  add(hair, mesh(new THREE.SphereGeometry(0.215, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.42), hairC), 0, 0.11, -0.01).scale.set(1.05, 1.05, 1.02);
  // Fringe curls framing the face.
  for (const [x, y] of [[-0.13, 0.22], [-0.05, 0.27], [0.05, 0.27], [0.13, 0.22], [0.18, 0.12], [-0.18, 0.12]]) add(hair, mesh(curl, hairL), x, y, 0.13).scale.set(0.055, 0.05, 0.045);
  // Yellow ribbon on the left side of the head.
  const ribbon = add(hair, mesh(new THREE.TorusGeometry(0.05, 0.016, 6, 12), m('#f6d21c', 0.5)), 0.12, 0.3, 0.02);
  ribbon.rotation.set(0.4, 0.6, 0.6);
  add(hair, mesh(new THREE.ConeGeometry(0.03, 0.09, 4), m('#f6d21c', 0.5)), 0.17, 0.36, 0.02).rotation.z = -0.8;

  const state = { phase: 0, blink: 2, gesture: 'none' as TiziaGesture, until: 0, clock: 0, mood: 'smile' as TiziaMood };
  const setMood = (mood: TiziaMood) => {
    state.mood = mood;
    if (!mouthTex[mood]) mouthTex[mood] = canvasTexture(128, 64, MOUTHS[mood]);
    mouthMat.map = mouthTex[mood]; mouthMat.needsUpdate = true;
    const [tilt, lift] = BROWS[mood];
    browL.rotation.z = tilt; browR.rotation.z = -tilt;
    browL.position.y = browR.position.y = 0.175 + lift;
  };
  setMood('smile');
  const gesture = (g: TiziaGesture, seconds = 2.2) => { state.gesture = g; state.until = state.clock + seconds; };
  return { root, setMood, gesture, state, parts: { body, head, hair, armL, armR, foreL, foreR, legL, legR, browL, browR, lids, mouth } };
}

/** One frame: walk cycle, breathing, blinking, hair bounce and the gesture. */
export function animateTizia(t: Tizia, dt: number, speed: number, talking: boolean, reduced = false) {
  const s = t.state, p = t.parts;
  s.clock += dt;
  const moving = speed > 0.2;
  s.phase += dt * (moving ? Math.min(14, 4 + speed * 1.4) : 1.6);
  const swing = moving ? Math.min(0.9, 0.35 + speed * 0.06) : 0;
  const k = Math.sin(s.phase);
  p.legL.rotation.x = k * swing; p.legR.rotation.x = -k * swing;
  p.body.position.y = moving ? Math.abs(Math.cos(s.phase)) * 0.04 : Math.sin(s.clock * 2) * 0.006;
  // Blink every few seconds.
  s.blink -= dt;
  const closed = s.blink < 0.12;
  for (const lid of p.lids) lid.scale.y = closed ? 1 : 0.05;
  if (s.blink < 0) s.blink = 2 + Math.random() * 3;
  // Hair bounces a little.
  p.hair.rotation.x = reduced ? 0 : (moving ? Math.sin(s.phase * 2) * 0.04 : Math.sin(s.clock * 1.3) * 0.015);
  p.head.rotation.z = talking ? Math.sin(s.clock * 3) * 0.05 : 0;
  // Arms: walking swing, or the gesture.
  let g = s.clock < s.until ? s.gesture : (talking ? 'hips' : 'none');
  if (moving && (g === 'hips' || g === 'think')) g = 'none';
  const set = (aL: [number, number], aR: [number, number], fL: number, fR: number) => {
    const ease = Math.min(1, dt * 10);
    p.armL.rotation.x += (aL[0] - p.armL.rotation.x) * ease; p.armL.rotation.z += (aL[1] - p.armL.rotation.z) * ease;
    p.armR.rotation.x += (aR[0] - p.armR.rotation.x) * ease; p.armR.rotation.z += (aR[1] - p.armR.rotation.z) * ease;
    p.foreL.rotation.x += (fL - p.foreL.rotation.x) * ease; p.foreR.rotation.x += (fR - p.foreR.rotation.x) * ease;
  };
  const wob = Math.sin(s.clock * 9);
  switch (g) {
    case 'wave': set([0, 0.12], [-0.2, -2.6 + wob * 0.25], 0, -0.4); break;
    case 'celebrate': set([0, 2.7 + wob * 0.15], [0, -2.7 - wob * 0.15], -0.3, -0.3); p.body.position.y += Math.max(0, Math.sin(s.clock * 8)) * 0.08; break;
    case 'think': set([0, 0.12], [-1.2, -0.3], 0, -1.9); break;
    case 'facepalm': set([0, 0.12], [-1.6, -0.5], 0, -2.2); break;
    case 'hips': set([0.1, 0.55], [0.1, -0.55], -1.4, -1.4); break;
    default: set([-k * swing * 0.8, 0.1], [k * swing * 0.8, -0.1], moving ? -0.3 : -0.1, moving ? -0.3 : -0.1);
  }
}
