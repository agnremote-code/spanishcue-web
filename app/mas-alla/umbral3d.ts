// Más allá · El Umbral: where the soul arrives. A black mirror under a sky of
// stars and nebulae, so still that every light doubles. On the left a gate of
// white light with a staircase that climbs into the sky (the Cielo); on the
// right a crack in the ground that breathes fire, with steps that go down
// (the Infierno). In the middle, an hourglass taller than a house, its sand
// falling upwards: where the class ends, once a world has been walked.
import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { box, canvas, cylinder, random, type Light } from '../mundo-3d/kit3d';
import { carved, finishPlace, fire, particles, populate, skyDome, veinTexture, type Place3D } from './common3d';
import { softGlowTexture } from './figures3d';

export function buildUmbral({ low, shadows }: { low: boolean; shadows: boolean }): Place3D {
  const group = new THREE.Group();
  const r = random(77);
  const anims: ((t: number, dt: number) => void)[] = [];

  group.add(skyDome([[0, '#020208'], [0.35, '#0a0a1e'], [0.5, '#1a1030'], [0.55, '#0c0a1a'], [1, '#020205']], 400, (ctx, w, h) => {
    // Nebulae: violet on the left, ember on the right.
    for (const [x, c] of [[w * 0.3, '120,90,255'], [w * 0.72, '255,90,40'], [w * 0.05, '90,140,255']] as [number, string][]) {
      for (let i = 0; i < 10; i++) { const gx = x + (r() - 0.5) * 200, gy = h * (0.25 + r() * 0.25); const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, 90 + r() * 120); g.addColorStop(0, `rgba(${c},${0.025 + r() * 0.04})`); g.addColorStop(1, `rgba(${c},0)`); ctx.fillStyle = g; ctx.fillRect(0, 0, w, h); }
    }
    for (let i = 0; i < 1400; i++) { ctx.fillStyle = `rgba(255,255,255,${0.2 + r() * 0.8})`; const s = r() < 0.04 ? 2 : 1; ctx.fillRect(r() * w, r() * h * 0.55, s, s); }
  }));

  // ---------------------------------------------------------------- the black mirror
  if (!low) {
    const mirror = new Reflector(new THREE.PlaneGeometry(220, 220), { textureWidth: 1024, textureHeight: 1024, color: new THREE.Color('#5a5a6a'), clipBias: 0.003 });
    mirror.rotation.x = -Math.PI / 2; mirror.position.y = -0.01;
    group.add(mirror);
  }
  const film = new THREE.Mesh(new THREE.PlaneGeometry(220, 220), new THREE.MeshStandardMaterial({ map: veinTexture('#06060c', 'rgba(140,120,255,.12)', 5, 512, 30, 1.5), color: '#ffffff', transparent: true, opacity: low ? 1 : 0.55, roughness: 0.2, metalness: 0.6 }));
  (film.material as THREE.MeshStandardMaterial).map!.repeat.set(10, 10);
  film.rotation.x = -Math.PI / 2; film.receiveShadow = true;
  group.add(film);
  // A ring of faint light that marks where the soul can walk.
  const edge = new THREE.Mesh(new THREE.RingGeometry(31, 31.3, 96), new THREE.MeshBasicMaterial({ color: '#8a80ff', transparent: true, opacity: 0.35, toneMapped: false }));
  edge.rotation.x = -Math.PI / 2; edge.position.set(0, 0.02, 3); group.add(edge);

  // ---------------------------------------------------------------- the gate of the Cielo
  const white = new THREE.MeshBasicMaterial({ color: '#fff8e6', toneMapped: false });
  const cielo = new THREE.Group();
  cielo.position.set(-10, 0, -8);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.12, 12, 64, Math.PI), white); ring.position.y = 3.2; cielo.add(ring);
  for (const x of [-2.6, 2.6]) cielo.add(cylinder(0.12, 0.14, 3.2, white, x, 1.6, 0, 10));
  const veil = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 5.8), new THREE.MeshBasicMaterial({ map: canvas(128, 256, ctx => { const g = ctx.createLinearGradient(0, 256, 0, 0); g.addColorStop(0, 'rgba(255,250,235,.9)'); g.addColorStop(1, 'rgba(255,250,235,.1)'); ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 256); }), transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, toneMapped: false }));
  veil.position.y = 2.9; cielo.add(veil);
  // The staircase that climbs behind the gate into the sky.
  const stepMat = new THREE.MeshStandardMaterial({ color: '#fff6e0', emissive: '#ffe8b0', emissiveIntensity: 0.6 });
  for (let k = 0; k < 40; k++) { const st = box(3.4 - k * 0.02, 0.12, 0.8, stepMat, 0, 0.3 + k * 0.55, -1.2 - k * 0.8, false); cielo.add(st); }
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(4, 6, 120, 32, 1, true), new THREE.MeshBasicMaterial({ map: canvas(16, 256, ctx => { const g = ctx.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, 'rgba(255,248,226,0)'); g.addColorStop(0.7, 'rgba(255,248,226,.13)'); g.addColorStop(1, 'rgba(255,248,226,.05)'); ctx.fillStyle = g; ctx.fillRect(0, 0, 16, 256); }), transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, toneMapped: false, fog: false }));
  shaft.position.set(0, 60, -30); cielo.add(shaft);
  const sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: softGlowTexture(), color: '#fff4d0', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, fog: false }));
  sun.scale.setScalar(22); sun.material.opacity = 0.7; sun.position.set(0, 24, -32); cielo.add(sun);
  const cieloLight = new THREE.PointLight('#fff1d0', 12, 24, 1.6); cieloLight.position.set(0, 3, 1); cielo.add(cieloLight);
  const cieloSign = carved('CIELO', { w: 4, h: 0.9, bg: 'rgba(0,0,0,0)', fg: '#fff3cf', glowColor: '#ffd27a' }); cieloSign.position.set(0, 6.6, 0); cielo.add(cieloSign);
  group.add(cielo);
  const golden = particles(low ? 80 : 200, { color: '#ffe8a8', size: 0.1, area: 10, height: [0, 9], rise: 0.6, sway: 0.4, opacity: 0.9 });
  golden.points.position.set(-10, 0, -10); group.add(golden.points);

  // ---------------------------------------------------------------- the crack of the Infierno
  const infierno = new THREE.Group();
  infierno.position.set(10, 0, -8);
  const iron = new THREE.MeshStandardMaterial({ color: '#2a2020', metalness: 0.8, roughness: 0.4 });
  for (const x of [-2.6, 2.6]) { infierno.add(box(0.7, 4.2, 0.7, iron, x, 2.1, 0, shadows)); const sp = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1.6, 6), iron); sp.position.set(x, 5, 0); infierno.add(sp); }
  infierno.add(box(6, 0.5, 0.6, iron, 0, 4.4, 0, false));
  const crackTex = canvas(512, 512, ctx => {
    ctx.fillStyle = 'rgba(0,0,0,0)'; ctx.clearRect(0, 0, 512, 512);
    const g = ctx.createRadialGradient(256, 256, 10, 256, 256, 250); g.addColorStop(0, 'rgba(255,220,120,1)'); g.addColorStop(0.3, 'rgba(255,90,20,.9)'); g.addColorStop(0.7, 'rgba(120,10,0,.5)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.moveTo(256, 10);
    for (let k = 0; k < 18; k++) { const a = (k / 18) * Math.PI * 2; const d = 120 + r() * 120; ctx.lineTo(256 + Math.sin(a) * d * 0.55, 256 - Math.cos(a) * d); }
    ctx.closePath(); ctx.fill();
  });
  const crack = new THREE.Mesh(new THREE.PlaneGeometry(6, 9), new THREE.MeshBasicMaterial({ map: crackTex, transparent: true, depthWrite: false, toneMapped: false }));
  crack.rotation.x = -Math.PI / 2; crack.position.set(0, 0.03, -3.6); infierno.add(crack);
  // Steps going down into the fire, seen through the crack.
  const darkStep = new THREE.MeshStandardMaterial({ color: '#1a0c0a', emissive: '#ff3a10', emissiveIntensity: 0.25 });
  for (let k = 0; k < 9; k++) infierno.add(box(2.4, 0.2, 0.7, darkStep, 0, -0.2 - k * 0.45, -1.2 - k * 0.7, false));
  const fires = [fire(infierno, -2.6, 4.8, 0, 1, 4), fire(infierno, 2.6, 4.8, 0, 1, 4), fire(infierno, 0, -0.2, -4, 2.2, 7)];
  const hellLight = new THREE.PointLight('#ff4a10', 14, 22, 1.6); hellLight.position.set(0, 2, -2); infierno.add(hellLight);
  const infSign = carved('INFIERNO', { w: 4.6, h: 0.9, bg: 'rgba(0,0,0,0)', fg: '#ff9a3a', glowColor: '#ff4a10' }); infSign.position.set(0, 6.6, 0); infierno.add(infSign);
  group.add(infierno);
  const embers = particles(low ? 80 : 220, { color: '#ff7a2a', size: 0.09, area: 10, height: [0, 12], rise: 1.6, sway: 1, opacity: 0.95 });
  embers.points.position.set(10, 0, -11); group.add(embers.points);
  anims.push(t => { hellLight.intensity = 13 + Math.sin(t * 7) * 3 + Math.sin(t * 17) * 2; for (const f of fires) f(t); });

  // ---------------------------------------------------------------- the hourglass
  const glass = new THREE.MeshPhysicalMaterial({ color: '#d8e4ff', transmission: low ? 0 : 0.9, transparent: true, opacity: low ? 0.35 : 1, roughness: 0.05, thickness: 0.2, ior: 1.4 });
  const frame = new THREE.MeshStandardMaterial({ color: '#c8a050', metalness: 1, roughness: 0.3 });
  const hg = new THREE.Group(); hg.position.set(0, 0, 2);
  hg.add(cylinder(1.4, 1.4, 0.3, frame, 0, 0.15, 0, 32));
  hg.add(cylinder(1.4, 1.4, 0.3, frame, 0, 6.45, 0, 32));
  for (let k = 0; k < 3; k++) { const a = (k / 3) * Math.PI * 2; hg.add(cylinder(0.08, 0.08, 6.3, frame, Math.sin(a) * 1.25, 3.3, Math.cos(a) * 1.25, 8)); }
  const top = new THREE.Mesh(new THREE.ConeGeometry(1.05, 2.9, 32, 1, true), glass); top.position.y = 4.85; hg.add(top);
  const bottom = new THREE.Mesh(new THREE.ConeGeometry(1.05, 2.9, 32, 1, true), glass); bottom.rotation.x = Math.PI; bottom.position.y = 1.75; hg.add(bottom);
  const sand = new THREE.MeshBasicMaterial({ color: '#ffd890', toneMapped: false });
  const pile = new THREE.Mesh(new THREE.ConeGeometry(0.7, 0.8, 24), sand); pile.position.y = 5.6; pile.rotation.x = Math.PI; hg.add(pile);
  const stream = cylinder(0.025, 0.025, 2.6, sand, 0, 4.4, 0, 6); hg.add(stream);
  const below = new THREE.Mesh(new THREE.ConeGeometry(0.9, 0.5, 24), sand); below.position.y = 0.55; hg.add(below);
  const hgGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: softGlowTexture(), color: '#c8b0ff', transparent: true, opacity: 0.28, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false })); hgGlow.scale.setScalar(9); hgGlow.position.y = 3.3; hg.add(hgGlow);
  group.add(hg);
  anims.push(t => { hg.rotation.y = t * 0.08; (stream.material as THREE.MeshBasicMaterial).opacity = 1; stream.scale.x = 1 + Math.sin(t * 20) * 0.2; });

  // Stars all round, close enough to drift.
  const stars = particles(low ? 200 : 500, { color: '#cfd8ff', size: 0.05, area: 70, height: [3, 30], rise: 0.05, sway: 0.15, opacity: 0.8 });
  group.add(stars.points);
  let px = 0, pz = 22;
  group.userData.follow = (x: number, z: number) => { px = x; pz = z; };
  anims.push((t, dt) => { golden.update(t, dt, 0, 0); embers.update(t, dt, 0, 0); stars.update(t, dt, px, pz); });

  const { talkers, walkers } = populate(group, 'umbral', true, false);
  const light: Light = {
    sky: ['#0a0a1e', '#1a1030'],
    fog: ['#05050c', 30, 120],
    sun: { color: '#b8b0ff', intensity: 0.5, at: [-14, 30, 10] },
    hemi: ['#6a6aa0', '#0a0a14', 0.6],
    exposure: 1.1,
  };
  return finishPlace('umbral', group, light, talkers, walkers, [], (t, dt) => { for (const a of anims) a(t, dt); });
}
