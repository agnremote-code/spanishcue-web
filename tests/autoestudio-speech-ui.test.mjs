import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { build } from 'esbuild';
import { createRequire } from 'node:module';
import { audioKey } from '../app/autoestudio/curriculum/audio-key.ts';
const dom=new JSDOM('<div id="root"></div>',{url:'https://spanishcue.test'});
for(const key of ['window','document','HTMLElement','Event'])globalThis[key]=dom.window[key];
globalThis.IS_REACT_ACT_ENVIRONMENT=true;
const queue=[];
window.speechSynthesis={paused:false,pending:false,speaking:false,getVoices:()=>[{lang:"es-MX",name:"Native"}],addEventListener(){},removeEventListener(){},cancel(){},resume(){},speak:u=>queue.push(u)};
let media;let rejectNext=false;
globalThis.Audio=class {constructor(){media=this;} play(){if(rejectNext){rejectNext=false;return Promise.reject(new Error('blocked'));}return Promise.resolve();}pause(){}};
const require=createRequire(import.meta.url),React=require('react'),{act}=React,{createRoot}=require('react-dom/client');
const built=await build({stdin:{resolveDir:process.cwd(),contents:"export {PlayButton} from './app/autoestudio/engine/Exercises'; export {copyFor} from './app/autoestudio/engine/copy'; export {stopAudio} from './app/autoestudio/engine/speech';"},bundle:true,platform:'node',format:'cjs',write:false,jsx:'automatic',external:['react','react-dom','next/*']});
const m={exports:{}};new Function('require','module','exports',built.outputFiles[0].text)(require,m,m.exports);
test('real buttons recover from error, allow retry/slow playback, and reset when another button interrupts',async()=>{
 const root=createRoot(document.getElementById('root'));const warnings=[];const warn=console.warn;console.warn=(...args)=>warnings.push(args);
 try{
 await act(async()=>root.render(React.createElement(React.Fragment,null,...['Hola','Adiós'].map(text=>React.createElement(m.exports.PlayButton,{key:text,text,ctx:{t:m.exports.copyFor('es'),showEnglish:false,audio:Object.fromEntries(['Hola','Adiós'].map(t=>[audioKey(t),'/audio/autoestudio/'+audioKey(t)+'.mp3']))}})))));
 const buttons=document.querySelectorAll('button');
 rejectNext=true;
 await act(async()=>buttons[0].click());
 assert.equal(queue.length,0,'speechSynthesis is forbidden');
 assert.ok(document.querySelector('[role="alert"]'));
 assert.ok(!buttons[0].classList.contains('playing'));
 await act(async()=>buttons[0].click());assert.ok(buttons[0].classList.contains('playing'));
 await act(async()=>media.onerror());assert.ok(document.querySelector('[role="alert"]'));assert.ok(!buttons[0].classList.contains('playing'));assert.equal(warnings.length,2);
 await act(async()=>buttons[0].click());assert.equal(document.querySelector('[role="alert"]'),null);
 await act(async()=>buttons[1].click());assert.equal(media.playbackRate,0.7);assert.ok(buttons[0].classList.contains('playing'),'old promise must not reset the new request');
 await act(async()=>buttons[2].click());assert.ok(!buttons[0].classList.contains('playing'));assert.ok(buttons[2].classList.contains('playing'));
 await act(async()=>media.onended());assert.ok(!buttons[2].classList.contains('playing'));
 assert.equal(queue.length,0,'all clicks must use MP3, never speechSynthesis');
 }finally{await act(async()=>{m.exports.stopAudio();root.unmount();});console.warn=warn;dom.window.close();}
});
