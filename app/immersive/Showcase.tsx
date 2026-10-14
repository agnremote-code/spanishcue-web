'use client';
import {useEffect,useRef,useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {trackMarketingEvent} from '../marketing/analytics';
import type {ShowcaseCategory,ShowcaseItem} from './google-showcase';

type Props={categories:ShowcaseCategory[];pro:boolean;onPreview:(category:ShowcaseCategory['key'],item:ShowcaseItem)=>void;buy:React.ReactNode};

/**
 * Product demos by category: one real recording per tab, the featured lesson
 * and the next samples. The visitor changes the tab; nothing advances by
 * itself. Videos play muted while on screen, pause off screen, and never load
 * before the section is near the viewport.
 */
export default function Showcase({categories,pro,onPreview,buy}:Props){
 const [active,setActive]=useState(0);
 const [near,setNear]=useState(false);
 const [motion,setMotion]=useState(true);
 const host=useRef<HTMLElement>(null);
 const video=useRef<HTMLVideoElement>(null);
 const started=useRef<Set<string>>(new Set());
 const category=categories[active];
 useEffect(()=>{
  const saveData=(navigator as Navigator&{connection?:{saveData?:boolean}}).connection?.saveData;
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setMotion(!matchMedia('(prefers-reduced-motion:reduce)').matches&&!saveData);
  const el=host.current;if(!el)return;
  const observer=new IntersectionObserver(entries=>{if(entries[0]?.isIntersecting){setNear(true);observer.disconnect();}},{rootMargin:'300px'});
  observer.observe(el);return()=>observer.disconnect();
 },[]);
 // Play the active recording only while it is on screen and the tab is visible.
 useEffect(()=>{
  const clip=video.current;if(!clip||!near||!motion)return;
  const play=()=>{void clip.play().then(()=>{const key=category.key;if(!started.current.has(key)){started.current.add(key);trackMarketingEvent('demo_start',{zone:`showcase_${key}`,category:key});}}).catch(()=>{});};
  const observer=new IntersectionObserver(entries=>{if(entries[0]?.isIntersecting&&!document.hidden)play();else clip.pause();},{threshold:.45});
  observer.observe(clip);
  const visibility=()=>{if(document.hidden)clip.pause();};
  document.addEventListener('visibilitychange',visibility);
  return()=>{observer.disconnect();document.removeEventListener('visibilitychange',visibility);clip.pause();};
 },[near,motion,category.key]);
 const select=(i:number)=>{setActive(i);trackMarketingEvent('cta_click',{cta_type:'showcase_tab',placement:`google-teachers_showcase_${categories[i].key}`});};
 return <section ref={host} id="showcase" className="gt-showcase" aria-label="Product demos by category">
  <span className="im-eyebrow">PRODUCT DEMOS · REAL RECORDINGS</span>
  <h2>See what your next class could look like.</h2>
  <div className="gt-tabs" role="tablist" aria-label="Lesson categories">
   {categories.map((c,i)=><button key={c.key} role="tab" type="button" id={`gt-tab-${c.key}`} aria-selected={i===active} aria-controls={`gt-panel-${c.key}`} tabIndex={i===active?0:-1} onClick={()=>select(i)} onKeyDown={e=>{if(e.key==='ArrowRight')select((i+1)%categories.length);if(e.key==='ArrowLeft')select((i-1+categories.length)%categories.length);}}>{c.label}</button>)}
  </div>
  <div className="gt-panel" role="tabpanel" id={`gt-panel-${category.key}`} aria-labelledby={`gt-tab-${category.key}`}>
   <div className="gt-panel-demo">
    <div className="gt-panel-video">
     {near&&motion?<video key={category.key} ref={video} muted playsInline loop preload="metadata" poster={category.video.poster} aria-label={category.video.caption}><source src={category.video.src} type="video/mp4"/></video>
     :<Image src={category.video.poster} alt={category.video.caption} width={960} height={600} loading="lazy" sizes="(max-width: 900px) 100vw, 760px" />}
     <span className={`gt-badge ${category.featured.free?'free':'pro'}`}>{category.featured.free?'FREE':'PRO'}</span>
     <span className="gt-panel-stamp">REAL RECORDING · {category.video.seconds}s</span>
    </div>
    <p className="gt-panel-caption">{category.video.caption}</p>
   </div>
   <div className="gt-panel-copy">
    <span className="gt-item-level">{category.featured.level}</span>
    <h3 lang="es">{category.featured.title}</h3>
    <p><b>Student:</b> {category.student}</p>
    <p><b>You:</b> {category.teacher}</p>
    <ItemAction item={category.featured} category={category.key} pro={pro} onPreview={onPreview} primary />
    <div className="gt-samples">
     {category.samples.map(item=><article key={item.id} className="gt-sample">
      <div className="gt-sample-shot"><Image src={item.image} alt="" width={640} height={400} loading="lazy" sizes="200px" /><span className={`gt-badge ${item.free?'free':'pro'}`}>{item.free?'FREE':'PRO'}</span></div>
      <div><span className="gt-item-level">{item.level}</span><h4 lang="es">{item.title}</h4><p>{item.student}</p><ItemAction item={item} category={category.key} pro={pro} onPreview={onPreview} /></div>
     </article>)}
    </div>
    <div className="gt-panel-buy">{buy}</div>
   </div>
  </div>
 </section>;
}

function ItemAction({item,category,pro,onPreview,primary=false}:{item:ShowcaseItem;category:ShowcaseCategory['key'];pro:boolean;onPreview:Props['onPreview'];primary?:boolean}){
 const cls=primary?'gt-secondary':'gt-item-cta';
 // A PRO visitor never meets a preview or a paywall: every lesson opens directly.
 if(pro&&(item.action==='pro-preview'||item.action==='pro'))return <Link className={cls} href={item.path} target="_blank" rel="noopener" onClick={()=>onPreview(category,item)}>Open the lesson ↗</Link>;
 if(item.action==='link')return <Link className={cls} href={item.path} target="_blank" rel="noopener" onClick={()=>onPreview(category,item)}>{item.free?(item.id<0?'Open the demo':'Open the free lesson'):'Open'} ↗</Link>;
 if(item.action==='tour')return <button type="button" className={cls} onClick={()=>onPreview(category,item)}>Watch the guided lesson ▶</button>;
 if(item.action==='pro-preview')return <button type="button" className={cls} onClick={()=>onPreview(category,item)}>Try the PRO preview →</button>;
 return <button type="button" className={cls} onClick={()=>onPreview(category,item)}>Included in PRO ↗</button>;
}
