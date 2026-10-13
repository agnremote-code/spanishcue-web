import test from 'node:test';
import assert from 'node:assert/strict';
import { createGame, restoreGame, reduceGame, currentQuest, conversationView, conversationLength, hasTalked, deepPool, CAMPAIGN, LEGACY_SAVE_KEY, PLACE_IDS } from '../app/el-reino-de-la-rosa-dormida/engine.mjs';
import { LEVELS, NPCS, QUESTS } from '../app/el-reino-de-la-rosa-dormida/content.mjs';
import { CONVERSATIONS, PLACES, QUESTION_STEPS } from '../app/el-reino-de-la-rosa-dormida/conversations.mjs';
import { START_POINTS, CHAPTERS, stateForStartPoint, applyCampaignStep } from '../app/el-reino-de-la-rosa-dormida/checkpoints.mjs';
import { PROFILES_KEY, emptyStore, readStore, writeStore, createProfile, saveProfileState, resetProfile, deleteProfile, setActive, activeProfile, exportStore, importProfiles, profileSummary } from '../app/el-reino-de-la-rosa-dormida/profiles.mjs';

const say = (state, npc, text) => reduceGame(state, { type: 'say', npc, ...(text === undefined ? {} : { text }) });
const reload = state => restoreGame(JSON.parse(JSON.stringify(state)));
/** Talks through a whole encounter pressing «Continuar» only, reloading after every turn. */
function talk(state, npc, answers = []) {
  state = reduceGame(state, { type: 'open', npc });
  for (let turn = 0; (state.dialogue[npc] ?? 0) < conversationLength(npc); turn++) {
    const before = state.dialogue[npc];
    const view = conversationView(state, npc);
    assert.equal(view.mode, 'main', `${npc} ${state.level} turn ${turn} is open`);
    assert.ok(view.text, `${npc} ${state.level} turn ${turn} has a line`);
    state = say(state, npc, view.isQuestion ? answers[turn] : undefined);
    assert.equal(state.dialogue[npc], before + 1, `${npc} advances without grading`);
    assert.deepEqual(reload(state), state, `${npc} reload keeps the exact moment`);
  }
  assert.ok(hasTalked(state, npc));
  assert.equal(state.talking, null);
  return state;
}
const CAST_FLAGS = { 'ventaria:mill': 'millRepaired', 'lumaria:grove': 'forestLit', 'floralis:thorns': 'gardenOpen', 'aurora:dragon': 'dragonShield', 'lumaria:altar': 'ritualLight', 'floralis:altar': 'ritualGrowth', 'aurora:altar': 'ritualDawn' };
/** Plays the rest of the canonical campaign from any valid state. */
function finish(state) {
  for (const step of CAMPAIGN) {
    const [kind, id] = step;
    const done = kind === 'talk' ? hasTalked(state, id) : kind === 'collect' ? state.inventory.includes(id) : state.flags[CAST_FLAGS[`${id}:${step[2]}`]];
    if (done) continue;
    state = kind === 'talk' ? talk(state, id) : applyCampaignStep(state, step);
  }
  return state;
}
const castDone = (state, [, spell, target]) => reduceGame(state, { type: 'cast', spell, target }) === state;

for (const level of LEVELS) {
  test(`the whole campaign is playable with «Continuar» and no text at ${level}`, () => {
    let state = createGame(level);
    for (const step of CAMPAIGN) {
      if (step[0] === 'talk') state = talk(state, step[1]);
      else state = applyCampaignStep(state, step);
      assert.deepEqual(reload(state), state);
    }
    assert.equal(state.flags.victory, true);
    assert.equal(state.completed.length, QUESTS.length);
    assert.equal(currentQuest(state).complete, true);
  });
}

test('open answers of any content, length or language move the conversation on', () => {
  for (const text of ['', 'Me gusta el mar.', 'No sé.', 'I like music', 'Patatas y ruedas azules.', 'No quiero ayudar.', 'x'.repeat(1500)]) {
    const state = say(reduceGame(createGame('B1'), { type: 'open', npc: 'nox' }), 'nox');
    assert.equal(say(state, 'nox', text).dialogue.nox, 2, JSON.stringify(text.slice(0, 20)));
  }
  const start = createGame('A1');
  assert.equal(say(start, 'nox', 'x'.repeat(1501)), start, 'absurd payloads are ignored');
  assert.equal(say(start, 'nox', 42), start);
});

test('no question asks the learner to introduce themselves as Gael and none is keyword-gated', () => {
  for (const [id, conv] of Object.entries(CONVERSATIONS)) {
    for (const level of LEVELS) {
      const text = JSON.stringify(conv.levels[level]);
      assert.doesNotMatch(text, /pres[eé]ntate|Gael|me llamo|c[oó]mo te llamas/i, `${id} ${level}`);
    }
  }
});

test('every character has a topic, real questions and help at every one of the seven levels', () => {
  for (const npc of NPCS) {
    const conv = CONVERSATIONS[npc.id];
    assert.ok(conv?.topic, `${npc.id} topic`);
    const sets = new Set();
    for (const level of LEVELS) {
      const authored = conv.levels[level];
      for (const step of QUESTION_STEPS) assert.ok(authored[step], `${npc.id} ${level} ${step}`);
      assert.ok(Array.isArray(authored.extra) && authored.extra.length >= 2, `${npc.id} ${level} has deepening questions`);
      sets.add(JSON.stringify(QUESTION_STEPS.map(step => authored[step])));
      let state = { ...createGame(level), dialogue: { ...createGame(level).dialogue, [npc.id]: conv.flow.indexOf('q1') } };
      state = { ...state, completed: QUESTS.map(q => q.id), flags: { ...state.flags, ritualDawn: true, dragonShield: true }, inventory: ['scroll'] };
      const view = conversationView(state, npc.id);
      assert.equal(view.isQuestion, true, `${npc.id} ${level} q1 is a question`);
      assert.ok(view.help.frames.length >= 2, `${npc.id} ${level} sentence frames`);
      assert.ok(view.help.safe, `${npc.id} ${level} safe answer note`);
      if (level === 'A0') { assert.ok(view.en, `${npc.id} A0 English support`); assert.ok(view.options?.length >= 2, `${npc.id} A0 options`); }
    }
    assert.equal(sets.size, LEVELS.length, `${npc.id}: seven genuinely different question sets`);
    const flowLength = conv.flow.length;
    assert.ok(flowLength >= 5 && flowLength <= 8, `${npc.id}: 5–8 moments per encounter`);
  }
});

test('points of interest offer optional conversations at every level and never change the campaign', () => {
  assert.ok(PLACE_IDS.length >= 5);
  let state = createGame('B2');
  for (const id of PLACE_IDS) {
    for (const level of LEVELS) assert.ok(PLACES[id].levels[level], `${id} ${level}`);
    if (PLACES[id].requires) { assert.equal(say(state, id), state, `${id} waits for its area`); continue; }
    const before = state;
    state = say(say(state, id, 'Me encanta este lugar.'), id);
    assert.equal(state.places[id], conversationLength(id));
    assert.deepEqual(state.completed, before.completed);
    assert.deepEqual(state.flags, before.flags);
  }
});

test('Profundizar adds optional questions and revisits never force the same questions again', () => {
  let state = talk(createGame('B1'), 'nox');
  assert.ok(deepPool('nox', 'B1').length >= 4);
  const revisit = conversationView(reduceGame(state, { type: 'open', npc: 'nox' }), 'nox');
  assert.equal(revisit.mode, 'revisit');
  assert.equal(revisit.isQuestion, false);
  state = reduceGame(state, { type: 'deepen', npc: 'nox' });
  const first = conversationView(state, 'nox');
  assert.equal(first.mode, 'deep');
  assert.equal(first.isQuestion, true);
  state = reduceGame(state, { type: 'deepen', npc: 'nox' });
  assert.notEqual(conversationView(state, 'nox').text, first.text);
  const progress = JSON.stringify([state.completed, state.flags, state.spells, state.inventory]);
  state = say(state, 'nox');
  assert.equal(JSON.stringify([state.completed, state.flags, state.spells, state.inventory]), progress);
  // In the middle of the main flow, a deepening question returns to the exact same moment.
  let mid = say(say(reduceGame(createGame('A2'), { type: 'open', npc: 'nox' }), 'nox'), 'nox');
  mid = reduceGame(mid, { type: 'deepen', npc: 'nox' });
  assert.equal(conversationView(mid, 'nox').mode, 'deep');
  mid = say(mid, 'nox');
  assert.equal(conversationView(mid, 'nox').mode, 'main');
  assert.equal(mid.dialogue.nox, 2);
});

test('objective actions stay strict: locked spells, items, conversations and the ritual order', () => {
  const start = createGame('A1');
  for (const action of [
    { type: 'collect', item: 'crystal' }, { type: 'collect', item: 'key' }, { type: 'cast', spell: 'aurora', target: 'altar' },
    { type: 'say', npc: 'elara' }, { type: 'say', npc: 'brum', text: 'Hola' }, { type: 'deepen', npc: 'celina' }, { type: 'complete', quest: 'q8' },
  ]) assert.equal(reduceGame(start, action), start, JSON.stringify(action));
  assert.equal(conversationView(reduceGame(start, { type: 'open', npc: 'elara' }), 'elara').mode, 'locked');
  // A conversation cannot repair the mill: the key needs the real spell.
  let state = talk(talk(talk(start, 'nox'), 'ines'), 'bruno');
  assert.equal(reduceGame(state, { type: 'collect', item: 'key' }), state);
  assert.equal(reduceGame(state, { type: 'cast', spell: 'lumaria', target: 'mill' }), state);
  // The ritual demands light, then growth, then dawn.
  const ready = stateForStartPoint('c8-ritual', 'A1');
  assert.ok(castDone(ready, ['cast', 'aurora', 'altar']));
  assert.ok(castDone(ready, ['cast', 'floralis', 'altar']));
  let ritual = reduceGame(ready, { type: 'cast', spell: 'lumaria', target: 'altar' });
  assert.ok(castDone(ritual, ['cast', 'aurora', 'altar']));
  assert.equal(conversationView(ritual, 'elara').mode, 'locked');
  ritual = reduceGame(reduceGame(ritual, { type: 'cast', spell: 'floralis', target: 'altar' }), { type: 'cast', spell: 'aurora', target: 'altar' });
  assert.equal(conversationView(ritual, 'elara').mode, 'main');
  assert.equal(ritual.flags.victory, false, 'the ending needs the conversation with Elara');
});

test('the mission hint, the HUD objective and the map target agree for every start point', () => {
  for (const point of START_POINTS) {
    const state = stateForStartPoint(point.id, 'B1');
    const quest = currentQuest(state);
    for (const npc of NPCS) {
      const view = conversationView(state, npc.id);
      assert.equal(view.mission.objective, quest.objective, `${point.id} ${npc.id}`);
    }
    assert.ok(quest.target, `${point.id} has a map target`);
  }
});

test('all 27 start points rebuild a valid state and the campaign can be finished from each', () => {
  assert.equal(CHAPTERS.length, 8);
  for (const chapter of CHAPTERS) assert.ok(chapter.points.length >= 2, `chapter ${chapter.number} offers start points`);
  for (const point of START_POINTS) {
    const state = stateForStartPoint(point.id, 'A2');
    assert.equal(currentQuest(state).number, point.chapter, `${point.id} is in chapter ${point.chapter}`);
    assert.deepEqual(state.checkpoint, point.position);
    if (point.open) assert.equal(state.talking?.id, point.open);
    assert.deepEqual(reload(state), state, `${point.id} survives a reload`);
    const end = finish({ ...state, talking: null });
    assert.equal(end.flags.victory, true, `${point.id} reaches the ending`);
  }
});

for (const [pointId, level] of [['c4-puente', 'A1'], ['c6-castillo', 'B2'], ['c8-tejedora', 'C1']]) {
  test(`starting at ${pointId} keeps earlier rewards, reloads and finishes at ${level}`, () => {
    let state = stateForStartPoint(pointId, level);
    const point = START_POINTS.find(entry => entry.id === pointId);
    for (const quest of QUESTS.slice(0, point.chapter - 1)) assert.ok(state.completed.includes(quest.id), `${quest.id} already done`);
    if (point.chapter >= 4) assert.ok(state.spells.includes('ventaria') && state.spells.includes('lumaria') && state.flags.forestLit);
    if (point.chapter >= 6) assert.ok(state.flags.castleOpen && state.inventory.includes('rose'));
    if (point.chapter >= 8) assert.ok(state.flags.dragonTrusted && state.inventory.includes('crystal') && state.spells.includes('aurora'));
    state = reload(state);
    if (state.talking) state = talk(state, state.talking.id);
    state = reload(finish(reload(state)));
    assert.equal(state.flags.victory, true);
  });
}

test('an interrupted conversation resumes at the exact question after a reload', () => {
  let state = reduceGame(stateForStartPoint('c3-liora', 'B1'), { type: 'checkpoint', position: { x: -8, y: 0, z: 2 } });
  state = say(say(say(state, 'liora'), 'liora', 'Prefiero el bosque.'), 'liora');
  const before = conversationView(state, 'liora');
  const restored = reload(state);
  assert.deepEqual(restored.talking, { id: 'liora', deep: false });
  assert.deepEqual(conversationView(restored, 'liora'), before);
  assert.equal(conversationView(restored, 'liora').index, 3);
});

test('a version 1 save migrates safely into a version 2 game', () => {
  const legacy = { version: 1, level: 'B2', completed: ['q1'], inventory: [], spells: [], dialogue: { nox: 3, ines: 2 }, flags: {}, checkpoint: { x: 6, y: 0, z: 14 } };
  const state = restoreGame(JSON.stringify(legacy));
  assert.equal(state.version, 2);
  assert.equal(state.level, 'B2');
  assert.ok(hasTalked(state, 'nox'));
  assert.ok(state.completed.includes('q1'));
  assert.ok(!hasTalked(state, 'ines'), 'a partial conversation resumes, it is not completed');
  assert.ok(state.dialogue.ines > 0);
  assert.deepEqual(state.checkpoint, legacy.checkpoint);
});

test('malformed or impossible saves are discarded safely', () => {
  for (const raw of [null, undefined, 'not json', '[]', 'null', {}, { version: 999 }, { level: 'X9' }]) assert.deepEqual(restoreGame(raw), createGame('A1'));
  const state = restoreGame({ version: 2, level: 'C2', completed: ['q8'], inventory: ['crystal'], spells: ['aurora'], dialogue: { elara: 7, brum: 900 }, places: { molino: -4 }, deep: { nox: 'x' }, talking: { id: 'nadie' }, flags: { victory: true }, checkpoint: { x: Infinity, y: -1000, z: 'bad' } });
  assert.equal(state.flags.victory, false);
  assert.equal(state.completed.length, 0);
  assert.equal(state.level, 'C2');
  assert.deepEqual(state.inventory, []);
  assert.equal(state.talking, null);
  assert.ok(Number.isFinite(state.checkpoint.x));
});

class MemoryStorage {
  constructor(entries = {}) { this.map = new Map(Object.entries(entries)); }
  getItem(key) { return this.map.has(key) ? this.map.get(key) : null; }
  setItem(key, value) { this.map.set(key, String(value)); }
}

test('three students keep independent adventures; reset and delete touch only one', () => {
  const storage = new MemoryStorage();
  let store = readStore(storage);
  const ids = [];
  for (const [name, level] of [['Daniel', 'A1'], ['Sofía', 'B2'], ['Kenji', 'C1']]) {
    const created = createProfile(store, { name, level });
    store = created.store; ids.push(created.profile.id);
  }
  store = saveProfileState(store, ids[0], stateForStartPoint('c2-molino', 'A1'));
  store = saveProfileState(store, ids[1], stateForStartPoint('c6-teobaldo', 'B2'));
  store = saveProfileState(store, ids[2], say(stateForStartPoint('c4-aldren', 'C1'), 'aldren'));
  writeStore(storage, store);
  store = readStore(storage);
  const [daniel, sofia, kenji] = ids.map(id => store.profiles.find(profile => profile.id === id));
  assert.equal(currentQuest(daniel.save).number, 2);
  assert.equal(currentQuest(sofia.save).number, 6);
  assert.equal(kenji.save.talking.id, 'aldren');
  assert.match(profileSummary(kenji).point, /Conversando con Sir Aldren · momento 2/);
  const reset = resetProfile(store, ids[1]);
  assert.deepEqual(reset.profiles.find(p => p.id === ids[1]).save, createGame('B2'));
  assert.deepEqual(reset.profiles.find(p => p.id === ids[0]).save, daniel.save);
  assert.deepEqual(reset.profiles.find(p => p.id === ids[2]).save, kenji.save);
  const deleted = deleteProfile(setActive(reset, ids[0]), ids[0]);
  assert.equal(deleted.profiles.length, 2);
  assert.notEqual(deleted.activeId, ids[0]);
  assert.deepEqual(activeProfile(setActive(deleted, ids[2])).save, kenji.save);
  assert.equal(saveProfileState(deleted, 'p_nadie_000', createGame('A1')), deleted, 'unknown profiles are never created by a save');
});

test('the old single save becomes «Mi partida» once and the old key is kept', () => {
  const legacy = JSON.stringify({ version: 1, level: 'A2', completed: ['q1'], dialogue: { nox: 3, ines: 1 }, flags: {}, inventory: [], spells: [], checkpoint: { x: 0, y: 0, z: 20 } });
  const storage = new MemoryStorage({ [LEGACY_SAVE_KEY]: legacy });
  let store = readStore(storage);
  assert.equal(store.profiles.length, 1);
  assert.equal(store.profiles[0].name, 'Mi partida');
  assert.ok(store.profiles[0].save.completed.includes('q1'));
  writeStore(storage, store);
  assert.equal(storage.getItem(LEGACY_SAVE_KEY), legacy);
  store = readStore(storage);
  assert.equal(store.profiles.length, 1, 'migration runs only once');
  assert.ok(storage.getItem(PROFILES_KEY));
});

test('export and import add students without overwriting anyone', () => {
  let store = emptyStore();
  store = createProfile(store, { name: 'Ana', level: 'A2' }).store;
  store = saveProfileState(store, store.activeId, stateForStartPoint('c5-rosa', 'A2'));
  const backup = exportStore(store);
  const other = createProfile(emptyStore(), { name: 'Luis', level: 'B1' }).store;
  const merged = importProfiles(other, backup);
  assert.equal(merged.added, 1);
  assert.deepEqual(merged.store.profiles.map(p => p.name), ['Luis', 'Ana']);
  const again = importProfiles(merged.store, backup);
  assert.deepEqual(again.store.profiles.map(p => p.name), ['Luis', 'Ana', 'Ana (copia)']);
  assert.deepEqual(again.store.profiles[1].save, merged.store.profiles[1].save);
  assert.equal(importProfiles(store, '{"kind":"otra cosa"}').added, 0);
  assert.equal(importProfiles(store, 'no es json').added, 0);
});
