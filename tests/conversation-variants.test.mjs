import assert from 'node:assert/strict';
import test from 'node:test';
import {existsSync} from 'node:fs';
import {build} from 'esbuild';
const path='app/choose-conversation/variants.ts';
test('level content is extracted from the shared conversation renderer',()=>assert.ok(existsSync(path)));
if(existsSync(path)) {
 const result=await build({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node'});
 const {talkVariants}=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
 test('all fifteen worlds have separate complete A1, A2 and B1 question decks',()=>{
  for(const level of ['A1','A2','B1']) {
   const v=talkVariants[level];assert.equal(v.activities.length,15);assert.ok(v.closingConversation.length>=3);
   for(const t of v.activities){assert.ok(t.title);assert.ok(t.questions.length>=4);assert.ok(t.questions.every(q=>typeof q==='string'&&q.length>8));}
  }
  for(let i=0;i<15;i++){
   const a2=talkVariants.A2.activities[i].questions;
   assert.ok(a2.every(q=>!talkVariants.B1.activities[i].questions.includes(q)),`A2 world ${i} is distinct from B1`);
  }
 });
}
test('country tracks select actual A2/B1 content without changing shared scenes',async()=>{
 const r=await build({stdin:{contents:'export {areas} from "./app/reino-unido-en-relieve/data";export {questionsForUKArea} from "./app/reino-unido-en-relieve/variants";export {regions} from "./app/australia-en-movimiento/data";export {states} from "./app/estados-unidos-a2-b1/state-data";',resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
 const p=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
 for(const area of p.areas){const a2=p.questionsForUKArea(area,'A2');const b1=p.questionsForUKArea(area,'B1');assert.equal(a2.length,4);assert.equal(b1.length,8);assert.equal(b1,area.questions);assert.ok(a2.every(q=>!b1.some(other=>q.es===other.es)));}
 for(const region of p.regions){assert.equal(region.questions.filter(q=>q.level==='A2').length,4);assert.equal(region.questions.filter(q=>q.level==='B1').length,2);}
 for(const state of p.states){assert.equal(state.a2Questions.length,5);assert.ok(!state.a2Questions.some(q=>q.es===state.b1Extension.es));}
});
test('world renderer cannot pull premium question banks into its public chunk',async()=>{
 const r=await build({entryPoints:['app/conversation-worlds/ConversationWorld.tsx'],bundle:true,write:false,format:'esm',platform:'browser',external:['react','next/*'],loader:{'.css':'empty'},metafile:true});
 assert.ok(!Object.keys(r.metafile.inputs).some(path=>/conversation-worlds\/data(?:-a2)?\.ts$/.test(path)));
});
