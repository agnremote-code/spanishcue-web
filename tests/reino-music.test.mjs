import test from 'node:test';
import assert from 'node:assert/strict';
import { THEMES, themeFor, chordNotes, degreeNote, midiToFrequency } from '../app/el-reino-de-la-rosa-dormida/score.mjs';

test('every region has a complete, playable epic theme', () => {
  assert.deepEqual(Object.keys(THEMES).sort(), ['castle', 'dragon', 'forest', 'journey', 'tower', 'victory', 'village']);
  for (const [id, theme] of Object.entries(THEMES)) {
    assert.ok(theme.bpm >= 60 && theme.bpm <= 150, id);
    assert.equal(theme.melody.length, theme.progression.length, `${id}: one melody bar per chord`);
    for (const bar of theme.melody) assert.equal(bar.length, 8, `${id}: eighth notes`);
    for (const row of theme.drums) assert.match(row, /^[xos.]{16}$/, `${id}: drum row`);
    for (const degree of theme.progression) for (const note of chordNotes(theme, degree)) assert.ok(note >= 36 && note <= 84, `${id}: chord range`);
    for (const bar of theme.melody) for (const degree of bar) if (degree !== null) {
      const frequency = midiToFrequency(degreeNote(theme, degree, 1));
      assert.ok(frequency > 150 && frequency < 2000, `${id}: melody range ${frequency}`);
    }
  }
  assert.ok(THEMES.dragon.bpm > THEMES.castle.bpm && THEMES.dragon.ostinato, 'the dragon fight drives harder');
});

test('the music follows Gael through each part of the kingdom', () => {
  assert.equal(themeFor({ x: 0, z: 24 }), 'village');
  assert.equal(themeFor({ x: 14, z: 10 }), 'village');
  assert.equal(themeFor({ x: -10, z: -7 }), 'forest');
  assert.equal(themeFor({ x: 0, z: -43 }), 'journey');
  assert.equal(themeFor({ x: -8, z: -59 }), 'journey');
  assert.equal(themeFor({ x: 10, z: -78 }), 'castle');
  assert.equal(themeFor({ x: -10, z: -111 }), 'dragon');
  assert.equal(themeFor({ x: -10, z: -111 }, { dragonTrusted: true }), 'tower');
  assert.equal(themeFor({ x: 10, z: -126 }), 'tower');
  assert.equal(themeFor({ x: 0, z: 24 }, { victory: true }), 'victory');
});
