'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CheckoutButton from '../acceso/CheckoutButton';
import {trackMarketingEvent} from '../marketing/analytics';
import {DEMO_LEVELS} from './policy.mjs';
import {campaignLink} from './attribution';
import PremiumPanel from './PremiumPanel';

export type SampleActivity={level:string;venue:string;title:string;situation:string;prompt:string;options:string[];close:string;teacher:string[]};

const LANDING='google-teachers';
const WORLDS=[
 {name:'Noche Abierta',kind:'3D city · Conversation · A1–C2',image:'/lp/noche-3d.webp',text:'Ten venues in the free centre, eight districts in PRO. Walk up to a light, choose a response, then talk about real life.'},
 {name:'The Sound Map',kind:'3D city · Listening · all levels',image:'/the-sound-map/preview.svg',text:'Six sound scenes with routes for every level: from recognising words with bilingual support to analysing irony and ambiguity.'},
 {name:'El bosque de los hongos gigantes',kind:'3D platformer · Conversation · A1–C2',image:'/lp/bosque-3d.webp',text:'Twelve zones and 432 questions. Every landing opens a conversation about preferences, experiences and opinions.'},
];
const USES=[
 ['Share one screen','Open a scene on Zoom, Preply or Google Meet. Your student reads the situation and chooses; you run the conversation.'],
 ['Guide real conversation','Every scene ends with a personal question about the student’s own life, not the story. Teacher notes tell you when to step in.'],
 ['Grammar in context','Each venue carries the forms the situation needs, with help with speaking, chunks and starters one tap away.'],
 ['Train listening','The Sound Map and the listening lessons come with level-specific routes and tasks, ready for class time.'],
 ['Set tasks and homework','Autoestudio weeks A1–C2 cover reading, writing, listening and speaking, and show you what each student did.'],
 ['Pick by level and goal','Every world and lesson is written for its CEFR level. Switch A1 to C2 inside the same scene.'],
];

export default function GoogleTeachersLanding({pro,signedIn,samples}:{pro:boolean;signedIn:boolean;samples:SampleActivity[]}){
 const video=useRef<HTMLVideoElement>(null);
 const heroCta=useRef<HTMLAnchorElement>(null);
 const [search,setSearch]=useState('');
 const [level,setLevel]=useState('A2');
 const [playing,setPlaying]=useState(false);
 const [gate,setGate]=useState(false);
 const [sticky,setSticky]=useState(false);
 const demoPath=pro?'/noche-abierta':'/demo/noche-abierta';
 // Campaign parameters are read from the real browser URL after hydration; the server renders plain links.
 const entry=(lvl=level)=>campaignLink(`${demoPath}?from=${LANDING}&level=${lvl}`,search);
 const sample=samples.find(s=>s.level===level)??samples[0];
 useEffect(()=>{
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setSearch(location.search);
  // Mobile sticky CTA: shown once the hero button has scrolled away, hidden while the checkout block is on screen.
  const cta=heroCta.current;const proBlock=document.getElementById('pro');const state={heroPassed:false,proVisible:false};
  const stickyObserver=new IntersectionObserver(entries=>{for(const e of entries){if(e.target===proBlock)state.proVisible=e.isIntersecting;else state.heroPassed=!e.isIntersecting&&e.boundingClientRect.top<0;}setSticky(state.heroPassed&&!state.proVisible);});
  if(cta)stickyObserver.observe(cta);if(proBlock)stickyObserver.observe(proBlock);
  const clip=video.current;
  const connection=(navigator as Navigator&{connection?:{saveData?:boolean}}).connection;
  const motionOk=!matchMedia('(prefers-reduced-motion:reduce)').matches&&!connection?.saveData;
  const observer=clip&&motionOk?new IntersectionObserver(entries=>{if(entries[0]?.isIntersecting){clip.src='/brand/campaign/noche-demo.mp4';void clip.play().then(()=>setPlaying(true)).catch(()=>{});observer?.disconnect();}},{rootMargin:'100px'}):null;
  if(clip&&observer)observer.observe(clip);
  return()=>{observer?.disconnect();stickyObserver.disconnect();};
 },[]);
 function toggleVideo(){const clip=video.current;if(!clip)return;if(playing)clip.pause();else{if(!clip.getAttribute('src'))clip.src='/brand/campaign/noche-demo.mp4';void clip.play().catch(()=>{});}}
 const enter=(placement:string)=>()=>trackMarketingEvent('cta_click',{cta_type:'demo',placement:`${LANDING}_${placement}`});
 return <main className="im-landing gt">
  <header className="im-nav"><Link className="im-wordmark" href="/">SPANISHCUE<span> CHOOSE. OPEN. TEACH.</span></Link><nav className="gt-nav-links"><a href="#inside">Inside the city</a><a href="#lessons">Premium lessons</a><a href="#pro">Pricing</a></nav><Link href={signedIn?'/cuenta':'/ingresar'}>{signedIn?'My account':'Sign in'} ↗</Link></header>

  <section className="im-hero gt-hero">
   <div className="im-hero-copy">
    <span className="im-eyebrow"><i/> FOR ONLINE SPANISH TEACHERS</span>
    <h1>Your next Spanish lesson is <em>already here.</em></h1>
    <p>Interactive 3D worlds, ready-to-teach activities and real conversation for A1–C2. Open one on a shared screen. Less prep. More speaking.</p>
    <div className="gt-levels" role="group" aria-label="Choose the level for your free visit">{DEMO_LEVELS.map(l=><button key={l} type="button" className={l===level?'on':''} aria-pressed={l===level} onClick={()=>setLevel(l)}>{l}</button>)}</div>
    <Link ref={heroCta} className="im-primary im-enter" href={entry()} onClick={enter('hero')}>{pro?'OPEN THE FULL CITY':'EXPLORE THE 3D CITY — FREE'} <span>↗</span></Link>
    <a className="gt-secondary" href="#lessons">SEE PREMIUM LESSONS ↓</a>
    <div className="im-reassurance"><span>✓ No card</span><span>✓ No sign-up</span><span>✓ Works in the browser</span><span>✓ Desktop and mobile</span></div>
   </div>
   <div className="im-film"><div className="im-film-top"><span>● NOCHE ABIERTA</span><span>REAL GAMEPLAY</span></div>
    <video ref={video} muted playsInline loop preload="none" poster="/brand/campaign/noche-demo-poster.webp" aria-label="Real Noche Abierta gameplay" onPause={()=>setPlaying(false)} onPlay={()=>setPlaying(true)} />
    <div className="im-film-caption"><span>01 / A FREE DISTRICT, TEN VENUES</span><button type="button" onClick={toggleVideo}>{playing?'Pause':'Play video'} {playing?'Ⅱ':'▷'}</button></div>
    <div className="im-film-stamp">THIS IS A LESSON.<br/><b>Yes, really.</b></div>
   </div>
  </section>

  <section id="inside" className="gt-inside">
   <div className="gt-inside-copy">
    <span className="im-eyebrow">WHAT HAPPENS INSIDE</span>
    <h2>A real scene from the free city, at every level.</h2>
    <p>Your student walks to a circle of light. A situation appears in Spanish, they choose a response, and the scene closes with a question about their own life. You decide how far the conversation goes.</p>
    <div className="gt-levels" role="group" aria-label="Show this scene at another level">{samples.map(s=><button key={s.level} type="button" className={s.level===level?'on':''} aria-pressed={s.level===level} onClick={()=>setLevel(s.level)}>{s.level}</button>)}</div>
    <Link className="im-primary" href={entry()} onClick={enter('inside')}>Walk into this scene at {level} ↗</Link>
   </div>
   <article className="gt-card" aria-live="polite">
    <span className="im-eyebrow">{sample.venue} · {sample.level} · FREE</span>
    <h3 lang="es">{sample.title}</h3>
    <p className="im-step">01 / The situation</p>
    <p className="gt-situation" lang="es">{sample.situation}</p>
    <p className="gt-prompt" lang="es">{sample.prompt}</p>
    <ol className="gt-options" lang="es">{sample.options.map((o,i)=><li key={o}><span>{String.fromCharCode(65+i)}</span>{o}</li>)}</ol>
    <p className="im-step">02 / Then, about their own life</p>
    <p className="gt-close" lang="es">{sample.close}</p>
    <details className="gt-teacher"><summary>Teacher notes</summary><ul lang="es">{sample.teacher.map(t=><li key={t}>{t}</li>)}</ul></details>
   </article>
  </section>

  <section className="gt-uses">
   <span className="im-eyebrow">IN YOUR CLASS</span>
   <h2>Built for the hour you actually teach.</h2>
   <div className="gt-uses-grid">{USES.map(([h,p],i)=><article key={h}><span>{String(i+1).padStart(2,'0')} /</span><h3>{h}</h3><p>{p}</p></article>)}</div>
  </section>

  <section id="lessons" className="gt-worlds">
   <span className="im-eyebrow">PREMIUM WORLDS</span>
   <h2>Three worlds. One library of ready-to-teach lessons.</h2>
   <div className="gt-worlds-grid">{WORLDS.map((w,i)=><article key={w.name} className={i===0?'lead':''}>
    <div className="gt-shot"><Image src={w.image} alt={w.name} width={1280} height={800} loading="lazy" sizes={i===0?'(max-width: 900px) 100vw, 760px':'(max-width: 900px) 100vw, 380px'} unoptimized={w.image.endsWith('.svg')} /></div>
    <span className="im-eyebrow">{w.kind}</span><h3>{w.name}</h3><p>{w.text}</p>
    {i===0?<Link className="im-primary" href={entry()} onClick={enter('worlds')}>Try the free centre ↗</Link>:<button type="button" className="im-quiet" onClick={()=>setGate(true)}>Included in PRO ↗</button>}
   </article>)}</div>
   <p className="gt-more">Plus grammar classes with theory first, listening lessons, country content and Autoestudio homework weeks, A1–C2.</p>
  </section>

  <section id="pro" className="gt-pro">
   <div>
    <span className="im-eyebrow">FREE FIRST, THEN PRO</span>
    <h2>Try the city. Then open everything.</h2>
    <ul className="gt-compare">
     <li><b>Free demo</b><span>The city centre with ten venues, six levels, no time limit. No card, no account.</span></li>
     <li><b>PRO</b><span>The full city with eight districts, The Sound Map, the forest, grammar, listening and Autoestudio. One subscription for your whole teaching week.</span></li>
    </ul>
    <p className="gt-terms">Try 1 Day — US$2, then US$15.50/month. Cancel anytime before the next renewal. Or get full access directly for US$15.50/month. Pay first, then link the purchase to your account.</p>
    <Link className="gt-secondary" href={entry()} onClick={enter('pro')}>Still deciding? Explore the free centre first ↗</Link>
   </div>
   {!pro?<div className="gt-checkout"><CheckoutButton signedIn={signedIn} returnTo="/noche-abierta" variant="landing" /></div>:<div className="gt-checkout gt-checkout-pro"><p>You already have PRO.</p><Link className="im-primary" href="/noche-abierta">Open the full city ↗</Link></div>}
  </section>

  <section className="gt-faq">
   <h2>Questions teachers ask</h2>
   <dl>
    <div><dt>Do my students need an account?</dt><dd>No. You open the lesson and share your screen. Students need nothing installed.</dd></div>
    <div><dt>Does it run on my laptop?</dt><dd>It runs in Chrome, Safari, Edge and Firefox on desktop and mobile. If 3D is not available, the same activities open on a map.</dd></div>
    <div><dt>What do I get for free?</dt><dd>The whole city centre of Noche Abierta at six levels, forever. PRO adds the rest of the library.</dd></div>
   </dl>
  </section>

  <footer className="im-footer"><span>SPANISHCUE · Made for teaching Spanish.</span><nav><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></nav></footer>
  <div className={`gt-sticky${sticky?' show':''}`} aria-hidden={!sticky}><Link className="im-primary" href={entry()} tabIndex={sticky?0:-1} onClick={enter('sticky')}>{pro?'Open the full city':'Explore the 3D city — free'} ↗</Link></div>
  {gate&&!pro&&<PremiumPanel area="SPANISHCUE PRO" signedIn={signedIn} onClose={()=>setGate(false)}/>}
 </main>;
}
