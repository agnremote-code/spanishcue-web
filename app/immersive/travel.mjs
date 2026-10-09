import {exitSpot,isWalkable} from '../noche-abierta/world3d.mjs';
import {DEMO_BOUNDS} from './policy.mjs';

// Original door framing, with a walkable arrival for vehicle encounters too.
export function demoArrival(target, boxes) {
  const preferred = exitSpot(target);
  const candidates = [preferred, {x:target.x,z:target.z,heading:preferred.heading}];
  for (const radius of [1, 1.5, 2, 2.5]) {
    for (const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]) {
      candidates.push({x:target.x+dx*radius,z:target.z+dz*radius,heading:preferred.heading});
    }
  }
  const result = candidates.find(p => isWalkable(p.x,p.z,boxes,DEMO_BOUNDS));
  if (!result) throw new Error(`No safe demo arrival: ${target.location}`);
  return result;
}
