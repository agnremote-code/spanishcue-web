// One exact owner-authorized production expansion. Never part of normal deploy.
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {DatabaseSync} from 'node:sqlite';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';
import {cloudflareRead} from './autoestudio-release-gate.mjs';

export const APPROVED_HASH='7107020f64c27a1c5f2abebebf16c6d04848ff60cbb9958816cebaa6e4111a86';
export const PRODUCTION_ID='343ac454-a056-4c40-a893-f8be572665a6';
const WORKER='spanishcue',DATABASE='spanishcue-production';
const SQL_PATH='docs/partners/schema.sql';
const sha=value=>createHash('sha256').update(value).digest('hex');
// SQL keywords/identifier formatting may vary; quoted values must never change.
const normalize=sql=>sql.split(/('(?:''|[^'])*')/g).map((part,index)=>index%2?part:part.replace(/\bIF NOT EXISTS\b/gi,'').replace(/["`\[\]\s;]/g,'').toLowerCase()).join('');
const objects=db=>db.prepare("SELECT type,name,sql FROM sqlite_master WHERE sql IS NOT NULL AND name NOT LIKE 'sqlite_%' ORDER BY name").all();
const isPartner=row=>/^partner_/.test(row.name);
const publicSchema=rows=>rows.map(({type,name,sql})=>({type,name,sql:normalize(sql)})).sort((a,b)=>a.name.localeCompare(b.name));
const identifier=name=>'"'+name.replaceAll('"','""')+'"';

export function verifyAuthorization(sql,confirmation){
 assert.equal(sha(sql),APPROVED_HASH,'SQL differs from exact owner authorization');
 assert.equal(confirmation,`apply partners ${APPROVED_HASH}`,'Exact operation authorization missing');
}
export function verifyBinding(settings,id){
 assert.equal(id,PRODUCTION_ID,'Configured database differs from authorized production target');
 assert.ok(settings.bindings?.some(b=>b.name==='DB'&&b.type==='d1'&&b.id===id),'Live Worker DB binding differs');
 assert.ok(settings.bindings?.some(b=>b.name==='AUTOESTUDIO_SHARE_SECRET'&&b.type==='secret_text'),'Existing referral signing secret missing');
}
export function expectedSchema(sql){
 const db=new DatabaseSync(':memory:');try{db.exec(sql);return objects(db);}finally{db.close();}
}
export function verifyPartnerObjects(actual,sql){
 if(actual.length===0)return 'absent';
 assert.deepEqual(publicSchema(actual),publicSchema(expectedSchema(sql)),'Partner schema is partial or incompatible; no automatic repair');
 return 'ready';
}
export function rehearse(dump,sql){
 const db=new DatabaseSync(':memory:');
 try{
  db.exec('PRAGMA foreign_keys=OFF');db.exec(dump);db.exec('PRAGMA foreign_keys=ON');
  assert.equal(db.prepare('PRAGMA integrity_check').get().integrity_check,'ok','Backup restore integrity failed');
  assert.equal(db.prepare('PRAGMA foreign_key_check').all().length,0,'Backup contains foreign-key violations');
  const before=objects(db).filter(row=>!isPartner(row));
  const tables=before.filter(row=>row.type==='table'&&!row.name.startsWith('_cf_')).map(row=>row.name);
  const fingerprints=()=>Object.fromEntries(tables.map(name=>{const rows=db.prepare('SELECT * FROM '+identifier(name)).all().map(row=>JSON.stringify(row,(_,v)=>typeof v==='bigint'?String(v):v)).sort();return [name,sha(rows.join('\n'))];}));
  const data=fingerprints();
  db.exec(sql);db.exec(sql);
  assert.deepEqual(publicSchema(objects(db).filter(row=>!isPartner(row))),publicSchema(before),'Existing schema changed in rehearsal');
  assert.deepEqual(fingerprints(),data,'Existing rows changed in rehearsal');
  verifyPartnerObjects(objects(db).filter(isPartner),sql);
  assert.equal(db.prepare('PRAGMA foreign_key_check').all().length,0,'New schema breaks foreign keys');
  return {integrity:'ok',foreignKeys:'ok',existingDataUnchanged:true,existingSchemaUnchanged:true,idempotent:true,existingTablesVerified:tables.length};
 }finally{db.close();}
}

async function coordination(){
 assert.equal(process.env.GITHUB_REPOSITORY,'agnremote-code/spanishcue-web');
 assert.ok(process.env.GH_TOKEN,'Workflow identity missing');
 const get=path=>fetch('https://api.github.com/repos/agnremote-code/spanishcue-web/'+path,{headers:{Authorization:`Bearer ${process.env.GH_TOKEN}`,Accept:'application/vnd.github+json'},signal:AbortSignal.timeout(30000)});
 const lock=await get('git/ref/heads/automation/merge-lock');
 if(lock.status===200){const error=new Error('Merge lock busy; no mutation performed');error.exitCode=75;throw error;}
 assert.equal(lock.status,404,'Could not verify merge lock');
 const response=await get('contents/state.json?ref=automation/sites-release-state');
 assert.equal(response.status,200,'Could not verify release state');
 const body=await response.json();const state=JSON.parse(Buffer.from(body.content,'base64').toString('utf8'));
 assert.equal(state.enabled,false,'Retired Sites publisher is not disabled');
 assert.equal(state.status,'idle','Release state is busy; never replace a holder');
}

async function operation(){
 const sql=await readFile(SQL_PATH,'utf8');
 verifyAuthorization(sql,process.env.PARTNERS_AUTHORIZATION);
 const id=process.env.PRODUCTION_D1_ID;
 assert.equal(id,PRODUCTION_ID,'Production DB configuration mismatch');
 const report={operation:'partners-exact-additive-expansion',sourceSha:process.env.RELEASE_SOURCE_SHA||process.env.GITHUB_SHA,runId:process.env.GITHUB_RUN_ID,sqlSha256:APPROVED_HASH,startedAt:new Date().toISOString(),status:'preflight',remoteWrites:0};
 await mkdir('migration-evidence',{recursive:true});
 const save=()=>writeFile('migration-evidence/partners-operation.json',JSON.stringify(report,null,2)+'\n');
 try{
  await coordination();
  const settings=await cloudflareRead(`/workers/scripts/${WORKER}/settings`);verifyBinding(settings,id);
  const database=await cloudflareRead(`/d1/database/${id}`);assert.equal(database.name,DATABASE,'Production database name mismatch');
  report.binding={worker:WORKER,binding:'DB',id,name:DATABASE};report.signingSecretPresent=true;
  const deployments=await cloudflareRead(`/workers/scripts/${WORKER}/deployments`);
  const current=deployments.deployments?.[0];assert.ok(current?.id&&current.versions?.length,'Current production deployment not verified');
  report.previousDeployment={id:current.id,versions:current.versions};
  const query=async querySql=>{const result=await cloudflareRead(`/d1/database/${id}/query`,{sql:querySql});assert.ok(result[0]?.success!==false,'Read-only preflight query failed');return result[0].results;};
  const schema=await query("SELECT type,name,sql FROM sqlite_master WHERE sql IS NOT NULL AND name NOT LIKE 'sqlite_%' ORDER BY name");
  const ready=verifyPartnerObjects(schema.filter(isPartner),sql);
  assert.ok(schema.some(r=>r.name==='d1_migrations'),'Existing migration ledger not verified');
  const ledger=await query('SELECT id,name,applied_at FROM d1_migrations ORDER BY id');
  report.ledgerSha256=sha(JSON.stringify(ledger));
  if(ready==='ready'){
   report.status='already-applied-and-schema-verified';report.completedAt=new Date().toISOString();await save();console.log(JSON.stringify(report,null,2));return;
  }
  report.recoveryBookmark=await cloudflareRead(`/d1/database/${id}/time_travel/bookmark`);
  assert.ok(report.recoveryBookmark.bookmark,'Recovery bookmark unavailable');
  const beforeTimestamp=new Date(Date.now()-24*3600000).toISOString();
  const recovery=await cloudflareRead(`/d1/database/${id}/time_travel/bookmark?timestamp=${encodeURIComponent(beforeTimestamp)}`);
  assert.ok(recovery.bookmark,'Previous recovery point unavailable');
  report.recoveryWindow={verifiedFrom:beforeTimestamp,bookmark:recovery.bookmark};
  let exported,bookmark;
  for(let attempt=0;attempt<60;attempt++){
   exported=await cloudflareRead(`/d1/database/${id}/export`,{output_format:'polling',dump_options:{no_schema:false,no_data:false,tables:[]},...(bookmark?{current_bookmark:bookmark}:{})});
   assert.notEqual(exported.status,'error','Native export failed');if(exported.status==='complete')break;
   bookmark=exported.at_bookmark;await new Promise(resolve=>setTimeout(resolve,1000));
  }
  assert.equal(exported.status,'complete','Native export timed out');
  // Keep the provider-signed URL and customer rows inside this ephemeral runner.
  // The native export plus verified Time Travel bookmarks provide recovery.
  const response=await fetch(exported.result.signed_url,{signal:AbortSignal.timeout(60000)});assert.ok(response.ok,'Private export download failed');
  const dump=await response.text();assert.ok(dump.length>0,'Backup is empty');
  report.backup={provider:'Cloudflare D1 native export',bookmark:exported.at_bookmark||bookmark,createdAt:new Date().toISOString(),bytes:Buffer.byteLength(dump),sha256:sha(dump),rawDataUploaded:false};
  report.restoreTest=rehearse(dump,sql);
  await coordination();
  verifyBinding(await cloudflareRead(`/workers/scripts/${WORKER}/settings`),id);
  const counts=async()=>{const rows=await query("SELECT (SELECT count(*) FROM users) AS users,(SELECT count(*) FROM access_grants) AS grants,(SELECT count(*) FROM billing_payments) AS payments");return rows[0];};
  const beforeCounts=await counts();
  report.status='executing-exact-sql';report.remoteWrites='unknown-until-confirmed';await save();
  // Sole production write, no retries, ledger edits, secret changes or deployment.
  const result=spawnSync('npx',['wrangler','d1','execute',DATABASE,'--remote',`--file=${SQL_PATH}`,'--yes'],{stdio:'inherit',env:process.env,timeout:180000});
  assert.equal(result.status,0,'SQL execution uncertain or failed; reconcile before retry');report.remoteWrites=1;
  const after=await query("SELECT type,name,sql FROM sqlite_master WHERE sql IS NOT NULL AND name NOT LIKE 'sqlite_%' ORDER BY name");
  verifyPartnerObjects(after.filter(isPartner),sql);
  assert.deepEqual(publicSchema(after.filter(r=>!isPartner(r))),publicSchema(schema.filter(r=>!isPartner(r))),'Existing production schema changed');
  assert.deepEqual(await query('SELECT id,name,applied_at FROM d1_migrations ORDER BY id'),ledger,'Existing migration ledger changed');
  const afterCounts=await counts();
  // Legitimate live purchases/signups can increase counts while preflight runs.
  assert.ok(Object.keys(beforeCounts).every(k=>afterCounts[k]>=beforeCounts[k]),'Existing protected table row count decreased');
  report.protectedRowCountsUnchanged=Object.keys(beforeCounts).every(k=>afterCounts[k]===beforeCounts[k]);
  report.existingSchemaUnchanged=true;report.ledgerUnchanged=true;
  report.status='applied-and-verified';report.completedAt=new Date().toISOString();await save();
  console.log(JSON.stringify(report,null,2));
 }catch(error){report.status=report.status==='executing-exact-sql'?'execution-needs-reconciliation':'blocked-before-or-during-verification';report.completedAt=new Date().toISOString();report.failure=error.message;await save();throw error;}
}

if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
 try{if(process.argv[2]==='--check-coordination')await coordination();else {assert.equal(process.argv[2],undefined,'Unknown operation');await operation();}}
 catch(error){console.error(error.message);process.exitCode=error.exitCode||1;}
}
