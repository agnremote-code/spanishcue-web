import assert from 'node:assert/strict';

// New lessons approved after the Batch 1 / Wave 1–3 snapshots were taken.
// Historical hashes stay authoritative: before comparing, remove exactly the
// shared-file lines each addition needs and nothing else. Every edit must be
// found exactly once, so drift or a second copy still fails the old hashes.
// The additions' own behaviour is covered by their tests (tests/noche-abierta.test.mjs).
const additions = [
  {
    id:225,path:'/la-entonacion-cambia-todo',
    files:/^(?:app\/la-entonacion-cambia-todo\/|app\/phonetics-family\/|public\/(?:la-entonacion-cambia-todo|audio\/la-entonacion-cambia-todo)\/|tests\/entonacion[^/]*\.test\.mjs$|scripts\/generate-entonacion-audio\.py$|docs\/lessons\/la-entonacion-cambia-todo\.md$)/,
    edits:{
      'app/lesson-catalog.ts':[text=>{const lines=text.split('\n');const at=lines.flatMap((line,i)=>line.startsWith('  {id:225,')&&line.includes('path:"/la-entonacion-cambia-todo"')?[i]:[]);assert.equal(at.length,1,'one intonation catalog entry');lines.splice(at[0],1);return lines.join('\n');},['"Fonética":[201,202,38,224,225],','"Fonética":[201,202,38,224],']],
      'tests/level-cleanup.test.mjs':[['assert.equal(lessons.length, 117);','assert.equal(lessons.length, 116);'],['assert.equal(a1Lessons.length, 34);','assert.equal(a1Lessons.length, 33);'],["idsFor('Fonética'), [201, 202, 38, 224, 225]","idsFor('Fonética'), [201, 202, 38, 224]"]],
      'tests/rendered-html.test.mjs':[['assert.match(html,/81(?:<!-- -->|\\s)+resultados/);assert.match(html,/110(?:<!-- -->|\\s)+clases totales/);','assert.match(html,/80(?:<!-- -->|\\s)+resultados/);assert.match(html,/109(?:<!-- -->|\\s)+clases totales/);']],
      'scripts/test-worker.mjs':[[" await run(['--test','tests/entonacion.test.mjs','tests/entonacion-ui.test.mjs','tests/hablar-sin-cortar.test.mjs','tests/hablar-sin-cortar-ui.test.mjs','tests/hablar-sin-cortar-assets.test.mjs']);\n",'']],
    },
  },
  {
    id: 224, path: '/hablar-sin-cortar',
    files: /^(?:app\/(?:hablar-sin-cortar|phonetics-family)\/|public\/(?:hablar-sin-cortar|audio\/hablar-sin-cortar)\/|tests\/hablar-sin-cortar[^/]*\.test\.mjs$|scripts\/generate-hablar-audio\.py$|docs\/(?:lessons\/hablar-sin-cortar[^/]*|superpowers\/plans\/2026-10-01-hablar-sin-cortar)\.md$)/,
    edits: {
      'app/lesson-catalog.ts': [text => {
        const lines=text.split('\n'); const at=lines.flatMap((line,i)=>line.startsWith('  {id:224,') && line.includes('path:"/hablar-sin-cortar"')?[i]:[]);
        assert.equal(at.length,1,'one Hablar sin cortar catalog entry'); lines.splice(at[0],1); return lines.join('\n');
      }, ['"Fonética":[201,202,38,224],','"Fonética":[201,202,38],']],
      'app/Library.tsx': [
        ['import { phoneticsFamilyHref } from "./phonetics-family/navigation";\n',''],
        ['    phoneticsFamilyHref(lesson, selectedLevel) || conversationLessonHref(lesson, selectedLevel) ||','    conversationLessonHref(lesson, selectedLevel) ||'],
        ['? phoneticsFamilyHref(lesson, selectedLevel) || conversationLessonHref(lesson, selectedLevel) ||','? conversationLessonHref(lesson, selectedLevel) ||'],
      ],
      'tests/level-cleanup.test.mjs': [
        ['assert.equal(lessons.length, 116);','assert.equal(lessons.length, 115);'],
        ['assert.equal(a1Lessons.length, 33);','assert.equal(a1Lessons.length, 32);'],
        ["idsFor('Fonética'), [201, 202, 38, 224]","idsFor('Fonética'), [201, 202, 38]"],
      ],
      'tests/rendered-html.test.mjs': [['assert.match(html,/80(?:<!-- -->|\\s)+resultados/);assert.match(html,/109(?:<!-- -->|\\s)+clases totales/);','assert.match(html,/79(?:<!-- -->|\\s)+resultados/);assert.match(html,/108(?:<!-- -->|\\s)+clases totales/);']],
    },
  },
  {
    id: 223,
    path: '/noche-abierta',
    files: /^(?:app\/noche-abierta\/|public\/noche-abierta\/|tests\/noche-abierta\.test\.mjs$|scripts\/check-noche-level\.mjs$|docs\/lessons\/noche-abierta-(?:b1|3d-assets)\.md$)/,
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
      // Since 2026-10-01 the lesson is listed under every level from A1 to C2.
      'tests/level-cleanup.test.mjs': [['assert.equal(lessons.length, 115);', 'assert.equal(lessons.length, 114);'], ['assert.equal(a1Lessons.length, 32);', 'assert.equal(a1Lessons.length, 31);']],
      'tests/rendered-html.test.mjs': [['assert.match(html,/79(?:<!-- -->|\\s)+resultados/);assert.match(html,/108(?:<!-- -->|\\s)+clases totales/);', 'assert.match(html,/78(?:<!-- -->|\\s)+resultados/);assert.match(html,/107(?:<!-- -->|\\s)+clases totales/);']],
      'scripts/test-worker.mjs': [["await run(['--test','tests/urban-city.test.mjs','tests/noche-abierta.test.mjs']);", "await run(['--test','tests/urban-city.test.mjs']);"]],
      // The 3D street (2026-09-30) adds three.js: remove exactly its lockfile entries.
      'package.json': [[',\n    "three": "0.186.1"\n  },', '\n  },'], ['    "@types/three": "0.186.0",\n', '']],
      'package-lock.json': [text => withoutPackages(text, threePackages, { dependencies: ['three'], devDependencies: ['@types/three'] })],
    },
  },
  {
    // 2026-10-01: Autoestudio, the A1–C2 self-study course. It is not a catalog
    // lesson: one Library entry point, its own routes and a Worker gate for PRO
    // weeks (behaviour covered by tests/autoestudio-*.test.mjs).
    id: null,
    path: '/autoestudio',
    files: /^(?:app\/autoestudio\/|public\/autoestudio\/|public\/audio\/autoestudio\/|tests\/autoestudio-[a-z-]+\.test\.mjs$|scripts\/autoestudio-[a-z-]+\.mjs$|docs\/autoestudio\/)/,
    edits: {
      'app/Library.tsx': [
        ['import AutoestudioLibraryEntry from "./autoestudio/LibraryEntry";\n', ''],
        ['        {view === "Biblioteca" && <AutoestudioLibraryEntry />}\n', ''],
      ],
      'worker/index.ts': [
        ['import { isAutoestudioPath, isPremiumAutoestudioPath } from "../app/autoestudio/access";\n', ''],
        ["  // Autoestudio lets learners record themselves; the audio never leaves the browser.\n  headers.set('Permissions-Policy',isAutoestudioPath(url.pathname)?'camera=(), microphone=(self), geolocation=()':'camera=(), microphone=(), geolocation=()');", "  headers.set('Permissions-Policy','camera=(), microphone=(), geolocation=()');"],
        ['    const autoestudio=isAutoestudioPath(pathname);\n    const premiumAutoestudio=isPremiumAutoestudioPath(pathname);\n', ''],
        ['||premiumBoard||autoestudio||Boolean(lesson);', '||premiumBoard||Boolean(lesson);'],
        ['||(premiumBoard&&!fullAccess)||(premiumAutoestudio&&!fullAccess)) {', '||(premiumBoard&&!fullAccess)) {'],
      ],
      'scripts/protect-client-assets.mjs': [
        ['  // Autoestudio engines carry no lesson bodies: module data arrives only in\n  // the authorized page render (the Worker gates PRO weeks).\n  "app/autoestudio/AutoestudioLanding.tsx",\n  "app/autoestudio/LevelMap.tsx",\n  "app/autoestudio/ModulePlayer.tsx",\n', ''],
      ],
      'scripts/test-worker.mjs': [
        [" await run(['--test','tests/autoestudio-curriculum.test.mjs']);\n", ''],
        [" await run(['--test','tests/autoestudio-routes.test.mjs'],{...process.env,CHESPANISH_TEST_ORIGIN:origin});\n", ''],
      ],
    },
  },
];

// Approved repairs of EXISTING lessons: the lesson stays in every ledger; before
// comparing, its shared-file edits are undone and its display copy is restored.
const OLD_137_SUBTITLE = 'Un banco reutilizable de elecciones que se convierten en razones, cambios de regla, comparaciones, rankings y una vida ideal que hay que defender';
const NEW_137_SUBTITLE = 'Un banco reutilizable de elecciones que se convierten en razones, dilemas con dos condiciones que se suman, comparaciones, rankings y una vida ideal que hay que defender';
const OLD_137_EXPLANATION = 'Banco de 48 elecciones filtrables, con seis rondas de dificultad creciente: decisión instantánea, justificación, doble cambio, descarte, ranking y conversación libre sobre una vida ideal.';
const NEW_137_EXPLANATION = 'Banco de 48 elecciones filtrables, con seis rondas de dificultad creciente: decisión instantánea, justificación, dilema con dos condiciones acumuladas, descarte, ranking y conversación libre sobre una vida ideal.';
const repairs = [
  {
    // 2026-09-30, PR #78: «Uno o el otro» dilemma stage rebuilt with two accumulating conditions
    // (behaviour covered by tests/uno-o-el-otro-dilemmas.test.mjs).
    id: 137,
    path: '/modo-play-uno-o-el-otro',
    files: /^(?:app\/modo-play-uno-o-el-otro\/|app\/play-mode\/(?:PlayShell\.tsx|play-mode\.css)$|tests\/uno-o-el-otro-dilemmas\.test\.mjs$)/,
    restore: {subtitle: [NEW_137_SUBTITLE, OLD_137_SUBTITLE], explanation: [NEW_137_EXPLANATION, OLD_137_EXPLANATION]},
    edits: {
      'app/lesson-catalog.ts': [[`subtitle:"${NEW_137_SUBTITLE}"`, `subtitle:"${OLD_137_SUBTITLE}"`], [`explanation:"${NEW_137_EXPLANATION}"`, `explanation:"${OLD_137_EXPLANATION}"`]],
      'package.json': [['"test:conversation": "node --test tests/uno-o-el-otro-dilemmas.test.mjs ', '"test:conversation": "node --test ']],
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
const sharedFiles = new Set([...[...additions, ...repairs].flatMap(item => Object.keys(item.edits)), 'tests/helpers/catalog-additions.mjs', 'tests/helpers/batch1-preservation.mjs']);

export function isApprovedAdditionPath(path) {
  return sharedFiles.has(path) || [...additions, ...repairs].some(item => item.files.test(path));
}

export function withoutApprovedAdditions(path, bytes) {
  const steps = [...additions, ...repairs].flatMap(item => item.edits[path] || []);
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
  return lessons.filter(lesson => !additions.some(item => item.id === lesson.id && item.path === lesson.path)).map(lesson => {
    const repair = repairs.find(item => item.id === lesson.id && item.path === lesson.path);
    if (!repair) return lesson;
    const restored = {...lesson};
    for (const [field, [now, before]] of Object.entries(repair.restore)) {
      assert.equal(lesson[field], now, `approved ${field} for lesson ${lesson.id}`);
      restored[field] = before;
    }
    return restored;
  });
}
