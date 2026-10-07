import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
const require=createRequire(import.meta.url),React=require('react');
const expected={
 VIDA:['Quiero ir a casa. / I want to go home.','Quiero ir al parque. / I want to go to the park.'],
 VIAJES:['Quiero ir en tren. / I want to go by train.','Quiero ir en autobús. / I want to go by bus.'],
 TRABAJO:['Trabajo en casa. / I work at home.','Trabajo en la oficina. / I work at the office.'],
 PERSONAS:['Quiero estar solo. / I want to be alone.','Quiero estar con amigos. / I want to be with friends.'],
 DINERO:['Quiero comprar. / I want to buy.','Quiero ahorrar. / I want to save.'],
 TECNOLOGÍA:['Quiero un teléfono. / I want a phone.','Quiero un libro. / I want a book.'],
 DECISIONES:['Quiero café. / I want coffee.','Quiero té. / I want tea.'],
};
const find=(tree,predicate)=>!tree||typeof tree!=='object'?[]:Array.isArray(tree)?tree.flatMap(x=>find(x,predicate)):[...(predicate(tree)?[tree]:[]),...find(tree.props?.children,predicate)];
const words=tree=>typeof tree==='string'?tree:Array.isArray(tree)?tree.map(words).join(''):tree?.props?words(tree.props.children):'';
async function harness(){
 let state=[],slot=0;
 const runtime={...React,useMemo:fn=>fn(),useEffect:()=>{},useRef:()=>({current:null}),useState:initial=>{const i=slot++;if(!(i in state))state[i]=typeof initial==='function'?initial():initial;return[state[i],value=>{state[i]=typeof value==='function'?value(state[i]):value;}];}};
 const path=resolve('app/modo-play-uno-o-el-otro/page.tsx');
 const result=await build({stdin:{contents:readFileSync(path,'utf8')+'\nexport {ChoiceActivity};',resolveDir:dirname(path),sourcefile:path,loader:'tsx'},bundle:true,write:false,format:'cjs',platform:'node',jsx:'automatic',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 const module={exports:{}};
 runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process})(name=>name==='react'?runtime:require(name),module,module.exports);
 const render=()=>{slot=0;return module.exports.ChoiceActivity({level:'A0'});};
 const component=(name,tree=render())=>find(tree,node=>typeof node.type==='function'&&node.type.name===name)[0];
 const category=name=>{const bank=component('BankTools');const button=find(bank.type(bank.props),node=>node.type==='button'&&words(node).startsWith(name))[0];assert.ok(button,`category ${name}`);button.props.onClick();};
 const model=()=>component('GameSpeech').props.model;
 return {render,component,category,model};
}
test('A0 category and choice changes update both visible oral supports for all seven pairs',async()=>{
 const h=await harness();
 for(const [category,models] of Object.entries(expected)){
  h.category(category);
  assert.ok(h.model().includes(models[0])&&h.model().includes(models[1]),`${category}: both models before selection`);
  for(const selected of [0,1,0]){
   const buttons=find(h.render(),node=>node.type==='button'&&node.props.className?.startsWith('choice-button'));
   buttons[selected].props.onClick();
   assert.equal(h.model(),models[selected],`${category}/${selected}: main support`);
   assert.equal(words(h.component('SpeakPrompt')),models[selected],`${category}/${selected}: oral turn`);
  }
 }
});
test('A0 dilemma models follow a changed choice after each cumulative reveal',async()=>{
 const h=await harness();
 h.render().props.onStageChange(2);
 for(const [category,models] of Object.entries(expected)){
  h.category(category);
  for(let phase=0;phase<3;phase++){
   for(const selected of [0,1]){
    let card=h.component('DilemmaCard'),tree=card.type(card.props);
    const options=find(tree,node=>node.type==='button'&&node.props.className?.startsWith('choice-button'));
    options[selected].props.onClick();
    assert.equal(h.model(),models[selected],`${category}/phase${phase}/${selected}: main support`);
    card=h.component('DilemmaCard');tree=card.type(card.props);
    assert.equal(words(h.component('SpeakPrompt',tree)),models[selected],`${category}/phase${phase}/${selected}: revealed oral prompt`);
   }
   if(phase<2){const card=h.component('DilemmaCard'),tree=card.type(card.props);find(tree,node=>node.type==='button'&&node.props.className==='reveal-button')[0].props.onClick();assert.ok(h.model().includes(models[0])&&h.model().includes(models[1]),`${category}: new turn offers both models`);}
  }
 }
});
