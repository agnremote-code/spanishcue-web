// Noche abierta · general conversation. The object changes the story; the
// conversation stays on the learner's real life: five open questions per
// scene and per level, at most one of them brought by the object, never a
// safety course, never the same question twice in a row.
import assert from 'node:assert/strict';
import test from 'node:test';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import { build } from 'esbuild';
import * as street from '../app/noche-abierta/street.mjs';
import * as engine from '../app/noche-abierta/engine.mjs';
import * as bilingual from '../app/noche-abierta/bilingual.mjs';
import { auditNocheTalk } from '../app/noche-abierta/talk/check.mjs';
import { OBJECT_TALK, STREET_TALK, TALK_LEVELS, objectQuestion, streetTalk } from '../app/noche-abierta/talk/index.mjs';
import { RISK_WORDS, WEAPON_WORDS, auditSet, normalize } from '../app/conversacion-general/audit.mjs';

const require = createRequire(import.meta.url);
const React = require('react');
const { renderToString } = require('react-dom/server');
// The street scenes are registered by street.mjs (the PRO class does the same).
async function component(path) {
  const stdin = { contents: `import './app/noche-abierta/street.mjs'; export { default } from './${path}';`, resolveDir: process.cwd(), loader: 'tsx' };
  const r = await build({ stdin, bundle: true, write: false, format: 'cjs', platform: 'node', jsx: 'automatic', external: ['react', 'react-dom'], loader: { '.css': 'empty' } });
  const loaded = { exports: {} };
  runInNewContext(`(function(require,module,exports){${r.outputFiles[0].text}\n})`, { console, URL, URLSearchParams, process })(require, loaded, loaded.exports);
  return loaded.exports.default;
}

const ROUTES = ['pistola', 'cuchillo', 'granada', 'gas', 'corazon', 'libro', 'lapiz', null];

test('editorial audit: five questions per scene, place and level; specific per level; no weapons, procedures or repeats', () => {
  const problems = auditNocheTalk();
  assert.deepEqual(problems.slice(0, 20), [], `${problems.length} problems`);
});

test('the shared audit catches what Ale does not want', () => {
  const safety = ['¿Qué harías si alguien te amenazara con un arma?', '¿Cómo debemos actuar ante un objeto peligroso?', '¿Llamas a la policía si ves un robo?', '¿Qué haces en una emergencia?', '¿Tienes miedo?'];
  const problems = auditSet(safety, 'B1');
  assert.ok(problems.some(p => /weapon/.test(p)), 'a weapon is named');
  assert.ok(problems.some(p => /procedure/.test(p)), 'a procedure is asked');
  assert.ok(problems.some(p => /safety, crime or emergencies/.test(p)), 'too much safety');
  assert.ok(auditSet(['¿Tienes hermanos?', '¿Tienes hermanos?', '¿Te gusta bailar?', '¿Café o té?', '¿Dónde vives?'], 'A1').some(p => /same thing/.test(p)), 'near duplicates');
  assert.ok(auditSet(['¿Sí?', '¿No?', '¿Tal vez?'], 'A1').some(p => /exactly 5/.test(p)), 'five per set');
  assert.ok(auditSet(['¿Por qué Rubén no quiere ir al médico?', '¿Te gusta el mar?', '¿Dónde vives?', '¿Café o té?', '¿Tienes perro?'], 'A2', { names: ['Rubén'] }).some(p => /story/.test(p)), 'about the learner, not the story');
});

test('the narrative layer does not carry the conversation: variants only change start and opening effect', () => {
  for (const encounter of street.ENCOUNTERS) {
    assert.equal(encounter.speak, undefined, `${encounter.id}: no closing question in the story`);
    for (const [item, variant] of Object.entries(encounter.variants ?? {})) {
      assert.deepEqual(Object.keys(variant).sort().filter(key => key !== 'fx'), ['start'], `${encounter.id}/${item}`);
    }
  }
  for (const id of street.A0_IDS) assert.equal(street.a0SceneOf(id).speak, undefined, `${id}: A0 conversation lives in talk/`);
});

test('the object brings at most one question of five, about a human theme, and only when it changed the scene', () => {
  for (const item of street.ITEM_IDS) for (const level of TALK_LEVELS) {
    const pool = OBJECT_TALK[item][level];
    assert.ok(pool.length >= 6, `${item}/${level}: a pool to rotate`);
    for (const question of pool) {
      assert.doesNotMatch(question, WEAPON_WORDS, `${item}/${level}: ${question}`);
      assert.doesNotMatch(question, RISK_WORDS, `${item}/${level}: ${question}`);
    }
  }
  for (const encounter of street.ENCOUNTERS) for (const level of TALK_LEVELS) {
    const plain = streetTalk(encounter.id, level);
    assert.equal(plain.length, 5);
    for (const item of street.ITEM_IDS) {
      const withItem = streetTalk(encounter.id, level, { item, turn: 3 });
      assert.deepEqual(withItem.slice(0, 4), plain.slice(0, 4), `${encounter.id}/${level}/${item}: four questions are the scene's`);
      assert.equal(withItem[4], objectQuestion(item, level, 3));
    }
  }
  // A scene the object did not touch keeps its own five.
  const untouched = street.ENCOUNTERS.find(encounter => encounter.kind === 'rincon' && !encounter.variants?.libro);
  assert.ok(untouched, 'a corner without a book variant');
  let state = street.openEncounter(street.chooseItem(street.emptyStreet(), 'libro'), untouched.id);
  while (!state.open.end) state = street.chooseLine(state, street.choicesFor(untouched, state.open.node, 'libro')[0].key);
  assert.deepEqual(street.streetView(state, 'B1').talk, streetTalk(untouched.id, 'B1'));
});

// Walks a whole night: every scene available, in order, first answer each
// time, closing each one. Returns the cards it saw at the end.
function night(item, level) {
  let state = item ? street.chooseItem(street.emptyStreet(), item) : street.emptyStreet();
  const cards = [];
  for (let round = 0; round < 3; round++) for (const encounter of street.ENCOUNTERS) {
    if (state.done[encounter.id]) continue;
    const opened = street.openEncounter(state, encounter.id, encounter.event ?? null, level);
    if (!opened.open) continue;
    state = opened;
    const variant = level !== 'A0' && street.variantOf(encounter, item);
    if (variant) assert.equal(state.open.node, variant.start, `${encounter.id}/${item}: the object still opens its own moment`);
    for (let i = 0; i < 12 && !state.open.end; i++) state = street.chooseLine(state, street.choicesFor(encounter, state.open.node, state.item, state.open.a0)[0].key);
    const view = street.streetView(state, level);
    assert.ok(view.ended, `${encounter.id}: reaches an ending`);
    cards.push({ id: encounter.id, talk: view.talk, object: Boolean(variant) });
    state = street.closeEncounter(state);
  }
  return { cards, state };
}

for (const item of ROUTES) test(`a whole night with ${item ?? 'no object'}: real-life questions, no repeats in a row, the object never takes over`, () => {
  for (const level of TALK_LEVELS) {
    const { cards, state } = night(item, level);
    assert.ok(Object.keys(state.done).length >= street.ENCOUNTERS.length * 0.9, `${level}: the night still plays (${Object.keys(state.done).length} scenes)`);
    let objectQuestions = 0;
    cards.forEach((card, i) => {
      assert.equal(card.talk.length, 5, `${card.id}/${level}: five questions`);
      assert.equal(new Set(card.talk.map(normalize)).size, 5, `${card.id}/${level}: five different questions`);
      assert.ok(card.talk.every(q => !WEAPON_WORDS.test(q)), `${card.id}/${level}: no weapon in the conversation`);
      assert.ok(card.talk.filter(q => RISK_WORDS.test(q)).length <= 1, `${card.id}/${level}: not a safety course`);
      const fromObject = item ? card.talk.filter(q => OBJECT_TALK[item][level].includes(q)).length : 0;
      assert.ok(fromObject <= 1, `${card.id}/${level}: the object brings one question at most`);
      objectQuestions += fromObject;
      const before = cards[i - 1];
      if (before) assert.ok(card.talk.every(q => !before.talk.includes(q)), `${card.id}/${level}: no question repeated from ${before.id}`);
    });
    if (item) {
      const touched = cards.filter(card => card.object).length;
      assert.ok(touched >= street.ENCOUNTERS.filter(e => e.kind === 'escena').length * 0.9, `${item}/${level}: the object still changes most scenes (${touched})`);
      assert.ok(objectQuestions <= cards.length * 5 / 5, `${item}/${level}: ${objectQuestions} object questions in ${cards.length * 5}`);
      assert.ok(objectQuestions / (cards.length * 5) <= 0.2, `${item}/${level}: the object asks a fifth of the questions at most`);
    }
  }
});

test('A0: the twenty short scenes close with five bilingual questions, the object stays out', () => {
  for (const item of ['pistola', 'corazon']) {
    const { cards } = night(item, 'A0');
    assert.equal(cards.length, street.A0_IDS.length);
    for (const card of cards) {
      assert.equal(card.talk.length, 5, card.id);
      assert.ok(card.talk.every(bilingual.isBilingual), `${card.id}: bilingual`);
      assert.ok(!card.object, `${card.id}: no object at A0`);
    }
  }
});

test('the places: their personal question first, then four more, at every level', () => {
  for (const level of engine.LEVELS) {
    const ids = new Set();
    for (const location of engine.contentFor(level).LOCATIONS) for (const activity of location.activities) {
      assert.equal(activity.talk.length, 5, `${activity.id}/${level}`);
      assert.equal(activity.talk[0], activity.close, `${activity.id}/${level}: the personal question opens`);
      if (level === 'A0') assert.ok(activity.talk.every(bilingual.isBilingual), `${activity.id}: bilingual`);
      let state = engine.openLocation(engine.startExploring(engine.initialState(level)), location.id, activity.id);
      const first = engine.currentView(state);
      state = engine.chooseOption(state, first.beat.options[0].id);
      assert.deepEqual(engine.currentView(state).beat.talk, activity.talk, `${activity.id}/${level}: the talk beat carries the five`);
      for (const q of activity.talk) ids.add(normalize(bilingual.esOf(q)));
    }
    assert.equal(ids.size, 200, `${level}: 40 interactions × 5 different questions`);
  }
});

test('the teacher sees the five, can pick one and go back: the card renders the shared component', async () => {
  const GeneralQuestions = await component('app/conversacion-general/GeneralQuestions.tsx');
  const html = renderToString(React.createElement(GeneralQuestions, { id: 'x', questions: STREET_TALK['viejo-herido'].B1 }));
  assert.equal((html.match(/<li/g) || []).length, 5);
  assert.match(html, /data-general-questions="5"/);
  assert.match(html, /aria-current="true"/);
  assert.match(html, /disabled=""[^>]*>← Anterior/);
  assert.match(html, /Siguiente pregunta →/);
  const StreetCard = await component('app/noche-abierta/StreetCard.tsx');
  let state = street.openEncounter(street.chooseItem(street.emptyStreet(), 'pistola'), 'viejo-herido');
  while (!state.open.end) state = street.chooseLine(state, street.choicesFor(street.encounterById('viejo-herido'), state.open.node, 'pistola')[0].key);
  const card = renderToString(React.createElement(StreetCard, { street: state, level: 'B1', teacher: true, onChoose() {}, onBack() {}, onRestart() {}, onClose() {} }));
  assert.match(card, /data-general-questions="5"/);
  for (const q of street.streetView(state, 'B1').talk) assert.ok(card.includes(q.replace(/"/g, '&quot;')) || card.includes(q), q);
});
