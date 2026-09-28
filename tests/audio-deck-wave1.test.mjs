import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';
const require=createRequire(import.meta.url),React=require('react');
const {outputFiles}=await build({entryPoints:['app/listening-studio/AudioDeck.tsx'],bundle:true,write:false,format:'cjs',platform:'node',external:['react'],loader:{'.css':'empty'}});
const find=(n,fn)=>!n||typeof n!=='object'?[]:Array.isArray(n)?n.flatMap(x=>find(x,fn)):[...(fn(n)?[n]:[]),...find(n.props?.children,fn)];
const words=n=>typeof n==='string'||typeof n==='number'?String(n):Array.isArray(n)?n.map(words).join(''):n?.props?words(n.props.children):'';
function harness(extra={}){
 const state=[],effects=[],refs=[];let si=0,ei=0,ri=0,pending=[];
 const runtime={...React,useState:init=>{const i=si++;if(!(i in state))state[i]=init;return[state[i],v=>state[i]=typeof v==='function'?v(state[i]):v];},useRef:init=>{const i=ri++;return refs[i]??=( {current:init} );},useEffect:(fn,deps)=>{const i=ei++,old=effects[i];if(!old||deps.some((v,n)=>!Object.is(v,old.deps[n]))){pending.push(()=>{old?.cleanup?.();effects[i]={deps,cleanup:fn()};});}}};
 const m={exports:{}};runInNewContext(`(function(require,module,exports){${outputFiles[0].text}\n})`,{console})(n=>n==='react'?runtime:require(n),m,m.exports);
 const media={paused:true,currentTime:0,playbackRate:1,pauseCalls:0,playCalls:0,loadCalls:0,pause(){this.paused=true;this.pauseCalls++;},play(){this.paused=false;this.playCalls++;return Promise.resolve();},load(){this.loadCalls++;}};
 let props={src:'/audio/one.mp3',title:'Escucha 1',channel:'PRUEBA',...extra};
 const render=()=>{si=ei=ri=0;const t=m.exports.default(props);find(t,n=>n.type==='audio')[0].props.ref.current=media;const queue=pending;pending=[];queue.forEach(fn=>fn());return t;};
 render();
 const audio=()=>find(render(),n=>n.type==='audio')[0];
 const click=label=>{const b=find(render(),n=>n.type==='button'&&words(n).includes(label))[0];assert.ok(b,label);assert.ok(!b.props.disabled);b.props.onClick();};
 return{media,render,audio,click,text:()=>words(render()),change:next=>{props={...props,...next};render();},unmount:()=>{refs[0].current=null;effects.forEach(e=>e.cleanup?.());}};
}

test('unmount pauses the captured audio even when React already detached its ref',()=>{
 const h=harness();h.audio().props.onLoadedMetadata({currentTarget:{duration:2}});h.click('PLAY');
 const before=h.media.pauseCalls;h.unmount();assert.equal(h.media.pauseCalls,before+1);
 assert.equal(h.media.paused,true);
});
test('native player metadata, replay, seek, end, error and source change act on the media element',()=>{
 let completed=0;const h=harness({onComplete:()=>completed++,showWaveform:false,playingMessage:'Compará con el texto visible.'});
 assert.ok(find(h.render(),n=>n.type==='button')[0].props.disabled);
 h.audio().props.onLoadedMetadata({currentTarget:{duration:3}});h.click('PLAY');h.audio().props.onPlay();
 assert.match(h.text(),/Compará con el texto visible/);assert.doesNotMatch(h.text(),/transcripción sigue oculta/);
 h.media.currentTime=2;h.click('REPETIR');assert.equal(h.media.currentTime,0);assert.equal(h.media.playCalls,2);
 find(h.render(),n=>n.type==='input')[0].props.onChange({target:{value:'1.5'}});assert.equal(h.media.currentTime,1.5);
 h.audio().props.onEnded();assert.equal(completed,1);assert.match(h.text(),/1 ESCUCHA/);
 h.audio().props.onError();assert.ok(find(h.render(),n=>n.type==='button')[0].props.disabled);assert.match(h.text(),/No se pudo cargar/);
 const before=h.media.pauseCalls;h.change({src:'/audio/two.mp3'});assert.equal(h.media.pauseCalls,before+1);assert.equal(h.media.loadCalls,2);
 assert.doesNotMatch(h.text(),/1 ESCUCHA|No se pudo cargar/);assert.match(h.text(),/Cargando audio/);
});
test('legacy consumers retain their default decorative bars and hidden-transcript playing copy',()=>{
 const h=harness();h.audio().props.onLoadedMetadata({currentTarget:{duration:3}});h.audio().props.onPlay();
 assert.match(h.text(),/La transcripción sigue oculta/);
 assert.equal(find(h.render(),n=>n.props?.className?.startsWith('audio-wave')).length,1);
});
