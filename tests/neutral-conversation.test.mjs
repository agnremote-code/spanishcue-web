import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {scanSource} from '../scripts/neutral-spanish.mjs';
const dirs='conversation-worlds conversation-families basic-conversation advanced-conversation a1-conversation choose-conversation boards play-mode noche-abierta modo-play-y-ahora-que modo-play-uno-o-el-otro red-flag-o-no red-flag-o-no-a2 red-flag-o-no-b1 red-flag-o-no-b2 la-maquina-que-elimina-cosas la-maquina-que-elimina-cosas-a2 tu-vida-con-una-regla-absurda tu-vida-con-una-regla-absurda-a2 preguntas-prohibidas preguntas-prohibidas-a2 la-isla-vota la-vida-despues-de-los-30 estados-unidos-a2-b1 estados-unidos-basico estados-unidos-en-contraste mexico israel-en-capas irlanda-en-relieve reino-unido-en-relieve suiza-en-relieve australia-en-movimiento indonesia-fantastica mundo-fantastico ciudad-en-juego life-roulette future-city'.split(' ');
const registry=JSON.parse(readFileSync('docs/audits/neutral-spanish-20261003/conversation-exemptions.json','utf8'));
const read=path=>readFileSync(path,'utf8');
test('ordinary conversation, country and play copy uses neutral Spanish across TS and MJS',()=>{
 const findings=[];
 const walk=dir=>{for(const e of readdirSync(dir,{withFileTypes:true})){const path=`${dir}/${e.name}`;if(e.isDirectory())walk(path);else if(/\.(?:tsx?|mjs)$/.test(path))findings.push(...scanSource(read(path),path,registry));}};
 dirs.forEach(dir=>walk(`app/${dir}`));
 assert.deepEqual(findings,[],findings.map(f=>`${f.path}:${f.line} ${f.token}: ${f.text}`).join('\n'));
});
test('narrative preterites and Argentine vocabulary retain their meaning',()=>{
 assert.match(read('app/modo-play-y-ahora-que/data.ts'),/Sé que ya te lo pedí la semana pasada/);
 for(const path of ['app/noche-abierta/content.mjs',...['a1','a2','b2','c1','c2'].map(l=>`app/noche-abierta/levels/${l}.mjs`)])assert.match(read(path),/Hoy decidí irme/);
 assert.match(read('app/conversation-worlds/data-c1.ts'),/Confundí estar disponible/);
 assert.match(read('app/choose-conversation/c2-data.ts'),/preferí callarme/);
 const slang=read('app/life-roulette/data.ts');
 for(const word of ['quilombo','laburo','copado','Dale, vamos.'])assert.ok(slang.includes(word),word);
});
test('tú case and stem-changing commands are grammatical',()=>{
 const prompts=read('app/choose-conversation/c1-data.ts');
 assert.match(prompts,/sobre ti mismo/);assert.match(prompts,/contigo/);
 assert.doesNotMatch(prompts,/\b(?:para|sobre|con|de) tú\b/);
 assert.match(read('app/noche-abierta/levels/a2.mjs'),/Cuéntale/);
 assert.match(read('app/ciudad-en-juego/page.tsx'),/defiéndelo/);
});

test('attached plural pronouns preserve tú stems and written accents',()=>{
 const expected={
  'app/estados-unidos-a2-b1/page.tsx':'Tócalas',
  'app/future-city/data.ts':'defiéndelas',
  'app/modo-play-uno-o-el-otro/choices.ts':'Justifícalo',
  'app/noche-abierta/levels/b2.mjs':'respóndelas',
  'app/noche-abierta/levels/c1.mjs':'Reescríbelos',
  'app/suiza-en-relieve/data.ts':'Compáralas',
 };
 for(const [path,word] of Object.entries(expected))assert.ok(read(path).includes(word),`${path}: ${word}`);
});

test('reviewed stem changes and accent placement remain grammatical',()=>{
 const expected={
  'app/red-flag-o-no/a1.mjs':'comprueba',
  'app/modo-play-y-ahora-que/data.ts':'compruebas',
  'app/noche-abierta/content.mjs':'confiesas',
  'app/red-flag-o-no/c1.mjs':'sepáralo',
  'app/noche-abierta/levels/b2.mjs':'Evalúa',
  'app/noche-abierta/levels/c2.mjs':'insinúas',
 };
 for(const [path,word] of Object.entries(expected)){
  const source=read(path);
  assert.ok(source.toLocaleLowerCase('es').includes(word.toLocaleLowerCase('es')),`${path}: ${word}`);
  assert.doesNotMatch(source,/(?<![\p{L}\p{M}])(?:comproba|comprobas|confesas|sépáralo|evalua|insinuas)(?![\p{L}\p{M}])/iu,path);
 }
});
