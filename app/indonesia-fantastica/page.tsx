"use client";

import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import "./style.css";
import { answerTools, provinces as provinceSeed, regions, type Pair, type Province } from "./data";
import { authenticProvinces } from "./authentic-data";

type Screen = "cover" | "map" | "province";
type Question = { es: string; en: string; starter: Pair; choices: Pair[]; spark: Pair };
type GlyphName = "map" | "shuffle" | "sound" | "clear" | "compass" | "plus" | "home";

const smallChoices = {
  yesNo: [{es:"Sí",en:"Yes"},{es:"No",en:"No"},{es:"Un poco",en:"A little"}],
  size: [{es:"Grande",en:"Big"},{es:"Pequeño/a",en:"Small"},{es:"Mediano/a",en:"Medium"}],
  feeling: [{es:"Feliz",en:"Happy"},{es:"Tranquilo/a",en:"Calm"},{es:"Nervioso/a",en:"Nervous"}],
  weather: [{es:"Hace calor",en:"It’s hot"},{es:"Hace frío",en:"It’s cold"},{es:"Llueve",en:"It’s raining"},{es:"Hay sol",en:"It’s sunny"}],
};

const localNames: Record<string,string> = {
  aceh:"Aceh", "north-sumatra":"Sumatera Utara", "west-sumatra":"Sumatera Barat", riau:"Riau", "riau-islands":"Kepulauan Riau", jambi:"Jambi", "south-sumatra":"Sumatera Selatan", "bangka-belitung":"Kepulauan Bangka Belitung", bengkulu:"Bengkulu", lampung:"Lampung",
  jakarta:"DKI Jakarta", banten:"Banten", "west-java":"Jawa Barat", "central-java":"Jawa Tengah", yogyakarta:"DI Yogyakarta", "east-java":"Jawa Timur",
  bali:"Bali", "west-nusa-tenggara":"Nusa Tenggara Barat", "east-nusa-tenggara":"Nusa Tenggara Timur",
  "west-kalimantan":"Kalimantan Barat", "central-kalimantan":"Kalimantan Tengah", "south-kalimantan":"Kalimantan Selatan", "east-kalimantan":"Kalimantan Timur", "north-kalimantan":"Kalimantan Utara",
  "north-sulawesi":"Sulawesi Utara", gorontalo:"Gorontalo", "central-sulawesi":"Sulawesi Tengah", "west-sulawesi":"Sulawesi Barat", "south-sulawesi":"Sulawesi Selatan", "southeast-sulawesi":"Sulawesi Tenggara",
  maluku:"Maluku", "north-maluku":"Maluku Utara", "west-papua":"Papua Barat", "southwest-papua":"Papua Barat Daya", papua:"Papua", "central-papua":"Papua Tengah", "highland-papua":"Papua Pegunungan", "south-papua":"Papua Selatan",
};

const regionCopy: Record<string,{es:string;en:string;code:string}> = {
  Sumatra:{es:"Selvas, lagos y café",en:"Jungles, lakes & coffee",code:"SUM"},
  Java:{es:"Volcanes, ciudades y arte",en:"Volcanoes, cities & art",code:"JAV"},
  "Bali y Nusa Tenggara":{es:"Templos, dragones y mares",en:"Temples, dragons & seas",code:"NUS"},
  Kalimantan:{es:"Ríos y bosques infinitos",en:"Rivers & endless forests",code:"KAL"},
  Sulawesi:{es:"Barcos, música y coral",en:"Boats, music & coral",code:"SUL"},
  Maluku:{es:"Las islas de las especias",en:"The spice islands",code:"MAL"},
  Papua:{es:"Montañas y colores salvajes",en:"Mountains & wild colours",code:"PAP"},
};

const provinces: Province[] = provinceSeed.map(province=>({
  ...province,
  ...authenticProvinces[province.id],
}));

const atlasCoordinates: Record<string,Array<[number,number]>> = {
  Sumatra:[[7,34],[10,29],[11,38],[14,34],[17,39],[14,47],[17,52],[20,57],[13,56],[23,63]],
  Java:[[27,69],[31,70],[35,70],[39,71],[44,70],[49,70]],
  "Bali y Nusa Tenggara":[[53,72],[58,73],[64,75]],
  Kalimantan:[[38,34],[44,42],[43,52],[51,43],[51,31]],
  Sulawesi:[[62,29],[64,36],[63,44],[67,41],[68,50],[71,56]],
  Maluku:[[75,43],[78,36]],
  Papua:[[83,42],[86,47],[89,38],[92,42],[91,49],[96,51]],
};

const provincePositions = Object.fromEntries(
  regions.filter(r=>r!=="Todas").flatMap(region=>{
    const members=provinces.filter(p=>p.region===region);
    return members.map((p,index)=>[p.id,atlasCoordinates[region]?.[index] ?? [50,50]]);
  })
) as Record<string,[number,number]>;

function questionsFor(p: Province): Question[] {
  return [
    {es:`Si viajás a ${p.name}, ¿querés conocer ${p.place.es}?`,en:`If you travel to ${p.name}, do you want to visit ${p.place.en}?`,starter:{es:"Sí, quiero conocer… / No, prefiero…",en:"Yes, I want to visit… / No, I prefer…"},choices:smallChoices.yesNo,spark:{es:"¿Con quién vas?",en:"Who do you go with?"}},
    {es:`¿Te gustaría ${p.action.es}?`,en:`Would you like to ${p.action.en}?`,starter:{es:"Sí, me gustaría… / No, no me gustaría…",en:"Yes, I would like to… / No, I wouldn’t like to…"},choices:smallChoices.yesNo,spark:{es:"¿De día o de noche?",en:"During the day or at night?"}},
    {es:`¿Preferís ${p.choiceA.es} o ${p.choiceB.es}?`,en:`Do you prefer ${p.choiceA.en} or ${p.choiceB.en}?`,starter:{es:`Prefiero ${p.choiceA.es} / ${p.choiceB.es}.`,en:`I prefer ${p.choiceA.en} / ${p.choiceB.en}.`},choices:[p.choiceA,p.choiceB],spark:{es:"¿Por qué?",en:"Why?"}},
    {es:`¿Qué te parece ${p.thing.es}?`,en:`What do you think about ${p.thing.en}?`,starter:{es:"Me parece…",en:"I think it is…"},choices:[{es:"Interesante",en:"Interesting"},{es:"Hermoso/a",en:"Beautiful"},{es:"Extraño/a",en:"Unusual"},{es:"Importante",en:"Important"}],spark:{es:"¿Querés sacar una foto?",en:"Do you want to take a photo?"}},
    {es:`¿Te gustaría ver ${p.animal.es} durante el viaje?`,en:`Would you like to see ${p.animal.en} during the trip?`,starter:{es:"Sí, me gustaría verlo/a…",en:"Yes, I would like to see it…"},choices:[{es:"Sí, mucho",en:"Yes, very much"},{es:"Tal vez",en:"Maybe"},{es:"No es mi prioridad",en:"It is not my priority"}],spark:{es:"¿Querés observarlo o sacarle una foto?",en:"Do you want to observe it or take a photo?"}},
    {es:`¿Qué llevás en la mochila para visitar ${p.place.es}?`,en:`What do you pack to visit ${p.place.en}?`,starter:{es:"Llevo…",en:"I pack…"},choices:[{es:"Agua",en:"Water"},{es:"Protector solar",en:"Sunscreen"},{es:"Una cámara",en:"A camera"},{es:"Ropa cómoda",en:"Comfortable clothes"}],spark:{es:"¿Qué más necesitás?",en:"What else do you need?"}},
    {es:`¿Querés probar ${p.food.es}?`,en:`Do you want to try ${p.food.en}?`,starter:{es:"Sí, quiero probar… / No, gracias.",en:"Yes, I want to try… / No, thank you."},choices:[{es:"Sí, por favor",en:"Yes, please"},{es:"No, gracias",en:"No, thank you"},{es:"Tal vez",en:"Maybe"}],spark:{es:"¿Te gusta probar comida nueva?",en:"Do you like trying new food?"}},
    {es:`¿Cuántos días querés pasar en ${p.name}?`,en:`How many days do you want to spend in ${p.name}?`,starter:{es:"Quiero pasar…",en:"I want to spend…"},choices:[{es:"Dos días",en:"Two days"},{es:"Cuatro días",en:"Four days"},{es:"Una semana",en:"One week"}],spark:{es:"¿Es suficiente?",en:"Is that enough?"}},
    {es:`Después de visitar ${p.place.es}, ¿cómo te sentís?`,en:`After visiting ${p.place.en}, how do you feel?`,starter:{es:"Me siento…",en:"I feel…"},choices:smallChoices.feeling,spark:{es:"¿Qué fue lo mejor?",en:"What was the best part?"}},
    {es:`Armá tu día en ${p.name}: ¿qué hacés por la mañana, por la tarde y por la noche?`,en:`Plan your day in ${p.name}: what do you do in the morning, afternoon and evening?`,starter:{es:"Por la mañana… Después… Por la noche…",en:"In the morning… Then… In the evening…"},choices:[p.action,{es:`probar ${p.food.es}`,en:`try ${p.food.en}`},{es:"caminar y sacar fotos",en:"walk and take photos"}],spark:{es:"¿Con quién compartís ese día?",en:"Who do you share that day with?"}},
  ];
}

function Glyph({name}: {name:GlyphName}) {
  const content: Record<GlyphName,ReactNode> = {
    map:<><path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20Z"/><path d="M9 4v13.5M15 6.5V20"/></>,
    shuffle:<><path d="M16 3h5v5"/><path d="m4 20 5.5-5.5M21 3l-7.5 7.5"/><path d="M4 4h2.5c4.5 0 7 16 11 16H21"/><path d="m17 16 4 4-4 4"/></>,
    sound:<><path d="M5 10v4h4l5 4V6l-5 4Z"/><path d="M17 9.5c1.2 1.1 1.2 3.9 0 5M19.5 7c3 3 3 7 0 10"/></>,
    clear:<><path d="M5 7h14M9 7V4h6v3M8 10v8M12 10v8M16 10v8M7 7l1 14h8l1-14"/></>,
    compass:<><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9Z"/></>,
    plus:<><path d="M12 5v14M5 12h14"/></>,
    home:<><path d="m4 11 8-7 8 7v9h-6v-6h-4v6H4Z"/></>,
  };
  return <svg className="id-glyph" viewBox="0 0 24 24" aria-hidden="true">{content[name]}</svg>;
}

function Atmosphere() {
  return <div className="id-atmosphere" aria-hidden="true"><i/><i/><i/><i/><span/><span/><span/></div>;
}

function WorldMark({province,compact=false}: {province:Province;compact?:boolean}) {
  return <div className={`id-world-mark ${compact?"compact":""}`} aria-hidden="true"><i/><i/><span>{province.number}</span><small>{regionCopy[province.region].code}</small></div>;
}

export default function IndonesiaFantastica() {
  const [screen,setScreen] = useState<Screen>("cover");
  const [active,setActive] = useState<Province>(provinces[16]);
  const [atlasPick,setAtlasPick] = useState<Province>(provinces[16]);
  const [question,setQuestion] = useState(0);
  const [region,setRegion] = useState("Todas");
  const [query,setQuery] = useState("");
  const [visited,setVisited] = useState<Set<string>>(new Set());
  const [answerParts,setAnswerParts] = useState<Pair[]>([]);
  const [englishVisible,setEnglishVisible] = useState(true);

  const list = useMemo(()=>provinces.filter(p=>(region==="Todas"||p.region===region)&&`${p.name} ${localNames[p.id]} ${p.title.es} ${p.title.en}`.toLowerCase().includes(query.toLowerCase())),[region,query]);
  const questions = useMemo(()=>questionsFor(active),[active]);
  const current = questions[question];
  const progress = Math.round((visited.size/provinces.length)*100);
  const answerEs = answerParts.map(part=>part.es.replace(/[.…]+/g,"").replace(/\s*\/.*$/,"")).join(" ");
  const answerEn = answerParts.map(part=>part.en.replace(/[.…]+/g,"").replace(/\s*\/.*$/,"")).join(" ");
  const wordbank: Array<Pair & {label:string;code:string}> = [
    {...active.place,label:"LUGAR · PLACE",code:"LU"},{...active.thing,label:"OBJETO · OBJECT",code:"OB"},{...active.action,label:"ACCIÓN · ACTION",code:"AC"},{...active.food,label:"COMIDA · FOOD",code:"CO"},
    {...active.animal,label:"ANIMAL · ANIMAL",code:"AN"},{...active.choiceA,label:"OPCIÓN A · OPTION A",code:"A"},{...active.choiceB,label:"OPCIÓN B · OPTION B",code:"B"},{es:"tradición local",en:"local tradition",label:"CULTURA · CULTURE",code:"CU"},
  ];

  const show = (next:Screen) => { setScreen(next); window.scrollTo({top:0,behavior:"smooth"}); };
  const enter = (p:Province,start=0) => { setActive(p); setAtlasPick(p); setQuestion(start); setAnswerParts([]); setVisited(v=>new Set([...v,p.id])); show("province"); };
  const surprise = () => { const pool=provinces.filter(p=>p.id!==active.id); const p=pool[Math.floor(Math.random()*pool.length)]||provinces[0]; enter(p,Math.floor(Math.random()*10)); };
  const chooseRegion = (next:string) => { setRegion(next); const first=provinces.find(p=>next==="Todas"||p.region===next); if(first)setAtlasPick(first); };
  const addPart = (part:Pair) => setAnswerParts(parts=>[...parts,part]);
  const changeQuestion = (next:number) => { setQuestion(Math.max(0,Math.min(9,next))); setAnswerParts([]); document.querySelector(".id-question-stage")?.scrollIntoView({behavior:"smooth",block:"center"}); };
  const speak = (text:string) => { if(typeof window==="undefined"||!("speechSynthesis" in window))return; window.speechSynthesis.cancel(); const voice=new SpeechSynthesisUtterance(text); voice.lang="es-AR"; voice.rate=.82; window.speechSynthesis.speak(voice); };

  return <main className={`id-app ${englishVisible?"":"id-spanish-only"}`}>
    <nav className="id-nav">
      <Link href="/" className="id-brand"><span><img src="/chespanish-guide-avatar.png" alt=""/></span><div><b>CHESPANISH</b><small>CONVERSATION ADVENTURES</small></div></Link>
      <div className="id-nav-progress"><span>EXPEDICIÓN · EXPEDITION</span><i><b style={{width:`${progress}%`}}/></i><strong>{visited.size}/38</strong></div>
      <div className="id-nav-actions"><button onClick={surprise}><Glyph name="shuffle"/> SORPRESA</button><button onClick={()=>show(screen==="cover"?"map":"cover")}><Glyph name={screen==="cover"?"map":"home"}/>{screen==="cover"?" MAPA":" INICIO"}</button></div>
    </nav>

    {screen==="cover"&&<section className="id-cover">
      <Atmosphere/>
      <div className="id-cover-copy">
        <div className="id-kicker"><span>A0</span> 1000% CONVERSACIÓN · 1000% CONVERSATION</div>
        <p className="id-overline">38 PROVINCIAS REALES · CULTURA REAL · 38 REAL PROVINCES</p>
        <h1>INDONESIA<br/><em>FANTÁSTICA</em></h1>
        <p className="id-lead">Entrá en un archipiélago vivo y empezá a hablar desde la primera pregunta.<b> Sin gramática. Sin respuestas perfectas. Todo bilingüe.</b><span className="id-en">Enter a living archipelago and start speaking from the first question. No grammar. No perfect answers. Everything is bilingual.</span></p>
        <div className="id-cover-actions"><button onClick={()=>show("map")}>EXPLORAR EL MAPA <span>→</span><small className="id-en">EXPLORE THE MAP</small></button><button className="ghost" onClick={surprise}><Glyph name="shuffle"/> DESTINO SORPRESA<small className="id-en">SURPRISE DESTINATION</small></button></div>
        <div className="id-stats"><article><b>38</b><span>provincias<br/><small>provinces</small></span></article><article><b>380</b><span>preguntas<br/><small>questions</small></span></article><article><b>∞</b><span>respuestas posibles<br/><small>possible answers</small></span></article></div>
      </div>
      <div className="id-hero-art" aria-hidden="true"><img src="/indonesia-fantasy-hero.png" alt=""/><span className="id-floating-tag tag-bali">BALI · PORTAL 17</span><span className="id-floating-tag tag-java">JAVA · 6 WORLDS</span><span className="id-floating-tag tag-papua">PAPUA · 6 WORLDS</span></div>
      <div className="id-waves" aria-hidden="true"><i/><i/><i/></div>
    </section>}

    {screen==="map"&&<section className="id-map">
      <header className="id-map-head"><div><span>EL ATLAS VIVO · THE LIVING ATLAS</span><h1>No elijas una tarjeta.<br/><em>Abrí un destino real.</em></h1></div><div><p>Los puntos luminosos son provincias reales. Tocá uno para descubrir sus lugares, comidas, culturas y animales.</p><span className="id-en">The glowing points are real provinces. Tap one to discover its places, food, culture and wildlife.</span><button onClick={surprise}><Glyph name="shuffle"/> QUE EL MAPA DECIDA · LET THE MAP CHOOSE</button></div></header>

      <div className="id-atlas-toolbar">
        <div className="id-regions">{regions.map(r=><button className={region===r?"active":""} onClick={()=>chooseRegion(r)} key={r}>{r}</button>)}</div>
        <label><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar provincia · Search province"/></label>
      </div>

      <section className="id-atlas-board">
        <div className="id-atlas-frame">
          <div className="id-atlas-title"><span><Glyph name="compass"/> MAPA INTERACTIVO · INTERACTIVE MAP</span><b>{list.length} destinos visibles · visible destinations</b></div>
          <div className="id-atlas" aria-label="Mapa interactivo de las provincias de Indonesia">
            <div className="id-sea-lines" aria-hidden="true"><i/><i/><i/><i/></div>
            {Object.keys(regionCopy).map(r=><button key={r} className={`id-island id-island-${regionCopy[r].code.toLowerCase()} ${region!=="Todas"&&region!==r?"dim":""}`} onClick={()=>chooseRegion(region===r?"Todas":r)} aria-label={`Filtrar por ${r}`}><span>{regionCopy[r].code}</span><small>{r}</small></button>)}
            {provinces.map(p=>{
              const [x,y]=provincePositions[p.id];
              const visible=list.some(item=>item.id===p.id);
              return <button key={p.id} disabled={!visible} onClick={()=>setAtlasPick(p)} className={`id-atlas-node ${atlasPick.id===p.id?"selected":""} ${visited.has(p.id)?"visited":""} ${visible?"":"hidden-node"}`} style={{left:`${x}%`,top:`${y}%`,"--province":p.color} as CSSProperties} aria-label={`${p.name}: ${p.title.es}`}><b>{p.number}</b><span><strong>{localNames[p.id]}</strong><small>{p.title.es}</small></span></button>;
            })}
            <div className="id-compass-rose" aria-hidden="true"><span>N</span><i/><b/></div>
            <p className="id-map-hint">TOCÁ UN PUNTO · TAP A POINT</p>
          </div>
        </div>

        <aside className="id-portal-card" style={{"--province":atlasPick.color} as CSSProperties}>
          <div className="id-portal-image"><img src="/indonesia-fantasy-hero.png" alt="Paisaje fantástico inspirado en Indonesia"/><WorldMark province={atlasPick} compact/></div>
          <div className="id-portal-copy"><span>PORTAL {atlasPick.number} · {atlasPick.region}</span><small>{localNames[atlasPick.id]}</small><h2>{atlasPick.title.es}</h2><h3 className="id-en">{atlasPick.title.en}</h3><p>{atlasPick.scene.es}</p><p className="id-en">{atlasPick.scene.en}</p><div><b>10 preguntas</b><b>Wordbank bilingüe</b><b>Audio en español</b></div><button onClick={()=>enter(atlasPick)}>ABRIR ESTE MUNDO <span>→</span><small className="id-en">OPEN THIS WORLD</small></button></div>
        </aside>
      </section>

      <section className="id-route-strip"><header><span>RUTA DE PORTALES · PORTAL ROUTE</span><b>{visited.size} descubiertos · discovered</b></header><div>{list.map(p=><button key={p.id} onClick={()=>setAtlasPick(p)} className={`${atlasPick.id===p.id?"active":""} ${visited.has(p.id)?"visited":""}`} style={{"--province":p.color} as CSSProperties}><span>{p.number}</span><b>{localNames[p.id]}</b><small>{regionCopy[p.region].code}</small></button>)}</div></section>
      {!list.length&&<div className="id-empty"><b>Este portal no aparece en el mapa.</b><span>Probá otra provincia o región. · Try another province or region.</span></div>}
    </section>}

    {screen==="province"&&<section className="id-world" style={{"--province":active.color} as CSSProperties}>
      <header className="id-world-hero">
        <Atmosphere/>
        <div className="id-world-top"><button onClick={()=>show("map")}>← MAPA · MAP</button><span>DESTINO {active.number} · {localNames[active.id]}</span><div><button className={englishVisible?"active":""} onClick={()=>setEnglishVisible(v=>!v)}>EN {englishVisible?"ON":"OFF"}</button><button onClick={surprise}><Glyph name="shuffle"/> OTRO MUNDO</button></div></div>
        <div className="id-world-copy"><small>{active.region} · {localNames[active.id]}</small><h1>{active.title.es}</h1><h2 className="id-en">{active.title.en}</h2><p><b>{active.scene.es}</b><span className="id-en">{active.scene.en}</span></p><div className="id-world-tags"><span>Contenido real</span><span>10 preguntas</span><span>Audio</span><span>Respuesta interactiva</span></div></div>
        <div className="id-world-image" aria-hidden="true"><img src="/indonesia-fantasy-hero.png" alt=""/><WorldMark province={active}/></div>
      </header>

      <div className="id-classroom">
        <section className="id-rule"><span>ÚNICA REGLA · ONLY RULE</span><b>Respondé como puedas: una palabra también cuenta.</b><em className="id-en">Answer any way you can: one word counts too.</em></section>

        <section className="id-question-stage">
          <div className="id-question-count"><span>PREGUNTA · QUESTION</span><b>{String(question+1).padStart(2,"0")} <i>/ 10</i></b></div>
          <div className="id-question-copy"><small>{localNames[active.id]} · {active.title.en}</small><h2>{current.es}</h2><p className="id-en">{current.en}</p><button className="id-listen" onClick={()=>speak(current.es)}><Glyph name="sound"/> ESCUCHAR LA PREGUNTA</button></div>
          <div className="id-question-orbit" aria-hidden="true"><WorldMark province={active}/><i/><i/></div>
        </section>

        <section className="id-support-grid">
          <button className="id-starter" onClick={()=>addPart(current.starter)}><span>EMPEZÁ ASÍ · START LIKE THIS</span><b>{current.starter.es}</b><em className="id-en">{current.starter.en}</em><i><Glyph name="plus"/> AGREGAR · ADD</i></button>
          <article className="id-options"><span>TOCÁ PALABRAS · TAP WORDS</span><div>{current.choices.map(choice=><button key={choice.es} onClick={()=>addPart(choice)}><b>{choice.es}</b><small className="id-en">{choice.en}</small><i>+</i></button>)}</div></article>
          <article className="id-spark"><span>SEGUÍ HABLANDO · KEEP TALKING</span><b>{current.spark.es}</b><em className="id-en">{current.spark.en}</em></article>
        </section>

        <section className="id-answer-builder" aria-live="polite">
          <header><div><span>LABORATORIO DE RESPUESTAS · ANSWER LAB</span><h2>Construí tu frase tocando palabras.</h2><p className="id-en">Build your sentence by tapping words.</p></div><div><button disabled={!answerParts.length} onClick={()=>speak(answerEs)}><Glyph name="sound"/> ESCUCHAR</button><button disabled={!answerParts.length} onClick={()=>setAnswerParts([])}><Glyph name="clear"/> BORRAR</button></div></header>
          <div className={`id-answer-canvas ${answerParts.length?"has-answer":""}`}>{answerParts.length?answerParts.map((part,index)=><button key={`${part.es}-${index}`} onClick={()=>setAnswerParts(parts=>parts.filter((_,i)=>i!==index))}><b>{part.es.replace(/[.…]+/g,"")}</b><small className="id-en">{part.en.replace(/[.…]+/g,"")}</small></button>):<p><b>Tu respuesta aparece acá…</b><span className="id-en">Your answer appears here…</span></p>}</div>
          {answerParts.length>0&&<div className="id-answer-readout"><b>{answerEs}</b><span className="id-en">{answerEn}</span></div>}
        </section>

        <section className="id-wordbank"><header><span>WORDBANK DEL MUNDO · WORLD WORDBANK</span><h2>Todo lo que necesitás está acá.</h2><p className="id-en">Everything you need is right here. Tap any word to add it.</p></header><div>{wordbank.map((word,index)=><button onClick={()=>addPart(word)} key={`${word.es}-${index}`}><span>{word.code}</span><small>{word.label}</small><b>{word.es}</b><em className="id-en">{word.en}</em><i>+</i></button>)}</div></section>

        <section className="id-answer-tools"><header><span>BOTIQUÍN DE RESPUESTAS · ANSWER TOOLKIT</span><h2>Robá un comienzo y completalo.</h2><p className="id-en">Borrow a beginning and complete it.</p></header><div>{answerTools.map(tool=><button onClick={()=>addPart(tool)} key={tool.es}><b>{tool.es}</b><span className="id-en">{tool.en}</span><i>+</i></button>)}</div></section>

        <nav className="id-question-nav"><button disabled={question===0} onClick={()=>changeQuestion(question-1)}>← ANTERIOR · PREVIOUS</button><div>{questions.map((_,index)=><button aria-label={`Pregunta ${index+1}`} className={index===question?"active":""} onClick={()=>changeQuestion(index)} key={index}>{index+1}</button>)}</div><button onClick={()=>question===9?surprise():changeQuestion(question+1)}>{question===9?"NUEVO MUNDO · NEW WORLD →":"SIGUIENTE · NEXT →"}</button></nav>
      </div>
    </section>}
  </main>;
}
