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
 assert.match(html,/Clase 01/);assert.match(html,/href="\/mexico"/);assert.match(html,/51 clases/);assert.match(html,/data-curriculum-order="100"/);
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
 const direct=await fetch(root+'/brand/spanishcue-hero-online.webp');assert.equal(direct.status,200);assert.match(direct.headers.get('content-type')||'',/^image\/webp/i);assert.notEqual(direct.headers.get('content-disposition'),'attachment');
 const optimized=await fetch(root+'/_vinext/image?url=%2Fbrand%2Fspanishcue-hero-online.webp&w=640&q=75');assert.equal(optimized.status,200);assert.match(optimized.headers.get('content-type')||'',/^image\//i);assert.notEqual(optimized.headers.get('content-disposition'),'attachment');
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
 // The language toggle never creates a second indexable URL: clean canonical, no hreflang.
 assert.match(html,/rel="canonical" href="https:\/\/spanishcue\.com\/"/i);
 assert.doesNotMatch(html,/rel="canonical" href="[^"]*\?lang=/i);
 assert.doesNotMatch(html,/hreflang=/i);
 const persisted=await fetch(root,{headers:{cookie:'spanishcue_locale=en'}});assert.equal(persisted.status,200);
 assert.match(await persisted.text(),/Stop building every lesson/);
});

test('SEO metadata gives each public URL one clean canonical and noindexes account or checkout surfaces without robots.txt blocks', async () => {
 const [layout, sitemap, robots] = await Promise.all([
  readFile('app/layout.tsx','utf8'), readFile('app/sitemap.ts','utf8'), readFile('app/robots.ts','utf8'),
 ]);
 assert.match(layout,/isSearchPrivatePath/);
 assert.match(layout,/robots:\s*isSearchPrivatePath\(pathname\)\s*\?\s*\{\s*index:\s*false/);
 assert.match(layout,/const canonical = canonicalUrl\(pathname\)/);
 assert.doesNotMatch(layout,/localizedUrl/);
 assert.doesNotMatch(sitemap,/\?lang=(?:en|es|\$\{)|localizedUrl/);
 // noindex pages must stay crawlable so Google can read the directive.
 assert.doesNotMatch(robots,/\/ingresar|\/cuenta|\/acceso|\/pro\/|\/admin/);
 assert.match(robots,/"\/api\/"/);
});

test('robots.txt and sitemap.xml expose the organic architecture and nothing private',async()=>{
 const robots=await fetch(root+'/robots.txt');assert.equal(robots.status,200);const robotsText=await robots.text();
 assert.match(robotsText,/Disallow: \/api\//);assert.doesNotMatch(robotsText,/Disallow: \/(?:acceso|ingresar|cuenta|zeely|lp)/);assert.match(robotsText,/Sitemap: https:\/\/spanishcue\.com\/sitemap\.xml/);
 const sitemap=await fetch(root+'/sitemap.xml');assert.equal(sitemap.status,200);const xml=await sitemap.text();
 for(const path of ['/spanish-teacher-resources','/spanish-conversation-activities','/spanish-conversation-activities/a1','/spanish-conversation-activities/c2','/spanish-conversation-questions','/resources','/guides','/autoestudio','/autoestudio/a1','/mexico','/pricing']){
  assert.match(xml,new RegExp(`<loc>https://spanishcue\\.com${path.replace(/\//g,'\\/')}</loc>`),path);
 }
 assert.doesNotMatch(xml,/\?lang=/);assert.doesNotMatch(xml,/spanishcue\.com\/(?:lp|zeely|acceso|ingresar|cuenta|pro)\b/);
});

test('private, campaign and tooling surfaces carry noindex in the header and the HTML',async()=>{
 for(const [path,directive] of [['/acceso','noindex, nofollow'],['/ingresar','noindex, nofollow'],['/zeely','noindex, nofollow'],['/lp/spanish-conversation-activities','noindex, follow']]){
  const response=await fetch(root+path);assert.equal(response.headers.get('x-robots-tag'),directive,path);
  if(response.status===200)assert.match(await response.text(),/<meta name="robots" content="noindex/i,path);
 }
 const home=await fetch(root);assert.equal(home.headers.get('x-robots-tag'),null);
 const hub=await fetch(root+'/spanish-conversation-activities');assert.equal(hub.headers.get('x-robots-tag'),null);
});

test('campaign landings under /lp reuse the conversion template with a self canonical and stay out of search',async()=>{
 const response=await fetch(root+'/lp/spanish-conversation-activities');assert.equal(response.status,200);const html=await response.text();
 assert.match(html,/campaign-page/);assert.match(html,/id="founder-offer"/);
 assert.match(html,/rel="canonical" href="https:\/\/spanishcue\.com\/lp\/spanish-conversation-activities"/i);
 assert.match(html,/<meta name="robots" content="noindex, follow"/i);assert.doesNotMatch(html,/hreflang=/i);
 assert.equal(response.headers.get('content-language'),'en');
 const spanish=await fetch(root+'/lp/ele-recursos-profesores');assert.equal(spanish.status,200);assert.equal(spanish.headers.get('content-language'),'es');
 assert.equal((await fetch(root+'/lp/does-not-exist')).status,404);
});

test('the conversation hub is an indexable English CollectionPage linking every level',async()=>{
 const response=await fetch(root+'/spanish-conversation-activities');assert.equal(response.status,200);const html=await response.text();
 assert.equal(response.headers.get('content-language'),'en');assert.match(html,/<html[^>]*lang="en"/);
 assert.match(html,/<h1[^>]*>Spanish Conversation Activities by Level/);
 assert.match(html,/rel="canonical" href="https:\/\/spanishcue\.com\/spanish-conversation-activities"/i);
 assert.doesNotMatch(html,/hreflang=/i);assert.doesNotMatch(html,/<meta name="robots" content="noindex/i);
 assert.match(html,/"@type":"CollectionPage"/);assert.match(html,/"@type":"BreadcrumbList"/);
 for(const level of ['a1','a2','b1','b2','c1','c2'])assert.match(html,new RegExp(`href="/spanish-conversation-activities/${level}"`),level);
 assert.match(html,/href="\/spanish-conversation-questions"/);assert.match(html,/href="\/mexico"/);assert.match(html,/href="\/guides\/spanish-conversation-activities-by-level"/);
 assert.doesNotMatch(html,/Vos |vos |tenés|querés|podés/);
});

test('level pages render their activities, questions and real lessons with a clean canonical',async()=>{
 const response=await fetch(root+'/spanish-conversation-activities/b1');assert.equal(response.status,200);const html=await response.text();
 assert.match(html,/<h1[^>]*>B1 Spanish Conversation Activities/);assert.match(html,/Rank and defend/);assert.match(html,/Story with a twist/);
 assert.match(html,/rel="canonical" href="https:\/\/spanishcue\.com\/spanish-conversation-activities\/b1"/i);
 assert.match(html,/href="\/mexico"/);assert.match(html,/href="\/resources\/spanish-conversation-activity-/);
 assert.match(html,/href="\/spanish-conversation-activities\/a2"/);assert.match(html,/href="\/spanish-conversation-activities\/b2"/);
 assert.match(html,/"educationalLevel":"B1"/);assert.match(html,/MÉXICO/);
 assert.equal((await fetch(root+'/spanish-conversation-activities/zz')).status,404);
});

test('the question bank serves every graded question in the initial HTML',async()=>{
 const response=await fetch(root+'/spanish-conversation-questions');assert.equal(response.status,200);const html=await response.text();
 // React separates adjacent text nodes with an empty comment.
 assert.match(html,/<h1[^>]*>150(?:<!-- -->)? Spanish Conversation Questions/);
 assert.ok((html.match(/<b lang="es">/g)||[]).length>=150,'all 150 questions server-rendered');
 assert.match(html,/id="b1"/);assert.match(html,/rel="canonical" href="https:\/\/spanishcue\.com\/spanish-conversation-questions"/i);
 assert.match(html,/¿Qué hiciste el fin de semana pasado\?|¿Qué hiciste ayer por la tarde\?/);
});

test('the teacher-resources hub, homepage and pricing page expose clean canonicals and site schema',async()=>{
 const hub=await fetch(root+'/spanish-teacher-resources');assert.equal(hub.status,200);const hubHtml=await hub.text();
 assert.match(hubHtml,/<h1[^>]*>Spanish Teacher Resources/);assert.match(hubHtml,/rel="canonical" href="https:\/\/spanishcue\.com\/spanish-teacher-resources"/i);
 assert.match(hubHtml,/href="\/spanish-conversation-activities"/);assert.match(hubHtml,/href="\/guides"/);assert.match(hubHtml,/href="\/autoestudio"/);assert.doesNotMatch(hubHtml,/hreflang=/i);
 const home=await fetch(root);const homeHtml=await home.text();
 assert.match(homeHtml,/"@type":"Organization"/);assert.match(homeHtml,/"@type":"WebSite"/);assert.doesNotMatch(homeHtml,/id="spanishcue-marketing-assets"/);assert.match(homeHtml,/href="\/zeely"/);
 assert.match(homeHtml,/<title>Clases de español listas para enseñar \(A1–C2\) \| SPANISHCUE<\/title>/);
 const englishHome=await fetch(root+'/?lang=en');assert.match(await englishHome.text(),/<title>Interactive Spanish Lessons for Teachers \(A1–C2\) \| SPANISHCUE<\/title>/);
 const pricing=await fetch(root+'/pricing?lang=en');const pricingHtml=await pricing.text();
 assert.match(pricingHtml,/rel="canonical" href="https:\/\/spanishcue\.com\/pricing"/i);assert.doesNotMatch(pricingHtml,/hreflang=/i);
 const resource=await fetch(root+'/resources/spanish-conversation-activity-b1-mexico');assert.equal(resource.status,200);
 assert.match(await resource.text(),/href="\/spanish-conversation-activities\/b1"/);
});
