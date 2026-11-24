// Records the hover previews of Roleplays del mundo hispano (public/conversation-previews/<id>.mp4):
// five real states of the class (scene list, dialogue, Tu turno with help, Poca ayuda, Cambio de roles)
// screenshotted from a running dev server and cross-faded by ffmpeg into 8 s, 640×360 H.264.
// Usage: node scripts/record-roleplays-preview.mjs <url of a page rendering <Roleplays slug={?slug}>> [slug]
// (the class routes are PRO, so point it at a local page that renders the engine with ?slug=).
import { createRequire } from 'node:module';
import { readFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
const repo = process.cwd();
const { chromium } = createRequire(repo + '/package.json')(process.env.PLAYWRIGHT_MODULE || 'playwright');
const [base, only] = process.argv.slice(2);
if (!base) throw new Error('usage: record-roleplays-preview.mjs <url> [slug]');
const paises = readFileSync(repo + '/app/roleplays-hispanos/paises.ts', 'utf8');
const rows = [...paises.matchAll(/m\('([a-z-]+)', (\d+),/g)].map(([, slug, id]) => ({ slug, id }));
const browser = await chromium.launch();
const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
for (const { slug, id } of rows.filter(r => !only || r.slug === only)) {
  const dir = mkdtempSync(join(tmpdir(), 'rp-'));
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1, userAgent: ua });
  await page.goto(`${base}?slug=${slug}`, { waitUntil: 'networkidle', timeout: 120000 });
  await page.waitForSelector('.rph-card', { timeout: 60000 });
  // Site chrome that is not the class (free-version bar, chat bubble, consent banner) stays out of the clip.
  await page.addStyleTag({ content: '.mk-free-version,.bauti,.consent-panel{display:none!important}' });
  await page.waitForTimeout(1200);
  const shot = async i => { await page.waitForTimeout(350); await page.screenshot({ path: `${dir}/${i}.png` }); };
  await shot(0);
  await page.click('.rph-card');
  await shot(1);
  await page.click('text=2 · Tu turno');
  await page.click('.rph-option >> nth=0');
  await shot(2);
  await page.click('text=Poca ayuda');
  await page.click('.rph-chip >> nth=1');
  await shot(3);
  await page.click('text=3 · Cambio de roles');
  await shot(4);
  await page.close();
  const inputs = [0, 1, 2, 3, 4].flatMap(i => ['-loop', '1', '-t', '2', '-i', `${dir}/${i}.png`]);
  let f = '', last = '[0:v]';
  for (let i = 1; i < 5; i++) { const o = i === 4 ? '[v]' : `[x${i}]`; f += `${last}[${i}:v]xfade=transition=fade:duration=0.4:offset=${(i * 1.6).toFixed(1)}${o};`; last = o; }
  f += '[v]scale=640:360:flags=lanczos,format=yuv420p[out]';
  const r = spawnSync('ffmpeg', ['-y', '-v', 'error', ...inputs, '-filter_complex', f, '-map', '[out]', '-r', '24', '-c:v', 'libx264', '-preset', 'slow', '-crf', '28', '-movflags', '+faststart', '-an', `${repo}/public/conversation-previews/${id}.mp4`], { stdio: 'inherit' });
  if (r.status) throw new Error('ffmpeg failed ' + slug);
  console.log(id, slug, 'ok');
}
await browser.close();
