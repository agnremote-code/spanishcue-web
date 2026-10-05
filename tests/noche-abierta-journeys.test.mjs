import test from 'node:test';
import assert from 'node:assert/strict';
import * as engine from '../app/noche-abierta/engine.mjs';

for (const level of engine.LEVELS) {
  test(`${level}: taxi choices drive distinct physical outcomes without discarding dialogue`, () => {
    const expected = { 'taxi-cortado': { caminar: ['plaza', 'walk'], rodear: ['terraza', 'ride'], esperar: ['taxi', 'wait'] }, 'taxi-mayor': { seguir: ['plaza', 'ride'], volver: ['taxi', 'turn'], bajar: ['tienda', 'walk'] } };
    assert.equal(typeof engine.worldOutcome, 'function');
    for (const [activity, choices] of Object.entries(expected)) for (const [choice, [location, travel]] of Object.entries(choices)) {
      const before = engine.openLocation(engine.startExploring(engine.initialState(level)), 'taxi', activity);
      assert.equal(engine.worldOutcome(before), null);
      const selected = engine.chooseOption(before, choice);
      const outcome = engine.worldOutcome(selected);
      assert.equal(outcome.location, location);
      assert.equal(outcome.travel, travel);
      assert.equal(engine.currentView(selected).progress.choice, choice);
      assert.equal(engine.currentView(selected).beat.kind, 'talk');
      assert.equal(engine.worldOutcome(engine.advanceBeat(selected)).location, location);
      assert.equal(engine.worldOutcome(engine.restartActivity(selected)), null);
      const left = engine.leaveLocation(selected);
      assert.equal(left.position, location);
      assert.equal(engine.worldOutcome(left), null);
      assert.equal(engine.worldOutcome(engine.openLocation(selected, 'tienda')), null);
    }
  });
}
test('invalid options never cause a journey', () => {
  const state = engine.openLocation(engine.startExploring(engine.initialState()), 'taxi');
  assert.equal(typeof engine.worldOutcome, 'function');
  assert.equal(engine.worldOutcome(engine.chooseOption(state, 'invented')), null);
});
