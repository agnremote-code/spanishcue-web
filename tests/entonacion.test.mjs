import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync,readdirSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
const root='app/la-entonacion-cambia-todo';
const levels=['A1','A2','B1','B2','C1','C2'];
async function lesson(){assert.ok(existsSync(`${root}/levels.mjs`),'complete intonation lesson exists');return import(`../${root}/levels.mjs`);}
test('six complete authored levels share stages but change linguistic and production demands',async()=>{
 const {LEVELS,contentFor}=await lesson();assert.deepEqual(LEVELS,levels);assert.equal(contentFor('invalid').level,'A1');
 const c0=contentFor('A1');
 for(const l of levels){const c=contentFor(l);assert.equal(c.level,l);assert.equal(c.activities.length,10);assert.equal(c.activities.filter(a=>!a.optional).length,8);assert.deepEqual(c.route.map(s=>s.id),['listen','boundaries','connect','rhythm','speak','final']);assert.equal(c.route.reduce((n,s)=>n+s.minutes,0),50);assert.equal(c.final.steps.length,3);assert.equal(c.final.criteria.length,3);
 for(const a of c.activities){for(const f of ['prompt','text','explanation','transfer','teacher']){assert.ok(a[f]?.length>10,`${l} ${a.id} ${f}`);if(l!=='A1')assert.notEqual(a[f],c0.activities.find(b=>b.id===a.id)[f]);}assert.ok(a.prosody?.delivery);if(a.kind==='ab')assert.ok(a.secondClip&&a.secondProsody);}
 }
 assert.equal(new Set(levels.map(l=>contentFor(l).final.prompt)).size,6);
 assert.equal(new Set(levels.map(l=>JSON.stringify(contentFor(l).final.criteria))).size,6);
});
test('exactly one PRO card has six filtered links and an existing route',async()=>{
 const r=await build({stdin:{contents:"export {lessons} from './app/lesson-catalog';export {isFreeLesson} from './app/access-policy';export {phoneticsFamilyHref} from './app/phonetics-family/navigation';",resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});const p=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));const {filterLessons}=await import('../app/library-filters.mjs');
 const found=p.lessons.filter(l=>l.path==='/la-entonacion-cambia-todo');assert.equal(found.length,1);const c=found[0];assert.equal(c.id,225);assert.equal(c.displayLevel,'A1–C2');assert.equal(p.isFreeLesson(c.id),false);assert.equal(new Set(p.lessons.map(c=>c.id)).size,p.lessons.length);
 for(const l of levels){assert.equal(filterLessons(p.lessons,{level:l,category:'Fonética'}).filter(c=>c.id===225).length,1);assert.equal(p.phoneticsFamilyHref(c,l),`/la-entonacion-cambia-todo?level=${l}`);}
 assert.ok(existsSync(`${root}/page.tsx`));
});
test('all finite recordings exist, match scripts, decode, and have no orphan files',async()=>{
 const {contentFor}=await lesson();const manifest=JSON.parse(readFileSync(`${root}/audio-manifest.json`));const refs=levels.flatMap(l=>contentFor(l).activities.flatMap(a=>[a.clip,...(a.secondClip?[a.secondClip]:[])]));assert.equal(refs.length,72);assert.deepEqual([...refs].sort(),manifest.clips.map(c=>c.id).sort());assert.deepEqual(readdirSync('public/audio/la-entonacion-cambia-todo').filter(f=>f.endsWith('.mp3')).sort(),refs.map(id=>`${id}.mp3`).sort());assert.equal(new Set(manifest.clips.map(c=>c.sha256)).size,72);
 for(const c of manifest.clips){const path='public'+c.src;const bytes=readFileSync(path);assert.ok(bytes.length>1000);assert.equal(createHash('sha256').update(bytes).digest('hex'),c.sha256);const pcm=execFileSync('ffmpeg',['-v','error','-i',path,'-f','s16le','-ar','24000','-ac','1','-'],{maxBuffer:10e6});let peak=0,sum=0;for(let i=0;i<pcm.length;i+=2){const x=pcm.readInt16LE(i);peak=Math.max(peak,Math.abs(x));sum+=x*x;}assert.ok(peak>100&&Math.sqrt(sum/(pcm.length/2))>20,c.id);assert.ok(c.durationSeconds>0);}
 for(const l of levels)for(const a of contentFor(l).activities){const first=manifest.clips.find(c=>c.id===a.clip);assert.equal(first.text,a.text);if(a.secondClip){const second=manifest.clips.find(c=>c.id===a.secondClip);assert.equal(second.text,a.text);assert.notEqual(first.sha256,second.sha256);assert.notDeepEqual(first.pitchAnchorsHz,second.pitchAnchorsHz);}}
 assert.equal(manifest.synthetic,true);assert.equal(manifest.humanListeningQA,false);
});
test('unrelated lesson and auth sources remain byte-identical to current task base',()=>{
 for(const file of ['app/hablar-sin-cortar/content.mjs','app/hablar-sin-cortar/HablarSinCortar.tsx','app/noche-abierta/page.tsx','app/autoestudio/ModulePlayer.tsx','app/access-policy.ts']){assert.deepEqual(readFileSync(file),execFileSync('git',['show',`829bfdef46e1b2fdb1fd81eb0836ab3e5155eb13:${file}`]));}
});
test('in-world guide offers phase-specific hints without exposing hidden sentence text',async()=>{
 assert.ok(existsSync('app/phonetics-family/MascotGuide.tsx'),'interactive guide component exists');const {createRequire}=await import('node:module');const {runInNewContext}=await import('node:vm');const req=createRequire(import.meta.url);const React=req('react');const {renderToStaticMarkup}=req('react-dom/server');
 const r=await build({entryPoints:['app/phonetics-family/MascotGuide.tsx'],bundle:true,format:'cjs',platform:'node',write:false,external:['react','react-dom']});const m={exports:{}};runInNewContext(`(function(require,module,exports){${r.outputFiles[0].text}\n})`,{console})(req,m,m.exports);
 const guide={listen:'Primero escuchá.',react:'Volvé a comparar.',produce:'Ahora probá tu voz.',complete:'Una intención nueva.',teacher:'Elegí una devolución.',poses:{listen:'/brand/mascot/portrait.webp',react:'/brand/mascot/speaking.webp',produce:'/brand/mascot/speaking.webp',complete:'/brand/mascot/standing.webp',teacher:'/brand/mascot/pointing.webp'}};
 for(const phase of ['listen','react','produce','complete','teacher']){const h=renderToStaticMarkup(React.createElement(m.exports.default,{guide,phase}));assert.ok(h.includes(guide[phase]));assert.ok(h.includes(guide.poses[phase]));assert.equal((h.match(/<img /g)||[]).length,1);}
});
