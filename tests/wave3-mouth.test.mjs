import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';
const require=createRequire(import.meta.url), React=require('react');
const {renderToString}=require('react-dom/server');
async function load(path,runtime=React){
 const {outputFiles}=await build({entryPoints:[path],bundle:true,write:false,platform:'node',format:'cjs',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 const m={exports:{}};runInNewContext(`(function(require,module,exports){${outputFiles[0].text}\n})`,{console,URL,Headers,process})(name=>name==='react'?runtime:require(name),m,m.exports);return m.exports;
}
const find=(n,p)=>!n||typeof n!=='object'?[]:Array.isArray(n)?n.flatMap(v=>find(v,p)):[...(p(n)?[n]:[]),...find(n.props?.children,p)];
const words=n=>typeof n==='string'||typeof n==='number'?String(n):Array.isArray(n)?n.map(words).join(''):n?.props?words(n.props.children):'';
async function harness(){
 const state=[];let slot=0;
 const runtime={...React,useState:init=>{const i=slot++;if(!(i in state))state[i]=typeof init==='function'?init():init;return[state[i],v=>state[i]=typeof v==='function'?v(state[i]):v];}};
 const {lessons}=await load('app/lesson-catalog.ts');const lesson=lessons.find(l=>l.id===38);
 const {default:Lab}=await load('app/mouth-lab/MouthLab.tsx',runtime);
 const render=()=>{slot=0;return Lab({lesson});};
 const button=label=>find(render(),n=>n.type==='button'&&words(n)===label)[0];
 const click=label=>{const b=button(label);assert.ok(b,label);assert.ok(!b.props.disabled,`enabled ${label}`);b.props.onClick();};
 const deck=()=>find(render(),n=>typeof n.type==='function'&&n.props?.src)[0];
 const hear=()=>{deck().props.onComplete();click('Sí, lo escuché');};
 return {render,button,click,deck,hear,text:()=>words(render()),boxes:()=>find(render(),n=>n.type==='input'&&n.props.type==='checkbox')};
}

test('Mouth Lab SSR renders a neutral first listen and preserves the complete optional source bank',async()=>{
 const {lessons}=await load('app/lesson-catalog.ts'), lesson=lessons.find(l=>l.id===38);
 const {default:Lab}=await load('app/mouth-lab/MouthLab.tsx');
 const html=renderToString(React.createElement(Lab,{lesson}));
 assert.match(html,/<audio\b/);assert.doesNotMatch(html,/audio-wave|autoplay/i);
 assert.match(html,/A1–C1/);assert.match(html,/un solo banco/);assert.match(html,/≈ 45 min/);
 const h=await harness();assert.ok(h.button('Un toque breve').props.disabled);assert.doesNotMatch(h.text(),/Sonó:/);
 h.click('Banco opcional');for(const line of [...lesson.practice,...lesson.speaking,lesson.warmup,lesson.explanation,lesson.homework])assert.ok(h.text().includes(line),line);
});

test('all eight contrasts and both options are validated by actual handlers with no pre-listen answer leak',async()=>{
 const h=await harness();h.click('Contrastá');
 const bank=[['pero',['pero','perro']],['perro',['pero','perro']],['carro',['caro','carro']],['caro',['caro','carro']],['perro',['pero','perro']],['pero',['pero','perro']],['caro',['caro','carro']],['carro',['caro','carro']]];
 for(const [i,[answer,options]] of bank.entries()){
  assert.ok(h.button(options[0]).props.disabled);assert.ok(h.button('Sí, lo escuché').props.disabled);assert.doesNotMatch(h.text(),/Sonó:/);
  h.deck().props.onComplete();assert.ok(h.button(options[0]).props.disabled,'ended alone must not unlock');h.click('Sí, lo escuché');
  for(const option of options){h.click(option);assert.doesNotMatch(h.text(),/Coincide con el audio/);h.click('Comprobar');assert.equal(h.text().includes('Coincide con el audio'),option===answer,`trial ${i}:${option}`);assert.equal(h.text().includes('Sonó:'),option===answer);}
  h.click(answer);h.click('Comprobar');if(i<7)h.click('Siguiente contraste');
 }
 assert.match(h.text(),/8 de 8 contrastes sin texto/);h.click('Anterior contraste');assert.match(h.text(),/Sonó: caro/);
});

test('text accommodation never becomes auditory credit through replay or retry; reset clears it',async()=>{
 const h=await harness();h.click('Contrastá');h.click('Texto de apoyo');assert.match(h.text(),/Sonó: pero/);
 h.click('pero');h.click('Comprobar');assert.match(h.text(),/Práctica con texto/);assert.match(h.text(),/0 de 8 contrastes sin texto/);
 h.click('Intentar de nuevo');assert.doesNotMatch(h.text(),/Sonó:/);h.hear();h.click('pero');h.click('Comprobar');assert.match(h.text(),/Práctica con texto/);
 const old=h.deck().key;h.click('Recargar este audio');assert.notEqual(h.deck().key,old);assert.ok(h.button('Sí, lo escuché').props.disabled);assert.ok(h.button('pero').props.disabled===false,'text accommodation remains usable');
 h.click('Reiniciar lección');h.click('Contrastá');assert.ok(h.button('pero').props.disabled);assert.doesNotMatch(h.text(),/Práctica con texto|Sonó:/);
});

test('articulation contact selection changes diagram evidence and gives specific repair guidance',async()=>{
 const h=await harness();h.click('Colocá y repetí');h.click('Labios');assert.match(h.text(),/Los labios no hacen este contacto/);
 h.click('Detrás de los dientes superiores');assert.match(h.text(),/Punta de la lengua/);
 const svg=find(h.render(),n=>n.type==='svg')[0];assert.equal(svg.props['data-contact'],'ridge');
 const key=h.deck().key;h.click('Palabra 2');assert.notEqual(h.deck().key,key);assert.doesNotMatch(h.text(),/Sonó:/);
 h.hear();assert.match(h.text(),/Sonó: perro/);assert.match(h.text(),/sin apretar/);
});

test('teacher marks require confirmed models and oral completion cannot be claimed silently',async()=>{
 const h=await harness();h.click('Colocá y repetí');assert.ok(h.boxes()[0].props.disabled);
 h.hear();h.boxes()[0].props.onChange({target:{checked:true}});assert.equal(h.boxes()[0].props.checked,true);
 h.click('Frases');assert.ok(h.boxes()[0].props.disabled);h.hear();h.boxes()[0].props.onChange({target:{checked:true}});
 h.click('Reutilizá');for(const box of h.boxes())box.props.onChange({target:{checked:true}});
 assert.doesNotMatch(h.text(),/Recorrido central registrado/);assert.match(h.text(),/Falta evidencia de escucha/);
 h.click('Ayuda oral');assert.match(h.text(),/Quiero el/);h.click('Reiniciar lección');h.click('Reutilizá');assert.equal(h.boxes().filter(b=>b.props.checked).length,0);assert.ok(h.button('Ayuda oral'));
});

test('all core targets and every model/phrase map to the bounded eight-script inventory',async()=>{
 const {mouthClips,wordModels,phraseModels,contrastTrials,noticeTrials,targets}=await load('app/mouth-lab/data.ts');
 assert.deepEqual(Array.from(targets,t=>t.id),['tap','trill']);
 const expected={pero:'pero',perro:'perro',caro:'caro',carro:'carro',rojo:'rojo','phrase-perro':'Mi perro corre.','phrase-carro':'El carro es caro.','phrase-contrast':'Quiero el carro rojo, pero es caro.'};
 assert.deepEqual(Object.fromEntries(Object.entries(mouthClips).map(([id,c])=>[id,c.text])),expected);
 const refs=[...wordModels,...phraseModels,...contrastTrials.map(t=>t.clipId),...noticeTrials.map(t=>t.clipId)];
 for(const [id,clip]of Object.entries(mouthClips)){assert.ok(refs.includes(id));assert.equal(clip.src,`/audio/mouth-lab/${id}.mp3`);}
 assert.equal(contrastTrials.length,8);for(const trial of [...contrastTrials,...noticeTrials]){assert.ok(trial.answer>=0&&trial.answer<trial.options.length);assert.ok(mouthClips[trial.clipId]);}
});

test('complete oral route requires both notice judgments, all contrasts and observed words/phrases; an edited judgment revokes completion',async()=>{
 const h=await harness();
 for(const [index,answer] of ['Un toque breve','Varios contactos'].entries()){
  h.hear();for(const choice of ['Un toque breve','Varios contactos']){h.click(choice);h.click('Comprobar');assert.equal(h.text().includes('Coincide con el audio'),choice===answer);}
  h.click(answer);h.click('Comprobar');if(index===0)h.click('Siguiente modelo');
 }
 h.click('Colocá y repetí');
 for(let i=1;i<=5;i++){h.click(`Palabra ${i}`);h.hear();h.boxes()[0].props.onChange({target:{checked:true}});}
 h.click('Contrastá');
 for(const [index,answer] of ['pero','perro','carro','caro','perro','pero','caro','carro'].entries()){h.hear();h.click(answer);h.click('Comprobar');if(index<7)h.click('Siguiente contraste');}
 h.click('Frases');
 for(let i=1;i<=3;i++){h.click(`Frase ${i}`);h.hear();h.boxes()[0].props.onChange({target:{checked:true}});}
 h.click('Reutilizá');assert.doesNotMatch(h.text(),/Recorrido central registrado/);
 for(const box of h.boxes())box.props.onChange({target:{checked:true}});
 assert.match(h.text(),/Recorrido central registrado/);
 h.click('Contrastá');h.click('caro');h.click('Reutilizá');assert.doesNotMatch(h.text(),/Recorrido central registrado/);
 h.click('Contrastá');h.click('carro');h.click('Comprobar');h.click('Reutilizá');assert.match(h.text(),/Recorrido central registrado/);
 h.click('Colocá y repetí');h.click('Recargar este audio');h.click('Reutilizá');assert.doesNotMatch(h.text(),/Recorrido central registrado/);
});

test('state rejects event bypasses, malformed choices and stale feedback after reloading failed audio',async()=>{
 const {initialMouthAttempt,updateMouthAttempt}=await load('app/mouth-lab/state.ts');
 let a=initialMouthAttempt();for(const action of [{type:'confirm'},{type:'choose',choice:0},{type:'check'},{type:'observe',value:true}])a=updateMouthAttempt(a,action,2);
 assert.equal(a.heard,false);assert.equal(a.choice,null);assert.equal(a.checked,false);assert.equal(a.observed,false);
 a=updateMouthAttempt(a,{type:'ended'},2);a=updateMouthAttempt(a,{type:'confirm'},2);a=updateMouthAttempt(a,{type:'choose',choice:1},2);a=updateMouthAttempt(a,{type:'check'},2);
 for(const choice of [-1,2,NaN,0.5])assert.equal(updateMouthAttempt(a,{type:'choose',choice},2).choice,1);
 a=updateMouthAttempt(a,{type:'reload'},2);assert.equal(a.heard,false);assert.equal(a.ended,false);assert.equal(a.checked,false);
 assert.equal(updateMouthAttempt(a,{type:'check'},2).checked,false);
});

test('navigation separates model, contrast and phrase evidence even when they reuse a recording',async()=>{
 const h=await harness();const first=h.deck().key;h.hear();h.click('Un toque breve');h.click('Comprobar');
 h.click('Colocá y repetí');assert.notEqual(h.deck().key,first);assert.ok(h.button('Sí, lo escuché').props.disabled);assert.ok(h.boxes()[0].props.disabled);
 h.click('Escuchá');assert.match(h.text(),/Sonó: pero/);h.click('Siguiente modelo');assert.doesNotMatch(h.text(),/Sonó:/);
 h.click('Frases');h.click('Texto de apoyo');assert.match(h.text(),/Mi perro corre/);const phraseKey=h.deck().key;
 h.click('Frase 2');assert.notEqual(h.deck().key,phraseKey);assert.doesNotMatch(h.text(),/Mi perro corre|El carro es caro/);assert.ok(h.boxes()[0].props.disabled);
 h.click('Reiniciar lección');assert.notEqual(h.deck().key,first);assert.ok(h.button('Un toque breve').props.disabled);
});

test('visible model text can be hidden and shown after heard words, correct perception and phrase support without changing evidence',async()=>{
 const h=await harness();h.hear();h.click('Un toque breve');h.click('Comprobar');assert.match(h.text(),/Sonó: pero/);
 h.click('Ocultar texto');assert.doesNotMatch(h.text(),/Sonó:/);assert.match(h.text(),/Coincide con el audio/);
 h.click('Mostrar texto');assert.match(h.text(),/Sonó: pero/);assert.doesNotMatch(h.text(),/Se usó texto de apoyo/);
 h.click('Colocá y repetí');h.hear();assert.match(h.text(),/Sonó: pero/);h.click('Ocultar texto');assert.doesNotMatch(h.text(),/Sonó:/);
 h.click('Mostrar texto');assert.match(h.text(),/Sonó: pero/);assert.ok(!h.boxes()[0].props.disabled);
 h.click('Frases');h.hear();h.click('Texto de apoyo');assert.match(h.text(),/Mi perro corre/);
 h.click('Ocultar texto');assert.doesNotMatch(h.text(),/Mi perro corre/);assert.match(h.text(),/Se usó texto de apoyo/);
 h.click('Texto de apoyo');assert.match(h.text(),/Mi perro corre/);assert.ok(!h.boxes()[0].props.disabled);
 h.click('Contrastá');h.hear();h.click('pero');h.click('Comprobar');h.click('Ocultar texto');assert.doesNotMatch(h.text(),/Sonó:/);assert.match(h.text(),/1 de 8 contrastes sin texto/);
 h.click('Mostrar texto');assert.match(h.text(),/Sonó: pero/);assert.match(h.text(),/1 de 8 contrastes sin texto/);
});
