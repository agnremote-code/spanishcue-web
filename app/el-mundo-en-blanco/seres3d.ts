// El mundo en blanco · the twelve paper beings, each folded by hand: corner
// by corner, face by face, no shared doll underneath. They face +z; the scene
// turns them. Every one has two ink dots for eyes (they blink), its own way of
// breathing while it waits and its own way of moving when it talks to you.
import * as THREE from 'three';
import type { Kind, Member } from './story.mjs';
import type { Being } from './layout.mjs';
import { crumpled, eyes, fold, gem, inkBlack, loft, newsprint, paper, ruled, spike } from './papel3d';

export type Ser = {
  id: string; kind: Kind; name: string;
  root: THREE.Group; inner: THREE.Group;
  /** The kit's bubbles read `person.root.position`. */
  person: { root: THREE.Group };
  x: number; z: number; y: number; heading: number; radius: number; air: boolean;
  body: 'f' | 'm'; seed: number;
  eyes: THREE.Mesh[]; parts: Record<string, THREE.Object3D>;
  blinkAt: number; angryUntil?: number; height: number;
};

type Built = { parts: Record<string, THREE.Object3D>; eyes: THREE.Mesh[]; height: number };
const DS = THREE.DoubleSide;
const group = (parent: THREE.Object3D, x = 0, y = 0, z = 0) => { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; };
const mesh = (parent: THREE.Object3D, g: THREE.BufferGeometry, m: THREE.Material) => { const o = new THREE.Mesh(g, m); parent.add(o); return o; };

// ---------------------------------------------------------------- 1 · Senba, the crane
function grulla(g: THREE.Group, ink: string): Built {
  const body = paper(ink, { side: DS }), pale = paper('#fbe3e6', { side: DS }), leg = paper('#3a3340');
  const torso = gem(0.3, 0.26, 0.56, body); torso.position.y = 1.02; g.add(torso);
  g.add(spike([0, 1.02, 0.34], [0, 1.92, 0.7], 0.11, body));
  const head = group(g, 0, 1.9, 0.7);
  head.add(spike([0, 0.02, -0.02], [0, -0.14, 0.34], 0.07, paper('#f0b429', { side: DS })));
  g.add(spike([0, 1.02, -0.34], [0, 1.72, -0.98], 0.13, pale));
  const wing = (side: number) => {
    const w = group(g, 0.16 * side, 1.12, -0.02);
    mesh(w, fold([[0, 0, 0.3], [0, 0, -0.3], [1.25 * side, 0.34, -0.12], [0.62 * side, 0.3, 0.14]], [[0, 3, 1], [3, 2, 1]]), side > 0 ? body : pale);
    return w;
  };
  const wl = wing(-1), wr = wing(1);
  for (const s of [-1, 1]) {
    g.add(spike([0.09 * s, 0.86, 0], [0.11 * s, 0.03, 0.03], 0.028, leg, 4));
    const foot = mesh(g, fold([[0.11 * s, 0.02, 0.2], [0.02 * s, 0.02, -0.04], [0.2 * s, 0.02, -0.04]], [[0, 1, 2]]), leg); foot.material.side = DS;
  }
  return { parts: { wl, wr, head }, eyes: eyes(head, [0, 0.04, 0.04], 0.065, 0.032), height: 2 };
}

// ---------------------------------------------------------------- 2 · Capitán Pliego, the boat
function barco(g: THREE.Group, ink: string): Built {
  const print = newsprint(3);
  const hull = paper('#ffffff', { side: DS, map: print, keep: 0.85 }), band = paper(ink, { side: DS });
  const boat = group(g, 0, 0.02, 0);
  boat.rotation.z = 0.07; boat.rotation.y = 0.7;
  // The classic boat: two raised points, a keel and the tent in the middle.
  const c: [number, number, number][] = [[-1.25, 0.8, 0], [1.25, 0.8, 0], [-0.5, 0.04, 0], [0.5, 0.04, 0], [0, 0.52, 0.4], [0, 0.52, -0.4], [-0.5, 0.52, 0], [0.5, 0.52, 0], [0, 1.22, 0]];
  const hullMesh = mesh(boat, fold(c, [[0, 2, 4], [2, 3, 4], [3, 1, 4], [0, 5, 2], [2, 5, 3], [3, 5, 1]]), hull);
  const uv = new Float32Array(hullMesh.geometry.attributes.position.count * 2);
  const p = hullMesh.geometry.attributes.position;
  for (let i = 0; i < p.count; i++) { uv[i * 2] = p.getX(i) * 0.4 + 0.5; uv[i * 2 + 1] = p.getY(i) * 0.8; }
  hullMesh.geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  mesh(boat, fold(c, [[6, 4, 8], [4, 7, 8], [7, 5, 8], [5, 6, 8]]), band);
  boat.add(spike([0, 1.2, 0], [0, 1.75, 0], 0.02, paper('#3a3340'), 4));
  const flag = mesh(boat, fold([[0, 1.72, 0], [0, 1.52, 0], [0.34, 1.62, 0.04]], [[0, 1, 2]]), band);
  // The captain looks at you from the side of the hull.
  const face = group(boat, 0, 0.42, 0.33);
  return { parts: { boat, flag }, eyes: eyes(face, [0, 0, 0], 0.13, 0.045), height: 1.8 };
}

// ---------------------------------------------------------------- 3 · Remite, the fox
function zorro(g: THREE.Group, ink: string): Built {
  const fur = paper(ink, { side: DS }), white = paper('#fff6ea', { side: DS }), cap = paper('#2f4f8f', { side: DS }), bag = paper('#8a5a34');
  const bodyMesh = mesh(g, new THREE.ConeGeometry(0.46, 0.98, 4, 1), fur); bodyMesh.position.y = 0.49; bodyMesh.rotation.y = Math.PI / 4;
  mesh(g, fold([[0, 0.2, 0.33], [-0.2, 0.72, 0.16], [0.2, 0.72, 0.16]], [[0, 1, 2]]), white);
  const head = group(g, 0, 0.98, 0.08);
  const c: [number, number, number][] = [[0, -0.04, 0.56], [-0.4, 0.5, 0], [0.4, 0.5, 0], [-0.44, 0.06, 0.04], [0.44, 0.06, 0.04], [0, 0.3, 0.02], [0, 0.08, -0.22], [-0.16, 0.3, 0.02], [0.16, 0.3, 0.02]];
  mesh(head, fold(c, [[0, 3, 5], [0, 5, 4], [3, 1, 7], [3, 7, 5], [4, 8, 2], [4, 5, 8], [3, 6, 5], [4, 5, 6], [3, 0, 6], [4, 6, 0]]), fur);
  mesh(head, fold([[0, -0.05, 0.57], [-0.2, 0.03, 0.3], [0.2, 0.03, 0.3], [0, -0.1, 0.3]], [[0, 1, 3], [0, 3, 2]]), white);
  const nose = mesh(head, new THREE.SphereGeometry(0.04, 8, 6), inkBlack()); nose.position.set(0, -0.03, 0.57);
  const hat = mesh(head, new THREE.ConeGeometry(0.2, 0.16, 4, 1), cap); hat.position.set(0, 0.36, 0.04); hat.rotation.y = Math.PI / 4;
  mesh(head, fold([[-0.2, 0.29, 0.2], [0.2, 0.29, 0.2], [0, 0.26, 0.42]], [[0, 1, 2]]), cap);
  const tail = group(g, 0.3, 0.12, -0.3);
  const t1 = gem(0.17, 0.15, 0.5, fur); t1.position.set(0.18, 0.06, -0.22); t1.rotation.y = -0.9; tail.add(t1);
  tail.add(spike([0.42, 0.07, -0.5], [0.66, 0.18, -0.78], 0.11, white));
  const satchel = mesh(g, new THREE.BoxGeometry(0.34, 0.26, 0.12), bag); satchel.position.set(-0.36, 0.42, 0.2); satchel.rotation.y = 0.5;
  mesh(g, fold([[-0.5, 0.56, 0.16], [-0.22, 0.56, 0.28], [-0.34, 0.74, 0.2]], [[0, 1, 2]]), white);
  return { parts: { head, tail }, eyes: eyes(head, [0, 0.16, 0.3], 0.15, 0.04), height: 1.6 };
}

// ---------------------------------------------------------------- 4 · Borra, the crumpled ball
function bola(g: THREE.Group, ink: string): Built {
  const ball = group(g, 0, 0.62, 0);
  mesh(ball, crumpled(0.6, 7, 1, 0.3), paper(ink));
  const arm = paper(ink, { side: DS });
  const al = group(ball, -0.5, 0, 0.1); al.add(spike([0, 0, 0], [-0.36, -0.1, 0.16], 0.07, arm));
  const ar = group(ball, 0.5, 0, 0.1); ar.add(spike([0, 0, 0], [0.36, -0.1, 0.16], 0.07, arm));
  for (const s of [-1, 1]) g.add(spike([0.2 * s, 0.16, 0.05], [0.24 * s, 0, 0.2], 0.08, arm));
  return { parts: { ball, al, ar }, eyes: eyes(ball, [0, 0.12, 0.56], 0.17, 0.055), height: 1.3 };
}

// ---------------------------------------------------------------- 5 · Brinca, the frog
function rana(g: THREE.Group, ink: string): Built {
  const skin = paper(ink, { side: DS }), belly = paper('#dff0c4', { side: DS });
  const frog = group(g, 0, 0, 0);
  const c: [number, number, number][] = [[0, 0.44, 0.6], [-0.44, 0.36, 0.12], [0.44, 0.36, 0.12], [-0.34, 0.22, -0.5], [0.34, 0.22, -0.5], [0, 0.6, -0.04], [0, 0.1, 0]];
  mesh(frog, fold(c, [[0, 1, 5], [0, 5, 2], [1, 3, 5], [2, 5, 4], [3, 4, 5]]), skin);
  mesh(frog, fold(c, [[0, 6, 1], [0, 2, 6], [1, 6, 3], [2, 4, 6], [3, 6, 4]]), belly);
  for (const s of [-1, 1]) {
    frog.add(spike([0.36 * s, 0.32, 0.2], [0.62 * s, 0.02, 0.5], 0.08, skin));
    frog.add(spike([0.3 * s, 0.24, -0.4], [0.74 * s, 0.34, -0.2], 0.1, skin));
    frog.add(spike([0.74 * s, 0.34, -0.2], [0.5 * s, 0.02, -0.62], 0.09, skin));
    const bump = gem(0.11, 0.11, 0.11, skin); bump.position.set(0.2 * s, 0.6, 0.3); frog.add(bump);
  }
  const face = group(frog, 0, 0.62, 0.38);
  return { parts: { frog }, eyes: eyes(face, [0, 0, 0], 0.2, 0.05), height: 1.2 };
}

// ---------------------------------------------------------------- 6 · Don Margen, the owl
function buho(g: THREE.Group, ink: string): Built {
  const feather = paper('#a07c56', { side: DS }), crown = paper('#c79f6e', { side: DS }), chest = paper('#f1e2c4', { side: DS }), red = paper(ink), disc = paper('#fff8ec');
  const owl = group(g, 0, 0, 0);
  const bodyMesh = mesh(owl, new THREE.CylinderGeometry(0.4, 0.56, 1.25, 6, 1), feather); bodyMesh.position.y = 0.74;
  mesh(owl, fold([[0, 1.2, 0.36], [-0.34, 0.5, 0.5], [0.34, 0.5, 0.5], [0, 0.2, 0.5]], [[0, 1, 3], [0, 3, 2]]), chest);
  const head = group(owl, 0, 1.38, 0);
  const cap = mesh(head, new THREE.CylinderGeometry(0.56, 0.44, 0.52, 6, 1), crown); cap.position.y = 0.16;
  for (const s of [-1, 1]) {
    head.add(spike([0.3 * s, 0.36, 0.05], [0.5 * s, 0.82, 0.02], 0.14, crown));
    const d = mesh(head, new THREE.CylinderGeometry(0.2, 0.2, 0.03, 8), disc); d.rotation.x = Math.PI / 2; d.position.set(0.2 * s, 0.2, 0.44);
    const wing = group(owl, 0.5 * s, 1.18, 0);
    mesh(wing, fold([[0, 0, 0.2], [0, 0, -0.26], [0.14 * s, -0.86, -0.06]], [[0, 1, 2]]), feather);
    owl.userData[s < 0 ? 'wl' : 'wr'] = wing;
    owl.add(spike([0.18 * s, 0.14, 0.2], [0.2 * s, 0, 0.44], 0.07, paper('#e8a23a')));
  }
  head.add(spike([0, 0.14, 0.44], [0, 0.02, 0.6], 0.06, paper('#e8a23a')));
  // The red pencil he corrects the world with.
  const pencil = group(owl, 0.62, 0.86, 0.22); pencil.rotation.z = -0.5;
  const shaft = mesh(pencil, new THREE.CylinderGeometry(0.04, 0.04, 0.7, 6), red); shaft.position.y = 0.2;
  const tip = mesh(pencil, new THREE.ConeGeometry(0.04, 0.12, 6), paper('#f1e2c4')); tip.position.y = -0.21; tip.rotation.x = Math.PI;
  const glasses = mesh(head, new THREE.TorusGeometry(0.21, 0.014, 5, 14), inkBlack()); glasses.position.set(-0.2, 0.2, 0.46);
  const g2 = glasses.clone(); g2.position.x = 0.2; head.add(g2);
  return { parts: { head, wl: owl.userData.wl, wr: owl.userData.wr, pencil }, eyes: eyes(head, [0, 0.2, 0.47], 0.2, 0.075), height: 2.2 };
}

// ---------------------------------------------------------------- 7 · Lina and her sisters
function dollShape() {
  const s = new THREE.Shape();
  s.moveTo(-0.55, 0.98); s.lineTo(-0.16, 1.08); s.lineTo(-0.1, 1.16);
  s.absarc(0, 1.34, 0.19, Math.PI * 1.32, Math.PI * -0.32, true);
  s.lineTo(0.1, 1.16); s.lineTo(0.16, 1.08); s.lineTo(0.55, 0.98); s.lineTo(0.55, 0.86); s.lineTo(0.18, 0.92);
  s.lineTo(0.42, 0.08); s.lineTo(0.14, 0.08); s.lineTo(0.14, 0); s.lineTo(0.02, 0); s.lineTo(0.02, 0.08);
  s.lineTo(-0.02, 0.08); s.lineTo(-0.02, 0); s.lineTo(-0.14, 0); s.lineTo(-0.14, 0.08); s.lineTo(-0.42, 0.08);
  s.lineTo(-0.18, 0.92); s.lineTo(-0.55, 0.86); s.closePath();
  return s;
}
function munecas(g: THREE.Group, ink: string): Built {
  // The chain runs across the being's x (the scene turns it along the street); Lina is the one in the middle.
  const geo = new THREE.ExtrudeGeometry(dollShape(), { depth: 0.035, bevelEnabled: false });
  geo.translate(0, 0, -0.0175);
  const sisters = paper('#f6d6e2', { side: DS });
  const chain = group(g, 0, 0, 0);
  const dolls: THREE.Mesh[] = [];
  for (let i = -2; i <= 2; i++) {
    const d = mesh(chain, geo, i === 0 ? paper(ink, { side: DS }) : sisters);
    d.position.set(i * 1.1, 0, 0);
    d.rotation.y = (i % 2 ? 1 : -1) * 0.34;
    dolls.push(d);
  }
  const lina = dolls[2];
  const face = group(lina, 0, 1.36, 0.03);
  const mouth = mesh(face, new THREE.TorusGeometry(0.05, 0.012, 4, 8, Math.PI), inkBlack()); mouth.rotation.z = Math.PI; mouth.position.set(0, -0.07, 0.005);
  return { parts: { lina, chain }, eyes: eyes(face, [0, 0.02, 0.005], 0.07, 0.026), height: 1.75 };
}

// ---------------------------------------------------------------- 8 · Dardo, the paper plane
function avion(g: THREE.Group, ink: string): Built {
  const top = paper('#ffffff', { side: DS, map: ruled(), keep: 0.8 }), keel = paper(ink, { side: DS });
  const plane = group(g, 0, 0, 0);
  const c: [number, number, number][] = [[0, 0, 0.95], [-0.6, 0.1, -0.7], [0.6, 0.1, -0.7], [0, -0.3, -0.7], [0, 0.04, -0.7], [-0.14, 0.05, -0.7], [0.14, 0.05, -0.7]];
  const wings = mesh(plane, fold(c, [[0, 1, 5], [0, 6, 2]]), top);
  const p = wings.geometry.attributes.position, uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) { uv[i * 2] = p.getX(i) * 0.7 + 0.5; uv[i * 2 + 1] = p.getZ(i) * 0.5 + 0.5; }
  wings.geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  mesh(plane, fold(c, [[0, 5, 3], [0, 3, 6], [5, 6, 3]]), keel);
  const face = group(plane, 0, -0.06, 0.5);
  const es = [...eyes(face, [0, 0, 0], 0.001, 0.036)];
  es[0].position.set(-0.075, 0, 0); es[1].position.set(0.075, 0, 0);
  return { parts: { plane }, eyes: es, height: 2.2 };
}

// ---------------------------------------------------------------- 9 · Titular, the dragon
function dragon(g: THREE.Group, ink: string): Built {
  const print = newsprint(9);
  const skin = paper(ink, { side: DS, map: print, keep: 0.9 }), plain = paper(ink, { side: DS }), gold = paper('#f0b429', { side: DS });
  const coil = group(g, 0, 0, 0);
  // The body coils once around where he lies; every segment is a folded diamond of newspaper.
  const segments: THREE.Mesh[] = [];
  const N = 13;
  for (let i = 0; i < N; i++) {
    const k = i / (N - 1), a = -0.5 + k * 4.6, r = 1.05 - k * 0.2, size = 0.4 - k * 0.22;
    const s = mesh(coil, new THREE.OctahedronGeometry(1, 0), skin);
    s.scale.set(size, size * 0.95, size * 1.5);
    s.position.set(Math.sin(a) * r, 0.36 + Math.sin(k * 6) * 0.08, Math.cos(a) * r * 0.9 - 0.3);
    s.rotation.y = a + Math.PI / 2;
    if (i % 2 === 0 && i > 0) { const fin = spike([0, 0.8, 0], [0, 1.7, -0.3], 0.3, gold); s.add(fin); }
    segments.push(s);
  }
  coil.add(spike([Math.sin(4.1) * 0.85, 0.3, Math.cos(4.1) * 0.76 - 0.3], [Math.sin(4.6) * 1.25, 0.5, Math.cos(4.6) * 1.1 - 0.3], 0.1, gold));
  const neck = group(coil, Math.sin(-0.5) * 1.05, 0.5, Math.cos(-0.5) * 0.95 - 0.3);
  neck.add(spike([0, 0, 0], [0.36, 0.8, 0.3], 0.3, skin, 4));
  const head = group(neck, 0.44, 0.95, 0.4);
  mesh(head, loft([{ z: -0.34, rx: 0.3, ry: 0.27 }, { z: 0.1, rx: 0.27, ry: 0.22 }, { z: 0.62, rx: 0.15, ry: 0.11, y: -0.04 }], 5), plain);
  const jaw = group(head, 0, -0.12, 0.05);
  mesh(jaw, fold([[-0.2, 0, 0], [0.2, 0, 0], [0, -0.06, 0.56], [0, -0.14, 0.1]], [[0, 2, 3], [1, 3, 2], [0, 1, 2]]), gold);
  for (const s of [-1, 1]) {
    head.add(spike([0.16 * s, 0.2, -0.2], [0.34 * s, 0.66, -0.52], 0.07, gold));
    head.add(spike([0.14 * s, -0.02, 0.56], [0.5 * s, 0.1, 0.9], 0.02, gold));
  }
  return { parts: { head, jaw, neck, coil, ...Object.fromEntries(segments.map((s, i) => [`s${i}`, s])) }, eyes: eyes(head, [0, 0.14, 0.3], 0.19, 0.05), height: 2.4 };
}

// ---------------------------------------------------------------- 10 · Candela, the lantern
function farol(g: THREE.Group, ink: string): Built {
  const points: THREE.Vector2[] = [];
  for (let i = 0; i <= 8; i++) points.push(new THREE.Vector2((i % 2 ? 0.4 : 0.31) * (1 - Math.abs(i - 4) * 0.045), i * 0.11));
  const lantern = group(g, 0, 0, 0);
  const shade = mesh(lantern, new THREE.LatheGeometry(points, 10), paper(ink, { side: DS, emissive: '#ff7a1a', emissiveIntensity: 0.55 }));
  shade.position.y = 0.2;
  const rim = paper('#7a2f1c');
  const topRim = mesh(lantern, new THREE.CylinderGeometry(0.3, 0.3, 0.07, 10), rim); topRim.position.y = 1.1;
  const lowRim = mesh(lantern, new THREE.CylinderGeometry(0.3, 0.3, 0.07, 10), rim); lowRim.position.y = 0.18;
  const handle = mesh(lantern, new THREE.TorusGeometry(0.22, 0.014, 5, 12, Math.PI), rim); handle.position.y = 1.13;
  lantern.add(spike([0, 0.16, 0], [0, -0.28, 0], 0.05, paper('#e8506a')));
  const light = new THREE.PointLight('#ffb060', 2.2, 9, 2); light.position.y = 0.64; lantern.add(light);
  const face = group(lantern, 0, 0.7, 0.38);
  return { parts: { lantern, light, shade }, eyes: eyes(face, [0, 0, 0], 0.12, 0.045), height: 1.9 };
}

// ---------------------------------------------------------------- 11 · Mar, the whale
function ballena(g: THREE.Group, ink: string): Built {
  const skin = paper(ink, { side: DS }), belly = paper('#e6ecfb', { side: DS }), wall = paper('#fff3df'), roofs = ['#d2553f', '#e8862e', '#3f8f5a', '#e06aa0'].map(c => paper(c));
  const whale = group(g, 0, 0, 0);
  mesh(whale, loft([
    { z: 3.9, rx: 0.5, ry: 0.42, y: -0.1 }, { z: 3.0, rx: 1.25, ry: 1.0 }, { z: 1.2, rx: 1.6, ry: 1.25 }, { z: -0.8, rx: 1.4, ry: 1.05 },
    { z: -2.6, rx: 0.8, ry: 0.6, y: 0.12 }, { z: -3.9, rx: 0.28, ry: 0.22, y: 0.3 },
  ], 6), skin);
  const under = mesh(whale, fold([[0, -0.44, 3.86], [-1.0, -0.95, 2.6], [1.0, -0.95, 2.6], [-1.1, -1.18, 0.6], [1.1, -1.18, 0.6], [0, -0.9, -1.6]], [[0, 1, 2], [1, 3, 2], [2, 3, 4], [3, 5, 4]]), belly);
  under.position.y = -0.06;
  const tail = group(whale, 0, 0.3, -3.8);
  mesh(tail, fold([[0, 0, 0.1], [-1.35, 0.2, -1.2], [-0.2, 0.06, -0.7], [1.35, 0.2, -1.2], [0.2, 0.06, -0.7]], [[0, 1, 2], [0, 4, 3]]), skin);
  const fins: THREE.Group[] = [];
  for (const s of [-1, 1]) {
    const fin = group(whale, 1.4 * s, -0.5, 1.5);
    mesh(fin, fold([[0, 0, 0.5], [0, 0, -0.4], [1.2 * s, -0.5, -0.5]], [[0, 1, 2]]), skin);
    fins.push(fin);
  }
  // The village she carries: houses, a tower and two trees on her back.
  const town = group(whale, 0, 1.12, 0.6);
  const lots: [number, number, number, number][] = [[-0.6, 0.9, 0.5, 0], [0.5, 1.2, 0.44, 1], [0.1, 0.1, 0.56, 2], [-0.55, -0.7, 0.42, 3], [0.6, -0.5, 0.5, 0], [0, -1.5, 0.4, 1]];
  for (const [x, z, s, r] of lots) {
    const y = -Math.abs(x) * 0.28 - Math.abs(z) * 0.07;
    const house = mesh(town, new THREE.BoxGeometry(s, s * 0.8, s), wall); house.position.set(x, y + s * 0.4, z);
    const roof = mesh(town, new THREE.ConeGeometry(s * 0.78, s * 0.6, 4, 1), roofs[r]); roof.position.set(x, y + s * 1.1, z); roof.rotation.y = Math.PI / 4;
  }
  const tower = mesh(town, new THREE.BoxGeometry(0.26, 1.1, 0.26), wall); tower.position.set(-0.05, 0.52, 0.75);
  const spire = mesh(town, new THREE.ConeGeometry(0.24, 0.5, 4, 1), roofs[0]); spire.position.set(-0.05, 1.3, 0.75); spire.rotation.y = Math.PI / 4;
  for (const [x, z] of [[0.85, 0.3], [-0.9, 0.1]]) { const tree = mesh(town, new THREE.ConeGeometry(0.2, 0.6, 5, 1), roofs[2]); tree.position.set(x, 0.1, z); }
  const spout = group(whale, 0, 1.05, 2.6);
  for (const [dx, dz] of [[-0.3, 0.1], [0.3, 0.1], [0, -0.25]]) spout.add(spike([0, 0, 0], [dx, 0.7, dz], 0.06, belly));
  const es: THREE.Mesh[] = [];
  for (const s of [-1, 1]) { const e = mesh(whale, new THREE.SphereGeometry(0.1, 10, 8), inkBlack()); e.position.set(1.02 * s, 0.1, 3.05); es.push(e); }
  return { parts: { whale, tail, fl: fins[0], fr: fins[1], spout }, eyes: es, height: 0 };
}

// ---------------------------------------------------------------- 12 · La Hoja en Blanco
function hoja(g: THREE.Group, ink: string): Built {
  const sheet = group(g, 0, 0.32, 0);
  const geo = new THREE.PlaneGeometry(1.15, 1.75, 6, 10);
  geo.translate(0, 0.875, 0);
  const page = mesh(sheet, geo, paper('#ffffff', { side: DS, map: ruled(), keep: 0.9 }));
  page.userData.rest = (geo.attributes.position.array as Float32Array).slice();
  mesh(sheet, fold([[0.575, 1.75, 0.01], [0.3, 1.75, 0.01], [0.575, 1.47, 0.01], [0.33, 1.5, 0.06]], [[1, 3, 2]]), paper(ink, { side: DS }));
  const face = group(sheet, 0, 1.22, 0.03);
  const mouth = mesh(face, new THREE.TorusGeometry(0.07, 0.012, 4, 8, Math.PI), inkBlack()); mouth.rotation.z = Math.PI; mouth.position.set(0, -0.16, 0);
  return { parts: { sheet, page, face }, eyes: eyes(face, [0, 0, 0], 0.15, 0.04), height: 2.2 };
}

const BUILDERS: Record<Kind, (g: THREE.Group, ink: string) => Built> = { grulla, barco, zorro, bola, rana, buho, munecas, avion, dragon, farol, ballena, hoja };

export function createSer(id: string, member: Member, at: Being, seed: number, shadows: boolean): Ser {
  const root = new THREE.Group(), inner = new THREE.Group();
  root.add(inner);
  root.position.set(at.x, at.y, at.z);
  root.rotation.y = at.heading;
  root.userData.person = true;
  const built = BUILDERS[member.kind](inner, member.ink);
  // The whale is as long as a bus; the dolls stand in a row across the street.
  if (member.kind === 'munecas') inner.rotation.y = 0;
  if (shadows) root.traverse(o => { if ((o as THREE.Mesh).isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return {
    id, kind: member.kind, name: member.name, root, inner, person: { root }, x: at.x, z: at.z, y: at.y, heading: at.heading, radius: at.radius + 0.35, air: at.air,
    body: member.gender, seed, eyes: built.eyes, parts: built.parts, blinkAt: 1 + (seed % 5), height: built.height,
  };
}

/** One frame of a being: breathing, blinking and its own gesture; livelier when it talks. */
export function animateSer(s: Ser, t: number, dt: number, talking: boolean, facing: number | null) {
  const p = s.parts, k = talking ? 1 : 0.35, w = t + s.seed;
  if (t > s.blinkAt) { const d = t - s.blinkAt; const shut = d < 0.12; for (const e of s.eyes) e.scale.y = shut ? 0.12 : 1; if (d > 0.14) s.blinkAt = t + 2.2 + ((s.seed * 7 + Math.floor(t)) % 4); }
  // Turn towards whoever is talking (the row of dolls and the coiled dragon turn only their heads).
  if (facing !== null && s.kind !== 'munecas' && s.kind !== 'dragon' && s.kind !== 'ballena') {
    let d = facing - s.root.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d));
    s.root.rotation.y += d * Math.min(1, dt * 3);
  }
  switch (s.kind) {
    case 'grulla':
      p.wl.rotation.z = -0.12 - Math.sin(w * (talking ? 5 : 1.3)) * 0.28 * k - 0.1; p.wr.rotation.z = -p.wl.rotation.z;
      p.head.rotation.x = Math.sin(w * 1.7) * 0.12 * k; s.inner.position.y = Math.sin(w * 1.3) * 0.02; break;
    case 'barco':
      p.boat.rotation.z = 0.07 + Math.sin(w * 1.1) * 0.05 * (talking ? 2 : 1); p.boat.rotation.x = Math.sin(w * 0.8) * 0.03; p.flag.rotation.y = Math.sin(w * 4) * 0.4; break;
    case 'zorro':
      p.head.rotation.z = Math.sin(w * 1.4) * 0.1 * (talking ? 2 : 1); p.head.rotation.x = talking ? Math.sin(w * 6) * 0.05 : 0; p.tail.rotation.y = Math.sin(w * 2.2) * 0.3; break;
    case 'bola':
      p.ball.rotation.z = Math.sin(w * 1.2) * 0.09; p.ball.scale.setScalar(1 + Math.sin(w * (talking ? 7 : 2)) * 0.025 * (talking ? 1.6 : 1));
      p.al.rotation.z = Math.sin(w * 3) * 0.4 * k; p.ar.rotation.z = -Math.sin(w * 3 + 1) * 0.4 * k; break;
    case 'rana': {
      // She can only jump forwards, so she jumps on the spot and lands where she was.
      const beat = (w * (talking ? 0.9 : 0.4)) % 1, hop = beat < 0.28 ? Math.sin((beat / 0.28) * Math.PI) : 0;
      p.frog.position.y = hop * (talking ? 0.5 : 0.3); p.frog.rotation.x = -hop * 0.25; p.frog.scale.y = 1 - (beat > 0.28 && beat < 0.36 ? 0.14 : 0); break;
    }
    case 'buho':
      p.head.rotation.y = Math.sin(w * 0.7) * 0.5 * (talking ? 0.3 : 1); p.head.rotation.z = talking ? Math.sin(w * 3) * 0.08 : 0;
      p.wl.rotation.z = -Math.abs(Math.sin(w * 1.1)) * 0.12 * k; p.wr.rotation.z = -p.wl.rotation.z; p.pencil.rotation.z = -0.5 + (talking ? Math.sin(w * 8) * 0.25 : 0); break;
    case 'munecas':
      p.lina.position.y = Math.max(0, Math.sin(w * (talking ? 3 : 1.2))) * 0.12 * (talking ? 1.5 : 1); p.lina.rotation.z = Math.sin(w * 1.6) * 0.07 * (talking ? 2 : 1);
      p.chain.children.forEach((d, i) => { if (d !== p.lina) d.rotation.y = (i % 2 ? 1 : -1) * (0.34 + Math.sin(w * 0.9 + i) * 0.05); }); break;
    case 'avion':
      p.plane.position.set(Math.sin(w * 0.9) * 0.35, Math.sin(w * 1.7) * 0.16, 0); p.plane.rotation.z = Math.cos(w * 0.9) * (talking ? 0.12 : 0.3); p.plane.rotation.x = -0.08 + Math.sin(w * 1.7) * 0.08; break;
    case 'dragon':
      for (let i = 0; i < 13; i++) { const seg = p[`s${i}`]; if (seg) seg.position.y = 0.36 + Math.sin(i * 0.7 + w * (talking ? 2.4 : 1)) * 0.07 + Math.sin((i / 12) * 6) * 0.08; }
      p.head.rotation.y = Math.sin(w * 0.8) * 0.25 + (facing !== null ? 0 : 0); p.head.rotation.x = Math.sin(w * 1.3) * 0.08; p.jaw.rotation.x = talking ? Math.abs(Math.sin(w * 7)) * 0.3 : 0.04; break;
    case 'farol':
      p.lantern.position.y = Math.sin(w * 1.4) * 0.09; p.lantern.rotation.z = Math.sin(w * 0.9) * 0.07;
      (p.light as THREE.PointLight).intensity = 2 + Math.sin(w * 9) * 0.25 + Math.sin(w * 23) * 0.15 + (talking ? 0.8 : 0);
      ((p.shade as THREE.Mesh).material as THREE.MeshLambertMaterial).emissiveIntensity = 0.5 + Math.sin(w * 9) * 0.08 + (talking ? 0.25 : 0); break;
    case 'ballena':
      p.whale.position.y = Math.sin(w * 0.5) * 0.3; p.whale.rotation.x = (talking ? 0.16 : 0.03) + Math.sin(w * 0.5 + 1) * 0.03; p.whale.rotation.z = Math.sin(w * 0.37) * 0.04;
      p.tail.rotation.x = Math.sin(w * 1.1) * 0.3; p.fl.rotation.z = Math.sin(w * 0.9) * 0.25; p.fr.rotation.z = -p.fl.rotation.z; p.spout.scale.y = 0.7 + Math.abs(Math.sin(w * 0.8)) * 0.6; break;
    case 'hoja': {
      const page = p.page as THREE.Mesh, a = page.geometry.attributes.position as THREE.BufferAttribute, rest = page.userData.rest as Float32Array;
      for (let i = 0; i < a.count; i++) { const x = rest[i * 3], y = rest[i * 3 + 1]; a.setZ(i, Math.sin(y * 2.2 + w * 1.5) * 0.06 * (y / 1.75) + x * x * 0.22 + Math.sin(w * (talking ? 4 : 1.2) + x * 3) * 0.015); }
      a.needsUpdate = true; page.geometry.computeVertexNormals();
      p.sheet.position.y = 0.32 + Math.sin(w * 1.1) * 0.06; p.face.position.z = 0.05; break;
    }
  }
}
