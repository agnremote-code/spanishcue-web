// The ten classic conversation classes of 2026-11-02 (IDs 246–255): question banks by
// category on the shared engine (app/conversacion-clasica), authored at every level A0–C2.
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { CLASES } from '../app/conversacion-clasica/clases.mjs';
import { checkClase } from '../scripts/check-clasicas.mjs';

const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');

test('the ten classic classes are listed once each, with their own route, cover and A0–C2 levels', () => {
  assert.deepEqual(CLASES.map((c) => c.id), [246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
  for (const c of CLASES) {
    const line = catalog.split('\n').filter((l) => l.startsWith(`  {id:${c.id},`));
    assert.equal(line.length, 1, `${c.id} catalog entry`);
    assert.match(line[0], new RegExp(`path:"/${c.slug}"`));
    assert.match(line[0], /levels:\["A0","A1","A2","B1","B2","C1","C2"\]/);
    assert.match(line[0], /category:"Conversación"/);
    for (const f of ['page.tsx', 'layout.tsx', 'content/index.mjs']) assert.ok(existsSync(`app/${c.slug}/${f}`), `${c.slug}/${f}`);
    assert.ok(existsSync(`public/conversation-classics/${c.slug}.webp`), `${c.slug} cover`);
    assert.match(readFileSync(`app/${c.slug}/page.tsx`, 'utf8'), /ClassicConversation/);
  }
});

test('every level of every class passes the editorial checks and repeats no question on the site', async () => {
  for (const c of CLASES) assert.deepEqual(await checkClase(c.slug), [], c.title);
});
