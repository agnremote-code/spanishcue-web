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
    fact:p("Sídney vive entre un gran puerto, playas oceánicas y cambios rápidos de clima. Es un escenario perfecto para hablar de hábitos, instrucciones y resultados normales.","Sydney lives between a large harbour, ocean beaches and fast-changing weather. It is a perfect setting for habits, instructions and normal results."),
    mission:p("Usá solamente SI + PRESENTE → PRESENTE o IMPERATIVO.","Use only IF + PRESENT → PRESENT or COMMAND."),
    words:[p("si llueve","if it rains"),p("si hace sol","if it is sunny"),p("la bandera roja","red flag"),p("usar protector solar","use sunscreen"),p("tomar el ferry","take the ferry"),p("buscar sombra","look for shade"),p("no entrar al agua","do not enter the water"),p("normalmente","normally")],
    questions:[
      q("¿Qué te pasa si pasás muchas horas al sol sin protección?","What happens to you if you spend many hours in the sun without protection?",[["me quemo","I get sunburnt"],["me duele la cabeza","I get a headache"],["me siento cansado/a","I feel tired"],["no me pasa nada","nothing happens to me"]]),
      q("Si ves una bandera roja en una playa de Sídney, ¿qué hacés?","If you see a red flag on a Sydney beach, what do you do?",[["no entro al agua","I do not enter the water"],["pregunto a un guardavidas","I ask a lifeguard"],["busco otra playa","I look for another beach"],["espero","I wait"]]),
      q("¿Qué hacés normalmente si llueve durante un paseo por el puerto?","What do you normally do if it rains during a harbour walk?",[["entro a un café","I go into a café"],["abro el paraguas","I open my umbrella"],["sigo caminando","I keep walking"],["vuelvo a casa","I go home"]]),
      q("Si viajás en ferry por el puerto, ¿qué ves normalmente?","If you travel by ferry across the harbour, what do you normally see?",[["la Ópera","the Opera House"],["el puente","the bridge"],["muchos barcos","many boats"],["la costa","the coast"]]),
      q("Dale tres instrucciones a una persona que visita una playa: ‘Si…, …’. ","Give three instructions to someone visiting a beach: ‘If…, …’. ",[["si hace sol…","if it is sunny…"],["si hay olas grandes…","if there are big waves…"],["si tenés sed…","if you are thirsty…"],["si no entendés una señal…","if you do not understand a sign…"]]),
      q("¿Qué pasa normalmente si una ciudad tiene buen transporte público?","What normally happens if a city has good public transport?",[["hay menos autos","there are fewer cars"],["la gente camina más","people walk more"],["es más fácil viajar","travel is easier"],["la ciudad cambia","the city changes"]]),
    ]
  },
  {
    id:"melbourne",code:"VIC",number:"02",name:"Victoria · Melbourne",nameEn:"Victoria · Melbourne",capital:"Melbourne",color:"#8b6be8",character:1,
    topic:p("Personalidad urbana","Urban personality"),hook:p("Cuatro estaciones, un café y una idea","Four seasons, one café and an idea"),
    fact:p("Melbourne es conocida por sus callejones con arte, cafés, tranvías y un clima que puede cambiar varias veces en un día.","Melbourne is known for laneway art, cafés, trams and weather that can change several times in one day."),
    mission:p("Elegí un plan y explicá qué dice sobre tu personalidad.","Choose a plan and explain what it says about your personality."),
    words:[p("el callejón","laneway"),p("el tranvía","tram"),p("el arte urbano","street art"),p("cambiar de plan","change plans"),p("acogedor/a","cosy"),p("creativo/a","creative"),p("improvisar","improvise"),p("la personalidad","personality")],
    questions:[
      q("Tenés una tarde libre y el tiempo cambia tres veces. ¿Qué plan elegís?","You have a free afternoon and the weather changes three times. Which plan do you choose?",[["un café pequeño","a small café"],["una galería","a gallery"],["un parque","a park"],["un viaje en tranvía","a tram ride"]]),
      q("¿Qué muestra más personalidad: una avenida perfecta o un callejón lleno de arte?","What shows more personality: a perfect avenue or a laneway full of art?",[["la avenida","the avenue"],["el callejón","the laneway"],["los dos","both"],["depende","it depends"]]),
      q("¿Una ciudad necesita lugares donde no hay que comprar nada?","Does a city need places where you do not have to buy anything?",[["sí, muchos","yes, many"],["sí, algunos","yes, some"],["no es necesario","it is not necessary"],["no sé","I do not know"]]),
      q("¿Preferís conocer una ciudad con un plan o descubrirla sin mapa?","Do you prefer to explore a city with a plan or discover it without a map?",[["con un plan","with a plan"],["sin mapa","without a map"],["un poco de los dos","a bit of both"],["con una persona local","with a local person"]]),
      q("Inventá un café inolvidable: ¿qué tiene y qué no tiene?","Invent an unforgettable café: what does it have and what does it not have?",[["música tranquila","calm music"],["mesas compartidas","shared tables"],["arte local","local art"],["sin celulares","no phones"]]),
      q("¿Qué pequeño detalle hace que una ciudad se sienta humana?","Which small detail makes a city feel human?",[["la gente saluda","people say hello"],["hay bancos","there are benches"],["se puede caminar","it is walkable"],["hay arte","there is art"]]),
    ]
  },
  {
    id:"queensland",code:"QLD",number:"03",name:"Queensland",nameEn:"Queensland",capital:"Brisbane",color:"#14bfa7",character:2,
    topic:p("Maravilla sin destruirla","Wonder without destroying it"),hook:p("Arrecife, selva y decisiones pequeñas","Reef, rainforest and small decisions"),
    fact:p("Queensland reúne la Gran Barrera de Coral, selvas tropicales, ciudades costeras y una cultura muy conectada con el mar.","Queensland brings together the Great Barrier Reef, tropical rainforests, coastal cities and a culture closely connected to the sea."),
    mission:p("Diseñá una aventura divertida que también cuide el lugar.","Design a fun adventure that also protects the place."),
    words:[p("el arrecife","reef"),p("el coral","coral"),p("la tortuga marina","sea turtle"),p("no tocar","do not touch"),p("proteger","protect"),p("el guía local","local guide"),p("el daño","damage"),p("responsable","responsible")],
    questions:[
      q("Podés ver el arrecife de una sola forma. ¿Cuál elegís?","You can see the reef in only one way. Which do you choose?",[["con esnórquel","snorkelling"],["en un barco con vidrio","glass-bottom boat"],["en un documental","in a documentary"],["con un guía","with a guide"]]),
      q("¿Por qué algunas personas tocan animales aunque saben que no deben hacerlo?","Why do some people touch animals even when they know they should not?",[["por emoción","because of excitement"],["para una foto","for a photo"],["por curiosidad","because of curiosity"],["porque no entienden","because they do not understand"]]),
      q("¿Pagarías más por una excursión que protege el mar?","Would you pay more for a tour that protects the sea?",[["sí, claro","yes, definitely"],["un poco más","a little more"],["depende del precio","it depends on the price"],["no","no"]]),
      q("¿Qué animal cambiaría completamente tus planes de viaje si pudieras verlo?","Which animal would completely change your travel plans if you could see it?",[["una tortuga","a turtle"],["una ballena","a whale"],["un canguro","a kangaroo"],["otro animal","another animal"]]),
      q("Creá una regla turística fácil de recordar y difícil de ignorar.","Create a tourist rule that is easy to remember and hard to ignore.",[["mirá, no toques","look, do not touch"],["llevate tu basura","take your rubbish"],["seguí al guía","follow the guide"],["usá menos plástico","use less plastic"]]),
      q("¿Una foto perfecta vale la pena si molesta a un animal?","Is a perfect photo worth it if it disturbs an animal?",[["nunca","never"],["casi nunca","almost never"],["depende","it depends"],["sí","yes"]]),
    ]
  },
  {
    id:"northern",code:"NT",number:"04",name:"Territorio del Norte",nameEn:"Northern Territory",capital:"Darwin",color:"#e87535",character:3,
    topic:p("Silencio, distancia y respeto","Silence, distance and respect"),hook:p("Un cielo enorme cambia la conversación","A huge sky changes the conversation"),
    fact:p("El Territorio del Norte tiene enormes distancias, parques y lugares de gran importancia cultural para pueblos aborígenes australianos.","The Northern Territory has vast distances, parks and places of great cultural importance to Aboriginal Australian peoples."),
    mission:p("Aprendé a visitar un lugar sin sentir que todo te pertenece.","Learn to visit a place without feeling that everything belongs to you."),
    words:[p("el lugar sagrado","sacred place"),p("pedir permiso","ask permission"),p("la distancia","distance"),p("el cielo nocturno","night sky"),p("el silencio","silence"),p("el guardaparques","park ranger"),p("respetar","respect"),p("la comunidad local","local community")],
    questions:[
      q("Un lugar sagrado no permite fotos. ¿Cómo reaccionás?","A sacred place does not allow photos. How do you react?",[["lo respeto","I respect it"],["pregunto por qué","I ask why"],["me sorprende","it surprises me"],["no entro","I do not enter"]]),
      q("¿Qué podés escuchar cuando no hay tráfico ni edificios cerca?","What can you hear when there is no traffic or buildings nearby?",[["el viento","the wind"],["animales","animals"],["mi respiración","my breathing"],["casi nada","almost nothing"]]),
      q("¿Preferís explorar con una persona local o completamente solo/a?","Would you rather explore with a local person or completely alone?",[["con una persona local","with a local person"],["solo/a","alone"],["en un grupo pequeño","in a small group"],["depende del lugar","it depends on the place"]]),
      q("¿Una distancia enorme se siente como libertad o como problema?","Does a huge distance feel like freedom or a problem?",[["libertad","freedom"],["problema","a problem"],["las dos cosas","both"],["depende","it depends"]]),
      q("¿Qué objeto llevarías para una noche bajo un cielo totalmente oscuro?","What object would you take for a night under a completely dark sky?",[["una manta","a blanket"],["binoculares","binoculars"],["agua","water"],["un cuaderno","a notebook"]]),
      q("¿Qué significa ser un buen visitante en un lugar que tiene otra historia?","What does it mean to be a good visitor in a place with a different history?",[["escuchar primero","listen first"],["seguir las reglas","follow the rules"],["aprender palabras","learn words"],["apoyar a la comunidad","support the community"]]),
    ]
  },
  {
    id:"south",code:"SA",number:"05",name:"Australia Meridional",nameEn:"South Australia",capital:"Adelaida",color:"#ec4f78",character:4,
    topic:p("Sabores e ideas valientes","Flavours and bold ideas"),hook:p("Una mesa puede contar una región","A table can tell a region's story"),
    fact:p("Adelaida combina festivales, mercados, regiones agrícolas y una fuerte cultura gastronómica, con vino pero también muchísimos productos locales.","Adelaide combines festivals, markets, farming regions and a strong food culture, with wine but also many local products."),
    mission:p("Creá una experiencia que se recuerde por algo más que la comida.","Create an experience remembered for more than food."),
    words:[p("el mercado","market"),p("el producto local","local product"),p("la cosecha","harvest"),p("el festival","festival"),p("probar","try/taste"),p("compartir la mesa","share the table"),p("sin alcohol","alcohol-free"),p("la historia familiar","family story")],
    questions:[
      q("¿Qué producto simple de tu región podría sorprender a un visitante?","Which simple product from your region could surprise a visitor?",[["una fruta","a fruit"],["un pan","a bread"],["una bebida","a drink"],["una salsa","a sauce"]]),
      q("¿Un mercado es más interesante por la comida o por la gente?","Is a market more interesting because of the food or the people?",[["por la comida","the food"],["por la gente","the people"],["por las dos cosas","both"],["por el ambiente","the atmosphere"]]),
      q("Inventá una bebida especial sin alcohol para una noche de verano.","Invent a special alcohol-free drink for a summer evening.",[["con fruta","with fruit"],["con hierbas","with herbs"],["con burbujas","sparkling"],["con té","with tea"]]),
      q("¿Qué vuelve auténtico a un festival: la tradición o las ideas nuevas?","What makes a festival authentic: tradition or new ideas?",[["la tradición","tradition"],["las ideas nuevas","new ideas"],["la mezcla","the mix"],["la gente local","local people"]]),
      q("Si una comida tiene una historia familiar, ¿sabe diferente?","If a food has a family story, does it taste different?",[["sí, mucho","yes, a lot"],["un poco","a little"],["no","no"],["depende de la historia","it depends on the story"]]),
      q("Diseñá una mesa para ocho desconocidos: ¿cómo hacés para que hablen?","Design a table for eight strangers: how do you get them talking?",[["preguntas en la mesa","questions on the table"],["platos compartidos","shared dishes"],["música","music"],["un juego","a game"]]),
    ]
  },
  {
    id:"western",code:"WA",number:"06",name:"Australia Occidental",nameEn:"Western Australia",capital:"Perth",color:"#f2ad36",character:5,
    topic:p("Lejos de todo, cerca de vos","Far from everything, close to yourself"),hook:p("Océano, espacio y una ciudad remota","Ocean, space and a remote city"),
    fact:p("Perth es una de las grandes ciudades más aisladas geográficamente del mundo; al oeste hay océano y hacia el interior, distancias enormes.","Perth is one of the world's most geographically isolated major cities; there is ocean to the west and huge distances inland."),
    mission:p("Decidí cuándo la distancia es libertad y cuándo se vuelve soledad.","Decide when distance is freedom and when it becomes loneliness."),
    words:[p("remoto/a","remote"),p("la costa","coast"),p("el atardecer","sunset"),p("sentirse solo/a","feel lonely"),p("tener espacio","have space"),p("el viaje largo","long journey"),p("la comunidad","community"),p("el cielo","sky")],
    questions:[
      q("¿Vivir lejos de otras ciudades te da paz o te limita?","Does living far from other cities give you peace or limit you?",[["me da paz","it gives me peace"],["me limita","it limits me"],["las dos cosas","both"],["depende de mi trabajo","it depends on my work"]]),
      q("¿Qué necesitás cerca para no sentirte aislado/a?","What do you need nearby so you do not feel isolated?",[["amigos","friends"],["naturaleza","nature"],["un aeropuerto","an airport"],["actividades","activities"]]),
      q("Elegí: amanecer en el desierto o atardecer en el océano.","Choose: sunrise in the desert or sunset over the ocean.",[["amanecer","sunrise"],["atardecer","sunset"],["los dos","both"],["ninguno","neither"]]),
      q("¿Un viaje largo hace que un lugar se sienta más especial?","Does a long journey make a place feel more special?",[["sí","yes"],["a veces","sometimes"],["no","no"],["solo si vale la pena","only if it is worth it"]]),
      q("¿Qué actividad harías si tuvieras una playa casi vacía?","What would you do if you had an almost empty beach?",[["nadar","swim"],["caminar","walk"],["leer","read"],["mirar el cielo","watch the sky"]]),
      q("Creá una comunidad pequeña donde nadie se sienta invisible.","Create a small community where nobody feels invisible.",[["una cena semanal","a weekly dinner"],["deporte en grupo","group sport"],["ayuda entre vecinos","neighbourly help"],["un espacio común","a shared space"]]),
    ]
  },
  {
    id:"tasmania",code:"TAS",number:"07",name:"Tasmania",nameEn:"Tasmania",capital:"Hobart",color:"#4e9d67",character:6,
    topic:p("Naturaleza que pone límites","Nature that sets limits"),hook:p("Una isla fría, salvaje y muy viva","A cool, wild and very alive island"),
    fact:p("Tasmania tiene bosques, montañas, costas frías, fauna única y ciudades pequeñas como Hobart y Launceston.","Tasmania has forests, mountains, cool coasts, unique wildlife and small cities such as Hobart and Launceston."),
    mission:p("Elegí cuánto confort necesitás para sentir una aventura real.","Choose how much comfort you need to feel a real adventure."),
    words:[p("la isla","island"),p("el sendero","trail"),p("el bosque","forest"),p("el animal salvaje","wild animal"),p("el clima frío","cold weather"),p("la cabaña","cabin"),p("estar desconectado/a","be disconnected"),p("dejar huella","leave a trace")],
    questions:[
      q("¿Una isla se siente como refugio o como límite?","Does an island feel like a refuge or a limit?",[["un refugio","a refuge"],["un límite","a limit"],["las dos cosas","both"],["depende del tamaño","it depends on the size"]]),
      q("¿Cuánto confort necesitás para disfrutar de la naturaleza?","How much comfort do you need to enjoy nature?",[["muy poco","very little"],["una cama cómoda","a comfortable bed"],["baño y ducha","bathroom and shower"],["todo el confort","all the comfort"]]),
      q("¿Preferís ver un animal raro de lejos o uno común muy cerca?","Would you rather see a rare animal from far away or a common one very close?",[["raro y lejos","rare and far away"],["común y cerca","common and close"],["los dos","both"],["prefiero no acercarme","I prefer not to get close"]]),
      q("¿Qué cosa no debería llevar una persona a un bosque?","What should a person not take into a forest?",[["música fuerte","loud music"],["plástico","plastic"],["comida para animales","food for animals"],["demasiadas cosas","too many things"]]),
      q("¿Podrías pasar dos días sin señal de celular?","Could you spend two days without phone reception?",[["sí, feliz","yes, happily"],["sí, con dificultad","yes, with difficulty"],["solo un día","only one day"],["no","no"]]),
      q("Diseñá una cabaña mínima: solo podés elegir cuatro cosas.","Design a minimal cabin: you can choose only four things.",[["una ventana grande","a large window"],["una chimenea","a fireplace"],["una cocina","a kitchen"],["una cama","a bed"]]),
    ]
  },
  {
    id:"canberra",code:"ACT",number:"08",name:"Canberra · Territorio de la Capital",nameEn:"Canberra · Australian Capital Territory",capital:"Canberra",color:"#3c7fc4",character:7,
    topic:p("Diseñar una capital humana","Designing a human capital"),hook:p("Una ciudad planificada también puede sorprender","A planned city can still surprise"),
    fact:p("Canberra fue planificada como capital entre Sídney y Melbourne; combina instituciones nacionales, barrios, parques y un gran lago artificial.","Canberra was planned as a capital between Sydney and Melbourne; it combines national institutions, neighbourhoods, parks and a large artificial lake."),
    mission:p("Convertí una capital seria en una ciudad donde quieras vivir.","Turn a serious capital into a city where you would want to live."),
    words:[p("la capital","capital city"),p("planificar","plan"),p("el parlamento","parliament"),p("el espacio público","public space"),p("la regla","rule"),p("el museo","museum"),p("participar","participate"),p("la ciudad humana","human city")],
    questions:[
      q("¿Una capital debe impresionar o hacer que la gente se sienta cómoda?","Should a capital impress people or make them feel comfortable?",[["impresionar","impress"],["ser cómoda","be comfortable"],["las dos cosas","both"],["representar al país","represent the country"]]),
      q("¿Qué edificio público visitarías aunque no te interese la política?","Which public building would you visit even if politics did not interest you?",[["un museo","a museum"],["una biblioteca","a library"],["el parlamento","parliament"],["una galería","a gallery"]]),
      q("Inventá una regla para que un parque sea agradable para todos.","Invent a rule to make a park pleasant for everyone.",[["sin música fuerte","no loud music"],["más zonas tranquilas","more quiet areas"],["perros con correa","dogs on leads"],["más mesas","more tables"]]),
      q("¿Qué debería ser gratis en una capital?","What should be free in a capital city?",[["los museos","museums"],["el transporte","transport"],["el agua","water"],["las actividades culturales","cultural activities"]]),
      q("¿Una ciudad planificada puede sentirse espontánea?","Can a planned city feel spontaneous?",[["sí","yes"],["a veces","sometimes"],["es difícil","it is difficult"],["no","no"]]),
      q("Diseñá una capital del futuro con solo tres prioridades.","Design a future capital with only three priorities.",[["vivienda","housing"],["naturaleza","nature"],["transporte","transport"],["cultura","culture"]]),
    ]
  }
];

export const connectors=[p("porque","because"),p("pero","but"),p("también","also"),p("por ejemplo","for example"),p("normalmente","normally"),p("para mí","for me")];
export const speakingMoves=[
  p("Agregá una razón.","Add a reason."),p("Dá un ejemplo personal.","Give a personal example."),p("Elegí la opción opuesta.","Choose the opposite option."),p("Preguntale lo mismo a otra persona.","Ask someone else the same question.")
];

export const conditionalPractice=[
  {sentence:"Si no ___ (usar) protector solar, me quemo.",answer:"usás",why:p("Después de ‘si’ usamos presente.","After ‘si’ we use the present.")},
  {sentence:"Si el mar está peligroso, no ___ (entrar).",answer:"entres",why:p("El resultado es una instrucción negativa: imperativo.","The result is a negative instruction: command form.")},
  {sentence:"La gente toma el ferry si ___ (querer) ver el puerto.",answer:"quiere",why:p("El orden cambia, pero los dos hechos siguen siendo reales.","The order changes, but both facts remain real.")},
  {sentence:"Si llueve, nosotros ___ (buscar) un café.",answer:"buscamos",why:p("Es un hábito: presente + presente.","It is a habit: present + present.")},
];
