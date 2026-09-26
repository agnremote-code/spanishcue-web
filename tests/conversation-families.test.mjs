import assert from 'node:assert/strict';
import test from 'node:test';
import { existsSync } from 'node:fs';
import { build } from 'esbuild';

const path = 'app/conversation-families/catalog.ts';
test('conversation family layer exists', () => assert.ok(existsSync(path)));
if (existsSync(path)) {
 const r = await build({stdin:{contents:`export * from './${path}'; export {lessons} from './app/lesson-catalog'; export {filterLessons,groupLessonsByLevel} from './app/library-filters.mjs';`,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
 const p = await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
 test('every conversation seed belongs to exactly one family; other categories stay identical',()=>{
  const ids=p.conversationFamilies.flatMap(f=>f.legacyLessonIds);
  assert.deepEqual([...ids].sort((a,b)=>a-b),p.lessons.filter(l=>l.category==='Conversación').map(l=>l.id).sort((a,b)=>a-b));
  assert.equal(new Set(ids).size,ids.length);
  assert.deepEqual(p.catalogLessons.filter(l=>l.category!=='Conversación'),p.lessons.filter(l=>l.category!=='Conversación'));
 });
 test('Red Flag is one card with four genuinely available levels',()=>{
  const cards=p.catalogLessons.filter(l=>l.familyId==='red-flag-o-no');
  assert.equal(cards.length,1); assert.deepEqual(cards[0].levels,['A1','A2','B1','B2']);
  assert.equal(cards[0].title,'Red Flag o No');
  assert.equal(p.filterLessons(p.catalogLessons,{query:'red flag',level:'B2'}).length,1);
  assert.equal(p.filterLessons(p.catalogLessons,{query:'red flag',level:'A1'}).length,1);
 });
 test('invalid/default/duplicate/missing variant constraints fail clearly',()=>{
  const f=p.conversationFamilies.find(f=>f.slug==='red-flag-o-no');
  for(const patch of [{defaultLevel:'C2'},{availableLevels:['A2','A2']},{variants:{}},{title:''}])
   assert.throws(()=>p.validateConversationFamily({...f,...patch}));
  assert.equal(p.resolveConversationLevel(f,'B2'),'B2');
  assert.equal(p.resolveConversationLevel(f,'C2'),f.defaultLevel);
 });
 test('level links preserve filters and use safe supported fallback',()=>{
  const l=p.catalogLessons.find(l=>l.familyId==='red-flag-o-no');
  assert.equal(p.conversationLessonHref(l,'B2'),l.path+'?level=B2');
  assert.equal(p.conversationLessonHref(l,'C2'),l.path+'?level=A2');
 });
 test('free atlas never absorbs paid USA A1',()=>{
  const free=p.conversationFamilies.find(f=>f.legacyLessonIds.includes(36));
  const paid=p.conversationFamilies.find(f=>f.legacyLessonIds.includes(26));
  assert.notEqual(free.id,paid.id); assert.equal(free.access,'free'); assert.equal(paid.access,'pro');
 });
}
test('shared level selector supports URL history without importing private content', async()=>{
 const {readFile}=await import('node:fs/promises');
 assert.ok(existsSync('app/conversation-families/ConversationFamily.tsx'));
 const source=await readFile('app/conversation-families/ConversationFamily.tsx','utf8');
 assert.match(source,/popstate/); assert.match(source,/pushState/); assert.match(source,/useSyncExternalStore/);
 assert.doesNotMatch(source,/from ['"].*(catalog|data|variants)['"]/);
});

test('overview shelves never repeat conversation families and every shelf opens its level',async()=>{
 const r=await build({stdin:{contents:`export {catalogLessons,conversationLessonHref} from './app/conversation-families/catalog';export {groupLessonsByLevel} from './app/library-filters.mjs';`,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
 const p=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
 const groups=p.groupLessonsByLevel(p.catalogLessons,undefined,100);
 const ids=groups.flatMap(g=>g.lessons.filter(l=>l.familyId).map(l=>l.familyId));
 assert.equal(ids.length,new Set(ids).size);
 for(const g of groups)for(const l of g.lessons.filter(l=>l.familyId))assert.ok(p.conversationLessonHref(l,g.level).endsWith('?level='+g.level));
 const {readFile}=await import('node:fs/promises');const source=await readFile('app/Library.tsx','utf8');
 assert.match(source,/lessonGrid\(group.lessons, false, false, group.level\)/);
});
