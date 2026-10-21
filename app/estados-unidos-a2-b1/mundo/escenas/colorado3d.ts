// Estados Unidos 3D · Colorado: an old silver-mining town high in the Rockies,
// the morning after a snowfall. Main Street with its false-front wooden
// buildings (Hank's hardware store, the saloon, Sofía's café open to the
// street), the frozen-edged lake with the kayaks to the east, the trail through
// pines and aspens to the north, and (by the chairlift) the ski area above.
import * as THREE from 'three';
import {
  box, cylinder, extra, glow, ground, groundTexture, labelTexture, lightPool, makeCar, makeWalker,
  panel, placeVehicle, random, sign, solid, spotWith, streetLamp, tileTexture, water,
  type Box, type SceneBuilder, type SpotPlace, type Talker, type Walker,
} from '../../../mundo-3d/kit3d';

const SKI = { x: 200, z: 0 };

const build: SceneBuilder = ({ low, shadows }) => {
  const group = new THREE.Group();
  const solids: Box[] = [];
  const spots: SpotPlace[] = [];
  const talkers: Talker[] = [];
  const walkers: Walker[] = [];
  const lamps: THREE.MeshStandardMaterial[] = [];
  const rand = random(6203);
  const solidBox = (x0: number, z0: number, x1: number, z1: number, top?: number) => solids.push(top == null ? { x0, x1, z0, z1 } : { x0, x1, z0, z1, top });

  // ---------------------------------------------------------- ground
  const snow = groundTexture('#f4f7fb', ['#e3e9f2', '#ffffff', '#d9e2ee'], 71);
  const packed = groundTexture('#cfc8bd', ['#b9b0a2', '#e6e2dc', '#a89e90'], 72);
  const boards = tileTexture('#8a6a4a', '#6b4e34', 10);
  ground(group, -44, -44, 44, 44, snow, '#ffffff', 10);
  ground(group, -42, -3, 14, 3, packed, '#ffffff', 10, 0.01); // Main Street
  ground(group, -40, 3, 12, 5, boards, '#ffffff', 6, 0.02); ground(group, -40, -5, 12, -3, boards, '#ffffff', 6, 0.02);
  solidBox(-46, -46, 46, -44); solidBox(-46, 44, 46, 46); solidBox(-46, -46, -44, 46); solidBox(44, -46, 46, 46);

  // ---------------------------------------------------------- the Rockies all around
  const peak = (x: number, z: number, r: number, h: number, i: number) => {
    const rock = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), solid(i % 2 ? '#6d7480' : '#5e6570', 1)); rock.position.set(x, h / 2 - 2, z); rock.rotation.y = i; group.add(rock);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(r * 0.42, h * 0.42, 7), solid('#f4f7fb', 0.8)); cap.position.set(x, h - 2 - h * 0.21 + 0.3, z); cap.rotation.y = i; group.add(cap);
  };
  const peaks: [number, number, number, number][] = [[-120, 90, 60, 90], [-40, 130, 70, 110], [60, 120, 65, 100], [140, 70, 55, 85], [150, -40, 60, 80], [90, -130, 70, 95], [-20, -140, 60, 85], [-130, -60, 65, 90], [-160, 20, 50, 70]];
  peaks.forEach(([x, z, r, h], i) => peak(x, z, r, h, i));
  // Pines everywhere around the edges.
  const pineMat = [solid('#1f4a33', 0.9), solid('#2a5a3d', 0.9), solid('#173d2a', 0.9)];
  const snowCap = solid('#f4f7fb', 0.8);
  const pine = (x: number, z: number, h: number, i: number, solidToo = true) => {
    group.add(cylinder(0.18, 0.25, h * 0.3, solid('#4a3626'), x, h * 0.15, z, 6));
    for (let k = 0; k < 3; k++) {
      const c = new THREE.Mesh(new THREE.ConeGeometry(h * (0.32 - k * 0.07), h * 0.45, 8), pineMat[(i + k) % 3]); c.position.set(x, h * (0.35 + k * 0.2), z); c.castShadow = shadows; group.add(c);
      const s = new THREE.Mesh(new THREE.ConeGeometry(h * (0.2 - k * 0.04), h * 0.16, 8), snowCap); s.position.set(x, h * (0.5 + k * 0.2), z); group.add(s);
    }
    if (solidToo) solidBox(x - 0.4, z - 0.4, x + 0.4, z + 0.4);
  };
  const aspen = (x: number, z: number, h: number, i: number) => {
    group.add(cylinder(0.12, 0.15, h, solid('#e8e4da', 0.7), x, h / 2, z, 6));
    for (let k = 0; k < 3; k++) group.add(box(0.14, 0.04, 0.02, solid('#2a2a2a'), x, 0.8 + k * 1.1 + (i % 3) * 0.3, z + 0.13, false));
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1 + (i % 3) * 0.3, 0), solid(i % 3 === 0 ? '#e8b730' : '#f2c84b', 0.8)); crown.scale.y = 1.4; crown.position.set(x, h + 0.6, z); group.add(crown);
    solidBox(x - 0.25, z - 0.25, x + 0.25, z + 0.25);
  };
  for (let i = 0; i < (low ? 24 : 48); i++) {
    const a = rand() * Math.PI * 2, d = 47 + rand() * 30;
    pine(Math.cos(a) * d, Math.sin(a) * d, 9 + rand() * 7, i, false);
  }

  // ---------------------------------------------------------- Main Street: false-front wooden buildings
  const front = (x0: number, x1: number, zFront: number, side: 1 | -1, color: string, label: string, i: number, depth = 8) => {
    const w = x1 - x0, cx = (x0 + x1) / 2, cz = zFront + side * depth / 2;
    const h = 5 + (i % 3) * 0.8;
    group.add(box(w, h, depth, solid(color, 0.9), cx, h / 2, cz));
    group.add(box(w + 0.1, 1.6, 0.25, solid(color, 0.9), cx, h + 0.8, zFront + side * 0.12)); // the false front
    group.add(box(w + 0.3, 0.2, depth + 0.3, snowCap, cx, h + 0.1, cz, false)); // snow on the roof
    for (let k = 0; k < 2; k++) group.add(box(1.6, 1.8, 0.06, solid('#2e3a46', 0.15, 0.4), cx + (k ? 1.8 : -1.8), 2.0, zFront - side * 0.02, false));
    group.add(box(1.2, 2.3, 0.06, solid('#5a3a22', 0.7), cx, 1.15, zFront - side * 0.02, false));
    sign(group, label, cx, h + 0.8, zFront - side * 0.02, side > 0 ? Math.PI : 0, Math.min(w - 0.6, 6), '#f4ead6', '#5a2e1a');
    // Porch roof on posts over the boardwalk.
    group.add(box(w, 0.12, 1.8, solid('#6b4e34', 0.8), cx, 3.2, zFront - side * 0.9, false));
    group.add(box(w, 0.1, 1.8, snowCap, cx, 3.3, zFront - side * 0.9, false));
    for (const px of [x0 + 0.2, x1 - 0.2]) { group.add(box(0.15, 3.2, 0.15, solid('#6b4e34', 0.8), px, 1.6, zFront - side * 1.7)); solidBox(px - 0.12, zFront - side * 1.7 - 0.12, px + 0.12, zFront - side * 1.7 + 0.12); }
    solidBox(x0, Math.min(zFront, zFront + side * depth), x1, Math.max(zFront, zFront + side * depth));
  };
  front(-38, -28, 5, 1, '#9a5a3c', 'ASSAY OFFICE', 0);
  front(-26, -16, 5, 1, '#6f8a9a', 'HANK’S HARDWARE · 1889', 1);
  front(-14, -6, 5, 1, '#8a3a2e', 'SILVER DOLLAR SALOON', 2);
  front(-4, 4, 5, 1, '#c9b48a', 'MINERS BANK', 3);
  front(-38, -28, -5, -1, '#5c7a5a', 'GENERAL STORE', 4);
  front(-6, 4, -5, -1, '#7a6a9a', 'OPERA HOUSE', 5);
  // Hank's goods on the porch: shovels, sleds and a barrel.
  for (let k = 0; k < 5; k++) { const sh = box(0.3, 1.5, 0.05, solid(['#c0392b', '#2b6cb0', '#e0a33a', '#3a7a4a', '#7a7a7a'][k], 0.5, 0.3), -25 + k * 0.45, 0.8, 4.85, false); sh.rotation.z = 0.15; group.add(sh); }
  group.add(cylinder(0.4, 0.4, 0.9, solid('#6b4e34', 0.8), -17, 0.45, 4.4, 12)); solidBox(-17.45, 3.95, -16.55, 4.85, 0.9);
  for (let k = 0; k < 2; k++) { const sled = box(0.6, 0.1, 1.4, solid('#b5432b', 0.6), -24 + k * 1.2, 0.25, 3.6, false); sled.rotation.x = 0.1; group.add(sled); }
  solidBox(-24.4, 2.9, -22.4, 4.3, 0.35);
  // Hank on his porch with a snow shovel in hand.
  spotWith(group, spots, talkers, 'pueblo', -20.6, 1.0, 0.15, 6301, { body: 'm', age: 'elderly', build: 'heavy', top: 'coat', topColor: '#7a2a1e', bottom: 'jeans', hairStyle: 'short', hairColor: '#d8d4cc', extras: ['beard', 'hat'] }, 'arms', 'smile', shadows, 2.9);

  // ---------------------------------------------------------- Sofía's café: open to the street, fireplace inside
  {
    const C = { x0: -24, x1: -10, z0: -13, z1: -5 };
    const wood = solid('#c49a6c', 0.85);
    group.add(box(14, 4.4, 0.3, wood, -17, 2.2, C.z0)); // back wall
    group.add(box(0.3, 4.4, 8, wood, C.x0, 2.2, -9)); group.add(box(0.3, 4.4, 8, wood, C.x1, 2.2, -9));
    group.add(box(2.5, 4.4, 0.3, wood, C.x0 + 1.25, 2.2, C.z1)); group.add(box(2.5, 4.4, 0.3, wood, C.x1 - 1.25, 2.2, C.z1));
    group.add(box(9, 1.0, 0.3, wood, -17, 3.9, C.z1));
    group.add(box(14.4, 0.25, 8.4, solid('#5a3a22', 0.9), -17, 4.5, -9)); group.add(box(14.6, 0.3, 8.6, snowCap, -17, 4.75, -9, false));
    group.add(box(14.6, 1.6, 0.25, solid('#a0714a', 0.85), -17, 5.6, C.z1 - 0.1));
    sign(group, 'SOFÍA’S · CAFÉ & CHOCOLATE', -17, 5.6, C.z1 + 0.06, 0, 6.4, '#3a2416', '#f6d8a8');
    const floorTex = tileTexture('#b8916a', '#9a7350', 8); floorTex.repeat.set(4, 2);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(13.6, 7.6), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.8 })); floor.rotation.x = -Math.PI / 2; floor.position.set(-17, 0.03, -9); group.add(floor);
    solidBox(C.x0 - 0.2, C.z0 - 0.2, C.x1 + 0.2, C.z0 + 0.2); solidBox(C.x0 - 0.2, C.z0, C.x0 + 0.2, C.z1 + 0.2); solidBox(C.x1 - 0.2, C.z0, C.x1 + 0.2, C.z1 + 0.2);
    solidBox(C.x0, C.z1 - 0.2, C.x0 + 2.5, C.z1 + 0.2); solidBox(C.x1 - 2.5, C.z1 - 0.2, C.x1, C.z1 + 0.2);
    // The counter, the espresso machine, the menu board.
    group.add(box(6, 1.05, 0.8, solid('#6b4a2e', 0.7), -15, 0.52, -10.4)); group.add(box(6.1, 0.06, 0.9, solid('#d8cfc0', 0.4), -15, 1.07, -10.4, false));
    solidBox(-18, -10.8, -12, -10, 1.1);
    group.add(box(0.7, 0.5, 0.45, solid('#c0c0c0', 0.25, 0.8), -13.4, 1.35, -10.5, false));
    for (let k = 0; k < 4; k++) group.add(cylinder(0.07, 0.06, 0.14, solid(['#ffffff', '#c0392b', '#2b6cb0', '#e0a33a'][k], 0.5), -16.6 + k * 0.3, 1.17, -10.2, 8));
    panel(group, labelTexture('CHOCOLATE · CAFÉ DE OLLA · TÉ', '#1d1d1d', '#f4ead6', { w: 512, h: 128 }), -15, 3.0, C.z0 + 0.17, 0, 4.2, 1.05);
    // The stone fireplace in the corner with a live fire.
    group.add(box(2.4, 3.2, 1.0, solid('#8a8580', 0.95), -22.4, 1.6, -11.8)); group.add(box(1.2, 1.0, 0.1, solid('#1a1210', 0.9), -22.4, 0.7, -11.28, false));
    group.add(box(0.9, 1.4, 0.9, solid('#8a8580', 0.95), -22.4, 5.2, -11.8)); solidBox(-23.7, -12.4, -21.1, -11.2);
    const fire = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.6, 8), glow('#ff8a2a', 2.4)); fire.position.set(-22.4, 0.5, -11.4); group.add(fire); group.userData.fire = fire;
    lightPool(group, -21.6, -10, 2.6, '#ffb36b', 0.22);
    // Armchairs and readers; the man with the newspaper is Walter.
    const armchair = (x: number, z: number, ry: number, color: string) => { const a = new THREE.Group(); a.add(box(1.0, 0.45, 1.0, solid(color, 0.9), 0, 0.42, 0)); a.add(box(1.0, 0.9, 0.25, solid(color, 0.9), 0, 0.9, -0.4)); for (const s of [-0.45, 0.45]) a.add(box(0.12, 0.6, 1.0, solid(color, 0.9), s, 0.6, 0)); a.position.set(x, 0, z); a.rotation.y = ry; group.add(a); solidBox(x - 0.6, z - 0.6, x + 0.6, z + 0.6, 0.7); };
    armchair(-21.4, -8, Math.PI / 2, '#7a2a1e'); armchair(-21.4, -6.4, Math.PI / 2, '#2a5a3d');
    extra(group, talkers, -21.2, -8, Math.PI / 2, 6310, { body: 'm', age: 'elderly', top: 'sweater', topColor: '#8a7a5a', extras: ['glasses'] }, 'read', 'neutral', shadows);
    for (const [tx, tz] of [[-11.8, -7.2], [-11.8, -11.6]] as const) { group.add(cylinder(0.45, 0.45, 0.06, solid('#6b4a2e', 0.7), tx, 0.76, tz, 14)); group.add(cylinder(0.05, 0.05, 0.76, solid('#2a2a2a'), tx, 0.38, tz, 6)); solidBox(tx - 0.5, tz - 0.5, tx + 0.5, tz + 0.5, 0.8); }
    extra(group, talkers, -11.8, -8.1, 0, 6311, { body: 'f', age: 'young', top: 'jacket', topColor: '#2b6cb0', extras: ['scarf'] }, 'phone', 'smile', shadows);
    // The wall of couples.
    for (let k = 0; k < 8; k++) panel(group, labelTexture('♥', ['#f6d8a8', '#e8c4b2', '#d8e2ee'][k % 3], '#7a2a1e', { w: 64, h: 64 }), -10.17, 1.8 + (k % 2) * 0.7, -12 + Math.floor(k / 2) * 0.7, -Math.PI / 2, 0.5, 0.5);
    // A big dog by the door, still covered in snow.
    const dog = new THREE.Group(); dog.add(box(0.9, 0.45, 0.35, solid('#3a2a1e', 0.9), 0, 0.55, 0)); dog.add(box(0.32, 0.3, 0.3, solid('#3a2a1e', 0.9), 0.55, 0.8, 0)); dog.add(box(0.85, 0.06, 0.3, snowCap, 0, 0.8, 0, false)); for (const [lx, lz] of [[-0.3, -0.12], [-0.3, 0.12], [0.3, -0.12], [0.3, 0.12]]) dog.add(box(0.1, 0.35, 0.1, solid('#3a2a1e'), lx, 0.17, lz, false));
    dog.position.set(-12.6, 0, -5.8); dog.rotation.y = 0.4; group.add(dog); solidBox(-13.2, -6.3, -12, -5.3);
  }
  spotWith(group, spots, talkers, 'cafe', -15.2, -7.2, Math.PI, 6302, { body: 'f', age: 'adult', top: 'apron', topColor: '#7a2a1e', bottom: 'jeans', hairStyle: 'ponytail', hairColor: '#1a120c', extras: ['earrings'] }, 'cook', 'laugh', shadows, 4.0);

  // ---------------------------------------------------------- the lake (east)
  const lake = water(group, 24, -34, 44, 16, '#2c6f8f', '#bfe6f2', -0.04);
  ground(group, 16, -36, 24, 18, packed, '#e8e2d8', 6, 0.006);
  const ice = new THREE.Mesh(new THREE.PlaneGeometry(20, 3), new THREE.MeshStandardMaterial({ color: '#e9f4fb', roughness: 0.2, transparent: true, opacity: 0.85 })); ice.rotation.x = -Math.PI / 2; ice.position.set(34, 0.0, 15); group.add(ice);
  solidBox(24, -36, 46, -7.2); solidBox(24, -4.8, 46, 18);
  // The dock.
  const dockTex = tileTexture('#8a6a4a', '#6b4e34', 6); dockTex.repeat.set(4, 1);
  const dock = new THREE.Mesh(new THREE.PlaneGeometry(10, 2.4), new THREE.MeshStandardMaterial({ map: dockTex, roughness: 0.85 })); dock.rotation.x = -Math.PI / 2; dock.position.set(27, 0.12, -6); group.add(dock);
  for (let k = 0; k < 5; k++) for (const s of [-1.15, 1.15]) group.add(cylinder(0.1, 0.1, 1.0, solid('#5a3e28'), 22.5 + k * 2.2, 0, -6 + s, 6));
  solidBox(32, -7.4, 33, -4.6);
  // Kayaks on the shore and the rental hut.
  const kayakColors = ['#ffd23f', '#3a9a4a', '#e94f37', '#2b6cb0'];
  for (let k = 0; k < 4; k++) { const kayak = new THREE.Mesh(new THREE.CapsuleGeometry(0.32, 3, 4, 10), solid(kayakColors[k], 0.4)); kayak.rotation.x = Math.PI / 2; kayak.scale.set(1, 1, 0.55); kayak.position.set(20.5 + (k % 2) * 1.0, 0.2, -14 - k * 1.3); group.add(kayak); }
  solidBox(19.9, -19.5, 21.8, -12);
  {
    const hut = new THREE.Group();
    hut.add(box(4, 2.8, 3, solid('#6f8a9a', 0.85), 0, 1.4, 0)); hut.add(box(4.4, 0.25, 3.4, snowCap, 0, 2.95, 0));
    hut.position.set(18.5, 0, -24); group.add(hut); solidBox(16.5, -25.5, 20.5, -22.5);
    sign(group, 'ABBY’S KAYAKS · ICE FISHING', 20.52, 2.2, -24, Math.PI / 2, 3.6, '#ffd23f', '#1d3557');
  }
  // The moose in the shallows.
  const moose = new THREE.Group();
  {
    const fur = solid('#4a3324', 0.9);
    moose.add(box(2.2, 1.1, 0.9, fur, 0, 1.9, 0)); moose.add(box(0.8, 0.9, 0.85, fur, 1.0, 2.3, 0));
    const head = new THREE.Group(); head.add(box(0.9, 0.45, 0.42, fur, 0.3, 0, 0)); head.add(box(0.12, 0.35, 0.12, fur, 0.1, -0.35, 0));
    for (const s of [-1, 1]) { const antler = box(0.5, 0.06, 0.6, solid('#cdb89a', 0.7), -0.05, 0.35, s * 0.45); antler.rotation.x = s * 0.4; head.add(antler); }
    head.position.set(1.7, 2.4, 0); moose.add(head); group.userData.mooseHead = head;
    for (const [lx, lz] of [[-0.8, -0.3], [-0.8, 0.3], [0.8, -0.3], [0.8, 0.3]]) moose.add(box(0.18, 1.5, 0.18, fur, lx, 0.75, lz, false));
    moose.position.set(27, -0.3, 8); moose.rotation.y = 2.6; group.add(moose);
  }
  // Abby by the kayaks.
  spotWith(group, spots, talkers, 'lago', 17.6, -10.2, Math.PI / 2 + 0.25, 6303, { body: 'f', age: 'young', build: 'athletic', top: 'jacket', topColor: '#e94f37', bottom: 'pants', bottomColor: '#2a3440', hairStyle: 'braids', hairColor: '#c9a46a', extras: ['hat'] }, 'point', 'smile', shadows, 2.0);

  // ---------------------------------------------------------- the trail (north): pines, aspens, the creek and the bridge
  {
    const creek = water(group, -44, 26, 14, 30, '#3a7f9a', '#d6f2ff', -0.05);
    group.userData.creek = creek;
    solidBox(-46, 26, -22, 30); solidBox(-18, 26, 16, 30);
    // The bridge.
    const deck = new THREE.Mesh(new THREE.PlaneGeometry(4, 6), new THREE.MeshStandardMaterial({ map: (() => { const t = tileTexture('#8a6a4a', '#6b4e34', 6); t.repeat.set(1, 3); return t; })(), roughness: 0.85 })); deck.rotation.x = -Math.PI / 2; deck.position.set(-20, 0.15, 28); group.add(deck);
    for (const s of [-2, 2]) { group.add(box(0.1, 0.9, 6, solid('#6b4e34'), -20 + s, 0.6, 28)); solidBox(-20 + s - 0.1, 25, -20 + s + 0.1, 31); }
    // The trail itself, from Main Street to the bridge and up into the trees.
    const trail = groundTexture('#d9cfc0', ['#c9bda8', '#e9e2d6'], 73);
    ground(group, -22, 5, -18, 26, trail, '#ffffff', 3, 0.012); ground(group, -22, 30, -18, 44, trail, '#ffffff', 3, 0.012);
    sign(group, '14er TRAILHEAD · MT. ELBERT 14,440 ft', -16.4, 2.2, 16, -Math.PI / 2, 4, '#3a2416', '#f4ead6');
    group.add(box(0.15, 2.2, 0.15, solid('#3a2416'), -16.4, 1.1, 14.1)); group.add(box(0.15, 2.2, 0.15, solid('#3a2416'), -16.4, 1.1, 17.9));
    solidBox(-16.6, 13.9, -16.2, 14.3); solidBox(-16.6, 17.7, -16.2, 18.1);
    // Trees on both sides, kept off the trail.
    const r = random(6655);
    let n = 0;
    for (let i = 0; i < 200 && n < (low ? 34 : 64); i++) {
      const x = -42 + r() * 54, z = 15 + r() * 28;
      if (Math.abs(x + 20) < 4.5 || (z > 24.5 && z < 31.5) || (x > -16 && x < -6 && z < 24)) continue;
      if (r() < 0.6) pine(x, z, 7 + r() * 6, i); else aspen(x, z, 4 + r() * 3, i);
      n++;
    }
    // A black bear far up the slope.
    const bear = new THREE.Group(); const bfur = solid('#1a1614', 0.9);
    bear.add(box(1.4, 0.8, 0.8, bfur, 0, 0.75, 0)); bear.add(box(0.5, 0.45, 0.5, bfur, 0.85, 0.95, 0)); bear.add(box(0.25, 0.2, 0.25, solid('#5a4636', 0.9), 1.15, 0.88, 0));
    for (const s of [-0.22, 0.22]) bear.add(box(0.12, 0.14, 0.08, bfur, 0.8, 1.22, s));
    for (const [lx, lz] of [[-0.5, -0.28], [-0.5, 0.28], [0.5, -0.28], [0.5, 0.28]]) bear.add(box(0.22, 0.45, 0.22, bfur, lx, 0.22, lz, false));
    bear.position.set(-34, 0, 40); bear.rotation.y = -0.6; group.add(bear); group.userData.bear = bear;
    solidBox(-35, 39, -33, 41);
  }
  // Ruth with her two poles, at the trailhead.
  const ruth = spotWith(group, spots, talkers, 'sendero', -15.2, 20.8, Math.PI / 2 + 0.2, 6304, { body: 'f', age: 'elderly', build: 'slim', top: 'jacket', topColor: '#2b6cb0', bottom: 'pants', bottomColor: '#4a4a3a', hairStyle: 'short', hairColor: '#e8e4dc', extras: ['hat', 'backpack', 'glasses'] }, 'stand', 'smile', shadows, 2.2);
  for (const s of [-0.38, 0.38]) { const pole = cylinder(0.02, 0.02, 1.3, solid('#c0c0c0', 0.3, 0.8), s, 0.65, 0.2, 5); pole.rotation.x = -0.15; ruth.person.root.add(pole); }

  // ---------------------------------------------------------- the chairlift base and the ski area
  {
    group.add(box(5, 3.2, 3.2, solid('#5a6a7a', 0.6, 0.3), 8, 1.6, 12.4)); solidBox(5.5, 10.8, 10.5, 14);
    group.add(cylinder(0.3, 0.3, 9, solid('#7a7a7a', 0.4, 0.6), 8, 4.5, 14));
    sign(group, 'CHAIRLIFT · TELESILLA', 8, 3.8, 10.75, Math.PI, 4.2, '#1d3557', '#ffffff');
    // Cables climbing away to the north-east with a few chairs.
    const cable = box(0.04, 0.04, 70, solid('#333333', 0.4, 0.6), 0, 0, 0, false); cable.position.set(20, 20, 40); cable.rotation.x = -0.36; cable.rotation.y = 0.45; group.add(cable);
  }
  const chairs: THREE.Group[] = [];
  {
    const X = SKI.x, Z = SKI.z;
    ground(group, X - 18, Z - 16, X + 18, Z + 16, snow, '#ffffff', 6, 0.01);
    // The slope rising to the north: a tilted plane with ski tracks, and the mountain behind.
    const slope = new THREE.Mesh(new THREE.PlaneGeometry(60, 140), solid('#f4f7fb', 0.85)); slope.rotation.x = -Math.PI / 2 + 0.38; slope.position.set(X, 26, Z + 80); group.add(slope);
    for (let k = 0; k < 6; k++) { const track = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 120), solid('#dfe7f0', 0.9)); track.rotation.x = -Math.PI / 2 + 0.38; track.position.set(X - 20 + k * 8, 26.05, Z + 80); track.rotation.z = (k - 3) * 0.05; group.add(track); }
    peak(X - 10, Z + 190, 90, 150, 3);
    solidBox(X - 19, Z + 15, X + 19, Z + 17); solidBox(X - 19, Z - 17, X + 19, Z - 15); solidBox(X - 19, Z - 17, X - 17, Z + 17); solidBox(X + 17, Z - 17, X + 19, Z + 17);
    // The lodge: logs, a big window, snow on the roof, skis stuck in the snow.
    const lodge = new THREE.Group();
    lodge.add(box(12, 4.4, 7, solid('#8a5a36', 0.9), 0, 2.2, 0));
    for (let k = 0; k < 10; k++) lodge.add(cylinder(0.2, 0.2, 12.2, solid(k % 2 ? '#7a4e2e' : '#94643e', 0.9), 0, 0.25 + k * 0.44, -3.55, 8).rotateZ(Math.PI / 2));
    const roof1 = box(13, 0.3, 4.6, solid('#5a3a22', 0.9), 0, 5.4, -1.8); roof1.rotation.x = 0.55; lodge.add(roof1);
    const roof2 = box(13, 0.3, 4.6, solid('#5a3a22', 0.9), 0, 5.4, 1.8); roof2.rotation.x = -0.55; lodge.add(roof2);
    const snowR1 = box(13.2, 0.25, 4.6, snowCap, 0, 5.65, -1.8, false); snowR1.rotation.x = 0.55; lodge.add(snowR1);
    const snowR2 = box(13.2, 0.25, 4.6, snowCap, 0, 5.65, 1.8, false); snowR2.rotation.x = -0.55; lodge.add(snowR2);
    lodge.add(box(5, 2.2, 0.06, glow('#ffcf8a', 0.7), -2, 2.2, -3.75, false));
    lodge.position.set(X - 4, 0, Z + 10); group.add(lodge); solidBox(X - 10.2, Z + 6.3, X + 2.2, Z + 13.7);
    sign(group, 'SUMMIT LODGE · SOPA CALIENTE', X - 4, 4.6, Z + 6.2, Math.PI, 5, '#3a2416', '#f6d8a8');
    for (let k = 0; k < 6; k++) { const ski = box(0.08, 1.7, 0.03, solid(['#e94f37', '#2b6cb0', '#ffd23f'][k % 3], 0.4), X + 1 + k * 0.25, 0.85, Z + 5.5, false); ski.rotation.z = (k % 2 ? 0.08 : -0.08); group.add(ski); }
    solidBox(X + 0.8, Z + 5.3, X + 2.6, Z + 5.7);
    // The chairlift: towers and moving chairs.
    for (let k = 0; k < 4; k++) { group.add(box(0.5, 9, 0.5, solid('#7a7a7a', 0.4, 0.6), X + 10, 4.5 + k * 5, Z - 6 + k * 14)); group.add(box(3, 0.3, 0.3, solid('#7a7a7a', 0.4, 0.6), X + 10, 9 + k * 5, Z - 6 + k * 14)); }
    solidBox(X + 9.6, Z - 6.4, X + 10.4, Z - 5.6);
    for (let k = 0; k < (low ? 5 : 9); k++) {
      const chair = new THREE.Group();
      chair.add(box(0.04, 1.6, 0.04, solid('#333333'), 0, -0.8, 0)); chair.add(box(1.4, 0.1, 0.6, solid('#1d3557', 0.5), 0, -1.6, 0.2)); chair.add(box(1.4, 0.6, 0.08, solid('#1d3557', 0.5), 0, -1.3, -0.1));
      group.add(chair); chairs.push(chair);
    }
    group.userData.ski = { X, Z };
    // The trail map and skiers.
    panel(group, labelTexture('VERDE · AZUL · NEGRA', '#1d3557', '#ffffff', { w: 512, h: 128, border: '#ffffff' }), X - 12, 2.4, Z - 2, Math.PI / 2, 4, 1);
    group.add(box(0.15, 2.4, 0.15, solid('#3a3a3a'), X - 12.1, 1.2, Z - 4)); group.add(box(0.15, 2.4, 0.15, solid('#3a3a3a'), X - 12.1, 1.2, Z)); solidBox(X - 12.3, Z - 4.2, X - 11.9, Z + 0.2);
    extra(group, talkers, X - 6, Z - 5, 0.4, 6320, { body: 'f', age: 'child', top: 'coat', topColor: '#ff6fb5', extras: ['helmet'] }, 'wave', 'laugh', shadows);
    extra(group, talkers, X + 4, Z + 2, -2.4, 6321, { top: 'coat', topColor: '#2a9d8f', extras: ['helmet', 'glasses'] }, 'stand', 'smile', shadows);
    lightPool(group, X - 4, Z + 4, 4, '#ffcf8a', 0.12);
    spotWith(group, spots, talkers, 'esqui', X + 1.6, Z - 3.4, Math.PI / 2 - 0.2, 6305, { body: 'm', age: 'adult', build: 'athletic', top: 'coat', topColor: '#e94f37', bottom: 'pants', bottomColor: '#1a1a1a', hairStyle: 'short', hairColor: '#2a1a12', extras: ['glasses', 'beard'] }, 'point', 'laugh', shadows, 2.1);
  }
  const doors = [
    { x: 8, z: 9.4, label: 'Subir en la telesilla a la estación de esquí', to: { x: SKI.x + 6, z: SKI.z - 10, heading: 0 } },
    { x: SKI.x + 9, z: SKI.z - 12, label: 'Bajar al pueblo', to: { x: 8, z: 7.6, heading: Math.PI } },
  ];

  // ---------------------------------------------------------- street life
  [['sedan', '#2a5a3d', -8, -1.6, Math.PI], ['van', '#8a3a2e', -32, 1.6, 0]].forEach(([kind, color, x, z, h]) => {
    const car = makeCar(kind as 'sedan', color as string).group; placeVehicle(car, x as number, z as number, h as number); group.add(car);
    group.add(box(4.4, 0.2, 1.7, snowCap, x as number, 1.55, z as number, false));
    solidBox((x as number) - 2.3, (z as number) - 0.95, (x as number) + 2.3, (z as number) + 0.95, 1.5);
  });
  for (let x = -36; x <= 8; x += 11) { streetLamp(group, x, -3.4, lamps, 4.2, '#ffd99a'); solidBox(x - 0.15, -3.55, x + 0.15, -3.25); }
  // Snowbanks along the street.
  for (let k = 0; k < 10; k++) { const bank = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), snowCap); bank.scale.set(1.6, 0.5, 0.7); bank.position.set(-40 + k * 5.6, 0, k % 2 ? 2.8 : -2.8); group.add(bank); }
  const walk = (path: [number, number][], seed: number, speed: number, look = {}) => walkers.push(makeWalker(group, path.map(([x, z]) => ({ x, z })), seed, speed, look, shadows));
  walk([[-40, 4], [12, 4]], 6401, 1.0, { top: 'coat', extras: ['scarf'] });
  walk([[12, -4], [-40, -4]], 6402, 0.9, { top: 'coat', extras: ['hat'] });
  if (!low) {
    walk([[-20, 6.5], [-20, 24], [-20, 38]], 6403, 1.1, { top: 'jacket', extras: ['backpack'] });
    walk([[16, -30], [16, 10]], 6404, 0.8, { top: 'coat', age: 'old' });
  }
  // Falling snow, a light flurry.
  const flakes = new THREE.BufferGeometry();
  const count = low ? 250 : 600;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) { pos[i * 3] = -40 + rand() * 80; pos[i * 3 + 1] = rand() * 18; pos[i * 3 + 2] = -40 + rand() * 80; }
  flakes.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const flurry = new THREE.Points(flakes, new THREE.PointsMaterial({ color: '#ffffff', size: 0.12, transparent: true, opacity: 0.85, depthWrite: false }));
  group.add(flurry);

  const fire = group.userData.fire as THREE.Mesh;
  const mooseHead = group.userData.mooseHead as THREE.Group;
  const creek = group.userData.creek as THREE.Texture;
  const { X: SX, Z: SZ } = group.userData.ski as { X: number; Z: number };
  return {
    group,
    bounds: { minX: -44, maxX: SKI.x + 19, minZ: -44, maxZ: 44 },
    solids,
    spawn: { x: 6, z: 0, heading: -Math.PI / 2 },
    exit: { x: 11, z: 0 },
    spots,
    talkers,
    walkers,
    doors,
    ceilings: [{ x0: -24, x1: -10, z0: -13, z1: -5, y: 4.35 }],
    light: {
      sky: ['#7fb2e5', '#e8f1fb'],
      fog: ['#e4ecf4', 70, 280],
      sun: { color: '#fff4e0', intensity: 2.3, at: [-30, 40, -40] },
      hemi: ['#e6f0ff', '#c9d4e0', 1.25],
      exposure: 1.0,
    },
    animate(t, dt) {
      lake.offset.x = (lake.offset.x + dt * 0.006) % 1;
      creek.offset.x = (creek.offset.x + dt * 0.15) % 1;
      const k = 1 + Math.sin(t * 11) * 0.12; fire.scale.set(k, 1 + Math.sin(t * 8) * 0.2, k);
      mooseHead.rotation.z = -0.5 + Math.sin(t * 0.5) * 0.4;
      lamps.forEach((m, i) => { m.emissiveIntensity = 1.3 + Math.sin(t * 2 + i) * 0.1; });
      const p = flurry.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < p.count; i++) { let y = p.getY(i) - dt * 0.9; if (y < 0) y += 18; p.setY(i, y); p.setX(i, p.getX(i) + Math.sin(t + i) * dt * 0.15); }
      p.needsUpdate = true;
      chairs.forEach((c, i) => { const u = ((t * 0.02 + i / chairs.length) % 1); c.position.set(SX + 10, 9 + u * 15 - 0.2, SZ - 6 + u * 42); });
    },
  };
};

export default build;
