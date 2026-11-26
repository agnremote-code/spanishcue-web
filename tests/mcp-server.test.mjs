import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {build} from 'esbuild';

const r=await build({stdin:{contents:'export * from "./worker/mcp.ts";',resolveDir:process.cwd(),loader:'ts'},bundle:true,write:false,format:'esm',platform:'node',loader:{'.css':'empty'}});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));

const rpc=async(body)=>{
 const res=await m.handleMcp(new Request('https://spanishcue.com/mcp',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)}));
 return res.status===202?null:res.json();
};
const call=async(name,args)=>(await rpc({jsonrpc:'2.0',id:1,method:'tools/call',params:{name,arguments:args}})).result;

test('initialize, tools/list and notifications follow the MCP protocol',async()=>{
 const init=await rpc({jsonrpc:'2.0',id:1,method:'initialize',params:{protocolVersion:'2025-06-18'}});
 assert.equal(init.result.protocolVersion,'2025-06-18');
 assert.equal(init.result.serverInfo.name,'spanishcue');
 assert.ok(init.result.capabilities.tools);
 assert.equal(await rpc({jsonrpc:'2.0',method:'notifications/initialized'}),null);
 const list=await rpc({jsonrpc:'2.0',id:2,method:'tools/list'});
 assert.ok(list.result.tools.length>=8);
 for(const t of list.result.tools){
  assert.match(t.name,/^[a-z_]+$/);
  assert.ok(t.description.length>40,t.name);
  assert.equal(t.annotations.readOnlyHint,true);
  assert.equal(t.inputSchema.type,'object');
 }
 const bad=await rpc({jsonrpc:'2.0',id:3,method:'nope'});
 assert.equal(bad.error.code,-32601);
});

test('every tool answers with a spanishcue.com link',async()=>{
 const cases=[
  ['buscar_material_ele',{consulta:'subjuntivo'}],
  ['conjugar_verbo',{verbo:'tener'}],
  ['conjugar_verbo',{verbo:'oir',tiempo:'indefinido'}],
  ['verbos_irregulares',{tiempo:'indefinido'}],
  ['verbos_irregulares',{tiempo:'participios'}],
  ['resolver_duda_gramatical',{tema:'por-o-para',consulta:'causa'}],
  ['resolver_duda_gramatical',{tema:'ser-o-estar',consulta:'listo'}],
  ['resolver_duda_gramatical',{tema:'indefinido-o-imperfecto',consulta:'de repente'}],
  ['resolver_duda_gramatical',{tema:'indicativo-o-subjuntivo',consulta:'ojalá'}],
  ['resolver_duda_gramatical',{tema:'verbos-con-preposicion',consulta:'soñar'}],
  ['resolver_duda_gramatical',{tema:'gustar'}],
  ['ejercicio_con_soluciones',{tema:'subjuntivo'}],
  ['preguntas_de_conversacion',{nivel:'A2'}],
  ['guia_para_profesores',{tema:'primera clase'}],
  ['fichas_gratis',{nivel:'B1'}],
 ];
 for(const [name,args] of cases){
  const out=await call(name,args);
  assert.equal(out.isError,false,`${name} ${JSON.stringify(args)}: ${out.content[0].text.slice(0,200)}`);
  assert.match(out.content[0].text,/https:\/\/spanishcue\.com\//,name);
 }
 const tener=(await call('conjugar_verbo',{verbo:'tener'})).content[0].text;
 assert.match(tener,/tuve/);assert.match(tener,/tenga/);
 const causa=(await call('resolver_duda_gramatical',{tema:'por-o-para',consulta:'causa'})).content[0].text;
 assert.match(causa,/«por»/);
 const missing=await call('conjugar_verbo',{verbo:'xyzzar'});
 assert.equal(missing.isError,true);
});

test('only free material: no PRO lesson pages, accounts or private paths',async()=>{
 const texts=[];
 for(const t of m.mcpToolList()){
  const out=await call(t.name,t.name==='preguntas_de_conversacion'?{nivel:'B1'}:t.name==='resolver_duda_gramatical'?{tema:'ser-o-estar'}:{consulta:'clase',verbo:'ser',tiempo:'presente',tema:''});
  texts.push(out.content[0].text);
 }
 const all=texts.join('\n');
 assert.doesNotMatch(all,/\/(cuenta|admin|api|s)\//);
 assert.doesNotMatch(all,/@|token|secret/i);
 const src=readFileSync('worker/mcp.ts','utf8');
 assert.doesNotMatch(src,/from "\.\.\/db|firebase|lesson-catalog|process\.env/,'no data source beyond public page modules');
});

test('server card and server.json describe the same remote',()=>{
 const card=m.serverCard();
 const file=JSON.parse(readFileSync('server.json','utf8'));
 assert.equal(file.name,card.name);
 assert.equal(file.name,'com.spanishcue/spanishcue');
 assert.equal(file.remotes[0].url,'https://spanishcue.com/mcp');
 assert.equal(file.repository.url,'https://github.com/agnremote-code/spanishcue-web');
 assert.ok(file.description.length<=100);
 const index=readFileSync('worker/index.ts','utf8');
 assert.match(index,/import\("\.\/mcp"\)/,'mcp module loads lazily');
 assert.match(index,/mcp-registry-auth/);
});
