"use client";

import Link from "next/link";
import { type CSSProperties, useEffect, useMemo, useState } from "react";
import "./style.css";

type Artifact = {
  icon: string;
  name: string;
  detail: string;
  x: number;
  y: number;
  motion: "float" | "swing" | "glow" | "drift";
};

type Room = {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  thesis: string;
  scene: string;
  cast: string;
  questions: [string, string, string];
  moves: [string, string];
  lexicon: [string, string, string];
  artifacts: [Artifact, Artifact, Artifact];
  x: number;
  y: number;
};

const rooms: Room[] = [
  {
    id: "claustro", number: "01", name: "El claustro", subtitle: "El silencio que organiza",
    thesis: "No todo silencio es ausencia: algunos protegen, otros disciplinan y otros obligan a una comunidad a completar lo que nadie se atreve a decir.",
    scene: "/monastery-worlds/01-claustro.webp", cast: "Una monja camina bajo las arcadas mientras un sacerdote cruza el patio y las palomas levantan vuelo.",
    questions: [
      "¿Qué clase de silencio protege la intimidad del otro y cuál lo abandona a la obligación de adivinar?",
      "¿En qué momento la coherencia deja de ser una virtud y se convierte en una forma sofisticada de vanidad moral?",
      "¿Tiene una figura pública el derecho de no formar una opinión sobre cada crisis o su silencio ya constituye una intervención?"
    ],
    moves: ["Defendé el silencio que inicialmente considerarías más sospechoso.", "Construí un caso en el que hablar con absoluta honestidad sea moralmente irresponsable."],
    lexicon: ["reserva", "aquiescencia", "opacidad"],
    artifacts: [
      {icon:"◉", name:"La fuente", detail:"El agua repite sin conservar. ¿Puede una tradición seguir siendo la misma si cambia a quienes la transmiten?", x:49, y:68, motion:"glow"},
      {icon:"♙", name:"La caminante", detail:"La monja recorre el mismo circuito cada día. La repetición puede disciplinar el cuerpo o liberar la atención.", x:26, y:52, motion:"drift"},
      {icon:"⌁", name:"Las palomas", detail:"Una interrupción mínima desarma el silencio colectivo. Observá quién decide cuándo recomienza.", x:71, y:29, motion:"float"}
    ], x: 50, y: 54
  },
  {
    id: "scriptorium", number: "02", name: "El scriptorium", subtitle: "Quién posee una interpretación",
    thesis: "Copiar, traducir y comentar nunca son actos neutrales: cada versión decide qué sobrevive y qué queda convertido en nota al pie.",
    scene: "/monastery-worlds/02-scriptorium.webp", cast: "Un sacerdote copia un manuscrito; la llama vacila, la tinta respira y un gato vigila el borde de la mesa.",
    questions: [
      "Si una traducción vuelve más sólido un argumento defectuoso, ¿ha sido fiel al autor o lo ha traicionado con demasiada generosidad?",
      "¿En qué punto el contexto histórico deja de explicar una idea y comienza a funcionar como una coartada para no juzgarla?",
      "¿Puede una doctrina seguir siendo la misma si debe reemplazar por completo el vocabulario con el que fue formulada?"
    ],
    moves: ["Reformulá la pregunta desde la posición del traductor y después desde la comunidad afectada.", "Distinguí intención, significado y efecto sin permitir que uno cancele a los otros dos."],
    lexicon: ["exégesis", "anacronismo", "indeterminación"],
    artifacts: [
      {icon:"✒", name:"La pluma", detail:"Cada palabra elegida descarta otras. Tocá la pluma: traducir también es ejercer poder.", x:45, y:55, motion:"drift"},
      {icon:"▤", name:"El palimpsesto", detail:"Bajo el texto visible persiste una voz borrada. ¿Qué argumento depende de no verla?", x:72, y:63, motion:"glow"},
      {icon:"◔", name:"El gato", detail:"El único testigo que no interpreta parece, sin embargo, comprender la escena entera.", x:22, y:72, motion:"float"}
    ], x: 29, y: 55
  },
  {
    id: "biblioteca", number: "03", name: "La biblioteca", subtitle: "Ideas que sobreviven por accidente",
    thesis: "El canon no conserva necesariamente lo mejor; conserva aquello que alguien tuvo recursos, autoridad o suerte suficiente para proteger.",
    scene: "/monastery-worlds/03-biblioteca.webp", cast: "Una monja asciende por la escalera, un sacerdote lee junto al globo y una lechuza observa desde las vigas.",
    questions: [
      "¿Cuántas ideas llamamos universales solamente porque se perdieron las voces capaces de contradecirlas?",
      "¿Cómo distinguís la complejidad que nace del rigor de la complejidad utilizada para impedir que una posición sea refutada?",
      "¿Qué tipo de conocimiento solo se vuelve visible después de que una institución fracasa?"
    ],
    moves: ["Elegí una idea que excluirías del canon y defendé por qué debería permanecer.", "Diferenciá influencia, verdad y utilidad como tres criterios incompatibles."],
    lexicon: ["canon", "falibilidad", "inconmensurabilidad"],
    artifacts: [
      {icon:"◉", name:"La lechuza", detail:"Ve en la oscuridad, pero no por eso ve la verdad. Conocimiento y perspectiva no son sinónimos.", x:76, y:25, motion:"float"},
      {icon:"◎", name:"El globo", detail:"Todo mapa vuelve centro el lugar desde donde se lo mira. Giralo mentalmente antes de responder.", x:65, y:67, motion:"drift"},
      {icon:"▥", name:"El estante prohibido", detail:"Excluir un libro también puede volverlo más poderoso. ¿Quién administra ese efecto?", x:20, y:44, motion:"glow"}
    ], x: 19, y: 34
  },
  {
    id: "sacristia", number: "04", name: "La sacristía", subtitle: "El yo vestido por la función",
    thesis: "Antes de entrar al espacio público, una persona se reviste de expectativas. La función protege, pero también puede terminar hablando en su nombre.",
    scene: "/monastery-worlds/04-sacristia.webp", cast: "Un sacerdote prepara las vestiduras entre madera tallada, latón pulido y velas que proyectan dobles sombras.",
    questions: [
      "¿Qué parte de la identidad de un sacerdote pertenece legítimamente a su comunidad y cuál debería permanecer inaccesible incluso para ella?",
      "Cuando una institución presta autoridad a una persona, ¿cómo distinguimos la autoridad del cargo del magnetismo de quien lo ocupa?",
      "¿La transparencia radical fortalece la confianza o convierte la vida privada en un examen permanente de pureza?"
    ],
    moves: ["Respondé separando persona, función e institución.", "Buscá un límite que proteja al líder sin volverlo inmune al escrutinio."],
    lexicon: ["investidura", "fuero íntimo", "legitimidad"],
    artifacts: [
      {icon:"◇", name:"La vestidura", detail:"El símbolo vuelve visible la función, pero puede volver invisible a la persona.", x:37, y:45, motion:"drift"},
      {icon:"⚿", name:"La llave", detail:"Quien puede abrir también decide quién espera. La custodia nunca es puramente material.", x:70, y:71, motion:"swing"},
      {icon:"✦", name:"El espejo", detail:"La imagen devuelve simultáneamente al individuo y al cargo. ¿Cuál de los dos responde?", x:79, y:37, motion:"glow"}
    ], x: 66, y: 46
  },
  {
    id: "refectorio", number: "05", name: "El refectorio", subtitle: "La moral sentada a la mesa",
    thesis: "Compartir alimentos parece igualarnos, pero cada mesa también revela quién sirve, quién decide, quién puede rechazar y quién debe agradecer.",
    scene: "/monastery-worlds/05-refectorio.webp", cast: "Una monja trae pan caliente; un sacerdote espera en la mesa larga mientras el vapor asciende de los cuencos.",
    questions: [
      "¿Puede existir hospitalidad sin una asimetría entre quien ofrece y quien depende de lo ofrecido?",
      "¿Hasta qué punto el consumo ético es una responsabilidad real y hasta qué punto es un lujo moral reservado a quienes pueden pagarlo?",
      "¿Por qué desconfiamos del placer cuando no puede justificarse mediante productividad, salud o mérito?"
    ],
    moves: ["Introducí dinero, clase social y trabajo invisible en tu respuesta.", "Defendé una forma de placer que no necesite producir ninguna mejora personal."],
    lexicon: ["ascetismo", "reciprocidad", "frugalidad"],
    artifacts: [
      {icon:"◒", name:"El pan", detail:"Compartir no borra quién amasó, quién sirve ni quién puede negarse a agradecer.", x:50, y:63, motion:"float"},
      {icon:"≋", name:"El vapor", detail:"Lo efímero también distribuye atención: todos miran aquello que está a punto de desaparecer.", x:71, y:48, motion:"drift"},
      {icon:"▭", name:"El lugar vacío", detail:"Una silla sin ocupar revela a quién esperaba la comunidad y a quién nunca imaginó invitar.", x:24, y:68, motion:"glow"}
    ], x: 73, y: 65
  },
  {
    id: "campanario", number: "06", name: "El campanario", subtitle: "El derecho a interrumpir",
    thesis: "Una campana convierte una voz en tiempo colectivo. Hoy ese poder lo comparten instituciones, medios, plataformas y cada dispositivo que reclama atención.",
    scene: "/monastery-worlds/06-campanario.webp", cast: "Una campana enorme oscila sobre el sacerdote que tira de la cuerda; la lechuza permanece inmóvil frente a la noche.",
    questions: [
      "¿Quién debería tener derecho a interrumpir la atención colectiva y con qué criterio podría justificarse ese privilegio?",
      "¿Puede una institución hablar más fuerte para evitar volverse irrelevante sin deformar aquello que pretende comunicar?",
      "¿Cuántas veces debe repetirse una afirmación antes de adquirir la apariencia social de una verdad?"
    ],
    moves: ["Diseñá una regla para decidir qué merece interrumpir a una sociedad.", "Aplicá tu criterio tanto a una iglesia como a una plataforma digital."],
    lexicon: ["interpelación", "saturación", "resonancia"],
    artifacts: [
      {icon:"◖", name:"La campana", detail:"Su vibración no pide permiso: convierte el espacio acústico común en mensaje.", x:51, y:33, motion:"swing"},
      {icon:"│", name:"La cuerda", detail:"Entre intención y efecto hay una cadena material. ¿Dónde comienza la responsabilidad?", x:42, y:66, motion:"drift"},
      {icon:"◉", name:"La lechuza", detail:"No responde al llamado. Su indiferencia vuelve visible que escuchar y obedecer son actos distintos.", x:79, y:29, motion:"float"}
    ], x: 80, y: 21
  },
  {
    id: "hospederia", number: "07", name: "La hospedería", subtitle: "Recibir sin apropiarse",
    thesis: "Acoger a alguien implica abrir una frontera, pero también decidir cuánto puede alterar la casa antes de dejar de ser considerado huésped.",
    scene: "/monastery-worlds/07-hospederia.webp", cast: "Una monja recibe al viajero frente al hogar encendido; el equipaje espera junto a una taza humeante.",
    questions: [
      "¿Es conceptualmente posible una hospitalidad incondicional o toda acogida necesita límites para no destruir el lugar que recibe?",
      "¿Cómo se acompaña a alguien sin convertir su vida en un proyecto que confirma la bondad de quien ayuda?",
      "¿La gratitud es una respuesta libre o una deuda silenciosa que la hospitalidad produce incluso cuando afirma no exigir nada?"
    ],
    moves: ["Respondé primero como anfitrión y luego como huésped que no puede irse.", "Incluí un límite concreto y explicá quién carga con su costo."],
    lexicon: ["alteridad", "deuda simbólica", "umbral"],
    artifacts: [
      {icon:"⌂", name:"El umbral", detail:"La frontera parece una línea, pero funciona como una negociación prolongada.", x:35, y:57, motion:"glow"},
      {icon:"□", name:"El equipaje", detail:"Todo huésped trae algo que la casa no eligió. Recibirlo sin abrirlo también es una decisión.", x:70, y:71, motion:"drift"},
      {icon:"∿", name:"La taza", detail:"El gesto cálido puede ofrecer descanso o exigir gratitud. El contexto decide.", x:56, y:55, motion:"float"}
    ], x: 16, y: 69
  },
  {
    id: "jardin", number: "08", name: "El jardín medicinal", subtitle: "Cuidar lo que todavía no responde",
    thesis: "El jardín obliga a trabajar con ritmos que no obedecen a la urgencia humana. Allí, mantener puede ser tan decisivo como crear.",
    scene: "/monastery-worlds/08-jardin.webp", cast: "Una monja recoge hierbas, un sacerdote riega los bancales y mariposas y un gato atraviesan el jardín.",
    questions: [
      "¿Existe una diferencia moral importante entre destruir algo y simplemente dejar de mantenerlo hasta que desaparezca?",
      "¿Toda belleza cultivada depende de alguna forma de exclusión, poda o violencia selectiva?",
      "¿Cómo protegemos los proyectos lentos en sociedades que solo reconocen como real aquello que produce resultados medibles?"
    ],
    moves: ["Compará el cuidado de una planta, una tradición y una relación.", "Señalá qué parte de tu respuesta depende de resultados y cuál del acto mismo."],
    lexicon: ["custodia", "latencia", "interdependencia"],
    artifacts: [
      {icon:"♧", name:"La hierba amarga", detail:"Su valor no coincide con su sabor inmediato. ¿Qué formas de bien exigen tiempo para ser reconocidas?", x:34, y:64, motion:"float"},
      {icon:"⌁", name:"La mariposa", detail:"Poliniza sin conocer el sistema que sostiene. La ignorancia del efecto no elimina el efecto.", x:73, y:38, motion:"drift"},
      {icon:"◔", name:"El gato del huerto", detail:"Descansa sobre una tarea no terminada y cuestiona la equivalencia entre quietud e inutilidad.", x:62, y:76, motion:"glow"}
    ], x: 40, y: 78
  },
  {
    id: "prior", number: "09", name: "El despacho del prior", subtitle: "Administrar sin profanar",
    thesis: "Incluso una vocación necesita presupuestos, reglamentos y decisiones impopulares. La burocracia puede traicionar una misión o impedir que dependa del capricho.",
    scene: "/monastery-worlds/09-prior.webp", cast: "El prior trabaja entre libros contables, llaves, cartas selladas y un reloj de arena que no se detiene.",
    questions: [
      "¿Qué se pierde cuando una institución espiritual o educativa solo puede demostrar su valor mediante métricas?",
      "¿Puede aceptarse dinero de un origen moralmente cuestionable para financiar un bien indiscutible sin convertir ese bien en legitimación del donante?",
      "¿Cuándo el consenso distribuye sabiamente la autoridad y cuándo solamente logra que nadie sea responsable del fracaso?"
    ],
    moves: ["Tomá una decisión concreta y aceptá públicamente qué valor estás sacrificando.", "Separá legalidad, legitimidad y prudencia institucional."],
    lexicon: ["gobernanza", "rendición de cuentas", "discrecionalidad"],
    artifacts: [
      {icon:"⌛", name:"El reloj de arena", detail:"Decidir tarde también es decidir. La demora distribuye costos aunque no firme documentos.", x:73, y:44, motion:"drift"},
      {icon:"▦", name:"El libro contable", detail:"Lo que no entra en una columna corre el riesgo de volverse institucionalmente invisible.", x:48, y:61, motion:"glow"},
      {icon:"⚿", name:"El manojo de llaves", detail:"Delegar una llave distribuye poder; conservarlas todas convierte la prudencia en dependencia.", x:25, y:70, motion:"swing"}
    ], x: 62, y: 29
  },
  {
    id: "enfermeria", number: "10", name: "La enfermería", subtitle: "La dignidad de necesitar",
    thesis: "Cuidar revela una dependencia que la cultura de la autonomía preferiría ocultar. También muestra el costo humano de exigir esperanza sin descanso.",
    scene: "/monastery-worlds/10-enfermeria.webp", cast: "Una monja cuida al paciente; un sacerdote consulta un herbario mientras el vapor del hervidor suaviza la luz.",
    questions: [
      "¿Cuándo llamar resiliente a una persona reconoce su fuerza y cuándo desplaza sobre ella la obligación de soportar lo intolerable?",
      "¿Puede la esperanza transformarse en una exigencia institucional que impide expresar miedo, cansancio o deseo de renunciar?",
      "¿Cómo debería entenderse la autonomía cuando una decisión personal reorganiza por completo la vida de quienes cuidan?"
    ],
    moves: ["Eliminá de tu respuesta las palabras fuerza, dignidad y esperanza; reformulala.", "Pensá una solución que no dependa de que alguien sea excepcionalmente bueno."],
    lexicon: ["vulnerabilidad", "agencia", "paternalismo"],
    artifacts: [
      {icon:"≋", name:"El hervidor", detail:"El cuidado ocurre en tareas pequeñas que rara vez entran en el relato heroico.", x:70, y:63, motion:"float"},
      {icon:"▤", name:"El herbario", detail:"Clasificar síntomas produce conocimiento y también puede borrar la singularidad del paciente.", x:28, y:51, motion:"glow"},
      {icon:"✣", name:"La venda", detail:"Protege la herida ocultándola. ¿Cuándo hace falta verla para poder cuidarla mejor?", x:52, y:72, motion:"drift"}
    ], x: 85, y: 72
  },
  {
    id: "taller", number: "11", name: "El taller de restauración", subtitle: "Reparar sin falsificar",
    thesis: "Restaurar exige elegir entre ocultar la herida, conservarla como prueba o aceptar que la reparación producirá un objeto diferente.",
    scene: "/monastery-worlds/11-taller.webp", cast: "Un sacerdote repara una pintura, una monja ordena pigmentos y el polvo se vuelve visible dentro de los rayos de sol.",
    questions: [
      "¿En qué punto una restauración deja de conservar una obra y comienza a fabricar una versión contemporánea del pasado?",
      "¿Por qué algunas relaciones consideran la desaparición de toda cicatriz como prueba de reparación, mientras otras necesitan que la marca permanezca visible?",
      "¿Puede una institución pedir perdón de manera creíble si conserva intacta la estructura de poder que hizo posible el daño?"
    ],
    moves: ["Aplicá la misma definición de reparación a un objeto, una persona y una institución.", "Nombrá aquello que no puede recuperarse y explicá qué podría construirse en su lugar."],
    lexicon: ["restitución", "autenticidad", "reparación"],
    artifacts: [
      {icon:"◩", name:"La grieta dorada", detail:"Una reparación visible puede recordar el daño o convertirlo en decoración moral.", x:46, y:48, motion:"glow"},
      {icon:"✣", name:"Los pigmentos", detail:"Restituir un color exige inventar aquello que ya no puede observarse directamente.", x:71, y:69, motion:"float"},
      {icon:"⌁", name:"El polvo", detail:"Solo la luz vuelve visible lo que siempre estuvo suspendido en la sala.", x:25, y:34, motion:"drift"}
    ], x: 24, y: 22
  },
  {
    id: "cripta", number: "12", name: "La cripta", subtitle: "Quién administra la memoria",
    thesis: "Los muertos ya no pueden corregir su relato, pero siguen ocupando espacio político, afectivo y simbólico entre quienes los recuerdan.",
    scene: "/monastery-worlds/12-cripta.webp", cast: "Un sacerdote y una monja avanzan con velas entre tumbas de piedra; una silueta de lechuza custodia la salida.",
    questions: [
      "¿Debería existir un derecho a ser olvidado después de la muerte o la memoria colectiva tiene obligaciones que superan la voluntad individual?",
      "¿Puede haber perdón auténtico si una comunidad conserva activamente la memoria del daño para evitar que se repita?",
      "¿Una biografía justa debe equilibrar virtudes y defectos o esa simetría produce una imagen artificial de la vida?"
    ],
    moves: ["Diferenciá recordar, conmemorar y absolver.", "Construí una política de memoria que también pueda aplicarse a tus propios héroes."],
    lexicon: ["legado", "memoria ejemplar", "responsabilidad heredada"],
    artifacts: [
      {icon:"✦", name:"La vela compartida", detail:"Recordar ilumina una parte del pasado y deja otra inevitablemente en sombra.", x:44, y:58, motion:"glow"},
      {icon:"▰", name:"La tumba sin nombre", detail:"La ausencia de nombre no elimina una vida; modifica quién puede reclamarla como memoria.", x:68, y:71, motion:"drift"},
      {icon:"◉", name:"La lechuza del umbral", detail:"Custodia la salida, no los muertos. Tal vez toda memoria habla más del presente que del pasado.", x:79, y:30, motion:"float"}
    ], x: 55, y: 84
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
  const [view, setView] = useState<"map" | "entering" | "room">("map");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [visitedRooms, setVisitedRooms] = useState<string[]>([]);
  const [usedQuestions, setUsedQuestions] = useState<string[]>([]);
  const [depthOpen, setDepthOpen] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [worldTilt, setWorldTilt] = useState({ x: 0, y: 0 });
  const active = useMemo(() => rooms.find(room => room.id === activeId) ?? null, [activeId]);
  const progress = Math.round((visitedRooms.length / rooms.length) * 100);

  useEffect(() => {
    if (view !== "entering") return;
    const timer = window.setTimeout(() => setView("room"), 900);
    return () => window.clearTimeout(timer);
  }, [view, activeId]);

  const markQuestion = (room: Room, index: number) => {
    const key = room.id + "-" + index;
    setUsedQuestions(current => current.includes(key) ? current : [...current, key]);
  };

  const enterRoom = (room: Room, index = 0) => {
    setActiveId(room.id);
    setQuestionIndex(index);
    setDepthOpen(false);
    setSelectedArtifact(null);
    setVisitedRooms(current => current.includes(room.id) ? current : [...current, room.id]);
    markQuestion(room, index);
    setView("entering");
  };

  const openQuestion = (index: number) => {
    if (!active) return;
    setQuestionIndex(index);
    setDepthOpen(false);
    markQuestion(active, index);
  };

  const nextQuestion = () => {
    if (!active) return;
    openQuestion((questionIndex + 1) % active.questions.length);
  };

  const ringForRoom = () => {
    playBell();
    const available = rooms.filter(room => !visitedRooms.includes(room.id));
    const pool = available.length ? available : rooms;
    enterRoom(pool[Math.floor(Math.random() * pool.length)]);
  };

  const returnToMap = () => {
    setView("map");
    setSelectedArtifact(null);
    setWorldTilt({x:0,y:0});
  };

  const stageStyle = {"--tilt-x": tilt.y + "deg", "--tilt-y": tilt.x + "deg"} as CSSProperties;
  const worldStyle = {"--world-x": worldTilt.x + "px", "--world-y": worldTilt.y + "px"} as CSSProperties;

  return (
    <main className={"monastery-app view-" + view}>
      <div className="ambient" aria-hidden="true"><i/><i/><i/><i/><i/></div>
      <header className="monastery-nav">
        <button className="monastery-brand brand-button" onClick={returnToMap}><span>SPANISH</span>CUE <small>C2 · CONVERSACIÓN FILOSÓFICA</small></button>
        <div className="monastery-progress"><span><b>{visitedRooms.length}</b> / {rooms.length} mundos</span><i><b style={{width: progress + "%"}}/></i></div>
        {view === "room" ? <button className="back-library" onClick={returnToMap}>← MAPA DEL MONASTERIO</button> : <Link href="/" className="back-library">← BIBLIOTECA</Link>}
      </header>

      {view === "map" && <>
        <section className="monastery-intro">
          <div>
            <span className="chapter">CAPÍTULO ÚNICO · UNA CLASE PARA RYAN</span>
            <h1>El Monasterio<br/><em>de las Ideas</em></h1>
          </div>
          <p>Doce mundos interiores. Entrá en cada espacio, explorá sus objetos vivos y enfrentá tres preguntas C2 antes de volver a la maqueta.</p>
          <div className="intro-stats"><span><b>12</b> mundos 3D</span><span><b>{totalQuestions}</b> preguntas C2</span><span><b>12</b> escenas vivas</span></div>
        </section>

        <section className="monastery-workspace">
          <div className="map-column">
            <div
              className="monastery-map"
              onPointerMove={event => {
                const rect = event.currentTarget.getBoundingClientRect();
                setTilt({x:((event.clientX - rect.left) / rect.width - .5) * 4,y:-((event.clientY - rect.top) / rect.height - .5) * 4});
              }}
              onPointerLeave={() => setTilt({x:0,y:0})}
            >
              <div className="monastery-stage" style={stageStyle}>
                <img src="/monastery-ideas-3d.webp" alt="Maqueta tridimensional del monasterio con doce espacios explorables"/>
                <div className="map-shade" aria-hidden="true"/>
                {rooms.map(room => <button
                  key={room.id}
                  className={"room-hotspot " + (visitedRooms.includes(room.id) ? "visited" : "")}
                  style={{left:room.x + "%",top:room.y + "%"}}
                  onClick={() => enterRoom(room)}
                  aria-label={"Entrar en 3D a " + room.name}
                ><i>{room.number}</i><span>ENTRAR · {room.name}</span></button>)}
              </div>
              <div className="map-caption"><span>Mové el cursor para recorrer la maqueta</span><b>◉ Tocá un punto para entrar en 3D</b></div>
            </div>
            <div className="room-grid" aria-label="Lista de mundos del monasterio">
              {rooms.map(room => <button key={room.id} onClick={() => enterRoom(room)}><small>{room.number}</small><span>{room.name}</span>{visitedRooms.includes(room.id) && <b>✓</b>}</button>)}
            </div>
          </div>

          <aside className="question-chamber entry-chamber">
            <div className="door-symbol" aria-hidden="true"><i/><span>Φ</span></div>
            <span className="panel-kicker">PUERTA DE ENTRADA</span>
            <h2>Acá no se elige una tarjeta. Se entra.</h2>
            <p>Cada punto abre un interior distinto. La imagen cobra vida con movimientos propios de ese lugar y después aparecen tres preguntas extremadamente avanzadas.</p>
            <blockquote>¿Qué idea defendés correctamente en público, pero todavía discutís en privado?</blockquote>
            <button className="bell-button" onClick={ringForRoom}><span>♟</span><b>Hacer sonar la campana</b><small>El monasterio abre una puerta al azar</small></button>
            <div className="class-rules"><span>REGLAS</span><p>Observá qué está pasando en la escena antes de responder.</p><p>Sin “depende” sin explicar de qué.</p><p>Sin citar para evitar responder.</p></div>
          </aside>
        </section>

        <section className="exit-question">
          <span>SALIDA DEL MONASTERIO</span>
          <h2>¿Qué idea cambió de forma durante la conversación sin obligarte a cambiar completamente de bando?</h2>
          <p>La respuesta final no resume: registra el movimiento intelectual.</p>
        </section>
      </>}

      {view === "entering" && active && <section className="portal-transition" aria-live="polite">
        <div className="portal-rings" aria-hidden="true"><i/><i/><i/></div>
        <img src={active.scene} alt=""/>
        <div className="portal-copy"><small>ABRIENDO ESPACIO {active.number}</small><strong>{active.name}</strong><span>Entrando al mundo interior…</span></div>
      </section>}

      {view === "room" && active && <section className="room-world">
        <div
          className="room-scene"
          style={worldStyle}
          onPointerMove={event => {
            const rect = event.currentTarget.getBoundingClientRect();
            setWorldTilt({x:((event.clientX - rect.left) / rect.width - .5) * -12,y:((event.clientY - rect.top) / rect.height - .5) * -8});
          }}
          onPointerLeave={() => setWorldTilt({x:0,y:0})}
        >
          <img className="room-scene-image" src={active.scene} alt={"Interior 3D de " + active.name + ". " + active.cast}/>
          <div className={"scene-effects scene-effects-" + active.id} aria-hidden="true">
            {active.artifacts.map((artifact,index) => <img
              key={artifact.name}
              className={"scene-effect effect-" + artifact.motion}
              src={active.scene}
              alt=""
              style={{
                "--fx": artifact.x + "%",
                "--fy": artifact.y + "%",
                "--effect-delay": index * -1.15 + "s"
              } as CSSProperties}
            />)}
            <div className="natural-atmosphere"><i/><i/><i/></div>
          </div>
          <div className="room-scene-vignette" aria-hidden="true"/>
          <div className="scene-dust" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>

          <div className="world-heading">
            <span>ESPACIO {active.number} · MUNDO INTERIOR</span>
            <h1>{active.name}</h1>
            <p>{active.subtitle}</p>
          </div>

          <button className="leave-world" onClick={returnToMap}>← Volver a la maqueta</button>

          <div className="scene-cast"><span>EN ESCENA</span><p>{active.cast}</p></div>
          <div className="scene-instruction">Mové el cursor · la escena se anima sola</div>
        </div>

        <aside className="world-question-panel">
          <div className="room-heading">
            <span>{active.number}</span>
            <div><small>3 PREGUNTAS · C2 EXTREMO</small><h2>{active.name}</h2><p>{active.subtitle}</p></div>
          </div>
          <p className="room-thesis">{active.thesis}</p>
          <section className="scene-detail-list">
            <div className="scene-detail-heading"><small>MOVIMIENTO REAL DE LA ESCENA</small><span>Sin íconos flotantes</span></div>
            <div className="scene-detail-buttons">
              {active.artifacts.map((artifact,index) => <button
                key={artifact.name}
                className={selectedArtifact === index ? "active" : ""}
                onClick={() => setSelectedArtifact(selectedArtifact === index ? null : index)}
              ><small>0{index + 1}</small><span>{artifact.name}</span><b>{selectedArtifact === index ? "—" : "+"}</b></button>)}
            </div>
            {selectedArtifact !== null && <div className="scene-detail-copy"><strong>{active.artifacts[selectedArtifact].name}</strong><p>{active.artifacts[selectedArtifact].detail}</p></div>}
          </section>
          <div className="question-tabs" role="tablist" aria-label="Preguntas de este espacio">
            {active.questions.map((_,index) => <button
              key={index}
              className={index === questionIndex ? "active" : usedQuestions.includes(active.id + "-" + index) ? "used" : ""}
              onClick={() => openQuestion(index)}
              role="tab"
              aria-selected={index === questionIndex}
            ><small>0{index + 1}</small><span>{index === questionIndex ? "EN DISCUSIÓN" : "ABRIR"}</span></button>)}
          </div>
          <article className="main-question world-main-question"><span>?</span><h3>{active.questions[questionIndex]}</h3></article>
          <div className="lexicon"><small>PRECISIÓN DISPONIBLE</small>{active.lexicon.map(word => <span key={word}>{word}</span>)}</div>
          <button className={"depth-button " + (depthOpen ? "active" : "")} onClick={() => setDepthOpen(value => !value)}>
            {depthOpen ? "Cerrar contrapuntos" : "Abrir contrapuntos filosóficos"} <span>＋</span>
          </button>
          {depthOpen && <div className="depth-panel"><small>NO CAMBIES DE TEMA: CAMBIÁ EL ÁNGULO</small>{active.moves.map((move,index) => <p key={move}><b>0{index + 1}</b>{move}</p>)}</div>}
          <div className="world-actions">
            <button onClick={returnToMap}>Salir al mapa</button>
            <button className="primary" onClick={nextQuestion}>{questionIndex === 2 ? "Volver a la pregunta 1 ↺" : "Siguiente pregunta →"}</button>
          </div>
        </aside>
      </section>}
    </main>
  );
}
