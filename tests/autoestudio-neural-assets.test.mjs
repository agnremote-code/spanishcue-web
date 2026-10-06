import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { build } from 'esbuild';
const built=await build({stdin:{contents:"export {modulesByLevel} from './app/autoestudio/curriculum/course';export {moduleClips} from './app/autoestudio/curriculum/audio-clips';",resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const {modulesByLevel,moduleClips}=await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'));
const manifest=JSON.parse(readFileSync('app/autoestudio/audio-manifest.json','utf8'));
test('manifest covers every required clip in every published module',()=>{
 assert.ok(Object.keys(manifest.clips).length>0,'Autoestudio manifest is empty');
 const required=new Set(Object.values(modulesByLevel).flat().flatMap(moduleClips).map(c=>c.key));
 assert.deepEqual(new Set(Object.keys(manifest.clips)),required);
 for(const [key,src] of Object.entries(manifest.clips)){
  assert.equal(src,`/audio/autoestudio/${key}.mp3`);
  assert.ok(existsSync(`public${src}`),`Missing ${src}`);
 }
 assert.deepEqual(new Set(readdirSync('public/audio/autoestudio').filter(p=>p.endsWith('.mp3'))),new Set([...required].map(k=>`${k}.mp3`)));
});
