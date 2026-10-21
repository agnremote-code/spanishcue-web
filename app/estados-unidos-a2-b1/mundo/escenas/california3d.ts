// Estados Unidos 3D · California: Los Angeles folded into one walk, the way the
// green freeway signs promise it. Venice Beach and its boardwalk to the west, a
// boulevard under a freeway overpass with a taco truck on the corner, an
// animation studio with its roll-up door open, a Valley street of one-story
// houses, and (by the shuttle) the observatory lookout above the city.
import * as THREE from 'three';
import {
  addPalm, box, cylinder, extra, glow, ground, groundTexture, labelTexture, lightPool, makeCar, makeWalker, muralTexture,
  panel, placeVehicle, random, sign, solid, spotWith, streetLamp, tileTexture, umbrella, water, windowsTexture,
  type Box, type SceneBuilder, type SpotPlace, type Talker, type Walker,
} from '../../../mundo-3d/kit3d';

const OBS = { x: -200, z: 0 };

const build: SceneBuilder = ({ low, shadows }) => {
  const group = new THREE.Group();
  const solids: Box[] = [];
  const spots: SpotPlace[] = [];
  const talkers: Talker[] = [];
  const walkers: Walker[] = [];
  const lamps: THREE.MeshStandardMaterial[] = [];
  const rand = random(7213);
  const solidBox = (x0: number, z0: number, x1: number, z1: number, top?: number) => solids.push(top == null ? { x0, x1, z0, z1 } : { x0, x1, z0, z1, top });

  // ---------------------------------------------------------- ground
  const sand = groundTexture('#e8d3a4', ['#d6bd8a', '#f3e3bf'], 41);
  const asphalt = groundTexture('#46484c', ['#3a3c40', '#55575b'], 42);
  const concrete = tileTexture('#cfc9bd', '#b3ac9e', 3);
  const lawn = groundTexture('#6e9a45', ['#5d8838', '#82ad55'], 43);
  const dry = groundTexture('#c8b26a', ['#b49c58', '#d8c47c'], 44);
  ground(group, -48, -40, -20, 40, sand, '#ffffff', 8);
  const sea = water(group, -140, -90, -48, 90, '#2a7fa8', '#c4ecff', -0.06);
  const foam = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 120), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.5, depthWrite: false }));
  foam.rotation.x = -Math.PI / 2; foam.position.set(-48.2, 0.01, 0); group.add(foam);
  solidBox(-60, -60, -48.5, 60);
  ground(group, -20, -40, -14, 40, concrete, '#ffffff', 3, 0.01); // the boardwalk
  ground(group, -14, -40, 62, 40, concrete, '#e6dfd2', 3, 0.005);
  ground(group, -14, -4, 62, 4, asphalt, '#ffffff', 8, 0.012); // the boulevard
  for (let x = -12; x < 62; x += 6) ground(group, x, -0.1, x + 3, 0.1, null, '#f2f2f2', 1, 0.02, 0.6);
  ground(group, 36, -40, 42, 40, asphalt, '#ffffff', 8, 0.013); // the Valley street

  // ---------------------------------------------------------- Venice Beach
  // Tall, thin palms along the boardwalk; graffiti walls; the outdoor gym; the bike path.
  const palmCount = low ? 6 : 12;
  for (let i = 0; i < palmCount; i++) {
    const z = -36 + i * (72 / palmCount) + rand() * 2;
    if (Math.abs(z) < 4) continue;
    addPalm(group, -21, z, 11 + rand() * 3, 900 + i);
    solidBox(-21.3, z - 0.3, -20.7, z + 0.3);
  }
  ground(group, -30, -40, -27.5, 40, null, '#9aa3a8', 1, 0.012, 0.8); // bike path
  const graffitiPalette = ['#ff4f79', '#ffd23f', '#2ec4b6', '#3a86ff', '#ff9f1c', '#8338ec', '#ffffff'];
  for (const [z, seed] of [[-30, 11], [-22, 12], [18, 13], [26, 14]] as const) {
    group.add(box(0.4, 2.6, 6, solid('#d6cfc4', 0.9), -33, 1.3, z));
    panel(group, muralTexture(seed + 700, graffitiPalette), -32.78, 1.3, z, Math.PI / 2, 5.8, 2.5);
    panel(group, muralTexture(seed + 720, graffitiPalette), -33.22, 1.3, z, -Math.PI / 2, 5.8, 2.5);
    solidBox(-33.3, z - 3, -32.7, z + 3);
  }
  // The outdoor gym: a fenced pen with weights.
  const pen = solid('#3d4a52', 0.5, 0.5);
  for (const [x0, z0, x1, z1] of [[-32, 6, -24, 6.1], [-32, 14, -24, 14.1], [-32, 6, -31.9, 14]] as const) group.add(box(x1 - x0 + 0.05, 1.2, z1 - z0 + 0.05, pen, (x0 + x1) / 2, 0.6, (z0 + z1) / 2, false));
  solidBox(-32.1, 5.9, -24, 6.2); solidBox(-32.1, 13.9, -24, 14.2); solidBox(-32.1, 5.9, -31.8, 14.2);
  for (let i = 0; i < 3; i++) { const bx = -29 + i * 2; group.add(cylinder(0.04, 0.04, 1.8, solid('#888888', 0.3, 0.8), bx, 0.9, 9, 6).rotateX(Math.PI / 2)); for (const s of [-0.8, 0.8]) group.add(cylinder(0.3, 0.3, 0.1, solid('#1a1a1a', 0.6), bx, 0.9, 9 + s, 14).rotateX(Math.PI / 2)); }
  extra(group, talkers, -27, 11.5, Math.PI / 2, 7301, { body: 'm', build: 'athletic', top: 'tshirt', topColor: '#222222', bottom: 'shorts' }, 'arms', 'neutral', shadows);
  // Lupita on her pink skates.
  const lupita = spotWith(group, spots, talkers, 'venice', -17, -1, -Math.PI / 2 - 0.3, 7302, { body: 'f', age: 'adult', top: 'tshirt', topColor: '#ff6fb5', bottom: 'shorts', bottomColor: '#3a86ff', hairStyle: 'curly', hairColor: '#2a1a12', extras: ['headphones', 'earrings'] }, 'dance', 'laugh', shadows, 2.2);
  for (const s of [-0.12, 0.12]) { const skate = box(0.14, 0.12, 0.32, solid('#ff6fb5', 0.5), s, 0.06, 0.04, false); lupita.person.root.add(skate); }
  sign(group, 'VENICE', -17.2, 6.4, -6, 0, 6, '#1b1b1b', '#ffffff', true);
  group.add(box(0.15, 6, 0.15, solid('#1b1b1b'), -20, 3, -6)); group.add(box(0.15, 6, 0.15, solid('#1b1b1b'), -14.4, 3, -6));
  solidBox(-20.2, -6.2, -19.8, -5.8); solidBox(-14.6, -6.2, -14.2, -5.8);
  for (let i = 0; i < (low ? 3 : 6); i++) { const x = -42 + rand() * 18, z = -36 + i * 12; if (Math.abs(z) < 8) continue; umbrella(group, x, z, ['#ff6b6b', '#ffd93d', '#6bcbff'][i % 3]); solidBox(x - 0.2, z - 0.2, x + 0.2, z + 0.2); extra(group, talkers, x + 1, z, rand() * 6, 7310 + i, { top: 'tshirt', bottom: 'shorts' }, 'lie', 'sleepy', shadows); }
  // A lifeguard hut, blue this time: this is L.A.
  const hut = new THREE.Group();
  for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) hut.add(cylinder(0.08, 0.08, 1.8, solid('#e9e4da'), dx, 0.9, dz, 6));
  hut.add(box(2.4, 1.6, 2.4, solid('#5aa9e6', 0.6), 0, 2.6, 0)); hut.add(box(2.8, 0.15, 2.8, solid('#e9e4da'), 0, 3.5, 0));
  hut.position.set(-40, 0, -14); group.add(hut); solidBox(-41.4, -15.4, -38.6, -12.6, 1.8);

  // ---------------------------------------------------------- the boulevard, the overpass, the taco truck
  const overpass = new THREE.Group();
  overpass.add(box(10, 1.2, 14, solid('#b7b0a3', 0.9), 0, 7.4, 0));
  for (const s of [-4, 4]) overpass.add(box(1.4, 7, 1.4, solid('#a9a295', 0.9), s, 3.5, -6)), overpass.add(box(1.4, 7, 1.4, solid('#a9a295', 0.9), s, 3.5, 6));
  overpass.rotation.y = Math.PI / 2; overpass.position.set(20, 0, 0); group.add(overpass);
  for (const [x, z] of [[14, -4], [14, 4], [26, -4], [26, 4]]) solidBox(x - 0.7, z - 0.7, x + 0.7, z + 0.7);
  // Green freeway signs: the four parts of this walk.
  const greenSign = (text: string, x: number, z: number, ry: number) => panel(group, labelTexture(text, '#1e6b3a', '#ffffff', { w: 512, h: 128, border: '#ffffff' }), x, 6.2, z, ry, 6, 1.5);
  greenSign('← Venice · Santa Monica', 20, -7.05, Math.PI);
  greenSign('Burbank · Valley →', 20, 7.05, 0);
  // The taco truck on its corner lot, with a string of papel picado.
  const truck = new THREE.Group();
  truck.add(box(6.4, 2.6, 2.4, solid('#f6f3ea', 0.5), 0, 1.65, 0));
  truck.add(box(1.8, 1.9, 2.3, solid('#f6f3ea', 0.5), 4.0, 1.3, 0));
  truck.add(box(0.06, 0.8, 2.0, solid('#2a3440', 0.15, 0.4), 4.92, 1.75, 0, false));
  truck.add(box(6.42, 0.35, 2.42, solid('#d62839', 0.5), 0, 0.95, 0, false));
  truck.add(box(6.42, 0.18, 2.42, solid('#2a9d8f', 0.5), 0, 2.85, 0, false));
  truck.add(box(3.2, 1.1, 0.06, solid('#1d1d1d', 0.4), -0.6, 1.95, 1.22, false)); // serving window
  const awn = box(3.6, 0.08, 1.2, solid('#ffb703', 0.6), -0.6, 2.75, 1.75, false); awn.rotation.x = 0.25; truck.add(awn);
  truck.add(box(3.4, 0.08, 0.5, solid('#c9c2b5', 0.5, 0.3), -0.6, 1.35, 1.45, false));
  for (const [wx, wz] of [[-2.2, 1.15], [-2.2, -1.15], [3.6, 1.15], [3.6, -1.15]]) { const wheel = cylinder(0.45, 0.45, 0.3, solid('#151515'), wx, 0.45, wz, 14); wheel.rotation.x = Math.PI / 2; truck.add(wheel); }
  const menu = labelTexture('TACOS DON RIGO', '#d62839', '#fff4d6', { w: 512, h: 128 });
  const menuSign = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 1.05), new THREE.MeshStandardMaterial({ map: menu, roughness: 0.6 })); menuSign.position.set(-0.4, 3.35, 1.21); truck.add(menuSign);
  truck.position.set(4, 0, -11); group.add(truck);
  solidBox(0.6, -12.3, 9.0, -9.7);
  spotWith(group, spots, talkers, 'food-truck', 3.4, -7.3, Math.PI - 0.15, 7303, { body: 'm', age: 'old', top: 'apron', topColor: '#ffffff', bottom: 'pants', hairStyle: 'short', hairColor: '#cfcac2', extras: ['mustache', 'hat'] }, 'cook', 'smile', shadows, 2.0);
  extra(group, talkers, 6.4, -9.2, 0, 7304, { body: 'f', age: 'young', top: 'tshirt', topColor: '#2a9d8f', hairStyle: 'ponytail' }, 'stand', 'smile', shadows); // Ana
  for (let i = 0; i < 4; i++) extra(group, talkers, 0 - i * 1.1, -6.4 + (i % 2) * 0.3, Math.PI, 7305 + i, {}, i === 2 ? 'phone' : 'stand', 'neutral', shadows); // the line
  const picado = ['#ff4f79', '#ffd23f', '#2ec4b6', '#8338ec', '#ff9f1c'];
  for (let i = 0; i < 10; i++) { const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.6), new THREE.MeshStandardMaterial({ color: picado[i % 5], side: THREE.DoubleSide })); flag.position.set(-1.2 + i * 0.7, 3.8 - Math.sin((i / 9) * Math.PI) * 0.4, -7.6); group.add(flag); }
  for (const x of [-1.6, 5.4]) { group.add(cylinder(0.05, 0.05, 4, solid('#333333'), x, 2, -7.6, 6)); solidBox(x - 0.15, -7.75, x + 0.15, -7.45); }
  // Parked cars on the boulevard.
  [['coupe', '#f2a541', -6, 5.5], ['sedan', '#c9d6df', 30, -5.5], ['van', '#ffffff', 48, 5.5]].forEach(([kind, color, x, z], i) => {
    if (low && i === 2) return;
    const car = makeCar(kind as 'sedan', color as string).group; placeVehicle(car, x as number, z as number, 0); group.add(car);
    solidBox((x as number) - 2.3, (z as number) - 0.95, (x as number) + 2.3, (z as number) + 0.95, 1.5);
  });
  for (let x = -10; x <= 58; x += 12) { if (Math.abs(x - 20) < 6) continue; streetLamp(group, x, -4.6, lamps, 5, '#ffd9a0'); solidBox(x - 0.15, -4.75, x + 0.15, -4.45); }

  // ---------------------------------------------------------- the studio
  // A low, wide building with the roll-up door open: desks, boards, a turtle on a screen.
  const studio = new THREE.Group();
  const wallMat = solid('#e8e2d6', 0.85);
  studio.add(box(18, 5, 0.3, wallMat, 0, 2.5, 7)); // back
  studio.add(box(0.3, 5, 14, wallMat, -9, 2.5, 0)); studio.add(box(0.3, 5, 14, wallMat, 9, 2.5, 0));
  studio.add(box(5, 5, 0.3, wallMat, -6.5, 2.5, -7)); studio.add(box(5, 5, 0.3, wallMat, 6.5, 2.5, -7));
  studio.add(box(8, 1.2, 0.3, wallMat, 0, 4.4, -7)); // over the open door
  studio.add(box(18.4, 0.3, 14.4, solid('#3b3f44', 0.9), 0, 5.15, 0));
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(17.6, 13.6), new THREE.MeshStandardMaterial({ map: (() => { const t = tileTexture('#b9a68c', '#9f8c72', 8); t.repeat.set(4, 3); return t; })(), roughness: 0.7 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = 0.02; studio.add(floor);
  studio.position.set(14, 0, 18); group.add(studio);
  sign(group, 'TORTUGA STUDIOS', 14, 5.8, 10.8, Math.PI, 6, '#2b2d42', '#ffd166');
  // Walls as solids, leaving the door gap at x 10..18.
  solidBox(4.8, 24.8, 23.2, 25.4); solidBox(4.8, 10.8, 5.4, 25.4); solidBox(22.6, 10.8, 23.2, 25.4); solidBox(4.8, 10.8, 10, 11.4); solidBox(18, 10.8, 23.2, 11.4);
  const desk = (x: number, z: number, screen: THREE.Texture | null) => {
    group.add(box(1.8, 0.08, 0.9, solid('#f2efe9', 0.5), x, 0.76, z)); group.add(box(0.06, 0.76, 0.8, solid('#7a7a7a', 0.4, 0.5), x - 0.8, 0.38, z, false)); group.add(box(0.06, 0.76, 0.8, solid('#7a7a7a', 0.4, 0.5), x + 0.8, 0.38, z, false));
    const mon = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.55, 0.05), screen ? new THREE.MeshStandardMaterial({ map: screen, emissive: '#ffffff', emissiveMap: screen, emissiveIntensity: 0.6 }) : glow('#9ec5ff', 0.8));
    mon.position.set(x, 1.15, z + 0.3); mon.rotation.y = Math.PI; group.add(mon);
    solidBox(x - 0.9, z - 0.45, x + 0.9, z + 0.45, 0.8);
  };
  const turtle = muralTexture(4242, ['#d62839', '#ffd166', '#ffffff', '#06d6a0']);
  desk(9, 20, turtle); desk(12.5, 20, null); desk(16, 22.5, null); desk(19.5, 20, null);
  for (const [x, z, s] of [[6.2, 15, 31], [6.2, 20, 32]] as const) panel(group, muralTexture(s, ['#ffffff', '#2b2d42', '#ef476f', '#118ab2']), x, 2.4, z, Math.PI / 2, 4, 2.6);
  for (let i = 0; i < 5; i++) { const fig = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), solid(['#06d6a0', '#ef476f', '#ffd166', '#118ab2', '#8338ec'][i], 0.6)); fig.position.set(15.4 + i * 0.25, 0.92, 22.3); group.add(fig); }
  spotWith(group, spots, talkers, 'estudio', 9.6, 16.2, 0.25, 7320, { body: 'f', age: 'young', top: 'sweater', topColor: '#ef476f', bottom: 'jeans', hairStyle: 'short', hairColor: '#e7c27a', extras: ['glasses'] }, 'stand', 'smile', shadows, 2.4);
  extra(group, talkers, 16, 23.4, Math.PI, 7321, { top: 'hoodie' }, 'sit', 'neutral', shadows);
  extra(group, talkers, 19.5, 20.9, Math.PI, 7322, { top: 'shirt', extras: ['headphones'] }, 'sit', 'neutral', shadows);

  // ---------------------------------------------------------- the Valley street
  const houseColors = ['#f4e1c1', '#d8e6ea', '#f6d5c3', '#e3ecd5', '#efe3f2'];
  const roofMat = solid('#8a5a3c', 0.9);
  const house = (x: number, z: number, side: 1 | -1, i: number, yellow = false) => {
    const w = 8, d = 7;
    const hx = x + side * 7.5;
    const body = box(w, 3.2, d, solid(houseColors[i % 5], 0.85), hx, 1.6, z); group.add(body);
    const roof = new THREE.Mesh(new THREE.ConeGeometry(6.1, 1.6, 4), roofMat); roof.rotation.y = Math.PI / 4; roof.scale.set(1, 1, 0.85); roof.position.set(hx, 4.0, z); group.add(roof);
    group.add(box(0.06, 1.2, 1.6, solid('#2a3440', 0.2, 0.3), hx - side * (w / 2 + 0.01), 1.7, z - 1.6, false));
    group.add(box(0.06, 2.1, 1.0, solid('#6b4a33', 0.7), hx - side * (w / 2 + 0.01), 1.05, z + 1.4, false));
    solidBox(hx - w / 2, z - d / 2, hx + w / 2, z + d / 2);
    ground(group, Math.min(x, x + side * 3.5), z - 4, Math.max(x, x + side * 3.5), z + 4, yellow ? dry : lawn, '#ffffff', 4, 0.015);
    // Mailbox at the curb.
    group.add(box(0.08, 1.0, 0.08, solid('#333333'), x + side * 0.4, 0.5, z - 3)); group.add(box(0.3, 0.3, 0.5, solid(['#1d3557', '#c1121f', '#2b9348'][i % 3], 0.5), x + side * 0.4, 1.1, z - 3));
    solidBox(x + side * 0.4 - 0.2, z - 3.3, x + side * 0.4 + 0.2, z - 2.7);
  };
  const rows = [-30, -18, 10, 22];
  rows.forEach((z, i) => { house(42, z, 1, i, i === 2); house(36, z, -1, i + 2); });
  // Don Ernesto's white fence (half painted) and his lemon tree.
  const ernestoZ = 10; // the third house on the east side, with the yellowing lawn
  for (let k = 0; k < 9; k++) group.add(box(0.12, 1.0, 0.08, solid(k < 5 ? '#ffffff' : '#9c8b72', 0.7), 42.3, 0.5, ernestoZ - 4 + k * 0.5, false));
  group.add(box(0.06, 0.08, 4.2, solid('#ffffff', 0.7), 42.3, 0.85, ernestoZ - 2, false));
  solidBox(42.2, ernestoZ - 4.1, 42.4, ernestoZ + 0.1, 1.0);
  group.add(cylinder(0.14, 0.2, 2, solid('#5a4632'), 44.8, 1, ernestoZ + 2.2, 8));
  const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(1.4, 1), solid('#3f6d2f', 0.9)); crown.position.set(44.8, 2.7, ernestoZ + 2.2); crown.castShadow = shadows; group.add(crown);
  for (let k = 0; k < 9; k++) { const lemon = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), solid('#f5d90a', 0.6)); const a = k * 0.7; lemon.position.set(44.8 + Math.cos(a) * 1.25, 2.4 + (k % 3) * 0.4, ernestoZ + 2.2 + Math.sin(a) * 1.25); group.add(lemon); }
  solidBox(44.5, ernestoZ + 1.9, 45.1, ernestoZ + 2.5);
  spotWith(group, spots, talkers, 'barrio', 40.4, ernestoZ + 1.2, Math.PI / 2 - 0.2, 7330, { body: 'm', age: 'elderly', top: 'shirt', topColor: '#8ab0c9', bottom: 'pants', bottomColor: '#6b5a44', hairStyle: 'bald', hairColor: '#e0ddd6', extras: ['hat', 'glasses', 'mustache'] }, 'sweep', 'smile', shadows, 2.4);
  extra(group, talkers, 34.2, -14, -Math.PI / 2, 7331, { body: 'f', age: 'adult' }, 'wave', 'smile', shadows);
  // Dry hills at the end of the Valley street.
  for (let i = 0; i < 5; i++) { const hill = new THREE.Mesh(new THREE.SphereGeometry(18 + i * 3, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), solid(i % 2 ? '#b89a62' : '#a58a55', 1)); hill.scale.y = 0.35; hill.position.set(30 + i * 14, -1, 62 + (i % 2) * 8); group.add(hill); }
  solidBox(-60, 40, 70, 46); solidBox(-60, -46, 70, -40); solidBox(62, -46, 70, 46);

  // ---------------------------------------------------------- the shuttle to the observatory
  group.add(box(3.2, 0.12, 1.4, solid('#2b2d42', 0.6), 30, 2.6, -6.2)); group.add(box(0.1, 2.6, 0.1, solid('#2b2d42'), 28.6, 1.3, -6.6)); group.add(box(0.1, 2.6, 0.1, solid('#2b2d42'), 31.4, 1.3, -6.6));
  solidBox(28.5, -6.7, 28.7, -6.5); solidBox(31.3, -6.7, 31.5, -6.5);
  sign(group, 'SHUTTLE · OBSERVATORIO', 30, 3.1, -5.5, 0, 3.2, '#2b2d42', '#ffd166');
  const doors = [
    { x: 30, z: -7.2, label: 'Tomar el autobús al observatorio', to: { x: OBS.x + 8, z: OBS.z - 8, heading: Math.PI } },
    { x: OBS.x + 11, z: OBS.z - 10, label: 'Volver a la ciudad', to: { x: 30, z: -8.6, heading: Math.PI } },
  ];

  // ---------------------------------------------------------- the observatory lookout
  {
    const X = OBS.x, Z = OBS.z;
    ground(group, X - 16, Z - 14, X + 16, Z + 14, tileTexture('#d8d0c0', '#bfb6a4', 4), '#ffffff', 3, 0);
    // The cliff falls away to the south and west; railings on the edge.
    group.add(box(32, 50, 28, solid('#9c8b6c', 1), X, -25.05, Z, false));
    const railing = solid('#3a3a3a', 0.5, 0.5);
    group.add(box(32, 0.06, 0.06, railing, X, 1.0, Z - 13.9, false)); group.add(box(0.06, 0.06, 28, railing, X - 15.9, 1.0, Z, false));
    for (let i = 0; i <= 16; i++) { group.add(box(0.05, 1.0, 0.05, railing, X - 16 + i * 2, 0.5, Z - 13.9, false)); group.add(box(0.05, 1.0, 0.05, railing, X - 15.9, 0.5, Z - 14 + i * 1.75, false)); }
    solidBox(X - 17, Z - 15, X + 17, Z - 13.8); solidBox(X - 17, Z - 15, X - 15.8, Z + 15); solidBox(X + 15.8, Z - 15, X + 17, Z + 15); solidBox(X - 17, Z + 13.8, X + 17, Z + 15);
    // The observatory: white walls, three copper-green domes.
    const obs = new THREE.Group();
    obs.add(box(22, 6, 6, solid('#f3efe6', 0.6), 0, 3, 0));
    const domeMat = solid('#5c8f7a', 0.4, 0.5);
    for (const [dx, r] of [[0, 3.6], [-8.5, 2.2], [8.5, 2.2]] as const) { const dome = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), domeMat); dome.position.set(dx, 6, 0); obs.add(dome); obs.add(cylinder(r, r, 1.2, solid('#f3efe6', 0.6), dx, 5.6, 0, 24)); }
    obs.position.set(X, 0, Z + 10); group.add(obs);
    solidBox(X - 11, Z + 7, X + 11, Z + 13);
    // The telescope on its tripod at the railing.
    const scope = new THREE.Group();
    for (let k = 0; k < 3; k++) { const leg = cylinder(0.04, 0.04, 1.4, solid('#2a2a2a', 0.5, 0.5), Math.cos(k * 2.1) * 0.35, 0.65, Math.sin(k * 2.1) * 0.35, 6); leg.rotation.z = Math.cos(k * 2.1) * 0.25; leg.rotation.x = -Math.sin(k * 2.1) * 0.25; scope.add(leg); }
    const tube = cylinder(0.12, 0.16, 1.2, solid('#f2f2f2', 0.3, 0.4), 0, 1.5, 0, 12); tube.rotation.z = 1.1; scope.add(tube);
    scope.position.set(X - 4, 0, Z - 10.8); group.add(scope); solidBox(X - 4.4, Z - 11.2, X - 3.6, Z - 10.4, 1.4);
    spotWith(group, spots, talkers, 'mirador', X - 2.2, Z - 8.2, -Math.PI / 2 - 0.6, 7340, { body: 'f', age: 'adult', top: 'jacket', topColor: '#1d3557', bottom: 'jeans', hairStyle: 'ponytail', hairColor: '#7a4a2a', extras: ['glasses'] }, 'point', 'smile', shadows, 2.1);
    extra(group, talkers, X + 4, Z - 12.6, 0, 7341, { body: 'f', age: 'child' }, 'stand', 'surprised', shadows);
    extra(group, talkers, X + 6, Z - 12.4, 0.2, 7342, { age: 'old' }, 'phone', 'smile', shadows);
    // The city far below: a grid of low blocks, a few towers downtown, the ocean to the west.
    const city = new THREE.Group();
    const block = solid('#c9bfae', 0.9);
    const n = low ? 160 : 320;
    for (let i = 0; i < n; i++) {
      const cx = -140 + rand() * 300, cz = -40 - rand() * 220;
      const tall = Math.hypot(cx - 40, cz + 120) < 25;
      const h = tall ? 20 + rand() * 40 : 2 + rand() * 6;
      city.add(new THREE.Mesh(new THREE.BoxGeometry(3 + rand() * 4, h, 3 + rand() * 4), tall ? solid('#9fb3c8', 0.4, 0.3) : block).translateX(cx).translateY(h / 2).translateZ(cz));
    }
    const plain = new THREE.Mesh(new THREE.PlaneGeometry(600, 400), solid('#b7ab92', 1)); plain.rotation.x = -Math.PI / 2; plain.position.set(0, 0, -160); city.add(plain);
    const pacific = new THREE.Mesh(new THREE.PlaneGeometry(400, 500), new THREE.MeshStandardMaterial({ color: '#4f86a8', roughness: 0.2, metalness: 0.2 })); pacific.rotation.x = -Math.PI / 2; pacific.position.set(-320, 0.05, -160); city.add(pacific);
    city.position.set(X, -50, Z); group.add(city);
    // The hill with the white letters, to the east.
    const hill = new THREE.Mesh(new THREE.SphereGeometry(60, 24, 10, 0, Math.PI * 2, 0, Math.PI / 2), solid('#8f7d55', 1)); hill.scale.y = 0.45; hill.position.set(X + 90, -30, Z + 20); group.add(hill);
    const letters = labelTexture('HOLLYWOOD', 'rgba(0,0,0,0)', '#ffffff', { w: 1024, h: 160, font: '900 140px "Helvetica Neue", Arial, sans-serif' });
    const word = new THREE.Mesh(new THREE.PlaneGeometry(44, 7), new THREE.MeshBasicMaterial({ map: letters, transparent: true }));
    word.position.set(X + 62, -6, Z + 6); word.rotation.y = -Math.PI / 2 + 0.35; group.add(word);
    lightPool(group, X - 2.2, Z - 8.2, 3, '#ffe6b0', 0.18);
  }

  // ---------------------------------------------------------- walkers
  const walk = (path: [number, number][], seed: number, speed: number, look = {}) => walkers.push(makeWalker(group, path.map(([x, z]) => ({ x, z })), seed, speed, look, shadows));
  walk([[-17.5, -36], [-17.5, 36]], 7401, 2.8, { top: 'tshirt', bottom: 'shorts', extras: ['headphones'] }); // skater pace
  walk([[-15.5, 34], [-15.5, -34]], 7402, 1.1, { top: 'tshirt', bottom: 'shorts' });
  walk([[-12, -6], [56, -6]], 7403, 1.2);
  walk([[39, -36], [39, 36]], 7404, 1.0, { age: 'old' });
  if (!low) {
    walk([[-28.7, 36], [-28.7, -36]], 7405, 4.0, { top: 'tshirt', bottom: 'shorts' }); // a cyclist's speed on the bike path
    walk([[56, 6], [-12, 6]], 7406, 1.3, { extras: ['bag'] });
    walk([[-38, -30], [-38, 30]], 7407, 0.9, { top: 'tshirt', bottom: 'shorts' });
  }

  return {
    group,
    bounds: { minX: OBS.x - 17, maxX: 64, minZ: -42, maxZ: 42 },
    solids,
    spawn: { x: -6, z: -14, heading: Math.PI / 2 },
    exit: { x: -10, z: -14 },
    spots,
    talkers,
    walkers,
    doors,
    light: {
      sky: ['#79a9db', '#ffd6a0'],
      fog: ['#f0d6b4', 70, 260],
      sun: { color: '#ffd9a8', intensity: 2.4, at: [-40, 28, -30] },
      hemi: ['#cfe3ff', '#d8b98a', 1.15],
      exposure: 1.05,
    },
    animate(t, dt) {
      sea.offset.x = (sea.offset.x - dt * 0.012) % 1; sea.offset.y = Math.sin(t * 0.3) * 0.03;
      foam.position.x = -48.2 + Math.sin(t * 0.8) * 0.6;
      (foam.material as THREE.MeshBasicMaterial).opacity = 0.35 + Math.sin(t * 0.8) * 0.2;
      lamps.forEach((m, i) => { m.emissiveIntensity = 1.5 + Math.sin(t * 2 + i) * 0.15; });
    },
  };
};

export default build;
