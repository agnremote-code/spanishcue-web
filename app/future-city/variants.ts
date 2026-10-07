import {districts,speakingTools} from './data';
import {CEFR_LEVELS} from '../conversation-families/types';
import {worldSeeds} from './world-seeds';
import {worldQuestions,worldTools,worldGuides} from '../world-speaking/content';
export const cityVariants=Object.fromEntries(CEFR_LEVELS.map(level=>[level,{districts:level==='B1'?districts:districts.map((district,i)=>({...district,tagline:worldGuides[level].join(' · '),vocabulary:worldSeeds[i].words,questions:worldQuestions(worldSeeds[i],level).map(([es,en])=>({es,en,challenge:worldGuides[level].join(' · ')}))})),speakingTools:level==='B1'?speakingTools:worldTools[level]}])) as Record<typeof CEFR_LEVELS[number],{districts:typeof districts;speakingTools:typeof speakingTools}>;
