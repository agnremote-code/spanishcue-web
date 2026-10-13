import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
// Refuses a Worker release whose D1 lacks any table or index of drizzle/0012_homework_errors.sql.
const batches=JSON.parse(readFileSync(process.argv[2],'utf8'));
const names=new Set(batches.flatMap(batch=>batch.results||[]).map(row=>row.name));
const sql=readFileSync('drizzle/0012_homework_errors.sql','utf8');
const expected=[...sql.matchAll(/CREATE (?:TABLE|INDEX) IF NOT EXISTS `?([A-Za-z0-9_]+)`?/g)].map(match=>match[1]);
assert.ok(expected.length>=3,'0012 must declare the homework tables');
const missing=expected.filter(name=>!names.has(name));
assert.deepEqual(missing,[],'Deployed D1 is missing Homework error objects; refusing Worker release');
console.log('Verified Homework error schema: '+expected.length+' objects present.');
