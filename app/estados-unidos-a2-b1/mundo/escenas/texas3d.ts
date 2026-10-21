// Estados Unidos 3D · Texas: Austin in one afternoon walk. South Congress runs
// north toward the pink Capitol dome, with boot shops and murals on one side;
// a barbecue pavilion with its smoker on the other; a beer garden with a stage
// and string lights; the county fair with its Ferris wheel and the goat pen at
// the edge of town; and, down the highway, Earl's gas station with its windmill.
import * as THREE from 'three';
import {
  box, cylinder, extra, glow, ground, groundTexture, labelTexture, lightPool, makeCar, makeWalker, muralTexture,
  neonBar, panel, placeVehicle, random, sign, solid, spotWith, streetLamp, tileTexture, windowsTexture,
  type Box, type SceneBuilder, type SpotPlace, type Talker, type Walker,
} from '../../../mundo-3d/kit3d';

const HWY = { x: 200, z: 0 };

const build: SceneBuilder = ({ low, shadows }) => {
  const group = new THREE.Group();
  const solids: Box[] = [];
  const spots: SpotPlace[] = [];
  const talkers: Talker[] = [];
  const walkers: Walker[] = [];
  const lamps: THREE.MeshStandardMaterial[] = [];
  const rand = random(8113);
  const solidBox = (x0: number, z0: number, x1: number, z1: number, top?: number) => solids.push(top == null ? { x0, x1, z0, z1 } : { x0, x1, z0, z1, top });

  // ---------------------------------------------------------- ground
  const asphalt = groundTexture('#4a4a4c', ['#3c3c3e', '#58585a'], 51);
  const sidewalk = tileTexture('#d9cfbf', '#bdb2a0', 3);
  const dirt = groundTexture('#c9a877', ['#b8955f', '#d9bb8c'], 52);
  const grass = groundTexture('#8a9a4c', ['#76883e', '#9fae5c'], 53);
  const dry = groundTexture('#cdb57d', ['#b99f66', '#dcc694'], 54);
  ground(group, -44, -44, 44, 44, grass, '#ffffff', 10);
  ground(group, -10, -44, 10, 44, sidewalk, '#ffffff', 4, 0.005);
  ground(group, -4, -44, 4, 44, asphalt, '#ffffff', 10, 0.012); // South Congress
  for (let z = -42; z < 42; z += 5) ground(group, -0.08, z, 0.08, z + 2.5, null, '#f4c542', 1, 0.02, 0.6);
  ground(group, 4, -4.5, 44, 1.5, asphalt, '#ffffff', 8, 0.013); // the road out to the highway
  ground(group, 8, -40, 42, -8, dirt, '#ffffff', 8, 0.008); // the fairground

  // ---------------------------------------------------------- the Capitol, far up the avenue
  {
    const capitol = new THREE.Group();
    const granite = solid('#d9a28c', 0.8);
    capitol.add(box(70, 16, 22, granite, 0, 8, 0));
    capitol.add(box(26, 22, 26, granite, 0, 11, 0));
    for (let i = 0; i < 12; i++) capitol.add(box(1.2, 14, 1.2, solid('#ecd2c4', 0.7), -11 + i * 2, 7, -13.4));
    capitol.add(cylinder(9, 9, 10, granite, 0, 27, 0, 24));
    const dome = new THREE.Mesh(new THREE.SphereGeometry(9.5, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2), solid('#e8c4b2', 0.6));
    dome.scale.y = 1.4; dome.position.y = 32; capitol.add(dome);
    capitol.add(cylinder(1.6, 1.6, 4, solid('#ecd2c4', 0.6), 0, 47, 0, 12));
    capitol.add(cylinder(0.2, 0.2, 3, solid('#c9a227', 0.3, 0.6), 0, 50.5, 0, 8));
    capitol.position.set(0, 0, 140); group.add(capitol);
    const lawn = new THREE.Mesh(new THREE.PlaneGeometry(120, 90), solid('#7d9a45', 1)); lawn.rotation.x = -Math.PI / 2; lawn.position.set(0, -0.02, 110); group.add(lawn);
    for (let i = 0; i < 10; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(8 + rand() * 8, 8 + rand() * 30, 8), solid('#b9c4cc', 0.5, 0.2)); b.position.set((i % 2 ? 1 : -1) * (40 + rand() * 40), b.geometry.parameters.height / 2, 70 + rand() * 60); group.add(b); }
  }
  solidBox(-46, 42, 46, 46); solidBox(-46, -46, 46, -42); solidBox(-46, -46, -42, 46); solidBox(42, -46, 46, 46);

  // ---------------------------------------------------------- South Congress: boot shops and murals (west side)
  const shopColors = ['#f2e2c4', '#c96f4a', '#e9d8b6', '#7a9cb0', '#f0c9a0'];
  const shopNames = ['BOTAS DEL SUR', 'VINTAGE', 'HATS & BOOTS', 'RECORDS', 'TACOS'];
  for (let i = 0; i < 5; i++) {
    const z0 = 6 + i * 7, z1 = z0 + 6.4;
    const h = 4 + (i % 2) * 1.2;
    group.add(box(8, h, z1 - z0, solid(shopColors[i], 0.85), -15.5, h / 2, (z0 + z1) / 2));
    group.add(box(0.1, 2.2, (z1 - z0) - 1.6, solid('#2c3a44', 0.15, 0.4), -11.44, 1.5, (z0 + z1) / 2, false)); // shop window
    const awning = box(1.4, 0.1, z1 - z0, solid(['#b5432b', '#1f6f78', '#e0a33a', '#3b3b6d', '#5b8c3a'][i], 0.6), -10.8, 3.0, (z0 + z1) / 2, false); awning.rotation.z = -0.25; group.add(awning);
    sign(group, shopNames[i], -11.35, h - 0.6, (z0 + z1) / 2, Math.PI / 2, 4.6, '#1b1b1b', '#f4e7c8');
    solidBox(-19.5, z0, -11.4, z1);
  }
  // Boots in the window of Diego's shop and a big boot sculpture on the sidewalk.
  for (let k = 0; k < 4; k++) {
    const boot = new THREE.Group();
    boot.add(box(0.22, 0.5, 0.26, solid(['#7a4a2a', '#2b1a12', '#b5432b', '#d9b48a'][k], 0.5), 0, 0.25, 0, false));
    boot.add(box(0.22, 0.14, 0.42, solid(['#7a4a2a', '#2b1a12', '#b5432b', '#d9b48a'][k], 0.5), 0, 0.07, 0.1, false));
    boot.position.set(-11.7, 0.6, 7.2 + k * 1.2); group.add(boot);
  }
  {
    const big = new THREE.Group();
    const leather = solid('#9a5a32', 0.5);
    big.add(box(0.9, 2.4, 1.2, leather, 0, 1.4, 0)); big.add(box(0.9, 0.7, 2.2, leather, 0, 0.35, 0.6)); big.add(box(1.0, 0.25, 0.5, solid('#3a2416', 0.6), 0, 0.12, -0.5));
    for (let s = 0; s < 4; s++) big.add(box(0.92, 0.06, 0.06, solid('#e8c47a', 0.4, 0.4), 0, 1.6 + s * 0.25, 0.61, false));
    big.position.set(-8.6, 0, 4.6); group.add(big); solidBox(-9.2, 3.8, -8, 6.1);
  }
  // Murals on the side walls facing the road.
  const muralPalette = ['#e94f37', '#f6c85f', '#4f9d9a', '#2d3047', '#ffffff', '#ff8c42'];
  group.add(box(0.4, 5, 12, solid('#e9e0cf', 0.9), -15.5, 2.5, -6));
  panel(group, labelTexture('greetings from AUSTIN', '#4f9d9a', '#f6c85f', { w: 1024, h: 256, font: '900 96px Georgia, serif', border: '#ffffff' }), -15.28, 2.6, -6, Math.PI / 2, 11, 2.8);
  panel(group, muralTexture(8801, muralPalette), -15.72, 2.5, -6, -Math.PI / 2, 11.6, 4.6);
  solidBox(-15.8, -12.1, -15.2, 0.1);
  // Diego by the window of his boot shop, Amber next to him with her coffee.
  spotWith(group, spots, talkers, 'congress', -7.6, 9.2, -Math.PI / 2 + 0.15, 8301, { body: 'm', age: 'adult', top: 'shirt', topColor: '#b5432b', bottom: 'jeans', hairStyle: 'short', hairColor: '#1d140e', extras: ['hat', 'mustache'] }, 'arms', 'smile', shadows, 2.2);
  extra(group, talkers, -9.6, 11.4, Math.PI / 2 + 0.6, 8302, { body: 'f', age: 'young', top: 'jacket', topColor: '#e0a33a', bottom: 'jeans', hairStyle: 'long', hairColor: '#3a2416', extras: ['earrings'] }, 'phone', 'laugh', shadows); // Amber
  // A food truck and picnic tables on the east sidewalk.
  {
    const truck = new THREE.Group();
    truck.add(box(5.6, 2.5, 2.3, solid('#f6c85f', 0.5), 0, 1.6, 0)); truck.add(box(1.6, 1.8, 2.2, solid('#f6c85f', 0.5), -3.4, 1.25, 0));
    truck.add(box(2.8, 1.0, 0.06, solid('#1d1d1d', 0.4), 0.4, 1.9, -1.17, false));
    for (const [wx, wz] of [[-2.6, 1.1], [-2.6, -1.1], [1.8, 1.1], [1.8, -1.1]]) { const w = cylinder(0.42, 0.42, 0.3, solid('#151515'), wx, 0.42, wz, 12); w.rotation.x = Math.PI / 2; truck.add(w); }
    const m = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 0.9), new THREE.MeshStandardMaterial({ map: labelTexture('KOLACHES · TACOS', '#2d3047', '#f6c85f', { w: 512, h: 128 }), roughness: 0.6 }));
    m.position.set(0.3, 3.2, -1.16); m.rotation.y = Math.PI; truck.add(m);
    truck.rotation.y = -Math.PI / 2; truck.position.set(7.2, 0, 34); group.add(truck); solidBox(6, 29.5, 8.4, 37);
  }

  // ---------------------------------------------------------- the barbecue pavilion (east side)
  {
    const P = { x: 18, z: 20 };
    const wood = solid('#8a5a36', 0.85);
    for (const dx of [-8, 0, 8]) for (const dz of [-6, 6]) { group.add(box(0.4, 4, 0.4, wood, P.x + dx, 2, P.z + dz)); solidBox(P.x + dx - 0.25, P.z + dz - 0.25, P.x + dx + 0.25, P.z + dz + 0.25); }
    const roof = box(18, 0.3, 14, solid('#8c8f93', 0.4, 0.6), P.x, 4.1, P.z); group.add(roof);
    group.add(box(18, 1.2, 0.2, solid('#2b1a12', 0.7), P.x, 4.8, P.z - 7.05, false));
    sign(group, 'LORENA’S BBQ', P.x, 4.85, P.z - 7.2, Math.PI, 7, '#2b1a12', '#f6c85f');
    for (const dz of [-3, 0, 3]) {
      group.add(box(12, 0.12, 1.1, wood, P.x + 1, 0.8, P.z + dz));
      for (const s of [-0.85, 0.85]) group.add(box(12, 0.08, 0.35, wood, P.x + 1, 0.46, P.z + dz + s, false));
      group.add(box(10, 0.02, 0.8, solid('#a67b52', 1), P.x + 1, 0.87, P.z + dz, false)); // butcher paper
      solidBox(P.x - 5, P.z + dz - 1.1, P.x + 7, P.z + dz + 1.1, 0.85);
    }
    const diners: [number, number, number][] = [[14, 16.1, 0], [18, 16.1, 0], [21, 18.9, Math.PI], [16, 21.9, 0], [20, 21.9, 0], [23, 24.1, Math.PI]];
    diners.slice(0, low ? 3 : 6).forEach(([x, z, h], i) => extra(group, talkers, x, z, h, 8310 + i, {}, 'sit', i % 2 ? 'laugh' : 'smile', shadows));
    // The smoker: a black barrel on wheels with a chimney, and the woodpile.
    const smoker = new THREE.Group();
    const barrel = cylinder(0.75, 0.75, 3.4, solid('#1c1c1c', 0.5, 0.5), 0, 1.3, 0, 18); barrel.rotation.z = Math.PI / 2; smoker.add(barrel);
    smoker.add(box(1.2, 1.3, 1.2, solid('#1c1c1c', 0.5, 0.5), -2.2, 1.0, 0));
    smoker.add(cylinder(0.16, 0.16, 2.2, solid('#2a2a2a', 0.5, 0.5), -2.2, 2.7, 0, 8));
    for (const s of [-1.3, 1.3]) smoker.add(box(0.08, 0.6, 1.4, solid('#3a3a3a', 0.5, 0.5), s, 0.3, 0, false));
    smoker.add(box(3.6, 0.06, 0.06, solid('#c0c0c0', 0.3, 0.8), 0, 1.3, 0.8, false));
    smoker.position.set(12.6, 0, 10.5); group.add(smoker); solidBox(9.8, 9.6, 14.4, 11.4);
    for (let k = 0; k < 12; k++) { const log = cylinder(0.14, 0.14, 1.2, solid('#6b4a2e', 0.9), 16.4 + (k % 4) * 0.3, 0.15 + Math.floor(k / 4) * 0.27, 10.5, 7); log.rotation.x = Math.PI / 2; group.add(log); }
    solidBox(16, 9.8, 17.8, 11.2, 0.9);
  }
  spotWith(group, spots, talkers, 'barbacoa', 7.6, 12.4, Math.PI / 2 + 0.6, 8303, { body: 'f', age: 'adult', build: 'athletic', top: 'apron', topColor: '#2b1a12', bottom: 'jeans', hairStyle: 'braids', hairColor: '#2a1a12', extras: ['cap'] }, 'cook', 'laugh', shadows, 2.0);
  const smokePuffs: THREE.Mesh[] = [];
  const puffMat = new THREE.MeshBasicMaterial({ color: '#d8d4cc', transparent: true, opacity: 0.35, depthWrite: false });
  for (let i = 0; i < (low ? 4 : 8); i++) { const puff = new THREE.Mesh(new THREE.SphereGeometry(0.4, 8, 6), puffMat); puff.position.set(10.4, 4 + i * 0.6, 10.5); group.add(puff); smokePuffs.push(puff); }

  // ---------------------------------------------------------- the beer garden with the stage (west side, south)
  const neon: THREE.MeshStandardMaterial[] = [];
  {
    const B = { x: -24, z: -24 };
    // A brick back wall with the stage against it, open to the sky.
    group.add(box(18, 6, 0.6, solid('#8c4a32', 0.9), B.x, 3, B.z - 9));
    panel(group, windowsTexture('#8c4a32', '#30353c', '#ffcf7a', 6, 2, 81, 0.4), B.x, 4.6, B.z - 8.68, 0, 16, 2.2);
    solidBox(B.x - 9, B.z - 9.4, B.x + 9, B.z - 8.6);
    group.add(box(10, 0.6, 5, solid('#4a3020', 0.8), B.x, 0.3, B.z - 6)); solidBox(B.x - 5, B.z - 8.6, B.x + 5, B.z - 3.5, 0.6);
    group.add(box(10, 0.15, 5.4, solid('#2a1a12', 0.8), B.x, 4.2, B.z - 6.2)); for (const s of [-5, 5]) { group.add(box(0.2, 4.2, 0.2, solid('#2a1a12'), B.x + s, 2.1, B.z - 3.6)); solidBox(B.x + s - 0.2, B.z - 3.8, B.x + s + 0.2, B.z - 3.4); }
    sign(group, 'THE LONE STAR ROOM', B.x, 5.3, B.z - 8.6, 0, 7.5, '#141414', '#ff5e7e', true);
    neon.push(neonBar(group, B.x - 3.6, 2.6, B.z - 8.6, 0.12, 2.6, 0.12, '#ff5e7e'));
    neon.push(neonBar(group, B.x + 3.6, 2.6, B.z - 8.6, 0.12, 2.6, 0.12, '#5ec8ff'));
    // A neon lone star over the stage.
    const star = new THREE.Shape();
    for (let k = 0; k < 10; k++) { const r = k % 2 ? 0.45 : 1.1, a = Math.PI / 2 + k * Math.PI / 5; if (k === 0) star.moveTo(Math.cos(a) * r, Math.sin(a) * r); else star.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
    const starMat = glow('#ffd23f', 1.8) as THREE.MeshStandardMaterial;
    const starMesh = new THREE.Mesh(new THREE.ShapeGeometry(star), starMat); starMesh.position.set(B.x, 3.2, B.z - 8.65); group.add(starMesh); neon.push(starMat);
    // Amplifiers and a microphone stand on the stage, a band member behind.
    for (const s of [-3.4, 3.4]) group.add(box(0.9, 1.1, 0.6, solid('#1a1a1a', 0.6), B.x + s, 1.15, B.z - 7.4));
    extra(group, talkers, B.x + 1.8, B.z - 6.6, 0, 8320, { body: 'm', top: 'tshirt', topColor: '#1a1a1a', extras: ['cap'] }, 'guitar', 'neutral', shadows).person.root.position.y = 0.6;
    // String lights across the garden.
    const bulbMat = glow('#ffe1a0', 1.6) as THREE.MeshStandardMaterial; neon.push(bulbMat);
    for (let r = 0; r < 4; r++) for (let k = 0; k < 14; k++) {
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 4), bulbMat);
      bulb.position.set(B.x - 9 + k * 1.38, 4.4 - Math.sin((k / 13) * Math.PI) * 0.5, B.z - 2 + r * 3.2); group.add(bulb);
    }
    for (const [px, pz] of [[B.x - 9.3, B.z - 2], [B.x + 9.3, B.z - 2], [B.x - 9.3, B.z + 7.6], [B.x + 9.3, B.z + 7.6]]) { group.add(cylinder(0.08, 0.08, 4.6, solid('#3a3a3a'), px, 2.3, pz, 6)); solidBox(px - 0.15, pz - 0.15, px + 0.15, pz + 0.15); }
    // Picnic tables and people dancing.
    for (const [tx, tz] of [[B.x - 6, B.z + 4], [B.x + 6, B.z + 4], [B.x - 6, B.z + 8], [B.x + 6, B.z + 8]] as const) {
      group.add(box(3, 0.1, 1, solid('#7a5236', 0.8), tx, 0.78, tz)); for (const s of [-0.75, 0.75]) group.add(box(3, 0.08, 0.3, solid('#7a5236', 0.8), tx, 0.45, tz + s, false));
      solidBox(tx - 1.5, tz - 1, tx + 1.5, tz + 1, 0.8);
    }
    const dancers: [number, number][] = [[B.x - 1.5, B.z + 0.5], [B.x + 0.4, B.z + 1.2], [B.x - 3, B.z + 2], [B.x + 2.2, B.z + 0.2]];
    dancers.slice(0, low ? 2 : 4).forEach(([x, z], i) => extra(group, talkers, x, z, Math.PI + (i - 1.5) * 0.4, 8321 + i, { extras: i % 2 ? ['hat'] : [] }, 'dance', 'laugh', shadows));
    ground(group, B.x - 9, B.z - 3.5, B.x + 9, B.z + 10, tileTexture('#b9a68c', '#9b8a72', 6), '#ffffff', 3, 0.01);
    // A low fence around the garden, open to the sidewalk.
    const fence = solid('#6b4a33', 0.85);
    group.add(box(0.15, 1.1, 19, fence, B.x - 9.4, 0.55, B.z + 0.5)); solidBox(B.x - 9.6, B.z - 9, B.x - 9.2, B.z + 10);
    group.add(box(18.6, 1.1, 0.15, fence, B.x, 0.55, B.z + 10.1)); solidBox(B.x - 9.4, B.z + 9.9, B.x + 9.4, B.z + 10.3);
  }
  // Jesse with his guitar at the garden gate, by the sidewalk.
  spotWith(group, spots, talkers, 'musica', -9.4, -16.6, -Math.PI / 2 - 0.35, 8304, { body: 'm', age: 'young', top: 'shirt', topColor: '#3b3b6d', bottom: 'jeans', bottomColor: '#1d2a44', hairStyle: 'long', hairColor: '#5a3a22', extras: ['hat'] }, 'guitar', 'smile', shadows, 2.1);

  // ---------------------------------------------------------- the county fair (east side, south)
  const wheel = new THREE.Group();
  const gondolas: THREE.Object3D[] = [];
  {
    // The Ferris wheel.
    const W = { x: 32, z: -30 }, R = 9, H = 11;
    const steel = solid('#e9e4dc', 0.4, 0.5);
    for (const s of [-1.4, 1.4]) for (const d of [-1, 1]) { const leg = box(0.35, H * 1.15, 0.35, steel, W.x + d * 2.6, H / 2, W.z + s); leg.rotation.z = d * 0.24; group.add(leg); }
    solidBox(W.x - 4.6, W.z - 1.8, W.x + 4.6, W.z + 1.8);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(R, 0.12, 6, 48), steel); wheel.add(rim);
    const rim2 = rim.clone(); rim2.position.z = 0.9; wheel.add(rim2); rim.position.z = -0.9;
    const bulbs = glow('#ffd23f', 1.4) as THREE.MeshStandardMaterial; neon.push(bulbs);
    const colors = ['#e94f37', '#4f9d9a', '#f6c85f', '#3b5ba5', '#ff8c42', '#8e44ad'];
    const n = low ? 8 : 12;
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2;
      const spoke = box(0.08, R, 0.08, steel, Math.cos(a) * R / 2, Math.sin(a) * R / 2, 0, false); spoke.rotation.z = a - Math.PI / 2; wheel.add(spoke);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 6, 4), bulbs); bulb.position.set(Math.cos(a) * R, Math.sin(a) * R, 1.0); wheel.add(bulb);
      const g = new THREE.Group();
      g.add(box(1.2, 0.9, 1.4, solid(colors[k % 6], 0.6), 0, -0.9, 0, false)); g.add(box(1.3, 0.1, 1.5, solid('#ffffff', 0.6), 0, -0.2, 0, false));
      g.position.set(Math.cos(a) * R, Math.sin(a) * R, 0); wheel.add(g); gondolas.push(g);
    }
    wheel.position.set(W.x, H, W.z); wheel.rotation.y = -0.5; group.add(wheel);
    // The livestock barn: a red open-sided shed with pens, and Daisy the goat.
    const L = { x: 22, z: -18 };
    const red = solid('#a83a2a', 0.85);
    group.add(box(14, 0.3, 10, solid('#7a2a1e', 0.8), L.x + 2, 4.4, L.z - 1)); // roof
    for (const dx of [-5, 9]) for (const dz of [-6, 4]) { group.add(box(0.4, 4.4, 0.4, red, L.x + dx, 2.2, L.z + dz)); solidBox(L.x + dx - 0.25, L.z + dz - 0.25, L.x + dx + 0.25, L.z + dz + 0.25); }
    sign(group, 'LIVESTOCK · GANADO', L.x + 2, 5.2, L.z + 4.05, 0, 5.4, '#ffffff', '#a83a2a');
    ground(group, L.x - 5, L.z - 6, L.x + 9, L.z + 4, groundTexture('#d8c08a', ['#c9ae72', '#e6d3a5'], 55), '#ffffff', 4, 0.012);
    const rail = solid('#e9e4dc', 0.6);
    const pen = (x0: number, z0: number, x1: number, z1: number) => {
      for (const y of [0.45, 0.95]) { group.add(box(x1 - x0, 0.08, 0.08, rail, (x0 + x1) / 2, y, z0, false)); group.add(box(x1 - x0, 0.08, 0.08, rail, (x0 + x1) / 2, y, z1, false)); group.add(box(0.08, 0.08, z1 - z0, rail, x0, y, (z0 + z1) / 2, false)); group.add(box(0.08, 0.08, z1 - z0, rail, x1, y, (z0 + z1) / 2, false)); }
      solidBox(x0 - 0.1, z0 - 0.1, x1 + 0.1, z0 + 0.1); solidBox(x0 - 0.1, z1 - 0.1, x1 + 0.1, z1 + 0.1); solidBox(x0 - 0.1, z0, x0 + 0.1, z1); solidBox(x1 - 0.1, z0, x1 + 0.1, z1);
    };
    pen(L.x - 4, L.z - 1, L.x, L.z + 3); pen(L.x + 1, L.z - 1, L.x + 5, L.z + 3); pen(L.x + 6, L.z - 1, L.x + 8.5, L.z + 3);
    // Hay bales.
    for (let k = 0; k < 5; k++) { group.add(box(1.1, 0.5, 0.6, solid('#e2c66a', 0.95), L.x - 3 + k * 2.4, 0.25 + (k % 2) * 0.5, L.z - 4.5)); solidBox(L.x - 3.55 + k * 2.4, L.z - 4.8, L.x - 2.45 + k * 2.4, L.z - 4.2, 0.5 + (k % 2) * 0.5); }
  }
  // A small white goat built from boxes, with a blue ribbon.
  const goat = (x: number, z: number, heading: number, color = '#f4f1ea', ribbon = false) => {
    const g = new THREE.Group();
    const fur = solid(color, 0.9);
    g.add(box(0.9, 0.45, 0.42, fur, 0, 0.68, 0, shadows));
    for (const [lx, lz] of [[-0.32, -0.14], [-0.32, 0.14], [0.32, -0.14], [0.32, 0.14]]) g.add(box(0.09, 0.48, 0.09, fur, lx, 0.24, lz, false));
    const head = new THREE.Group();
    head.add(box(0.36, 0.26, 0.24, fur, 0.14, 0, 0, false));
    head.add(box(0.06, 0.18, 0.06, solid('#9a8f80', 0.6), -0.02, 0.2, -0.07, false)); head.add(box(0.06, 0.18, 0.06, solid('#9a8f80', 0.6), -0.02, 0.2, 0.07, false));
    head.add(box(0.06, 0.12, 0.05, solid('#d9d2c4', 0.9), 0.24, -0.16, 0, false)); // beard
    for (const s of [-0.13, 0.13]) head.add(box(0.14, 0.05, 0.08, fur, -0.04, 0.08, s * 1.4, false));
    for (const s of [-0.1, 0.1]) head.add(box(0.03, 0.04, 0.03, solid('#2a1d12', 0.3), 0.2, 0.06, s, false));
    head.position.set(0.5, 0.98, 0); g.add(head);
    g.add(box(0.1, 0.18, 0.08, fur, -0.48, 0.92, 0, false));
    if (ribbon) { g.add(box(0.04, 0.22, 0.12, solid('#2b5bd7', 0.5), 0.36, 0.7, 0.22, false)); g.add(new THREE.Mesh(new THREE.CircleGeometry(0.09, 10), solid('#2b5bd7', 0.5)).translateX(0.36).translateY(0.84).translateZ(0.23)); }
    g.position.set(x, 0, z); g.rotation.y = heading - Math.PI / 2; group.add(g);
    solidBox(x - 0.5, z - 0.5, x + 0.5, z + 0.5);
    return head;
  };
  const goatHeads = [goat(21.3, -25.4, Math.PI * 0.9, '#f4f1ea', true), goat(23.6, -16, -0.4, '#c9a27a'), goat(25, -17.4, 2.2, '#3a3028')];
  // Tyler in his 4-H shirt outside the barn, with Daisy and her blue ribbon.
  spotWith(group, spots, talkers, 'feria', 20, -27.4, 0.15, 8305, { body: 'm', age: 'teen', top: 'shirt', topColor: '#2f8f4e', bottom: 'jeans', hairStyle: 'buzz', hairColor: '#c9a46a', extras: ['cap'] }, 'arms', 'worried', shadows, 2.0);
  // Fried-food stands and fairgoers.
  for (const [i, [x, z, label, c]] of ([[12, -36, 'CORNY DOGS', '#e94f37'], [18, -36, 'FUNNEL CAKE', '#3b5ba5'], [24, -36, 'LEMONADE', '#f6c85f']] as const).entries()) {
    group.add(box(4.4, 2.4, 2.4, solid('#ffffff', 0.7), x, 1.2, z)); group.add(box(4.6, 0.12, 2.8, solid(c, 0.6), x, 2.9, z + 0.3, false));
    for (let k = 0; k < 6; k++) group.add(box(0.76, 0.1, 2.8, solid(k % 2 ? '#ffffff' : c, 0.6), x - 1.9 + k * 0.76, 2.97, z + 0.3, false));
    sign(group, label, x, 3.5, z + 1.22, 0, 3.6, c, '#ffffff');
    solidBox(x - 2.2, z - 1.2, x + 2.2, z + 1.2);
    if (!low || i === 0) extra(group, talkers, x, z + 2.3, Math.PI, 8330 + i, { age: i === 1 ? 'child' : 'adult' }, i === 2 ? 'phone' : 'stand', 'smile', shadows);
  }
  extra(group, talkers, 13.6, -25, 0.8, 8334, { age: 'old', extras: ['hat'] }, 'point', 'laugh', shadows);
  extra(group, talkers, 28, -12.5, -2.4, 8335, { body: 'f', age: 'child' }, 'wave', 'laugh', shadows);
  // Bunting over the fair entrance.
  for (let i = 0; i < 14; i++) { const f = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.6, 3), solid(['#e94f37', '#ffffff', '#3b5ba5'][i % 3], 0.6)); f.rotation.x = Math.PI; f.position.set(8.4, 4.2 - Math.sin((i / 13) * Math.PI) * 0.5, -9 - i * 2.1); group.add(f); }
  for (const z of [-8.6, -38]) { group.add(cylinder(0.08, 0.08, 4.6, solid('#3a3a3a'), 8.4, 2.3, z, 6)); solidBox(8.25, z - 0.15, 8.55, z + 0.15); }
  sign(group, 'TRAVIS COUNTY FAIR', 8.4, 5, -23, -Math.PI / 2, 6, '#3b5ba5', '#ffffff');

  // ---------------------------------------------------------- the road out, cars, lamps
  [['sedan', '#c0392b', 2, 12, -Math.PI / 2], ['coupe', '#e8e1d0', -2, -6, Math.PI / 2], ['van', '#3b5ba5', 2, -30, -Math.PI / 2], ['sedan', '#2c3e50', -2, 24, Math.PI / 2]].forEach(([kind, color, x, z, h], i) => {
    if (low && i > 1) return;
    const car = makeCar(kind as 'sedan', color as string).group; placeVehicle(car, x as number, z as number, h as number); group.add(car);
    solidBox((x as number) - 0.95, (z as number) - 2.3, (x as number) + 0.95, (z as number) + 2.3, 1.5);
  });
  for (let z = -36; z <= 36; z += 12) for (const x of [-4.8, 4.8]) { if (x > 0 && z > -6 && z < 2) continue; streetLamp(group, x, z, lamps, 5, '#ffd9a0'); solidBox(x - 0.15, z - 0.15, x + 0.15, z + 0.15); }
  // The highway sign and the pickup that takes you there.
  panel(group, labelTexture('I-35 · San Antonio →', '#1e6b3a', '#ffffff', { w: 512, h: 128, border: '#ffffff' }), 36, 4.4, 2.1, Math.PI, 5, 1.25);
  group.add(box(0.15, 4.4, 0.15, solid('#555555'), 33.6, 2.2, 2.2)); group.add(box(0.15, 4.4, 0.15, solid('#555555'), 38.4, 2.2, 2.2));
  solidBox(33.4, 2, 33.8, 2.4); solidBox(38.2, 2, 38.6, 2.4);
  const pickup = makeCar('broken', '#8c3b2b').group; placeVehicle(pickup, 38.5, -2.2, 0); group.add(pickup); solidBox(36.2, -3.2, 40.8, -1.2, 1.5);

  // ---------------------------------------------------------- Earl's gas station, down the highway
  const blades = new THREE.Group();
  {
    const X = HWY.x, Z = HWY.z;
    const big = new THREE.Mesh(new THREE.PlaneGeometry(500, 500), new THREE.MeshStandardMaterial({ map: (() => { dry.repeat.set(60, 60); return dry; })(), roughness: 1 }));
    big.rotation.x = -Math.PI / 2; big.position.set(X, -0.01, Z); group.add(big);
    const hwyTex = groundTexture('#3e3e40', ['#333335', '#4a4a4c'], 56);
    const road = new THREE.Mesh(new THREE.PlaneGeometry(10, 500), new THREE.MeshStandardMaterial({ map: (() => { hwyTex.repeat.set(2, 100); return hwyTex; })(), roughness: 0.9 }));
    road.rotation.x = -Math.PI / 2; road.position.set(X + 12, 0.01, Z); group.add(road);
    for (let z = -240; z < 240; z += 8) ground(group, X + 11.9, z, X + 12.1, z + 4, null, '#f4f4f4', 1, 0.02, 0.6);
    ground(group, X - 18, Z - 16, X + 7, Z + 16, tileTexture('#cfc8b9', '#b3ab9a', 5), '#ffffff', 4, 0.005);
    // Canopy over the pumps.
    for (const dx of [-2.5, 4.5]) for (const dz of [-5.5, 5.5]) { group.add(box(0.35, 4.6, 0.35, solid('#e9e4dc', 0.5), X + dx, 2.3, Z + dz)); solidBox(X + dx - 0.2, Z + dz - 0.2, X + dx + 0.2, Z + dz + 0.2); }
    group.add(box(9, 0.6, 13, solid('#f2efe9', 0.5), X + 1, 4.9, Z));
    group.add(box(9.05, 0.25, 13.05, solid('#c0392b', 0.5), X + 1, 4.7, Z, false));
    for (const dz of [-3.6, 3.6]) {
      const pump = new THREE.Group();
      pump.add(box(0.7, 1.6, 0.5, solid('#e9e4dc', 0.5), 0, 0.8, 0)); pump.add(box(0.72, 0.4, 0.52, solid('#c0392b', 0.5), 0, 1.5, 0, false));
      pump.add(box(0.5, 0.3, 0.02, glow('#7fd1ff', 0.6), 0, 1.15, 0.26, false));
      pump.position.set(X + 1, 0, Z + dz); group.add(pump); solidBox(X + 0.6, Z + dz - 0.3, X + 1.4, Z + dz + 0.3);
    }
    // Price sign on a pole by the road.
    group.add(box(0.3, 7, 0.3, solid('#555555'), X + 6.2, 3.5, Z - 12)); solidBox(X + 6, Z - 12.2, X + 6.4, Z - 11.8);
    panel(group, labelTexture('EARL’S · GAS $2.89', '#c0392b', '#ffffff', { w: 512, h: 192 }), X + 6.2, 7.6, Z - 12, -Math.PI / 2, 4, 1.5);
    // The shop.
    const shop = new THREE.Group();
    shop.add(box(8, 3.6, 12, solid('#e8dcc4', 0.85), 0, 1.8, 0));
    shop.add(box(8.6, 0.3, 12.6, solid('#7a5236', 0.8), 0, 3.75, 0));
    shop.add(box(0.06, 1.6, 6, solid('#2c3a44', 0.15, 0.4), 4.01, 1.6, -2, false));
    shop.add(box(0.06, 2.2, 1.2, solid('#7a5236', 0.7), 4.01, 1.1, 3, false));
    shop.position.set(X - 12, 0, Z); group.add(shop);
    sign(group, 'COLD DRINKS · BAIT · ICE', X - 7.9, 3.2, Z, Math.PI / 2, 6, '#1b1b1b', '#f6c85f', true);
    solidBox(X - 16, Z - 6, X - 8, Z + 6);
    group.add(box(1.4, 1.0, 0.8, solid('#2b6cb0', 0.5), X - 7.4, 0.5, Z - 4.6)); solidBox(X - 8.1, Z - 5, X - 6.7, Z - 4.2, 1.0); // the ice chest
    group.add(box(2, 0.08, 0.6, solid('#7a5236', 0.8), X - 7.3, 0.5, Z + 5.2)); solidBox(X - 8.3, Z + 4.9, X - 6.3, Z + 5.5, 0.5); // the bench
    // The windmill in the field.
    const mill = new THREE.Group();
    for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2 + Math.PI / 4; const leg = box(0.12, 12.4, 0.12, solid('#8a8a8a', 0.4, 0.6), Math.cos(a) * 1.0, 6, Math.sin(a) * 1.0, false); leg.rotation.x = Math.sin(a) * -0.08; leg.rotation.z = Math.cos(a) * 0.08; mill.add(leg); }
    for (let k = 0; k < 18; k++) { const a = (k / 18) * Math.PI * 2; const b = box(0.35, 1.4, 0.04, solid('#d9d9d9', 0.4, 0.5), Math.cos(a) * 1.1, Math.sin(a) * 1.1, 0, false); b.rotation.z = a - Math.PI / 2; blades.add(b); }
    blades.position.set(0, 12.4, 0.4); mill.add(blades);
    const vane = box(0.04, 0.9, 2.2, solid('#d9d9d9', 0.4, 0.5), 0, 12.4, -1.4, false); mill.add(vane);
    mill.position.set(X - 26, 0, Z + 10); mill.rotation.y = 0.4; group.add(mill);
    group.add(cylinder(2, 2, 1.2, solid('#7a8a8f', 0.4, 0.6), X - 26, 0.6, Z + 14, 18));
    // Barbed-wire fence along the lot.
    for (let k = 0; k <= 16; k++) group.add(cylinder(0.06, 0.06, 1.2, solid('#6b5a44', 0.9), X - 18, 0.6, Z - 16 + k * 2, 5));
    for (const y of [0.5, 0.9]) group.add(box(0.02, 0.02, 32, solid('#5a5a5a', 0.5, 0.6), X - 18, y, Z, false));
    // A parked eighteen-wheeler on the shoulder and a car at the pump.
    const semi = new THREE.Group();
    semi.add(box(2.6, 3.4, 12, solid('#f2f2f2', 0.5), 0, 2.2, -2)); semi.add(box(2.5, 2.8, 3, solid('#2b5bd7', 0.4, 0.3), 0, 1.9, 5.8));
    semi.add(box(2.4, 1.0, 0.06, solid('#2a3440', 0.15, 0.4), 0, 2.6, 7.31, false));
    for (const wz of [-6.5, -5, 3, 6]) for (const s of [-1.25, 1.25]) { const w = cylinder(0.5, 0.5, 0.4, solid('#151515'), s, 0.5, wz, 12); w.rotation.z = Math.PI / 2; semi.add(w); }
    semi.position.set(X + 6.3, 0, Z + 18); group.add(semi);
    const car = makeCar('sedan', '#d9b48a').group; placeVehicle(car, X + 2.6, Z - 3.6, Math.PI / 2); group.add(car);
    // Bounds of the lot.
    solidBox(X - 19, Z - 17, X + 17, Z - 16); solidBox(X - 19, Z + 16, X + 17, Z + 17); solidBox(X - 19, Z - 17, X - 18, Z + 17); solidBox(X + 16, Z - 17, X + 17, Z + 17);
    solidBox(X + 1.6, Z - 5.9, X + 3.6, Z - 1.3, 1.5);
    // Earl on the porch of his shop, and a trucker buying ice.
    spotWith(group, spots, talkers, 'gasolinera', X - 5.2, Z + 1.6, -Math.PI / 2 - 0.2, 8306, { body: 'm', age: 'elderly', build: 'heavy', top: 'shirt', topColor: '#6b8fb5', bottom: 'jeans', hairStyle: 'short', hairColor: '#d8d4cc', extras: ['cap', 'mustache', 'glasses'] }, 'arms', 'smile', shadows, 2.0);
    extra(group, talkers, X - 6.6, Z - 3.4, Math.PI * 0.8, 8307, { body: 'f', build: 'athletic', top: 'tshirt', topColor: '#4a4a4a', extras: ['cap'] }, 'carry', 'neutral', shadows);
    lightPool(group, X + 1, Z, 5, '#fff3d6', 0.12);
  }
  const doors = [
    { x: 36, z: -1, label: 'Ir por la carretera a la gasolinera', to: { x: HWY.x - 2, z: HWY.z - 9, heading: 0 } },
    { x: HWY.x - 2, z: HWY.z - 12, label: 'Volver a Austin', to: { x: 33.5, z: -1, heading: -Math.PI / 2 } },
  ];

  // ---------------------------------------------------------- walkers
  const walk = (path: [number, number][], seed: number, speed: number, look = {}) => walkers.push(makeWalker(group, path.map(([x, z]) => ({ x, z })), seed, speed, look, shadows));
  walk([[-6, -40], [-6, 40]], 8401, 1.1, { extras: ['hat'] });
  walk([[6.4, 28], [6.4, -40]], 8402, 1.2);
  walk([[10, -2.8], [32, -2.8]], 8403, 1.0, { extras: ['bag'] });
  if (!low) {
    walk([[-5.4, 38], [-5.4, -38]], 8404, 0.9, { age: 'old' });
    walk([[11, -31], [25, -31]], 8405, 1.0, { age: 'child' });
    walk([[7, 4], [7, 28]], 8406, 1.3, { top: 'tshirt', bottom: 'shorts' });
  }

  return {
    group,
    bounds: { minX: -44, maxX: HWY.x + 18, minZ: -44, maxZ: 44 },
    solids,
    spawn: { x: 0, z: -26, heading: 0 },
    exit: { x: 0, z: -31 },
    spots,
    talkers,
    walkers,
    doors,
    ceilings: [{ x0: HWY.x - 3.5, x1: HWY.x + 5.5, z0: HWY.z - 6.5, z1: HWY.z + 6.5, y: 4.6 }, { x0: 9, x1: 27, z0: 13, z1: 27, y: 3.95 }, { x0: 17, x1: 31, z0: -24, z1: -14, y: 4.25 }],
    light: {
      sky: ['#5f9fd8', '#ffc98a'],
      fog: ['#f2d3a8', 80, 300],
      sun: { color: '#ffd29a', intensity: 2.6, at: [40, 30, -30] },
      hemi: ['#cfe3ff', '#c9a877', 1.1],
      exposure: 1.05,
    },
    animate(t, dt) {
      wheel.rotation.z = t * 0.12;
      gondolas.forEach(g => { g.rotation.z = -wheel.rotation.z; });
      blades.rotation.z = t * 1.4;
      smokePuffs.forEach((p, i) => { const k = ((t * 0.35 + i / smokePuffs.length) % 1); p.position.set(10.4 + k * 2.2, 3.6 + k * 5, 10.5 + Math.sin(t + i) * 0.3); p.scale.setScalar(0.6 + k * 2.2); });
      puffMat.opacity = 0.32;
      goatHeads.forEach((h, i) => { h.rotation.z = Math.max(0, Math.sin(t * 0.9 + i * 2)) * -0.9; });
      neon.forEach((m, i) => { m.emissiveIntensity = 1.5 + Math.sin(t * 3 + i * 1.7) * 0.25; });
      lamps.forEach((m, i) => { m.emissiveIntensity = 1.2 + Math.sin(t * 2 + i) * 0.1; });
      void dt;
    },
  };
};

export default build;
