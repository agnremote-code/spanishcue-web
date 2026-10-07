// The learner's avatar: the SpanishCue mascot. Identity follows the official
// mascot art in /public/brand/mascot (a young man with voluminous, wavy
// dark-brown hair, strong dark brows, tanned skin and a defined jaw; black
// shirt with an open collar and sleeves rolled below the elbow, belt with a
// silver buckle, black tailored trousers and polished black oxfords, his
// black-and-gold fountain pen in the right hand). Back and profile volumes
// follow the brand turnaround sheet: an athletic adult build with a marked
// waist, natural hips and glutes under the trousers, and a small black
// backpack with a little Argentine flag tucked in its side pocket.
//
// Original procedural geometry and a canvas-drawn flag, animated in code. The
// head is a sculpted sphere (brow ridge, cheekbones, squared jaw, chin) with
// real eyes (vertex-coloured eyeballs that look where he is heading and a lid
// that blinks), the limbs are tapered lathes, the hands have a palm, a thumb
// and curled fingers. A walk/run cycle tied to the distance covered (so the
// feet do not slide) with heel strike, elbow swing, torso counter-rotation and
// a stabilised head; an idle with breathing and slow weight shifts, a settle
// when he stops, a lean into curves and small gestures while he talks. Static
// pieces are merged per joint and material to keep draw calls low.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RUN_SPEED, RUN_STRIDE, WALK_SPEED, WALK_STRIDE } from './world3d.mjs';

type Pivot = THREE.Group;
export type Hero = {
  root: THREE.Group;
  body: THREE.Group;
  parts: {
    hips: Pivot; torso: Pivot; head: Pivot; chest: THREE.Mesh;
    armL: Pivot; armR: Pivot; foreL: Pivot; foreR: Pivot;
    legL: Pivot; legR: Pivot; shinL: Pivot; shinR: Pivot; footL: Pivot; footR: Pivot;
    gluteL: Pivot; gluteR: Pivot; pack: Pivot;
    eyeL: Pivot; eyeR: Pivot; lids: Pivot; handR: Pivot;
  };
  flag: { cloth: THREE.Mesh; rest: Float32Array };
  phase: number;
  idle: number;
  blend: number;
  lean: number;
  speed: number;
  settle: number;
  seated: boolean;
  /** Seconds until the next blink, and how far the current blink has run. */
  blinkIn: number;
  blinkT: number;
  /** Where the eyes look (yaw, pitch) and where the head is turned, smoothed. */
  gazeX: number;
  gazeY: number;
  headYaw: number;
  /** Slow weight shift between the legs while standing, -1..1. */
  shift: number;
};
export type HeroMode = 'move' | 'talk' | 'seated';

const HIP_HEIGHT = 0.97;
// Facing +z with y up, his right hand is on -x.
const RIGHT = -1;
const LEFT = 1;

function material(color: string, roughness = 0.75, metalness = 0) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}

function place<T extends THREE.Object3D>(object: T, parent: THREE.Object3D, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0): T {
  object.position.set(x, y, z);
  object.rotation.set(rx, ry, rz);
  parent.add(object);
  return object;
}

function mesh(geometry: THREE.BufferGeometry, mat: THREE.Material, parent: THREE.Object3D, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  return place(new THREE.Mesh(geometry, mat), parent, x, y, z, rx, ry, rz);
}

// A tapered limb or trunk: radii from bottom to top, revolved around y.
function lathe(profile: [number, number][], segments = 16) {
  return new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), segments);
}

// A rounded blob: a sphere stretched to the given radii.
function blob(rx: number, ry: number, rz: number, detail = 12) {
  const geometry = new THREE.SphereGeometry(1, detail, Math.max(6, Math.round(detail * 0.75)));
  geometry.scale(rx, ry, rz);
  return geometry;
}

const smooth = (a: number, b: number, v: number) => {
  const t = Math.max(0, Math.min(1, (v - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const bump = (v: number, at: number, width: number) => Math.exp(-(((v - at) / width) ** 2));

// Merge every plain mesh directly under `group` into one mesh per material.
// Meshes marked userData.keep (animated ones) stay as they are.
function bake(group: THREE.Object3D, shadows: boolean) {
  const buckets = new Map<THREE.Material, THREE.BufferGeometry[]>();
  for (const child of [...group.children]) {
    if (!(child instanceof THREE.Mesh) || child.userData.keep) continue;
    child.updateMatrix();
    let geometry = child.geometry.clone().applyMatrix4(child.matrix);
    if (geometry.index) {
      const flat = geometry.toNonIndexed();
      geometry.dispose();
      geometry = flat;
    }
    const mat = child.material as THREE.Material;
    if (!buckets.has(mat)) buckets.set(mat, []);
    buckets.get(mat)!.push(geometry);
    group.remove(child);
  }
  for (const [mat, list] of buckets) {
    const merged = mergeGeometries(list, false);
    for (const geometry of list) geometry.dispose();
    if (!merged) continue;
    const out = new THREE.Mesh(merged, mat);
    out.castShadow = shadows;
    group.add(out);
  }
}

function flagTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 96;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#74acdf';
  ctx.fillRect(0, 0, 96, 64);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 21, 96, 22);
  // The Sun of May, small and simple.
  ctx.fillStyle = '#f6b40e';
  ctx.strokeStyle = '#f6b40e';
  ctx.lineWidth = 1.4;
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(48 + Math.cos(a) * 5, 32 + Math.sin(a) * 5);
    ctx.lineTo(48 + Math.cos(a) * 9, 32 + Math.sin(a) * 9);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(48, 32, 5, 0, Math.PI * 2);
  ctx.fill();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const FLAG_W = 0.15;

// Head radii (half width, half height, half depth) in metres.
const HEAD = { x: 0.112, y: 0.124, z: 0.118 };

// One sculpted head: a rounded skull with a brow ridge, slight eye sockets,
// cheekbones, a squared jaw that narrows into the chin, and a nape that
// tucks into the neck. Built from a sphere, vertex by vertex.
export function headGeometry() {
  const geometry = new THREE.SphereGeometry(1, 40, 30);
  const position = geometry.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < position.count; i++) {
    let x = position.getX(i);
    let y = position.getY(i);
    let z = position.getZ(i);
    const front = Math.max(0, z);
    const side = Math.abs(x);
    if (y < -0.05) {
      // Down from the cheekbones: the face keeps its width to the jaw
      // corners, then closes quickly into the chin.
      const d = (-0.05 - y) / 0.95;
      x *= 1 - 0.06 * smooth(0, 0.66, d) - 0.54 * smooth(0.62, 1, d) ** 1.1;
      if (z < 0) z *= 1 - 0.55 * smooth(0.15, 1, d);
      else z *= 1 - 0.08 * d + 0.07 * bump(d, 0.9, 0.14) * (1 - side);
    }
    // Brow ridge, sockets and cheekbones, only on the face.
    z += front * (0.04 * bump(y, 0.26, 0.14) * (1 - smooth(0.55, 0.9, side)));
    z -= front * 0.05 * bump(y, 0.1, 0.13) * bump(side, 0.42, 0.22);
    x *= 1 + 0.05 * front * bump(y, -0.12, 0.16) * smooth(0.5, 0.85, side);
    // A fuller back of the skull and a slightly flatter top.
    if (z < 0 && y > -0.2) z *= 1.06;
    if (y > 0.6) y *= 0.98;
    position.setXYZ(i, x * HEAD.x, y * HEAD.y, z * HEAD.z);
  }
  geometry.computeVertexNormals();
  return geometry;
}

// The hair: one shell that sits high on the forehead and low on the nape,
// with the underside cut so it never covers the face. `cut` is the hairline
// height (normalised) by azimuth: 0 at the front, PI at the back.
function hairShellGeometry() {
  const geometry = new THREE.SphereGeometry(1, 32, 22);
  const position = geometry.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < position.count; i++) {
    let x = position.getX(i);
    let y = position.getY(i);
    let z = position.getZ(i);
    const azimuth = Math.abs(Math.atan2(x, z));
    const cut = 0.08 - 0.5 * smooth(0.6, 1.4, azimuth) - 0.45 * smooth(1.4, 2.7, azimuth) + 0.12 * smooth(2.6, 3.14, azimuth);
    if (y < cut) {
      const r = Math.hypot(x, z) || 1;
      const shrink = 0.92 - 0.08 * (cut - y);
      x *= shrink / r * Math.hypot(x, z);
      z *= shrink / r * Math.hypot(x, z);
      y = cut;
    } else {
      // Soft waves across the top and a lighter touch at the back.
      const wave = 1 + 0.045 * Math.sin(azimuth * 5.2 + y * 7) * Math.sin(y * 4.1 + x * 3) * (0.4 + 0.6 * Math.max(0, y));
      x *= wave; y *= wave; z *= wave;
    }
    position.setXYZ(i, x, y, z);
  }
  geometry.computeVertexNormals();
  return geometry;
}

// An eyeball coloured by vertex: white sclera, dark-brown iris with a lighter
// rim, black pupil. Looking down +z. Glossy material gives the highlight.
function eyeGeometry(r: number) {
  const geometry = new THREE.SphereGeometry(r, 18, 14);
  const position = geometry.attributes.position as THREE.BufferAttribute;
  const colors = new Float32Array(position.count * 3);
  const sclera = new THREE.Color('#f4efe9');
  const rim = new THREE.Color('#4a2c17');
  const iris = new THREE.Color('#2b1a0e');
  const pupil = new THREE.Color('#050404');
  const out = new THREE.Color();
  for (let i = 0; i < position.count; i++) {
    const angle = Math.acos(Math.max(-1, Math.min(1, position.getZ(i) / r)));
    if (angle < 0.4) out.copy(pupil);
    else if (angle < 0.78) out.copy(iris);
    else if (angle < 0.92) out.copy(rim);
    else out.copy(sclera);
    colors.set([out.r, out.g, out.b], i * 3);
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return geometry;
}

export function createHero(shadows = true): Hero {
  const skin = material('#d6a47e', 0.5);
  const shirt = material('#161618', 0.82);
  const seam = material('#232327', 0.7);
  const trousers = material('#111114', 0.68);
  const shoe = material('#070708', 0.12, 0.25);
  const sole = material('#1a1714', 0.7);
  const hair = material('#35200f', 0.52);
  const hairLight = material('#5a3a1e', 0.46);
  const brow = material('#1d1309', 0.85);
  const dark = material('#0c0c0d', 0.5);
  const lip = material('#b06a55', 0.5);
  const silver = material('#cfd3d8', 0.25, 0.9);
  const gold = material('#d9b65c', 0.28, 0.85);
  const canvas = material('#141416', 0.85);
  const eyeMaterial = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.12, metalness: 0.05 });

  const root = new THREE.Group();
  const body = place(new THREE.Group(), root);
  const hips = place(new THREE.Group(), body, 0, HIP_HEIGHT);

  // Pelvis: narrower at the crotch, widest at the hips, tapering to the waist.
  const pelvis = mesh(lathe([[0.05, -0.125], [0.118, -0.105], [0.164, -0.05], [0.176, 0.0], [0.166, 0.07], [0.154, 0.115]]), trousers, hips);
  pelvis.scale.z = 0.62;
  // Belt with a silver frame buckle and the tongue of the belt through it.
  const belt = mesh(new THREE.CylinderGeometry(0.161, 0.163, 0.05, 20), dark, hips, 0, 0.095);
  belt.scale.z = 0.66;
  mesh(new THREE.BoxGeometry(0.056, 0.04, 0.014), silver, hips, 0, 0.095, 0.108);
  mesh(new THREE.BoxGeometry(0.034, 0.022, 0.016), dark, hips, 0, 0.095, 0.109);
  mesh(new THREE.BoxGeometry(0.05, 0.028, 0.008), dark, hips, LEFT * 0.05, 0.095, 0.108);
  // Front fly, hip pockets and back pockets, barely there.
  mesh(new THREE.BoxGeometry(0.012, 0.09, 0.006), dark, hips, 0.012, 0.01, 0.108, 0.15);
  for (const side of [-1, 1]) {
    mesh(new THREE.BoxGeometry(0.07, 0.006, 0.006), dark, hips, side * 0.07, 0.04, -0.106);
    mesh(new THREE.BoxGeometry(0.006, 0.08, 0.006), dark, hips, side * 0.125, 0.03, 0.085, 0, 0, side * 0.35);
  }

  // Glutes: one per side, pivoting at the hip joint so they follow the thigh.
  const makeGlute = (side: number) => {
    const pivot = place(new THREE.Group(), hips, side * 0.095, -0.04);
    const glute = mesh(new THREE.SphereGeometry(0.092, 16, 12), trousers, pivot, -side * 0.018, -0.055, -0.05);
    glute.scale.set(1, 1.04, 0.7);
    glute.castShadow = shadows;
    glute.userData.keep = true;
    return pivot;
  };
  const gluteL = makeGlute(LEFT);
  const gluteR = makeGlute(RIGHT);

  // Torso: a marked waist opening into a V-shaped chest and broad shoulders,
  // tucked into the belt.
  const torso = place(new THREE.Group(), hips, 0, 0.08);
  const chest = mesh(lathe([[0.0, -0.01], [0.136, 0], [0.142, 0.06], [0.15, 0.12], [0.172, 0.22], [0.2, 0.33], [0.214, 0.42], [0.206, 0.49], [0.16, 0.545], [0.07, 0.575], [0.0, 0.58]], 20), shirt, torso);
  chest.scale.z = 0.62;
  chest.castShadow = shadows;
  chest.userData.keep = true;
  // Pectorals under the shirt and the trapezius slope into the neck.
  for (const side of [-1, 1]) mesh(blob(0.085, 0.06, 0.05), shirt, torso, side * 0.075, 0.4, 0.075);
  const traps = mesh(blob(0.19, 0.07, 0.09), shirt, torso, 0, 0.52, -0.02);
  traps.rotation.x = 0.1;
  // Neck.
  mesh(lathe([[0.062, 0.5], [0.054, 0.57], [0.056, 0.63], [0.0, 0.66]]), skin, torso);
  // Open collar: a V of skin, two collar tips standing up, the placket.
  const vee = mesh(new THREE.CylinderGeometry(0.0, 0.05, 0.11, 3), skin, torso, 0, 0.52, 0.104, -0.2, 0, 0);
  vee.scale.z = 0.4;
  const band = mesh(new THREE.TorusGeometry(0.066, 0.014, 6, 20, Math.PI + 1.3), shirt, torso, 0, 0.59, -0.008, -Math.PI / 2, 0, -0.65);
  band.scale.y = 0.9;
  for (const side of [-1, 1]) {
    mesh(new THREE.BoxGeometry(0.036, 0.062, 0.006), shirt, torso, side * 0.05, 0.572, 0.092, -0.55, side * 0.55, side * 0.95);
    mesh(new THREE.BoxGeometry(0.006, 0.3, 0.006), seam, torso, side * 0.08, 0.22, -0.114);
  }
  mesh(new THREE.BoxGeometry(0.02, 0.42, 0.01), seam, torso, 0, 0.26, 0.114, 0.05);
  for (const y of [0.17, 0.27, 0.37]) mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.004, 8), dark, torso, 0, y, 0.12, Math.PI / 2);

  // Backpack: small and black, with the flag tucked in the left side pocket.
  const pack = place(new THREE.Group(), torso, 0, 0.3, -0.18, 0.08);
  const bag = mesh(new THREE.CapsuleGeometry(0.105, 0.17, 4, 14), canvas, pack);
  bag.scale.z = 0.5;
  const pocket = mesh(new THREE.CapsuleGeometry(0.07, 0.05, 4, 12), canvas, pack, 0, -0.08, -0.045);
  pocket.scale.z = 0.42;
  mesh(new THREE.BoxGeometry(0.11, 0.005, 0.006), silver, pack, 0, -0.035, -0.074);
  mesh(new THREE.TorusGeometry(0.02, 0.006, 4, 10, Math.PI), dark, pack, 0, 0.19, -0.01);
  mesh(new THREE.BoxGeometry(0.04, 0.1, 0.07), canvas, pack, LEFT * 0.112, -0.1, 0);
  for (const side of [-1, 1]) {
    // Straps over the shoulders and down the chest.
    const strap = mesh(new THREE.TorusGeometry(0.12, 0.01, 5, 14, Math.PI), dark, torso, side * 0.12, 0.47, -0.005, 0, Math.PI / 2, 0);
    strap.scale.z = 1.05;
    mesh(new THREE.BoxGeometry(0.036, 0.2, 0.012), dark, torso, side * 0.12, 0.37, 0.12, 0.12);
  }
  // The flag: pole inside the pocket, cloth trailing behind.
  const flagLean = place(new THREE.Group(), pack, LEFT * 0.116, -0.12, 0.005, -0.12, 0, LEFT * -0.32);
  const flag = place(new THREE.Group(), flagLean, 0, 0, 0, 0, -Math.PI / 2, 0);
  mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.34, 6), material('#e9e2d2', 0.6), flag, 0, 0.13);
  mesh(new THREE.SphereGeometry(0.008, 8, 6), gold, flag, 0, 0.302);
  const clothGeometry = new THREE.PlaneGeometry(FLAG_W, 0.1, 8, 3);
  clothGeometry.translate(-FLAG_W / 2, 0, 0);
  const cloth = mesh(clothGeometry, new THREE.MeshStandardMaterial({ map: flagTexture(), side: THREE.DoubleSide, roughness: 0.85 }), flag, -0.004, 0.24);
  cloth.castShadow = shadows;
  cloth.userData.keep = true;

  // Head. The pivot is at the base of the skull; the skull centre is 0.19 up.
  const head = place(new THREE.Group(), torso, 0, 0.565);
  const C = 0.19;
  const skull = mesh(headGeometry(), skin, head, 0, C);
  skull.castShadow = shadows;
  const EYE_Y = C + 0.012;
  const EYE_Z = 0.097;
  const EYE_X = 0.04;
  const EYE_R = 0.0135;
  const eyeL = place(new THREE.Group(), head, LEFT * EYE_X, EYE_Y, EYE_Z);
  const eyeR = place(new THREE.Group(), head, RIGHT * EYE_X, EYE_Y, EYE_Z);
  const eyeGeo = eyeGeometry(EYE_R);
  for (const eye of [eyeL, eyeR]) {
    const ball = mesh(eyeGeo, eyeMaterial, eye);
    ball.userData.keep = true;
  }
  // One lid piece for both eyes (they share a height), rotating about the
  // axis through both eye centres to blink. A lower lid stays put.
  const lids = place(new THREE.Group(), head, 0, EYE_Y, EYE_Z);
  const lidParts: THREE.BufferGeometry[] = [];
  for (const side of [-1, 1]) {
    const upper = new THREE.SphereGeometry(EYE_R + 0.0025, 14, 8, 0, Math.PI, 0, 1.22);
    upper.translate(side * EYE_X, 0, 0);
    lidParts.push(upper);
    const lower = new THREE.SphereGeometry(EYE_R + 0.002, 14, 6, 0, Math.PI, 2.45, Math.PI - 2.45);
    mesh(lower, skin, head, side * EYE_X, EYE_Y, EYE_Z);
    // A dark lash line along the upper lid edge, read as eyeliner at distance.
    mesh(new THREE.TorusGeometry(EYE_R + 0.0015, 0.0011, 5, 12, Math.PI), brow, head, side * EYE_X, EYE_Y + 0.001, EYE_Z + 0.003, 0.85, 0, 0);
  }
  const lidMesh = mesh(mergeGeometries(lidParts, false)!, skin, lids);
  lidMesh.userData.keep = true;
  for (const side of [-1, 1]) {
    // Ears, close to the skull, with a darker hollow.
    mesh(blob(0.01, 0.026, 0.018), skin, head, side * 0.108, C + 0.002, -0.012, 0, 0, side * -0.1);
    // Strong, straight dark brows, a little higher at the outer end.
    mesh(new THREE.BoxGeometry(0.054, 0.013, 0.01), brow, head, side * 0.041, EYE_Y + 0.03, 0.108, 0.1, side * 0.4, side * 0.12);
  }
  // Nose: a bridge from between the brows, a rounded tip, nostrils.
  const bridge = mesh(lathe([[0.006, 0], [0.009, 0.03], [0.012, 0.055]]), skin, head, 0, EYE_Y - 0.038, 0.123, -0.42);
  bridge.scale.x = 1.5;
  mesh(blob(0.0115, 0.0095, 0.012), skin, head, 0, EYE_Y - 0.042, 0.13);
  for (const side of [-1, 1]) mesh(blob(0.0085, 0.006, 0.009), skin, head, side * 0.0115, EYE_Y - 0.047, 0.119);
  // Mouth: a calm, closed mouth. Upper lip, fuller lower lip, the line between.
  const upperLip = mesh(new THREE.CapsuleGeometry(0.0042, 0.03, 3, 8), lip, head, 0, EYE_Y - 0.072, 0.112, 0, 0, Math.PI / 2);
  upperLip.scale.z = 0.7;
  const lower = mesh(new THREE.CapsuleGeometry(0.0052, 0.022, 3, 8), lip, head, 0, EYE_Y - 0.08, 0.111, 0, 0, Math.PI / 2);
  lower.scale.z = 0.85;
  // The line between the lips curves up at the corners: a calm half smile.
  mesh(new THREE.TorusGeometry(0.038, 0.0012, 4, 12, 1.0), brow, head, 0, EYE_Y - 0.04, 0.1178, 0, 0, -Math.PI / 2 - 0.5);
  // Chin and jaw shading is in the skull itself; a faint stubble shade under the jaw.

  // Hair: a voluminous shell high on the forehead and low on the nape, then
  // sculpted locks that sweep from a part on his left, a fringe pushed up
  // and across to his right, sideburns and a few waves at the back.
  const shell = mesh(hairShellGeometry(), hair, head, 0, C + 0.05, -0.014);
  shell.scale.set(0.13, 0.112, 0.138);
  // Locks: (x, y above the skull centre, z, radii, rotation, lighter?). The
  // waves sweep from a part on his left across the top to his right, a quiff
  // rises at the front, and a few strands fall onto the forehead.
  const hairLight2 = hairLight;
  const locks: [number, number, number, number, number, number, number, number, number, boolean][] = [
    // top, sweeping across
    [0.07, 0.138, 0.02, 0.075, 0.03, 0.05, 0, -0.3, 0.4, true], [0.0, 0.152, 0.03, 0.085, 0.032, 0.055, 0.1, -0.2, 0.15, false],
    [-0.06, 0.143, 0.04, 0.075, 0.03, 0.05, 0.15, 0.2, -0.4, true], [0.04, 0.146, -0.05, 0.08, 0.032, 0.052, -0.2, 0.4, 0.25, false],
    [-0.045, 0.146, -0.06, 0.075, 0.03, 0.052, -0.25, -0.4, -0.25, true], [0.0, 0.125, -0.11, 0.085, 0.032, 0.045, -0.55, 0, 0, false],
    [0.1, 0.11, -0.04, 0.05, 0.05, 0.065, 0, 0, 0.55, false], [-0.1, 0.11, -0.04, 0.05, 0.05, 0.065, 0, 0, -0.55, true],
    [0.085, 0.075, -0.09, 0.045, 0.04, 0.05, -0.3, 0.3, 0.4, false], [-0.085, 0.075, -0.09, 0.045, 0.04, 0.05, -0.3, -0.3, -0.4, false],
    // quiff, pushed up at the front
    [0.035, 0.145, 0.08, 0.065, 0.032, 0.055, -0.55, 0, 0.3, true], [-0.03, 0.15, 0.085, 0.07, 0.032, 0.055, -0.7, 0, -0.25, false],
    [-0.08, 0.125, 0.065, 0.055, 0.03, 0.05, -0.45, 0.3, -0.7, true], [0.085, 0.12, 0.055, 0.05, 0.03, 0.05, -0.35, -0.3, 0.7, false],
    // fringe strands on the forehead
    [-0.05, 0.08, 0.128, 0.042, 0.014, 0.02, 0.5, 0.3, -0.6, false], [0.012, 0.085, 0.133, 0.04, 0.013, 0.018, 0.5, -0.2, -0.35, true],
    [0.062, 0.082, 0.11, 0.034, 0.013, 0.02, 0.4, -0.6, 0.65, false], [-0.085, 0.09, 0.09, 0.03, 0.014, 0.022, 0.4, 0.8, -0.9, true],
  ];
  for (const [x, y, z, sx, sy, sz, rx, ry, rz, light] of locks) mesh(blob(sx, sy, sz, 10), light ? hairLight2 : hair, head, x, C + y, z, rx, ry, rz);
  // Sideburns and the hair over the ears.
  for (const side of [-1, 1]) {
    mesh(blob(0.012, 0.038, 0.022), hair, head, side * 0.1, C + 0.03, 0.03, 0, side * 0.3, 0);
    mesh(blob(0.03, 0.045, 0.045), hair, head, side * 0.1, C + 0.075, -0.03);
  }
  // Nape.
  mesh(blob(0.07, 0.035, 0.03), hair, head, 0, C - 0.02, -0.1, 0.5);

  // Arms: deltoid, black sleeve rolled just below the elbow, bare forearm,
  // hand with a palm, grouped fingers and a thumb.
  const makeArm = (side: number) => {
    const arm = place(new THREE.Group(), torso, side * 0.228, 0.49);
    const deltoid = mesh(blob(0.072, 0.08, 0.068), shirt, arm, 0, -0.01);
    deltoid.rotation.z = side * -0.15;
    mesh(lathe([[0.0, -0.33], [0.054, -0.325], [0.058, -0.25], [0.066, -0.14], [0.07, -0.04], [0.064, 0.02], [0.0, 0.04]]), shirt, arm);
    const fore = place(new THREE.Group(), arm, 0, -0.31);
    // The rolled cuff, thicker than the sleeve, and the forearm tapering to the wrist.
    const cuff = mesh(new THREE.TorusGeometry(0.056, 0.018, 7, 16), shirt, fore, 0, -0.03, 0, Math.PI / 2);
    cuff.scale.y = 1.2;
    mesh(lathe([[0.03, -0.26], [0.034, -0.21], [0.045, -0.1], [0.052, -0.045], [0.05, -0.01], [0.0, 0.0]]), skin, fore);
    const hand = place(new THREE.Group(), fore, 0, -0.265);
    // Palm: a flattened block, thin across x, with the back of the hand outward.
    const palm = mesh(blob(0.02, 0.044, 0.036, 10), skin, hand, 0, -0.022, 0.004);
    palm.rotation.y = side * 0.1;
    mesh(blob(0.018, 0.02, 0.034, 8), skin, hand, 0, -0.055, 0.006);
    return { arm, fore, hand };
  };
  const left = makeArm(LEFT);
  const right = makeArm(RIGHT);
  // Fingers: one grouped block of four, slightly curled inward; the thumb
  // lies along the front edge of the palm.
  const fingers = (hand: THREE.Group, side: number, curl: number) => {
    const block = mesh(new THREE.CapsuleGeometry(0.016, 0.052, 4, 8), skin, hand, -side * 0.012 * curl, -0.075 + 0.012 * curl, 0.008, 0, 0, side * (0.1 + curl * 1.1));
    block.scale.z = 1.9;
    block.scale.x = 0.85;
    // Knuckle ridge.
    mesh(new THREE.CapsuleGeometry(0.012, 0.05, 3, 8), skin, hand, side * 0.006, -0.06 + 0.004 * curl, 0.008, Math.PI / 2, 0, 0);
    const thumb = mesh(new THREE.CapsuleGeometry(0.0115, 0.034, 3, 8), skin, hand, -side * 0.018, -0.035, 0.03, 0.5 + curl * 0.3, 0, -side * 0.5);
    return { block, thumb };
  };
  fingers(left.hand, LEFT, 0.5);
  fingers(right.hand, RIGHT, 1);
  // The fountain pen, black with a gold clip, band and nib, held in the right fist.
  const pen = place(new THREE.Group(), right.hand, 0, -0.056, 0.03, -1.3, 0, RIGHT * 0.2);
  mesh(new THREE.CylinderGeometry(0.0095, 0.0085, 0.15, 12), material('#0a0a0b', 0.12, 0.5), pen);
  mesh(new THREE.SphereGeometry(0.0095, 10, 8), material('#0a0a0b', 0.12, 0.5), pen, 0, 0.075);
  mesh(new THREE.BoxGeometry(0.0035, 0.052, 0.003), gold, pen, 0, 0.045, 0.0105);
  mesh(new THREE.SphereGeometry(0.003, 6, 6), gold, pen, 0, 0.07, 0.0105);
  mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.006, 12), gold, pen, 0, -0.028);
  mesh(new THREE.CylinderGeometry(0.0098, 0.0098, 0.004, 12), gold, pen, 0, 0.012);
  mesh(new THREE.ConeGeometry(0.0072, 0.032, 10), gold, pen, 0, -0.09, 0, Math.PI);

  // Legs: tailored trousers that follow the thigh and calf, with a front
  // crease, a hem, and polished oxfords on a thin sole.
  const makeLeg = (side: number) => {
    const leg = place(new THREE.Group(), hips, side * 0.095, -0.04);
    const thigh = mesh(lathe([[0.0, -0.47], [0.058, -0.465], [0.062, -0.42], [0.072, -0.3], [0.084, -0.16], [0.09, -0.05], [0.083, 0.02], [0.0, 0.04]]), trousers, leg);
    thigh.scale.z = 0.94;
    mesh(new THREE.BoxGeometry(0.006, 0.4, 0.008), trousers, leg, 0, -0.26, 0.076, 0.03);
    const shin = place(new THREE.Group(), leg, 0, -0.44);
    mesh(lathe([[0.0, -0.455], [0.054, -0.45], [0.052, -0.38], [0.057, -0.2], [0.065, -0.1], [0.064, -0.02], [0.06, 0.0], [0.0, 0.03]]), trousers, shin);
    mesh(new THREE.BoxGeometry(0.006, 0.38, 0.008), trousers, shin, 0, -0.23, 0.058, -0.02);
    mesh(new THREE.CylinderGeometry(0.056, 0.057, 0.02, 14), trousers, shin, 0, -0.445);
    const foot = place(new THREE.Group(), shin, 0, -0.45);
    // Sole, welt, the vamp rising to the laces, a rounded toe cap and a heel.
    mesh(new THREE.BoxGeometry(0.094, 0.016, 0.26), sole, foot, 0, -0.045, 0.045);
    const vamp = mesh(blob(0.048, 0.034, 0.12), shoe, foot, 0, -0.02, 0.06);
    vamp.rotation.x = 0.1;
    const toe = mesh(blob(0.044, 0.028, 0.055), shoe, foot, 0, -0.026, 0.12);
    toe.scale.y = 0.9;
    mesh(blob(0.046, 0.04, 0.05), shoe, foot, 0, -0.012, -0.03);
    mesh(new THREE.CylinderGeometry(0.046, 0.05, 0.03, 12), shoe, foot, 0, 0.0, -0.01);
    for (const z of [0.045, 0.06, 0.075]) mesh(new THREE.BoxGeometry(0.03, 0.003, 0.004), sole, foot, 0, 0.013 - (z - 0.045) * 0.35, z);
    return { leg, shin, foot };
  };
  const legL = makeLeg(LEFT);
  const legR = makeLeg(RIGHT);

  for (const group of [hips, torso, head, pack, flag, left.arm, left.fore, left.hand, right.arm, right.fore, right.hand, pen, legL.leg, legL.shin, legL.foot, legR.leg, legR.shin, legR.foot, lids]) bake(group, shadows);

  const rest = Float32Array.from(clothGeometry.attributes.position.array as Float32Array);
  return {
    root, body,
    parts: {
      hips, torso, head, chest,
      armL: left.arm, armR: right.arm, foreL: left.fore, foreR: right.fore,
      legL: legL.leg, legR: legR.leg, shinL: legL.shin, shinR: legR.shin, footL: legL.foot, footR: legR.foot,
      gluteL, gluteR, pack, eyeL, eyeR, lids, handR: right.hand,
    },
    flag: { cloth, rest },
    phase: 0, idle: 0, blend: 0, lean: 0, speed: 0, settle: 0, seated: false,
    blinkIn: 2.5, blinkT: 1, gazeX: 0, gazeY: 0, headYaw: 0, shift: 0,
  };
}

const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
const clamp = (value: number, limit: number) => Math.max(-limit, Math.min(limit, value));

// The glutes follow each thigh: a little lift and tightening when the leg
// pushes back, a little stretch when it swings forward.
function followThighs(hero: Hero) {
  const p = hero.parts;
  for (const [glute, leg] of [[p.gluteL, p.legL], [p.gluteR, p.legR]] as const) {
    const swing = leg.rotation.x;
    glute.rotation.x = swing * 0.42;
    glute.scale.y = 1 - Math.max(0, swing) * 0.08;
    glute.scale.z = 1 + Math.max(0, swing) * 0.05;
  }
}

// Blinks every 2-5 s (a quick double blink now and then), and the eyes turn
// towards `gazeX`/`gazeY` with a small lag behind the head.
function animateFace(hero: Hero, dt: number, gazeX: number, gazeY: number, reduced: boolean) {
  const p = hero.parts;
  if (!reduced) {
    hero.blinkIn -= dt;
    if (hero.blinkIn <= 0) {
      hero.blinkT = 0;
      const roll = Math.abs(Math.sin(hero.idle * 12.9898) * 43758.5453) % 1;
      hero.blinkIn = roll < 0.18 ? 0.35 : 2 + roll * 3;
    }
    hero.blinkT = Math.min(1, hero.blinkT + dt / 0.16);
  } else {
    hero.blinkT = 1;
  }
  const closed = Math.sin(hero.blinkT * Math.PI);
  p.lids.rotation.x = 0.04 + closed * 1.1;
  hero.gazeX += (gazeX - hero.gazeX) * Math.min(1, dt * 10);
  hero.gazeY += (gazeY - hero.gazeY) * Math.min(1, dt * 10);
  for (const eye of [p.eyeL, p.eyeR]) eye.rotation.set(hero.gazeY, hero.gazeX, 0);
}

// speed in m/s (what the avatar actually moved), turn in rad/s.
export function animateHero(hero: Hero, dt: number, speed: number, turn: number, mode: HeroMode = 'move', reduced = false) {
  const p = hero.parts;
  hero.idle += dt;
  const breath = reduced ? 0 : Math.sin(hero.idle * 1.6);
  if (mode === 'seated' || hero.seated) {
    p.hips.position.set(0, 0.52, 0);
    p.hips.rotation.set(0, 0, 0);
    p.legL.rotation.x = p.legR.rotation.x = -Math.PI / 2;
    p.legL.rotation.z = p.legR.rotation.z = 0;
    p.shinL.rotation.x = p.shinR.rotation.x = Math.PI / 2;
    p.footL.rotation.x = p.footR.rotation.x = 0;
    p.armL.rotation.set(-0.45, 0, 0.08);
    p.foreL.rotation.x = -0.7;
    p.armR.rotation.set(-0.55 + Math.sin(hero.idle * 1.6) * 0.06, 0, -0.08);
    p.foreR.rotation.x = -1.1;
    p.torso.rotation.set(0.04 + breath * 0.006, 0, 0);
    p.head.rotation.set(0, Math.sin(hero.idle * 0.5) * 0.15, 0);
    p.gluteL.rotation.x = p.gluteR.rotation.x = 0;
    p.chest.scale.y = 1 + breath * 0.012;
    hero.body.rotation.z = 0;
    hero.speed = 0;
    animateFace(hero, dt, Math.sin(hero.idle * 0.5) * 0.12, 0.05, reduced);
    waveFlag(hero, 0, reduced);
    return;
  }

  const moving = speed > 0.12 ? 1 : 0;
  hero.blend += (moving - hero.blend) * Math.min(1, dt * (moving ? 12 : 7));
  const b = hero.blend;
  const g = clamp01((speed - WALK_SPEED) / (RUN_SPEED - WALK_SPEED));
  const stride = mix(WALK_STRIDE, RUN_STRIDE, g);
  hero.phase = (hero.phase + (speed * dt / stride) * Math.PI * 2) % (Math.PI * 200);
  const t = hero.phase;
  const amount = clamp01(speed / 1.4);
  const sin = Math.sin(t);
  const cos = Math.cos(t);

  // Stopping: a short settle (knees give, torso tips back) when the speed
  // drops sharply.
  const braking = dt > 0 ? Math.max(0, (hero.speed - speed) / dt) : 0;
  hero.speed = speed;
  hero.settle += (Math.min(1, braking / 30) - hero.settle) * Math.min(1, dt * (braking > 1 ? 20 : 5));

  // Gait pose. Legs: the thigh swings, the knee bends most as the leg comes
  // through, the foot lands heel first and pushes off with the toe.
  const thigh = mix(0.42, 0.82, g) * amount;
  const knee = mix(0.85, 1.75, g) * amount;
  const arm = mix(0.34, 0.78, g) * amount;
  const gait = {
    legL: sin * thigh, legR: -sin * thigh,
    shinL: Math.max(0, -cos) * knee + mix(0.06, 0.28, g) * amount,
    shinR: Math.max(0, cos) * knee + mix(0.06, 0.28, g) * amount,
    footL: -sin * mix(0.22, 0.3, g) * amount, footR: sin * mix(0.22, 0.3, g) * amount,
    armL: -sin * arm - 0.1 * g, armR: sin * arm - 0.1 * g,
    // The elbow bends more as the arm comes forward.
    foreL: mix(-0.3, -1.35, g) - Math.max(0, -sin) * mix(0.3, 0.35, g) * amount,
    foreR: mix(-0.35, -1.35, g) - Math.max(0, sin) * mix(0.3, 0.35, g) * amount,
    hipY: HIP_HEIGHT - 0.055 * g + Math.abs(cos) * mix(0.025, 0.07, g) * amount,
    torsoX: mix(0.05, 0.2, g), twist: sin * mix(0.07, 0.14, g) * amount,
    roll: cos * mix(0.035, 0.06, g) * amount,
  };
  // Idle pose: weight on one leg, slowly shifting to the other; pen near the
  // chin; a slow breath. Talking: small gestures with the pen hand and nods.
  const talking = mode === 'talk';
  const wave = reduced ? 0 : Math.sin(hero.idle * 0.42);
  const target = wave > 0.3 ? 1 : wave < -0.3 ? -1 : hero.shift;
  hero.shift += (target - hero.shift) * Math.min(1, dt * 1.6);
  const s = hero.shift;
  const tap = reduced ? 0 : Math.max(0, Math.sin(hero.idle * 0.9)) * Math.sin(hero.idle * 9) * 0.04;
  const gesture = talking && !reduced ? Math.sin(hero.idle * 2.3) : 0;
  const gesture2 = talking && !reduced ? Math.sin(hero.idle * 1.45 + 1) : 0;
  const idle = {
    legL: 0.03 - s * 0.03, legR: -0.05 + s * 0.03,
    shinL: 0.08 + Math.max(0, -s) * 0.1, shinR: 0.04 + Math.max(0, s) * 0.1,
    footL: 0, footR: 0,
    armL: talking ? -0.25 + gesture2 * 0.12 : -0.1 + breath * 0.01,
    armR: talking ? -0.8 + gesture * 0.16 : -0.64 + breath * 0.012,
    foreL: talking ? -0.75 + gesture2 * 0.3 : -0.32,
    foreR: talking ? -1.45 + gesture * 0.3 - Math.max(0, gesture2) * 0.25 : -2.08 + tap,
    hipY: HIP_HEIGHT - 0.006 - Math.abs(s) * 0.008 + breath * 0.003,
    torsoX: 0.02 + breath * 0.008 + (talking ? gesture2 * 0.015 : 0),
    twist: 0.05 * s + (talking ? gesture * 0.03 : 0), roll: 0.035 * s,
  };

  p.legL.rotation.x = mix(idle.legL, gait.legL, b);
  p.legR.rotation.x = mix(idle.legR, gait.legR, b);
  // Standing, the unloaded leg relaxes slightly outward.
  p.legL.rotation.z = (1 - b) * Math.max(0, -s) * 0.06;
  p.legR.rotation.z = -(1 - b) * Math.max(0, s) * 0.06;
  p.shinL.rotation.x = mix(idle.shinL, gait.shinL, b) + hero.settle * 0.25;
  p.shinR.rotation.x = mix(idle.shinR, gait.shinR, b) + hero.settle * 0.25;
  // Feet stay level with the ground, plus the heel strike and toe-off.
  p.footL.rotation.x = -(p.legL.rotation.x + p.shinL.rotation.x) * 0.6 + mix(idle.footL, gait.footL, b);
  p.footR.rotation.x = -(p.legR.rotation.x + p.shinR.rotation.x) * 0.6 + mix(idle.footR, gait.footR, b);
  p.armL.rotation.x = mix(idle.armL, gait.armL, b);
  p.armR.rotation.x = mix(idle.armR, gait.armR, b);
  p.armL.rotation.z = mix(talking ? 0.2 : 0.1, 0.1, b);
  p.armR.rotation.z = mix(talking ? 0.22 : 0.34, -0.1, b);
  p.armL.rotation.y = (1 - b) * (talking ? -0.3 : 0);
  p.armR.rotation.y = (1 - b) * (talking ? 0.5 + gesture * 0.15 : 0.35);
  p.foreL.rotation.x = mix(idle.foreL, gait.foreL, b);
  p.foreR.rotation.x = mix(idle.foreR, gait.foreR, b);
  p.hips.position.y = mix(idle.hipY, gait.hipY, b) - hero.settle * 0.03;
  p.hips.position.x = (1 - b) * s * 0.018;
  p.hips.position.z = 0;
  // The pelvis twists against the shoulders and rolls with each step.
  p.hips.rotation.y = -mix(0, gait.twist, b) * 0.7;
  p.hips.rotation.z = mix(idle.roll, gait.roll, b);
  p.torso.rotation.z = -p.hips.rotation.z * 0.8;
  p.torso.rotation.x = mix(idle.torsoX, gait.torsoX, b) - hero.settle * 0.16;
  p.torso.rotation.y = mix(idle.twist, gait.twist, b);
  // The head stays level and looks into the turn; standing, it drifts a
  // little, as if taking in the street; talking, it nods with the gestures.
  const look = clamp(turn * 0.14, 0.4) * b;
  const drift = reduced ? 0 : Math.sin(hero.idle * 0.35) * 0.14 + Math.sin(hero.idle * 0.9) * 0.03;
  const headGoal = look + (1 - b) * (talking ? gesture * 0.07 + gesture2 * 0.05 : drift);
  hero.headYaw += (headGoal - hero.headYaw) * Math.min(1, dt * 6);
  p.head.rotation.x = -p.torso.rotation.x * 0.7 + (1 - b) * (talking ? Math.max(0, gesture) * 0.05 : 0) + hero.settle * 0.08;
  p.head.rotation.y = -p.torso.rotation.y * 0.85 + hero.headYaw;
  p.head.rotation.z = -p.torso.rotation.z * 0.5 + (1 - b) * (talking ? gesture2 * 0.03 : s * 0.015);
  p.chest.scale.y = 1 + breath * 0.012 * (1 - 0.6 * b);
  // The backpack bounces a little behind the stride.
  p.pack.rotation.x = 0.08 + Math.abs(sin) * 0.05 * b * g;
  followThighs(hero);
  // The eyes lead the head into the turn and glance about while standing.
  const glance = reduced ? 0 : Math.sin(hero.idle * 0.7 + 2) * 0.1;
  animateFace(hero, dt, clamp(turn * 0.25, 0.3) * b + (1 - b) * (talking ? 0 : glance), (1 - b) * 0.03 + b * g * 0.05, reduced);

  // Lean into turns, more at speed.
  const goal = clamp(-turn * speed * 0.035, 0.26);
  hero.lean += (goal - hero.lean) * Math.min(1, dt * 8);
  hero.body.rotation.z = hero.lean;
  waveFlag(hero, speed, reduced);
}

// The flag cloth ripples, more when he runs.
function waveFlag(hero: Hero, speed: number, reduced: boolean) {
  const position = hero.flag.cloth.geometry.attributes.position as THREE.BufferAttribute;
  const rest = hero.flag.rest;
  const strength = reduced ? 0.003 : 0.008 + Math.min(1, speed / RUN_SPEED) * 0.022;
  const time = hero.idle * (4 + speed);
  for (let i = 0; i < position.count; i++) {
    const x = rest[i * 3];
    const u = -x / FLAG_W;
    position.setZ(i, Math.sin(time - u * 5) * strength * u);
  }
  position.needsUpdate = true;
}
