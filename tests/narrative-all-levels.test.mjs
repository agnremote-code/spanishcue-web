import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {readFileSync} from 'node:fs';
const require=createRequire(import.meta.url),React=require('react');
const configs=[['el-teatro-de-las-coartadas','theatre','TeatroCoartadasNative','A2'],['en-vivo-en-diez-minutos','live','EnVivoDiezMinutosNative','A2'],['la-sala-de-los-mensajes-fuera-de-contexto','context','MensajesFueraDeContextoNative','B2'],['la-mesa-de-las-tres-ofertas','deal','MesaTresOfertasNative','B2'],['la-noche-de-las-siete-llamadas','calls','SieteLlamadasNative','B1'],['el-protocolo-aurora','aurora','ProtocoloAuroraNative','B2']];
const find=(tree,p)=>!tree||typeof tree!=='object'?[]:Array.isArray(tree)?tree.flatMap(t=>find(t,p)):[...(p(tree)?[tree]:[]),...find(tree.props?.children,p)];
const text=tree=>tree===null||tree===undefined||typeof tree==='boolean'?'':typeof tree!=='object'?String(tree):Array.isArray(tree)?tree.map(text).join(' '):text(tree.props?.children);
async function load(route,name){
 const contents=readFileSync(`app/${route}/page.tsx`,'utf8')+`\nexport {${name}};`;
 const b=await build({stdin:{contents,loader:'tsx',resolveDir:process.cwd()+`/app/${route}`},bundle:true,write:false,format:'cjs',platform:'node',jsx:'automatic',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 let state=[],slot=0;
 const mockReact={...React,useEffect:()=>{},useState:initial=>{const i=slot++;if(!(i in state))state[i]=typeof initial==='function'?initial():initial;return [state[i],next=>{state[i]=typeof next==='function'?next(state[i]):next}];}};
 const mod={exports:{}};
 runInNewContext(`(function(require,module,exports){${b.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process,window:{scrollTo(){}}})(n=>n==='react'?mockReact:require(n),mod,mod.exports);
 return level=>{state=[];const render=()=>{slot=0;return mod.exports[name]({level});};const click=label=>{const button=find(render(),n=>n.type==='button'&&text(n).includes(label))[0];assert.ok(button,`button ${label}`);assert.ok(!button.props.disabled);button.props.onClick();return render();};render();return{render,click,stage:n=>{state[0]=n;return render();},state:()=>state};};
}
const engines=Object.fromEntries(await Promise.all(configs.map(async([route,kind,name])=>[kind,await load(route,name)])));
test('six narrative routes use their original JSX and data adapters at every level',()=>{
 for(const [route,kind,,original]of configs){const source=readFileSync(`app/${route}/page.tsx`,'utf8');assert.ok(!source.includes('NativeNarrative'));assert.ok(source.includes(`defaultLevel="${original}"`));for(const level of ['A0','A1','B1','C2']){const s=engines[kind](level);for(let i=0;i<(kind==='calls'?1:7);i++){const tree=kind==='calls'?s.render():s.stage(i);assert.equal(tree.props.className,`${kind}-app`=== 'context-app'?'context-app':`${kind}-app`);assert.ok(!text(tree).includes('undefined'));assert.equal(find(tree,n=>n.type?.name==='NativeSpeakingSupport').length,1);}}}
});
test('native theatre retains chronology, suspect reveal and all four verdict options',()=>{
 for(const level of ['A0','A1','B1','C2']){const s=engines.theatre(level);s.stage(1);s.click('ESCUCHAR');assert.ok(text(s.render()).includes(level==='A0'?'dressing room':level==='C2'?'maquilladora':'León'));s.stage(2);for(const t of ['22:45','22:55','23:02','23:07','23:10'])s.click(t);assert.ok(text(s.render()).includes('ORDEN COMPLETO'));s.stage(5);const grid=find(s.render(),n=>n.props?.className==='verdict-grid')[0];for(let i=0;i<4;i++){find(grid,n=>n.type==='button')[i].props.onClick();assert.ok(!text(s.render()).includes('undefined'));}s.click('ABRIR LA ÚLTIMA PRUEBA');assert.ok(text(s.render()).includes('23:07'));}
});
test('native live five-token budget, protected segments and cut persist across stages',()=>{
 const s=engines.live('A0');s.stage(2);
 const choose=(crisis,option)=>{const layout=find(s.render(),n=>n.props?.className==='control-layout')[0];find(layout.props.children[0],n=>n.type==='button')[crisis].props.onClick();const pair=find(s.render(),n=>n.props?.className==='solution-pair')[0];find(pair,n=>n.type==='button')[option].props.onClick();};
 choose(0,1);choose(1,1);choose(2,1);assert.equal(Object.keys(s.state()[3]).length,2);choose(2,0);assert.equal(Object.keys(s.state()[3]).length,3);
 s.stage(4);const track=find(s.render(),n=>n.props?.className==='program-track')[0];const articles=find(track,n=>n.type==='article');find(articles[0],n=>n.type==='button')[0].props.onClick();find(articles[1],n=>n.type==='button')[0].props.onClick();find(articles[2],n=>n.type==='button')[1].props.onClick();s.stage(5);s.stage(4);assert.equal(find(s.render(),n=>n.type==='article'&&n.props?.className?.includes('protected')).length,2);assert.equal(find(s.render(),n=>n.type==='article'&&n.props?.className?.includes('cut')).length,1);
});
test('native message reveals, deal clauses, phone clues and Aurora decision ledger remain functional',()=>{
 let s=engines.context('A0');s.stage(2);const layer=find(s.render(),n=>n.type==='button'&&text(n).includes('CAPA CERRADA'))[0];assert.ok(layer);layer.props.onClick();assert.ok(text(s.render()).includes('OPEN'));
 s=engines.deal('A0');s.stage(3);s.click('ROMPER EL SELLO');assert.ok(text(s.render()).includes('customers'));
 s=engines.calls('A0');for(let i=0;i<3;i++)s.click('REVELAR SIGUIENTE DATO');assert.ok(text(s.render()).includes('ALL INFORMATION REVEALED'));s.click('NO RESUELTO');assert.ok(text(s.render()).includes('UNRESOLVED'));
 s=engines.aurora('A0');s.stage(1);s.click('REVELAR SIGUIENTE DATO');s.click('REVELAR SIGUIENTE DATO');const options=find(s.render(),n=>n.props?.className==='options')[0];find(options,n=>n.type==='button')[1].props.onClick();s.click('ABRIR ECO DEL FUTURO');assert.ok(text(s.render()).includes('organisms move away'));s.click('REGISTRAR DECISIÓN FINAL');assert.ok(text(s.render()).includes('PROTOCOL RECORDED'));
});
test('the advanced banks change actual native statements, alternatives and reveal data',()=>{
 for(const kind of ['theatre','live','context','deal','calls','aurora']){const low=engines[kind]('A0'),high=engines[kind]('C2');const a=text(kind==='calls'?low.render():low.stage(1)),b=text(kind==='calls'?high.render():high.stage(1));assert.notEqual(a,b);assert.ok(!b.includes('undefined'));}
});
test('all 44 scenes have bilingual content and seven distinct pedagogy levels; original banks keep identity',async()=>{
 const b=await build({stdin:{contents:`export * from './app/conversation-narratives/data';export * from './app/conversation-narratives/pedagogy';export * from './app/conversation-narratives/native-adapter';`,resolveDir:process.cwd()},bundle:true,write:false,format:'cjs',platform:'node',external:['react'],loader:{'.css':'empty'}});const mod={exports:{}};runInNewContext(`(function(require,module,exports){${b.outputFiles[0].text}})`)(require,mod,mod.exports);const{narratives,narrativeLevels,lessonTask,nativeBank}=mod.exports;let count=0;
 for(const[kind,lesson]of Object.entries(narratives)){const original=[{fact:'authored original',cost:5}];assert.equal(nativeBank(kind,lesson.level,'examples',original),original);for(const scene of lesson.scenes){count++;for(const p of [scene.name,scene.fact,scene.hidden,scene.result,scene.model,...scene.options,...scene.words])assert.ok(p.length===2&&p.every(x=>typeof x==='string'&&x.trim()));for(let stage=0;stage<lesson.stages.length;stage++)assert.equal(new Set(narrativeLevels.map(level=>JSON.stringify(lessonTask(kind,stage,scene,level)))).size,7);}}
 assert.equal(count,44);
});
test('theatre motives do not reveal the solution and A0 statements permit supported repetition',()=>{
 for(const level of ['A0','A1','B1','B2','C1','C2']){const s=engines.theatre(level);s.stage(5);const grid=find(s.render(),n=>n.props?.className==='verdict-grid')[0];const before=text(grid);assert.ok(!before.includes('Vera lleva la máscara al depósito'),level);assert.ok(!before.includes('Vera takes the mask to the storeroom'),level);assert.ok(!before.includes('para protegerla'),level);find(grid,n=>n.type==='button')[3].props.onClick();s.click('ABRIR LA ÚLTIMA PRUEBA');assert.ok(text(s.render()).includes('Vera lleva la máscara al depósito'),level);}
 const s=engines.theatre('A0');s.stage(1);const content=text(s.render());assert.ok(content.includes('READ WITH SUPPORT'));assert.ok(content.includes('You may repeat it while looking at the screen'));assert.ok(!content.includes('NO REPITAS EL TEXTO'));assert.ok(!content.includes('dijo que'));
});
test('speaking support never publishes hidden clues or Vera’s final action before reveal',()=>{
 for(const[kind,hidden]of [['theatre','Su teléfono tenía un retraso de cuatro minutos'],['calls','Una compañera recuerda verlo'],['context','El emisor insiste en su intención literal'],['aurora','La zona alternativa es segura y menos eficiente']]){const s=engines[kind]('C1');if(kind!=='calls')s.stage(1);const support=find(s.render(),n=>n.type?.name==='NativeSpeakingSupport')[0];const content=text(support.type(support.props));assert.ok(!content.includes(hidden),`${kind} hidden clue in support`);assert.ok(content.includes('lo que se haya revelado'));}
 const s=engines.theatre('A0');s.stage(1);const cards=find(s.render(),n=>n.props?.className==='suspect-cards')[0];find(cards,n=>n.type==='button')[3].props.onClick();const support=find(s.render(),n=>n.type?.name==='NativeSpeakingSupport')[0];const content=text(support.type(support.props));assert.ok(content.includes('Ella está en el teatro')||content.includes('ella está en el teatro'));assert.ok(!content.includes('lleva la máscara'));assert.ok(!content.includes('takes the mask'));
});
