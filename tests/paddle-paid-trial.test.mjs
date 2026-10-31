import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
const built = await build({stdin:{contents:'export * from "./app/paddle-server"; export * from "./app/paddle-config";',resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const p = await import(`data:text/javascript;base64,${Buffer.from(built.outputFiles[0].text).toString('base64')}`);
const monthly='pri_01m38sk06dtyhga2d4h36rt5dc', trial='pri_01m3xv2ybze2yve1phknvm3r4b';
const cfg={apiKey:'test',clientToken:'test',webhookSecret:'test',priceId:monthly,trialPriceId:trial};
const price=(isTrial=false)=>({id:isTrial?trial:monthly,product_id:'pro_01m38sbhv4c8756pat80kfhda0',tax_mode:'internal',unit_price:{amount:'1550',currency_code:'USD'},billing_cycle:{interval:'month',frequency:1},trial_period:isTrial?{interval:'day',frequency:1,requires_payment_method:true,unit_price:{amount:'200',currency_code:'USD'}}:null});
const pair=(isTrial=false)=>{
 const period={starts_at:'2026-10-02T00:00:00Z',ends_at:isTrial?'2026-10-03T00:00:00Z':'2026-11-02T00:00:00Z'};
 const common={customer_id:'ctm_owner',custom_data:{spanishcue_user_id:'owner'},items:[{quantity:1,price:price(isTrial)}]};
 return [{...structuredClone(common),id:'txn_test',status:'completed',subscription_id:'sub_test',currency_code:'USD',billing_period:period,details:{totals:{total:isTrial?'200':'1550'}}},{...common,id:'sub_test',status:isTrial?'trialing':'active',current_billing_period:period}];
};
test('runtime has the two distinct owner-authorized price IDs',()=>{const c=p.paddleConfig({});assert.equal(c.priceId,monthly);assert.equal(c.trialPriceId,trial)});
test('monthly and paid trial validate independently',()=>{for(const t of [false,true]){const [tx,sub]=pair(t);assert.ok(p.validatePaddleTransaction(tx,cfg,'owner'));assert.ok(p.validatePaddleSubscription(sub,cfg,'owner'));const payment=p.paddleCompletedPayment(tx,sub,cfg);assert.equal(payment.amountCents,t?200:1550);assert.equal(payment.isTrial,t);assert.equal(payment.priceId,t?trial:monthly)}});
test('rejects arbitrary trials, prices, currencies, amounts and swapped IDs',()=>{for(const edit of [x=>x.id='pri_other',x=>x.id=monthly,x=>x.trial_period.frequency=2,x=>x.trial_period.unit_price.amount='0',x=>x.trial_period.unit_price.currency_code='EUR',x=>x.unit_price.amount='1500',x=>x.billing_cycle.interval='day',x=>x.tax_mode='external',x=>x.trial_period.requires_payment_method=false]){const [tx]=pair(true);edit(tx.items[0].price);assert.equal(p.validatePaddleTransaction(tx,cfg,'owner'),false)}const [tx]=pair(false);tx.items[0].price.id=trial;assert.equal(p.validatePaddleTransaction(tx,cfg,'owner'),false)});
test('only a completed, correctly priced, owned and linked payment can grant access',()=>{for(const edit of [(tx)=>tx.status='billed',(tx)=>tx.details.totals.total='0',(tx)=>tx.currency_code='EUR',(tx)=>tx.subscription_id='sub_other',(tx)=>tx.customer_id='ctm_other',(tx,sub)=>sub.items[0].price=price(false),(tx)=>tx.billing_period.ends_at='2026-11-03T00:00:00Z']){const [tx,sub]=pair(true);edit(tx,sub);assert.equal(p.paddleCompletedPayment(tx,sub,cfg),null)}const [tx]=pair(true);assert.equal(p.validatePaddleTransaction(tx,cfg,'wrong-owner'),false)});
test('trial renewal bills base amount using SAME trial price and original payment cannot extend access',()=>{const [tx,sub]=pair(true);const originalEnd=tx.billing_period.ends_at;sub.status='active';sub.current_billing_period={starts_at:originalEnd,ends_at:'2026-11-03T00:00:00Z'};assert.equal(p.paddleCompletedPayment(tx,sub,cfg).paidThrough,Date.parse(originalEnd)/1000);tx.details.totals.total='1550';tx.billing_period=sub.current_billing_period;const payment=p.paddleCompletedPayment(tx,sub,cfg);assert.equal(payment.isTrial,false);assert.equal(payment.amountCents,1550)});
test('checkout chooses price from offer on server and never accepts arbitrary price',async()=>{const old=globalThis.fetch;const seen=[];globalThis.fetch=async(_url,init)=>{seen.push(JSON.parse(init.body));return Response.json({data:{id:'txn_test'}})};try{await p.createPaddleCheckoutTransaction(cfg,{userId:'owner',offerCode:'founder',offer:'monthly'});await p.createPaddleCheckoutTransaction(cfg,{userId:'owner',offerCode:'founder',offer:'trial'});assert.deepEqual(seen.map(x=>x.items[0].price_id),[monthly,trial]);assert.ok(seen.every(x=>x.currency_code==='USD'))}finally{globalThis.fetch=old}});

const dbBuilt = await build({stdin:{contents:'export * from "./db/paddle-billing"; export * from "./db/accounts"; export * from "./app/billing-config";',resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const dbModule=await import(`data:text/javascript;base64,${Buffer.from(dbBuilt.outputFiles[0].text).toString('base64')}`);
import { DatabaseSync } from 'node:sqlite';
import { readFile,readdir } from 'node:fs/promises';
test('paid trial grants one day, replay is idempotent, monthly conversion gets one Founder slot',async()=>{
 const sqlite=new DatabaseSync(':memory:');
 for(const n of (await readdir('drizzle')).filter(n=>n.endsWith('.sql')).sort())sqlite.exec((await readFile(`drizzle/${n}`,'utf8')).replaceAll('--> statement-breakpoint',''));
 const stmt=(sql,args=[])=>({bind:(...v)=>stmt(sql,v),run:async()=>({meta:{changes:Number(sqlite.prepare(sql).run(...args).changes)}}),first:async()=>sqlite.prepare(sql).get(...args)??null,all:async()=>({results:sqlite.prepare(sql).all(...args)})});const db={prepare:s=>stmt(s)};
 sqlite.exec("INSERT INTO users(id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('owner','owner@example.test','owner@example.test','teacher','active',1,1,1)");
 const config=dbModule.billingConfig({PAYPAL_ENV:'live'}), now=Math.floor(Date.now()/1000);
 await dbModule.upsertPaddleSubscription(db,{userId:'owner',subscriptionId:'sub_trial',priceId:trial,offerCode:config.founderOffer.code,status:'ACTIVE'});
 const initial={userId:'owner',subscriptionId:'sub_trial',transactionId:'txn_trial',amountCents:200,currency:'USD',isTrial:true,occurredAt:now,paidThrough:now+86400};
 await dbModule.recordPaddleCompletedPayment(db,initial,config);await dbModule.recordPaddleCompletedPayment(db,initial,config);
 assert.equal(sqlite.prepare('SELECT count(*) n FROM billing_payments').get().n,1);
 assert.equal(sqlite.prepare('SELECT expires_at FROM access_grants').get().expires_at,now+86400);
 assert.equal(sqlite.prepare('SELECT count(*) n FROM founder_assignments').get().n,0);
 assert.equal(sqlite.prepare("SELECT count(*) n FROM billing_outbox_events WHERE event_name='first_subscription_paid'").get().n,0);
 await dbModule.applyPaddleLifecycle(db,'sub_trial',{status:'CANCELLED',occurredAt:now+1});assert.equal(sqlite.prepare('SELECT expires_at FROM access_grants').get().expires_at,now+86400);
 await dbModule.upsertPaddleSubscription(db,{userId:'owner',subscriptionId:'sub_trial',priceId:trial,offerCode:config.founderOffer.code,status:'ACTIVE',occurredAt:now+86400});
 const renewal={...initial,transactionId:'txn_month',amountCents:1550,isTrial:false,occurredAt:now+86400,paidThrough:now+31*86400};
 await dbModule.recordPaddleCompletedPayment(db,renewal,config);await dbModule.recordPaddleCompletedPayment(db,renewal,config);await dbModule.recordPaddleCompletedPayment(db,initial,config);
 assert.equal(sqlite.prepare('SELECT count(*) n FROM founder_assignments').get().n,1);
 assert.equal(sqlite.prepare("SELECT count(*) n FROM billing_outbox_events WHERE event_name='first_subscription_paid'").get().n,1);
 assert.equal(sqlite.prepare('SELECT expires_at FROM access_grants').get().expires_at,renewal.paidThrough);
 sqlite.close();
});
test('new checkout shows direct monthly and PayPal while legacy trial billing remains compatible',async()=>{
 const ui=await readFile('app/acceso/CheckoutButton.tsx','utf8');
 assert.match(ui,/checkoutPaddle\("monthly"\)/);
 assert.doesNotMatch(ui,/onClick=\{\(\) => checkoutPaddle\("trial"\)\}/);
 assert.doesNotMatch(ui,/Prueba 1 día por US\$2|Try 1 day for US\$2/);
 assert.match(ui,/onClick=\{checkoutPayPal\}/);
 assert.match(ui,/PaymentBrands/);
 const config=await readFile('app/api/billing/founder-status/route.ts','utf8');
 assert.match(config,/trialCheckoutAvailable/);
});
test('Paddle timestamps may contain milliseconds',()=>{const [tx,sub]=pair(true);tx.billing_period={starts_at:'2026-10-02T00:00:00.123Z',ends_at:'2026-10-03T00:00:00.123Z'};assert.ok(p.paddleCompletedPayment(tx,sub,cfg))});
test('existing USD15 subscriptions require explicit persisted legacy context',()=>{const [tx,sub]=pair(false);for(const x of [tx,sub])x.items[0].price.unit_price.amount='1500';tx.details.totals.total='1500';assert.equal(p.paddleCompletedPayment(tx,sub,cfg),null);assert.equal(p.paddleCompletedPayment(tx,sub,{...cfg,legacyMonthly:true}).amountCents,1500)});
import { createHmac } from 'node:crypto';
async function trialDatabase(){const sqlite=new DatabaseSync(':memory:');for(const n of (await readdir('drizzle')).filter(n=>n.endsWith('.sql')).sort())sqlite.exec((await readFile(`drizzle/${n}`,'utf8')).replaceAll('--> statement-breakpoint',''));const stmt=(sql,args=[])=>({bind:(...v)=>stmt(sql,v),run:async()=>({meta:{changes:Number(sqlite.prepare(sql).run(...args).changes)}}),first:async()=>sqlite.prepare(sql).get(...args)??null,all:async()=>({results:sqlite.prepare(sql).all(...args)})});return {sqlite,db:{prepare:s=>stmt(s)}}}
async function trialRoute(path){const b=await build({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',plugins:[{name:'env',setup(b){b.onResolve({filter:/^cloudflare:workers$/},()=>({path:'env',namespace:'mock'}));b.onLoad({filter:/.*/,namespace:'mock'},()=>({contents:'export const env=globalThis.__paidTrialEnv',loader:'js'}))}}]});return import(`data:text/javascript;base64,${Buffer.from(b.outputFiles[0].text).toString('base64')}`)}
test('real guest checkout → paid trial → claim → monthly webhook → cancellation, no false acquisition',async()=>{
 const {sqlite,db}=await trialDatabase();const origin='https://spanishcue.com';
 globalThis.__paidTrialEnv={DB:db,PAYPAL_ENV:'live',PAYPAL_PUBLIC_CHECKOUT_ENABLED:'true',PAYPAL_LIVE_CLIENT_ID:'client',PAYPAL_LIVE_CLIENT_SECRET:'private',PAYPAL_LIVE_WEBHOOK_ID:'webhook',PAYPAL_LIVE_PRODUCT_ID:'product',PAYPAL_LIVE_FOUNDER_PLAN_ID:'plan',PADDLE_API_KEY:'key',PADDLE_CLIENT_TOKEN:'client',PADDLE_WEBHOOK_SECRET:'sign',LEGAL_OPERATOR_JSON:JSON.stringify({legalName:'Test',entityType:'Particular',address:'Test',country:'Argentina',taxId:'',registration:'',supportEmail:'s@example.test',privacyEmail:'p@example.test',governingLaw:'Argentina',courts:'Buenos Aires',effectiveDate:'2026-09-24',refundPolicyEs:'Test',refundPolicyEn:'Test',withdrawalPolicyEs:'Test',withdrawalPolicyEn:'Test'})};
 const checkout=await trialRoute('app/api/billing/paddle/checkout/route.ts'),confirm=await trialRoute('app/api/billing/paddle/confirm/route.ts'),bind=await trialRoute('app/api/billing/claim/bind/route.ts'),webhook=await trialRoute('app/api/billing/paddle/webhook/route.ts');
 const oldFetch=globalThis.fetch, now=Math.floor(Date.now()/1000);const txs=new Map();let sub;let count=0;
 globalThis.fetch=async(url,init)=>{if(init?.method==='POST'){const input=JSON.parse(init.body);const isTrial=input.items[0].price_id===trial;const [tx,s]=pair(isTrial);tx.id=`txn_${String(++count).padStart(26,'a')}`;tx.subscription_id=s.id=`sub_${'b'.repeat(26)}`;tx.custom_data=s.custom_data=input.custom_data;tx.customer={id:tx.customer_id,email:'buyer@example.test'};tx.billing_period=s.current_billing_period={starts_at:new Date(now*1000).toISOString(),ends_at:new Date((now+(isTrial?86400:30*86400))*1000).toISOString()};tx.status='ready';txs.set(tx.id,tx);sub=s;return Response.json({data:tx})}if(String(url).includes('/transactions/'))return Response.json({data:txs.get(String(url).split('/').pop().split('?')[0])});return Response.json({data:sub})};
 const post=(route,path,body,headers={})=>route.POST(new Request(origin+path,{method:'POST',headers:{origin,...headers},body:JSON.stringify(body)}));
 const event=async(type,data,id)=>{const raw=JSON.stringify({event_id:id,event_type:type,occurred_at:new Date().toISOString(),data});const ts=String(Math.floor(Date.now()/1000));return webhook.POST(new Request(origin+'/api/billing/paddle/webhook',{method:'POST',headers:{'paddle-signature':`ts=${ts};h1=${createHmac('sha256','sign').update(`${ts}:${raw}`).digest('hex')}`},body:raw}))};
 try{
  assert.equal((await post(checkout,'/api/billing/paddle/checkout',{offer:'evil'})).status,400);
  assert.equal((await post(checkout,'/api/billing/paddle/checkout',{offer:'trial',priceId:'pri_evil'})).status,400);
  let response=await post(checkout,'/api/billing/paddle/checkout',{offer:'monthly'});assert.equal(response.status,200);let cookie=response.headers.get('set-cookie').split(';')[0];const first=await response.json();assert.equal(txs.get(first.transactionId).items[0].price.id,monthly);
  response=await post(checkout,'/api/billing/paddle/checkout',{offer:'trial'},{cookie});assert.equal(response.status,200);cookie=response.headers.get('set-cookie').split(';')[0];const id=(await response.json()).transactionId;const tx=txs.get(id);assert.equal(tx.items[0].price.id,trial);assert.notEqual(id,first.transactionId);
  assert.equal((await post(confirm,'/api/billing/paddle/confirm',{transactionId:id},{cookie})).status,202);assert.equal(sqlite.prepare('SELECT count(*) n FROM access_grants').get().n,0);
  tx.status='completed';assert.equal((await post(confirm,'/api/billing/paddle/confirm',{transactionId:id},{cookie})).status,200);
  sqlite.exec("INSERT INTO users(id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('buyer','buyer@example.test','buyer@example.test','teacher','active',1,1,1)");
  const auth={cookie,'x-chespanish-account-id':'buyer','x-chespanish-user-email':'buyer@example.test'};
  assert.equal((await post(bind,'/api/billing/claim/bind',{provider:'paddle'},auth)).status,200);
  assert.equal(sqlite.prepare('SELECT expires_at FROM access_grants').get().expires_at,now+86400);assert.equal(sqlite.prepare('SELECT count(*) n FROM founder_assignments').get().n,0);
  const renewal=structuredClone(tx);renewal.id=`txn_${'r'.repeat(26)}`;renewal.details.totals.total='1550';renewal.billing_period={starts_at:new Date((now+86400)*1000).toISOString(),ends_at:new Date((now+31*86400)*1000).toISOString()};sub.status='active';sub.current_billing_period=renewal.billing_period;txs.set(renewal.id,renewal);
  assert.equal((await event('transaction.completed',renewal,'evt_renewal')).status,200);assert.equal((await event('transaction.completed',renewal,'evt_renewal')).status,200);
  assert.equal(sqlite.prepare('SELECT count(*) n FROM billing_payments').get().n,2);assert.equal(sqlite.prepare('SELECT count(*) n FROM founder_assignments').get().n,1);assert.equal(sqlite.prepare("SELECT count(*) n FROM billing_outbox_events WHERE event_name='first_subscription_paid'").get().n,1);
  sub.status='canceled';sub.current_billing_period=null;assert.equal((await event('subscription.canceled',sub,'evt_cancel')).status,200);assert.equal(sqlite.prepare('SELECT expires_at FROM access_grants').get().expires_at,now+31*86400);
  assert.equal((await post(webhook,'/api/billing/paddle/webhook',{event_type:'transaction.completed'})).status,401);
 }finally{globalThis.fetch=oldFetch;delete globalThis.__paidTrialEnv;sqlite.close()}
});
test('initial trial can use verified Paddle trial period when transaction has no period; never a renewed month',()=>{const [tx,sub]=pair(true);tx.billing_period=null;assert.equal(p.paddleCompletedPayment(tx,sub,cfg)?.paidThrough,Date.parse(sub.current_billing_period.ends_at)/1000);sub.status='active';sub.current_billing_period={starts_at:'2026-10-03T00:00:00Z',ends_at:'2026-11-03T00:00:00Z'};assert.equal(p.paddleCompletedPayment(tx,sub,cfg),null)});

test('concurrent trial replay cannot shorten a completed monthly renewal',async()=>{
 const {sqlite,db}=await trialDatabase();
 sqlite.exec("INSERT INTO users(id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('owner','owner@example.test','owner@example.test','teacher','active',1,1,1)");
 const config=dbModule.billingConfig({PAYPAL_ENV:'live'}),now=Math.floor(Date.now()/1000);
 await dbModule.upsertPaddleSubscription(db,{userId:'owner',subscriptionId:'sub_race',priceId:trial,offerCode:config.founderOffer.code,status:'ACTIVE'});
 const initial={userId:'owner',subscriptionId:'sub_race',transactionId:'txn_race_trial',amountCents:200,currency:'USD',isTrial:true,occurredAt:now,paidThrough:now+86400};
 await dbModule.recordPaddleCompletedPayment(db,initial,config);
 let release,paused;const gate=new Promise(r=>release=r),ready=new Promise(r=>paused=r);
 const delayed={prepare(sql){const wrap=statement=>({bind(...args){return wrap(statement.bind(...args))},first:()=>statement.first(),all:()=>statement.all(),async run(){if(sql.includes('UPDATE billing_subscriptions SET')){paused();await gate}return statement.run()}});return wrap(db.prepare(sql))}};
 const replay=dbModule.recordPaddleCompletedPayment(delayed,initial,config);await ready;
 const renewal={...initial,transactionId:'txn_race_month',amountCents:1550,isTrial:false,occurredAt:now+86400,paidThrough:now+31*86400};
 await dbModule.recordPaddleCompletedPayment(db,renewal,config);release();await replay;
 assert.equal(sqlite.prepare('SELECT paid_through FROM billing_subscriptions').get().paid_through,renewal.paidThrough);
 assert.equal(sqlite.prepare('SELECT expires_at FROM access_grants').get().expires_at,renewal.paidThrough);
 sqlite.close();
});
test('legacy unclaimed paid purchase renews and concurrent trial claim replay stays monotonic',async()=>{
 const built=await build({stdin:{contents:'export * from "./db/purchase-claims"; export * from "./app/guest-purchase-verification";',resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
 const c=await import(`data:text/javascript;base64,${Buffer.from(built.outputFiles[0].text).toString('base64')}`);
 const {sqlite,db}=await trialDatabase(),now=Math.floor(Date.now()/1000);
 const {claimId}=await c.createPurchaseClaim(db,{environment:'live',offerCode:'founder',returnTo:'/acceso',secret:c.newClaimSecret()});
 await c.markPurchaseCheckout(db,claimId,'paddle',{paymentId:'txn_old'});
 const previous={subscriptionId:`sub_${'c'.repeat(26)}`,paymentId:'txn_old',customerId:'ctm_owner',email:'owner@example.test',amountCents:1500,currency:'USD',paidAt:now-31*86400,paidThrough:now-86400};
 await c.recordVerifiedPurchase(db,claimId,'paddle',previous);
 const [tx,sub]=pair(false);tx.id='txn_new';tx.subscription_id=sub.id=previous.subscriptionId;
 for(const x of [tx,sub]){x.items[0].price.unit_price.amount='1500';x.custom_data={spanishcue_claim_id:claimId,spanishcue_offer_code:'founder'}}
 tx.details.totals.total='1500';tx.customer={id:'ctm_owner',email:previous.email};
 tx.billing_period={starts_at:new Date(now*1000).toISOString(),ends_at:new Date((now+30*86400)*1000).toISOString()};
 const old=globalThis.fetch;globalThis.fetch=async url=>Response.json({data:String(url).includes('/transactions/')?tx:sub});
 try{const renewed=await c.verifyGuestPaddlePayment(db,cfg,await c.getPurchaseClaim(db,claimId),tx.id);assert.equal(renewed.paidThrough,now+30*86400);assert.equal(renewed.providerPaymentId,tx.id)}finally{globalThis.fetch=old}
 const other=await c.createPurchaseClaim(db,{environment:'live',offerCode:'founder',returnTo:'/acceso',secret:c.newClaimSecret()});await c.markPurchaseCheckout(db,other.claimId,'paddle',{paymentId:'txn_initial'});
 const initial={...previous,subscriptionId:'sub_race_claim',paymentId:'txn_initial',amountCents:200,paidAt:now,paidThrough:now+86400};
 let release,paused;const gate=new Promise(r=>release=r),ready=new Promise(r=>paused=r);
 const delayed={prepare(sql){const wrap=statement=>({bind(...args){return wrap(statement.bind(...args))},first:()=>statement.first(),async run(){if(sql.includes('UPDATE billing_purchase_claims SET')){paused();await gate}return statement.run()}});return wrap(db.prepare(sql))}};
 const stale=c.recordVerifiedPurchase(delayed,other.claimId,'paddle',initial);await ready;
 await c.recordVerifiedPurchase(db,other.claimId,'paddle',initial);
 await c.recordVerifiedPurchase(db,other.claimId,'paddle',{...initial,paymentId:'txn_renewal',amountCents:1550,paidAt:now+86400,paidThrough:now+31*86400});
 release();await stale;const claim=await c.getPurchaseClaim(db,other.claimId);assert.equal(claim.amountCents,1550);assert.equal(claim.providerPaymentId,'txn_renewal');assert.equal(claim.paidThrough,now+31*86400);sqlite.close();
});

test('misconfigured runtime cannot authorize an arbitrary price',()=>{const [tx]=pair(true);tx.items[0].price.id='pri_arbitrary';assert.equal(p.paddleOffer(tx,{...cfg,trialPriceId:'pri_arbitrary'}),null);const [direct]=pair(false);direct.items[0].price.id='pri_arbitrary';assert.equal(p.paddleOffer(direct,{...cfg,priceId:'pri_arbitrary'}),null)});
const convBuilt = await build({stdin:{contents:'export * from "./db/paddle-billing"; export { claimFirstPaidConversionForUser } from "./db/billing"; export * from "./app/billing-config"; export * from "./app/server-conversions";',resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const conv=await import(`data:text/javascript;base64,${Buffer.from(convBuilt.outputFiles[0].text).toString('base64')}`);
test('Google Ads purchase = first verified paid transaction (US$2 trial), never the later first month; server reports post-trial month and renewals once',async()=>{
 const sqlite=new DatabaseSync(':memory:');
 for(const n of (await readdir('drizzle')).filter(n=>n.endsWith('.sql')).sort())sqlite.exec((await readFile(`drizzle/${n}`,'utf8')).replaceAll('--> statement-breakpoint',''));
 const stmt=(sql,args=[])=>({bind:(...v)=>stmt(sql,v),run:async()=>({meta:{changes:Number(sqlite.prepare(sql).run(...args).changes)}}),first:async()=>sqlite.prepare(sql).get(...args)??null});const db={prepare:s=>stmt(s)};
 sqlite.exec("INSERT INTO users(id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('owner','owner@example.test','owner@example.test','teacher','active',1,1,1)");
 const config=conv.billingConfig({PAYPAL_ENV:'live'}),now=Math.floor(Date.now()/1000);
 await conv.upsertPaddleSubscription(db,{userId:'owner',subscriptionId:'sub_trial',priceId:trial,offerCode:config.founderOffer.code,status:'ACTIVE'});
 const initial={userId:'owner',subscriptionId:'sub_trial',transactionId:'txn_trial',amountCents:200,currency:'USD',isTrial:true,occurredAt:now,paidThrough:now+86400};
 const first=await conv.recordPaddleCompletedPayment(db,initial,config);
 assert.equal(first.kind,'trial');
 assert.deepEqual(await conv.claimFirstPaidConversionForUser(db,'owner','sub_trial','live'),{transactionId:'txn_trial',value:2,currency:'USD',plan:'trial'});
 assert.equal(await conv.claimFirstPaidConversionForUser(db,'owner','sub_trial','live'),null);
 const month=await conv.recordPaddleCompletedPayment(db,{...initial,transactionId:'txn_month',amountCents:1550,isTrial:false,occurredAt:now+86400,paidThrough:now+31*86400},config);
 assert.equal(month.kind,'first');assert.equal(month.afterTrial,true);
 assert.equal(await conv.claimFirstPaidConversionForUser(db,'owner','sub_trial','live'),null,'a returning buyer cannot fire a second purchase conversion');
 const old=globalThis.fetch;const sent=[];globalThis.fetch=async(url,init)=>{sent.push({url:String(url),body:JSON.parse(init.body)});return new Response(null,{status:204})};
 try{
  const details={transactionId:'txn_month',amountCents:1550,currency:'USD',attribution:{ga_client_id:'123.456',gclid:'abc'}};
  assert.equal(await conv.deliverPaddleServerConversion({ANALYTICS_CONVERSIONS_ENABLED:'true',NEXT_PUBLIC_GA4_MEASUREMENT_ID:'G-TEST'},db,month,details),false,'no API secret: stays in the outbox');
  assert.equal(await conv.deliverPaddleServerConversion({ANALYTICS_CONVERSIONS_ENABLED:'true',NEXT_PUBLIC_GA4_MEASUREMENT_ID:'G-TEST',GA4_API_SECRET:'s'},db,month,{...details,attribution:{}}),false,'no consented client id');
  assert.equal(await conv.deliverPaddleServerConversion({ANALYTICS_CONVERSIONS_ENABLED:'true',NEXT_PUBLIC_GA4_MEASUREMENT_ID:'G-TEST',GA4_API_SECRET:'s'},db,first,details),false,'the browser reports the first paid transaction');
  assert.equal(await conv.deliverPaddleServerConversion({ANALYTICS_CONVERSIONS_ENABLED:'true',NEXT_PUBLIC_GA4_MEASUREMENT_ID:'G-TEST',GA4_API_SECRET:'s'},db,month,details),true);
  assert.equal(sent.length,1);assert.equal(sent[0].body.events[0].name,'first_subscription_payment');assert.equal(sent[0].body.events[0].params.value,15.5);assert.equal(sent[0].body.client_id,'123.456');
  assert.ok(sqlite.prepare("SELECT delivered_at FROM billing_outbox_events WHERE event_key='first_subscription_paid:txn_month'").get().delivered_at);
  const renewal=await conv.recordPaddleCompletedPayment(db,{...initial,transactionId:'txn_r2',amountCents:1550,isTrial:false,occurredAt:now+31*86400,paidThrough:now+61*86400},config);
  assert.equal(renewal.kind,'renewal');
  await conv.deliverPaddleServerConversion({ANALYTICS_CONVERSIONS_ENABLED:'true',NEXT_PUBLIC_GA4_MEASUREMENT_ID:'G-TEST',GA4_API_SECRET:'s'},db,renewal,{...details,transactionId:'txn_r2'});
  assert.equal(sent.at(-1).body.events[0].name,'subscription_renewal');
 }finally{globalThis.fetch=old;sqlite.close();}
});
test('checkout carries only allow-listed ad identifiers into Paddle custom_data',async()=>{
 assert.deepEqual(p.sanitizePaddleAttribution({gclid:'Cj0K_abc-1',gbraid:'0AA',utm_source:'google',ga_client_id:'1.2',email:'x@y.z',utm_term:'bad value'}),{gclid:'Cj0K_abc-1',gbraid:'0AA',utm_source:'google',ga_client_id:'1.2'});
 assert.deepEqual(p.sanitizePaddleAttribution({gclid:'<script>'}),{});
 const old=globalThis.fetch;let body;globalThis.fetch=async(_u,init)=>{body=JSON.parse(init.body);return Response.json({data:{id:'txn_x'}})};
 try{await p.createPaddleCheckoutTransaction(cfg,{claimId:'c1',offerCode:'founder',offer:'trial',attribution:{gclid:'abc',evil:'x'}});}finally{globalThis.fetch=old}
 assert.equal(body.custom_data.spanishcue_gclid,'abc');assert.equal(body.custom_data.spanishcue_claim_id,'c1');assert.equal(body.custom_data.spanishcue_evil,undefined);
 assert.deepEqual(p.paddleAttributionFrom({custom_data:body.custom_data}),{gclid:'abc'});
});
test('annual plan stays off until the owner-created Paddle price ID is pinned',async()=>{
 assert.equal(p.PADDLE_ANNUAL_CENTS,12900);
 const annualCfg={...cfg,annualPriceId:p.PADDLE_ANNUAL_PRICE_ID||'pri_annual_unpinned'};
 if(!p.PADDLE_ANNUAL_PRICE_ID){assert.equal(p.paddleAnnualReady(annualCfg),false);assert.equal(p.paddleAnnualReady({...cfg,annualPriceId:''}),false)}
 const [tx,sub]=pair(false);
 for(const x of [tx,sub])x.items[0].price={...price(false),id:annualCfg.annualPriceId,unit_price:{amount:'12900',currency_code:'USD'},billing_cycle:{interval:'year',frequency:1}};
 tx.details.totals.total='12900';tx.billing_period={starts_at:'2026-10-02T00:00:00Z',ends_at:'2027-10-02T00:00:00Z'};sub.current_billing_period=tx.billing_period;
 const payment=p.paddleCompletedPayment(tx,sub,annualCfg);
 if(!p.PADDLE_ANNUAL_PRICE_ID){assert.equal(payment,null);assert.equal(p.validatePaddleTransaction(tx,annualCfg,'owner'),false);return}
 assert.equal(p.paddleAnnualReady(annualCfg),true);assert.equal(payment.amountCents,12900);assert.equal(payment.offer,'annual');
 for(const edit of [x=>x.unit_price.amount='12000',x=>x.billing_cycle.interval='month',x=>x.unit_price.currency_code='EUR',x=>x.tax_mode='external']){const [t2,s2]=[structuredClone(tx),structuredClone(sub)];edit(t2.items[0].price);edit(s2.items[0].price);assert.equal(p.paddleCompletedPayment(t2,s2,annualCfg),null)}
 const short=structuredClone(tx);short.billing_period.ends_at='2026-11-02T00:00:00Z';assert.equal(p.paddleCompletedPayment(short,sub,annualCfg),null);
 const old=globalThis.fetch;const seen=[];globalThis.fetch=async(_u,init)=>{seen.push(JSON.parse(init.body));return Response.json({data:{id:'txn_test'}})};
 try{await p.createPaddleCheckoutTransaction(annualCfg,{userId:'owner',offerCode:'founder',offer:'annual'});assert.equal(seen[0].items[0].price_id,p.PADDLE_ANNUAL_PRICE_ID)}finally{globalThis.fetch=old}
});
test('annual checkout is server-gated and labelled as a yearly charge',async()=>{
 const route=await readFile('app/api/billing/paddle/checkout/route.ts','utf8');assert.match(route,/paddleAnnualReady/);
 const status=await readFile('app/api/billing/founder-status/route.ts','utf8');assert.match(status,/annualCheckoutAvailable/);
 const ui=await readFile('app/acceso/CheckoutButton.tsx','utf8');assert.match(ui,/annualCheckoutAvailable/);assert.match(ui,/US\$129/);
});
