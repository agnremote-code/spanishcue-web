#!/usr/bin/env node
// T3 · Packs dist/tpt/{slug}/ (PDFs, cover, previews, terms.pdf) into dist/tpt/{slug}/{slug}.zip,
// verifies every zip opens, and writes dist/tpt/manifest.csv.
// Run after export.mjs and covers.mjs. Usage: node tools/tpt/pack.mjs
// A row is status=ready only when: folder + PDFs that open + 1000x750 cover + 3 previews + zip that opens.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { DIST, ROOT, lessonIndex, loadChromium, loadContent } from './lib.mjs';
import { termsHtml } from './templates.mjs';
import { createZip, verifyZip } from './zip.mjs';

const PRODUCT_FILES = ['teacher-guide.pdf', 'worksheet.pdf', 'terms.pdf', 'cover.png', 'preview-1.png', 'preview-2.png', 'preview-3.png'];

function pdfPages(file) {
  const buf = readFileSync(file);
  if (buf.subarray(0, 5).toString() !== '%PDF-' || !buf.includes('%%EOF')) throw new Error(`${file} is not a complete PDF`);
  const pages = (buf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
  if (!pages) throw new Error(`${file} has no pages`);
  return pages;
}

function pngSize(file) {
  const buf = readFileSync(file);
  if (buf.readUInt32BE(0) !== 0x89504e47) throw new Error(`${file} is not a PNG`);
  return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
}

function checkImages(dir, problems) {
  const cover = join(dir, 'cover.png');
  if (!existsSync(cover)) problems.push('cover.png missing');
  else if (pngSize(cover).join('x') !== '1000x750') problems.push(`cover is ${pngSize(cover).join('x')}`);
  for (const n of [1, 2, 3]) {
    const f = join(dir, `preview-${n}.png`);
    if (!existsSync(f)) problems.push(`preview-${n}.png missing`);
    else if (pngSize(f).join('x') !== '800x600') problems.push(`preview-${n} is ${pngSize(f).join('x')}`);
  }
}

async function writeTerms(page, item, dir) {
  await page.setContent(termsHtml(item), { waitUntil: 'load' });
  await page.pdf({ path: join(dir, 'terms.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true });
}

function csvCell(value) {
  const s = String(value ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export async function pack() {
  const { resources, bundles = [] } = loadContent();
  const index = lessonIndex();
  const chromium = await loadChromium();
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const rows = [];
  try {
    for (const item of resources) {
      const dir = join(DIST, item.slug);
      const sources = item.lessons.flatMap((l) => (l.sources || []).map((s) => s.path));
      const row = { slug: item.slug, title: item.title, price_usd: item.price_usd.toFixed(2), grade_range: item.grade_range, tags: item.tags.join('; '), zip_path: '', status: 'missing' };
      if (item.status === 'missing' || !sources.length || sources.some((p) => !index.has(p))) {
        rows.push(row);
        console.log(`✗ ${item.slug}: status=missing`);
        continue;
      }
      mkdirSync(dir, { recursive: true });
      await writeTerms(page, item, dir);
      const problems = [];
      for (const pdf of ['teacher-guide.pdf', 'worksheet.pdf', 'terms.pdf']) {
        try { if (!existsSync(join(dir, pdf))) throw new Error(`${pdf} missing`); pdfPages(join(dir, pdf)); } catch (e) { problems.push(e.message); }
      }
      checkImages(dir, problems);
      row.status = finish(row, dir, item.slug, PRODUCT_FILES.map((f) => ({ name: f, file: join(dir, f) })), problems);
      rows.push(row);
    }
    for (const bundle of bundles) {
      const dir = join(DIST, bundle.slug);
      mkdirSync(dir, { recursive: true });
      await writeTerms(page, bundle, dir);
      const problems = [];
      const entries = ['terms.pdf', 'cover.png', 'preview-1.png', 'preview-2.png', 'preview-3.png'].map((f) => ({ name: f, file: join(dir, f) }));
      for (const slug of bundle.includes) {
        const included = rows.find((r) => r.slug === slug);
        if (included?.status !== 'ready') { problems.push(`${slug} is not ready`); continue; }
        for (const f of ['teacher-guide.pdf', 'worksheet.pdf']) entries.push({ name: `${slug}/${f}`, file: join(DIST, slug, f) });
      }
      checkImages(dir, problems);
      const row = { slug: bundle.slug, title: bundle.title, price_usd: bundle.price_usd.toFixed(2), grade_range: bundle.grade_range, tags: bundle.tags.join('; '), zip_path: '', status: 'incomplete' };
      row.status = finish(row, dir, bundle.slug, entries, problems);
      rows.push(row);
    }
  } finally {
    await browser.close();
  }
  const header = ['slug', 'title', 'price_usd', 'grade_range', 'tags', 'zip_path', 'status'];
  const csv = [header.join(','), ...rows.map((r) => header.map((h) => csvCell(r[h])).join(','))].join('\n') + '\n';
  writeFileSync(join(DIST, 'manifest.csv'), csv);
  console.log(`manifest.csv: ${rows.filter((r) => r.status === 'ready').length}/${rows.length} ready`);
  return rows;
}

function finish(row, dir, slug, entries, problems) {
  const absent = entries.filter((e) => !existsSync(e.file)).map((e) => `${e.name} missing`);
  problems.push(...absent.filter((a) => !problems.includes(a)));
  if (problems.length) {
    console.log(`! ${slug}: incomplete (${problems.join('; ')})`);
    return 'incomplete';
  }
  const zipFile = join(dir, `${slug}.zip`);
  writeFileSync(zipFile, createZip(entries.map((e) => ({ name: e.name, data: readFileSync(e.file) }))));
  const names = verifyZip(readFileSync(zipFile));
  if (names.length !== entries.length) { console.log(`! ${slug}: zip has ${names.length}/${entries.length} files`); return 'incomplete'; }
  row.zip_path = relative(ROOT, zipFile);
  console.log(`✓ ${slug}: ${names.length} files, zip opens`);
  return 'ready';
}

if (import.meta.url === `file://${process.argv[1]}`) await pack();
