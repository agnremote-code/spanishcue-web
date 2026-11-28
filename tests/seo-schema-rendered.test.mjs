import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';
const ORG='https://spanishcue.com/#organization';
const PERSON='https://spanishcue.com/equipo#ale';

// SEO plan step 7 (docs/seo-plan/06_SCHEMA/LEEME.md): one page per template. Every JSON-LD block must parse,
// carry the properties Google requires for its type, and name the brand through the homepage entity's @id.
const paths=['/','/material-ele','/material-ele/futuro','/material-ele/formatos/comprension-auditiva/a1','/material-ele/guia/ejercicios-ele-con-soluciones','/material-ele/ficha/indefinido-e-imperfecto','/material-ele/actividad/quien-es-quien','/guides/spanish-subjunctive-lesson-plan','/guides/assess-spanish-student-level-online','/resources/spanish-conversation-activity-a0-b1-estados-unidos','/recursos/actividad-de-conversacion-a0-b1-estados-unidos','/spanish-grammar-lessons','/ser-o-estar','/dudas-del-espanol/haber-o-a-ver','/conjugacion','/gramatica/indefinido-e-imperfecto','/about','/equipo','/material-ele/a1','/datos','/datos/errores-preterito-perfecto-a2','/datos/que-autocompleta-google-en-gramatica','/spanish-reading-comprehension','/spanish-reading-comprehension/a1','/spanish-grammar-practice','/spanish-grammar-practice/subjunctive','/ap-spanish-language','/ap-spanish-language/argumentative-essay','/spanish-sub-plans','/spanish-sub-plans/spanish-2','/spanish-vocabulary','/spanish-vocabulary/food','/spanish-verb-practice','/spanish-verb-practice/tener','/ap-spanish-language/themes','/ap-spanish-language/themes/families-and-communities'];

const required={
 BreadcrumbList:n=>n.itemListElement.length>=2&&n.itemListElement.every((it,i)=>it['@type']==='ListItem'&&it.position===i+1&&it.name&&/^https:\/\/spanishcue\.com\//.test(it.item)),
 FAQPage:n=>n.mainEntity.length>=1&&n.mainEntity.every(q=>q['@type']==='Question'&&q.name&&q.acceptedAnswer?.['@type']==='Answer'&&q.acceptedAnswer.text),
 VideoObject:n=>n.name&&n.description&&n.thumbnailUrl?.length&&/^\d{4}-\d{2}-\d{2}T/.test(n.uploadDate)&&n.contentUrl,
 AudioObject:n=>n.name&&n.contentUrl,
 Article:n=>n.headline&&n.datePublished&&n.author&&n.publisher,
 LearningResource:n=>n.name&&n.url,
 Course:n=>n.name&&n.description&&n.provider?.['@id']===ORG&&n.educationalLevel&&n.hasPart?.length>=1,
 Dataset:n=>n.name&&n.description?.length>=50&&n.creator&&n.license&&n.temporalCoverage&&n.distribution?.every(d=>d['@type']==='DataDownload'&&d.contentUrl&&d.encodingFormat),
 DataCatalog:n=>n.name&&n.url&&n.dataset?.length>=1,
 ProfilePage:n=>n.mainEntity?.['@type']==='Person'&&n.mainEntity.name&&n.mainEntity['@id']===PERSON,
 WebPage:n=>n.name&&n.url,CollectionPage:n=>n.name&&n.url,AboutPage:n=>n.name||n.url,
 WebSite:n=>n.name&&n.url&&n['@id']==='https://spanishcue.com/#website',
 Organization:n=>n.name&&n.url&&n.logo&&n['@id']===ORG,
};
const nodesOf=d=>[...d.querySelectorAll('script[type="application/ld+json"]')].flatMap(s=>{const j=JSON.parse(s.textContent);return Array.isArray(j)?j:j['@graph']??[j];});
const orgMentions=n=>[n.publisher,n.author,n.provider].filter(x=>x&&typeof x==='object'&&[x['@type']].flat().includes('Organization'));

for(const path of paths)test(`structured data is valid and names one brand entity: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 const d=new JSDOM(await response.text()).window.document;
 const nodes=nodesOf(d);assert.ok(nodes.length>=1,'no JSON-LD');
 for(const n of nodes){
  assert.equal(n['@context'],'https://schema.org',path);
  const types=[n['@type']].flat();
  const known=types.filter(t=>required[t]);assert.ok(known.length,`${path}: unknown type ${types}`);
  for(const t of known)assert.ok(required[t](n),`${path}: ${t} misses required properties`);
  for(const o of orgMentions(n))assert.equal(o['@id'],ORG,`${path}: ${types} names an organization without the brand @id`);
 }
});

test('the homepage declares the brand as an educational organization with the profiles the owner runs',async()=>{
 const d=new JSDOM(await (await fetch(origin+'/')).text()).window.document;
 const org=nodesOf(d).find(n=>n['@id']===ORG);
 assert.deepEqual(org['@type'],['Organization','EducationalOrganization']);
 assert.equal(org.name,'SPANISHCUE');
 assert.ok(org.alternateName.includes('SpanishCue')&&org.alternateName.includes('Spanish Cue'));
 assert.deepEqual(org.sameAs,['https://www.linkedin.com/company/144023469','https://www.youtube.com/channel/UCCLhj6h2hmjGQZ3XVLyrpUg','https://www.pinterest.com/spanishcue/']);
});

// Mission phase 3: authored pages name one person, level hubs are courses, free worksheets and exercises are learning resources.
test('guides name the author from /equipo, level hubs declare a Course and free practice declares a LearningResource',async()=>{
 const get=async p=>nodesOf(new JSDOM(await (await fetch(origin+p)).text()).window.document);
 const guide=(await get('/material-ele/guia/ejercicios-ele-con-soluciones')).find(n=>n['@type']==='Article');
 assert.equal(guide.author['@id'],PERSON);assert.equal(guide.author['@type'],'Person');
 const course=(await get('/material-ele/a1')).find(n=>n['@type']==='Course');
 assert.equal(course.educationalLevel,'A1');assert.ok(course.hasPart.every(x=>/^https:\/\/spanishcue\.com\//.test(x.url)));
 for(const p of ['/material-ele/ficha/indefinido-e-imperfecto','/ser-o-estar']){
  const lr=(await get(p)).find(n=>n['@type']==='LearningResource');
  assert.ok(lr,p);assert.equal(lr.isAccessibleForFree,true);assert.ok(lr.audience.length>=1);
 }
 const profile=(await get('/equipo')).find(n=>n['@type']==='ProfilePage');
 assert.match(profile.mainEntity.description,/más de diez años/);
 const org=(await get('/')).find(n=>n['@id']===ORG);
 assert.equal(org.founder['@id'],PERSON);
});

// Mission phase 1: data reports publish Article + Dataset + FAQPage, a table, three no-login exercises and the CSV.
test('the data report states its sample, links its CSV and carries Article, Dataset and FAQPage',async()=>{
 const html=await (await fetch(origin+'/datos/errores-preterito-perfecto-a2')).text();
 const d=new JSDOM(html).window.document;
 const types=nodesOf(d).map(n=>n['@type']);
 for(const t of ['Article','Dataset','FAQPage'])assert.ok(types.includes(t),t);
 const lead=d.querySelector('h1').parentElement.textContent.replace(/\s+/g,' ');
 assert.match(lead,/16 de los 43 errores/);assert.match(lead,/74 respuestas equivocadas reales de 6 alumnos/);
 assert.ok(d.querySelectorAll('table').length>=2);
 assert.equal(d.querySelectorAll('form').length>=3,true);
 const article=nodesOf(d).find(n=>n['@type']==='Article');
 assert.match(article.datePublished,/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})$/);assert.ok(article.image);
 const dataset=nodesOf(d).find(n=>n['@type']==='Dataset');
 const res=await fetch(origin+new URL(dataset.distribution[0].contentUrl).pathname);
 assert.equal(res.status,200);assert.match(res.headers.get('content-type')||'',/text\/csv/);
 assert.equal((await res.text()).trim().split('\n').length,44);
 const hub=nodesOf(new JSDOM(await (await fetch(origin+'/datos')).text()).window.document).find(n=>n['@type']==='DataCatalog');
 assert.ok(hub.dataset.some(x=>x.url==='https://spanishcue.com/datos/errores-preterito-perfecto-a2'));
 assert.ok(hub.dataset.every(x=>x.license&&x.creator));
});

test('the autocomplete data report states its sample, links its CSV and is listed on /datos',async()=>{
 const d=new JSDOM(await (await fetch(origin+'/datos/que-autocompleta-google-en-gramatica')).text()).window.document;
 const lead=d.querySelector('h1').parentElement.textContent.replace(/\s+/g,' ');
 assert.match(lead,/2876 sugerencias reales de Google para 342 búsquedas/);
 const types=nodesOf(d).map(n=>n['@type']);for(const t of ['Article','Dataset','FAQPage'])assert.ok(types.includes(t),t);
 assert.ok(d.querySelectorAll('main [role="group"]').length>=3);
 const res=await fetch(origin+'/datos/autocompletado-gramatica-2026-11.csv');assert.equal(res.status,200);assert.equal((await res.text()).trim().split('\n').length,30);
 const hub=new JSDOM(await (await fetch(origin+'/datos')).text()).window.document;
 assert.ok(hub.querySelector('main a[href="/datos/que-autocompleta-google-en-gramatica"]'));
});

// Internal links from teaching pages to the data report: figures come from the report data.
test('teaching pages link the pretérito perfecto report with the real wrong participles',async()=>{
 const doc=async p=>{const r=await fetch(origin+p);assert.equal(r.status,200,p);return new JSDOM(await r.text()).window.document;};
 const report='/datos/errores-preterito-perfecto-a2';
 const guide=await doc('/material-ele/preterito-perfecto');
 assert.ok(guide.querySelector(`#datos a[href="${report}"]`),'guide links the report');
 const escribir=await doc('/conjugacion/escribir');
 const section=escribir.querySelector('#participio-real');
 assert.ok(section,'escribir shows real errors');
 assert.match(section.textContent,/«escribito» y «escribido» en lugar de «escrito»/);
 assert.ok(section.querySelector(`a[href="${report}#participios"]`));
 assert.equal((await doc('/conjugacion/hablar')).querySelector('#participio-real'),null);
 const list=await doc('/conjugacion/irregulares/participios');
 assert.ok(list.querySelectorAll('#participios-reales tbody tr').length>=9);
 assert.ok((await doc(report)).querySelector('#participios'));
});

// Mission phase 2: reading spokes carry their own text, at least three instant-feedback questions, a real figure, a heritage block, and link hub → spoke → next spoke → hub.
test('reading comprehension hub and spokes are complete and chained',async()=>{
 const doc=async p=>new JSDOM(await (await fetch(origin+p)).text()).window.document;
 const hub=await doc('/spanish-reading-comprehension');
 const spokes=['/spanish-reading-comprehension/a1','/spanish-reading-comprehension/a2','/spanish-reading-comprehension/b1'];
 for(const s of spokes)assert.ok(hub.querySelector(`main a[href="${s}"]`),`hub links ${s}`);
 for(const [i,s] of spokes.entries()){
  const d=await doc(s);
  const main=d.querySelector('main');
  const words=main.textContent.replace(/\s+/g,' ').trim().split(' ').length;
  assert.ok(words>=250,`${s}: ${words} words`);
  assert.ok(main.querySelectorAll('[role="group"]').length>=3,`${s}: questions`);
  assert.match(main.textContent,/What SpanishCue data shows/);assert.match(main.textContent,/If you grew up speaking Spanish at home/);
  assert.ok(main.querySelector('a[href="/spanish-reading-comprehension"]'),`${s} links back to the hub`);
  if(spokes[i+1])assert.ok(main.querySelector(`a[href="${spokes[i+1]}"]`),`${s} links the next spoke`);
  assert.ok(nodesOf(d).some(n=>n['@type']==='LearningResource'&&n.educationalLevel));
 }
});

// Mission phase 2, English practice cluster: each topic has its own rule table, at least eight checked questions, a real figure, a heritage block, and links hub → topic → next topic → hub.
test('grammar practice hub and topics are complete and chained',async()=>{
 const doc=async p=>{const r=await fetch(origin+p);assert.equal(r.status,200,p);return new JSDOM(await r.text()).window.document;};
 const hub=await doc('/spanish-grammar-practice');
 const topics=['ser-vs-estar','preterite-vs-imperfect','subjunctive','por-vs-para','preterite','imperfect','present-perfect','future-tense','reflexive-verbs','direct-object-pronouns'].map(t=>`/spanish-grammar-practice/${t}`);
 const {usCatalog}=await import('../app/us-content/catalog.generated.ts').catch(async()=>{const src=(await import('node:fs')).readFileSync(new URL('../app/us-content/catalog.generated.ts',import.meta.url),'utf8');return {usCatalog:JSON.parse(src.slice(src.indexOf('[] = ')+5).replace(/;\s*$/,''))};});
 const chain=[...topics,...usCatalog.filter(e=>e.family==='grammar').map(e=>`/spanish-grammar-practice/${e.slug}`)];
 for(const t of chain)assert.ok(hub.querySelector(`main a[href="${t}"]`),`hub links ${t}`);
 assert.ok(nodesOf(hub).some(n=>n['@type']==='CollectionPage'));
 for(const t of chain.slice(topics.length)){
  const d=await doc(t);const main=d.querySelector('main');
  assert.ok(main.querySelectorAll('[role="group"]').length>=10,`${t}: questions`);
  assert.match(main.textContent,/What SpanishCue data shows/);assert.match(main.textContent,/Use it in class/);
  assert.ok(main.querySelector('a[href="/spanish-grammar-practice"]'),`${t} links back to the hub`);
  assert.ok(main.querySelector(`a[href="${chain[(chain.indexOf(t)+1)%chain.length]}"]`),`${t} links the next topic`);
  const types=nodesOf(d).map(n=>n['@type']);assert.ok(types.includes('LearningResource')&&types.includes('FAQPage'),t);
 }
 assert.equal((await fetch(origin+'/spanish-grammar-practice/not-a-topic')).status,404);
 for(const [i,t] of topics.entries()){
  const d=await doc(t);const main=d.querySelector('main');
  const words=main.textContent.replace(/\s+/g,' ').trim().split(' ').length;
  assert.ok(words>=250,`${t}: ${words} words`);
  assert.ok(main.querySelectorAll('[role="group"]').length>=8,`${t}: questions`);
  assert.match(main.textContent,/What SpanishCue data shows/);assert.match(main.textContent,/If you grew up speaking Spanish at home/);
  assert.ok(main.querySelector('a[href="/spanish-grammar-practice"]'),`${t} links back to the hub`);
  assert.ok(main.querySelector(`a[href="${chain[(chain.indexOf(t)+1)%chain.length]}"]`),`${t} links the next topic`);
  assert.ok(main.querySelector('a[href="/datos/que-autocompleta-google-en-gramatica"]'),`${t} cites its source`);
  const types=nodesOf(d).map(n=>n['@type']);assert.ok(types.includes('LearningResource')&&types.includes('FAQPage'),t);
  for(const li of [...main.querySelectorAll('li')].filter(li=>li.textContent.startsWith('For teachers'))){const href=li.querySelector('a').getAttribute('href');const r=await fetch(origin+href,{redirect:'manual'});assert.equal(r.status,200,`${t} → ${href}`);}
 }
});

// US cluster: AP Spanish hub and parts carry the official format, practice, a real figure and a heritage block, and are chained.
test('AP Spanish hub and parts are complete, sourced and chained',async()=>{
 const doc=async p=>{const r=await fetch(origin+p);assert.equal(r.status,200,p);return new JSDOM(await r.text()).window.document;};
 const hub=await doc('/ap-spanish-language');
 assert.match(hub.querySelector('.mk-free-version')?.textContent??'Free version',/Free version/,'English chrome on an English page');
 assert.match(hub.querySelector('main').textContent,/55 multiple-choice questions/);
 assert.ok(hub.querySelector('main a[href^="https://apstudents.collegeboard.org/"]'),'hub cites College Board');
 const parts=['argumentative-essay','project-presentation','listening-and-reading'].map(p=>`/ap-spanish-language/${p}`);
 for(const [i,p] of parts.entries()){
  assert.ok(hub.querySelector(`main a[href="${p}"]`),`hub links ${p}`);
  const main=(await doc(p)).querySelector('main');
  assert.ok(main.textContent.replace(/\s+/g,' ').trim().split(' ').length>=250,p);
  assert.ok(main.querySelectorAll('[role="group"]').length>=8,`${p}: questions`);
  assert.match(main.textContent,/What SpanishCue data shows/);assert.match(main.textContent,/If you grew up speaking Spanish at home/);
  assert.ok(main.querySelector(`a[href="${parts[(i+1)%parts.length]}"]`)&&main.querySelector('a[href="/ap-spanish-language"]'),`${p} chain`);
  assert.match(main.textContent,/not affiliated with SpanishCue/);
 }
});

// US cluster: sub plans fill 50 minutes with open pages only, end with a self-correcting exit ticket and are chained.
test('Spanish sub plans are complete, open and chained',async()=>{
 const doc=async p=>{const r=await fetch(origin+p);assert.equal(r.status,200,p);return new JSDOM(await r.text()).window.document;};
 const hub=await doc('/spanish-sub-plans');
 const plans=['spanish-1','spanish-2','spanish-3'].map(p=>`/spanish-sub-plans/${p}`);
 for(const [i,p] of plans.entries()){
  assert.ok(hub.querySelector(`main a[href="${p}"]`),`hub links ${p}`);
  const main=(await doc(p)).querySelector('main');
  assert.ok(main.textContent.replace(/\s+/g,' ').trim().split(' ').length>=250,p);
  assert.ok(main.querySelectorAll('#exit-ticket [role="group"]').length>=3,`${p}: exit ticket`);
  assert.match(main.textContent,/What SpanishCue data shows/);assert.match(main.textContent,/Heritage speakers in the class/);
  assert.ok(main.querySelector(`a[href="${plans[(i+1)%plans.length]}"]`)&&main.querySelector('a[href="/spanish-sub-plans"]'),`${p} chain`);
  for(const a of main.querySelectorAll('table a')){const r=await fetch(origin+a.getAttribute('href'),{redirect:'manual'});assert.equal(r.status,200,`${p} → ${a.getAttribute('href')}`);}
 }
});

// US 1000-page plan: vocabulary pages render from assets (public/us-content), not from the Worker bundle.
test('Spanish vocabulary pages render from assets and are chained',async()=>{
 const {usCatalog}=await import('../app/us-content/catalog.generated.ts').catch(async()=>{const src=(await import('node:fs')).readFileSync(new URL('../app/us-content/catalog.generated.ts',import.meta.url),'utf8');return {usCatalog:JSON.parse(src.slice(src.indexOf('[] = ')+5).replace(/;\s*$/,''))};});
 const themes=usCatalog.filter(e=>e.family==='vocabulary').map(e=>`/spanish-vocabulary/${e.slug}`);
 assert.ok(themes.length>=20);
 const doc=async p=>{const r=await fetch(origin+p);assert.equal(r.status,200,p);return new JSDOM(await r.text()).window.document;};
 const hub=await doc('/spanish-vocabulary');
 for(const [i,p] of themes.entries()){
  assert.ok(hub.querySelector(`main a[href="${p}"]`),`hub links ${p}`);
  const page=await doc(p);const main=page.querySelector('main');
  assert.ok(main.querySelector('h1')?.textContent.length>10,`${p}: h1`);
  assert.ok(main.querySelectorAll('[role="group"]').length>=17,`${p}: questions rendered`);
  assert.ok(main.querySelectorAll('table tbody tr').length>=26,`${p}: word list rendered`);
  assert.equal(page.documentElement.lang,'en',`${p}: English chrome`);
  assert.ok(main.querySelector(`a[href="${themes[(i+1)%themes.length]}"]`)&&main.querySelector('a[href="/spanish-vocabulary"]'),`${p} chain`);
 }
 assert.equal((await fetch(origin+'/spanish-vocabulary/not-a-topic')).status,404);
});

test('Spanish verb practice pages render from assets and are chained',async()=>{
 const src=(await import('node:fs')).readFileSync(new URL('../app/us-content/catalog.generated.ts',import.meta.url),'utf8');
 const usCatalog=JSON.parse(src.slice(src.indexOf('[] = ')+5).replace(/;\s*$/,''));
 const verbs=usCatalog.filter(e=>e.family==='verbs').map(e=>`/spanish-verb-practice/${e.slug}`);
 assert.ok(verbs.length>=15);
 const doc=async p=>{const r=await fetch(origin+p);assert.equal(r.status,200,p);return new JSDOM(await r.text()).window.document;};
 const hub=await doc('/spanish-verb-practice');
 for(const [i,p] of verbs.entries()){
  assert.ok(hub.querySelector(`main a[href="${p}"]`),`hub links ${p}`);
  const page=await doc(p);const main=page.querySelector('main');
  assert.ok(main.querySelectorAll('[role="group"]').length>=14,`${p}: questions rendered`);
  assert.ok(main.querySelectorAll('table tbody tr').length>=17,`${p}: uses, forms and mistakes rendered`);
  assert.equal(page.documentElement.lang,'en',`${p}: English chrome`);
  assert.ok(main.querySelector(`a[href="${verbs[(i+1)%verbs.length]}"]`)&&main.querySelector('a[href="/spanish-verb-practice"]'),`${p} chain`);
 }
 assert.equal((await fetch(origin+'/spanish-verb-practice/not-a-verb')).status,404);
});

test('AP Spanish unit pages render from assets, link back to the AP guide and are chained',async()=>{
 const src=(await import('node:fs')).readFileSync(new URL('../app/us-content/catalog.generated.ts',import.meta.url),'utf8');
 const usCatalog=JSON.parse(src.slice(src.indexOf('[] = ')+5).replace(/;\s*$/,''));
 const units=usCatalog.filter(e=>e.family==='ap').sort((a,b)=>a.theme.localeCompare(b.theme)).map(e=>`/ap-spanish-language/themes/${e.slug}`);
 assert.ok(units.length>=6);
 const doc=async p=>{const r=await fetch(origin+p);assert.equal(r.status,200,p);return new JSDOM(await r.text()).window.document;};
 const hub=await doc('/ap-spanish-language/themes');
 assert.ok((await doc('/ap-spanish-language')).querySelector('main a[href="/ap-spanish-language/themes"]'),'AP guide links the themes hub');
 assert.equal((await doc('/ap-spanish-language/argumentative-essay')).querySelector('h1')?.textContent,'AP Spanish argumentative essay practice','existing AP parts still render');
 for(const [i,p] of units.entries()){
  assert.ok(hub.querySelector(`main a[href="${p}"]`),`hub links ${p}`);
  const page=await doc(p);const main=page.querySelector('main');
  assert.ok(main.querySelectorAll('[role="group"]').length>=14,`${p}: questions rendered`);
  assert.ok(main.querySelectorAll('table tbody tr').length>=30,`${p}: vocabulary and phrases rendered`);
  assert.equal(page.documentElement.lang,'en',`${p}: English chrome`);
  assert.ok(main.querySelector(`a[href="${units[(i+1)%units.length]}"]`)&&main.querySelector('a[href="/ap-spanish-language/themes"]')&&main.querySelector('a[href="/ap-spanish-language/argumentative-essay"]'),`${p} chain`);
 }
 assert.equal((await fetch(origin+'/ap-spanish-language/themes/not-a-unit')).status,404);
});
