import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const source=readFileSync('docs/partners/schema.sql','utf8');
const dump="CREATE TABLE users(id TEXT PRIMARY KEY,email TEXT);INSERT INTO users VALUES('teacher','teacher@example.test');CREATE TABLE billing_payments(id INTEGER PRIMARY KEY,amount_cents INTEGER);INSERT INTO billing_payments VALUES(1,1990);CREATE TABLE d1_migrations(id INTEGER,name TEXT,applied_at INTEGER);INSERT INTO d1_migrations VALUES(1,'existing.sql',1);";

test('only the exact owner-approved partner SQL and production binding are accepted',async()=>{
 const m=await import('../../scripts/partners-migration-operation.mjs');
 assert.doesNotThrow(()=>m.verifyAuthorization(source,`apply partners ${m.APPROVED_HASH}`));
 assert.throws(()=>m.verifyAuthorization(source+'\n',`apply partners ${m.APPROVED_HASH}`));
 assert.throws(()=>m.verifyAuthorization(source,'apply arbitrary'));
 assert.doesNotThrow(()=>m.verifyBinding({bindings:[{name:'DB',type:'d1',id:m.PRODUCTION_ID},{name:'AUTOESTUDIO_SHARE_SECRET',type:'secret_text'}]},m.PRODUCTION_ID));
 assert.throws(()=>m.verifyBinding({bindings:[{name:'DB',type:'d1',id:'wrong'}]},m.PRODUCTION_ID));
 assert.throws(()=>m.verifyBinding({bindings:[{name:'DB',type:'d1',id:m.PRODUCTION_ID}]},m.PRODUCTION_ID));
});

test('restore and two forward applications preserve every existing schema object and row',async()=>{
 const m=await import('../../scripts/partners-migration-operation.mjs');
 const report=m.rehearse(dump,source);
 assert.equal(report.integrity,'ok');assert.equal(report.foreignKeys,'ok');assert.equal(report.existingDataUnchanged,true);assert.equal(report.existingSchemaUnchanged,true);assert.equal(report.idempotent,true);assert.equal(report.existingTablesVerified,3);
});

test('complete partner schema is recognized, partial or incompatible schema is refused',async()=>{
 const m=await import('../../scripts/partners-migration-operation.mjs');
 const expected=m.expectedSchema(source);
 assert.equal(expected.length,8);assert.equal(m.verifyPartnerObjects([],source),'absent');assert.equal(m.verifyPartnerObjects(expected,source),'ready');
 assert.throws(()=>m.verifyPartnerObjects(expected.slice(0,3),source));
 assert.throws(()=>m.verifyPartnerObjects(expected.map((r,i)=>i===0?{...r,sql:'CREATE TABLE wrong(id TEXT)'}:r),source));
 assert.throws(()=>m.verifyPartnerObjects(expected.map(r=>({...r,sql:r.sql.replaceAll("'pending'","'PENDING'")})),source),'quoted SQL defaults/check values must keep their case');
 assert.throws(()=>m.verifyPartnerObjects(expected.map(r=>({...r,sql:r.sql.replaceAll("'pending'","'pend ing'")})),source),'quoted SQL values must retain internal whitespace');
});
