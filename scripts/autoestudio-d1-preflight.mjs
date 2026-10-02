// Read-only provider preflight + disposable restore. Never applies production SQL.
import assert from 'node:assert/strict';
import { readFile,writeFile,mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import { cloudflareRead } from './autoestudio-release-gate.mjs';
const hash=value=>createHash('sha256').update(value).digest('hex');
const id=process.env.PRODUCTION_D1_ID;
const report={sourceSha:process.env.GITHUB_SHA,createdAt:new Date().toISOString(),readOnlyProduction:true};
await mkdir('migration-evidence',{recursive:true});
try {
 assert.match(id||'',/^[a-f0-9-]{36}$/,'Missing production D1 identifier');
 const settings=await cloudflareRead('/workers/scripts/spanishcue/settings');
 const binding=settings.bindings?.find(b=>b.name==='DB'&&b.type==='d1');
 assert.equal(binding?.id,id,'Production Worker binding differs from configured production D1');
 const database=await cloudflareRead(`/d1/database/${id}`);
 assert.equal(database.name,'spanishcue-production','Unexpected production database name');
 report.binding={worker:'spanishcue',binding:'DB',id,name:database.name};
 report.signingSecretPresent=settings.bindings.some(b=>b.type==='secret_text'&&b.name==='AUTOESTUDIO_SHARE_SECRET');
 const query=async sql=>{const result=await cloudflareRead(`/d1/database/${id}/query`,{sql});assert.ok(result[0]?.success!==false,'Read-only D1 query failed');return result[0].results;};
 const schema=await query("SELECT type,name,sql FROM sqlite_master WHERE sql IS NOT NULL AND name NOT LIKE 'sqlite_%' ORDER BY name");
 const reports=schema.find(r=>r.name==='lesson_reports');
 report.lessonReportsExists=Boolean(reports);
 report.existingShareObjects=schema.filter(r=>r.name.startsWith('autoestudio_')).map(r=>r.name);
 report.ledgerTables=schema.filter(r=>r.type==='table'&&/migration/i.test(r.name)).map(r=>r.name);
 if(report.ledgerTables.includes('d1_migrations'))report.ledger=await query('SELECT id,name,applied_at FROM d1_migrations ORDER BY id');
 report.releaseBlockers=[];
 if(!reports)report.releaseBlockers.push('Canonical 0010 lesson_reports table is absent; do not apply 0011');
 assert.equal(report.existingShareObjects.length,0,'0011 objects already exist; reconcile, never retry blindly');
 assert.ok(!report.ledger?.some(r=>r.name==='0011_autoestudio_share.sql'),'0011 ledger/schema disagreement');
 const sql=await readFile('drizzle/0011_autoestudio_share.sql','utf8');
 report.sqlSha256=hash(sql);
 assert.equal(report.sqlSha256,'4a040f541101ea47766b1403ad933accd8cc1afb73b4c8dec2f04d30118ca51d','Forward SQL changed');
 report.recoveryBookmark=await cloudflareRead(`/d1/database/${id}/time_travel/bookmark`);
 const priorTimestamp=new Date(Date.now()-24*60*60*1000).toISOString();
 report.recoveryWindow={verifiedFrom:priorTimestamp,bookmark:await cloudflareRead(`/d1/database/${id}/time_travel/bookmark?timestamp=${encodeURIComponent(priorTimestamp)}`),note:'Verified lower bound of 24 hours; no restoration performed'};
 let exported,bookmark;
 for(let attempt=0;attempt<60;attempt++){
  exported=await cloudflareRead(`/d1/database/${id}/export`,{output_format:'polling',dump_options:{no_schema:false,no_data:false,tables:[]},...(bookmark?{current_bookmark:bookmark}:{})});
  assert.notEqual(exported.status,'error','Provider export failed');
  if(exported.status==='complete')break;
  bookmark=exported.at_bookmark;
  await new Promise(resolve=>setTimeout(resolve,1000));
 }
 assert.equal(exported.status,'complete','Provider export did not complete');
 // Provider-managed export URL is intentionally never logged or uploaded.
 const response=await fetch(exported.result.signed_url,{signal:AbortSignal.timeout(60000)});
 assert.ok(response.ok,'Provider export download failed');
 const dump=await response.text();
 report.backup={provider:'Cloudflare D1 native export',bookmark:exported.at_bookmark||bookmark,createdAt:new Date().toISOString(),bytes:Buffer.byteLength(dump),sha256:hash(dump),downloadWindow:'one hour; refresh before execution if expired'};
 const db=new DatabaseSync(':memory:');
 try{
  db.exec(dump);
  assert.equal(db.prepare('PRAGMA integrity_check').get().integrity_check,'ok','Export restore failed integrity check');
  assert.equal(db.prepare('PRAGMA foreign_key_check').all().length,0,'Export has foreign key violations');
  const tables=db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' AND name NOT LIKE '_cf_%'").all().map(r=>r.name);
  const fingerprint=()=>Object.fromEntries(tables.map(name=>{const rows=db.prepare('SELECT * FROM "'+name.replaceAll('"','""')+'"').all().map(row=>JSON.stringify(row,(_,v)=>typeof v==='bigint'?String(v):v)).sort();return [name,{count:rows.length,sha256:hash(rows.join('\n'))}];}));
  const before=fingerprint();
  db.exec('PRAGMA foreign_keys=ON');db.exec(sql);
  assert.deepEqual(fingerprint(),before,'Existing data changed after local rehearsal');
  assert.equal(db.prepare('PRAGMA foreign_key_check').all().length,0,'Forward SQL broke foreign keys');
  report.restoreTest={integrity:'ok',foreignKeys:'ok',existingTablesVerified:tables.length,existingDataUnchanged:true,forwardSql:'passed'};
 }finally{db.close();}
 report.exactCommand=`npx wrangler d1 execute ${id} --remote --file=drizzle/0011_autoestudio_share.sql`;
 report.status=report.releaseBlockers.length?'blocked':'prepared-awaiting-exact-owner-authorization';
 if(report.releaseBlockers.length)process.exitCode=1;
} catch(error){report.status='blocked';report.blocker=error.message;process.exitCode=1;}
await writeFile('migration-evidence/preflight.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
