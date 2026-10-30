// Renders a cover painted in scripts/covers/<name>.html to a WebP.
//   node scripts/covers/render.mjs mas-alla            → public/mas-alla/cover.webp
//   node scripts/covers/render.mjs clasicas            → public/conversation-classics/<slug>.webp
// Needs Playwright's Chromium and python3 with Pillow (the WebP encoder).
import { execFileSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const name = process.argv[2] ?? 'mas-alla';
const only = process.argv[3];
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright').then(m => m.default ?? m);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
page.on('pageerror', e => { console.error(e); process.exitCode = 1; });

// fit: 'cover16x10' crops the sides to 16:10 and scales to 1200×750 (the 3D covers' size).
function webp(png, target, quality = 82, fit = '') {
  execFileSync('python3', ['-I', '-c', 'import sys,io;from PIL import Image\nim=Image.open(io.BytesIO(sys.stdin.buffer.read())).convert("RGB")\nif sys.argv[3]:im=im.crop((80,0,1520,900)).resize((1200,750),Image.LANCZOS)\nim.save(sys.argv[1],"WEBP",quality=int(sys.argv[2]),method=6)', target, String(quality), fit], { input: png });
}

const url = pathToFileURL(resolve(repo, 'scripts/covers', `${name}.html`)).href;
if (name === 'mas-alla') {
  await page.goto(url);
  await page.waitForFunction(() => document.title === 'ready');
  const png = await page.locator('canvas').screenshot();
  const target = resolve(repo, 'public/mas-alla/cover.webp');
  webp(png, target, 84, 'cover16x10');
  console.log(target);
} else {
  const { CLASSICS } = await import(pathToFileURL(resolve(repo, 'scripts/covers/clasicas.mjs')).href);
  const out = resolve(repo, 'public/conversation-classics');
  await mkdir(out, { recursive: true });
  for (const cover of CLASSICS) {
    if (only && cover.slug !== only) continue;
    const fresh = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
    await fresh.addInitScript(k => { window.COVER = k; }, cover);
    await fresh.goto(url);
    await fresh.waitForFunction(() => document.title === 'ready');
    const png = await fresh.locator('#cover').screenshot();
    await fresh.close();
    webp(png, resolve(out, `${cover.slug}.webp`));
    console.log(cover.slug);
  }
}
await browser.close();
