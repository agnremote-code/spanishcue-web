import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { build } from 'esbuild';

class D1Adapter {
  constructor(database) { this.database = database; }
  prepare(sql) {
    const database = this.database;
    return {
      bind(...params) {
        const statement = database.prepare(sql);
        return {
          async all() { return { results: statement.all(...params) }; },
          async first() { return statement.get(...params) || null; },
          async run() { const result = statement.run(...params); return { meta: { changes: Number(result.changes) } }; },
        };
      },
    };
  }
}

const database = new DatabaseSync(':memory:');
database.exec('PRAGMA foreign_keys = ON');
for (const migration of ['drizzle/0000_jazzy_fantastic_four.sql', 'drizzle/0001_student_tracker.sql']) {
  const sql = await readFile(migration, 'utf8');
  for (const statement of sql.split('--> statement-breakpoint').map((part) => part.trim()).filter(Boolean)) database.exec(statement);
}
globalThis.__TRACKER_TEST_ENV = { DB: new D1Adapter(database) };

const result = await build({
  stdin: {
    contents: `
      export { GET as studentsGet, POST as studentsPost } from './app/api/students/route';
      export { PATCH as studentPatch, DELETE as studentDelete } from './app/api/students/[id]/route';
      export { GET as exportGet } from './app/api/students/export/route';
      export { GET as recordsGet, POST as recordsPost } from './app/api/class-records/route';
      export { PATCH as recordPatch, DELETE as recordDelete } from './app/api/class-records/[id]/route';
    `,
    resolveDir: process.cwd(),
  },
  plugins: [{
    name: 'cloudflare-test-env',
    setup(buildApi) {
      buildApi.onResolve({ filter: /^cloudflare:workers$/ }, () => ({ path: 'cloudflare:workers', namespace: 'test-env' }));
      buildApi.onLoad({ filter: /.*/, namespace: 'test-env' }, () => ({ contents: 'export const env = globalThis.__TRACKER_TEST_ENV;' }));
    },
  }],
  bundle: true,
  write: false,
  format: 'esm',
  platform: 'node',
});
const routes = await import('data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64'));

const identity = (id) => ({
  origin: 'https://spanishcue.test',
  'content-type': 'application/json',
  'oai-authenticated-user-id': id,
  'oai-authenticated-user-email': `${id}@example.test`,
});
const request = (path, id, method = 'GET', body) => new Request(`https://spanishcue.test${path}`, {
  method,
  headers: id ? identity(id) : undefined,
  body: body === undefined ? undefined : JSON.stringify(body),
});

test('real HTTP handlers and migrated database isolate two teachers through create, list, export and delete', async () => {
  assert.equal((await routes.studentsGet(request('/api/students'))).status, 401);

  const createdResponse = await routes.studentsPost(request('/api/students', 'teacher-a', 'POST', { alias: 'Ada', level: 'B1', goal: 'Conversar' }));
  assert.equal(createdResponse.status, 201);
  const student = (await createdResponse.json()).student;
  assert.equal((await routes.studentsGet(request('/api/students', 'teacher-b'))).status, 200);
  assert.deepEqual((await (await routes.studentsGet(request('/api/students', 'teacher-b'))).json()).students, []);

  const crossedPatch = await routes.studentPatch(request(`/api/students/${student.id}`, 'teacher-b', 'PATCH', { alias: 'Intrusión' }), { params: Promise.resolve({ id: student.id }) });
  assert.equal(crossedPatch.status, 404);

  const classInput = {
    studentId: student.id, lessonId: 101, startsAt: '2026-09-20T12:00:00.000Z', timezone: 'America/Argentina/Buenos_Aires',
    status: 'taught', pedagogicalNote: '=nota', nextStep: 'Continuar', requestKey: 'http-request-a-1',
  };
  const classResponse = await routes.recordsPost(request('/api/class-records', 'teacher-a', 'POST', classInput));
  assert.equal(classResponse.status, 201);
  const record = (await classResponse.json()).record;
  const retried = await routes.recordsPost(request('/api/class-records', 'teacher-a', 'POST', classInput));
  assert.equal((await retried.json()).record.id, record.id);
  const allRecords = await (await routes.recordsGet(request('/api/class-records', 'teacher-a'))).json();
  assert.equal(allRecords.records.length, 1);
  const duplicate = await routes.recordsPost(request('/api/class-records', 'teacher-a', 'POST', { ...classInput, requestKey: 'http-request-a-2' }));
  assert.equal(duplicate.status, 409);
  assert.equal((await duplicate.json()).code, 'probable_duplicate');
  const intentional = await routes.recordsPost(request('/api/class-records', 'teacher-a', 'POST', { ...classInput, requestKey: 'http-request-a-3', allowDuplicate: true }));
  assert.equal(intentional.status, 201);

  const crossedHistory = await routes.recordsGet(request(`/api/class-records?studentId=${student.id}`, 'teacher-b'));
  assert.equal(crossedHistory.status, 404);
  const exportA = await (await routes.exportGet(request('/api/students/export', 'teacher-a'))).text();
  const exportB = await (await routes.exportGet(request('/api/students/export', 'teacher-b'))).text();
  assert.match(exportA, /Ada/);
  assert.match(exportA, /'=nota/);
  assert.doesNotMatch(exportB, /Ada|nota/);

  const crossedDelete = await routes.recordDelete(request(`/api/class-records/${record.id}`, 'teacher-b', 'DELETE'), { params: Promise.resolve({ id: record.id }) });
  assert.equal(crossedDelete.status, 404);
  const crossedRecordPatch = await routes.recordPatch(request(`/api/class-records/${record.id}`, 'teacher-b', 'PATCH', { nextStep: 'Intrusión' }), { params: Promise.resolve({ id: record.id }) });
  assert.equal(crossedRecordPatch.status, 404);
  assert.equal((await routes.recordDelete(request(`/api/class-records/${record.id}`, 'teacher-a', 'DELETE'), { params: Promise.resolve({ id: record.id }) })).status, 204);
  assert.equal((await routes.studentDelete(request(`/api/students/${student.id}`, 'teacher-a', 'DELETE'), { params: Promise.resolve({ id: student.id }) })).status, 204);
  assert.deepEqual((await (await routes.studentsGet(request('/api/students', 'teacher-a'))).json()).students, []);
  assert.deepEqual((await (await routes.recordsGet(request('/api/class-records', 'teacher-a'))).json()).records, []);
});
