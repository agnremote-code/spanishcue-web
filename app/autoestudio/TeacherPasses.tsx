"use client";
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { shareMessage } from './share-messages';
import type { ModuleProgress, ProgressState } from './progress/model';
import { levelProgress, levelWeekIds, moduleStatus, pendingSections, REQUIRED_SECTIONS, requiredSectionsDone, WEEKS_PER_LEVEL } from './progress/model';
import type { SectionKey } from './curriculum/types';
import './teacher-passes.css';
import { sectionLabels } from './engine/copy';

type Summary={started:number;completed:number;inProgress?:number;percent:number;sectionsCompleted?:number;sectionsTotal?:number;coursePercent?:number;lastModule:string|null;lastSection?:SectionKey|null;lastModuleSections?:number;lastActivity:string|null};
type Pass={id:string;learnerId:string|null;level:string;revision:number;revokedAt:string|null;createdAt:string;alias:string|null;summary?:Summary|null};
type Learner={id:string;alias:string|null;createdAt:string};
type Detail={learner:Learner;passes:Pass[];progress:ProgressState};
type DetailState={status:'loading'}|{status:'error';message:string}|{status:'ready';data:Detail};

const levels=['a1','a2','b1','b2','c1','c2'];
const labels=sectionLabels.es;
const REQUIRED=REQUIRED_SECTIONS.length;
const ACTIVE_DAYS=7;

/** Every failure becomes a readable message: HTML error pages, network errors and empty bodies included. */
async function api<T>(path:string,body?:unknown):Promise<T>{
  let r:Response;
  try{r=await fetch(`/api/autoestudio/${path}`,{method:body?'POST':'GET',cache:'no-store',credentials:'same-origin',...(body?{headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}:{})});}
  catch{throw Error('No hay conexión con SpanishCue. Revisa tu internet y vuelve a intentarlo.');}
  let data:(T&{error?:string})|null=null;
  try{data=await r.json();}catch{/* Non-JSON response, handled below. */}
  if(!r.ok||!data)throw Error(r.status===401?shareMessage('sign_in_required'):shareMessage(data?.error));
  return data;
}
const date=(value?:string|null)=>value?new Date(value).toLocaleString('es',{dateStyle:'short',timeStyle:'short'}):'Sin actividad';
const pct=(value:number)=>`${value.toLocaleString('es',{maximumFractionDigits:1})} %`;
const weekNumber=(moduleId:string)=>Number(moduleId.split('-')[1]);
const daysSince=(value:string)=>Math.floor((Date.now()-new Date(value).getTime())/86_400_000);

type Activity={tone:'active'|'idle'|'none'|'off';text:string};
function activityOf(pass:Pass):Activity{
  if(pass.revokedAt)return {tone:'off',text:'Revocado'};
  if(!pass.alias)return {tone:'none',text:'Enlace sin usar'};
  const last=pass.summary?.lastActivity;
  if(!last)return {tone:'none',text:'Todavía no empezó'};
  const days=daysSince(last);
  if(days<=ACTIVE_DAYS)return {tone:'active',text:days<1?'Estudió hoy':days===1?'Estudió ayer':`Estudió hace ${days} días`};
  return {tone:'idle',text:`Sin actividad hace ${days} días`};
}

export default function TeacherPasses({enabled}:{enabled:boolean}){
  const [passes,setPasses]=useState<Pass[]>([]);const [level,setLevel]=useState('a1');const [busy,setBusy]=useState(false);const [error,setError]=useState('');const [link,setLink]=useState('');const [notice,setNotice]=useState('');const [loading,setLoading]=useState(true);
  const [selected,setSelected]=useState<Pass|null>(null);const [detail,setDetail]=useState<DetailState>({status:'loading'});
  const request=useRef(0);const trigger=useRef<HTMLElement|null>(null);
  const refresh=useCallback(async()=>{const data=await api<{passes:Pass[]}>('passes');setPasses(data.passes);},[]);
  const load=useCallback(()=>{setLoading(true);setError('');api<{passes:Pass[]}>('passes').then(data=>setPasses(data.passes)).catch(e=>setError(e.message)).finally(()=>setLoading(false));},[]);
  useEffect(()=>{if(!enabled)return;let active=true;api<{passes:Pass[]}>('passes').then(data=>{if(active)setPasses(data.passes);}).catch(e=>{if(active)setError(e.message);}).finally(()=>{if(active)setLoading(false);});return()=>{active=false;};},[enabled]);
  async function perform(work:()=>Promise<void>){if(busy)return;setBusy(true);setError('');setNotice('');try{await work();}catch(e){setError(e instanceof Error?e.message:'No pudimos completar la operación.');}finally{setBusy(false);}}
  async function create(learnerId?:string,nextLevel?:string){await perform(async()=>{const data=await api<{link:string}>('passes',{level:nextLevel||level,...(learnerId?{learnerId}:{})});setLink(data.link);setNotice('Acceso creado. Copia el enlace y compártelo únicamente con ese alumno.');await refresh();});}
  async function action(pass:Pass,operation:'copy'|'rotate'|'revoke'){if(operation==='revoke'&&!window.confirm('¿Revocar este acceso? El progreso se conserva.'))return;if(operation==='rotate'&&!window.confirm('¿Regenerar el enlace? El anterior dejará de funcionar. El progreso se conserva.'))return;await perform(async()=>{const data=await api<{link?:string}>(`passes/${pass.id}`,{action:operation});setLink(data.link||'');if(data.link){try{await navigator.clipboard.writeText(data.link);setNotice('Enlace copiado.');}catch{setNotice('Copia el enlace del campo de abajo.');}}else setNotice('Acceso revocado. El progreso se conserva.');await refresh();});}
  async function copy(){try{await navigator.clipboard.writeText(link);setNotice('Enlace copiado.');}catch{setNotice('Selecciona y copia el enlace del campo.');}}

  // The panel opens at once with a loading state; only the newest request may fill it, so
  // clicking several learners in a row never shows a previous learner's data.
  const fetchDetail=useCallback((pass:Pass)=>{
    const id=++request.current;
    setDetail({status:'loading'});
    api<Detail>(`learners/${pass.learnerId}`).then(data=>{if(request.current===id)setDetail({status:'ready',data});}).catch(e=>{if(request.current===id)setDetail({status:'error',message:e instanceof Error?e.message:shareMessage(undefined)});});
  },[]);
  function openProgress(pass:Pass,button:HTMLElement){trigger.current=button;setSelected(pass);fetchDetail(pass);}
  const close=useCallback(()=>{request.current++;setSelected(null);const back=trigger.current;trigger.current=null;window.setTimeout(()=>back?.focus(),0);},[]);

  const duplicateAliases=new Set(passes.map(p=>p.alias).filter((alias,i,all)=>alias&&all.indexOf(alias)!==i));
  const learnersWithAlias=passes.filter(p=>p.alias&&!p.revokedAt);
  const studying=learnersWithAlias.filter(p=>activityOf(p).tone==='active').length;
  const idle=learnersWithAlias.filter(p=>activityOf(p).tone==='idle').length;
  const notStarted=learnersWithAlias.filter(p=>!p.summary?.lastActivity).length;

  return <section className="ae-teacher" aria-labelledby="teacher-autoestudio">
    <header><div><p>AUTOESTUDIO · A1–C2</p><h2 id="teacher-autoestudio">Un enlace. Un alumno. Su progreso.</h2><p>Tu alumno elige un apodo y estudia sin registrarse.</p></div><img src="/brand/mascot/walking.webp" width="600" height="900" alt=""/></header>
    {!enabled?<p>Los accesos para alumnos están incluidos en SpanishCue PRO.</p>:<>
      <div className="ae-create-pass"><label htmlFor="pass-level">Nivel</label><select id="pass-level" value={level} onChange={e=>setLevel(e.target.value)}>{levels.map(id=><option key={id} value={id}>{id.toUpperCase()}</option>)}</select><button type="button" disabled={busy} onClick={()=>void create()}>Crear acceso Autoestudio</button></div>
      <p className="ae-teacher-help">Un enlace por alumno y nivel. Dura hasta que lo revoques. Quien tenga el enlace puede usarlo: compártelo de forma privada.</p>
      {link&&<div className="ae-copy-link"><label htmlFor="share-link">Enlace privado</label><input id="share-link" value={link} readOnly onFocus={e=>e.target.select()}/><button type="button" onClick={()=>void copy()}>Copiar link</button></div>}
      {notice&&<p role="status">{notice}</p>}
      {error&&<p role="alert" className="ae-share-error">{error} <button type="button" onClick={load}>Reintentar</button></p>}
      {loading?<p role="status">Consultando accesos…</p>:passes.length===0?(!error&&<p>Todavía no creaste accesos.</p>):<>
        <ul className="ae-teacher-totals" aria-label="Resumen de tus alumnos">
          <li><b>{learnersWithAlias.length}</b> con apodo</li>
          <li className="is-active"><b>{studying}</b> estudiaron en los últimos {ACTIVE_DAYS} días</li>
          <li className="is-idle"><b>{idle}</b> dejaron de estudiar</li>
          <li><b>{notStarted}</b> todavía no empezaron</li>
        </ul>
        <ul className="ae-pass-list">{passes.map(pass=>{
          const s=pass.summary;const activity=activityOf(pass);const next=levels[levels.indexOf(pass.level)+1];
          return <li key={pass.id}>
            <div>
              <h3>{pass.alias||'Pendiente de elegir apodo'} <span>{pass.level.toUpperCase()}</span></h3>
              {pass.alias&&duplicateAliases.has(pass.alias)&&<small className="ae-pass-id">Alumno distinto con el mismo apodo · ID {pass.learnerId?.slice(0,8)}</small>}
              <p className={`ae-activity is-${activity.tone}`}>{activity.text}</p>
              {s&&<p className="ae-pass-metrics"><span><b>{s.completed}/{WEEKS_PER_LEVEL}</b> semanas completadas</span><span><b>{pct(s.coursePercent??s.percent)}</b> avance del curso</span>{s.sectionsTotal!==undefined&&<span>{s.sectionsCompleted}/{s.sectionsTotal} secciones obligatorias</span>}</p>}
              {s?.lastModule&&<p>Semana actual: {weekNumber(s.lastModule)}{s.lastModuleSections!==undefined?` · ${s.lastModuleSections}/${REQUIRED} secciones`:''}{s.lastSection?` · en ${labels[s.lastSection]}`:''}</p>}
              {s?.lastActivity&&<small>Última actividad: {date(s.lastActivity)}</small>}
            </div>
            <div className="ae-pass-actions">
              {pass.learnerId&&<button type="button" className="ae-view-progress" aria-haspopup="dialog" onClick={e=>openProgress(pass,e.currentTarget)}>Ver progreso</button>}
              {!pass.revokedAt&&<><button type="button" disabled={busy} onClick={()=>void action(pass,'copy')}>Copiar link</button><button type="button" disabled={busy} onClick={()=>void action(pass,'rotate')}>Regenerar link</button><button type="button" disabled={busy} onClick={()=>void action(pass,'revoke')}>Revocar</button></>}
              {pass.learnerId&&next&&<button type="button" disabled={busy} onClick={()=>void create(pass.learnerId!,next)}>Dar acceso a {next.toUpperCase()}</button>}
            </div>
          </li>;})}</ul>
      </>}
      {selected&&<ProgressDialog pass={selected} state={detail} onClose={close} onRetry={()=>fetchDetail(selected)}/>}
    </>}
  </section>;
}

function ProgressDialog({pass,state,onClose,onRetry}:{pass:Pass;state:DetailState;onClose:()=>void;onRetry:()=>void}){
  const closeButton=useRef<HTMLButtonElement>(null);const dialog=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    closeButton.current?.focus();
    const previous=document.body.style.overflow;document.body.style.overflow='hidden';
    const onKey=(e:KeyboardEvent)=>{
      if(e.key==='Escape'){e.preventDefault();onClose();return;}
      if(e.key!=='Tab'||!dialog.current)return;
      const focusable=dialog.current.querySelectorAll<HTMLElement>('button,summary,[href],[tabindex]:not([tabindex="-1"])');
      if(!focusable.length)return;
      const first=focusable[0],last=focusable[focusable.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    };
    document.addEventListener('keydown',onKey);
    return()=>{document.removeEventListener('keydown',onKey);document.body.style.overflow=previous;};
  },[onClose]);
  const name=(state.status==='ready'?state.data.learner.alias:pass.alias)||'Pendiente de elegir apodo';
  const levelsShown=state.status==='ready'?levels.filter(id=>state.data.passes.some(p=>p.level===id)):[pass.level];
  const ordered=[pass.level,...levelsShown.filter(id=>id!==pass.level)];
  // Portaled to <body>: the panel is always over the viewport, never at the end of a long list.
  return createPortal(<div className="ae-progress-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}>
    <div ref={dialog} className="ae-progress-dialog" role="dialog" aria-modal="true" aria-labelledby="ae-progress-title" aria-busy={state.status==='loading'}>
      <div className="ae-detail-title">
        <div><p className="ae-detail-kicker">Seguimiento del alumno</p><h3 id="ae-progress-title">{name} <span>{ordered.map(id=>id.toUpperCase()).join(' · ')}</span></h3></div>
        <button ref={closeButton} type="button" className="ae-detail-close" onClick={onClose}>Cerrar <span aria-hidden="true">✕</span></button>
      </div>
      {state.status==='loading'&&<div className="ae-detail-state" role="status"><span className="ae-spinner" aria-hidden="true"/>Cargando el progreso de {name}…</div>}
      {state.status==='error'&&<div className="ae-detail-state is-error" role="alert"><p>{state.message}</p><button type="button" onClick={onRetry}>Reintentar</button></div>}
      {state.status==='ready'&&<>
        {!state.data.learner.alias&&<p className="ae-detail-state">El alumno todavía no abrió el enlace ni eligió apodo.</p>}
        {ordered.map(id=><LevelDetail key={id} level={id} progress={state.data.progress}/>)}
      </>}
    </div>
  </div>,document.body);
}

const statusText={'not-started':'Sin empezar','in-progress':'En curso','completed':'Completada'} as const;

function LevelDetail({level,progress}:{level:string;progress:ProgressState}){
  const ids=levelWeekIds(level);const p=levelProgress(progress,ids);
  const rows=ids.map(id=>({id,week:weekNumber(id),m:progress.modules[id] as ModuleProgress|undefined,status:moduleStatus(progress,id)}));
  const touched=rows.filter(r=>r.m);
  const latest=touched.reduce<(typeof rows)[number]|null>((best,r)=>!best||(r.m!.updatedAt??r.m!.startedAt)>(best.m!.updatedAt??best.m!.startedAt)?r:best,null);
  const lastActivity=latest?(latest.m!.updatedAt??latest.m!.startedAt):null;
  const quizzes=rows.filter(r=>r.m?.quiz);
  return <section className="ae-level-detail" aria-label={`Nivel ${level.toUpperCase()}`}>
    <h4>Nivel {level.toUpperCase()}</h4>
    <dl className="ae-detail-kpis">
      <div className="is-main"><dt>Avance real del curso</dt><dd>{pct(p.coursePercent)}</dd><small>{p.sectionsCompleted}/{p.sectionsTotal} secciones obligatorias</small><span className="ae-meter" aria-hidden="true"><span style={{width:`${p.coursePercent}%`}}/></span></div>
      <div><dt>Semanas completadas</dt><dd>{p.completed}/{p.total}</dd></div>
      <div><dt>Semanas iniciadas</dt><dd>{p.started}</dd><small>{p.started-p.completed} en curso</small></div>
      <div><dt>Semana actual</dt><dd>{latest?latest.week:'—'}</dd>{latest?.m?.lastSection&&<small>Última sección abierta: {labels[latest.m.lastSection]}</small>}</div>
      <div><dt>Última actividad</dt><dd className="is-date">{date(lastActivity)}</dd></div>
    </dl>
    {!touched.length?<p className="ae-detail-state">Todavía no empezó ninguna semana de {level.toUpperCase()}.</p>:<>
      {latest&&<div className="ae-current-week"><h5>Semana {latest.week}: {requiredSectionsDone(latest.m)}/{REQUIRED} secciones obligatorias</h5><SectionLists m={latest.m}/></div>}
      <div className="ae-quiz-results"><h5>Resultados de quizzes</h5>{quizzes.length?<ul>{quizzes.map(r=><li key={r.id}>Semana {r.week}: <b>{r.m!.quiz!.score}/{r.m!.quiz!.total}</b> · mejor {r.m!.quiz!.best}/{r.m!.quiz!.total} · {r.m!.quiz!.attempts} {r.m!.quiz!.attempts===1?'intento':'intentos'}</li>)}</ul>:<p>Todavía no hizo ningún quiz.</p>}</div>
    </>}
    <h5>Las {ids.length} semanas</h5>
    <ol className="ae-week-progress">{rows.map(r=>{const done=r.status==='completed'?REQUIRED:requiredSectionsDone(r.m);return <li key={r.id} className={`is-${r.status}`}>
      <div className="ae-week-head"><b>Semana {r.week}{r.week%5===0?' · Checkpoint':''}</b><span className={`ae-week-status is-${r.status}`}>{statusText[r.status]}</span></div>
      <span className="ae-meter" aria-hidden="true"><span style={{width:`${done/REQUIRED*100}%`}}/></span>
      <span>{done}/{REQUIRED} secciones obligatorias</span>
      {r.m?.quiz&&<span>Quiz: {r.m.quiz.score}/{r.m.quiz.total}</span>}
      {r.m&&<small>{r.status==='completed'?`Completada el ${date(r.m.completedAt)}`:`Última vez: ${date(r.m.updatedAt??r.m.startedAt)}`}</small>}
      {r.status==='in-progress'&&<details><summary>Ver secciones</summary><SectionLists m={r.m}/></details>}
    </li>;})}</ol>
  </section>;
}

function SectionLists({m}:{m:ModuleProgress|undefined}){
  const pending=pendingSections(m);const done=REQUIRED_SECTIONS.filter(key=>m?.sections[key]);
  return <div className="ae-section-lists"><div><b>Realizadas</b><p>{done.length?done.map(key=>labels[key]).join(' · '):'Ninguna todavía'}</p></div><div><b>Pendientes</b><p>{pending.length?pending.map(key=>labels[key]).join(' · '):'Ninguna'}</p></div></div>;
}
