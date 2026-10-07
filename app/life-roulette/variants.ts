import {topics} from './data';
import {CEFR_LEVELS} from '../conversation-families/types';
import {worldSeeds} from './world-seeds';
import {worldQuestions,worldTools} from '../world-speaking/content';
export const rouletteVariants=Object.fromEntries(CEFR_LEVELS.map(level=>[level,level==='A2'?topics:topics.map((topic,i)=>({...topic,questions:worldQuestions(worldSeeds[i],level).slice(0,3),starters:worldTools[level],words:worldSeeds[i].words}))])) as Record<typeof CEFR_LEVELS[number],typeof topics>;
