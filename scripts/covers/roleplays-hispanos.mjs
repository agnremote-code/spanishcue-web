// Covers of Roleplays del mundo hispano (ids 265–284): the country's painted
// scene (scripts/covers/art/roleplays-<slug>.webp, cartoon key art made with
// ChatGPT, a different protagonist per country) under its flag and name.
//   node scripts/covers/roleplays-hispanos.mjs [slug]
//   → public/roleplays-hispanos/portadas/<slug>.webp (1200×750)
// Needs Playwright's Chromium and python3 with Pillow (the WebP encoder).
import { execFileSync } from 'node:child_process';
import { mkdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const only = process.argv[2];
const paises = await readFile(resolve(repo, 'app/roleplays-hispanos/paises.ts'), 'utf8');
const rows = [...paises.matchAll(/m\('([a-z-]+)', \d+, '([^']+)', '([a-z]+)'/g)].map(([, slug, name, iso]) => ({ slug, name, iso }));
const out = resolve(repo, 'public/roleplays-hispanos/portadas');
await mkdir(out, { recursive: true });
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright').then(m => m.default ?? m);
const browser = await chromium.launch();
const url = pathToFileURL(resolve(repo, 'scripts/covers/roleplays-hispanos.html')).href;
for (const { slug, name, iso } of rows) {
  if (only && slug !== only) continue;
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });
  await page.addInitScript(k => { window.COVER = k; }, {
    name,
    artUrl: pathToFileURL(resolve(repo, 'scripts/covers/art', `roleplays-${slug}.webp`)).href,
    flagUrl: pathToFileURL(resolve(repo, 'public/roleplays-hispanos/banderas', `${iso}.svg`)).href,
  });
  await page.goto(url);
  await page.waitForFunction(() => document.title === 'ready');
  const png = await page.locator('#cover').screenshot();
  await page.close();
  execFileSync('python3', ['-I', '-c', 'import sys,io;from PIL import Image\nim=Image.open(io.BytesIO(sys.stdin.buffer.read())).convert("RGB").resize((1200,750),Image.LANCZOS)\nq=80\nwhile True:\n b=io.BytesIO();im.save(b,"WEBP",quality=q,method=6)\n if b.tell()<118000 or q<=40:break\n q-=4\nopen(sys.argv[1],"wb").write(b.getvalue())', resolve(out, `${slug}.webp`)], { input: png });
  console.log(slug);
}
await browser.close();
