import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';
import {getLevelConfig} from '../app/red-flag-o-no/engine.mjs';
const require=createRequire(import.meta.url);
const React=require('react');
const {renderToString}=require('react-dom/server');

// Exercises actual handlers and rendered output; replaces hook storage and browser events only.
async function loadActivity(){
 const source=await readFile('app/red-flag-o-no/RedFlagGame.tsx','utf8');
 const result=await build({stdin:{contents:source+'\nexport {RedFlagActivity};',resolveDir:process.cwd()+'/app/red-flag-o-no',loader:'tsx'},jsx:'automatic',bundle:true,write:false,format:'cjs',platform:'node',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 let state=[],slot=0;
 const listeners=new Map();
 const window={addEventListener:(type,handler)=>listeners.set(type,handler),removeEventListener:type=>listeners.delete(type)};
 const hooks={...React,useState:initial=>{const i=slot++;if(!(i in state))state[i]=typeof initial==='function'?initial():initial;return [state[i],value=>{state[i]=typeof value==='function'?value(state[i]):value;}];},useMemo:fn=>fn(),useCallback:fn=>fn,useEffect:effect=>effect()};
 const loaded={exports:{}};
 runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process,window})(name=>name==='react'?hooks:require(name),loaded,loaded.exports);
 const walk=(node,predicate)=>{if(!node||typeof node!=='object')return; if(predicate(node))return node;for(const child of React.Children.toArray(node.props?.children)){const match=walk(child,predicate);if(match)return match;}};
 const textOf=node=>typeof node==='string'?node:typeof node==='number'?String(node):React.Children.toArray(node?.props?.children).map(textOf).join('');
 return {
  render(){slot=0;return loaded.exports.RedFlagActivity({level:'C2'});},
  html(){return renderToString(this.render());},
  press(key,target={tagName:'MAIN'}){this.render();let prevented=false;listeners.get('keydown')({key,target,preventDefault(){prevented=true;}});return prevented;},
  click(label){const button=walk(this.render(),node=>node.type==='button'&&textOf(node).includes(label));assert.ok(button,`Button ${label} exists`);assert.ok(!button.props.disabled,`${label} is enabled`);button.props.onClick();},
  change(label,value){const field=walk(this.render(),node=>node.props?.['aria-label']===label);assert.ok(field,`Field ${label} exists`);field.props.onChange({target:{value}});},
 };
}

test('C2 dispatches 18 independent three-source scenarios and a personal protocol closing',()=>{
 let config;assert.doesNotThrow(()=>{config=getLevelConfig('C2');});
 assert.equal(config.situations.length,18);assert.equal(new Set(config.situations).size,18);
 for(const level of ['A1','A2','B1','B2','C1'])for(const situation of config.situations)assert.ok(!getLevelConfig(level).situations.includes(situation));
 assert.equal(config.followUps.length,18);assert.equal(config.finale.length,4);
 assert.throws(()=>getLevelConfig('D1'),/Nivel no disponible/);
});

test('C2 requires judgment, context judgment and a separate reveal, preserving all three verdicts',async()=>{
 const a=await loadActivity();a.click('EMPEZAR');
 assert.doesNotMatch(a.html(),/Contexto revelado|Otra versión revelada/);
 a.press(' ');assert.doesNotMatch(a.html(),/Contexto revelado/);
 a.click('SEÑAL ROJA');a.click('REVELAR CONTEXTO');
 assert.match(a.html(),/Contexto revelado/);assert.doesNotMatch(a.html(),/Otra versión revelada/);
 a.press(' ');assert.doesNotMatch(a.html(),/Otra versión revelada/);
 a.click('SEÑAL VERDE');a.click('REVELAR OTRA VERSIÓN');
 assert.match(a.html(),/Otra versión revelada/);
 a.click('SUSPENDER EL JUICIO');
 assert.match(a.html(),/Primera impresión:.*señal roja.*Con el contexto:.*señal verde.*Juicio final:.*sin evidencia suficiente/s);
 a.click('SIGUIENTE');assert.doesNotMatch(a.html(),/Contexto revelado|Otra versión revelada/);
 a.click('ANTERIOR');assert.match(a.html(),/Juicio final:.*sin evidencia suficiente/s);
 a.press('r');assert.match(a.html(),/Primera impresión:.*señal roja.*Con el contexto:.*señal verde.*Juicio final:.*señal roja/s);
});

test('C2 keyboard cannot skip phases or modify a verdict from an interactive target',async()=>{
 const a=await loadActivity();a.click('EMPEZAR');a.press('r',{tagName:'BUTTON'});a.press(' ');
 assert.doesNotMatch(a.html(),/Primera impresión:/);
 a.press('r');a.press(' ');a.press(' ');assert.doesNotMatch(a.html(),/Otra versión revelada/);
 a.press('g');a.press(' ');a.press(' ');a.press('r',{tagName:'TEXTAREA'});
 assert.match(a.html(),/Otra versión revelada/);assert.match(a.html(),/Juicio final:.*pendiente de revisión/s);
 a.press('r');assert.match(a.html(),/Con el contexto:.*señal verde.*Juicio final:.*señal roja/s);
});

test('all C2 scenarios reveal distinct context then credible testimony and demand discriminating evidence',async()=>{
 const {c2Support}=await import('../app/red-flag-o-no/c2.mjs');
 const a=await loadActivity();a.click('EMPEZAR');
 assert.equal(c2Support.cards.length,18);
 for(const field of ['context','alternative','reconsider','compare','evidence','protocolConflict'])assert.equal(new Set(c2Support.cards.map(card=>card[field])).size,18,field);
 for(let index=0;index<18;index++){
  const card=c2Support.cards[index];
  assert.ok(!a.html().includes(card.context));assert.ok(!a.html().includes(card.alternative));
  a.click('SEÑAL VERDE');a.click('REVELAR CONTEXTO');
  assert.ok(a.html().includes(card.context));assert.ok(a.html().includes(card.reconsider));assert.ok(!a.html().includes(card.alternative));
  a.click('MATIZAR MI JUICIO');a.click('REVELAR OTRA VERSIÓN');
  const html=a.html();for(const field of ['alternative','compare','evidence'])assert.ok(html.includes(card[field]),`${index+1}: ${field}`);
  assert.doesNotMatch(html,/GREEN FLAG|RED FLAG|Elegí|Explicá|Defendé/);
  a.click(index===17?'IR AL CIERRE':'SIGUIENTE');
 }
});

test('C2 finale keeps personal principles, tests a selected real scenario and clears everything on reset',async()=>{
 const a=await loadActivity();a.click('EMPEZAR');a.click('SEÑAL ROJA');a.click('REVELAR CONTEXTO');a.click('SEÑAL VERDE');a.click('REVELAR OTRA VERSIÓN');a.click('MATIZAR MI JUICIO');a.click('CIERRE');
 assert.match(a.html(),/Tu protocolo de juicio/);assert.match(a.html(),/Juicio final:.*con condiciones/s);
 for(let i=1;i<=4;i++)a.change(`Principio ${i}`,`Mi principio personal ${i}`);
 a.click('PROBAR MI PROTOCOLO');
 assert.match(a.html(),/Dos principios en conflicto/);assert.match(a.html(),/Mi principio personal 1/);
 assert.match(a.html(),/Tu pareja responde «Haz lo que quieras»/);
 a.click('VOLVER A ESTA SITUACIÓN');a.click('CIERRE');assert.match(a.html(),/Mi principio personal 4/);
 a.click('NUEVA PARTIDA');a.click('CIERRE');
 assert.doesNotMatch(a.html(),/Mi principio personal|Primera impresión:|Dos principios en conflicto/);
 assert.match(a.html(),/Todavía no has elegido/);
});


test('C2 summary Space retains native disclosure behavior without revealing either source',async()=>{
 const targets=[
  {tagName:'SUMMARY',isContentEditable:false},
  {tagName:'SPAN',isContentEditable:false,closest:selector=>selector.split(',').includes('summary')?{tagName:'SUMMARY'}:null},
 ];
 for(const target of targets){
  const a=await loadActivity();a.click('EMPEZAR');a.click('SEÑAL ROJA');
  assert.equal(a.press(' ',target),false,'summary Space must retain its native default');
  assert.doesNotMatch(a.html(),/Contexto revelado|Otra versión revelada/);
  assert.equal(a.press(' '),true,'main Space still reveals context');
  a.click('SEÑAL VERDE');
  assert.equal(a.press(' ',target),false,'summary Space must not reveal the alternative');
  assert.doesNotMatch(a.html(),/Otra versión revelada/);
  assert.equal(a.press(' '),true);
  assert.match(a.html(),/Otra versión revelada/);
 }
});
