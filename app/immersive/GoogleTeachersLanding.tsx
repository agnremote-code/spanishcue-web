'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CheckoutButton from '../acceso/CheckoutButton';
import {trackMarketingEvent} from '../marketing/analytics';
import type {Location} from '../noche-abierta/engine.mjs';
import {campaignLink} from './attribution';
import GuidedTour from './GuidedTour';
import PremiumPanel from './PremiumPanel';

export type ShowcaseItem={id:number;title:string;level:string;path:string;image:string;student:string;teacher:string;free:boolean;preview?:string};
export type ShowcaseGroup={group:string;items:ShowcaseItem[]};
const LANDING='google-teachers';
const CATEGORY:Record<string,string>={'3D CONVERSATION':'conversation','INTERACTIVE GRAMMAR':'grammar','LISTENING':'listening','HOMEWORK & PRACTICE':'homework'};

export default function GoogleTeachersLanding({pro,signedIn,cafe,level,showcase}:{pro:boolean;signedIn:boolean;cafe:Location;level:string;showcase:ShowcaseGroup[]}){
 const [search,setSearch]=useState('');
 const [gate,setGate]=useState<string|null>(null);
 const [sticky,setSticky]=useState(false);
 const heroBuy=useRef<HTMLDivElement>(null);
 const reduced=useRef(false);
 const [autoplay,setAutoplay]=useState(false);
 const demoPath=pro?'/noche-abierta':'/demo/noche-abierta';
 const exploreHref=campaignLink(`${demoPath}?from=${LANDING}&level=${level}`,search);
 const grammar=showcase.find(g=>g.group==='INTERACTIVE GRAMMAR')?.items.find(i=>i.free);
 useEffect(()=>{
  // Campaign parameters come from the real browser URL after hydration; the server renders plain links.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setSearch(location.search);
  reduced.current=matchMedia('(prefers-reduced-motion:reduce)').matches;
  setAutoplay(!reduced.current);
  // Mobile sticky CTA: shown once the hero checkout has scrolled away, hidden while any checkout block is on screen.
  const buy=heroBuy.current;const proBlock=document.getElementById('pro');const state={heroPassed:false,proVisible:false};
  const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.target===proBlock)state.proVisible=e.isIntersecting;else state.heroPassed=!e.isIntersecting&&e.boundingClientRect.top<0;}setSticky(state.heroPassed&&!state.proVisible);});
  if(buy)observer.observe(buy);if(proBlock)observer.observe(proBlock);
  return()=>observer.disconnect();
 },[]);
 const cta=(placement:string,type='buy')=>()=>trackMarketingEvent('cta_click',{cta_type:type,placement:`${LANDING}_${placement}`});
 function openPreview(group:string,item:ShowcaseItem){
  trackMarketingEvent('lesson_preview_open',{lesson_id:item.id>0?item.id:undefined,lesson_title:item.title,category:CATEGORY[group],access:item.free?'free':'pro',placement:`landing_${LANDING}`});
  if(!item.preview||item.preview.startsWith('#'))return;
 }
 const watchTour=()=>{document.getElementById('tour')?.scrollIntoView({behavior:reduced.current?'auto':'smooth',block:'center'});document.querySelector('.gt-tour')?.dispatchEvent(new Event('tour-start'));};
 return <main className="im-landing gt">
  <header className="im-nav"><Link className="im-wordmark" href="/">SPANISHCUE<span> CHOOSE. OPEN. TEACH.</span></Link><nav className="gt-nav-links"><a href="#tour">Watch a lesson</a><a href="#library">Lesson library</a><a href="#pro">Pricing</a></nav><a className="gt-nav-cta" href="#pro" onClick={cta('nav')}>TRY PRO — $2</a><Link href={signedIn?'/cuenta':'/ingresar'}>{signedIn?'My account':'Sign in'} ↗</Link></header>

  <section className="gt-hero2">
   <div className="gt-hero2-copy">
    <span className="im-eyebrow"><i/> FOR ONLINE SPANISH TEACHERS</span>
    <h1>Interactive Spanish Lessons. <em>Ready to Teach.</em></h1>
    <p>3D conversation worlds, interactive grammar, listening and ready-to-use lessons. Built for real online classes.</p>
    <div ref={heroBuy} id="buy" className="gt-buy">
     {!pro?<CheckoutButton signedIn={signedIn} returnTo="/noche-abierta" variant="landing" paddleOnly />:<Link className="im-primary" href="/noche-abierta">OPEN THE FULL CITY ↗</Link>}
     <button type="button" className="gt-watch" onClick={()=>{cta('hero','demo')();watchTour();}}>WATCH A REAL LESSON — FREE ▶</button>
    </div>
    <div className="im-reassurance"><span>✓ No sign-up to watch</span><span>✓ Works in the browser</span><span>✓ A1–C2</span><span>✓ Cancel anytime</span></div>
   </div>
   <div id="tour" className="gt-hero2-stage"><GuidedTour cafe={cafe} level={level} signedIn={signedIn} pro={pro} grammarHref="#grammar" exploreHref={exploreHref} autoplay={autoplay} /></div>
  </section>

  <section className="gt-tiers" aria-label="What is free and what is PRO">
   <div><b>FREE GUIDED PREVIEW</b><span>The 30-second lesson above. No input needed.</span></div>
   <div><b>FREE EXPLORATION</b><span>Walk the city centre yourself: ten venues, six levels.</span><Link href={exploreHref} onClick={cta('tiers','demo')}>Explore free ↗</Link></div>
   <div><b>SPANISHCUE PRO</b><span>Eight districts, every world and the whole lesson library.</span><a href="#pro" onClick={cta('tiers')}>See plans ↓</a></div>
  </section>

  {grammar&&<section id="grammar" className="gt-grammar">
   <div className="gt-grammar-copy">
    <span className="im-eyebrow">NOT ONLY A CITY · INTERACTIVE GRAMMAR</span>
    <h2>Grammar classes with theory first, then practice.</h2>
    <p>{grammar.title} is a complete A1 grammar class you can open right now, free: understand the rule, explore it in a 3D factory, practise, listen, speak and write, with a numbered route your student can follow on your shared screen.</p>
    <ul className="gt-grammar-steps">{['Understand','Explore','Practise','Listen','Talk','Write','Close'].map((s,i)=><li key={s}><span>{String(i+1).padStart(2,'0')}</span>{s}</li>)}</ul>
    <div className="gt-actions"><a className="im-primary" href={grammar.path} target="_blank" rel="noopener" onClick={()=>openPreview('INTERACTIVE GRAMMAR',grammar)}>OPEN THE GRAMMAR LESSON — FREE ↗</a><a className="gt-secondary" href="#pro" onClick={cta('grammar')}>TRY PRO — $2 →</a></div>
   </div>
   <a className="gt-grammar-shot" href={grammar.path} target="_blank" rel="noopener" onClick={()=>openPreview('INTERACTIVE GRAMMAR',grammar)} aria-label={`Open ${grammar.title}`}><Image src={grammar.image} alt="" width={1280} height={800} loading="lazy" sizes="(max-width: 900px) 100vw, 640px" /><span className="gt-badge free">FREE</span><b>LESSON PREVIEW · {grammar.title} · {grammar.level}</b></a>
  </section>}

  <section id="library" className="gt-library">
   <span className="im-eyebrow">LESSON LIBRARY</span>
   <h2>One platform. Your whole teaching week.</h2>
   {showcase.map(g=><div key={g.group} className="gt-group">
    <h3>{g.group}</h3>
    <div className="gt-group-grid">{g.items.map(item=><article key={item.id} className="gt-item">
     <div className="gt-item-shot"><Image src={item.image} alt="" width={1280} height={800} loading="lazy" sizes="(max-width: 900px) 100vw, 400px" unoptimized={item.image.endsWith('.svg')} /><span className={`gt-badge ${item.free?'free':'pro'}`}>{item.free?'FREE':'PRO'}</span></div>
     <div className="gt-item-body">
      <span className="gt-item-level">{item.level}</span><h4 lang="es">{item.title}</h4>
      <p><b>Student:</b> {item.student}</p><p><b>You:</b> {item.teacher}</p>
      {item.preview&&item.preview.startsWith('#')?<button type="button" className="gt-item-cta" onClick={()=>{openPreview(g.group,item);watchTour();}}>Watch the preview ▶</button>
      :item.preview?<a className="gt-item-cta" href={item.preview} target="_blank" rel="noopener" onClick={()=>openPreview(g.group,item)}>{item.free?'Open free':'Open the preview'} ↗</a>
      :<button type="button" className="gt-item-cta" onClick={()=>{openPreview(g.group,item);setGate(item.title);}}>Included in PRO ↗</button>}
     </div>
    </article>)}</div>
   </div>)}
  </section>

  <section id="pro" className="gt-pro">
   <div>
    <span className="im-eyebrow">PLANS</span>
    <h2>Try PRO for a day. Keep it for your classes.</h2>
    <ul className="gt-compare">
     <li><b>TRY PRO</b><span>US$2 for one day of full access. Renews automatically at US$15.50/month unless you cancel before the day ends.</span></li>
     <li><b>SUBSCRIBE</b><span>US$15.50/month, final price with taxes. Cancel anytime before the next renewal.</span></li>
     <li><b>INCLUDED</b><span>The full Noche Abierta city, every 3D world, interactive grammar, listening, Autoestudio homework and the teacher panel.</span></li>
    </ul>
    <p className="gt-terms">Pay first, then link the purchase to your account. Access is granted only after the payment is confirmed. PayPal is available at US$15/month.</p>
   </div>
   {!pro?<div className="gt-checkout"><CheckoutButton signedIn={signedIn} returnTo="/noche-abierta" variant="landing" /></div>:<div className="gt-checkout gt-checkout-pro"><p>You already have PRO.</p><Link className="im-primary" href="/noche-abierta">Open the full city ↗</Link></div>}
  </section>

  <section className="gt-faq">
   <h2>Questions teachers ask</h2>
   <dl>
    <div><dt>Do my students need an account?</dt><dd>No. You open the lesson and share your screen. Students need nothing installed.</dd></div>
    <div><dt>Does it run on my laptop?</dt><dd>It runs in Chrome, Safari, Edge and Firefox on desktop and mobile. If 3D is not available, the same activities open on a map.</dd></div>
    <div><dt>What do I get for free?</dt><dd>The guided preview, the whole city centre of Noche Abierta at six levels, and the free sample lessons marked FREE above.</dd></div>
   </dl>
  </section>

  <footer className="im-footer"><span>SPANISHCUE · Made for teaching Spanish.</span><nav><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></nav></footer>
  <div className={`gt-sticky${sticky?' show':''}`} aria-hidden={!sticky}><a className="im-primary" href="#pro" tabIndex={sticky?0:-1} onClick={cta('sticky')}>TRY PRO — $2</a><button type="button" tabIndex={sticky?0:-1} onClick={()=>{cta('sticky','demo')();watchTour();}}>Watch lesson ▶</button></div>
  {gate&&!pro&&<PremiumPanel area={gate} signedIn={signedIn} onClose={()=>setGate(null)}/>}
 </main>;
}
