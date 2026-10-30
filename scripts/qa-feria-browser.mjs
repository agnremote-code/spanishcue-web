// La feria de Villaluz · optional real-browser QA (BOARD-DECISION-001 G5(a)
// and the LESSON-DECISION-001 D6 Look-contract render check).
//
// Isolated: esbuild bundles the real FeriaGame / World3D / people3d into a
// temporary folder served from 127.0.0.1. No auth, no production, no Worker:
// /api/progress is answered locally with 204 and nothing else leaves the box.
//
//   node scripts/qa-feria-browser.mjs            # --look and --smoke
//   node scripts/qa-feria-browser.mjs --look     # Look contract renders only
//   node scripts/qa-feria-browser.mjs --smoke    # G5(a) smoke only
//   node scripts/qa-feria-browser.mjs --preview  # 8 s 640×360 H.264 hover clip (needs ffmpeg)
//   node scripts/qa-feria-browser.mjs --hospital-gpu  # Hospital San Casi Vivo: unmount frees the GPU (2026-10-30 repair)
//   node scripts/qa-feria-browser.mjs --cover    # 1200×750 cover candidates + cover.webp (FERIA_COVER=<circle|intro>)
//
// Env: FERIA_QA_OUTPUT (evidence folder), FERIA_QA_LOOK_CIRCLES (Busca
// circles to render, default informacion), FERIA_QA_LOOK_ONLY (shot ids), PLAYWRIGHT_MODULE (path to the
// playwright module when it is not resolvable), CHROMIUM_EXECUTABLE_PATH,
// CHROMIUM_ARGS (JSON array; default forces SwiftShader WebGL).
//
// --look is a SwiftShader render at DPR 1.25 in World3D's real low-power
// path (pointer: coarse → no AA, no shadow maps, no bloom), with the real
// Busca camera (behind the mascot, cluster 5 m ahead → ~8–9 m to the
// figures) and the real default slots. It is NOT the real-device check of
// G5(b)/D6: colours, aliasing and brightness differ on a phone panel.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import { dirname, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { CIRCLES } from '../app/la-feria-de-villaluz/layout.mjs';
import { CONTENT } from '../app/la-feria-de-villaluz/levels.mjs';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const argv = new Set(process.argv.slice(2));
const all = !argv.has('--look') && !argv.has('--smoke') && !argv.has('--cover') && !argv.has('--calls') && !argv.has('--preview') && !argv.has('--hospital-gpu');
const RUN = { look: all || argv.has('--look'), smoke: all || argv.has('--smoke'), cover: argv.has('--cover'), calls: argv.has('--calls'), preview: argv.has('--preview'), hospitalGpu: argv.has('--hospital-gpu') };
const out = resolve(process.env.FERIA_QA_OUTPUT || resolve(repo, '.qa/feria-browser'));
await mkdir(resolve(out, 'look'), { recursive: true });
await mkdir(resolve(out, 'smoke'), { recursive: true });

// ------------------------------------------------------------------ bundle
// One entry: ?harness=look mounts World3D alone with a Busca cluster driven
// by window.__qa; anything else mounts the real FeriaGame.
await build({
  stdin: {
    contents: `import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import FeriaGame from './app/la-feria-de-villaluz/FeriaGame';
import World3D from './app/la-feria-de-villaluz/World3D';
import HospitalWorld from './app/hospital-san-casi-vivo/World3D';
import './app/hospital-san-casi-vivo/hospital.css';
import { placeSet } from './app/la-feria-de-villaluz/layout.mjs';
window.__qa = { stats: null, failed: false, gl: 0, frames: 0 };
// T5: real WebGL draw calls, counted on the context the same way for every
// world (three.js defines render() per instance, so it can't be wrapped).
for (const Ctx of [window.WebGLRenderingContext, window.WebGL2RenderingContext].filter(Boolean)) {
  for (const name of ['drawArrays', 'drawElements', 'drawArraysInstanced', 'drawElementsInstanced', 'drawRangeElements']) {
    const original = Ctx.prototype[name];
    if (original) Ctx.prototype[name] = function (...args) { window.__qa.gl++; return original.apply(this, args); };
  }
}
const tick = () => { window.__qa.frames++; requestAnimationFrame(tick); };
requestAnimationFrame(tick);
function HospitalHarness() {
  const [view, setView] = useState({ floor: 1, sceneId: null });
  const [mounted, setMounted] = useState(true);
  useEffect(() => { window.__qa.hospital = (floor, sceneId) => setView({ floor, sceneId }); window.__qa.hospitalOff = () => setMounted(false); }, []);
  const none = () => {};
  return <main className="hs">{mounted && <HospitalWorld floor={view.floor} via="lift" sceneId={view.sceneId} mood={null} done={[]} paused={false} intro={false}
    onSpot={none} onLift={none} onNear={none} onPerson={none} personId={null} onCry={none} onPose={none} onFail={() => { window.__qa.failed = true; }} />}</main>;
}
function LookHarness() {
  const [busca, setBusca] = useState(null);
  const [intro, setIntro] = useState(false);
  const [circle, setCircle] = useState(null);
  useEffect(() => {
    window.__qa.circle = id => setCircle(id);
    window.__qa.show = (circle, figures) => setBusca(figures ? { circle, placed: placeSet({ figures }, circle) } : null);
    window.__qa.intro = on => setIntro(on);
  }, []);
  return <main className="fv"><World3D circleId={circle} busca={busca} reveal={null} done={[]} paused={false} intro={intro}
    onSpot={() => {}} onNear={() => {}} onPose={() => {}} onFail={() => { window.__qa.failed = true; }} onStats={s => { window.__qa.stats = s; }} /></main>;
}
const q = new URLSearchParams(location.search);
createRoot(document.getElementById('root')).render(q.get('harness') === 'look' ? <LookHarness /> : q.get('harness') === 'hospital' ? <HospitalHarness /> : <FeriaGame />);`,
    resolveDir: repo, loader: 'tsx',
  },
  bundle: true, format: 'esm', splitting: true, outdir: resolve(out, 'assets'), entryNames: 'lesson', chunkNames: 'chunk-[hash]', jsx: 'automatic',
  loader: { '.json': 'json' }, logLevel: 'warning',
  define: { 'process.env.NODE_ENV': '"production"' },
  plugins: [{ name: 'feria-isolated-preview', setup(b) {
    b.onResolve({ filter: /^next\/(link|dynamic)$/ }, args => ({ path: args.path.slice(5), namespace: 'preview' }));
    b.onLoad({ filter: /^link$/, namespace: 'preview' }, () => ({ contents: 'export default function Link({children,...props}){return <a {...props}>{children}</a>}', loader: 'jsx', resolveDir: repo }));
    // next/dynamic(ssr:false, loading) → React.lazy + Suspense with the same loading UI.
    b.onLoad({ filter: /^dynamic$/, namespace: 'preview' }, () => ({ contents: `import React, { lazy, Suspense } from 'react';
export default function dynamic(loader, opts = {}) {
  const Lazy = lazy(() => loader().then(m => ({ default: m.default ?? m })));
  const Loading = opts.loading;
  return function Dynamic(props) { return <Suspense fallback={Loading ? <Loading /> : null}><Lazy {...props} /></Suspense>; };
}`, loader: 'jsx', resolveDir: repo }));
  } }],
});
await writeFile(resolve(out, 'index.html'), '<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Feria QA</title><style>body{margin:0}</style><link rel="stylesheet" href="/assets/lesson.css"><div id="root"></div><script type="module" src="/assets/lesson.js"></script></html>');

const TYPES = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.mp3': 'audio/mpeg', '.webp': 'image/webp', '.png': 'image/png', '.json': 'application/json' };
const missing = new Set();
const server = createServer(async (request, response) => {
  try {
    const path = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (path.includes('..')) { response.writeHead(400).end(); return; }
    // E1 progress: answered locally, never forwarded anywhere.
    if (path === '/api/progress') { response.writeHead(204).end(); return; }
    const file = path === '/' ? resolve(out, 'index.html') : path.startsWith('/assets/') ? resolve(out, path.slice(1)) : resolve(repo, 'public', path.slice(1));
    if (!(await stat(file)).isFile()) throw new Error('not a file');
    response.setHeader('Content-Type', TYPES[extname(file)] ?? 'application/octet-stream');
    response.end(await readFile(file));
  } catch {
    missing.add(new URL(request.url, 'http://localhost').pathname);
    response.writeHead(404).end();
  }
});
await new Promise(done => server.listen(0, '127.0.0.1', done));
const origin = `http://127.0.0.1:${server.address().port}`;

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROMIUM_EXECUTABLE_PATH ? { executablePath: process.env.CHROMIUM_EXECUTABLE_PATH } : {}),
  args: JSON.parse(process.env.CHROMIUM_ARGS || '["--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"]'),
});

const frames = (page, n) => page.evaluate(n => new Promise(done => { let i = 0; const f = () => (++i >= n ? done() : requestAnimationFrame(f)); requestAnimationFrame(f); }), n);

/** Pixel statistics of a PNG, decoded by the browser itself (no image deps). */
async function pixelStats(page, png) {
  return page.evaluate(async b64 => {
    const img = new Image();
    img.src = `data:image/png;base64,${b64}`;
    await img.decode();
    const c = document.createElement('canvas');
    c.width = img.width; c.height = img.height;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const d = ctx.getImageData(0, 0, c.width, c.height).data;
    const colours = new Set();
    let sum = 0, sum2 = 0, n = 0;
    for (let i = 0; i < d.length; i += 16) {
      const l = 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];
      sum += l; sum2 += l * l; n++;
      colours.add((d[i] >> 3) << 10 | (d[i + 1] >> 3) << 5 | (d[i + 2] >> 3));
    }
    const mean = sum / n;
    return { width: c.width, height: c.height, colours: colours.size, mean: Math.round(mean), sd: Math.round(Math.sqrt(sum2 / n - mean * mean)) };
  }, png.toString('base64'));
}

const report = { when: new Date().toISOString(), look: [], smoke: [], errors: [], missing: [] };

// ------------------------------------------------------------------ Look contract (D6 substitute)
// Each shot changes ONE attribute across the four real default slots; every
// other feature stays at the neutral base, so the value is the only cue.
const BASE = { body: 'f', age: 'adult', top: 'tshirt', topColor: 'azul', bottom: 'pants', bottomColor: 'gris', hair: 'short', hairColor: 'moreno' };
const fig = (id, over) => ({ id, ...BASE, ...over });
const row = (attr, values, over = {}) => values.map((v, i) => fig(`${attr}-${i}`, { ...over, ...(typeof v === 'object' ? v : { [attr]: v }) }));
const LOOK_SHOTS = [
  { id: 'age-f', tier: 'A', figures: row('age', ['child', 'young', 'adult', 'old']) },
  { id: 'age-m', tier: 'A', figures: row('age', ['child', 'young', 'adult', 'old'], { body: 'm' }) },
  { id: 'body', tier: 'A', figures: row('body', ['f', 'm', 'f', 'm'], { hair: 'short' }) },
  { id: 'top-A', tier: 'A', figures: row('top', ['tshirt', 'dress', 'coat', 'apron']) },
  { id: 'top-B', tier: 'B', figures: row('top', ['hoodie', 'shirt', 'sweater', 'jacket']) },
  { id: 'top-B-vs-tshirt', tier: 'B', figures: row('top', ['tshirt', 'hoodie', 'tshirt', 'jacket']) },
  { id: 'bottom', tier: 'A/B', figures: row('bottom', ['skirt', 'pants', 'shorts', 'jeans'], { topColor: 'blanco', bottomColor: 'gris' }) },
  { id: 'colour-warm', tier: 'A', figures: row('topColor', ['rojo', 'naranja', 'amarillo', 'rosa']) },
  { id: 'colour-cool', tier: 'A', figures: row('topColor', ['azul', 'morado', 'verde', 'gris']) },
  { id: 'colour-neutral', tier: 'A', figures: row('topColor', ['blanco', 'negro', 'marron', 'gris']) },
  { id: 'bottomColor-1', tier: 'A', figures: row('bottomColor', ['rojo', 'azul', 'verde', 'amarillo'], { topColor: 'blanco' }) },
  { id: 'bottomColor-2', tier: 'A', figures: row('bottomColor', ['naranja', 'morado', 'rosa', 'marron'], { topColor: 'blanco' }) },
  { id: 'bottomColor-3', tier: 'A', figures: row('bottomColor', ['blanco', 'negro', 'gris', { bottom: 'jeans' }], { topColor: 'verde' }) },
  { id: 'hair-A', tier: 'A', figures: row('hair', ['short', 'long', 'afro', 'bald']) },
  { id: 'hair-cap', tier: 'A', figures: row('hair', ['cap', 'short', 'cap', 'long']) },
  { id: 'hair-B', tier: 'B', figures: row('hair', ['ponytail', 'bun', 'curly', 'braids']) },
  { id: 'hairColor', tier: 'A/B', figures: row('hairColor', ['rubio', 'moreno', 'pelirrojo', 'canoso'], { hair: 'long' }) },
  { id: 'hairColor-castano', tier: 'B', figures: row('hairColor', ['castano', 'moreno', 'castano', 'pelirrojo'], { hair: 'long' }) },
  { id: 'height-f', tier: 'B', figures: row('height', ['tall', 'mid', 'short', 'tall']) },
  { id: 'height-m', tier: 'B', figures: row('height', ['short', 'tall', 'mid', 'short'], { body: 'm' }) },
  { id: 'pose-A1', tier: 'A', figures: row('pose', ['dance', 'guitar', 'wave', 'stand']) },
  { id: 'pose-A2', tier: 'A', figures: row('pose', ['point', 'carry', 'sit', 'stand']) },
  { id: 'pose-B', tier: 'B', figures: row('pose', ['phone', 'read', 'arms', 'stand']) },
  { id: 'holds', tier: 'A/B', figures: row('holds', ['suitcase', 'umbrella', 'flowers', 'map']) },
  { id: 'extras-1', tier: 'A/B', figures: row('extras', [{ extras: ['backpack'] }, { extras: ['glasses'] }, { extras: ['bag'] }, { extras: [] }]) },
  { id: 'extras-2', tier: 'B', figures: row('extras', [{ extras: ['beard'] }, { extras: [] }, { extras: ['scarf'] }, { extras: ['beard'] }], { body: 'm' }) },
  // Colour-only distractor pairs used in the authored sets (Martin, 2026-10-21).
  { id: 'pairs-1', tier: 'A', figures: row('pair', [{ topColor: 'rojo' }, { topColor: 'verde' }, { top: 'coat', topColor: 'azul' }, { top: 'coat', topColor: 'marron' }]) },
  { id: 'pairs-2', tier: 'A', figures: row('pair', [{ topColor: 'blanco' }, { topColor: 'negro' }, { bottom: 'skirt', bottomColor: 'azul', topColor: 'blanco' }, { bottom: 'skirt', bottomColor: 'verde', topColor: 'blanco' }]) },
].filter(shot => !process.env.FERIA_QA_LOOK_ONLY || process.env.FERIA_QA_LOOK_ONLY.split(',').includes(shot.id));
const LOOK_VIEWS = [
  // A tablet shared to the class screen: coarse pointer → World3D low path.
  { id: 'tablet', width: 1180, height: 820 },
  // A phone in portrait (width < 760 → low path; FOV 70).
  { id: 'phone', width: 390, height: 844 },
];
const LOOK_CIRCLES = (process.env.FERIA_QA_LOOK_CIRCLES ?? 'informacion').split(',');

if (RUN.look) {
  for (const view of LOOK_VIEWS) {
    const context = await browser.newContext({ viewport: { width: view.width, height: view.height }, deviceScaleFactor: 1.25, hasTouch: true, isMobile: true });
    const page = await context.newPage();
    page.on('pageerror', e => report.errors.push(`look/${view.id}: ${e.message}`));
    page.on('console', m => { if (m.type() === 'error') report.errors.push(`look/${view.id} console: ${m.text()}`); });
    await page.goto(`${origin}/?harness=look`);
    await page.locator('.fv-canvas canvas').waitFor({ timeout: 60000 });
    const env = await page.evaluate(() => ({ coarse: matchMedia('(pointer: coarse)').matches, width: innerWidth, dpr: devicePixelRatio }));
    assert.ok(env.coarse || env.width < 760, `${view.id}: World3D must take its low path`);
    for (const circle of LOOK_CIRCLES) {
      assert.ok(CIRCLES.find(c => c.id === circle && c.busca), `${circle} is a Busca circle`);
      for (const shot of LOOK_SHOTS) {
        await page.evaluate(([c, f]) => window.__qa.show(c, f), [circle, shot.figures]);
        await frames(page, shot === LOOK_SHOTS[0] ? 40 : 6);
        const name = `${view.id}-${circle}-${shot.id}.png`;
        const png = await page.screenshot({ path: resolve(out, 'look', name) });
        let crop = null;
        if (view.id === 'tablet') {
          // The cluster at native pixels (no rescale), for the legibility call.
          crop = `${view.id}-${circle}-${shot.id}-crop.png`;
          await page.screenshot({ path: resolve(out, 'look', crop), clip: { x: view.width * 0.22, y: view.height * 0.2, width: view.width * 0.56, height: view.height * 0.62 } });
        }
        const stats = await page.evaluate(() => window.__qa.stats);
        const pixels = await pixelStats(page, png);
        report.look.push({ view: view.id, circle, shot: shot.id, tier: shot.tier, values: shot.figures.map(f => f.id), file: name, crop, stats, pixels, env });
        console.log(JSON.stringify({ look: `${view.id}/${circle}/${shot.id}`, calls: stats?.calls, dpr: stats?.dpr, colours: pixels.colours }));
      }
    }
    // Every authored Busca set where the class meets it (FERIA_QA_SETS=1):
    // the framing proof (no candidate hidden, all in frame).
    if (process.env.FERIA_QA_SETS === '1') for (const set of CONTENT.A2.BUSCA) {
      const circle = set.kind === 'transfer' ? 'baile' : CIRCLES[set.circle - 1].id;
      await page.evaluate(([c, f]) => window.__qa.show(c, f), [circle, set.figures]);
      await frames(page, 40);
      const name = `${view.id}-set-${set.id}.png`;
      await page.screenshot({ path: resolve(out, 'look', name) });
      const stats = await page.evaluate(() => window.__qa.stats);
      report.look.push({ view: view.id, circle, shot: `set:${set.id}`, file: name, stats });
      console.log(JSON.stringify({ look: `${view.id}/${circle}/set:${set.id}`, calls: stats?.calls, dpr: stats?.dpr }));
    }
    assert.equal(await page.evaluate(() => window.__qa.failed), false, `${view.id}: World3D reported onFail`);
    await context.close();
  }
}

// ------------------------------------------------------------------ cover (1200×750, like the hospital cover)
/** Chromium writes VP8X + ICCP; keep only the lossy VP8 bitstream, as the
 * other covers are (RIFF/WEBP/VP8, no metadata). */
function simpleWebp(file) {
  assert.equal(file.toString('ascii', 0, 4), 'RIFF');
  assert.equal(file.toString('ascii', 8, 12), 'WEBP');
  for (let at = 12; at + 8 <= file.length;) {
    const type = file.toString('ascii', at, at + 4), size = file.readUInt32LE(at + 4);
    if (type === 'VP8 ') {
      const chunk = file.subarray(at, at + 8 + size + (size % 2));
      const head = Buffer.alloc(12);
      head.write('RIFF', 0, 'ascii'); head.writeUInt32LE(4 + chunk.length, 4); head.write('WEBP', 8, 'ascii');
      return Buffer.concat([head, chunk]);
    }
    at += 8 + size + (size % 2);
  }
  throw new Error('no lossy VP8 chunk in the WebP from Chromium');
}

if (RUN.cover) {
  // Desktop (high) path, as a teacher sees it on a laptop; candidates are
  // saved side by side and the chosen one is encoded to WebP by Chromium.
  const context = await browser.newContext({ viewport: { width: 1200, height: 750 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await page.goto(`${origin}/?harness=look`);
  await page.locator('.fv-canvas canvas').waitFor({ timeout: 60000 });
  for (const shot of ['intro', ...CIRCLES.map(c => c.id)]) {
    await page.evaluate(id => { window.__qa.intro(id === 'intro'); window.__qa.circle(id === 'intro' ? null : id); }, shot);
    await frames(page, 45);
    await page.screenshot({ path: resolve(out, `cover-${shot}.png`) });
  }
  const pick = process.env.FERIA_COVER ?? 'noria';
  await page.evaluate(id => { window.__qa.intro(id === 'intro'); window.__qa.circle(id === 'intro' ? null : id); }, pick);
  await frames(page, 45);
  const png = await page.screenshot();
  const webp = await page.evaluate(async b64 => {
    const img = new Image(); img.src = `data:image/png;base64,${b64}`; await img.decode();
    const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
    c.getContext('2d').drawImage(img, 0, 0);
    return c.toDataURL('image/webp', 0.9).split(',')[1];
  }, png.toString('base64'));
  await writeFile(resolve(out, 'cover.webp'), simpleWebp(Buffer.from(webp, 'base64')));
  console.log(`cover: ${resolve(out, 'cover.webp')} (${pick})`);
  await context.close();
}

// ------------------------------------------------------------------ hover clip (--preview)
// The catalog card's hover recording, like the other conversation cards
// (640×360, 24 fps, 8 s, H.264, no audio): the fair's opening fly-over,
// captured frame by frame (the world advances 1/20 s per rendered frame, so
// a slow software renderer still gives an even clip).
if (RUN.preview) {
  const { spawnSync } = await import('node:child_process');
  const framesDir = resolve(out, 'preview-frames');
  await mkdir(framesDir, { recursive: true });
  const context = await browser.newContext({ viewport: { width: 640, height: 360 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await page.goto(`${origin}/?harness=look`);
  await page.locator('.fv-canvas canvas').waitFor({ timeout: 60000 });
  await page.evaluate(() => window.__qa.intro(true));
  await frames(page, 20);
  for (let i = 0; i < 192; i++) {
    await frames(page, 1);
    await page.screenshot({ path: resolve(framesDir, `f${String(i).padStart(4, '0')}.png`) });
  }
  await context.close();
  const clip = resolve(out, 'preview.mp4');
  const r = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', '24', '-i', resolve(framesDir, 'f%04d.png'), '-c:v', 'libx264', '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-crf', '36', '-preset', 'slow', '-an', '-movflags', '+faststart', clip], { stdio: 'inherit' });
  assert.equal(r.status, 0, 'ffmpeg encoded the clip');
  console.log(`preview: ${clip}`);
}

// ------------------------------------------------------------------ T5 draw calls (--calls)
// Low-power path (coarse pointer, DPR 1.25), the scene's draw calls per frame
// for every place a class stops at: feria circles (scene camera), its Busca
// places, the free view at the spawn; hospital scenes for reference.
if (RUN.calls) {
  const { SCENES } = await import('../app/hospital-san-casi-vivo/layout.mjs');
  const table = [];
  for (const view of LOOK_VIEWS) {
    const context = await browser.newContext({ viewport: { width: view.width, height: view.height }, deviceScaleFactor: 1.25, hasTouch: true, isMobile: true });
    const page = await context.newPage();
    page.on('pageerror', e => report.errors.push(`calls/${view.id}: ${e.message}`));
    // Settle, then average the GL draw calls over 10 frames (one render per frame in low mode).
    const read = async () => {
      await frames(page, 15);
      const a = await page.evaluate(() => ({ gl: window.__qa.gl, frames: window.__qa.frames }));
      await frames(page, 10);
      const b = await page.evaluate(() => ({ gl: window.__qa.gl, frames: window.__qa.frames }));
      return { calls: Math.round((b.gl - a.gl) / (b.frames - a.frames)) };
    };
    await page.goto(`${origin}/?harness=look`);
    await page.locator('.fv-canvas canvas').waitFor({ timeout: 60000 });
    const push = row => { table.push(row); console.log(JSON.stringify(row)); };
    push({ world: 'feria', view: view.id, place: 'spawn (free view)', ...(await read()) });
    for (const c of CIRCLES) {
      await page.evaluate(id => window.__qa.circle(id), c.id);
      push({ world: 'feria', view: view.id, place: `circle ${c.n} ${c.id}`, ...(await read()) });
    }
    await page.evaluate(() => window.__qa.circle(null));
    for (const c of CIRCLES.filter(c => c.busca)) {
      await page.evaluate(([id, f]) => window.__qa.show(id, f), [c.id, LOOK_SHOTS.find(s => s.id === 'pairs-1')?.figures ?? LOOK_SHOTS[0].figures]);
      push({ world: 'feria', view: view.id, place: `busca ${c.id}`, ...(await read()) });
    }
    await page.goto(`${origin}/?harness=hospital`);
    await page.locator('canvas').first().waitFor({ timeout: 60000 });
    push({ world: 'hospital', view: view.id, place: 'spawn (free view)', ...(await read()) });
    for (const scene of SCENES) {
      await page.evaluate(([floor, id]) => window.__qa.hospital(floor, id), [scene.floor, scene.id]);
      push({ world: 'hospital', view: view.id, place: `scene ${scene.id} (floor ${scene.floor})`, ...(await read()) });
    }
    await context.close();
  }
  report.calls = table;
  for (const world of ['feria', 'hospital']) for (const view of LOOK_VIEWS) {
    const rows = table.filter(r => r.world === world && r.view === view.id).map(r => r.calls);
    console.log(`${world} ${view.id}: draw calls min ${Math.min(...rows)} · median ${rows.sort((a, b) => a - b)[rows.length >> 1]} · max ${Math.max(...rows)} (${rows.length} places)`);
  }
}

// ------------------------------------------------------------------ G5(a) smoke
// On the real FeriaGame: non-blank canvas, no console/page errors, the 2D
// fallback (no WebGL and "Mapa sin movimiento"), every circle reachable from
// the teacher list in both modes, and at 390 px every authored card driven
// to its last beat (so the longest state of every card, hence the longest
// card of the level) with no clipped text, scroll containers that reach
// their last element, no horizontal overflow and reachable action buttons.
const smoke = (name, passed, detail = {}) => { report.smoke.push({ name, passed, ...detail }); console.log(JSON.stringify({ smoke: name, passed, ...detail })); };

/** Layout audit of every visible overlay card (scene, Busca, list, listening). */
async function audit(page, label) {
  const result = await page.evaluate(() => {
    const out = { overflowX: document.documentElement.scrollWidth > innerWidth + 1, clipped: [], unreachable: [], scrollers: [], buttons: [] };
    const cards = [...document.querySelectorAll('.fv-card, .fv-busca, .fv-panel, .e3-card')].filter(e => e.getClientRects().length);
    const textOf = e => (e.innerText || e.getAttribute('aria-label') || '').trim().slice(0, 60);
    for (const card of cards) {
      for (const e of [card, ...card.querySelectorAll('*')]) {
        if (!e.getClientRects().length) continue;
        const cs = getComputedStyle(e);
        const hides = v => v === 'hidden' || v === 'clip';
        const scrolls = v => v === 'auto' || v === 'scroll';
        if ((hides(cs.overflowX) && e.scrollWidth > e.clientWidth + 1) || (hides(cs.overflowY) && e.scrollHeight > e.clientHeight + 1)) {
          // Text clipped by overflow hidden/clip (ellipsis included).
          out.clipped.push({ el: `${e.tagName.toLowerCase()}.${[...e.classList].join('.')}`, text: textOf(e), sw: e.scrollWidth, cw: e.clientWidth, sh: e.scrollHeight, ch: e.clientHeight });
        }
        if ((scrolls(cs.overflowY) && e.scrollHeight > e.clientHeight + 1) || (scrolls(cs.overflowX) && e.scrollWidth > e.clientWidth + 1)) {
          out.scrollers.push({ el: `${e.tagName.toLowerCase()}.${[...e.classList].join('.')}`, sh: e.scrollHeight, ch: e.clientHeight });
        }
        // No horizontal overflow inside a card either (a sideways scroller hides text).
        if (scrolls(cs.overflowX) && e.scrollWidth > e.clientWidth + 1) out.unreachable.push({ el: `${e.tagName.toLowerCase()}.${[...e.classList].join('.')}`, why: 'horizontal overflow inside a card' });
      }
      // Overflowing bodies scroll to their last element.
      for (const s of [card, ...card.querySelectorAll('*')].filter(e => e.getClientRects().length && /auto|scroll/.test(getComputedStyle(e).overflowY) && e.scrollHeight > e.clientHeight + 1)) {
        s.scrollTop = s.scrollHeight;
        const last = [...s.querySelectorAll('*')].filter(e => e.getClientRects().length && e.children.length === 0 && textOf(e)).at(-1);
        if (!last) continue;
        const r = last.getBoundingClientRect(), b = s.getBoundingClientRect();
        if (r.bottom > Math.min(b.bottom, innerHeight) + 1 || r.top < b.top - 1) out.unreachable.push({ el: `${s.className} → last: ${textOf(last)}`, why: 'last element not visible after scrolling', r: [r.top, r.bottom], box: [b.top, b.bottom] });
      }
      // Action buttons reachable inside the card: scrolled into view they are
      // inside the viewport and on top (not covered).
      for (const btn of card.querySelectorAll('button')) {
        if (!btn.getClientRects().length || btn.disabled) continue;
        btn.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        const r = btn.getBoundingClientRect();
        const inView = r.left >= -1 && r.right <= innerWidth + 1 && r.top >= -1 && r.bottom <= innerHeight + 1 && r.width > 0 && r.height > 0;
        const hit = document.elementFromPoint(Math.min(innerWidth - 1, Math.max(0, r.left + r.width / 2)), Math.min(innerHeight - 1, Math.max(0, r.top + r.height / 2)));
        const onTop = Boolean(hit && (hit === btn || btn.contains(hit)));
        out.buttons.push(1);
        if (!inView || !onTop) out.unreachable.push({ el: `button "${textOf(btn)}"`, why: !inView ? 'outside the viewport' : `covered by ${hit?.className || hit?.tagName}` });
      }
    }
    out.buttons = out.buttons.length;
    out.cards = cards.map(c => c.className);
    return out;
  });
  const passed = !result.overflowX && !result.clipped.length && !result.unreachable.length;
  smoke(`layout ${label}`, passed, { cards: result.cards, buttons: result.buttons, overflowX: result.overflowX, clipped: result.clipped, unreachable: result.unreachable, scrollers: result.scrollers.length });
  return passed;
}

/** Every HUD control (and the listening badge, the minimap, the touch
 * buttons) is inside the viewport and on top of whatever overlaps it. */
async function hudAudit(page, label) {
  const covered = await page.evaluate(() => {
    const list = [...document.querySelectorAll('.fv-hud button, .e3-badge button, .fv-mapbox, .fv-touch-actions button, .fv-prompt button')].filter(e => e.getClientRects().length);
    return list.flatMap(e => {
      const r = e.getBoundingClientRect();
      // Centre and two inner points (round buttons have empty corners).
      const points = [[r.left + r.width / 2, r.top + r.height / 2], [r.left + r.width * 0.3, r.top + r.height * 0.3], [r.right - r.width * 0.3, r.bottom - r.height * 0.3]];
      const bad = points.map(([x, y]) => document.elementFromPoint(x, y)).filter(hit => !hit || !(hit === e || e.contains(hit)));
      const out = r.left < -1 || r.top < -1 || r.right > innerWidth + 1 || r.bottom > innerHeight + 1;
      return bad.length || out ? [{ el: (e.innerText || e.getAttribute('aria-label') || e.className).trim().slice(0, 40), by: bad[0] ? (bad[0].className || bad[0].tagName) : null, out }] : [];
    });
  });
  smoke(`HUD ${label}: no control covered`, !covered.length, { covered });
}

/** Click like a person: a covered control is a failure (recorded), then the
 * run continues with a forced click so later checks still happen. */
async function tap(locator, label) {
  try { await locator.click({ timeout: 5000 }); } catch (error) {
    const lines = String(error.message).split('\n');
    smoke(`${label} is clickable`, false, { error: (lines.find(l => /intercepts/.test(l)) ?? lines[0]).replace(/\x1b\[[0-9;]*m/g, '').trim() });
    await locator.click({ force: true });
  }
}

/** Init script: counts live WebGL textures and buffers, and lost contexts, from inside the page. */
const countGpu = () => {
  const gpu = { textures: 0, buffers: 0, lost: 0 };
  window.__gpu = gpu;
  for (const C of [window.WebGLRenderingContext, window.WebGL2RenderingContext]) {
    if (!C) continue;
    const p = C.prototype;
    for (const [make, drop, key] of [['createTexture', 'deleteTexture', 'textures'], ['createBuffer', 'deleteBuffer', 'buffers']]) {
      const m = p[make], d = p[drop];
      p[make] = function (...a) { const r = m.apply(this, a); if (r) gpu[key]++; return r; };
      p[drop] = function (x, ...a) { if (x) gpu[key]--; return d.call(this, x, ...a); };
    }
  }
  const get = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (type, ...rest) {
    const ctx = get.call(this, type, ...rest);
    if (ctx && /webgl/.test(String(type)) && !this.__gpuWatched) { this.__gpuWatched = true; this.addEventListener('webglcontextlost', () => { gpu.lost++; }); }
    return ctx;
  };
};

async function newGamePage(viewport, options = {}) {
  const context = await browser.newContext({ viewport, deviceScaleFactor: 1.25, reducedMotion: options.reduced ? 'reduce' : 'no-preference', ...(viewport.width < 760 ? { hasTouch: true, isMobile: true } : {}) });
  if (options.noWebGL) await context.addInitScript(() => {
    const get = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...rest) { return /webgl/.test(String(type)) ? null : get.call(this, type, ...rest); };
  });
  if (options.gpuCount) await context.addInitScript(countGpu);
  const page = await context.newPage();
  page.setDefaultTimeout(30000);
  const label = options.label ?? `${viewport.width}`;
  page.on('pageerror', e => report.errors.push(`${label}: ${e.message}`));
  page.on('console', m => {
    if (m.type() !== 'error') return;
    // A missing pre-generated mp3 is reported apart (the UI says so honestly).
    const url = m.location()?.url ?? '';
    if (/Failed to load resource/.test(m.text()) && /\/audio\//.test(url)) return;
    report.errors.push(`${label} console: ${m.text()} ${url}`);
  });
  await page.goto(`${origin}/`);
  await page.locator('.fv-title').waitFor();
  return { context, page };
}

/** Drive the open scene card to its last beat (every beat answered). */
async function finishCard(page, id) {
  for (let guard = 0; guard < 60; guard++) {
    const card = page.locator('.fv-card');
    if (!(await card.count())) return 'no-card';
    if ((await card.getAttribute('data-ended')) === 'true') return 'ended';
    const beat = card.locator('.fv-beat').last();
    const kind = (await beat.getAttribute('class')) ?? '';
    if (/fv-beat-busca/.test(kind)) {
      const open = beat.locator('.fv-row button.fv-primary');
      if (!(await open.count())) return 'busca-stuck';
      await open.first().click();
      const panel = page.locator('.fv-busca');
      await panel.waitFor();
      await audit(page, `390 Busca ${await panel.getAttribute('data-set')} (${id})`);
      for (const pick of await panel.locator('.fv-busca-picks button').all()) {
        if (await pick.isDisabled()) break;
        await pick.click();
      }
      await panel.getByRole('button', { name: 'Cerrar Busca y describe' }).click();
      continue;
    }
    const options = beat.locator('.fv-options button:not([disabled])');
    if (await options.count()) { await options.first().click(); continue; }
    const go = beat.getByRole('button', { name: 'Hecho, seguimos' });
    if (await go.count()) { await go.click(); continue; }
    return `stuck at ${await beat.getAttribute('data-beat')}`;
  }
  return 'guard';
}

if (RUN.smoke) {
  // 1. 3D view: non-blank canvas, list reaches every circle (both modes).
  for (const viewport of [{ width: 1280, height: 800 }, { width: 390, height: 844 }]) {
    const label = `3d-${viewport.width}`;
    const { context, page } = await newGamePage(viewport, { label });
    await page.getByRole('button', { name: 'Entrar en la feria' }).click();
    await page.locator('.fv-canvas canvas').waitFor({ timeout: 60000 });
    await frames(page, 30);
    assert.equal(await page.locator('main.fv').getAttribute('data-view'), '3d');
    const shot = await page.screenshot({ path: resolve(out, 'smoke', `${label}-world.png`) });
    const canvasShot = await page.locator('.fv-canvas canvas').screenshot();
    const px = await pixelStats(page, canvasShot);
    smoke(`${label} non-blank canvas`, px.colours > 200 && px.sd > 8, px);
    void shot;
    await hudAudit(page, `${label} conversacion`);
    for (const mode of ['conversacion', 'escucha']) {
      if (mode === 'escucha') await tap(page.locator('.fv-hud').getByRole('radio', { name: /Comprensión auditiva/ }), `${label} HUD «Comprensión auditiva»`);
      if (mode === 'escucha') { await frames(page, 3); await hudAudit(page, `${label} escucha`); await page.screenshot({ path: resolve(out, 'smoke', `${label}-escucha-hud.png`) }); }
      const reached = [];
      for (const c of CIRCLES) {
        await tap(page.getByRole('button', { name: 'Lista del profesor' }), `${label} ${mode} HUD «Lista del profesor»`);
        await page.locator('.fv-all').getByRole('button', { name: new RegExp(`^${c.n}\\. `) }).click();
        const sel = mode === 'escucha' ? '.e3-card' : `.fv-card[data-scene="${c.id}"], .fv-panel[role="status"]`;
        await page.locator(sel).first().waitFor();
        const authored = mode === 'escucha' ? true : await page.locator(`.fv-card[data-scene="${c.id}"]`).count() > 0;
        reached.push({ id: c.id, authored });
        await page.keyboard.press('Escape');
        if (await page.locator(sel).count()) {
          const back = page.getByRole('button', { name: /^(Volver|Volver a la feria|Cerrar)/ });
          if (await back.count()) await back.first().click();
        }
      }
      smoke(`${label} teacher list reaches every circle (${mode})`, reached.length === CIRCLES.length, { reached, unauthored: reached.filter(r => !r.authored).map(r => r.id) });
    }
    await context.close();
  }

  // 1b. Unmount frees the GPU (Feria QA note; Ascensor code review B1). The
  // WebGL calls are counted from inside the page: textures and buffers still
  // alive, and the contexts lost, after the 3D world is switched off.
  for (const viewport of [{ width: 390, height: 844 }, { width: 1280, height: 800 }]) {
    const { context, page } = await newGamePage(viewport, { label: `unmount-${viewport.width}`, gpuCount: true });
    await page.getByRole('button', { name: 'Entrar en la feria' }).click();
    await page.locator('.fv-canvas canvas').waitFor({ timeout: 60000 });
    await frames(page, 10);
    // Two scene cards: in low mode each focus caches one host bake off-scene.
    for (const c of CIRCLES.slice(0, 2)) {
      if (!(await page.locator('.fv-list').count())) await page.getByRole('button', { name: 'Lista del profesor' }).click();
      await page.locator('.fv-all').getByRole('button', { name: new RegExp(`^${c.n}\\. `) }).click();
      await frames(page, 5);
      await page.getByRole('button', { name: 'Volver', exact: true }).or(page.locator('.fv-card').getByRole('button', { name: /^(Seguir paseando|Volver a la feria)/ }).last()).first().click();
      await frames(page, 5);
    }
    const before = await page.evaluate(() => ({ ...window.__gpu }));
    await page.getByRole('button', { name: 'Sin movimiento', exact: true }).click();
    await page.locator('.fv-canvas canvas').waitFor({ state: 'detached' });
    await page.waitForTimeout(300);
    const after = await page.evaluate(() => ({ ...window.__gpu }));
    // What survives (5 textures on both the low and the full path, 2026-10-28)
    // is consistent with three.js's own per-renderer placeholders; the forced
    // context loss releases those too. On main before the fix: 7 → 7 and
    // 22 → 20 textures, no context lost.
    smoke(`${viewport.width} unmount frees the world's WebGL textures and buffers and loses the context`, after.lost >= 1 && before.textures > after.textures && after.textures <= 5 && after.buffers <= 5, { before, after });
    await context.close();
  }

  // 2. Fallbacks: no WebGL, "Mapa sin movimiento", reduced motion.
  for (const [name, opts, toggle] of [['no-webgl', { noWebGL: true }, false], ['mapa-sin-movimiento', {}, true], ['reduced-motion', { reduced: true }, false]]) {
    const { context, page } = await newGamePage({ width: 390, height: 844 }, { ...opts, label: name });
    if (toggle) await page.getByRole('button', { name: 'Mapa sin movimiento' }).click();
    await page.getByRole('button', { name: 'Entrar en la feria' }).click();
    await page.locator('.fv-list').waitFor();
    const view = await page.locator('main.fv').getAttribute('data-view');
    const canvases = await page.locator('.fv-canvas canvas').count();
    const spots = await page.locator('.fv-flatmap .fv-map-spot, .fv-flatmap .fv-map-done').count();
    await page.screenshot({ path: resolve(out, 'smoke', `fallback-${name}.png`), fullPage: true });
    smoke(`fallback ${name} renders the 2D list and map`, view === 'mapa' && canvases === 0 && spots === CIRCLES.length, { view, canvases, mapCircles: spots });
    if (name === 'no-webgl') await audit(page, `390 teacher list (${name})`);
    await context.close();
  }

  // 3. At 390 px, every authored card at its longest (all beats answered).
  // Done in the 2D view, where Busca shows its SVG figures (AM-3), and in 3D.
  for (const flat of [true, false]) {
    const tag = flat ? 'mapa' : '3d';
    const { context, page } = await newGamePage({ width: 390, height: 844 }, { label: `cards-${tag}` });
    if (flat) await page.getByRole('button', { name: 'Mapa sin movimiento' }).click();
    await page.getByRole('button', { name: 'Entrar en la feria' }).click();
    if (!flat) { await page.locator('.fv-canvas canvas').waitFor({ timeout: 60000 }); await frames(page, 10); }
    for (const c of CIRCLES) {
      if (!(await page.locator('.fv-list').count())) await tap(page.getByRole('button', { name: 'Lista del profesor' }), `390 ${tag} HUD «Lista del profesor»`);
      await page.locator('.fv-all').getByRole('button', { name: new RegExp(`^${c.n}\\. `) }).click();
      if (!(await page.locator(`.fv-card[data-scene="${c.id}"]`).count())) {
        smoke(`390 ${tag} card ${c.id}`, false, { status: 'not authored yet (circle shows «todavía no tiene su escena»)' });
        await page.getByRole('button', { name: 'Volver', exact: true }).click();
        continue;
      }
      await audit(page, `390 ${tag} card ${c.id} (start)`);
      const end = await finishCard(page, c.id);
      if (c.id === 'baile' && end === 'ended') {
        const transfer = page.locator('.fv-closing-step button.fv-primary', { hasText: 'Escuchar el aviso' });
        if (await transfer.count()) {
          await transfer.click();
          await page.locator('.fv-busca').waitFor();
          await audit(page, `390 ${tag} Busca transfer`);
          for (const pick of await page.locator('.fv-busca-picks button').all()) { if (await pick.isDisabled()) break; await pick.click(); }
          await page.getByRole('button', { name: 'Cerrar Busca y describe' }).click();
        }
      }
      await page.locator('.fv-card details').evaluateAll(list => list.forEach(d => { d.open = true; }));
      const ok = await audit(page, `390 ${tag} card ${c.id} (end: ${end})`);
      await page.locator('.fv-card').screenshot({ path: resolve(out, 'smoke', `card-${tag}-${c.id}.png`) }).catch(() => {});
      smoke(`390 ${tag} card ${c.id} driven to its last beat`, end === 'ended' && ok, { end });
      await page.locator('.fv-card').getByRole('button', { name: /^(Seguir paseando|Volver a la feria)/ }).last().click();
    }
    await context.close();
  }
}

// ------------------------------------------------------------------ Hospital unmount (gated repair, 2026-10-30)
// The same leak as the Feria (2026-10-28): the cleanup disposed materials but
// not their textures, nor the bloom pass targets or the shadow map, and never
// lost the context. Mounted alone through ?harness=hospital, walked through
// two scenes, then unmounted. On main 49ddf69 before the fix: see the LQG file.
if (RUN.hospitalGpu) {
  const { SCENES } = await import('../app/hospital-san-casi-vivo/layout.mjs');
  for (const viewport of [{ width: 390, height: 844 }, { width: 1280, height: 800 }]) {
    const label = `hospital-unmount-${viewport.width}`;
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1.25, ...(viewport.width < 760 ? { hasTouch: true, isMobile: true } : {}) });
    await context.addInitScript(countGpu);
    const page = await context.newPage();
    page.setDefaultTimeout(30000);
    page.on('pageerror', e => report.errors.push(`${label}: ${e.message}`));
    page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) report.errors.push(`${label} console: ${m.text()}`); });
    await page.goto(`${origin}/?harness=hospital`);
    await page.locator('.hs canvas').first().waitFor({ timeout: 60000 });
    await frames(page, 10);
    for (const scene of SCENES.slice(0, 2)) {
      await page.evaluate(([floor, id]) => window.__qa.hospital(floor, id), [scene.floor, scene.id]);
      await frames(page, 10);
    }
    const before = await page.evaluate(() => ({ ...window.__gpu }));
    await page.evaluate(() => window.__qa.hospitalOff());
    await page.locator('.hs canvas').first().waitFor({ state: 'detached' });
    await page.waitForTimeout(1500);
    const after = await page.evaluate(() => ({ ...window.__gpu, failed: window.__qa.failed }));
    smoke(`${viewport.width} hospital unmount frees the world's WebGL textures and buffers and loses the context`, !after.failed && after.lost >= 1 && before.textures > after.textures && after.textures <= 5 && after.buffers <= 5, { before, after });
    await context.close();
  }
}

report.missing = [...missing].sort();
await writeFile(resolve(out, 'results.json'), JSON.stringify(report, null, 2));
await browser.close();
server.close();
console.log(`Evidence: ${out}`);
console.log(`Page/console errors: ${report.errors.length}${report.errors.length ? `\n  ${report.errors.join('\n  ')}` : ''}`);
console.log(`404s: ${report.missing.join(', ') || 'none'}`);
const failed = report.smoke.filter(s => !s.passed);
if (RUN.smoke || RUN.hospitalGpu) console.log(`Smoke: ${report.smoke.length - failed.length}/${report.smoke.length} passed`);
if (failed.length || report.errors.length) process.exitCode = 1;
