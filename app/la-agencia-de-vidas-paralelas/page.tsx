"use client";

import Link from "next/link";
import {useState,type CSSProperties} from "react";
import {ClassicTopBar} from "../clasicas-ui/TopBar";
import "../clasicas-ui/clasicas.css";
import "../clasicas-ui/premium.css";
import "./style.css";

type Dossier={
  id:string;code:string;door:string;signal:string;decision:string;probe:string;
  consequence:string;consequencePrompt:string;cost:string;reconsider:string;
  person:{name:string;role:string;line:string;teacher:string};
  rewrite:string;ripples:[string,string];finalPrompt:string;
};

const dossiers:Dossier[]=[
  {
    id:"husos",code:"VP–041",door:"El ascensor de las 05:40",signal:"Tres ciudades mantienen una luz encendida.",
    decision:"A los 32 aceptaste dirigir un estudio internacional. El sueldo era el doble y el cargo parecía imposible de rechazar.",
    probe:"¿Qué imaginabas ganar, además de dinero? ¿Qué riesgo probablemente minimizaste al aceptar?",
    consequence:"Cinco años después, el estudio trabaja en doce países, tu nombre abre puertas y vives en un departamento espectacular sobre el río.",
    consequencePrompt:"¿Dirías que esta vida confirma que elegiste bien? Define qué significa aquí «éxito» antes de responder.",
    cost:"Tu jornada tiene tres comienzos: Asia al amanecer, Europa por la tarde y América de noche. Tus amigos reservan un café contigo con seis semanas de anticipación.",
    reconsider:"¿Qué parte de tu valoración cambia? ¿El problema es el trabajo, la escala o la incapacidad de poner límites?",
    person:{name:"Mara Solís",role:"Directora ejecutiva · 37 años",line:"No he perdido tiempo: lo he invertido en construir algo que antes no existía.",teacher:"Defiende la decisión con serenidad. No admitas cansancio al principio. Si el alumno insiste, reconoce que llevas tres meses posponiendo unas vacaciones, pero cuestiona que el equilibrio deba medirse cada semana."},
    rewrite:"Rechazas el cargo y mantienes tu estudio pequeño.",ripples:["Tus ingresos se estabilizan en menos de la mitad y debes cancelar una expansión.","Recuperas las noches, pero tu familia empieza a contar con tu disponibilidad para todo."],
    finalPrompt:"¿Has recuperado libertad o simplemente has cambiado quién administra tu tiempo?"
  },
  {
    id:"jueves",code:"VP–118",door:"La mesa de los jueves",signal:"La misma mesa lleva once años reservada.",
    decision:"Rechazaste una oportunidad en otro continente y te quedaste para construir una vida con tu pareja. Juntos abrieron un pequeño cine-café.",
    probe:"¿Qué razones podrían hacer que quedarse fuera una decisión valiente y no una renuncia?",
    consequence:"El local funciona, tienen una comunidad fiel y cada jueves cenan con los mismos amigos. Rara vez se sienten solos.",
    consequencePrompt:"¿Cuánto vale una vida con vínculos estables frente a una oportunidad irrepetible? ¿Cómo evitarías idealizar cualquiera de las dos?",
    cost:"Los dos hablan del futuro como si ya estuviera decidido. La mayor aventura del último año fue cambiar el postre del menú y casi provoca una asamblea.",
    reconsider:"¿La estabilidad ha protegido la relación o la ha vuelto automática? Propón un cambio que no destruya lo construido.",
    person:{name:"Julián Ferrer",role:"Copropietario del cine · 41 años",line:"La gente confunde una vida tranquila con una vida pequeña.",teacher:"Intenta convencer al alumno de que esta vida es mejor. Usa detalles cotidianos y humor. Oculta inicialmente que te inquieta no saber quién serías fuera de la relación."},
    rewrite:"Aceptas aquella oportunidad y la relación continúa a distancia.",ripples:["El cine se vende antes de ser rentable y la familia pierde su punto de encuentro.","Tu carrera despega, pero la relación debe renegociarse cada seis meses sin promesa de regreso."],
    finalPrompt:"¿Qué tendría que ocurrir para que la distancia fuera un proyecto y no una espera?"
  },
  {
    id:"llave",code:"VP–207",door:"La llave sin dirección",signal:"En el casillero hay cinco tarjetas de embarque.",
    decision:"Vendiste casi todo y decidiste cambiar de ciudad cada cuatro meses mientras producías documentales.",
    probe:"¿Qué versión de la libertad prometía esta decisión? ¿Qué habilidad personal exigiría para no agotarte?",
    consequence:"Hablas cuatro idiomas, has filmado historias extraordinarias y tienes amigos capaces de recibirte en nueve países.",
    consequencePrompt:"¿Pertenecer a muchos lugares compensa no ser imprescindible en ninguno? Argumenta desde dos perspectivas.",
    cost:"Tus amistades empiezan con intensidad y terminan en aeropuertos. Perteneces a veintidós grupos de chat, pero nadie tiene una copia de tu llave.",
    reconsider:"¿El costo es soledad, falta de estructura o una idea demasiado rígida de pertenencia? Reformula tu primera conclusión.",
    person:{name:"Nadia Kwon",role:"Productora documental · 35 años",line:"No necesito raíces; necesito rutas que todavía me sorprendan.",teacher:"Defiende la movilidad sin romantizarla. Si el alumno la idealiza, señala el cansancio logístico. Si la critica, pregúntale por qué una dirección fija sería prueba de pertenencia."},
    rewrite:"Eliges una base durante tres años y aceptas proyectos solo desde allí.",ripples:["Una serie internacional contrata a otra persona porque ya no puedes viajar sin aviso.","Las visitas dejan de ser despedidas y dos amistades empiezan a formar parte de tu rutina real."],
    finalPrompt:"¿Cuánta espontaneidad sacrificarías para dejar de sentir que todo es provisional?"
  },
  {
    id:"cheque",code:"VP–309",door:"El cheque demasiado temprano",signal:"Una cifra perfecta aparece siete años antes de tiempo.",
    decision:"Vendiste tu empresa al recibir la primera oferta capaz de darte independencia económica para siempre.",
    probe:"¿Qué información necesitarías para distinguir prudencia de falta de ambición? ¿A quién afecta la venta?",
    consequence:"Pagaste la hipoteca de tu familia, puedes elegir cuándo trabajar y nunca más aceptaste un proyecto solo por necesidad.",
    consequencePrompt:"¿La posibilidad de decir que no vale más que seguir controlando lo que creaste? Introduce una reserva en tu respuesta.",
    cost:"La empresa compradora convirtió la idea en un fenómeno mundial. Durante siete años no puedes competir ni explicar públicamente qué parte del concepto era tuya.",
    reconsider:"¿Te dolería más perder el control, el reconocimiento o la posibilidad de comprobar hasta dónde habrías llegado?",
    person:{name:"Leo Aranda",role:"Fundador retirado · 39 años",line:"Cobrar a tiempo también es una forma de inteligencia; los finales épicos suelen contarlos quienes sobrevivieron.",teacher:"Defiende la venta incluso si el alumno habla de cobardía. Oculta que sigues todas las noticias de la empresa. Solo admítelo si te preguntan por reconocimiento o identidad."},
    rewrite:"Rechazas la oferta y conservas el control de la empresa.",ripples:["Tus ahorros casi desaparecen durante dieciocho meses y tu familia pospone una mudanza necesaria.","El producto conserva tu visión y, si funciona, tu nombre queda unido públicamente a la idea."],
    finalPrompt:"¿Qué resultado te permitiría decir que valió la pena asumir el riesgo?"
  },
  {
    id:"marquesina",code:"VP–512",door:"La marquesina del domingo",signal:"Una sala antigua vuelve a encenderse cada fin de semana.",
    decision:"Volviste a tu ciudad para salvar el cine de tu familia en lugar de aceptar una residencia profesional en el extranjero.",
    probe:"¿Qué obligaciones familiares serían legítimas aquí y cuáles deberían seguir siendo opcionales?",
    consequence:"Restauraste el cine, tus padres pudieron retirarse y el barrio recuperó un lugar lleno cada domingo.",
    consequencePrompt:"¿Puede un proyecto familiar ser también una realización personal? Evita tratar deber y deseo como opuestos automáticos.",
    cost:"La familia interpreta tu presencia como disponibilidad permanente. Cada viaje parece una deserción y hasta el grupo familiar vota cuándo puedes apagar el teléfono.",
    reconsider:"¿Cómo pondrías límites sin convertir la conversación en una contabilidad de sacrificios?",
    person:{name:"Clara Vidal",role:"Directora del cine · 36 años",line:"No regresé para pagar una deuda; regresé porque vi algo que todavía podía crecer.",teacher:"Muestra orgullo genuino. Defiende a la familia al comienzo. Después revela que recibiste otra invitación profesional y todavía no se la contaste a nadie."},
    rewrite:"Dejas el cine tras la primera temporada y recuperas la residencia profesional.",ripples:["Tus padres posponen la jubilación y el cine reduce su programación a dos días.","Accedes a una red internacional, pero tus visitas a casa vuelven a sentirse como evaluaciones de tu decisión."],
    finalPrompt:"¿Cómo comunicarías la salida para que sea un límite y no un rechazo a la familia?"
  },
  {
    id:"calendario",code:"VP–640",door:"El calendario perfecto",signal:"Nada imprevisto ha ocurrido en 1.204 días.",
    decision:"Elegiste un puesto extremadamente estable y rechazaste dos proyectos arriesgados que te entusiasmaban.",
    probe:"¿Cuándo la seguridad es una conquista y cuándo puede convertirse en una forma elegante de miedo?",
    consequence:"Duermes bien, tienes tardes libres, una pensión sólida y por fin aprendiste a tocar el piano sin mirar el reloj.",
    consequencePrompt:"¿Por qué solemos describir la estabilidad por lo que evita y no por lo que permite? Da un ejemplo concreto.",
    cost:"Cualquier idea nueva necesita catorce firmas. Últimamente, la principal sorpresa del mes es el catálogo de material de oficina y ya tienes opiniones fuertes sobre las carpetas.",
    reconsider:"¿La frustración invalida los beneficios o revela que necesitas otra fuente de riesgo? Diseña una solución intermedia.",
    person:{name:"Eva Montes",role:"Coordinadora pública · 44 años",line:"La adrenalina es una pésima asesora financiera y una excelente campaña de publicidad.",teacher:"Defiende la estabilidad con argumentos prácticos y humor. Si el alumno propone renunciar, exige un plan concreto de seis meses y señala todos los supuestos optimistas."},
    rewrite:"Renuncias y te incorporas a una cooperativa nueva con poder creativo real.",ripples:["Pierdes la ruta segura hacia la pensión y tus ingresos varían cada trimestre.","Recuperas capacidad de decisión, pero el piano vuelve a esperar algunas noches."],
    finalPrompt:"¿Qué condiciones mínimas convertirían el riesgo en una decisión razonable y no impulsiva?"
  }
];

const stages=[
  ["Recepción","3 min"],["Expedientes","15 min"],["Entrevista","6 min"],
  ["Balance","5 min"],["Modificación","6 min"],["Conversación final","10 min"]
] as const;

const interviewQuestions=[
  "¿Qué detalle de esta vida defenderías aunque nadie más lo valorara?",
  "¿Qué parte de tu versión del éxito no aparece en el expediente?",
  "¿Qué le envidias, en secreto, a la vida que no elegiste?",
  "¿Qué supuesto del visitante te parece injusto o demasiado cómodo?"
] as const;

const values=["Tiempo","Vínculos","Dinero","Libertad","Estabilidad","Reconocimiento"] as const;

const finalQuestions=[
  {q:"¿Crees que las decisiones importantes dependen más del carácter o de las circunstancias?",f:"Piensa en dos personas distintas ante la misma oportunidad.",c:"Si todo dependiera del carácter, ¿no estaríamos ignorando privilegios y límites reales?"},
  {q:"¿Hay decisiones aparentemente pequeñas que pueden cambiar una vida entera?",f:"Propón una que solo revele su importancia muchos años después.",c:"¿Estamos viendo causalidad real o construyendo una historia coherente a posteriori?"},
  {q:"¿Qué valoras más en esta etapa: estabilidad o libertad?",f:"Define ambos términos con ejemplos antes de elegir.",c:"¿Y si la estabilidad fuera precisamente lo que permite ejercer una libertad más profunda?"},
  {q:"¿Es posible saber que tomamos la decisión correcta?",f:"¿Qué criterio usarías si el resultado tarda diez años en aparecer?",c:"Un buen resultado también puede provenir de una decisión mal razonada."},
  {q:"¿Qué solemos idealizar cuando imaginamos una vida diferente?",f:"Distingue lo que imaginamos ganar de lo que dejamos fuera de la escena.",c:"Quizás idealizar sea útil si nos revela una necesidad real del presente."},
  {q:"¿Puede el arrepentimiento ser útil sin convertirse en una obsesión?",f:"¿Qué tendría que producir para que fuera útil?",c:"¿Y si buscar una lección en todo arrepentimiento fuera otra forma de no aceptar la pérdida?"},
  {q:"¿Qué sacrificarías por una carrera extraordinaria?",f:"Nombra un límite no negociable y una concesión posible.",c:"¿Seguiría siendo extraordinaria si exige abandonar aquello que le daba sentido?"},
  {q:"¿Hasta qué punto debería influir la familia en las grandes decisiones?",f:"Separa escuchar, pedir permiso y asumir responsabilidades.",c:"La autonomía individual también puede trasladar costos a otros."},
  {q:"¿Qué significa para ti tener éxito cuando nadie está mirando?",f:"Elimina dinero y prestigio de tu primera definición.",c:"¿Una definición completamente privada puede ignorar el efecto de nuestra vida sobre otros?"},
  {q:"¿Una vida más fácil necesariamente sería una vida mejor?",f:"¿Qué dificultad conservarías porque produce algo valioso?",c:"Cuidado con romantizar obstáculos que simplemente desgastan."}
] as const;

const languageSupport={
  "HIPÓTESIS":["Probablemente habría…","Me cuesta imaginar que…","Lo que habría cambiado realmente sería…"],
  "MATIZ":["Hasta cierto punto…","Dicho eso…","Aunque pudiera parecer…"],
  "REVISIÓN":["Visto desde otra perspectiva…","No necesariamente.","Ahora matizaría lo anterior porque…"]
} as const;

export default function AgenciaDeVidasParalelas(){
  const [stage,setStage]=useState(0);
  const [activeIndex,setActiveIndex]=useState(0);
  const [openLevels,setOpenLevels]=useState<Record<string,number>>({});
  const [teacherOpen,setTeacherOpen]=useState(false);
  const [interviewIndex,setInterviewIndex]=useState(0);
  const [priorities,setPriorities]=useState<string[]>([]);
  const [rewriteIndex,setRewriteIndex]=useState(0);
  const [ripplesOpen,setRipplesOpen]=useState(false);
  const [finalIndex,setFinalIndex]=useState(0);
  const [finalDepth,setFinalDepth]=useState(false);
  const [support,setSupport]=useState<keyof typeof languageSupport|null>(null);
  const [pace,setPace]=useState<"short"|"long"|null>(null);
  const active=dossiers[activeIndex];
  const layer=openLevels[active.id]??0;
  const visited=dossiers.filter(item=>(openLevels[item.id]??0)>=3).length;
  const go=(next:number)=>{setStage(Math.max(0,Math.min(stages.length-1,next)));setTeacherOpen(false);window.scrollTo({top:0,behavior:"auto"});};
  const enter=(index:number)=>{setActiveIndex(index);setTeacherOpen(false);setStage(1);window.scrollTo({top:0,behavior:"auto"});};
  const reveal=()=>setOpenLevels(current=>({...current,[active.id]:Math.min(3,(current[active.id]??0)+1)}));
  const togglePriority=(value:string)=>setPriorities(current=>current.includes(value)?current.filter(item=>item!==value):current.length<3?[...current,value]:current);
  const selectRewrite=(index:number)=>{setRewriteIndex(index);setRipplesOpen(false);};
  const moveFinal=(direction:number)=>{setFinalIndex(current=>(current+direction+finalQuestions.length)%finalQuestions.length);setFinalDepth(false);};

  const label=(value:string)=>value.charAt(0)+value.slice(1).toLowerCase();
  return <main className="cx cxp parallel-app" style={{"--cx-accent":"#7048e8"} as CSSProperties}>
    <ClassicTopBar title="La agencia de vidas paralelas · C1"><span className="cx-chip is-accent">Agencia abierta · 45 min</span></ClassicTopBar>

    <nav className="cxp-steps parallel-steps" aria-label="Recorrido de la clase">{stages.map(([name,time],index)=><button key={name} aria-current={stage===index?"step":undefined} className={stage===index?"active":stage>index?"done":""} onClick={()=>go(index)}><span>{stage>index?"✓":index+1}</span><b>{name}<small>{time}</small></b></button>)}</nav>

    {stage===0&&<><section className="cxp-hero"><article className="cx-rise"><p className="cx-kicker">C1 · Hipótesis, consecuencias y decisiones</p><h1>La agencia de <em>vidas paralelas</em></h1><p className="cxp-lead">Seis puertas conservan vidas que pudieron ocurrir. Elige una sin conocer la decisión, anticipa lo que hay detrás y habla antes de desbloquear cada capa.</p><div className="cxp-say"><small>Primera pregunta · habla ahora</small><b>¿Una vida alternativa revela lo que deseamos o solo lo que hoy echamos de menos?</b></div></article><figure className="cxp-art cx-rise"><img src="/conversation-premium/agencia-vidas-paralelas.webp" alt="" width="1600" height="900"/></figure></section>
      <section className="cxp-page parallel-doors"><header><p className="cx-kicker">Seis accesos · {visited} expedientes completos</p></header><div className="cxp-tiles">{dossiers.map((item,index)=><button key={item.id} onClick={()=>enter(index)} className={(openLevels[item.id]??0)>=3?"active":""}><small>{item.code}</small><h2>{item.door}</h2><p>{item.signal}</p><em>{(openLevels[item.id]??0)>=3?"Revisitar":"Entrar"} →</em></button>)}</div></section></>}

    {stage===1&&<section className="cxp-page parallel-file" key="s1">
      <aside className="cxp-list parallel-index" aria-label="Archivo personal"><p className="parallel-index-head"><b>Archivo personal</b><span>{visited} de 3 recomendados</span></p>{dossiers.map((item,index)=><button key={item.id} className={activeIndex===index?"active":""} onClick={()=>{setActiveIndex(index);setTeacherOpen(false);}}><span>{openLevels[item.id]??0}/3</span><div><b>{item.door}</b><small>{item.code}</small></div></button>)}</aside>
      <article className="parallel-active">
        <header className="cx-rise"><p className="cx-kicker">{active.code} · expediente activo</p><h1>{active.door}</h1><p>{active.signal}</p><div className="parallel-meter" aria-label={`${layer} de 3 capas abiertas`}><i className={layer>=1?"on":""}/><i className={layer>=2?"on":""}/><i className={layer>=3?"on":""}/></div></header>
        {layer===0&&<div className="cxp-say parallel-sealed"><small>La puerta no revela la decisión</small><h2>¿Qué clase de vida crees que esconde este acceso?</h2><p>Formula dos hipótesis distintas. Explica qué indicio te hace confiar más en una y qué dato podría cambiarla.</p><button className="cx-btn is-accent" onClick={reveal}>Revelar la decisión <span aria-hidden="true">→</span></button></div>}
        {layer>=1&&<div className="parallel-layers">
          <article className="cxp-panel cx-card cx-rise"><small>01 · Decisión</small><h2>{active.decision}</h2><p>{active.probe}</p></article>
          {layer===1&&<button className="cx-btn is-accent" onClick={reveal}>Habla antes de abrir · desbloquear la consecuencia <span aria-hidden="true">→</span></button>}
          {layer>=2&&<article className="cxp-panel cx-card cx-rise"><small>02 · Consecuencia</small><h2>{active.consequence}</h2><p>{active.consequencePrompt}</p></article>}
          {layer===2&&<button className="cx-btn is-accent" onClick={reveal}>¿Mantienes tu posición? · descubrir el costo oculto <span aria-hidden="true">→</span></button>}
          {layer>=3&&<article className="cxp-panel cx-card cx-rise parallel-cost"><small>03 · Costo oculto</small><h2>{active.cost}</h2><p>{active.reconsider}</p></article>}
          {layer===3&&<div className="cxp-say"><small>Revisión obligatoria</small><h2>Resume tu posición inicial. Después cambia, limita o refuerza una parte concreta a la luz del costo oculto.</h2><button className="cx-btn is-primary" onClick={()=>go(2)}>Entrevistar esta vida <span aria-hidden="true">→</span></button></div>}
        </div>}
        <button className="cx-btn parallel-teacher-btn" aria-expanded={teacherOpen} onClick={()=>setTeacherOpen(value=>!value)}>{teacherOpen?"Cerrar la nota":"Nota para el profe"}</button>
        {teacherOpen&&<p className="cx-teacher"><b>Nota para el profe</b>La siguiente capa se abre cuando el alumno formula una hipótesis, una razón y una reserva. Ante una certeza excesiva, sirve: «¿Qué estás suponiendo para llegar a esa conclusión?»</p>}
      </article>
    </section>}

    {stage===2&&<section className="cxp-page" key="s2"><header className="cx-rise"><p className="cx-kicker">Conexión con la vida alternativa · 6 min</p><h1>La versión que siguió ese camino</h1></header><div className="cxp-split parallel-interview"><aside className="cxp-panel cx-card parallel-person"><figure><img src="/conversation-premium/agencia-vidas-paralelas.webp" alt="" width="1600" height="900"/><b>{active.person.name.split(" ").map(part=>part[0]).join("")}</b></figure><small>Versión {active.code}</small><h2>{active.person.name}</h2><p>{active.person.role}</p><blockquote>«{active.person.line}»</blockquote></aside><article className="parallel-questions"><div className="cxp-say"><small>Pregunta {interviewIndex+1} de {interviewQuestions.length}</small><h2>{interviewQuestions[interviewIndex]}</h2><p>Escucha la respuesta del profesor, cuestiona una premisa y formula una repregunta que no pueda responderse con sí o no.</p></div><div className="cx-seg">{interviewQuestions.map((_,index)=><button key={index} aria-pressed={interviewIndex===index} onClick={()=>setInterviewIndex(index)}>Pregunta {index+1}</button>)}</div><button className="cx-btn" aria-expanded={teacherOpen} onClick={()=>setTeacherOpen(value=>!value)}>{teacherOpen?"Ocultar el papel":"Papel del profe"}</button>{teacherOpen&&<p className="cx-teacher"><b>Personaje · {active.person.name}</b>{active.person.teacher}</p>}</article></div></section>}

    {stage===3&&<section className="cxp-page" key="s3"><header className="cx-rise"><p className="cx-kicker">Cámara de balance · 5 min</p><h1>Toda vida optimiza algo.</h1><p>Elige solo tres valores que esta vida debería proteger. Después identifica la contradicción entre dos de ellos y explica cuál cedería primero bajo presión.</p></header><div className="cxp-panel cx-card"><small>Conservar · {priorities.length} de 3</small><div className="parallel-values">{values.map((value,index)=><button key={value} className={priorities.includes(value)?"cx-btn is-accent":"cx-btn"} aria-pressed={priorities.includes(value)} disabled={!priorities.includes(value)&&priorities.length===3} onClick={()=>togglePriority(value)}><span>{String(index+1).padStart(2,"0")}</span>{value}</button>)}</div></div>{priorities.length===3&&<aside className="cxp-say cx-rise"><small>Contradicción detectada</small><h2>«Quiero conservar {priorities[0].toLowerCase()} y {priorities[1].toLowerCase()}, aunque eso podría reducir {priorities[2].toLowerCase()}.»</h2><p>Reformula la frase desde la perspectiva de alguien que ordenaría esos valores de otra manera.</p></aside>}
    </section>}

    {stage===4&&<section className="cxp-page" key="s4"><header className="cx-rise"><p className="cx-kicker">Autorización única · 6 min</p><h1>Puedes cambiar una decisión.</h1><p>Elige el expediente que quieres reescribir. Primero defiende el cambio; después abre la propagación y negocia los dos efectos que no puedes evitar.</p></header><div className="parallel-strip">{dossiers.map((item,index)=><button key={item.id} className={rewriteIndex===index?"active":""} onClick={()=>selectRewrite(index)}><small>{item.code}</small><span>{item.door}</span></button>)}</div><div className="cxp-split"><section className="cxp-say"><small>Modificación solicitada</small><h2>{dossiers[rewriteIndex].rewrite}</h2><p>¿Qué problema resuelve? ¿Qué valor protege? ¿Qué riesgo estás dispuesto o dispuesta a aceptar?</p><button className="cx-btn is-accent" onClick={()=>setRipplesOpen(true)} disabled={ripplesOpen}>{ripplesOpen?"Propagación abierta ✓":"Activar el cambio →"}</button></section><aside className={ripplesOpen?"cxp-panel cx-card cx-rise":"cxp-panel cx-card parallel-locked"}>{ripplesOpen?<><small>El cambio altera dos áreas</small>{dossiers[rewriteIndex].ripples.map((item,index)=><p key={item} className="parallel-ripple"><b>Efecto {index+1}</b>{item}</p>)}<h2>{dossiers[rewriteIndex].finalPrompt}</h2><p className="cx-teacher"><b>El profesor presiona</b>Exige mantener uno de los dos efectos y agrava el otro. El alumno negocia una versión que todavía pueda defender.</p></>:<><small>Efectos bloqueados</small><p>Habla antes de activar la modificación.</p></>}</aside></div>
    </section>}

    {stage===5&&<section className="cxp-final" key="s5"><header className="cx-rise"><p className="cx-kicker">Fuera de la agencia · conversación abierta · 10–15 min</p><h1>La vida que no viene con expediente</h1><p>Una pregunta por vez. Desarróllala con una historia, una distinción o un ejemplo; después abre la repregunta y el contraargumento.</p></header><article className="cx-card parallel-single"><p className="cx-chip is-accent">Pregunta {finalIndex+1} de {finalQuestions.length}</p><h2>{finalQuestions[finalIndex].q}</h2><button className="cx-btn" aria-expanded={finalDepth} onClick={()=>setFinalDepth(value=>!value)}>{finalDepth?"Cerrar la profundidad":"Abrir repregunta y contraargumento"}</button>{finalDepth&&<div className="parallel-depth cx-rise"><p><b>Repregunta</b>{finalQuestions[finalIndex].f}</p><p className="cx-teacher"><b>El profesor cuestiona</b>{finalQuestions[finalIndex].c}</p></div>}<nav className="parallel-final-nav"><button className="cx-btn" onClick={()=>moveFinal(-1)}>← Anterior</button><div>{finalQuestions.map((_,index)=><button key={index} aria-label={`Pregunta ${index+1}`} className={finalIndex===index?"active":""} onClick={()=>{setFinalIndex(index);setFinalDepth(false);}}/>)}</div><button className="cx-btn" onClick={()=>moveFinal(1)}>Siguiente →</button></nav></article><aside className="cxp-close cx-card"><img src="/brand/mascot/pointing.webp" alt="Mascota oficial de SPANISHCUE"/><div><small>Cierre · 90 segundos</small><h2>Una decisión ficticia que ahora juzgas de otra manera</h2><p>Explica tu primera lectura, el dato que la modificó y la posición que defenderías ahora sin borrar la contradicción.</p></div></aside></section>}

    <button className="cx-btn cxp-support-trigger" aria-expanded={Boolean(support)} onClick={()=>setSupport(support?null:"HIPÓTESIS")}>{support?"Cerrar apoyo":"Apoyo C1"}</button>
    {support&&<aside className="cxp-support cx-card"><nav className="cx-seg">{(Object.keys(languageSupport) as (keyof typeof languageSupport)[]).map(key=><button key={key} aria-pressed={support===key} onClick={()=>setSupport(key)}>{label(key)}</button>)}</nav>{languageSupport[support].map(item=><span key={item}>{item}</span>)}<footer className="parallel-pace"><b>Ritmo · para el profe</b><div className="cx-seg"><button aria-pressed={pace==="short"} onClick={()=>setPace(pace==="short"?null:"short")}>Habla poco</button><button aria-pressed={pace==="long"} onClick={()=>setPace(pace==="long"?null:"long")}>Habla mucho</button></div>{pace&&<p>{pace==="short"?"Dos opciones concretas, un ejemplo pedido y una primera frase modelada sin completar la idea por el alumno.":"Un costo nuevo que interrumpe, una síntesis de 45 segundos y la defensa de la perspectiva contraria."}</p>}</footer></aside>}

    <footer className="cxp-controls"><button className="cx-btn" disabled={stage===0} onClick={()=>go(stage-1)}><span aria-hidden="true">←</span> Anterior</button><span><b>{stages[stage][0]}</b>{stages[stage][1]} · {stage+1}/{stages.length}</span>{stage<stages.length-1?<button className="cx-btn is-primary" onClick={()=>go(stage+1)}>Siguiente <span aria-hidden="true">→</span></button>:<Link className="cx-btn is-primary" href="/el-ministerio-de-las-versiones">Siguiente clase · C2 <span aria-hidden="true">→</span></Link>}</footer>
  </main>;
}
