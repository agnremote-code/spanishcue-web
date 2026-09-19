"use client";

import {useState,type CSSProperties} from "react";
import Link from "next/link";
import {feedbackLabels,forbiddenBlocks,powerUps,supportPhrases,topics} from "./data";
import "./style.css";
import "./bilingual-fix.css";
import "./kingdom-game.css";
import "./kingdom-premium.css";

type Screen="cover"|"rules"|"map"|"topic"|"block"|"powerups"|"boss"|"feedback";

const Pair=({value}:{value:[string,string]})=><div className="pr-pair"><b>{value[0]}</b><span>{value[1]}</span></div>;

export default function PreguntasProhibidas(){
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
    <nav className="pr-nav"><Link href="/" className="pr-brand"><img src="/brand/mascot/portrait.webp" alt=""/><span><b>SPANISHCUE</b><small>B1 · CONVERSACIÓN</small></span></Link><div><span>{topics.length} MUNDOS</span><span>{topics.length*4} PREGUNTAS</span><span>{forbiddenBlocks.length} BLOQUES</span></div><Link href="/">← BIBLIOTECA</Link></nav>

    {screen==="cover"&&<section className="pr-cover">
      <div className="pr-cover-copy"><span className="pr-level">B1 · OPINIÓN + MATICES</span><p className="pr-overline">UNA AVENTURA PARA HABLAR SIN RESPUESTAS FÁCILES</p><h1>EL REINO DE LAS<br/><em>PREGUNTAS PROHIBIDAS</em></h1><p className="pr-lead">Saltá por los mundos, abrí bloques prohibidos y defendé opiniones que nadie dice en voz alta.</p><p className="pr-lead-en">Move through the worlds, open forbidden blocks and defend opinions people rarely say out loud.</p><div className="pr-cover-actions"><button onClick={()=>show("rules")}>ENTRAR AL REINO <span>→</span></button><button onClick={()=>show("map")}>IR DIRECTO AL MAPA</button></div><div className="pr-cover-stats"><article><b>{topics.length}</b><span>temas profundos</span></article><article><b>{topics.length*4}</b><span>preguntas reales</span></article><article><b>8</b><span>power-ups bilingües</span></article></div></div>
      <div className="pr-cover-art" aria-hidden="true"><span className="pr-moon"/><div className="pr-castle">🏰</div><div className="pr-question-cube">?</div><img src="/chespanish-guide-truck.webp" alt=""/><i className="pr-star one">✦</i><i className="pr-star two">✦</i><i className="pr-star three">✦</i></div>
    </section>}

    {screen==="rules"&&<section className="pr-page pr-rules">
      <header className="pr-page-head"><span>ANTES DE EMPEZAR · BEFORE YOU START</span><h1>Cómo se juega</h1><p>No buscás la respuesta correcta. Construís una respuesta clara, humana y con matices.</p></header>
      <div className="pr-rule-grid">
        <article><i>01</i><span>🗺️</span><h2>Elegí un mundo</h2><p>Cada mundo tiene una categoría prohibida con cuatro preguntas fuertes.</p><small>Choose one world with four challenging questions.</small></article>
        <article><i>02</i><span>💬</span><h2>Respondé sin filtro</h2><p>No hay respuestas correctas. Hay posturas, matices y honestidad.</p><small>There are no correct answers: take a position and explain it.</small></article>
        <article><i>03</i><span>⭐</span><h2>Usá un power-up</h2><p>Agregá postura, matiz, contraargumento, análisis o conclusión.</p><small>Use a power-up to structure and extend your answer.</small></article>
        <article><i>04</i><span>❓</span><h2>Abrí un bloque</h2><p>Recibís una pregunta más oscura, profunda y un reto de expresión.</p><small>Open a harder question with a speaking challenge.</small></article>
      </div>
      <section className="pr-golden-rule"><span>⚠️</span><div><small>REGLA DE ORO · GOLDEN RULE</small><h2>POSTURA <i>+</i> MATIZ <i>+</i> CONTRAARGUMENTO <i>+</i> ANÁLISIS <i>+</i> CONCLUSIÓN</h2><p>Si te falta vocabulario, usá los power-ups. La profundidad importa más que la perfección.</p></div></section>
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
          <div className="pr-door-copy"><h3>{item.name}</h3><Pair value={item.desc}/><div className="pr-door-meta"><span>4 preguntas</span><b>ABRIR PUERTA →</b></div></div>
        </button>)}</div>
      </section>
      <div className="pr-map-title blocks"><div><span>02</span><h2>Torres prohibidas</h2></div><b>{forbiddenBlocks.length} RETOS · SIN RESPUESTAS CÓMODAS</b></div>
      <div className="pr-block-grid">{forbiddenBlocks.map((item,index)=><button key={item.name} onClick={()=>openBlock(index)} style={{"--block":item.color} as CSSProperties}><i>?</i><span>BLOQUE {String(index+1).padStart(2,"0")}</span><h3>{item.name}</h3><b>ABRIR BLOQUE →</b></button>)}</div>
      <div className="pr-map-actions"><button onClick={()=>show("powerups")}><span>⭐</span><div><b>POWER-UPS</b><small>Frases para sobrevivir</small></div></button><button onClick={()=>show("boss")}><span>🏰</span><div><b>JEFE FINAL</b><small>La pregunta sin salida</small></div></button><button onClick={()=>show("feedback")}><span>📊</span><div><b>FEEDBACK</b><small>Registrá el resultado</small></div></button></div>
    </section>}

    {screen==="topic"&&<section className="pr-page pr-topic-page" style={{"--topic":topic.color} as CSSProperties}>
      <header className="pr-inside-head"><button onClick={()=>show("map")}>← VOLVER AL MAPA</button><span>MUNDO {String(topicIndex+1).padStart(2,"0")} / {topics.length}</span></header>
      <section className="pr-topic-hero"><i>{topic.emoji}</i><div><small>MUNDO PROHIBIDO · FORBIDDEN WORLD</small><h1>{topic.name}</h1><Pair value={topic.desc}/></div><b>4 PREGUNTAS</b></section>
      <div className="pr-question-list">{topic.questions.map((question,index)=><article key={question}><span>{String(index+1).padStart(2,"0")}</span><div><small>PREGUNTA · QUESTION</small><h2>{question}</h2></div></article>)}</div>
      <section className="pr-speaking-kit"><header><span>🧰</span><div><small>APOYO B1 · B1 SPEAKING SUPPORT</small><h2>No te quedes en una respuesta corta.</h2><p>Elegí dos o tres piezas y conectalas con tu propia idea.</p></div></header><div>{supportPhrases.map(pair=><Pair value={pair} key={pair[0]}/>)}</div></section>
      <footer className="pr-bottom-nav"><button onClick={()=>openTopic((topicIndex-1+topics.length)%topics.length)}>← MUNDO ANTERIOR</button><button className="random" onClick={randomTopic}>🎲 OTRO MUNDO</button><button onClick={()=>openTopic((topicIndex+1)%topics.length)}>MUNDO SIGUIENTE →</button></footer>
    </section>}

    {screen==="block"&&<section className="pr-page pr-block-page" style={{"--block":block.color} as CSSProperties}>
      <header className="pr-inside-head"><button onClick={()=>show("map")}>← VOLVER AL MAPA</button><span>BLOQUE {String(blockIndex+1).padStart(2,"0")} / {forbiddenBlocks.length}</span></header>
      <section className="pr-block-card"><div className="pr-big-question">?</div><small>BLOQUE PROHIBIDO · FORBIDDEN BLOCK</small><h1>{block.name}</h1><p>{block.question}</p><aside><b>🎯 RETO DE EXPRESIÓN · SPEAKING CHALLENGE</b><Pair value={block.challenge}/></aside></section>
      <section className="pr-block-support"><div><small>RECURSOS · SUPPORT</small><h2>Decilo con precisión.</h2></div><div>{supportPhrases.slice(0,6).map(pair=><Pair value={pair} key={pair[0]}/>)}</div></section>
      <footer className="pr-bottom-nav"><button onClick={()=>openBlock((blockIndex-1+forbiddenBlocks.length)%forbiddenBlocks.length)}>← ANTERIOR</button><button className="random" onClick={randomBlock}>❓ OTRO BLOQUE</button><button onClick={()=>openBlock((blockIndex+1)%forbiddenBlocks.length)}>SIGUIENTE →</button></footer>
    </section>}

    {screen==="powerups"&&<section className="pr-page pr-powerups">
      <header className="pr-inside-head"><button onClick={()=>show("map")}>← VOLVER AL MAPA</button><span>ARSENAL B1 · B1 TOOLKIT</span></header>
      <header className="pr-page-head"><span>⭐ POWER-UPS</span><h1>Frases para sobrevivir preguntas fuertes.</h1><p>No memorices discursos. Robá estas estructuras y llenalas con tus ideas.</p></header>
      <div className="pr-power-grid">{powerUps.map((item,index)=><article key={item.name} style={{"--power":item.color} as CSSProperties}><span className="pr-power-number">{String(index+1).padStart(2,"0")}</span><i>{item.emoji}</i><h2>{item.name}</h2><small>{item.english}</small><div><b>{item.phrase}</b><span>{item.translation}</span></div></article>)}</div>
      <section className="pr-formula"><small>FÓRMULA COMPLETA · FULL FORMULA</small><h2>“Mi postura es… <i>Al mismo tiempo…</i> Alguien podría decir… <i>El problema de fondo es…</i> Mi conclusión es…”</h2></section>
    </section>}

    {screen==="boss"&&<section className="pr-page pr-boss">
      <header className="pr-inside-head"><button onClick={()=>show("map")}>← VOLVER AL MAPA</button><span>🏰 JEFE FINAL · FINAL BOSS</span></header>
      <header className="pr-page-head"><span>DESAFÍO FINAL</span><h1>La pregunta que no tiene salida.</h1><p>Elegí tres mundos y un bloque prohibido. Después cerrá la aventura.</p></header>
      <section className="pr-boss-layout"><div className="pr-boss-reflection"><small>PRIMERO RESPONDÉ · FIRST ANSWER</small>{["¿Qué pregunta fue más incómoda?","¿Qué tema te obligó a pensar más?","¿Qué respuesta tuya fue más honesta?","¿Qué postura cambiarías un poco después de hablar?","¿Qué tema sería peligroso discutir con desconocidos?"].map((question,index)=><article key={question}><span>{index+1}</span><p>{question}</p></article>)}</div><div className="pr-final-question"><span>🔥 BOSS FINAL</span><h2>¿Qué parte de tu personalidad, tus valores o tus deseos sería difícil de defender si todos pudieran verla claramente?</h2><div><b>Tu respuesta necesita:</b><p>una postura · un matiz · una contradicción · una conclusión</p></div></div></section>
      <section className="pr-boss-phrases"><small>FRASES ÚTILES · USEFUL PHRASES</small><div>{[["La parte difícil de responder es…","The hard part to answer is…"],["No sé si tengo una respuesta cómoda.","I’m not sure I have a comfortable answer."],["Una parte de mí piensa que…","One part of me thinks that…"],["Pero otra parte reconoce que…","But another part recognises that…"],["La respuesta políticamente correcta sería…","The politically correct answer would be…"],["La respuesta honesta sería…","The honest answer would be…"],["Mi conclusión final es…","My final conclusion is…"]].map(pair=><Pair value={pair as [string,string]} key={pair[0]}/>)}</div></section>
      <div className="pr-center"><button className="pr-primary" onClick={()=>show("feedback")}>IR AL FEEDBACK →</button></div>
    </section>}

    {screen==="feedback"&&<section className="pr-page pr-feedback">
      <header className="pr-inside-head"><button onClick={()=>show("map")}>← VOLVER AL MAPA</button><span>📊 RESULTADOS · RESULTS</span></header>
      <header className="pr-page-head"><span>FEEDBACK DE LA AVENTURA</span><h1>Lo importante no fue tener razón.</h1><p>Registrá qué pudo hacer el alumno y qué se lleva para la próxima conversación.</p></header>
      <div className="pr-feedback-grid">{feedbackLabels.map((label,index)=><label key={label[0]}><span>{String(index+1).padStart(2,"0")}</span><div><b>{label[0]}</b><small>{label[1]}</small><input value={feedback[index]} onChange={event=>setFeedback(current=>current.map((value,i)=>i===index?event.target.value:value))} placeholder="Escribí acá… / Write here…"/></div></label>)}</div>
      <section className="pr-win-message"><span>✓</span><p>No ganaste por tener la respuesta más correcta. Ganaste por pensar bajo presión, hablar con matices y no esconderte detrás de una opinión fácil. 🎮</p></section>
      <div className="pr-center"><button className="pr-primary" onClick={()=>{setFeedback(feedbackLabels.map(()=>""));show("cover")}}>REINICIAR AVENTURA ↻</button></div>
    </section>}

    {screen!=="cover"&&<div className="pr-dock"><button onClick={()=>show("map")}>🗺️ MAPA</button><button onClick={()=>show("powerups")}>⭐ POWER-UPS</button><button onClick={()=>show("boss")}>🏰 BOSS</button></div>}
  </main>;
}
