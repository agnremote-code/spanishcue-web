import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {JSDOM} from 'jsdom';
const require=createRequire(import.meta.url);
const React=require('react');
const {act}=React;
const {createRoot}=require('react-dom/client');
const levels=['A0','A1','A2','B1','B2','C1','C2'];
async function load(path,globals={}){
 const r=await build({entryPoints:[path],bundle:true,write:false,format:'cjs',platform:'node',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 const m={exports:{}};
 runInNewContext(`(function(require,module,exports){${r.outputFiles[0].text}\n})`,{console,process,URL,URLSearchParams,...globals})(name=>name==='next/link'?(({children,...props})=>React.createElement('a',props,children)):require(name),m,m.exports);
 return m.exports;
}
const talk=(await load('app/choose-conversation/variants.ts')).talkVariants;
const kingdom=(await load('app/preguntas-prohibidas-a2/variants.ts')).kingdomVariants;
const city=(await load('app/future-city/variants.ts')).cityVariants;
const roulette=(await load('app/life-roulette/variants.ts')).rouletteVariants;
const advanced=(await load('app/advanced-conversation/variants.ts')).advancedVariants;
const banks=[['talk',talk,l=>talk[l].activities.map(t=>t.questions)],['kingdom',kingdom,l=>kingdom[l].activities.topics.map(t=>t.questions)],['city',city,l=>city[l].districts.map(t=>t.questions.map(q=>q.es))],['roulette',roulette,l=>roulette[l].filter(t=>t.id!=='argento').map(t=>t.questions.map(q=>q[0]))],['advanced',advanced,l=>advanced[l].map(t=>t.questions)]];
test('every native question world has seven real banks and distinct A0/A1/B1/C2 tasks',()=>{
 for(const [name,bank,questions] of banks){
  assert.deepEqual(Object.keys(bank),levels,name);
  for(const level of levels){assert.ok(questions(level).every(q=>q.length>=3),`${name} ${level}`);assert.doesNotMatch(JSON.stringify(bank[level]),/undefined|NaN/);}
  for(const level of ['A0','A1','C2'])assert.notDeepEqual(JSON.stringify(questions(level)),JSON.stringify(questions('B1')),name);
  assert.ok(JSON.stringify(bank.A0).includes('I want'),name+' bilingual zero-start prompts');
 }
});
test('original native banks are retained exactly',async()=>{
 for(const [path,actual,key] of [['app/future-city/data.ts',city.B1.districts,'districts'],['app/life-roulette/data.ts',roulette.A2,'topics'],['app/advanced-conversation/data.ts',advanced.C1,'topics'],['app/preguntas-prohibidas-a2/data.ts',kingdom.A2.activities.topics,'topics'],['app/preguntas-prohibidas/data.ts',kingdom.B1.activities.topics,'topics']])assert.equal(JSON.stringify(actual),JSON.stringify((await load(path))[key]),path);
});
test('historical routes select A0 A1 B1 C2 and keep their own activity interactions',async()=>{
 const dom=new JSDOM('<div id="root"></div>',{url:'https://example.test/'});
 const previous={window:globalThis.window,document:globalThis.document,IS_REACT_ACT_ENVIRONMENT:globalThis.IS_REACT_ACT_ENVIRONMENT};
 globalThis.window=dom.window;globalThis.document=dom.window.document;globalThis.IS_REACT_ACT_ENVIRONMENT=true;
 dom.window.scrollTo=()=>{};dom.window.setTimeout=fn=>{fn();return 0;};
 try{
 for(const route of ['choose-conversation','a1-conversation','basic-conversation','preguntas-prohibidas-a2','preguntas-prohibidas','future-city','life-roulette','advanced-conversation']){
  const Page=(await load(`app/${route}/page.tsx`,{window:dom.window,document:dom.window.document,Event:dom.window.Event,requestAnimationFrame:fn=>fn()})).default;
  for(const level of ['A0','A1','B1','C2']){
   dom.window.history.replaceState(null,'',`/${route}?source=teacher&level=${level}#lesson`);
   const root=createRoot(document.getElementById('root'));
   await act(()=>root.render(React.createElement(Page)));
   assert.equal(document.querySelectorAll('.cf-level-control').length,1,route);
   assert.equal(document.querySelector('.cf-family').dataset.level,level,route);
   assert.equal(document.querySelectorAll('.cf-level-control button').length,7,route);
   const click=async selector=>{const button=document.querySelector(selector);assert.ok(button,`${route}: ${selector}`);await act(()=>button.click());};
   if(route.includes('conversation')&&route!=='advanced-conversation')await click('.topic-worlds button');
   else if(route.startsWith('preguntas')){await click('.pr-cover-actions button:nth-child(2)');await click('.pr-kingdom-gate');}
   else if(route==='future-city'){await click('.fc-cover-actions button');await click('.fc-building');await click('.fc-question-picker button:nth-child(2)');}
   else if(route==='life-roulette'){await click('.life-wheel button');await click('.wheel-result button');await click('.question-card');assert.equal(document.querySelectorAll('.question-card.done').length,1);}
   else await click('.advanced-questions button');
   assert.ok(document.querySelector('.world-speaking')||level!=='A0',route+' A0 scaffolding');
   assert.doesNotMatch(document.body.textContent,/undefined|NaN/);
   if(level==='A0'){
    const output=document.querySelector('.world-speaking output');assert.ok(output,route+' model');
    const before=output.textContent;
    await click('.world-speaking .world-chunks button:nth-of-type(2)');
    assert.notEqual(output.textContent,before,route+' teacher chunk control');
    assert.match(output.textContent,/I do not want/);
   }
   const next=[...document.querySelectorAll('.cf-level-control button')].find(b=>b.textContent===(level==='C2'?'A0':'C2'));
   await act(()=>next.click());
   assert.ok(dom.window.location.search.includes('source=teacher'));assert.equal(dom.window.location.hash,'#lesson');
   assert.equal(document.querySelectorAll('.question-card.done').length,0,'switch resets activity state');
   await act(()=>root.unmount());
  }
 }
 }finally{Object.assign(globalThis,previous);dom.window.close();}
});
