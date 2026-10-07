import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CONTENT_ROOTS, SOURCE_EXTENSION, extractCopy, isMachineValue, sourceFiles } from './neutral-spanish.mjs';
export const BASE_SHA = '43e4b3eb1dc76031481d2406a62b9210f0dd97e2';
/** Multiset per file allows harmless object restructuring but detects removals/edits. */
export function compareEnglishCopy(beforeFiles, afterFiles) {
  const findings = [];
  for (const path of new Set([...beforeFiles.keys(), ...afterFiles.keys()])) {
    const source = beforeFiles.get(path) || '';
    // URL templates and locale codes under English keys are plumbing, not copy.
    const englishCopy = c => c.language === 'en' && !isMachineValue(c.text);
    const before = extractCopy(source, path).filter(englishCopy);
    const after = extractCopy(afterFiles.get(path) || '', path).filter(englishCopy);
    const counts = new Map();
    for (const item of after) counts.set(item.text, (counts.get(item.text) || 0) + 1);
    for (const item of before) {
      const n = counts.get(item.text) || 0;
      if (n) counts.set(item.text, n - 1);
      else findings.push({ ...item, kind: 'english-changed-or-deleted' });
    }
    for (const item of after) {
      const n = counts.get(item.text) || 0;
      if (n) { findings.push({ ...item, kind: 'english-added' }); counts.set(item.text, n - 1); }
    }
  }
  return findings;
}
// Exact owner-authorized lexical additions; existing English edits/deletions
// are never exempt. The reviewable manifest carries each path and literal.
export function filterApprovedAdditions(findings, additions) {
  const allowed = new Set(additions.map(a => JSON.stringify([a.path, a.text])));
  return findings.filter(f => f.kind !== 'english-added' || !allowed.has(JSON.stringify([f.path, f.text])));
}
/** Exact, counted owner-requested copy changes; unrelated English remains protected. */
export function filterReviewedChanges(findings, reviewed) {
  const counts = new Map();
  for (const {path, text, kind} of reviewed) {
    const key = JSON.stringify([path, text, kind]);
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return findings.filter(f => {
    const key = JSON.stringify([f.path, f.text, f.kind]);
    const remaining = counts.get(key) || 0;
    if (!remaining) return true;
    counts.set(key, remaining - 1);
    return false;
  });
}
/**
 * Owner-authorized manifests of exact English additions. Each file lists the
 * authorization and every (path, text) literal it approves; nothing in them can
 * exempt an edit or deletion of existing English copy.
 */
export const APPROVAL_MANIFESTS = [
  'docs/audits/bosque-vocabulary-additions-20261004.json',
  'docs/audits/seo-english-copy-additions-20261007.json',
];
export function loadApprovedAdditions(root) {
  return APPROVAL_MANIFESTS.flatMap(path => {
    const file = resolve(root, path);
    if (!existsSync(file)) return [];
    const manifest = JSON.parse(readFileSync(file, 'utf8'));
    if (manifest.version !== 1 || !Array.isArray(manifest.additions)) throw new Error(`${path}: expected version 1 with an additions array`);
    for (const addition of manifest.additions) {
      if (!addition.path || typeof addition.text !== 'string' || !addition.text || /[*?]/.test(addition.path)) throw new Error(`${path}: every addition needs an exact path and exact text`);
    }
    return manifest.additions;
  });
}
export function checkEnglishCopy(root, base = BASE_SHA) {
  const git = args => execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  // The base inventory deliberately includes files deleted from the working tree.
  const paths = git(['ls-tree', '-r', '--name-only', base, '--', ...CONTENT_ROOTS]).trim().split('\n').filter(p => SOURCE_EXTENSION.test(p));
  const before = new Map(); const after = new Map();
  for (const path of paths) {
    const source = git(['show', `${base}:${path}`]);
    if (!extractCopy(source, path).some(c => c.language === 'en')) continue;
    before.set(path, source);

  }
  for (const path of sourceFiles(root)) {
    const source = readFileSync(resolve(root, path), 'utf8');
    if (extractCopy(source, path).some(c => c.language === 'en')) after.set(path, source);
  }
  const additions = loadApprovedAdditions(root);
  const reviewedPath = resolve(root, 'docs/audits/new-classes-copy-20261007.json');
  const reviewed = existsSync(reviewedPath) ? JSON.parse(readFileSync(reviewedPath, 'utf8')).changes : [];
  return { findings: filterReviewedChanges(filterApprovedAdditions(compareEnglishCopy(before, after), additions), reviewed), files: before.size, strings: [...before].reduce((n, [path, source]) => n + extractCopy(source, path).filter(c => c.language === 'en').length, 0), base };
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = checkEnglishCopy(process.cwd(), process.argv.find(a => a.startsWith('--base='))?.slice(7) || BASE_SHA);
  if (process.argv.includes('--json')) console.log(JSON.stringify(result, null, 2));
  else {
    for (const f of result.findings) console.error(`${f.path}:${f.line}: ${f.kind}: ${JSON.stringify(f.text)}`);
    console.log(`${result.findings.length ? 'ENGLISH COPY: CHANGED' : 'ENGLISH COPY: UNCHANGED'} (${result.strings} strings in ${result.files} files; base ${result.base})`);
  }
  process.exitCode = result.findings.length ? 1 : 0;
}
