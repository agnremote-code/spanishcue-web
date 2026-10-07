import * as THREE from 'three';
import { createHero, animateHero, type Hero } from '../noche-abierta/hero3d';
import { PLATFORMS, type Player } from './engine.mjs';

// The forest uses the same procedural SpanishCue mascot as La Noche Abierta:
// a real 3D figure with a distance-driven run cycle. The forest adds what a
// platformer needs: a smooth turn toward the movement, a readable jump pose,
// a landing squash and a contact shadow on the surface right below the feet,
// so the learner always sees where a jump will land.
export type ForestHero = {
  root: THREE.Group; hero: Hero; shadow: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
  /** A ring of air left behind by the second jump. */
  puff: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>; spin: number; doubleJumps: number;
  heading: number; air: number; landing: number; lastGrounded: boolean; dispose: () => void;
  /** After a bad fall: the pieces in world space, a few cartoon drops of blood and a small stain. */
  debris: THREE.Group; blood: THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>; splat: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
  broken: { t: number; floor: number; pieces: { obj: THREE.Object3D; parent: THREE.Object3D; pos: THREE.Vector3; quat: THREE.Quaternion; scale: THREE.Vector3; vel: THREE.Vector3; spin: THREE.Vector3 }[]; drops: THREE.Vector3[] } | null;
};
const TURN_RATE = 14;
const wrap = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

export function createForestHero(shadows = true): ForestHero {
  const root = new THREE.Group();
  const hero = createHero(shadows);
  root.add(hero.root);
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 64;
  const c = canvas.getContext('2d')!;
  const g = c.createRadialGradient(32, 32, 2, 32, 32, 31); g.addColorStop(0, 'rgba(10,20,12,.55)'); g.addColorStop(1, 'rgba(10,20,12,0)'); c.fillStyle = g; c.fillRect(0, 0, 64, 64);
  const map = new THREE.CanvasTexture(canvas);
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(.62, 24).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
  shadow.renderOrder = 2;
  const puff = new THREE.Mesh(new THREE.RingGeometry(.45, .62, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#fff3c4', transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
  const debris = new THREE.Group();
  const dropCount = 34, bloodGeo = new THREE.BufferGeometry(); bloodGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(dropCount * 3), 3));
  const blood = new THREE.Points(bloodGeo, new THREE.PointsMaterial({ color: '#b3121c', size: .11, transparent: true, opacity: 0, depthWrite: false }));
  blood.frustumCulled = false;
  const stain = document.createElement('canvas'); stain.width = stain.height = 64; const sc = stain.getContext('2d')!;
  sc.fillStyle = '#9e0f18'; for (const [x, y, r] of [[32, 32, 14], [20, 28, 7], [44, 36, 8], [30, 46, 6], [40, 20, 5], [16, 40, 4]]) { sc.beginPath(); sc.arc(x, y, r, 0, Math.PI * 2); sc.fill(); }
  const stainMap = new THREE.CanvasTexture(stain);
  const splat = new THREE.Mesh(new THREE.CircleGeometry(.55, 20).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: stainMap, transparent: true, opacity: 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3 }));
  let disposed = false;
  return {
    root, hero, shadow, puff, debris, blood, splat, broken: null, spin: 0, doubleJumps: 0, heading: 0, air: 0, landing: 0, lastGrounded: true,
    dispose() {
      if (disposed) return; disposed = true;
      root.traverse(o => { if (o instanceof THREE.Mesh) { o.geometry.dispose(); for (const m of Array.isArray(o.material) ? o.material : [o.material]) m.dispose(); } });
      shadow.geometry.dispose(); shadow.material.dispose(); map.dispose(); puff.geometry.dispose(); puff.material.dispose(); bloodGeo.dispose(); blood.material.dispose(); splat.geometry.dispose(); splat.material.dispose(); stainMap.dispose();
    },
  };
}

/** Highest walkable surface under (x, z) at or below y. */
export function surfaceBelow(x: number, y: number, z: number) {
  let top = Math.hypot(x, z) < 65 ? 0 : -Infinity;
  for (const p of PLATFORMS) if (p.y <= y + .05 && p.y > top && Math.hypot(x - p.x, z - p.z) <= p.r + .24) top = p.y;
  return top;
}

/** The hero falls apart: head, arms, legs, torso and backpack fly off, with a few drops of cartoon blood. */
export function breakForestHero(h: ForestHero, player: Player, reduced = false) {
  if (h.broken) return;
  const p = h.hero.parts, floor = Math.max(surfaceBelow(player.x, player.y + .1, player.z), player.y - 30);
  if (!h.debris.parent) h.root.parent?.add(h.debris);
  h.root.updateMatrixWorld(true);
  const pieces = [p.head, p.armL, p.armR, p.pack, p.legL, p.legR, p.torso].map(obj => {
    const parent = obj.parent!, pos = obj.position.clone(), quat = obj.quaternion.clone(), scale = obj.scale.clone();
    h.debris.attach(obj);
    const a = Math.random() * Math.PI * 2, out = reduced ? 0 : 1.6 + Math.random() * 2.2;
    return { obj, parent, pos, quat, scale, vel: new THREE.Vector3(Math.cos(a) * out, reduced ? 0 : 3 + Math.random() * 3, Math.sin(a) * out), spin: new THREE.Vector3((Math.random() - .5) * 12, (Math.random() - .5) * 12, (Math.random() - .5) * 12).multiplyScalar(reduced ? 0 : 1) };
  });
  const drops = Array.from({ length: 34 }, () => new THREE.Vector3((Math.random() - .5) * 3.2, 1.5 + Math.random() * 3.5, (Math.random() - .5) * 3.2));
  h.broken = { t: 0, floor: Number.isFinite(floor) ? floor : player.y, pieces, drops };
  h.blood.material.opacity = 1; h.blood.position.set(player.x, player.y + .9, player.z);
  h.splat.position.set(player.x, h.broken.floor + .03, player.z); h.splat.material.opacity = .85; h.splat.scale.setScalar(.6); h.splat.rotation.y = Math.random() * 6;
  h.shadow.visible = false;
}
/** Back in one piece on the last cap. */
export function reassembleForestHero(h: ForestHero) {
  if (!h.broken) return;
  for (const piece of [...h.broken.pieces].reverse()) { piece.parent.add(piece.obj); piece.obj.position.copy(piece.pos); piece.obj.quaternion.copy(piece.quat); piece.obj.scale.copy(piece.scale); }
  h.broken = null; h.blood.material.opacity = 0; h.hero.root.visible = true;
}
export function animateForestHero(h: ForestHero, dt: number, player: Player, speed: number, reduced = false, talking = false) {
  // The stain fades on its own, also after the hero is rebuilt.
  if (h.splat.material.opacity > 0) { h.splat.material.opacity = Math.max(0, h.splat.material.opacity - dt * .3); h.splat.scale.setScalar(Math.min(1.25, h.splat.scale.x + dt * 2)); }
  if (h.broken) {
    const b = h.broken; b.t += dt;
    for (const piece of b.pieces) {
      piece.vel.y -= 16 * dt; piece.obj.position.addScaledVector(piece.vel, dt);
      const world = piece.obj.getWorldPosition(new THREE.Vector3());
      if (world.y < b.floor + .12 && piece.vel.y < 0) { piece.obj.position.y += b.floor + .12 - world.y; piece.vel.y *= -.35; piece.vel.x *= .6; piece.vel.z *= .6; piece.spin.multiplyScalar(.6); }
      piece.obj.rotation.x += piece.spin.x * dt; piece.obj.rotation.y += piece.spin.y * dt; piece.obj.rotation.z += piece.spin.z * dt;
    }
    const pos = h.blood.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < b.drops.length; i++) { const v = b.drops[i]; const y = Math.max(b.floor - h.blood.position.y + .02, v.y * b.t - 8 * b.t * b.t); pos.setXYZ(i, v.x * b.t, y, v.z * b.t); }
    pos.needsUpdate = true; h.blood.material.opacity = Math.max(0, 1 - b.t / 1.8);
    // The rest of the body vanishes in a puff of spores once the pieces fly.
    h.hero.root.visible = b.t < .05;
    return;
  }
  // Turn smoothly toward where the learner is moving instead of snapping.
  const before = h.heading;
  if (speed > .2) h.heading = wrap(h.heading + wrap(player.yaw - h.heading) * (1 - Math.exp(-TURN_RATE * dt)));
  const turn = dt > 0 ? wrap(h.heading - before) / dt : 0;
  h.root.position.set(player.x, player.y, player.z);
  // Second jump: a quick twirl and a ring of air pushed down from the feet.
  if ((player.doubleJumps ?? 0) > h.doubleJumps) { h.doubleJumps = player.doubleJumps ?? 0; h.spin = reduced ? 0 : .42; h.puff.position.set(player.x, player.y + .1, player.z); h.puff.material.opacity = .9; h.puff.scale.setScalar(1); }
  h.spin = Math.max(0, h.spin - dt);
  const twirl = h.spin > 0 ? (1 - h.spin / .42) : 0;
  h.hero.root.rotation.y = h.heading + Math.PI * 2 * (1 - Math.pow(1 - twirl, 2)) * (h.spin > 0 ? 1 : 0);
  if (h.puff.material.opacity > 0) { h.puff.material.opacity = Math.max(0, h.puff.material.opacity - dt * 2.4); h.puff.scale.multiplyScalar(1 + dt * 3.2); }
  animateHero(h.hero, dt, player.grounded ? speed : speed * .3, turn, talking ? 'talk' : 'move', reduced);
  // Jump pose: knees tuck and arms rise while airborne, blended in and out.
  h.air += ((player.grounded ? 0 : 1) - h.air) * Math.min(1, dt * (player.grounded ? 14 : 9));
  const p = h.hero.parts, a = h.air, rising = player.vy > 0 ? 1 : 0;
  if (a > .01) {
    p.legL.rotation.x += (-.95 * rising - .35 - p.legL.rotation.x) * a;
    p.legR.rotation.x += (-.25 - .5 * rising - p.legR.rotation.x) * a;
    p.shinL.rotation.x += (1.35 - p.shinL.rotation.x) * a;
    p.shinR.rotation.x += (.6 + .5 * rising - p.shinR.rotation.x) * a;
    p.armL.rotation.x += (-1.9 - p.armL.rotation.x) * a * .8;
    p.armR.rotation.x += (-1.6 - p.armR.rotation.x) * a * .8;
    p.armL.rotation.z += (.5 - p.armL.rotation.z) * a; p.armR.rotation.z += (-.5 - p.armR.rotation.z) * a;
    p.torso.rotation.x += (.18 - p.torso.rotation.x) * a;
  }
  // Landing squash.
  if (player.grounded && !h.lastGrounded) h.landing = .16;
  h.lastGrounded = player.grounded; h.landing = Math.max(0, h.landing - dt);
  h.hero.body.scale.set(1 + h.landing * .5, 1 - h.landing * .9, 1 + h.landing * .5);
  // Contact shadow on the landing surface: smaller and fainter the higher you are.
  const ground = surfaceBelow(player.x, player.y, player.z);
  const height = Number.isFinite(ground) ? player.y - ground : 99;
  h.shadow.visible = height < 30;
  h.shadow.position.set(player.x, (Number.isFinite(ground) ? ground : 0) + .05, player.z);
  const k = Math.max(.35, 1 - height / 14);
  h.shadow.scale.setScalar(k);
  h.shadow.material.opacity = Math.max(.25, k);
}
