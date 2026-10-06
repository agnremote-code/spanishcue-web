import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {build} from 'esbuild';
const built=await build({stdin:{contents:"export * from './app/autoestudio/audio-access';",resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const access=await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'));
const records=JSON.parse(readFileSync('app/autoestudio/audio-access.json','utf8'));
const path=key=>`/audio/autoestudio/${key}.mp3`;
test('audio access inventory is generated from the current moduleClips, never a second authored list',()=>{
 assert.deepEqual(records,JSON.parse(execFileSync('node',['scripts/export-autoestudio-audio.mjs','--access'],{encoding:'utf8'})));
});
test('free clips are public; assigned passes allow only matching level audio',()=>{
 for(const [key,record] of Object.entries(records)){
  assert.equal(access.isFreeAutoestudioAudio(path(key)),record.free);
  assert.equal(access.shareAllowsAudio(path(key),null),false);
  for(const level of ['a1','a2','b1','b2','c1','c2'])assert.equal(access.shareAllowsAudio(path(key),{level}),record.levels.includes(level));
 }
});
test('unknown keys, forged paths, other lessons and malformed filenames stay closed',()=>{
 for(const url of ['/audio/autoestudio/unknown.mp3','/audio/habitacion-508/test.mp3','/audio/autoestudio/../test.mp3','/audio/autoestudio/__proto__.mp3']){
  assert.equal(access.isFreeAutoestudioAudio(url),false);assert.equal(access.shareAllowsAudio(url,{level:'b1'}),false);
 }
});
