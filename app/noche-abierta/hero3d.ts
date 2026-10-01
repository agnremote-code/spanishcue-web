// The learner's avatar: the SpanishCue mascot. Identity follows the official
// mascot art in /public/brand/mascot (a young man with voluminous, wavy
// dark-brown hair, strong dark brows, tanned skin and a defined jaw; black
// shirt with an open collar and sleeves rolled below the elbow, belt, black
// tailored trousers and polished black oxfords, his black-and-gold fountain
// pen in the right hand). Back and profile volumes follow the brand
// turnaround sheet: an athletic adult build with a marked waist, natural hips
// and glutes under the trousers, and a small black backpack with a little
// Argentine flag tucked in its side pocket.
//
// Original procedural geometry and a canvas-drawn flag, animated in code: a
// run cycle tied to the distance covered (so the feet do not slide) in which
// the pelvis rolls and twists and the glutes follow each thigh, an idle pose
// with the pen near the chin, a settle when he stops and a lean and head turn
// into curves. Static pieces are merged per joint and material to keep draw
// calls low.
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
  };
  flag: { cloth: THREE.Mesh; rest: Float32Array };
  phase: number;
  idle: number;
  blend: number;
  lean: number;
  speed: number;
  settle: number;
  seated: boolean;
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
function lathe(profile: [number, number][], segments = 14) {
  return new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), segments);
}

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

// One smooth head: a rounded skull that narrows into a defined jaw and chin.
function headGeometry() {
  const geometry = new THREE.SphereGeometry(1, 28, 20);
  const position = geometry.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < position.count; i++) {
    let x = position.getX(i);
    const y = position.getY(i);
    let z = position.getZ(i);
    if (y < 0) {
      const low = -y;
      x *= 1 - 0.3 * low ** 1.6;
      if (z < 0) z *= 1 - 0.35 * low;
      else z *= 1 - 0.06 * low;
    } else if (z > 0) {
      z *= 1 - 0.08 * y;
    }
    position.setXYZ(i, x * 0.1, y * 0.13, z * 0.112);
  }
  geometry.computeVertexNormals();
  return geometry;
}

export function createHero(shadows = true): Hero {
  const skin = material('#cc9670', 0.58);
  const shirt = material('#17171a', 0.72);
  const seam = material('#26262b', 0.6);
  const trousers = material('#121215', 0.64);
  const shoe = material('#08080a', 0.18, 0.3);
  const hair = material('#3b2416', 0.88);
  const brow = material('#22150c', 0.9);
  const dark = material('#0d0d0e', 0.5);
  const white = material('#f1ece6', 0.4);
  const iris = material('#2a1a10', 0.3);
  const lip = material('#a86650', 0.55);
  const silver = material('#c9ccd1', 0.3, 0.9);
  const gold = material('#d8b35a', 0.3, 0.85);
  const canvas = material('#141416', 0.82);

  const root = new THREE.Group();
  const body = place(new THREE.Group(), root);
  const hips = place(new THREE.Group(), body, 0, HIP_HEIGHT);

  // Pelvis: narrower at the crotch, widest at the hips, tapering to the waist.
  const pelvis = mesh(lathe([[0.05, -0.125], [0.115, -0.105], [0.162, -0.05], [0.174, 0.0], [0.162, 0.07], [0.152, 0.11]]), trousers, hips);
  pelvis.scale.z = 0.6;
  const belt = mesh(new THREE.CylinderGeometry(0.158, 0.16, 0.06, 18), dark, hips, 0, 0.09);
  belt.scale.z = 0.66;
  mesh(new THREE.BoxGeometry(0.05, 0.04, 0.016), silver, hips, 0, 0.09, 0.11);
  // Front fly and back pockets, barely there.
  mesh(new THREE.BoxGeometry(0.012, 0.09, 0.006), seam, hips, 0.012, 0.01, 0.106, 0.15);
  for (const side of [-1, 1]) mesh(new THREE.BoxGeometry(0.07, 0.006, 0.006), seam, hips, side * 0.07, 0.035, -0.105);

  // Glutes: one per side, pivoting at the hip joint so they follow the thigh.
  const makeGlute = (side: number) => {
    const pivot = place(new THREE.Group(), hips, side * 0.095, -0.04);
    const glute = mesh(new THREE.SphereGeometry(0.09, 16, 12), trousers, pivot, -side * 0.02, -0.055, -0.05);
    glute.scale.set(1, 1.04, 0.7);
    glute.castShadow = shadows;
    glute.userData.keep = true;
    return pivot;
  };
  const gluteL = makeGlute(LEFT);
  const gluteR = makeGlute(RIGHT);

  // Torso: waist to broad chest and shoulders, tucked into the belt.
  const torso = place(new THREE.Group(), hips, 0, 0.08);
  const chest = mesh(lathe([[0.0, -0.01], [0.134, 0], [0.142, 0.06], [0.152, 0.12], [0.172, 0.22], [0.198, 0.34], [0.206, 0.44], [0.19, 0.51], [0.13, 0.565], [0.06, 0.58]]), shirt, torso);
  chest.scale.z = 0.6;
  chest.castShadow = shadows;
  chest.userData.keep = true;
  const shoulders = mesh(new THREE.CapsuleGeometry(0.08, 0.32, 4, 12), shirt, torso, 0, 0.5, -0.005, 0, 0, Math.PI / 2);
  shoulders.scale.z = 0.82;
  // Open collar: a V of skin, two collar points, the button placket.
  mesh(new THREE.BoxGeometry(0.05, 0.09, 0.02), skin, torso, 0, 0.53, 0.104, -0.28);
  const band = mesh(new THREE.TorusGeometry(0.064, 0.013, 6, 18, Math.PI + 1.1), shirt, torso, 0, 0.578, -0.004, -Math.PI / 2, 0, -0.55);
  band.scale.y = 0.9;
  for (const side of [-1, 1]) {
    mesh(new THREE.BoxGeometry(0.044, 0.07, 0.01), shirt, torso, side * 0.04, 0.565, 0.1, -0.45, 0, side * 0.55);
    // A seam down each side of the back gives the back some shape.
    mesh(new THREE.BoxGeometry(0.006, 0.3, 0.006), seam, torso, side * 0.08, 0.22, -0.112);
  }
  mesh(new THREE.BoxGeometry(0.018, 0.4, 0.01), seam, torso, 0, 0.26, 0.112, 0.05);

  // Backpack: small and black, with the flag tucked in the left side pocket.
  const pack = place(new THREE.Group(), torso, 0, 0.3, -0.175, 0.08);
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
    mesh(new THREE.BoxGeometry(0.036, 0.2, 0.012), dark, torso, side * 0.12, 0.37, 0.118, 0.12);
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

  // Head: skull, defined jaw and chin, ears, brows, eyes, nose, mouth.
  const head = place(new THREE.Group(), torso, 0, 0.6);
  mesh(new THREE.CylinderGeometry(0.05, 0.058, 0.13, 12), skin, head, 0, 0.04);
  const skull = mesh(headGeometry(), skin, head, 0, 0.205);
  skull.castShadow = shadows;
  for (const side of [-1, 1]) {
    const ear = mesh(new THREE.SphereGeometry(0.028, 8, 6), skin, head, side * 0.098, 0.2, -0.008);
    ear.scale.set(0.45, 1, 0.75);
    const sclera = mesh(new THREE.SphereGeometry(0.013, 10, 8), white, head, side * 0.037, 0.21, 0.1);
    sclera.scale.set(1.25, 0.68, 0.45);
    mesh(new THREE.SphereGeometry(0.0068, 8, 6), iris, head, side * 0.037, 0.21, 0.1048);
    // Strong, straight dark brows.
    mesh(new THREE.BoxGeometry(0.05, 0.014, 0.014), brow, head, side * 0.04, 0.232, 0.101, 0.15, side * 0.28, side * -0.08);
    // Sideburns.
    mesh(new THREE.BoxGeometry(0.01, 0.036, 0.018), hair, head, side * 0.095, 0.222, 0.032);
  }
  // Straight nose and a calm mouth.
  mesh(new THREE.BoxGeometry(0.017, 0.048, 0.022), skin, head, 0, 0.19, 0.11, -0.28);
  mesh(new THREE.SphereGeometry(0.013, 8, 6), skin, head, 0, 0.17, 0.118);
  mesh(new THREE.BoxGeometry(0.034, 0.007, 0.008), lip, head, 0, 0.145, 0.1);

  // Hair: voluminous dark-brown waves. A shell that sits high on the
  // forehead and low on the nape, soft lumps on top for the waves, and a
  // fringe swept to one side.
  const shell = mesh(new THREE.SphereGeometry(1, 24, 14, 0, Math.PI * 2, 0, Math.PI * 0.5), hair, head, 0, 0.212, -0.006, -0.45);
  shell.scale.set(0.108, 0.136, 0.122);
  const lump = new THREE.SphereGeometry(1, 12, 8);
  const hairAt = (polar: number, azimuth: number, size: number, lift: number) => {
    const piece = mesh(lump, hair, head,
      Math.sin(polar) * Math.sin(azimuth) * 0.104 * lift,
      0.212 + Math.cos(polar) * 0.13 * lift,
      Math.sin(polar) * Math.cos(azimuth) * 0.114 * lift - 0.012,
      polar * 0.8, azimuth, 0);
    piece.scale.set(size * 1.25, size * 0.62, size);
  };
  const rings: [number, number, number, number][] = [
    // polar, count, size, keep clear of the face below this |azimuth|
    [0.2, 3, 0.055, 0], [0.62, 7, 0.05, 0], [1.05, 8, 0.044, 1.0], [1.45, 7, 0.038, 1.7], [1.85, 5, 0.034, 2.2],
  ];
  rings.forEach(([polar, count, size, clear], ring) => {
    for (let i = 0; i < count; i++) {
      const azimuth = -Math.PI + ((i + 0.5 + (ring % 2) * 0.5) / count) * Math.PI * 2;
      if (Math.abs(azimuth) < clear) continue;
      const jitter = Math.sin((ring * 7 + i) * 12.9898) * 0.5;
      hairAt(polar + jitter * 0.1, azimuth + jitter * 0.2, size * (1 + jitter * 0.2), 0.98 + jitter * 0.04);
    }
  });
  for (const [x, y, z, s, rz] of [[-0.06, 0.298, 0.08, 0.04, 0.5], [-0.022, 0.31, 0.095, 0.044, 0.35], [0.02, 0.302, 0.1, 0.04, 0.25], [0.058, 0.286, 0.088, 0.034, 0.1], [-0.035, 0.282, 0.106, 0.026, 0.6]]) {
    const piece = mesh(lump, hair, head, x, y, z, 0.7, 0, rz);
    piece.scale.set(s * 1.3, s * 0.6, s);
  }

  // Arms: shoulder cap, black sleeve rolled just below the elbow, forearm, hand.
  const makeArm = (side: number) => {
    const arm = place(new THREE.Group(), torso, side * 0.235, 0.5);
    const cap = mesh(new THREE.SphereGeometry(0.07, 12, 10), shirt, arm, 0, -0.01);
    cap.scale.set(0.95, 1, 0.9);
    mesh(lathe([[0.0, -0.315], [0.05, -0.31], [0.056, -0.24], [0.06, -0.12], [0.064, -0.02]]), shirt, arm);
    const fore = place(new THREE.Group(), arm, 0, -0.3);
    mesh(new THREE.TorusGeometry(0.055, 0.016, 6, 14), shirt, fore, 0, -0.035, 0, Math.PI / 2);
    mesh(lathe([[0.034, -0.25], [0.04, -0.2], [0.048, -0.09], [0.05, -0.03], [0.0, -0.02]]), skin, fore);
    const hand = place(new THREE.Group(), fore, 0, -0.265);
    const palm = mesh(new THREE.SphereGeometry(0.045, 10, 8), skin, hand, 0, -0.02);
    palm.scale.set(0.72, 1, 0.55);
    return { arm, fore, hand };
  };
  const left = makeArm(LEFT);
  const right = makeArm(RIGHT);
  // Left hand relaxed, fingers lightly curled.
  mesh(new THREE.CapsuleGeometry(0.018, 0.045, 3, 8), skin, left.hand, 0, -0.06, 0.012, 0.35, 0, Math.PI / 2);
  mesh(new THREE.CapsuleGeometry(0.012, 0.03, 3, 6), skin, left.hand, LEFT * -0.028, -0.032, 0.02, 0.4, 0, LEFT * 0.4);
  // Right hand: a loose fist around the fountain pen, thumb on top.
  mesh(new THREE.CapsuleGeometry(0.02, 0.045, 3, 8), skin, right.hand, 0, -0.058, 0.02, 0, 0, Math.PI / 2);
  mesh(new THREE.CapsuleGeometry(0.013, 0.032, 3, 6), skin, right.hand, RIGHT * -0.026, -0.04, 0.034, 0.9, 0, RIGHT * 0.5);
  const pen = place(new THREE.Group(), right.hand, 0, -0.056, 0.03, -1.3, 0, RIGHT * 0.2);
  mesh(new THREE.CylinderGeometry(0.0095, 0.008, 0.15, 10), material('#0b0b0c', 0.15, 0.4), pen);
  mesh(new THREE.BoxGeometry(0.004, 0.05, 0.004), gold, pen, 0, 0.04, 0.011);
  mesh(new THREE.CylinderGeometry(0.0098, 0.0098, 0.008, 10), gold, pen, 0, -0.03);
  mesh(new THREE.ConeGeometry(0.007, 0.03, 8), gold, pen, 0, -0.09, 0, Math.PI);

  // Legs: tailored trousers that follow the thigh and calf, polished oxfords.
  const makeLeg = (side: number) => {
    const leg = place(new THREE.Group(), hips, side * 0.095, -0.04);
    const thigh = mesh(lathe([[0.0, -0.47], [0.058, -0.465], [0.062, -0.42], [0.072, -0.3], [0.083, -0.16], [0.089, -0.05], [0.082, 0.02], [0.0, 0.04]]), trousers, leg);
    thigh.scale.z = 0.94;
    const shin = place(new THREE.Group(), leg, 0, -0.44);
    mesh(lathe([[0.0, -0.455], [0.053, -0.45], [0.051, -0.38], [0.056, -0.2], [0.063, -0.08], [0.062, 0.0], [0.0, 0.03]]), trousers, shin);
    const foot = place(new THREE.Group(), shin, 0, -0.45);
    mesh(new THREE.BoxGeometry(0.098, 0.022, 0.27), shoe, foot, 0, -0.039, 0.045);
    const upper = mesh(new THREE.SphereGeometry(0.05, 12, 8), shoe, foot, 0, -0.012, 0.06);
    upper.scale.set(0.98, 0.62, 2.3);
    mesh(new THREE.BoxGeometry(0.084, 0.05, 0.08), shoe, foot, 0, -0.018, -0.045);
    mesh(new THREE.BoxGeometry(0.03, 0.004, 0.06), seam, foot, 0, 0.018, 0.075, -0.25);
    return { leg, shin, foot };
  };
  const legL = makeLeg(LEFT);
  const legR = makeLeg(RIGHT);

  for (const group of [hips, torso, head, pack, flag, left.arm, left.fore, left.hand, right.arm, right.fore, right.hand, pen, legL.leg, legL.shin, legL.foot, legR.leg, legR.shin, legR.foot]) bake(group, shadows);
  lump.dispose();

  const rest = Float32Array.from(clothGeometry.attributes.position.array as Float32Array);
  return {
    root, body,
    parts: {
      hips, torso, head, chest,
      armL: left.arm, armR: right.arm, foreL: left.fore, foreR: right.fore,
      legL: legL.leg, legR: legR.leg, shinL: legL.shin, shinR: legR.shin, footL: legL.foot, footR: legR.foot,
      gluteL, gluteR, pack,
    },
    flag: { cloth, rest },
    phase: 0, idle: 0, blend: 0, lean: 0, speed: 0, settle: 0, seated: false,
  };
}

const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

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

// speed in m/s (what the avatar actually moved), turn in rad/s.
export function animateHero(hero: Hero, dt: number, speed: number, turn: number, mode: HeroMode = 'move', reduced = false) {
  const p = hero.parts;
  hero.idle += dt;
  if (mode === 'seated' || hero.seated) {
    p.hips.position.y = 0.52;
    p.hips.rotation.set(0, 0, 0);
    p.legL.rotation.x = p.legR.rotation.x = -Math.PI / 2;
    p.shinL.rotation.x = p.shinR.rotation.x = Math.PI / 2;
    p.footL.rotation.x = p.footR.rotation.x = 0;
    p.armL.rotation.set(-0.45, 0, 0.05);
    p.foreL.rotation.x = -0.7;
    p.armR.rotation.set(-0.55 + Math.sin(hero.idle * 1.6) * 0.06, 0, -0.05);
    p.foreR.rotation.x = -1.1;
    p.torso.rotation.set(0.04, 0, 0);
    p.head.rotation.set(0, Math.sin(hero.idle * 0.5) * 0.15, 0);
    p.gluteL.rotation.x = p.gluteR.rotation.x = 0;
    hero.body.rotation.z = 0;
    hero.speed = 0;
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

  // Stopping: a short settle backwards when the speed drops sharply.
  const braking = dt > 0 ? Math.max(0, (hero.speed - speed) / dt) : 0;
  hero.speed = speed;
  hero.settle += (Math.min(1, braking / 30) - hero.settle) * Math.min(1, dt * (braking > 1 ? 20 : 5));

  // Gait pose.
  const thigh = mix(0.42, 0.82, g) * amount;
  const knee = mix(0.85, 1.75, g) * amount;
  const arm = mix(0.32, 0.72, g) * amount;
  const gait = {
    legL: Math.sin(t) * thigh, legR: -Math.sin(t) * thigh,
    shinL: Math.max(0, -Math.cos(t)) * knee + mix(0.06, 0.28, g) * amount,
    shinR: Math.max(0, Math.cos(t)) * knee + mix(0.06, 0.28, g) * amount,
    armL: -Math.sin(t) * arm - 0.1 * g, armR: Math.sin(t) * arm - 0.1 * g,
    foreL: mix(-0.35, -1.5, g), foreR: mix(-0.4, -1.5, g),
    hipY: HIP_HEIGHT - 0.055 * g + Math.abs(Math.cos(t)) * mix(0.025, 0.07, g) * amount,
    torsoX: mix(0.05, 0.2, g), twist: Math.sin(t) * mix(0.06, 0.13, g) * amount,
    roll: Math.cos(t) * mix(0.035, 0.06, g) * amount,
  };
  // Idle pose: weight on one leg, pen near the chin, a slow breath.
  const breath = reduced ? 0 : Math.sin(hero.idle * 1.7);
  const tap = reduced ? 0 : Math.max(0, Math.sin(hero.idle * 0.9)) * Math.sin(hero.idle * 9) * 0.04;
  const talking = mode === 'talk';
  const gesture = talking && !reduced ? Math.sin(hero.idle * 2.3) : 0;
  const idle = {
    legL: 0.04, legR: -0.06, shinL: 0.1, shinR: 0.02,
    armL: -0.12, armR: talking ? -0.75 + gesture * 0.18 : -0.62,
    foreL: -0.3, foreR: talking ? -1.35 + gesture * 0.25 : -2.05 + tap,
    hipY: HIP_HEIGHT - 0.005 + breath * 0.004,
    torsoX: 0.02 + breath * 0.008, twist: 0.04, roll: 0.03,
  };

  p.legL.rotation.x = mix(idle.legL, gait.legL, b);
  p.legR.rotation.x = mix(idle.legR, gait.legR, b);
  p.shinL.rotation.x = mix(idle.shinL, gait.shinL, b);
  p.shinR.rotation.x = mix(idle.shinR, gait.shinR, b);
  // Feet stay roughly level with the ground.
  p.footL.rotation.x = -(p.legL.rotation.x + p.shinL.rotation.x) * 0.6;
  p.footR.rotation.x = -(p.legR.rotation.x + p.shinR.rotation.x) * 0.6;
  p.armL.rotation.x = mix(idle.armL, gait.armL, b);
  p.armR.rotation.x = mix(idle.armR, gait.armR, b);
  p.armL.rotation.z = mix(0.08, 0.12, b);
  p.armR.rotation.z = mix(0.32, -0.12, b);
  p.foreL.rotation.x = mix(idle.foreL, gait.foreL, b);
  p.foreR.rotation.x = mix(idle.foreR, gait.foreR, b);
  p.hips.position.y = mix(idle.hipY, gait.hipY, b);
  p.hips.position.x = (1 - b) * (reduced ? 0 : Math.sin(hero.idle * 0.45) * 0.012);
  // The pelvis twists against the shoulders and rolls with each step.
  p.hips.rotation.y = -mix(0, gait.twist, b) * 0.7;
  p.hips.rotation.z = mix(idle.roll, gait.roll, b);
  p.torso.rotation.z = -p.hips.rotation.z * 0.8;
  p.torso.rotation.x = mix(idle.torsoX, gait.torsoX, b) - hero.settle * 0.16;
  p.torso.rotation.y = mix(idle.twist, gait.twist, b);
  // Look into the turn.
  const look = Math.max(-0.35, Math.min(0.35, turn * 0.12)) * b;
  p.head.rotation.x = -p.torso.rotation.x * 0.6;
  p.head.rotation.y = -p.torso.rotation.y * 0.8 + look + (1 - b) * (talking ? gesture * 0.08 : Math.sin(hero.idle * 0.35) * 0.12);
  p.head.rotation.z = -p.torso.rotation.z * 0.5;
  p.chest.scale.y = 1 + (1 - b) * breath * 0.012;
  // The backpack bounces a little behind the stride.
  p.pack.rotation.x = 0.08 + Math.abs(Math.sin(t)) * 0.05 * b * g;
  followThighs(hero);

  // Lean into turns, more at speed.
  const goal = Math.max(-0.26, Math.min(0.26, -turn * speed * 0.035));
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
