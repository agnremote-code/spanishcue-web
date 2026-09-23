Warning: truncated output (original token count: 20032)
Total output lines: 305

import { additionalSamples } from "./additional-samples";
import { boardLessonEntries } from "./boards/catalog-adapter";
import { conversationLessons } from "./conversation-worlds/catalog";
import { verbalLessons } from "./verbal-system/lesson-data";
export type Category = "Gramática" | "Conversación" | "Escucha" | "Fonética" | "Vocabulario";
export type Lesson = { id:number; level:string; levels?:string[]; displayLevel?:string; category:Category; conversationMode?:"worlds"|"play"|"boards"; collection?:string; countryCollection?:boolean; countrySequence?:number; searchAliases?:string[]; verbalSystem?:boolean; verbalMood?:string; temporalPlane?:string; productiveStatus?:string; title:string; subtitle:string; duration:string; tag:string; goals:string[]; warmup:string; explanation:string; practice:string[]; speaking:string[]; homework:string; special?:boolean; path?:string; image:string; curriculumOrder?:number; curriculumSequence?:number; routeOrder:number; routeSequence:number; requires?:number[] };
export type LessonSource = Omit<Lesson,"image"|"curriculumSequence"|"routeOrder"|"routeSequence"> & { image?:string };

const lessonPreviews:Record<number,string> = {
  156:"/subjuntivo/wonderland-garden.webp",
  155:"/subjuntivo/wonderland-garden.webp",
  154:"/past-b1/surf-indefinido.webp",
  153:"/catalog-thumbnails/future-city.webp",
  152:"/catalog-thumbnails/conditional-multiverse.webp",
  151:"/subjuntivo/alicia-hero.webp",
  150:"/subjuntivo/wonderland-garden.webp",
  149:"/subjuntivo/alicia-hero.webp",
  148:"/subjuntivo/alicia-hero.webp",
  147:"/past-b1/surf-perfecto.webp",
  146:"/catalog-thumbnails/conditionals-path.webp",
  145:"/la-isla-vota/island-command-table-v1.webp",
  144:"/catalog-thumbnails/future-city.webp",
  143:"/past-b1/surf-imperfecto.webp",
  142:"/past-b1/surf-indefinido.webp",
  141:"/past-b1/surf-perfecto.webp",
  140:"/grammar-worlds/verb-city.webp",
  139:"/play-mode/ciudad-en-juego.webp",
  138:"/play-mode/y-ahora-que.webp",
  137:"/play-mode/uno-o-el-otro.webp",
  136:"/conversation-premium/camara-presion.webp",
  135:"/listening-premium/frecuencia-abierta.webp",
  134:"/listening-premium/entrevista-no-salio.webp",
  133:"/listening-premium/habitacion-508.webp",
  132:"/listening-premium/radio-medianoche.webp",
  131:"/listening-premium/ultima-llamada.webp",
  130:"/listening-premium/edificio-voces.webp",
  129:"/conversation-premium/ministerio-versiones.webp",
  128:"/conversation-premium/agencia-vidas-paralelas.webp",
  127:"/conversation-premium/protocolo-aurora.webp",
  126:"/conversation-premium/noche-siete-llamadas.webp",
  125:"/conversation-premium/mesa-tres-ofertas.webp",
  124:"/conversation-premium/mensajes-fuera-de-contexto.webp",
  123:"/conversation-premium/en-vivo-diez-minutos.webp",
  122:"/conversation-premium/teatro-coartadas.webp",
  121:"/conversation-premium/cine-tres-funciones.webp",
  120:"/conversation-premium/invitaciones-cruzadas.webp",
  119:"/catalog-thumbnails/action-camera.webp",
  118:"/catalog-thumbnails/two-readings-archive.webp",
  117:"/catalog-thumbnails/connection-panel.webp",
  116:"/catalog-thumbnails/editor-table.webp",
  115:"/catalog-thumbnails/change-line.webp",
  114:"/catalog-thumbnails/second-version-lab.webp",
  113:"/catalog-thumbnails/positions-gallery.webp",
  112:"/catalog-thumbnails/detail-studio.webp",
  111:"/catalog-thumbnails/sentence-assembly.webp",
  110:"/catalog-thumbnails/layers-workshop.webp",
  109:"/la-isla-vota/island-command-table-v1.webp",
  108:"/previews/word-bank-studio-v91.webp",
  3:"/grammar-worlds/verb-city.webp",
  11:"/catalog-thumbnails/advanced-dialogue.webp",
  13:"/catalog-thumbnails/conversation-choice.webp",
  14:"/catalog-thumbnails/conversation-a2.webp",
  15:"/catalog-thumbnails/conversation-a1.webp",
  16:"/chespanish-guide-van.webp",
  17:"/catalog-thumbnails/life-wheel.webp",
  18:"/past-b1/surf-indefinido.webp",
  19:"/buenos-aires-cotidiana/atlas-1.webp",
  20:"/kingdom-world-bg.webp",
  21:"/kingdom-world-bg.webp",
  22:"/catalog-thumbnails/future-city.webp",
  23:"/catalog-thumbnails/conditional-multiverse.webp",
  24:"/indonesia-fantasy-hero.webp",
  25:"/israel-b1-hero.webp",
  26:"/usa-basic-hero.webp",
  27:"/og.png",
  28:"/brand/spanishcue-global-stage.webp",
  29:"/suiza-en-relieve-hero.webp",
  30:"/australia-3d-hero.webp",
  31:"/catalog-thumbnails/conditionals-path.webp",
  32:"/catalog-thumbnails/uk-relief.webp",
  33:"/catalog-thumbnails/ireland-relief.webp",
  34:"/monastery-ideas-3d.webp",
  36:"/catalog-thumbnails/us-relief.webp",
  37:"/subjuntivo/alicia-hero.webp",
  38:"/catalog-thumbnails/mouth-lab.webp",
  39:"/buenos-aires-cotidiana/city.webp",
  40:"/previews/noun-studio-v91.webp",
  41:"/previews/agreement-studio-v91.webp",
  42:"/grammar-worlds/article-gallery.webp",
  43:"/grammar-worlds/demonstrative-observatory.webp",
  44:"/grammar-worlds/possession-house.webp",
  45:"/grammar-worlds/quantity-market.webp",
  46:"/grammar-worlds/pronoun-central.webp",
  47:"/grammar-worlds/adverb-tower.webp",
  48:"/grammar-worlds/verb-city.webp",
  101:"/conversation-worlds/elimination-machine.webp",
  102:"/conversation-worlds/absurd-universe.webp",
  103:"/conversation-worlds/elimination-machine.webp",
  104:"/conversation-worlds/absurd-universe.webp",
  105:"/hotel-imposible/lobby.webp",
  106:"/objetos-pronombres/estacion-hero.webp",
  107:"/grammar-worlds/verb-city.webp",
  201:"/catalog-thumbnails/vowel-resonance.webp",
  202:"/catalog-thumbnails/spanish-rhythm.webp",
  203:"/monastery-worlds/03-biblioteca.webp",
  204:"/catalog-thumbnails/everyday-words.webp",
  207:"/play-mode/red-flag-o-no/a2.webp",
  208:"/play-mode/red-flag-o-no/b1.webp",
  209:"/play-mode/red-flag-o-no/b2.webp",
  210:"/catalog-thumbnails/mexico-relief.svg",
};

const categoryPreviews:Record<Category,string> = {
  "Gramática":"/grammar-worlds/noun-factory.webp",
  "Conversación":"/catalog-thumbnails/conversation-choice.webp",
  "Escucha":"/brand/spanishcue-global-stage.webp",
  "Fonética":"/catalog-thumbnails/vowel-resonance.webp",
  "Vocabulario":"/catalog-thumbnails/everyday-words.webp",
};

const countryLessonIds = new Set([19, 24, 25, 26, 27, 29, 30, 32, 33, 36, 39, 210]);

function withPreview(lesson:LessonSource):LessonSource & {image:string;countryCollection:boolean} {
  return {...lesson,countryCollection:countryLessonIds.has(lesson.id),image:lessonPreviews[lesson.id]||lesson.image||categoryPreviews[lesson.category]};
}

const boardLessonIds = [205,206] as const;

const lessonSources:LessonSource[] = [
  {id:216,level:"B1",category:"Conversación",conversationMode:"play",collection:"Modo Play",title:"Entrenador personal",subtitle:"Convertite en entrenador y dirigí una sesión completa con decenas de imperativos afirmativos y negativos",duration:"≈ 45 min",tag:"MODO PLAY · IMPERATIVO · 8 ESTACIONES · DESAFÍO FINAL",special:true,path:"/entrenador-personal",image:"/entrenador-personal/hero.webp",searchAliases:["entrenador","gimnasio","imperativo","órdenes","ejercicio","rutina","salud"],goals:["Dar órdenes directas con imperativos afirmativos y negativos","Reaccionar rápidamente ante errores y situaciones de entrenamiento","Dirigir una sesión completa sin recurrir a perífrasis de consejo"],warmup:"Soy tu cliente y acabo de llegar al gimnasio. Preparame para entrenar usando solamente órdenes.",explanation:"Una experiencia por estaciones dentro de un gimnasio moderno. El alumno es el entrenador, el profesor es el cliente y cada pantalla provoca nuevas órdenes orales con contadores manuales.",practice:[],speaking:["Preparame para entrenar desde que entro al gimnasio","Corregí mis errores usando solamente órdenes","Organizame cuatro días de entrenamiento y tres de recuperación"],homework:""},
  {id:215,level:"B1",category:"Conversación",conversationMode:"play",collection:"Exploración visual",title:"La vida después de los 30",subtitle:"Explorá diez zonas del cuerpo y elegí entre 50 preguntas para comparar etapas, contar experiencias y hablar de tus planes",duration:"≈ 45 min",tag:"EXPLORACIÓN VISUAL · 10 ZONAS · 50 PREGUNTAS",special:true,path:"/la-vida-despues-de-los-30",image:"/vida-despues-30/portrait.webp",searchAliases:["vida adulta","treinta","prioridades","familia","trabajo","estabilidad","cuerpo"],goals:["Comparar experiencias y hábitos de distintas etapas de la vida","Expresar opiniones personales y justificarlas con una razón y un ejemplo","Hablar de deseos, planes y cambios en la vida adulta"],warmup:"¿Qué cambia en la vida después de los 30? También podés responder desde tus expectativas o un caso imaginario.",explanation:"El cuerpo funciona como mapa: elegí una zona, acercate con el zoom y abrí una de sus cinco preguntas. La clase permite elegir temas, marcar preguntas conversadas y cerrar con una comparación entre el pasado y los planes de futuro.",practice:[],speaking:["¿Qué cambió más en tus prioridades después de los 30?","¿Qué valorás más hoy en una amistad?","¿En qué área de tu vida buscás más estabilidad?"],homework:""},
  ...boardLessonEntries.map((entry,index):LessonSource=>({
    ...entry,
    goals:[...entry.goals],
    practice:[...entry.practice],
    speaking:[...entry.speaking],
    id:boardLessonIds[index],
    image:index === 0
      ? "/catalog-thumbnails/conversation-choice.webp"
      : "/catalog-thumbnails/advanced-dialogue.webp",
  })),
  ...verbalLessons.map((lesson):LessonSource=>({
    id:lesson.id,
    level:lesson.level,
    levels:lesson.levels,
    category:"Gramática",
    verbalSystem:true,
    verbalMood:lesson.mood,
    temporalPlane:lesson.temporalPlane,
    productiveStatus:lesson.productiveStatus,
    title:lesson.title,
    subtitle:lesson.question,
    duration:lesson.duration,
    tag:`${lesson.mood} · ${lesson.plane} · ${lesson.status}`,
    special:true,
    path:lesson.route,
    goals:[`Comprender la perspectiva de ${lesson.title.toLowerCase()}`,"Construir la forma y contrastarla con alternativas cercanas","Usarla o reconocerla según su vigencia actual"],
    warmup:lesson.question,
    explanation:lesson.core,
    practice:[],
    speaking:lesson.conversation.map(item=>item.question),
    homework:"",
    curriculumOrder:lesson.curriculumOrder,
    requires:lesson.requires,
  })),
  {id:207,level:"A2",category:"Conversación",conversationMode:"play",title:"Red Flag o No · A2",subtitle:"18 situaciones de citas y relaciones para elegir una señal, explicar por qué y hablar sin respuestas correctas",duration:"≈ 45 min",tag:"MODO PLAY · 18 SITUACIONES · ELEGIR",special:true,path:"/red-flag-o-no-a2",image:"/play-mode/red-flag-o-no/a2.webp",goals:["Expresar una opinión breve y justificarla con una razón","Hablar de hábitos, límites y comportamientos cotidianos","Reaccionar a una repregunta con ejemplos personales"],warmup:"¿Qué significa para vos una red flag? ¿Y una green flag?",explanation:"Una situación por pantalla, dos elecciones sin respuesta correcta y una repregunta opcional. Incluye calentamiento, tres rondas progresivas y conversación final.",practice:[],speaking:[],homework:""},
  {id:208,level:"B1",category:"Conversación",conversationMode:"play",title:"Red Flag o No · B1",subtitle:"18 señales discutibles para evaluar conductas, considerar el contexto y defender límites en una relación",duration:"≈ 45 min",tag:"MODO PLAY · 18 SITUACIONES · CONTEXTO",special:true,path:"/red-flag-o-no-b1",image:"/play-mode/red-flag-o-no/b1.webp",goals:["Justificar una interpretación con matices y ejemplos","Evaluar cómo el contexto puede cambiar una primera reacción","Proponer conversaciones, límites y segundas oportunidades"],warmup:"¿Una red flag se ve desde el principio o aparece con el tiempo?",explanation:"Una situación por pantalla, dos elecciones sin respuesta correcta y una repregunta opcional. Incluye calentamiento, tres rondas progresivas y conversación final.",practice:[],speaking:[],homework:""},
  {id:209,level:"B2",category:"Conversación",conversationMode:"play",title:"Red Flag o No · B2",subtitle:"18 tensiones ambiguas para distinguir privacidad, intención, impacto, incompatibilidad y señales de alarma",duration:"≈ 45 min",tag:"MODO PLAY · 18 SITUACIONES · MATIZAR",special:true,path:"/red-flag-o-no-b2",image:"/play-mode/red-flag-o-no/b2.webp",goals:["Distinguir intención, impacto, privacidad y secreto","Sostener una postura provisional ante información ambigua","Formular límites y revisar una decisión según el contexto"],warmup:"¿Qué diferencia hay entre una señal de alarma, una incompatibilidad y un límite personal?",explanation:"Una situación por pantalla, dos elecciones sin respuesta correcta y una repregunta opcional. Incluye calentamiento, tres rondas progresivas y conversación final.",practice:[],speaking:[],homework:""},
  {id:139,level:"B1",category:"Conversación",conversationMode:"play",title:"Ciudad en juego",subtitle:"Construí una ciudad con elecciones, prioridades, problemas, negociaciones y cambios que obligan a defender cada decisión",duration:"≈ 45 min",tag:"MODO PLAY · 84 DISPARADORES · CONSTRUIR",special:true,path:"/ciudad-en-juego",image:"/play-mode/ciudad-en-juego.webp",goals:["Priorizar servicios y justificar decisiones urbanas","Negociar intereses opuestos y proponer acuerdos con condiciones","Revisar una postura ante costos, consecuencias y eventos inesperados"],warmup:"Más parques o más viviendas: elegí primero y defendé el costo después.",explanation:"Siete niveles conversacionales y un banco reutilizable de 84 disparadores: elecciones, rankings, conflictos urbanos, negociaciones, cambios de regla, eventos sorpresa y una presentación final de la ciudad.",practice:[],speaking:[],homework:""},
  {id:138,level:"B1",category:"Conversación",conversationMode:"play",title:"¿Y ahora qué?",subtitle:"Un banco reutilizable de problemas cotidianos, chats progresivos y consecuencias inesperadas para decidir, aconsejar y negociar hablando",duration:"≈ 45 min",tag:"MODO PLAY · 40 SITUACIONES · 10 CHATS",special:true,path:"/modo-play-y-ahora-que",image:"/play-mode/y-ahora-que.webp",goals:["Explicar decisiones y anticipar consecuencias sencillas","Dar consejos y ofrecer alternativas ante una objeción","Resolver desacuerdos cotidianos con lenguaje directo o diplomático"],warmup:"Llegás treinta minutos tarde a una cena. ¿Qué hacés?",explanation:"Siete niveles conversacionales y dos modos de uso: una sesión equilibrada de 12 jugadas para 45 minutos o acceso libre al banco completo de situaciones, chats, consecuencias, consejos, historias y conversación final.",practice:[],speaking:[],homework:""},
  {id:137,level:"B1",category:"Conversación",conversationMode:"play",title:"Uno o el otro",subtitle:"Un banco reutilizable de elecciones que se convierten en razones, cambios de regla, comparaciones, rankings y una vida ideal que hay que defender",duration:"≈ 45 min",tag:"MODO PLAY · 48 ELECCIONES · DEFENDER",special:true,path:"/modo-play-uno-o-el-otro",image:"/play-mode/uno-o-el-otro.webp",goals:["Expresar y justificar preferencias cotidianas","Comparar ventajas y desventajas con ejemplos","Mantener o cambiar una postura cuando aparece una condición nueva"],warmup:"Ciudad o campo: elegí primero y explicá después.",explanation:"Banco de 48 elecciones filtrables, con seis rondas de dificultad creciente: decisión instantánea, justificación, doble cambio, descarte, ranking y conversación libre sobre una vida ideal.",practice:[],speaking:[],homework:""},
  {id:136,level:"C2",category:"Conversación",title:"La Cámara de Presión",subtitle:"130 preguntas directas sobre Rusia–Ucrania, China–Taiwán, petróleo, terremotos, IA, lenguaje, ética, pensamiento abstracto y vida personal",duration:"≈ 45 min",tag:"C2 · 130 PREGUNTAS · ACTUALIDAD DIRECTA",special:true,path:"/la-camara-de-presion",image:"/conversation-premium/camara-presion.webp",goals:["Argumentar y contraargumentar sobre temas actuales nombrados directamente","Cuestionar premisas, implicaturas y relaciones causales con precisión","Reformular una posición al cambiar evidencia, alcance o perspectiva"],warmup:"Abre la primera pregunta y conversa: cada siguiente pregunta ya está escrita.",explanation:"Un banco reutilizable de 90 preguntas evergreen y 40 preguntas de actualidad verificadas. Una pregunta protagonista por pantalla, secuencia automática y cierre listo: el profesor no tiene que inventar repreguntas ni escribir nada.",practice:[],speaking:[],homework:""},
  {id:135,level:"C2",category:"Escucha",title:"Frecuencia Abierta",subtitle:"Seis señales, ambigüedad, solapamiento e intención para construir y revisar una postura sobre el trabajo flexible",duration:"≈ 45 min",tag:"C2 · AMBIGÜEDAD · ENTONACIÓN · CONTRAARGUMENTO",special:true,path:"/frecuencia-abierta",image:"/listening-premium/frecuencia-abierta.webp",goals:["Inferir postura, intención y grado de compromiso en voces diversas","Interpretar solapamientos, implícitos y matices de entonación","Integrar una contraseñal y reformular una conclusión compleja"],warmup:"¿El trabajo flexible da autonomía o alarga la jornada? Formulá una primera hipótesis.",explanation:"Una instalación sonora C2 con seis fuentes, un laboratorio de cinco intenciones, una contraseñal final y una mesa oral de diez minutos.",practice:[],speaking:[],homework:""},
  {id:134,level:"C1",category:"Escucha",title:"La Entrevista que no Salió al Aire",subtitle:"Cinco fragmentos sin editar para detectar evasión, cambio de registro, ironía y la frase que reinterpreta todo",duration:"≈ 45 min",tag:"C1 · SUBTEXTO · IRONÍA · EDICIÓN",special:true,path:"/la-entrevista-que-no-salio-al-aire",image:"/listening-premium/entrevista-no-salio.webp",goals:["Distinguir respuestas directas de estrategias evasivas","Interpretar ironía, eufemismo y cambios de registro","Editar tres fragmentos y defender un encuadre justo"],warmup:"¿Una entrevista editada puede ser fiel aunque no publique todas las respuestas?",explanation:"Una sala de edición C1 con material bruto ficticio, decisiones de montaje, dos titulares opuestos y conversación crítica final.",practice:[],speaking:[],homework:""},
  {id:133,level:"B2",category:"Escucha",title:"Habitación 508",subtitle:"Seis testimonios de hotel para ordenar una cadena de fallos, distinguir versiones y formular una respuesta profesional",duration:"≈ 45 min",tag:"B2 · TESTIMONIOS · CAUSA · REPARACIÓN",special:true,path:"/habitacion-508",image:"/listening-premium/habitacion-508.webp",goals:["Reconstruir una secuencia a partir de testimonios parciales","Distinguir hechos, inferencias y responsabilidades compartidas","Proponer y evaluar una reparación profesional"],warmup:"Cuando un servicio falla, ¿importa más explicar, compensar o evitar que vuelva a ocurrir?",explanation:"Un expediente B2 con seis voces del hotel, cronología manipulable, resolución real y una conversación sobre servicio, error y reputación.",practice:[],speaking:[],homework:""},
  {id:132,level:"B1",category:"Escucha",title:"Radio Después de Medianoche",subtitle:"Cinco oyentes llaman con historias cotidianas para captar el giro, valorar credibilidad y responder a la presentadora",duration:"≈ 45 min",tag:"B1 · HISTORIAS · GIRO · REACCIÓN",special:true,path:"/radio-despues-de-medianoche",image:"/listening-premium/radio-medianoche.webp",goals:["Comprender la secuencia y el giro de una historia oral","Identificar actitud, resultado y detalles relevantes","Reaccionar, repreguntar y contar una experiencia propia"],warmup:"¿Qué hace que una historia cotidiana merezca entrar en un programa nocturno?",explanation:"Un estudio de radio B1 con cinco llamadas, preguntas reales de la presentadora y un micrófono abierto final para narrar experiencias.",practice:[],speaking:[],homework:""},
  {id:131,level:"A2",category:"Escucha",title:"Última Llamada",subtitle:"Seis mensajes de una terminal para localizar datos, conectar señales y decidir qué hacer antes de que cierre el embarque",duration:"≈ 45 min",tag:"A2 · MENSAJES · DATOS · DECISIÓN",special:true,path:"/ultima-llamada",image:"/listening-premium/ultima-llamada.webp",goals:["Localizar horarios, lugares y cambios en mensajes breves","Relacionar información de distintos canales y hablantes","Explicar una decisión sencilla bajo presión de tiempo"],warmup:"Estás en una terminal y cambian la puerta: ¿qué información buscás primero?",explanation:"Una terminal A2 en tiempo real con altavoz, notas de voz y diálogos que convergen en una decisión final antes del embarque.",practice:[],speaking:[],homework:""},
  {id:130,level:"A1",category:"Escucha",title:"El Edificio de las Voces",subtitle:"Seis vecinos detrás del portero para reconocer datos básicos y resolver a quién pertenece un paquete",duration:"≈ 45 min",tag:"A1 · VOCES BREVES · DATOS · VECINOS",special:true,path:"/el-edificio-de-las-voces",image:"/listening-premium/edificio-voces.webp",goals:["Reconocer nombre, piso, horario y actividad en audios breves","Comprender presentaciones y mensajes cotidianos claros","Usar datos escuchados para identificar a una persona"],warmup:"¿Qué datos simples te ayudan a reconocer a un vecino sin verlo?",explanation:"Un portero interactivo A1 con seis voces adultas, una pista por audio y un paquete final que exige conectar la información escuchada.",practice:[],speaking:[],homework:""},
  {id:129,level:"C2",category:"Conversación",title:"El Ministerio de las Versiones",subtitle:"Cinco casos, relatos incompatibles y un archivo de subtexto para inferir intención, cuestionar fuentes y negociar significado",duration:"≈ 45 min",tag:"C2 · SESGO · SUBTEXTO · REGISTRO",special:true,path:"/el-ministerio-de-las-versiones",image:"/conversation-premium/ministerio-versiones.webp",goals:["Inferir intención y modular certeza ante versiones contradictorias","Interpretar subtexto, ironía, eufemismo y registro con precisión","Reformular un mismo hecho para cambiar tono sin falsearlo"],warmup:"¿Puede alguien recordar un hecho con absoluta sinceridad y contarlo de manera engañosa?",explanation:"Un thriller lingüístico C2 con cuatro casos progresivos, un juego de cuatro registros y un expediente final deliberadamente ambiguo que exige defender y revisar una conclusión.",practice:[],speaking:[],homework:""},
  {id:128,level:"C1",category:"Conversación",title:"La Agencia de Vidas Paralelas",subtitle:"Seis decisiones abren vidas alternativas con consecuencias, costos ocultos y una única modificación que altera todo lo demás",duration:"≈ 45 min",tag:"C1 · ESPECULAR · MATIZAR · RECONSIDERAR",special:true,path:"/la-agencia-de-vidas-paralelas",image:"/conversation-premium/agencia-vidas-paralelas.webp",goals:["Construir hipótesis complejas y comparar consecuencias posibles","Justificar decisiones, introducir reservas y reconocer contradicciones","Reformular una postura cuando aparece un costo oculto"],warmup:"¿Una vida alternativa revela lo que deseamos o solo lo que hoy echamos de menos?",explanation:"Una agencia cinematográfica C1 con seis expedientes en tres capas, entrevistas a versiones alternativas y una modificación final que obliga a negociar pérdidas y ganancias.",practice:[],speaking:[],homework:""},
  {id:127,level:"B2",category:"Conversación",title:"El Protocolo Aurora",subtitle:"Cinco decisiones científicas crean precedentes que deberán sobrevivir a consecuencias futuras, objeciones y una orden final",duration:"≈ 45 min",tag:"B2 · ARGUMENTAR · ESPECULAR · REVISAR",special:true,path:"/el-protocolo-aurora",image:"/conversation-premium/protocolo-aurora.webp",goals:["Defender principios y reconocer contradicciones","Negociar condiciones ante intereses opuestos","Especular sobre consecuencias y revisar una postura con coherencia"],warmup:"Elige qué debería guiar una misión ante lo desconocido y di qué podría hacerte cambiar.…8032 tokens truncated…f con labio inferior y dientes superiores; t/d con la lengua cerca de los dientes superiores; n/l con la punta detrás de ellos; ñ con la zona media hacia el paladar; j con fricción posterior. Elegí dos grupos y practicá sílaba → palabra → frase.","Acento y ritmo · Marcá la sílaba tónica de teléfono, canción, difícil y rápidamente. Después repetí «Mañana llamo a María» y «Quiero reservar una habitación», primero con palmas y luego sin apoyo.","Circuito de transferencia · Elegí cinco palabras con tu sonido objetivo. Hacé tres rondas: lectura precisa, frase propia y respuesta espontánea. Si el sonido se pierde, volvé un nivel y repetí."],speaking:["Escalera de claridad · Explicá cómo se produce tu sonido objetivo usando labios, lengua, dientes, aire y voz.","Detector de contrastes · El profesor dice una palabra de cada par (pero/perro, caro/carro); identificá cuál escuchaste y usala en una frase.","Cambio de velocidad · Decí una misma frase lenta, natural y expresiva sin perder el sonido objetivo ni la sílaba tónica.","Transferencia espontánea · Hablá durante 60 segundos sobre un tema conocido. El profesor escucha únicamente el sonido elegido; repetí dos frases con una corrección concreta."],homework:"Durante tres días, hacé una rutina de cinco minutos: uno de colocación, dos de palabras y contrastes, uno de frases y uno de habla libre. Grabá el primer y el último intento y anotá una mejora observable y un próximo objetivo."},
  {id:37,curriculumOrder:2600,requires:[107,31,23],level:"C1",displayLevel:"C1",category:"Gramática",title:"El País del Subjuntivo",subtitle:"El modo completo: 7 mundos 3D, 6 tiempos, 28 desafíos y un atlas maestro",duration:"90+ min",tag:"Clase maestra · C1",special:true,path:"/subjuntivo-pais-maravillas",goals:["Comprender cómo presenta una acción el modo subjuntivo","Elegir y conjugar los tiempos modernos del subjuntivo según intención y concordancia","Reconocer los futuros históricos y producir mensajes propios con precisión"],warmup:"Decí un hecho, un deseo y una orden sobre la misma situación.",explanation:"Una aventura progresiva por el País del Subjuntivo: ayuda desplegable de modo y tiempo, formación paso a paso, conjugaciones completas, contrastes de significado, errores frecuentes, práctica revelable y conversación.",practice:[],speaking:[],homework:""},
  {id:210,level:"B1",category:"Conversación",countrySequence:1,searchAliases:["Mexico","México","mexicano","mexicana"],title:"MÉXICO",subtitle:"32 estados y entidades para descubrir México mientras hablás de tu propia vida",duration:"90+ min",tag:"32 territorios · conversación B1",special:true,path:"/mexico",goals:["Comparar formas de vivir usando experiencias personales","Explicar preferencias sobre vivienda, trabajo, movilidad y tiempo libre","Diseñar un México ideal con decisiones justificadas"],warmup:"Elegí una entidad del mapa: ¿qué detalle te hace imaginar una forma de vida?",explanation:"Un mapa vectorial interactivo de las 31 entidades federativas y Ciudad de México. Cada territorio abre contexto breve, vocabulario, cinco preguntas B1 y repreguntas opcionales que no exigen conocimientos previos.",practice:[],speaking:[],homework:"Diseñá tu México ideal: un lugar para vivir, trabajar, vacacionar, comer y retirarte."},
  {id:36,level:"A2",levels:["A2","B1"],displayLevel:"A2–B1",category:"Conversación",countrySequence:2,searchAliases:["USA","United States","US","EEUU","Estados Unidos"],title:"ESTADOS UNIDOS",subtitle:"50 estados. 50 formas de vivir.",duration:"90+ min",tag:"50 estados · 300 preguntas A2/B1",special:true,path:"/estados-unidos-a2-b1",goals:["Responder preguntas A2 desde la experiencia propia","Comparar estados y formas de vivir sin necesitar conocimientos previos","Extender una respuesta con una pregunta B1 opcional"],warmup:"Elegí un estado del mapa y explicá qué tipo de vida imaginás allí.",explanation:"Un atlas interactivo basado en fronteras estatales reales. Los 50 estados —con Alaska y Hawái en recuadros— abren preguntas A2, comparaciones personales, modos de decisión y un cierre para diseñar tus Estados Unidos.",practice:[],speaking:[],homework:"Diseñá tus Estados Unidos: un estado para vivir, trabajar, viajar, comer y retirarte."},
  {id:34,level:"C2",category:"Conversación",title:"El Monasterio de las Ideas",subtitle:"Entrá a 12 mundos interiores 3D: cada escena tiene movimientos propios y 3 preguntas filosóficas extremas",duration:"90+ min",tag:"12 mundos · 36 preguntas C2",special:true,path:"/monasterio-de-las-ideas",goals:["Sostener posiciones complejas sin refugiarse en abstracciones","Distinguir intención, significado, efecto, poder y responsabilidad","Reformular un argumento después de confrontarlo con casos límite"],warmup:"¿Qué idea defendés correctamente en público, pero todavía discutís en privado?",explanation:"Una experiencia conversacional C2 creada para Ryan: la maqueta funciona como portal. Cada espacio abre un mundo interior distinto donde la campana, el agua, la luz, el vapor, las hojas o las cortinas cobran movimiento antes de tres preguntas que obligan a revisar la primera respuesta.",practice:[],speaking:[],homework:""},
  {id:33,level:"B1",category:"Conversación",title:"Irlanda en Relieve",subtitle:"26 condados, 104 lugares reales y 260 detonadores para descubrir la República de Irlanda condado por condado",duration:"90+ min",tag:"260 preguntas",special:true,path:"/irlanda-en-relieve",goals:["Sostener respuestas B1 con razones, ejemplos y comparaciones","Distinguir los 26 condados de la República y sus cuatro provincias históricas","Hablar de costa, lengua irlandesa, vivienda, turismo, patrimonio, movilidad y vida rural"],warmup:"Elegí un condado en el mapa real y anticipá qué decisión local podría aparecer allí.",explanation:"Una expedición conversacional por los 26 condados tradicionales de la República de Irlanda: cada territorio abre cuatro lugares concretos, una pregunta propia y seis preguntas centrales para desarrollar respuestas B1.",practice:[],speaking:[],homework:""},
  {id:32,level:"A2",levels:["A2","B1"],displayLevel:"A2–B1",category:"Conversación",title:"Reino Unido en Relieve",subtitle:"12 territorios, 48 lugares reales y 144 detonadores para descubrir el Reino Unido región por región",duration:"90+ min",tag:"144 preguntas",special:true,path:"/reino-unido-en-relieve",goals:["Ubicar las cuatro naciones y las nueve regiones oficiales de Inglaterra","Desarrollar respuestas A2/B1 con razones, ejemplos y comparaciones","Hablar de lugares, movilidad, identidad, costa, lenguas y vida local"],warmup:"Elegí un territorio en el mapa real y explicá qué detalle geográfico te produce más curiosidad.",explanation:"Una expedición conversacional por las doce áreas ITL1 del Reino Unido: cada territorio abre cuatro lugares reales, ocho preguntas centrales, wordbank bilingüe y recursos para extender respuestas.",practice:[],speaking:[],homework:""},
  {id:31,curriculumOrder:2000,requires:[18,107],level:"B1",levels:["B1","B2"],displayLevel:"B1+",category:"Gramática",title:"Condicionales paso a paso",subtitle:"Cero, primero, segundo, tercero y mixtos · una estructura por vez · 100% en español",duration:"90+ min",tag:"Clase completa",special:true,path:"/condicionales-b1",goals:["Comprender la relación entre realidad, hipótesis y tiempo","Construir cada condicional con los tiempos verbales correctos","Revisar todo el sistema de forma progresiva y sin mezclar estructuras"],warmup:"Separá una condición de su consecuencia y decidí si pertenece a la realidad o a una hipótesis.",explanation:"Una clase B1 progresiva completamente en español: introducción general, cinco unidades independientes, conjugaciones, análisis, errores, práctica explicada y producción oral.",practice:[],speaking:[],homework:""},
  {id:30,level:"A2",levels:["A2","B1"],displayLevel:"A2–B1",category:"Conversación",title:"Australia en Movimiento",subtitle:"8 territorios, 48 preguntas nuevas y un atlas 3D investigado con fuentes australianas",duration:"90+ min",tag:"48 preguntas",special:true,path:"/australia-en-movimiento",goals:["Responder preguntas A2 con una idea, una razón y un detalle","Entrar de forma gradual en preguntas B1 simples","Explorar lugares, decisiones y contrastes reales de los ocho territorios australianos"],warmup:"Elegí un territorio sobre el relieve o dejá que Australia elija por vos.",explanation:"Una expedición conversacional A2–B1 con mapa 3D por capas, rutas reales, wordbanks bilingües y una animación propia para cada pregunta.",practice:[],speaking:[],homework:""},
  {id:29,level:"B1",category:"Conversación",title:"Suiza en Relieve",subtitle:"26 cantones, 104 lugares reales y 260 detonadores para descubrir una Suiza nada típica",duration:"90+ min",tag:"260 preguntas",special:true,path:"/suiza-en-relieve",goals:["Sostener respuestas B1 con razones y ejemplos","Comparar formas de vivir, lenguas, paisajes y decisiones locales","Usar vocabulario bilingüe para proponer soluciones y expresar matices"],warmup:"Elegí un cantón en el mapa real y anticipá qué decisión cotidiana podría aparecer allí.",explanation:"Una expedición conversacional por los 26 cantones: cada territorio abre cuatro lugares concretos con contexto local, una pregunta propia y seis preguntas centrales para desarrollar respuestas B1.",practice:[],speaking:[],homework:""},
  {id:28,level:"A2",category:"Escucha",title:"Latinoamérica al Oído",subtitle:"Voces regionales, dos escuchas, 10 preguntas por país y transcripciones ocultas",duration:"90+ min",tag:"100 preguntas",special:true,path:"/latinoamerica-al-oido",goals:["Comprender la idea general antes de buscar detalles","Entrenar el oído con distintas variedades del español latinoamericano","Responder preguntas sin depender primero de la transcripción"],warmup:"Elegí un país en el mapa y anticipá qué palabras podrías escuchar.",explanation:"Una radio interactiva A2 que prioriza voces regionales naturales, obliga a realizar dos escuchas y recién después abre diez preguntas de comprensión.",practice:[],speaking:[],homework:""},
  {id:27,level:"A1",category:"Conversación",title:"El Mundo Fantástico",subtitle:"6 continentes, 40 mundos, 400 preguntas mínimas y un wordbank A1 completo",duration:"90+ min",tag:"400 preguntas",special:true,path:"/mundo-fantastico",goals:["Responder con una palabra o una mini frase desde el inicio","Explorar países de los seis continentes con América como uno solo","Usar más de 120 palabras bilingües y construir respuestas tocables"],warmup:"Elegí un continente o dejá que el mundo elija por vos.",explanation:"Un atlas fantástico e interactivo para principiantes absolutos, con audio lento, respuestas construibles y vocabulario organizado por categorías.",practice:[],speaking:[],homework:""},
  {id:26,level:"A1",category:"Conversación",title:"Estados Unidos · Coast to Coast",subtitle:"20 paradas, 120 preguntas básicas y un atlas bilingüe para hablar desde el primer minuto",duration:"90+ min",tag:"120 preguntas",special:true,path:"/estados-unidos-basico",goals:["Responder preguntas simples con apoyos visuales y bilingües","Hablar de gustos, lugares, rutinas y planes básicos","Ampliar cada respuesta con porque, un detalle y una comparación"],warmup:"Elegí una parada del mapa o dejá que la ruta elija por vos.",explanation:"Una road trip conversacional por lugares y temas reales de Estados Unidos, diseñada para producir primeras frases y ampliarlas progresivamente dentro de A1.",practice:[],speaking:[],homework:""},
  {id:25,level:"B1",category:"Conversación",title:"Israel en Capas",subtitle:"14 destinos y lentes culturales, 98 preguntas B1 y un mapa para pensar hablando",duration:"90+ min",tag:"98 preguntas",special:true,path:"/israel-en-capas",goals:["Comparar lugares, ritmos de vida y perspectivas culturales","Explicar opiniones con razones, ejemplos y matices","Usar vocabulario B1 para hablar de paisajes, idiomas, comida, comunidad e innovación"],warmup:"Elegí un punto del mapa o una lente cultural y explicá qué te gustaría descubrir.",explanation:"Una clase conversacional por capas: cada destino presenta un dato real y abre preguntas B1 para observar, comparar, tomar postura e imaginar soluciones.",practice:[],speaking:[],homework:""},
  {id:24,level:"A1",category:"Conversación",title:"Indonesia Fantástica",subtitle:"38 provincias reales, 380 preguntas y recursos bilingües para hablar desde cero",duration:"75+ min",tag:"380 preguntas",special:true,path:"/indonesia-fantastica",goals:["Responder preguntas simples desde el primer minuto","Usar wordbanks bilingües sin frenar la conversación","Hablar de lugares, comida, cultura, naturaleza y planes de viaje reales"],warmup:"Elegí una provincia o dejá que el archipiélago elija por vos.",explanation:"Una aventura 1000% conversacional por las 38 provincias reales de Indonesia, con contenido cultural auténtico y una experiencia visual fantástica.",practice:[],speaking:[],homework:""},
  {id:23,curriculumOrder:2300,requires:[31],level:"B2",levels:["B2","C1"],displayLevel:"B2–C1",category:"Gramática",title:"El Multiverso del ‘Si’",subtitle:"Todos los condicionales, desde la realidad hasta los universos mixtos",duration:"90+ min",tag:"Clase maestra · B2–C1",special:true,path:"/condicionales",goals:["Comprender la lógica de cada condicional","Conjugar los seis tiempos necesarios","Hablar de posibilidades, hipótesis y pasados alternativos"],warmup:"¿Qué pasa si no dormís? ¿Qué harías si no necesitaras dormir?",explanation:"Cinco portales progresivos con teoría bilingüe, conjugaciones completas, práctica autocorregible y producción oral.",practice:[],speaking:[],homework:""},
  {id:22,level:"B1",category:"Conversación",title:"La Ciudad del Futuro",subtitle:"12 edificios realistas, 48 preguntas WOW y una sola categoría TECH",duration:"75 min",tag:"12 edificios",special:true,path:"/future-city",goals:["Imaginar soluciones urbanas posibles","Explicar ventajas y consecuencias","Sostener una postura con ejemplos y matices"],warmup:"¿Qué parte de tu ciudad conservarías dentro de cincuenta años?",explanation:"Una ciudad del futuro centrada en personas: tiempo, salud, educación, vínculos, comida, poder, memoria y una sola zona tecnológica.",practice:[],speaking:[],homework:""},
  {id:21,level:"A2",category:"Conversación",title:"El Reino de las Preguntas Prohibidas · A2",subtitle:"14 mundos bilingües, 56 preguntas simples y apoyos para dar opiniones claras",duration:"70 min",tag:"56 preguntas A2",special:true,path:"/preguntas-prohibidas-a2",goals:["Dar una opinión con una frase clara","Explicar una razón con porque","Agregar un ejemplo y hacer una pregunta"],warmup:"Elegí un tema y decí una palabra que ya conocés.",explanation:"La aventura del reino adaptada a A2 real: preguntas cortas, vocabulario cotidiano y recursos bilingües.",practice:[],speaking:[],homework:""},
  {id:20,level:"B1",category:"Conversación",title:"El Reino de las Preguntas Prohibidas",subtitle:"14 puertas de castillo, 56 preguntas y recursos bilingües para opinar con matices",duration:"75 min",tag:"56 preguntas",special:true,path:"/preguntas-prohibidas",goals:["Construir una postura clara","Agregar matices y contraargumentos","Sostener conversaciones profundas"],warmup:"Elegí una verdad incómoda y explicá por qué cuesta decirla.",explanation:"Una aventura conversacional para pensar bajo presión y desarrollar respuestas complejas con apoyo B1.",practice:[],speaking:[],homework:""},
  {id:19,level:"A1",category:"Conversación",title:"Argento Roleplays",subtitle:"15 situaciones reales con diálogos largos, práctica guiada y recursos bilingües",duration:"75 min",tag:"210 intervenciones",special:true,path:"/argento-roleplays",goals:["Comprender diálogos argentinos simples","Responder con chunks cotidianos","Sostener un roleplay largo desde cero"],warmup:"Elegí una situación cotidiana y entrá en personaje.",explanation:"Una experiencia de roleplays progresivos para hablar sin depender de explicaciones gramaticales.",practice:[],speaking:[],homework:""},
  {id:18,curriculumOrder:1800,requires:[48,107],level:"B1",category:"Gramática",title:"El Pasado",subtitle:"Indefinido + imperfecto + perfecto compuesto con una comparación visual inolvidable",duration:"90 min",tag:"Clase completa",special:true,path:"/past-b1",goals:["Distinguir película cerrada y foto abierta","Conjugar los tres pasados","Conectar una acción reciente con el presente"],warmup:"¿Qué pasó? ¿Qué pasaba? ¿Qué ha pasado?",explanation:"Una experiencia visual e interactiva para elegir el pasado según la perspectiva del hablante.",practice:[],speaking:[],homework:""},
  {id:17,level:"A2",category:"Conversación",title:"La Ruleta de Tu Vida",subtitle:"17 temas potentes, 51 preguntas diferentes y un desafío argentino",duration:"60 min",tag:"51 preguntas",special:true,path:"/life-roulette",goals:["Responder preguntas A2 con una idea, una razón y un ejemplo","Hablar de experiencias, opiniones y decisiones sin repetir fórmulas","Usar apoyos bilingües y español argentino natural"],warmup:"Girá la ruleta y dejá que un tema inesperado abra la conversación.",explanation:"Una experiencia conversacional A2 con preguntas variadas que invitan a contar, explicar, elegir y reaccionar.",practice:[],speaking:[],homework:""},
  {id:16,level:"A1",category:"Vocabulario",title:"ARGENTO",subtitle:"12 mundos argentinos para hablar desde el primer día con recursos bilingües",duration:"70 min",tag:"12 mundos",special:true,path:"/argento",goals:["Hablar con apoyos visuales y bilingües","Usar vocabulario argentino cotidiano","Reaccionar y sostener intercambios simples"],warmup:"Elegí tu Argentina y empezá a hablar.",explanation:"Una experiencia comunicativa para A1.",practice:[],speaking:[],homework:""},
  {id:15,level:"A1",category:"Conversación",title:"Let’s Talk · A1",subtitle:"15 mundos bilingües y 150 preguntas simples para empezar a conversar",duration:"55 min",tag:"150 preguntas",special:true,path:"/a1-conversation",goals:["Comprender preguntas breves","Responder con vocabulario cotidiano","Sostener una charla a partir de tres preguntas"],warmup:"Choose a topic. Pick 3 questions. Just talk.",explanation:"Conversación guiada de nivel A1.",practice:[],speaking:[],homework:""},
  {id:14,level:"A2",category:"Conversación",title:"Let’s Talk · A2",subtitle:"15 mundos bilingües y 150 preguntas para empezar a hablar sin presión",duration:"60 min",tag:"150 preguntas",special:true,path:"/basic-conversation",goals:["Elegir un tema cercano","Responder con frases claras","Sostener una conversación con tres preguntas"],warmup:"Choose a topic. Pick 3 questions. Just talk.",explanation:"Conversación guiada de nivel A2.",practice:[],speaking:[],homework:""},
  {id:13,level:"B1",category:"Conversación",title:"Choose Your Conversation",subtitle:"Elegí 1 tema, seleccioná solo 3 preguntas y hablá libremente",duration:"60 min",tag:"15 mundos",special:true,goals:["Elegir un tema que genere curiosidad","Sostener una conversación libre","Compartir historias y opiniones"],warmup:"Choose a topic. Pick 3 questions. Just talk.",explanation:"No perfect answers. No pressure.",practice:[],speaking:[],homework:""},
  {id:3,curriculumOrder:900,requires:[48],level:"A1",category:"Gramática",title:"Presente con vos",subtitle:"Hablás, comés, vivís: el patrón rioplatense",duration:"60 min",tag:"Argentina real",goals:["Conjugar verbos regulares","Usar vos con seguridad","Hablar de rutinas"],warmup:"¿Qué hacés normalmente a la mañana? Usá palabras sueltas si todavía no podés formar frases.",explanation:"Con vos, los verbos regulares llevan el acento al final: hablás, comés, vivís. El pronombre puede omitirse cuando el contexto es claro.",practice:["Vos ___ (trabajar) desde casa.","¿___ (comer) carne?","___ (vivir) en Londres.","¿Qué ___ (hacer) hoy?"],speaking:["Contá tu rutina de lunes.","Compará tu mañana con la de tu profesor.","Entrevistá a alguien sobre sus hábitos."],homework:"Escribí 10 preguntas con vos para usar en la próxima clase."},
  {id:11,level:"C1",category:"Conversación",title:"Preguntas que dan ganas de hablar",subtitle:"16 categorías y 80 preguntas para una conversación avanzada libre",duration:"75 min",tag:"80 preguntas",special:true,path:"/advanced-conversation",goals:["Sostener ideas complejas","Matizar opiniones","Conectar experiencias y argumentos"],warmup:"Elegí una categoría y una pregunta que realmente te dé ganas de responder.",explanation:"Conversación libre de nivel avanzado.",practice:[],speaking:[],homework:""},
  ...additionalSamples,
];

const levelOrder:Record<string,number> = {A1:1,A2:2,B1:3,B2:4,C1:5,C2:6};
const previewedLessons = lessonSources.map(withPreview);
const orderedGrammar = previewedLessons
  .filter((lesson) => lesson.category === "Gramática")
  .sort((a,b) => (levelOrder[a.level] ?? 99) - (levelOrder[b.level] ?? 99) || (a.curriculumOrder ?? Number.MAX_SAFE_INTEGER) - (b.curriculumOrder ?? Number.MAX_SAFE_INTEGER));

const missingCurriculumOrder = orderedGrammar.filter((lesson) => lesson.curriculumOrder == null);
const duplicateCurriculumOrder = orderedGrammar.filter((lesson,index,all) => all.findIndex((candidate) => candidate.curriculumOrder === lesson.curriculumOrder) !== index);
if (missingCurriculumOrder.length || duplicateCurriculumOrder.length) {
  throw new Error(`Gramática sin orden o con orden duplicado: ${[...missingCurriculumOrder,...duplicateCurriculumOrder].map((lesson) => lesson.id).join(", ")}`);
}

const grammarSequenceById = new Map(orderedGrammar.map((lesson,index) => [lesson.id,index + 1]));
for (const lesson of orderedGrammar) {
  for (const prerequisiteId of lesson.requires ?? []) {
    const prerequisiteSequence = grammarSequenceById.get(prerequisiteId);
    const lessonSequence = grammarSequenceById.get(lesson.id);
    if (!prerequisiteSequence || !lessonSequence || prerequisiteSequence >= lessonSequence) {
      throw new Error(`Prerrequisito inválido en Gramática: ${prerequisiteId} → ${lesson.id}`);
    }
  }
}

// One route source of truth. The arrays are pedagogical, not chronological:
// adding a future class only requires inserting its id in the appropriate route.
const routeIdsByCategory:Record<Category,number[]> = {
  "Gramática":orderedGrammar.map((lesson) => lesson.id),
  "Conversación":[27,24,26,19,15,120,121,14,122,123,103,104,21,17,39,30,32,210,36,13,20,101,102,22,109,25,29,33,126,207,208,216,215,209,137,138,139,205,206,124,125,127,11,128,203,34,129,136],
  "Escucha":[130,131,105,28,132,133,134,135],
  "Fonética":[201,202,38],
  "Vocabulario":[16,204,108],
};

const lessonById = new Map(previewedLessons.map((lesson) => [lesson.id,lesson]));
const routeSequenceById = new Map<number,number>();
for (const category of Object.keys(routeIdsByCategory) as Category[]) {
  const routeIds = routeIdsByCategory[category];
  const categoryLessons = previewedLessons.filter((lesson) => lesson.category === category);
  if (new Set(routeIds).size !== routeIds.length || routeIds.length !== categoryLessons.length) {
    throw new Error(`Ruta ${category} incompleta o con duplicados`);
  }
  routeIds.forEach((id,index) => {
    const lesson = lessonById.get(id);
    if (!lesson || lesson.category !== category) throw new Error(`Clase ${id} inválida en la ruta ${category}`);
    routeSequenceById.set(id,index + 1);
  });
}

export const lessons:Lesson[] = previewedLessons.map((lesson) => ({
  ...lesson,
  curriculumSequence:lesson.category === "Gramática" ? grammarSequenceById.get(lesson.id) : undefined,
  routeOrder:lesson.category === "Gramática" ? lesson.curriculumOrder! : routeSequenceById.get(lesson.id)! * 100,
  routeSequence:routeSequenceById.get(lesson.id)!,
}));
