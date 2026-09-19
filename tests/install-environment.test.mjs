import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('dependency install uses the project-scoped tool home without repurposing HOME', async () => {
  const installScript = await readFile('scripts/install-ci.sh', 'utf8');

  assert.match(installScript, /SITES_TOOL_HOME/);
  assert.doesNotMatch(installScript, /\$\{HOME\}/);
});
