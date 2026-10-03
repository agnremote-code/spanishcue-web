import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CONTENT_ROOTS, SOURCE_EXTENSION, extractCopy, sourceFiles } from './neutral-spanish.mjs';
export const BASE_SHA = '43e4b3eb1dc76031481d2406a62b9210f0dd97e2';
/** Multiset per file allows harmless object restructuring but detects removals/edits. */
export function compareEnglishCopy(beforeFiles, afterFiles) {
  const findings = [];
  for (const path of new Set([...beforeFiles.keys(), ...afterFiles.keys()])) {
    const source = beforeFiles.get(path) || ''; 
    const before = extractCopy(source, path).filter(c => c.language === 'en');
    const after = extractCopy(afterFiles.get(path) || '', path).filter(c => c.language === 'en');
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
  return { findings: compareEnglishCopy(before, after), files: before.size, strings: [...before].reduce((n, [path, source]) => n + extractCopy(source, path).filter(c => c.language === 'en').length, 0), base };
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
