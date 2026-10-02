import test from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
const { verifyShareSchema, verifyShareBinding } = await import('../scripts/autoestudio-release-gate.mjs');
const schema=()=>{const db=new DatabaseSync(':memory:');db.exec(readFileSync('drizzle/0011_autoestudio_share.sql','utf8'));return db.prepare("SELECT type,name,sql FROM sqlite_master WHERE name LIKE 'autoestudio_%' AND sql IS NOT NULL").all();};
test('release refuses absent, partial or altered schema and accepts the exact forward SQL',()=>{
 assert.doesNotThrow(()=>verifyShareSchema(schema()));
 assert.throws(()=>verifyShareSchema([]),/migration/);
 assert.throws(()=>verifyShareSchema(schema().slice(1)),/migration/);
 const changed=schema();changed.find(r=>r.name==='autoestudio_passes').sql=changed.find(r=>r.name==='autoestudio_passes').sql.replace('CHECK(revision > 0)','');
 assert.throws(()=>verifyShareSchema(changed),/schema/);
});
test('release requires the real DB binding and server-only signing secret',()=>{
 const good=[{type:'d1',name:'DB',id:'database-id'},{type:'secret_text',name:'AUTOESTUDIO_SHARE_SECRET'}];
 assert.doesNotThrow(()=>verifyShareBinding(good,'database-id'));
 assert.throws(()=>verifyShareBinding(good,'other'),/binding/);
 assert.throws(()=>verifyShareBinding(good.slice(0,1),'database-id'),/secret/);
 assert.throws(()=>verifyShareBinding([{...good[0]},{type:'plain_text',name:'AUTOESTUDIO_SHARE_SECRET'}],'database-id'),/secret/);
});
