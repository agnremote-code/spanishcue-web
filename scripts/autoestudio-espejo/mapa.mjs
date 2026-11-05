// Autoestudio «espejo» (Ale, 2026-11-05): each Autoestudio week reviews, as self-study,
// the grammar classes of the course in the same order, split into the 20 weeks of each
// level. A0 has a single class (G001), which opens A1 week 1. Run: node scripts/autoestudio-espejo/mapa.mjs
import { build } from 'esbuild';
import { writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const out = 'node_modules/.cache/autoestudio-espejo/curriculum.cjs';
await build({ entryPoints: ['app/grammar-classroom/curriculum.ts'], bundle: true, platform: 'node', format: 'cjs', outfile: out, logLevel: 'error' });
const { courseUnits } = require(process.cwd() + '/' + out);
const WEEKS = 20;
const byLevel = { a1: [], a2: [], b1: [], b2: [], c1: [], c2: [] };
for (const u of courseUnits) byLevel[u.level === 'A0' ? 'a1' : u.level.toLowerCase()].push({ code: u.code, catalogId: u.catalogId, title: u.title, path: u.canonicalSlug, lesson: u.catalogId === 230 ? "app/grammar-classroom/live/lessons/desde-hace.ts" : `app/grammar-classroom/live/lessons/g${u.catalogId}.ts` });
const mapa = {};
for (const [level, units] of Object.entries(byLevel)) {
  mapa[level] = Array.from({ length: WEEKS }, (_, w) => ({ week: w + 1, classes: units.slice(Math.round(w * units.length / WEEKS), Math.round((w + 1) * units.length / WEEKS)) }));
}
writeFileSync('docs/autoestudio-espejo/mapa.json', JSON.stringify(mapa, null, 1) + '\n');
for (const [l, ws] of Object.entries(mapa)) console.log(l, ws.map(w => w.classes.length).join(''));
