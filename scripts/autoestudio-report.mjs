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

const wordCount = text => text.trim().split(/\s+/u).filter(Boolean).length;
const minMax = values => values.length ? {min:Math.min(...values),max:Math.max(...values)} : {min:0,max:0};
const requiredCoreDomains=new Set(['grammar','vocabulary','pronunciation','functional','discourse']);
const report={
 generatedAt:new Date().toISOString(),levels:published,totalWeeks:published.reduce((n,l)=>n+c.modulesByLevel[l].length,0),
 objectives:rows.map(row=>({...row,prerequisites:c.allObjectives.find(o=>o.id===row.id)?.prerequisites??[]})),
 missingObjectives:rows.filter(row=>published.includes(row.level)&&row.introducedIn.length!==1).map(row=>row.id),
 missingRetrieval:rows.filter(row=>published.includes(row.level)&&requiredCoreDomains.has(row.domain)&&!row.reviewedIn.length).map(row=>row.id),
 orphanObjectiveReferences:problems.filter(p=>/unknown|orphan/.test(p)),
 validationProblems:[...new Set([...problems,...moduleProblems])],duplicatePrompts:dups,
 byLevel:Object.fromEntries(published.map(level=>{const modules=c.modulesByLevel[level];return [level,{
  weeks:modules.length,objectives:rows.filter(r=>r.level===level).length,
  domains:Object.fromEntries(domains.map(domain=>[domain,rows.filter(r=>r.level===level&&r.domain===domain).length])),
  checkpoints:modules.filter(m=>m.kind==='checkpoint').map(m=>m.week),
  readingWords:minMax(modules.map(m=>wordCount(m.reading.text.join(' ')))),
  listeningScriptWords:minMax(modules.map(m=>wordCount(m.listening.script.map(l=>l.text).join(' ')))),
  writingWordTargets:modules.map(m=>({week:m.week,min:m.writing.words[0],max:m.writing.words[1]})),
  speakingSeconds:modules.map(m=>({week:m.week,total:m.speaking.tasks.reduce((n,t)=>n+t.seconds,0)})),
  phonologyWeeks:modules.filter(m=>m.pronunciation.perceive&&m.pronunciation.produce.length).map(m=>m.week),
  mediationObjectives:rows.filter(r=>r.level===level&&/media|reformula|s.ntesis|sintet|resum|negocia|interac/i.test(r.topic)).map(r=>r.id),
  audioDelivery:'Original scripts played by device speech synthesis; no verified regional/acoustic claims; no human listening QA claimed',
 }];})),
};
writeFileSync(join(out,'coverage-report.json'),JSON.stringify(report,null,2)+'\n');
