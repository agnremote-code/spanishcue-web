// Shared helpers for the TPT export tools (tools/tpt/*.mjs).
// Content lives in content/tpt/resources.json; generated files go to dist/tpt/.
import { createRequire } from 'node:module';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const DIST = join(ROOT, 'dist', 'tpt');
export const BASE_URL = (process.env.TPT_BASE_URL || 'https://spanishcue.com').replace(/\/$/, '');
export const TIMEOUT_MS = 30_000;

export function loadContent() {
  return JSON.parse(readFileSync(join(ROOT, 'content', 'tpt', 'resources.json'), 'utf8'));
}

/** Resources to process: all, or the ones named with --only=slug1,slug2. */
export function selectResources(list, argv = process.argv.slice(2)) {
  const only = argv.find((a) => a.startsWith('--only='))?.slice(7).split(',').filter(Boolean);
  if (!only) return list;
  const picked = list.filter((r) => only.includes(r.slug));
  const unknown = only.filter((s) => !list.some((r) => r.slug === s));
  if (unknown.length) throw new Error(`Unknown TPT slug(s): ${unknown.join(', ')}`);
  return picked;
}

export async function loadChromium() {
  const mod = process.env.PLAYWRIGHT_MODULE
    ? await import(process.env.PLAYWRIGHT_MODULE)
    : createRequire(import.meta.url)('playwright');
  return (mod.default ?? mod).chromium;
}

/**
 * The real lesson index: every `path:"/…"` in app/lesson-catalog.ts, every course
 * route in app/grammar-classroom/curriculum.ts, plus routes that exist as app/<path>/page.tsx.
 * A source path outside this index is reported as status=missing, never guessed.
 */
export function lessonIndex() {
  const paths = new Set();
  const catalog = readFileSync(join(ROOT, 'app', 'lesson-catalog.ts'), 'utf8');
  for (const m of catalog.matchAll(/path:"(\/[^"]+)"/g)) paths.add(m[1]);
  const curriculum = readFileSync(join(ROOT, 'app', 'grammar-classroom', 'curriculum.ts'), 'utf8');
  for (const m of curriculum.matchAll(/\["G\d+",\d+,"[A-C][0-2]","[^"]*","[^"]*","(\/[^"]+)",\[[^\]]*\],"live"\]/g)) paths.add(m[1]);
  return {
    has(path) {
      if (paths.has(path)) return true;
      const dir = join(ROOT, 'app', ...path.split('/').filter(Boolean));
      return existsSync(join(dir, 'page.tsx'));
    },
  };
}

export function esc(value) {
  return String(value ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
}

/** Escape, then **bold** → <strong> and *italic* → <em>. */
export function rich(value) {
  return esc(value).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

export function listFiles(dir) {
  return existsSync(dir) ? readdirSync(dir) : [];
}

export const BRAND = 'SPANISHCUE';
