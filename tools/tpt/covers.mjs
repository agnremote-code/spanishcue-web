#!/usr/bin/env node
// T2 · cover.png (1000x750) from cover-template.html and 3 preview PNGs (800x600)
// per resource, into dist/tpt/{slug}/. Usage: node tools/tpt/covers.mjs [--only=slug]
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { DIST, ROOT, esc, lessonIndex, loadChromium, loadContent, selectResources } from './lib.mjs';
import { teacherGuideHtml, worksheetHtml } from './templates.mjs';

const TEMPLATE = readFileSync(new URL('./cover-template.html', import.meta.url), 'utf8');
const MASCOT = `data:image/webp;base64,${readFileSync(join(ROOT, 'public', 'brand', 'mascot', 'pointing.webp')).toString('base64')}`;
const PALETTES = [
  ['#e8590c', '#f59f00'], ['#1c7ed6', '#15aabf'], ['#7048e8', '#d6336c'], ['#2b8a3e', '#94d82d'],
  ['#c2255c', '#f76707'], ['#0b7285', '#3bc9db'], ['#5f3dc4', '#4dabf7'], ['#d9480f', '#e64980'],
];

export function coverHtml(item, index = 0) {
  const [a, b] = item.cover_colors || PALETTES[index % PALETTES.length];
  const [head, ...rest] = item.title.split(':');
  const headline = item.cover_headline || head.trim();
  const subline = item.cover_subline ?? rest.join(':').trim();
  const size = headline.length > 34 ? 66 : headline.length > 22 ? 78 : 92;
  const mascot = item.cover_mascot === false ? '' : `<img class="mascot" src="${MASCOT}" alt="">`;
  return TEMPLATE
    .replaceAll('{{COLOR_A}}', a).replaceAll('{{COLOR_B}}', b)
    .replace('{{LEVEL}}', esc(item.cover_level || item.level_label))
    .replace('{{HEADLINE}}', esc(headline))
    .replace('{{SUBLINE}}', esc(subline))
    .replace('{{GRADES}}', esc(item.grade_range))
    .replace('{{TITLE_SIZE}}', String(size))
    .replace('{{TITLE_RIGHT}}', mascot ? '330' : '64')
    .replace('{{MASCOT}}', mascot);
}

function previewHtml(item, index, label, shot, n) {
  const [a, b] = item.cover_colors || PALETTES[index % PALETTES.length];
  return `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0}html,body{width:800px;height:600px;overflow:hidden}
body{font-family:"Inter","Helvetica Neue",Arial,sans-serif;background:linear-gradient(135deg,${a},${b});position:relative;color:#fff}
.tag{position:absolute;top:26px;left:30px;font-weight:900;letter-spacing:.28em;font-size:16px}
.lab{position:absolute;top:58px;left:30px;font-weight:900;font-size:34px;line-height:1.05;width:250px}
.num{position:absolute;bottom:26px;left:30px;font-weight:800;font-size:15px;letter-spacing:.14em;background:rgba(0,0,0,.22);padding:6px 12px;border-radius:8px}
.paper{position:absolute;right:40px;top:30px;width:430px;height:608px;background:#fff;border-radius:6px;box-shadow:0 18px 40px rgba(0,0,0,.35);overflow:hidden;transform:rotate(2deg)}
.paper img{width:100%;display:block}
.stamp{position:absolute;right:28px;bottom:30px;background:#fff;color:${a};font-weight:900;padding:8px 16px;border-radius:999px;font-size:16px;letter-spacing:.12em}
</style></head><body><div class="tag">SPANISHCUE</div><div class="lab">${esc(label)}</div>
<div class="num">PREVIEW ${n} OF 3 · ${esc(item.title.split(':')[0])}</div>
<div class="paper"><img src="${shot}"></div><div class="stamp">PREVIEW</div></body></html>`;
}

const SCREEN_A4 = '<style>@media screen{body{width:794px;padding:56px 57px;background:#fff}}</style>';

async function pageShot(page, html, pageIndex) {
  await page.setViewportSize({ width: 794, height: 1123 });
  await page.setContent(html.replace('</head>', `${SCREEN_A4}</head>`), { waitUntil: 'load' });
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const y = Math.min(pageIndex * 1123, Math.max(0, height - 1123));
  const buf = await page.screenshot({ clip: { x: 0, y, width: 794, height: 1123 }, fullPage: true });
  return `data:image/png;base64,${buf.toString('base64')}`;
}

/** The three preview pages: guide page 1, worksheet page 1, and a later worksheet page. */
export function previewSources(item) {
  return item.previews || [
    { label: 'Teacher guide with a 60-minute script', doc: 'guide', page: 0 },
    { label: 'Print-and-go student worksheet', doc: 'worksheet', page: 0 },
    { label: 'Complete answer key included', doc: 'guide', page: 1 },
  ];
}

export async function renderCovers(items, { lookup = {} } = {}) {
  const chromium = await loadChromium();
  const browser = await chromium.launch();
  const page = await browser.newPage();
  try {
    for (const [i, item] of items.entries()) {
      const dir = join(DIST, item.slug);
      mkdirSync(dir, { recursive: true });
      const index = item.palette ?? i;
      await page.setViewportSize({ width: 1000, height: 750 });
      await page.setContent(coverHtml(item, index), { waitUntil: 'load' });
      await page.screenshot({ path: join(dir, 'cover.png'), clip: { x: 0, y: 0, width: 1000, height: 750 } });
      for (const [n, p] of previewSources(item).entries()) {
        const source = p.from ? lookup[p.from] : item;
        const html = p.doc === 'guide' ? teacherGuideHtml(source) : worksheetHtml(source);
        const shot = await pageShot(page, html, p.page);
        await page.setViewportSize({ width: 800, height: 600 });
        await page.setContent(previewHtml(item, index, p.label, shot, n + 1), { waitUntil: 'load' });
        await page.screenshot({ path: join(dir, `preview-${n + 1}.png`), clip: { x: 0, y: 0, width: 800, height: 600 } });
      }
      writeFileSync(join(dir, 'covers.json'), JSON.stringify({ cover: 'cover.png', previews: [1, 2, 3].map((n) => `preview-${n}.png`) }, null, 2));
      console.log(`✓ ${item.slug}: cover.png + 3 previews`);
    }
  } finally {
    await browser.close();
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { resources, bundles = [] } = loadContent();
  const index = lessonIndex();
  const ready = (r) => r.status !== 'missing' && r.lessons.every((l) => (l.sources || []).length && l.sources.every((s) => index.has(s.path)));
  const lookup = Object.fromEntries(resources.map((r) => [r.slug, r]));
  const picked = selectResources([...resources, ...bundles]).filter((r) => r.includes || ready(r));
  await renderCovers(picked, { lookup });
}
