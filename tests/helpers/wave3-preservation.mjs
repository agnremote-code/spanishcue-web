import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {withoutApprovedAdditions} from './catalog-additions.mjs';

// Keep the original Wave 2 SHA-256 expectations. Undo only the two explicitly
// authorized ID38 integrations before comparing the shared Library's old bytes.
export const mouthLibraryChanges = [
  ['conversationLessonHref(lesson, selectedLevel) || phoneticsHref(lesson.id) || (lesson.special',
   'conversationLessonHref(lesson, selectedLevel) || phoneticsHref(lesson.id) || (lesson.id === 38 ? "/clase/38" : null) || (lesson.special'],
  ['Un laboratorio inmersivo para ver dónde va la lengua, entrenar los cinco sonidos vocálicos, corregir la R y detectar hábitos que vienen del inglés y otros seis idiomas.',
   'Escuchá y contrastá pero/perro y caro/carro, practicá la colocación de la lengua y usá los sonidos en un intercambio breve. Seis estaciones originales quedan como consulta opcional.'],
];
const preservationImport = "import {wave3PreservedBytes} from './helpers/wave3-preservation.mjs';\n";
const preservationRead = ["const bytes = readFileSync(path);", "const bytes = wave3PreservedBytes(path, readFileSync(path));"];

// The same three bounded edits that let Batch 1 checks ignore approved new lessons.
const batch1AdditionEdits = [
  ["import {withoutApprovedAdditions, withoutApprovedLessons} from './catalog-additions.mjs';\n", ''],
  ['  const bytes = withoutApprovedAdditions(path, readFileSync(path));\n', '  const bytes = readFileSync(path);\n'],
  ['  return withoutApprovedLessons(lessons).map(lesson => {', '  return lessons.map(lesson => {'],
];

export function wave3PreservedBytes(path, input) {
  let bytes = withoutApprovedAdditions(path, input);
  if (path === 'tests/helpers/batch1-preservation.mjs') {
    let text = bytes.toString('utf8');
    for (const [after, before] of batch1AdditionEdits) {
      assert.equal(text.split(after).length - 1, 1, `one bounded addition edit: ${path}`);
      text = text.replace(after, before);
    }
    bytes = Buffer.from(text);
  }
  if (path !== 'app/Library.tsx' && path !== 'tests/wave2-preservation.test.mjs') return bytes;
  let text = bytes.toString('utf8');
  if (path === 'app/Library.tsx') {
    for (const [before, after] of mouthLibraryChanges) {
      if (!text.includes(after)) continue;
      assert.equal(text.split(after).length - 1, 1, `one bounded replacement: ${path}`);
      text = text.replace(after, before);
    }
  } else {
    assert.equal(text.split(preservationImport).length - 1, 1, 'exact preservation import');
    assert.equal(text.split(preservationRead[1]).length - 1, 1, 'exact preservation read');
    text = text.replace(preservationImport, '').replace(preservationRead[1], preservationRead[0]);
  }
  return Buffer.from(text);
}

// Legitimate main work merged after this line forked (5d6733a..9309626: ledger
// fix, syntax recorrido fix, session persistence, board taught category, the
// PR #74 add+revert (net zero) and the deploy-workflow fix) was reconciled on
// 2026-09-29. Those paths must equal main's bytes; package.json is
// the Wave bytes plus main's single auth-session-sync test entry.
export const reconciledMain = {base: '5d6733a9b9404bbc17bf6999530eb48ffb574a3e', head: '93096267fb5d0e434dc30f301a10fdb100bd066c'};
const packageAuthTest = [' tests/production-export-import.test.mjs && npm run test:tracker', ' tests/production-export-import.test.mjs tests/auth-session-sync.test.mjs && npm run test:tracker'];

export function reconciledMainPaths() {
  return new Set(execFileSync('git', ['diff', '--name-only', reconciledMain.base, reconciledMain.head], {encoding: 'utf8'}).trim().split('\n').filter(Boolean));
}

export function reconciledMainBytes(path, waveCommit) {
  if (path !== 'package.json') return execFileSync('git', ['show', `${reconciledMain.head}:${path}`]);
  const wave = execFileSync('git', ['show', `${waveCommit}:package.json`], {encoding: 'utf8'});
  assert.equal(wave.split(packageAuthTest[0]).length - 1, 1, 'exact package.json reconciliation anchor');
  return Buffer.from(wave.replace(packageAuthTest[0], packageAuthTest[1]));
}
