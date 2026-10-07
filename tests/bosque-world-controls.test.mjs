import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {ZONES} from '../app/bosque-de-los-hongos-gigantes/engine.mjs';
const require=createRequire(import.meta.url);
const React=require('react'),{act}=React,{createRoot}=require('react-dom/client');
// Keep scene construction, raycasting, physics, RAF updates and React UI real.
// Only the unavailable GPU, atlas loading and texture drawing are replaced.
class Renderer{constructor(){this.domElement=document.createElement('canvas');this.shadowMap={};}setPixelRatio(){}setSize(){}render(){}dispose(){}}
class TextureLoader{load(){return new THREE.Texture();}}
const compiled=await build({entryPoints:['app/bosque-de-los-hongos-gigantes/World3D.tsx'],bundle:true,platform:'node',format:'cjs',write:false,loader:{'.css':'empty'},jsx:'automatic',external:['three','three/*','react']});
const m={exports:{}};new Function('require','module','exports',compiled.outputFiles[0].text)(name=>name==='three'?{...THREE,WebGLRenderer:Renderer,TextureLoader}:name.includes('BufferGeometryUtils')?{mergeGeometries}:require(name),m,m.exports);
async function mount(at){
 const dom=new JSDOM('<div id="root"></div>',{url:'https://fixture.invalid',pretendToBeVisual:true});
 for(const k of ['window','document','HTMLElement','localStorage','KeyboardEvent'])globalThis[k]=dom.window[k];
 window.matchMedia=()=>({matches:false});
 dom.window.HTMLCanvasElement.prototype.getContext=()=>new Proxy({createRadialGradient:()=>({addColorStop(){}})},{get:(o,k)=>o[k]??(()=>{})});
 const frames=new Map();let frameId=0,time=0;
 globalThis.requestAnimationFrame=fn=>{frames.set(++frameId,fn);return frameId;};globalThis.cancelAnimationFrame=id=>frames.delete(id);
 globalThis.ResizeObserver=class{observe(){}disconnect(){}};globalThis.IS_REACT_ACT_ENVIRONMENT=true;
 const z=at??ZONES[0],position={x:z.x,y:z.y,z:z.z},safe={x:ZONES[0].x,y:ZONES[0].y,z:ZONES[0].z};localStorage.setItem('spanishcue:bosque:world:v2',JSON.stringify({version:2,position,checkpoint:at?safe:position}));
 const calls=[],positions=[];let props={paused:false,visited:[],completed:false,unlocked:false,micro:[],onMicroSpot:spot=>calls.push(`spot:${spot}`),onMicroDone:spot=>calls.push(`done:${spot}`),onZone:zone=>calls.push(zone),onFail:()=>assert.fail('GPU fixture failed'),onPosition:p=>positions.push(p)};
 const root=createRoot(document.getElementById('root'));
 const render=async more=>{props={...props,...more};await act(()=>root.render(React.createElement(m.exports.default,props)));};
 await render({});
 return{calls,positions,render,async advance(n=20){await act(()=>{for(let i=0;i<n;i++){time+=16;const pending=[...frames.values()];frames.clear();for(const fn of pending)fn(time);}});},async stop(){await act(()=>root.unmount());dom.window.close();}};
}
const key=async(code,type='keydown')=>act(()=>document.activeElement.dispatchEvent(new KeyboardEvent(type,{code,bubbles:true})));
const click=async selector=>act(()=>document.querySelector(selector).click());
test('landing does not open a dialog; E and the button honor first/repeat and paused state',async()=>{
 const t=await mount();try{
  await t.advance();assert.deepEqual(t.calls.filter(c=>!c.startsWith('spot:')),[]);assert.match(document.querySelector('.bfg-world-converse').textContent,/Conversar/);assert.doesNotMatch(document.querySelector('.bfg-world-converse').textContent,/Volver/);
  await click('.bfg-world-converse');assert.deepEqual(t.calls.filter(c=>!c.startsWith('spot:')),['sobre-ti']);assert.equal(document.activeElement.tagName,'CANVAS');
  await t.render({paused:true});await key('KeyE');assert.equal(t.calls.filter(c=>!c.startsWith('spot:')).length,1);
  await t.render({paused:false,visited:['sobre-ti']});await t.advance();assert.match(document.querySelector('.bfg-world-converse').textContent,/Volver a conversar/);assert.match(document.querySelector('.bfg-world-location').textContent,/Destino: La cesta olvidada/);assert.match(document.querySelector('.bfg-world-location').textContent,/Vida real · \d+ m · ↑ \d+ m más arriba/);
  await key('KeyE');assert.equal(t.calls.filter(c=>!c.startsWith('spot:')).length,2);await key('KeyE','keyup');
 }finally{await t.stop();}
});
test('map pauses traversal, Escape returns canvas focus, walking and jumping resume',async()=>{
 const t=await mount();try{
  await t.advance();const start=t.positions.at(-1);
  await click('[aria-label="Abrir mapa del bosque"]');assert.ok(document.querySelector('[role="dialog"]'));
  await key('KeyW');await t.advance();assert.deepEqual(t.positions.at(-1),start);
  await key('Escape');assert.equal(document.querySelector('[role="dialog"]'),null);assert.equal(document.activeElement.tagName,'CANVAS');
  await key('KeyW');await key('Space');await t.advance();await key('KeyW','keyup');await key('Space','keyup');
  assert.ok(Math.hypot(t.positions.at(-1).x-start.x,t.positions.at(-1).z-start.z)>.5);assert.ok(t.positions.at(-1).y>start.y+.5);
  assert.equal(document.querySelector('.bfg-world-converse'),null,'no interaction while airborne');
  await click('[aria-label="Cambiar distancia de cámara"]');assert.equal(document.querySelector('[aria-label="Cambiar distancia de cámara"]').getAttribute('aria-pressed'),'true');assert.match(document.querySelector('[aria-label="Cambiar distancia de cámara"]').textContent,/Lejos/);
 }finally{await t.stop();}
});

test('a short moment between stations: landing reports the spot, E marks it said, the HUD counts it',async()=>{
 const {MICRO_SPOTS}=await import('../app/bosque-de-los-hongos-gigantes/engine.mjs');
 const spot=MICRO_SPOTS[0];const t=await mount(spot);try{
  await t.advance();assert.ok(t.calls.includes(`spot:${spot.id}`));assert.match(document.querySelector('.bfg-world-hint').textContent,/Momento rápido/);
  await key('KeyE');assert.ok(t.calls.includes(`done:${spot.id}`));
  await t.render({micro:[spot.id]});assert.match(document.querySelector('.bfg-world-climb').getAttribute('aria-label'),/1 de \d+ momentos/);
  await click('[aria-label="Mirar hacia el destino"]');await t.advance(40);
 }finally{await t.stop();}
});

test('Space in the air gives one second jump; the next cap is marked and the route resumes after a fall',async()=>{
 const t=await mount();try{
  await t.advance();await key('Space');await key('Space','keyup');await t.advance(12);
  const top=t.positions.at(-1).y;await key('Space');await key('Space','keyup');await t.advance(12);
  assert.ok(t.positions.at(-1).y>top,'the second jump lifts the hero again');
  await t.advance(160);assert.match(document.querySelector('.bfg-world-hint').textContent,/segundo salto|Punto de regreso|Conversar|E para conversar/);
 }finally{await t.stop();}
});
