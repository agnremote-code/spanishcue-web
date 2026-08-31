"use client";

import Link from "next/link";
import { type CSSProperties, useMemo, useState } from "react";
import "./style.css";

type Room = {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  thesis: string;
  questions: string[];
  moves: string[];
  lexicon: string[];
  x: number;
  y: number;
};

const rooms: Room[] = [
  {
    id: "claustro", number: "01", name: "El claustro", subtitle: "El silencio que organiza",
    thesis: "No todo silencio es ausencia: algunos protegen, otros disciplinan y otros hacen que una comunidad complete lo que nadie se atreve a decir.",
    questions: [
      "¿Qué clase de silencio protege la intimidad del otro y cuál lo abandona a la obligación de adivinar?",
      "¿En qué momento la coherencia deja de ser una virtud y se convierte en una forma sofisticada de vanidad moral?",
      "¿Tiene una figura pública el derecho de no formar una opinión sobre cada crisis o su silencio ya constituye una intervención?",
      "¿Puede existir una comunidad verdaderamente íntima si cada miembro administra estratégicamente su vulnerabilidad?",
      "¿Qué conversaciones se empobrecen precisamente porque insistimos en llegar a una conclusión?",
      "¿Cuándo retirarse de una discusión es prudencia y cuándo es una manera elegante de conservar poder sin rendir cuentas?"
    ],
    moves: ["Defendé el silencio que inicialmente considerarías más sospechoso.", "Construí un caso en el que hablar con absoluta honestidad sea moralmente irresponsable."],
    lexicon: ["reserva", "aquiescencia", "opacidad"], x: 50, y: 54
  },
  {
    id: "scriptorium", number: "02", name: "El scriptorium", subtitle: "Quién posee una interpretación",
    thesis: "Copiar, traducir y comentar nunca son actos neutrales: cada versión decide qué sobrevive y qué queda convertido en nota al pie.",
    questions: [
      "Si una traducción vuelve más sólido un argumento defectuoso, ¿ha sido fiel al autor o lo ha traicionado con demasiada generosidad?",
      "¿En qué punto el contexto histórico deja de explicar una idea y comienza a funcionar como una coartada para no juzgarla?",
      "¿Puede una doctrina seguir siendo la misma si debe reemplazar por completo el vocabulario con el que fue formulada?",
      "¿A quién pertenece un concepto: a quien lo formuló, a quienes lo desarrollaron o a quienes sufren sus consecuencias?",
      "Ante un texto ambiguo, ¿deberíamos privilegiar la interpretación más caritativa o la que mejor explica sus efectos históricos?",
      "¿La nota al pie es el lugar donde un autor practica la honestidad intelectual o donde esconde aquello que debilitaría su tesis principal?"
    ],
    moves: ["Reformulá la pregunta desde la posición de un traductor y después desde la de una comunidad afectada.", "Distinguí intención, significado y efecto sin permitir que uno cancele a los otros dos."],
    lexicon: ["exégesis", "anacronismo", "indeterminación"], x: 29, y: 55
  },
  {
    id: "biblioteca", number: "03", name: "La biblioteca", subtitle: "Ideas que sobreviven por accidente",
    thesis: "El canon no conserva necesariamente lo mejor; conserva aquello que alguien tuvo recursos, autoridad o suerte suficiente para proteger.",
    questions: [
      "¿Cuántas ideas llamamos universales solamente porque se perdieron las voces capaces de contradecirlas?",
      "¿Cómo distinguís la complejidad que nace del rigor de la complejidad utilizada para impedir que una posición sea refutada?",
      "¿Qué tipo de conocimiento solo se vuelve visible después de que una institución fracasa?",
      "¿Puede enseñarse con justicia a un filósofo cuya arquitectura conceptual admiramos pero cuyas conclusiones consideramos moralmente repugnantes?",
      "Si una inteligencia artificial produce un argumento impecable sin comprenderlo, ¿dónde reside exactamente el valor intelectual del argumento?",
      "¿En qué momento citar autoridades deja de sostener el pensamiento y comienza a reemplazarlo?"
    ],
    moves: ["Elegí una idea que excluirías del canon y defendé por qué debería permanecer.", "Diferenciá influencia, verdad y utilidad como tres criterios incompatibles."],
    lexicon: ["canon", "falibilidad", "inconmensurabilidad"], x: 19, y: 34
  },
  {
    id: "sacristia", number: "04", name: "La sacristía", subtitle: "El yo vestido por la función",
    thesis: "Antes de entrar al espacio público, una persona se reviste de expectativas. La función protege, pero también puede terminar hablando en su nombre.",
    questions: [
      "¿Qué parte de la identidad de un sacerdote pertenece legítimamente a su comunidad y cuál debería permanecer inaccesible incluso para ella?",
      "Cuando una institución presta autoridad a una persona, ¿cómo distinguimos la autoridad del cargo del magnetismo de quien lo ocupa?",
      "¿La transparencia radical fortalece la confianza o convierte la vida privada en un examen permanente de pureza?",
      "¿Puede el carisma ser éticamente sospechoso aunque se utilice para producir resultados genuinamente buenos?",
      "¿Qué obligaciones conserva una persona fuera del horario de una vocación que, para los demás, nunca parece terminar?",
      "¿Cuándo una duda privada debe modificar un discurso público y cuándo comunicarla sería una forma de transferir irresponsablemente la incertidumbre?"
    ],
    moves: ["Respondé separando persona, función e institución.", "Buscá un límite que proteja al líder sin volverlo inmune al escrutinio."],
    lexicon: ["investidura", "fuero íntimo", "legitimidad"], x: 66, y: 46
  },
  {
    id: "refectorio", number: "05", name: "El refectorio", subtitle: "La moral sentada a la mesa",
    thesis: "Compartir alimentos parece igualarnos, pero cada mesa también revela quién sirve, quién decide, quién puede rechazar y quién debe agradecer.",
    questions: [
      "¿Puede existir hospitalidad sin una asimetría entre quien ofrece y quien depende de lo ofrecido?",
      "¿Hasta qué punto el consumo ético es una responsabilidad real y hasta qué punto es un lujo moral reservado a quienes pueden pagarlo?",
      "¿Por qué desconfiamos del placer cuando no puede justificarse mediante productividad, salud o mérito?",
      "¿Una mesa compartida reduce las diferencias sociales o simplemente las vuelve temporalmente menos visibles?",
      "¿Qué ocurre cuando el control del cuerpo —ayuno, dieta, disciplina— se interpreta automáticamente como superioridad moral?",
      "¿Qué exige más apertura: compartir comida con alguien cuyos valores rechazás o permitir que esa persona critique los tuyos en tu propia mesa?"
    ],
    moves: ["Introducí dinero, clase social y trabajo invisible en tu respuesta.", "Defendé una forma de placer que no necesite producir ninguna mejora personal."],
    lexicon: ["ascetismo", "reciprocidad", "frugalidad"], x: 73, y: 65
  },
  {
    id: "campanario", number: "06", name: "El campanario", subtitle: "El derecho a interrumpir",
    thesis: "Una campana convierte una voz en tiempo colectivo. Hoy ese poder lo comparten instituciones, medios, plataformas y cada dispositivo que reclama atención.",
    questions: [
      "¿Quién debería tener derecho a interrumpir la atención colectiva y con qué criterio podría justificarse ese privilegio?",
      "¿Puede una institución hablar más fuerte para evitar volverse irrelevante sin deformar aquello que pretende comunicar?",
      "¿Cuántas veces debe repetirse una afirmación antes de adquirir la apariencia social de una verdad?",
      "Cuando el silencio público se interpreta como consentimiento, ¿existe todavía una forma legítima de neutralidad?",
      "¿Hay verdades cuyo momento de publicación forma parte de su contenido moral?",
      "¿La notificación digital es la campana secular de nuestro tiempo o una forma privada de obediencia disfrazada de elección?"
    ],
    moves: ["Diseñá una regla para decidir qué merece interrumpir a una sociedad.", "Aplicá tu criterio tanto a una iglesia como a una plataforma digital."],
    lexicon: ["interpelación", "saturación", "resonancia"], x: 80, y: 21
  },
  {
    id: "hospederia", number: "07", name: "La hospedería", subtitle: "Recibir sin apropiarse",
    thesis: "Acoger a alguien implica abrir una frontera, pero también decidir cuánto puede alterar la casa antes de dejar de ser considerado huésped.",
    questions: [
      "¿Es conceptualmente posible una hospitalidad incondicional o toda acogida necesita límites para no destruir el lugar que recibe?",
      "¿Cómo se acompaña a alguien sin convertir su vida en un proyecto que confirma la bondad de quien ayuda?",
      "¿La gratitud es una respuesta libre o una deuda silenciosa que la hospitalidad produce incluso cuando afirma no exigir nada?",
      "¿Por qué la analogía entre las fronteras de una casa y las fronteras de un Estado resulta persuasiva y, al mismo tiempo, profundamente engañosa?",
      "¿Tiene el acompañamiento moral una fecha de vencimiento o retirarlo siempre equivale a abandonar?",
      "¿Una buena acción filmada pierde valor moral, gana valor ejemplar o ambas cosas pueden ser verdaderas a la vez?"
    ],
    moves: ["Respondé primero como anfitrión y luego como huésped que no puede irse.", "Incluí un límite concreto y explicá quién carga con su costo."],
    lexicon: ["alteridad", "deuda simbólica", "umbral"], x: 16, y: 69
  },
  {
    id: "jardin", number: "08", name: "El jardín medicinal", subtitle: "Cuidar lo que todavía no responde",
    thesis: "El jardín obliga a trabajar con ritmos que no obedecen a la urgencia humana. Allí, mantener puede ser tan decisivo como crear.",
    questions: [
      "¿Existe una diferencia moral importante entre destruir algo y simplemente dejar de mantenerlo hasta que desaparezca?",
      "¿Toda belleza cultivada depende de alguna forma de exclusión, poda o violencia selectiva?",
      "¿Cómo protegemos los proyectos lentos en sociedades que solo reconocen como real aquello que produce resultados medibles?",
      "¿Puede una institución plantar para dirigentes futuros sin intentar controlar el uso que harán de lo plantado?",
      "¿Cuándo la insistencia en las decisiones individuales desvía deliberadamente la atención de responsabilidades estructurales?",
      "¿Qué virtud seguiría teniendo sentido si nunca produjera resultados visibles ni reconocimiento posterior?"
    ],
    moves: ["Compará el cuidado de una planta, una tradición y una relación.", "Señalá qué parte de tu respuesta depende de resultados y cuál del acto mismo."],
    lexicon: ["custodia", "latencia", "interdependencia"], x: 40, y: 78
  },
  {
    id: "prior", number: "09", name: "El despacho del prior", subtitle: "Administrar sin profanar",
    thesis: "Incluso una vocación necesita presupuestos, reglamentos y decisiones impopulares. La burocracia puede traicionar una misión o impedir que dependa del capricho.",
    questions: [
      "¿Qué se pierde cuando una institución espiritual o educativa solo puede demostrar su valor mediante métricas?",
      "¿Puede aceptarse dinero de un origen moralmente cuestionable para financiar un bien indiscutible sin convertir ese bien en legitimación del donante?",
      "¿Cuándo el consenso distribuye sabiamente la autoridad y cuándo solamente logra que nadie sea responsable del fracaso?",
      "¿Cuánta transparencia puede soportar una institución antes de perder la capacidad de deliberar con honestidad y actuar con eficacia?",
      "¿Hasta dónde es responsable un dirigente por los usos previsibles de una norma que, en su formulación, parece neutral?",
      "Cuando la lealtad institucional y la obligación de decir la verdad chocan, ¿quién tiene derecho a definir qué cuenta como traición?"
    ],
    moves: ["Tomá una decisión concreta y aceptá públicamente qué valor estás sacrificando.", "Separá legalidad, legitimidad y prudencia institucional."],
    lexicon: ["gobernanza", "rendición de cuentas", "discrecionalidad"], x: 62, y: 29
  },
  {
    id: "enfermeria", number: "10", name: "La enfermería", subtitle: "La dignidad de necesitar",
    thesis: "Cuidar revela una dependencia que la cultura de la autonomía preferiría ocultar. También muestra el costo humano de exigir esperanza sin descanso.",
    questions: [
      "¿Cuándo llamar resiliente a una persona reconoce su fuerza y cuándo desplaza sobre ella la obligación de soportar lo intolerable?",
      "¿Puede la esperanza transformarse en una exigencia institucional que impide expresar miedo, cansancio o deseo de renunciar?",
      "¿Cómo debería entenderse la autonomía cuando una decisión personal reorganiza por completo la vida de quienes cuidan?",
      "¿Quién adquiere autoridad para narrar un sufrimiento: quien lo vive, quien lo cuida o quien puede convertirlo en conocimiento público?",
      "¿La fatiga de quien cuida reduce su responsabilidad moral o vuelve más urgente crear estructuras que no dependan de su heroísmo?",
      "¿Qué experiencias quedan expulsadas del lenguaje cuando toda enfermedad debe describirse como batalla, aprendizaje o camino de superación?"
    ],
    moves: ["Eliminá de tu respuesta las palabras fuerza, dignidad y esperanza; reformulala.", "Pensá una solución que no dependa de que alguien sea excepcionalmente bueno."],
    lexicon: ["vulnerabilidad", "agencia", "paternalismo"], x: 85, y: 72
  },
  {
    id: "taller", number: "11", name: "El taller de restauración", subtitle: "Reparar sin falsificar",
    thesis: "Restaurar exige elegir entre ocultar la herida, conservarla como prueba o aceptar que la reparación producirá un objeto diferente.",
    questions: [
      "¿En qué punto una restauración deja de conservar una obra y comienza a fabricar una versión contemporánea del pasado?",
      "¿Por qué algunas relaciones consideran la desaparición de toda cicatriz como prueba de reparación, mientras otras necesitan que la marca permanezca visible?",
      "¿Puede una institución pedir perdón de manera creíble si conserva intacta la estructura de poder que hizo posible el daño?",
      "¿Qué repara mejor una injusticia: devolver a la víctima al estado anterior o crear condiciones que nunca existieron antes del daño?",
      "Si un objeto conserva autenticidad pero ha perdido toda función, ¿qué exactamente estamos protegiendo al preservarlo?",
      "¿Quién debería decidir qué merece ser salvado cuando los recursos para restaurar son inevitablemente limitados?"
    ],
    moves: ["Aplicá la misma definición de reparación a un objeto, una persona y una institución.", "Nombrá aquello que no puede recuperarse y explicá qué podría construirse en su lugar."],
    lexicon: ["restitución", "autenticidad", "reparación"], x: 24, y: 22
  },
  {
    id: "cripta", number: "12", name: "La cripta", subtitle: "Quién administra la memoria",
    thesis: "Los muertos ya no pueden corregir su relato, pero siguen ocupando espacio político, afectivo y simbólico entre quienes los recuerdan.",
    questions: [
      "¿Debería existir un derecho a ser olvidado después de la muerte o la memoria colectiva tiene obligaciones que superan la voluntad individual?",
      "¿Puede haber perdón auténtico si una comunidad conserva activamente la memoria del daño para evitar que se repita?",
      "¿Una biografía justa debe equilibrar virtudes y defectos o esa simetría produce una imagen artificial de la vida?",
      "¿Hasta qué punto los descendientes heredan responsabilidad por beneficios que provienen de actos que no cometieron?",
      "¿Los monumentos públicos están destinados a honrar, a enseñar o a provocar; y qué ocurre cuando intentan cumplir las tres funciones?",
      "¿Quién posee la última palabra sobre un legado cuando la interpretación más útil para el presente contradice lo que la persona creyó sobre sí misma?"
    ],
    moves: ["Diferenciá recordar, conmemorar y absolver.", "Construí una política de memoria que también pueda aplicarse a tus propios héroes."],
    lexicon: ["legado", "memoria ejemplar", "responsabilidad heredada"], x: 55, y: 84
  }
];

const totalQuestions = rooms.reduce((sum, room) => sum + room.questions.length, 0);

function playBell() {
  try {
    const audio = new AudioContext();
    [392, 523.25, 659.25].forEach((frequency, index) => {
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12 / (index + 1), audio.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 1.25 + index * 0.12);
      oscillator.connect(gain).connect(audio.destination);
      oscillator.start(audio.currentTime + index * 0.04);
      oscillator.stop(audio.currentTime + 1.5);
    });
    window.setTimeout(() => void audio.close(), 1700);
  } catch {}
}

export default function MonasterioDeLasIdeas() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [visitedRooms, setVisitedRooms] = useState<string[]>([]);
  const [usedQuestions, setUsedQuestions] = useState<string[]>([]);
  const [depthOpen, setDepthOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const active = useMemo(() => rooms.find(room => room.id === activeId) ?? null, [activeId]);
  const progress = Math.round((visitedRooms.length / rooms.length) * 100);

  const markQuestion = (room: Room, index: number) => {
    const key = `${room.id}-${index}`;
    setUsedQuestions(current => current.includes(key) ? current : [...current, key]);
  };

  const enterRoom = (room: Room, index = 0) => {
    setActiveId(room.id);
    setQuestionIndex(index);
    setDepthOpen(false);
    setVisitedRooms(current => current.includes(room.id) ? current : [...current, room.id]);
    markQuestion(room, index);
  };

  const nextQuestion = () => {
    if (!active) return;
    const next = (questionIndex + 1) % active.questions.length;
    setQuestionIndex(next);
    setDepthOpen(false);
    markQuestion(active, next);
  };

  const ringForRoom = () => {
    playBell();
    const available = rooms.filter(room => !visitedRooms.includes(room.id));
    const pool = available.length ? available : rooms;
    const room = pool[Math.floor(Math.random() * pool.length)];
    enterRoom(room, Math.floor(Math.random() * room.questions.length));
  };

  const stageStyle = { "--tilt-x": `${tilt.y}deg`, "--tilt-y": `${tilt.x}deg` } as CSSProperties;

  return (
    <main className="monastery-app">
      <div className="ambient" aria-hidden="true"><i/><i/><i/><i/><i/></div>
      <header className="monastery-nav">
        <Link href="/" className="monastery-brand"><span>CHE</span>SPANISH <small>C2 · CONVERSACIÓN FILOSÓFICA</small></Link>
        <div className="monastery-progress"><span><b>{visitedRooms.length}</b> / {rooms.length} espacios</span><i><b style={{ width: `${progress}%` }}/></i></div>
        <Link href="/" className="back-library">← BIBLIOTECA</Link>
      </header>

      <section className="monastery-intro">
        <div>
          <span className="chapter">CAPÍTULO ÚNICO · UNA CLASE PARA RYAN</span>
          <h1>El Monasterio<br/><em>de las Ideas</em></h1>
        </div>
        <p>Doce espacios. Setenta y dos preguntas sin respuesta cómoda. Entrá a una sala, tomá posición y permití que el argumento te obligue a corregirte.</p>
        <div className="intro-stats"><span><b>12</b> espacios</span><span><b>{totalQuestions}</b> preguntas C2</span><span><b>100%</b> español</span></div>
      </section>

      <section className="monastery-workspace">
        <div className="map-column">
          <div
            className="monastery-map"
            onPointerMove={event => {
              const rect = event.currentTarget.getBoundingClientRect();
              setTilt({ x: ((event.clientX - rect.left) / rect.width - .5) * 4, y: -((event.clientY - rect.top) / rect.height - .5) * 4 });
            }}
            onPointerLeave={() => setTilt({ x: 0, y: 0 })}
          >
            <div className="monastery-stage" style={stageStyle}>
              <img src="/monastery-ideas-3d.png" alt="Monasterio tridimensional con claustro, biblioteca, campanario, refectorio, jardín, hospedería y cripta"/>
              <div className="map-shade" aria-hidden="true"/>
              {rooms.map(room => <button
                key={room.id}
                className={`room-hotspot ${activeId === room.id ? "active" : ""} ${visitedRooms.includes(room.id) ? "visited" : ""}`}
                style={{ left: `${room.x}%`, top: `${room.y}%` }}
                onClick={() => enterRoom(room)}
                aria-label={`Entrar a ${room.name}`}
              ><i>{room.number}</i><span>{room.name}</span></button>)}
            </div>
            <div className="map-caption"><span>Mové el cursor para recorrer la maqueta</span><b>◉ Elegí un espacio iluminado</b></div>
          </div>
          <div className="room-grid" aria-label="Lista de espacios del monasterio">
            {rooms.map(room => <button key={room.id} onClick={() => enterRoom(room)} className={activeId === room.id ? "active" : ""}><small>{room.number}</small><span>{room.name}</span>{visitedRooms.includes(room.id) && <b>✓</b>}</button>)}
          </div>
        </div>

        <aside className={`question-chamber ${active ? "open" : ""}`}>
          {!active ? <>
            <div className="door-symbol" aria-hidden="true"><i/><span>Φ</span></div>
            <span className="panel-kicker">PUERTA DE ENTRADA</span>
            <h2>No vengas a demostrar lo que sabés.</h2>
            <p>Elegí una sala y buscá el punto exacto en el que tu primera respuesta deja de alcanzarte.</p>
            <blockquote>¿Qué idea defendés correctamente en público, pero todavía discutís en privado?</blockquote>
            <button className="bell-button" onClick={ringForRoom}><span>♟</span><b>Hacer sonar la campana</b><small>El monasterio elige por vos</small></button>
            <div className="class-rules"><span>REGLAS</span><p>Sin definiciones sin casos.</p><p>Sin “depende” sin explicar de qué.</p><p>Sin citar para evitar responder.</p></div>
          </> : <>
            <div className="room-heading"><span>{active.number}</span><div><small>ESPACIO ABIERTO</small><h2>{active.name}</h2><p>{active.subtitle}</p></div></div>
            <p className="room-thesis">{active.thesis}</p>
            <div className="question-counter"><span>PREGUNTA {questionIndex + 1} DE {active.questions.length}</span><div>{active.questions.map((_, index) => <i key={index} className={index === questionIndex ? "active" : usedQuestions.includes(`${active.id}-${index}`) ? "used" : ""}/>)}</div></div>
            <article className="main-question"><span>?</span><h3>{active.questions[questionIndex]}</h3></article>
            <div className="lexicon"><small>PRECISIÓN DISPONIBLE</small>{active.lexicon.map(word => <span key={word}>{word}</span>)}</div>
            <button className={`depth-button ${depthOpen ? "active" : ""}`} onClick={() => setDepthOpen(value => !value)}>{depthOpen ? "Cerrar contrapuntos" : "Abrir contrapuntos filosóficos"} <span>＋</span></button>
            {depthOpen && <div className="depth-panel"><small>NO CAMBIES DE TEMA: CAMBIÁ EL ÁNGULO</small>{active.moves.map((move, index) => <p key={move}><b>0{index + 1}</b>{move}</p>)}</div>}
            <div className="panel-actions"><button onClick={ringForRoom}>Otra sala al azar</button><button className="primary" onClick={nextQuestion}>Siguiente pregunta →</button></div>
          </>}
        </aside>
      </section>

      <section className="exit-question">
        <span>SALIDA DEL MONASTERIO</span>
        <h2>¿Qué idea cambió de forma durante la conversación sin obligarte a cambiar completamente de bando?</h2>
        <p>La respuesta final no resume: registra el movimiento intelectual.</p>
      </section>
    </main>
  );
}
