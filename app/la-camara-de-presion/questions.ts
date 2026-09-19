export type PressureQuestion={
  id:string;
  family:string;
  familyLabel:string;
  topic:string;
  prompt:string;
  context?:string;
  sourceIds?:string[];
};

type QuestionGroup={
  prefix:string;
  family:string;
  familyLabel:string;
  topic:string;
  prompts:string[];
};

const expand=(groups:QuestionGroup[]):PressureQuestion[]=>groups.flatMap(group=>
  group.prompts.map((prompt,index)=>({
    id:`${group.prefix}${String(index+1).padStart(2,"0")}`,
    family:group.family,
    familyLabel:group.familyLabel,
    topic:group.topic,
    prompt
  }))
);

export const evergreenQuestions:PressureQuestion[]=expand([
  {
    prefix:"w",family:"words",familyLabel:"MATICES LÉXICOS",topic:"PALABRAS QUE CAMBIAN EL JUICIO",
    prompts:[
      "¿Qué frontera separa tolerar de consentir cuando quien tolera también controla las condiciones?",
      "¿Cuándo influir sobre una decisión se convierte en manipularla si toda comunicación selecciona información?",
      "¿En qué punto proteger un secreto deja de preservar la privacidad y empieza a impedir la rendición de cuentas?",
      "¿Cómo distinguirías precaución de miedo cuando ambas conductas producen exactamente la misma demora?",
      "¿Adaptarse y ceder describen cambios distintos o el mismo cambio juzgado desde posiciones de poder diferentes?",
      "¿Cuándo la estabilidad institucional merece llamarse estancamiento aunque siga produciendo resultados previsibles?",
      "¿Puede alguien tener autoridad sin poder y poder sin autoridad dentro de la misma relación?",
      "¿Qué convierte información abundante en conocimiento y cuándo esa transformación produce una falsa sensación de comprensión?"
    ]
  },
  {
    prefix:"p",family:"premise",familyLabel:"CUESTIONÁ LA PREMISA",topic:"LA PREGUNTA YA TOMÓ PARTIDO",
    prompts:[
      "La pregunta «¿por qué la gente perdió la capacidad de escuchar?» ya afirma que hubo una pérdida: ¿cómo la reformularías sin aceptar esa conclusión?",
      "Si alguien pregunta cómo reparar «el daño inevitable del turismo», ¿qué dos presuposiciones deberías discutir antes de responder?",
      "La frase «la automatización aumenta la productividad» parece un dato: ¿qué medición, escala y período deja sin definir?",
      "Cuando se afirma que la desinformación vuelve irracionales a los votantes, ¿cómo separarías exposición, persuasión y conducta sin descalificar al electorado?",
      "¿Qué tendría que significar exactamente «ser auténtico» para poder comprobar si de verdad genera más confianza?",
      "La pregunta «¿por qué las nuevas generaciones no quieren trabajar?» ¿qué hechos da por sentados y qué pregunta más rigurosa pondrías en su lugar?"
    ]
  },
  {
    prefix:"l",family:"literal",familyLabel:"LITERALMENTE CIERTO, PERO…",topic:"LO QUE UNA FRASE PERMITE OCULTAR",
    prompts:[
      "«No fue una orden; todos sabían lo que se esperaba de ellos»: ¿qué afirma, qué sugiere y qué permite negar después?",
      "«Hasta ahora no encontramos motivos para cambiar el procedimiento»: ¿dónde termina la evidencia y empieza la estrategia comunicativa?",
      "«La salida fue acordada y la conversación terminó en buenos términos»: ¿puede ser verdad y encubrir una relación profundamente asimétrica?",
      "«No descartamos ninguna hipótesis»: ¿comunica apertura intelectual o evita admitir que algunas explicaciones son mucho menos probables?",
      "«Podríamos haber obtenido un resultado considerablemente peor»: ¿consuela, evalúa o desplaza deliberadamente el punto de comparación?",
      "«Se cumplieron todos los protocolos vigentes»: ¿qué pregunta decisiva queda abierta aunque la frase sea completamente verdadera?"
    ]
  },
  {
    prefix:"c",family:"wordshift",familyLabel:"CAMBIÁ UNA PALABRA",topic:"UN VERBO, OTRO RELATO",
    prompts:[
      "«El gobierno corrigió, modificó o revirtió su política»: ¿qué relato sobre el pasado instala cada verbo?",
      "«La plataforma detecta, vigila o rastrea el comportamiento»: ¿qué cambia si la acción técnica es idéntica?",
      "«El movimiento ocupó, tomó o liberó el edificio»: ¿qué legitimidad implícita construye cada opción?",
      "«La empresa afronta una crisis, un ajuste o una transformación»: ¿cuál informa y cuál administra la reacción del oyente?",
      "«La científica cuestionó, refutó o desacreditó el estudio»: ¿qué grado de cierre atribuye cada verbo?",
      "«El Estado restringió, reguló o protegió el acceso»: ¿qué palabra usaría cada actor y cuál conserva mejor el hecho verificable?"
    ]
  },
  {
    prefix:"o",family:"opposite",familyLabel:"DEFENDÉ LO CONTRARIO",topic:"LA MEJOR VERSIÓN DEL ADVERSARIO",
    prompts:[
      "¿Qué espacio de anonimato digital conservarías y cuál es el argumento más fuerte para eliminarlo?",
      "¿Puede una transición energética responsable excluir la energía nuclear y cuál es la mejor objeción a tu respuesta?",
      "¿Debería una ciudad limitar quién puede comprar vivienda aunque reduzca inversión y cómo defenderías la postura opuesta?",
      "¿Es defendible compartir una decisión médica de alto impacto con una IA y qué argumento contrario no podrías descartar?",
      "¿Deberían las universidades permitir cualquier discurso legal en sus campus y cuál es el mejor caso contra tu postura?",
      "¿Es moralmente aceptable priorizar el crecimiento económico durante una emergencia climática y cómo refutarías tu propia respuesta?"
    ]
  },
  {
    prefix:"e",family:"effects",familyLabel:"SEGUNDO Y TERCER EFECTO",topic:"LO QUE OCURRE DESPUÉS DE LO OBVIO",
    prompts:[
      "Si verificar el origen de todo contenido digital fuera instantáneo y perfecto, ¿qué nuevas formas de engaño aparecerían después?",
      "Si trabajar remotamente desde cualquier país no tuviera obstáculos jurídicos, ¿qué problema resolveríamos y cuál trasladaríamos a otra escala?",
      "Si las grandes ciudades redujeran a la mitad sus visitantes, ¿qué mejora visible podría ocultar un costo menos visible?",
      "Si cada persona pudiera borrar de internet toda información verdadera sobre su pasado, ¿qué libertad aumentaría y qué memoria colectiva se volvería negociable?",
      "Si una renta básica eliminara la pobreza extrema, ¿qué reacción económica o política podría debilitar parte de su beneficio inicial?",
      "Si mañana desaparecieran los algoritmos de recomendación, ¿qué industria se adaptaría primero y qué nueva forma de selección ocuparía su lugar?"
    ]
  },
  {
    prefix:"r",family:"patterns",familyLabel:"¿CASUALIDAD O PATRÓN?",topic:"CAUSALIDAD BAJO SOSPECHA",
    prompts:[
      "Tres empresas rivales cometen errores casi idénticos en una semana: ¿qué evidencia convertiría la coincidencia en señal de una causa compartida?",
      "Varias conductas minoritarias se vuelven visibles al mismo tiempo: ¿cómo distinguimos un cambio social de un cambio en la capacidad de observarlo?",
      "Después de dos crisis financieras aparece la misma explicación viral: ¿su repetición aumenta su plausibilidad o solo su disponibilidad mental?",
      "Cinco ciudades registran una caída del delito después de instalar cámaras: ¿qué comparación faltaría antes de atribuirles el cambio?",
      "Dos países con políticas opuestas mejoran el mismo indicador: ¿qué nos obliga a revisar sobre la causa que preferíamos?"
    ]
  },
  {
    prefix:"s",family:"speaker",familyLabel:"QUIÉN LO DICE",topic:"EL PODER DEL EMISOR",
    prompts:[
      "«Tenemos que ser flexibles»: ¿qué obligación distribuye la frase si la dice un empleador y cuál si la dice un empleado?",
      "«Todavía es demasiado pronto para extraer conclusiones»: ¿cuándo expresa rigor y cuándo funciona como una tecnología de la demora?",
      "«Debemos proteger nuestros intereses»: ¿quién queda incluido en «nuestros» y quién desaparece de la frase?",
      "«No queremos politizar este asunto»: ¿qué efecto político puede producir precisamente esa declaración?",
      "«La sociedad no está preparada»: ¿quién se arroga el derecho de hablar por la sociedad y qué decisión intenta posponer?"
    ]
  },
  {
    prefix:"i",family:"personal",familyLabel:"PERSONAL C2",topic:"UNA RESPUESTA QUE NO SEA AUTOMÁTICA",
    prompts:[
      "¿Qué opinión tuya cambió tanto por acumulación que no podés identificar el momento exacto en que dejó de ser la anterior?",
      "¿Qué rasgo que llamás personalidad podría ser una adaptación tan antigua que ya no sabés distinguirla de tu identidad?",
      "¿Qué principio aplicás con mayor indulgencia a tus propias decisiones que a las decisiones ajenas?",
      "¿Qué decisión considerás racional en abstracto pero sospechás que no tomarías si mañana afectara a alguien que amás?",
      "¿Qué versión de vos mismo intentás proteger cuando rechazás una crítica antes de comprobar si es válida?",
      "¿Qué experiencia importante recordás a través de una interpretación que tal vez construiste mucho después?",
      "¿Qué convicción conservarías aunque descubrieras que nació de una razón completamente equivocada?"
    ]
  },
  {
    prefix:"a",family:"brutal",familyLabel:"ABSURDAMENTE DIFÍCIL",topic:"IDEAS SIN SALIDA FÁCIL",
    prompts:[
      "¿Puede una persona interpretar honestamente sus propias motivaciones de manera falsa sin que exista autoengaño deliberado?",
      "¿Sigue siendo libre una decisión cuando todas las alternativas disponibles fueron configuradas por circunstancias que el agente nunca eligió?",
      "¿Comprender por completo las causas de una conducta reduce nuestra capacidad de condenarla o solo modifica dónde colocamos la culpa?",
      "¿Puede describirse neutralmente una práctica intolerable sin que la neutralidad aparente termine normalizándola?",
      "Si dos interpretaciones incompatibles explican toda la evidencia disponible, ¿qué nos autoriza a preferir una sin confundir razonabilidad con verdad?",
      "¿Puede una institución actuar justamente mediante reglas que producen injusticias previsibles en casos individuales?",
      "Si una mentira produce una decisión más informada que una verdad aislada, ¿qué parte de nuestra ética de la comunicación queda en crisis?"
    ]
  },
  {
    prefix:"n",family:"nodepends",familyLabel:"SIN DERECHO A «DEPENDE»",topic:"TOMÁ POSICIÓN Y DESPUÉS MATIZÁ",
    prompts:[
      "Sin usar «depende»: ¿la transparencia aumenta la confianza? Elegí una dirección y defendela.",
      "Sin usar «depende»: ¿la tecnología amplía la libertad humana? Definí primero qué entendés por libertad.",
      "Sin usar «depende»: ¿es posible la neutralidad institucional? Respondé sí o no antes de introducir matices.",
      "Sin usar «depende»: ¿una democracia debe tolerar movimientos que quieren desmantelarla? Fijá un límite.",
      "Sin usar «depende»: ¿el progreso material vuelve mejor a una sociedad? Elegí el criterio con el que aceptarías perder la discusión."
    ]
  },
  {
    prefix:"d",family:"newfact",familyLabel:"EL DATO QUE CAMBIA TODO",topic:"REVISÁ TU RESPUESTA SIN ESCAPAR",
    prompts:[
      "¿Prohibirías los alquileres de menos de treinta días si supieras que el 38 % de los anfitriones usa ese ingreso para pagar su única vivienda?",
      "¿Aceptarías que una IA priorice pacientes si mejora el promedio de espera pero concentra sus errores en un grupo pequeño y predecible?",
      "¿Publicarías inmediatamente una investigación decisiva si sus datos permiten identificar a una comunidad vulnerable?",
      "¿Defenderías una amnistía para cerrar un conflicto si una encuesta fiable mostrara que la mayoría de las víctimas la rechaza?",
      "¿Mantendrías una política climática eficaz si el nuevo dato fuera que sus costos recaen durante diez años sobre los hogares más pobres?"
    ]
  },
  {
    prefix:"h",family:"headline",familyLabel:"EL TITULAR YA ARGUMENTA",topic:"SESGO COMPRIMIDO EN UNA LÍNEA",
    prompts:[
      "«La ciudad recupera viviendas» frente a «la ciudad interviene el mercado»: ¿qué presupone cada titular antes de presentar un solo dato?",
      "«Una IA supera a especialistas» frente a «un ensayo limitado reabre el debate»: ¿qué generalización introduce cada titular?",
      "«Una ola de protestas paraliza la capital» frente a «miles presionan al gobierno»: ¿dónde está la valoración si ambos datos son verdaderos?",
      "«El gobierno cede ante la calle» frente a «el gobierno escucha a la ciudadanía»: ¿qué teoría de la democracia contiene cada verbo?",
      "«Migrantes saturan los servicios» frente a «la ciudad no amplió su infraestructura»: ¿cómo redistribuye cada frase la responsabilidad causal?",
      "«La ciencia confirma» frente a «un estudio sugiere»: ¿cuándo la cautela informa y cuándo reduce artificialmente la importancia del hallazgo?",
      "«Fracasa la negociación» frente a «las partes preservan sus líneas rojas»: ¿qué definición de éxito usa cada encuadre?",
      "«Los mercados castigan al país» frente a «los inversores reducen su exposición»: ¿qué agencia moral añade la primera versión?"
    ]
  },
  {
    prefix:"f",family:"final",familyLabel:"CIERRE SIN PREPARACIÓN",topic:"DIEZ PREGUNTAS PARA CERRAR",
    prompts:[
      "¿Qué afirmación que hiciste hoy cambiarías si tuvieras que defenderla ante una persona directamente afectada?",
      "¿Cuál de tus respuestas dependía de una palabra ambigua y cómo la reformularías ahora con mayor precisión?",
      "Elegí la postura que defendiste con más seguridad: ¿qué evidencia concreta te obligaría a abandonarla?",
      "¿Cuál fue la objeción contraria más fuerte que apareció hoy y qué parte de tu posición sobrevivió?",
      "¿En qué tema confundiste una explicación de lo ocurrido con una justificación de lo ocurrido?",
      "¿Qué pregunta de hoy tenía una presuposición que aceptaste demasiado rápido?",
      "¿Qué tema actual analizaste con un criterio que no aplicarías con la misma dureza a tu propia vida?",
      "Si tuvieras que publicar una sola frase de esta conversación, ¿cuál elegirías y qué matiz añadirías para evitar que se malinterprete?",
      "¿Qué respuesta tuya fue intelectualmente coherente pero emocionalmente poco convincente?",
      "Después de toda la conversación, ¿qué idea sostenés con menos certeza, pero con mejores razones?"
    ]
  }
]);

export const familyOrder=["words","premise","literal","wordshift","opposite","effects","patterns","speaker","personal","brutal","nodepends","newfact","headline","final"] as const;
