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
  heading: number; air: number; landing: number; lastGrounded: boolean; dispose: () => void;
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
  let disposed = false;
  return {
    root, hero, shadow, heading: 0, air: 0, landing: 0, lastGrounded: true,
    dispose() {
      if (disposed) return; disposed = true;
      root.traverse(o => { if (o instanceof THREE.Mesh) { o.geometry.dispose(); for (const m of Array.isArray(o.material) ? o.material : [o.material]) m.dispose(); } });
      shadow.geometry.dispose(); shadow.material.dispose(); map.dispose();
    },
  };
}

/** Highest walkable surface under (x, z) at or below y. */
export function surfaceBelow(x: number, y: number, z: number) {
  let top = Math.hypot(x, z) < 65 ? 0 : -Infinity;
  for (const p of PLATFORMS) if (p.y <= y + .05 && p.y > top && Math.hypot(x - p.x, z - p.z) <= p.r + .24) top = p.y;
  return top;
}

export function animateForestHero(h: ForestHero, dt: number, player: Player, speed: number, reduced = false, talking = false) {
  // Turn smoothly toward where the learner is moving instead of snapping.
  const before = h.heading;
  if (speed > .2) h.heading = wrap(h.heading + wrap(player.yaw - h.heading) * (1 - Math.exp(-TURN_RATE * dt)));
  const turn = dt > 0 ? wrap(h.heading - before) / dt : 0;
  h.root.position.set(player.x, player.y, player.z);
  h.hero.root.rotation.y = h.heading;
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
