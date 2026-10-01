import BASE from './content.mjs';
import A2 from './levels/a2.mjs';
import B1 from './levels/b1.mjs';
import B2 from './levels/b2.mjs';
import C1 from './levels/c1.mjs';
import C2 from './levels/c2.mjs';
export {LEVELS,isLevel} from '../phonetics-family/state.mjs';
export const DEFAULT_LEVEL='A1';
export const PATCHES={A1:{},A2,B1,B2,C1,C2};
// Complete patches deliberately replace every authored activity, never silently
// inheriting easier learner-facing text. Only structural ids/route are shared.
const content=Object.fromEntries(Object.entries(PATCHES).map(([level,patch])=>[level,{...BASE,...patch,level}]));
export const LEVEL_INFO=Object.fromEntries(Object.entries(content).map(([level,c])=>[level,{name:c.name,demand:c.demand,objective:c.objective}]));
export function contentFor(level='A1'){return content[level]??content.A1;}
export function untouched(level){if(level==='A1')return [];const c=contentFor(level);return BASE.activities.flatMap((a,i)=>['prompt','text','explanation','transfer','teacher'].filter(k=>a[k]===c.activities[i][k]).map(k=>`${a.id}.${k}`));}
