"use client";
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import {SpanishCueBrand} from '../SpanishCueBrand';
import data from './content.json';
import audio from './audio-manifest.json';
import {LEVELS,resolveLevel,initialProgress,restoreProgress,markComplete} from './state.mjs';
import CityMap from './CityMap';
import ScenePanel from './ScenePanel';
import type {Content} from './types';
import './style.css';
import {restoreSceneFocus} from './focus';
const content=data as unknown as Content;
const STORAGE='spanishcue:sound-map:v1';
export default function SoundMap(){
 const [level,setLevel]=useState('A0');
 const [active,setActive]=useState<string|null>(null);
 const [progress,setProgress]=useState<Record<string,string[]>>(initialProgress);
 const [loaded,setLoaded]=useState(false);
 const [summary,setSummary]=useState(false);
 const [resetConfirm,setResetConfirm]=useState(false);
 const panel=useRef<HTMLDivElement>(null);
 const sceneTrigger=useRef<HTMLElement|null>(null);
 useEffect(()=>{
  const sync=()=>{const url=new URL(window.location.href);
  try{setLevel(resolveLevel(url.searchParams.get('level')??localStorage.getItem(`${STORAGE}:level`)));setProgress(restoreProgress(localStorage.getItem(STORAGE)));}catch{setLevel(resolveLevel(url.searchParams.get('level')));}
  setLoaded(true);};
  const timer=window.setTimeout(sync,0);
  window.addEventListener('popstate',sync);
  return()=>{window.clearTimeout(timer);window.removeEventListener('popstate',sync);};
 },[]);
 useEffect(()=>{if(loaded)try{localStorage.setItem(STORAGE,JSON.stringify(progress));}catch{}},[progress,loaded]);
 useEffect(()=>{if(!active)return;const id=requestAnimationFrame(()=>panel.current?.querySelector<HTMLElement>('#sm-scene-title')?.focus({preventScroll:true}));return()=>cancelAnimationFrame(id);},[active,level]);
 function changeLevel(value:string){const next=resolveLevel(value);setLevel(next);setActive(null);setSummary(false);setResetConfirm(false);const url=new URL(window.location.href);url.searchParams.set('level',next);window.history.replaceState({},'',url);try{localStorage.setItem(`${STORAGE}:level`,next);}catch{}}
 function choose(id:string,trigger:HTMLElement){sceneTrigger.current=trigger;setActive(id);setSummary(false);requestAnimationFrame(()=>panel.current?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'}));}
 const unit=content.levels[level];const completed=progress[level]??[];
 const scene=unit.scenes.find(x=>x.id===active);const location=content.locations.find(x=>x.id===active);
 const clip=audio.clips.find(x=>x.id===`${level}-${active}`);
 const bilingual=level==='A0';
 function returnToMap(id:string|null){if(sceneTrigger.current?.isConnected)sceneTrigger.current.focus({preventScroll:true});if(document.activeElement!==sceneTrigger.current)restoreSceneFocus(document,id);}
 function closeScene(){const id=active;setActive(null);requestAnimationFrame(()=>returnToMap(id));}
 function next(){const id=active;setActive(null);if(new Set([...completed,...(active?[active]:[])]).size===6)setSummary(true);requestAnimationFrame(()=>{returnToMap(id);document.querySelector<HTMLElement>('.sm-map')?.scrollIntoView({block:'nearest'});});}
 return <main className="sm-app">
  <header className="sm-top"><Link href="/" aria-label="SpanishCue library"><SpanishCueBrand variant="compact"/></Link><Link href="/">← {bilingual?'Biblioteca / Library':'Biblioteca'}</Link></header>
  <section className="sm-hero"><div><p className="sm-eyebrow">LISTENING LAB <i/> RÍO CLARO</p><h1>The Sound <em>Map.</em></h1><p className="sm-tagline">Cada rincón tiene una historia.{bilingual&&<span>Every corner has a story.</span>}</p></div><div className="sm-hero-note"><span className="sm-sound-mark" aria-hidden="true">ııııııı</span><p>{bilingual?'Explora la ciudad. Toca un sonido. Escucha.':'Una ciudad viva. Seis escenas que solo descubres si escuchas.'}</p>{bilingual&&<small>Explore the city. Tap a sound. Listen.</small>}<button className="sm-start" onClick={event=>choose(content.locations.find(x=>!completed.includes(x.id))?.id??'balcony',event.currentTarget)}>{bilingual?'Empezar / Start exploring':'Seguir un sonido'} ↗</button></div></section>
  <section className="sm-toolbar"><div className="sm-level-control"><label htmlFor="sm-level">{bilingual?'Tu nivel / Your level':'Tu nivel'}</label><select id="sm-level" value={level} onChange={e=>changeLevel(e.target.value)}>{LEVELS.map(l=><option key={l} value={l}>{l}{l==='A0'?' · Desde cero / From zero':''}</option>)}</select></div><p>{unit.focus}{bilingual&&<span>{unit.focusEn}</span>}</p><div className="sm-progress"><b>{completed.length}<small> / 6</small></b><span>{bilingual?'rincones / corners':'rincones explorados'}</span><progress max={6} value={completed.length} aria-label={bilingual?'Progreso / Progress':'Progreso del nivel'}/></div></section>
  <div className={`sm-workspace ${active?'has-scene':''}`}><div className="sm-map-column"><CityMap locations={content.locations} active={active} completed={completed} onSelect={choose} bilingual={bilingual}/><details className="sm-scene-directory"><summary>{bilingual?'Ver los seis sonidos / Browse all six sounds':'Ver los seis sonidos'}</summary><nav className="sm-location-list" aria-label={bilingual?'Elige una escena / Choose a scene':'Puntos de escucha'}>{content.locations.map((loc,i)=><button key={loc.id} data-sound-location={loc.id} className={active===loc.id?'selected':''} onClick={event=>choose(loc.id,event.currentTarget)} aria-pressed={active===loc.id}><span className="sm-location-icon">{loc.icon}</span><span><small>0{i+1} {completed.includes(loc.id)?'· ✓':''}</small><b>{loc.title}</b><em>{bilingual?loc.titleEn:loc.sound}</em></span><i>↗</i></button>)}</nav></details></div>
  {scene&&location&&clip&&<div className="sm-panel-wrap" ref={panel}><ScenePanel key={`${level}-${active}`} scene={scene} location={location} level={level} clip={clip} alreadyComplete={completed.includes(scene.id)} onClose={closeScene} onComplete={()=>setProgress(old=>markComplete(old,level,scene.id))} onNext={next}/></div>}</div>
  {!active&&<section className="sm-route-end"><div><small>{bilingual?'TU RUTA / YOUR ROUTE':'TU POSTAL SONORA'}</small><h2>{completed.length===6?(bilingual?'La ciudad ya tiene tu voz. / The city has your voice.':'La ciudad ya tiene tu voz.'):(bilingual?'¿Qué historia te llevas? / Which story stays with you?':'¿Qué historia te llevas?')}</h2><p>{bilingual?'Elige un rincón y di una palabra que recuerdes. / Choose a corner and say one word you remember.':level==='A1'||level==='A2'?'Elige una escena. Cuenta quién estaba, qué pasó y qué recuerdas.':'Une dos escenas: ¿qué tienen en común? Distingue lo que oíste, lo que inferiste y lo que sigue abierto.'}</p></div><button className="sm-check" aria-expanded={summary} onClick={()=>setSummary(x=>!x)}>{bilingual?'Ver mi ruta / View my route':'Ver mi ruta'} ↗</button>{summary&&<div className="sm-summary"><p>{bilingual?'Práctica guardada en este navegador por nivel. / Practice saved by level in this browser.':'Este mapa registra práctica, no certifica dominio. Tu ruta se guarda en este navegador por nivel.'}</p><div>{content.locations.map(loc=><span key={loc.id} className={completed.includes(loc.id)?'is-done':''}>{completed.includes(loc.id)?'✓':'○'} {bilingual?loc.titleEn:loc.title}</span>)}</div><button onClick={()=>setResetConfirm(true)}>{bilingual?'Reiniciar este nivel / Reset this level':'Reiniciar este nivel'}</button>{resetConfirm&&<p>{bilingual?'¿Borrar solo esta ruta? / Clear this level only?':'¿Borrar el progreso de este nivel?'} <button onClick={()=>{setProgress(old=>({...old,[level]:[]}));setResetConfirm(false);}}>{bilingual?'Sí / Yes':'Sí, reiniciar'}</button> <button onClick={()=>setResetConfirm(false)}>{bilingual?'Cancelar / Cancel':'Cancelar'}</button></p>}</div>}</section>}
  <footer className="sm-footer"><span>SPANISHCUE · THE SOUND MAP</span><span>{bilingual?'Auriculares recomendados / Headphones recommended':'Mejor con auriculares · A tu ritmo'}</span></footer>
 </main>;
}
