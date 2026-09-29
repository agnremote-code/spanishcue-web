import content from "./content.json";

// Only stated or explicitly cross-referenced relations constrain the reconstruction.
// Unconnected events may appear in either order: chronology is not a causal proof.
export function checkReconstruction(order:readonly string[]){
  const ids=content.chronology.events.map(event=>event.id);
  if(order.length!==ids.length||new Set(order).size!==ids.length||ids.some(id=>!order.includes(id)))return {valid:false,broken:[],complete:false};
  const broken=content.chronology.constraints.filter(edge=>order.indexOf(edge.before)>order.indexOf(edge.after));
  return {valid:broken.length===0,broken,complete:true};
}

export function moveEvent(order:readonly string[],from:number,to:number){
  if(from<0||to<0||from>=order.length||to>=order.length)return [...order];
  const next=[...order];const [event]=next.splice(from,1);next.splice(to,0,event);return next;
}
