'use client';
import {useEffect,useRef,useState,type FormEvent} from 'react';
import {reportCategories} from './contracts';
import './reports.css';
type LessonInfo={id:number;title:string;level:string;levels?:string[];path?:string};
export default function LessonReportPanel({lesson,signedIn,inline=false}:{lesson:LessonInfo;signedIn:boolean;inline?:boolean}) {
 const dialog=useRef<HTMLDialogElement>(null);const lastContext=useRef<Record<string,string>>({});const [context,setContext]=useState<Record<string,string>>({});const [level,setLevel]=useState(lesson.level);const [message,setMessage]=useState('');const [category,setCategory]=useState('');const [busy,setBusy]=useState(false);const [success,setSuccess]=useState(false);const [error,setError]=useState('');const urlRef=useRef('');
 useEffect(() => {
  const track = (event: Event) => {
   const el = event.target instanceof Element ? event.target : null;
   if (!el || el.closest('.lesson-report')) return;
   const identified = el.closest<HTMLElement>('[data-activity-id],[data-question-id],[data-section-id],[data-block-id]');
   const section = el.closest<HTMLElement>('section[id],article[id],[role="tabpanel"][id]');
   const label = section?.querySelector('h2,h3')?.textContent?.trim().slice(0,200);
   lastContext.current = {
    ...(identified?.dataset.activityId ? {activityId:identified.dataset.activityId} : {}),
    ...(identified?.dataset.questionId ? {questionId:identified.dataset.questionId} : {}),
    ...(identified?.dataset.sectionId ? {sectionId:identified.dataset.sectionId} : section?.id ? {sectionId:section.id} : {}),
    ...(identified?.dataset.blockId ? {blockId:identified.dataset.blockId} : {}),
    ...(label ? {sectionLabel:label} : {}),
   };
  };
  document.addEventListener('click',track,true);
  return () => document.removeEventListener('click',track,true);
 },[lesson.id]);
 function open(){const url=new URL(window.location.href);const requested=url.searchParams.get('level');const selected=document.querySelector('[aria-checked="true"][data-level], [aria-pressed="true"][data-level], [role="tab"][aria-selected="true"][data-level]')?.getAttribute('data-level');const nextLevel=requested||selected||lesson.level;setLevel((lesson.levels||[lesson.level]).includes(nextLevel)?nextLevel:lesson.level);if(inline)url.searchParams.set('lessonId',String(lesson.id));urlRef.current=url.pathname+url.search+url.hash;const visible=Array.from(document.querySelectorAll<HTMLElement>('[data-activity-id]')).find(el=>{const r=el.getBoundingClientRect();return r.width>0&&r.height>0&&r.bottom>0&&r.top<window.innerHeight;});const section=visible?.closest<HTMLElement>('[data-section-id]');setContext({...lastContext.current,...(visible?.dataset.activityId?{activityId:visible.dataset.activityId}:{}),...(section?.dataset.sectionId?{sectionId:section.dataset.sectionId}:{}),viewport:`${window.innerWidth}×${window.innerHeight}`,userAgent:navigator.userAgent.slice(0,200)});setError('');setSuccess(false);dialog.current?.showModal();}
 async function submit(event:FormEvent){event.preventDefault();if(busy)return;setBusy(true);setError('');try{const response=await fetch('/api/lesson-reports',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({lessonId:lesson.id,message,category,level,url:urlRef.current,context})});const data=await response.json() as {error?:string};if(!response.ok)throw new Error(data.error||'No pudimos enviar el reporte.');setSuccess(true);setMessage('');setCategory('');}catch(err){setError(err instanceof Error?err.message:'No pudimos enviar el reporte. Intentá nuevamente.');}finally{setBusy(false);}}
 return <div className={`lesson-report ${inline?'lesson-report-inline':''}`}><button type="button" className="report-trigger" onClick={open}>⚑ Reportar un problema</button><dialog ref={dialog} className="report-dialog" onCancel={event=>{if(busy)event.preventDefault();}} aria-labelledby={`report-title-${lesson.id}`}><button type="button" className="report-close" aria-label="Cerrar reporte" disabled={busy} onClick={()=>dialog.current?.close()}>×</button><p className="report-kicker">AYUDANOS A MEJORAR</p><h2 id={`report-title-${lesson.id}`}>Reportar un problema</h2><p className="report-context">{lesson.title} · {level}{context.sectionLabel?` · ${context.sectionLabel}`:''}</p>{!signedIn?<p>Ingresá para enviar tu reporte. <a href={`/ingresar?modo=entrar&returnTo=${encodeURIComponent(lesson.path||'/')}`}>Ingresar →</a></p>:success?<div className="report-success" role="status"><strong>Gracias. Lo vamos a revisar.</strong><button type="button" onClick={()=>dialog.current?.close()}>Listo</button></div>:<form onSubmit={submit}><label htmlFor={`report-message-${lesson.id}`}>¿Qué encontraste?</label><textarea autoFocus id={`report-message-${lesson.id}`} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Contanos qué está mal o qué mejorarías…" minLength={3} maxLength={2000} required rows={5}/><label htmlFor={`report-category-${lesson.id}`}>Categoría <span>(opcional)</span></label><select id={`report-category-${lesson.id}`} value={category} onChange={e=>setCategory(e.target.value)}><option value="">Elegir categoría</option>{reportCategories.map(c=><option key={c}>{c}</option>)}</select><p className="report-help">La clase y el contexto se adjuntan automáticamente.</p>{error&&<p role="alert" className="report-error">{error}</p>}<button className="report-submit" type="submit" disabled={busy||message.trim().length<3}>{busy?'Enviando…':'Enviar reporte'}</button></form>}</dialog></div>;
}
