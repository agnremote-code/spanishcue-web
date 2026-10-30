// The free Noche abierta class (/demo/noche-abierta) is the PRO game itself:
// same component, same city, some districts and circles locked. Its street
// scenes come from a public JSON file; no PRO scene may reach it or a chunk.
import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { demoStreetJson } from '../scripts/build-noche-demo.mjs';
import { ALL_ENCOUNTERS } from '../app/noche-abierta/street.mjs';
import { DEMO_FREE_DISTRICTS, DEMO_LOCKED_SCENES, isDemoFree } from '../app/noche-abierta/demo-policy.mjs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const json = read('public/noche-abierta/demo-calle.json');
const demo = JSON.parse(json);

test('the demo JSON is up to date (node scripts/build-noche-demo.mjs)', () => {
  assert.equal(json, demoStreetJson());
});

test('free districts open, locked districts and circles are shells without text', () => {
  assert.equal(demo.encounters.length, ALL_ENCOUNTERS.length, 'every circle stands in the free city');
  const free = ALL_ENCOUNTERS.filter(isDemoFree);
  assert.ok(free.length >= 30, `${free.length} free scenes`);
  for (const id of DEMO_LOCKED_SCENES) assert.ok(DEMO_FREE_DISTRICTS.includes(ALL_ENCOUNTERS.find(e => e.id === id)?.district), id);
  for (const encounter of demo.encounters) {
    const original = ALL_ENCOUNTERS.find(e => e.id === encounter.id);
    if (isDemoFree(original)) { assert.deepEqual(encounter, original, encounter.id); continue; }
    assert.equal(encounter.locked, true, encounter.id);
    assert.deepEqual(encounter.ends, {}, encounter.id);
    for (const node of Object.values(encounter.nodes)) assert.deepEqual(Object.keys(node).sort(), ['mood', 'options'], encounter.id);
    assert.ok(!(encounter.id in demo.talk) && !(encounter.id in demo.a0) && !(encounter.id in demo.a1Words), encounter.id);
  }
  // Nothing written for a locked scene is in the file.
  for (const encounter of ALL_ENCOUNTERS.filter(e => !isDemoFree(e))) {
    assert.ok(!json.includes(JSON.stringify(encounter.title)), `${encounter.id}: title`);
    assert.ok(!json.includes(JSON.stringify(encounter.goal)), `${encounter.id}: goal`);
    const first = encounter.nodes[encounter.start].line;
    for (const line of Object.values(first)) assert.ok(!json.includes(line), `${encounter.id}: line`);
  }
});

test('the demo and the PRO pages render the same game', () => {
  assert.match(read('app/demo/noche-abierta/page.tsx'), /<NocheDemo /);
  assert.match(read('app/noche-abierta/page.tsx'), /<NocheAbierta \/>/);
  assert.match(read('app/noche-abierta/NocheDemo.tsx'), /<NocheGame demo=/);
  assert.match(read('app/noche-abierta/NocheAbierta.tsx'), /registerFullStreet\(\);[\s\S]*<NocheGame initial=/);
});

test('the free bundle carries no street scene: only the PRO NocheAbierta registers them', async () => {
  const r = await build({ entryPoints: ['app/noche-abierta/NocheDemo.tsx'], bundle: true, write: false, metafile: true, format: 'esm', platform: 'browser', jsx: 'automatic', external: ['react', 'react-dom', 'next/*', 'three', 'three/*'], loader: { '.css': 'empty', '.webp': 'empty' }, logLevel: 'silent' });
  const inputs = Object.keys(r.metafile.inputs);
  const leaks = inputs.filter(path => /noche-abierta\/(street\/(?!placements)|talk\/(street-|a0\.mjs|index)|street\.mjs)/.test(path));
  assert.deepEqual(leaks, []);
  const text = r.outputFiles.map(file => file.text).join('\n');
  for (const encounter of ALL_ENCOUNTERS) assert.ok(!text.includes(encounter.title), encounter.title);
});

test('a locked circle offers PRO; a free one opens the scene', async () => {
  const core = await import('../app/noche-abierta/street-core.mjs');
  const locked = demo.encounters.find(e => e.locked);
  const free = demo.encounters.find(e => !e.locked && !e.requires && !e.event);
  assert.equal(core.isLocked(locked.id), false, 'the PRO registry has no locks');
  core.registerStreet({ encounters: demo.encounters, a0: demo.a0, a1Words: demo.a1Words });
  try {
    assert.equal(core.isLocked(locked.id), true);
    const empty = core.emptyStreet();
    assert.equal(core.openEncounter(empty, locked.id), empty);
    const opened = core.openEncounter(empty, free.id, null, 'B1');
    assert.equal(opened.open.id, free.id);
    assert.ok(core.streetView(opened, 'B1').line);
    assert.equal(typeof core.moodOf(empty, locked.id), 'string');
    const source = read('app/noche-abierta/NocheGame.tsx');
    assert.match(source, /if \(isLocked\(id\)\) \{ setGate\(/);
    assert.match(source, /demo && next === 'escucha'/);
  } finally {
    (await import('../app/noche-abierta/street.mjs')).registerFullStreet();
  }
});

// The free hospital follows the same rule.
test('the free hospital is the PRO HospitalGame with floors, circles and people locked', async () => {
  const { demoHospitalJson } = await import('../scripts/build-noche-demo.mjs');
  const { CONTENT } = await import('../app/hospital-san-casi-vivo/levels.mjs');
  const { PATIENTS } = await import('../app/hospital-san-casi-vivo/patients.mjs');
  const { SCENES } = await import('../app/hospital-san-casi-vivo/layout.mjs');
  const { DEMO_LOCKED_SCENES: lockedScenes } = await import('../app/hospital-san-casi-vivo/demo-policy.mjs');
  const file = read('public/hospital-san-casi-vivo/demo.json');
  assert.equal(file, demoHospitalJson(), 'run node scripts/build-noche-demo.mjs');
  const data = JSON.parse(file);
  for (const scene of SCENES) {
    const free = scene.floor === 1 && !lockedScenes.includes(scene.id);
    assert.equal(data.locked.includes(scene.id), !free, scene.id);
    for (const level of Object.keys(CONTENT)) {
      if (free) assert.deepEqual(data.content[level][scene.id], CONTENT[level][scene.id], `${level}/${scene.id}`);
      else assert.ok(!file.includes(JSON.stringify(CONTENT[level][scene.id].ask)), `${level}/${scene.id}`);
    }
  }
  for (const [id, person] of Object.entries(PATIENTS)) {
    const free = id.startsWith('1-');
    assert.equal(id in data.patients, free, id);
    if (!free) assert.ok(!file.includes(JSON.stringify(person.mid)), id);
  }
  assert.match(read('app/demo/hospital-san-casi-vivo/page.tsx'), /<HospitalFree /);
  assert.match(read('app/hospital-san-casi-vivo/page.tsx'), /<HospitalPro \/>/);
  assert.match(read('app/hospital-san-casi-vivo/HospitalFree.tsx'), /<HospitalGame demo=/);
  const r = await build({ entryPoints: ['app/hospital-san-casi-vivo/HospitalFree.tsx'], bundle: true, write: false, metafile: true, format: 'esm', platform: 'browser', jsx: 'automatic', external: ['react', 'react-dom', 'next/*', 'three', 'three/*'], loader: { '.css': 'empty', '.webp': 'empty' }, logLevel: 'silent' });
  assert.deepEqual(Object.keys(r.metafile.inputs).filter(path => /hospital-san-casi-vivo\/(levels\/|levels\.mjs|patients\.mjs|engine\.mjs)/.test(path)), []);
});
