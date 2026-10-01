// The learner's avatar: the SpanishCue mascot as a young man in a black
// shirt with rolled sleeves, black trousers and polished black shoes, with
// his fountain pen in the right hand and a small Argentine hand flag in the
// left. Original procedural geometry and a canvas-drawn flag, animated in
// code: a run cycle tied to the distance covered (so the feet do not slide),
// an idle pose with the pen near the chin, smooth blends between the two and
// a lean into turns.
import * as THREE from 'three';
import { RUN_SPEED, RUN_STRIDE, WALK_SPEED, WALK_STRIDE } from './world3d.mjs';

type Pivot = THREE.Group;
export type Hero = {
  root: THREE.Group;
  body: THREE.Group;
  parts: {
    hips: Pivot; torso: Pivot; head: Pivot; chest: THREE.Mesh;
    armL: Pivot; armR: Pivot; foreL: Pivot; foreR: Pivot;
    legL: Pivot; legR: Pivot; shinL: Pivot; shinR: Pivot; footL: Pivot; footR: Pivot;
  };
  flag: { cloth: THREE.Mesh; rest: Float32Array };
  phase: number;
  idle: number;
  blend: number;
  lean: number;
  seated: boolean;
};
export type HeroMode = 'move' | 'talk' | 'seated';

const HIP_HEIGHT = 0.97;

function material(color: string, roughness = 0.75, metalness = 0) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}

function pivotWith(mesh: THREE.Mesh, offsetY: number, shadows: boolean) {
  const pivot = new THREE.Group();
  mesh.position.y = offsetY;
  mesh.castShadow = shadows;
  pivot.add(mesh);
  return pivot;
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

export function createHero(shadows = true): Hero {
  const skin = material('#c98f62', 0.6);
  const shirt = material('#18181b', 0.7);
  const trousers = material('#111114', 0.62);
  const shoe = material('#0a0a0b', 0.2, 0.25);
  const hair = material('#3a2516', 0.85);
  const brow = material('#24170e', 0.9);
  const dark = material('#0d0d0e', 0.5);
  const silver = material('#c9ccd1', 0.3, 0.9);
  const gold = material('#d8b35a', 0.3, 0.85);

  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const hips = new THREE.Group();
  hips.position.y = HIP_HEIGHT;
  body.add(hips);

  const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.33, 0.17, 0.2), trousers);
  pelvis.castShadow = shadows;
  hips.add(pelvis);
  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.172, 0.172, 0.055, 14), dark);
  belt.scale.z = 0.64;
  belt.position.y = 0.075;
  hips.add(belt);
  const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.04, 0.02), silver);
  buckle.position.set(0, 0.075, 0.112);
  hips.add(buckle);

  const torso = new THREE.Group();
  torso.position.y = 0.08;
  hips.add(torso);
  const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.215, 0.165, 0.54, 14), shirt);
  chest.scale.z = 0.6;
  chest.position.y = 0.28;
  chest.castShadow = shadows;
  torso.add(chest);
  const shoulders = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.3, 4, 10), shirt);
  shoulders.rotation.z = Math.PI / 2;
  shoulders.position.y = 0.52;
  shoulders.scale.z = 0.85;
  shoulders.castShadow = shadows;
  torso.add(shoulders);
  // Open collar: two lapels and a little skin at the neck.
  const throat = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.1, 0.02), skin);
  throat.position.set(0, 0.55, 0.112);
  throat.rotation.x = -0.25;
  torso.add(throat);
  for (const side of [-1, 1]) {
    const lapel = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.11, 0.018), shirt);
    lapel.position.set(side * 0.05, 0.585, 0.105);
    lapel.rotation.set(-0.35, 0, side * 0.45);
    torso.add(lapel);
  }
  const placket = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.4, 0.01), material('#26262a', 0.6));
  placket.position.set(0, 0.29, 0.104);
  torso.add(placket);

  const head = new THREE.Group();
  head.position.y = 0.62;
  torso.add(head);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.06, 0.12, 10), skin);
  neck.position.y = 0.03;
  head.add(neck);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.118, 20, 14), skin);
  skull.scale.set(0.9, 1.06, 0.98);
  skull.position.y = 0.205;
  skull.castShadow = shadows;
  head.add(skull);
  // A strong jaw and chin.
  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.098, 16, 10), skin);
  jaw.scale.set(0.96, 0.72, 0.94);
  jaw.position.set(0, 0.135, 0.012);
  head.add(jaw);
  for (const side of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), skin);
    ear.scale.set(0.45, 1, 0.75);
    ear.position.set(side * 0.108, 0.2, -0.005);
    head.add(ear);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.013, 8, 6), dark);
    eye.position.set(side * 0.041, 0.212, 0.104);
    head.add(eye);
    const browMesh = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.015, 0.016), brow);
    browMesh.position.set(side * 0.043, 0.24, 0.108);
    browMesh.rotation.z = side * -0.12;
    head.add(browMesh);
  }
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.019, 0.055, 6), skin);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, 0.19, 0.118);
  head.add(nose);
  // Messy dark-brown hair: a cap and loose tufts.
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.127, 18, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), hair);
  cap.scale.set(0.95, 1.05, 1.04);
  cap.position.set(0, 0.226, -0.012);
  head.add(cap);
  const tuft = new THREE.ConeGeometry(0.042, 0.11, 5);
  const tufts: [number, number, number, number, number][] = [
    [0, 0.335, 0.06, -0.9, 0], [-0.05, 0.33, 0.04, -0.7, 0.5], [0.05, 0.33, 0.045, -0.8, -0.5], [-0.07, 0.31, -0.02, -0.2, 0.9],
    [0.07, 0.315, -0.01, -0.3, -0.8], [0, 0.34, -0.03, 0.2, 0.2], [-0.03, 0.3, -0.08, 0.7, 0.4], [0.035, 0.3, -0.085, 0.8, -0.3],
    [0.02, 0.33, 0.085, -1.3, -0.2],
  ];
  for (const [x, y, z, rx, rz] of tufts) {
    const piece = new THREE.Mesh(tuft, hair);
    piece.position.set(x, y, z);
    piece.rotation.set(rx, 0, rz);
    head.add(piece);
  }
  for (const side of [-1, 1]) {
    const burn = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.06, 0.03), hair);
    burn.position.set(side * 0.104, 0.205, 0.035);
    head.add(burn);
  }

  // Arms: black sleeve rolled to the elbow, then the forearm.
  const makeArm = (side: 1 | -1) => {
    const arm = pivotWith(new THREE.Mesh(new THREE.CapsuleGeometry(0.056, 0.22, 4, 10), shirt), -0.15, shadows);
    arm.position.set(0.225 * side, 0.51, 0);
    torso.add(arm);
    const fore = new THREE.Group();
    fore.position.y = -0.3;
    arm.add(fore);
    const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.064, 0.06, 0.075, 10), shirt);
    cuff.position.y = -0.01;
    fore.add(cuff);
    const forearm = new THREE.Mesh(new THREE.CapsuleGeometry(0.044, 0.19, 4, 10), skin);
    forearm.position.y = -0.14;
    forearm.castShadow = shadows;
    fore.add(forearm);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), skin);
    hand.scale.set(0.8, 1.05, 0.62);
    hand.position.y = -0.285;
    fore.add(hand);
    return { arm, fore, hand };
  };
  const left = makeArm(-1);
  const right = makeArm(1);

  // The fountain pen, held like a pen, in the right hand.
  const pen = new THREE.Group();
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.0095, 0.008, 0.15, 10), material('#0b0b0c', 0.15, 0.4));
  pen.add(barrel);
  const clip = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.05, 0.004), gold);
  clip.position.set(0, 0.04, 0.011);
  pen.add(clip);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.0098, 0.0098, 0.008, 10), gold);
  band.position.y = -0.03;
  pen.add(band);
  const nib = new THREE.Mesh(new THREE.ConeGeometry(0.007, 0.03, 8), gold);
  nib.position.y = -0.09;
  nib.rotation.x = Math.PI;
  pen.add(nib);
  pen.position.set(-0.012, -0.29, 0.03);
  pen.rotation.set(-1.3, 0, 0.2);
  right.fore.add(pen);

  // A small hand flag in the left hand, held upright.
  const flag = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.0055, 0.0055, 0.46, 6), material('#e9e2d2', 0.6));
  pole.position.y = 0.17;
  flag.add(pole);
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.011, 8, 6), gold);
  tip.position.y = 0.405;
  flag.add(tip);
  const clothGeometry = new THREE.PlaneGeometry(0.24, 0.16, 10, 4);
  clothGeometry.translate(-0.12, 0, 0);
  const cloth = new THREE.Mesh(clothGeometry, new THREE.MeshStandardMaterial({ map: flagTexture(), side: THREE.DoubleSide, roughness: 0.85 }));
  cloth.position.y = 0.31;
  cloth.castShadow = shadows;
  flag.add(cloth);
  flag.position.set(0, -0.29, 0.02);
  flag.rotation.set(0.35, 0, 0.15);
  left.fore.add(flag);

  // Legs: slim black trousers and polished oxfords.
  const makeLeg = (side: 1 | -1) => {
    const leg = pivotWith(new THREE.Mesh(new THREE.CapsuleGeometry(0.074, 0.33, 4, 10), trousers), -0.22, shadows);
    leg.position.set(0.098 * side, -0.04, 0);
    hips.add(leg);
    const shin = pivotWith(new THREE.Mesh(new THREE.CapsuleGeometry(0.058, 0.36, 4, 10), trousers), -0.22, shadows);
    shin.position.y = -0.44;
    leg.add(shin);
    const foot = new THREE.Group();
    foot.position.y = -0.45;
    shin.add(foot);
    const sole = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.24), shoe);
    sole.position.set(0, -0.02, 0.05);
    sole.castShadow = shadows;
    foot.add(sole);
    const toe = new THREE.Mesh(new THREE.SphereGeometry(0.052, 10, 8), shoe);
    toe.scale.set(0.95, 0.62, 1.1);
    toe.position.set(0, -0.012, 0.15);
    foot.add(toe);
    return { leg, shin, foot };
  };
  const legL = makeLeg(-1);
  const legR = makeLeg(1);

  const rest = Float32Array.from(clothGeometry.attributes.position.array as Float32Array);
  return {
    root, body,
    parts: {
      hips, torso, head, chest,
      armL: left.arm, armR: right.arm, foreL: left.fore, foreR: right.fore,
      legL: legL.leg, legR: legR.leg, shinL: legL.shin, shinR: legR.shin, footL: legL.foot, footR: legR.foot,
    },
    flag: { cloth, rest },
    phase: 0, idle: 0, blend: 0, lean: 0, seated: false,
  };
}

const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

// speed in m/s (what the avatar actually moved), turn in rad/s.
export function animateHero(hero: Hero, dt: number, speed: number, turn: number, mode: HeroMode = 'move', reduced = false) {
  const p = hero.parts;
  hero.idle += dt;
  if (mode === 'seated' || hero.seated) {
    p.hips.position.y = 0.52;
    p.legL.rotation.x = p.legR.rotation.x = -Math.PI / 2;
    p.shinL.rotation.x = p.shinR.rotation.x = Math.PI / 2;
    p.footL.rotation.x = p.footR.rotation.x = 0;
    p.armL.rotation.set(-0.45, 0, -0.05);
    p.foreL.rotation.x = -0.7;
    p.armR.rotation.set(-0.55 + Math.sin(hero.idle * 1.6) * 0.06, 0, 0.05);
    p.foreR.rotation.x = -1.1;
    p.torso.rotation.set(0.04, 0, 0);
    p.head.rotation.set(0, Math.sin(hero.idle * 0.5) * 0.15, 0);
    hero.body.rotation.z = 0;
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
    torsoX: 0.02 + breath * 0.008, twist: 0.04,
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
  p.armL.rotation.z = mix(-0.08, -0.12, b);
  p.armR.rotation.z = mix(-0.32, 0.12, b);
  p.foreL.rotation.x = mix(idle.foreL, gait.foreL, b);
  p.foreR.rotation.x = mix(idle.foreR, gait.foreR, b);
  p.hips.position.y = mix(idle.hipY, gait.hipY, b);
  p.hips.position.x = (1 - b) * (reduced ? 0 : Math.sin(hero.idle * 0.45) * 0.012);
  p.hips.rotation.y = -mix(0, gait.twist, b) * 0.7;
  p.torso.rotation.x = mix(idle.torsoX, gait.torsoX, b);
  p.torso.rotation.y = mix(idle.twist, gait.twist, b);
  p.head.rotation.x = -p.torso.rotation.x * 0.6;
  p.head.rotation.y = -p.torso.rotation.y * 0.8 + (1 - b) * (talking ? gesture * 0.08 : Math.sin(hero.idle * 0.35) * 0.12);
  p.chest.scale.y = 1 + (1 - b) * breath * 0.012;

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
  const strength = reduced ? 0.004 : 0.012 + Math.min(1, speed / RUN_SPEED) * 0.03;
  const time = hero.idle * (4 + speed);
  for (let i = 0; i < position.count; i++) {
    const x = rest[i * 3];
    const u = -x / 0.24;
    position.setZ(i, Math.sin(time - u * 5) * strength * u);
  }
  position.needsUpdate = true;
}
