import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {build} from 'esbuild';
test('museum has level-aware conversation data',()=>assert.ok(existsSync('app/conversation-families/museum/content.ts')));
if(existsSync('app/conversation-families/museum/content.ts')){
 const r=await build({stdin:{contents:`export * from './app/conversation-families/museum/content';`,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
 const api=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
 test('eight museum rooms differ by level and A0 includes complete speaking pieces',()=>{
  const signatures=[];
  for(const level of ['A0','A1','A2','B1','B2','C1']){
   const rooms=api.museumRooms(level);assert.equal(rooms.length,8);
   signatures.push(JSON.stringify(rooms.map(r=>r.prompt)));
   if(level==='A0')for(const room of rooms){assert.ok(room.promptEn);assert.ok(room.support.frame.en.includes('___'));assert.ok(room.support.choices.every(x=>x.es&&x.en));assert.ok(room.support.tip.en);}
  }
  assert.equal(new Set(signatures).size,6);
 });
}

test('museum A1 models match the eight actual room questions and A0 actions compose correctly',async()=>{
 const r=await build({stdin:{contents:`export * from './app/conversation-families/museum/content';`,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
 const {museumRooms}=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
 const expected=['Es de mi abuela','me gusta la estatua','preguntar primero','Perdón, llego tarde','hablar en privado','compartir un libro','guardar la foto','sala de las fotos'];
 museumRooms('A1').forEach((room,i)=>{assert.ok(room.model.includes(expected[i]),`${room.title}: ${room.model}`);assert.ok(room.tip.length>30);assert.ok(room.followup.length>35);});
 for(const room of museumRooms('A0'))for(const choice of room.support.choices){const en=room.support.frame.en.replace('___',choice.en);assert.match(en,/^I want to /);assert.doesNotMatch(en,/\bto to\b/);assert.match(room.support.frame.es.replace('___',choice.es),/^Yo quiero /);assert.match(room.followup,/Change one piece/);}
});
