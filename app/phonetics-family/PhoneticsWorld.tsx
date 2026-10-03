"use client";
import {useEffect,useReducer,useState} from 'react';
import Link from 'next/link';
import LevelPicker from './LevelPicker';
import ActivityCard from './ActivityCard';
import SpeechAttempt from './SpeechAttempt';
import StudioGuide from './StudioGuide';
import MascotGuide from './MascotGuide';
import {attemptFor,initialState,levelUrl,reduce,resolveLevel} from './state.mjs';
import type {WorldDefinition} from './types';
import './phonetics-world.css';
export default function PhoneticsWorld({definition:d}:{definition:WorldDefinition}) {
 const [state,dispatch]=useReducer(reduce,undefined,()=>initialState());
 const [epoch,setEpoch]=useState(0);
 const [hydrated,setHydrated]=useState(false);
 useEffect(()=>{
  const sync=()=>{let saved=null;try{saved=localStorage.getItem(`${d.id}:level`);}catch{/* optional preference */}dispatch({type:'level',level:resolveLevel(new URLSearchParams(location.search).get('level'),saved)});};
  // Restore browser URL/storage only after hydration; this is external-store synchronization.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  sync();setHydrated(true);window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync);
 },[d.id]);
 const changeLevel=(level:string)=>{dispatch({type:'level',level});try{localStorage.setItem(`${d.id}:level`,level);}catch{/* private browsing */}window.history.replaceState(null,'',levelUrl(window.location.href,level));};
 const c=d.contentFor(state.level);
 const route=[{id:'entry',name:'Entrada',minutes:0},...c.route];
 const stageIndex=route.findIndex(s=>s.id===state.stage);
 const stageItems=c.activities.filter(a=>a.stage===state.stage&&(state.optional?a.optional:!a.optional));
 const activity=stageItems[state.item]??stageItems[0];
 const key=activity?`${state.level}/${activity.id}`:'';
 const coreKeys=new Set(c.activities.filter(a=>!a.optional).map(a=>`${state.level}/${a.id}`));
 const core=Object.entries(state.attempts).filter(([k])=>coreKeys.has(k)).map(([,v])=>v);
 const go=(stage:string)=>dispatch({type:'stage',stage});
 const next=()=>{if(state.item<stageItems.length-1)dispatch({type:'item',item:state.item+1});else if(stageIndex<route.length-1)go(route[stageIndex+1].id);};
 const completed=(stage:string)=>{if(stage==='final')return attemptFor(state,`${state.level}/final`).produced;const items=c.activities.filter(a=>!a.optional&&a.stage===stage);return items.length>0&&items.every(a=>{const at=attemptFor(state,`${state.level}/${a.id}`);if(d.id==='hablar-sin-cortar'||['repeat','transfer'].includes(a.kind))return at.produced;if(!at.checked)return false;if(a.kind==='group')return true;if(a.options)return at.selected[0]===a.answer;const selected=a.kind==='rebuild'?at.selected:[...at.selected].sort((x,y)=>x-y);const target=a.kind==='rebuild'?a.target??[]:[...(a.target??[])].sort((x,y)=>x-y);return selected.length===target.length&&selected.every((v,i)=>v===target[i]);});};
 const reset=()=>{dispatch({type:'reset'});setEpoch(e=>e+1);};
 return <main className="pf-world" data-lesson={d.id} data-section-id={state.stage} data-level={state.level}>
  <header className="pf-top"><Link href="/" className="pf-brand">SPANISH<span>CUE</span><small>← Biblioteca</small></Link><span className="pf-top-title">{d.title}</span><div className="pf-tools"><div className="pf-desktop-picker"><LevelPicker level={state.level} onChange={changeLevel}/></div><div className="pf-mobile-picker"><LevelPicker compact level={state.level} onChange={changeLevel}/></div><button type="button" aria-pressed={state.teacherMode} onClick={()=>dispatch({type:'teacher'})}>Profe</button><button type="button" onClick={reset}>Reiniciar</button></div></header>
  {state.stage==='entry'?<section className="pf-entry" aria-labelledby="pf-title">
   <img className="pf-room" src={d.art} alt={d.artAlt??"Estudio de grabación con paneles de madera, micrófono y auriculares"} width={1672} height={941}/>
   <div className="pf-entry-shade"/>
   {!d.mascotInArt&&(d.mascotPoses?<div className="pf-mascot pf-hero-pose" aria-hidden="true" style={{backgroundImage:`url(${d.mascotPoses})`}}/>:<img className="pf-mascot" src={d.mascot} alt="" width={1024} height={1536}/>)}
   <div className="pf-entry-copy"><p className="pf-eyebrow">FONÉTICA · A1–C2 · {d.studioLabel??"ESTUDIO 01"}</p><h1 id="pf-title">{d.title}</h1><p className="pf-tagline">{d.tagline}</p><p className="pf-lede">{d.description}</p>
    <LevelPicker level={state.level} onChange={changeLevel}/><div className="pf-level-info" aria-live="polite"><b>{state.level} · {c.name}</b><p>{c.objective}</p><small>{c.demand}</small></div>
    <button type="button" className="pf-primary pf-start" disabled={!hydrated} onClick={()=>go('listen')}>Entrar al estudio <span>↗</span></button><p className="pf-duration">45–55 min por nivel · clase con tu profe</p><p className="pf-warmup"><b>Antes de entrar</b> {c.warmup}</p>
   </div>
  </section>:<div className="pf-workspace">
   <nav className="pf-route" aria-label="Etapas de la clase">{route.map((s,i)=><button key={s.id} type="button" data-completed={completed(s.id)} aria-label={`${s.name}${completed(s.id)?", práctica completada":i===stageIndex+1?", siguiente etapa":""}`} aria-current={state.stage===s.id?'step':undefined} onClick={()=>go(s.id)}><span>{completed(s.id)?'✓':String(i).padStart(2,'0')}</span><b>{s.name}</b>{s.minutes>0&&<small>≈ {s.minutes} min</small>}</button>)}</nav>
   <div className="pf-main"><div className="pf-section-head"><div><p className="pf-eyebrow">{state.level} · {c.name}</p><h2>{route[stageIndex]?.name}</h2></div><span className="pf-session">{stageIndex} / {route.length-1} · EN EL ESTUDIO</span></div>
    {d.guide&&<MascotGuide guide={d.guide} phase={state.stage==='final'?(attemptFor(state,`${state.level}/final`).produced?'complete':'produce'):attemptFor(state,key).produced?'complete':attemptFor(state,key).checked?'react':attemptFor(state,key).heard.length||attemptFor(state,key).assisted?'produce':'listen'}/>}
    {state.stage==='final'?<section className="pf-final" style={{backgroundImage:`linear-gradient(90deg,#f2ecdfFA,#f2ecdfEB),url(${d.art})`}}><div className="pf-task-heading"><div><p className="pf-eyebrow">LA ÚLTIMA TOMA · TU VOZ</p><h2>{c.final.prompt}</h2></div>{!d.guide&&<StudioGuide definition={d} state={attemptFor(state,`${state.level}/final`).produced?'success':'guide'}/>}</div><ol>{c.final.steps.map(s=><li key={s}>{s}</li>)}</ol><button type="button" onClick={()=>dispatch({type:'support',key:`${state.level}/final`})}>{attemptFor(state,`${state.level}/final`).revealed?'Ocultar apoyo':'Apoyo para preparar tu intervención'}</button>{attemptFor(state,`${state.level}/final`).revealed&&<p className="pf-model">{c.final.support}</p>}{attemptFor(state,`${state.level}/final`).assisted&&<p className="pf-help-label">Producción preparada con apoyo de texto.</p>}<p className="pf-muted">Prueba → escucha una sugerencia → vuelve a decirlo.</p>{state.teacherMode&&<fieldset className="pf-rubric"><legend>Observación manual del profe</legend>{c.final.criteria.map((text,i)=><label key={text}><input type="checkbox" checked={state.observations.includes(i)} onChange={()=>dispatch({type:'observe',index:i})}/>{text}</label>)}<small>{d.id==='hablar-sin-cortar'?'Marca solo lo observado. La muestra grabada no se guarda en D1; el análisis automático no evalúa este desafío abierto.':'Marca solo lo observado. No se analiza, graba ni guarda la voz.'}</small></fieldset>}{d.id==='hablar-sin-cortar'?<><p className="pf-muted">Graba hasta 30 segundos de tu entrega. Continúa el desafío completo con tu profe.</p><SpeechAttempt key={`${epoch}/${state.level}/final`} level={state.level} activityId="final" teacher={state.teacherMode} text={c.final.prompt} produced={attemptFor(state,`${state.level}/final`).produced} onComplete={()=>{if(!attemptFor(state,`${state.level}/final`).produced)dispatch({type:'produce',key:`${state.level}/final`});}}/></>:<button type="button" className="pf-primary" aria-pressed={attemptFor(state,`${state.level}/final`).produced} onClick={()=>dispatch({type:'produce',key:`${state.level}/final`})}>{attemptFor(state,`${state.level}/final`).produced?'✓ Producción final realizada':'Ya hice mi última toma'}</button>}{attemptFor(state,`${state.level}/final`).produced&&<div className="pf-completion" role="status"><span aria-hidden="true">✓</span><h3>Una toma más. Una voz más tuya.</h3><p>Práctica completada. Tu profe te ayuda a elegir qué seguir trabajando.</p><button type="button" onClick={()=>go('entry')}>Volver al estudio</button></div>}</section>:activity&&<>
     <div className="pf-itembar"><span>{d.id==='hablar-sin-cortar'?'PRÁCTICA':state.optional?'Banco opcional':'Ruta central'} · {state.item+1}/{stageItems.length}</span>{c.activities.some(a=>a.stage===state.stage&&a.optional)&&<button type="button" aria-pressed={state.optional} onClick={()=>dispatch({type:'bank'})}>{state.optional?'Volver a la ruta central':'Abrir banco opcional'}</button>}</div>
     <ActivityCard key={`${epoch}/${key}`} activity={activity} attempt={attemptFor(state,key)} definition={d} level={state.level} teacher={state.teacherMode} onNext={next} onAction={action=>dispatch({...action,key})}/>
     {d.id!=='hablar-sin-cortar'&&<div className="pf-item-nav"><button type="button" disabled={state.item===0} onClick={()=>dispatch({type:'item',item:state.item-1})}>← Actividad anterior</button><button type="button" disabled={state.item>=stageItems.length-1} onClick={()=>dispatch({type:'item',item:state.item+1})}>Siguiente actividad →</button></div>}
    </>}
    <footer className="pf-stage-footer"><button type="button" onClick={()=>go(route[Math.max(0,stageIndex-1)].id)}>← Etapa anterior</button>{stageIndex<route.length-1&&<button type="button" className="pf-primary" onClick={()=>go(route[stageIndex+1].id)}>Seguir: {route[stageIndex+1].name} →</button>}</footer>
    {state.teacherMode&&<p className="pf-progress">Ruta central: {core.filter(a=>a.heard.length).length}/{coreKeys.size} actividades con audio terminado · {core.filter(a=>a.checked).length} respuestas revisadas · {core.filter(a=>a.produced).length} producciones marcadas. Visitar o reproducir no prueba dominio.</p>}
   </div>
  </div>}
  {state.teacherMode&&<aside className="pf-teacher"><h2>Guía del profe · {state.level}</h2>{d.guide&&<MascotGuide guide={d.guide} phase="teacher"/>}<p>{c.teacher}</p><div className="pf-guide-grid"><div><h3>Recorrido orientativo</h3><ol>{c.route.map(s=><li key={s.id}>{s.minutes} min · {s.name}</li>)}</ol><p>{c.route.reduce((sum,stage)=>sum+stage.minutes,0)} min estimados con repeticiones, turnos, reformulación y devolución. No hace falta completar el banco opcional.</p></div><div><h3>Qué no sobrecorregir</h3><p>{c.avoid}</p><h3>Extensión</h3><p>{c.extension}</p></div></div><p>{d.audioNotice}</p><p>Las respuestas y observaciones duran esta visita. Al cambiar de nivel se conservan la etapa y el modo profe; se borran los intentos y observaciones. Solo se recuerda el nivel en este dispositivo. {d.id==='hablar-sin-cortar'?'La grabación queda temporalmente en el navegador para reproducir este intento; si hay STT, se envía a Microsoft y no se guarda en D1.':'No se graba, sube, analiza ni guarda la voz.'}</p></aside>}
 </main>;
}
