'use client';
import {useEffect,useState} from 'react';
import type {CatalogItem} from './Library';
import {selectNews} from './news-selector.mjs';
import {useI18n} from './i18n/LocaleProvider';
import './new-lessons.css';
export default function NewLessonsBanner({lessons}:{lessons:CatalogItem[]}) {
 const items=selectNews(lessons) as CatalogItem[];const [index,setIndex]=useState(0);const [paused,setPaused]=useState(false);const [reduced,setReduced]=useState(true);const {locale}=useI18n();const es=locale==='es';
 useEffect(()=>{const q=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReduced(q.matches);update();q.addEventListener('change',update);return()=>q.removeEventListener('change',update);},[]);
 useEffect(()=>{if(paused||reduced||items.length<2)return;const timer=setInterval(()=>setIndex(i=>(i+1)%items.length),7000);return()=>clearInterval(timer);},[paused,reduced,items.length]);
 if(!items.length)return null;const lesson=items[index%items.length];
 return <section className="new-lessons" aria-label={es?'Nuevas clases':'New lessons'} onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)}>
  <div className="new-lessons-intro"><span className="new-lessons-badge">{es?'RECIÉN AGREGADO':'JUST ADDED'}</span><h2>{es?'Lo nuevo en SpanishCue':'New in SpanishCue'}</h2><img src="/brand/mascot/pointing.webp" alt="" width="150" height="225"/></div>
  <a className="new-lessons-feature" href={lesson.href}><img className="new-lessons-preview" src={lesson.image} alt="" width="600" height="338"/><div className="new-lessons-copy"><span>{lesson.category} · {lesson.displayLevel||lesson.level}</span><h3>{lesson.title}</h3><p>{lesson.subtitle}</p><strong>{es?'Abrir clase':'Open lesson'} <span aria-hidden="true">↗</span></strong></div></a>
  <div className="new-lessons-controls"><button type="button" aria-label={es?'Novedad anterior':'Previous lesson'} onClick={()=>{setPaused(true);setIndex(i=>(i-1+items.length)%items.length);}}>←</button><span>{index%items.length+1} / {items.length}</span><button type="button" aria-label={es?'Siguiente novedad':'Next lesson'} onClick={()=>{setPaused(true);setIndex(i=>(i+1)%items.length);}}>→</button>{!reduced&&<button type="button" onClick={()=>setPaused(p=>!p)} aria-label={paused?(es?'Reanudar novedades':'Resume rotation'):(es?'Pausar novedades':'Pause rotation')}>{paused?'▶':'Ⅱ'}</button>}</div>
 </section>;
}
