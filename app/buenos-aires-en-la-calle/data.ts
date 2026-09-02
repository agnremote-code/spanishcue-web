export type Pair = { es: string; en: string };
export type Dialogue = { a: string; b: string; en: string };
export type Prompt = { es: string; en: string; starter: string };

export type CityStop = {
  id: string;
  number: string;
  title: string;
  english: string;
  zone: string;
  atlas: number;
  tile: 1 | 2 | 3 | 4;
  position: { x: number; y: number };
  hook: string;
  hookEn: string;
  words: Pair[];
  dialogues: Dialogue[];
  prompts: Prompt[];
  local: Pair & { note: string };
  mission: string;
};

const p = (es: string, en: string): Pair => ({ es, en });
const d = (a: string, b: string, en: string): Dialogue => ({ a, b, en });
const q = (es: string, en: string, starter: string): Prompt => ({ es, en, starter });

export const stops: CityStop[] = [
  {
    id: "aeropuerto", number: "01", title: "Aeropuerto", english: "Airport", zone: "Llegada", atlas: 1, tile: 1, position: { x: 12, y: 67 },
    hook: "Llegaste. No hace falta hablar perfecto: solo necesitás orientarte y dar el primer paso.", hookEn: "You have arrived. You do not need perfect Spanish: just enough to get oriented.",
    words: [p("la valija", "suitcase"), p("la salida", "exit"), p("llegadas", "arrivals"), p("el cambio", "exchange desk"), p("un taxi", "a taxi")],
    dialogues: [d("Disculpá, ¿dónde está la salida?", "Al fondo, a la derecha.", "Excuse me, where is the exit? — At the back, on the right."), d("¿Hay wifi acá?", "Sí, es gratis.", "Is there Wi-Fi here? — Yes, it is free."), d("Quiero ir a Palermo.", "Dale, vamos.", "I want to go to Palermo. — Great, let's go.")],
    prompts: [q("¿Qué es lo primero que hacés cuando llegás a un país?", "What is the first thing you do when you arrive in a country?", "Primero, yo…"), q("¿Viajás con valija grande o equipaje liviano?", "Do you travel with a big suitcase or light luggage?", "Normalmente viajo con…"), q("¿Preferís taxi, colectivo o transporte privado desde el aeropuerto? ¿Por qué?", "Do you prefer a taxi, bus or private transport from the airport? Why?", "Prefiero… porque…")],
    local: { es: "Dale", en: "Okay / great / go ahead", note: "La vas a escuchar todo el tiempo. El tono cambia el significado." }, mission: "Pedí una dirección y confirmá si está lejos."
  },
  {
    id: "hotel", number: "02", title: "Hotel", english: "Hotel", zone: "Primer día", atlas: 1, tile: 2, position: { x: 25, y: 42 },
    hook: "Hacé el check-in, preguntá lo necesario y guardá energía para salir.", hookEn: "Check in, ask what you need, and save your energy for the city.",
    words: [p("la reserva", "booking"), p("la habitación", "room"), p("la llave", "key"), p("el desayuno", "breakfast"), p("la recepción", "front desk")],
    dialogues: [d("Hola, tengo una reserva a nombre de Taylor.", "Perfecto. ¿Me mostrás el pasaporte?", "Hi, I have a booking under Taylor. — Perfect. Can you show me your passport?"), d("¿A qué hora es el desayuno?", "De siete a diez.", "What time is breakfast? — From seven to ten."), d("El wifi no funciona.", "Ya lo revisamos.", "The Wi-Fi is not working. — We will check it now.")],
    prompts: [q("¿Qué tres cosas necesitás en un buen hotel?", "What three things do you need in a good hotel?", "Necesito…"), q("¿Preferís hotel, departamento o hostel?", "Do you prefer a hotel, apartment or hostel?", "Prefiero… porque…"), q("¿Qué problema pequeño tuviste alguna vez en un alojamiento?", "What small problem have you had in accommodation?", "Una vez…")],
    local: { es: "Ya lo vemos", en: "We'll look at it now", note: "«Ya» muchas veces significa enseguida o en un momento." }, mission: "Hacé el check-in y preguntá por desayuno, wifi y horario de salida."
  },
  {
    id: "kiosco", number: "03", title: "Kiosco", english: "Kiosk", zone: "La esquina", atlas: 1, tile: 3, position: { x: 39, y: 67 },
    hook: "El kiosco porteño resuelve agua, golosinas, una SUBE y muchas urgencias pequeñas.", hookEn: "A Buenos Aires kiosk solves water, snacks, a SUBE card and many small emergencies.",
    words: [p("una botella de agua", "a bottle of water"), p("la tarjeta SUBE", "SUBE travel card"), p("cargar saldo", "top up credit"), p("el vuelto", "change"), p("un alfajor", "an alfajor")],
    dialogues: [d("¿Tenés tarjeta SUBE?", "Sí, me quedan dos.", "Do you have a SUBE card? — Yes, I have two left."), d("¿Me cargás cinco mil?", "Sí, apoyala acá.", "Can you add five thousand pesos? — Yes, place it here."), d("Dame un agua y un alfajor, por favor.", "¿Algo más?", "Give me a water and an alfajor, please. — Anything else?")],
    prompts: [q("¿Qué comprás normalmente en un kiosco?", "What do you normally buy at a kiosk?", "Compro…"), q("¿Preferís algo dulce o salado cuando viajás?", "Do you prefer something sweet or savoury when travelling?", "Prefiero…"), q("¿Qué objeto pequeño siempre llevás durante tus vacaciones?", "What small object do you always carry on holiday?", "Siempre llevo…")],
    local: { es: "¿Me cargás la SUBE?", en: "Can you top up my SUBE?", note: "En Buenos Aires usamos «vos»: cargás, tenés, querés." }, mission: "Comprá agua, pedí una SUBE y preguntá si aceptan tarjeta."
  },
  {
    id: "subte", number: "04", title: "Subte", english: "Underground", zone: "Bajo tierra", atlas: 1, tile: 4, position: { x: 53, y: 52 },
    hook: "Una estación, una combinación y una frase simple para no perderte.", hookEn: "One station, one connection and one simple phrase so you do not get lost.",
    words: [p("la estación", "station"), p("la línea", "line"), p("hacer combinación", "change lines"), p("el andén", "platform"), p("bajar", "get off")],
    dialogues: [d("¿Esta línea va al centro?", "Sí, bajate en Catedral.", "Does this line go downtown? — Yes, get off at Catedral."), d("¿Dónde hago combinación?", "En la próxima estación.", "Where do I change? — At the next station."), d("¿Falta mucho?", "No, son tres estaciones.", "Is it much further? — No, it is three stops.")],
    prompts: [q("¿Usás el metro en tu ciudad?", "Do you use the underground in your city?", "Sí, lo uso… / No, porque…"), q("¿Te resulta fácil o difícil leer un mapa de transporte?", "Is it easy or difficult for you to read a transport map?", "Me resulta…"), q("¿Qué hacés si tomás la línea equivocada?", "What do you do if you take the wrong line?", "Primero…")],
    local: { es: "Bajate acá", en: "Get off here", note: "Imperativo de vos: bajate, fijate, seguí." }, mission: "Preguntá cómo llegar al centro y repetí la información para confirmar."
  },
  {
    id: "bondi", number: "05", title: "Colectivo y taxi", english: "Bus & taxi", zone: "En movimiento", atlas: 2, tile: 1, position: { x: 68, y: 69 },
    hook: "Decí adónde vas, confirmá la parada y reconocé dos palabras muy porteñas.", hookEn: "Say where you are going, confirm the stop and recognise two very local words.",
    words: [p("el colectivo", "city bus"), p("la parada", "bus stop"), p("el chofer", "driver"), p("la esquina", "corner"), p("el cinturón", "seat belt")],
    dialogues: [d("¿Me avisás en Corrientes?", "Sí, te aviso.", "Can you tell me when we reach Corrientes? — Yes, I will."), d("Voy hasta Plaza de Mayo.", "Son cuatro paradas.", "I'm going to Plaza de Mayo. — It is four stops."), d("¿Podés ir por acá?", "Sí, no hay problema.", "Can you go this way? — Yes, no problem.")],
    prompts: [q("¿Preferís mirar la ciudad desde un colectivo o caminar?", "Do you prefer seeing the city from a bus or walking?", "Prefiero…"), q("¿Hablás con los taxistas cuando viajás?", "Do you talk to taxi drivers when travelling?", "Sí / No, porque…"), q("¿Qué transporte usás más en tu vida cotidiana?", "Which transport do you use most in everyday life?", "Uso más…")],
    local: { es: "el bondi", en: "the bus", note: "Lunfardo cotidiano: «colectivo» y «bondi» significan bus urbano." }, mission: "Decile al chofer tu destino y pedile que te avise."
  },
  {
    id: "cafe", number: "06", title: "Café notable", english: "Historic café", zone: "Una pausa", atlas: 2, tile: 2, position: { x: 78, y: 39 },
    hook: "Sentate sin apuro: un cortado y una medialuna ya son una conversación.", hookEn: "Sit down without rushing: a cortado and a medialuna are already a conversation.",
    words: [p("un cortado", "espresso with a little milk"), p("una medialuna", "crescent pastry"), p("la mesa", "table"), p("el mozo / la moza", "waiter / waitress"), p("la cuenta", "bill")],
    dialogues: [d("¿Qué vas a tomar?", "Un cortado y dos medialunas.", "What are you having? — A cortado and two medialunas."), d("¿Me traés la carta?", "Sí, enseguida.", "Can you bring me the menu? — Yes, right away."), d("La cuenta, por favor.", "¿Pagás con tarjeta?", "The bill, please. — Are you paying by card?")],
    prompts: [q("¿Qué tomás cuando necesitás una pausa?", "What do you drink when you need a break?", "Tomo…"), q("¿Te gusta sentarte afuera o adentro?", "Do you like sitting outside or inside?", "Me gusta…"), q("¿Con quién te gustaría compartir un café en Buenos Aires?", "Who would you like to share a coffee with in Buenos Aires?", "Me gustaría…")],
    local: { es: "Che, ¿tomamos un café?", en: "Hey, shall we get a coffee?", note: "«Che» llama la atención con familiaridad; usalo en contextos informales." }, mission: "Pedí una bebida, algo dulce y finalmente la cuenta."
  },
  {
    id: "panaderia", number: "07", title: "Panadería", english: "Bakery", zone: "A la mañana", atlas: 2, tile: 3, position: { x: 88, y: 58 },
    hook: "Elegí facturas, pedí una cantidad y entendé la pregunta «¿algo más?».", hookEn: "Choose pastries, ask for an amount and understand the question ‘anything else?’.",
    words: [p("las facturas", "sweet pastries"), p("el pan", "bread"), p("una docena", "a dozen"), p("medio kilo", "half a kilo"), p("recién hecho", "freshly made")],
    dialogues: [d("Dame media docena de facturas.", "¿Surtidas?", "Give me half a dozen pastries. — Mixed?"), d("¿Cuál está recién hecho?", "Este pan salió ahora.", "Which one is freshly made? — This bread just came out."), d("¿Algo más?", "No, nada más. Gracias.", "Anything else? — No, that's all. Thanks.")],
    prompts: [q("¿Qué desayunás durante las vacaciones?", "What do you have for breakfast on holiday?", "Desayuno…"), q("¿Preferís pan fresco o algo dulce?", "Do you prefer fresh bread or something sweet?", "Prefiero…"), q("¿Hay una panadería que te gusta cerca de tu casa?", "Is there a bakery you like near your home?", "Sí, hay… / No, pero…")],
    local: { es: "las facturas", en: "sweet pastries", note: "Acá no significa bills: en la panadería son medialunas y otras masas dulces." }, mission: "Comprá seis facturas surtidas y preguntá cuál está recién hecha."
  },
  {
    id: "verduleria", number: "08", title: "Verdulería", english: "Greengrocer", zone: "El barrio", atlas: 2, tile: 4, position: { x: 62, y: 27 },
    hook: "Colores, cantidades y una compra simple como la haría cualquier vecino.", hookEn: "Colours, quantities and a simple purchase just like a local would make.",
    words: [p("un kilo", "one kilo"), p("medio kilo", "half a kilo"), p("maduro", "ripe"), p("la bolsa", "bag"), p("¿cuánto sale?", "how much is it?")],
    dialogues: [d("Dame un kilo de tomates.", "¿Algo más?", "Give me a kilo of tomatoes. — Anything else?"), d("¿Estas paltas están maduras?", "Sí, para comer hoy.", "Are these avocados ripe? — Yes, for eating today."), d("¿Cuánto sale el kilo?", "Tres mil quinientos.", "How much is a kilo? — Three thousand five hundred.")],
    prompts: [q("¿Qué fruta comés mucho en verano?", "Which fruit do you eat a lot in summer?", "En verano como…"), q("¿Cocinás cuando estás de vacaciones?", "Do you cook when you are on holiday?", "Sí / No, porque…"), q("¿Qué producto es muy bueno en tu país?", "Which produce is very good in your country?", "En mi país…")],
    local: { es: "¿Cuánto sale?", en: "How much is it?", note: "En Argentina es muy común decir «sale» para preguntar el precio." }, mission: "Pedí dos frutas, una cantidad y confirmá el precio."
  },
  {
    id: "carniceria", number: "09", title: "Carnicería", english: "Butcher", zone: "Para cocinar", atlas: 3, tile: 1, position: { x: 45, y: 30 },
    hook: "No necesitás conocer todos los cortes: podés explicar qué querés cocinar.", hookEn: "You do not need to know every cut: you can explain what you want to cook.",
    words: [p("la carne", "meat"), p("el pollo", "chicken"), p("un corte", "a cut"), p("tierno", "tender"), p("para la parrilla", "for the barbecue")],
    dialogues: [d("¿Qué me recomendás para la parrilla?", "Este corte es muy tierno.", "What do you recommend for the barbecue? — This cut is very tender."), d("Dame cuatro bifes, por favor.", "¿Así de gruesos?", "Give me four steaks, please. — This thick?"), d("¿Tenés pollo?", "Sí, entero o en presas.", "Do you have chicken? — Yes, whole or in pieces.")],
    prompts: [q("¿Comés carne, pollo, pescado o vegetales?", "Do you eat meat, chicken, fish or vegetables?", "Como…"), q("¿Te gusta cocinar para otras personas?", "Do you like cooking for other people?", "Sí / No, porque…"), q("¿Qué comida prepararías para una cena simple?", "What would you prepare for a simple dinner?", "Prepararía…")],
    local: { es: "¿Qué me recomendás?", en: "What do you recommend?", note: "Una frase comodín cuando no conocés productos o cortes." }, mission: "Explicá qué querés cocinar y pedí una recomendación."
  },
  {
    id: "parrilla", number: "10", title: "Parrilla y bodegón", english: "Grill & traditional restaurant", zone: "La cena", atlas: 3, tile: 2, position: { x: 31, y: 55 },
    hook: "Pedí, compartí y preguntá por el tamaño de la porción antes de que llegue una montaña de comida.", hookEn: "Order, share and ask about portion size before a mountain of food arrives.",
    words: [p("la parrillada", "mixed grill"), p("la guarnición", "side dish"), p("para compartir", "to share"), p("el punto", "doneness"), p("la porción", "portion")],
    dialogues: [d("¿La porción es para compartir?", "Sí, comen dos personas.", "Is the portion for sharing? — Yes, it serves two people."), d("¿Cómo querés la carne?", "A punto, por favor.", "How would you like the meat? — Medium, please."), d("¿Qué guarnición pedimos?", "Papas fritas y ensalada.", "Which side shall we order? — Chips and salad.")],
    prompts: [q("¿Preferís compartir platos o pedir uno propio?", "Do you prefer sharing dishes or ordering your own?", "Prefiero…"), q("¿Cuál es una comida típica de tu país?", "What is a typical dish from your country?", "Una comida típica es…"), q("¿Qué cena simple te hace sentir de vacaciones?", "Which simple dinner makes you feel on holiday?", "Para mí…")],
    local: { es: "un bodegón", en: "traditional neighbourhood restaurant", note: "Suele tener platos clásicos, ambiente informal y porciones generosas." }, mission: "Preguntá qué recomiendan y si una porción alcanza para dos."
  },
  {
    id: "pizzeria", number: "11", title: "Pizzería", english: "Pizzeria", zone: "Al paso", atlas: 3, tile: 3, position: { x: 16, y: 28 },
    hook: "Una porción de pizza, una de fainá y cinco minutos de español real.", hookEn: "A slice of pizza, a slice of fainá and five minutes of real Spanish.",
    words: [p("una porción", "a slice"), p("la muzzarella", "mozzarella pizza"), p("la fainá", "chickpea flatbread"), p("para llevar", "to take away"), p("comer de parado", "eat standing")],
    dialogues: [d("Dame una de muzza y una fainá.", "¿Comés acá?", "Give me one mozzarella slice and one fainá. — Are you eating here?"), d("¿Es para llevar?", "No, como acá.", "Is it to take away? — No, I'll eat here."), d("¿La puedo calentar?", "Sí, esperá un minuto.", "Can you heat it? — Yes, wait a minute.")],
    prompts: [q("¿Cuál es tu tipo de pizza favorito?", "What is your favourite type of pizza?", "Mi favorita es…"), q("¿Te gusta comer rápido o sentarte con tiempo?", "Do you like eating quickly or sitting down with time?", "Me gusta…"), q("¿Qué comida nueva querés probar en Buenos Aires?", "Which new food do you want to try in Buenos Aires?", "Quiero probar…")],
    local: { es: "una de muzza", en: "a mozzarella slice", note: "Forma rápida y muy común de pedir una porción de muzzarella." }, mission: "Pedí dos porciones diferentes y decidí si comés ahí o llevás."
  },
  {
    id: "farmacia", number: "12", title: "Farmacia", english: "Pharmacy", zone: "Una solución", atlas: 3, tile: 4, position: { x: 88, y: 27 },
    hook: "Explicá un problema pequeño con palabras simples y pedí ayuda con calma.", hookEn: "Explain a small problem in simple words and ask for help calmly.",
    words: [p("me duele…", "my … hurts"), p("la crema", "cream"), p("un remedio", "medicine"), p("la receta", "prescription"), p("cada ocho horas", "every eight hours")],
    dialogues: [d("Me duele un poco la garganta.", "¿Tenés fiebre?", "My throat hurts a little. — Do you have a fever?"), d("Necesito algo para una picadura.", "Te recomiendo esta crema.", "I need something for an insect bite. — I recommend this cream."), d("¿Cómo lo tomo?", "Uno cada ocho horas.", "How do I take it? — One every eight hours.")],
    prompts: [q("¿Qué llevás siempre en tu botiquín de viaje?", "What do you always carry in your travel first-aid kit?", "Siempre llevo…"), q("¿Qué hacés si te sentís mal durante un viaje?", "What do you do if you feel unwell during a trip?", "Primero…"), q("¿Te resulta fácil explicar un dolor?", "Is it easy for you to explain pain?", "Me resulta…")],
    local: { es: "Necesito algo para…", en: "I need something for…", note: "Frase útil si no sabés el nombre exacto del producto." }, mission: "Explicá un síntoma leve y preguntá cómo usar el producto."
  },
  {
    id: "hospital", number: "13", title: "Guardia", english: "Hospital ER", zone: "Solo si hace falta", atlas: 4, tile: 1, position: { x: 7, y: 47 },
    hook: "Esta es solo una parada de la ciudad: aprendé lo esencial y seguí el viaje.", hookEn: "This is only one stop in the city: learn the essentials and continue your trip.",
    words: [p("la guardia", "ER / A&E"), p("una urgencia", "emergency"), p("el seguro", "insurance"), p("el pasaporte", "passport"), p("desde ayer", "since yesterday")],
    dialogues: [d("Necesito ver a un médico.", "¿Es una urgencia?", "I need to see a doctor. — Is it an emergency?"), d("Me siento mal desde ayer.", "¿Qué síntomas tenés?", "I have felt unwell since yesterday. — What symptoms do you have?"), d("Tengo seguro de viaje.", "Necesito el número de póliza.", "I have travel insurance. — I need the policy number.")],
    prompts: [q("¿Tenés seguro cuando viajás?", "Do you have insurance when travelling?", "Sí / No…"), q("¿Qué información médica es útil llevar?", "Which medical information is useful to carry?", "Es útil llevar…"), q("¿A quién llamás si necesitás ayuda en otro país?", "Who do you call if you need help in another country?", "Llamo a…")],
    local: { es: "la guardia", en: "hospital emergency department", note: "En Argentina, «ir a la guardia» es ir a urgencias." }, mission: "Decí desde cuándo te sentís mal y mostrale tu seguro al personal."
  },
  {
    id: "feria", number: "14", title: "Feria y plaza", english: "Market & square", zone: "Domingo", atlas: 4, tile: 2, position: { x: 49, y: 80 },
    hook: "Mirá, preguntá, compará y charlá sin obligación de comprar nada.", hookEn: "Look, ask, compare and chat without needing to buy anything.",
    words: [p("el puesto", "stall"), p("hecho a mano", "handmade"), p("un recuerdo", "souvenir"), p("la plaza", "square / park"), p("más barato", "cheaper")],
    dialogues: [d("¿Esto está hecho a mano?", "Sí, lo hago yo.", "Is this handmade? — Yes, I make it."), d("¿Tenés otro color?", "Sí, mirá estos.", "Do you have another colour? — Yes, look at these."), d("¿Me hacés precio?", "Te puedo hacer un descuento.", "Can you give me a better price? — I can give you a discount.")],
    prompts: [q("¿Comprás recuerdos cuando viajás?", "Do you buy souvenirs when travelling?", "Sí / No, porque…"), q("¿Preferís una feria o un centro comercial?", "Do you prefer a street market or a shopping centre?", "Prefiero…"), q("¿Qué objeto representa bien tu ciudad?", "Which object represents your city well?", "Para mí…")],
    local: { es: "Mirá", en: "Look", note: "Imperativo de vos. También vas a oír: probá, vení, fijate." }, mission: "Preguntá si algo es artesanal, pedí otro color y consultá el precio."
  },
  {
    id: "bar", number: "15", title: "Bar", english: "Bar", zone: "La noche empieza", atlas: 4, tile: 3, position: { x: 73, y: 85 },
    hook: "Pedí algo, brindá y sostené una charla pequeña sin buscar palabras perfectas.", hookEn: "Order something, make a toast and keep a small conversation going without perfect words.",
    words: [p("una cerveza", "a beer"), p("una birra", "a beer — informal"), p("una copa de vino", "a glass of wine"), p("con hielo", "with ice"), p("brindar", "make a toast")],
    dialogues: [d("¿Qué te pedís?", "Una birra, por favor.", "What are you getting? — A beer, please."), d("¿Querés hielo?", "Sí, un poco.", "Would you like ice? — Yes, a little."), d("¿De dónde sos?", "Soy de Inglaterra. Estoy de vacaciones.", "Where are you from? — I'm from England. I'm on holiday.")],
    prompts: [q("¿Qué bebida pedís en un bar?", "What drink do you order in a bar?", "Pido…"), q("¿Te gusta hablar con gente nueva cuando viajás?", "Do you like talking to new people when travelling?", "Sí / No, porque…"), q("¿Cuál es un buen tema para empezar una conversación?", "What is a good topic to start a conversation?", "Un buen tema es…")],
    local: { es: "una birra", en: "a beer", note: "Muy informal y común. En un bar también podés decir simplemente «una cerveza»." }, mission: "Pedí una bebida y presentate en dos frases."
  },
  {
    id: "boliche", number: "16", title: "Boliche", english: "Nightclub", zone: "Más tarde", atlas: 4, tile: 4, position: { x: 92, y: 77 },
    hook: "Entendé la entrada, el guardarropa y una invitación simple para bailar.", hookEn: "Understand the entrance, cloakroom and a simple invitation to dance.",
    words: [p("la entrada", "entry / ticket"), p("el guardarropa", "cloakroom"), p("la pista", "dance floor"), p("bailar", "dance"), p("nos vamos", "we're leaving")],
    dialogues: [d("¿Cuánto está la entrada?", "Quince mil con una consumición.", "How much is entry? — Fifteen thousand with one drink."), d("¿Dónde está el guardarropa?", "Abajo, al lado de la escalera.", "Where is the cloakroom? — Downstairs, by the stairs."), d("¿Querés bailar?", "Dale, vamos.", "Do you want to dance? — Sure, let's go.")],
    prompts: [q("¿Te gusta bailar o preferís escuchar música?", "Do you like dancing or prefer listening to music?", "Prefiero…"), q("¿A qué hora salís normalmente de noche?", "What time do you normally go out at night?", "Normalmente salgo…"), q("¿Qué música te da ganas de moverte?", "Which music makes you want to move?", "Me da ganas…")],
    local: { es: "el boliche", en: "nightclub", note: "En Argentina suele significar discoteca; el contexto distingue otros usos." }, mission: "Preguntá por la entrada, encontrá el guardarropa y decidí cuándo volver al hotel."
  }
];

export const calmPlan = ["Elegí solo 4 lugares.", "Usá las traducciones sin culpa.", "Respondé con una frase corta.", "Repetí la frase que más te sirva para el viaje."];
