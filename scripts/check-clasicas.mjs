// Checks the classic conversation classes on the shared engine: every level
// passes the editorial checks, no question repeats inside a class, and no
// question repeats (or asks the same as) any question already on the site.
// Usage: node scripts/check-clasicas.mjs [slug]
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { CLASES } from '../app/conversacion-clasica/clases.mjs';
import { LEVEL_IDS, checkClass, checkLevel, questionsOf } from '../app/conversacion-clasica/check.mjs';
import { buildIndex, repeats } from './question-index.mjs';
import { scanSource } from './neutral-spanish.mjs';

export async function checkClase(slug, { root = '.' } = {}) {
  const out = [];
  const content = {};
  for (const level of LEVEL_IDS) {
    const file = `app/${slug}/content/${level.toLowerCase()}.mjs`;
    content[level] = (await import(pathToFileURL(`${root}/${file}`).href)).default;
    out.push(...checkLevel(level, content[level]));
    out.push(...scanSource(readFileSync(`${root}/${file}`, 'utf8'), level).map((f) => `${level} neutral Spanish: ${f.text ?? JSON.stringify(f)}`));
  }
  out.push(...checkClass(content));
  const index = buildIndex({ root, exclude: [`app/${slug}`] });
  for (const level of LEVEL_IDS) for (const q of questionsOf(level, content[level])) {
    const hit = repeats(index, q);
    if (hit) out.push(`${level} «${q}» already exists (${hit.score.toFixed(2)}): «${hit.text}» in ${[...hit.where].join(', ')}`);
  }
  return out;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const only = process.argv[2];
  let failed = 0;
  for (const clase of CLASES.filter((c) => !only || c.slug === only)) {
    const problems = await checkClase(clase.slug);
    if (problems.length) { failed++; console.log(`✗ ${clase.title}\n  ${problems.join('\n  ')}`); }
    else console.log(`✓ ${clase.title}: 7 levels OK, no repeated questions`);
  }
  process.exit(failed ? 1 : 0);
}
