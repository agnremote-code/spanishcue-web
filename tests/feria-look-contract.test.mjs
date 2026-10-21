import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import * as C from '../app/la-feria-de-villaluz/look-contract.mjs';

const people3d = readFileSync('app/noche-abierta/people3d.ts', 'utf8');
const union = name => new Set([...people3d.match(new RegExp(`export type ${name} =([^;]+);`))[1].matchAll(/'([^']+)'/g)].map(m => m[1]));

const base = { body: 'f', age: 'child', top: 'tshirt', topColor: 'amarillo', bottom: 'shorts', bottomColor: 'azul', hair: 'curly', hairColor: 'castano' };
const good = () => ({
  id: 'demo', circle: 1, kind: 'find', target: 't',
  text: 'Atención, por favor: buscamos a una niña de pelo rizado. Lleva una camiseta amarilla y una mochila.',
  described: ['age:child', 'hair:curly', 'topColor:amarillo', 'extras:backpack'],
  figures: [
    { ...base, id: 't', extras: ['backpack'] },
    { ...base, id: 'a', topColor: 'verde', extras: ['backpack'] },
    { ...base, id: 'b', bottom: 'skirt', bottomColor: 'rojo', hair: 'long', hairColor: 'rubio', extras: ['backpack'] },
    { ...base, id: 'c' },
  ],
});

test('every contract value is something people3d really draws', () => {
  const sets = { age: union('Age'), top: union('Top'), bottom: union('Bottom'), hair: union('HairStyle'), pose: union('Pose') };
  for (const [key, known] of Object.entries(sets)) for (const [value, spec] of Object.entries(C.ATTRIBUTES[key].values)) assert.ok(known.has(spec.people3d), `${key}:${value} → ${spec.people3d}`);
  for (const [value, spec] of Object.entries({ ...C.ATTRIBUTES.extras.values, ...C.ATTRIBUTES.holds.values })) if (spec.people3d) assert.ok(people3d.includes(`ex.has('${spec.people3d}')`) || people3d.includes(`'${spec.people3d}'`), value);
  // Random-coloured or random-kind items stay presence-only or unavailable.
  assert.match(people3d, /ex\.has\('hat'\)\) \{\s*if \(r\(\) < 0\.5\)/, 'hat kind is random in people3d: keep it NOT_AVAILABLE');
  assert.ok(C.NOT_AVAILABLE.includes('sombrero') && C.NOT_AVAILABLE.includes('gorro'));
  for (const noun of ['bufanda', 'bolso', 'mochila']) assert.ok(C.PRESENCE_ONLY.includes(noun));
});

test('lookOf turns a figure into a fixed people3d Look', () => {
  const a = C.lookOf(good().figures[0]), b = C.lookOf(good().figures[0]);
  assert.deepEqual(a, b);
  assert.equal(a.look.topColor, C.COLOURS.amarillo.hex);
  assert.equal(a.look.age, 'child');
  assert.deepEqual(a.look.extras, ['backpack']);
  const dress = C.lookOf({ ...base, id: 'd', age: 'adult', top: 'dress', topColor: 'rojo' }).look;
  assert.equal(dress.bottom, 'skirt');
  assert.equal(dress.bottomColor, C.COLOURS.rojo.hex);
});

test('a well-built set passes and every wrong pick names a mismatched feature (AC2, AC3)', () => {
  const set = good();
  assert.deepEqual(C.validateBuscaSet(set), []);
  for (const f of set.figures.filter(f => f.id !== 't')) {
    const text = C.feedbackFor(set, f.id);
    assert.match(text, /^No, no es esa persona\. La persona del aviso (lleva|tiene|es|está) /);
  }
  assert.equal(C.feedbackFor(set, 't'), null);
});

test('the checker rejects sets that break AC2, AC4 or AM-4', () => {
  const fail = (edit, pattern) => { const s = good(); edit(s); assert.ok(C.validateBuscaSet(s).some(e => pattern.test(e)), `${pattern}: ${C.validateBuscaSet(s).join(' | ')}`); };
  fail(s => { s.described.push('topColor:azul'); }, /does not match/);
  fail(s => { s.described = ['age:child', 'extras:backpack', 'hair:curly']; }, /matches every described feature/);
  fail(s => { s.figures[1].hair = 'long'; s.figures[1].extras = []; s.figures[3].hair = 'long'; s.figures[2].hair = 'long'; s.described = ['hair:curly', 'topColor:amarillo']; }, /alone rules out every distractor/);
  fail(s => { s.figures = s.figures.slice(0, 3); }, /3–4 distractors/);
  fail(s => { s.text += ' Lleva zapatos rojos.'; }, /zapatos/);
  fail(s => { s.text = s.text.replace('mochila', 'mochila roja'); }, /at random/);
  fail(s => { s.text = s.text.replace('camiseta amarilla', 'camiseta'); }, /never says 'topColor:amarillo'/);
  fail(s => { s.figures[2].age = 'adult'; s.described = s.described.filter(f => f !== 'age:child'); }, /another age band/);
  fail(s => { s.figures[3].body = 'm'; }, /another body type/);
  fail(s => { s.figures[0].pose = 'dance'; }, /unique \(AC4\)/);
  fail(s => { s.figures[0].slot = { x: 9, z: 6 }; }, /AC4/);
  fail(s => { s.figures[1].top = 'uniform'; }, /not on the Look contract/);
  fail(s => { s.described.push('extras:earrings'); }, /AM-4/);
});

test('confusable colours never count as the difference', () => {
  const s = good();
  s.figures[1].topColor = 'naranja';
  assert.ok(C.validateBuscaSet(s).some(e => /distractor a matches every described feature/.test(e)));
});

test('location relations follow the fixed view (x to screen-right, z away)', () => {
  assert.ok(C.RELATIONS['izquierda-de'].test({ x: -2, z: 0 }, { x: 0, z: 0 }));
  assert.ok(C.RELATIONS['detras-de'].test({ x: 0, z: 2 }, { x: 0, z: 0 }));
  assert.ok(!C.RELATIONS['derecha-de'].test({ x: -2, z: 0 }, { x: 0, z: 0 }));
});
