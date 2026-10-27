import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
// Refuses a Worker release whose D1 lacks the academy tables (drizzle/0016 + 0017) the /academias form and panel use.
const batches=JSON.parse(readFileSync(process.argv[2],'utf8'));
const names=batches.flatMap(batch=>batch.results||[]).map(row=>row.name).sort();
assert.deepEqual(names,['academy_demo_requests','institution_invitations','institution_members','institutions'],'academy tables must match drizzle/0016 and drizzle/0017');
console.log('Verified academy tables: '+names.join(', ')+'.');
