import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export function migrationSensitivePaths(paths) {
  return paths.filter(path => /^(drizzle\/|db\/schema\.ts$|\.openai\/hosting\.json$|(?:.*\/)?wrangler\.[^/]+$|(?:vite|drizzle)\.config\.[^/]+$|worker-configuration\.d\.ts$|scripts\/(?:build-verified\.sh|finalize-protected-build\.mjs|validate-artifact\.sh)$)/i.test(path) ||
    /^(scripts\/|\.github\/workflows\/).*(migrat|\bd1\b)/i.test(path));
}

export function transition(state, event) {
  assert.ok(state.healthy?.sha && state.healthy?.versionId && state.healthy?.deploymentId, 'Known-good release required');
  if (event.type === 'acquire') {
    assert.equal(state.enabled, true, 'Release bootstrap is not enabled');
    assert.equal(state.status, 'idle', 'Release already locked; never steal a busy lock');
    assert.match(event.sha, /^[a-f0-9]{40}$/);
    assert.notEqual(event.sha, state.healthy.sha, 'Already deployed');
    assert.notEqual(event.sha, state.healthy.canonicalSha, 'Already reconciled with production');
    assert.ok(!(state.failedShas || []).includes(event.sha) && !(state.history || []).some(item => item.failedSha === event.sha), 'Previously failed SHA requires a new fixing merge');
    assert.ok(event.owner);
    return { ...state, status: 'busy', owner: event.owner, candidateSha: event.sha, previous: state.healthy, startedAt: new Date().toISOString() };
  }
  assert.equal(state.status, 'busy');
  assert.equal(event.owner, state.owner, 'Release owner mismatch');
  const { owner, candidateSha, previous, startedAt, ...rest } = state;
  if (event.type === 'cancel') {
    assert.equal(event.deploymentStarted, false, 'Cannot unlock an uncertain deployment');
    return { ...rest, status: 'idle' };
  }
  assert.equal(event.smokePassed, true, 'Smoke must pass before unlocking');
  let healthy;
  if (event.type === 'healthy') {
    assert.equal(event.release?.sha, candidateSha);
    assert.ok(event.release.versionId && event.release.deploymentId);
    healthy = event.release;
  } else {
    assert.equal(event.type, 'restored');
    assert.ok(event.deploymentId);
    healthy = { ...previous, deploymentId: event.deploymentId };
  }
  const record = { owner, startedAt, finishedAt: new Date().toISOString(), previous, healthy, ...(event.type === 'restored' ? { failedSha: candidateSha } : {}) };
  const failedShas = [...new Set([...(state.failedShas || []), ...(event.type === 'restored' ? [candidateSha] : [])])];
  return { ...rest, status: 'idle', healthy, failedShas, history: [...(state.history || []), record].slice(-50) };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [command, first, second] = process.argv.slice(2);
  if (command === 'classify') {
    for (const ref of [first, second]) assert.match(ref || '', /^[a-f0-9]{40}$/, 'Use complete source SHAs');
    const changed = execFileSync('git', ['diff', '--no-renames', '--name-only', '-z', first, second], { encoding: 'utf8' }).split('\0').filter(Boolean);
    const sensitive = migrationSensitivePaths(changed);
    console.log(JSON.stringify({ eligible: sensitive.length === 0, sensitive, changed }, null, 2));
    if (sensitive.length) process.exitCode = 42;
  } else if (command === 'transition') {
    console.log(JSON.stringify(transition(JSON.parse(readFileSync(first, 'utf8')), JSON.parse(readFileSync(second, 'utf8'))), null, 2));
  } else throw new Error('Usage: release-policy.mjs classify BASE_SHA HEAD_SHA | transition STATE_JSON EVENT_JSON');
}
