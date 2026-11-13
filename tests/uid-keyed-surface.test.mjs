import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

// BOARD-DECISION-005 (2026-11-12): teacher data must be keyed by the internal
// account id (accountIdFromHeaders / session.accountId), not the Firebase UID.
// The existing UID-keyed paths are frozen here until the planned re-keying
// (decision §3, steps A-C). A new file that reads the Firebase UID fails this
// test: key the new data by accountId instead, or update the decision first.
const FROZEN = new Map([
  // the trust boundary and the session builder themselves
  ['app/firebase-session.ts', 'sets the verified UID header'],
  ['app/access-policy.ts', 'builds session.userId from the header'],
  // a provider-subject use, not a data key
  ['app/cuenta/page.tsx', 'resolves the account from the provider subject'],
  // the five UID-keyed entry points (decision §1)
  ['app/student-tracker/server.ts', 'students, class_records'],
  ['app/api/roster/route.ts', 'student_homework_links'],
  ['app/api/live-class/route.ts', 'live_class_sessions'],
  ['app/autoestudio/share/server.ts', 'autoestudio_* and homework_* tables'],
  ['app/api/lesson-reports/route.ts', 'lesson_reports'],
]);

const uidRead = /\b(?:session|user)\??\.userId\b|x-chespanish-user-uid|VERIFIED_UID_HEADER/;

function sources(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === 'node_modules' ? [] : sources(path);
    return /\.(?:ts|tsx|mts|js|mjs)$/.test(entry.name) ? [path] : [];
  });
}

test('no new server code reads the Firebase UID as a data key (BOARD-DECISION-005)', () => {
  const readers = ['app', 'db', 'worker', 'server'].flatMap(sources)
    .filter(file => !file.startsWith('app/api/auth/'))
    .filter(file => uidRead.test(readFileSync(file, 'utf8')));
  const unexpected = readers.filter(file => !FROZEN.has(file));
  assert.deepEqual(unexpected, [], 'new Firebase-UID reader(s): key teacher data by accountId (see docs/board/decisions/BOARD-DECISION-005-uid-rekeying.md)');
  // Keep the list honest: a path that stops reading the UID leaves the list.
  const stale = [...FROZEN.keys()].filter(file => !readers.includes(file));
  assert.deepEqual(stale, [], 'these paths no longer read the UID; remove them from FROZEN');
});

// Routes that reach the UID through a helper instead of reading it directly
// (Alejandro's review, 2026-11-12): the tracker's authenticatedOwnerId and every
// importer of the Autoestudio share server, whose teacher() returns the UID.
const FROZEN_CONSUMERS = new Set([
  'app/api/class-records/[id]/route.ts',
  'app/api/class-records/route.ts',
  'app/api/students/[id]/route.ts',
  'app/api/students/export/route.ts',
  'app/api/students/route.ts',
  'app/autoestudio/errors/server.ts',
  'app/api/autoestudio/claim/route.ts',
  'app/api/autoestudio/errors/route.ts',
  'app/api/autoestudio/events/route.ts',
  'app/api/autoestudio/learners/[id]/errors/route.ts',
  'app/api/autoestudio/learners/[id]/notes/route.ts',
  'app/api/autoestudio/learners/[id]/route.ts',
  'app/api/autoestudio/passes/[id]/route.ts',
  'app/api/autoestudio/passes/route.ts',
  'app/api/autoestudio/progress/route.ts',
  'app/api/autoestudio/session/route.ts',
  'app/s/[token]/route.ts',
  'worker/index.ts', // learner share-session cookie and /s redeem, not teacher()
]);
const helperUse = /\bauthenticatedOwnerId\b|from\s*['"][^'"]*autoestudio\/share\/server['"]|from\s*['"]\.\.\/share\/server['"]/;

test('no new route reaches the Firebase UID through the tracker or share helpers (BOARD-DECISION-005)', () => {
  const consumers = ['app', 'db', 'worker', 'server'].flatMap(sources)
    .filter(file => !FROZEN.has(file))
    .filter(file => helperUse.test(readFileSync(file, 'utf8')));
  const unexpected = consumers.filter(file => !FROZEN_CONSUMERS.has(file));
  assert.deepEqual(unexpected, [], 'new consumer(s) of a UID-keyed helper: key new teacher data by accountId (BOARD-DECISION-005)');
  const stale = [...FROZEN_CONSUMERS].filter(file => !consumers.includes(file));
  assert.deepEqual(stale, [], 'these paths no longer use a UID-keyed helper; remove them from FROZEN_CONSUMERS');
});

test('the guard pattern catches the known UID-read shapes', () => {
  for (const sample of ['return session.userId;', 'session?.userId', 'if(!user.userId)', "h.get('x-chespanish-user-uid')", 'headers.set(VERIFIED_UID_HEADER, uid)']) {
    assert.match(sample, uidRead, sample);
  }
  for (const sample of ['session.accountId', 'account.userId', 'accountIdFromHeaders(h)']) {
    assert.doesNotMatch(sample, uidRead, sample);
  }
  for (const sample of ["const owner = authenticatedOwnerId(request);", "import { listPasses } from '../../../autoestudio/share/server';", 'import { teacher } from "../share/server";']) {
    assert.match(sample, helperUse, sample);
  }
});
