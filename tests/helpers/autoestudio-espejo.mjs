// Shared checks for the mirrored Autoestudio (docs/autoestudio-espejo/SPEC.md):
// every week reviews the grammar classes that docs/autoestudio-espejo/mapa.json
// assigns to it, and each level keeps its own reception/production minimums.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { build } from 'esbuild';

export const mapa = JSON.parse(readFileSync('docs/autoestudio-espejo/mapa.json', 'utf8'));
export const words = (text) => text.trim().split(/\s+/u).length;
export const readingWords = (m) => words(m.reading.text.join(' '));
export const listeningWords = (m) => words(m.listening.script.map((line) => line.text).join(' '));

export async function loadLevel(level) {
  const built = await build({ stdin: { contents: `export { ${level}Modules as modules } from './app/autoestudio/curriculum/modules/${level}'; export { ${level}Objectives as objectives } from './app/autoestudio/curriculum/objectives/${level}'; export { validateModule, moduleExercises, duplicationAudit } from './app/autoestudio/curriculum/validate'; export { SECTION_ORDER } from './app/autoestudio/curriculum/types'; export { moduleClips } from './app/autoestudio/curriculum/audio-clips';`, resolveDir: process.cwd(), loader: 'ts' }, bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'error' });
  return import('data:text/javascript;base64,' + Buffer.from(built.outputFiles[0].text).toString('base64'));
}

/** Structure, objectives, retrieval and the mirror of the grammar course, common to every level. */
export function commonLevelChecks(test, level, course) {
  const { modules, objectives, validateModule, duplicationAudit, SECTION_ORDER } = course;
  test(`${level.toUpperCase()}: veinte semanas completas con integraciones en 5, 10, 15 y 20`, () => {
    assert.equal(modules.length, 20);
    assert.deepEqual(modules.filter((m) => m.kind === 'checkpoint').map((m) => m.week), [5, 10, 15, 20]);
    for (const [index, m] of modules.entries()) {
      assert.equal(m.week, index + 1);
      assert.equal(m.id, `${level}-${String(m.week).padStart(2, '0')}`);
      assert.deepEqual(validateModule(m), [], m.id);
      for (const section of SECTION_ORDER) assert.ok(m[section], `${m.id}/${section}`);
      assert.deepEqual(m.listening.stages.map((s) => s.stage), ['gist', 'detail', 'notice'], m.id);
      assert.ok(m.writing.steps.some((s) => /revis|corrig/iu.test(s)), `${m.id}: revisión de la escritura`);
      assert.doesNotMatch(JSON.stringify(m), /\bTODO\b|placeholder|próximamente|coming soon/u, m.id);
    }
    const empty = { a1: [], a2: [], b1: [], b2: [], c1: [], c2: [] };
    assert.deepEqual(duplicationAudit({ ...empty, [level]: modules }), []);
  });
  test(`${level.toUpperCase()}: cada semana repasa exactamente sus clases de gramática, en orden`, () => {
    for (const m of modules) {
      const classes = mapa[level][m.week - 1].classes;
      assert.ok(classes.length >= 1, m.id);
      const gram = m.newObjectives.filter((id) => id.startsWith(`${level}.gram.`)).sort();
      assert.deepEqual(gram, classes.map((c) => `${level}.gram.${c.code.toLowerCase()}`).sort(), `${m.id}: clases del mapa`);
      for (const c of classes) assert.ok(m.related?.some((r) => r.path === c.path), `${m.id}: enlace a ${c.path}`);
    }
  });
  test(`${level.toUpperCase()}: cada objetivo se enseña una vez y vuelve en una semana posterior`, () => {
    for (const o of objectives) {
      assert.deepEqual(modules.filter((m) => m.newObjectives.includes(o.id)).map((m) => m.week), [o.week], o.id);
      if (o.week < 20) assert.ok(modules.some((m) => m.week > o.week && m.reviewObjectives.includes(o.id)), `${o.id}: recuperación`);
    }
    for (const m of modules) for (const id of m.reviewObjectives.filter((id) => id.startsWith(`${level}.`))) assert.ok(objectives.find((o) => o.id === id)?.week < m.week, id);
    for (const m of modules.filter((m) => m.kind === 'checkpoint')) {
      const weeks = new Set(m.reviewObjectives.map((id) => objectives.find((o) => o.id === id)?.week).filter(Boolean));
      assert.ok(weeks.size >= 4, `${m.id}: integra cuatro semanas`);
    }
  });
  test(`${level.toUpperCase()}: los modelos de escritura cumplen su propio rango`, () => {
    for (const m of modules) {
      if (level === 'c2' && m.kind !== 'checkpoint') continue;
      const count = words(m.writing.model.join(' '));
      assert.ok(count >= m.writing.words[0] && count <= m.writing.words[1], `${m.id}: modelo ${count}, rango ${m.writing.words.join('–')}`);
    }
  });
}
