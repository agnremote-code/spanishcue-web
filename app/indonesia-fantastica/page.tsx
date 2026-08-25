"use client";

import { useMemo, useState, type CSSProperties } from "react";
import "./style.css";
import { answerTools, provinces, regions, type Pair, type Province } from "./data";

type Screen = "cover" | "map" | "province";
type Question = { es: string; en: string; starter: Pair; choices: Pair[]; spark: Pair };

const smallChoices = {
  yesNo: [{es:"Sí",en:"Yes"},{es:"No",en:"No"},{es:"Un poco",en:"A little"}],
  size: [{es:"Grande",en:"Big"},{es:"Pequeño/a",en:"Small"},{es:"Mediano/a",en:"Medium"}],
  feeling: [{es:"Feliz",en:"Happy"},{es:"Tranquilo/a",en:"Calm"},{es:"Nervioso/a",en:"Nervous"}],
  weather: [{es:"Hace calor",en:"It’s hot"},{es:"Hace frío",en:"It’s cold"},{es:"Llueve",en:"It’s raining"},{es:"Hay sol",en:"It’s sunny"}],
};

function questionsFor(p: Province): Question[] {
  return [
    {es:`¿Te gusta ${p.place.es}?`,en:`Do you like ${p.place.en}?`,starter:{es:"Sí, me gusta… / No, no me gusta…",en:"Yes, I like… / No, I don’t like…"},choices:smallChoices.yesNo,spark:{es:"¿Por qué?",en:"Why?"}},
    {es:`¿Querés ${p.action.es}?`,en:`Do you want to ${p.action.en}?`,starter:{es:"Sí, quiero… / No, no quiero…",en:"Yes, I want to… / No, I don’t want to…"},choices:smallChoices.yesNo,spark:{es:"¿Con quién?",en:"With whom?"}},
    {es:`¿Preferís ${p.choiceA.es} o ${p.choiceB.es}?`,en:`Do you prefer ${p.choiceA.en} or ${p.choiceB.en}?`,starter:{es:`Prefiero ${p.choiceA.es} / ${p.choiceB.es}.`,en:`I prefer ${p.choiceA.en} / ${p.choiceB.en}.`},choices:[p.choiceA,p.choiceB],spark:{es:"¿Por qué?",en:"Why?"}},
    {es:`¿De qué color es ${p.thing.es}?`,en:`What colour is ${p.thing.en}?`,starter:{es:"Es…",en:"It is…"},choices:[{es:"Rojo/a",en:"Red"},{es:"Azul",en:"Blue"},{es:"Verde",en:"Green"},{es:"Dorado/a",en:"Golden"}],spark:{es:"¿Te gusta ese color?",en:"Do you like that colour?"}},
    {es:`¿${p.animal.es} es grande, pequeño/a, amable o peligroso/a?`,en:`Is ${p.animal.en} big, small, friendly or dangerous?`,starter:{es:"Es…",en:"It is…"},choices:[...smallChoices.size,{es:"Amable",en:"Friendly"},{es:"Peligroso/a",en:"Dangerous"}],spark:{es:"¿Tenés miedo?",en:"Are you afraid?"}},
    {es:`¿Qué tiempo hace en ${p.name}: calor, frío, lluvia o sol?`,en:`What is the weather like in ${p.name}: hot, cold, rainy or sunny?`,starter:{es:"Hace… / Hay…",en:"It is… / There is…"},choices:smallChoices.weather,spark:{es:"¿Qué ropa usás?",en:"What clothes do you wear?"}},
    {es:`¿Querés probar ${p.food.es}?`,en:`Do you want to try ${p.food.en}?`,starter:{es:"Sí, quiero probar… / No, gracias.",en:"Yes, I want to try… / No, thank you."},choices:[{es:"Sí, por favor",en:"Yes, please"},{es:"No, gracias",en:"No, thank you"},{es:"Tal vez",en:"Maybe"}],spark:{es:"¿Es dulce o salado?",en:"Is it sweet or salty?"}},
    {es:`¿Cómo te sentís en ${p.place.es}?`,en:`How do you feel in ${p.place.en}?`,starter:{es:"Me siento…",en:"I feel…"},choices:smallChoices.feeling,spark:{es:"¿Por qué?",en:"Why?"}},
    {es:"¿Viajás solo/a, con amigos, con tu familia o con una persona especial?",en:"Do you travel alone, with friends, with your family or with someone special?",starter:{es:"Viajo…",en:"I travel…"},choices:[{es:"Solo/a",en:"Alone"},{es:"Con amigos",en:"With friends"},{es:"Con mi familia",en:"With my family"},{es:"Con alguien especial",en:"With someone special"}],spark:{es:"¿Quién?",en:"Who?"}},
    {es:`Inventá un nombre para ${p.thing.es}. ¿Cómo se llama?`,en:`Invent a name for ${p.thing.en}. What is it called?`,starter:{es:"Se llama…",en:"It is called…"},choices:[{es:"Un nombre divertido",en:"A funny name"},{es:"Un nombre mágico",en:"A magic name"},{es:"Un nombre misterioso",en:"A mysterious name"}],spark:{es:"¿Qué poder tiene?",en:"What power does it have?"}},
  ];
}

function Atmosphere() {
  return <div className="id-atmosphere" aria-hidden="true"><i/><i/><i/><i/><span>✦</span><span>✧</span><span>✦</span></div>;
}

export default function IndonesiaFantastica() {
  const [screen,setScreen] = useState<Screen>("cover");
  const [active,setActive] = useState<Province>(provinces[16]);
  const [question,setQuestion] = useState(0);
  const [region,setRegion] = useState("Todas");
  const [query,setQuery] = useState("");
  const [visited,setVisited] = useState<Set<string>>(new Set());

  const list = useMemo(()=>provinces.filter(p=>(region==="Todas"||p.region===region)&&`${p.name} ${p.title.es} ${p.title.en}`.toLowerCase().includes(query.toLowerCase())),[region,query]);
  const questions = useMemo(()=>questionsFor(active),[active]);
  const current = questions[question];
  const progress = Math.round((visited.size/provinces.length)*100);

  const show = (next:Screen) => { setScreen(next); window.scrollTo({top:0,behavior:"smooth"}); };
  const enter = (p:Province, start=0) => { setActive(p); setQuestion(start); setVisited(v=>new Set([...v,p.id])); show("province"); };
  const surprise = () => { const pool=provinces.filter(p=>p.id!==active.id); const p=pool[Math.floor(Math.random()*pool.length)]||provinces[0]; enter(p,Math.floor(Math.random()*10)); };

  const wordbank: Pair[] = [active.place,active.thing,active.action,active.food,active.animal,active.choiceA,active.choiceB,{es:"mágico/a",en:"magical"}];

  return <main className="id-app">
    <nav className="id-nav">
      <a href="/" className="id-brand"><span><img src="/chespanish-guide-avatar.png" alt=""/></span><div><b>CHESPANISH</b><small>CONVERSATION ADVENTURES</small></div></a>
      <div className="id-nav-progress"><span>PROVINCIAS · PROVINCES</span><i><b style={{width:`${progress}%`}}/></i><strong>{visited.size}/38</strong></div>
      <div className="id-nav-actions"><button onClick={surprise}>🎲 SORPRESA</button><button onClick={()=>show(screen==="cover"?"map":"cover")}>{screen==="cover"?"MAPA":"INICIO"}</button></div>
    </nav>

    {screen==="cover"&&<section className="id-cover">
      <Atmosphere/>
      <div className="id-cover-copy">
        <div className="id-kicker"><span>A0</span> 1000% CONVERSACIÓN · 1000% CONVERSATION</div>
        <p className="id-overline">UNA AVENTURA POR LAS 38 PROVINCIAS · AN ADVENTURE THROUGH 38 PROVINCES</p>
        <h1>INDONESIA<br/><em>FANTÁSTICA</em></h1>
        <p className="id-lead">Elegí una provincia, entrá en su mundo imposible y empezá a hablar desde la primera pregunta.<b> Sin gramática. Sin respuestas perfectas. Todo bilingüe.</b><span>Choose a province, enter its impossible world and start speaking from the first question. No grammar. No perfect answers. Everything is bilingual.</span></p>
        <div className="id-cover-actions"><button onClick={()=>show("map")}>ENTRAR AL ARCHIPIÉLAGO <span>→</span><small>ENTER THE ARCHIPELAGO</small></button><button className="ghost" onClick={surprise}>🎲 DESTINO SORPRESA<small>SURPRISE DESTINATION</small></button></div>
        <div className="id-stats"><article><b>38</b><span>provincias<br/><small>provinces</small></span></article><article><b>380</b><span>preguntas<br/><small>questions</small></span></article><article><b>100%</b><span>recursos bilingües<br/><small>bilingual support</small></span></article></div>
      </div>
      <div className="id-hero-art" aria-hidden="true"><img src="/indonesia-fantasy-hero.png" alt=""/><span className="id-floating-tag tag-bali">BALI</span><span className="id-floating-tag tag-java">JAVA</span><span className="id-floating-tag tag-papua">PAPUA</span></div>
      <div className="id-waves" aria-hidden="true"><i/><i/><i/></div>
    </section>}

    {screen==="map"&&<section className="id-map">
      <header className="id-map-head"><div><span>EL ARCHIPIÉLAGO · THE ARCHIPELAGO</span><h1>38 puertas para<br/><em>empezar a hablar.</em></h1></div><div><p>Elegí cualquier provincia. No tenés que seguir un orden. Dentro de cada mundo hay vocabulario, opciones y diez preguntas muy simples.</p><span>Choose any province. You do not need to follow an order. Every world has vocabulary, choices and ten very simple questions.</span><button onClick={surprise}>🎲 ELEGIR POR MÍ · CHOOSE FOR ME</button></div></header>
      <section className="id-how"><article><b>1</b><div><strong>ELEGÍ · CHOOSE</strong><span>una provincia · a province</span></div></article><i>→</i><article><b>2</b><div><strong>MIRÁ · LOOK</strong><span>el wordbank bilingüe · bilingual wordbank</span></div></article><i>→</i><article><b>3</b><div><strong>RESPONDÉ · ANSWER</strong><span>con una palabra o una frase · with one word or one sentence</span></div></article><i>→</i><article><b>4</b><div><strong>SEGUÍ · CONTINUE</strong><span>con la mini pregunta · with the mini follow-up</span></div></article></section>
      <div className="id-map-tools"><div className="id-regions">{regions.map(r=><button className={region===r?"active":""} onClick={()=>setRegion(r)} key={r}>{r}</button>)}</div><label><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar provincia · Search province"/></label></div>
      <div className="id-province-grid">{list.map((p,index)=><button key={p.id} onClick={()=>enter(p)} className={`id-province-card ${visited.has(p.id)?"visited":""}`} style={{"--province":p.color,"--delay":`${(index%8)*.05}s`} as CSSProperties}>
        <span className="id-card-number">{p.number}</span><span className="id-card-region">{p.region}</span><span className="id-card-icon">{p.icon}<i/></span><small>{p.name}</small><b>{p.title.es}</b><em>{p.title.en}</em><span className="id-card-enter">ENTRAR · ENTER <b>→</b></span>
      </button>)}</div>
      {!list.length&&<div className="id-empty"><b>Sin resultados · No results</b><span>Probá otra provincia o región. · Try another province or region.</span></div>}
    </section>}

    {screen==="province"&&<section className="id-world" style={{"--province":active.color} as CSSProperties}>
      <header className="id-world-hero">
        <Atmosphere/>
        <div className="id-world-top"><button onClick={()=>show("map")}>← MAPA · MAP</button><span>DESTINO {active.number} · {active.region}</span><button onClick={surprise}>🎲 OTRO MUNDO</button></div>
        <div className="id-world-copy"><small>{active.name}</small><span className="id-world-icon">{active.icon}</span><h1>{active.title.es}</h1><h2>{active.title.en}</h2><p><b>{active.scene.es}</b><span>{active.scene.en}</span></p></div>
        <div className="id-world-image" aria-hidden="true"><img src="/indonesia-fantasy-hero.png" alt=""/></div>
      </header>

      <div className="id-classroom">
        <section className="id-rule"><span>ÚNICA REGLA · ONLY RULE</span><b>Respondé como puedas: una palabra también cuenta.</b><em>Answer any way you can: one word counts too.</em></section>

        <section className="id-question-stage">
          <div className="id-question-count"><span>PREGUNTA · QUESTION</span><b>{String(question+1).padStart(2,"0")} <i>/ 10</i></b></div>
          <div className="id-question-copy"><small>{active.name} · {active.title.en}</small><h2>{current.es}</h2><p>{current.en}</p></div>
          <div className="id-question-orbit" aria-hidden="true"><span>{active.icon}</span><i/><i/></div>
        </section>

        <section className="id-support-grid">
          <article className="id-starter"><span>EMPEZÁ ASÍ · START LIKE THIS</span><b>{current.starter.es}</b><em>{current.starter.en}</em></article>
          <article className="id-options"><span>PALABRAS RÁPIDAS · QUICK WORDS</span><div>{current.choices.map(choice=><button key={choice.es}><b>{choice.es}</b><small>{choice.en}</small></button>)}</div></article>
          <article className="id-spark"><span>SEGUÍ HABLANDO · KEEP TALKING</span><b>{current.spark.es}</b><em>{current.spark.en}</em></article>
        </section>

        <section className="id-wordbank"><header><span>WORDBANK DEL MUNDO · WORLD WORDBANK</span><h2>Todo lo que necesitás está acá.</h2><p>Everything you need is right here.</p></header><div>{wordbank.map((word,index)=><article key={`${word.es}-${index}`}><span>{["📍","✨","⚡","🍽️","🐾","◐","◒","★"][index]}</span><b>{word.es}</b><small>{word.en}</small></article>)}</div></section>

        <section className="id-answer-tools"><header><span>BOTIQUÍN DE RESPUESTAS · ANSWER TOOLKIT</span><h2>Robá un comienzo y completalo.</h2><p>Borrow a beginning and complete it.</p></header><div>{answerTools.map(tool=><article key={tool.es}><b>{tool.es}</b><span>{tool.en}</span></article>)}</div></section>

        <nav className="id-question-nav"><button disabled={question===0} onClick={()=>setQuestion(q=>Math.max(0,q-1))}>← ANTERIOR · PREVIOUS</button><div>{questions.map((_,index)=><button aria-label={`Pregunta ${index+1}`} className={index===question?"active":""} onClick={()=>setQuestion(index)} key={index}>{index+1}</button>)}</div><button onClick={()=>question===9?surprise():setQuestion(q=>q+1)}>{question===9?"NUEVO MUNDO · NEW WORLD →":"SIGUIENTE · NEXT →"}</button></nav>
      </div>
    </section>}
  </main>;
}
