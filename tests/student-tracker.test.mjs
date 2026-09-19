import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';

const result = await build({
  stdin: { contents: 'export * from "./app/student-tracker/contracts"; export * from "./app/student-tracker/service"; export * from "./app/student-tracker/server"; export * from "./app/student-tracker/time"; export * from "./app/student-tracker/drafts";', resolveDir: process.cwd() },
  bundle: true,
  write: false,
  format: 'esm',
  platform: 'node',
});

const tracker = await import('data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64'));

class MemoryRepository {
  students = new Map();
  records = new Map();

  async listStudents(ownerId) {
    return [...this.students.values()].filter((student) => student.ownerId === ownerId).map((student) => ({
      ...student,
      lastClassAt: [...this.records.values()].filter((record) => record.ownerId === ownerId && record.studentId === student.id).map((record) => record.startsAt).sort().at(-1) || null,
    }));
  }
  async getStudent(ownerId, id) {
    const student = this.students.get(id);
    return student?.ownerId === ownerId ? student : null;
  }
  async insertStudent(student) {
    this.students.set(student.id, student);
    return student;
  }
  async updateStudent(ownerId, id, patch) {
    const current = await this.getStudent(ownerId, id);
    if (!current) return null;
    const next = { ...current, ...patch };
    this.students.set(id, next);
    return next;
  }
  async deleteStudent(ownerId, id) {
    if (!(await this.getStudent(ownerId, id))) return false;
    this.students.delete(id);
    for (const [recordId, record] of this.records) if (record.ownerId === ownerId && record.studentId === id) this.records.delete(recordId);
    return true;
  }
  async listClassRecords(ownerId, studentId) {
    return [...this.records.values()].filter(
      (record) => record.ownerId === ownerId && (!studentId || record.studentId === studentId)
    );
  }
  async getClassRecord(ownerId, id) {
    const record = this.records.get(id);
    return record?.ownerId === ownerId ? record : null;
  }
  async findClassRecordByRequestKey(ownerId, requestKey) {
    return [...this.records.values()].find((record) => record.ownerId === ownerId && record.requestKey === requestKey) || null;
  }
  async findProbableDuplicate(ownerId, input) {
    return [...this.records.values()].find(
      (record) =>
        record.ownerId === ownerId &&
        record.studentId === input.studentId &&
        record.startsAt === input.startsAt &&
        (record.lessonId || '') === (input.lessonId || '') &&
        (record.freeTitle || '') === (input.freeTitle || '')
    ) || null;
  }
  async insertClassRecord(record) {
    this.records.set(record.id, record);
    return record;
  }
  async updateClassRecord(ownerId, id, patch) {
    const current = await this.getClassRecord(ownerId, id);
    if (!current) return null;
    const next = { ...current, ...patch };
    this.records.set(id, next);
    return next;
  }
  async deleteClassRecord(ownerId, id) {
    if (!(await this.getClassRecord(ownerId, id))) return false;
    this.records.delete(id);
    return true;
  }
}

const now = () => '2026-09-19T08:00:00.000Z';
let sequence = 0;
const ids = () => `00000000-0000-4000-8000-${String(++sequence).padStart(12, '0')}`;
const makeService = () => new tracker.StudentTrackerService(new MemoryRepository(), { now, id: ids, lessonIds: [101, 102] });

test('converts wall time using the selected IANA zone and survives DST boundaries', () => {
  assert.equal(tracker.zonedLocalToIso('2026-09-20T09:00', 'America/Argentina/Buenos_Aires'), '2026-09-20T12:00:00.000Z');
  assert.equal(tracker.isoToZonedLocal('2026-09-20T12:00:00.000Z', 'America/Argentina/Buenos_Aires'), '2026-09-20T09:00');
  assert.equal(tracker.zonedLocalToIso('2026-07-01T09:00', 'America/New_York'), '2026-07-01T13:00:00.000Z');
  assert.equal(tracker.zonedLocalToIso('2026-12-01T09:00', 'America/New_York'), '2026-12-01T14:00:00.000Z');
  assert.throws(() => tracker.zonedLocalToIso('2026-03-08T02:30', 'America/New_York'), tracker.ValidationError);
  assert.throws(() => tracker.zonedLocalToIso('2026-11-01T01:30', 'America/New_York'), /ocurre dos veces/);
});

test('namespaces browser drafts by authenticated teacher', () => {
  assert.notEqual(tracker.draftStorageKey('teacher-a'), tracker.draftStorageKey('teacher-b'));
  assert.match(tracker.draftStorageKey('teacher-a'), /teacher-a/);
});

test('rejects anonymous ownership and invalid or oversized student input', async () => {
  assert.throws(() => tracker.requireOwnerId(null), tracker.UnauthorizedError);
  assert.throws(() => tracker.requireOwnerId('   '), tracker.UnauthorizedError);
  const service = makeService();
  await assert.rejects(() => service.createStudent('teacher-a', { alias: '', level: 'A1', goal: '' }), tracker.ValidationError);
  await assert.rejects(
    () => service.createStudent('teacher-a', { alias: 'A'.repeat(81), level: 'A1', goal: '' }),
    tracker.ValidationError
  );
  await assert.rejects(
    () => service.createStudent('teacher-a', { alias: 'Sol', email: 'not-an-email', level: 'A1', goal: '' }),
    tracker.ValidationError
  );
});

test('derives separate owners from authenticated sessions and rejects anonymous or cross-origin requests', () => {
  const teacherRequest = (id, origin = 'https://spanishcue.test') => new Request('https://spanishcue.test/api/students', {
    method: 'POST',
    headers: {
      origin,
      'oai-authenticated-user-id': id,
      'oai-authenticated-user-email': `${id}@example.test`,
    },
  });
  assert.equal(tracker.authenticatedOwnerId(teacherRequest('teacher-a')), 'teacher-a');
  assert.equal(tracker.authenticatedOwnerId(teacherRequest('teacher-b')), 'teacher-b');
  assert.throws(() => tracker.authenticatedOwnerId(new Request('https://spanishcue.test/api/students')), tracker.UnauthorizedError);
  assert.doesNotThrow(() => tracker.requireSameOrigin(teacherRequest('teacher-a')));
  assert.throws(() => tracker.requireSameOrigin(teacherRequest('teacher-a', 'https://evil.test')), /Origen/);
});

test('isolates students, histories, updates, deletes and exports between two professors', async () => {
  const repository = new MemoryRepository();
  const service = new tracker.StudentTrackerService(repository, { now, id: ids, lessonIds: [101, 102] });
  const ada = await service.createStudent('teacher-a', { alias: '=Ada', level: 'B1', goal: 'Hablar con confianza' });
  const bruno = await service.createStudent('teacher-b', { alias: 'Bruno', level: 'A2', goal: 'Viajar' });

  assert.deepEqual((await service.listStudents('teacher-a')).map((student) => student.id), [ada.id]);
  assert.deepEqual((await service.listStudents('teacher-b')).map((student) => student.id), [bruno.id]);
  await assert.rejects(() => service.updateStudent('teacher-b', ada.id, { alias: 'Robado' }), tracker.NotFoundError);
  await assert.rejects(() => service.deleteStudent('teacher-b', ada.id), tracker.NotFoundError);

  const record = await service.createClassRecord('teacher-a', {
    studentId: ada.id,
    lessonId: 101,
    startsAt: '2026-09-20T10:30:00.000Z',
    timezone: 'Asia/Taipei',
    durationMinutes: 50,
    status: 'taught',
    pedagogicalNote: '+SUM(1,1)',
    nextStep: 'Repetir pasado',
    requestKey: 'request-a-0001',
  });
  assert.equal((await service.listClassRecords('teacher-a', ada.id))[0].id, record.id);
  assert.equal((await service.listStudents('teacher-a'))[0].lastClassAt, record.startsAt);
  await assert.rejects(() => service.listClassRecords('teacher-b', ada.id), tracker.NotFoundError);
  await assert.rejects(() => service.updateClassRecord('teacher-b', record.id, { nextStep: 'Robado' }), tracker.NotFoundError);
  await assert.rejects(() => service.deleteClassRecord('teacher-b', record.id), tracker.NotFoundError);

  const csvA = await service.exportCsv('teacher-a');
  const csvB = await service.exportCsv('teacher-b');
  assert.match(csvA, /'=Ada/);
  assert.match(csvA, /'\+SUM\(1,1\)/);
  assert.doesNotMatch(csvA, /Bruno/);
  assert.match(csvB, /Bruno/);
  assert.doesNotMatch(csvB, /Ada/);

  await service.deleteClassRecord('teacher-a', record.id);
  assert.equal((await service.listClassRecords('teacher-a')).length, 0);
  await service.deleteStudent('teacher-a', ada.id);
  assert.equal((await service.listStudents('teacher-a')).length, 0);
});

test('idempotent retries do not duplicate and probable repeats require explicit override', async () => {
  const service = makeService();
  const student = await service.createStudent('teacher-a', { alias: 'Cami', level: 'B2', goal: '' });
  const input = {
    studentId: student.id,
    freeTitle: 'Conversación libre',
    startsAt: '2026-09-21T09:00:00.000Z',
    timezone: 'America/Argentina/Buenos_Aires',
    status: 'planned',
    pedagogicalNote: 'Preparar preguntas',
    nextStep: '',
    requestKey: 'request-a-0002',
  };
  const first = await service.createClassRecord('teacher-a', input);
  const retry = await service.createClassRecord('teacher-a', input);
  assert.equal(retry.id, first.id);
  assert.equal((await service.listClassRecords('teacher-a')).length, 1);

  await assert.rejects(
    () => service.createClassRecord('teacher-a', { ...input, requestKey: 'request-a-0003' }),
    tracker.DuplicateRecordError
  );
  await service.createClassRecord('teacher-a', { ...input, requestKey: 'request-a-0004' }, { allowDuplicate: true });
  assert.equal((await service.listClassRecords('teacher-a')).length, 2);
});

test('validates class identity, dates, timezones, duration and text limits', async () => {
  const service = makeService();
  const student = await service.createStudent('teacher-a', { alias: 'Dani', level: 'C1', goal: '' });
  const base = {
    studentId: student.id,
    startsAt: '2026-09-21T09:00:00.000Z',
    timezone: 'UTC',
    status: 'taught',
    requestKey: 'request-a-0005',
  };
  await assert.rejects(() => service.createClassRecord('teacher-a', base), tracker.ValidationError);
  await assert.rejects(
    () => service.createClassRecord('teacher-a', { ...base, lessonId: -1, requestKey: 'request-a-0006' }),
    tracker.ValidationError
  );
  await assert.rejects(
    () => service.createClassRecord('teacher-a', { ...base, lessonId: 101, freeTitle: 'Ambas', requestKey: 'request-a-both' }),
    tracker.ValidationError
  );
  await assert.rejects(
    () => service.createClassRecord('teacher-a', { ...base, lessonId: 999999, requestKey: 'request-a-unknown' }),
    tracker.ValidationError
  );
  await assert.rejects(
    () => service.createClassRecord('teacher-a', { ...base, freeTitle: 'Clase', startsAt: 'ayer', requestKey: 'request-a-0007' }),
    tracker.ValidationError
  );
  await assert.rejects(
    () => service.createClassRecord('teacher-a', { ...base, freeTitle: 'Clase', timezone: 'Mars/Base', requestKey: 'request-a-0008' }),
    tracker.ValidationError
  );
  await assert.rejects(
    () => service.createClassRecord('teacher-a', { ...base, freeTitle: 'Clase', durationMinutes: 999, requestKey: 'request-a-0009' }),
    tracker.ValidationError
  );
  const lessonRecord = await service.createClassRecord('teacher-a', { ...base, lessonId: 101, requestKey: 'request-a-0010' });
  await assert.rejects(
    () => service.updateClassRecord('teacher-a', lessonRecord.id, { freeTitle: 'No puede coexistir' }),
    tracker.ValidationError
  );
});
