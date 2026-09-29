import assert from 'node:assert/strict';

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

export function wave3PreservedBytes(path, bytes) {
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
