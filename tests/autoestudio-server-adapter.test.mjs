import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
const built = await build({stdin:{contents:"export * from './app/autoestudio/progress/server-adapter';",resolveDir:process.cwd()},bundle:true,format:'esm',platform:'node',write:false,logLevel:'silent'});
const {createServerProgressAdapter}=await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'));
const session={passId:'pass-a',learnerId:'learner-a',level:'a2',alias:'Luna',revision:1};
const empty=()=>({version:1,modules:{}});
const memory=()=>{const map=new Map();return {getItem:k=>map.get(k)||null,setItem:(k,v)=>map.set(k,v),map};};
const mod={startedAt:'2026-10-02T00:00:00.000Z',sections:{goal:'2026-10-02T00:00:00.000Z'},lastSection:'goal'};
test('server hydration never imports generic public or another learner cache',async()=>{
 const storage=memory();storage.setItem('spanishcue.autoestudio.progress.v1',JSON.stringify({version:1,modules:{'a2-01':mod}}));
 const adapter=createServerProgressAdapter(session,storage,async()=>Response.json({session,progress:empty()}));
 assert.deepEqual((await adapter.load()).modules,{});adapter.dispose();
});
test('writes strip drafts and bind pass revision; draft-only edits do not upload',async()=>{
 const calls=[];const storage=memory();let state=empty();
 const adapter=createServerProgressAdapter(session,storage,async(url,opts)=>{
  if(opts?.method==='PUT'){const data=JSON.parse(opts.body);calls.push(data);state={version:1,modules:{...state.modules,[data.moduleId]:data.progress}};}
  return Response.json({session,progress:state});
 });
 await adapter.load();adapter.save({version:1,modules:{'a2-01':{...mod,writingDraft:'PRIVATE TEXT'}}});await adapter.flush();
 assert.equal(calls.length,1);assert.equal(calls[0].passId,session.passId);assert.equal(calls[0].revision,1);assert.equal(calls[0].progress.writingDraft,undefined);assert.ok(!JSON.stringify(calls).includes('PRIVATE'));
 adapter.save({version:1,modules:{'a2-01':{...mod,writingDraft:'NEW PRIVATE'}}});await adapter.flush();assert.equal(calls.length,1);adapter.dispose();
});
test('different active learner blocks stale-tab updates without sending progress',async()=>{
 let puts=0;const adapter=createServerProgressAdapter(session,memory(),async(url,opts)=>{if(opts?.method==='PUT')puts++;return Response.json({session:{...session,passId:'pass-b',learnerId:'learner-b'},progress:empty()});});
 await assert.rejects(()=>adapter.load(),/sesión/);adapter.save({version:1,modules:{'a2-01':mod}});await adapter.flush();assert.equal(puts,0);assert.equal(adapter.getStatus(),'session-changed');adapter.dispose();
});
test('failed writes stay pending and explicit retry syncs same learner',async()=>{
 let fail=true;let puts=0;const adapter=createServerProgressAdapter(session,memory(),async(url,opts)=>{
  if(opts?.method==='PUT'){puts++;if(fail)throw Error('offline');return Response.json({session,progress:{version:1,modules:{'a2-01':mod}}});}
  return Response.json({session,progress:empty()});
 });
 await adapter.load();adapter.save({version:1,modules:{'a2-01':mod}});await adapter.flush();assert.equal(adapter.getStatus(),'offline');fail=false;await adapter.flush();assert.equal(adapter.getStatus(),'saved');assert.equal(puts,2);adapter.dispose();
});
test('out-of-level public sample progress never posts under assigned pass',async()=>{
 let puts=0;const adapter=createServerProgressAdapter(session,memory(),async(url,opts)=>{if(opts?.method==='PUT')puts++;return Response.json({session,progress:empty()});});
 await adapter.load();adapter.save({version:1,modules:{'b1-01':mod}});await adapter.flush();assert.equal(puts,0);adapter.dispose();
});
test('retry after initial offline load verifies session before uploading pending work',async()=>{
 let fail=true;let puts=0;const adapter=createServerProgressAdapter(session,memory(),async(url,opts)=>{if(fail)throw Error('offline');if(opts?.method==='PUT')puts++;return Response.json({session,progress:empty()});});
 await adapter.load();adapter.save({version:1,modules:{'a2-01':mod}});fail=false;await adapter.flush();assert.equal(puts,1);assert.equal(adapter.getStatus(),'saved');adapter.dispose();
});
test('offline structural updates and private drafts survive reload without importing another identity',async()=>{
 const storage=memory();let fail=false;let remote=empty();const calls=[];
 const fetcher=async(url,opts)=>{if(fail)throw Error('offline');if(opts?.method==='PUT'){const data=JSON.parse(opts.body);calls.push(data);remote={version:1,modules:{[data.moduleId]:data.progress}};}return Response.json({session,progress:remote});};
 const first=createServerProgressAdapter(session,storage,fetcher);await first.load();fail=true;first.save({version:1,modules:{'a2-01':{...mod,writingDraft:'PRIVATE OFFLINE'}}});await first.flush();first.dispose();
 fail=false;const second=createServerProgressAdapter(session,storage,fetcher);const loaded=await second.load();assert.ok(loaded.modules['a2-01']?.sections.goal);assert.equal(loaded.modules['a2-01'].writingDraft,'PRIVATE OFFLINE');await second.flush();assert.equal(calls.length,1);assert.ok(!JSON.stringify(calls).includes('PRIVATE OFFLINE'));second.dispose();
});
test('two pending modules settle once each despite server-normalized timestamps',async()=>{
 const calls=[];let remote=empty();const adapter=createServerProgressAdapter(session,memory(),async(url,opts)=>{
  if(opts?.method==='PUT'){const data=JSON.parse(opts.body);calls.push(data.moduleId);if(calls.length>8)throw Error('loop');remote={version:1,modules:{...remote.modules,[data.moduleId]:{...data.progress,startedAt:'2026-10-02T12:00:00.000Z',sections:{goal:'2026-10-02T12:00:00.000Z'}}}};}
  return Response.json({session,progress:remote});
 });await adapter.load();adapter.save({version:1,modules:{'a2-01':mod,'a2-02':mod}});await adapter.flush();assert.deepEqual(calls,['a2-01','a2-02']);assert.equal(adapter.getStatus(),'saved');adapter.dispose();
});
