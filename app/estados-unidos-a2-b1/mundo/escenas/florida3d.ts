// Estados Unidos 3D · Florida: Miami Beach at golden hour. From east to west:
// the Atlantic, the sand with a pink lifeguard tower, the palms of the park,
// the neon promenade, Ocean Drive with its art deco hotels and the coffee
// window, and across Biscayne Bay (a causeway) the warehouse walls of Wynwood.
import * as THREE from 'three';
import {
  addBench, addPalm, box, cylinder, extra, glow, ground, groundTexture, lightPool, makeCar, makeTalker, makeWalker, muralTexture, neonBar,
  panel, placeVehicle, random, sign, solid, spotWith, streetLamp, tileTexture, umbrella, water, windowsTexture,
  type Box, type SceneBuilder, type SpotPlace, type Talker, type Walker,
} from '../../../mundo-3d/kit3d';

const DECO = [
  { wall: '#f6d6e0', trim: '#e2729b', neon: '#ff5fa2', name: 'PELICANO' },
  { wall: '#d7f0ea', trim: '#3fb3a3', neon: '#46e3d0', name: 'MAREA' },
  { wall: '#fff1c9', trim: '#e6a73a', neon: '#ffc045', name: 'SOL' },
  { wall: '#e3dcf6', trim: '#8a6fd1', neon: '#b48cff', name: 'BRISA' },
];

const build: SceneBuilder = ({ low, shadows }) => {
  const group = new THREE.Group();
  const solids: Box[] = [];
  const spots: SpotPlace[] = [];
  const talkers: Talker[] = [];
  const walkers: Walker[] = [];
  const neons: THREE.MeshStandardMaterial[] = [];
  const lamps: THREE.MeshStandardMaterial[] = [];
  const flags: THREE.Mesh[] = [];
  const rand = random(305);
  const solidBox = (x0: number, z0: number, x1: number, z1: number, top?: number) => solids.push(top == null ? { x0, x1, z0, z1 } : { x0, x1, z0, z1, top });

  // ---------------------------------------------------------- ground
  const sand = groundTexture('#ecd7aa', ['#d9c08e', '#f7e7c4', '#c9ad7a'], 11);
  const grass = groundTexture('#6f9c4a', ['#5d8a3c', '#86b05a'], 12);
  const asphalt = groundTexture('#4a4c51', ['#3d3f43', '#5b5d62'], 13);
  const pavers = tileTexture('#e9dfcf', '#cdbfa8', 4);
  const deck = tileTexture('#b58a5c', '#8b6440', 8);
  ground(group, 18, -60, 34, 60, sand, '#ffffff', 8);
  const sea = water(group, 34, -90, 140, 90, '#1f8fb0', '#bff1ff', -0.06);
  // Foam where the waves end.
  const foam = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 120), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.55, depthWrite: false }));
  foam.rotation.x = -Math.PI / 2; foam.position.set(34.2, 0.01, 0); group.add(foam);
  ground(group, 12, -60, 18, 60, grass, '#ffffff', 6, 0.01);
  ground(group, 9, -60, 12, 60, deck, '#ffffff', 3, 0.02);
  ground(group, 2, -60, 9, 60, asphalt, '#ffffff', 8, 0.01);
  ground(group, -4, -60, 2, 60, pavers, '#ffffff', 3, 0.02);
  ground(group, -16, -60, -4, 60, pavers, '#f2ece2', 3, 0.005);
  // Ocean Drive: a yellow centre line.
  ground(group, 5.4, -60, 5.6, 60, null, '#f2c94c', 1, 0.02, 0.6);
  // Biscayne Bay and the causeway across it.
  const bay = water(group, -26, -60, -16, 60, '#1b6f8a', '#9fe3f0', -0.08);
  ground(group, -26, -4, -16, 4, asphalt, '#ffffff', 8, 0.03);
  for (const z of [-4.2, 4.2]) group.add(box(10, 0.9, 0.25, solid('#e8e4dc', 0.7), -21, 0.45, z));
  solidBox(-26, -60, -16, -4.1); solidBox(-26, 4.1, -16, 60);
  // Wynwood: concrete and asphalt.
  ground(group, -48, -60, -26, 60, groundTexture('#8d8a86', ['#7a7773', '#a29f9a'], 14), '#ffffff', 6, 0.01);

  // ---------------------------------------------------------- the beach
  // Marisol's pink lifeguard tower, raised on legs, with the flag board.
  const tower = new THREE.Group();
  const pink = solid('#f08fb3', 0.6), white = solid('#fbf7f0', 0.6);
  for (const [lx, lz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) tower.add(cylinder(0.08, 0.08, 1.9, white, lx, 0.95, lz, 6));
  tower.add(box(2.6, 0.18, 2.6, white, 0, 1.95, 0));
  tower.add(box(2.2, 1.6, 2.2, pink, 0, 2.85, 0));
  tower.add(box(2.2, 0.5, 0.05, solid('#2a3a4a', 0.2, 0.3), 0, 3.15, 1.11, false));
  const roof = new THREE.Mesh(new THREE.ConeGeometry(1.9, 0.8, 4), solid('#5ac2d6', 0.6));
  roof.rotation.y = Math.PI / 4; roof.position.y = 4.05; tower.add(roof);
  const ramp = box(0.9, 0.08, 3.2, white, 0, 1.0, -2.5); ramp.rotation.x = 0.55; tower.add(ramp);
  tower.position.set(27, 0, 5);
  group.add(tower);
  solidBox(25.7, 3.7, 28.3, 6.3, 2.05);
  // The flag pole: today's flag waves.
  group.add(cylinder(0.05, 0.05, 4.6, white, 24.6, 2.3, 7.4, 6));
  for (const [color, y] of [['#f2c230', 4.2], ['#8e44ad', 3.35]] as const) {
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.7, 6, 1), new THREE.MeshStandardMaterial({ color, side: THREE.DoubleSide, roughness: 0.8 }));
    flag.position.set(25.15, y, 7.4); group.add(flag); flags.push(flag);
  }
  sign(group, 'GREEN · YELLOW · RED · PURPLE', 22.7, 1.4, 8.6, Math.PI / 2, 2.4, '#ffffff', '#22303d');
  group.add(box(0.1, 1.2, 0.1, white, 22.7, 0.6, 8.0)); group.add(box(0.1, 1.2, 0.1, white, 22.7, 0.6, 9.2));
  spotWith(group, spots, talkers, 'playa', 24.5, 2.2, 0.9, 3101, { body: 'f', age: 'young', top: 'tshirt', topColor: '#d93a3a', bottom: 'shorts', bottomColor: '#d93a3a', hairStyle: 'ponytail', extras: ['glasses'] }, 'arms', 'smile', shadows);
  // Umbrellas, towels and people in the sun.
  const umbrellas = low ? 5 : 10;
  for (let i = 0; i < umbrellas; i++) {
    const x = 21 + rand() * 10, z = -40 + i * (80 / umbrellas) + rand() * 3;
    if (Math.abs(z - 4) < 6) continue;
    umbrella(group, x, z, ['#f2b134', '#e85d75', '#3fa7d6', '#58b368'][i % 4]);
    const towel = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.9), solid(['#ff8fab', '#ffd166', '#06d6a0', '#118ab2'][i % 4], 0.9));
    towel.rotation.x = -Math.PI / 2; towel.position.set(x + 1.2, 0.02, z); group.add(towel);
    if (i % 2 === 0) extra(group, talkers, x + 1.2, z, rand() * 6, 3200 + i, { top: 'tshirt', bottom: 'shorts', extras: ['glasses'] }, 'lie', 'sleepy', shadows);
    solidBox(x - 0.25, z - 0.25, x + 0.25, z + 0.25);
  }
  extra(group, talkers, 33, -12, Math.PI / 2, 3301, { top: 'tshirt', topColor: '#1d6fa3', bottom: 'shorts' }, 'fish', 'neutral', shadows);
  extra(group, talkers, 30.5, 16, -1.2, 3302, { top: 'tshirt', bottom: 'shorts' }, 'crouch', 'laugh', shadows);

  // ---------------------------------------------------------- park and promenade
  const palms = low ? 9 : 18;
  for (let i = 0; i < palms; i++) {
    const z = -56 + i * (112 / palms) + rand() * 2;
    if (Math.abs(z - 20) < 3 || Math.abs(z - 2) < 2) continue;
    addPalm(group, 14 + rand() * 3, z, 6.5 + rand() * 2.5, 400 + i);
    solidBox(14.6, z - 0.3, 15.4 + 2, z + 0.3);
  }
  for (let z = -48; z <= 48; z += 12) {
    streetLamp(group, 9.3, z, lamps, 4.2, '#ffd9a8');
    solidBox(9.15, z - 0.15, 9.45, z + 0.15);
    lightPool(group, 9.8, z, 3, '#ffcf8a', 0.22);
  }
  // Rosa's stretch of the promenade: string lights in neon colours and benches facing the sea.
  const neonColors = ['#ff4fa3', '#3fe8ff', '#ffe14f', '#9b6bff'];
  for (let i = 0; i < 12; i++) {
    const bulb = glow(neonColors[i % 4], 1.8);
    neons.push(bulb);
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), bulb);
    m.position.set(11.6, 3.1 - Math.sin((i / 11) * Math.PI) * 0.5, 14 + i);
    group.add(m);
  }
  for (const z of [14, 26]) { group.add(cylinder(0.06, 0.06, 3.3, solid('#2a2e33', 0.5, 0.4), 11.6, 1.65, z, 6)); solidBox(11.45, z - 0.15, 11.75, z + 0.15); }
  addBench(group, 12.6, 18, -Math.PI / 2); solidBox(12.3, 17.1, 12.9, 18.9, 0.5);
  addBench(group, 12.6, 23, -Math.PI / 2); solidBox(12.3, 22.1, 12.9, 23.9, 0.5);
  spotWith(group, spots, talkers, 'paseo', 10.5, 20.4, 0, 3501, { body: 'f', age: 'old', top: 'dress', topColor: '#2a9d8f', hairStyle: 'bob', hairColor: '#d8d4cc', extras: ['earrings', 'bag'] }, 'stand', 'smile', shadows);
  extra(group, talkers, 12.6, 23, Math.PI / 2, 3502, { age: 'adult' }, 'sit', 'neutral', shadows);

  // ---------------------------------------------------------- Ocean Drive
  const carColors = ['#5ec8d8', '#f7a1c4', '#f5e6a8', '#c94b4b', '#eeeeee', '#7fb069'];
  const parked = low ? 4 : 7;
  for (let i = 0; i < parked; i++) {
    const z = -44 + i * (88 / parked) + rand() * 3;
    if (Math.abs(z) < 5) continue;
    const car = makeCar(i % 3 === 0 ? 'coupe' : 'sedan', carColors[i % carColors.length]).group;
    placeVehicle(car, 3.3, z, Math.PI / 2);
    group.add(car);
    solidBox(2.4, z - 2.3, 4.2, z + 2.3, 1.35);
  }
  // Two cars cruise slowly up and down the far lane (not solid: they stop for nobody, they are scenery on the far side).
  const cruisers = [makeCar('coupe', '#f7a1c4').group, makeCar('sedan', '#5ec8d8').group];
  cruisers.forEach(c => group.add(c));

  // ---------------------------------------------------------- the hotels
  const hotel = (x0: number, z0: number, x1: number, z1: number, h: number, i: number) => {
    const d = DECO[i % DECO.length];
    const facade = windowsTexture(d.wall, '#4f6d80', '#ffe7b3', 4, 4, 70 + i, 0.3);
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, h, z1 - z0), [0, 1, 2, 3, 4, 5].map(k => {
      if (k === 2 || k === 3) return solid('#f4efe6', 0.8);
      const t = facade.clone(); t.needsUpdate = true; t.repeat.set(Math.max(1, Math.round(((k < 2 ? z1 - z0 : x1 - x0)) / 5)), Math.round(h / 4));
      return new THREE.MeshStandardMaterial({ map: t, roughness: 0.8 });
    }));
    mesh.position.set((x0 + x1) / 2, h / 2, (z0 + z1) / 2); mesh.castShadow = shadows; mesh.receiveShadow = true;
    group.add(mesh);
    // Eyebrows: the thin ledges over each floor that make it art deco.
    for (let y = 3.6; y < h - 0.5; y += 3.4) group.add(box(0.8, 0.14, z1 - z0 + 0.2, solid(d.trim, 0.6), x1 + 0.3, y, (z0 + z1) / 2, false));
    // The vertical fin with the hotel's name in neon, and a band at the top.
    const fin = box(0.3, h * 0.55, 1.4, solid(d.wall, 0.6), x1 + 0.2, h * 0.62, (z0 + z1) / 2, false); group.add(fin);
    neons.push(neonBar(group, x1 + 0.38, h * 0.62, (z0 + z1) / 2, 0.05, h * 0.5, 0.12, d.neon));
    neons.push(neonBar(group, x1 + 0.08, h - 0.4, (z0 + z1) / 2, 0.05, 0.12, z1 - z0 - 0.6, d.neon, 1.3));
    sign(group, d.name, x1 + 0.06, 3.0, (z0 + z1) / 2, Math.PI / 2, 4.2, d.trim, '#ffffff', true);
    solidBox(x0, z0, x1, z1);
  };
  hotel(-16, -27, -4, -19, 11, 2);
  hotel(-16, 6, -5, 17, 13, 0);
  hotel(-16, 19, -4, 30, 10, 1);
  hotel(-16, 32, -4, 46, 12, 3);
  hotel(-16, -44, -4, -29, 9, 3);
  // The Pelicano's porch: an awning, two columns and a sofa where Lucía waits.
  group.add(box(2.4, 0.15, 5.2, solid('#e2729b', 0.6), -3.8, 3.1, 11.5));
  for (const z of [9.1, 13.9]) { group.add(cylinder(0.12, 0.12, 3.0, solid('#fbf7f0', 0.5), -2.8, 1.5, z, 10)); solidBox(-2.95, z - 0.15, -2.65, z + 0.15); }
  group.add(box(0.8, 0.45, 2.2, solid('#3fb3a3', 0.8), -4.4, 0.25, 11.5)); solidBox(-4.85, 10.4, -4.0, 12.6, 0.5);
  sign(group, 'RECEPTION · RECEPCIÓN', -4.98, 2.4, 11.5, Math.PI / 2, 2.6, '#ffffff', '#e2729b');
  spotWith(group, spots, talkers, 'hotel', -1.6, 11.5, -Math.PI / 2, 3301 + 7, { body: 'f', age: 'young', top: 'shirt', topColor: '#f4a261', bottom: 'jeans', hairStyle: 'long', hairColor: '#3a2618', extras: ['bag'] }, 'sit', 'worried', shadows, 2.4);

  // The café with its window onto the street (la ventanita).
  const cafeWall = windowsTexture('#ffe0b8', '#6b4a33', '#ffd27a', 2, 1, 81, 0.6);
  const cafe = new THREE.Mesh(new THREE.BoxGeometry(6, 4, 8), new THREE.MeshStandardMaterial({ map: cafeWall, roughness: 0.85 }));
  cafe.position.set(-9, 2, -13); cafe.castShadow = shadows; group.add(cafe);
  solidBox(-12, -17, -6, -9);
  group.add(box(0.5, 1.05, 3, solid('#7a4b2a', 0.7), -5.0, 0.53, -13)); // counter
  group.add(box(0.7, 0.06, 3.2, solid('#e8e2d6', 0.4), -4.95, 1.08, -13));
  group.add(box(1.5, 3.8, 0.3, solid('#ffe0b8', 0.8), -5.4, 1.9, -14.65)); group.add(box(1.5, 3.8, 0.3, solid('#ffe0b8', 0.8), -5.4, 1.9, -11.35));
  solidBox(-6, -17, -4.7, -14.5); solidBox(-6, -11.5, -4.7, -9); solidBox(-6, -14.5, -4.75, -11.5);
  const awning = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.1, 4.2), new THREE.MeshStandardMaterial({ color: '#d62839', roughness: 0.7 }));
  awning.position.set(-4.5, 3.0, -13); awning.rotation.z = -0.2; group.add(awning);
  sign(group, 'CAFÉ LA VENTANITA', -5.95, 3.55, -13, Math.PI / 2, 3.8, '#d62839', '#fff4d6');
  talkers.push(makeTalker(group, 'cafeteria', -5.6, -13, Math.PI / 2, 3203, { body: 'm', age: 'adult', top: 'apron', topColor: '#ffffff', hairStyle: 'short', extras: ['mustache'] }, 'cook', 'smile', shadows));
  spots.push({ id: 'cafeteria', x: -2.6, z: -13, heading: -Math.PI / 2 });
  // The three o'clock crowd at the window.
  extra(group, talkers, -2.4, -15.6, -0.6, 3204, { top: 'uniform', topColor: '#3d5a80' }, 'phone', 'neutral', shadows);
  extra(group, talkers, -1.8, -10.4, -2.4, 3205, { top: 'shirt' }, 'arms', 'laugh', shadows);
  // Tables of the sidewalk restaurants.
  for (const z of [-34, 22, 27, 38]) {
    group.add(cylinder(0.45, 0.45, 0.05, solid('#f5f5f5', 0.4), -2.6, 0.75, z, 14)); group.add(cylinder(0.05, 0.05, 0.75, solid('#999999', 0.4, 0.5), -2.6, 0.38, z, 6));
    umbrella(group, -2.6, z, '#1d3557', '#f1faee', 2.4);
    solidBox(-3.1, z - 0.5, -2.1, z + 0.5);
    extra(group, talkers, -3.4, z, Math.PI / 2, 3400 + z, {}, 'sit', 'smile', shadows);
  }

  // ---------------------------------------------------------- Wynwood
  const palette = ['#ff5d8f', '#ffd23f', '#3bceac', '#0ead69', '#540d6e', '#ee4266', '#1b98e0', '#f8f9fa', '#ff9f1c'];
  const warehouse = (x0: number, z0: number, x1: number, z1: number, h: number, face: 'east' | 'west', seed: number, blank = false) => {
    block(x0, z0, x1, z1, h);
    const w = z1 - z0;
    const x = face === 'east' ? x1 + 0.03 : x0 - 0.03;
    const tex = blank ? null : muralTexture(seed, palette);
    if (tex) panel(group, tex, x, h / 2, (z0 + z1) / 2, face === 'east' ? Math.PI / 2 : -Math.PI / 2, w - 0.4, h - 0.4);
    else panel(group, canvasWhite(), x, h / 2, (z0 + z1) / 2, face === 'east' ? Math.PI / 2 : -Math.PI / 2, w - 0.4, h - 0.4);
    solidBox(x0, z0, x1, z1);
  };
  function block(x0: number, z0: number, x1: number, z1: number, h: number) {
    group.add(box(x1 - x0, h, z1 - z0, solid('#9a948c', 0.95), (x0 + x1) / 2, h / 2, (z0 + z1) / 2, shadows));
  }
  function canvasWhite() {
    const c = document.createElement('canvas'); c.width = c.height = 16;
    const ctx = c.getContext('2d')!; ctx.fillStyle = '#f4f1ea'; ctx.fillRect(0, 0, 16, 16);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }
  warehouse(-48, -40, -37, -26, 7, 'east', 501);
  warehouse(-48, -24, -37, -12, 6, 'east', 502);
  warehouse(-48, -10, -37, 2, 7.5, 'east', 503);
  warehouse(-48, 4, -37, 14, 6, 'east', 0, true);
  warehouse(-48, 16, -37, 30, 7, 'east', 505);
  warehouse(-31, -40, -26, -22, 6.5, 'west', 506);
  warehouse(-31, -20, -26, -6, 7, 'west', 507);
  warehouse(-31, 6, -26, 20, 6, 'west', 508);
  warehouse(-31, 22, -26, 36, 7, 'west', 509);
  // Half of the white wall is already painted: Darius's work in progress.
  panel(group, muralTexture(777, ['#ffd23f', '#ff5d8f', '#1b98e0', '#f4f1ea']), -36.95, 2.2, 7, Math.PI / 2, 5.6, 4.2);
  sign(group, 'WYNWOOD', -36.9, 5.4, -4, Math.PI / 2, 5, '#111111', '#ffd23f', true);
  for (let i = 0; i < 6; i++) { const can = cylinder(0.07, 0.07, 0.22, solid(palette[i], 0.4, 0.3), -36.3 + (i % 3) * 0.18, 0.11, 10.6 + Math.floor(i / 3) * 0.2, 8); group.add(can); }
  spotWith(group, spots, talkers, 'murales', -34.6, 8.6, -0.35, 3601, { body: 'm', age: 'young', top: 'hoodie', topColor: '#2b2d42', bottom: 'jeans', hairStyle: 'afro', extras: ['headphones'] }, 'point', 'smile', shadows, 2.2);
  extra(group, talkers, -30, -24, 0.4, 3602, { extras: ['phone'] }, 'phone', 'surprised', shadows);
  extra(group, talkers, -36, 24, -1.8, 3603, {}, 'point', 'laugh', shadows);

  // ---------------------------------------------------------- walkers
  const walk = (path: [number, number][], seed: number, speed: number, look = {}) => walkers.push(makeWalker(group, path.map(([x, z]) => ({ x, z })), seed, speed, look, shadows));
  walk([[0.5, -44], [0.5, 44]], 3701, 1.1);
  walk([[-1.2, 40], [-1.2, -40]], 3702, 1.0);
  walk([[10.4, -40], [10.4, 40]], 3703, 2.6, { top: 'tshirt', bottom: 'shorts', extras: ['headphones'] }); // skater pace
  walk([[22, -30], [22, 30]], 3704, 0.9, { top: 'tshirt', bottom: 'shorts' });
  if (!low) {
    walk([[-34, -30], [-34, 30]], 3705, 1.0);
    walk([[10.6, 30], [10.6, -30]], 3706, 1.2, { age: 'old' });
    walk([[-21, -2], [-12, -2], [-12, 2], [-21, 2]], 3707, 1.1);
  }

  return {
    group,
    bounds: { minX: -46, maxX: 33, minZ: -38, maxZ: 38 },
    solids,
    spawn: { x: 0, z: -28, heading: 0 },
    exit: { x: 0, z: -33 },
    spots,
    talkers,
    walkers,
    light: {
      sky: ['#5b8fd1', '#ffc890'],
      fog: ['#f3c9a0', 60, 210],
      sun: { color: '#ffd2a1', intensity: 2.3, at: [40, 30, -20] },
      hemi: ['#bfdcff', '#e9c28a', 1.15],
      exposure: 1.05,
    },
    animate(t, dt) {
      sea.offset.x = (sea.offset.x + dt * 0.012) % 1; sea.offset.y = Math.sin(t * 0.3) * 0.03;
      bay.offset.y = (bay.offset.y + dt * 0.006) % 1;
      foam.position.x = 34.2 - Math.sin(t * 0.8) * 0.6;
      (foam.material as THREE.MeshBasicMaterial).opacity = 0.35 + Math.sin(t * 0.8) * 0.2;
      for (const f of flags) { const pos = f.geometry.attributes.position; for (let i = 0; i < pos.count; i++) { const x = pos.getX(i); pos.setZ(i, Math.sin(t * 5 + x * 4) * 0.08 * (x + 0.55)); } pos.needsUpdate = true; }
      neons.forEach((m, i) => { m.emissiveIntensity = 1.5 + Math.sin(t * 2 + i) * 0.25 + (Math.sin(t * 23 + i * 7) > 0.985 ? -1 : 0); });
      cruisers.forEach((c, i) => {
        const z = ((t * 4.5 + i * 60) % 120) - 60;
        placeVehicle(c, i ? 6.6 : 8.0, i ? -z : z, i ? -Math.PI / 2 : Math.PI / 2);
      });
    },
  };
};

export default build;
