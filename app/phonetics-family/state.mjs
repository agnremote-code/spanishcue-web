// Answers are visit-local. Only a level preference is persisted by the shell.
export const LEVELS = ['A1','A2','B1','B2','C1','C2'];
export const STAGES = ['entry','listen','boundaries','connect','rhythm','speak','final'];
export const isLevel = value => LEVELS.includes(value);
export function resolveLevel(linked, saved) { return linked !== null ? (isLevel(linked) ? linked : 'A1') : isLevel(saved) ? saved : 'A1'; }
export function levelUrl(href, level) { const u=new URL(href,'https://spanishcue.local');u.searchParams.set('level',isLevel(level)?level:'A1');return u.pathname+u.search+u.hash; }
export function nextLevel(level,key) { const i=LEVELS.indexOf(level);return key==='Home'?'A1':key==='End'?'C2':LEVELS[(i+(['ArrowLeft','ArrowUp'].includes(key)?5:1))%6]; }
export function initialState(level='A1') { return {level:isLevel(level)?level:'A1',stage:'entry',item:0,optional:false,teacherMode:false,attempts:{},observations:[],visited:[]}; }
export function emptyAttempt() {return {heard:[],selected:[],checked:false,revealed:false,assisted:false,produced:false};}
export function attemptFor(state,key) { return state.attempts[key]??emptyAttempt(); }
export function reduce(state,action) {
 if(action.type==='level') return !isLevel(action.level)||action.level===state.level?state:{...initialState(action.level),stage:state.stage,teacherMode:state.teacherMode};
 if(action.type==='reset') return {...initialState(state.level),teacherMode:state.teacherMode};
 if(action.type==='teacher') return {...state,teacherMode:!state.teacherMode};
 if(action.type==='stage') return !STAGES.includes(action.stage)?state:{...state,stage:action.stage,item:0,optional:false,visited:[...new Set([...state.visited,action.stage])]};
 if(action.type==='item') return {...state,item:action.item};
 if(action.type==='bank') return {...state,optional:!state.optional,item:0};
 if(action.type==='observe') return {...state,observations:state.observations.includes(action.index)?state.observations.filter(x=>x!==action.index):[...state.observations,action.index]};
 if(!action.key?.startsWith(`${state.level}/`)) return state;
 const a=attemptFor(state,action.key);let b=a;
 if(action.type==='heard') b={...a,heard:[...new Set([...a.heard,action.clip])]};
 if(action.type==='support') b={...a,revealed:!a.revealed,assisted:true};
 if(action.type==='select'&&(a.heard.length||a.assisted)) b={...a,selected:action.selected,checked:false};
 if(action.type==='check'&&(a.heard.length||a.assisted)) b={...a,checked:true};
 if(action.type==='retry') b={...emptyAttempt(),heard:a.heard,assisted:a.assisted};
 if(action.type==='produce') b={...a,produced:!a.produced};
 return b===a?state:{...state,attempts:{...state.attempts,[action.key]:b}};
}
