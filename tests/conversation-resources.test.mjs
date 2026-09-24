import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/resource-seo"; export * from "./app/conversation-families/catalog";',resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const p=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
test('public resources list one item per family',()=>{
 assert.equal(p.resourceLessons.filter(l=>l.category==='Conversación').length,p.conversationFamilies.length);
 assert.equal(new Set(p.resourceLessons.map(p.resourcePathForLesson)).size,p.resourceLessons.length);
});
test('every original conversation resource URL still resolves and canonical has no query',async()=>{
 for(const legacy of JSON.parse(await readFile('tests/conversation-legacy-urls.json','utf8'))){
  const l=p.lessonForResourceSlug(legacy.path.split('/').at(-1));assert.ok(l,legacy.path);
  assert.ok(p.resourcePathForLesson(l));assert.ok(!p.resourcePathForLesson(l).includes('?'));
 }
});
test('B2 Red Flag alias canonicalizes to same family without losing its level',()=>{
 const old=p.lessonForResourceSlug('spanish-conversation-activity-b2-red-flag-o-no-b2');
 const family=p.resourceLessons.find(l=>l.familyId==='red-flag-o-no');
 assert.ok(family);assert.equal(old.level,'B2');assert.equal(p.resourcePathForLesson(old),p.resourcePathForLesson(family));
});
