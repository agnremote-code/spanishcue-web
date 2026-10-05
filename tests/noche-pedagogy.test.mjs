import test from 'node:test';
import assert from 'node:assert/strict';
import * as engine from '../app/noche-abierta/engine.mjs';
for (const level of ['A1', 'B2', 'C1']) test(`${level}: the speaking turn presents one open personal question`, () => {
  for (const place of engine.contentFor(level).LOCATIONS) for (const activity of place.activities) {
    const initial = engine.openLocation(engine.startExploring(engine.initialState(level)), place.id, activity.id);
    const first = engine.currentView(initial);
    const speaking = engine.currentView(engine.chooseOption(initial, first.beat.options[0].id)).beat;
    assert.equal((speaking.prompt.match(/¿/g) || []).length, 1, `${activity.id}: one question`);
    assert.equal((speaking.prompt.match(/\?/g) || []).length, 1, `${activity.id}: one question`);
    assert.match(speaking.prompt, /^¿(?:Qué|Cómo|Cuándo|Cuánto|Dónde|Adónde|Con quién|A quién|A qué|De qué|Para qué|En qué)/, `${activity.id}: open prompt`);
  }
});
for (const level of engine.LEVELS) test(`${level}: every person, object and place has exactly choice then personal speaking`, () => {
  const questions = new Set();
  for (const location of engine.contentFor(level).LOCATIONS) for (const activity of location.activities) {
    let state = engine.openLocation(engine.startExploring(engine.initialState(level)), location.id, activity.id);
    const first = engine.currentView(state);
    assert.deepEqual(first.beats.map(b => b.kind), ['choose', 'talk'], activity.id);
    assert.ok(first.beat.context.length <= 350, `${activity.id}: concise situation`);
    assert.ok(first.beat.options.length >= 3 && first.beat.options.length <= 4);
    assert.equal(new Set(first.beat.options.map(o=>o.label)).size, first.beat.options.length);
    assert.equal(engine.advanceBeat(state), state, 'cannot skip the choice');
    assert.equal(engine.chooseOption(state, 'invalid'), state);
    for (const option of first.beat.options) {
      const next = engine.currentView(engine.chooseOption(state, option.id));
      assert.equal(next.index, 1);
      assert.equal(next.last, true);
      assert.equal(next.beat.context, undefined, 'no continued fiction');
      assert.equal(next.beat.media, undefined);
      assert.equal(next.beat.prompt, activity.close);
    }
    assert.ok(!questions.has(activity.close), 'distinct personal questions');
    questions.add(activity.close);
    assert.doesNotMatch(activity.close, /\b(Nico|Vale|Leo|Lu|Sergio|Carla|Julio)\b|esta historia|en tu relato/);
  }
  assert.equal(questions.size, 40);
});

test('teacher guidance and location support explain the two moments without continuing fiction', () => {
  for (const level of engine.LEVELS) {
    const content = engine.contentFor(level);
    assert.equal(content.MECHANICS.mensajes.mechanic, 'Elige y conversa');
    const support = JSON.stringify([content.TEACHER_MOVES, content.LOCATIONS.map(({focus,help,hubPrompt}) => ({focus,help,hubPrompt}))]);
    assert.doesNotMatch(support, /sin respuestas para elegir|historias sin terminar|adapte el plan|Explicar sin la palabra/);
    assert.match(support, /respuesta personal/);
  }
});
