import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';

// Regression boundary: absence of durable partner tables must fail this test.
test('partner schema is additive and retry safe, with one attribution per teacher', () => {
  assert.ok(existsSync('docs/partners/schema.sql'), 'the proposed partner schema exists');
  const sql = readFileSync('docs/partners/schema.sql', 'utf8');
  const db = new DatabaseSync(':memory:');
  db.exec(sql); db.exec(sql);
  assert.ok(db.prepare("SELECT name FROM sqlite_master WHERE name='partner_applications'").get());
  assert.ok(db.prepare("SELECT name FROM sqlite_master WHERE name='partner_attributions'").get());
  db.close();
});

async function load(path) {
  const { build } = await import('esbuild');
  const out = await build({entryPoints:[path],bundle:true,write:false,platform:'node',format:'esm'});
  return import('data:text/javascript;base64,'+Buffer.from(out.outputFiles[0].text).toString('base64'));
}
async function fixture() {
  const sqlite=new DatabaseSync(':memory:');
  sqlite.exec(`CREATE TABLE users(id TEXT PRIMARY KEY, email TEXT); CREATE TABLE billing_subscriptions(id INTEGER PRIMARY KEY,provider_plan_id TEXT);
    CREATE TABLE billing_payments(id INTEGER PRIMARY KEY,user_id TEXT,subscription_id INTEGER,provider TEXT,environment TEXT,amount_cents INTEGER,currency TEXT,status TEXT,occurred_at INTEGER);
    CREATE TABLE billing_outbox_events(payment_id INTEGER,event_name TEXT,occurred_at INTEGER);
    CREATE TRIGGER payment_confirmation AFTER INSERT ON billing_payments BEGIN INSERT INTO billing_outbox_events VALUES(NEW.id,'subscription_renewed',NEW.occurred_at); END;`);
  sqlite.exec(readFileSync('docs/partners/schema.sql','utf8'));
  const statement=(sql,values=[])=>({bind:(...v)=>statement(sql,v),first:async()=>sqlite.prepare(sql).get(...values)??null,all:async()=>({results:sqlite.prepare(sql).all(...values)}),run:async()=>({meta:{changes:Number(sqlite.prepare(sql).run(...values).changes)}})});
  const db={prepare:sql=>statement(sql),batch:async(list)=>{sqlite.exec('BEGIN');try{const out=[];for(const s of list)out.push(await s.run());sqlite.exec('COMMIT');return out;}catch(e){sqlite.exec('ROLLBACK');throw e;}}};
  return {sqlite,db};
}
const valid={name:'Ale',organization:'Partner test',email:'ale@example.test',website:'https://example.test',country:'Argentina',audience:'mentoring',message:'Profesores independientes',consent:true,requestKey:'12345678-1234-4234-8234-123456789abc'};

test('application validation rejects malformed and dangerous inputs, saves retries once',async()=>{
 const s=await load('app/partners/service.ts');const {db,sqlite}=await fixture();
 for(const change of [{email:'x'},{website:'javascript:alert(1)'},{consent:false},{country:''},{audience:'students'},{name:'a'.repeat(101)}])assert.throws(()=>s.validateApplication({...valid,...change}));
 await s.saveApplication(db,valid);await s.saveApplication(db,valid);
 assert.equal(sqlite.prepare('SELECT count(*) n FROM partner_applications').get().n,1);
});

test('signed first-touch referral cookies reject tampering, expiry and invalid codes',async()=>{
 const s=await load('app/partners/referral.ts');const secret='test-secret-with-at-least-32-characters';
 const cookie=await s.signReferral({code:'sc_1234567890abcdef12345678',clickedAt:1000},secret);
 assert.equal((await s.verifyReferral(cookie,secret,1001)).code,'sc_1234567890abcdef12345678');
 assert.equal(await s.verifyReferral(cookie+'x',secret,1001),null);
 assert.equal(await s.verifyReferral(cookie,secret,1000+31*86400),null);
 assert.equal(await s.verifyReferral(cookie,secret,999),null);
});

test('only six live monthly payments earn cents; reversal and settlements produce signed corrections',async()=>{
 const p=await load('db/partners.ts');const {db,sqlite}=await fixture();
 sqlite.prepare("INSERT INTO partner_applications(id,name,organization,email,country,audience,consent_at,created_at) VALUES('p','Ale','Org','partner@example.test','AR','mentoring',1,1)").run();
 await p.reviewApplication(db,'p','approved','Agreement 2026-11-09');
 const partner=sqlite.prepare("SELECT * FROM partner_applications WHERE id='p'").get();assert.match(partner.code,/^sc_[a-f0-9]{24}$/);
 const original=partner.code;await p.reviewApplication(db,'p','paused','Pause');await p.reviewApplication(db,'p','approved','Agreement renewed');
 assert.equal(sqlite.prepare("SELECT code FROM partner_applications WHERE id='p'").get().code,original);
 sqlite.prepare("INSERT INTO users VALUES('teacher','teacher@example.test')").run();
 sqlite.prepare("INSERT INTO users VALUES('self','partner@example.test')").run();
 await p.bindAttribution(db,'teacher',{code:original,clickedAt:100});await p.bindAttribution(db,'self',{code:original,clickedAt:100});
 assert.equal(sqlite.prepare('SELECT count(*) n FROM partner_attributions').get().n,1);
 sqlite.prepare("INSERT INTO billing_subscriptions VALUES(1,'pri_01m6k17xns79tsteephk45n7qq')").run();
 for(let i=1;i<=8;i++)sqlite.prepare("INSERT INTO billing_payments VALUES(?, 'teacher',1,'paddle','live',1990,'USD','COMPLETED',?)").run(i,100+i);
 let ledger=await p.commissionLedger(db,'p');assert.equal(ledger.length,6);
 sqlite.prepare("UPDATE billing_subscriptions SET provider_plan_id='annual' WHERE id=1").run();
 assert.equal((await p.commissionLedger(db,'p')).length,6,'a current plan change cannot erase prior confirmed monthly payments');assert.equal(ledger.reduce((n,r)=>n+r.due_cents,0),3582);
 const id='22345678-1234-4234-8234-123456789abc';
 await p.recordSettlement(db,{partnerId:'p',requestKey:id,externalReference:'bank-transfer-1',reconciliationReference:'Paddle export through 2026-11-09',expectedCents:3582});
 await p.recordSettlement(db,{partnerId:'p',requestKey:id,externalReference:'bank-transfer-1',reconciliationReference:'Paddle export through 2026-11-09',expectedCents:3582});
 assert.equal(sqlite.prepare('SELECT count(*) n FROM partner_settlements').get().n,1);
 assert.equal((await p.commissionLedger(db,'p')).reduce((n,r)=>n+r.due_cents,0),0);
 sqlite.prepare("UPDATE billing_payments SET status='REFUNDED',occurred_at=99999 WHERE id=1").run();
 ledger=await p.commissionLedger(db,'p');assert.equal(ledger.length,6);assert.equal(ledger[0].due_cents,-597);
 await p.recordAdjustment(db,'p',2,1000,'Paddle adjustment adj_2');
 assert.equal((await p.commissionLedger(db,'p')).find(r=>r.payment_id===2).earned_cents,297);
 await assert.rejects(()=>p.recordSettlement(db,{partnerId:'p',requestKey:'32345678-1234-4234-8234-123456789abc',externalReference:'bank-transfer-2',reconciliationReference:'checked',expectedCents:597}));
});

test('sandbox, annual, old and pre-attribution payments cannot earn commissions',async()=>{
 const p=await load('db/partners.ts');const {db,sqlite}=await fixture();
 sqlite.exec("INSERT INTO partner_applications(id,name,organization,email,country,audience,consent_at,created_at) VALUES('p','Ale','Org','p@example.test','AR','mentoring',1,1); INSERT INTO users VALUES('u','u@example.test'); INSERT INTO billing_subscriptions VALUES(1,'annual'),(2,'pri_01m6k17xns79tsteephk45n7qq');");
 await p.reviewApplication(db,'p','approved','terms');const code=sqlite.prepare("SELECT code FROM partner_applications").get().code;
 sqlite.exec("INSERT INTO billing_payments VALUES(1,'u',1,'paddle','live',15000,'USD','COMPLETED',1)");
 await p.bindAttribution(db,'u',{code,clickedAt:100});assert.equal(sqlite.prepare('SELECT count(*) n FROM partner_attributions').get().n,0,'existing customer cannot be referred');
 sqlite.exec("DELETE FROM billing_payments; DELETE FROM billing_outbox_events; INSERT INTO partner_attributions VALUES('u','p',100,101); INSERT INTO billing_payments VALUES(1,'u',1,'paddle','live',15000,'USD','COMPLETED',110),(2,'u',2,'paddle','sandbox',1990,'USD','COMPLETED',111),(3,'u',2,'paddle','live',1500,'USD','COMPLETED',112),(4,'u',2,'paddle','live',1990,'USD','COMPLETED',99)");
 assert.equal((await p.commissionLedger(db,'p')).length,0);
});

test('request parser rejects cross-origin, oversize streaming JSON and wrong content types',async()=>{
 const s=await load('app/partners/service.ts');
 const req=(body,headers)=>new Request('https://spanishcue.com/api/partners/apply',{method:'POST',body,headers});
 await assert.rejects(()=>s.readPartnerRequest(req('{}',{'origin':'https://evil.test','content-type':'application/json'})),e=>e.status===403);
 await assert.rejects(()=>s.readPartnerRequest(req('{}',{'origin':'https://spanishcue.com','content-type':'text/plain'})),e=>e.status===415);
 await assert.rejects(()=>s.readPartnerRequest(req(' '.repeat(8200),{'origin':'https://spanishcue.com','content-type':'application/json'})),e=>e.status===413);
 assert.deepEqual(await s.readPartnerRequest(req('{"test":1}',{'origin':'https://spanishcue.com','content-type':'application/json'})),{test:1});
 const p=await load('db/partners.ts');assert.equal(p.csvCell('=1+1'),'"\'=1+1"');assert.equal(p.csvCell('a"b'),'"a""b"');
});

test('approval reference, immutable first attribution and settlement replay conflicts are enforced',async()=>{
 const p=await load('db/partners.ts');const {db,sqlite}=await fixture();
 for(const id of ['a','b'])sqlite.prepare("INSERT INTO partner_applications(id,name,organization,email,country,audience,consent_at,created_at) VALUES(?,'Ale','Org',?,'AR','mentoring',1,1)").run(id,id+'@example.test');
 await assert.rejects(()=>p.reviewApplication(db,'a','approved',''));
 await p.reviewApplication(db,'a','approved','terms');await p.reviewApplication(db,'b','approved','terms');
 sqlite.exec("INSERT INTO users VALUES('u','u@example.test')");
 for(const id of ['a','b'])await p.bindAttribution(db,'u',{code:sqlite.prepare('SELECT code FROM partner_applications WHERE id=?').get(id).code,clickedAt:100});
 assert.equal(sqlite.prepare('SELECT partner_id FROM partner_attributions').get().partner_id,'a');
 const s=await load('app/partners/service.ts');assert.equal(await s.partnerStorageReady(db),true);
 sqlite.exec('DROP TABLE partner_audit');assert.equal(await s.partnerStorageReady(db),false);
});

test('a settlement refuses a balance that changed since the reviewed transfer amount',async()=>{
 const p=await load('db/partners.ts');const {db,sqlite}=await fixture();
 sqlite.exec("INSERT INTO partner_applications(id,name,organization,email,country,audience,consent_at,created_at) VALUES('p','Ale','Org','p@example.test','AR','mentoring',1,1); INSERT INTO users VALUES('u','u@example.test'); INSERT INTO billing_subscriptions VALUES(1,'pri_01m6k17xns79tsteephk45n7qq'); INSERT INTO partner_attributions VALUES('u','p',100,101); INSERT INTO billing_payments VALUES(1,'u',1,'paddle','live',15000,'USD','COMPLETED',110);");
 await p.reviewApplication(db,'p','approved','terms');
 await assert.rejects(()=>p.recordSettlement(db,{partnerId:'p',requestKey:'stale-amount-1234567890',externalReference:'paid-1',reconciliationReference:'checked',expectedCents:1194}),e=>e.status===409);
 assert.equal(sqlite.prepare('SELECT count(*) n FROM partner_settlements').get().n,0);
});

test('browser request keys work without secure-context randomUUID',async()=>{
 const {newPartnerRequestKey}=await load('app/partners/request-key.ts');
 const key=newPartnerRequestKey({getRandomValues:array=>crypto.getRandomValues(array)});
 assert.match(key,/^[a-f0-9]{32}$/);assert.notEqual(key,newPartnerRequestKey({getRandomValues:array=>crypto.getRandomValues(array)}));
});
