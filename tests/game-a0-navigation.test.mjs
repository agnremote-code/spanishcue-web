import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {readFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
const require=createRequire(import.meta.url),React=require('react');
const find=(tree,predicate)=>!tree||typeof tree!=='object'?[]:Array.isArray(tree)?tree.flatMap(x=>find(x,predicate)):[...(predicate(tree)?[tree]:[]),...find(tree.props?.children,predicate)];
const words=tree=>typeof tree==='string'?tree:Array.isArray(tree)?tree.map(words).join(''):tree?.props?words(tree.props.children):'';
async function load(file,runtime=React,extra=''){
 const path=resolve(file),result=await build({stdin:{contents:readFileSync(path,'utf8')+extra,resolveDir:dirname(path),sourcefile:path,loader:path.endsWith('tsx')?'tsx':'ts'},bundle:true,write:false,format:'cjs',platform:'node',jsx:'automatic',external:['react','react-dom','next/*'],loader:{'.css':'empty'}}),loadedModule={exports:{}};
 runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process,document:{getElementById:()=>null}})(name=>name==='react'?runtime:require(name),loadedModule,loadedModule.exports);return loadedModule.exports;
}
async function harness(file,name,props){
 let state=[],slot=0;
 const runtime={...React,useMemo:fn=>fn(),useCallback:fn=>fn,useEffect:()=>{},useRef:()=>({current:null}),useState:initial=>{const i=slot++;if(!(i in state))state[i]=typeof initial==='function'?initial():initial;return[state[i],value=>{state[i]=typeof value==='function'?value(state[i]):value;}];}};
 const loaded=await load(file,runtime,name==='RedFlagActivity'?'\nexport {RedFlagActivity};':'');
 const render=()=>{slot=0;return loaded[name](props);};
 const click=label=>{const button=find(render(),n=>n.type==='button'&&words(n).includes(label))[0];assert.ok(button,`button ${label}`);button.props.onClick();};
 return {render,click,text:()=>words(render())};
}
test('Red Flag A0 instructions, follow-up and closing navigation include English',async()=>{
 const h=await harness('app/red-flag-o-no/RedFlagGame.tsx','RedFlagActivity',{level:'A0'});
 assert.match(h.text(),/NO HAY UNA RESPUESTA CORRECTA \/ THERE IS NO CORRECT ANSWER/);
 assert.match(h.text(),/Para quien enseña \/ Teacher notes/);
 h.click('EMPEZAR LA RONDA → / START THE ROUND →');
 for(const text of ['Para hablar / To speak','Palabras útiles: / Useful words:','← ANTERIOR / ← PREVIOUS','SITUACIÓN AL AZAR / RANDOM SITUATION','SIGUIENTE → / NEXT →'])assert.ok(h.text().includes(text),text);
 h.click('VERDE / GREEN');h.click('ABRIR REPREGUNTA OPCIONAL / OPEN OPTIONAL FOLLOW-UP');
 assert.match(h.text(),/OCULTAR REPREGUNTA \/ HIDE FOLLOW-UP/);
 h.click('CIERRE / CLOSING');assert.match(h.text(),/Frases para la cita \/ Phrases for the date/);h.click('NUEVA PARTIDA ↻ / NEW GAME ↻');assert.match(h.text(),/START THE ROUND/);
 const original=await harness('app/red-flag-o-no/RedFlagGame.tsx','RedFlagActivity',{level:'A1'});assert.ok(original.text().includes('NO HAY UNA RESPUESTA CORRECTA'));assert.ok(!original.text().includes('THERE IS NO CORRECT ANSWER'));
});
test('A0 machine controls, consequence revision and status remain bilingual through a round',async()=>{
 const data=await load('app/conversation-worlds/data-a0.ts');
 const h=await harness('app/conversation-worlds/ConversationWorld.tsx','default',{mode:'machine',level:'A0',machineRounds:data.eliminationsA0,ruleRounds:data.absurdRulesA0,closing:data.worldClosingA0.machine,guide:data.worldGuidesA0.machine});
 for(const text of ['Pausar movimiento / Pause movement','Preparar la conversación / Prepare to speak','Guía docente / Teacher guide','Reiniciar ronda / Restart round','¿Lo eliminas o no? / Do you remove it or keep it?','Todas / All'])assert.ok(h.text().includes(text),text);
 h.click('Eliminar / Remove');assert.match(h.text(),/Choice made. Now let’s talk/);h.click('¿Qué pasa después? / What happens next?');assert.match(h.text(),/¿Cambias de idea\? \/ Do you change your mind\?/);h.click('Cambio de idea / I change my mind');assert.match(h.text(),/You changed your mind. Your choice was saved/);assert.match(h.text(),/Di: Cambio. \/ Say: I change/);h.click('Otra decisión / Another decision');h.click('Reiniciar ronda / Restart round');assert.match(h.text(),/Round restarted/);
});
test('A0 rules translate opening, all three steps, completion and next-round controls',async()=>{
 const data=await load('app/conversation-worlds/data-a0.ts');
 const h=await harness('app/conversation-worlds/ConversationWorld.tsx','default',{mode:'rules',level:'A0',machineRounds:data.eliminationsA0,ruleRounds:data.absurdRulesA0,closing:data.worldClosingA0.rules,guide:data.worldGuidesA0.rules});
 h.click('Abrir la primera pregunta / Open the first question');assert.match(h.text(),/Mi reacción \/ My reaction/);assert.match(h.text(),/Question 1 of 3/);h.click('Siguiente pregunta / Next question');h.click('Siguiente pregunta / Next question');h.click('Terminamos esta regla / We have finished this rule');assert.match(h.text(),/Rule discussed. You can choose another/);h.click('Otra regla / Another rule');assert.match(h.text(),/Open the first question/);
});
