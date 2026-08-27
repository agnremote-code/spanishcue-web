export type Pair={es:string;en:string};
export type Question={prompt:Pair;quick:Pair[]};
export type AustraliaRegion={
  id:string;
  code:string;
  number:string;
  name:string;
  nameEn:string;
  capital:string;
  topic:Pair;
  hook:Pair;
  fact:Pair;
  mission:Pair;
  color:string;
  character:number;
  places:Pair[];
  words:Pair[];
  questions:Question[];
};

const p=(es:string,en:string):Pair=>({es,en});
const q=(es:string,en:string,quick:[string,string][]):Question=>({prompt:p(es,en),quick:quick.map(([a,b])=>p(a,b))});

export const regions:AustraliaRegion[]=[
  {
    id:"sydney",code:"NSW",number:"01",name:"Sídney · Nueva Gales del Sur",nameEn:"Sydney · New South Wales",capital:"Sídney",color:"#ff6b4a",character:0,
    topic:p("El mundo real · condicional cero","The real world · zero conditional"),
    hook:p("Puerto, playa y reglas que funcionan","Harbour, beach and rules that work"),
    fact:p("La ruta conecta Circular Quay y el puerto de Sídney con Bondi y Manly; después sale de la ciudad hacia las Montañas Azules, Jervis Bay y Byron Bay.","The route connects Circular Quay and Sydney Harbour with Bondi and Manly, then leaves the city for the Blue Mountains, Jervis Bay and Byron Bay."),
    mission:p("Usá solamente SI + PRESENTE → PRESENTE o IMPERATIVO.","Use only IF + PRESENT → PRESENT or COMMAND."),
    places:[p("Circular Quay","Circular Quay"),p("Bondi Beach","Bondi Beach"),p("Manly","Manly"),p("Montañas Azules","Blue Mountains"),p("Jervis Bay","Jervis Bay"),p("Byron Bay","Byron Bay"),p("Hunter Valley","Hunter Valley")],
    words:[p("si llueve","if it rains"),p("si hace sol","if it is sunny"),p("la bandera roja","red flag"),p("usar protector solar","use sunscreen"),p("tomar el ferry","take the ferry"),p("buscar sombra","look for shade"),p("no entrar al agua","do not enter the water"),p("normalmente","normally")],
    questions:[
      q("¿Qué te pasa si pasás muchas horas al sol en Bondi sin protección?","What happens to you if you spend many hours in the sun at Bondi without protection?",[["me quemo","I get sunburnt"],["me duele la cabeza","I get a headache"],["me siento cansado/a","I feel tired"],["no me pasa nada","nothing happens to me"]]),
      q("Si ves una bandera roja en Bondi o Manly, ¿qué hacés?","If you see a red flag at Bondi or Manly, what do you do?",[["no entro al agua","I do not enter the water"],["pregunto a un guardavidas","I ask a lifeguard"],["busco otra zona","I look for another area"],["espero","I wait"]]),
      q("¿Qué hacés normalmente si llueve mientras caminás desde Circular Quay hasta la Ópera de Sídney?","What do you normally do if it rains while you walk from Circular Quay to the Sydney Opera House?",[["entro a un café","I go into a café"],["abro el paraguas","I open my umbrella"],["sigo caminando","I keep walking"],["tomo el tren","I take the train"]]),
      q("Si tomás el ferry de Circular Quay a Manly, ¿qué ves normalmente?","If you take the ferry from Circular Quay to Manly, what do you normally see?",[["la Ópera","the Opera House"],["el Harbour Bridge","the Harbour Bridge"],["muchos barcos","many boats"],["la entrada al océano","the ocean entrance"]]),
      q("Si hay niebla en las Montañas Azules, dale tres instrucciones a un visitante.","If there is fog in the Blue Mountains, give a visitor three instructions.",[["caminá despacio","walk slowly"],["seguí el sendero","follow the trail"],["llevá una campera","take a jacket"],["no te separes","do not wander off"]]),
      q("Si hacés la ruta costera de Sídney a Byron Bay, ¿dónde parás normalmente: Newcastle, Port Stephens o Coffs Harbour?","If you take the coastal route from Sydney to Byron Bay, where do you normally stop: Newcastle, Port Stephens or Coffs Harbour?",[["Newcastle","Newcastle"],["Port Stephens","Port Stephens"],["Coffs Harbour","Coffs Harbour"],["en los tres","at all three"]]),
    ]
  },
  {
    id:"melbourne",code:"VIC",number:"02",name:"Victoria · Melbourne",nameEn:"Victoria · Melbourne",capital:"Melbourne",color:"#8b6be8",character:1,
    topic:p("Personalidad urbana","Urban personality"),hook:p("Cuatro estaciones, un café y una idea","Four seasons, one café and an idea"),
    fact:p("La ruta empieza entre los callejones de Melbourne y el Queen Victoria Market, y después conecta la Great Ocean Road, los Doce Apóstoles, Phillip Island y Yarra Valley.","The route starts among Melbourne's laneways and Queen Victoria Market, then connects the Great Ocean Road, the Twelve Apostles, Phillip Island and the Yarra Valley."),
    mission:p("Elegí un plan y explicá qué dice sobre tu personalidad.","Choose a plan and explain what it says about your personality."),
    places:[p("Hosier Lane","Hosier Lane"),p("Queen Victoria Market","Queen Victoria Market"),p("Great Ocean Road","Great Ocean Road"),p("Doce Apóstoles","Twelve Apostles"),p("Phillip Island","Phillip Island"),p("Yarra Valley","Yarra Valley"),p("Grampians","Grampians")],
    words:[p("el callejón","laneway"),p("el tranvía","tram"),p("el arte urbano","street art"),p("cambiar de plan","change plans"),p("acogedor/a","cosy"),p("creativo/a","creative"),p("improvisar","improvise"),p("la personalidad","personality")],
    questions:[
      q("Tenés una tarde con clima cambiante en Melbourne. ¿Elegís Hosier Lane, el Queen Victoria Market, un café o el tranvía?","You have an afternoon of changing weather in Melbourne. Do you choose Hosier Lane, Queen Victoria Market, a café or the tram?",[["Hosier Lane","Hosier Lane"],["el mercado","the market"],["un café","a café"],["el tranvía","the tram"]]),
      q("Hosier Lane cambia todo el tiempo porque el arte urbano se renueva. ¿Eso mejora el lugar o borra obras buenas?","Hosier Lane changes all the time because its street art is renewed. Does that improve the place or erase good work?",[["lo mejora","it improves it"],["borra obras","it erases work"],["las dos cosas","both"],["depende","it depends"]]),
      q("En la Great Ocean Road, ¿preferís manejar rápido hasta los Doce Apóstoles o parar en pueblos y bosques?","On the Great Ocean Road, would you rather drive straight to the Twelve Apostles or stop in towns and forests?",[["ir directo","go straight there"],["parar mucho","stop often"],["dormir en el camino","stay overnight"],["ir con guía","go with a guide"]]),
      q("En Phillip Island, mucha gente espera para ver a los pequeños pingüinos volver del mar. ¿Una espera larga hace más especial el momento?","On Phillip Island, many people wait to see little penguins return from the sea. Does a long wait make the moment more special?",[["sí, mucho","yes, a lot"],["un poco","a little"],["no","no"],["depende del clima","it depends on the weather"]]),
      q("Inventá un café inolvidable para Fitzroy: ¿qué tiene y qué no tiene?","Invent an unforgettable café for Fitzroy: what does it have and what does it not have?",[["música tranquila","calm music"],["mesas compartidas","shared tables"],["arte local","local art"],["sin celulares","no phones"]]),
      q("Yarra Valley queda cerca de Melbourne. ¿Preferís una excursión de comida y paisajes o una caminata en los Grampians?","The Yarra Valley is close to Melbourne. Would you prefer a food-and-scenery trip or a hike in the Grampians?",[["Yarra Valley","Yarra Valley"],["Grampians","Grampians"],["las dos","both"],["ninguna","neither"]]),
    ]
  },
  {
    id:"queensland",code:"QLD",number:"03",name:"Queensland",nameEn:"Queensland",capital:"Brisbane",color:"#14bfa7",character:2,
    topic:p("Maravilla sin destruirla","Wonder without destroying it"),hook:p("Arrecife, selva y decisiones pequeñas","Reef, rainforest and small decisions"),
    fact:p("Desde Brisbane y Gold Coast, la ruta sube a K'gari, Whitsundays, Cairns, la Gran Barrera de Coral y la selva de Daintree.","From Brisbane and the Gold Coast, the route travels north to K'gari, the Whitsundays, Cairns, the Great Barrier Reef and the Daintree Rainforest."),
    mission:p("Diseñá una aventura divertida que también cuide el lugar.","Design a fun adventure that also protects the place."),
    places:[p("Brisbane","Brisbane"),p("Gold Coast","Gold Coast"),p("K'gari","K'gari"),p("Whitsundays","Whitsundays"),p("Cairns","Cairns"),p("Gran Barrera de Coral","Great Barrier Reef"),p("selva de Daintree","Daintree Rainforest")],
    words:[p("el arrecife","reef"),p("el coral","coral"),p("la tortuga marina","sea turtle"),p("no tocar","do not touch"),p("proteger","protect"),p("el guía local","local guide"),p("el daño","damage"),p("responsable","responsible")],
    questions:[
      q("Salís desde Cairns para conocer la Gran Barrera de Coral. ¿Elegís esnórquel, barco con fondo de vidrio o una actividad con biólogos?","You leave Cairns to see the Great Barrier Reef. Do you choose snorkelling, a glass-bottom boat or an activity with marine biologists?",[["esnórquel","snorkelling"],["barco con vidrio","glass-bottom boat"],["actividad científica","science activity"],["solo una isla","just an island"]]),
      q("K'gari es una gran isla de arena con lagos y bosques. ¿Debería limitarse el número de vehículos?","K'gari is a large sand island with lakes and forests. Should the number of vehicles be limited?",[["sí, mucho","yes, strongly"],["un poco","a little"],["solo en algunas zonas","only in some areas"],["no","no"]]),
      q("En las Whitsundays, ¿pagarías más por una excursión pequeña que protege el mar?","In the Whitsundays, would you pay more for a small tour that protects the sea?",[["sí, claro","yes, definitely"],["un poco más","a little more"],["depende del precio","it depends on the price"],["no","no"]]),
      q("En Daintree, la selva tropical llega casi hasta el arrecife. ¿Qué explorás primero: bosque o mar?","In the Daintree, tropical rainforest comes close to the reef. What do you explore first: forest or sea?",[["el bosque","the forest"],["el mar","the sea"],["los dos","both"],["depende del clima","it depends on the weather"]]),
      q("Brisbane tiene río y Gold Coast tiene playas y torres. ¿Dónde sería más fácil tu vida diaria?","Brisbane has a river and the Gold Coast has beaches and towers. Where would your daily life be easier?",[["Brisbane","Brisbane"],["Gold Coast","Gold Coast"],["en una ciudad pequeña","in a small city"],["no sé","I do not know"]]),
      q("En Lady Elliot Island o Green Island, ¿una foto perfecta vale la pena si molesta a una tortuga?","On Lady Elliot Island or Green Island, is a perfect photo worth it if it disturbs a turtle?",[["nunca","never"],["casi nunca","almost never"],["depende","it depends"],["sí","yes"]]),
    ]
  },
  {
    id:"northern",code:"NT",number:"04",name:"Territorio del Norte",nameEn:"Northern Territory",capital:"Darwin",color:"#e87535",character:3,
    topic:p("Silencio, distancia y respeto","Silence, distance and respect"),hook:p("Un cielo enorme cambia la conversación","A huge sky changes the conversation"),
    fact:p("La ruta une Darwin, Litchfield y Kakadu en el Top End con Katherine, Nitmiluk, Alice Springs, Uluru–Kata Tjuta y Watarrka/Kings Canyon en el Centro Rojo.","The route links Darwin, Litchfield and Kakadu in the Top End with Katherine, Nitmiluk, Alice Springs, Uluru–Kata Tjuta and Watarrka/Kings Canyon in the Red Centre."),
    mission:p("Aprendé a visitar un lugar sin sentir que todo te pertenece.","Learn to visit a place without feeling that everything belongs to you."),
    places:[p("Darwin","Darwin"),p("Litchfield","Litchfield"),p("Kakadu · Ubirr","Kakadu · Ubirr"),p("Nitmiluk Gorge","Nitmiluk Gorge"),p("Alice Springs","Alice Springs"),p("Uluru–Kata Tjuta","Uluru–Kata Tjuta"),p("Watarrka · Kings Canyon","Watarrka · Kings Canyon")],
    words:[p("el lugar sagrado","sacred place"),p("pedir permiso","ask permission"),p("la distancia","distance"),p("el cielo nocturno","night sky"),p("el silencio","silence"),p("el guardaparques","park ranger"),p("respetar","respect"),p("la comunidad local","local community")],
    questions:[
      q("En Uluru–Kata Tjuta hay lugares donde no corresponde fotografiar. ¿Cómo reaccionás cuando una regla protege una historia sagrada?","At Uluru–Kata Tjuta there are places where photography is not appropriate. How do you react when a rule protects a sacred story?",[["la respeto","I respect it"],["pregunto para aprender","I ask to learn"],["me sorprende","it surprises me"],["guardo el celular","I put my phone away"]]),
      q("En Ubirr, dentro de Kakadu, hay arte rupestre y vistas sobre humedales. ¿Qué mirás primero: la historia o el paisaje?","At Ubirr in Kakadu there is rock art and views over wetlands. What do you look at first: the history or the landscape?",[["la historia","the history"],["el paisaje","the landscape"],["los dos","both"],["escucho al guía","I listen to the guide"]]),
      q("¿Preferís conocer Nitmiluk Gorge con una guía local, en canoa o caminando?","Would you rather explore Nitmiluk Gorge with a local guide, by canoe or on foot?",[["con guía","with a guide"],["en canoa","by canoe"],["caminando","on foot"],["en barco","by boat"]]),
      q("Entre Darwin y Alice Springs hay una distancia enorme. ¿Eso se siente como libertad o como problema?","There is a huge distance between Darwin and Alice Springs. Does that feel like freedom or a problem?",[["libertad","freedom"],["problema","a problem"],["las dos cosas","both"],["depende del transporte","it depends on transport"]]),
      q("¿Elegís las cascadas de Litchfield o una noche de estrellas cerca de Watarrka/Kings Canyon?","Do you choose the waterfalls of Litchfield or a night under the stars near Watarrka/Kings Canyon?",[["Litchfield","Litchfield"],["Watarrka","Watarrka"],["las dos","both"],["depende de la estación","it depends on the season"]]),
      q("¿Qué significa ser un buen visitante en Kakadu, un parque natural y también un paisaje cultural vivo?","What does it mean to be a good visitor in Kakadu, both a natural park and a living cultural landscape?",[["escuchar primero","listen first"],["seguir las reglas","follow the rules"],["ir con guía","go with a guide"],["apoyar a la comunidad","support the community"]]),
    ]
  },
  {
    id:"south",code:"SA",number:"05",name:"Australia Meridional",nameEn:"South Australia",capital:"Adelaida",color:"#ec4f78",character:4,
    topic:p("Sabores e ideas valientes","Flavours and bold ideas"),hook:p("Una mesa puede contar una región","A table can tell a region's story"),
    fact:p("La ruta sale del Adelaide Central Market hacia Barossa, Kangaroo Island y Seal Bay, y después cambia la costa por Flinders Ranges, Wilpena Pound y Eyre Peninsula.","The route leaves Adelaide Central Market for Barossa, Kangaroo Island and Seal Bay, then swaps the coast for the Flinders Ranges, Wilpena Pound and the Eyre Peninsula."),
    mission:p("Creá una experiencia que se recuerde por algo más que la comida.","Create an experience remembered for more than food."),
    places:[p("Adelaide Central Market","Adelaide Central Market"),p("Barossa","Barossa"),p("Kangaroo Island","Kangaroo Island"),p("Seal Bay","Seal Bay"),p("Flinders Ranges","Flinders Ranges"),p("Wilpena Pound","Wilpena Pound"),p("Eyre Peninsula","Eyre Peninsula")],
    words:[p("el mercado","market"),p("el producto local","local product"),p("la cosecha","harvest"),p("el festival","festival"),p("probar","try/taste"),p("compartir la mesa","share the table"),p("sin alcohol","alcohol-free"),p("la historia familiar","family story")],
    questions:[
      q("En el Adelaide Central Market, ¿un puesto te atrae más por el olor, los colores o la persona que vende?","At Adelaide Central Market, are you more attracted to a stall by its smell, colours or the person selling?",[["el olor","the smell"],["los colores","the colours"],["la persona","the person"],["el precio","the price"]]),
      q("Barossa es famosa por el vino, pero vos tenés que crear una ruta sin alcohol. ¿Qué incluís?","Barossa is famous for wine, but you have to create an alcohol-free route. What do you include?",[["comida local","local food"],["jugo de uva","grape juice"],["bicicleta","cycling"],["historias familiares","family stories"]]),
      q("En Seal Bay, en Kangaroo Island, se observan leones marinos desde una distancia segura. ¿Ver menos de cerca puede ser mejor?","At Seal Bay on Kangaroo Island, sea lions are observed from a safe distance. Can seeing less closely be better?",[["sí, protege","yes, it protects them"],["sí, es más natural","yes, it is more natural"],["no, quiero acercarme","no, I want to get closer"],["depende","it depends"]]),
      q("¿Preferís una noche de estrellas en Flinders Ranges o un día de mar en Eyre Peninsula?","Would you rather spend a night under the stars in the Flinders Ranges or a day by the sea on the Eyre Peninsula?",[["Flinders Ranges","Flinders Ranges"],["Eyre Peninsula","Eyre Peninsula"],["las dos","both"],["depende del clima","it depends on the weather"]]),
      q("Wilpena Pound parece un enorme anfiteatro natural. ¿Qué actividad tranquila organizarías allí?","Wilpena Pound looks like a huge natural amphitheatre. What quiet activity would you organise there?",[["una caminata","a walk"],["dibujar","drawing"],["mirar estrellas","stargazing"],["escuchar historias","listening to stories"]]),
      q("Diseñá una mesa para ocho desconocidos en Adelaida: cada plato debe representar una región de South Australia.","Design a table for eight strangers in Adelaide: each dish must represent a region of South Australia.",[["Barossa","Barossa"],["Kangaroo Island","Kangaroo Island"],["Eyre Peninsula","Eyre Peninsula"],["Adelaide Hills","Adelaide Hills"]]),
    ]
  },
  {
    id:"western",code:"WA",number:"06",name:"Australia Occidental",nameEn:"Western Australia",capital:"Perth",color:"#f2ad36",character:5,
    topic:p("Lejos de todo, cerca de vos","Far from everything, close to yourself"),hook:p("Océano, espacio y una ciudad remota","Ocean, space and a remote city"),
    fact:p("La ruta une Perth y Fremantle con Wadjemup/Rottnest Island y Margaret River; después recorre miles de kilómetros hacia Nyinggulu/Ningaloo, Broome, Kimberley y Esperance.","The route links Perth and Fremantle with Wadjemup/Rottnest Island and Margaret River, then travels thousands of kilometres to Nyinggulu/Ningaloo, Broome, the Kimberley and Esperance."),
    mission:p("Decidí cuándo la distancia es libertad y cuándo se vuelve soledad.","Decide when distance is freedom and when it becomes loneliness."),
    places:[p("Perth · Fremantle","Perth · Fremantle"),p("Wadjemup · Rottnest","Wadjemup · Rottnest"),p("Margaret River","Margaret River"),p("Nyinggulu · Ningaloo","Nyinggulu · Ningaloo"),p("Broome","Broome"),p("Kimberley","Kimberley"),p("Esperance","Esperance")],
    words:[p("remoto/a","remote"),p("la costa","coast"),p("el atardecer","sunset"),p("sentirse solo/a","feel lonely"),p("tener espacio","have space"),p("el viaje largo","long journey"),p("la comunidad","community"),p("el cielo","sky")],
    questions:[
      q("Perth mira al océano Índico y está muy lejos de otras grandes ciudades. ¿Esa distancia te da paz o te limita?","Perth faces the Indian Ocean and is far from other major cities. Does that distance give you peace or limit you?",[["me da paz","it gives me peace"],["me limita","it limits me"],["las dos cosas","both"],["depende de mi trabajo","it depends on my work"]]),
      q("En Wadjemup/Rottnest, mucha gente se mueve en bicicleta y conoce a los quokkas. ¿Qué transporte prohibirías en una isla pequeña?","On Wadjemup/Rottnest, many people travel by bicycle and meet quokkas. Which transport would you ban on a small island?",[["autos privados","private cars"],["motos","motorbikes"],["ninguno","none"],["todos con motor","all motor vehicles"]]),
      q("Margaret River mezcla surf, bosques, cuevas y comida. ¿Qué combinación elegirías para un solo día?","Margaret River mixes surf, forests, caves and food. Which combination would you choose for one day?",[["surf y comida","surf and food"],["bosque y cuevas","forest and caves"],["costa y arte","coast and art"],["un poco de todo","a bit of everything"]]),
      q("En Nyinggulu/Ningaloo el arrecife está muy cerca de la costa. ¿Preferís nadar con un guía o mirar desde la playa?","At Nyinggulu/Ningaloo the reef is very close to the coast. Would you rather swim with a guide or watch from the beach?",[["nadar con guía","swim with a guide"],["mirar desde la playa","watch from the beach"],["barco pequeño","small boat"],["no entro al agua","I do not enter the water"]]),
      q("Elegí un paisaje remoto: la playa blanca de Esperance, el rojo de Kimberley o el atardecer de Broome.","Choose a remote landscape: Esperance's white beach, the red Kimberley or a Broome sunset.",[["Esperance","Esperance"],["Kimberley","Kimberley"],["Broome","Broome"],["los tres","all three"]]),
      q("Broome y las comunidades de Kimberley están muy lejos entre sí. ¿Qué servicio nunca puede faltar?","Broome and Kimberley communities are very far apart. Which service must never be missing?",[["salud","healthcare"],["internet","internet"],["transporte","transport"],["educación","education"]]),
    ]
  },
  {
    id:"tasmania",code:"TAS",number:"07",name:"Tasmania",nameEn:"Tasmania",capital:"Hobart",color:"#4e9d67",character:6,
    topic:p("Naturaleza que pone límites","Nature that sets limits"),hook:p("Una isla fría, salvaje y muy viva","A cool, wild and very alive island"),
    fact:p("La ruta empieza en Hobart, Salamanca Market y kunanyi/Mount Wellington, cruza a Bruny Island y después conecta Freycinet, Wineglass Bay, Cradle Mountain, Launceston y Port Arthur.","The route starts in Hobart, Salamanca Market and kunanyi/Mount Wellington, crosses to Bruny Island and then connects Freycinet, Wineglass Bay, Cradle Mountain, Launceston and Port Arthur."),
    mission:p("Elegí cuánto confort necesitás para sentir una aventura real.","Choose how much comfort you need to feel a real adventure."),
    places:[p("Hobart · Salamanca","Hobart · Salamanca"),p("kunanyi · Mount Wellington","kunanyi · Mount Wellington"),p("Bruny Island","Bruny Island"),p("Freycinet · Wineglass Bay","Freycinet · Wineglass Bay"),p("Cradle Mountain","Cradle Mountain"),p("Launceston","Launceston"),p("Port Arthur","Port Arthur")],
    words:[p("la isla","island"),p("el sendero","trail"),p("el bosque","forest"),p("el animal salvaje","wild animal"),p("el clima frío","cold weather"),p("la cabaña","cabin"),p("estar desconectado/a","be disconnected"),p("dejar huella","leave a trace")],
    questions:[
      q("Desde Hobart podés subir a kunanyi/Mount Wellington o visitar Salamanca Market. ¿Montaña primero o ciudad primero?","From Hobart you can go up kunanyi/Mount Wellington or visit Salamanca Market. Mountain first or city first?",[["la montaña","the mountain"],["el mercado","the market"],["los dos","both"],["depende del clima","it depends on the weather"]]),
      q("En Bruny Island, ¿preferís una cabaña cómoda o una noche simple cerca de la costa?","On Bruny Island, would you prefer a comfortable cabin or a simple night near the coast?",[["cabaña cómoda","comfortable cabin"],["noche simple","simple night"],["acampar","camping"],["volver a Hobart","return to Hobart"]]),
      q("Wineglass Bay se ve desde arriba después de una caminata. ¿Una vista es mejor cuando cuesta llegar?","Wineglass Bay is seen from above after a walk. Is a view better when it takes effort to reach?",[["sí, mucho","yes, much better"],["un poco","a little"],["no cambia","it makes no difference"],["prefiero acceso fácil","I prefer easy access"]]),
      q("En Cradle Mountain, ¿qué no debería llevar una persona al sendero?","At Cradle Mountain, what should a person not take onto the trail?",[["música fuerte","loud music"],["plástico","plastic"],["comida para animales","food for animals"],["demasiadas cosas","too many things"]]),
      q("Port Arthur es un lugar histórico difícil, no solo bonito. ¿Cómo se visita un lugar con una historia triste?","Port Arthur is a difficult historic place, not just a beautiful one. How do you visit a place with a sad history?",[["con respeto","with respect"],["con una guía","with a guide"],["leyendo primero","by reading first"],["en silencio","quietly"]]),
      q("Hobart o Launceston: ¿en cuál vivirías para tener ciudad pequeña y naturaleza cerca?","Hobart or Launceston: where would you live for a small city with nature nearby?",[["Hobart","Hobart"],["Launceston","Launceston"],["fuera de las dos","outside both"],["no viviría allí","I would not live there"]]),
    ]
  },
  {
    id:"canberra",code:"ACT",number:"08",name:"Canberra · Territorio de la Capital",nameEn:"Canberra · Australian Capital Territory",capital:"Canberra",color:"#3c7fc4",character:7,
    topic:p("Diseñar una capital humana","Designing a human capital"),hook:p("Una ciudad planificada también puede sorprender","A planned city can still surprise"),
    fact:p("Canberra se organiza alrededor del lago Burley Griffin: Parliament House, National Museum, National Gallery y War Memorial se conectan con parques, ciclovías y el National Arboretum.","Canberra is organised around Lake Burley Griffin: Parliament House, the National Museum, National Gallery and War Memorial connect with parks, cycle paths and the National Arboretum."),
    mission:p("Convertí una capital seria en una ciudad donde quieras vivir.","Turn a serious capital into a city where you would want to live."),
    places:[p("lago Burley Griffin","Lake Burley Griffin"),p("Parliament House","Parliament House"),p("Old Parliament House","Old Parliament House"),p("National Museum","National Museum"),p("National Gallery","National Gallery"),p("War Memorial","War Memorial"),p("National Arboretum","National Arboretum")],
    words:[p("la capital","capital city"),p("planificar","plan"),p("el parlamento","parliament"),p("el espacio público","public space"),p("la regla","rule"),p("el museo","museum"),p("participar","participate"),p("la ciudad humana","human city")],
    questions:[
      q("¿Parliament House debe impresionar a quien visita o sentirse cercano a la gente común?","Should Parliament House impress visitors or feel close to ordinary people?",[["impresionar","impress"],["ser cercano","feel close"],["las dos cosas","both"],["representar al país","represent the country"]]),
      q("Aunque no te interese la política, ¿elegís National Museum, National Gallery o Old Parliament House?","Even if politics does not interest you, do you choose the National Museum, National Gallery or Old Parliament House?",[["National Museum","National Museum"],["National Gallery","National Gallery"],["Old Parliament House","Old Parliament House"],["ninguno","none"]]),
      q("Inventá una regla para compartir el lago Burley Griffin entre ciclistas, personas que caminan y gente que hace picnic.","Invent a rule for sharing Lake Burley Griffin among cyclists, walkers and people having picnics.",[["velocidad baja","low speed"],["zonas separadas","separate zones"],["más señales","more signs"],["respeto y atención","respect and attention"]]),
      q("El National Arboretum tiene miles de árboles de muchos lugares. ¿Qué árbol de tu país agregarías?","The National Arboretum has thousands of trees from many places. Which tree from your country would you add?",[["un árbol nativo","a native tree"],["un árbol con flores","a flowering tree"],["un árbol frutal","a fruit tree"],["un árbol resistente","a hardy tree"]]),
      q("El War Memorial mezcla museo y lugar de memoria. ¿Qué tono debería tener: silencioso, educativo o emocional?","The War Memorial combines a museum and a place of remembrance. What tone should it have: quiet, educational or emotional?",[["silencioso","quiet"],["educativo","educational"],["emocional","emotional"],["una mezcla","a mixture"]]),
      q("Diseñá una ruta de un día por Canberra: solo podés elegir tres lugares alrededor del lago.","Design a one-day Canberra route: you can choose only three places around the lake.",[["Parliament House","Parliament House"],["National Museum","National Museum"],["National Gallery","National Gallery"],["War Memorial","War Memorial"]]),
    ]
  }
];

export const connectors=[p("porque","because"),p("pero","but"),p("también","also"),p("por ejemplo","for example"),p("normalmente","normally"),p("para mí","for me")];
export const speakingMoves=[
  p("Agregá una razón.","Add a reason."),p("Dá un ejemplo personal.","Give a personal example."),p("Elegí la opción opuesta.","Choose the opposite option."),p("Preguntale lo mismo a otra persona.","Ask someone else the same question.")
];

export const conditionalPractice=[
  {sentence:"Si no ___ (usar) protector solar en Bondi, me quemo.",answer:"usás",why:p("Después de ‘si’ usamos presente.","After ‘si’ we use the present.")},
  {sentence:"Si el mar está peligroso en Manly, no ___ (entrar).",answer:"entres",why:p("El resultado es una instrucción negativa: imperativo.","The result is a negative instruction: command form.")},
  {sentence:"La gente toma el ferry a Manly si ___ (querer) ver el puerto.",answer:"quiere",why:p("El orden cambia, pero los dos hechos siguen siendo reales.","The order changes, but both facts remain real.")},
  {sentence:"Si llueve en Circular Quay, nosotros ___ (buscar) un café.",answer:"buscamos",why:p("Es un hábito: presente + presente.","It is a habit: present + present.")},
];
