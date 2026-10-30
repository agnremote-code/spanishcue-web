#!/usr/bin/env node
// Library covers of the 3D country worlds: one waving flag per country and a
// collage for the «Países» card, drawn from app/mundo-3d/banderas.mjs so the
// covers and the flags inside the worlds always match.
// Usage: node scripts/flag-previews.mjs  → public/catalog-thumbnails/banderas/*.webp
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public/catalog-thumbnails/banderas');
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const source = readFileSync(join(root, 'app/mundo-3d/banderas.mjs'), 'utf8').replace(/^export /gm, '');

const page = `
${source}
const W = 1200, H = 800;
function wavingFlag(ctx, id, cx, cy, fw, amp, phase) {
  const ratio = FLAG_RATIO[id], fh = fw / ratio;
  const flat = document.createElement('canvas'); flat.width = Math.round(fw * 2); flat.height = Math.round(fh * 2);
  drawFlag(flat.getContext('2d'), id, flat.width, flat.height);
  const x0 = cx - fw / 2, y0 = cy - fh / 2, strip = 2, k = (Math.PI * 2.2) / fw;
  const wave = x => Math.sin(x * k + phase) * amp * (0.25 + 0.75 * (x / fw));
  // Soft shadow under the cloth.
  ctx.save(); ctx.filter = 'blur(26px)'; ctx.fillStyle = 'rgba(0,0,0,.35)';
  ctx.beginPath(); for (let x = 0; x <= fw; x += 8) ctx.lineTo(x0 + x + 18, y0 + wave(x) + 28); for (let x = fw; x >= 0; x -= 8) ctx.lineTo(x0 + x + 18, y0 + fh + wave(x) + 28); ctx.fill(); ctx.restore();
  for (let x = 0; x < fw; x += strip) {
    const dy = wave(x);
    ctx.drawImage(flat, (x / fw) * flat.width, 0, (strip / fw) * flat.width + 1, flat.height, x0 + x, y0 + dy, strip + 0.6, fh);
    // Light and shade follow the slope of the wave.
    const slope = Math.cos(x * k + phase) * (0.25 + 0.75 * (x / fw));
    ctx.fillStyle = slope > 0 ? 'rgba(255,255,255,' + (slope * 0.16) + ')' : 'rgba(0,0,0,' + (-slope * 0.2) + ')';
    ctx.fillRect(x0 + x, y0 + dy, strip + 0.6, fh);
  }
}
function background(ctx, id) {
  const [a] = FLAG_COLORS[id] || ['#16336b'];
  const g = ctx.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#0e1a33'); g.addColorStop(1, '#1d2d52');
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  const glow = ctx.createRadialGradient(W * 0.5, H * 0.46, 40, W * 0.5, H * 0.5, W * 0.62);
  glow.addColorStop(0, a + 'aa'); glow.addColorStop(1, a + '00');
  ctx.fillStyle = glow; ctx.fillRect(0, 0, W, H);
}
window.cover = id => {
  const c = document.createElement('canvas'); c.width = W; c.height = H; const ctx = c.getContext('2d');
  background(ctx, id);
  const ratio = FLAG_RATIO[id];
  // Cards crop the cover to about 2.2:1: the flag stays inside that band.
  const fw = Math.min(W * 0.62, H * 0.5 * ratio);
  wavingFlag(ctx, id, W / 2, H / 2, fw, fw * 0.035, 0.6);
  return c.toDataURL('image/webp', 0.9);
};
window.collage = ids => {
  const c = document.createElement('canvas'); c.width = W; c.height = H; const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#0e1a33'); g.addColorStop(1, '#22386a');
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  const rows = [ids.slice(0, 4), ids.slice(4, 7), ids.slice(7)];
  rows.forEach((row, r) => row.forEach((id, i) => {
    const cx = W / 2 + (i - (row.length - 1) / 2) * 268, cy = 150 + r * 250;
    wavingFlag(ctx, id, cx, cy, Math.min(220, 150 * FLAG_RATIO[id]), 6, i + r);
  }));
  return c.toDataURL('image/webp', 0.9);
};
`;

const ids = ['estados-unidos', 'mexico', 'argentina', 'espana', 'reino-unido', 'irlanda', 'australia', 'suecia', 'suiza', 'israel', 'indonesia'];
mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const tab = await browser.newPage();
await tab.setContent('<body></body>');
await tab.addScriptTag({ content: page });
const save = (name, url) => writeFileSync(join(out, name), Buffer.from(url.split(',')[1], 'base64'));
for (const id of ids) save(`${id}.webp`, await tab.evaluate(id => window.cover(id), id));
save('paises-3d.webp', await tab.evaluate(list => window.collage(list), ids));
await browser.close();
console.log(`${ids.length + 1} covers → ${out}`);
