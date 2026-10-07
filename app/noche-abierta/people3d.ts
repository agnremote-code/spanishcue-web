// Procedural people for Noche Abierta: stylized but human adults (and the odd
// child or teenager) built from lathed limbs and shaped shells, animated in
// code. Every person gets their own proportions, face, hair, clothes and
// extras from a Look and a seed, so a street never repeats a face or a body.
//
// A person has a real neck, a face (eyes with whites and irises, brows, nose,
// ears, a mouth that smiles, frowns or opens), hair styles as distinct shells,
// clothes as distinct shapes (a dress or skirt that flares, a coat to the
// knees, a hood, an apron, scrubs, a uniform with a cap) and shoes. Moods
// change the face and the posture; poses set what the body is doing, with
// small props in the hands. animatePerson eases every joint toward a target
// each frame, so poses and moods blend instead of snapping.
//
// Original geometry only, no external models. Geometries and materials are
// shared through caches; a person is about 25 to 35 meshes.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export type Age = 'child' | 'teen' | 'young' | 'adult' | 'old' | 'elderly';
export type BodyType = 'f' | 'm';
export type Build = 'slim' | 'average' | 'athletic' | 'heavy';
export type HairStyle = 'short' | 'long' | 'bob' | 'buzz' | 'curly' | 'bun' | 'bald' | 'ponytail' | 'afro' | 'braids' | 'cap';
export type Top = 'coat' | 'jacket' | 'dress' | 'shirt' | 'sweater' | 'uniform' | 'apron' | 'suit' | 'scrubs' | 'hoodie' | 'tshirt';
export type Bottom = 'skirt' | 'jeans' | 'pants' | 'shorts';
export type Mood = 'neutral' | 'smile' | 'love' | 'sad' | 'scared' | 'angry' | 'surprised' | 'worried' | 'pain' | 'tipsy' | 'sleepy';
export type Pose =
  | 'stand' | 'sit' | 'ground' | 'lie' | 'phone' | 'cry' | 'lean' | 'dance' | 'guitar' | 'sleep' | 'crouch' | 'arms'
  | 'wave' | 'balcony' | 'walk' | 'run' | 'window' | 'sweep' | 'carry' | 'smoke-free' | 'fish' | 'cook' | 'swing'
  | 'read' | 'bike' | 'hug';

export const PERSON_MOODS: readonly Mood[] = ['neutral', 'smile', 'love', 'sad', 'scared', 'angry', 'surprised', 'worried', 'pain', 'tipsy', 'sleepy'];
export const PERSON_POSES: readonly Pose[] = [
  'stand', 'sit', 'ground', 'lie', 'phone', 'cry', 'lean', 'dance', 'guitar', 'sleep', 'crouch', 'arms', 'wave', 'balcony',
  'walk', 'run', 'window', 'sweep', 'carry', 'smoke-free', 'fish', 'cook', 'swing', 'read', 'bike', 'hug',
];

// Every field but skin is optional. The first four are the original colour
// fields; they still work, and fill in when the newer ones are absent.
export type Look = {
  skin: string;
  shirt?: string; pants?: string; hair?: string; shoes?: string;
  age?: Age | string; body?: BodyType | string; build?: Build | string;
  // Metres; defaults to 1.72 (m) or 1.64 (f).
  height?: number;
  hairStyle?: HairStyle | string; hairColor?: string;
  top?: Top | string; topColor?: string;
  bottom?: Bottom | string; bottomColor?: string;
  extras?: string[];
  // Small variation of face and proportions.
  seed?: number;
};

type Parts = {
  hips: THREE.Group; torso: THREE.Group; head: THREE.Group;
  armL: THREE.Group; armR: THREE.Group; foreL: THREE.Group; foreR: THREE.Group;
  legL: THREE.Group; legR: THREE.Group; shinL: THREE.Group; shinR: THREE.Group;
};

export type Person = {
  root: THREE.Group;
  parts: Parts;
  phase: number;
  seated: boolean;
  // Where the head turns to, relative to the body (null: looks ahead).
  look: number | null;
  // 0 ignores the learner, 1 always looks; in between, glances now and then.
  attention: number;
  pose: Pose;
  mood: Mood;
  rig: Rig;
};

// ------------------------------------------------------------------ caches

const materialCache = new Map<string, THREE.MeshStandardMaterial>();
function mat(color: string, roughness = 0.8, metalness = 0) {
  const key = `${color}-${roughness}-${metalness}`;
  let value = materialCache.get(key);
  if (!value) {
    value = new THREE.MeshStandardMaterial({ color, roughness, metalness });
    materialCache.set(key, value);
  }
  return value;
}
// Cloth that is seen from inside too (skirts, coat tails, hoods).
function cloth(color: string) {
  const key = `${color}-cloth`;
  let value = materialCache.get(key);
  if (!value) {
    value = new THREE.MeshStandardMaterial({ color, roughness: 0.85, side: THREE.DoubleSide });
    materialCache.set(key, value);
  }
  return value;
}
function glow(color: string, intensity: number) {
  const key = `${color}-glow-${intensity}`;
  let value = materialCache.get(key);
  if (!value) {
    value = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, roughness: 0.4 });
    materialCache.set(key, value);
  }
  return value;
}
let blushMaterial: THREE.MeshStandardMaterial | null = null;
function blushMat() {
  blushMaterial ??= new THREE.MeshStandardMaterial({ color: '#e46a80', emissive: '#ff5a7a', emissiveIntensity: 0.35, transparent: true, opacity: 0.55, depthWrite: false, roughness: 0.7 });
  return blushMaterial;
}

const geometryCache = new Map<string, THREE.BufferGeometry>();
function cached(key: string, make: () => THREE.BufferGeometry) {
  let value = geometryCache.get(key);
  if (!value) {
    value = make();
    geometryCache.set(key, value);
  }
  return value;
}

// Merge pieces into one geometry (all indexed or all not).
function merge(list: THREE.BufferGeometry[]) {
  const plain = list.map(g => {
    const flat = g.index ? g.toNonIndexed() : g;
    flat.deleteAttribute('uv');
    return flat;
  });
  const merged = mergeGeometries(plain, false)!;
  merged.computeBoundingSphere();
  return merged;
}
function moved(g: THREE.BufferGeometry, x: number, y: number, z: number, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz));
  return g.applyMatrix4(m);
}

// A revolved profile, [radius, height] from bottom to top.
function lathe(profile: [number, number][], segments = 10) {
  return new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), segments);
}
// A tapered limb hanging from its pivot: radii at 0, 30%, 70% and 100% of
// the length, with rounded ends.
function limbGeometry(length: number, r: [number, number, number, number]) {
  const [a, b, c, d] = r;
  return lathe([
    [0, -length - d * 0.85], [d * 0.7, -length - d * 0.6], [d, -length], [c, -length * 0.7],
    [b, -length * 0.3], [a, -length * 0.06], [a * 0.75, a * 0.45], [0, a * 0.75],
  ], 9);
}

// ------------------------------------------------------------------ random

function rng(seed: number) {
  let a = seed >>> 0 || 0x9e3779b9;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hashText(text: string) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return h >>> 0;
}
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
function shade(color: string, l: number, s = 0) {
  return `#${new THREE.Color(color).offsetHSL(0, s, l).getHexString()}`;
}
function lightness(color: string) {
  const hsl = { h: 0, s: 0, l: 0 };
  new THREE.Color(color).getHSL(hsl);
  return hsl.l;
}

// ------------------------------------------------------------------ head

// The head is a unit sphere scaled to these radii (metres).
const HEAD_R = { x: 0.092, y: 0.118, z: 0.106 };
// Head centre above the head pivot (top of the neck).
const HEAD_Y = 0.112;

// A skull that narrows into jaw and chin, flatter at the back of the neck.
function shapeHead(v: THREE.Vector3) {
  if (v.y < 0) {
    const low = -v.y;
    v.x *= 1 - 0.3 * low ** 1.5;
    if (v.z < 0) v.z *= 1 - 0.32 * low;
    else v.z *= 1 - 0.05 * low;
  } else if (v.z > 0) {
    v.z *= 1 - 0.08 * v.y;
  }
  if (v.z < 0 && v.y > -0.2) v.z *= 1.05;
  return v;
}

function headGeometry() {
  return cached('head', () => {
    const skull = new THREE.SphereGeometry(1, 22, 16);
    const p = skull.attributes.position as THREE.BufferAttribute;
    const v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) {
      shapeHead(v.fromBufferAttribute(p, i));
      p.setXYZ(i, v.x, v.y, v.z);
    }
    skull.computeVertexNormals();
    const ears = [-1, 1].map(side => moved(new THREE.SphereGeometry(0.24, 8, 6), side * 0.97, -0.02, -0.06, 0, side * 0.3, 0, 0.42, 1, 0.75));
    return merge([skull, ...ears]);
  });
}

// A shell around the head: `cover` decides, from the direction on the unit
// sphere, how far out the shell sits (0 hides it inside the head). Used for
// hair styles, beards and fringes.
function shell(key: string, radius: number, cover: (x: number, y: number, z: number) => number, after?: (v: THREE.Vector3, covered: number) => void, detail = 22) {
  return cached(key, () => {
    const g = new THREE.SphereGeometry(1, detail, Math.round(detail * 0.75));
    const p = g.attributes.position as THREE.BufferAttribute;
    const v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      const c = clamp(cover(v.x, v.y, v.z), 0, 1);
      v.multiplyScalar(lerp(0.86, radius, c));
      shapeHead(v);
      after?.(v, c);
      p.setXYZ(i, v.x, v.y, v.z);
    }
    g.computeVertexNormals();
    return g;
  });
}

// Hairline height for a direction: front, side and back heights, smooth in z.
function hairline(z: number, front: number, side: number, back: number) {
  return z >= 0 ? lerp(side, front, z * z) : lerp(side, back, z * z);
}
const above = (y: number, line: number, soft = 0.14) => clamp((y - line) / soft, 0, 1);

// Below the ears, long hair falls as a round curtain instead of following the jaw.
function drape(length: number, flare: number) {
  return (v: THREE.Vector3, c: number) => {
    if (c <= 0 || v.y > 0.05 || v.z > 0.55) return;
    const depth = clamp(-v.y, 0, 1);
    const ring = Math.hypot(v.x, v.z) || 1e-3;
    const want = lerp(ring, 1.02 + flare * depth, depth ** 0.7);
    v.x *= want / ring;
    v.z = (v.z * want) / ring - 0.08 * depth;
    v.y = 0.05 + (v.y - 0.05) * (1 + length);
  };
}

function hairGeometry(style: string, bangs: boolean) {
  const front = bangs ? 0.18 : 0.5;
  switch (style) {
    case 'buzz': return shell('hair-buzz', 1.03, (x, y, z) => above(y, hairline(z, 0.55, 0.12, -0.42)));
    case 'long': return shell(`hair-long-${bangs}`, 1.07, (x, y, z) => above(y, hairline(z, front, -0.2, -0.45)), drape(1.9, 0.1));
    case 'bob': return shell(`hair-bob-${bangs}`, 1.09, (x, y, z) => above(y, hairline(z, front, -0.12, -0.5)), drape(0.35, 0.18));
    case 'curly': return shell('hair-curly', 1.13, (x, y, z) => above(y, hairline(z, 0.45, -0.02, -0.5)), (v, c) => {
      if (c > 0) v.multiplyScalar(1 + 0.07 * c * Math.sin(v.x * 13) * Math.sin(v.y * 11 + 1) * Math.sin(v.z * 12 + 2));
    }, 26);
    case 'afro': return shell('hair-afro', 1.46, (x, y, z) => above(y, hairline(z, 0.48, 0.02, -0.55), 0.22), (v, c) => {
      if (c > 0) { v.y += 0.12 * c; v.z -= 0.06 * c; v.multiplyScalar(1 + 0.03 * Math.sin(v.x * 17) * Math.sin(v.y * 15)); }
    }, 24);
    case 'bun': case 'ponytail': case 'braids': {
      const cap = shell('hair-tied', 1.05, (x, y, z) => above(y, hairline(z, 0.52, 0.04, -0.45)));
      return cached(`hair-${style}`, () => {
        const extra = style === 'bun'
          ? [moved(new THREE.SphereGeometry(0.36, 12, 9), 0, 0.72, -0.62)]
          : style === 'ponytail'
            ? [moved(new THREE.CapsuleGeometry(0.15, 0.9, 4, 8), 0, -0.35, -1.12, 0.25), moved(new THREE.SphereGeometry(0.2, 8, 6), 0, 0.25, -1.0)]
            : [-1, 1].map(s => moved(new THREE.CapsuleGeometry(0.11, 1.5, 4, 8), s * 0.58, -1.0, -0.5, 0.15, 0, s * 0.08));
        return merge([cap.clone(), ...extra]);
      });
    }
    case 'bald': return shell('hair-fringe', 1.03, (x, y, z) => (z < 0.35 ? above(y, -0.28, 0.1) * clamp((0.22 - y) / 0.1, 0, 1) : 0));
    case 'cap': return shell('hair-under-cap', 1.04, (x, y, z) => above(y, hairline(z, 0.6, 0.0, -0.45)));
    default: return shell(`hair-short-${bangs}`, 1.07, (x, y, z) => above(y, hairline(z, bangs ? 0.3 : 0.55, 0.06, -0.52)));
  }
}

function beardGeometry() {
  return shell('beard', 1.07, (x, y, z) => {
    if (z < -0.3) return 0;
    const mouth = Math.abs(x) < 0.36 && y > -0.58 && y < -0.2 && z > 0.5;
    return mouth ? 0 : clamp((-0.1 - y) / 0.12, 0, 1) * clamp((z + 0.3) / 0.2, 0, 1);
  }, (v, c) => { if (c > 0 && v.y < -0.6) v.y -= 0.12 * c; });
}

// The lips: a short tube along a curve whose middle dips (smile) or rises
// (frown). Eleven steps from frown to smile, picked each frame.
const LIP_STEPS = 11;
function lipGeometry(step: number) {
  return cached(`lip-${step}`, () => {
    const bend = (step / (LIP_STEPS - 1)) * 2 - 1;
    const w = 0.022;
    const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(-w, 0, -0.004), new THREE.Vector3(0, -bend * 0.022, 0.004), new THREE.Vector3(w, 0, -0.004));
    return new THREE.TubeGeometry(curve, 8, 0.0034, 5, false);
  });
}

// ------------------------------------------------------------------ props

function phoneProp() {
  const group = new THREE.Group();
  group.add(new THREE.Mesh(cached('phone', () => new THREE.BoxGeometry(0.072, 0.15, 0.01)), mat('#16171b', 0.4)));
  const screen = new THREE.Mesh(cached('phone-screen', () => new THREE.PlaneGeometry(0.062, 0.13)), glow('#a9d4ff', 1.6));
  screen.position.z = 0.0055;
  group.add(screen);
  return group;
}

function guitarProp() {
  const group = new THREE.Group();
  const wood = cached('guitar', () => merge([
    moved(new THREE.CylinderGeometry(0.17, 0.17, 0.09, 18), 0, 0, 0, Math.PI / 2),
    moved(new THREE.CylinderGeometry(0.13, 0.13, 0.09, 16), 0.2, 0, 0, Math.PI / 2),
    moved(new THREE.BoxGeometry(0.5, 0.05, 0.03), 0.55, 0, 0.02),
    moved(new THREE.BoxGeometry(0.12, 0.07, 0.025), 0.84, 0, 0.02),
  ]));
  group.add(new THREE.Mesh(wood, mat('#a8692f', 0.5)));
  const hole = new THREE.Mesh(cached('guitar-hole', () => new THREE.CircleGeometry(0.045, 14)), mat('#1b120b', 0.9));
  hole.position.set(0.1, 0, 0.047);
  group.add(hole);
  return group;
}

function prop(kind: string): THREE.Object3D {
  switch (kind) {
    case 'phone': return phoneProp();
    case 'guitar': return guitarProp();
    case 'broom': return new THREE.Mesh(cached('broom', () => merge([
      moved(new THREE.CylinderGeometry(0.013, 0.013, 1.25, 6), 0, -0.45, 0),
      moved(new THREE.BoxGeometry(0.3, 0.12, 0.06), 0, -1.1, 0),
    ])), mat('#b48a4e', 0.9));
    case 'box': return new THREE.Mesh(cached('box', () => new THREE.BoxGeometry(0.4, 0.28, 0.3)), mat('#b88a55', 0.9));
    case 'rod': return new THREE.Mesh(cached('rod', () => merge([
      moved(new THREE.CylinderGeometry(0.006, 0.014, 2.3, 5), 0, 1.0, 0),
      moved(new THREE.CylinderGeometry(0.03, 0.03, 0.04, 8), 0.035, 0.05, 0, 0, 0, Math.PI / 2),
    ])), mat('#2a2a2e', 0.5));
    case 'book': return new THREE.Mesh(cached('book', () => merge([
      moved(new THREE.BoxGeometry(0.14, 0.2, 0.012), -0.068, 0, 0, 0, 0.22, 0),
      moved(new THREE.BoxGeometry(0.14, 0.2, 0.012), 0.068, 0, 0, 0, -0.22, 0),
    ])), mat('#efe6cf', 0.9));
    case 'spatula': return new THREE.Mesh(cached('spatula', () => merge([
      moved(new THREE.CylinderGeometry(0.01, 0.01, 0.25, 6), 0, -0.1, 0),
      moved(new THREE.BoxGeometry(0.07, 0.09, 0.006), 0, -0.25, 0),
    ])), mat('#5a5a60', 0.4, 0.5));
    case 'suitcase': return new THREE.Mesh(cached('suitcase', () => merge([
      moved(new THREE.BoxGeometry(0.14, 0.44, 0.34), 0, -0.27, 0),
      moved(new THREE.BoxGeometry(0.02, 0.05, 0.1), 0, -0.03, 0),
    ])), mat('#2c3a4c', 0.5));
    case 'umbrella': return new THREE.Mesh(cached('umbrella', () => merge([
      moved(new THREE.CylinderGeometry(0.008, 0.008, 0.82, 6), 0, -0.4, 0),
      moved(new THREE.ConeGeometry(0.045, 0.5, 8), 0, -0.48, 0, Math.PI),
      moved(new THREE.TorusGeometry(0.03, 0.007, 4, 8, Math.PI), 0.03, 0.02, 0),
    ])), mat('#1d2230', 0.6));
    case 'map': return new THREE.Mesh(cached('map', () => new THREE.BoxGeometry(0.16, 0.22, 0.004)), mat('#e8dfc4', 0.9));
    case 'flowers': {
      const group = new THREE.Group();
      group.add(new THREE.Mesh(cached('bouquet-wrap', () => moved(new THREE.ConeGeometry(0.07, 0.24, 8, 1, true), 0, 0.02, 0, Math.PI)), cloth('#f1e9dc')));
      group.add(new THREE.Mesh(cached('bouquet-heads', () => merge([0, 1, 2, 3, 4, 5].map(i => moved(new THREE.IcosahedronGeometry(0.035, 0), Math.cos(i * 1.2) * 0.045 * (i % 3 ? 1 : 0.3), 0.15 + (i % 2) * 0.02, Math.sin(i * 1.2) * 0.045 * (i % 3 ? 1 : 0.3))))), mat('#d23a5a', 0.6)));
      return group;
    }
    default: return new THREE.Group();
  }
}

// ------------------------------------------------------------------ body

type Dims = {
  shoulder: number; waist: number; chest: number; hip: number; depth: number; limb: number; neck: number;
};
function dimsFor(body: BodyType, build: Build, r: () => number): Dims {
  const f = body === 'f';
  const d: Dims = f
    ? { shoulder: 0.162, waist: 0.112, chest: 0.142, hip: 0.172, depth: 0.66, limb: 0.9, neck: 0.036 }
    : { shoulder: 0.19, waist: 0.135, chest: 0.165, hip: 0.152, depth: 0.62, limb: 1, neck: 0.045 };
  const k = build === 'slim' ? { s: 0.92, w: 0.86, c: 0.9, h: 0.92, l: 0.86 }
    : build === 'athletic' ? { s: 1.1, w: 0.98, c: 1.1, h: 1, l: 1.08 }
      : build === 'heavy' ? { s: 1.08, w: 1.45, c: 1.2, h: 1.22, l: 1.22 }
        : { s: 1, w: 1, c: 1, h: 1, l: 1 };
  const jitter = () => 0.96 + r() * 0.08;
  d.shoulder *= k.s * jitter(); d.waist *= k.w * jitter(); d.chest *= k.c * jitter(); d.hip *= k.h * jitter(); d.limb *= k.l;
  if (build === 'heavy') d.depth *= 1.15;
  return d;
}

function torsoGeometry(body: BodyType, build: Build, d: Dims) {
  const key = `torso-${body}-${build}-${d.shoulder.toFixed(3)}-${d.waist.toFixed(3)}-${d.chest.toFixed(3)}`;
  return cached(key, () => {
    const belly = build === 'heavy' ? d.waist * 1.08 : d.waist * 1.02;
    const hem = Math.max(d.hip, d.waist) * 1.0;
    const g = lathe([
      [0, -0.12], [hem * 0.97, -0.115], [hem, -0.07], [lerp(hem, d.waist, 0.7), -0.01], [d.waist, 0.05], [belly, 0.12], [lerp(belly, d.chest, 0.6), 0.2],
      [d.chest, 0.29], [d.chest * 1.01, 0.35], [d.shoulder * 0.93, 0.405], [d.shoulder * 0.62, 0.445], [d.neck * 1.25, 0.468], [0, 0.474],
    ], 14);
    g.scale(1, 1, d.depth * (build === 'heavy' ? 1.08 : 1));
    const parts: THREE.BufferGeometry[] = [g];
    // A soft bust: one wide shape, not two balls.
    if (body === 'f') for (const s of [-1, 1]) parts.push(moved(new THREE.SphereGeometry(0.058, 12, 9), s * d.chest * 0.32, 0.27, d.chest * d.depth * 0.5, 0, 0, 0, 1, 0.82, 0.62));
    return merge(parts);
  });
}

function pelvisGeometry(d: Dims) {
  return cached(`pelvis-${d.hip.toFixed(3)}-${d.waist.toFixed(3)}`, () => {
    const g = lathe([[0, -0.13], [d.hip * 0.5, -0.125], [d.hip * 0.86, -0.08], [d.hip * 0.94, -0.02], [lerp(d.hip, d.waist, 0.6), 0.05], [d.waist * 0.98, 0.08], [0, 0.09]], 12);
    g.scale(1, 1, 0.74);
    return g;
  });
}

// Skirt, dress hem or coat tail hanging from the waist (hips space).
function skirtGeometry(top: number, length: number, flare: number) {
  return cached(`skirt-${top.toFixed(3)}-${length}-${flare}`, () => {
    const g = lathe([[top * flare, -length], [top * lerp(1, flare, 0.7), -length * 0.6], [top * 1.04, -length * 0.15], [top, 0.06]], 16);
    g.scale(1, 1, 0.82);
    return g;
  });
}

// Normalised look: every field resolved.
type Full = {
  skin: string; age: Age; body: BodyType; build: Build; height: number; hairStyle: HairStyle; hairColor: string;
  top: Top; topColor: string; bottom: Bottom; bottomColor: string; shoes: string; extras: Set<string>; seed: number;
};

const HAIR_STYLES: HairStyle[] = ['short', 'long', 'bob', 'buzz', 'curly', 'bun', 'bald', 'ponytail', 'afro', 'braids', 'cap'];
const TOPS: Top[] = ['coat', 'jacket', 'dress', 'shirt', 'sweater', 'uniform', 'apron', 'suit', 'scrubs', 'hoodie', 'tshirt'];
const BOTTOMS: Bottom[] = ['skirt', 'jeans', 'pants', 'shorts'];
let unnamed = 0;

function normalise(look: Look): Full {
  const rawAge = String(look.age ?? 'adult');
  const age: Age = rawAge === 'elderly' ? 'old' : (['child', 'teen', 'young', 'adult', 'old'] as Age[]).includes(rawAge as Age) ? rawAge as Age : 'adult';
  const seed = look.seed ?? (hashText(`${look.skin}${look.shirt}${look.hair}${look.pants}${look.topColor}`) ^ Math.imul(++unnamed, 2654435761)) >>> 0;
  const r = rng(seed ^ 0x51ed);
  const body: BodyType = look.body === 'f' || look.body === 'm' ? look.body : r() < 0.5 ? 'f' : 'm';
  const build: Build = (['slim', 'average', 'athletic', 'heavy'] as string[]).includes(String(look.build)) ? look.build as Build : 'average';
  const base = body === 'f' ? 1.64 : 1.72;
  const fallbackHeight = age === 'child' ? 1.3 : age === 'teen' ? base - 0.06 : base + (r() - 0.5) * 0.06;
  const height = look.height && look.height >= 0.9 && look.height <= 2.2 ? look.height : fallbackHeight;
  const hairStyle: HairStyle = HAIR_STYLES.includes(look.hairStyle as HairStyle) ? look.hairStyle as HairStyle
    : body === 'f' ? (r() < 0.6 ? 'long' : 'bob') : 'short';
  const top: Top = TOPS.includes(look.top as Top) ? look.top as Top : 'shirt';
  const bottom: Bottom = BOTTOMS.includes(look.bottom as Bottom) ? look.bottom as Bottom : top === 'dress' ? 'skirt' : 'pants';
  return {
    skin: look.skin, age, body, build, height, hairStyle,
    hairColor: look.hairColor ?? look.hair ?? '#2a1d14',
    top, topColor: look.topColor ?? look.shirt ?? '#5a6270',
    bottom, bottomColor: look.bottomColor ?? look.pants ?? '#2d3440',
    shoes: look.shoes ?? (r() < 0.7 ? '#1c1c1e' : r() < 0.5 ? '#e8e4dc' : '#5a3a26'),
    extras: new Set(look.extras ?? []), seed,
  };
}

type Rig = {
  body: THREE.Group;
  scale: number;
  full: Full;
  handL: THREE.Group; handR: THREE.Group;
  eyes: THREE.Group[]; irises: THREE.Mesh[]; brows: THREE.Mesh[]; browY: number;
  lip: THREE.Mesh; lipStep: number; mouth: THREE.Mesh; blush: THREE.Mesh;
  torsoLen: { thigh: number; shin: number };
  props: Map<string, THREE.Object3D>;
  handheld: THREE.Object3D | null;
  now: Frame; goal: Frame; ready: boolean;
  blend: number; clock: number; blinkIn: number; blinking: number;
  glanceIn: number; glancing: number; lookNow: number; torsoLook: number;
  old: boolean; variant: number; quirk: number;
  nodClock: number; yawnIn: number;
};

// Every animated value. Index 0 is the right side (-x), 1 the left (+x).
// Arms: aX flexes forward (negative) or back, aZ raises sideways, aY twists
// the forearm inward, e bends the elbow (negative), w swings the forearm in
// the frontal plane. Legs: lX swings the thigh (negative is forward), lZ
// spreads, k bends the knee (positive).
const KEYS = [
  'bodyY', 'bodyRX', 'bodyZ', 'seat', 'hipZ', 'hipYaw', 'hipRoll',
  'torX', 'torY', 'torZ', 'headX', 'headY', 'headZ',
  'aX0', 'aZ0', 'aY0', 'e0', 'w0', 'aX1', 'aZ1', 'aY1', 'e1', 'w1',
  'lX0', 'lZ0', 'k0', 'lX1', 'lZ1', 'k1',
  'eye', 'brow', 'browIn', 'smile', 'open', 'blush', 'gazeY',
] as const;
type Key = typeof KEYS[number];
type Frame = Record<Key, number>;
const blankFrame = (): Frame => Object.fromEntries(KEYS.map(k => [k, 0])) as Frame;

// Proportions at the reference height of 1.72 m; the body group scales them.
const REF = 1.72;
const THIGH = 0.43, SHIN = 0.4, ANKLE = 0.07, HIP_DROP = 0.05;
const UPPER_ARM = 0.29, FOREARM = 0.25;
const SHOULDER_Y = 0.388, NECK_Y = 0.455, HEAD_PIVOT = 0.5;

function mesh(geometry: THREE.BufferGeometry, material: THREE.Material, parent: THREE.Object3D, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}

// The root's origin is between the feet; the figure faces +z.
export function createPerson(look: Look, shadows = true): Person {
  const L = normalise(look);
  const r = rng(L.seed);
  const old = L.age === 'old';
  const skin = mat(L.skin, 0.62);
  const lipColor = mat(shade(L.skin, -0.12, 0.08), 0.5);
  const hairMat = mat(L.hairColor, 0.88);
  const browMat = mat(lightness(L.hairColor) > 0.55 ? shade(L.hairColor, -0.15) : shade(L.hairColor, -0.05), 0.9);
  const d = dimsFor(L.body, L.build, r);

  // What each piece of clothing is made of.
  const underShirt = L.top === 'apron' ? (r() < 0.5 ? '#ece6da' : '#1d1d20') : L.topColor;
  const topMat = mat(underShirt, 0.85);
  const coatLike = L.top === 'coat' || L.top === 'jacket' || L.top === 'suit';
  const longSleeves = !['tshirt', 'scrubs', 'dress'].includes(L.top);
  const legsBare = L.top === 'dress' || L.bottom === 'skirt';
  const tights = legsBare && r() < (old ? 0.7 : 0.35);
  const legSkin = tights ? mat('#1c191d', 0.6) : skin;
  const pantsMat = mat(L.bottomColor, 0.85);
  const shoeMat = mat(L.shoes, 0.45);

  const root = new THREE.Group();
  const scale = L.height / REF;
  const bodyGroup = new THREE.Group();
  bodyGroup.scale.setScalar(scale);
  root.add(bodyGroup);

  const hips = new THREE.Group();
  hips.rotation.order = 'YXZ';
  hips.position.y = THIGH + SHIN + ANKLE + HIP_DROP;
  bodyGroup.add(hips);
  mesh(pelvisGeometry(d), legsBare && L.top !== 'dress' ? pantsMat : L.top === 'dress' ? mat(L.topColor) : pantsMat, hips);

  const torso = new THREE.Group();
  torso.rotation.order = 'YXZ';
  torso.position.y = 0.05;
  hips.add(torso);
  const chest = mesh(torsoGeometry(L.body, L.build, d), L.top === 'dress' ? mat(L.topColor) : topMat, torso);
  if (coatLike) chest.scale.set(1.04, 1, 1.06);
  const front = d.chest * d.depth * (coatLike ? 1.06 : 1);

  // Neck from the shoulders to the head pivot.
  mesh(cached(`neck-${d.neck.toFixed(3)}`, () => new THREE.CylinderGeometry(d.neck, d.neck * 1.12, 0.1, 9)), skin, torso, 0, NECK_Y + 0.02, -0.005);

  // Clothing details on the torso.
  if (L.top === 'suit' || L.top === 'jacket') {
    const inner = L.top === 'suit' ? '#efece6' : r() < 0.5 ? '#1d1d22' : '#d8d2c6';
    mesh(cached('shirt-front', () => moved(new THREE.CylinderGeometry(0.036, 0.008, 0.17, 3), 0, 0, 0, 0, Math.PI, 0, 1, 1, 0.12)), mat(inner, 0.8), torso, 0, 0.355, front - 0.004);
    if (L.top === 'suit') mesh(cached('tie', () => new THREE.BoxGeometry(0.024, 0.2, 0.008)), mat(r() < 0.5 ? '#5a1824' : '#1a2238', 0.6), torso, 0, 0.32, front + 0.004);
  }
  if (L.top === 'apron') mesh(cached('apron', () => new THREE.BoxGeometry(0.27, 0.66, 0.012)), cloth(L.topColor), torso, 0, 0.06, front + 0.01).rotation.x = -0.04;
  if (L.top === 'hoodie') mesh(cached('hood', () => moved(new THREE.SphereGeometry(0.1, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.6), 0, 0, 0, -0.9, 0, 0, 1.25, 0.8, 0.9)), cloth(L.topColor), torso, 0, 0.44, -front * 0.75);
  if (L.top === 'uniform') mesh(cached('belt', () => moved(new THREE.TorusGeometry(1, 0.06, 4, 16), 0, 0, 0, Math.PI / 2, 0, 0, 1, 1, 0.75)), mat('#1a1a1c', 0.5), torso, 0, -0.06, 0).scale.set(d.waist * 1.04, d.waist * 1.04, 1);

  // Head: skull, features and hair.
  const head = new THREE.Group();
  head.rotation.order = 'YXZ';
  head.position.y = HEAD_PIVOT;
  torso.add(head);
  const headScale = L.age === 'child' ? 1.18 : L.age === 'teen' ? 1.05 : 1;
  head.scale.setScalar(headScale);
  const wide = 0.95 + r() * 0.1, tall = 0.97 + r() * 0.07;
  const skull = mesh(headGeometry(), skin, head, 0, HEAD_Y, 0);
  skull.scale.set(HEAD_R.x * wide, HEAD_R.y * tall, HEAD_R.z);

  const eyeGap = 0.031 + r() * 0.007;
  const eyeY = HEAD_Y + 0.012 + (r() - 0.5) * 0.006;
  const eyeSize = 0.92 + r() * 0.16;
  const irisColor = ['#3b2416', '#2a1a10', '#4a3020', '#5b6a36', '#3f6a8a', '#1b1410', '#3b2416'][Math.floor(r() * 7)];
  const white = mat('#f3efe8', 0.35);
  const irisMat = mat(irisColor, 0.25);
  const eyes: THREE.Group[] = [];
  const irises: THREE.Mesh[] = [];
  const brows: THREE.Mesh[] = [];
  const browY = HEAD_Y + 0.04;
  const browThick = 0.8 + r() * 0.5 + (L.body === 'm' ? 0.25 : 0);
  for (const side of [-1, 1]) {
    const eye = new THREE.Group();
    eye.position.set(side * eyeGap * wide, eyeY, 0.084);
    eye.scale.setScalar(eyeSize);
    head.add(eye);
    const w = mesh(cached('eye-white', () => new THREE.SphereGeometry(0.0175, 12, 8)), white, eye);
    w.scale.set(1.3, 0.85, 0.7);
    const iris = mesh(cached('iris', () => new THREE.SphereGeometry(0.0112, 10, 8)), irisMat, eye, 0, 0, 0.0095);
    iris.scale.set(1, 1, 0.55);
    eyes.push(eye);
    irises.push(iris);
    const brow = mesh(cached('brow', () => new THREE.BoxGeometry(0.034, 0.0075, 0.01)), browMat, head, side * eyeGap * wide, browY, 0.092);
    brow.scale.set(1, browThick, 1);
    brow.rotation.y = side * -0.25;
    brows.push(brow);
  }
  const nose = mesh(cached('nose', () => merge([
    moved(new THREE.SphereGeometry(0.014, 8, 8), 0, 0.012, 0, 0, 0, 0, 0.75, 1.9, 0.9),
    moved(new THREE.SphereGeometry(0.0145, 8, 6), 0, -0.012, 0.006),
  ])), skin, head, 0, HEAD_Y - 0.012, 0.098);
  nose.scale.set(0.85 + r() * 0.4, 0.85 + r() * 0.35, 0.9 + r() * 0.3 + (old ? 0.1 : 0));
  const lip = mesh(lipGeometry(6), lipColor, head, 0, HEAD_Y - 0.05, 0.094);
  lip.scale.x = 0.85 + r() * 0.3;
  const mouth = mesh(cached('mouth', () => new THREE.SphereGeometry(0.013, 10, 8)), mat('#3a1416', 0.9), head, 0, HEAD_Y - 0.054, 0.09);
  mouth.scale.set(1.2, 0.001, 0.45);
  mouth.visible = false;
  const blush = mesh(cached('blush', () => merge([-1, 1].map(s => moved(new THREE.SphereGeometry(0.018, 8, 6), s * 0.052, 0, 0, 0, s * 0.5, 0, 1.1, 0.75, 0.35)))), blushMat(), head, 0, HEAD_Y - 0.016, 0.08);
  blush.visible = false;

  const ex = L.extras;
  const bangs = L.body === 'f' && r() < 0.4;
  if (L.hairStyle !== 'bald' || old || r() < 0.5) {
    const hair = mesh(hairGeometry(L.hairStyle, bangs), hairMat, head, 0, HEAD_Y, 0);
    hair.scale.set(HEAD_R.x * wide, HEAD_R.y * tall, HEAD_R.z);
  }
  const facialHair = mat(L.hairColor, 0.95);
  if (ex.has('beard')) mesh(beardGeometry(), facialHair, head, 0, HEAD_Y, 0).scale.set(HEAD_R.x * wide, HEAD_R.y * tall, HEAD_R.z);
  if (ex.has('mustache') || (ex.has('beard') && r() < 0.6)) {
    const m = mesh(cached('mustache', () => moved(new THREE.CapsuleGeometry(0.0075, 0.03, 3, 6), 0, 0, 0, 0, 0, Math.PI / 2)), facialHair, head, 0, HEAD_Y - 0.035, 0.098);
    m.rotation.x = -0.2;
  }
  if (ex.has('glasses')) mesh(cached('glasses', () => merge([
    ...[-1, 1].map(s => moved(new THREE.TorusGeometry(0.019, 0.0026, 5, 16), s * 0.035, 0, 0, 0, 0, 0, 1.15, 0.9, 1)),
    moved(new THREE.BoxGeometry(0.022, 0.003, 0.003), 0, 0.004, 0),
    ...[-1, 1].map(s => moved(new THREE.BoxGeometry(0.003, 0.003, 0.1), s * 0.091, 0.004, -0.05)),
  ])), mat('#18181a', 0.35, 0.4), head, 0, eyeY, 0.1);
  if (ex.has('earrings')) mesh(cached('earrings', () => merge([-1, 1].map(s => moved(new THREE.SphereGeometry(0.0075, 6, 5), s * 0.094, -0.03, -0.005)))), mat('#d8b24a', 0.25, 0.8), head, 0, HEAD_Y, 0);
  if (ex.has('bandage')) {
    const b = mesh(cached('bandage', () => moved(new THREE.TorusGeometry(1, 0.13, 5, 20), 0, 0, 0, Math.PI / 2)), mat('#f2efe8', 0.9), head, 0, HEAD_Y + 0.045, 0);
    b.scale.set(0.098, 0.1, 0.112);
    b.rotation.z = 0.12;
  }
  const hatColor = r() < 0.5 ? '#1e2026' : shade(L.topColor, -0.1);
  if (L.hairStyle === 'cap' || L.top === 'uniform') {
    const cap = mesh(cached('cap', () => merge([
      moved(new THREE.SphereGeometry(1, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), 0, 0, 0, 0, 0, 0, 0.1, 0.098, 0.113),
      moved(new THREE.CylinderGeometry(0.085, 0.085, 0.008, 14, 1, false, -Math.PI / 2, Math.PI), 0, 0.004, 0.07, 0.12, 0, 0, 1, 1, 0.9),
    ])), mat(L.top === 'uniform' ? shade(L.topColor, -0.08) : hatColor, 0.7), head, 0, HEAD_Y + 0.03, -0.004);
    if (L.top === 'uniform') cap.scale.set(1.04, 1.12, 1);
  } else if (ex.has('hat')) {
    if (r() < 0.5) mesh(cached('beanie', () => moved(new THREE.SphereGeometry(1, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.45), 0, 0, 0, 0, 0, 0, 0.104, 0.13, 0.117)), mat(r() < 0.5 ? '#7a2c2c' : '#3a4a5a', 0.95), head, 0, HEAD_Y + 0.012, -0.004);
    else mesh(cached('fedora', () => merge([
      moved(new THREE.CylinderGeometry(0.16, 0.16, 0.008, 20), 0, 0, 0),
      moved(new THREE.CylinderGeometry(0.088, 0.1, 0.095, 16), 0, 0.045, 0),
    ])), mat(hatColor, 0.8), head, 0, HEAD_Y + 0.085, -0.004).rotation.x = -0.08;
  }
  if (ex.has('helmet')) mesh(cached('helmet', () => merge([
    moved(new THREE.SphereGeometry(1, 16, 9, 0, Math.PI * 2, 0, Math.PI * 0.52), 0, 0, 0, 0, 0, 0, 0.118, 0.13, 0.135),
    moved(new THREE.BoxGeometry(0.026, 0.014, 0.2), 0, 0.118, -0.01),
  ])), mat(r() < 0.5 ? '#e0402a' : '#2a7ad0', 0.4), head, 0, HEAD_Y + 0.02, -0.005);
  if (ex.has('headphones')) mesh(cached('headphones', () => merge([
    moved(new THREE.TorusGeometry(0.128, 0.008, 5, 20, Math.PI), 0, 0, 0),
    ...[-1, 1].map(s => moved(new THREE.CylinderGeometry(0.034, 0.034, 0.03, 12), s * 0.106, -0.005, 0, 0, 0, Math.PI / 2)),
  ])), mat('#1c1d22', 0.4), head, 0, HEAD_Y + 0.005, -0.005);

  // Neck and shoulder extras.
  if (ex.has('scarf')) mesh(cached('scarf', () => merge([
    moved(new THREE.TorusGeometry(0.058, 0.026, 6, 14), 0, 0, 0, Math.PI / 2),
    moved(new THREE.BoxGeometry(0.07, 0.24, 0.025), 0.035, -0.13, 0.06, 0.1),
  ])), mat(['#a33a2e', '#2f5a7a', '#d9b46a', '#4a4a52'][Math.floor(r() * 4)], 0.95), torso, 0, NECK_Y - 0.01, 0).scale.z = d.depth + 0.15;
  if (ex.has('backpack')) mesh(cached(`backpack-${front.toFixed(2)}`, () => merge([
    moved(new THREE.BoxGeometry(0.28, 0.38, 0.14), 0, 0.24, -front - 0.07),
    ...[-1, 1].map(s => moved(new THREE.BoxGeometry(0.035, 0.3, 0.012), s * 0.085, 0.27, front + 0.004)),
  ])), mat(['#2c4a3a', '#7a2e2e', '#2a3446', '#c9a24a'][Math.floor(r() * 4)], 0.8), torso);
  if (ex.has('bag')) mesh(cached(`bag-${front.toFixed(2)}-${d.hip.toFixed(2)}`, () => merge([
    moved(new THREE.BoxGeometry(0.03, 0.62, 0.012), 0, 0.15, front + 0.006, 0, 0, 0.62),
    moved(new THREE.BoxGeometry(0.08, 0.2, 0.26), -d.hip - 0.05, -0.12, 0.02),
  ])), mat(r() < 0.5 ? '#5a3a24' : '#1c1a1c', 0.6), torso);

  // Arms: upper arm, forearm and a hand pivot for props.
  const sleeve = longSleeves ? topMat : skin;
  const upper = L.top === 'dress' ? skin : topMat;
  const armR = d.limb * (L.body === 'f' ? 0.044 : 0.05);
  const upperGeo = cached(`upper-${armR.toFixed(3)}`, () => limbGeometry(UPPER_ARM, [armR * 1.05, armR, armR * 0.88, armR * 0.8]));
  const foreGeo = cached(`fore-${armR.toFixed(3)}`, () => limbGeometry(FOREARM, [armR * 0.86, armR * 0.84, armR * 0.66, armR * 0.56]));
  const handGeo = cached('hand', () => merge([
    moved(new THREE.SphereGeometry(0.036, 9, 7), 0, -0.04, 0.004, 0, 0, 0, 0.62, 1.2, 1),
    moved(new THREE.CapsuleGeometry(0.011, 0.03, 3, 5), 0, -0.028, 0.032, 0.5),
  ]));
  const makeArm = (side: 1 | -1) => {
    const arm = new THREE.Group();
    arm.position.set(side * d.shoulder * 0.93, SHOULDER_Y, -0.005);
    torso.add(arm);
    mesh(upperGeo, upper, arm);
    if (coatLike) arm.children[0].scale.set(1.12, 1, 1.12);
    const fore = new THREE.Group();
    fore.position.y = -UPPER_ARM;
    arm.add(fore);
    mesh(foreGeo, sleeve, fore);
    if (coatLike) fore.children[0].scale.set(1.1, 1, 1.1);
    const hand = new THREE.Group();
    hand.position.y = -FOREARM;
    fore.add(hand);
    // The thumb points forward and inward.
    const h = mesh(handGeo, skin, hand);
    h.rotation.y = side * 0.5;
    h.scale.setScalar(L.body === 'f' ? 0.88 : 1);
    return { arm, fore, hand };
  };
  const right = makeArm(-1);
  const left = makeArm(1);

  // Legs: thigh, shin and shoe.
  const legRad = d.limb * (L.body === 'f' ? 0.074 : 0.078) * (d.hip / 0.16) ** 0.5;
  const thighGeo = cached(`thigh-${legRad.toFixed(3)}`, () => limbGeometry(THIGH, [legRad * 1.12, legRad * 0.95, legRad * 0.74, legRad * 0.62]));
  const shinGeo = cached(`shin-${legRad.toFixed(3)}`, () => limbGeometry(SHIN, [legRad * 0.66, legRad * 0.72, legRad * 0.52, legRad * 0.42]));
  const shoeGeo = cached(`shoe-${L.body}`, () => moved(new THREE.CapsuleGeometry(L.body === 'f' ? 0.038 : 0.045, L.body === 'f' ? 0.12 : 0.14, 4, 8), 0, 0, 0, Math.PI / 2, 0, 0, 1, 1, 0.78));
  const thighMat = legsBare || L.bottom === 'shorts' ? (L.bottom === 'shorts' ? pantsMat : legSkin) : pantsMat;
  const shinMat = legsBare || L.bottom === 'shorts' ? legSkin : pantsMat;
  const makeLeg = (side: 1 | -1) => {
    const leg = new THREE.Group();
    leg.position.set(side * d.hip * 0.47, -HIP_DROP, 0);
    hips.add(leg);
    mesh(thighGeo, thighMat, leg);
    const shin = new THREE.Group();
    shin.position.y = -THIGH;
    leg.add(shin);
    mesh(shinGeo, shinMat, shin);
    const shoe = mesh(shoeGeo, shoeMat, shin, 0, -SHIN - ANKLE * 0.5, 0.04);
    shoe.rotation.y = side * 0.05;
    return { leg, shin };
  };
  const legR = makeLeg(-1);
  const legL = makeLeg(1);

  // Skirts and tails that hang from the waist.
  if (L.top === 'coat') mesh(skirtGeometry(Math.max(d.hip, d.waist) * 1.12, 0.52, 1.38), cloth(L.topColor), hips, 0, 0.02, 0);
  else if (L.top === 'dress') mesh(skirtGeometry(Math.max(d.hip, d.waist) * 1.03, 0.4 + r() * 0.08, 1.5), cloth(L.topColor), hips, 0, 0.03, 0);
  else if (L.bottom === 'skirt') mesh(skirtGeometry(Math.max(d.hip, d.waist) * 1.03, 0.38 + r() * 0.12, 1.4), cloth(L.bottomColor), hips, 0, 0.04, 0);
  if (L.top === 'apron') mesh(cached('apron-low', () => new THREE.BoxGeometry(0.28, 0.34, 0.012)), cloth(L.topColor), hips, 0, -0.17, d.hip * 0.72 + 0.02).rotation.x = -0.12;

  // Things carried in the right hand when the pose leaves it free.
  let handheld: THREE.Object3D | null = null;
  for (const kind of ['suitcase', 'umbrella', 'flowers', 'map', 'phone']) if (ex.has(kind)) { handheld = prop(kind); break; }
  if (handheld) {
    const kind = [...ex].find(k => ['suitcase', 'umbrella', 'flowers', 'map', 'phone'].includes(k))!;
    handheld.userData.kind = kind;
    if (kind === 'flowers') handheld.rotation.x = Math.PI / 2;
    if (kind === 'map' || kind === 'phone') { handheld.rotation.x = -Math.PI / 2 + 0.5; handheld.position.set(0, -0.06, 0.02); }
    if (kind === 'umbrella') handheld.rotation.x = 0.12;
    if (kind === 'flowers') left.hand.add(handheld); else right.hand.add(handheld);
  }

  root.traverse(o => { if ((o as THREE.Mesh).isMesh) o.castShadow = shadows; });

  const rig: Rig = {
    body: bodyGroup, scale, full: L, handL: left.hand, handR: right.hand,
    eyes, irises, brows, browY, lip, lipStep: 6, mouth, blush,
    torsoLen: { thigh: THIGH, shin: SHIN },
    props: new Map(), handheld,
    now: blankFrame(), goal: blankFrame(), ready: false,
    blend: 1, clock: r() * 100, blinkIn: 1 + r() * 4, blinking: 0,
    glanceIn: r() * 4, glancing: 0, lookNow: 0, torsoLook: 0,
    old, variant: Math.floor(r() * 4), quirk: r(), nodClock: r() * 6, yawnIn: 6 + r() * 10,
  };
  return {
    root,
    parts: { hips, torso, head, armL: left.arm, armR: right.arm, foreL: left.fore, foreR: right.fore, legL: legL.leg, legR: legR.leg, shinL: legL.shin, shinR: legR.shin },
    phase: r() * 6,
    seated: false,
    look: null,
    attention: 0.15 + r() * 0.85,
    pose: 'stand',
    mood: 'neutral',
    rig,
  };
}

// ------------------------------------------------------------------ looks

type CastLike = {
  age?: string; body?: string; build?: string; height?: number; hair?: string; hairColor?: string; skin?: string;
  top?: string; topColor?: string; bottom?: string; bottomColor?: string; extras?: string[]; pose?: string;
  seed?: number; id?: string; name?: string;
  [key: string]: unknown;
};

// A street-encounter cast member as a Look (its pose goes to setPose).
export function lookFromCast(member: CastLike): Look {
  const seed = member.seed ?? hashText(`${member.id ?? ''}${member.name ?? ''}${member.topColor ?? ''}${member.skin ?? ''}`);
  const height = typeof member.height === 'number' && member.height >= 0.9 ? member.height : undefined;
  return {
    skin: member.skin ?? '#c99468',
    age: member.age, body: member.body, build: member.build, height,
    hairStyle: member.hair, hairColor: member.hairColor,
    top: member.top, topColor: member.topColor,
    bottom: member.bottom, bottomColor: member.bottomColor,
    extras: Array.isArray(member.extras) ? member.extras.filter(e => typeof e === 'string') : [],
    seed,
  };
}

const SKINS = ['#f6dcc6', '#efcfb3', '#eac0a0', '#e0ac85', '#d29a72', '#c99468', '#c08560', '#a86f4c', '#8d5a3c', '#74462e', '#5c3623', '#4a2b1c'];
const DARK_HAIR = ['#141110', '#1d1612', '#2b1d14', '#3d2a1c'];
const LIGHT_HAIR = ['#5a3c26', '#7a3a1e', '#8e5a2e', '#b8955a', '#d6b77a', '#8e3b1f'];
const GREY_HAIR = ['#8e8c88', '#b4b1aa', '#d4d1ca', '#e8e6e0', '#5e5a56'];

type Palette = { tops: Top[]; colors: string[]; bottoms: Bottom[]; bottomColors: string[]; ages: Age[]; extras: [string, number][]; worn?: boolean };
const DISTRICTS: Record<string, Palette> = {
  alto: {
    tops: ['coat', 'suit', 'dress', 'shirt', 'jacket', 'coat', 'dress'], colors: ['#1b2235', '#5a1c2a', '#141416', '#b08a5a', '#1f4a3c', '#e8e2d6', '#3a2a4a'],
    bottoms: ['pants', 'skirt', 'pants'], bottomColors: ['#16171c', '#2a2a32', '#3a2e26', '#1c2230'], ages: ['adult', 'adult', 'young', 'old'],
    extras: [['earrings', 0.4], ['glasses', 0.2], ['scarf', 0.25], ['bag', 0.3], ['hat', 0.08], ['phone', 0.12]],
  },
  clinica: {
    tops: ['scrubs', 'scrubs', 'sweater', 'jacket', 'coat', 'shirt', 'hoodie'], colors: ['#4fa3a5', '#6fb7b0', '#7b5ea7', '#3a5a7a', '#8a8a86', '#6a4a3a'],
    bottoms: ['pants', 'jeans', 'pants'], bottomColors: ['#2a2f3a', '#3a4a5c', '#1f232b'], ages: ['adult', 'young', 'old', 'old'],
    extras: [['glasses', 0.3], ['bandage', 0.08], ['bag', 0.2], ['phone', 0.2], ['scarf', 0.15]],
  },
  mercado: {
    tops: ['tshirt', 'shirt', 'hoodie', 'apron', 'sweater', 'tshirt', 'dress'], colors: ['#d9a441', '#c0503a', '#3a7a5a', '#2f6a8a', '#e6c84a', '#9a3a6a', '#e07a3a', '#f0ebe0'],
    bottoms: ['jeans', 'pants', 'shorts', 'skirt'], bottomColors: ['#2f3b52', '#5a4a3a', '#3a3a44', '#6a5a3a'], ages: ['adult', 'young', 'old', 'adult'],
    extras: [['bag', 0.35], ['hat', 0.15], ['earrings', 0.3], ['flowers', 0.05], ['glasses', 0.15]],
  },
  galpones: {
    tops: ['tshirt', 'dress', 'jacket', 'hoodie', 'shirt', 'tshirt'], colors: ['#141416', '#e03a7a', '#3ad0c0', '#7a3ae0', '#f0e24a', '#c02a2a', '#e8e8ea'],
    bottoms: ['jeans', 'skirt', 'pants', 'shorts'], bottomColors: ['#111114', '#2a2a40', '#1d2a44', '#3a1a3a'], ages: ['young', 'young', 'teen', 'adult'],
    extras: [['headphones', 0.25], ['earrings', 0.45], ['phone', 0.25], ['backpack', 0.15], ['glasses', 0.08]],
  },
  viejo: {
    tops: ['sweater', 'jacket', 'coat', 'shirt', 'sweater', 'apron'], colors: ['#6a5a4a', '#4a5a4a', '#7a6a5a', '#5a4a5a', '#8a7a62', '#3e4a5a'],
    bottoms: ['pants', 'skirt', 'jeans'], bottomColors: ['#3a3630', '#2a2a2a', '#4a4036', '#2f3540'], ages: ['old', 'old', 'adult', 'young'],
    extras: [['glasses', 0.35], ['hat', 0.2], ['scarf', 0.3], ['mustache', 0.15], ['beard', 0.1], ['bag', 0.2]], worn: true,
  },
  estacion: {
    tops: ['jacket', 'coat', 'hoodie', 'sweater', 'tshirt', 'uniform'], colors: ['#3a4a5c', '#7a2e3b', '#4d5b3a', '#2a2a30', '#b06a2a', '#5a6a7a'],
    bottoms: ['jeans', 'pants', 'pants'], bottomColors: ['#2b3446', '#1f232b', '#4a4036'], ages: ['young', 'adult', 'adult', 'old'],
    extras: [['backpack', 0.45], ['suitcase', 0.25], ['map', 0.08], ['headphones', 0.15], ['phone', 0.2], ['scarf', 0.15]],
  },
  costa: {
    tops: ['shirt', 'tshirt', 'dress', 'sweater', 'hoodie'], colors: ['#e8e2d0', '#3a7a9a', '#d0703a', '#5a9a7a', '#f0d070', '#2a4a6a'],
    bottoms: ['shorts', 'jeans', 'pants', 'skirt'], bottomColors: ['#d8ccb0', '#2f3b52', '#3a5a6a'], ages: ['young', 'adult', 'old'],
    extras: [['hat', 0.2], ['glasses', 0.2], ['bag', 0.2], ['phone', 0.15]],
  },
};
const DEFAULT_PALETTE: Palette = {
  tops: ['jacket', 'shirt', 'sweater', 'coat', 'tshirt', 'hoodie', 'dress'], colors: ['#2f4f6a', '#7a2e3e', '#d9a441', '#3a5a3a', '#e6e0d4', '#5a3a6a', '#2a2a30', '#b05a3a'],
  bottoms: ['jeans', 'pants', 'skirt'], bottomColors: ['#2d3440', '#1f232b', '#3a3440', '#4a4036'], ages: ['young', 'adult', 'adult', 'old'],
  extras: [['glasses', 0.18], ['earrings', 0.25], ['bag', 0.2], ['phone', 0.15], ['scarf', 0.15], ['backpack', 0.1], ['headphones', 0.08]],
};

// A plausible, varied night-out look, the same for the same seed.
export function randomLook(seed: number, district?: string): Look {
  const r = rng(seed * 7919 + 13);
  const pick = <T,>(list: readonly T[]) => list[Math.floor(r() * list.length) % list.length];
  const pal = (district && DISTRICTS[district]) || DEFAULT_PALETTE;
  const age = pick(pal.ages);
  const body: BodyType = r() < 0.5 ? 'f' : 'm';
  const buildRoll = r();
  const build: Build = buildRoll < 0.27 ? 'slim' : buildRoll < 0.68 ? 'average' : buildRoll < 0.84 ? 'athletic' : 'heavy';
  const normal = () => (r() + r() + r() - 1.5) / 1.5;
  const height = clamp((body === 'f' ? 1.63 : 1.75) + normal() * 0.09 - (age === 'old' ? 0.04 : 0) - (age === 'teen' ? 0.05 : 0), 1.45, 1.98);
  const skinIndex = Math.floor(r() * SKINS.length);
  const skin = SKINS[skinIndex];
  const darkSkin = skinIndex >= 7;
  let hairColor = age === 'old' ? pick(GREY_HAIR) : darkSkin || r() < 0.55 ? pick(DARK_HAIR) : pick(LIGHT_HAIR);
  if (district === 'galpones' && r() < 0.2) hairColor = pick(['#6a3f9a', '#2f7fa0', '#c04a7a', '#e0d0a0']);
  const styles: HairStyle[] = body === 'f'
    ? ['long', 'long', 'bob', 'ponytail', 'bun', 'curly', 'short', ...(darkSkin ? ['afro', 'braids', 'braids'] as HairStyle[] : ['long'] as HairStyle[])]
    : ['short', 'short', 'buzz', 'curly', 'short', ...(age === 'old' ? ['bald', 'bald'] as HairStyle[] : ['cap', 'long', 'ponytail'] as HairStyle[]), ...(darkSkin ? ['afro', 'buzz'] as HairStyle[] : [])];
  const hairStyle = pick(styles);
  let top = pick(pal.tops);
  if (top === 'dress' && body === 'm') top = 'shirt';
  if (top === 'suit' && body === 'f' && r() < 0.5) top = 'dress';
  let topColor = pick(pal.colors);
  let bottom = top === 'dress' ? 'skirt' : pick(pal.bottoms);
  if (bottom === 'skirt' && body === 'm') bottom = 'pants';
  let bottomColor = top === 'scrubs' ? topColor : top === 'suit' && r() < 0.7 ? topColor : pick(pal.bottomColors);
  if (pal.worn) { topColor = shade(topColor, 0.02, -0.12); bottomColor = shade(bottomColor, 0.02, -0.1); }
  // Small per-person shifts so two people never share exactly a colour.
  topColor = shade(topColor, (r() - 0.5) * 0.06, (r() - 0.5) * 0.08);
  const extras: string[] = [];
  for (const [name, chance] of pal.extras) if (r() < chance * (name === 'earrings' && body === 'm' ? 0.25 : 1)) extras.push(name);
  if (body === 'm' && age !== 'teen' && r() < (age === 'old' ? 0.35 : 0.22)) extras.push(r() < 0.5 ? 'beard' : 'mustache');
  if (age === 'old' && r() < 0.35 && !extras.includes('glasses')) extras.push('glasses');
  return {
    skin, age, body, build, height: Math.round(height * 100) / 100, hairStyle, hairColor,
    top, topColor, bottom, bottomColor, extras, seed: (seed * 2654435761) >>> 0,
    shoes: pick(['#1c1c1e', '#1c1c1e', '#e8e4dc', '#5a3a26', '#2a2a3a', '#8a2a2a']),
  };
}

// ------------------------------------------------------------------ mood and pose

const SEATED: Pose[] = ['sit', 'swing', 'sleep', 'ground', 'bike'];
const POSE_PROPS: Partial<Record<Pose, { kind: string; hand: 'R' | 'L' | 'torso'; at: [number, number, number]; rot: [number, number, number] }>> = {
  phone: { kind: 'phone', hand: 'R', at: [0, -0.07, 0.03], rot: [-1.3, 0, 0] },
  guitar: { kind: 'guitar', hand: 'torso', at: [-0.1, 0.1, 0.2], rot: [0, 0.15, 0.5] },
  sweep: { kind: 'broom', hand: 'R', at: [0, -0.05, 0.02], rot: [0.55, 0, 0] },
  carry: { kind: 'box', hand: 'torso', at: [0, 0.16, 0.31], rot: [0, 0, 0] },
  fish: { kind: 'rod', hand: 'R', at: [0, -0.05, 0.02], rot: [-0.9, 0, 0] },
  cook: { kind: 'spatula', hand: 'R', at: [0, -0.05, 0.02], rot: [-0.3, 0, 0] },
  read: { kind: 'book', hand: 'torso', at: [0, 0.2, 0.3], rot: [-0.85, 0, 0] },
};

export function setMood(person: Person, mood: Mood | string) {
  const next = (PERSON_MOODS as readonly string[]).includes(mood) ? mood as Mood : 'neutral';
  if (next === person.mood) return;
  person.mood = next;
  person.rig.blend = 0;
}

export function setPose(person: Person, pose: Pose | string, seated?: boolean) {
  const next = (PERSON_POSES as readonly string[]).includes(pose) ? pose as Pose : 'stand';
  const sit = seated ?? SEATED.includes(next);
  if (next === person.pose && sit === person.seated) return;
  person.pose = next;
  person.seated = sit;
  person.rig.blend = 0;
  const rig = person.rig;
  for (const [key, object] of rig.props) object.visible = key === next;
  const spec = POSE_PROPS[next];
  if (spec && !rig.props.has(next)) {
    const object = prop(spec.kind);
    object.position.set(...spec.at);
    object.rotation.set(...spec.rot);
    if (spec.hand === 'torso') {
      const front = person.parts.torso.children[0] as THREE.Mesh;
      front.geometry.computeBoundingBox();
      object.position.z = Math.max(spec.at[2], front.geometry.boundingBox!.max.z + (next === 'carry' ? 0.16 : next === 'read' ? 0.24 : 0.07));
    }
    (spec.hand === 'R' ? rig.handR : spec.hand === 'L' ? rig.handL : person.parts.torso).add(object);
    object.traverse(o => { if ((o as THREE.Mesh).isMesh) o.castShadow = (person.parts.hips.children[0] as THREE.Mesh).castShadow; });
    rig.props.set(next, object);
  }
  if (rig.handheld) rig.handheld.visible = !RIGHT_HAND_BUSY.has(next) || rig.handheld.userData.kind === 'flowers';
}
const RIGHT_HAND_BUSY = new Set<Pose>(['phone', 'cry', 'guitar', 'wave', 'balcony', 'window', 'sweep', 'carry', 'fish', 'cook', 'read', 'arms', 'bike', 'hug', 'swing', 'dance', 'lie']);

// ------------------------------------------------------------------ animation

function arms(f: Frame, side: 0 | 1, aX: number, aZ: number, aY: number, e: number, w = 0) {
  if (side === 0) { f.aX0 = aX; f.aZ0 = aZ; f.aY0 = aY; f.e0 = e; f.w0 = w; }
  else { f.aX1 = aX; f.aZ1 = aZ; f.aY1 = aY; f.e1 = e; f.w1 = w; }
}
const both = (f: Frame, aX: number, aZ: number, aY: number, e: number) => { arms(f, 0, aX, aZ, aY, e); arms(f, 1, aX, aZ, aY, e); };
function legs(f: Frame, side: 0 | 1, lX: number, k: number, lZ = 0) {
  if (side === 0) { f.lX0 = lX; f.k0 = k; f.lZ0 = lZ; } else { f.lX1 = lX; f.k1 = k; f.lZ1 = lZ; }
}

// Two-bone leg reach in the side plane: hip joint to an ankle target (y up,
// z forward, body units), returning thigh swing and knee bend.
function reach(dy: number, dz: number): [number, number] {
  const dist = clamp(Math.hypot(dy, dz), 0.2, THIGH + SHIN - 0.001);
  const line = Math.atan2(-dz, -dy);
  const atHip = Math.acos(clamp((THIGH * THIGH + dist * dist - SHIN * SHIN) / (2 * THIGH * dist), -1, 1));
  const atKnee = Math.acos(clamp((THIGH * THIGH + SHIN * SHIN - dist * dist) / (2 * THIGH * SHIN), -1, 1));
  return [line - atHip, Math.PI - atKnee];
}

function relaxed(f: Frame, t: number, rig: Rig) {
  const v = rig.variant;
  if (v === 1) both(f, 0.08, 0.13, -0.15, -0.55); // hands in pockets
  else if (v === 2) { arms(f, 0, 0.02, 0.07, 0, -0.14); arms(f, 1, 0.1, 0.55, -0.7, -1.7); } // a hand on the hip
  else if (v === 3) both(f, 0.42, 0.1, 0.9, -0.65); // hands behind the back
  else { arms(f, 0, 0.03 + Math.sin(t * 0.7) * 0.02, 0.07, 0.05, -0.16); arms(f, 1, 0.01, 0.07, 0.05, -0.2); }
}

// Fills `f` with the target for this frame. Values are in radians, positions in body units.
function target(person: Person, f: Frame, dt: number, speed: number, talk: boolean) {
  const rig = person.rig;
  const t = rig.clock;
  const s = rig.scale;
  for (const k of KEYS) f[k] = 0;
  f.eye = 1; f.smile = 0.08;
  const pose = person.pose;
  const cycle = speed > 0.1 ? speed : pose === 'walk' ? 1.25 : pose === 'run' ? 3.6 : 0;
  const moving = cycle > 0 && !person.seated && pose !== 'lie' && pose !== 'ground';
  const run = cycle > 3.2;
  let armsFree = !RIGHT_HAND_BUSY.has(pose) && pose !== 'smoke-free';
  let lowerFree = true;

  // Breathing and a slow wandering gaze for everyone.
  f.torX = Math.sin(t * 1.7) * 0.012;
  f.headY = Math.sin(t * 0.31 + rig.quirk * 9) * 0.14 + Math.sin(t * 0.13) * 0.1;
  f.headX = Math.sin(t * 0.21 + 2) * 0.04;
  both(f, 0.02, 0.07, 0.05, -0.16);

  // ---- lower body
  if (pose === 'lie') {
    f.bodyRX = -Math.PI / 2; f.bodyY = 0.1; f.bodyZ = 0.82 * s;
    legs(f, 0, 0, 0.02); legs(f, 1, -0.5 - Math.sin(t * 0.4) * 0.05, 1.0);
    f.headX = -0.1; f.headY *= 0.4;
    lowerFree = false;
  } else if (pose === 'ground') {
    f.seat = 0.17 / s;
    legs(f, 0, -1.45, 0.12, 0.1); legs(f, 1, -1.9, 2.05, 0.12);
    f.torX = -0.18 + Math.sin(t * 1.7) * 0.01;
    both(f, 0.55, 0.22, 0, -0.08);
    armsFree = false;
  } else if (person.seated && pose === 'bike') {
    // Saddle at 0.86 m, cranks under it, hands on the bars.
    f.seat = 0.86 / s;
    f.torX = 0.42;
    const hipJoint = f.seat - HIP_DROP;
    const crank = person.phase;
    for (const side of [0, 1] as const) {
      const a = crank + side * Math.PI;
      const footY = (0.3 + Math.cos(a) * 0.17 + ANKLE * 0.6) / s;
      const footZ = (0.12 + Math.sin(a) * 0.17) / s;
      const [lX, k] = reach(footY - hipJoint, footZ);
      legs(f, side, lX, k, 0.04);
    }
    both(f, -0.95, 0.12, 0.12, -0.35);
    f.headX = -0.3;
    armsFree = false;
  } else if (person.seated) {
    f.seat = 0.55 / s;
    const sway = pose === 'swing' ? Math.sin(t * 1.9) : 0;
    const cross = rig.variant === 2 && pose === 'sit';
    legs(f, 0, -1.45, 1.5 - sway * 0.5, rig.full.body === 'm' ? 0.12 : 0.02);
    legs(f, 1, cross ? -1.7 : -1.45, cross ? 1.25 : 1.5 - sway * 0.5, cross ? -0.2 : rig.full.body === 'm' ? 0.12 : 0.02);
    f.torX = -0.06 + Math.sin(t * 1.7) * 0.012 + sway * 0.06;
    both(f, -0.42, 0.14, 0.2, -0.75);
  } else if (moving) {
    const old = rig.old;
    const A = run ? 0.85 : old ? 0.3 : 0.46;
    const p = person.phase;
    legs(f, 0, Math.sin(p) * A, 0.06 + Math.max(0, -Math.cos(p)) * (run ? 1.45 : old ? 0.55 : 0.85));
    legs(f, 1, -Math.sin(p) * A, 0.06 + Math.max(0, Math.cos(p)) * (run ? 1.45 : old ? 0.55 : 0.85));
    f.hipYaw = Math.sin(p) * (run ? 0.16 : 0.1);
    f.hipRoll = Math.cos(p) * 0.03;
    f.torY = -Math.sin(p) * (run ? 0.26 : 0.16);
    f.torX = (run ? 0.2 : 0.035) + Math.sin(p * 2) * 0.012;
    f.headY *= 0.3;
    f.headX = run ? -0.12 : -0.02;
    const swing = run ? 0.9 : old ? 0.22 : 0.45;
    arms(f, 0, -Math.sin(p) * swing, 0.08, 0.1, run ? -1.35 : -0.22 - Math.max(0, Math.sin(p)) * 0.25);
    arms(f, 1, Math.sin(p) * swing, 0.08, 0.1, run ? -1.35 : -0.22 - Math.max(0, -Math.sin(p)) * 0.25);
    armsFree = false;
  } else if (pose === 'crouch') {
    legs(f, 0, -1.95, 2.3, 0.18); legs(f, 1, -1.85, 2.25, 0.16);
    f.hipZ = -0.24; f.torX = 0.5; f.headX = -0.35;
    both(f, -0.75, 0.1, 0.25, -0.5);
    armsFree = false;
  } else if (pose === 'lean') {
    f.bodyRX = -0.08;
    legs(f, 0, 0.02, 0.03); legs(f, 1, -0.15, 0.32, -0.16);
    f.hipRoll = 0.04;
    if (rig.variant % 2) { arms(f, 0, -0.42, 0.22, 1.25, -1.5); arms(f, 1, -0.36, 0.22, 1.3, -1.62); }
    else both(f, 0.1, 0.12, -0.15, -0.6);
  } else if (pose === 'dance') {
    const b = t * 4.2;
    const bounce = 0.12 + Math.abs(Math.sin(b)) * 0.22;
    legs(f, 0, -0.05 - Math.sin(b * 0.5) * 0.12, bounce, 0.1); legs(f, 1, -0.05 + Math.sin(b * 0.5) * 0.12, bounce, 0.1);
    f.hipRoll = Math.sin(b * 0.5) * 0.09; f.hipYaw = Math.sin(b * 0.25) * 0.25;
    f.torZ = -Math.sin(b * 0.5) * 0.06; f.headX = Math.sin(b) * 0.07;
    arms(f, 0, -0.5 + Math.sin(b * 0.5) * 0.45, 0.35, 0.2, -1.5 + Math.sin(b) * 0.2);
    arms(f, 1, -0.5 - Math.sin(b * 0.5) * 0.45, 0.35, 0.2, -1.5 - Math.sin(b) * 0.2);
    f.smile = 0.6;
  } else {
    // Weight shifts from one leg to the other every few seconds.
    const shift = Math.sin(t * 0.23 + rig.quirk * 7);
    legs(f, 0, -0.02, 0.05 + Math.max(0, shift) * 0.16, 0.035);
    legs(f, 1, -0.02, 0.05 + Math.max(0, -shift) * 0.16, 0.035);
    f.hipRoll = -shift * 0.035;
    f.torZ = shift * 0.015;
    if (pose === 'stand' || pose === 'walk' || pose === 'run') relaxed(f, t, rig);
  }

  // ---- upper body by pose
  switch (pose) {
    case 'phone':
      if (rig.variant % 2 === 0) { arms(f, 0, -0.35, 0.1, 0.45, -1.55); f.headX = 0.42; f.headY *= 0.15; f.gazeY = -1; }
      else { arms(f, 0, -0.35, 0.55, -0.15, -2.55); f.headZ = 0.12; f.headY *= 0.5; }
      arms(f, 1, 0.02, 0.08, 0.1, -0.2);
      if (talk || rig.variant % 2 === 1) f.open = 0.12 + Math.abs(Math.sin(t * 8.5) * Math.sin(t * 3.1)) * 0.3;
      break;
    case 'cry': {
      const sob = Math.max(0, Math.sin(t * 1.3)) * Math.sin(t * 17) * 0.035;
      both(f, -1.0, 0.18, 0.55, -2.3);
      f.headX = 0.38; f.torX += 0.12 + sob; f.headY *= 0.1;
      break;
    }
    case 'guitar': {
      arms(f, 1, -0.75, 0.5, -0.1, -1.0);
      arms(f, 0, -0.35, 0.12, 0.85, -1.2 + Math.sin(t * 9) * 0.12);
      f.headX = 0.2; f.headZ = 0.12; f.headY *= 0.3;
      break;
    }
    case 'sleep':
      both(f, -0.4, 0.06, 0.25, -0.65);
      f.torX = 0.12 + Math.sin(t * 0.9) * 0.02;
      f.headX = 0.6 + Math.sin(t * 0.45) * 0.05; f.headZ = 0.2; f.headY = 0.05;
      f.eye = 0.02;
      break;
    case 'arms':
      arms(f, 0, -0.42, 0.22, 1.25, -1.5); arms(f, 1, -0.36, 0.22, 1.3, -1.62);
      break;
    case 'wave':
      arms(f, 0, -0.25, 2.35, 0, -0.55, Math.sin(t * 7) * 0.35);
      f.smile = 0.6;
      break;
    case 'balcony':
      f.torX = 0.35; both(f, -1.1, 0.25, 0.25, -1.05); f.headX = -0.15;
      break;
    case 'window':
      f.torX = 0.5; arms(f, 1, -1.25, 0.25, 0.3, -0.75);
      arms(f, 0, -0.9 + (talk ? Math.sin(t * 2.4) * 0.2 : 0), 0.3, 0.3, -1.3);
      f.headX = -0.35;
      break;
    case 'sweep': {
      const sw = Math.sin(t * 2.6);
      f.torX = 0.18; f.torY = sw * 0.28;
      arms(f, 0, -0.35, 0.12, 0.4, -0.35); arms(f, 1, -0.7, 0.05, 0.6, -0.95);
      f.headX = 0.25;
      break;
    }
    case 'carry':
      both(f, -0.38, 0.2, 0.45, -1.45);
      f.torX -= 0.06;
      break;
    case 'smoke-free':
      both(f, 0.1, 0.12, -0.15, -0.6);
      break;
    case 'fish':
      arms(f, 0, -0.65, 0.12, 0.4, -0.8 + Math.sin(t * 0.8) * 0.05); arms(f, 1, -0.5, 0.08, 0.6, -1.0);
      f.headX = -0.15;
      break;
    case 'cook':
      f.torX = 0.12;
      arms(f, 0, -0.65, 0.15, 0.25, -0.75 + Math.max(0, Math.sin(t * 2.2)) ** 6 * -0.9);
      arms(f, 1, 0.05, 0.45, -0.6, -1.6);
      f.headX = 0.28;
      break;
    case 'swing':
      both(f, -0.25, 0.22, -0.2, -1.65);
      break;
    case 'read':
      both(f, -0.55, 0.12, 0.55, -1.3);
      f.headX = 0.4; f.headY *= 0.1; f.gazeY = -1;
      break;
    case 'hug': {
      const sway = Math.sin(t * 1.2);
      both(f, -1.25, 0.32, 0.95, -1.15);
      f.torZ = sway * 0.05; f.hipRoll = -sway * 0.03; f.torX += 0.06;
      f.headZ = 0.18; f.headY = 0.25; f.smile = 0.5; f.eye = 0.55;
      break;
    }
  }

  // A handheld extra changes how the right (or left) arm rests.
  const held = rig.handheld?.visible ? String(rig.handheld.userData.kind) : '';
  if (armsFree && !moving) {
    if (held === 'flowers') arms(f, 1, -0.25, 0.08, 0.3, -1.3);
    if (held === 'map') arms(f, 0, -0.3, 0.08, 0.4, -1.25);
    if (held === 'phone') { arms(f, 0, -0.35, 0.1, 0.45, -1.55); f.headX = 0.38; f.gazeY = -1; }
    if (held === 'suitcase') arms(f, 0, 0, 0.12, 0, -0.04);
  }
  if (moving) {
    if (held === 'suitcase') arms(f, 0, 0.04, 0.14, 0, -0.04);
    if (held === 'phone') { arms(f, 0, -0.35, 0.1, 0.45, -1.55); f.headX = 0.35; f.gazeY = -1; }
    if (held === 'flowers') arms(f, 1, -0.25, 0.08, 0.3, -1.3);
    if (pose === 'carry') both(f, -0.38, 0.2, 0.45, -1.45);
    if (pose === 'phone') { arms(f, 0, -0.35, 0.1, 0.45, -1.55); f.headX = 0.4; }
  }

  // ---- mood
  const mood = person.mood;
  const calm = armsFree && !moving;
  switch (mood) {
    case 'smile':
      f.smile = 0.75; f.eye = 0.86; f.brow = 0.12; f.headZ += 0.05;
      break;
    case 'love':
      f.smile = 0.6; f.eye = 0.72; f.brow = 0.25; f.browIn = 0.25; f.blush = 1; f.headZ += 0.16; f.headX += 0.05;
      if (calm) both(f, -0.5, 0.05, 0.8, -1.85);
      break;
    case 'sad':
      f.smile = -0.65; f.eye = 0.62; f.brow = -0.05; f.browIn = 0.85; f.headX += 0.3; f.torX += 0.08; f.gazeY = -0.6;
      if (calm) both(f, 0.05, 0.03, 0.15, -0.08);
      break;
    case 'scared': {
      const shiver = Math.sin(t * 31) * 0.025;
      f.smile = -0.35; f.open = 0.42; f.eye = 1.35; f.brow = 0.9; f.browIn = 0.55; f.torX -= 0.12; f.hipZ -= 0.04; f.headX -= 0.06;
      if (calm) { both(f, -0.85 + shiver, 0.25, 0.2, -1.55); if (!person.seated && lowerFree) legs(f, 0, 0.18, 0.1, 0.05); }
      break;
    }
    case 'angry':
      f.smile = -0.5; f.open = 0.06; f.eye = 0.8; f.brow = -0.35; f.browIn = -0.95; f.headX += 0.1; f.torX += 0.05;
      if (calm) { if (rig.variant % 2) { arms(f, 0, -0.42, 0.22, 1.25, -1.5); arms(f, 1, -0.36, 0.22, 1.3, -1.62); } else both(f, 0.05, 0.16, 0.1, -0.45); }
      break;
    case 'surprised':
      f.smile = 0; f.open = 0.8; f.eye = 1.4; f.brow = 1; f.browIn = 0.1; f.headX -= 0.12; f.torX -= 0.05;
      if (calm) both(f, -0.35, 0.35, 0.1, -1.0);
      break;
    case 'worried':
      f.smile = -0.3; f.open = 0.1; f.eye = 1.05; f.brow = 0.4; f.browIn = 0.85; f.headX += 0.06;
      if (calm) arms(f, 0, -0.55, 0.18, 0.55, -2.25 + Math.sin(t * 2.2) * 0.05);
      break;
    case 'pain':
      f.smile = -0.55; f.open = 0.32; f.eye = 0.35; f.brow = -0.1; f.browIn = 0.65; f.torX += 0.25; f.headX += 0.12;
      if (pose === 'ground') arms(f, 0, -1.25, 0.15, 0.2, -0.3);
      else if (calm) { arms(f, 0, -0.25, 0.12, 0.75, -1.45); legs(f, 1, f.lX1 - 0.1, f.k1 + 0.15, f.lZ1); }
      break;
    case 'tipsy': {
      const sway = Math.sin(t * 0.9);
      f.smile = 0.45; f.eye = 0.58; f.brow = 0.2; f.blush = 0.6;
      f.hipRoll += sway * 0.05; f.torZ += Math.sin(t * 0.9 + 1) * 0.08; f.headZ += Math.sin(t * 0.7) * 0.15;
      if (lowerFree && !person.seated) { f.lZ0 += 0.06; f.lZ1 += 0.06; }
      break;
    }
    case 'sleepy': {
      rig.nodClock += dt;
      const nod = (rig.nodClock % 7) / 7;
      f.eye = 0.25; f.smile = 0; f.brow = -0.1;
      f.headX += nod < 0.85 ? nod * 0.55 : (1 - nod) * 3.2;
      rig.yawnIn -= dt;
      if (rig.yawnIn < 0) { f.open = 0.9; f.eye = 0; if (rig.yawnIn < -1.6) rig.yawnIn = 8 + rig.quirk * 8; }
      break;
    }
  }
  if (pose === 'cry') { f.eye = 0.2; f.smile = -0.6; f.browIn = 1; f.open = Math.max(f.open, 0.15); }
  if (pose === 'sleep') f.eye = 0.02;

  // Age: a slight stoop, the head pushed forward to look ahead.
  if (rig.old && pose !== 'lie') { f.torX += 0.14; f.headX -= 0.12; if (!person.seated) { f.k0 += 0.06; f.k1 += 0.06; } }

  // Talking: the mouth moves, the head nods and a hand gestures.
  if (talk) {
    f.open = Math.max(f.open, 0.08 + Math.abs(Math.sin(t * 9.3) * Math.sin(t * 3.7 + 1)) * 0.42);
    f.headX += Math.sin(t * 2.9) * 0.05;
    f.brow += Math.max(0, Math.sin(t * 1.3)) * 0.25;
    if (calm && pose !== 'arms' && mood !== 'love' && mood !== 'scared') {
      const g = Math.sin(t * 2.3);
      arms(f, 0, -0.38 + g * 0.08, 0.16, 0.35, -1.05 + Math.sin(t * 3.1) * 0.25);
      if (Math.sin(t * 0.5) > 0.4) arms(f, 1, -0.3, 0.22, 0.3, -0.95 + g * 0.2);
    }
  }
}

// Where the hips sit for a standing pose: low enough that the lowest foot
// touches the ground.
function standingHips(n: Frame) {
  const reachOf = (lX: number, k: number) => THIGH * Math.cos(lX) + SHIN * Math.cos(lX + k);
  return ANKLE + Math.max(reachOf(n.lX0, n.k0), reachOf(n.lX1, n.k1)) + HIP_DROP;
}

// speed in m/s: 0 idle, ~1.4 walk, ~5 run. `talk` animates mouth and hands.
export function animatePerson(person: Person, dt: number, speed: number, talk = false) {
  const rig = person.rig;
  const p = person.parts;
  dt = Math.min(dt, 0.1);
  rig.clock += dt;
  // Gait: two steps per cycle, shorter steps for older people.
  const cycle = speed > 0.1 ? speed : person.pose === 'walk' ? 1.25 : person.pose === 'run' ? 3.6 : 0;
  const step = rig.scale * (cycle > 3.2 ? 1.25 : rig.old ? 0.5 : 0.72);
  if (person.pose === 'bike') person.phase += dt * (1.6 + speed * 0.8);
  else if (cycle > 0) person.phase += (dt * cycle * Math.PI) / step;
  else person.phase += dt;

  const goal = rig.goal;
  target(person, goal, dt, speed, talk);
  const n = rig.now;
  rig.blend = Math.min(1, rig.blend + dt / 0.6);
  const rate = rig.ready ? 4 + 24 * rig.blend * rig.blend : Infinity;
  const k = 1 - Math.exp(-dt * rate);
  for (const key of KEYS) n[key] += (goal[key] - n[key]) * (rig.ready ? k : 1);
  rig.ready = true;

  // Body.
  rig.body.position.set(0, n.bodyY, n.bodyZ);
  rig.body.rotation.x = n.bodyRX;
  const seat = n.seat > 0.01 && (person.seated || person.pose === 'ground') ? n.seat : standingHips(n);
  p.hips.position.set(0, seat, n.hipZ);
  p.hips.rotation.set(0, n.hipYaw, n.hipRoll);

  // Looking at the learner: some always, some glance, some never.
  let want = 0;
  if (person.look !== null) {
    if (person.attention >= 0.75) want = person.look;
    else if (person.attention > 0.08) {
      rig.glanceIn -= dt;
      if (rig.glancing > 0) { rig.glancing -= dt; want = person.look; }
      else if (rig.glanceIn < 0) { rig.glancing = 1.2 + person.attention * 2.5; rig.glanceIn = 2 + (1 - person.attention) * 9 * (0.5 + rig.quirk); }
    }
  } else rig.glancing = 0;
  rig.lookNow += (want - rig.lookNow) * Math.min(1, dt * 5);
  const total = clamp(rig.lookNow, -1.7, 1.7);
  const twist = Math.abs(total) > 1.1 ? total - Math.sign(total) * 1.1 : 0;
  rig.torsoLook += (twist * 0.8 + total * 0.12 - rig.torsoLook) * Math.min(1, dt * 4);
  const headLook = clamp(total - rig.torsoLook, -1.1, 1.1);

  p.torso.rotation.set(n.torX, n.torY + rig.torsoLook, n.torZ);
  p.head.rotation.set(n.headX, clamp(n.headY * (person.look !== null && want !== 0 ? 0.2 : 1) + headLook, -1.25, 1.25), n.headZ);

  // Arms: index 0 is the right arm, on -x.
  p.armR.rotation.set(n.aX0, n.aY0, -n.aZ0);
  p.armL.rotation.set(n.aX1, -n.aY1, n.aZ1);
  p.foreR.rotation.set(n.e0, 0, -n.w0);
  p.foreL.rotation.set(n.e1, 0, n.w1);
  p.legR.rotation.set(n.lX0, 0, -n.lZ0);
  p.legL.rotation.set(n.lX1, 0, n.lZ1);
  p.shinR.rotation.x = n.k0;
  p.shinL.rotation.x = n.k1;

  // Face: blinking every few seconds, brows, lips, open mouth, blush.
  rig.blinkIn -= dt;
  if (rig.blinkIn < 0) { rig.blinking = 0.13; rig.blinkIn = 1.8 + rig.quirk * 2 + Math.abs(Math.sin(rig.clock * 3.7)) * 3; }
  rig.blinking = Math.max(0, rig.blinking - dt);
  const open = rig.blinking > 0 ? 0.08 : clamp(n.eye, 0.04, 1.45);
  for (let i = 0; i < 2; i++) {
    const side = i === 0 ? -1 : 1;
    rig.eyes[i].scale.y = rig.eyes[i].scale.x * open;
    rig.irises[i].position.x = clamp(headLook * 0.25 - (n.headY - goal.headY) * 0.1, -0.4, 0.4) * 0.004;
    rig.irises[i].position.y = n.gazeY * 0.0035;
    rig.brows[i].position.y = rig.browY + n.brow * 0.011 + (1 - Math.min(1, open)) * -0.004;
    rig.brows[i].rotation.z = -side * n.browIn * 0.32;
  }
  const lipStep = Math.round(((clamp(n.smile, -1, 1) + 1) / 2) * (LIP_STEPS - 1));
  if (lipStep !== rig.lipStep) { rig.lip.geometry = lipGeometry(lipStep); rig.lipStep = lipStep; }
  const mouthOpen = clamp(n.open, 0, 1);
  rig.mouth.visible = mouthOpen > 0.03;
  rig.mouth.scale.set(1.1 + Math.max(0, -n.smile) * 0.4 * mouthOpen, Math.max(0.001, mouthOpen * 1.15), 0.45);
  rig.lip.position.y = HEAD_Y - 0.05 + mouthOpen * 0.006;
  rig.blush.visible = n.blush > 0.03;
  rig.blush.scale.setScalar(Math.max(0.001, n.blush));
}

// A soft dark disc under a person: much cheaper than a real shadow and it
// keeps people grounded when the sun's shadow is off.
let blobTexture: THREE.CanvasTexture | null = null;
const blobGeometry = new THREE.CircleGeometry(0.42, 20);
export function addBlobShadow(person: { root: THREE.Object3D }, size = 1) {
  if (!blobTexture) {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(0,0,0,.55)');
    g.addColorStop(0.6, 'rgba(0,0,0,.25)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    blobTexture = new THREE.CanvasTexture(canvas);
  }
  const blob = new THREE.Mesh(blobGeometry, new THREE.MeshBasicMaterial({ map: blobTexture, transparent: true, depthWrite: false }));
  blob.rotation.x = -Math.PI / 2;
  blob.position.y = 0.025;
  blob.scale.setScalar(size);
  blob.renderOrder = 1;
  person.root.add(blob);
  return blob;
}
