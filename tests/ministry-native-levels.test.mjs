import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {JSDOM} from 'jsdom';
const require=createRequire(import.meta.url),React=require('react');
const {act}=React,{createRoot}=require('react-dom/client');
const path='app/el-ministerio-de-las-versiones/page.tsx';
async function load(source,globals={}){
 const result=await build({stdin:{contents:source,resolveDir:process.cwd()+'/app/el-ministerio-de-las-versiones',loader:'tsx'},jsx:'automatic',bundle:true,write:false,format:'cjs',platform:'node',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 const loadedModule={exports:{}};
 runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,process,URL,URLSearchParams,...globals})(name=>name==='next/link'?(({children,...props})=>React.createElement('a',props,children)):require(name),loadedModule,loadedModule.exports);
 return loadedModule.exports;
}
const source=readFileSync(path,'utf8');
test('ministry keeps the exact original C2 case files, council and speech support',async()=>{
 const original=execFileSync('git',['show','1e256d1488cba22f18c06329b6a6a186ee5925f0:'+path],{encoding:'utf8'});
 const suffix='\nexport {cases,finalQuestions,languageSupport};';
 const before=await load(original+suffix),after=await load(source+suffix);
 for(const key of ['cases','finalQuestions','languageSupport'])assert.equal(JSON.stringify(after[key]),JSON.stringify(before[key]),key);
 assert.doesNotMatch(source,/NativeNarrative/,'No alternate generic renderer');
 assert.match(source,/<MinisterioDeLasVersionesNative key=\{level\} level=\{level\}/);
});
test('original ministry mechanics work across A0 A1 B1 B2 C1 C2 in the same native workspace',async()=>{
 const dom=new JSDOM('<div id="root"></div>',{url:'https://example.test/el-ministerio-de-las-versiones'});
 const previous={window:globalThis.window,document:globalThis.document,IS_REACT_ACT_ENVIRONMENT:globalThis.IS_REACT_ACT_ENVIRONMENT};
 Object.assign(globalThis,{window:dom.window,document:dom.window.document,IS_REACT_ACT_ENVIRONMENT:true});dom.window.scrollTo=()=>{};
 try{
  const Page=(await load(source,{window:dom.window,document:dom.window.document,Event:dom.window.Event})).default;
  for(const level of ['A0','A1','B1','B2','C1','C2']){
   dom.window.history.replaceState(null,'',`/el-ministerio-de-las-versiones?level=${level}&source=teacher#case`);
   const root=createRoot(document.getElementById('root'));await act(()=>root.render(React.createElement(Page)));
   const click=async selector=>{const node=document.querySelector(selector);assert.ok(node,`${level}: ${selector}`);await act(()=>node.click());};
   assert.equal(document.querySelector('.cf-family').dataset.level,level);
   assert.equal(document.querySelectorAll('.cf-level-control').length,1);
   assert.ok(document.querySelector('.ministry-intake .ministry-image'));
   assert.equal(document.querySelectorAll('.ministry-rail button').length,4);
   assert.equal(document.querySelector('.nn-workspace'),null);
   if(level==='A0'){
    const before=document.querySelector('[data-ministry-speaking] output').textContent;
    await click('[data-ministry-speaking] button:nth-child(2)');
    assert.notEqual(document.querySelector('[data-ministry-speaking] output').textContent,before);
    assert.match(document.querySelector('[data-ministry-speaking] output').textContent,/I know this/);
   }
   await click('.ministry-intake article>button');
   assert.equal(document.querySelectorAll('.case-stack>button').length,4);
   assert.equal(document.querySelectorAll('.phase-tabs button:disabled').length,4);
   await click('.evidence-sealed button');
   assert.equal(document.querySelectorAll('.phase-tabs button:disabled').length,3);
   const first=document.querySelector('.evidence-sheet blockquote').textContent;
   for(let n=0;n<3;n++)await click('.evidence-sheet>button');
   assert.equal(document.querySelectorAll('.phase-tabs button:disabled').length,0);
   assert.notEqual(document.querySelector('.evidence-sheet blockquote').textContent,first);
   assert.ok(document.querySelector('.evidence-sheet>aside'));
   await click('.certainty-scale button:nth-child(3)');assert.equal(document.querySelector('.certainty-scale .active').textContent,'85%');
   await click('.verdict-buttons button:nth-child(2)');assert.ok(document.querySelector('.verdict-buttons button:nth-child(2).active'));
   await click('.teacher-file');assert.ok(document.querySelector('.teacher-directive'));
   // The hotel retains the original gated four-register lab at every level.
   await click('.case-stack>button:nth-of-type(3)');assert.equal(document.querySelector('.register-lab'),null);
   await click('.evidence-sealed button');for(let n=0;n<3;n++)await click('.evidence-sheet>button');
   assert.equal(document.querySelectorAll('.register-lab nav button').length,4);
   const register=document.querySelector('.register-lab blockquote').textContent;
   await click('.register-lab nav button:nth-child(4)');assert.notEqual(document.querySelector('.register-lab blockquote').textContent,register);
   await click('.ministry-rail button:nth-child(3)');
   assert.equal(document.querySelectorAll('.final-evidence nav button:disabled').length,4);
   await click('.final-sealed button');for(let n=0;n<3;n++)await click('.final-evidence article>button');
   assert.equal(document.querySelectorAll('.final-evidence nav button:disabled').length,0);
   assert.equal(document.querySelectorAll('.dual-verdict button').length,3);
   await click('.dual-verdict button:nth-of-type(1)');
   const objection=document.querySelector('.opposition-room aside p').textContent;
   await click('.opposition-room aside button');assert.notEqual(document.querySelector('.opposition-room aside p').textContent,objection);
   await click('.dual-verdict button:nth-of-type(3)');assert.ok(document.querySelector('.dual-verdict button:nth-of-type(3).active'));
   const microphoneModel=document.querySelector('[data-ministry-speaking] [data-case-model]')?.textContent;
   await click('.ministry-rail button:nth-child(4)');
   if(level!=='C2'){
    const directorModel=document.querySelector('[data-case-model]').textContent;
    assert.notEqual(directorModel,microphoneModel,level+' council opens director support, not the previous microphone support');
    if(level==='A0'){
     assert.match(directorModel,/quién decide/);
     await click('[data-ministry-speaking]>div:nth-of-type(2) button');
    }
    await click('.council-nav>button:last-child');
    const actorModel=document.querySelector('[data-case-model]').textContent;
    assert.notEqual(actorModel,directorModel,level+' actor question has actor model');
    if(level==='A0')assert.match(actorModel,/Él está enfadado/,'changing council question resets teacher chunk construction');
    await click('.council-nav>button:last-child');
    const hotelModel=document.querySelector('[data-case-model]').textContent;
    assert.notEqual(hotelModel,actorModel,level+' hotel question has hotel model');
    if(level==='A0')assert.match(hotelModel,/siento el retraso/);
    if(level==='B2'||level==='C1'){
     assert.doesNotMatch(document.querySelector('.ministry-council>header p').textContent,/tú respondes con una frase|El profesor lee/);
     assert.match(document.querySelector('.ministry-council>header p').textContent,level==='B2'?/concede.*negocia/:/perspectiva|supuesto|habría/);
     assert.match(hotelModel,level==='B2'?/Aunque.*Revisaría/:/De haber.*habría/);
    }
    await click('.council-nav>div button:first-child');
   }
   const question=document.querySelector('.council-question h2').textContent;
   await click('.council-question article>button');assert.equal(document.querySelectorAll('.council-question article>div p').length,2);
   await click('.council-nav>button:last-child');assert.notEqual(document.querySelector('.council-question h2').textContent,question);assert.equal(document.querySelector('.council-question article>div'),null);
   await click('.ministry-support-trigger');assert.ok(document.querySelector('.ministry-support'));
   assert.doesNotMatch(document.body.textContent,/undefined|NaN/);
   const target=[...document.querySelectorAll('.cf-level-control button')].find(b=>b.textContent===(level==='C2'?'A0':'C2'));
   await act(()=>target.click());assert.ok(document.querySelector('.ministry-intake'));assert.equal(document.querySelector('.evidence-sheet'),null);assert.ok(dom.window.location.search.includes('source=teacher'));assert.equal(dom.window.location.hash,'#case');
   await act(()=>root.unmount());
  }
 }finally{Object.assign(globalThis,previous);dom.window.close();}
});
