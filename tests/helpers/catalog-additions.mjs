import assert from 'node:assert/strict';
import {beforeGrammarBytes,beforeGrammarLessons,grammarSharedFiles} from './grammar-preservation.mjs';

// New lessons approved after the Batch 1 / Wave 1–3 snapshots were taken.
// Historical hashes stay authoritative: before comparing, remove exactly the
// shared-file lines each addition needs and nothing else. Every edit must be
// found exactly once, so drift or a second copy still fails the old hashes.
// The additions' own behaviour is covered by their tests (tests/noche-abierta.test.mjs).
const additions = [
  {
    id:238,path:'/el-reino-de-la-rosa-dormida',files:/^(?:app\/el-reino-de-la-rosa-dormida\/|public\/reino\/|tests\/reino-[^/]*\.test\.mjs$|scripts\/qa-reino-browser\.mjs$)/,
    edits:{
      'app/lesson-catalog.ts':[text=>{
        const lines=text.split('\n');
        const at=lines.flatMap((line,i)=>line.startsWith('  {id:238,')&&line.includes('path:"/el-reino-de-la-rosa-dormida"')?[i]:[]);
        assert.equal(at.length,1,'one Valdoria catalog entry');lines.splice(at[0],1);return lines.join('\n');
      },[',227,228,229,237,238],',',227,228,229,237],']],
      'tests/level-cleanup.test.mjs':[['assert.equal(lessons.length, 130);','assert.equal(lessons.length, 129);'],['assert.equal(a1Lessons.length, 40);','assert.equal(a1Lessons.length, 39);']],
      'tests/rendered-html.test.mjs':[['assert.match(html,/108(?:<!-- -->|\\s)+resultados/);assert.match(html,/123(?:<!-- -->|\\s)+clases totales/);','assert.match(html,/107(?:<!-- -->|\\s)+resultados/);assert.match(html,/122(?:<!-- -->|\\s)+clases totales/);']],
      'scripts/test-worker.mjs':[[" await run(['--test','tests/reino-engine.test.mjs','tests/reino-movement.test.mjs','tests/reino-world.test.mjs','tests/reino-integration.test.mjs']);\n",'']],
    },
  },
  {
    id:237,path:'/marketing-de-casinos',files:/^(?:app\/marketing-de-casinos\/|public\/marketing-de-casinos\/|tests\/casino-marketing-b1\.test\.mjs$)/,
    edits:{
      'app/lesson-catalog.ts':[text=>{
        const lines=text.split('\n');
        const at=lines.flatMap((line,i)=>line.startsWith('  {id:237,')&&line.includes('path:"/marketing-de-casinos"')?[i]:[]);
        assert.equal(at.length,1,'one casino marketing catalog entry');lines.splice(at[0],1);return lines.join('\n');
      },[',227,228,229,237],',',227,228,229],']],
      'tests/level-cleanup.test.mjs':[['assert.equal(lessons.length, 129);','assert.equal(lessons.length, 128);']],
      'tests/rendered-html.test.mjs':[['assert.match(html,/107(?:<!-- -->|\\s)+resultados/);assert.match(html,/122(?:<!-- -->|\\s)+clases totales/);','assert.match(html,/106(?:<!-- -->|\\s)+resultados/);assert.match(html,/121(?:<!-- -->|\\s)+clases totales/);']],
      'scripts/test-worker.mjs':[[" await run(['--test','tests/casino-marketing-b1.test.mjs']);\n",'']],
    },
  },
  {
    id:236,path:'/the-sound-map',files:/^(?:app\/the-sound-map\/|public\/(?:the-sound-map|audio\/the-sound-map)\/|tests\/sound-map[^/]*\.test\.mjs$|scripts\/generate-sound-map-audio\.py$)/,
    edits:{
      'tests/rendered-html.test.mjs':[['assert.match(html,/106(?:<!-- -->|\\s)+resultados/);assert.match(html,/121(?:<!-- -->|\\s)+clases totales/);','assert.match(html,/105(?:<!-- -->|\\s)+resultados/);assert.match(html,/120(?:<!-- -->|\\s)+clases totales/);']],
      'scripts/test-worker.mjs':[[" await run(['--test','tests/sound-map.test.mjs','tests/sound-map-ui.test.mjs','tests/sound-map-page-ui.test.mjs','tests/sound-map-audio-ui.test.mjs']);\n",'']],
      'app/lesson-catalog.ts':[text=>{const lines=text.split('\n');const at=lines.flatMap((line,i)=>line.startsWith('  {"id":236,')&&line.includes('"path":"/the-sound-map"')?[i]:[]);assert.equal(at.length,1,'one sound map entry');lines.splice(at[0],1);return lines.join('\n');},['"Escucha":[130,131,105,28,132,133,134,135,236],','"Escucha":[130,131,105,28,132,133,134,135],']],
    },
  },
  // Owner-requested country atlases. Exact inversions preserve every historical byte.
  {
    id:227,path:'/suecia',files:/^(?:app\/(?:country-atlas|suecia|argentina|espana)\/|public\/country-atlas\/|tests\/country-atlas[^/]*\.test\.mjs$)/,
    edits:{
      'tests/rendered-html.test.mjs':[['assert.match(html,/114(?:<!-- -->|\\s)+clases totales/);','assert.match(html,/111(?:<!-- -->|\\s)+clases totales/);']],

      'app/lesson-catalog.ts':[text=>{const lines=text.split('\n');for(const [id,path] of [[227,'/suecia'],[228,'/argentina'],[229,'/espana']]){const at=lines.flatMap((line,i)=>line.startsWith(`  {"id":${id},`)&&line.includes(`"path":"${path}"`)?[i]:[]);assert.equal(at.length,1,'one country catalog entry');lines.splice(at[0],1);}return lines.join('\n');},[', 39, 210, 227, 228, 229]);',', 39, 210]);'],[',136,223,226,227,228,229],',',136,223,226],']],
      'app/conversation-families/ConversationFamily.tsx':[["export function ConversationFamily<const Level extends CEFRLevel>({ id, title, levels, defaultLevel, children, bilingual = false }: {\n  id: string; title: string; levels: readonly Level[]; defaultLevel: Level; bilingual?: boolean;\n  children: (level: Level) => ReactNode;\n", "export function ConversationFamily({ id, title, levels, defaultLevel, children }: {\n  id: string; title: string; levels: readonly CEFRLevel[]; defaultLevel: CEFRLevel;\n  children: (level: CEFRLevel) => ReactNode;\n"], ["  const snapshot = useCallback(() => resolveConversationLevel({availableLevels: levels, defaultLevel}, new URLSearchParams(window.location.search).get('level')) as Level, [levels, defaultLevel]);\n", "  const snapshot = useCallback(() => resolveConversationLevel({availableLevels: levels, defaultLevel}, new URLSearchParams(window.location.search).get('level')), [levels, defaultLevel]);\n"], ["      <div className=\"cf-family-title\"><span>{bilingual ? 'CONVERSACIÓN / CONVERSATION' : 'CONVERSACIÓN'}</span><strong>{title}</strong></div>\n", "      <div className=\"cf-family-title\"><span>CONVERSACIÓN</span><strong>{title}</strong></div>\n"], ["        <span>{bilingual ? 'Nivel / Level' : 'Nivel'}</span>\n", "        <span>Nivel</span>\n"]]
    }
  },
  {id:228,path:'/argentina',files:/^app\/argentina\//,edits:{}},
  {id:229,path:'/espana',files:/^app\/espana\//,edits:{}},

  {
    id:226,path:'/bosque-de-los-hongos-gigantes',
    files:/^(?:app\/bosque-de-los-hongos-gigantes\/|app\/conversation-vocabulary\/|public\/bosque-hongos\/|tests\/bosque-[^/]*\.test\.mjs$|docs\/superpowers\/(?:plans|specs)\/2026-10-04-bosque[^/]*|docs\/audits\/bosque-vocabulary-additions-20261004\.json$)/,
    edits:{
      'app/lesson-catalog.ts':[text=>{const lines=text.split('\n');const at=lines.flatMap((line,i)=>line.startsWith('  {id:226,')&&line.includes('path:"/bosque-de-los-hongos-gigantes"')?[i]:[]);assert.equal(at.length,1,'one forest catalog entry');lines.splice(at[0],1);return lines.join('\n');},[',129,136,223,226],',',129,136,223],']],
      'tests/level-cleanup.test.mjs':[['assert.equal(lessons.length, 118);','assert.equal(lessons.length, 117);'],['assert.equal(a1Lessons.length, 35);','assert.equal(a1Lessons.length, 34);']],
      'tests/rendered-html.test.mjs':[['assert.match(html,/82(?:<!-- -->|\\s)+resultados/);assert.match(html,/111(?:<!-- -->|\\s)+clases totales/);','assert.match(html,/81(?:<!-- -->|\\s)+resultados/);assert.match(html,/110(?:<!-- -->|\\s)+clases totales/);']],
      'package.json':[text=>{const pkg=JSON.parse(text);assert.ok(pkg.scripts['test:bosque']);assert.equal(pkg.devDependencies.jsdom,'^26.1.0');delete pkg.scripts['test:bosque'];delete pkg.devDependencies.jsdom;assert.ok(pkg.scripts.test.includes(' && npm run test:bosque'));pkg.scripts.test=pkg.scripts.test.replace(' && npm run test:bosque','');return JSON.stringify(pkg,null,2)+'\n';}],
      'package-lock.json':[text=>withoutForestTestPackages(text)],
    },
  },
  {
    id:225,path:'/la-entonacion-cambia-todo',
    files:/^(?:app\/la-entonacion-cambia-todo\/|app\/phonetics-family\/|public\/(?:la-entonacion-cambia-todo|audio\/la-entonacion-cambia-todo)\/|tests\/entonacion[^/]*\.test\.mjs$|scripts\/generate-entonacion-audio\.py$|docs\/lessons\/la-entonacion-cambia-todo\.md$)/,
    edits:{
      '.github/workflows/ci-automerge.yml':[text=>{const step='      - name: Install audio verification dependency\n        run: sudo apt-get update -qq && sudo apt-get install -y --no-install-recommends ffmpeg\n\n';assert.equal(text.split(step).length-1,2,'audio dependency for both CI verification jobs');return text.split(step).join('');}],
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


const forestTestPackages = ["node_modules/@asamuzakjp/css-color", "node_modules/@asamuzakjp/css-color/node_modules/lru-cache", "node_modules/@csstools/color-helpers", "node_modules/@csstools/css-calc", "node_modules/@csstools/css-color-parser", "node_modules/@csstools/css-parser-algorithms", "node_modules/@csstools/css-tokenizer", "node_modules/cssstyle", "node_modules/data-urls", "node_modules/data-urls/node_modules/tr46", "node_modules/data-urls/node_modules/webidl-conversions", "node_modules/data-urls/node_modules/whatwg-url", "node_modules/decimal.js", "node_modules/entities", "node_modules/html-encoding-sniffer", "node_modules/iconv-lite", "node_modules/is-potential-custom-element-name", "node_modules/jsdom", "node_modules/jsdom/node_modules/tr46", "node_modules/jsdom/node_modules/webidl-conversions", "node_modules/jsdom/node_modules/whatwg-url", "node_modules/nwsapi", "node_modules/parse5", "node_modules/rrweb-cssom", "node_modules/safer-buffer", "node_modules/saxes", "node_modules/symbol-tree", "node_modules/tldts", "node_modules/tldts-core", "node_modules/tough-cookie", "node_modules/w3c-xmlserializer", "node_modules/whatwg-encoding", "node_modules/whatwg-mimetype", "node_modules/xml-name-validator", "node_modules/xmlchars"];
function withoutForestTestPackages(text) {
 const lock=JSON.parse(withoutPackages(text,forestTestPackages,{devDependencies:['jsdom']}));
 const proxy=lock.packages['node_modules/http-proxy-agent'];
 assert.equal(proxy.devOptional,true);
 const {devOptional,...preserved}=proxy;
 void devOptional;
 lock.packages['node_modules/http-proxy-agent']={version:preserved.version,resolved:preserved.resolved,integrity:preserved.integrity,license:preserved.license,optional:true,dependencies:preserved.dependencies,engines:preserved.engines};
 return JSON.stringify(lock,null,2)+'\n';
}

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
  return grammarSharedFiles.includes(path) || path==='tests/helpers/grammar-preservation.mjs' || path==='docs/audits/grammar-preservation-20261007.json' || sharedFiles.has(path) || [...additions, ...repairs].some(item => item.files.test(path));
}

export function withoutApprovedAdditions(path, bytes) {
  // Undo the latest additive lessons in reverse order before the grammar snapshot.
  for (const addition of additions.filter(item=>item.id===238||item.id===237||item.id===236)) {
    const latestSteps=addition.edits[path]||[];
    if(!latestSteps.length)continue;
    let latest=bytes.toString('utf8');
    for(const step of latestSteps){
      if(typeof step==='function'){latest=step(latest);continue;}
      const [after,before]=step;assert.equal(latest.split(after).length-1,1,`one ${addition.id} edit in ${path}`);latest=latest.replace(after,before);
    }
    bytes=Buffer.from(latest);
  }
  bytes=beforeGrammarBytes(path,bytes);
  const steps = [...additions.filter(item=>item.id!==236&&item.id!==237&&item.id!==238), ...repairs].flatMap(item => item.edits[path] || []);
  if (!steps.length) return bytes;
  let text = bytes.toString('utf8');
  for (const step of steps) {
    if (typeof step === 'function') { text = step(text); continue; }
    const [after, before] = step;
    assert.equal(text.split(after).length - 1, 1, `one bounded addition edit in ${path}`);
    text = text.replace(after, before);
  }
  if (path === 'app/lesson-catalog.ts') {
    // Approved editorial metadata is outside the historical teaching/access contract.
    const fields = [
      ['news?:{addedAt:string;featured:boolean}; ', ''],
      ['{id:221,news:{addedAt:"2026-09-29",featured:true},', '{id:221,'],
    ];
    for (const [after,before] of fields) {
      assert.equal(text.split(after).length-1,1,'one exact approved news metadata edit');
      text=text.replace(after,before);
    }
  }
  return Buffer.from(text);
}

export function withoutApprovedLessons(lessons) {
  return beforeGrammarLessons(lessons).filter(lesson => !additions.some(item => item.id === lesson.id && item.path === lesson.path)).map(lesson => {
    if (lesson.id === 221) {
      assert.deepEqual(lesson.news,{addedAt:'2026-09-29',featured:true});
      const preserved = {...lesson}; delete preserved.news; lesson = preserved;
    }
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
