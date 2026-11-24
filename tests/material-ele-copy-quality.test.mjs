// Board audit 2026-11-03 (docs/audits/non-board-sample-g3-g6-20261103.md): the generated
// /material-ele templates must read as correct Spanish for every topic, and an activity page
// states the activity's own level, not its guide's whole range.
import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/material-ele/temas.ts"; export {actividadPages,activityLevel} from "./app/material-ele/actividades.ts"; export {lessons as lessonsForTest} from "./app/lesson-catalog.ts"; export {isFreeLesson} from "./app/access-policy.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {guiaPages} from "./app/material-ele/guias.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));

const copyOf=(p)=>[p.h1,p.description,p.intro,...p.faq.flatMap((f)=>[f.question,f.answer])].join('\n');

test('topic and level templates have no pronoun or agreement that breaks with plural topics',()=>{
 for(const p of [...m.temaPages,...m.temaLevelPages]){
  const text=copyOf(p);
  assert.doesNotMatch(text,/enseñarlo\b/,`${p.path}: «enseñarlo» does not agree with every topic`);
  assert.doesNotMatch(text,/son gratis y se abre(?!n)/,`${p.path}: plural free classes «se abren»`);
 }
 // Level pages describe each group's own order; the shared topic-page FAQ must not claim the grammar order for 3D worlds or culture.
 for(const p of m.temaPages.filter((p)=>p.group!=='gramatica'))assert.doesNotMatch(copyOf(p),/de lo regular a lo irregular/,`${p.path}: grammar-only ordering claim`);
 for(const p of m.temaLevelPages)assert.match(p.intro,new RegExp(`^En ${p.level}, el tema «`),p.path);
});

test('topic names inside sentences keep country capitals and acronyms',()=>{
 const byPath=(path)=>m.temaPages.find((p)=>p.path.endsWith(path));
 const mexico=byPath('/mexico');
 assert.ok(mexico,'cultura/mexico exists');
 assert.match(copyOf(mexico),/sobre México\b/);
 assert.doesNotMatch(copyOf(mexico),/\bméxico\b/);
 const mundos=byPath('/mundos-3d');
 assert.ok(mundos,'formatos/mundos-3d exists');
 assert.doesNotMatch(copyOf(mundos),/\b3d\b/);
 assert.equal(m.nameInSentence({group:'gramatica',parent:'x',slug:'adjetivos',name:'Adjetivos'}),'adjetivos');
 assert.equal(m.nameInSentence({group:'formatos',parent:'x',slug:'ele',name:'ELE para adultos'}),'ELE para adultos');
 assert.equal(m.nameInSentence({group:'cultura',parent:'Países de los alumnos',slug:'el-mundo',name:'El mundo y las nacionalidades'}),'el mundo y las nacionalidades');
});

test('an activity page states the level its own goal names',()=>{
 let own=0;
 for(const p of m.actividadPages){
  const named=p.activity.goal.match(/\b([ABC][12])(?:\s?[–-]\s?([ABC][12]))?\b/);
  if(!named)continue;
  own++;
  assert.equal(p.level,named[2]?`${named[1]}–${named[2]}`:named[1],p.path);
 }
 assert.ok(own>=20,`only ${own} activities name a level`);
 const palmas=m.actividadPages.find((p)=>p.slug==='palmas-en-la-silaba-fuerte');
 assert.ok(palmas);
 assert.equal(palmas.level,'A1');
 assert.doesNotMatch(palmas.activity.steps.join(' '),/palabras de tres sílabas/,'«café» has two syllables');
});

// Board technical SEO audit 2026-11-03 (Alejandro), defects 2 and 3.
test('activity titles and headings from level guides never name the level as a topic',()=>{
 for(const p of m.actividadPages){
  assert.doesNotMatch(p.title,/ de (a1|a2|b1|b2|c1|c2)\b/i,p.path);
  assert.doesNotMatch(p.h1,/ de (a1|a2|b1|b2|c1|c2) para\b/i,p.path);
 }
});

test('grammar topics list phonetics classes only under spelling and pronunciation',()=>{
 const allowed=new Set(['acentuacion','pronunciacion-y-entonacion']);
 const fonetica=new Set(m.lessonsForTest.filter((l)=>l.category==='Fonética').map((l)=>l.id));
 assert.ok(fonetica.size>0,'there are phonetics classes to check');
 for(const p of [...m.temaPages,...m.temaLevelPages]){
  if(p.group!=='gramatica'||allowed.has(p.slug))continue;
  for(const id of p.lessonIds)assert.ok(!fonetica.has(id),`${p.path} lists phonetics class ${id}`);
 }
});

// Defect 1: the preview recordings play without an account, so no sitemap video claims a subscription.
test('every sitemap video is marked as not requiring a subscription',()=>{
 let videos=0;
 for(const entry of m.sitemap())for(const v of entry.videos??[]){videos++;assert.equal(v.requires_subscription,'no',`${entry.url} → ${v.content_loc}`);}
 assert.ok(videos>=100,`only ${videos} videos`);
});

// Review B1 (Sofia, 2026-11-03): a published level page that loses its classes redirects to its topic, never 404s.
import {readFileSync} from 'node:fs';
test('every level page ever published is still generated or redirects to an existing topic page',()=>{
 const published=JSON.parse(readFileSync('tests/fixtures/published-material-ele-level-paths.json','utf8'));
 const generated=new Set(m.temaLevelPages.map((p)=>p.path));
 const topics=new Set(m.temaPages.map((p)=>p.path));
 for(const path of published){
  if(generated.has(path))continue;
  const to=m.retiredTemaLevelPaths.get(path);
  assert.ok(to,`${path} was published and is now neither generated nor redirected (add it to retiredTemaLevelPaths)`);
  assert.ok(topics.has(to),`${path} redirects to missing topic ${to}`);
 }
 for(const path of m.retiredTemaLevelPaths.keys())assert.ok(!generated.has(path),`${path} is generated again; drop it from retiredTemaLevelPaths`);
 for(const path of generated)assert.ok(published.includes(path),`new level page ${path}: add it to tests/fixtures/published-material-ele-level-paths.json`);
});

// Review NB3: fixed expectations, independent of the activityLevel regex.
test('known activities carry their own level',()=>{
 const level=(slug)=>m.actividadPages.find((p)=>p.slug===slug)?.level;
 assert.equal(level('palmas-en-la-silaba-fuerte'),'A1');
 assert.equal(level('es-decir'),'C1');
});

// BOARD-DECISION-007 §3.2 hub standard (2026-11-17). G-H5: a generated topic or level page
// invents no teaching content of its own; goals, warm-ups and speaking prompts come from the
// classes it lists. G-H6: every «gratis» sentence on those pages is true.
const levelsOf=(l)=>(l.levels?.length?l.levels:[l.level]);
test('G-H5: topic and level pages show only goals, warm-ups and prompts written in the classes they list',()=>{
 const byId=new Map(m.lessonsForTest.map((l)=>[l.id,l]));
 const pages=[...m.temaPages,...m.temaLevelPages];
 assert.ok(pages.length>=300,`only ${pages.length} pages`);
 for(const p of pages){
  const listed=p.lessonIds.map((id)=>byId.get(id));
  assert.ok(listed.every(Boolean),`${p.path} lists a class missing from the catalogue`);
  for(const goal of p.goals)assert.ok(listed.some((l)=>l.goals.includes(goal)),`${p.path} goal not in its classes: ${goal}`);
  for(const warmup of p.warmups)assert.ok(listed.some((l)=>l.warmup===warmup),`${p.path} warm-up not in its classes: ${warmup}`);
  for(const prompt of p.speaking)assert.ok(listed.some((l)=>l.speaking.includes(prompt)),`${p.path} prompt not in its classes: ${prompt}`);
 }
});

test('G-H6: free-class claims on topic and level pages are true',()=>{
 const freeAt=(level)=>m.lessonsForTest.filter((l)=>m.isFreeLesson(l.id)&&levelsOf(l).includes(level)).length;
 for(const p of m.temaLevelPages){
  assert.equal(p.freeCount,p.lessonIds.filter((id)=>m.isFreeLesson(id)).length,p.path);
  const copy=copyOf(p);
  if(/Tres clases gratis por nivel/.test(copy))for(const level of ['A1','A2','B1','B2','C1','C2'])assert.ok(freeAt(level)>=3,`${p.path} promises three free classes at every level; ${level} has ${freeAt(level)}`);
  if(/(?:la|una) clase gratis de este nivel/.test(copy))assert.ok(freeAt(p.level)>=1,`${p.path} points to a free ${p.level} class that does not exist`);
 }
 for(const p of m.temaPages){
  assert.equal(p.freeCount,p.lessonIds.filter((id)=>m.isFreeLesson(id)).length,p.path);
  if(p.freeCount===0)for(const level of p.levels)assert.ok(freeAt(level)>=1,`${p.path} sends ${level} teachers to a free class of their level that does not exist`);
 }
});

// BOARD-DECISION-007 H1 (Martin, 2026-11-17): a level page never shows another level's teaching copy.
// formatos/comprension-auditiva/a1 used to show the same C2 prompts as /c2, taken from A0–C2 classes.
test('G-H1b: a level page shows goals, warm-ups and prompts only from classes written for that one level',()=>{
 const byId=new Map(m.lessonsForTest.map((l)=>[l.id,l]));
 for(const p of m.temaLevelPages){
  const single=p.lessonIds.map((id)=>byId.get(id)).filter((l)=>{const lv=levelsOf(l);return lv.length===1&&lv[0]===p.level;});
  for(const goal of p.goals)assert.ok(single.some((l)=>l.goals.includes(goal)),`${p.path} shows a goal from a class of another level: ${goal}`);
  for(const warmup of p.warmups)assert.ok(single.some((l)=>l.warmup===warmup),`${p.path} shows a warm-up from a class of another level: ${warmup}`);
  for(const prompt of p.speaking)assert.ok(single.some((l)=>l.speaking.includes(prompt)),`${p.path} shows a prompt from a class of another level: ${prompt}`);
 }
 const a1=m.temaLevelPageByPath.get('/material-ele/formatos/comprension-auditiva/a1');
 assert.ok(a1);
 assert.doesNotMatch([...a1.goals,...a1.speaking].join(' '),/A0 a C2|perdón que nunca pediste/);
});

test('an activity without a level of its own never claims its guide\'s whole range as its level',()=>{
 let fallback=0;
 for(const p of m.actividadPages){
  if(/\b[ABC][12]\b/.test(p.activity.goal)||!p.level.includes('–'))continue;
  fallback++;
  const answer=p.faq[0].answer;
  assert.doesNotMatch(answer,/^Para alumnos de nivel/,p.path);
  assert.match(answer,/No tiene un nivel propio/,p.path);
 }
 assert.ok(fallback>=1,'no fallback activity found');
});

// BOARD-DECISION-007 §3.4 early-trigger sample (Martin, 2026-11-24): the ten most-clicked level pages.
// F1: format and vocabulary level pages claimed an order (shortest to longest class, simplest to hardest
// scene) that the list does not follow: it is sorted free first, then level, then curriculum order.
test('level pages claim no class order the list does not follow',()=>{
 for(const p of m.temaLevelPages){
  const text=[p.order,copyOf(p)].join('\n');
  assert.doesNotMatch(text,/más corta a la más larga|entra en media hora|escena más simple a la más exigente|más guiada a la más abierta/,p.path);
 }
});

// F2: «El tren de las 23:40» was named «El tren de las 23», because titles were cut at the first colon.
test('level pages name each listed class with its whole short title',()=>{
 const byId=new Map(m.lessonsForTest.map((l)=>[l.id,l]));
 let checked=0;
 for(const p of m.temaLevelPages){
  const answer=p.faq[0].answer;
  for(const id of p.lessonIds){const short=byId.get(id).title.replace(/: .*$/,'');assert.ok(answer.includes(short),`${p.path} FAQ misnames class ${id}: ${short}`);checked++;}
 }
 assert.ok(checked>1000,`only ${checked} names checked`);
 const tren=m.temaLevelPages.find((p)=>p.lessonIds.includes(256));
 assert.ok(tren,'class 256 is on a level page');
 assert.match(tren.faq[0].answer,/El tren de las 23:40/);
});

// N1: the intro's closing clause «… necesita comprensión auditiva para decir lo que quiere decir» made no
// sense on format and culture pages. Only groups whose topic is something to say keep that clause.
test('level-page intros close with a sentence that fits the group',()=>{
 for(const p of m.temaLevelPages){
  assert.match(p.intro,/[.!?]$/,p.path);
  if(p.group==='formatos'||p.group==='cultura')assert.doesNotMatch(p.intro,/para decir lo que quiere decir|para que practique/,p.path);
 }
});

// H6 follow-up (BOARD-DECISION-007 §3.2, guias note): a guide that says some levels have three free grammar
// classes names every level that has them.
test('the guide sentence on three free classes per level names every level that has them',()=>{
 const freeGrammarAt=(level)=>m.lessonsForTest.filter((l)=>l.category==='Gramática'&&m.isFreeLesson(l.id)&&levelsOf(l).length===1&&levelsOf(l)[0]===level).length;
 const texts=[];
 const walk=(node)=>{if(Array.isArray(node))node.forEach(walk);else if(node&&typeof node==='object'){if(typeof node.text==='string'&&/tres clases gratis por nivel/.test(node.text))texts.push(node.text);Object.values(node).forEach(walk);}};
 walk(m.guiaPages);
 assert.ok(texts.length>=1,'the sentence exists');
 for(const t of texts)for(const level of ['A1','A2','B1','B2','C1','C2']){const named=t.includes(`[${level}](/material-ele/${level.toLowerCase()})`);if(named)assert.ok(freeGrammarAt(level)>=3,`guide names ${level}, which has only ${freeGrammarAt(level)} free grammar classes`);if(freeGrammarAt(level)>=3)assert.match(t,new RegExp(`\\[${level}\\]\\(/material-ele/${level.toLowerCase()}\\)`),`guide omits ${level}`);}
});
