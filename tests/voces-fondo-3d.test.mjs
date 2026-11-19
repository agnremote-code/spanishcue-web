// Background voices in the 3D worlds (owner, 2026-11-19): people only yell when
// the learner crashes into them, never over an open conversation; the insults use
// native voices of each country with several lines each; a «Voces» button next
// to the music volume silences only the people.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { bumpLine } from '../app/escucha-3d/bump.mjs';

const voces = JSON.parse(readFileSync('app/escucha-3d/voces.json', 'utf8')).lines;

test('nobody yells because they walked into a learner who was standing still', () => {
  const worlds = readdirSync('app', { withFileTypes: true }).filter(d => d.isDirectory()).map(d => `app/${d.name}/World3D.tsx`).filter(existsSync);
  let checked = 0;
  for (const f of worlds) {
    const src = readFileSync(f, 'utf8');
    if (!src.includes('insultFor(')) continue;
    checked++;
    const lines = src.split('\n');
    lines.forEach((line, i) => {
      if (!line.includes('insultFor(')) return;
      const guard = lines.slice(Math.max(0, i - 4), i + 1).join('\n');
      assert.doesNotMatch(guard, /who\.moving|who\.walk\b/, `${f}:${i + 1} yells when a walker bumps into the learner`);
      assert.match(guard, /speed > 1\.2/, `${f}:${i + 1} needs the learner's own speed`);
    });
  }
  assert.ok(checked >= 12, `worlds checked: ${checked}`);
});

test('insults: native voice of their country, four lines per voice, a new line at each crash', () => {
  const bumps = voces.filter(v => v.kind === 'bump');
  const byVoice = new Map();
  for (const v of bumps) byVoice.set(v.voice, [...(byVoice.get(v.voice) ?? []), v]);
  for (const [voice, list] of byVoice) {
    assert.match(voice, /^es-[A-Z]{2}-[A-Za-z]+Neural$/);
    assert.ok(list.length >= 4, `${voice} has ${list.length} lines`);
    assert.equal(new Set(list.map(l => l.text)).size, list.length, `${voice} repeats a line`);
  }
  assert.equal(new Set(voces.map(v => v.id)).size, voces.length, 'ids are unique');
  const first = bumpLine(voces, 'm', 5, 0), second = bumpLine(voces, 'm', 5, 1);
  assert.equal(first.voice, second.voice, 'the same person keeps their voice');
  assert.notEqual(first.id, second.id, 'and says something else the next time');
  const py = readFileSync('scripts/generate-escucha-3d-audio.py', 'utf8');
  const shout = py.slice(py.indexOf('async def shout'), py.indexOf('async def main'));
  assert.match(shout, /speak\(line\['text'\], line\['voice'\]/, 'shouts are spoken by the line\'s own native voice');
  assert.doesNotMatch(shout, /ENGINE\[/, 'not by the multilingual English/German voices');
});

test('an open conversation silences the background; the «Voces» button silences only the people', () => {
  const shout = readFileSync('app/escucha-3d/shout.ts', 'utf8');
  assert.match(shout, /if \(soundMuted \|\| hushed\.size \|\| voicesAreOff\(\)/);
  const charlas = readFileSync('app/charlas-3d/charlas3d.ts', 'utf8');
  assert.match(charlas, /hushVoices\('charla', true\)/);
  assert.equal((charlas.match(/hushVoices\('charla', false\)/g) ?? []).length, 2, 'released on close and on dispose');
  for (const f of ['app/hospital-san-casi-vivo/World3D.tsx', 'app/vuelo-cancelado/World3D.tsx']) {
    assert.match(readFileSync(f, 'utf8'), /onCry: \(cry, volume\) => \{ if \(live\.current\.paused \|\| live\.current\.sceneId \|\| live\.current\.personId\) return;/, `${f}: no cries over a card`);
  }
  const ui = readFileSync('app/escucha-3d/MusicVolume.tsx', 'utf8');
  assert.match(ui, /setVoicesOff\(!voicesOff\)/);
  assert.match(ui, /Voces/);
});
