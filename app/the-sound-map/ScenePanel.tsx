"use client";
import {useState} from 'react';
import AudioDeck from '../listening-studio/AudioDeck';
import type {Location,Scene,Task} from './types';

type Clip={src:string;cleanSrc:string};
function Activity({task,index,bilingual,onDone}:{task:Task;index:number;bilingual:boolean;onDone:()=>void}){
 const [selected,setSelected]=useState<number[]>([]);
 const [checked,setChecked]=useState(false);
 const [answer,setAnswer]=useState('');
 const [review,setReview]=useState(false);
 const [oral,setOral]=useState(false);
 const [criteria,setCriteria]=useState<number[]>([]);
 const correct=task.type==='choice'?selected[0]===task.answer:task.type==='order'?JSON.stringify(selected)===JSON.stringify(task.answer):false;
 function check(){setChecked(true);if(correct)onDone();}
 return <section className="sm-task"><small>{bilingual?'ACTIVIDAD / TASK':'ACTIVIDAD'} {index+1}</small><h3>{task.prompt}</h3>
  {task.type==='choice'&&<div className="sm-options">{task.options.map((option,i)=><button key={option} aria-pressed={selected[0]===i} className={`${selected[0]===i?'selected':''} ${checked&&selected[0]===i?(correct?'correct':'incorrect'):''}`} onClick={()=>{setSelected([i]);setChecked(false);}}>{option}</button>)}</div>}
  {task.type==='order'&&<><p className="sm-hint">{bilingual?'Toca en orden. Toca otra vez para quitar. / Tap in order. Tap again to remove.':'Toca los elementos en orden. Vuelve a tocar para quitar uno.'}</p><div className="sm-options">{task.items.map((item,i)=><button key={item} aria-pressed={selected.includes(i)} className={selected.includes(i)?'selected':''} onClick={()=>{setSelected(old=>old.includes(i)?old.filter(x=>x!==i):[...old,i]);setChecked(false);}}><b className="sm-order-number">{selected.includes(i)?selected.indexOf(i)+1:'·'}</b>{item}</button>)}</div></>}
  {task.type!=='open'&&<><button className="sm-check" disabled={task.type==='choice'?!selected.length:selected.length!==task.items.length} onClick={check}>{bilingual?'Comprobar / Check':'Comprobar'}</button>{checked&&<div role="status" className={`sm-feedback ${correct?'correct':''}`}><b>{correct?(bilingual?'¡Sí! / Yes!':'Bien visto.'):(bilingual?'Escucha otra vez. / Listen again.':'Vuelve a escuchar y prueba otra vez.')}</b>{correct&&<p>{task.explanation}</p>}</div>}</>}
  {task.type==='open'&&<><label className="sm-answer-label" htmlFor={`answer-${index}`}>Tu interpretación</label><textarea id={`answer-${index}`} rows={3} value={answer} onChange={e=>setAnswer(e.target.value)} placeholder="Escribe una idea o responde oralmente…"/><label className="sm-checkbox"><input type="checkbox" checked={oral} onChange={e=>setOral(e.target.checked)}/>Respondí oralmente</label><button className="sm-check" disabled={!answer.trim()&&!oral} onClick={()=>setReview(true)}>Comparar con las pistas</button>{review&&<div className="sm-self-review"><b>Una interpretación posible</b><p>{task.model}</p><small>{task.explanation} Esta revisión es tuya o del profesor; no es una corrección automática.</small>{task.rubric.map((line,i)=><label className="sm-checkbox" key={line}><input type="checkbox" checked={criteria.includes(i)} onChange={()=>setCriteria(old=>old.includes(i)?old.filter(x=>x!==i):[...old,i])}/>{line}</label>)}<button className="sm-check" disabled={criteria.length!==task.rubric.length||(!answer.trim()&&!oral)} onClick={onDone}>He contrastado mi respuesta</button></div>}</>}
 </section>;
}
export default function ScenePanel({scene,location,level,clip,onComplete,onClose,onNext,alreadyComplete}:{scene:Scene;location:Location;level:string;clip:Clip;onComplete:()=>void;onClose:()=>void;onNext:()=>void;alreadyComplete:boolean}){
 const bilingual=level==='A0';
 const [heard,setHeard]=useState(false);
 const [transcript,setTranscript]=useState(false);
 const [assisted,setAssisted]=useState(false);
 const [clean,setClean]=useState(false);
 const [done,setDone]=useState<number[]>([]);
 const [produced,setProduced]=useState(false);
 const [phrase,setPhrase]=useState<string[]>([]);
 const accessible=heard||assisted;
 const complete=accessible&&done.length===scene.tasks.length&&produced;
 return <article className="sm-panel" aria-labelledby="sm-scene-title">
  <header className="sm-panel-head"><span>{location.icon} {level} · {bilingual?'LISTEN & DISCOVER':'ESCUCHA Y DESCUBRE'}</span><button onClick={onClose} aria-label="Cerrar escena / Close scene">×</button></header>
  <h2 id="sm-scene-title" tabIndex={-1}>{location.title}</h2>{bilingual&&<p className="sm-translation">{location.titleEn}</p>}
  <p>{scene.context}{bilingual&&<span className="sm-translation">{scene.contextEn}</span>}</p>
  <div className="sm-listen-tip"><b>{bilingual?'01 · Escucha / Listen':'01 · Primero, escucha'}</b><p>{bilingual?'Pulsa PLAY. No necesitas entender todo. / Press PLAY. You do not need to understand everything.':'Imagina la escena antes de buscar los detalles. Puedes repetir y reducir la velocidad.'}</p></div>
  <AudioDeck key={`${scene.id}-${clean}`} src={clean?clip.cleanSrc:clip.src} title={bilingual?'Escucha / Listen':location.sound} channel={bilingual?'VOZ EN ESPAÑOL / SPANISH AUDIO':'RÍO CLARO · AUDIO DE LA ESCENA'} accent={location.color} bilingual={bilingual} allowSlow onComplete={()=>setHeard(true)} playingMessage={bilingual?'Escucha una palabra. / Listen for one word.':'Primera vuelta: la situación. Segunda vuelta: una pista.'}/>
  <label className="sm-checkbox sm-clean"><input type="checkbox" checked={clean} onChange={e=>setClean(e.target.checked)}/>{bilingual?'Sin ambiente / Voice only':'Escuchar sin ambiente'}</label>
  <div className="sm-help-row"><button aria-expanded={transcript} onClick={()=>{setTranscript(x=>!x);setAssisted(true);}}>{transcript?(bilingual?'Ocultar texto / Hide text':'Ocultar transcripción'):(bilingual?'Ver texto / Show text':'Abrir transcripción')}</button>{!accessible&&<button onClick={()=>setAssisted(true)}>{bilingual?'Continuar con ayuda / Continue with support':'Continuar con apoyo'}</button>}</div>
  {transcript&&<section className="sm-transcript" aria-label="Transcripción">{scene.segments.map((segment,i)=><p key={i}><b>{scene.segments.length===1?'Voz':`Voz ${i%2+1}`}:</b> {segment.text}</p>)}</section>}
  {(bilingual||level==='A1')&&<details className="sm-glossary" open={bilingual}><summary>{bilingual?'Tus palabras / Your words':'Palabras para orientarte'}</summary><div>{scene.glossary.map(([es,en])=><span key={es}><b>{es}</b><small>{en}</small></span>)}</div></details>}
  {!accessible?<p className="sm-locked">{bilingual?'Escucha hasta el final o elige ayuda para abrir las actividades. / Finish listening or choose support to open the activities.':'Las actividades se abren al terminar el audio. También puedes continuar con apoyo.'}</p>:<div className="sm-activities"><div className="sm-section-label">{bilingual?'02 · Descubre / Discover':'02 · Sigue las pistas'} <span>{done.length}/{scene.tasks.length}</span></div>{scene.tasks.map((task,i)=><Activity key={i} task={task} index={i} bilingual={bilingual} onDone={()=>setDone(old=>old.includes(i)?old:[...old,i])}/>)}
  <section className="sm-produce"><small>{bilingual?'03 · Tu voz / Your voice':'03 · Ahora, tu voz'}</small><h3>{scene.produce}</h3>{bilingual&&<p>{scene.produceEn}</p>}{scene.bank.length>0&&<><div className="sm-word-bank">{scene.bank.map(word=><button key={word} onClick={()=>setPhrase(old=>[...old,word.split(' / ')[0]])}>{word} +</button>)}</div><p className="sm-phrase" aria-live="polite">{phrase.length?phrase.join(' '):(bilingual?'Toca palabras para construir tu frase. / Tap words to build your sentence.':'Toca palabras para construir una frase.')}</p><button onClick={()=>setPhrase([])}>{bilingual?'Borrar frase / Clear sentence':'Borrar frase'}</button></>}<label className="sm-checkbox"><input type="checkbox" checked={produced} onChange={e=>setProduced(e.target.checked)}/>{bilingual?'Ya lo dije / I said it aloud':'Ya compartí mi respuesta'}</label></section>
  <button className="sm-primary sm-finish" disabled={!complete&&!alreadyComplete} onClick={()=>{if(complete)onComplete();onNext();}}>{bilingual?'Guardar y seguir / Save & explore':'Guardar este rincón y seguir →'}</button>{assisted&&<small className="sm-hint">{bilingual?'Ruta con apoyo: cuenta como práctica, no como examen. / Supported practice, not a test.':'Ruta con apoyo: el progreso registra práctica, no una calificación.'}</small>}</div>}
  <details className="sm-teacher"><summary>{bilingual?'Guía del profesor / Teacher guide':'Guía del profesor'}</summary><p>{scene.teacher}</p><p>Ruta sugerida: 5 min de anticipación, 6 escenas × 7 min, 8 min de recapitulación. Ajusta la selección al ritmo del alumno.</p><p>Voces y ambientes sintéticos. La canción es original y sintetizada. En C1–C2, fundamenta las inferencias en el discurso: una voz sintética no reproduce todos los matices de una interpretación humana.</p></details>
 </article>;
}
