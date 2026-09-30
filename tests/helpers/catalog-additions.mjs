import assert from 'node:assert/strict';

// New lessons approved after the Batch 1 / Wave 1–3 snapshots were taken.
// Historical hashes stay authoritative: before comparing, remove exactly the
// shared-file lines each addition needs and nothing else. Every edit must be
// found exactly once, so drift or a second copy still fails the old hashes.
// The additions' own behaviour is covered by their tests (tests/noche-abierta.test.mjs).
const additions = [
  {
    id: 223,
    path: '/noche-abierta',
    files: /^(?:app\/noche-abierta\/|public\/noche-abierta\/|tests\/noche-abierta\.test\.mjs$|docs\/lessons\/noche-abierta-(?:b1|3d-assets)\.md$)/,
    edits: {
      'app/lesson-catalog.ts': [
        text => {
          const lines = text.split('\n');
          const at = lines.flatMap((line, index) => line.startsWith('  {id:223,') && line.includes('path:"/noche-abierta"') ? [index] : []);
          assert.equal(at.length, 1, 'one Noche abierta catalog entry');
          lines.splice(at[0], 1);
          return lines.join('\n');
        },
        [',129,136,223],', ',129,136],'],
      ],
      'tests/level-cleanup.test.mjs': [['assert.equal(lessons.length, 115);', 'assert.equal(lessons.length, 114);']],
      'tests/rendered-html.test.mjs': [['assert.match(html,/79(?:<!-- -->|\\s)+resultados/);assert.match(html,/108(?:<!-- -->|\\s)+clases totales/);', 'assert.match(html,/78(?:<!-- -->|\\s)+resultados/);assert.match(html,/107(?:<!-- -->|\\s)+clases totales/);']],
      'scripts/test-worker.mjs': [["await run(['--test','tests/urban-city.test.mjs','tests/noche-abierta.test.mjs']);", "await run(['--test','tests/urban-city.test.mjs']);"]],
      // The 3D street (2026-09-30) adds three.js: remove exactly its lockfile entries.
      'package.json': [[',\n    "three": "0.186.1"\n  },', '\n  },'], ['    "@types/three": "0.186.0",\n', '']],
      'package-lock.json': [text => withoutPackages(text, threePackages, { dependencies: ['three'], devDependencies: ['@types/three'] })],
    },
  },
];

const threePackages = ['@dimforge/rapier3d-compat', '@tweenjs/tween.js', '@types/stats.js', '@types/three', '@types/three/node_modules/fflate', '@types/webxr', 'meshoptimizer', 'three'].map(name => `node_modules/${name}`);

function withoutPackages(text, packages, root) {
  const lock = JSON.parse(text);
  for (const key of packages) {
    assert.ok(lock.packages[key], `lockfile addition ${key}`);
    delete lock.packages[key];
  }
  for (const [field, names] of Object.entries(root)) for (const name of names) {
    assert.ok(lock.packages[''][field][name], `root ${field} ${name}`);
    delete lock.packages[''][field][name];
  }
  const restored = `${JSON.stringify(lock, null, 2)}\n`;
  assert.equal(JSON.stringify(JSON.parse(text), null, 2) + '\n', text, 'lockfile keeps npm formatting');
  return restored;
}

// Shared files whose only change is an approved addition (checked by the byte tests).
const sharedFiles = new Set([...additions.flatMap(item => Object.keys(item.edits)), 'tests/helpers/catalog-additions.mjs', 'tests/helpers/batch1-preservation.mjs']);

export function isApprovedAdditionPath(path) {
  return sharedFiles.has(path) || additions.some(item => item.files.test(path));
}

export function withoutApprovedAdditions(path, bytes) {
  const steps = additions.flatMap(item => item.edits[path] || []);
  if (!steps.length) return bytes;
  let text = bytes.toString('utf8');
  for (const step of steps) {
    if (typeof step === 'function') { text = step(text); continue; }
    const [after, before] = step;
    assert.equal(text.split(after).length - 1, 1, `one bounded addition edit in ${path}`);
    text = text.replace(after, before);
  }
  return Buffer.from(text);
}

export function withoutApprovedLessons(lessons) {
  return lessons.filter(lesson => !additions.some(item => item.id === lesson.id && item.path === lesson.path));
}
