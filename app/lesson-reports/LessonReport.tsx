'use client';
import {useEffect,useId,useRef,useState} from 'react';
import {useI18n} from '../i18n/LocaleProvider';
import {contextFromElement,visibleReportElement} from './context';
import {reportCategories,type ReportCategory,type ReportContext} from './contracts';
import './reports.css';
import {submissionIdentity,type SubmissionIdentity} from './submission';
export type ReportLesson = {id:number;title:string;level:string;levels?:string[];path?:string};
const labels:Record<ReportCategory,[string,string]>={text:['Texto','Text'],answer:['Respuesta','Answer'],audio:['Audio','Audio'],image:['Imagen','Image'],instruction:['Instrucción','Instruction'],technical:['Problema técnico','Technical issue'],suggestion:['Sugerencia','Suggestion'],other:['Otro','Other']};

export default function LessonReport({lesson,signedIn,inline=false}:{lesson:ReportLesson;signedIn:boolean;inline?:boolean}) {
  const {locale}=useI18n(),es=locale==='es';
  const dialog=useRef<HTMLDialogElement>(null),launcher=useRef<HTMLButtonElement>(null),lastElement=useRef<Element|null>(null);
  const submission=useRef<SubmissionIdentity|null>(null),inFlight=useRef(false),mounted=useRef(true);
  const titleId=useId(),inputId=useId();
  const [open,setOpen]=useState(false),[message,setMessage]=useState(''),[category,setCategory]=useState<ReportCategory>('other'),[context,setContext]=useState<ReportContext>({}),[state,setState]=useState<'editing'|'sending'|'success'>('editing'),[error,setError]=useState('');
  useEffect(()=>{mounted.current=true;return()=>{mounted.current=false}},[]);
  useEffect(()=>{
    const remember=(event:Event)=>{const target=event.target;if(target instanceof Element&&!target.closest('[data-report-ui]'))lastElement.current=target};
    document.addEventListener('pointerdown',remember,true);document.addEventListener('focusin',remember,true);
    return()=>{document.removeEventListener('pointerdown',remember,true);document.removeEventListener('focusin',remember,true)};
  },[]);
  useEffect(()=>{
    if(open){dialog.current?.showModal();dialog.current?.querySelector('textarea')?.focus();document.body.classList.add('sc-report-open')}
    else{dialog.current?.close();document.body.classList.remove('sc-report-open')}
    return()=>document.body.classList.remove('sc-report-open');
  },[open]);
  const close=()=>{if(inFlight.current)return;setOpen(false);launcher.current?.focus()};
  const begin=()=>{
    const previous=lastElement.current;
    const visible=previous?.isConnected&&previous.getBoundingClientRect().bottom>0&&previous.getBoundingClientRect().top<window.innerHeight?previous:visibleReportElement();
    const observed=contextFromElement(visible);
    // Prefer the current lesson renderer level, then its existing selected level picker.
    const currentLevel=document.querySelector('[data-report-level]')?.getAttribute('data-report-level')||document.querySelector('[data-level][aria-checked="true"]')?.getAttribute('data-level')||new URLSearchParams(window.location.search).get('level');
    const picked=observed.level||currentLevel||lesson.level;
    setContext({...observed,level:(lesson.levels||[lesson.level]).includes(picked)?picked:lesson.level,routePath:window.location.pathname,pageUrl:window.location.href,viewport:{width:window.innerWidth,height:window.innerHeight}});
    if(state==='success'){setMessage('');setCategory('other');setState('editing');submission.current=null}
    setError('');setOpen(true);
  };
  const send=async(event:React.FormEvent)=>{
    event.preventDefault();if(inFlight.current)return;
    if(message.trim().length<5){setError(es?'Contanos un poquito más (al menos 5 caracteres).':'Tell us a little more (at least 5 characters).');return}
    inFlight.current=true;setState('sending');setError('');
    const payload={lessonId:lesson.id,message:message.trim(),category,context};
    submission.current=submissionIdentity(submission.current,payload);
    try {
      const response=await fetch('/api/lesson-reports',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...payload,requestKey:submission.current.key})});
      const body=await response.json().catch(()=>({})) as {error?:string;id?:string};
      if(!response.ok)throw new Error(body.error||(es?'No pudimos guardarlo. Probá de nuevo.':'We couldn’t save it. Please try again.'));
      if(mounted.current)setState('success');
    }catch(caught){if(mounted.current){setState('editing');setError(caught instanceof Error?caught.message:(es?'No hay conexión. Tu texto sigue acá.':'Connection failed. Your draft is still here.'))}}
    finally{inFlight.current=false};
  };
  return <div className={`sc-report ${inline?'sc-report-inline':'sc-report-floating'}`} data-report-ui>
    <button ref={launcher} className="sc-report-launcher" type="button" onClick={begin} aria-haspopup="dialog"><span aria-hidden="true">⚑</span><span>{es?'¿Algo para mejorar?':'Something to improve?'}</span></button>
    <dialog ref={dialog} className="sc-report-dialog" aria-labelledby={titleId} onCancel={event=>{event.preventDefault();close()}} onClick={event=>{if(event.target===dialog.current){const r=dialog.current.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close()}}} onKeyDown={event=>event.stopPropagation()} onClose={()=>{setOpen(false);launcher.current?.focus()}}>
      <div className="sc-report-topline"><span>SPANISHCUE · {es?'MEJORAMOS JUNTOS':'BETTER TOGETHER'}</span><button type="button" onClick={close} disabled={state==='sending'} aria-label={es?'Cerrar reporte':'Close report'}>×</button></div>
      {state==='success'?<div className="sc-report-success" role="status"><div className="sc-report-success-art"><span aria-hidden="true">✓</span><img src="/brand/mascot/standing-crossed.webp" alt="" width="900" height="1350"/></div><h2 id={titleId}>{es?'Gracias por mirar de cerca.':'Thanks for taking a closer look.'}</h2><p>{es?'Tu reporte ya quedó registrado. Lo vamos a revisar.':'Your report is saved. We’ll review it.'}</p><button className="sc-report-primary" type="button" onClick={close}>{es?'Volver a la clase':'Back to the lesson'}</button></div>:<>
        <h2 id={titleId}>{es?'Tu mirada mejora esta clase.':'Your feedback makes this lesson better.'}</h2>
        <div className="sc-report-location"><span>{lesson.title}</span><small>{context.level||lesson.level}{context.locationLabel?` · ${context.locationLabel}`:''}</small></div>
        {!signedIn?<div className="sc-report-signin"><p>{es?'Ingresá para dejar tu reporte.':'Sign in to leave your report.'}</p><a className="sc-report-primary" href={`/ingresar?modo=entrar&returnTo=${encodeURIComponent(lesson.path||`/clase/${lesson.id}`)}`}>{es?'Ingresar':'Sign in'} ↗</a></div>:<form onSubmit={send}>
          <label className="sc-report-label" htmlFor={inputId}>{es?'¿Qué encontraste?':'What did you find?'}</label>
          <textarea id={inputId} value={message} onChange={event=>setMessage(event.target.value)} maxLength={3000} required disabled={state==='sending'} placeholder={es?'Contanos qué está mal o qué mejorarías…':'Tell us what’s wrong or what you’d improve…'} aria-describedby={error?`${inputId}-error`:undefined} aria-invalid={!!error} autoFocus/>
          <div className="sc-report-fields"><label>{es?'Tipo (opcional)':'Type (optional)'}<select value={category} onChange={event=>setCategory(event.target.value as ReportCategory)} disabled={state==='sending'}>{reportCategories.map(value=><option key={value} value={value}>{labels[value][es?0:1]}</option>)}</select></label><small>{message.length}/3000</small></div>
          {error&&<p className="sc-report-error" id={`${inputId}-error`} role="alert">{error}</p>}
          <div className="sc-report-bottom"><small>{es?'La ubicación se agrega sola.':'Location is added automatically.'}</small><button className="sc-report-primary" type="submit" disabled={state==='sending'}>{state==='sending'?(es?'Guardando…':'Saving…'):(es?'Enviar reporte':'Send report')} <span aria-hidden="true">↗</span></button></div>
        </form>}
      </>}
    </dialog>
  </div>;
}
