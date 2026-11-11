// El mundo en blanco · the paper and the ink. Everything in this world is one
// material: folded paper (flat-shaded, creased, with fibre) that is WHITE
// until ink reaches it. `INK` holds twelve wells, one per encounter: a centre
// on the ground and a radius that grows when that encounter closes. Inside a
// well the paper shows its real colour, washed like watercolour, with the
// darker rim a wash leaves when it dries. Outside it keeps only light and
// shadow, like a model nobody has painted yet.
// The second half is the pencil: a screen pass that draws a graphite line
// where depth breaks (silhouettes and folds), plus grain and a soft vignette.
import * as THREE from 'three';

export const WELLS = 12;
export const INK = {
  wells: { value: Array.from({ length: WELLS }, () => new THREE.Vector3(0, 0, 0)) },
  all: { value: 0 },
};
export const PAPER_WHITE = '#f4f0e6';

const NOISE = /* glsl */`
  float inkHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float inkNoise(vec2 p){
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(inkHash(i), inkHash(i + vec2(1.0, 0.0)), f.x), mix(inkHash(i + vec2(0.0, 1.0)), inkHash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float inkFbm(vec2 p){ return inkNoise(p) * 0.6 + inkNoise(p * 2.3 + 7.1) * 0.3 + inkNoise(p * 5.1 + 3.7) * 0.1; }
`;

export type PaperOptions = {
  side?: THREE.Side;
  /** A drawing on the paper (print, ruled lines): it stays visible, in grey, before the ink comes. */
  map?: THREE.Texture | null;
  /** How much of the paper's own darkness survives without ink (0 = pure white paper). */
  keep?: number;
  emissive?: string;
  emissiveIntensity?: number;
  /** The ground: the big sheet shows the grid of folds it was unfolded from. */
  sheet?: boolean;
  vertexColors?: boolean;
};

/** Folded paper of a colour that only shows where the ink has come back. */
export function paper(color: string, opts: PaperOptions = {}) {
  const m = new THREE.MeshLambertMaterial({
    color, flatShading: true, side: opts.side ?? THREE.FrontSide, map: opts.map ?? null,
    emissive: opts.emissive ?? '#000000', emissiveIntensity: opts.emissiveIntensity ?? 1, vertexColors: Boolean(opts.vertexColors),
  });
  const keep = opts.keep ?? 0, sheet = Boolean(opts.sheet);
  m.onBeforeCompile = shader => {
    shader.uniforms.uInk = INK.wells;
    shader.uniforms.uInkAll = INK.all;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vInkPos;')
      .replace('#include <project_vertex>', /* glsl */`#include <project_vertex>
        { vec4 inkP = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          inkP = instanceMatrix * inkP;
        #endif
        vInkPos = (modelMatrix * inkP).xyz; }`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\nvarying vec3 vInkPos;\nuniform vec3 uInk[${WELLS}];\nuniform float uInkAll;\n${NOISE}`)
      .replace('#include <map_fragment>', /* glsl */`float inkDetail = 1.0;
        #ifdef USE_MAP
          vec4 inkTexel = texture2D(map, vMapUv);
          inkDetail = dot(inkTexel.rgb, vec3(0.299, 0.587, 0.114));
          diffuseColor *= inkTexel;
        #endif`)
      .replace('#include <opaque_fragment>', /* glsl */`#include <opaque_fragment>
        {
          float n = inkFbm(vInkPos.xz * 0.22);
          float reveal = uInkAll;
          for (int i = 0; i < ${WELLS}; i++) {
            vec3 w = uInk[i];
            if (w.z > 0.05) {
              float d = distance(vInkPos.xz, w.xy) + (n - 0.5) * min(7.0, w.z * 0.6);
              reveal = max(reveal, 1.0 - smoothstep(w.z - 2.6, w.z, d));
            }
          }
          vec3 inked = gl_FragColor.rgb;
          vec3 albedo = max(diffuseColor.rgb, vec3(0.035));
          vec3 light = clamp(inked / albedo, 0.0, 1.6);
          float fibre = 0.965 + 0.07 * inkNoise(vInkPos.xz * 9.0 + vInkPos.y * 5.0);
          #ifdef USE_MAP
            float ownL = inkDetail;
          #else
            float ownL = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
          #endif
          float own = mix(1.0, clamp(ownL, 0.0, 1.0), ${keep.toFixed(2)});
          vec3 blank = vec3(0.955, 0.94, 0.9) * light * fibre * (0.42 + 0.58 * own);
          ${sheet ? /* glsl */`
          vec2 g = abs(fract(vInkPos.xz / 12.5) - 0.5);
          float crease = 1.0 - smoothstep(0.0, 0.012, min(g.x, g.y));
          blank *= 1.0 - crease * 0.16; inked *= 1.0 - crease * 0.1;` : ''}
          // Watercolour: pigment gathers in the grain and at the edge of the wash.
          inked *= 0.9 + 0.2 * inkNoise(vInkPos.xz * 1.7 + vInkPos.y);
          float rim = smoothstep(0.02, 0.3, reveal) * (1.0 - smoothstep(0.3, 0.85, reveal));
          inked = mix(inked, inked * vec3(0.5, 0.52, 0.62), rim * 0.55);
          gl_FragColor.rgb = mix(blank, inked * fibre, reveal);
        }`);
  };
  m.customProgramCacheKey = () => `papel-${keep.toFixed(2)}-${sheet ? 1 : 0}`;
  return m;
}

/** Ink itself: eyes, lines, the pencil. It never fades. */
export const inkBlack = () => new THREE.MeshBasicMaterial({ color: '#1d1a24' });

// ---------------------------------------------------------------- folds

type V = [number, number, number];
/** A piece folded by hand: its corners and its faces (each face a fan of triangles). Flat-shaded, both sides. */
export function fold(corners: V[], faces: number[][]) {
  const pos: number[] = [];
  for (const f of faces) for (let i = 1; i < f.length - 1; i++) for (const k of [f[0], f[i], f[i + 1]]) pos.push(...corners[k]);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

/** A folded point from `a` to its tip `b` (a neck, a beak, an ear, a leg): a three-sided cone. */
export function spike(a: V, b: V, width: number, material: THREE.Material, sides = 3) {
  const from = new THREE.Vector3(...a), to = new THREE.Vector3(...b);
  const len = from.distanceTo(to);
  const mesh = new THREE.Mesh(new THREE.ConeGeometry(width, len, sides, 1), material);
  mesh.position.copy(from).lerp(to, 0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), to.clone().sub(from).normalize());
  return mesh;
}

/** A diamond of paper (two pyramids base to base). */
export function gem(sx: number, sy: number, sz: number, material: THREE.Material) {
  const mesh = new THREE.Mesh(new THREE.OctahedronGeometry(1, 0), material);
  mesh.scale.set(sx, sy, sz);
  return mesh;
}

/** Rings joined into a hull (the whale, the dragon's head): every ring is a polygon across z. */
export function loft(rings: { z: number; rx: number; ry: number; y?: number }[], sides = 6) {
  const corners: V[] = [], faces: number[][] = [];
  rings.forEach((r, i) => {
    for (let k = 0; k < sides; k++) {
      const a = (k / sides) * Math.PI * 2 + (i % 2 ? Math.PI / sides : 0);
      corners.push([Math.sin(a) * r.rx, (r.y ?? 0) + Math.cos(a) * r.ry, r.z]);
    }
  });
  for (let i = 0; i < rings.length - 1; i++) for (let k = 0; k < sides; k++) {
    const a = i * sides + k, b = i * sides + (k + 1) % sides, c = (i + 1) * sides + k, d = (i + 1) * sides + (k + 1) % sides;
    if (i % 2) { faces.push([a, c, b], [b, c, d]); } else { faces.push([a, d, b], [a, c, d]); }
  }
  return fold(corners, faces);
}

/** A ball of paper somebody crumpled: every corner pushed in or out. */
export function crumpled(radius: number, seed: number, detail = 1, amount = 0.22) {
  const g = new THREE.IcosahedronGeometry(radius, detail);
  const p = g.attributes.position as THREE.BufferAttribute;
  const moved = new Map<string, number>();
  let s = seed * 9301 + 49297;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  for (let i = 0; i < p.count; i++) {
    const key = `${p.getX(i).toFixed(3)},${p.getY(i).toFixed(3)},${p.getZ(i).toFixed(3)}`;
    if (!moved.has(key)) moved.set(key, 1 + (rnd() - 0.5) * 2 * amount);
    const k = moved.get(key)!;
    p.setXYZ(i, p.getX(i) * k, p.getY(i) * k, p.getZ(i) * k);
  }
  g.computeVertexNormals();
  return g;
}

/** Two ink dots that blink. */
export function eyes(parent: THREE.Object3D, at: V, gap: number, size = 0.05, facing: V = [0, 0, 1]) {
  const out: THREE.Mesh[] = [];
  const mat = inkBlack();
  const side = new THREE.Vector3(...facing).cross(new THREE.Vector3(0, 1, 0)).normalize();
  for (const k of [-1, 1]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(size, 10, 8), mat);
    e.position.set(at[0] + side.x * gap * k, at[1], at[2] + side.z * gap * k);
    parent.add(e); out.push(e);
  }
  return out;
}

export function canvasTexture(w: number, h: number, draw: (ctx: CanvasRenderingContext2D) => void) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d')!);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

/** Yesterday's newspaper: columns of grey lines and a few heavy headlines. */
export function newsprint(seed = 1) {
  return canvasTexture(256, 256, ctx => {
    let s = seed * 7919;
    const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 256, 256);
    for (let col = 0; col < 4; col++) {
      let y = 8;
      while (y < 250) {
        if (rnd() < 0.14) { ctx.fillStyle = '#3a3a3a'; ctx.fillRect(col * 64 + 5, y, 40 + rnd() * 14, 9); y += 15; continue; }
        ctx.fillStyle = '#9a9a9a'; ctx.fillRect(col * 64 + 5, y, 30 + rnd() * 24, 2.4); y += 6;
      }
    }
  });
}

/** A ruled page: faint blue lines and a red margin. */
export function ruled() {
  return canvasTexture(256, 384, ctx => {
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 256, 384);
    ctx.fillStyle = '#b9c6dc';
    for (let y = 40; y < 380; y += 22) ctx.fillRect(0, y, 256, 2);
    ctx.fillStyle = '#d99a9a'; ctx.fillRect(38, 0, 2.5, 384);
  });
}

// ---------------------------------------------------------------- the sky

/** A dome of paper that turns into a watercolour dusk as the ink comes back (`ink` 0–1). */
export function createSky(radius = 380) {
  const uniforms = { uInk: { value: 0 }, uTime: { value: 0 } };
  const material = new THREE.ShaderMaterial({
    uniforms, side: THREE.BackSide, depthWrite: false, fog: false,
    vertexShader: /* glsl */`varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      varying vec3 vDir; uniform float uInk; uniform float uTime;
      ${NOISE}
      void main(){
        float h = clamp(vDir.y, -0.1, 1.0);
        vec2 p = vDir.xz / (0.35 + abs(vDir.y)) * 1.6;
        float wash = inkFbm(p + vec2(uTime * 0.004, 0.0));
        vec3 blank = vec3(0.955, 0.94, 0.905) * (0.97 + 0.05 * wash);
        vec3 low = mix(vec3(1.0, 0.82, 0.62), vec3(0.98, 0.62, 0.55), wash);
        vec3 mid = vec3(0.62, 0.74, 0.92);
        vec3 high = vec3(0.3, 0.42, 0.74);
        vec3 dusk = mix(low, mid, smoothstep(0.02, 0.32, h + (wash - 0.5) * 0.12));
        dusk = mix(dusk, high, smoothstep(0.3, 0.9, h + (wash - 0.5) * 0.2));
        float cloud = smoothstep(0.56, 0.74, inkFbm(p * 1.4 + vec2(uTime * 0.01, 3.0))) * smoothstep(0.02, 0.25, h);
        dusk = mix(dusk, vec3(1.0, 0.95, 0.9), cloud * 0.75);
        // The ink climbs the sky from the horizon, with a torn edge.
        float line = uInk * 1.35 - 0.15 + (wash - 0.5) * 0.3;
        float k = smoothstep(line - 0.18, line, h);
        vec3 c = mix(dusk, blank, k * (1.0 - step(0.999, uInk)));
        float rim = (1.0 - abs(k * 2.0 - 1.0)) * (1.0 - step(0.999, uInk)) * step(0.001, uInk);
        c = mix(c, c * vec3(0.72, 0.74, 0.86), rim * 0.4);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(radius, 40, 20), material);
  dome.renderOrder = -10;
  dome.frustumCulled = false;
  return { dome, uniforms };
}

// ---------------------------------------------------------------- the pencil

/**
 * The world is rendered into a target with its depth; this pass copies it to
 * the screen and draws a graphite line wherever depth breaks, the way a hand
 * would outline a paper model. Grain and a vignette finish the page.
 */
export function createPencil(renderer: THREE.WebGLRenderer) {
  const target = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4, depthTexture: new THREE.DepthTexture(4, 4) });
  const uniforms = {
    tColor: { value: target.texture }, tDepth: { value: target.depthTexture }, uTexel: { value: new THREE.Vector2(1, 1) },
    uNear: { value: 0.1 }, uFar: { value: 900 }, uTime: { value: 0 }, uInk: { value: 0 },
  };
  const material = new THREE.ShaderMaterial({
    uniforms, depthTest: false, depthWrite: false,
    vertexShader: /* glsl */`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
    fragmentShader: /* glsl */`
      varying vec2 vUv; uniform sampler2D tColor; uniform sampler2D tDepth; uniform vec2 uTexel; uniform float uNear, uFar, uTime, uInk;
      ${NOISE}
      float lin(vec2 uv){ float z = texture2D(tDepth, uv).x * 2.0 - 1.0; return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear)); }
      void main(){
        // The hand is never perfectly steady.
        vec2 uv = vUv + (vec2(inkNoise(vUv * 90.0), inkNoise(vUv * 90.0 + 40.0)) - 0.5) * uTexel * 1.6;
        vec3 c = texture2D(tColor, vUv).rgb;
        vec2 o = uTexel * 1.25;
        float d = lin(uv), l = lin(uv - vec2(o.x, 0.0)), r = lin(uv + vec2(o.x, 0.0)), u = lin(uv + vec2(0.0, o.y)), b = lin(uv - vec2(0.0, o.y));
        float jump = max(max(abs(l - d), abs(r - d)), max(abs(u - d), abs(b - d))) / d;
        float bend = abs(l + r + u + b - 4.0 * d) / d;
        float line = max(smoothstep(0.035, 0.09, jump), smoothstep(0.012, 0.035, bend) * 0.75);
        line *= 1.0 - smoothstep(70.0, 170.0, d);
        line *= 0.72 + 0.28 * inkNoise(vUv * 420.0);
        c = mix(c, vec3(0.17, 0.16, 0.22), line * mix(0.62, 0.8, uInk));
        float grain = inkNoise(vUv / uTexel * 0.55) * 0.5 + inkNoise(vUv / uTexel * 0.17 + 9.0) * 0.5;
        c *= 0.955 + 0.07 * grain;
        float v = distance(vUv, vec2(0.5));
        c *= 1.0 - smoothstep(0.45, 0.85, v) * 0.22;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  quad.frustumCulled = false;
  const scene = new THREE.Scene();
  scene.add(quad);
  const flat = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  return {
    uniforms,
    setSize(w: number, h: number) {
      const ratio = renderer.getPixelRatio();
      const W = Math.max(2, Math.floor(w * ratio)), H = Math.max(2, Math.floor(h * ratio));
      target.setSize(W, H);
      uniforms.uTexel.value.set(1 / W, 1 / H);
    },
    render(world: THREE.Scene, camera: THREE.PerspectiveCamera) {
      uniforms.uNear.value = camera.near; uniforms.uFar.value = camera.far;
      renderer.setRenderTarget(target);
      renderer.render(world, camera);
      renderer.setRenderTarget(null);
      renderer.render(scene, flat);
    },
    dispose() { target.depthTexture?.dispose(); target.dispose(); material.dispose(); quad.geometry.dispose(); },
  };
}
