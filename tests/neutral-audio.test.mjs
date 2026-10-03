import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import ts from 'typescript';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {LEVELS as hablarLevels,contentFor as hablarContent} from '../app/hablar-sin-cortar/levels.mjs';
import {LEVELS as intonationLevels,contentFor as intonationContent} from '../app/la-entonacion-cambia-todo/levels.mjs';

const read=p=>JSON.parse(readFileSync(p,'utf8'));
const normal=s=>s.toLowerCase().normalize('NFC').replace(/[^\p{L}\p{N}]/gu,'');
function dataFile(path){const compiled=ts.transpileModule(readFileSync(path,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;const lessonModule={exports:{}};new Function('exports','module',compiled)(lessonModule.exports,lessonModule);return lessonModule.exports;}
const modules=['phonetics','mouth-lab','hablar-sin-cortar','la-entonacion-cambia-todo','habitacion-508','ultima-llamada','el-hotel-de-lo-imposible','frecuencia-abierta','la-entrevista-que-no-salio-al-aire'];

test('finite phonetics generation inputs agree with manifests, reconstruction tokens and service words',()=>{
 for(const [name,levels,content] of [['hablar-sin-cortar',hablarLevels,hablarContent],['la-entonacion-cambia-todo',intonationLevels,intonationContent]]){
  const m=read(`app/${name}/audio-manifest.json`);
  for(const activity of levels.flatMap(level=>content(level).activities)){
   for(const id of [activity.clip,activity.secondClip].filter(Boolean))assert.equal(m.clips.find(c=>c.id===id)?.text,activity.text,`${name}/${id}`);
   if(activity.tokens && ['connect','group'].includes(activity.kind))assert.equal(normal(activity.tokens.join(' ')),normal(activity.text),`${name}/${activity.id}: tokens`);
  }
 }
 for(const name of modules){const m=read(`app/${name}/audio-manifest.json`);for(const c of m.clips){if(c.segmentWordMetadata){const segments=read(`app/${name}/${c.segmentWordMetadata}`);for(const segment of segments)assert.equal(normal(segment.words.map(w=>w.text).join(' ')),normal(c.segments[segment.segment].text));}if(!c.wordMetadata)continue;const words=read(`app/${name}/${c.wordMetadata}`);assert.equal(normal(words.map(w=>w.text).join(' ')),normal(c.text),`${name}/${c.id}: words`);}}
});

test('neutral replacements use tú and preserve declared regional listening examples',()=>{
 for(const name of ['phonetics','hablar-sin-cortar','la-entonacion-cambia-todo','el-hotel-de-lo-imposible','frecuencia-abierta']){
  const m=read(`app/${name}/audio-manifest.json`);for(const c of m.clips)assert.doesNotMatch(c.text??'',/\b(?:vos|tenés|querés|podés|venís|decís|ayudás|llevá|tomás)\b/iu,`${name}/${c.id}`);
 }
 const hotel=readFileSync('app/el-hotel-de-lo-imposible/data.ts','utf8');assert.match(hotel,/voz uruguaya/);assert.match(hotel,/decí adónde querés ir/);assert.match(hotel,/elige un recuerdo y duerme con su sonido/);assert.match(hotel,/soy tú, pero te llamo desde mañana/);
 const frequency=read('app/frecuencia-abierta/content.json');assert.match(frequency.signals.find(s=>s.id==='argentina-trabajador').segments[0].text,/contestá cuando puedas/);assert.match(frequency.signals.find(s=>s.id==='colombia-cowork').segments[0].text,/llevás seis horas/);assert.match(frequency.signals.find(s=>s.id==='chile-lider').segments[0].text,/abres el chat/);
});

test('all scoped finite audio manifests resolve, match hashes and fully decode',()=>{
 let count=0;for(const name of modules){for(const c of read(`app/${name}/audio-manifest.json`).clips){const src=c.src??c.file;if(!src)continue;const file='public'+src;assert.ok(existsSync(file),file);if(c.sha256)assert.equal(createHash('sha256').update(readFileSync(file)).digest('hex'),c.sha256,file);execFileSync('ffmpeg',['-v','error','-i',file,'-f','null','-'],{stdio:'pipe'});count++;}}
 assert.ok(count>150,`Validated ${count} clips`);
});


test('ordinary subject tú survives imperative rewrites',()=>{
 const source=readFileSync('app/la-entonacion-cambia-todo/levels/c1.mjs','utf8');
 assert.match(source,/Modela tú mismo el inciso/);
 assert.doesNotMatch(source,/Modela ti mismo/);
 assert.ok(read('app/radio-despues-de-medianoche/content.json').finalQuestions.includes('¿Qué historia cuentas siempre cuando conoces gente nueva?'));
 assert.match(read('app/ultima-llamada/content.json').signals.find(s=>s.id==='conductor').segments[0].text,/mándame un mensaje/);
 assert.match(read('app/la-entrevista-que-no-salio-al-aire/content.json').clips.find(s=>s.id==='ironia').segments[0].text,/La consideras un éxito/);
});

test('all additional listening assets are referenced and fully decode',()=>{
 const refs=new Set();
 const names=['radio-despues-de-medianoche','el-edificio-de-las-voces','la-entrevista-que-no-salio-al-aire','frecuencia-abierta'];
 function visit(o){if(typeof o==='string' && o.startsWith('/audio/') && o.endsWith('.mp3'))refs.add(o);else if(Array.isArray(o))o.forEach(visit);else if(o && typeof o==='object')Object.values(o).forEach(visit);}
 for(const name of names)visit(read(`app/${name}/content.json`));
 for(const c of dataFile('app/latinoamerica-al-oido/data.ts').countries)refs.add(`/audio/latam/${c.id}.mp3`);
 for(const room of dataFile('app/el-hotel-de-lo-imposible/data.ts').rooms)refs.add(`/audio/hotel/${room.id}.mp3`);
 for(const src of refs){assert.ok(existsSync('public'+src),src);execFileSync('ffmpeg',['-v','error','-i','public'+src,'-f','null','-'],{stdio:'pipe'});}
 for(const dir of new Set([...refs].map(src=>src.split('/')[2]))){for(const file of readdirSync(`public/audio/${dir}`).filter(f=>f.endsWith('.mp3')))assert.ok(refs.has(`/audio/${dir}/${file}`),`unreferenced ${dir}/${file}`);}
});
