import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';
const ORG='https://spanishcue.com/#organization';
const PERSON='https://spanishcue.com/equipo#ale';

// SEO plan step 7 (docs/seo-plan/06_SCHEMA/LEEME.md): one page per template. Every JSON-LD block must parse,
// carry the properties Google requires for its type, and name the brand through the homepage entity's @id.
const paths=['/','/material-ele','/material-ele/futuro','/material-ele/formatos/comprension-auditiva/a1','/material-ele/guia/ejercicios-ele-con-soluciones','/material-ele/ficha/indefinido-e-imperfecto','/material-ele/actividad/quien-es-quien','/guides/spanish-subjunctive-lesson-plan','/guides/assess-spanish-student-level-online','/resources/spanish-conversation-activity-a0-b1-estados-unidos','/recursos/actividad-de-conversacion-a0-b1-estados-unidos','/spanish-grammar-lessons','/ser-o-estar','/dudas-del-espanol/haber-o-a-ver','/conjugacion','/gramatica/indefinido-e-imperfecto','/about','/equipo','/material-ele/a1','/datos','/datos/errores-preterito-perfecto-a2'];

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
