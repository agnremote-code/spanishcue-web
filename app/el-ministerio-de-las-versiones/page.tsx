"use client";

import {ConversationFamily} from '../conversation-families/ConversationFamily';
import type {CEFRLevel} from '../conversation-families/types';
import {lessonTask} from '../conversation-narratives/pedagogy';
import {ministryCases,ministryCouncil,ministryScene,ministryCopy,ministryReadings,ministryObjection} from './ministry-level-adapter';
import {MinistrySpeaking} from './MinistrySpeaking';
import './ministry-levels.css';
import {narratives,narrativeLevels} from '../conversation-narratives/data';
import Link from "next/link";
import {useState} from "react";
import "./style.css";

type Evidence={kind:string;source:string;text:string;prompt:string};
type CaseFile={
  id:string;number:string;title:string;desk:string;opening:string;phases:[Evidence,Evidence,Evidence,Evidence];
  teacher:string;close:string;registers?:{name:string;text:string;effect:string}[];
};

const cases:CaseFile[]=[
  {
    id:"lumen",number:"01",title:"La despedida voluntaria",desk:"EMPRESA · PODER Y EUFEMISMO",
    opening:"Inés Valcárcel ya no dirige Lumen. La empresa y ella publicaron mensajes amables con once minutos de diferencia.",
    phases:[
      {kind:"TITULAR",source:"ECONOMÍA HOY · 08:10",text:"La directora de Lumen abandona la empresa tras diferencias sobre el futuro.",prompt:"¿Qué crees que ocurrió realmente? ¿Qué da por sentado el verbo «abandona» y qué deja sin decir?"},
      {kind:"COMUNICADO",source:"LUMEN · CANAL OFICIAL",text:"Después de una conversación productiva, Inés ha decidido abrir una nueva etapa. Agradecemos profundamente su liderazgo.",prompt:"¿Qué intenta cerrar esta formulación? Distingue cortesía, información y control del relato."},
      {kind:"CHAT PRIVADO",source:"DIRECTOR FINANCIERO → CONSEJERA",text:"Ya no tenía acceso al presupuesto. Lo de «ha decidido» fue la última cortesía.",prompt:"¿Esto prueba que la despidieron o solo que su poder ya había terminado? Modula tu certeza."},
      {kind:"DATO VERIFICADO",source:"REGISTRO MERCANTIL",text:"Seis semanas antes de la reunión, Inés había inscrito su propia consultora. Después negoció una indemnización de salida.",prompt:"¿Renuncia, despido o salida negociada? Reinterpreta sin borrar las pruebas que contradicen tu nueva hipótesis."}
    ],
    teacher:"Interpreta al portavoz de Lumen. Evita los verbos despedir y forzar. Insiste en que ambas partes conservaron capacidad de decisión. Si el alumno te acorrala, admite que el consejo ya buscaba sustituto.",
    close:"Redacta oralmente una versión pública honesta que no humille a nadie. Después explica qué has omitido y por qué."
  },
  {
    id:"gala",number:"02",title:"La salida por la izquierda",desk:"FAMOSO · IRONÍA Y ACTUACIÓN",
    opening:"Un actor sale del escenario segundos después de una broma sobre su vida privada. El fragmento se vuelve viral sin el inicio ni el final.",
    phases:[
      {kind:"TITULAR",source:"PULSO · EDICIÓN DIGITAL",text:"El actor abandona la gala después de una humillación en directo.",prompt:"¿Qué efecto produce «humillación» antes de ver la escena? ¿Qué otra palabra cambiaría por completo tu primera lectura?"},
      {kind:"AUDIO TRANSCRITO",source:"REGIDORA · 00:08",text:"Sonrió, saludó y salió por la izquierda, exactamente donde terminaba su intervención.",prompt:"¿Una salida prevista elimina la posibilidad de ofensa? ¿Qué indicios pedirías antes de corregir el titular?"},
      {kind:"MENSAJE PRIVADO",source:"ACTOR → AMIGO",text:"Se pasó. Igual, mejor que crean que era parte del show.",prompt:"¿«Se pasó» expresa daño real, estrategia pública o ambas cosas? ¿Qué tono imaginas y por qué?"},
      {kind:"DATO QUE REORDENA",source:"GUION DE ENSAYO",text:"La broma figuraba en el guion, pero la presentadora añadió en directo una referencia a la ruptura real del actor.",prompt:"Distingue una broma acordada de su ejecución final. ¿Dónde situarías la intención, el efecto y la responsabilidad?"}
    ],
    teacher:"Interpreta a la presentadora. Defiende que existía confianza y un guion compartido. Minimiza primero la frase añadida; después pregunta si una mala improvisación equivale necesariamente a una intención de herir.",
    close:"Explica el caso como representante del actor y luego como productor de la gala. Mantén los hechos y cambia el encuadre."
  },
  {
    id:"bruma",number:"03",title:"La cena que llegó tarde",desk:"HOTEL · JUEGO DE REGISTRO",
    opening:"Una boda empieza a cenar setenta minutos tarde y dos platos cambian. El hotel afirma que el servicio se completó; los novios piden una compensación.",
    phases:[
      {kind:"TITULAR",source:"CIUDAD AHORA",text:"Boda de pesadilla: un fallo deja al hotel sin menú y a los invitados esperando.",prompt:"¿Qué parte puede ser cierta y aun así resultar engañosa? Señala la palabra con mayor carga emocional."},
      {kind:"TESTIMONIO",source:"JEFA DE SALA",text:"Hubo un retraso importante, pero todas las mesas recibieron la cena y nadie corrió un riesgo sanitario.",prompt:"¿La precisión tranquiliza o desvía la atención hacia algo que nadie había cuestionado?"},
      {kind:"CHAT DE COCINA",source:"CHEF → GERENTE",text:"La cámara se apagó, perdimos media mise en place y salvamos la noche como pudimos.",prompt:"¿«Salvamos la noche» describe competencia, autojustificación o las dos? ¿Cómo lo diría alguien que pagó el evento?"},
      {kind:"DATO VERIFICADO",source:"PARTE TÉCNICO + SERVICIO",text:"La refrigeración falló 38 minutos. Se sustituyeron dos platos, la cena comenzó 70 minutos tarde y no hubo riesgo sanitario.",prompt:"Formula el hecho sin dramatizarlo ni proteger al hotel. ¿Qué dato pondrías primero y qué efecto produciría?"}
    ],
    teacher:"Interpreta primero al gerente y después a uno de los novios. Como gerente, reconoce el retraso pero protege la reputación. Como cliente, rechaza que «se completó» equivalga a «se cumplió lo acordado».",
    close:"Negocia una respuesta y una compensación. Cada palabra debe ser aceptable para el hotel y para los novios.",
    registers:[
      {name:"CONVERSACIÓN PRIVADA",text:"La cámara se apagó, perdimos media cocina y sacamos lo que pudimos con más de una hora de atraso.",effect:"Urgencia, responsabilidad compartida y lenguaje crudo."},
      {name:"COMUNICADO OFICIAL",text:"Una incidencia técnica requirió ajustar dos platos y reordenar los tiempos de servicio.",effect:"Reduce agentes, emoción y gravedad; conserva la trazabilidad básica."},
      {name:"TITULAR SENSACIONALISTA",text:"Un fallo deja al hotel sin menú y convierte una boda en una noche de espera.",effect:"Amplifica daño y conflicto; comprime los matices verificables."},
      {name:"RESPUESTA DIPLOMÁTICA",text:"Reconocemos que la experiencia no respondió plenamente a lo acordado y queremos revisar una compensación adecuada.",effect:"Admite impacto sin fijar todavía culpa, cifra ni mecanismo."}
    ]
  },
  {
    id:"aula",number:"04",title:"La conferencia aplazada",desk:"UNIVERSIDAD · ENCUADRE Y LEGITIMIDAD",
    opening:"Una universidad aplaza una conferencia doce horas antes. El invitado habla de censura; el rectorado habla de condiciones mínimas.",
    phases:[
      {kind:"TITULAR",source:"EL CAMPUS",text:"La universidad cancela una conferencia tras la presión de un grupo de estudiantes.",prompt:"¿Qué relación causal construye «tras» sin afirmarla de manera explícita?"},
      {kind:"DECLARACIÓN",source:"RECTORADO",text:"No se ha cancelado ninguna idea. La actividad se aplaza hasta garantizar un formato seguro y un intercambio académico real.",prompt:"¿Por qué se niega «cancelar una idea» cuando el hecho discutido es un evento? ¿Qué intenta legitimar?"},
      {kind:"CORREO PRIVADO",source:"DECANO → COMUNICACIÓN",text:"Si viene esta semana, los titulares nos devoran. Encuentren una razón de procedimiento que podamos defender.",prompt:"¿La motivación mediática invalida cualquier razón de seguridad? Introduce una reserva antes de concluir."},
      {kind:"DATO QUE COMPLICA",source:"HISTORIAL DEL EVENTO",text:"El invitado cambió el título un día antes por «Por qué esta universidad teme al debate» y rechazó participar en preguntas del público.",prompt:"¿Es una provocación legítima, una ruptura del acuerdo o una excusa conveniente para la institución? Compara criterios."}
    ],
    teacher:"Interpreta al rector. Rechaza la palabra censura y exige que el alumno defina su criterio. Admite la preocupación por los medios, pero argumenta que el invitado también alteró unilateralmente el formato.",
    close:"Propón una nueva fecha y condiciones que ninguna parte pueda vender como victoria total. Explica cada concesión."
  },
  {
    id:"microfono",number:"05",title:"El micrófono que seguía abierto",desk:"CASO FINAL · DOS LECTURAS POSIBLES",
    opening:"Tras una entrevista, la directora del Festival Orbe dice: «Vienen por la foto; la película es lo de menos». Nadie coincide sobre a quién se refería.",
    phases:[
      {kind:"TITULAR VIRAL",source:"TENDENCIA · 41.000 REENVÍOS",text:"La directora de Orbe desprecia al nuevo público del festival con el micrófono abierto.",prompt:"Antes de aceptar el sujeto implícito del titular, ¿qué tendría que significar exactamente «nuevo público»?"},
      {kind:"TESTIMONIO",source:"PRODUCTOR DE LA ENTREVISTA",text:"Acababa de señalar el salón de patrocinadores. Yo entendí que hablaba de los invitados de marca, no de las entradas generales.",prompt:"¿Es un testigo privilegiado o alguien interesado en proteger el festival? ¿Qué cambia el gesto de señalar?"},
      {kind:"CHAT PRIVADO",source:"ASISTENTE → PORTAVOZ",text:"No aclares demasiado. La frase es fea, pero nos conviene que parezca completamente fuera de contexto.",prompt:"¿Esto sugiere encubrimiento o simplemente estrategia ante una frase ambigua? Defiende ambas lecturas antes de elegir."},
      {kind:"DATO FINAL",source:"AUDIO COMPLETO + CÁMARA LATERAL",text:"La pregunta previa fue «¿Qué piensa del nuevo público?». Mientras respondía, ella miró y señaló brevemente el salón de patrocinadores.",prompt:"La pregunta favorece una lectura; el gesto favorece otra. Construye una conclusión que respete las dos pruebas."}
    ],
    teacher:"No reveles ninguna verdad definitiva. Si el alumno concluye que despreciaba al público, defiende que criticaba a los patrocinadores. Si elige a los patrocinadores, defiende que el gesto fue una salida conveniente. Si evita elegir, exige una probabilidad y el dato que inclina la balanza.",
    close:"Presenta una conclusión provisional, reconoce la mejor prueba contraria y fija qué evidencia adicional te haría cambiar de postura."
  }
];

const stages=[["Ingreso","3 min"],["Casos 01–04","22 min"],["Caso 05","8 min"],["Consejo abierto","12 min"]] as const;

const finalQuestions=[
  {q:"¿Es posible contar un hecho sin introducir ningún sesgo?",f:"Distingue selección inevitable de distorsión interesada.",c:"Hasta una cronología completa decide dónde empieza y termina el hecho."},
  {q:"¿Cuál es la diferencia entre mentir y elegir cuidadosamente qué contar?",f:"Formula un límite que pueda aplicarse tanto a una amistad como a una institución.",c:"Una omisión puede ser más engañosa que una afirmación falsa."},
  {q:"¿Por qué funcionan los eufemismos incluso cuando todos entendemos lo que significan?",f:"Piensa qué relación social protegen y a quién beneficia esa protección.",c:"Quizás no oculten información: quizá permiten actuar sin humillar."},
  {q:"¿Hasta qué punto cambia nuestra opinión según quién cuenta una historia?",f:"¿Qué autoridad concedemos por experiencia, cercanía o prestigio?",c:"Desconfiar de una fuente interesada no convierte en verdadera la versión contraria."},
  {q:"¿La ironía enriquece la comunicación o genera demasiados malentendidos?",f:"Separa la ironía entre personas cercanas de la ironía pública.",c:"Una comunicación sin ambigüedad también perdería complicidad y creatividad."},
  {q:"¿Qué lenguaje usan las instituciones para evitar decir algo directamente?",f:"Da un ejemplo y reformúlalo en una versión más transparente.",c:"La máxima transparencia puede violar privacidad o destruir una negociación."},
  {q:"¿Las redes sociales nos obligan a interpretar demasiado rápido?",f:"¿Qué recompensa recibe quien llega primero a una conclusión?",c:"A veces la rapidez vuelve visible un abuso que la cautela institucional enterraría."},
  {q:"¿Qué señales te hacen desconfiar de una noticia?",f:"Ordena tres señales según su valor probatorio real.",c:"Una fuente puede usar todos los signos de rigor y aun así manipular el encuadre."},
  {q:"¿Existe realmente la neutralidad lingüística?",f:"Propón una definición operativa, no perfecta, de lenguaje neutral.",c:"Renunciar a la neutralidad como ideal puede justificar cualquier propaganda."},
  {q:"¿Cuándo prefieres diplomacia en lugar de franqueza total?",f:"¿Qué debe conservarse: la relación, la dignidad, el resultado o la verdad?",c:"La diplomacia también puede obligar al otro a descifrar lo que no queremos asumir."},
  {q:"¿Puede una frase ser técnicamente cierta y al mismo tiempo engañosa?",f:"Construye un ejemplo cuya falsedad esté en la implicación, no en las palabras.",c:"El receptor también aporta presupuestos que el hablante no controla por completo."},
  {q:"¿Qué se pierde cuando una conversación compleja se reduce a un titular?",f:"¿Qué debería conservar siempre un buen titular aunque pierda detalle?",c:"Sin reducción, la información sería inmanejable y solo llegaría a especialistas."}
] as const;

const languageSupport={
  "INFERIR":["Todo apunta a que…","No descartaría la posibilidad de que…","Da la impresión de que…"],
  "PRECISAR":["Más que X, parece Y.","Lo significativo no es tanto…, sino…","Eso presupone que…"],
  "REVISAR":["Cabe interpretar que…","Lo plantearía de otra manera…","Tal como está formulado…"]
} as const;

const nativeCases=cases;
const nativeStages=stages;
const nativeFinalQuestions=finalQuestions;
const nativeLanguageSupport=languageSupport;
function MinisterioDeLasVersionesNative({level}:{level:CEFRLevel}){
  const cases=ministryCases(nativeCases,level);
  const stages=level==='C2'?nativeStages:narratives.ministry.stages.map((pair,i)=>[ministryCopy(level,pair),nativeStages[i][1]] as const);
  const finalQuestions=level==='C2'?nativeFinalQuestions:ministryCouncil(level);
  const say=(es:string,en:string)=>ministryCopy(level,[es,en]);
  const ui=(es:string,en:string,lowerEs?:string,lowerEn?:string)=>level==='A0'||level==='A1'?say(lowerEs??es,lowerEn??en):es;
  const [stage,setStage]=useState(0);
  const [activeIndex,setActiveIndex]=useState(0);
  const [revealed,setRevealed]=useState<Record<string,number>>({});
  const [phaseView,setPhaseView]=useState(0);
  const [certainty,setCertainty]=useState(60);
  const [verdicts,setVerdicts]=useState<Record<string,string>>({});
  const [teacherOpen,setTeacherOpen]=useState(false);
  const [registerIndex,setRegisterIndex]=useState(0);
  const [position,setPosition]=useState<"A"|"B"|"M"|null>(null);
  const [objection,setObjection]=useState(0);
  const [finalIndex,setFinalIndex]=useState(0);
  const [finalDepth,setFinalDepth]=useState(false);
  const [support,setSupport]=useState<keyof typeof languageSupport|null>(null);
  const [pace,setPace]=useState<"short"|"long"|null>(null);
  const speakingIndex=stage===3&&level!=="C2"?finalIndex:activeIndex;
  const scene=ministryScene(level,speakingIndex);
  const task=lessonTask('ministry',stage,scene,level);
  const languageSupport=level==='C2'?nativeLanguageSupport:{INFERIR:[ministryCopy(level,task.support)],PRECISAR:[ministryCopy(level,task.expected)],REVISAR:[ministryCopy(level,task.prompt)]};
  const active=cases[activeIndex];
  const unlocked=revealed[active.id]??0;
  const evidence=phaseView>0?active.phases[phaseView-1]:null;
  const completed=cases.slice(0,4).filter(item=>(revealed[item.id]??0)>=4).length;
  const go=(next:number)=>{const value=Math.max(0,Math.min(stages.length-1,next));setStage(value);setTeacherOpen(false);if(value===2){setActiveIndex(4);setPhaseView(Math.max(0,revealed.microfono??0));}window.scrollTo({top:0,behavior:"auto"});};
  const chooseCase=(index:number)=>{setActiveIndex(index);setPhaseView(revealed[cases[index].id]??0);setTeacherOpen(false);setCertainty(60);};
  const revealNext=()=>{const next=Math.min(4,unlocked+1);setRevealed(current=>({...current,[active.id]:next}));setPhaseView(next);setCertainty(current=>Math.max(35,current-5));};
  const moveFinal=(direction:number)=>{setFinalIndex(current=>(current+direction+finalQuestions.length)%finalQuestions.length);setFinalDepth(false);};

  return <main className="ministry-app">
    <nav className="ministry-nav"><Link href="/"><img src="/brand/mascot/portrait.webp" alt=""/><span><b>SPANISHCUE</b><small>{level} · {say("CONVERSACIÓN","CONVERSATION")}</small></span></Link><div><i/> {ui("EXPEDIENTE EN CURSO","FILE IN PROGRESS")}</div><Link href="/">{ui("BIBLIOTECA","LIBRARY")}</Link></nav>
    <div className="ministry-rail">{stages.map(([name,time],index)=><button key={name} className={stage===index?"active":stage>index?"done":""} onClick={()=>go(index)}><span>{index+1}</span><b>{name}</b><small>{time}</small></button>)}</div>

    {level!=="C2"&&<MinistrySpeaking key={`${stage}-${speakingIndex}`} level={level} index={speakingIndex} stage={stage}/>}
    {stage===0&&<section className="ministry-intake"><div className="ministry-image"/><div className="ministry-shade"/><article><span>{level} · {ui("PERCEPCIÓN, SUBTEXTO Y SESGO","PERCEPTION, SUBTEXT AND BIAS","HECHOS Y VERSIONES","FACTS AND VERSIONS")}</span><h1>{ui("El Ministerio","The Ministry")}<br/><em>{ui("de las Versiones","of Versions")}</em></h1><p>{ui("Cinco hechos. Demasiados relatos. Tu tarea no es descubrir quién miente, sino explicar qué hace cada versión, qué evita y por qué podría resultar convincente.","Five events, many accounts. Explain what each account does and omits, and why it sounds convincing.","Cinco casos. Escucha una prueba y di qué sabes. El profesor te ayuda.","Five cases. Listen to one piece of evidence and say what you know. Your teacher helps.")}</p><div className="intake-rule"><small>{ui("PROTOCOLO 00 · RESPONDE YA","PROTOCOL 00 · RESPOND NOW")}</small><h2>{ui("¿Puede alguien recordar un hecho con absoluta sinceridad y contarlo de manera engañosa?","Can someone sincerely remember an event and give a misleading account?","¿Qué sabes? Di: «Yo sé esto» o «Yo no sé».","What do you know? Say: “I know this” or “I do not know”.")}</h2><p>{ui("El profesor debe pedir un ejemplo y cuestionar la diferencia entre memoria, selección e intención.","The teacher asks for an example and challenges the distinction between memory, selection and intent.","El profesor lee una frase. El alumno escucha y dice una respuesta con apoyo.","The teacher reads one sentence. The learner listens and says a supported answer.")}</p></div><button onClick={()=>go(1)}>{ui("ABRIR EL ARCHIVO →","OPEN THE FILE →")}</button></article><aside><header><b>5</b><span>{ui("CASOS ACTIVOS","ACTIVE CASES")}</span></header><div><small>01</small><p>{ui("Eufemismo corporativo","Corporate euphemism","La directora se va","The director leaves")}</p></div><div><small>02</small><p>{ui("Ironía y actuación pública","Irony and public performance","El actor sale","The actor leaves")}</p></div><div><small>03</small><p>{ui("Cuatro registros","Four registers","La cena llega tarde","Dinner arrives late")}</p></div><div><small>04</small><p>{ui("Legitimidad institucional","Institutional legitimacy","La conferencia cambia","The lecture changes")}</p></div><div><small>05</small><p>{ui("Ambigüedad sin resolución","Unresolved ambiguity","El micrófono abierto","The open microphone")}</p></div></aside></section>}

    {stage===1&&<section className="case-workspace">
      <aside className="case-stack"><header><span>{ui("ARCHIVO A","FILE A")}</span><b>{completed} / 4 {say("cerrados","closed")}</b></header>{cases.slice(0,4).map((item,index)=><button key={item.id} className={activeIndex===index?"active":(revealed[item.id]??0)>=4?"complete":""} onClick={()=>chooseCase(index)}><small>{ui("CASO","CASE")} {item.number}</small><span>{item.title}</span><i>{revealed[item.id]??0}/4</i></button>)}<div className="sealed-final"><small>{ui("CASO 05","CASE 05")}</small><b>{ui("ACCESO RESERVADO","RESERVED ACCESS")}</b><span>{ui("Se abre en la siguiente sala.","Opens in the next room.")}</span></div></aside>
      <article className="evidence-desk"><header><div><span>{ui("CASO","CASE")} {active.number} · {active.desk}</span><h1>{active.title}</h1></div><b>MV/{active.number}/{level}</b></header><p className="case-opening">{active.opening}</p><div className="phase-tabs">{[1,2,3,4].map(index=><button key={index} disabled={index>unlocked} className={phaseView===index?"active":index<=unlocked?"open":""} onClick={()=>setPhaseView(index)}><span>0{index}</span>{index<=unlocked?active.phases[index-1].kind:say("CLASIFICADO","SEALED")}</button>)}</div>{!evidence?<div className="evidence-sealed"><div><i/><i/><b>MV</b></div><small>{ui("VERSIÓN INICIAL","FIRST VERSION")}</small><h2>{level==="C2"?"Cuenta en treinta segundos qué crees que ocurrió.":ministryCopy(level,task.prompt)}</h2><p>{level==="C2"?"Separa hechos, inferencias y preguntas pendientes antes de abrir el primer documento.":ministryCopy(level,task.prompt)}</p><button onClick={revealNext}>{ui("REVELAR TITULAR →","REVEAL HEADLINE →")}</button></div>:<div className="evidence-sheet" key={`${active.id}-${phaseView}`}><header><span>{evidence.kind}</span><small>{evidence.source}</small></header><blockquote>“{evidence.text}”</blockquote><div><small>{ui("CONVERSACIÓN OBLIGATORIA","SPEAK BEFORE CONTINUING")}</small><h2>{evidence.prompt}</h2></div>{unlocked<4&&phaseView===unlocked?<button onClick={revealNext}>{ui("HABLÉ · ABRIR SIGUIENTE CAPA →","I SPOKE · OPEN NEXT LAYER →")}</button>:unlocked===4&&<aside><span>{ui("CIERRE PROVISIONAL","PROVISIONAL CONCLUSION")}</span><p>{active.close}</p></aside>}</div>}
        {active.registers&&unlocked===4&&<section className="register-lab"><header><span>{ui("MISMO HECHO · CUATRO REGISTROS","SAME EVENT · FOUR REGISTERS")}</span><b>{ui("Reformula oralmente antes de comparar","Rephrase aloud before comparing","Di el hecho a un amigo y al hotel","Tell a friend and the hotel what happened")}</b></header><nav>{active.registers.map((item,index)=><button key={item.name} className={registerIndex===index?"active":""} onClick={()=>setRegisterIndex(index)}>{index+1} · {item.name}</button>)}</nav><article><small>{active.registers[registerIndex].name}</small><blockquote>“{active.registers[registerIndex].text}”</blockquote><p>{active.registers[registerIndex].effect}</p><h3>{ui("¿Qué se oculta, qué se sugiere y qué efecto produce? Ahora conserva el hecho y cámbialo al registro siguiente sin leer su versión.","What is hidden or implied, and with what effect? Keep the fact and try the next register without reading it.","Lee una frase. Ahora di el mismo hecho de otra manera con el profesor.","Read a sentence. Now say the same fact another way with your teacher.")}</h3></article></section>}
      </article>
      <aside className="interpretation-ledger"><header><small>{ui("CUADERNO DE HIPÓTESIS","HYPOTHESIS NOTEBOOK")}</small><span>{ui("NO BUSQUES UNA RESPUESTA ÚNICA","MORE THAN ONE ANSWER IS POSSIBLE")}</span></header><section><b>{ui("01 · TU LECTURA ACTUAL","01 · YOUR CURRENT READING")}</b><p>{level!=="C2"?ministryCopy(level,task.prompt):evidence?"Resume qué ocurrió en una frase que no presente tus inferencias como hechos.":"Formula dos hipótesis incompatibles pero razonables."}</p></section><section><b>{ui("02 · GRADO DE CERTEZA","02 · HOW SURE ARE YOU?")}</b><div className="certainty-scale">{[35,60,85].map(value=><button key={value} className={certainty===value?"active":""} onClick={()=>setCertainty(value)}>{value}%</button>)}</div><p>{ui("¿Qué dato justificaría subir o bajar veinte puntos?","What fact justifies moving up or down twenty points?","El profesor señala un número. ¿Estás seguro? Di «sí», «no» o «no sé».","The teacher points to a number. Are you sure? Say “yes”, “no” or “I do not know”.")}</p></section><section><b>{ui("03 · REVISIÓN","03 · REVIEW")}</b><div className="verdict-buttons">{(level==="C2"?["MALENTENDIDO","MANIOBRA","AMBOS"]:[say("Una confusión","A misunderstanding"),say("Una decisión","A decision"),say("No sé","I do not know")]).map(value=><button key={value} className={verdicts[active.id]===value?"active":""} onClick={()=>setVerdicts(current=>({...current,[active.id]:value}))}>{value}</button>)}</div><p>{ui("Tu etiqueta es provisional. Explica qué evidencia no encaja bien con ella.","Your label is provisional. Explain what evidence does not fit it.","Elige una respuesta con el profesor. Puedes cambiarla después.","Choose an answer with your teacher. You can change it later.")}</p></section><button className="teacher-file" onClick={()=>setTeacherOpen(value=>!value)}>{teacherOpen?say("CERRAR DIRECTIVA","CLOSE INSTRUCTIONS"):say("SOLO PROFESOR · DIRECTIVA","TEACHER ONLY · INSTRUCTIONS")}</button>{teacherOpen&&<div className="teacher-directive"><small>{ui("PAPEL CONFIDENCIAL","CONFIDENTIAL ROLE")}</small><p>{active.teacher}</p></div>}</aside>
    </section>}

    {stage===2&&<section className="final-case-room"><header><div><span>{ui("CASO 05 · AUDIENCIA DE INTERPRETACIÓN · 8 MIN","CASE 05 · INTERPRETATION HEARING · 8 MIN")}</span><h1>{cases[4].title}</h1><p>{cases[4].opening}</p></div><b>{ui("SIN VEREDICTO OFICIAL","NO OFFICIAL VERDICT")}</b></header><div className="final-case-grid"><section className="final-evidence"><nav>{[1,2,3,4].map(index=><button key={index} disabled={index>(revealed.microfono??0)} className={phaseView===index?"active":""} onClick={()=>setPhaseView(index)}>{ui("EVIDENCIA 0","EVIDENCE 0")}{index}</button>)}</nav>{phaseView===0?<div className="final-sealed"><span>?</span><h2>{ui("Formula dos referentes posibles para «vienen» antes de escuchar ninguna versión.","Suggest two referents for “they come” before hearing an account.","¿El público o los patrocinadores? Escucha las dos opciones y di «no sé».","The audience or the sponsors? Listen to both options and say “I do not know”.")}</h2><button onClick={revealNext}>{ui("ABRIR TITULAR →","OPEN HEADLINE →")}</button></div>:<article key={phaseView}><header><span>{cases[4].phases[phaseView-1].kind}</span><small>{cases[4].phases[phaseView-1].source}</small></header><blockquote>“{cases[4].phases[phaseView-1].text}”</blockquote><h2>{cases[4].phases[phaseView-1].prompt}</h2>{(revealed.microfono??0)<4&&phaseView===(revealed.microfono??0)&&<button onClick={revealNext}>{ui("ABRIR LA SIGUIENTE VERSIÓN →","OPEN THE NEXT VERSION →")}</button>}</article>}</section><aside className="dual-verdict"><span>{ui("DOS INTERPRETACIONES DEFENDIBLES","TWO POSSIBLE INTERPRETATIONS")}</span><button className={position==="A"?"active":""} onClick={()=>{setPosition("A");setObjection(0);}}><small>{ui("A · REFERENTE AMPLIO","A · BROAD REFERENT","A · EL PÚBLICO","A · THE AUDIENCE")}</small><b>{level==="C2"?"Despreciaba al nuevo público del festival.":ministryCopy(level,ministryReadings[0])}</b><p>{ui("La pregunta previa activa ese referente y el chat sugiere control de daños.","The previous question activates this referent and the chat suggests damage control.","La pregunta es sobre el público.","The question is about the audience.")}</p></button><button className={position==="B"?"active":""} onClick={()=>{setPosition("B");setObjection(0);}}><small>{ui("B · REFERENTE SITUACIONAL","B · SITUATIONAL REFERENT","B · LOS PATROCINADORES","B · THE SPONSORS")}</small><b>{level==="C2"?"Criticaba a los invitados del salón de patrocinadores.":ministryCopy(level,ministryReadings[1])}</b><p>{ui("La mirada y el gesto pueden restringir «vienen» al grupo que tenía delante.","Her gaze and gesture can restrict “they come” to the group in front of her.","Ella mira a los patrocinadores.","She looks at the sponsors.")}</p></button><button className={position==="M"?"active":""} onClick={()=>{setPosition("M");setObjection(0);}}><small>{ui("M · CONCLUSIÓN MATIZADA","M · QUALIFIED CONCLUSION","M · NO SÉ","M · I DO NOT KNOW")}</small><b>{level==="C2"?"Una lectura es más probable, pero ninguna queda probada.":ministryCopy(level,ministryReadings[2])}</b><p>{ui("Debes asignar una probabilidad y explicar qué inclina la balanza.","Assign a probability and explain what tips the balance.","Hay dos posibilidades. Puedes pedir otra prueba.","There are two possibilities. You can ask for more evidence.")}</p></button></aside></div>{position&&<section className="opposition-room"><div><span>{ui("TU CONCLUSIÓN ·","YOUR CONCLUSION ·")} {position}</span><h2>{cases[4].close}</h2></div><aside><small>{ui("OBJECIÓN DEL PROFESOR ·","TEACHER’S OBJECTION ·")} {objection+1}/3</small><p>{level!=="C2"?ministryObjection(level,position,objection):position==="A"?["El gesto hacia el salón ofrece un referente visible más inmediato que la pregunta.","El productor estaba allí y entendió una crítica a los patrocinadores.","El chat puede recomendar ambigüedad por prudencia, no porque confirme desprecio."][objection]:position==="B"?["La pregunta nombraba explícitamente al nuevo público y la respuesta no lo corrigió.","Señalar no demuestra referencia: también puede acompañar una generalización.","El asistente calificó la frase de fea y recomendó explotar la falta de contexto."][objection]:["Asignar probabilidades no sustituye una conclusión comunicable.","¿Qué evidencia consideras más fuerte y por qué no te permite superar el 60%?","Si fueras portavoz, no podrías responder simplemente que ambas lecturas son posibles."][objection]}</p><button onClick={()=>setObjection(current=>(current+1)%3)}>{ui("SIGUIENTE OBJECIÓN →","NEXT OBJECTION →")}</button></aside></section>}<button className="final-teacher" onClick={()=>setTeacherOpen(value=>!value)}>{teacherOpen?say("OCULTAR INSTRUCCIÓN","HIDE INSTRUCTIONS"):say("PROFESOR · PAPEL OCULTO","TEACHER · HIDDEN ROLE")}</button>{teacherOpen&&<aside className="final-teacher-note"><span>{ui("INSTRUCCIÓN OBLIGATORIA","REQUIRED INSTRUCTION")}</span><p>{cases[4].teacher}</p></aside>}</section>}

    {stage===3&&<section className="ministry-council"><header><span>{ui("CONSEJO ABIERTO · 10–15 MIN","OPEN COUNCIL · 10–15 MIN")}</span><h1>{ui("La versión que elegimos creer","The version we choose to believe")}</h1><p>{level==="C2"?"Una pregunta por vez. Formula una tesis precisa, reconoce la mejor reserva y responde al contraargumento del profesor.":ministryCopy(level,task.prompt)}</p></header><div className="council-question"><aside><span>{String(finalIndex+1).padStart(2,"0")}</span><small>{ui("EXPEDIENTE FINAL","FINAL FILE")}</small></aside><article><h2>{finalQuestions[finalIndex].q}</h2><button onClick={()=>setFinalDepth(value=>!value)}>{finalDepth?say("CERRAR CAPAS","CLOSE LAYERS"):say("ABRIR REPREGUNTA + OBJECIÓN","OPEN FOLLOW-UP + OBJECTION")}</button>{finalDepth&&<div><p><b>{ui("REPREGUNTA","FOLLOW-UP")}</b>{finalQuestions[finalIndex].f}</p><p><b>{ui("OBJECIÓN","OBJECTION")}</b>{finalQuestions[finalIndex].c}</p></div>}</article></div><nav className="council-nav"><button onClick={()=>moveFinal(-1)}>{ui("← ANTERIOR","← PREVIOUS")}</button><div>{finalQuestions.map((_,index)=><button key={index} aria-label={`Pregunta ${index+1}`} className={finalIndex===index?"active":""} onClick={()=>{setFinalIndex(index);setFinalDepth(false);}}>{String(index+1).padStart(2,"0")}</button>)}</div><button onClick={()=>moveFinal(1)}>{ui("SIGUIENTE →","NEXT →")}</button></nav><aside className="ministry-close"><small>{ui("ACTA DE CIERRE · 90 SEGUNDOS","CLOSING RECORD · 90 SECONDS")}</small><h2>{ui("Presenta una frase que pueda ser técnicamente cierta y, al mismo tiempo, orientar al oyente hacia una conclusión engañosa.","Give a technically true sentence that can lead the listener to a misleading conclusion.","Elige un caso. Di qué sabes y qué no sabes.","Choose a case. Say what you know and do not know.")}</h2><p>{ui("Después reformúlala para conservar la privacidad necesaria sin manipular la inferencia.","Then rephrase it to preserve privacy without manipulating inference.","El profesor pregunta «¿estás seguro?». Responde con un dato o con «no sé».","The teacher asks “are you sure?” Answer with one fact or “I do not know”.")}</p></aside></section>}

    <button className="ministry-support-trigger" onClick={()=>setSupport(support?null:"INFERIR")}>{support?say("CERRAR APOYO","CLOSE SUPPORT"):ui("PRECISIÓN C2","C2 PRECISION","APOYO "+level,"SUPPORT "+level)}</button>{support&&<aside className="ministry-support"><header><b>{ui("FORMULACIONES OPCIONALES","OPTIONAL PHRASES")}</b><button onClick={()=>setSupport(null)}>×</button></header><nav>{(Object.keys(languageSupport) as (keyof typeof languageSupport)[]).map(key=><button key={key} className={support===key?"active":""} onClick={()=>setSupport(key)}>{level==="A0"?say(key,({INFERIR:"INFER",PRECISAR:"CLARIFY",REVISAR:"REVIEW"})[key]):key}</button>)}</nav><div>{languageSupport[support].map(item=><span key={item}>{item}</span>)}</div><footer><b>{ui("RITMO · SOLO PROFESOR","PACE · TEACHER ONLY")}</b><button className={pace==="short"?"active":""} onClick={()=>setPace(pace==="short"?null:"short")}>{ui("HABLA POCO","SPEAKS LITTLE")}</button><button className={pace==="long"?"active":""} onClick={()=>setPace(pace==="long"?null:"long")}>{ui("HABLA MUCHO","SPEAKS A LOT")}</button>{pace&&<p>{level!=="C2"?ministryCopy(level,task.expected):pace==="short"?"Ofrece dos interpretaciones y pide que elija una provisionalmente; solicita un indicio concreto antes de cada repregunta.":"Exige porcentajes de certeza, cambia la fuente del relato y limita la conclusión a cuarenta y cinco segundos."}</p>}</footer></aside>}
    <footer className="ministry-controls"><button disabled={stage===0} onClick={()=>go(stage-1)}>{ui("← ANTERIOR","← PREVIOUS")}</button><span><b>{stages[stage][0]}</b>{stages[stage][1]} · {stage+1}/{stages.length}</span>{stage<stages.length-1?<button onClick={()=>go(stage+1)}>{ui("SIGUIENTE →","NEXT →")}</button>:<Link href="/">{ui("VOLVER A CONVERSACIÓN →","BACK TO CONVERSATION →")}</Link>}</footer>
  </main>;
}

export default function MinisterioDeLasVersiones(){
 const lesson=narratives.ministry;
 return <ConversationFamily id={lesson.id} title={lesson.title} levels={narrativeLevels} defaultLevel="C2">{level=><MinisterioDeLasVersionesNative key={level} level={level}/>}</ConversationFamily>;
}
