import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';
const require=createRequire(import.meta.url);
const React=require('react');
const {renderToString}=require('react-dom/server');
async function component(path) {
 const r=await build({entryPoints:[path],bundle:true,write:false,format:'cjs',platform:'node',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 const loadedModule={exports:{}};
 runInNewContext(`(function(require,module,exports){${r.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process})(require,loadedModule,loadedModule.exports);
 return loadedModule.exports.default;
}
test('every shared engine renders accessible level controls and complete selected content',async()=>{
 for(const [path,props,id,level] of [
  ['app/red-flag-o-no/RedFlagGame.tsx',{level:'B2'},'red-flag-o-no','B2'],
  ['app/conversation-worlds/ConversationWorldFamily.tsx',{mode:'machine',level:'A2'},'la-maquina-que-elimina-cosas','A2'],
  ['app/conversation-worlds/ConversationWorldFamily.tsx',{mode:'rules',level:'B1'},'tu-vida-con-una-regla-absurda','B1'],
  ['app/choose-conversation/page.tsx',{variant:'starter'},'lets-talk','A1'],
  ['app/preguntas-prohibidas-a2/page.tsx',{initialLevel:'B1'},'preguntas-prohibidas','B1'],
  ['app/reino-unido-en-relieve/page.tsx',{},'reino-unido-en-relieve','A2'],
  ['app/australia-en-movimiento/page.tsx',{},'australia-en-movimiento','A2'],
  ['app/estados-unidos-a2-b1/page.tsx',{},'estados-unidos-a2-b1','A2'],
 ]){
  const Component=await component(path);const html=renderToString(React.createElement(Component,props));
  assert.ok(html.includes(`data-conversation-family="${id}"`),path);
  assert.ok(html.includes(`data-level="${level}"`),path);
  assert.match(html,new RegExp(`aria-pressed="true">${level}</button>`));
  assert.ok(!html.includes('undefined'),path);
 }
});

test('each Australian place control selects and highlights its own question at both levels',async()=>{
 const {readFile}=await import('node:fs/promises');
 const source=await readFile('app/australia-en-movimiento/page.tsx','utf8');
 const r=await build({stdin:{contents:source+'\nexport {CountryExperience,regions};',resolveDir:process.cwd()+'/app/australia-en-movimiento',loader:'tsx'},jsx:'automatic',bundle:true,write:false,format:'cjs',platform:'node',external:['react','next/*'],loader:{'.css':'empty'}});
 let state=[],slot=0;
 const mockedReact={...React,useState:initial=>{const i=slot++;return [i in state?state[i]:typeof initial==='function'?initial():initial,value=>{state[i]=typeof value==='function'?value(state[i]):value}];}};
 const loadedModule={exports:{}};
 runInNewContext(`(function(require,module,exports){${r.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process,document:{querySelector:()=>null}})(name=>name==='react'?mockedReact:require(name),loadedModule,loadedModule.exports);
 const {CountryExperience,regions}=loadedModule.exports;
 const find=(tree,predicate)=>{if(!tree||typeof tree!=='object')return [];if(Array.isArray(tree))return tree.flatMap(t=>find(t,predicate));return [...(predicate(tree)?[tree]:[]),...find(tree.props?.children,predicate)];};
 for(const region of regions)for(const level of ['A2','B1']){
  const questions=region.questions.filter(q=>q.level===level);
  state=['lesson',region,0,new Set(),false,[]];
  const render=()=>{slot=0;return CountryExperience({level});};
  const route=find(render(),node=>node.props?.className==='au-place-route')[0];
  const buttons=find(route,node=>node.type==='button');
  assert.equal(buttons.length,questions.length);
  buttons.forEach((button,index)=>{
   assert.equal(find(button,node=>node.type==='b')[0].props.children,questions[index].place);
   button.props.onClick();assert.equal(state[2],index);
   const tree=render();const currentRoute=find(tree,node=>node.props?.className==='au-place-route')[0];
   const selected=find(currentRoute,node=>node.type==='button'&&node.props['aria-pressed']);
   assert.equal(selected.length,1);assert.equal(find(selected[0],node=>node.type==='b')[0].props.children,questions[index].place);
   const card=find(tree,node=>node.props?.className==='au-question-copy')[0];
   assert.equal(find(card,node=>node.type==='h2')[0].props.children,questions[index].prompt.es);
  });
 }
});
