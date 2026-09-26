import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';
import {getLevelConfig} from '../app/red-flag-o-no/engine.mjs';
const require=createRequire(import.meta.url);
const React=require('react');
const {renderToString}=require('react-dom/server');

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
  start(values=[]){state=values;},
  render(){slot=0;return loaded.exports.RedFlagActivity({level:'C1'});},
  html(){return renderToString(this.render());},
  press(key,target={tagName:'MAIN'}){this.render();listeners.get('keydown')({key,target,preventDefault(){}});},
  click(label){const button=walk(this.render(),node=>node.type==='button'&&textOf(node).includes(label));assert.ok(button,`Button ${label} exists`);button.props.onClick();},
 };
}

test('C1 dispatches an independent 18-situation bank and rejects C2',()=>{
 const config=getLevelConfig('C1');
 assert.equal(config.situations.length,18);
 assert.equal(new Set(config.situations).size,18);
 assert.equal(config.followUps.length,18);
 for(const level of ['A1','A2','B1','B2'])for(const situation of config.situations)assert.ok(!getLevelConfig(level).situations.includes(situation));
 assert.throws(()=>getLevelConfig('C2'),/Nivel no disponible/);
 assert.equal(config.finale.length,4);
});

test('C1 context stays hidden until a judgment and explicit reveal; later choices preserve first impression',async()=>{
 const activity=await loadActivity();
 activity.click('EMPEZAR');
 assert.doesNotMatch(activity.html(),/guarda mensajes de una amiga|Primera impresión:/);
 activity.click('SEÑAL ROJA');
 assert.doesNotMatch(activity.html(),/guarda mensajes de una amiga/);
 activity.click('REVELAR CONTEXTO');
 assert.match(activity.html(),/guarda mensajes de una amiga/);
 assert.match(activity.html(),/Primera impresión:.*roja/s);
 activity.click('SEÑAL VERDE');
 let html=activity.html();
 assert.match(html,/Primera impresión:.*roja.*Con el contexto:.*verde/s);
 activity.click('MATIZAR MI JUICIO');
 html=activity.html();
 assert.match(html,/Primera impresión:.*roja.*Con el contexto:.*con condiciones/s);
 activity.click('SIGUIENTE');
 assert.doesNotMatch(activity.html(),/guarda mensajes de una amiga|Con el contexto:/);
 activity.click('ANTERIOR');
 assert.match(activity.html(),/Con el contexto:.*con condiciones/s);
});

test('every C1 situation offers distinct context, an oral reconsideration and a missing-information question',async()=>{
 const {c1Support}=await import('../app/red-flag-o-no/c1.mjs');
 const activity=await loadActivity();
 assert.deepEqual(Object.values(c1Support.rounds).map(round=>round.minutes),[10,13,13]);
 assert.equal(c1Support.cards.length,18);
 assert.equal(new Set(c1Support.cards.map(card=>card.context)).size,18);
 for(let index=0;index<18;index++){
  const card=c1Support.cards[index];
  activity.start(['play',index,{}, {}, {}]);
  assert.ok(!activity.html().includes(card.context));
  activity.click('SEÑAL VERDE');
  activity.click('REVELAR CONTEXTO');
  const html=activity.html();
  assert.ok(html.includes(card.context));
  assert.ok(html.includes(card.reconsider));
  assert.ok(html.includes(card.missingInfo));
  assert.match(html,/Para precisar/);
 }
});

test('C1 finale uses actual initial and qualified judgments; reset removes them',async()=>{
 const activity=await loadActivity();
 activity.click('EMPEZAR');activity.click('SEÑAL ROJA');activity.click('REVELAR CONTEXTO');activity.click('MATIZAR MI JUICIO');activity.click('CIERRE');
 let html=activity.html();
 assert.match(html,/Tus criterios, con excepciones/);
 assert.match(html,/Primera impresión:.*roja.*Con el contexto:.*con condiciones/s);
 assert.match(html,/Tu pareja deja el teléfono boca abajo/);
 assert.match(html,/excepción|excepciones/);
 activity.click('VOLVER A ESTA SITUACIÓN');
 assert.match(activity.html(),/MATIZAR MI JUICIO/);
 activity.click('CIERRE');activity.click('NUEVA PARTIDA');activity.click('CIERRE');
 html=activity.html();
 assert.doesNotMatch(html,/Primera impresión:/);
 assert.match(html,/Todavía no elegiste/);
});


test('C1 keyboard reveal requires an initial choice, remains revealed and ignores interactive targets',async()=>{
 const activity=await loadActivity();activity.click('EMPEZAR');
 activity.press(' ');
 assert.doesNotMatch(activity.html(),/guarda mensajes de una amiga/);
 activity.press('r',{tagName:'BUTTON'});
 assert.doesNotMatch(activity.html(),/Primera impresión:/);
 activity.press('r');activity.press(' ');activity.press(' ');activity.press('g');
 assert.match(activity.html(),/guarda mensajes de una amiga/);
 assert.match(activity.html(),/Primera impresión:.*roja.*Con el contexto:.*verde/s);
});

test('C1 extension preserves Run1 A1 bytes and historical Red Flag bank fingerprints',async()=>{
 const hash=value=>createHash('sha256').update(value).digest('hex');
 assert.equal(hash(await readFile('app/red-flag-o-no/a1.mjs')),'cd623d29b1f37afd5916503d2094a5d8a70e654b3c41b82724785b06ba743d5b');
 const original=JSON.parse(await readFile('tests/fixtures/conversation-batch1-originals.json','utf8'));
 for(const level of ['A2','B1','B2'])assert.equal(hash(JSON.stringify(getLevelConfig(level))),original.banks[`redFlag${level}`]);
});
