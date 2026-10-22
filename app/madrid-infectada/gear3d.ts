// Madrid infectada · what the SpanishCue mascot carries in the infected city
// and the effects around it. The mascot is the same one as in every 3D class
// (app/noche-abierta/hero3d); here he only puts on:
//  · an FFP2 mask with its ear straps,
//  · a compact dispersal pistol in the left hand (it fires a beam of cold
//    light that breaks the viral clouds apart),
//  · a rack of vaccine doses on his backpack, and a syringe that only shows
//    while he injects himself.
// The vaccination is a short, readable sequence (about 1.2 s): he reaches the
// rack, brings the syringe to his left arm, a «pssst», and a shield of light
// opens around him. It always works: nobody loses the class to a contagion.
// The viral clouds are soft, breathing clusters of sprites that drift around
// their nest, sometimes hunt the mascot, slide around walls and burst when the
// beam hits them; touching the mascot only makes the shield flash.
import * as THREE from 'three';
import type { Hero } from '../noche-abierta/hero3d';
import { canvas } from '../noche-abierta/build3d';
import type { Box } from '../noche-abierta/world3d.d.mts';

const RIGHT = -1;
const LEFT = 1;
const mat = (color: string, roughness = 0.6, metalness = 0) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
const neon = (color: string, intensity = 2) => new THREE.MeshStandardMaterial({ color: '#0b0f0c', emissive: color, emissiveIntensity: intensity, roughness: 0.4 });

export type Gear = {
  syringe: THREE.Group;
  liquid: THREE.MeshStandardMaterial;
  vials: THREE.Mesh[];
  muzzle: THREE.Mesh;
  muzzleMat: THREE.MeshStandardMaterial;
  shield: THREE.Mesh;
  shieldMat: THREE.MeshBasicMaterial;
  ring: THREE.Mesh;
  ringMat: THREE.MeshBasicMaterial;
};

/** Mask, pistol, doses and the hidden syringe, fixed to the mascot's joints. */
export function gearUp(hero: Hero): Gear {
  const p = hero.parts;
  // The mask: a curved FFP2 shell over nose and mouth, a fold line and two straps.
  const maskMat = mat('#e9f1ee', 0.85);
  const mask = new THREE.Mesh(new THREE.CylinderGeometry(0.122, 0.112, 0.092, 18, 2, true, -1.3, 2.6), maskMat);
  mask.material.side = THREE.DoubleSide;
  mask.position.set(0, 0.145, 0.006);
  mask.scale.set(1.0, 1, 1.08);
  p.head.add(mask);
  const fold = new THREE.Mesh(new THREE.TorusGeometry(0.124, 0.0022, 4, 20, 2.3), mat('#b9cbc5', 0.8));
  fold.rotation.set(Math.PI / 2, 0, Math.PI / 2 - 1.15 + Math.PI);
  fold.position.set(0, 0.147, 0.006);
  fold.scale.set(1, 1.08, 1);
  p.head.add(fold);
  for (const side of [LEFT, RIGHT]) {
    const strap = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.0026, 4, 10, Math.PI * 1.2), mat('#cfdcd8', 0.8));
    strap.position.set(side * 0.112, 0.17, -0.012);
    strap.rotation.set(0, Math.PI / 2, side > 0 ? 0.3 : 2.8);
    p.head.add(strap);
  }

  // The pistol: grip in the left fist, barrel along the forearm (pointing at
  // the ground while he walks, forward when he aims), a glowing cell and muzzle.
  const gun = new THREE.Group();
  gun.position.set(0, -0.3, 0.03);
  p.foreL.add(gun);
  const dark = mat('#20262b', 0.35, 0.6);
  const white = mat('#dfe6e8', 0.4, 0.2);
  const barrel = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.2, 0.06), white);
  barrel.position.set(0, -0.09, 0.03);
  gun.add(barrel);
  const shroud = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.03, 0.08, 10), dark);
  shroud.position.set(0, -0.2, 0.03);
  gun.add(shroud);
  const cell = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.07, 0.018), neon('#7dffd0', 1.6));
  cell.position.set(0, -0.06, 0.064);
  gun.add(cell);
  const grip = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.05, 0.07), dark);
  grip.position.set(0, 0.0, -0.01);
  gun.add(grip);
  const muzzleMat = neon('#9ffcff', 0.2);
  const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), muzzleMat);
  muzzle.position.set(0, -0.25, 0.03);
  gun.add(muzzle);

  // The doses: four vials in a rack across the back of the backpack.
  const vials: THREE.Mesh[] = [];
  const rack = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.035, 0.04), dark);
  rack.position.set(0, -0.02, -0.11);
  p.pack.add(rack);
  for (let i = 0; i < 4; i++) {
    const vial = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.075, 8), neon('#6dff9e', 1.2));
    vial.position.set(-0.06 + i * 0.04, 0.02, -0.118);
    p.pack.add(vial);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.014, 8), white);
    cap.position.set(-0.06 + i * 0.04, 0.062, -0.118);
    p.pack.add(cap);
    vials.push(vial);
  }

  // The syringe, held in the right fist; hidden until he needs it.
  const syringe = new THREE.Group();
  syringe.position.set(0, -0.07, 0.035);
  syringe.rotation.set(-1.2, 0, 0);
  syringe.visible = false;
  p.handR.add(syringe);
  const liquid = neon('#6dff9e', 1.4);
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.1, 10), new THREE.MeshStandardMaterial({ color: '#e8fff4', transparent: true, opacity: 0.45, roughness: 0.1 }));
  syringe.add(tube);
  const fill = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.08, 10), liquid);
  syringe.add(fill);
  const plunger = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.008, 10), white);
  plunger.position.y = 0.062;
  syringe.add(plunger);
  const needle = new THREE.Mesh(new THREE.CylinderGeometry(0.0016, 0.0016, 0.05, 4), mat('#d8dde0', 0.2, 0.9));
  needle.position.y = -0.075;
  syringe.add(needle);

  // The shield: a sphere of light and a ring on the ground.
  const shieldMat = new THREE.MeshBasicMaterial({ color: '#8fffd2', transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
  const shield = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 2), shieldMat);
  shield.position.y = 0.95;
  shield.visible = false;
  hero.root.add(shield);
  const ringMat = new THREE.MeshBasicMaterial({ color: '#8fffd2', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.7, 0.86, 40), ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.05;
  ring.visible = false;
  hero.root.add(ring);
  return { syringe, liquid, vials, muzzle, muzzleMat, shield, shieldMat, ring, ringMat };
}

const smooth = (a: number, b: number, t: number) => { const k = Math.min(1, Math.max(0, (t - a) / (b - a))); return k * k * (3 - 2 * k); };

export const VAX_SECONDS = 1.25;
/**
 * One frame of the vaccination at time t (0…VAX_SECONDS), applied after the
 * normal animation: reach the rack, syringe to the left arm, inject, shield.
 */
export function poseVaccination(hero: Hero, gear: Gear, t: number, dose: number): void {
  const p = hero.parts;
  const reach = smooth(0, 0.28, t) * (1 - smooth(0.28, 0.5, t));
  const toArm = smooth(0.3, 0.55, t) * (1 - smooth(0.95, 1.2, t));
  // Right arm: back to the pack, then across the chest to the left shoulder.
  p.armR.rotation.x += reach * 0.9 - toArm * 1.05;
  p.armR.rotation.z += reach * 0.5;
  p.armR.rotation.y += toArm * 1.1;
  p.foreR.rotation.x += -reach * 0.9 - toArm * 1.35;
  // Left arm opens a little to offer the shoulder; the head looks at it.
  p.armL.rotation.z += toArm * 0.45;
  p.head.rotation.y += toArm * 0.55;
  p.head.rotation.x += toArm * 0.25;
  gear.syringe.visible = t > 0.22 && t < 1.0;
  const pressed = smooth(0.6, 0.82, t);
  (gear.syringe.children[1] as THREE.Mesh).scale.y = 1 - pressed * 0.85;
  gear.syringe.children[2].position.y = 0.062 - pressed * 0.065;
  // One vial of the rack dims while its dose is used.
  gear.vials.forEach((v, i) => { v.visible = !(i === dose % gear.vials.length && t > 0.22 && t < 1.15); });
  showShield(gear, t < 0.8 ? 0 : (t - 0.8) / (VAX_SECONDS - 0.8));
}

/** The shield opening (k 0…1), or a short flash when a cloud touches him. */
export function showShield(gear: Gear, k: number) {
  const on = k > 0 && k < 1;
  gear.shield.visible = on; gear.ring.visible = on;
  if (!on) return;
  const s = 0.6 + k * 0.75;
  gear.shield.scale.set(s * 0.8, s * 1.15, s * 0.8);
  gear.shieldMat.opacity = 0.42 * (1 - k);
  gear.ring.scale.setScalar(0.6 + k * 1.8);
  gear.ringMat.opacity = 0.9 * (1 - k);
}

/** Aim the left arm (and the pistol) at a point; k blends the pose in. */
export function poseAim(hero: Hero, k: number) {
  const p = hero.parts;
  p.armL.rotation.x += (-1.45 - p.armL.rotation.x) * k;
  p.armL.rotation.z += (0.12 - p.armL.rotation.z) * k;
  p.armL.rotation.y += (-0.15 - p.armL.rotation.y) * k;
  p.foreL.rotation.x += (-0.08 - p.foreL.rotation.x) * k;
  p.torso.rotation.y += 0.25 * k;
}

// ------------------------------------------------------------------ clouds

let puffTexture: THREE.Texture | null = null;
function cloudTexture() {
  if (puffTexture) return puffTexture;
  puffTexture = canvas(128, 128, ctx => {
    const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 62);
    g.addColorStop(0, 'rgba(190,255,170,0.95)');
    g.addColorStop(0.35, 'rgba(120,200,110,0.65)');
    g.addColorStop(0.7, 'rgba(60,110,70,0.28)');
    g.addColorStop(1, 'rgba(30,60,40,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
    // Darker veins, so it reads as something alive and not as smoke.
    ctx.strokeStyle = 'rgba(30,70,40,0.55)'; ctx.lineWidth = 2;
    for (let i = 0; i < 7; i++) {
      ctx.beginPath();
      let x = 64, y = 64;
      ctx.moveTo(x, y);
      for (let k = 0; k < 6; k++) { x += Math.cos(i * 0.9 + k) * 8; y += Math.sin(i * 1.3 + k * 0.7) * 8; ctx.lineTo(x, y); }
      ctx.stroke();
    }
  });
  return puffTexture;
}

type Puff = { sprite: THREE.Sprite; ox: number; oy: number; oz: number; phase: number; size: number };
export type Cloud = {
  group: THREE.Group;
  puffs: Puff[];
  nest: { x: number; z: number; r: number };
  x: number; y: number; z: number;
  vx: number; vz: number;
  state: 'drift' | 'hunt' | 'burst' | 'gone';
  t: number;
  cool: number;
  respawn: number;
  bumped: number;
};

const SOLID_PAD = 0.9;
const blocked = (solids: Box[], x: number, z: number, y: number) => solids.some(b => (b.top == null || y < b.top + 0.5) && x > b.x0 - SOLID_PAD && x < b.x1 + SOLID_PAD && z > b.z0 - SOLID_PAD && z < b.z1 + SOLID_PAD);

export function createCloud(parent: THREE.Object3D, nest: { x: number; z: number; r: number }, seed: number, low: boolean): Cloud {
  const group = new THREE.Group();
  const puffs: Puff[] = [];
  const n = low ? 7 : 12;
  let s = seed;
  const rand = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (let i = 0; i < n; i++) {
    const material = new THREE.SpriteMaterial({ map: cloudTexture(), transparent: true, opacity: 0.55 + rand() * 0.3, depthWrite: false, color: i % 3 === 0 ? '#c9ffb0' : '#9fdc95' });
    const sprite = new THREE.Sprite(material);
    const size = 1.1 + rand() * 1.3;
    sprite.scale.setScalar(size);
    group.add(sprite);
    puffs.push({ sprite, ox: (rand() - 0.5) * 2.2, oy: (rand() - 0.5) * 1.2, oz: (rand() - 0.5) * 2.2, phase: rand() * 6.28, size });
  }
  parent.add(group);
  const cloud: Cloud = { group, puffs, nest, x: nest.x, y: 2.4, z: nest.z, vx: 0, vz: 0, state: 'drift', t: rand() * 10, cool: 4 + rand() * 6, respawn: 0, bumped: 0 };
  group.position.set(cloud.x, cloud.y, cloud.z);
  return cloud;
}

/**
 * Moves a cloud. It drifts around its nest; now and then it hunts the
 * mascot, slides along walls instead of crossing them and keeps a little
 * height. `calm` (a card is open, the zone is cleared) sends it home slowly.
 */
export function stepCloud(c: Cloud, dt: number, player: { x: number; z: number }, solids: Box[], calm: boolean) {
  c.t += dt;
  if (c.state === 'gone') {
    c.respawn -= dt;
    if (c.respawn <= 0 && !calm) { c.state = 'drift'; c.x = c.nest.x; c.z = c.nest.z; c.group.visible = true; c.cool = 6; for (const p of c.puffs) p.sprite.material.opacity = 0.7; }
    return;
  }
  if (c.state === 'burst') {
    const k = Math.min(1, c.t / 0.9);
    for (const p of c.puffs) {
      p.sprite.position.set(p.ox * (1 + k * 4), p.oy * (1 + k * 3) + k * 0.8, p.oz * (1 + k * 4));
      p.sprite.material.opacity = 0.7 * (1 - k);
      p.sprite.scale.setScalar(p.size * (1 + k * 0.8));
    }
    if (k >= 1) { c.state = 'gone'; c.group.visible = false; c.respawn = 26 + Math.random() * 16; }
    return;
  }
  const dx = player.x - c.x, dz = player.z - c.z, d = Math.hypot(dx, dz);
  c.cool -= dt;
  if (c.state === 'drift' && !calm && c.cool <= 0 && d < 16) { c.state = 'hunt'; c.t = 0; }
  if (c.state === 'hunt' && (calm || c.t > 9 || d > 22)) { c.state = 'drift'; c.cool = 8 + Math.random() * 8; }
  let ax: number, az: number, speed: number;
  if (c.state === 'hunt') {
    // Towards the mascot, weaving a little so it never moves in a straight line.
    const weave = Math.sin(c.t * 2.3) * 0.6;
    ax = dx / (d || 1) + (-dz / (d || 1)) * weave; az = dz / (d || 1) + (dx / (d || 1)) * weave;
    speed = 2.6;
  } else {
    const tx = c.nest.x + Math.cos(c.t * 0.21) * c.nest.r * 0.6, tz = c.nest.z + Math.sin(c.t * 0.17) * c.nest.r * 0.6;
    ax = tx - c.x; az = tz - c.z;
    const l = Math.hypot(ax, az) || 1; ax /= l; az /= l;
    speed = calm ? 0.8 : 1.1;
  }
  c.vx += (ax * speed - c.vx) * Math.min(1, dt * 1.6);
  c.vz += (az * speed - c.vz) * Math.min(1, dt * 1.6);
  // Walls: try the move, else slide along x or z, else turn away.
  let nx = c.x + c.vx * dt, nz = c.z + c.vz * dt;
  if (blocked(solids, nx, nz, c.y)) {
    if (!blocked(solids, nx, c.z, c.y)) nz = c.z;
    else if (!blocked(solids, c.x, nz, c.y)) nx = c.x;
    else { nx = c.x; nz = c.z; c.vx = -c.vx * 0.5; c.vz = -c.vz * 0.5; }
  }
  c.x = nx; c.z = nz;
  c.y += ((c.state === 'hunt' ? 1.7 : 2.6) + Math.sin(c.t * 0.9) * 0.3 - c.y) * Math.min(1, dt * 1.5);
  c.group.position.set(c.x, c.y, c.z);
  // Breathing: every puff circles its place and swells.
  for (const p of c.puffs) {
    const w = c.t * 0.8 + p.phase;
    p.sprite.position.set(p.ox + Math.sin(w) * 0.25, p.oy + Math.cos(w * 1.3) * 0.18, p.oz + Math.cos(w) * 0.25);
    p.sprite.scale.setScalar(p.size * (1 + Math.sin(w * 1.7) * 0.12 + (c.state === 'hunt' ? 0.15 : 0)));
  }
}

export function burstCloud(c: Cloud) {
  if (c.state === 'burst' || c.state === 'gone') return;
  c.state = 'burst'; c.t = 0;
}

/** Where the cloud is, for aiming and distances. */
export const cloudAt = (c: Cloud) => new THREE.Vector3(c.x, c.y, c.z);
export const cloudLive = (c: Cloud) => c.state === 'drift' || c.state === 'hunt';

// ------------------------------------------------------------------ the beam

export type Beam = { mesh: THREE.Mesh; material: THREE.MeshBasicMaterial; life: number };
export function createBeam(parent: THREE.Object3D): Beam {
  const material = new THREE.MeshBasicMaterial({ color: '#c8fff6', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.07, 1, 8, 1, true), material);
  mesh.visible = false;
  parent.add(mesh);
  return { mesh, material, life: 0 };
}
const up = new THREE.Vector3(0, 1, 0);
export function fireBeam(beam: Beam, from: THREE.Vector3, to: THREE.Vector3) {
  const dir = to.clone().sub(from);
  const len = dir.length();
  beam.mesh.position.copy(from).addScaledVector(dir, 0.5);
  beam.mesh.scale.set(1, len, 1);
  beam.mesh.quaternion.setFromUnitVectors(up, dir.normalize());
  beam.mesh.visible = true;
  beam.life = 0.32;
}
export function stepBeam(beam: Beam, dt: number) {
  if (beam.life <= 0) { beam.mesh.visible = false; return; }
  beam.life -= dt;
  beam.material.opacity = Math.max(0, beam.life / 0.32) * 0.95;
  beam.mesh.scale.x = beam.mesh.scale.z = 1 + (0.32 - beam.life) * 3;
}
