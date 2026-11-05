// Checks one rewritten Autoestudio week in isolation (agents run this before handing in).
// Usage: node scripts/autoestudio-espejo/check.mjs <level> <week> [english-source-dir]
// - validates the module with validateModule()
// - checks newObjectives against docs/autoestudio-espejo/objetivos/<level>-wNN.json
// - for A1–B2, checks the Spanish-keyed English source covers every learner-facing string
import { build } from 'esbuild';
import { existsSync, readFileSync } from 'node:fs';
import { moduleTexts, problems } from '../autoestudio-english/fields.mjs';
const [level, weekArg, englishDir = '/mnt/project-files/autoestudio/espejo/ingles'] = process.argv.slice(2);
const week = Number(weekArg);
const name = `w${String(week).padStart(2, '0')}`;
const bundle = await build({ stdin: { contents: `export { ${level}${name} as mod } from './app/autoestudio/curriculum/modules/${level}/${name}'; export { validateModule } from './app/autoestudio/curriculum/validate';`, resolveDir: process.cwd(), loader: 'ts' }, bundle: true, platform: 'node', format: 'esm', write: false, logLevel: 'error' });
const { mod, validateModule } = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const issues = validateModule(mod);
const objFile = `docs/autoestudio-espejo/objetivos/${level}-${name}.json`;
if (!existsSync(objFile)) issues.push(`missing ${objFile}`);
else {
  const rows = JSON.parse(readFileSync(objFile, 'utf8'));
  const ids = rows.map((r) => `${level}.${r[1]}.${r[2]}`).sort();
  if (rows.some((r) => r[0] !== week)) issues.push(`${objFile}: every row must have week ${week}`);
  if (ids.join('|') !== [...mod.newObjectives].sort().join('|')) issues.push(`newObjectives ${[...mod.newObjectives].sort()} differ from ${objFile} ${ids}`);
  const isCheckpoint = rows.some((r) => r[1] === 'rev');
  if (isCheckpoint !== (mod.kind === 'checkpoint')) issues.push(`kind should be ${isCheckpoint ? 'checkpoint' : 'core'}`);
}
if (['a1', 'a2', 'b1', 'b2'].includes(level)) {
  const file = `${englishDir}/${level}-${name}.json`;
  const dict = existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : null;
  if (!dict) issues.push(`missing English source ${file}`);
  else for (const es of moduleTexts(mod)) { const p = problems(es, dict[es]); if (p.length) issues.push(`english ${p.join(',')}: ${JSON.stringify(es).slice(0, 100)}`); }
}
console.log(issues.length ? issues.join('\n') + `\n${issues.length} problems` : `${level}-${name}: OK`);
process.exitCode = issues.length ? 1 : 0;
