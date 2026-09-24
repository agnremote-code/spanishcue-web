import test from 'node:test';
import assert from 'node:assert/strict';
const origin=process.env.CHESPANISH_TEST_ORIGIN;
test('all family entry points and query variants stay protected before rendering',{skip:!origin},async()=>{
 for(const path of ['/red-flag-o-no-a2?level=B2','/red-flag-o-no-b1?level=A2','/la-maquina-que-elimina-cosas?level=A2','/tu-vida-con-una-regla-absurda-a2?level=B1','/preguntas-prohibidas?level=A2','/a1-conversation?level=B1','/reino-unido-en-relieve?level=B1','/australia-en-movimiento?level=A2','/estados-unidos-basico?level=A1']){
  for(const headers of [{},{'x-chespanish-access-level':'full','x-chespanish-owner':'1'}]){
   const response=await fetch(origin+path,{redirect:'manual',headers});
   assert.equal(response.status,302,path);
   const location=new URL(response.headers.get('location'),origin);
   assert.equal(location.pathname,'/acceso');assert.equal(location.searchParams.get('returnTo'),path);
  }
 }
});
test('free atlas and public resource family pages remain public',{skip:!origin},async()=>{
 for(const path of ['/estados-unidos-a2-b1?level=A2','/estados-unidos-a2-b1?level=B1','/mexico','/resources','/resources/spanish-conversation-activity-a2-red-flag-o-no-a2?level=B2','/resources/spanish-conversation-activity-b2-red-flag-o-no-b2']){
  const r=await fetch(origin+path);assert.equal(r.status,200,path);
  const html=await r.text();
  if(path.includes('red-flag')){
   assert.match(html,/level=B2/);assert.doesNotMatch(html,/Tu pareja no te presenta a nadie importante/);
   assert.match(html,/canonical[^>]*spanish-conversation-activity-a2-red-flag-o-no-a2["\s]/);
  }
 }
});
test('sitemap contains canonical family once and never query variants',{skip:!origin},async()=>{
 const text=await (await fetch(origin+'/sitemap.xml')).text();
 assert.equal((text.match(/<loc>https:\/\/spanishcue.com\/resources\/spanish-conversation-activity-a2-red-flag-o-no-a2<\/loc>/g)||[]).length,1);
 assert.ok(!text.includes('/resources/spanish-conversation-activity-b2-red-flag-o-no-b2'));
 assert.ok(!text.includes('level='));
});
