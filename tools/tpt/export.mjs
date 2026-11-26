#!/usr/bin/env node
// T1 · For every resource in content/tpt/resources.json: open each source class on
// spanishcue.com (or TPT_BASE_URL) with Playwright, record what the page is, and print
// teacher-guide.pdf + worksheet.pdf (A4, print CSS, no site menus) to dist/tpt/{slug}/.
// Usage: node tools/tpt/export.mjs [--only=slug1,slug2]
// Pages are opened one at a time (never crawl production in parallel).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { BASE_URL, DIST, TIMEOUT_MS, lessonIndex, loadChromium, loadContent, selectResources } from './lib.mjs';
import { teacherGuideHtml, worksheetHtml } from './templates.mjs';

async function inspectSource(page, path) {
  const url = `${BASE_URL}${path}`;
  try {
    const res = await page.goto(url, { timeout: TIMEOUT_MS, waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1500);
    const info = await page.evaluate(() => ({
      title: document.title,
      h1: document.querySelector('h1')?.textContent?.trim() || '',
      canvas: Boolean(document.querySelector('canvas')),
    }));
    const finalUrl = page.url();
    const gated = /\/acceso|\/login|\/precios/.test(new URL(finalUrl).pathname) && !finalUrl.endsWith(path);
    return { path, url, http: res?.status() ?? 0, finalUrl, access: gated ? 'pro' : 'open', ...info };
  } catch (error) {
    return { path, url, http: 0, error: String(error.message).split('\n')[0] };
  }
}

export async function exportResources(resources) {
  const index = lessonIndex();
  const chromium = await loadChromium();
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const results = [];
  try {
    for (const resource of resources) {
      const dir = join(DIST, resource.slug);
      mkdirSync(dir, { recursive: true });
      const paths = [...new Set(resource.lessons.flatMap((l) => (l.sources || []).map((s) => s.path)))];
      const missing = paths.filter((p) => !index.has(p));
      if (!paths.length || missing.length || resource.status === 'missing') {
        const result = { slug: resource.slug, status: 'missing', missing: missing.length ? missing : ['(no source class in the index)'] };
        writeFileSync(join(dir, 'export.json'), JSON.stringify(result, null, 2));
        results.push(result);
        console.log(`✗ ${resource.slug}: status=missing (${result.missing.join(', ')})`);
        continue;
      }
      const checks = [];
      for (const path of paths) checks.push(await inspectSource(page, path));
      const unreachable = checks.filter((c) => !c.http || c.http >= 400);
      for (const lesson of resource.lessons) for (const s of lesson.sources || []) {
        const check = checks.find((c) => c.path === s.path);
        if (check?.canvas) s.world3d = true;
      }
      for (const [file, html] of [['teacher-guide.pdf', teacherGuideHtml(resource)], ['worksheet.pdf', worksheetHtml(resource)]]) {
        await page.setContent(html, { waitUntil: 'load', timeout: TIMEOUT_MS });
        await page.emulateMedia({ media: 'print' });
        await page.pdf({ path: join(dir, file), format: 'A4', printBackground: true, preferCSSPageSize: true });
      }
      const result = { slug: resource.slug, status: unreachable.length ? 'source-unreachable' : 'exported', base: BASE_URL, checks };
      writeFileSync(join(dir, 'export.json'), JSON.stringify(result, null, 2));
      results.push(result);
      console.log(`${unreachable.length ? '!' : '✓'} ${resource.slug}: ${checks.map((c) => `${c.path} ${c.http}${c.access === 'pro' ? ' (PRO)' : ''}`).join(', ')}`);
    }
  } finally {
    await browser.close();
  }
  return results;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { resources } = loadContent();
  await exportResources(selectResources(resources));
}
