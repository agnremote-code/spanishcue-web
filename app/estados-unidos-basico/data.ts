export type Pair={es:string;en:string};
export type UsaStop={
  id:string;number:string;name:string;nameEn:string;state:string;kind:"lugar"|"tema";region:string;color:string;x?:number;y?:number;
  kicker:Pair;fact:Pair;mission:Pair;quick:Pair[];words:Pair[];questions:Pair[];
};

const p=(es:string,en:string):Pair=>({es,en});

export const stops:UsaStop[]=[
  {id:"nueva-york",number:"01",name:"Nueva York",nameEn:"New York City",state:"NEW YORK",kind:"lugar",region:"Noreste",color:"#e44c52",x:87,y:27,
    kicker:p("Rascacielos, barrios y movimiento","Skyscrapers, neighbourhoods and movement"),
    fact:p("Nueva York tiene cinco distritos, un gran sistema de metro y comunidades de muchas partes del mundo.","New York has five boroughs, a large subway system and communities from many parts of the world."),
    mission:p("Hablá de ciudades grandes y de tu día ideal.","Talk about big cities and your ideal day."),
    quick:[p("Me encanta.","I love it."),p("Es demasiado grande.","It is too big."),p("Quiero conocerla.","I want to visit it.")],
    words:[p("rascacielos","skyscraper"),p("metro","subway"),p("barrio","neighbourhood"),p("parque","park"),p("museo","museum"),p("ruidoso/a","noisy"),p("caminar","walk"),p("comida callejera","street food")],
    questions:[p("¿Te gustan las ciudades grandes? ¿Por qué?","Do you like big cities? Why?"),p("¿Preferís caminar o usar el metro?","Do you prefer walking or taking the subway?"),p("¿Qué querés visitar: un parque, un museo o un rascacielos?","What do you want to visit: a park, a museum or a skyscraper?"),p("¿Qué comida callejera querés probar?","What street food do you want to try?"),p("¿Tu ciudad es tranquila o ruidosa?","Is your city quiet or noisy?"),p("Tenés una tarde en Nueva York. ¿Qué hacés primero?","You have one afternoon in New York. What do you do first?")]},

  {id:"washington-dc",number:"02",name:"Washington, D. C.",nameEn:"Washington, D.C.",state:"DISTRICT OF COLUMBIA",kind:"lugar",region:"Costa este",color:"#3b6fa5",x:82,y:41,
    kicker:p("Museos, monumentos y capital","Museums, monuments and capital city"),
    fact:p("Washington es la capital del país. Muchos museos Smithsonian tienen entrada gratuita.","Washington is the country’s capital. Many Smithsonian museums have free admission."),
    mission:p("Hablá de historia, museos y capitales.","Talk about history, museums and capital cities."),
    quick:[p("Me interesa la historia.","I am interested in history."),p("Prefiero el arte.","I prefer art."),p("Quiero un museo gratis.","I want a free museum.")],
    words:[p("capital","capital city"),p("monumento","monument"),p("museo","museum"),p("historia","history"),p("gratis","free"),p("gobierno","government"),p("visitar","visit"),p("aprender","learn")],
    questions:[p("¿Cuál es la capital de tu país?","What is the capital of your country?"),p("¿Te gustan los museos? ¿Qué tipo?","Do you like museums? What type?"),p("¿Preferís aprender historia con un libro o en un lugar real?","Do you prefer learning history from a book or in a real place?"),p("¿Qué monumento famoso conocés?","Which famous monument do you know?"),p("¿Es importante que algunos museos sean gratis?","Is it important for some museums to be free?"),p("Tenés tres horas. ¿Elegís arte, ciencia o historia?","You have three hours. Do you choose art, science or history?")]},

  {id:"miami-everglades",number:"03",name:"Miami y los Everglades",nameEn:"Miami and the Everglades",state:"FLORIDA",kind:"lugar",region:"Sudeste",color:"#1da6a0",x:84,y:78,
    kicker:p("Playa, español y humedales","Beach, Spanish and wetlands"),
    fact:p("Miami tiene una gran vida bilingüe. Cerca, los Everglades protegen humedales y muchos animales.","Miami has a large bilingual community. Nearby, the Everglades protect wetlands and many animals."),
    mission:p("Hablá del clima, la playa y los animales.","Talk about weather, the beach and animals."),
    quick:[p("Quiero ir a la playa.","I want to go to the beach."),p("Prefiero la naturaleza.","I prefer nature."),p("No me gusta el calor.","I do not like heat.")],
    words:[p("playa","beach"),p("calor","heat"),p("humedal","wetland"),p("caimán","alligator"),p("bilingüe","bilingual"),p("barco","boat"),p("proteger","protect"),p("húmedo/a","humid")],
    questions:[p("¿Te gusta el clima caluroso y húmedo?","Do you like hot and humid weather?"),p("¿Preferís la playa o un parque natural?","Do you prefer the beach or a natural park?"),p("¿Qué animal querés ver en los Everglades?","What animal do you want to see in the Everglades?"),p("¿Hablás más de un idioma? ¿Cuáles?","Do you speak more than one language? Which ones?"),p("¿Qué llevás para un día de mucho calor?","What do you take for a very hot day?"),p("Elegí: una mañana en barco o una tarde en la playa. ¿Por qué?","Choose: a morning on a boat or an afternoon at the beach. Why?")]},

  {id:"nueva-orleans",number:"04",name:"Nueva Orleans",nameEn:"New Orleans",state:"LOUISIANA",kind:"lugar",region:"Golfo de México",color:"#8d5aa7",x:65,y:68,
    kicker:p("Música, cocina y mezcla cultural","Music, food and cultural mixture"),
    fact:p("La ciudad es conocida por el jazz y por culturas criollas y cajún presentes en su música y su comida.","The city is known for jazz and for Creole and Cajun cultures present in its music and food."),
    mission:p("Hablá de música, baile y comidas nuevas.","Talk about music, dancing and new foods."),
    quick:[p("Quiero escuchar jazz.","I want to listen to jazz."),p("Quiero probar la comida.","I want to try the food."),p("Prefiero algo tranquilo.","I prefer something quiet.")],
    words:[p("jazz","jazz"),p("banda","band"),p("bailar","dance"),p("picante","spicy"),p("mariscos","seafood"),p("festival","festival"),p("barrio histórico","historic district"),p("cocina criolla","Creole food")],
    questions:[p("¿Te gusta el jazz? ¿Qué música escuchás?","Do you like jazz? What music do you listen to?"),p("¿Te gusta bailar en público?","Do you like dancing in public?"),p("¿Comés comida picante?","Do you eat spicy food?"),p("¿Preferís escuchar música en la calle o en un teatro?","Do you prefer listening to music in the street or in a theatre?"),p("¿Qué comida de tu ciudad representa una mezcla cultural?","Which food from your city represents a cultural mixture?"),p("Planeá una noche: música, cena y paseo. ¿En qué orden?","Plan an evening: music, dinner and a walk. In what order?")]},

  {id:"chicago",number:"05",name:"Chicago",nameEn:"Chicago",state:"ILLINOIS",kind:"lugar",region:"Grandes Lagos",color:"#3c86b5",x:65,y:31,
    kicker:p("Arquitectura, viento y lago","Architecture, wind and lake"),
    fact:p("Chicago está junto al lago Míchigan y es famosa por su arquitectura, sus barrios y su historia musical.","Chicago is beside Lake Michigan and is famous for its architecture, neighbourhoods and musical history."),
    mission:p("Hablá de edificios, clima y vida junto al agua.","Talk about buildings, weather and life by the water."),
    quick:[p("Me gusta la arquitectura.","I like architecture."),p("No me gusta el frío.","I do not like cold weather."),p("Quiero caminar junto al lago.","I want to walk by the lake.")],
    words:[p("lago","lake"),p("edificio","building"),p("arquitectura","architecture"),p("viento","wind"),p("invierno","winter"),p("barco","boat"),p("barrio","neighbourhood"),p("vista","view")],
    questions:[p("¿Te gustan los edificios modernos o antiguos?","Do you like modern or old buildings?"),p("¿Cómo es el invierno en tu ciudad?","What is winter like in your city?"),p("¿Preferís vivir junto a un lago o junto al mar?","Do you prefer living by a lake or by the sea?"),p("¿Te gusta mirar una ciudad desde arriba?","Do you like looking at a city from above?"),p("¿Qué actividad hacés cuando hace mucho frío?","What activity do you do when it is very cold?"),p("Elegí un paseo: barco, arquitectura o comida. ¿Por qué?","Choose an outing: boat, architecture or food. Why?")]},

  {id:"nashville",number:"06",name:"Nashville",nameEn:"Nashville",state:"TENNESSEE",kind:"lugar",region:"Sur",color:"#d89445",x:71,y:48,
    kicker:p("Guitarras y canciones country","Guitars and country songs"),
    fact:p("Nashville es un centro de música country, con estudios, escenarios y muchos músicos.","Nashville is a centre for country music, with studios, venues and many musicians."),
    mission:p("Hablá de canciones, instrumentos y conciertos.","Talk about songs, instruments and concerts."),
    quick:[p("Me gusta la música en vivo.","I like live music."),p("Quiero tocar la guitarra.","I want to play guitar."),p("Prefiero escuchar música en casa.","I prefer listening at home.")],
    words:[p("guitarra","guitar"),p("canción","song"),p("cantante","singer"),p("concierto","concert"),p("escenario","stage"),p("letra","lyrics"),p("música en vivo","live music"),p("aprender","learn")],
    questions:[p("¿Qué música escuchás todos los días?","What music do you listen to every day?"),p("¿Tocás un instrumento? ¿Cuál?","Do you play an instrument? Which one?"),p("¿Preferís conciertos grandes o pequeños?","Do you prefer big or small concerts?"),p("¿Qué canción te hace feliz?","Which song makes you happy?"),p("¿La letra o la música es más importante para vos?","Are lyrics or music more important to you?"),p("Sos cantante por un día. ¿Qué tipo de canción cantás?","You are a singer for one day. What type of song do you sing?")]},

  {id:"texas",number:"07",name:"Austin y Texas",nameEn:"Austin and Texas",state:"TEXAS",kind:"lugar",region:"Sur central",color:"#bd5748",x:50,y:65,
    kicker:p("Espacios grandes, música y barbacoa","Big spaces, music and barbecue"),
    fact:p("Texas es un estado muy grande. Austin combina música en vivo, parques y una fuerte cultura gastronómica.","Texas is a very large state. Austin combines live music, parks and a strong food culture."),
    mission:p("Hablá de distancias, comida y ciudades grandes.","Talk about distances, food and big cities."),
    quick:[p("Quiero probar la barbacoa.","I want to try barbecue."),p("Me gustan los espacios grandes.","I like big spaces."),p("Prefiero una ciudad pequeña.","I prefer a small city.")],
    words:[p("estado","state"),p("grande","big"),p("barbacoa","barbecue"),p("camioneta","pickup truck"),p("música en vivo","live music"),p("parque","park"),p("calor","heat"),p("distancia","distance")],
    questions:[p("¿Vivís en una ciudad grande o pequeña?","Do you live in a big or small city?"),p("¿Te gusta viajar muchas horas en auto?","Do you like travelling many hours by car?"),p("¿Comés carne, verduras o las dos cosas en una barbacoa?","Do you eat meat, vegetables or both at a barbecue?"),p("¿Qué hacés en un parque con amigos?","What do you do in a park with friends?"),p("¿Preferís mucho espacio o todo cerca?","Do you prefer lots of space or everything nearby?"),p("Prepará un sábado en Austin: ¿qué comés y qué música escuchás?","Plan a Saturday in Austin: what do you eat and what music do you listen to?")]},

  {id:"rocosas",number:"08",name:"Denver y las Rocosas",nameEn:"Denver and the Rockies",state:"COLORADO",kind:"lugar",region:"Montañas",color:"#647e72",x:41,y:40,
    kicker:p("Altura, nieve y aire libre","Altitude, snow and the outdoors"),
    fact:p("Denver está cerca de las Montañas Rocosas, una región popular para caminar, esquiar y observar la naturaleza.","Denver is near the Rocky Mountains, a popular region for hiking, skiing and watching nature."),
    mission:p("Hablá de montañas, deportes y vacaciones.","Talk about mountains, sports and holidays."),
    quick:[p("Me gustan las montañas.","I like mountains."),p("Quiero ver nieve.","I want to see snow."),p("Prefiero descansar.","I prefer resting.")],
    words:[p("montaña","mountain"),p("nieve","snow"),p("caminar","hike"),p("esquiar","ski"),p("altura","altitude"),p("bosque","forest"),p("mochila","backpack"),p("vista","view")],
    questions:[p("¿Te gustan las montañas?","Do you like mountains?"),p("¿Sabés esquiar? ¿Querés aprender?","Can you ski? Do you want to learn?"),p("¿Qué llevás en una mochila para caminar?","What do you take in a backpack for hiking?"),p("¿Preferís vacaciones activas o tranquilas?","Do you prefer active or relaxing holidays?"),p("¿Hay montañas cerca de tu ciudad?","Are there mountains near your city?"),p("Elegí: caminar en verano o esquiar en invierno. ¿Por qué?","Choose: hiking in summer or skiing in winter. Why?")]},

  {id:"gran-canon",number:"09",name:"Gran Cañón",nameEn:"Grand Canyon",state:"ARIZONA",kind:"lugar",region:"Suroeste",color:"#d66e43",x:28,y:54,
    kicker:p("Rocas, río y tiempo","Rocks, river and time"),
    fact:p("El río Colorado y la erosión formaron un cañón enorme con muchas capas de roca visibles.","The Colorado River and erosion formed an enormous canyon with many visible rock layers."),
    mission:p("Hablá de paisajes, fotos y aventura.","Talk about landscapes, photos and adventure."),
    quick:[p("La vista es increíble.","The view is amazing."),p("Quiero caminar.","I want to hike."),p("Me da un poco de miedo.","It scares me a little.")],
    words:[p("cañón","canyon"),p("roca","rock"),p("río","river"),p("sendero","trail"),p("profundo/a","deep"),p("mirador","viewpoint"),p("atardecer","sunset"),p("cuidar","take care")],
    questions:[p("¿Te gustan los paisajes de desierto?","Do you like desert landscapes?"),p("¿Preferís ver el cañón desde un mirador o caminar?","Do you prefer seeing the canyon from a viewpoint or hiking?"),p("¿Qué momento es mejor para una foto: mañana o atardecer?","What time is better for a photo: morning or sunset?"),p("¿Te dan miedo las alturas?","Are you afraid of heights?"),p("¿Qué colores ves en un paisaje de roca?","What colours do you see in a rocky landscape?"),p("Tenés agua, comida y tres horas. ¿Qué plan hacés?","You have water, food and three hours. What is your plan?")]},

  {id:"yellowstone",number:"10",name:"Yellowstone",nameEn:"Yellowstone",state:"WYOMING · MONTANA · IDAHO",kind:"lugar",region:"Oeste interior",color:"#6f8f48",x:36,y:21,
    kicker:p("Géiseres y animales salvajes","Geysers and wild animals"),
    fact:p("Yellowstone fue el primer parque nacional del país y tiene géiseres, aguas termales y fauna salvaje.","Yellowstone was the country’s first national park and has geysers, hot springs and wild animals."),
    mission:p("Hablá de animales, seguridad y parques.","Talk about animals, safety and parks."),
    quick:[p("Quiero ver un géiser.","I want to see a geyser."),p("Me gustan los animales.","I like animals."),p("Prefiero mirar de lejos.","I prefer watching from far away.")],
    words:[p("géiser","geyser"),p("agua termal","hot spring"),p("bisonte","bison"),p("oso","bear"),p("salvaje","wild"),p("distancia","distance"),p("acampar","camp"),p("seguro/a","safe")],
    questions:[p("¿Qué animal salvaje querés ver?","Which wild animal do you want to see?"),p("¿Te gusta acampar?","Do you like camping?"),p("¿Preferís animales o paisajes?","Do you prefer animals or landscapes?"),p("¿Qué reglas son importantes cerca de animales salvajes?","Which rules are important near wild animals?"),p("¿Viste alguna vez un géiser o agua termal?","Have you ever seen a geyser or hot spring?"),p("Elegí tres cosas para un día en el parque. ¿Qué llevás?","Choose three things for a day in the park. What do you take?")]},

  {id:"california",number:"11",name:"Costa de California",nameEn:"California Coast",state:"CALIFORNIA",kind:"lugar",region:"Costa oeste",color:"#e18455",x:13,y:45,
    kicker:p("Océano, ciudades y árboles gigantes","Ocean, cities and giant trees"),
    fact:p("California tiene grandes ciudades, costa del Pacífico, desiertos y bosques de secuoyas.","California has large cities, Pacific coastline, deserts and redwood forests."),
    mission:p("Hablá del mar, los bosques y diferentes planes.","Talk about the sea, forests and different plans."),
    quick:[p("Quiero ver el Pacífico.","I want to see the Pacific."),p("Prefiero el bosque.","I prefer the forest."),p("Me gustan los dos.","I like both.")],
    words:[p("costa","coast"),p("océano","ocean"),p("secuoya","redwood"),p("puente","bridge"),p("ruta","road"),p("niebla","fog"),p("surf","surfing"),p("bosque","forest")],
    questions:[p("¿Preferís el océano o el bosque?","Do you prefer the ocean or the forest?"),p("¿Te gustaría aprender surf?","Would you like to learn to surf?"),p("¿Qué ciudad de California conocés?","Which city in California do you know?"),p("¿Te gustan los viajes por rutas junto al mar?","Do you like road trips beside the sea?"),p("¿Qué hacés en un día con niebla?","What do you do on a foggy day?"),p("Tenés dos días: playa, ciudad o secuoyas. ¿Cómo los organizás?","You have two days: beach, city or redwoods. How do you organise them?")]},

  {id:"seattle",number:"12",name:"Seattle y el Pacífico",nameEn:"Seattle and the Pacific",state:"WASHINGTON",kind:"lugar",region:"Noroeste",color:"#397b79",x:14,y:14,
    kicker:p("Café, lluvia y montañas","Coffee, rain and mountains"),
    fact:p("Seattle está entre agua y montañas. La región es conocida por sus bosques, mercados y cultura del café.","Seattle sits between water and mountains. The region is known for forests, markets and coffee culture."),
    mission:p("Hablá de lluvia, café y rutinas.","Talk about rain, coffee and routines."),
    quick:[p("Me gusta la lluvia.","I like rain."),p("Quiero un café.","I want a coffee."),p("Prefiero el sol.","I prefer sunshine.")],
    words:[p("lluvia","rain"),p("café","coffee"),p("mercado","market"),p("ferry","ferry"),p("bosque","forest"),p("montaña","mountain"),p("nublado/a","cloudy"),p("paraguas","umbrella")],
    questions:[p("¿Te gusta la lluvia?","Do you like rain?"),p("¿Tomás café, té o mate?","Do you drink coffee, tea or mate?"),p("¿Qué hacés en un día nublado?","What do you do on a cloudy day?"),p("¿Preferís un mercado o un centro comercial?","Do you prefer a market or a shopping centre?"),p("¿Te gustaría viajar en ferry?","Would you like to travel by ferry?"),p("Planeá una mañana tranquila en Seattle. ¿Qué hacés?","Plan a quiet morning in Seattle. What do you do?")]},

  {id:"alaska",number:"13",name:"Alaska",nameEn:"Alaska",state:"ALASKA",kind:"lugar",region:"Noroeste lejano",color:"#5c7f9d",x:11,y:86,
    kicker:p("Glaciares, largas distancias y naturaleza","Glaciers, long distances and nature"),
    fact:p("Alaska es el estado más grande por superficie y tiene glaciares, montañas y comunidades muy alejadas.","Alaska is the largest state by area and has glaciers, mountains and very remote communities."),
    mission:p("Hablá del frío, la distancia y la naturaleza.","Talk about cold, distance and nature."),
    quick:[p("Quiero ver un glaciar.","I want to see a glacier."),p("No me gusta el frío.","I do not like cold weather."),p("Me gusta la naturaleza.","I like nature.")],
    words:[p("glaciar","glacier"),p("frío","cold"),p("remoto/a","remote"),p("montaña","mountain"),p("ballena","whale"),p("avión pequeño","small plane"),p("abrigo","coat"),p("verano","summer")],
    questions:[p("¿Te gusta el frío?","Do you like cold weather?"),p("¿Qué ropa usás en invierno?","What clothes do you wear in winter?"),p("¿Querés ver un glaciar, una ballena o una montaña?","Do you want to see a glacier, a whale or a mountain?"),p("¿Podés vivir lejos de una ciudad?","Can you live far from a city?"),p("¿Preferís viajar en verano o invierno?","Do you prefer travelling in summer or winter?"),p("Prepará una valija para Alaska. Elegí cinco cosas.","Pack a suitcase for Alaska. Choose five things.")]},

  {id:"hawaii",number:"14",name:"Hawái",nameEn:"Hawaii",state:"HAWAIʻI",kind:"lugar",region:"Pacífico",color:"#2ca79a",x:32,y:88,
    kicker:p("Islas, volcanes y cultura hawaiana","Islands, volcanoes and Hawaiian culture"),
    fact:p("Hawái es un archipiélago del Pacífico con volcanes activos y una cultura indígena hawaiana viva.","Hawaii is a Pacific archipelago with active volcanoes and a living Native Hawaiian culture."),
    mission:p("Hablá de islas, volcanes y respeto cultural.","Talk about islands, volcanoes and cultural respect."),
    quick:[p("Quiero ver un volcán.","I want to see a volcano."),p("Prefiero la playa.","I prefer the beach."),p("Quiero aprender la cultura local.","I want to learn about local culture.")],
    words:[p("isla","island"),p("volcán","volcano"),p("lava","lava"),p("playa","beach"),p("cultura local","local culture"),p("respetar","respect"),p("océano","ocean"),p("flor","flower")],
    questions:[p("¿Te gustaría vivir en una isla?","Would you like to live on an island?"),p("¿Preferís ver un volcán o ir a la playa?","Do you prefer seeing a volcano or going to the beach?"),p("¿Qué sabés sobre Hawái?","What do you know about Hawaii?"),p("¿Cómo puede un turista respetar la cultura local?","How can a tourist respect local culture?"),p("¿Qué actividad querés hacer en el océano?","What activity do you want to do in the ocean?"),p("Tenés un día: naturaleza, cultura y comida. ¿Qué elegís primero?","You have one day: nature, culture and food. What do you choose first?")]},

  {id:"ruta",number:"15",name:"Viajes por carretera",nameEn:"Road trips",state:"COAST TO COAST",kind:"tema",region:"Lente de viaje",color:"#c84f49",
    kicker:p("Rutas largas y paradas pequeñas","Long roads and small stops"),
    fact:p("Los viajes por carretera forman parte del imaginario del país; la histórica Ruta 66 conecta Chicago con California.","Road trips are part of the country’s imagination; historic Route 66 connects Chicago with California."),
    mission:p("Hablá de transporte, compañía y equipaje.","Talk about transport, company and luggage."),
    quick:[p("Me gusta viajar en auto.","I like travelling by car."),p("Prefiero el tren.","I prefer the train."),p("Necesito muchas paradas.","I need many stops.")],
    words:[p("ruta","road"),p("auto","car"),p("parada","stop"),p("mapa","map"),p("equipaje","luggage"),p("nafta","gas"),p("motel","motel"),p("compañero/a de viaje","travel companion")],
    questions:[p("¿Te gustan los viajes largos en auto?","Do you like long car trips?"),p("¿Con quién querés viajar?","Who do you want to travel with?"),p("¿Qué música escuchás en la ruta?","What music do you listen to on the road?"),p("¿Preferís planear todo o parar espontáneamente?","Do you prefer planning everything or stopping spontaneously?"),p("¿Qué tres cosas llevás siempre?","Which three things do you always take?"),p("Elegí una ruta de tres paradas en el mapa.","Choose a three-stop route on the map.")]},

  {id:"comida",number:"16",name:"Comidas y migraciones",nameEn:"Food and migrations",state:"MANY TRADITIONS",kind:"tema",region:"Lente de sabores",color:"#da7b3d",
    kicker:p("Recetas de muchas comunidades","Recipes from many communities"),
    fact:p("La comida del país combina tradiciones indígenas, africanas, europeas, latinoamericanas, asiáticas y muchas más.","Food in the country combines Native, African, European, Latin American, Asian and many other traditions."),
    mission:p("Hablá de gustos, ingredientes y comidas familiares.","Talk about tastes, ingredients and family foods."),
    quick:[p("Quiero probarlo.","I want to try it."),p("Prefiero comida casera.","I prefer homemade food."),p("No como eso.","I do not eat that.")],
    words:[p("receta","recipe"),p("ingrediente","ingredient"),p("dulce","sweet"),p("salado/a","savoury"),p("picante","spicy"),p("casero/a","homemade"),p("compartir","share"),p("familia","family")],
    questions:[p("¿Cuál es tu comida favorita?","What is your favourite food?"),p("¿Preferís dulce, salado o picante?","Do you prefer sweet, savoury or spicy?"),p("¿Cocinás en casa? ¿Qué preparás?","Do you cook at home? What do you make?"),p("¿Qué receta es importante en tu familia?","Which recipe is important in your family?"),p("¿Qué comida de Estados Unidos querés probar?","Which food from the United States do you want to try?"),p("Armá una cena con entrada, plato principal y postre.","Create a dinner with a starter, main course and dessert.")]},

  {id:"musica",number:"17",name:"Músicas de Estados Unidos",nameEn:"Music in the USA",state:"JAZZ · BLUES · HIP-HOP · COUNTRY",kind:"tema",region:"Lente de sonidos",color:"#8c5ca3",
    kicker:p("Ritmos que viajaron por el mundo","Sounds that travelled around the world"),
    fact:p("El jazz, el blues, el hip-hop y el country tienen historias diferentes y fuertes raíces regionales y comunitarias.","Jazz, blues, hip-hop and country have different histories and strong regional and community roots."),
    mission:p("Hablá de artistas, momentos y emociones.","Talk about artists, moments and emotions."),
    quick:[p("Esta música me gusta.","I like this music."),p("Quiero bailar.","I want to dance."),p("No es mi estilo.","It is not my style.")],
    words:[p("ritmo","rhythm"),p("artista","artist"),p("banda","band"),p("voz","voice"),p("bailar","dance"),p("relajarse","relax"),p("concierto","concert"),p("favorito/a","favourite")],
    questions:[p("¿Quién es tu artista favorito/a?","Who is your favourite artist?"),p("¿Qué música escuchás para trabajar?","What music do you listen to for work?"),p("¿Qué música escuchás para bailar?","What music do you listen to for dancing?"),p("¿Preferís una banda o un solista?","Do you prefer a band or a solo artist?"),p("¿Fuiste a un concierto? ¿Cómo fue?","Have you been to a concert? What was it like?"),p("Creá una lista de tres canciones para un viaje.","Create a three-song playlist for a trip.")]},

  {id:"idiomas",number:"18",name:"Idiomas y comunidades",nameEn:"Languages and communities",state:"MANY VOICES",kind:"tema",region:"Lente de voces",color:"#407fb4",
    kicker:p("Inglés, español y cientos de lenguas","English, Spanish and hundreds of languages"),
    fact:p("Millones de personas hablan en casa una lengua diferente del inglés; el español es la más común entre ellas.","Millions of people speak a language other than English at home; Spanish is the most common among them."),
    mission:p("Hablá de idiomas, aprendizaje e identidad.","Talk about languages, learning and identity."),
    quick:[p("Hablo dos idiomas.","I speak two languages."),p("Estoy aprendiendo español.","I am learning Spanish."),p("Quiero practicar más.","I want to practise more.")],
    words:[p("idioma","language"),p("acento","accent"),p("aprender","learn"),p("practicar","practise"),p("familia","family"),p("comunidad","community"),p("cartel bilingüe","bilingual sign"),p("entender","understand")],
    questions:[p("¿Qué idiomas hablás?","Which languages do you speak?"),p("¿Por qué estudiás español?","Why are you studying Spanish?"),p("¿Dónde practicás idiomas?","Where do you practise languages?"),p("¿Te gusta escuchar diferentes acentos?","Do you like listening to different accents?"),p("¿Hay carteles bilingües en tu ciudad?","Are there bilingual signs in your city?"),p("¿Qué palabra en español usás mucho?","Which Spanish word do you use a lot?")]},

  {id:"deportes",number:"19",name:"Deportes y equipos",nameEn:"Sports and teams",state:"GAME DAY",kind:"tema",region:"Lente de juego",color:"#568d63",
    kicker:p("Béisbol, básquet, fútbol y más","Baseball, basketball, soccer and more"),
    fact:p("Los deportes profesionales y universitarios reúnen a grandes comunidades de aficionados en muchas ciudades.","Professional and university sports bring large fan communities together in many cities."),
    mission:p("Hablá de juegos, equipos y fines de semana.","Talk about games, teams and weekends."),
    quick:[p("Me gustan los deportes.","I like sports."),p("Prefiero mirar.","I prefer watching."),p("No sigo ningún equipo.","I do not follow a team.")],
    words:[p("equipo","team"),p("partido","game"),p("estadio","stadium"),p("jugador/a","player"),p("ganar","win"),p("perder","lose"),p("entrenar","train"),p("aficionado/a","fan")],
    questions:[p("¿Qué deporte te gusta?","Which sport do you like?"),p("¿Practicás algún deporte?","Do you play any sport?"),p("¿Preferís jugar o mirar?","Do you prefer playing or watching?"),p("¿Tenés un equipo favorito?","Do you have a favourite team?"),p("¿Con quién mirás partidos?","Who do you watch games with?"),p("Inventá un equipo: nombre, colores y ciudad.","Invent a team: name, colours and city.")]},

  {id:"vida-cotidiana",number:"20",name:"Vida cotidiana",nameEn:"Everyday life",state:"BIG COUNTRY · MANY ROUTINES",kind:"tema",region:"Lente diario",color:"#b45b55",
    kicker:p("Distancias, horarios y formas de vivir","Distances, schedules and ways of living"),
    fact:p("La vida cambia mucho entre una gran ciudad, un suburbio, un pueblo pequeño y una zona rural.","Life changes greatly between a big city, a suburb, a small town and a rural area."),
    mission:p("Hablá de tu casa, tu rutina y tu lugar ideal.","Talk about your home, routine and ideal place."),
    quick:[p("Prefiero la ciudad.","I prefer the city."),p("Quiero más tranquilidad.","I want more peace and quiet."),p("Necesito transporte público.","I need public transport.")],
    words:[p("ciudad","city"),p("suburbio","suburb"),p("pueblo","small town"),p("campo","countryside"),p("vecino/a","neighbour"),p("auto","car"),p("trabajo","work"),p("cerca","near")],
    questions:[p("¿Dónde vivís: ciudad, suburbio, pueblo o campo?","Where do you live: city, suburb, small town or countryside?"),p("¿Usás auto o transporte público?","Do you use a car or public transport?"),p("¿Qué lugares están cerca de tu casa?","Which places are near your home?"),p("¿Conocés a tus vecinos?","Do you know your neighbours?"),p("¿Qué hacés normalmente el fin de semana?","What do you normally do at the weekend?"),p("Describí tu lugar ideal para vivir con cinco palabras.","Describe your ideal place to live in five words.")]},
];

export const starters:Pair[]=[
  p("Sí, me gusta…","Yes, I like…"),p("No, prefiero…","No, I prefer…"),p("Quiero visitar…","I want to visit…"),p("En mi ciudad…","In my city…"),p("Normalmente, yo…","Normally, I…"),p("Mi plan es…","My plan is…")
];

export const connectors:Pair[]=[p("porque","because"),p("también","also"),p("pero","but"),p("con","with"),p("primero","first"),p("después","afterwards")];

export const speakingMoves:Pair[]=[
  p("Agregá una razón con “porque”.","Add a reason with “because”."),
  p("Agregá un ejemplo personal.","Add a personal example."),
  p("Comparalo con tu ciudad o tu país.","Compare it with your city or country."),
  p("Hacé la misma pregunta al profesor.","Ask the teacher the same question."),
  p("Respondé otra vez sin mirar el inglés.","Answer again without looking at the English."),
  p("Sumá dos palabras del wordbank.","Add two words from the wordbank.")
];
