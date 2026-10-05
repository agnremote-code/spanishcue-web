import assert from 'node:assert/strict';
import test from 'node:test';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import { build } from 'esbuild';

const require = createRequire(import.meta.url);
const engine = await import('../app/noche-abierta/engine.mjs');
const scene = await import('../app/noche-abierta/scene.mjs');
const world = await import('../app/noche-abierta/world3d.mjs');

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

// Plays a whole evening through the engine, as the interface does: in each
// place one activity is played past its first beat, then the learner leaves.
function playOne(state) {
  const view = engine.currentView(state);
  if (!view.activity) state = engine.openActivity(state, view.location.activities[0].id);
  const current = engine.currentView(state);
  if (current.beat.kind === 'choose') return engine.chooseOption(state, current.beat.options[1].id);
  if (current.beat.kind === 'inspect') for (const item of current.beat.media.items) state = engine.inspectItem(state, item.id);
  return engine.advanceBeat(state);
}
function play(ids) {
  let state = engine.startExploring(engine.initialState());
  const trail = [state];
  for (const id of ids) {
    state = playOne(engine.openLocation(state, id));
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

// ------------------------------------------------------------ content

const activities = await import('../app/noche-abierta/activities.mjs');
const allActivities = () => engine.LOCATIONS.flatMap(location => location.activities.map(activity => ({ location, activity })));
const learnerText = () => allActivities().flatMap(({ activity }) => [
  activity.situation, activity.prompt, activity.close, activity.says, activity.ask, activity.ask2, activity.detail, activity.plaque,
  activity.task, activity.task2, activity.pushback, activity.reveal, activity.wrong, activity.reply, activity.change,
  ...(activity.followUps ?? []), ...(activity.options ?? []).flatMap(option => [option.label, option.result, option.ask]),
  ...(activity.conditions ?? []).flatMap(item => [item.text, item.ask]),
]).filter(Boolean);

test('ten places, each its own game, with enough to play in every one', () => {
  const { LOCATIONS, MECHANICS } = engine;
  assert.equal(LOCATIONS.length, 10);
  assert.equal(new Set(LOCATIONS.map(item => item.id)).size, 10);
  assert.equal(new Set(LOCATIONS.map(item => item.type)).size, 10, 'every place uses its own mechanic');
  for (const location of LOCATIONS) {
    assert.ok(activities.ACTIVITY_TYPES[location.type], `${location.id} has a known type`);
    assert.ok(MECHANICS[location.type]?.mechanic && MECHANICS[location.type]?.more, `${location.id} mechanic label`);
    assert.ok(location.name && location.short && location.focus, location.id);
    assert.ok(location.help.starters.length >= 3 && location.help.chunks.length >= 4, `${location.id} help`);
    assert.ok(location.activities.length >= (location.hub ? 5 : 2), `${location.id} has enough to play`);
    assert.equal(new Set(location.activities.map(item => item.id)).size, location.activities.length, `${location.id} activity ids`);
    if (location.hub) assert.ok(location.hubPrompt, `${location.id} hub prompt`);
    for (const activity of location.activities) {
      assert.ok(activity.title && activity.role, `${activity.id} title and teacher role`);
      const beats = activities.beatsOf(location.type, activity);
      assert.ok(beats.length >= 2, `${activity.id} has at least two beats`);
      for (const beat of beats) {
        if (beat.kind !== 'result') assert.ok(beat.prompt?.trim(), `${activity.id}: every beat asks something`);
        assert.doesNotMatch(JSON.stringify(beat), /undefined/, `${activity.id} beat is complete`);
      }
    }
  }
  assert.deepEqual(LOCATIONS.filter(item => item.hub).map(item => item.id).sort(), ['bar', 'museo', 'plaza']);
  assert.ok(engine.locationById('auto').grammar.rows.length >= 3, 'the car has optional si-clause help');
  assert.ok(engine.locationById('museo').grammar.rows.length >= 3, 'the museum has optional past-tense help');
});

test('all people and museum objects retain their identities and offer three contextual choices', () => {
  for (const { activity } of allActivities()) {
    assert.equal(activity.options.length, 3);
    assert.ok(activity.situation && activity.prompt && activity.close);
    assert.equal(activity.ask2, undefined, 'no continuation question');
    assert.equal(activity.followUps, undefined, 'no extra speaking steps');
  }
  assert.equal(engine.locationById('plaza').activities.length, 7);
  assert.equal(engine.locationById('museo').activities.length, 9);
  for (const activity of engine.locationById('museo').activities) assert.ok(activity.object && activity.year);
});

test('the texts read like one evening: no repeated questions, neutral tú, no stock phrasing', () => {
  const texts = learnerText();
  const personal = allActivities().map(({activity}) => activity.close);
  assert.equal(new Set(personal).size, personal.length, 'each interaction has its own personal question');
  assert.ok(texts.filter(text => /¿Qué harías\?/.test(text)).length <= 1, '«¿Qué harías?» is not the default question');
  for (const text of texts) {
    assert.doesNotMatch(text, /\b(vos|sos|tenés|podés|querés|sabés|pensás|creés|preferís|harías vos)\b/i, `neutral tú, no unintended voseo: ${text}`);
    assert.doesNotMatch(text, /\b(?:como modelo|en conclusión|cabe destacar|sumérgete|¡Bienvenido)\b/i, text);
    assert.doesNotMatch(text, /\s{2,}|\s[,.;:]/, `clean spacing: ${text}`);
  }
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
  assert.deepEqual(Object.keys(scene.PLACES).sort(), engine.LOCATIONS.map(item => item.id).sort(), 'no leftover places on the map');
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

// ------------------------------------------------------------ engine

test('a decision moves straight to the independent personal conversation', () => {
  let state = engine.openLocation(engine.startExploring(engine.initialState()), 'restaurante');
  let view = engine.currentView(state);
  assert.equal(view.activity.id, 'resto-cuenta', 'a sequential place opens on its first situation');
  assert.equal(view.beat.kind, 'choose');
  assert.equal(engine.advanceBeat(state), state, 'no skipping the decision');
  assert.equal(engine.chooseOption(state, 'nope'), state);
  state = engine.chooseOption(state, 'otra');
  view = engine.currentView(state);
  assert.equal(view.beat.kind, 'talk');
  assert.equal(view.beat.context, undefined);
  assert.equal(view.beat.prompt, view.activity.close);
  assert.equal(engine.chooseOption(state, 'iguales'), state, 'the choice is final once made');
  state = engine.advanceBeat(state);
  assert.equal(engine.currentView(state).last, true);
  assert.equal(state.encounters.restaurante.acts['resto-cuenta'].done, true);
  state = engine.otherActivity(state);
  assert.equal(engine.currentView(state).activity.id, 'resto-plato', 'another situation at the same table');
  state = engine.leaveLocation(state);
  assert.deepEqual(engine.completedIds(state), ['restaurante']);
  assert.deepEqual(engine.nightSummary(state)[0].choices, ['Hoy pago yo la cuenta completa.']);
});

test('places with people or objects open on their list; closing an activity goes back to it', () => {
  let state = engine.openLocation(engine.startExploring(engine.initialState()), 'plaza');
  assert.equal(engine.currentView(state).activity, null, 'the plaza opens on its people');
  state = engine.openActivity(state, 'kenji');
  let view = engine.currentView(state);
  assert.equal(view.beat.kind, 'choose');
  assert.equal(view.total, 2);
  state = engine.chooseOption(state, view.beat.options[0].id);
  assert.equal(engine.currentView(state).last, true);
  state = engine.closeActivity(state);
  assert.equal(state.phase, 'encuentro');
  assert.equal(state.activity, null);
  assert.equal(state.encounters.plaza.acts.kenji.done, true);
  state = engine.openActivity(state, 'kenji');
  assert.equal(engine.currentView(state).index, 1, 'reopening keeps where the talk was');
  state = engine.restartActivity(state);
  assert.equal(engine.currentView(state).index, 0, 'the teacher can restart it');
  assert.equal(engine.openActivity(state, 'nadie'), state);
  const direct = engine.openLocation(engine.startExploring(engine.initialState()), 'museo', 'televisor');
  assert.equal(direct.activity, 'televisor', 'walking up to a piece opens it directly');
  assert.equal(engine.currentView(direct).activity.year, '1969');
  state = engine.leaveLocation(state);
  assert.deepEqual(engine.completedIds(state), ['plaza']);
});

test('apartment and car cannot skip the choice or add fictional complications', () => {
  for (const id of ['departamento', 'auto']) {
    let state = engine.openLocation(engine.startExploring(engine.initialState()), id);
    const view = engine.currentView(state);
    assert.equal(engine.advanceBeat(state), state);
    assert.equal(engine.inspectItem(state, 'invented'), state);
    state = engine.chooseOption(state, view.beat.options[0].id);
    assert.equal(engine.currentView(state).beat.kind, 'talk');
    assert.equal(engine.currentView(state).total, 2);
    assert.equal(engine.currentView(state).last, true);
  }
});

test('the city changes once, after the fourth place, and connects to where the learner went', () => {
  const { state: afterThree } = play(['cafe', 'plaza', 'terraza']);
  assert.equal(afterThree.event, null);
  assert.equal(engine.eventReady(afterThree), false);
  assert.equal(engine.finalAvailable(afterThree), false);
  assert.equal(engine.openFinal(afterThree), afterThree, 'no recap before the city changes');

  let state = engine.openLocation(afterThree, 'taxi');
  state = engine.leaveLocation(state, 'taxi');
  assert.equal(state.event, null, 'leaving without playing does not count');
  state = playOne(engine.openLocation(state, 'taxi'));
  state = engine.leaveLocation(state, 'taxi');
  assert.equal(state.phase, 'evento');
  assert.equal(state.event.id, 'lluvia', 'rain touches the plaza, the rooftop and the taxi the learner used');
  assert.equal(engine.triggerEvent(state, 'celular'), state, 'never twice');
  state = engine.resolveEvent(state);
  assert.equal(state.phase, 'ciudad');
  assert.equal(engine.finalAvailable(state), true);

  const quiet = play(['cafe', 'departamento', 'restaurante', 'tienda']).trail.find(item => item.event);
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
  let { state } = play(['departamento', 'taxi', 'tienda', 'terraza', 'museo']);
  state = engine.openFinal(state);
  assert.equal(state.phase, 'cierre');
  assert.equal(engine.openLocation(state, 'plaza'), state, 'the city is closed during the recap');
  const summary = engine.nightSummary(state);
  assert.deepEqual(summary.map(item => item.id), ['departamento', 'taxi', 'terraza', 'tienda', 'museo'], 'the accepted taxi destination is visited before the next manual stop');
  assert.ok(summary.every(item => item.done && item.situations.length === 1));
  assert.equal(summary.find(item => item.id === 'taxi').choices.length, 1, 'the taxi decision is remembered');
  state = engine.toggleCriterion(state, 'razones');
  state = engine.toggleCriterion(state, 'inventado');
  assert.deepEqual(state.final.criteria, { razones: true });
});

test('state survives a reload and a reset starts the night from zero', () => {
  const { state } = play(['cafe', 'plaza']);
  const restored = JSON.parse(JSON.stringify(state));
  assert.ok(engine.isValidState(restored));
  assert.deepEqual(restored, state);
  assert.equal(engine.isValidState({ ...restored, visitOrder: ['recadero'] }), false);
  assert.equal(engine.isValidState({ ...restored, encounters: { ...restored.encounters, cafe: { done: true, acts: { inventada: {} } } } }), false);
  assert.equal(engine.isValidState(null), false);
  assert.equal(engine.isValidState({ phase: 'ciudad' }), false);
  assert.deepEqual(engine.initialState(), { level: 'B1', phase: 'llegada', position: null, activity: null, visitOrder: [], encounters: {}, event: null, final: { criteria: {} } });
  assert.notEqual(engine.initialState(), engine.initialState(), 'each reset gets a fresh object');
});

test('no game economy: nothing in the state or the code counts points, lives, ranks or time left', async () => {
  const bannedWords = new Set(['score', 'scores', 'point', 'points', 'xp', 'coin', 'coins', 'star', 'stars', 'rank', 'ranking', 'respect', 'life', 'lives', 'health', 'timer', 'countdown', 'leaderboard', 'achievement', 'achievements', 'mastered', 'mastery', 'streak']);
  // CEFR levels (A1–C2) are a language setting, not a game level, so `level` is allowed.
  const words = name => name.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().split(/[^a-z]+/).filter(Boolean);
  const banned = { test: name => words(name).some(word => bannedWords.has(word)) };
  const { trail } = play(engine.LOCATIONS.map(item => item.id));
  const keys = new Set();
  const walk = value => { if (value && typeof value === 'object') for (const [key, inner] of Object.entries(value)) { keys.add(key); walk(inner); } };
  for (const state of trail) walk(state);
  for (const key of keys) assert.equal(banned.test(key), false, `state key ${key}`);
  for (const name of [...Object.keys(engine), ...Object.keys(activities)]) assert.equal(banned.test(name), false, `export ${name}`);
  for (const name of Object.keys(world)) assert.equal(banned.test(name), false, `3D export ${name}`);
  for (const file of ['World3D.tsx', 'build3d.ts', 'people3d.ts', 'hero3d.ts', 'NocheAbierta.tsx', 'activities.mjs', 'engine.mjs']) {
    // Our own names only: comments and three.js class names are not state.
    const source = (await readFile(`app/noche-abierta/${file}`, 'utf8')).replace(/\/\/.*$/gm, '').replace(/THREE\.\w+/g, '').replace(/\.(?:setFromPoints|getPoints)\b/g, '').replace(/'[^'\n]*'|"[^"\n]*"|`[^`\n]*`/g, '');
    const identifiers = new Set(source.match(/\b[A-Za-z_]\w*\b/g));
    for (const name of identifiers) assert.equal(banned.test(name), false, `${file}: ${name}`);
  }
  assert.equal(banned.test('playerScore'), true, 'the check itself catches a score');
  assert.match(engine.nightClock(engine.initialState()), /^20:40$/, 'the clock only tells the time of night');
});

// ------------------------------------------------------------ rendered cards

test('the rendered lesson: one question at a time, compact options, help folded, teacher tools hidden', async () => {
  const NocheAbierta = await component('app/noche-abierta/NocheAbierta.tsx');
  const render = initial => renderToString(React.createElement(NocheAbierta, initial ? { initial } : {}));

  const arrival = render();
  assert.equal((arrival.match(/<h1/g) || []).length, 1);
  assert.match(arrival, /data-phase="llegada"/);
  assert.doesNotMatch(arrival, /role="button"/, 'the city waits until the learner starts');

  const city = render(engine.startExploring(engine.initialState()));
  assert.equal((city.match(/role="button" tabindex="0"/g) || []).length, 10, 'ten focusable places on the map');
  assert.equal((city.match(/aria-label="Ir a /g) || []).length, 10);
  assert.match(city, /data-view="map"/, 'the server renders the map; the 3D street loads in the browser');
  assert.match(city, /aria-label="0 de 10 lugares explorados"/);
  assert.doesNotMatch(city, /<canvas/);

  let state = engine.openLocation(engine.startExploring(engine.initialState()), 'restaurante');
  const decision = render(state);
  assert.match(decision, /class="na-card"/);
  assert.match(decision, /aria-labelledby="na-card-title"/);
  assert.equal((decision.match(/<kbd>[ABC]<\/kbd>/g) || []).length, 3, 'three lettered options');
  assert.equal((decision.match(/class="na-ask"/g) || []).length, 1, 'one question');
  assert.match(decision, /aria-expanded="false"[^>]*>Necesito ayuda/);
  assert.doesNotMatch(decision, /na-help-body/, 'help is folded away');
  assert.doesNotMatch(decision, /na-teacher/);
  // The level picker keeps its own roving tab stop; nothing in the city does.
  assert.doesNotMatch(decision.replace(/<div class="na-levels"[\s\S]*?<\/div>/, ''), /tabindex="0"/, 'the city pauses while a place is open');
  state = engine.chooseOption(state, 'cada-uno');
  const result = render(state);
  assert.doesNotMatch(result, /class="na-outcome"/);
  assert.match(result, /Ahora habla de ti/);
  assert.equal((result.match(/class="na-ask"/g) || []).length, 1);
  assert.match(result, /aria-label="Pregunta siguiente"/);

  const hub = render(engine.openLocation(engine.startExploring(engine.initialState()), 'plaza'));
  assert.equal((hub.match(/<li><button type="button"/g) || []).length, 7, 'seven people to talk to');
  const piece = render(engine.openLocation(engine.startExploring(engine.initialState()), 'museo', 'carta'));
  assert.match(piece, /data-beat="choose"/);
  assert.match(piece, /Ayuda y gramática/, 'the museum offers grammar help');

  const event = render(play(['cafe', 'plaza', 'taxi', 'terraza']).trail.find(item => item.phase === 'evento'));
  assert.match(event, /aria-labelledby="na-event-title"/);
  const trail = event.match(/<ol class="na-trail"[\s\S]*?<\/ol>/)?.[0] ?? '';
  assert.equal((trail.match(/<li[\s>]/g) || []).length, 4, 'the change lists the four places visited');

  const final = render(engine.openFinal(play(['cafe', 'plaza', 'taxi', 'terraza']).state));
  assert.match(final, /aria-labelledby="na-final-title"/);
  assert.equal((final.match(/class="na-ask"/g) || []).length, 1);

  for (const html of [arrival, city, decision, result, hub, piece, event, final]) {
    assert.doesNotMatch(html, /undefined|NaN|\[object Object\]/);
    const buttons = html.match(/<button[^>]*>/g) || [];
    assert.ok(buttons.every(tag => tag.includes('type="button"')), 'no accidental submits');
  }
});

test('every card can be closed: an X, a small way back and Esc', () => {
  const source = readFileSync('app/noche-abierta/NocheAbierta.tsx', 'utf8');
  assert.match(source, /className="na-close"/);
  assert.match(source, /event\.key === 'Escape'/);
  assert.match(source, /Volver a la calle/);
  const css = readFileSync('app/noche-abierta/noche-abierta.css', 'utf8');
  const card = css.match(/\.na-card \{[^}]*\}/)?.[0] ?? '';
  assert.match(card, /max-height/, 'cards grow with their content up to a limit');
  assert.doesNotMatch(card, /(?:^|[\s;{])height:/, 'no fixed height');
  assert.match(css, /prefers-reduced-motion[\s\S]*\.na-beat/, 'transitions respect reduced motion');
});

// ------------------------------------------------------------ 3D street

test('3D world: the learner starts on a walkable sidewalk inside the district', () => {
  const { SPAWN, WORLD_BOUNDS, isWalkable, insideBuilding } = world;
  assert.ok(SPAWN.x > WORLD_BOUNDS.minX && SPAWN.x < WORLD_BOUNDS.maxX && SPAWN.z > WORLD_BOUNDS.minZ && SPAWN.z < WORLD_BOUNDS.maxZ);
  assert.equal(insideBuilding(SPAWN.x, SPAWN.z, 0.5), false);
  assert.ok(isWalkable(SPAWN.x, SPAWN.z));
});

test('3D world: every place can be reached, and every person in the plaza has their own spot', () => {
  const { TARGETS, isWalkable, nearestTarget, exitSpot, NPCS } = world;
  assert.equal(new Set(TARGETS.map(item => item.id)).size, TARGETS.length, 'unique target ids');
  for (const location of engine.LOCATIONS) assert.ok(TARGETS.some(item => item.location === location.id), `${location.id} has a target`);
  for (const target of TARGETS) {
    assert.ok(engine.locationById(target.location), target.id);
    if (target.activity) assert.ok(engine.activityById(engine.locationById(target.location), target.activity), `${target.id} activity`);
    assert.ok(target.radius >= 1.2 && target.radius <= 3, `${target.id} radius ${target.radius}`);
    assert.ok(target.key === 'E' || target.key === 'F', target.id);
    assert.match(target.verb, /^[A-ZÁÉÍÓÚÑ ]+$/, target.id);
    assert.ok(isWalkable(target.x, target.z), `${target.id} can be reached`);
    assert.equal(nearestTarget({ x: target.x, z: target.z })?.id, target.id, `${target.id} is the prompt at its own spot`);
    const out = exitSpot(target);
    assert.ok(isWalkable(out.x, out.z), `${target.id} exit spot is walkable`);
  }
  const plaza = TARGETS.filter(item => item.location === 'plaza').map(item => item.activity).sort();
  assert.deepEqual(plaza, engine.locationById('plaza').activities.map(item => item.id).sort());
  for (const target of TARGETS.filter(t => t.npc)) assert.ok(NPCS.some(n => n.id === target.npc), target.id);
  assert.equal(nearestTarget({ x: 0, z: 0 }), null, 'no prompt in the middle of the crossing');
  assert.equal(TARGETS.filter(item => item.key === 'F').map(item => item.id).join(), 'taxi', 'F is only for getting into the taxi');
  assert.equal(TARGETS.find(t => t.location === 'auto').verb, 'AYUDAR');
  assert.equal(TARGETS.find(t => t.location === 'restaurante').verb, 'SENTARME');
});

test('3D world: the museum and the bar are rooms you walk around, one spot per activity', () => {
  const { ROOMS, roomLayout, WALKABLE_STAGES, isWalkable, nearestTarget, TARGETS, STAGES, WORLD_BOUNDS } = world;
  assert.deepEqual([...WALKABLE_STAGES].sort(), ['bar', 'museo']);
  for (const stage of Object.keys(ROOMS)) {
    const room = roomLayout(stage);
    const location = engine.locationById(room.location);
    assert.equal(TARGETS.find(t => t.location === room.location).stage, stage, `${stage} is entered from the street`);
    assert.ok(STAGES[stage].walk);
    assert.ok(room.bounds.minX > WORLD_BOUNDS.maxX + 50, `${stage} sits away from the street`);
    assert.deepEqual(room.hotspots.map(item => item.activity).sort(), location.activities.map(item => item.id).sort(), `${stage}: a spot for every activity`);
    const spots = [...room.hotspots, room.exit];
    for (const spot of spots) {
      assert.ok(isWalkable(spot.x, spot.z, room.solids, room.bounds), `${spot.id} can be reached`);
      assert.equal(nearestTarget({ x: spot.x, z: spot.z }, spots)?.id, spot.id, `${spot.id} prompts at its own spot`);
    }
    assert.ok(isWalkable(room.spawn.x, room.spawn.z, room.solids, room.bounds));
    assert.ok(Math.hypot(room.spawn.x - room.exit.x, room.spawn.z - room.exit.z) < 4, 'the door is just behind you');
    assert.equal(nearestTarget(room.spawn, room.hotspots), null, 'nothing opens by itself when you walk in');
  }
});

test('3D world: runs by default, accelerates, turns smoothly toward the input and stops at walls', () => {
  const { stepPlayer, colliders, WALK_SPEED, RUN_SPEED, SPRINT_SPEED, BUILDINGS, PLAYER_RADIUS } = world;
  assert.ok(RUN_SPEED >= 6 && SPRINT_SPEED > RUN_SPEED && WALK_SPEED < RUN_SPEED / 2, 'faster than the first version (5.2 m/s run)');
  const boxes = colliders();
  const run = (player, input, seconds) => { for (let t = 0; t < seconds; t += 1 / 60) player = stepPlayer(player, input, 1 / 60, boxes); return player; };
  const start = { x: 5.6, z: 20, heading: Math.PI, speed: 0 };
  const first = stepPlayer(start, { y: 1, yaw: Math.PI }, 1 / 60, boxes);
  assert.ok(first.speed > 0 && first.speed < RUN_SPEED, 'speeds up instead of jumping to full speed');
  const going = run(start, { y: 1, yaw: Math.PI }, 0.5);
  assert.ok(Math.abs(going.speed - RUN_SPEED) < 1e-6, `running by default after half a second (${going.speed})`);
  assert.ok(going.z < start.z - 2, 'W runs away from the camera (north here)');
  assert.ok(run(start, { y: 1, yaw: Math.PI, sprint: true }, 0.6).speed > RUN_SPEED, 'Shift goes faster');
  assert.ok(run(start, { y: 1, yaw: Math.PI, walk: true }, 0.6).speed <= WALK_SPEED + 1e-9, 'Alt walks');
  const right = run(start, { x: 1, yaw: Math.PI }, 0.6);
  assert.ok(right.x > start.x + 1, 'D runs to the right of the screen (east when looking north)');
  const turning = stepPlayer(start, { x: 1, yaw: Math.PI }, 1 / 60, boxes);
  assert.ok(turning.heading !== start.heading && Math.abs(world.angleBetween(turning.heading, Math.PI / 2)) > 0.5, 'turns smoothly, not instantly');
  const stopped = run(going, {}, 0.5);
  assert.equal(stopped.speed, 0, 'slows down to a stop');
  assert.ok(Math.abs(stopped.z - going.z) < 2, 'stops quickly');
  assert.equal(stepPlayer(start, { y: 1 }, 5, boxes).z, stepPlayer(start, { y: 1 }, 0.1, boxes).z, 'long frames are clamped');
  const cafe = BUILDINGS.find(b => b.id === 'cafe');
  let player = run({ x: -11.5, z: -6, heading: Math.PI, speed: 0 }, { y: 1, yaw: Math.PI }, 3);
  assert.ok(player.z >= cafe.z1 + PLAYER_RADIUS - 1e-9, `stopped at the café wall (${player.z})`);
  assert.ok(player.speed < 0.5, 'the legs stop too: no running in place against a wall');
  player = run({ x: -11.5, z: -7.6, heading: Math.PI, speed: 0 }, { x: 0.7, y: 1, yaw: Math.PI }, 0.4);
  assert.ok(player.x > -11.4, 'slides along the wall instead of sticking');
  const car = run({ x: -21, z: 5, heading: Math.PI, speed: 0 }, { y: 1, yaw: Math.PI }, 3);
  assert.ok(car.z > 3.8, 'cannot run through the broken car');
});

test('3D world: the camera follows from behind, drifts back slowly and stays out of walls', () => {
  const { followCamera, followYaw, CAMERA_PRESETS, ROOM_PRESET, insideBuilding, isWalkable, streetFraming, TARGETS, colliders, roomLayout, RUN_SPEED } = world;
  assert.ok(CAMERA_PRESETS.length >= 2 && CAMERA_PRESETS.length <= 3);
  let checked = 0;
  for (let x = -42; x <= 42; x += 3) for (let z = -38; z <= 36; z += 3) {
    if (!isWalkable(x, z)) continue;
    for (const yaw of [0, Math.PI / 2, Math.PI, -Math.PI / 2]) {
      const shot = followCamera({ x, z, heading: 0 }, CAMERA_PRESETS[1], yaw);
      assert.equal(insideBuilding(shot.x, shot.z), false, `camera at ${x},${z},${yaw}`);
      assert.ok(Math.hypot(shot.x - x, shot.y - 1.3, shot.z - z) >= 1.8, 'the avatar stays in view');
      checked++;
    }
  }
  assert.ok(checked > 500);
  const behind = followCamera({ x: 5.6, z: 20, heading: Math.PI }, CAMERA_PRESETS[1], Math.PI);
  assert.ok(behind.z > 20, 'looking north, the camera is south of the avatar');
  assert.equal(followYaw(0, Math.PI / 2, 0, 0.1), 0, 'standing still leaves the camera alone');
  const drift = followYaw(0, 0.6, RUN_SPEED, 1 / 60);
  assert.ok(drift > 0 && drift < 0.1, 'running away from the camera pulls it behind, gently');
  assert.equal(followYaw(0, Math.PI, RUN_SPEED, 1 / 60), 0, 'running toward the camera does not spin it');
  for (const stage of ['interior-museo', 'interior-bar']) {
    const room = roomLayout(stage);
    for (const spot of room.hotspots) for (const yaw of [0, Math.PI / 2, Math.PI, -Math.PI / 2]) {
      const shot = followCamera(spot, ROOM_PRESET, yaw, room.bounds);
      assert.ok(shot.x > room.bounds.minX && shot.x < room.bounds.maxX && shot.z > room.bounds.minZ && shot.z < room.bounds.maxZ, `${spot.id} camera inside`);
      assert.ok(shot.y < room.height, `${spot.id} camera below the ceiling`);
    }
  }
  const solids = colliders().filter(box => !box.npc);
  for (const target of TARGETS.filter(t => t.stage === 'calle')) {
    const shot = streetFraming(target, { x: target.x, z: target.z });
    const blocked = solids.some(b => shot.camera.x > b.x0 && shot.camera.x < b.x1 && shot.camera.z > b.z0 && shot.camera.z < b.z1);
    assert.equal(blocked, false, `${target.id} shot is not inside anything`);
    assert.ok(Math.hypot(shot.camera.x - target.x, shot.camera.z - target.z) < 8, `${target.id} shot is close`);
  }
});

test('3D world: traffic keeps moving, stops for the learner and loops', () => {
  const { stepTraffic, TRAFFIC, TRAFFIC_LANE, TRAFFIC_SPAN, PARK_LANE, VEHICLES } = world;
  assert.ok(TRAFFIC.length >= 3);
  assert.ok(VEHICLES.filter(v => Math.abs(v.z) < 4).every(v => Math.abs(Math.abs(v.z) - PARK_LANE) < 1e-9), 'parked cars stay out of the moving lanes');
  const car = { id: 'c', lane: TRAFFIC_LANE, dir: 1, x: 0, speed: 8, cruise: 8 };
  let cars = [car];
  for (let i = 0; i < 60; i++) cars = stepTraffic(cars, { x: 100, z: 30 }, 1 / 60);
  assert.ok(cars[0].x > 7, 'drives along its lane');
  cars = [{ ...car, x: 0 }];
  for (let i = 0; i < 240; i++) cars = stepTraffic(cars, { x: 8, z: TRAFFIC_LANE }, 1 / 60);
  assert.equal(cars[0].speed, 0, 'stops for someone crossing');
  assert.ok(cars[0].x < 8 - 2.15, 'without touching them');
  cars = [{ ...car, x: TRAFFIC_SPAN - 0.01 }];
  cars = stepTraffic(cars, { x: 100, z: 30 }, 1 / 60);
  assert.ok(cars[0].x < 0, 'loops around');
});

test('3D world: keys map to the documented controls and never fire while typing', () => {
  const { keyAction, inputFrom, canUseKeys } = world;
  const expected = { KeyW: 'forward', ArrowUp: 'forward', KeyS: 'back', ArrowDown: 'back', KeyA: 'left', ArrowLeft: 'left', KeyD: 'right', ArrowRight: 'right',
    ShiftLeft: 'sprint', ShiftRight: 'sprint', AltLeft: 'walk', KeyE: 'interact', Enter: 'interact', KeyF: 'vehicle', KeyV: 'camera', KeyM: 'map', Space: 'jump' };
  for (const [code, action] of Object.entries(expected)) assert.equal(keyAction(code), action, code);
  assert.equal(keyAction('KeyQ'), null);
  assert.deepEqual(inputFrom(new Set(['forward', 'left', 'sprint'])), { x: -1, y: 1, sprint: true, walk: false, jump: false });
  assert.deepEqual(inputFrom(new Set(['forward', 'back', 'right'])), { x: 1, y: 0, sprint: false, walk: false, jump: false });
  assert.equal(canUseKeys({ tagName: 'INPUT' }), false);
  assert.equal(canUseKeys({ tagName: 'TEXTAREA' }), false);
  assert.equal(canUseKeys({ tagName: 'DIV', isContentEditable: true }), false);
  assert.equal(canUseKeys({ tagName: 'DIV' }), true);
  const help = readFileSync('app/noche-abierta/World3D.tsx', 'utf8');
  for (const line of ['WASD / FLECHAS · CORRER', 'E · INTERACTUAR', 'SHIFT · MÁS RÁPIDO', 'ESC · SALIR']) assert.ok(help.includes(line), line);
});

test('3D world: the hero is the SpanishCue mascot with his pen and a small flag', () => {
  const hero = readFileSync('app/noche-abierta/hero3d.ts', 'utf8');
  assert.match(hero, /fountain pen/i);
  assert.match(hero, /#74acdf/i, 'Argentine light blue');
  assert.match(hero, /Sun of May/);
  assert.match(hero, /RUN_STRIDE/, 'the run cycle follows the distance covered');
  const world3d = readFileSync('app/noche-abierta/World3D.tsx', 'utf8');
  assert.match(world3d, /createHero\(/);
  assert.doesNotMatch(world3d, /createPerson\(/, 'the learner is not a generic person any more');
});

test('3D world: original procedural assets only, and three.js stays inside approved lesson modules', async () => {
  const files = ['World3D.tsx', 'build3d.ts', 'people3d.ts', 'hero3d.ts', 'world3d.mjs'];
  for (const file of files) {
    const source = readFileSync(`app/noche-abierta/${file}`, 'utf8');
    assert.doesNotMatch(source, /https?:\/\//, `${file} loads nothing from the network`);
    assert.doesNotMatch(source, /\.(?:glb|gltf|fbx|obj|mtl|png|jpe?g|ktx2|hdr)\b['"]/i, `${file} loads no model or image files`);
    assert.doesNotMatch(source, /\b(?:gta|grand theft|rockstar|vice city|san andreas|kenney)\b/i, `${file} has no borrowed game content`);
  }
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  assert.equal(pkg.dependencies.three, '0.186.1', 'three is pinned');
  const importers = execFileSync('git', ['grep', '-l', '-E', "from 'three'|from \"three\"|from 'three/", '--', 'app', 'lib', 'components'], { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  assert.ok(importers.length >= 1);
  const forestModules = new Set(['app/bosque-de-los-hongos-gigantes/World3D.tsx', 'app/bosque-de-los-hongos-gigantes/forest3d.ts', 'app/bosque-de-los-hongos-gigantes/hero3d.ts']);
  assert.ok(importers.every(path => path.startsWith('app/noche-abierta/') || forestModules.has(path)), importers.join());
  const lesson = readFileSync('app/noche-abierta/NocheAbierta.tsx', 'utf8');
  assert.match(lesson, /import\('\.\/World3D'\)/, 'the 3D street is loaded on demand');
  assert.doesNotMatch(lesson, /^import (?!type )[^\n]*from '\.\/World3D'/m, 'only its type is imported eagerly');
  assert.match(lesson, /webglAvailable\(\)/, 'no WebGL means the map fallback');
  const assets = readFileSync('docs/lessons/noche-abierta-3d-assets.md', 'utf8');
  for (const file of ['people3d.ts', 'hero3d.ts', 'build3d.ts', 'world3d.mjs']) assert.ok(assets.includes(file), `provenance lists ${file}`);
  assert.match(assets, /CC0|original/i);
});

// ------------------------------------------------------------ levels A1–C2

const levels = await import('../app/noche-abierta/levels.mjs');
const leveledActivities = bundle => bundle.LOCATIONS.flatMap(location => location.activities.map(activity => ({ location, activity })));
const textsOf = bundle => {
  const out = [];
  const walk = value => {
    if (typeof value === 'string') out.push(value);
    else if (Array.isArray(value)) value.forEach(walk);
    else if (value && typeof value === 'object') Object.values(value).forEach(walk);
  };
  walk([bundle.ARRIVAL, bundle.LOCATIONS, bundle.CITY_EVENTS, bundle.FINAL]);
  return out;
};

test('one world, six levels: same places, mechanics and ids, different language work', () => {
  assert.deepEqual(levels.LEVELS, ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
  assert.equal(levels.DEFAULT_LEVEL, 'B1');
  const base = levels.contentFor('B1');
  assert.equal(base.LOCATIONS, engine.LOCATIONS, 'B1 is the base content');
  const shape = bundle => bundle.LOCATIONS.map(location => [location.id, location.type, location.activities.map(activity => `${activity.id}:${activity.type ?? ''}`)]);
  for (const level of levels.LEVELS) {
    const bundle = levels.contentFor(level);
    assert.equal(bundle.level, level);
    assert.deepEqual(shape(bundle), shape(base), `${level} keeps the same world`);
    assert.deepEqual(bundle.CITY_EVENTS.map(item => item.id), base.CITY_EVENTS.map(item => item.id), `${level} keeps the same events`);
    assert.equal(bundle.MECHANICS, base.MECHANICS, `${level} keeps the same mechanics`);
    assert.ok(levels.LEVEL_INFO[level].name && levels.LEVEL_INFO[level].demand, `${level} explains what it asks`);
    for (const location of bundle.LOCATIONS) for (const activity of location.activities) assert.equal(activity.lessonLevel, level);
  }
  assert.equal(levels.contentFor('Z9').level, 'B1', 'an unknown level falls back to B1');
  assert.equal(levels.contentFor('A1'), levels.contentFor('A1'), 'bundles are cached');
});

test('every level asks its own questions, in neutral tú, without mixing levels', () => {
  const byLevel = Object.fromEntries(levels.LEVELS.map(level => [level, leveledActivities(levels.contentFor(level)).map(({ activity }) => activity.close)]));
  for (const level of levels.LEVELS) {
    const asks = byLevel[level];
    assert.ok(asks.length >= 30, `${level} has enough to ask`);
    for (const other of levels.LEVELS) if (other !== level) {
      const shared = asks.filter(ask => byLevel[other].includes(ask));
      assert.ok(shared.length <= 2, `${level} and ${other} share questions: ${shared.join(' | ')}`);
    }
    for (const text of textsOf(levels.contentFor(level))) {
      assert.doesNotMatch(text, /\b(vos|sos|tenés|podés|querés|sabés|pensás|creés|preferís|harías vos)\b/i, `${level} neutral tú, no unintended voseo: ${text}`);
      assert.doesNotMatch(text, /\s{2,}|\s[,.;:]/, `${level} clean spacing: ${text}`);
    }
  }
  // The restaurant bill, scaled: the same scene asks for more as the level goes up.
  const restaurant = level => JSON.stringify(levels.contentFor(level).LOCATIONS.find(item => item.id === 'restaurante'));
  const lengths = levels.LEVELS.map(level => restaurant(level).length);
  assert.ok(lengths[0] < lengths[2] && lengths[2] < lengths[5], `the restaurant grows with the level: ${lengths}`);
});

test('switching level keeps the walk and resets only the open activity', () => {
  let state = engine.startExploring(engine.initialState());
  assert.equal(state.level, 'B1');
  assert.equal(engine.initialState('C1').level, 'C1');
  assert.equal(engine.initialState('nope').level, 'B1');
  state = playOne(engine.openLocation(state, 'cafe'));
  state = engine.leaveLocation(state, 'cafe');
  state = engine.openLocation(state, 'restaurante');
  const id = engine.currentView(state).location.activities[0].id;
  state = engine.openActivity(state, id);
  state = engine.advanceBeat(state);
  const before = state;
  const switched = engine.setLevel(state, 'C2');
  assert.equal(switched.level, 'C2');
  assert.equal(switched.position, before.position, 'same place');
  assert.deepEqual(switched.visitOrder, before.visitOrder, 'same route so far');
  assert.equal(switched.encounters.cafe.done, before.encounters.cafe.done, 'finished places stay finished');
  const view = engine.currentView(switched);
  assert.equal(view.location.id, 'restaurante');
  assert.equal(view.location, levels.contentFor('C2').LOCATIONS.find(item => item.id === 'restaurante'), 'the open place now reads from C2');
  assert.equal(engine.setLevel(switched, 'C2'), switched, 'same level is a no-op');
  assert.equal(engine.setLevel(switched, 'Z9'), switched, 'unknown level is ignored');
  for (const [from, to] of [['A1', 'C2'], ['C2', 'A2'], ['A2', 'B2'], ['B2', 'B1']]) {
    const a = engine.setLevel(before, from);
    const b = engine.setLevel(a, to);
    assert.equal(b.level, to);
    assert.equal(b.position, before.position, `${from}→${to} keeps the place`);
    assert.ok(engine.isValidState(JSON.parse(JSON.stringify(b))), `${from}→${to} survives a reload`);
  }
  assert.equal(engine.isValidState({ ...switched, level: 'D1' }), false);
});

test('the title screen and the HUD carry the level picker; the library lists one A1–C2 card', async () => {
  const NocheAbierta = await component('app/noche-abierta/NocheAbierta.tsx');
  const title = renderToString(React.createElement(NocheAbierta));
  assert.match(title, /class="na-title-screen/);
  assert.match(title, /Empezar la noche/);
  assert.match(title, /\/brand\/mascot\/kneeling\.webp/, 'the official mascot is the hero');
  assert.equal((title.match(/role="radio"/g) ?? []).length, 6);
  assert.match(title, /data-level="B1" aria-checked="true"/, 'B1 by default');
  assert.doesNotMatch(title, /<select/, 'no plain select');
  assert.ok(existsSync('public/noche-abierta/mascot-wink.webp'));
  const { lessons } = await catalog();
  const cards = lessons.filter(item => item.path === '/noche-abierta');
  assert.equal(cards.length, 1, 'one card');
  const [card] = cards;
  assert.deepEqual(card.levels, levels.LEVELS);
  assert.equal(card.displayLevel, 'A1–C2');
  assert.equal(card.category, 'Conversación');
  assert.equal(card.conversationMode, 'play');
  const { filterLessons } = await import('../app/library-filters.mjs');
  for (const level of levels.LEVELS) assert.ok(filterLessons(lessons, { level }).includes(card), `found under ${level}`);
  assert.ok(filterLessons(lessons, { category: 'Conversación' }).includes(card));
  assert.ok(filterLessons(lessons, { query: 'Noche abierta' }).includes(card));
});

test('taxi arrival keeps its consequence but presents the destination in the fallback UI', async () => {
  const Page = await component('app/noche-abierta/NocheAbierta.tsx');
  for (const [activity, choice, label] of [['taxi-cortado', 'rodear', 'llegada a la terraza'], ['taxi-mayor', 'bajar', 'ayuda en el almacén']]) {
    const state = engine.chooseOption(engine.openLocation(engine.startExploring(engine.initialState()), 'taxi', activity), choice);
    const html = renderToString(React.createElement(Page, { initial: state }));
    assert.ok(html.includes(label));
    assert.ok(html.includes(engine.currentView(state).beat.prompt));
    assert.ok(!html.includes('Bajar del taxi'), 'already out of the taxi at this destination');
    assert.ok(engine.isValidState(engine.leaveLocation(state)));
  }
});
