export type USA3DIcon=
  |"cowboy-hat"|"cowboy-boot"|"longhorn"|"cactus"|"space-shuttle"
  |"burger"|"pizza"|"hot-dog"|"donut"|"coffee"
  |"yellow-taxi"|"saxophone"|"clapperboard"|"surfboard"|"baseball"
  |"liberty-torch"|"suspension-bridge"|"mountain"|"pine-tree"|"steamboat"
  |"skyline"|"capitol"|"lighthouse"|"beach"|"desert-arch"
  |"microphone"|"football"|"basketball"|"race-car"|"rodeo-lasso"
  |"lobster"|"corn"|"peach"|"orange"|"maple-syrup"
  |"casino-dice"|"barn"|"oil-pump"|"train"|"airplane";

type Sprite={sheet:1|2;column:number;row:number;label:string};

const sheetOne=[
  ["cowboy-hat","Sombrero cowboy"],["cowboy-boot","Bota cowboy"],["longhorn","Ganado longhorn"],["cactus","Cactus"],["space-shuttle","Transbordador espacial"],
  ["burger","Hamburguesa"],["pizza","Pizza de Nueva York"],["hot-dog","Hot dog"],["donut","Dona"],["coffee","Café"],
  ["yellow-taxi","Taxi amarillo"],["saxophone","Saxofón de jazz"],["clapperboard","Cine"],["surfboard","Surf"],["baseball","Béisbol"],
  ["liberty-torch","Antorcha de la Libertad"],["suspension-bridge","Puente colgante"],["mountain","Montaña"],["pine-tree","Bosque de pinos"],["steamboat","Barco del Misisipi"],
] as const;

const sheetTwo=[
  ["skyline","Gran ciudad"],["capitol","Capitolio"],["lighthouse","Faro"],["beach","Playa"],["desert-arch","Desierto de roca"],
  ["microphone","Música en vivo"],["football","Fútbol americano"],["basketball","Básquet"],["race-car","Automovilismo"],["rodeo-lasso","Rodeo"],
  ["lobster","Mariscos"],["corn","Maíz"],["peach","Durazno"],["orange","Naranja"],["maple-syrup","Jarabe de arce"],
  ["casino-dice","Casino"],["barn","Granja"],["oil-pump","Petróleo"],["train","Ferrocarril"],["airplane","Aviación"],
] as const;

export const usa3dSprites:Record<USA3DIcon,Sprite>=Object.fromEntries(
  [...sheetOne.map((item,index)=>[item[0],{sheet:1 as const,column:index%5,row:Math.floor(index/5),label:item[1]}]),
   ...sheetTwo.map((item,index)=>[item[0],{sheet:2 as const,column:index%5,row:Math.floor(index/5),label:item[1]}])]
) as Record<USA3DIcon,Sprite>;

const emojiMap:Record<string,USA3DIcon>={
  "🎸":"microphone","🏈":"football","🚀":"space-shuttle","🐻":"pine-tree","🏔️":"mountain","🛩️":"airplane","🌵":"cactus","🏜️":"desert-arch","☀️":"desert-arch","💎":"casino-dice","🌲":"pine-tree","🛶":"steamboat","🎬":"clapperboard","🌊":"surfboard","🎿":"mountain","🦌":"pine-tree","⛵":"steamboat","📚":"capitol","🏘️":"skyline","🐎":"rodeo-lasso","🏖️":"beach","🏛️":"capitol","🐊":"beach","🍑":"peach","🎵":"microphone","🌋":"mountain","🏄":"surfboard","🌺":"beach","🥔":"barn","⛰️":"mountain","🏙️":"skyline","🎷":"saxophone","🌾":"corn","🏎️":"race-car","🏀":"basketball","🌽":"corn","🎡":"beach","⚾":"baseball","🌻":"corn","🌪️":"desert-arch","✈️":"airplane","🥃":"maple-syrup","🎻":"microphone","🎺":"saxophone","🦐":"lobster","🦞":"lobster","🧭":"airplane","🦀":"lobster","🎓":"capitol","⚓":"lighthouse","🚗":"race-car","❄️":"mountain","🎭":"clapperboard","📖":"capitol","🚂":"train","🦬":"longhorn","🤠":"cowboy-hat","🦅":"airplane","🎰":"casino-dice","👽":"space-shuttle","🍁":"maple-syrup","🎢":"race-car","🍅":"pizza","🎤":"microphone","🎈":"airplane","🌶️":"hot-dog","🛸":"space-shuttle","🗽":"liberty-torch","🍎":"donut","🛢️":"oil-pump","☕":"coffee","🔔":"liberty-torch","🥨":"hot-dog","🌴":"beach","🍤":"lobster","🗿":"mountain","🏍️":"race-car","🐄":"longhorn","⛷️":"mountain","🦖":"desert-arch","🧀":"pizza","⛴️":"steamboat","🍺":"coffee","♨️":"desert-arch",
};

export const iconFromLegacySignal=(signal:string):USA3DIcon=>emojiMap[signal]??"liberty-torch";

const placeTypeIcons:Record<string,USA3DIcon>={
  ciudad:"skyline",naturaleza:"mountain",historia:"capitol",cultura:"microphone",comida:"burger",musica:"saxophone",
  costa:"lighthouse",deporte:"football",ciencia:"space-shuttle",ruta:"train",evento:"microphone",
};

export const iconForPlace=(type:string,name:string):USA3DIcon=>{
  const value=name.toLowerCase();
  if(value.includes("pizza"))return "pizza";
  if(value.includes("barbecue")||value.includes("comida")||value.includes("cocina"))return "burger";
  if(value.includes("bourbon"))return "maple-syrup";
  if(value.includes("langosta")||value.includes("cangrejo")||value.includes("costa de las langostas"))return "lobster";
  if(value.includes("derby")||value.includes("rodeo")||value.includes("frontier"))return "rodeo-lasso";
  if(value.includes("500")||value.includes("automovil"))return "race-car";
  if(value.includes("space")||value.includes("rocket")||value.includes("kennedy"))return "space-shuttle";
  if(value.includes("hollywood")||value.includes("cine"))return "clapperboard";
  if(value.includes("jazz")||value.includes("music")||value.includes("nashville")||value.includes("memphis"))return "saxophone";
  if(value.includes("route 66"))return "yellow-taxi";
  if(value.includes("casino")||value.includes("vegas"))return "casino-dice";
  if(value.includes("surf")||value.includes("waikiki"))return "surfboard";
  if(value.includes("baseball")||value.includes("field of dreams"))return "baseball";
  if(value.includes("football")||value.includes("lambeau"))return "football";
  if(value.includes("basket"))return "basketball";
  if(value.includes("farm")||value.includes("granja")||value.includes("amish"))return "barn";
  if(value.includes("oil")||value.includes("energía"))return "oil-pump";
  if(value.includes("avión")||value.includes("aviation")||value.includes("wichita")||value.includes("dayton"))return "airplane";
  return placeTypeIcons[type]??"liberty-torch";
};
