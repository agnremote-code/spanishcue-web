import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const origin=process.env.CHESPANISH_TEST_ORIGIN||'http://127.0.0.1:8787';
const get=path=>fetch(origin+path,{redirect:'manual'});
test('existing free grammar routes serve the live class and their reference banks remain reachable',async()=>{
  for(const [id,path] of [[40,'/la-fabrica-de-los-nombres'],[41,'/el-atelier-de-la-concordancia']]){
    const response=await get(path);assert.equal(response.status,200);const html=await response.text();
    assert.match(html,new RegExp(`data-live-class="${id}"`));
    assert.match(html,/60 min/);assert.match(html,/Material de consulta y ampliación/);
    assert.doesNotMatch(html,/La cita que cambió dos veces|La biblioteca municipal prepara una reforma/);
    const legacy=await get(path+'?reference=1');assert.equal(legacy.status,200);
    assert.match(await legacy.text(),/Volver a la clase guiada/);
    const audio=await get(`/audio/grammar-free/${id}.mp3`);assert.equal(audio.status,200);
    assert.match(audio.headers.get('content-type')||'',/audio/);assert.ok((await audio.arrayBuffer()).byteLength>1000);
  }
});
test('all six new routes and recordings retain paid access, including RSC requests',async()=>{
  const slugs=['desde-hace-duracion','por-para-razones-objetivos','pasiva-impersonal-informar','estilo-indirecto-transmitir','relativos-con-preposicion','consecuencias-tan-tanto'];
  for(const [i,slug] of slugs.entries()){
    for(const headers of [{},{rsc:'1','x-chespanish-access-level':'full'}]){
      const response=await fetch(origin+'/gramatica/'+slug,{headers,redirect:'manual'});
      assert.equal(response.status,302,slug);assert.match(response.headers.get('cache-control')||'',/private, no-store/);
      assert.doesNotMatch(await response.text(),/Organizar una entrega compartida|La cita que cambió/);
    }
    const audio=await get(`/audio/grammar-classroom/${230+i}.mp3`);assert.equal(audio.status,403);await audio.arrayBuffer();
  }
});
test('the A0 first class is a free live-only route with a public recording; other live recordings stay private',async()=>{
  const response=await fetch(origin+'/gramatica/clase-inicial',{redirect:'manual'});
  assert.equal(response.status,200);assert.match(await response.text(),/Soy Alex|abuel/);
  const free=await get('/audio/grammar-free/239.mp3');assert.equal(free.status,200);await free.arrayBuffer();
  const paid=await get('/audio/grammar-live/303.mp3');assert.equal(paid.status,403);await paid.arrayBuffer();
});
test('the free classroom renderer hydrates from a public chunk without paid teaching bodies',async()=>{
  const report=JSON.parse(readFileSync('dist/.openai/client-protection-report.json','utf8'));
  const files=report.publicFiles.filter(f=>/\/Classroom-[^/]+\.js$/.test(f));assert.equal(files.length,1);
  assert.equal(report.protectedFiles.includes(files[0]),false);
  const response=await get('/'+files[0]);assert.equal(response.status,200);const js=await response.text();
  assert.doesNotMatch(js,/El viernes entregamos los materiales|Un grupo de profesionales busca un local/);
});
test('the premium article gallery and its recording stay outside the public asset graph',async()=>{
 const report=JSON.parse(readFileSync('dist/.openai/client-protection-report.json','utf8'));
 const files=report.protectedFiles.filter(f=>/\/(?:ArticleClassroom|article-world)-[^/]+\.js$/.test(f));assert.equal(files.length,2);
 for(const file of files){assert.equal(report.publicFiles.includes(file),false);const response=await get('/'+file);assert.equal(response.status,403);await response.arrayBuffer();}
 const audio=await get('/audio/grammar-classroom/42.mp3');assert.equal(audio.status,403);await audio.arrayBuffer();
 const page=await get('/la-galeria-de-los-articulos');assert.equal(page.status,302);assert.doesNotMatch(await page.text(),/GALERÍA DE REFERENTES|Cerca de mi trabajo hay/);
});
test('per-student live class sessions are an account API: anonymous visitors get nothing, no cache, no cross-origin writes',async()=>{
  const list=await get('/api/live-class?lessonId=239');assert.equal(list.status,401);
  assert.equal(list.headers.get('cache-control'),'private, no-store');await list.arrayBuffer();
  const one=await get('/api/live-class?lessonId=239&studentId=abc');assert.equal(one.status,401);await one.arrayBuffer();
  const put=await fetch(origin+'/api/live-class',{method:'PUT',headers:{'content-type':'application/json','origin':'https://evil.example'},body:JSON.stringify({lessonId:239,studentId:'abc',saved:{values:{},results:{}}})});
  assert.equal(put.status,401);await put.arrayBuffer();
  const del=await fetch(origin+'/api/live-class?lessonId=239&studentId=abc',{method:'DELETE'});assert.equal(del.status,401);await del.arrayBuffer();
});
test('encrypted live lesson blobs are not served to visitors',async()=>{
  const lessons=(await import(new URL('../dist/server/private-lesson-assets.js',import.meta.url))).default;
  for(const id of ['40','239',Object.keys(lessons).at(-1)]){
    const response=await get(lessons[id].assetPath);assert.notEqual(response.status,200,id);await response.arrayBuffer();
  }
});
