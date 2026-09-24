export type Dossier={
  id:string;code:string;door:string;signal:string;decision:string;probe:string;
  consequence:string;consequencePrompt:string;cost:string;reconsider:string;
  person:{name:string;role:string;line:string;teacher:string};
  rewrite:string;ripples:[string,string];finalPrompt:string;
};

export const dossiers:Dossier[]=[
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

export const stages=[
  ["Recepción","3 min"],["Expedientes","15 min"],["Entrevista","6 min"],
  ["Balance","5 min"],["Modificación","6 min"],["Conversación final","10 min"]
] as const;

export const interviewQuestions=[
  "¿Qué detalle de esta vida defenderías aunque nadie más lo valorara?",
  "¿Qué parte de tu versión del éxito no aparece en el expediente?",
  "¿Qué le envidias, en secreto, a la vida que no elegiste?",
  "¿Qué supuesto del visitante te parece injusto o demasiado cómodo?"
] as const;

export const values=["TIEMPO","VÍNCULOS","DINERO","LIBERTAD","ESTABILIDAD","RECONOCIMIENTO"] as const;

export const finalQuestions=[
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

export const languageSupport={
  "HIPÓTESIS":["Probablemente habría…","Me cuesta imaginar que…","Lo que habría cambiado realmente sería…"],
  "MATIZ":["Hasta cierto punto…","Dicho eso…","Aunque pudiera parecer…"],
  "REVISIÓN":["Visto desde otra perspectiva…","No necesariamente.","Ahora matizaría lo anterior porque…"]
} as const;
