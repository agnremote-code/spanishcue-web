'use client';
import {useEffect,useRef,useState} from 'react';
import type {GalleryAPI,GalleryState,GalleryView} from './article-world';
export default function ArticleWorld({state,onPick}:{state:GalleryState;onPick:(id:number)=>void}){
 const host=useRef<HTMLDivElement>(null),api=useRef<GalleryAPI|null>(null),live=useRef({state,onPick});
 const [status,setStatus]=useState<'loading'|'ready'|'fallback'>('loading'),[view,setView]=useState<GalleryView>('overview');
 useEffect(()=>{live.current={state,onPick};api.current?.update(state);},[state,onPick]);
 useEffect(()=>{let disposed=false;Promise.resolve().then(async()=>{if(disposed||!host.current)return;if(typeof ResizeObserver==='undefined'||typeof window.WebGLRenderingContext==='undefined'){setStatus('fallback');return;}try{const {mountArticleWorld}=await import('./article-world');if(disposed||!host.current)return;api.current=mountArticleWorld(host.current,id=>live.current.onPick(id),()=>setStatus('ready'),()=>setStatus('fallback'));api.current.update(live.current.state);}catch{if(!disposed)setStatus('fallback');}});return()=>{disposed=true;api.current?.dispose();api.current=null;};},[]);
 const active=(i:number)=>i===3?state.phase==='context':state.phase!=='context'&&(i===state.selected||(state.plural&&i===(state.selected+1)%3));
 return <div className="agw-world" data-gallery-world data-world-status={status}>
  <div className="agw-world-heading"><span><i/> LA GALERÍA <small>17:42 · SALA 01 / ROOM 01</small></span><span>SPANISHCUE <b>3D</b></span></div>
  <div ref={host} className={`agw-viewport agw-${status}`} role="group" aria-label="Galería interactiva: obras y puerta / Interactive gallery: artworks and door">
   {status!=='ready'&&<div className="agw-fallback"><strong>{status==='loading'?'Entrando en la galería… / Entering the gallery…':'Vista accesible / Accessible view'}</strong><p>{status==='loading'?'Preparando la sala / Preparing the room':'La escena 3D no está disponible. Puedes seleccionar las obras y practicar con los controles. / The 3D scene is unavailable. You can select the artworks and practise with the controls.'}</p></div>}
   {[0,1,2,3].map(i=><button key={i} type="button" className={`agw-pin ${i===3?'ar-door':''}`} data-world-pin={i} data-artwork={i===3?undefined:i} data-selected-object={i!==3&&active(i)||undefined} aria-pressed={active(i)} aria-label={i===3?'Puerta azul abierta / Open blue door':`${state.kind==='sculpture'?'Escultura':'Cuadro'} ${i+1} / ${state.kind==='sculpture'?'Sculpture':'Painting'} ${i+1}`} onClick={()=>onPick(i)}><b>{i===3?'↗':`0${i+1}`}</b><span>{i===3?'puerta / door':state.kind==='sculpture'?'escultura / sculpture':'cuadro / painting'}</span></button>)}
  </div>
  <div className="agw-camera"><span>Arrastra para mirar / Drag to look</span><div role="group" aria-label="Cámara / Camera">{([['overview','General / Overview'],['room','Sala / Room'],['focus','Acercar / Focus']] as const).map(([v,label])=><button type="button" key={v} disabled={status!=='ready'} aria-pressed={view===v} onClick={()=>{setView(v);api.current?.view(v);}}>{label}</button>)}</div></div>
 </div>;
}
