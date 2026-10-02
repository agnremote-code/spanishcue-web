import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const batches=JSON.parse(readFileSync(process.argv[2],'utf8'));
const names=batches.flatMap(batch=>batch.results||[]).map(row=>row.name).sort();
const sql=readFileSync('drizzle/0010_lesson_reports.sql','utf8');
const expected=[...sql.matchAll(/^\s*`([^`]+)`/gm)].map(match=>match[1]).sort();
assert.deepEqual(names,expected,'Deployed lesson_reports columns must match canonical PR 89; refusing incompatible Worker release');
console.log('Verified canonical lesson_reports schema: '+names.length+' columns.');
