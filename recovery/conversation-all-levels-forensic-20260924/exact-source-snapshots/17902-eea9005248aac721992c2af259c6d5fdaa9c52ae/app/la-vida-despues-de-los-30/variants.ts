import type { ConversationLevelVariant } from "../conversation-families/types";

export type LifeLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export const zoneIds = ["prioridades", "futuro", "vida-social", "vinculos", "presion", "trabajo", "equilibrio", "estabilidad", "recomenzar", "energia"] as const;
export type ZoneId = typeof zoneIds[number];
export type FiveMissions = readonly [string, string, string, string, string];
export type ZoneMission = { id: ZoneId; missions: FiveMissions };
type Phase = { minutes: number; title: string; task: string };
export type LifeActivities = {
  zones: readonly ZoneMission[];
  phases: readonly [Phase, Phase, Phase, Phase, Phase];
  supports: readonly string[];
  speakingHelp: string;
  hook: string;
  cover: string;
  alt: string;
};

function zones(groups: readonly FiveMissions[]): readonly ZoneMission[] {
  if (groups.length !== zoneIds.length) throw new Error("Every body zone needs five missions");
  return zoneIds.map((id, index) => ({ id, missions: groups[index] }));
}
function session(open: string, explore: string, deepen: string, exchange: string, close: string): LifeActivities["phases"] {
  return [
    { minutes: 5, title: "Abrir", task: open },
    { minutes: 8, title: "Explorar el mapa", task: explore },
    { minutes: 12, title: "Primera conversación", task: deepen },
    { minutes: 15, title: "Nueva perspectiva", task: exchange },
    { minutes: 5, title: "Cerrar", task: close },
  ];
}

const a1: ConversationLevelVariant<LifeActivities> = {
  level: "A1",
  communicativeObjectives: ["Presentar hábitos, personas y preferencias de la vida cotidiana; hacer preguntas sencillas a otra persona"],
  expectedFunctions: ["Decir qué hago y cuándo", "Expresar gustos y necesidades", "Preguntar por la vida de otra persona"],
  pcicFocus: ["Datos personales", "Relaciones familiares", "Rutina y tiempo libre", "Salud y bienestar"],
  activities: {
    zones: zones([
      ["Elegí dos cosas importantes para vos hoy y nombrálas.", "Decí qué hacés primero por la mañana.", "Mostrá un objeto importante y decí para qué lo usás.", "Preguntá a tu compañero qué necesita hoy.", "Elegí tiempo o dinero y decí cuál querés ahora."],
      ["Decí qué vas a hacer mañana.", "Elegí un lugar que querés visitar y nombrá a un acompañante.", "Preguntá a tu compañero qué hace el fin de semana.", "Decí una cosa nueva que querés aprender.", "Elegí mañana o tarde para un plan y explicá con una frase."],
      ["Presentá a un amigo: nombre y una actividad juntos.", "Invitá a tu compañero a tomar un café y proponé una hora.", "Decí dónde te gusta encontrar a tus amigos.", "Preguntá a tu compañero con quién habla por teléfono.", "Organizá un plan sencillo para dos personas este sábado."],
      ["Presentá a una persona importante para vos.", "Decí con quién vivís o con quién te gustaría vivir.", "Preguntá a tu compañero cómo está una persona de su familia.", "Decí una cosa que hacés con tu familia o amigos.", "Dale las gracias a alguien por una ayuda concreta."],
      ["Decí una cosa que otros quieren de vos esta semana.", "Pedí ayuda para una tarea pequeña.", "Respondé a una invitación: sí o no, con una razón sencilla.", "Decí qué hacés cuando tenés mucho trabajo.", "Elegí un momento para descansar y comunicáselo a un amigo."],
      ["Decí dónde trabajás o estudiás y a qué hora empezás.", "Describí una tarea de tu día con dos verbos.", "Preguntá a tu compañero qué hace en su trabajo o clase.", "Decí qué parte del día laboral te gusta.", "Pedí cambiar una hora de reunión con una frase clara."],
      ["Decí qué hacés para descansar por la noche.", "Elegí música o paseo y explicá qué te gusta más.", "Decí a qué hora comés y a qué hora dormís.", "Preguntá a tu compañero si tiene tiempo libre hoy.", "Proponé una pausa de diez minutos y una actividad."],
      ["Decí dónde vivís y nombrá un lugar cerca de casa.", "Describí una cosa que tenés en tu habitación.", "Preguntá cuánto cuesta una compra de cada semana.", "Elegí caminar o ir en autobús a un lugar y decí por qué.", "Decí qué día hacés la compra y con quién."],
      ["Elegí una actividad nueva para esta semana.", "Pedí información sobre una clase o un curso.", "Contá cómo vas a un lugar nuevo desde tu casa.", "Invitá a un amigo a probar algo nuevo con vos.", "Decí una frase que usás cuando no entendés una instrucción."],
      ["Decí cómo te sentís hoy con una palabra y una razón.", "Nombrá una comida que te da energía.", "Preguntá a tu compañero si prefiere caminar o bailar.", "Decí qué hacés cuando estás cansado.", "Proponé una actividad tranquila para esta tarde."],
    ]),
    phases: session("Mostrá el mapa y nombrá tres partes del cuerpo y tres áreas de la vida.", "Cada persona elige dos zonas; pregunta y responde una misión breve por zona.", "Elegí tres zonas nuevas. El interlocutor pide un dato adicional: quién, dónde o cuándo.", "Intercambiad papeles: una persona presenta su día y la otra arma con preguntas un plan juntos usando al menos cuatro zonas.", "Presentá el plan compartido con tres frases y hacé una última pregunta."),
    supports: ["Yo trabajo / estudio en…", "Me gusta… porque…", "Mañana voy a…", "¿Y vos? ¿Cuándo / dónde / con quién…?"],
    speakingHelp: "Decí una o dos frases. Después hacé una pregunta a la otra persona. Si preferís, inventá una persona.",
    hook: "Un mapa de tu día: contá hábitos, gustos y personas importantes con preguntas simples.",
    cover: "/conversation-variants/la-vida-despues-de-los-30-a1.webp",
    alt: "Retrato editorial de un adulto joven junto a una mesa de desayuno con agenda y taza, en tonos crema y verde salvia.",
  },
  teacherNotes: ["Aceptá respuestas personales o imaginarias. Modelá una frase antes de empezar y señalá el apoyo opcional; no hace falta haber cumplido treinta años.", "Reloj de 45 minutos: 5 + 8 + 12 + 15 + 5. Se recorren al menos cuatro zonas, sin completar las cincuenta tarjetas. Reformulá con quién, dónde y cuándo para extender el intercambio."],
  closingConversation: ["¿Qué hacés normalmente por la mañana?", "¿Con quién querés pasar tiempo esta semana?", "¿Qué plan podemos hacer juntos mañana?"],
};

const a2: ConversationLevelVariant<LifeActivities> = {
  level: "A2",
  communicativeObjectives: ["Coordinar una semana con nuevas responsabilidades, contando cambios recientes y negociando planes realizables"],
  expectedFunctions: ["Describir cambios recientes", "Proponer horarios y alternativas", "Acordar un plan concreto"],
  pcicFocus: ["Organización del tiempo", "Vida cotidiana", "Relaciones personales", "Planes e intenciones"],
  activities: {
    zones: zones([
      ["Contá qué prioridad cambió desde el año pasado y por qué.", "Tenés dos compromisos el jueves: elegí uno y avisá al otro.", "Compará un día ocupado con un día tranquilo de tu semana.", "Explicá qué tarea podés dejar para otro día.", "Preguntá a tu compañero qué necesita hacer antes del domingo."],
      ["Contá un plan que hiciste hace poco y cómo salió.", "Proponé una actividad para el mes próximo con fecha aproximada.", "Preguntá qué quiere cambiar tu compañero este año.", "Si llueve el sábado, proponé otro plan en lugar del paseo.", "Organizá un curso nuevo: cuándo empezar y cuánto tiempo dedicarle."],
      ["Invitá a dos amigos con horarios diferentes y buscá una hora común.", "Explicá por qué no pudiste ir a una reunión reciente.", "Proponé volver a ver a alguien con quien hablaste hace tiempo.", "Un amigo cancela el encuentro: respondé y proponé otra fecha.", "Contá cómo conociste a una persona y qué hicieron la última vez."],
      ["Describí cómo cambiaron tus reuniones familiares este año.", "Pedí a alguien que te ayude con una tarea el fin de semana.", "Respondé a un familiar que quiere una visita cuando estás ocupado.", "Contá un plan que hiciste con otra persona y qué salió bien.", "Negociá quién cocina y quién compra para una cena familiar."],
      ["Explicá una obligación nueva y cuándo aparece.", "Decí que no podés aceptar otro compromiso y ofrecé otra hora.", "Preguntá a un amigo si realmente necesita tu ayuda hoy.", "Contá qué hiciste la última vez que tuviste una semana llena.", "Acordá con otra persona una tarea que sí podés cumplir."],
      ["Contá cómo fue un día de trabajo o estudio diferente al habitual.", "Pedí cambiar una reunión y ofrecé dos horarios.", "Explicá qué habilidad aprendiste recientemente.", "Compará tu horario actual con el de hace un año.", "Organizá con un colega qué hacen primero para terminar una tarea."],
      ["Describí una semana difícil y lo que hiciste para descansar.", "Proponé una pausa para dos personas que salen del trabajo tarde.", "Preguntá qué actividad ayuda a tu compañero cuando tiene estrés.", "Acordá un momento sin pantallas durante una tarde.", "Explicá por qué necesitás cambiar una cita para descansar."],
      ["Explicá un gasto de esta semana y cómo lo organizaste.", "Compará dos opciones de transporte para ir al trabajo.", "Contá qué te gusta de tu casa actual y qué cambiarías.", "Planeá con un compañero una compra compartida con presupuesto.", "Decí cómo organizás tus tareas de casa los fines de semana."],
      ["Contá una actividad nueva que probaste y si querés repetirla.", "Una clase se canceló: llamá para pedir otra fecha.", "Invitá a alguien a conocer un barrio nuevo y acordá cómo ir.", "Explicá un pequeño error reciente y cómo lo solucionaste.", "Proponé dos pasos para empezar una costumbre diferente."],
      ["Compará cómo te sentías ayer y cómo te sentís hoy.", "Describí un hábito que empezaste hace poco.", "Pedí cambiar un plan porque estás cansado; ofrecé otro.", "Preguntá a un amigo qué hace para recuperar energía.", "Organizá tres descansos breves para una semana ocupada."],
    ]),
    phases: session("Contá un cambio en tu semana y preguntá a tu compañero por el suyo.", "Elegid tres zonas para descubrir qué planes se cruzan.", "En parejas, resolvé cuatro tarjetas con fechas, motivos y alternativas.", "Planead juntos una semana posible con trabajo, vínculos y descanso; una cancelación obliga a negociar de nuevo.", "Confirmad en voz alta tres acuerdos: qué, cuándo y quién."),
    supports: ["Antes…, ahora…", "El otro día… y después…", "¿Te viene bien el…?", "No puedo a esa hora; ¿y si…?"],
    speakingHelp: "Contá qué cambió, proponé una opción y confirmá un día o una hora. Podés inventar los detalles.",
    hook: "Una semana en movimiento: coordiná trabajo, amistades y descansos cuando cambian los planes.",
    cover: "/conversation-variants/la-vida-despues-de-los-30-a2.webp",
    alt: "Retrato editorial de un adulto organizando citas en un calendario abierto, con luz cálida y detalles verdes.",
  },
  teacherNotes: ["Reloj de 45 minutos: 5 + 8 + 12 + 15 + 5. Elegí tarjetas de varias zonas y añadí una cancelación oral en la fase de negociación.", "Pedí fechas, horarios y una confirmación explícita. Permití historias imaginarias y evitá dar por supuesto un modelo concreto de familia o empleo."],
  closingConversation: ["¿Qué cambió en tu rutina este último año?", "¿Qué compromiso podés mover si aparece algo urgente?", "¿Qué plan compartido quedó confirmado y para cuándo?"],
};

const b1: ConversationLevelVariant<LifeActivities> = {
  level: "B1",
  communicativeObjectives: ["Conversar sobre prioridades, vínculos, trabajo y cambios vitales a partir de experiencias y planes"],
  expectedFunctions: ["Relatar experiencias", "Explicar motivos", "Añadir ejemplos personales o imaginarios"],
  pcicFocus: ["Etapas de la vida", "Relaciones personales", "Trabajo y bienestar"],
  activities: {
    zones: [], // The exact original B1 questions stay in activity-document.ts.
    phases: session("Presentá una zona con la que te identifiques y explicá qué te interesa de ella.", "Elegí dos zonas y abrí una pregunta en cada una; pedí una razón adicional.", "Conversad sobre tres áreas distintas; añadid ejemplos y repreguntas.", "Cambiad papeles y explorad otras zonas, relacionando experiencias con planes.", "Compartí una idea que cambió durante la conversación."),
    supports: [],
    speakingHelp: "",
    hook: "Diez zonas del cuerpo, cincuenta preguntas sobre prioridades, vínculos y futuro después de los 30.",
    cover: "/vida-despues-30/portrait.webp",
    alt: "Retrato original del hombre adulto con suéter verde que protagoniza el mapa corporal interactivo.",
  },
  teacherNotes: ["El documento B1 original y sus cincuenta preguntas se conservan íntegros. Reloj sugerido: 5 + 8 + 12 + 15 + 5 minutos; no hace falta abrir todas las tarjetas.", "Dejá que el grupo elija zonas y compare vivencias personales o imaginarias, sin presuponer edad, familia o trayectoria laboral."],
  closingConversation: ["¿Qué prioridad cambió con el tiempo?", "¿Qué zona te dio una perspectiva nueva?", "¿Qué conversación te gustaría continuar?"],
};

const b2: ConversationLevelVariant<LifeActivities> = {
  level: "B2",
  communicativeObjectives: ["Negociar prioridades vitales contrapuestas en un grupo y defender una decisión con sus costes y consecuencias"],
  expectedFunctions: ["Sopesar ventajas y costes", "Objetar con respeto", "Negociar condiciones y una solución"],
  pcicFocus: ["Valoración y opinión", "Argumentación", "Relaciones sociales", "Ámbito profesional"],
  activities: {
    zones: zones([
      ["Defendé dedicar una tarde libre a aprender algo nuevo frente a terminar tareas pendientes.", "Priorizá sueño, ingresos y amistades para un mes exigente; justificá el orden.", "Tu pareja prefiere ahorrar y vos querés viajar: negociad una cantidad y una fecha.", "Cuestioná la idea de que una agenda llena equivale a una vida valiosa.", "Formulá un criterio común para rechazar compromisos sin romper relaciones."],
      ["Compará cambiar de ciudad con quedarte y mejorar tu empleo actual.", "Defendé un plan a cinco años ante alguien que cree que es demasiado rígido.", "Negociá qué sacrificarías a corto plazo para aprender una profesión nueva.", "Respondé a quien sostiene que los proyectos personales siempre pueden esperar.", "Proponé dos escenarios si un plan de futuro depende de otra persona."],
      ["Una amistad te pide verse más; explicá tus límites y acordá una frecuencia.", "Argumentá si una amistad a distancia puede sostenerse solo por mensajes.", "Mediá entre dos amigos que quieren formatos incompatibles para una celebración.", "Proponé un modo de retomar el contacto sin prometer tiempo que no tenés.", "Defendé o cuestioná que compartir tiempo sea más importante que hablar a diario."],
      ["Negociá cuidados familiares cuando los horarios de tres personas no coinciden.", "Explicá por qué una decisión importante no debería depender solo de la opinión familiar.", "Un familiar interpreta tu ausencia como desinterés: reconocé su malestar y poné un límite.", "Compará dos formas de repartir tareas domésticas y elegí la más justa.", "Buscá un acuerdo entre intimidad personal y expectativas de visitas familiares."],
      ["Rebatí con tacto el comentario «a tu edad ya deberías tener casa propia».", "Argumentá cuándo conviene aceptar y cuándo cuestionar una expectativa social.", "Mediá entre un amigo que quiere estabilidad y otro que valora probar caminos.", "Explicá un límite frente a comparaciones de sueldos o trayectorias.", "Reformulá una crítica moral sobre elecciones de vida como una pregunta útil."],
      ["Negociá una semana de cuatro días a cambio de nuevas responsabilidades.", "Defendé rechazar un ascenso que reduce tu tiempo libre; respondé a una objeción.", "Compará estabilidad laboral y oportunidad de aprendizaje en dos ofertas.", "Pedí condiciones claras antes de aceptar un proyecto fuera de horario.", "Acordá con un colega cómo repartir una tarea visible y el crédito por hacerla."],
      ["Construí un plan realista para bajar estrés sin reducir todos los compromisos.", "Debatí si una pausa sin productividad necesita justificación.", "Negociá con tu compañero un límite de mensajes de trabajo por la noche.", "Contrastá dos recomendaciones de bienestar y advertí sus costes.", "Respondé a quien dice que descansar es solo cuestión de organización individual."],
      ["Compará alquilar cerca del trabajo con comprar lejos y defendé una elección.", "Priorizá tres gastos inesperados con un presupuesto limitado.", "Discutí qué significa seguridad si los ingresos son variables.", "Negociá una contribución justa a gastos compartidos con sueldos distintos.", "Revisá una decisión de vivienda cuando cambia el horario de transporte."],
      ["Defendé empezar de nuevo en otro lugar frente a reparar lo que ya tenés.", "Proponé una transición laboral con un plan alternativo si falla.", "Respondé a alguien que llama fracaso a cambiar de rumbo.", "Negociá cuánto riesgo aceptaría un grupo al lanzar una iniciativa nueva.", "Compará dos maneras de comunicar a tu entorno una decisión inesperada."],
      ["Sopesá un compromiso deportivo exigente frente a descanso y vida social.", "Negociá un plan de ejercicio con alguien que tiene horarios impredecibles.", "Cuestioná un consejo de salud que equipara edad con pérdida de capacidad.", "Explicá por qué una rutina sostenible puede ser mejor que una meta ambiciosa.", "Acordá dos medidas para respetar el descanso de un compañero de piso."],
    ]),
    phases: session("Cada persona propone una prioridad y su coste probable.", "Explorad dos zonas con objetivos en tensión e identificad intereses.", "Elegid cuatro tarjetas: defendé una opción, escuchá la objeción y revisá tu postura.", "Simulad una reunión de decisiones para un año compartido; añadí una restricción nueva a mitad del acuerdo.", "Explicá un pacto y el coste concreto que cada parte acepta."),
    supports: ["Por un lado…, mientras que…", "Aceptaría esa opción siempre que…", "Entiendo tu punto; sin embargo…", "El coste de esa decisión sería…"],
    speakingHelp: "Defendé una opción con un coste concreto; escuchá una objeción y negociá una condición. Podés hablar desde un personaje.",
    hook: "Prioridades en conflicto: defendé elecciones y negociá límites entre trabajo, vínculos y descanso.",
    cover: "/conversation-variants/la-vida-despues-de-los-30-b2.webp",
    alt: "Composición editorial con dos adultos mirando opciones distintas en un cruce urbano, bajo luz verde y terracota.",
  },
  teacherNotes: ["Reloj de 45 minutos: 5 + 8 + 12 + 15 + 5. Pedí que cada afirmación incluya un coste y una respuesta al argumento contrario.", "Asigná perspectivas distintas cuando haya acuerdo demasiado rápido. El cierre exige una decisión negociada, no solo opiniones sucesivas."],
  closingConversation: ["¿Qué concesión aceptaste y por qué?", "¿Qué objeción te hizo revisar una postura?", "¿Qué condición protegería mejor el acuerdo?"],
};

const c1: ConversationLevelVariant<LifeActivities> = {
  level: "C1",
  communicativeObjectives: ["Mediar entre relatos incompatibles sobre la adultez y reformular expectativas según interlocutor, contexto y matiz"],
  expectedFunctions: ["Matizar y reformular", "Mediar entre perspectivas", "Adaptar registro y presupuestos"],
  pcicFocus: ["Modalización", "Expresión de la opinión y la valoración", "Relaciones interpersonales", "Competencia intercultural"],
  activities: {
    zones: zones([
      ["Reformulá para un colega la frase «tenés mal ordenadas tus prioridades» sin juzgarlo.", "Mediá entre quien considera el cuidado una prioridad y quien lo ve como obligación invisible.", "Explicá cómo cambia el sentido de «aprovechar el tiempo» según la situación económica.", "Matizá la oposición entre ambición y bienestar usando un caso que la contradiga.", "Construí una síntesis provisional de dos personas que definen éxito de forma opuesta."],
      ["Presentá con prudencia un futuro deseado cuando aún dependés de decisiones ajenas.", "Mediá entre una visión optimista del futuro y una marcada por incertidumbre laboral.", "Cuestioná la metáfora de un único camino vital sin invalidar a quien la usa.", "Explicá a dos generaciones qué significa planificar sin prometer certeza.", "Redactá oralmente una visión común que incluya dos futuros posibles."],
      ["Reformulá «nunca tenés tiempo para mí» como petición concreta y negociable.", "Mediá una tensión entre amistad espontánea y necesidad de planificar encuentros.", "Describí cómo cambia la intimidad cuando gran parte del contacto es digital.", "Respondé en un registro cercano a alguien que interpreta tu silencio como rechazo.", "Resumí las necesidades de dos amigos sin repartir culpas."],
      ["Mediá entre una persona que cuida a un familiar y otra que se siente desplazada.", "Explicá por qué «familia» puede nombrar redes distintas sin jerarquizarlas.", "Reformulá una exigencia familiar como necesidad legítima y límite posible.", "Adaptá una misma petición de espacio a una charla íntima y una reunión familiar.", "Sintetizá un acuerdo de cuidados con lo que aún queda sin resolver."],
      ["Desactivá con tacto una pregunta invasiva sobre pareja, hijos o vivienda.", "Analizá a quién beneficia la frase «ya deberías haberlo conseguido».", "Mediá entre quien oye un consejo bienintencionado y quien percibe presión.", "Formulá una respuesta pública y otra privada a una comparación humillante.", "Matizá una crítica a los hitos de la adultez sin descalificar a quien los elige."],
      ["Comunicá a una jefatura que el entusiasmo no sustituye condiciones claras.", "Mediá una disputa sobre reconocimiento del trabajo invisible en un equipo.", "Matizá «cambiar de empleo es rendirse» con trayectorias y riesgos distintos.", "Adaptá tu defensa de un horario flexible al lenguaje del equipo y al de dirección.", "Sintetizá intereses de dos colegas antes de proponer un reparto de tareas."],
      ["Reformulá el consejo «gestioná mejor el estrés» para que reconozca límites externos.", "Mediá entre necesidades de descanso incompatibles en un hogar compartido.", "Analizá cómo el discurso de bienestar puede producir otra obligación.", "Explicá sin simplificar por qué descansar y sentirse culpable pueden coexistir.", "Concretá un cambio personal y una condición colectiva para cuidar el equilibrio."],
      ["Mediá entre alguien que asocia casa propia con seguridad y quien discrepa.", "Explicá cómo hablar de ahorro sin presuponer ingresos o apoyos familiares.", "Matizá qué significa «independencia» en una convivencia intergeneracional.", "Respondé con diplomacia a una sugerencia de gasto que ignoró tu situación.", "Resumí dos formas de estabilidad y su fragilidad respectiva."],
      ["Reinterpretá una pausa profesional sin llamarla éxito ni fracaso.", "Mediá entre el deseo de empezar de nuevo y el duelo por lo que se deja.", "Adaptá una explicación de cambio de rumbo a un amigo y a una entrevista.", "Cuestioná la obligación de convertir toda crisis en oportunidad.", "Ofrecé una narración que reconozca avances y dudas a la vez."],
      ["Explicá por qué hablar de edad y capacidad requiere cautela contextual.", "Mediá entre la preocupación de alguien por su salud y un consejo no pedido.", "Reformulá una broma sobre el cuerpo sin avergonzar a quien la dijo.", "Analizá qué supone afirmar que toda persona puede elegir su rutina de cuidado.", "Proponé una forma respetuosa de preguntar por necesidades de energía."],
    ]),
    phases: session("Mostrá dos afirmaciones sobre la adultez y precisá quién podría decirlas.", "Explorad zonas que despierten relatos discrepantes; identificad presupuestos.", "Mediá cuatro situaciones: parafraseá ambas posiciones antes de responder.", "Preparad una conversación entre generaciones o contextos laborales distintos, cambiando registro y revisando malentendidos.", "Formulá una síntesis matizada y una pregunta abierta que no presuponga respuesta."),
    supports: ["Si entiendo bien, lo que te preocupa es…", "Tal vez estemos dando por supuesto que…", "Sin restar valor a tu experiencia…", "En este contexto podría interpretarse como…"],
    speakingHelp: "Reconocé dos perspectivas antes de intervenir. Matizá tu respuesta y ajustá el registro según con quién hablás.",
    hook: "Dos relatos de la adultez chocan: mediá, cuestioná supuestos y encontrá palabras para ambos.",
    cover: "/conversation-variants/la-vida-despues-de-los-30-c1.webp",
    alt: "Retrato editorial de dos adultos de distintas generaciones conversando a través de una mesa, tonos crema y verde profundo.",
  },
  teacherNotes: ["Reloj de 45 minutos: 5 + 8 + 12 + 15 + 5. Pedí primero una reformulación fiel de ambas posiciones y después una intervención propia.", "Variá destinatarios y registro; admití relatos ficticios para no exigir experiencias íntimas. Observá presuposiciones sobre edad, empleo, familia y recursos."],
  closingConversation: ["¿Qué presupuesto inicial hubo que revisar?", "¿Cómo cambiaste el registro para que ambas personas pudieran escucharse?", "¿Qué tensión sigue abierta incluso después de la mediación?"],
};

const c2: ConversationLevelVariant<LifeActivities> = {
  level: "C2",
  communicativeObjectives: ["Construir una interpretación crítica de los relatos sociales sobre edad, mérito y elección, integrando contradicciones y voces divergentes"],
  expectedFunctions: ["Construir una tesis con reservas", "Ironizar e interpretar implicaturas", "Sintetizar discursos en conflicto"],
  pcicFocus: ["Recursos de argumentación", "Ironía e implicaturas", "Cambio de perspectiva", "Marcadores discursivos"],
  activities: {
    zones: zones([
      ["Sostené y luego refutá «toda prioridad es una elección libre» desde dos condiciones materiales.", "Desentrañá qué silencia el consejo «poné lo importante primero» cuando hay obligaciones de cuidado.", "Formulá una tesis sobre el valor del tiempo y una excepción que la ponga en duda.", "Integrá ambición y renuncia en una definición no trivial de vida lograda.", "Cerrá un debate de prioridades sin borrar la contradicción entre autonomía y dependencia."],
      ["Interpretá el subtexto de «a los treinta ya debería estar todo claro» en tres contextos.", "Defendé el derecho a planear sin convertir el futuro en una promesa de control.", "Reconstruí un discurso optimista y uno escéptico sobre el porvenir antes de juzgarlos.", "Inventá una metáfora alternativa al «camino» para las trayectorias discontinuas.", "Sintetizá un horizonte común para personas con riesgos y recursos desiguales."],
      ["Analizá las implicaturas de «si de verdad le importaras, encontraría tiempo».", "Defendé una forma de intimidad que no dependa de disponibilidad constante.", "Interpretá una ausencia en un grupo desde tres perspectivas plausibles.", "Rebatí con ironía medida la obligación de «optimizar» las amistades.", "Elaborá una norma de reciprocidad que admita asimetrías temporales."],
      ["Cuestioná que el afecto por sí solo resuelva una distribución desigual de cuidados.", "Reconstruí el desacuerdo entre autonomía individual y lealtad familiar sin caricaturas.", "Analizá qué se presupone cuando alguien dice «tu verdadera familia».", "Defendé un límite de cuidado y anticipá una objeción emocional fuerte.", "Sintetizá un acuerdo que reconozca daños pasados sin condenar vínculos futuros."],
      ["Interpretá el tono y la intención de «a tu edad todavía…» en tres voces distintas.", "Invertí irónicamente una máxima sobre éxito adulto y explicá el efecto.", "Analizá cómo se presenta un privilegio como logro exclusivamente individual.", "Formulá una crítica de los hitos obligatorios sin ridiculizar elecciones convencionales.", "Esbozá una réplica que proteja la dignidad de quien pregunta y de quien responde."],
      ["Confrontá la retórica de la vocación con una realidad de contratos precarios.", "Analizá qué implica llamar «flexibilidad» a una disponibilidad unilateral.", "Sostené dos interpretaciones de un cambio de carrera y elegí la más fecunda.", "Argumentá contra la equivalencia entre salario y mérito sin negar responsabilidad personal.", "Redactá oralmente una propuesta laboral persuasiva para intereses realmente opuestos."],
      ["Desmontá la aparente neutralidad del mandato «aprendé a desconectar».", "Sostené la paradoja de buscar descanso como si fuera una tarea productiva.", "Interpretá la misma rutina de cuidado desde bienestar, clase y disponibilidad de tiempo.", "Refutá una explicación puramente individual del agotamiento sin caer en fatalismo.", "Proponé una definición de equilibrio que reconozca pérdida, azar y agencia."],
      ["Cuestioná el uso de «independencia» cuando vivienda y cuidados se sostienen colectivamente.", "Compará dos narrativas de seguridad financiera que ocultan riesgos diferentes.", "Desmenuzá la frase «si ahorrás lo suficiente, podrás elegir» sin simplificarla.", "Defendé la legitimidad de compartir vivienda frente a una objeción de estatus.", "Formulá una síntesis sobre estabilidad que no confunda propiedad con pertenencia."],
      ["Desafiá el relato lineal de caída, superación y éxito tras una ruptura vital.", "Interpretá «empezar de cero» como liberación y como pérdida simultánea.", "Construí dos relatos de un mismo cambio profesional con énfasis contrarios.", "Criticá la industria de la reinvención sin desalentar decisiones arriesgadas.", "Cerrá una historia abierta sin fingir que toda incertidumbre se resuelve."],
      ["Analizá cómo la edad se usa como dato médico y como juicio social.", "Interpretá la ironía de «ya no estoy para estos trotes» según hablante y contexto.", "Debatí los límites éticos de comentar el cuerpo ajeno con buena intención.", "Conectá la exigencia de energía constante con una narrativa de mérito.", "Sintetizá autocuidado y accesibilidad colectiva sin reducir uno al otro."],
    ]),
    phases: session("Elegí una máxima sobre la edad y proponé una lectura literal y otra implícita.", "Explorad dos zonas: localizad qué voces o circunstancias faltan en cada relato.", "Construí una tesis y una reserva a partir de cuatro tarjetas, respondiendo a la interpretación contraria.", "Mesa redonda: narrá el mismo conflicto vital desde tres voces, examiná las implicaturas y negociá una síntesis con tensiones explícitas.", "Pronunciá una conclusión de un minuto que integre una contradicción sin disolverla."),
    supports: ["La formulación presupone que…", "Una lectura menos inmediata sería…", "Concedo ese punto, aunque la consecuencia no se sigue necesariamente…", "La paradoja persiste porque…"],
    speakingHelp: "Examiná lo dicho y lo sugerido. Sostené una tesis, reconocé su límite y cerrá con una síntesis abierta.",
    hook: "Edad, mérito y elecciones: leé entre líneas y construí una síntesis crítica de vidas posibles.",
    cover: "/conversation-variants/la-vida-despues-de-los-30-c2.webp",
    alt: "Retrato editorial contemplativo de un adulto frente a su reflejo oscuro en un espejo, con sombras largas en tonos verde y terracota.",
  },
  teacherNotes: ["Reloj de 45 minutos: 5 + 8 + 12 + 15 + 5. Pedí inferencias sobre intención y destinatario, no solo opiniones propias; forzá una objeción fuerte antes de la síntesis.", "La ironía debe ser interpretada y situada. Invitá a relatos inventados para evitar que el ejercicio dependa de divulgar situaciones personales."],
  closingConversation: ["¿Qué interpretación implícita cambió el debate?", "¿Cuál es la objeción más fuerte a tu tesis?", "¿Qué contradicción decidiste conservar en la conclusión?"],
};

export const lifeVariants: Record<LifeLevel, ConversationLevelVariant<LifeActivities>> = { A1: a1, A2: a2, B1: b1, B2: b2, C1: c1, C2: c2 };
