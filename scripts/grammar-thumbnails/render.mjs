// Renders public/grammar-thumbnails/<id>.webp from data.mjs.
// Needs playwright-core and a Chromium (PLAYWRIGHT_CHROMIUM or /opt/pw-browsers/chromium)
// plus network access to Google Fonts. Usage: node scripts/grammar-thumbnails/render.mjs [id ...]
import { readFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import sharp from 'sharp';
import { families, thumbnails } from './data.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_CORE || 'playwright-core');
const levelColors = { A0: '#2e9ed9', A1: '#30bda2', A2: '#77b94a', B1: '#f4a52d', B2: '#f1754d', C1: '#9d70d4', C2: '#374f76' };
const W = 1280, H = 720, AXIS = 96, NOW = 0.62;
// Some poses share their PNG with a neighbouring sprite: keep only the figure (x range).
const crops = { headphones: [168, 500], mate: [44, 418], teacher: [158, 543], grammar: [55, 438] };

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const mark = (s) => esc(s).replace(/\*([^*]+)\*/g, '<mark>$1</mark>');
const alpha = (hex, a) => hex + Math.round(a * 255).toString(16).padStart(2, '0');

function timeline(items, ink) {
  const w = 716, px = (x) => 14 + x * (w - 40);
  const out = [];
  out.push(`<line x1="8" y1="${AXIS}" x2="${w - 14}" y2="${AXIS}" stroke="#9aa6b4" stroke-width="3" stroke-linecap="round"/>`);
  out.push(`<path d="M${w - 26} ${AXIS - 9} L${w - 12} ${AXIS} L${w - 26} ${AXIS + 9}" fill="none" stroke="#9aa6b4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`);
  out.push(`<line x1="${px(NOW)}" y1="${AXIS - 16}" x2="${px(NOW)}" y2="${AXIS + 16}" stroke="#5d6b7b" stroke-width="3"/>`);
  for (const [x, t, anchor] of [[8, 'antes', 'start'], [px(NOW), 'ahora', 'middle'], [w - 12, 'después', 'end']])
    out.push(`<text x="${x}" y="${AXIS + 52}" text-anchor="${anchor}" class="axis${t === 'ahora' ? ' now' : ''}">${t}</text>`);
  const labels = [];
  for (const it of items) {
    if (it.type === 'span') {
      out.push(`<rect x="${px(it.x1)}" y="${AXIS - 10}" width="${px(it.x2) - px(it.x1)}" height="20" rx="10" fill="${alpha(ink, 0.32)}"/>`);
      labels.push([(px(it.x1) + px(it.x2)) / 2, it.label]);
    } else if (it.type === 'arc') {
      const a = px(it.x1), b = px(it.x2);
      out.push(`<path d="M${a} ${AXIS} Q${(a + b) / 2} ${AXIS - 80} ${b - 4} ${AXIS - 6}" fill="none" stroke="${ink}" stroke-width="5" stroke-linecap="round"/>`);
      out.push(`<circle cx="${a}" cy="${AXIS}" r="9" fill="${ink}"/>`);
      labels.push([(a + b) / 2, it.label, true]);
    } else if (it.type === 'dash') {
      const a = px(it.x1), b = px(it.x2);
      out.push(`<path d="M${a} ${AXIS} C${a + 40} ${AXIS - 50} ${b - 50} ${AXIS - 40} ${b} ${AXIS - 40}" fill="none" stroke="${ink}" stroke-width="4" stroke-dasharray="9 8" stroke-linecap="round"/>`);
      out.push(`<circle cx="${b}" cy="${AXIS - 40}" r="10" fill="#fff" stroke="${ink}" stroke-width="4"/>`);
      const right = b + 22 + it.label.length * 17 < w;
      out.push(`<text x="${right ? b + 22 : b - 22}" y="${AXIS - 30}" text-anchor="${right ? 'start' : 'end'}" class="lab" fill="${ink}">${esc(it.label)}</text>`);
    } else if (it.type === 'ticks') {
      for (const x of it.xs) out.push(`<circle cx="${px(x)}" cy="${AXIS}" r="8" fill="${ink}"/>`);
      labels.push([(px(it.xs[0]) + px(it.xs.at(-1))) / 2, it.label]);
    }
  }
  for (const it of items) if (it.type === 'dot') {
    out.push(`<circle cx="${px(it.x)}" cy="${AXIS}" r="${it.n ? 16 : 12}" fill="${ink}" stroke="#fff" stroke-width="4"/>`);
    if (it.n) out.push(`<text x="${px(it.x)}" y="${AXIS + 7}" text-anchor="middle" class="num">${it.n}</text>`);
    const dashStart = items.some((d) => d.type === 'dash' && d.x1 === it.x);
    if (dashStart) out.push(`<text x="${px(it.x) + 6}" y="${AXIS - 30}" text-anchor="end" class="lab" fill="${ink}">${esc(it.label)}</text>`);
    else labels.push([px(it.x), it.label]);
  }
  labels.sort((p, q) => p[0] - q[0]);
  let last = -1e9, row = 0;
  for (const [x, label, high] of labels) {
    row = x - last < 190 ? 1 - row : 0; last = x;
    const y = high ? 30 : (row ? 24 : 64);
    out.push(`<text x="${x}" y="${y}" text-anchor="middle" class="lab" fill="${ink}">${esc(label)}</text>`);
  }
  return `<svg class="tl" width="${w}" height="160" viewBox="0 0 ${w} 160">${out.join('')}</svg>`;
}

function page(t, mascot) {
  const f = families[t.family];
  const size = t.topic.length <= 14 ? 116 : t.topic.length <= 20 ? 98 : t.topic.length <= 26 ? 84 : 74;
  const levelColor = levelColors[t.level.slice(0, 2)] || levelColors.A0;
  const visual = t.timeline ? timeline(t.timeline, f.ink)
    : `<div class="chips">${t.chips.map((c) => `<span>${esc(c)}</span>`).join('')}</div>`;
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Nunito:wght@600;700;800&display=block" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0}
body{width:${W}px;height:${H}px;overflow:hidden;background:${f.bg};font-family:Nunito,sans-serif;position:relative}
body::before{content:"";position:absolute;inset:0;background-image:radial-gradient(${alpha(f.ink, 0.13)} 2px,transparent 2.5px);background-size:34px 34px;mask-image:linear-gradient(90deg,transparent 0%,#000 55%)}
.sun{position:absolute;width:560px;height:560px;border-radius:50%;right:-70px;top:96px;background:${alpha(f.ink, 0.14)}}
.sun2{position:absolute;width:300px;height:300px;border-radius:50%;right:330px;top:-150px;background:${alpha(f.ink, 0.07)}}
.mascot{position:absolute;right:10px;bottom:-6px;height:640px;max-width:500px;object-fit:contain;object-position:bottom right;filter:drop-shadow(0 18px 24px rgba(30,40,60,.16))}
.col{position:absolute;left:70px;top:70px;width:716px}
.lvl{display:inline-block;letter-spacing:.03em;font-weight:800;color:#fff;background:${levelColor};padding:6px 22px 8px;border-radius:999px;font-size:34px}
h1{font-family:Fraunces,serif;font-weight:600;font-size:${size}px;line-height:1.02;letter-spacing:-.015em;color:#1d2733;margin:18px 0 26px;max-width:716px}
.ex{display:inline-block;background:#fff;border-radius:26px;padding:20px 30px 22px;font-size:50px;line-height:1.22;font-weight:700;color:#2b3542;box-shadow:0 12px 30px rgba(31,45,66,.09);max-width:716px}
mark{color:${f.ink};font-weight:800;background:linear-gradient(transparent 60%,${alpha(f.ink, 0.22)} 60%,${alpha(f.ink, 0.22)} 92%,transparent 92%);padding:0 2px}
.vis{margin-top:22px}
.chips{display:flex;flex-wrap:wrap;gap:14px;max-width:716px}
.chips span{font-size:40px;font-weight:800;color:${f.ink};background:rgba(255,255,255,.72);border:3px solid ${alpha(f.ink, 0.35)};border-radius:999px;padding:4px 24px 7px}
.tl text{font-family:Nunito,sans-serif}
.lab{font-size:34px;font-weight:800}
.axis{font-size:27px;font-weight:700;fill:#7d8a99}.axis.now{fill:#3d4a5a;font-weight:800}
.num{font-size:19px;font-weight:800;fill:#fff}
</style></head><body>
<div class="sun2"></div><div class="sun"></div>
<img class="mascot" src="${mascot}">
<div class="col">
<span class="lvl">${esc(t.level)}</span>
<h1>${esc(t.topic)}</h1>
<div class="ex">${mark(t.example)}</div>
<div class="vis">${visual}</div>
</div></body></html>`;
}

const only = new Set(process.argv.slice(2).map(Number));
const list = thumbnails.filter((t) => !only.size || only.has(t.id));
const mascots = {};
for (const t of list) {
  if (mascots[t.mascot]) continue;
  let img = sharp(readFileSync(`public/mascots/${t.mascot}.png`));
  const crop = crops[t.mascot];
  if (crop) { const { height } = await img.metadata(); img = img.extract({ left: crop[0], top: 0, width: crop[1] - crop[0], height }); }
  mascots[t.mascot] = `data:image/png;base64,${(await img.png().toBuffer()).toString('base64')}`;
}
mkdirSync('public/grammar-thumbnails', { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM || '/opt/pw-browsers/chromium' });
const tab = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1.25 });
for (const t of list) {
  await tab.setContent(page(t, mascots[t.mascot]), { waitUntil: 'networkidle' });
  await tab.evaluate(() => document.fonts.ready);
  const png = await tab.screenshot({ type: 'png' });
  await sharp(png).webp({ quality: 84 }).toFile(`public/grammar-thumbnails/${t.id}.webp`);
  console.log('ok', t.id);
}
await browser.close();
