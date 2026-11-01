// Records a fluid preview clip of Noche abierta for the home page «Ver cómo funciona» card:
// the learner walks up to a conversation circle in the free city centre and opens the conversation.
// Deterministic: Playwright's fake clock advances the world exactly 1/24 s per captured frame, so the
// clip is smooth even on the software GPU used here. Usage: node scripts/record-noche-preview.mjs [out.mp4]
// Needs a finished `npm run build` (dist/server/wrangler.json) and ffmpeg.
import { spawn, spawnSync } from 'node:child_process';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');

const out = resolve(process.argv[2] ?? 'public/conversation-previews/223.mp4');
const DEBUG = process.env.NOCHE_DEBUG === '1';
// Captured at 12 fps (the software GPU takes seconds per frame) and motion-interpolated to 24 fps by ffmpeg.
const FPS = 12, OUT_FPS = 24, WIDTH = DEBUG ? 480 : 960, HEIGHT = DEBUG ? 300 : 600;
const state = await mkdtemp(join(tmpdir(), 'noche-record-'));
const frames = join(state, 'frames');
await mkdir(frames);
const env = { ...process.env, NODE_OPTIONS: [process.env.NODE_OPTIONS, `--require ${resolve('scripts/network-interfaces-shim.cjs')}`].filter(Boolean).join(' '), WRANGLER_SEND_METRICS: 'false' };
const server = spawn(process.execPath, ['node_modules/wrangler/bin/wrangler.js', 'dev', '--config', 'dist/server/wrangler.json', '--port', '0', '--ip', '127.0.0.1', '--local', '--persist-to', join(state, 'wrangler')], { env, stdio: ['ignore', 'pipe', 'pipe'] });
const origin = await new Promise((ok, fail) => {
  let output = '';
  const timer = setTimeout(() => fail(new Error(`Worker startup timed out: ${output.slice(-1500)}`)), 60000);
  const read = (chunk) => { output += chunk; const m = output.match(/Ready on (http:\/\/127\.0\.0\.1:\d+)/); if (m) { clearTimeout(timer); ok(m[1]); } };
  server.stdout.on('data', read); server.stderr.on('data', read);
  server.once('exit', (code) => fail(new Error(`Worker exited ${code}: ${output.slice(-1500)}`)));
});
console.log('worker', origin);
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
try {
  const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT }, deviceScaleFactor: 1, locale: 'es' });
  // Own animation clock instead of Playwright's: requestAnimationFrame and performance.now are driven by
  // window.__step(ms), which runs the world's frame loop in exact 1/60 s steps, so the simulation advances
  // 1/FPS s per captured frame whatever the real rendering time. Timers stay real (UI transitions).
  await page.addInitScript(() => {
    let now = 0; let queue = [];
    performance.now = () => now;
    window.requestAnimationFrame = (cb) => { queue.push(cb); return queue.length; };
    window.cancelAnimationFrame = (id) => { if (queue[id - 1]) queue[id - 1] = null; };
    window.__step = (ms) => { const end = now + ms; while (now < end) { now = Math.min(end, now + 1000 / 60); const batch = queue; queue = []; for (const cb of batch) if (cb) cb(now); } };
  });
  page.on('pageerror', (error) => console.log('pageerror', error.message));
  await page.goto(`${origin}/demo/noche-abierta?na-qa=1`, { waitUntil: 'domcontentloaded' });
  const tick = async (ms) => { await page.evaluate((ms) => window.__step(ms), ms); };
  const until = async (selector, limitMs, step = 100) => { for (let t = 0; t < limitMs; t += step) { if (await page.locator(selector).first().isVisible().catch(() => false)) return true; await tick(step); await page.waitForTimeout(40); } return false; };
  if (!await until('button.na-ts-start', 20000)) throw new Error('arrival screen never showed');
  // Cookie consent and the newsletter popup sit above the world: close them before clicking anything.
  if (await page.locator('.consent-panel .consent-actions button').first().isVisible().catch(() => false)) { await page.locator('.consent-panel .consent-actions button').first().click(); await tick(300); }
  await page.locator('button.na-ts-start').click();
  await tick(1200);
  if (await until('.na-pick-go', 4000, 200)) {
    // DOM clicks: the picker cards animate, so Playwright's actionability wait never settles.
    await page.evaluate(() => document.querySelector('button[role="radio"]')?.click());
    await tick(300); await page.waitForTimeout(200);
    await page.evaluate(() => document.querySelector('.na-pick-go')?.click());
  }
  if (!await until('[data-ready="true"]', 60000, 250)) throw new Error('world never became ready');
  await tick(1500);
  // Place the learner on the north sidewalk east of the café door (circle at -11.5, -6.9), facing west, and give the world the keyboard.
  await page.evaluate(() => { const box = document.querySelector('[data-ready="true"]'); box.naWarp?.(8, -5.5, -Math.PI / 2); });
  await tick(400);
  await page.evaluate(() => document.querySelector('.na-world')?.focus());
  await tick(200);
  const where = () => page.evaluate(() => JSON.stringify(document.querySelector('[data-ready="true"]')?.naPlayer?.() ?? null));
  console.log('start', await where());
  let index = 0;
  // page.screenshot waits for an animation frame that the fake clock never fires; the raw CDP capture does not.
  const cdp = await page.context().newCDPSession(page);
  const capture = async () => { const { data } = await cdp.send('Page.captureScreenshot', { format: 'png' }); await writeFile(join(frames, `${String(index++).padStart(4, '0')}.png`), Buffer.from(data, 'base64')); };
  const frame = async () => { await tick(1000 / FPS); await capture(); };
  // Already running when the clip starts (the first moving frame carries the pent-up step), then run until the
  // door prompt appears (at most 6 s), stop, E, and 3.5 s of the open scene.
  await page.keyboard.down('KeyW');
  for (let i = 0; i < 4; i++) await tick(1000 / FPS);
  console.log('running', await where());
  let arrived = false;
  for (let i = 0; i < FPS * 6; i++) { await frame(); if (i % FPS === 0) console.log('walk', i / FPS, await where()); const promptText = await page.evaluate(() => document.querySelector('.na-prompt3d')?.textContent ?? ''); if (promptText) console.log('prompt', promptText, await where()); if (/Caf|ENTRAR/i.test(promptText)) { arrived = true; break; } }
  await page.keyboard.up('KeyW');
  console.log('arrived', arrived, 'frames', index, await where());
  for (let i = 0; i < FPS * 0.4; i++) await frame();
  await page.keyboard.press('KeyE');
  for (let i = 0; i < FPS * 4; i++) await frame();
  console.log('frames', index);
  const ff = spawnSync('ffmpeg', ['-y', '-framerate', String(FPS), '-i', join(frames, '%04d.png'), '-vf', `minterpolate=fps=${OUT_FPS}:mi_mode=mci:mc_mode=aobmc:vsbmc=1`, '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '24', '-preset', 'slow', '-movflags', '+faststart', '-an', out], { stdio: 'inherit' });
  if (ff.status !== 0) throw new Error('ffmpeg failed');
  console.log('wrote', out);
} finally {
  await browser.close();
  server.kill();
  await rm(state, { recursive: true, force: true }).catch(() => {});
}
