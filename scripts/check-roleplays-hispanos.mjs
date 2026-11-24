// Checks the twenty country roleplay classes (app/roleplays-hispanos): every
// country has authored content with the same shape the engine expects.
//   node scripts/check-roleplays-hispanos.mjs
import { readFileSync, readdirSync } from 'node:fs';
import ts from 'typescript';

const root = new URL('../app/roleplays-hispanos/', import.meta.url);
const load = async (file) => {
  const source = readFileSync(new URL(file, root), 'utf8');
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
  return (await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`)).default;
};
const pairOk = (p) => Array.isArray(p) && p.length === 2 && p.every((x) => typeof x === 'string' && x.trim());

export async function checkRoleplays() {
  const problems = [];
  const slugs = [...readFileSync(new URL('paises.ts', root), 'utf8').matchAll(/m\('([a-z-]+)', (\d+)/g)].map((m) => m[1]);
  const files = readdirSync(new URL('contenido/', root)).map((f) => f.replace(/\.ts$/, ''));
  for (const slug of slugs) if (!files.includes(slug)) problems.push(`${slug}: no content file`);
  const seenQuestions = new Map();
  for (const slug of slugs) {
    const c = await load(`contenido/${slug}.ts`);
    const say = (msg) => problems.push(`${slug}: ${msg}`);
    if (c.expresiones.length < 8) say(`only ${c.expresiones.length} expressions`);
    for (const e of c.expresiones) if (!e.t || !e.en || !pairOk(e.uso) || !pairOk(e.ej) || (e.ojo && !pairOk(e.ojo))) say(`bad expression ${e.t}`);
    if (c.escenas.length < 10) say(`only ${c.escenas.length} scenes`);
    const titles = new Set();
    for (const s of c.escenas) {
      const at = `«${s.title}»`;
      if (titles.has(s.title)) say(`${at} repeated`); titles.add(s.title);
      if (!s.emoji || !s.en || !pairOk(s.c) || !pairOk(s.who)) say(`${at} header`);
      if (s.d.length !== 10) say(`${at} has ${s.d.length} dialogue lines`);
      for (const [who, p] of s.d) if (!['L', 'T'].includes(who) || !pairOk(p)) say(`${at} bad line`);
      if (s.s.length !== 5) say(`${at} has ${s.s.length} steps`);
      for (const st of s.s) {
        if (!pairOk(st.q) || st.a.length !== 2 || !st.a.every(pairOk) || st.w.length !== 3 || !st.w.every(pairOk) || !pairOk(st.f)) say(`${at} step «${st.q?.[0]}» shape`);
        else if (st.f[0].split('___').length !== 2 || st.f[1].split('___').length !== 2) say(`${at} frame «${st.f[0]}» needs one ___ in each language`);
      }
    }
    seenQuestions.set(slug, c.escenas.length);
  }
  return { problems, countries: slugs.length, scenes: [...seenQuestions.values()].reduce((a, b) => a + b, 0) };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { problems, countries, scenes } = await checkRoleplays();
  for (const p of problems) console.error(p);
  console.log(`Roleplays del mundo hispano: ${countries} countries, ${scenes} scenes, ${problems.length} problems.`);
  process.exitCode = problems.length ? 1 : 0;
}
