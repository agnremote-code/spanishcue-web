import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { BANCO, BANDS, THEMES } from '../app/charlas-3d/banco.mjs';
import { CASTS } from '../app/charlas-3d/mundos.mjs';
import { bandOf, charlaFor, questionsFor } from '../app/charlas-3d/charlas.mjs';
import { scanSource } from '../scripts/neutral-spanish.mjs';

// Every file that names themes for a conversation circle.
const FILES = [
  'app/charlas-3d/banco.mjs', 'app/charlas-3d/mundos.mjs', 'app/charlas-3d/CharlaCard.tsx',
  'app/mundo-3d/plantilla.ts', 'app/noche-abierta/charlas.ts', 'app/madrid-infectada/charlas.ts',
  'app/hospital-san-casi-vivo/charlas.ts', 'app/marketing-de-casinos/charlas.ts', 'app/la-feria-de-villaluz/charlas.ts',
];

test('every theme has five questions per band, and A0 is bilingual', () => {
  for (const theme of THEMES) for (const band of BANDS) {
    const list = BANCO[theme][band];
    assert.equal(list.length, 5, `${theme}/${band}`);
    for (const q of list) {
      assert.match(q.es, /\?|\.$/, `${theme}/${band}: ${q.es}`);
      if (band === 'a0') assert.ok(q.en, `${theme}/a0 needs English: ${q.es}`);
      else assert.equal(q.en, undefined, `${theme}/${band} is Spanish only`);
    }
  }
});

test('no question repeats anywhere in the bank', () => {
  const all = THEMES.flatMap(t => BANDS.flatMap(b => BANCO[t][b].map(q => q.es)));
  assert.equal(new Set(all).size, all.length);
});

test('every theme named by a cast or a place exists in the bank', () => {
  for (const [world, cast] of Object.entries(CASTS)) for (const role of cast) for (const t of role.themes) assert.ok(BANCO[t], `${world}: ${t}`);
  for (const file of FILES) {
    for (const m of readFileSync(file, 'utf8').matchAll(/themes: \[([^\]]*)\]/g)) {
      for (const t of m[1].match(/'([a-z]+)'/g) ?? []) assert.ok(BANCO[t.slice(1, -1)], `${file}: ${t}`);
    }
  }
});

test('levels map to bands and each circle gets ten different questions', () => {
  assert.deepEqual(['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'basic'].map(bandOf), ['a0', 'a', 'a', 'b', 'b', 'c', 'c', 'a']);
  const qs = questionsFor(['fiesta', 'noche'], 'B2', 'noche:p:x');
  assert.equal(qs.length, 10);
  assert.equal(new Set(qs.map(q => q.es)).size, 10);
  const a = charlaFor({ world: 'noche', key: 'noche:p:1', level: 'A0' });
  assert.ok(a.title && a.questions.every(q => q.en));
  // Neighbours do not open with the same question.
  const firsts = new Set(Array.from({ length: 12 }, (_, i) => charlaFor({ world: 'pais', key: `pais:p:${i}`, level: 'A2' }).questions[0].es));
  assert.ok(firsts.size > 4);
});

test('the copy is neutral Spanish', () => {
  for (const file of FILES) assert.deepEqual(scanSource(readFileSync(file, 'utf8'), file).filter(f => f.kind !== 'context-review'), [], file);
});
