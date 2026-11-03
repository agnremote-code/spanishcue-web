// Board audit 2026-11-03 (docs/audits/non-board-sample-g3-g6-20261103.md): the generated
// /material-ele templates must read as correct Spanish for every topic, and an activity page
// states the activity's own level, not its guide's whole range.
import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/material-ele/temas.ts"; export {actividadPages,activityLevel} from "./app/material-ele/actividades.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
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
