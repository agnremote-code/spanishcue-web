import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync, readFileSync} from 'node:fs';

test('new phonetics family has a pure state controller', () => assert.ok(existsSync('app/phonetics-family/state.mjs')));
test('all six authored versions share the same activity contract', async () => {
 const {LEVELS,contentFor}=await import('../app/hablar-sin-cortar/levels.mjs');
 assert.deepEqual(LEVELS,['A1','A2','B1','B2','C1','C2']);
 const base=contentFor('A1');
 for(const level of LEVELS){
  const c=contentFor(level);
  assert.equal(c.level,level);
  assert.equal(c.activities.filter(a=>!a.optional).length,8);
  assert.equal(c.activities.filter(a=>a.optional).length,2);
  assert.deepEqual(c.activities.map(a=>[a.id,a.stage,a.kind,a.optional]),base.activities.map(a=>[a.id,a.stage,a.kind,a.optional]));
  assert.equal(c.route.reduce((sum,s)=>sum+s.minutes,0),50);
  assert.ok(c.final.steps.length>=3 && c.final.criteria.length===3);
  for(const a of c.activities){assert.ok(a.prompt&&a.text&&a.explanation&&a.transfer&&a.teacher);if(level!=='A1'){const b=base.activities.find(b=>b.id===a.id);for(const field of ['prompt','text','explanation','transfer','teacher'])assert.notEqual(a[field],b[field],`${level} ${a.id} ${field}`);}}
 }
});
test('changing level retains stage, clears attempts and observations, and ignores stale audio callbacks', async()=>{
 const e=await import('../app/phonetics-family/state.mjs');
 let s=e.initialState('A1');s=e.reduce(s,{type:'stage',stage:'listen'});s=e.reduce(s,{type:'heard',key:'A1/listen-01',clip:'main'});s=e.reduce(s,{type:'support',key:'A1/listen-01'});s=e.reduce(s,{type:'observe',index:0});
 s=e.reduce(s,{type:'level',level:'C2'});
 assert.equal(s.stage,'listen');assert.deepEqual(s.attempts,{});assert.deepEqual(s.observations,[]);
 assert.equal(e.reduce(s,{type:'heard',key:'A1/listen-01',clip:'main'}),s);
});
test('support remains assisted after retry; item actions cannot carry checked feedback forward',async()=>{
 const e=await import('../app/phonetics-family/state.mjs');let s=e.initialState('A1');const key='A1/listen-01';
 s=e.reduce(s,{type:'support',key});s=e.reduce(s,{type:'select',key,selected:[1]});s=e.reduce(s,{type:'check',key});
 assert.equal(s.attempts[key].checked,true);s=e.reduce(s,{type:'select',key,selected:[0]});assert.equal(s.attempts[key].checked,false);
 s=e.reduce(s,{type:'retry',key});assert.equal(s.attempts[key].assisted,true);assert.equal(s.attempts[key].revealed,false);
 assert.deepEqual(e.attemptFor(s,'A1/listen-02').selected,[]);
});
test('URL level beats saved level; invalid URL uses safe A1 fallback',async()=>{
 const {resolveLevel,levelUrl,nextLevel}=await import('../app/phonetics-family/state.mjs');
 assert.equal(resolveLevel('A1','C2'),'A1');assert.equal(resolveLevel('C2','A1'),'C2');assert.equal(resolveLevel('bad','C2'),'A1');assert.equal(resolveLevel(null,'B2'),'B2');
 assert.equal(levelUrl('/hablar-sin-cortar?lang=en#work','C2'),'/hablar-sin-cortar?lang=en&level=C2#work');
 assert.equal(nextLevel('A1','ArrowLeft'),'C2');assert.equal(nextLevel('B1','Home'),'A1');assert.equal(nextLevel('A2','End'),'C2');
});
test('single PRO record appears in each level filter; matching links carry level',async()=>{
 const {build}=await import('esbuild');const r=await build({stdin:{contents:"export {lessons} from './app/lesson-catalog';export {isFreeLesson} from './app/access-policy';export {phoneticsFamilyHref} from './app/phonetics-family/navigation';",resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
 const p=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));const {filterLessons}=await import('../app/library-filters.mjs');
 const found=p.lessons.filter(l=>l.path==='/hablar-sin-cortar');assert.equal(found.length,1);const l=found[0];assert.equal(l.id,224);assert.equal(l.displayLevel,'A1–C2');assert.equal(l.category,'Fonética');assert.equal(p.isFreeLesson(l.id),false);
 assert.equal(new Set(p.lessons.map(l=>l.id)).size,p.lessons.length);
 for(const level of ['A1','A2','B1','B2','C1','C2']){assert.equal(filterLessons(p.lessons,{level,category:'Fonética'}).filter(x=>x.id===224).length,1);assert.equal(p.phoneticsFamilyHref(l,level),`/hablar-sin-cortar?level=${level}`);}
 assert.ok(existsSync('app/hablar-sin-cortar/page.tsx'));
 assert.match(readFileSync('app/Library.tsx','utf8'),/phoneticsFamilyHref\(lesson, selectedLevel\)/);
});
