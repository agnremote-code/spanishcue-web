'use client';
import {useEffect,useRef,useState} from 'react';
import CheckoutButton from '../acceso/CheckoutButton';
import {useI18n} from '../i18n/LocaleProvider';
import {trackMarketingEvent} from '../marketing/analytics';
import {gtCopy} from './google-copy';
import type {ProPreviewFragment} from './google-showcase';

/**
 * Authentic, limited preview of a PRO grammar class. The fragment arrives from
 * the server (one rule, one checked exercise); the student answers, reads the
 * feedback, and the next stages are shown as locked. The purchase opens from
 * here through the official checkout; the rest of the class never loads.
 */
export default function ProPreview({fragment,signedIn,onClose,onBuyClick}:{fragment:ProPreviewFragment;signedIn:boolean;onClose:()=>void;onBuyClick:()=>void}){
 const {locale}=useI18n();const c=gtCopy(locale==='es').preview;
 const dialog=useRef<HTMLDialogElement>(null);
 const [picked,setPicked]=useState<number|null>(null);
 const [gate,setGate]=useState(false);
 const correct=picked!==null&&fragment.exercise.answers.includes(picked);
 // Stage names in the page's language; the fragment carries how many stay locked.
 const locked=c.stages.slice(c.stages.length-fragment.locked.length);
 useEffect(()=>{const d=dialog.current;if(!d)return;if(!d.open)d.showModal();
  trackMarketingEvent('lesson_preview_open',{lesson_id:fragment.id,lesson_title:fragment.title,category:'grammar',access:'pro',placement:'landing_google-teachers_pro_preview'});
 },[fragment.id,fragment.title]);
 useEffect(()=>{if(gate)trackMarketingEvent('premium_gate_view',{zone:fragment.title,placement:'landing_google-teachers_pro_preview',lesson_id:fragment.id});},[gate,fragment.id,fragment.title]);
 return <dialog ref={dialog} className="gt-preview" onClose={onClose} onClick={e=>{if(e.target===dialog.current)onClose();}} aria-label={c.aria(fragment.title)}>
  <div className="gt-preview-body">
   <header className="gt-preview-head">
    <span className="gt-badge pro">{c.badge}</span>
    <div><span className="gt-preview-level">{fragment.level} · {fragment.topic}</span><h3 lang="es">{fragment.title}</h3></div>
    <button type="button" className="gt-preview-x" onClick={onClose} aria-label={c.closeAria}>×</button>
   </header>
   <p className="gt-preview-note">{c.note}</p>
   <section className="gt-preview-stage">
    <span className="im-eyebrow">{c.understand}</span>
    <h4 lang="es">{fragment.rule.title}</h4>
    <p className="gt-preview-form" lang="es">{fragment.rule.form}</p>
    <p lang="es">{fragment.rule.meaning}</p>
    <ul lang="es">{fragment.rule.examples.map(e=><li key={e}>{e}</li>)}</ul>
   </section>
   <section className="gt-preview-stage" aria-live="polite">
    <span className="im-eyebrow">{c.practise}</span>
    <p className="gt-preview-prompt" lang="es">{fragment.exercise.prompt}</p>
    <div className="gt-preview-options" role="group" aria-label={c.answers}>
     {fragment.exercise.options.map((option,i)=><button key={option} type="button" lang="es" disabled={picked!==null} className={picked===null?'':fragment.exercise.answers.includes(i)?'right':i===picked?'wrong':''} onClick={()=>setPicked(i)}>{option}</button>)}
    </div>
    {picked!==null&&<p className={`gt-preview-feedback ${correct?'right':'wrong'}`}><b>{correct?c.right:c.wrong}</b> <span lang="es">{fragment.exercise.explanation}</span></p>}
   </section>
   <section className="gt-preview-locked" aria-label={c.locked}>
    {locked.map((s,i)=><span key={s}><i>{String(i+3).padStart(2,'0')}</i>{s} 🔒</span>)}
   </section>
   {!gate&&<div className="gt-preview-next"><button type="button" className="im-primary" onClick={()=>setGate(true)}>{picked===null?c.skipNext:c.next}</button></div>}
   {gate&&<div className="gt-preview-gate">
    <h4>{c.gateH}</h4>
    <p>{c.gateP(fragment.locked.length)}</p>
    <div className="gt-buy gt-buy-stack" onClickCapture={onBuyClick}><CheckoutButton signedIn={signedIn} returnTo={fragment.path} variant="landing" paddleOnly /></div>
    <button type="button" className="gt-quiet" onClick={onClose}>{c.browse}</button>
   </div>}
  </div>
 </dialog>;
}
