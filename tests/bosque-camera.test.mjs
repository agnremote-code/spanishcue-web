import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import * as THREE from 'three';
import {CATEGORIES} from '../app/bosque-de-los-hongos-gigantes/engine.mjs';
const path='app/bosque-de-los-hongos-gigantes/camera.ts';
const nodeRequire=createRequire(import.meta.url);
const require=name=>name==='three'?THREE:nodeRequire(name);
async function camera(){
 assert.ok(existsSync(path),'a collision-aware camera solver must be available');
 const compiled=await build({entryPoints:[path],bundle:true,platform:'node',format:'cjs',write:false,external:['three']});
 const m={exports:{}};new Function('require','module','exports',compiled.outputFiles[0].text)(require,m,m.exports);return m.exports;
}
const obstacle=(x,y,z,w,h,d)=>{const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({side:THREE.DoubleSide}));o.position.set(x,y,z);o.updateMatrixWorld(true);return o;};
test('camera preserves a readable distance when a mushroom blocks the normal orbit',async()=>{
 const {solveForestCamera}=await camera();const target=new THREE.Vector3(0,1.6,0),block=obstacle(0,3,4,12,1,4);
 const position=solveForestCamera(target,0,.5,9,[block]);
 assert.ok(position.distanceTo(target)>=5,'raise the camera instead of crushing it into the hero');
 const ray=new THREE.Raycaster(target,position.clone().sub(target).normalize(),0,position.distanceTo(target));
 assert.equal(ray.intersectObject(block).length,0,'view of the hero must remain unobstructed');
});
test('camera clearance includes the near-plane edges, not only the center ray',async()=>{
 const {solveForestCamera}=await camera();const target=new THREE.Vector3(0,1.6,0),block=obstacle(.65,4,6,1,8,2);
 const position=solveForestCamera(target,0,.5,9,[block]);
 const box=new THREE.Box3().setFromObject(block).expandByScalar(.55);
 assert.equal(box.containsPoint(position),false);
});
test('camera never interpolates below a refuge during a landing or respawn',async()=>{
 const {solveForestCamera}=await camera();const target=new THREE.Vector3(0,21.6,0),platform=obstacle(0,19.5,0,9,1,9);
 const position=solveForestCamera(target,-Math.PI/2,.5,9,[platform]);
 assert.ok(position.y>target.y);assert.ok(position.distanceTo(target)>7);
});
test('first refuge has a natural name while retaining its pedagogical category',()=>{
 assert.equal(CATEGORIES[0].name,'Claro de las historias');assert.equal(CATEGORIES[0].short,'Sobre ti');
});

test('all real refuges retain a usable orbit with the actual forest collision geometry',async()=>{
 const {JSDOM}=await import('jsdom');
 const {mergeGeometries}=await import('three/addons/utils/BufferGeometryUtils.js');
 const {ZONES}=await import('../app/bosque-de-los-hongos-gigantes/engine.mjs');
 const {solveForestCamera}=await camera();
 const dom=new JSDOM();const previous=globalThis.document;globalThis.document=dom.window.document;
 // Texture drawing is the only mocked boundary: all meshes, transforms and raycasts are real.
 dom.window.HTMLCanvasElement.prototype.getContext=()=>new Proxy({createRadialGradient:()=>({addColorStop(){}})},{get:(o,k)=>o[k]??(()=>{})});
 let forest;
 try{
  const compiled=await build({entryPoints:['app/bosque-de-los-hongos-gigantes/forest3d.ts'],bundle:true,platform:'node',format:'cjs',write:false,external:['three','three/*']});
  const m={exports:{}};new Function('require','module','exports',compiled.outputFiles[0].text)(name=>name.includes('BufferGeometryUtils')?{mergeGeometries}:require(name),m,m.exports);
  forest=m.exports.buildForest({low:true,reducedMotion:true});forest.root.updateMatrixWorld(true);
  for(const zone of ZONES)for(let angle=0;angle<8;angle++){
   const target=new THREE.Vector3(zone.x,zone.y+1.4,zone.z);
   const position=solveForestCamera(target,angle*Math.PI/4,.55,8.8,forest.solids);
   assert.ok(position.distanceTo(target)>4,`${zone.id}, orbit ${angle}: camera collapsed to ${position.distanceTo(target)}`);
   const ray=new THREE.Raycaster(target,position.clone().sub(target).normalize(),0,position.distanceTo(target));
   assert.equal(ray.intersectObjects(forest.solids,false).length,0,`${zone.id}, orbit ${angle}: geometry hides hero`);
  }
 }finally{forest?.dispose();globalThis.document=previous;dom.window.close();}
});

test('destination arrow uses screen-right and screen-left consistently',async()=>{
 const {destinationBearing}=await camera();assert.equal(typeof destinationBearing,'function');
 const yaw=-Math.PI/2;
 assert.ok(Math.abs(destinationBearing(10,0,yaw))<1e-8,'straight ahead');
 assert.ok(Math.abs(destinationBearing(0,10,yaw)-Math.PI/2)<1e-8,'right');
 assert.ok(Math.abs(destinationBearing(0,-10,yaw)+Math.PI/2)<1e-8,'left');
});

test('generated scenery keeps out of the climb: trunks, logs and large mushrooms avoid every cap and jump corridor',async()=>{
 const {JSDOM}=await import('jsdom');
 const {mergeGeometries}=await import('three/addons/utils/BufferGeometryUtils.js');
 const {PLATFORMS,corridorClear}=await import('../app/bosque-de-los-hongos-gigantes/engine.mjs');
 const dom=new JSDOM();const previous=globalThis.document;globalThis.document=dom.window.document;
 dom.window.HTMLCanvasElement.prototype.getContext=()=>new Proxy({createRadialGradient:()=>({addColorStop(){}})},{get:(o,k)=>o[k]??(()=>{})});
 let forest;
 try{
  const compiled=await build({entryPoints:['app/bosque-de-los-hongos-gigantes/forest3d.ts'],bundle:true,platform:'node',format:'cjs',write:false,external:['three','three/*']});
  const m={exports:{}};new Function('require','module','exports',compiled.outputFiles[0].text)(name=>name.includes('BufferGeometryUtils')?{mergeGeometries}:require(name),m,m.exports);
  forest=m.exports.buildForest({low:false,reducedMotion:true});
  assert.ok(forest.obstacles.length>40,'scenery is solid');
  for(const o of forest.obstacles){
   assert.ok(corridorClear(o.x,o.z,Math.min(o.r,1.5),0,Math.min(o.y1,4),0)||o.id.startsWith('tree'),`${o.id} stands in a jump corridor`);
   for(const p of PLATFORMS)if(p.y<=o.y1+.5)assert.ok(Math.hypot(p.x-o.x,p.z-o.z)>p.r+o.r*.6,`${o.id} pierces ${p.id}`);
  }
 }finally{forest?.dispose();globalThis.document=previous;dom.window.close();}
});
