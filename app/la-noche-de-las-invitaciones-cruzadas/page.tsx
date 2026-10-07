"use client";

import {ConversationFamily} from '../conversation-families/ConversationFamily';
import {sceneAtLevel} from '../conversation-narratives/advanced';
import {lessonTask} from '../conversation-narratives/pedagogy';
import {NativeStageSupport} from '../conversation-narratives/NativeStageSupport';
import type {CEFRLevel} from '../conversation-families/types';
import {narratives,narrativeLevels} from '../conversation-narratives/data';
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

const nativeGuests:Guest[]=[
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

function InvitacionesCruzadasNative({level}:{level:CEFRLevel}){
  const a0=level==="A0";
  const label=(es:string,en:string)=>a0?es+" / "+en:es;
  const lesson=narratives.gala;
  const [stage,setStage]=useState(0);
  const [guest,setGuest]=useState(0);
  const [revealed,setRevealed]=useState<number[]>([]);
  const [recovered,setRecovered]=useState<number[]>([]);
  const [table,setTable]=useState<number[]>([]);
  const [entry,setEntry]=useState("azul");
  const scenes=lesson.scenes.map((scene,index)=>sceneAtLevel('gala',index,scene,level));
  const scene=scenes[guest],task=lessonTask('gala',stage,scene,level);
  const guestEnglish=[['Spanish and English','architect','photography and coffee','SUN'],['Spanish','cook','music and travel','MOON'],['Spanish and French','designer','cinema and dancing','STAR'],['Spanish and Italian','nurse','running and cooking','COMET']];
  const guests=nativeGuests.map((item,index)=>({...item,country:label(item.country,["Colombia","Argentina","Spain","Mexico"][index]),language:label(item.language,guestEnglish[index][0]),job:label(item.job,guestEnglish[index][1]),likes:label(item.likes,guestEnglish[index][2]),symbol:label(item.symbol,guestEnglish[index][3]),clue:level==='A1'?item.clue:a0?scenes[index].hidden.join(' / '):scenes[index].fact[0]}));
  const active=guests[guest];
  const englishEntry=({azul:"blue",dorada:"gold",verde:"green"} as Record<string,string>)[entry];
  const levelQuestions=level==='A1'?finalQuestions:scenes.map((item,index)=>{const closing=lessonTask('gala',6,item,level);return [a0?item.model.join(' / '):closing.prompt[0],a0?'Repite. Después pregunta: ¿y tú? / Repeat. Then ask: and you?':closing.support[0],index] as const;});
  const go=(next:number)=>{setStage(Math.max(0,Math.min(stages.length-1,next)));window.scrollTo({top:0,behavior:"smooth"})};
  const reveal=(index:number)=>{setGuest(index);setRevealed(old=>old.includes(index)?old:[...old,index])};
  const chooseTable=(index:number)=>setTable(old=>old.includes(index)?old.filter(item=>item!==index):old.length<2?[...old,index]:old);

  return <main className="gala-app" style={{"--guest":active.color} as CSSProperties}>
    <header className="gala-top"><Link href="/"><img src="/brand/mascot/portrait.webp" alt=""/><span><b>SPANISHCUE</b><small>{level} {label("· CONVERSACIÓN","· CONVERSATION")}</small></span></Link><div><b>{label(stages[stage][0],lesson.stages[stage][1])}</b><span>{stages[stage][1]}</span></div><Link href="/">{label("BIBLIOTECA","LIBRARY")}</Link></header>
    <nav className="gala-progress" aria-label="Etapas de la clase">{stages.map(([name,time],index)=><button key={name} className={index===stage?"active":index<stage?"done":""} onClick={()=>go(index)}><i>{index<stage?"✓":index+1}</i><span>{label(name,lesson.stages[index][1])}<small>{time}</small></span></button>)}</nav>

    {stage===0&&<section className="gala-hero">
      <div className="gala-hero-image" aria-hidden="true"/><div className="gala-shade"/>
      <div className="gala-hero-copy"><span>{level} {label("· HABLAR DESDE EL PRIMER MINUTO","· SPEAK FROM THE FIRST MINUTE")}</span><h1>{label("LA NOCHE DE LAS","THE NIGHT OF")}<br/><em>{label("INVITACIONES CRUZADAS","MIXED INVITATIONS")}</em></h1><p>{label("En la entrada, todas las invitaciones cambiaron de dueño. Para devolverlas, tienes que conocer a los invitados.","At the entrance, all invitations changed owners. To return them, you need to meet the guests.")}</p><div className="gala-entry"><small>{label("ELIGE TU INVITACIÓN Y HABLA","CHOOSE YOUR INVITATION AND SPEAK")}</small><div>{["azul","dorada","verde"].map(color=><button className={entry===color?"active":""} key={color} onClick={()=>setEntry(color)}>{label(color,({azul:"blue",dorada:"gold",verde:"green"} as Record<string,string>)[color])}</button>)}</div><h2>{a0?label(`Tengo la invitación ${entry}. Me llamo Alex.`,`I have the ${englishEntry} invitation. My name is Alex.`):level==="A1"?<>“Tengo la invitación {entry}. Me llamo… Soy de… Hoy estoy…”</>:task.support[0]}</h2></div><button className="gala-primary" onClick={()=>go(1)}>{label("ENTRAR A LA GALA","ENTER THE GALA")} <span>→</span></button></div>
    </section>}

    {stage===1&&<section className="gala-page gala-card-stage"><header><span>{label("01 · TU TARJETA · 6 MIN","01 · YOUR CARD · 6 MIN")}</span><h1>{label("Preséntate sin leer un discurso.","Introduce yourself without reading a speech.")}</h1><p>{level==="A1"?"Usa las casillas como apoyo. Después aparta la vista y dilo con tus propias palabras.":(a0?task.prompt.join(" / "):task.prompt[0])}</p></header><div className="identity-card"><div className="identity-mark">SC</div><div><small>{label("NOMBRE","NAME")}</small><h2>{a0?"Me llamo Alex. / My name is Alex.":"Me llamo…"}</h2></div><div className="identity-grid"><article><span>{label("ORIGEN","ORIGIN")}</span><b>{a0?"Soy de Colombia. / I am from Colombia.":"Soy de…"}</b></article><article><span>{label("CIUDAD","CITY")}</span><b>{a0?"Vivo en Medellín. / I live in Medellín.":"Vivo en…"}</b></article><article><span>{label("IDIOMAS","LANGUAGES")}</span><b>{a0?"Hablo inglés. / I speak English.":"Hablo…"}</b></article><article><span>{label("TRABAJO / ESTUDIO","WORK / STUDIES")}</span><b>{a0?"Estudio español. / I study Spanish.":"Trabajo como… / Estudio…"}</b></article><article><span>{label("ALGO PERSONAL","SOMETHING PERSONAL")}</span><b>{a0?"Me gusta el café. / I like coffee.":"Me gusta…"}</b></article><article><span>{label("PUENTE","CONNECT")}</span><b>{label("¿Y tú?","And you?")}</b></article></div><footer><b>{label("DESAFÍO ORAL","SPEAKING CHALLENGE")}</b><p>{label("Di tu nombre, país, ciudad, idioma y una cosa que te gusta. Después hazle dos preguntas al profesor.","Say your name, country, city, language and one thing you like. Then ask your teacher two questions.")}</p></footer></div>{level==="A1"?<Support/>:<NativeStageSupport kind="gala" stage={stage} scene={scene} level={level} className="gala-support"/>}</section>}

    {stage===2&&<section className="gala-page gala-guests"><header><span>{label("02 · SPEED MEETING · 7 MIN","02 · QUICK INTRODUCTIONS · 7 MIN")}</span><h1>{label("Cuatro invitados. Ninguna presentación escrita.","Four guests. No written introductions.")}</h1><p>{level==="A1"?"Abre un retrato. El profesor es ese personaje: salúdalo, pregúntale tres datos y responde las mismas preguntas sobre ti.":(a0?task.prompt.join(" / "):task.prompt[0])}</p></header><div className="guest-grid">{guests.map((item,index)=><button key={item.name} onClick={()=>reveal(index)} className={`${guest===index?"active":""} ${revealed.includes(index)?"revealed":""}`} style={{"--card":item.color} as CSSProperties}><span>{revealed.includes(index)?item.name:"?"}</span><b>{item.symbol}</b><small>{revealed.includes(index)?`${item.country} · ${item.job}`:label("INVITADO OCULTO","HIDDEN GUEST")}</small></button>)}</div><article className="guest-profile"><div><span>{active.symbol}</span><small>{label("INVITADO","GUEST")} {String(guest+1).padStart(2,"0")}</small><h2>{active.name}</h2><p>{active.city}, {active.country}</p></div><dl><div><dt>{label("IDIOMAS","LANGUAGES")}</dt><dd>{active.language}</dd></div><div><dt>{label("TRABAJO","JOB")}</dt><dd>{active.job}</dd></div><div><dt>{label("LE GUSTA","LIKES")}</dt><dd>{active.likes}</dd></div></dl><section>{level!=="A1"&&<p>{a0?scene.fact.join(" / "):scene.fact[0]}</p>}<small>{label("TU TURNO: NO LEAS UNA LISTA","YOUR TURN: HAVE A CONVERSATION")}</small><h3>{label("“Hola, soy… ¿Cómo te llamas? ¿De dónde eres? ¿Dónde vives? ¿Qué haces? ¿Qué te gusta?”","“Hi, I am… What is your name? Where are you from? Where do you live? What do you do? What do you like?”")}</h3><p>{label("Follow-up: “¿Y tú?” · “¿También?” · “¿Con quién?”","Follow-up: “And you?” · “You too?” · “With whom?”")}</p></section></article></section>}

    {stage===3&&<section className="gala-page gala-matches"><header><span>{label("03 · EL CRUCE · 6 MIN","03 · MIXED INVITATIONS · 6 MIN")}</span><h1>{label("Devuelve cada invitación hablando.","Return each invitation by speaking.")}</h1><p>{level==="A1"?"Lee una pista breve, elige a la persona y explica: “Creo que es para… porque…”. Después haz una pregunta para confirmar.":(a0?task.prompt.join(" / "):task.prompt[0])}</p></header><div className="match-list">{guests.map((item,index)=><article key={item.name} style={{"--card":item.color} as CSSProperties}><div><span>{item.symbol}</span><p>{item.clue}</p></div><div>{guests.map((candidate,candidateIndex)=><button key={candidate.name} onClick={()=>{setGuest(candidateIndex);if(candidateIndex===index)setRecovered(old=>old.includes(index)?old:[...old,index])}} className={recovered.includes(index)&&candidateIndex===index?"correct":""}>{candidate.name}</button>)}</div><footer>{recovered.includes(index)?<b>{label("INVITACIÓN RECUPERADA · Ahora di una cosa que tú tienes en común con","INVITATION RETURNED · Now say one thing you have in common with")} {item.name}.</b>:<span>{label("Elige, explica y pregunta.","Choose, explain and ask.")}</span>}</footer></article>)}</div></section>}

    {stage===4&&<section className="gala-page gala-table"><header><span>{label("04 · MESA PARA TRES · 6 MIN","04 · TABLE FOR THREE · 6 MIN")}</span><h1>{label("Solo hay dos lugares libres.","There are only two free seats.")}</h1><p>{level==="A1"?"Quédate con dos invitados. Por cada elección, explica una razón y prepara una pregunta real para la mesa.":(a0?task.prompt.join(" / "):task.prompt[0])}</p></header><div className="table-layout"><div className="round-table"><span>{label("TÚ","YOU")}</span>{[0,1].map(slot=><i key={slot}>{table[slot]!==undefined?guests[table[slot]].name:label("LUGAR LIBRE","FREE SEAT")}</i>)}</div><div className="table-picks">{guests.map((item,index)=><button key={item.name} className={table.includes(index)?"active":""} onClick={()=>chooseTable(index)}><span style={{background:item.color}}>{item.symbol[0]}</span><div><b>{item.name}</b><small>{item.job} · {item.likes}</small></div><i>{table.includes(index)?"✓":"+"}</i></button>)}</div></div>{table.length===2&&<section className="table-talk"><b>{label("CONVERSACIÓN EN LA MESA","TABLE CONVERSATION")}</b><h2>{a0?label(`Quiero sentarme con ${guests[table[0]].name} y ${guests[table[1]].name}.`,`I want to sit with ${guests[table[0]].name} and ${guests[table[1]].name}.`):level==="A1"?<>“Quiero sentarme con {guests[table[0]].name} y {guests[table[1]].name} porque…”</>:task.prompt[0]}</h2><p>{label("Pregúntales qué hacen normalmente, qué idiomas quieren aprender y qué plan prefieren para el fin de semana.","Ask what they usually do, which languages they want to learn and what weekend plan they prefer.")}</p></section>}</section>}

    {stage===5&&<section className="gala-page gala-goodbye"><header><span>{label("05 · ÚLTIMO SALUDO · 6 MIN","05 · SAYING GOODBYE · 6 MIN")}</span><h1>{label("La conversación también termina bien.","End the conversation well too.")}</h1><p>{level==="A1"?"Elige una situación. El profesor responde como el invitado; tú resuelves el momento y cierras la charla.":(a0?task.prompt.join(" / "):task.prompt[0])}</p></header><div className="goodbye-grid">{[
      ["NO ESCUCHASTE","No entiendes el nombre. Pide repetir y confirma."],["LLEGASTE TARDE","Saluda, pide perdón y explica con una frase."],["QUIERES EL CONTACTO","Pide Instagram o teléfono de forma simple."],["TE VAS","Da las gracias, di que fue un placer y despídete."],
    ].map(([title,text],index)=><article key={title}><span>0{index+1}</span><h2>{label(title,["YOU DID NOT HEAR","YOU ARRIVED LATE","YOU WANT THEIR CONTACT","YOU ARE LEAVING"][index])}</h2><p>{level==="A1"?text:a0?label(text,["You do not understand the name. Ask for repetition and confirm.","Greet the guest, apologise and explain in one sentence.","Ask for their Instagram or phone number simply.","Thank them, say it was a pleasure and say goodbye."][index]):task.prompt[0]}</p><div><b>{label("Empieza:","Start:")}</b> {a0?["Perdón, ¿puedes repetir? / Sorry, can you repeat?","Hola, perdón por llegar tarde. / Hi, sorry I am late.","¿Tienes Instagram? / Do you have Instagram?","Gracias. Fue un placer. Hasta luego. / Thank you. It was a pleasure. See you later."][index]:level==="A1"?index===0?"Perdón, ¿puedes repetir?":index===1?"Hola, perdón por llegar tarde…":index===2?"¿Tienes Instagram?": "Gracias, fue un placer…":task.support[0]}</div></article>)}</div>{level==="A1"?<Support/>:<NativeStageSupport kind="gala" stage={stage} scene={scene} level={level} className="gala-support"/>}</section>}

    {stage===6&&<section className="gala-page gala-final"><header><span>{label("FINAL · CONVERSACIÓN ABIERTA · 10 MIN","FINAL · OPEN CONVERSATION · 10 MIN")}</span><h1>{label("Después de la gala","After the gala")}</h1><p>{level==="A1"?"No hay puntos ni respuestas correctas. Elige preguntas, escucha al profesor y pregúntale algo relacionado.":(a0?task.prompt.join(" / "):task.prompt[0])}</p></header><div className="final-grid">{levelQuestions.map(([question,follow],index)=><article key={question}><span>{String(index+1).padStart(2,"0")}</span><h2>{question}</h2><p>{follow} {label("· ¿Y tú?","· And you?")}</p></article>)}</div><section className="final-mission"><img src="/brand/mascot/standing-crossed.webp" alt="Mascota oficial de SPANISHCUE"/><div><small>{label("CIERRE LIBRE","OPEN CLOSING")}</small><h2>{label("Presenta a uno de los invitados como si fuera tu nuevo amigo.","Introduce a guest as your new friend.")}</h2><p>{label("Di su nombre, origen, ciudad, trabajo, idiomas, qué le gusta y por qué quieres volver a hablar con esa persona.","Say their name, origin, city, job, languages, likes and why you want to speak with them again.")}</p></div></section></section>}

    {level!=="A1"&&stage!==1&&stage!==5&&<NativeStageSupport key={`${stage}-${guest}`} kind="gala" stage={stage} scene={scene} level={level} className="gala-support"/>}
    <footer className="gala-controls"><button disabled={stage===0} onClick={()=>go(stage-1)}>{label("← ANTERIOR","← PREVIOUS")}</button><span>{stage+1} / {stages.length} · {stages[stage][1]}</span>{stage<stages.length-1?<button onClick={()=>go(stage+1)}>{label("SIGUIENTE →","NEXT →")}</button>:<Link href="/el-cine-de-las-tres-funciones">{label("PRÓXIMA A1 →","NEXT LESSON →")}</Link>}</footer>
  </main>;
}

export default function InvitacionesCruzadas(){
 const lesson=narratives.gala;
 return <ConversationFamily id={lesson.id} title={lesson.title} levels={narrativeLevels} defaultLevel="A1">{level=><InvitacionesCruzadasNative key={level} level={level}/>}</ConversationFamily>;
}
