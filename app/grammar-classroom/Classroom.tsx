'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { ClassroomLesson, Question } from './types';
import './classroom.css';
import NounClassroom from './studio/NounClassroom';
import AdjectiveClassroom from './studio/AdjectiveClassroom';

const stages = [
  {id:'opening',label:'Empezar',minutes:4}, {id:'reading',label:'Leer',minutes:7},
  {id:'grammar',label:'Entender',minutes:9}, {id:'practice',label:'Practicar',minutes:9},
  {id:'listening',label:'Escuchar',minutes:8}, {id:'speaking',label:'Conversar',minutes:12},
  {id:'writing',label:'Escribir',minutes:8}, {id:'closing',label:'Cerrar',minutes:3},
] as const;
type Review = 'pending' | 'achieved' | 'developing';
type Response = {text:string;review:Review};

function ResponseBox({question,response,onEdit,onReview}:{question:Question;response:Response;onEdit:(text:string)=>void;onReview:(review:Review)=>void}) {
  return <section className="gc-response">
    <label><strong>{question.prompt}</strong><textarea aria-label={`Respuesta: ${question.prompt}`} value={response.text}
      onChange={event=>onEdit(event.target.value)} onInput={event=>onEdit(event.currentTarget.value)}
      placeholder="Pega aquí la respuesta del alumno o anota sus ideas." rows={3}/></label>
    <span className={`gc-review gc-review-${response.review}`} aria-live="polite">{response.review==='achieved'?'Objetivo conseguido':response.review==='developing'?'Para seguir trabajando':'Pendiente de revisión del profesor'}</span>
    <details className="gc-teacher"><summary>Guía del profesor</summary>
      <p className="gc-caption">{question.kind==='fact'?'Dato concreto: comprueba la información, sin exigir estas palabras.':'Comprensión del significado: acepta paráfrasis, sinónimos y errores que no cambien la idea.'}</p>
      <ul>{question.criteria.map(criterion=><li key={criterion}>{criterion}</li>)}</ul>
      <p><b>Una respuesta posible:</b> {question.model}</p>
      <div className="gc-review-actions"><button type="button" data-review="achieved" disabled={!response.text.trim()} aria-pressed={response.review==='achieved'} onClick={()=>onReview('achieved')}>Consigue el objetivo</button><button type="button" data-review="developing" disabled={!response.text.trim()} aria-pressed={response.review==='developing'} onClick={()=>onReview('developing')}>Necesita apoyo</button></div>
    </details>
  </section>;
}

export default function Classroom({lesson}:{lesson:ClassroomLesson}) {
  return lesson.id===41?<AdjectiveClassroom lesson={lesson}/>:lesson.id===40?<NounClassroom lesson={lesson}/>:<StandardClassroom lesson={lesson}/>;
}

function StandardClassroom({lesson}:{lesson:ClassroomLesson}) {
  const [stage,setStage]=useState(0);
  const [responses,setResponses]=useState<Record<string,Response>>({});
  const [selected,setSelected]=useState<Record<number,number>>({});
  const [checked,setChecked]=useState<Record<number,boolean>>({});
  const [notice,setNotice]=useState('');
  const [audioError,setAudioError]=useState(false);
  const titleRef=useRef<HTMLHeadingElement>(null);
  const audioRef=useRef<HTMLAudioElement>(null);
  const firstStage=useRef(true);
  useEffect(()=>{
    if(firstStage.current){firstStage.current=false;return;}
    titleRef.current?.focus({preventScroll:true});
    titleRef.current?.scrollIntoView?.({block:'start',behavior:'instant'});
  },[stage]);
  const current=stages[stage];
  const go=(index:number)=>{
    if(audioRef.current){audioRef.current.pause();audioRef.current.currentTime=0;}
    setStage(Math.max(0,Math.min(stages.length-1,index)));setNotice('');
  };
  const copy=async(text:string)=>{
    try{if(!navigator.clipboard?.writeText)throw new Error('clipboard-unavailable');await navigator.clipboard.writeText(text);setNotice('Copiado. Puedes pegarlo en el chat de tu clase.');}
    catch{setNotice('Selecciona el texto de la consigna y cópialo con el menú de tu dispositivo.');}
  };
  const box=(question:Question,key:string)=><ResponseBox key={key} question={question} response={responses[key]||{text:'',review:'pending'}}
    onEdit={text=>setResponses(previous=>({...previous,[key]:{text,review:'pending'}}))}
    onReview={review=>setResponses(previous=>({...previous,[key]:{text:previous[key]?.text||'',review}}))}/>;
  const writingQuestion:Question={kind:'meaning',prompt:'Texto del alumno',model:lesson.writing.model,criteria:lesson.writing.checklist};
  const writingText=responses.writing?.text||'';
  const wordCount=writingText.trim()?writingText.trim().split(/\s+/u).length:0;

  return <main className="gc-shell" data-grammar-classroom={lesson.id}>
    <header className="gc-top"><Link href="/" className="gc-brand" aria-label="SpanishCue, volver a la biblioteca">SPANISH<span>CUE</span><small>CHOOSE. OPEN. TEACH.</small></Link><Link className="gc-back" href="/">← Biblioteca</Link></header>
    <section className="gc-heading"><div className="gc-meta"><span>{lesson.level}</span><span>{lesson.topic}</span><span>60 min · clase guiada</span></div><h1>{lesson.title}</h1><p>Lee, escucha, conversa y escribe para usar la gramática en una situación real.</p></section>
    <div className="gc-layout">
      <aside className="gc-sidebar"><p className="gc-eyebrow">TU CLASE, PASO A PASO</p><nav aria-label="Actividades de la clase">{stages.map((item,index)=><button type="button" key={item.id} data-stage={item.id} aria-current={index===stage?'step':undefined} onClick={()=>go(index)}><span className="gc-step-number">{index+1}</span><span>{item.label}</span><small>{item.minutes} min</small></button>)}</nav><p className="gc-sidebar-note">Tiempos orientativos para una clase individual. Las respuestas se mantienen al cambiar de actividad.</p></aside>
      <article className="gc-workspace">
        <div className="gc-stage-title"><span>{String(stage+1).padStart(2,'0')} / 08</span><h2 ref={titleRef} tabIndex={-1}>{current.label}</h2><small>{current.minutes} minutos</small></div>
        <p className="gc-notice" role="status" aria-live="polite">{notice}</p>

        {current.id==='opening'&&<>
          <p className="gc-lead">Empieza con tu experiencia.</p><ol className="gc-prompts">{lesson.warmup.map(prompt=><li key={prompt}>{prompt}</li>)}</ol>
          <div className="gc-outcome"><h3>Al terminar podrás…</h3><ul>{lesson.objectives.map(goal=><li key={goal}>{goal}</li>)}</ul></div>
          <details className="gc-teacher"><summary>Preparar la clase en un minuto</summary><p>{lesson.scope}</p><p>Comparte la pantalla. El alumno puede responder por voz y enviar sus textos por el chat de la plataforma de enseñanza. Pégalos aquí para revisarlos juntos. El texto de estas cajas no se envía a SpanishCue y se borra al recargar o salir.</p><p>En comprensión, revisa primero la idea. En práctica gramatical, revisa después la estructura que se está aprendiendo.</p></details>
        </>}

        {current.id==='reading'&&<>
          <p className="gc-eyebrow">READING · PRIMERO, EL MENSAJE</p><h3>{lesson.reading.title}</h3><div className="gc-passage">{lesson.reading.text}</div>
          <p className="gc-caption">Lee una vez para entender la situación. Después busca la información que necesitas para responder.</p>
          {lesson.reading.questions.map((question,index)=>box(question,`reading-${index}`))}
        </>}

        {current.id==='grammar'&&<>
          <p className="gc-lead">Mira cómo funciona en el texto.</p><ol className="gc-discovery">{lesson.discovery.map(item=><li key={item.prompt}><p>{item.prompt}</p><details className="gc-teacher"><summary>Ver una explicación</summary><p>{item.model}</p></details></li>)}</ol>
          <div className="gc-rules">{lesson.grammar.map(rule=><section key={rule.title} className="gc-rule"><h3>{rule.title}</h3><p className="gc-form">{rule.form}</p><p>{rule.meaning}</p><ul>{rule.examples.map(example=><li key={example}>{example}</li>)}</ul>{rule.contrast&&<p className="gc-contrast">{rule.contrast}</p>}</section>)}</div>
          {lesson.paradigm&&<details className="gc-teacher"><summary>Consultar todas las personas: hablar, comer y vivir</summary><div className="gc-table-scroll"><table><thead><tr><th>Persona</th><th>Hablar</th><th>Comer</th><th>Vivir</th></tr></thead><tbody>{lesson.paradigm.map(row=><tr key={row.person}><th scope="row">{row.person}</th><td>{row.hablar}</td><td>{row.comer}</td><td>{row.vivir}</td></tr>)}</tbody></table></div></details>}
        </>}

        {current.id==='practice'&&<>
          <p className="gc-lead">Elige por el significado. Después transforma la idea.</p>
          {lesson.practice.map((exercise,index)=>exercise.kind==='open'?box({kind:'meaning',prompt:exercise.prompt,model:exercise.model,criteria:exercise.criteria},`practice-${index}`):<fieldset className="gc-choice" key={index}><legend>{index+1}. {exercise.prompt}</legend><div>{exercise.options.map((option,optionIndex)=><label key={optionIndex}><input type="radio" name={`practice-${lesson.id}-${index}`} value={optionIndex} checked={selected[index]===optionIndex} onChange={()=>{setSelected(previous=>({...previous,[index]:optionIndex}));setChecked(previous=>({...previous,[index]:false}));}}/><span>{option}</span></label>)}</div><button type="button" data-check={index} disabled={selected[index]===undefined} onClick={()=>setChecked(previous=>({...previous,[index]:true}))}>Comprobar y explicar</button>{checked[index]&&<p className="gc-feedback" aria-live="polite"><b>{exercise.answers.includes(selected[index])?'Elección válida.':'Revisa la elección.'}</b> {exercise.explanation}</p>}</fieldset>)}
          <p className="gc-caption">En las transformaciones abiertas hay más de una respuesta posible. Explica qué significado conserva tu versión.</p>
        </>}

        {current.id==='listening'&&<>
          <p className="gc-eyebrow">LISTENING · ESCUCHAR CON UN PROPÓSITO</p><h3>{lesson.listening.title}</h3><p>Primera escucha: ¿cuál es el mensaje principal? Segunda escucha: busca los detalles de las preguntas.</p>
          <audio ref={audioRef} controls preload="none" src={lesson.audioSrc} onError={()=>setAudioError(true)} aria-label={lesson.listening.title}>Tu navegador no puede reproducir este audio.</audio>
          {audioError&&<p className="gc-error" role="alert">No se pudo cargar el audio. Puedes volver a intentarlo o abrir la transcripción para continuar con tu profesor.</p>}
          <details className="gc-transcript"><summary>Transcripción · abrir después de escuchar</summary><div className="gc-passage">{lesson.listening.transcript}</div></details>
          {lesson.listening.questions.map((question,index)=>box(question,`listening-${index}`))}
        </>}

        {current.id==='speaking'&&<>
          <p className="gc-eyebrow">SPEAKING · DE LA FRASE A LA CONVERSACIÓN</p><p className="gc-lead">Comunica una idea y responde a lo que cambia.</p>
          {lesson.speaking.map((item,index)=><section className="gc-speaking" key={index}><span>{index+1}</span><div><h3>{item.prompt}</h3><p><b>Para continuar:</b> {item.followUp}</p><details className="gc-teacher"><summary>Apoyo para empezar</summary><p>{item.support}</p></details><button type="button" className="gc-text-button" onClick={()=>copy(`${item.prompt}\n${item.followUp}`)}>Copiar consigna</button></div></section>)}
          <p className="gc-caption">El profesor escucha el mensaje completo antes de corregir. Elige una estructura para mejorar y vuelve a usarla en otra respuesta.</p>
        </>}

        {current.id==='writing'&&<>
          <p className="gc-eyebrow">WRITING · UN TEXTO QUE SIRVE PARA ALGO</p><div className="gc-writing-prompt"><p>{lesson.writing.prompt}</p><p className="gc-caption">Extensión orientativa: {lesson.writing.words[0]}–{lesson.writing.words[1]} palabras.</p><button type="button" data-copy="writing" onClick={()=>copy(`${lesson.writing.prompt}\nExtensión orientativa: ${lesson.writing.words[0]}–${lesson.writing.words[1]} palabras.\nEnvíalo a tu profesor por el chat de la plataforma donde tienes clase.`)}>Copiar consigna para el chat</button></div>
          <p>Envía tu texto por el chat de la plataforma donde tienes clase. Tu profesor puede pegarlo en esta caja y revisarlo contigo.</p>
          {box(writingQuestion,'writing')}<p className="gc-caption">{wordCount} palabras · Revisa primero el mensaje y después la gramática objetivo.</p>
        </>}

        {current.id==='closing'&&<>
          <p className="gc-lead">Usa lo aprendido una vez más.</p><h3>{lesson.closing.prompt}</h3><details className="gc-teacher"><summary>Un posible cierre</summary><p>{lesson.closing.model}</p></details>
          <div className="gc-outcome"><h3>Antes de terminar</h3><ol><li>Elige una frase tuya y explica qué comunica.</li><li>Reformula una respuesta después del comentario del profesor.</li><li>Decide en qué situación real puedes usarla esta semana.</li></ol></div><Link href="/" className="gc-finish">Volver a la biblioteca →</Link>
        </>}

        <footer className="gc-navigation"><button type="button" disabled={stage===0} onClick={()=>go(stage-1)}>← Anterior</button><span>{stage+1} de {stages.length}</span>{stage<stages.length-1&&<button type="button" data-next onClick={()=>go(stage+1)}>Siguiente: {stages[stage+1].label} →</button>}</footer>
      </article>
    </div>
  </main>;
}
