import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
// Refuses a Worker release whose D1 lacks the account favorites table it reads and writes.
const batches=JSON.parse(readFileSync(process.argv[2],'utf8'));
const names=batches.flatMap(batch=>batch.results||[]).map(row=>row.name).sort();
assert.deepEqual(names,['created_at','lesson_id','user_id'],'lesson_favorites columns must match drizzle/0013_lesson_favorites.sql');
console.log('Verified lesson_favorites schema: '+names.length+' columns.');
