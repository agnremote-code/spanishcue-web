'use client';
import {useEffect,useState} from 'react';
import type {CatalogItem} from './Library';
import {selectNews} from './news-selector.mjs';
import {useI18n} from './i18n/LocaleProvider';
import './new-lessons.css';

export default function NewLessonsBanner({lessons}:{lessons:CatalogItem[]}) {
 const items=selectNews(lessons) as CatalogItem[];const [index,setIndex]=useState(0);const [hovered,setHovered]=useState(false);const [focused,setFocused]=useState(false);const [manuallyPaused,setManuallyPaused]=useState(false);const [reduced,setReduced]=useState(true);const {locale}=useI18n();const es=locale==='es';
 const paused=hovered||focused||manuallyPaused;
 useEffect(()=>{const q=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReduced(q.matches);update();q.addEventListener('change',update);return()=>q.removeEventListener('change',update);},[]);
 useEffect(()=>{if(paused||reduced||items.length<2)return;const timer=setInterval(()=>setIndex(i=>(i+1)%items.length),7000);return()=>clearInterval(timer);},[paused,reduced,items.length]);
 if(!items.length)return null;const lesson=items[index%items.length];
 return <section className="new-lessons" aria-label={es?'Nuevas clases':'New lessons'} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node))setFocused(false);}}>
  <h2 className="new-lessons-heading">{es?'¡NUEVAS CLASES!':'NEW CLASSES!'}</h2>
  <a className="new-lessons-feature" href={lesson.href}><img className="new-lessons-preview" src={lesson.image} alt="" width="600" height="338"/><div className="new-lessons-copy"><span>{lesson.category} · {lesson.displayLevel||lesson.level}</span><h3>{lesson.title}</h3><p>{lesson.subtitle}</p><strong>{es?'Abrir clase':'Open lesson'} <span aria-hidden="true">↗</span></strong></div></a>
  <div className="new-lessons-controls"><button type="button" aria-label={es?'Novedad anterior':'Previous lesson'} onClick={()=>setIndex(i=>(i-1+items.length)%items.length)}>←</button><span aria-live="polite">{String(index%items.length+1).padStart(2,'0')} / {String(items.length).padStart(2,'0')}</span><button type="button" aria-label={es?'Siguiente novedad':'Next lesson'} onClick={()=>setIndex(i=>(i+1)%items.length)}>→</button>{!reduced&&<button type="button" onClick={()=>setManuallyPaused(p=>!p)} aria-label={manuallyPaused?(es?'Reanudar novedades':'Resume rotation'):(es?'Pausar novedades':'Pause rotation')} aria-pressed={manuallyPaused}>{manuallyPaused?'▶':'Ⅱ'}</button>}</div>
 </section>;
}
