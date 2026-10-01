// Writes the Autoestudio coverage matrix and duplication audit.
// Usage: node scripts/autoestudio-report.mjs [output-dir]
import { build } from 'esbuild';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.argv[2] || 'autoestudio-report';
const built = await build({
  stdin: {
    contents: `export { modulesByLevel } from './app/autoestudio/curriculum/course';
export { allObjectives } from './app/autoestudio/curriculum/objectives';
export { levelIds } from './app/autoestudio/curriculum/levels';
export { coverageMatrix, duplicationAudit, validateCourse, validateModule, moduleExercises } from './app/autoestudio/curriculum/validate';`,
    resolveDir: process.cwd(),
    loader: 'ts',
  },
  bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'error',
});
const c = await import('data:text/javascript;base64,' + Buffer.from(built.outputFiles[0].text).toString('base64'));
const published = c.levelIds.filter((level) => c.modulesByLevel[level].length);
mkdirSync(out, { recursive: true });

const rows = c.coverageMatrix(c.modulesByLevel, c.allObjectives);
const csv = [['objective', 'level', 'domain', 'week', 'topic', 'introduced_in', 'reviewed_in'].join(',')]
  .concat(rows.map((row) => [row.id, row.level, row.domain, row.week, JSON.stringify(row.topic), row.introducedIn.join(' '), row.reviewedIn.join(' ')].join(',')));
writeFileSync(join(out, 'coverage-matrix.csv'), csv.join('\n') + '\n');

const domains = [...new Set(rows.map((row) => row.domain))];
const lines = ['# Autoestudio · coverage report', '', `Published levels: ${published.map((l) => l.toUpperCase()).join(', ') || 'none'}`, ''];
lines.push('| Level | Weeks | Checkpoints | Objectives | Reviewed later | Exercises | Quiz items | ' + domains.join(' | ') + ' |');
lines.push('|' + ' --- |'.repeat(7 + domains.length));
for (const level of c.levelIds) {
  const modules = c.modulesByLevel[level];
  const own = rows.filter((row) => row.level === level);
  const counts = domains.map((domain) => own.filter((row) => row.domain === domain).length);
  lines.push(`| ${level.toUpperCase()} | ${modules.length} | ${modules.filter((m) => m.kind === 'checkpoint').length} | ${own.length} | ${own.filter((row) => row.reviewedIn.length).length} | ${modules.reduce((n, m) => n + c.moduleExercises(m).length, 0)} | ${modules.reduce((n, m) => n + m.quiz.items.length, 0)} | ${counts.join(' | ')} |`);
}
const problems = c.validateCourse({ modulesByLevel: c.modulesByLevel, objectives: c.allObjectives, requiredLevels: published });
const moduleProblems = published.flatMap((level) => c.modulesByLevel[level].flatMap((m) => c.validateModule(m)));
const dups = c.duplicationAudit(c.modulesByLevel);
lines.push('', `Validator problems: ${problems.length + moduleProblems.length}`, ...[...problems, ...moduleProblems].map((p) => `- ${p}`));
lines.push('', `Exact duplicates across exercises, quiz, listening and reading: ${dups.length}`, ...dups.map((d) => `- ${d.places.join(', ')}: ${d.text.slice(0, 120)}`));
writeFileSync(join(out, 'coverage-report.md'), lines.join('\n') + '\n');
writeFileSync(join(out, 'duplication-audit.json'), JSON.stringify(dups, null, 2) + '\n');
console.log(`Wrote ${out}: ${rows.length} objectives, ${problems.length + moduleProblems.length} problems, ${dups.length} duplicates`);
