// The seven things the learner can carry through the night, as small
// procedural props at roughly real size (metres), plus the little effects
// they make when used. Everything is original geometry and canvas-drawn
// texture: no files, no network.
//
// The fiction props (grenade, pistol, knife) are deliberately toy-like:
// matte, chunky, rounded, with a bright safety tip on the pistol. Nothing
// here shows harm; the heart is a power and gets the showiest effect.
//
// Model frames: each model is built around its own natural axis and the
// display stage fits it into a common size. Long objects lie along +x
// (pistol, knife) or stand along +y (pencil, canister, grenade); the book
// stands upright with its front cover facing +z; the heart faces +z.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import type { Hero } from './hero3d';
import type { ItemId } from './ItemIcon';

export type { ItemId } from './ItemIcon';

// ---------------------------------------------------------------- helpers

function standard(color: string, roughness = 0.6, metalness = 0) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}

function glossy(color: string, roughness = 0.35, clearcoat = 0.8) {
  return new THREE.MeshPhysicalMaterial({ color, roughness, clearcoat, clearcoatRoughness: 0.18 });
}

function add<T extends THREE.Object3D>(object: T, parent: THREE.Object3D, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0): T {
  object.position.set(x, y, z);
  object.rotation.set(rx, ry, rz);
  parent.add(object);
  return object;
}

function mesh(geometry: THREE.BufferGeometry, mat: THREE.Material | THREE.Material[], parent: THREE.Object3D, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const out = add(new THREE.Mesh(geometry, mat), parent, x, y, z, rx, ry, rz);
  out.castShadow = true;
  return out;
}

function lathe(profile: [number, number][], segments = 32) {
  return new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), segments);
}

function canvasTexture(width: number, height: number, draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void, srgb = true) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  draw(canvas.getContext('2d')!, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  if (srgb) texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

// A soft round glow for additive sprites.
function glowTexture(inner: string, outer: string) {
  return canvasTexture(128, 128, (ctx, w) => {
    const g = ctx.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    g.addColorStop(0, inner);
    g.addColorStop(0.35, outer);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, w);
  });
}

function glowSprite(texture: THREE.Texture, color: string, size: number, opacity = 0.6) {
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending }));
  sprite.scale.setScalar(size);
  return sprite;
}

/** Frees every geometry, material and texture under `root`. */
export function disposeItem(root: THREE.Object3D) {
  const textures = new Set<THREE.Texture>();
  const materials = new Set<THREE.Material>();
  root.traverse(child => {
    const owner = child as THREE.Mesh;
    if (owner.geometry) owner.geometry.dispose();
    const list = owner.material ? (Array.isArray(owner.material) ? owner.material : [owner.material]) : [];
    for (const m of list) materials.add(m);
  });
  for (const m of materials) {
    for (const value of Object.values(m)) if (value instanceof THREE.Texture) textures.add(value);
    m.dispose();
  }
  for (const texture of textures) texture.dispose();
}

// ---------------------------------------------------------------- heart shape

// A plump 3D heart from the classic implicit surface
// (x² + 9/4·y² + z² − 1)³ − x²z³ − 9/80·y²z³ = 0, found along each ray of a
// sphere so the mesh stays smooth. Returned about 1 unit wide, facing +z.
export function heartGeometry(detail = 48) {
  const sphere = new THREE.SphereGeometry(1, detail, Math.round(detail * 0.75));
  sphere.deleteAttribute('normal');
  sphere.deleteAttribute('uv');
  const geometry = mergeVertices(sphere);
  sphere.dispose();
  const f = (x: number, y: number, z: number) => {
    const a = x * x + 2.25 * y * y + z * z - 1;
    return a * a * a - x * x * z * z * z - 0.1125 * y * y * z * z * z;
  };
  const position = geometry.attributes.position as THREE.BufferAttribute;
  const dir = new THREE.Vector3();
  for (let i = 0; i < position.count; i++) {
    // three.js y is the heart's vertical (implicit z); three.js z its depth (implicit y).
    dir.fromBufferAttribute(position, i).normalize();
    const at = (r: number) => f(dir.x * r, dir.z * r, dir.y * r);
    let lo = 0;
    let hi = 0.02;
    while (hi < 2 && at(hi) < 0) { lo = hi; hi += 0.02; }
    for (let k = 0; k < 24; k++) {
      const mid = (lo + hi) / 2;
      if (at(mid) < 0) lo = mid; else hi = mid;
    }
    const r = (lo + hi) / 2;
    // A little extra depth makes it read as plump from the front.
    position.setXYZ(i, dir.x * r, dir.y * r, dir.z * r * 1.25);
  }
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  const box = geometry.boundingBox!;
  const center = box.getCenter(new THREE.Vector3());
  geometry.translate(-center.x, -center.y, -center.z);
  const width = box.max.x - box.min.x;
  geometry.scale(1 / width, 1 / width, 1 / width);
  return geometry;
}

// ---------------------------------------------------------------- models

function pencil() {
  const group = new THREE.Group();
  const r = 0.0048;
  const body = 0.15;
  // Hexagonal yellow body with a stamp on one face. The texture runs along
  // the pencil (u) and once around it (v): six bands of 32 px, one per face.
  const stamp = canvasTexture(512, 192, (ctx, w, h) => {
    ctx.fillStyle = '#f2c230';
    ctx.fillRect(0, 0, w, h);
    const face = h / 6;
    ctx.fillStyle = '#6f5210';
    ctx.font = 'bold 21px Georgia, serif';
    ctx.textBaseline = 'middle';
    ctx.fillText('SPANISHCUE  ·  HB', 150, face * 2.5 + 1);
    ctx.fillRect(116, face * 2.5 - 6, 22, 2.5);
    ctx.fillRect(116, face * 2.5 + 4, 22, 2.5);
  });
  const paint = new THREE.MeshPhysicalMaterial({ map: stamp, roughness: 0.42, clearcoat: 0.5, clearcoatRoughness: 0.3, flatShading: true });
  const shaft = new THREE.CylinderGeometry(r, r, body, 6, 1, true, Math.PI / 6);
  const uv = shaft.attributes.uv as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getY(i), uv.getX(i));
  mesh(shaft, paint, group);
  const flat = new THREE.MeshStandardMaterial({ color: '#f2c230', roughness: 0.5, flatShading: true });
  mesh(new THREE.CircleGeometry(r, 6, Math.PI / 6), flat, group, 0, -body / 2, 0, Math.PI / 2);
  // Sharpened tip: bare wood, then graphite.
  const wood = standard('#e8c595', 0.85);
  const graphite = standard('#2c2d31', 0.35, 0.45);
  mesh(lathe([[r * 1.02, 0], [r * 0.96, 0.002], [r * 0.34, 0.017], [0, 0.017]], 24), wood, group, 0, body / 2);
  mesh(lathe([[r * 0.35, 0], [r * 0.1, 0.0055], [0, 0.0062]], 16), graphite, group, 0, body / 2 + 0.017);
  // Ferrule with two ridges, then a rounded pink eraser.
  const metal = standard('#cdb77d', 0.32, 0.9);
  mesh(new THREE.CylinderGeometry(r * 1.06, r * 1.06, 0.012, 24), metal, group, 0, -body / 2 - 0.006);
  for (const y of [-0.0025, -0.0095]) mesh(new THREE.TorusGeometry(r * 1.07, 0.00045, 6, 24), metal, group, 0, -body / 2 + y, 0, Math.PI / 2);
  mesh(lathe([[0, -0.009], [r * 0.8, -0.0088], [r * 0.98, -0.0072], [r * 1.0, -0.005], [r * 1.0, 0]], 24), standard('#f08aa0', 0.85), group, 0, -body / 2 - 0.012);
  group.userData.size = 0.19;
  return group;
}

function book() {
  const group = new THREE.Group();
  const W = 0.16;
  const H = 0.23;
  const T = 0.034;
  const coverT = 0.003;
  const coverColor = '#1f5d63';
  const cloth = canvasTexture(256, 368, (ctx, w, h) => {
    ctx.fillStyle = coverColor;
    ctx.fillRect(0, 0, w, h);
    // A faint cloth weave.
    ctx.globalAlpha = 0.08;
    for (let y = 0; y < h; y += 2) { ctx.fillStyle = y % 4 ? '#000' : '#fff'; ctx.fillRect(0, y, w, 1); }
    ctx.globalAlpha = 1;
  });
  const coverMat = new THREE.MeshStandardMaterial({ map: cloth, roughness: 0.78 });
  const coverGeometry = new RoundedBoxGeometry(W, H + 0.008, coverT, 2, 0.0013);
  mesh(coverGeometry, coverMat, group, 0.002, 0, T / 2 - coverT / 2);
  mesh(coverGeometry, coverMat, group, 0.002, 0, -T / 2 + coverT / 2);
  // Rounded spine.
  const spine = mesh(new THREE.CylinderGeometry(T / 2, T / 2, H + 0.008, 20, 1, false, Math.PI, Math.PI), coverMat, group, -W / 2 + 0.002, 0, 0);
  spine.scale.x = 0.55;
  const gold = new THREE.MeshStandardMaterial({ color: '#d8b35a', roughness: 0.3, metalness: 0.9 });
  for (const y of [H * 0.36, H * 0.3, -H * 0.36]) {
    const band = mesh(new THREE.CylinderGeometry(T / 2 + 0.0004, T / 2 + 0.0004, 0.003, 20, 1, true, Math.PI, Math.PI), gold, group, -W / 2 + 0.002, y, 0);
    band.scale.x = 0.55;
  }
  // Page block: fine page lines on the edges.
  const lines = (vertical: boolean) => canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#f3ead6';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 90; i++) {
      ctx.fillStyle = `rgba(120,96,60,${0.08 + (i % 3) * 0.05})`;
      const p = (i / 90) * (vertical ? w : h);
      if (vertical) ctx.fillRect(p, 0, 1, h); else ctx.fillRect(0, p, w, 1);
    }
  });
  const edgeV = new THREE.MeshStandardMaterial({ map: lines(true), roughness: 0.9 });
  const edgeH = new THREE.MeshStandardMaterial({ map: lines(false), roughness: 0.9 });
  const plain = standard('#f3ead6', 0.9);
  mesh(new THREE.BoxGeometry(W - 0.006, H - 0.002, T - coverT * 2), [edgeV, plain, edgeH, edgeH, plain, plain], group, 0.0, 0, 0);
  // Front cover art: gold rules, an ornament and the embossed title band.
  const art = canvasTexture(512, 736, (ctx, w, h) => {
    ctx.strokeStyle = '#e1c06a';
    ctx.lineWidth = 5;
    ctx.strokeRect(40, 40, w - 80, h - 80);
    ctx.lineWidth = 2;
    ctx.strokeRect(54, 54, w - 108, h - 108);
    ctx.fillStyle = '#e1c06a';
    // A small moon and dots: the night.
    ctx.beginPath();
    ctx.arc(w / 2, h * 0.68, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = coverColor;
    ctx.beginPath();
    ctx.arc(w / 2 + 18, h * 0.68 - 10, 36, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#e1c06a';
    for (const [x, y, s] of [[0.32, 0.6, 5], [0.7, 0.62, 4], [0.62, 0.78, 3], [0.36, 0.8, 4]]) {
      ctx.beginPath();
      ctx.arc(w * x, h * y, s, 0, Math.PI * 2);
      ctx.fill();
    }
  });
  const decal = new THREE.MeshStandardMaterial({ map: art, transparent: true, roughness: 0.35, metalness: 0.6, polygonOffset: true, polygonOffsetFactor: -2 });
  mesh(new THREE.PlaneGeometry(W - 0.004, H), decal, group, 0.004, 0, T / 2 + 0.0002);
  const bandArt = canvasTexture(512, 160, (ctx, w, h) => {
    ctx.fillStyle = '#6e1f2a';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#e1c06a';
    ctx.lineWidth = 4;
    ctx.strokeRect(12, 12, w - 24, h - 24);
    ctx.fillStyle = '#f0d48a';
    ctx.font = 'bold 54px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('CUENTOS', w / 2, h / 2 - 16);
    ctx.font = 'italic 34px Georgia, serif';
    ctx.fillText('de la noche', w / 2, h / 2 + 34);
  });
  const bandMat = new THREE.MeshStandardMaterial({ color: '#6e1f2a', roughness: 0.6 });
  const bandTop = new THREE.MeshStandardMaterial({ map: bandArt, roughness: 0.5 });
  mesh(new RoundedBoxGeometry(W * 0.66, 0.05, 0.0016, 2, 0.0006), bandMat, group, 0.004, H * 0.17, T / 2 + 0.0008);
  mesh(new THREE.PlaneGeometry(W * 0.66 - 0.001, 0.049), bandTop, group, 0.004, H * 0.17, T / 2 + 0.00165);
  // A satin ribbon bookmark slipping out at the bottom, with a notched end.
  const ribbon = new THREE.Shape();
  ribbon.moveTo(-0.0035, 0);
  ribbon.lineTo(0.0035, 0);
  ribbon.lineTo(0.0035, -0.05);
  ribbon.lineTo(0, -0.044);
  ribbon.lineTo(-0.0035, -0.05);
  ribbon.closePath();
  const satin = new THREE.MeshPhysicalMaterial({ color: '#c3262f', roughness: 0.3, sheen: 1, sheenColor: new THREE.Color('#ff8a8a'), side: THREE.DoubleSide });
  mesh(new THREE.ShapeGeometry(ribbon), satin, group, W * 0.18, -H / 2 + 0.006, 0.004, 0.25, 0, 0.12);
  group.userData.size = 0.24;
  return group;
}

function pepperSpray() {
  const group = new THREE.Group();
  const red = glossy('#c8261e', 0.3, 1);
  const can = mesh(lathe([[0, 0], [0.0135, 0], [0.0162, 0.0018], [0.017, 0.0055], [0.017, 0.071], [0.0163, 0.0755], [0.013, 0.0805], [0.0108, 0.0825], [0, 0.0825]], 40), red, group);
  can.userData.part = 'can';
  // Wrap-around label: cream band, a chili and the name.
  const label = canvasTexture(1024, 256, (ctx, w, h) => {
    ctx.fillStyle = '#f6ead5';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#c8261e';
    ctx.fillRect(0, 10, w, 10);
    ctx.fillRect(0, h - 20, w, 10);
    // The chili, centred on the front.
    const cx = w / 2 - 120;
    const cy = h / 2 + 4;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(-0.35);
    const pod = ctx.createLinearGradient(0, -40, 0, 40);
    pod.addColorStop(0, '#ff5a3c');
    pod.addColorStop(1, '#b3160f');
    ctx.fillStyle = pod;
    ctx.beginPath();
    ctx.moveTo(-58, -6);
    ctx.bezierCurveTo(-30, -38, 30, -34, 62, -18);
    ctx.bezierCurveTo(48, 6, 10, 30, -40, 30);
    ctx.bezierCurveTo(-62, 30, -70, 8, -58, -6);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.beginPath();
    ctx.ellipse(-8, -14, 26, 6, -0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#3f8a35';
    ctx.beginPath();
    ctx.moveTo(56, -22);
    ctx.quadraticCurveTo(70, -34, 66, -12);
    ctx.quadraticCurveTo(62, -4, 56, -22);
    ctx.fill();
    ctx.strokeStyle = '#3f8a35';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(64, -20);
    ctx.quadraticCurveTo(84, -30, 88, -52);
    ctx.stroke();
    ctx.restore();
    ctx.fillStyle = '#2a1a10';
    ctx.font = '900 54px Inter, Arial, sans-serif';
    ctx.textBaseline = 'middle';
    ctx.fillText('PIMIENTA', cx + 96, cy - 18);
    ctx.font = '700 26px Inter, Arial, sans-serif';
    ctx.fillStyle = '#8a5a3a';
    ctx.fillText('defensa · picante', cx + 98, cy + 30);
  });
  const sleeve = new THREE.MeshPhysicalMaterial({ map: label, roughness: 0.4, clearcoat: 0.6, clearcoatRoughness: 0.2 });
  // thetaStart = π puts the seam at the back and the middle of the label at +z.
  mesh(new THREE.CylinderGeometry(0.01712, 0.01712, 0.046, 48, 1, true, Math.PI), sleeve, group, 0, 0.038);
  // Black cap: collar, actuator with a ribbed top, a nozzle facing +z.
  const black = glossy('#121214', 0.45, 0.6);
  mesh(new THREE.CylinderGeometry(0.0112, 0.0118, 0.006, 32), black, group, 0, 0.0855);
  const head = mesh(lathe([[0, 0], [0.0108, 0], [0.0108, 0.011], [0.0098, 0.0132], [0, 0.0136]], 32), black, group, 0, 0.088);
  head.userData.part = 'cap';
  const rib = standard('#2a2a2e', 0.6);
  for (let i = -2; i <= 2; i++) mesh(new THREE.BoxGeometry(0.0012, 0.0006, 0.012), rib, group, i * 0.0028, 0.1018, -0.002);
  mesh(new THREE.CylinderGeometry(0.0022, 0.0022, 0.004, 12), standard('#3a3a3e', 0.4, 0.3), group, 0, 0.094, 0.0108, Math.PI / 2);
  // A key ring at the back.
  mesh(new THREE.TorusGeometry(0.008, 0.0011, 8, 28), standard('#c9ccd1', 0.25, 0.95), group, 0, 0.099, -0.016, 0, Math.PI / 2, 0);
  group.userData.size = 0.1;
  return group;
}

function grenade() {
  const group = new THREE.Group();
  // A rounded toy egg with soft pillowed segments.
  const sphere = new THREE.SphereGeometry(1, 64, 48);
  sphere.deleteAttribute('normal');
  sphere.deleteAttribute('uv');
  const body = mergeVertices(sphere);
  sphere.dispose();
  const position = body.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < position.count; i++) {
    v.fromBufferAttribute(position, i);
    const azimuth = Math.atan2(v.x, v.z);
    const polar = Math.acos(Math.max(-1, Math.min(1, v.y)));
    const cols = Math.pow(Math.abs(Math.sin(azimuth * 4)), 0.35);
    const rows = Math.pow(Math.abs(Math.sin(polar * 5)), 0.35);
    const pillow = 1 + 0.045 * cols * rows * Math.sin(polar);
    // Egg: a little narrower at the top.
    const taper = 1 - 0.08 * Math.max(0, v.y);
    position.setXYZ(i, v.x * pillow * taper * 0.028, v.y * pillow * 0.034, v.z * pillow * taper * 0.028);
  }
  body.computeVertexNormals();
  const olive = new THREE.MeshPhysicalMaterial({ color: '#5a7036', roughness: 0.5, clearcoat: 0.45, clearcoatRoughness: 0.35 });
  mesh(body, olive, group, 0, 0.034);
  // Fuse head: a collar with a yellow toy band, the cap and the lever.
  const steel = standard('#9a9d96', 0.42, 0.75);
  mesh(new THREE.CylinderGeometry(0.0095, 0.011, 0.006, 28), steel, group, 0, 0.069);
  mesh(new THREE.CylinderGeometry(0.0096, 0.0096, 0.003, 28), standard('#f2c230', 0.5), group, 0, 0.0735);
  mesh(lathe([[0, 0], [0.0088, 0], [0.0088, 0.008], [0.0074, 0.0102], [0, 0.0106]], 28), steel, group, 0, 0.075);
  // The lever hugs the body down one side.
  const lever = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.083, 0.004), new THREE.Vector3(0, 0.084, 0.012), new THREE.Vector3(0, 0.074, 0.024),
    new THREE.Vector3(0, 0.058, 0.03), new THREE.Vector3(0, 0.042, 0.031),
  ]);
  const strip = mesh(new THREE.TubeGeometry(lever, 24, 0.0032, 6, false), steel, group);
  strip.scale.x = 0.9;
  // Pull ring and pin on the other side.
  mesh(new THREE.CylinderGeometry(0.0012, 0.0012, 0.026, 8), steel, group, 0, 0.078, 0, 0, 0, Math.PI / 2);
  mesh(new THREE.TorusGeometry(0.0095, 0.0014, 8, 32), standard('#d0d3d6', 0.25, 0.95), group, -0.022, 0.078, 0, 0, Math.PI / 2 - 0.3, 0);
  group.userData.size = 0.1;
  return group;
}

function pistol() {
  const group = new THREE.Group();
  const slate = new THREE.MeshPhysicalMaterial({ color: '#4a525e', roughness: 0.62, clearcoat: 0.25, clearcoatRoughness: 0.6 });
  const darker = new THREE.MeshPhysicalMaterial({ color: '#363c46', roughness: 0.7, clearcoat: 0.15 });
  const orange = glossy('#ff7a1a', 0.4, 0.6);
  const W = 0.03;
  // The frame outline is drawn long and then squeezed: a short, chunky prop.
  const SX = 0.86;
  // Chunky rounded slide with a big, bright safety tip.
  mesh(new RoundedBoxGeometry(0.13, 0.042, W, 4, 0.011), slate, group, -0.004, 0, 0);
  mesh(new RoundedBoxGeometry(0.02, 0.042, W + 0.0015, 4, 0.0095), orange, group, 0.064, 0, 0);
  const grooves = standard('#2c3138', 0.7);
  for (let i = 0; i < 4; i++) mesh(new RoundedBoxGeometry(0.0026, 0.026, W + 0.0008, 1, 0.001), grooves, group, -0.06 + i * 0.0058, 0.002, 0);
  // Simple sights.
  mesh(new RoundedBoxGeometry(0.008, 0.008, 0.008, 2, 0.0025), darker, group, 0.05, 0.023, 0);
  mesh(new RoundedBoxGeometry(0.01, 0.008, 0.016, 2, 0.0025), darker, group, -0.062, 0.023, 0);
  // Frame and grip: one bevelled outline with the trigger guard as a hole.
  const frame = new THREE.Shape();
  frame.moveTo(0.07, -0.015);
  frame.lineTo(-0.074, -0.015);
  frame.quadraticCurveTo(-0.082, -0.016, -0.083, -0.026);
  frame.lineTo(-0.092, -0.1);
  frame.quadraticCurveTo(-0.095, -0.116, -0.08, -0.117);
  frame.lineTo(-0.058, -0.117);
  frame.quadraticCurveTo(-0.044, -0.116, -0.046, -0.1);
  frame.lineTo(-0.04, -0.048);
  frame.quadraticCurveTo(-0.038, -0.058, -0.026, -0.058);
  frame.lineTo(0.004, -0.058);
  frame.quadraticCurveTo(0.022, -0.057, 0.024, -0.036);
  frame.lineTo(0.03, -0.026);
  frame.lineTo(0.07, -0.026);
  frame.closePath();
  const guard = new THREE.Path();
  guard.moveTo(-0.03, -0.026);
  guard.lineTo(0.01, -0.026);
  guard.quadraticCurveTo(0.013, -0.046, 0.0, -0.047);
  guard.lineTo(-0.022, -0.047);
  guard.quadraticCurveTo(-0.033, -0.045, -0.03, -0.026);
  frame.holes.push(guard);
  const depth = W - 0.008;
  const frameGeometry = new THREE.ExtrudeGeometry(frame, { depth, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.0035, bevelSegments: 5, curveSegments: 12 });
  frameGeometry.translate(0, -0.006, -depth / 2);
  frameGeometry.scale(SX, 1, 1);
  mesh(frameGeometry, darker, group);
  // Trigger.
  const trigger = new THREE.Shape();
  trigger.moveTo(-0.004, -0.025);
  trigger.quadraticCurveTo(-0.004, -0.036, -0.012, -0.042);
  trigger.lineTo(-0.008, -0.044);
  trigger.quadraticCurveTo(0.001, -0.036, 0.002, -0.025);
  trigger.closePath();
  const triggerGeometry = new THREE.ExtrudeGeometry(trigger, { depth: 0.005, bevelEnabled: true, bevelThickness: 0.0012, bevelSize: 0.001, bevelSegments: 2 });
  triggerGeometry.translate(0, -0.006, -0.0025);
  triggerGeometry.scale(SX, 1, 1);
  mesh(triggerGeometry, slate, group);
  // Warm stippled grip panels on both sides.
  const stipple = canvasTexture(128, 256, (ctx, w, h) => {
    ctx.fillStyle = '#6a4c36';
    ctx.fillRect(0, 0, w, h);
    for (let y = 8; y < h; y += 12) for (let x = 7 + ((y / 12) % 2) * 6; x < w; x += 12) {
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  });
  const panel = new THREE.MeshStandardMaterial({ map: stipple, roughness: 0.8 });
  for (const side of [-1, 1]) mesh(new RoundedBoxGeometry(0.03, 0.066, 0.004, 2, 0.0018), panel, group, -0.068 * SX, -0.074, side * (depth / 2 + 0.0042), 0, 0, -0.12);
  group.userData.size = 0.16;
  return group;
}

function knife() {
  const group = new THREE.Group();
  // Blade: straight spine, gentle belly rising to the tip.
  const blade = new THREE.Shape();
  blade.moveTo(0.006, 0.011);
  blade.lineTo(0.088, 0.009);
  blade.quadraticCurveTo(0.112, 0.006, 0.122, 0.0);
  blade.quadraticCurveTo(0.1, -0.012, 0.06, -0.013);
  blade.lineTo(0.006, -0.013);
  blade.closePath();
  const bladeGeometry = new THREE.ExtrudeGeometry(blade, { depth: 0.0012, bevelEnabled: true, bevelThickness: 0.0007, bevelSize: 0.0009, bevelSegments: 3, curveSegments: 16 });
  bladeGeometry.translate(0, 0, -0.0006);
  // Moderate metalness: the street has no environment map to reflect.
  const steel = new THREE.MeshPhysicalMaterial({ color: '#dfe4e8', roughness: 0.3, metalness: 0.55, clearcoat: 0.4 });
  mesh(bladeGeometry, steel, group);
  // A brushed bevel line along the edge.
  const bevel = new THREE.Shape();
  bevel.moveTo(0.008, -0.007);
  bevel.lineTo(0.06, -0.0075);
  bevel.quadraticCurveTo(0.1, -0.006, 0.118, 0.0005);
  bevel.quadraticCurveTo(0.1, -0.0115, 0.06, -0.0125);
  bevel.lineTo(0.008, -0.0125);
  bevel.closePath();
  const brushed = new THREE.MeshStandardMaterial({ color: '#f3f6f8', roughness: 0.2, metalness: 0.6, polygonOffset: true, polygonOffsetFactor: -2 });
  for (const side of [-1, 1]) mesh(new THREE.ShapeGeometry(bevel), brushed, group, 0, 0, side * 0.00132, 0, side < 0 ? Math.PI : 0, 0).scale.x = side < 0 ? -1 : 1;
  // Bolster and wooden handle with brass rivets.
  mesh(new RoundedBoxGeometry(0.01, 0.027, 0.017, 2, 0.003), standard('#b9bec4', 0.3, 0.9), group, 0.001, -0.001, 0);
  const grain = canvasTexture(512, 128, (ctx, w, h) => {
    ctx.fillStyle = '#8a5530';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 26; i++) {
      ctx.strokeStyle = i % 3 ? 'rgba(60,30,12,0.35)' : 'rgba(255,200,140,0.18)';
      ctx.lineWidth = 1 + (i % 4);
      ctx.beginPath();
      const y0 = (i / 26) * h;
      ctx.moveTo(0, y0);
      for (let x = 0; x <= w; x += 32) ctx.lineTo(x, y0 + Math.sin(x * 0.02 + i) * 4 + Math.sin(x * 0.05 + i * 2) * 2);
      ctx.stroke();
    }
  });
  const wood = new THREE.MeshPhysicalMaterial({ map: grain, roughness: 0.55, clearcoat: 0.5, clearcoatRoughness: 0.4 });
  mesh(new RoundedBoxGeometry(0.098, 0.024, 0.017, 4, 0.0075), wood, group, -0.052, -0.002, 0, 0, 0, 0.02);
  const brass = standard('#d6ae5c', 0.3, 0.9);
  for (const x of [-0.024, -0.052, -0.08]) mesh(new THREE.CylinderGeometry(0.0028, 0.0028, 0.0182, 16), brass, group, x, -0.002 + (x + 0.052) * -0.02, 0, Math.PI / 2);
  group.userData.size = 0.22;
  return group;
}

function heart() {
  const group = new THREE.Group();
  const geometry = heartGeometry(56);
  const material = new THREE.MeshPhysicalMaterial({
    color: '#e3233f', roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08,
    emissive: '#ff2a50', emissiveIntensity: 0.28, sheen: 0.4, sheenColor: new THREE.Color('#ff9ab0'),
  });
  const body = mesh(geometry, material, group);
  body.scale.setScalar(0.1);
  body.userData.part = 'heart';
  const glow = glowSprite(glowTexture('rgba(255,140,170,0.9)', 'rgba(255,60,100,0.35)'), '#ff5c7f', 0.26, 0.55);
  glow.userData.part = 'glow';
  glow.renderOrder = -1;
  group.add(glow);
  group.userData.size = 0.1;
  group.userData.pulse = true;
  return group;
}

const BUILDERS: Record<ItemId, () => THREE.Group> = {
  lapiz: pencil, libro: book, gas: pepperSpray, granada: grenade, pistola: pistol, cuchillo: knife, corazon: heart,
};

/** One original procedural model at about real size, in metres. */
export function createItemModel(id: ItemId): THREE.Group {
  const group = BUILDERS[id]();
  group.name = `item:${id}`;
  group.userData.item = id;
  return group;
}

// ---------------------------------------------------------------- holding

// How each item sits in the hero's hand. The hand frame (see hero3d.ts):
// with the arm hanging, the hand points down -y, +z is forward and the fist
// closes around an axis running front to back.
const GRIPS: Record<ItemId, { at: [number, number, number]; turn: [number, number, number]; offset: [number, number, number] }> = {
  lapiz: { at: [0, -0.058, 0.028], turn: [-1.3, 0, 0.2], offset: [0, 0.035, 0] },
  libro: { at: [0, -0.07, 0.03], turn: [0, Math.PI / 2, 0], offset: [0.04, -0.07, 0] },
  gas: { at: [0, -0.06, 0.02], turn: [Math.PI / 2 - 0.25, 0, 0], offset: [0, -0.045, 0] },
  granada: { at: [0, -0.075, 0.03], turn: [0.3, 0, 0], offset: [0, -0.03, 0] },
  pistola: { at: [0, -0.062, 0.025], turn: [-Math.PI / 2, Math.PI / 2, 0], offset: [0.058, 0.075, 0] },
  cuchillo: { at: [0, -0.06, 0.025], turn: [1.2, -Math.PI / 2, 0], offset: [0.05, 0, 0] },
  corazon: { at: [0, -0.1, 0.07], turn: [0, 0, 0], offset: [0, 0, 0] },
};

/**
 * The hand group of the hero, to pass to `holdItem`. The right hand already
 * holds his fountain pen, so the item goes in the left hand by default.
 * The hand is the only Group child of `hero.parts.foreL` / `foreR` (the
 * other children are the merged forearm meshes).
 */
export function heroHand(hero: Hero, side: 'left' | 'right' = 'left'): THREE.Object3D {
  const fore = side === 'left' ? hero.parts.foreL : hero.parts.foreR;
  return fore.children.find(child => child.type === 'Group') ?? fore;
}

/**
 * Puts the item in a hand and returns the holder (remove it from the hand
 * and pass it to `disposeItem` when the item changes). Items are shown a
 * little larger than life so they read at street distance.
 */
export function holdItem(hand: THREE.Object3D, id: ItemId, scale = 1.5): THREE.Object3D {
  const grip = GRIPS[id];
  const holder = new THREE.Group();
  holder.name = `held:${id}`;
  holder.position.set(...grip.at);
  holder.rotation.set(...grip.turn);
  holder.scale.setScalar(scale);
  const model = createItemModel(id);
  model.position.set(...grip.offset);
  holder.add(model);
  hand.add(holder);
  return holder;
}

// ---------------------------------------------------------------- effects

export type ItemFx = {
  group: THREE.Group;
  /** `at` is the feet of the person it happens to (a point on the ground). */
  play(at: THREE.Vector3): void;
  /** Pass the camera to turn hearts and notes towards it. */
  update(dt: number, camera?: THREE.Camera): void;
  readonly active: boolean;
  dispose(): void;
};

const easeOutBack = (t: number) => { const c = 1.9; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const clamp01 = (t: number) => Math.max(0, Math.min(1, t));

function sparkleTexture() {
  return canvasTexture(64, 64, (ctx, w) => {
    const c = w / 2;
    const g = ctx.createRadialGradient(c, c, 0, c, c, c);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.18, 'rgba(255,220,235,0.9)');
    g.addColorStop(0.5, 'rgba(255,150,190,0.15)');
    g.addColorStop(1, 'rgba(255,150,190,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, w);
    ctx.fillStyle = 'rgba(255,255,255,0.95)';
    ctx.beginPath();
    ctx.moveTo(c, 2); ctx.lineTo(c + 3, c - 3); ctx.lineTo(w - 2, c); ctx.lineTo(c + 3, c + 3);
    ctx.lineTo(c, w - 2); ctx.lineTo(c - 3, c + 3); ctx.lineTo(2, c); ctx.lineTo(c - 3, c - 3);
    ctx.closePath();
    ctx.fill();
  });
}

const HEART_COLORS = ['#ff3b5c', '#ff6f91', '#ff1f4b', '#ffa3bd', '#e11d48', '#ff8fab', '#ff4f7b'];

/**
 * The heart power: fourteen glossy hearts pop out of the person, spiral up,
 * wobble and fade over about 2.2 s, with a pink ring on the ground and a
 * few glints. Pooled: call play() again at any time to restart.
 */
export function createHeartBurst(): ItemFx {
  const COUNT = 14;
  const DURATION = 2.2;
  const group = new THREE.Group();
  group.name = 'fx:hearts';
  group.visible = false;
  const geometry = heartGeometry(28);
  const material = new THREE.MeshPhysicalMaterial({
    color: '#ffffff', roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.1, emissive: '#ff2a55', emissiveIntensity: 0.35, transparent: true,
  });
  const hearts = new THREE.InstancedMesh(geometry, material, COUNT);
  hearts.frustumCulled = false;
  hearts.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const color = new THREE.Color();
  const seeds = Array.from({ length: COUNT }, (_, i) => {
    color.set(HEART_COLORS[i % HEART_COLORS.length]);
    hearts.setColorAt(i, color);
    const r = Math.sin(i * 91.7) * 0.5 + 0.5;
    return {
      delay: (i / COUNT) * 0.32 + r * 0.05,
      angle: (i / COUNT) * Math.PI * 2 * 1.6 + r,
      reach: 0.28 + r * 0.32,
      rise: 0.8 + ((i * 7) % 5) * 0.12,
      size: 0.075 + ((i * 5) % 4) * 0.018,
      spin: (i % 2 ? 1 : -1) * (2 + r * 2),
    };
  });
  if (hearts.instanceColor) hearts.instanceColor.needsUpdate = true;
  group.add(hearts);
  // One big heart pops first, right in front of the face.
  const big = new THREE.Mesh(geometry, new THREE.MeshPhysicalMaterial({ color: '#ff2e55', roughness: 0.2, clearcoat: 1, emissive: '#ff2a55', emissiveIntensity: 0.4, transparent: true }));
  group.add(big);
  const flash = glowSprite(glowTexture('rgba(255,200,220,1)', 'rgba(255,80,130,0.5)'), '#ff7aa2', 1, 0.9);
  group.add(flash);
  // Ground ring.
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.82, 1, 64), new THREE.MeshBasicMaterial({ color: '#ff6fa0', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2;
  group.add(ring);
  // Glints.
  const GLINTS = 12;
  const glintPositions = new Float32Array(GLINTS * 3);
  const glintGeometry = new THREE.BufferGeometry();
  glintGeometry.setAttribute('position', new THREE.BufferAttribute(glintPositions, 3));
  const glintMaterial = new THREE.PointsMaterial({ map: sparkleTexture(), size: 0.16, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: '#ffd0e0' });
  const glints = new THREE.Points(glintGeometry, glintMaterial);
  glints.frustumCulled = false;
  group.add(glints);

  const base = new THREE.Vector3();
  const matrix = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  const p = new THREE.Vector3();
  const s = new THREE.Vector3();
  let t = DURATION;
  const HEAD = 1.55;

  const fx: ItemFx = {
    group,
    get active() { return t < DURATION; },
    play(at) {
      base.copy(at);
      t = 0;
      group.visible = true;
      fx.update(0);
    },
    update(dt, camera) {
      if (t >= DURATION) return;
      t = Math.min(DURATION, t + dt);
      const yaw = camera ? Math.atan2(camera.position.x - base.x, camera.position.z - base.z) : 0;
      const fade = 1 - clamp01((t - (DURATION - 0.55)) / 0.55);
      material.opacity = fade;
      for (let i = 0; i < COUNT; i++) {
        const seed = seeds[i];
        const local = Math.max(0, t - seed.delay);
        const k = clamp01(local / (DURATION - seed.delay));
        const pop = clamp01(local / 0.28);
        const size = local <= 0 ? 0 : seed.size * easeOutBack(pop) * (1 - clamp01((k - 0.78) / 0.22) * 0.7);
        const angle = seed.angle + local * 2.4;
        const radius = 0.3 + seed.reach * easeOut(clamp01(local / 0.9));
        p.set(base.x + Math.cos(angle) * radius, base.y + HEAD - 0.3 + seed.rise * easeOut(k) + Math.sin(local * 6 + i) * 0.03, base.z + Math.sin(angle) * radius);
        // Mostly facing the viewer, with a playful wobble.
        e.set(0, yaw + Math.sin(local * seed.spin) * 0.55, Math.sin(local * 7 + i) * 0.35);
        q.setFromEuler(e);
        s.setScalar(Math.max(0.0001, size));
        hearts.setMatrixAt(i, matrix.compose(p, q, s));
      }
      hearts.instanceMatrix.needsUpdate = true;
      // The big heart: a squash-and-stretch pop, a hold, then up and away.
      const bigK = clamp01(t / 0.35);
      const bigSize = 0.24 * easeOutBack(bigK) * (1 - clamp01((t - 0.9) / 0.5));
      big.visible = bigSize > 0.001;
      big.position.set(base.x, base.y + HEAD + 0.55 + easeOut(clamp01((t - 0.7) / 0.8)) * 0.5, base.z);
      big.scale.set(bigSize * (1 + Math.sin(t * 18) * 0.08 * (1 - bigK)), bigSize * (1 - Math.sin(t * 18) * 0.08 * (1 - bigK)), bigSize);
      big.rotation.set(0, yaw + Math.sin(t * 3) * 0.3, Math.sin(t * 5) * 0.12);
      (big.material as THREE.MeshPhysicalMaterial).opacity = 1 - clamp01((t - 1.1) / 0.3);
      // Flash at the chest.
      flash.position.set(base.x, base.y + HEAD - 0.05, base.z);
      flash.scale.setScalar(0.4 + easeOut(clamp01(t / 0.3)) * 1.3);
      flash.material.opacity = 0.85 * (1 - clamp01(t / 0.45));
      // Ring on the ground.
      ring.position.set(base.x, base.y + 0.02, base.z);
      const ringK = clamp01(t / 0.65);
      ring.scale.setScalar(0.15 + easeOut(ringK) * 1.1);
      (ring.material as THREE.MeshBasicMaterial).opacity = 0.9 * (1 - ringK);
      // Glints twinkle around the head.
      for (let i = 0; i < GLINTS; i++) {
        const a = (i / GLINTS) * Math.PI * 2 + t * 1.2;
        const r = 0.35 + (i % 3) * 0.12 + t * 0.12;
        glintPositions[i * 3] = base.x + Math.cos(a) * r;
        glintPositions[i * 3 + 1] = base.y + HEAD + 0.1 + ((i * 37) % 10) * 0.05 + t * 0.25;
        glintPositions[i * 3 + 2] = base.z + Math.sin(a) * r;
      }
      glintGeometry.attributes.position.needsUpdate = true;
      glintMaterial.opacity = clamp01(t / 0.2) * fade * (0.6 + 0.4 * Math.sin(t * 22));
      if (t >= DURATION) group.visible = false;
    },
    dispose() { disposeItem(group); },
  };
  return fx;
}

// A short lived floating thing for the other items. `step(k, local)` poses it.
function simpleFx(name: string, duration: number, build: (group: THREE.Group) => (k: number, t: number, base: THREE.Vector3, yaw: number) => void): ItemFx {
  const group = new THREE.Group();
  group.name = name;
  group.visible = false;
  const pose = build(group);
  const base = new THREE.Vector3();
  let t = duration;
  const fx: ItemFx = {
    group,
    get active() { return t < duration; },
    play(at) { base.copy(at); t = 0; group.visible = true; pose(0, 0, base, 0); },
    update(dt, camera) {
      if (t >= duration) return;
      t = Math.min(duration, t + dt);
      pose(t / duration, t, base, camera ? Math.atan2(camera.position.x - base.x, camera.position.z - base.z) : 0);
      if (t >= duration) group.visible = false;
    },
    dispose() { disposeItem(group); },
  };
  return fx;
}

function setOpacity(object: THREE.Object3D, opacity: number) {
  object.traverse(child => {
    const m = (child as THREE.Mesh).material as THREE.Material | undefined;
    if (m) m.opacity = opacity;
  });
}

// Pencil: a little handwritten note floats up and rocks.
function noteFx() {
  return simpleFx('fx:note', 2, group => {
    const paper = canvasTexture(256, 192, (ctx, w, h) => {
      ctx.fillStyle = '#fbf3df';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = '#9fc0d8';
      ctx.lineWidth = 2;
      for (let y = 44; y < h; y += 28) { ctx.beginPath(); ctx.moveTo(14, y); ctx.lineTo(w - 14, y); ctx.stroke(); }
      ctx.strokeStyle = '#2f3a8a';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      for (const [y, len] of [[38, 0.7], [66, 0.55], [94, 0.62]]) {
        ctx.beginPath();
        ctx.moveTo(24, y);
        for (let x = 24; x < 24 + (w - 48) * len; x += 8) ctx.lineTo(x, y + Math.sin(x * 0.4) * 4);
        ctx.stroke();
      }
      // A smile doodle.
      ctx.beginPath();
      ctx.arc(w - 58, h - 46, 22, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(w - 58, h - 44, 12, 0.2, Math.PI - 0.2);
      ctx.stroke();
      ctx.fillStyle = '#2f3a8a';
      for (const dx of [-8, 8]) { ctx.beginPath(); ctx.arc(w - 58 + dx, h - 54, 3, 0, Math.PI * 2); ctx.fill(); }
    });
    const note = mesh(new THREE.PlaneGeometry(0.2, 0.15), new THREE.MeshStandardMaterial({ map: paper, emissiveMap: paper, emissive: '#ffffff', emissiveIntensity: 0.45, side: THREE.DoubleSide, transparent: true, roughness: 0.9 }), group);
    return (k, t, base, yaw) => {
      const pop = easeOutBack(clamp01(t / 0.3));
      note.scale.setScalar(Math.max(0.001, pop * 1.3));
      // Beside the head, drifting up and rocking like paper.
      note.position.set(base.x + Math.cos(yaw) * 0.42 + Math.sin(t * 2) * 0.05, base.y + 1.75 + easeOut(k) * 0.55, base.z - Math.sin(yaw) * 0.42);
      note.rotation.set(Math.sin(t * 3) * 0.15, yaw + Math.sin(t * 1.7) * 0.5, Math.sin(t * 4) * 0.18);
      setOpacity(note, 1 - clamp01((k - 0.7) / 0.3));
    };
  });
}

// Book: a few pages flutter out and drift.
function pagesFx() {
  return simpleFx('fx:pages', 1.8, group => {
    const paper = canvasTexture(128, 176, (ctx, w, h) => {
      ctx.fillStyle = '#f6eedc';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(60,50,40,0.35)';
      for (let y = 20; y < h - 14; y += 12) ctx.fillRect(14, y, w - 28 - ((y * 7) % 30), 3);
    });
    const material = new THREE.MeshStandardMaterial({ map: paper, emissiveMap: paper, emissive: '#ffffff', emissiveIntensity: 0.4, side: THREE.DoubleSide, transparent: true, roughness: 0.9 });
    const geometry = new THREE.PlaneGeometry(0.14, 0.19);
    const pages = Array.from({ length: 5 }, () => mesh(geometry, material, group));
    return (k, t, base) => {
      pages.forEach((page, i) => {
        const local = clamp01((t - i * 0.08) / 1.5);
        const a = -0.9 + i * 0.45;
        page.visible = t > i * 0.08;
        page.position.set(base.x + Math.sin(a) * easeOut(local) * 0.6, base.y + 1.35 + easeOut(local) * 0.55 - local * local * 0.25, base.z + 0.2 + Math.cos(a) * easeOut(local) * 0.2);
        page.rotation.set(Math.sin(t * 6 + i) * 0.7, local * 4 + i, Math.sin(t * 5 + i * 2) * 0.4);
      });
      material.opacity = 1 - clamp01((k - 0.65) / 0.35);
    };
  });
}

// Pepper spray: a soft orange cartoon puff. No one is hurt, it just tickles.
function puffFx() {
  return simpleFx('fx:puff', 1.6, group => {
    const material = new THREE.MeshToonMaterial({ color: '#ffb066', emissive: '#ff7a2a', emissiveIntensity: 0.25, transparent: true });
    const geometry = new THREE.SphereGeometry(1, 20, 14);
    const blobs = [[0, 0, 0, 0.16], [0.13, 0.04, 0, 0.12], [-0.12, 0.03, 0.02, 0.12], [0.05, 0.12, -0.02, 0.11], [-0.06, 0.11, 0.03, 0.1], [0.2, -0.04, 0.02, 0.08], [-0.19, -0.05, 0, 0.08]]
      .map(([x, y, z, r]) => ({ part: mesh(geometry, material, group), x, y, z, r }));
    return (k, t, base) => {
      const grow = easeOutBack(clamp01(t / 0.45));
      blobs.forEach(({ part, x, y, z, r }, i) => {
        const wobble = 1 + Math.sin(t * 9 + i * 1.7) * 0.06;
        part.scale.setScalar(Math.max(0.001, r * grow * wobble * (1 + k * 0.5)));
        // A ticklish cloud around the chest, never in the face.
        part.position.set(base.x + x * (1 + k) * 1.6, base.y + 1.05 + y + k * 0.3, base.z + 0.3 + z);
      });
      material.opacity = 0.95 * (1 - clamp01((k - 0.45) / 0.55));
    };
  });
}

// Fiction props: just a short «!» pop above the head.
function bangFx() {
  return simpleFx('fx:pop', 1.2, group => {
    const texture = canvasTexture(128, 128, (ctx, w) => {
      ctx.fillStyle = '#fff4e2';
      ctx.strokeStyle = '#f0b45c';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.arc(w / 2, w / 2, w / 2 - 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#2a1a08';
      ctx.font = '900 84px Inter, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('!', w / 2, w / 2 + 4);
    });
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false }));
    sprite.renderOrder = 10;
    group.add(sprite);
    return (k, t, base) => {
      const size = 0.32 * easeOutBack(clamp01(t / 0.25)) * (1 - clamp01((k - 0.8) / 0.2) * 0.4);
      sprite.scale.setScalar(Math.max(0.001, size));
      sprite.position.set(base.x, base.y + 2.1 + easeOut(k) * 0.15, base.z);
      sprite.material.opacity = 1 - clamp01((k - 0.7) / 0.3);
    };
  });
}

/** A tiny, friendly effect for using an item. The heart gets the full burst. */
export function createItemUseFx(id: ItemId): ItemFx {
  switch (id) {
    case 'corazon': return createHeartBurst();
    case 'lapiz': return noteFx();
    case 'libro': return pagesFx();
    case 'gas': return puffFx();
    default: return bangFx();
  }
}
