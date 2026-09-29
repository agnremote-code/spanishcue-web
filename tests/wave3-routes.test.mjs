import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';

const require = createRequire(import.meta.url), React = require('react');
const {renderToString} = require('react-dom/server');
async function load(entry, overrides = {}) {
  const built = await build({...(entry.includes('\n') ? {stdin:{contents:entry,resolveDir:process.cwd()}} : {entryPoints:[entry]}),bundle:true,write:false,platform:'node',format:'cjs',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
  const m={exports:{}};
  const sandbox={console,URL,Headers,Request,Response,AbortController,process,fetch:()=>{throw Error('SSR must not request network');}};
  sandbox.global=sandbox;
  runInNewContext(`(function(require,module,exports){${built.outputFiles[0].text}\n})`,sandbox)(name=>overrides[name]||require(name),m,m.exports);
  return m.exports;
}
const navigation = {'next/navigation':{redirect:path=>{throw Error(`redirect:${path}`);},notFound:()=>{throw Error('not-found');}}};
const headerMock = h => ({...navigation,'next/headers':{headers:async()=>new Headers(h)}});

test('static Mouth Lab retains PRO denial for anonymous/free requests and allows verified PRO/owner headers',async()=>{
  for(const h of [{},{'x-chespanish-user-uid':'test-free'},{'x-chespanish-access-level':'free'}]){
    const {default:Page}=await load('app/clase/38/page.tsx',headerMock(h));
    await assert.rejects(Page(),/redirect:\/acceso\?returnTo=%2Fclase%2F38/);
  }
  for(const h of [{'x-chespanish-access-level':'full'},{'x-chespanish-owner':'1'}]){
    const {default:Page}=await load('app/clase/38/page.tsx',headerMock(h));
    const html=renderToString(await Page());
    assert.match(html,/Spanish Mouth Lab/);
    assert.match(html,/<audio\b/);
    assert.doesNotMatch(html,/audio-wave/);
  }
});

test('Mouth Lab keeps the exact dynamic-page metadata contract for both locales',async()=>{
  for(const locale of ['es','en']){
    const mocks=headerMock({'x-spanishcue-locale':locale});
    const original=await load('app/clase/[id]/page.tsx',mocks);
    const repaired=await load('app/clase/38/page.tsx',mocks);
    const expected=await original.generateMetadata({params:Promise.resolve({id:'38'})});
    const actual=await repaired.generateMetadata();
    assert.deepEqual(JSON.parse(JSON.stringify(actual)),JSON.parse(JSON.stringify(expected)));
    assert.equal(actual.robots.index,false);
  }
});

test('the surfaced Library points open ID38 to the canonical experience and keeps locked access',async()=>{
  const {Library,LocaleProvider,lessons,isFreeLesson}=await load("export {default as Library} from './app/Library';\nexport {LocaleProvider} from './app/i18n/LocaleProvider'; export {lessons} from './app/lesson-catalog'; export {isFreeLesson} from './app/access-policy';");
  const records=lessons.filter(x=>[38,201,202].includes(x.id)).map(x=>({...x,free:isFreeLesson(x.id),href:`/clase/${x.id}`}));
  for(const allowed of [false,true]){
    const html=renderToString(React.createElement(LocaleProvider,{initialLocale:'es'},React.createElement(Library,{lessons:records,owner:false,signedIn:allowed,fullAccess:allowed})));
    assert.equal(/<a[^>]+href="\/clase\/38"/.test(html),allowed);
    if(!allowed)assert.match(html,/href="\/acceso\?returnTo=%2Fclase%2F38"/);
    for(const id of [201,202])assert.match(html,new RegExp(`<a[^>]+href="/clase/${id}"`));
    assert.doesNotMatch(html,/otros seis idiomas/);
  }
});

test('four original IDs, CEFR contracts, categories, canonical URLs and PRO status are unchanged',async()=>{
  const c=await load("export {lessons} from './app/lesson-catalog';\nexport {isFreeLesson,lessonAtPath,freeAudioPrefixes} from './app/access-policy';");
  for(const [id,title,level,category,path] of [[213,'Antes, después, cuando','A2','Gramática','/antes-despues-cuando'],[217,'Pero hay un matiz','B1','Gramática','/pero-hay-un-matiz'],[218,'La persona que tengo en mente','B1','Gramática','/la-persona-que-tengo-en-mente'],[38,'Spanish Mouth Lab','A1','Fonética','/clase/38']]){
    const lesson=c.lessons.find(x=>x.id===id);
    assert.deepEqual([lesson.title,lesson.level,lesson.category],[title,level,category]);
    assert.equal(c.lessonAtPath(path,c.lessons)?.id,id);
    assert.equal(c.isFreeLesson(id),false);
  }
  const mouth=c.lessons.find(x=>x.id===38);
  assert.deepEqual(Array.from(mouth.levels),['A1','A2','B1','B2','C1']);
  assert.equal(mouth.displayLevel,'A1–C1');
  assert.equal(c.freeAudioPrefixes.has('mouth-lab'),false);
});
