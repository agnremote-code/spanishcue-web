import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import * as C from '../app/la-feria-de-villaluz/look-contract.mjs';

const people3d = readFileSync('app/noche-abierta/people3d.ts', 'utf8');
const union = name => new Set([...people3d.match(new RegExp(`export type ${name} =([^;]+);`))[1].matchAll(/'([^']+)'/g)].map(m => m[1]));

// Every distinguishing feature here passed the 2026-10-21 D6 render
// (vestido, amarillo, rubio); «mochila» is only named (presence, marginal).
const base = { body: 'f', age: 'child', top: 'dress', topColor: 'amarillo', bottom: 'shorts', bottomColor: 'azul', hair: 'short', hairColor: 'rubio' };
const good = () => ({
  id: 'demo', circle: 1, kind: 'find', target: 't',
  text: 'Atención, por favor: buscamos a una niña rubia. Lleva un vestido amarillo y una mochila.',
  described: ['age:child', 'hairColor:rubio', 'top:dress', 'topColor:amarillo', 'extras:backpack'],
  figures: [
    { ...base, id: 't', extras: ['backpack'] },
    { ...base, id: 'a', topColor: 'verde', extras: ['backpack'] },
    { ...base, id: 'b', top: 'tshirt', extras: ['backpack'] },
    { ...base, id: 'c', hairColor: 'moreno' },
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
  fail(s => { s.described = ['age:child', 'extras:backpack', 'top:dress']; }, /matches every described feature/);
  fail(s => { s.figures[1].top = 'tshirt'; s.figures[3].top = 'tshirt'; s.described = ['top:dress', 'topColor:amarillo']; }, /alone rules out every distractor/);
  fail(s => { s.figures = s.figures.slice(0, 3); }, /3–4 distractors/);
  fail(s => { s.text += ' Lleva zapatos rojos.'; }, /zapatos/);
  fail(s => { s.text = s.text.replace('mochila', 'mochila roja'); }, /at random/);
  fail(s => { s.text = s.text.replace('vestido amarillo', 'vestido'); }, /never says 'topColor:amarillo'/);
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

test('AC3 feedback agrees with «la persona», also for a male target (regression)', () => {
  const man = { body: 'm', age: 'adult', top: 'shirt', topColor: 'verde', bottom: 'pants', bottomColor: 'negro', hair: 'short', hairColor: 'rubio', pose: 'sit' };
  const set = {
    id: 'hombre', circle: 6, kind: 'find', target: 't',
    text: 'Buscamos a un hombre rubio y alto. Está sentado y lleva una camisa verde.',
    described: ['hairColor:rubio', 'height:tall', 'pose:sit'],
    figures: [
      { ...man, id: 't', height: 'tall' },
      { ...man, id: 'a', hairColor: 'moreno', height: 'tall', pose: 'stand' },
      { ...man, id: 'b', height: 'short' },
      { ...man, id: 'c', hairColor: 'pelirrojo', height: 'short' },
    ],
  };
  // a and c differ in rubio (legible); b only in height, which no longer
  // distinguishes (D6), so the feedback names the unmatched feature anyway.
  const expected = { a: 'es rubia', b: 'es alta', c: 'es rubia' };
  for (const [id, words] of Object.entries(expected)) {
    const text = C.feedbackFor(set, id);
    assert.equal(text, `No, no es esa persona. La persona del aviso ${words}.`, id);
  }
  // Every adjective a feedback sentence can carry, for a man: never masculine after «La persona».
  for (const feature of ['hairColor:rubio', 'hairColor:pelirrojo', 'hairColor:canoso', 'hair:bald', 'height:tall', 'height:short', 'pose:sit']) {
    const said = C.predicate(feature, set.figures[0], {}, { subject: 'persona' });
    assert.doesNotMatch(said, /\b(rubio|pelirrojo|canoso|moreno|castaño|calvo|alto|bajo|sentado)\b/, `${feature}: ${said}`);
  }
  // Nouns still name the figure: «es un niño», not «es una niña».
  assert.equal(C.predicate('age:child', { ...man, id: 'n', age: 'child' }, {}, { subject: 'persona' }), 'es un niño');
  // The 2D aria-label keeps agreeing with the figure itself.
  assert.equal(C.predicate('hairColor:rubio', set.figures[0]), 'es rubio');
});

test('D6 (2026-10-21 render): every contract value has a rating, and only legible values distinguish', () => {
  for (const [key, attr] of Object.entries(C.ATTRIBUTES)) for (const value of Object.keys(attr.values)) assert.ok(C.D6.ratings[key]?.[value], `${key}:${value} rated`);
  for (const key of ['topColor', 'bottomColor']) for (const value of Object.keys(C.COLOURS)) assert.ok(C.D6.ratings[key][value], `${key}:${value} rated`);
  for (const value of Object.keys(C.HAIR_COLOURS)) assert.ok(C.D6.ratings.hairColor[value], `hairColor:${value} rated`);
  assert.match(C.D6.method, /not the G5\(b\) real-device check/);
  const person = { id: 'p', body: 'f', age: 'adult', top: 'tshirt', topColor: 'azul', bottom: 'pants', bottomColor: 'gris', hair: 'short', hairColor: 'moreno' };
  // A value rated marginal/illegible never rules out a distractor that lacks it.
  const swap = { age: ['young', 'child'], body: ['f', 'm'], hair: ['long', 'bald'], hairColor: ['castano', 'rubio'], height: ['tall', 'short'], pose: ['sit', 'guitar'], holds: ['umbrella', 'suitcase'], top: ['coat', 'apron'], bottom: ['shorts', 'skirt'], bottomColor: ['marron', 'rojo'] };
  for (const [key, [weak, other]] of Object.entries(swap)) {
    assert.notEqual(C.D6.ratings[key][weak], 'legible', `${key}:${weak} is not legible`);
    const target = { ...person, [key]: weak }, distractor = { ...person, id: 'd', [key]: other };
    assert.equal(C.distinguishes(target, distractor, `${key}:${weak}`), false, `${key}:${weak} vs ${other}`);
  }
  for (const extra of ['backpack', 'glasses', 'scarf', 'beard', 'bag']) assert.equal(C.distinguishes({ ...person, extras: [extra] }, { ...person, id: 'd' }, `extras:${extra}`), false, extra);
  for (const colour of ['marron', 'morado', 'negro', 'naranja']) assert.equal(C.distinguishes({ ...person, bottomColor: colour }, { ...person, id: 'd', bottomColor: 'blanco' }, `bottomColor:${colour}`), false, `bottom ${colour}`);
  // Legible values still work; a dress colour is rated as a top colour.
  assert.ok(C.distinguishes({ ...person, topColor: 'rojo' }, { ...person, id: 'd', topColor: 'verde' }, 'topColor:rojo'));
  assert.ok(C.distinguishes({ ...person, top: 'dress', topColor: 'negro' }, { ...person, id: 'd', top: 'dress', topColor: 'blanco' }, 'bottomColor:negro'));
  assert.ok(C.distinguishes({ ...person, age: 'child' }, { ...person, id: 'd' }, 'age:child'));
  assert.equal(C.distinguishes({ ...person, age: 'young' }, { ...person, id: 'd', age: 'old' }, 'age:young'), false, 'young vs old');
  assert.equal(C.distinguishes({ ...person, age: 'adult' }, { ...person, id: 'd', age: 'child' }, 'age:adult'), false, 'adult is not legible as a value');
  // New confusable pairs.
  assert.equal(C.distinguishes({ ...person, top: 'dress' }, { ...person, id: 'd', top: 'coat' }, 'top:dress'), false, 'vestido/abrigo');
  assert.ok(C.distinguishes({ ...person, top: 'dress' }, { ...person, id: 'd', top: 'tshirt' }, 'top:dress'));
  assert.equal(C.distinguishes({ ...person, hair: 'short' }, { ...person, id: 'd', hair: 'long' }, 'hair:short'), false, 'long hair reads as short from the front');
  assert.equal(C.distinguishes({ ...person, bottom: 'pants' }, { ...person, id: 'd', bottom: 'shorts' }, 'bottom:pants'), false);
  for (const sleeve of ['hoodie', 'shirt', 'sweater', 'jacket']) assert.ok(C.ATTRIBUTES.top.confusable.some(([a, b]) => (a === 'tshirt' && b === sleeve) || (b === 'tshirt' && a === sleeve)), `tshirt/${sleeve}`);
});

test('D6: a non-legible value may be named but never supplies AC2 Tier A', () => {
  // Named only: «pelo largo» matches the target and the set still passes.
  const named = good();
  for (const f of named.figures) f.hair = 'long';
  named.described.push('hair:long');
  named.text = named.text.replace('niña rubia', 'niña rubia de pelo largo');
  assert.deepEqual(C.validateBuscaSet(named), []);
  // The only non-colour difference is a marginal pose (sentada, Tier A on paper): rejected.
  const sitting = good();
  for (const f of sitting.figures) { f.top = 'dress'; f.hairColor = 'rubio'; f.pose = 'sit'; }
  sitting.figures[2].pose = 'stand'; sitting.figures[3].pose = 'stand';
  sitting.figures[1].pose = 'sit';
  sitting.described = ['age:child', 'pose:sit', 'topColor:amarillo'];
  sitting.text = 'Buscamos a una niña sentada con un vestido amarillo.';
  const errors = C.validateBuscaSet(sitting);
  assert.ok(errors.some(e => /matches every described feature|every distinguishing feature is a colour/.test(e)), errors.join(' | '));
});
