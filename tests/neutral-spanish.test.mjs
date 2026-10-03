import test from 'node:test';
import assert from 'node:assert/strict';
import { scanSource } from '../scripts/neutral-spanish.mjs';
const file = 'app/example.tsx';
test('detects ordinary JSX, literals, templates and JSON with useful locations', () => {
  const source = 'const a = "Escuchá"; const b = `Probá ${name}`; const c = <button aria-label="Decilo">Ahora vos</button>;';
  const findings = scanSource(source, file);
  assert.deepEqual(findings.map(f => f.token), ['Escuchá', 'Probá', 'Decilo', 'vos']);
  assert.ok(findings.every(f => f.path === file && f.line === 1 && f.text));
  assert.equal(scanSource('{"label":"Contanos"}', 'app/copy.json').length, 1);
});
test('uses Unicode token boundaries and ignores identifiers, comments and technical attributes', () => {
  assert.equal(scanSource('const vos = "vosotros nuevos avos ávos vosé"; // Escuchá\nconst ui = <div id="vos" className="mirá"/>;', file).length, 0);
  assert.equal(scanSource('const label = "¿Qué pensás? ¡Ayudanos!";', file).length, 2);
});
test('classifies ambiguous preterites for contextual review rather than automatic correction', () => {
  const findings = scanSource('const a = "Ayer escribí y seguí trabajando";', file);
  assert.deepEqual(findings.map(f => f.kind), ['context-review', 'context-review']);
});
test('ignores English properties, helpers, language ternaries and dedicated English files', () => {
  const source = 'const messages = { en: { help: "Say vos" }, es: { help: "Escuchá" } }; const a = t("Mira", "Say vos"); const b = locale === "en" ? "Say vos" : "Mira"; const es = locale === "es"; const c = es ? "Mira" : "Say vos";';
  assert.deepEqual(scanSource(source, file).map(f => f.token), ['Escuchá']);
  assert.equal(scanSource('{"help":"Say vos"}', 'app/i18n/en.json').length, 0);
});
test('exemptions are exact string and path, never blanket lesson exemptions', () => {
  const registry = { version: 1, exemptions: [{ path: file, text: 'Vos sos de Buenos Aires', reason: 'Regional contrast exercise', category: 'regional-pedagogy' }] };
  assert.equal(scanSource('const example = "Vos sos de Buenos Aires"; const button = "Escuchá";', file, registry).length, 1);
  assert.equal(scanSource('const example = "Vos sos de Buenos Aires";', 'app/other.tsx', registry).length, 2);
  assert.throws(() => scanSource('', file, { version: 1, exemptions: [{ path: file, reason: 'Entire lesson' }] }), /exact text/);
});
test('recognizes declared bilingual factories and typed tuple copy without hiding ordinary two-item arrays', () => {
  const source = 'type Pair=[string,string]; type World={ q:Pair; }; const p=(es:string,en:string)=>({es,en}); p("Mira", "Say vos"); const pairs:Pair[]=[["Mira", "Say vos"]]; const world:World={q:["Mira", "Say vos"]}; const ordinary=["Mira", "Escuchá"];';
  assert.deepEqual(scanSource(source, file).map(f=>f.token), ['Escuchá']);
});
test('recognizes English guides and neutral estás without treating them as voseo', () => {
  assert.equal(scanSource('const label="¿Cómo estás?"', file).length, 0);
  assert.equal(scanSource('const guide="Use vos in Argentine speech"', 'app/guides/example.ts').length, 0);
});
test('ignores documented English support fields in Autoestudio modules only', () => {
  const source = 'const theory={parts:[{support:["With vos, use te"],text:"Escuchá"}]};';
  assert.deepEqual(scanSource(source, 'app/autoestudio/curriculum/modules/a1/w01.ts').map(f=>f.token), ['Escuchá']);
  assert.deepEqual(scanSource(source, file).map(f=>f.token), ['vos', 'Escuchá']);
});
test('checks publicly served text files', () => {
  assert.deepEqual(scanSource('Escuchá el audio y después contanos.', 'public/instructions.txt').map(f=>f.token), ['Escuchá','contanos']);
});
