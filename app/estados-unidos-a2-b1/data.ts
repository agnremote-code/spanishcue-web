import {stops as sourceStops,type Pair,type UsaStop} from "../estados-unidos-basico/data";

export type {Pair,UsaStop};

const p=(es:string,en:string):Pair=>({es,en});
const q=(...items:[string,string][])=>items.map(([es,en])=>p(es,en));

const questionsById:Record<string,Pair[]>={
  "nueva-york":q(
    ["Si vivieras un mes en Nueva York, ¿qué tipo de barrio elegirías y cómo sería tu rutina?","If you lived in New York for a month, what kind of neighbourhood would you choose and what would your routine be like?"],
    ["¿Que una ciudad esté activa las veinticuatro horas es una ventaja o termina siendo agotador?","Is a city being active twenty-four hours a day an advantage, or does it become exhausting?"],
    ["¿Preferís conocer Nueva York por sus lugares famosos o por la vida cotidiana de sus barrios?","Would you rather discover New York through its famous places or through everyday neighbourhood life?"],
    ["¿Aceptarías vivir en un departamento pequeño si tuvieras buen transporte y todo cerca?","Would you accept living in a small flat if you had good transport and everything nearby?"],
    ["En Nueva York se escuchan muchos idiomas. ¿Cómo cambia eso la personalidad de una ciudad?","Many languages are heard in New York. How does that change a city's personality?"],
    ["Diseñá un día sin Times Square: ¿qué comés, qué barrio visitás y cómo te movés?","Design a day without Times Square: what do you eat, which neighbourhood do you visit and how do you get around?"],
  ),
  "washington-dc":q(
    ["Muchos museos de Washington son gratuitos. ¿Cómo cambia eso el acceso a la cultura?","Many Washington museums are free. How does that change access to culture?"],
    ["¿Los monumentos ayudan a comprender la historia o simplifican demasiado el pasado?","Do monuments help us understand history, or do they simplify the past too much?"],
    ["Si pudieras crear un museo nuevo en Washington, ¿qué tema tendría?","If you could create a new museum in Washington, what would its subject be?"],
    ["¿Una capital debe representar a todo el país o puede tener una identidad propia?","Should a capital represent the whole country, or can it have its own identity?"],
    ["¿Preferís aprender sobre política e historia dentro de un museo o caminando por la ciudad?","Would you rather learn about politics and history inside a museum or by walking around the city?"],
    ["Tenés un solo día: elegí dos museos, un monumento y un lugar para descansar.","You have one day: choose two museums, one monument and a place to rest."],
  ),
  "miami-everglades":q(
    ["En Miami se usa mucho el español. ¿Qué ventajas tiene vivir en una ciudad bilingüe?","Spanish is widely used in Miami. What are the advantages of living in a bilingual city?"],
    ["¿Preferís la energía de Miami Beach o la tranquilidad natural de los Everglades?","Do you prefer the energy of Miami Beach or the natural calm of the Everglades?"],
    ["¿Cómo se puede hacer crecer una ciudad sin destruir los humedales cercanos?","How can a city grow without destroying nearby wetlands?"],
    ["¿Cómo cambia tu rutina cuando hace mucho calor y hay mucha humedad?","How does your routine change when it is very hot and humid?"],
    ["Miami tiene una imagen de lujo y fiesta. ¿Qué otras partes de la ciudad te gustaría conocer?","Miami has an image of luxury and parties. What other parts of the city would you like to discover?"],
    ["Organizá tres días: uno de playa, uno cultural y uno en la naturaleza.","Plan three days: one at the beach, one cultural day and one in nature."],
  ),
  "nueva-orleans":q(
    ["¿Puede la música representar la identidad de una ciudad mejor que sus monumentos?","Can music represent a city's identity better than its monuments?"],
    ["¿El turismo ayuda a conservar la cultura de Nueva Orleans o puede convertirla en un espectáculo?","Does tourism help preserve New Orleans culture, or can it turn it into a show?"],
    ["La ciudad ha pasado por huracanes e inundaciones. ¿Qué ayuda a una comunidad a recuperarse?","The city has experienced hurricanes and flooding. What helps a community recover?"],
    ["¿Preferís escuchar jazz en la calle, en un bar pequeño o en un teatro? ¿Por qué?","Would you rather hear jazz in the street, in a small bar or in a theatre? Why?"],
    ["¿Qué plato de tu región muestra una mezcla de culturas como la cocina criolla?","Which dish from your region shows a mixture of cultures like Creole food?"],
    ["Creá una noche en Nueva Orleans con música, comida y un barrio histórico.","Create a night in New Orleans with music, food and a historic neighbourhood."],
  ),
  chicago:q(
    ["Chicago está junto a un lago enorme. ¿Se siente más como una ciudad costera o una ciudad interior?","Chicago is beside an enormous lake. Does it feel more like a coastal city or an inland city?"],
    ["¿La arquitectura puede hacer que una persona mire y recorra una ciudad de otra manera?","Can architecture make a person look at and explore a city differently?"],
    ["¿Un invierno muy frío le da personalidad a una ciudad o complica demasiado la vida?","Does a very cold winter give a city personality, or make life too difficult?"],
    ["¿Qué buscarías fuera del centro turístico: comida, música, parques o vida de barrio?","What would you look for outside the tourist centre: food, music, parks or neighbourhood life?"],
    ["¿Qué importancia tiene el transporte público para conectar barrios muy diferentes?","How important is public transport for connecting very different neighbourhoods?"],
    ["Compará Chicago con otra gran ciudad que conocés: ¿qué tienen en común y qué cambia?","Compare Chicago with another big city you know: what do they have in common and what changes?"],
  ),
  nashville:q(
    ["¿Qué ocurre cuando una ciudad construye casi toda su imagen alrededor de un tipo de música?","What happens when a city builds almost its entire image around one type of music?"],
    ["¿Preferís descubrir artistas nuevos en un local pequeño o ver a una estrella en un estadio?","Would you rather discover new artists in a small venue or see a star in a stadium?"],
    ["En una canción, ¿qué te conecta más: la historia, la letra, la voz o el ritmo?","In a song, what connects with you most: the story, lyrics, voice or rhythm?"],
    ["¿La música country cuenta experiencias universales o muy específicas de Estados Unidos?","Does country music tell universal stories or experiences very specific to the United States?"],
    ["¿La música en vivo mejora automáticamente la vida nocturna de una ciudad?","Does live music automatically improve a city's nightlife?"],
    ["Diseñá un día musical en Nashville desde el desayuno hasta el último concierto.","Design a musical day in Nashville from breakfast to the final concert."],
  ),
  texas:q(
    ["Texas es enorme. ¿Tener mucho espacio da más libertad o crea más dependencia del auto?","Texas is enormous. Does having lots of space bring more freedom or create more dependence on cars?"],
    ["Austin tiene una imagen creativa y diferente. ¿Puede una ciudad representar a un estado tan grande?","Austin has a creative and distinctive image. Can one city represent such a large state?"],
    ["¿Por qué una comida como la barbacoa puede ser una parte importante de la identidad regional?","Why can a food such as barbecue be an important part of regional identity?"],
    ["¿Qué debería mejorar primero una ciudad que crece rápido: vivienda, transporte o espacios públicos?","What should a fast-growing city improve first: housing, transport or public spaces?"],
    ["¿Qué imagen de Texas te parece real y cuál parece un estereotipo?","Which image of Texas seems real to you and which seems like a stereotype?"],
    ["Tenés una semana en Texas: combiná una gran ciudad, un lugar natural y una experiencia local.","You have one week in Texas: combine a big city, a natural place and a local experience."],
  ),
  rocosas:q(
    ["¿Vivir cerca de las montañas cambia realmente la rutina o solamente la vista?","Does living near mountains really change your routine, or only the view?"],
    ["Cuando una ciudad atrae a muchas personas por la naturaleza, ¿qué problemas nuevos pueden aparecer?","When a city attracts many people because of nature, what new problems can appear?"],
    ["¿Qué te cuesta más en la montaña: la altura, el frío, el esfuerzo físico o la distancia?","What is hardest for you in the mountains: altitude, cold, physical effort or distance?"],
    ["¿Preferís unas vacaciones activas con caminatas o una cabaña para descansar?","Do you prefer an active holiday with hikes or a cabin for relaxing?"],
    ["¿Qué reglas deberían seguir los visitantes para cuidar las Montañas Rocosas?","What rules should visitors follow to protect the Rocky Mountains?"],
    ["Elegí una estación y prepará un día completo entre Denver y las Rocosas.","Choose a season and plan a full day between Denver and the Rockies."],
  ),
  "gran-canon":q(
    ["¿Visitar un paisaje famoso solamente para sacar una foto significa conocerlo?","Does visiting a famous landscape only to take a photo mean that you know it?"],
    ["¿Aceptarías reservar una hora de entrada si eso reduce la cantidad de visitantes?","Would you accept booking an entry time if it reduced visitor numbers?"],
    ["¿Preferís observar el Gran Cañón desde arriba o caminar para sentir su tamaño?","Would you rather observe the Grand Canyon from above or hike to feel its size?"],
    ["Además de la geología, ¿qué historias humanas debería conocer un visitante?","Besides geology, which human stories should a visitor learn about?"],
    ["¿El miedo a las alturas te impide disfrutar de algunos paisajes?","Does a fear of heights prevent you from enjoying some landscapes?"],
    ["Prepará una visita responsable desde el amanecer hasta el atardecer.","Plan a responsible visit from sunrise to sunset."],
  ),
  yellowstone:q(
    ["¿Por qué algunas personas se acercan demasiado a animales salvajes aunque conocen el peligro?","Why do some people get too close to wild animals even when they know the danger?"],
    ["¿Un parque nacional debería limitar visitantes durante los meses más populares?","Should a national park limit visitors during the most popular months?"],
    ["¿Qué te impresionaría más: un géiser, un bisonte o un paisaje sin edificios?","What would impress you more: a geyser, a bison or a landscape without buildings?"],
    ["¿Acampar ayuda a conectar con la naturaleza o te impide descansar?","Does camping help you connect with nature, or prevent you from resting?"],
    ["¿Sacar muchas fotos mejora un viaje o nos distrae de la experiencia?","Does taking many photos improve a trip, or distract us from the experience?"],
    ["Diseñá un día seguro en Yellowstone con tres reglas no negociables.","Design a safe day in Yellowstone with three non-negotiable rules."],
  ),
  california:q(
    ["California reúne océano, desiertos, ciudades y bosques. ¿Qué paisaje representa mejor al estado?","California includes ocean, deserts, cities and forests. Which landscape best represents the state?"],
    ["¿Una ruta famosa junto al mar beneficia a los pueblos locales o crea demasiado tránsito?","Does a famous coastal road benefit local towns or create too much traffic?"],
    ["¿Preferís pasar tres días en una gran ciudad o entre las secuoyas?","Would you rather spend three days in a big city or among the redwoods?"],
    ["¿Cómo cambia la personalidad de una ciudad cuando vive junto al océano Pacífico?","How does a city's personality change when it is beside the Pacific Ocean?"],
    ["¿La imagen de playas y surf muestra California de verdad o solo una parte?","Does the image of beaches and surfing show the real California, or only one part?"],
    ["Organizá cuatro días con ciudad, costa, bosque y una comida especial.","Plan four days with a city, coast, forest and a special meal."],
  ),
  seattle:q(
    ["Seattle es famosa por la lluvia. ¿El clima define demasiado la imagen de una ciudad?","Seattle is famous for rain. Does weather define a city's image too much?"],
    ["¿Cómo cambia una ciudad cuando grandes empresas tecnológicas atraen nuevos trabajadores?","How does a city change when large technology companies attract new workers?"],
    ["¿Los cafés son solamente negocios o también espacios importantes para una comunidad?","Are cafés only businesses, or also important community spaces?"],
    ["¿Usarías un ferry todos los días como parte del transporte público?","Would you use a ferry every day as part of public transport?"],
    ["¿Tener bosques y montañas cerca mejora la vida si trabajás muchas horas?","Does having forests and mountains nearby improve life if you work long hours?"],
    ["¿Vivirías en Seattle? Explicá una ventaja, un problema y una condición.","Would you live in Seattle? Explain one advantage, one problem and one condition."],
  ),
  alaska:q(
    ["¿Cómo cambia la vida cotidiana cuando una comunidad está muy lejos de una gran ciudad?","How does everyday life change when a community is very far from a big city?"],
    ["¿Podrías vivir en un lugar sin conexión por carretera? ¿Qué necesitarías?","Could you live in a place without a road connection? What would you need?"],
    ["¿Qué cambios puede ver una persona local cuando los glaciares se hacen más pequeños?","What changes can a local person see when glaciers become smaller?"],
    ["En verano hay días larguísimos. ¿Cómo afectaría eso tu sueño y tus actividades?","Summer days are extremely long. How would that affect your sleep and activities?"],
    ["¿El turismo de naturaleza ayuda a proteger Alaska o lleva demasiadas personas?","Does nature tourism help protect Alaska or bring too many people?"],
    ["Prepará cinco días con un glaciar, fauna, una comunidad local y mucho tiempo de viaje.","Plan five days with a glacier, wildlife, a local community and lots of travel time."],
  ),
  hawaii:q(
    ["¿Cuándo el turismo ayuda a una isla y cuándo empieza a ocupar demasiado espacio?","When does tourism help an island and when does it start taking up too much space?"],
    ["¿Qué debe hacer un visitante para respetar la cultura hawaiana y no tratarla como decoración?","What should a visitor do to respect Hawaiian culture and not treat it as decoration?"],
    ["¿Qué dificultades tiene la vida en una isla donde muchos productos llegan de lejos?","What difficulties come with living on an island where many products arrive from far away?"],
    ["¿Preferís conocer una playa, un volcán o una comunidad local? ¿Por qué?","Would you rather visit a beach, a volcano or a local community? Why?"],
    ["¿Por qué es importante conservar la lengua hawaiana y los nombres originales de los lugares?","Why is it important to preserve the Hawaiian language and original place names?"],
    ["Diseñá una visita de tres días que no gire solamente alrededor de la playa.","Design a three-day visit that does not revolve only around the beach."],
  ),
  ruta:q(
    ["¿Un viaje por carretera permite comprender mejor un país que viajar en avión?","Does a road trip let you understand a country better than flying?"],
    ["¿Qué ruta harías y qué tres paradas serían obligatorias?","Which route would you take and which three stops would be essential?"],
    ["¿La libertad del auto compensa el costo, el cansancio y la contaminación?","Does the freedom of a car compensate for the cost, tiredness and pollution?"],
    ["¿Preferís reservar todo antes o decidir cada parada durante el viaje?","Would you rather book everything in advance or decide each stop during the trip?"],
    ["¿Qué lugares pequeños descubrís cuando evitás las autopistas principales?","What small places do you discover when you avoid the main highways?"],
    ["Armá una playlist, elegí un compañero de viaje y resolvé dónde dormir.","Create a playlist, choose a travel companion and decide where to sleep."],
  ),
  comida:q(
    ["¿Existe una sola comida estadounidense o muchas cocinas regionales?","Is there one American cuisine or many regional cuisines?"],
    ["¿Cómo transforman los inmigrantes la comida de una ciudad con el paso del tiempo?","How do immigrants transform a city's food over time?"],
    ["¿Qué significa que un restaurante sea auténtico? ¿Quién puede decidirlo?","What does it mean for a restaurant to be authentic? Who can decide that?"],
    ["¿Qué plato de tu región cuenta una historia de migración o mezcla cultural?","Which dish from your region tells a story of migration or cultural mixture?"],
    ["¿Probar comida local ayuda realmente a conocer un lugar?","Does trying local food really help you understand a place?"],
    ["Creá una ruta con desayuno, comida callejera, cena y un postre de regiones diferentes.","Create a route with breakfast, street food, dinner and a dessert from different regions."],
  ),
  musica:q(
    ["¿Por qué algunos estilos musicales están tan conectados con una ciudad o región?","Why are some musical styles so closely connected to a city or region?"],
    ["Cuando una música se vuelve global, ¿se olvida fácilmente su lugar de origen?","When music becomes global, is its place of origin easily forgotten?"],
    ["¿Preferís una grabación perfecta o un concierto con errores y energía?","Do you prefer a perfect recording or a concert with mistakes and energy?"],
    ["¿Qué canción representa una etapa importante de tu vida?","Which song represents an important stage of your life?"],
    ["¿Los géneros musicales unen a las personas o también crean estereotipos?","Do musical genres unite people, or also create stereotypes?"],
    ["Diseñá una ruta musical por tres ciudades y explicá qué escucharías en cada una.","Design a musical route through three cities and explain what you would listen to in each one."],
  ),
  idiomas:q(
    ["¿Hablar varios idiomas cambia la identidad de una persona?","Does speaking several languages change a person's identity?"],
    ["¿Qué lugar tiene el español en la vida cotidiana de Estados Unidos?","What place does Spanish have in everyday life in the United States?"],
    ["¿Las escuelas deberían ofrecer más programas bilingües? ¿Por qué?","Should schools offer more bilingual programmes? Why?"],
    ["¿Por qué juzgamos la educación o personalidad de alguien por su acento?","Why do we judge someone's education or personality by their accent?"],
    ["¿Cómo puede una familia conservar su lengua original entre nuevas generaciones?","How can a family preserve its original language across new generations?"],
    ["Contá qué cambia en vos cuando hablás español en lugar de tu lengua materna.","Explain what changes in you when you speak Spanish instead of your first language."],
  ),
  deportes:q(
    ["¿Un equipo deportivo puede representar la identidad de una ciudad?","Can a sports team represent a city's identity?"],
    ["¿Qué diferencias imaginás entre los deportes universitarios y los profesionales?","What differences do you imagine between college and professional sports?"],
    ["¿Una ciudad debería usar dinero público para construir un estadio?","Should a city use public money to build a stadium?"],
    ["¿Qué hace que personas desconocidas se sientan parte de la misma comunidad durante un partido?","What makes strangers feel part of the same community during a game?"],
    ["Si no te interesan los deportes, ¿qué parte cultural de un día de partido puede gustarte?","If you are not interested in sports, what cultural part of game day might you enjoy?"],
    ["Prepará un día de partido con transporte, comida, tradición y celebración.","Plan a game day with transport, food, tradition and celebration."],
  ),
  "vida-cotidiana":q(
    ["¿Qué cambia en la vida cuando necesitás un auto para casi todas las actividades?","What changes in life when you need a car for almost every activity?"],
    ["¿Preferís ciudad, suburbio, pueblo o campo? Compará dos ventajas y dos problemas.","Do you prefer a city, suburb, small town or countryside? Compare two advantages and two problems."],
    ["¿Cuánto tiempo de viaje al trabajo aceptarías para tener una casa mejor?","How much commuting time would you accept to have a better home?"],
    ["¿Es más fácil conocer a los vecinos en una comunidad pequeña o en un barrio urbano?","Is it easier to know your neighbours in a small community or an urban neighbourhood?"],
    ["Estados Unidos es enorme. ¿Cómo influye la región en la rutina, la comida y la forma de hablar?","The United States is enormous. How does region influence routine, food and ways of speaking?"],
    ["Describí tu lugar ideal para vivir: ubicación, casa, transporte, comunidad y tiempo libre.","Describe your ideal place to live: location, home, transport, community and free time."],
  ),
};

const quick:Pair[]=[
  p("Lo que más me atrae es…","What attracts me most is…"),
  p("Yo elegiría… porque…","I would choose… because…"),
  p("No estoy seguro/a, pero creo que…","I am not sure, but I think…"),
];

export const stops:UsaStop[]=sourceStops.map(stop=>({
  ...stop,
  mission:stop.kind==="lugar"
    ?p("Compará este destino con tu experiencia y defendé una elección.","Compare this destination with your experience and defend a choice.")
    :p("Relacioná este tema con tu experiencia y explicá un contraste.","Connect this topic with your experience and explain a contrast."),
  quick,
  questions:questionsById[stop.id]??stop.questions,
}));

export const starters:Pair[]=[
  p("En mi opinión…","In my opinion…"),
  p("Si tuviera que elegir…","If I had to choose…"),
  p("Una diferencia importante es…","One important difference is…"),
  p("En mi experiencia…","In my experience…"),
  p("Por un lado…","On the one hand…"),
  p("La mejor opción sería…","The best option would be…"),
];

export const connectors:Pair[]=[
  p("porque","because"),
  p("además","in addition"),
  p("sin embargo","however"),
  p("por ejemplo","for example"),
  p("en cambio","whereas"),
  p("por eso","that is why"),
];

export const speakingMoves:Pair[]=[
  p("Agregá una experiencia personal.","Add a personal experience."),
  p("Comparalo con tu país o ciudad.","Compare it with your country or city."),
  p("Mencioná una ventaja y un problema.","Mention one advantage and one problem."),
  p("Proponé una solución concreta.","Suggest a specific solution."),
  p("Defendé la opción contraria.","Defend the opposite option."),
  p("Hacé una pregunta de seguimiento.","Ask a follow-up question."),
];
