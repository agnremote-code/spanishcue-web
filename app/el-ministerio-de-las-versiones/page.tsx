"use client";

import Link from "next/link";
import {useState,type CSSProperties} from "react";
import {ClassicTopBar} from "../clasicas-ui/TopBar";
import "../clasicas-ui/clasicas.css";
import "../clasicas-ui/premium.css";
import "./style.css";

type Evidence={kind:string;source:string;text:string;prompt:string};
type CaseFile={
  id:string;number:string;title:string;desk:string;opening:string;phases:[Evidence,Evidence,Evidence,Evidence];
  teacher:string;close:string;registers?:{name:string;text:string;effect:string}[];
};

const cases:CaseFile[]=[
  {
    id:"lumen",number:"01",title:"La despedida voluntaria",desk:"Empresa · Poder y eufemismo",
    opening:"Inés Valcárcel ya no dirige Lumen. La empresa y ella publicaron mensajes amables con once minutos de diferencia.",
    phases:[
      {kind:"Titular",source:"Economía Hoy · 08:10",text:"La directora de Lumen abandona la empresa tras diferencias sobre el futuro.",prompt:"¿Qué crees que ocurrió realmente? ¿Qué da por sentado el verbo «abandona» y qué deja sin decir?"},
      {kind:"Comunicado",source:"Lumen · Canal oficial",text:"Después de una conversación productiva, Inés ha decidido abrir una nueva etapa. Agradecemos profundamente su liderazgo.",prompt:"¿Qué intenta cerrar esta formulación? Distingue cortesía, información y control del relato."},
      {kind:"Chat privado",source:"Director financiero → Consejera",text:"Ya no tenía acceso al presupuesto. Lo de «ha decidido» fue la última cortesía.",prompt:"¿Esto prueba que la despidieron o solo que su poder ya había terminado? Modula tu certeza."},
      {kind:"Dato verificado",source:"Registro mercantil",text:"Seis semanas antes de la reunión, Inés había inscrito su propia consultora. Después negoció una indemnización de salida.",prompt:"¿Renuncia, despido o salida negociada? Reinterpreta sin borrar las pruebas que contradicen tu nueva hipótesis."}
    ],
    teacher:"Interpreta al portavoz de Lumen. Evita los verbos despedir y forzar. Insiste en que ambas partes conservaron capacidad de decisión. Si el alumno te acorrala, admite que el consejo ya buscaba sustituto.",
    close:"Redacta oralmente una versión pública honesta que no humille a nadie. Después explica qué has omitido y por qué."
  },
  {
    id:"gala",number:"02",title:"La salida por la izquierda",desk:"Famoso · Ironía y actuación",
    opening:"Un actor sale del escenario segundos después de una broma sobre su vida privada. El fragmento se vuelve viral sin el inicio ni el final.",
    phases:[
      {kind:"Titular",source:"Pulso · Edición digital",text:"El actor abandona la gala después de una humillación en directo.",prompt:"¿Qué efecto produce «humillación» antes de ver la escena? ¿Qué otra palabra cambiaría por completo tu primera lectura?"},
      {kind:"Audio transcrito",source:"Regidora · 00:08",text:"Sonrió, saludó y salió por la izquierda, exactamente donde terminaba su intervención.",prompt:"¿Una salida prevista elimina la posibilidad de ofensa? ¿Qué indicios pedirías antes de corregir el titular?"},
      {kind:"Mensaje privado",source:"Actor → Amigo",text:"Se pasó. Igual, mejor que crean que era parte del show.",prompt:"¿«Se pasó» expresa daño real, estrategia pública o ambas cosas? ¿Qué tono imaginas y por qué?"},
      {kind:"Dato que reordena",source:"Guion de ensayo",text:"La broma figuraba en el guion, pero la presentadora añadió en directo una referencia a la ruptura real del actor.",prompt:"Distingue una broma acordada de su ejecución final. ¿Dónde situarías la intención, el efecto y la responsabilidad?"}
    ],
    teacher:"Interpreta a la presentadora. Defiende que existía confianza y un guion compartido. Minimiza primero la frase añadida; después pregunta si una mala improvisación equivale necesariamente a una intención de herir.",
    close:"Explica el caso como representante del actor y luego como productor de la gala. Mantén los hechos y cambia el encuadre."
  },
  {
    id:"bruma",number:"03",title:"La cena que llegó tarde",desk:"Hotel · Juego de registro",
    opening:"Una boda empieza a cenar setenta minutos tarde y dos platos cambian. El hotel afirma que el servicio se completó; los novios piden una compensación.",
    phases:[
      {kind:"Titular",source:"Ciudad Ahora",text:"Boda de pesadilla: un fallo deja al hotel sin menú y a los invitados esperando.",prompt:"¿Qué parte puede ser cierta y aun así resultar engañosa? Señala la palabra con mayor carga emocional."},
      {kind:"Testimonio",source:"Jefa de sala",text:"Hubo un retraso importante, pero todas las mesas recibieron la cena y nadie corrió un riesgo sanitario.",prompt:"¿La precisión tranquiliza o desvía la atención hacia algo que nadie había cuestionado?"},
      {kind:"Chat de cocina",source:"Chef → Gerente",text:"La cámara se apagó, perdimos media mise en place y salvamos la noche como pudimos.",prompt:"¿«Salvamos la noche» describe competencia, autojustificación o las dos? ¿Cómo lo diría alguien que pagó el evento?"},
      {kind:"Dato verificado",source:"Parte técnico + Servicio",text:"La refrigeración falló 38 minutos. Se sustituyeron dos platos, la cena comenzó 70 minutos tarde y no hubo riesgo sanitario.",prompt:"Formula el hecho sin dramatizarlo ni proteger al hotel. ¿Qué dato pondrías primero y qué efecto produciría?"}
    ],
    teacher:"Interpreta primero al gerente y después a uno de los novios. Como gerente, reconoce el retraso pero protege la reputación. Como cliente, rechaza que «se completó» equivalga a «se cumplió lo acordado».",
    close:"Negocia una respuesta y una compensación. Cada palabra debe ser aceptable para el hotel y para los novios.",
    registers:[
      {name:"Conversación privada",text:"La cámara se apagó, perdimos media cocina y sacamos lo que pudimos con más de una hora de atraso.",effect:"Urgencia, responsabilidad compartida y lenguaje crudo."},
      {name:"Comunicado oficial",text:"Una incidencia técnica requirió ajustar dos platos y reordenar los tiempos de servicio.",effect:"Reduce agentes, emoción y gravedad; conserva la trazabilidad básica."},
      {name:"Titular sensacionalista",text:"Un fallo deja al hotel sin menú y convierte una boda en una noche de espera.",effect:"Amplifica daño y conflicto; comprime los matices verificables."},
      {name:"Respuesta diplomática",text:"Reconocemos que la experiencia no respondió plenamente a lo acordado y queremos revisar una compensación adecuada.",effect:"Admite impacto sin fijar todavía culpa, cifra ni mecanismo."}
    ]
  },
  {
    id:"aula",number:"04",title:"La conferencia aplazada",desk:"Universidad · Encuadre y legitimidad",
    opening:"Una universidad aplaza una conferencia doce horas antes. El invitado habla de censura; el rectorado habla de condiciones mínimas.",
    phases:[
      {kind:"Titular",source:"El Campus",text:"La universidad cancela una conferencia tras la presión de un grupo de estudiantes.",prompt:"¿Qué relación causal construye «tras» sin afirmarla de manera explícita?"},
      {kind:"Declaración",source:"Rectorado",text:"No se ha cancelado ninguna idea. La actividad se aplaza hasta garantizar un formato seguro y un intercambio académico real.",prompt:"¿Por qué se niega «cancelar una idea» cuando el hecho discutido es un evento? ¿Qué intenta legitimar?"},
      {kind:"Correo privado",source:"Decano → Comunicación",text:"Si viene esta semana, los titulares nos devoran. Encuentren una razón de procedimiento que podamos defender.",prompt:"¿La motivación mediática invalida cualquier razón de seguridad? Introduce una reserva antes de concluir."},
      {kind:"Dato que complica",source:"Historial del evento",text:"El invitado cambió el título un día antes por «Por qué esta universidad teme al debate» y rechazó participar en preguntas del público.",prompt:"¿Es una provocación legítima, una ruptura del acuerdo o una excusa conveniente para la institución? Compara criterios."}
    ],
    teacher:"Interpreta al rector. Rechaza la palabra censura y exige que el alumno defina su criterio. Admite la preocupación por los medios, pero argumenta que el invitado también alteró unilateralmente el formato.",
    close:"Propón una nueva fecha y condiciones que ninguna parte pueda vender como victoria total. Explica cada concesión."
  },
  {
    id:"microfono",number:"05",title:"El micrófono que seguía abierto",desk:"Caso final · Dos lecturas posibles",
    opening:"Tras una entrevista, la directora del Festival Orbe dice: «Vienen por la foto; la película es lo de menos». Nadie coincide sobre a quién se refería.",
    phases:[
      {kind:"Titular viral",source:"Tendencia · 41.000 reenvíos",text:"La directora de Orbe desprecia al nuevo público del festival con el micrófono abierto.",prompt:"Antes de aceptar el sujeto implícito del titular, ¿qué tendría que significar exactamente «nuevo público»?"},
      {kind:"Testimonio",source:"Productor de la entrevista",text:"Acababa de señalar el salón de patrocinadores. Yo entendí que hablaba de los invitados de marca, no de las entradas generales.",prompt:"¿Es un testigo privilegiado o alguien interesado en proteger el festival? ¿Qué cambia el gesto de señalar?"},
      {kind:"Chat privado",source:"Asistente → Portavoz",text:"No aclares demasiado. La frase es fea, pero nos conviene que parezca completamente fuera de contexto.",prompt:"¿Esto sugiere encubrimiento o simplemente estrategia ante una frase ambigua? Defiende ambas lecturas antes de elegir."},
      {kind:"Dato final",source:"Audio completo + Cámara lateral",text:"La pregunta previa fue «¿Qué piensa del nuevo público?». Mientras respondía, ella miró y señaló brevemente el salón de patrocinadores.",prompt:"La pregunta favorece una lectura; el gesto favorece otra. Construye una conclusión que respete las dos pruebas."}
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

export default function MinisterioDeLasVersiones(){
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
  const active=cases[activeIndex];
  const unlocked=revealed[active.id]??0;
  const evidence=phaseView>0?active.phases[phaseView-1]:null;
  const completed=cases.slice(0,4).filter(item=>(revealed[item.id]??0)>=4).length;
  const go=(next:number)=>{const value=Math.max(0,Math.min(stages.length-1,next));setStage(value);setTeacherOpen(false);if(value===2){setActiveIndex(4);setPhaseView(Math.max(0,revealed.microfono??0));}window.scrollTo({top:0,behavior:"auto"});};
  const chooseCase=(index:number)=>{setActiveIndex(index);setPhaseView(revealed[cases[index].id]??0);setTeacherOpen(false);setCertainty(60);};
  const revealNext=()=>{const next=Math.min(4,unlocked+1);setRevealed(current=>({...current,[active.id]:next}));setPhaseView(next);setCertainty(current=>Math.max(35,current-5));};
  const moveFinal=(direction:number)=>{setFinalIndex(current=>(current+direction+finalQuestions.length)%finalQuestions.length);setFinalDepth(false);};

  const label=(value:string)=>value.charAt(0)+value.slice(1).toLowerCase();
  const verdictNames:Record<string,string>={MALENTENDIDO:"Malentendido",MANIOBRA:"Maniobra",AMBOS:"Ambos"};
  const objections=position==="A"?["El gesto hacia el salón ofrece un referente visible más inmediato que la pregunta.","El productor estaba allí y entendió una crítica a los patrocinadores.","El chat puede recomendar ambigüedad por prudencia, no porque confirme desprecio."]:position==="B"?["La pregunta nombraba explícitamente al nuevo público y la respuesta no lo corrigió.","Señalar no demuestra referencia: también puede acompañar una generalización.","El asistente calificó la frase de fea y recomendó explotar la falta de contexto."]:["Asignar probabilidades no sustituye una conclusión comunicable.","¿Qué evidencia consideras más fuerte y por qué no te permite superar el 60 %?","Si fueras portavoz, no podrías responder simplemente que ambas lecturas son posibles."];
  const finalUnlocked=revealed.microfono??0;
  return <main className="cx cxp ministry-app" style={{"--cx-accent":"#c2255c"} as CSSProperties}>
    <ClassicTopBar title="El ministerio de las versiones · C2"><span className="cx-chip is-accent">Expediente en curso</span></ClassicTopBar>
    <nav className="cxp-steps ministry-steps" aria-label="Etapas">{stages.map(([name,time],index)=><button key={name} aria-current={stage===index?"step":undefined} className={stage===index?"active":stage>index?"done":""} onClick={()=>go(index)}><span>{stage>index?"✓":index+1}</span><b>{name}<small>{time}</small></b></button>)}</nav>

    {stage===0&&<section className="cxp-hero"><article className="cx-rise"><p className="cx-kicker">C2 · Percepción, subtexto y sesgo</p><h1>El ministerio <em>de las versiones</em></h1><p className="cxp-lead">Cinco hechos. Demasiados relatos. Tu tarea no es descubrir quién miente, sino explicar qué hace cada versión, qué evita y por qué podría resultar convincente.</p><div className="cxp-say"><small>Protocolo 00 · responde ya</small><b>¿Puede alguien recordar un hecho con absoluta sinceridad y contarlo de manera engañosa?</b></div><p className="cx-teacher"><b>Para el profe</b>Un ejemplo concreto ayuda a separar memoria, selección e intención.</p><button className="cx-btn is-primary" onClick={()=>go(1)}>Abrir el archivo <span aria-hidden="true">→</span></button></article><div className="ministry-hero-side cx-rise"><figure className="cxp-art"><img src="/conversation-premium/ministerio-versiones.webp" alt="" width="1600" height="900"/></figure><ol className="ministry-cases cx-card">{["Eufemismo corporativo","Ironía y actuación pública","Cuatro registros","Legitimidad institucional","Ambigüedad sin resolución"].map((item,index)=><li key={item}><span>0{index+1}</span>{item}</li>)}</ol></div></section>}

    {stage===1&&<section className="cxp-page ministry-work" key="s1">
      <aside className="cxp-list ministry-stack" aria-label="Archivo A"><p className="ministry-stack-head"><b>Archivo A</b><span>{completed} de 4 cerrados</span></p>{cases.slice(0,4).map((item,index)=><button key={item.id} className={activeIndex===index?"active":""} onClick={()=>chooseCase(index)}><span>{revealed[item.id]??0}/4</span><div><b>{item.title}</b><small>Caso {item.number}</small></div></button>)}<div className="ministry-locked"><b>Caso 05</b><small>Se abre en la siguiente sala.</small></div></aside>
      <article className="ministry-desk">
        <header className="cx-rise"><p className="cx-kicker">Caso {active.number} · {active.desk}</p><h1>{active.title}</h1><p>{active.opening}</p></header>
        <div className="cx-seg ministry-phases">{[1,2,3,4].map(index=><button key={index} disabled={index>unlocked} aria-pressed={phaseView===index} onClick={()=>setPhaseView(index)}>{index<=unlocked?active.phases[index-1].kind:`Capa ${index}`}</button>)}</div>
        {!evidence?<div className="cxp-say"><small>Versión inicial</small><h2>Cuenta en treinta segundos qué crees que ocurrió.</h2><p>Separa hechos, inferencias y preguntas pendientes antes de abrir el primer documento.</p><button className="cx-btn is-accent ministry-start" onClick={revealNext}>Revelar el titular <span aria-hidden="true">→</span></button></div>:<div className="ministry-sheet cx-card cx-rise" key={`${active.id}-${phaseView}`}><header><span className="cx-chip is-accent">{evidence.kind}</span><small>{evidence.source}</small></header><blockquote>«{evidence.text}»</blockquote><div className="cxp-say"><small>Conversación obligatoria</small><h2>{evidence.prompt}</h2></div>{unlocked<4&&phaseView===unlocked?<button className="cx-btn is-accent ministry-start" onClick={revealNext}>Ya hablé · abrir la siguiente capa <span aria-hidden="true">→</span></button>:unlocked===4&&<p className="ministry-close-note"><b>Cierre provisional</b>{active.close}</p>}</div>}
        {active.registers&&unlocked===4&&<section className="cxp-panel cx-card"><small>Mismo hecho · cuatro registros. Reformula oralmente antes de comparar.</small><div className="cx-seg">{active.registers.map((item,index)=><button key={item.name} aria-pressed={registerIndex===index} onClick={()=>setRegisterIndex(index)}>{item.name}</button>)}</div><h2>«{active.registers[registerIndex].text}»</h2><p className="ministry-effect">{active.registers[registerIndex].effect}</p><p>¿Qué se oculta, qué se sugiere y qué efecto produce? Ahora conserva el hecho y cámbialo al registro siguiente sin leer su versión.</p></section>}
      </article>
      <aside className="ministry-ledger cx-card"><header><b>Cuaderno de hipótesis</b><small>No busques una respuesta única</small></header><section><b>01 · Tu lectura actual</b><p>{evidence?"Resume qué ocurrió en una frase que no presente tus inferencias como hechos.":"Formula dos hipótesis incompatibles pero razonables."}</p></section><section><b>02 · Grado de certeza</b><div className="cx-seg">{[35,60,85].map(value=><button key={value} aria-pressed={certainty===value} onClick={()=>setCertainty(value)}>{value} %</button>)}</div><p>¿Qué dato justificaría subir o bajar veinte puntos?</p></section><section><b>03 · Revisión</b><div className="cx-seg">{["MALENTENDIDO","MANIOBRA","AMBOS"].map(value=><button key={value} aria-pressed={verdicts[active.id]===value} onClick={()=>setVerdicts(current=>({...current,[active.id]:value}))}>{verdictNames[value]}</button>)}</div><p>Tu etiqueta es provisional. Explica qué evidencia no encaja bien con ella.</p></section><button className="cx-btn" aria-expanded={teacherOpen} onClick={()=>setTeacherOpen(value=>!value)}>{teacherOpen?"Cerrar el papel":"Papel del profe"}</button>{teacherOpen&&<p className="cx-teacher"><b>Papel del profe</b>{active.teacher}</p>}</aside>
    </section>}

    {stage===2&&<section className="cxp-page" key="s2"><header className="cx-rise"><p className="cx-kicker">Caso 05 · audiencia de interpretación · 8 min · sin veredicto oficial</p><h1>{cases[4].title}</h1><p>{cases[4].opening}</p></header><div className="cxp-split ministry-final"><section className="ministry-final-evidence"><div className="cx-seg">{[1,2,3,4].map(index=><button key={index} disabled={index>finalUnlocked} aria-pressed={phaseView===index} onClick={()=>setPhaseView(index)}>Evidencia {index}</button>)}</div>{phaseView===0?<div className="cxp-say"><small>Antes de escuchar ninguna versión</small><h2>Formula dos referentes posibles para «vienen».</h2><button className="cx-btn is-accent ministry-start" onClick={revealNext}>Abrir el titular <span aria-hidden="true">→</span></button></div>:<article className="ministry-sheet cx-card cx-rise" key={phaseView}><header><span className="cx-chip is-accent">{cases[4].phases[phaseView-1].kind}</span><small>{cases[4].phases[phaseView-1].source}</small></header><blockquote>«{cases[4].phases[phaseView-1].text}»</blockquote><p className="ministry-prompt">{cases[4].phases[phaseView-1].prompt}</p>{finalUnlocked<4&&phaseView===finalUnlocked&&<button className="cx-btn is-accent ministry-start" onClick={revealNext}>Abrir la siguiente versión <span aria-hidden="true">→</span></button>}</article>}</section><aside className="cxp-list ministry-verdicts" aria-label="Dos interpretaciones defendibles">{([["A","Referente amplio","Despreciaba al nuevo público del festival.","La pregunta previa activa ese referente y el chat sugiere control de daños."],["B","Referente situacional","Criticaba a los invitados del salón de patrocinadores.","La mirada y el gesto pueden restringir «vienen» al grupo que tenía delante."],["M","Conclusión matizada","Una lectura es más probable, pero ninguna queda probada.","Debes asignar una probabilidad y explicar qué inclina la balanza."]] as const).map(([key,name,claim,why])=><button key={key} className={position===key?"active":""} onClick={()=>{setPosition(key);setObjection(0);}}><span>{key}</span><div><b>{claim}</b><small>{name} · {why}</small></div></button>)}</aside></div>{position&&<section className="cxp-split cx-rise"><div className="cxp-say"><small>Tu conclusión · {position}</small><h2>{cases[4].close}</h2></div><aside className="cxp-panel cx-card"><small>Objeción del profesor · {objection+1} de 3</small><p className="ministry-objection">«{objections[objection]}»</p><button className="cx-btn" onClick={()=>setObjection(current=>(current+1)%3)}>Siguiente objeción →</button></aside></section>}<button className="cx-btn ministry-start" aria-expanded={teacherOpen} onClick={()=>setTeacherOpen(value=>!value)}>{teacherOpen?"Ocultar el papel":"Papel del profe"}</button>{teacherOpen&&<p className="cx-teacher"><b>Papel del profe</b>{cases[4].teacher}</p>}</section>}

    {stage===3&&<section className="cxp-final" key="s3"><header className="cx-rise"><p className="cx-kicker">Consejo abierto · 10–15 min</p><h1>La versión que elegimos creer</h1><p>Una pregunta por vez. Formula una tesis precisa, reconoce la mejor reserva y responde al contraargumento del profesor.</p></header><article className="cx-card ministry-single"><p className="cx-chip is-accent">Pregunta {finalIndex+1} de {finalQuestions.length}</p><h2>{finalQuestions[finalIndex].q}</h2><button className="cx-btn" aria-expanded={finalDepth} onClick={()=>setFinalDepth(value=>!value)}>{finalDepth?"Cerrar las capas":"Abrir repregunta y objeción"}</button>{finalDepth&&<div className="ministry-depth cx-rise"><p><b>Repregunta</b>{finalQuestions[finalIndex].f}</p><p className="cx-teacher"><b>Objeción</b>{finalQuestions[finalIndex].c}</p></div>}<nav className="ministry-final-nav"><button className="cx-btn" onClick={()=>moveFinal(-1)}>← Anterior</button><div>{finalQuestions.map((_,index)=><button key={index} aria-label={`Pregunta ${index+1}`} className={finalIndex===index?"active":""} onClick={()=>{setFinalIndex(index);setFinalDepth(false);}}/>)}</div><button className="cx-btn" onClick={()=>moveFinal(1)}>Siguiente →</button></nav></article><aside className="cxp-close cx-card"><img src="/brand/mascot/pointing.webp" alt="Mascota oficial de SPANISHCUE"/><div><small>Acta de cierre · 90 segundos</small><h2>Una frase técnicamente cierta que orienta hacia una conclusión engañosa</h2><p>Preséntala y después reformúlala para conservar la privacidad necesaria sin manipular la inferencia.</p></div></aside></section>}

    <button className="cx-btn cxp-support-trigger" aria-expanded={Boolean(support)} onClick={()=>setSupport(support?null:"INFERIR")}>{support?"Cerrar apoyo":"Precisión C2"}</button>{support&&<aside className="cxp-support cx-card"><nav className="cx-seg">{(Object.keys(languageSupport) as (keyof typeof languageSupport)[]).map(key=><button key={key} aria-pressed={support===key} onClick={()=>setSupport(key)}>{label(key)}</button>)}</nav>{languageSupport[support].map(item=><span key={item}>{item}</span>)}<footer className="ministry-pace"><b>Ritmo · para el profe</b><div className="cx-seg"><button aria-pressed={pace==="short"} onClick={()=>setPace(pace==="short"?null:"short")}>Habla poco</button><button aria-pressed={pace==="long"} onClick={()=>setPace(pace==="long"?null:"long")}>Habla mucho</button></div>{pace&&<p>{pace==="short"?"Dos interpretaciones para elegir una de forma provisional, y un indicio concreto antes de cada repregunta.":"Porcentajes de certeza, otra fuente del relato y una conclusión limitada a cuarenta y cinco segundos."}</p>}</footer></aside>}
    <footer className="cxp-controls"><button className="cx-btn" disabled={stage===0} onClick={()=>go(stage-1)}><span aria-hidden="true">←</span> Anterior</button><span><b>{stages[stage][0]}</b>{stages[stage][1]} · {stage+1}/{stages.length}</span>{stage<stages.length-1?<button className="cx-btn is-primary" onClick={()=>go(stage+1)}>Siguiente <span aria-hidden="true">→</span></button>:<Link className="cx-btn is-primary" href="/">Volver a Conversación <span aria-hidden="true">→</span></Link>}</footer>
  </main>;
}
