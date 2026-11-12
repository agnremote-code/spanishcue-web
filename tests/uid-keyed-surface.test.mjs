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

test('the guard pattern catches the known UID-read shapes', () => {
  for (const sample of ['return session.userId;', 'session?.userId', 'if(!user.userId)', "h.get('x-chespanish-user-uid')", 'headers.set(VERIFIED_UID_HEADER, uid)']) {
    assert.match(sample, uidRead, sample);
  }
  for (const sample of ['session.accountId', 'account.userId', 'accountIdFromHeaders(h)']) {
    assert.doesNotMatch(sample, uidRead, sample);
  }
});
