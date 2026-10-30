// Mundo 3D · the kit every zone is built with: the contract a scene returns to
// the runtime, white circles, people who stand or walk, speech bubbles,
// signs, ground textures and a few props. Geometry helpers, palms, trees,
// benches and cars come from Noche abierta (build3d); people and their faces
// from people3d. Each zone (a state, a city) only arranges its own place.
import * as THREE from 'three';
import { addBench, addPalm, addTree, box, canvas, cylinder, glow, makeCar, placeVehicle, random, solid } from '../noche-abierta/build3d';
import { addBlobShadow, animatePerson, createPerson, randomLook, setMood, setPose, type Look, type Person } from '../noche-abierta/people3d';
import type { Box, Bounds } from '../noche-abierta/world3d.d.mts';

export { addBench, addPalm, addTree, box, canvas, cylinder, glow, makeCar, placeVehicle, random, solid };
export type { Box, Bounds, Look, Person };

export type SpotPlace = { id: string; x: number; z: number; heading: number };
export type Talker = { person: Person; spot: string | null; x: number; z: number; heading: number; seed: number; body: string; baseMood: string; seated: boolean; angryUntil?: number };
export type Walker = { person: Person; path: { x: number; z: number }[]; speed: number; at: number; x: number; z: number; heading: number; seed: number; body: string; angryUntil?: number; pause: number; moving: boolean };
export type Light = {
  sky: [string, string];
  fog: [string, number, number];
  sun: { color: string; intensity: number; at: [number, number, number] };
  hemi: [string, string, number];
  exposure: number;
};

/** What a zone hands the runtime. */
export type RegionScene = {
  group: THREE.Group;
  bounds: Bounds;
  solids: Box[];
  spawn: { x: number; z: number; heading: number };
  /** The portal back to the map. */
  exit: { x: number; z: number };
  spots: SpotPlace[];
  talkers: Talker[];
  walkers: Walker[];
  light: Light;
  /** Lifts, stairs or chairlifts to another part of the zone (E to use). */
  doors?: { x: number; z: number; label: string; to: { x: number; z: number; heading: number } }[];
  /** Covered areas: the camera stays under them. */
  ceilings?: { x0: number; x1: number; z0: number; z1: number; y: number }[];
  /** Extra per-frame life: waves, cars, lights, birds. */
  animate: (t: number, dt: number) => void;
};
/** `flag`: the country id, so a zone can fly the country's flag (banderas3d.ts). */
export type SceneOptions = { low: boolean; shadows: boolean; flag?: string };
export type SceneBuilder = (options: SceneOptions) => RegionScene;

// ---------------------------------------------------------------- textures

/** Sand, grass, asphalt, snow…: speckled noise over a base colour. */
export function groundTexture(base: string, specks: string[], seed: number, size = 256, amount = 2200) {
  const rand = random(seed);
  const texture = canvas(size, size, ctx => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < amount; i++) {
      ctx.fillStyle = specks[i % specks.length];
      ctx.globalAlpha = 0.25 + rand() * 0.35;
      const s = 1 + rand() * 2.2;
      ctx.fillRect(rand() * size, rand() * size, s, s);
    }
    ctx.globalAlpha = 1;
  }, true);
  return texture;
}

/** Paving: tiles or slabs with joints. */
export function tileTexture(base: string, joint: string, cells = 4, size = 256) {
  return canvas(size, size, ctx => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, size, size);
    ctx.strokeStyle = joint; ctx.lineWidth = 3;
    const step = size / cells;
    for (let i = 0; i <= cells; i++) {
      ctx.beginPath(); ctx.moveTo(i * step, 0); ctx.lineTo(i * step, size); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i * step); ctx.lineTo(size, i * step); ctx.stroke();
    }
  }, true);
}

/** A facade: rows of windows over a wall colour, some lit. */
export function windowsTexture(wall: string, glass: string, lit: string, cols: number, rows: number, seed: number, litShare = 0.25) {
  const rand = random(seed);
  return canvas(256, 256, ctx => {
    ctx.fillStyle = wall; ctx.fillRect(0, 0, 256, 256);
    const w = 256 / cols, h = 256 / rows;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      ctx.fillStyle = rand() < litShare ? lit : glass;
      ctx.fillRect(c * w + w * 0.18, r * h + h * 0.2, w * 0.64, h * 0.58);
    }
  }, true);
}

/** Text on a panel, for shop signs and street names. */
export function labelTexture(text: string, bg: string, fg: string, opts: { font?: string; w?: number; h?: number; border?: string } = {}) {
  const w = opts.w ?? 512, h = opts.h ?? 128;
  return canvas(w, h, ctx => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    if (opts.border) { ctx.strokeStyle = opts.border; ctx.lineWidth = 8; ctx.strokeRect(6, 6, w - 12, h - 12); }
    ctx.fillStyle = fg; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = opts.font ?? `800 ${Math.round(h * 0.5)}px "Helvetica Neue", Arial, sans-serif`;
    ctx.fillText(text, w / 2, h / 2 + 2, w - 24);
  });
}

// ---------------------------------------------------------------- props

export function sign(parent: THREE.Object3D, text: string, x: number, y: number, z: number, ry: number, width: number, bg: string, fg: string, neon = false) {
  const texture = labelTexture(text, bg, fg, { w: 512, h: 128 });
  const material = neon
    ? new THREE.MeshStandardMaterial({ map: texture, emissive: '#ffffff', emissiveMap: texture, emissiveIntensity: 0.9, roughness: 0.5 })
    : new THREE.MeshStandardMaterial({ map: texture, roughness: 0.6 });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, width / 4), material);
  mesh.position.set(x, y, z); mesh.rotation.y = ry;
  parent.add(mesh);
  return mesh;
}

/** A block of a building with a window facade on its four sides and a flat roof. */
export function block(parent: THREE.Object3D, x0: number, z0: number, x1: number, z1: number, h: number, facade: THREE.Texture, wallColor: string, roof = '#3a3a3a', windowSize = 3) {
  const w = x1 - x0, d = z1 - z0;
  const side = (len: number) => { const t = facade.clone(); t.needsUpdate = true; t.repeat.set(Math.max(1, Math.round(len / windowSize / 2)), Math.max(1, Math.round(h / windowSize / 2))); return t; };
  const mats = [w, w, d, d].map(len => new THREE.MeshStandardMaterial({ map: side(len), color: wallColor, roughness: 0.82 }));
  const roofMat = solid(roof, 0.9);
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [mats[2], mats[3], roofMat, roofMat, mats[0], mats[1]]);
  mesh.position.set((x0 + x1) / 2, h / 2, (z0 + z1) / 2);
  mesh.castShadow = true; mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

export function umbrella(parent: THREE.Object3D, x: number, z: number, color: string, stripe = '#ffffff', h = 2.3) {
  parent.add(cylinder(0.04, 0.04, h, solid('#d8d2c4', 0.4, 0.3), x, h / 2, z, 6));
  const tex = canvas(128, 16, ctx => { for (let i = 0; i < 8; i++) { ctx.fillStyle = i % 2 ? stripe : color; ctx.fillRect(i * 16, 0, 16, 16); } });
  const canopy = new THREE.Mesh(new THREE.ConeGeometry(1.35, 0.55, 16, 1, true), new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide, roughness: 0.8 }));
  canopy.position.set(x, h + 0.05, z); canopy.castShadow = true;
  parent.add(canopy);
}

export function streetLamp(parent: THREE.Object3D, x: number, z: number, lamps: THREE.MeshStandardMaterial[], h = 4.2, color = '#ffd99a') {
  parent.add(cylinder(0.06, 0.09, h, solid('#26292c', 0.5, 0.5), x, h / 2, z, 8));
  const bulb = glow(color, 1.6);
  lamps.push(bulb);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), bulb);
  head.position.set(x, h + 0.1, z);
  parent.add(head);
}

/** A soft light pool on the ground (no real light: cheap). */
export function lightPool(parent: THREE.Object3D, x: number, z: number, radius: number, color: string, opacity = 0.28) {
  const tex = canvas(128, 128, ctx => {
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2, radius * 2), new THREE.MeshBasicMaterial({ map: tex, color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending }));
  mesh.rotation.x = -Math.PI / 2; mesh.position.set(x, 0.03, z);
  parent.add(mesh);
}

/** A flat ground piece with a repeating texture. */
export function ground(parent: THREE.Object3D, x0: number, z0: number, x1: number, z1: number, texture: THREE.Texture | null, color: string, repeat = 6, y = 0, roughness = 0.95) {
  const t = texture ? texture.clone() : null;
  if (t) { t.needsUpdate = true; t.repeat.set((x1 - x0) / repeat, (z1 - z0) / repeat); }
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), new THREE.MeshStandardMaterial({ map: t, color: t ? '#ffffff' : color, roughness }));
  if (t) (mesh.material as THREE.MeshStandardMaterial).color.set(color);
  mesh.rotation.x = -Math.PI / 2; mesh.position.set((x0 + x1) / 2, y, (z0 + z1) / 2);
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

/** Water with a slowly moving shimmer; returns the material to animate. */
export function water(parent: THREE.Object3D, x0: number, z0: number, x1: number, z1: number, deep: string, light: string, y = -0.05) {
  const tex = canvas(256, 256, ctx => {
    ctx.fillStyle = deep; ctx.fillRect(0, 0, 256, 256);
    const rand = random(7);
    ctx.strokeStyle = light; ctx.lineWidth = 2;
    for (let i = 0; i < 60; i++) {
      ctx.globalAlpha = 0.15 + rand() * 0.35;
      const x = rand() * 256, y = rand() * 256, len = 10 + rand() * 30;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + len / 2, y - 3, x + len, y); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }, true);
  tex.repeat.set((x1 - x0) / 14, (z1 - z0) / 14);
  const material = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.18, metalness: 0.15 });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), material);
  mesh.rotation.x = -Math.PI / 2; mesh.position.set((x0 + x1) / 2, y, (z0 + z1) / 2);
  mesh.receiveShadow = true;
  parent.add(mesh);
  return tex;
}

/** The white circle of a spot, with a floating gem above it. */
export function spotRing(parent: THREE.Object3D, x: number, z: number) {
  const material = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.95, depthWrite: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(1.15, 1.42, 40), material);
  ring.rotation.x = -Math.PI / 2; ring.position.set(x, 0.04, z);
  parent.add(ring);
  const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.2, 0), new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#ffe28a', emissiveIntensity: 0.9 }));
  gem.position.set(x, 2.5, z);
  parent.add(gem);
  return { ring, gem, material };
}

// ---------------------------------------------------------------- people

const lookOf = (seed: number, override: Partial<Look> = {}): Look => ({ ...randomLook(seed), ...override });

export function makeTalker(parent: THREE.Object3D, spot: string | null, x: number, z: number, heading: number, seed: number, look: Partial<Look> = {}, pose = 'stand', mood = 'smile', shadows = false): Talker {
  const full = lookOf(seed, look);
  const person = createPerson(full, shadows);
  setPose(person, pose);
  setMood(person, mood);
  person.root.position.set(x, 0, z);
  person.root.rotation.y = heading;
  person.attention = spot ? 1 : 0.4;
  if (!shadows) addBlobShadow(person);
  parent.add(person.root);
  return { person, spot, x, z, heading, seed, body: String(full.body ?? 'm'), baseMood: mood, seated: ['sit', 'ground', 'swing'].includes(pose) };
}

export function makeWalker(parent: THREE.Object3D, path: { x: number; z: number }[], seed: number, speed = 1.2, look: Partial<Look> = {}, shadows = false): Walker {
  const full = lookOf(seed, look);
  const person = createPerson(full, shadows);
  setPose(person, 'walk');
  if (!shadows) addBlobShadow(person);
  parent.add(person.root);
  const at = random(seed)() * path.length;
  const walker: Walker = { person, path, speed, at, x: path[0].x, z: path[0].z, heading: 0, seed, body: String(full.body ?? 'm'), pause: 0, moving: true };
  stepWalker(walker, 0);
  return walker;
}

/** Walkers loop along their path; they stop a moment when someone blocks them. */
export function stepWalker(w: Walker, dt: number, blocked = false) {
  const n = w.path.length;
  if (blocked) { w.pause = 0.6; }
  if (w.pause > 0) { w.pause -= dt; w.moving = false; animatePerson(w.person, dt, 0); return; }
  w.moving = true;
  const i = Math.floor(w.at) % n, j = (i + 1) % n;
  const a = w.path[i], b = w.path[j];
  const len = Math.hypot(b.x - a.x, b.z - a.z) || 1;
  w.at = (w.at + (w.speed * dt) / len) % n;
  const k = w.at - Math.floor(w.at);
  const ii = Math.floor(w.at) % n, jj = (ii + 1) % n;
  const p = w.path[ii], q = w.path[jj];
  w.x = p.x + (q.x - p.x) * k; w.z = p.z + (q.z - p.z) * k;
  const want = Math.atan2(q.x - p.x, q.z - p.z);
  let diff = want - w.heading; while (diff > Math.PI) diff -= Math.PI * 2; while (diff < -Math.PI) diff += Math.PI * 2;
  w.heading += diff * Math.min(1, dt * 6);
  w.person.root.position.set(w.x, 0, w.z);
  w.person.root.rotation.y = w.heading;
  animatePerson(w.person, dt, w.speed);
}

/**
 * A spot with its person: the circle at (x, z) and whoever talks there
 * `dist` metres away in the direction `angle`, facing the circle; the mascot
 * on the circle faces them back.
 */
export function spotWith(parent: THREE.Object3D, spots: SpotPlace[], talkers: Talker[], id: string, x: number, z: number, angle: number, seed: number, look: Partial<Look>, pose = 'stand', mood = 'smile', shadows = false, dist = 1.9) {
  spots.push({ id, x, z, heading: angle });
  const talker = makeTalker(parent, id, x + Math.sin(angle) * dist, z + Math.cos(angle) * dist, angle + Math.PI, seed, look, pose, mood, shadows);
  talkers.push(talker);
  return talker;
}

/** Someone who is just there: sunbathing, sitting at a table, chatting. */
export function extra(parent: THREE.Object3D, talkers: Talker[], x: number, z: number, heading: number, seed: number, look: Partial<Look> = {}, pose = 'stand', mood = 'smile', shadows = false) {
  const talker = makeTalker(parent, null, x, z, heading, seed, look, pose, mood, shadows);
  talkers.push(talker);
  return talker;
}

/** A painted wall: big shapes, stripes and an eye or two, never the same twice. */
export function muralTexture(seed: number, palette: string[], w = 512, h = 256) {
  const rand = random(seed);
  const pick = () => palette[Math.floor(rand() * palette.length) % palette.length];
  return canvas(w, h, ctx => {
    ctx.fillStyle = pick(); ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 7; i++) {
      ctx.fillStyle = pick();
      ctx.beginPath();
      const cx = rand() * w, cy = rand() * h, r = 40 + rand() * 120;
      if (rand() < 0.5) ctx.arc(cx, cy, r, 0, Math.PI * 2);
      else { ctx.moveTo(cx - r, cy + r); ctx.quadraticCurveTo(cx, cy - r * 1.6, cx + r, cy + r); }
      ctx.fill();
    }
    ctx.lineWidth = 10;
    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = pick();
      ctx.beginPath(); ctx.moveTo(0, rand() * h);
      for (let x = 0; x <= w; x += 64) ctx.lineTo(x, rand() * h);
      ctx.stroke();
    }
    for (let i = 0; i < 2; i++) {
      const cx = 80 + rand() * (w - 160), cy = 60 + rand() * (h - 120), r = 26 + rand() * 20;
      ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.ellipse(cx, cy, r * 1.6, r, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = pick(); ctx.beginPath(); ctx.arc(cx, cy, r * 0.75, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#111111'; ctx.beginPath(); ctx.arc(cx, cy, r * 0.35, 0, Math.PI * 2); ctx.fill();
    }
  });
}

/** A flat picture on a wall (murals, posters, menus). */
export function panel(parent: THREE.Object3D, texture: THREE.Texture, x: number, y: number, z: number, ry: number, w: number, h: number, emissive = 0) {
  const material = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.85, ...(emissive ? { emissive: '#ffffff', emissiveMap: texture, emissiveIntensity: emissive } : {}) });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), material);
  mesh.position.set(x, y, z); mesh.rotation.y = ry;
  parent.add(mesh);
  return mesh;
}

/** Vertical neon tube (an art deco fin, a bar front). Returns its material to flicker. */
export function neonBar(parent: THREE.Object3D, x: number, y: number, z: number, w: number, h: number, d: number, color: string, intensity = 1.6) {
  const material = glow(color, intensity);
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return material;
}

// ---------------------------------------------------------------- bubbles

export function createBubbles(parent: THREE.Object3D) {
  const live: { sprite: THREE.Sprite; until: number; who: Talker | Walker }[] = [];
  let now = 0;
  function bubble(text: string, yell: boolean) {
    const tex = canvas(512, 128, ctx => {
      ctx.fillStyle = yell ? 'rgba(196,30,30,.96)' : 'rgba(255,255,255,.95)';
      ctx.beginPath(); ctx.roundRect(8, 8, 496, 92, 26); ctx.fill();
      ctx.beginPath(); ctx.moveTo(232, 98); ctx.lineTo(256, 124); ctx.lineTo(272, 98); ctx.fill();
      ctx.fillStyle = yell ? '#ffffff' : '#18212b';
      ctx.font = `${yell ? 800 : 600} ${text.length > 30 ? 25 : 31}px "Helvetica Neue", Arial, sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(text.length > 44 ? text.slice(0, 43) + '…' : text, 256, 54, 470);
    });
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: true, toneMapped: false }));
    sprite.scale.set(2.3, 0.58, 1);
    return sprite;
  }
  const drop = (i: number) => { const b = live[i]; b.sprite.removeFromParent(); b.sprite.material.map?.dispose(); b.sprite.material.dispose(); live.splice(i, 1); };
  return {
    say(who: Talker | Walker, text: string, seconds = 3.4, yell = false) {
      const old = live.findIndex(b => b.who === who);
      if (old >= 0) drop(old);
      const sprite = bubble(text, yell);
      parent.add(sprite);
      live.push({ sprite, until: now + seconds, who });
    },
    update(t: number) {
      now = t;
      for (let i = live.length - 1; i >= 0; i--) {
        const b = live[i];
        if (t > b.until) { drop(i); continue; }
        b.sprite.position.set(b.who.person.root.position.x, 2.35, b.who.person.root.position.z);
      }
    },
  };
}

// ---------------------------------------------------------------- disposal

/** Frees every geometry, material and texture under a group (zones are rebuilt on the next visit). */
export function disposeGroup(root: THREE.Object3D) {
  const textures = new Set<THREE.Texture>();
  root.traverse(object => {
    const mesh = object as THREE.Mesh;
    mesh.geometry?.dispose();
    const material = mesh.material as THREE.Material | THREE.Material[] | undefined;
    for (const m of Array.isArray(material) ? material : material ? [material] : []) {
      for (const value of Object.values(m)) if (value instanceof THREE.Texture) textures.add(value);
      m.dispose();
    }
  });
  textures.forEach(t => t.dispose());
  root.removeFromParent();
}

// ---------------------------------------------------------------- people never inside things

const inside = (solids: Box[], x: number, z: number, margin: number) =>
  solids.find(b => (b.top == null || b.top > 0.6) && x > b.x0 - margin && x < b.x1 + margin && z > b.z0 - margin && z < b.z1 + margin);

/**
 * Nobody stands inside an object (owner rule, 2026-10-21): a standing person
 * caught in a solid steps out to the nearest free side, and a walker whose
 * path crosses one stays home. Seated people sit on their chair or bench.
 */
export function keepPeopleClear(scene: RegionScene) {
  for (const t of scene.talkers) {
    if (t.seated) continue;
    for (let tries = 0; tries < 4; tries++) {
      const b = inside(scene.solids, t.x, t.z, 0.3);
      if (!b) break;
      const exits = [
        { x: b.x0 - 0.45, z: t.z, d: t.x - b.x0 }, { x: b.x1 + 0.45, z: t.z, d: b.x1 - t.x },
        { x: t.x, z: b.z0 - 0.45, d: t.z - b.z0 }, { x: t.x, z: b.z1 + 0.45, d: b.z1 - t.z },
      ].sort((p, q) => p.d - q.d);
      const out = exits.find(e => !inside(scene.solids, e.x, e.z, 0.3)) ?? exits[0];
      t.x = out.x; t.z = out.z;
      t.person.root.position.set(t.x, t.person.root.position.y, t.z);
    }
  }
  scene.walkers = scene.walkers.filter(w => {
    const blocked = w.path.some((p, i) => {
      const q = w.path[(i + 1) % w.path.length];
      const steps = Math.ceil(Math.hypot(q.x - p.x, q.z - p.z) / 0.5);
      for (let k = 0; k <= steps; k++) if (inside(scene.solids, p.x + ((q.x - p.x) * k) / steps, p.z + ((q.z - p.z) * k) / steps, 0.25)) return true;
      return false;
    });
    if (blocked) w.person.root.removeFromParent();
    return !blocked;
  });
  return scene;
}
