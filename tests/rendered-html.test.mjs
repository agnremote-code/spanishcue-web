import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
const root=process.env.CHESPANISH_TEST_ORIGIN||'http://127.0.0.1:8787';

test('unknown public routes return a real 404 response',async()=>{
 const response=await fetch(root+'/does-not-exist-release-check');
 assert.equal(response.status,404);
 assert.match(await response.text(),/Esta página no está disponible|404/i);
});

test('library renders SPANISHCUE and excludes paid lesson bodies from public HTML',async()=>{
 const response=await fetch(root);assert.equal(response.status,200);const html=await response.text();
 assert.match(html,/SPANISHCUE/);assert.match(html,/Deja de crear cada clase/);assert.match(html,/>Entrar</);assert.match(html,/Probar gratis/);
 assert.match(html,/rel="canonical" href="https:\/\/spanishcue\.com\/"/i);
 assert.match(html,/Clase 01/);assert.match(html,/href="\/mexico"/);assert.match(html,/49 clases/);assert.match(html,/data-curriculum-order="100"/);
 assert.doesNotMatch(html,/SORPRÉNDEME|Sorpréndeme/);
 assert.doesNotMatch(html,/Promoción de lanzamiento|(?:US\$|\$)\s*(?:7\.49|14\.99)|library-access-dialog/);
 assert.doesNotMatch(html,/<meta[^>]*name="codex-preview"/);
 assert.doesNotMatch(html,/Vos ___ \(trabajar\) desde casa/);
 assert.match(html,/data-access="locked"/);assert.match(html,/data-access="open"/);
 assert.match(response.headers.get('cache-control'),/no-store/);
});

test('public verbal map exposes its 17-class index without leaking paid lesson bodies',async()=>{
 const response=await fetch(root+'/sistema-verbal');assert.equal(response.status,200);const html=await response.text();
 assert.match(html,/El sistema verbal/);assert.match(html,/16 TIEMPOS/);assert.match(html,/17(?:<!-- -->|\s)+clases/i);
 assert.match(html,/POR MODO/);assert.match(html,/POR TIEMPO/);
 assert.doesNotMatch(html,/Todos los días Ana ___ a las siete/);
});

test('login page shows Google, email and password while unconfigured Apple stays hidden',async()=>{
 const response=await fetch(root+'/ingresar?modo=registro');assert.equal(response.status,200);const html=await response.text();
 assert.match(html,/Continuar con Google/);assert.match(html,/type="email"/);assert.match(html,/type="password"/);assert.match(html,/Registrarse como profe/);
 assert.match(html,/Al crear una cuenta aceptas los/);assert.match(html,/href="\/terms"/);assert.match(html,/href="\/privacy"/);
 assert.doesNotMatch(html,/Continuar con Apple|ChatGPT/);
});

test('pre-launch pricing and legal routes are truthful, public and linked',async()=>{
 const pricing=await fetch(root+'/pricing');assert.equal(pricing.status,200);const pricingHtml=await pricing.text();
 assert.match(pricingHtml,/PRO abre próximamente/);assert.match(pricingHtml,/Sin pago hoy/);assert.match(pricingHtml,/href="\/terms"/);assert.match(pricingHtml,/href="\/privacy"/);assert.match(pricingHtml,/href="\/contact"/);
 assert.doesNotMatch(pricingHtml,/>Pago en preparación</);
 for(const [path,copy] of [['/privacy','Qué datos trata SPANISHCUE'],['/terms','Servicio actual'],['/contact','Soporte y privacidad']]){
  const response=await fetch(root+path);assert.equal(response.status,200);assert.match(await response.text(),new RegExp(copy));
 }
});

test('the pre-launch Founder reservation works without starting checkout',async()=>{
 const response=await fetch(root+'/api/founder-access',{method:'POST',headers:{origin:root,'content-type':'application/json'},body:JSON.stringify({name:'Automated QA',email:'founder-qa@example.com',returnTo:'/pricing',website:''})});
 assert.equal(response.status,200);assert.match((await response.json()).message,/Guardamos tu lugar|ya tenía reservado/);
 const repeated=await fetch(root+'/api/founder-access',{method:'POST',headers:{origin:root,'content-type':'application/json'},body:JSON.stringify({name:'Automated QA',email:'founder-qa@example.com',returnTo:'/pricing',website:''})});
 assert.equal(repeated.status,200);assert.match((await repeated.json()).message,/ya tenía reservado/);
});

test('public images and the vinext optimizer return inline image MIME types',async()=>{
 const direct=await fetch(root+'/brand/spanishcue-hero-v2.webp');assert.equal(direct.status,200);assert.match(direct.headers.get('content-type')||'',/^image\/webp/i);assert.notEqual(direct.headers.get('content-disposition'),'attachment');
 const optimized=await fetch(root+'/_vinext/image?url=%2Fbrand%2Fspanishcue-hero-v2.webp&w=640&q=75');assert.equal(optimized.status,200);assert.match(optimized.headers.get('content-type')||'',/^image\//i);assert.notEqual(optimized.headers.get('content-disposition'),'attachment');
});

test('lesson cards expose real links and explain view results versus the complete catalog',async()=>{
 const response=await fetch(root);assert.equal(response.status,200);const html=await response.text();
 assert.match(html,/class="card-hitarea" href="\/acceso\?returnTo=/);assert.match(html,/class="card-hitarea" href="\/el-hotel-de-lo-imposible"/);
 assert.match(html,/82(?:<!-- -->|\s)+resultados/);assert.match(html,/111(?:<!-- -->|\s)+clases totales/);
 assert.match(html,/No está afiliado ni respaldado por el Instituto Cervantes/);
});

test('English UI is server-rendered, persists by cookie and leaves lesson content in Spanish',async()=>{
 const response=await fetch(root+'/?lang=en');assert.equal(response.status,200);const html=await response.text();
 assert.equal(response.headers.get('content-language'),'en');
 assert.match(response.headers.get('set-cookie')||'',/spanishcue_locale=en/);
 assert.match(html,/<html[^>]*lang="en"/);assert.match(html,/Stop building every lesson/);
 assert.match(html,/Try it free/);assert.match(html,/Lesson 01/);
 assert.match(html,/La Fábrica de los Nombres/);assert.doesNotMatch(html,/The Noun Factory/);
 assert.match(html,/hreflang="es"/i);assert.match(html,/hreflang="en"/i);assert.match(html,/hreflang="x-default"/i);
 assert.match(html,/rel="canonical" href="https:\/\/spanishcue\.com\/\?lang=en"/i);
 assert.match(html,/hreflang="es" href="https:\/\/spanishcue\.com\/"/i);
 assert.match(html,/hreflang="en" href="https:\/\/spanishcue\.com\/\?lang=en"/i);
 assert.match(html,/hreflang="x-default" href="https:\/\/spanishcue\.com\/"/i);
 const persisted=await fetch(root,{headers:{cookie:'spanishcue_locale=en'}});assert.equal(persisted.status,200);
 assert.match(await persisted.text(),/Stop building every lesson/);
});

test('SEO metadata gives each localized public URL its own canonical and noindexes account or checkout surfaces', async () => {
 const [layout, sitemap, robots] = await Promise.all([
  readFile('app/layout.tsx','utf8'), readFile('app/sitemap.ts','utf8'), readFile('app/robots.ts','utf8'),
 ]);
 assert.match(layout,/isSearchPrivatePath/);
 assert.match(layout,/robots:\s*isSearchPrivatePath\(pathname\)\s*\?\s*\{\s*index:\s*false/);
 assert.match(layout,/const canonical = localizedUrl\(pathname, locale\)/);
 assert.match(sitemap,/alternates:/);
 assert.match(sitemap,/languages:/);
 assert.match(robots,/\/ingresar/);
 assert.match(robots,/\/cuenta/);
 assert.match(robots,/\/acceso/);
});
