// Más allá · El Infierno. A cavern without a ceiling under a red sky full of
// smoke, black glass ground split by cracks that glow, spires of rock, rivers
// of lava and embers that never land. Past the iron gate («AQUÍ SE ABANDONA
// TODA ESPERANZA») the Antesala: Mara's window with its endless queue and
// its number display, and the ring of mirrors where Valeria sees herself as
// others saw her; the Juicio: the bench of the tribunal of small lies, and
// the river of fire where Flegias rows; the Abismo: cages with the door open
// and, at the end of everything, the throne of Lucero between braziers.
import * as THREE from 'three';
import { box, canvas, cylinder, random, solid, type Light } from '../mundo-3d/kit3d';
import { carved, crustTextures, finishPlace, fire, lavaMaterial, particles, populate, skyDome, veinTexture, type Place3D } from './common3d';
import { softGlowTexture } from './figures3d';
import { layoutOf } from './layout.mjs';

export function buildInfierno({ low, shadows }: { low: boolean; shadows: boolean }): Place3D {
  const group = new THREE.Group();
  const r = random(666);
  const anims: ((t: number, dt: number) => void)[] = [];
  const L = layoutOf('infierno')!;

  // ---------------------------------------------------------------- sky of smoke
  group.add(skyDome([[0, '#060203'], [0.3, '#1a0505'], [0.46, '#5a0e06'], [0.53, '#b8360c'], [0.58, '#3a0a06'], [1, '#0a0303']], 430, (ctx, w, h) => {
    for (let i = 0; i < 90; i++) { ctx.fillStyle = `rgba(20,6,6,${0.25 + r() * 0.4})`; ctx.beginPath(); ctx.ellipse(r() * w, h * (0.2 + r() * 0.36), 60 + r() * 200, 14 + r() * 40, 0, 0, Math.PI * 2); ctx.fill(); }
    // The far volcanoes, glowing at the horizon.
    ctx.fillStyle = '#120404';
    for (let i = 0; i < 9; i++) { const x = r() * w, bw = 80 + r() * 160, bh = 30 + r() * 70; ctx.beginPath(); ctx.moveTo(x - bw, h * 0.54); ctx.lineTo(x - bw * 0.15, h * 0.54 - bh); ctx.lineTo(x + bw * 0.15, h * 0.54 - bh); ctx.lineTo(x + bw, h * 0.54); ctx.fill(); const g = ctx.createRadialGradient(x, h * 0.54 - bh, 0, x, h * 0.54 - bh, 40); g.addColorStop(0, 'rgba(255,140,40,.9)'); g.addColorStop(1, 'rgba(255,60,0,0)'); ctx.fillStyle = g; ctx.fillRect(x - 40, h * 0.54 - bh - 40, 80, 80); ctx.fillStyle = '#120404'; }
  }));

  // ---------------------------------------------------------------- ground of black glass and cracks
  const crust = crustTextures(31);
  crust.map.repeat.set(6, 6); crust.glow.repeat.set(6, 6);
  const groundMat = new THREE.MeshStandardMaterial({ map: crust.map, emissiveMap: crust.glow, emissive: '#ffffff', emissiveIntensity: 0.6, roughness: 0.82, metalness: 0.05 });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(240, 240), groundMat);
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; group.add(ground);
  anims.push(t => { groundMat.emissiveIntensity = 0.5 + Math.sin(t * 0.9) * 0.1; });

  // A road of worn flagstones from the gate down to the throne.
  const flag = veinTexture('#2a1e1a', 'rgba(0,0,0,.6)', 41, 256, 30, 3); flag.repeat.set(1, 18);
  const road = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.08, 104), new THREE.MeshStandardMaterial({ map: flag, roughness: 0.9 }));
  road.position.set(0, 0.04, 8); group.add(road);

  // ---------------------------------------------------------------- lava
  const lava = lavaMaterial();
  for (const b of L.solids.filter((s: { kind?: string }) => s.kind === 'lava')) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(b.x1 - b.x0, b.z1 - b.z0, 1, 1), lava);
    m.rotation.x = -Math.PI / 2; m.position.set((b.x0 + b.x1) / 2, 0.06, (b.z0 + b.z1) / 2); group.add(m);
    // The banks: a glowing lip of rock.
    for (const z of [b.z0, b.z1]) { const lip = box(b.x1 - b.x0, 0.35, 0.5, solid('#1a0c0a', 0.6), (b.x0 + b.x1) / 2, 0.17, z, false); group.add(lip); }
  }
  // Pools of lava beyond the bounds, so the world never ends in a wall.
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + r() * 0.3, d = 70 + r() * 30;
    const m = new THREE.Mesh(new THREE.CircleGeometry(10 + r() * 14, 24), lava);
    m.rotation.x = -Math.PI / 2; m.position.set(Math.sin(a) * d, 0.05, Math.cos(a) * d); group.add(m);
  }
  anims.push(t => { lava.uniforms.uTime.value = t; });
  // The stone bridge over the gap.
  const stone = solid('#2e2422', 0.9);
  group.add(box(4.4, 0.4, 6.8, stone, -2, 0.2, -9.5, shadows));
  for (const x of [-4.1, 0.1]) for (let k = 0; k < 4; k++) group.add(box(0.3, 0.9 + (k % 2) * 0.3, 0.3, stone, x, 0.6, -12.2 + k * 1.8, false));

  // ---------------------------------------------------------------- spires and fire pits
  const basalt = new THREE.MeshStandardMaterial({ color: '#1c1312', roughness: 0.75, metalness: 0.1, emissive: '#3a0a04', emissiveIntensity: 0.4, flatShading: true });
  for (const b of L.solids.filter((s: { x0: number; x1: number }) => Math.abs(s.x1 - s.x0 - 2.8) < 0.01)) {
    const cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2, h = 9 + r() * 12;
    const sp = new THREE.Mesh(new THREE.ConeGeometry(1.9, h, 6, 4), basalt);
    sp.position.set(cx, h / 2, cz); sp.rotation.y = r() * 3; sp.castShadow = shadows; group.add(sp);
    const sp2 = new THREE.Mesh(new THREE.ConeGeometry(1, h * 0.6, 5, 2), basalt); sp2.position.set(cx + 1.2, h * 0.3, cz - 0.6); sp2.rotation.z = 0.2; group.add(sp2);
  }
  // Distant spires all round the world.
  const farSpire = new THREE.InstancedMesh(new THREE.ConeGeometry(3, 1, 6), basalt, low ? 40 : 90);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), s = new THREE.Vector3();
  for (let i = 0; i < farSpire.count; i++) {
    const a = r() * Math.PI * 2, d = 66 + r() * 80, h = 14 + r() * 50;
    v.set(Math.sin(a) * d, h / 2, Math.cos(a) * d); s.set(1 + r() * 2, h, 1 + r() * 2); q.setFromEuler(new THREE.Euler(0, r() * 3, (r() - 0.5) * 0.3));
    farSpire.setMatrixAt(i, m4.compose(v, q, s));
  }
  group.add(farSpire);
  const fires: ((t: number) => void)[] = [];
  const iron = new THREE.MeshStandardMaterial({ color: '#2a2422', roughness: 0.45, metalness: 0.85 });
  for (const [x, z] of [[-8, 40], [8, 40]] as [number, number][]) {
    group.add(cylinder(1, 1.2, 1, iron, x, 0.5, z, 16));
    fires.push(fire(group, x, 0.9, z, 1.6, 6));
  }

  // ---------------------------------------------------------------- the iron gate
  for (const side of [-1, 1]) {
    const px = side * 5.75;
    group.add(box(2.5, 18, 2.5, iron, px, 9, 37.25, shadows));
    for (let k = 0; k < 4; k++) { const spike = new THREE.Mesh(new THREE.ConeGeometry(0.3, 2.2, 6), iron); spike.position.set(px + (k % 2 ? 0.7 : -0.7), 19, 37.25 + (k < 2 ? 0.7 : -0.7)); group.add(spike); }
    fires.push(fire(group, px, 18.4, 37.25, 1.3, 5));
    // The leaves of the gate, thrown open and bent.
    const leaf = new THREE.Group();
    for (let i = 0; i < 8; i++) { leaf.add(cylinder(0.08, 0.08, 12, iron, 0.4 + i * 0.5, 6, 0, 6)); const spike = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.6, 5), iron); spike.position.set(0.4 + i * 0.5, 12.3, 0); leaf.add(spike); }
    for (const y of [1, 6, 11]) leaf.add(box(4.2, 0.18, 0.18, iron, 2.1, y, 0, false));
    leaf.position.set(side * 4.4, 0, 37.25); leaf.rotation.y = side > 0 ? Math.PI - 1.25 : 1.25;
    group.add(leaf);
  }
  group.add(box(14, 1.4, 1.2, iron, 0, 16.4, 37.25, false));
  const gateSign = carved('AQUÍ SE ABANDONA TODA ESPERANZA', { w: 12, h: 1.1, bg: '#150605', fg: '#ff9a3a', glowColor: '#ff4a10' });
  gateSign.position.set(0, 16.4, 37.9); group.add(gateSign);
  const gateBack = carved('EL INFIERNO', { w: 8, h: 1.1, bg: '#150605', fg: '#ff9a3a', glowColor: '#ff4a10' });
  gateBack.position.set(0, 16.4, 36.6); gateBack.rotation.y = Math.PI; group.add(gateBack);

  // ---------------------------------------------------------------- the Antesala: Mara's window
  const office = solid('#3a2c28', 0.7);
  group.add(box(0.6, 1.1, 6, solid('#4a3226', 0.6), 21.05, 0.55, 36, shadows));
  group.add(box(0.6, 4.6, 10, office, 23.3, 2.3, 36, shadows));
  group.add(box(4.6, 0.3, 10, office, 21.2, 4.6, 36, false));
  const counterSign = carved('VENTANILLA 6 · ATENCIÓN AL CONDENADO', { w: 5.6, h: 0.7, bg: '#6a5a42', fg: '#120a06', font: '700 52px "Helvetica Neue", Arial' });
  counterSign.position.set(20.8, 4.1, 36); counterSign.rotation.y = -Math.PI / 2; group.add(counterSign);
  // The number display: «Atendiendo al 000.001 · Su número: 9.999.999.999».
  const numbers = canvas(512, 128, ctx => { ctx.fillStyle = '#0b0303'; ctx.fillRect(0, 0, 512, 128); ctx.fillStyle = '#ff3a1a'; ctx.font = '700 40px ui-monospace, monospace'; ctx.textAlign = 'center'; ctx.fillText('ATENDIENDO: 000.001', 256, 52); ctx.font = '700 26px ui-monospace, monospace'; ctx.fillStyle = '#ffb040'; ctx.fillText('SU NÚMERO: 9.999.999.999', 256, 100); });
  const display = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.65), new THREE.MeshBasicMaterial({ map: numbers, toneMapped: false }));
  display.position.set(18, 3.6, 30); group.add(display);
  group.add(cylinder(0.05, 0.05, 3.3, iron, 18, 1.65, 30.05, 6));
  // Filing cabinets and papers falling for ever.
  for (let k = 0; k < 4; k++) group.add(box(0.9, 2 + (k % 2) * 0.5, 0.7, solid('#5a5048', 0.5, 0.4), 22.6, 1.1, 32 + k * 1.1, false));
  const paperMat = new THREE.MeshBasicMaterial({ color: '#e8dcc0', side: THREE.DoubleSide });
  const papers: { m: THREE.Mesh; s: number }[] = [];
  for (let i = 0; i < (low ? 16 : 40); i++) { const p = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.4), paperMat); group.add(p); papers.push({ m: p, s: r() * 20 }); }
  anims.push(t => papers.forEach((p, i) => { const k = (t * 0.35 + p.s) % 9; p.m.position.set(17 + Math.sin(p.s * 3) * 5 + Math.sin(t + i) * 0.6, 9 - k, 33 + Math.cos(p.s * 2) * 6); p.m.rotation.set(t * 1.3 + i, t * 0.7 + i, 0); }));

  // ---------------------------------------------------------------- the ring of mirrors (Valeria)
  const mirrorTex = canvas(256, 512, ctx => {
    const g = ctx.createLinearGradient(0, 0, 256, 512); g.addColorStop(0, '#3a2f36'); g.addColorStop(0.5, '#8a7a84'); g.addColorStop(1, '#2a2026'); ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 512);
    // A distorted silhouette in each mirror.
    ctx.fillStyle = 'rgba(20,10,14,.55)'; ctx.beginPath(); ctx.ellipse(128, 150, 40 + r() * 30, 52, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(128, 340, 70 + r() * 40, 150, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = 2; for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.moveTo(r() * 256, r() * 512); ctx.lineTo(r() * 256, r() * 512); ctx.stroke(); }
  });
  const mirrorMat = new THREE.MeshStandardMaterial({ map: mirrorTex, roughness: 0.08, metalness: 0.9, emissive: '#3a1a22', emissiveIntensity: 0.6 });
  const frameMat = new THREE.MeshStandardMaterial({ color: '#6a4a1e', metalness: 0.9, roughness: 0.35 });
  for (let i = 0; i < 10; i++) {
    if (i === 2 || i === 3) continue;
    const a = (i / 10) * Math.PI * 2, x = -24.6 + Math.sin(a) * 5, z = 30 + Math.cos(a) * 5;
    const g = new THREE.Group();
    g.add(box(1.6, 3.6, 0.12, frameMat, 0, 1.8, 0, false));
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(1.35, 3.3), mirrorMat); glass.position.set(0, 1.8, 0.07); g.add(glass);
    g.position.set(x, 0, z); g.rotation.y = a + Math.PI; group.add(g);
  }
  const vanity = new THREE.PointLight('#ff6a8a', 6, 12, 2); vanity.position.set(-24.6, 3.5, 30); group.add(vanity);

  // ---------------------------------------------------------------- the Juicio: the bench (Asmodeo)
  const wood = solid('#2a1410', 0.55);
  group.add(box(2, 1.4, 9, wood, 26.4, 0.7, 4, shadows));
  group.add(box(2.4, 3.6, 3, wood, 27.8, 1.8, 4, shadows));
  const banner = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 6), new THREE.MeshStandardMaterial({ color: '#6a0a0a', side: THREE.DoubleSide, roughness: 0.9 }));
  banner.position.set(29.2, 6, 4); banner.rotation.y = -Math.PI / 2; group.add(banner);
  // The scale of justice, tipped for ever.
  const scale = new THREE.Group();
  scale.add(cylinder(0.06, 0.06, 2.4, frameMat, 0, 1.2, 0, 6));
  const beam = box(2.4, 0.08, 0.08, frameMat, 0, 2.4, 0, false); scale.add(beam);
  for (const sx of [-1.1, 1.1]) { const pan = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.3, 0.06, 16), frameMat); pan.position.set(sx, 1.6, 0); scale.add(pan); }
  scale.position.set(26.4, 1.4, 0.6); scale.rotation.z = 0.2; group.add(scale);
  // Mountains of files.
  for (let k = 0; k < 12; k++) group.add(box(0.5, 0.25 + r() * 0.6, 0.7, solid('#d8c9a0', 0.9), 26 + (k % 2) * 0.6 - 0.3, 1.5 + Math.floor(k / 2) * 0.12, 6.4 + (k % 3) * 0.4, false));

  // ---------------------------------------------------------------- the river of fire and the boat (Flegias)
  const boat = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.6, 5, 10, 1, true, 0, Math.PI), solid('#1a1010', 0.6)); hull.rotation.z = Math.PI / 2; hull.rotation.y = Math.PI / 2; boat.add(hull);
  const lantern = new THREE.PointLight('#ffb04a', 5, 10, 2); lantern.position.set(2, 1.5, 0); boat.add(lantern);
  boat.add(cylinder(0.04, 0.04, 1.6, iron, 2, 0.8, 0, 6));
  const glowBall = new THREE.Sprite(new THREE.SpriteMaterial({ map: softGlowTexture(), color: '#ffb04a', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false })); glowBall.scale.setScalar(1.2); glowBall.position.set(2, 1.6, 0); boat.add(glowBall);
  boat.position.set(-22, 0.3, -9.6); group.add(boat);
  anims.push(t => { boat.position.y = 0.3 + Math.sin(t * 1.4) * 0.06; boat.rotation.z = Math.sin(t * 0.9) * 0.04; });
  // The dock.
  group.add(box(3, 0.2, 1.2, solid('#2a1a12', 0.8), -22, 0.1, -6.4, false));

  // ---------------------------------------------------------------- the Abismo: cages and chains
  const cageMat = new THREE.MeshStandardMaterial({ color: '#3a3230', metalness: 0.9, roughness: 0.4 });
  for (const [cx, cz, open] of [[20, -28.6, true], [26, -31, false], [14, -31, false], [23, -36, false]] as [number, number, boolean][]) {
    for (let i = 0; i < 10; i++) {
      if (open && i === 0) continue;
      const a = (i / 10) * Math.PI * 2;
      group.add(cylinder(0.05, 0.05, 3, cageMat, cx + Math.sin(a) * 1.3, 1.5, cz + Math.cos(a) * 1.3, 6));
    }
    const top = new THREE.Mesh(new THREE.ConeGeometry(1.5, 1, 10, 1, true), cageMat); top.position.set(cx, 3.5, cz); group.add(top);
    group.add(new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.06, 6, 24), cageMat).translateX(cx).translateY(0.08).translateZ(cz).rotateX(Math.PI / 2));
    // The chain the cage hangs from, up into the smoke.
    group.add(cylinder(0.05, 0.05, 30, iron, cx, 18.5, cz, 6));
    if (open) {
      // The open door, swung out towards the circle.
      const door = new THREE.Group();
      for (let k = 0; k < 2; k++) door.add(cylinder(0.05, 0.05, 3, cageMat, 0.4 * k, 1.5, 0, 6));
      door.position.set(cx + 0.6, 0, cz + 1.4); door.rotation.y = -0.9; group.add(door);
    }
  }
  // Hanging chains everywhere above the Abismo.
  for (let i = 0; i < (low ? 12 : 30); i++) group.add(cylinder(0.04, 0.04, 14 + r() * 12, iron, -40 + r() * 80, 22, -20 - r() * 30, 5));

  // ---------------------------------------------------------------- the throne (Lucero)
  for (let k = 0; k < 3; k++) group.add(box(9 - k * 2, 0.3, 6 - k * 1.2, stone, 0, 0.15 + k * 0.3, -44.6 + k * 0.3, false));
  const throne = new THREE.Group();
  throne.add(box(2.6, 1.1, 2.1, iron, 0, 0.55, 0, shadows));
  throne.add(box(2.6, 5.6, 0.4, iron, 0, 3.2, -0.9, shadows));
  for (let k = 0; k < 7; k++) { const spike = new THREE.Mesh(new THREE.ConeGeometry(0.16, 1.6 + (3 - Math.abs(k - 3)) * 0.4, 6), iron); spike.position.set(-1.2 + k * 0.4, 6.6 + (3 - Math.abs(k - 3)) * 0.2, -0.9); throne.add(spike); }
  const seatGlow = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 4.8), new THREE.MeshBasicMaterial({ map: softGlowTexture() ?? undefined, color: '#ff3a10', transparent: true, opacity: 0.45, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
  seatGlow.position.set(0, 3.4, -0.68); throne.add(seatGlow);
  throne.position.set(0, 0.9, -44.35); group.add(throne);
  for (const x of [-4, 4]) { group.add(cylinder(0.5, 0.8, 2.4, iron, x, 1.2, -42.5, 10)); fires.push(fire(group, x, 2.4, -42.5, 1.4, 6)); }
  const throneLight = new THREE.PointLight('#ff5a20', 14, 22, 2); throneLight.position.set(0, 4, -40); group.add(throneLight);
  for (const x of [-7, 7]) { const b = new THREE.Mesh(new THREE.PlaneGeometry(2, 9), new THREE.MeshStandardMaterial({ color: '#5a0808', side: THREE.DoubleSide, roughness: 0.9 })); b.position.set(x, 6, -46.5); group.add(b); }

  // ---------------------------------------------------------------- the way back
  const portal = new THREE.Mesh(new THREE.TorusGeometry(2, 0.12, 10, 48), new THREE.MeshBasicMaterial({ color: '#ffd8b0', toneMapped: false }));
  portal.position.set(0, 2.2, 58.5); group.add(portal);
  const backSign = carved('AL UMBRAL', { w: 3, h: 0.6, bg: 'rgba(0,0,0,0)', fg: '#ffb070' }); backSign.position.set(0, 4.7, 58.4); backSign.rotation.y = Math.PI; group.add(backSign);

  // ---------------------------------------------------------------- embers and ash
  const embers = particles(low ? 220 : 600, { color: '#ff8a2a', size: 0.16, area: 60, height: [0, 18], rise: 1.4, sway: 0.9, opacity: 0.95 });
  const ash = particles(low ? 120 : 320, { color: '#5a5050', size: 0.2, area: 60, height: [0, 16], rise: -0.35, sway: 0.5, opacity: 0.5, additive: false });
  group.add(embers.points, ash.points);
  let px = 0, pz = 50;
  group.userData.follow = (x: number, z: number) => { px = x; pz = z; };
  anims.push((t, dt) => { embers.update(t, dt, px, pz); ash.update(t, dt, px, pz); for (const f of fires) f(t); });
  // Lava light flickers on everything.
  const lavaLight = new THREE.PointLight('#ff4a10', 10, 40, 1.6); lavaLight.position.set(-10, 3, -9); group.add(lavaLight);
  const lavaLight2 = new THREE.PointLight('#ff6a1a', 8, 40, 1.6); lavaLight2.position.set(20, 3, -9); group.add(lavaLight2);
  anims.push(t => { lavaLight.intensity = 9 + Math.sin(t * 5) * 2 + Math.sin(t * 13) * 1; lavaLight2.intensity = 7 + Math.sin(t * 4.3 + 1) * 2; });

  const { talkers, walkers } = populate(group, 'infierno', false, shadows);
  const light: Light = {
    sky: ['#1a0505', '#5a0e06'],
    fog: ['#2a0806', 18, 110],
    sun: { color: '#ff7a3a', intensity: 1.3, at: [-14, 30, 10] },
    hemi: ['#ff6a3a', '#1a0606', 0.75],
    exposure: 1.1,
  };
  return finishPlace('infierno', group, light, talkers, walkers, [], (t, dt) => { for (const a of anims) a(t, dt); });
}
