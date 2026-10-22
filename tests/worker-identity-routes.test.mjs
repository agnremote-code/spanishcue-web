import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

// The Worker strips every x-chespanish-* header and recreates them only where it
// resolves the session (identityAware). An API route that reads those headers on
// any other path always sees an anonymous visitor, so a PRO user gets refused.
const worker = readFileSync('worker/index.ts', 'utf8');
const expression = name => worker.match(new RegExp(`const ${name}\\s*=\\s*([^;]+);`))[1];
const administrative = new Function('pathname', `return ${expression('administrative')};`);
const identityAware = new Function('pathname', 'administrative', 'premiumAudio', 'premiumBoard', 'autoestudio', 'shareApi', 'lesson', `return ${expression('identityAware')};`);
// API routes are never lessons, boards, premium audio or autoestudio pages, so
// those predicates stay false; a route covered only by one of them needs this updated.
const isIdentityAware = pathname => identityAware(pathname, administrative(pathname), false, false, false, pathname.startsWith('/api/autoestudio/'), undefined);

const headerIdentity = /\b(?:signedIn|fullAccess|owner|accountId|email|role|getUserSession)FromHeaders\(/;
function routes(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? routes(join(dir, entry.name)) : entry.name === 'route.ts' ? [join(dir, entry.name)] : []);
}

test('every API route that reads the verified identity headers gets them from the Worker', () => {
  const readers = routes('app/api').filter(file => headerIdentity.test(readFileSync(file, 'utf8')));
  assert.ok(readers.length >= 20, `found only ${readers.length} identity-reading routes`);
  for (const file of readers) {
    const pathname = '/' + file.replace(/^app\//, '').replace(/\/route\.ts$/, '').replace(/\[[^\]]+\]/g, 'sample-id');
    assert.ok(isIdentityAware(pathname), `${pathname} reads x-chespanish-* headers but the Worker never verifies its session`);
  }
});

test('the PRO speech-attempt API is resolved with the visitor session', () => {
  assert.equal(isIdentityAware('/api/phonetics/speech-attempt'), true);
  assert.equal(isIdentityAware('/api/city-demo'), false);
});
