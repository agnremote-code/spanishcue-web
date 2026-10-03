import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {build} from 'esbuild';
const r=await build({stdin:{contents:`export * from './app/phonetics/data';export * from './app/access-policy';export * from './app/phonetics/navigation';`,resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const p=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
const manifest=JSON.parse(readFileSync('app/phonetics/audio-manifest.json','utf8'));
const expected={
 'vowel-a':'a','vowel-e':'e','vowel-i':'i','vowel-o':'o','vowel-u':'u',
 casa:'casa',mesa:'mesa',vino:'vino',moto:'moto',luna:'luna',misa:'misa',peso:'peso',piso:'piso',pelo:'pelo',palo:'palo',cosa:'cosa',
 'vowels-phrase-1':'Miro la luna.','vowels-phrase-2':'Una moto roja.','vowels-phrase-3':'Mi casa tiene una mesa.',
 'publico-initial':'público','publico-middle':'publico','publico-final':'publicó',
 'termino-initial':'término','termino-middle':'termino','termino-final':'terminó',
 papel:'papel',telefono:'teléfono',cafe:'café','hablo-present':'hablo','hablo-past':'habló',
 'stress-phrase-1':'¿Tomas café?','stress-phrase-2':'Sí, tomo café.',
};

test('all32 finite scripts have a matching nonempty decodable asset, duration and immutable checksum',()=>{
 assert.deepEqual(Object.fromEntries(manifest.clips.map(c=>[c.id,c.text])),expected);
 assert.equal(new Set(manifest.clips.map(c=>c.sha256)).size,32);
 assert.deepEqual(readdirSync('public/audio/phonetics').sort(),Object.keys(expected).map(id=>`${id}.mp3`).sort());
 for(const c of manifest.clips){
  const path='public'+c.src,bytes=readFileSync(path);
  assert.ok(bytes.length>1000,c.id);
  assert.equal(createHash('sha256').update(bytes).digest('hex'),c.sha256,c.id);
  const probe=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','format=duration:stream=codec_name,sample_rate,channels','-of','json',path],{encoding:'utf8'}));
  assert.ok(Number(probe.format.duration)>0.25,c.id);
  assert.ok(Math.abs(Number(probe.format.duration)-c.durationSeconds)<.001,c.id);
  assert.equal(probe.streams[0].codec_name,'mp3');assert.equal(Number(probe.streams[0].sample_rate),c.sampleRate);assert.equal(probe.streams[0].channels,c.channels);
  execFileSync('ffmpeg',['-v','error','-i',path,'-f','null','-'],{stdio:'pipe'});
 }
});

test('every authored model/trial/phrase resolves to the intended lesson and every new asset is used',()=>{
 const used=new Map();
 for(const id of [201,202]){
  const l=p.phoneticsLessons[id],refs=new Set([...l.models,...l.trials.map(t=>t.clipId),...l.phrases,...(id===201?p.vowelModels.map(m=>m.word):[])]);
  assert.equal(refs.size,id===201?19:14);
  for(const clipId of refs){const c=p.phoneticClip(clipId);assert.ok(c.lessonIds.includes(id));used.set(clipId,true);}
  assert.equal(new Set(l.trials.map(t=>t.id)).size,l.trials.length);
  for(const t of l.trials){assert.ok(t.answer>=0&&t.answer<t.options.length);assert.equal(new Set(t.options).size,t.options.length);assert.ok(t.why&&t.hint);}
 }
 assert.deepEqual([...used.keys()].sort(),Object.keys(expected).sort());
 assert.equal(manifest.synthetic,true);assert.equal(manifest.voice,'es-AR-TomasNeural');
});

test('the complete vowel and stress answer banks match independently authored phonetic targets',()=>{
 const vowelTargets=['mesa','casa','piso','pelo','misa','peso','cosa','palo'];
 assert.deepEqual(p.vowelTrials.map(t=>t.options[t.answer]),vowelTargets);
 assert.deepEqual(p.vowelTrials.map(t=>p.phoneticClip(t.clipId).text),vowelTargets);
 const syllables=[['ca','sa'],['pa','pel'],['te','lé','fo','no'],['ca','fé'],['pú','bli','co'],['pu','bli','co'],['pu','bli','có'],['tér','mi','no'],['ter','mi','no'],['ter','mi','nó'],['ha','blo'],['ha','bló']];
 assert.deepEqual(p.stressTrials.map(t=>t.syllables),syllables);
 assert.deepEqual(p.stressTrials.map(t=>t.answer),[0,1,1,1,0,1,2,0,1,2,0,1]);
 assert.deepEqual(p.stressTrials.map(t=>t.syllables.join('')),p.stressTrials.map(t=>p.phoneticClip(t.clipId).text));
 assert.equal(p.stressTrials.filter(t=>!t.extension).length,4);
});

test('new phonetics audio is FREE alongside its existing free lesson IDs; all old audio protections remain',()=>{
 assert.ok(p.isFreeLesson(201));assert.ok(p.isFreeLesson(202));
 assert.ok(!p.isFreeLesson(45));assert.ok(!p.isFreeLesson(47));
 assert.deepEqual([...p.freeAudioPrefixes].sort(),['hotel','latam','phonetics']);
 for(const dir of readdirSync('public/audio')) if(!['hotel','latam','phonetics'].includes(dir)) assert.ok(!p.freeAudioPrefixes.has(dir),dir);
 for(const c of manifest.clips) assert.ok(p.freeAudioPrefixes.has(c.src.split('/')[2]),c.src);
 for(const id of [201,202]) assert.equal(p.phoneticsHref(id),`/clase/${id}`);
 for(const id of [45,47,203,204,210])assert.equal(p.phoneticsHref(id),null);
});
