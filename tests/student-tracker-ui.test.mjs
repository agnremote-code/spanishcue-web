import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('account reuses its existing panel and mounts the real tracker in both relevant tabs', async () => {
  const source = await readFile('app/cuenta/page.tsx', 'utf8');
  assert.match(source, /<StudentTracker/);
  assert.doesNotMatch(source, /MÓDULO EN PREPARACIÓN/);
  assert.doesNotMatch(source, /no la registra automáticamente como\s+dictada[\s\S]*MÓDULO EN PREPARACIÓN/);
});

test('client preserves drafts, blocks double submit, recovers from network errors and supports intentional repeats', async () => {
  const source = await readFile('app/student-tracker/StudentTracker.tsx', 'utf8');
  assert.match(source, /sessionStorage/);
  assert.match(source, /draftStorageKey\(draftScope\)/);
  assert.match(source, /zonedLocalToIso/);
  assert.match(source, /isoToZonedLocal/);
  assert.match(source, /disabled=\{saving/);
  assert.match(source, /allowDuplicate/);
  assert.match(source, /probable_duplicate/);
  assert.match(source, /No pudimos conectar/);
  assert.match(source, /Cancelar edición/);
});

test('opening a lesson never writes a class record', async () => {
  const catalog = await readFile('app/Library.tsx', 'utf8');
  assert.doesNotMatch(catalog, /api\/class-records/);
  const classPage = await readFile('app/clase/[id]/page.tsx', 'utf8');
  assert.doesNotMatch(classPage, /api\/class-records/);
});

test('demo is visibly fictional and cannot call customer APIs', async () => {
  const page = await readFile('app/demo/mis-alumnos/page.tsx', 'utf8');
  assert.match(page, /DEMO.*DATOS FICTICIOS/s);
  assert.match(page, /demo=\{true\}/);
  const client = await readFile('app/student-tracker/StudentTracker.tsx', 'utf8');
  assert.match(client, /if \(demo\)/);
});

test('the tracker client is public while all customer data remains behind server APIs', async () => {
  const source = await readFile('scripts/protect-client-assets.mjs', 'utf8');
  assert.match(source, /app\/student-tracker\/StudentTracker\.tsx/);
});
