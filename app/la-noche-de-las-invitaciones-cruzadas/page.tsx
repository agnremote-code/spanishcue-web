"use client";

import {useState,type CSSProperties} from "react";
import Link from "next/link";
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

function Support(){return <aside className="gala-support"><span>FRASES DE RESCATE</span><div>{rescue.map(([es,en])=><article key={es}><b>{es}</b><small>{en}</small></article>)}</div></aside>}

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

  return <main className="gala-app" style={{"--guest":active.color} as CSSProperties}>
    <header className="gala-top"><Link href="/"><img src="/brand/mascot/portrait.webp" alt=""/><span><b>SPANISHCUE</b><small>A1 · CONVERSACIÓN</small></span></Link><div><b>{stages[stage][0]}</b><span>{stages[stage][1]}</span></div><Link href="/">BIBLIOTECA</Link></header>
    <nav className="gala-progress" aria-label="Etapas de la clase">{stages.map(([name,time],index)=><button key={name} className={index===stage?"active":index<stage?"done":""} onClick={()=>go(index)}><i>{index<stage?"✓":index+1}</i><span>{name}<small>{time}</small></span></button>)}</nav>

    {stage===0&&<section className="gala-hero">
      <div className="gala-hero-image" aria-hidden="true"/><div className="gala-shade"/>
      <div className="gala-hero-copy"><span>A1 · HABLAR DESDE EL PRIMER MINUTO</span><h1>LA NOCHE DE LAS<br/><em>INVITACIONES CRUZADAS</em></h1><p>En la entrada, todas las invitaciones cambiaron de dueño. Para devolverlas, tienes que conocer a los invitados.</p><div className="gala-entry"><small>ELIGE TU INVITACIÓN Y HABLA</small><div>{["azul","dorada","verde"].map(color=><button className={entry===color?"active":""} key={color} onClick={()=>setEntry(color)}>{color}</button>)}</div><h2>“Tengo la invitación {entry}. Me llamo… Soy de… Hoy estoy…”</h2></div><button className="gala-primary" onClick={()=>go(1)}>ENTRAR A LA GALA <span>→</span></button></div>
    </section>}

    {stage===1&&<section className="gala-page gala-card-stage"><header><span>01 · TU TARJETA · 6 MIN</span><h1>Preséntate sin leer un discurso.</h1><p>Usa las casillas como apoyo. Después aparta la vista y dilo con tus propias palabras.</p></header><div className="identity-card"><div className="identity-mark">SC</div><div><small>NOMBRE</small><h2>Me llamo…</h2></div><div className="identity-grid"><article><span>ORIGEN</span><b>Soy de…</b></article><article><span>CIUDAD</span><b>Vivo en…</b></article><article><span>IDIOMAS</span><b>Hablo…</b></article><article><span>TRABAJO / ESTUDIO</span><b>Trabajo como… / Estudio…</b></article><article><span>ALGO PERSONAL</span><b>Me gusta…</b></article><article><span>PUENTE</span><b>¿Y tú?</b></article></div><footer><b>DESAFÍO ORAL</b><p>Di tu nombre, país, ciudad, idioma y una cosa que te gusta. Después hazle dos preguntas al profesor.</p></footer></div><Support/></section>}

    {stage===2&&<section className="gala-page gala-guests"><header><span>02 · SPEED MEETING · 7 MIN</span><h1>Cuatro invitados. Ninguna presentación escrita.</h1><p>Abre un retrato. El profesor es ese personaje: salúdalo, pregúntale tres datos y responde las mismas preguntas sobre ti.</p></header><div className="guest-grid">{guests.map((item,index)=><button key={item.name} onClick={()=>reveal(index)} className={`${guest===index?"active":""} ${revealed.includes(index)?"revealed":""}`} style={{"--card":item.color} as CSSProperties}><span>{revealed.includes(index)?item.name:"?"}</span><b>{item.symbol}</b><small>{revealed.includes(index)?`${item.country} · ${item.job}`:"INVITADO OCULTO"}</small></button>)}</div><article className="guest-profile"><div><span>{active.symbol}</span><small>INVITADO {String(guest+1).padStart(2,"0")}</small><h2>{active.name}</h2><p>{active.city}, {active.country}</p></div><dl><div><dt>IDIOMAS</dt><dd>{active.language}</dd></div><div><dt>TRABAJO</dt><dd>{active.job}</dd></div><div><dt>LE GUSTA</dt><dd>{active.likes}</dd></div></dl><section><small>TU TURNO: NO LEAS UNA LISTA</small><h3>“Hola, soy… ¿Cómo te llamas? ¿De dónde eres? ¿Dónde vives? ¿Qué haces? ¿Qué te gusta?”</h3><p>Follow-up: “¿Y tú?” · “¿También?” · “¿Con quién?”</p></section></article></section>}

    {stage===3&&<section className="gala-page gala-matches"><header><span>03 · EL CRUCE · 6 MIN</span><h1>Devuelve cada invitación hablando.</h1><p>Lee una pista breve, elige a la persona y explica: “Creo que es para… porque…”. Después haz una pregunta para confirmar.</p></header><div className="match-list">{guests.map((item,index)=><article key={item.name} style={{"--card":item.color} as CSSProperties}><div><span>{item.symbol}</span><p>{item.clue}</p></div><div>{guests.map((candidate,candidateIndex)=><button key={candidate.name} onClick={()=>{setGuest(candidateIndex);if(candidateIndex===index)setRecovered(old=>old.includes(index)?old:[...old,index])}} className={recovered.includes(index)&&candidateIndex===index?"correct":""}>{candidate.name}</button>)}</div><footer>{recovered.includes(index)?<b>INVITACIÓN RECUPERADA · Ahora di una cosa que tú tienes en común con {item.name}.</b>:<span>Elige, explica y pregunta.</span>}</footer></article>)}</div></section>}

    {stage===4&&<section className="gala-page gala-table"><header><span>04 · MESA PARA TRES · 6 MIN</span><h1>Solo hay dos lugares libres.</h1><p>Quédate con dos invitados. Por cada elección, explica una razón y prepara una pregunta real para la mesa.</p></header><div className="table-layout"><div className="round-table"><span>TÚ</span>{[0,1].map(slot=><i key={slot}>{table[slot]!==undefined?guests[table[slot]].name:"LUGAR LIBRE"}</i>)}</div><div className="table-picks">{guests.map((item,index)=><button key={item.name} className={table.includes(index)?"active":""} onClick={()=>chooseTable(index)}><span style={{background:item.color}}>{item.symbol[0]}</span><div><b>{item.name}</b><small>{item.job} · {item.likes}</small></div><i>{table.includes(index)?"✓":"+"}</i></button>)}</div></div>{table.length===2&&<section className="table-talk"><b>CONVERSACIÓN EN LA MESA</b><h2>“Quiero sentarme con {guests[table[0]].name} y {guests[table[1]].name} porque…”</h2><p>Pregúntales qué hacen normalmente, qué idiomas quieren aprender y qué plan prefieren para el fin de semana.</p></section>}</section>}

    {stage===5&&<section className="gala-page gala-goodbye"><header><span>05 · ÚLTIMO SALUDO · 6 MIN</span><h1>La conversación también termina bien.</h1><p>Elige una situación. El profesor responde como el invitado; tú resuelves el momento y cierras la charla.</p></header><div className="goodbye-grid">{[
      ["NO ESCUCHASTE","No entiendes el nombre. Pide repetir y confirma."],["LLEGASTE TARDE","Saluda, pide perdón y explica con una frase."],["QUIERES EL CONTACTO","Pide Instagram o teléfono de forma simple."],["TE VAS","Da las gracias, di que fue un placer y despídete."],
    ].map(([title,text],index)=><article key={title}><span>0{index+1}</span><h2>{title}</h2><p>{text}</p><div><b>Empieza:</b> {index===0?"Perdón, ¿puedes repetir?":index===1?"Hola, perdón por llegar tarde…":index===2?"¿Tienes Instagram?": "Gracias, fue un placer…"}</div></article>)}</div><Support/></section>}

    {stage===6&&<section className="gala-page gala-final"><header><span>FINAL · CONVERSACIÓN ABIERTA · 10 MIN</span><h1>Después de la gala</h1><p>No hay puntos ni respuestas correctas. Elige preguntas, escucha al profesor y pregúntale algo relacionado.</p></header><div className="final-grid">{finalQuestions.map(([question,follow],index)=><article key={question}><span>{String(index+1).padStart(2,"0")}</span><h2>{question}</h2><p>{follow} · ¿Y tú?</p></article>)}</div><section className="final-mission"><img src="/brand/mascot/standing-crossed.webp" alt="Mascota oficial de SPANISHCUE"/><div><small>CIERRE LIBRE</small><h2>Presenta a uno de los invitados como si fuera tu nuevo amigo.</h2><p>Di su nombre, origen, ciudad, trabajo, idiomas, qué le gusta y por qué quieres volver a hablar con esa persona.</p></div></section></section>}

    <footer className="gala-controls"><button disabled={stage===0} onClick={()=>go(stage-1)}>← ANTERIOR</button><span>{stage+1} / {stages.length} · {stages[stage][1]}</span>{stage<stages.length-1?<button onClick={()=>go(stage+1)}>SIGUIENTE →</button>:<Link href="/el-cine-de-las-tres-funciones">PRÓXIMA A1 →</Link>}</footer>
  </main>;
}
