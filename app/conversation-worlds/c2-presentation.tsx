import type { WorldElimination, WorldGuide, WorldRule } from './types';

export type WorldDecision = {
  first: 'yes' | 'no'; final?: 'yes' | 'no' | 'conditional'; revealed?: boolean;
  compared?: boolean; reformulation?: string; condition?: string;
};
export type C2Finale = {
  eliminate: string; redefined: string; binary: string; proposition: string; law: string;
  rewrite: string; improvement: string; diagnosis: string; edgeOne: string; edgeTwo: string; limitation: string; open: boolean;
};
export const emptyC2Finale = (): C2Finale => ({eliminate:'',redefined:'',binary:'',proposition:'',law:'',rewrite:'',improvement:'',diagnosis:'',edgeOne:'',edgeTwo:'',limitation:'',open:false});
export function completedC2Decision(vote?: WorldDecision): boolean {
  return Boolean(vote?.revealed && vote.compared && vote.reformulation?.trim() && (vote.final==='yes'||vote.final==='no'||(vote.final==='conditional'&&vote.condition?.trim())));
}
const voteLabel = (vote?: WorldDecision['final']) => vote==='conditional'?'condicional':vote==='yes'?'eliminar':'conservar';
const machineRoles = [{key:'eliminate',label:'Algo que sí eliminarías'},{key:'redefined',label:'Quisiste eliminarlo y luego lo redefiniste'},{key:'binary',label:'Una pregunta binaria engañosa'}] as const;
export function eligibleC2Role(role: typeof machineRoles[number]['key'], vote?: WorldDecision): boolean {
  return completedC2Decision(vote) && (role==='eliminate'?vote?.final==='yes':role==='redefined'?vote?.first==='yes'&&Boolean(vote.reformulation?.trim()):true);
}
const distinctText = (text:string) => text.trim().toLocaleLowerCase('es').normalize('NFKC').replace(/[\p{P}\p{S}\s]+/gu,'');

export function c2MachineReframe({item,decision,update,vote}:{item:WorldElimination;decision:WorldDecision;update:(field:'compared'|'reformulation'|'condition',value:string|boolean)=>void;vote:(choice:NonNullable<WorldDecision['final']>)=>void}) {
  return <div className="cw-c2-reframe">
    {!decision.compared ? <button className="cw-primary" onClick={()=>update('compared',true)}>Contrastar otra lectura <span aria-hidden="true">↗</span></button> : <>
      <h4 id="cw-c2-reading" tabIndex={-1}>DOS LECTURAS DEFENDIBLES</h4><p>{item.competingReading}</p>
      <label htmlFor="cw-c2-reformulation"><span>{item.reformulationPrompt}</span><textarea id="cw-c2-reformulation" rows={3} value={decision.reformulation??''} onChange={event=>update('reformulation',event.target.value)}/></label>
      <p className="cw-c2-note">Anota tu propuesta en una frase y defiéndela en voz alta. Después decide sobre esa formulación.</p>
      <label htmlFor="cw-c2-condition"><span>Si tu decisión es condicional, ¿qué condición concreta debe cumplirse?</span><textarea id="cw-c2-condition" rows={2} value={decision.condition??''} onChange={event=>update('condition',event.target.value)}/></label>
      <div className="cw-final-choices">{([{choice:'yes',label:'Eliminar al final'},{choice:'no',label:'Conservar al final'},{choice:'conditional',label:'Decisión condicional'}] as const).map(({choice,label})=><button key={choice} disabled={!decision.reformulation?.trim()||(choice==='conditional'&&!decision.condition?.trim())} aria-pressed={decision.final===choice} onClick={()=>vote(choice)}>{label}</button>)}</div>
      {completedC2Decision(decision)&&<p className="cw-verdict">Decisión final: <strong>{voteLabel(decision.final)}</strong>. {decision.final==='conditional'&&decision.condition} Explica qué cambió al precisar la propuesta.</p>}
    </>}
  </div>;
}

export function c2Closing({machine,rounds,rules,decisions,opened,guide,closing,finale,update,open,go}:{machine:boolean;rounds:WorldElimination[];rules:WorldRule[];decisions:Record<string,WorldDecision>;opened:Record<string,number>;guide:WorldGuide;closing:string[];finale:C2Finale;update:(field:Exclude<keyof C2Finale,'open'>,value:string)=>void;open:(value:boolean)=>void;go:(index:number)=>void}) {
  const completed=rounds.filter(round=>completedC2Decision(decisions[round.id]));
  const explored=rules.filter(rule=>opened[rule.id]===3);
  const roles=machineRoles.map(role=>({...role,round:completed.find(round=>round.id===finale[role.key]&&eligibleC2Role(role.key,decisions[round.id]))}));
  const selected=roles.flatMap(role=>role.round?[role.round]:[]);
  const chosenRule=explored.find(rule=>rule.id===finale.law);
  const proposition=selected.find(round=>round.id===finale.proposition);
  const ready=machine ? roles.every(role=>role.round)&&new Set(selected.map(round=>round.id)).size===3&&!!proposition&&[finale.rewrite,finale.improvement].every(text=>text.trim()) : !!chosenRule&&[finale.diagnosis,finale.rewrite,finale.edgeOne,finale.edgeTwo,finale.limitation].every(text=>text.trim())&&distinctText(finale.edgeOne)!==distinctText(finale.edgeTwo);
  const fields=machine ? [{key:'rewrite',label:'Reescribe la propuesta seleccionada con más precisión.'},{key:'improvement',label:'¿Por qué mejora la formulación? Señala qué cambia en la decisión.'}] as const : [{key:'diagnosis',label:'¿Qué falla en las palabras de esta ley?'},{key:'rewrite',label:'Di tu nueva versión de la ley.'},{key:'edgeOne',label:'Primer caso límite: ¿cómo se aplica tu revisión y qué resultado da?'},{key:'edgeTwo',label:'Otro caso límite distinto: ¿cómo se aplica y qué resultado da?'},{key:'limitation',label:'¿Qué limitación sigue sin resolverse?'}] as const;
  return <>
    <section className="cw-b2-workshop" aria-label="Recursos para precisar"><details className="cw-help"><summary>Apoyo para reformular <span aria-hidden="true">+</span></summary><div><ul>{guide.moves.map(move=><li key={move}>{move}</li>)}</ul></div></details><details className="cw-help"><summary>Desafío oral <span aria-hidden="true">+</span></summary><div><p>{guide.challenge}</p></div></details></section>
    <section className="cw-c2-closing" aria-labelledby="cw-c2-closing-title"><p className="cw-eyebrow">PARA TERMINAR · 10 MIN</p><h2 id="cw-c2-closing-title" tabIndex={-1}>{guide.closingTitle}</h2><p>{guide.closingTask}</p>
      {finale.open&&ready ? <div className="cw-c2-board" role="region" aria-label="Mi síntesis oral"><h3 id="cw-c2-board-title" tabIndex={-1}>{machine?'Mis categorías, puestas a prueba':'Una ley que resiste dos casos'}</h3>
        {machine ? <><ul>{roles.map(({key,label,round})=>round&&<li key={key}><strong>{label}: {round.title}</strong><p>{voteLabel(decisions[round.id].first)} → {voteLabel(decisions[round.id].final)}</p><p>{decisions[round.id].reformulation}</p>{decisions[round.id].final==='conditional'&&<p>Condición: {decisions[round.id].condition}</p>}</li>)}</ul><p>Propuesta que revisas: <strong>{proposition?.title}</strong></p></> : <><h4>{chosenRule?.title}</h4><p>{chosenRule?.law}</p></>}
        <dl>{fields.map(({key,label})=><div key={key}><dt>{label}</dt><dd>{finale[key]}</dd></div>)}</dl><ol>{closing.map(prompt=><li key={prompt}>{prompt}</li>)}</ol><button className="cw-primary" onClick={()=>open(false)}>Revisar mi síntesis</button>
      </div> : <>
        <p className="cw-c2-note">Anota ideas breves para hablar; no hace falta redactar un ensayo. Escucha una objeción y responde con tus propias palabras.</p>
        {machine ? <><p role="status">Elige tres rondas cerradas distintas, una para cada papel. Puedes identificar una falsa disyuntiva aunque tu voto final no sea condicional.</p><div className="cw-c2-fields">{machineRoles.map(({key,label})=><label key={key} htmlFor={`cw-c2-${key}`}><span>{label}</span><select id={`cw-c2-${key}`} value={roles.find(role=>role.key===key)?.round?.id??''} onChange={event=>update(key,event.target.value)}><option value="">Elige una decisión que encaje</option>{completed.filter(round=>eligibleC2Role(key,decisions[round.id])).map(round=><option key={round.id} value={round.id} disabled={machineRoles.some(role=>role.key!==key&&finale[role.key]===round.id)}>{round.title}</option>)}</select></label>)}</div>
          <p className="cw-c2-note">¿Ningún caso encaja? No cambies un voto para completar el cierre. Vuelve a una ronda y revisa su definición, o explica oralmente por qué mantienes todas las cosas y deja la síntesis abierta.</p>
          <div className="cw-c2-review">{completed.map(round=><button key={round.id} onClick={()=>go(rounds.indexOf(round))}>Volver a: {round.title}</button>)}</div>
          <label htmlFor="cw-c2-proposition"><span>¿Cuál de las tres propuestas vas a reescribir?</span><select id="cw-c2-proposition" value={proposition?.id??''} onChange={event=>update('proposition',event.target.value)}><option value="">Elige una de tus tres propuestas</option>{selected.filter((round,index,all)=>all.findIndex(other=>other.id===round.id)===index).map(round=><option key={round.id} value={round.id}>{round.title}</option>)}</select></label>
        </> : <label htmlFor="cw-c2-law"><span>Elige una ley cuyas tres preguntas hayas conversado.</span><select id="cw-c2-law" value={chosenRule?.id??''} onChange={event=>update('law',event.target.value)}><option value="">Elige una ley conversada</option>{explored.map(rule=><option key={rule.id} value={rule.id}>{rule.title}</option>)}</select></label>}
        <div className="cw-c2-fields">{fields.map(({key,label})=><label key={key} htmlFor={`cw-c2-${key}`}><span>{label}</span><textarea id={`cw-c2-${key}`} rows={3} value={finale[key]} onChange={event=>update(key,event.target.value)}/></label>)}</div>
        <button className="cw-primary" disabled={!ready} onClick={()=>{if(ready)open(true);}}>Abrir mi síntesis</button>
      </>}
    </section>
  </>;
}
