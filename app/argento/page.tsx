"use client";

import {useRef,useState} from "react";
import "./style.css";
import {connectors,Pair,reactions,slang,starters,surprises,worlds} from "./data";

const PairCard=({pair,small=false}:{pair:Pair;small?:boolean})=><div className={small?"argento-pair small":"argento-pair"}><b>{pair[0]}</b><span>{pair[1]}</span></div>;

export default function Argento(){
  const [activeId,setActiveId]=useState("mate");
  const [wordPage,setWordPage]=useState(0);
  const [questionPage,setQuestionPage]=useState(0);
  const [roleTab,setRoleTab]=useState<"model"|"turn">("model");
  const [modal,setModal]=useState<"help"|"surprise"|null>(null);
  const [surpriseIndex,setSurpriseIndex]=useState(0);
  const [progress,setProgress]=useState<number[]>([]);
  const practiceRef=useRef<HTMLElement|null>(null);
  const world=worlds.find(item=>item.id===activeId)!;
  const chooseWorld=(id:string)=>{setActiveId(id);setWordPage(0);setQuestionPage(0);setRoleTab("model");requestAnimationFrame(()=>practiceRef.current?.scrollIntoView({behavior:"smooth",block:"start"}))};
  const showSurprise=()=>{setSurpriseIndex(index=>(index+1+Math.floor(Math.random()*(surprises.length-1)))%surprises.length);setModal("surprise")};
  const visibleWords=world.words.slice(wordPage*10,wordPage*10+10);
  const visibleQuestions=world.subs.slice(questionPage*3,questionPage*3+3);
  const roleLines:Pair[]=world.id==="cafe"?[["Profesor: Hola, ¿qué querés tomar?","Teacher: Hi, what would you like to drink?"],["Alumno: Para mí, un café con leche, por favor.","Student: For me, a coffee with milk, please."],["Profesor: ¿Grande o chico?","Teacher: Large or small?"],["Alumno: Chico. Y una medialuna también.","Student: Small. And a croissant too."]]:[["Profesor: Che, ¿vamos a tomar algo?","Teacher: Hey, shall we go for a drink?"],["Alumno: Dale. ¿Adónde vamos?","Student: Sure. Where are we going?"],["Profesor: Hay un bar nuevo. Está re copado.","Teacher: There is a new bar. It is really cool."],["Alumno: ¿Posta? Buenísimo.","Student: Really? Great."]];
  const progressItems=[["🎤 Hablé.","I spoke."],["💬 Agregué una idea.","I added an idea."],["🔁 Seguí hablando.","I kept talking."],["🔥 Me animé.","I took a risk."]];
  return <main className="argento-shell">
    <header className="argento-hero">
      <nav><a href="/" className="argento-brand"><img src="/chespanish-guide-avatar.png" alt=""/><span><b>CHESPANISH</b><small>A0–A1 · CONVERSACIÓN</small></span></a><a href="/" className="argento-library">← Biblioteca</a></nav>
      <div className="argento-hero-copy"><span>🇦🇷 ESPAÑOL ARGENTINO · ARGENTINE SPANISH</span><h1>ARGENTO</h1><p>Hablá español desde el primer día.<small>Speak Spanish from Day One.</small></p><blockquote>Tu trabajo no es ser perfecto. Tu trabajo es comunicar.<small>Your job is not to be perfect. Your job is to communicate.</small></blockquote><a href="#mundos">EMPEZAR A HABLAR · START SPEAKING ↓</a></div>
    </header>

    <section id="mundos" className="argento-worlds"><header><div><span>12 MUNDOS PARA HABLAR · 12 CONVERSATION WORLDS</span><h2>Elegí tu Argentina.</h2><small>Choose your Argentina.</small></div><p>Sin tests. Sin respuestas perfectas. Elegí un mundo, usá los recursos y hablá.<small>No tests. No perfect answers. Choose a world, use the resources, and speak.</small></p></header><div className="world-grid">{worlds.map(item=><button key={item.id} className={item.id===activeId?"active":""} onClick={()=>chooseWorld(item.id)} style={{backgroundImage:`linear-gradient(0deg,rgba(4,18,35,.95),rgba(4,18,35,.08)),url(${item.photo})`}}><span>{item.icon}</span><b>{item.title}</b><small>{item.kicker}</small></button>)}</div></section>

    <section ref={practiceRef} className="argento-practice">
      <article className="world-dashboard" key={world.id}>
        <header className="world-hero"><div style={{backgroundImage:`url(${world.photo})`}}/><section><small>{world.kicker}</small><h2>{world.icon} {world.title}</h2><p>{world.q[0]}</p><span>{world.q[1]}</span></section></header>
        <div className="world-body">
          <div className="tools-title"><span>TALKING TOOLS · RECURSOS PARA HABLAR</span><b>🎤 AHORA HABLÁ / NOW TALK</b></div>
          <div className="tools-grid">
            <section className="tool-card"><h3>WORDS · PALABRAS</h3><div className="pair-grid">{visibleWords.map(pair=><PairCard key={pair[0]} pair={pair}/>)}</div><button className="pager" onClick={()=>setWordPage(page=>page===0?1:0)}>{wordPage===0?"MORE WORDS / MÁS →":"← FIRST WORDS / PRIMERAS"}</button></section>
            <section className="tool-card start-card"><h3>START TALKING · EMPEZÁ ASÍ</h3>{starters.map(pair=><PairCard key={pair[0]} pair={pair} small/>)}</section>
            <section className="tool-card"><h3>KEEP GOING · SEGUÍ</h3><div className="pair-grid">{connectors.map(pair=><PairCard key={pair[0]} pair={pair}/>)}</div></section>
          </div>

          <section className="quick-reactions"><h3>QUICK REACTIONS · REACCIONÁ</h3><div className="pair-grid">{reactions.map(pair=><PairCard key={pair[0]} pair={pair}/>)}</div></section>

          <section className="follow-panel"><header><h3>SEGUIMOS · KEEP TALKING</h3><div><button className="pager" disabled={questionPage===0} onClick={()=>setQuestionPage(page=>Math.max(0,page-1))}>← ANTERIORES</button><button className="pager" disabled={(questionPage+1)*3>=world.subs.length} onClick={()=>setQuestionPage(page=>page+1)}>MORE QUESTIONS / MÁS →</button></div></header><div className="question-grid">{visibleQuestions.map((pair,index)=>{const n=questionPage*3+index;return <article key={pair[0]}><b>{n+1}. {pair[0]}</b><span>{pair[1]}</span><PairCard pair={[`${world.words[n%world.words.length][0]} · ${connectors[n%connectors.length][0]}`,`${world.words[n%world.words.length][1]} · ${connectors[n%connectors.length][1]}`]} small/></article>})}</div></section>

          <div className="talk-more"><section><b>🎤 AHORA HABLÁ · NOW TALK</b><p>Decí una idea. Después agregá una cosa más.</p><small>Say one idea. Then add one more thing.</small></section><section><h3>+ UNA COSA MÁS · ONE MORE THING</h3><b>{world.extra[0]}</b><span>{world.extra[1]}</span><PairCard pair={["Para mí… porque…","For me… because…"]} small/></section></div>

          {world.id==="argento"&&<section className="slang-section"><h3>ARGENTO · JERGAS PARA HABLAR · SLANG FOR SPEAKING</h3><div>{slang.map(item=><article key={item[0]}><h4>{item[0]}</h4><b>{item[1]}</b><p><strong>Ejemplo:</strong> {item[2]}<small>{item[3]}</small></p><p><strong>Cuándo:</strong> {item[4]}<small>{item[5]}</small></p></article>)}</div></section>}

          {(world.id==="cafe"||world.id==="argento")&&<section className="roleplay"><div className="role-tabs"><button className={roleTab==="model"?"active":""} onClick={()=>setRoleTab("model")}>🎬 MODEL / MODELO</button><button className={roleTab==="turn"?"active":""} onClick={()=>setRoleTab("turn")}>🎤 YOUR TURN / TU TURNO</button></div>{roleTab==="model"?<div>{roleLines.map(pair=><PairCard key={pair[0]} pair={pair}/>)}</div>:<div><PairCard pair={roleLines[0]}/><div className="pair-grid">{world.words.slice(0,6).map(pair=><PairCard key={pair[0]} pair={pair}/>)}</div><section className="your-turn"><b>🎤 AHORA HABLÁ · NOW TALK</b><p>Elegí una tarjeta y respondé con una idea. / Choose one card and answer with one idea.</p></section></div>}</section>}
        </div>
      </article>

      <section className="speaking-progress"><h2>Comunicar es ganar.</h2><span>Communication is the win.</span><p>Marcá lo que comunicaste hoy. Celebramos valentía, ideas y conexión, no perfección gramatical.<small>Mark what you communicated today. We celebrate courage, ideas and connection — not grammar perfection.</small></p><div>{progressItems.map((item,index)=><button key={item[0]} className={progress.includes(index)?"active":""} onClick={()=>setProgress(items=>items.includes(index)?items.filter(x=>x!==index):[...items,index])}>{item[0]} <span>/ {item[1]}</span></button>)}</div></section>
    </section>

    <footer>No hace falta español perfecto. Dale, hablá.<span>No perfect Spanish required. Come on, speak. 🇦🇷</span></footer>
    <div className="argento-floating"><button onClick={showSurprise}>🎲 SORPRENDEME</button><button onClick={()=>setModal("help")}>🛟 AYUDAME A HABLAR</button></div>

    {modal&&<div className="argento-modal" onMouseDown={()=>setModal(null)}><section onMouseDown={event=>event.stopPropagation()}>{modal==="help"?<><button className="modal-close" onClick={()=>setModal(null)}>×</button><h2>🛟 AYUDAME A HABLAR</h2><span>HELP ME TALK</span><div className="help-grid"><article><h3>OPINIÓN · OPINION</h3>{starters.slice(0,4).map(pair=><PairCard key={pair[0]} pair={pair}/>)}</article><article><h3>PENSAR · THINKING TIME</h3>{([["A ver…","Let me see…"],["Mmm…","Hmm…"],["No sé.","I do not know."],["Creo que…","I think…"]] as Pair[]).map(pair=><PairCard key={pair[0]} pair={pair}/>)}</article><article><h3>SEGUÍ · KEEP GOING</h3>{connectors.slice(0,4).map(pair=><PairCard key={pair[0]} pair={pair}/>)}</article><article><h3>REACCIONÁ · REACT</h3>{reactions.slice(5).map(pair=><PairCard key={pair[0]} pair={pair}/>)}</article></div></>:<><button className="modal-close" onClick={()=>setModal(null)}>×</button><h2>🎲 SORPRENDEME</h2><span>SURPRISE ME</span><div className="surprise-content"><h3>{surprises[surpriseIndex].q[0]}</h3><p>{surprises[surpriseIndex].q[1]}</p><div className="pair-grid">{surprises[surpriseIndex].helps.map(pair=><PairCard key={pair[0]} pair={pair}/>)}</div><section className="your-turn"><b>🎤 AHORA HABLÁ · NOW TALK</b><p>Decí una idea y agregá una cosa más.</p></section><button className="another" onClick={showSurprise}>Otra sorpresa / Another surprise</button></div></>}</section></div>}
  </main>;
}
