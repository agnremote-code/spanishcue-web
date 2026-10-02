// Read-only deployment gate. Never creates tables, provisions secrets or repairs D1.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
const normalize=sql=>sql.replace(/\bIF NOT EXISTS\b/gi,'').replace(/["`\[\]\s;]/g,'').toLowerCase();
export function verifyShareSchema(actual){
 const db=new DatabaseSync(':memory:');
 try{
  db.exec(sourceSql);
  const expected=db.prepare("SELECT type,name,sql FROM sqlite_master WHERE name LIKE 'autoestudio_%' AND sql IS NOT NULL").all();
  assert.equal(actual.length,expected.length,'Autoestudio migration 0011 is missing or partial; dedicated D1 release required');
  for(const row of expected){const found=actual.find(r=>r.name===row.name);assert.ok(found,'Autoestudio migration object missing: '+row.name);assert.equal(normalize(found.sql),normalize(row.sql),'Autoestudio schema mismatch: '+row.name);}
 }finally{db.close();}
}
const sourceSql=await readFile(new URL('../drizzle/0011_autoestudio_share.sql',import.meta.url),'utf8');
export function verifyShareBinding(bindings,databaseId){
 assert.ok(bindings.some(b=>b.type==='d1'&&b.name==='DB'&&b.id===databaseId),'Live Worker DB binding differs from the deployment target');
 assert.ok(bindings.some(b=>b.type==='secret_text'&&b.name==='AUTOESTUDIO_SHARE_SECRET'),'Autoestudio signing secret is not provisioned on the live Worker');
}
export async function cloudflareRead(path,body){
 const account=process.env.CLOUDFLARE_ACCOUNT_ID,token=process.env.CLOUDFLARE_API_TOKEN;
 assert.ok(account&&token,'Cloudflare credentials required for read-only D1 verification');
 const response=await fetch(`https://api.cloudflare.com/client/v4/accounts/${account}${path}`,{method:body?'POST':'GET',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},...(body?{body:JSON.stringify(body)}:{}),signal:AbortSignal.timeout(60000)});
 const data=await response.json();
 assert.ok(response.ok&&data.success!==false,`Cloudflare read-only verification failed: HTTP ${response.status}; codes ${(data.errors||[]).map(e=>e.code).join(',')}`);
 return data.result;
}
export async function verifyLiveShareRelease(config){
 const [{database_id:id}]=config.d1_databases;
 const settings=await cloudflareRead(`/workers/scripts/${config.name}/settings`);
 verifyShareBinding(settings.bindings||[],id);
 const data=await cloudflareRead(`/d1/database/${id}/query`,{sql:"SELECT type,name,sql FROM sqlite_master WHERE name LIKE 'autoestudio_%' AND sql IS NOT NULL"});
 assert.ok(data[0]?.success!==false,'D1 schema read failed');
 verifyShareSchema(data[0]?.results||[]);
 console.log('Autoestudio read-only release gate passed: binding, exact 0011 schema and server secret presence.');
}
