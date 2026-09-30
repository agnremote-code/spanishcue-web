import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {mouthLibraryChanges, reconciledMainBytes, reconciledMainPaths, wave3PreservedBytes} from './helpers/wave3-preservation.mjs';
import {isApprovedAdditionPath, withoutApprovedAdditions} from './helpers/catalog-additions.mjs';

const base = JSON.parse(readFileSync('tests/fixtures/wave3-preserved.json', 'utf8'));
const mainPaths = reconciledMainPaths();
test('239 original source, test, asset, release-policy and report records retain their historical bytes', () => {
  assert.equal(base.baseCommit, '2b48f28bc7b25f19c650e52cece8f59eca352936');
  assert.equal(Object.keys(base.records).length, 239);
  for (const [path, expected] of Object.entries(base.records)) {
    if (mainPaths.has(path)) {
      const historical = execFileSync('git', ['show', `${base.baseCommit}:${path}`]);
      assert.equal(createHash('sha256').update(expected.prefixBytes ? historical.subarray(0, expected.prefixBytes) : historical).digest('hex'), expected.sha256, `${path} historical record`);
      assert.ok(withoutApprovedAdditions(path, readFileSync(path)).equals(reconciledMainBytes(path, base.baseCommit)), `${path} reconciled with main`);
      continue;
    }
    const bytes = wave3PreservedBytes(path, readFileSync(path));
    const body = expected.prefixBytes ? bytes.subarray(0, expected.prefixBytes) : bytes;
    assert.equal(createHash('sha256').update(body).digest('hex'), expected.sha256, path);
  }
});

test('Library changes are confined to the ID38 link and truthful feature copy, retaining old hash evidence', () => {
  const library = readFileSync('app/Library.tsx', 'utf8');
  for (const [before, after] of mouthLibraryChanges) {
    assert.equal(library.split(after).length - 1, 1, after);
    assert.ok(!library.includes(before), before);
  }
  const historical = JSON.parse(readFileSync('tests/fixtures/wave2-preserved.json', 'utf8'));
  const restored = wave3PreservedBytes('app/Library.tsx', Buffer.from(library));
  assert.equal(createHash('sha256').update(restored).digest('hex'), historical.records['app/Library.tsx'].sha256);
});

test('tracked changes stay within the four authorized lesson implementations and their tests/report', () => {
  const paths = execFileSync('git', ['diff', '--name-only', base.baseCommit], {encoding: 'utf8'}).trim().split('\n').filter(Boolean);
  for (const path of paths.filter((path) => !mainPaths.has(path) && !isApprovedAdditionPath(path))) assert.match(path, /^(?:app\/(?:syntax-labs\/|mouth-lab\/|clase\/38\/)|app\/Library\.tsx$|public\/audio\/mouth-lab\/|tests\/(?:wave3-[^/]+\.mjs|wave2-preservation\.test\.mjs|helpers\/wave3-preservation\.mjs|fixtures\/wave3-[^/]+\.json)$|docs\/lessons\/quality-v2-repair-status\.md$)/, path);
});
