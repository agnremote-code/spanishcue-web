import {placesByCode} from "./places";

export type Pair={es:string;en:string};
export type StateRegion="noreste"|"sur"|"medio-oeste"|"montañas"|"pacifico";
export type USState={
  code:string;number:string;atlasName:string;name:string;nameEn:string;capital:string;
  region:StateRegion;color:string;sceneItems:string[];hook:Pair;fact:Pair;mission:Pair;
  words:Pair[];questions:Pair[];
};

const p=(es:string,en:string=""):Pair=>({es,en});
const palette=["#d74f45","#e8783e","#e9a53d","#79a752","#3ea27e","#2696a6","#3e7fc1","#665fbd","#9a56a5","#be4f76"];

const raw=`
AL|Alabama|Alabama|Montgomery|sur|🎸,🏈,🚀|Soul, football y la carrera espacial
AK|Alaska|Alaska|Juneau|pacifico|🐻,🏔️,🛩️|Naturaleza gigante y comunidades remotas
AZ|Arizona|Arizona|Phoenix|montañas|🌵,🏜️,☀️|Desierto, ciudades y roca roja
AR|Arkansas|Arkansas|Little Rock|sur|💎,🌲,🛶|Ríos libres, bosques y sorpresas bajo tierra
CA|California|California|Sacramento|pacifico|🎬,🌊,🌲|Muchas Californias dentro de un solo estado
CO|Colorado|Colorado|Denver|montañas|🏔️,🎿,🦌|Vivir alto entre ciudad y montaña
CT|Connecticut|Connecticut|Hartford|noreste|⛵,📚,🏘️|Universidades, costa y pueblos históricos
DE|Delaware|Delaware|Dover|noreste|🐎,🏖️,🏛️|El estado pequeño que conecta costa y negocios
FL|Florida|Florida|Tallahassee|sur|🐊,🚀,🏖️|Humedales, cohetes y ciudades bilingües
GA|Georgia|Georgia|Atlanta|sur|🍑,🎬,🎵|Música, cine y memoria del sur
HI|Hawaii|Hawái|Honolulu|pacifico|🌋,🏄,🌺|Islas vivas en medio del Pacífico
ID|Idaho|Idaho|Boise|montañas|🥔,⛰️,🛶|Mucho más que papas: ríos y montañas enormes
IL|Illinois|Illinois|Springfield|medio-oeste|🏙️,🎷,🌾|La gran ciudad, la pradera y la historia nacional
IN|Indiana|Indiana|Indianapolis|medio-oeste|🏎️,🏀,🌽|Velocidad, básquet y ciudades universitarias
IA|Iowa|Iowa|Des Moines|medio-oeste|🌽,🎡,⚾|Campos, ferias y comunidades históricas
KS|Kansas|Kansas|Topeka|medio-oeste|🌻,🌪️,✈️|Pradera abierta, aviación y relatos del oeste
KY|Kentucky|Kentucky|Frankfort|sur|🐎,🥃,🎻|Caballos, bourbon y música de montaña
LA|Louisiana|Luisiana|Baton Rouge|sur|🎺,🦐,🐊|Ritmo, agua y cultura criolla
ME|Maine|Maine|Augusta|noreste|🦞,🧭,🌲|Faros, bosques y pueblos pesqueros
MD|Maryland|Maryland|Annapolis|sur|🦀,⛵,🏛️|Una gran bahía entre puertos y memoria
MA|Massachusetts|Massachusetts|Boston|noreste|🎓,⚓,⚾|Revolución, universidades y costa atlántica
MI|Michigan|Michigan|Lansing|medio-oeste|🚗,🌊,🎸|Autos, música y dos penínsulas entre lagos
MN|Minnesota|Minnesota|Saint Paul|medio-oeste|🛶,❄️,🎭|Lagos, inviernos y creatividad urbana
MS|Mississippi|Misisipi|Jackson|sur|🎸,🌊,📖|El río, el blues y una historia compleja
MO|Missouri|Misuri|Jefferson City|medio-oeste|🎷,🏛️,🚂|Arcos, jazz y caminos hacia el oeste
MT|Montana|Montana|Helena|montañas|🦬,⛰️,🤠|Grandes cielos, ranchos y parques nacionales
NE|Nebraska|Nebraska|Lincoln|medio-oeste|🌽,🚂,🦅|Pradera, migraciones y ciudades del Missouri
NV|Nevada|Nevada|Carson City|montañas|🎰,🏜️,👽|Luces intensas rodeadas de desierto
NH|New Hampshire|Nuevo Hampshire|Concord|noreste|🍁,⛰️,🏛️|Montañas, costa corta y política local
NJ|New Jersey|Nueva Jersey|Trenton|noreste|🎢,🍅,🎤|Costa, ciudades densas y bosques inesperados
NM|New Mexico|Nuevo México|Santa Fe|montañas|🎈,🌶️,🛸|Adobe, cielo abierto y culturas que continúan
NY|New York|Nueva York|Albany|noreste|🗽,🍎,🏔️|De Manhattan a montañas y grandes cataratas
NC|North Carolina|Carolina del Norte|Raleigh|sur|🛩️,🏖️,🏀|Costa, innovación y montañas creativas
ND|North Dakota|Dakota del Norte|Bismarck|medio-oeste|🦬,🛢️,🌾|Pradera, energía y horizontes abiertos
OH|Ohio|Ohio|Columbus|medio-oeste|🏈,🚀,🎸|Aviación, música y ciudades de río y lago
OK|Oklahoma|Oklahoma|Oklahoma City|sur|🤠,🌪️,🎵|Naciones tribales, Route 66 y cultura cowboy
OR|Oregon|Oregón|Salem|pacifico|🌲,☕,🌊|Bosques húmedos, volcanes y costa pública
PA|Pennsylvania|Pensilvania|Harrisburg|noreste|🔔,🥨,🚂|Independencia, industria y vida rural
RI|Rhode Island|Rhode Island|Providence|noreste|⛵,🏛️,🌊|El estado más pequeño mira al océano
SC|South Carolina|Carolina del Sur|Columbia|sur|🌴,🍤,🏛️|Ciudades históricas, costa y bosques profundos
SD|South Dakota|Dakota del Sur|Pierre|medio-oeste|🗿,🦬,🏍️|Badlands, Black Hills y grandes encuentros
TN|Tennessee|Tennessee|Nashville|sur|🎸,🎤,🏔️|Dos capitales musicales y montañas con niebla
TX|Texas|Texas|Austin|sur|🤠,🐄,🚀,🌵|Cowboys, ganado, espacio y ciudades gigantes
UT|Utah|Utah|Salt Lake City|montañas|🏜️,⛷️,🦖|Cañones de piedra, nieve y huellas antiguas
VT|Vermont|Vermont|Montpelier|noreste|🍁,🧀,⛷️|Granjas, maple y montañas verdes
VA|Virginia|Virginia|Richmond|sur|🏛️,⛰️,⚓|Historia nacional entre montañas y Atlántico
WA|Washington|Washington|Olympia|pacifico|☕,🌲,⛴️|Ferries, volcanes y ciudades tecnológicas
WV|West Virginia|Virginia Occidental|Charleston|sur|⛰️,🚂,🎻|Gargantas, trenes y comunidades de montaña
WI|Wisconsin|Wisconsin|Madison|medio-oeste|🧀,🏈,🍺|Lagos, queso y orgullo deportivo
WY|Wyoming|Wyoming|Cheyenne|montañas|🦬,♨️,🤠|Géiseres, bisontes y cultura de rodeo
`;

export const regionNames:Record<StateRegion,Pair>={
  noreste:p("Noreste","Northeast"),sur:p("Sur","South"),"medio-oeste":p("Medio Oeste","Midwest"),
  montañas:p("Oeste y Montañas","Mountain West"),pacifico:p("Pacífico","Pacific"),
};

export const states:USState[]=raw.trim().split("\n").map((line,index)=>{
  const [code,atlasName,name,capital,region,items,hook]=line.split("|") as [string,string,string,string,StateRegion,string,string];
  const places=placesByCode[code];
  const placeNames=places.map(place=>place.name).join(", ");
  return {
    code,atlasName,name,nameEn:atlasName,capital,region,number:String(index+1).padStart(2,"0"),
    color:palette[index%palette.length],sceneItems:items.split(","),hook:p(hook),
    fact:p(`Este recorrido conecta ${placeNames}: cuatro formas distintas de entender ${name}.`,`This route connects ${placeNames}: four different ways to understand ${atlasName}.`),
    mission:p(`Elegí una parada de ${name}, explicá por qué y comparala con un lugar que conocés.`,`Choose one ${atlasName} stop, explain why and compare it with a place you know.`),
    words:[p("la capital","state capital"),p("el paisaje","landscape"),p("la comunidad","community"),p("la tradición local","local tradition"),p("el viaje por carretera","road trip"),p("comparar","to compare")],
    questions:[
      ...places.map(place=>place.prompt),
      p(`¿Cuál de las cuatro paradas de ${name} visitarías primero y por qué?`,`Which of the four ${atlasName} stops would you visit first, and why?`),
      p(`¿Qué idea típica sobre ${name} cambia después de conocer estas cuatro paradas?`,`Which common idea about ${atlasName} changes after discovering these four stops?`),
    ],
  };
});

export const starters=[p("Yo empezaría por… porque…","I would start with… because…"),p("Para mí, la mejor opción es…","For me, the best option is…"),p("Comparado con mi ciudad…","Compared with my city…"),p("Lo más interesante sería…","The most interesting thing would be…")];
export const connectors=[p("porque","because"),p("además","in addition"),p("sin embargo","however"),p("por ejemplo","for example"),p("en cambio","whereas"),p("por eso","that is why")];
export const depthMoves=[p("Agregá una experiencia personal.","Add a personal experience."),p("Comparalo con otro estado.","Compare it with another state."),p("Mencioná una ventaja y un problema.","Mention one advantage and one problem."),p("Defendé la opción contraria.","Defend the opposite option."),p("Creá un viaje de tres días.","Create a three-day trip."),p("Hacé una pregunta de seguimiento.","Ask a follow-up question.")];
