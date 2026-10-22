import assert from 'node:assert/strict';
import {beforeGrammarBytes,beforeGrammarLessons,grammarSharedFiles} from './grammar-preservation.mjs';
import {readFileSync} from 'node:fs';

// Course classes (ids above 300, written from 2026-10-20) as listed in the grammar catalog additions.
const courseLessons=[...readFileSync(new URL('../../app/grammar-classroom/catalog.ts',import.meta.url),'utf8').matchAll(/^  \[([3-5]\d\d), '[^']*', '[^']*', '([^']*)'/gm)].map(([,id,slug])=>({id:Number(id),path:`/gramatica/${slug}`,files:/^$/,edits:{}}));

// New lessons approved after the Batch 1 / Wave 1–3 snapshots were taken.
// Historical hashes stay authoritative: before comparing, remove exactly the
// shared-file lines each addition needs and nothing else. Every edit must be
// found exactly once, so drift or a second copy still fails the old hashes.
// The additions' own behaviour is covered by their tests (tests/noche-abierta.test.mjs).
const additions = [
  ...courseLessons,
  {
    // 2026-10-22: Madrid infectada (A0–C2), a PRO 3D world in ten zones, wired like the feria.
    id:242,path:'/madrid-infectada',files:/^(?:app\/madrid-infectada\/|app\/escucha-3d\/content\/madrid\/|public\/madrid-infectada\/|public\/audio\/escucha-3d\/madrid-|tests\/madrid-infectada\.test\.mjs$|scripts\/check-madrid\.mjs$|docs\/audits\/madrid-infectada-english-additions-20261022\.json$)/,
    edits:{
      'app/lesson-catalog.ts':[text=>{
        const lines=text.split('\n');
        const at=lines.flatMap((line,i)=>line.startsWith('  {id:242,')&&line.includes('path:"/madrid-infectada"')?[i]:[]);
        assert.equal(at.length,1,'one madrid catalog entry');lines.splice(at[0],1);return lines.join('\n');
      },[',237,238,240,241,242],',',237,238,240,241],']],
      'scripts/test-worker.mjs':[[" await run(['--test','tests/madrid-infectada.test.mjs']);\n",'']],
    },
  },
  {
    // 2026-10-20: the grammar course in order (G001–G236). Its data names the A0 first class.
    id:300,path:'/spanish-grammar-lessons#course',files:/^(?:app\/grammar-classroom\/(?:curriculum\.ts|course\.ts|GrammarCourse\.tsx|course\.module\.css|live\/progress\.ts)$|tests\/grammar-course\.test\.mjs$|docs\/curriculum\/)/,
    edits:{
      // The course classes (ids above 300) arrive in batches: these steps undo every batch at once.
      'app/grammar-classroom/catalog.ts':[text=>text.replace(/^  \[3\d\d, .*\n/gm,'').replace(/(const addedAt: Record<number, string> = \{ 239: '2026-10-14')(?:, 3\d\d: '[\d-]+')+ \};/,'$1 };')],
      'app/lesson-catalog.ts':[text=>text.replace("// place at the end of the sequence so no other grammar class is renumbered. The course\n// classes written since 2026-10-20 (ids above 300) follow it in their course order.\nconst sequenceLevel = (lesson:LessonSource) => lesson.id === 239 || lesson.id > 300 ? 99 : levelOrder[lesson.level] ?? 99;","// place at the end of the sequence so no other grammar class is renumbered.\nconst sequenceLevel = (lesson:LessonSource) => lesson.id === 239 ? 99 : levelOrder[lesson.level] ?? 99;")],
      'tests/level-cleanup.test.mjs':[text=>text.replace("'app/conversation-families/types.ts','app/lesson-catalog.ts','app/grammar-classroom/curriculum.ts'].includes(relative);","'app/conversation-families/types.ts','app/lesson-catalog.ts'].includes(relative);"),text=>text.replace(/assert\.equal\(lessons\.length, \d+\);/,'assert.equal(lessons.length, 132);').replace(/assert\.equal\(a1Lessons\.length, \d+\);/,'assert.equal(a1Lessons.length, 43);')],
      'tests/grammar-classroom.test.mjs':[text=>text.replace(/ assert\.equal\(grammar\.length,\d+\);\n for\(const id of \[230,231,232,233,234,235,239(?:,3\d\d)*\]\)\{/,' assert.equal(grammar.length,58);\n for(const id of [230,231,232,233,234,235,239]){').replace(/ assert\.equal\(new Set\(grammar\.map\(l=>l\.id\)\)\.size,\d+\);/,' assert.equal(new Set(grammar.map(l=>l.id)).size,58);')],
      'tests/teacher-access.test.mjs':[text=>text.replace(/ assert\.equal\(grammar\.length,\d+\);/,' assert.equal(grammar.length,58);')],
      'tests/rendered-html.test.mjs':[text=>text.replace(/assert\.match\(html,\/\d+ clases\/\);/,'assert.match(html,/58 clases/);').replace(/assert\.match\(html,\/\d+\(\?:<!-- -->\|\\s\)\+resultados\/\);assert\.match\(html,\/\d+\(\?:<!-- -->\|\\s\)\+clases totales\/\);/,'assert.match(html,/110(?:<!-- -->|\\s)+resultados/);assert.match(html,/125(?:<!-- -->|\\s)+clases totales/);')],
    },
  },
  {
    // 2026-10-21: La feria de Villaluz (LES-001), an A2 PRO 3D world, wired like the hospital.
    id:241,path:'/la-feria-de-villaluz',files:/^(?:app\/la-feria-de-villaluz\/|app\/escucha-3d\/content\/feria\/|public\/la-feria-de-villaluz\/|public\/audio\/escucha-3d\/feria-|tests\/la-feria-de-villaluz\.test\.mjs$|tests\/feria-look-contract\.test\.mjs$|scripts\/check-feria\.mjs$|scripts\/export-feria-announcements\.mjs$|scripts\/qa-feria-browser\.mjs$)/,
    edits:{
      'app/lesson-catalog.ts':[text=>{
        const lines=text.split('\n');
        const at=lines.flatMap((line,i)=>line.startsWith('  {id:241,')&&line.includes('path:"/la-feria-de-villaluz"')?[i]:[]);
        assert.equal(at.length,1,'one feria catalog entry');lines.splice(at[0],1);return lines.join('\n');
      },[',237,238,240,241],',',237,238,240],']],
      'scripts/test-worker.mjs':[[" await run(['--test','tests/la-feria-de-villaluz.test.mjs','tests/feria-look-contract.test.mjs']);\n",'']],
    },
  },
  {
    id:240,path:'/hospital-san-casi-vivo',files:/^(?:app\/hospital-san-casi-vivo\/|app\/escucha-3d\/content\/hospital\/|public\/hospital-san-casi-vivo\/|public\/audio\/escucha-3d\/hospital-|tests\/hospital-san-casi-vivo\.test\.mjs$|scripts\/check-hospital\.mjs$|docs\/audits\/hospital-a0-english-additions-20261015\.json$)/,
    edits:{
      // 2026-10-16: the casino (237) and the forest (226) gained an authored A0 level.
      'app/lesson-catalog.ts':[text=>text.split('\n').map(line=>line.startsWith('  {id:237,')||line.startsWith('  {id:226,')?line.replace('levels:["A0","A1","A2","B1","B2","C1","C2"],displayLevel:"A0–C2"','levels:["A1","A2","B1","B2","C1","C2"],displayLevel:"A1–C2"').replace('tag:"MODO PLAY · 3D · 12 ZONAS · A0–C2"','tag:"MODO PLAY · 3D · 12 ZONAS · A1–C2"'):line).join('\n'),text=>{
        const lines=text.split('\n');
        const at=lines.flatMap((line,i)=>line.startsWith('  {id:240,')&&line.includes('path:"/hospital-san-casi-vivo"')?[i]:[]);
        assert.equal(at.length,1,'one hospital catalog entry');lines.splice(at[0],1);return lines.join('\n');
      },[',227,228,229,237,238,240],',',227,228,229,237,238],']],
      'tests/level-cleanup.test.mjs':[["[223,226,227,228,229,236,237,238,240].includes(lesson.id)","[223,227,228,229,236,238,240].includes(lesson.id)"],["assert.equal(lessons.filter(l=>l.levels?.includes('A0')).length,9);","assert.equal(lessons.filter(l=>l.levels?.includes('A0')).length,7);"],["relative.startsWith('app/marketing-de-casinos/')||relative.startsWith('app/bosque-de-los-hongos-gigantes/')||",""],['assert.equal(lessons.length, 132);','assert.equal(lessons.length, 131);'],['assert.equal(a1Lessons.length, 43);','assert.equal(a1Lessons.length, 41);'],["[223,227,228,229,236,238,240].includes(lesson.id)","[223,227,228,229,236,238].includes(lesson.id)"],["assert.equal(lessons.filter(l=>l.levels?.includes('A0')).length,7);","assert.equal(lessons.filter(l=>l.levels?.includes('A0')).length,6);"],["relative.startsWith('app/el-reino-de-la-rosa-dormida/')||relative.startsWith('app/hospital-san-casi-vivo/')||","relative.startsWith('app/el-reino-de-la-rosa-dormida/')||"]],
      'tests/rendered-html.test.mjs':[['assert.match(html,/110(?:<!-- -->|\\s)+resultados/);assert.match(html,/125(?:<!-- -->|\\s)+clases totales/);','assert.match(html,/109(?:<!-- -->|\\s)+resultados/);assert.match(html,/124(?:<!-- -->|\\s)+clases totales/);']],
      'scripts/test-worker.mjs':[[" await run(['--test','tests/hospital-san-casi-vivo.test.mjs']);\n",'']],
    },
  },
  {
    id:239,path:'/gramatica/clase-inicial',files:/^(?:app\/grammar-classroom\/live\/lessons\/g239\.ts$|app\/grammar-classroom\/live\/audio\/|public\/audio\/grammar-live\/|public\/grammar-classroom\/previews\/clase-inicial\.webp$|scripts\/generate-grammar-live-audio\.py$|\.github\/workflows\/grammar-live-audio\.yml$|docs\/audits\/grammar-live-a0-english-additions-20261014\.json$|public\/grammar-thumbnails\/|scripts\/grammar-thumbnails\/)/,
    edits:{
      // 2026-10-15: grammar thumbnails redrawn and the first class listed under A1 (display only).
      'app/lesson-catalog.ts':[["image:lesson.category===\"Gram\u00e1tica\"?`/grammar-thumbnails/${lesson.id}.webp`:lessonPreviews[lesson.id]||lesson.image||categoryPreviews[lesson.category]};", "image:lessonPreviews[lesson.id]||lesson.image||categoryPreviews[lesson.category]};"], ["// The first class (239) moved from A0 to the A1 filter on 2026-10-15; it keeps its\n// place at the end of the sequence so no other grammar class is renumbered.\nconst sequenceLevel = (lesson:LessonSource) => lesson.id === 239 ? 99 : levelOrder[lesson.level] ?? 99;\n", ''], ["  .sort((a,b) => sequenceLevel(a) - sequenceLevel(b) ||", "  .sort((a,b) => (levelOrder[a.level] ?? 99) - (levelOrder[b.level] ?? 99) ||"]],
      'app/grammar-classroom/catalog.ts':[["  [239, 'A1', 'ser-estar', 'clase-inicial', 'Clase inicial: tu primer «hola» en español', 'El abecedario, yo / tú / vos, «soy» y «estoy»: lo justo para tu primera charla con tus abuelos argentinos.', 50, []],\n] as const;\n/** When each addition reached the library (the «Nuevo» badge). */\nconst addedAt: Record<number, string> = { 239: '2026-10-14' };","] as const;"],["news:{addedAt:addedAt[id] ?? '2026-10-07',featured:true}","news:{addedAt:'2026-10-07',featured:true}"]],
      'tests/grammar-classroom.test.mjs':[[' assert.equal(grammar.length,58);\n for(const id of [230,231,232,233,234,235,239]){',' assert.equal(grammar.length,57);\n for(const id of [230,231,232,233,234,235]){'],[' assert.equal(new Set(grammar.map(l=>l.id)).size,58);',' assert.equal(new Set(grammar.map(l=>l.id)).size,57);']],
      'tests/level-cleanup.test.mjs':[['assert.equal(lessons.length, 131);','assert.equal(lessons.length, 130);'],["['app/grammar-classroom/catalog.ts','app/grammar-classroom/live/LiveClassroom.tsx','app/grammar-classroom/live/lessons/g239.ts','app/argentina/layout.tsx'","['app/argentina/layout.tsx'"]],
      'tests/teacher-access.test.mjs':[[' assert.equal(grammar.length,58);',' assert.equal(grammar.length,57);']],
      'tests/rendered-html.test.mjs':[['assert.match(html,/58 clases/);','assert.match(html,/57 clases/);'],['assert.match(html,/109(?:<!-- -->|\\s)+resultados/);assert.match(html,/124(?:<!-- -->|\\s)+clases totales/);','assert.match(html,/108(?:<!-- -->|\\s)+resultados/);assert.match(html,/123(?:<!-- -->|\\s)+clases totales/);']],
    },
  },
  {
    id:238,path:'/el-reino-de-la-rosa-dormida',files:/^(?:app\/el-reino-de-la-rosa-dormida\/|public\/reino\/|tests\/reino-[^/]*\.test\.mjs$|scripts\/qa-reino-browser\.mjs$)/,
    edits:{
      'app/lesson-catalog.ts':[text=>{
        const lines=text.split('\n');
        const at=lines.flatMap((line,i)=>line.startsWith('  {id:238,')&&line.includes('path:"/el-reino-de-la-rosa-dormida"')?[i]:[]);
        assert.equal(at.length,1,'one Valdoria catalog entry');lines.splice(at[0],1);return lines.join('\n');
      },[',227,228,229,237,238],',',227,228,229,237],']],
      'tests/level-cleanup.test.mjs':[['assert.equal(lessons.length, 130);','assert.equal(lessons.length, 129);'],['assert.equal(a1Lessons.length, 41);','assert.equal(a1Lessons.length, 40);']],
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
      'tests/level-cleanup.test.mjs':[['assert.equal(lessons.length, 129);','assert.equal(lessons.length, 128);'],['assert.equal(a1Lessons.length, 40);','assert.equal(a1Lessons.length, 39);']],
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
const OLD_36_LINE = "  {id:36,level:\"A2\",levels:[\"A2\",\"B1\"],displayLevel:\"A2–B1\",category:\"Conversación\",countrySequence:2,searchAliases:[\"USA\",\"United States\",\"US\",\"EEUU\",\"Estados Unidos\"],title:\"ESTADOS UNIDOS\",subtitle:\"50 estados. 50 formas de vivir.\",duration:\"90+ min\",tag:\"50 estados · 300 preguntas A2/B1\",special:true,path:\"/estados-unidos-a2-b1\",goals:[\"Responder preguntas A2 desde la experiencia propia\",\"Comparar estados y formas de vivir sin necesitar conocimientos previos\",\"Extender una respuesta con una pregunta B1 opcional\"],warmup:\"Elige un estado del mapa y explica qué tipo de vida imaginas allí.\",explanation:\"Un atlas interactivo basado en fronteras estatales reales. Los 50 estados —con Alaska y Hawái en recuadros— abren preguntas A2, comparaciones personales, modos de decisión y un cierre para diseñar tus Estados Unidos.\",practice:[],speaking:[],homework:\"Diseña tus Estados Unidos: un estado para vivir, trabajar, viajar, comer y retirarte.\"},";
const NEW_36_LINE = "  {id:36,level:\"A2\",levels:[\"A0\",\"A1\",\"A2\",\"B1\"],displayLevel:\"A0–B1\",category:\"Conversación\",countrySequence:2,searchAliases:[\"USA\",\"United States\",\"US\",\"EEUU\",\"Estados Unidos\"],title:\"ESTADOS UNIDOS\",subtitle:\"Un viaje en 3D por seis estados.\",duration:\"90+ min\",tag:\"3D · 6 estados · 30 lugares · A0–B1\",special:true,path:\"/estados-unidos-a2-b1\",goals:[\"Conversar con personajes en treinta lugares reales de Estados Unidos\",\"Decidir, reaccionar a sorpresas y responder preguntas de tu nivel, de A0 a B1\",\"Comprender una escucha por estado y comparar formas de vivir\"],warmup:\"Elige un estado del mapa y explica qué tipo de vida imaginas allí.\",explanation:\"Un mundo 3D con Florida, Nueva York, California, Texas, Hawái y Colorado. En cada estado caminas por cinco lugares y hablas con su gente: una situación, una decisión, una sorpresa y preguntas con ayuda, en A0, A1, A2 o B1. El atlas de los 50 estados sigue disponible.\",practice:[],speaking:[],homework:\"Diseña tus Estados Unidos: un estado para vivir, trabajar, viajar, comer y retirarte.\"},";
const OLD_36_GOALS = ["Responder preguntas A2 desde la experiencia propia","Comparar estados y formas de vivir sin necesitar conocimientos previos","Extender una respuesta con una pregunta B1 opcional"];
const NEW_36_GOALS = ["Conversar con personajes en treinta lugares reales de Estados Unidos","Decidir, reaccionar a sorpresas y responder preguntas de tu nivel, de A0 a B1","Comprender una escucha por estado y comparar formas de vivir"];
const OLD_36_EXPLANATION = "Un atlas interactivo basado en fronteras estatales reales. Los 50 estados —con Alaska y Hawái en recuadros— abren preguntas A2, comparaciones personales, modos de decisión y un cierre para diseñar tus Estados Unidos.";
const NEW_36_EXPLANATION = "Un mundo 3D con Florida, Nueva York, California, Texas, Hawái y Colorado. En cada estado caminas por cinco lugares y hablas con su gente: una situación, una decisión, una sorpresa y preguntas con ayuda, en A0, A1, A2 o B1. El atlas de los 50 estados sigue disponible.";
const OLD_210_HEAD = '{id:210,level:"B1",category:"Conversación",countrySequence:1,searchAliases:["Mexico","México","mexicano","mexicana"],title:"MÉXICO",subtitle:"32 estados y entidades para descubrir México mientras hablas de tu propia vida",duration:"90+ min",tag:"32 territorios · conversación B1",';
const NEW_210_HEAD = '{id:210,level:"B1",levels:["A0","A1","A2","B1"],displayLevel:"A0–B1",category:"Conversación",countrySequence:1,searchAliases:["Mexico","México","mexicano","mexicana"],title:"MÉXICO",subtitle:"Un viaje en 3D por cuatro estados.",duration:"90+ min",tag:"3D · 4 estados · 20 lugares · A0–B1",';
const OLD_210_GOALS = ["Comparar formas de vivir usando experiencias personales","Explicar preferencias sobre vivienda, trabajo, movilidad y tiempo libre","Diseñar un México ideal con decisiones justificadas"];
const NEW_210_GOALS = ["Conversar con personajes en veinte lugares reales de México","Decidir, reaccionar a sorpresas y responder preguntas de tu nivel, de A0 a B1","Comprender una escucha por estado y comparar formas de vivir"];
const OLD_210_EXPLANATION = "Un mapa vectorial interactivo de las 31 entidades federativas y Ciudad de México. Cada territorio abre contexto breve, vocabulario, cinco preguntas B1 y repreguntas opcionales que no exigen conocimientos previos.";
const NEW_210_EXPLANATION = "Un mundo 3D con Ciudad de México, Jalisco, Oaxaca y Quintana Roo. En cada estado caminas por cinco lugares y hablas con su gente: una situación, una decisión, una sorpresa y preguntas con ayuda, en A0, A1, A2 o B1. El mapa de las 32 entidades sigue disponible.";
const OLD_32_HEAD = "{id:32,level:\"B1\",levels:[\"A1\",\"B1\"],displayLevel:\"A1 · B1\",category:\"Conversación\",title:\"Reino Unido en Relieve\",subtitle:\"12 territorios y 48 lugares reales con recorridos de conversación A1 y B1\",duration:\"90+ min\",tag:\"12 territorios · 48 lugares\",";
const NEW_32_HEAD = "{id:32,level:\"B1\",levels:[\"A0\",\"A1\",\"A2\",\"B1\"],displayLevel:\"A0–B1\",category:\"Conversación\",title:\"Reino Unido en Relieve\",subtitle:\"Un viaje en 3D por las cuatro naciones.\",duration:\"90+ min\",tag:\"3D · 4 naciones · 20 lugares · A0–B1\",";
const OLD_32_GOALS = ["Ubicar las cuatro naciones y las nueve regiones oficiales de Inglaterra", "Elegir lugares, preguntar dónde están y expresar gustos en A1", "Comparar lugares y justificar decisiones en B1"];
const NEW_32_GOALS = ["Conversar con personajes en veinte lugares reales del Reino Unido", "Decidir, reaccionar a sorpresas y responder preguntas de tu nivel, de A0 a B1", "Comprender una escucha por nación y comparar formas de vivir"];
const OLD_32_EXPLANATION = "Una expedición conversacional por las doce áreas ITL1 del Reino Unido: cada territorio abre cuatro lugares reales y preguntas diferentes según el nivel, con vocabulario y apoyos bilingües.";
const NEW_32_EXPLANATION = "Un mundo 3D con Inglaterra, Escocia, Gales e Irlanda del Norte. En cada nación caminas por cinco lugares y hablas con su gente: una situación, una decisión, una sorpresa y preguntas con ayuda, en A0, A1, A2 o B1. El mapa en relieve de las doce áreas sigue disponible.";
const OLD_33_ROW = "{id:33,level:\"B1\",category:\"Conversación\",title:\"Irlanda en Relieve\",subtitle:\"26 condados, 104 lugares reales y 260 detonadores para descubrir la República de Irlanda condado por condado\",duration:\"90+ min\",tag:\"260 preguntas\",special:true,path:\"/irlanda-en-relieve\",goals:[\"Sostener respuestas B1 con razones, ejemplos y comparaciones\",\"Distinguir los 26 condados de la República y sus cuatro provincias históricas\",\"Hablar de costa, lengua irlandesa, vivienda, turismo, patrimonio, movilidad y vida rural\"],warmup:\"Elige un condado en el mapa real y anticipa qué decisión local podría aparecer allí.\",explanation:\"Una expedición conversacional por los 26 condados tradicionales de la República de Irlanda: cada territorio abre cuatro lugares concretos, una pregunta propia y seis preguntas centrales para desarrollar respuestas B1.\",practice:[],speaking:[],homework:\"\"}";
const NEW_33_ROW = "{id:33,level:\"B1\",levels:[\"A0\",\"A1\",\"A2\",\"B1\"],displayLevel:\"A0–B1\",category:\"Conversación\",title:\"Irlanda en Relieve\",subtitle:\"Un viaje en 3D por Dublín, Galway, Kerry y Cork.\",duration:\"90+ min\",tag:\"3D · 4 regiones · 20 lugares · A0–B1\",special:true,path:\"/irlanda-en-relieve\",goals:[\"Conversar con personajes en veinte lugares reales de Irlanda\",\"Decidir, reaccionar a sorpresas y responder preguntas de tu nivel, de A0 a B1\",\"Comprender una escucha por región y comparar formas de vivir\"],warmup:\"Elige una región en el mapa y di qué lugar quieres visitar.\",explanation:\"Un mundo 3D con Dublín, Galway y Connemara, Kerry y Cork. En cada región caminas por cinco lugares y hablas con su gente: una situación, una decisión, una sorpresa y preguntas con ayuda, en A0, A1, A2 o B1. El mapa en relieve de los 26 condados sigue disponible.\",practice:[],speaking:[],homework:\"\"}";
const OLD_25_ROW = "{id:25,level:\"B1\",category:\"Conversación\",title:\"Israel en Capas\",subtitle:\"14 destinos y lentes culturales, 98 preguntas B1 y un mapa para pensar hablando\",duration:\"90+ min\",tag:\"98 preguntas\",special:true,path:\"/israel-en-capas\",goals:[\"Comparar lugares, ritmos de vida y perspectivas culturales\",\"Explicar opiniones con razones, ejemplos y matices\",\"Usar vocabulario B1 para hablar de paisajes, idiomas, comida, comunidad e innovación\"],warmup:\"Elige un punto del mapa o una lente cultural y explica qué te gustaría descubrir.\",explanation:\"Una clase conversacional por capas: cada destino presenta un dato real y abre preguntas B1 para observar, comparar, tomar postura e imaginar soluciones.\",practice:[],speaking:[],homework:\"\"}";
const NEW_25_ROW = "{id:25,level:\"B1\",levels:[\"A0\",\"A1\",\"A2\",\"B1\"],displayLevel:\"A0–B1\",category:\"Conversación\",title:\"Israel en Capas\",subtitle:\"Un viaje en 3D por Tel Aviv, Jerusalén, el Norte y el Sur.\",duration:\"90+ min\",tag:\"3D · 4 regiones · 20 lugares · A0–B1\",special:true,path:\"/israel-en-capas\",goals:[\"Conversar con personajes en veinte lugares reales de Israel\", \"Decidir, reaccionar a sorpresas y responder preguntas de tu nivel, de A0 a B1\", \"Comprender una escucha por región y comparar formas de vivir\"],warmup:\"Elige una región en el mapa y di qué lugar quieres visitar.\",explanation:\"Un mundo 3D con Tel Aviv y Jaffa, Jerusalén, el Norte y el Sur. En cada región caminas por cinco lugares y hablas con su gente: una situación, una decisión, una sorpresa y preguntas con ayuda, en A0, A1, A2 o B1. El mapa de las 14 estaciones en capas sigue disponible.\",practice:[],speaking:[],homework:\"\"}";
const OLD_24_ROW = "{id:24,level:\"A1\",category:\"Conversación\",title:\"Indonesia Fantástica\",subtitle:\"38 provincias reales, 380 preguntas y recursos bilingües para hablar desde cero\",duration:\"75+ min\",tag:\"380 preguntas\",special:true,path:\"/indonesia-fantastica\",goals:[\"Responder preguntas simples desde el primer minuto\",\"Usar wordbanks bilingües sin frenar la conversación\",\"Hablar de lugares, comida, cultura, naturaleza y planes de viaje reales\"],warmup:\"Elige una provincia o deja que el archipiélago elija por ti.\",explanation:\"Una aventura 1000% conversacional por las 38 provincias reales de Indonesia, con contenido cultural auténtico y una experiencia visual fantástica.\",practice:[],speaking:[],homework:\"\"}";
const NEW_24_ROW = "{id:24,level:\"A1\",levels:[\"A0\",\"A1\",\"A2\",\"B1\"],displayLevel:\"A0–B1\",category:\"Conversación\",title:\"Indonesia Fantástica\",subtitle:\"Un viaje en 3D por Bali, Java, Sumatra y Komodo.\",duration:\"75+ min\",tag:\"3D · 4 regiones · 20 lugares · A0–B1\",special:true,path:\"/indonesia-fantastica\",goals:[\"Conversar con personajes en veinte lugares reales de Indonesia\", \"Decidir, reaccionar a sorpresas y responder preguntas de tu nivel, de A0 a B1\", \"Comprender una escucha por región y comparar formas de vivir\"],warmup:\"Elige una isla en el mapa y di qué lugar quieres visitar.\",explanation:\"Un mundo 3D con Bali, Java, Sumatra y Komodo con Flores. En cada isla caminas por cinco lugares y hablas con su gente: una situación, una decisión, una sorpresa y preguntas con ayuda, en A0, A1, A2 o B1. El mapa de las 38 provincias sigue disponible.\",practice:[],speaking:[],homework:\"\"}";
const OLD_29_ROW = "{id:29,level:\"B1\",category:\"Conversación\",title:\"Suiza en Relieve\",subtitle:\"26 cantones, 104 lugares reales y 260 detonadores para descubrir una Suiza nada típica\",duration:\"90+ min\",tag:\"260 preguntas\",special:true,path:\"/suiza-en-relieve\",goals:[\"Sostener respuestas B1 con razones y ejemplos\",\"Comparar formas de vivir, lenguas, paisajes y decisiones locales\",\"Usar vocabulario bilingüe para proponer soluciones y expresar matices\"],warmup:\"Elige un cantón en el mapa real y anticipa qué decisión cotidiana podría aparecer allí.\",explanation:\"Una expedición conversacional por los 26 cantones: cada territorio abre cuatro lugares concretos con contexto local, una pregunta propia y seis preguntas centrales para desarrollar respuestas B1.\",practice:[],speaking:[],homework:\"\"}";
const NEW_29_ROW = "{id:29,level:\"B1\",levels:[\"A0\",\"A1\",\"A2\",\"B1\"],displayLevel:\"A0–B1\",category:\"Conversación\",title:\"Suiza en Relieve\",subtitle:\"Un viaje en 3D por Zúrich, Ginebra, el Tesino y los Alpes.\",duration:\"90+ min\",tag:\"3D · 4 regiones · 20 lugares · A0–B1\",special:true,path:\"/suiza-en-relieve\",goals:[\"Conversar con personajes en veinte lugares reales de Suiza\",\"Decidir, reaccionar a sorpresas y responder preguntas de tu nivel, de A0 a B1\",\"Comprender una escucha por región y comparar formas de vivir\"],warmup:\"Elige una región en el mapa y di qué lugar quieres visitar.\",explanation:\"Un mundo 3D con Zúrich, Ginebra y el lago Lemán, el Tesino y los Alpes. En cada región caminas por cinco lugares y hablas con su gente: una situación, una decisión, una sorpresa y preguntas con ayuda, en A0, A1, A2 o B1. El mapa en relieve de los 26 cantones sigue disponible.\",practice:[],speaking:[],homework:\"\"}";
const OLD_30_ROW = "{id:30,level:\"A2\",levels:[\"A2\",\"B1\"],displayLevel:\"A2–B1\",category:\"Conversación\",title:\"Australia en Movimiento\",subtitle:\"8 territorios, 48 preguntas nuevas y un atlas 3D investigado con fuentes australianas\",duration:\"90+ min\",tag:\"48 preguntas\",special:true,path:\"/australia-en-movimiento\",goals:[\"Responder preguntas A2 con una idea, una razón y un detalle\",\"Entrar de forma gradual en preguntas B1 simples\",\"Explorar lugares, decisiones y contrastes reales de los ocho territorios australianos\"],warmup:\"Elige un territorio sobre el relieve o deja que Australia elija por ti.\",explanation:\"Una expedición conversacional A2–B1 con mapa 3D por capas, rutas reales, wordbanks bilingües y una animación propia para cada pregunta.\",practice:[],speaking:[],homework:\"\"}";
const NEW_30_ROW = "{id:30,level:\"A2\",levels:[\"A0\",\"A1\",\"A2\",\"B1\"],displayLevel:\"A0–B1\",category:\"Conversación\",title:\"Australia en Movimiento\",subtitle:\"Un viaje en 3D por Sídney, Melbourne, Queensland y el Outback.\",duration:\"90+ min\",tag:\"3D · 4 regiones · 20 lugares · A0–B1\",special:true,path:\"/australia-en-movimiento\",goals:[\"Conversar con personajes en veinte lugares reales de Australia\",\"Decidir, reaccionar a sorpresas y responder preguntas de tu nivel, de A0 a B1\",\"Comprender una escucha por región y comparar formas de vivir\"],warmup:\"Elige una región en el mapa y di qué lugar quieres visitar.\",explanation:\"Un mundo 3D con Nueva Gales del Sur, Victoria, Queensland y el Outback. En cada región caminas por cinco lugares y hablas con su gente: una situación, una decisión, una sorpresa y preguntas con ayuda, en A0, A1, A2 o B1. El atlas de los ocho territorios sigue disponible.\",practice:[],speaking:[],homework:\"\"}";
// 2026-10-15: every grammar class got its own teacher-style thumbnail (scripts/grammar-thumbnails)
// and the first class (239) moved from the A0 filter to A1. Display-only: before comparing
// against the historical ledger, the previous shared preview is restored.
const OLD_GRAMMAR_IMAGES = {"3": "/grammar-worlds/verb-city.webp", "18": "/past-b1/surf-indefinido.webp", "23": "/catalog-thumbnails/conditional-multiverse.webp", "31": "/catalog-thumbnails/conditionals-path.webp", "37": "/subjuntivo/alicia-hero.webp", "40": "/previews/noun-studio-v91.webp", "41": "/previews/agreement-studio-v91.webp", "42": "/grammar-worlds/article-gallery.webp", "43": "/grammar-worlds/demonstrative-observatory.webp", "44": "/grammar-worlds/possession-house.webp", "45": "/grammar-worlds/quantity-market.webp", "46": "/grammar-worlds/pronoun-central.webp", "47": "/grammar-worlds/adverb-tower.webp", "48": "/grammar-worlds/verb-city.webp", "106": "/objetos-pronombres/estacion-hero.webp", "107": "/grammar-worlds/verb-city.webp", "110": "/catalog-thumbnails/layers-workshop.webp", "111": "/catalog-thumbnails/sentence-assembly.webp", "112": "/catalog-thumbnails/detail-studio.webp", "113": "/catalog-thumbnails/positions-gallery.webp", "114": "/catalog-thumbnails/second-version-lab.webp", "115": "/catalog-thumbnails/change-line.webp", "116": "/catalog-thumbnails/editor-table.webp", "117": "/catalog-thumbnails/connection-panel.webp", "118": "/catalog-thumbnails/two-readings-archive.webp", "119": "/catalog-thumbnails/action-camera.webp", "140": "/grammar-worlds/verb-city.webp", "141": "/past-b1/surf-perfecto.webp", "142": "/past-b1/surf-indefinido.webp", "143": "/past-b1/surf-imperfecto.webp", "144": "/catalog-thumbnails/future-city.webp", "145": "/la-isla-vota/island-command-table-v1.webp", "146": "/catalog-thumbnails/conditionals-path.webp", "147": "/past-b1/surf-perfecto.webp", "148": "/subjuntivo/alicia-hero.webp", "149": "/subjuntivo/alicia-hero.webp", "150": "/subjuntivo/wonderland-garden.webp", "151": "/subjuntivo/alicia-hero.webp", "152": "/catalog-thumbnails/conditional-multiverse.webp", "153": "/catalog-thumbnails/future-city.webp", "154": "/past-b1/surf-indefinido.webp", "155": "/subjuntivo/wonderland-garden.webp", "156": "/subjuntivo/wonderland-garden.webp", "211": "/grammar-worlds/adverb-tower.webp", "212": "/grammar-worlds/pronoun-central.webp", "213": "/grammar-worlds/adverb-tower.webp", "214": "/catalog-thumbnails/conditionals-path.webp", "217": "/catalog-thumbnails/connection-panel.webp", "218": "/catalog-thumbnails/positions-gallery.webp", "219": "/catalog-thumbnails/conditionals-path.webp", "220": "/catalog-thumbnails/connection-panel.webp", "230": "/grammar-classroom/previews/desde-hace-duracion.webp", "231": "/grammar-classroom/previews/por-para-razones-objetivos.webp", "232": "/grammar-classroom/previews/pasiva-impersonal-informar.webp", "233": "/grammar-classroom/previews/estilo-indirecto-transmitir.webp", "234": "/grammar-classroom/previews/relativos-con-preposicion.webp", "235": "/grammar-classroom/previews/consecuencias-tan-tanto.webp", "239": "/grammar-classroom/previews/clase-inicial.webp"};
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
  {
    // 2026-10-21: Indonesia (ID 24) became a 3D world like Estados Unidos (four regions, twenty
    // places, A0–B1; behaviour covered by tests/paises-3d.test.mjs). The map of the 38 provinces (A1)
    // stays inside it (?vista=atlas, app/indonesia-fantastica/Atlas.tsx); route, ID and PRO access are unchanged.
    id: 24,
    path: '/indonesia-fantastica',
    // Undone first: it is the latest change to the files it shares (before ID 25).
    latest: true,
    files: /^(?:app\/indonesia-fantastica\/|app\/escucha-3d\/content\/indonesia\/|tests\/paises-3d\.test\.mjs$)/,
    restore: {
      levels: [['A0', 'A1', 'A2', 'B1'], undefined],
      displayLevel: ['A0–B1', undefined],
      subtitle: ["Un viaje en 3D por Bali, Java, Sumatra y Komodo.", "38 provincias reales, 380 preguntas y recursos bilingües para hablar desde cero"],
      tag: ["3D · 4 regiones · 20 lugares · A0–B1", "380 preguntas"],
      goals: [["Conversar con personajes en veinte lugares reales de Indonesia", "Decidir, reaccionar a sorpresas y responder preguntas de tu nivel, de A0 a B1", "Comprender una escucha por región y comparar formas de vivir"], ["Responder preguntas simples desde el primer minuto", "Usar wordbanks bilingües sin frenar la conversación", "Hablar de lugares, comida, cultura, naturaleza y planes de viaje reales"]],
      warmup: ["Elige una isla en el mapa y di qué lugar quieres visitar.", "Elige una provincia o deja que el archipiélago elija por ti."],
      explanation: ["Un mundo 3D con Bali, Java, Sumatra y Komodo con Flores. En cada isla caminas por cinco lugares y hablas con su gente: una situación, una decisión, una sorpresa y preguntas con ayuda, en A0, A1, A2 o B1. El mapa de las 38 provincias sigue disponible.", "Una aventura 1000% conversacional por las 38 provincias reales de Indonesia, con contenido cultural auténtico y una experiencia visual fantástica."],
    },
    edits: {
      'app/lesson-catalog.ts': [[NEW_24_ROW, OLD_24_ROW]],
      'tests/level-cleanup.test.mjs': [["// Indonesia (24) left this list in 2026-10-21: its 3D world has a genuinely authored A0.\nconst movedLessonIds = [16, 19, 26, 27, 38, 201];", "const movedLessonIds = [16, 19, 24, 26, 27, 38, 201];"], ["[24,25,29,", "[25,29,"], ["includes('A0')).length,17);", "includes('A0')).length,16);"]],
    },
  },
  {
    // 2026-10-21: Israel (ID 25) became a 3D world like Estados Unidos (four regions, twenty
    // places, A0–B1; behaviour covered by tests/paises-3d.test.mjs). The layered map of 14 stations (B1)
    // stays inside it (?vista=atlas, app/israel-en-capas/Atlas.tsx); route, ID and PRO access are unchanged.
    id: 25,
    path: '/israel-en-capas',
    // Undone first: it is the latest change to the files it shares (before ID 29).
    latest: true,
    files: /^(?:app\/israel-en-capas\/|app\/escucha-3d\/content\/israel\/|tests\/paises-3d\.test\.mjs$)/,
    restore: {
      levels: [['A0', 'A1', 'A2', 'B1'], undefined],
      displayLevel: ['A0–B1', undefined],
      subtitle: ["Un viaje en 3D por Tel Aviv, Jerusalén, el Norte y el Sur.", "14 destinos y lentes culturales, 98 preguntas B1 y un mapa para pensar hablando"],
      tag: ["3D · 4 regiones · 20 lugares · A0–B1", "98 preguntas"],
      goals: [["Conversar con personajes en veinte lugares reales de Israel", "Decidir, reaccionar a sorpresas y responder preguntas de tu nivel, de A0 a B1", "Comprender una escucha por región y comparar formas de vivir"], ["Comparar lugares, ritmos de vida y perspectivas culturales", "Explicar opiniones con razones, ejemplos y matices", "Usar vocabulario B1 para hablar de paisajes, idiomas, comida, comunidad e innovación"]],
      warmup: ["Elige una región en el mapa y di qué lugar quieres visitar.", "Elige un punto del mapa o una lente cultural y explica qué te gustaría descubrir."],
      explanation: ["Un mundo 3D con Tel Aviv y Jaffa, Jerusalén, el Norte y el Sur. En cada región caminas por cinco lugares y hablas con su gente: una situación, una decisión, una sorpresa y preguntas con ayuda, en A0, A1, A2 o B1. El mapa de las 14 estaciones en capas sigue disponible.", "Una clase conversacional por capas: cada destino presenta un dato real y abre preguntas B1 para observar, comparar, tomar postura e imaginar soluciones."],
    },
    edits: {
      'app/lesson-catalog.ts': [[NEW_25_ROW, OLD_25_ROW]],
      'tests/level-cleanup.test.mjs': [["[25,29,", "[29,"], ["includes('A0')).length,16);", "includes('A0')).length,15);"], ["assert.equal(a1Lessons.length, 75);", "assert.equal(a1Lessons.length, 74);"]],
    },
  },
  {
    // 2026-10-21: Suiza (ID 29) became a 3D world like Estados Unidos (four regions, twenty
    // places, A0–B1; behaviour covered by tests/paises-3d.test.mjs). The relief map of the
    // 26 cantons (B1) stays inside it (?vista=atlas, app/suiza-en-relieve/Atlas.tsx);
    // route, ID and PRO access are unchanged.
    id: 29,
    path: '/suiza-en-relieve',
    // Undone first: it is the latest change to the files it shares (before ID 30).
    latest: true,
    files: /^(?:app\/suiza-en-relieve\/|app\/escucha-3d\/content\/suiza\/|tests\/paises-3d\.test\.mjs$)/,
    restore: {
      levels: [['A0', 'A1', 'A2', 'B1'], undefined],
      displayLevel: ['A0–B1', undefined],
      subtitle: ["Un viaje en 3D por Zúrich, Ginebra, el Tesino y los Alpes.", "26 cantones, 104 lugares reales y 260 detonadores para descubrir una Suiza nada típica"],
      tag: ["3D · 4 regiones · 20 lugares · A0–B1", "260 preguntas"],
      goals: [["Conversar con personajes en veinte lugares reales de Suiza", "Decidir, reaccionar a sorpresas y responder preguntas de tu nivel, de A0 a B1", "Comprender una escucha por región y comparar formas de vivir"], ["Sostener respuestas B1 con razones y ejemplos", "Comparar formas de vivir, lenguas, paisajes y decisiones locales", "Usar vocabulario bilingüe para proponer soluciones y expresar matices"]],
      warmup: ["Elige una región en el mapa y di qué lugar quieres visitar.", "Elige un cantón en el mapa real y anticipa qué decisión cotidiana podría aparecer allí."],
      explanation: ["Un mundo 3D con Zúrich, Ginebra y el lago Lemán, el Tesino y los Alpes. En cada región caminas por cinco lugares y hablas con su gente: una situación, una decisión, una sorpresa y preguntas con ayuda, en A0, A1, A2 o B1. El mapa en relieve de los 26 cantones sigue disponible.", "Una expedición conversacional por los 26 cantones: cada territorio abre cuatro lugares concretos con contexto local, una pregunta propia y seis preguntas centrales para desarrollar respuestas B1."],
    },
    edits: {
      'app/lesson-catalog.ts': [[NEW_29_ROW, OLD_29_ROW]],
      'tests/level-cleanup.test.mjs': [["[29,30,32,33,36,210,", "[30,32,33,36,210,"], ["includes('A0')).length,15);", "includes('A0')).length,14);"], ["assert.equal(a1Lessons.length, 74);", "assert.equal(a1Lessons.length, 73);"]],
    },
  },
  {
    // 2026-10-21: Australia (ID 30) became a 3D world like Estados Unidos (four regions, twenty
    // places, A0–B1; behaviour covered by tests/paises-3d.test.mjs). The atlas of the eight
    // territories (A2–B1) stays inside it (?vista=atlas, app/australia-en-movimiento/Atlas.tsx);
    // route, ID and PRO access are unchanged.
    id: 30,
    path: '/australia-en-movimiento',
    // Undone first: it is the latest change to the files it shares (before ID 33).
    latest: true,
    files: /^(?:app\/australia-en-movimiento\/|app\/escucha-3d\/content\/australia\/|tests\/paises-3d\.test\.mjs$)/,
    restore: {
      levels: [['A0', 'A1', 'A2', 'B1'], ['A2', 'B1']],
      displayLevel: ['A0–B1', 'A2–B1'],
      subtitle: ['Un viaje en 3D por Sídney, Melbourne, Queensland y el Outback.', '8 territorios, 48 preguntas nuevas y un atlas 3D investigado con fuentes australianas'],
      tag: ['3D · 4 regiones · 20 lugares · A0–B1', '48 preguntas'],
      goals: [["Conversar con personajes en veinte lugares reales de Australia", "Decidir, reaccionar a sorpresas y responder preguntas de tu nivel, de A0 a B1", "Comprender una escucha por región y comparar formas de vivir"], ["Responder preguntas A2 con una idea, una razón y un detalle", "Entrar de forma gradual en preguntas B1 simples", "Explorar lugares, decisiones y contrastes reales de los ocho territorios australianos"]],
      warmup: ['Elige una región en el mapa y di qué lugar quieres visitar.', 'Elige un territorio sobre el relieve o deja que Australia elija por ti.'],
      explanation: ['Un mundo 3D con Nueva Gales del Sur, Victoria, Queensland y el Outback. En cada región caminas por cinco lugares y hablas con su gente: una situación, una decisión, una sorpresa y preguntas con ayuda, en A0, A1, A2 o B1. El atlas de los ocho territorios sigue disponible.', 'Una expedición conversacional A2–B1 con mapa 3D por capas, rutas reales, wordbanks bilingües y una animación propia para cada pregunta.'],
    },
    edits: {
      'app/lesson-catalog.ts': [[NEW_30_ROW, OLD_30_ROW]],
      'tests/level-cleanup.test.mjs': [["[30,32,33,36,210,", "[32,33,36,210,"], ["includes('A0')).length,14);", "includes('A0')).length,13);"], ["assert.equal(a1Lessons.length, 73);", "assert.equal(a1Lessons.length, 72);"]],
      'tests/conversation-family-rendering.test.mjs': [["['app/australia-en-movimiento/Atlas.tsx',{},", "['app/australia-en-movimiento/page.tsx',{},"], ["readFile('app/australia-en-movimiento/Atlas.tsx','utf8')", "readFile('app/australia-en-movimiento/page.tsx','utf8')"]],
    },
  },
  {
    // 2026-10-21: Irlanda (ID 33) became a 3D world like Estados Unidos (four regions, twenty
    // places, A0–B1; behaviour covered by tests/paises-3d.test.mjs). The relief map of the
    // 26 counties (B1) stays inside it (?vista=atlas, app/irlanda-en-relieve/Atlas.tsx);
    // route, ID and PRO access are unchanged.
    id: 33,
    path: '/irlanda-en-relieve',
    // Undone first: it is the latest change to the files it shares (before ID 32).
    latest: true,
    files: /^(?:app\/irlanda-en-relieve\/|app\/escucha-3d\/content\/irlanda\/|tests\/paises-3d\.test\.mjs$)/,
    restore: {
      levels: [['A0', 'A1', 'A2', 'B1'], undefined],
      displayLevel: ['A0–B1', undefined],
      subtitle: ['Un viaje en 3D por Dublín, Galway, Kerry y Cork.', '26 condados, 104 lugares reales y 260 detonadores para descubrir la República de Irlanda condado por condado'],
      tag: ['3D · 4 regiones · 20 lugares · A0–B1', '260 preguntas'],
      goals: [["Conversar con personajes en veinte lugares reales de Irlanda", "Decidir, reaccionar a sorpresas y responder preguntas de tu nivel, de A0 a B1", "Comprender una escucha por región y comparar formas de vivir"], ["Sostener respuestas B1 con razones, ejemplos y comparaciones", "Distinguir los 26 condados de la República y sus cuatro provincias históricas", "Hablar de costa, lengua irlandesa, vivienda, turismo, patrimonio, movilidad y vida rural"]],
      warmup: ['Elige una región en el mapa y di qué lugar quieres visitar.', 'Elige un condado en el mapa real y anticipa qué decisión local podría aparecer allí.'],
      explanation: ['Un mundo 3D con Dublín, Galway y Connemara, Kerry y Cork. En cada región caminas por cinco lugares y hablas con su gente: una situación, una decisión, una sorpresa y preguntas con ayuda, en A0, A1, A2 o B1. El mapa en relieve de los 26 condados sigue disponible.', 'Una expedición conversacional por los 26 condados tradicionales de la República de Irlanda: cada territorio abre cuatro lugares concretos, una pregunta propia y seis preguntas centrales para desarrollar respuestas B1.'],
    },
    edits: {
      'app/lesson-catalog.ts': [[NEW_33_ROW, OLD_33_ROW]],
      'tests/level-cleanup.test.mjs': [["[32,33,36,210,", "[32,36,210,"], ["includes('A0')).length,13);", "includes('A0')).length,12);"], ["assert.equal(a1Lessons.length, 72);", "assert.equal(a1Lessons.length, 71);"]],
    },
  },
  {
    // 2026-10-21: Reino Unido (ID 32) became a 3D world like Estados Unidos (four nations,
    // twenty places, A0–B1; behaviour covered by tests/paises-3d.test.mjs). The relief map
    // of the twelve areas (A1 and B1) stays inside it (?vista=atlas, app/reino-unido-en-relieve/Atlas.tsx);
    // route, ID and PRO access are unchanged.
    id: 32,
    path: '/reino-unido-en-relieve',
    // Undone first: it is the latest change to the files it shares (before ID 210).
    latest: true,
    files: /^(?:app\/reino-unido-en-relieve\/|app\/escucha-3d\/content\/uk\/|tests\/paises-3d\.test\.mjs$)/,
    restore: {
      levels: [['A0', 'A1', 'A2', 'B1'], ['A1', 'B1']],
      displayLevel: ['A0–B1', 'A1 · B1'],
      subtitle: ['Un viaje en 3D por las cuatro naciones.', '12 territorios y 48 lugares reales con recorridos de conversación A1 y B1'],
      tag: ['3D · 4 naciones · 20 lugares · A0–B1', '12 territorios · 48 lugares'],
      goals: [NEW_32_GOALS, OLD_32_GOALS],
      explanation: [NEW_32_EXPLANATION, OLD_32_EXPLANATION],
    },
    edits: {
      'app/lesson-catalog.ts': [[NEW_32_HEAD, OLD_32_HEAD], [`goals:${JSON.stringify(NEW_32_GOALS)}`, `goals:${JSON.stringify(OLD_32_GOALS)}`], [`explanation:"${NEW_32_EXPLANATION}"`, `explanation:"${OLD_32_EXPLANATION}"`]],
      'tests/level-cleanup.test.mjs': [["[32,36,210,223,", "[36,210,223,"], ["includes('A0')).length,12);", "includes('A0')).length,11);"]],
      'tests/conversation-family-rendering.test.mjs': [["['app/reino-unido-en-relieve/Atlas.tsx',{},", "['app/reino-unido-en-relieve/page.tsx',{},"]],
      'tests/uk-relief-levels.test.mjs': [["readFile('app/reino-unido-en-relieve/Atlas.tsx', 'utf8')", "readFile('app/reino-unido-en-relieve/page.tsx', 'utf8')"], ['assert.match(seed, /level:"B1",levels:\\["A0","A1","A2","B1"\\]/);', 'assert.match(seed, /level:"B1",levels:\\["A1","B1"\\]/);']],
    },
  },
  {
    // 2026-10-21: México (ID 210) became a 3D world like Estados Unidos (four states, twenty
    // places, A0–B1; behaviour covered by tests/paises-3d.test.mjs). The 32-entity map stays
    // inside it (?vista=atlas) and the route, ID and FREE access are unchanged.
    id: 210,
    path: '/mexico',
    // Undone first: it is the latest change to the files it shares (before ID 36).
    latest: true,
    files: /^(?:app\/mexico\/|app\/mundo-3d\/|tests\/paises-3d\.test\.mjs$)/,
    restore: {
      levels: [['A0', 'A1', 'A2', 'B1'], undefined],
      displayLevel: ['A0–B1', undefined],
      subtitle: ['Un viaje en 3D por cuatro estados.', '32 estados y entidades para descubrir México mientras hablas de tu propia vida'],
      tag: ['3D · 4 estados · 20 lugares · A0–B1', '32 territorios · conversación B1'],
      goals: [NEW_210_GOALS, OLD_210_GOALS],
      explanation: [NEW_210_EXPLANATION, OLD_210_EXPLANATION],
    },
    edits: {
      'app/lesson-catalog.ts': [[NEW_210_HEAD, OLD_210_HEAD], [`goals:${JSON.stringify(NEW_210_GOALS)}`, `goals:${JSON.stringify(OLD_210_GOALS)}`], [`explanation:"${NEW_210_EXPLANATION}"`, `explanation:"${OLD_210_EXPLANATION}"`]],
      'package.json': [[' tests/estados-unidos-3d.test.mjs tests/paises-3d.test.mjs"', ' tests/estados-unidos-3d.test.mjs"']],
      'tests/level-cleanup.test.mjs': [["[36,210,223,", "[36,223,"], ["includes('A0')).length,11);", "includes('A0')).length,10);"], ["assert.equal(a1Lessons.length, 71);", "assert.equal(a1Lessons.length, 70);"], ["const authored=relative.includes('/mundo/')||", "const authored="]],
    },
  },
  {
    // 2026-10-21: the free United States flagship became a 3D world (six states, thirty places,
    // A0–B1; behaviour covered by tests/estados-unidos-3d.test.mjs). The 50-state atlas stays
    // inside it (?vista=atlas) and the route, ID and FREE access are unchanged.
    id: 36,
    path: '/estados-unidos-a2-b1',
    // Undone first: it is the latest change to the files it shares.
    latest: true,
    files: /^(?:app\/estados-unidos-a2-b1\/|app\/mundo-3d\/|tests\/estados-unidos-3d\.test\.mjs$)/,
    restore: {
      levels: [['A0', 'A1', 'A2', 'B1'], ['A2', 'B1']],
      displayLevel: ['A0–B1', 'A2–B1'],
      subtitle: ['Un viaje en 3D por seis estados.', '50 estados. 50 formas de vivir.'],
      tag: ['3D · 6 estados · 30 lugares · A0–B1', '50 estados · 300 preguntas A2/B1'],
      goals: [NEW_36_GOALS, OLD_36_GOALS],
      explanation: [NEW_36_EXPLANATION, OLD_36_EXPLANATION],
    },
    edits: {
      'app/lesson-catalog.ts': [[NEW_36_LINE, OLD_36_LINE]],
      'package.json': [[' tests/country-atlas-ui.test.mjs tests/estados-unidos-3d.test.mjs"', ' tests/country-atlas-ui.test.mjs"']],
      'tests/level-cleanup.test.mjs': [["[36,223,226,227,228,229,236,237,238,240].includes(lesson.id)", "[223,226,227,228,229,236,237,238,240].includes(lesson.id)"], ["assert.equal(lessons.filter(l=>l.levels?.includes('A0')).length,10);", "assert.equal(lessons.filter(l=>l.levels?.includes('A0')).length,9);"], ["assert.equal(a1Lessons.length, 70);", "assert.equal(a1Lessons.length, 69);"], ["const authored=relative.startsWith('app/estados-unidos-a2-b1/')||relative.startsWith('app/mundo-3d/')||relative.startsWith('app/the-sound-map/')||", "const authored=relative.startsWith('app/the-sound-map/')||"]],
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
  for (const repair of repairs.filter(item => item.latest && item.edits[path])) {
    let text = bytes.toString('utf8');
    for (const [after, before] of repair.edits[path]) {
      assert.equal(text.split(after).length - 1, 1, `one ${repair.id} repair edit in ${path}`);
      text = text.replace(after, before);
    }
    bytes = Buffer.from(text);
  }
  // Undo the latest additive lessons in reverse order before the grammar snapshot.
  for (const addition of additions.filter(item=>item.id===300||item.id===242||item.id===241||item.id===240||item.id===239||item.id===238||item.id===237||item.id===236)) {
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
  const steps = [...additions.filter(item=>item.id!==300&&item.id!==236&&item.id!==237&&item.id!==238&&item.id!==239&&item.id!==240&&item.id!==241&&item.id!==242), ...repairs.filter(item => !item.latest)].flatMap(item => item.edits[path] || []);
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
    if (lesson.category === 'Gramática' && OLD_GRAMMAR_IMAGES[lesson.id]) {
      assert.equal(lesson.image, `/grammar-thumbnails/${lesson.id}.webp`, `grammar thumbnail for ${lesson.id}`);
      lesson = {...lesson, image: OLD_GRAMMAR_IMAGES[lesson.id]};
    }
    const repair = repairs.find(item => item.id === lesson.id && item.path === lesson.path);
    if (!repair) return lesson;
    const restored = {...lesson};
    for (const [field, [now, before]] of Object.entries(repair.restore)) {
      assert.deepEqual(lesson[field], now, `approved ${field} for lesson ${lesson.id}`);
      if (before === undefined) delete restored[field]; else restored[field] = before;
    }
    return restored;
  });
}
