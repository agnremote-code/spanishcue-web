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
import ProPreview from './ProPreview';
import Showcase from './Showcase';
import type {ProPreviewFragment,ShowcaseCategory,ShowcaseItem} from './google-showcase';
import {TESTIMONIALS} from './google-testimonials';

const LANDING='google-teachers';
const FAQ:[string,string][]=[
 ['What exactly am I paying for?','Full access to the whole SpanishCue library: every 3D conversation world, every interactive grammar class, the listening lessons, Autoestudio homework for A1–C2 and the teacher panel.'],
 ['Can I use this with my own students?','Yes. You open the lesson, share your screen on Zoom, Meet, Preply or any call, and teach. Each lesson is built for live online classes.'],
 ['Do students need a subscription?','No. One PRO subscription is yours as the teacher. Students need nothing installed and no account to join your class.'],
 ['Can I teach directly from my browser?','Yes. Everything runs in Chrome, Safari, Edge and Firefox on desktop; lessons also open on phones and tablets.'],
 ['Are there lessons for beginners and advanced learners?','Yes, from A1 to C2. Conversation worlds have a version written for each level; grammar and listening are organised by level.'],
 ['Is homework included?','Yes. Autoestudio has weekly units for A1–C2 with reading, writing, listening and speaking, plus a panel where you follow each student.'],
 ['Can I cancel?','Yes, at any time from your account, before the next renewal. No calls, no forms.'],
 ['What happens after the US$2 trial?','You get one day of full access. Unless you cancel before the day ends, the subscription continues at US$15.50/month, final price with taxes.'],
 ['What is free, and what requires PRO?','Free: the guided preview above, the city centre of Noche Abierta at six levels, the lessons marked FREE on this page, and the first two weeks of Autoestudio A1. Everything marked PRO is in the subscription.'],
];

export default function GoogleTeachersLanding({pro,signedIn,cafe,level,showcase,previews}:{pro:boolean;signedIn:boolean;cafe:Location;level:string;showcase:ShowcaseCategory[];previews:ProPreviewFragment[]}){
 const [search,setSearch]=useState('');
 const [gate,setGate]=useState<string|null>(null);
 const [preview,setPreview]=useState<ProPreviewFragment|null>(null);
 const [sticky,setSticky]=useState(false);
 const heroBuy=useRef<HTMLDivElement>(null);
 const reduced=useRef(false);
 const [autoplay,setAutoplay]=useState(false);
 const demoPath=pro?'/noche-abierta':'/demo/noche-abierta';
 const exploreHref=campaignLink(`${demoPath}?from=${LANDING}&level=${level}`,search);
 useEffect(()=>{
  // Campaign parameters come from the real browser URL after hydration; the server renders plain links.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setSearch(location.search);
  reduced.current=matchMedia('(prefers-reduced-motion:reduce)').matches;
  setAutoplay(!reduced.current);
  // Mobile sticky CTA: shown once the hero checkout has scrolled away, hidden while a checkout block is on screen.
  const buy=heroBuy.current;const blocks=[document.getElementById('pro'),document.getElementById('close')].filter(Boolean) as HTMLElement[];
  const state={heroPassed:false,visible:new Set<Element>()};
  const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.target===buy)state.heroPassed=!e.isIntersecting&&e.boundingClientRect.top<0;else if(e.isIntersecting)state.visible.add(e.target);else state.visible.delete(e.target);}setSticky(state.heroPassed&&state.visible.size===0);});
  if(buy)observer.observe(buy);for(const b of blocks)observer.observe(b);
  return()=>observer.disconnect();
 },[]);
 // One attribution event per purchase placement; the official checkout then fires checkout_start itself.
 const buyClick=(placement:string)=>()=>trackMarketingEvent('cta_click',{cta_type:'buy',placement:`${LANDING}_${placement}`});
 const cta=(placement:string,type='demo')=>()=>trackMarketingEvent('cta_click',{cta_type:type,placement:`${LANDING}_${placement}`});
 const watchTour=()=>{document.getElementById('tour')?.scrollIntoView({behavior:reduced.current?'auto':'smooth',block:'center'});document.querySelector('.gt-tour')?.dispatchEvent(new Event('tour-start'));};
 const toShowcase=()=>document.getElementById('showcase')?.scrollIntoView({behavior:reduced.current?'auto':'smooth',block:'start'});
 function openPreview(category:ShowcaseCategory['key'],item:ShowcaseItem){
  if(item.action==='pro-preview'&&!pro){const fragment=previews.find(p=>p.id===item.id);if(fragment){setPreview(fragment);return;}}
  trackMarketingEvent('lesson_preview_open',{lesson_id:item.id>0?item.id:undefined,lesson_title:item.title,category,access:item.free?'free':'pro',placement:`landing_${LANDING}`});
  if(item.action==='tour')watchTour();
  else if(item.action==='pro'&&!pro)setGate(item.title);
 }
 /** The official checkout, scoped so only the trial shows: one button, one action. */
 const trial=(placement:string,returnTo='/noche-abierta')=>pro?null:<div className="gt-buy gt-buy-one" onClickCapture={buyClick(placement)}><CheckoutButton signedIn={signedIn} returnTo={returnTo} variant="landing" paddleOnly /></div>;
 const both=(placement:string,extra='')=>pro?<Link className="im-primary" href="/noche-abierta">Open the full city ↗</Link>:<div className={`gt-buy ${extra}`} onClickCapture={buyClick(placement)}><CheckoutButton signedIn={signedIn} returnTo="/noche-abierta" variant="landing" paddleOnly /></div>;

 return <main className="im-landing gt">
  <header className="im-nav"><Link className="im-wordmark" href="/">SPANISHCUE<span> CHOOSE. OPEN. TEACH.</span></Link><nav className="gt-nav-links"><a href="#tour">Watch a lesson</a><a href="#showcase">Demos</a><a href="#pro">Pricing</a></nav><div className="gt-nav-buy">{pro?<Link className="gt-nav-cta" href="/noche-abierta">OPEN THE CITY ↗</Link>:trial('nav')}</div><Link className="gt-nav-account" href={signedIn?'/cuenta':'/ingresar'}>{signedIn?'My account':'Sign in'} ↗</Link></header>

  <section className="gt-hero2">
   <div className="gt-hero2-copy">
    <span className="im-eyebrow"><i/> FOR ONLINE SPANISH TEACHERS</span>
    <h1>Interactive Spanish Lessons. <em>Ready to Teach.</em></h1>
    <p className="gt-lead">Stop preparing Spanish lessons from scratch. Start teaching with them.</p>
    <p>3D conversation worlds, interactive grammar, listening and homework for A1–C2. Open a lesson, share your screen, guide your student.</p>
    <div ref={heroBuy} id="buy" className="gt-buy gt-buy-hero" onClickCapture={buyClick('hero')}>
     {!pro?<CheckoutButton signedIn={signedIn} returnTo="/noche-abierta" variant="landing" paddleOnly />:<Link className="im-primary" href="/noche-abierta">OPEN THE FULL CITY ↗</Link>}
     <button type="button" className="gt-watch" onClick={()=>{cta('hero')();watchTour();}}>WATCH A REAL LESSON — FREE ▶</button>
    </div>
    <div className="im-reassurance"><span>✓ No sign-up to watch</span><span>✓ Runs in the browser</span><span>✓ A1–C2</span><span>✓ Cancel anytime</span></div>
   </div>
   <div id="tour" className="gt-hero2-stage"><GuidedTour cafe={cafe} level={level} signedIn={signedIn} pro={pro} exploreHref={exploreHref} autoplay={autoplay} onExploreMore={toShowcase} onBuyClick={buyClick('tour_end')} /></div>
  </section>

  <section className="gt-tiers" aria-label="What is free and what is PRO">
   <div><b>FREE GUIDED PREVIEW</b><span>The 30-second lesson above. No input needed.</span></div>
   <div><b>FREE EXPLORATION</b><span>Walk the city centre yourself: ten venues, six levels.</span><Link href={exploreHref} onClick={cta('tiers')}>Explore free ↗</Link></div>
   <div><b>SPANISHCUE PRO</b><span>Every world, every grammar class, listening, homework and the teacher panel.</span><a href="#pro" onClick={cta('tiers','plans')}>See what is included ↓</a></div>
  </section>

  <Showcase categories={showcase} pro={pro} onPreview={openPreview} buy={both('showcase','gt-buy-row')} />

  <section className="gt-how" aria-label="How teachers use SpanishCue">
   <span className="im-eyebrow">HOW TEACHERS USE SPANISHCUE</span>
   <h2>Before, during and after your next class.</h2>
   <ol className="gt-how-steps">
    <li><Image src="/lp/fabrica.webp" alt="A grammar class open in the SpanishCue library" width={1280} height={800} loading="lazy" sizes="(max-width: 900px) 100vw, 420px" /><b>Before class</b><h3>Choose a ready-to-teach lesson.</h3><p>Pick by level and skill. The route, the activities and the teacher notes are already there.</p></li>
    <li><Image src="/lp/noche-3d.webp" alt="Noche Abierta on a shared screen" width={1280} height={800} loading="lazy" sizes="(max-width: 900px) 100vw, 420px" /><b>During class</b><h3>Share your screen and guide the activities.</h3><p>On Zoom, Google Meet, Preply or any call. Your student taps, chooses and talks; you lead the conversation.</p></li>
    <li><Image src="/lp/autoestudio.webp" alt="Autoestudio homework weeks" width={1280} height={800} loading="lazy" sizes="(max-width: 900px) 100vw, 420px" /><b>After class</b><h3>Assign homework and review the work.</h3><p>Send an Autoestudio week. Your students panel shows classes, errors and what to prepare next.</p></li>
   </ol>
   <p className="gt-how-note">Zoom, Google Meet and Preply are independent platforms; SpanishCue runs in your browser next to any of them.</p>
  </section>

  <section id="pro" className="gt-pro">
   <div>
    <span className="im-eyebrow">PLANS</span>
    <h2>Try PRO for a day. Keep it for your classes.</h2>
    <ul className="gt-compare">
     <li><b>TRY PRO</b><span>US$2 for one day of full access. Renews automatically at US$15.50/month unless you cancel before the day ends.</span></li>
     <li><b>SUBSCRIBE</b><span>US$15.50/month, final price with taxes. Cancel anytime before the next renewal.</span></li>
     <li><b>INCLUDED</b><span>The full Noche Abierta city, every 3D world, all interactive grammar classes, listening, Autoestudio homework A1–C2 and the teacher panel.</span></li>
     <li><b>FREE</b><span>The guided preview, the city centre at six levels, the lessons marked FREE above and Autoestudio A1 weeks 1–2. No card needed.</span></li>
    </ul>
    <p className="gt-terms">Prices in USD; cards through Paddle, taxes handled at checkout; PayPal at US$15/month. Pay first, then link the purchase to your account. Access is granted only after the payment is confirmed.</p>
   </div>
   {!pro?<div className="gt-checkout" onClickCapture={buyClick('plans')}><CheckoutButton signedIn={signedIn} returnTo="/noche-abierta" variant="landing" /></div>:<div className="gt-checkout gt-checkout-pro"><p>You already have PRO.</p><Link className="im-primary" href="/noche-abierta">Open the full city ↗</Link></div>}
  </section>

  <section className="gt-faq">
   <h2>Questions teachers ask before paying</h2>
   <dl>{FAQ.map(([q,a])=><div key={q}><dt>{q}</dt><dd>{a}</dd></div>)}</dl>
  </section>

  {TESTIMONIALS.length>0&&<section className="gt-voices" aria-label="What teachers say">
   <span className="im-eyebrow">FROM TEACHERS WHO TRIED IT</span>
   <div className="gt-voices-grid">{TESTIMONIALS.map(t=><figure key={t.name}><blockquote>{t.quote}</blockquote><figcaption><span className="gt-voice-mark" aria-hidden="true">{t.name.split(' ').map(w=>w[0]).join('')}</span><span><b>{t.name}</b>{t.role}</span></figcaption></figure>)}</div>
  </section>}

  <section id="close" className="gt-close">
   <h2>Your next Spanish lesson is already waiting.</h2>
   <p>Stop preparing everything from scratch. Start teaching with SpanishCue.</p>
   {both('close','gt-buy-row')}
  </section>

  <footer className="im-footer"><span>SPANISHCUE · Made for teaching Spanish.</span><nav><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></nav></footer>
  <div className={`gt-sticky${sticky?' show':''}`} aria-hidden={!sticky} inert={!sticky}>{trial('sticky')}<button type="button" onClick={()=>{cta('sticky')();watchTour();}}>Watch lesson ▶</button></div>
  {gate&&!pro&&<PremiumPanel area={gate} signedIn={signedIn} onClose={()=>setGate(null)}/>}
  {preview&&!pro&&<ProPreview fragment={preview} signedIn={signedIn} onClose={()=>setPreview(null)} onBuyClick={buyClick('pro_preview')} />}
 </main>;
}
