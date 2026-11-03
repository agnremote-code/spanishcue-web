import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';
const paths=['/material-ele/formatos','/material-ele/formatos/mundos-3d','/material-ele/formatos/mundos-3d/b1','/material-ele/gramatica','/material-ele/vocabulario','/material-ele/funciones','/material-ele/cultura','/material-ele/gramatica/presente-de-indicativo','/material-ele/gramatica/ser-y-estar','/material-ele/gramatica/presente-de-subjuntivo','/material-ele/vocabulario/comida-y-restaurante','/material-ele/funciones/dar-consejos-y-recomendaciones','/material-ele/cultura/argentina','/material-ele/gramatica/presente-de-indicativo/a1','/material-ele/gramatica/presente-de-subjuntivo/b1','/material-ele/vocabulario/comida-y-restaurante/a2','/material-ele/funciones/narrar/b1'];
for(const path of paths)test(`topic index serves indexable Spanish HTML for anonymous visitors: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 assert.equal(response.headers.get('cache-control'),'public, max-age=0, must-revalidate');assert.ok(!response.headers.has('set-cookie'));
 const dom=new JSDOM(await response.text());const d=dom.window.document;
 assert.equal(d.documentElement.lang,'es');
 assert.equal(d.querySelectorAll('h1').length,1);
 assert.equal(d.querySelector('link[rel="canonical"]').href,'https://spanishcue.com'+path);
 assert.doesNotMatch(d.querySelector('meta[name="robots"]')?.content||'',/noindex/);
 const schemas=[...d.querySelectorAll('script[type="application/ld+json"]')].map(s=>JSON.parse(s.textContent));
 for(const type of ['BreadcrumbList','FAQPage'])assert.ok(schemas.some(s=>s['@type']===type),type);
 assert.ok(schemas.some(s=>['WebPage','CollectionPage'].includes(s['@type'])&&s.inLanguage==='es'));
 assert.ok(d.querySelector('a[href="/pricing"]'),'buy link');
 assert.match(d.querySelector('main').textContent,/US\$19,90 al mes/);
 assert.ok(d.querySelector('a[href="/material-ele"]'),'links the hub');
 if(path.split('/').length>=4)assert.ok(d.querySelectorAll('main a[href^="/"]').length>=12,'topic page links its classes and related topics');
 if(path.split('/').length>=4)assert.match(d.querySelector('main').textContent,/Compartir en tu aula virtual/);
 if(path.split('/').length>=4){
  // Its own picture (the cover of its first class), visible dates, and the class recording described as a VideoObject.
  assert.notEqual(d.querySelector('meta[property="og:image"]').content,'https://spanishcue.com/social/spanishcue-og-v2.jpg',path);
  assert.match(d.querySelector('meta[property="og:image"]').content,/^https:\/\/spanishcue\.com\//);
  const page=schemas.find(s=>s['@type']==='WebPage');assert.match(page.datePublished,/^\d{4}-\d{2}-\d{2}$/);assert.ok(page.dateModified>=page.datePublished);assert.equal(page.image,d.querySelector('meta[property="og:image"]').content);
  assert.match(d.querySelector('main').textContent,/Publicado el \d+ de [a-z]+ de 20\d\d/);
  const video=d.querySelector('main video');assert.ok(video,'visible recording');assert.match(video.getAttribute('src'),/^\/(conversation|grammar)-previews\/\d+\.mp4$/);assert.ok(video.getAttribute('poster'));
  const vo=schemas.find(s=>s['@type']==='VideoObject');assert.equal(vo.contentUrl,'https://spanishcue.com'+video.getAttribute('src'));assert.ok(vo.uploadDate&&vo.thumbnailUrl[0]&&vo.name&&vo.description);
 }
 dom.window.close();
});
test('the sitemap is an image and video sitemap for Material ELE',async()=>{
 const xml=await (await fetch(origin+'/sitemap.xml')).text();
 assert.match(xml,/xmlns:image="http:\/\/www\.google\.com\/schemas\/sitemap-image\/1\.1"/);assert.match(xml,/xmlns:video="http:\/\/www\.google\.com\/schemas\/sitemap-video\/1\.1"/);
 assert.ok((xml.match(/<image:loc>/g)||[]).length>=1000,'image entries');assert.ok((xml.match(/<video:video>/g)||[]).length>=200,'video entries');
 assert.match(xml,/<video:content_loc>https:\/\/spanishcue\.com\/(conversation|grammar)-previews\/\d+\.mp4<\/video:content_loc>/);
 for(const m of xml.matchAll(/<video:content_loc>https:\/\/spanishcue\.com([^<]+)<\/video:content_loc>/g).toArray().slice(0,3)){const r=await fetch(origin+m[1],{method:'HEAD'});assert.equal(r.status,200,m[1]);}
});
test('the home page lists the newest classes with their dates',async()=>{
 const d=new JSDOM(await (await fetch(origin+'/material-ele')).text()).window.document;
 assert.match(d.querySelector('#novedades, main').textContent,/Novedades/);assert.ok(d.querySelectorAll('main time[datetime]').length>=6,'dated novedades');
});
test('unknown topic group and topic are 404s',async()=>{
 assert.equal((await fetch(origin+'/material-ele/gramatica/no-existe')).status,404);
 assert.equal((await fetch(origin+'/material-ele/no-existe/presente-de-indicativo')).status,404);
 assert.equal((await fetch(origin+'/material-ele/gramatica/presente-de-indicativo/z9')).status,404);
 assert.equal((await fetch(origin+'/material-ele/vocabulario/familia/c9')).status,404);
});

// Board review 2026-11-03 (B1): a level page that lost its classes answers 308 to its topic page in the built Worker.
test('a retired level page 308-redirects to its topic page',async()=>{
 const response=await fetch(origin+'/material-ele/gramatica/oraciones-finales/a1',{redirect:'manual'});
 assert.equal(response.status,308);
 assert.equal(new URL(response.headers.get('location'),origin).pathname,'/material-ele/gramatica/oraciones-finales');
});
