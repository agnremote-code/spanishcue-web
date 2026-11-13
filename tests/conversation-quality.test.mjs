// Platform-wide conversation quality (Ale, 2026-11-10). The audit lists every
// open question addressed to the learner in classic lessons and 3D worlds;
// the number of flagged questions may only go down, batch after batch.
import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { audit } from '../scripts/conversation-quality.mjs';
import { questionProblems } from '../app/conversacion-general/quality.mjs';

// Lower this number with every rewrite batch; never raise it.
const MAX_FLAGGED = 1122;

test('quality rules catch the problems Ale described', () => {
  assert.ok(questionProblems('¿Qué ropa llevarías hace diez años en la boda de tu tía?', 'B1').some((p) => p.startsWith('specific')));
  assert.ok(questionProblems('¿Qué haces, dónde lo haces, con quién y cuándo empezaste?', 'A2').some((p) => p.startsWith('stacked')));
  assert.ok(questionProblems('¿Você gosta de viajar?', 'A1').includes('lang:portuguese'));
  assert.ok(questionProblems('¿Tienes perro?', 'B2').includes('closed:yes-no'));
  assert.deepEqual(questionProblems('¿Qué hace que una amistad dure?', 'B1'), []);
  assert.deepEqual(questionProblems('¿Hasta qué punto es necesario compartir valores para mantener una amistad duradera?', 'B2'), []);
});

test('platform audit never gets worse', () => {
  const items = audit('.');
  const flagged = items.filter((i) => i.problems.length);
  assert.ok(items.length > 20000, `audited ${items.length} questions`);
  assert.ok(flagged.length <= MAX_FLAGGED, `${flagged.length} flagged questions (max ${MAX_FLAGGED}); run node scripts/conversation-quality.mjs`);
});

test('LET’S TALK A1–C2 passes every quality rule', async () => {
  const r = await build({ entryPoints: ['app/choose-conversation/variants.ts'], bundle: true, write: false, format: 'esm', platform: 'node' });
  const { talkVariants } = await import(`data:text/javascript;base64,${Buffer.from(r.outputFiles[0].text).toString('base64')}`);
  const problems = [];
  for (const [level, v] of Object.entries(talkVariants)) for (const topic of v.activities) for (const q of topic.questions) {
    const p = questionProblems(q.slice(q.indexOf('¿')), level);
    if (p.length) problems.push(`${level} ${p.join(',')}: ${q}`);
  }
  assert.deepEqual(problems, []);
});
