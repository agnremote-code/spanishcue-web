// El ascensor del cerro · optional real-browser QA (BOARD-DECISION-001 G5(a)).
//
// Isolated, like scripts/qa-feria-browser.mjs: esbuild bundles the real
// AscensorGame / World3D / people3d into a temporary folder served from
// 127.0.0.1. No auth, no production, no Worker: /api/progress is answered
// locally with 204 and nothing else leaves the box. (The real route is PRO
// gated behind /acceso; this harness mounts the lesson component directly.)
//
//   node scripts/qa-ascensor-browser.mjs            # --smoke
//   node scripts/qa-ascensor-browser.mjs --smoke    # G5(a) smoke
//   node scripts/qa-ascensor-browser.mjs --calls    # low-path draw calls per place
//   node scripts/qa-ascensor-browser.mjs --cover    # 1200×750 cover candidates + cover.webp (ASCENSOR_COVER=<intro|circle id|ride>)
//   node scripts/qa-ascensor-browser.mjs --preview  # 8 s 640×360 H.264 hover clip, preview.mp4 (needs ffmpeg)
//
// Env: ASCENSOR_QA_OUTPUT (evidence folder, default .qa/ascensor-browser),
// ASCENSOR_QA_EVIDENCE (also save a few small PNGs there), PLAYWRIGHT_MODULE,
// CHROMIUM_EXECUTABLE_PATH, CHROMIUM_ARGS (JSON array; default forces
// SwiftShader WebGL).
//
// SwiftShader is a software renderer: it proves the page renders, runs and
// lays out; it is NOT the real-device check of G5(b).
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import { dirname, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { CIRCLES, CIRCLES_BY_HEIGHT, TERRACES } from '../app/el-ascensor-del-cerro/layout.mjs';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const argv = new Set(process.argv.slice(2));
const all = !argv.has('--smoke') && !argv.has('--cover') && !argv.has('--calls') && !argv.has('--preview');
const RUN = { smoke: all || argv.has('--smoke'), cover: argv.has('--cover'), calls: argv.has('--calls'), preview: argv.has('--preview') };
const out = resolve(process.env.ASCENSOR_QA_OUTPUT || resolve(repo, '.qa/ascensor-browser'));
const evidence = process.env.ASCENSOR_QA_EVIDENCE ? resolve(process.env.ASCENSOR_QA_EVIDENCE) : null;
await mkdir(resolve(out, 'smoke'), { recursive: true });
if (evidence) await mkdir(evidence, { recursive: true });

// ------------------------------------------------------------------ bundle
// ?harness=world mounts World3D alone, driven by window.__qa; anything else
// mounts the real AscensorGame.
await build({
  stdin: {
    contents: `import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import AscensorGame from './app/el-ascensor-del-cerro/AscensorGame';
import World3D from './app/el-ascensor-del-cerro/World3D';
window.__qa = { stats: null, failed: false, gl: 0, frames: 0, ride: null, pose: null };
const q = new URLSearchParams(location.search);
// ?manual=1 (the hover clip): time stands still between screenshots. Frames
// run only on window.__qa.step(n), each exactly 1/24 s of world time.
if (q.get('manual')) {
  const queue = []; let now = 0;
  window.requestAnimationFrame = cb => { queue.push(cb); return queue.length; };
  window.cancelAnimationFrame = () => {};
  window.__qa.step = n => { for (let i = 0; i < n; i++) { now += 1000 / 24; queue.splice(0).forEach(cb => cb(now)); } };
}
// Real WebGL draw calls, counted on the context (as in qa-feria-browser).
for (const Ctx of [window.WebGLRenderingContext, window.WebGL2RenderingContext].filter(Boolean)) {
  for (const name of ['drawArrays', 'drawElements', 'drawArraysInstanced', 'drawElementsInstanced', 'drawRangeElements']) {
    const original = Ctx.prototype[name];
    if (original) Ctx.prototype[name] = function (...args) { window.__qa.gl++; return original.apply(this, args); };
  }
}
const tick = () => { window.__qa.frames++; requestAnimationFrame(tick); };
requestAnimationFrame(tick);
function WorldHarness() {
  const [intro, setIntro] = useState(false);
  const [circle, setCircle] = useState(null);
  const [travel, setTravel] = useState(null);
  useEffect(() => {
    window.__qa.circle = id => setCircle(id);
    window.__qa.intro = on => setIntro(on);
    window.__qa.travel = move => setTravel(t => ({ ...move, n: (t?.n ?? 0) + 1 }));
  }, []);
  return <main className="ac"><World3D circleId={circle} done={[]} paused={false} intro={intro} travel={travel}
    onSpot={() => {}} onNear={() => {}} onPose={p => { window.__qa.pose = p; }} onRide={r => { window.__qa.ride = r; }}
    onFail={() => { window.__qa.failed = true; }} onStats={s => { window.__qa.stats = s; }} /></main>;
}
createRoot(document.getElementById('root')).render(q.get('harness') === 'world' ? <WorldHarness /> : <AscensorGame />);`,
    resolveDir: repo, loader: 'tsx',
  },
  bundle: true, format: 'esm', splitting: true, outdir: resolve(out, 'assets'), entryNames: 'lesson', chunkNames: 'chunk-[hash]', jsx: 'automatic',
  loader: { '.json': 'json' }, logLevel: 'warning',
  define: { 'process.env.NODE_ENV': '"production"' },
  plugins: [{ name: 'ascensor-isolated-preview', setup(b) {
    b.onResolve({ filter: /^next\/(link|dynamic)$/ }, args => ({ path: args.path.slice(5), namespace: 'preview' }));
    b.onLoad({ filter: /^link$/, namespace: 'preview' }, () => ({ contents: 'export default function Link({children,...props}){return <a {...props}>{children}</a>}', loader: 'jsx', resolveDir: repo }));
    b.onLoad({ filter: /^dynamic$/, namespace: 'preview' }, () => ({ contents: `import React, { lazy, Suspense } from 'react';
export default function dynamic(loader, opts = {}) {
  const Lazy = lazy(() => loader().then(m => ({ default: m.default ?? m })));
  const Loading = opts.loading;
  return function Dynamic(props) { return <Suspense fallback={Loading ? <Loading /> : null}><Lazy {...props} /></Suspense>; };
}`, loader: 'jsx', resolveDir: repo }));
  } }],
});
await writeFile(resolve(out, 'index.html'), '<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ascensor QA</title><style>body{margin:0}</style><link rel="stylesheet" href="/assets/lesson.css"><div id="root"></div><script type="module" src="/assets/lesson.js"></script></html>');

const TYPES = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.mp3': 'audio/mpeg', '.webp': 'image/webp', '.png': 'image/png', '.json': 'application/json' };
const missing = new Set();
const server = createServer(async (request, response) => {
  try {
    const path = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (path.includes('..')) { response.writeHead(400).end(); return; }
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

const playwright = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { chromium } = playwright.chromium ? playwright : playwright.default;
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

/** A small copy of a screenshot for the evidence folder (scaled in the browser). */
async function keep(page, png, name, scale = 0.6) {
  if (!evidence) return;
  const b64 = await page.evaluate(async ([data, k]) => {
    const img = new Image(); img.src = `data:image/png;base64,${data}`; await img.decode();
    const c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
    const ctx = c.getContext('2d'); ctx.imageSmoothingQuality = 'high'; ctx.drawImage(img, 0, 0, c.width, c.height);
    return c.toDataURL('image/png').split(',')[1];
  }, [png.toString('base64'), scale]);
  await writeFile(resolve(evidence, name), Buffer.from(b64, 'base64'));
}

const report = { when: new Date().toISOString(), smoke: [], errors: [], missing: [], calls: null, longest: null };

// ------------------------------------------------------------------ cover
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
  // Desktop (high) path, as a teacher sees it on a laptop.
  const context = await browser.newContext({ viewport: { width: 1200, height: 750 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  page.on('pageerror', e => report.errors.push(`cover: ${e.message}`));
  await page.goto(`${origin}/?harness=world`);
  await page.locator('.ac-canvas canvas').waitFor({ timeout: 60000 });
  const shots = ['intro', ...CIRCLES.map(c => c.id), 'ride'];
  const show = async id => {
    if (id === 'ride') {
      await page.evaluate(() => { window.__qa.intro(false); window.__qa.circle(null); window.__qa.travel({ link: 'ascensor-sube' }); });
      await page.waitForFunction(() => Number(document.querySelector('.ac-world')?.dataset.rideT ?? 0) >= 0.45, null, { timeout: 120000 });
      return;
    }
    await page.evaluate(id => { window.__qa.intro(id === 'intro'); window.__qa.circle(id === 'intro' ? null : id); }, id);
    await frames(page, 45);
  };
  for (const shot of shots) { await show(shot); await page.screenshot({ path: resolve(out, `cover-${shot}.png`) }); }
  const pick = process.env.ASCENSOR_COVER ?? 'intro';
  await show(pick);
  const png = await page.screenshot();
  const webp = await page.evaluate(async b64 => {
    const img = new Image(); img.src = `data:image/png;base64,${b64}`; await img.decode();
    const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
    c.getContext('2d').drawImage(img, 0, 0);
    return c.toDataURL('image/webp', 0.86).split(',')[1];
  }, png.toString('base64'));
  await writeFile(resolve(out, 'cover.webp'), simpleWebp(Buffer.from(webp, 'base64')));
  console.log(`cover: ${resolve(out, 'cover.webp')} (${pick})`);
  await context.close();
}

// ------------------------------------------------------------------ hover clip (--preview)
// The catalog card's hover recording, like the other conversation cards
// (640×360, 24 fps, 8 s, H.264, no audio): 2.5 s of the fly-over from the bay,
// then the funicular climbing the cerro. Captured frame by frame on the
// desktop path at 1280×720 (world time stands still between screenshots:
// the harness steps requestAnimationFrame by hand, 1/24 s a frame, so
// a slow software renderer still gives an even clip) and scaled down by ffmpeg.
if (RUN.preview) {
  const { spawnSync } = await import('node:child_process');
  const framesDir = resolve(out, 'preview-frames');
  await mkdir(framesDir, { recursive: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  page.on('pageerror', e => report.errors.push(`preview: ${e.message}`));
  await page.goto(`${origin}/?harness=world&manual=1`);
  await page.locator('.ac-canvas canvas').waitFor({ timeout: 60000 });
  const step = async k => { await page.evaluate(k => window.__qa.step(k), k); };
  await page.evaluate(() => window.__qa.intro(true));
  await step(24);
  // The ride caption is lesson UI, not part of the scene: hide it in the clip.
  await page.addStyleTag({ content: '.ac-ride{display:none!important}' });
  const shot = async i => page.screenshot({ path: resolve(framesDir, `f${String(i).padStart(4, '0')}.png`) });
  // 2.5 s of the fly-over from the bay, then the funicular from the port up
  // the cerro (5.2 s), then the arrival at the top.
  let n = 0;
  for (; n < 60; n++) { await step(1); await shot(n); }
  await page.evaluate(() => { window.__qa.intro(false); window.__qa.travel({ link: 'ascensor-sube' }); });
  for (; n < 192; n++) { await step(1); await shot(n); }
  await context.close();
  const clip = resolve(out, 'preview.mp4');
  const r = spawnSync(process.env.FFMPEG || 'ffmpeg', ['-y', '-loglevel', 'error', '-framerate', '24', '-i', resolve(framesDir, 'f%04d.png'), '-vf', 'scale=640:360:flags=lanczos', '-c:v', 'libx264', '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-crf', '34', '-preset', 'slow', '-an', '-movflags', '+faststart', clip], { stdio: 'inherit' });
  assert.equal(r.status, 0, 'ffmpeg encoded the clip');
  console.log(`preview: ${clip}`);
}

// ------------------------------------------------------------------ draw calls (--calls)
// Low-power path (coarse pointer, DPR 1.25): GL draw calls per frame at the
// spawn, each circle (scene camera), mid-ride on the funicular and stairs,
// and each terrace.
const LOW_VIEWS = [{ id: 'tablet', width: 1180, height: 820 }, { id: 'phone', width: 390, height: 844 }];
if (RUN.calls) {
  const table = [];
  for (const view of LOW_VIEWS) {
    const context = await browser.newContext({ viewport: { width: view.width, height: view.height }, deviceScaleFactor: 1.25, hasTouch: true, isMobile: true });
    const page = await context.newPage();
    page.on('pageerror', e => report.errors.push(`calls/${view.id}: ${e.message}`));
    const read = async (settle = 15) => {
      await frames(page, settle);
      const a = await page.evaluate(() => ({ gl: window.__qa.gl, frames: window.__qa.frames }));
      await frames(page, 10);
      const b = await page.evaluate(() => ({ gl: window.__qa.gl, frames: window.__qa.frames }));
      return { calls: Math.round((b.gl - a.gl) / (b.frames - a.frames)) };
    };
    await page.goto(`${origin}/?harness=world`);
    await page.locator('.ac-canvas canvas').waitFor({ timeout: 60000 });
    const push = row => { table.push(row); console.log(JSON.stringify(row)); };
    push({ view: view.id, place: 'spawn (free view, port)', ...(await read()) });
    for (const c of CIRCLES) {
      await page.evaluate(id => window.__qa.circle(id), c.id);
      push({ view: view.id, place: `circle ${c.n} ${c.id}`, ...(await read()) });
    }
    await page.evaluate(() => window.__qa.circle(null));
    for (const t of TERRACES) {
      await page.evaluate(id => window.__qa.travel({ terrace: id }), t.id);
      push({ view: view.id, place: `terrace ${t.id} (free view)`, ...(await read()) });
    }
    for (const link of ['ascensor-sube', 'escalera-sube-2']) {
      await page.evaluate(id => window.__qa.travel({ link: id }), link);
      push({ view: view.id, place: `mid-ride ${link}`, ...(await read(8)) });
      await page.waitForFunction(() => window.__qa.ride === null, null, { timeout: 180000 });
    }
    await context.close();
  }
  report.calls = table;
  for (const view of LOW_VIEWS) {
    const rows = table.filter(r => r.view === view.id).map(r => r.calls).sort((a, b) => a - b);
    console.log(`${view.id}: draw calls min ${rows[0]} · median ${rows[rows.length >> 1]} · max ${rows.at(-1)} (${rows.length} places)`);
  }
}

// ------------------------------------------------------------------ G5(a) smoke
const smoke = (name, passed, detail = {}) => { report.smoke.push({ name, passed, ...detail }); console.log(JSON.stringify({ smoke: name, passed, ...detail })); };

/** Layout audit of every visible overlay card (scene, list, listening). */
async function audit(page, label) {
  const result = await page.evaluate(() => {
    const out = { overflowX: document.documentElement.scrollWidth > innerWidth + 1, clipped: [], unreachable: [], shared: [], scrollers: [], buttons: [], height: 0 };
    const cards = [...document.querySelectorAll('.ac-card, .ac-panel, .e3-card')].filter(e => e.getClientRects().length);
    const textOf = e => (e.innerText || e.getAttribute('aria-label') || '').trim().slice(0, 60);
    for (const card of cards) {
      for (const e of [card, ...card.querySelectorAll('*')]) {
        if (!e.getClientRects().length) continue;
        const cs = getComputedStyle(e);
        const hides = v => v === 'hidden' || v === 'clip';
        const scrolls = v => v === 'auto' || v === 'scroll';
        if ((hides(cs.overflowX) && e.scrollWidth > e.clientWidth + 1) || (hides(cs.overflowY) && e.scrollHeight > e.clientHeight + 1)) {
          out.clipped.push({ el: `${e.tagName.toLowerCase()}.${[...e.classList].join('.')}`, text: textOf(e), sw: e.scrollWidth, cw: e.clientWidth, sh: e.scrollHeight, ch: e.clientHeight });
        }
        if ((scrolls(cs.overflowY) && e.scrollHeight > e.clientHeight + 1) || (scrolls(cs.overflowX) && e.scrollWidth > e.clientWidth + 1)) {
          out.scrollers.push({ el: `${e.tagName.toLowerCase()}.${[...e.classList].join('.')}`, sh: e.scrollHeight, ch: e.clientHeight });
          out.height = Math.max(out.height, e.scrollHeight);
        }
        // The shared listening card's step strip (escucha-3d, all worlds) is a
        // deliberate horizontal scroller; it is recorded, not failed here.
        if (scrolls(cs.overflowX) && e.scrollWidth > e.clientWidth + 1) (e.classList.contains('e3-steps') ? out.shared : out.unreachable).push({ el: `${e.tagName.toLowerCase()}.${[...e.classList].join('.')}`, why: 'horizontal overflow inside a card' });
      }
      for (const s of [card, ...card.querySelectorAll('*')].filter(e => e.getClientRects().length && /auto|scroll/.test(getComputedStyle(e).overflowY) && e.scrollHeight > e.clientHeight + 1)) {
        s.scrollTop = s.scrollHeight;
        const last = [...s.querySelectorAll('*')].filter(e => e.getClientRects().length && e.children.length === 0 && textOf(e)).at(-1);
        if (!last) continue;
        const r = last.getBoundingClientRect(), b = s.getBoundingClientRect();
        if (r.bottom > Math.min(b.bottom, innerHeight) + 1 || r.top < b.top - 1) out.unreachable.push({ el: `${s.className} → last: ${textOf(last)}`, why: 'last element not visible after scrolling', r: [r.top, r.bottom], box: [b.top, b.bottom] });
      }
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
  smoke(`layout ${label}`, passed, { cards: result.cards, buttons: result.buttons, overflowX: result.overflowX, clipped: result.clipped, unreachable: result.unreachable, sharedKitScrollers: result.shared, scrollers: result.scrollers.length, contentHeight: result.height });
  return { passed, height: result.height };
}

async function hudAudit(page, label) {
  const covered = await page.evaluate(() => {
    const list = [...document.querySelectorAll('.ac-hud button, .e3-badge button, .ac-mapbox, .ac-touch-actions button, .ac-prompt button, .ac-ride button')].filter(e => e.getClientRects().length);
    return list.flatMap(e => {
      const r = e.getBoundingClientRect();
      const points = [[r.left + r.width / 2, r.top + r.height / 2], [r.left + r.width * 0.3, r.top + r.height * 0.3], [r.right - r.width * 0.3, r.bottom - r.height * 0.3]];
      const bad = points.map(([x, y]) => document.elementFromPoint(x, y)).filter(hit => !hit || !(hit === e || e.contains(hit)));
      const outside = r.left < -1 || r.top < -1 || r.right > innerWidth + 1 || r.bottom > innerHeight + 1;
      return bad.length || outside ? [{ el: (e.innerText || e.getAttribute('aria-label') || e.className).trim().slice(0, 40), by: bad[0] ? (bad[0].className || bad[0].tagName) : null, out: outside }] : [];
    });
  });
  smoke(`HUD ${label}: no control covered`, !covered.length, { covered });
}

async function tap(locator, label) {
  try { await locator.click({ timeout: 5000 }); } catch (error) {
    const lines = String(error.message).split('\n');
    smoke(`${label} is clickable`, false, { error: (lines.find(l => /intercepts/.test(l)) ?? lines[0]).replace(/\x1b\[[0-9;]*m/g, '').trim() });
    await locator.click({ force: true });
  }
}

async function newGamePage(viewport, options = {}) {
  const context = await browser.newContext({ viewport, deviceScaleFactor: 1.25, reducedMotion: options.reduced ? 'reduce' : 'no-preference', ...(viewport.width < 760 ? { hasTouch: true, isMobile: true } : {}) });
  if (options.noWebGL) await context.addInitScript(() => {
    const get = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...rest) { return /webgl/.test(String(type)) ? null : get.call(this, type, ...rest); };
  });
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
  await page.locator('.ac-title').waitFor();
  return { context, page };
}

/** Drive the open scene card to its last beat (every beat answered). */
async function finishCard(page) {
  for (let guard = 0; guard < 60; guard++) {
    const card = page.locator('.ac-card');
    if (!(await card.count())) return 'no-card';
    if ((await card.getAttribute('data-ended')) === 'true') return 'ended';
    const beat = card.locator('.ac-beat').last();
    const options = beat.locator('.ac-options button:not([disabled])');
    if (await options.count()) { await options.first().click(); continue; }
    const go = beat.getByRole('button', { name: 'Hecho, seguimos' });
    if (await go.count()) { await go.click(); continue; }
    return `stuck at ${await beat.getAttribute('data-beat')}`;
  }
  return 'guard';
}

const terraceOf = page => page.locator('main.ac').getAttribute('data-terrace');

if (RUN.smoke) {
  // 1. 3D view: non-blank canvas, HUD, list reaches every circle (both modes).
  for (const viewport of [{ width: 1280, height: 800 }, { width: 390, height: 844 }]) {
    const label = `3d-${viewport.width}`;
    const { context, page } = await newGamePage(viewport, { label });
    if (viewport.width === 390) { const t = await page.screenshot({ path: resolve(out, 'smoke', `${label}-title.png`) }); await keep(page, t, `${label}-title.png`, 0.8); }
    await page.getByRole('button', { name: 'Entrar en el cerro' }).click();
    await page.locator('.ac-canvas canvas').waitFor({ timeout: 60000 });
    await frames(page, 30);
    assert.equal(await page.locator('main.ac').getAttribute('data-view'), '3d');
    const shot = await page.screenshot({ path: resolve(out, 'smoke', `${label}-world.png`) });
    await keep(page, shot, `${label}-world.png`, viewport.width > 760 ? 0.5 : 0.8);
    const canvasShot = await page.locator('.ac-canvas canvas').screenshot();
    const px = await pixelStats(page, canvasShot);
    smoke(`${label} non-blank canvas`, px.colours > 200 && px.sd > 8, px);
    await hudAudit(page, `${label} conversacion`);
    for (const mode of ['conversacion', 'escucha']) {
      if (mode === 'escucha') { await tap(page.locator('.ac-hud').getByRole('radio', { name: /Comprensión auditiva/ }), `${label} HUD «Comprensión auditiva»`); await frames(page, 3); await hudAudit(page, `${label} escucha`); }
      const reached = [];
      for (const c of CIRCLES) {
        await tap(page.getByRole('button', { name: 'Lista del profesor' }), `${label} ${mode} HUD «Lista del profesor»`);
        await page.locator('.ac-all').getByRole('button', { name: new RegExp(`^${c.n}\\. `) }).click();
        const sel = mode === 'escucha' ? '.e3-card' : `.ac-card[data-scene="${c.id}"], .ac-panel[role="status"]`;
        await page.locator(sel).first().waitFor();
        const want = c.terrace;
        await page.waitForFunction(t => document.querySelector('main.ac')?.getAttribute('data-terrace') === t, want, { timeout: 15000 }).catch(() => {});
        const terrace = await terraceOf(page);
        const authored = mode === 'escucha' ? true : await page.locator(`.ac-card[data-scene="${c.id}"]`).count() > 0;
        if (viewport.width === 390 && mode === 'escucha') await audit(page, `390 listening ${c.id}`);
        reached.push({ id: c.id, authored, terrace });
        await page.keyboard.press('Escape');
        if (await page.locator(sel).count()) {
          const back = page.getByRole('button', { name: /^(Volver|Volver al cerro|Cerrar)/ });
          if (await back.count()) await back.first().click();
        }
      }
      const heightOk = reached.every(r => r.terrace === CIRCLES.find(c => c.id === r.id).terrace);
      smoke(`${label} teacher list reaches every circle at its height (${mode})`, reached.length === CIRCLES.length && heightOk, { reached, unauthored: reached.filter(r => !r.authored).map(r => r.id) });
    }
    if (viewport.width === 390) await tap(page.locator('.ac-hud').getByRole('radio', { name: /Conversación/ }), `${label} HUD «Conversación»`);
    await context.close();
  }

  // 2. The rides: funicular up (full run), funicular down (skipped), stairs up
  // (full run), walking into a marker, and reduced motion (instant cut).
  {
    const label = 'rides-1280';
    const { context, page } = await newGamePage({ width: 1280, height: 800 }, { label });
    await page.getByRole('button', { name: 'Entrar en el cerro' }).click();
    await page.locator('.ac-canvas canvas').waitFor({ timeout: 60000 });
    await frames(page, 20);
    const ride = async (button, expectTerrace, opts = {}) => {
      await tap(page.getByRole('button', { name: 'Lista del profesor' }), `${label} «Lista del profesor»`);
      const t0 = Date.now();
      await page.locator('.ac-moves').getByRole('button', { name: new RegExp(`^${button}`) }).click();
      const world = page.locator('.ac-world');
      await page.waitForFunction(() => document.querySelector('.ac-world')?.hasAttribute('data-ride'), null, { timeout: 15000 });
      const during = await world.getAttribute('data-ride');
      let mid = null;
      if (opts.shot) {
        // Mid-ride in world time (the world exposes its ride progress).
        await page.waitForFunction(at => Number(document.querySelector('.ac-world')?.dataset.rideT ?? 0) >= at, opts.at ?? 0.5, { timeout: 120000 });
        const png = await page.screenshot({ path: resolve(out, 'smoke', `${opts.shot}.png`) });
        await keep(page, png, `${opts.shot}.png`, 0.5);
        mid = await pixelStats(page, png);
        await hudAudit(page, `${label} during ${during}`);
      }
      if (opts.skip) await page.locator('.ac-ride').getByRole('button', { name: /Saltar el viaje/ }).click();
      // SwiftShader renders a few frames a second and the world clock steps at
      // most 1/20 s a frame, so a 5 s ride takes longer in wall-clock here.
      await page.waitForFunction(() => !document.querySelector('.ac-world')?.hasAttribute('data-ride'), null, { timeout: 120000 });
      const seconds = (Date.now() - t0) / 1000;
      await page.waitForFunction(t => document.querySelector('main.ac')?.getAttribute('data-terrace') === t, expectTerrace, { timeout: 15000 }).catch(() => {});
      const terrace = await terraceOf(page);
      return { during, seconds: Math.round(seconds * 10) / 10, terrace, ok: terrace === expectTerrace, mid };
    };
    const up = await ride('Subir en el ascensor', 'alto', { shot: 'ride-funicular-mid', at: 0.5 });
    smoke('funicular ride up runs (cabin + camera) to the end and arrives at the top', up.ok && up.during === 'ascensor-sube' && up.seconds >= 4, up);
    const after = await page.screenshot({ path: resolve(out, 'smoke', 'arrival-alto.png') });
    await keep(page, after, 'arrival-alto.png', 0.5);
    const down = await ride('Bajar en el ascensor', 'puerto', { skip: true });
    smoke('funicular ride down is skippable («Saltar el viaje»)', down.ok && down.seconds < 4, down);
    const stairs = await ride('Subir por la escalera', 'medio', { shot: 'ride-stairs-mid', at: 0.55 });
    smoke('stairway ride up runs and ends on the middle street', stairs.ok && stairs.during === 'escalera-sube-1', stairs);
    const mural = await page.screenshot({ path: resolve(out, 'smoke', 'arrival-medio.png') });
    await keep(page, mural, 'arrival-medio.png', 0.5);
    const stairs2 = await ride('Seguir por la escalera', 'alto', {});
    smoke('stairway ride middle → top ends at the top', stairs2.ok, stairs2);
    // Walk into the upper station's marker: the ride starts on foot too.
    // The top exit of the stairs faces up the hill; go to the upper station
    // by the list jump «Ir a: Arriba del cerro», then walk west and south.
    await tap(page.getByRole('button', { name: 'Lista del profesor' }), `${label} «Lista del profesor»`);
    await page.getByRole('button', { name: 'Ir a: Arriba del cerro' }).click();
    await frames(page, 10);
    // E at a marker: travel the list ride «Bajar», skip, then press E on the
    // lower marker? Instead check the keyboard skip on a fresh ride.
    await tap(page.getByRole('button', { name: 'Lista del profesor' }), `${label} «Lista del profesor»`);
    await page.locator('.ac-moves').getByRole('button', { name: /^Bajar en el ascensor/ }).click();
    await page.waitForFunction(() => document.querySelector('.ac-world')?.hasAttribute('data-ride'), null, { timeout: 15000 });
    await page.keyboard.press('KeyE');
    await page.waitForFunction(() => !document.querySelector('.ac-world')?.hasAttribute('data-ride'), null, { timeout: 10000 }).catch(() => {});
    await page.waitForFunction(() => document.querySelector('main.ac')?.getAttribute('data-terrace') === 'puerto', null, { timeout: 15000 }).catch(() => {});
    smoke('a ride is skippable with the keyboard (E)', (await terraceOf(page)) === 'puerto' && !(await page.locator('.ac-world[data-ride]').count()), { terrace: await terraceOf(page) });
    // On foot: the lower station marker is just north of the exit (exit faces
    // the sea). Turn round and walk north into it.
    await page.locator('.ac-canvas canvas').focus();
    await page.keyboard.down('KeyS');
    await page.waitForFunction(() => document.querySelector('.ac-world')?.hasAttribute('data-ride'), null, { timeout: 30000 }).catch(() => {});
    await page.keyboard.up('KeyS');
    const walked = await page.locator('.ac-world').getAttribute('data-ride');
    smoke('walking into the station marker starts the funicular', walked === 'ascensor-sube', { ride: walked });
    if (walked) await page.locator('.ac-ride').getByRole('button', { name: /Saltar el viaje/ }).click();
    await context.close();
  }
  {
    // Reduced motion: the app opens the plan; with «Usar el 3D» the rides cut.
    const { context, page } = await newGamePage({ width: 1280, height: 800 }, { reduced: true, label: 'rides-reduced' });
    await page.getByRole('button', { name: 'Usar el 3D' }).click();
    await page.getByRole('button', { name: 'Entrar en el cerro' }).click();
    await page.locator('.ac-canvas canvas').waitFor({ timeout: 60000 });
    await frames(page, 30);
    await tap(page.getByRole('button', { name: 'Lista del profesor' }), 'reduced «Lista del profesor»');
    await page.locator('.ac-moves').getByRole('button', { name: /^Subir en el ascensor/ }).click();
    await page.waitForFunction(() => document.querySelector('main.ac')?.getAttribute('data-terrace') === 'alto', null, { timeout: 15000 }).catch(() => {});
    const terrace = await terraceOf(page);
    smoke('reduced motion: the funicular is an instant cut', terrace === 'alto' && !(await page.locator('.ac-world[data-ride]').count()), { terrace });
    await context.close();
  }

  // 3. Fallbacks: no WebGL, «Plano sin movimiento», reduced motion. The list
  // shows the circles grouped by height, bottom to top.
  for (const [name, opts, toggle] of [['no-webgl', { noWebGL: true }, false], ['plano-sin-movimiento', {}, true], ['reduced-motion', { reduced: true }, false]]) {
    const { context, page } = await newGamePage({ width: 390, height: 844 }, { ...opts, label: name });
    if (toggle) await page.getByRole('button', { name: 'Plano sin movimiento' }).click();
    await page.getByRole('button', { name: 'Entrar en el cerro' }).click();
    await page.locator('.ac-list').waitFor();
    const view = await page.locator('main.ac').getAttribute('data-view');
    const canvases = await page.locator('.ac-canvas canvas').count();
    const spots = await page.locator('.ac-flatmap .ac-map-spot, .ac-flatmap .ac-map-done').count();
    const order = await page.locator('.ac-heights .ac-all button > span').allInnerTexts();
    const expected = CIRCLES_BY_HEIGHT.map(c => `${c.n}. ${c.name}`);
    const png = await page.screenshot({ path: resolve(out, 'smoke', `fallback-${name}.png`), fullPage: true });
    if (name === 'no-webgl') await keep(page, png, `fallback-${name}.png`, 0.6);
    smoke(`fallback ${name} renders the list in height order and the plan`, view === 'mapa' && canvases === 0 && spots === CIRCLES.length && JSON.stringify(order) === JSON.stringify(expected), { view, canvases, mapCircles: spots, order });
    if (name === 'no-webgl') await audit(page, `390 teacher list (${name})`);
    await context.close();
  }

  // 4. At 390 px, every authored card at its longest (all beats answered),
  // in the plan view and in 3D. The longest card is reported.
  let longest = { id: null, height: 0, tag: null };
  for (const flat of [true, false]) {
    const tag = flat ? 'plano' : '3d';
    const { context, page } = await newGamePage({ width: 390, height: 844 }, { label: `cards-${tag}` });
    if (flat) await page.getByRole('button', { name: 'Plano sin movimiento' }).click();
    await page.getByRole('button', { name: 'Entrar en el cerro' }).click();
    if (!flat) { await page.locator('.ac-canvas canvas').waitFor({ timeout: 60000 }); await frames(page, 10); }
    for (const c of CIRCLES) {
      if (!(await page.locator('.ac-list').count())) await tap(page.getByRole('button', { name: 'Lista del profesor' }), `390 ${tag} HUD «Lista del profesor»`);
      await page.locator('.ac-all').getByRole('button', { name: new RegExp(`^${c.n}\\. `) }).click();
      if (!(await page.locator(`.ac-card[data-scene="${c.id}"]`).count())) {
        smoke(`390 ${tag} card ${c.id}`, false, { status: 'not authored yet' });
        await page.getByRole('button', { name: 'Volver', exact: true }).click();
        continue;
      }
      await audit(page, `390 ${tag} card ${c.id} (start)`);
      const end = await finishCard(page);
      if (c.id === 'asamblea' && end === 'ended') {
        await page.locator('.ac-check input').first().check().catch(() => {});
      }
      await page.locator('.ac-card details').evaluateAll(list => list.forEach(d => { d.open = true; }));
      const r = await audit(page, `390 ${tag} card ${c.id} (end: ${end})`);
      if (r.height > longest.height) longest = { id: c.id, height: r.height, tag };
      await page.locator('.ac-card').screenshot({ path: resolve(out, 'smoke', `card-${tag}-${c.id}.png`) }).catch(() => {});
      smoke(`390 ${tag} card ${c.id} driven to its last beat`, end === 'ended' && r.passed, { end });
      if (!flat && c.id === 'asamblea') {
        // The longest state of the closing card, scrolled to its end.
        await page.locator('.ac-card-body').evaluate(e => { e.scrollTop = e.scrollHeight; });
        const png = await page.screenshot({ path: resolve(out, 'smoke', 'card-3d-asamblea-end.png') });
        await keep(page, png, 'card-390-asamblea-end.png', 0.8);
      }
      await page.locator('.ac-card').getByRole('button', { name: /^(Seguir por el cerro|Volver al cerro)/ }).last().click();
    }
    await context.close();
  }
  report.longest = longest;
  console.log(`Longest card at 390 px: ${longest.id} (${longest.tag}), ${longest.height} px of content`);
}

report.missing = [...missing].sort();
await writeFile(resolve(out, 'results.json'), JSON.stringify(report, null, 2));
await browser.close();
server.close();
console.log(`Evidence: ${out}`);
console.log(`Page/console errors: ${report.errors.length}${report.errors.length ? `\n  ${report.errors.join('\n  ')}` : ''}`);
console.log(`404s: ${report.missing.join(', ') || 'none'}`);
const failed = report.smoke.filter(s => !s.passed);
if (RUN.smoke) console.log(`Smoke: ${report.smoke.length - failed.length}/${report.smoke.length} passed`);
if (failed.length || report.errors.length) process.exitCode = 1;
