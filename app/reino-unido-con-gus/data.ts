import {
  areas as sourceAreas,
  nationNames,
  type Pair,
  type UKArea,
} from "../reino-unido-en-relieve/data";

export {nationNames};
export type {Pair,UKArea};

const p=(es:string,en:string):Pair=>({es,en});
const q=(...items:[string,string][])=>items.map(([es,en])=>p(es,en));

const basicQuestions:Record<string,Pair[]>={
  TLC:q(
    ["¿Conocés Newcastle? ¿Qué te gusta de la ciudad?","Do you know Newcastle? What do you like about the city?"],
    ["¿Preferís Newcastle o Durham? ¿Por qué?","Do you prefer Newcastle or Durham? Why?"],
    ["En Northumberland hay playas y castillos. ¿Qué querés visitar primero?","Northumberland has beaches and castles. What do you want to visit first?"],
    ["¿Te gusta caminar junto a un río como el Tyne? ¿Qué hacés allí?","Do you like walking beside a river like the Tyne? What do you do there?"],
    ["¿El acento de Newcastle es fácil o difícil para otras personas?","Is the Newcastle accent easy or difficult for other people?"],
    ["¿Querés caminar por el Muro de Adriano? ¿Con quién?","Do you want to walk along Hadrian's Wall? With whom?"],
    ["¿Qué comida del noreste querés mostrarle a un visitante?","Which North East food do you want to show a visitor?"],
    ["Un amigo tiene un día en el noreste. ¿Adónde lo llevás?","A friend has one day in the North East. Where do you take them?"],
  ),
  TLD:q(
    ["¿Preferís Manchester o Liverpool? ¿Qué ciudad conocés mejor?","Do you prefer Manchester or Liverpool? Which city do you know better?"],
    ["¿Te interesa más el fútbol o la música de esta región?","Are you more interested in football or the music of this region?"],
    ["¿Qué equipo o músico de Manchester o Liverpool conocés?","Which team or musician from Manchester or Liverpool do you know?"],
    ["¿Te gustaría pasar un día en el Lake District? ¿Qué querés hacer?","Would you like to spend a day in the Lake District? What do you want to do?"],
    ["¿Blackpool es un buen lugar para unas vacaciones cortas? ¿Por qué?","Is Blackpool a good place for a short holiday? Why?"],
    ["¿Preferís una ciudad grande o un pueblo cerca de los lagos?","Do you prefer a big city or a village near the lakes?"],
    ["¿Cómo es el clima en el noroeste? ¿Te gusta?","What is the weather like in the North West? Do you like it?"],
    ["Tenés un fin de semana libre. ¿Qué plan hacés en el noroeste?","You have a free weekend. What plan do you make in the North West?"],
  ),
  TLE:q(
    ["¿Conocés York? ¿Qué lugar de la ciudad te gusta?","Do you know York? Which place in the city do you like?"],
    ["¿Preferís vivir en Leeds o visitar York? ¿Por qué?","Would you rather live in Leeds or visit York? Why?"],
    ["Sheffield tiene industria y muchos espacios verdes. ¿Qué lado te interesa más?","Sheffield has industry and many green spaces. Which side interests you more?"],
    ["¿Te gustaría caminar por los Yorkshire Dales? ¿En qué estación?","Would you like to walk in the Yorkshire Dales? In which season?"],
    ["Whitby tiene mar, un puerto y una abadía. ¿Qué querés ver primero?","Whitby has the sea, a harbour and an abbey. What do you want to see first?"],
    ["¿Qué comida o bebida de Yorkshire conocés? ¿Te gusta?","Which Yorkshire food or drink do you know? Do you like it?"],
    ["¿Es mejor viajar por Yorkshire en tren o en auto?","Is it better to travel around Yorkshire by train or by car?"],
    ["¿Qué lugar de Yorkshire le recomendás a una persona que va por primera vez?","Which Yorkshire place do you recommend to a first-time visitor?"],
  ),
  TLF:q(
    ["Nottingham es famosa por Robin Hood. ¿Te gustan las leyendas?","Nottingham is famous for Robin Hood. Do you like legends?"],
    ["¿Qué querés hacer en Nottingham: visitar un castillo, caminar o ir a un mercado?","What do you want to do in Nottingham: visit a castle, walk or go to a market?"],
    ["Leicester tiene comida de muchas culturas. ¿Qué comida querés probar?","Leicester has food from many cultures. What food do you want to try?"],
    ["¿Te gusta hacer excursiones de un día al Peak District?","Do you like taking day trips to the Peak District?"],
    ["Lincoln tiene una gran catedral. ¿Te gusta visitar edificios históricos?","Lincoln has a large cathedral. Do you like visiting historic buildings?"],
    ["¿Preferís una ciudad universitaria o un pueblo tranquilo?","Do you prefer a university city or a quiet village?"],
    ["¿Qué mercado o tienda local te gusta en esta región?","Which local market or shop do you like in this region?"],
    ["¿Qué lugar de los Midlands del Este querés conocer mejor? ¿Por qué?","Which East Midlands place do you want to know better? Why?"],
  ),
  TLG:q(
    ["¿Qué te gusta de Birmingham?","What do you like about Birmingham?"],
    ["¿Querés recorrer Birmingham por sus canales o por sus mercados?","Do you want to explore Birmingham by its canals or its markets?"],
    ["¿Conocés la catedral vieja y la catedral nueva de Coventry? ¿Cuál preferís?","Do you know Coventry's old and new cathedrals? Which do you prefer?"],
    ["¿Te gustan los museos de fábricas y trenes? ¿Por qué?","Do you like museums about factories and trains? Why?"],
    ["¿Te interesa Shakespeare? ¿Querés visitar Stratford-upon-Avon?","Are you interested in Shakespeare? Do you want to visit Stratford-upon-Avon?"],
    ["¿Qué comida de Birmingham querés recomendar?","Which Birmingham food do you want to recommend?"],
    ["¿El acento de Birmingham es fácil o difícil para un extranjero?","Is the Birmingham accent easy or difficult for a foreigner?"],
    ["Un amigo visita los Midlands del Oeste. ¿Qué plan simple preparás?","A friend visits the West Midlands. What simple plan do you prepare?"],
  ),
  TLH:q(
    ["¿Te gustaría recorrer Cambridge en bicicleta? ¿Por qué?","Would you like to explore Cambridge by bicycle? Why?"],
    ["¿Qué querés ver en Cambridge además de la universidad?","What do you want to see in Cambridge besides the university?"],
    ["Norwich tiene un mercado y una catedral. ¿Qué visitás primero?","Norwich has a market and a cathedral. Which do you visit first?"],
    ["¿Querés pasear en barco por los Norfolk Broads? ¿Con quién?","Do you want to take a boat trip on the Norfolk Broads? With whom?"],
    ["¿Te gustan las playas tranquilas de Suffolk y Essex?","Do you like the quiet beaches of Suffolk and Essex?"],
    ["¿Es buena idea vivir en esta región y trabajar en Londres?","Is it a good idea to live in this region and work in London?"],
    ["¿Preferís una ciudad de estudiantes o un pueblo cerca del mar?","Do you prefer a student city or a village near the sea?"],
    ["¿Dónde querés pasar tres días: Cambridge, Norwich o la costa?","Where do you want to spend three days: Cambridge, Norwich or the coast?"],
  ),
  TLI:q(
    ["¿Cuál es tu barrio favorito de Londres? ¿Por qué?","What is your favourite London neighbourhood? Why?"],
    ["¿Usás más el metro, el bus o el tren en Londres?","Do you use the Tube, bus or train more in London?"],
    ["¿Te gusta caminar junto al Támesis? ¿En qué zona?","Do you like walking beside the Thames? In which area?"],
    ["¿Qué comprás o comés en Camden Market?","What do you buy or eat at Camden Market?"],
    ["¿Preferís ir a Greenwich en barco o en tren?","Do you prefer going to Greenwich by boat or by train?"],
    ["Brixton tiene música y comida de muchas culturas. ¿Qué te interesa más?","Brixton has music and food from many cultures. What interests you more?"],
    ["¿Canary Wharf te parece bonito, frío o interesante?","Does Canary Wharf seem beautiful, cold or interesting to you?"],
    ["Londres es grande y llena de gente. ¿Qué amás y qué no te gusta?","London is big and crowded. What do you love and what don't you like?"],
  ),
  TLJ:q(
    ["¿Te gusta Brighton? ¿Qué hacés allí en un día de sol?","Do you like Brighton? What do you do there on a sunny day?"],
    ["¿Querés visitar Oxford? ¿Qué querés ver?","Do you want to visit Oxford? What do you want to see?"],
    ["Desde Dover se ve Francia. ¿Te parece especial? ¿Por qué?","You can see France from Dover. Does that seem special to you? Why?"],
    ["¿Te gustaría ir a la isla de Wight en ferry?","Would you like to go to the Isle of Wight by ferry?"],
    ["¿Preferís caminar por los South Downs o pasar el día en la playa?","Do you prefer walking on the South Downs or spending the day at the beach?"],
    ["¿Es bueno vivir cerca de Londres, pero no dentro de Londres?","Is it good to live near London but not in London?"],
    ["¿Qué ciudad del sudeste conocés mejor? ¿Cómo es?","Which South East city do you know best? What is it like?"],
    ["Prepará un fin de semana: una ciudad, una comida y una actividad.","Plan a weekend: one city, one food and one activity."],
  ),
  TLK:q(
    ["¿Qué te gusta de Bristol: la música, el arte o el puerto?","What do you like about Bristol: the music, art or harbour?"],
    ["¿Querés visitar los baños romanos de Bath? ¿Por qué?","Do you want to visit the Roman Baths in Bath? Why?"],
    ["¿Cuál es tu playa favorita de Cornwall?","What is your favourite beach in Cornwall?"],
    ["¿Preferís caminar por Dartmoor o por la costa?","Do you prefer walking on Dartmoor or along the coast?"],
    ["¿Qué querés comer en el sudoeste: pescado, un Cornish pasty u otra cosa?","What do you want to eat in the South West: fish, a Cornish pasty or something else?"],
    ["¿Cómo cambia un pueblo de Cornwall en verano?","How does a Cornish village change in summer?"],
    ["¿Te gusta el clima atlántico con viento y lluvia?","Do you like Atlantic weather with wind and rain?"],
    ["Podés vivir un mes en Bristol, Bath o Cornwall. ¿Cuál elegís?","You can live for a month in Bristol, Bath or Cornwall. Which do you choose?"],
  ),
  TLL:q(
    ["¿Conocés Cardiff? ¿Qué te gusta de la ciudad?","Do you know Cardiff? What do you like about the city?"],
    ["En Gales hay dos lenguas. ¿Conocés alguna palabra en galés?","Wales has two languages. Do you know any words in Welsh?"],
    ["¿Querés subir una montaña en Eryri? ¿Con quién?","Do you want to climb a mountain in Eryri? With whom?"],
    ["¿Preferís la costa de Pembrokeshire o las montañas del norte?","Do you prefer the Pembrokeshire coast or the mountains in the north?"],
    ["¿Te gusta el rugby? ¿Es importante en Gales?","Do you like rugby? Is it important in Wales?"],
    ["¿Qué comida, canción o tradición galesa conocés?","Which Welsh food, song or tradition do you know?"],
    ["¿Preferís vivir en Cardiff o en un pueblo pequeño de Gales?","Do you prefer living in Cardiff or in a small Welsh village?"],
    ["Un amigo visita Gales por primera vez. ¿Adónde lo llevás?","A friend visits Wales for the first time. Where do you take them?"],
  ),
  TLM:q(
    ["¿Preferís Edimburgo o Glasgow? ¿Por qué?","Do you prefer Edinburgh or Glasgow? Why?"],
    ["¿Te gustaría visitar Edimburgo durante un festival?","Would you like to visit Edinburgh during a festival?"],
    ["¿Qué querés hacer en los Highlands: caminar, manejar o descansar?","What do you want to do in the Highlands: walk, drive or relax?"],
    ["¿Te gustaría vivir en una isla escocesa? ¿Por qué?","Would you like to live on a Scottish island? Why?"],
    ["¿Cómo es el clima de Escocia? ¿Qué ropa necesitás?","What is the weather in Scotland like? What clothes do you need?"],
    ["¿Qué comida escocesa conocés? ¿Querés probarla?","Which Scottish food do you know? Do you want to try it?"],
    ["¿Conocés palabras en gaélico o scots?","Do you know any words in Gaelic or Scots?"],
    ["Tenés cuatro días en Escocia. ¿Qué lugares elegís?","You have four days in Scotland. Which places do you choose?"],
  ),
  TLN:q(
    ["¿Conocés Belfast? ¿Qué querés visitar allí?","Do you know Belfast? What do you want to visit there?"],
    ["¿Te gustaría caminar por las murallas de Derry~Londonderry?","Would you like to walk on the walls of Derry~Londonderry?"],
    ["¿Querés ver la Calzada del Gigante? ¿En qué estación?","Do you want to see the Giant's Causeway? In which season?"],
    ["¿Preferís la costa o las Mourne Mountains?","Do you prefer the coast or the Mourne Mountains?"],
    ["¿Qué medio de transporte usás para recorrer la costa: auto, bus o bicicleta?","Which transport do you use to explore the coast: car, bus or bicycle?"],
    ["¿Te interesa ver los murales de Belfast? ¿Por qué?","Are you interested in seeing Belfast's murals? Why?"],
    ["¿Qué comida o música de Irlanda del Norte conocés?","Which Northern Irish food or music do you know?"],
    ["Un amigo tiene dos días. ¿Qué plan preparás en Irlanda del Norte?","A friend has two days. What plan do you prepare in Northern Ireland?"],
  ),
};

export const areas:UKArea[]=sourceAreas.map(area=>({
  ...area,
  questions:basicQuestions[area.code]??area.questions,
}));

export const starters=[
  p("Para mí…","For me…"),
  p("Me gusta…","I like…"),
  p("Yo prefiero…","I prefer…"),
  p("En mi experiencia…","In my experience…"),
];

export const connectors=[
  p("porque…","because…"),
  p("también…","also…"),
  p("pero…","but…"),
  p("por ejemplo…","for example…"),
  p("y después…","and then…"),
  p("por eso…","that is why…"),
];

export const depthMoves=[
  p("Agregá un lugar.","Add a place."),
  p("Agregá una persona.","Add a person."),
  p("Decí cuándo.","Say when."),
  p("Explicá por qué.","Explain why."),
  p("Compará dos opciones.","Compare two options."),
  p("Hacé otra pregunta.","Ask another question."),
];
