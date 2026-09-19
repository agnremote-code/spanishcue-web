"use client";

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

  return <main className="ministry-app">
    <nav className="ministry-nav"><Link href="/"><img src="/brand/mascot/portrait.webp" alt=""/><span><b>SPANISHCUE</b><small>C2 · CONVERSACIÓN</small></span></Link><div><i/> EXPEDIENTE EN CURSO</div><Link href="/">BIBLIOTECA</Link></nav>
    <div className="ministry-rail">{stages.map(([name,time],index)=><button key={name} className={stage===index?"active":stage>index?"done":""} onClick={()=>go(index)}><span>{index+1}</span><b>{name}</b><small>{time}</small></button>)}</div>

    {stage===0&&<section className="ministry-intake"><div className="ministry-image"/><div className="ministry-shade"/><article><span>DIVISIÓN C2 · PERCEPCIÓN, SUBTEXTO Y SESGO</span><h1>El Ministerio<br/><em>de las Versiones</em></h1><p>Cinco hechos. Demasiados relatos. Tu tarea no es descubrir quién miente, sino explicar qué hace cada versión, qué evita y por qué podría resultar convincente.</p><div className="intake-rule"><small>PROTOCOLO 00 · RESPONDE YA</small><h2>¿Puede alguien recordar un hecho con absoluta sinceridad y contarlo de manera engañosa?</h2><p>El profesor debe pedir un ejemplo y cuestionar la diferencia entre memoria, selección e intención.</p></div><button onClick={()=>go(1)}>ABRIR EL ARCHIVO →</button></article><aside><header><b>5</b><span>CASOS ACTIVOS</span></header><div><small>01</small><p>Eufemismo corporativo</p></div><div><small>02</small><p>Ironía y actuación pública</p></div><div><small>03</small><p>Cuatro registros</p></div><div><small>04</small><p>Legitimidad institucional</p></div><div><small>05</small><p>Ambigüedad sin resolución</p></div></aside></section>}

    {stage===1&&<section className="case-workspace">
      <aside className="case-stack"><header><span>ARCHIVO A</span><b>{completed} / 4 cerrados</b></header>{cases.slice(0,4).map((item,index)=><button key={item.id} className={activeIndex===index?"active":(revealed[item.id]??0)>=4?"complete":""} onClick={()=>chooseCase(index)}><small>CASO {item.number}</small><span>{item.title}</span><i>{revealed[item.id]??0}/4</i></button>)}<div className="sealed-final"><small>CASO 05</small><b>ACCESO RESERVADO</b><span>Se abre en la siguiente sala.</span></div></aside>
      <article className="evidence-desk"><header><div><span>CASO {active.number} · {active.desk}</span><h1>{active.title}</h1></div><b>MV/{active.number}/C2</b></header><p className="case-opening">{active.opening}</p><div className="phase-tabs">{[1,2,3,4].map(index=><button key={index} disabled={index>unlocked} className={phaseView===index?"active":index<=unlocked?"open":""} onClick={()=>setPhaseView(index)}><span>0{index}</span>{index<=unlocked?active.phases[index-1].kind:"CLASIFICADO"}</button>)}</div>{!evidence?<div className="evidence-sealed"><div><i/><i/><b>MV</b></div><small>VERSIÓN INICIAL</small><h2>Cuenta en treinta segundos qué crees que ocurrió.</h2><p>Separa hechos, inferencias y preguntas pendientes antes de abrir el primer documento.</p><button onClick={revealNext}>REVELAR TITULAR →</button></div>:<div className="evidence-sheet" key={`${active.id}-${phaseView}`}><header><span>{evidence.kind}</span><small>{evidence.source}</small></header><blockquote>“{evidence.text}”</blockquote><div><small>CONVERSACIÓN OBLIGATORIA</small><h2>{evidence.prompt}</h2></div>{unlocked<4&&phaseView===unlocked?<button onClick={revealNext}>HABLÉ · ABRIR SIGUIENTE CAPA →</button>:unlocked===4&&<aside><span>CIERRE PROVISIONAL</span><p>{active.close}</p></aside>}</div>}
        {active.registers&&unlocked===4&&<section className="register-lab"><header><span>MISMO HECHO · CUATRO REGISTROS</span><b>Reformula oralmente antes de comparar</b></header><nav>{active.registers.map((item,index)=><button key={item.name} className={registerIndex===index?"active":""} onClick={()=>setRegisterIndex(index)}>{index+1} · {item.name}</button>)}</nav><article><small>{active.registers[registerIndex].name}</small><blockquote>“{active.registers[registerIndex].text}”</blockquote><p>{active.registers[registerIndex].effect}</p><h3>¿Qué se oculta, qué se sugiere y qué efecto produce? Ahora conserva el hecho y cámbialo al registro siguiente sin leer su versión.</h3></article></section>}
      </article>
      <aside className="interpretation-ledger"><header><small>CUADERNO DE HIPÓTESIS</small><span>NO BUSQUES UNA RESPUESTA ÚNICA</span></header><section><b>01 · TU LECTURA ACTUAL</b><p>{evidence?"Resume qué ocurrió en una frase que no presente tus inferencias como hechos.":"Formula dos hipótesis incompatibles pero razonables."}</p></section><section><b>02 · GRADO DE CERTEZA</b><div className="certainty-scale">{[35,60,85].map(value=><button key={value} className={certainty===value?"active":""} onClick={()=>setCertainty(value)}>{value}%</button>)}</div><p>¿Qué dato justificaría subir o bajar veinte puntos?</p></section><section><b>03 · REVISIÓN</b><div className="verdict-buttons">{["MALENTENDIDO","MANIOBRA","AMBOS"].map(value=><button key={value} className={verdicts[active.id]===value?"active":""} onClick={()=>setVerdicts(current=>({...current,[active.id]:value}))}>{value}</button>)}</div><p>Tu etiqueta es provisional. Explica qué evidencia no encaja bien con ella.</p></section><button className="teacher-file" onClick={()=>setTeacherOpen(value=>!value)}>{teacherOpen?"CERRAR DIRECTIVA":"SOLO PROFESOR · DIRECTIVA"}</button>{teacherOpen&&<div className="teacher-directive"><small>PAPEL CONFIDENCIAL</small><p>{active.teacher}</p></div>}</aside>
    </section>}

    {stage===2&&<section className="final-case-room"><header><div><span>CASO 05 · AUDIENCIA DE INTERPRETACIÓN · 8 MIN</span><h1>{cases[4].title}</h1><p>{cases[4].opening}</p></div><b>SIN VEREDICTO OFICIAL</b></header><div className="final-case-grid"><section className="final-evidence"><nav>{[1,2,3,4].map(index=><button key={index} disabled={index>(revealed.microfono??0)} className={phaseView===index?"active":""} onClick={()=>setPhaseView(index)}>EVIDENCIA 0{index}</button>)}</nav>{phaseView===0?<div className="final-sealed"><span>?</span><h2>Formula dos referentes posibles para «vienen» antes de escuchar ninguna versión.</h2><button onClick={revealNext}>ABRIR TITULAR →</button></div>:<article key={phaseView}><header><span>{cases[4].phases[phaseView-1].kind}</span><small>{cases[4].phases[phaseView-1].source}</small></header><blockquote>“{cases[4].phases[phaseView-1].text}”</blockquote><h2>{cases[4].phases[phaseView-1].prompt}</h2>{(revealed.microfono??0)<4&&phaseView===(revealed.microfono??0)&&<button onClick={revealNext}>ABRIR LA SIGUIENTE VERSIÓN →</button>}</article>}</section><aside className="dual-verdict"><span>DOS INTERPRETACIONES DEFENDIBLES</span><button className={position==="A"?"active":""} onClick={()=>{setPosition("A");setObjection(0);}}><small>A · REFERENTE AMPLIO</small><b>Despreciaba al nuevo público del festival.</b><p>La pregunta previa activa ese referente y el chat sugiere control de daños.</p></button><button className={position==="B"?"active":""} onClick={()=>{setPosition("B");setObjection(0);}}><small>B · REFERENTE SITUACIONAL</small><b>Criticaba a los invitados del salón de patrocinadores.</b><p>La mirada y el gesto pueden restringir «vienen» al grupo que tenía delante.</p></button><button className={position==="M"?"active":""} onClick={()=>{setPosition("M");setObjection(0);}}><small>M · CONCLUSIÓN MATIZADA</small><b>Una lectura es más probable, pero ninguna queda probada.</b><p>Debes asignar una probabilidad y explicar qué inclina la balanza.</p></button></aside></div>{position&&<section className="opposition-room"><div><span>TU CONCLUSIÓN · {position}</span><h2>{cases[4].close}</h2></div><aside><small>OBJECIÓN DEL PROFESOR · {objection+1}/3</small><p>{position==="A"?["El gesto hacia el salón ofrece un referente visible más inmediato que la pregunta.","El productor estaba allí y entendió una crítica a los patrocinadores.","El chat puede recomendar ambigüedad por prudencia, no porque confirme desprecio."][objection]:position==="B"?["La pregunta nombraba explícitamente al nuevo público y la respuesta no lo corrigió.","Señalar no demuestra referencia: también puede acompañar una generalización.","El asistente calificó la frase de fea y recomendó explotar la falta de contexto."][objection]:["Asignar probabilidades no sustituye una conclusión comunicable.","¿Qué evidencia consideras más fuerte y por qué no te permite superar el 60%?","Si fueras portavoz, no podrías responder simplemente que ambas lecturas son posibles."][objection]}</p><button onClick={()=>setObjection(current=>(current+1)%3)}>SIGUIENTE OBJECIÓN →</button></aside></section>}<button className="final-teacher" onClick={()=>setTeacherOpen(value=>!value)}>{teacherOpen?"OCULTAR INSTRUCCIÓN":"PROFESOR · PAPEL OCULTO"}</button>{teacherOpen&&<aside className="final-teacher-note"><span>INSTRUCCIÓN OBLIGATORIA</span><p>{cases[4].teacher}</p></aside>}</section>}

    {stage===3&&<section className="ministry-council"><header><span>CONSEJO ABIERTO · 10–15 MIN</span><h1>La versión que elegimos creer</h1><p>Una pregunta por vez. Formula una tesis precisa, reconoce la mejor reserva y responde al contraargumento del profesor.</p></header><div className="council-question"><aside><span>{String(finalIndex+1).padStart(2,"0")}</span><small>EXPEDIENTE FINAL</small></aside><article><h2>{finalQuestions[finalIndex].q}</h2><button onClick={()=>setFinalDepth(value=>!value)}>{finalDepth?"CERRAR CAPAS":"ABRIR REPREGUNTA + OBJECIÓN"}</button>{finalDepth&&<div><p><b>REPREGUNTA</b>{finalQuestions[finalIndex].f}</p><p><b>OBJECIÓN</b>{finalQuestions[finalIndex].c}</p></div>}</article></div><nav className="council-nav"><button onClick={()=>moveFinal(-1)}>← ANTERIOR</button><div>{finalQuestions.map((_,index)=><button key={index} aria-label={`Pregunta ${index+1}`} className={finalIndex===index?"active":""} onClick={()=>{setFinalIndex(index);setFinalDepth(false);}}>{String(index+1).padStart(2,"0")}</button>)}</div><button onClick={()=>moveFinal(1)}>SIGUIENTE →</button></nav><aside className="ministry-close"><small>ACTA DE CIERRE · 90 SEGUNDOS</small><h2>Presenta una frase que pueda ser técnicamente cierta y, al mismo tiempo, orientar al oyente hacia una conclusión engañosa.</h2><p>Después reformúlala para conservar la privacidad necesaria sin manipular la inferencia.</p></aside></section>}

    <button className="ministry-support-trigger" onClick={()=>setSupport(support?null:"INFERIR")}>{support?"CERRAR APOYO":"PRECISIÓN C2"}</button>{support&&<aside className="ministry-support"><header><b>FORMULACIONES OPCIONALES</b><button onClick={()=>setSupport(null)}>×</button></header><nav>{(Object.keys(languageSupport) as (keyof typeof languageSupport)[]).map(key=><button key={key} className={support===key?"active":""} onClick={()=>setSupport(key)}>{key}</button>)}</nav><div>{languageSupport[support].map(item=><span key={item}>{item}</span>)}</div><footer><b>RITMO · SOLO PROFESOR</b><button className={pace==="short"?"active":""} onClick={()=>setPace(pace==="short"?null:"short")}>HABLA POCO</button><button className={pace==="long"?"active":""} onClick={()=>setPace(pace==="long"?null:"long")}>HABLA MUCHO</button>{pace&&<p>{pace==="short"?"Ofrece dos interpretaciones y pide que elija una provisionalmente; solicita un indicio concreto antes de cada repregunta.":"Exige porcentajes de certeza, cambia la fuente del relato y limita la conclusión a cuarenta y cinco segundos."}</p>}</footer></aside>}
    <footer className="ministry-controls"><button disabled={stage===0} onClick={()=>go(stage-1)}>← ANTERIOR</button><span><b>{stages[stage][0]}</b>{stages[stage][1]} · {stage+1}/{stages.length}</span>{stage<stages.length-1?<button onClick={()=>go(stage+1)}>SIGUIENTE →</button>:<Link href="/">VOLVER A CONVERSACIÓN →</Link>}</footer>
  </main>;
}
