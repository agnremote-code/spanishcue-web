import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/conjugacion/verbos.ts"; export {conjugate} from "./app/conjugacion/engine.ts"; export {irregulares} from "./app/conjugacion/irregulares.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {isEdgeCacheablePath} from "./app/seo.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',logLevel:'error'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
const T=(v)=>m.conjugateVerb(v).tenses;

// Hand-checked against the RAE conjugation tables (2010 orthography: rio, guie, hui without accent).
const fixture={
 ser:{presente:'soy eres es somos sois son',indefinido:'fui fuiste fue fuimos fuisteis fueron',subjPresente:'sea seas sea seamos seáis sean'},
 ir:{presente:'voy vas va vamos vais van',imperativo:' ve vaya vamos id vayan',subjImperfecto:'fuera fueras fuera fuéramos fuerais fueran'},
 tener:{presente:'tengo tienes tiene tenemos tenéis tienen',indefinido:'tuve tuviste tuvo tuvimos tuvisteis tuvieron',futuro:'tendré tendrás tendrá tendremos tendréis tendrán'},
 decir:{presente:'digo dices dice decimos decís dicen',indefinido:'dije dijiste dijo dijimos dijisteis dijeron',imperativo:' di diga digamos decid digan'},
 hacer:{indefinido:'hice hiciste hizo hicimos hicisteis hicieron',condicional:'haría harías haría haríamos haríais harían'},
 pensar:{presente:'pienso piensas piensa pensamos pensáis piensan',subjPresente:'piense pienses piense pensemos penséis piensen'},
 sentir:{indefinido:'sentí sentiste sintió sentimos sentisteis sintieron',subjPresente:'sienta sientas sienta sintamos sintáis sientan'},
 dormir:{presente:'duermo duermes duerme dormimos dormís duermen',indefinido:'dormí dormiste durmió dormimos dormisteis durmieron'},
 pedir:{presente:'pido pides pide pedimos pedís piden',subjImperfecto:'pidiera pidieras pidiera pidiéramos pidierais pidieran'},
 seguir:{presente:'sigo sigues sigue seguimos seguís siguen'},
 jugar:{presente:'juego juegas juega jugamos jugáis juegan',indefinido:'jugué jugaste jugó jugamos jugasteis jugaron'},
 conocer:{presente:'conozco conoces conoce conocemos conocéis conocen'},
 conducir:{indefinido:'conduje condujiste condujo condujimos condujisteis condujeron'},
 buscar:{indefinido:'busqué buscaste buscó buscamos buscasteis buscaron'},
 empezar:{subjPresente:'empiece empieces empiece empecemos empecéis empiecen'},
 coger:{presente:'cojo coges coge cogemos cogéis cogen'},
 leer:{indefinido:'leí leíste leyó leímos leísteis leyeron'},
 construir:{presente:'construyo construyes construye construimos construís construyen'},
 huir:{presente:'huyo huyes huye huimos huis huyen',indefinido:'hui huiste huyó huimos huisteis huyeron'},
 reír:{presente:'río ríes ríe reímos reís ríen',indefinido:'reí reíste rio reímos reísteis rieron'},
 enviar:{presente:'envío envías envía enviamos enviáis envían'},
 actuar:{presente:'actúo actúas actúa actuamos actuáis actúan'},
 guiar:{indefinido:'guie guiaste guio guiamos guiasteis guiaron'},
 oír:{presente:'oigo oyes oye oímos oís oyen',imperativo:' oye oiga oigamos oíd oigan'},
 mantener:{imperativo:' mantén mantenga mantengamos mantened mantengan',indefinido:'mantuve mantuviste mantuvo mantuvimos mantuvisteis mantuvieron'},
 prever:{indefinido:'preví previste previó previmos previsteis previeron'},
 andar:{indefinido:'anduve anduviste anduvo anduvimos anduvisteis anduvieron'},
 caber:{presente:'quepo cabes cabe cabemos cabéis caben'},
 averiguar:{indefinido:'averigüé averiguaste averiguó averiguamos averiguasteis averiguaron'},
 vencer:{presente:'venzo vences vence vencemos vencéis vencen'},
 oler:{presente:'huelo hueles huele olemos oléis huelen'},
 adquirir:{presente:'adquiero adquieres adquiere adquirimos adquirís adquieren'},
 avergonzar:{presente:'avergüenzo avergüenzas avergüenza avergonzamos avergonzáis avergüenzan'},
};
const nonFinite={ser:['siendo','sido'],ir:['yendo','ido'],decir:['diciendo','dicho'],poder:['pudiendo','podido'],leer:['leyendo','leído'],escribir:['escribiendo','escrito'],volver:['volviendo','vuelto'],freír:['friendo','frito'],dormir:['durmiendo','dormido'],romper:['rompiendo','roto']};

for(const [verb,tenses] of Object.entries(fixture))test(`conjugation of ${verb} matches the reference`,()=>{
 for(const [tense,expected] of Object.entries(tenses))assert.deepEqual(T(verb)[tense],expected.split(' '),`${verb} ${tense}`);
});
test('gerunds and participles',()=>{
 for(const [verb,[g,p]] of Object.entries(nonFinite)){const c=m.conjugateVerb(verb);assert.equal(c.gerund,g,verb);assert.equal(c.participle,p,verb);}
 assert.equal(T('escribir').perfecto[2],'ha escrito');
});

test('every listed verb conjugates fully, with unique slugs and a real page',()=>{
 assert.ok(m.verbos.length>=1200,'at least 1,200 verbs');
 assert.equal(new Set(m.verbos.map(m.verbSlug)).size,m.verbos.length);
 for(const v of m.verbos){
  assert.match(v,/^[a-zñáéíóúü]*(ar|er|ir|ír)$/,v);
  const p=m.verbPage(v);
  for(const [k,forms] of Object.entries(p.conjugation.tenses)){assert.equal(forms.length,6);forms.forEach((f,i)=>{if(!((k==='imperativo'||k==='imperativoNegativo')&&i===0))assert.ok(f&&!/undefined|NaN/.test(f),`${v} ${k} ${i}`);});}
  assert.ok(p.title.length<=78&&p.title.endsWith('| SpanishCue'),p.title);
  assert.ok(p.description.length>=110&&p.description.length<=165,`${v}: ${p.description.length}`);
  assert.ok(p.notes.length>=1);assert.equal(p.exercise.length,12);assert.equal(p.faq.length,4);
  for(const item of p.exercise){assert.ok(item.q.includes('___'));assert.ok(item.a&&!item.q.includes('vosotros'));}
  assert.equal(m.verbFromParam(encodeURIComponent(m.verbSlug(v))),v);
 }
 for(const spec of Object.keys(m.irregulares))if(m.irregulares[spec].base)assert.ok(m.irregulares[m.irregulares[spec].base],`${spec} base exists`);
});

test('irregular forms are marked and regular verbs stay unmarked',()=>{
 assert.equal(m.verbPage('hablar').count,0);assert.equal(m.verbPage('buscar').count,0);
 const tener=m.verbPage('tener');assert.ok(tener.irregular);assert.equal(tener.highlight.presente[0],true);assert.equal(tener.highlight.presente[3],false);
 assert.ok(m.verbPage('pensar').related.includes('cerrar'));assert.ok(m.verbPage('mantener').related.includes('tener'));
 assert.equal(m.verbFromParam('oir'),'oír');assert.equal(m.verbFromParam('so%C3%B1ar'),'soñar');assert.equal(m.verbFromParam('nope'),undefined);
});

test('the conjugation pages are in the sitemap and edge-cached',()=>{
 const urls=new Set(m.sitemap().map(x=>x.url));
 assert.ok(urls.has('https://spanishcue.com/conjugacion'));
 assert.ok(urls.has('https://spanishcue.com/conjugacion/tener'));assert.ok(urls.has('https://spanishcue.com/conjugacion/oir'));assert.ok(urls.has('https://spanishcue.com/conjugacion/so%C3%B1ar'),[...urls].find(u=>u.includes('/conjugacion/so')));
 assert.ok(m.isEdgeCacheablePath('/conjugacion')&&m.isEdgeCacheablePath('/conjugacion/tener'));
});

test('irregular-verb pages per tense list the right verbs',async()=>{
 const r2=await build({stdin:{contents:'export * from "./app/conjugacion/tiempos.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',logLevel:'error'});
 const t=await import('data:text/javascript;base64,'+Buffer.from(r2.outputFiles[0].text).toString('base64'));
 const verbs=(slug)=>t.irregularRows(t.tiempoBySlug.get(slug)).map(r=>r.verb);
 assert.deepEqual(verbs('imperfecto').sort(),['entrever','ir','prever','ser','ver']);
 for(const v of ['tener','hacer','decir','poder','saber','querer','venir','poner','salir','valer','haber','caber'])assert.ok(verbs('futuro').includes(v),v);
 assert.ok(!verbs('futuro').includes('hablar'));
 assert.ok(verbs('indefinido').includes('pedir')&&!verbs('indefinido').includes('leer')&&!verbs('indefinido').includes('buscar'));
 assert.ok(verbs('participios').includes('escribir')&&!verbs('participios').includes('leer'));
 assert.ok(verbs('gerundios').includes('dormir')&&!verbs('gerundios').includes('leer'));
 const urls=new Set(m.sitemap().map(x=>x.url));
 for(const p of t.tiempoPages){
  assert.ok(urls.has('https://spanishcue.com'+p.path));
  assert.ok(p.title.length<=78&&p.title.endsWith('| SpanishCue'),p.title);
  assert.ok(p.description.length>=110&&p.description.length<=165,p.slug);
  assert.ok(p.faq.length>=3);
  const ex=t.tiempoExercise(p,t.irregularRows(p));assert.ok(ex.length>=5);for(const i of ex)assert.ok(i.q.includes('___')&&i.a);
 }
});
