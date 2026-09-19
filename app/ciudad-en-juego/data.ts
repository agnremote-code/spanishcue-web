export type MetricKey = "calidad" | "movilidad" | "ambiente" | "equidad" | "presupuesto";

export type Impact = Partial<Record<MetricKey, number>>;

export type CityChoice = {
  id: string;
  category: "BASE" | "MOVILIDAD" | "VIVIENDA" | "VIDA" | "FUTURO";
  question: string;
  options: [
    { label: string; impact: Impact; feedback: string },
    { label: string; impact: Impact; feedback: string },
  ];
  follow: string;
};

export type PriorityRound = {
  id: string;
  situation: string;
  items: [string, string, string, string, string];
  follow: string;
};

export type UrbanProblem = {
  id: string;
  title: string;
  detail: string;
  options: [
    { label: string; consequence: string },
    { label: string; consequence: string },
    { label: string; consequence: string },
  ];
};

export type NegotiationRound = {
  id: string;
  sideA: { name: string; wants: string };
  sideB: { name: string; wants: string };
  shared: string;
  pressure: string;
};

export type ChangeRound = {
  id: string;
  decision: string;
  change: string;
  question: string;
};

export type CityEvent = {
  id: string;
  title: string;
  detail: string;
  question: string;
  cues: [string, string, string];
};

export const metricLabels: Array<{ key: MetricKey; label: string; color: string }> = [
  { key: "calidad", label: "CALIDAD", color: "#ff6b57" },
  { key: "movilidad", label: "MOVILIDAD", color: "#2376ef" },
  { key: "ambiente", label: "AMBIENTE", color: "#20ad72" },
  { key: "equidad", label: "EQUIDAD", color: "#7259e8" },
  { key: "presupuesto", label: "CAJA", color: "#f0a000" },
];

export const cityChoices: CityChoice[] = [
  {
    id: "parks-housing",
    category: "BASE",
    question: "Queda un gran terreno libre en el centro. ¿Qué construís?",
    options: [
      { label: "MÁS PARQUES", impact: { calidad: 8, ambiente: 12, presupuesto: -5 }, feedback: "La ciudad respira mejor, pero hay menos suelo disponible para vivir." },
      { label: "MÁS VIVIENDAS", impact: { equidad: 9, calidad: 3, ambiente: -7 }, feedback: "Entra más gente al centro, pero el espacio verde queda bajo presión." },
    ],
    follow: "¿Qué condición pondrías para reducir la principal desventaja de tu elección?",
  },
  {
    id: "metro-buses",
    category: "MOVILIDAD",
    question: "Solo podés financiar una gran mejora de transporte. ¿Cuál?",
    options: [
      { label: "METRO 24 HORAS", impact: { movilidad: 12, calidad: 5, presupuesto: -10 }, feedback: "Los viajes centrales mejoran mucho, aunque la obra y la operación cuestan más." },
      { label: "MÁS BUSES EN CADA BARRIO", impact: { movilidad: 9, equidad: 8, presupuesto: -6 }, feedback: "La red llega a más personas, pero puede ser más lenta y difícil de coordinar." },
    ],
    follow: "¿A quién beneficia más tu decisión y quién todavía quedaría mal conectado?",
  },
  {
    id: "tourism-local",
    category: "VIDA",
    question: "El centro necesita actividad económica. ¿Qué priorizás?",
    options: [
      { label: "MÁS TURISMO", impact: { presupuesto: 10, calidad: -4, equidad: -5 }, feedback: "Entra dinero y empleo, pero suben la presión sobre los precios y el espacio." },
      { label: "MÁS VIDA LOCAL", impact: { calidad: 9, equidad: 6, presupuesto: -3 }, feedback: "El centro conserva comunidad, aunque recauda menos a corto plazo." },
    ],
    follow: "¿Existe una forma realista de recibir visitantes sin expulsar a los residentes?",
  },
  {
    id: "tech-privacy",
    category: "FUTURO",
    question: "La ciudad puede digitalizar todos sus servicios. ¿Qué pesa más?",
    options: [
      { label: "MÁS TECNOLOGÍA", impact: { movilidad: 5, presupuesto: 5, calidad: 4, equidad: -3 }, feedback: "Los trámites son más rápidos, pero no todos acceden igual y se generan más datos." },
      { label: "MÁS PRIVACIDAD", impact: { calidad: 4, equidad: 3, presupuesto: -4 }, feedback: "Hay menos seguimiento, aunque algunos servicios pierden velocidad y personalización." },
    ],
    follow: "¿Qué servicio sí digitalizarías por completo y cuál nunca?",
  },
  {
    id: "affordable-iconic",
    category: "VIVIENDA",
    question: "Podés transformar el centro con un solo proyecto. ¿Cuál elegís?",
    options: [
      { label: "VIVIENDA ACCESIBLE", impact: { equidad: 12, calidad: 5, presupuesto: -8 }, feedback: "Más personas pueden vivir cerca de los servicios, pero requiere inversión pública constante." },
      { label: "UN CENTRO MÁS EXCLUSIVO", impact: { presupuesto: 10, calidad: 2, equidad: -12 }, feedback: "La zona atrae inversión, pero muchas personas ya no pueden pagarla." },
    ],
    follow: "¿Qué significa exactamente “accesible” y quién debería tener prioridad?",
  },
  {
    id: "public-commerce",
    category: "BASE",
    question: "Una avenida enorme deja de usarse para autos. ¿Cómo repartís el espacio?",
    options: [
      { label: "MÁS ESPACIO PÚBLICO", impact: { calidad: 10, ambiente: 6, presupuesto: -3 }, feedback: "La calle gana vida común, pero genera menos ingresos directos." },
      { label: "MÁS COMERCIO", impact: { presupuesto: 9, calidad: 3, ambiente: -2 }, feedback: "Hay más actividad y empleo, aunque el espacio deja de ser realmente libre." },
    ],
    follow: "¿Qué proporción concreta darías a cada uso y por qué?",
  },
  {
    id: "compact-spread",
    category: "VIVIENDA",
    question: "La ciudad va a crecer un 20 %. ¿Hacia dónde?",
    options: [
      { label: "CIUDAD COMPACTA", impact: { movilidad: 8, ambiente: 5, calidad: -2 }, feedback: "Las distancias se acortan, pero aumenta la densidad y el precio del suelo." },
      { label: "CIUDAD EXTENDIDA", impact: { calidad: 5, movilidad: -9, ambiente: -7 }, feedback: "Las casas pueden ser más amplias, pero crecen las distancias y la dependencia del auto." },
    ],
    follow: "¿Qué tipo de habitante viviría mejor con tu modelo y cuál peor?",
  },
  {
    id: "nightlife-silence",
    category: "VIDA",
    question: "Un barrio central tiene que elegir su identidad nocturna. ¿Cuál?",
    options: [
      { label: "MÁS VIDA NOCTURNA", impact: { presupuesto: 7, calidad: 3, equidad: -1 }, feedback: "Hay empleo y cultura por la noche, pero también ruido y conflictos vecinales." },
      { label: "MÁS SILENCIO", impact: { calidad: 8, presupuesto: -5 }, feedback: "Se descansa mejor, aunque el barrio pierde actividad y oportunidades nocturnas." },
    ],
    follow: "¿Qué horario o zona podría convertir esta oposición en convivencia?",
  },
  {
    id: "security-surveillance",
    category: "FUTURO",
    question: "Aumentan los delitos en espacios públicos. ¿Qué respuesta apoyás?",
    options: [
      { label: "MÁS VIGILANCIA", impact: { calidad: 3, presupuesto: -5, equidad: -4 }, feedback: "Puede aumentar la sensación de seguridad, pero también el control y los errores." },
      { label: "MÁS PRESENCIA COMUNITARIA", impact: { calidad: 7, equidad: 7, presupuesto: -7 }, feedback: "Fortalece vínculos y prevención, aunque sus resultados tardan más en verse." },
    ],
    follow: "¿Cómo medirías si tu solución realmente funciona y no solo tranquiliza?",
  },
  {
    id: "jobs-air",
    category: "FUTURO",
    question: "Una fábrica ofrece 5.000 empleos, pero empeorará la calidad del aire. ¿Qué elegís?",
    options: [
      { label: "MÁS EMPLEO AHORA", impact: { presupuesto: 11, equidad: 5, ambiente: -13, calidad: -4 }, feedback: "Miles consiguen trabajo, pero toda la ciudad asume el costo ambiental." },
      { label: "AIRE LIMPIO", impact: { ambiente: 12, calidad: 8, presupuesto: -8 }, feedback: "Se protege la salud, aunque hay que crear otra fuente de empleo." },
    ],
    follow: "¿Aceptarías la fábrica con condiciones? Nombrá dos que fueran obligatorias.",
  },
  {
    id: "culture-health",
    category: "VIDA",
    question: "Queda una sola partida del presupuesto anual. ¿Dónde va?",
    options: [
      { label: "CULTURA Y BIBLIOTECAS", impact: { calidad: 8, equidad: 4, presupuesto: -5 }, feedback: "Crece la vida cultural y el acceso común, pero no resuelve urgencias sanitarias." },
      { label: "SALUD Y PREVENCIÓN", impact: { calidad: 11, equidad: 6, presupuesto: -7 }, feedback: "Mejora la salud pública, aunque otros espacios comunitarios quedan sin apoyo." },
    ],
    follow: "¿Es justo enfrentar estas dos áreas? ¿De dónde sacarías dinero para la segunda?",
  },
  {
    id: "bike-parking",
    category: "MOVILIDAD",
    question: "Una calle comercial pierde la mitad de su espacio. ¿A qué se lo das?",
    options: [
      { label: "CICLOVÍA SEGURA", impact: { movilidad: 8, ambiente: 9, calidad: 4, presupuesto: -3 }, feedback: "Se mueve más gente sin contaminar, pero algunos comercios temen perder clientes." },
      { label: "ESTACIONAMIENTO", impact: { movilidad: -2, ambiente: -7, presupuesto: 5 }, feedback: "Los autos acceden con facilidad, aunque ocupan mucho espacio durante horas." },
    ],
    follow: "¿Qué evidencia pedirías antes de decidir y a quién consultarías?",
  },
  {
    id: "heritage-new",
    category: "BASE",
    question: "Un edificio histórico ocupa un terreno muy valioso. ¿Qué hacés?",
    options: [
      { label: "CONSERVARLO", impact: { calidad: 5, presupuesto: -7 }, feedback: "La ciudad protege su memoria, pero renuncia a un proyecto más rentable." },
      { label: "REEMPLAZARLO", impact: { presupuesto: 9, equidad: 2, calidad: -4 }, feedback: "Aparece un uso nuevo, pero una parte de la identidad urbana desaparece." },
    ],
    follow: "¿Qué tendría que demostrar un edificio para merecer ser protegido?",
  },
  {
    id: "local-chains",
    category: "VIDA",
    question: "El municipio puede favorecer un solo tipo de comercio. ¿Cuál?",
    options: [
      { label: "NEGOCIOS LOCALES", impact: { calidad: 8, equidad: 5, presupuesto: -2 }, feedback: "El dinero circula cerca y el barrio conserva identidad, pero algunos precios son mayores." },
      { label: "GRANDES CADENAS", impact: { presupuesto: 6, calidad: 2, equidad: -3 }, feedback: "Bajan ciertos precios y hay escala, aunque se uniforma la ciudad." },
    ],
    follow: "¿Qué apoyo sería justo sin eliminar la competencia?",
  },
  {
    id: "free-services-taxes",
    category: "BASE",
    question: "¿Qué modelo de ciudad te parece más justo?",
    options: [
      { label: "MÁS SERVICIOS GRATUITOS", impact: { equidad: 12, calidad: 8, presupuesto: -12 }, feedback: "Todos acceden a más servicios, pero la ciudad necesita recaudar y gestionar bien." },
      { label: "IMPUESTOS MÁS BAJOS", impact: { presupuesto: 7, equidad: -8, calidad: -3 }, feedback: "Las personas conservan más dinero, aunque cada una debe resolver más cosas por su cuenta." },
    ],
    follow: "¿Qué servicio nunca debería depender de cuánto dinero tiene una persona?",
  },
  {
    id: "dense-large",
    category: "VIVIENDA",
    question: "¿Cómo construís las próximas 10.000 viviendas?",
    options: [
      { label: "MÁS DEPARTAMENTOS COMPACTOS", impact: { equidad: 8, movilidad: 5, ambiente: 3 }, feedback: "Entra más gente cerca de todo, pero se reduce el espacio privado." },
      { label: "MENOS CASAS, MÁS GRANDES", impact: { calidad: 6, equidad: -9, movilidad: -4 }, feedback: "Cada hogar gana espacio, pero menos familias acceden y las distancias crecen." },
    ],
    follow: "¿Cuánto espacio privado aceptarías perder a cambio de una mejor ubicación?",
  },
  {
    id: "hospital-clinics",
    category: "VIDA",
    question: "La red de salud necesita una reforma. ¿Qué construís primero?",
    options: [
      { label: "UN GRAN HOSPITAL CENTRAL", impact: { calidad: 8, presupuesto: -9, movilidad: -4 }, feedback: "Concentra especialistas y tecnología, pero obliga a muchos a viajar lejos." },
      { label: "CLÍNICAS DE BARRIO", impact: { equidad: 10, calidad: 6, presupuesto: -7 }, feedback: "La atención básica queda cerca, aunque los casos complejos siguen viajando." },
    ],
    follow: "¿Qué atención debe resolverse cerca de casa y cuál conviene centralizar?",
  },
  {
    id: "events-calm",
    category: "VIDA",
    question: "¿Qué querés que pase cada fin de semana en el centro?",
    options: [
      { label: "GRANDES EVENTOS", impact: { presupuesto: 8, calidad: 3, ambiente: -3 }, feedback: "La ciudad se llena de actividad, pero también de ruido, basura y visitantes." },
      { label: "UN CENTRO TRANQUILO", impact: { calidad: 7, presupuesto: -5 }, feedback: "La vida diaria es más calma, aunque hay menos oferta y movimiento económico." },
    ],
    follow: "¿Cuántos eventos serían demasiados y quién debería decidirlo?",
  },
  {
    id: "university-housing",
    category: "VIVIENDA",
    question: "Un antiguo predio industrial queda libre. ¿Qué proyecto gana?",
    options: [
      { label: "DISTRITO UNIVERSITARIO", impact: { calidad: 6, presupuesto: 4, equidad: 2 }, feedback: "Llegan conocimiento y actividad, pero también puede subir el precio del barrio." },
      { label: "DISTRITO DE VIVIENDA", impact: { equidad: 10, calidad: 5, presupuesto: -5 }, feedback: "Se cubre una necesidad urgente, aunque se pierde una oportunidad educativa." },
    ],
    follow: "¿Podrías combinar los dos sin que uno sea una decoración mínima?",
  },
  {
    id: "fast-human",
    category: "FUTURO",
    question: "¿Cómo querés que funcionen los trámites de la ciudad?",
    options: [
      { label: "TODO RÁPIDO Y AUTOMÁTICO", impact: { presupuesto: 7, calidad: 4, equidad: -6 }, feedback: "La mayoría ahorra tiempo, pero quien no entiende el sistema queda solo." },
      { label: "ATENCIÓN HUMANA SIEMPRE", impact: { equidad: 8, calidad: 6, presupuesto: -9 }, feedback: "Nadie queda sin ayuda, aunque el servicio cuesta más y puede ser más lento." },
    ],
    follow: "¿Qué combinación evitaría tanto la burocracia como la exclusión?",
  },
];

export const priorityRounds: PriorityRound[] = [
  { id: "city", situation: "Tu ciudad empieza desde cero. Elegí sus DOS prioridades.", items: ["SEGURIDAD", "VIVIENDA", "TRANSPORTE", "AMBIENTE", "TRABAJO"], follow: "¿Por qué esas dos van antes? ¿Qué problema crea dejar las otras para después?" },
  { id: "cut", situation: "El presupuesto baja. Solo DOS áreas quedan protegidas.", items: ["HOSPITALES", "ESCUELAS", "TRANSPORTE", "VIVIENDA", "CULTURA"], follow: "Defendé las dos protegidas frente a alguien que necesita una de las áreas que recortaste." },
  { id: "center", situation: "Rediseñás el centro. Elegí los DOS intereses principales.", items: ["RESIDENTES", "COMERCIO", "TURISMO", "PATRIMONIO", "ESPACIO VERDE"], follow: "¿Cómo se notaría tu orden en una calle real? Da tres cambios concretos." },
  { id: "neighborhood", situation: "Un barrio recibe una inversión única. Elegí DOS mejoras.", items: ["LIMPIEZA", "SOMBRA", "TRANSPORTE", "DEPORTE", "ENCUENTRO"], follow: "¿Cuál produciría el cambio más rápido y cuál duraría más años?" },
  { id: "groups", situation: "Una nueva política debe empezar por DOS grupos.", items: ["NIÑOS", "MAYORES", "MIGRANTES", "PERSONAS CON DISCAPACIDAD", "TRABAJADORES NOCTURNOS"], follow: "¿Por qué ellos primero? Buscá una política que también ayude indirectamente a los demás." },
  { id: "climate", situation: "La ciudad se prepara para un clima más extremo. Elegí DOS inversiones.", items: ["ÁRBOLES", "DRENAJE", "REFUGIOS CLIMÁTICOS", "ENERGÍA LIMPIA", "EDIFICIOS AISLADOS"], follow: "Compará una solución inmediata con otra de largo plazo." },
  { id: "identity", situation: "El barrio está perdiendo identidad. Salvá DOS elementos.", items: ["COMERCIO LOCAL", "ARQUITECTURA", "FIESTAS", "MERCADOS", "ESPACIOS CULTURALES"], follow: "¿La identidad se puede proteger por ley o necesita seguir cambiando?" },
  { id: "transport", situation: "Ordená la red de transporte según sus DOS objetivos esenciales.", items: ["VELOCIDAD", "PRECIO", "FRECUENCIA", "ALCANCE", "ACCESIBILIDAD"], follow: "¿Qué objetivo suele recibir más atención de la que merece y cuál menos?" },
  { id: "home", situation: "La política de vivienda solo puede garantizar DOS cosas.", items: ["PRECIO", "TAMAÑO", "UBICACIÓN", "CALIDAD", "SEGURIDAD"], follow: "¿Qué mínimo debería garantizarse incluso si una persona paga muy poco?" },
  { id: "future", situation: "La ciudad de 2046 tendrá DOS principios no negociables.", items: ["SOSTENIBILIDAD", "INNOVACIÓN", "IGUALDAD", "RESILIENCIA", "COMUNIDAD"], follow: "Convertí cada principio elegido en una regla concreta y medible." },
];

export const urbanProblems: UrbanProblem[] = [
  {
    id: "rent",
    title: "ALQUILERES FUERA DE CONTROL",
    detail: "Los alquileres subieron un 35 % en dos años y muchos residentes están dejando el centro.",
    options: [
      { label: "LIMITAR AUMENTOS", consequence: "Algunos propietarios retiran viviendas del mercado o dejan de invertir en ellas." },
      { label: "CONSTRUIR VIVIENDA PÚBLICA", consequence: "La solución tarda años y exige decidir quién accede primero." },
      { label: "GRAVAR VIVIENDAS VACÍAS", consequence: "Aparecen más alquileres, pero también formas de evitar el impuesto." },
    ],
  },
  {
    id: "traffic",
    title: "TRÁFICO TODO EL DÍA",
    detail: "La velocidad media bajó a 14 km/h y el transporte público también queda atrapado.",
    options: [
      { label: "COBRAR POR ENTRAR AL CENTRO", consequence: "Baja el tráfico, pero trabajadores de ingresos medios dicen que la medida los castiga." },
      { label: "QUITAR ESPACIO A LOS AUTOS", consequence: "Los buses avanzan mejor, aunque comerciantes temen perder entregas y clientes." },
      { label: "ESCALONAR HORARIOS", consequence: "Se reparte la demanda, pero escuelas y empresas deben reorganizar su rutina." },
    ],
  },
  {
    id: "green",
    title: "CASI NO QUEDA VERDE",
    detail: "Los barrios más densos tienen menos de tres metros cuadrados de espacio verde por persona.",
    options: [
      { label: "COMPRAR TERRENOS", consequence: "Se crean parques reales, pero el precio es altísimo y la vivienda pierde suelo." },
      { label: "TECHOS Y PATIOS VERDES", consequence: "La red crece rápido, aunque muchos espacios quedan dentro de propiedades privadas." },
      { label: "CERRAR CALLES Y PLANTAR", consequence: "Aparece sombra y espacio común, pero cambia la circulación de todo el barrio." },
    ],
  },
  {
    id: "noise",
    title: "EL BARRIO NO DUERME",
    detail: "Vecinos, bares y trabajadores nocturnos presentan quejas opuestas sobre el ruido.",
    options: [
      { label: "CERRAR ANTES", consequence: "Se duerme mejor, pero cae el empleo nocturno y la actividad se mueve a otros barrios." },
      { label: "ZONAS DE OCIO", consequence: "El conflicto se concentra, aunque esos vecinos soportan casi todo el costo." },
      { label: "AISLAMIENTO OBLIGATORIO", consequence: "Reduce mucho el ruido, pero los locales pequeños no pueden pagar la reforma." },
    ],
  },
  {
    id: "tourism",
    title: "LA CIUDAD SE VOLVIÓ UN PRODUCTO",
    detail: "El turismo crece, pero desaparecen comercios cotidianos y los residentes evitan el centro.",
    options: [
      { label: "LIMITAR ALOJAMIENTOS TURÍSTICOS", consequence: "Vuelve vivienda al mercado, pero bajan ingresos de familias que alquilaban una habitación." },
      { label: "TASA TURÍSTICA ALTA", consequence: "Financia servicios, aunque puede convertir la ciudad en un destino solo para ricos." },
      { label: "LLEVAR VISITANTES A OTROS BARRIOS", consequence: "Se reparte el ingreso, pero también el ruido y la presión inmobiliaria." },
    ],
  },
  {
    id: "fare",
    title: "MOVERSE CUESTA DEMASIADO",
    detail: "Una familia puede gastar hasta el 18 % de sus ingresos en transporte.",
    options: [
      { label: "TRANSPORTE GRATUITO", consequence: "Sube mucho el uso y hace falta financiar más frecuencia para evitar saturación." },
      { label: "TARIFA SEGÚN INGRESOS", consequence: "Es más justo, pero obliga a compartir datos económicos con el sistema." },
      { label: "ABONO MENSUAL BARATO", consequence: "Ayuda a usuarios frecuentes, aunque deja afuera a quienes no pueden pagar todo al inicio." },
    ],
  },
  {
    id: "inequality",
    title: "DOS CIUDADES EN UNA",
    detail: "La esperanza de vida cambia nueve años entre el barrio más rico y el más pobre.",
    options: [
      { label: "INVERTIR PRIMERO EN EL BARRIO MÁS POSTERGADO", consequence: "Se corrige una deuda, pero otras zonas denuncian abandono político." },
      { label: "MISMO DINERO PARA TODOS", consequence: "Parece neutral, aunque mantiene diferencias acumuladas durante décadas." },
      { label: "MOVER SERVICIOS IMPORTANTES", consequence: "Llegan empleos y atención, pero hay riesgo de que después suban los precios." },
    ],
  },
  {
    id: "surveillance",
    title: "DEMASIADOS OJOS",
    detail: "Las cámaras redujeron algunos delitos, pero el sistema identificó mal a cientos de personas.",
    options: [
      { label: "SUSPENDER EL SISTEMA", consequence: "Se protege la privacidad, pero algunos delitos vuelven a aumentar." },
      { label: "MANTENERLO CON AUDITORÍA", consequence: "Hay más control, aunque los errores todavía afectan a personas reales." },
      { label: "USARLO SOLO EN CASOS GRAVES", consequence: "Se limita el alcance, pero alguien debe definir qué cuenta como grave." },
    ],
  },
];

export const negotiationRounds: NegotiationRound[] = [
  { id: "night", sideA: { name: "RESIDENTES", wants: "Dormir sin ruido después de las 23." }, sideB: { name: "BARES", wants: "Abrir hasta las 3 para sostener empleo." }, shared: "Un barrio activo donde todavía sea posible vivir.", pressure: "Ningún local puede pagar una reforma acústica completa este año." },
  { id: "street", sideA: { name: "CICLISTAS", wants: "Una ciclovía protegida y continua." }, sideB: { name: "COMERCIANTES", wants: "Espacio para carga, descarga y clientes." }, shared: "Una calle segura con negocios que funcionen.", pressure: "La calle no puede ampliarse y deben quitarse veinte plazas de estacionamiento o parte de la vereda." },
  { id: "tourists", sideA: { name: "RESIDENTES", wants: "Alquileres estables y comercios cotidianos." }, sideB: { name: "SECTOR TURÍSTICO", wants: "Más camas y libertad para operar." }, shared: "Mantener empleo sin vaciar el centro de vecinos.", pressure: "La temporada alta empieza dentro de dos meses." },
  { id: "housing", sideA: { name: "INQUILINOS", wants: "Precios accesibles y contratos largos." }, sideB: { name: "DESARROLLADORES", wants: "Rentabilidad para construir más viviendas." }, shared: "Aumentar la oferta sin expulsar a quienes ya viven allí.", pressure: "El suelo público alcanza para un solo gran proyecto." },
  { id: "plaza", sideA: { name: "JÓVENES", wants: "Deporte, música y actividades nocturnas." }, sideB: { name: "PERSONAS MAYORES", wants: "Sombra, bancos, baños y tranquilidad." }, shared: "Una plaza usada durante todo el día por distintas edades.", pressure: "El presupuesto solo cubre dos instalaciones nuevas." },
  { id: "budget", sideA: { name: "CENTRO", wants: "Mantener infraestructura muy utilizada." }, sideB: { name: "PERIFERIA", wants: "Recibir primero servicios que nunca tuvo." }, shared: "Una ciudad conectada sin zonas abandonadas.", pressure: "La recaudación cayó un 15 % y no habrá fondos extra." },
  { id: "vendors", sideA: { name: "VENDEDORES CALLEJEROS", wants: "Trabajar en zonas transitadas con costos bajos." }, sideB: { name: "COMERCIOS FORMALES", wants: "Reglas e impuestos equivalentes." }, shared: "Calles vivas, ordenadas y con oportunidades reales.", pressure: "Prohibir no es una opción y el espacio peatonal es limitado." },
  { id: "privacy", sideA: { name: "SEGURIDAD", wants: "Usar datos para prevenir delitos rápidamente." }, sideB: { name: "PRIVACIDAD", wants: "Impedir seguimiento masivo y usos secundarios." }, shared: "Proteger a la población sin convertirla en sospechosa.", pressure: "Un gran evento internacional empieza la semana próxima." },
];

export const changeRounds: ChangeRound[] = [
  { id: "free-transit", decision: "Hiciste gratuito todo el transporte público.", change: "El presupuesto de la ciudad baja un 20 %.", question: "¿Mantenés la gratuidad, la limitás o buscás otra fuente de dinero?" },
  { id: "tourism-rent", decision: "Lanzaste una campaña para atraer mucho más turismo.", change: "Los alquileres del centro suben y desaparecen negocios cotidianos.", question: "¿Seguís promocionando la ciudad? ¿Qué límite imponés?" },
  { id: "parks-shortage", decision: "Convertiste varios terrenos en parques.", change: "La lista de familias que necesitan vivienda se duplica.", question: "¿Protegés todos los parques o cambiás una parte del plan?" },
  { id: "cameras-errors", decision: "Instalaste cámaras inteligentes para mejorar la seguridad.", change: "El sistema acusa por error a una persona cada dos días.", question: "¿Lo suspendés, lo restringís o aceptás el costo?" },
  { id: "car-free", decision: "Prohibiste los autos particulares en todo el centro.", change: "Pequeños comercios dicen que no pueden recibir mercadería ni clientes mayores.", question: "¿Creás excepciones o mantenés la regla igual para todos?" },
  { id: "metro-years", decision: "Elegiste construir una nueva línea de metro.", change: "La obra durará ocho años y cerrará una avenida comercial.", question: "¿Seguís con el proyecto? ¿Qué compensación ofrecés mientras tanto?" },
  { id: "dense-housing", decision: "Aprobaste 2.000 viviendas de alquiler accesible.", change: "Vecinos protestan porque los edificios serán mucho más altos.", question: "¿Reducís la altura, cambiás el lugar o defendés el plan original?" },
  { id: "night-economy", decision: "Autorizaste más actividades y transporte durante la noche.", change: "Las quejas por ruido aumentan un 60 %.", question: "¿Qué parte del plan cambiás sin apagar la vida nocturna?" },
  { id: "big-company", decision: "Ofreciste beneficios fiscales para atraer una gran empresa.", change: "Llegan empleos, pero los alquileres cercanos aumentan muy rápido.", question: "¿Renegociás el acuerdo o considerás que el beneficio general lo justifica?" },
  { id: "green-tax", decision: "Creaste una tasa alta para actividades contaminantes.", change: "El costo termina afectando más a hogares de bajos ingresos.", question: "¿Eliminás la tasa, compensás a esos hogares o cambiás el diseño?" },
  { id: "demolition", decision: "Permitiste reemplazar edificios antiguos por viviendas nuevas.", change: "Un movimiento ciudadano demuestra que el barrio perdería su identidad.", question: "¿Qué edificios salvás y con qué criterio?" },
  { id: "wifi-data", decision: "Instalaste wifi gratuito en toda la ciudad.", change: "La empresa proveedora quiere analizar los movimientos de los usuarios.", question: "¿Cancelás el contrato, pagás más por privacidad o aceptás el intercambio?" },
];

export const cityEvents: CityEvent[] = [
  { id: "heat", title: "OLA DE CALOR", detail: "La temperatura llegará a 44 °C durante cinco días y varios barrios casi no tienen sombra.", question: "Tenés una hora para anunciar un plan. ¿Qué hacés primero?", cues: ["MEDIDA URGENTE", "GRUPO PRIORITARIO", "CAMBIO PERMANENTE"] },
  { id: "company", title: "LLEGA UNA GRAN EMPRESA", detail: "Promete 8.000 empleos, pero exige beneficios fiscales y un terreno central.", question: "¿Aceptás? Respondé con una condición no negociable.", cues: ["BENEFICIO", "COSTO", "CONDICIÓN"] },
  { id: "budget", title: "BAJA EL PRESUPUESTO", detail: "La ciudad pierde de golpe el 18 % de sus ingresos para el próximo año.", question: "¿Qué protegés, qué pausás y cómo lo explicás públicamente?", cues: ["PROTEGER", "PAUSAR", "EXPLICAR"] },
  { id: "protest", title: "UN BARRIO PROTESTA", detail: "Miles de personas rechazan una obra que beneficiará al resto de la ciudad.", question: "¿Frenás, negociás o seguís? Justificá el procedimiento.", cues: ["ESCUCHAR", "DECIDIR", "COMPENSAR"] },
  { id: "viral", title: "LA CIUDAD SE VUELVE VIRAL", detail: "Un video transforma un barrio tranquilo en el nuevo destino de moda.", question: "¿Cómo aprovechás la oportunidad sin destruir lo que la hizo atractiva?", cues: ["PRIMER LÍMITE", "OPORTUNIDAD", "SEÑAL DE ALERTA"] },
  { id: "storm", title: "TORMENTA HISTÓRICA", detail: "Una lluvia extrema inunda estaciones, escuelas y dos hospitales.", question: "¿Cuál es tu orden de acción durante las primeras seis horas?", cues: ["RESCATAR", "COMUNICAR", "PREVENIR"] },
  { id: "metro", title: "NUEVA LÍNEA POSIBLE", detail: "El gobierno nacional ofrece pagar el 70 % de una línea de metro si la ciudad decide el trazado hoy.", question: "¿Qué información necesitás y qué barrio conectarías primero?", cues: ["CRITERIO", "TRAZADO", "RIESGO"] },
  { id: "arrival", title: "LLEGAN 20.000 PERSONAS", detail: "Una crisis regional provoca una llegada rápida de nuevas familias que necesitan vivienda y servicios.", question: "¿Cómo respondés sin enfrentar a recién llegados y residentes?", cues: ["HOY", "EN SEIS MESES", "CONVIVENCIA"] },
];

export const bossPrompts: Array<[string, string]> = [
  ["FOTO GENERAL", "Presentá tu ciudad en treinta segundos: ¿cómo se vive y qué la hace diferente?"],
  ["TRES PRIORIDADES", "Nombrá las tres decisiones que definen tu modelo y explicá por qué van primero."],
  ["EL SACRIFICIO", "¿Qué decidiste no ofrecer o reducir para poder sostener tus prioridades?"],
  ["GANADORES Y PERDEDORES", "¿A quién beneficia más tu ciudad y quién podría criticarla con razón?"],
  ["EL ACUERDO DIFÍCIL", "Contá el conflicto más complejo y defendé la solución intermedia que elegiste."],
  ["UNA REGLA", "Formulá una regla pública que represente el espíritu de tu ciudad y explicá su límite."],
  ["PRIMEROS 100 DÍAS", "¿Qué harías primero, qué dejarías para después y cómo medirías el resultado?"],
  ["DENTRO DE 20 AÑOS", "Defendé por qué tu modelo seguirá funcionando y reconocé qué podría obligarlo a cambiar."],
];

export const finalQuestions = [
  "¿Qué hace que una ciudad sea realmente buena para vivir y no solo atractiva para visitar?",
  "¿Qué problema resolverías primero en la ciudad donde vivís y por qué?",
  "¿Qué debería pesar más en una decisión urbana: eficiencia o calidad de vida?",
  "¿Hasta qué punto habría que limitar el turismo cuando beneficia a la economía?",
  "¿Qué servicios deberían estar garantizados para todas las personas?",
  "¿Aceptarías menos privacidad a cambio de más seguridad? ¿Dónde está tu límite?",
  "¿Qué hace que un barrio tenga identidad y quién tiene derecho a definirla?",
  "¿Qué elemento no podría faltar en tu ciudad ideal?",
  "¿Es mejor una ciudad muy ordenada o una ciudad más libre pero también más caótica?",
  "¿Qué cambiará drásticamente en las ciudades durante los próximos veinte años?",
];

export const cityChoiceCategories = ["TODO", "BASE", "MOVILIDAD", "VIVIENDA", "VIDA", "FUTURO"] as const;

export const lessonStats = {
  main: cityChoices.length + priorityRounds.length,
  choices: cityChoices.length,
  priorities: priorityRounds.length,
  problems: urbanProblems.length,
  negotiations: negotiationRounds.length,
  changes: changeRounds.length,
  events: cityEvents.length,
  finalQuestions: finalQuestions.length,
  bossPrompts: bossPrompts.length,
  total:
    cityChoices.length +
    priorityRounds.length +
    urbanProblems.length +
    negotiationRounds.length +
    changeRounds.length +
    cityEvents.length +
    finalQuestions.length +
    bossPrompts.length,
} as const;

if (
  lessonStats.main < 30 ||
  lessonStats.problems < 8 ||
  lessonStats.negotiations < 8 ||
  lessonStats.changes < 12 ||
  lessonStats.events < 8 ||
  lessonStats.finalQuestions < 10 ||
  lessonStats.bossPrompts < 8
) {
  throw new Error("Ciudad en juego no cumple el banco mínimo de MODO PLAY.");
}
