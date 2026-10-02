import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { targetFor, authorizeOperation, verifyCoordination } from '../scripts/autoestudio-migration-operation.mjs';

const sql=readFileSync('drizzle/0011_autoestudio_share.sql','utf8');
const now=Date.now();
const evidence=()=>({
 binding:{worker:'spanishcue',id:'343ac454-a056-4c40-a893-f8be572665a6',name:'spanishcue-production'},
 lessonReportsSchemaVerified:true,existingShareObjects:[],releaseBlockers:[],
 sqlSha256:'4a040f541101ea47766b1403ad933accd8cc1afb73b4c8dec2f04d30118ca51d',
 backup:{createdAt:new Date(now).toISOString(),bytes:50084,sha256:'a'.repeat(64)},
 restoreTest:{integrity:'ok',foreignKeys:'ok',existingDataUnchanged:true,forwardSql:'passed'},
 ledgerTables:['d1_migrations'],ledger:[{name:'0009_glossy_mariko_yashida.sql'}],
});
const confirm='apply 0011 4a040f541101ea47766b1403ad933accd8cc1afb73b4c8dec2f04d30118ca51d';
test('only the approved SQL can generate the exact production invocation',()=>{
 assert.deepEqual(authorizeOperation({target:'production',confirm,sql,evidence:evidence(),now}),['wrangler','d1','execute','spanishcue-production','--remote','--file=drizzle/0011_autoestudio_share.sql']);
 assert.throws(()=>authorizeOperation({target:'production',confirm:'',sql,evidence:evidence(),now}),/authorization/);
 assert.throws(()=>authorizeOperation({target:'production',confirm,sql:sql+'\n',evidence:evidence(),now}),/SQL hash/);
});
test('stale backup, wrong binding, reports mismatch and preexisting objects stop SQL',()=>{
 for(const alter of [e=>e.backup.createdAt=new Date(now-3600000).toISOString(),e=>e.binding.id='other',e=>e.lessonReportsSchemaVerified=false,e=>e.existingShareObjects=['autoestudio_passes'],e=>e.restoreTest.foreignKeys='failed',e=>e.ledger.push({name:'0011_autoestudio_share.sql'}),e=>delete e.ledger,e=>e.ledgerTables=[]]){
  const e=evidence();alter(e);assert.throws(()=>authorizeOperation({target:'production',confirm,sql,evidence:e,now}));
 }
});
test('lock API failures never authorize mutation and active controllers stop execution',()=>{
 assert.doesNotThrow(()=>verifyCoordination(404,{enabled:false,status:'idle'}));
 for(const status of [200,403,429,500])assert.throws(()=>verifyCoordination(status,{enabled:false,status:'idle'}));
 assert.throws(()=>verifyCoordination(404,{enabled:true,status:'idle'}));
 assert.throws(()=>verifyCoordination(404,{enabled:false,status:'deploying'}));
});
test('staging cannot target production or an arbitrary database',()=>{
 assert.throws(()=>targetFor('other'));
 assert.equal(targetFor('staging').id,'23fe3c11-85f7-48e1-9dd0-d508893625c9');
 assert.throws(()=>authorizeOperation({target:'staging',confirm,sql,evidence:evidence(),now}),/binding/);
 const e=evidence();e.binding={worker:'spanishcue-staging',name:'spanishcue-staging',id:'23fe3c11-85f7-48e1-9dd0-d508893625c9'};
 assert.equal(authorizeOperation({target:'staging',confirm,sql,evidence:e,now})[3],'spanishcue-staging');
});
