// Más allá · what the three places share: the scene contract, skies painted
// on a dome, floating particles (golden motes in the Cielo, embers and ash in
// the Infierno, stars in the Umbral), the lava and the light water shaders,
// flame sprites, carved signs and the people of each place from layout.mjs.
import * as THREE from 'three';
import { canvas, random, type Box, type Light, type RegionScene, type Talker, type Walker } from '../mundo-3d/kit3d';
import { CAST, spotById } from './story.mjs';
import { layoutOf, voicesFor } from './layout.mjs';
import { animateFigure, faceAura, softGlowTexture, talkerOf, walkerOf, type Kind } from './figures3d';

export type Portal = { to: string; x: number; z: number; r: number };
/** A place of the other side: the kit's region contract plus its portals and the hourglass. */
/** A walker who has a voice (voces.mjs): their circle walks with them. */
export type VoiceWalker = Walker & { voice?: string };
export type Place3D = RegionScene & {
  id: string;
  /** The circles of the voices that stand still (people and places). */
  voices: { id: string; x: number; z: number; heading: number }[];
  portals: Portal[];
  final: { x: number; z: number; r: number } | null;
  /** The aura of every figure faces the camera; called once per frame. */
  face: (camera: THREE.Camera) => void;
};

// ---------------------------------------------------------------- sky and particles

/** A dome painted with a vertical gradient (and optional clouds or smoke on it). */
export function skyDome(stops: [number, string][], radius = 420, paint?: (ctx: CanvasRenderingContext2D, w: number, h: number) => void) {
  const tex = canvas(1024, 512, ctx => {
    const g = ctx.createLinearGradient(0, 0, 0, 512);
    for (const [at, color] of stops) g.addColorStop(at, color);
    ctx.fillStyle = g; ctx.fillRect(0, 0, 1024, 512);
    paint?.(ctx, 1024, 512);
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 24), new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false, depthWrite: false, toneMapped: false }));
  dome.renderOrder = -10;
  return dome;
}

/** Soft points that drift: motes, embers, ash or stars. They follow the player around. */
export function particles(count: number, opts: { color: string; size: number; area: number; height: [number, number]; rise: number; sway: number; opacity: number; additive?: boolean }) {
  const pos = new Float32Array(count * 3), seeds = new Float32Array(count);
  const r = random(count * 7 + 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (r() - 0.5) * opts.area;
    pos[i * 3 + 1] = opts.height[0] + r() * (opts.height[1] - opts.height[0]);
    pos[i * 3 + 2] = (r() - 0.5) * opts.area;
    seeds[i] = r() * 100;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color: opts.color, size: opts.size, map: softGlowTexture() ?? undefined, transparent: true, opacity: opts.opacity, depthWrite: false, blending: opts.additive === false ? THREE.NormalBlending : THREE.AdditiveBlending, sizeAttenuation: true, toneMapped: false });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  const span = opts.height[1] - opts.height[0];
  return {
    points,
    update(t: number, dt: number, cx: number, cz: number) {
      const a = geo.attributes.position as THREE.BufferAttribute;
      const half = opts.area / 2;
      for (let i = 0; i < count; i++) {
        let x = a.getX(i), y = a.getY(i), z = a.getZ(i);
        y += opts.rise * dt * (0.6 + (seeds[i] % 1) * 0.8);
        x += Math.sin(t * 0.7 + seeds[i]) * opts.sway * dt;
        z += Math.cos(t * 0.6 + seeds[i] * 1.3) * opts.sway * dt;
        if (y > opts.height[1]) y -= span; else if (y < opts.height[0]) y += span;
        // Keep the cloud of particles centred on the player.
        if (x - cx > half) x -= opts.area; else if (cx - x > half) x += opts.area;
        if (z - cz > half) z -= opts.area; else if (cz - z > half) z += opts.area;
        a.setXYZ(i, x, y, z);
      }
      a.needsUpdate = true;
    },
  };
}

// ---------------------------------------------------------------- shaders

const noiseGLSL = /* glsl */`
  float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float n(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(h(i), h(i+vec2(1,0)), u.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), u.x), u.y); }
  float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ v += a*n(p); p = p*2.03 + 1.7; a *= 0.5; } return v; }
`;
/** Molten rock: dark crust drifting over a white-hot core. */
export function lavaMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: /* glsl */`varying vec2 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */`uniform float uTime; varying vec2 vW; ${noiseGLSL}
      void main(){
        vec2 p = vW * 0.18;
        float flow = fbm(p + vec2(uTime*0.05, uTime*0.11));
        float crust = fbm(p*2.2 - vec2(uTime*0.07, -uTime*0.03) + flow*1.8);
        float heat = smoothstep(0.35, 0.75, flow + (0.5 - crust) * 0.9);
        vec3 dark = vec3(0.08, 0.015, 0.01), red = vec3(0.9, 0.12, 0.02), orange = vec3(1.25, 0.42, 0.06), white = vec3(1.7, 1.05, 0.35);
        vec3 c = mix(dark, red, smoothstep(0.1, 0.45, heat));
        c = mix(c, orange, smoothstep(0.45, 0.8, heat));
        c = mix(c, white, smoothstep(0.9, 1.0, heat) * 0.45);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
}
/** Water of light: the river of forgetting, slow and silver. */
export function lightWaterMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    transparent: true,
    vertexShader: /* glsl */`varying vec2 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */`uniform float uTime; varying vec2 vW; ${noiseGLSL}
      void main(){
        vec2 p = vW * 0.25;
        float a = fbm(p + vec2(uTime*0.18, 0.0));
        float b = fbm(p*3.0 - vec2(uTime*0.25, uTime*0.05));
        float glint = smoothstep(0.72, 0.9, b * a * 1.7);
        vec3 deep = vec3(0.45, 0.62, 0.86), pale = vec3(0.86, 0.94, 1.1);
        vec3 c = mix(deep, pale, a) + glint * vec3(1.2, 1.1, 0.8);
        gl_FragColor = vec4(c, 0.88);
      }`,
  });
}
/** Ground with glowing cracks (the Infierno) or with soft veins of gold (the Cielo). */
export function veinTexture(base: string, vein: string, seed: number, size = 512, count = 60, width = 2) {
  const r = random(seed);
  return canvas(size, size, ctx => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 1800; i++) { ctx.fillStyle = `rgba(255,255,255,${r() * 0.05})`; ctx.fillRect(r() * size, r() * size, 2, 2); }
    ctx.strokeStyle = vein; ctx.lineCap = 'round';
    for (let i = 0; i < count; i++) {
      let x = r() * size, y = r() * size;
      ctx.lineWidth = width * (0.4 + r());
      ctx.beginPath(); ctx.moveTo(x, y);
      for (let k = 0; k < 6; k++) { x += (r() - 0.5) * 70; y += (r() - 0.5) * 70; ctx.lineTo(x, y); }
      ctx.stroke();
    }
  }, true);
}

type Fissure = { pts: Array<[number, number]>; w: number };
/** Organic lines that wander and branch, like cracks in rock or veins in marble. */
function fissures(seed: number, size: number, count: number): Fissure[] {
  const paths: Fissure[] = [];
  const r = random(seed);
  const branch = (x: number, y: number, angle: number, len: number, w: number, depth: number) => {
    const pts: Array<[number, number]> = [[x, y]];
    for (let k = 0; k < len; k++) {
      angle += (r() - 0.5) * 0.7;
      x += Math.cos(angle) * 9; y += Math.sin(angle) * 9; pts.push([x, y]);
      if (depth < 2 && r() < 0.06) branch(x, y, angle + (r() < 0.5 ? -1 : 1) * (0.6 + r() * 0.6), Math.floor(len * 0.45), w * 0.6, depth + 1);
    }
    paths.push({ pts, w });
  };
  for (let i = 0; i < count; i++) branch(r() * size, r() * size, r() * Math.PI * 2, 26 + Math.floor(r() * 30), 1.6 + r() * 2.2, 0);
  return paths;
}
function strokeFissures(ctx: CanvasRenderingContext2D, paths: Fissure[], style: string, scale: number, blur = 0, glow = '') {
  ctx.strokeStyle = style; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.shadowBlur = blur; ctx.shadowColor = glow;
  for (const p of paths) {
    ctx.lineWidth = p.w * scale; ctx.beginPath(); ctx.moveTo(p.pts[0][0], p.pts[0][1]);
    for (let i = 1; i < p.pts.length - 1; i++) { const [x, y] = p.pts[i], [nx, ny] = p.pts[i + 1]; ctx.quadraticCurveTo(x, y, (x + nx) / 2, (y + ny) / 2); }
    ctx.stroke();
  }
  ctx.shadowBlur = 0;
}
/** Soft blotches of light and shade, so a floor never reads as one flat colour. */
function mottle(ctx: CanvasRenderingContext2D, size: number, seed: number, count: number, light: string, dark: string, grain: string) {
  const n = random(seed);
  for (let i = 0; i < count; i++) {
    const x = n() * size, y = n() * size, rad = 20 + n() * 90;
    const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
    g.addColorStop(0, n() < 0.5 ? light : dark); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(x - rad, y - rad, rad * 2, rad * 2);
  }
  for (let i = 0; i < count * 30; i++) { ctx.fillStyle = n() < 0.5 ? grain : 'rgba(0,0,0,.04)'; ctx.globalAlpha = n(); ctx.fillRect(n() * size, n() * size, 1 + n() * 2, 1 + n() * 2); }
  ctx.globalAlpha = 1;
}

/** Volcanic crust for the Infierno: cooled basalt in irregular plates, with
 *  thin organic fissures that glow from below (a soft halo, a hot core). The
 *  same seed draws the colour map and the glow map, so they line up. */
export function crustTextures(seed: number, size = 1024) {
  const paths = fissures(seed, size, 14);
  const map = canvas(size, size, ctx => {
    ctx.fillStyle = '#17100e'; ctx.fillRect(0, 0, size, size);
    mottle(ctx, size, seed + 1, 260, 'rgba(60,46,40,.35)', 'rgba(5,3,3,.45)', 'rgba(255,235,220,.07)');
    strokeFissures(ctx, paths, '#0a0505', 3.2);
    strokeFissures(ctx, paths, '#5a1a08', 1.1);
  }, true);
  const glow = canvas(size, size, ctx => {
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, size, size);
    strokeFissures(ctx, paths, 'rgba(140,30,4,.55)', 5, 18, 'rgba(255,80,10,.9)');
    strokeFissures(ctx, paths, '#ff6a1a', 1.2, 6, '#ff9a40');
    strokeFissures(ctx, paths, '#ffd27a', 0.35);
  }, true);
  return { map, glow };
}

/** The floor of the Cielo: a cloud seen from very close, big soft billows of
 *  white with a faint lavender in the hollows, and a rare thread of gold. */
export function cloudTexture(seed: number, size = 1024) {
  const paths = fissures(seed, size, 4);
  return canvas(size, size, ctx => {
    const n = random(seed + 2);
    ctx.fillStyle = '#f3efe9'; ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 70; i++) {
      const x = n() * size, y = n() * size, rad = 140 + n() * 220, hollow = n() < 0.45;
      for (const [dx, dy] of [[0, 0], [size, 0], [-size, 0], [0, size], [0, -size]]) {
        const g = ctx.createRadialGradient(x + dx, y + dy, 0, x + dx, y + dy, rad);
        g.addColorStop(0, hollow ? 'rgba(200,192,222,.09)' : 'rgba(255,255,255,.22)'); g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g; ctx.fillRect(x + dx - rad, y + dy - rad, rad * 2, rad * 2);
      }
    }
    strokeFissures(ctx, paths, 'rgba(196,156,84,.18)', 2.4, 8, 'rgba(214,176,100,.3)');
    strokeFissures(ctx, paths, 'rgba(196,152,70,.5)', 0.45);
  }, true);
}

/** Slabs of polished white marble for the paths: joints of gold, a tone per slab, a vein here and there. */
export function slabTexture(seed: number, size = 512) {
  const paths = fissures(seed, size, 3);
  return canvas(size, size, ctx => {
    const n = random(seed + 3);
    const rows = 4, h = size / rows;
    for (let row = 0; row < rows; row++) {
      const v = 238 + Math.floor(n() * 12);
      ctx.fillStyle = `rgb(${v},${v - 4},${v - 11})`; ctx.fillRect(0, row * h, size, h);
      const g = ctx.createLinearGradient(0, row * h, size, row * h + h);
      g.addColorStop(0, 'rgba(255,255,255,.25)'); g.addColorStop(0.5, 'rgba(255,255,255,0)'); g.addColorStop(1, 'rgba(210,200,190,.18)');
      ctx.fillStyle = g; ctx.fillRect(0, row * h, size, h);
    }
    strokeFissures(ctx, paths, 'rgba(150,140,130,.25)', 0.5);
    ctx.fillStyle = 'rgba(190,150,80,.75)';
    for (let row = 0; row <= rows; row++) ctx.fillRect(0, row * h - 1.5, size, 3);
    ctx.fillRect(size / 2 - 1.5, 0, 3, size);
  }, true);
}

// ---------------------------------------------------------------- fire

let flameTex: THREE.Texture | null = null;
function flameTexture() {
  flameTex ??= canvas(128, 256, ctx => {
    const g = ctx.createRadialGradient(64, 190, 4, 64, 160, 120);
    g.addColorStop(0, 'rgba(255,245,200,1)'); g.addColorStop(0.25, 'rgba(255,170,40,.95)'); g.addColorStop(0.6, 'rgba(220,50,10,.5)'); g.addColorStop(1, 'rgba(120,10,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.moveTo(64, 6); ctx.bezierCurveTo(110, 90, 128, 160, 64, 250); ctx.bezierCurveTo(0, 160, 18, 90, 64, 6); ctx.fill();
  });
  return flameTex;
}
/** A fire of a few flame sprites that flicker and lick upwards. */
export function fire(parent: THREE.Object3D, x: number, y: number, z: number, size = 1, n = 5) {
  const group = new THREE.Group();
  group.position.set(x, y, z);
  const flames: { s: THREE.Sprite; seed: number }[] = [];
  for (let i = 0; i < n; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: flameTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, color: i % 2 ? '#ffb070' : '#ffffff' }));
    const seed = i * 1.7 + x * 0.3;
    s.position.set((Math.sin(seed) * 0.3) * size, 0.6 * size, (Math.cos(seed) * 0.3) * size);
    s.scale.set(0.9 * size, 1.8 * size, 1);
    group.add(s); flames.push({ s, seed });
  }
  parent.add(group);
  return (t: number) => {
    for (const f of flames) {
      const k = 0.75 + 0.35 * Math.sin(t * 9 + f.seed * 3) + 0.15 * Math.sin(t * 23 + f.seed);
      f.s.scale.set(0.8 * size * (1.1 - k * 0.2), 1.8 * size * k, 1);
      f.s.position.y = 0.55 * size * k + 0.1;
      f.s.material.rotation = Math.sin(t * 3 + f.seed) * 0.15;
    }
  };
}

// ---------------------------------------------------------------- circles

/**
 * The circle you stand on to talk. The twelve encounters keep the big white
 * one with its gem; the voices have a smaller golden one. In the Infierno every
 * circle is a ring of flames that licks upwards (owner request 2026-10-30).
 * `group` sits at (x, z), so a walker's circle can follow them.
 */
export function talkCircle(parent: THREE.Object3D, x: number, z: number, opts: { flames: boolean; voice: boolean }) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  const r0 = opts.voice ? 0.98 : 1.15, r1 = opts.voice ? 1.18 : 1.42;
  const color = opts.flames ? '#ff7a1a' : opts.voice ? '#ffd98a' : '#ffffff';
  const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95, depthWrite: false, toneMapped: !opts.flames });
  const ring = new THREE.Mesh(new THREE.RingGeometry(r0, r1, 40), material);
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.04;
  group.add(ring);
  const gem = new THREE.Mesh(opts.voice ? new THREE.SphereGeometry(0.13, 10, 8) : new THREE.OctahedronGeometry(0.2, 0), new THREE.MeshStandardMaterial({ color: opts.flames ? '#ffb070' : '#ffffff', emissive: opts.flames ? '#ff5a10' : '#ffe28a', emissiveIntensity: 0.9 }));
  gem.position.y = opts.voice ? 2.3 : 2.5;
  group.add(gem);
  const flames: { s: THREE.Sprite; a: number; seed: number }[] = [];
  if (opts.flames) {
    const n = opts.voice ? 12 : 16, size = opts.voice ? 0.42 : 0.55;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: flameTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, color: i % 2 ? '#ffb070' : '#ffffff' }));
      s.position.set(Math.sin(a) * (r0 + r1) / 2, size * 0.6, Math.cos(a) * (r0 + r1) / 2);
      s.scale.set(size * 0.8, size * 1.7, 1);
      group.add(s); flames.push({ s, a, seed: i * 2.3 + x });
    }
  }
  parent.add(group);
  let lit = 1;
  return {
    group, ring, gem, material,
    /** Done circles go grey (and their fire goes down to embers). */
    setDone(done: boolean) {
      material.color.set(done ? (opts.flames ? '#6a3a2a' : '#9aa8b0') : color);
      material.opacity = done ? 0.5 : 0.95;
      gem.visible = !done;
      lit = done ? 0.35 : 1;
    },
    animate(t: number, dt: number) {
      gem.rotation.y += dt * 1.6;
      gem.position.y = (opts.voice ? 2.3 : 2.5) + Math.sin(t * 2 + x) * 0.12;
      for (const f of flames) {
        const k = (0.75 + 0.3 * Math.sin(t * 9 + f.seed * 3) + 0.15 * Math.sin(t * 23 + f.seed)) * lit;
        f.s.scale.y = (opts.voice ? 0.42 : 0.55) * 1.7 * k;
        f.s.position.y = (opts.voice ? 0.42 : 0.55) * 0.5 * k + 0.05;
        f.s.material.rotation = Math.sin(t * 3 + f.seed) * 0.15;
      }
    },
  };
}
export type TalkCircle = ReturnType<typeof talkCircle>;

// ---------------------------------------------------------------- signs

/** Big carved letters on a plate: «EL CIELO», «AQUÍ SE ABANDONA TODA ESPERANZA». */
export function carved(text: string, opts: { w: number; h: number; bg: string; fg: string; glowColor?: string; font?: string; sub?: string }) {
  const W = 1024, H = Math.round(1024 * opts.h / opts.w);
  const tex = canvas(W, H, ctx => {
    ctx.fillStyle = opts.bg; ctx.fillRect(0, 0, W, H);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = opts.font ?? `700 ${Math.round(H * (opts.sub ? 0.42 : 0.56))}px Georgia, "Times New Roman", serif`;
    if (opts.glowColor) { ctx.shadowColor = opts.glowColor; ctx.shadowBlur = 28; }
    ctx.fillStyle = opts.fg;
    ctx.fillText(text, W / 2, H * (opts.sub ? 0.4 : 0.54), W * 0.94);
    if (opts.sub) { ctx.font = `italic 400 ${Math.round(H * 0.18)}px Georgia, serif`; ctx.fillText(opts.sub, W / 2, H * 0.8, W * 0.9); }
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(opts.w, opts.h), new THREE.MeshBasicMaterial({ map: tex, transparent: opts.bg === 'transparent' || opts.bg.startsWith('rgba'), toneMapped: false, side: THREE.FrontSide }));
  return m;
}

// ---------------------------------------------------------------- people of a place

/**
 * The people of a place, from its layout: the twelve characters of the
 * encounters with their cast look, the extras and the walkers. Souls glow
 * warm in the Cielo and grey in the Infierno.
 */
export function populate(group: THREE.Group, id: string, warm: boolean, shadows: boolean) {
  const L = layoutOf(id)!;
  const talkers: Talker[] = [];
  const walkers: VoiceWalker[] = [];
  const voices = voicesFor(id);
  L.spots.forEach((s: { id: string; pose: string; talker: { x: number; z: number; heading: number } }, i: number) => {
    const castId = spotCast(s.id);
    const member = CAST[castId];
    const mood = member.kind === 'demon' ? (castId === 'lucero' ? 'neutral' : 'smile') : member.kind === 'angel' ? 'smile' : castId === 'ramiro' || castId === 'valeria' ? 'sad' : 'neutral';
    talkers.push(talkerOf(group, member.kind as Kind, s.id, s.talker.x, s.talker.z, s.talker.heading, 700 + i * 13, member.look, s.pose, mood, warm, shadows));
  });
  for (const e of L.extras as { seed: number; kind: Kind; x: number; z: number; heading: number; pose: string }[]) {
    const mood = e.kind === 'demon' ? 'angry' : e.kind === 'angel' ? 'smile' : warm ? (e.pose === 'hug' ? 'love' : 'smile') : e.pose === 'cry' ? 'sad' : 'worried';
    talkers.push(talkerOf(group, e.kind, voices.find(v => v.extra === e.seed)?.id ?? null, e.x, e.z, e.heading, e.seed, null, e.pose, mood, warm, false));
  }
  for (const w of L.walkers as { seed: number; kind: Kind; speed: number; path: { x: number; z: number }[] }[]) walkers.push(Object.assign(walkerOf(group, w.kind, w.path, w.seed, w.speed, warm), { voice: voices.find(v => v.walker === w.seed)?.id }));
  return { talkers, walkers };
}
// The encounter's character (story.mjs SPOTS).
const spotCast = (id: string) => spotById(id)?.cast[0] ?? '';

/** Everything the runtime needs from a place, with the per-frame life of figures. */
export function finishPlace(id: string, group: THREE.Group, light: Light, talkers: Talker[], walkers: Walker[], extraSolids: Box[], animate: (t: number, dt: number) => void): Place3D {
  const L = layoutOf(id)!;
  const people = [...talkers.map(t => t.person), ...walkers.map(w => w.person)];
  return {
    id, group, light, talkers, walkers,
    bounds: L.bounds,
    solids: [...L.solids, ...extraSolids],
    spawn: L.spawn,
    exit: L.exit ?? { x: 9999, z: 9999 },
    spots: L.spots.map((s: { id: string; x: number; z: number; heading: number }) => ({ id: s.id, x: s.x, z: s.z, heading: s.heading })),
    portals: L.portals,
    voices: voicesFor(id).filter((v: { walker?: number }) => !v.walker) as Place3D['voices'],
    final: L.final ?? null,
    animate(t, dt) { for (const p of people) animateFigure(p, t); animate(t, dt); },
    face(camera) { for (const p of people) faceAura(p, camera); },
  };
}
