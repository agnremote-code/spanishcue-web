import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';

const require = createRequire(import.meta.url), React = require('react');
const {renderToString} = require('react-dom/server');
export async function load(path, runtime = React, overrides = {}, globals = {}) {
  const result = await build({entryPoints:[path], bundle:true, write:false, platform:'node', format:'cjs', external:['react','react-dom','next/*'], loader:{'.css':'empty'}});
  const m = {exports:{}};
  runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`, {console, URL, Headers, process, ...globals})(name => name === 'react' ? runtime : overrides[name] || require(name), m, m.exports);
  return m.exports;
}
export const find = (tree, fn) => !tree || typeof tree !== 'object' ? [] : Array.isArray(tree) ? tree.flatMap(n => find(n, fn)) : [...(fn(tree) ? [tree] : []), ...find(tree.props?.children, fn)];
export const words = tree => typeof tree === 'string' || typeof tree === 'number' ? String(tree) : Array.isArray(tree) ? tree.map(words).join('') : tree?.props ? words(tree.props.children) : '';

test('phonetics can hide decorative bars while the default player remains unchanged', async () => {
  const {default:Deck} = await load('app/listening-studio/AudioDeck.tsx');
  const props = {src:'/audio/example.mp3', title:'Escucha 1', channel:'FONÉTICA'};
  const normal = renderToString(React.createElement(Deck, props));
  const phonetics = renderToString(React.createElement(Deck, {...props, showWaveform:false}));
  assert.match(normal, /audio-wave/);
  assert.doesNotMatch(phonetics, /audio-wave/);
  assert.doesNotMatch(phonetics, /autoplay/i);
});

test('existing free class URLs render a listening experience after the unchanged access guard', async () => {
  const {default:Page} = await load('app/clase/[id]/page.tsx', React, {
    'next/headers':{headers:async () => new Headers()},
    'next/navigation':{notFound:() => {throw Error('not-found');}, redirect:path => {throw Error(`redirect:${path}`);}},
  });
  for (const id of ['201','202']) {
    const html = renderToString(await Page({params:Promise.resolve({id})}));
    assert.match(html, /<audio\b/, id);
    assert.match(html, /Escucha y distingue/, id);
    assert.match(html, /Habla y reutiliza/, id);
  }
  await assert.rejects(Page({params:Promise.resolve({id:'38'})}), /redirect:\/acceso\?returnTo=%2Fclase%2F38/);
  for (const id of ['45','47','999999']) {
    await assert.rejects(Page({params:Promise.resolve({id})}), /not-found/, id);
  }
});

test('the actual Library links both free phonetics lessons to their existing URLs', async () => {
  const result = await build({stdin:{contents:`export {default as Library} from './app/Library'; export {LocaleProvider} from './app/i18n/LocaleProvider'; export {lessons} from './app/lesson-catalog'; export {isFreeLesson} from './app/access-policy';`,resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'cjs',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
  const m={exports:{}};
  const sandbox={console,URL,Headers,Request,Response,AbortController,process,fetch:()=>{throw Error('SSR must not make network requests');}};
  sandbox.global=sandbox;
  runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,sandbox)(require,m,m.exports);
  const {Library,LocaleProvider,lessons,isFreeLesson}=m.exports;
  const records=lessons.filter(l=>[201,202,38].includes(l.id)).map(l=>({...l,free:isFreeLesson(l.id),href:`/clase/${l.id}`}));
  const html=renderToString(React.createElement(LocaleProvider,{initialLocale:'es'},React.createElement(Library,{lessons:records,owner:false,signedIn:false,fullAccess:false})));
  for(const id of [201,202])assert.match(html,new RegExp(`<a[^>]+href="/clase/${id}"`));
  assert.doesNotMatch(html,/<a[^>]+href="\/clase\/38"/,'PRO lesson must retain its locked entry');
});

// These transitions prevent answer leakage, stale feedback and false listening credit.
test('listening attempts require hearing or explicit text accommodation; edit/retry/reset invalidate feedback', async () => {
  const {initialAttempt, updateAttempt} = await load('app/phonetics/state.ts');
  const start=initialAttempt();
  const same=updateAttempt(start,{type:'choose',choice:1},2);
  assert.equal(same.choice,null);
  let a=updateAttempt(start,{type:'heard'},2);
  a=updateAttempt(a,{type:'choose',choice:1},2);
  a=updateAttempt(a,{type:'check'},2);
  assert.equal(a.checked,true);
  a=updateAttempt(a,{type:'choose',choice:0},2);
  assert.equal(a.checked,false);
  assert.equal(a.revealed,false);
  assert.equal(updateAttempt(a,{type:'choose',choice:99},2).choice,0);
  a=updateAttempt(a,{type:'reveal'},2);
  assert.equal(a.assisted,true);
  a=updateAttempt(a,{type:'retry'},2);
  assert.equal(a.choice,null);
  assert.equal(a.revealed,false);
  assert.equal(a.heard,true);
  assert.equal(a.assisted,true,'a known solution cannot become unaided credit');
  assert.deepEqual(JSON.parse(JSON.stringify(initialAttempt())),{heard:false,choice:null,checked:false,revealed:false,assisted:false});
  let guided=updateAttempt(start,{type:'reveal'},2);
  guided=updateAttempt(guided,{type:'choose',choice:0},2);
  guided=updateAttempt(guided,{type:'check'},2);
  assert.equal(guided.checked,true);
  assert.equal(guided.heard,false,'reading support is not a recorded listen');
});

async function lessonHarness(id) {
  const state=[];let slot=0;
  const runtime={...React,useState:initial=>{const i=slot++;if(!(i in state))state[i]=typeof initial==='function'?initial():initial;return[state[i],value=>{state[i]=typeof value==='function'?value(state[i]):value;}];}};
  const {default:Lesson}=await load('app/phonetics/PhoneticsLesson.tsx',runtime);
  const render=()=>{slot=0;return Lesson({lessonId:id});};
  const button=label=>find(render(),n=>n.type==='button'&&words(n)===label)[0];
  const click=label=>{const b=button(label);assert.ok(b,label);assert.ok(!b.props.disabled,`enabled: ${label}`);b.props.onClick();};
  const hear=()=>{const deck=find(render(),n=>typeof n.type==='function'&&typeof n.props.onComplete==='function')[0];assert.ok(deck,'real player completion handler');deck.props.onComplete();};
  return {render,button,click,hear,text:()=>words(render())};
}

test('real vowel controls enforce listen/answer/retry/reveal and isolate all eight trial attempts',async()=>{
  const h=await lessonHarness(201);
  h.click('Escucha y distingue');
  assert.ok(h.button('Comprobar').props.disabled);
  assert.ok(h.button('mesa').props.disabled);
  h.hear();h.click('misa');h.click('Comprobar');
  assert.match(h.text(),/Vuelve a escuchar/);
  assert.doesNotMatch(h.text(),/Sonó: mesa/);
  h.click('mesa');assert.ok(!h.text().includes('Vuelve a escuchar'));
  h.click('Comprobar');assert.match(h.text(),/Sonó: mesa/);
  h.click('Siguiente escucha');assert.ok(h.button('casa').props.disabled);
  assert.doesNotMatch(h.text(),/Sonó: mesa/);
  h.click('Texto de apoyo');assert.match(h.text(),/Con texto visible/);
  assert.match(h.text(),/Sonó: casa/);
  h.click('casa');h.click('Comprobar');
  assert.match(h.text(),/Práctica con apoyo/);
  h.click('Anterior escucha');assert.match(h.text(),/Sonó: mesa/);
  h.click('Reiniciar lección');assert.match(h.text(),/Modelos/);
  h.click('Escucha y distingue');assert.ok(h.button('mesa').props.disabled);
  assert.doesNotMatch(h.text(),/Sonó: mesa/);
});

test('stress task uses neutral syllable choices before the reveal; production needs no written quiz unlock',async()=>{
  const h=await lessonHarness(202);
  h.click('Escucha y distingue');
  assert.doesNotMatch(h.text(),/Sonó: casa/);
  assert.ok(h.button('Sílaba 1').props.disabled);
  assert.equal(find(h.render(),n=>n.props?.className==='ph-stressed').length,0);
  h.hear();h.click('Sílaba 2');h.click('Comprobar');
  assert.doesNotMatch(h.text(),/Sonó: casa/);
  h.click('Sílaba 1');h.click('Comprobar');
  assert.match(h.text(),/Sonó: casa/);
  assert.equal(find(h.render(),n=>n.props?.className==='ph-stressed').length,1);
  h.click('Habla y reutiliza');
  assert.match(h.text(),/Sin mirar/);
  assert.match(h.text(),/No evalúa automáticamente/);
  assert.equal(find(h.render(),n=>n.type==='input'&&n.props.type==='checkbox').length,3);
  h.click('Mostrar frase');assert.match(h.text(),/¿Tomas café\?/);
  h.click('Ocultar frase');assert.doesNotMatch(h.text(),/¿Tomas café\?/);
});

test('all20 trials validate every choice without carrying a previous answer into the next item',async()=>{
 const {phoneticsLessons}=await load('app/phonetics/data.ts');
 for(const id of [201,202]){
  const h=await lessonHarness(id);h.click('Escucha y distingue');
  for(const [n,trial] of phoneticsLessons[id].trials.entries()){
   assert.ok(h.button('Comprobar').props.disabled,trial.id);h.hear();
   for(const [choice,label] of trial.options.entries()){
    h.click(label);h.click('Comprobar');
    assert.equal(h.text().includes('Tu elección coincide con el modelo.'),choice===trial.answer,`${trial.id}:${choice}`);
    assert.equal(h.text().includes('Sonó:'),choice===trial.answer,`${trial.id}:${choice} answer exposure`);
   }
   if(trial.extension){h.click(trial.options[trial.answer]);h.click('Comprobar');assert.doesNotMatch(h.text(),/Repetí la palabra y usala en una frase/);}
   if(n<phoneticsLessons[id].trials.length-1)h.click('Siguiente escucha');
  }
 }
});

test('whole-lesson reset hides oral supports and clears teacher observations; player keys change with context',async()=>{
 const h=await lessonHarness(201);
 const deck=()=>find(h.render(),n=>typeof n.type==='function'&&typeof n.props.src==='string')[0];
 const modelKey=deck().key;h.click('En una palabra');assert.notEqual(deck().key,modelKey);
 h.click('Habla y reutiliza');h.click('Mostrar frase');h.click('Ayuda para empezar');
 const boxes=()=>find(h.render(),n=>n.type==='input'&&n.props.type==='checkbox');
 boxes()[0].props.onChange({target:{checked:true}});assert.equal(boxes()[0].props.checked,true);
 const phraseKey=deck().key;h.click('Frase 2');assert.notEqual(deck().key,phraseKey);assert.doesNotMatch(h.text(),/Mi casa tiene una mesa/);
 h.click('Reiniciar lección');assert.notEqual(deck().key,modelKey);
 h.click('Habla y reutiliza');assert.equal(boxes().filter(b=>b.props.checked).length,0);
 assert.ok(h.button('Mostrar frase'));assert.ok(h.button('Ayuda para empezar'));
});
