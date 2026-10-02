"use client";
import {useEffect,useRef,useState} from 'react';
import StudioAudio from './StudioAudio';
import SpeechFlow from './SpeechFlow';
import StudioGuide from './StudioGuide';
import SpeechAttempt from './SpeechAttempt';
import type {Activity,WorldDefinition} from './types';
import type {Attempt,Action} from './state.mjs';
export default function ActivityCard({activity:a,attempt,definition,level='A1',teacher,onAction,onNext}:{activity:Activity;attempt:Attempt;definition:WorldDefinition;level?:string;teacher:boolean;onAction:(action:Action)=>void;onNext?:()=>void}) {
 const voiceLesson=definition.id==='hablar-sin-cortar';
 const clips=a.kind==='ab'?(a.answer===0?[a.clip,a.secondClip!]:[a.secondClip!,a.clip]):[a.clip];
 const [take,setTake]=useState(()=>voiceLesson?clips.indexOf(a.clip):0),[replay,setReplay]=useState(0),[checking,setChecking]=useState(false);
 const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
 useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);},[]);
 const clip=definition.clips[clips[take]];
 const ready=attempt.assisted||(voiceLesson?(!clip?.src||attempt.heard.includes(a.clip)):clips.every(id=>attempt.heard.includes(id)));
 const same=(x:number[],y:number[])=>x.length===y.length&&x.every((n,i)=>n===y[i]);
 const correct=['choice','ab'].includes(a.kind)?attempt.selected[0]===a.answer:a.kind==='rebuild'?same(attempt.selected,a.target??[]):same([...attempt.selected].sort((x,y)=>x-y),[...(a.target??[])].sort((x,y)=>x-y));
 const oral=['repeat','transfer'].includes(a.kind),compared=attempt.checked&&a.kind==='group';
 const Extra=voiceLesson?'details':'div';
 const success=attempt.checked&&correct,wrong=attempt.checked&&!correct&&!compared;
 const state=checking?'checking':compared?'compared':success?'correct':wrong?'incorrect':attempt.produced?'completed':attempt.assisted?'supported':attempt.selected.length?'selected':'default';
 const select=(selected:number[])=>onAction({type:'select',selected});
 const toggle=(i:number)=>select(attempt.selected.includes(i)?attempt.selected.filter(n=>n!==i):[...attempt.selected,i]);
 const retry=()=>{onAction({type:'retry'});setReplay(n=>n+1);};
 const showModel=attempt.revealed||success||compared;
 const tokens=a.kind==='rebuild'?a.target!.map(i=>a.tokens![i]):a.tokens??a.text.split(/\s+/);
 const hint=a.kind==='rebuild'?'Buscá qué se dice primero.':a.kind==='connect'?'Escuchá dónde termina una palabra y empieza la vocal.':a.kind==='ab'?'Compará las pausas de las dos tomas.':'Escuchá la palabra que cambia entre las opciones.';
 return <article data-activity-id={a.id} className="pf-activity" data-state={state} aria-busy={checking}>
  <div className="pf-task-heading"><div><p className="pf-eyebrow">{voiceLesson?'ESCUCHÁ Y DECILO IGUAL':oral?'TU TURNO AL MICRÓFONO':a.kind==='group'?'MARCÁ LAS PAUSAS':a.kind==='connect'?'CONECTÁ LAS PALABRAS':a.kind==='rebuild'?'ARMÁ LA FRASE':'ESCUCHÁ Y ELEGÍ'}</p><h2>{voiceLesson?'Escuchá. Después decilo vos.':a.prompt}</h2></div>{!definition.guide&&<StudioGuide definition={definition} state={success||attempt.produced?'success':wrong||ready?'guide':'listen'}/>}</div>
  {a.kind==='ab'&&(!voiceLesson||attempt.produced)&&<div className="pf-takes" aria-label="Elegir toma">{clips.map((id,i)=><button key={id} type="button" aria-pressed={take===i} onClick={()=>{setTake(i);setReplay(0);}}>Toma {i===0?'A':'B'} {attempt.heard.includes(id)&&<span aria-label="escuchada">✓</span>}</button>)}</div>}
  {clip?.src?<StudioAudio key={clip.id} src={clip.src} heard={attempt.heard.includes(clip.id)} onComplete={()=>onAction({type:'heard',clip:clip.id})} allowSlow={a.kind!=='ab'} replay={replay}/>:<p className="pf-notice" role="status">{voiceLesson?'Audio no disponible. Practicá con la frase y pedile un modelo a tu profe.':'Audio no disponible. Abrí el texto de apoyo para practicar con tu profe.'}</p>}
  {!ready&&<p className="pf-listening-cue">{voiceLesson?'Escuchá el modelo para empezar.':a.kind==='ab'?'Escuchá ambas tomas para elegir.':'Primero escuchá. Después elegís.'}</p>}
  {voiceLesson&&ready&&<SpeechAttempt level={level} activityId={a.id} text={a.text} produced={attempt.produced} onComplete={()=>{if(!attempt.produced)onAction({type:'produce'});}}/>}
  {(!voiceLesson||attempt.produced)&&<Extra className="pf-extra-practice">{voiceLesson&&<summary>Explorar esta escucha</summary>}
  {ready&&a.options&&<div className="pf-choices" role="group" aria-label="Tu respuesta">{a.options.map((o,i)=>{
   const selected=attempt.selected[0]===i;
   return <button key={o} type="button" disabled={checking||success} data-result={selected&&attempt.checked?(correct?'correct':'incorrect'):success?'recede':undefined} aria-pressed={selected} onClick={()=>select([i])}><span className="pf-answer-icon" aria-hidden="true">{selected&&attempt.checked?(correct?'✓':'×'):String.fromCharCode(65+i)}</span><b>{o}</b>{selected&&attempt.checked&&<small>{correct?'Correcto':'Otra escucha'}</small>}</button>;
  })}</div>}
  {ready&&a.tokens&&<div className="pf-pieces">
   <p className="pf-piece-cue">{a.kind==='rebuild'?'Tocá las piezas en orden.':a.kind==='group'?'Tocá · para marcar una pausa.':'Tocá · para unir las palabras.'}</p>
   {a.kind==='rebuild'?<><div className="pf-rebuild" aria-label="Tu reconstrucción">{attempt.selected.length?attempt.selected.map((n,i)=><button disabled={checking||success} type="button" key={n} onClick={()=>toggle(n)}><small>{i+1}</small>{a.tokens![n]} <span aria-hidden="true">×</span></button>):<span className="pf-empty-phrase">1 → 2 → 3</span>}</div><div className="pf-wordbank">{a.tokens.map((token,i)=><button type="button" disabled={checking||success||attempt.selected.includes(i)} key={i} onClick={()=>toggle(i)}>{token}</button>)}</div></>:<div className="pf-tokenline">{a.tokens.map((token,i)=><span className="pf-token-unit" key={i}><span className="pf-token">{token}</span>{i<a.tokens!.length-1&&<button type="button" disabled={checking||success} aria-label={`${a.kind==='group'?'Límite':'Unión'} después de ${token}`} aria-pressed={attempt.selected.includes(i)} onClick={()=>toggle(i)}>{attempt.selected.includes(i)?a.kind==='group'?'│':'‿':'·'}</button>}</span>)}</div>}
  </div>}
  <div className="pf-actions">
   {ready&&!oral&&!success&&!compared&&!wrong&&<button type="button" className="pf-primary" disabled={checking||(['choice','ab','rebuild'].includes(a.kind)&&!attempt.selected.length)} onClick={()=>{setChecking(true);timer.current=setTimeout(()=>{setChecking(false);onAction({type:'check'});},220);}}>{checking?'Comprobando…':a.kind==='group'?'Ver una propuesta':'Comprobar →'}</button>}
   {!success&&!compared&&<button type="button" className="pf-text-help" disabled={checking} onClick={()=>onAction({type:'support'})}>{attempt.revealed?'Ocultar apoyo':'Texto de apoyo'}</button>}
   {attempt.assisted&&<span className="pf-help-label">Con apoyo de texto</span>}
  </div>
  <div className="pf-feedback" role="status" aria-live="polite">
   {success&&<p className="pf-verdict"><span aria-hidden="true">✓</span> ¡Bien escuchado!</p>}
   {compared&&<p className="pf-verdict"><span aria-hidden="true">↔</span> Una propuesta posible</p>}
   {wrong&&<div className="pf-retry"><p><b>Otra escucha</b> · {hint}</p><button type="button" onClick={retry}>↻ Volver a escuchar</button></div>}
  </div>
  {showModel&&<div className="pf-model-reveal"><SpeechFlow tokens={tokens} connections={a.kind==='connect'?a.target:undefined} pauses={a.kind==='group'?a.target:undefined}/><details className="pf-explanation"><summary>¿Por qué?</summary><p>{a.explanation}</p>{a.kind==='group'&&<p>Otras pausas también pueden funcionar. Comparalas con tu profe.</p>}</details></div>}
  </Extra>}
  {!voiceLesson&&(attempt.assisted||(ready&&(oral||success||compared)))&&<details className="pf-transfer" open={oral?true:undefined}><summary>De la escucha a tu voz <span aria-hidden="true">↗</span></summary><p>{a.transfer}</p><button type="button" aria-pressed={attempt.produced} onClick={()=>onAction({type:'produce'})}>{attempt.produced?'✓ Producción realizada':'Ya lo dije'}</button><small>Registro manual; sin evaluación automática de pronunciación.</small></details>}
  {(voiceLesson?attempt.produced:(success||compared||attempt.produced))&&<div className="pf-success-actions"><button type="button" onClick={()=>{setTake(clips.indexOf(a.clip));setReplay(n=>n+1);}}>▶ Modelo</button><button type="button" className="pf-primary" onClick={onNext}>Siguiente →</button>{!voiceLesson&&<button type="button" className="pf-text-help" onClick={()=>onAction({type:'retry'})}>Nuevo intento</button>}</div>}
  {teacher&&<aside className="pf-teacher-note"><b>Intervención del profe</b><p>{a.teacher}</p><p>{attempt.assisted?'El intento tuvo apoyo de texto.':'Escucha sin apoyo de texto.'} Una elección correcta no evalúa la pronunciación.</p></aside>}
 </article>;
}
