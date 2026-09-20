import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, renameSync, rmSync } from 'node:fs';
import { execFileSync, spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { migrationSensitivePaths, transition } from '../scripts/release-policy.mjs';

const healthy = { sha: 'a'.repeat(40), versionId: 'saved-good', deploymentId: 'good' };
const idle = { enabled: true, status: 'idle', healthy, history: [] };
test('disabled bootstrap cannot deploy', () => {
  assert.throws(() => transition({ ...idle, enabled: false }, { type: 'acquire', owner: 'run-1', sha: 'b'.repeat(40) }));
});
test('migration guard includes deletes, configuration and migration infrastructure', () => {
  const paths = ['drizzle/0001.sql', 'db/schema.ts', '.openai/hosting.json', 'wrangler.jsonc', 'vite.config.ts', 'scripts/finalize-protected-build.mjs', 'scripts/build-verified.sh', 'scripts/migrate-production.mjs', '.github/workflows/d1-migration.yml'];
  assert.deepEqual(migrationSensitivePaths(paths), paths);
  assert.deepEqual(migrationSensitivePaths(['app/page.tsx', 'public/a.webp']), []);
});
test('one owner acquires a release and records previous healthy before deployment', () => {
  const locked = transition(idle, { type: 'acquire', owner: 'run-1', sha: 'b'.repeat(40) });
  assert.deepEqual(locked.previous, healthy);
  assert.throws(() => transition(locked, { type: 'acquire', owner: 'run-2', sha: 'c'.repeat(40) }));
  assert.throws(() => transition(locked, { type: 'healthy', owner: 'run-2', release: healthy }));
});
test('only a matching, smoke-verified deployment advances healthy state', () => {
  const locked = transition(idle, { type: 'acquire', owner: 'run-1', sha: 'b'.repeat(40) });
  assert.throws(() => transition(locked, { type: 'healthy', owner: 'run-1', release: healthy, smokePassed: true }));
  const release = { sha: 'b'.repeat(40), versionId: 'new-version', deploymentId: 'new-deployment' };
  assert.throws(() => transition(locked, { type: 'healthy', owner: 'run-1', release }));
  assert.deepEqual(transition(locked, { type: 'healthy', owner: 'run-1', release, smokePassed: true }).healthy, release);
});
test('rollback preserves previous source and records restored deployment; failed recovery stays locked', () => {
  const locked = transition(idle, { type: 'acquire', owner: 'run-1', sha: 'b'.repeat(40) });
  assert.throws(() => transition(locked, { type: 'restored', owner: 'run-1', deploymentId: 'restored', smokePassed: false }));
  const restored = transition(locked, { type: 'restored', owner: 'run-1', deploymentId: 'restored', smokePassed: true });
  assert.equal(restored.healthy.sha, healthy.sha);
  assert.equal(restored.healthy.deploymentId, 'restored');
  assert.equal(restored.history.at(-1).failedSha, 'b'.repeat(40));
  assert.throws(() => transition(restored, { type: 'acquire', owner: 'run-2', sha: 'b'.repeat(40) }));
  assert.throws(() => transition(restored, { type: 'acquire', owner: 'run-2', sha: healthy.sha }));
  assert.throws(() => transition({ ...restored, history: [] }, { type: 'acquire', owner: 'run-2', sha: 'b'.repeat(40) }));
});
test('a migration renamed outside drizzle still blocks deployment', () => {
  const cwd = mkdtempSync(join(tmpdir(), 'release-policy-'));
  const git = (...args) => execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  const commit = () => { git('add', '.'); git('-c', 'user.name=Test', '-c', 'user.email=test@example.test', 'commit', '-m', 'fixture'); return git('rev-parse', 'HEAD'); };
  try {
    git('init'); mkdirSync(join(cwd, 'drizzle')); writeFileSync(join(cwd, 'drizzle/0001.sql'), 'CREATE TABLE test(id INTEGER);\n');
    const base = commit(); renameSync(join(cwd, 'drizzle/0001.sql'), join(cwd, 'archived.sql')); const head = commit();
    const result = spawnSync(process.execPath, [fileURLToPath(new URL('../scripts/release-policy.mjs', import.meta.url)), 'classify', base, head], { cwd, encoding: 'utf8' });
    assert.equal(result.status, 42);
    assert.ok(JSON.parse(result.stdout).sensitive.includes('drizzle/0001.sql'));
  } finally { rmSync(cwd, { recursive: true, force: true }); }
});
