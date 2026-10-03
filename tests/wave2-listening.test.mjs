import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';
const require=createRequire(import.meta.url),React=require('react');
const find=(tree,fn)=>!tree||typeof tree!=='object'?[]:Array.isArray(tree)?tree.flatMap(n=>find(n,fn)):[...(fn(tree)?[tree]:[]),...find(tree.props?.children,fn)];
const words=t=>typeof t==='string'||typeof t==='number'?String(t):Array.isArray(t)?t.map(words).join(''):t?.props?words(t.props.children):'';
async function load(path,runtime=React){const result=await build({entryPoints:[path],bundle:true,write:false,platform:'node',format:'cjs',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});const m={exports:{}};runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,process})(n=>n==='react'?runtime:require(n),m,m.exports);return m.exports;}
async function harness(route){const state=[];let slot=0;const runtime={...React,useState:init=>{const i=slot++;if(!(i in state))state[i]=typeof init==='function'?init():init;return[state[i],v=>state[i]=typeof v==='function'?v(state[i]):v];}};const {default:Page}=await load(`app/${route}/page.tsx`,runtime);const render=()=>{slot=0;return Page();};const button=label=>find(render(),n=>n.type==='button'&&words(n)===label)[0];return {render,button,text:()=>words(render()),click:label=>{const b=button(label);assert.ok(b,`button ${label}`);assert.ok(!b.props.disabled,`enabled ${label}`);b.props.onClick();},hear:()=>{const d=find(render(),n=>typeof n.type==='function'&&n.props.onComplete)[0];assert.ok(d);d.props.onComplete();},decks:()=>find(render(),n=>typeof n.type==='function'&&n.props.src)};}
const json=route=>JSON.parse(readFileSync(`app/${route}/content.json`));

test('131 navigation hides transcript and reset exists',async()=>{const h=await harness('ultima-llamada');h.click('PROFESOR · VER TRANSCRIPCIÓN');h.click('SIGUIENTE SEÑAL →');assert.doesNotMatch(h.text(),/Che, sigo en camino/);assert.ok(h.button('REINICIAR LECCIÓN'));});
test('133 independent reconstruction does not expose a solved numerical timeline',async()=>{const h=await harness('habitacion-508');h.click('RESPUESTA 8 MIN');assert.doesNotMatch(h.text(),/20:37 · Problema de agua/);assert.ok(h.button('REINICIAR LECCIÓN'));});
test('both complete banks contain source-backed evidence and no fabricated event minutes',()=>{const a=json('ultima-llamada'),b=json('habitacion-508');assert.equal(a.signals.length,6);assert.equal(b.testimonies.length,6);for(const item of a.signals){assert.ok(item.fact,item.id);assert.ok(item.evidence,item.id);}for(const item of b.testimonies){assert.ok(item.claims?.length===3,item.id);assert.equal(item.events,undefined);assert.equal(item.time,undefined);}assert.ok(b.chronology?.constraints.length);});

test('13 recordings retain source mapping, one approved tú regeneration, and reviewed neutral prompts',()=>{
 for(const route of ['ultima-llamada','habitacion-508']){
  const original=JSON.parse(execFileSync('git',['show',`e8f38659588526253c51f638b39e337682729363:app/${route}/content.json`],{encoding:'utf8'}));
  const current=json(route),key=route==='ultima-llamada'?'signals':'testimonies';
  const projection=d=>[...d[key],...(d.resolution?[d.resolution]:[])].map(i=>({id:i.id??'resolution',file:i.file,segments:i.segments}));
  if(route==='ultima-llamada')original.signals.find(i=>i.id==='conductor').segments[0].text=original.signals.find(i=>i.id==='conductor').segments[0].text.replace('mandame un mensaje','mándame un mensaje');
  assert.deepEqual(projection(current),projection(original));
  const reviewed=JSON.parse(readFileSync('tests/fixtures/neutral-audio-reviewed.json','utf8')).listeningPrompts[route];
  assert.deepEqual(current.finalQuestions,reviewed.finalQuestions);assert.deepEqual(current.supports,reviewed.supports);
  for(const item of projection(current))assert.ok(readFileSync(`public${item.file}`).length>0);
 }
});
test('all evidence quotes and answer domains resolve against their exact source scripts',()=>{
 const a=json('ultima-llamada'),b=json('habitacion-508');
 const ids=new Set();
 for(const item of a.signals){assert.ok(!ids.has(item.id));ids.add(item.id);assert.ok(item.options[item.answer]);assert.equal(new Set(item.options).size,item.options.length);assert.ok(item.segments.map(s=>s.text).join(' ').includes(item.evidence),item.id);}
 for(const item of b.testimonies){const script=item.segments.map(s=>s.text).join(' ');for(const claim of item.claims){assert.ok(!ids.has(claim.id));ids.add(claim.id);assert.ok(['declarado','hipotesis','no-respaldado'].includes(claim.answer));assert.ok(script.includes(claim.evidence),claim.id);}}
 for(const check of b.resolution.checks){assert.equal(typeof check.answer,'boolean');assert.ok(b.resolution.segments[0].text.includes(check.evidence),check.id);}
 for(const edge of b.chronology.constraints){const source=b.testimonies.find(t=>t.id===edge.source);assert.ok(source,edge.source);assert.ok(source.segments[0].text.includes(edge.evidence),JSON.stringify(edge));}
 assert.equal(new Set(b.chronology.events.map(e=>e.id)).size,8);
 for(const event of b.chronology.events)assert.ok(b.testimonies.some(t=>t.id===event.source));
 assert.equal(a.mission.answer,undefined,'justified conditional plans have no single correct index');
 assert.equal(new Set(a.mission.options.map(o=>o.id)).size,3);
 assert.deepEqual(a.signals.map(s=>s.answer),[0,1,1,1,0,1]);
 assert.deepEqual(b.testimonies.map(t=>t.claims.map(c=>c.answer)),[['declarado','no-respaldado','declarado'],['no-respaldado','declarado','declarado'],['hipotesis','declarado','no-respaldado'],['no-respaldado','hipotesis','declarado'],['no-respaldado','hipotesis','declarado'],['no-respaldado','declarado','declarado']]);
});
test('131 every factual choice checks independently; wrong attempts allow retry and do not disclose the fact',async()=>{
 const h=await harness('ultima-llamada');
 for(const [index,item] of json('ultima-llamada').signals.entries()){
  assert.equal(h.button('SEGUNDA ESCUCHA · BUSCAR EL DATO'),undefined);h.hear();h.click('SEGUNDA ESCUCHA · BUSCAR EL DATO');
  assert.ok(h.button('COMPROBAR').props.disabled);
  for(const [choice,label] of item.options.entries()){
   h.click('REINTENTAR');h.click(label);h.click('COMPROBAR');
   assert.equal(h.text().includes('El dato coincide con la señal.'),choice===item.answer,item.id);
   assert.equal(h.text().includes(item.fact),choice===item.answer,`${item.id} no wrong-answer key leak`);
  }
  h.click(item.options[item.answer]);assert.doesNotMatch(h.text(),/El dato coincide con la señal/);h.click('COMPROBAR');h.click('GUARDAR DATO EN EL PLAN');
  if(index<5)h.click('SIGUIENTE SEÑAL →');
 }
 h.click('TOMAR LA DECISIÓN →');
 for(const s of json('ultima-llamada').signals)assert.ok(h.text().includes(s.fact),s.id);
 for(const option of json('ultima-llamada').mission.options){h.click(option.text);assert.ok(h.text().includes(option.feedback));assert.doesNotMatch(h.text(),/Ese plan pone el embarque en riesgo|respuesta incorrecta/);}
 h.click('CONVERSACIÓN FINAL →');assert.match(h.text(),/dos datos/);assert.match(h.text(),/Diego/);assert.match(h.text(),/Tu decisión:/);
 const observed=find(h.render(),n=>n.type==='input'&&n.props.type==='checkbox')[0];observed.props.onChange({target:{checked:true}});h.click('REINICIAR LECCIÓN');assert.match(h.text(),/0\/6 respuestas comprobadas/);h.click('2 ÚLTIMA LLAMADA 10 MIN');assert.match(h.text(),/Todavía no guardaste datos/);
});
test('131 text accommodation is local, truthful, hideable and preserved as assistance on retry; reset remounts player',async()=>{
 const h=await harness('ultima-llamada'),key=h.decks()[0].key;
 h.click('PROFESOR · VER TRANSCRIPCIÓN');assert.match(h.text(),/NO CUENTA COMO AUDIO ESCUCHADO/);assert.match(h.decks()[0].props.playingMessage,/visible/);
 h.click('SEGUNDA ESCUCHA · BUSCAR EL DATO');h.click('REVELAR DATO');h.click('REINTENTAR');h.click(json('ultima-llamada').signals[0].options[0]);h.click('COMPROBAR');assert.match(h.text(),/Práctica con apoyo utilizado/);
 h.click('SIGUIENTE SEÑAL →');assert.doesNotMatch(h.text(),/Che, sigo en camino/);assert.equal(h.button('SEGUNDA ESCUCHA · BUSCAR EL DATO'),undefined);
 h.click('← SEÑAL ANTERIOR');assert.ok(h.button('PROFESOR · VER TRANSCRIPCIÓN'));h.click('REINICIAR LECCIÓN');assert.notEqual(h.decks()[0].key,key);assert.equal(h.button('SEGUNDA ESCUCHA · BUSCAR EL DATO'),undefined);
});
const claimField=(h,id)=>find(h.render(),n=>n.type==='fieldset'&&n.props['data-claim']===id)[0];
const chooseClaim=(h,id,label)=>{const button=find(claimField(h,id),n=>n.type==='button'&&words(n)===label)[0];assert.ok(button,`${id}:${label}`);button.props.onClick();};
const claimLabels={'declarado':'Lo declara','hipotesis':'Lo plantea como hipótesis','no-respaldado':'No lo respalda'};
test('133 all18 claims validate all54 choices with per-witness retry and hidden evidence',async()=>{
 const h=await harness('habitacion-508');
 for(const [index,item] of json('habitacion-508').testimonies.entries()){
  assert.equal(h.button('SEGUNDA ESCUCHA · CONTRASTAR'),undefined);h.hear();h.click('SEGUNDA ESCUCHA · CONTRASTAR');assert.ok(h.button('COMPROBAR AFIRMACIONES').props.disabled);
  for(const claim of item.claims)chooseClaim(h,claim.id,claimLabels[claim.answer]);
  for(const claim of item.claims)for(const [choice,label] of Object.entries(claimLabels)){
   chooseClaim(h,claim.id,label);h.click('COMPROBAR AFIRMACIONES');const text=words(claimField(h,claim.id));
   assert.equal(text.includes('Clasificación respaldada.'),choice===claim.answer,`${claim.id}:${choice}`);
   assert.equal(text.includes(`«${claim.evidence}»`),choice===claim.answer,`${claim.id} evidence timing`);
  }
  h.click('REINTENTAR');assert.ok(h.button('COMPROBAR AFIRMACIONES').props.disabled);h.click('REVELAR EVIDENCIAS');assert.match(h.text(),/Apoyo de texto utilizado/);h.click('OCULTAR EVIDENCIAS');
  if(index<5)h.click('SIGUIENTE TESTIMONIO →');
 }
});
function* permutations(xs){if(!xs.length){yield [];return;}for(let i=0;i<xs.length;i++)for(const rest of permutations(xs.filter((_,j)=>j!==i)))yield [xs[i],...rest];}
test('133 partial chronology accepts all supported orders and rejects missing, repeated, unknown or reversed evidence',async()=>{
 const {checkReconstruction,moveEvent}=await load('app/habitacion-508/reconstruction.ts');
 const ids=['agua','cambio','torta','entrada','envio','llave','reparacion','llamada'];
 // Independent source-derived relations: no constraint between cake delivery and housekeeping/key repair.
 const edges=[['agua','cambio'],['cambio','torta'],['cambio','entrada'],['torta','envio'],['entrada','llave'],['llave','reparacion'],['reparacion','llamada']];
 let valid=0,total=0;for(const order of permutations(ids)){const expected=edges.every(([a,b])=>order.indexOf(a)<order.indexOf(b));assert.equal(checkReconstruction(order).valid,expected,order.join(','));valid+=Number(expected);total++;}
 assert.equal(total,40320);assert.ok(valid>1);
 for(const invalid of [[],ids.slice(1),[...ids.slice(1),'cambio'],[...ids.slice(1),'unknown']])assert.equal(checkReconstruction(invalid).valid,false);
 const original=[...ids];assert.deepEqual(Array.from(moveEvent(ids,0,1)),['cambio','agua',...ids.slice(2)]);assert.deepEqual(ids,original);assert.deepEqual(Array.from(moveEvent(ids,0,-1)),original);
});
async function readyHotel(h){for(let i=0;i<6;i++){h.hear();h.click(i===5?'RESPONDER COMO GERENTE →':'SIGUIENTE TESTIMONIO →');}}
test('133 actual reconstruction handlers clear verification when moved and disclose relations deliberately',async()=>{
 const h=await harness('habitacion-508');await readyHotel(h);assert.doesNotMatch(h.text(),/No hay una hora confirmada para el envío/);h.click('COMPROBAR RELACIONES');assert.match(h.text(),/Hay una relación por revisar/);
 const button=find(h.render(),n=>n.type==='button'&&n.props['aria-label']?.startsWith('Mover después:'))[0];button.props.onClick();assert.doesNotMatch(h.text(),/Hay una relación por revisar/);
 h.click('REVELAR RELACIONES DOCUMENTADAS');assert.match(h.text(),/No hay una hora confirmada para el envío/);h.click('OCULTAR RELACIONES');assert.doesNotMatch(h.text(),/No hay una hora confirmada para el envío/);
 h.click('REINICIAR LECCIÓN');h.click('RESPUESTA 8 MIN');assert.equal(h.button('COMPROBAR RELACIONES'),undefined);
});
test('133 resolution audio, all three reply checks, text support and final production work without claiming an oral score',async()=>{
 const h=await harness('habitacion-508');await readyHotel(h);assert.equal(h.decks().length,0);
 const proposal=find(h.render(),n=>n.type==='input'&&n.props.type==='checkbox')[0];proposal.props.onChange({target:{checked:true}});const key=h.decks()[0].key;
 assert.equal(find(h.render(),n=>n.props?.['data-reply']).length,0);h.click('VER TRANSCRIPCIÓN DE RESPUESTA · APOYO');assert.match(h.text(),/Laura, no hubo una sola causa/);assert.match(h.decks()[0].props.playingMessage,/visible/);h.click('OCULTAR TRANSCRIPCIÓN DE RESPUESTA');assert.doesNotMatch(h.text(),/Laura, no hubo una sola causa/);
 const field=id=>find(h.render(),n=>n.props?.['data-reply']===id)[0];
 const choose=(id,value)=>find(field(id),n=>n.type==='button'&&words(n)===(value?'Sí, lo anuncia':'No, no lo anuncia'))[0].props.onClick();
 for(const check of json('habitacion-508').resolution.checks)choose(check.id,check.answer);
 for(const check of json('habitacion-508').resolution.checks)for(const value of [true,false]){choose(check.id,value);h.click('COMPROBAR RESPUESTA');assert.equal(words(field(check.id)).includes('Coincide.'),value===check.answer);}
 h.click('COMPARAR Y CONVERSAR →');assert.match(h.text(),/dos voces del caso/);assert.match(h.text(),/una hipótesis/);assert.match(h.text(),/Confirmación manual/);h.click('REINICIAR LECCIÓN');await readyHotel(h);assert.equal(h.decks().length,0);find(h.render(),n=>n.type==='input'&&n.props.type==='checkbox')[0].props.onChange({target:{checked:true}});assert.notEqual(h.decks()[0].key,key);assert.equal(find(h.render(),n=>n.props?.['data-reply']).length,0);
});
test('both real pages SSR with hidden transcripts, no decorative waveforms, native audio and preserved routes',async()=>{
 const {renderToString}=require('react-dom/server');
 for(const route of ['ultima-llamada','habitacion-508']){const {default:Page}=await load(`app/${route}/page.tsx`);const html=renderToString(React.createElement(Page));assert.match(html,/<audio\b/);assert.doesNotMatch(html,/audio-wave/);assert.doesNotMatch(html,/autoplay/i);assert.match(html,/REINICIAR LECCIÓN/);assert.match(readFileSync(`app/${route}/style.css`,'utf8'),/prefers-reduced-motion/);}
 const catalog=readFileSync('app/lesson-catalog.ts','utf8');assert.match(catalog,/id:131,level:"A2"[^\n]+path:"\/ultima-llamada"/);assert.match(catalog,/id:133,level:"B2"[^\n]+path:"\/habitacion-508"/);
});

test('133 transcript navigation keeps support isolated and retry cannot erase prior assistance',async()=>{
 const h=await harness('habitacion-508');h.click('PROFESOR · VER TRANSCRIPCIÓN');h.click('SEGUNDA ESCUCHA · CONTRASTAR');h.click('REINTENTAR');assert.match(h.text(),/Apoyo de texto utilizado/);h.click('SIGUIENTE TESTIMONIO →');assert.doesNotMatch(h.text(),/Yo hice el cambio, bueno/);assert.equal(h.button('SEGUNDA ESCUCHA · CONTRASTAR'),undefined);h.click('← ANTERIOR');assert.ok(h.button('PROFESOR · VER TRANSCRIPCIÓN'));assert.match(h.text(),/Apoyo de texto utilizado/);h.click('REINICIAR LECCIÓN');assert.doesNotMatch(h.text(),/Apoyo de texto utilizado/);
});
test('133 rendered arrows can reach a valid alternative sequence and source reveal is never automatic',async()=>{
 const h=await harness('habitacion-508');await readyHotel(h);
 const target=['agua','cambio','torta','entrada','llave','reparacion','envio','llamada'];
 const data=json('habitacion-508'),current=[...data.chronology.initial];
 for(let destination=0;destination<target.length;destination++){
  let index=current.indexOf(target[destination]);
  while(index>destination){const text=data.chronology.events.find(e=>e.id===target[destination]).text;const b=find(h.render(),n=>n.type==='button'&&n.props['aria-label']===`Mover antes: ${text}`)[0];assert.ok(b&&!b.props.disabled);b.props.onClick();[current[index-1],current[index]]=[current[index],current[index-1]];index--;}
 }
 h.click('COMPROBAR RELACIONES');assert.match(h.text(),/Tu orden respeta las relaciones documentadas/);assert.doesNotMatch(h.text(),/No hay una hora confirmada para el envío/);
});

test('131 camino keeps the seven-minute estimate at the speakers position, separate from the mission assumption',()=>{
 const data=json('ultima-llamada'),camino=data.signals.find(signal=>signal.id==='camino');
 assert.match(camino.fact,/Desde donde hablan los pasajeros hasta las puertas C: unos siete minutos/);
 assert.match(camino.evidence,/Desde aquí son unos siete minutos/);
 assert.match(data.mission.prompt,/Para esta situación, toma unos siete minutos de caminata desde allí hasta C4/);
});
