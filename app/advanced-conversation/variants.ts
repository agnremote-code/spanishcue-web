import {topics} from './data';
import {CEFR_LEVELS} from '../conversation-families/types';
import {worldSeeds} from './world-seeds';
import {worldQuestions} from '../world-speaking/content';
export const advancedVariants=Object.fromEntries(CEFR_LEVELS.map(level=>[level,level==='C1'?topics:topics.map((topic,i)=>({...topic,title:level==='A0'?topic.title+' · '+['Personality','Relationships','Money','Travel','Society','Technology','Pop culture','Daily life','Work','Debate','What would you do?','This or that','Memories','Future','Random','Change'][i]:topic.title,questions:worldQuestions(worldSeeds[i],level).map(pair=>level==='A0'?pair.join(' · '):pair[0])}))])) as Record<typeof CEFR_LEVELS[number],typeof topics>;
