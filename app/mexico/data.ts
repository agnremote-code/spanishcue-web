export type Pair = { es: string; en: string };
export type MexicoRegion = "norte" | "occidente" | "centro" | "golfo" | "sur";

export type MexicoEntity = {
  code: string;
  number: string;
  name: string;
  capital: string;
  region: MexicoRegion;
  color: string;
  hook: string;
  visual: string;
  lifestyle: string;
  contrast: [string, string];
  vocabulary: Pair[];
  questions: Pair[];
  followups: Pair[];
};

const pair = (es: string, en: string): Pair => ({ es, en });
const palette = ["#ee6c4d", "#f4a261", "#e9c46a", "#78a55a", "#2a9d8f", "#3d8fba", "#5776c7", "#7b61a8"];

// Brief, evergreen context. Prompts deliberately require no prior knowledge of Mexico.
const raw = `
MX-AGU|Aguascalientes|Aguascalientes|centro|Una ciudad compacta con memoria ferroviaria y una gran tradición de feria.|Talleres ferroviarios, barrios caminables y viñedos del altiplano.|moverse en una ciudad mediana|un centro compacto|un fin de semana en el campo|barrio,ferrocarril,feria,viñedo
MX-BCN|Baja California|Mexicali|norte|Una frontera dinámica entre el Pacífico, el desierto y ciudades que miran a dos países.|Costa fría, valles agrícolas, desierto y cruces fronterizos.|vivir entre culturas|una ciudad de frontera|una comunidad costera|frontera,desierto,costa,valle
MX-BCS|Baja California Sur|La Paz|norte|Una península extensa donde las ciudades se relacionan de cerca con el mar y el desierto.|Bahías claras, sierras secas, oasis y largas carreteras.|vivir lejos de las grandes ciudades|una bahía tranquila|una ruta por el desierto|península,bahía,oasis,distancia
MX-CAM|Campeche|San Francisco de Campeche|sur|Una costa amurallada que conecta selva, patrimonio urbano y comunidades del Golfo.|Murallas frente al mar, manglares y caminos hacia la selva.|equilibrar patrimonio y vida diaria|una ciudad histórica|una comunidad cerca de la selva|muralla,manglar,patrimonio,selva
MX-CHP|Chiapas|Tuxtla Gutiérrez|sur|Montañas, selva y una enorme diversidad cultural conviven en distancias relativamente cortas.|Cañones, bosques altos, mercados y caminos selváticos.|vivir con gran diversidad natural y cultural|una ciudad entre montañas|una comunidad cerca de la selva|cañón,comunidad,mercado,diversidad
MX-CHH|Chihuahua|Chihuahua|norte|El estado más extenso combina desierto, sierra, ciudades industriales y largas distancias.|Llanuras secas, barrancas profundas, trenes y horizonte abierto.|organizar la vida con grandes distancias|una ciudad conectada|un pueblo en la sierra|barranca,sierra,distancia,frontera
MX-CMX|Ciudad de México|Ciudad de México|centro|Una metrópoli de barrios muy distintos, construida en una cuenca de gran altura.|Lago histórico, avenidas, mercados, parques y volcanes en el horizonte.|elegir barrio, movilidad y ritmo|un barrio central|una zona tranquila y verde|metrópoli,barrio,transporte,cuenca
MX-COA|Coahuila|Saltillo|norte|Desierto, industria y áreas de montaña forman un territorio de horizontes amplios.|Sierras, dunas, viñedos y ciudades industriales.|combinar trabajo urbano y escapadas abiertas|una ciudad industrial|un valle de montaña|desierto,industria,duna,viñedo
MX-COL|Colima|Colima|occidente|Uno de los estados más pequeños reúne volcán, costa y actividad portuaria.|Volcanes, plantaciones, playas y un puerto de gran movimiento.|vivir cerca de paisajes muy distintos|una ciudad al pie del volcán|una vida junto al Pacífico|volcán,puerto,costa,plantación
MX-DUR|Durango|Victoria de Durango|norte|Altiplano, sierra y memoria cinematográfica se encuentran en un territorio amplio.|Centro histórico, bosques de altura y paisajes semidesérticos.|elegir entre calma urbana y naturaleza|una ciudad histórica|una cabaña en la sierra|altiplano,bosque,cine,semidesierto
MX-GUA|Guanajuato|Guanajuato|centro|Ciudades históricas, actividad industrial y vida universitaria se cruzan en el Bajío.|Callejones, antiguas minas, plazas y corredores industriales.|combinar patrimonio, estudio y trabajo|una ciudad universitaria|una ciudad de industria|callejón,mina,universidad,industria
MX-GRO|Guerrero|Chilpancingo|sur|La costa del Pacífico y las montañas interiores sostienen ritmos de vida muy diferentes.|Bahías, mercados, pueblos de montaña y caminos costeros.|comparar vida costera e interior|una ciudad junto al mar|un pueblo de montaña|bahía,montaña,mercado,costa
MX-HID|Hidalgo|Pachuca|centro|Un territorio cercano a la capital del país con tradición minera, sierras y balnearios.|Relojes de ciudad, antiguas minas, prismas de roca y valles.|vivir cerca de una gran metrópoli sin estar dentro|una ciudad conectada|un valle tranquilo|minería,valle,sierra,balneario
MX-JAL|Jalisco|Guadalajara|occidente|Una gran metrópoli occidental comparte estado con costa, agave y pueblos de sierra.|Barrios urbanos, campos de agave, lago y Pacífico.|elegir entre energía urbana y territorios abiertos|una metrópoli creativa|una comunidad cerca del mar|agave,lago,metrópoli,sierra
MX-MEX|Estado de México|Toluca|centro|Ciudades densas, bosques altos y volcanes rodean buena parte de la capital nacional.|Valles urbanos, nevados, bosques y rutas de transporte.|gestionar tiempo, vivienda y desplazamientos|una zona bien conectada|una localidad cerca del bosque|volcán,traslado,bosque,valle
MX-MIC|Michoacán|Morelia|occidente|Mesetas, lagos y costa conectan ciudades históricas con fuertes tradiciones comunitarias.|Canteras rosadas, lagos, bosques de oyamel y Pacífico.|participar en una comunidad con tradiciones vivas|una ciudad histórica|una comunidad junto al lago|lago,comunidad,bosque,artesanía
MX-MOR|Morelos|Cuernavaca|centro|Un estado pequeño de clima templado, muy conectado con la Ciudad de México.|Jardines, barrancas, campos y pueblos cercanos entre sí.|vivir en un lugar cálido y conectado|una ciudad con servicios|un pueblo con jardín|barranca,jardín,clima,cercanía
MX-NAY|Nayarit|Tepic|occidente|Costa, islas, manglares y sierra convergen alrededor de ciudades de escala media.|Marismas, playas, caminos serranos y campos tropicales.|combinar una ciudad manejable con naturaleza|una ciudad mediana|una comunidad en la costa|marisma,isla,sierra,costa
MX-NLE|Nuevo León|Monterrey|norte|Una gran región metropolitana industrial crece al pie de montañas muy visibles.|Rascacielos, fábricas, cañones y cerros abruptos.|equilibrar carrera profesional y tiempo libre|una metrópoli de trabajo|una zona cerca de la montaña|industria,cerro,cañón,metrópoli
MX-OAX|Oaxaca|Oaxaca de Juárez|sur|Sierras, valles y costas sostienen una extraordinaria diversidad lingüística y comunitaria.|Mercados, talleres, montañas, istmo y playas del Pacífico.|aprender de comunidades y ritmos distintos|una ciudad cultural|una comunidad pequeña en la sierra|mercado,istmo,comunidad,lengua
MX-PUE|Puebla|Puebla de Zaragoza|centro|Una ciudad histórica y un corredor industrial se abren hacia volcanes y sierras.|Cúpulas, talleres, volcanes y campos del altiplano.|combinar oportunidades urbanas y escapadas de montaña|una ciudad histórica|un pueblo cerca del volcán|volcán,taller,altiplano,patrimonio
MX-QUE|Querétaro|Santiago de Querétaro|centro|Una ciudad de rápido crecimiento conecta el Bajío con zonas semidesérticas y serranas.|Acueducto, barrios nuevos, viñedos y Sierra Gorda.|decidir cómo crecer sin perder calidad de vida|una ciudad en expansión|una localidad serrana|crecimiento,acueducto,sierra,viñedo
MX-ROO|Quintana Roo|Chetumal|sur|El Caribe, la selva y ciudades de turismo internacional conviven con comunidades locales.|Mar turquesa, cenotes, manglares y selva baja.|vivir en un lugar muy visitado por turistas|una ciudad turística|una capital tranquila|cenote,caribe,manglar,turismo
MX-SLP|San Luis Potosí|San Luis Potosí|centro|Altiplano, zona industrial y paisajes húmedos de la Huasteca crean grandes contrastes.|Desierto, cascadas, cuevas y corredores urbanos.|moverse entre climas y estilos de vida opuestos|una ciudad del altiplano|una comunidad en la Huasteca|huasteca,altiplano,cascada,industria
MX-SIN|Sinaloa|Culiacán|norte|Valles agrícolas, costa y ciudades cálidas miran hacia el Golfo de California.|Campos irrigados, puertos, islas y malecones.|organizar la vida alrededor del calor y el agua|una ciudad de valle|una ciudad junto al mar|valle,malecón,agricultura,puerto
MX-SON|Sonora|Hermosillo|norte|El desierto llega al mar en un estado de frontera, minería y grandes distancias.|Cactus gigantes, playas tranquilas, sierras y carreteras largas.|adaptar rutinas a un clima extremo|una ciudad del desierto|una comunidad junto al mar|desierto,frontera,minería,calor
MX-TAB|Tabasco|Villahermosa|golfo|Ríos, humedales y vegetación tropical definen una vida muy ligada al agua.|Lagunas, cacao, selva baja y ciudades entre ríos.|vivir con lluvia, calor y paisajes de agua|una ciudad fluvial|una comunidad rural|humedal,cacao,río,lluvia
MX-TAM|Tamaulipas|Ciudad Victoria|golfo|Frontera, costa y llanuras agrícolas conectan ciudades con funciones muy distintas.|Puentes internacionales, lagunas, puertos y reservas naturales.|elegir entre conexión comercial y calma costera|una ciudad fronteriza|una ciudad portuaria|puerto,frontera,laguna,llanura
MX-TLA|Tlaxcala|Tlaxcala de Xicohténcatl|centro|El estado más pequeño ofrece ciudades cercanas, campos altos y patrimonio histórico.|Bosques de altura, plazas, campos y volcanes próximos.|vivir con trayectos cortos y vínculos cercanos|una capital pequeña|una comunidad rural|trayecto,volcán,campo,comunidad
MX-VER|Veracruz|Xalapa|golfo|Una franja larga une puerto, montañas, selva y culturas regionales muy diversas.|Malecón, cafetales, ríos, bosques nublados y llanuras.|adaptarse a muchos climas y ritmos|una ciudad de montaña|una ciudad portuaria|puerto,cafetal,llanura,niebla
MX-YUC|Yucatán|Mérida|sur|Una península de relieve bajo combina ciudades mayas, cenotes y una capital en expansión.|Piedra caliza, cenotes, haciendas y calles de clima cálido.|organizar la vida alrededor del calor y la comunidad|una ciudad en crecimiento|un pueblo cerca de un cenote|cenote,península,hacienda,calor
MX-ZAC|Zacatecas|Zacatecas|norte|Una capital de cantera se abre a un altiplano de tradición minera y comunidades dispersas.|Cerros, calles empinadas, antiguas minas y campos secos.|vivir con espacio, altura y menor densidad|una capital histórica|una localidad del altiplano|cantera,minería,altura,altiplano
`;

const regions: Record<MexicoRegion, Pair> = {
  norte: pair("Norte", "North"),
  occidente: pair("Occidente", "West"),
  centro: pair("Centro y Bajío", "Central Mexico"),
  golfo: pair("Golfo", "Gulf"),
  sur: pair("Sur y Península", "South and Peninsula"),
};

const questionBanks = [
  (name: string, life: string) => pair(`¿Qué parte de ${life} sería fácil para vos en ${name} y qué parte sería difícil?`, `What part of ${life} would be easy for you in ${name}, and what would be difficult?`),
  (name: string, life: string) => pair(`Imaginá un lunes normal en ${name}. ¿Cómo cambiaría tu rutina con ${life}?`, `Imagine a normal Monday in ${name}. How would your routine change with ${life}?`),
  (name: string, life: string) => pair(`¿Qué necesitarías para disfrutar de ${life} durante un año en ${name}?`, `What would you need to enjoy ${life} for a year in ${name}?`),
  (name: string, life: string) => pair(`¿A qué tipo de persona le recomendarías ${name} por su forma de ${life}?`, `Who would you recommend ${name} to because of its way of ${life}?`),
  (name: string) => pair(`¿Qué hábito personal conservarías y cuál cambiarías para vivir en ${name}?`, `Which personal habit would you keep, and which would you change to live in ${name}?`),
  (name: string, life: string) => pair(`Sin buscar información extra, ¿qué te da curiosidad de ${name} cuando pensás en ${life}?`, `Without looking anything up, what makes you curious about ${name} when you think about ${life}?`),
  (name: string, life: string) => pair(`¿Cómo sería un fin de semana ideal en ${name} para alguien que quiere ${life}?`, `What would an ideal weekend in ${name} be like for someone who wants ${life}?`),
  (name: string, life: string) => pair(`¿Qué ventaja y qué reto imaginás en ${name} si tu prioridad es ${life}?`, `What advantage and challenge do you imagine in ${name} if your priority is ${life}?`),
];

export const mexicoEntities: MexicoEntity[] = raw.trim().split("\n").map((line, index) => {
  const [code, name, capital, region, hook, visual, lifestyle, first, second, words] = line.split("|") as [string, string, string, MexicoRegion, string, string, string, string, string, string];
  const vocabulary = words.split(",").map((word) => pair(`el/la ${word}`, word));
  const personal = questionBanks[index % questionBanks.length](name, lifestyle);
  return {
    code,
    number: String(index + 1).padStart(2, "0"),
    name,
    capital,
    region,
    color: palette[index % palette.length],
    hook,
    visual,
    lifestyle,
    contrast: [first, second],
    vocabulary,
    questions: [
      personal,
      pair(`Para una semana en ${name}, ¿elegís ${first} o ${second}? Explicá tu decisión.`, `For one week in ${name}, would you choose ${first} or ${second}? Explain your choice.`),
      pair(`¿Qué detalle de este paisaje —${visual.toLowerCase()}— se parece a un lugar que conocés?`, `Which part of this landscape —${visual.toLowerCase()}— resembles a place you know?`),
      pair(`Si pudieras trabajar o estudiar desde ${name} durante un mes, ¿cómo organizarías tus días?`, `If you could work or study from ${name} for a month, how would you organize your days?`),
      pair(`Compará ${name} con tu país: ¿dónde preferirías vivir, viajar y descansar?`, `Compare ${name} with your country: where would you rather live, travel and rest?`),
    ],
    followups: [
      pair("¿Qué ejemplo personal apoya tu respuesta?", "What personal example supports your answer?"),
      pair("¿Qué podría hacerte cambiar de opinión?", "What could make you change your mind?"),
      pair("¿Qué le preguntarías a una persona que vive allí?", "What would you ask someone who lives there?"),
    ],
  };
});

export const mexicoRegionNames = regions;
export const mexicoModes = ["EXPLORAR", "AL AZAR", "ELEGÍ ENTRE DOS", "¿DÓNDE VIVIRÍAS?", "TU PAÍS VS MÉXICO", "TU MÉXICO IDEAL"] as const;
export const mexicoIdealCategories = ["vivir", "trabajar", "vacacionar", "comer", "retirarte"] as const;
export const mexicoPromptCount = mexicoEntities.reduce((sum, entity) => sum + entity.questions.length, 0);
