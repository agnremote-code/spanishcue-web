"use client";

import Link from "next/link";
import {createContext,useContext,useEffect,useRef,useState} from "react";
import "./style.css";
import {connectors,Pair,reactions,slang,starters,surprises,worlds} from "./data";
import {practice,questionHelp,registerNotes} from "./practice-data";
import {ArgentoPractice,PracticeMode} from "./ArgentoPractice";

const TranslationContext=createContext(false);
const PairCard=({pair,small=false,register=false}:{pair:Pair;small?:boolean;register?:boolean})=>{
  const translations=useContext(TranslationContext);
  const note=registerNotes[pair[0].toLocaleLowerCase().replace(/[¿?.]/g,"")];
  return <div className={small?"argento-pair small":"argento-pair"}><b>{pair[0]}</b>{translations&&pair[1]&&<span>{pair[1]}</span>}{note&&(register||pair[0]==="¿Posta?")&&<p className="argento-register"><strong>{note.register} · {note.mode==="receptivo"?"para comprender":"uso en contexto"}</strong><br/>{note.context}<br/><b>Alternativa: {note.neutral}</b></p>}</div>;
};

export default function Argento(){
  const [translations,setTranslations]=useState(false);
  const [mode,setMode]=useState<PracticeMode>("explore");
  const [activeId,setActiveId]=useState("mate");
  const [wordPage,setWordPage]=useState(0);
  const [questionPage,setQuestionPage]=useState(0);
  const [roleTab,setRoleTab]=useState<"model"|"turn">("model");
  const [modal,setModal]=useState<"help"|"surprise"|null>(null);
  const [surpriseIndex,setSurpriseIndex]=useState(0);
  const [progress,setProgress]=useState<number[]>([]);
  const practiceRef=useRef<HTMLElement|null>(null);
  const modalRef=useRef<HTMLElement|null>(null);
  const modalCloseRef=useRef<HTMLButtonElement|null>(null);
  const modalReturnFocusRef=useRef<HTMLElement|null>(null);
  const world=worlds.find(item=>item.id===activeId)!;
  const openModal=(kind:"help"|"surprise")=>{modalReturnFocusRef.current=document.activeElement as HTMLElement|null;setModal(kind)};
  const closeModal=()=>{setModal(null);requestAnimationFrame(()=>modalReturnFocusRef.current?.focus())};
  const chooseWorld=(id:string)=>{setMode("explore");setModal(null);setActiveId(id);setWordPage(0);setQuestionPage(0);setRoleTab("model");requestAnimationFrame(()=>practiceRef.current?.scrollIntoView({behavior:"smooth",block:"start"}))};
  const showSurprise=()=>{setSurpriseIndex(index=>(index+1+Math.floor(Math.random()*(surprises.length-1)))%surprises.length);if(!modal)openModal("surprise")};
  const visibleWords=world.words.slice(wordPage*10,wordPage*10+10);
  const visibleQuestions=world.subs.slice(questionPage*3,questionPage*3+3);
  const roleLines:Pair[]=world.id==="cafe"?[["Profesor: Hola, ¿qué querés tomar?","Teacher: Hi, what would you like to drink?"],["Alumno: Para mí, un café con leche, por favor.","Student: For me, a coffee with milk, please."],["Profesor: ¿Grande o chico?","Teacher: Large or small?"],["Alumno: Chico. Y una medialuna también.","Student: Small. And a croissant too."]]:[["Profesor: Che, ¿vamos a tomar algo?","Teacher: Hey, shall we go for a drink?"],["Alumno: Dale. ¿Adónde vamos?","Student: Sure. Where are we going?"],["Profesor: Hay un bar nuevo. Está recopado.","Teacher: There is a new bar. It is really cool."],["Alumno: ¿Posta? Buenísimo.","Student: Really? Great."]];
  const progressItems=[["🎤 Hablé.","I spoke."],["💬 Agregué una idea.","I added an idea."],["🔁 Seguí hablando.","I kept talking."],["🔥 Me animé.","I took a risk."]];
  useEffect(()=>{
    if(!modal)return;
    const dialog=modalRef.current;
    if(!dialog)return;
    const previousOverflow=document.body.style.overflow;
    document.body.style.overflow="hidden";
    modalCloseRef.current?.focus();
    const focusable=()=>Array.from(dialog.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'));
    const onKey=(event:KeyboardEvent)=>{
      if(event.key==="Escape"){event.preventDefault();closeModal();return}
      if(event.key!=="Tab")return;
      const items=focusable();
      if(!items.length)return;
      const first=items[0],last=items[items.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
    };
    window.addEventListener("keydown",onKey);
    return()=>{document.body.style.overflow=previousOverflow;window.removeEventListener("keydown",onKey)};
  },[modal]);
  return <TranslationContext.Provider value={translations}><main className="argento-shell" id="main-content">
    <a className="skip-link" href="#mundos">Saltar al contenido</a>
    <header className="argento-hero">
      <nav><Link href="/" className="argento-brand"><img src="/brand/mascot/portrait.webp" alt=""/><span><b>SPANISHCUE</b><small>A1 · VOCABULARIO</small></span></Link><Link href="/" className="argento-library">← Biblioteca</Link></nav>
      <div className="argento-hero-copy"><span>🇦🇷 ESPAÑOL ARGENTINO</span><h1>ARGENTO</h1><p>Habla español desde el primer día.{translations&&<small>Speak Spanish from Day One.</small>}</p><blockquote>Tu trabajo no es ser perfecto. Tu trabajo es comunicar.{translations&&<small>Your job is not to be perfect. Your job is to communicate.</small>}</blockquote><a href="#mundos">EMPEZAR ↓</a></div>
    </header>

    <section className="argento-guide"><button data-action="translations" aria-pressed={translations} onClick={()=>setTranslations(value=>!value)}>{translations?"Ocultar traducciones":"Mostrar traducciones"}</button><details><summary>Ruta docente · unos 45 minutos</summary><p>Entrada (4 min): elige una bebida y una persona con quien hablar. Mate (9): tres frases, contexto y recuperación. Café (9): pedido, contexto y recuperación. Argento (6): relación, tono y alternativas neutras. Retornos (7): después de una respuesta en otro mundo, recupera las frases en situaciones nuevas. Cierre (10): resuelve un intercambio de dos o más turnos, cambia de rol y comenta una combinación útil.</p><p>A1 con ayuda docente: frases cortas, modelos opcionales y voseo de uso argentino. No todas las expresiones son exclusivas de Argentina. Las comparaciones largas y los otros nueve mundos son ampliación opcional; no se trabajan los 144 elementos en una sola clase. Esta duración es una estimación.</p><p>La persona docente acepta alternativas naturales y ajusta la ayuda. «Boludo», «ni en pedo» y «quilombo» se trabajan para comprenderlos; nunca hace falta producirlos. Si un retorno necesita ayuda, ocúltala y pide una nueva frase.</p></details></section>
    <section id="mundos" className="argento-worlds"><header><div><span>12 MUNDOS PARA HABLAR</span><h2>Elige tu Argentina.</h2>{translations&&<small>Choose your Argentina.</small>}</div><p>Elige un mundo, comprende tres frases y úsalas sin mirar. Vuelve a ellas después de una tarea en otro mundo.</p></header><div className="world-grid">{worlds.map(item=><button key={item.id} className={item.id===activeId?"active":""} aria-pressed={item.id===activeId} onClick={()=>chooseWorld(item.id)} style={{backgroundImage:`linear-gradient(0deg,rgba(4,18,35,.95),rgba(4,18,35,.08)),url(${item.photo})`}}><span>{item.icon}</span><b>{item.title}</b><small>{translations?item.kicker:item.kicker.split(" · ")[0]}</small></button>)}</div></section>

    <section ref={practiceRef} className="argento-practice">
      <article className="world-dashboard">
        <header className="world-hero"><div style={{backgroundImage:`url(${world.photo})`}}/><section><small>{translations?world.kicker:world.kicker.split(" · ")[0]}</small><h2>{world.icon} {world.title}</h2><p>{world.q[0]}</p>{translations&&<span>{world.q[1]}</span>}</section></header>
        <div className="world-body">
          <ArgentoPractice worldId={world.id} mode={mode} setMode={next=>{setMode(next);setModal(null)}} onReset={()=>{setProgress([]);setWordPage(0);setQuestionPage(0);setRoleTab("model");setModal(null)}}/>
          {mode==="explore"&&<details key={world.id} className="argento-bank"><summary>Banco opcional · palabras, preguntas y modelos</summary>
          <div className="tools-title"><span>RECURSOS PARA HABLAR</span><b>🎤 AHORA HABLA</b></div>
          <div className="tools-grid">
            <section className="tool-card"><h3>PALABRAS</h3><div className="pair-grid">{visibleWords.map(pair=><PairCard key={pair[0]} pair={pair} register/>)}</div><button className="pager" onClick={()=>setWordPage(page=>page===0?1:0)}>{wordPage===0?"MÁS PALABRAS →":"← PRIMERAS PALABRAS"}</button></section>
            <section className="tool-card start-card"><h3>EMPIEZA ASÍ</h3>{starters.map(pair=><PairCard key={pair[0]} pair={pair} small/>)}</section>
            <section className="tool-card"><h3>SIGUE</h3><div className="pair-grid">{connectors.map(pair=><PairCard key={pair[0]} pair={pair}/>)}</div></section>
          </div>

          <section className="quick-reactions"><h3>REACCIONA</h3><div className="pair-grid">{reactions.map(pair=><PairCard key={pair[0]} pair={pair}/>)}</div></section>

          <section className="follow-panel"><header><h3>SEGUIMOS</h3><div><button className="pager" disabled={questionPage===0} onClick={()=>setQuestionPage(page=>Math.max(0,page-1))}>← ANTERIORES</button><button className="pager" disabled={(questionPage+1)*3>=world.subs.length} onClick={()=>setQuestionPage(page=>page+1)}>MÁS PREGUNTAS →</button></div></header><div className="question-grid">{visibleQuestions.map((pair,index)=>{const n=questionPage*3+index;return <article key={pair[0]}><b>{n+1}. {pair[0]}</b>{translations&&<span>{pair[1]}</span>}<details><summary>Ayuda para responder</summary><PairCard pair={questionHelp[world.id][n]} small/></details></article>})}</div></section>

          <div className="talk-more"><section><b>🎤 AHORA HABLA</b><p>Di una idea. Después agrega una cosa más.</p>{translations&&<small>Say one idea. Then add one more thing.</small>}</section><section><h3>+ UNA COSA MÁS</h3><b>{world.extra[0]}</b>{translations&&<span>{world.extra[1]}</span>}<PairCard pair={["Para mí… porque…","For me… because…"]} small/></section></div>

          {world.id==="argento"&&<section className="slang-section"><h3>ARGENTO · EXPRESIONES EN CONTEXTO</h3><div>{slang.map(item=><article key={item[0]}><h4>{item[0]}</h4>{translations&&<b>{item[1]}</b>}<p><strong>Ejemplo:</strong> {item[2]}{translations&&<small>{item[3]}</small>}</p><p><strong>Cuándo:</strong> {item[4]}{translations&&<small>{item[5]}</small>}</p><p className="argento-register"><strong>{registerNotes[item[0]].register}</strong> · {registerNotes[item[0]].context}<br/><b>Alternativa: {registerNotes[item[0]].neutral}</b></p></article>)}</div></section>}

          {(world.id==="cafe"||world.id==="argento")&&<section className="roleplay"><div className="role-tabs" role="tablist" aria-label="Práctica guiada · Guided practice"><button role="tab" aria-selected={roleTab==="model"} aria-controls="argento-role-panel" className={roleTab==="model"?"active":""} onClick={()=>setRoleTab("model")}>🎬 MODELO</button><button role="tab" aria-selected={roleTab==="turn"} aria-controls="argento-role-panel" className={roleTab==="turn"?"active":""} onClick={()=>setRoleTab("turn")}>🎤 TU TURNO</button></div><div id="argento-role-panel" role="tabpanel">{roleTab==="model"?<>{roleLines.map(pair=><PairCard key={pair[0]} pair={pair}/>)}</>:<><PairCard pair={roleLines[0]}/><div className="pair-grid">{(world.id==="argento"?practice.argento.chunks.map(item=>[item.model,""] as Pair):world.words.slice(0,6)).map(pair=><PairCard key={pair[0]} pair={pair}/>)}</div><section className="your-turn"><b>🎤 AHORA HABLA</b><p>Elige una expresión y responde con una idea. También puedes usar una alternativa neutra.</p></section></>}</div></section>}
          </details>}
        </div>
      </article>

      <section className="speaking-progress"><h2>Comunicar es ganar.</h2>{translations&&<span>Communication is the win.</span>}<p>Marca lo que comunicaste hoy. Celebramos valentía, ideas y conexión, no perfección gramatical.{translations&&<small>Mark what you communicated today. These are self-reports, not an automatic assessment.</small>}</p><div>{progressItems.map((item,index)=><button key={item[0]} className={progress.includes(index)?"active":""} aria-pressed={progress.includes(index)} onClick={()=>setProgress(items=>items.includes(index)?items.filter(x=>x!==index):[...items,index])}>{item[0]} {translations&&<span>/ {item[1]}</span>}</button>)}</div></section>
    </section>

    <footer>No hace falta español perfecto. Vamos, habla.{translations&&<span>No perfect Spanish required. Come on, speak. 🇦🇷</span>}</footer>
    {mode==="explore"&&<div className="argento-floating"><button onClick={showSurprise}>🎲 SORPRÉNDEME</button><button onClick={()=>openModal("help")}>🛟 AYÚDAME A HABLAR</button></div>}

    {modal&&<div className="argento-modal" onMouseDown={closeModal}><section ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="argento-modal-title" onMouseDown={event=>event.stopPropagation()}>{modal==="help"?<><button ref={modalCloseRef} className="modal-close" aria-label="Cerrar · Close" onClick={closeModal}>×</button><h2 id="argento-modal-title">🛟 AYÚDAME A HABLAR</h2>{translations&&<span>HELP ME TALK</span>}<div className="help-grid"><article><h3>OPINIÓN</h3>{starters.slice(0,4).map(pair=><PairCard key={pair[0]} pair={pair}/>)}</article><article><h3>TIEMPO PARA PENSAR</h3>{([["A ver…","Let me see…"],["Mmm…","Hmm…"],["No sé.","I do not know."],["Creo que…","I think…"]] as Pair[]).map(pair=><PairCard key={pair[0]} pair={pair}/>)}</article><article><h3>SIGUE</h3>{connectors.slice(0,4).map(pair=><PairCard key={pair[0]} pair={pair}/>)}</article><article><h3>REACCIONA</h3>{reactions.slice(5).map(pair=><PairCard key={pair[0]} pair={pair}/>)}</article></div></>:<><button ref={modalCloseRef} className="modal-close" aria-label="Cerrar · Close" onClick={closeModal}>×</button><h2 id="argento-modal-title">🎲 SORPRÉNDEME</h2>{translations&&<span>SURPRISE ME</span>}<div className="surprise-content"><h3>{surprises[surpriseIndex].q[0]}</h3>{translations&&<p>{surprises[surpriseIndex].q[1]}</p>}<div className="pair-grid">{surprises[surpriseIndex].helps.map(pair=><PairCard key={pair[0]} pair={pair}/>)}</div><section className="your-turn"><b>🎤 AHORA HABLA</b><p>Di una idea y agrega una cosa más.</p></section><button className="another" onClick={showSurprise}>Otra sorpresa</button></div></>}</section></div>}
  </main></TranslationContext.Provider>;
}
