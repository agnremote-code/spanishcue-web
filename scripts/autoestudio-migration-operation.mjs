// Dedicated, explicitly owner-authorized 2026-10-02 operation. Not a deploy hook.
import assert from 'node:assert/strict';
import { createHash, randomBytes } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { cloudflareRead, verifyShareSchema, verifyShareBinding } from './autoestudio-release-gate.mjs';
export const approvedHash='4a040f541101ea47766b1403ad933accd8cc1afb73b4c8dec2f04d30118ca51d';
export function verifyCoordination(lockStatus,state){
 assert.equal(lockStatus,404,'Merge lock is present or its status is unknown');
 assert.equal(state.enabled,false,'Sites publisher must be disabled');
 assert.equal(state.status,'idle','Release controller must be idle');
}
async function checkCoordination(){
 assert.equal(process.env.GITHUB_REPOSITORY,'agnremote-code/spanishcue-web');
 assert.ok(process.env.GH_TOKEN,'Configured GitHub workflow token required');
 const get=path=>fetch('https://api.github.com/repos/agnremote-code/spanishcue-web/'+path,{headers:{Authorization:`Bearer ${process.env.GH_TOKEN}`,Accept:'application/vnd.github+json'},signal:AbortSignal.timeout(30000)});
 const lock=await get('git/ref/heads/automation/merge-lock');
 if(lock.status===200){console.error('Merge lock busy; no mutation allowed');process.exit(75);}
 assert.equal(lock.status,404,'Cannot verify absence of merge lock');
 const response=await get('contents/state.json?ref=automation/sites-release-state');
 assert.equal(response.status,200,'Cannot read release state');
 const result=await response.json();
 verifyCoordination(lock.status,JSON.parse(Buffer.from(result.content,'base64').toString('utf8')));
}
export function targetFor(target){
 assert.ok(['production','staging'].includes(target),'Unapproved migration target');
 return target==='production'?{worker:'spanishcue',name:'spanishcue-production',id:'343ac454-a056-4c40-a893-f8be572665a6'}:{worker:'spanishcue-staging',name:'spanishcue-staging',id:'23fe3c11-85f7-48e1-9dd0-d508893625c9'};
}
export function authorizeOperation({target,confirm,sql,evidence,now=Date.now()}){
 const expected=targetFor(target);
 assert.equal(confirm,`apply 0011 ${approvedHash}`,'Exact owner authorization is required');
 assert.equal(createHash('sha256').update(sql).digest('hex'),approvedHash,'Approved SQL hash differs');
 for(const key of ['worker','name','id'])assert.equal(evidence.binding?.[key],expected[key],'Verified binding differs');
 assert.equal(evidence.sqlSha256,approvedHash,'Preflight SQL hash differs');
 assert.equal(evidence.lessonReportsSchemaVerified,true,'Canonical reports schema must exist');
 assert.deepEqual(evidence.existingShareObjects,[],'0011 already exists; no automatic retry');
 assert.deepEqual(evidence.releaseBlockers,[],'Preflight has blockers');
 assert.ok(evidence.ledgerTables?.includes('d1_migrations'),'Recognized migration ledger required');
 assert.ok(Array.isArray(evidence.ledger)&&evidence.ledger.length>0&&evidence.ledger.every(row=>typeof row.name==='string'),'Verified migration ledger required');
 assert.ok(!evidence.ledger?.some(row=>row.name==='0011_autoestudio_share.sql'),'0011 ledger already exists');
 const age=now-Date.parse(evidence.backup?.createdAt);
 assert.ok(age>=0&&age<300000,'Fresh export within five minutes required');
 assert.ok(evidence.backup.bytes>0,'Empty backup');
 assert.match(evidence.backup.sha256,/^[a-f0-9]{64}$/,'Backup hash required');
 for(const [key,value] of Object.entries({integrity:'ok',foreignKeys:'ok',existingDataUnchanged:true,forwardSql:'passed'}))assert.equal(evidence.restoreTest?.[key],value,'Restore/rehearsal must pass');
 return ['wrangler','d1','execute',expected.id,'--remote','--file=drizzle/0011_autoestudio_share.sql'];
}
async function provisionSecret(){
 assert.equal(process.env.AUTOESTUDIO_AUTHORIZATION,`apply 0011 ${approvedHash}`,'Exact owner authorization is required');
 const expected=targetFor(process.env.AUTOESTUDIO_MIGRATION_TARGET);
 await checkCoordination();
 const settings=await cloudflareRead(`/workers/scripts/${expected.worker}/settings`);
 assert.ok(settings.bindings?.some(binding=>binding.name==='DB'&&binding.type==='d1'&&binding.id===expected.id),'Worker binding differs');
 const versions=await cloudflareRead(`/workers/scripts/${expected.worker}/versions`);
 assert.ok(versions.items?.[0]?.id,'No existing Worker version');
 const latest=await cloudflareRead(`/workers/scripts/${expected.worker}/versions/${versions.items[0].id}`);
 const current=latest.resources?.bindings?.find(binding=>binding.name==='AUTOESTUDIO_SHARE_SECRET');
 if(current)assert.equal(current.type,'secret_text','Signing key must be a server secret');
 else {
  // Creates an undeployed provider version; no traffic shift or application deploy.
  // Existing provider secrets are preserved. The new entropy stays in stdin only.
  const result=spawnSync('npx',['wrangler','versions','secret','put','AUTOESTUDIO_SHARE_SECRET','--name',expected.worker],{input:randomBytes(48).toString('base64url')+'\n',encoding:'utf8',env:process.env,timeout:180000});
  assert.equal(result.status,0,'Secret-only version preparation failed; no D1 mutation attempted');
 }
 const updated=await cloudflareRead(`/workers/scripts/${expected.worker}/settings`);
 verifyShareBinding(updated.bindings||[],expected.id);
 console.log('Independent signing secret prepared and presence verified, without application deployment: '+expected.worker);
}
async function run(){
 const target=process.env.AUTOESTUDIO_MIGRATION_TARGET;
 const expected=targetFor(target);
 const evidence=JSON.parse(await readFile('migration-evidence/preflight.json','utf8'));
 const sql=await readFile('drizzle/0011_autoestudio_share.sql','utf8');
 const args=authorizeOperation({target,confirm:process.env.AUTOESTUDIO_AUTHORIZATION,sql,evidence});
 await checkCoordination();
 const settings=await cloudflareRead(`/workers/scripts/${expected.worker}/settings`);
 verifyShareBinding(settings.bindings||[],expected.id);
 const query=async sql=>{const result=await cloudflareRead(`/d1/database/${expected.id}/query`,{sql});assert.ok(result[0]?.success!==false,'Schema read failed');return result[0].results;};
 const before=await query("SELECT type,name,sql FROM sqlite_master WHERE sql IS NOT NULL AND name NOT LIKE 'sqlite_%' ORDER BY name");
 assert.ok(!before.some(row=>row.name.startsWith('autoestudio_')),'0011 appeared after preflight; stop');
 const record={target,sourceSha:process.env.RELEASE_SOURCE_SHA||process.env.GITHUB_SHA,sqlSha256:approvedHash,command:'npx '+args.join(' '),backup:evidence.backup,startedAt:new Date().toISOString(),status:'started'};
 await writeFile('migration-evidence/operation.json',JSON.stringify(record,null,2)+'\n');
 // The sole remote D1 mutation. No retries, ledger writes, repairs or rollback.
 const result=spawnSync('npx',args,{stdio:'inherit',env:process.env,timeout:180000});
 assert.equal(result.status,0,'Exact forward operation failed; stop and reconcile, never retry SQL');
 const after=await query("SELECT type,name,sql FROM sqlite_master WHERE sql IS NOT NULL AND name NOT LIKE 'sqlite_%' ORDER BY name");
 verifyShareSchema(after.filter(row=>row.name.startsWith('autoestudio_')));
 assert.deepEqual(after.filter(row=>!row.name.startsWith('autoestudio_')),before,'Existing schema changed');
 const ledger=await query('SELECT id,name,applied_at FROM d1_migrations ORDER BY id');
 assert.deepEqual(ledger,evidence.ledger,'Ledger changed unexpectedly; never repair automatically');
 record.status='migration-verified';record.completedAt=new Date().toISOString();record.ledgerUnchanged=true;record.existingSchemaUnchanged=true;
 await writeFile('migration-evidence/operation.json',JSON.stringify(record,null,2)+'\n');
 console.log(JSON.stringify(record,null,2));
 record.status='migration-and-secret-verified';record.secretProvisionedWithoutReadingValue=true;
 await writeFile('migration-evidence/operation.json',JSON.stringify(record,null,2)+'\n');
 console.log('Exact 0011 schema, unchanged existing schema/ledger and signing secret presence verified for '+target);
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
 if(process.argv[2]==='--check-coordination')await checkCoordination();
 else if(process.argv[2]==='--provision-secret')await provisionSecret();
 else {assert.equal(process.argv[2],undefined,'Unknown operation');await run();}
}
