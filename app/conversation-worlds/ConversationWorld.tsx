"use client";

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import type { WorldElimination, WorldRule, WorldGuide, WorldLevel } from './types';
import { conversationWorldStorageKey } from './state';
import { ConversationClosing } from '../conversation-families/ConversationFamily';
import './worlds.css';
import { SpanishCueBrand } from '../SpanishCueBrand';

type Choice = 'yes' | 'no';
type Decision = { first: Choice; final?: Choice; revealed?: boolean };
type Saved = { index: number; decisions: Record<string, Decision>; opened: Record<string, number> };
const empty = (): Saved => ({index:0,decisions:{},opened:{}});
type Finale = { selected: string[]; keep: string; reject: string; modify: string; principle: string; exception: string; substitute: string; effect: string; rewrite: string; open: boolean };
const emptyFinale = (): Finale => ({selected:[],keep:'',reject:'',modify:'',principle:'',exception:'',substitute:'',effect:'',rewrite:'',open:false});
const ruleRoles = [{key:'keep',label:'Conservar'},{key:'reject',label:'Descartar'},{key:'modify',label:'Modificar'}] as const;


function TalkHelp({words,starter}:{words:string[];starter:string}) {
  return <details className="cw-help"><summary>Una mano para hablar <span aria-hidden="true">+</span></summary><div><p className="cw-starter">«{starter}»</p><div className="cw-words">{words.map(word=><span key={word}>{word}</span>)}</div><p>Puedes dar un ejemplo de tu vida, comparar o explicar por qué. Tómate tu tiempo.</p></div></details>;
}

function BeginnerHelp({frames,words}:{frames:string[];words?:string[]}) {
  return <div className="cw-a1-support"><p><strong>Primero, una respuesta corta.</strong> Después, añade una frase.</p><ul>{frames.map(frame=><li key={frame}>{frame}</li>)}</ul>{words&&<div className="cw-words">{words.map(word=><span key={word}>{word}</span>)}</div>}</div>;
}

export default function ConversationWorld({mode,level,machineRounds,ruleRounds,closing,guide}:{mode:'machine'|'rules';level:WorldLevel;machineRounds:WorldElimination[];ruleRounds:WorldRule[];closing:string[];guide?:WorldGuide}) {
  const machine = mode==='machine';
  const a1 = level==='A1';
  const a2 = level==='A2';
  const b2 = level==='B2';
  const c1 = level==='C1';
  const entries = machine ? machineRounds : ruleRounds;
  const [showEnglish,setShowEnglish] = useState(false);
  const [saved,setSaved] = useState<Saved>(empty);
  const [ready,setReady] = useState(false);
  const [motion,setMotion] = useState(true);
  const [group,setGroup] = useState('Todas');
  const [notice,setNotice] = useState('');
  const [finale,setFinale] = useState<Finale>(emptyFinale);
  const [ruleCursor,setRuleCursor] = useState<Record<string,number>>({});
  const questionRef = useRef<HTMLHeadingElement>(null);
  const storageKey = conversationWorldStorageKey(mode,level);
  const index = Math.min(Math.max(saved.index,0),entries.length-1);
  const entry = entries[index];
  const item = machineRounds[index];
  const rule = ruleRounds[index];
  const decision = saved.decisions[entry.id];
  const decisionFirst = decision?.first;
  const questionNumber = (c1 ? ruleCursor[entry.id] : undefined) ?? saved.opened[entry.id] ?? -1;
  const complete = entries.filter(e=>machine ? Boolean(saved.decisions[e.id]?.final) : saved.opened[e.id]===3).length;
  const progress = Math.round(100*complete/entries.length);
  const groups = ['Todas',...new Set(entries.map(e=>e.group))];
  const completedDecisions = machineRounds.filter(round=>saved.decisions[round.id]?.final);
  const completedRules = ruleRounds.filter(round=>saved.opened[round.id]===3);
  const selectedDecisions = completedDecisions.filter(round=>finale.selected.includes(round.id));
  const selectedRules = ruleRoles.map(role=>({...role,rule:completedRules.find(round=>round.id===finale[role.key])}));
  const finaleReady = machine
    ? selectedDecisions.length===3 && [finale.principle,finale.exception,finale.substitute].every(text=>text.trim())
    : selectedRules.every(({rule})=>rule) && new Set(selectedRules.map(({rule})=>rule?.id)).size===3 && [finale.effect,finale.rewrite].every(text=>text.trim());
  const image = machine ? '/conversation-worlds/elimination-machine.webp' : '/conversation-worlds/absurd-universe.webp';

  useEffect(()=>{
    const frame=window.requestAnimationFrame(()=>{
      try {
        const value=JSON.parse(sessionStorage.getItem(storageKey)||'null');
        if(value && Number.isInteger(value.index) && value.index>=0 && value.index<entries.length && value.decisions && value.opened) setSaved(value);
      } catch { /* Storage is optional. The activity still works without it. */ }
      setReady(true);
    });
    return ()=>window.cancelAnimationFrame(frame);
  },[storageKey,entries.length]);
  useEffect(()=>{if(ready){try{sessionStorage.setItem(storageKey,JSON.stringify(saved));}catch{}}},[saved,ready,storageKey]);

  useEffect(()=>{
    if(!machine||!decisionFirst)return;
    const timer=window.setTimeout(()=>questionRef.current?.focus({preventScroll:true}),motion?900:0);
    return ()=>window.clearTimeout(timer);
  },[machine,entry.id,decisionFirst,motion]);

  function go(next:number) {
    setSaved(s=>({...s,index:Math.min(Math.max(next,0),entries.length-1)}));
    setNotice('');
    document.getElementById('cw-activity')?.scrollIntoView({behavior:motion?'smooth':'instant',block:'start'});
  }
  function choose(choice:Choice) {
    setSaved(s=>({...s,decisions:{...s.decisions,[entry.id]:{first:choice}}}));
    setNotice('Decisión tomada. Ahora, conversemos.');
  }
  function reveal() {
    setSaved(s=>({...s,decisions:{...s.decisions,[entry.id]:{...s.decisions[entry.id],revealed:true}}}));
    setNotice('Consecuencia revelada. Puedes mantener tu decisión o cambiarla.');
  }
  function decideFinal(change:boolean) {
    if(!decision)return;
    const final = change ? (decision.first==='yes'?'no':'yes') : decision.first;
    setSaved(s=>({...s,decisions:{...s.decisions,[entry.id]:{...decision,final}}}));
    if(c1)setFinale(s=>({...s,open:false}));
    setNotice(change?'Cambiaste de opinión. Tu decisión quedó guardada.':c1?'Mantienes tu decisión. Quedó guardada.':'Mantenés tu decisión. Quedó guardada.');
  }
  function openQuestion(n:number) {
    if(c1)setRuleCursor(s=>({...s,[entry.id]:n}));
    setSaved(s=>({...s,opened:{...s.opened,[entry.id]:c1?Math.max(s.opened[entry.id]??-1,n):n}}));
    setNotice(n===3?'Regla conversada. Puedes elegir otra.':`Pregunta ${n+1} de 3.`);
  }
  function resetRound() {
    setSaved(s=>{const decisions={...s.decisions};const opened={...s.opened};delete decisions[entry.id];delete opened[entry.id];return {...s,decisions,opened};});
    if(c1){setFinale(emptyFinale());setRuleCursor(s=>{const cursor={...s};delete cursor[entry.id];return cursor;});}
    setNotice('Ronda reiniciada.');
  }

  function updateFinale(field: 'keep'|'reject'|'modify'|'principle'|'exception'|'substitute'|'effect'|'rewrite', value:string) {
    setFinale(s=>({...s,[field]:value,open:false}));
  }
  function selectDecision(id:string) {
    setFinale(s=>({...s,open:false,selected:s.selected.includes(id)?s.selected.filter(value=>value!==id):s.selected.length<3?[...s.selected,id]:s.selected}));
  }

  return <main className={`cw-world cw-${mode}${c1?' cw-c1':b2?' cw-b2':a1?' cw-a1':''}`} data-motion={motion}>
    <div className="cw-shell">
      <header className="cw-topbar"><Link href="/" className="cw-brand"><SpanishCueBrand variant="compact" context={b2||a1||c1?'MUNDOS DE CONVERSACIÓN':'CONVERSATION WORLDS'} /></Link><Link href="/#library-results" className="cw-back">← Biblioteca</Link><div className="cw-top-actions"><span className="cw-level">{level} · CONVERSACIÓN</span>{a2&&<button onClick={()=>setShowEnglish(v=>!v)} aria-pressed={showEnglish}>{showEnglish?'Ocultar inglés':'Ayuda en inglés'}</button>}<button onClick={()=>setMotion(m=>!m)} aria-pressed={!motion}>{motion?'Pausar movimiento':'Activar movimiento'}</button></div></header>
      <section className="cw-intro">
        <div><p className="cw-eyebrow">{machine?'EXPERIMENTO 01 · DECIDIR Y RECONSIDERAR':'EXPERIMENTO 02 · IMAGINAR OTRA VIDA'}</p><h1>{machine?<>La máquina que <em>elimina cosas</em> del mundo.</>:<>Tu vida con una <em>regla absurda.</em></>}</h1></div>
        <div className="cw-intro-copy"><p>{guide ? guide.introduction : a2?(machine?'Esta máquina puede borrar una cosa del mundo para siempre. Tú eliges qué se queda y qué desaparece.':'Mañana te despiertas en un mundo diferente. En cada ronda hay una regla nueva.'):machine?'Una empresa inventó una máquina capaz de eliminar para siempre una cosa del planeta. Tú decides qué desaparece.':'Mañana te despiertas y descubres que el mundo funciona distinto. Cada ronda cambia una ley del universo.'}</p><p className="cw-instruction">{a1?(machine?'Elige eliminar o conservar. Di una razón, mira qué pasa y elige otra vez.':'Lee la regla. Primero di si te gusta. Después cuenta tu día y elige qué hacer.'):machine?'Primero elige Sí o No. La tarjeta gira, aparece una pregunta y después puedes descubrir el giro.':'Lee la nueva regla, imagina la situación y abre las tres preguntas de una en una.'}</p><span className="cw-count">{machine?(a1?`${machineRounds.length} decisiones · una razón · una sorpresa`:'30 decisiones · 30 preguntas centrales · 30 giros'):'15 reglas inesperadas · 45 preguntas'}</span></div>
      </section>

      {(b2||a1||c1)&&guide&&<section className="cw-b2-preparation" aria-labelledby="cw-prepare-title">
        <div className="cw-b2-warmup"><p className="cw-eyebrow">ANTES DEL EXPERIMENTO · 5 MIN</p><h2 id="cw-prepare-title">Preparar la conversación</h2><p>{guide.warmup}</p></div>
        <details className="cw-b2-guide"><summary>Guía docente <span>45 minutos</span></summary><p>{guide.objective}</p><ol>{guide.stages.map(stage=><li key={stage.time}><span>{stage.time}</span><div><strong>{stage.title}</strong><p>{stage.task}</p></div></li>)}</ol><p className="cw-b2-note">{guide.teacherNote}</p></details>
        {a1&&<BeginnerHelp frames={guide.moves}/>}
      </section>}

      <section id="cw-activity" className="cw-activity" aria-label={machine?'La máquina de decisiones':'La regla del universo'}>
        <div className="cw-scene-column">
          <div className="cw-scene" onPointerMove={e=>{if(!motion||e.pointerType==='touch')return;const b=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--rx',`${(e.clientY-b.top)/b.height*3-1.5}deg`);e.currentTarget.style.setProperty('--ry',`${(e.clientX-b.left)/b.width*4-2}deg`);}} onPointerLeave={e=>{e.currentTarget.style.setProperty('--rx','0deg');e.currentTarget.style.setProperty('--ry','0deg');}}>
            <div className={`cw-panorama ${machine&&decision?.revealed?'cw-activated':''}`} key={`${mode}-${index}`}><img src={image} alt={machine?'Una máquina de titanio rodea un planeta flotante dentro de una cámara de cristal iluminada.':'Una ciudad imposible con edificios invertidos y un tranvía flotante bajo un cielo violeta.'} width="1672" height="941" fetchPriority="high"/><span className="cw-light-pass" aria-hidden="true"/></div>
            <div className="cw-scene-edge" aria-hidden="true"/>
          </div>
          <div className="cw-scene-caption"><span className="cw-caption-line"/><div><span>{machine?'CÁMARA DE ELIMINACIÓN':'UNIVERSO ALTERADO'}</span><strong>{entry.title}</strong></div><b>{String(index+1).padStart(2,'0')}<small> / {entries.length}</small></b></div>
          <div className="cw-progress-meta"><span>{complete} {machine?'decisiones cerradas':'reglas conversadas'}</span><b>{progress}%</b></div><div className="cw-progress" role="progressbar" aria-label="Avance de la conversación" aria-valuenow={complete} aria-valuemin={0} aria-valuemax={entries.length}><i style={{width:`${progress}%`}}/></div>
          <p className="cw-fiction">{machine?'Los giros son situaciones inventadas para conversar, no predicciones. No hay respuestas correctas.':'Puedes cambiar de opinión, saltarte una regla o quedarte conversando. No hay respuestas correctas.'}</p>
        </div>

        <div className="cw-conversation-column">
          <div className="cw-round-bar"><span>{entry.group}</span><button onClick={resetRound}>Reiniciar ronda</button></div>
          {machine ? <div className={`cw-flip ${decision?'cw-flipped':''}`} key={entry.id}>
            <div className="cw-flip-inner">
              <article className="cw-card cw-front" aria-hidden={!!decision} inert={!!decision}>
                <div className="cw-card-top"><span>ANTES DE APRETAR EL BOTÓN</span><span>{String(index+1).padStart(2,'0')}</span></div>
                <h2>{item.title}</h2><p className="cw-context">{item.intro}</p><div className="cw-decision-prompt">{a1?'¿Lo eliminas o no?':b2||c1?'¿Eliminarías esto del mundo?':'¿Lo eliminás para siempre?'}</div>
                <div className="cw-choices"><button className="cw-yes" onClick={()=>choose('yes')}><b>SÍ</b><span>Eliminar</span></button><button className="cw-no" onClick={()=>choose('no')}><b>NO</b><span>Conservar</span></button></div>
                <p className="cw-card-note">Elige primero. La pregunta está del otro lado.</p>
              </article>
              <article className="cw-card cw-back-face" aria-hidden={!decision} inert={!decision}>
                {decision&&<><div className="cw-card-top"><span>TU PRIMERA DECISIÓN</span><span className={`cw-choice-pill cw-choice-${decision.first}`}>{decision.first==='yes'?'ELIMINAR':'CONSERVAR'}</span></div><h2 className="cw-item-heading">{item.title}</h2><p className="cw-eyebrow">AHORA, CONVERSEMOS</p><h3 className="cw-question" ref={questionRef} tabIndex={-1}>{item.question}</h3>{a2&&showEnglish&&<p className="cw-translation" lang="en">{item.questionEn}</p>}<>{a1?<BeginnerHelp frames={item.answerFrames??[item.starter]} words={item.words}/>:<TalkHelp words={item.words} starter={item.starter}/>}</>{c1&&item.depthPrompt&&<p className="cw-c1-depth">{item.depthPrompt}</p>}{b2&&item.followUp&&<details className="cw-help cw-b2-followup"><summary>Profundizar la conversación <span aria-hidden="true">+</span></summary><div><p>{item.followUp}</p></div></details>}
                {!decision.revealed?<button className="cw-primary cw-reveal" onClick={reveal}>{a1||a2?'¿Qué pasa después?':'Descubrir la consecuencia'} <span aria-hidden="true">↗</span></button>:<section className="cw-consequence"><p className="cw-eyebrow">GIRO · SI DESAPARECE…</p><p>{item.consequence}</p>{b2&&<div className="cw-b2-counterpoint"><p className="cw-eyebrow">OTRA VOZ</p><p>{item.counterpoint}</p><p className="cw-b2-revision">{item.revision}</p></div>}{c1&&<div className="cw-c1-reinterpretation"><p className="cw-eyebrow">REPENSAR LA PROPUESTA</p><p>{item.reinterpretation}</p>{item.teacherChallenge&&<details className="cw-help"><summary>Desafío docente <span aria-hidden="true">+</span></summary><div><p>{item.teacherChallenge}</p></div></details>}</div>}<h4>{c1?'¿Qué parte de tu decisión mantienes?':a1?'¿Cambias de idea?':b2?'Después de escuchar la objeción…':a2?'¿Pensás lo mismo ahora?':'¿Seguís manteniendo tu decisión?'}</h4><div className="cw-final-choices"><button onClick={()=>decideFinal(false)} aria-pressed={decision.final===decision.first}>{a1?'No cambio de idea':a2?'Sí, pienso lo mismo':'Mantengo mi decisión'}</button><button onClick={()=>decideFinal(true)} aria-pressed={!!decision.final&&decision.final!==decision.first}>{a1?'Cambio de idea':a2?'No, cambio de idea':'Cambio de opinión'}</button></div>{decision.final&&<p className="cw-verdict">Decisión final: <strong>{decision.final==='yes'?'eliminar':'conservar'}</strong>. {c1?'Precisa qué eliminarías, qué función conservarías y qué excepción exige tu argumento.':a1?'Ahora elijo… porque…':b2?'Explica qué argumento aceptas, qué mantienes y bajo qué condición revisarías tu postura.':a2?'Contá por qué.':'Contá qué pesó más para vos.'}</p>}</section>}</>}
              </article>
            </div>
          </div> : <article className="cw-card cw-rule-card" key={entry.id}>
            <div className="cw-card-top"><span>NUEVA LEY DEL UNIVERSO</span><span>REGLA {String(index+1).padStart(2,'0')}</span></div><h2>{rule.title}</h2><p className="cw-law">{rule.law}</p>{a2&&showEnglish&&<p className="cw-translation" lang="en">{rule.lawEn}</p>}<div className="cw-scene-situation"><span>{b2||c1?'IMAGINA ESTA SITUACIÓN':'IMAGINÁ ESTO'}</span><p>{rule.scene}</p></div>
            {questionNumber<0?<button className="cw-primary" onClick={()=>openQuestion(0)}>Abrir la primera pregunta <span aria-hidden="true">↗</span></button>:<div className="cw-rule-question" key={Math.min(questionNumber,2)}><div className="cw-question-steps" aria-label="Preguntas de esta regla">{rule.questions.map((_,n)=><button key={n} onClick={()=>openQuestion(n)} disabled={c1&&n>(saved.opened[entry.id]??-1)} aria-current={Math.min(questionNumber,2)===n?'step':undefined}>{n+1}<span>{(c1?['La intención','El truco','La nueva costumbre']:a1?['Mi reacción','Mi día','Mi elección']:b2?['En la práctica','Otra perspectiva','Revisar la ley']:a2?['Primera','Segunda','Tercera']:['Tu vida','Los demás','Un paso más'])[n]}</span></button>)}</div>{c1&&questionNumber>0&&<section className="cw-c1-development" aria-label="La ciudad cambia">{rule.developments?.slice(0,Math.min(questionNumber,2)).map((development,n)=><div key={development}><p className="cw-eyebrow">{n===0?'AL CABO DE UN MES':'UN AÑO DESPUÉS'}</p><p>{development}</p></div>)}</section>}<h3 className="cw-question" tabIndex={-1}>{rule.questions[Math.min(questionNumber,2)]}</h3>{a2&&showEnglish&&<p className="cw-translation" lang="en">{rule.questionsEn?.[Math.min(questionNumber,2)]}</p>}<>{a1?<BeginnerHelp frames={rule.questionFrames?.[Math.min(questionNumber,2)]??[rule.starter]} words={rule.words}/>:<TalkHelp words={rule.words} starter={rule.starter}/>}</>{(b2||c1)&&questionNumber>=2&&rule.teacherFollowUp&&<details className="cw-help cw-b2-followup"><summary>Repregunta docente <span aria-hidden="true">+</span></summary><div><p>{rule.teacherFollowUp}</p></div></details>}{questionNumber<2?<button className="cw-primary" onClick={()=>openQuestion(questionNumber+1)}>Siguiente pregunta <span aria-hidden="true">→</span></button>:questionNumber===2?<button className="cw-primary" onClick={()=>openQuestion(3)}>Terminamos esta regla <span aria-hidden="true">✓</span></button>:<p className="cw-verdict">{c1?'Regla conversada. Explica qué cambió entre la intención y la costumbre; ya puedes incluirla en tu ciudad final.':b2?'Regla conversada. Resume la versión que defenderías y la objeción que aún queda por resolver.':'Regla conversada. Elige otro universo cuando quieras.'}</p>}</div>}
          </article>}
          <nav className="cw-next" aria-label="Cambiar de ronda"><button disabled={index===0} onClick={()=>go(index-1)}>← Anterior</button><span>{index+1} de {entries.length}</span><button disabled={index===entries.length-1} onClick={()=>go(index+1)}>{machine?'Otra decisión':'Otra regla'} →</button></nav>
          <p className="cw-status" role="status" aria-live="polite">{notice||'Puedes elegir cualquier ronda en el panel de abajo.'}</p>
        </div>
      </section>

      <section className="cw-rounds" aria-labelledby="cw-rounds-title"><div className="cw-section-heading"><div><p className="cw-eyebrow">ELIGE POR DÓNDE SEGUIR</p><h2 id="cw-rounds-title">{machine?(a1?'Cosas de todos los días. Tú eliges.':'Treinta cosas. Ninguna decisión simple.'):'Una vida distinta en cada ronda.'}</h2></div><span>{machine?'No hace falta hacerlas todas hoy.':'Puedes abrir las reglas en cualquier orden.'}</span></div>
        <div className="cw-groups" aria-label="Filtrar rondas">{groups.map(g=><button key={g} aria-pressed={group===g} onClick={()=>setGroup(g)}>{g}</button>)}</div>
        <div className="cw-round-grid">{entries.map((e,n)=>{if(group!=='Todas'&&group!==e.group)return null;const done=machine?Boolean(saved.decisions[e.id]?.final):saved.opened[e.id]===3;return <button key={e.id} className={`cw-round-tile ${n===index?'cw-current':''} ${done?'cw-done':''}`} onClick={()=>go(n)} aria-current={n===index?'step':undefined} style={{'--tile-delay':`${n%10*35}ms`} as CSSProperties}><span className="cw-tile-meta">{String(n+1).padStart(2,'0')}<i>{done?'Conversada':n===index?'En curso':''}</i></span><strong>{e.title}</strong><span className="cw-tile-bottom">{machine?'Decidir':'Explorar regla'} <b aria-hidden="true">↗</b></span></button>;})}</div>
      </section>

      {c1&&guide ? <>
        <section className="cw-b2-workshop" aria-label="Recursos para precisar"><details className="cw-help"><summary>Apoyo para matizar y reformular <span aria-hidden="true">+</span></summary><div><ul>{guide.moves.map(move=><li key={move}>{move}</li>)}</ul></div></details><details className="cw-help"><summary>Una objeción que pone a prueba tu criterio <span aria-hidden="true">+</span></summary><div><p>{guide.challenge}</p></div></details></section>
        <section className="cw-c1-closing" aria-labelledby="cw-c1-closing-title">
          <p className="cw-eyebrow">PARA TERMINAR · 10 MIN</p><h2 id="cw-c1-closing-title">{guide.closingTitle}</h2><p>{guide.closingTask}</p>
          {finale.open&&finaleReady ? <div className="cw-c1-board" role="region" aria-label="Mi síntesis oral">
            <h3>{machine?'Mi principio, puesto a prueba':'La ciudad que propongo'}</h3>
            {machine ? <><ul>{selectedDecisions.map(round=>{const vote=saved.decisions[round.id];return <li key={round.id}><strong>{round.title}</strong><p>{vote.first==='yes'?'eliminar':'conservar'} → {vote.final==='yes'?'eliminar':'conservar'}</p><p>{round.consequence}</p></li>;})}</ul><dl><dt>Principio general</dt><dd>{finale.principle}</dd><dt>Excepción y límite</dt><dd>{finale.exception}</dd><dt>Un sustituto peor que evitar</dt><dd>{finale.substitute}</dd></dl></> : <><ul>{selectedRules.map(({key,label,rule:chosen})=>chosen&&<li key={key}><strong>{label}: {chosen.title}</strong><p>{chosen.law}</p></li>)}</ul><dl><dt>El efecto que hace fallar la regla descartada</dt><dd>{finale.effect}</dd><dt>Mi nueva redacción</dt><dd>{finale.rewrite}</dd></dl></>}
            <ol>{closing.map(prompt=><li key={prompt}>{prompt}</li>)}</ol><button className="cw-primary" onClick={()=>setFinale(s=>({...s,open:false}))}>Revisar mi síntesis</button>
          </div> : <>
            <p className="cw-c1-selection-status" role="status">{machine?`Decisiones seleccionadas: ${selectedDecisions.length} de 3. Cierra al menos tres rondas para construir tu principio.`:'Conversa las tres preguntas de al menos tres reglas. Asigna una regla distinta a cada papel.'}</p>
            {machine ? <div className="cw-c1-picks" aria-label="Seleccionar decisiones cerradas">{completedDecisions.map(round=>{const vote=saved.decisions[round.id];const selected=finale.selected.includes(round.id);return <button key={round.id} aria-pressed={selected} disabled={!selected&&selectedDecisions.length===3} onClick={()=>selectDecision(round.id)}><span>Seleccionar: {round.title}</span><small>{vote.first==='yes'?'eliminar':'conservar'} → {vote.final==='yes'?'eliminar':'conservar'}</small></button>;})}</div> : <div className="cw-c1-fields">{ruleRoles.map(({key,label})=><label key={key} htmlFor={`cw-c1-${key}`}><span>{label}</span><select id={`cw-c1-${key}`} value={completedRules.some(round=>round.id===finale[key])?finale[key]:''} onChange={event=>updateFinale(key,event.target.value)}><option value="">Elige una regla conversada</option>{completedRules.map(round=><option key={round.id} value={round.id} disabled={ruleRoles.some(role=>role.key!==key&&finale[role.key]===round.id)}>{round.title}</option>)}</select></label>)}</div>}
            <p className="cw-c1-note">Anota ideas breves para apoyar tu explicación oral. Puedes revisarlas después de escuchar la objeción.</p>
            <div className="cw-c1-fields">
              {(machine?[{key:'principle',label:'Principio general: ¿cuándo mejora algo eliminarlo?'},{key:'exception',label:'Excepción: ¿qué dependencia obliga a limitar tu principio?'},{key:'substitute',label:'Sustituto peor: ¿qué impedirías y cómo?'}] as const:[{key:'effect',label:'¿Qué efecto inesperado hace fallar la regla que descartas?'},{key:'rewrite',label:'Reescribe la regla que modificarías: quién, cuándo y con qué excepción.'}] as const).map(({key,label})=><label key={key} htmlFor={`cw-c1-${key}`}><span>{label}</span><textarea id={`cw-c1-${key}`} rows={3} value={finale[key]} onChange={event=>updateFinale(key,event.target.value)}/></label>)}
            </div>
            <button className="cw-primary" disabled={!finaleReady} onClick={()=>{if(finaleReady)setFinale(s=>({...s,open:true}));}}>Abrir mi síntesis</button>
          </>}
        </section>
      </> : a1&&guide ? <section className="cw-a1-closing" aria-labelledby="cw-a1-closing-title">
        <p className="cw-eyebrow">PARA TERMINAR · 10 MIN</p><h2 id="cw-a1-closing-title">{guide.closingTitle}</h2><p>{guide.closingTask}</p>
        <div className="cw-a1-recap"><h3>{machine?'Tus decisiones de hoy':'Las reglas que conversamos'}</h3>
          {machine ? <>{machineRounds.some(round=>saved.decisions[round.id]?.final)?<ul>{machineRounds.filter(round=>saved.decisions[round.id]?.final).map(round=>{const vote=saved.decisions[round.id];return <li key={round.id}><strong>{round.title}</strong>: {vote.first==='yes'?'eliminar':'conservar'} → {vote.final==='yes'?'eliminar':'conservar'}{vote.first!==vote.final?' · Cambio de idea':''}</li>;})}</ul>:<p>Elige algunas cosas y mira qué pasa. Aquí aparecen tus decisiones.</p>}</> : <>{ruleRounds.some(round=>saved.opened[round.id]===3)?<ul>{ruleRounds.filter(round=>saved.opened[round.id]===3).map(round=><li key={round.id}>{round.title}</li>)}</ul>:<p>Conversen las tres preguntas de una regla. Aquí aparecen sus reglas.</p>}</>}
        </div><ol>{closing.map(question=><li key={question}>{question}</li>)}</ol>
        <BeginnerHelp frames={machine?['Porque me gusta…','Lo necesito para…','Sin esto, no puedo…']:['En mi ciudad, todos…','En… no podemos…','Con esta regla, voy a…']}/>
      </section> : b2&&guide ? <>
        <section className="cw-b2-workshop" aria-label="Recursos para argumentar"><details className="cw-help"><summary>Recursos para matizar y negociar <span aria-hidden="true">+</span></summary><div><ul>{guide.moves.map(move=><li key={move}>{move}</li>)}</ul></div></details><details className="cw-help"><summary>Desafío oral · Cambiar de perspectiva <span aria-hidden="true">+</span></summary><div><p>{guide.challenge}</p></div></details></section>
        <details className="cw-b2-closing"><summary>{guide.closingTitle}<span>10 min</span></summary><p>{guide.closingTask}</p><ol>{closing.map(question=><li key={question}>{question}</li>)}</ol></details>
      </> : <ConversationClosing questions={closing} /> }
      <footer className="cw-footer"><p>Conversación libre · {c1?'Español':'Español rioplatense'} · Nivel {level}</p><div><button onClick={()=>{setSaved(empty());setNotice('Nueva conversación. Empezamos de cero.');setGroup('Todas');setFinale(emptyFinale());setRuleCursor({});}}>Nueva conversación</button><a href={(machine?'/tu-vida-con-una-regla-absurda':'/la-maquina-que-elimina-cosas')+(c1?'?level=C1':a1?'?level=A1':b2?'?level=B2':a2?'-a2':'')}>{machine?'Ir a Tu vida con una regla absurda':'Ir a La máquina que elimina cosas'} →</a></div></footer>
    </div>
  </main>;
}
