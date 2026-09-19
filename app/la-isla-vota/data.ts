export type Metric = "agua" | "comida" | "energia" | "convivencia" | "seguridad";

export type PolicyOption = {
  id: string;
  name: string;
  summary: string;
  tradeoff: string;
  delta: Partial<Record<Metric, number>>;
};

export type CouncilRole = {
  name: string;
  brief: string;
};

export type IslandRound = {
  id: string;
  number: string;
  ministry: string;
  title: string;
  shortTitle: string;
  zone: string;
  situation: string;
  motion: string;
  questions: string[];
  roles: CouncilRole[];
  lexicon: string[];
  options: PolicyOption[];
  pressure: {
    title: string;
    copy: string;
    questions: string[];
  };
  recordLabel: string;
  recordPlaceholder: string;
  special?: "jobs" | "budget";
};

export const baseMetrics: Record<Metric, number> = {
  agua: 62,
  comida: 56,
  energia: 42,
  convivencia: 68,
  seguridad: 54,
};

export const metricLabels: Record<Metric, string> = {
  agua: "Agua",
  comida: "Comida",
  energia: "Energía",
  convivencia: "Convivencia",
  seguridad: "Seguridad",
};

export const warmupQuestions = [
  "¿Qué tres objetos rescatarías del barco y por qué?",
  "¿Qué habilidad tuya sería útil durante los primeros siete días?",
  "¿Qué te preocuparía más: la falta de comida, los conflictos o no saber cuándo llega el rescate?",
  "¿Preferirías organizarte rápido con reglas imperfectas o esperar para escuchar a todos?",
];

export const speakingMoves = [
  { id: "postura", label: "Tomé postura", help: "Dije claramente qué quiero." },
  { id: "razon", label: "Di una razón", help: "Expliqué por qué." },
  { id: "ejemplo", label: "Di un ejemplo", help: "Mostré una situación concreta." },
  { id: "respuesta", label: "Respondí a otra idea", help: "No hablé en paralelo." },
  { id: "cesion", label: "Negocié", help: "Cedí algo o propuse una condición." },
];

export const debateTools = [
  "Desde mi punto de vista…",
  "Entiendo tu argumento, pero…",
  "El principal riesgo sería…",
  "Eso beneficiaría a…, mientras que…",
  "Estaría de acuerdo siempre que…",
  "Propongo un punto medio: …",
  "Antes de votar, necesitamos saber…",
  "Si hacemos eso, a largo plazo…",
];

export const jobs = [
  { id: "agua", name: "Agua", note: "filtrar, almacenar, controlar" },
  { id: "comida", name: "Comida", note: "pescar, cultivar, cocinar" },
  { id: "refugio", name: "Refugio", note: "reparar, construir, prevenir" },
  { id: "salud", name: "Salud", note: "atender, higienizar, acompañar" },
  { id: "energia", name: "Energía", note: "paneles, radio, baterías" },
  { id: "cuidados", name: "Cuidados", note: "niños, mayores, convivencia" },
];

export const budgetAreas = [
  { id: "filtros", name: "Filtros de agua", note: "menos riesgo sanitario" },
  { id: "alimentos", name: "Semillas y pesca", note: "comida para más adelante" },
  { id: "clinica", name: "Puesto de salud", note: "medicina y prevención" },
  { id: "radio", name: "Energía y radio", note: "comunicación y luz" },
  { id: "refugios", name: "Refugios", note: "protección contra tormentas" },
];

export const rounds: IslandRound[] = [
  {
    id: "poder",
    number: "01",
    ministry: "PODER",
    title: "¿Quién puede decidir?",
    shortTitle: "Liderazgo",
    zone: "Asamblea",
    situation: "Durante el primer día, tres decisiones urgentes quedaron bloqueadas porque nadie sabía quién tenía la última palabra.",
    motion: "La isla necesita una forma de gobierno provisional durante los próximos 30 días.",
    questions: [
      "¿Qué cualidades concretas debería tener la persona que lidere?",
      "¿La experiencia vale más que haber sido elegido por la mayoría?",
      "¿En una emergencia se puede decidir rápido sin consultar a todos?",
      "¿Qué decisión nunca debería tomar una sola persona?",
      "¿Cuánto debería durar el mandato y por qué?",
      "¿Cómo podría la comunidad reemplazar a una autoridad que abusa de su poder?",
      "¿Qué sistema funcionaría mejor después de la emergencia?",
    ],
    roles: [
      { name: "La persona práctica", brief: "Quiere una autoridad fuerte porque cada hora perdida consume recursos." },
      { name: "La persona desconfiada", brief: "Teme que una emergencia se convierta en poder permanente." },
      { name: "La mediadora", brief: "Acepta liderazgo, pero exige límites y controles claros." },
    ],
    lexicon: ["mandato", "mayoría", "autoridad", "consejo", "elección", "destituir", "límite", "rendir cuentas"],
    options: [
      { id: "lider", name: "Una persona al mando", summary: "La comunidad elige a un líder con poder ejecutivo por 30 días.", tradeoff: "Decide rápido, pero concentra mucho poder.", delta: { seguridad: 5, convivencia: -4, agua: 2 } },
      { id: "consejo", name: "Consejo de cinco", summary: "Cinco representantes votan y una persona coordina.", tradeoff: "Incluye más voces, aunque algunas decisiones tardan.", delta: { convivencia: 4, seguridad: 1, energia: -1 } },
      { id: "asamblea", name: "Asamblea abierta", summary: "Toda decisión importante necesita una votación general.", tradeoff: "Es participativa, pero puede bloquear urgencias.", delta: { convivencia: 6, seguridad: -3, comida: -1 } },
    ],
    pressure: {
      title: "Primer conflicto de poder",
      copy: "La autoridad elegida entrega el mejor refugio a una amiga porque «trabaja más que los demás». No hubo consulta.",
      questions: [
        "¿Es favoritismo o una recompensa razonable? Defendé tu respuesta.",
        "¿Quién debería investigar la decisión sin paralizar el trabajo?",
        "¿Qué límite nuevo agregarías antes de que vuelva a pasar?",
      ],
    },
    recordLabel: "Nombre de la autoridad o del consejo",
    recordPlaceholder: "Ej.: Consejo del Faro",
  },
  {
    id: "economia",
    number: "02",
    ministry: "ECONOMÍA",
    title: "¿Cómo se paga lo que vale?",
    shortTitle: "Moneda",
    zone: "Muelle",
    situation: "La comida, el jabón, las baterías y las herramientas son limitados. Algunas personas trabajan muchas horas; otras hacen tareas menos visibles.",
    motion: "La isla necesita una moneda o un sistema de intercambio que no destruya la cooperación.",
    questions: [
      "¿Todo trabajo debería pagarse igual? ¿Qué excepciones aceptarías?",
      "¿Cómo medimos el valor de cuidar, cocinar o escuchar a alguien?",
      "¿Una hora de cirugía vale lo mismo que una hora de pesca?",
      "¿Qué productos deberían quedar fuera del mercado?",
      "¿Se puede ahorrar o toda la moneda debe caducar cada semana?",
      "¿Qué evita que una persona acumule demasiado poder económico?",
      "¿La herencia tendría sentido dentro de una sociedad tan pequeña?",
    ],
    roles: [
      { name: "La pescadora", brief: "Trabaja de madrugada y quiere cobrar según el esfuerzo y el riesgo." },
      { name: "El cuidador", brief: "Su trabajo no produce objetos, pero permite que otros trabajen." },
      { name: "La comerciante", brief: "Cree que los precios libres mostrarán qué necesita realmente la isla." },
    ],
    lexicon: ["trueque", "salario", "repartir", "acumular", "esencial", "escasez", "aporte", "intercambio"],
    options: [
      { id: "horas", name: "Créditos por hora", summary: "Cada hora de trabajo entrega la misma cantidad de créditos.", tradeoff: "Es fácil de medir, pero ignora dificultad y responsabilidad.", delta: { energia: 3, comida: 2, convivencia: -3 } },
      { id: "igual", name: "Ración igual", summary: "Todos reciben lo mismo; no existe dinero durante la emergencia.", tradeoff: "Protege a todos, pero puede reducir la motivación.", delta: { convivencia: 5, comida: -3, seguridad: -1 } },
      { id: "mixto", name: "Sistema mixto", summary: "Lo esencial es universal y los extras se compran con fichas de aporte.", tradeoff: "Busca equilibrio, pero exige reglas y controles.", delta: { convivencia: 3, comida: 2, energia: 1 } },
    ],
    pressure: {
      title: "La primera desigualdad",
      copy: "Una persona ofrece tres baterías privadas a cambio de toda la ración de fruta de otra familia durante una semana.",
      questions: [
        "¿El intercambio es libre o debería estar prohibido por ser injusto?",
        "¿Puede una persona conservar como privada una cosa que salvó del barco?",
        "¿Qué regla económica escribirías para resolver este caso?",
      ],
    },
    recordLabel: "Nombre de la moneda o del sistema",
    recordPlaceholder: "Ej.: soles, mareas, horas comunes…",
  },
  {
    id: "leyes",
    number: "03",
    ministry: "CONSTITUCIÓN",
    title: "¿Qué está prohibido?",
    shortTitle: "Leyes",
    zone: "Bosque",
    situation: "Ya hubo una fogata cerca del bosque, dos discusiones por el agua y una persona entró en un refugio ajeno sin permiso.",
    motion: "La comunidad aprobará su primer paquete de leyes. Tiene que proteger sin controlar toda la vida privada.",
    questions: [
      "¿Qué problema merece la primera ley de la isla?",
      "¿Una ley es justa si la mayoría la aprueba pero perjudica siempre a la misma minoría?",
      "¿Debería existir un toque de queda? ¿En qué condiciones?",
      "¿La comunidad puede limitar cuánta agua usa cada persona?",
      "¿Qué parte de la vida debe seguir siendo completamente privada?",
      "¿Todas las reuniones del gobierno deberían ser públicas?",
      "¿Qué derecho no aceptarías perder ni siquiera durante una emergencia?",
    ],
    roles: [
      { name: "La ambientalista", brief: "Quiere prohibiciones estrictas para proteger agua, costa y bosque." },
      { name: "El liberal", brief: "Acepta pocas leyes y exige que cada límite sea temporal." },
      { name: "La madre", brief: "Prioriza seguridad, higiene y horarios previsibles para los niños." },
    ],
    lexicon: ["prohibir", "permitir", "derecho", "obligación", "toque de queda", "privacidad", "minoría", "excepción"],
    options: [
      { id: "emergencia", name: "Código de emergencia", summary: "Turnos obligatorios, raciones controladas y circulación nocturna limitada.", tradeoff: "Ordena rápido, pero reduce la libertad personal.", delta: { seguridad: 6, agua: 4, convivencia: -5 } },
      { id: "derechos", name: "Carta de derechos", summary: "Protege agua mínima, privacidad, defensa y libertad de opinión.", tradeoff: "Frena abusos, pero deja vacíos operativos.", delta: { convivencia: 6, seguridad: -2, agua: -1 } },
      { id: "equilibrio", name: "Seis leyes con vencimiento", summary: "Combina derechos y obligaciones; toda regla vence y debe volver a votarse.", tradeoff: "Es equilibrado, aunque requiere revisión constante.", delta: { convivencia: 4, seguridad: 3, agua: 2, energia: -1 } },
    ],
    pressure: {
      title: "Una protesta al anochecer",
      copy: "Ocho personas rompen el horario de silencio para protestar contra la nueva ley de agua. No hay violencia, pero despiertan a toda la isla.",
      questions: [
        "¿Protestar justifica romper una regla recién aprobada?",
        "¿La respuesta debería ser castigo, diálogo o cambio de ley?",
        "¿Cómo protegés al mismo tiempo el descanso y la libertad de protesta?",
      ],
    },
    recordLabel: "Redactá una ley en una sola oración",
    recordPlaceholder: "En la isla, toda persona tiene que / puede / no puede…",
  },
  {
    id: "justicia",
    number: "04",
    ministry: "JUSTICIA",
    title: "¿Cómo se castiga sin destruir?",
    shortTitle: "Castigos",
    zone: "Clínica",
    situation: "Desaparecieron antibióticos del puesto de salud. Una cámara vieja muestra a una persona entrando de noche.",
    motion: "La isla debe decidir qué significa un castigo justo y quién tiene derecho a aplicarlo.",
    questions: [
      "¿Para qué sirve un castigo: reparar, prevenir, vengar o enseñar?",
      "¿Qué prueba sería suficiente antes de declarar culpable a alguien?",
      "¿La expulsión puede usarse si afuera de la comunidad hay peligro real?",
      "¿Un castigo público crea responsabilidad o humillación?",
      "¿El trabajo comunitario es una pena justa o trabajo forzado?",
      "¿Quién debería juzgar a una persona que forma parte del gobierno?",
      "¿Cuándo merece alguien una segunda oportunidad?",
    ],
    roles: [
      { name: "La enfermera", brief: "Teme que la falta de medicamentos ponga vidas en riesgo y pide una sanción fuerte." },
      { name: "El defensor", brief: "Dice que la imagen no demuestra qué hizo la persona dentro de la clínica." },
      { name: "La restauradora", brief: "Quiere recuperar el daño y entender la causa antes de castigar." },
    ],
    lexicon: ["culpable", "prueba", "daño", "reparar", "sanción", "defensa", "testigo", "segunda oportunidad"],
    options: [
      { id: "privilegios", name: "Pérdida de privilegios", summary: "La persona pierde extras, voto y tareas sensibles durante 30 días.", tradeoff: "Es claro y rápido, pero puede aislarla más.", delta: { seguridad: 5, convivencia: -5 } },
      { id: "restaurativa", name: "Justicia restaurativa", summary: "Debe devolver el daño, explicar lo ocurrido y trabajar con la comunidad.", tradeoff: "Busca reparar, aunque algunos lo ven demasiado leve.", delta: { convivencia: 5, seguridad: 1, comida: 1 } },
      { id: "tribunal", name: "Tribunal sorteado", summary: "Cinco personas escuchan pruebas, defensa y testigos antes de decidir.", tradeoff: "Es más garantista, pero consume tiempo y energía.", delta: { seguridad: 3, convivencia: 2, energia: -3 } },
    ],
    pressure: {
      title: "El motivo aparece",
      copy: "La persona confiesa: tomó los antibióticos para su hermana, que no estaba en la lista de prioridad médica.",
      questions: [
        "¿El motivo cambia la culpa, el castigo o solamente nuestra opinión?",
        "¿Quién falló primero: la persona o el sistema de prioridades?",
        "Proponé una sentencia que repare el daño sin ignorar el riesgo.",
      ],
    },
    recordLabel: "Escribí la sentencia acordada",
    recordPlaceholder: "La comunidad decide que… porque…",
  },
  {
    id: "trabajos",
    number: "05",
    ministry: "TRABAJO",
    title: "¿Quién hace el trabajo difícil?",
    shortTitle: "Trabajos",
    zone: "Huertas",
    situation: "Hay 24 personas disponibles para turnos. Sobran tareas importantes y faltan especialistas. Nadie quiere limpiar residuos.",
    motion: "La isla necesita repartir 24 puestos y decidir si los trabajos se asignan por capacidad, por turno o por elección.",
    questions: [
      "¿Debería cada persona elegir su trabajo aunque falten manos en otra área?",
      "¿Qué tareas necesitan especialistas y cuáles pueden rotar?",
      "¿Quién decide si una persona realmente no puede hacer un trabajo físico?",
      "¿Los trabajos peligrosos deberían tener más descanso o más recompensa?",
      "¿Cómo repartimos las tareas que nadie quiere hacer?",
      "¿Cuidar niños o mayores cuenta como un turno completo?",
      "¿Qué hacemos con alguien que se niega a trabajar durante varios días?",
    ],
    roles: [
      { name: "El especialista", brief: "No quiere rotar: dice que usarlo fuera de su área desperdicia una habilidad escasa." },
      { name: "La agotada", brief: "Hace siempre el trabajo menos visible y exige rotación obligatoria." },
      { name: "El voluntario", brief: "Defiende la libertad de elegir porque la motivación mejora el resultado." },
    ],
    lexicon: ["turno", "reparto", "capacidad", "rotación", "tarea", "riesgo", "compensar", "negarse"],
    options: [
      { id: "habilidad", name: "Según capacidades", summary: "Cada persona trabaja donde puede ser más eficiente.", tradeoff: "Produce más, pero puede congelar desigualdades.", delta: { comida: 4, agua: 3, energia: 3, convivencia: -4 } },
      { id: "rotacion", name: "Rotación total", summary: "Todas las tareas cambian de manos cada siete días.", tradeoff: "Reparte la carga, pero pierde experiencia.", delta: { convivencia: 5, comida: -2, agua: -2, seguridad: -1 } },
      { id: "hibrido", name: "Sistema híbrido", summary: "Los puestos críticos quedan fijos y el resto rota.", tradeoff: "Equilibra eficacia y justicia, pero exige negociar excepciones.", delta: { convivencia: 3, comida: 3, agua: 2, energia: 1 } },
    ],
    pressure: {
      title: "El turno que nadie acepta",
      copy: "Después de una infección, limpiar residuos se vuelve la tarea más urgente. Las últimas tres personas asignadas se niegan.",
      questions: [
        "¿Obligarlas es necesario o autoritario?",
        "¿Qué compensación concreta haría el turno más justo?",
        "¿Qué pasa si todos aceptan la regla, pero nadie acepta ser el primero?",
      ],
    },
    recordLabel: "Regla laboral acordada",
    recordPlaceholder: "Los puestos se asignan / rotan…",
    special: "jobs",
  },
  {
    id: "recursos",
    number: "06",
    ministry: "RECURSOS",
    title: "Veinte fichas, cinco necesidades",
    shortTitle: "Recursos",
    zone: "Depósito",
    situation: "El depósito tiene materiales suficientes para mejorar algunas áreas, pero no todas. Cada inversión deja otra necesidad expuesta.",
    motion: "El consejo debe repartir exactamente 20 fichas entre agua, alimentos, clínica, energía y refugios.",
    questions: [
      "¿Es mejor resolver por completo un problema o mejorar un poco todos?",
      "¿Qué necesidad produce más daño si se posterga una semana?",
      "¿Deberíamos reservar fichas para una crisis que quizá nunca ocurra?",
      "¿La mayoría decide o las personas más afectadas tienen más voz?",
      "¿Cómo distinguimos una necesidad de una comodidad?",
      "¿Qué inversión ayuda a más de un área al mismo tiempo?",
      "¿Qué grupo perdería con tu reparto y cómo se lo explicarías?",
    ],
    roles: [
      { name: "La médica", brief: "Pide una clínica fuerte antes de que aparezca una epidemia." },
      { name: "El agricultor", brief: "Dice que sin inversión hoy no habrá comida dentro de un mes." },
      { name: "La técnica", brief: "Quiere energía para la radio, las bombas de agua y la refrigeración." },
    ],
    lexicon: ["priorizar", "invertir", "reservar", "urgente", "beneficiar", "perjudicar", "plazo", "presupuesto"],
    options: [
      { id: "urgencia", name: "Primero lo urgente", summary: "La mayoría de las fichas va a agua y salud.", tradeoff: "Reduce riesgos inmediatos, pero posterga producción.", delta: { agua: 6, seguridad: 3, comida: -3, energia: -2 } },
      { id: "futuro", name: "Primero producir", summary: "Se priorizan alimentos y energía para ganar autonomía.", tradeoff: "Mejora el futuro, pero deja fragilidad hoy.", delta: { comida: 6, energia: 5, agua: -2, seguridad: -2 } },
      { id: "equilibrado", name: "Piso mínimo para todos", summary: "Ninguna área recibe menos de tres fichas.", tradeoff: "Evita abandono, pero ninguna solución queda completa.", delta: { convivencia: 4, agua: 2, comida: 2, energia: 2, seguridad: 1 } },
    ],
    pressure: {
      title: "El pronóstico cambia",
      copy: "La radio capta un aviso incompleto: podría llegar una tormenta fuerte en 48 horas. Nadie sabe cuánto durará.",
      questions: [
        "¿Cambiarías un presupuesto ya votado? ¿Qué moverías primero?",
        "¿Quién puede declarar que una información incompleta es suficiente?",
        "¿Qué costo futuro aceptarías para proteger a la comunidad hoy?",
      ],
    },
    recordLabel: "Principio de reparto",
    recordPlaceholder: "Priorizamos… porque…",
    special: "budget",
  },
  {
    id: "fronteras",
    number: "07",
    ministry: "CIUDADANÍA",
    title: "Llegan nueve personas más",
    shortTitle: "Fronteras",
    zone: "Costa",
    situation: "Una embarcación dañada llega con nueve personas. Están cansadas, tienen poca comida y quieren quedarse.",
    motion: "La isla debe decidir quién puede entrar, quién puede votar y qué obligaciones tiene una persona nueva.",
    questions: [
      "¿Una comunidad en peligro tiene la obligación de recibir a otras personas?",
      "¿Cuándo la falta de recursos justifica cerrar una frontera?",
      "¿Las personas nuevas deberían poder votar desde el primer día?",
      "¿Pedir trabajo a cambio de entrada es cooperación o abuso?",
      "¿Qué criterios de admisión serían humanos y no discriminatorios?",
      "¿Existe una diferencia entre habitante, miembro y ciudadano?",
      "¿Qué le dirías cara a cara a una familia que no podés recibir?",
    ],
    roles: [
      { name: "La recién llegada", brief: "No pide privilegios: ofrece trabajar y reclama ser tratada como persona." },
      { name: "El responsable de comida", brief: "Advierte que las reservas ya están por debajo del objetivo." },
      { name: "La ciudadana fundadora", brief: "Quiere ayudar, pero teme perder voz sobre lo que construyó." },
    ],
    lexicon: ["recibir", "admitir", "rechazar", "ciudadanía", "pertenecer", "condición", "solidaridad", "capacidad"],
    options: [
      { id: "abierta", name: "Entrada inmediata", summary: "Las nueve personas reciben los mismos derechos y raciones.", tradeoff: "Prioriza igualdad, pero presiona las reservas.", delta: { convivencia: 5, comida: -6, agua: -4, energia: -2 } },
      { id: "temporal", name: "Residencia provisional", summary: "Entran por 14 días, colaboran y después se vuelve a votar.", tradeoff: "Gana tiempo, pero crea habitantes con menos derechos.", delta: { convivencia: 1, comida: -3, agua: -2, seguridad: 2 } },
      { id: "cerrada", name: "Ayuda sin admisión", summary: "Reciben comida, agua y reparación, pero deben continuar el viaje.", tradeoff: "Protege recursos, pero los expone a peligro.", delta: { comida: -1, seguridad: 4, convivencia: -6 } },
    ],
    pressure: {
      title: "La información incompleta",
      copy: "Entre las nueve personas hay una mecánica que puede reparar la radio, dos niños y alguien con síntomas de una infección desconocida.",
      questions: [
        "¿La nueva información cambia tu voto? Explicá qué pesa más.",
        "¿Se puede separar al grupo para aceptar solamente a algunas personas?",
        "Diseñá una condición de entrada que proteja sin humillar.",
      ],
    },
    recordLabel: "Regla para nuevas personas",
    recordPlaceholder: "Puede formar parte de la isla quien…",
  },
  {
    id: "crisis",
    number: "08",
    ministry: "CRISIS FINAL",
    title: "La tormenta pone todo a prueba",
    shortTitle: "Emergencia",
    zone: "Cordillera",
    situation: "La tormenta llegó. El muelle está dañado, el agua de la laguna puede contaminarse y quedan seis horas de luz.",
    motion: "La comunidad debe activar un protocolo de emergencia sin borrar las reglas democráticas que acaba de crear.",
    questions: [
      "¿Qué decisión debe tomarse en los próximos diez minutos?",
      "¿Quién recibe información primero y quién da la orden final?",
      "¿Qué derecho puede limitarse temporalmente para salvar vidas?",
      "¿Cómo protegemos a quien se niega a evacuar su refugio?",
      "¿Se puede ocultar información para evitar el pánico?",
      "¿Qué error de las decisiones anteriores ahora resulta más costoso?",
      "¿Cómo sabremos exactamente cuándo termina el poder de emergencia?",
    ],
    roles: [
      { name: "La coordinadora", brief: "Pide mando único hasta que pase la tormenta." },
      { name: "El periodista", brief: "Exige información completa y decisiones documentadas." },
      { name: "La vecina del muelle", brief: "No quiere abandonar el refugio que construyó con sus manos." },
    ],
    lexicon: ["evacuar", "protocolo", "riesgo", "orden", "temporal", "informar", "obedecer", "restablecer"],
    options: [
      { id: "mando", name: "Mando único por 24 horas", summary: "Una persona puede ordenar evacuaciones y mover recursos.", tradeoff: "Actúa rápido, pero suspende controles.", delta: { seguridad: 7, agua: 2, convivencia: -5 } },
      { id: "consejo", name: "Consejo de emergencia", summary: "Tres responsables deben aprobar cada medida importante.", tradeoff: "Mantiene controles, aunque responde más lento.", delta: { seguridad: 4, convivencia: 3, energia: -2 } },
      { id: "equipos", name: "Equipos por zona", summary: "Cada área decide localmente y comparte información por radio.", tradeoff: "Es flexible, pero puede producir órdenes contradictorias.", delta: { convivencia: 2, seguridad: 1, energia: 2, agua: -2 } },
    ],
    pressure: {
      title: "El poder no quiere terminar",
      copy: "La tormenta pasó, pero la autoridad afirma que «todavía no es seguro» y quiere mantener sus poderes durante diez días más.",
      questions: [
        "¿Qué prueba debería presentar para conservar poderes especiales?",
        "¿Quién puede obligarla a devolver el poder?",
        "¿Qué cláusula agregarías hoy a toda futura declaración de emergencia?",
      ],
    },
    recordLabel: "Límite del poder de emergencia",
    recordPlaceholder: "El protocolo termina automáticamente cuando…",
  },
];

export const finalQuestions = [
  "¿Qué decisión fue la más difícil de justificar?",
  "¿En qué ronda cambiaste de opinión y qué argumento te convenció?",
  "¿Tu isla priorizó más la libertad, la igualdad, la seguridad o la eficiencia?",
  "¿Qué grupo tuvo menos poder en sus decisiones?",
  "¿Qué ley funcionaría en una isla, pero sería peligrosa en un país real?",
  "¿Qué contradicción encontrás entre dos acuerdos de la constitución?",
  "¿Vivirías seis meses en la sociedad que creaste? ¿Bajo qué condición?",
  "Si mañana hubiera elecciones, ¿qué promesa harías para ganar?",
];
