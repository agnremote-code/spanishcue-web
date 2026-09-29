import assert from 'node:assert/strict';
import test from 'node:test';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import { build } from 'esbuild';

const require = createRequire(import.meta.url);
const engine = await import('../app/noche-abierta/engine.mjs');
const scene = await import('../app/noche-abierta/scene.mjs');

async function catalog() {
  const built = await build({ stdin: { contents: "export {catalogLessons} from './app/conversation-families/catalog'; export {lessons} from './app/lesson-catalog'; export {isFreeLesson,lessonAtPath} from './app/access-policy';", resolveDir: process.cwd() }, bundle: true, format: 'esm', platform: 'node', write: false });
  return import('data:text/javascript;base64,' + Buffer.from(built.outputFiles[0].text).toString('base64'));
}

const linkStub = { name: 'next-link-stub', setup(b) {
  b.onResolve({ filter: /^next\/link$/ }, () => ({ path: 'next-link', namespace: 'stub' }));
  b.onLoad({ filter: /.*/, namespace: 'stub' }, () => ({ contents: "import {createElement} from 'react'; export default function Link({href, children, ...rest}) { return createElement('a', {href, ...rest}, children); }", loader: 'js', resolveDir: process.cwd() }));
} };
async function component(path) {
  const r = await build({ entryPoints: [path], bundle: true, write: false, format: 'cjs', platform: 'node', jsx: 'automatic', external: ['react', 'react-dom'], loader: { '.css': 'empty' }, plugins: [linkStub] });
  const loaded = { exports: {} };
  runInNewContext(`(function(require,module,exports){${r.outputFiles[0].text}\n})`, { console, URL, URLSearchParams, process })(require, loaded, loaded.exports);
  return loaded.exports.default;
}
const React = require('react');
const { renderToString } = require('react-dom/server');

// Plays a whole evening through the engine, as the interface does.
function play(ids) {
  let state = engine.startExploring(engine.initialState());
  const trail = [state];
  for (const id of ids) {
    state = engine.openLocation(state, id);
    const encounter = state.encounters[id];
    const variant = engine.locationById(id).variants[encounter.variant];
    state = engine.chooseReaction(state, id, variant.reactions[1].id);
    state = engine.nextStep(state, id);
    state = engine.leaveLocation(state, id);
    trail.push(state);
    if (state.phase === 'evento') { state = engine.resolveEvent(state); trail.push(state); }
  }
  return { state, trail };
}

function webpSize(bytes) {
  assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
  assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
  const chunk = bytes.toString('ascii', 12, 16);
  if (chunk === 'VP8 ') return { width: bytes.readUInt16LE(26) & 0x3fff, height: bytes.readUInt16LE(28) & 0x3fff };
  if (chunk === 'VP8X') return { width: 1 + bytes.readUIntLE(24, 3), height: 1 + bytes.readUIntLE(27, 3) };
  const bits = bytes.readUInt32LE(21);
  return { width: 1 + (bits & 0x3fff), height: 1 + ((bits >> 14) & 0x3fff) };
}

test('Noche abierta is registered once as a PRO B1 Modo Play conversation with its own new id', async () => {
  const policy = await catalog();
  const entries = policy.lessons.filter(item => item.path === '/noche-abierta');
  assert.equal(entries.length, 1);
  const lesson = policy.lessonAtPath('/noche-abierta', policy.lessons);
  assert.equal(lesson, entries[0]);
  assert.equal(lesson.id, engine.LESSON_ID);
  assert.equal(lesson.id, 223);
  assert.equal(policy.lessons.filter(item => item.id === lesson.id).length, 1);
  assert.equal(lesson.level, 'B1');
  assert.equal(lesson.category, 'Conversación');
  assert.equal(lesson.conversationMode, 'play');
  assert.equal(lesson.collection, 'Modo Play');
  assert.equal(lesson.duration, '≈ 45 min');
  assert.equal(policy.isFreeLesson(lesson.id), false);
  assert.ok(lesson.routeSequence > 0);
  assert.equal(policy.catalogLessons.filter(item => item.path === lesson.path).length, 1);
  assert.ok(existsSync('app/noche-abierta/page.tsx'));
});

test('the rejected Recadero stays gone: no id 222, no route, no folder', async () => {
  const policy = await catalog();
  assert.equal(policy.lessons.some(item => item.id === 222), false);
  assert.equal(policy.lessonAtPath('/el-recadero-de-puerto-neon', policy.lessons) ?? null, null);
  assert.equal(policy.lessons.some(item => /recadero|puerto ne[oó]n/i.test(`${item.title} ${item.path}`)), false);
  assert.equal(existsSync('app/el-recadero-de-puerto-neon'), false);
  assert.equal(existsSync('public/el-recadero-de-puerto-neon'), false);
});

test('the catalog thumbnail is a real 16:9 image from the lesson folder', async () => {
  const policy = await catalog();
  const lesson = policy.lessonAtPath('/noche-abierta', policy.lessons);
  assert.match(lesson.image, /^\/noche-abierta\/.+\.webp$/);
  const bytes = await readFile('public' + lesson.image);
  assert.ok(bytes.length > 10_000 && bytes.length < 400_000, `reasonable size: ${bytes.length}`);
  const { width, height } = webpSize(bytes);
  assert.ok(width >= 960, `width ${width}`);
  assert.ok(Math.abs(width / height - 16 / 9) < 0.01, `${width}x${height}`);
});

test('eight places, each a different kind of situation, with two or three valid variants', () => {
  const { LOCATIONS } = engine;
  assert.equal(LOCATIONS.length, 8);
  assert.equal(new Set(LOCATIONS.map(item => item.id)).size, 8);
  assert.equal(new Set(LOCATIONS.map(item => item.kind)).size, 8, 'every place uses its own mechanic');
  const variantIds = LOCATIONS.flatMap(item => item.variants.map(variant => variant.id));
  assert.equal(new Set(variantIds).size, variantIds.length, 'variant ids are unique across the city');
  assert.ok(variantIds.length >= 16);
  const followUps = [];
  for (const location of LOCATIONS) {
    assert.ok(location.variants.length >= 2 && location.variants.length <= 3, location.id);
    assert.ok(location.help.starters.length >= 3 && location.help.chunks.length >= 4 && location.help.chunks.length <= 6, `${location.id} help`);
    for (const variant of location.variants) {
      for (const field of ['title', 'situation', 'twist', 'role']) assert.ok(variant[field]?.trim(), `${variant.id}.${field}`);
      assert.equal(variant.reactions.length, 3, variant.id);
      assert.equal(new Set(variant.reactions.map(item => item.id)).size, 3, `${variant.id} reaction ids`);
      for (const reaction of variant.reactions) { assert.ok(reaction.label && reaction.followUp, `${variant.id}.${reaction.id}`); followUps.push(reaction.followUp); }
      assert.equal(variant.prompts.length, 2, variant.id);
      assert.equal(variant.followUps.length, 2, variant.id);
      const cue = variant.cue;
      const shape = { message: () => cue.from && cue.text, inspect: () => cue.items?.length >= 3 && cue.items.every(item => item.detail), recognize: () => cue.clues?.length >= 3,
        route: () => cue.routes?.length === 3, proposals: () => cue.people?.length >= 3, versions: () => cue.versions?.length >= 2,
        shelf: () => cue.items?.length === 3 && cue.items.every(item => item.pro && item.con), vote: () => cue.people?.length >= 3 && cue.people.every(item => item.reason) }[location.kind];
      assert.ok(shape?.(), `${variant.id} cue matches ${location.kind}`);
    }
  }
  assert.equal(new Set(followUps).size, followUps.length, 'each choice opens its own follow-up');
});

test('the city drawing has a hotspot, label and standing spot for every place, inside the frame', () => {
  for (const location of engine.LOCATIONS) {
    const place = scene.PLACES[location.id];
    assert.ok(place, location.id);
    const pieces = [...scene.BUILDINGS, ...scene.PROPS].filter(item => item.location === location.id);
    assert.ok(pieces.length >= 1, `${location.id} is drawn`);
    assert.ok(place.label.x > 60 && place.label.x < scene.VIEWBOX.width - 60 && place.label.y > 20 && place.label.y < scene.VIEWBOX.height - 20, `${location.id} label in frame`);
    const feet = scene.iso(place.spot.gx, place.spot.gy);
    assert.ok(feet.x > 0 && feet.x < scene.VIEWBOX.width && feet.y > 0 && feet.y < scene.VIEWBOX.height, `${location.id} spot in frame`);
  }
  const labels = Object.values(scene.PLACES).map(item => item.label);
  for (let a = 0; a < labels.length; a++) for (let b = a + 1; b < labels.length; b++) {
    assert.ok(Math.abs(labels[a].x - labels[b].x) > 150 || Math.abs(labels[a].y - labels[b].y) > 40, `labels ${a} and ${b} do not overlap`);
  }
  assert.ok(scene.BUILDINGS.filter(item => item.location).every(item => engine.locationById(item.location)));
});

test('the lesson plan adds up to 45 minutes in the agreed stages', () => {
  const minutes = Object.fromEntries(engine.ROUTE_PLAN.map(item => [item.id, item.minutes]));
  assert.equal(Object.values(minutes).reduce((a, b) => a + b, 0), 45);
  assert.ok(minutes.llegada >= 3 && minutes.llegada <= 5);
  assert.ok(minutes.exploracion >= 20 && minutes.exploracion <= 25);
  assert.ok(minutes.evento >= 8 && minutes.evento <= 10);
  assert.ok(minutes.cierre >= 8 && minutes.cierre <= 10);
  assert.equal(engine.ARRIVAL.warmup.length, 3);
  assert.equal(engine.FINAL.prompts.length, 5);
  assert.ok(engine.FINAL.hypothetical.startsWith('Si la noche empezara de nuevo'));
});

test('visits are tracked once, in order, and only count after a real exchange', () => {
  let state = engine.startExploring(engine.initialState());
  assert.equal(state.phase, 'ciudad');
  state = engine.openLocation(state, 'plaza');
  assert.equal(state.phase, 'encuentro');
  assert.equal(state.position, 'plaza');
  assert.deepEqual(state.visitOrder, ['plaza']);
  assert.equal(engine.nextStep(state, 'plaza'), state, 'no follow-up before a choice');
  assert.equal(engine.chooseReaction(state, 'plaza', 'not-a-choice'), state);
  state = engine.leaveLocation(state, 'plaza');
  assert.equal(state.phase, 'ciudad');
  assert.equal(state.encounters.plaza.done, false, 'leaving early keeps the visit but not the encounter');
  assert.deepEqual(engine.completedIds(state), []);
  state = engine.openLocation(state, 'plaza');
  assert.deepEqual(state.visitOrder, ['plaza'], 'revisiting does not duplicate');
  state = engine.chooseReaction(state, 'plaza', 'falta-info');
  assert.equal(state.encounters.plaza.step, 1);
  const last = engine.stepCount(engine.locationById('plaza'), 0) - 1;
  for (let i = 0; i < 10; i++) state = engine.nextStep(state, 'plaza');
  assert.equal(state.encounters.plaza.step, last, 'steps stay within the encounter');
  state = engine.leaveLocation(state, 'plaza');
  assert.deepEqual(engine.completedIds(state), ['plaza']);
  assert.equal(engine.nightSummary(state)[0].choice, 'Me falta información');
});

test('the teacher can switch the situation and it restarts cleanly', () => {
  let state = engine.openLocation(engine.startExploring(engine.initialState()), 'departamento');
  state = engine.inspectItem(state, 'departamento', 'zapatos');
  state = engine.inspectItem(state, 'departamento', 'zapatos');
  assert.deepEqual(state.encounters.departamento.inspected, ['zapatos']);
  state = engine.chooseReaction(state, 'departamento', 'ayudar');
  state = engine.setVariant(state, 'departamento', 1);
  assert.deepEqual(state.encounters.departamento, { variant: 1, reaction: null, step: 0, inspected: [], done: false });
  state = engine.setVariant(state, 'departamento', 3);
  assert.equal(state.encounters.departamento.variant, 0, 'variants wrap around');
});

test('the city changes once, after the fourth encounter, and connects to where the learner went', () => {
  const { state: afterThree } = play(['cafe', 'plaza', 'terraza']);
  assert.equal(afterThree.event, null);
  assert.equal(engine.eventReady(afterThree), false);
  assert.equal(engine.finalAvailable(afterThree), false);
  assert.equal(engine.openFinal(afterThree), afterThree, 'no recap before the city changes');

  let state = engine.openLocation(afterThree, 'taxi');
  state = engine.chooseReaction(state, 'taxi', 'volver');
  state = engine.leaveLocation(state, 'taxi');
  assert.equal(state.phase, 'evento');
  assert.equal(state.event.id, 'lluvia', 'rain touches the plaza, the rooftop and the taxi the learner used');
  assert.equal(engine.triggerEvent(state, 'celular'), state, 'never twice');
  state = engine.resolveEvent(state);
  assert.equal(state.phase, 'ciudad');
  assert.equal(engine.finalAvailable(state), true);

  const quiet = play(['cafe', 'esquina', 'restaurante', 'tienda']).trail.find(item => item.event);
  assert.equal(quiet.event.id, 'celular', 'with no overlap the lost phone asks for the whole route');

  const early = engine.triggerEvent(engine.openLocation(engine.startExploring(engine.initialState()), 'cafe'), 'transporte');
  assert.equal(early.event.id, 'transporte', 'the teacher may bring the change forward');
  assert.equal(engine.triggerEvent(early, 'nope').event.id, 'transporte');
  for (const event of engine.CITY_EVENTS) {
    assert.equal(event.prompts.length, 3);
    assert.ok(event.affects.every(id => engine.locationById(id)), event.id);
  }
});

test('the final stage recaps the actual night and the teacher notes stay qualitative', () => {
  let { state } = play(['departamento', 'taxi', 'tienda', 'terraza', 'cafe']);
  state = engine.openFinal(state);
  assert.equal(state.phase, 'cierre');
  assert.equal(engine.openLocation(state, 'plaza'), state, 'the city is closed during the recap');
  const summary = engine.nightSummary(state);
  assert.deepEqual(summary.map(item => item.id), ['departamento', 'taxi', 'tienda', 'terraza', 'cafe']);
  assert.ok(summary.every(item => item.done && item.choice && item.situation));
  state = engine.toggleCriterion(state, 'razones');
  state = engine.toggleCriterion(state, 'inventado');
  assert.deepEqual(state.final.criteria, { razones: true });
  assert.ok(Object.values(state.final.criteria).every(value => typeof value === 'boolean'));
});

test('state survives a reload and a reset starts the night from zero', () => {
  const { state } = play(['cafe', 'plaza']);
  const restored = JSON.parse(JSON.stringify(state));
  assert.ok(engine.isValidState(restored));
  assert.deepEqual(restored, state);
  assert.equal(engine.isValidState({ ...restored, visitOrder: ['recadero'] }), false);
  assert.equal(engine.isValidState(null), false);
  assert.equal(engine.isValidState({ phase: 'ciudad' }), false);
  assert.deepEqual(engine.initialState(), { phase: 'llegada', position: null, visitOrder: [], encounters: {}, event: null, final: { criteria: {} } });
  assert.notEqual(engine.initialState(), engine.initialState(), 'each reset gets a fresh object');
});

test('no game economy: nothing in the state or the engine counts points, lives, ranks or time left', () => {
  const bannedWords = new Set(['score', 'scores', 'point', 'points', 'xp', 'coin', 'coins', 'star', 'stars', 'rank', 'ranking', 'respect', 'life', 'lives', 'health', 'timer', 'countdown', 'leaderboard', 'achievement', 'achievements', 'mastered', 'mastery', 'streak', 'level', 'levels']);
  const words = name => name.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().split(/[^a-z]+/).filter(Boolean);
  const banned = { test: name => words(name).some(word => bannedWords.has(word)) };
  const { trail } = play(['cafe', 'departamento', 'esquina', 'taxi', 'plaza', 'tienda', 'restaurante', 'terraza']);
  const keys = new Set();
  const walk = value => { if (value && typeof value === 'object') for (const [key, inner] of Object.entries(value)) { keys.add(key); walk(inner); } };
  for (const state of trail) walk(state);
  for (const key of keys) assert.equal(banned.test(key), false, `state key ${key}`);
  for (const name of Object.keys(engine)) assert.equal(banned.test(name), false, `export ${name}`);
  assert.equal(banned.test('playerScore'), true, 'the check itself catches a score');
  assert.match(engine.nightClock(engine.initialState()), /^20:40$/, 'the clock only tells the time of night');
});

test('the rendered lesson keeps one prompt at a time, help closed and teacher tools hidden', async () => {
  const NocheAbierta = await component('app/noche-abierta/NocheAbierta.tsx');
  const render = initial => renderToString(React.createElement(NocheAbierta, initial ? { initial } : {}));

  const arrival = render();
  assert.equal((arrival.match(/<h1/g) || []).length, 1);
  assert.match(arrival, /data-phase="llegada"/);
  assert.doesNotMatch(arrival, /role="button"/, 'the city waits until the learner starts');

  const city = render(engine.startExploring(engine.initialState()));
  assert.equal((city.match(/role="button" tabindex="0"/g) || []).length, 8, 'eight focusable places');
  assert.equal((city.match(/aria-label="Ir a /g) || []).length, 8);

  let state = engine.openLocation(engine.startExploring(engine.initialState()), 'restaurante');
  const encounter = render(state);
  assert.match(encounter, /aria-labelledby="na-encounter-title"/);
  assert.equal((encounter.match(/<legend>/g) || []).length, 1);
  assert.match(encounter, /aria-expanded="false">Necesito ayuda/);
  assert.doesNotMatch(encounter, /Herramientas del profe/);
  assert.doesNotMatch(encounter, /tabindex="0"/, 'the city pauses while a place is open');
  assert.equal((encounter.match(/class="na-prompt"/g) || []).length, 0, 'the first screen is the situation and the choice');
  state = engine.chooseReaction(state, 'restaurante', 'rapido');
  assert.equal((render(state).match(/class="na-prompt"/g) || []).length, 1, 'then one prompt at a time');

  const event = render(play(['cafe', 'plaza', 'taxi', 'terraza']).trail.find(item => item.phase === 'evento'));
  assert.match(event, /aria-labelledby="na-event-title"/);
  const trail = event.match(/<ol class="na-trail"[\s\S]*?<\/ol>/)?.[0] ?? '';
  assert.equal((trail.match(/<li[\s>]/g) || []).length, 4, 'the change lists the four places visited');

  const final = render(engine.openFinal(play(['cafe', 'plaza', 'taxi', 'terraza']).state));
  assert.match(final, /aria-labelledby="na-final-title"/);
  assert.equal((final.match(/class="na-prompt"/g) || []).length, 1);

  for (const html of [arrival, city, encounter, event, final]) {
    assert.doesNotMatch(html, /undefined|NaN/);
    const buttons = html.match(/<button[^>]*>/g) || [];
    assert.ok(buttons.every(tag => tag.includes('type="button"')), 'no accidental submits');
  }
});
