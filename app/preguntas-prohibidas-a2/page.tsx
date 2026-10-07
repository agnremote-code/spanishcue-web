"use client";

import {useState,type CSSProperties} from "react";
import Link from "next/link";
import { ConversationFamily } from "../conversation-families/ConversationFamily";
import {CEFR_LEVELS,type CEFRLevel} from "../conversation-families/types";
import {WorldSupport} from "../world-speaking/WorldSupport";
import {worldSeeds} from "./world-seeds";
import { kingdomVariants } from "./variants";
import "../preguntas-prohibidas/style.css";
import "../preguntas-prohibidas/bilingual-fix.css";
import "../preguntas-prohibidas/kingdom-game.css";
import "../preguntas-prohibidas/kingdom-premium.css";
import "./a2.css";

type Screen="cover"|"rules"|"map"|"topic"|"block"|"powerups"|"boss"|"feedback";

const Pair=({value}:{value:[string,string]})=><div className="pr-pair"><b>{value[0]}</b><span>{value[1]}</span></div>;

const questionCharacterSheets=Array.from({length:14},(_,index)=>`/question-world-${String(index+1).padStart(2,"0")}.webp`);

export default function PreguntasProhibidasA2({initialLevel="A2"}:{initialLevel?:CEFRLevel}){
  return <ConversationFamily id="preguntas-prohibidas" title="El Reino de las Preguntas Prohibidas" levels={CEFR_LEVELS} defaultLevel={initialLevel}>{level=><KingdomExperience key={level} level={level}/>}</ConversationFamily>;
}

function KingdomExperience({level}:{level:CEFRLevel}){
 const ui=(es:string,en:string)=>level==='A0'?`${es} · ${en}`:es;
  const content=kingdomVariants[level];
  const {feedbackLabels,forbiddenBlocks,powerUps,supportPhrases,topics}=content.activities;
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
    <nav className="pr-nav"><Link href="/" className="pr-brand"><img src="/brand/mascot/portrait.webp" alt=""/><span><b>SPANISHCUE</b><small>{level} · CONVERSACIÓN</small></span></Link><div><span>{topics.length} MUNDOS</span><span>{topics.length*4} PREGUNTAS</span><span>{forbiddenBlocks.length} BLOQUES</span></div><Link href="/">{ui("← BIBLIOTECA","← LIBRARY")}</Link></nav>

    {screen==="cover"&&<section className="pr-cover">
      <div className="pr-cover-copy"><span className="pr-level">{level} · {content.focus}</span><p className="pr-overline">{content.focus}</p><h1>{ui("EL REINO DE LAS","THE KINGDOM OF")}<br/><em>{ui("PREGUNTAS PROHIBIDAS","FORBIDDEN QUESTIONS")}</em></h1><p className="pr-lead">{content.intro}</p><p className="pr-lead-en">{level==="A0"?"Explore the worlds with your teacher. Choose a chunk, hear the model and speak.":"Explore the worlds, choose a question and answer with one idea, one reason and one example."}</p>{level==="A0"&&<WorldSupport seed={worldSeeds[0]} level={level}/>}<div className="pr-cover-actions"><button onClick={()=>show("rules")}>{ui("ENTRAR AL REINO","ENTER THE KINGDOM")} <span>→</span></button><button onClick={()=>show("map")}>{ui("IR DIRECTO AL MAPA","GO TO THE MAP")}</button></div><div className="pr-cover-stats"><article><b>{topics.length}</b><span>{ui("temas cotidianos","everyday topics")}</span></article><article><b>{topics.length*4}</b><span>{ui("preguntas","questions")} {level}</span></article><article><b>8</b><span>{ui("apoyos bilingües","bilingual supports")}</span></article></div></div>
      <div className="pr-cover-art" aria-hidden="true"><span className="pr-moon"/><div className="pr-castle">🏰</div><div className="pr-question-cube">?</div><img src="/chespanish-guide-truck.webp" alt=""/><i className="pr-star one">✦</i><i className="pr-star two">✦</i><i className="pr-star three">✦</i></div>
    </section>}

    {screen==="rules"&&<section className="pr-page pr-rules">
      <header className="pr-page-head"><span>ANTES DE EMPEZAR · BEFORE YOU START</span><h1>{ui("Cómo se juega","How to play")}</h1><p>{level==="A0"?"No necesitas saber español. Escucha, elige y repite con el profesor. / No Spanish needed. Listen, choose and repeat with your teacher.":"No necesitas palabras difíciles. Construye una respuesta clara con lo que ya sabes."}</p></header>
      <div className="pr-rule-grid">
        <article><i>01</i><span>🗺️</span><h2>{ui("Elige un mundo","Choose a world")}</h2><p>Cada mundo tiene cuatro preguntas cortas sobre un tema real.</p><small>Choose one world with four short questions about a real topic.</small></article>
        <article><i>02</i><span>💬</span><h2>{ui("Da tu opinión","Give your opinion")}</h2><p>{level==="A0"?"Di una frase con las piezas preparadas.":"Responde con una frase y explica por qué."}</p><small>{level==="A0"?"Say a sentence using the prepared chunks.":"Answer with one sentence and explain why."}</small></article>
        <article><i>03</i><span>⭐</span><h2>{ui("Usa un apoyo","Use support")}</h2><p>Elige una frase bilingüe para empezar o continuar.</p><small>Choose a bilingual phrase to start or continue.</small></article>
        <article><i>04</i><span>❓</span><h2>{ui("Abre un bloque","Open a block")}</h2><p>Encuentra una pregunta extra y un reto simple para hablar.</p><small>Find one extra question and a simple speaking challenge.</small></article>
      </div>
      <section className="pr-golden-rule"><span>⚠️</span><div><small>REGLA DE ORO · GOLDEN RULE</small><h2>{level==="A0"?"ESCUCHA · LISTEN → ELIGE · CHOOSE → DI · SAY":<>OPINIÓN <i>+</i> PORQUE <i>+</i> EJEMPLO <i>+</i> PREGUNTA</>}</h2><p>{ui("Una respuesta simple y clara es suficiente. Lo importante es seguir hablando.","A short clear answer is enough. Keep speaking with help.")}</p></div></section>
      <div className="pr-center"><button className="pr-primary" onClick={()=>show("map")}>{ui("IR AL MAPA →","GO TO THE MAP →")}</button></div>
    </section>}

    {screen==="map"&&<section className="pr-page pr-map">
      <header className="pr-page-head"><span>MAPA DEL REINO · KINGDOM MAP</span><h1>{ui("Elige una puerta del castillo.","Choose a castle door.")}</h1><p>{ui("Cada puerta es un mundo. Ábrela y descubre qué pregunta está esperando adentro.","Each door is a world. Open it and discover a question.")}</p></header>
      <section className="pr-world-stage">
        <div className="pr-world-ribbon"><span>✦</span><div><small>REGIÓN 01 · REGION 01</small><b>{ui("LOS CATORCE REINOS","THE FOURTEEN KINGDOMS")}</b></div><span>✦</span></div>
        <div className="pr-game-sky" aria-hidden="true"><span className="cloud-one">☁</span><span className="coin-one">●</span><span className="block-one">?</span><span className="cloud-two">☁</span><span className="coin-two">●</span></div>
        <div className="pr-map-title"><div><span>01</span><h2>{ui("Puertas del reino","Kingdom doors")}</h2></div><b>{topics.length} PUERTAS · 4 PREGUNTAS CADA UNA</b></div>
        <div className="pr-topic-grid">{topics.map((item,index)=><button className="pr-kingdom-gate" aria-label={`Abrir ${item.name}`} key={item.name} onClick={()=>openTopic(index)} style={{"--topic":item.color,"--gate-index":index} as CSSProperties}>
          <div className="pr-castle-card" aria-hidden="true">
            <span className="pr-level-flag">{ui("MUNDO","WORLD")} {String(index+1).padStart(2,"0")}</span>
            <img className="pr-castle-illustration" src="/castle-gateway.webp" alt=""/>
            <div className="pr-gate-arch"><span className="pr-gate-glow"/><i className="pr-gate-character">{item.emoji}</i><span className="pr-gate-door"><b>{String(index+1).padStart(2,"0")}</b><i/></span></div>
            <span className="pr-castle-sparkle sparkle-a">✦</span><span className="pr-castle-sparkle sparkle-b">✦</span>
          </div>
          <div className="pr-door-copy"><h3>{item.name}</h3><small className="pr-topic-english-name">{level==="A0"?item.englishName:null}</small><Pair value={item.desc}/><div className="pr-door-meta"><span>{ui("4 preguntas","4 questions")}</span><b>{ui("ABRIR PUERTA →","OPEN DOOR →")}</b></div></div>
        </button>)}</div>
      </section>
      <div className="pr-map-title blocks"><div><span>02</span><h2>Torres extra <small>· Extra Towers</small></h2></div><b>{forbiddenBlocks.length} RETOS · FRASES CLARAS</b></div>
      <div className="pr-block-grid">{forbiddenBlocks.map((item,index)=><button key={item.name} onClick={()=>openBlock(index)} style={{"--block":item.color} as CSSProperties}><i>?</i><span>{ui("BLOQUE","BLOCK")} {String(index+1).padStart(2,"0")}</span><h3>{item.name}</h3><small className="pr-block-english-name">{level==="A0"?item.englishName:null}</small><b>{ui("ABRIR BLOQUE →","OPEN BLOCK →")}</b></button>)}</div>
      <div className="pr-map-actions"><button onClick={()=>show("powerups")}><span>⭐</span><div><b>POWER-UPS</b><small>{ui("Frases para ayudarte","Phrases to help you")}</small></div></button><button onClick={()=>show("boss")}><span>🏰</span><div><b>{ui("JEFE FINAL","FINAL BOSS")}</b><small>{ui("El desafío","The challenge")} {level}</small></div></button><button onClick={()=>show("feedback")}><span>📊</span><div><b>FEEDBACK</b><small>{ui("Registra el resultado","Record the result")}</small></div></button></div>
    </section>}

    {screen==="topic"&&<section className="pr-page pr-topic-page" style={{"--topic":topic.color} as CSSProperties}>
      <header className="pr-inside-head"><button onClick={()=>show("map")}>{ui("← VOLVER AL MAPA","← BACK TO THE MAP")}</button><span>{ui("MUNDO","WORLD")} {String(topicIndex+1).padStart(2,"0")} / {topics.length}</span></header>
      <section className="pr-topic-hero"><i>{topic.emoji}</i><div><small>{ui("MUNDO","WORLD")} {level}</small><h1>{topic.name}</h1><span className="pr-topic-hero-en">{level==="A0"?topic.englishName:null}</span><Pair value={topic.desc}/></div><b>{ui("4 PREGUNTAS","4 QUESTIONS")}</b></section>
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
      <WorldSupport key={topic.name} seed={worldSeeds[topicIndex]} level={level}/><section className="pr-speaking-kit"><header><span>🧰</span><div><small>{ui("APOYO","SUPPORT")} {level}</small><h2>{content.answerGuide}</h2><p>{ui("Elige una o dos frases y agrega tu idea.","Choose one or two phrases and add your idea.")}</p></div></header><div>{supportPhrases.map(pair=><Pair value={pair} key={pair[0]}/>)}</div></section>
      <footer className="pr-bottom-nav"><button onClick={()=>openTopic((topicIndex-1+topics.length)%topics.length)}>{ui("← MUNDO ANTERIOR","← PREVIOUS WORLD")}</button><button className="random" onClick={randomTopic}>{ui("🎲 OTRO MUNDO","🎲 ANOTHER WORLD")}</button><button onClick={()=>openTopic((topicIndex+1)%topics.length)}>{ui("MUNDO SIGUIENTE →","NEXT WORLD →")}</button></footer>
    </section>}

    {screen==="block"&&<section className="pr-page pr-block-page" style={{"--block":block.color} as CSSProperties}>
      <header className="pr-inside-head"><button onClick={()=>show("map")}>{ui("← VOLVER AL MAPA","← BACK TO THE MAP")}</button><span>{ui("BLOQUE","BLOCK")} {String(blockIndex+1).padStart(2,"0")} / {forbiddenBlocks.length}</span></header>
      <section className="pr-block-card"><div className="pr-big-question">?</div><small>BLOQUE EXTRA · EXTRA BLOCK</small><h1>{block.name}</h1><span className="pr-block-page-en">{level==="A0"?block.englishName:null}</span><p>{block.question}</p><aside><b>🎯 RETO DE EXPRESIÓN · SPEAKING CHALLENGE</b><Pair value={block.challenge}/></aside></section>
      <WorldSupport key={block.name} seed={worldSeeds[[6,0,1,2,3,11][blockIndex]]} level={level}/><section className="pr-block-support"><div><small>RECURSOS · SUPPORT</small><h2>{ui("Dilo con una frase clara.","Say it with one clear sentence.")}</h2></div><div>{supportPhrases.slice(0,6).map(pair=><Pair value={pair} key={pair[0]}/>)}</div></section>
      <footer className="pr-bottom-nav"><button onClick={()=>openBlock((blockIndex-1+forbiddenBlocks.length)%forbiddenBlocks.length)}>{ui("← ANTERIOR","← PREVIOUS")}</button><button className="random" onClick={randomBlock}>{ui("❓ OTRO BLOQUE","❓ ANOTHER BLOCK")}</button><button onClick={()=>openBlock((blockIndex+1)%forbiddenBlocks.length)}>{ui("SIGUIENTE →","NEXT →")}</button></footer>
    </section>}

    {screen==="powerups"&&<section className="pr-page pr-powerups">
      <header className="pr-inside-head"><button onClick={()=>show("map")}>{ui("← VOLVER AL MAPA","← BACK TO THE MAP")}</button><span>{ui("FRASES PARA CONVERSAR ·","PHRASES FOR CONVERSATION ·")} {level}</span></header>
      <header className="pr-page-head"><span>⭐ POWER-UPS</span><h1>{ui("Frases para seguir hablando.","Phrases to keep speaking.")}</h1><p>{ui("Elige una estructura y complétala con tu idea.","Choose a structure and complete it.")}</p></header>
      <div className="pr-power-grid">{powerUps.map((item,index)=><article key={item.name} style={{"--power":item.color} as CSSProperties}><span className="pr-power-number">{String(index+1).padStart(2,"0")}</span><i>{item.emoji}</i><h2>{item.name}</h2><small>{item.english}</small><div><b>{item.phrase}</b><span>{item.translation}</span></div></article>)}</div>
      <section className="pr-formula"><small>{ui("FÓRMULA","FORMULA")} {level}</small><h2>{content.formula}</h2></section>
    </section>}

    {screen==="boss"&&<section className="pr-page pr-boss">
      <header className="pr-inside-head"><button onClick={()=>show("map")}>{ui("← VOLVER AL MAPA","← BACK TO THE MAP")}</button><span>🏰 JEFE FINAL · FINAL BOSS</span></header>
      <header className="pr-page-head"><span>{ui("DESAFÍO FINAL","FINAL CHALLENGE")}</span><h1>{ui("La última puerta.","The last door.")}</h1><p>{ui("Elige tres mundos y una torre extra. Después completa el desafío.","Choose three worlds and an extra tower. Then finish the challenge.")}</p></header>
      <section className="pr-boss-layout"><div className="pr-boss-reflection"><small>PRIMERO RESPONDE · FIRST ANSWER</small>{content.closingConversation.map((question,index)=><article key={question}><span>{index+1}</span><p>{question}</p></article>)}</div><div className="pr-final-question">{level!=="A2"&&level!=="B1"?<><span>🔥 BOSS FINAL</span><h2>{content.closingConversation[0]}</h2><WorldSupport seed={worldSeeds[topicIndex]} level={level}/></>:level==="A2"?<><span>🔥 BOSS FINAL</span><h2>¿Qué tema es importante para ti y por qué?</h2><div><b>Tu respuesta necesita:</b><p>una opinión · una razón · un ejemplo · una pregunta</p></div></>:<><span>🔥 BOSS FINAL</span><h2>¿Qué parte de tu personalidad, tus valores o tus deseos sería difícil de defender si todos pudieran verla claramente?</h2><div><b>Tu respuesta necesita:</b><p>una postura · un matiz · una contradicción · una conclusión</p></div></>}</div></section>
      <section className="pr-boss-phrases"><small>FRASES ÚTILES · USEFUL PHRASES</small><div>{[["Para mí…","For me…"],["Pienso que…","I think that…"],["La razón es que…","The reason is that…"],["Por ejemplo…","For example…"],["Entiendo, pero…","I understand, but…"],["No sé, necesito pensar.","I don’t know, I need to think."],["¿Y para ti?","And for you?"]].map(pair=><Pair value={pair as [string,string]} key={pair[0]}/>)}</div></section>
      <div className="pr-center"><button className="pr-primary" onClick={()=>show("feedback")}>{ui("IR AL FEEDBACK →","GO TO FEEDBACK →")}</button></div>
    </section>}

    {screen==="feedback"&&<section className="pr-page pr-feedback">
      <header className="pr-inside-head"><button onClick={()=>show("map")}>{ui("← VOLVER AL MAPA","← BACK TO THE MAP")}</button><span>📊 RESULTADOS · RESULTS</span></header>
      <header className="pr-page-head"><span>{ui("FEEDBACK DE LA AVENTURA","ADVENTURE FEEDBACK")}</span><h1>{ui("Lo importante fue hablar.","Speaking was what mattered.")}</h1><p>{ui("Registra qué pudo hacer el alumno y qué necesita practicar.","Record what the learner could do and what needs practice.")}</p></header>
      <div className="pr-feedback-grid">{feedbackLabels.map((label,index)=><label key={label[0]}><span>{String(index+1).padStart(2,"0")}</span><div><b>{label[0]}</b><small>{label[1]}</small><input value={feedback[index]} onChange={event=>setFeedback(current=>current.map((value,i)=>i===index?event.target.value:value))} placeholder="Escribe acá… / Write here…"/></div></label>)}</div>
      <section className="pr-win-message"><span>✓</span><p>{level==="A0"?"¡Dijiste una frase en español! Elige otra pieza y dilo otra vez. / You said a Spanish sentence! Choose another chunk and say it again.":"Ganaste porque diste tu opinión, explicaste una razón y seguiste hablando aunque no conocías todas las palabras. 🎮"}</p></section>
      <div className="pr-center"><button className="pr-primary" onClick={()=>{setFeedback(feedbackLabels.map(()=>""));show("cover")}}>{ui("REINICIAR AVENTURA ↻","RESTART ADVENTURE ↻")}</button></div>
    </section>}

    {screen!=="cover"&&<div className="pr-dock"><button onClick={()=>show("map")}>{ui("🗺️ MAPA","🗺️ MAP")}</button><button onClick={()=>show("powerups")}>⭐ POWER-UPS</button><button onClick={()=>show("boss")}>🏰 BOSS</button></div>}
  </main>;
}
