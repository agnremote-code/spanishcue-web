'use client';
import {useEffect,useRef,useState,type ComponentType} from 'react';
import Link from 'next/link';
import CheckoutButton from '../acceso/CheckoutButton';
import {trackMarketingEvent} from '../marketing/analytics';
import {CONSENT_EVENT,consentFor} from '../privacy/consent';
import type {DemoSceneProps} from './DemoScene';
import type {Location} from '../noche-abierta/engine.mjs';

/** Walkable route from the demo spawn to the Café Martina door, checked against the real colliders. */
export const TOUR_PATH=[{x:-7,z:24},{x:-7,z:7},{x:-11,z:7},{x:-11.5,z:-6.3}];
export type TourScene='idle'|'welcome'|'walk'|'choice'|'talk'|'end';
const DURATION:Partial<Record<TourScene,number>>={welcome:4200,choice:6500,talk:9000};
const WALK_LIMIT=16000;

export default function GuidedTour({cafe,level,signedIn,pro,grammarHref,exploreHref,autoplay}:{cafe:Location;level:string;signedIn:boolean;pro:boolean;grammarHref:string;exploreHref:string;autoplay:boolean}){
 const [Scene,setScene]=useState<ComponentType<DemoSceneProps>|null>(null);
 const [scene,setSceneState]=useState<TourScene>('idle');
 const [ready,setReady]=useState(false);const [fallback,setFallback]=useState(false);
 const [paused,setPaused]=useState(false);const [chosen,setChosen]=useState(false);
 const [wanted,setWanted]=useState(false);const [pilot,setPilot]=useState<DemoSceneProps['autopilot']>(null);
 const [travel,setTravel]=useState<{id:string;n:number}|null>(null);
 const host=useRef<HTMLDivElement>(null);const clock=useRef(0);const arrived=useRef(false);const started=useRef(0);
 const reduced=useRef(false);const video=useRef<HTMLVideoElement>(null);
 const activity=cafe.activities[0];const pick=activity.options?.[0];
 const wantedRef=useRef(wanted);wantedRef.current=wanted;
 // Load the 3D engine only when the stage is on screen (or the visitor asks for it); never before.
 useEffect(()=>{
  reduced.current=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const saveData=(navigator as Navigator&{connection?:{saveData?:boolean}}).connection?.saveData;
  const stage=host.current;if(!stage)return;
  let active=true;let loading=false;
  const load=()=>{if(loading||!active)return;loading=true;setWanted(true);import('./DemoScene').then(m=>{if(active)setScene(()=>m.default);}).catch(()=>{if(active){setFallback(true);setReady(true);}});};
  stage.addEventListener('tour-start',load);
  const observer:IntersectionObserver|null=autoplay&&!saveData?new IntersectionObserver(entries=>{if(entries[0]?.isIntersecting){load();observer?.disconnect();}},{rootMargin:'200px'}):null;
  observer?.observe(stage);
  return()=>{active=false;observer?.disconnect();stage.removeEventListener('tour-start',load);};
 },[autoplay]);
 // Scene clock: advances only while playing and visible.
 useEffect(()=>{
  if(scene==='idle'||scene==='end')return;
  const id=setInterval(()=>{
   if(paused||document.hidden)return;clock.current+=100;
   const limit=scene==='walk'?WALK_LIMIT:DURATION[scene]??0;
   if(scene==='walk'&&arrived.current)return;
   if(scene==='choice'&&clock.current>=2600&&!chosen)setChosen(true);
   if(clock.current>=limit)advance(scene);
  },100);
  return()=>clearInterval(id);
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[scene,paused,chosen]);
 function go(next:TourScene){clock.current=0;setSceneState(next);}
 function advance(from:TourScene){
  if(from!==scene)return;
  if(from==='welcome'){arrived.current=false;go('walk');if(fallback||reduced.current){setTravel({id:'cafe',n:Date.now()});setTimeout(()=>arrive(),fallback?2500:900);}else setPilot({path:TOUR_PATH,location:'cafe',n:Date.now()});}
  else if(from==='walk')arrive();
  else if(from==='choice')go('talk');
  else if(from==='talk'){go('end');trackMarketingEvent('demo_complete',{level,zone:'guided_tour'});}
 }
 function arrive(){if(arrived.current)return;arrived.current=true;setPilot(null);setChosen(false);go('choice');}
 function start(){
  if(!ready&&!fallback)return;
  setPaused(false);setChosen(false);arrived.current=false;setPilot(null);
  if(!fallback){setTravel({id:'__spawn',n:Date.now()});}
  go('welcome');
  started.current++;
  const track=()=>{if(consentFor('analytics'))trackMarketingEvent('demo_start',{level,zone:'guided_tour'});};
  if(consentFor('analytics'))track();else{const once=()=>{track();window.removeEventListener(CONSENT_EVENT,once);};window.addEventListener(CONSENT_EVENT,once);}
 }
 // Autoplay once the engine is ready and the visitor has not started it by hand.
 useEffect(()=>{if((ready||fallback)&&scene==='idle'&&wantedRef.current&&started.current===0)start();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[ready,fallback]);
 useEffect(()=>{
  const clip=video.current;if(!clip||!fallback)return;
  if(scene==='walk'){clip.src=clip.src||'/brand/campaign/noche-demo.mp4';void clip.play().catch(()=>{});}else clip.pause();
 },[scene,fallback]);
 const skip=()=>{if(scene==='welcome'||scene==='walk')arrive();else if(scene==='choice')go('talk');else if(scene==='talk')advance('talk');};
 const close=()=>{setPilot(null);setPaused(false);go('idle');};
 const label=scene==='welcome'?'Welcome':scene==='walk'?'01 · Mission':scene==='choice'?'02 · Choice':scene==='talk'?'03 · Conversation':scene==='end'?'Next step':'';
 return <div ref={host} className={`gt-tour gt-tour-${scene}${fallback?' gt-tour-fallback':''}`} data-scene={scene} aria-label="Guided teacher preview of Noche Abierta">
  <div className="gt-tour-stage">
   {!fallback&&Scene&&<Scene paused={paused||scene==='idle'&&!wanted} travel={travel} autopilot={pilot} guided onArrive={()=>arrive()} onInteract={()=>{}} onGate={()=>{}} onReady={()=>setReady(true)} onFail={()=>{setFallback(true);setReady(true);}} es={false} />}
   {fallback&&<video ref={video} className="gt-tour-video" muted playsInline loop preload="none" poster="/brand/campaign/noche-demo-poster.webp" aria-label="Real Noche Abierta gameplay" />}
   {(!ready&&!fallback)&&<div className="gt-tour-poster" style={{backgroundImage:'url(/brand/campaign/noche-demo-poster.webp)'}}>
    {wanted?<span className="gt-tour-loading" role="status"><i/>Loading the city…</span>:<button type="button" className="im-primary" onClick={()=>host.current?.dispatchEvent(new Event('tour-start'))}>Watch a real lesson ▶</button>}
   </div>}
   {(ready||fallback)&&scene==='idle'&&<div className="gt-tour-poster gt-tour-replay"><button type="button" className="im-primary" onClick={start}>{started.current?'Replay the lesson ▶':'Watch a real lesson ▶'}</button></div>}
   <div className="gt-tour-tag"><span>TEACHER PREVIEW · {level}</span>{scene!=='idle'&&<b>{label}</b>}</div>
   {scene==='welcome'&&<div className="gt-tour-card gt-tour-welcome"><h3>THIS IS A SPANISH LESSON.</h3><p>Your student explores a real situation. You guide the conversation.</p></div>}
   {scene==='walk'&&<div className="gt-tour-card gt-tour-mission"><span className="im-eyebrow">01 — GIVE YOUR STUDENT A MISSION</span><p className="gt-tour-quote" lang="es">«Busca el café y pide algo para beber.»</p><p>Find the café and order something to drink. Practice directions, vocabulary and everyday communication.</p><small>Walking to Café Martina…</small></div>}
   {(scene==='choice'||scene==='talk')&&<div className="gt-tour-activity" role="group" aria-live="polite">
    <span className="im-eyebrow">{scene==='choice'?'02 — STUDENTS MAKE MEANINGFUL CHOICES':'03 — TURN EVERY CHOICE INTO REAL CONVERSATION'}</span>
    <p className="gt-tour-venue">{cafe.name} · {level} · {activity.title}</p>
    {scene==='choice'?<>
     <p className="gt-tour-situation" lang="es">{activity.situation}</p>
     <p className="gt-tour-prompt" lang="es">{activity.prompt}</p>
     <ol className="gt-tour-options" lang="es">{activity.options?.map((o,i)=><li key={o.id} className={chosen&&o.id===pick?.id?'picked':''}><span>{String.fromCharCode(65+i)}</span>{o.label}{chosen&&o.id===pick?.id&&<b>✓</b>}</li>)}</ol>
     <small>Guided demo: this choice is simulated. In class, your student chooses.</small>
    </>:<>
     <p className="gt-tour-chosen" lang="es">“{pick?.label}”</p>
     <p className="gt-tour-close" lang="es">{activity.close}</p>
     <p className="gt-tour-note">Your student talks about their own life. You guide the discussion.</p>
     {activity.teacher?.length?<div className="gt-tour-teacher"><span>TEACHER NOTES</span><ul lang="es">{activity.teacher.map(t=><li key={t}>{t}</li>)}</ul></div>:null}
    </>}
   </div>}
   {scene==='end'&&<div className="gt-tour-end">
    <span className="im-eyebrow">THAT WAS ONE SCENE OF ONE LESSON</span>
    <h3>Teach it today.</h3>
    <p>Full city, interactive grammar, listening and homework for A1–C2.</p>
    {!pro?<div className="gt-tour-checkout"><CheckoutButton signedIn={signedIn} returnTo="/noche-abierta" variant="landing" paddleOnly /></div>:<Link className="im-primary" href="/noche-abierta">Open the full city ↗</Link>}
    <div className="gt-tour-end-links"><a className="gt-secondary" href={grammarHref}>EXPLORE AN INTERACTIVE GRAMMAR LESSON ↓</a><Link className="gt-quiet" href={exploreHref}>Explore the free city yourself ↗</Link></div>
   </div>}
  </div>
  {scene!=='idle'&&<div className="gt-tour-bar">
   <span className="gt-tour-steps" aria-hidden="true">{(['welcome','walk','choice','talk','end'] as TourScene[]).map(s=><i key={s} className={s===scene?'on':''}/>)}</span>
   <div>
    {scene!=='end'&&<button type="button" onClick={()=>setPaused(!paused)}>{paused?'Resume ▷':'Pause Ⅱ'}</button>}
    {scene!=='end'&&<button type="button" onClick={skip}>Skip →</button>}
    {scene==='end'&&<button type="button" onClick={start}>Replay ↺</button>}
    <button type="button" onClick={close}>Close ×</button>
   </div>
  </div>}
 </div>;
}
