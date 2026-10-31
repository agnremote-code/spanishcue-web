// Más allá · the people of the other side, built on the shared people3d
// bodies: angels (tall, feathered wings that breathe, a halo of light),
// demons (horns, a tail that sways, embers in the eyes) and souls (the person
// they were, made of light, half transparent and glowing from inside).
import * as THREE from 'three';
import { addBlobShadow, createPerson, randomLook, setMood, setPose, type Look, type Person } from '../noche-abierta/people3d';
import type { Talker, Walker } from '../mundo-3d/kit3d';
import { random } from '../noche-abierta/build3d';

export type Kind = 'angel' | 'demon' | 'soul';
type Rig = { wings?: THREE.Group[]; tail?: THREE.Group; halo?: THREE.Mesh; aura?: THREE.Mesh; phase: number };
const rigs = new WeakMap<Person, Rig>();

// ---------------------------------------------------------------- shared shapes

let featherGeo: THREE.BufferGeometry | null = null;
/** One wing: a fan of long feathers, curved like a real wing at rest. */
function wing(side: 1 | -1, material: THREE.Material, span = 1) {
  featherGeo ??= (() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0); s.quadraticCurveTo(0.07, 0.25, 0.02, 0.62); s.quadraticCurveTo(-0.03, 0.3, 0, 0);
    return new THREE.ShapeGeometry(s, 6);
  })();
  const g = new THREE.Group();
  const rows = [
    { n: 9, len: 1.15, spread: 1.45, y: 0 },
    { n: 8, len: 0.8, spread: 1.25, y: 0.04 },
    { n: 7, len: 0.5, spread: 1.05, y: 0.08 },
  ];
  rows.forEach((row, r) => {
    for (let i = 0; i < row.n; i++) {
      const k = i / (row.n - 1);
      const f = new THREE.Mesh(featherGeo!, material);
      const a = -0.35 + k * row.spread;
      f.scale.set(1.3 - r * 0.2, row.len * span * (0.75 + 0.25 * Math.sin(k * Math.PI)), 1);
      f.position.set(side * (0.06 + k * 0.34 * span), row.y + k * 0.42 * span, -0.012 * r);
      f.rotation.set(0, 0, side * -(Math.PI / 2 - a));
      g.add(f);
    }
  });
  g.rotation.y = side * 0.35;
  return g;
}

const haloMat = new THREE.MeshBasicMaterial({ color: '#fff1b8', transparent: true, opacity: 0.95, toneMapped: false });
const auraTex = (() => {
  if (typeof document === 'undefined') return null;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.35, 'rgba(255,255,255,.35)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
export function softGlowTexture() { return auraTex; }

function addHalo(person: Person) {
  const halo = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.018, 8, 36), haloMat);
  halo.rotation.x = Math.PI / 2 - 0.25;
  halo.position.set(0, 0.36, -0.02);
  person.parts.head.add(halo);
  return halo;
}
function addAura(person: Person, color: string, size: number, opacity: number) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size * 1.6), new THREE.MeshBasicMaterial({ map: auraTex, color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
  m.position.y = 1.0;
  m.renderOrder = 2;
  person.root.add(m);
  return m;
}

// ---------------------------------------------------------------- the three kinds

/** Wings and a halo; the angel is a little taller and glows softly. */
export function makeAngel(person: Person, seed: number) {
  const r = random(seed);
  const feathers = new THREE.MeshStandardMaterial({ color: r() < 0.25 ? '#f3e7c8' : '#fbfaf6', emissive: '#fff3d6', emissiveIntensity: 0.35, roughness: 0.7, side: THREE.DoubleSide });
  const left = wing(-1, feathers), right = wing(1, feathers);
  for (const w of [left, right]) { w.position.set(0, 0.32, -0.16); person.parts.torso.add(w); }
  const halo = addHalo(person);
  const aura = addAura(person, '#fff4d8', 2.4, 0.22);
  rigs.set(person, { wings: [left, right], halo, aura, phase: r() * 6 });
}

const hornMat = new THREE.MeshStandardMaterial({ color: '#1a1210', roughness: 0.35, metalness: 0.2 });
const emberEye = new THREE.MeshBasicMaterial({ color: '#ff8a2a', toneMapped: false });
/** Horns, a tail and ember eyes over the person's own face. */
export function makeDemon(person: Person, seed: number) {
  const r = random(seed);
  const big = 0.8 + r() * 0.6;
  for (const side of [-1, 1]) {
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(side * 0.05, 0.08 * big, -0.02), new THREE.Vector3(side * 0.1, 0.16 * big, -0.08), new THREE.Vector3(side * 0.08, 0.24 * big, -0.16)]);
    const horn = new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.028, 7, false), hornMat);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.07, 7), hornMat);
    tip.position.copy(curve.getPoint(1)); tip.lookAt(curve.getPoint(1).clone().add(curve.getTangent(1)));
    tip.rotateX(Math.PI / 2);
    const g = new THREE.Group(); g.add(horn, tip);
    g.position.set(side * 0.075, 0.2, 0.02);
    person.parts.head.add(g);
  }
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.011, 6, 6), emberEye);
    eye.position.set(side * 0.038, 0.105, 0.118);
    person.parts.head.add(eye);
  }
  const tail = new THREE.Group();
  const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -0.25, -0.2), new THREE.Vector3(0.1, -0.55, -0.32), new THREE.Vector3(0.05, -0.7, -0.5)]);
  tail.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.022, 6, false), new THREE.MeshStandardMaterial({ color: '#3a0d0c', roughness: 0.55 })));
  const point = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.12, 4), hornMat);
  point.position.copy(curve.getPoint(1)); point.rotation.x = Math.PI * 0.75;
  tail.add(point);
  tail.position.set(0, -0.02, -0.12);
  person.parts.hips.add(tail);
  const aura = addAura(person, '#ff4a1a', 2.2, 0.14);
  rigs.set(person, { tail, aura, phase: r() * 6 });
}

/** A soul: the same body, made of light. Each soul gets its own materials. */
export function makeSoul(person: Person, seed: number, warm = true) {
  const r = random(seed);
  const tint = new THREE.Color(warm ? '#fff6e6' : '#c7ccd6');
  person.root.traverse(o => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh || !mesh.material) return;
    const src = mesh.material as THREE.MeshStandardMaterial;
    if (!src.color) return;
    const m = src.clone();
    m.color = src.color.clone().lerp(tint, warm ? 0.55 : 0.6);
    m.emissive = m.color.clone().multiplyScalar(warm ? 0.55 : 0.18);
    m.emissiveIntensity = 1;
    m.transparent = true;
    m.opacity = warm ? 0.78 : 0.62;
    m.depthWrite = true;
    mesh.material = m;
    mesh.castShadow = false;
  });
  const aura = addAura(person, warm ? '#fff2c8' : '#9aa6b8', 2, warm ? 0.3 : 0.16);
  rigs.set(person, { aura, phase: r() * 6 });
}

/** A body of `kind`, ready to stand or walk. The look comes from the cast or a seed. */
export function figure(kind: Kind, seed: number, look: Partial<Look> | null, warm: boolean, shadows = false) {
  const base = randomLook(seed);
  const full: Look = { ...base, ...(look ?? {}) } as Look;
  if (!look && kind === 'angel') Object.assign(full, { top: 'coat', topColor: ['#f6f1e4', '#eef3f8', '#f4ecf6'][seed % 3], bottom: 'pants', bottomColor: '#ece6da', height: 1.82 + (seed % 5) * 0.03, extras: [] });
  if (!look && kind === 'demon') Object.assign(full, { skin: ['#8e2a24', '#a8352c', '#6e2a28', '#5a1e1c'][seed % 4], top: seed % 2 ? 'suit' : 'tshirt', topColor: '#1a0f10', bottom: 'pants', bottomColor: '#140c0c', height: 1.8 + (seed % 4) * 0.05, extras: seed % 3 === 0 ? ['beard'] : [] });
  const person = createPerson(full, shadows);
  if (kind === 'angel') makeAngel(person, seed);
  else if (kind === 'demon') makeDemon(person, seed);
  else makeSoul(person, seed, warm);
  if (!shadows) addBlobShadow(person, kind === 'angel' ? 1.3 : 1);
  person.root.userData.person = true;
  return { person, body: String(full.body ?? 'm') };
}

export function talkerOf(parent: THREE.Object3D, kind: Kind, spot: string | null, x: number, z: number, heading: number, seed: number, look: Partial<Look> | null, pose: string, mood: string, warm: boolean, shadows = false): Talker {
  const { person, body } = figure(kind, seed, look, warm, shadows);
  setPose(person, pose);
  setMood(person, mood);
  person.root.position.set(x, 0, z);
  person.root.rotation.y = heading;
  person.attention = spot ? 1 : 0.4;
  parent.add(person.root);
  return { person, spot, x, z, heading, seed, body, baseMood: mood, seated: ['sit', 'ground', 'swing', 'crouch'].includes(pose) };
}

export function walkerOf(parent: THREE.Object3D, kind: Kind, path: { x: number; z: number }[], seed: number, speed: number, warm: boolean): Walker {
  const { person, body } = figure(kind, seed, null, warm, false);
  setPose(person, 'walk');
  setMood(person, kind === 'demon' ? 'angry' : kind === 'angel' ? 'smile' : warm ? 'neutral' : 'sad');
  // Start on the path, never parked at the origin until the first step.
  person.root.position.set(path[0].x, 0, path[0].z);
  parent.add(person.root);
  return { person, path, speed, at: random(seed)() * path.length, x: path[0].x, z: path[0].z, heading: 0, seed, body, pause: 0, moving: true };
}

/** Wings breathe, halos turn, tails sway, souls float a little and flicker. */
export function animateFigure(person: Person, t: number) {
  const rig = rigs.get(person);
  if (!rig) return;
  const p = t + rig.phase;
  if (rig.wings) { const a = Math.sin(p * 1.3) * 0.08; rig.wings[0].rotation.y = -0.35 - a; rig.wings[1].rotation.y = 0.35 + a; }
  if (rig.halo) rig.halo.rotation.z = p * 0.6;
  if (rig.tail) rig.tail.rotation.set(Math.sin(p * 1.7) * 0.25, Math.sin(p * 1.1) * 0.5, 0);
  if (rig.aura) (rig.aura.material as THREE.MeshBasicMaterial).opacity = (rig.halo ? 0.2 : rig.tail ? 0.12 : 0.24) + Math.sin(p * 2.2) * 0.05;
}
/** The aura always faces the camera. */
export function faceAura(person: Person, camera: THREE.Camera) {
  const rig = rigs.get(person);
  if (rig?.aura) rig.aura.quaternion.copy(camera.quaternion).premultiply(person.root.quaternion.clone().invert());
}
