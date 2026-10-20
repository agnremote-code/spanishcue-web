import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {JSDOM} from 'jsdom';
import React,{act} from 'react';
const bootstrap=new JSDOM('<!doctype html><html><body></body></html>');
globalThis.window=bootstrap.window;globalThis.document=bootstrap.window.document;
const {createRoot}=await import('react-dom/client');
const require=createRequire(import.meta.url);
await build({entryPoints:['app/grammar-classroom/GrammarPage.tsx'],bundle:true,platform:'node',format:'cjs',jsx:'automatic',external:['react','react-dom','next/link','next/navigation'],loader:{'.css':'empty'},outfile:'node_modules/.cache/grammar-live-page.cjs',logLevel:'error'});
await build({entryPoints:['app/grammar-classroom/live/registry.ts','app/grammar-classroom/live/store.tsx','app/grammar-classroom/live/writing.ts'],bundle:true,platform:'node',format:'cjs',jsx:'automatic',external:['react','react-dom','three'],loader:{'.css':'empty'},outdir:'node_modules/.cache/grammar-live',logLevel:'error'});
const Page=require('../node_modules/.cache/grammar-live-page.cjs').default;
const {getLiveLesson,liveLessonIds}=require('../node_modules/.cache/grammar-live/registry.js');
await build({entryPoints:['app/grammar-classroom/lessons.ts'],bundle:true,platform:'node',format:'cjs',external:['react','react-dom','next/*'],loader:{'.css':'empty'},outfile:'node_modules/.cache/grammar-live-lessons.cjs',logLevel:'error'});
const {classroomIds}=require('../node_modules/.cache/grammar-live-lessons.cjs');
const {targets}=require('../node_modules/.cache/grammar-live/store.js');
const {reviewWriting,reviewWithRules}=require('../node_modules/.cache/grammar-live/writing.js');
const wait=ms=>act(async()=>{await new Promise(r=>setTimeout(r,ms));});

function page(hash=''){
  return new JSDOM('<div id="root"></div>',{url:`https://spanishcue.test/gramatica/desde-hace-duracion${hash}`});
}
async function mount(dom=page(),id=230){
  Object.assign(globalThis,{window:dom.window,self:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,IS_REACT_ACT_ENVIRONMENT:true});
  dom.window.HTMLElement.prototype.scrollIntoView=function(){};dom.window.HTMLMediaElement.prototype.pause=function(){};dom.window.HTMLMediaElement.prototype.load=function(){};dom.window.scrollTo=()=>{};
  const root=createRoot(document.getElementById('root'));await act(async()=>root.render(React.createElement(Page,{id})));
  const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
  return {dom,$,$$,click:async s=>{const el=typeof s==='string'?$(s):s;assert.ok(el,String(s));await act(async()=>el.click());},
    type:async(s,value)=>{const el=$(s);assert.ok(el,s);const proto=el.tagName==='TEXTAREA'?dom.window.HTMLTextAreaElement.prototype:dom.window.HTMLInputElement.prototype;await act(async()=>{Object.getOwnPropertyDescriptor(proto,'value').set.call(el,value);el.dispatchEvent(new dom.window.Event('input',{bubbles:true}));});},
    key:async key=>act(async()=>{window.dispatchEvent(new window.KeyboardEvent('keydown',{key,bubbles:true}));}),
    current:()=>$('[data-stage][aria-current]').dataset.stage,
    step:()=>$('[data-step][aria-current]')?.dataset.step,
    progress:()=>$$('[data-progress]').map(e=>e.dataset.progress),
    unmount:async()=>act(async()=>root.unmount()),
    close:async()=>{await act(async()=>root.unmount());dom.window.close();}};
}
const panel=(stage,step=0)=>`[data-stage-panel="${stage}"] [data-step-panel="${step}"]`;

test('every grammar class is a live class: seven sections in the fixed order, every activity checkable',()=>{
  for(const id of classroomIds)assert.ok(liveLessonIds.includes(id),`${id}: every grammar class id has a live lesson`);
  assert.deepEqual(liveLessonIds.filter(id=>!classroomIds.includes(id)),[239,303,305,307,311,312,314,318,319,320,323,324,327,328,330,331,332,333,335,336,337,338,339,340,341,343,344,346,348,350,351,352,353,356,358,360,361,362,363,364,365,366,367,369,370,371,372,373,374,375,376],'live-only classes carry everything in their live lesson');
  for(const id of liveLessonIds){
  const lesson=getLiveLesson(id);
  assert.equal(lesson.id,id);
  // English help at every level (owner decision 2026-10-20); every new course class carries it.
  if(id>300)assert.ok(JSON.stringify(lesson).includes('"en":'),`${id}: course classes carry English help`);
  assert.deepEqual(lesson.stages.map(s=>s.id),['entender','explorar','practicar','escuchar','conversar','escribir','cerrar']);
  assert.deepEqual(lesson.stages.map(s=>s.label),['Entender','Explorar','Practicar','Escuchar','Conversar','Escribir','Cerrar']);
  const tones=new Set(lesson.legend.map(l=>l.tone));
  for(const stage of lesson.stages)for(const step of stage.steps){
    assert.ok(step.blocks.length,`${stage.id}: ${step.title} has content`);
    for(const [,tone] of JSON.stringify(step.blocks).matchAll(/\[\[[^\]|]+\|([a-z]+)\]\]/g))assert.ok(tones.has(tone),`${tone} is in the legend`);
    for(const block of step.blocks){
      if(block.kind==='choice')for(const item of block.items){assert.ok(item.answer<item.options.length,item.prompt);assert.equal(new Set(item.options).size,item.options.length,item.prompt);assert.ok(item.why,item.prompt);}
      if(block.kind==='classify')for(const item of block.items)assert.ok(block.categories.some(c=>c.id===item.answer),item.text);
      if(block.kind==='fix')for(const item of block.items)if(!item.ok)assert.ok(item.options&&item.answer<item.options.length,item.sentence);
      if(block.kind==='build')for(const item of block.items){const words=t=>t.join(' ').toLowerCase().split(' ').sort().join(' ');for(const a of item.accept)assert.equal(words([a]),words(item.tiles),a);}
      if(block.kind==='explore')for(const key of Object.keys(block.notes))assert.ok(block.lines.some(l=>l.text.includes(`[[${key}|`)),key);
      if(block.kind==='talk')for(const card of block.cards){assert.ok(card.followUps.length>=2&&card.followUps.length<=3,card.q);assert.ok(card.phrases.length&&card.hint&&card.example,card.q);}
    }
  }
  const total=lesson.stages.map(s=>s.steps.reduce((n,st)=>n+st.blocks.reduce((m,b)=>m+targets(b),0),0));
  assert.ok(total.every(n=>n>0),`${id}: every section has real activities: ${total}`);
  }
  const all=JSON.stringify(getLiveLesson(230));
  for(const text of ['Vivo acá desde octubre de 2024.','Me mudé acá hace dos años.','Hace dos años que vivo acá.'])assert.ok(all.includes(text)||all.includes(text.replace(/[.]$/,'')),text);
});

test('the class always opens on Entender at the top: no fragment jump, no remembered section',async()=>{
  const v=await mount(page('#escuchar'));try{
    assert.equal(v.current(),'entender');
    assert.equal(window.location.hash,'');
    assert.equal(v.$$('[data-stage]').length,7);
    assert.equal(v.$$('[data-step-panel]:not([hidden])').length,1,'one step on screen');
    assert.ok(!v.$('[data-show-all]')&&!v.$('.gl-step-tabs'),'the sidebar is the only navigation');
    assert.equal(v.$('.gl-nav-toggle').getAttribute('aria-controls'),'gl-stages');
  }finally{await v.close();}
});

test('free navigation: sidebar sections and steps, footer and arrow keys',async()=>{
  const v=await mount();try{
    await v.click('[data-stage="conversar"]');assert.equal(v.current(),'conversar');
    await v.click('[data-stage="entender"]');await v.click('[data-step="3"]');assert.equal(v.step(),'3');
    await v.key('ArrowRight');assert.equal(v.step(),'4');
    await v.click('[data-next]');await v.click('[data-next]');assert.equal(v.current(),'explorar');
    await v.key('ArrowLeft');assert.equal(v.current(),'entender');assert.equal(v.step(),'5');
  }finally{await v.close();}
});

test('the timeline compares the three sentences; a check explains wrong options and allows a retry',async()=>{
  const v=await mount();try{
    assert.equal(v.$('[data-time-compare]').dataset.timeCompare,'start');
    await v.click('[data-reading="event"]');assert.equal(v.$('[data-time-compare]').dataset.timeCompare,'event');
    assert.match(v.$('.gl-tl-status').textContent,/terminado/);
    await v.click('[data-reading="duration-que"]');assert.match(v.$('.gl-tl-status').textContent,/sigue hoy/);
    const item=`${panel('entender')} .gl-choice-item`;
    const lesson=getLiveLesson(230);const first=lesson.stages[0].steps[0].blocks.find(b=>b.kind==='choice').items[0];
    const wrong=first.options.findIndex((_,i)=>i!==first.answer);
    await v.click(`${item} [data-option="${wrong}"]`);
    assert.equal(v.$(item).dataset.state,'wrong');assert.ok(v.$(`${item} .gl-feedback.is-no`));
    await v.click(`${item} [data-option="${first.answer}"]`);
    assert.equal(v.$(item).dataset.state,'right');assert.ok(v.$(`${item} .gl-feedback.is-ok`).textContent.includes(first.why));
    assert.match(v.progress()[0],/^1\//,'progress counts the solved item');
  }finally{await v.close();}
});

test('the mode selector only changes guidance: teacher notes and reveal buttons appear with a teacher',async()=>{
  const v=await mount();try{
    await v.click('[data-mode-option="self"]');
    assert.equal(v.$('[data-guide]').dataset.guide,'self');assert.ok(!v.$('[data-reveal-all]'));
    await v.click('[data-step="5"]');assert.ok(!v.$('[data-teacher-note]'));
    await v.click('[data-mode-option="teacher"]');
    assert.ok(v.$('[data-teacher-note]'));
    await v.click('[data-step="0"]');assert.equal(v.$('[data-guide]').dataset.guide,'teacher');assert.ok(v.$('[data-reveal-all]'));
    assert.ok(!v.$('.gl-en'),'English stays hidden');
    await v.click('[data-tool="english"]');assert.ok(v.$('.gl-en'),'English appears on request');
  }finally{await v.close();}
});

test('explore, fix, build and rewrite give real feedback',async()=>{
  const v=await mount();try{
    await v.click('[data-stage="explorar"]');
    const marks=v.$$(`${panel('explorar')} [data-mark]`);assert.ok(marks.length>=5);
    await v.click(marks[0]);assert.ok(v.$(`${panel('explorar')} .gl-why`));
    for(const m of v.$$(`${panel('explorar')} [data-mark]`))await v.click(m);
    const notes=Object.keys(getLiveLesson(230).stages[1].steps[0].blocks.find(b=>b.kind==='explore').notes).length;
    assert.equal(v.$(`${panel('explorar')} [data-explored]`).dataset.explored,String(notes));

    await v.click('[data-stage="practicar"]');await v.click('[data-step="3"]');
    const fix=getLiveLesson(230).stages[2].steps[3].blocks.find(b=>b.kind==='fix');
    const bad=fix.items.findIndex(i=>!i.ok);const li=`${panel('practicar',3)} .gl-exercise-list>li:nth-child(${bad+1})`;
    await v.click(`${li} [data-judge="false"]`);assert.ok(v.$(`${li} [data-fix]`),'a wrong sentence asks for the correction');
    await v.click(`${li} [data-fix="${fix.items[bad].answer}"]`);assert.equal(v.$(li).dataset.state,'right');

    await v.click('[data-step="4"]');
    const build=getLiveLesson(230).stages[2].steps[4].blocks.find(b=>b.kind==='build').items[0];
    let rest=build.accept[0].toLowerCase();const used=new Set();
    const bli=`${panel('practicar',4)} [data-block="build"] .gl-exercise-list>li:first-child`;
    while(rest){const t=build.tiles.findIndex((x,i)=>!used.has(i)&&(rest===x.toLowerCase()||rest.startsWith(`${x.toLowerCase()} `)));assert.ok(t>=0,rest);used.add(t);rest=rest.slice(build.tiles[t].length).trim();await v.click(`${bli} [data-tile="${t}"]`);}
    assert.equal(v.$(bli).dataset.state,'right');

    const rli=`${panel('practicar',4)} [data-block="rewrite"] .gl-exercise-list>li:first-child`;
    await v.type(`${rli} input`,'no sé');await v.click(`${rli} button[type="submit"]`);
    assert.equal(v.$(rli).dataset.state,'wrong');assert.ok(!v.$(`${rli} [data-answer-toggle]`));
    await v.click(`${rli} button[type="submit"]`);assert.ok(v.$(`${rli} [data-answer-toggle]`),'a model answer after two tries');
    const rewrite=getLiveLesson(230).stages[2].steps[4].blocks.find(b=>b.kind==='rewrite').items[0];
    await v.type(`${rli} input`,rewrite.accept[0].toUpperCase().replace(/[.]/g,''));await v.click(`${rli} button[type="submit"]`);
    assert.equal(v.$(rli).dataset.state,'right','case and punctuation do not matter');
  }finally{await v.close();}
});

test('the barrio mission works with the cards, without loading 3D',async()=>{
  const v=await mount();try{
    await v.click('[data-stage="practicar"]');await v.click('[data-step="5"]');
    assert.equal(v.$('[data-mission]').dataset.solved,'0');
    assert.ok(v.$('[data-open-scene]'),'3D is opt-in');
    await v.click('[data-mission-option="1"]');assert.match(v.$('[data-mission] .gl-feedback').textContent,/Todavía no/);
    await v.click('[data-mission-option="0"]');assert.equal(v.$('[data-mission]').dataset.solved,'1');
    await v.click('[data-next-neighbor]');assert.equal(v.$('[data-neighbor][aria-selected="true"]').dataset.neighbor,'1');
  }finally{await v.close();}
});

test('the noun, adjective and article studios stay inside their live classes as an Entender workshop',async()=>{
  for(const [id,scene,studio] of [[40,'noun-workbench','[data-noun-studio]'],[41,'adjective-workbench','[data-adjective-studio]'],[42,'article-gallery','[data-article-studio]']]){
    const v=await mount(page(),id);try{
      assert.equal(v.$$('[data-stage]').length,7);
      const step=getLiveLesson(id).stages[0].steps.findIndex(s=>s.blocks.some(b=>b.kind==='visual'&&b.visual===scene));
      assert.ok(step>0,`${id} has a workshop step`);
      await v.click(`[data-step="${step}"]`);
      assert.ok(v.$(`[data-scene="${scene}"] ${studio}`),`${id} renders its studio`);
    }finally{await v.close();}
  }
});
test('listening, conversation and writing: locked questions, one card at a time, honest review',async()=>{
  const v=await mount();try{
    await v.click('[data-stage="escuchar"]');
    assert.ok(v.$('.audio-deck'),'real audio player');assert.ok(!v.$('[data-transcript]'),'questions wait for the audio');
    await v.click('[data-open-questions]');assert.ok(v.$('[data-transcript]'));
    assert.ok(!v.$(`${panel('escuchar')} .gl-transcript`));await v.click('[data-transcript]');assert.ok(v.$(`${panel('escuchar')} .gl-transcript`));

    await v.click('[data-mode-option="self"]');await v.click('[data-stage="conversar"]');
    const card=getLiveLesson(230).stages[4].steps[0].blocks.find(b=>b.kind==='talk').cards[0];
    assert.equal(v.$('.gl-talk-q').textContent,card.q);assert.ok(!v.$('[data-follow-list]'),'follow-ups come one by one');
    await v.click('[data-follow-ups]');assert.equal(v.$$('[data-follow-list] li').length,1);
    assert.ok(!v.$('.gl-talk-example'));await v.click('[data-example]');assert.ok(v.$('.gl-talk-example'));
    await v.click('[data-talked]');assert.equal(v.$('[data-card][aria-current]').dataset.card,'1');
    await v.click('[data-mode-option="teacher"]');assert.equal(v.$$('[data-follow-list] li').length,getLiveLesson(230).stages[4].steps[0].blocks.find(b=>b.kind==='talk').cards[1].followUps.length);

    await v.click('[data-stage="escribir"]');
    await v.type('.gl-write-box','Hola. Vivo en este barrio desde marzo. Trabajo en una escuela desde hace tres años. Llegué a la ciudad desde hace dos años.');
    await v.click('[data-review]');
    const review=v.$('[data-review-result]').textContent;
    assert.match(review,/Vivo en este barrio desde marzo/);assert.match(review,/Llegué a la ciudad desde hace dos años/);assert.match(review,/No corrige la ortografía/);
  }finally{await v.close();}
});

test('the writing review only looks for the lesson structures and their typical mistakes',()=>{
  const ok=reviewWriting('Vivo aquí desde 2020. Vivimos en un piso pequeño. Trabajamos en un café desde hace un año. Llegué hace tres años. ¿Y ustedes?');
  assert.ok(ok.uses.every(u=>u.found),JSON.stringify(ok.uses));assert.equal(ok.problems.length,0);
  const bad=reviewWriting('Vivo aquí desde dos años. Estudio desde hace marzo. Empecé desde hace un mes. Vivo aquí por tres años.');
  assert.equal(bad.problems.length,4,JSON.stringify(bad.problems));
  assert.equal(reviewWriting('Hace dos años que vivo en Lima.').uses[1].found,'Hace dos años que vivo en Lima.');
});

test('answers and progress survive a reload; the class still opens on Entender and offers to resume',async()=>{
  const dom=page();
  let v=await mount(dom);
  const item=`${panel('entender')} .gl-choice-item`;
  const first=getLiveLesson(230).stages[0].steps[0].blocks.find(b=>b.kind==='choice').items[0];
  await v.click(`${item} [data-option="${(first.answer+1)%first.options.length}"]`);
  await v.click(`${item} [data-option="${first.answer}"]`);
  await v.click('[data-stage="practicar"]');await v.click('[data-step="2"]');
  const before=v.progress();
  await wait(350);await v.unmount();
  assert.ok(dom.window.localStorage.getItem('spanishcue:gramatica:230:v1'));
  v=await mount(dom);try{
    await wait(10);
    assert.equal(v.current(),'entender');assert.deepEqual(v.progress(),before);
    assert.equal(v.$(item).dataset.state,'right','the answer is still there');
    assert.equal(v.$('[data-resume]'),null,'a teacher’s class never asks the student whether to continue');
    await v.click('[data-mode-option="self"]');
    await v.click('[data-resume]');assert.equal(v.current(),'practicar');assert.equal(v.step(),'2');
    await v.click('[data-stage="cerrar"]');await v.click('[data-step="2"]');
    assert.equal(v.$$('[data-review-go]').length,1,'the real first-try mistake is listed');
    await v.click('[data-review-go]');assert.equal(v.current(),'entender');
    await v.click('[data-stage="cerrar"]');await v.click('[data-step="2"]');
    await v.click('[data-restart]');await v.click('[data-restart-confirm]');
    assert.equal(v.current(),'entender');assert.equal(v.$(item).dataset.state,'open');assert.match(v.progress()[0],/^0\//);
  }finally{await v.close();}
});

test('checked answers make the mascot react',async()=>{
  const v=await mount();try{
    const item=`${panel('entender')} .gl-choice-item`;
    const first=getLiveLesson(230).stages[0].steps[0].blocks.find(b=>b.kind==='choice').items[0];
    await v.click(`${item} [data-option="${first.answer}"]`);
    assert.equal(v.$('.gl-rail').dataset.mood,'ok');assert.match(v.$('.gl-rail-bubble').textContent,/Bien/);
  }finally{await v.close();}
});

test('the A0 first class: bilingual by default, the grandparents story, the real listening pattern and the link to Noche abierta',async()=>{
  const lesson=getLiveLesson(239);
  assert.equal(lesson.level,'A0');
  const all=JSON.stringify(lesson);
  for(const text of ['abuela','abuelo','vos','Soy Alex','Estoy en Sídney','/audio/grammar-live/239.mp3','/noche-abierta?level=A0'])assert.ok(all.includes(text),text);
  const listen=lesson.stages[3].steps[0].blocks.find(b=>b.kind==='listen');
  assert.ok(listen.gist&&listen.details.length>=4&&listen.transcript&&listen.reply.teacher&&listen.reply.self,'listen twice, choose, answer, transcript');
  // The grandmother's recording is built from the exact transcript the class shows (see live/audio).
  const spoken=listen.transcript.replace(/\[\[([^\]|]+)\|[a-z]+\]\]/g,'$1');
  const clip=JSON.parse(readFileSync('app/grammar-classroom/live/audio/clips.json','utf8')).clips.find(c=>c.id===239);
  assert.equal(clip.text,spoken);assert.match(clip.voice,/^es-AR-/,'an Argentine voice for the abuelo');
  const recorded=JSON.parse(readFileSync('app/grammar-classroom/live/audio/manifest.json','utf8')).clips.find(c=>c.id===239);
  assert.equal(recorded.transcriptSha256,createHash('sha256').update(clip.text).digest('hex'),'the audio matches the current transcript');
  assert.equal(recorded.sha256,createHash('sha256').update(readFileSync('public'+listen.src)).digest('hex'),'the asset matches the manifest');
  assert.ok(recorded.durationSeconds>10&&recorded.durationSeconds<90);
  const write=lesson.stages[5].steps[0].blocks.find(b=>b.kind==='write');
  assert.ok(write.checks.length>=3,'the writing review looks for soy / estoy, not desde / hace');
  const review=reviewWithRules('Hola, abuela. Soy Alex. Estoy en casa. Soy feliz. ¿Y tú? ¿Cómo estás?',write.checks,write.warnings);
  assert.ok(review.uses.every(u=>u.found));
  assert.deepEqual(review.problems.map(p=>p.text),['Soy feliz.']);
  const dom=new JSDOM('<div id="root"></div>',{url:'https://spanishcue.test/gramatica/clase-inicial'});
  const v=await mount(dom,239);try{
    assert.equal(v.$('[data-tool="english"]').getAttribute('aria-pressed'),'true','English help opens by default at A0');
    assert.ok(v.$('.gl-en'),'English lines are visible');
    assert.equal(v.$$('[data-stage]').length,7);
    await v.click('[data-stage="cerrar"]');await v.click('[data-step="2"]');
    const link=v.$('[data-next-link]');assert.equal(link.getAttribute('href'),'/noche-abierta?level=A0');
  }finally{await v.close();}
});
