import A1 from './content.mjs';
import A2 from './levels/a2.mjs';
import B1 from './levels/b1.mjs';
import B2 from './levels/b2.mjs';
import C1 from './levels/c1.mjs';
import C2 from './levels/c2.mjs';
export {LEVELS,isLevel} from '../phonetics-family/state.mjs';
const content={A1,A2,B1,B2,C1,C2};
export function contentFor(level='A1'){return content[level]??A1;}
