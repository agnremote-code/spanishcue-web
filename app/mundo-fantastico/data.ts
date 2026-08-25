export type Pair = { es: string; en: string };
export type Continent = "América" | "Europa" | "África" | "Asia" | "Oceanía" | "Antártida";

export type Destination = {
  id: string;
  number: string;
  country: string;
  countryEn: string;
  continent: Continent;
  capital: Pair;
  color: string;
  x: number;
  y: number;
  title: Pair;
  landmark: Pair;
  food: Pair;
  nature: Pair;
  animal: Pair;
  culture: Pair;
  greeting: Pair;
  transport: Pair;
  climate: Pair;
};

export type WordGroup = { id: string; label: Pair; code: string; words: Pair[] };

const p = (es: string, en: string): Pair => ({ es, en });
const d = (
  id: string,
  number: string,
  country: string,
  countryEn: string,
  continent: Continent,
  capital: Pair,
  color: string,
  x: number,
  y: number,
  title: Pair,
  landmark: Pair,
  food: Pair,
  nature: Pair,
  animal: Pair,
  culture: Pair,
  greeting: Pair,
  transport: Pair,
  climate: Pair,
): Destination => ({ id, number, country, countryEn, continent, capital, color, x, y, title, landmark, food, nature, animal, culture, greeting, transport, climate });

export const continentEnglish: Record<Continent, string> = {
  América: "America — one continent",
  Europa: "Europe",
  África: "Africa",
  Asia: "Asia",
  Oceanía: "Oceania",
  Antártida: "Antarctica",
};

export const continentCodes: Record<Continent, string> = {
  América: "AM",
  Europa: "EU",
  África: "AF",
  Asia: "AS",
  Oceanía: "OC",
  Antártida: "AN",
};

export const continentColors: Record<Continent, string> = {
  América: "#ff6f61",
  Europa: "#f5b942",
  África: "#b879ff",
  Asia: "#38d6b5",
  Oceanía: "#39a8ff",
  Antártida: "#9de7ff",
};

export const destinations: Destination[] = [
  d("canada","01","Canadá","Canada","América",p("Ottawa","Ottawa"),"#e85b62",17,17,p("El bosque de las auroras","The aurora forest"),p("las Cataratas del Niágara","Niagara Falls"),p("la poutine","poutine"),p("un bosque enorme","a huge forest"),p("un alce","a moose"),p("el hockey","hockey"),p("hola","hello"),p("en tren","by train"),p("hace frío","it is cold")),
  d("estados-unidos","02","Estados Unidos","United States","América",p("Washington D. C.","Washington, D.C."),"#ff8d63",18,29,p("La ruta de las grandes ciudades","The great-city route"),p("Nueva York","New York City"),p("una hamburguesa","a hamburger"),p("un parque nacional","a national park"),p("un bisonte","a bison"),p("la música en vivo","live music"),p("hola","hello"),p("en auto","by car"),p("hay cuatro estaciones","there are four seasons")),
  d("mexico","03","México","Mexico","América",p("Ciudad de México","Mexico City"),"#ffb447",18,40,p("La ciudad del sol y los sabores","The city of sun and flavours"),p("Chichén Itzá","Chichén Itzá"),p("un taco","a taco"),p("una playa del Caribe","a Caribbean beach"),p("un ajolote","an axolotl"),p("el Día de Muertos","Day of the Dead"),p("hola","hello"),p("en autobús","by bus"),p("hace calor","it is hot")),
  d("costa-rica","04","Costa Rica","Costa Rica","América",p("San José","San José"),"#39c99f",22,49,p("El portal de la selva verde","The green-jungle portal"),p("el volcán Arenal","Arenal Volcano"),p("el gallo pinto","gallo pinto"),p("una selva tropical","a tropical rainforest"),p("un perezoso","a sloth"),p("la vida pura","pura vida"),p("pura vida","pura vida"),p("en autobús","by bus"),p("llueve y hace calor","it is rainy and hot")),
  d("cuba","05","Cuba","Cuba","América",p("La Habana","Havana"),"#ff6d86",25,42,p("La ciudad de música y colores","The city of music and colours"),p("La Habana Vieja","Old Havana"),p("el arroz con frijoles","rice and beans"),p("una playa azul","a blue beach"),p("un flamenco","a flamingo"),p("la salsa","salsa music"),p("hola","hello"),p("en auto clásico","by classic car"),p("hace calor","it is hot")),
  d("colombia","06","Colombia","Colombia","América",p("Bogotá","Bogotá"),"#f6c94c",27,53,p("El jardín de las ciudades alegres","The garden of joyful cities"),p("Cartagena","Cartagena"),p("una arepa","an arepa"),p("una montaña de café","a coffee mountain"),p("un tucán","a toucan"),p("la cumbia","cumbia music"),p("hola, ¿cómo estás?","hello, how are you?"),p("en teleférico","by cable car"),p("hay muchos climas","there are many climates")),
  d("peru","07","Perú","Peru","América",p("Lima","Lima"),"#e95c56",27,63,p("La ciudad secreta de las montañas","The secret city in the mountains"),p("Machu Picchu","Machu Picchu"),p("un ceviche","ceviche"),p("los Andes","the Andes"),p("una llama","a llama"),p("los tejidos de colores","colourful textiles"),p("hola","hello"),p("en tren","by train"),p("hace fresco en la montaña","it is cool in the mountains")),
  d("brasil","08","Brasil","Brazil","América",p("Brasilia","Brasília"),"#3bc985",36,61,p("El reino del río gigante","The kingdom of the giant river"),p("Río de Janeiro","Rio de Janeiro"),p("un pão de queijo","cheese bread"),p("la Amazonia","the Amazon rainforest"),p("un jaguar","a jaguar"),p("la samba","samba"),p("olá","hello"),p("en barco","by boat"),p("hace calor","it is hot")),
  d("chile","09","Chile","Chile","América",p("Santiago","Santiago"),"#5aa6ff",27,76,p("El país largo entre hielo y desierto","The long land between ice and desert"),p("el desierto de Atacama","the Atacama Desert"),p("una empanada","an empanada"),p("la Patagonia","Patagonia"),p("un pingüino","a penguin"),p("los observatorios","observatories"),p("hola","hello"),p("en autobús","by bus"),p("hay desierto y hielo","there is desert and ice")),
  d("argentina","10","Argentina","Argentina","América",p("Buenos Aires","Buenos Aires"),"#63c6ff",32,79,p("La tierra del mate y los horizontes","The land of mate and horizons"),p("el Obelisco","the Obelisk"),p("una empanada","an empanada"),p("la Patagonia","Patagonia"),p("un hornero","a rufous hornero"),p("el tango","tango"),p("hola, ¿todo bien?","hi, how is it going?"),p("en colectivo","by bus"),p("hay cuatro estaciones","there are four seasons")),

  d("islandia","11","Islandia","Iceland","Europa",p("Reikiavik","Reykjavík"),"#73d8e8",45,16,p("La isla de fuego y hielo","The island of fire and ice"),p("la Laguna Azul","the Blue Lagoon"),p("una sopa caliente","a hot soup"),p("un glaciar","a glacier"),p("un frailecillo","a puffin"),p("las piscinas termales","geothermal pools"),p("halló","hello"),p("en auto","by car"),p("hace frío","it is cold")),
  d("reino-unido","12","Reino Unido","United Kingdom","Europa",p("Londres","London"),"#b68cff",47,25,p("La isla de los castillos y la lluvia","The island of castles and rain"),p("el Big Ben","Big Ben"),p("fish and chips","fish and chips"),p("un campo verde","a green field"),p("un zorro","a fox"),p("la hora del té","tea time"),p("hello","hello"),p("en tren","by train"),p("llueve mucho","it rains a lot")),
  d("espana","13","España","Spain","Europa",p("Madrid","Madrid"),"#ff7a56",47,35,p("La plaza del sol","The sunlit square"),p("la Sagrada Familia","the Sagrada Família"),p("una tortilla","a Spanish omelette"),p("una playa del Mediterráneo","a Mediterranean beach"),p("un lince ibérico","an Iberian lynx"),p("el flamenco","flamenco"),p("hola","hello"),p("en tren","by train"),p("hace sol","it is sunny")),
  d("francia","14","Francia","France","Europa",p("París","Paris"),"#ff6f9b",49,31,p("La ciudad de las luces","The city of lights"),p("la Torre Eiffel","the Eiffel Tower"),p("un croissant","a croissant"),p("un campo de lavanda","a lavender field"),p("un ciervo","a deer"),p("los cafés","cafés"),p("bonjour","hello"),p("en tren","by train"),p("hay cuatro estaciones","there are four seasons")),
  d("alemania","15","Alemania","Germany","Europa",p("Berlín","Berlin"),"#f2b34b",52,28,p("La ruta de los bosques y las ciudades","The forest-and-city route"),p("la Puerta de Brandeburgo","the Brandenburg Gate"),p("un pretzel","a pretzel"),p("la Selva Negra","the Black Forest"),p("un águila","an eagle"),p("los mercados de invierno","winter markets"),p("hallo","hello"),p("en tren","by train"),p("hace frío en invierno","it is cold in winter")),
  d("polonia","16","Polonia","Poland","Europa",p("Varsovia","Warsaw"),"#e95d7b",54,27,p("La ciudad que volvió a levantarse","The city that rose again"),p("el centro histórico de Cracovia","Kraków Old Town"),p("un pierogi","a pierogi"),p("un bosque antiguo","an ancient forest"),p("un bisonte europeo","a European bison"),p("las plazas históricas","historic squares"),p("cześć","hello"),p("en tranvía","by tram"),p("hace frío en invierno","it is cold in winter")),
  d("italia","17","Italia","Italy","Europa",p("Roma","Rome"),"#3cc58d",52,35,p("El museo bajo el cielo","The open-air museum"),p("el Coliseo","the Colosseum"),p("una pizza","a pizza"),p("la costa Amalfitana","the Amalfi Coast"),p("un lobo","a wolf"),p("la ópera","opera"),p("ciao","hello"),p("en tren","by train"),p("hace calor en verano","it is hot in summer")),
  d("grecia","18","Grecia","Greece","Europa",p("Atenas","Athens"),"#4cb5e9",55,37,p("Las islas de los dioses antiguos","The islands of ancient gods"),p("la Acrópolis","the Acropolis"),p("una ensalada griega","a Greek salad"),p("una isla blanca","a white island"),p("una tortuga marina","a sea turtle"),p("los mitos antiguos","ancient myths"),p("yassas","hello"),p("en barco","by boat"),p("hace sol","it is sunny")),

  d("marruecos","19","Marruecos","Morocco","África",p("Rabat","Rabat"),"#ef8b50",47,43,p("El laberinto de los mercados","The market maze"),p("la plaza Yamaa el Fna","Jemaa el-Fnaa square"),p("un cuscús","couscous"),p("el desierto del Sahara","the Sahara Desert"),p("un camello","a camel"),p("los zocos","souks"),p("salam","hello"),p("en tren","by train"),p("hace calor","it is hot")),
  d("senegal","20","Senegal","Senegal","África",p("Dakar","Dakar"),"#f4bd3d",43,53,p("La costa de los ritmos","The coast of rhythms"),p("la isla de Gorée","Gorée Island"),p("el thieboudienne","rice with fish"),p("la costa atlántica","the Atlantic coast"),p("un pelícano","a pelican"),p("la música mbalax","mbalax music"),p("salaam aleekum","hello"),p("en autobús","by bus"),p("hace calor","it is hot")),
  d("ghana","21","Ghana","Ghana","África",p("Acra","Accra"),"#ef6f55",47,57,p("El portal dorado del Atlántico","The golden Atlantic portal"),p("el castillo de Cape Coast","Cape Coast Castle"),p("el jollof rice","jollof rice"),p("una playa tropical","a tropical beach"),p("un elefante","an elephant"),p("los tejidos kente","kente cloth"),p("akwaaba","welcome"),p("en tro-tro","by minibus"),p("hace calor","it is hot")),
  d("egipto","22","Egipto","Egypt","África",p("El Cairo","Cairo"),"#e6a745",57,45,p("El río de las pirámides","The river of pyramids"),p("las pirámides de Guiza","the Pyramids of Giza"),p("un koshari","koshari"),p("el río Nilo","the Nile River"),p("un cocodrilo del Nilo","a Nile crocodile"),p("los jeroglíficos","hieroglyphs"),p("ahlan","hello"),p("en barco","by boat"),p("hace calor y está seco","it is hot and dry")),
  d("kenia","23","Kenia","Kenya","África",p("Nairobi","Nairobi"),"#d97846",59,60,p("La gran sabana","The great savanna"),p("la reserva Masái Mara","the Maasai Mara reserve"),p("un ugali","ugali"),p("la sabana","the savanna"),p("un león","a lion"),p("los mercados artesanales","craft markets"),p("jambo","hello"),p("en jeep","by jeep"),p("hace calor","it is hot")),
  d("tanzania","24","Tanzania","Tanzania","África",p("Dodoma","Dodoma"),"#ca7754",59,68,p("La montaña sobre las nubes","The mountain above the clouds"),p("el Kilimanjaro","Mount Kilimanjaro"),p("un pilau","pilau rice"),p("la isla de Zanzíbar","Zanzibar Island"),p("una jirafa","a giraffe"),p("la música taarab","taarab music"),p("jambo","hello"),p("en barco","by boat"),p("hace calor en la costa","it is hot on the coast")),
  d("sudafrica","25","Sudáfrica","South Africa","África",p("Pretoria","Pretoria"),"#a86be8",53,80,p("La ruta de dos océanos","The two-ocean route"),p("la Montaña de la Mesa","Table Mountain"),p("un bobotie","bobotie"),p("el cabo de Buena Esperanza","the Cape of Good Hope"),p("un pingüino africano","an African penguin"),p("once idiomas oficiales","eleven official languages"),p("sawubona","hello"),p("en auto","by car"),p("hay muchos climas","there are many climates")),
  d("madagascar","26","Madagascar","Madagascar","África",p("Antananarivo","Antananarivo"),"#c86ee6",64,73,p("La isla de los animales únicos","The island of unique animals"),p("la avenida de los baobabs","the Avenue of the Baobabs"),p("un plato de arroz","a rice dish"),p("un bosque de baobabs","a baobab forest"),p("un lémur","a lemur"),p("la música salegy","salegy music"),p("salama","hello"),p("en taxi-brousse","by shared taxi"),p("hace calor","it is hot")),

  d("turquia","27","Turquía","Türkiye","Asia",p("Ankara","Ankara"),"#e85a65",58,38,p("El puente entre dos mundos","The bridge between two worlds"),p("Santa Sofía","Hagia Sophia"),p("un kebab","a kebab"),p("Capadocia","Cappadocia"),p("un gato de Estambul","an Istanbul cat"),p("los bazares","bazaars"),p("merhaba","hello"),p("en ferry","by ferry"),p("hay cuatro estaciones","there are four seasons")),
  d("emiratos","28","Emiratos Árabes Unidos","United Arab Emirates","Asia",p("Abu Dabi","Abu Dhabi"),"#dc9e45",62,47,p("La ciudad entre desierto y mar","The city between desert and sea"),p("la Gran Mezquita Sheikh Zayed","Sheikh Zayed Grand Mosque"),p("un dátil","a date"),p("el desierto","the desert"),p("un halcón","a falcon"),p("los zocos y los rascacielos","souks and skyscrapers"),p("marhaba","hello"),p("en metro","by metro"),p("hace mucho calor","it is very hot")),
  d("india","29","India","India","Asia",p("Nueva Delhi","New Delhi"),"#f2a341",69,50,p("El país de los mil colores","The land of a thousand colours"),p("el Taj Mahal","the Taj Mahal"),p("un curry","a curry"),p("el Himalaya","the Himalayas"),p("un elefante asiático","an Asian elephant"),p("Diwali","Diwali"),p("namasté","hello"),p("en tren","by train"),p("hay muchos climas","there are many climates")),
  d("tailandia","30","Tailandia","Thailand","Asia",p("Bangkok","Bangkok"),"#ef668a",78,57,p("El reino de los templos dorados","The kingdom of golden temples"),p("el Gran Palacio","the Grand Palace"),p("un pad thai","pad thai"),p("una isla tropical","a tropical island"),p("un elefante asiático","an Asian elephant"),p("los mercados nocturnos","night markets"),p("sawasdee","hello"),p("en tuk-tuk","by tuk-tuk"),p("hace calor","it is hot")),
  d("china","31","China","China","Asia",p("Pekín","Beijing"),"#e95b50",76,38,p("El camino del dragón y las montañas","The path of dragons and mountains"),p("la Gran Muralla","the Great Wall"),p("unos dumplings","dumplings"),p("un bosque de bambú","a bamboo forest"),p("un panda gigante","a giant panda"),p("el Año Nuevo Lunar","Lunar New Year"),p("nǐ hǎo","hello"),p("en tren rápido","by high-speed train"),p("hay muchos climas","there are many climates")),
  d("corea-del-sur","32","Corea del Sur","South Korea","Asia",p("Seúl","Seoul"),"#a071ee",86,36,p("La ciudad de las montañas luminosas","The city of luminous mountains"),p("el palacio Gyeongbokgung","Gyeongbokgung Palace"),p("un bibimbap","bibimbap"),p("la isla de Jeju","Jeju Island"),p("una grulla","a crane"),p("el hanbok","hanbok"),p("annyeonghaseyo","hello"),p("en metro","by subway"),p("hay cuatro estaciones","there are four seasons")),
  d("japon","33","Japón","Japan","Asia",p("Tokio","Tokyo"),"#ef6c7c",90,37,p("El archipiélago del tren y los templos","The archipelago of trains and temples"),p("el templo Kiyomizu-dera","Kiyomizu-dera Temple"),p("un onigiri","an onigiri"),p("el monte Fuji","Mount Fuji"),p("un ciervo de Nara","a Nara deer"),p("los festivales matsuri","matsuri festivals"),p("konnichiwa","hello"),p("en tren","by train"),p("hay cuatro estaciones","there are four seasons")),
  d("indonesia","34","Indonesia","Indonesia","Asia",p("Yakarta","Jakarta"),"#38c6b0",80,67,p("El archipiélago de los volcanes","The volcanic archipelago"),p("el templo de Borobudur","Borobudur Temple"),p("un nasi goreng","nasi goreng"),p("una isla volcánica","a volcanic island"),p("un orangután","an orangutan"),p("los batiks","batik textiles"),p("halo","hello"),p("en barco","by boat"),p("hace calor y llueve","it is hot and rainy")),

  d("papua-nueva-guinea","35","Papúa Nueva Guinea","Papua New Guinea","Oceanía",p("Puerto Moresby","Port Moresby"),"#b46ee8",87,65,p("La isla de las aves brillantes","The island of bright birds"),p("el río Sepik","the Sepik River"),p("un mumu","mumu"),p("una selva tropical","a tropical rainforest"),p("un ave del paraíso","a bird of paradise"),p("las máscaras talladas","carved masks"),p("halo","hello"),p("en barco","by boat"),p("hace calor y llueve","it is hot and rainy")),
  d("australia","36","Australia","Australia","Oceanía",p("Canberra","Canberra"),"#45a9e8",84,77,p("La costa de los animales imposibles","The coast of impossible animals"),p("la Ópera de Sídney","the Sydney Opera House"),p("una meat pie","a meat pie"),p("la Gran Barrera de Coral","the Great Barrier Reef"),p("un canguro","a kangaroo"),p("la cultura del surf","surf culture"),p("hello","hello"),p("en auto","by car"),p("hace calor en el norte","it is hot in the north")),
  d("nueva-zelanda","37","Nueva Zelanda","New Zealand","Oceanía",p("Wellington","Wellington"),"#39c799",95,82,p("Las islas de las montañas verdes","The islands of green mountains"),p("Milford Sound","Milford Sound"),p("una pavlova","a pavlova"),p("un fiordo","a fjord"),p("un kiwi","a kiwi bird"),p("la cultura maorí","Māori culture"),p("kia ora","hello"),p("en ferry","by ferry"),p("hace fresco","it is cool")),
  d("fiyi","38","Fiyi","Fiji","Oceanía",p("Suva","Suva"),"#31c8dc",94,67,p("El collar de islas azules","The necklace of blue islands"),p("las islas Mamanuca","the Mamanuca Islands"),p("un kokoda","kokoda"),p("un arrecife de coral","a coral reef"),p("una tortuga marina","a sea turtle"),p("la ceremonia de kava","the kava ceremony"),p("bula","hello"),p("en barco","by boat"),p("hace calor","it is hot")),
  d("samoa","39","Samoa","Samoa","Oceanía",p("Apia","Apia"),"#5f8ef0",98,68,p("Las islas de las casas abiertas","The islands of open houses"),p("la fosa oceánica To Sua","To Sua Ocean Trench"),p("un palusami","palusami"),p("una cascada tropical","a tropical waterfall"),p("una tortuga marina","a sea turtle"),p("la danza siva","siva dance"),p("talofa","hello"),p("en barco","by boat"),p("hace calor","it is hot")),

  d("antartida","40","Antártida","Antarctica","Antártida",p("No tiene capital","It has no capital"),"#9de7ff",52,94,p("El continente blanco","The white continent"),p("una estación científica","a research station"),p("una sopa caliente","a hot soup"),p("un glaciar gigante","a giant glacier"),p("un pingüino emperador","an emperor penguin"),p("la investigación científica","scientific research"),p("hola","hello"),p("en barco rompehielos","by icebreaker"),p("hace muchísimo frío","it is extremely cold")),
];

export const answerTools: Pair[] = [
  p("Sí.","Yes."), p("No.","No."), p("Tal vez.","Maybe."),
  p("Me gusta…","I like…"), p("No me gusta…","I do not like…"),
  p("Quiero…","I want…"), p("No quiero…","I do not want…"),
  p("Prefiero…","I prefer…"), p("Voy a…","I am going to…"),
  p("Con mi…","With my…"), p("Es…","It is…"), p("Hay…","There is / there are…"),
  p("Porque…","Because…"), p("Y también…","And also…"),
];

export const megaWordbank: WordGroup[] = [
  {id:"personas",code:"PE",label:p("Personas","People"),words:[p("yo","I"),p("vos","you"),p("él","he"),p("ella","she"),p("nosotros/as","we"),p("un amigo / una amiga","a friend"),p("mi pareja","my partner"),p("mi familia","my family"),p("un turista / una turista","a tourist"),p("la gente","people")]},
  {id:"verbos",code:"VE",label:p("Verbos esenciales","Essential verbs"),words:[p("ser","be"),p("estar","be"),p("tener","have"),p("querer","want"),p("gustar","like"),p("preferir","prefer"),p("ir","go"),p("viajar","travel"),p("visitar","visit"),p("ver","see"),p("comer","eat"),p("beber / tomar","drink"),p("hablar","speak"),p("vivir","live"),p("comprar","buy"),p("caminar","walk")]},
  {id:"lugares",code:"LU",label:p("Lugares","Places"),words:[p("un país","a country"),p("una ciudad","a city"),p("un pueblo","a town"),p("una playa","a beach"),p("una montaña","a mountain"),p("un bosque","a forest"),p("un río","a river"),p("un lago","a lake"),p("un hotel","a hotel"),p("un restaurante","a restaurant"),p("un museo","a museum"),p("un mercado","a market"),p("un parque","a park"),p("un aeropuerto","an airport")]},
  {id:"viaje",code:"VI",label:p("Viaje y transporte","Travel & transport"),words:[p("un avión","a plane"),p("un tren","a train"),p("un autobús / colectivo","a bus"),p("un auto","a car"),p("un barco","a boat"),p("una bicicleta","a bicycle"),p("un taxi","a taxi"),p("una estación","a station"),p("un pasaporte","a passport"),p("una valija","a suitcase"),p("un mapa","a map"),p("un boleto / billete","a ticket") ]},
  {id:"comida",code:"CO",label:p("Comida y bebida","Food & drink"),words:[p("agua","water"),p("café","coffee"),p("té","tea"),p("pan","bread"),p("arroz","rice"),p("carne","meat"),p("pescado","fish"),p("verduras","vegetables"),p("fruta","fruit"),p("desayuno","breakfast"),p("almuerzo","lunch"),p("cena","dinner"),p("dulce","sweet"),p("salado/a","salty"),p("rico/a","tasty") ]},
  {id:"tiempo",code:"TI",label:p("Tiempo","Time"),words:[p("hoy","today"),p("mañana","tomorrow"),p("ahora","now"),p("la mañana","the morning"),p("la tarde","the afternoon"),p("la noche","the night"),p("un día","one day"),p("dos días","two days"),p("una semana","one week"),p("primero","first"),p("después","then"),p("siempre","always"),p("nunca","never") ]},
  {id:"describir",code:"DE",label:p("Describir","Describe"),words:[p("grande","big"),p("pequeño/a","small"),p("lindo/a","beautiful"),p("interesante","interesting"),p("tranquilo/a","calm"),p("ruidoso/a","noisy"),p("caluroso/a","hot"),p("frío/a","cold"),p("caro/a","expensive"),p("barato/a","cheap"),p("nuevo/a","new"),p("antiguo/a","old"),p("cerca","near"),p("lejos","far") ]},
  {id:"colores",code:"CL",label:p("Colores y números","Colours & numbers"),words:[p("rojo","red"),p("azul","blue"),p("verde","green"),p("amarillo","yellow"),p("blanco","white"),p("negro","black"),p("uno","one"),p("dos","two"),p("tres","three"),p("cuatro","four"),p("cinco","five"),p("mucho","a lot"),p("poco","a little") ]},
  {id:"preguntas",code:"PR",label:p("Preguntas y conexiones","Questions & connections"),words:[p("¿qué?","what?"),p("¿quién?","who?"),p("¿dónde?","where?"),p("¿cuándo?","when?"),p("¿cómo?","how?"),p("¿cuánto?","how much?"),p("¿por qué?","why?"),p("sí","yes"),p("no","no"),p("también","also"),p("pero","but"),p("o","or"),p("y","and"),p("porque","because") ]},
];
