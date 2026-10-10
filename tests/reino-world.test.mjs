import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import {mkdtemp,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import { REALM_SPAWN, activeColliders, stepRealmPlayer, nearestInReach } from '../app/el-reino-de-la-rosa-dormida/movement.mjs';
import {createGame,reduceGame,getDialogue} from '../app/el-reino-de-la-rosa-dormida/engine.mjs';

// Build the actual scene to inspect its collision/floor contract. Only browser
// painting and resident visuals are stubbed: neither contributes colliders.
const built = await build({stdin:{contents:'export {buildWorld} from "./app/el-reino-de-la-rosa-dormida/world"; export {Scene} from "three";',resolveDir:process.cwd()},bundle:true,format:'esm',write:false,plugins:[{name:'physics-only-visuals',setup(b){
 b.onResolve({filter:/^\.\/characters$/},()=>({path:'residents',namespace:'physics'}));
 b.onResolve({filter:/GLTFLoader\.js$/},()=>({path:'loader',namespace:'physics'}));
 b.onLoad({filter:/.*/,namespace:'physics'},({path})=>({contents:path==='loader'?'export class GLTFLoader {load(){}}':'import {Group} from "three"; export function createResident(){return {root:new Group(),update(){}}}',loader:'js',resolveDir:process.cwd()}));
}}]});
const temp=await mkdtemp(join(tmpdir(),'reino-world-test-'));
await writeFile(join(temp,'world.mjs'),built.outputFiles[0].text);
const {buildWorld,Scene}=await import(pathToFileURL(join(temp,'world.mjs')).href);
await rm(temp,{recursive:true});
const context=new Proxy({}, {get(target,key){return target[key]??(()=>{});},set(target,key,value){target[key]=value;return true;}});
globalThis.document={createElement:()=>({getContext:()=>context})};
const world=buildWorld(new Scene());
delete globalThis.document;
const flags={bridgeOpen:true,gardenOpen:true,castleOpen:true,dragonTrusted:true};
const radius=.43;
function clear(x,z,state=flags){const y=world.floorAt(x,z);return !activeColliders(world.colliders,state,y).some(b=>x>b.minX-radius&&x<b.maxX+radius&&z>b.minZ-radius&&z<b.maxZ+radius);}
function walk(player,target,state=flags){
 for(let frame=0;frame<600;frame++){
  const dx=target.x-player.x,dz=target.z-player.z,d=Math.hypot(dx,dz);
  if(d<.13)return player;
  player=stepRealmPlayer(player,{y:Math.min(1,d/.8),yaw:Math.atan2(dx,dz),sprint:true},1/60,world.colliders,world.floorAt,state);
 }
 throw Error(`Cannot walk from ${JSON.stringify(player)} to ${JSON.stringify(target)}`);
}
function route(source,target,range=2.4,state=flags){
 const start={x:Math.round(source.x),z:Math.round(source.z)},key=p=>`${p.x},${p.z}`;
 const queue=[start],parent=new Map([[key(start),null]]);let last;
 for(let i=0;i<queue.length;i++){
  const p=queue[i],y=world.floorAt(p.x,p.z);
  if(Math.hypot(p.x-target.x,p.z-target.z)<range&&Math.abs(y-target.y)<2.4){last=p;break;}
  for(const [dx,dz] of [[0,-1],[1,0],[0,1],[-1,0]]){
   const n={x:p.x+dx,z:p.z+dz};if(n.x<-40||n.x>40||n.z<-137||n.z>32||parent.has(key(n)))continue;
   if(!clear(n.x,n.z,state)||!clear(p.x+dx/2,p.z+dz/2,state))continue;
   // Ramp rises .5 per meter; each actual substep still enforces step height.
   if(Math.abs(world.floorAt(n.x,n.z)-y)>.55)continue;
   parent.set(key(n),p);queue.push(n);
  }
 }
 assert.ok(last,`No collision-safe route to ${JSON.stringify(target)}`);
 const path=[];for(let p=last;p;p=parent.get(key(p)))path.unshift(p);
 return path;
}

test('a complete campaign reaches every interaction through the actual world and movement physics',()=>{
 let player={...REALM_SPAWN};
 let state=createGame('A1');
 const targets={mill:{x:24,y:0,z:7},grove:{x:-10,y:0,z:-7},thorns:{x:0,y:0,z:-49},dragon:{x:-10,y:8,z:-111},altar:{x:10,y:8,z:-126}};
 function go(id,kind='npc'){
  const target=world.npcPositions[id]??world.itemPositions[id]??targets[id],range=kind==='npc'?3.1:kind==='item'?2.2:7;
  const path=route(player,target,range,state.flags);
  for(const step of path)player=walk(player,step,state.flags);
  assert.ok(Math.hypot(player.x-target.x,player.z-target.z)<range+.2,`${id}: close enough`);
  assert.ok(Math.abs(player.y-target.y)<2.4,`${id}: on the correct floor`);
  assert.equal(nearestInReach(player,{[id]:target},range+.2),id);
 }
 function talk(id){go(id);for(let stage=0;stage<3;stage++){const line=getDialogue(id,state.level,stage,state);assert.equal(line.locked,false,`${id} unlocked`);state=reduceGame(state,{type:'answer',npc:id,text:line.suggestions[0]});}assert.equal(state.dialogue[id],3);}
 function collect(item){go(item,'item');state=reduceGame(state,{type:'collect',item});assert.ok(state.inventory.includes(item));}
 function cast(target,spell,flag){go(target,'spell');state=reduceGame(state,{type:'cast',spell,target});assert.ok(state.flags[flag]);}
 talk('nox');talk('ines');talk('bruno');cast('mill','ventaria','millRepaired');collect('key');talk('liora');cast('grove','lumaria','forestLit');talk('aldren');talk('celina');cast('thorns','floralis','gardenOpen');collect('rose');collect('scroll');talk('baltasar');talk('teobaldo');cast('dragon','aurora','dragonShield');talk('brum');collect('crystal');talk('tejedora');cast('altar','lumaria','ritualLight');cast('altar','floralis','ritualGrowth');cast('altar','aurora','ritualDawn');talk('elara');
 assert.equal(state.flags.victory,true);
 assert.equal(player.y,8,'the final chamber is reached by climbing the staircase');
});

test('the actual portcullis and castle doors block before their quest flags',()=>{
 for(const [gate,start,target] of [['bridgeOpen',{x:0,z:-43,y:0},{x:0,z:-48}],['castleOpen',{x:0,z:-60,y:0},{x:0,z:-68}]]){
  let p={...REALM_SPAWN,...start};
  for(let i=0;i<240;i++)p=stepRealmPlayer(p,{y:1,yaw:Math.PI,sprint:true,jump:i===0},1/60,world.colliders,world.floorAt,{});
  assert.ok(p.z>target.z,`${gate} must block a running jump`);
  const opened=walk({...REALM_SPAWN,...start},target,{...flags,[gate]:true});
  assert.ok(opened.z<target.z+.2,`${gate} opens physically`);
 }
});

test('a terrace edge cannot lift a ground-level player eight meters',()=>{
 let p={...REALM_SPAWN,x:0,z:-98};
 for(let i=0;i<240;i++)p=stepRealmPlayer(p,{y:1,yaw:Math.PI,sprint:true},1/60,world.colliders,world.floorAt,flags);
 assert.equal(p.y,0);assert.ok(p.z>-102);
 world.dispose();
});
