"use client";
import {useState} from 'react';
import AudioDeck from '../listening-studio/AudioDeck';
import type {Activity,WorldDefinition} from './types';
import type {Attempt,Action} from './state.mjs';
export default function ActivityCard({activity:a,attempt,definition,teacher,onAction}:{activity:Activity;attempt:Attempt;definition:WorldDefinition;teacher:boolean;onAction:(action:Action)=>void}) {
 const [take,setTake]=useState(0);
 const [tiles,setTiles]=useState(false);
 const clips=a.kind==='ab'?(a.answer===0?[a.clip,a.secondClip!]:[a.secondClip!,a.clip]):[a.clip];
 const clip=definition.clips[clips[take]];
 const ready=attempt.assisted||clips.every(id=>attempt.heard.includes(id));
 const same=(x:number[],y:number[])=>x.length===y.length&&x.every((n,i)=>n===y[i]);
 const correct=['choice','ab'].includes(a.kind)?attempt.selected[0]===a.answer:same([...attempt.selected].sort((x,y)=>x-y),[...(a.target??[])].sort((x,y)=>x-y));
 const rebuildCorrect=a.kind==='rebuild'?same(attempt.selected,a.target??[]):correct;
 const show=attempt.revealed||attempt.checked;
 const select=(selected:number[])=>onAction({type:'select',selected});
 const toggle=(i:number)=>select(attempt.selected.includes(i)?attempt.selected.filter(n=>n!==i):[...attempt.selected,i]);
 const oral=['repeat','transfer'].includes(a.kind);
 return <article className="pf-activity" data-activity-id={a.id}>
  <p className="pf-eyebrow">{a.optional?'BANCO OPCIONAL':'RECORRIDO CENTRAL'} · {a.kind==='ab'?'DOS TOMAS':oral?'A TU VOZ':'PRIMERO EL OÍDO'}</p>
  <h2>{a.prompt}</h2>
  {a.kind==='ab'&&<div className="pf-actions" aria-label="Elegir toma">{clips.map((id,i)=><button key={id} type="button" aria-pressed={take===i} onClick={()=>setTake(i)}>Toma {i===0?'A':'B'} {attempt.heard.includes(id)?'· escuchada':''}</button>)}</div>}
  {clip?.src?<AudioDeck key={clip.id} src={clip.src} title={a.kind==='ab'?`Toma ${take===0?'A':'B'}`:'Escucha del estudio'} channel="ESCUCHÁ · PROBÁ · VOLVÉ A ESCUCHAR" showWaveform={false} allowSlow={a.kind!=='ab'} accent="#efbd7a" playingMessage="Escuchá el mensaje. Después trabajamos con las palabras." onComplete={()=>onAction({type:'heard',clip:clip.id})}/>:<p className="pf-notice" role="status">Este audio todavía no está disponible. Podés usar texto de apoyo y el modelo del profe; se registrará como práctica con ayuda.</p>}
  {!ready&&<p className="pf-muted">{a.kind==='ab'?'Escuchá las dos tomas hasta el final antes de elegir.':'Escuchá hasta el final antes de abrir la actividad.'}</p>}
  {ready&&a.options&&<div className="pf-choices" role="group" aria-label="Tu respuesta">{a.options.map((o,i)=><button key={o} type="button" aria-pressed={attempt.selected[0]===i} onClick={()=>select([i])}><span>{String.fromCharCode(65+i)}</span>{o}</button>)}</div>}
  {ready&&a.tokens&&<>
   {!tiles?<button type="button" className="pf-primary" onClick={()=>setTiles(true)}>Abrir las piezas después de escuchar</button>:<>
    <p className="pf-muted">{a.kind==='rebuild'?'Tocá las piezas en el orden del audio. Tocá una pieza elegida para quitarla.':a.kind==='group'?'Tocá entre las piezas para proponer un límite. Puede haber otras agrupaciones válidas.':'Tocá las uniones consonante–vocal que indica la consigna.'}</p>
    {a.kind==='rebuild'?<><div className="pf-rebuild" aria-label="Tu reconstrucción">{attempt.selected.length?attempt.selected.map((n,i)=><button type="button" key={n} onClick={()=>toggle(n)}><small>{i+1}</small>{a.tokens![n]} ×</button>):<p>Tu frase aparecerá acá.</p>}</div><div className="pf-wordbank">{a.tokens.map((token,i)=><button type="button" disabled={attempt.selected.includes(i)} key={i} onClick={()=>toggle(i)}>{token}</button>)}</div></>:<div className="pf-tokenline">{a.tokens.map((token,i)=><span className="pf-token-unit" key={i}><span className="pf-token">{token}</span>{i<a.tokens!.length-1&&<button type="button" aria-label={`${a.kind==='group'?'Límite':'Unión'} después de ${token}`} aria-pressed={attempt.selected.includes(i)} onClick={()=>toggle(i)}>{attempt.selected.includes(i)?a.kind==='group'?'|':'‿':'·'}</button>}</span>)}</div>}
   </>}
  </>}
  <div className="pf-actions">
   {ready&&!oral&&(!a.tokens||tiles)&&<button type="button" className="pf-primary" disabled={['choice','ab','rebuild'].includes(a.kind)&&!attempt.selected.length} onClick={()=>onAction({type:'check'})}>{a.kind==='group'?'Comparar con una propuesta':'Comprobar'}</button>}
   <button type="button" onClick={()=>onAction({type:'support'})}>{attempt.revealed?'Ocultar texto de apoyo':'Texto de apoyo'}</button>
   <button type="button" onClick={()=>{onAction({type:'retry'});setTiles(false);}}>Nuevo intento</button>
  </div>
  <div className="pf-feedback" role="status" aria-live="polite">
   {attempt.assisted&&<p className="pf-help-label">Práctica con apoyo · se mostró texto durante este intento o uno anterior.</p>}
   {attempt.checked&&a.kind!=='group'&&<p><b>{rebuildCorrect?'Tu respuesta coincide con el modelo.':'Compará tu respuesta y volvé a escuchar.'}</b> {attempt.assisted?'Con ayuda de texto.':'Esto comprueba la respuesta de esta tarea, no tu pronunciación.'}</p>}
   {show&&<><blockquote>{a.text}</blockquote><p>{a.explanation}</p>{a.tokens&&a.target&&<p className="pf-model">Propuesta: {a.kind==='rebuild'?a.target.map(i=>a.tokens![i]).join(' '):a.tokens.map((t,i)=>t+(a.target!.includes(i)?a.kind==='group'?' |':'‿':'')).join(' ')}</p>}</>}
  </div>
  {(attempt.assisted || (ready && (oral || attempt.checked)))&&<section className="pf-transfer"><span className="pf-eyebrow">AHORA, SIN COPIAR</span><h3>De la escucha a tu voz</h3><p>{a.transfer}</p><button type="button" aria-pressed={attempt.produced} onClick={()=>onAction({type:'produce'})}>{attempt.produced?'✓ Producción realizada':'Marcar producción realizada'}</button><small>Registro manual de práctica; no es una evaluación automática.</small></section>}
  {teacher&&<aside className="pf-teacher-note"><b>Intervención del profe</b><p>{a.teacher}</p></aside>}
 </article>;
}
