'use client';
import {useState} from 'react';
import {practice} from './practice-data';
import {worlds} from './data';
export type PracticeMode='explore'|'recall'|'later'|'close';
type Props={worldId:string;mode:PracticeMode;setMode:(mode:PracticeMode)=>void;onReset?:()=>void};
export function ArgentoPractice({worldId,mode,setMode,onReset}:Props){
 const [answers,setAnswers]=useState<Record<string,{option:number;checked:boolean}>>({});
 const [tasks,setTasks]=useState<string[]>([]);
 const [saved,setSaved]=useState<Record<string,number>>({});
 const [reviewed,setReviewed]=useState<string[]>([]);
 const [laterId,setLaterId]=useState<string|null>(null);
 const [help,setHelp]=useState(false);
 const [closed,setClosed]=useState(false);
 const active=practice[worldId],answer=answers[worldId];
 const delayed=Object.keys(saved).filter(id=>!reviewed.includes(id)&&tasks.slice(saved[id]).some(task=>task!==id));
 const recall=mode==='later'&&laterId?practice[laterId]:active;
 const enter=(next:PracticeMode)=>{setHelp(false);setClosed(false);setMode(next)};
 const reset=()=>{setAnswers({});setTasks([]);setSaved({});setReviewed([]);setLaterId(null);setHelp(false);setClosed(false);setMode('explore');onReset?.()};
 return <section className="argento-learning" aria-label="Práctica de vocabulario">
  <header><span>VOCABULARIO EN USO</span><h3>{mode==='explore'?'Comprende y elige':mode==='recall'?'Recupera sin mirar':mode==='later'?'Vuelve a usarlo en otra situación':'Cierre: resuelve un intercambio'}</h3></header>
  {mode==='explore'?<>
   <p>Lee estas tres frases y di una con información tuya. Después elige según la situación.</p>
   <dl className="argento-chunks">{active.chunks.map(c=><div key={c.id}><dt>{c.model}</dt><dd>{c.cue}</dd></div>)}</dl>
   <fieldset><legend>{active.choice.prompt}</legend><div className="argento-options">{active.choice.options.map((option,index)=><button key={option} data-action={`choice-${index}`} aria-pressed={answer?.option===index} onClick={()=>setAnswers(old=>({...old,[worldId]:{option:index,checked:false}}))}>{option}</button>)}</div></fieldset>
   <button data-action="check-context" disabled={!answer} onClick={()=>{if(!answer)return;setAnswers(old=>({...old,[worldId]:{...answer,checked:true}}));if(answer.option===active.choice.answer&&!answer.checked)setTasks(old=>[...old,worldId]);}}>Comprobar contexto</button>
   {answer?.checked&&<p role="status"><strong>{answer.option===active.choice.answer?'Contexto resuelto.':'Prueba otra opción.'}</strong> {active.choice.feedback[answer.option]}</p>}
   <div className="argento-practice-actions"><button data-action="start-recall" onClick={()=>enter('recall')}>Ocultar recursos y recordar</button><button data-action="start-close" onClick={()=>enter('close')}>Ir al cierre oral</button></div>
  </>:mode==='close'?<>
   <p>{active.close}</p><p>Haz al menos dos turnos. Usa dos expresiones de este mundo y escucha la respuesta de tu compañero. Las formas neutras también sirven.</p>
   <button data-action="close-help" aria-expanded={help} onClick={()=>setHelp(value=>!value)}>{help?'Ocultar ayuda':'Ayuda: recordar las frases'}</button>
   {help&&active.chunks.map(c=><p key={c.id} data-model>{c.model}</p>)}
   <details><summary>Criterio docente</summary><p>Se comprende la intención, combina palabras en una frase y responde al interlocutor con un registro adecuado. Se aceptan otras formulaciones válidas; no se exige copiar el modelo.</p></details>
   <button data-action="confirm-close" onClick={()=>setClosed(true)}>Docente: intercambio observado</button>{closed&&<p role="status">Intercambio observado. Elige una expresión para volver a usar la próxima clase.</p>}
   <button onClick={()=>enter('explore')}>Volver al mundo</button>
  </>:<>
   {mode==='later'&&<p>Vuelves a {worlds.find(w=>w.id===laterId)?.title} después de responder a una tarea de otro mundo.</p>}
   <p>Responde en voz alta antes de abrir la ayuda. Se ocultan el banco, los modelos y los apoyos de la página. No hace falta repetir exactamente el modelo.</p>
   <ol>{recall.chunks.map(c=><li key={c.id}><p>{mode==='later'?c.later:c.cue}</p>{help&&<div data-model><p><strong>Una posibilidad:</strong> {c.model}</p><p>{c.hint}</p></div>}</li>)}</ol>
   <button data-action={mode==='later'?'later-help':'recall-help'} aria-expanded={help} onClick={()=>setHelp(value=>!value)}>{help?'Ocultar ayuda':'Comparar con una posibilidad'}</button>
   <p>Docente: escucha las tres respuestas. Si falta una combinación, muestra la ayuda y pide otro intento con un detalle distinto.</p>
   {mode==='recall'?<button data-action="save-recall" onClick={()=>{setSaved(old=>({...old,[worldId]:tasks.length}));setReviewed(old=>old.filter(id=>id!==worldId));enter('explore')}}>Docente: registrar intento y volver más tarde</button>:<button data-action="confirm-later" onClick={()=>{if(laterId)setReviewed(old=>[...new Set([...old,laterId])]);enter('explore')}}>Docente: recuperación observada</button>}
   <button onClick={()=>enter('explore')}>Volver a los recursos</button>
  </>}
  {mode==='explore'&&<aside className="argento-return"><h4>Volver más tarde</h4>{delayed.length?delayed.map(id=><button key={id} data-action={`later-${id}`} onClick={()=>{setLaterId(id);enter('later')}}>Recordar {worlds.find(w=>w.id===id)?.title} en otra situación</button>):<p>Después de registrar un intento, resuelve una tarea de contexto de otro mundo. Cambiar de mundo sin responder no activa este retorno.</p>}{reviewed.length>0&&<p role="status">Recuperación observada: {reviewed.map(id=>worlds.find(w=>w.id===id)?.title).join(', ')}.</p>}</aside>}
  <details className="argento-session"><summary>Sesión y reinicio</summary><p>Los intentos y observaciones duran solo mientras esta página está abierta. No son una puntuación automática de tu habla. Reiniciar borra las respuestas de contexto, los retornos pendientes, las observaciones y las marcas personales de la página.</p><button data-action="reset-session" onClick={reset}>Reiniciar práctica y observaciones</button></details>
 </section>;
}
