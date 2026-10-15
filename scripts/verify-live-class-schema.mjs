import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
// Refuses a Worker release whose D1 lacks the per-student live class sessions table the grammar classes read and write.
const batches=JSON.parse(readFileSync(process.argv[2],'utf8'));
const names=batches.flatMap(batch=>batch.results||[]).map(row=>row.name).sort();
assert.deepEqual(names,['lesson_id','owner_id','saved','student_id','updated_at'],'live_class_sessions columns must match drizzle/0015_live_class_sessions.sql');
console.log('Verified live_class_sessions schema: '+names.length+' columns.');
