import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
// Refuses a Worker release whose D1 lacks the student ↔ Homework link table «Mis alumnos» reads and writes.
const batches=JSON.parse(readFileSync(process.argv[2],'utf8'));
const names=batches.flatMap(batch=>batch.results||[]).map(row=>row.name).sort();
assert.deepEqual(names,['created_at','learner_id','owner_id','student_id'],'student_homework_links columns must match drizzle/0014_student_homework_links.sql');
console.log('Verified student_homework_links schema: '+names.length+' columns.');
