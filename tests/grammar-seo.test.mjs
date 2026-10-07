import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export {default as sitemap} from "./app/sitemap.ts"; export {isEnglishDefaultPath} from "./app/seo.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const mod=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
test('teachers can discover each supported grammar planning page and topic through the sitemap',()=>{
 const urls=new Set(mod.sitemap().map(x=>x.url));
 for(const path of ['/spanish-grammar-lessons/a1','/spanish-grammar-lessons/a2','/spanish-grammar-lessons/b1','/spanish-grammar-lessons/b2','/spanish-grammar-lessons/c1','/spanish-grammar-lessons/por-vs-para-activities','/about'])assert.ok(urls.has('https://spanishcue.com'+path),path);
 assert.ok(!urls.has('https://spanishcue.com/spanish-grammar-lessons/c2'),'C2 must not promise an unsupported full curriculum');
});
test('methodology starts in English for the teacher audience',()=>assert.equal(mod.isEnglishDefaultPath('/about'),true));

const dataBuild=await build({stdin:{contents:'export * from "./app/growth/grammar.ts"; export * from "./app/growth/grammar-topics.ts"; export * from "./app/growth/teaching-proof.ts"; export {lessons} from "./app/lesson-catalog.ts"; export {teachingGuides} from "./app/teaching-guides.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',metafile:true});
const data=await import('data:text/javascript;base64,'+Buffer.from(dataBuild.outputFiles[0].text).toString('base64'));
test('grammar discovery does not promote old reference ranges into advanced classrooms',()=>{
 assert.ok(data.grammarLessonsAtLevel('A1').some(x=>x.id===107));
 assert.ok(!data.grammarLessonsAtLevel('C1').some(x=>x.id===107));
 assert.deepEqual(data.grammarLessonsAtLevel('C2').map(x=>x.id),[156]);
 for(const code of ['A1','A2','B1','B2','C1','C2'])for(const card of data.grammarLessonsAtLevel(code)){
  assert.equal(data.lessons.find(x=>x.id===card.id)?.level,code);assert.equal(card.level,code);
  assert.ok(card.free ? card.href===card.lessonPath : card.href.startsWith('/resources/'),card.href);
 }
});
test('each topic stays on its owned URL and links real relevant grammar classrooms',()=>{
 const owned=['/guides/how-to-teach-ser-vs-estar','/guides/preterite-vs-imperfect-activities','/guides/spanish-subjunctive-lesson-plan','/spanish-grammar-lessons/por-vs-para-activities'];
 assert.deepEqual(data.grammarTopicPages.map(x=>x.path),owned);
 for(const page of data.grammarTopicPages){
  for(const id of page.lessonIds)assert.equal(data.lessons.find(l=>l.id===id)?.category,'Gramática',String(id));
  if(page.path.startsWith('/guides/'))assert.ok(data.teachingGuides.some(g=>'/guides/'+g.slug===page.path));
  for(const slug of page.levelSlugs)assert.ok(data.grammarLevelBySlug.has(slug));
 }
 assert.ok(data.grammarTopicPages.find(x=>x.slug==='por-para').lessonIds.includes(231));
});
test('new resources have distinct usable tasks and bounded metadata',()=>{
 const names=[];
 for(const page of [...data.grammarLevels,...data.grammarTopicPages]){
  assert.ok(page.title.length<=65,page.path);assert.ok(page.description.length>=110&&page.description.length<=165,page.path);
  for(const a of page.activities){assert.ok(a.steps.length>=3&&a.prompts.length>=2&&a.model&&a.correction&&a.adaptation);names.push(a.name);}
 }
 assert.equal(new Set(names).size,names.length,'level tasks and topic activities must not be copy-paste duplicates');
});
test('public grammar discovery imports metadata without protected lesson bodies or games',()=>{
 const files=Object.keys(dataBuild.metafile.inputs);
 assert.ok(!files.some(p=>/grammar-classroom\/(?:lessons|adapters|content\/)|three\/|GrammarWorld|Classroom\.tsx/.test(p)),files.filter(p=>/grammar-classroom/.test(p)).join(','));
});
test('teaching proof is dated, source-attributed and keeps quotations brief',()=>{
 const p=data.teachingProof;
 assert.equal(p.source,'https://preply.com/en/tutor/4226888');assert.equal(p.checkedAt,'2026-10-07');
 assert.ok(p.lessonsObserved>=4000);assert.equal(p.reviewCount,52);assert.equal(p.rating,5);
 assert.equal(p.reviews.length,3);assert.ok(p.reviews.flatMap(r=>r.quote.split(/\s+/)).length<=25);
 assert.doesNotMatch(JSON.stringify(p),/Alejandro|avatars\.preply|AggregateRating|image|portrait/);
});
