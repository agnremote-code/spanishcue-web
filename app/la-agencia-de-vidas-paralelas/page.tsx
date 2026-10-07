"use client";

import {ConversationFamily} from '../conversation-families/ConversationFamily';
import {OralBuilder} from '../conversation-families/OralBuilder';
import type {CEFRLevel} from '../conversation-families/types';
import {agencyDossiersForLevel,agencyFinals,agencyInterview,agencyLanguage,agencySupport,agencyTask,agencyValueEnglish} from './agency-levels';
import {narratives,narrativeLevels} from '../conversation-narratives/data';
import Link from "next/link";
import {useState} from "react";
import "./style.css";

export type Dossier={
  id:string;code:string;door:string;signal:string;decision:string;probe:string;
  consequence:string;consequencePrompt:string;cost:string;reconsider:string;
  person:{name:string;role:string;line:string;teacher:string};
  rewrite:string;ripples:[string,string];finalPrompt:string;
};

const originalDossiers:Dossier[]=[
  {
    id:"husos",code:"VP–041",door:"EL ASCENSOR DE LAS 05:40",signal:"Tres ciudades mantienen una luz encendida.",
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
    id:"jueves",code:"VP–118",door:"LA MESA DE LOS JUEVES",signal:"La misma mesa lleva once años reservada.",
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
    id:"llave",code:"VP–207",door:"LA LLAVE SIN DIRECCIÓN",signal:"En el casillero hay cinco tarjetas de embarque.",
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
    id:"cheque",code:"VP–309",door:"EL CHEQUE DEMASIADO TEMPRANO",signal:"Una cifra perfecta aparece siete años antes de tiempo.",
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
    id:"marquesina",code:"VP–512",door:"LA MARQUESINA DEL DOMINGO",signal:"Una sala antigua vuelve a encenderse cada fin de semana.",
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
    id:"calendario",code:"VP–640",door:"EL CALENDARIO PERFECTO",signal:"Nada imprevisto ha ocurrido en 1.204 días.",
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

const originalStages=[
  ["Recepción","3 min"],["Expedientes","15 min"],["Entrevista","6 min"],
  ["Balance","5 min"],["Modificación","6 min"],["Conversación final","10 min"]
] as const;

const originalInterviewQuestions=[
  "¿Qué detalle de esta vida defenderías aunque nadie más lo valorara?",
  "¿Qué parte de tu versión del éxito no aparece en el expediente?",
  "¿Qué le envidias, en secreto, a la vida que no elegiste?",
  "¿Qué supuesto del visitante te parece injusto o demasiado cómodo?"
] as const;

const values=["TIEMPO","VÍNCULOS","DINERO","LIBERTAD","ESTABILIDAD","RECONOCIMIENTO"] as const;

const originalFinalQuestions=[
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

const originalLanguageSupport={
  "HIPÓTESIS":["Probablemente habría…","Me cuesta imaginar que…","Lo que habría cambiado realmente sería…"],
  "MATIZ":["Hasta cierto punto…","Dicho eso…","Aunque pudiera parecer…"],
  "REVISIÓN":["Visto desde otra perspectiva…","No necesariamente.","Ahora matizaría lo anterior porque…"]
} as const;

export function AgenciaDeVidasParalelasNative({level}:{level:CEFRLevel}){
  const t=(es:string,en:string)=>level==='A0'?`${es} / ${en}`:es;
  const stages=originalStages.map(([name,time],index)=>[t(name,narratives.agency.stages[index][1]),time] as const);
  const dossiers=agencyDossiersForLevel(originalDossiers,level);
  const finalQuestions=agencyFinals(level,originalFinalQuestions);
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
  const [support,setSupport]=useState<string|null>(level==='A0'||level==='A1'?"HIPÓTESIS":null);
  const [pace,setPace]=useState<"short"|"long"|null>(null);
  const supportIndex=stage===4?rewriteIndex:activeIndex;
  const interviewQuestions=agencyInterview(level,activeIndex,originalInterviewQuestions);
  const languageSupport=agencyLanguage(level,originalLanguageSupport,supportIndex);
  const active=dossiers[activeIndex];
  const layer=openLevels[active.id]??0;
  const visited=dossiers.filter(item=>(openLevels[item.id]??0)>=3).length;
  const go=(next:number)=>{setStage(Math.max(0,Math.min(stages.length-1,next)));setTeacherOpen(false);window.scrollTo({top:0,behavior:"auto"});};
  const enter=(index:number)=>{setActiveIndex(index);setTeacherOpen(false);setStage(1);window.scrollTo({top:0,behavior:"auto"});};
  const reveal=()=>setOpenLevels(current=>({...current,[active.id]:Math.min(3,(current[active.id]??0)+1)}));
  const togglePriority=(value:string)=>setPriorities(current=>current.includes(value)?current.filter(item=>item!==value):current.length<3?[...current,value]:current);
  const selectRewrite=(index:number)=>{setRewriteIndex(index);setRipplesOpen(false);};
  const moveFinal=(direction:number)=>{setFinalIndex(current=>(current+direction+finalQuestions.length)%finalQuestions.length);setFinalDepth(false);};

  return <main className="parallel-app">
    <nav className="parallel-nav">
      <Link href="/" className="parallel-brand"><img src="/brand/mascot/portrait.webp" alt=""/><span><b>SPANISHCUE</b><small>{level} {t("· CONVERSACIÓN","· CONVERSATION")}</small></span></Link>
      <div className="agency-status"><i/> {t("AGENCIA ABIERTA · SESIÓN 45 MIN","AGENCY OPEN · 45-MINUTE SESSION")}</div>
      <Link href="/">{t("BIBLIOTECA","LIBRARY")}</Link>
    </nav>

    <div className="parallel-rail" aria-label={t("Recorrido de la clase","Class stages")}>{stages.map(([name,time],index)=><button key={name} className={stage===index?"active":stage>index?"done":""} onClick={()=>go(index)}><span>{stage>index?"✓":String(index+1).padStart(2,"0")}</span><b>{name}</b><small>{time}</small></button>)}</div>

    {stage===0&&<section className="agency-lobby">
      <div className="lobby-image"/><div className="lobby-shade"/>
      <div className="lobby-copy"><span>{level} {t("· HIPÓTESIS, CONSECUENCIAS Y DECISIONES","· POSSIBILITIES, CONSEQUENCES AND DECISIONS")}</span><h1>{t("La Agencia de","The Agency of")}<br/><em>{t("Vidas Paralelas","Parallel Lives")}</em></h1><p>{t("Seis puertas conservan vidas que pudieron ocurrir. Elige una sin conocer la decisión, anticipa lo que hay detrás y habla antes de desbloquear cada capa.","Six doors hold possible lives. Choose one, imagine what is behind it and speak before opening each layer.")}</p><aside><small>{t("PRIMERA PREGUNTA · HABLA AHORA","FIRST QUESTION · SPEAK NOW")}</small><h2>{level==="C1"?"¿Una vida alternativa revela lo que deseamos o solo lo que hoy echamos de menos?":agencyTask(0,activeIndex,level)}</h2></aside></div>
      <div className="portal-console"><header><span>{t("SEIS ACCESOS","SIX DOORS")}</span><b>{visited} {t("expedientes completos","completed files")}</b></header>{dossiers.map((item,index)=><button key={item.id} onClick={()=>enter(index)} className={(openLevels[item.id]??0)>=3?"visited":""}><small>{item.code}</small><strong>{item.door}</strong><span>{item.signal}</span><i>{(openLevels[item.id]??0)>=3?t("REVISITAR","REVISIT"):t("ENTRAR","ENTER")} →</i></button>)}</div>
    </section>}

    {stage===1&&<section className="agency-file-stage">
      <aside className="file-index"><header><span>{t("ARCHIVO PERSONAL","PERSONAL FILES")}</span><b>{visited} {t("/ 3 recomendados","/ 3 recommended")}</b></header>{dossiers.map((item,index)=><button key={item.id} className={activeIndex===index?"active":(openLevels[item.id]??0)>=3?"visited":""} onClick={()=>{setActiveIndex(index);setTeacherOpen(false);}}><small>{item.code}</small><span>{item.door}</span><i>{openLevels[item.id]??0}/3</i></button>)}</aside>
      <article className="active-file">
        <header><div><span>{active.code} {t("· EXPEDIENTE ACTIVO","· CURRENT FILE")}</span><h1>{active.door}</h1><p>{active.signal}</p></div><div className="layer-meter"><i className={layer>=1?"on":""}/><i className={layer>=2?"on":""}/><i className={layer>=3?"on":""}/></div></header>
        {layer===0&&<div className="sealed-layer"><div className="portal-orbit"><i/><i/><span>?</span></div><small>{t("LA PUERTA NO REVELA LA DECISIÓN","THE DOOR DOES NOT REVEAL THE DECISION")}</small><h2>{level==="C1"?"¿Qué clase de vida crees que esconde este acceso?":agencyTask(1,activeIndex,level)}</h2><p>{level==="C1"?"Formula dos hipótesis distintas. Explica qué indicio te hace confiar más en una y qué dato podría cambiarla.":level==="A0"?t("Mira la puerta. Escucha las frases y elige una.","Look at the door. Listen to the sentences and choose one."):level==="A1"?"Di: Quiero entrar. ¿Qué hay aquí?":"Anticipa una ventaja y un problema antes de abrir."}</p><button onClick={reveal}>{t("REVELAR DECISIÓN →","REVEAL DECISION →")}</button></div>}
        {layer>=1&&<section className="life-layers">
          <article className="life-layer decision open"><span>{t("01 · DECISIÓN","01 · DECISION")}</span><h2>{active.decision}</h2><p>{active.probe}</p></article>
          {layer===1&&<button className="next-layer" onClick={reveal}><small>{t("HABLA ANTES DE ABRIR","SPEAK BEFORE OPENING")}</small>{t("DESBLOQUEAR CONSECUENCIA →","UNLOCK CONSEQUENCE →")}</button>}
          {layer>=2&&<article className="life-layer consequence open"><span>{t("02 · CONSECUENCIA","02 · CONSEQUENCE")}</span><h2>{active.consequence}</h2><p>{active.consequencePrompt}</p></article>}
          {layer===2&&<button className="next-layer" onClick={reveal}><small>{t("¿MANTIENES TU POSICIÓN?","DO YOU KEEP YOUR CHOICE?")}</small>{t("DESCUBRIR COSTO OCULTO →","REVEAL HIDDEN COST →")}</button>}
          {layer>=3&&<article className="life-layer hidden-cost open"><span>{t("03 · COSTO OCULTO","03 · HIDDEN COST")}</span><h2>{active.cost}</h2><p>{active.reconsider}</p></article>}
          {layer===3&&<div className="file-verdict"><small>{t("REVISIÓN OBLIGATORIA","REVIEW YOUR CHOICE")}</small><h3>{level==="C1"?"Resume tu posición inicial. Después cambia, limita o refuerza una parte concreta a la luz del costo oculto.":active.reconsider}</h3><button onClick={()=>go(2)}>{t("ENTREVISTAR ESTA VIDA →","INTERVIEW THIS PERSON →")}</button></div>}
        </section>}
        <button className="teacher-seal" onClick={()=>setTeacherOpen(value=>!value)}>{teacherOpen?t("CERRAR NOTA","CLOSE NOTE"):t("SOLO PROFESOR · ABRIR NOTA","TEACHER ONLY · OPEN NOTE")}</button>
        {teacherOpen&&<aside className="teacher-note"><span>{t("INSTRUCCIÓN CONFIDENCIAL","TEACHER INSTRUCTION")}</span><p>{level==="C1"?"No reveles la siguiente capa hasta que el alumno formule una hipótesis, una razón y una reserva. Cuestiona una certeza excesiva con: «¿Qué estás suponiendo para llegar a esa conclusión?»":level==="A0"?t("Lee una frase. El alumno elige una opción y la dice. Después pulsa para abrir la siguiente capa.","Read a sentence. The student chooses an option and says it. Then click to open the next layer."):agencyTask(1,activeIndex,level)}</p></aside>}
      </article>
    </section>}

    {stage===2&&<section className="alternate-room">
      <div className="alternate-portrait"><span>{t("VERSIÓN","VERSION")} {active.code}</span><div className="holo-person"><img src="/conversation-premium/agencia-vidas-paralelas.webp" alt={t("Sala de conexión con distintas vidas alternativas","Room connecting different possible lives")}/><i/><i/><b>{active.person.name.split(" ").map(part=>part[0]).join("")}</b></div><h2>{active.person.name}</h2><p>{active.person.role}</p></div>
      <article className="interview-console"><header><span>{t("CONEXIÓN CON LA VIDA ALTERNATIVA · 6 MIN","CONNECT WITH THE OTHER LIFE · 6 MIN")}</span><h1>{t("La versión que siguió ese camino","The person who took that path")}</h1><blockquote>“{active.person.line}”</blockquote></header><div className="interview-question"><small>{t("PREGUNTA","QUESTION")} {interviewIndex+1} / {interviewQuestions.length}</small><h2>{interviewQuestions[interviewIndex]}</h2><p>{level==="C1"?"Escucha la respuesta del profesor, cuestiona una premisa y formula una repregunta que no pueda responderse con sí o no.":agencyTask(2,activeIndex,level)}</p></div><nav>{interviewQuestions.map((_,index)=><button key={index} className={interviewIndex===index?"active":""} onClick={()=>setInterviewIndex(index)}>{String(index+1).padStart(2,"0")}</button>)}</nav><button className="teacher-seal light" onClick={()=>setTeacherOpen(value=>!value)}>{teacherOpen?t("OCULTAR PAPEL","HIDE ROLE"):t("PROFESOR · REVELAR PAPEL","TEACHER · REVEAL ROLE")}</button>{teacherOpen&&<aside className="teacher-note light"><span>{t("PERSONAJE ·","CHARACTER ·")} {active.person.name.toUpperCase()}</span><p>{active.person.teacher}</p></aside>}</article>
    </section>}

    {stage===3&&<section className="values-chamber"><header><span>{t("CÁMARA DE BALANCE · 5 MIN","PRIORITY ROOM · 5 MIN")}</span><h1>{t("Toda vida optimiza algo.","Every life prioritizes something.")}</h1><p>{level==="C1"?"Elige solo tres valores que esta vida debería proteger. Después identifica la contradicción entre dos de ellos y explica cuál cedería primero bajo presión.":agencyTask(3,activeIndex,level)}</p></header><div className="value-orbit"><div className="value-core"><small>{t("CONSERVAR","KEEP")}</small><b>{priorities.length} / 3</b></div>{values.map((value,index)=><button key={value} className={priorities.includes(value)?"active":""} data-index={index} disabled={!priorities.includes(value)&&priorities.length===3} onClick={()=>togglePriority(value)}><span>{String(index+1).padStart(2,"0")}</span>{t(value,agencyValueEnglish[value])}</button>)}</div>{priorities.length===3&&<aside className="contradiction-card"><span>{t("CONTRADICCIÓN DETECTADA","PRIORITIES CHOSEN")}</span><h2>{level==="A0"?t(`Yo quiero ${priorities[0].toLowerCase()} y ${priorities[1].toLowerCase()}. También quiero ${priorities[2].toLowerCase()}.`,`I want ${agencyValueEnglish[priorities[0]].toLowerCase()} and ${agencyValueEnglish[priorities[1]].toLowerCase()}. I also want ${agencyValueEnglish[priorities[2]].toLowerCase()}.`):`“Quiero conservar ${priorities[0].toLowerCase()} y ${priorities[1].toLowerCase()}, aunque eso podría reducir ${priorities[2].toLowerCase()}.”`}</h2><p>{level==="C1"?"Reformula la frase desde la perspectiva de alguien que ordenaría esos valores de otra manera.":level==="A0"?t("Di tus tres elecciones. Pregunta: ¿Y tú?","Say your three choices. Ask: And you?"):agencyTask(3,activeIndex,level)}</p></aside>}
    </section>}

    {stage===4&&<section className="rewrite-vault"><header><span>{t("AUTORIZACIÓN ÚNICA · 6 MIN","ONE CHANGE ALLOWED · 6 MIN")}</span><h1>{t("Puedes cambiar una decisión.","You can change one decision.")}</h1><p>{level==="C1"?"Elige el expediente que quieres reescribir. Primero defiende el cambio; después abre la propagación y negocia los dos efectos que no puedes evitar.":agencyTask(4,rewriteIndex,level)}</p></header><div className="rewrite-strip">{dossiers.map((item,index)=><button key={item.id} className={rewriteIndex===index?"active":""} onClick={()=>selectRewrite(index)}><small>{item.code}</small><span>{item.door}</span></button>)}</div><div className="rewrite-machine"><section><small>{t("MODIFICACIÓN SOLICITADA","REQUESTED CHANGE")}</small><h2>{dossiers[rewriteIndex].rewrite}</h2><p>{level==="C1"?"¿Qué problema resuelve? ¿Qué valor protege? ¿Qué riesgo estás dispuesto a aceptar?":dossiers[rewriteIndex].probe}</p><button onClick={()=>setRipplesOpen(true)}>{ripplesOpen?t("PROPAGACIÓN ABIERTA","EFFECTS OPEN"):t("ACTIVAR CAMBIO →","ACTIVATE CHANGE →")}</button></section><aside className={ripplesOpen?"revealed":""}>{ripplesOpen?<><span>{t("EL CAMBIO ALTERA DOS ÁREAS","THE CHANGE HAS TWO EFFECTS")}</span>{dossiers[rewriteIndex].ripples.map((item,index)=><article key={item}><small>{t("EFECTO","EFFECT")} {index+1}</small><p>{item}</p></article>)}<h3>{dossiers[rewriteIndex].finalPrompt}</h3><p>{level==="C1"?"El profesor exige que mantengas uno de los dos efectos y agrava el otro. Negocia una versión que todavía puedas defender.":dossiers[rewriteIndex].reconsider}</p></>:<><span>{t("EFECTOS BLOQUEADOS","EFFECTS LOCKED")}</span><p>{t("Habla antes de activar la modificación.","Speak before activating the change.")}</p></>}</aside></div>
    </section>}

    {stage===5&&<section className="parallel-final"><header><span>{t("FUERA DE LA AGENCIA · CONVERSACIÓN ABIERTA · 10–15 MIN","OUTSIDE THE AGENCY · OPEN CONVERSATION · 10–15 MIN")}</span><h1>{t("La vida que no viene con expediente","Life beyond the files")}</h1><p>{level==="C1"?"Una pregunta por vez. Desarróllala con una historia, una distinción o un ejemplo; después abre la repregunta y el contraargumento.":agencyTask(5,activeIndex,level)}</p></header><div className="final-single"><aside><span>{String(finalIndex+1).padStart(2,"0")}</span><small>{t("DE","OF")} {finalQuestions.length}</small></aside><article><h2>{finalQuestions[finalIndex].q}</h2><button onClick={()=>setFinalDepth(value=>!value)}>{finalDepth?t("CERRAR PROFUNDIDAD","CLOSE FOLLOW-UP"):t("ABRIR REPREGUNTA + CONTRAARGUMENTO","OPEN FOLLOW-UP + ANOTHER VIEW")}</button>{finalDepth&&<div className="final-depth"><p><b>{t("REPREGUNTA","FOLLOW-UP")}</b>{finalQuestions[finalIndex].f}</p><p><b>{t("EL PROFESOR CUESTIONA","THE TEACHER CHALLENGES")}</b>{finalQuestions[finalIndex].c}</p></div>}</article></div><nav className="final-navigation"><button onClick={()=>moveFinal(-1)}>{t("← ANTERIOR","← PREVIOUS")}</button><div>{finalQuestions.map((_,index)=><button key={index} aria-label={t(`Pregunta ${index+1}`,`Question ${index+1}`)} className={finalIndex===index?"active":""} onClick={()=>{setFinalIndex(index);setFinalDepth(false);}}/>)}</div><button onClick={()=>moveFinal(1)}>{t("SIGUIENTE →","NEXT →")}</button></nav><aside className="parallel-closing"><span>{t("CIERRE · 90 SEGUNDOS","CLOSING · 90 SECONDS")}</span><h2>{t("Una decisión ficticia que ahora juzgas de otra manera","A fictional decision you now see differently")}</h2><p>{level==="C1"?"Explica tu primera lectura, el dato que la modificó y la posición que defenderías ahora sin borrar la contradicción.":agencyTask(5,activeIndex,level)}</p></aside></section>}

    <button className="parallel-support-trigger" onClick={()=>setSupport(support?null:"HIPÓTESIS")}>{support?t("CERRAR APOYO","CLOSE SUPPORT"):t(`APOYO ${level}`,`SUPPORT ${level}`)}</button>
    {support&&<aside className="parallel-support" style={level==="A0"||level==="A1"?{maxHeight:"calc(100dvh - 170px)",overflowY:"auto"}:undefined}><header><b>{t("APOYO OPCIONAL","OPTIONAL SUPPORT")}</b><button aria-label={t("Cerrar apoyo","Close support")} onClick={()=>setSupport(null)}>×</button></header><nav>{(Object.keys(languageSupport) as (keyof typeof languageSupport)[]).map(key=><button key={key} className={support===key?"active":""} onClick={()=>setSupport(key)}>{t(key,key==="HIPÓTESIS"?"IDEAS":key==="MATIZ"?"DETAIL":"CHANGE")}</button>)}</nav>{level==="A0"&&<OralBuilder key={supportIndex} support={agencySupport(supportIndex)}/>}<div>{languageSupport[support].map(item=><span key={item}>{item}</span>)}</div><footer><b>{t("RITMO · SOLO PROFESOR","PACE · TEACHER ONLY")}</b><button className={pace==="short"?"active":""} onClick={()=>setPace(pace==="short"?null:"short")}>{t("HABLA POCO","SHORT ANSWERS")}</button><button className={pace==="long"?"active":""} onClick={()=>setPace(pace==="long"?null:"long")}>{t("HABLA MUCHO","LONG ANSWERS")}</button>{pace&&<p>{level==="A0"?t("Lee una frase corta. El alumno repite y cambia una opción.","Read a short sentence. The student repeats it and changes one option."):pace==="short"?t("Ofrece dos opciones concretas, pide un ejemplo y modela una primera frase sin completar la idea por el alumno.","Offer two specific choices, ask for an example and model a first sentence while leaving the choice to the student."):t("Interrumpe con un costo nuevo, exige una síntesis de 45 segundos y pide que defienda la perspectiva contraria.","Add a new cost, ask for a 45-second summary and invite the learner to defend another point of view.")}</p>}</footer></aside>}

    <footer className="parallel-controls"><button disabled={stage===0} onClick={()=>go(stage-1)}>{t("← ANTERIOR","← PREVIOUS")}</button><span><b>{stages[stage][0]}</b>{stages[stage][1]} · {stage+1}/{stages.length}</span>{stage<stages.length-1?<button onClick={()=>go(stage+1)}>{t("SIGUIENTE →","NEXT →")}</button>:<Link href={level==="C1"?"/el-ministerio-de-las-versiones":`/el-ministerio-de-las-versiones?level=${level}`}>{level==="C1"?"SIGUIENTE CLASE · C2 →":t(`SIGUIENTE CLASE · ${level} →`,`NEXT CLASS · ${level} →`)}</Link>}</footer>
  </main>;
}

export default function AgenciaDeVidasParalelas(){
 const lesson=narratives.agency;
 return <ConversationFamily id={lesson.id} title={lesson.title} levels={narrativeLevels} defaultLevel="C1">{level=><AgenciaDeVidasParalelasNative key={level} level={level}/>}</ConversationFamily>;
}
