import type {PressureQuestion} from "./questions";

export const pulseUpdated="14 SEP 2026";

export const pulseSources={
  reutersBorder:{name:"Reuters · ataque ruso cerca de la frontera polaca",date:"13 sep 2026",url:"https://www.reuters.com/world/china/russia-hits-truck-near-polish-border-latest-strike-near-nato-2026-09-13/"},
  reutersZaporizhzhia:{name:"Reuters · riesgo en la central de Zaporiyia",date:"13 sep 2026",url:"https://www.reuters.com/business/energy/russian-nuclear-head-says-ukraine-attacked-fuel-trucks-endangered-zaporizhzhia-2026-09-13/"},
  reutersDiesel:{name:"Reuters · ataques ucranianos y diésel ruso",date:"13 sep 2026",url:"https://www.reuters.com/business/energy/trump-tells-ukraines-zelenskiy-stop-hitting-russian-diesel-2026-09-13/"},
  reutersSanctions:{name:"Reuters · sanciones ucranianas por propaganda",date:"13 sep 2026",url:"https://www.reuters.com/world/ukraines-zelenskiy-imposes-sanctions-former-press-secretary-2026-09-13/"},
  natoUkraine:{name:"OTAN · apoyo aliado a Ucrania",date:"8 sep 2026",url:"https://www.nato.int/cps/en/natohq/topics_37750.htm"},
  reutersDrills:{name:"Reuters · ejercicios en el Estrecho de Taiwán",date:"23 jul 2026",url:"https://www.reuters.com/world/asia-pacific/china-announces-live-fire-drills-taiwan-strait-2026-07-23/"},
  reutersTraffic:{name:"Reuters · disputa sobre control marítimo",date:"8 ago 2026",url:"https://www.reuters.com/world/china/taipei-says-chinas-traffic-control-order-taiwan-strait-during-typhoon-is-2026-08-08/"},
  reutersReview:{name:"Reuters · evaluación taiwanesa de seguridad",date:"31 ago 2026",url:"https://www.reuters.com/business/aerospace-defense/taiwan-says-unpredictable-china-strengthens-air-sea-control-nearby-2026-08-31/"},
  reutersOkinawa:{name:"Reuters · Okinawa y despliegue japonés",date:"13 sep 2026",url:"https://www.reuters.com/world/china/okinawa-election-win-may-give-tokyo-freer-hand-military-build-up-2026-09-13/"},
  reutersYttrium:{name:"Reuters · itrio y cadenas críticas",date:"13 sep 2026",url:"https://www.reuters.com/commentary/reuters-open-interest/how-obscure-yttrium-became-global-flashpoint-2026-09-13/"},
  reutersOil:{name:"Reuters · petróleo y Estrecho de Ormuz",date:"13 sep 2026",url:"https://www.reuters.com/business/energy/oil-prices-jump-more-than-3-after-new-strikes-saudi-strait-hormuz-2026-09-13/"},
  reutersPipeline:{name:"Reuters · interrupción del oleoducto saudí",date:"13 sep 2026",url:"https://www.reuters.com/business/energy/saudi-pipeline-outage-threatens-loss-4-global-oil-supply-2026-09-13/"},
  reutersYemen:{name:"Reuters · Yemen y Bab el-Mandeb",date:"13 sep 2026",url:"https://www.reuters.com/world/middle-east/houthis-yemen-advance-leaves-gulf-states-with-uncomfortable-choice-2026-09-13/"},
  usgsLatest:{name:"USGS · actividad sísmica reciente",date:"ago–sep 2026",url:"https://earthquake.usgs.gov/earthquakes/map/"},
  usgsFacts:{name:"USGS · hechos y mitos sísmicos",date:"consulta actual",url:"https://www.usgs.gov/programs/earthquake-hazards/earthquake-facts-earthquake-fantasy"},
  usgsTrigger:{name:"USGS · activación sísmica a distancia",date:"consulta actual",url:"https://www.usgs.gov/faqs/can-a-large-earthquake-trigger-earthquakes-distant-locations-or-other-faults"},
  euAiAct:{name:"Comisión Europea · aplicación del AI Act",date:"2 ago 2026",url:"https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"},
  reutersObama:{name:"Reuters · cautela política ante la IA",date:"13 sep 2026",url:"https://www.reuters.com/legal/government/obama-voices-caution-ai-urges-democrats-tackle-it-nyt-says-2026-09-13/"},
  reutersTrump:{name:"Reuters · regulación y liderazgo en IA",date:"13 sep 2026",url:"https://www.reuters.com/world/europe/trump-says-very-negative-forces-raising-exaggerated-concerns-over-ai-2026-09-13/"},
  reutersBrics:{name:"Reuters · cumbre BRICS de Nueva Delhi",date:"13 sep 2026",url:"https://www.reuters.com/business/aerospace-defense/xi-pushes-greater-brics-economic-ties-give-bloc-larger-global-role-2026-09-13/"}
} as const;

type PulseGroup={topic:string;context:string;sourceIds:string[];prompts:string[]};

const pulseGroups:PulseGroup[]=[
  {
    topic:"RUSIA–UCRANIA",
    context:"La invasión rusa de Ucrania continúa en su quinto año. Rusia exige concesiones territoriales; Ucrania las rechaza; siguen los ataques a infraestructura, las sanciones y los intentos de mediación.",
    sourceIds:["reutersBorder","reutersZaporizhzhia","reutersDiesel","natoUkraine"],
    prompts:[
      "Rusia exige que Ucrania ceda el Donbás para avanzar hacia un acuerdo: ¿cuándo una concesión territorial es pragmatismo y cuándo recompensa una invasión?",
      "Ucrania ataca refinerías rusas para debilitar la capacidad económica de Moscú: ¿es un objetivo militar legítimo si también encarece el combustible fuera de la guerra?",
      "Donald Trump pidió a Volodímir Zelenski que frenara los ataques contra el diésel ruso por su impacto global: ¿qué derecho tiene un aliado a limitar cómo otro país se defiende?",
      "Rusia atacó infraestructura ucraniana cerca de la frontera con Polonia: ¿la proximidad física a la OTAN aumenta la disuasión o multiplica el riesgo de un error de cálculo?",
      "Rusia controla la central nuclear de Zaporiyia y ambos bandos se acusan de ponerla en peligro: ¿quién debería asumir la mayor carga de demostrar que actúa responsablemente?",
      "La OTAN financia y equipa a Ucrania mientras algunos de sus miembros apoyan negociaciones: ¿se puede ser parte material del conflicto y mediador creíble al mismo tiempo?",
      "India y China ofrecen impulsar conversaciones mientras mantienen relaciones estratégicas con Rusia: ¿esa cercanía invalida su mediación o precisamente les da capacidad para influir?",
      "Después de más de cuatro años de guerra, ¿qué condiciones permitirían llamar «paz» a un alto el fuego y no solamente «pausa»?"
    ]
  },
  {
    topic:"CHINA–TAIWÁN",
    context:"China intensificó ejercicios, patrullas y reclamos de control alrededor de Taiwán. Taipéi los describe como presión desestabilizadora; Pekín sostiene que actúa dentro de su soberanía.",
    sourceIds:["reutersDrills","reutersTraffic","reutersReview","reutersOkinawa"],
    prompts:[
      "China llama «ejercicios legítimos» a maniobras con fuego real alrededor de Taiwán; Taipéi las llama «presión desestabilizadora»: ¿qué evidencia permitiría distinguir entrenamiento de preparación ofensiva?",
      "Durante un tifón, China y Taiwán disputaron quién podía ordenar controles al tráfico del Estrecho: ¿una medida técnicamente útil puede ser también una operación de soberanía?",
      "Si las patrullas chinas dejan de ser excepcionales por repetirse cada semana, ¿en qué momento cambia la realidad aunque no cambie el derecho internacional?",
      "Japón estudia reforzar islas próximas a Taiwán mientras residentes de Okinawa rechazan más presencia militar: ¿quién debería decidir qué riesgo local es aceptable por seguridad nacional?",
      "La ambigüedad sobre si Estados Unidos defendería Taiwán pretende disuadir a China: ¿una amenaza ambigua reduce el conflicto o hace más peligroso interpretar cada señal?",
      "Taiwán produce una parte decisiva de los semiconductores avanzados: ¿esa dependencia mundial lo protege o lo convierte en un objetivo todavía más estratégico?",
      "Pekín habla de «reunificación» y muchos gobiernos occidentales hablan de «invasión»: ¿qué futuro político intenta volver normal cada palabra antes de que ocurra?"
    ]
  },
  {
    topic:"GUERRA, PETRÓLEO Y RUTAS",
    context:"El crudo superó los US$100 tras ataques y restricciones sobre infraestructura saudí, el Estrecho de Ormuz y Bab el-Mandeb. Un oleoducto alternativo llegó a poner en riesgo cerca del 4 % del suministro mundial.",
    sourceIds:["reutersOil","reutersPipeline","reutersYemen"],
    prompts:[
      "El petróleo volvió a superar los US$100 por la guerra y los ataques a rutas energéticas: ¿el precio demuestra qué causó el conflicto o solo revela quién puede beneficiarse de él?",
      "Un ataque al oleoducto saudí Este–Oeste amenazó cerca del 4 % del suministro mundial: ¿una ruta alternativa aumenta la resiliencia o crea una segunda vulnerabilidad?",
      "Los hutíes ampliaron su capacidad de interrumpir Bab el-Mandeb: ¿controlar la posibilidad de bloquear una ruta equivale a controlar la ruta?",
      "Si un actor armado pequeño puede alterar inflación, transporte y tasas de interés en países lejanos, ¿cómo debería cambiar nuestra definición de poder geopolítico?",
      "Cuando los gobiernos liberan reservas de petróleo para bajar precios durante una guerra, ¿protegen a la población o reducen el costo político de prolongar el conflicto?",
      "Si la transición energética reduce el uso de petróleo pero aumenta la dependencia de minerales y redes eléctricas, ¿desaparece la geopolítica de los recursos o solamente cambia de objeto?"
    ]
  },
  {
    topic:"TERREMOTOS Y CAUSALIDAD",
    context:"En pocas semanas se registraron sismos fuertes en Indonesia y Perú. USGS advierte que la cercanía temporal no basta para afirmar una conexión física, aunque ciertos grandes sismos pueden activar actividad distante en zonas vulnerables.",
    sourceIds:["usgsLatest","usgsFacts","usgsTrigger"],
    prompts:[
      "Hubo terremotos fuertes en Indonesia y Perú con pocas semanas de diferencia: ¿qué evidencia necesitaríamos para hablar de una secuencia conectada y no de una coincidencia llamativa?",
      "Si dos terremotos ocurren cerca en el calendario pero lejos en placas tectónicas distintas, ¿por qué la mente humana sigue prefiriendo una explicación común?",
      "USGS acepta que un gran sismo puede activar actividad a distancia en zonas ya vulnerables: ¿cómo comunicarías esa posibilidad sin convertir «posible» en «probable»?",
      "Cuando los medios cubren varios terremotos seguidos, ¿pueden fabricar la percepción de una tendencia aun publicando solamente datos verdaderos?",
      "¿Qué dato concreto debería hacer que un científico cambie públicamente de «no hay evidencia de conexión» a «vale la pena investigar una relación»?"
    ]
  },
  {
    topic:"IA, REGULACIÓN Y DEEPFAKES",
    context:"El AI Act europeo empezó a aplicarse de forma general en agosto de 2026, con calendarios distintos para algunas obligaciones. Al mismo tiempo, continúa la disputa política sobre si regular protege o frena la competencia tecnológica.",
    sourceIds:["euAiAct","reutersObama","reutersTrump"],
    prompts:[
      "El AI Act europeo ya está en aplicación general: ¿regular antes de comprender todos los riesgos es prudencia institucional o legislación sobre una tecnología que ya cambió?",
      "Etiquetar un video como «generado por IA» informa al público, pero no evita el daño: ¿cuándo una etiqueta protege y cuándo funciona como excusa regulatoria?",
      "Estados Unidos debate si los controles sobre IA ceden ventaja estratégica a China: ¿cómo distinguir un argumento de seguridad pública de uno de supremacía tecnológica?",
      "Si una IA produce una respuesta correcta mediante un razonamiento que nadie puede reconstruir, ¿en qué ámbitos debería bastar el resultado y en cuáles no?",
      "Cuando una empresa reemplaza tareas con IA pero no elimina empleos inmediatamente, ¿qué indicador permitiría saber si está aumentando capacidades o preparando una sustitución?"
    ]
  },
  {
    topic:"MINERALES, CHIPS Y DEPENDENCIA",
    context:"Las restricciones chinas sobre itrio expusieron dependencias de Estados Unidos y Japón. El metal es relevante para industrias aeroespaciales, energéticas y de semiconductores, mientras Taiwán concentra producción avanzada de chips.",
    sourceIds:["reutersYttrium","reutersReview"],
    prompts:[
      "China domina el suministro de itrio y puede restringirlo selectivamente: ¿la interdependencia económica previene un conflicto o ofrece más instrumentos de coerción antes de que empiece?",
      "Japón y Estados Unidos buscan cadenas alternativas de minerales críticos: ¿reducir dependencia aumenta la seguridad o acelera la formación de bloques rivales?",
      "Si un mineral desconocido para casi todo el público puede detener industrias estratégicas, ¿qué otras dependencias invisibles deberían tratarse como asuntos de seguridad nacional?",
      "¿Qué es más riesgoso: depender de China para minerales críticos o depender de Taiwán para chips avanzados, y con qué criterio compararías dos vulnerabilidades tan distintas?"
    ]
  },
  {
    topic:"BRICS Y ORDEN MUNDIAL",
    context:"La cumbre BRICS de Nueva Delhi impulsó una cooperación ampliada en comercio, finanzas, política e IA. El bloque reúne potencias con intereses distintos que reivindican un orden más multipolar.",
    sourceIds:["reutersBrics"],
    prompts:[
      "BRICS afirma representar un orden mundial más multipolar: ¿distribuir poder entre más Estados vuelve el sistema más justo o solamente multiplica los centros de poder?",
      "China propuso una zona BRICS de IA de código abierto: ¿compartir tecnología dentro de un bloque reduce desigualdades o crea una dependencia con nueva marca?",
      "Países con regímenes, alianzas y rivalidades muy diferentes comparten BRICS: ¿esa diversidad demuestra fuerza diplomática o limita la capacidad de actuar juntos?"
    ]
  },
  {
    topic:"SEGURIDAD, PROPAGANDA Y CENSURA",
    context:"Ucrania sancionó por diez años a varias personas acusadas de difundir propaganda rusa, incluida una ex secretaria de prensa presidencial que afirma haber sido castigada por sus críticas.",
    sourceIds:["reutersSanctions"],
    prompts:[
      "Ucrania sancionó a ciudadanos acusados de difundir propaganda rusa durante una invasión: ¿qué criterio separa defensa nacional de censura política?",
      "Si una crítica verdadera puede ser utilizada por la propaganda enemiga, ¿su utilidad para el adversario cambia el derecho a publicarla?"
    ]
  }
];

let pulseIndex=0;
export const pulseQuestions:PressureQuestion[]=pulseGroups.flatMap(group=>group.prompts.map(prompt=>({
  id:`u${String(++pulseIndex).padStart(2,"0")}`,
  family:"pulse",
  familyLabel:"PULSO ACTUAL",
  topic:group.topic,
  context:group.context,
  prompt,
  sourceIds:group.sourceIds
})));
