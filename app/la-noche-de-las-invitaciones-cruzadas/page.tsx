"use client";

import {useState,type CSSProperties} from "react";
import Link from "next/link";
import {ClassicTopBar} from "../clasicas-ui/TopBar";
import {sentence} from "../clasicas-ui/text";
import "../clasicas-ui/clasicas.css";
import "../clasicas-ui/premium.css";
import "./style.css";

type Guest={
  name:string;country:string;city:string;language:string;job:string;likes:string;
  symbol:string;color:string;clue:string;
};

const stages=[
  ["Entrada","4 min"],["Tu tarjeta","6 min"],["Invitados ocultos","7 min"],
  ["Invitaciones cruzadas","6 min"],["La mesa","6 min"],["Último saludo","6 min"],["Después de la gala","10 min"],
] as const;

const guests:Guest[]=[
  {name:"Lucía",country:"Colombia",city:"Medellín",language:"español e inglés",job:"arquitecta",likes:"la fotografía y el café",symbol:"SOL",color:"#f4b860",clue:"La invitación dorada busca a una arquitecta que habla dos idiomas."},
  {name:"Mateo",country:"Argentina",city:"Rosario",language:"español",job:"cocinero",likes:"la música y viajar",symbol:"LUNA",color:"#8dd9ff",clue:"La invitación azul es para alguien de Rosario que trabaja con comida."},
  {name:"Inés",country:"España",city:"Valencia",language:"español y francés",job:"diseñadora",likes:"el cine y bailar",symbol:"ESTRELLA",color:"#d7a7ff",clue:"La invitación violeta busca a una diseñadora que vive cerca del mar."},
  {name:"Tomás",country:"México",city:"Guadalajara",language:"español e italiano",job:"enfermero",likes:"correr y cocinar",symbol:"COMETA",color:"#8ce3bd",clue:"La invitación verde es para un enfermero que habla italiano."},
];

const rescue=[
  ["Me llamo…","My name is…"],["Soy de…","I’m from…"],["Vivo en…","I live in…"],
  ["Trabajo como…","I work as…"],["Hablo…","I speak…"],["Me gusta…","I like…"],
  ["¿Y tú?","And you?"],["¿Puedes repetir?","Can you repeat?"],
];

const finalQuestions=[
  ["¿Te gusta conocer gente nueva?","¿Dónde? · ¿Con quién?"],
  ["¿Qué dices cuando conoces a una persona?","¿Y después?"],
  ["¿Es fácil hablar de ti en español?","¿Qué es fácil? · ¿Qué es difícil?"],
  ["¿Qué idiomas hablas o quieres hablar?","¿Por qué? · ¿Con quién?"],
  ["¿Qué pregunta haces primero a una persona nueva?","¿Siempre?"],
  ["¿Prefieres una fiesta grande o una cena pequeña?","¿Por qué? · ¿Con quién?"],
  ["¿Qué trabajo te parece interesante?","¿Conoces a alguien con ese trabajo?"],
  ["¿Qué tres cosas son importantes para conocerte?","¿Cuál es la más importante?"],
];

function Support(){return <aside className="cxp-panel cx-card gala-support"><small>Frases de rescate</small><div>{rescue.map(([es,en])=><article key={es}><b>{es}</b><small lang="en">{en}</small></article>)}</div></aside>}

export default function InvitacionesCruzadas(){
  const [stage,setStage]=useState(0);
  const [guest,setGuest]=useState(0);
  const [revealed,setRevealed]=useState<number[]>([]);
  const [recovered,setRecovered]=useState<number[]>([]);
  const [table,setTable]=useState<number[]>([]);
  const [entry,setEntry]=useState("azul");
  const active=guests[guest];
  const go=(next:number)=>{setStage(Math.max(0,Math.min(stages.length-1,next)));window.scrollTo({top:0,behavior:"smooth"})};
  const reveal=(index:number)=>{setGuest(index);setRevealed(old=>old.includes(index)?old:[...old,index])};
  const chooseTable=(index:number)=>setTable(old=>old.includes(index)?old.filter(item=>item!==index):old.length<2?[...old,index]:old);

  return <main className="cx cxp gala-app" style={{"--cx-accent":"#b8860b","--guest":active.color} as CSSProperties}>
    <ClassicTopBar title="La noche de las invitaciones cruzadas" context="Conversación A1"><span className="cx-chip is-accent">{stages[stage][0]} · {stages[stage][1]}</span></ClassicTopBar>
    <nav className="cxp-steps gala-steps" aria-label="Etapas de la clase">{stages.map(([name],index)=><button key={name} aria-current={index===stage?"step":undefined} className={index===stage?"active":index<stage?"done":""} onClick={()=>go(index)}><span>{index<stage?"✓":String(index+1).padStart(2,"0")}</span><b>{name}</b></button>)}</nav>

    {stage===0&&<section className="cxp-hero"><article className="cx-rise"><p className="cx-kicker">A1 · Hablar desde el primer minuto</p><h1>La noche de las <em>invitaciones cruzadas</em></h1><p className="cxp-lead">En la entrada, todas las invitaciones cambiaron de dueño. Para devolverlas, tienes que conocer a los invitados.</p><div className="cxp-say"><small>Elige tu invitación y habla</small><div className="cx-seg gala-entry">{["azul","dorada","verde"].map(color=><button aria-pressed={entry===color} key={color} onClick={()=>setEntry(color)}>{sentence(color)}</button>)}</div><b>«Tengo la invitación {entry}. Me llamo… Soy de… Hoy estoy…»</b></div><button className="cx-btn is-primary" onClick={()=>go(1)}>Entrar a la gala <span aria-hidden="true">→</span></button></article><figure className="cxp-art cx-rise"><img src="/conversation-premium/invitaciones-cruzadas.webp" alt="" width="1600" height="900"/></figure></section>}

    {stage===1&&<section className="cxp-page" key="s1"><header className="cx-rise"><p className="cx-kicker">01 · Tu tarjeta · 6 min</p><h1>Preséntate sin leer un discurso.</h1><p>Usa las casillas como apoyo. Después aparta la vista y dilo con tus propias palabras.</p></header><div className="cxp-split"><div className="cxp-panel cx-card gala-identity"><small>Nombre</small><h2>Me llamo…</h2><div className="cxp-tiles">{[["Origen","Soy de…"],["Ciudad","Vivo en…"],["Idiomas","Hablo…"],["Trabajo o estudio","Trabajo como… / Estudio…"],["Algo personal","Me gusta…"],["Puente","¿Y tú?"]].map(([k,v])=><article key={k}><small>{k}</small><b>{v}</b></article>)}</div><div className="cx-teacher"><b>Desafío oral</b><p>El alumno dice su nombre, país, ciudad, idioma y una cosa que le gusta. Después le hace dos preguntas al profesor.</p></div></div><Support/></div></section>}

    {stage===2&&<section className="cxp-page" key="s2"><header className="cx-rise"><p className="cx-kicker">02 · Speed meeting · 7 min</p><h1>Cuatro invitados. Ninguna presentación escrita.</h1><p>Abre un retrato. El profesor es ese personaje: salúdalo, pregúntale tres datos y responde las mismas preguntas sobre ti.</p></header><div className="cxp-tiles gala-guests">{guests.map((item,index)=><button key={item.name} onClick={()=>reveal(index)} className={`${guest===index?"active":""} ${revealed.includes(index)?"revealed":""}`} style={{"--card":item.color} as CSSProperties}><i>{revealed.includes(index)?item.name[0]:"?"}</i><h2>{revealed.includes(index)?item.name:"Invitado oculto"}</h2><small>{sentence(item.symbol)}{revealed.includes(index)?` · ${item.country} · ${item.job}`:""}</small></button>)}</div><div className="cxp-split"><article className="cxp-panel cx-card"><small>Invitado {String(guest+1).padStart(2,"0")} · {sentence(active.symbol)}</small><h2>{active.name}</h2><p>{active.city}, {active.country}</p><dl className="gala-facts"><div><dt>Idiomas</dt><dd>{active.language}</dd></div><div><dt>Trabajo</dt><dd>{active.job}</dd></div><div><dt>Le gusta</dt><dd>{active.likes}</dd></div></dl></article><section className="cxp-say"><small>Tu turno: no leas una lista</small><b>«Hola, soy… ¿Cómo te llamas? ¿De dónde eres? ¿Dónde vives? ¿Qué haces? ¿Qué te gusta?»</b><p>Para seguir: «¿Y tú?» · «¿También?» · «¿Con quién?»</p></section></div></section>}

    {stage===3&&<section className="cxp-page" key="s3"><header className="cx-rise"><p className="cx-kicker">03 · El cruce · 6 min</p><h1>Devuelve cada invitación hablando.</h1><p>Lee una pista breve, elige a la persona y explica: «Creo que es para… porque…». Después haz una pregunta para confirmar.</p></header><div className="cxp-tiles gala-matches">{guests.map((item,index)=><article key={item.name} style={{"--card":item.color} as CSSProperties}><small>Invitación {sentence(item.symbol)}</small><p className="gala-clue">{item.clue}</p><div className="cx-seg">{guests.map((candidate,candidateIndex)=><button key={candidate.name} aria-pressed={recovered.includes(index)&&candidateIndex===index} onClick={()=>{setGuest(candidateIndex);if(candidateIndex===index)setRecovered(old=>old.includes(index)?old:[...old,index])}}>{candidate.name}</button>)}</div>{recovered.includes(index)?<em>Invitación recuperada ✓ Ahora di una cosa que tú tienes en común con {item.name}.</em>:<p>Elige, explica y pregunta.</p>}</article>)}</div></section>}

    {stage===4&&<section className="cxp-page" key="s4"><header className="cx-rise"><p className="cx-kicker">04 · Mesa para tres · 6 min</p><h1>Solo hay dos lugares libres.</h1><p>Quédate con dos invitados. Por cada elección, explica una razón y prepara una pregunta real para la mesa.</p></header><div className="cxp-split"><div className="gala-table cx-card"><span>Tú</span>{[0,1].map(slot=><i key={slot}>{table[slot]!==undefined?guests[table[slot]].name:"Lugar libre"}</i>)}</div><div className="cxp-list">{guests.map((item,index)=><button key={item.name} className={table.includes(index)?"active":""} onClick={()=>chooseTable(index)}><span>{table.includes(index)?"✓":"+"}</span><div><b>{item.name}</b><small>{item.job} · {item.likes}</small></div></button>)}</div></div>{table.length===2&&<section className="cxp-say cx-rise"><small>Conversación en la mesa</small><h2>«Quiero sentarme con {guests[table[0]].name} y {guests[table[1]].name} porque…»</h2><p>Pregúntales qué hacen normalmente, qué idiomas quieren aprender y qué plan prefieren para el fin de semana.</p></section>}</section>}

    {stage===5&&<section className="cxp-page" key="s5"><header className="cx-rise"><p className="cx-kicker">05 · Último saludo · 6 min</p><h1>La conversación también termina bien.</h1><p>Elige una situación. El profesor responde como el invitado; tú resuelves el momento y cierras la charla.</p></header><div className="cxp-tiles">{[
      ["No escuchaste","No entiendes el nombre. Pide repetir y confirma.","Perdón, ¿puedes repetir?"],["Llegaste tarde","Saluda, pide perdón y explica con una frase.","Hola, perdón por llegar tarde…"],["Quieres el contacto","Pide Instagram o teléfono de forma simple.","¿Tienes Instagram?"],["Te vas","Da las gracias, di que fue un placer y despídete.","Gracias, fue un placer…"],
    ].map(([title,text,start],index)=><article key={title}><i>0{index+1}</i><h2>{title}</h2><p>{text}</p><em>Empieza: {start}</em></article>)}</div><Support/></section>}

    {stage===6&&<section className="cxp-final" key="s6"><header className="cx-rise"><p className="cx-kicker">Final · conversación abierta · 10 min</p><h1>Después de la gala</h1><p>No hay puntos ni respuestas correctas. Elige preguntas, escucha al profesor y pregúntale algo relacionado.</p></header><div className="cxp-final-grid">{finalQuestions.map(([question,follow],index)=><article key={question}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{question}</h2><p>{follow} · ¿Y tú?</p></div></article>)}</div><aside className="cxp-close cx-card"><img src="/brand/mascot/standing-crossed.webp" alt="Mascota oficial de SPANISHCUE"/><div><small>Cierre libre</small><h2>Presenta a uno de los invitados como si fuera tu nuevo amigo.</h2><p>Di su nombre, origen, ciudad, trabajo, idiomas, qué le gusta y por qué quieres volver a hablar con esa persona.</p></div></aside></section>}

    <footer className="cxp-controls"><button className="cx-btn" disabled={stage===0} onClick={()=>go(stage-1)}><span aria-hidden="true">←</span> Anterior</button><span><b>{stages[stage][0]}</b>{stage+1} / {stages.length} · {stages[stage][1]}</span>{stage<stages.length-1?<button className="cx-btn is-primary" onClick={()=>go(stage+1)}>Siguiente <span aria-hidden="true">→</span></button>:<Link className="cx-btn is-primary" href="/el-cine-de-las-tres-funciones">Próxima A1 <span aria-hidden="true">→</span></Link>}</footer>
  </main>;
}
