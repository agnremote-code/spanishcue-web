import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';

const bundle = await build({stdin:{contents:`export {catalogLessons} from './app/conversation-families/catalog'; export {filterLessons} from './app/library-filters.mjs'; export {conversationLevelUrl,resolveConversationLevel} from './app/conversation-families/navigation';`,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const product = await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const levels = ['A0','A1','A2','B1','B2','C1','C2'];
for(const slug of ['suecia','argentina','espana']) test(`${slug}: exactly one country with seven working level links`,()=>{
 const cards = product.catalogLessons.filter(l=>l.path===`/${slug}`);
 assert.equal(cards.length,1);
 const lesson = cards[0];
 assert.equal(lesson.countryCollection,true);
 assert.deepEqual(lesson.levels,levels);
 for(const level of levels) {
  assert.ok(product.filterLessons(cards,{level}).length===1);
  assert.equal(product.conversationLevelUrl(`https://spanishcue.com/${slug}?utm_source=test#map`,{availableLevels:levels,defaultLevel:'A1'},level),`/${slug}?utm_source=test&level=${level}#map`);
 }
});
const contentBundle=await build({stdin:{contents:`export * from './app/country-atlas/data'; export * from './app/country-atlas/map-data';`,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const content=await import('data:text/javascript;base64,'+Buffer.from(contentBundle.outputFiles[0].text).toString('base64'));
test('each level has its own complete 60-minute journey with no duplicate regional signals',()=>{
 for(const country of Object.values(content.countries)) {
  assert.doesNotThrow(()=>content.validateCountry(country));
  const allPrompts=[];
  for(const level of levels) {
   const activities=country.lessons[level];
   assert.equal(activities.reduce((n,a)=>n+a.minutes,0),60);
   assert.equal(new Set(activities.map(a=>a.kind)).size,10);
   allPrompts.push(...activities.map(a=>a.prompt.es));
  }
  assert.equal(new Set(allPrompts).size,70);
  const bad={...country,regions:[...country.regions,country.regions[0]]};
  assert.throws(()=>content.validateCountry(bad),/duplicate/);
 }
});
test('A0 every construction supplies translations, safe completions and micro grammar',()=>{
 for(const country of Object.values(content.countries))for(const a of country.lessons.A0){
  for(const item of [a.title,a.prompt,a.model,a.tip,a.followup,...a.options])assert.ok(item.es&&item.en);
  assert.ok(a.frame);
  assert.ok(a.options.length>=2);
 }
});
test('Spain includes all 17 communities plus Ceuta and Melilla, and Canary islands use a separate viewport',()=>{
 const spain=content.countries.espana;
 assert.equal(spain.regions.length,19);
 for(const id of ['ceuta','melilla','canarias','baleares','navarra','rioja'])assert.ok(spain.regions.some(r=>r.id===id));
 assert.equal(content.atlasMaps.espana.viewports.length,2);
 for(const country of Object.values(content.countries))for(const region of country.regions){
  const v=content.atlasMaps[country.slug].viewports[country.slug==='espana'&&region.lon< -12?1:0];
  assert.ok(region.lon>=v.bounds[0]&&region.lon<=v.bounds[2],region.id);
  assert.ok(region.lat>=v.bounds[1]&&region.lat<=v.bounds[3],region.id);
 }
});
