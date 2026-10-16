'use client';
import {useEffect,useRef,useState,type ComponentType} from 'react';
import Link from 'next/link';
import CheckoutButton from '../acceso/CheckoutButton';
import {useI18n} from '../i18n/LocaleProvider';
import {trackMarketingEvent} from '../marketing/analytics';
import {gtCopy} from './google-copy';
import {CONSENT_EVENT,consentFor} from '../privacy/consent';
import type {DemoSceneProps} from './DemoScene';
import type {Activity,Location} from '../noche-abierta/engine.mjs';

/** Walkable route from the demo spawn to the Café Martina door, checked against the real colliders. */
export const TOUR_PATH=[{x:-7,z:24},{x:-7,z:7},{x:-11,z:7},{x:-11.5,z:-6.3}];
export type TourScene='idle'|'welcome'|'walk'|'choice'|'talk'|'end'|'free';
const DURATION:Partial<Record<TourScene,number>>={welcome:4200,choice:6500,talk:9000};
const WALK_LIMIT=16000;
/** The places a driving visitor can open, trimmed on the server to one activity each. */
export type TourSpot=Pick<Location,'id'|'name'>&{activity:Pick<Activity,'id'|'title'|'situation'|'prompt'|'options'|'close'|'teacher'|'says'|'ask'>};
type Props={cafe:Location;spots:TourSpot[];level:string;signedIn:boolean;pro:boolean;exploreHref:string;autoplay:boolean;onExploreMore:()=>void;onBuyClick:()=>void;onUnlockClick:()=>void};

export default function GuidedTour({cafe,spots,level,signedIn,pro,exploreHref,autoplay,onExploreMore,onBuyClick,onUnlockClick}:Props){
 const {locale}=useI18n();const es=locale==='es';const c=gtCopy(es).tour;
 const [Scene,setScene]=useState<ComponentType<DemoSceneProps>|null>(null);
 const [scene,setSceneState]=useState<TourScene>('idle');
 const [ready,setReady]=useState(false);const [fallback,setFallback]=useState(false);
 const [paused,setPaused]=useState(false);const [chosen,setChosen]=useState(false);
 const [wanted,setWanted]=useState(false);const [pilot,setPilot]=useState<DemoSceneProps['autopilot']>(null);
 const [travel,setTravel]=useState<{id:string;n:number}|null>(null);
 // Driving mode: the spot the visitor opened, their answer, and a PRO door they walked into.
 const [open,setOpen]=useState<TourSpot|null>(null);const [answer,setAnswer]=useState<string|null>(null);const [door,setDoor]=useState<string|null>(null);
 const [unlock,setUnlock]=useState(false);const [full,setFull]=useState(false);
 const host=useRef<HTMLDivElement>(null);const clock=useRef(0);const arrived=useRef(false);const started=useRef(0);const drove=useRef(false);
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
  // The tour sits in the hero, so it starts loading and playing as soon as the page is interactive.
  if(autoplay&&!saveData)load();
  const fullchange=()=>setFull(document.fullscreenElement===stage);
  document.addEventListener('fullscreenchange',fullchange);
  return()=>{active=false;stage.removeEventListener('tour-start',load);document.removeEventListener('fullscreenchange',fullchange);};
 },[autoplay]);
 // Scene clock: advances only while playing and visible.
 useEffect(()=>{
  if(scene==='idle'||scene==='end'||scene==='free')return;
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
  setPaused(false);setChosen(false);arrived.current=false;setPilot(null);setOpen(null);setDoor(null);
  if(!fallback){setTravel({id:'__spawn',n:Date.now()});}
  go('welcome');
  started.current++;
  const track=()=>{if(consentFor('analytics'))trackMarketingEvent('demo_start',{level,zone:'guided_tour'});};
  if(consentFor('analytics'))track();else{const once=()=>{track();window.removeEventListener(CONSENT_EVENT,once);};window.addEventListener(CONSENT_EVENT,once);}
 }
 /** Hands the avatar to the visitor: real controls, real spots, the same activities, nothing simulated. */
 function drive(){
  if(fallback||!ready)return;
  setPilot(null);setPaused(false);setOpen(null);setAnswer(null);setDoor(null);go('free');
  host.current?.querySelector<HTMLElement>('.im-world')?.focus({preventScroll:true});
  if(!drove.current){drove.current=true;trackMarketingEvent('demo_start',{level,zone:'guided_tour_drive'});}
 }
 function interact(id:string){
  const spot=spots.find(s=>s.id===id);if(!spot||scene!=='free')return;
  setAnswer(null);setDoor(null);setOpen(spot);
  trackMarketingEvent('lesson_preview_open',{lesson_title:spot.name,category:'conversation',access:'free',placement:'landing_google-teachers_drive'});
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
 const close=()=>{setPilot(null);setPaused(false);setOpen(null);setDoor(null);setUnlock(false);if(document.fullscreenElement===host.current)void document.exitFullscreen().catch(()=>{});go('idle');};
 // Full screen is part of PRO: for everyone else the button opens the offer, never the screen.
 const fullscreen=()=>{
  if(!pro){setUnlock(true);trackMarketingEvent('premium_gate_view',{zone:'fullscreen',placement:'landing_google-teachers_tour'});return;}
  const stage=host.current;if(!stage)return;
  if(document.fullscreenElement===stage)void document.exitFullscreen().catch(()=>{});else void stage.requestFullscreen?.().catch(()=>{});
 };
 const label=scene==='idle'?'':c.labels[scene];
 const busy=paused||scene==='end'||scene==='idle'&&!wanted||open!==null||door!==null||unlock;
 return <div ref={host} className={`gt-tour gt-tour-${scene}${fallback?' gt-tour-fallback':''}${full?' gt-tour-full':''}`} data-scene={scene} aria-label={c.aria}>
  <div className="gt-tour-stage">
   {!fallback&&Scene&&<Scene paused={busy} travel={travel} autopilot={pilot} guided={scene!=='free'} onArrive={()=>arrive()} onInteract={interact} onGate={name=>{if(scene==='free')setDoor(name);}} onReady={()=>setReady(true)} onFail={()=>{setFallback(true);setReady(true);}} es={es} />}
   {fallback&&<video ref={video} className="gt-tour-video" muted playsInline loop preload="none" poster="/brand/campaign/noche-demo-poster.webp" aria-label="Real Noche Abierta gameplay" />}
   {(!ready&&!fallback)&&<div className="gt-tour-poster" style={{backgroundImage:'url(/brand/campaign/noche-demo-poster.webp)'}}>
    {wanted||autoplay?<span className="gt-tour-loading" role="status"><i/>{c.loading}</span>:<button type="button" className="im-primary" onClick={()=>host.current?.dispatchEvent(new Event('tour-start'))}>{c.watch}</button>}
   </div>}
   {(ready||fallback)&&scene==='idle'&&<div className="gt-tour-poster gt-tour-replay"><button type="button" className="im-primary" onClick={start}>{started.current?c.replay:c.watch}</button>{!fallback&&started.current>0&&<button type="button" className="gt-secondary" onClick={drive}>{c.takeControls}</button>}</div>}
   <div className="gt-tour-tag"><span>{c.tag} · {level}</span>{scene!=='idle'&&<b>{label}</b>}</div>
   {scene==='welcome'&&<div className="gt-tour-card gt-tour-welcome"><h3>{c.welcomeH}</h3><p>{c.welcomeP}</p></div>}
   {scene==='walk'&&<div className="gt-tour-card gt-tour-mission"><span className="im-eyebrow">{c.missionEyebrow}</span><p className="gt-tour-quote" lang="es">«Busca el café y pide algo para beber.»</p><p>{c.missionP}</p><small><i/>{c.walking}</small></div>}
   {(scene==='choice'||scene==='talk')&&<div className="gt-tour-activity" role="group" aria-live="polite">
    <span className="im-eyebrow">{scene==='choice'?c.choiceEyebrow:c.talkEyebrow}</span>
    <p className="gt-tour-venue">{cafe.name} · {level} · {activity.title}</p>
    {scene==='choice'?<>
     <p className="gt-tour-situation" lang="es">{activity.situation}</p>
     <p className="gt-tour-prompt" lang="es">{activity.prompt}</p>
     <ol className="gt-tour-options" lang="es">{activity.options?.map((o,i)=><li key={o.id} className={chosen&&o.id===pick?.id?'picked':''}><span>{String.fromCharCode(65+i)}</span>{o.label}{chosen&&o.id===pick?.id&&<b>✓</b>}</li>)}</ol>
     <small>{c.simulated}</small>
    </>:<>
     <p className="gt-tour-chosen" lang="es">“{pick?.label}”</p>
     <p className="gt-tour-close" lang="es">{activity.close}</p>
     <p className="gt-tour-note">{c.ownLife}</p>
     {activity.teacher?.length?<div className="gt-tour-teacher"><span>{c.teacherNotes}</span><ul lang="es">{activity.teacher.map(t=><li key={t}>{t}</li>)}</ul></div>:null}
    </>}
   </div>}
   {scene==='free'&&!open&&!door&&<div className="gt-tour-card gt-tour-drive" role="status">
    <span className="im-eyebrow">{c.driveEyebrow}</span>
    <p>{c.driveA}<b>{c.driveTalk}</b>{c.driveB}</p>
    <small>{c.driveSmall(spots.length)}</small>
   </div>}
   {scene==='free'&&open&&<div className="gt-tour-activity gt-tour-live" role="group" aria-live="polite">
    <span className="im-eyebrow">{answer?c.nowTalk:c.chooseEyebrow}</span>
    <p className="gt-tour-venue">{open.name} · {level} · {open.activity.title}</p>
    {!answer?<>
     {(open.activity.situation||open.activity.says)&&<p className="gt-tour-situation" lang="es">{open.activity.situation||open.activity.says}</p>}
     <p className="gt-tour-prompt" lang="es">{open.activity.prompt||open.activity.ask}</p>
     {open.activity.options?.length?<ol className="gt-tour-options gt-tour-pick" lang="es">{open.activity.options.map((o,i)=><li key={o.id}><button type="button" onClick={()=>setAnswer(o.label)}><span>{String.fromCharCode(65+i)}</span>{o.label}</button></li>)}</ol>
     :<button type="button" className="im-primary" onClick={()=>setAnswer('')}>{c.answered}</button>}
    </>:<>
     {answer&&<p className="gt-tour-chosen" lang="es">“{answer}”</p>}
     <p className="gt-tour-close" lang="es">{open.activity.close||open.activity.ask||open.activity.prompt}</p>
     {open.activity.teacher?.length?<div className="gt-tour-teacher"><span>{c.teacherNotes}</span><ul lang="es">{open.activity.teacher.map(t=><li key={t}>{t}</li>)}</ul></div>:null}
     <button type="button" className="im-primary" onClick={()=>setOpen(null)}>{c.keepExploring}</button>
    </>}
    <button type="button" className="gt-tour-x" onClick={()=>setOpen(null)} aria-label={c.closeActivity}>×</button>
   </div>}
   {scene==='free'&&door&&<div className="gt-tour-card gt-tour-door" role="group" aria-live="polite">
    <span className="im-eyebrow">PRO · {door}</span>
    <p>{c.doorP}</p>
    {!pro?<div className="gt-tour-checkout gt-tour-checkout-one" onClickCapture={onBuyClick}><CheckoutButton signedIn={signedIn} returnTo="/noche-abierta" variant="landing" paddleOnly /></div>:<Link className="im-primary" href="/noche-abierta">{c.openFull}</Link>}
    <button type="button" className="gt-quiet" onClick={()=>setDoor(null)}>{c.doorBack}</button>
   </div>}
   {scene==='end'&&<div className="gt-tour-end">
    <span className="im-eyebrow">{c.endEyebrow}</span>
    <h3>{c.endH}</h3>
    <p>{c.endP}</p>
    {!pro?<div className="gt-tour-checkout" onClickCapture={onBuyClick}><CheckoutButton signedIn={signedIn} returnTo="/noche-abierta" variant="landing" paddleOnly /></div>:<Link className="im-primary" href="/noche-abierta">{c.openFull}</Link>}
    <div className="gt-tour-end-links">{!fallback&&<button type="button" className="gt-secondary" onClick={drive}>{c.takeControls.toUpperCase()}</button>}<button type="button" className="gt-secondary" onClick={onExploreMore}>{c.explore}</button><Link className="gt-quiet" href={exploreHref}>{c.exploreFree}</Link></div>
   </div>}
   {unlock&&<div className="gt-tour-unlock" role="dialog" aria-label={c.unlockAria}>
    <span className="im-eyebrow">{c.unlockEyebrow}</span>
    <h3>{c.unlockH}</h3>
    <p>{c.unlockP}</p>
    <div className="gt-tour-checkout" onClickCapture={onUnlockClick}><CheckoutButton signedIn={signedIn} returnTo="/noche-abierta" variant="landing" paddleOnly /></div>
    <button type="button" className="gt-quiet" onClick={()=>setUnlock(false)}>{c.notNow}</button>
   </div>}
  </div>
  {scene!=='idle'&&<div className="gt-tour-bar">
   <span className="gt-tour-steps" aria-hidden="true">{(['welcome','walk','choice','talk','end'] as TourScene[]).map(s=><i key={s} className={s===scene||scene==='free'?'on':''}/>)}</span>
   <div>
    {scene!=='end'&&scene!=='free'&&<button type="button" onClick={()=>setPaused(!paused)}>{paused?c.resume:c.pause}</button>}
    {scene!=='end'&&scene!=='free'&&<button type="button" onClick={skip}>{c.skip}</button>}
    {scene!=='free'&&!fallback&&scene!=='welcome'&&<button type="button" onClick={drive}>{c.takeControls}</button>}
    {(scene==='end'||scene==='free')&&<button type="button" onClick={start}>{c.replayBtn}</button>}
    <button type="button" className={`gt-tour-fs${pro?'':' locked'}`} onClick={fullscreen} aria-pressed={full}>{pro?full?c.fsExit:c.fs:c.fsUnlock}</button>
    <button type="button" onClick={close}>{c.close}</button>
   </div>
  </div>}
 </div>;
}
