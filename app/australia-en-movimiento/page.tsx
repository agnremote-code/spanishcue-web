"use client";

import {useMemo,useState,type CSSProperties,type ReactNode} from "react";
import Link from "next/link";
import "./style.css";
import {conditionalPractice,connectors,regions,speakingMoves,type AustraliaRegion,type Pair} from "./data";

type Screen="cover"|"atlas"|"lesson";
type GlyphName="map"|"shuffle"|"sound"|"trash"|"plus"|"home"|"wave"|"compass";

const mapShapes:Record<string,string>={
  western:"M118 137C151 96 205 78 252 87L301 74L326 97L318 365L346 405L310 427L258 416L205 390L168 355L127 337L98 294L86 239L101 183Z",
  northern:"M326 97L359 72L397 78L426 64L461 91L472 122L451 155L462 195L452 253L318 253L318 136Z",
  queensland:"M461 91L503 46L519 107L555 157L583 198L612 240L639 288L619 315L535 303L452 300L452 253L462 195L451 155L472 122Z",
  south:"M318 253L452 253L452 300L484 303L494 374L471 421L430 449L386 438L346 405L318 365Z",
  sydney:"M484 303L535 303L619 315L647 356L629 404L592 432L536 423L494 374Z",
  melbourne:"M471 421L494 374L536 423L592 432L557 455L508 456L483 444L430 449Z",
  canberra:"M548 359a11 11 0 1 0 22 0a11 11 0 1 0-22 0",
  tasmania:"M516 484L548 478L575 493L568 526L543 544L517 526L506 503Z"
};

function Glyph({name}:{name:GlyphName}){
  const paths:Record<GlyphName,ReactNode>={
    map:<><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z"/><path d="M9 3v15M15 6v15"/></>,
    shuffle:<><path d="M4 6h3c5 0 5 12 10 12h3"/><path d="m17 15 3 3-3 3M4 18h3c2 0 3.2-1.8 4.2-4M13 9c1-2 2.2-3 4-3h3M17 3l3 3-3 3"/></>,
    sound:<><path d="M5 10v4h4l5 4V6l-5 4Z"/><path d="M17 9c1.5 1.5 1.5 4.5 0 6M19.5 6.5c4 4 4 7 0 11"/></>,
    trash:<><path d="M5 7h14M9 7V4h6v3M8 10v9M12 10v9M16 10v9M7 7l1 14h8l1-14"/></>,
    plus:<path d="M12 5v14M5 12h14"/>,
    home:<path d="m4 11 8-7 8 7v9h-6v-6h-4v6H4Z"/>,
    wave:<><path d="M3 15c3 0 3-3 6-3s3 3 6 3 3-3 6-3"/><path d="M3 20c3 0 3-3 6-3s3 3 6 3 3-3 6-3M4 8c3-4 8-5 13-2"/></>,
    compass:<><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5Z"/></>
  };
  return <svg className="au-glyph" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function Character({region,large=false}:{region:AustraliaRegion;large?:boolean}){
  const positions=["0% 0%","33.333% 0%","66.666% 0%","100% 0%","0% 100%","33.333% 100%","66.666% 100%","100% 100%"];
  return <div className={`au-character char-${region.character} ${large?"large":""}`} style={{"--char-pos":positions[region.character],"--delay":`${region.character*-.37}s`} as CSSProperties} role="img" aria-label={`Personaje 3D de ${region.name}`}/>;
}

export default function AustraliaEnMovimiento(){
  const [screen,setScreen]=useState<Screen>("cover");
  const [active,setActive]=useState<AustraliaRegion>(regions[0]);
  const [question,setQuestion]=useState(0);
  const [visited,setVisited]=useState<Set<string>>(new Set());
  const [showEnglish,setShowEnglish]=useState(true);
  const [answerParts,setAnswerParts]=useState<Pair[]>([]);
  const [revealed,setRevealed]=useState<Set<number>>(new Set());
  const current=active.questions[question];
  const answerEs=answerParts.map(part=>part.es.replace(/[.…]+$/g,"")).join(" ");
  const answerEn=answerParts.map(part=>part.en.replace(/[.…]+$/g,"")).join(" ");
  const progress=Math.round(visited.size/regions.length*100);
  const activeIndex=regions.findIndex(region=>region.id===active.id);
  const nextRegion=regions[(activeIndex+1)%regions.length];
  const atlasFact=useMemo(()=>`${regions.length} territorios · ${regions.reduce((sum,region)=>sum+region.questions.length,0)} preguntas`,[]);

  const show=(next:Screen)=>{setScreen(next);window.scrollTo({top:0,behavior:"smooth"})};
  const enter=(region:AustraliaRegion,start=0)=>{setActive(region);setQuestion(start);setAnswerParts([]);setVisited(old=>new Set([...old,region.id]));show("lesson")};
  const surprise=()=>{const pool=regions.filter(region=>region.id!==active.id);const next=pool[Math.floor(Math.random()*pool.length)]||regions[0];enter(next,Math.floor(Math.random()*next.questions.length))};
  const moveQuestion=(next:number)=>{setQuestion(Math.max(0,Math.min(active.questions.length-1,next)));setAnswerParts([]);document.querySelector(".au-question-card")?.scrollIntoView({behavior:"smooth",block:"center"})};
  const speak=(text:string)=>{if(typeof window==="undefined"||!("speechSynthesis" in window))return;window.speechSynthesis.cancel();const voice=new SpeechSynthesisUtterance(text);voice.lang="es-AR";voice.rate=.82;window.speechSynthesis.speak(voice)};
  const add=(part:Pair)=>setAnswerParts(parts=>[...parts,part]);

  return <main className={`au-app ${showEnglish?"":"au-hide-en"}`}>
    <nav className="au-nav">
      <Link href="/" className="au-brand"><span><img src="/chespanish-guide-avatar.png" alt=""/></span><div><b>CHESPANISH</b><small>AUSTRALIAN SPEAKING ADVENTURE</small></div></Link>
      <div className="au-progress"><span>TERRITORIOS EXPLORADOS · EXPLORED</span><i><b style={{width:`${progress}%`}}/></i><strong>{visited.size}<small>/8</small></strong></div>
      <div className="au-nav-actions"><button onClick={surprise}><Glyph name="shuffle"/> SORPRESA</button><button onClick={()=>show(screen==="cover"?"atlas":"cover")}><Glyph name={screen==="cover"?"map":"home"}/>{screen==="cover"?" MAPA":" INICIO"}</button></div>
    </nav>

    {screen==="cover"&&<section className="au-cover">
      <div className="au-sun sun-one"/><div className="au-sun sun-two"/>
      <div className="au-cover-copy">
        <div className="au-eyebrow"><span>A1→A2</span><i/>8 TERRITORIOS · 1 AVENTURA</div>
        <p className="au-kicker">MAR · CIUDADES · ANIMALES · GENTE · IDEAS</p>
        <h1>AUSTRALIA<br/><em>EN MOVIMIENTO</em></h1>
        <p className="au-lead">Una clase para empezar a hablar y no quedarse en respuestas obvias. <b>Sídney enseña el condicional cero.</b> El resto del país abre siete temas completamente diferentes.<span className="au-en">A class designed to start speaking and move beyond obvious answers. Sydney teaches the zero conditional. The rest of the country opens seven completely different topics.</span></p>
        <div className="au-cover-actions"><button onClick={()=>show("atlas")}>ENTRAR AL MAPA <Glyph name="map"/><small className="au-en">ENTER THE MAP</small></button><button className="ghost" onClick={surprise}><Glyph name="shuffle"/> ELEGÍ POR MÍ<small className="au-en">PICK FOR ME</small></button></div>
        <div className="au-stats"><article><b>08</b><span>estados y territorios<small>states & territories</small></span></article><article><b>48</b><span>preguntas para hablar<small>speaking questions</small></span></article><article><b>01</b><span>laboratorio gramatical<small>grammar lab</small></span></article></div>
      </div>
      <div className="au-cover-art"><img src="/australia-3d-hero.png" alt="Mapa 3D de Australia con mar, ciudades, desierto y animales"/><div className="au-orbit orbit-one"><span>SYDNEY</span><b>ZERO</b></div><div className="au-orbit orbit-two"><span>REEF</span><b>03</b></div><div className="au-orbit orbit-three"><span>TASMANIA</span><b>07</b></div></div>
      <div className="au-wave-edge" aria-hidden="true"/>
    </section>}

    {screen==="atlas"&&<section className="au-atlas">
      <header className="au-atlas-head"><div><span>EL MAPA REAL · THE REAL MAP</span><h1>Ocho territorios.<br/><em>Ocho conversaciones distintas.</em></h1></div><div><p>Elegí directamente en el mapa. Cada territorio tiene su propio personaje 3D, tema, vocabulario y seis preguntas A1/A2.</p><span className="au-en">Choose directly on the map. Every territory has its own 3D character, topic, vocabulary and six A1/A2 questions.</span><button onClick={surprise}><Glyph name="shuffle"/> SORPRENDEME · SURPRISE ME</button></div></header>
      <div className="au-map-layout">
        <section className="au-map-card">
          <header><span><Glyph name="compass"/> AUSTRALIA · {atlasFact}</span><b>ÍNDICO ↔ PACÍFICO</b></header>
          <div className="au-map-stage">
            <div className="au-ocean-label indian">OCÉANO ÍNDICO</div><div className="au-ocean-label pacific">OCÉANO PACÍFICO</div>
            <svg viewBox="55 25 625 535" role="img" aria-labelledby="map-title map-description">
              <title id="map-title">Mapa interactivo de los estados y territorios de Australia</title><desc id="map-description">Seleccioná Nueva Gales del Sur, Victoria, Queensland, Territorio del Norte, Australia Meridional, Australia Occidental, Tasmania o el Territorio de la Capital Australiana.</desc>
              <defs><filter id="land-shadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#063452" floodOpacity=".35"/></filter></defs>
              <g className="au-map-depth" transform="translate(0 11)">{regions.filter(region=>region.id!=="canberra").map(region=><path key={region.id} d={mapShapes[region.id]} fill="#0a4e64"/>)}</g>
              <g filter="url(#land-shadow)">{regions.map(region=><path key={region.id} d={mapShapes[region.id]} className={`au-state ${active.id===region.id?"active":""} ${visited.has(region.id)?"visited":""}`} style={{"--region":region.color} as CSSProperties} onClick={()=>setActive(region)} onDoubleClick={()=>enter(region)} tabIndex={0} role="button" aria-label={`${region.name}. ${region.topic.es}`} onKeyDown={event=>{if(event.key==="Enter"||event.key===" ")setActive(region)}}/>)}</g>
              {regions.map(region=>{const labels:Record<string,[number,number]>={western:[220,250],northern:[385,170],queensland:[535,225],south:[385,345],sydney:[565,360],melbourne:[510,428],canberra:[559,363],tasmania:[540,512]};const [x,y]=labels[region.id];return <g key={region.id} className={`au-map-label label-${region.id}`} transform={`translate(${x} ${y})`} onClick={()=>setActive(region)}><circle r={region.id==="canberra"?16:22}/><text textAnchor="middle" dominantBaseline="central">{region.code}</text></g>})}
            </svg>
            <div className="au-map-tip"><b>1 CLIC</b> para mirar · <b>2 CLICS</b> para entrar<span className="au-en">1 click to preview · 2 clicks to enter</span></div>
          </div>
        </section>

        <aside className="au-region-preview" style={{"--region":active.color} as CSSProperties}>
          <div className="au-preview-top"><span>{active.number}</span><b>{active.code}</b><Character region={active}/></div>
          <small>{active.capital} · A1→A2</small><h2>{active.name}</h2><h3>{active.topic.es}</h3><p>{active.fact.es}</p><p className="au-en">{active.fact.en}</p><div className="au-preview-places"><b>LUGARES DE ESTA RUTA</b><span>{active.places.map(place=><i key={place.es}>{place.es}</i>)}</span></div><div className="au-preview-tags"><span>6 PREGUNTAS</span><span>WORDBANK</span><span>AUDIO</span></div><button onClick={()=>enter(active)}>ABRIR TERRITORIO <b>→</b><small className="au-en">OPEN TERRITORY</small></button>
        </aside>
      </div>

      <section className="au-route-grid"><header><span>TODA LA RUTA · THE FULL ROUTE</span><h2>No se repite ningún tema.</h2><p>Cada tarjeta cambia la pregunta central, la energía visual y el tipo de conversación.</p></header><div>{regions.map(region=><button key={region.id} className={`${active.id===region.id?"active":""} ${visited.has(region.id)?"visited":""}`} style={{"--region":region.color} as CSSProperties} onClick={()=>setActive(region)} onDoubleClick={()=>enter(region)}><span>{region.number}</span><Character region={region}/><small>{region.code} · {region.capital}</small><b>{region.topic.es}</b><em className="au-en">{region.topic.en}</em><p>{region.places.slice(0,3).map(place=>place.es).join(" · ")}</p><i>EXPLORAR →</i></button>)}</div></section>
    </section>}

    {screen==="lesson"&&<section className="au-lesson" style={{"--region":active.color} as CSSProperties}>
      <header className="au-lesson-hero">
        <div className="au-lesson-top"><button onClick={()=>show("atlas")}>← MAPA · MAP</button><span>TERRITORIO {active.number} · {active.code}</span><div><button className={showEnglish?"active":""} onClick={()=>setShowEnglish(value=>!value)}>EN {showEnglish?"ON":"OFF"}</button><button onClick={surprise}><Glyph name="shuffle"/> OTRA</button></div></div>
        <div className="au-lesson-copy"><small>{active.topic.es}</small><h1>{active.name}</h1><h2 className="au-en">{active.nameEn} · {active.topic.en}</h2><p><b>{active.hook.es}</b><span className="au-en">{active.hook.en}</span></p><div><span>A1→A2</span><span>6 preguntas</span><span>{active.id==="sydney"?"Condicional cero":"Conversación"}</span></div></div>
        <div className="au-lesson-art">{active.id==="sydney"?<img src="/australia-sydney-lab.png" alt="Escena 3D de Sídney con sol, lluvia, ferry y hábitos cotidianos"/>:<Character region={active} large/>}<i/><i/></div>
      </header>

      <div className="au-classroom">
        <section className="au-mission"><span>TU MISIÓN · YOUR MISSION</span><div><b>{active.mission.es}</b><em className="au-en">{active.mission.en}</em></div><strong>{active.id==="sydney"?"REAL + REAL":"UNA IDEA + UNA RAZÓN"}<small className="au-en">{active.id==="sydney"?"REAL + REAL":"ONE IDEA + ONE REASON"}</small></strong></section>

        <section className="au-place-route"><header><span>RUTA REAL · REAL ROUTE</span><h2>Estos lugares aparecen en las preguntas.</h2><p className="au-en">These places appear in the questions.</p></header><div>{active.places.map((place,index)=><article key={place.es}><span>{String(index+1).padStart(2,"0")}</span><b>{place.es}</b><small className="au-en">{place.en}</small></article>)}</div></section>

        {active.id==="sydney"&&<SydneyGrammar showEnglish={showEnglish} revealed={revealed} setRevealed={setRevealed}/>} 

        <section className="au-question-card">
          <div className="au-question-number"><span>PREGUNTA</span><b>{String(question+1).padStart(2,"0")}</b><i>/ 06</i></div>
          <div className="au-question-copy"><small>{active.topic.es}</small><h2>{current.prompt.es}</h2><p className="au-en">{current.prompt.en}</p><button onClick={()=>speak(current.prompt.es)}><Glyph name="sound"/> ESCUCHAR · LISTEN</button></div>
          <Character region={active}/>
        </section>

        <section className="au-quick"><header><span>1 · ELEGÍ UN COMIENZO · PICK A START</span><p>Tocá una opción. Después agregá palabras.</p></header><div>{current.quick.map(part=><button key={part.es} onClick={()=>add(part)}><b>{part.es}</b><small className="au-en">{part.en}</small><i>+</i></button>)}</div></section>

        <section className="au-tools-row">
          <article><span>2 · CONECTORES · CONNECTORS</span><div>{connectors.map(part=><button key={part.es} onClick={()=>add(part)}><b>{part.es}</b><small className="au-en">{part.en}</small><i>+</i></button>)}</div></article>
          <article><span>3 · WORDBANK · WORD BANK</span><div>{active.words.map(part=><button key={part.es} onClick={()=>add(part)}><b>{part.es}</b><small className="au-en">{part.en}</small><i>+</i></button>)}</div></article>
        </section>

        <section className="au-answer" aria-live="polite"><header><div><span>TU RESPUESTA · YOUR ANSWER</span><h2>Armala, escuchala y decila.</h2><p className="au-en">Build it, listen to it and say it.</p></div><div><button disabled={!answerParts.length} onClick={()=>speak(answerEs)}><Glyph name="sound"/> ESCUCHAR</button><button disabled={!answerParts.length} onClick={()=>setAnswerParts([])}><Glyph name="trash"/> BORRAR</button></div></header><div className={answerParts.length?"has-answer":""}>{answerParts.length?answerParts.map((part,index)=><button key={`${part.es}-${index}`} onClick={()=>setAnswerParts(parts=>parts.filter((_,i)=>i!==index))}><b>{part.es}</b><small className="au-en">{part.en}</small></button>):<p><b>Tocá opciones arriba para construir una respuesta.</b><span className="au-en">Tap the options above to build an answer.</span></p>}</div>{answerParts.length>0&&<aside><b>{answerEs}</b><span className="au-en">{answerEn}</span></aside>}</section>

        <section className="au-speaking-moves"><header><span>UNA MÁS · ONE MORE</span><h2>Hacé crecer la conversación.</h2></header><div>{speakingMoves.map((move,index)=><button key={move.es}><span>0{index+1}</span><b>{move.es}</b><small className="au-en">{move.en}</small></button>)}</div></section>

        <nav className="au-question-nav"><button disabled={question===0} onClick={()=>moveQuestion(question-1)}>← ANTERIOR · PREVIOUS</button><div>{active.questions.map((_,index)=><button key={index} className={question===index?"active":""} onClick={()=>moveQuestion(index)} aria-label={`Pregunta ${index+1}`}>{index+1}</button>)}</div><button onClick={()=>question===5?enter(nextRegion):moveQuestion(question+1)}>{question===5?`SIGUIENTE TERRITORIO · ${nextRegion.code} →`:"SIGUIENTE · NEXT →"}</button></nav>
      </div>
    </section>}
  </main>;
}

function SydneyGrammar({showEnglish,revealed,setRevealed}:{showEnglish:boolean;revealed:Set<number>;setRevealed:(value:Set<number>)=>void}){
  const toggle=(index:number)=>{const next=new Set(revealed);next.has(index)?next.delete(index):next.add(index);setRevealed(next)};
  return <section className={`au-grammar-lab ${showEnglish?"":"compact"}`}>
    <header><div><span>LABORATORIO DE SÍDNEY · SYDNEY LAB</span><h2>Un solo condicional. Cinco pasos.</h2><p className="au-en">One conditional. Five steps.</p></div><b>SI + PRESENTE → PRESENTE / IMPERATIVO</b></header>
    <div className="au-learning-path"><article><span>01</span><b>ENTENDER</b><small className="au-en">UNDERSTAND</small><p>¿Esto pasa siempre o normalmente?</p><em className="au-en">Does this always or normally happen?</em></article><i>→</i><article><span>02</span><b>ELEGIR</b><small className="au-en">CHOOSE</small><p>Condición real + resultado real.</p><em className="au-en">Real condition + real result.</em></article><i>→</i><article><span>03</span><b>CONJUGAR</b><small className="au-en">CONJUGATE</small><p>Presente después de “si”.</p><em className="au-en">Present after “si”.</em></article><i>→</i><article><span>04</span><b>PRACTICAR</b><small className="au-en">PRACTISE</small><p>Comprobá el patrón.</p><em className="au-en">Check the pattern.</em></article><i>→</i><article><span>05</span><b>HABLAR</b><small className="au-en">SPEAK</small><p>Usalo en el puerto y la playa.</p><em className="au-en">Use it at the harbour and beach.</em></article></div>
    <div className="au-grammar-core"><article><span>CONDICIÓN · CONDITION</span><h3>Si + presente</h3><p>Una situación real, habitual o comprobable.</p><em className="au-en">A real, habitual or verifiable situation.</em></article><i>→</i><article><span>RESULTADO · RESULT</span><h3>presente o imperativo</h3><p>Un resultado normal o una instrucción.</p><em className="au-en">A normal result or an instruction.</em></article></div>
    <aside><b>REAL + REAL</b><p>No imaginamos otro mundo. Hablamos de lo que pasa normalmente.</p><span className="au-en">We are not imagining another world. We are talking about what normally happens.</span></aside>
    <section className="au-conjugation"><header><span>03 · CONJUGACIÓN ÚTIL</span><h3>Cuatro verbos para sobrevivir Sídney.</h3></header><div className="au-table"><div><b>PERSONA</b><b>HACER</b><b>TENER</b><b>IR</b><b>ESTAR</b></div><div><span>yo</span><b>hago</b><b>tengo</b><b>voy</b><b>estoy</b></div><div><span>vos</span><b>hacés</b><b>tenés</b><b>vas</b><b>estás</b></div><div><span>él / ella</span><b>hace</b><b>tiene</b><b>va</b><b>está</b></div><div><span>nosotros/as</span><b>hacemos</b><b>tenemos</b><b>vamos</b><b>estamos</b></div><div><span>ellos/as</span><b>hacen</b><b>tienen</b><b>van</b><b>están</b></div></div></section>
    <section className="au-practice"><header><span>04 · PRÁCTICA · PRACTICE</span><h3>Tocá para ver la respuesta y el porqué.</h3></header><div>{conditionalPractice.map((item,index)=><button key={item.sentence} className={revealed.has(index)?"revealed":""} onClick={()=>toggle(index)}><span>0{index+1}</span><b>{item.sentence}</b>{revealed.has(index)?<><strong>{item.answer}</strong><p>{item.why.es}</p><em className="au-en">{item.why.en}</em></>:<small>VER RESPUESTA · SHOW ANSWER</small>}</button>)}</div></section>
  </section>;
}
