'use client';
import {useEffect,useRef,useState} from 'react';
import {months,places,timeSentence,type TimeMode,type TimeState} from './model';
import type {DurationWorldAPI,WorldView} from './world';
export default function DurationScene(){
 const [state,setState]=useState<TimeState>({place:0,start:3,mode:'start',equivalent:false}),[reveal,setReveal]=useState(true),[status,setStatus]=useState('loading'),[view,setView]=useState<WorldView>('district');
 const host=useRef<HTMLDivElement>(null),api=useRef<DurationWorldAPI|null>(null),live=useRef(state);
 const choose=(i:number)=>setState(s=>({...s,place:i,start:places[i].start}));
 useEffect(()=>{live.current=state;api.current?.update(state);},[state]);
 useEffect(()=>{let disposed=false;void import('./world').then(({mountDurationWorld})=>{if(disposed||!host.current)return;if(typeof ResizeObserver==='undefined'){setStatus('fallback');return;}try{api.current=mountDurationWorld(host.current,i=>setState(s=>({...s,place:i,start:places[i].start})),()=>setStatus('ready'),()=>setStatus('fallback'));api.current.update(live.current);}catch{setStatus('fallback');}}).catch(()=>{if(!disposed)setStatus('fallback');});return()=>{disposed=true;api.current?.dispose();api.current=null;};},[]);
 const place=places[state.place];
 const modes:[TimeMode,string,string][]=[['start','Desde','since'],['duration','Desde hace','for'],['event','Hace','ago']];
 return <section data-duration-world data-world-status={status} className="du-scene">
  <div className="du-world-title"><span><i/> BARRIO DEL TIEMPO</span><small>OCTUBRE · PRESENTE DE LA ESCENA</small></div>
  <div ref={host} className="du-viewport" tabIndex={0} role="group" aria-label="Barrio 3D. Arrastra para mirar. En vista calle usa las flechas o WASD para caminar." onKeyDown={e=>{if(e.target!==e.currentTarget||view!=='street')return;const moves:Record<string,[number,number]>={ArrowLeft:[-1,0],a:[-1,0],ArrowRight:[1,0],d:[1,0],ArrowUp:[0,-1],w:[0,-1],ArrowDown:[0,1],s:[0,1]};const move=moves[e.key];if(move){e.preventDefault();api.current?.walk(...move);}}}>
   {status!=='ready'&&<div className="du-load">{status==='loading'?'Entrando en el barrio…':'Vista accesible: elige un lugar abajo para practicar.'}</div>}
   <div className="du-world-caption"><b>{place.label}</b><span>{state.mode==='event'?'¿Qué pasó?':'¿Desde cuándo?'}</span></div>
   <div className="du-compass" aria-hidden="true">N<br/>↑</div>
  </div>
  <div className="du-camera"><span>Arrastra para mirar · drag to look</span><div role="group" aria-label="Cámara">{([['district','Barrio'],['street','Caminar'],['focus','Acercar']] as const).map(([id,label])=><button key={id} type="button" data-camera={id} aria-pressed={view===id} disabled={status!=='ready'} onClick={()=>{setView(id);api.current?.view(id);}}>{label}</button>)}</div></div>
  {view==='street'&&<div className="du-walk" role="group" aria-label="Caminar por la calle"><span>Flechas / WASD · selecciona la escena</span>{([[-1,0,'←'],[0,-1,'↑'],[0,1,'↓'],[1,0,'→']] as const).map(([x,z,label])=><button type="button" key={label} aria-label={`Caminar ${label}`} onClick={()=>api.current?.walk(x,z)}>{label}</button>)}</div>}
  <div className="du-places" role="group" aria-label="Lugares del barrio">{places.map((p,i)=><button type="button" key={p.id} data-place={p.id} aria-pressed={i===state.place} onClick={()=>choose(i)}><span>0{i+1}</span><b>{p.label}</b><small lang="en">{p.en}</small></button>)}</div>
  <div className="du-console">
   <div className="du-modes" role="group" aria-label="Perspectiva temporal">{modes.map(([mode,label,en])=><button type="button" data-time-mode={mode} key={mode} aria-pressed={mode===state.mode} onClick={()=>setState(s=>({...s,mode,equivalent:false}))}>{label}<small lang="en">{en}</small></button>)}</div>
   <div className="du-time-label"><label htmlFor="du-start">Inicio: <b>{months[state.start-1]}</b></label><span>AHORA · OCTUBRE</span></div>
   <input id="du-start" type="range" min="1" max="9" value={state.start} onChange={e=>setState(s=>({...s,start:Number(e.target.value)}))} aria-label="Mes de inicio" aria-valuetext={months[state.start-1]}/>
   <div className="du-timeline" data-time-kind={state.mode} aria-label={state.mode==='event'?'Hecho terminado, antes de ahora':'Situación que continúa hasta ahora'}><span style={{left:`${(state.start-1)/9*100}%`,width:state.mode==='event'?'0':`${(10-state.start)/9*100}%`}}/><b style={{left:`${(state.start-1)/9*100}%`}}/><i/><small>{state.mode==='event'?'● Hecho terminado · ago':'━━━━━━━━ Sigue ahora · still true'}</small></div>
   <div className="du-answer" data-time-answer aria-live="polite">{reveal?<><p>{timeSentence(state)}</p><small>{state.mode==='start'?'Punto de inicio · since':state.mode==='duration'?'Duración hasta ahora · for':'Hecho terminado · ago'}</small></>:<p>__________<small>Completa la historia · complete the sentence</small></p>}</div>
   <div className="du-answer-controls"><button type="button" data-time-reveal aria-pressed={reveal} onClick={()=>setReveal(v=>!v)}>{reveal?'Ocultar respuesta':'Revelar respuesta'}</button>{state.mode==='duration'&&<button type="button" data-equivalent aria-pressed={state.equivalent} onClick={()=>setState(s=>({...s,equivalent:!s.equivalent}))}>Otra forma: hace… que</button>}</div>
  </div>
  <p className="du-note">Laboratorio de ejemplos: este calendario se puede cambiar. Las fechas de la lectura y del audio conservan su historia original.</p>
 </section>;
}
