import type {WorldDefinition} from './types';
export default function StudioGuide({definition,state='listen',message}:{definition:WorldDefinition;state?:'listen'|'guide'|'success';message?:string}) {
 return <div className="pf-studio-guide" data-pose={state}>
  {definition.mascotPoses?<span className="pf-guide-portrait" aria-hidden="true" style={{backgroundImage:`url(${definition.mascotPoses})`}}/>:<img src={definition.mascot} alt="" width="90" height="135"/>}
  {message&&<p>{message}</p>}
 </div>;
}
