"use client";

import {useState,type CSSProperties} from "react";
import Link from "next/link";
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
  return <main className="cinema-app" style={{"--film":selectedMovie.tone} as CSSProperties}>
    <nav className="cinema-nav"><Link href="/"><img src="/brand/mascot/portrait.webp" alt=""/><b>SPANISHCUE</b><span>A1 · CONVERSACIÓN</span></Link><div className="cinema-reel">{stages.map((_,index)=><button key={index} aria-label={`Ir a la etapa ${index+1}`} className={stage===index?"active":stage>index?"done":""} onClick={()=>go(index)}>{stage>index?"✓":index+1}</button>)}</div><Link href="/">BIBLIOTECA</Link></nav>

    {stage===0&&<section className="cinema-hero"><div className="cinema-bg"/><div className="cinema-gradient"/><div className="cinema-copy"><span>A1 · 45 MINUTOS · HABLAR Y HACER UN PLAN</span><h1>EL CINE DE LAS<br/><em>TRES FUNCIONES</em></h1><p>Hay tres películas y una sola noche libre. Elige una puerta y empieza: no necesitas una respuesta perfecta.</p><div className="first-choice">{movies.map((item,index)=><button key={item.title} className={movie===index?"active":""} onClick={()=>setMovie(index)}><i>{item.icon}</i><span><small>{item.genre}</small><b>{item.title}</b></span></button>)}</div><div className="say-now"><small>DI ESTO CON TU INFORMACIÓN</small><b>“Quiero ver {selectedMovie.title} porque me gustan las películas…”</b><p>Después pregunta: “¿Y tú? ¿Qué prefieres?”</p></div><button className="cinema-primary" onClick={()=>go(1)}>COMPRAR TU PRIMERA ENTRADA →</button></div></section>}

    {stage===1&&<section className="cinema-page poster-stage"><header><span>01 · TRES PELÍCULAS · 6 MIN</span><h1>Elige una. Elimina otra.</h1><p>Por cada clic, habla: di qué película quieres ver, cuál no quieres ver y una razón simple.</p></header><div className="poster-grid">{movies.map((item,index)=><button key={item.title} onClick={()=>setMovie(index)} className={movie===index?"active":""} style={{"--poster":item.tone} as CSSProperties}><div><span>{item.genre}</span><i>{item.icon}</i><b>0{index+1}</b></div><h2>{item.title}</h2><p>{item.words.join(" · ")}</p><footer>{movie===index?"TU ELECCIÓN":"ELEGIR"}</footer></button>)}</div><section className="film-talk"><div><small>PREGUNTA DESBLOQUEADA</small><h2>{selectedMovie.question}</h2></div><aside><b>PARA HABLAR</b><span>Me gustan…</span><span>Prefiero… porque…</span><span>No quiero ver…</span><span>¿Y tú?</span></aside></section></section>}

    {stage===2&&<section className="cinema-page schedule-stage"><header><span>02 · EL HORARIO · 6 MIN</span><h1>¿Cuándo puedes ir?</h1><p>Abre una función. Di si puedes o no, explica tu horario y pregunta cuándo puede el profesor.</p></header><div className="marquee"><span>HOY</span><h2>{selectedMovie.title}</h2><div>{times.map((item,index)=><button key={item} onClick={()=>setTime(index)} className={time===index?"active":""}>{item}<small>{index===0?"temprano":index===1?"hora ideal":"sesión nocturna"}</small></button>)}</div></div><section className="schedule-talk"><article><small>SI PUEDES</small><b>“Sí, puedo el {times[time].toLowerCase().replace(" · "," a las ")}.”</b><p>¿A qué hora terminas de trabajar o estudiar?</p></article><article><small>SI NO PUEDES</small><b>“No puedo a esa hora. ¿Podemos ir…?”</b><p>Propón otra función y pregunta si está bien.</p></article><article><small>FOLLOW-UP</small><b>“¿Te va bien?” · “¿Es muy tarde?”</b><p>Reacciona a la respuesta del profesor.</p></article></section></section>}

    {stage===3&&<section className="cinema-page invite-stage"><header><span>03 · LA INVITACIÓN · 6 MIN</span><h1>¿A quién invitas?</h1><p>Elige una persona. El profesor interpreta ese personaje. Invítalo, escucha su respuesta y continúa.</p></header><div className="people-strip">{people.map((item,index)=><button key={item.name} onClick={()=>{setPerson(index);setAccepted(null)}} className={person===index?"active":""}><span>{item.name[0]}</span><div><b>{item.name}</b><small>{item.relation}</small><p>Le gustan: {item.likes}<br/>Puede: {item.available}</p></div></button>)}</div><section className="invite-roleplay"><div><small>TÚ EMPIEZAS</small><h2>“Hola, {people[person].name}. ¿Quieres ir al cine conmigo?”</h2><p>Agrega película, día y hora. Después pregunta: “¿Te va bien?”</p></div><aside><small>EL PERSONAJE RESPONDE</small><div><button className={accepted==="sí"?"active":""} onClick={()=>setAccepted("sí")}>SÍ, ME ENCANTA</button><button className={accepted==="no"?"active":""} onClick={()=>setAccepted("no")}>NO PUEDO</button></div>{accepted&&<p>{accepted==="sí"?"Reacciona: “¡Genial! Entonces…” y confirma el plan.":"Reacciona: “No pasa nada. ¿Puedes…?” y ofrece otra opción."}</p>}</aside></section></section>}

    {stage===4&&<section className="cinema-page meeting-stage"><header><span>04 · PUNTO DE ENCUENTRO · 7 MIN</span><h1>No basta con decir “nos vemos”.</h1><p>Elige dónde, confirma la hora y explica cómo llegas. Después cambia un detalle cuando el profesor lo pida.</p></header><div className="meeting-layout"><div className="lobby-orbit"><div><span>PELÍCULA</span><b>{selectedMovie.title}</b></div><i/><button onClick={()=>setPlace((place+1)%places.length)}>CAMBIAR LUGAR</button><article><small>PUNTO DE ENCUENTRO</small><h2>{places[place].name}</h2><p>{places[place].detail}</p></article></div><div className="place-list">{places.map((item,index)=><button key={item.name} onClick={()=>setPlace(index)} className={place===index?"active":""}><span>0{index+1}</span><div><b>{item.name}</b><small>{item.detail}</small></div><i>→</i></button>)}<section><small>ARMA EL MENSAJE</small><h2>“{places[place].starter} {times[time].split(" · ")[1]}. Yo voy en… ¿Y tú?”</h2><p>Follow-ups: ¿Está lejos? · ¿Cuánto tardas? · ¿Nos vemos adentro o afuera?</p></section></div></div></section>}

    {stage===5&&<section className="cinema-page problem-stage"><header><span>05 · PLAN B · 6 MIN</span><h1>Algo cambia. La conversación sigue.</h1><p>Elige un problema, explícalo con tus palabras y acuerda una solución con el profesor.</p></header><div className="problem-tabs">{problems.map((item,index)=><button key={item.title} onClick={()=>setProblem(index)} className={problem===index?"active":""}><span>0{index+1}</span>{item.title}</button>)}</div><article className="problem-card"><div><small>MENSAJE DEL CINE</small><h2>{problems[problem].title}</h2><p>{problems[problem].text}</p></div><section><small>TU MISIÓN ORAL</small><h3>{problems[problem].prompt}</h3><div><span>Tenemos un problema…</span><span>No podemos…</span><span>Podemos…</span><span>¿Qué prefieres?</span><span>Perfecto, entonces…</span></div></section></article><div className="ticket-final"><span>ENTRADA CONFIRMADA</span><div><b>{selectedMovie.title}</b><p>{times[time]} · {places[place].name} · con {people[person].name}</p></div><i>SC</i></div></section>}

    {stage===6&&<section className="cinema-page cinema-final"><header><span>FINAL · CONVERSACIÓN ABIERTA · 10 MIN</span><h1>Charla de salida</h1><p>La película terminó. Elige preguntas, compara tus respuestas con las del profesor y deja que la charla cambie de dirección.</p></header><div className="cinema-final-grid">{finalQuestions.map(([question,follow],index)=><article key={question}><span>{index+1}</span><div><h2>{question}</h2><p>{follow} · ¿Y tú?</p></div></article>)}</div><section className="weekend-plan"><img src="/brand/mascot/pointing.webp" alt="Mascota oficial de SPANISHCUE"/><div><small>ÚLTIMO ROLEPLAY</small><h2>Invita al profesor a un plan real.</h2><p>Propón actividad, día, hora y lugar. Escucha una objeción, ofrece un plan B y confirma el acuerdo final.</p></div></section></section>}

    <footer className="cinema-controls"><button disabled={stage===0} onClick={()=>go(stage-1)}>← ANTERIOR</button><div><b>{stages[stage][0]}</b><span>{stages[stage][1]} · {stage+1}/{stages.length}</span></div>{stage<6?<button onClick={()=>go(stage+1)}>SIGUIENTE →</button>:<Link href="/el-teatro-de-las-coartadas">PASAR A A2 →</Link>}</footer>
  </main>;
}
