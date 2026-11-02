import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
import { DatabaseSync } from 'node:sqlite';
import { readFile, readdir } from 'node:fs/promises';
const load=async(contents)=>{const b=await build({stdin:{contents,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});return import(`data:text/javascript;base64,${Buffer.from(b.outputFiles[0].text).toString('base64')}`)};
const p=await load('export * from "./app/paddle-server"; export * from "./app/paddle-config"; export * from "./app/referrals-server"; export { GET as inviteRoute } from "./app/invitar/[code]/route";');
const d=await load('export * from "./db/referrals"; export * from "./db/paddle-billing"; export * from "./app/billing-config";');
const monthly='pri_01m38sk06dtyhga2d4h36rt5dc', trial='pri_01m3xv2ybze2yve1phknvm3r4b', discount='dsc_01m686383k32zpnm3t5geedqss';
const cfg={apiKey:'test',clientToken:'test',webhookSecret:'test',priceId:monthly,trialPriceId:trial,annualPriceId:p.PADDLE_ANNUAL_PRICE_ID};
const price={id:monthly,product_id:'pro_01m38sbhv4c8756pat80kfhda0',tax_mode:'internal',unit_price:{amount:'1550',currency_code:'USD'},billing_cycle:{interval:'month',frequency:1},trial_period:null};
const renewal=(total,discount_id)=>{const period={starts_at:'2026-12-02T00:00:00Z',ends_at:'2027-01-02T00:00:00Z'};const common={customer_id:'ctm_x',custom_data:{spanishcue_user_id:'u1'},items:[{quantity:1,price:structuredClone(price)}]};
 return [{...structuredClone(common),id:'txn_free',status:'completed',subscription_id:'sub_1',currency_code:'USD',billing_period:period,discount_id,details:{totals:{total}}},{...common,id:'sub_1',status:'active',current_billing_period:period}]};

test('a US$0 renewal is valid only with the owner referral discount on the monthly price',()=>{
 assert.equal(p.PADDLE_REFERRAL_DISCOUNT_ID,discount);
 const [tx,sub]=renewal('0',discount);const payment=p.paddleCompletedPayment(tx,sub,cfg);
 assert.equal(payment.amountCents,0);assert.equal(payment.referralFree,true);assert.equal(payment.isTrial,false);
 for(const [total,id] of [['0',null],['0','dsc_other'],['100',discount]]){const [t,s]=renewal(total,id);assert.equal(p.paddleCompletedPayment(t,s,cfg),null)}
 const [paid,s2]=renewal('1550',null);assert.equal(p.paddleCompletedPayment(paid,s2,cfg).referralFree,false);
 const [t3,s3]=renewal('0',discount);for(const x of [t3,s3])x.items[0].price={...price,id:trial,trial_period:{interval:'day',frequency:1,requires_payment_method:true,unit_price:{amount:'200',currency_code:'USD'}}};assert.equal(p.paddleCompletedPayment(t3,s3,cfg),null);
});
test('discount is scheduled for the next period and the checkout carries only a well-formed code',async()=>{
 const old=globalThis.fetch;const seen=[];globalThis.fetch=async(url,init)=>{seen.push({url:String(url),method:init.method,body:JSON.parse(init.body||'null')});return Response.json({data:{id:'txn_test'}})};
 try{
  await p.applyPaddleReferralDiscount(cfg,'sub_1');
  assert.equal(seen[0].method,'PATCH');assert.match(seen[0].url,/\/subscriptions\/sub_1$/);assert.deepEqual(seen[0].body,{discount:{id:discount,effective_from:'next_billing_period'}});
  await p.createPaddleCheckoutTransaction(cfg,{userId:'u1',offerCode:'founder',referralCode:'ABCD2345'});
  await p.createPaddleCheckoutTransaction(cfg,{userId:'u1',offerCode:'founder',referralCode:'bad code'});
  assert.equal(seen[1].body.custom_data.spanishcue_ref,'ABCD2345');assert.equal(seen[2].body.custom_data.spanishcue_ref,undefined);
 }finally{globalThis.fetch=old}
 assert.equal(p.paddleReferralCode({custom_data:{spanishcue_ref:'ABCD2345'}}),'ABCD2345');assert.equal(p.paddleReferralCode({custom_data:{spanishcue_ref:'abcd2345'}}),null);
 assert.equal(p.referralCodeFromCookie('a=1; spanishcue_ref=ABCD2345'),'ABCD2345');assert.equal(p.referralCodeFromCookie('spanishcue_ref=../x'),null);
});
test('invite link remembers a valid code and opens pricing; invalid codes set nothing',async()=>{
 const ok=await p.inviteRoute(new Request('https://spanishcue.com/invitar/ABCD2345'),{params:Promise.resolve({code:'ABCD2345'})});
 assert.equal(ok.status,302);assert.equal(ok.headers.get('location'),'https://spanishcue.com/pricing#invitacion');assert.match(ok.headers.get('set-cookie'),/^spanishcue_ref=ABCD2345; Path=\/; Max-Age=5184000; SameSite=Lax; Secure; HttpOnly$/);
 const bad=await p.inviteRoute(new Request('https://spanishcue.com/invitar/x'),{params:Promise.resolve({code:'<x>'})});
 assert.equal(bad.status,302);assert.equal(bad.headers.get('set-cookie'),null);
});
async function database(){const sqlite=new DatabaseSync(':memory:');for(const n of (await readdir('drizzle')).filter(n=>n.endsWith('.sql')).sort())sqlite.exec((await readFile(`drizzle/${n}`,'utf8')).replaceAll('--> statement-breakpoint',''));
 const stmt=(sql,args=[])=>({bind:(...v)=>stmt(sql,v),run:async()=>({meta:{changes:Number(sqlite.prepare(sql).run(...args).changes)}}),first:async()=>sqlite.prepare(sql).get(...args)??null,all:async()=>({results:sqlite.prepare(sql).all(...args)})});
 for(const id of ['ref','new','other'])sqlite.exec(`INSERT INTO users(id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('${id}','${id}@example.test','${id}@example.test','teacher','active',1,1,1)`);
 return {sqlite,db:{prepare:s=>stmt(s)}}}
test('referral qualifies only after a settled full payment, once, never for self-referral',async()=>{
 const {sqlite,db}=await database();const config=d.billingConfig({PAYPAL_ENV:'live'}),now=Math.floor(Date.now()/1000);
 const code=await d.referralCodeForUser(db,'ref');assert.match(code,/^[A-HJ-NP-Z2-9]{8}$/);assert.equal(await d.referralCodeForUser(db,'ref'),code);
 assert.equal(await d.registerReferral(db,code,'ref','sub_self'),null);
 assert.equal(await d.registerReferral(db,'ZZZZZZZZ','new','sub_new'),null);
 assert.equal(await d.registerReferral(db,code,'new','sub_new'),'ref');
 const other=await d.referralCodeForUser(db,'other');await d.registerReferral(db,other,'new','sub_new');
 assert.equal(sqlite.prepare('SELECT referrer_user_id r FROM referrals').all().map(x=>x.r).join(),'ref');
 assert.equal(await d.qualifyReferral(db,'new'),null);assert.equal(sqlite.prepare('SELECT count(*) n FROM referral_rewards').get().n,0);
 await d.upsertPaddleSubscription(db,{userId:'new',subscriptionId:'sub_new',priceId:monthly,offerCode:config.founderOffer.code,status:'ACTIVE'});
 await d.recordPaddleCompletedPayment(db,{userId:'new',subscriptionId:'sub_new',transactionId:'txn_1',amountCents:1550,currency:'USD',occurredAt:now,paidThrough:now+30*86400},config);
 await d.qualifyReferral(db,'new');await d.qualifyReferral(db,'new');
 assert.deepEqual(sqlite.prepare("SELECT user_id u, role, status FROM referral_rewards ORDER BY role").all().map(x=>({...x})),[{u:'new',role:'referred',status:'queued'},{u:'ref',role:'referrer',status:'queued'}]);
 assert.equal(await d.rewardableSubscription(db,'new',monthly),'sub_new');assert.equal(await d.rewardableSubscription(db,'ref',monthly),null);
 const reward=await d.nextQueuedReward(db,'new');await d.markRewardApplied(db,reward.id,'sub_new');assert.equal(await d.nextQueuedReward(db,'new'),null);
 await assert.rejects(d.recordPaddleCompletedPayment(db,{userId:'new',subscriptionId:'sub_new',transactionId:'txn_0x',amountCents:0,currency:'USD',occurredAt:now+30*86400,paidThrough:now+61*86400},config),/amount_invalid/);
 await d.recordPaddleCompletedPayment(db,{userId:'new',subscriptionId:'sub_new',transactionId:'txn_0',amountCents:0,referralFree:true,currency:'USD',occurredAt:now+30*86400,paidThrough:now+61*86400},config);
 assert.equal(sqlite.prepare('SELECT expires_at e FROM access_grants WHERE user_id = ?').get('new').e,now+61*86400);
 assert.equal(sqlite.prepare('SELECT count(*) n FROM founder_assignments').get().n,1);
 await d.markRewardUsed(db,'sub_new');assert.equal(sqlite.prepare("SELECT status FROM referral_rewards WHERE role='referred'").get().status,'used');
 assert.deepEqual({...await d.referralSummary(db,'ref')},{code,qualified:1,pending:1,used:0});
 sqlite.close();
});
test('referral tables are prepared by both deploy workflows and processing never fails a payment',async()=>{
 for(const f of ['deploy-production','deploy-staging']){const y=await readFile(`.github/workflows/${f}.yml`,'utf8');assert.match(y,/drizzle\/0019_referrals\.sql/);assert.match(y,/verify-referrals-schema\.mjs/)}
 const hook=await readFile('app/api/billing/paddle/webhook/route.ts','utf8');assert.equal((hook.match(/processReferrals\(/g)||[]).length,2);
 const server=await readFile('app/referrals-server.ts','utf8');assert.match(server,/catch \(error\)/);
 const bind=await readFile('app/api/billing/claim/bind/route.ts','utf8');assert.match(bind,/processReferrals\(/);
});
