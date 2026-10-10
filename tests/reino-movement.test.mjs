import test from 'node:test';
import assert from 'node:assert/strict';
import { REALM_SPAWN, activeColliders, stepRealmPlayer, safeCheckpoint, nearestInReach } from '../app/el-reino-de-la-rosa-dormida/movement.mjs';
const start = (x=0,z=0,y=0) => ({...REALM_SPAWN,x,z,y,heading:Math.PI});
function walk(player, frames, floor=()=>0, boxes=[], input={y:1,yaw:Math.PI,sprint:true}, flags={}) {
  for(let i=0;i<frames;i++) player=stepRealmPlayer(player,input,1/60,boxes,floor,flags);
  return player;
}
test('solid walls block even a running jump; the edge slides without tunnelling',()=>{
  const wall={minX:-2,maxX:2,minZ:-4,maxZ:-3,minY:0,maxY:6};
  const p=walk(start(),150,()=>0,[wall],{y:1,yaw:Math.PI,sprint:true,jump:true});
  assert.ok(p.z>=-2.66,JSON.stringify(p));
  assert.equal(p.y,0);
});
test('same-height gates obey quest flags',()=>{
  const gate={minX:-4,maxX:4,minZ:-4,maxZ:-3,gate:'bridgeOpen'};
  assert.ok(walk(start(),90,()=>0,[gate]).z>-3);
  assert.ok(walk(start(),90,()=>0,[gate],undefined,{bridgeOpen:true}).z<-7);
  assert.equal(activeColliders([gate],{bridgeOpen:true},0).length,0);
});
test('stairs climb to the terrace and return continuously to ground',()=>{
  const floor=(_x,z)=>Math.min(8,Math.max(0,(-z-2)*.5));
  const p=walk(start(),150,floor);
  assert.equal(p.y,8);
  const down=walk({...p,heading:0},150,floor,[],{y:1,yaw:0,sprint:true});
  assert.equal(down.y,0);
});
test('a sheer raised floor never teleports the player to its top',()=>{
  const p=walk(start(),200,(_x,z)=>z<-3?8:0);
  assert.ok(p.z>=-3);
  assert.equal(p.y,0);
});
test('jump is edge triggered, lands, and held input does not bounce',()=>{
  let p=stepRealmPlayer(start(),{jump:true},1/60,[],()=>0);
  assert.ok(p.y>0);
  p=walk(p,150,()=>0,[],{jump:true});
  assert.equal(p.y,0);
  p=stepRealmPlayer(p,{jump:false},1/60,[],()=>0);
  p=stepRealmPlayer(p,{jump:true},1/60,[],()=>0);
  assert.ok(p.y>0);
});
test('elevated obstacles do not block rooms below and checkpoints reject invalid saves',()=>{
  const terrace={minX:-1,maxX:1,minZ:-4,maxZ:-3,minY:8,maxY:12};
  assert.ok(walk(start(),90,()=>0,[terrace]).z<-7);
  assert.equal(safeCheckpoint({x:0,y:100,z:-20},()=>0).z,24);
  assert.equal(safeCheckpoint({x:0,y:0,z:Infinity},()=>0).z,24);
  assert.equal(nearestInReach(start(),{upstairs:{x:0,y:8,z:0},here:{x:1,y:0,z:1}}),'here');
});
test('a restored checkpoint inside a wall or locked gate returns safely to the hill',()=>{
  const gate={minX:-3,maxX:3,minZ:-5,maxZ:-3,gate:'bridgeOpen'};
  assert.equal(safeCheckpoint({x:0,y:0,z:-4},()=>0,[gate]).z,24);
  assert.equal(safeCheckpoint({x:0,y:0,z:-4},()=>0,[gate],{bridgeOpen:true}).z,-4);
});
