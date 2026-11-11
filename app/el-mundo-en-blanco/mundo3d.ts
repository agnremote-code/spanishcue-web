// El mundo en blanco · the sheet and everything folded on it: the shore with
// its sea of tissue paper, the forest of drafts, the pop-up city, the
// mountain of the last fold and, in the middle, the great inkwell. All of it
// comes from layout.mjs (the tests read the same numbers) and is made of the
// one paper of papel3d.ts, so it is white until the ink of an encounter
// reaches it.
import * as THREE from 'three';
import type { Box, Bounds } from '../noche-abierta/world3d.mjs';
import { CAST, SPOTS, ZONES } from './story.mjs';
import { BASKET, BOUNDS, BUILDINGS, DESK, DOCK, FINAL, LAMPS, MAILBOX, PLACES, POND, POSTS, ROCKS, SISTERS, TREES, solidsFor } from './layout.mjs';
import { canvasTexture, crumpled, fold, gem, inkBlack, paper, spike } from './papel3d';
import { animateSer, createSer, type Ser } from './seres3d';

export type Mundo = {
  group: THREE.Group;
  seres: Ser[];
  /** Everybody you can bump into (the twelve and Lina's sisters). */
  bodies: { x: number; z: number; radius: number; ser: Ser }[];
  solids: Box[];
  bounds: Bounds;
  spots: { id: string; x: number; z: number; heading: number }[];
  animate: (t: number, dt: number, talking: string | null, px: number, pz: number) => void;
  /** 0–1: how full the inkwell is. */
  setInk: (k: number) => void;
};

const DS = THREE.DoubleSide;
const C = (hex: string) => new THREE.Color(hex);
const smooth = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
function seeded(seed: number) { let s = seed; return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }

const SAND = C('#f1d59c'), GREEN = C('#a6d68a'), PAVING = C('#efc4a6'), LILAC = C('#cabcea'), SNOW = C('#f2efff'), CREAM = C('#f7ecd0'), HILL = C('#b9dba0');
function groundColor(x: number, z: number, out: THREE.Color) {
  out.copy(GREEN).lerp(PAVING, smooth(-7, 7, x));
  out.lerp(SAND, smooth(17, 25, z));
  out.lerp(LILAC, 1 - smooth(-29, -20, z));
  out.lerp(SNOW, 1 - smooth(-52, -40, z));
  const path = Math.max(1 - smooth(2.6, 4.6, Math.abs(x)), (1 - smooth(1.8, 3.4, Math.abs(z))) * (1 - smooth(26, 30, Math.abs(x))), 1 - smooth(6, 9, Math.hypot(x, z)));
  out.lerp(CREAM, path * 0.85);
  if (Math.abs(x) > 54 || z < -60) out.lerp(HILL, 0.35);
  return out;
}

function ground(parent: THREE.Object3D) {
  const g = new THREE.PlaneGeometry(260, 230, 104, 92);
  g.rotateX(-Math.PI / 2);
  g.translate(0, 0, -10);
  const p = g.attributes.position as THREE.BufferAttribute;
  const colors = new Float32Array(p.count * 3), c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i);
    // Beyond the edge of the walk the sheet lifts into folded hills.
    const out = Math.max(0, Math.abs(x) - BOUNDS.maxX - 3, BOUNDS.minZ - 3 - z);
    if (out > 0 && z < 50) p.setY(i, Math.min(14, out * 0.45) * (0.55 + 0.9 * Math.abs(Math.sin(x * 0.21) * Math.cos(z * 0.17))));
    if (z > 49.5) p.setY(i, -0.6);
    groundColor(x, z, c);
    colors.set([c.r, c.g, c.b], i * 3);
  }
  g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const flat = g.toNonIndexed();
  flat.computeVertexNormals();
  g.dispose();
  const m = new THREE.Mesh(flat, paper('#ffffff', { vertexColors: true, sheet: true }));
  m.receiveShadow = true;
  parent.add(m);
}

function sea(parent: THREE.Object3D) {
  const water = new THREE.Mesh(new THREE.PlaneGeometry(260, 90), paper('#3f86c4'));
  water.rotation.x = -Math.PI / 2; water.position.set(0, -0.35, 94);
  parent.add(water);
  // Rows of cut-out waves that slide against each other, like the sea of a toy theatre.
  const rows: THREE.Mesh[] = [];
  const shape = new THREE.Shape();
  shape.moveTo(-130, -0.6);
  for (let x = -130; x < 130; x += 4) { shape.lineTo(x + 1.6, 0.7); shape.quadraticCurveTo(x + 2.6, 0.9, x + 3, 0.2); shape.lineTo(x + 4, 0); }
  shape.lineTo(130, -0.6); shape.closePath();
  const geo = new THREE.ShapeGeometry(shape);
  const tints = ['#4f97d3', '#3b7fc0', '#62a8dc', '#2f6fb3', '#4f97d3'];
  tints.forEach((tint, i) => {
    const row = new THREE.Mesh(geo, paper(tint, { side: DS }));
    row.position.set(0, -0.15 - i * 0.03, 50.6 + i * 3.4);
    row.rotation.x = -0.25;
    parent.add(row); rows.push(row);
  });
  return (t: number) => rows.forEach((r, i) => { r.position.x = Math.sin(t * 0.5 + i * 1.3) * (i % 2 ? 1.6 : -1.6); r.position.y = -0.15 - i * 0.03 + Math.sin(t * 0.9 + i) * 0.08; });
}

function mountains(parent: THREE.Object3D) {
  const r = seeded(5);
  const rock = paper('#b4a6dc'), far = paper('#9fb0e0'), snow = paper('#ffffff'), hill = paper('#9ccf86'), clay = paper('#e6b392');
  const peak = (x: number, z: number, radius: number, h: number, m: THREE.Material, capped: boolean) => {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(radius, h, 5 + Math.floor(r() * 2), 1), m);
    cone.position.set(x, h / 2 - 0.5, z); cone.rotation.y = r() * 6;
    parent.add(cone);
    if (capped) { const cap = new THREE.Mesh(new THREE.ConeGeometry(radius * 0.36, h * 0.36, 5, 1), snow); cap.position.set(x, h * 0.82 - 0.4, z); cap.rotation.y = cone.rotation.y; parent.add(cap); }
  };
  for (let i = 0; i < 9; i++) peak(-84 + i * 21 + r() * 8, -78 - r() * 18, 15 + r() * 9, 26 + r() * 22, i % 2 ? rock : far, true);
  peak(0, -74, 17, 46, rock, true);
  for (let i = 0; i < 6; i++) { peak(-72 - r() * 16, -44 + i * 17, 10 + r() * 6, 9 + r() * 9, hill, false); peak(72 + r() * 16, -44 + i * 17, 10 + r() * 6, 8 + r() * 9, clay, false); }
}

function forest(parent: THREE.Object3D, shadows: boolean) {
  const trunkGeo = new THREE.CylinderGeometry(0.16, 0.24, 1, 5, 1);
  const trunks = new THREE.InstancedMesh(trunkGeo, paper('#a98862'), TREES.length);
  const crumple = new THREE.InstancedMesh(crumpled(1, 3, 1, 0.24), paper('#ffffff'), TREES.length * 2);
  const fir = new THREE.InstancedMesh(new THREE.ConeGeometry(1, 1, 5, 1), paper('#ffffff'), TREES.length * 3);
  const leaf = ['#6fbf73', '#4f9f63', '#8fcf6a', '#3f8f5a', '#e8a04a', '#e06a7a', '#b7d86a'];
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), col = new THREE.Color();
  const r = seeded(17);
  let nc = 0, nf = 0;
  TREES.forEach((t, i) => {
    const h = 1.5 * t.size + 0.4;
    m.compose(p.set(t.x, h / 2, t.z), q.identity(), s.set(t.size, h, t.size)); trunks.setMatrixAt(i, m);
    col.set(leaf[Math.floor(r() * leaf.length)]);
    if (t.kind === 1) {
      for (let k = 0; k < 3; k++) {
        const w = (1.25 - k * 0.3) * t.size;
        m.compose(p.set(t.x, h + k * 0.85 * t.size + 0.5 * t.size, t.z), q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), r() * 2), s.set(w, 1.5 * t.size, w));
        fir.setMatrixAt(nf, m); fir.setColorAt(nf++, col);
      }
    } else {
      const n = t.kind === 2 ? 2 : 1;
      for (let k = 0; k < n; k++) {
        const w = (1.5 - k * 0.55) * t.size;
        m.compose(p.set(t.x + k * 0.3, h + 0.75 * t.size + k * 1.25 * t.size, t.z), q.setFromEuler(new THREE.Euler(r() * 3, r() * 3, r() * 3)), s.set(w, w * 0.92, w));
        crumple.setMatrixAt(nc, m); crumple.setColorAt(nc++, col);
      }
    }
  });
  crumple.count = nc; fir.count = nf;
  for (const im of [trunks, crumple, fir]) { im.castShadow = shadows; im.receiveShadow = shadows; im.frustumCulled = false; if (im.instanceColor) im.instanceColor.needsUpdate = true; parent.add(im); }

  const rocks = new THREE.InstancedMesh(crumpled(1, 9, 0, 0.3), paper('#b9b0d6'), ROCKS.length);
  ROCKS.forEach((k, i) => { m.compose(p.set(k.x, 0.42 * k.size, k.z), q.setFromEuler(new THREE.Euler(k.kind, k.x, k.z)), s.set(0.78 * k.size, 0.7 * k.size, 0.78 * k.size)); rocks.setMatrixAt(i, m); });
  rocks.castShadow = shadows; rocks.receiveShadow = shadows; rocks.frustumCulled = false; parent.add(rocks);

  // Grass folded in tufts and pinwheel flowers, wherever nothing else stands.
  const blade = new THREE.InstancedMesh(new THREE.ConeGeometry(0.09, 0.5, 3, 1), paper('#ffffff'), 420);
  const petal = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.16, 0), paper('#ffffff'), 90);
  const grassTints = ['#6fbf73', '#8fcf6a', '#4f9f63'], petalTints = ['#e8506a', '#f0b429', '#ffffff', '#8a55b8', '#e8862e'];
  const rr = seeded(53), solid = solidsFor();
  let nb = 0, np = 0;
  for (let tries = 0; tries < 2600 && nb < 420; tries++) {
    const x = -49 + rr() * 98, z = -30 + rr() * 76;
    if ((Math.abs(x) < 4.4 && z < 40) || Math.hypot(x, z) < 8 || (x > 6 && z < 24 && rr() < 0.85) || (z > 26 && rr() < 0.7)) continue;
    if (solid.some(b => x > b.x0 - 0.4 && x < b.x1 + 0.4 && z > b.z0 - 0.4 && z < b.z1 + 0.4)) continue;
    const flower = rr() < 0.16 && np < 90;
    for (let k = 0; k < (flower ? 1 : 3) && nb < 420; k++) {
      m.compose(p.set(x + (rr() - 0.5) * 0.4, 0.25 * (0.7 + rr() * 0.6), z + (rr() - 0.5) * 0.4), q.setFromEuler(new THREE.Euler((rr() - 0.5) * 0.5, rr() * 6, (rr() - 0.5) * 0.5)), s.set(1, 0.7 + rr() * 0.8, 1));
      blade.setMatrixAt(nb, m); blade.setColorAt(nb++, col.set(grassTints[Math.floor(rr() * 3)]));
    }
    if (flower) { m.compose(p.set(x, 0.52, z), q.setFromEuler(new THREE.Euler(0.4, rr() * 6, 0)), s.set(1, 0.35, 1)); petal.setMatrixAt(np, m); petal.setColorAt(np++, col.set(petalTints[Math.floor(rr() * 5)])); }
  }
  blade.count = nb; petal.count = np;
  for (const im of [blade, petal]) { im.frustumCulled = false; if (im.instanceColor) im.instanceColor.needsUpdate = true; parent.add(im); }

  // The pond of the forest and its lily pads.
  const pond = new THREE.Mesh(new THREE.CircleGeometry(POND.r, 9), paper('#6fb8d8'));
  pond.rotation.x = -Math.PI / 2; pond.position.set(POND.x, 0.03, POND.z); parent.add(pond);
  const pad = paper('#5fae62', { side: DS });
  for (const [dx, dz, w] of [[1.2, 0.8, 0.7], [-1.5, -0.6, 0.55], [0.2, -2, 0.6], [-0.4, 1.9, 0.5], [2.4, -1.3, 0.45]]) {
    const l = new THREE.Mesh(new THREE.CircleGeometry(w, 6, 0.4, Math.PI * 1.8), pad);
    l.rotation.x = -Math.PI / 2; l.position.set(POND.x + dx, 0.06, POND.z + dz); parent.add(l);
  }
}

function city(parent: THREE.Object3D, shadows: boolean) {
  const walls = ['#f2b49c', '#f6d98a', '#a8cfe8', '#cbb8e4'].map(c => paper(c));
  const roofs = ['#c9503c', '#d9862e', '#3f6fa8', '#7a4fa0'].map(c => paper(c, { side: DS }));
  const glass = paper('#3d5a80', { keep: 0.75 }), door = paper('#7a4a2e', { keep: 0.6 }), tab = paper('#fbf6ea', { side: DS });
  const panes: THREE.Matrix4[] = [];
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  for (const b of BUILDINGS) {
    const w = b.x1 - b.x0, d = b.z1 - b.z0, cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2;
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, b.h, d), walls[b.tint]);
    body.position.set(cx, b.h / 2, cz); body.castShadow = shadows; body.receiveShadow = shadows; parent.add(body);
    if (b.roof === 'gable') {
      const roof = new THREE.Mesh(fold([[-w / 2 - 0.3, 0, d / 2 + 0.3], [w / 2 + 0.3, 0, d / 2 + 0.3], [w / 2 + 0.3, 0, -d / 2 - 0.3], [-w / 2 - 0.3, 0, -d / 2 - 0.3], [-w / 2 - 0.3, 1.8, 0], [w / 2 + 0.3, 1.8, 0]], [[0, 1, 5, 4], [2, 3, 4, 5], [0, 4, 3], [1, 2, 5]]), roofs[b.tint]);
      roof.position.set(cx, b.h, cz); roof.castShadow = shadows; parent.add(roof);
    } else if (b.roof === 'point') {
      const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.78, 3.2, 4, 1), roofs[b.tint]);
      roof.position.set(cx, b.h + 1.6, cz); roof.rotation.y = Math.PI / 4; roof.castShadow = shadows; parent.add(roof);
    } else {
      const rim = new THREE.Mesh(new THREE.BoxGeometry(w + 0.5, 0.35, d + 0.5), roofs[b.tint]); rim.position.set(cx, b.h + 0.17, cz); parent.add(rim);
    }
    // Windows on the four walls, cut in rows.
    const floors = Math.max(1, Math.floor((b.h - 2.2) / 1.9));
    for (let f = 0; f < floors; f++) {
      const y = 2.9 + f * 1.9;
      for (const [nx, nz, len] of [[0, 1, w], [0, -1, w], [1, 0, d], [-1, 0, d]] as const) {
        const n = Math.max(1, Math.floor(len / 1.9));
        for (let k = 0; k < n; k++) {
          const off = (k - (n - 1) / 2) * 1.7;
          m.compose(new THREE.Vector3(cx + nx * (w / 2 + 0.02) + (nx ? 0 : off), y, cz + nz * (d / 2 + 0.02) + (nz ? 0 : off)), q.setFromEuler(e.set(0, Math.atan2(nx, nz), 0)), new THREE.Vector3(1, 1, 1));
          panes.push(m.clone());
        }
      }
    }
    const dr = new THREE.Mesh(new THREE.PlaneGeometry(1, 1.9), door); dr.position.set(b.x0 - 0.02, 0.95, cz); dr.rotation.y = -Math.PI / 2; parent.add(dr);
    // The tab that holds a pop-up building to its page.
    const flap = new THREE.Mesh(fold([[b.x0 - 1.1, 0.03, b.z0 + 0.5], [b.x0 - 1.1, 0.03, b.z1 - 0.5], [b.x0, 0.03, b.z1], [b.x0, 0.03, b.z0]], [[0, 1, 2, 3]]), tab);
    parent.add(flap);
  }
  const windows = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.8, 1.05), glass, panes.length);
  panes.forEach((mat, i) => windows.setMatrixAt(i, mat));
  windows.frustumCulled = false; parent.add(windows);

  // Garlands of cut-out flags across the street.
  const flagColors = ['#e8506a', '#f0b429', '#3aa7c9', '#3f8f5a', '#8a55b8'].map(c => paper(c, { side: DS }));
  for (const [x0, z0, x1, z1] of [[15, 13.2, 28, 14.2], [31.5, 0.5, 39, -4.2], [32, -10, 30, -19]]) {
    for (let k = 0; k < 9; k++) {
      const t = (k + 0.5) / 9, x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t, y = 4.7 - Math.sin(t * Math.PI) * 0.9;
      const f = new THREE.Mesh(fold([[-0.28, 0, 0], [0.28, 0, 0], [0, -0.55, 0]], [[0, 1, 2]]), flagColors[k % 5]);
      f.position.set(x, y, z); f.rotation.y = Math.atan2(x1 - x0, z1 - z0) + Math.PI / 2; parent.add(f);
    }
  }
}

function lamps(parent: THREE.Object3D) {
  const post = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.06, 0.09, 3.1, 5), paper('#5a4a3c'), LAMPS.length);
  const pts: THREE.Vector2[] = [];
  for (let i = 0; i <= 6; i++) pts.push(new THREE.Vector2(i % 2 ? 0.3 : 0.22, i * 0.1));
  const shade = new THREE.InstancedMesh(new THREE.LatheGeometry(pts, 8), paper('#f6c95a', { side: DS, emissive: '#ff9a2a', emissiveIntensity: 0.5 }), LAMPS.length);
  const m = new THREE.Matrix4();
  LAMPS.forEach((l, i) => { post.setMatrixAt(i, m.makeTranslation(l.x, 1.55, l.z)); shade.setMatrixAt(i, m.makeTranslation(l.x, 3.05, l.z)); });
  post.frustumCulled = false; shade.frustumCulled = false;
  parent.add(post, shade);
}

function sign(text: string, color: string) {
  const tex = canvasTexture(512, 128, ctx => {
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 512, 128);
    ctx.strokeStyle = '#2a2630'; ctx.lineWidth = 6; ctx.strokeRect(6, 6, 500, 116);
    ctx.fillStyle = '#2a2630'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = 'italic 600 44px Georgia, "Times New Roman", serif';
    ctx.fillText(text, 256, 66, 470);
  });
  const g = new THREE.Group();
  const mat = paper(color, { map: tex, keep: 1 });
  for (const back of [0, 1]) { const plate = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 0.85), mat); plate.position.y = 2.25; plate.rotation.y = back * Math.PI; g.add(plate); }
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 1.9, 5), paper('#5a4a3c')); pole.position.y = 0.95; g.add(pole);
  return g;
}

function plaza(parent: THREE.Object3D, shadows: boolean) {
  // The great inkwell: a faceted bottle with a paper label and a quill taller than a house.
  const glass = paper('#34406e'), label = paper('#fff6e0', { keep: 0.5 });
  const well = new THREE.Group(); well.position.set(FINAL.x, 0, FINAL.z); parent.add(well);
  const bottle = new THREE.Mesh(new THREE.CylinderGeometry(1.9, 2.25, 2.3, 8, 1), glass); bottle.position.y = 1.15; well.add(bottle);
  const shoulder = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.9, 0.7, 8, 1), glass); shoulder.position.y = 2.65; well.add(shoulder);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.5, 8, 1, true), paper('#34406e', { side: DS })); neck.position.y = 3.25; well.add(neck);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(1.97, 2.2, 1.2, 8, 1, true), label); band.position.y = 1.2; well.add(band);
  const ink = new THREE.Mesh(new THREE.CircleGeometry(0.97, 8), inkBlack()); ink.rotation.x = -Math.PI / 2; ink.position.y = 2.6; well.add(ink);
  const quill = new THREE.Group(); quill.position.set(0.3, 3.2, 0); quill.rotation.z = -0.32; quill.rotation.x = 0.12; well.add(quill);
  quill.add(spike([0, -1.2, 0], [0, 5.6, 0], 0.07, paper('#fff6e0'), 4));
  const vane = (side: number, tint: string) => new THREE.Mesh(fold([[0, 1.2, 0], [0.95 * side, 2.4, 0.1], [1.05 * side, 4.4, 0.16], [0, 5.6, 0], [0.55 * side, 3.4, -0.12]], [[0, 1, 4], [1, 2, 4], [2, 3, 4], [0, 4, 3]]), paper(tint, { side: DS }));
  quill.add(vane(1, '#e8506a'), vane(-1, '#f0b429'));
  if (shadows) well.traverse(o => { if ((o as THREE.Mesh).isMesh) o.castShadow = true; });
  ZONES.forEach((z, i) => {
    const a = [0, -Math.PI / 2, Math.PI / 2, Math.PI][i];
    const s = sign(z.name.replace(/^(El|La) /, ''), '#ffffff');
    s.position.set(Math.sin(a) * 7.2 + Math.cos(a) * 3.3, 0, Math.cos(a) * 7.2 - Math.sin(a) * 3.3);
    s.rotation.y = a + Math.PI; parent.add(s);
  });
  return (k: number) => { ink.position.y = 0.5 + k * 2.95; ink.scale.setScalar(k > 0.82 ? 1 : 1.9); };
}

function props(parent: THREE.Object3D, shadows: boolean) {
  const red = paper('#d2553f'), wood = paper('#b98d5e'), white = paper('#fffaf0', { side: DS }), grey = paper('#9aa0ac', { side: DS });
  // The mailbox of the letters nobody sent, and a few that fell out.
  const box = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.85, 0.6), red); box.position.set(MAILBOX.x, 1.45, MAILBOX.z); parent.add(box);
  const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.6, 6, 1, false, 0, Math.PI), red); lid.rotation.x = Math.PI / 2; lid.rotation.z = Math.PI / 2; lid.position.set(MAILBOX.x, 1.87, MAILBOX.z); parent.add(lid);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 1.1, 5), wood); stem.position.set(MAILBOX.x, 0.55, MAILBOX.z); parent.add(stem);
  const slot = new THREE.Mesh(new THREE.PlaneGeometry(0.44, 0.06), inkBlack()); slot.position.set(MAILBOX.x, 1.62, MAILBOX.z + 0.31); parent.add(slot);
  const r = seeded(29);
  for (let i = 0; i < 9; i++) {
    const letter = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.28), white);
    letter.rotation.set(-Math.PI / 2 + (r() - 0.5) * 0.3, 0, r() * 6); letter.position.set(MAILBOX.x + (r() - 0.3) * 3.4, 0.05 + r() * 0.03, MAILBOX.z + 0.6 + r() * 2.4); parent.add(letter);
  }
  // The wastepaper basket where Borra was thrown.
  const basket = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.6, 1.25, 9, 1, true), grey); basket.position.set(BASKET.x, 0.63, BASKET.z); parent.add(basket);
  const scraps = new THREE.InstancedMesh(crumpled(0.2, 5, 0, 0.3), paper('#fff6e0'), 9);
  const m = new THREE.Matrix4();
  for (let i = 0; i < 9; i++) scraps.setMatrixAt(i, m.makeTranslation(BASKET.x + (i < 4 ? (r() - 0.5) * 0.7 : 1.1 + r() * 2), i < 4 ? 0.9 + r() * 0.4 : 0.18, BASKET.z + (i < 4 ? (r() - 0.5) * 0.7 : (r() - 0.5) * 3.2)));
  parent.add(scraps);
  // The dock and its moorings.
  const planks = new THREE.Mesh(new THREE.BoxGeometry(DOCK.x1 - DOCK.x0, 0.08, DOCK.z1 - DOCK.z0 + 6), wood); planks.position.set((DOCK.x0 + DOCK.x1) / 2, 0.04, (DOCK.z0 + DOCK.z1) / 2 + 3); planks.receiveShadow = shadows; parent.add(planks);
  for (const p of POSTS) { const post = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.19, 1.3, 6), wood); post.position.set(p.x, 0.65, p.z); post.castShadow = shadows; parent.add(post); }
  // The desk at the top: where the world was written.
  const dw = DESK.x1 - DESK.x0, dd = DESK.z1 - DESK.z0, dx = (DESK.x0 + DESK.x1) / 2, dz = (DESK.z0 + DESK.z1) / 2;
  const top = new THREE.Mesh(new THREE.BoxGeometry(dw + 0.3, 0.22, dd + 0.3), wood); top.position.set(dx, 1.5, dz); top.castShadow = shadows; parent.add(top);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(0.28, 1.4, 0.28), wood); leg.position.set(dx + sx * (dw / 2 - 0.2), 0.7, dz + sz * (dd / 2 - 0.2)); parent.add(leg); }
  const stack = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.34, 1.0), paper('#fffaf0')); stack.position.set(dx - 1.8, 1.78, dz); stack.rotation.y = 0.2; parent.add(stack);
  const pencil = new THREE.Group(); pencil.position.set(dx + 1.2, 1.72, dz + 0.3); pencil.rotation.set(0, 0.5, Math.PI / 2); parent.add(pencil);
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 2.4, 6), paper('#f0b429')); pencil.add(shaft);
  const wood2 = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.34, 6), paper('#e9cfa6')); wood2.position.y = 1.37; pencil.add(wood2);
  const lead = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.12, 6), inkBlack()); lead.position.y = 1.5; pencil.add(lead);
  const rubber = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.22, 6), paper('#e8506a')); rubber.position.y = -1.31; pencil.add(rubber);
}

/** Loose sheets that climb in a spiral over the desk, clouds of crumpled paper, a flock of cranes and the butterflies of the forest. */
function sky(parent: THREE.Object3D, low: boolean) {
  const r = seeded(71);
  const sheets = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.62, 0.86), paper('#fffaf0', { side: DS }), low ? 14 : 26);
  sheets.frustumCulled = false; parent.add(sheets);
  const clouds = new THREE.Group(); parent.add(clouds);
  const puff = crumpled(1, 13, 1, 0.16), cloudMat = paper('#ffffff');
  for (let i = 0; i < (low ? 6 : 10); i++) {
    const c = new THREE.Group();
    for (let k = 0; k < 4; k++) { const b = new THREE.Mesh(puff, cloudMat); const w = 2.2 + r() * 2.4; b.scale.set(w * 1.4, w * 0.7, w); b.position.set((k - 1.5) * 3 + r(), r() * 1.2, r() * 2); c.add(b); }
    c.position.set(-70 + r() * 140, 17 + r() * 12, -60 + r() * 110); c.userData.speed = 0.3 + r() * 0.5;
    clouds.add(c);
  }
  // A little bank of cloud under the whale: she swims in it.
  const whaleAt = PLACES.find(p => p.id === 'ballena')!.being;
  for (let k = 0; k < 5; k++) { const b = new THREE.Mesh(puff, cloudMat); b.scale.set(2.4, 0.7, 1.7); b.position.set(whaleAt.x - 3 + k * 1.9, 2.0 + (k % 2) * 0.3, whaleAt.z + (k % 2 ? 2.6 : -2.6) + r()); parent.add(b); }
  const birdMat = paper('#ffffff', { side: DS });
  const birds: { g: THREE.Group; l: THREE.Mesh; r: THREE.Mesh; a: number; rad: number; h: number; speed: number }[] = [];
  for (let i = 0; i < (low ? 4 : 7); i++) {
    const g = new THREE.Group();
    g.add(gem(0.12, 0.1, 0.36, birdMat));
    const wing = (s: number) => { const w = new THREE.Mesh(fold([[0, 0, 0.16], [0, 0, -0.16], [0.7 * s, 0.04, -0.1]], [[0, 1, 2]]), birdMat); g.add(w); return w; };
    birds.push({ g, l: wing(-1), r: wing(1), a: r() * 6, rad: 9 + r() * 12, h: 8 + r() * 6, speed: 0.22 + r() * 0.16 });
    parent.add(g);
  }
  const flies: { g: THREE.Group; l: THREE.Mesh; r: THREE.Mesh; x: number; z: number; seed: number }[] = [];
  const flyMats = ['#e8506a', '#f0b429', '#3aa7c9', '#8a55b8'].map(c => paper(c, { side: DS }));
  if (!low) for (let i = 0; i < 12; i++) {
    const g = new THREE.Group(), mat = flyMats[i % 4];
    const wing = (s: number) => { const w = new THREE.Mesh(fold([[0, 0, 0.1], [0, 0, -0.1], [0.2 * s, 0, -0.14], [0.24 * s, 0, 0.14]], [[0, 1, 2, 3]]), mat); g.add(w); return w; };
    flies.push({ g, l: wing(-1), r: wing(1), x: -44 + r() * 34, z: -22 + r() * 40, seed: r() * 50 });
    parent.add(g);
  }
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
  const dx = (DESK.x0 + DESK.x1) / 2, dz = (DESK.z0 + DESK.z1) / 2;
  return (t: number) => {
    for (let i = 0; i < sheets.count; i++) {
      const k = ((i / sheets.count) + t * 0.035) % 1, a = i * 2.4 + t * 0.5, rad = 1.2 + k * 5.5;
      m.compose(p.set(dx + Math.sin(a) * rad, 2.4 + k * 26, dz + Math.cos(a) * rad), q.setFromEuler(e.set(t * 0.7 + i, a, i * 1.7 + t * 0.4)), one);
      sheets.setMatrixAt(i, m);
    }
    sheets.instanceMatrix.needsUpdate = true;
    for (const c of clouds.children) { c.position.x += (c.userData.speed as number) * 0.016; if (c.position.x > 90) c.position.x = -90; }
    for (const b of birds) {
      const a = b.a + t * b.speed;
      b.g.position.set(-8 + Math.sin(a) * b.rad, b.h + Math.sin(t + b.a) * 0.6, 30 + Math.cos(a) * b.rad * 0.7);
      b.g.rotation.y = a + Math.PI / 2;
      b.l.rotation.z = Math.sin(t * 5 + b.a) * 0.6; b.r.rotation.z = -b.l.rotation.z;
    }
    for (const f of flies) {
      f.g.position.set(f.x + Math.sin(t * 0.5 + f.seed) * 2.4, 1.1 + Math.sin(t * 1.3 + f.seed) * 0.5, f.z + Math.cos(t * 0.4 + f.seed * 2) * 2.4);
      f.g.rotation.y = t * 0.5 + f.seed;
      f.l.rotation.z = Math.abs(Math.sin(t * 11 + f.seed)) * 1.1; f.r.rotation.z = -f.l.rotation.z;
    }
  };
}

export function buildMundo({ low, shadows }: { low: boolean; shadows: boolean }): Mundo {
  const group = new THREE.Group();
  ground(group);
  const waves = sea(group);
  mountains(group);
  forest(group, shadows);
  city(group, shadows);
  lamps(group);
  const fill = plaza(group, shadows);
  props(group, shadows);
  const air = sky(group, low);

  const seres: Ser[] = [];
  PLACES.forEach((place, i) => {
    const spot = SPOTS.find(s => s.id === place.id)!;
    const ser = createSer(place.id, CAST[spot.cast[0]], place.being, 100 + i * 37, shadows);
    group.add(ser.root); seres.push(ser);
  });
  const lina = seres.find(s => s.id === 'munecas')!;
  const bodies = [
    ...seres.filter(s => !s.air).map(ser => ({ x: ser.x, z: ser.z, radius: ser.radius, ser })),
    ...SISTERS.map(s => ({ x: s.x, z: s.z, radius: s.radius + 0.35, ser: lina })),
  ];
  return {
    group, seres, bodies, solids: solidsFor(), bounds: BOUNDS,
    spots: PLACES.map(p => ({ id: p.id, x: p.x, z: p.z, heading: p.heading })),
    setInk: fill,
    animate(t, dt, talking, px, pz) {
      waves(t); air(t);
      for (const s of seres) {
        const d = Math.hypot(s.x - px, s.z - pz);
        if (d > 70) continue;
        const speaks = talking === s.id;
        animateSer(s, t, dt, speaks, speaks || d < 7 ? Math.atan2(px - s.x, pz - s.z) : s.heading);
      }
    },
  };
}
