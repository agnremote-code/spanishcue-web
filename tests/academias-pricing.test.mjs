import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/academias/page.tsx', import.meta.url), 'utf8');

test('Plan Academia price approved by Ale is public on the Spanish page and in the FAQ', () => {
  assert.match(page, /'Hasta 5 profesores', 'US\$79\/mes'/);
  assert.match(page, /'Hasta 15 profesores', 'US\$149\/mes'/);
  assert.match(page, /US\$790 al año/);
  assert.match(page, /14 días de prueba/);
  assert.match(page, /\{es && <section className="academy-section academy-wrap" id="precios"/);
  assert.doesNotMatch(page, /No hay una tarifa institucional pública/);
});
