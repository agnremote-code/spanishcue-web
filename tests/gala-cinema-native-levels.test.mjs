import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';
const require=createRequire(import.meta.url),React=require('react'),{renderToString}=require('react-dom/server'),stateHook=React['useState'];
const levels=['A0','A1','A2','B1','B2','C1','C2'];
const routes=[['la-noche-de-las-invitaciones-cruzadas','InvitacionesCruzadasNative',['gala-hero','gala-card-stage','gala-guests','gala-matches','gala-table','gala-goodbye','gala-final']],['el-cine-de-las-tres-funciones','CineTresFuncionesNative',['cinema-hero','poster-stage','schedule-stage','invite-stage','meeting-stage','problem-stage','cinema-final']]];
async function load(source,dir,react=React){
 const result=await build({stdin:{contents:source,resolveDir:process.cwd()+'/app/'+dir,loader:'tsx'},bundle:true,write:false,format:'cjs',platform:'node',jsx:'automatic',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 const loadedModule={exports:{}};
 runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process})(name=>name==='react'?react:require(name),loadedModule,loadedModule.exports);
 return loadedModule.exports;
}
const {hashes}=JSON.parse(await readFile(new URL("./gala-cinema-a1-render.json",import.meta.url),"utf8"));
const normalize=html=>html.replace(/<!--.*?-->/g,'').replace(/\s+/g,' ').trim();
test('gala and cinema retain their original seven stage layouts at every level',async()=>{
 for(const[route,name,stages]of routes){
  const source=await readFile(`app/${route}/page.tsx`,'utf8');
  assert.ok(!source.includes('NativeNarrative'));
  let first=true,activeStage=0;
  const mocked={...React,useState:initial=>{if(first){first=false;return [activeStage,()=>{}];}return stateHook(initial);}};
  const current=(await load(source+`\nexport {${name}};`,route,mocked))[name];
  for(let stage=0;stage<7;stage++){
   activeStage=stage;
   for(const level of levels){
    first=true;const html=renderToString(React.createElement(current,{level}));
    assert.ok(html.includes(stages[stage]),`${route}/${level}/${stage}`);
    assert.ok(!html.includes('nn-native')&&!html.includes('undefined'));
    if(level==='A0'){assert.match(html,/Teacher guide/);assert.match(html,/Model/);assert.match(html,/\//);}
    if(level==='A1'){
     assert.equal(createHash("sha256").update(normalize(html)).digest("hex"),hashes[`${route}/${stage}`],`${route}: authored A1 stage ${stage} remains unchanged`);
    }
   }
  }
 }
});
