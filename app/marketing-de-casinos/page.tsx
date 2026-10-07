"use client";

import {useState} from "react";
import Link from "next/link";
import {
  ceoObjections, competitorMoves, crisisActions, dilemmas, finalChallenges,
  finalPriorities, glossary, language, offerTypes, promotion, segments, stages,
} from "./content";
import "./style.css";

const money=(value:number)=>new Intl.NumberFormat("es",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(value);
const totalMinutes=stages.reduce((sum,item)=>sum+item.minutes,0);

function QuestionPanel({items,index,onChange,label="EN LA MESA"}:{items:readonly string[];index:number;onChange:(index:number)=>void;label?:string}) {
  return <section className="casino-question" aria-live="polite">
    <div className="casino-kicker"><span>{label}</span><span>{index+1} / {items.length}</span></div>
    <h3>{items[index]}</h3>
    <div className="casino-question-actions">
      <button disabled={index===0} onClick={()=>onChange(index-1)}>← ANTERIOR</button>
      <button disabled={index===items.length-1} onClick={()=>onChange(index+1)}>SIGUIENTE PREGUNTA →</button>
    </div>
  </section>;
}

function TeacherNote({title,children}:{title:string;children:React.ReactNode}) {
  return <details className="casino-teacher"><summary>PROFESOR · {title} <span>ABRIR +</span></summary><div>{children}</div></details>;
}

function Metric({label,value,tone}:{label:string;value:string;tone?:"warning"|"positive"}) {
  return <div className={`casino-metric ${tone||""}`}><span>{label}</span><b>{value}</b></div>;
}

export default function CasinoMarketingLesson() {
  const [stage,setStage]=useState(0);
  const [question,setQuestion]=useState(0);
  const [languageTab,setLanguageTab]=useState<keyof typeof language>("DATOS");
  const [term,setTerm]=useState(0);
  const [ranking,setRanking]=useState<number[]>([]);
  const [allocations,setAllocations]=useState([0,0,0,0]);
  const [offers,setOffers]=useState([0,0,0,0]);
  const [complications,setComplications]=useState(false);
  const [occupancy,setOccupancy]=useState<94|65>(94);
  const [compOffer,setCompOffer]=useState<number|null>(null);
  const [incremental,setIncremental]=useState(false);
  const [objection,setObjection]=useState(0);
  const [threat,setThreat]=useState<number|null>(null);
  const [frequency,setFrequency]=useState(false);
  const [promo,setPromo]=useState<(number|null)[]>([null,null,null,null]);
  const [control,setControl]=useState(false);
  const [dilemma,setDilemma]=useState(0);
  const [dilemmaAnswers,setDilemmaAnswers]=useState<Record<number,number>>({});
  const [firstAction,setFirstAction]=useState<number|null>(null);
  const [crisisRevealed,setCrisisRevealed]=useState(false);
  const [priorities,setPriorities]=useState<number[]>([]);
  const [finalBudget,setFinalBudget]=useState([0,0,0,0,0,0]);
  const [finalChallenge,setFinalChallenge]=useState(0);

  const go=(next:number)=>{setStage(Math.max(0,Math.min(stages.length-1,next)));setQuestion(0);window.scrollTo({top:0,behavior:"auto"})};
  const rank=(index:number)=>setRanking(current=>current.includes(index)?current.filter(item=>item!==index):[...current,index]);
  const changeAllocation=(index:number,delta:number)=>setAllocations(current=>{
    const next=[...current];const value=next[index]+delta;
    if(value<0||current.reduce((a,b)=>a+b,0)+delta>50000)return current;
    next[index]=value;return next;
  });
  const choosePriority=(index:number)=>{
    setPriorities(current=>current.includes(index)?current.filter(value=>value!==index):current.length<3?[...current,index]:current);
    if(priorities.includes(index))setFinalBudget(current=>current.map((value,i)=>i===index?0:value));
  };
  const changeFinalBudget=(index:number,delta:number)=>setFinalBudget(current=>{
    const next=[...current];const value=next[index]+delta;
    if(value<0||current.reduce((a,b)=>a+b,0)+delta>85)return current;
    next[index]=value;return next;
  });
  const budgetUsed=allocations.reduce((a,b)=>a+b,0);
  const finalUsed=finalBudget.reduce((a,b)=>a+b,0);
  const minuteStart=stages.slice(0,stage).reduce((sum,item)=>sum+item.minutes,0);
  const current=stages[stage];
  const selectedDilemma=dilemmas[dilemma];
  const answer=dilemmaAnswers[dilemma];

  return <main className="casino-app">
    <header className="casino-top"><Link href="/" aria-label="Ir a la biblioteca"><img src="/brand/mascot/portrait.webp" alt=""/><strong>SPANISHCUE</strong></Link><span>B1 · CONVERSACIÓN · LAS VEGAS</span><Link href="/">BIBLIOTECA ↗</Link></header>
    <nav className="casino-route" aria-label="Momentos de la clase">{stages.map((item,index)=><button key={item.code} onClick={()=>go(index)} className={index===stage?"active":index<stage?"visited":""} aria-current={index===stage?"step":undefined} title={`${item.title} · ${item.minutes} min`}><b>{String(index+1).padStart(2,"0")}</b><span>{item.title}</span></button>)}</nav>
    <aside className="casino-phrasebar" aria-label="Frases de apoyo B1"><span>APOYO B1</span><div className="casino-phrase-tabs">{(Object.keys(language) as (keyof typeof language)[]).map(key=><button key={key} className={languageTab===key?"active":""} onClick={()=>setLanguageTab(key)} aria-pressed={languageTab===key}>{key}</button>)}</div><p>{language[languageTab].join("  ·  ")}</p></aside>

    <div className="casino-shell">
      <div className="casino-heading"><div><span className="casino-overline">{current.code} <i/> MIN {minuteStart+1}–{minuteStart+current.minutes} DE {totalMinutes}</span><h1>{stage===0?<>Marketing de casinos:<br/><em>decisiones que cuestan millones</em></>:current.title}</h1></div><span className="casino-clock">{current.minutes}<small>MIN</small></span></div>

      {stage===0&&<div className="casino-stage casino-opening">
        <div className="casino-lead"><span>EL CEO LLAMA · LUNES 8:05</span><p>“¿Fue un buen fin de semana? Tengo tres minutos.”</p><small>Da primero una conclusión provisional. Después pide un dato que podría cambiarla.</small></div>
        <div className="casino-metrics six"><Metric label="INGRESOS DEL CASINO" value="+7 %" tone="positive"/><Metric label="OCUPACIÓN HOTELERA" value="94 %"/><Metric label="RESTAURANTES Y BEBIDAS" value="+11 %" tone="positive"/><Metric label="ALTAS DE FIDELIDAD" value="+18 %" tone="positive"/><Metric label="REGRESO PREMIUM" value="−9 %" tone="warning"/><Metric label="COSTO PROMOCIONAL" value="+23 %" tone="warning"/></div>
        <QuestionPanel index={question} onChange={setQuestion} items={["¿Qué número te preocupa más y por qué, aunque los ingresos del casino subieron un 7 %?","¿Qué dato pedirías antes de decirle al CEO que este fin de semana fue exitoso?","¿Cómo explicarías que ingresó más dinero, pero regresaron menos clientes premium?","Si hoy solo puedes investigar un problema, ¿cuál investigas primero?"]}/>
        <TeacherNote title="repregunta"><p>“El director de Operaciones solo ve el 94 % de ocupación. ¿Qué le dirías sobre el costo de las promociones y las visitas premium?”</p></TeacherNote>
      </div>}

      {stage===1&&<div className="casino-stage casino-vocabulary">
        <div className="casino-intro"><p>El profesor elige cuatro conceptos de esta mesa. Para cada uno, toma una decisión; no recites una definición. Los demás quedan como apoyo durante la clase.</p></div>
        <div className="casino-term-list">{glossary.map((entry,index)=><button key={entry.term} className={term===index?"active":""} onClick={()=>setTerm(index)} aria-pressed={term===index}>{entry.term}</button>)}</div>
        <article className="casino-term-card"><span>CONCEPTO {String(term+1).padStart(2,"0")} / {glossary.length}</span><h2>{glossary[term].term}</h2><p>{glossary[term].plain}</p><blockquote>{glossary[term].decision}</blockquote></article>
        <TeacherNote title="puente al casino"><p>Comps = beneficios ofrecidos a un cliente. Los niveles de fidelidad agrupan miembros. Theo y ADT estiman el valor del juego; no sustituyen el gasto en hotel, comida y ocio. Pide una frase simple: “Este cliente viene más, pero gasta menos por visita”.</p></TeacherNote>
      </div>}

      {stage===2&&<div className="casino-stage casino-segments">
        <div className="casino-intro"><p>Hay {money(50000)} para promociones. Haz clic en los cuatro clientes para ordenarlos; el número aparece en cada ficha. Decide el incentivo y asigna dinero en tramos de {money(5000)}. Puedes dejar presupuesto sin usar.</p></div>
        <div className="casino-budget"><span>PRESUPUESTO DISPONIBLE</span><div className="casino-budget-track"><i style={{width:`${budgetUsed/500}%`}}/></div><b>{money(50000-budgetUsed)}</b></div>
        <div className="casino-segment-grid">{segments.map((item,index)=><article className="casino-segment" key={item.name}>
          <button className={`casino-segment-head ${ranking.includes(index)?"selected":""}`} onClick={()=>rank(index)} aria-pressed={ranking.includes(index)}><span>{ranking.includes(index)?`PRIORIDAD ${ranking.indexOf(index)+1}`:"PONER EN EL RANKING"}</span><h2>{item.name}</h2></button>
          <div className="casino-segment-facts"><span>{item.visits}</span><span>{item.gaming}</span><span>{item.stay}</span></div><p>{item.extra}</p><small>{item.signal}</small>
          {complications&&<div className="casino-reveal">NUEVO DATO · {item.complication}</div>}
          <label>OFERTA<select value={offers[index]} onChange={event=>setOffers(current=>current.map((value,i)=>i===index?Number(event.target.value):value))}>{offerTypes.map((offer,i)=><option value={i} key={offer}>{offer}</option>)}</select></label>
          <div className="casino-allocation"><span>INVERSIÓN · {money(allocations[index])}</span><div><button onClick={()=>changeAllocation(index,-5000)} disabled={allocations[index]===0} aria-label={`Quitar 5000 dólares a ${item.name}`}>−</button><button onClick={()=>changeAllocation(index,5000)} disabled={budgetUsed>=50000||offers[index]===0} aria-label={`Agregar 5000 dólares a ${item.name}`}>+</button></div></div>
          {offers[index]===0&&<small className="casino-offer-hint">Elige una oferta antes de asignar presupuesto.</small>}
        </article>)}</div>
        <div className="casino-action-row"><button className="casino-accent" onClick={()=>setComplications(value=>!value)}>{complications?"OCULTAR GIROS":"PROFESOR · REVELAR CUATRO GIROS"}</button><p>Defiende ante el CEO quién recibe la oferta cara, quién no la recibe y qué cambió con los nuevos datos.</p></div>
        <QuestionPanel index={question} onChange={setQuestion} items={["Con 50.000 dólares, ¿por qué priorizaste a ese cliente y qué visita adicional esperas conseguir?","¿Quién no debe recibir una suite gratis, aunque tenga un gasto alto?","El cliente C trae amigos. ¿Cambia su valor, aunque gaste poco por visita?","El cliente D costó mucho dinero adquirirlo. ¿Cuál sería tu oferta para buscar una segunda visita sin regalar demasiado?"]}/>
      </div>}

      {stage===3&&<div className="casino-stage casino-comp">
        <div className="casino-intro"><p>Marketing propone una suite gratis valorada en {money(600)} y {money(250)} en restaurantes. El cliente suele venir de todos modos, pero tiene un alto valor de juego. Finanzas dice que el comp es demasiado generoso.</p></div>
        <div className="casino-switch" role="group" aria-label="Ocupación del hotel"><button className={occupancy===94?"active":""} onClick={()=>setOccupancy(94)} aria-pressed={occupancy===94}>FIN DE SEMANA · 94 %</button><button className={occupancy===65?"active":""} onClick={()=>setOccupancy(65)} aria-pressed={occupancy===65}>OTRA FECHA · 65 %</button></div>
        <div className="casino-comp-layout"><div className="casino-comp-display"><span>SUITE + RESTAURANTE</span><b>{money(850)}</b><p>{occupancy===94?"Quedan pocas habitaciones: la suite podría desplazar una reserva pagada.":"Quedan habitaciones libres: el costo de oportunidad puede ser menor."}</p><small>Valor indicado de la oferta, no beneficio esperado ni costo real.</small></div><div className="casino-choice-list"><span>ELIGE TU PROPUESTA</span>{["Suite gratis + crédito de restaurante","Solo restaurante o acceso exclusivo","Oferta limitada a una fecha de baja ocupación","Ninguna oferta por ahora"].map((item,i)=><button key={item} className={compOffer===i?"active":""} aria-pressed={compOffer===i} onClick={()=>setCompOffer(i)}>{item}</button>)}</div></div>
        <QuestionPanel index={question} onChange={setQuestion} items={["Con 94 % de ocupación, ¿por qué regalarías o no la suite a alguien que normalmente viene igual?","¿Qué dato te falta: gasto futuro, margen, fechas alternativas o probabilidad de venir sin oferta? Elige uno.","¿Cuándo deja de ser una inversión y se convierte en un descuento innecesario?","Con solo 65 % de ocupación, ¿cambias tu decisión y cómo se lo explicas a Finanzas?"]}/>
      </div>}

      {stage===4&&<div className="casino-stage casino-crm">
        <div className="casino-intro"><p>Una campaña de base de datos termina. Da un veredicto provisional en 30 segundos. Después el profesor revela un dato que puede cambiarlo.</p></div>
        <div className="casino-funnel"><Metric label="CONTACTADOS" value="50.000"/><Metric label="ABRIERON" value="8.000"/><Metric label="HICIERON CLIC" value="2.200"/><Metric label="CANJEARON" value="900"/><Metric label="VISITARON" value="620"/></div>
        <div className="casino-crm-ledger"><div><span>INGRESO ADICIONAL ESTIMADO / VISITANTE</span><b>{money(310)}</b></div><div><span>COSTO DE CAMPAÑA</span><b>{money(140000)}</b></div><p>620 × {money(310)} = {money(192200)} en ingresos estimados. Esto todavía no demuestra beneficio ni retorno: falta el margen y una comparación con clientes sin oferta.</p></div>
        <button className="casino-accent" onClick={()=>setIncremental(value=>!value)}>{incremental?"OCULTAR DATO NUEVO":"PROFESOR · REVELAR DATO NUEVO"}</button>
        {incremental&&<div className="casino-shock"><b>40 % DE LOS 620 HABRÍA VENIDO DE TODOS MODOS</b><p>La estimación de {money(310)} por visitante no separó bien ese grupo. Aproximadamente 372 visitas podrían ser nuevas gracias a la oferta; la contribución real todavía depende del margen. ¿Mantienes tu veredicto?</p></div>}
        <QuestionPanel index={question} onChange={setQuestion} items={["¿Dirías que esta campaña funcionó? ¿Qué dato impide hablar de beneficio?","900 canjes y 620 visitas: ¿cómo investigarías a las 280 personas que canjearon pero no vinieron?","¿Qué cambiarías primero para la próxima campaña: mensaje, oferta, audiencia o canal? ¿A quién excluirías?","Después del dato del 40 %, ¿enviarías la misma campaña otra vez? Explica qué comportamiento fue realmente nuevo."]}/>
        <TeacherNote title="incrementalidad sin fórmulas"><p>Contrasta “vino con una oferta” y “vino gracias a la oferta”. Un grupo de control comparable, sin la promoción, ayuda a estimar la diferencia. No llames ROI a ingresos menos costo: falta el margen de contribución.</p></TeacherNote>
      </div>}

      {stage===5&&<div className="casino-stage casino-ceo"><div className="casino-ceo-statement"><span>CEO · PROPUESTA</span><blockquote>“Quiero enviar nuestra mejor oferta a todos los miembros de la base. Si la oferta es buena, vendrá más gente.”</blockquote></div><p className="casino-directive">Responde con respeto, nombra un riesgo y propone un segmento específico. El profesor presiona con una objeción por vez.</p><div className="casino-objections"><div className="casino-kicker"><span>EL CEO RESPONDE</span><span>{objection+1} / {ceoObjections.length}</span></div><h2>“{ceoObjections[objection]}”</h2><div>{ceoObjections.map((_,index)=><button aria-label={`Mostrar objeción ${index+1}`} aria-pressed={index===objection} className={index===objection?"active":""} onClick={()=>setObjection(index)} key={index}>{index+1}</button>)}</div></div><div className="casino-line"><b>ABRE ASÍ</b><p>“Entiendo la lógica, pero…” · “No todos los clientes tienen el mismo valor.” · “Yo segmentaría la base según…” · “Antes de aprobarlo, comprobaría…”</p></div></div>}

      {stage===6&&<div className="casino-stage casino-competition"><div className="casino-intro"><p>Un resort rival quiere atraer a tus huéspedes este viernes. Los márgenes están bajo presión: no puedes copiar todas sus acciones.</p></div><div className="casino-rival-grid">{competitorMoves.map((item,index)=><button key={item.name} className={threat===index?"active":""} onClick={()=>setThreat(index)} aria-pressed={threat===index}><span>0{index+1} · {threat===index?"AMENAZA PRINCIPAL":"MOVIMIENTO RIVAL"}</span><h2>{item.name}</h2><p>{item.detail}</p></button>)}</div><QuestionPanel index={question} onChange={setQuestion} items={["¿Cuál de las cinco acciones amenaza más a tu casino y a qué segmento exactamente?","¿Cuál NO copiarías con márgenes bajo presión? Defiende qué perderías si la copias.","¿Responderías hoy o esperarías los datos del fin de semana? ¿Qué dato mínimo necesitas?","¿Cómo evitas una guerra de descuentos y qué experiencia ofrecerías en lugar de ser simplemente más barato?"]}/></div>}

      {stage===7&&<div className="casino-stage casino-value"><div className="casino-intro"><p>Dos departamentos piden la mejor oferta para clientes diferentes. Los importes son ingresos de una visita, no beneficio.</p></div><div className="casino-value-grid"><article><span>CLIENTE X · JUEGO</span><h2>{money(4550)}</h2><dl><div><dt>Casino</dt><dd>{money(4000)}</dd></div><div><dt>Hotel</dt><dd>{money(400)}</dd></div><div><dt>Restaurantes</dt><dd>{money(150)}</dd></div></dl></article><article><span>CLIENTE Y · RESORT</span><h2>{money(4400)}</h2><dl><div><dt>Casino</dt><dd>{money(1700)}</dd></div><div><dt>Hotel</dt><dd>{money(1200)}</dd></div><div><dt>Restaurantes</dt><dd>{money(900)}</dd></div><div><dt>Shows y ocio</dt><dd>{money(600)}</dd></div></dl></article></div><button className="casino-accent" onClick={()=>setFrequency(value=>!value)}>{frequency?"VOLVER A UNA VISITA":"REVELAR FRECUENCIA ANUAL"}</button>{frequency&&<div className="casino-shock"><b>X VIAJA UNA VEZ; Y VIAJA CUATRO VECES AL AÑO</b><p>Si esos ingresos por visita se repiten, X suma {money(4550)} y Y {money(17600)} al año. Faltan márgenes, costos y cambios de gasto antes de decidir el valor real.</p></div>}<QuestionPanel index={question} onChange={setQuestion} items={["Para una sola visita, ¿quién parece más valioso y qué departamento elegiría al cliente X?","¿Por qué Marketing podría defender al cliente Y aunque gaste menos en el casino?","Cuando Y vuelve cuatro veces y X solo una, ¿cambia tu oferta? Usa el valor total y menciona un dato que falta."]}/></div>}

      {stage===8&&<div className="casino-stage casino-lab"><div className="casino-intro"><p><b>MISIÓN:</b> conseguir más visitas rentables de domingo a jueves sin descontar fuertemente viernes y sábado. Construye una oferta; el alumno debe justificar cada elección en voz alta.</p></div><div className="casino-lab-grid">{([promotion.targets,promotion.incentives,promotion.channels,promotion.timings] as const).map((options,group)=><div className="casino-lab-column" key={group}><span>{["01 · SEGMENTO","02 · INCENTIVO","03 · CANAL","04 · MOMENTO"][group]}</span>{options.map((option,index)=><button key={option} className={promo[group]===index?"active":""} aria-pressed={promo[group]===index} onClick={()=>setPromo(current=>current.map((value,i)=>i===group?index:value))}>{option}</button>)}</div>)}</div><div className="casino-control"><button onClick={()=>setControl(value=>!value)} aria-pressed={control} className={control?"active":""}>{control?"✓":"○"} GRUPO DE CONTROL</button><p>{control?"Un grupo comparable no recibe la oferta; compara las visitas y el beneficio de ambos grupos.":"Activa un grupo comparable sin oferta para comprobar qué visitas son realmente nuevas."}</p></div><div className="casino-proposal"><span>TU PROPUESTA</span><p>{promo.every(value=>value!==null)?`Ofrecer ${promotion.incentives[promo[1]!]!.toLowerCase()} a ${promotion.targets[promo[0]!]!.toLowerCase()} por ${promotion.channels[promo[2]!]!.toLowerCase()}, ${promotion.timings[promo[3]!]!.toLowerCase()}.`:"Elige un segmento, un incentivo, un canal y un momento."}</p></div><QuestionPanel index={question} onChange={setQuestion} items={["¿Por qué ese segmento viajaría de domingo a jueves? ¿Qué comportamiento preciso quieres cambiar?","¿Qué puede salir mal si los clientes usan la oferta un sábado o si iban a venir igualmente?","¿Cómo medirías el resultado frente al grupo de control? ¿Qué dato pedirías además de las visitas?","Si suben las visitas, pero baja el beneficio, ¿qué cambiarías antes de repetir la campaña?"]}/></div>}

      {stage===9&&<div className="casino-stage casino-dilemmas"><div className="casino-intro"><p>Ronda rápida: elige una opción y defiéndela con una condición concreta. El profesor lee la objeción. Haz tres rondas en cuatro minutos; las ocho quedan para extender la conversación.</p></div><div className="casino-dilemma-picker">{dilemmas.map((_,index)=><button key={index} onClick={()=>setDilemma(index)} className={dilemma===index?"active":""} aria-label={`Dilema ${index+1}`}>{String(index+1).padStart(2,"0")}{dilemmaAnswers[index]!==undefined?" ✓":""}</button>)}</div><div className="casino-dilemma"><span>DILEMA {dilemma+1} / 8</span><div>{selectedDilemma.choices.map((choice,index)=><button key={choice} onClick={()=>setDilemmaAnswers(current=>({...current,[dilemma]:index}))} className={answer===index?"active":""} aria-pressed={answer===index}>{choice}</button>)}</div>{answer!==undefined&&<blockquote>CEO: “{selectedDilemma.push[answer]}”<small>Defiende tu elección o cambia de posición. ¿Qué dato decidiría?</small></blockquote>}</div></div>}

      {stage===10&&<div className="casino-stage casino-incident"><div className="casino-incident-banner"><span>INCIDENTE · 20.000 CONTACTOS INCORRECTOS</span><h2>La promoción salió a un grupo que debía quedar excluido.</h2><p>Algunos clientes ya la canjearon. Participan Marketing, CRM, Operaciones, Finanzas, Atención al Cliente, Legal y el CEO.</p></div><span className="casino-small-heading">PRIMEROS 30 MINUTOS · ¿QUÉ HACES PRIMERO?</span><div className="casino-action-grid">{crisisActions.map((action,index)=><button className={firstAction===index?"active":""} aria-pressed={firstAction===index} onClick={()=>setFirstAction(index)} key={action}><b>0{index+1}</b>{action}</button>)}</div><button className="casino-accent" onClick={()=>setCrisisRevealed(value=>!value)}>{crisisRevealed?"OCULTAR ESTADO":"PROFESOR · REVELAR NUEVO ESTADO"}</button>{crisisRevealed&&<div className="casino-shock"><b>YA HAY 340 CANJES CONFIRMADOS</b><p>Atención al Cliente recibe llamadas. Legal pide revisar las condiciones antes de cancelar nada. ¿Respetas los canjes? ¿Qué le dices al CEO ahora?</p></div>}<QuestionPanel index={question} onChange={setQuestion} items={["¿Pausas nuevos envíos o cancelas también ofertas ya canjeadas? Explica la diferencia.","¿Quién debe saberlo primero y qué dato necesita cada equipo?","¿Cómo evitarías una crisis pública sin ocultar el error a clientes afectados?","¿Qué le dices al CEO en 30 segundos y qué control del proceso cambiarías después?"]}/></div>}

      {stage===11&&<div className="casino-stage casino-final"><div className="casino-final-brief"><div><span>PRÓXIMO TRIMESTRE</span><b>−15 %</b><small>PRESUPUESTO DE MARKETING</small></div><ul><li>Visitas premium: −8 %</li><li>Adquisición de jóvenes: +21 %</li><li>Ingresos de juego: estables</li><li>Ingresos del hotel: suben</li><li>Fidelidad: baja</li><li>Competidores: más promociones</li></ul></div><div className="casino-intro"><p>Elige <b>solo tres prioridades</b>. Distribuye como máximo 85 puntos del presupuesto anterior de 100. Cada tramo equivale a 5 puntos porcentuales del presupuesto original; puedes reservar una parte.</p></div><div className="casino-budget"><span>RESTAN DE 85</span><div className="casino-budget-track"><i style={{width:`${finalUsed/85*100}%`}}/></div><b>{85-finalUsed} PUNTOS</b></div><div className="casino-final-grid">{finalPriorities.map((item,index)=><article key={item.name} className={priorities.includes(index)?"selected":""}><button onClick={()=>choosePriority(index)} aria-pressed={priorities.includes(index)} disabled={!priorities.includes(index)&&priorities.length===3}><span>{priorities.includes(index)?`PRIORIDAD ${priorities.indexOf(index)+1}`:"ELEGIR PRIORIDAD"}</span><h3>{item.name}</h3><p>{item.detail}</p></button>{priorities.includes(index)&&<div className="casino-allocation"><span>{finalBudget[index]} / 85</span><div><button disabled={finalBudget[index]===0} onClick={()=>changeFinalBudget(index,-5)} aria-label={`Quitar 5 puntos a ${item.name}`}>−</button><button disabled={finalUsed>=85} onClick={()=>changeFinalBudget(index,5)} aria-label={`Agregar 5 puntos a ${item.name}`}>+</button></div></div>}</article>)}</div><div className="casino-ceo-challenge"><div className="casino-kicker"><span>PROFESOR · CEO</span><span>{finalChallenge+1} / {finalChallenges.length}</span></div><h2>“{finalChallenges[finalChallenge]}”</h2><div><button disabled={finalChallenge===0} onClick={()=>setFinalChallenge(value=>value-1)}>←</button><button disabled={finalChallenge===finalChallenges.length-1} onClick={()=>setFinalChallenge(value=>value+1)}>OTRA OBJECIÓN →</button></div></div><div className="casino-recommendation"><span>CIERRE · 60 SEGUNDOS</span><h2>Tu recomendación al CEO</h2><p>“Los datos muestran que… Mi recomendación sería priorizar… Pondría… puntos en… En lugar de…, dejaría de… Esperaría… Si no funciona, entonces…”</p><small>Profesor: exige tres prioridades, un recorte concreto, una métrica y una fecha para revisar la decisión.</small></div></div>}
    </div>
    <footer className="casino-footer"><button disabled={stage===0} onClick={()=>go(stage-1)}>← ANTERIOR</button><span>{stage+1} / {stages.length} · {minuteStart+current.minutes} / {totalMinutes} MIN</span>{stage<stages.length-1?<button className="casino-next" onClick={()=>go(stage+1)}>SIGUIENTE →</button>:<Link href="/">VOLVER A LA BIBLIOTECA →</Link>}</footer>
  </main>;
}
