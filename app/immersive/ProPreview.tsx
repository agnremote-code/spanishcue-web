'use client';
import {useEffect,useRef,useState} from 'react';
import CheckoutButton from '../acceso/CheckoutButton';
import {trackMarketingEvent} from '../marketing/analytics';
import type {ProPreviewFragment} from './google-showcase';

/**
 * Authentic, limited preview of a PRO grammar class. The fragment arrives from
 * the server (one rule, one checked exercise); the student answers, reads the
 * feedback, and the next stages are shown as locked. The purchase opens from
 * here through the official checkout; the rest of the class never loads.
 */
export default function ProPreview({fragment,signedIn,onClose,onBuyClick}:{fragment:ProPreviewFragment;signedIn:boolean;onClose:()=>void;onBuyClick:()=>void}){
 const dialog=useRef<HTMLDialogElement>(null);
 const [picked,setPicked]=useState<number|null>(null);
 const [gate,setGate]=useState(false);
 const correct=picked!==null&&fragment.exercise.answers.includes(picked);
 useEffect(()=>{const d=dialog.current;if(!d)return;if(!d.open)d.showModal();
  trackMarketingEvent('lesson_preview_open',{lesson_id:fragment.id,lesson_title:fragment.title,category:'grammar',access:'pro',placement:'landing_google-teachers_pro_preview'});
 },[fragment.id,fragment.title]);
 useEffect(()=>{if(gate)trackMarketingEvent('premium_gate_view',{zone:fragment.title,placement:'landing_google-teachers_pro_preview',lesson_id:fragment.id});},[gate,fragment.id,fragment.title]);
 return <dialog ref={dialog} className="gt-preview" onClose={onClose} onClick={e=>{if(e.target===dialog.current)onClose();}} aria-label={`Preview of ${fragment.title}`}>
  <div className="gt-preview-body">
   <header className="gt-preview-head">
    <span className="gt-badge pro">PRO PREVIEW</span>
    <div><span className="gt-preview-level">{fragment.level} · {fragment.topic}</span><h3 lang="es">{fragment.title}</h3></div>
    <button type="button" className="gt-preview-x" onClick={onClose} aria-label="Close preview">×</button>
   </header>
   <p className="gt-preview-note">This is the real class, limited to its first rule and one exercise. The remaining stages open with PRO.</p>
   <section className="gt-preview-stage">
    <span className="im-eyebrow">01 · UNDERSTAND</span>
    <h4 lang="es">{fragment.rule.title}</h4>
    <p className="gt-preview-form" lang="es">{fragment.rule.form}</p>
    <p lang="es">{fragment.rule.meaning}</p>
    <ul lang="es">{fragment.rule.examples.map(e=><li key={e}>{e}</li>)}</ul>
   </section>
   <section className="gt-preview-stage" aria-live="polite">
    <span className="im-eyebrow">02 · PRACTISE · ONE QUESTION</span>
    <p className="gt-preview-prompt" lang="es">{fragment.exercise.prompt}</p>
    <div className="gt-preview-options" role="group" aria-label="Answers">
     {fragment.exercise.options.map((option,i)=><button key={option} type="button" lang="es" disabled={picked!==null} className={picked===null?'':fragment.exercise.answers.includes(i)?'right':i===picked?'wrong':''} onClick={()=>setPicked(i)}>{option}</button>)}
    </div>
    {picked!==null&&<p className={`gt-preview-feedback ${correct?'right':'wrong'}`}><b>{correct?'¡Bien!':'Not this time.'}</b> <span lang="es">{fragment.exercise.explanation}</span></p>}
   </section>
   <section className="gt-preview-locked" aria-label="Locked stages">
    {fragment.locked.map((s,i)=><span key={s}><i>{String(i+3).padStart(2,'0')}</i>{s} 🔒</span>)}
   </section>
   {!gate&&<div className="gt-preview-next"><button type="button" className="im-primary" onClick={()=>setGate(true)}>{picked===null?'Skip the question · see what comes next →':'See what comes next →'}</button></div>}
   {gate&&<div className="gt-preview-gate">
    <h4>Ready to teach the full lesson?</h4>
    <p>Unlock the complete class, its {fragment.locked.length} remaining stages, and the rest of SpanishCue.</p>
    <div className="gt-buy gt-buy-stack" onClickCapture={onBuyClick}><CheckoutButton signedIn={signedIn} returnTo={fragment.path} variant="landing" paddleOnly /></div>
    <button type="button" className="gt-quiet" onClick={onClose}>Continue browsing lessons</button>
   </div>}
  </div>
 </dialog>;
}
