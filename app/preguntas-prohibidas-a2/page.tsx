"use client";

import {useState,type CSSProperties} from "react";
import {feedbackLabels,forbiddenBlocks,powerUps,supportPhrases,topics} from "./data";
import "../preguntas-prohibidas/style.css";
import "../preguntas-prohibidas/bilingual-fix.css";
import "../preguntas-prohibidas/kingdom-game.css";
import "../preguntas-prohibidas/kingdom-premium.css";
import "./a2.css";

type Screen="cover"|"rules"|"map"|"topic"|"block"|"powerups"|"boss"|"feedback";

const Pair=({value}:{value:[string,string]})=><div className="pr-pair"><b>{value[0]}</b><span>{value[1]}</span></div>;

const questionCharacterSheets=Array.from({length:14},(_,index)=>`/question-world-${String(index+1).padStart(2,"0")}.webp`);

export default function PreguntasProhibidasA2(){
  const [screen,setScreen]=useState<Screen>("cover");
  const [topicIndex,setTopicIndex]=useState(0);
  const [blockIndex,setBlockIndex]=useState(0);
  const [feedback,setFeedback]=useState(()=>feedbackLabels.map(()=>""));
  const topic=topics[topicIndex];
  const block=forbiddenBlocks[blockIndex];
  const show=(next:Screen)=>{setScreen(next);requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"smooth"}))};
  const openTopic=(index:number)=>{setTopicIndex(index);show("topic")};
  const openBlock=(index:number)=>{setBlockIndex(index);show("block")};
  const randomTopic=()=>{const pool=topics.map((_,index)=>index).filter(index=>index!==topicIndex);openTopic(pool[Math.floor(Math.random()*pool.length)]??0)};
  const randomBlock=()=>{const pool=forbiddenBlocks.map((_,index)=>index).filter(index=>index!==blockIndex);openBlock(pool[Math.floor(Math.random()*pool.length)]??0)};

  return <main className="pr-shell">
    <nav className="pr-nav"><a href="/" className="pr-brand"><img src="/chespanish-guide-avatar.png" alt=""/><span><b>CHESPANISH</b><small>A2 · CONVERSACIÓN</small></span></a><div><span>{topics.length} MUNDOS</span><span>{topics.length*4} PREGUNTAS</span><span>{forbiddenBlocks.length} BLOQUES</span></div><a href="/">← BIBLIOTECA</a></nav>

    {screen==="cover"&&<section className="pr-cover">
      <div className="pr-cover-copy"><span className="pr-level">A2 · OPINIONES CLARAS</span><p className="pr-overline">UNA AVENTURA PARA HABLAR CON FRASES SIMPLES</p><h1>EL REINO DE LAS<br/><em>PREGUNTAS PROHIBIDAS</em></h1><p className="pr-lead">Recorré los mundos, elegí una pregunta y respondé con una idea, una razón y un ejemplo.</p><p className="pr-lead-en">Explore the worlds, choose a question and answer with one idea, one reason and one example.</p><div className="pr-cover-actions"><button onClick={()=>show("rules")}>ENTRAR AL REINO <span>→</span></button><button onClick={()=>show("map")}>IR DIRECTO AL MAPA</button></div><div className="pr-cover-stats"><article><b>{topics.length}</b><span>temas cotidianos</span></article><article><b>{topics.length*4}</b><span>preguntas A2</span></article><article><b>8</b><span>apoyos bilingües</span></article></div></div>
      <div className="pr-cover-art" aria-hidden="true"><span className="pr-moon"/><div className="pr-castle">🏰</div><div className="pr-question-cube">?</div><img src="/chespanish-guide-truck.webp" alt=""/><i className="pr-star one">✦</i><i className="pr-star two">✦</i><i className="pr-star three">✦</i></div>
    </section>}

    {screen==="rules"&&<section className="pr-page pr-rules">
      <header className="pr-page-head"><span>ANTES DE EMPEZAR · BEFORE YOU START</span><h1>Cómo se juega</h1><p>No necesitás palabras difíciles. Construí una respuesta clara con lo que ya sabés.</p></header>
      <div className="pr-rule-grid">
        <article><i>01</i><span>🗺️</span><h2>Elegí un mundo</h2><p>Cada mundo tiene cuatro preguntas cortas sobre un tema real.</p><small>Choose one world with four short questions about a real topic.</small></article>
        <article><i>02</i><span>💬</span><h2>Da tu opinión</h2><p>Respondé con una frase y explicá por qué.</p><small>Answer with one sentence and explain why.</small></article>
        <article><i>03</i><span>⭐</span><h2>Usá un apoyo</h2><p>Elegí una frase bilingüe para empezar o continuar.</p><small>Choose a bilingual phrase to start or continue.</small></article>
        <article><i>04</i><span>❓</span><h2>Abrí un bloque</h2><p>Encontrá una pregunta extra y un reto simple para hablar.</p><small>Find one extra question and a simple speaking challenge.</small></article>
      </div>
      <section className="pr-golden-rule"><span>⚠️</span><div><small>REGLA DE ORO · GOLDEN RULE</small><h2>OPINIÓN <i>+</i> PORQUE <i>+</i> EJEMPLO <i>+</i> PREGUNTA</h2><p>Una respuesta simple y clara es suficiente. Lo importante es seguir hablando.</p></div></section>
      <div className="pr-center"><button className="pr-primary" onClick={()=>show("map")}>IR AL MAPA →</button></div>
    </section>}

    {screen==="map"&&<section className="pr-page pr-map">
      <header className="pr-page-head"><span>MAPA DEL REINO · KINGDOM MAP</span><h1>Elegí una puerta del castillo.</h1><p>Cada puerta es un mundo. Abrila y descubrí qué pregunta está esperando adentro.</p></header>
      <section className="pr-world-stage">
        <div className="pr-world-ribbon"><span>✦</span><div><small>REGIÓN 01 · REGION 01</small><b>LOS CATORCE REINOS</b></div><span>✦</span></div>
        <div className="pr-game-sky" aria-hidden="true"><span className="cloud-one">☁</span><span className="coin-one">●</span><span className="block-one">?</span><span className="cloud-two">☁</span><span className="coin-two">●</span></div>
        <div className="pr-map-title"><div><span>01</span><h2>Puertas del reino</h2></div><b>{topics.length} PUERTAS · 4 PREGUNTAS CADA UNA</b></div>
        <div className="pr-topic-grid">{topics.map((item,index)=><button className="pr-kingdom-gate" aria-label={`Abrir ${item.name}`} key={item.name} onClick={()=>openTopic(index)} style={{"--topic":item.color,"--gate-index":index} as CSSProperties}>
          <div className="pr-castle-card" aria-hidden="true">
            <span className="pr-level-flag">MUNDO {String(index+1).padStart(2,"0")}</span>
            <img className="pr-castle-illustration" src="/castle-gateway.webp" alt=""/>
            <div className="pr-gate-arch"><span className="pr-gate-glow"/><i className="pr-gate-character">{item.emoji}</i><span className="pr-gate-door"><b>{String(index+1).padStart(2,"0")}</b><i/></span></div>
            <span className="pr-castle-sparkle sparkle-a">✦</span><span className="pr-castle-sparkle sparkle-b">✦</span>
          </div>
          <div className="pr-door-copy"><h3>{item.name}</h3><small className="pr-topic-english-name">{item.englishName}</small><Pair value={item.desc}/><div className="pr-door-meta"><span>4 preguntas</span><b>ABRIR PUERTA →</b></div></div>
        </button>)}</div>
      </section>
      <div className="pr-map-title blocks"><div><span>02</span><h2>Torres extra <small>· Extra Towers</small></h2></div><b>{forbiddenBlocks.length} RETOS · FRASES CLARAS</b></div>
      <div className="pr-block-grid">{forbiddenBlocks.map((item,index)=><button key={item.name} onClick={()=>openBlock(index)} style={{"--block":item.color} as CSSProperties}><i>?</i><span>BLOQUE {String(index+1).padStart(2,"0")}</span><h3>{item.name}</h3><small className="pr-block-english-name">{item.englishName}</small><b>ABRIR BLOQUE →</b></button>)}</div>
      <div className="pr-map-actions"><button onClick={()=>show("powerups")}><span>⭐</span><div><b>POWER-UPS</b><small>Frases para ayudarte</small></div></button><button onClick={()=>show("boss")}><span>🏰</span><div><b>JEFE FINAL</b><small>El desafío A2</small></div></button><button onClick={()=>show("feedback")}><span>📊</span><div><b>FEEDBACK</b><small>Registrá el resultado</small></div></button></div>
    </section>}

    {screen==="topic"&&<section className="pr-page pr-topic-page" style={{"--topic":topic.color} as CSSProperties}>
      <header className="pr-inside-head"><button onClick={()=>show("map")}>← VOLVER AL MAPA</button><span>MUNDO {String(topicIndex+1).padStart(2,"0")} / {topics.length}</span></header>
      <section className="pr-topic-hero"><i>{topic.emoji}</i><div><small>MUNDO A2 · A2 WORLD</small><h1>{topic.name}</h1><span className="pr-topic-hero-en">{topic.englishName}</span><Pair value={topic.desc}/></div><b>4 PREGUNTAS</b></section>
      <section className="pr-royal-parade">
        <header><small>PERSONAJES DEL REINO · KINGDOM CHARACTERS</small><b>La corte real te acompaña.</b><span>The royal court is with you.</span></header>
        <div className="pr-royal-stage" aria-hidden="true">
          <span className="pr-royal-spark star-a">✦</span><span className="pr-royal-spark star-b">✦</span><span className="pr-royal-spark star-c">✦</span>
          <img className="pr-royal-couple" src="/royal-couple.webp" alt=""/>
          <img className="pr-friendly-king" src="/friendly-king.webp" alt=""/>
          <img className="pr-royal-frog" src="/royal-frog.webp" alt=""/>
          <span className="pr-frog-shadow"/>
        </div>
      </section>
      <div className="pr-question-list">{topic.questions.map((question,index)=><article key={question}><span>{String(index+1).padStart(2,"0")}</span><div className="pr-question-copy"><small>PREGUNTA · QUESTION</small><h2>{question}</h2></div><div className={`pr-question-character sprite-${index+1}`} style={{"--character-sheet":`url(${questionCharacterSheets[topicIndex]})`} as CSSProperties} aria-hidden="true"><i>✦</i><span/></div></article>)}</div>
      <section className="pr-speaking-kit"><header><span>🧰</span><div><small>APOYO A2 · A2 SPEAKING SUPPORT</small><h2>Armá una respuesta simple.</h2><p>Elegí una o dos frases y agregá tu idea.</p></div></header><div>{supportPhrases.map(pair=><Pair value={pair} key={pair[0]}/>)}</div></section>
      <footer className="pr-bottom-nav"><button onClick={()=>openTopic((topicIndex-1+topics.length)%topics.length)}>← MUNDO ANTERIOR</button><button className="random" onClick={randomTopic}>🎲 OTRO MUNDO</button><button onClick={()=>openTopic((topicIndex+1)%topics.length)}>MUNDO SIGUIENTE →</button></footer>
    </section>}

    {screen==="block"&&<section className="pr-page pr-block-page" style={{"--block":block.color} as CSSProperties}>
      <header className="pr-inside-head"><button onClick={()=>show("map")}>← VOLVER AL MAPA</button><span>BLOQUE {String(blockIndex+1).padStart(2,"0")} / {forbiddenBlocks.length}</span></header>
      <section className="pr-block-card"><div className="pr-big-question">?</div><small>BLOQUE EXTRA · EXTRA BLOCK</small><h1>{block.name}</h1><span className="pr-block-page-en">{block.englishName}</span><p>{block.question}</p><aside><b>🎯 RETO DE EXPRESIÓN · SPEAKING CHALLENGE</b><Pair value={block.challenge}/></aside></section>
      <section className="pr-block-support"><div><small>RECURSOS · SUPPORT</small><h2>Decilo con una frase clara.</h2></div><div>{supportPhrases.slice(0,6).map(pair=><Pair value={pair} key={pair[0]}/>)}</div></section>
      <footer className="pr-bottom-nav"><button onClick={()=>openBlock((blockIndex-1+forbiddenBlocks.length)%forbiddenBlocks.length)}>← ANTERIOR</button><button className="random" onClick={randomBlock}>❓ OTRO BLOQUE</button><button onClick={()=>openBlock((blockIndex+1)%forbiddenBlocks.length)}>SIGUIENTE →</button></footer>
    </section>}

    {screen==="powerups"&&<section className="pr-page pr-powerups">
      <header className="pr-inside-head"><button onClick={()=>show("map")}>← VOLVER AL MAPA</button><span>ARSENAL A2 · A2 TOOLKIT</span></header>
      <header className="pr-page-head"><span>⭐ POWER-UPS</span><h1>Frases cortas para seguir hablando.</h1><p>Elegí una estructura y completala con tu idea.</p></header>
      <div className="pr-power-grid">{powerUps.map((item,index)=><article key={item.name} style={{"--power":item.color} as CSSProperties}><span className="pr-power-number">{String(index+1).padStart(2,"0")}</span><i>{item.emoji}</i><h2>{item.name}</h2><small>{item.english}</small><div><b>{item.phrase}</b><span>{item.translation}</span></div></article>)}</div>
      <section className="pr-formula"><small>FÓRMULA A2 · A2 FORMULA</small><h2>“Para mí… <i>porque…</i> Por ejemplo… <i>¿Y para vos?</i>”</h2></section>
    </section>}

    {screen==="boss"&&<section className="pr-page pr-boss">
      <header className="pr-inside-head"><button onClick={()=>show("map")}>← VOLVER AL MAPA</button><span>🏰 JEFE FINAL · FINAL BOSS</span></header>
      <header className="pr-page-head"><span>DESAFÍO FINAL</span><h1>La última puerta.</h1><p>Elegí tres mundos y una torre extra. Después completá el desafío.</p></header>
      <section className="pr-boss-layout"><div className="pr-boss-reflection"><small>PRIMERO RESPONDÉ · FIRST ANSWER</small>{["¿Qué pregunta te gustó más?","¿Qué tema fue difícil?","¿Qué respuesta fue más fácil?","¿Qué palabra nueva usaste?","¿Qué tema querés practicar otra vez?"].map((question,index)=><article key={question}><span>{index+1}</span><p>{question}</p></article>)}</div><div className="pr-final-question"><span>🔥 BOSS FINAL</span><h2>¿Qué tema es importante para vos y por qué?</h2><div><b>Tu respuesta necesita:</b><p>una opinión · una razón · un ejemplo · una pregunta</p></div></div></section>
      <section className="pr-boss-phrases"><small>FRASES ÚTILES · USEFUL PHRASES</small><div>{[["Para mí…","For me…"],["Pienso que…","I think that…"],["La razón es que…","The reason is that…"],["Por ejemplo…","For example…"],["Entiendo, pero…","I understand, but…"],["No sé, necesito pensar.","I don’t know, I need to think."],["¿Y para vos?","And for you?"]].map(pair=><Pair value={pair as [string,string]} key={pair[0]}/>)}</div></section>
      <div className="pr-center"><button className="pr-primary" onClick={()=>show("feedback")}>IR AL FEEDBACK →</button></div>
    </section>}

    {screen==="feedback"&&<section className="pr-page pr-feedback">
      <header className="pr-inside-head"><button onClick={()=>show("map")}>← VOLVER AL MAPA</button><span>📊 RESULTADOS · RESULTS</span></header>
      <header className="pr-page-head"><span>FEEDBACK DE LA AVENTURA</span><h1>Lo importante fue hablar.</h1><p>Registrá qué pudo hacer el alumno y qué necesita practicar.</p></header>
      <div className="pr-feedback-grid">{feedbackLabels.map((label,index)=><label key={label[0]}><span>{String(index+1).padStart(2,"0")}</span><div><b>{label[0]}</b><small>{label[1]}</small><input value={feedback[index]} onChange={event=>setFeedback(current=>current.map((value,i)=>i===index?event.target.value:value))} placeholder="Escribí acá… / Write here…"/></div></label>)}</div>
      <section className="pr-win-message"><span>✓</span><p>Ganaste porque diste tu opinión, explicaste una razón y seguiste hablando aunque no conocías todas las palabras. 🎮</p></section>
      <div className="pr-center"><button className="pr-primary" onClick={()=>{setFeedback(feedbackLabels.map(()=>""));show("cover")}}>REINICIAR AVENTURA ↻</button></div>
    </section>}

    {screen!=="cover"&&<div className="pr-dock"><button onClick={()=>show("map")}>🗺️ MAPA</button><button onClick={()=>show("powerups")}>⭐ POWER-UPS</button><button onClick={()=>show("boss")}>🏰 BOSS</button></div>}
  </main>;
}
