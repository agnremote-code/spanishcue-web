import * as a2 from './data';
import * as b1 from '../preguntas-prohibidas/data';
const originalVariants = {
 A2:{level:'A2',focus:'UNA IDEA, UNA RAZÓN Y UN EJEMPLO',intro:'Recorre los mundos, elige una pregunta y responde con una idea, una razón y un ejemplo.',answerGuide:'Construye una respuesta clara.',formula:'Para mí… porque… Por ejemplo… ¿Y para ti?',activities:a2,closingConversation:['¿Qué pregunta te gustó más?','¿Qué tema fue difícil?','¿Qué respuesta fue más fácil?','¿Qué palabra nueva usaste?','¿Qué tema quieres practicar otra vez?']},
 B1:{level:'B1',focus:'OPINIÓN, MATICES Y OTRAS PERSPECTIVAS',intro:'Abre una puerta, cuenta tu experiencia y considera cómo cambia tu respuesta al escuchar otra perspectiva.',answerGuide:'Explica tu postura y considera una alternativa.',formula:'Pienso que… aunque… Por otra parte… En mi experiencia…',activities:b1,closingConversation:['¿Qué pregunta fue más incómoda?','¿Qué tema te obligó a pensar más?','¿Qué respuesta tuya fue más honesta?','¿Qué postura cambiarías un poco después de hablar?','¿Qué tema sería peligroso discutir con desconocidos?']},
} as const;

import {CEFR_LEVELS,type CEFRLevel} from '../conversation-families/types';
import {worldSeeds} from './world-seeds';
import {worldQuestions,worldGuides,worldTools,worldClosing} from '../world-speaking/content';
type KingdomVariant={level:CEFRLevel;focus:string;intro:string;answerGuide:string;formula:string;activities:typeof a2;closingConversation:readonly string[]};
export const kingdomVariants = Object.fromEntries(CEFR_LEVELS.map(level=>{
 if(level==='A2'||level==='B1') return [level,originalVariants[level]];
 const supportPhrases=worldTools[level];
 return [level,{level,focus:worldGuides[level][0],intro:worldGuides[level].join(' · '),answerGuide:worldGuides[level][0],formula:supportPhrases.map(pair=>pair[0]).join(' · '),activities:{...a2,
 topics:a2.topics.map((topic,i)=>({...topic,desc:worldGuides[level],questions:worldQuestions(worldSeeds[i],level).map(pair=>level==='A0'?pair.join(' · '):pair[0])})),
 forbiddenBlocks:a2.forbiddenBlocks.map((block,i)=>({...block,question:worldQuestions(worldSeeds[[6,0,1,2,3,11][i]],level)[0].join(' · '),challenge:worldGuides[level]})),
 supportPhrases,powerUps:a2.powerUps.map((power,i)=>({...power,phrase:supportPhrases[i%4][0],translation:supportPhrases[i%4][1]})),
 feedbackLabels:level==='A0'?[['Eligió una pieza','Chose a chunk'],['Dijo una frase con ayuda','Said a sentence with support'],['Preguntó «¿Y tú?»','Asked “And you?”'],['Próxima palabra','Next word']]:a2.feedbackLabels},closingConversation:worldClosing(worldSeeds[0],level).map(pair=>pair.join(' · '))}];
})) as Record<CEFRLevel,KingdomVariant>;
