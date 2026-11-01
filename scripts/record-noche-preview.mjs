// Records a fluid preview clip of Noche abierta for the home page «Ver cómo funciona» card:
// the learner walks up to a conversation circle in the free city centre and opens the conversation.
// Deterministic: Playwright's fake clock advances the world exactly 1/24 s per captured frame, so the
// clip is smooth even on the software GPU used here. Usage: node scripts/record-noche-preview.mjs [out.mp4]
// Needs a finished `npm run build` (dist/server/wrangler.json) and ffmpeg.
import { spawn, spawnSync } from 'node:child_process';
import { mkdtemp, mkdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { chromium } from 'playwright';

const out = resolve(process.argv[2] ?? 'public/conversation-previews/223.mp4');
const FPS = 24, WIDTH = 960, HEIGHT = 600;
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
  await page.clock.install({ time: new Date('2026-11-01T21:30:00Z') });
  page.on('pageerror', (error) => console.log('pageerror', error.message));
  await page.goto(`${origin}/demo/noche-abierta?na-qa=1`, { waitUntil: 'domcontentloaded' });
  const tick = async (ms) => { await page.clock.runFor(ms); };
  const until = async (selector, limitMs, step = 100) => { for (let t = 0; t < limitMs; t += step) { if (await page.locator(selector).first().isVisible().catch(() => false)) return true; await tick(step); } return false; };
  if (!await until('button.na-ts-start', 20000)) throw new Error('arrival screen never showed');
  await page.locator('button.na-ts-start').click();
  await tick(1200);
  if (await until('.na-pick-go', 4000, 200)) {
    const options = page.locator('.na-pick-go').locator('xpath=..').locator('button[role="radio"]');
    const count = await options.count();
    const picks = count ? options : page.locator('button[role="radio"]:not(.na-chip)');
    await picks.first().click();
    await tick(300);
    await page.locator('.na-pick-go').click();
  }
  if (!await until('[data-ready="true"]', 60000, 250)) throw new Error('world never became ready');
  await tick(1500);
  // Place the learner on the street south of Cine Rivoli, facing the person waiting at its door (circle at 15, -32.2).
  await page.evaluate(() => { const box = document.querySelector('[data-ready="true"]'); box.naWarp?.(15, -17, Math.PI); });
  await tick(400);
  const box = page.locator('[data-ready="true"]').first();
  await box.click({ position: { x: WIDTH / 2, y: HEIGHT * 0.7 } });
  await tick(200);
  let index = 0;
  const capture = async () => { await page.screenshot({ path: join(frames, `${String(index++).padStart(4, '0')}.png`), type: 'png' }); };
  const frame = async () => { await tick(1000 / FPS); await capture(); };
  // 0.8 s standing, then walk until the prompt appears (at most 7 s), then E and 4 s of the open conversation.
  for (let i = 0; i < FPS * 0.8; i++) await frame();
  await page.keyboard.down('KeyW');
  let arrived = false;
  for (let i = 0; i < FPS * 7; i++) { await frame(); if (await page.locator('.na-prompt3d').isVisible().catch(() => false)) { arrived = true; break; } }
  await page.keyboard.up('KeyW');
  console.log('arrived', arrived, 'frames', index);
  for (let i = 0; i < FPS * 0.5; i++) await frame();
  await page.keyboard.press('KeyE');
  for (let i = 0; i < FPS * 4; i++) await frame();
  console.log('frames', index);
  const ff = spawnSync('ffmpeg', ['-y', '-framerate', String(FPS), '-i', join(frames, '%04d.png'), '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '24', '-preset', 'slow', '-movflags', '+faststart', '-an', out], { stdio: 'inherit' });
  if (ff.status !== 0) throw new Error('ffmpeg failed');
  console.log('wrote', out);
} finally {
  await browser.close();
  server.kill();
  await rm(state, { recursive: true, force: true }).catch(() => {});
}
