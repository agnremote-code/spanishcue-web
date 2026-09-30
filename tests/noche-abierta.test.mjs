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

test('nine places, each a different kind of situation, with two or three valid variants', () => {
  const { LOCATIONS } = engine;
  assert.equal(LOCATIONS.length, 9);
  assert.equal(new Set(LOCATIONS.map(item => item.id)).size, 9);
  assert.equal(new Set(LOCATIONS.map(item => item.kind)).size, 9, 'every place uses its own mechanic');
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
        shelf: () => cue.items?.length === 3 && cue.items.every(item => item.pro && item.con), vote: () => cue.people?.length >= 3 && cue.people.every(item => item.reason),
        roadside: () => cue.speaker && cue.text && cue.clues?.length >= 3 }[location.kind];
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

test('no game economy: nothing in the state or the engine counts points, lives, ranks or time left', async () => {
  const bannedWords = new Set(['score', 'scores', 'point', 'points', 'xp', 'coin', 'coins', 'star', 'stars', 'rank', 'ranking', 'respect', 'life', 'lives', 'health', 'timer', 'countdown', 'leaderboard', 'achievement', 'achievements', 'mastered', 'mastery', 'streak', 'level', 'levels']);
  const words = name => name.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().split(/[^a-z]+/).filter(Boolean);
  const banned = { test: name => words(name).some(word => bannedWords.has(word)) };
  const { trail } = play(['cafe', 'departamento', 'esquina', 'taxi', 'plaza', 'tienda', 'restaurante', 'terraza', 'auto']);
  const keys = new Set();
  const walk = value => { if (value && typeof value === 'object') for (const [key, inner] of Object.entries(value)) { keys.add(key); walk(inner); } };
  for (const state of trail) walk(state);
  for (const key of keys) assert.equal(banned.test(key), false, `state key ${key}`);
  for (const name of Object.keys(engine)) assert.equal(banned.test(name), false, `export ${name}`);
  for (const name of Object.keys(world)) assert.equal(banned.test(name), false, `3D export ${name}`);
  for (const file of ['World3D.tsx', 'build3d.ts', 'people3d.ts']) {
    // Our own names only: comments and three.js class names are not state.
    const source = (await readFile(`app/noche-abierta/${file}`, 'utf8')).replace(/\/\/.*$/gm, '').replace(/THREE\.\w+/g, '').replace(/\.(?:setFromPoints|getPoints)\b/g, '');
    const identifiers = new Set(source.match(/\b[A-Za-z_]\w*\b/g));
    for (const name of identifiers) assert.equal(banned.test(name), false, `${file}: ${name}`);
  }
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
  assert.equal((city.match(/role="button" tabindex="0"/g) || []).length, 9, 'nine focusable places on the map');
  assert.equal((city.match(/aria-label="Ir a /g) || []).length, 9);
  assert.match(city, /data-view="map"/, 'the server renders the map; the 3D street loads in the browser');
  assert.doesNotMatch(city, /<canvas/);

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

test('every encounter reveals new information before the extra prompts, and the teacher can close it', () => {
  let state = engine.openLocation(engine.startExploring(engine.initialState()), 'auto');
  const location = engine.locationById('auto');
  assert.equal(engine.stepCount(location, 0), 3 + location.variants[0].prompts.length);
  state = engine.chooseReaction(state, 'auto', 'ayudar');
  state = engine.nextStep(state, 'auto');
  assert.equal(state.encounters.auto.step, engine.TWIST_STEP);
  assert.match(engine.TWIST_QUESTION, /¿Cambia tu respuesta\?/);
  assert.ok(location.variants.every(variant => variant.twist.length > 20));
  let fresh = engine.openLocation(engine.startExploring(engine.initialState()), 'plaza');
  fresh = engine.markDone(fresh, 'plaza');
  assert.equal(fresh.encounters.plaza.done, true);
  assert.deepEqual(engine.completedIds(fresh), ['plaza'], 'marked done by the teacher counts as completed');
  assert.equal(engine.markDone(fresh, 'nope'), fresh);
  assert.ok(engine.CITY_EVENTS.find(item => item.id === 'lluvia').affects.includes('auto'));
});

test('the rendered encounter shows the new information as its own step', async () => {
  const NocheAbierta = await component('app/noche-abierta/NocheAbierta.tsx');
  let state = engine.openLocation(engine.startExploring(engine.initialState()), 'auto');
  const first = renderToString(React.createElement(NocheAbierta, { initial: state }));
  assert.match(first, /na-roadside/);
  assert.match(first, /Carla/);
  state = engine.nextStep(engine.chooseReaction(state, 'auto', 'llamar'), 'auto');
  const twist = renderToString(React.createElement(NocheAbierta, { initial: state }));
  assert.match(twist, /Nueva información/);
  assert.match(twist, /La grúa tarda dos horas/);
  assert.equal((twist.match(/class="na-prompt"/g) || []).length, 1, 'still one prompt at a time');
});

// ------------------------------------------------------------ 3D street

test('3D world: the learner starts on a walkable sidewalk inside the district', () => {
  const { SPAWN, WORLD_BOUNDS, isWalkable, insideBuilding } = world;
  assert.ok(Number.isFinite(SPAWN.x) && Number.isFinite(SPAWN.z) && Number.isFinite(SPAWN.heading));
  assert.ok(SPAWN.x > WORLD_BOUNDS.minX && SPAWN.x < WORLD_BOUNDS.maxX && SPAWN.z > WORLD_BOUNDS.minZ && SPAWN.z < WORLD_BOUNDS.maxZ);
  assert.equal(insideBuilding(SPAWN.x, SPAWN.z, 0.5), false);
  assert.ok(isWalkable(SPAWN.x, SPAWN.z));
});

test('3D world: one interaction target per place, with valid coordinates, radii and keys', () => {
  const { TARGETS, isWalkable, nearestTarget, exitSpot } = world;
  assert.equal(new Set(TARGETS.map(item => item.id)).size, TARGETS.length, 'unique target ids');
  const byPlace = new Map(TARGETS.map(item => [item.location, item]));
  assert.equal(byPlace.size, TARGETS.length, 'one target per place');
  for (const location of engine.LOCATIONS) assert.ok(byPlace.get(location.id), `${location.id} has a target`);
  for (const target of TARGETS) {
    assert.ok(engine.locationById(target.location), target.id);
    assert.ok(Number.isFinite(target.x) && Number.isFinite(target.z), `${target.id} coordinates`);
    assert.ok(target.radius >= 1.2 && target.radius <= 3, `${target.id} radius ${target.radius}`);
    assert.ok(target.key === 'E' || target.key === 'F', target.id);
    assert.match(target.verb, /^[A-ZÁÉÍÓÚÑ]+$/, target.id);
    assert.ok(isWalkable(target.x, target.z), `${target.id} can be reached`);
    assert.equal(nearestTarget({ x: target.x, z: target.z })?.id, target.id, `${target.id} is the prompt at its own spot`);
    const out = exitSpot(target);
    assert.ok(isWalkable(out.x, out.z), `${target.id} exit spot is walkable`);
  }
  assert.equal(nearestTarget({ x: 0, z: 0 }), null, 'no prompt in the middle of the crossing');
  assert.equal(TARGETS.filter(item => item.key === 'F').map(item => item.id).join(), 'taxi', 'F is only for getting into the taxi');
});

test('3D world: interiors, rooftop, taxi and the broken car each have their own micro-world', () => {
  const { TARGETS, STAGES, BUILDINGS, VEHICLES, NPCS, WORLD_BOUNDS } = world;
  const interiors = Object.entries(STAGES).filter(([, stage]) => stage.size);
  assert.ok(interiors.length >= 3, 'at least three enterable buildings');
  for (const target of TARGETS) assert.ok(target.stage === 'calle' || target.stage === 'taxi' || STAGES[target.stage], `${target.id} stage ${target.stage}`);
  for (const [id, stage] of interiors) {
    assert.ok(TARGETS.some(target => target.stage === id), `${id} is entered from the street`);
    assert.ok(stage.origin.x - stage.size.w / 2 > WORLD_BOUNDS.maxX + 50, `${id} sits away from the street`);
    assert.ok(Math.abs(stage.spot.x - stage.origin.x) < stage.size.w / 2 && Math.abs(stage.spot.z - stage.origin.z) < stage.size.d / 2, `${id} spot inside`);
  }
  const origins = interiors.map(([, stage]) => stage.origin.x).sort((a, b) => a - b);
  for (let i = 1; i < origins.length; i++) assert.ok(origins[i] - origins[i - 1] >= 20, 'interiors do not overlap');
  for (const id of ['cafe', 'departamento', 'tienda']) assert.ok(STAGES[TARGETS.find(t => t.location === id).stage].size, `${id} is an interior`);
  const roof = BUILDINGS.find(item => item.rooftop);
  const terraza = STAGES[TARGETS.find(t => t.location === 'terraza').stage];
  assert.equal(terraza.roof, roof.h, 'the rooftop is the real roof of the tall building');
  assert.ok(terraza.spot.x > roof.x0 && terraza.spot.x < roof.x1 && terraza.spot.z > roof.z0 && terraza.spot.z < roof.z1);
  const taxi = TARGETS.find(t => t.location === 'taxi');
  assert.equal(taxi.stage, 'taxi');
  assert.equal(VEHICLES.find(v => v.id === taxi.vehicle)?.kind, 'taxi');
  const car = TARGETS.find(t => t.location === 'auto');
  assert.equal(car.verb, 'ACERCARME');
  const broken = VEHICLES.find(v => v.id === car.vehicle);
  assert.equal(broken?.kind, 'broken');
  assert.equal(broken.hoodOpen, true);
  assert.equal(NPCS.find(n => n.id === car.npc)?.location, 'auto', 'the driver waits by the car');
  assert.equal(new Set(NPCS.map(n => n.id)).size, NPCS.length);
  assert.ok(NPCS.length >= 8 && NPCS.filter(n => n.location).length >= 5, 'people in the street, several you can talk to');
  for (const target of TARGETS.filter(t => t.npc)) assert.ok(NPCS.some(n => n.id === target.npc), target.id);
});

test('3D world: walking moves, turns, runs and stops at walls', () => {
  const { stepPlayer, colliders, WALK_SPEED, RUN_SPEED, TURN_SPEED, BUILDINGS, PLAYER_RADIUS } = world;
  const boxes = colliders();
  const start = { x: 5.6, z: 20, heading: Math.PI };
  const walked = stepPlayer(start, { forward: 1 }, 0.1, boxes);
  assert.ok(Math.abs(start.z - walked.z - WALK_SPEED * 0.1) < 1e-9, 'W walks forward (north here)');
  assert.ok(walked.moving);
  const ran = stepPlayer(start, { forward: 1, run: true }, 0.1, boxes);
  assert.ok(Math.abs(start.z - ran.z - RUN_SPEED * 0.1) < 1e-9, 'Shift runs');
  const back = stepPlayer(start, { forward: -1 }, 0.1, boxes);
  assert.ok(back.z > start.z && back.z - start.z < WALK_SPEED * 0.1, 'S steps back, slower');
  const left = stepPlayer(start, { turn: 1 }, 0.1, boxes);
  assert.ok(Math.abs(left.heading - start.heading - TURN_SPEED * 0.1) < 1e-9 && !left.moving, 'A turns on the spot');
  assert.equal(stepPlayer(start, { forward: 1 }, 5, boxes).z, stepPlayer(start, { forward: 1 }, 0.1, boxes).z, 'long frames are clamped');
  const cafe = BUILDINGS.find(b => b.id === 'cafe');
  let player = { x: -11.5, z: -6, heading: Math.PI };
  for (let i = 0; i < 100; i++) player = stepPlayer(player, { forward: 1, run: true }, 0.1, boxes);
  assert.ok(player.z >= cafe.z1 + PLAYER_RADIUS - 1e-9, `stopped at the café wall (${player.z})`);
  player = { x: -11.5, z: -7.6, heading: Math.PI + 0.5 };
  const slide = stepPlayer(player, { forward: 1 }, 0.1, boxes);
  assert.ok(slide.x < player.x, 'slides along the wall instead of sticking');
  let car = { x: -21, z: 5, heading: Math.PI };
  for (let i = 0; i < 40; i++) car = stepPlayer(car, { forward: 1 }, 0.1, boxes);
  assert.ok(car.z > 3.3, 'cannot walk through the broken car');
});

test('3D world: the follow camera stays out of buildings and street shots have a clear view', () => {
  const { followCamera, CAMERA_PRESETS, insideBuilding, isWalkable, streetFraming, TARGETS, colliders } = world;
  assert.ok(CAMERA_PRESETS.length >= 2 && CAMERA_PRESETS.length <= 3);
  for (const preset of CAMERA_PRESETS) assert.ok(preset.distance >= 3 && preset.distance <= 9.5 && preset.height > 1.5, preset.id);
  let checked = 0;
  for (let x = -42; x <= 42; x += 3) for (let z = -38; z <= 36; z += 3) {
    if (!isWalkable(x, z)) continue;
    for (const heading of [0, Math.PI / 2, Math.PI, -Math.PI / 2]) {
      const shot = followCamera({ x, z, heading }, CAMERA_PRESETS[1]);
      assert.equal(insideBuilding(shot.x, shot.z), false, `camera at ${x},${z},${heading}`);
      assert.ok(Math.hypot(shot.x - x, shot.y - 1.3, shot.z - z) >= 1.8, 'the avatar stays in view');
      checked++;
    }
  }
  assert.ok(checked > 500);
  const solids = colliders().filter(box => !box.npc);
  for (const target of TARGETS.filter(t => t.stage === 'calle')) {
    const shot = streetFraming(target, { x: target.x, z: target.z, heading: 0 });
    const blocked = solids.some(b => shot.camera.x > b.x0 && shot.camera.x < b.x1 && shot.camera.z > b.z0 && shot.camera.z < b.z1);
    assert.equal(blocked, false, `${target.id} shot is not inside anything`);
    assert.ok(Math.hypot(shot.camera.x - target.x, shot.camera.z - target.z) < 8, `${target.id} shot is close`);
  }
});

test('3D world: keys map to the documented controls and never fire while typing', () => {
  const { keyAction, inputFrom, canUseKeys } = world;
  const expected = { KeyW: 'forward', ArrowUp: 'forward', KeyS: 'back', ArrowDown: 'back', KeyA: 'left', ArrowLeft: 'left', KeyD: 'right', ArrowRight: 'right',
    ShiftLeft: 'run', ShiftRight: 'run', KeyE: 'interact', Enter: 'interact', KeyF: 'vehicle', KeyV: 'camera', KeyM: 'map' };
  for (const [code, action] of Object.entries(expected)) assert.equal(keyAction(code), action, code);
  assert.equal(keyAction('KeyQ'), null);
  assert.deepEqual(inputFrom(new Set(['forward', 'left', 'run'])), { forward: 1, turn: 1, run: true });
  assert.deepEqual(inputFrom(new Set(['forward', 'back', 'right'])), { forward: 0, turn: -1, run: false });
  assert.equal(canUseKeys({ tagName: 'INPUT' }), false);
  assert.equal(canUseKeys({ tagName: 'TEXTAREA' }), false);
  assert.equal(canUseKeys({ tagName: 'DIV', isContentEditable: true }), false);
  assert.equal(canUseKeys({ tagName: 'DIV' }), true);
  const help = readFileSync('app/noche-abierta/World3D.tsx', 'utf8');
  for (const line of ['WASD / FLECHAS · MOVERSE', 'E · INTERACTUAR', 'F · SUBIR / BAJAR', 'SHIFT · CORRER']) assert.ok(help.includes(line), line);
});

test('3D world: original procedural assets only, and three.js stays inside this lesson', async () => {
  const files = ['World3D.tsx', 'build3d.ts', 'people3d.ts', 'world3d.mjs'];
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
  assert.ok(importers.every(path => path.startsWith('app/noche-abierta/')), importers.join());
  const lesson = readFileSync('app/noche-abierta/NocheAbierta.tsx', 'utf8');
  assert.match(lesson, /import\('\.\/World3D'\)/, 'the 3D street is loaded on demand');
  assert.doesNotMatch(lesson, /^import (?!type )[^\n]*from '\.\/World3D'/m, 'only its type is imported eagerly');
  assert.match(lesson, /webglAvailable\(\)/, 'no WebGL means the map fallback');
  const assets = readFileSync('docs/lessons/noche-abierta-3d-assets.md', 'utf8');
  for (const file of ['people3d.ts', 'build3d.ts', 'world3d.mjs']) assert.ok(assets.includes(file), `provenance lists ${file}`);
  assert.match(assets, /CC0|original/i);
});
