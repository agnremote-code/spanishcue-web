import assert from 'node:assert/strict';
import test from 'node:test';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';
const get=(path,init={})=>fetch(origin+path,{redirect:'manual',...init});

test('repeated slashes redirect to the canonical path before access checks',async()=>{
 for(const [path,target] of [['/api//admin/billing','/api/admin/billing'],['/api/admin//teachers','/api/admin/teachers'],['/autoestudio/a1//semana-3','/autoestudio/a1/semana-3'],['//gramatica/clase-inicial','/gramatica/clase-inicial'],['/noche-abierta//','/noche-abierta']]){
  const response=await get(path);await response.arrayBuffer();
  assert.equal(response.status,308,path);
  assert.equal(new URL(response.headers.get('location')).pathname,target,path);
 }
});

test('owner data and premium bodies stay closed to anonymous visitors',async()=>{
 for(const path of ['/api/admin/billing','/api/admin/teachers','/api/admin/export','/api/settings']){
  const response=await get(path);assert.equal(response.status,403,path);
  assert.doesNotMatch(await response.text(),/totalUsers|activePro/,path);
 }
 for(const path of ['/autoestudio/a1/semana-3','/autoestudio/a1/semana-3.rsc','/gramatica/clase-inicial','/gramatica/clase-inicial.rsc','/noche-abierta','/hospital-san-casi-vivo','/marketing-de-casinos']){
  const response=await get(path);await response.arrayBuffer();
  assert.equal(response.status,302,path);assert.match(response.headers.get('location'),/\/acceso\?returnTo=/,path);
 }
});

test('public SEO pages and free samples still render for anonymous visitors',async()=>{
 for(const path of ['/','/spanish-grammar-lessons','/resources','/para-profesores','/aprender-espanol','/demo/noche-abierta','/autoestudio','/autoestudio/a1/semana-1','/la-fabrica-de-los-nombres','/sitemap.xml','/robots.txt']){
  const response=await get(path);await response.arrayBuffer();assert.equal(response.status,200,path);
 }
});
