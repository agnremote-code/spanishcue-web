import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(path, 'utf8');

test('migration scopes identities, foreign keys, idempotency and query indexes', async () => {
  const sql = await read('drizzle/0007_tan_selene.sql');
  assert.match(sql, /CREATE TABLE `students`/);
  assert.match(sql, /CREATE TABLE `class_records`/);
  assert.match(sql, /FOREIGN KEY \(`student_id`,`owner_id`\)/);
  assert.match(sql, /UNIQUE INDEX `class_records_owner_request_key_unique`/);
  assert.match(sql, /students_owner_status_idx/);
  assert.match(sql, /class_records_owner_student_date_idx/);
});

test('every tracker route derives the owner server-side and never accepts ownerId input', async () => {
  const paths = [
    'app/api/students/route.ts',
    'app/api/students/[id]/route.ts',
    'app/api/students/export/route.ts',
    'app/api/class-records/route.ts',
    'app/api/class-records/[id]/route.ts',
  ];
  for (const path of paths) {
    const source = await read(path);
    assert.match(source, /authenticatedOwnerId\(/, path);
    assert.doesNotMatch(source, /body\.ownerId|input\.ownerId/, path);
  }
});

test('mutable routes enforce same-origin requests and return typed tracker errors', async () => {
  for (const path of [
    'app/api/students/route.ts',
    'app/api/students/[id]/route.ts',
    'app/api/class-records/route.ts',
    'app/api/class-records/[id]/route.ts',
  ]) {
    const source = await read(path);
    assert.match(source, /requireSameOrigin\(/, path);
    assert.match(source, /trackerErrorResponse\(/, path);
  }
});

test('the worker leaves tracker ownership decisions to authenticated API routes', async () => {
  const source = await read('worker/index.ts');
  assert.doesNotMatch(source, /pathname\.startsWith\('\/api\/students'\).*ownerFromHeaders/s);
  assert.doesNotMatch(source, /pathname\.startsWith\('\/api\/class-records'\).*ownerFromHeaders/s);
});
