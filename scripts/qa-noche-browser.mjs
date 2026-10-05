// Optional real-browser UI regression check. Never connects to production/auth.
// Install Playwright separately or set PLAYWRIGHT_MODULE to its module path.
// CHROMIUM_EXECUTABLE_PATH / CHROMIUM_ARGS support isolated container browsers.
// NOCHE_QA_ALL=1 visits all 40 interactions per level/viewport; default is five.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdtemp, mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { contentFor } from '../app/noche-abierta/engine.mjs';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = process.env.NOCHE_QA_OUTPUT || await mkdtemp(resolve(tmpdir(), 'noche-browser-'));
await mkdir(out, { recursive: true });
await build({
  stdin: { contents: `import React from 'react';import{createRoot}from'react-dom/client';
import Noche from './app/noche-abierta/NocheAbierta';
import{initialState,startExploring,openLocation}from'./app/noche-abierta/engine.mjs';
const q=new URLSearchParams(location.search);
const state=openLocation(startExploring(initialState(q.get('level'))),q.get('place'),q.get('activity'));
sessionStorage.setItem('spanishcue:noche-abierta:vista','map');
createRoot(document.getElementById('root')).render(<Noche initial={state}/>);`, resolveDir: repo, loader: 'tsx' },
  bundle: true, format: 'esm', splitting: true, outdir: resolve(out, 'assets'), entryNames: 'lesson', jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  plugins: [{ name: 'local-preview-link', setup(builder) {
    builder.onResolve({ filter: /^next\/link$/ }, () => ({ path: 'link', namespace: 'preview' }));
    builder.onLoad({ filter: /.*/, namespace: 'preview' }, () => ({ contents: 'export default function Link({children,...props}){return <a {...props}>{children}</a>}', loader: 'jsx', resolveDir: repo }));
  } }],
});
await writeFile(resolve(out, 'index.html'), '<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Noche QA</title><style>body{margin:0}</style><link rel="stylesheet" href="/assets/lesson.css"><div id="root"></div><script type="module" src="/assets/lesson.js"></script></html>');
for (const path of ['brand/mascot/kneeling.webp', 'noche-abierta/mascot-wink.webp']) {
  await mkdir(dirname(resolve(out, path)), { recursive: true });
  await copyFile(resolve(repo, 'public', path), resolve(out, path));
}
const server = createServer(async (request, response) => {
  try {
    const path = new URL(request.url, 'http://localhost').pathname;
    const file = path === '/' ? 'index.html' : path.slice(1);
    if (file.includes('..')) { response.writeHead(400).end(); return; }
    response.setHeader('Content-Type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : file.endsWith('.webp') ? 'image/webp' : 'text/html');
    response.end(await readFile(resolve(out, file)));
  } catch { response.writeHead(404).end(); }
});
await new Promise(done => server.listen(0, '127.0.0.1', done));
const origin = `http://127.0.0.1:${server.address().port}`;
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
let browser;
const results = [], errors = [];
try {
  browser = await chromium.launch({ headless: true,
    ...(process.env.CHROMIUM_EXECUTABLE_PATH ? { executablePath: process.env.CHROMIUM_EXECUTABLE_PATH } : {}),
    ...(process.env.CHROMIUM_ARGS ? { args: JSON.parse(process.env.CHROMIUM_ARGS) } : {}),
  });
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  page.on('pageerror', error => errors.push(error.message));
  for (const [size, width, height] of [['desktop', 1440, 900], ['tablet', 820, 1180], ['mobile', 390, 844]]) {
    await page.setViewportSize({ width, height });
    for (const level of ['A1', 'B2', 'C1']) {
      let count = 0;
      for (const place of contentFor(level).LOCATIONS) for (const activity of place.activities) {
        if (process.env.NOCHE_QA_ALL !== '1' && !['cafe-alla', 'kenji', 'caro', 'foto', 'taxi-cortado'].includes(activity.id)) continue;
        await page.goto(`${origin}/?${new URLSearchParams({ level, place: place.id, activity: activity.id })}`);
        await page.locator('.na-options button').first().waitFor();
        assert.equal(await page.locator('.na-card').getAttribute('data-beat'), 'choose');
        assert.equal(await page.locator('.na-options button').count(), 3);
        assert.equal(await page.getByRole('button', { name: 'Pregunta siguiente', exact: true }).isDisabled(), true);
        const layout = await page.evaluate(() => {
          const title = document.querySelector('.na-title'), card = document.querySelector('.na-card');
          return { pageFits: document.documentElement.scrollWidth <= innerWidth + 1,
            cardFits: card.scrollWidth <= card.clientWidth + 1,
            titleFits: getComputedStyle(title).display === 'none' || title.scrollWidth <= title.clientWidth + 1 };
        });
        assert.deepEqual(layout, { pageFits: true, cardFits: true, titleFits: true }, `${level}/${size}/${activity.id}`);
        await page.getByRole('button', { name: 'Profe', exact: true }).click();
        await page.locator('.na-help-toggle').click();
        assert.ok(await page.locator('.na-card-body').evaluate(element => element.clientHeight >= 40), 'teacher/help must not collapse the question');
        await page.locator('.na-options button').nth(count % 3).click();
        assert.equal(await page.locator('.na-card').getAttribute('data-beat'), 'talk');
        assert.equal(await page.locator('.na-ask').innerText(), activity.close);
        assert.equal(await page.locator('.na-ask').count(), 1);
        assert.equal(await page.locator('.na-options button').count(), 0);
        await page.getByRole('button', { name: 'Pregunta anterior', exact: true }).click();
        assert.equal(await page.locator('.na-card').getAttribute('data-beat'), 'choose');
        if (activity.id === 'cafe-alla') {
          await page.locator('.na-card-body').scrollIntoViewIfNeeded();
          await page.screenshot({ path: resolve(out, `${level}-${size}.png`), fullPage: true });
        }
        count++;
      }
      results.push({ level, size, interactions: count, passed: true });
      console.log(JSON.stringify(results.at(-1)));
    }
  }
  assert.deepEqual(errors, []);
} finally {
  await writeFile(resolve(out, 'results.json'), JSON.stringify({ results, errors }, null, 2));
  await browser?.close();
  server.close();
  console.log(`Evidence: ${out}`);
}
