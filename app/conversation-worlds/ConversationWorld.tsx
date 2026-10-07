"use client";

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import type { WorldElimination, WorldRule, WorldGuide, WorldLevel } from './types';
import { c2MachineReframe, c2Closing, completedC2Decision, emptyC2Finale, type WorldDecision, type C2Finale } from './c2-presentation';
import { conversationWorldStorageKey } from './state';
import { ConversationClosing } from '../conversation-families/ConversationFamily';
import './worlds.css';
import { SpanishCueBrand } from '../SpanishCueBrand';


function a0NoticeEnglish(text:string):string {
 const notices:Record<string,string>={
 'Decisión tomada. Ahora, conversemos.':'Choice made. Now let’s talk.',
 'Consecuencia revelada. Puedes mantener tu decisión o cambiarla.':'Consequence revealed. You can keep or change your choice.',
 'Cambiaste de opinión. Tu decisión quedó guardada.':'You changed your mind. Your choice was saved.',
 'Mantienes tu decisión. Quedó guardada.':'You kept your choice. It was saved.',
 'Regla conversada. Puedes elegir otra.':'Rule discussed. You can choose another.',
 'Ronda reiniciada.':'Round restarted.',
 'Nueva conversación. Empezamos de cero.':'New conversation. Start again.',
 };
 const question=text.match(/^Pregunta (\d+) de 3\.$/);
 return question?`Question ${question[1]} of 3.`:notices[text]??text;
}

type Choice = 'yes' | 'no';
type Decision = WorldDecision;
type Saved = { index: number; decisions: Record<string, Decision>; opened: Record<string, number> };
const empty = (): Saved => ({index:0,decisions:{},opened:{}});
type Finale = { selected: string[]; keep: string; reject: string; modify: string; principle: string; exception: string; substitute: string; effect: string; rewrite: string; open: boolean };
const emptyFinale = (): Finale => ({selected:[],keep:'',reject:'',modify:'',principle:'',exception:'',substitute:'',effect:'',rewrite:'',open:false});
const ruleRoles = [{key:'keep',label:'Conservar'},{key:'reject',label:'Descartar'},{key:'modify',label:'Modificar'}] as const;


function TalkHelp({words,starter}:{words:string[];starter:string}) {
  return <details className="cw-help"><summary>Una mano para hablar <span aria-hidden="true">+</span></summary><div><p className="cw-starter">«{starter}»</p><div className="cw-words">{words.map(word=><span key={word}>{word}</span>)}</div><p>Puedes dar un ejemplo de tu vida, comparar o explicar por qué. Tómate tu tiempo.</p></div></details>;
}

function BeginnerHelp({frames,words,a0=false}:{frames:string[];words?:string[];a0?:boolean}) {
  return <div className="cw-a1-support"><p>{a0?'Elige un modelo y dilo. / Choose a complete model and say it.':<><strong>Primero, una respuesta corta.</strong> Después, añade una frase.</>}</p><ul>{frames.map(frame=><li key={frame}>{frame}</li>)}</ul>{words&&<div className="cw-words">{words.map(word=><span key={word}>{word}</span>)}</div>}</div>;
}

export default function ConversationWorld({mode,level,machineRounds,ruleRounds,closing,guide}:{mode:'machine'|'rules';level:WorldLevel;machineRounds:WorldElimination[];ruleRounds:WorldRule[];closing:string[];guide?:WorldGuide}) {
  const a0Text=(es:string,en:string)=>level==='A0'?`${es} / ${en}`:es;
  const machine = mode==='machine';
  const a1 = level==='A0'||level==='A1';
  const a2 = level==='A2';
  const b2 = level==='B2';
  const c1 = level==='C1';
  const c2 = level==='C2';
  const advanced = c1||c2;
  const entries = machine ? machineRounds : ruleRounds;
  const [showEnglish,setShowEnglish] = useState(false);
  const [saved,setSaved] = useState<Saved>(empty);
  const [ready,setReady] = useState(false);
  const [motion,setMotion] = useState(true);
  const [group,setGroup] = useState('Todas');
  const [notice,setNotice] = useState('');
  const [finale,setFinale] = useState<Finale>(emptyFinale);
  const [c2Finale,setC2Finale] = useState<C2Finale>(emptyC2Finale);
  const [ruleCursor,setRuleCursor] = useState<Record<string,number>>({});
  const questionRef = useRef<HTMLHeadingElement>(null);
  const storageKey = conversationWorldStorageKey(mode,level);
  const index = Math.min(Math.max(saved.index,0),entries.length-1);
  const entry = entries[index];
  const item = machineRounds[index];
  const rule = ruleRounds[index];
  const decision = saved.decisions[entry.id];
  const decisionFirst = decision?.first;
  const questionNumber = (advanced ? ruleCursor[entry.id] : undefined) ?? saved.opened[entry.id] ?? -1;
  const complete = entries.filter(e=>machine ? (c2?completedC2Decision(saved.decisions[e.id]):Boolean(saved.decisions[e.id]?.final)) : saved.opened[e.id]===3).length;
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

  useEffect(()=>{
    if(!c2)return;
    const target=decision?.compared?'cw-c2-reading':!machine&&questionNumber>=0?'cw-rule-question-title':null;
    if(!target)return;
    const frame=window.requestAnimationFrame(()=>document.getElementById(target)?.focus({preventScroll:true}));
    return ()=>window.cancelAnimationFrame(frame);
  },[c2,decision?.compared,machine,questionNumber,entry.id]);
  useEffect(()=>{
    if(!c2||!c2Finale.open)return;
    const frame=window.requestAnimationFrame(()=>document.getElementById('cw-c2-board-title')?.focus({preventScroll:true}));
    return ()=>window.cancelAnimationFrame(frame);
  },[c2,c2Finale.open]);

  function updateC2Decision(field:'compared'|'reformulation'|'condition',value:string|boolean) {
    if(!decision?.revealed)return;
    setSaved(s=>({...s,decisions:{...s.decisions,[entry.id]:{...s.decisions[entry.id],[field]:value,final:undefined}}}));
    setC2Finale(s=>({...s,open:false}));
  }
  function voteC2(final:NonNullable<Decision['final']>) {
    if(!decision?.revealed||!decision.compared||!decision.reformulation?.trim()||(final==='conditional'&&!decision.condition?.trim()))return;
    setSaved(s=>({...s,decisions:{...s.decisions,[entry.id]:{...s.decisions[entry.id],final}}}));
    setC2Finale(s=>({...s,open:false}));
    setNotice('Decisión final guardada. Explica tu nueva formulación.');
  }

  function updateC2Finale(field:Exclude<keyof C2Finale,'open'>,value:string) {
    setC2Finale(previous=>{
      const next={...previous,[field]:value,open:false};
      if(previous[field]===value)return next;
      if(field==='law')return {...next,diagnosis:'',rewrite:'',edgeOne:'',edgeTwo:'',limitation:''};
      if(field==='proposition')return {...next,rewrite:'',improvement:''};
      if(['eliminate','redefined','binary'].includes(field)&&![next.eliminate,next.redefined,next.binary].includes(next.proposition))return {...next,proposition:'',rewrite:'',improvement:''};
      return next;
    });
  }

  function go(next:number) {
    setSaved(s=>({...s,index:Math.min(Math.max(next,0),entries.length-1)}));
    setNotice('');
    document.getElementById('cw-activity')?.scrollIntoView({behavior:motion?'smooth':'instant',block:'start'});
  }
  function choose(choice:Choice) {
    setSaved(s=>({...s,decisions:{...s.decisions,[entry.id]:{first:choice}}}));
    if(c2)setC2Finale(s=>({...s,open:false}));
    setNotice('Decisión tomada. Ahora, conversemos.');
  }
  function reveal() {
    setSaved(s=>({...s,decisions:{...s.decisions,[entry.id]:{...s.decisions[entry.id],revealed:true}}}));
    setNotice(c2?'Consecuencia revelada. Contrasta la otra lectura antes de reformular.':'Consecuencia revelada. Puedes mantener tu decisión o cambiarla.');
  }
  function decideFinal(change:boolean) {
    if(!decision)return;
    const final = change ? (decision.first==='yes'?'no':'yes') : decision.first;
    setSaved(s=>({...s,decisions:{...s.decisions,[entry.id]:{...decision,final}}}));
    if(c1)setFinale(s=>({...s,open:false}));
    setNotice(change?'Cambiaste de opinión. Tu decisión quedó guardada.':c1?'Mantienes tu decisión. Quedó guardada.':'Mantienes tu decisión. Quedó guardada.');
  }
  function openQuestion(n:number) {
    if(advanced)setRuleCursor(s=>({...s,[entry.id]:n}));
    setSaved(s=>({...s,opened:{...s.opened,[entry.id]:advanced?Math.max(s.opened[entry.id]??-1,n):n}}));
    setNotice(n===3?'Regla conversada. Puedes elegir otra.':`Pregunta ${n+1} de 3.`);
  }
  function resetRound() {
    setSaved(s=>{const decisions={...s.decisions};const opened={...s.opened};delete decisions[entry.id];delete opened[entry.id];return {...s,decisions,opened};});
    if(c2)setC2Finale(emptyC2Finale());
    if(advanced){setFinale(emptyFinale());setRuleCursor(s=>{const cursor={...s};delete cursor[entry.id];return cursor;});}
    setNotice('Ronda reiniciada.');
  }

  function updateFinale(field: 'keep'|'reject'|'modify'|'principle'|'exception'|'substitute'|'effect'|'rewrite', value:string) {
    setFinale(s=>({...s,[field]:value,open:false}));
  }
  function selectDecision(id:string) {
    setFinale(s=>({...s,open:false,selected:s.selected.includes(id)?s.selected.filter(value=>value!==id):s.selected.length<3?[...s.selected,id]:s.selected}));
  }

  return <main className={`cw-world cw-${mode}${c2?' cw-c2':c1?' cw-c1':b2?' cw-b2':a1?' cw-a1':''}`} data-motion={motion}>
    <div className="cw-shell">
      <header className="cw-topbar"><Link href="/" className="cw-brand"><SpanishCueBrand variant="compact" context={b2||a1||advanced?a0Text("MUNDOS DE CONVERSACIÓN","CONVERSATION WORLDS"):'CONVERSATION WORLDS'} /></Link><Link href="/#library-results" className="cw-back">{a0Text("← Biblioteca","← Library")}</Link><div className="cw-top-actions"><span className="cw-level">{level} · {a0Text("CONVERSACIÓN","CONVERSATION")}</span>{a2&&<button onClick={()=>setShowEnglish(v=>!v)} aria-pressed={showEnglish}>{showEnglish?'Ocultar inglés':'Ayuda en inglés'}</button>}<button onClick={()=>setMotion(m=>!m)} aria-pressed={!motion}>{motion?a0Text("Pausar movimiento","Pause movement"):a0Text("Activar movimiento","Enable movement")}</button></div></header>
      <section className="cw-intro">
        <div><p className="cw-eyebrow">{machine?a0Text("EXPERIMENTO 01 · DECIDIR Y RECONSIDERAR","EXPERIMENT 01 · CHOOSE AND RECONSIDER"):a0Text("EXPERIMENTO 02 · IMAGINAR OTRA VIDA","EXPERIMENT 02 · IMAGINE ANOTHER LIFE")}</p><h1>{machine?<>La máquina que <em>elimina cosas</em> del mundo.</>:<>Tu vida con una <em>regla absurda.</em></>}</h1>{level==='A0'&&<p lang="en">{machine?'The machine that removes things from the world.':'Your life with an absurd rule.'}</p>}</div>
        <div className="cw-intro-copy"><p>{guide ? guide.introduction : a2?(machine?'Esta máquina puede borrar una cosa del mundo para siempre. Tú eliges qué se queda y qué desaparece.':'Mañana te despiertas en un mundo diferente. En cada ronda hay una regla nueva.'):machine?'Una empresa inventó una máquina capaz de eliminar para siempre una cosa del planeta. Tú decides qué desaparece.':'Mañana te despiertas y descubres que el mundo funciona distinto. Cada ronda cambia una ley del universo.'}</p><p className="cw-instruction">{level==='A0'?(machine?'Elige eliminar o conservar. Repite el modelo. / Choose remove or keep. Repeat the model.':'Lee la regla y elige una frase. / Read the rule and choose a phrase.'):a1?(machine?'Elige eliminar o conservar. Di una razón, mira qué pasa y elige otra vez.':'Lee la regla. Primero di si te gusta. Después cuenta tu día y elige qué hacer.'):machine?'Primero elige Sí o No. La tarjeta gira, aparece una pregunta y después puedes descubrir el giro.':'Lee la nueva regla, imagina la situación y abre las tres preguntas de una en una.'}</p><span className="cw-count">{level==='A0'?`${entries.length} ${machine?'decisiones / decisions':'reglas / rules'}`:machine?(a1?`${machineRounds.length} decisiones · una razón · una sorpresa`:'30 decisiones · 30 preguntas centrales · 30 giros'):'15 reglas inesperadas · 45 preguntas'}</span></div>
      </section>

      {(b2||a1||advanced)&&guide&&<section className="cw-b2-preparation" aria-labelledby="cw-prepare-title">
        <div className="cw-b2-warmup"><p className="cw-eyebrow">{a0Text("ANTES DEL EXPERIMENTO · 5 MIN","BEFORE THE EXPERIMENT · 5 MIN")}</p><h2 id="cw-prepare-title">{a0Text("Preparar la conversación","Prepare to speak")}</h2><p>{guide.warmup}</p></div>
        <details className="cw-b2-guide"><summary>{a0Text("Guía docente","Teacher guide")} <span>{a0Text("45 minutos","45 minutes")}</span></summary><p>{guide.objective}</p><ol>{guide.stages.map(stage=><li key={stage.time}><span>{stage.time}</span><div><strong>{stage.title}</strong><p>{stage.task}</p></div></li>)}</ol><p className="cw-b2-note">{guide.teacherNote}</p></details>
        {a1&&<BeginnerHelp a0={level==='A0'} frames={guide.moves}/>}
      </section>}

      <section id="cw-activity" className="cw-activity" aria-label={machine?a0Text("La máquina de decisiones","The decision machine"):a0Text("La regla del universo","The rule of the universe")}>
        <div className="cw-scene-column">
          <div className="cw-scene" onPointerMove={e=>{if(!motion||e.pointerType==='touch')return;const b=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--rx',`${(e.clientY-b.top)/b.height*3-1.5}deg`);e.currentTarget.style.setProperty('--ry',`${(e.clientX-b.left)/b.width*4-2}deg`);}} onPointerLeave={e=>{e.currentTarget.style.setProperty('--rx','0deg');e.currentTarget.style.setProperty('--ry','0deg');}}>
            <div className={`cw-panorama ${machine&&decision?.revealed?'cw-activated':''}`} key={`${mode}-${index}`}><img src={image} alt={machine?'Una máquina de titanio rodea un planeta flotante dentro de una cámara de cristal iluminada.':'Una ciudad imposible con edificios invertidos y un tranvía flotante bajo un cielo violeta.'} width="1672" height="941" fetchPriority="high"/><span className="cw-light-pass" aria-hidden="true"/></div>
            <div className="cw-scene-edge" aria-hidden="true"/>
          </div>
          <div className="cw-scene-caption"><span className="cw-caption-line"/><div><span>{machine?a0Text("CÁMARA DE ELIMINACIÓN","REMOVAL CHAMBER"):a0Text("UNIVERSO ALTERADO","CHANGED UNIVERSE")}</span><strong>{entry.title}</strong></div><b>{String(index+1).padStart(2,'0')}<small> / {entries.length}</small></b></div>
          <div className="cw-progress-meta"><span>{complete} {machine?a0Text("decisiones cerradas","completed decisions"):a0Text("reglas conversadas","discussed rules")}</span><b>{progress}%</b></div><div className="cw-progress" role="progressbar" aria-label={a0Text("Avance de la conversación","Conversation progress")} aria-valuenow={complete} aria-valuemin={0} aria-valuemax={entries.length}><i style={{width:`${progress}%`}}/></div>
          <p className="cw-fiction">{machine?a0Text("Los giros son situaciones inventadas para conversar, no predicciones. No hay respuestas correctas.","The twists are fictional speaking situations, not predictions. There are no correct answers."):a0Text("Puedes cambiar de opinión, saltarte una regla o quedarte conversando. No hay respuestas correctas.","You can change your mind, skip a rule or keep talking. There are no correct answers.")}</p>
        </div>

        <div className="cw-conversation-column">
          <div className="cw-round-bar"><span>{entry.group}</span><button onClick={resetRound}>{a0Text("Reiniciar ronda","Restart round")}</button></div>
          {machine ? <div className={`cw-flip ${decision?'cw-flipped':''}`} key={entry.id}>
            <div className="cw-flip-inner">
              <article className="cw-card cw-front" aria-hidden={!!decision} inert={!!decision}>
                <div className="cw-card-top"><span>{a0Text("ANTES DE APRETAR EL BOTÓN","BEFORE PRESSING THE BUTTON")}</span><span>{String(index+1).padStart(2,'0')}</span></div>
                <h2>{item.title}</h2><p className="cw-context">{item.intro}</p><div className="cw-decision-prompt">{a1?a0Text("¿Lo eliminas o no?","Do you remove it or keep it?"):b2||advanced?'¿Eliminarías esto del mundo?':'¿Lo eliminas para siempre?'}</div>
                <div className="cw-choices"><button className="cw-yes" onClick={()=>choose('yes')}><b>{a0Text("SÍ","YES")}</b><span>{level==='A0'?'Eliminar / Remove':'Eliminar'}</span></button><button className="cw-no" onClick={()=>choose('no')}><b>{a0Text("NO","NO")}</b><span>{level==='A0'?'Conservar / Keep':'Conservar'}</span></button></div>
                <p className="cw-card-note">{a0Text("Elige primero. La pregunta está del otro lado.","Choose first. The question is on the other side.")}</p>
              </article>
              <article className="cw-card cw-back-face" aria-hidden={!decision} inert={!decision}>
                {decision&&<><div className="cw-card-top"><span>{a0Text("TU PRIMERA DECISIÓN","YOUR FIRST DECISION")}</span><span className={`cw-choice-pill cw-choice-${decision.first}`}>{decision.first==='yes'?a0Text("ELIMINAR","REMOVE"):a0Text("CONSERVAR","KEEP")}</span></div><h2 className="cw-item-heading">{item.title}</h2><p className="cw-eyebrow">{a0Text("AHORA, CONVERSEMOS","NOW, LET’S TALK")}</p><h3 className="cw-question" ref={questionRef} tabIndex={-1}>{item.question}</h3>{a2&&showEnglish&&<p className="cw-translation" lang="en">{item.questionEn}</p>}<>{a1?<BeginnerHelp a0={level==='A0'} frames={item.answerFrames??[item.starter]} words={item.words}/>:<TalkHelp words={item.words} starter={item.starter}/>}</>{advanced&&item.depthPrompt&&<p className="cw-c1-depth">{item.depthPrompt}</p>}{b2&&item.followUp&&<details className="cw-help cw-b2-followup"><summary>Profundizar la conversación <span aria-hidden="true">+</span></summary><div><p>{item.followUp}</p></div></details>}
                {!decision.revealed?<button className="cw-primary cw-reveal" onClick={reveal}>{a1||a2?a0Text("¿Qué pasa después?","What happens next?"):'Descubrir la consecuencia'} <span aria-hidden="true">↗</span></button>:<section className="cw-consequence"><p className="cw-eyebrow">{a0Text("GIRO · SI DESAPARECE…","TWIST · IF IT DISAPPEARS…")}</p><p>{item.consequence}</p>{b2&&<div className="cw-b2-counterpoint"><p className="cw-eyebrow">OTRA VOZ</p><p>{item.counterpoint}</p><p className="cw-b2-revision">{item.revision}</p></div>}{advanced&&<div className="cw-c1-reinterpretation"><p className="cw-eyebrow">REPENSAR LA PROPUESTA</p><p>{item.reinterpretation}</p>{item.teacherChallenge&&<details className="cw-help"><summary>Desafío docente <span aria-hidden="true">+</span></summary><div><p>{item.teacherChallenge}</p></div></details>}</div>}{c2?c2MachineReframe({item,decision,update:updateC2Decision,vote:voteC2}):<><h4>{c1?'¿Qué parte de tu decisión mantienes?':a1?a0Text("¿Cambias de idea?","Do you change your mind?"):b2?'Después de escuchar la objeción…':a2?'¿Piensas lo mismo ahora?':'¿Sigues manteniendo tu decisión?'}</h4><div className="cw-final-choices"><button onClick={()=>decideFinal(false)} aria-pressed={decision.final===decision.first}>{a1?a0Text("No cambio de idea","I do not change my mind"):a2?'Sí, pienso lo mismo':'Mantengo mi decisión'}</button><button onClick={()=>decideFinal(true)} aria-pressed={!!decision.final&&decision.final!==decision.first}>{a1?a0Text("Cambio de idea","I change my mind"):a2?'No, cambio de idea':'Cambio de opinión'}</button></div>{decision.final&&<p className="cw-verdict">{a0Text("Decisión final: ","Final decision: ")}<strong>{decision.final==='yes'?a0Text("eliminar","remove"):a0Text("conservar","keep")}</strong>. {c1?'Precisa qué eliminarías, qué función conservarías y qué excepción exige tu argumento.':level==='A0'?'Di: Cambio. / Say: I change. O: No cambio. / Or: I do not change.':a1?'Ahora elijo… porque…':b2?'Explica qué argumento aceptas, qué mantienes y bajo qué condición revisarías tu postura.':a2?'Cuenta por qué.':'Cuenta qué pesó más para ti.'}</p>}</>}</section>}</>}
              </article>
            </div>
          </div> : <article className="cw-card cw-rule-card" key={entry.id}>
            <div className="cw-card-top"><span>{a0Text("NUEVA LEY DEL UNIVERSO","NEW RULE OF THE UNIVERSE")}</span><span>{a0Text("REGLA","RULE")} {String(index+1).padStart(2,'0')}</span></div><h2>{rule.title}</h2><p className="cw-law">{rule.law}</p>{a2&&showEnglish&&<p className="cw-translation" lang="en">{rule.lawEn}</p>}<div className="cw-scene-situation"><span>{b2||advanced?'IMAGINA ESTA SITUACIÓN':a0Text("IMAGINA ESTO","IMAGINE THIS")}</span><p>{rule.scene}</p></div>
            {questionNumber<0?<button className="cw-primary" onClick={()=>openQuestion(0)}>{a0Text("Abrir la primera pregunta","Open the first question")} <span aria-hidden="true">↗</span></button>:<div className="cw-rule-question" key={Math.min(questionNumber,2)}><div className="cw-question-steps" aria-label={a0Text("Preguntas de esta regla","Questions about this rule")}>{rule.questions.map((_,n)=><button key={n} onClick={()=>openQuestion(n)} disabled={advanced&&n>(saved.opened[entry.id]??-1)} aria-current={Math.min(questionNumber,2)===n?'step':undefined}>{n+1}<span>{(c2?['La letra','Otra lectura','Poner a prueba']:c1?['La intención','El truco','La nueva costumbre']:a1?[a0Text("Mi reacción","My reaction"),a0Text("Mi día","My day"),a0Text("Mi elección","My choice")]:b2?['En la práctica','Otra perspectiva','Revisar la ley']:a2?['Primera','Segunda','Tercera']:['Tu vida','Los demás','Un paso más'])[n]}</span></button>)}</div>{advanced&&questionNumber>0&&<section className="cw-c1-development" aria-label="La ciudad cambia">{rule.developments?.slice(0,Math.min(questionNumber,2)).map((development,n)=><div key={development}><p className="cw-eyebrow">{c2?(n===0?'UNA INTERPRETACIÓN EN LA CALLE':'OTRO CASO PONE A PRUEBA LA LEY'):n===0?'AL CABO DE UN MES':'UN AÑO DESPUÉS'}</p><p>{development}</p></div>)}</section>}<h3 id="cw-rule-question-title" className="cw-question" tabIndex={-1}>{rule.questions[Math.min(questionNumber,2)]}</h3>{a2&&showEnglish&&<p className="cw-translation" lang="en">{rule.questionsEn?.[Math.min(questionNumber,2)]}</p>}<>{a1?<BeginnerHelp a0={level==='A0'} frames={rule.questionFrames?.[Math.min(questionNumber,2)]??[rule.starter]} words={rule.words}/>:<TalkHelp words={rule.words} starter={rule.starter}/>}</>{(b2||advanced)&&questionNumber>=2&&rule.teacherFollowUp&&<details className="cw-help cw-b2-followup"><summary>Repregunta docente <span aria-hidden="true">+</span></summary><div><p>{rule.teacherFollowUp}</p></div></details>}{questionNumber<2?<button className="cw-primary" onClick={()=>openQuestion(questionNumber+1)}>{a0Text("Siguiente pregunta","Next question")} <span aria-hidden="true">→</span></button>:questionNumber===2?<button className="cw-primary" onClick={()=>openQuestion(3)}>{a0Text("Terminamos esta regla","We have finished this rule")} <span aria-hidden="true">✓</span></button>:<p className="cw-verdict">{c2?'Regla conversada. Ya puedes revisar su redacción y probar dos casos límite en el cierre.':c1?'Regla conversada. Explica qué cambió entre la intención y la costumbre; ya puedes incluirla en tu ciudad final.':b2?'Regla conversada. Resume la versión que defenderías y la objeción que aún queda por resolver.':a0Text("Regla conversada. Elige otro universo cuando quieras.","Rule discussed. Choose another universe whenever you like.")}</p>}</div>}
          </article>}
          <nav className="cw-next" aria-label={a0Text("Cambiar de ronda","Change round")}><button disabled={index===0} onClick={()=>go(index-1)}>{a0Text("← Anterior","← Previous")}</button><span>{index+1} {a0Text("de","of")} {entries.length}</span><button disabled={index===entries.length-1} onClick={()=>go(index+1)}>{machine?a0Text("Otra decisión","Another decision"):a0Text("Otra regla","Another rule")} →</button></nav>
          <p className="cw-status" role="status" aria-live="polite">{(notice?(level==='A0'?`${notice} / ${a0NoticeEnglish(notice)}`:notice):'')||a0Text("Puedes elegir cualquier ronda en el panel de abajo.","You can choose any round in the panel below.")}</p>
        </div>
      </section>

      <section className="cw-rounds" aria-labelledby="cw-rounds-title"><div className="cw-section-heading"><div><p className="cw-eyebrow">{a0Text("ELIGE POR DÓNDE SEGUIR","CHOOSE WHERE TO GO NEXT")}</p><h2 id="cw-rounds-title">{machine?(a1?a0Text("Cosas de todos los días. Tú eliges.","Everyday things. You choose."):'Treinta cosas. Ninguna decisión simple.'):a0Text("Una vida distinta en cada ronda.","A different life in each round.")}</h2></div><span>{machine?a0Text("No hace falta hacerlas todas hoy.","You do not have to finish them all today."):a0Text("Puedes abrir las reglas en cualquier orden.","You can open the rules in any order.")}</span></div>
        <div className="cw-groups" aria-label={a0Text("Filtrar rondas","Filter rounds")}>{groups.map(g=><button key={g} aria-pressed={group===g} onClick={()=>setGroup(g)}>{g==='Todas'?a0Text("Todas","All"):g}</button>)}</div>
        <div className="cw-round-grid">{entries.map((e,n)=>{if(group!=='Todas'&&group!==e.group)return null;const done=machine?(c2?completedC2Decision(saved.decisions[e.id]):Boolean(saved.decisions[e.id]?.final)):saved.opened[e.id]===3;return <button key={e.id} className={`cw-round-tile ${n===index?'cw-current':''} ${done?'cw-done':''}`} onClick={()=>go(n)} aria-current={n===index?'step':undefined} style={{'--tile-delay':`${n%10*35}ms`} as CSSProperties}><span className="cw-tile-meta">{String(n+1).padStart(2,'0')}<i>{done?a0Text("Conversada","Discussed"):n===index?a0Text("En curso","In progress"):''}</i></span><strong>{e.title}</strong><span className="cw-tile-bottom">{machine?a0Text("Decidir","Decide"):a0Text("Explorar regla","Explore the rule")} <b aria-hidden="true">↗</b></span></button>;})}</div>
      </section>

      {c2&&guide ? c2Closing({machine,rounds:machineRounds,rules:ruleRounds,decisions:saved.decisions,opened:saved.opened,guide,closing,finale:c2Finale,update:updateC2Finale,open:value=>{setC2Finale(s=>({...s,open:value}));if(!value)document.getElementById('cw-c2-closing-title')?.focus({preventScroll:true});},go}) : c1&&guide ? <>
        <section className="cw-b2-workshop" aria-label="Recursos para precisar"><details className="cw-help"><summary>Apoyo para matizar y reformular <span aria-hidden="true">+</span></summary><div><ul>{guide.moves.map(move=><li key={move}>{move}</li>)}</ul></div></details><details className="cw-help"><summary>Una objeción que pone a prueba tu criterio <span aria-hidden="true">+</span></summary><div><p>{guide.challenge}</p></div></details></section>
        <section className="cw-c1-closing" aria-labelledby="cw-c1-closing-title">
          <p className="cw-eyebrow">{a0Text("PARA TERMINAR · 10 MIN","TO FINISH · 10 MIN")}</p><h2 id="cw-c1-closing-title">{guide.closingTitle}</h2><p>{guide.closingTask}</p>
          {finale.open&&finaleReady ? <div className="cw-c1-board" role="region" aria-label="Mi síntesis oral">
            <h3>{machine?'Mi principio, puesto a prueba':'La ciudad que propongo'}</h3>
            {machine ? <><ul>{selectedDecisions.map(round=>{const vote=saved.decisions[round.id];return <li key={round.id}><strong>{round.title}</strong><p>{vote.first==='yes'?a0Text("eliminar","remove"):a0Text("conservar","keep")} → {vote.final==='yes'?a0Text("eliminar","remove"):a0Text("conservar","keep")}</p><p>{round.consequence}</p></li>;})}</ul><dl><dt>Principio general</dt><dd>{finale.principle}</dd><dt>Excepción y límite</dt><dd>{finale.exception}</dd><dt>Un sustituto peor que evitar</dt><dd>{finale.substitute}</dd></dl></> : <><ul>{selectedRules.map(({key,label,rule:chosen})=>chosen&&<li key={key}><strong>{label}: {chosen.title}</strong><p>{chosen.law}</p></li>)}</ul><dl><dt>El efecto que hace fallar la regla descartada</dt><dd>{finale.effect}</dd><dt>Mi nueva redacción</dt><dd>{finale.rewrite}</dd></dl></>}
            <ol>{closing.map(prompt=><li key={prompt}>{prompt}</li>)}</ol><button className="cw-primary" onClick={()=>setFinale(s=>({...s,open:false}))}>Revisar mi síntesis</button>
          </div> : <>
            <p className="cw-c1-selection-status" role="status">{machine?`Decisiones seleccionadas: ${selectedDecisions.length} de 3. Cierra al menos tres rondas para construir tu principio.`:'Conversa las tres preguntas de al menos tres reglas. Asigna una regla distinta a cada papel.'}</p>
            {machine ? <div className="cw-c1-picks" aria-label="Seleccionar decisiones cerradas">{completedDecisions.map(round=>{const vote=saved.decisions[round.id];const selected=finale.selected.includes(round.id);return <button key={round.id} aria-pressed={selected} disabled={!selected&&selectedDecisions.length===3} onClick={()=>selectDecision(round.id)}><span>Seleccionar: {round.title}</span><small>{vote.first==='yes'?a0Text("eliminar","remove"):a0Text("conservar","keep")} → {vote.final==='yes'?a0Text("eliminar","remove"):a0Text("conservar","keep")}</small></button>;})}</div> : <div className="cw-c1-fields">{ruleRoles.map(({key,label})=><label key={key} htmlFor={`cw-c1-${key}`}><span>{label}</span><select id={`cw-c1-${key}`} value={completedRules.some(round=>round.id===finale[key])?finale[key]:''} onChange={event=>updateFinale(key,event.target.value)}><option value="">Elige una regla conversada</option>{completedRules.map(round=><option key={round.id} value={round.id} disabled={ruleRoles.some(role=>role.key!==key&&finale[role.key]===round.id)}>{round.title}</option>)}</select></label>)}</div>}
            <p className="cw-c1-note">Anota ideas breves para apoyar tu explicación oral. Puedes revisarlas después de escuchar la objeción.</p>
            <div className="cw-c1-fields">
              {(machine?[{key:'principle',label:'Principio general: ¿cuándo mejora algo eliminarlo?'},{key:'exception',label:'Excepción: ¿qué dependencia obliga a limitar tu principio?'},{key:'substitute',label:'Sustituto peor: ¿qué impedirías y cómo?'}] as const:[{key:'effect',label:'¿Qué efecto inesperado hace fallar la regla que descartas?'},{key:'rewrite',label:'Reescribe la regla que modificarías: quién, cuándo y con qué excepción.'}] as const).map(({key,label})=><label key={key} htmlFor={`cw-c1-${key}`}><span>{label}</span><textarea id={`cw-c1-${key}`} rows={3} value={finale[key]} onChange={event=>updateFinale(key,event.target.value)}/></label>)}
            </div>
            <button className="cw-primary" disabled={!finaleReady} onClick={()=>{if(finaleReady)setFinale(s=>({...s,open:true}));}}>Abrir mi síntesis</button>
          </>}
        </section>
      </> : a1&&guide ? <section className="cw-a1-closing" aria-labelledby="cw-a1-closing-title">
        <p className="cw-eyebrow">{a0Text("PARA TERMINAR · 10 MIN","TO FINISH · 10 MIN")}</p><h2 id="cw-a1-closing-title">{guide.closingTitle}</h2><p>{guide.closingTask}</p>
        <div className="cw-a1-recap"><h3>{machine?a0Text("Tus decisiones de hoy","Your decisions today"):a0Text("Las reglas que conversamos","The rules we discussed")}</h3>
          {machine ? <>{machineRounds.some(round=>saved.decisions[round.id]?.final)?<ul>{machineRounds.filter(round=>saved.decisions[round.id]?.final).map(round=>{const vote=saved.decisions[round.id];return <li key={round.id}><strong>{round.title}</strong>: {vote.first==='yes'?a0Text("eliminar","remove"):a0Text("conservar","keep")} → {vote.final==='yes'?a0Text("eliminar","remove"):a0Text("conservar","keep")}{vote.first!==vote.final?a0Text(' · Cambio de idea','Changed my mind'):''}</li>;})}</ul>:<p>{a0Text("Elige algunas cosas y mira qué pasa. Aquí aparecen tus decisiones.","Choose some things and see what happens. Your decisions appear here.")}</p>}</> : <>{ruleRounds.some(round=>saved.opened[round.id]===3)?<ul>{ruleRounds.filter(round=>saved.opened[round.id]===3).map(round=><li key={round.id}>{round.title}</li>)}</ul>:<p>{a0Text("Conversen las tres preguntas de una regla. Aquí aparecen sus reglas.","Answer the three questions about a rule. Your rules appear here.")}</p>}</>}
        </div><ol>{closing.map(question=><li key={question}>{question}</li>)}</ol>
        <BeginnerHelp a0={level==='A0'} frames={level==='A0'?['Quiero agua. / I want water.','Me gusta. / I like it.','¿Y tú? / And you?']:machine?['Porque me gusta…','Lo necesito para…','Sin esto, no puedo…']:['En mi ciudad, todos…','En… no podemos…','Con esta regla, voy a…']}/>
      </section> : b2&&guide ? <>
        <section className="cw-b2-workshop" aria-label="Recursos para argumentar"><details className="cw-help"><summary>Recursos para matizar y negociar <span aria-hidden="true">+</span></summary><div><ul>{guide.moves.map(move=><li key={move}>{move}</li>)}</ul></div></details><details className="cw-help"><summary>Desafío oral · Cambiar de perspectiva <span aria-hidden="true">+</span></summary><div><p>{guide.challenge}</p></div></details></section>
        <details className="cw-b2-closing"><summary>{guide.closingTitle}<span>10 min</span></summary><p>{guide.closingTask}</p><ol>{closing.map(question=><li key={question}>{question}</li>)}</ol></details>
      </> : <ConversationClosing questions={closing} /> }
      <footer className="cw-footer"><p>{a0Text("Conversación libre","Free conversation")} · {level==='A0'?'Español / Spanish':advanced?'Español':'Español rioplatense'} · {a0Text("Nivel","Level")} {level}</p><div><button onClick={()=>{setSaved(empty());setNotice('Nueva conversación. Empezamos de cero.');setGroup('Todas');setFinale(emptyFinale());setC2Finale(emptyC2Finale());setRuleCursor({});}}>{a0Text("Nueva conversación","New conversation")}</button><a href={(machine?'/tu-vida-con-una-regla-absurda':'/la-maquina-que-elimina-cosas')+`?level=${level}`}>{machine?a0Text("Ir a Tu vida con una regla absurda","Go to Your life with an absurd rule"):a0Text("Ir a La máquina que elimina cosas","Go to The machine that removes things")} →</a></div></footer>
    </div>
  </main>;
}
