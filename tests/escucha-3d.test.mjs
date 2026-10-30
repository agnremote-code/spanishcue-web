import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { GAMES, audioSrc, listeningFor, parseGaps, sameWord } from '../app/escucha-3d/games.mjs';
import { checkFile } from '../scripts/check-escucha-3d.mjs';
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
