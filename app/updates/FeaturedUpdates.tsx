'use client';
import { useRef, useState } from 'react';
import { useI18n } from '../i18n/LocaleProvider';
import type { FeaturedUpdate } from './data';
import './updates.css';

export default function FeaturedUpdates({ items }: { items: FeaturedUpdate[] }) {
  const { locale } = useI18n();
  const es = locale === 'es';
  const [index, setIndex] = useState(0);
  const touch = useRef<{x:number;y:number}|null>(null);
  const selected = Math.min(index, Math.max(items.length-1,0));
  const item = items[selected];
  if (!item) return null;
  const move = (delta:number) => setIndex(current => Math.max(0,Math.min(items.length-1,current+delta)));
  return <section className="sc-updates" aria-roledescription={es?'carrusel':'carousel'} aria-label={es?'Lo nuevo en SpanishCue':'New in SpanishCue'}
    onTouchStart={event=>{const p=event.touches[0];touch.current={x:p.clientX,y:p.clientY}}}
    onTouchEnd={event=>{const p=event.changedTouches[0],start=touch.current;touch.current=null;if(start&&Math.abs(p.clientX-start.x)>55&&Math.abs(p.clientX-start.x)>Math.abs(p.clientY-start.y)*1.5)move(p.clientX<start.x?1:-1)}}>
    <div className="sc-updates-heading"><div><span className="sc-updates-dot"/>{es?'SIEMPRE ALGO NUEVO':'ALWAYS SOMETHING NEW'}</div><span>{String(selected+1).padStart(2,'0')} <i>/ {String(items.length).padStart(2,'0')}</i></span></div>
    <div className="sc-update-slide" aria-live="polite" aria-atomic="true">
      <div className="sc-update-copy" key={item.id}>
        <p className="sc-update-eyebrow">{item.kind==='new'?(es?'RECIÉN AGREGADO':'JUST ADDED'):item.kind==='featured'?(es?'PARA TU PRÓXIMA CLASE':'FOR YOUR NEXT CLASS'):(es?'NOVEDAD':'WHAT’S NEW')}</p>
        <h2>{item.title}</h2>
        {(item.category||item.level)&&<p className="sc-update-meta">{item.category}<span>·</span>{item.level}</p>}
        <p className="sc-update-description">{item.copy}</p>
        <a className="sc-update-cta" href={item.href}>{item.lessonId?(es?'Explorar clase':'Explore lesson'):(es?'Descubrir':'Discover')} <span aria-hidden="true">↗</span></a>
      </div>
      <div className="sc-update-visual">
        {item.image&&<img key={item.image} className="sc-update-preview" src={item.image} alt="" width="960" height="640" loading="eager" decoding="async"/>}
        <div className="sc-update-caption" aria-hidden="true"><span>{es?'TU PRÓXIMA CLASE, LISTA.':'YOUR NEXT LESSON, READY.'}</span></div>
        <img className="sc-update-mascot" src="/brand/mascot/pointing.webp" width="900" height="1350" alt="" aria-hidden="true" decoding="async"/>
      </div>
    </div>
    {items.length>1&&<div className="sc-update-controls"><span>{es?'Lo nuevo en SpanishCue':'New in SpanishCue'}</span><div className="sc-update-dots">{items.map((entry,i)=><button key={entry.id} type="button" aria-label={`${es?'Ver':'View'} ${entry.title}`} aria-pressed={selected===i} onClick={()=>setIndex(i)}><span/></button>)}</div><div className="sc-update-arrows"><button type="button" onClick={()=>move(-1)} disabled={selected===0} aria-label={es?'Novedad anterior':'Previous update'}>←</button><button type="button" onClick={()=>move(1)} disabled={selected===items.length-1} aria-label={es?'Siguiente novedad':'Next update'}>→</button></div></div>}
  </section>;
}
