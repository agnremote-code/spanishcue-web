import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { GAMES, audioSrc, listeningFor, parseGaps, sameWord } from '../app/escucha-3d/games.mjs';
import { checkFile, selectTargets } from '../scripts/check-escucha-3d.mjs';
import { spawnSync } from 'node:child_process';
import { scanSource } from '../scripts/neutral-spanish.mjs';

const fileOf = (game, level) => `app/escucha-3d/content/${game}/${level.toLowerCase()}.json`;

test('every 3D conversation game has a listening for each circle at every level it offers', () => {
  for (const [game, spec] of Object.entries(GAMES)) for (const level of spec.levels) {
    const path = fileOf(game, level);
    assert.ok(existsSync(path), `${path} exists`);
    const source = readFileSync(path, 'utf8');
    assert.deepEqual(checkFile(game, level, JSON.parse(source), path), []);
    assert.deepEqual(scanSource(source, path).map(f => f.token), [], `${path} is neutral Spanish`);
  }
});

test('the checker CLI accepts a lower-case level and refuses a filter that matches nothing', () => {
  // Regression: `check-escucha-3d.mjs taller b1` compared «b1» with «B1»,
  // checked no file and still printed OK. Unknown games and levels did too.
  assert.deepEqual(selectTargets('hospital', 'b1'), { targets: [{ game: 'hospital', level: 'B1' }], errors: [] });
  assert.deepEqual(selectTargets('hospital', 'B1'), selectTargets('hospital', 'b1'));
  assert.equal(selectTargets('hospital', 'ZZ').targets.length, 0);
  assert.match(selectTargets('hospital', 'ZZ').errors.join(), /unknown level «ZZ» for hospital/);
  assert.match(selectTargets('nope').errors.join(), /unknown game «nope»/);
  assert.match(selectTargets(undefined, 'zz').errors.join(), /unknown level «zz»/);
  const all = selectTargets();
  assert.deepEqual(all.errors, []);
  assert.equal(all.targets.length, Object.values(GAMES).reduce((n, spec) => n + spec.levels.length, 0));
  const run = (...args) => spawnSync(process.execPath, ['scripts/check-escucha-3d.mjs', ...args], { encoding: 'utf8' });
  const lower = run('hospital', 'b1');
  assert.equal(lower.status, 0, lower.stderr);
  assert.match(lower.stdout, /all files OK \(1 checked\)/);
  for (const args of [['hospital', 'ZZ'], ['nope']]) {
    const bad = run(...args);
    assert.equal(bad.status, 1, `${args.join(' ')} must fail`);
    assert.doesNotMatch(bad.stdout, /all files OK/);
  }
});

test('every listening has its audio once the generator has run', () => {
  const manifest = JSON.parse(readFileSync('app/escucha-3d/audio-manifest.json', 'utf8'));
  for (const [game, spec] of Object.entries(GAMES)) for (const level of spec.levels) {
    for (const item of JSON.parse(readFileSync(fileOf(game, level), 'utf8')).items) {
      const key = `${game}/${level.toLowerCase()}-${item.id}`;
      assert.equal(manifest.clips[key]?.src, audioSrc(game, level, item.id), `${key} in the manifest`);
      assert.ok(existsSync(`public${audioSrc(game, level, item.id)}`), `${key}.mp3 exists`);
    }
  }
});

test('a circle opens its own listening, otherwise the next unfinished one', () => {
  const items = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  assert.equal(listeningFor(items, 'b', []).id, 'b');
  assert.equal(listeningFor(items, 'zz', ['a']).id, 'b');
  assert.equal(listeningFor(items, 'zz', ['a', 'b', 'c']).id, 'a');
});

test('gaps keep the text and accept answers without accents or capitals', () => {
  assert.deepEqual(parseGaps('Son las [nueve] y [media].'), { parts: ['Son las ', ' y ', '.'], answers: ['nueve', 'media'] });
  assert.ok(sameWord('Médico', 'medico'));
  assert.ok(!sameWord('', ''));
  assert.ok(!sameWord('casa', 'caza'));
});

test('the 3D games offer the Comprensión auditiva mode', () => {
  for (const path of ['app/noche-abierta/NocheGame.tsx', 'app/marketing-de-casinos/CasinoGame.tsx', 'app/bosque-de-los-hongos-gigantes/BosqueHongos.tsx', 'app/el-reino-de-la-rosa-dormida/ReinoGame.tsx', 'app/hospital-san-casi-vivo/HospitalGame.tsx']) {
    const source = readFileSync(path, 'utf8');
    assert.match(source, /<ModeSwitch /, `${path} shows the mode switch`);
    assert.match(source, /<ListeningCard game="(noche|casino|bosque|reino|hospital)"/, `${path} opens the listening card`);
  }
});
