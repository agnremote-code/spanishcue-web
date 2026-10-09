'use client';
import Link from 'next/link';
import {useEffect,useRef,useState,type ComponentType} from 'react';
import {useI18n} from '../i18n/LocaleProvider';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import {choose,emptyProgress,type Progress} from '../noche-abierta/activities.mjs';
import type {Location,Activity} from '../noche-abierta/engine.mjs';
import type {DemoPayload} from './demo-content.mjs';
import type {DemoSceneProps} from './DemoScene';
import {DEMO_LEVELS,PRO_DISTRICTS} from './policy.mjs';
import {trackMarketingEvent} from '../marketing/analytics';
import {CONSENT_EVENT,consentFor} from '../privacy/consent';
import PremiumPanel from './PremiumPanel';

type Encounter={location:Location;activity:Activity;progress:Progress};
export default function CityDemo({initial,signedIn}:{initial:DemoPayload;signedIn:boolean}){
 const {locale}=useI18n();const es=locale==='es';
 const [payload,setPayload]=useState(initial);
 const [Scene,setScene]=useState<ComponentType<DemoSceneProps>|null>(null);
 const [fallback,setFallback]=useState(false);const [ready,setReady]=useState(false);
 const [map,setMap]=useState(false);const [gate,setGate]=useState<string|null>(null);
 const [encounter,setEncounter]=useState<Encounter|null>(null);
 const [completed,setCompleted]=useState<string[]>([]);const [error,setError]=useState('');
 const [loading,setLoading]=useState(false);const request=useRef<AbortController|null>(null);
 const [travel,setTravel]=useState<{id:string;n:number}|null>(null);
 const first=useRef(false);const complete=useRef(false);const spoken=useRef<HTMLTextAreaElement>(null);
 const stage=useRef<HTMLDivElement>(null);const [notes,setNotes]=useState(false);
 useEffect(()=>{
  let active=true;
  import('./DemoScene').then(module=>{if(active)setScene(()=>module.default);}).catch(()=>{if(active){setFallback(true);setReady(true);}});
  return()=>{active=false;request.current?.abort();};
 },[]);
 useEffect(()=>{
  if(!ready)return;let tracked=false;
  const start=()=>{if(!tracked&&consentFor('analytics')){tracked=true;trackMarketingEvent('demo_start',{level:payload.level,zone:'centro'});}};
  start();window.addEventListener(CONSENT_EVENT,start);return()=>window.removeEventListener(CONSENT_EVENT,start);
 // This event describes one demo session, not each later level change.
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[ready]);
 const activityOpen=Boolean(encounter);
 useEffect(()=>{
  if(!activityOpen)return;
  const previous=document.activeElement as HTMLElement|null;
  const dialog=document.querySelector<HTMLDialogElement>('.im-activity');dialog?.showModal();
  return()=>{dialog?.close();previous?.focus?.();};
 },[activityOpen]);
 function openLocation(id:string){
  const location=payload.locations.find(l=>l.id===id);if(!location)return;
  const activity=location.activities.find(a=>!completed.includes(`${payload.level}/${a.id}`))??location.activities[0];
  setMap(false);setNotes(false);setEncounter({location,activity,progress:emptyProgress()});
 }
 function pick(id:string){
  if(!encounter)return;
  const progress=choose(encounter.location.type,encounter.activity,encounter.progress,id);
  if(progress===encounter.progress)return;
  setEncounter({...encounter,progress});
  if(!first.current){first.current=true;trackMarketingEvent('first_interaction',{level:payload.level,zone:'centro',activity_id:encounter.activity.id});}
 }
 function finish(){
  if(!encounter||!encounter.progress.done)return;
  const key=`${payload.level}/${encounter.activity.id}`;
  const next=completed.includes(key)?completed:[...completed,key];setCompleted(next);setEncounter(null);
  if(next.length>=3&&!complete.current){complete.current=true;trackMarketingEvent('demo_complete',{level:payload.level,zone:'centro'});}
 }
 async function changeLevel(level:string){
  if(encounter||gate)return;
  request.current?.abort();const controller=new AbortController();request.current=controller;setLoading(true);setError('');
  try{
   const response=await fetch(`/api/city-demo?district=centro&level=${encodeURIComponent(level)}`,{signal:controller.signal});
   if(!response.ok)throw new Error('load');const body=await response.json() as DemoPayload;
   if(!controller.signal.aborted)setPayload(body);
  }catch{if(!controller.signal.aborted)setError(es?'No se pudo cambiar el nivel. Inténtalo de nuevo.':'Could not change level. Please try again.');}
  finally{if(!controller.signal.aborted)setLoading(false);}
 }
 const busy=Boolean(encounter||gate||map||loading);
 return <main className="im-demo">
  <header className="im-demo-nav"><Link className="im-wordmark" href="/lp/instagram">SPANISHCUE<span> / NOCHE ABIERTA</span></Link><LanguageSwitcher /><Link href="/">{es?'Biblioteca':'Library'} ↗</Link></header>
  <section ref={stage} className="im-stage" aria-label={es?'Ciudad 3D gratuita':'Free 3D city'}>
   {!fallback&&Scene&&<Scene paused={busy} travel={travel} onInteract={openLocation} onGate={setGate} onReady={()=>setReady(true)} onFail={()=>{setFallback(true);setReady(true);}} es={es} />}
   {(!Scene&&!fallback)&&<div className="im-loading" role="status"><span className="im-orbit"/><h1>{es?'La ciudad te espera.':'The city is waiting.'}</h1><p>{es?'Preparando tu primera noche…':'Getting your first night ready…'}</p></div>}
   <div className="im-hud"><div><span className="im-live">● {es?'CENTRO · GRATIS':'CENTRE · FREE'}</span><h1>{es?'Una ciudad. Tu español.':'A city. Your Spanish.'}</h1></div><div className="im-level"><label htmlFor="demo-level">{es?'Tu nivel':'Your level'}</label><select id="demo-level" value={payload.level} disabled={busy} onChange={e=>void changeLevel(e.target.value)}>{DEMO_LEVELS.map(l=><option key={l}>{l}</option>)}</select></div></div>
   <div className="im-demo-actions"><button onClick={()=>setMap(!map)} aria-expanded={map}>{map?(es?'Cerrar mapa':'Close map'):(es?'Mapa de la ciudad':'City map')} ◇</button><button onClick={()=>setGate(es?'Explora todo SPANISHCUE':'Explore all of SPANISHCUE')} disabled={Boolean(encounter)}>PRO ↗</button></div>
   {error&&<p className="im-error" role="alert">{error}</p>}
   {(fallback||map)&&<div className="im-map" aria-label={es?'Mapa interactivo':'Interactive map'}>
    <div className="im-map-head"><h2>{es?'Elige tu próxima parada':'Choose your next stop'}</h2><p>{fallback?(es?'Modo sin 3D: todas las actividades gratuitas siguen disponibles.':'No-3D mode: all free activities are still available.'):(es?'Diez lugares abiertos. Ocho barrios por descubrir.':'Ten open venues. Eight districts to discover.')}</p></div>
    <div className="im-venues">{payload.locations.map((l,i)=><button key={l.id} onClick={()=>fallback?openLocation(l.id):(setTravel({id:l.id,n:Date.now()}),setMap(false))}><span>{String(i+1).padStart(2,'0')}</span><strong>{l.name}</strong><small>{es?'GRATIS · Entrar':'FREE · Enter'} →</small></button>)}</div>
    <div className="im-districts">{PRO_DISTRICTS.map(name=><button key={name} onClick={()=>setGate(name)}><span>◇ {name}</span><b>PRO ↗</b></button>)}</div>
   </div>}
   <div className="im-progress"><span>{completed.length<3?`${completed.length}/3 ${es?'conversaciones':'conversations'}`:(es?'✓ Tu primera ruta completada':'✓ Your first route complete')}</span><small>{es?'Explora gratis sin límite de tiempo.':'Explore free. No time limit.'}</small></div>
  </section>
  <section className="im-underworld"><p>{es?'Acércate a los círculos de luz. Elige una respuesta y habla de tu vida real.':'Walk to a circle of light. Choose a response, then talk about your own life.'}</p><button onClick={()=>{setFallback(true);setReady(true);}}>{es?'Usar mapa sin 3D':'Use map without 3D'}</button></section>
  {encounter&&<dialog className="im-activity" aria-labelledby="im-activity-title" onCancel={e=>{e.preventDefault();setEncounter(null);}}>
   <button className="im-close" onClick={()=>setEncounter(null)} aria-label={es?'Volver a la ciudad':'Return to city'}>×</button>
   <span className="im-eyebrow">{encounter.location.name} · {payload.level} · {es?'GRATIS':'FREE'}</span><h2 id="im-activity-title">{encounter.activity.title}</h2>
   {!encounter.progress.choice?<><p className="im-step">01 / {es?'Elige tu respuesta':'Choose your response'}</p><p className="im-situation" lang="es">{encounter.activity.situation}</p><h3 lang="es">{encounter.activity.prompt}</h3><div className="im-options">{encounter.activity.options?.map((o,i)=><button key={o.id} lang="es" onClick={()=>pick(o.id)}><span>{String.fromCharCode(65+i)}</span>{o.label}</button>)}</div></>:<><p className="im-step">02 / {es?'Ahora habla de ti':'Now talk about yourself'}</p><p className="im-chosen" lang="es">“{encounter.activity.options?.find(o=>o.id===encounter.progress.choice)?.label}”</p><h3 lang="es">{encounter.activity.close}</h3><p>{es?'Responde en voz alta. Puedes preparar tu respuesta aquí:':'Answer out loud. You can prepare your answer here:'}</p><textarea ref={spoken} key={encounter.activity.id} aria-label={es?'Tu respuesta personal':'Your personal response'} placeholder={encounter.location.help.starters[0]} /><small>{es?'Tu respuesta se queda en esta pantalla. No se envía ni se evalúa automáticamente.':'Your answer stays on this screen. It is not sent or automatically graded.'}</small><button className="im-primary" onClick={finish}>{es?'Respuesta lista · Continuar explorando':'I have answered · Keep exploring'} →</button></>}
   <details className="im-help"><summary>{es?'Ayuda para hablar':'Help with speaking'}</summary><div lang="es">{encounter.location.help.starters.map(s=><p key={s}>{s}</p>)}<p>{encounter.location.help.chunks.join(' · ')}</p>{encounter.location.grammar&&<><b>{encounter.location.grammar.title}</b>{encounter.location.grammar.rows.map(r=><p key={r.form}>{r.form} — {r.example}</p>)}</>}</div></details>
   <button className="im-quiet" onClick={()=>setNotes(!notes)}>{es?'Notas para profesores':'Teacher notes'}</button>{notes&&<ul lang="es">{encounter.activity.teacher?.map(s=><li key={s}>{s}</li>)}</ul>}
   <label className="im-other">{es?'Otra situación':'Another situation'}<select value={encounter.activity.id} onChange={e=>{const activity=encounter.location.activities.find(a=>a.id===e.target.value);if(activity)setEncounter({...encounter,activity,progress:emptyProgress()});}}>{encounter.location.activities.map(a=><option key={a.id} value={a.id}>{a.title}</option>)}</select></label>
  </dialog>}
  {gate&&<PremiumPanel area={gate} signedIn={signedIn} onClose={()=>setGate(null)} />}
 </main>;
}
