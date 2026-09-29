export type MouthAttempt={ended:boolean;heard:boolean;choice:number|null;checked:boolean;revealed:boolean;textHidden:boolean;assisted:boolean;observed:boolean;reload:number};
export type MouthAction={type:"ended"|"confirm"|"check"|"support"|"show"|"hide"|"retry"|"reload"}|{type:"choose";choice:number}|{type:"observe";value:boolean};
export const initialMouthAttempt=():MouthAttempt=>({ended:false,heard:false,choice:null,checked:false,revealed:false,textHidden:false,assisted:false,observed:false,reload:0});
export function updateMouthAttempt(a:MouthAttempt,action:MouthAction,optionCount=0):MouthAttempt{
 switch(action.type){
  case "ended":return {...a,ended:true};
  case "confirm":return a.ended?{...a,heard:true}:a;
  case "choose":return (a.heard||a.assisted)&&Number.isInteger(action.choice)&&action.choice>=0&&action.choice<optionCount?{...a,choice:action.choice,checked:false,revealed:false,textHidden:false}:a;
  case "check":return a.choice!==null&&(a.heard||a.assisted)?{...a,checked:true}:a;
  case "support":return {...a,revealed:true,textHidden:false,assisted:true};
  case "show":return {...a,textHidden:false};
  case "hide":return {...a,textHidden:true};
  case "retry":return {...a,choice:null,checked:false,revealed:false,textHidden:false};
  case "reload":return {...a,ended:false,heard:false,checked:false,observed:false,reload:a.reload+1};
  case "observe":return a.heard||a.assisted?{...a,observed:action.value}:a;
 }
}
