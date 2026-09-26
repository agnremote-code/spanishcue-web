import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';

const require=createRequire(import.meta.url);
const React=require('react');
const {renderToString}=require('react-dom/server');
const routes=[
 ['red-flag-o-no-a2','A2','A1'],['red-flag-o-no-b1','B1','A1'],['red-flag-o-no-b2','B2','A1'],
 ['a1-conversation','A1','B2'],['basic-conversation','A2','B2'],['choose-conversation','B1','B2'],
 ['la-maquina-que-elimina-cosas','B1','B2'],['la-maquina-que-elimina-cosas-a2','A2','B2'],
 ['tu-vida-con-una-regla-absurda','B1','B2'],['tu-vida-con-una-regla-absurda-a2','A2','B2'],
];
const compiled=new Map();
async function renderRoute(route,query){
 if(!compiled.has(route)){
  const bundle=await build({entryPoints:[`app/${route}/page.tsx`],bundle:true,write:false,platform:'node',format:'cjs',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
  compiled.set(route,bundle.outputFiles[0].text);
 }
 // SSR uses the historical server snapshot. Hydration reads the actual URL
 // through the production selector's client snapshot, without replacing it.
 const clientReact={...React,useSyncExternalStore:(_subscribe,snapshot,serverSnapshot)=>query===undefined?serverSnapshot():snapshot()};
 const loadedModule={exports:{}};
 runInNewContext(`(function(require,module,exports){${compiled.get(route)}\n})`,{
  console,URL,URLSearchParams,process,window:{location:{search:query||''}},
 })(name=>name==='react'?clientReact:require(name),loadedModule,loadedModule.exports);
 return renderToString(React.createElement(loadedModule.exports.default));
}

test('all ten historical URLs preserve their server/default level and safely reject unsupported queries',async()=>{
 for(const [route,historical] of routes){
  for(const query of [undefined,'','?level=C2','?level=not-a-level']){
   const html=await renderRoute(route,query);
   assert.match(html,new RegExp(`data-level="${historical}"`),`${route} ${query}`);
   assert.match(html,new RegExp(`aria-pressed="true">${historical}</button>`));
  }
 }
});

test('every historical URL renders its family new variant when selected in the query',async()=>{
 for(const [route,,level] of routes){
  const html=await renderRoute(route,`?locale=es&level=${level}&utm_source=teacher`);
  assert.match(html,new RegExp(`data-level="${level}"`),route);
  assert.match(html,new RegExp(`aria-pressed="true">${level}</button>`));
  assert.doesNotMatch(html,/>C2<\/button>/);
  if(route.includes('maquina')||route.includes('regla-absurda'))assert.doesNotMatch(html,/>C1<\/button>/);
  if(route.includes('red-flag'))assert.match(html,/class="rf-game rf-a1"/);
  if(route.includes('conversation'))assert.match(html,/Tres preguntas, distintas perspectivas/);
  if(route.includes('maquina'))assert.match(html,/La reproducción automática/);
  if(route.includes('regla-absurda'))assert.match(html,/Preparar la conversación/);
 }
});
