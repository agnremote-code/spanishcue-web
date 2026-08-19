"use client";

import {useEffect,useState} from "react";
import "./style.css";

type Pair=[string,string];
type Conjugation={verb:Pair;endings?:Pair;rows:Array<{subject:Pair;form:string;meaning:string}>};
const PairText=({pair,className=""}:{pair:Pair;className?:string})=><div className={`past-pair ${className}`}><b>{pair[0]}</b><span>{pair[1]}</span></div>;

const persons:Pair[]=[["yo","I"],["tú / vos","you (singular)"],["él / ella / usted","he / she / you (formal)"],["nosotros/as","we"],["vosotros/as","you all (Spain)"],["ellos / ellas / ustedes","they / you all"]];
const conjugation=(verb:Pair,forms:string[],meanings:string[],endings?:Pair):Conjugation=>({verb,endings,rows:forms.map((form,index)=>({subject:persons[index],form,meaning:meanings[index]}))});

const indefiniteRegular:Conjugation[]=[
  conjugation(["-AR · HABLAR","to speak"],["hablé","hablaste","habló","hablamos","hablasteis","hablaron"],["I spoke","you spoke","he / she / you spoke","we spoke","you all spoke","they / you all spoke"],["é · aste · ó · amos · asteis · aron","regular -AR endings"]),
  conjugation(["-ER · COMER","to eat"],["comí","comiste","comió","comimos","comisteis","comieron"],["I ate","you ate","he / she / you ate","we ate","you all ate","they / you all ate"],["í · iste · ió · imos · isteis · ieron","regular -ER endings"]),
  conjugation(["-IR · VIVIR","to live"],["viví","viviste","vivió","vivimos","vivisteis","vivieron"],["I lived","you lived","he / she / you lived","we lived","you all lived","they / you all lived"],["í · iste · ió · imos · isteis · ieron","regular -IR endings"])
];

const indefiniteIrregulars:Conjugation[]=[
  conjugation(["IR / SER","to go / to be"],["fui","fuiste","fue","fuimos","fuisteis","fueron"],["I went / was","you went / were","he / she / you went or was","we went / were","you all went / were","they / you all went or were"]),
  conjugation(["TENER","to have"],["tuve","tuviste","tuvo","tuvimos","tuvisteis","tuvieron"],["I had","you had","he / she / you had","we had","you all had","they / you all had"]),
  conjugation(["HACER","to do / to make"],["hice","hiciste","hizo","hicimos","hicisteis","hicieron"],["I did / made","you did / made","he / she / you did or made","we did / made","you all did / made","they / you all did or made"]),
  conjugation(["ESTAR","to be"],["estuve","estuviste","estuvo","estuvimos","estuvisteis","estuvieron"],["I was","you were","he / she / you were","we were","you all were","they / you all were"]),
  conjugation(["PODER","can / to be able to"],["pude","pudiste","pudo","pudimos","pudisteis","pudieron"],["I managed to","you managed to","he / she / you managed to","we managed to","you all managed to","they / you all managed to"]),
  conjugation(["QUERER","to want"],["quise","quisiste","quiso","quisimos","quisisteis","quisieron"],["I wanted / tried","you wanted / tried","he / she / you wanted or tried","we wanted / tried","you all wanted / tried","they / you all wanted or tried"])
];

const imperfectRegular:Conjugation[]=[
  conjugation(["-AR · HABLAR","to speak / used to speak"],["hablaba","hablabas","hablaba","hablábamos","hablabais","hablaban"],["I used to speak","you used to speak","he / she / you used to speak","we used to speak","you all used to speak","they / you all used to speak"],["ABA · ABAS · ABA · ÁBAMOS · ABAIS · ABAN","regular -AR endings"]),
  conjugation(["-ER · COMER","to eat / used to eat"],["comía","comías","comía","comíamos","comíais","comían"],["I used to eat","you used to eat","he / she / you used to eat","we used to eat","you all used to eat","they / you all used to eat"],["ÍA · ÍAS · ÍA · ÍAMOS · ÍAIS · ÍAN","regular -ER endings"]),
  conjugation(["-IR · VIVIR","to live / used to live"],["vivía","vivías","vivía","vivíamos","vivíais","vivían"],["I used to live","you used to live","he / she / you used to live","we used to live","you all used to live","they / you all used to live"],["ÍA · ÍAS · ÍA · ÍAMOS · ÍAIS · ÍAN","regular -IR endings"])
];

const imperfectIrregulars:Conjugation[]=[
  conjugation(["SER","to be"],["era","eras","era","éramos","erais","eran"],["I was / used to be","you were / used to be","he / she / you was or were","we were / used to be","you all were / used to be","they / you all were or used to be"]),
  conjugation(["IR","to go"],["iba","ibas","iba","íbamos","ibais","iban"],["I used to go / was going","you used to go / were going","he / she / you used to go","we used to go / were going","you all used to go / were going","they / you all used to go"]),
  conjugation(["VER","to see"],["veía","veías","veía","veíamos","veíais","veían"],["I used to see / was seeing","you used to see / were seeing","he / she / you used to see","we used to see / were seeing","you all used to see / were seeing","they / you all used to see"])
];

const indefiniteClues:Pair[]=[["ayer","yesterday"],["anoche","last night"],["anteayer","the day before yesterday"],["la semana pasada","last week"],["el mes pasado","last month"],["el año pasado","last year"],["hace dos días","two days ago"],["en 2025","in 2025"],["una vez","once"],["tres veces","three times"]];
const choices=[
  {q:"Cuando era chico, ______ al fútbol todos los días.",options:[["jugué · INDEFINIDO",false],["jugaba · IMPERFECTO",true]] as [string,boolean][],ok:["Correcto: es un hábito repetido en el pasado.","Correct: it is a repeated habit in the past."] as Pair},
  {q:"Ayer ______ al fútbol con mis amigos.",options:[["jugaba · IMPERFECTO",false],["jugué · INDEFINIDO",true]] as [string,boolean][],ok:["Correcto: “ayer” presenta un evento completo.","Correct: “yesterday” presents a completed event."] as Pair},
  {q:"Yo ______ cuando sonó el teléfono.",options:[["dormía · IMPERFECTO",true],["dormí · INDEFINIDO",false]] as [string,boolean][],ok:["Correcto: dormir era la acción en progreso; el teléfono sonó como evento nuevo.","Correct: sleeping was the ongoing action; the telephone rang as a new event."] as Pair},
  {q:"De repente, alguien ______ la puerta.",options:[["abría · IMPERFECTO",false],["abrió · INDEFINIDO",true]] as [string,boolean][],ok:["Correcto: “de repente” introduce un acontecimiento.","Correct: “suddenly” introduces an event."] as Pair},
  {q:"______ en México durante diez años y después me mudé a España.",options:[["Viví · INDEFINIDO",true],["Vivía · IMPERFECTO",false]] as [string,boolean][],ok:["Correcto: la etapa aparece como terminada.","Correct: the period is presented as finished."] as Pair},
  {q:"Cuando ______ en México, comía tacos todos los días.",options:[["viví · INDEFINIDO",false],["vivía · IMPERFECTO",true]] as [string,boolean][],ok:["Correcto: “cuando vivía” crea el contexto de un hábito.","Correct: “when I lived” creates the context for a habit."] as Pair}
];

export default function PastB1(){
  const [revealed,setRevealed]=useState<number[]>([]);
  const [selectedQuestions,setSelectedQuestions]=useState<string[]>([]);
  const [answers,setAnswers]=useState<Record<number,boolean>>({});
  const [builder,setBuilder]=useState<Record<string,string>>({});
  const [progress,setProgress]=useState(0);
  useEffect(()=>{const update=()=>{const total=document.documentElement.scrollHeight-window.innerHeight;setProgress(total?Math.min(100,window.scrollY/total*100):0)};window.addEventListener("scroll",update,{passive:true});update();return()=>window.removeEventListener("scroll",update)},[]);
  const toggleQuestion=(q:string)=>setSelectedQuestions(items=>items.includes(q)?items.filter(x=>x!==q):[...items,q]);
  const scrollTo=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"});
  return <main className="past-shell" id="top">
    <nav className="past-nav"><a href="/" className="past-brand"><img src="/chespanish-guide-avatar.png" alt=""/><span><b>CHESPANISH</b><small>B1 · GRAMÁTICA + CONVERSACIÓN</small></span></a><div><button onClick={()=>scrollTo("indefinido")}>01 Indefinido</button><button onClick={()=>scrollTo("imperfecto")}>02 Imperfecto</button><button onClick={()=>scrollTo("comparacion")}>03 Comparación</button></div><a href="/">← Biblioteca</a><i><span style={{width:`${progress}%`}}/></i></nav>

    <header className="past-hero section-wide"><span>CLASE INTERACTIVA · INTERACTIVE LESSON</span><h1>EL<br/><em>PASADO</em></h1><p>Indefinido + Imperfecto<small>Preterite + Imperfect</small></p><div className="past-route"><article><small>PRIMERO · FIRST</small><b>¿QUÉ PASÓ?</b><span>What happened?</span></article><article><small>DESPUÉS · THEN</small><b>¿CÓMO ERA?</b><span>What was it like?</span></article><article><small>FINALMENTE · FINALLY</small><b>¿CUÁL ELIJO?</b><span>Which one do I choose?</span></article></div><button className="past-main-button" onClick={()=>scrollTo("indefinido")}>EMPEZAR · START ↓</button></header>

    <section className="chapter-intro coral" id="indefinido"><span>01</span><div className="section-wide"><small>PARTE 1 · PART 1</small><h2>PRETÉRITO<br/>INDEFINIDO</h2><p>¿QUÉ PASÓ?</p><em>Completed events in the past</em><button onClick={()=>scrollTo("indef-idea")}>VAMOS · LET’S GO ↓</button></div></section>

    <section className="section-wide" id="indef-idea"><SectionHead number="01" title="¿QUÉ PASÓ?" color="coral"/><PairText pair={["Usamos el indefinido para presentar una acción pasada como completa.","We use the preterite to present a past action as complete."]} className="big-theory"/><div className="example-grid">{([["Ayer trabajé.","I worked yesterday."],["Anoche comí pizza.","I ate pizza last night."],["El sábado fui al cine.","I went to the cinema on Saturday."],["Viví en México cinco años.","I lived in Mexico for five years."]] as Pair[]).map(pair=><PairText key={pair[0]} pair={pair}/>)}</div><Callout pair={["La acción puede durar 5 minutos o 5 años. Lo importante es que la presentamos como TERMINADA.","The action can last five minutes or five years. What matters is that we present it as FINISHED."]}/></section>

    <section className="section-wide compact"><SectionHead label="USOS PRINCIPALES · MAIN USES" title="TRES MANERAS DE USARLO" color="coral"/><div className="uses-grid">{[
      ["⚡","Un evento","An event",["Ayer compré un teléfono.","Yesterday I bought a phone."]],
      ["→","Una secuencia","A sequence",["Me levanté → desayuné → salí.","I got up → had breakfast → left."]],
      ["⚑","Una etapa terminada","A finished period",["Viví en Londres durante tres años.","I lived in London for three years."]]
    ].map(item=><article key={item[1] as string}><i>{item[0] as string}</i><h3>{item[1] as string}<small>{item[2] as string}</small></h3><PairText pair={item[3] as Pair}/></article>)}</div></section>

    <section className="section-wide compact"><SectionHead label="PISTAS · CLUES" title="PISTAS DEL INDEFINIDO" color="coral"/><div className="clue-grid">{indefiniteClues.map(pair=><PairText key={pair[0]} pair={pair}/>)}</div><p className="past-note">Son pistas, no reglas automáticas.<small>They are clues, not automatic rules.</small></p></section>

    <section className="section-wide compact"><SectionHead label="FORMAS · FORMS" title="CONJUGACIONES COMPLETAS" color="coral"/><p className="past-note table-intro"><b>EL PATRÓN · THE PATTERN</b><br/>Cada persona aparece por separado: forma española, sujeto y significado.<small>Every person is shown separately: Spanish form, subject and meaning.</small></p><div className="full-conjugation-grid">{indefiniteRegular.map(item=><ConjugationTable key={item.verb[0]} item={item} tone="coral"/>)}</div><div className="double-callout"><Callout pair={["TÚ y VOS tienen la misma forma aquí: hablaste / comiste / viviste.","TÚ and VOS use the same form here: hablaste / comiste / viviste."]}/><Callout pair={["VOSOTROS se usa principalmente en España. En Argentina usamos USTEDES.","VOSOTROS is used mainly in Spain. In Argentina we use USTEDES."]}/></div></section>

    <section className="section-wide compact"><div className="dark-practice"><small>MINI DESAFÍO · MINI CHALLENGE</small><h2>PROBÁ PRIMERO.</h2><p>Try first. Then reveal the answer.</p>{[
      ["Ayer yo ______ con mi mamá.","hablé"],["Anoche vos ______ pizza.","comiste"],["Ella ______ en España durante dos años.","vivió"],["Ayer ______ hasta tarde.","trabajé"]
    ].map((item,index)=><article key={item[0]}><b>{item[0]}</b><button onClick={()=>setRevealed(items=>items.includes(index)?items.filter(x=>x!==index):[...items,index])}>{revealed.includes(index)?"OCULTAR · HIDE":"VER RESPUESTA · REVEAL"}</button>{revealed.includes(index)&&<span>{item[1]}</span>}</article>)}</div></section>

    <section className="section-wide compact"><SectionHead label="IRREGULARES · IRREGULARS" title="LOS REBELDES 😈" color="coral"/><div className="full-conjugation-grid irregular-full">{indefiniteIrregulars.map(item=><ConjugationTable key={item.verb[0]} item={item} tone="coral"/>)}</div><p className="past-note">No necesitás memorizar todos hoy. Empezá por reconocerlos.<small>You do not need to memorise all of them today. Start by recognising them.</small></p></section>

    <SpeakingPanel tone="coral" title="AYER" prompt="¿QUÉ HICISTE AYER?" questions={["¿A qué hora te despertaste?","¿Qué desayunaste?","¿Trabajaste o estudiaste?","¿Saliste de casa?","¿Con quién hablaste?","¿Qué comiste?","¿Qué hiciste por la noche?"]} supports={[["me desperté","I woke up"],["desayuné","I had breakfast"],["trabajé","I worked"],["fui a…","I went to…"],["comí","I ate"],["volví","I came back"],["me dormí","I fell asleep"]]} selected={selectedQuestions} toggle={toggleQuestion}/>

    <section className="chapter-intro violet" id="imperfecto"><span>02</span><div className="section-wide"><small>PARTE 2 · PART 2</small><h2>PRETÉRITO<br/>IMPERFECTO</h2><p>¿CÓMO ERA? · ¿QUÉ PASABA?</p><em>Background, habits and ongoing situations</em></div></section>

    <section className="section-wide"><SectionHead label="LA ESCENA · THE SCENE" title="MIRÁ LA ESCENA" color="violet"/><div className="past-scene">{([["Era de noche.","It was night."],["Hacía frío.","It was cold."],["La calle estaba vacía.","The street was empty."],["Yo caminaba hacia mi casa.","I was walking home."]] as Pair[]).map(pair=><PairText key={pair[0]} pair={pair}/>)}</div><Callout pair={["¿Pasó algo nuevo? Todavía no. Estamos observando una escena. EL IMPERFECTO CONSTRUYE EL ESCENARIO.","Did anything new happen? Not yet. We are observing a scene. THE IMPERFECT BUILDS THE SETTING."]}/></section>

    <section className="section-wide compact"><SectionHead label="USOS PRINCIPALES · MAIN USES" title="LOS 4 USOS PRINCIPALES" color="violet"/><div className="uses-grid four">{[
      ["↻","Hábito","Habit",["Cuando era chico, jugaba al fútbol.","When I was a child, I used to play football."]],
      ["◉","Descripción","Description",["Mi casa era pequeña.","My house was small."]],
      ["☂","Contexto","Background",["Era de noche y llovía.","It was night and it was raining."]],
      ["…","En progreso","Ongoing action",["A las ocho todavía trabajaba.","At eight I was still working."]]
    ].map(item=><article className="violet-use" key={item[1] as string}><i>{item[0] as string}</i><h3>{item[1] as string}<small>{item[2] as string}</small></h3><PairText pair={item[3] as Pair}/></article>)}</div></section>

    <section className="section-wide compact"><SectionHead label="FORMAS · FORMS" title="CONJUGACIONES COMPLETAS" color="violet"/><p className="past-note table-intro"><b>MUCHO MÁS FÁCIL · MUCH EASIER</b><br/>El patrón es muy regular y cada persona está escrita completa.<small>The pattern is highly regular and every person is written in full.</small></p><div className="full-conjugation-grid">{imperfectRegular.map(item=><ConjugationTable key={item.verb[0]} item={item} tone="violet"/>)}</div><div className="double-callout"><Callout pair={["-ER + -IR = MISMO PATRÓN","-ER + -IR = SAME PATTERN"]}/><Callout pair={["YO = ÉL / ELLA · yo hablaba / ella hablaba","YO = ÉL / ELLA · yo hablaba / ella hablaba"]}/></div></section>

    <section className="section-wide compact"><SectionHead label="IRREGULARES · IRREGULARS" title="SOLO 3 IRREGULARES" color="violet"/><div className="full-conjugation-grid">{imperfectIrregulars.map(item=><ConjugationTable key={item.verb[0]} item={item} tone="violet"/>)}</div><Callout pair={["BUENAS NOTICIAS: SOLO 3","GOOD NEWS: ONLY THREE"]}/></section>

    <SpeakingPanel tone="violet" title="CUANDO ERAS CHICO/A…" prompt="HABLÁ DE TU INFANCIA" questions={["¿Dónde vivías?","¿Cómo era tu casa?","¿Qué hacías después de la escuela?","¿Qué programas mirabas?","¿Qué música escuchabas?","¿Tenías una comida favorita?","¿Cómo eran tus amigos?","¿Qué hacías los fines de semana?"]} supports={[["vivía","I used to live"],["jugaba","I used to play"],["miraba","I used to watch"],["iba","I used to go"],["tenía","I had"],["era","it was"]]} selected={selectedQuestions} toggle={toggleQuestion}/>

    <section className="compare-intro" id="comparacion"><div><small>03 · INDEFINIDO</small><h2>¿QUÉ PASÓ?</h2><span>What happened?</span></div><div><small>03 · IMPERFECTO</small><h2>¿CÓMO ERA?<br/>¿QUÉ PASABA?</h2><span>What was it like? What was happening?</span><button onClick={()=>scrollTo("story-layers")}>COMPARAR · COMPARE ↓</button></div></section>

    <section className="section-wide" id="story-layers"><SectionHead label="COMPARACIÓN · COMPARISON" title="UNA HISTORIA TIENE DOS CAPAS"/><div className="story-layers"><article><h3>IMPERFECTO · ESCENARIO<small>IMPERFECT · SETTING</small></h3><PairText pair={["Era de noche. Hacía frío. La calle estaba vacía. Yo caminaba.","It was night. It was cold. The street was empty. I was walking."]}/></article><article><h3>INDEFINIDO · ACONTECIMIENTOS<small>PRETERITE · EVENTS</small></h3><PairText pair={["Vi un taxi. Lo paré. Subí. Volví a casa.","I saw a taxi. I stopped it. I got in. I returned home."]}/></article></div><Callout pair={["IMPERFECTO = EL ESCENARIO · INDEFINIDO = LOS ACONTECIMIENTOS","IMPERFECT = THE SETTING · PRETERITE = THE EVENTS"]}/></section>

    <section className="section-wide compact"><SectionHead label="INTERRUPCIÓN · INTERRUPTION" title="UNA ACCIÓN INTERRUMPE OTRA"/><div className="timeline"><div><b>Yo dormía…</b><i/></div><div><b>SONÓ el teléfono.</b><span/></div></div><div className="example-grid three-examples">{([["Mientras caminaba, vi a Ana.","While I was walking, I saw Ana."],["Trabajaba cuando recibí un mensaje.","I was working when I received a message."],["Cocinábamos cuando llegó Juan.","We were cooking when Juan arrived."]] as Pair[]).map(pair=><PairText key={pair[0]} pair={pair}/>)}</div></section>

    <section className="section-wide compact"><SectionHead label="SIMULTANEIDAD · SIMULTANEOUS ACTIONS" title="DOS COSAS AL MISMO TIEMPO"/><div className="timeline"><div><b>Yo cocinaba</b><i/></div><div><b>Ana estudiaba</b><i/></div></div><Callout pair={["DOS SITUACIONES EN PROGRESO → IMPERFECTO + IMPERFECTO","TWO ONGOING SITUATIONS → IMPERFECT + IMPERFECT"]}/></section>

    <section className="section-wide compact"><SectionHead label="PERSPECTIVA · PERSPECTIVE" title="EL MISMO VERBO, OTRO SIGNIFICADO"/><div className="perspective-grid">{[
      ["ERA / FUE",["Mi profesor era simpático.","My teacher was nice. (description)"],["La reunión fue interesante.","The meeting was interesting. (complete event)"]],
      ["ESTABA / ESTUVO",["Estaba enfermo cuando llamaste.","I was ill when you called. (background)"],["Estuvo enfermo tres días.","He was ill for three days. (complete period)"]],
      ["TENÍA / TUVE",["Tenía un problema.","I had a problem. (situation)"],["Tuve un problema ayer.","I had a problem yesterday. (specific event)"]],
      ["CONOCÍA / CONOCÍ",["Conocía a Ana.","I knew Ana."],["Conocí a Ana en 2024.","I met Ana in 2024."]],
      ["PODÍA / PUDE",["Podía nadar.","I knew how to swim."],["Finalmente pude abrir la puerta.","I finally managed to open the door."]]
    ].map(item=><article key={item[0] as string}><h3>{item[0] as string}</h3><PairText pair={item[1] as Pair}/><PairText pair={item[2] as Pair}/></article>)}</div><Callout pair={["Cambiar el tiempo puede cambiar la perspectiva —y a veces el significado.","Changing the tense can change the perspective —and sometimes the meaning."]}/></section>

    <section className="section-wide compact"><div className="summary-grid"><article><h2>INDEFINIDO 🟠</h2><PairText pair={["¿QUÉ PASÓ?","WHAT HAPPENED?"]}/><ul><li>evento · event</li><li>secuencia · sequence</li><li>principio o final · beginning or end</li><li>resultado · result</li><li>número concreto · specific number of times</li><li>etapa terminada · finished period</li></ul><b>Llegué. / Comí. / Me fui.</b></article><article><h2>IMPERFECTO 🟣</h2><PairText pair={["¿CÓMO ERA? ¿QUÉ PASABA?","WHAT WAS IT LIKE? WHAT WAS HAPPENING?"]}/><ul><li>descripción · description</li><li>hábito · habit</li><li>contexto · background</li><li>acción en progreso · ongoing action</li><li>edad, hora, clima, estado · age, time, weather, state</li></ul><b>Era tarde. / Llovía. / Estaba cansado.</b></article></div></section>

    <section className="section-wide compact"><SectionHead label="ELEGÍ · CHOOSE" title="¿CUÁL ELEGÍS?"/><p className="past-note">Elegí un tiempo. Después comprobá por qué.<small>Choose a tense. Then check why.</small></p><div className="choice-list">{choices.map((item,index)=><article key={item.q}><h3>{index+1}. {item.q}</h3><div>{item.options.map(option=><button key={option[0]} className={answers[index]===option[1]?"selected":""} onClick={()=>setAnswers(current=>({...current,[index]:option[1]}))}>{option[0]}</button>)}</div>{index in answers&&<section className={answers[index]?"correct":"retry"}>{answers[index]?<PairText pair={item.ok}/>:<PairText pair={["Probá la otra opción. Pensá: ¿escenario, hábito o acontecimiento?","Try the other option. Think: setting, habit or completed event?"]}/>}</section>}</article>)}</div></section>

    <section className="section-wide compact"><div className="story-builder"><small>CONSTRUÍ LA HISTORIA · BUILD THE STORY</small><h2>ESCENARIO + EVENTO</h2><p>Elegí los verbos correctos para crear escenario y acontecimiento.<span>Choose the correct verbs to create the setting and event.</span></p><div><article><h3>ESCENARIO · SETTING</h3><p>Era de noche. Llovía.</p>{["Alejandro caminó.","Alejandro caminaba."].map(text=><button key={text} className={builder.setting===text?"selected":""} onClick={()=>setBuilder(current=>({...current,setting:text}))}>{text}</button>)}</article><article><h3>EVENTO · EVENT</h3><p>De repente…</p>{["sonaba el teléfono.","sonó el teléfono.","Contestó y habló con un amigo."].map(text=><button key={text} className={builder.event===text?"selected":""} onClick={()=>setBuilder(current=>({...current,event:text}))}>{text}</button>)}</article></div>{builder.setting&&builder.event&&<PairText className="built-story" pair={[`Era de noche y llovía. ${builder.setting} De repente, ${builder.event}`,"It was night and raining. You built a setting and an event."]}/>}</div></section>

    <SpeakingPanel tone="coral" title="CONTAME UNA HISTORIA" prompt="DESAFÍO FINAL · FINAL CHALLENGE" instruction={["Contá algo que te pasó. Usá IMPERFECTO para construir el escenario y usá INDEFINIDO para contar qué pasó.","Tell something that happened to you. Use the IMPERFECT to build the setting and the PRETERITE to say what happened."]} questions={["¿Dónde estabas?","¿Cómo era el lugar?","¿Qué hacías?","⚡ ¿Qué pasó?","¿Qué hiciste después?"]} supports={[["era…","it was…"],["estaba…","I was…"],["hacía…","it was…"],["mientras…","while…"],["de repente…","suddenly…"],["entonces…","then…"],["después…","afterwards…"]]} selected={selectedQuestions} toggle={toggleQuestion}/>

    <footer className="past-final"><span>LISTO · DONE</span><h2>EL PASADO</h2><div><b>¿QUÉ PASÓ? → INDEFINIDO</b><b>¿CÓMO ERA / QUÉ PASABA? → IMPERFECTO</b></div><p>AHORA PODÉS CONTAR UNA HISTORIA COMPLETA.<small>NOW YOU CAN TELL A COMPLETE STORY.</small></p><button onClick={()=>scrollTo("top")}>VOLVER ARRIBA · BACK TO TOP ↑</button></footer>
  </main>;
}

function SectionHead({label,number,title,color="ink"}:{label?:string;number?:string;title:string;color?:string}){return <header className={`section-head ${color}`}><span>{label||`${number} · TEORÍA · THEORY`}</span><h2>{title}</h2></header>}
function Callout({pair}:{pair:Pair}){return <PairText pair={pair} className="callout"/>}
function ConjugationTable({item,tone}:{item:Conjugation;tone:"coral"|"violet"}){return <article className={`full-conjugation ${tone}`}><header><PairText pair={item.verb}/></header><div className="conjugation-labels"><span>PERSONA · PERSON</span><span>FORMA · FORM</span></div>{item.rows.map(row=><div className="conjugation-row" key={`${item.verb[0]}-${row.subject[0]}`}><PairText pair={row.subject}/><PairText pair={[row.form,row.meaning]}/></div>)}{item.endings&&<PairText pair={item.endings} className="ending-full"/>}</article>}
function SpeakingPanel({tone,title,prompt,instruction,questions,supports,selected,toggle}:{tone:"coral"|"violet";title:string;prompt:string;instruction?:Pair;questions:string[];supports:Pair[];selected:string[];toggle:(q:string)=>void}){return <section className="section-wide compact"><div className={`speaking-panel ${tone}`}><span>HABLÁ VOS · YOUR TURN</span><h2>{title}</h2><p>{prompt}</p>{instruction&&<PairText pair={instruction} className="speaking-instruction"/>}<div className="speaking-questions">{questions.map(q=><button key={q} className={selected.includes(q)?"active":""} onClick={()=>toggle(q)}>{q}</button>)}</div><div className="support-chips">{supports.map(pair=><PairText key={pair[0]} pair={pair}/>)}</div></div></section>}
