// Renders the covers from the painted scenes in scripts/covers/art/ to WebP.
//   node scripts/covers/render.mjs mas-alla            → public/mas-alla/portada.webp (the scene alone)
//   node scripts/covers/render.mjs clasicas            → public/conversation-classics/<slug>.webp
//   node scripts/covers/render.mjs mundos [slug]       → the 3D worlds' illustrated covers (art/<art>.webp cropped to 1200×750)
// Needs Playwright's Chromium and python3 with Pillow (the WebP encoder).
import { execFileSync } from 'node:child_process';
import { mkdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const name = process.argv[2] ?? 'mas-alla';
const only = process.argv[3];
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright').then(m => m.default ?? m);
const browser = await chromium.launch();

// fit: 'cover16x10' crops the sides to 16:10 and scales to 1200×750 (the 3D covers' size).
function webp(png, target, quality = 74, fit = '') {
  execFileSync('python3', ['-I', '-c', 'import sys,io;from PIL import Image\nim=Image.open(io.BytesIO(sys.stdin.buffer.read())).convert("RGB").resize((1600,900),Image.LANCZOS)\nif sys.argv[3]:im=im.crop((80,0,1520,900)).resize((1200,750),Image.LANCZOS)\nim.save(sys.argv[1],"WEBP",quality=int(sys.argv[2]),method=6)', target, String(quality), fit], { input: png });
}

const art = slug => pathToFileURL(resolve(repo, 'scripts/covers/art', `${slug}.webp`)).href;
const url = pathToFileURL(resolve(repo, 'scripts/covers', `${name}.html`)).href;
// 3D worlds: key art in the grammar mascots' cartoon style (Canva AI, 2026-11-02), never game screenshots.
const WORLDS = [
  ['mas-alla', 'public/mas-alla/portada.webp'],
  ['vuelo-cancelado', 'public/vuelo-cancelado/portada.webp'],
  ['el-consorcio', 'public/el-consorcio/portada.webp'],
  ['el-tren-de-las-2340', 'public/el-tren-de-las-2340/portada.webp'],
  ['noche-abierta', 'public/noche-abierta/portada.webp', ''], // 16:9 kept (tests/noche-abierta)
  ['hospital-san-casi-vivo', 'public/hospital-san-casi-vivo/portada.webp'],
  ['madrid-infectada', 'public/madrid-infectada/portada.webp'],
  ['marketing-de-casinos', 'public/marketing-de-casinos/portada.webp'],
  ['reino', 'public/reino/portada.webp'],
  ['la-feria-de-villaluz', 'public/la-feria-de-villaluz/portada.webp'],
];
if (name === 'mas-alla' || name === 'mundos') {
  for (const [art, path, fit = 'cover16x10'] of WORLDS) {
    if (name === 'mas-alla' ? art !== 'mas-alla' : only && art !== only) continue;
    const target = resolve(repo, path);
    webp(await readFile(resolve(repo, 'scripts/covers/art', `${art}.webp`)), target, fit ? 80 : 70, fit);
    console.log(target);
  }
} else {
  const { CLASSICS } = await import(pathToFileURL(resolve(repo, 'scripts/covers/clasicas.mjs')).href);
  const out = resolve(repo, 'public/conversation-classics');
  await mkdir(out, { recursive: true });
  for (const cover of CLASSICS) {
    if (only && cover.slug !== only) continue;
    const fresh = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
    await fresh.addInitScript(k => { window.COVER = k; }, { ...cover, artUrl: art(cover.art) });
    await fresh.goto(url);
    await fresh.waitForFunction(() => document.title === 'ready');
    const png = await fresh.locator('#cover').screenshot();
    await fresh.close();
    webp(png, resolve(out, `${cover.slug}.webp`));
    console.log(cover.slug);
  }
}
await browser.close();
