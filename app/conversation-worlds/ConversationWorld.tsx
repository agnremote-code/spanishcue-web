"use client";

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import type { eliminations, absurdRules } from './data';
import { ConversationClosing } from '../conversation-families/ConversationFamily';
import './worlds.css';
import { SpanishCueBrand } from '../SpanishCueBrand';

type Choice = 'yes' | 'no';
type Decision = { first: Choice; final?: Choice; revealed?: boolean };
type Saved = { index: number; decisions: Record<string, Decision>; opened: Record<string, number> };
const empty = (): Saved => ({index:0,decisions:{},opened:{}});

function TalkHelp({words,starter}:{words:string[];starter:string}) {
  return <details className="cw-help"><summary>Una mano para hablar <span aria-hidden="true">+</span></summary><div><p className="cw-starter">«{starter}»</p><div className="cw-words">{words.map(word=><span key={word}>{word}</span>)}</div><p>Puedes dar un ejemplo de tu vida, comparar o explicar por qué. Tómate tu tiempo.</p></div></details>;
}

export default function ConversationWorld({mode,level,machineRounds,ruleRounds,closing}:{mode:'machine'|'rules';level:'A2'|'B1';machineRounds:typeof eliminations;ruleRounds:typeof absurdRules;closing:string[]}) {
  const machine = mode==='machine';
  const a2 = level==='A2';
  const entries = machine ? machineRounds : ruleRounds;
  const [showEnglish,setShowEnglish] = useState(false);
  const [saved,setSaved] = useState<Saved>(empty);
  const [ready,setReady] = useState(false);
  const [motion,setMotion] = useState(true);
  const [group,setGroup] = useState('Todas');
  const [notice,setNotice] = useState('');
  const questionRef = useRef<HTMLHeadingElement>(null);
  const storageKey = `chespanish-conversation-${mode}${a2?'-A2':''}-v1`;
  const index = Math.min(Math.max(saved.index,0),entries.length-1);
  const entry = entries[index];
  const item = machineRounds[index];
  const rule = ruleRounds[index];
  const decision = saved.decisions[entry.id];
  const decisionFirst = decision?.first;
  const questionNumber = saved.opened[entry.id] ?? -1;
  const complete = entries.filter(e=>machine ? Boolean(saved.decisions[e.id]?.final) : saved.opened[e.id]===3).length;
  const progress = Math.round(100*complete/entries.length);
  const groups = ['Todas',...new Set(entries.map(e=>e.group))];
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
    setNotice(change?'Cambiaste de opinión. Tu decisión quedó guardada.':'Mantenés tu decisión. Quedó guardada.');
  }
  function openQuestion(n:number) {
    setSaved(s=>({...s,opened:{...s.opened,[entry.id]:n}}));
    setNotice(n===3?'Regla conversada. Puedes elegir otra.':`Pregunta ${n+1} de 3.`);
  }
  function resetRound() {
    setSaved(s=>{const decisions={...s.decisions};const opened={...s.opened};delete decisions[entry.id];delete opened[entry.id];return {...s,decisions,opened};});
    setNotice('Ronda reiniciada.');
  }

  return <main className={`cw-world cw-${mode}`} data-motion={motion}>
    <div className="cw-shell">
      <header className="cw-topbar"><Link href="/" className="cw-brand"><SpanishCueBrand variant="compact" context="CONVERSATION WORLDS" /></Link><Link href="/#library-results" className="cw-back">← Biblioteca</Link><div className="cw-top-actions"><span className="cw-level">{level} · CONVERSACIÓN</span>{a2&&<button onClick={()=>setShowEnglish(v=>!v)} aria-pressed={showEnglish}>{showEnglish?'Ocultar inglés':'Ayuda en inglés'}</button>}<button onClick={()=>setMotion(m=>!m)} aria-pressed={!motion}>{motion?'Pausar movimiento':'Activar movimiento'}</button></div></header>
      <section className="cw-intro">
        <div><p className="cw-eyebrow">{machine?'EXPERIMENTO 01 · DECIDIR Y RECONSIDERAR':'EXPERIMENTO 02 · IMAGINAR OTRA VIDA'}</p><h1>{machine?<>La máquina que <em>elimina cosas</em> del mundo.</>:<>Tu vida con una <em>regla absurda.</em></>}</h1></div>
        <div className="cw-intro-copy"><p>{a2?(machine?'Esta máquina puede borrar una cosa del mundo para siempre. Tú eliges qué se queda y qué desaparece.':'Mañana te despiertas en un mundo diferente. En cada ronda hay una regla nueva.'):machine?'Una empresa inventó una máquina capaz de eliminar para siempre una cosa del planeta. Tú decides qué desaparece.':'Mañana te despiertas y descubres que el mundo funciona distinto. Cada ronda cambia una ley del universo.'}</p><p className="cw-instruction">{machine?'Primero elige Sí o No. La tarjeta gira, aparece una pregunta y después puedes descubrir el giro.':'Lee la nueva regla, imagina la situación y abre las tres preguntas de una en una.'}</p><span className="cw-count">{machine?'30 decisiones · 30 preguntas centrales · 30 giros':'15 reglas inesperadas · 45 preguntas'}</span></div>
      </section>

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
                <h2>{item.title}</h2><p className="cw-context">{item.intro}</p><div className="cw-decision-prompt">¿Lo eliminás para siempre?</div>
                <div className="cw-choices"><button className="cw-yes" onClick={()=>choose('yes')}><b>SÍ</b><span>Eliminar</span></button><button className="cw-no" onClick={()=>choose('no')}><b>NO</b><span>Conservar</span></button></div>
                <p className="cw-card-note">Elige primero. La pregunta está del otro lado.</p>
              </article>
              <article className="cw-card cw-back-face" aria-hidden={!decision} inert={!decision}>
                {decision&&<><div className="cw-card-top"><span>TU PRIMERA DECISIÓN</span><span className={`cw-choice-pill cw-choice-${decision.first}`}>{decision.first==='yes'?'ELIMINAR':'CONSERVAR'}</span></div><h2 className="cw-item-heading">{item.title}</h2><p className="cw-eyebrow">AHORA, CONVERSEMOS</p><h3 className="cw-question" ref={questionRef} tabIndex={-1}>{item.question}</h3>{a2&&showEnglish&&<p className="cw-translation" lang="en">{item.questionEn}</p>}<TalkHelp words={item.words} starter={item.starter}/>
                {!decision.revealed?<button className="cw-primary cw-reveal" onClick={reveal}>{a2?'¿Qué pasa después?':'Descubrir la consecuencia'} <span aria-hidden="true">↗</span></button>:<section className="cw-consequence"><p className="cw-eyebrow">GIRO · SI DESAPARECE…</p><p>{item.consequence}</p><h4>{a2?'¿Pensás lo mismo ahora?':'¿Seguís manteniendo tu decisión?'}</h4><div className="cw-final-choices"><button onClick={()=>decideFinal(false)} aria-pressed={decision.final===decision.first}>{a2?'Sí, pienso lo mismo':'Mantengo mi decisión'}</button><button onClick={()=>decideFinal(true)} aria-pressed={!!decision.final&&decision.final!==decision.first}>{a2?'No, cambio de idea':'Cambio de opinión'}</button></div>{decision.final&&<p className="cw-verdict">Decisión final: <strong>{decision.final==='yes'?'eliminar':'conservar'}</strong>. {a2?'Contá por qué.':'Contá qué pesó más para vos.'}</p>}</section>}</>}
              </article>
            </div>
          </div> : <article className="cw-card cw-rule-card" key={entry.id}>
            <div className="cw-card-top"><span>NUEVA LEY DEL UNIVERSO</span><span>REGLA {String(index+1).padStart(2,'0')}</span></div><h2>{rule.title}</h2><p className="cw-law">{rule.law}</p>{a2&&showEnglish&&<p className="cw-translation" lang="en">{rule.lawEn}</p>}<div className="cw-scene-situation"><span>IMAGINÁ ESTO</span><p>{rule.scene}</p></div>
            {questionNumber<0?<button className="cw-primary" onClick={()=>openQuestion(0)}>Abrir la primera pregunta <span aria-hidden="true">↗</span></button>:<div className="cw-rule-question" key={Math.min(questionNumber,2)}><div className="cw-question-steps" aria-label="Preguntas de esta regla">{rule.questions.map((_,n)=><button key={n} onClick={()=>openQuestion(n)} aria-current={Math.min(questionNumber,2)===n?'step':undefined}>{n+1}<span>{(a2?['Primera','Segunda','Tercera']:['Tu vida','Los demás','Un paso más'])[n]}</span></button>)}</div><h3 className="cw-question" tabIndex={-1}>{rule.questions[Math.min(questionNumber,2)]}</h3>{a2&&showEnglish&&<p className="cw-translation" lang="en">{rule.questionsEn?.[Math.min(questionNumber,2)]}</p>}<TalkHelp words={rule.words} starter={rule.starter}/>{questionNumber<2?<button className="cw-primary" onClick={()=>openQuestion(questionNumber+1)}>Siguiente pregunta <span aria-hidden="true">→</span></button>:questionNumber===2?<button className="cw-primary" onClick={()=>openQuestion(3)}>Terminamos esta regla <span aria-hidden="true">✓</span></button>:<p className="cw-verdict">Regla conversada. Elige otro universo cuando quieras.</p>}</div>}
          </article>}
          <nav className="cw-next" aria-label="Cambiar de ronda"><button disabled={index===0} onClick={()=>go(index-1)}>← Anterior</button><span>{index+1} de {entries.length}</span><button disabled={index===entries.length-1} onClick={()=>go(index+1)}>{machine?'Otra decisión':'Otra regla'} →</button></nav>
          <p className="cw-status" role="status" aria-live="polite">{notice||'Puedes elegir cualquier ronda en el panel de abajo.'}</p>
        </div>
      </section>

      <section className="cw-rounds" aria-labelledby="cw-rounds-title"><div className="cw-section-heading"><div><p className="cw-eyebrow">ELIGE POR DÓNDE SEGUIR</p><h2 id="cw-rounds-title">{machine?'Treinta cosas. Ninguna decisión simple.':'Una vida distinta en cada ronda.'}</h2></div><span>{machine?'No hace falta hacerlas todas hoy.':'Puedes abrir las reglas en cualquier orden.'}</span></div>
        <div className="cw-groups" aria-label="Filtrar rondas">{groups.map(g=><button key={g} aria-pressed={group===g} onClick={()=>setGroup(g)}>{g}</button>)}</div>
        <div className="cw-round-grid">{entries.map((e,n)=>{if(group!=='Todas'&&group!==e.group)return null;const done=machine?Boolean(saved.decisions[e.id]?.final):saved.opened[e.id]===3;return <button key={e.id} className={`cw-round-tile ${n===index?'cw-current':''} ${done?'cw-done':''}`} onClick={()=>go(n)} aria-current={n===index?'step':undefined} style={{'--tile-delay':`${n%10*35}ms`} as CSSProperties}><span className="cw-tile-meta">{String(n+1).padStart(2,'0')}<i>{done?'Conversada':n===index?'En curso':''}</i></span><strong>{e.title}</strong><span className="cw-tile-bottom">{machine?'Decidir':'Explorar regla'} <b aria-hidden="true">↗</b></span></button>;})}</div>
      </section>

      <ConversationClosing questions={closing} />
      <footer className="cw-footer"><p>Conversación libre · Español rioplatense · Nivel {level}</p><div><button onClick={()=>{setSaved(empty());setNotice('Nueva conversación. Empezamos de cero.');setGroup('Todas');}}>Nueva conversación</button><a href={(machine?'/tu-vida-con-una-regla-absurda':'/la-maquina-que-elimina-cosas')+(a2?'-a2':'')}>{machine?'Ir a Tu vida con una regla absurda':'Ir a La máquina que elimina cosas'} →</a></div></footer>
    </div>
  </main>;
}
