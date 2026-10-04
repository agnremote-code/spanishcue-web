import test from 'node:test';
import assert from 'node:assert/strict';
import { PLATFORMS, ZONES, SPAWN, GRAVITY, JUMP_SPEED, RUN_SPEED, spawnPlayer, stepPlayer } from '../app/bosque-de-los-hongos-gigantes/engine.mjs';

const ground={...SPAWN,id:'ground',r:0,y:0,bounce:false};
const surfaces=[ground,...PLATFORMS];
const dt=1/90;

// Launch from the center, steer toward the destination, and record the actual
// first landing using all world platforms. This is deliberately stricter than
// edge-to-edge reachability: no invisible teleport or optimal edge launch.
function firstLanding(source,target,aim=target){
  let p={...spawnPlayer(),x:source.x,y:source.y,z:source.z,platform:source.id,checkpoint:{x:source.x,y:source.y,z:source.z}};
  let airborne=false;
  for(let frame=0;frame<240;frame++){
    const before=p,dx=aim.x-p.x,dz=aim.z-p.z,distance=Math.hypot(dx,dz);
    const amount=Math.min(1,distance/(RUN_SPEED*dt));
    p=stepPlayer(p,{x:distance?dx/distance*amount:0,z:distance?dz/distance*amount:0,jump:frame===0&&!source.bounce,run:true},dt);
    if(!p.grounded)airborne=true;
    if(p.respawns)return null;
    if(airborne&&p.grounded){if(p.platform===source.id)return null;return p.platform;}
    // Bounce caps relaunch on the same physics step; their landing is observable
    // as an upward velocity reset from a descending crossing at the cap height.
    if(airborne&&before.vy<0&&p.vy===15){
      const landed=PLATFORMS.find(s=>s.bounce&&Math.abs(s.y-p.y)<1e-8&&Math.hypot(p.x-s.x,p.z-s.z)<=s.r+.24);
      if(landed&&landed.id!==source.id)return landed.id;
    }
  }
  return null;
}

function reachableGraph(){
  const graph=new Map(surfaces.map(p=>[p.id,new Set()]));
  for(const source of surfaces)for(const target of PLATFORMS){
    if(target===source)continue;
    const launchSpeed=source.bounce?15:JUMP_SPEED,dy=target.y-source.y;
    const discriminant=launchSpeed**2-2*GRAVITY*dy;
    if(discriminant<0)continue;
    const flight=(launchSpeed+Math.sqrt(discriminant))/GRAVITY;
    if(Math.hypot(target.x-source.x,target.z-source.z)>RUN_SPEED*flight+target.r+.24)continue;
    const aims=[target,...Array.from({length:8},(_,i)=>({x:target.x+Math.cos(i*Math.PI/4)*target.r*.72,z:target.z+Math.sin(i*Math.PI/4)*target.r*.72}))];
    for(const aim of aims){const landing=firstLanding(source,target,aim);if(landing)graph.get(source.id).add(landing);if(landing===target.id)break;}
  }
  const reached=new Set(['ground']),queue=['ground'],parents=new Map();
  for(let i=0;i<queue.length;i++)for(const target of graph.get(queue[i])||[]){if(reached.has(target))continue;reached.add(target);parents.set(target,queue[i]);queue.push(target);}
  return {graph,reached,parents};
}
const traversal=reachableGraph();

test('every conversation refuge and the crown are reachable through actual simulated jumps',()=>{
  for(const zone of ZONES)assert.ok(traversal.reached.has(`zone-${zone.id}`),`${zone.name} is unreachable from the entrance`);
  let cursor='zone-final',jumps=0;
  while(cursor!=='ground'){cursor=traversal.parents.get(cursor);assert.ok(cursor,'crown route must lead back to entrance');jumps++;assert.ok(jumps<PLATFORMS.length);}
  assert.ok(jumps>=6,'the crown requires genuine vertical traversal');
});

test('all secondary exploration platforms are reachable without teleportation',()=>{
  const missing=PLATFORMS.filter(p=>!traversal.reached.has(p.id)).map(p=>p.id);
  assert.deepEqual(missing,[]);
});

test('regular jumps and bounce caps have distinct, usable gravity envelopes',()=>{
  assert.ok(JUMP_SPEED**2/(2*GRAVITY)>2.8);
  assert.ok(15**2/(2*GRAVITY)>5.5);
  const reachableBounces=PLATFORMS.filter(p=>p.bounce&&traversal.reached.has(p.id));
  assert.ok(reachableBounces.length>=8);
  for(const bounce of reachableBounces)assert.ok(traversal.graph.get(bounce.id).size>0,`${bounce.id} must permit onward travel`);
});
