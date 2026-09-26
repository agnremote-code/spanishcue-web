import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';

const snapshot=JSON.parse(readFileSync('tests/fixtures/conversation-batch1-originals.json','utf8'));
const r=await build({stdin:{contents:`export {getLevelConfig} from './app/red-flag-o-no/engine.mjs'; export {talkVariants} from './app/choose-conversation/variants'; export * from './app/conversation-worlds/data'; export * from './app/conversation-worlds/data-a2'; export {lessons} from './app/lesson-catalog'; export * from './app/conversation-families/catalog'; export * from './app/resource-seo'; export {conversationLevelUrl} from './app/conversation-families/navigation';`,resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const p=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
const publicBuild=await build({entryPoints:['app/conversation-families/catalog.ts'],bundle:true,write:false,platform:'node',format:'esm',metafile:true});
const publicInputs=Object.keys(publicBuild.metafile.inputs).join('\n');
const hash=value=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
const expected=[
 ['red-flag-o-no','A1',['A1','A2','B1','B2']],
 ['lets-talk','B2',['A1','A2','B1','B2']],
 ['la-maquina-que-elimina-cosas','B2',['A2','B1','B2']],
 ['tu-vida-con-una-regla-absurda','B2',['A2','B1','B2']],
];

test('exactly four new variants are discoverable, with no duplicate family cards or speculative levels',()=>{
 for(const [id,level,levels] of expected){
  const family=p.conversationFamilies.find(f=>f.id===id);
  assert.deepEqual(family.availableLevels,levels,id);
  assert.equal(family.variants[level].level,level);
  assert.equal(family.access,'pro');
  const cards=p.catalogLessons.filter(l=>l.familyId===id);
  assert.equal(cards.length,1,id);
  assert.deepEqual(cards[0].levels,levels);
  assert.equal(p.conversationLessonHref(cards[0],level),`${family.canonicalPath}?level=${level}`);
  const resource=p.lessonForResourceSlug(p.resourceSlugForLesson(cards[0]));
  assert.deepEqual(resource.levels,levels);
  assert.equal(resource.id,family.canonicalLessonId);
  assert.ok(family.variants[level].communicativeObjectives.length>=2);
 }
});

test('all ten original lesson banks and the complete route/access ledger retain canonical-main values',()=>{
 const banks={};
 for(const level of ['A2','B1','B2'])banks[`redFlag${level}`]=hash(p.getLevelConfig(level));
 for(const level of ['A1','A2','B1'])banks[`talk${level}`]=hash(p.talkVariants[level]);
 for(const name of ['eliminations','absurdRules','eliminationsA2','absurdRulesA2'])banks[name]=hash(p[name]);
 assert.deepEqual(banks,snapshot.banks);
 assert.equal(hash(p.lessons),snapshot.routeLedger);
 for(const original of snapshot.families){
  const family=p.conversationFamilies.find(f=>f.id===original.id);
  for(const key of ['defaultLevel','canonicalPath','canonicalLessonId','legacyLessonIds','access'])assert.deepEqual(family[key],original[key],`${family.id}: ${key}`);
  for(const level of Object.keys(original.variants)){
   assert.deepEqual(family.variants[level],original.variants[level]);
   assert.deepEqual(family.previewByLevel[level],original.previewByLevel[level]);
  }
 }
});

test('new previews are distinct existing assets and public summaries contain no private banks',()=>{
 for(const [id,level] of expected){
  const family=p.conversationFamilies.find(f=>f.id===id);
  const preview=family.previewByLevel[level];
  assert.ok(preview?.image,`${id} ${level}: missing preview`);
  assert.ok(existsSync('public'+preview.image),preview.image);
  const bytes=readFileSync('public'+preview.image);
  assert.ok(bytes.length>1000,'No placeholder thumbnails');
  const original=snapshot.families.find(f=>f.id===id);
  for(const old of Object.values(original.previewByLevel)){
   assert.notEqual(preview.image,old.image);
   assert.notDeepEqual(bytes,readFileSync('public'+old.image));
  }
  assert.ok(preview.hook.length>25);
  assert.ok(preview.explanation?.length>40);
  assert.ok(preview.warmup?.length>15);
 }
 // Bundling public metadata must never pull an authored private question bank.
 const publicResult=publicInputs;
 assert.doesNotMatch(publicResult,/app\/choose-conversation\/(b2|variants)|app\/conversation-worlds\/data|app\/red-flag-o-no\/(engine|a1)/);
});

test('new level links preserve unrelated query/hash and unsupported levels keep historical defaults',()=>{
 for(const [id,level] of expected){
  const family=p.conversationFamilies.find(f=>f.id===id);
  assert.equal(p.resolveConversationLevel(family,level),level);
  for(const invalid of ['C1','C2','a1','INVALID',''])assert.equal(p.resolveConversationLevel(family,invalid),family.defaultLevel);
  assert.equal(p.conversationLevelUrl(`https://example.test${family.canonicalPath}?locale=es&utm_source=teacher#round`,family,level),`${family.canonicalPath}?locale=es&utm_source=teacher&level=${level}#round`);
  for(const seed of p.lessons.filter(l=>family.legacyLessonIds.includes(l.id))){
   assert.equal(p.resolveConversationLevel({...family,defaultLevel:seed.level},'C2'),seed.level);
  }
 }
});
