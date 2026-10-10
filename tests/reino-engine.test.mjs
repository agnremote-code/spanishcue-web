import test from 'node:test';
import assert from 'node:assert/strict';
import { createGame, restoreGame, reduceGame, currentQuest, getDialogue, evaluateAnswer } from '../app/el-reino-de-la-rosa-dormida/engine.mjs';
import { LEVELS, NPCS } from '../app/el-reino-de-la-rosa-dormida/content.mjs';

function talk(state, npc) {
  for (let turn = state.dialogue[npc] || 0; turn < 3; turn++) {
    const line = getDialogue(npc, state.level, turn, state);
    assert.equal(line.locked, false, `${npc} turn ${turn} is available`);
    const answer = line.suggestions[0];
    assert.equal(evaluateAnswer(line, answer).accepted, true, `${npc}/${state.level}/${turn}: ${answer}`);
    state = reduceGame(state, { type: 'answer', npc, text: answer });
    assert.equal(state.dialogue[npc], turn + 1);
    assert.deepEqual(restoreGame(JSON.stringify(state)), state, `${npc} reload preserves progress`);
  }
  return state;
}
const cast = (state, spell, target) => reduceGame(state, { type: 'cast', spell, target });
const collect = (state, item) => reduceGame(state, { type: 'collect', item });
function campaign(level) {
  let state = createGame(level);
  state = talk(state, 'nox');
  assert.equal(currentQuest(state).id, 'q2');
  state = talk(talk(state, 'ines'), 'bruno');
  state = cast(state, 'ventaria', 'mill'); state = collect(state, 'key');
  state = talk(state, 'liora');
  assert.equal(currentQuest(state).id, 'q3');
  state = cast(state, 'lumaria', 'grove');
  state = talk(state, 'aldren');
  assert.equal(state.flags.bridgeOpen, true);
  state = talk(state, 'celina');
  state = cast(state, 'floralis', 'thorns');
  state = collect(state, 'rose');
  assert.equal(state.flags.castleOpen, true);
  state = collect(state, 'scroll');
  state = talk(talk(state, 'baltasar'), 'teobaldo');
  assert.equal(currentQuest(state).id, 'q7');
  state = cast(state, 'aurora', 'dragon');
  state = talk(state, 'brum');
  state = collect(state, 'crystal');
  state = talk(state, 'tejedora');
  state = cast(state, 'lumaria', 'altar');
  state = cast(state, 'floralis', 'altar');
  state = cast(state, 'aurora', 'altar');
  state = talk(state, 'elara');
  assert.equal(state.flags.victory, true);
  assert.equal(state.completed.length, 8);
  assert.equal(currentQuest(state).complete, true);
  assert.deepEqual(restoreGame(JSON.stringify(state)), state);
  return state;
}

for (const level of ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
  test(`a complete campaign reaches the ending and survives reload at ${level}`, () => campaign(level));
}

test('every NPC has three distinct exchanges and genuinely different level tasks', () => {
  for (const npc of NPCS) {
    const texts = new Set();
    for (const level of LEVELS) {
      for (let stage = 0; stage < 3; stage++) {
        const line = getDialogue(npc.id, level, stage);
        assert.ok(line.text && line.prompt && line.hint && line.suggestions.length);
        texts.add(line.text);
        assert.ok(evaluateAnswer(line, line.suggestions[0]).accepted, `${npc.id} ${level} ${stage}`);
        assert.equal(evaluateAnswer(line, 'zzzzzz').accepted, false);
      }
    }
    assert.equal(texts.size, 21, `${npc.id} has 21 authored prompts`);
  }
});

test('locked actions and unrelated free text cannot advance the campaign', () => {
  const start = createGame('A1');
  const attacks = [
    { type: 'collect', item: 'crystal' }, { type: 'collect', item: 'key' },
    { type: 'cast', spell: 'aurora', target: 'altar' },
    { type: 'answer', npc: 'elara', text: 'El reino es libre.' },
    { type: 'answer', npc: 'nox', text: 'Patatas y ruedas azules.' },
    { type: 'complete', quest: 'q8' },
  ];
  for (const action of attacks) assert.deepEqual(reduceGame(start, action), start);
  assert.equal(getDialogue('elara', 'A1', 0, start).locked, true);
});

test('recognition accepts variants, accent differences and rejects contrary intent', () => {
  const line = getDialogue('nox', 'A1', 0);
  for (const text of ['Me llamo Gael.', 'Soy el príncipe Gael', 'soy gael']) assert.equal(evaluateAnswer(line, text).accepted, true);
  assert.equal(evaluateAnswer(line, 'No soy Gael.').accepted, false);
  const help = getDialogue('nox', 'A1', 2);
  assert.equal(evaluateAnswer(help, 'Quiero ayudar al reino.').accepted, true);
  assert.equal(evaluateAnswer(help, 'No quiero ayudar al reino.').accepted, false);
});

test('ritual order is enforced and missing spell targets do not grant progress', () => {
  let state = createGame('A0');
  state = talk(state, 'nox'); state = talk(talk(state, 'ines'), 'bruno'); state = cast(state, 'ventaria', 'mill'); state = collect(state, 'key'); state = talk(state, 'liora');
  assert.deepEqual(cast(state, 'lumaria', 'altar'), state);
  assert.deepEqual(cast(state, 'lumaria', undefined), state);
  assert.deepEqual(cast(state, 'floralis', 'grove'), state);
});

test('malformed saves are safe and unsupported or impossible state is discarded', () => {
  for (const raw of [null, undefined, 'not json', '[]', 'null', {}, { version: 999 }, { level: 'X9' }]) assert.deepEqual(restoreGame(raw), createGame('A1'));
  const state = restoreGame({ version: 1, level: 'C2', completed: ['q8'], inventory: ['crystal'], spells: ['aurora'], dialogue: { elara: 3, brum: 900 }, flags: { victory: true }, checkpoint: { x: Infinity, y: -1000, z: 'bad' } });
  assert.equal(state.flags.victory, false);
  assert.equal(state.completed.length, 0);
  assert.equal(state.level, 'C2');
  assert.deepEqual(state.inventory, []);
  assert.ok(Number.isFinite(state.checkpoint.x));
});

test('state transitions are immutable and checkpoint values are bounded', () => {
  const start = createGame('A1'); const before = JSON.stringify(start);
  const next = reduceGame(start, { type: 'checkpoint', position: { x: 4, y: 1, z: -12 } });
  assert.equal(JSON.stringify(start), before);
  assert.deepEqual(next.checkpoint, { x: 4, y: 1, z: -12 });
  assert.deepEqual(reduceGame(next, { type: 'checkpoint', position: { x: NaN, y: 1, z: 1 } }), next);
  assert.equal(reduceGame(next, { type: 'level', level: 'B2' }).level, 'B2');
});

test('free answers recognize natural equivalents beyond the authored suggestions', () => {
  const cases = [
    ['nox', 0, 'A1', 'Mi nombre es Gael.'],
    ['ines', 1, 'A1', '¿Me prestarías la llave, por favor?'],
    ['bruno', 0, 'A1', 'Voy a arreglar el molino.'],
    ['liora', 0, 'A2', 'Puedo cuidar las raíces del bosque.'],
    ['aldren', 2, 'B1', 'Escucharé su decisión porque la princesa tiene derecho a elegir.'],
    ['brum', 0, 'B1', 'No voy a atacarte; solo quiero dialogar contigo.'],
    ['brum', 0, 'A1', 'No quiero atacar; quiero hablar.'],
    ['elara', 0, 'A1', 'No puedo decidir por ti; tú puedes elegir.'],
    ['brum', 2, 'B2', 'Aunque ella decida quedarse, respetaré su elección porque es libre.'],
    ['tejedora', 2, 'A1', 'Lumaria, Floralis y Aurora.'],
    ['elara', 0, 'C1', 'Tu decisión será libre, aunque necesites tiempo para descubrir qué deseas.'],
  ];
  for (const [npc, stage, level, answer] of cases) {
    assert.equal(evaluateAnswer(getDialogue(npc, level, stage), answer).accepted, true, answer);
  }
});

test('contradictory statements and unordered narrative clues are not accepted as keyword matches', () => {
  const cases = [
    ['nox', 0, 'A1', 'Gael es un nombre bonito.'],
    ['nox', 1, 'A1', 'El reino no duerme.'],
    ['ines', 1, 'A1', 'La llave es fea.'],
    ['bruno', 0, 'A1', 'No voy a reparar el molino.'],
    ['bruno', 0, 'A1', 'No quiero arreglar el molino.'],
    ['bruno', 2, 'A1', 'No voy a cuidar la llave.'],
    ['aldren', 0, 'A1', 'No quiero ayudar a Elara.'],
    ['elara', 0, 'A1', 'No respeto tu decisión.'],
    ['bruno', 1, 'A1', 'Usaré fuego, no viento.'],
    ['liora', 0, 'A1', 'No quiero ayudar al bosque.'],
    ['aldren', 1, 'A2', 'No reparé el molino.'],
    ['brum', 0, 'A1', 'Quiero atacar al dragón y hablar.'],
    ['brum', 1, 'A1', 'No quiero proteger a Elara.'],
    ['brum', 2, 'A1', 'No voy a respetar su libertad.'],
    ['tejedora', 2, 'A1', 'Aurora, Lumaria y Floralis.'],
    ['teobaldo', 0, 'B1', 'Primero la tormenta, después el sueño y al final el refugio.'],
    ['elara', 0, 'A1', 'No puedes elegir, yo decido por ti.'],
  ];
  for (const [npc, stage, level, answer] of cases) {
    assert.equal(evaluateAnswer(getDialogue(npc, level, stage), answer).accepted, false, answer);
  }
});

test('conversation order within each open area survives a reload', () => {
  let state = talk(createGame('B1'), 'nox');
  state = talk(state, 'bruno');
  state = cast(state, 'ventaria', 'mill');
  assert.deepEqual(restoreGame(state), state);
  state = talk(state, 'ines'); state = collect(state, 'key'); state = talk(state, 'liora');
  state = cast(state, 'lumaria', 'grove'); state = talk(state, 'aldren'); state = talk(state, 'celina');
  state = cast(state, 'floralis', 'thorns'); state = collect(state, 'rose'); state = collect(state, 'scroll');
  state = talk(state, 'teobaldo');
  assert.deepEqual(restoreGame(state), state);
  state = talk(state, 'baltasar');
  assert.equal(currentQuest(state).id, 'q7');
});

test('advanced level changes preserve progress without silently completing exchanges', () => {
  const start = talk(createGame('A0'), 'nox');
  const switched = reduceGame(start, { type: 'level', level: 'C2' });
  assert.deepEqual(switched.completed, ['q1']);
  assert.equal(switched.dialogue.ines, 0);
  assert.deepEqual(restoreGame(switched), switched);
});

test('the final ritual cannot be solved out of order after all prerequisite quests', () => {
  const finished = campaign('A1');
  const ready = restoreGame({ ...finished, dialogue: { ...finished.dialogue, elara: 0 }, flags: { ...finished.flags, ritualLight: false, ritualGrowth: false, ritualDawn: false } });
  assert.equal(ready.completed.length, 7);
  assert.equal(ready.flags.ritualReady, true);
  assert.deepEqual(cast(ready, 'aurora', 'altar'), ready);
  assert.deepEqual(cast(ready, 'floralis', 'altar'), ready);
  let state = cast(ready, 'lumaria', 'altar');
  assert.equal(state.flags.ritualLight, true);
  assert.deepEqual(cast(state, 'aurora', 'altar'), state);
  assert.equal(getDialogue('elara', 'A1', 0, state).locked, true);
  state = cast(state, 'floralis', 'altar');
  state = cast(state, 'aurora', 'altar');
  assert.equal(getDialogue('elara', 'A1', 0, state).locked, false);
  assert.equal(state.flags.victory, false, 'the ending requires actually speaking with Elara');
});

test('duplicate pickups and completed conversations never duplicate rewards', () => {
  const state = campaign('A0');
  for (const item of state.inventory) assert.deepEqual(collect(state, item), state);
  assert.deepEqual(reduceGame(state, { type: 'answer', npc: 'elara', text: 'Un reino libre.' }), state);
  assert.equal(new Set(state.inventory).size, state.inventory.length);
  assert.equal(new Set(state.spells).size, state.spells.length);
});
