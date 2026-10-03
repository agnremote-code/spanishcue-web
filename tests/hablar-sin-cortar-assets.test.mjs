import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {LEVELS,contentFor,untouched} from '../app/hablar-sin-cortar/levels.mjs';
const manifest=JSON.parse(readFileSync('app/hablar-sin-cortar/audio-manifest.json'));
const normalize=s=>s.normalize('NFC').toLowerCase().replace(/[^\p{L}\p{N}]/gu,'');

test('66 finite assets resolve exactly, decode completely and contain audible signal; no orphans or hash duplicates',()=>{
 const refs=LEVELS.flatMap(level=>contentFor(level).activities.flatMap(a=>[a.clip,...(a.secondClip?[a.secondClip]:[])]));
 assert.equal(refs.length,66);assert.deepEqual([...refs].sort(),manifest.clips.map(c=>c.id).sort());assert.equal(new Set(manifest.clips.map(c=>c.sha256)).size,66);
 assert.deepEqual(readdirSync('public/audio/hablar-sin-cortar').filter(f=>f.endsWith('.mp3')).sort(),refs.map(id=>id+'.mp3').sort());
 for(const c of manifest.clips){
  const path='public'+c.src,bytes=readFileSync(path);assert.ok(bytes.length>1000,c.id);assert.equal(createHash('sha256').update(bytes).digest('hex'),c.sha256);
  const pcm=execFileSync('ffmpeg',['-v','error','-i',path,'-f','s16le','-ar','24000','-ac','1','-'],{maxBuffer:10e6});let peak=0,square=0;
  for(let i=0;i<pcm.length;i+=2){const x=pcm.readInt16LE(i);peak=Math.max(peak,Math.abs(x));square+=x*x;}
  assert.ok(peak>100 && Math.sqrt(square/(pcm.length/2))>20,c.id);
  const probe=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','format=duration:stream=codec_name,sample_rate,channels','-of','json',path]));
  assert.equal(probe.streams[0].codec_name,'mp3');assert.equal(Number(probe.streams[0].sample_rate),24000);assert.ok(Math.abs(Number(probe.format.duration)-c.durationSeconds)<.001);
 }
});
test('exact authored scripts match generation input and returned service word metadata; not a human pronunciation certificate',()=>{
 for(const level of LEVELS)for(const a of contentFor(level).activities){
  const clip=manifest.clips.find(c=>c.id===a.clip);assert.equal(clip.text,a.text);
  const words=JSON.parse(readFileSync('app/hablar-sin-cortar/'+clip.wordMetadata));assert.equal(normalize(words.map(w=>w.text).join(' ')),normalize(a.text),clip.id);
  assert.ok(words.length>1 && words.every(w=>w.offset>=0&&w.duration>0));
  if(a.secondClip){const b=manifest.clips.find(c=>c.id===a.secondClip);assert.equal(b.text,a.text);assert.equal(b.sourceClip,a.clip);assert.ok(b.durationSeconds>clip.durationSeconds);assert.match(b.edit,/inserted pauses/);}
 }
 assert.equal(manifest.synthetic,true);assert.equal(manifest.humanListeningQA,false);assert.equal(manifest.voice,'es-AR-TomasNeural');
});
test('A1-C2 preserve ids, fully replace pedagogical text and provide distinct final rubrics',()=>{
 for(const level of LEVELS){assert.deepEqual(untouched(level),[]);const c=contentFor(level);assert.equal(new Set(c.activities.map(a=>a.id)).size,10);assert.equal(new Set(c.activities.map(a=>a.text)).size,10);assert.deepEqual([...new Set(c.activities.filter(a=>!a.optional).map(a=>a.stage))],['listen','boundaries','connect','rhythm','speak']);}
 assert.equal(new Set(LEVELS.map(l=>contentFor(l).final.prompt)).size,6);
 assert.equal(new Set(LEVELS.map(l=>JSON.stringify(contentFor(l).final.criteria))).size,6);
 assert.equal(new Set(LEVELS.map(l=>contentFor(l).activities.find(a=>a.kind==='ab').answer)).size,2);
});
test('new media namespace remains PRO and phonetics behavior/style/access sources match task base',async()=>{
 const {build}=await import('esbuild');const b=await build({stdin:{contents:"export * from './app/access-policy';",resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});const p=await import('data:text/javascript;base64,'+Buffer.from(b.outputFiles[0].text).toString('base64'));
 assert.equal(p.freeAudioPrefixes.has('hablar-sin-cortar'),false);assert.equal(p.isFreeLesson(224),false);
 const reviewed=JSON.parse(readFileSync('tests/fixtures/neutral-audio-reviewed.json','utf8')).sources;
 for(const file of ['app/phonetics/PhoneticsLesson.tsx','app/phonetics/data.ts','app/phonetics/audio-manifest.json'])assert.equal(createHash('sha256').update(readFileSync(file)).digest('hex'),reviewed[file],file);
 for(const file of ['app/phonetics/state.ts','app/phonetics/navigation.ts','app/phonetics/phonetics.css','app/access-policy.ts'])assert.deepEqual(readFileSync(file),execFileSync('git',['show',`1d0c76564d664df74918aacccf14f355849f0f75:${file}`]),file);
});
