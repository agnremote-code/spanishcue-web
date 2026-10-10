import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { createResident } from './characters';

/** Valdoria is an original, deterministic scene. Materials, masonry, foliage,
 * stained glass and ornament are generated locally; no remote asset requests. */
export type Collider = { minX: number; maxX: number; minZ: number; maxZ: number; minY?: number; maxY?: number; gate?: string };
type Position = { x: number; y: number; z: number };
type VisualState = { flags?: Record<string, boolean>; inventory?: string[] | Record<string, unknown>; collected?: string[] };
const TAU = Math.PI * 2;

function seeded(seed: number) { return () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; }

function texture(kind: 'stone' | 'soil' | 'wood' | 'slate' | 'cloth', seed: number) {
  const random = seeded(seed), c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d')!;
  const colors = { stone: '#858880', soil: '#536442', wood: '#543c29', slate: '#343f54', cloth: '#25394c' };
  g.fillStyle = colors[kind]; g.fillRect(0, 0, 256, 256);
  if (kind === 'stone' || kind === 'slate') {
    const rowH = kind === 'stone' ? 32 : 20, colW = kind === 'stone' ? 64 : 32;
    for (let row = 0; row < 256 / rowH; row++) for (let col = -1; col < 256 / colW + 1; col++) {
      const n = Math.floor(random() * 25), x = col * colW + (row % 2) * colW / 2;
      g.fillStyle = kind === 'stone' ? `rgb(${115 + n},${119 + n},${110 + n})` : `rgb(${42 + n},${51 + n},${65 + n})`;
      g.fillRect(x + 1, row * rowH + 1, colW - 2, rowH - 2);
      g.strokeStyle = 'rgba(231,224,201,.13)'; g.beginPath(); g.moveTo(x + 2, row * rowH + rowH - 2); g.lineTo(x + 2, row * rowH + 2); g.lineTo(x + colW - 2, row * rowH + 2); g.stroke();
      if (kind === 'stone' && random() > .7) { g.strokeStyle = 'rgba(26,40,30,.3)'; g.beginPath(); g.moveTo(x + 12, row * rowH + 1); g.lineTo(x + 8, row * rowH + 9); g.lineTo(x + 17, row * rowH + 19); g.stroke(); }
    }
  } else if (kind === 'wood') {
    for (let x = 0; x < 256; x += 32) { g.fillStyle = 'rgba(7,7,4,.45)'; g.fillRect(x, 0, 2, 256); }
    for (let i = 0; i < 180; i++) { const x = random() * 256; g.strokeStyle = `rgba(225,178,109,${random() * .12})`; g.beginPath(); g.moveTo(x, 0); g.bezierCurveTo(x - 5, 90, x + 4, 160, x, 256); g.stroke(); }
  }
  for (let i = 0; i < 15000; i++) { g.fillStyle = `rgba(${random() > .5 ? '255,255,219' : '15,27,20'},${random() * .12})`; g.fillRect(random() * 256, random() * 256, kind === 'soil' ? 2 : 1, 1); }
  if (kind === 'soil') for (let i = 0; i < 700; i++) { g.fillStyle = `rgba(156,146,83,${random() * .25})`; g.fillRect(random() * 256, random() * 256, 3, 2); }
  const map = new THREE.CanvasTexture(c); map.wrapS = map.wrapT = THREE.RepeatWrapping; map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 4;
  return map;
}

function arch(w: number, h: number, thickness: number, depth: number) {
  const r = w / 2, spring = h - r, s = new THREE.Shape();
  s.moveTo(-r, 0); s.lineTo(-r, spring); s.bezierCurveTo(-r, h - .25 * r, -.45 * r, h, 0, h + .22 * r); s.bezierCurveTo(.45 * r, h, r, h - .25 * r, r, spring); s.lineTo(r, 0); s.lineTo(r - thickness, 0); s.lineTo(r - thickness, spring);
  s.bezierCurveTo(r - thickness, h - thickness - .2 * r, .45 * r, h - thickness, 0, h - thickness + .22 * r); s.bezierCurveTo(-.45 * r, h - thickness, -r + thickness, h - thickness - .2 * r, -r + thickness, spring); s.lineTo(-r + thickness, 0); s.closePath();
  const geo = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelSegments: 1, steps: 1, bevelSize: .06, bevelThickness: .06, curveSegments: 12 }); geo.translate(0, 0, -depth / 2); return geo;
}

function ribbon(points: THREE.Vector3[], width: number, height = .035) {
  const curve = new THREE.CatmullRomCurve3(points), p: number[] = [], uv: number[] = [], idx: number[] = [], samples = 150;
  for (let i = 0; i <= samples; i++) { const t = i / samples, v = curve.getPoint(t), tangent = curve.getTangent(t), nx = -tangent.z, nz = tangent.x;
    for (const side of [-1, 1]) { p.push(v.x + nx * width * side / 2, v.y + height, v.z + nz * width * side / 2); uv.push(side === -1 ? 0 : 1, t * curve.getLength() / 3); }
    if (i < samples) { const k = i * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
  }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(p, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); geo.setIndex(idx); geo.computeVertexNormals(); return geo;
}

export function buildWorld(scene: THREE.Scene) {
  const root = new THREE.Group(); root.name = 'Valdoria — original kingdom'; scene.add(root);
  const random = seeded(81436), colliders: Collider[] = [], cameraMeshes: THREE.Object3D[] = [], textures: THREE.Texture[] = [];
  const batches = new Map<string, { material: THREE.Material; geometries: THREE.BufferGeometry[]; camera: boolean }>();
  const materials = new Set<THREE.Material>(), matrix = new THREE.Matrix4(), q = new THREE.Quaternion(), euler = new THREE.Euler();
  const stoneMap = texture('stone', 912), soilMap = texture('soil', 121), woodMap = texture('wood', 642), slateMap = texture('slate', 94), clothMap = texture('cloth', 318); textures.push(stoneMap, soilMap, woodMap, slateMap, clothMap);
  const makeMat = (color: string, map?: THREE.Texture, roughness = .86, metalness = 0) => { const m = new THREE.MeshStandardMaterial({ color, ...(map ? { map } : {}), roughness, metalness }); materials.add(m); return m; };
  const stone = makeMat('#c1baa4', stoneMap), trim = makeMat('#cbc5b0', stoneMap), shadowStone = makeMat('#6d7780', stoneMap), soil = makeMat('#96a574', soilMap), path = makeMat('#b7aa8b', stoneMap), timber = makeMat('#806445', woodMap), darkWood = makeMat('#45362b', woodMap), slate = makeMat('#626683', slateMap), plaster = makeMat('#d9c4a0'), gold = makeMat('#bc994e', undefined, .35, .6), iron = makeMat('#333e43', undefined, .42, .72), moss = makeMat('#506642'), leaf = makeMat('#3b6950'), lightLeaf = makeMat('#789251'), bark = makeMat('#675c49', woodMap), rose = makeMat('#b74d75'), bluePetal = makeMat('#7494bc'), cloth = makeMat('#742c46', clothMap), white = makeMat('#c8c7b4');
  const glow = new THREE.MeshStandardMaterial({ color: '#fff1c8', emissive: '#ffb54d', emissiveIntensity: 2.2, roughness: .4 }); materials.add(glow);
  const aqua = new THREE.MeshStandardMaterial({ color: '#69d8cc', emissive: '#23bba5', emissiveIntensity: 1.4, roughness: .2, metalness: .3 }); materials.add(aqua);
  const coll = (x: number, z: number, w: number, d: number, minY = -2, maxY = 60, gate?: string) => { const c = { minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, minY, maxY, ...(gate ? { gate } : {}) }; colliders.push(c); return c; };
  function add(geo: THREE.BufferGeometry, mat: THREE.Material, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0, camera = true) {
    const zone = z < -98 ? 'tower' : z < -64 ? 'hall' : z < -42 ? 'garden' : z < -20 ? 'bridge' : 'wild';
    const key = `${zone}-${mat.uuid}-${camera ? 'solid' : 'decoration'}`;
    let batch = batches.get(key); if (!batch) { batch = { material: mat, geometries: [], camera }; batches.set(key, batch); }
    euler.set(rx, ry, rz); q.setFromEuler(euler); matrix.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(sx, sy, sz));
    const g = geo.index ? geo.toNonIndexed() : geo.clone(); g.applyMatrix4(matrix);
    // Project stone and grain in world units so a twenty-metre wall has real
    // masonry courses instead of one stretched texture across its whole face.
    const map = (mat as THREE.MeshStandardMaterial).map;
    if (map === stoneMap || map === slateMap || map === woodMap) {
      const p = g.attributes.position, n = g.attributes.normal, uv = g.attributes.uv;
      const scale = map === woodMap ? 3 : 4;
      for (let i = 0; i < p.count; i++) {
        const nx = Math.abs(n.getX(i)), ny = Math.abs(n.getY(i)), nz = Math.abs(n.getZ(i));
        if (ny > nx && ny > nz) uv.setXY(i, p.getX(i) / scale, p.getZ(i) / scale);
        else if (nx > nz) uv.setXY(i, p.getZ(i) / scale, p.getY(i) / scale);
        else uv.setXY(i, p.getX(i) / scale, p.getY(i) / scale);
      }
    }
    batch.geometries.push(g);
  }
  const boxGeo = new THREE.BoxGeometry(1, 1, 1), sphereGeo = new THREE.IcosahedronGeometry(1, 1), orbGeo = new THREE.SphereGeometry(1, 12, 9), cylinderGeo = new THREE.CylinderGeometry(1, 1, 1, 14), coneGeo = new THREE.ConeGeometry(1, 1, 12);
  const box = (mat: THREE.Material, x: number, y: number, z: number, w: number, h: number, d: number, ry = 0) => add(boxGeo, mat, x, y, z, w, h, d, 0, ry);
  const orb = (mat: THREE.Material, x: number, y: number, z: number, sx: number, sy = sx, sz = sx) => add(orbGeo, mat, x, y, z, sx, sy, sz, 0, 0, 0, false);
  const cylinder = (mat: THREE.Material, x: number, y: number, z: number, r: number, h: number) => add(cylinderGeo, mat, x, y, z, r, h, r);
  function beam(mat: THREE.Material, a: THREE.Vector3, b: THREE.Vector3, radius: number, endRadius = radius) {
    const v = b.clone().sub(a), center = a.clone().add(b).multiplyScalar(.5), geo = new THREE.CylinderGeometry(endRadius, radius, v.length(), 7);
    geo.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), v.normalize())); add(geo, mat, center.x, center.y, center.z); geo.dispose();
  }
  function wall(x: number, z: number, w: number, d: number, h: number, y = 0, mat = stone) { box(mat, x, y + h / 2, z, w, h, d); coll(x, z, w, d, y, y + h); }

  // The playable meadow is level. The land rises around it in sculpted banks.
  const terrain = new THREE.PlaneGeometry(260, 330, 100, 120); terrain.rotateX(-Math.PI / 2); terrain.translate(0, -.09, -44);
  const terrainPos = terrain.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < terrainPos.count; i++) { const x = terrainPos.getX(i), z = terrainPos.getZ(i), outside = Math.max(0, Math.abs(x) - 37); let y = -.09 + Math.min(20, outside * .23) * (1.2 + Math.sin(x * .06 + z * .025) * .55); if (z > -42 && z < -25) y = -3; terrainPos.setY(i, y); }
  terrain.computeVertexNormals(); soilMap.repeat.set(52, 66); add(terrain, soil, 0, 0, 0); terrain.dispose();
  // A winding flagstone road leads the eye from the hill to the castle gate.
  const road = ribbon([[0, 0, 35], [0, 0, 22], [-3, 0, 12], [-1, 0, 2], [2, 0, -9], [0, 0, -23]].map(p => new THREE.Vector3(...p as [number, number, number])), 5.5); add(road, path); road.dispose();
  const villageRoad = ribbon([[0, 0, 14], [10, 0, 10], [18, 0, 8], [22, 0, -6]].map(p => new THREE.Vector3(...p as [number, number, number])), 4); add(villageRoad, path); villageRoad.dispose();
  box(path, 0, -.1, -33.5, 10, .25, 22); box(path, 0, .015, -54.5, 6.5, .07, 20); box(path, 0, .01, -79, 18, .06, 30);
  coll(-45, -50, 2, 178); coll(45, -50, 2, 178); coll(0, 37, 92, 2); coll(0, -139, 92, 2);
  // Water and the steep banks are impassable away from the real bridge.
  const waterMat = new THREE.MeshStandardMaterial({ color: '#397b82', transparent: true, opacity: .84, roughness: .19, metalness: .42 }); materials.add(waterMat);
  const waterGeo = new THREE.PlaneGeometry(230, 17, 90, 12); waterGeo.rotateX(-Math.PI / 2);
  const water = new THREE.Mesh(waterGeo, waterMat); water.position.set(0, -1.6, -33.5); root.add(water);
  coll(-27, -33.5, 43.5, 16, -8, 5); coll(27, -33.5, 43.5, 16, -8, 5);
  for (const side of [-1, 1]) { wall(side * 5.3, -33.5, .6, 22, 1.1); for (let z = -24; z >= -44; z -= 4) { box(trim, side * 5.3, 1.1, z, 1, .25, 1); cylinder(stone, side * 5.3, -1.8, z, .9, 3.8); } }
  for (let z = -26; z >= -41; z -= 5) { const g = arch(4.9, 3.9, .65, 11); add(g, shadowStone, -5.5, -4, z, 1, 1, 1, 0, Math.PI / 2); g.dispose(); }
  // Distant mountains have irregular silhouettes and stone veins, behind the fog.
  for (let i = 0; i < 24; i++) { const angle = i / 24 * TAU, radius = 135 + random() * 40, x = Math.cos(angle) * radius, z = -65 + Math.sin(angle) * radius, h = 30 + random() * 58; add(new THREE.ConeGeometry(18 + random() * 18, h, 7, 4), i % 2 ? shadowStone : stone, x, h / 2 - 7, z, 1, 1, 1, 0, random() * TAU); }

  function tree(x: number, z: number, size: number, conifer = false) {
    const h = size * (6 + random() * 3), base = new THREE.Vector3(x, 0, z);
    beam(bark, base, new THREE.Vector3(x + .2, h, z), size * .46, size * .13);
    for (let i = 0; i < 5; i++) { const a = i / 5 * TAU + random(), endpoint = new THREE.Vector3(x + Math.cos(a) * size * 2.2, .1, z + Math.sin(a) * size * 2.2); beam(bark, new THREE.Vector3(x, size * .8, z), endpoint, size * .18, .02); }
    if (conifer) { for (let i = 0; i < 5; i++) { const y = h * (.36 + i * .125), radius = size * (2.9 - i * .45); add(new THREE.ConeGeometry(radius, size * 3.9, 9, 2), i % 2 ? leaf : lightLeaf, x, y, z, 1, 1, 1, 0, random() * TAU); } }
    else for (let j = 0; j < 7; j++) {
      const a = j * 2.4 + random(), reach = size * (1.7 + random() * 1.7), y = h * (.58 + random() * .34), end = new THREE.Vector3(x + Math.cos(a) * reach, y, z + Math.sin(a) * reach);
      beam(bark, new THREE.Vector3(x, y - size * 1.8, z), end, size * .2, size * .045);
      for (let k = 0; k < 4; k++) add(sphereGeo, j % 3 ? leaf : lightLeaf, end.x + (random() - .5) * size * 2, end.y + (random() - .3) * size * 1.8, end.z + (random() - .5) * size * 2, size * (1.5 + random()), size * (1.1 + random()), size * (1.5 + random()), random(), random(), random(), false);
    }
    if (Math.abs(x) < 38 && z > -23) coll(x, z, size * .8, size * .8, 0, h);
  }
  for (let i = 0; i < 112; i++) { const x = (random() - .5) * 135, z = random() * 83 - 38; if (Math.abs(x) < 7 || (x > 7 && x < 36 && z > -12 && z < 26) || (Math.abs(x + 10) < 5 && Math.abs(z + 3) < 9) || (z < -23 && Math.abs(x) < 44)) continue; tree(x, z, .7 + random() * .8, i % 6 === 0); }
  for (let i = 0; i < 35; i++) { const x = (random() < .5 ? -1 : 1) * (36 + random() * 50), z = -42 - random() * 95; tree(x, z, .8 + random() * 1.2, i % 2 === 0); }
  // Foreground wildflowers and blades use instancing rather than one draw per plant.
  const grassGeo = new THREE.PlaneGeometry(.11, .6, 1, 3); grassGeo.translate(0, .3, 0);
  const grassVertices = grassGeo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < grassVertices.count; i++) { const t = grassVertices.getY(i) / .6; grassVertices.setX(i, grassVertices.getX(i) * (1 - t) + .09 * t * t); grassVertices.setZ(i, .12 * t * t); }
  grassGeo.computeVertexNormals();
  const grassMat = new THREE.MeshStandardMaterial({ color: '#789460', side: THREE.DoubleSide, roughness: 1 }); materials.add(grassMat);
  const grass = new THREE.InstancedMesh(grassGeo, grassMat, 6200), dummy = new THREE.Object3D(); let blades = 0;
  for (let i = 0; i < 9200 && blades < 6200; i++) { const x = (random() - .5) * 80, z = random() * 63 - 25; if (Math.abs(x) < 4.6 || (x > 6 && x < 34 && z > -10 && z < 25) || (Math.abs(x + 10) < 3 && Math.abs(z + 3) < 8)) continue; dummy.position.set(x, -.01, z); dummy.rotation.set((random() - .5) * .6, random() * TAU, (random() - .5) * .65); dummy.scale.setScalar(.5 + random() * .8); dummy.updateMatrix(); grass.setMatrixAt(blades, dummy.matrix); grass.setColorAt(blades, new THREE.Color().setHSL(.22 + random() * .06, .27, .3 + random() * .22)); blades++; }
  grass.count = blades; grass.instanceMatrix.needsUpdate = true; root.add(grass);
  const flowers = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(.09, 0), rose, 650);
  for (let i = 0; i < 650; i++) { const x = (random() < .5 ? -1 : 1) * (4 + random() * 9), z = -18 + random() * 48; dummy.position.set(x, .2 + random() * .4, z); dummy.scale.set(1, .65, 1); dummy.updateMatrix(); flowers.setMatrixAt(i, dummy.matrix); flowers.setColorAt(i, new THREE.Color(i % 3 ? '#dbc495' : '#b8708a')); } root.add(flowers);
  for (let i = 0; i < 64; i++) { const x = (random() < .5 ? -1 : 1) * (8 + random() * 33), z = -21 + random() * 55, s = .3 + random() * 1.4; if (x > 5 && x < 35 && z > -10 && z < 25) continue; add(sphereGeo, i % 3 ? shadowStone : moss, x, s * .3, z, s, s * .75, s * 1.2, random(), random(), random()); if (s > 1) coll(x, z, s * 1.2, s * 1.2, 0, s); }
  // Liora's clearing: carved standing stones, ancient ring and luminous mushrooms.
  for (let i = 0; i < 8; i++) { const a = i / 8 * TAU, x = -10 + Math.cos(a) * 4.2, z = -5 + Math.sin(a) * 4.2; add(sphereGeo, stone, x, 1.3, z, .45, 1.8, .6, .1, a, .1); coll(x, z, .7, .7, 0, 3); add(new THREE.TorusGeometry(.25, .035, 5, 16), aqua, x, 1.8, z + .54, 1, 1, 1, 0, a); }
  const groveRing = new THREE.Mesh(new THREE.TorusGeometry(3.2, .04, 6, 80).rotateX(Math.PI / 2), aqua); groveRing.position.set(-10, .08, -5); root.add(groveRing);
  for (let i = 0; i < 40; i++) { const a = random() * TAU, r = 3.5 + random() * 4, x = -10 + Math.cos(a) * r, z = -5 + Math.sin(a) * r, s = .2 + random() * .3; cylinder(white, x, s, z, s * .18, s * 2); add(new THREE.SphereGeometry(s, 12, 6, 0, TAU, 0, Math.PI / 2), i % 2 ? aqua : bluePetal, x, s * 1.8, z, 1, .7, 1, 0, 0, 0, false); }

  function roof(x: number, y: number, z: number, w: number, d: number, h: number) {
    const shape = new THREE.Shape(); shape.moveTo(-w / 2, 0); shape.lineTo(0, h); shape.lineTo(w / 2, 0); shape.closePath(); const geo = new THREE.ExtrudeGeometry(shape, { depth: d, bevelEnabled: false }); geo.translate(0, 0, -d / 2); add(geo, slate, x, y, z); geo.dispose();
    beam(timber, new THREE.Vector3(x - w / 2, y, z + d / 2), new THREE.Vector3(x, y + h, z + d / 2), .12); beam(timber, new THREE.Vector3(x + w / 2, y, z + d / 2), new THREE.Vector3(x, y + h, z + d / 2), .12);
  }
  function window(x: number, y: number, z: number, w: number, h: number, rot = 0, lit = true) {
    const archGeo = arch(w, h, .16, .18); add(archGeo, trim, x, y, z, 1, 1, 1, 0, rot); archGeo.dispose();
    const shape = new THREE.Shape(); shape.moveTo(-w / 2 + .12, .06); shape.lineTo(-w / 2 + .12, h - w / 2); shape.quadraticCurveTo(-w / 2 + .12, h - .1, 0, h + w * .08); shape.quadraticCurveTo(w / 2 - .12, h - .1, w / 2 - .12, h - w / 2); shape.lineTo(w / 2 - .12, .06); shape.closePath(); const glassGeo = new THREE.ShapeGeometry(shape);
    add(glassGeo, lit ? glow : aqua, x, y, z - .03, 1, 1, 1, 0, rot, 0, false); glassGeo.dispose();
    const cos = Math.cos(rot), sin = Math.sin(rot); const coord = (xx: number, yy: number) => new THREE.Vector3(x + xx * cos, y + yy, z - xx * sin + .06);
    beam(iron, coord(0, .1), coord(0, h - .05), .035); for (const yy of [h * .3, h * .6]) beam(iron, coord(-w * .4, yy), coord(w * .4, yy), .03);
  }
  function sign(label: string, x: number, y: number, z: number, width = 3) {
    const c = document.createElement('canvas'); c.width = 512; c.height = 128; const g = c.getContext('2d')!; g.fillStyle = '#252d2b'; g.fillRect(0, 0, 512, 128); g.strokeStyle = '#c5ad71'; g.lineWidth = 4; g.strokeRect(8, 8, 496, 112); g.fillStyle = '#e1ce9c'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = 'bold 49px Georgia'; g.fillText(label, 256, 67); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; textures.push(t); const m = new THREE.MeshStandardMaterial({ map: t, roughness: .8 }); materials.add(m); add(new THREE.PlaneGeometry(width, width / 4), m, x, y, z, 1, 1, 1, 0, 0, 0, false);
  }
  function house(x: number, z: number, w: number, d: number, h: number, label?: string) {
    wall(x, z, w, d, h, 0, plaster); box(stone, x, .35, z, w + .25, .7, d + .25);
    for (const side of [-1, 1]) { box(timber, x + side * (w / 2 - .12), h / 2, z + d / 2 + .03, .22, h, .18); box(timber, x, h * .52, z + side * d / 2, w, .2, .2); }
    for (let i = -1; i <= 1; i++) { box(timber, x + i * w / 3, h / 2, z + d / 2 + .05, .16, h, .18); beam(timber, new THREE.Vector3(x + i * w / 3, .5, z + d / 2 + .08), new THREE.Vector3(x + i * w / 3 + w / 3, h * .5, z + d / 2 + .08), .08); }
    roof(x, h, z, w + 1, d + 1, w * .57); box(stone, x + w * .28, h + w * .4, z - .5, .8, 3.4, .8); box(trim, x + w * .28, h + w * .4 + 1.7, z - .5, 1.05, .2, 1.05);
    window(x - w * .27, h * .58, z + d / 2 + .13, .8, 1.3); window(x + w * .27, h * .58, z + d / 2 + .13, .8, 1.3);
    box(darkWood, x, 1.2, z + d / 2 + .08, 1.2, 2.4, .16); add(arch(1.5, 2.6, .17, .2), timber, x, 0, z + d / 2 + .15); orb(gold, x + .38, 1.1, z + d / 2 + .25, .06); if (label) sign(label, x, 2.95, z + d / 2 + .28, 3.8);
  }
  house(14, 20, 6.5, 5, 4.3, 'LA LUNA AZUL'); house(29, 19, 5.5, 5, 3.8); house(27, -4, 7, 6, 4.5, 'HERRERÍA'); house(13, -9, 5.5, 4.5, 4.3); house(34, 4, 5, 5, 4.2);
  // Market cloth, baskets, produce, coopered barrels and an anvil.
  for (const x of [9, 17]) {
    const z = 12; for (const dx of [-1.6, 1.6]) for (const dz of [-.9, .9]) cylinder(timber, x + dx, 1.3, z + dz, .07, 2.6);
    const canopy = new THREE.PlaneGeometry(3.7, 2.7, 12, 1); const cp = canopy.attributes.position as THREE.BufferAttribute; for (let i = 0; i < cp.count; i++) cp.setZ(i, Math.cos(cp.getX(i) / 3.7 * Math.PI) * .5); add(canopy, cloth, x, 2.55, z, 1, 1, 1, -Math.PI / 2, 0, 0, false); canopy.dispose();
    box(timber, x, 1, z, 3.2, .15, 1.6); for (let i = 0; i < 10; i++) orb(i % 2 ? rose : lightLeaf, x + (random() - .5) * 2.7, 1.17, z + (random() - .5) * 1.1, .13); coll(x, z, 3.1, 1.6, 0, 1.2);
  }
  for (let i = 0; i < 12; i++) { const x = 23 + random() * 8, z = 13 + random() * 2; cylinder(timber, x, .55, z, .43, 1.1); for (const y of [.2, .88]) add(new THREE.TorusGeometry(.44, .03, 5, 14).rotateX(Math.PI / 2), iron, x, y, z); }
  box(iron, 22, .85, -.5, 1.5, .55, .7); cylinder(iron, 22, .4, -.5, .4, .8); add(coneGeo, iron, 22.9, .92, -.5, .3, .8, .3, 0, 0, -Math.PI / 2); coll(22, -.5, 2, 1, 0, 1.3);
  cylinder(stone, 13, .35, 2, 1.75, .7); cylinder(waterMat, 13, .73, 2, 1.52, .08); cylinder(trim, 13, 1.1, 2, .45, 1.2); add(new THREE.TorusGeometry(1.68, .16, 8, 32).rotateX(Math.PI / 2), trim, 13, .72, 2); orb(aqua, 13, 1.95, 2, .23); coll(13, 2, 3.6, 3.6, 0, 2.1);
  // Four visible cloth sails turn when Ventaria repairs the ancient mill.
  const millFallback = new THREE.Group(); root.add(millFallback);
  const millTower = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.45, 7, 16), stone); millTower.position.set(29, 3.5, 7); millFallback.add(millTower);
  const millCap = new THREE.Mesh(new THREE.ConeGeometry(2, 2.7, 12), slate); millCap.position.set(29, 8, 7); millFallback.add(millCap); coll(29, 7, 5.7, 4.3, 0, 10);
  const mill = new THREE.Group(); mill.position.set(29, 5.8, 8.7); millFallback.add(mill);
  for (let i = 0; i < 4; i++) { const arm = new THREE.Group(); arm.rotation.z = i * Math.PI / 2; mill.add(arm); const spar = new THREE.Mesh(new THREE.BoxGeometry(.13, 4.2, .13), timber); spar.position.y = 2; arm.add(spar); const sail = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 2.3, 3, 5), white); sail.position.set(.52, 2.6, 0); arm.add(sail); }
  const millHub = new THREE.Mesh(new THREE.SphereGeometry(.3, 12, 8), gold); mill.add(millHub);

  // Gatehouse and gardens: vaulted silhouette, real portcullis and rose parterres.
  for (const side of [-1, 1]) { cylinder(stone, side * 7.5, 5.8, -45.5, 2.4, 11.6); add(coneGeo, slate, side * 7.5, 14, -45.5, 3.1, 5.5, 3.1); coll(side * 7.5, -45.5, 4.8, 4.8, 0, 15); window(side * 7.5, 6.5, -43.06, 1.1, 2.5); cylinder(trim, side * 7.5, 10.9, -45.5, 2.55, .35); }
  add(arch(10.6, 10.5, .85, 2), stone, 0, 0, -45.5); sign('VALDORIA', 0, 8.7, -44.42, 5.2);
  const portcullis = new THREE.Group(); portcullis.position.z = -45.6; root.add(portcullis);
  for (let x = -4.5; x <= 4.5; x += .55) { const bar = new THREE.Mesh(new THREE.CylinderGeometry(.035, .055, 7.3, 6), iron); bar.position.set(x, 3.6, 0); portcullis.add(bar); const tip = new THREE.Mesh(new THREE.ConeGeometry(.1, .3, 6), iron); tip.rotation.z = Math.PI; tip.position.set(x, .03, 0); portcullis.add(tip); }
  for (const y of [1.3, 3.5, 5.7]) { const cross = new THREE.Mesh(new THREE.BoxGeometry(9.4, .12, .12), iron); cross.position.y = y; portcullis.add(cross); }
  coll(0, -45.6, 10, .4, 0, 7, 'bridgeOpen');
  for (const side of [-1, 1]) wall(side * 27.5, -45.6, 35.2, 1, 6);
  for (const side of [-1, 1]) { wall(side * 22, -54.5, 1, 19, 4.2); for (let z = -50; z >= -62; z -= 5) { box(moss, side * 11, .65, z, 12, 1.3, 1.2); coll(side * 11, z, 12, 1.2, 0, 1.3); } }
  for (let i = 0; i < 185; i++) { const side = i % 2 ? -1 : 1, x = side * (5.5 + random() * 12), z = -48 - random() * 14; cylinder(leaf, x, .5, z, .022, 1); orb(rose, x, 1 + random() * .4, z, .15, .12, .15); for (let j = 0; j < 3; j++) add(sphereGeo, leaf, x + (j - 1) * .12, .4 + j * .12, z, .17, .04, .08, 0, j, 0, false); }
  // Barrier has curved thorn branches and a genuine collision gate.
  const thorns = new THREE.Group(); thorns.position.z = -49; root.add(thorns);
  const thornMat = makeMat('#40334c');
  for (let i = 0; i < 13; i++) { const points = [new THREE.Vector3(-5.1, .1, 0), new THREE.Vector3(-2.5, 1 + random() * 2, (random() - .5)), new THREE.Vector3(1, 1 + random() * 2, (random() - .5)), new THREE.Vector3(5.1, random(), 0)]; const vine = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 24, .075 + random() * .045, 6, false), thornMat); thorns.add(vine); for (let j = 0; j < 6; j++) { const spike = new THREE.Mesh(new THREE.ConeGeometry(.11, .65, 5), thornMat); spike.position.set(-4 + j * 1.5, .6 + random() * 2, 0); spike.rotation.z = (random() - .5) * 2; thorns.add(spike); } }
  coll(0, -49, 10.4, .8, 0, 4, 'gardenOpen');
  for (const side of [-1, 1]) wall(side * 13.7, -49, 16.6, .9, 3.4, 0, moss);

  // Monumental castle. Side walls are solid; the entrance, hall and stair are connected.
  wall(-24, -84, 2, 40, 19); wall(24, -84, 2, 40, 19);
  wall(-15, -64, 18, 2, 19); wall(15, -64, 18, 2, 19); box(stone, 0, 14.5, -64, 12, 9, 2);
  const entranceArch = arch(12, 10.6, 1.1, 2.2); add(entranceArch, trim, 0, 0, -63.9); entranceArch.dispose();
  box(shadowStone, 0, -.35, -83.5, 47, .7, 39); box(cloth, 0, .055, -80, 3.2, .035, 30);
  // A rose compass mosaic guides the route through the hall.
  for (let i = 0; i < 16; i++) { const a = i / 16 * TAU; add(new THREE.CircleGeometry(2.4, 3), i % 2 ? gold : shadowStone, Math.cos(a) * 2.2, .062, -80 + Math.sin(a) * 2.2, 1, 1, 1, -Math.PI / 2, 0, a, false); }
  const roseWindow = new THREE.Group(); roseWindow.position.set(0, 14.5, -62.92); root.add(roseWindow);
  const roseGlass = new THREE.Mesh(new THREE.CircleGeometry(2.35, 40), aqua); roseWindow.add(roseGlass);
  for (const r of [2.5, 1.8, .58]) { const ring = new THREE.Mesh(new THREE.TorusGeometry(r, .13, 7, 40), gold); roseWindow.add(ring); }
  for (let i = 0; i < 10; i++) { const leafShape = new THREE.Mesh(new THREE.TorusGeometry(.75, .075, 5, 18), trim); const a = i / 10 * TAU; leafShape.position.set(Math.cos(a) * 1.35, Math.sin(a) * 1.35, .05); leafShape.scale.set(.58, 1, 1); leafShape.rotation.z = a - Math.PI / 2; roseWindow.add(leafShape); }
  for (const side of [-1, 1]) for (const x of [9, 15, 21]) { window(side * x, 4, -62.95, 1.55, 4.5); window(side * x, 11.8, -62.95, 1.25, 4); }
  for (const z of [-71, -82, -94]) {
    for (const side of [-1, 1]) { cylinder(trim, side * 7.2, 5.5, z, .55, 11); cylinder(shadowStone, side * 7.2, .35, z, .9, .7); cylinder(gold, side * 7.2, 10.7, z, .75, .18); coll(side * 7.2, z, 1.2, 1.2, 0, 12); window(side * 23.01, 4, z, 2.8, 6, side > 0 ? -Math.PI / 2 : Math.PI / 2); }
    const vault = arch(15.3, 6.4, .42, .75); add(vault, trim, 0, 10.4, z); vault.dispose();
  }
  // Flying buttresses, pinnacles and battlements make the silhouette read at distance.
  for (const side of [-1, 1]) for (const z of [-65, -75, -86, -98]) {
    box(trim, side * 24.5, 7, z, 1.3, 14, 1.7); beam(stone, new THREE.Vector3(side * 27, 8, z), new THREE.Vector3(side * 23.5, 16, z), .42); box(shadowStone, side * 27, 4, z, 1.5, 8, 1.8); add(coneGeo, slate, side * 24.5, 20.3, z, .9, 4, .9);
  }
  for (let x = -23; x <= 23; x += 2.4) box(trim, x, 19.45, -64, 1.15, 1.5, 2.1);
  function tower(x: number, z: number, radius: number, height: number) {
    cylinder(stone, x, height / 2, z, radius, height); cylinder(shadowStone, x, 1, z, radius + .4, 2); cylinder(trim, x, height - .9, z, radius + .35, .6); cylinder(trim, x, height + .2, z, radius + .55, 1.2); add(coneGeo, slate, x, height + radius * 1.45, z, radius + 1.1, radius * 3.5, radius + 1.1); cylinder(gold, x, height + radius * 3.25, z, .07, 2); orb(gold, x, height + radius * 3.2, z, .18);
    for (let i = 0; i < 10; i++) { const a = i / 10 * TAU; box(trim, x + Math.cos(a) * radius, height + 1.2, z + Math.sin(a) * radius, .8, 1.7, .8, a); }
    for (const y of [height * .34, height * .65]) for (const a of [0, Math.PI / 2, Math.PI, Math.PI * 1.5]) { const xx = x + Math.sin(a) * (radius + .02), zz = z + Math.cos(a) * (radius + .02); window(xx, y, zz, 1.3, 3.2, a); }
    coll(x, z, radius * 1.8, radius * 1.8, 0, height + radius * 3);
  }
  tower(-24, -65, 4.3, 25); tower(24, -65, 4.3, 29); tower(-24, -102, 5.3, 32); tower(25, -103, 4.7, 34);
  // The distant royal spire grows from the accessible tower chamber.
  tower(-25, -120, 3, 35); tower(19, -124, 3.4, 38);
  // Wooden entrance leaves open outward as the enchanted rose restores the seal.
  const doorL = new THREE.Group(), doorR = new THREE.Group(); doorL.position.set(-5.2, 0, -64); doorR.position.set(5.2, 0, -64); root.add(doorL, doorR);
  for (const [pivot, side] of [[doorL, 1], [doorR, -1]] as const) { const leafMesh = new THREE.Mesh(new THREE.BoxGeometry(5.05, 8.8, .28), darkWood); leafMesh.position.set(side * 2.525, 4.4, 0); pivot.add(leafMesh); for (const y of [1.4, 4.4, 7.4]) { const strap = new THREE.Mesh(new THREE.BoxGeometry(4.8, .13, .38), iron); strap.position.set(side * 2.5, y, 0); pivot.add(strap); } const handle = new THREE.Mesh(new THREE.TorusGeometry(.18, .05, 6, 16), gold); handle.position.set(side * 4.7, 4, .25); pivot.add(handle); }
  coll(0, -64, 10.4, .5, 0, 10, 'castleOpen');
  for (const door of [doorL, doorR]) door.traverse(o => { if (o instanceof THREE.Mesh) cameraMeshes.push(o); });

  // Great library, kitchen and banqueting tables remain physically navigable.
  function bookshelf(x: number, z: number, angle: number) {
    const group = new THREE.Group(); group.position.set(x, 0, z); group.rotation.y = angle; group.updateMatrix();
    const localBox = (mat: THREE.Material, xx: number, yy: number, zz: number, w: number, h: number, d: number) => { const v = new THREE.Vector3(xx, yy, zz).applyMatrix4(group.matrix); box(mat, v.x, v.y, v.z, w, h, d, angle); };
    localBox(darkWood, 0, 2.3, -.15, 6, 4.6, .25); for (const xx of [-3, 3]) localBox(timber, xx, 2.3, 0, .18, 4.6, .8);
    for (let j = 0; j < 5; j++) { const y = .2 + j * .88; localBox(timber, 0, y, 0, 6, .12, .9); for (let i = 0; i < 20; i++) { const h = .45 + random() * .27; localBox([cloth, slate, moss, timber, gold][i % 5], -2.8 + i * .285, y + h / 2 + .08, .02, .2 + random() * .06, h, .56); localBox(gold, -2.8 + i * .285, y + h - .06, .315, .16, .025, .012); } }
    const w = angle === 0 ? 6.3 : 1, d = angle === 0 ? 1 : 6.3; coll(x, z, w, d, 0, 4.6);
  }
  bookshelf(-20.8, -83, Math.PI / 2); bookshelf(-20.8, -91, Math.PI / 2); bookshelf(-16, -97, 0);
  sign('ARCHIVO DE VALDORIA', -15, 5.4, -96.8, 5.6);
  const table = (x: number, z: number, w: number, d: number) => { box(timber, x, 1.3, z, w, .2, d); for (const xx of [-1, 1]) for (const zz of [-1, 1]) box(darkWood, x + xx * (w / 2 - .3), .6, z + zz * (d / 2 - .3), .17, 1.2, .17); coll(x, z, w, d, 0, 1.5); };
  table(-14, -90, 4.5, 2); table(15.5, -73, 5, 2.4); table(-14, -73, 5, 2.4);
  for (const x of [-15.5, -13, 14, 16.5]) { const z = -73; add(new THREE.CylinderGeometry(.26, .26, .035, 18), white, x, 1.43, z); cylinder(gold, x + .35, 1.6, z, .08, .25); }
  // Kitchen hearth set into the east aisle, animated embers below the hood.
  box(shadowStone, 21.9, 1.1, -82, 2, 2.2, 4.5); box(stone, 22.1, 3.6, -82, 2.2, 1.3, 5); coll(22, -82, 2.3, 5, 0, 5); cylinder(iron, 20.8, 1.5, -82, .7, .7); orb(glow, 21.2, .75, -82, .8, .7, 1.6);
  // Raised terrace can only be reached by this wide staircase.
  for (let i = 0; i < 32; i++) { const h = (i + 1) * .25, z = -88.25 - i * .5; box(trim, 12, h / 2, z, 5.8, h, .52); }
  wall(8.75, -95.5, .35, 15.5, 9); wall(15.25, -95.5, .35, 15.5, 9);
  // The low stair balustrades follow the slope, without obstructing its entrance.
  for (const x of [9.25, 14.75]) { beam(gold, new THREE.Vector3(x, 1.1, -88), new THREE.Vector3(x, 9.1, -104), .055); for (let i = 0; i < 17; i++) cylinder(gold, x, i * .5 + .55, -88 - i, .035, 1.1); }
  box(stone, .5, 7.55, -110, 45, .9, 16); box(path, .5, 8.015, -110, 44, .06, 15.5);
  wall(-6, -102, 30, .6, 8); wall(19, -102, 8, .6, 8); wall(-22, -110, .6, 16, 9.2); wall(23, -110, .6, 16, 9.2);
  wall(-8.5, -118, 27, .6, 9.2); wall(19, -118, 8, .6, 9.2);
  for (let x = -21; x <= 22; x += 2) { if (x < 7 || x > 16) box(trim, x, 9, -118, .8, 1.8, .8); }
  // Tower passage and chamber at terrace height; its roof is hidden when inside.
  box(path, 10, 7.7, -126.5, 10, .6, 18); wall(4.8, -126.7, .6, 18, 20); wall(15.2, -126.7, .6, 18, 20); wall(10, -136, 11, .7, 20);
  add(arch(10.2, 8.5, .6, 1), trim, 10, 8, -120); window(10, 11, -135.59, 4, 7);
  for (let i = 0; i < 4; i++) { const z = -121 - i * 4; box(trim, 4.3, 18, z, 1.2, 16, 1); box(trim, 15.7, 18, z, 1.2, 16, 1); }
  // Canopied rose bed: original carved posts, velvet covers, gauze and petals.
  box(darkWood, 10, 8.55, -132.4, 3.3, .55, 4); box(cloth, 10, 8.92, -132.4, 3.15, .35, 3.85); box(white, 10, 9.15, -133.6, 2.6, .28, .65); coll(10, -132.4, 3.4, 4, 8, 10);
  for (const x of [8.3, 11.7]) for (const z of [-130.4, -134.4]) { cylinder(gold, x, 10.75, z, .09, 5.5); orb(gold, x, 13.55, z, .18); }
  box(cloth, 10, 13.35, -132.4, 3.6, .2, 4.3); for (const x of [8.25, 11.75]) box(cloth, x, 12.55, -134.3, .16, 1.6, .22);
  const altar = new THREE.Group(); altar.position.set(10, 8, -126); root.add(altar);
  const altarBase = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.6, .45, 32), shadowStone); altarBase.position.y = .225; altar.add(altarBase);
  for (let i = 0; i < 3; i++) { const r = new THREE.Mesh(new THREE.TorusGeometry(.55 + i * .26, .025, 6, 48), i % 2 ? gold : aqua); r.rotation.x = -Math.PI / 2; r.position.y = .48; altar.add(r); }
  // Roof is a real soaring vault; only its exterior disappears inside the hall.
  const roofGroup = new THREE.Group(); root.add(roofGroup);
  const roofShape = new THREE.Shape(); roofShape.moveTo(-23, 0); roofShape.lineTo(0, 9); roofShape.lineTo(23, 0); roofShape.closePath();
  const roofGeo = new THREE.ExtrudeGeometry(roofShape, { depth: 40, bevelEnabled: false }); roofGeo.translate(0, 0, -40);
  const castleRoof = new THREE.Mesh(roofGeo, slate); castleRoof.position.set(0, 19, -64); castleRoof.castShadow = true; roofGroup.add(castleRoof); cameraMeshes.push(castleRoof);
  const towerRoof = new THREE.Mesh(new THREE.ConeGeometry(8, 17, 8), slate); towerRoof.position.set(10, 30.5, -128); towerRoof.rotation.y = Math.PI / 8; root.add(towerRoof); cameraMeshes.push(towerRoof);
  // Chandeliers, iron torch brackets, animated flames and local pools of warm light.
  const flames: THREE.Mesh[] = [];
  function torch(x: number, y: number, z: number, light = false) {
    cylinder(iron, x, y, z, .075, 1); add(new THREE.ConeGeometry(.28, .4, 8), iron, x, y + .3, z);
    const fire = new THREE.Mesh(new THREE.SphereGeometry(.18, 8, 8), glow); fire.position.set(x, y + .67, z); fire.scale.set(.75, 1.8, .75); root.add(fire); flames.push(fire);
    if (light) { const lamp = new THREE.PointLight('#ffd69b', 24, 17, 2); lamp.position.set(x, y + .85, z); root.add(lamp); }
  }
  for (const x of [-5.8, 5.8]) { torch(x, 2, -43, true); torch(x, 2.8, -65.5, true); }
  for (const z of [-76, -89]) {
    cylinder(iron, 0, 12.1, z, .055, 6); add(new THREE.TorusGeometry(2.4, .12, 8, 40).rotateX(Math.PI / 2), gold, 0, 9, z);
    for (let i = 0; i < 10; i++) { const a = i / 10 * TAU; torch(Math.cos(a) * 2.4, 9.3, z + Math.sin(a) * 2.4); }
    const lamp = new THREE.PointLight('#ffd6a0', 65, 25, 2); lamp.position.set(0, 8.4, z); root.add(lamp);
  }
  for (const z of [-121, -130]) { torch(5.7, 10.5, z); torch(14.3, 10.5, z); }
  const chamberLight = new THREE.PointLight('#f6b9c4', 38, 18, 2); chamberLight.position.set(10, 12.5, -131); root.add(chamberLight);
  // Static geometry is merged per material and zone, keeping the forest and castle cheap.
  for (const [name, batch] of batches) { if (!batch.geometries.length) continue; const geometry = mergeGeometries(batch.geometries, false); for (const g of batch.geometries) g.dispose(); if (!geometry) continue; const mesh = new THREE.Mesh(geometry, batch.material); mesh.name = name; mesh.castShadow = batch.material !== soil && batch.material !== path && batch.material !== aqua && batch.material !== glow; mesh.receiveShadow = true; root.add(mesh); if (batch.camera) cameraMeshes.push(mesh); }
  for (const g of [boxGeo, sphereGeo, orbGeo, cylinderGeo, coneGeo]) g.dispose();

  const npcPositions: Record<string, Position> = {
    nox: { x: 0, y: 0, z: 18 }, liora: { x: -10, y: 0, z: 0 }, ines: { x: 14, y: 0, z: 10 }, bruno: { x: 20, y: 0, z: 0 }, aldren: { x: 0, y: 0, z: -43 }, celina: { x: -3, y: 0, z: -47 }, baltasar: { x: -14, y: 0, z: -86 }, teobaldo: { x: 10, y: 0, z: -78 }, brum: { x: -10, y: 8, z: -111 }, tejedora: { x: 10, y: 8, z: -119 }, elara: { x: 10, y: 9.3, z: -132.4 },
  };
  const residents = Object.entries(npcPositions).map(([id, p]) => { const character = createResident(id); character.root.position.set(p.x, p.y, p.z); root.add(character.root); return { id, p, character }; });
  const itemPositions: Record<string, Position> = { key: { x: 24, y: 0, z: 7 }, rose: { x: -8, y: 0, z: -59 }, scroll: { x: -14, y: 0, z: -89 }, crystal: { x: -4, y: 8, z: -113 } };
  const itemVisuals = Object.entries(itemPositions).map(([id, p]) => {
    const g = new THREE.Group(); g.position.set(p.x, p.y + .85, p.z); root.add(g);
    let mesh: THREE.Mesh;
    if (id === 'key') { mesh = new THREE.Mesh(new THREE.TorusGeometry(.2, .06, 6, 16), gold); mesh.position.y = .18; g.add(mesh); const shaft = new THREE.Mesh(new THREE.CylinderGeometry(.045, .045, .5, 6), gold); shaft.position.y = -.2; g.add(shaft); const tooth = new THREE.Mesh(new THREE.BoxGeometry(.2, .08, .08), gold); tooth.position.set(.08, -.4, 0); g.add(tooth); }
    else if (id === 'scroll') { mesh = new THREE.Mesh(new THREE.CylinderGeometry(.16, .16, .7, 12), white); mesh.rotation.z = Math.PI / 2; g.add(mesh); }
    else if (id === 'rose') { mesh = new THREE.Mesh(new THREE.SphereGeometry(.2, 12, 8), rose); g.add(mesh); for (let i = 0; i < 5; i++) { const petal = new THREE.Mesh(new THREE.SphereGeometry(.15, 8, 6), rose); petal.scale.y = .45; petal.position.set(Math.cos(i / 5 * TAU) * .14, .05, Math.sin(i / 5 * TAU) * .14); g.add(petal); } const stem = new THREE.Mesh(new THREE.CylinderGeometry(.025, .025, .6, 6), leaf); stem.position.y = -.35; g.add(stem); }
    else { mesh = new THREE.Mesh(new THREE.OctahedronGeometry(.38, 0), aqua); mesh.scale.y = 1.4; g.add(mesh); }
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.53, .02, 5, 32), gold); ring.rotation.x = Math.PI / 2; ring.position.y = -.68; g.add(ring); return { id, p, g };
  });
  // Fireflies, airborne pollen and a few rose petals float across the connected map.
  const count = 380, motesGeo = new THREE.BufferGeometry(), motePositions = new Float32Array(count * 3), moteSeeds: number[] = [];
  for (let i = 0; i < count; i++) { moteSeeds.push(random() * TAU); motePositions[i * 3] = (random() - .5) * 60; motePositions[i * 3 + 1] = 1 + random() * 11; motePositions[i * 3 + 2] = 30 - random() * 165; }
  motesGeo.setAttribute('position', new THREE.BufferAttribute(motePositions, 3)); const moteMat = new THREE.PointsMaterial({ color: '#fff0b8', size: .055, transparent: true, opacity: .72, depthWrite: false, blending: THREE.AdditiveBlending }); materials.add(moteMat); const motes = new THREE.Points(motesGeo, moteMat); root.add(motes);
  const cloudGeo = new THREE.PlaneGeometry(25, 9), cloudMat = new THREE.MeshBasicMaterial({ color: '#d8dcce', transparent: true, opacity: .045, depthWrite: false, side: THREE.DoubleSide }); materials.add(cloudMat);
  const mists: THREE.Mesh[] = []; for (let i = 0; i < 10; i++) { const m = new THREE.Mesh(cloudGeo, cloudMat); m.position.set((random() - .5) * 80, .8 + random() * 3, -20 - random() * 110); m.rotation.x = -Math.PI / 2; root.add(m); mists.push(m); }

  function floorAt(x: number, z: number) {
    if (x >= 9 && x <= 15 && z <= -88 && z >= -104) return Math.min(8, (-z - 88) * .5);
    if (x >= -22 && x <= 23 && z <= -102 && z >= -118) return 8;
    if (x >= 5 && x <= 15 && z < -118 && z >= -136) return 8;
    const outside = Math.max(0, Math.abs(x) - 37);
    return Math.max(0, -.09 + Math.min(20, outside * .23) * (1.2 + Math.sin(x * .06 + z * .025) * .55));
  }
  let gateLift = 0, gardenFade = 1, doorAngle = 0, disposed = false;
  let importedMillSails: THREE.Object3D | undefined;
  const disposeObject = (object: THREE.Object3D) => object.traverse(o => { if (o instanceof THREE.Mesh) { o.geometry.dispose(); for (const m of Array.isArray(o.material) ? o.material : [o.material]) { const standard = m as THREE.MeshStandardMaterial; for (const t of [standard.map, standard.normalMap, standard.roughnessMap, standard.metalnessMap]) t?.dispose(); m.dispose(); } } });
  // CC0 Quaternius models are bundled locally. The kingdom remains playable
  // while they load, and its original sculpture is the offline fallback.
  const loader = new GLTFLoader();
  loader.load('/reino/assets/windmill.glb', gltf => {
    if (disposed) { disposeObject(gltf.scene); return; }
    const model = gltf.scene; model.position.set(29, .02, 7); model.scale.setScalar(.8);
    let blades: THREE.Mesh | undefined;
    model.traverse(o => { if (o instanceof THREE.Mesh) { o.castShadow = true; o.receiveShadow = true; if (o.name.includes('Blades')) blades = o; } });
    // The source mesh stores its blades in tower coordinates. Give them a
    // real axle at their centre before animating, rather than orbiting the base.
    if (blades) { const sails = blades as THREE.Mesh; sails.geometry.computeBoundingBox(); const axle = sails.geometry.boundingBox!.getCenter(new THREE.Vector3()); const pivot = new THREE.Group(); pivot.position.copy(axle); sails.position.sub(axle); model.add(pivot); pivot.add(sails); importedMillSails = pivot; }
    root.add(model); millFallback.visible = false;
  }, undefined, () => { /* Local procedural mill remains fully functional. */ });
  loader.load('/reino/assets/pine.glb', gltf => {
    if (disposed) { disposeObject(gltf.scene); return; }
    const bounds = new THREE.Box3().setFromObject(gltf.scene), size = bounds.getSize(new THREE.Vector3()), height = Math.max(.01, size.y);
    for (const [x, z, h] of [[-11, 27, 12], [-18, 16, 15], [9, 29, 13], [-25, -7, 17], [37, 16, 14], [-31, -19, 18]]) { const tree = gltf.scene.clone(true); const scale = h / height; tree.scale.setScalar(scale); tree.position.set(x, -bounds.min.y * scale, z); tree.rotation.y = random() * TAU; tree.traverse(o => { if (o instanceof THREE.Mesh) { o.castShadow = true; o.receiveShadow = true; } }); root.add(tree); }
  }, undefined, () => { /* The original mixed forest is already in the scene. */ });
  return {
    root, colliders, cameraMeshes, floorAt, npcPositions, itemPositions,
    update(dt: number, time: number, state: VisualState, player: THREE.Vector3) {
      const flags = state.flags ?? {};
      gateLift += ((flags.bridgeOpen ? 8 : 0) - gateLift) * Math.min(1, dt * 1.3); portcullis.position.y = gateLift;
      doorAngle += ((flags.castleOpen ? Math.PI * .56 : 0) - doorAngle) * Math.min(1, dt * 1.7); doorL.rotation.y = -doorAngle; doorR.rotation.y = doorAngle;
      gardenFade += ((flags.gardenOpen ? 0 : 1) - gardenFade) * Math.min(1, dt * 2); thorns.scale.y = Math.max(.01, gardenFade); thorns.visible = gardenFade > .02;
      groveRing.rotation.z = time * .12; groveRing.scale.setScalar(flags.forestLit ? 1.06 + Math.sin(time) * .04 : 1); groveRing.visible = flags.forestLit || Math.sin(time * .5) > -.7;
      if (flags.millRepaired) { mill.rotation.z += dt * .6; if (importedMillSails) importedMillSails.rotation.z += dt * .6; }
      roofGroup.visible = !(Math.abs(player.x) < 25 && player.z < -62 && player.z > -106); towerRoof.visible = !(player.x > 3 && player.x < 17 && player.z < -119);
      for (let i = 0; i < flames.length; i++) flames[i].scale.y = 1.7 + Math.sin(time * 8 + i * 2) * .35;
      for (const { id, p, character } of residents) { const distance = Math.hypot(player.x - p.x, player.z - p.z); character.root.userData.calm = id === 'brum' && !!flags.dragonTrusted; character.root.userData.awake = id === 'elara' && !!flags.victory; character.update(dt, time, distance < 6); if (id !== 'elara' && id !== 'brum' && distance < 9) { const target = Math.atan2(player.x - p.x, player.z - p.z); character.root.rotation.y += Math.atan2(Math.sin(target - character.root.rotation.y), Math.cos(target - character.root.rotation.y)) * Math.min(1, dt * 2); } }
      const has = (id: string) => Array.isArray(state.inventory) ? state.inventory.includes(id) : !!state.inventory?.[id];
      for (const item of itemVisuals) { item.g.visible = !has(item.id) && !(state.collected?.includes(item.id)); item.g.position.y = item.p.y + (item.id === 'scroll' ? 1.8 : .95) + Math.sin(time * 2 + item.p.x) * .12; item.g.rotation.y = time * .55; if (item.id === 'key') item.g.visible &&= !!flags.millRepaired; if (item.id === 'crystal') item.g.visible &&= !!flags.dragonTrusted; }
      const pos = motesGeo.attributes.position as THREE.BufferAttribute; for (let i = 0; i < count; i++) { pos.setY(i, 1.5 + (i % 9) + Math.sin(time * .3 + moteSeeds[i]) * 1.1); } pos.needsUpdate = true;
      water.position.y = -1.6 + Math.sin(time * .7) * .025; waterMat.roughness = .23 + Math.sin(time * .25) * .03;
      for (let i = 0; i < mists.length; i++) mists[i].position.x += Math.sin(time * .08 + i) * dt * .13;
      altar.rotation.y = time * .08;
    },
    dispose() {
      if (disposed) return; disposed = true; const geometries = new Set<THREE.BufferGeometry>();
      for (const { character } of residents) character.root.userData.dispose?.();
      root.traverse(o => { if (o instanceof THREE.Mesh || o instanceof THREE.Points) { geometries.add(o.geometry); const mats = Array.isArray(o.material) ? o.material : [o.material]; for (const m of mats) materials.add(m); } });
      const allTextures = new Set(textures);
      materials.forEach(m => { const standard = m as THREE.MeshStandardMaterial; for (const t of [standard.map, standard.normalMap, standard.roughnessMap, standard.metalnessMap, standard.emissiveMap]) if (t) allTextures.add(t); });
      geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); allTextures.forEach(t => t.dispose()); root.removeFromParent();
    },
  };
}
