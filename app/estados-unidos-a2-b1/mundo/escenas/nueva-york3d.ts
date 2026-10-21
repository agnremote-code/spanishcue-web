// Estados Unidos 3D · Nueva York: a corner of Manhattan in autumn. An avenue
// with cast-iron shop fronts and fire escapes, a cross street with a bagel
// café, the edge of Central Park, and two places reached through doors: the
// subway platform below the street and a rooftop with beehives high above it.
import * as THREE from 'three';
import { animateAnimal, createAnimal, setAnimalPose, type Animal } from '../../../noche-abierta/animals3d';
import {
  addBench, box, cylinder, extra, glow, ground, groundTexture, labelTexture, lightPool, makeCar, makeTalker, makeWalker,
  panel, placeVehicle, random, sign, solid, spotWith, streetLamp, tileTexture, umbrella, windowsTexture,
  type Box, type SceneBuilder, type SpotPlace, type Talker, type Walker,
} from '../../../mundo-3d/kit3d';

// The two places behind doors live far from the streets, out of sight.
const PLATFORM = { x: 200, z: 0 };
const ROOF = { x: -200, z: 0 };

const build: SceneBuilder = ({ low, shadows }) => {
  const group = new THREE.Group();
  const solids: Box[] = [];
  const spots: SpotPlace[] = [];
  const talkers: Talker[] = [];
  const walkers: Walker[] = [];
  const lamps: THREE.MeshStandardMaterial[] = [];
  const animals: Animal[] = [];
  const rand = random(512);
  const solidBox = (x0: number, z0: number, x1: number, z1: number, top?: number) => solids.push(top == null ? { x0, x1, z0, z1 } : { x0, x1, z0, z1, top });

  // ---------------------------------------------------------- street level
  const asphalt = groundTexture('#3f4247', ['#34373b', '#4b4e53'], 21);
  const sidewalk = tileTexture('#b9b4ab', '#9d978d', 4);
  const grass = groundTexture('#5f8a43', ['#4f7838', '#73a052', '#a07b3c'], 22);
  ground(group, -32, -32, 30, 36, sidewalk, '#ffffff', 3);
  ground(group, 8, -32, 15, 36, asphalt, '#ffffff', 8, 0.01);   // the avenue
  ground(group, -32, -11, 30, -5, asphalt, '#ffffff', 8, 0.012); // the cross street
  for (let z = -10.5; z <= -5.5; z += 1) ground(group, 3.2, z - 0.25, 7.8, z + 0.25, null, '#e9e6df', 1, 0.02); // crosswalk
  for (let x = 8.5; x <= 14.5; x += 1) ground(group, x - 0.25, -15.2, x + 0.25, -11.2, null, '#e9e6df', 1, 0.02);
  ground(group, -32, 6, 4, 36, grass, '#ffffff', 6, 0.015);
  // Fallen leaves on the park grass.
  const leafMat = [solid('#c4552f', 0.9), solid('#e0a03a', 0.9), solid('#a13d2d', 0.9)];
  const leafGeo = new THREE.PlaneGeometry(0.22, 0.16);
  for (let i = 0; i < (low ? 60 : 160); i++) { const l = new THREE.Mesh(leafGeo, leafMat[i % 3]); l.rotation.set(-Math.PI / 2, 0, rand() * 6); l.position.set(-31 + rand() * 34, 0.03, 7 + rand() * 28); group.add(l); }

  // Buildings: tall blocks with windows, fire escapes on the brick ones.
  const brick = windowsTexture('#8a4b3a', '#2b3440', '#ffd99a', 3, 4, 31, 0.15);
  const stone = windowsTexture('#c9bfae', '#2d3a46', '#ffe3a8', 4, 5, 32, 0.12);
  const castIron = windowsTexture('#d8d2c4', '#3a4652', '#ffe9b8', 3, 3, 33, 0.2);
  const tower = (x0: number, z0: number, x1: number, z1: number, h: number, tex: THREE.Texture, tint = '#ffffff', solidIt = true) => {
    const mats = [x1 - x0, z1 - z0].map(len => { const t = tex.clone(); t.needsUpdate = true; t.repeat.set(Math.max(1, Math.round(len / 4)), Math.max(1, Math.round(h / 4))); return new THREE.MeshStandardMaterial({ map: t, color: tint, roughness: 0.85 }); });
    const roof = solid('#55504a', 0.95);
    const m = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, h, z1 - z0), [mats[1], mats[1], roof, roof, mats[0], mats[0]]);
    m.position.set((x0 + x1) / 2, h / 2, (z0 + z1) / 2); m.castShadow = shadows; m.receiveShadow = true; group.add(m);
    // A water tank on the roof of the lower ones: very New York.
    if (h < 26 && rand() < 0.6) {
      const tx = x0 + 2 + rand() * (x1 - x0 - 4), tz = z0 + 2 + rand() * (z1 - z0 - 4);
      for (const [dx, dz] of [[-0.8, -0.8], [0.8, -0.8], [-0.8, 0.8], [0.8, 0.8]]) group.add(cylinder(0.08, 0.08, 1.6, solid('#2a2a2a'), tx + dx, h + 0.8, tz + dz, 5));
      group.add(cylinder(1.2, 1.2, 2.2, solid('#7a5a3c', 0.95), tx, h + 2.7, tz, 12));
      const cap = new THREE.Mesh(new THREE.ConeGeometry(1.3, 0.8, 12), solid('#4a3a2c', 0.9)); cap.position.set(tx, h + 4.2, tz); group.add(cap);
    }
    if (solidIt) solidBox(x0, z0, x1, z1);
    return m;
  };
  const fireEscape = (x: number, z0: number, z1: number, floors: number, side: 1 | -1) => {
    const iron = solid('#1d1f22', 0.6, 0.5);
    for (let f = 1; f <= floors; f++) {
      const y = f * 3.4;
      group.add(box(0.9, 0.06, z1 - z0, iron, x + side * 0.45, y, (z0 + z1) / 2, false));
      group.add(box(0.04, 0.9, z1 - z0, iron, x + side * 0.88, y + 0.45, (z0 + z1) / 2, false));
      const ladder = box(0.5, 0.05, 3.9, iron, x + side * 0.5, y - 1.7, (z0 + z1) / 2, false); ladder.rotation.x = f % 2 ? 0.9 : -0.9; group.add(ladder);
    }
  };
  // Perimeter: the canyon walls of the city.
  tower(-46, -46, -32, -20, 34, stone, '#e8e2d6'); tower(-46, -20, -32, 6, 22, brick); tower(-46, 6, -32, 50, 40, stone, '#d8d4cc');
  tower(30, -46, 46, -20, 30, castIron, '#e0d8c8'); tower(30, -20, 46, 50, 46, stone);
  tower(-32, -46, 30, -32, 26, brick, '#b06a54');
  for (const [x0, x1, h] of [[-40, -20, 52], [-20, 0, 38], [0, 20, 60], [20, 40, 44]] as const) tower(x0, 44, x1, 58, h, stone, '#cfd6dd', false);
  solidBox(-46, 36, 46, 44); // the park wall and the street behind it
  // The avenue's east side: cast-iron shop fronts, five floors with fire escapes.
  const shops = [[-32, -16], [-16, -6], [-6, 0], [8, 18], [18, 30]] as const;
  shops.forEach(([z0, z1], i) => { tower(19, z0, 30, z1, 15 + (i % 3) * 3, i % 2 ? brick : castIron, i % 2 ? '#ffffff' : '#efe6d6'); fireEscape(19, z0 + 2, z1 - 2, 4, -1); });
  // Valeria's shop sits at z 0..8, between the others: a lower building with a big window.
  tower(19, 0, 30, 8, 12, castIron, '#f5efe3');
  const shopWindow = labelTexture('VINTAGE · SEGUNDA MANO', '#2a1f3d', '#f7d36b', { w: 512, h: 96 });
  panel(group, shopWindow, 18.95, 4.2, 4, -Math.PI / 2, 6.5, 1.2, 0.5);
  group.add(box(0.1, 2.6, 4.6, solid('#3b5a6b', 0.15, 0.4), 18.96, 1.5, 4, false));
  // A rail of clothes on the sidewalk.
  group.add(box(0.06, 1.6, 0.06, solid('#222222', 0.4, 0.6), 17.6, 0.8, 6.4)); group.add(box(0.06, 1.6, 0.06, solid('#222222', 0.4, 0.6), 17.6, 0.8, 8.4));
  group.add(box(0.05, 0.05, 2.1, solid('#222222', 0.4, 0.6), 17.6, 1.58, 7.4));
  ['#8b2f3c', '#d9a441', '#3c6e71', '#ece5d8', '#5b3f8c'].forEach((c, i) => group.add(box(0.5, 0.9, 0.12, solid(c, 0.9), 17.6, 1.05, 6.7 + i * 0.36, false)));
  solidBox(17.3, 6.2, 17.9, 8.6, 1.6);
  spotWith(group, spots, talkers, 'avenida', 16.6, 3.6, Math.PI / 2 - 0.3, 5401, { body: 'f', age: 'adult', top: 'jacket', topColor: '#5b3f8c', bottom: 'skirt', bottomColor: '#1d1d1d', hairStyle: 'curly', hairColor: '#2b1b14', extras: ['earrings', 'glasses'] }, 'arms', 'smile', shadows, 2.0);

  // West of the avenue, north of the cross street: the building with the door to the rooftop.
  tower(-12, -2, 4, 5.4, 18, brick); fireEscape(4, -1, 4, 4, 1);
  tower(-32, -2, -12, 5.4, 24, stone, '#e3dbcc');
  const doorTex = labelTexture('AZOTEA · ROOF ↑', '#1d3b2a', '#ffffff', { w: 256, h: 64 });
  group.add(box(0.12, 2.4, 1.4, solid('#3a2a1e', 0.7), 4.06, 1.2, 1.5, false));
  panel(group, doorTex, 4.14, 2.75, 1.5, Math.PI / 2, 1.6, 0.4);
  // South-west: the café block and the block with the subway entrance in front.
  tower(-32, -32, -12, -14, 20, brick, '#c98b73');
  tower(-12, -32, 4, -14, 28, stone);
  const cafeAwning = new THREE.Mesh(new THREE.BoxGeometry(9, 0.12, 1.8), solid('#1f5a3d', 0.7));
  cafeAwning.position.set(-22, 3.1, -13.1); cafeAwning.rotation.x = 0.18; group.add(cafeAwning);
  sign(group, 'BAGELS · COFFEE', -22, 3.7, -13.98, Math.PI, 5.2, '#1f5a3d', '#f6ecd2');
  panel(group, windowsTexture('#3b2a20', '#f4d9a6', '#ffe9b8', 3, 1, 34, 0.9), -22, 1.4, -13.97, Math.PI, 8, 2.2, 0.35);
  for (const x of [-26, -21, -16]) {
    group.add(cylinder(0.4, 0.4, 0.05, solid('#2b2b2b', 0.5, 0.4), x, 0.75, -12.6, 14)); group.add(cylinder(0.04, 0.04, 0.75, solid('#2b2b2b', 0.5, 0.4), x, 0.38, -12.6, 6));
    solidBox(x - 0.45, -13.05, x + 0.45, -12.15, 0.78);
  }
  const suitcase = box(0.45, 0.65, 0.25, solid('#c0392b', 0.5), -20.4, 0.33, -12.2); group.add(suitcase);
  spotWith(group, spots, talkers, 'cafe', -21, -10, Math.PI + 0.2, 5402, { body: 'f', age: 'young', top: 'coat', topColor: '#c9a27a', bottom: 'jeans', hairStyle: 'bun', hairColor: '#5a3a22', extras: ['scarf'] }, 'sit', 'smile', shadows, 2.6);
  extra(group, talkers, -26.6, -12.2, Math.PI, 5403, { top: 'suit' }, 'read', 'neutral', shadows);
  extra(group, talkers, -15.4, -12.3, Math.PI - 0.4, 5404, {}, 'phone', 'neutral', shadows);

  // The subway entrance: railings, two green globes and a stair down.
  const rail = solid('#1f3b2b', 0.5, 0.4);
  group.add(box(0.08, 1.0, 4, rail, 4.6, 0.5, -20)); group.add(box(0.08, 1.0, 4, rail, 7.4, 0.5, -20)); group.add(box(2.9, 1.0, 0.08, rail, 6, 0.5, -22));
  solidBox(4.4, -22.2, 4.8, -18); solidBox(7.2, -22.2, 7.6, -18); solidBox(4.4, -22.3, 7.6, -21.9);
  for (const x of [4.6, 7.4]) { group.add(cylinder(0.05, 0.05, 2.4, rail, x, 1.2, -18.1, 6)); const g = glow('#4cd27a', 1.6); lamps.push(g); const ball = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), g); ball.position.set(x, 2.5, -18.1); group.add(ball); }
  const hole = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 3.6), solid('#0e0f11', 1)); hole.rotation.x = -Math.PI / 2; hole.position.set(6, 0.025, -20); group.add(hole);
  for (let i = 0; i < 6; i++) group.add(box(2.6, 0.06, 0.3, solid('#5b5d60', 0.8), 6, 0.04, -21.6 + i * 0.32, false));
  sign(group, 'SUBWAY · METRO', 6, 3.1, -18.1, 0, 2.6, '#111111', '#ffffff');

  // Parked cars and yellow cabs along the avenue.
  [['sedan', '#f4c430', 9.2, -24], ['sedan', '#f4c430', 9.2, 14], ['coupe', '#2f3e4e', 13.8, 22], ['van', '#d9d4c9', 13.8, -18], ['sedan', '#f4c430', 13.8, 30]].forEach(([kind, color, x, z], i) => {
    if (low && i > 2) return;
    const car = makeCar(kind as 'sedan', color as string).group; placeVehicle(car, x as number, z as number, Math.PI / 2); group.add(car);
    solidBox((x as number) - 0.95, (z as number) - 2.3, (x as number) + 0.95, (z as number) + 2.3, 1.5);
  });
  for (let z = -28; z <= 30; z += 10) { streetLamp(group, 4.5, z, lamps, 4.6, '#ffe2b0'); solidBox(4.35, z - 0.15, 4.65, z + 0.15); }

  // ---------------------------------------------------------- the park
  // A low stone wall with a gap, paths, the pond, benches and trees in autumn colours.
  const wall = solid('#8f8778', 0.95);
  group.add(box(26, 0.8, 0.6, wall, -19, 0.4, 6)); solidBox(-32, 5.7, -6, 6.3, 0.8);
  group.add(box(4, 0.8, 0.6, wall, 2, 0.4, 6)); solidBox(0, 5.7, 4, 6.3, 0.8);
  ground(group, -6, 6, 0, 36, groundTexture('#c2b8a3', ['#ab9f86', '#d3cab6'], 23), '#ffffff', 4, 0.02);
  ground(group, -32, 18, 4, 21, groundTexture('#c2b8a3', ['#ab9f86', '#d3cab6'], 24), '#ffffff', 4, 0.021);
  const pond = new THREE.Mesh(new THREE.CircleGeometry(5.2, 32), new THREE.MeshStandardMaterial({ color: '#4d6f78', roughness: 0.15, metalness: 0.2 }));
  pond.rotation.x = -Math.PI / 2; pond.position.set(-20, 0.03, 28); group.add(pond);
  const pondEdge = new THREE.Mesh(new THREE.RingGeometry(5.2, 5.7, 32), solid('#7d7466', 0.95)); pondEdge.rotation.x = -Math.PI / 2; pondEdge.position.set(-20, 0.04, 28); group.add(pondEdge);
  solidBox(-25, 23, -15, 33);
  const autumn = ['#c4552f', '#e0a03a', '#b8862f', '#9e3b25', '#6f8a3c'];
  const treeAt = (x: number, z: number, seed: number) => {
    group.add(cylinder(0.18, 0.26, 3, solid('#4a3a2c'), x, 1.5, z, 8));
    const r = random(seed);
    for (let i = 0; i < 3; i++) { const blob = new THREE.Mesh(new THREE.IcosahedronGeometry(1.3 + r() * 0.7, 1), solid(autumn[Math.floor(r() * autumn.length)], 0.95)); blob.position.set(x + (r() - 0.5) * 1.4, 3.6 + r() * 1.1, z + (r() - 0.5) * 1.4); blob.castShadow = shadows; group.add(blob); }
    solidBox(x - 0.3, z - 0.3, x + 0.3, z + 0.3);
  };
  const trees = low ? 9 : 16;
  for (let i = 0; i < trees; i++) {
    const x = -30 + rand() * 32, z = 8 + rand() * 27;
    if (Math.abs(x + 3) < 4 || Math.abs(z - 19.5) < 3 || Math.hypot(x + 20, z - 28) < 7 || Math.hypot(x + 8, z - 14) < 5) continue;
    treeAt(x, z, 600 + i);
  }
  for (const [x, z, r] of [[-12, 17.6, 0], [-18, 17.6, 0], [-9, 21.4, Math.PI]] as const) { addBench(group, x, z, r); solidBox(x - 0.9, z - 0.3, x + 0.9, z + 0.3, 0.5); }
  for (let z = 10; z <= 34; z += 8) { streetLamp(group, -6.4, z, lamps, 3.8, '#ffd9a0'); solidBox(-6.55, z - 0.15, -6.25, z + 0.15); }
  // Jaylen and his five dogs, each on its own leash.
  const jaylen = spotWith(group, spots, talkers, 'parque', -8.4, 12.2, -0.5, 5405, { body: 'm', age: 'young', top: 'hoodie', topColor: '#d35400', bottom: 'jeans', hairStyle: 'braids', extras: ['cap', 'headphones'] }, 'stand', 'smile', shadows, 2.1);
  const dogColors = ['#c8a26b', '#f2efe9', '#3a2b20', '#8b5a2b', '#d9d4c9'];
  dogColors.forEach((c, i) => {
    const dog = createAnimal('dog', c, i % 2 ? 'small' : 'medium');
    const a = -1.3 + i * 0.65;
    dog.root.position.set(jaylen.x + Math.sin(a) * 1.6, 0, jaylen.z + Math.cos(a) * 1.6);
    dog.root.rotation.y = a + Math.PI * 0.8;
    setAnimalPose(dog, i % 3 === 0 ? 'sit' : 'stand');
    group.add(dog.root); animals.push(dog);
    const leash = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(jaylen.x, 0.95, jaylen.z), new THREE.Vector3(dog.root.position.x, 0.4, dog.root.position.z)]), new THREE.LineBasicMaterial({ color: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6'][i] }));
    group.add(leash);
  });
  if (!low) { const pigeons = createAnimal('pigeons', '#7d8288'); pigeons.root.position.set(-4, 0, 26); group.add(pigeons.root); animals.push(pigeons); }
  extra(group, talkers, -12, 17.6, 0, 5406, { age: 'old', top: 'coat' }, 'sit', 'neutral', shadows);
  extra(group, talkers, -14, 31, Math.PI / 2, 5407, { top: 'tshirt', bottom: 'shorts' }, 'stand', 'smile', shadows);

  // Doors: down to the subway, up to the rooftop, and back.
  const doors = [
    { x: 6, z: -19.4, label: 'Bajar al metro', to: { x: PLATFORM.x - 15, z: PLATFORM.z + 3.5, heading: Math.PI / 2 } },
    { x: 5.2, z: 1.5, label: 'Subir a la azotea', to: { x: ROOF.x - 9, z: ROOF.z + 6, heading: Math.PI / 2 } },
    { x: PLATFORM.x - 17.5, z: PLATFORM.z + 4.2, label: 'Subir a la calle', to: { x: 6, z: -16.6, heading: 0 } },
    { x: ROOF.x - 11.6, z: ROOF.z + 7.4, label: 'Bajar a la calle', to: { x: 6.2, z: 1.5, heading: Math.PI } },
  ];

  // ---------------------------------------------------------- the subway platform
  {
    const X = PLATFORM.x, Z = PLATFORM.z;
    const tiles = tileTexture('#e8e4da', '#c9c3b5', 6);
    ground(group, X - 20, Z - 3.2, X + 20, Z + 8, groundTexture('#8d8a82', ['#7a776f', '#9d9a92'], 25), '#ffffff', 4, 0);
    ground(group, X - 20, Z - 3.4, X + 20, Z - 2.9, null, '#f2c230', 1, 0.01, 0.6);
    const back = new THREE.Mesh(new THREE.PlaneGeometry(40, 4.4), new THREE.MeshStandardMaterial({ map: (() => { const t = tiles.clone(); t.needsUpdate = true; t.repeat.set(10, 1.1); return t; })(), roughness: 0.4 }));
    back.position.set(X, 2.2, Z + 8); back.rotation.y = Math.PI; group.add(back);
    // The station name in mosaic, in English (it is the station's real sign).
    panel(group, labelTexture('UNION SQ · 14 ST', '#7a2f2a', '#f3e6c8', { w: 512, h: 96, border: '#f3e6c8' }), X, 2.6, Z + 7.95, Math.PI, 5, 0.95);
    panel(group, labelTexture('UNION SQ · 14 ST', '#7a2f2a', '#f3e6c8', { w: 512, h: 96, border: '#f3e6c8' }), X - 12, 2.6, Z + 7.95, Math.PI, 5, 0.95);
    const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(44, 20), solid('#3c3f43', 0.9)); ceiling.rotation.x = Math.PI / 2; ceiling.position.set(X, 4.4, Z); group.add(ceiling);
    for (const s of [-1, 1]) { const end = new THREE.Mesh(new THREE.PlaneGeometry(20, 4.4), solid('#2c2e31', 0.9)); end.position.set(X + s * 20, 2.2, Z); end.rotation.y = -s * Math.PI / 2; group.add(end); }
    for (let x = X - 18; x <= X + 18; x += 6) {
      group.add(box(0.3, 4.4, 0.3, solid('#2e5e8c', 0.5, 0.4), x, 2.2, Z - 1.6)); solidBox(x - 0.2, Z - 1.8, x + 0.2, Z - 1.4);
      const strip = glow('#fff6dc', 1.4); lamps.push(strip); group.add(new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.06, 0.2), strip).translateX(x).translateY(4.3).translateZ(Z + 3));
    }
    // The track pit and a train waiting with its doors closed.
    ground(group, X - 20, Z - 10, X + 20, Z - 3.4, null, '#1a1a1a', 1, -1.1);
    const train = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(36, 3.0, 2.9), new THREE.MeshStandardMaterial({ map: windowsTexture('#b8bec4', '#2a3440', '#ffeec8', 12, 1, 35, 0.8), roughness: 0.35, metalness: 0.6 }));
    body.position.y = 0.6; train.add(body);
    train.add(box(36, 0.3, 3.0, solid('#6d1f8c', 0.5), 0, -0.6, 0, false));
    train.position.set(X, 0, Z - 5.6); group.add(train);
    solidBox(X - 21, Z - 12, X + 21, Z - 3.3);
    solidBox(X - 21, Z + 8, X + 21, Z + 10); solidBox(X - 22, Z - 12, X - 20, Z + 10); solidBox(X + 20, Z - 12, X + 22, Z + 10);
    // The stairs up, at the west end.
    for (let i = 0; i < 6; i++) group.add(box(2.4, 0.3, 0.45, solid('#77736b', 0.9), X - 17.5, 0.15 + i * 0.3, Z + 5.6 + i * 0.4, false));
    sign(group, 'SALIDA · EXIT ↑', X - 17.5, 3.4, Z + 7.9, Math.PI, 2.4, '#111111', '#ffffff');
    // Héctor and his open case, and commuters waiting.
    const hector = spotWith(group, spots, talkers, 'metro', X + 2, Z + 3.6, 0.15, 5408, { body: 'm', age: 'adult', top: 'shirt', topColor: '#1f3a5f', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'short', extras: ['hat'] }, 'stand', 'smile', shadows, 2.2);
    const brass = solid('#d4a640', 0.3, 0.8);
    const sax = new THREE.Group();
    sax.add(cylinder(0.04, 0.07, 0.75, brass, 0, 0, 0, 10));
    const bell = cylinder(0.08, 0.13, 0.22, brass, 0.06, -0.42, 0, 12); bell.rotation.z = -0.9; sax.add(bell);
    sax.position.set(0.05, 1.1, 0.32); sax.rotation.x = 0.25; hector.person.root.add(sax);
    group.add(box(0.8, 0.12, 0.5, solid('#5a1e1e', 0.8), hector.x + 0.9, 0.06, hector.z - 0.4));
    extra(group, talkers, X - 6, Z + 1, Math.PI, 5409, { top: 'suit' }, 'phone', 'neutral', shadows);
    extra(group, talkers, X + 9, Z + 0.4, Math.PI - 0.3, 5410, { extras: ['backpack'] }, 'read', 'neutral', shadows);
    extra(group, talkers, X + 12, Z + 5, -Math.PI / 2, 5411, { top: 'uniform', topColor: '#2c3e50' }, 'lean', 'sleepy', shadows);
  }

  // ---------------------------------------------------------- the rooftop
  {
    const X = ROOF.x, Z = ROOF.z;
    ground(group, X - 14, Z - 12, X + 14, Z + 12, groundTexture('#9c958a', ['#8a8378', '#b0a99e'], 26), '#ffffff', 4, 0);
    ground(group, X - 6, Z - 2, X + 4, Z + 2, tileTexture('#a8794f', '#7d5838', 6), '#ffffff', 2, 0.01);
    const parapet = solid('#8a4b3a', 0.9);
    group.add(box(28.6, 1.1, 0.3, parapet, X, 0.55, Z - 12.15)); group.add(box(28.6, 1.1, 0.3, parapet, X, 0.55, Z + 12.15));
    group.add(box(0.3, 1.1, 24.6, parapet, X - 14.15, 0.55, Z)); group.add(box(0.3, 1.1, 24.6, parapet, X + 14.15, 0.55, Z));
    solidBox(X - 15, Z - 13, X + 15, Z - 12); solidBox(X - 15, Z + 12, X + 15, Z + 13); solidBox(X - 15, Z - 13, X - 14, Z + 13); solidBox(X + 14, Z - 13, X + 15, Z + 13);
    // The building falls away below the parapet.
    group.add(box(28.6, 60, 24.6, new THREE.MeshStandardMaterial({ map: (() => { const t = brick.clone(); t.needsUpdate = true; t.repeat.set(7, 15); return t; })(), roughness: 0.9 }), X, -30.05, Z, false));
    // Stair bulkhead with the door down, the water tank, raised beds and four hives.
    group.add(box(3, 2.8, 3, solid('#7a4436', 0.9), X - 12, 1.4, Z + 10)); solidBox(X - 13.5, Z + 8.9, X - 10.5, Z + 11.5);
    group.add(box(1.0, 2.2, 0.1, solid('#3a2a1e', 0.7), X - 11.6, 1.1, Z + 8.45, false));
    for (const [dx, dz] of [[-0.9, -0.9], [0.9, -0.9], [-0.9, 0.9], [0.9, 0.9]]) group.add(cylinder(0.08, 0.08, 3, solid('#2a2a2a'), X + 9 + dx, 1.5, Z - 8 + dz, 5));
    group.add(cylinder(1.5, 1.5, 3, solid('#7a5a3c', 0.95), X + 9, 4.5, Z - 8, 14));
    const cap = new THREE.Mesh(new THREE.ConeGeometry(1.6, 1.0, 14), solid('#4a3a2c', 0.9)); cap.position.set(X + 9, 6.5, Z - 8); group.add(cap);
    solidBox(X + 7.6, Z - 9.4, X + 10.4, Z - 6.6);
    const plants = [solid('#3f7d3a', 0.9), solid('#8e6cc0', 0.9), solid('#d0402e', 0.7)];
    for (let i = 0; i < 4; i++) {
      const bx = X - 10 + i * 5.2, bz = Z - 6;
      group.add(box(3.6, 0.5, 1.4, solid('#6b4a33', 0.9), bx, 0.25, bz)); solidBox(bx - 1.8, bz - 0.7, bx + 1.8, bz + 0.7, 0.5);
      for (let k = 0; k < 6; k++) { const leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(0.28, 0), plants[(i + k) % 3]); leaf.position.set(bx - 1.4 + k * 0.56, 0.75, bz + (k % 2 ? 0.3 : -0.3)); group.add(leaf); }
    }
    for (let i = 0; i < 4; i++) {
      const hx = X + 6 + (i % 2) * 2, hz = Z + 3 + Math.floor(i / 2) * 2.4;
      const hive = new THREE.Group();
      [0.28, 0.62, 0.96].forEach((y, k) => hive.add(box(0.9, 0.32, 0.8, solid(k === 1 ? '#f2e6c9' : '#fbf6ea', 0.8), 0, y, 0)));
      hive.add(box(1.0, 0.08, 0.9, solid('#c9b08a', 0.8), 0, 1.16, 0));
      hive.position.set(hx, 0, hz); group.add(hive); solidBox(hx - 0.5, hz - 0.45, hx + 0.5, hz + 0.45, 1.2);
    }
    spotWith(group, spots, talkers, 'azotea', X + 2.5, Z + 4.2, Math.PI / 2, 5412, { body: 'f', age: 'adult', top: 'shirt', topColor: '#f3efe6', bottom: 'pants', bottomColor: '#5c6b3a', hairStyle: 'bob', hairColor: '#111111', extras: ['hat', 'glasses'] }, 'stand', 'smile', shadows, 2.1);
    umbrella(group, X - 2, Z, '#e9c46a', '#ffffff', 2.4);
    for (const [dx, r] of [[-3.4, Math.PI / 2], [-0.6, -Math.PI / 2]] as const) { addBench(group, X + dx, Z + 0.2, r); solidBox(X + dx - 0.3, Z - 0.7, X + dx + 0.3, Z + 1.1, 0.5); }
    // The skyline around and below: towers that start far down, a spire, and the river.
    const skyline = [stone, castIron, brick];
    const count = low ? 22 : 40;
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + rand() * 0.1, r = 34 + rand() * 70;
      const w = 8 + rand() * 10, d = 8 + rand() * 10, top = -14 + rand() * (r > 70 ? 70 : 30);
      const h = top + 70;
      const tex = skyline[i % 3].clone(); tex.needsUpdate = true; tex.repeat.set(Math.round(w / 4), Math.round(h / 4));
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85 }));
      m.position.set(X + Math.cos(a) * r, top - h / 2, Z + Math.sin(a) * r); group.add(m);
    }
    const spire = new THREE.Group();
    spire.add(box(14, 110, 14, solid('#c9c3b8', 0.6), 0, -15, 0, false)); spire.add(box(9, 16, 9, solid('#d6d0c4', 0.6), 0, 48, 0, false));
    spire.add(cylinder(0.4, 1.4, 22, solid('#e3ddd2', 0.4, 0.3), 0, 67, 0, 8));
    spire.position.set(X - 70, 0, Z + 60); group.add(spire);
    const river = new THREE.Mesh(new THREE.PlaneGeometry(600, 70), new THREE.MeshStandardMaterial({ color: '#4c6c80', roughness: 0.2, metalness: 0.3 }));
    river.rotation.x = -Math.PI / 2; river.position.set(X, -60, Z - 130); group.add(river);
    const base = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), solid('#3a3a3c', 1)); base.rotation.x = -Math.PI / 2; base.position.set(X, -70, Z); group.add(base);
    // The party on the next roof, string lights and all.
    const party = new THREE.Group();
    party.add(box(20, 0.3, 16, solid('#6e6e6e', 0.9), 0, -0.15, 0, false));
    party.add(box(20, 60, 16, solid('#9a8f80', 0.9), 0, -30.3, 0, false));
    for (let i = 0; i < 14; i++) { const b = glow(['#ffd27a', '#ff8fab', '#7fd8ff'][i % 3], 1.8); lamps.push(b); const m = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), b); m.position.set(-9 + i * 1.4, 2.6 - Math.sin((i / 13) * Math.PI) * 0.6, 0); party.add(m); }
    party.position.set(X + 6, -2, Z - 34); group.add(party);
    for (let i = 0; i < (low ? 3 : 6); i++) { const p = makeTalker(party, null, -6 + i * 2.4, 2 + (i % 2), Math.PI, 5420 + i, {}, 'dance', 'laugh', false); talkers.push({ ...p, x: X + 6 - 6 + i * 2.4, z: Z - 32 + (i % 2) }); }
    lightPool(group, X + 2.5, Z + 4.2, 3, '#ffd27a', 0.18);
  }

  // ---------------------------------------------------------- walkers
  const walk = (path: [number, number][], seed: number, speed: number, look = {}) => walkers.push(makeWalker(group, path.map(([x, z]) => ({ x, z })), seed, speed, look, shadows));
  walk([[5.6, -30], [5.6, 34]], 5501, 1.3, { top: 'coat' });
  walk([[17, 30], [17, -30]], 5502, 1.1);
  walk([[-30, -3.5], [2, -3.5]], 5503, 1.2, { top: 'suit' });
  walk([[-3, 8], [-3, 34]], 5504, 2.4, { top: 'tshirt', bottom: 'shorts', extras: ['headphones'] }); // a runner in the park
  walk([[PLATFORM.x - 14, PLATFORM.z + 2], [PLATFORM.x + 16, PLATFORM.z + 2]], 5505, 1.3, { extras: ['backpack'] });
  if (!low) {
    walk([[-30, 19.5], [2, 19.5]], 5506, 1.0, { age: 'old' });
    walk([[16.2, -30], [16.2, 30]], 5507, 1.4, { extras: ['bag'] });
    walk([[-30, -13], [-2, -13]], 5508, 1.1);
  }

  return {
    group,
    bounds: { minX: ROOF.x - 16, maxX: PLATFORM.x + 22, minZ: -46, maxZ: 46 },
    solids,
    spawn: { x: 11.5, z: -25.5, heading: 0 },
    exit: { x: 11.5, z: -30 },
    spots,
    talkers,
    walkers,
    doors,
    ceilings: [{ x0: PLATFORM.x - 21, x1: PLATFORM.x + 21, z0: PLATFORM.z - 12, z1: PLATFORM.z + 10, y: 4.4 }],
    light: {
      sky: ['#7fa6cf', '#f1d9c0'],
      fog: ['#d6d9dc', 60, 230],
      sun: { color: '#ffe0bc', intensity: 2.1, at: [-30, 40, -25] },
      hemi: ['#c8d8ec', '#8a7a68', 1.1],
      exposure: 1.0,
    },
    animate(t, dt) {
      for (const a of animals) animateAnimal(a, dt, 0);
      lamps.forEach((m, i) => { if (i % 5 === 0) m.emissiveIntensity = 1.4 + Math.sin(t * 3 + i) * 0.2; });
    },
  };
};

export default build;
