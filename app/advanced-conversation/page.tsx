"use client";

import { useState } from "react";
import "./style.css";

type Topic={emoji:string;title:string;label:string;questions:string[]};

const topics:Topic[]=[
  {emoji:"🧠",title:"Personalidad",label:"Personalidad y psicología",questions:[
    "¿Hasta qué punto nuestra personalidad es realmente “nuestra” y hasta qué punto es una colección de respuestas que aprendimos para adaptarnos a otras personas?",
    "¿Hay rasgos de personalidad que admiramos precisamente porque no tenemos que convivir con ellos todos los días?",
    "¿Qué versión de uno mismo suele ser más auténtica: la que aparece cuando estamos solos o la que surge cuando estamos con las personas que más queremos?",
    "¿Puede una persona conocerse muy bien y, aun así, interpretar completamente mal las razones por las que hace ciertas cosas?",
    "¿En qué momento intentar “ser fiel a uno mismo” puede convertirse en una excusa para no cambiar?"
  ]},
  {emoji:"❤️",title:"Relaciones",label:"Amor, citas y relaciones",questions:[
    "¿Qué destruye antes una relación: un conflicto grave o una acumulación de pequeñas cosas que nunca parecen suficientemente importantes como para discutirlas?",
    "¿Hasta qué punto tenemos derecho a esperar que alguien cambie por nosotros cuando ese cambio también podría beneficiarlo personalmente?",
    "¿Es posible amar profundamente a una persona y, al mismo tiempo, reconocer que una vida con ella probablemente no funcionaría?",
    "¿Qué pesa más en una relación larga: sentir que el otro nos comprende o sentir que, aunque no nos comprenda del todo, intenta hacerlo?",
    "Cuando perdonamos a alguien, ¿deberíamos aspirar también a recuperar la confianza anterior o aceptar que algunas relaciones continúan de una manera distinta?"
  ]},
  {emoji:"💰",title:"Dinero",label:"Dinero y estilo de vida",questions:[
    "¿En qué momento la búsqueda de seguridad económica empieza paradójicamente a quitarnos la libertad que queríamos conseguir con ella?",
    "¿Por qué solemos juzgar de manera diferente a alguien que desea muchísimo dinero y a alguien que desea muchísimo prestigio, aunque ambos busquen reconocimiento?",
    "Si una sociedad garantiza que nadie viva en la miseria, ¿sigue existiendo una obligación moral de reducir grandes desigualdades económicas?",
    "¿Es posible disfrutar plenamente de un lujo sabiendo que su precio representa meses de trabajo para otra persona o esa comparación es irrelevante?",
    "¿Qué revela más sobre una persona: aquello en lo que está dispuesta a gastar mucho dinero o aquello por lo que se niega absolutamente a pagar?"
  ]},
  {emoji:"✈️",title:"Viajes",label:"Viajes y culturas",questions:[
    "¿En qué momento viajar deja de ampliar nuestra visión del mundo y empieza simplemente a confirmar la imagen que ya teníamos de nosotros mismos?",
    "Cuando visitamos otro país, ¿hasta qué punto tenemos la obligación de adaptarnos a valores locales con los que estamos profundamente en desacuerdo?",
    "¿Es posible conocer realmente una cultura como visitante o el turismo, incluso cuando es respetuoso, siempre nos deja observándola desde afuera?",
    "¿Qué cambia más nuestra percepción de un lugar: lo que encontramos allí o la etapa de nuestra vida en la que llegamos?",
    "Si pudieras volver a un lugar que significó muchísimo para vos pero supieras que probablemente destruiría el recuerdo idealizado que tenés, ¿volverías?"
  ]},
  {emoji:"🌍",title:"Sociedad",label:"Sociedad y valores",questions:[
    "¿Qué comportamiento aceptamos como “normal” únicamente porque demasiada gente lo hace como para cuestionarlo seriamente?",
    "¿Cuándo una sociedad debe proteger una tradición y cuándo debería aceptar que conservarla tiene un costo demasiado alto?",
    "¿Hasta qué punto una persona puede considerarse moralmente independiente si casi todas sus intuiciones morales fueron aprendidas dentro de una cultura concreta?",
    "¿Las sociedades progresan porque cambian sus valores o primero cambian sus circunstancias y después construyen valores que justifican esa nueva realidad?",
    "¿Existe algún punto en el que tolerar todas las formas de pensar termina debilitando precisamente la sociedad tolerante que queremos proteger?"
  ]},
  {emoji:"📱",title:"Tecnología",label:"Tecnología y vida digital",questions:[
    "Si pudieras eliminar una aplicación de todos los teléfonos del mundo, ¿cuál sería?",
    "¿Qué tecnología te ha hecho la vida claramente mejor?",
    "¿En qué momento del día te cuesta más dejar el teléfono?",
    "¿Crees que la inteligencia artificial nos hará más creativos o más perezosos?",
    "¿Qué información personal nunca compartirías en internet?"
  ]},
  {emoji:"🎬",title:"Cultura pop",label:"Cultura popular",questions:[
    "¿Qué película o serie (pop style) podrías ver muchas veces sin cansarte?",
    "¿Qué celebridad popular te parece interesante por razones que no tienen que ver con su talento?",
    "¿Qué canción y/o género populares te lleva inmediatamente a una época concreta de tu vida?",
    "¿Qué tendencia cultural popular actual no entiendes del todo?",
    "¿Qué personaje ficticio famoso sería un amigo tuyo en la vida real y por qué?"
  ]},
  {emoji:"🍕",title:"Vida diaria",label:"Comida y vida diaria",questions:[
    "¿Qué comida sencilla te hace sentir inmediatamente en casa?",
    "¿Qué combinación de comida te gusta aunque otras personas la encuentren extraña?",
    "¿Por qué pagarías mucho dinero en un restaurante y por qué no?",
    "¿Qué plato aprendiste a apreciar solo cuando creciste?",
    "¿Qué costumbre de comida de otro país te gustaría adoptar?"
  ]},
  {emoji:"💼",title:"Trabajo",label:"Trabajo y éxito",questions:[
    "¿Qué trabajo nunca aceptarías aunque el salario fuera excelente?",
    "¿Qué cualidad tiene un jefe realmente bueno?",
    "¿Qué parte de tu trabajo o estudios te da más energía?",
    "¿Qué consejo profesional te habría ayudado mucho hace unos años?",
    "¿Para ti, cómo se reconoce el éxito sin hablar de dinero?"
  ]},
  {emoji:"🔥",title:"Debate",label:"Debate y opiniones",questions:[
    "¿Es mejor ser completamente sincero o proteger los sentimientos de una persona?",
    "¿El dinero realmente compra felicidad o solo compra tranquilidad?",
    "¿Deberíamos separar al artista de su obra?",
    "¿Las redes sociales han mejorado o empeorado nuestras amistades?",
    "¿Es más importante ser feliz o ser una persona útil para los demás?"
  ]},
  {emoji:"🤯",title:"¿Qué harías?",label:"Situaciones hipotéticas",questions:[
    "Si recibieras un millón de dólares pero tuvieras que gastarlo en 24 horas, ¿qué harías?",
    "Si pudieras leer la mente de una persona durante diez minutos, ¿a quién elegirías?",
    "Si nadie pudiera juzgarte durante un año, ¿qué cambiarías de tu vida?",
    "Si pudieras repetir un día de tu vida, ¿cuál sería y qué observarías mejor?",
    "Si tuvieras que vivir sin internet durante seis meses, ¿qué sería lo más difícil?"
  ]},
  {emoji:"⚡",title:"Esto o aquello",label:"Decisiones difíciles",questions:[
    "¿Una vida corta llena de aventuras o una vida larga y tranquila?",
    "¿Saber toda la verdad sobre tu futuro o no saber nada?",
    "¿Tener una casa increíble en un lugar aburrido o una casa pequeña en una ciudad fascinante?",
    "¿Ser famoso/a por un talento extraño o ser muy rico/a pero completamente anónimo/a?",
    "¿Un viaje perfecto planificado al detalle o una aventura sin reservas?"
  ]},
  {emoji:"🕰️",title:"Experiencias",label:"Experiencias y memoria",questions:[
    "¿Qué decisión cambió tu vida más de lo que esperabas?",
    "¿Cuándo fue la última vez que cambiaste completamente de opinión sobre una persona?",
    "¿Qué momento vergonzoso ahora te parece gracioso?",
    "¿Qué cosa de tu infancia te gustaría recuperar por un día?",
    "¿Qué experiencia difícil te enseñó algo que todavía recuerdas?"
  ]},
  {emoji:"🔮",title:"Futuro",label:"El futuro",questions:[
    "¿Cómo imaginas tu rutina ideal dentro de diez años?",
    "¿Qué habilidad te gustaría aprender antes de que termine el próximo año?",
    "¿Qué trabajo crees que desaparecerá o cambiará mucho en el futuro?",
    "¿Cómo cambiarán las relaciones personales con la tecnología?",
    "¿Qué promesa te gustaría hacerte a ti mismo/a para el futuro?"
  ]},
  {emoji:"🧩",title:"Aleatorias",label:"Preguntas aleatorias",questions:[
    "¿Qué objeto de tu casa salvarías primero si tuvieras que salir corriendo?",
    "¿Qué talento inútil te gustaría tener solo para impresionar a la gente?",
    "¿Qué cosa pequeña puede arruinarte el día de manera exagerada?",
    "¿Qué pregunta te gustaría que la gente te hiciera más a menudo?",
    "¿Qué regla absurda crearías si fueras responsable del mundo durante una semana?"
  ]},
  {emoji:"↗",title:"Cambio",label:"Cambio personal",questions:[
    "¿Qué cambio de tu vida te asustó al principio pero terminó siendo positivo?",
    "¿Cuándo sabes que es el momento de dejar algo atrás?",
    "¿Qué decisión importante tomarías de otra manera si pudieras volver atrás?",
    "¿Qué costumbre te gustaría abandonar y qué la hace difícil de cambiar?",
    "¿Qué te gustaría que fuera diferente en tu vida dentro de un año?"
  ]}
];

export default function AdvancedConversation(){
  const [active,setActive]=useState(0);
  const [selected,setSelected]=useState<number|null>(null);
  const topic=topics[active];
  const chooseTopic=(index:number)=>{setActive(index);setSelected(null);window.scrollTo({top:0,behavior:"smooth"})};
  return <main className="advanced-shell">
    <div className="advanced-frame">
      <header className="advanced-header"><a href="/" className="advanced-brand"><img src="/chespanish-guide-avatar.png" alt=""/><span><b>CHESPANISH</b><small>C1 · CONVERSACIÓN AVANZADA</small></span></a><a href="/" className="back-library">← Biblioteca</a></header>
      <section className="advanced-intro"><div><i/><p>CONVERSACIÓN · NIVEL C1</p><h1>Preguntas que dan ganas de hablar.</h1></div><p>Elegí una categoría. Elegí una pregunta. Respondé con libertad. Seguí la conversación.</p></section>
      <nav className="advanced-nav" aria-label="Categorías de conversación">{topics.map((item,index)=><button key={item.title} className={index===active?"active":""} aria-pressed={index===active} onClick={()=>chooseTopic(index)}>{item.emoji} {item.title}</button>)}</nav>
      <section className="advanced-panel" aria-label={topic.label} key={topic.title}>
        <div className="panel-title"><div><span>{topic.emoji}</span><h2>{topic.title}</h2></div><b>{String(active+1).padStart(2,"0")} / {topics.length}</b></div>
        <div className="advanced-questions">{topic.questions.map((question,index)=><button key={question} className={`${index===0?"featured ":""}${selected===index?"selected":""}`} aria-pressed={selected===index} onClick={()=>setSelected(selected===index?null:index)}><span>{String(index+1).padStart(2,"0")}</span><p>{question}</p>{selected===index&&<i>HABLEMOS DE ESTA →</i>}</button>)}</div>
      </section>
    </div>
  </main>;
}
