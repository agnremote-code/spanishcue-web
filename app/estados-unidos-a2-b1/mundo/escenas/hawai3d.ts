// Estados Unidos 3D · Hawaii: Honolulu between the reef and the green valleys.
// Waikiki's sand with the surfboard rack and the ocean to the south, the
// promenade with its torches, the farmers' market under white canopies, the
// family restaurant on the sand to the west, the rain-forest trail to the
// waterfall in the valley, and (by the trail bus) the rim of Diamond Head.
import * as THREE from 'three';
import {
  addPalm, box, cylinder, extra, glow, ground, groundTexture, labelTexture, lightPool, makeCar, makeWalker,
  panel, placeVehicle, random, sign, solid, spotWith, streetLamp, tileTexture, umbrella, water, windowsTexture,
  type Box, type SceneBuilder, type SpotPlace, type Talker, type Walker,
} from '../../../mundo-3d/kit3d';

const CRATER = { x: 200, z: 0 };

const build: SceneBuilder = ({ low, shadows }) => {
  const group = new THREE.Group();
  const solids: Box[] = [];
  const spots: SpotPlace[] = [];
  const talkers: Talker[] = [];
  const walkers: Walker[] = [];
  const flames: THREE.Mesh[] = [];
  const lamps: THREE.MeshStandardMaterial[] = [];
  const rand = random(9419);
  const solidBox = (x0: number, z0: number, x1: number, z1: number, top?: number) => solids.push(top == null ? { x0, x1, z0, z1 } : { x0, x1, z0, z1, top });

  // ---------------------------------------------------------- ground
  const sand = groundTexture('#f1dfb4', ['#e2cc98', '#faecc9'], 61);
  const asphalt = groundTexture('#4b4d50', ['#3f4144', '#5a5c5f'], 62);
  const pavers = tileTexture('#e3d7c2', '#c8b9a0', 4);
  const lawn = groundTexture('#4f8f3a', ['#3f7a2e', '#62a548'], 63);
  const jungle = groundTexture('#3d6b2a', ['#2f5a20', '#4f7e36', '#5a4a30'], 64);
  ground(group, -44, -27, 44, -12, sand, '#ffffff', 8);
  const sea = water(group, -140, -140, 140, -27, '#1c9bb0', '#b8f4ff', -0.06);
  const reef = water(group, -60, -46, 60, -27.2, '#38c3c0', '#d8fff6', -0.055);
  const foam = new THREE.Mesh(new THREE.PlaneGeometry(120, 1.4), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.55, depthWrite: false }));
  foam.rotation.x = -Math.PI / 2; foam.position.set(0, 0.01, -27.2); group.add(foam);
  solidBox(-46, -46, 46, -27.6);
  ground(group, -44, -12, 44, -8, pavers, '#ffffff', 4, 0.01); // the promenade
  ground(group, -44, -8, 44, 0, asphalt, '#ffffff', 10, 0.012); // Kalākaua Avenue
  for (let x = -42; x < 44; x += 6) ground(group, x, -4.1, x + 3, -3.9, null, '#f2f2f2', 1, 0.02, 0.6);
  ground(group, -44, 0, 44, 3, pavers, '#f0e8da', 4, 0.01);
  ground(group, -44, 3, 6, 44, lawn, '#ffffff', 8, 0.005);
  ground(group, 6, 3, 44, 44, jungle, '#ffffff', 8, 0.006);

  // ---------------------------------------------------------- Diamond Head on the horizon, hotels along the beach
  {
    const head = new THREE.Mesh(new THREE.ConeGeometry(70, 30, 28, 1, true), solid('#8a8b5a', 1));
    head.position.set(150, 12, -40); head.scale.set(1, 1, 0.7); group.add(head);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(34, 6, 8, 28), solid('#7d7e50', 1)); rim.rotation.x = Math.PI / 2; rim.position.set(150, 27, -40); rim.scale.set(1, 0.7, 1); group.add(rim);
    const facade = windowsTexture('#efe7da', '#6b8ea8', '#ffe2a8', 6, 14, 91, 0.15);
    for (let i = 0; i < (low ? 4 : 7); i++) {
      const h = 24 + rand() * 30, x = -120 + i * 22;
      const tower = new THREE.Mesh(new THREE.BoxGeometry(12, h, 10), new THREE.MeshStandardMaterial({ map: facade, roughness: 0.6 }));
      tower.position.set(x, h / 2, 70 + rand() * 20); group.add(tower);
    }
    // Green ridges behind the city.
    for (let i = 0; i < 6; i++) { const ridge = new THREE.Mesh(new THREE.ConeGeometry(30 + i * 4, 40 + rand() * 20, 6), solid(i % 2 ? '#356b2a' : '#2f5f25', 1)); ridge.position.set(-60 + i * 30, 15, 95 + (i % 2) * 15); group.add(ridge); }
  }
  solidBox(-46, 44, 46, 46); solidBox(-46, -46, -44, 46); solidBox(44, -46, 46, 46);

  // ---------------------------------------------------------- the beach: palms, umbrellas, the surfboard rack
  for (let i = 0; i < (low ? 7 : 13); i++) {
    const x = -40 + i * (80 / (low ? 7 : 13)) + rand() * 2;
    if (x > -30 && x < -22) continue;
    addPalm(group, x, -10.8 + rand() * 0.6, 8 + rand() * 4, 950 + i);
    solidBox(x - 0.3, -11.1, x + 0.3, -10.3);
  }
  for (let i = 0; i < (low ? 3 : 6); i++) {
    const x = 18 + rand() * 22, z = -24 + rand() * 9;
    umbrella(group, x, z, ['#ff7a59', '#ffd23f', '#2ec4b6'][i % 3]); solidBox(x - 0.2, z - 0.2, x + 0.2, z + 0.2);
    extra(group, talkers, x + 1, z + 0.4, rand() * 6, 9310 + i, { top: 'tshirt', bottom: 'shorts' }, 'lie', 'sleepy', shadows);
  }
  // The rack of long boards, painted.
  const boardColors = ['#ffd23f', '#ff6b6b', '#4ecdc4', '#ffffff', '#ff9f1c', '#3a86ff'];
  const rack = new THREE.Group();
  for (const s of [-1.6, 1.6]) rack.add(box(0.12, 2.8, 0.12, solid('#7a5236', 0.8), s, 1.4, 0));
  for (let k = 0; k < 6; k++) {
    const board = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 2.6, 4, 10), solid(boardColors[k], 0.4));
    board.scale.set(1, 1, 0.18); board.rotation.z = Math.PI / 2; board.position.set(0, 0.4 + k * 0.42, 0.08); rack.add(board);
  }
  rack.position.set(4.6, 0, -17.2); rack.rotation.y = Math.PI / 2; group.add(rack); solidBox(4.2, -19.2, 5, -15.2);
  // Keoni with a board under his arm, ready to go.
  const keoni = spotWith(group, spots, talkers, 'surf', 9.4, -18.4, -Math.PI / 2 - 0.2, 9301, { body: 'm', age: 'adult', build: 'athletic', top: 'tshirt', topColor: '#1fa3b8', bottom: 'shorts', bottomColor: '#ffd23f', hairStyle: 'long', hairColor: '#1a120c' }, 'arms', 'laugh', shadows, 2.1);
  const board = new THREE.Mesh(new THREE.CapsuleGeometry(0.3, 2.4, 4, 10), solid('#ff6b6b', 0.4));
  board.scale.set(1, 1, 0.18); board.position.set(0.55, 1.5, 0.2); keoni.person.root.add(board);
  // The turtle resting on the sand (rope circle around it, as the volunteers do).
  const turtle = new THREE.Group();
  const shell = new THREE.Mesh(new THREE.SphereGeometry(0.55, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), solid('#5b5a3a', 0.6)); shell.scale.set(1, 0.45, 1.25); turtle.add(shell);
  const tHead = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), solid('#6f7a5a', 0.7)); tHead.position.set(0, 0.08, 0.78); turtle.add(tHead);
  for (const [fx, fz, r] of [[-0.55, 0.35, 0.6], [0.55, 0.35, -0.6], [-0.4, -0.5, 0.3], [0.4, -0.5, -0.3]]) { const fl = box(0.45, 0.04, 0.18, solid('#6f7a5a', 0.7), fx, 0.04, fz, false); fl.rotation.y = r; turtle.add(fl); }
  turtle.position.set(3, 0, -22.6); turtle.rotation.y = 2.4; group.add(turtle);
  for (let k = 0; k < 8; k++) { const a = (k / 8) * Math.PI * 2; group.add(cylinder(0.03, 0.03, 0.7, solid('#e8e2d0', 0.8), 3 + Math.cos(a) * 2, 0.35, -22.6 + Math.sin(a) * 2, 5)); }
  solidBox(1, -24.6, 5, -20.6);
  // Surfers on the water.
  const surfers: THREE.Object3D[] = [];
  for (let i = 0; i < (low ? 2 : 4); i++) {
    const s = new THREE.Group();
    const b = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 2.2, 4, 8), solid(boardColors[i + 1], 0.4)); b.scale.set(1, 1, 0.2); b.rotation.x = Math.PI / 2; b.rotation.z = Math.PI / 2; s.add(b);
    const body = cylinder(0.18, 0.2, 1.1, solid('#1a1a1a', 0.6), 0, 0.7, 0, 8); s.add(body);
    s.position.set(-20 + i * 14, 0, -38 - i * 3); group.add(s); surfers.push(s);
  }

  // ---------------------------------------------------------- the promenade: torches and lamps
  const torch = (x: number, z: number) => {
    group.add(cylinder(0.07, 0.09, 2.2, solid('#6b4a2e', 0.8), x, 1.1, z, 6));
    group.add(cylinder(0.14, 0.08, 0.3, solid('#3a2a1a', 0.7), x, 2.3, z, 8));
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.42, 8), glow('#ffa53a', 2.2)); flame.position.set(x, 2.62, z); group.add(flame); flames.push(flame);
    solidBox(x - 0.12, z - 0.12, x + 0.12, z + 0.12);
  };
  for (let x = -38; x <= 38; x += 8) torch(x, -8.6);
  for (let x = -36; x <= 24; x += 12) { streetLamp(group, x, 0.6, lamps, 5, '#ffe2b0'); solidBox(x - 0.15, 0.45, x + 0.15, 0.75); }
  sign(group, 'WAIKIKI', 0, 5.4, -12.2, Math.PI, 4.6, '#1fa3b8', '#ffffff');
  group.add(box(0.15, 5.2, 0.15, solid('#2a2a2a'), -2.2, 2.6, -12.2)); group.add(box(0.15, 5.2, 0.15, solid('#2a2a2a'), 2.2, 2.6, -12.2));
  solidBox(-2.4, -12.4, -2, -12); solidBox(2, -12.4, 2.4, -12);
  // The Duke statue's surfboard-shaped cousin: a tall board planted in the sand with leis.
  group.add(box(0.7, 3.2, 0.14, solid('#f6c85f', 0.4), -6, 1.6, -13.4)); solidBox(-6.4, -13.6, -5.6, -13.2);
  for (let k = 0; k < 3; k++) { const lei = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.06, 6, 14), solid(['#ff5f8a', '#ffd23f', '#ffffff'][k], 0.6)); lei.position.set(-6, 2.6 - k * 0.25, -13.25); group.add(lei); }
  // Cars on the avenue.
  [['sedan', '#ffffff', -24, -6, 0], ['coupe', '#ff6b6b', 10, -2, Math.PI], ['van', '#ffd23f', 28, -6, 0]].forEach(([kind, color, x, z, h], i) => {
    if (low && i === 2) return;
    const car = makeCar(kind as 'sedan', color as string).group; placeVehicle(car, x as number, z as number, h as number); group.add(car);
    solidBox((x as number) - 2.3, (z as number) - 0.95, (x as number) + 2.3, (z as number) + 0.95, 1.5);
  });

  // ---------------------------------------------------------- the farmers' market (north-west)
  {
    const fruitColors = ['#ffd23f', '#ff9f1c', '#e63946', '#7bc043', '#8e44ad', '#f4a261'];
    const stall = (x: number, z: number, label: string, i: number) => {
      for (const [dx, dz] of [[-1.8, -1.4], [1.8, -1.4], [-1.8, 1.4], [1.8, 1.4]]) group.add(cylinder(0.04, 0.04, 2.6, solid('#dcdcdc', 0.4, 0.5), x + dx, 1.3, z + dz, 6));
      const roof = new THREE.Mesh(new THREE.ConeGeometry(2.9, 0.9, 4), solid('#ffffff', 0.7)); roof.rotation.y = Math.PI / 4; roof.scale.set(1, 1, 0.8); roof.position.set(x, 3.05, z); group.add(roof);
      group.add(box(3.4, 0.08, 1.0, solid('#8a5a36', 0.8), x, 0.9, z - 0.9));
      group.add(box(3.4, 0.86, 0.06, solid('#f2efe9', 0.8), x, 0.45, z - 1.38, false));
      for (let k = 0; k < 12; k++) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.11 + (k % 3) * 0.03, 8, 6), solid(fruitColors[(k + i) % 6], 0.6)); f.position.set(x - 1.4 + (k % 6) * 0.55, 1.02, z - 1.1 + Math.floor(k / 6) * 0.4); group.add(f); }
      panel(group, labelTexture(label, '#2a6f4e', '#ffffff', { w: 512, h: 128 }), x, 2.35, z - 1.42, Math.PI, 2.6, 0.62);
      solidBox(x - 1.9, z - 1.5, x + 1.9, z - 0.4, 0.95);
      for (const [dx, dz] of [[-1.8, 1.4], [1.8, 1.4]]) solidBox(x + dx - 0.1, z + dz - 0.1, x + dx + 0.1, z + dz + 0.1);
    };
    const names = ['KONA COFFEE', 'FLOWERS · LEI', 'HONEY', 'POKE BOWLS', 'MALIA’S FARM'];
    const xs = [-38, -32, -26, -20, -14];
    xs.forEach((x, i) => stall(x, 12, names[i], i));
    // Malia's stall: pineapples, papayas and a bunch of bananas hanging.
    for (let k = 0; k < 5; k++) {
      const p = new THREE.Group();
      p.add(new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8), solid('#d9a03a', 0.7)).translateY(0)); (p.children[0] as THREE.Mesh).scale.set(1, 1.35, 1);
      for (let l = 0; l < 5; l++) { const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.32, 4), solid('#3f7a2e', 0.7)); leaf.position.y = 0.3; leaf.rotation.z = (l - 2) * 0.35; p.add(leaf); }
      p.position.set(-15.4 + k * 0.7, 1.15, 10.9); group.add(p);
    }
    for (let k = 0; k < 6; k++) { const b = new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 0.28, 3, 6), solid('#f2d13a', 0.6)); b.position.set(-12.5 + k * 0.08, 2.2 - Math.abs(k - 2.5) * 0.04, 11.0); b.rotation.z = 0.5; group.add(b); }
    // Lei flowers hanging at the flower stall.
    for (let k = 0; k < 5; k++) { const lei = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.05, 6, 14), solid(['#ff5f8a', '#ffd23f', '#ffffff', '#c77dff', '#ff9f1c'][k], 0.6)); lei.position.set(-33.4 + k * 0.7, 2.1, 10.6); group.add(lei); }
    // Shoppers and a ukulele player.
    extra(group, talkers, -26, 9.0, Math.PI, 9320, { body: 'f', age: 'old', extras: ['bag'] }, 'stand', 'smile', shadows);
    extra(group, talkers, -31.5, 9.4, 0.3, 9321, { top: 'shirt', topColor: '#e76f51' }, 'phone', 'neutral', shadows);
    extra(group, talkers, -38, 9.6, Math.PI, 9322, { body: 'f', age: 'young', top: 'dress', topColor: '#ffd23f' }, 'stand', 'laugh', shadows);
    extra(group, talkers, -22.5, 17, Math.PI, 9323, { body: 'm', age: 'elderly', top: 'shirt', topColor: '#2a9d8f', extras: ['hat'] }, 'guitar', 'smile', shadows);
    // Picnic tables on the lawn behind.
    for (const [tx, tz] of [[-34, 20], [-28, 21], [-16, 20]] as const) { group.add(box(2.6, 0.1, 1, solid('#9b6b45', 0.8), tx, 0.78, tz)); for (const s of [-0.75, 0.75]) group.add(box(2.6, 0.08, 0.3, solid('#9b6b45', 0.8), tx, 0.45, tz + s, false)); solidBox(tx - 1.3, tz - 1, tx + 1.3, tz + 1, 0.8); }
    for (const [i, [tx, tz]] of ([[-40, 30], [-30, 34], [-18, 30], [-6, 34], [-36, 40]] as const).entries()) { const tree = new THREE.Group(); tree.add(cylinder(0.25, 0.35, 3, solid('#6b4a2e'), 0, 1.5, 0, 8)); const c = new THREE.Mesh(new THREE.SphereGeometry(3.2, 10, 8), solid(i % 2 ? '#3e8a35' : '#4f9a40', 0.9)); c.scale.y = 0.55; c.position.y = 3.6; tree.add(c); tree.position.set(tx, 0, tz); group.add(tree); solidBox(tx - 0.4, tz - 0.4, tx + 0.4, tz + 0.4); }
  }
  // Malia behind her table, the shopper (you) in front of it.
  spotWith(group, spots, talkers, 'mercado', -14, 8.6, 0, 9302, { body: 'f', age: 'adult', top: 'dress', topColor: '#f28482', hairStyle: 'long', hairColor: '#1a120c', extras: ['earrings'] }, 'stand', 'smile', shadows, 3.6);

  // ---------------------------------------------------------- the restaurant on the sand (west)
  {
    const R = { x: -34, z: -18 };
    const deck = tileTexture('#b07a4f', '#8b5a36', 8);
    ground(group, R.x - 8, R.z - 6, R.x + 8, R.z + 6, deck, '#ffffff', 2, 0.03);
    // A thatched roof on poles over the bar, open on every side.
    for (const dx of [-7, 7]) for (const dz of [-5, 5]) { group.add(cylinder(0.14, 0.16, 3.4, solid('#6b4a2e', 0.9), R.x + dx, 1.7, R.z + dz + 2, 8)); solidBox(R.x + dx - 0.18, R.z + dz + 1.82, R.x + dx + 0.18, R.z + dz + 2.18); }
    const thatch = new THREE.Mesh(new THREE.ConeGeometry(11, 2.6, 4), solid('#c8a46a', 1)); thatch.rotation.y = Math.PI / 4; thatch.scale.set(1, 1, 0.72); thatch.position.set(R.x, 4.6, R.z + 2); group.add(thatch);
    group.add(box(6, 1.1, 1, solid('#6b4a2e', 0.8), R.x, 0.55, R.z + 5)); solidBox(R.x - 3, R.z + 4.5, R.x + 3, R.z + 5.5);
    for (let k = 0; k < 8; k++) group.add(cylinder(0.05, 0.05, 0.3, glow(['#ff9f1c', '#2ec4b6', '#ff5f8a'][k % 3], 0.8), R.x - 2.6 + k * 0.75, 1.25, R.z + 5.2, 6));
    sign(group, 'LEILANI’S · OCEAN TABLE', R.x, 3.5, R.z + 7.1, 0, 6, '#1d3557', '#ffd6a5');
    // Tables on the sand with tiki torches.
    for (const [tx, tz] of [[-39, -20], [-34, -22.5], [-29, -20], [-38, -14], [-30, -14.5]] as const) {
      group.add(cylinder(0.75, 0.75, 0.08, solid('#f2efe9', 0.6), tx, 0.76, tz, 18)); group.add(cylinder(0.06, 0.06, 0.76, solid('#6b4a2e'), tx, 0.38, tz, 6));
      solidBox(tx - 0.8, tz - 0.8, tx + 0.8, tz + 0.8, 0.8);
    }
    for (const [tx, tz] of [[-41, -24], [-27, -24], [-41, -12], [-27, -11.5]] as const) torch(tx, tz);
    extra(group, talkers, -39, -21.3, 0, 9330, { body: 'f', age: 'adult', top: 'dress', topColor: '#ff5f8a' }, 'sit', 'laugh', shadows);
    extra(group, talkers, -39, -18.7, Math.PI, 9331, { body: 'm', top: 'shirt', topColor: '#ffffff' }, 'sit', 'smile', shadows);
    extra(group, talkers, -30.3, -14.5, Math.PI / 2, 9332, { age: 'old' }, 'sit', 'smile', shadows);
    // The hula dancer by the bar.
    extra(group, talkers, -31, -13, Math.PI * 0.85, 9333, { body: 'f', age: 'young', top: 'tshirt', topColor: '#2ec4b6', bottom: 'skirt', bottomColor: '#c8a46a', hairStyle: 'long', hairColor: '#1a120c', extras: ['earrings'] }, 'dance', 'smile', shadows);
    // The conch shell on its post.
    group.add(box(0.2, 1.1, 0.2, solid('#6b4a2e'), R.x + 4.5, 0.55, R.z - 4)); solidBox(R.x + 4.3, R.z - 4.2, R.x + 4.7, R.z - 3.8);
    const conch = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.5, 10), solid('#f6d6c6', 0.4)); conch.rotation.z = Math.PI / 2; conch.position.set(R.x + 4.5, 1.2, R.z - 4); group.add(conch);
    lightPool(group, R.x, R.z, 7, '#ffbf6b', 0.14);
  }
  spotWith(group, spots, talkers, 'restaurante', -27.6, -18.2, -Math.PI / 2 + 0.2, 9303, { body: 'f', age: 'adult', top: 'dress', topColor: '#1d3557', hairStyle: 'bun', hairColor: '#2a1a12', extras: ['earrings'] }, 'wave', 'smile', shadows, 2.1);

  // ---------------------------------------------------------- the rain-forest trail (north-east valley)
  const leafMats = [solid('#2f6b2a', 0.8), solid('#3f8a35', 0.8), solid('#24581f', 0.8)];
  const bigLeaves = (x: number, z: number, s: number, i: number) => {
    const plant = new THREE.Group();
    for (let k = 0; k < 6; k++) {
      const leaf = new THREE.Mesh(new THREE.CircleGeometry(0.9 * s, 10), leafMats[(k + i) % 3]);
      leaf.scale.set(0.55, 1, 1); leaf.position.set(0, 0.9 * s, 0);
      const holder = new THREE.Group(); holder.rotation.y = (k / 6) * Math.PI * 2 + i; leaf.rotation.x = -0.9; leaf.position.z = 0.6 * s; holder.add(leaf); plant.add(holder);
    }
    plant.position.set(x, 0, z); group.add(plant);
  };
  const bamboo = (x: number, z: number, seed: number) => {
    const r = random(seed);
    for (let k = 0; k < 6; k++) { const h = 6 + r() * 5; const c = cylinder(0.07, 0.08, h, solid(k % 2 ? '#8fae4a' : '#a7c25a', 0.6), x + (r() - 0.5) * 1.2, h / 2, z + (r() - 0.5) * 1.2, 6); c.rotation.z = (r() - 0.5) * 0.12; group.add(c); }
    solidBox(x - 0.7, z - 0.7, x + 0.7, z + 0.7);
  };
  {
    // The trail: a dirt path winding north from the avenue to the waterfall.
    const path: [number, number][] = [[14, 3], [16, 10], [12, 16], [16, 22], [22, 26], [26, 30]];
    for (let i = 0; i < path.length - 1; i++) {
      const [ax, az] = path[i], [bx, bz] = path[i + 1];
      const len = Math.hypot(bx - ax, bz - az);
      const seg = new THREE.Mesh(new THREE.PlaneGeometry(2.6, len + 1.2), new THREE.MeshStandardMaterial({ color: '#7a5a3a', roughness: 1 }));
      seg.rotation.x = -Math.PI / 2; seg.rotation.z = -Math.atan2(bx - ax, bz - az); seg.position.set((ax + bx) / 2, 0.02, (az + bz) / 2); group.add(seg);
    }
    sign(group, 'MĀNOA FALLS TRAIL', 10.6, 2.2, 4.2, 0, 3.4, '#5a3a22', '#f4e7c8');
    group.add(box(0.15, 2.2, 0.15, solid('#5a3a22'), 9, 1.1, 4.2)); group.add(box(0.15, 2.2, 0.15, solid('#5a3a22'), 12.2, 1.1, 4.2));
    solidBox(8.8, 4, 9.2, 4.4); solidBox(12, 4, 12.4, 4.4);
    // Plants on both sides of the trail, bamboo groves and tall trees.
    const r = random(9555);
    let placed = 0;
    for (let i = 0; i < 160 && placed < (low ? 40 : 80); i++) {
      const x = 7 + r() * 36, z = 5 + r() * 38;
      const nearPath = path.some(([px, pz], k) => { if (k === path.length - 1) return false; const [qx, qz] = path[k + 1]; const t = Math.max(0, Math.min(1, ((x - px) * (qx - px) + (z - pz) * (qz - pz)) / ((qx - px) ** 2 + (qz - pz) ** 2))); return Math.hypot(x - (px + t * (qx - px)), z - (pz + t * (qz - pz))) < 3.4; });
      if (nearPath || (x > 18 && z > 20)) continue;
      bigLeaves(x, z, 0.8 + r() * 1.2, i); placed++;
    }
    for (const [x, z, s] of [[10, 12, 1], [19, 14, 2], [9, 22, 3], [20, 19, 4], [14, 30, 5], [40, 24, 6]] as const) bamboo(x, z, 9600 + s);
    for (const [i, [x, z]] of ([[8, 8], [20, 8], [8, 18], [24, 14], [12, 26], [36, 18], [40, 30], [28, 12]] as const).entries()) {
      const h = 9 + (i % 3) * 3;
      group.add(cylinder(0.3, 0.45, h, solid('#6b5a44', 0.9), x, h / 2, z, 8));
      const crown = new THREE.Mesh(new THREE.SphereGeometry(3.6, 10, 8), leafMats[i % 3]); crown.scale.y = 0.6; crown.position.set(x, h + 0.6, z); group.add(crown);
      solidBox(x - 0.5, z - 0.5, x + 0.5, z + 0.5);
    }
    // Walls of green so the valley reads as closed.
    solidBox(6, 3, 6.4, 44); solidBox(6, 42, 44, 44);
    // The waterfall: a cliff, falling water and a pool.
    const cliff = new THREE.Mesh(new THREE.BoxGeometry(24, 26, 6), solid('#6f6a58', 0.95)); cliff.position.set(30, 13, 41); group.add(cliff);
    for (let k = 0; k < 8; k++) { if (k === 3 || k === 4) continue; const moss = new THREE.Mesh(new THREE.SphereGeometry(2 + (k % 3), 8, 6), leafMats[k % 3]); moss.scale.set(1.4, 0.5, 0.4); moss.position.set(20 + k * 3, 4 + (k % 4) * 5, 37.9); group.add(moss); }
    solidBox(18, 38, 42, 44);
    const fallTex = groundTexture('#d8f4ff', ['#ffffff', '#a8dcf0', '#eafaff'], 65, 128, 900); fallTex.repeat.set(1, 3);
    const fall = new THREE.Mesh(new THREE.PlaneGeometry(4, 24), new THREE.MeshBasicMaterial({ map: fallTex, transparent: true, opacity: 0.9, depthWrite: false }));
    fall.position.set(30, 12, 37.9); fall.rotation.y = Math.PI; group.add(fall);
    const pool = water(group, 24, 31, 36, 37.8, '#2a7f86', '#bff0f0', 0.0);
    const spray = new THREE.Mesh(new THREE.SphereGeometry(2.2, 12, 8), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.25, depthWrite: false })); spray.scale.y = 0.4; spray.position.set(30, 0.4, 37); group.add(spray);
    solidBox(24, 31.4, 36, 38);
    for (let k = 0; k < 7; k++) { const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.3 + (k % 3) * 0.15, 0), solid('#5a5a4a', 0.9)); rock.position.set(23.6 + k * 2, 0.25, 31 + (k % 2) * 0.4); group.add(rock); }
    group.userData.fallTex = fallTex; group.userData.pool = pool;
    // A fallen-log bench and a couple of hikers resting.
    group.add(cylinder(0.35, 0.35, 3.4, solid('#6b4a2e', 0.9), 20, 0.35, 30, 10).rotateZ(Math.PI / 2)); solidBox(18.3, 29.6, 21.7, 30.4, 0.7);
    extra(group, talkers, 19.4, 30.9, Math.PI * 0.8, 9340, { top: 'tshirt', topColor: '#e76f51', extras: ['bag'] }, 'sit', 'smile', shadows);
    extra(group, talkers, 37.4, 29.4, -2.2, 9341, { body: 'f', top: 'jacket', topColor: '#3a86ff' }, 'phone', 'surprised', shadows);
  }
  spotWith(group, spots, talkers, 'sendero', 30.6, 28.2, Math.PI / 2 + 0.3, 9304, { body: 'm', age: 'young', top: 'tshirt', topColor: '#7a9a3a', bottom: 'shorts', bottomColor: '#5a4632', hairStyle: 'bun', hairColor: '#1a120c', extras: ['backpack'] }, 'point', 'smile', shadows, 2.0);

  // ---------------------------------------------------------- the trail bus and the crater rim
  group.add(box(3.2, 0.12, 1.4, solid('#1d3557', 0.6), 36, 2.6, 1.6)); group.add(box(0.1, 2.6, 0.1, solid('#1d3557'), 34.6, 1.3, 2.1)); group.add(box(0.1, 2.6, 0.1, solid('#1d3557'), 37.4, 1.3, 2.1));
  solidBox(34.5, 2, 34.7, 2.2); solidBox(37.3, 2, 37.5, 2.2);
  sign(group, 'BUS · DIAMOND HEAD', 36, 3.1, 1.0, Math.PI, 3.2, '#1d3557', '#ffd166');
  const doors = [
    { x: 36, z: 0.4, label: 'Tomar el autobús al cráter Diamond Head', to: { x: CRATER.x - 6, z: CRATER.z - 9, heading: 0 } },
    { x: CRATER.x - 9, z: CRATER.z - 11, label: 'Volver a Waikiki', to: { x: 36, z: -1.2, heading: Math.PI } },
  ];
  {
    const X = CRATER.x, Z = CRATER.z;
    // The concrete lookout on the rim, with the old fire-control station behind.
    ground(group, X - 12, Z - 14, X + 12, Z + 8, tileTexture('#cfc6b4', '#b0a690', 4), '#ffffff', 3, 0.01);
    group.add(box(26, 60, 24, solid('#7d7a55', 1), X, -30.05, Z - 3, false));
    const bunker = new THREE.Group();
    bunker.add(box(8, 3, 5, solid('#9a9580', 0.95), 0, 1.5, 0));
    bunker.add(box(6, 0.4, 0.2, solid('#1b1b1b', 0.9), 0, 2, -2.51, false));
    bunker.position.set(X - 4, 0, Z - 12); group.add(bunker); solidBox(X - 8, Z - 14.5, X, Z - 9.5);
    const railing = solid('#3a3a3a', 0.5, 0.5);
    group.add(box(24, 0.06, 0.06, railing, X, 1.0, Z + 7.9, false)); group.add(box(0.06, 0.06, 22, railing, X + 11.9, 1.0, Z - 3, false));
    for (let i = 0; i <= 12; i++) { group.add(box(0.05, 1.0, 0.05, railing, X - 12 + i * 2, 0.5, Z + 7.9, false)); group.add(box(0.05, 1.0, 0.05, railing, X + 11.9, 0.5, Z - 14 + i * 1.83, false)); }
    solidBox(X - 13, Z + 7.7, X + 13, Z + 9); solidBox(X + 11.7, Z - 15, X + 13, Z + 9); solidBox(X - 13, Z - 15, X - 11.8, Z + 9); solidBox(X - 13, Z - 15.4, X + 13, Z - 14.2);
    // Below to the north: the crater bowl. Beyond the railing to the east: Waikiki and the ocean.
    const bowl = new THREE.Mesh(new THREE.CircleGeometry(60, 32), solid('#6f8a4a', 1)); bowl.rotation.x = -Math.PI / 2; bowl.position.set(X - 10, -40, Z + 70); group.add(bowl);
    const rimRing = new THREE.Mesh(new THREE.TorusGeometry(62, 8, 8, 36), solid('#8a8656', 1)); rimRing.rotation.x = Math.PI / 2; rimRing.scale.set(1, 1, 3); rimRing.position.set(X - 10, -12, Z + 70); group.add(rimRing);
    const ocean = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), new THREE.MeshStandardMaterial({ color: '#1c8fb0', roughness: 0.25, metalness: 0.2 })); ocean.rotation.x = -Math.PI / 2; ocean.position.set(X + 300, -34, Z - 120); group.add(ocean);
    const city = new THREE.Group();
    for (let i = 0; i < (low ? 40 : 90); i++) { const h = 6 + rand() * 30; const b = new THREE.Mesh(new THREE.BoxGeometry(4 + rand() * 3, h, 4 + rand() * 3), solid(rand() < 0.5 ? '#eae2d4' : '#d4dce4', 0.6)); b.position.set(70 + rand() * 120, -34 + h / 2, -30 - rand() * 60); city.add(b); }
    const shore = new THREE.Mesh(new THREE.PlaneGeometry(200, 60), solid('#c9b98e', 1)); shore.rotation.x = -Math.PI / 2; shore.position.set(130, -33.9, -60); city.add(shore);
    city.position.set(X, 0, Z); group.add(city);
    // A distant humpback whale breaching (shown and hidden in animate).
    const whale = new THREE.Mesh(new THREE.CapsuleGeometry(1.6, 6, 4, 10), solid('#2a3440', 0.6)); whale.position.set(X + 200, -36, Z - 140); whale.rotation.z = 1.1; group.add(whale); group.userData.whale = whale;
    spotWith(group, spots, talkers, 'crater', X + 4, Z + 2, Math.PI, 9305, { body: 'f', age: 'adult', top: 'uniform', topColor: '#6b7a4a', bottom: 'pants', bottomColor: '#5a4a32', hairStyle: 'braids', hairColor: '#1a120c', extras: ['hat'] }, 'point', 'smile', shadows, 2.0);
    extra(group, talkers, X + 2, Z + 6.6, 0, 9306, { top: 'tshirt', bottom: 'shorts' }, 'phone', 'smile', shadows);
    extra(group, talkers, X - 3, Z + 6.8, 0.2, 9307, { body: 'f', age: 'child' }, 'point', 'surprised', shadows);
    sign(group, 'LĒʻAHI · DIAMOND HEAD SUMMIT · 232 m', X - 4, 3.6, Z - 9.48, 0, 6, '#5a4a32', '#f4e7c8');
  }

  // ---------------------------------------------------------- walkers
  const walk = (path: [number, number][], seed: number, speed: number, look = {}) => walkers.push(makeWalker(group, path.map(([x, z]) => ({ x, z })), seed, speed, look, shadows));
  walk([[-42, -10], [42, -10]], 9401, 1.1, { top: 'tshirt', bottom: 'shorts' });
  walk([[40, 1.8], [-40, 1.8]], 9402, 1.2, { extras: ['bag'] });
  walk([[-20, -14.5], [16, -14.5]], 9403, 0.9, { top: 'tshirt', bottom: 'shorts' });
  if (!low) {
    walk([[-38, 6.8], [-8, 6.8]], 9404, 0.8, { age: 'old' });
    walk([[14, 3.5], [16, 10], [12, 16], [16, 22]], 9405, 1.0, { extras: ['bag'] });
    walk([[42, -12.8], [-18, -12.8]], 9406, 1.3, { body: 'f' });
  }

  const fallTex = group.userData.fallTex as THREE.Texture;
  const pool = group.userData.pool as THREE.Texture;
  const whale = group.userData.whale as THREE.Mesh;
  return {
    group,
    bounds: { minX: -44, maxX: CRATER.x + 13, minZ: -44, maxZ: 44 },
    solids,
    spawn: { x: 0, z: -3.6, heading: Math.PI },
    exit: { x: 0, z: 2 },
    spots,
    talkers,
    walkers,
    doors,
    light: {
      sky: ['#5fb4e8', '#ffe1b8'],
      fog: ['#cfe8ee', 80, 300],
      sun: { color: '#fff0cf', intensity: 2.5, at: [30, 34, -40] },
      hemi: ['#d6f0ff', '#8fae6a', 1.15],
      exposure: 1.05,
    },
    animate(t, dt) {
      sea.offset.x = (sea.offset.x + dt * 0.01) % 1; sea.offset.y = Math.sin(t * 0.3) * 0.03;
      reef.offset.y = (reef.offset.y + dt * 0.02) % 1;
      foam.position.z = -27.2 + Math.sin(t * 0.8) * 0.5;
      (foam.material as THREE.MeshBasicMaterial).opacity = 0.35 + Math.sin(t * 0.8) * 0.2;
      fallTex.offset.y = (fallTex.offset.y + dt * 1.2) % 1;
      pool.offset.x = (pool.offset.x + dt * 0.05) % 1;
      surfers.forEach((s, i) => { s.position.y = Math.sin(t * 1.3 + i) * 0.15; s.position.x = -20 + i * 14 + Math.sin(t * 0.2 + i) * 4; });
      flames.forEach((f, i) => { const k = 1 + Math.sin(t * 9 + i * 1.3) * 0.12; f.scale.set(k, 1 + Math.sin(t * 7 + i) * 0.18, k); });
      lamps.forEach((m, i) => { m.emissiveIntensity = 1.2 + Math.sin(t * 2 + i) * 0.1; });
      const breach = (t % 14) / 14; whale.visible = breach < 0.18; whale.position.y = -36 + Math.sin(breach / 0.18 * Math.PI) * 5;
    },
  };
};

export default build;
