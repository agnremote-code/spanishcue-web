'use client';
import Link from 'next/link';
import {useEffect,useRef,useState,type ComponentType} from 'react';
import {useI18n} from '../i18n/LocaleProvider';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import {choose,emptyProgress,type Progress} from '../noche-abierta/activities.mjs';
import type {Activity} from '../noche-abierta/engine.mjs';
import type {DemoPayload,DemoLocation} from './demo-content.mjs';
import type {DemoSceneProps} from './DemoScene';
import {DEMO_LEVELS,PRO_DISTRICTS} from './policy.mjs';
import {trackMarketingEvent} from '../marketing/analytics';
import {CONSENT_EVENT,consentFor} from '../privacy/consent';
import PremiumPanel from './PremiumPanel';

type Encounter={location:DemoLocation;activity:Activity;progress:Progress};
export default function CityDemo({initial,signedIn,home='/lp/online-spanish-teaching-resources'}:{initial:DemoPayload;signedIn:boolean;home?:string}){
 const {locale}=useI18n();const es=locale==='es';
 const [payload,setPayload]=useState(initial);
 const [Scene,setScene]=useState<ComponentType<DemoSceneProps>|null>(null);
 const [fallback,setFallback]=useState(false);const [ready,setReady]=useState(false);const [slow,setSlow]=useState(false);
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
  // Slow networks or GPUs: never leave the visitor on an endless spinner.
  const slowTimer=window.setTimeout(()=>{if(active)setSlow(true);},10000);
  return()=>{active=false;window.clearTimeout(slowTimer);request.current?.abort();};
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
  if(location.locked){setMap(false);setGate(location.name);return;}
  const activity=location.activities.find(a=>!completed.includes(`${payload.level}/${a.id}`))??location.activities[0];
  if(!activity){setGate(location.name);return;}
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
 const mapLabel=es?'Usar mapa sin 3D':'Use map without 3D';
 const useMap=()=>{setFallback(true);setReady(true);};
 const busy=Boolean(encounter||gate||map||loading);
 const premiumLocations=payload.locations.filter(l=>l.locked).map(l=>l.id);
 return <main className="im-demo">
  <header className="im-demo-nav"><Link className="im-wordmark" href={home}>SPANISHCUE<span> / NOCHE ABIERTA</span></Link><LanguageSwitcher /><Link href="/">{es?'Biblioteca':'Library'} ↗</Link></header>
  <section ref={stage} className="im-stage" aria-label={es?'Ciudad 3D gratuita':'Free 3D city'}>
   {!fallback&&Scene&&<Scene paused={busy} travel={travel} onInteract={openLocation} premiumLocations={premiumLocations} onGate={name=>setGate(`Barrio VIP · ${name}`)} onReady={()=>setReady(true)} onFail={()=>{setFallback(true);setReady(true);}} es={es} />}
   {(!Scene&&!fallback)&&<div className="im-loading" role="status"><span className="im-orbit"/><h1>{es?'La ciudad te espera.':'The city is waiting.'}</h1><p>{es?'Preparando tu primera noche…':'Getting your first night ready…'}</p>{slow&&<button className="im-loading-skip" onClick={useMap}>{mapLabel}</button>}</div>}
   <div className="im-hud"><div><span className="im-live">● {es?'CENTRO · GRATIS':'CENTRE · FREE'}</span><h1>{es?'Una ciudad. Tu español.':'A city. Your Spanish.'}</h1></div><div className="im-level"><label htmlFor="demo-level">{es?'Tu nivel':'Your level'}</label><select id="demo-level" value={payload.level} disabled={busy} onChange={e=>void changeLevel(e.target.value)}>{DEMO_LEVELS.map(l=><option key={l}>{l}</option>)}</select></div></div>
   <div className="im-demo-actions"><button onClick={()=>setMap(!map)} aria-expanded={map}>{map?(es?'Cerrar mapa':'Close map'):(es?'Mapa de la ciudad':'City map')} ◇</button><button onClick={()=>setGate(es?'Explora todo SPANISHCUE':'Explore all of SPANISHCUE')} disabled={Boolean(encounter)}>PRO ↗</button></div>
   {error&&<p className="im-error" role="alert">{error}</p>}
   {(fallback||map)&&<div className="im-map" aria-label={es?'Mapa interactivo':'Interactive map'}>
    <div className="im-map-head"><h2>{es?'Elige tu próxima parada':'Choose your next stop'}</h2><p>{fallback?(es?'Modo sin 3D: todas las actividades gratuitas siguen disponibles.':'No-3D mode: all free activities are still available.'):(es?'Los diez lugares del centro son gratis. Los ocho barrios son PRO.':'All ten venues in the centre are free. The eight districts are PRO.')}</p></div>
    <div className="im-venues">{payload.locations.map((l,i)=><button key={l.id} onClick={()=>l.locked?setGate(l.name):fallback?openLocation(l.id):(setTravel({id:l.id,n:Date.now()}),setMap(false))}><span>{String(i+1).padStart(2,'0')} {l.locked?'🔒':''}</span><strong>{l.name}</strong><small>{l.locked?(es?'PRO · Desbloquear':'PRO · Unlock'):(es?'GRATIS · Entrar':'FREE · Enter')} →</small></button>)}</div>
    <div className="im-districts">{PRO_DISTRICTS.map(name=><button key={name} onClick={()=>setGate(`Barrio VIP · ${name}`)}><span>🔒 {name}</span><b>PRO ↗</b></button>)}</div>
   </div>}
   <div className="im-progress"><span>{completed.length<3?`${completed.length}/3 ${es?'conversaciones':'conversations'}`:(es?'✓ Tu primera ruta completada':'✓ Your first route complete')}</span><small>{es?'Sin tarjeta · Los barrios son PRO':'No card · The districts are PRO'}</small>{completed.length>=3&&<button className="im-progress-cta" onClick={()=>setGate('Más conversaciones VIP')}>{es?'🔒 Desbloquear más conversaciones':'🔒 Unlock more conversations'} →</button>}</div>
  </section>
  <section className="im-underworld"><p>{es?'Acércate a los círculos de luz del centro: todos son gratis. Los barrios son PRO.':'Walk to the glowing circles in the centre: they are all free. The districts are PRO.'}</p><button onClick={useMap}>{mapLabel}</button></section>
  {encounter&&<dialog className="im-activity" aria-labelledby="im-activity-title" onCancel={e=>{e.preventDefault();setEncounter(null);}}>
   <button className="im-close" onClick={()=>setEncounter(null)} aria-label={es?'Volver a la ciudad':'Return to city'}>×</button>
   <span className="im-eyebrow">{encounter.location.name} · {payload.level} · {es?'CONVERSACIÓN GRATIS':'FREE CONVERSATION'}</span><h2 id="im-activity-title">{encounter.activity.title}</h2>
   {!encounter.progress.choice?<><p className="im-step">01 / {es?'Elige tu respuesta':'Choose your response'}</p><p className="im-situation" lang="es">{encounter.activity.situation}</p><h3 lang="es">{encounter.activity.prompt}</h3><div className="im-options">{encounter.activity.options?.map((o,i)=><button key={o.id} lang="es" onClick={()=>pick(o.id)}><span>{String.fromCharCode(65+i)}</span>{o.label}</button>)}</div></>:<><p className="im-step">02 / {es?'Ahora habla de ti':'Now talk about yourself'}</p><p className="im-chosen" lang="es">“{encounter.activity.options?.find(o=>o.id===encounter.progress.choice)?.label}”</p><h3 lang="es">{encounter.activity.close}</h3><p>{es?'Responde en voz alta. Puedes preparar tu respuesta aquí:':'Answer out loud. You can prepare your answer here:'}</p><textarea ref={spoken} key={encounter.activity.id} aria-label={es?'Tu respuesta personal':'Your personal response'} placeholder={encounter.location.help.starters[0]} /><small>{es?'Tu respuesta se queda en esta pantalla. No se envía ni se evalúa automáticamente.':'Your answer stays on this screen. It is not sent or automatically graded.'}</small><button className="im-primary" onClick={finish}>{es?'Respuesta lista · Continuar explorando':'I have answered · Keep exploring'} →</button></>}
   <details className="im-help"><summary>{es?'Ayuda para hablar':'Help with speaking'}</summary><div lang="es">{encounter.location.help.starters.map(s=><p key={s}>{s}</p>)}<p>{encounter.location.help.chunks.join(' · ')}</p>{encounter.location.grammar&&<><b>{encounter.location.grammar.title}</b>{encounter.location.grammar.rows.map(r=><p key={r.form}>{r.form} — {r.example}</p>)}</>}</div></details>
   <button className="im-quiet" onClick={()=>setNotes(!notes)}>{es?'Notas para profesores':'Teacher notes'}</button>{notes&&<ul lang="es">{encounter.activity.teacher?.map(s=><li key={s}>{s}</li>)}</ul>}
   {encounter.location.premiumCount>0&&<button className="im-unlock-more" onClick={()=>{const area=encounter.location.name;setEncounter(null);setGate(`Conversaciones VIP · ${area}`);}}>🔒 {es?`Desbloquear ${encounter.location.premiumCount} conversaciones PRO`:`Unlock ${encounter.location.premiumCount} PRO conversations`} →</button>}
  </dialog>}
  {gate&&<PremiumPanel area={gate} signedIn={signedIn} onClose={()=>setGate(null)} />}
 </main>;
}
