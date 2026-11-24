"use client";

import {useState,type CSSProperties} from "react";
import Link from "next/link";
import {ClassicTopBar} from "../clasicas-ui/TopBar";
import {sentence} from "../clasicas-ui/text";
import "../clasicas-ui/clasicas.css";
import "../clasicas-ui/premium.css";
import "./style.css";

const stages=[["Cartelera","4 min"],["Tres películas","6 min"],["El horario","6 min"],["La invitación","6 min"],["Punto de encuentro","7 min"],["Plan B","6 min"],["Charla de salida","10 min"]] as const;
const movies=[
  {title:"Siete vidas en un domingo",genre:"COMEDIA",icon:"☺",tone:"#ffb23f",words:["divertida","corta","con amigos"],question:"¿Te gustan las comedias? ¿Con quién ves películas divertidas?"},
  {title:"El jardín sobre las nubes",genre:"AVENTURA",icon:"✦",tone:"#54deb5",words:["fantástica","emocionante","otro mundo"],question:"¿Prefieres aventuras reales o mundos fantásticos? ¿Por qué?"},
  {title:"La ciudad sin sombra",genre:"MISTERIO",icon:"◐",tone:"#72b8ff",words:["oscura","lenta","con sorpresa"],question:"¿Te gustan las historias con un secreto? ¿Miras solo o acompañado?"},
];
const times=["VIERNES · 18:00","VIERNES · 20:15","SÁBADO · 22:30"];
const people=[
  {name:"Mara",relation:"compañera de trabajo",likes:"comedias",available:"viernes después de las 19"},
  {name:"Diego",relation:"vecino",likes:"aventuras",available:"sábado por la tarde"},
  {name:"Ana",relation:"amiga",likes:"misterios",available:"sábado por la noche"},
];
const places=[
  {name:"La puerta del cine",detail:"fácil, pero hay mucha gente",starter:"Nos vemos en la puerta a las"},
  {name:"El café del lobby",detail:"tranquilo y está adentro",starter:"Podemos encontrarnos en el café a las"},
  {name:"La salida del metro",detail:"rápido, pero está a dos cuadras",starter:"Te espero en la salida del metro a las"},
];
const problems=[
  {title:"ENTRADAS AGOTADAS",text:"No hay entradas para tu función. Hay lugares dos horas más tarde.",prompt:"Explica el problema y propón otro horario."},
  {title:"MENSAJE DE ÚLTIMO MINUTO",text:"La otra persona puede ir, pero llega treinta minutos tarde.",prompt:"Decide si esperas, cambias la función o vas otro día."},
  {title:"BUTACAS SEPARADAS",text:"Quedan dos asientos, pero no están juntos.",prompt:"Acepta o rechaza y ofrece una alternativa."},
];
const finalQuestions=[
  ["¿Te gusta ir al cine?","¿Con quién? · ¿Cuándo?"],["¿Qué tipo de películas prefieres?","¿Por qué? · ¿Cuál recomiendas?"],
  ["¿Prefieres el cine o ver una película en casa?","¿Qué es mejor en cada lugar?"],["¿A qué hora te gusta ver una película?","¿Y el fin de semana?"],
  ["¿Cómo invitas a un amigo a hacer algo?","¿Qué plan propones?"],["¿Qué dices cuando no puedes aceptar una invitación?","¿Propones otro día?"],
  ["¿Eres puntual cuando quedas con alguien?","¿Siempre? · ¿Qué haces si llegas tarde?"],["Prepara un plan real para este fin de semana.","¿Dónde? · ¿Cuándo? · ¿Con quién? · ¿Cómo van?"],
];

export default function CineTresFunciones(){
  const [stage,setStage]=useState(0);const [movie,setMovie]=useState(0);const [time,setTime]=useState(0);const [person,setPerson]=useState(0);const [place,setPlace]=useState(0);const [problem,setProblem]=useState(0);const [accepted,setAccepted]=useState<"sí"|"no"|null>(null);
  const go=(next:number)=>{setStage(Math.max(0,Math.min(stages.length-1,next)));window.scrollTo({top:0,behavior:"smooth"})};
  const selectedMovie=movies[movie];
  return <main className="cx cxp cinema-app" style={{"--cx-accent":"#e8590c","--film":selectedMovie.tone} as CSSProperties}>
    <ClassicTopBar title="El cine de las tres funciones" context="Conversación A1"><span className="cx-chip is-accent">{stages[stage][0]} · {stage+1}/{stages.length}</span></ClassicTopBar>
    <nav className="cxp-steps cinema-steps" aria-label="Etapas">{stages.map(([name],index)=><button key={name} aria-current={stage===index?"step":undefined} className={stage===index?"active":stage>index?"done":""} onClick={()=>go(index)}><span>{stage>index?"✓":String(index+1).padStart(2,"0")}</span><b>{name}</b></button>)}</nav>

    {stage===0&&<section className="cxp-hero"><article className="cx-rise"><p className="cx-kicker">A1 · 45 minutos · hablar y hacer un plan</p><h1>El cine de las <em>tres funciones</em></h1><p className="cxp-lead">Hay tres películas y una sola noche libre. Elige una puerta y empieza: no necesitas una respuesta perfecta.</p><div className="cxp-choices" role="radiogroup" aria-label="Película">{movies.map((item,index)=><button key={item.title} role="radio" aria-checked={movie===index} className={movie===index?"active":""} onClick={()=>setMovie(index)}><span>{item.icon}</span><b>{item.title} <small>{sentence(item.genre)}</small></b></button>)}</div><div className="cxp-say"><small>Di esto con tu información</small><b>«Quiero ver {selectedMovie.title} porque me gustan las películas…»</b><p>Después pregunta: «¿Y tú? ¿Qué prefieres?»</p></div><button className="cx-btn is-primary" onClick={()=>go(1)}>Comprar tu primera entrada <span aria-hidden="true">→</span></button></article><figure className="cxp-art cx-rise"><img src="/conversation-premium/cine-tres-funciones.webp" alt="" width="1600" height="900"/></figure></section>}

    {stage===1&&<section className="cxp-page" key="s1"><header className="cx-rise"><p className="cx-kicker">01 · Tres películas · 6 min</p><h1>Elige una. Elimina otra.</h1><p>Por cada clic, habla: di qué película quieres ver, cuál no quieres ver y una razón simple.</p></header><div className="cxp-tiles cinema-posters">{movies.map((item,index)=><button key={item.title} onClick={()=>setMovie(index)} className={movie===index?"active":""} style={{"--poster":item.tone} as CSSProperties}><i>{item.icon}</i><small>{sentence(item.genre)} · 0{index+1}</small><h2>{item.title}</h2><p>{item.words.join(" · ")}</p><em>{movie===index?"Tu elección ✓":"Elegir"}</em></button>)}</div><div className="cxp-split"><div className="cxp-say"><small>Pregunta desbloqueada</small><h2>{selectedMovie.question}</h2></div><aside className="cxp-panel cx-card"><small>Para hablar</small><div className="cxp-phrases"><span>Me gustan…</span><span>Prefiero… porque…</span><span>No quiero ver…</span><span>¿Y tú?</span></div></aside></div></section>}

    {stage===2&&<section className="cxp-page" key="s2"><header className="cx-rise"><p className="cx-kicker">02 · El horario · 6 min</p><h1>¿Cuándo puedes ir?</h1><p>Abre una función. Di si puedes o no, explica tu horario y pregunta cuándo puede el profesor.</p></header><div className="cxp-panel cx-card"><small>Hoy en cartelera</small><h2>{selectedMovie.title}</h2><div className="cxp-tiles">{times.map((item,index)=><button key={item} onClick={()=>setTime(index)} className={time===index?"active":""}><b>{sentence(item)}</b><p>{index===0?"temprano":index===1?"hora ideal":"sesión nocturna"}</p></button>)}</div></div><div className="cxp-tiles"><article className="cxp-say"><small>Si puedes</small><b>«Sí, puedo el {times[time].toLowerCase().replace(" · "," a las ")}.»</b><p>¿A qué hora terminas de trabajar o estudiar?</p></article><article className="cxp-say"><small>Si no puedes</small><b>«No puedo a esa hora. ¿Podemos ir…?»</b><p>Propón otra función y pregunta si está bien.</p></article><article className="cxp-say"><small>Para seguir</small><b>«¿Te va bien?» · «¿Es muy tarde?»</b><p>Reacciona a la respuesta del profesor.</p></article></div></section>}

    {stage===3&&<section className="cxp-page" key="s3"><header className="cx-rise"><p className="cx-kicker">03 · La invitación · 6 min</p><h1>¿A quién invitas?</h1><p>Elige una persona. El profesor interpreta ese personaje. Invítalo, escucha su respuesta y continúa.</p></header><div className="cxp-tiles">{people.map((item,index)=><button key={item.name} onClick={()=>{setPerson(index);setAccepted(null)}} className={person===index?"active":""}><i>{item.name[0]}</i><h2>{item.name}</h2><small>{item.relation}</small><p>Le gustan: {item.likes}<br/>Puede: {item.available}</p></button>)}</div><div className="cxp-split"><div className="cxp-say"><small>Tú empiezas</small><h2>«Hola, {people[person].name}. ¿Quieres ir al cine conmigo?»</h2><p>Agrega película, día y hora. Después pregunta: «¿Te va bien?»</p></div><aside className="cxp-panel cx-card"><small>El personaje responde</small><div className="cx-seg"><button aria-pressed={accepted==="sí"} onClick={()=>setAccepted("sí")}>Sí, me encanta</button><button aria-pressed={accepted==="no"} onClick={()=>setAccepted("no")}>No puedo</button></div>{accepted&&<p className="cx-rise">{accepted==="sí"?"Reacciona: «¡Genial! Entonces…» y confirma el plan.":"Reacciona: «No pasa nada. ¿Puedes…?» y ofrece otra opción."}</p>}</aside></div></section>}

    {stage===4&&<section className="cxp-page" key="s4"><header className="cx-rise"><p className="cx-kicker">04 · Punto de encuentro · 7 min</p><h1>No basta con decir «nos vemos».</h1><p>Elige dónde, confirma la hora y explica cómo llegas. Después cambia un detalle cuando el profesor lo pida.</p></header><div className="cxp-split"><div className="cxp-list">{places.map((item,index)=><button key={item.name} onClick={()=>setPlace(index)} className={place===index?"active":""}><span>0{index+1}</span><div><b>{item.name}</b><small>{item.detail}</small></div></button>)}<button className="cx-btn" onClick={()=>setPlace((place+1)%places.length)}>Cambiar de lugar</button></div><div className="cxp-say"><small>Arma el mensaje · {selectedMovie.title}</small><h2>«{places[place].starter} {times[time].split(" · ")[1]}. Yo voy en… ¿Y tú?»</h2><p>Para seguir: ¿Está lejos? · ¿Cuánto tardas? · ¿Nos vemos adentro o afuera?</p></div></div></section>}

    {stage===5&&<section className="cxp-page" key="s5"><header className="cx-rise"><p className="cx-kicker">05 · Plan B · 6 min</p><h1>Algo cambia. La conversación sigue.</h1><p>Elige un problema, explícalo con tus palabras y acuerda una solución con el profesor.</p></header><div className="cx-seg cinema-problems">{problems.map((item,index)=><button key={item.title} aria-pressed={problem===index} onClick={()=>setProblem(index)}>{sentence(item.title)}</button>)}</div><div className="cxp-split"><article className="cxp-panel cx-card"><small>Mensaje del cine</small><h2>{sentence(problems[problem].title)}</h2><p>{problems[problem].text}</p></article><section className="cxp-say"><small>Tu misión oral</small><h2>{problems[problem].prompt}</h2><div className="cxp-phrases"><span>Tenemos un problema…</span><span>No podemos…</span><span>Podemos…</span><span>¿Qué prefieres?</span><span>Perfecto, entonces…</span></div></section></div><div className="cinema-ticket"><small>Entrada confirmada</small><b>{selectedMovie.title}</b><p>{sentence(times[time])} · {places[place].name} · con {people[person].name}</p></div></section>}

    {stage===6&&<section className="cxp-final" key="s6"><header className="cx-rise"><p className="cx-kicker">Final · conversación abierta · 10 min</p><h1>Charla de salida</h1><p>La película terminó. Elige preguntas, compara tus respuestas con las del profesor y deja que la charla cambie de dirección.</p></header><div className="cxp-final-grid">{finalQuestions.map(([question,follow],index)=><article key={question}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{question}</h2><p>{follow} · ¿Y tú?</p></div></article>)}</div><aside className="cxp-close cx-card"><img src="/brand/mascot/pointing.webp" alt="Mascota oficial de SPANISHCUE"/><div><small>Último roleplay</small><h2>Invita al profesor a un plan real.</h2><p>Propón actividad, día, hora y lugar. Escucha una objeción, ofrece un plan B y confirma el acuerdo final.</p></div></aside></section>}

    <footer className="cxp-controls cinema-controls"><button className="cx-btn" disabled={stage===0} onClick={()=>go(stage-1)}><span aria-hidden="true">←</span> Anterior</button><span><b>{stages[stage][0]}</b>{stages[stage][1]} · {stage+1}/{stages.length}</span>{stage<6?<button className="cx-btn is-primary" onClick={()=>go(stage+1)}>Siguiente <span aria-hidden="true">→</span></button>:<Link className="cx-btn is-primary" href="/el-teatro-de-las-coartadas">Pasar a A2 <span aria-hidden="true">→</span></Link>}</footer>
  </main>;
}
