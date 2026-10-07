import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

test('all seven levels have six distinct, usable listening scenes',async()=>{
 const {default:data}=await import('../app/the-sound-map/content.json',{with:{type:'json'}});
 assert.deepEqual(Object.keys(data.levels),['A0','A1','A2','B1','B2','C1','C2']);
 assert.equal(data.locations.length,6);
 const scripts=new Set();
 for(const [level,unit] of Object.entries(data.levels)){
  assert.equal(unit.scenes.length,6);
  for(const scene of unit.scenes){
   assert.ok(data.locations.some(x=>x.id===scene.id));
   assert.ok(scene.segments.length>=1);
   const script=scene.segments.map(x=>x.text).join(' ');
   assert.ok(!scripts.has(script),`${level}/${scene.id} duplicates another script`); scripts.add(script);
   assert.ok(scene.tasks.length>=2);
   for(const task of scene.tasks){
    assert.ok(task.prompt&&task.explanation);
    if(task.type==='choice')assert.ok(task.answer>=0&&task.answer<task.options.length);
    if(task.type==='order')assert.deepEqual([...task.answer].sort(),task.items.map((_,i)=>i));
    if(task.type==='open')assert.ok(task.rubric.length>=2&&task.model);
   }
   if(level==='A0')assert.ok(scene.glossary.length>=3&&scene.produceEn&&scene.contextEn);
  }
 }
 assert.equal(scripts.size,42);
});

test('invalid levels and corrupt progress safely fall back; completion is independent by level',async()=>{
 const {resolveLevel,initialProgress,markComplete,restoreProgress}=await import('../app/the-sound-map/state.mjs');
 assert.equal(resolveLevel('C2'),'C2');assert.equal(resolveLevel('bad'),'A0');
 let p=initialProgress();p=markComplete(p,'A0','balcony');p=markComplete(p,'A0','balcony');
 assert.deepEqual(p.A0,['balcony']);assert.deepEqual(p.C2,[]);
 assert.deepEqual(restoreProgress('{broken'),initialProgress());
 assert.deepEqual(restoreProgress(JSON.stringify({A0:['balcony','bad','balcony'],C2:4})).A0,['balcony']);
 assert.deepEqual(markComplete(p,'oops','balcony'),p);
});

test('audio assets cover every script with exact transcript and nonempty MP3 files',async()=>{
 const data=JSON.parse(await readFile(new URL('../app/the-sound-map/content.json',import.meta.url)));
 const manifest=JSON.parse(await readFile(new URL('../app/the-sound-map/audio-manifest.json',import.meta.url)));
 for(const [level,unit] of Object.entries(data.levels))for(const scene of unit.scenes){
  const clip=manifest.clips.find(x=>x.id===`${level}-${scene.id}`);
  assert.ok(clip);assert.deepEqual(clip.segments,scene.segments);
  assert.ok(clip.durationSeconds>1);
  const bytes=await readFile(new URL(`../public${clip.src}`,import.meta.url));assert.ok(bytes.length>1000);
 }
});


test('one paid listening entry is discoverable in every level with a valid route and preview',async()=>{
 const {build}=await import('esbuild');
 const result=await build({stdin:{contents:'export {lessons} from "./app/lesson-catalog"; export {isFreeLesson} from "./app/access-policy";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
 const {lessons,isFreeLesson}=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
 const matches=lessons.filter(l=>l.path==='/the-sound-map');assert.equal(matches.length,1);
 const lesson=matches[0];assert.equal(lesson.id,236);assert.equal(lesson.category,'Escucha');assert.equal(isFreeLesson(236),false);
 assert.deepEqual(lesson.levels,['A0','A1','A2','B1','B2','C1','C2']);assert.ok(lesson.routeSequence>0);
 assert.ok((await readFile(new URL('../public'+lesson.image,import.meta.url))).length>100);
});

test('responsive city framing keeps the ground and rooftop inside desktop and mobile views at every orbit limit',async()=>{
 const {build}=await import('esbuild');
 const result=await build({entryPoints:['app/the-sound-map/camera.ts'],bundle:true,write:false,platform:'node',format:'esm'});
 const {frameCity}=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
 const {PerspectiveCamera,Vector3}=await import('three');
 for(const [w,h] of [[1240,580],[620,560],[350,440],[284,420]])for(const theta of [-.5,.7,1.4])for(const phi of [.35,.85,1.15]){
  const camera=new PerspectiveCamera(38,w/h,.1,150),target=new Vector3(0,1,-1);
  camera.position.setFromSphericalCoords(50,phi,theta).add(target);camera.lookAt(target);
  frameCity(camera,target,w,h);camera.updateMatrixWorld();
  for(const x of [-13,13])for(const z of [-14,12])for(const y of [-1,6.3]){
   const p=new Vector3(x,y,z).project(camera);
   assert.ok(Math.abs(p.x)<.96&&Math.abs(p.y)<.88,`clipped ${w}×${h}: ${p.x},${p.y}`);
  }
 }
});

test('map labels remain separated and inside a narrow screen even when projected anchors coincide',async()=>{
 const {build}=await import('esbuild');
 const built=await build({entryPoints:['app/the-sound-map/pins.ts'],bundle:true,write:false,platform:'node',format:'esm'});
 const {layoutPins}=await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'));
 const points=Array.from({length:6},(_,id)=>({id:String(id),x:145,y:190,width:96,height:82}));
 const result=layoutPins(points,290,440);
 for(let i=0;i<result.length;i++){
  const a=result[i];assert.ok(a.x-a.width/2>=8&&a.x+a.width/2<=282&&a.y-a.height>=45&&a.y<=378);
  for(const b of result.slice(i+1))assert.ok(Math.abs(a.x-b.x)>=(a.width+b.width)/2+4||a.y<=b.y-b.height-4||b.y<=a.y-a.height-4,'labels overlap');
 }
});
