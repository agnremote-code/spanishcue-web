import type {ConversationGloss,ConversationLevel} from './types';
export type {ConversationGloss} from './types';
export default function ConversationGlosses({glosses,level}:{glosses?:ConversationGloss[];level:ConversationLevel}){
 if(!glosses?.length||level==='C1'||level==='C2')return null;
 return <aside className="conversation-glosses" aria-label="Palabras nuevas"><h3>Palabras nuevas</h3><dl>{glosses.map(g=><div key={g.es}><dt lang="es">{g.es}</dt><dd lang="en">{g.en}</dd></div>)}</dl></aside>;
}
