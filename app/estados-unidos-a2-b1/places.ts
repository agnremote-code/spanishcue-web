import type {Pair} from "./state-data";

export type StatePlace={name:string;type:string;context:Pair;prompt:Pair;fallback:Pair;imageSearch:string};

const p=(es:string,en:string=""):Pair=>({es,en});
const stateNames:Record<string,string>={
  AL:"Alabama",AK:"Alaska",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",FL:"Florida",GA:"Georgia",
  HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",
  MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",
  NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",
  SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming",
};

const followUps:Pair[]=[
  p("¿Qué parte de esta realidad te parece más interesante y por qué?","Which part of this reality seems most interesting to you, and why?"),
  p("¿Qué ventaja y qué dificultad imaginás en un lugar así?","What advantage and what difficulty do you imagine in a place like this?"),
  p("¿Cómo pensás que esta característica influye en la identidad local?","How do you think this feature shapes local identity?"),
  p("¿Qué pregunta le harías a una persona que vive o trabaja allí?","What would you ask someone who lives or works there?"),
  p("¿Te gustaría vivir esta experiencia o solamente visitarla? Explicá.","Would you like to live this experience or only visit it? Explain."),
  p("¿Qué detalle cambia más la idea que tenías de este estado?","Which detail changes your idea of this state the most?"),
  p("¿Cómo compararías esta realidad con un lugar que conocés?","How would you compare this reality with a place you know?"),
  p("¿Qué debería comprender un visitante antes de llegar?","What should a visitor understand before arriving?"),
  p("¿Qué parte conservarías y qué parte cambiarías para el futuro?","Which part would you preserve and which part would you change for the future?"),
  p("¿Qué tipo de persona disfrutaría más este lugar?","What kind of person would enjoy this place the most?"),
  p("¿Esta característica mejora la vida local o también crea problemas?","Does this feature improve local life, or does it also create problems?"),
  p("¿Qué historia breve usarías para presentar este lugar a otra persona?","What short story would you use to introduce this place to someone else?"),
];

const fallbackQuestions:Record<string,Pair[]>={
  ciudad:[
    p("¿Qué hace que una ciudad sea inolvidable para vos: la gente, la arquitectura, la comida o su ritmo?","What makes a city unforgettable for you: its people, architecture, food or pace?"),
    p("¿Preferís una ciudad fácil y cómoda o una ciudad caótica pero llena de personalidad?","Do you prefer an easy, comfortable city or a chaotic city full of personality?"),
    p("Si pudieras mejorar una sola cosa de tu ciudad, ¿qué cambiarías primero?","If you could improve one thing in your city, what would you change first?"),
  ],
  naturaleza:[
    p("¿Preferís paisajes que te hacen sentir pequeño o lugares donde sentís que tenés el control?","Do you prefer landscapes that make you feel small or places where you feel in control?"),
    p("¿Qué regla debería respetar toda persona cuando visita un espacio natural?","Which rule should everyone respect when visiting a natural place?"),
    p("¿Qué te conecta más con la naturaleza: caminar, observar animales, acampar o estar en silencio?","What connects you most with nature: hiking, watching animals, camping or silence?"),
  ],
  historia:[
    p("Cuando viajás, ¿te interesa más un lugar hermoso o un lugar con una historia complicada?","When you travel, are you more interested in a beautiful place or a place with a complicated history?"),
    p("¿Cómo debería una ciudad recordar una parte dolorosa de su pasado?","How should a city remember a painful part of its past?"),
    p("¿Un museo puede cambiar de verdad nuestra opinión sobre un país?","Can a museum truly change our opinion about a country?"),
  ],
  cultura:[
    p("¿Qué tradición de tu región sorprendería más a una persona extranjera?","Which tradition from your region would surprise a foreign visitor most?"),
    p("¿Qué protege mejor una cultura local: la familia, la escuela, las fiestas o el idioma?","What protects local culture best: family, school, festivals or language?"),
    p("¿Cuándo una tradición sigue viva y cuándo se convierte en un espectáculo para turistas?","When is a tradition still alive, and when does it become a show for tourists?"),
  ],
  comida:[
    p("¿Puede un solo plato representar una región entera o es una simplificación?","Can one dish represent an entire region, or is that an oversimplification?"),
    p("¿Qué comida de tu infancia usarías para explicar de dónde venís?","Which childhood food would you use to explain where you come from?"),
    p("¿Conocés mejor un lugar cuando probás su comida local? ¿Por qué?","Do you understand a place better when you try its local food? Why?"),
  ],
  musica:[
    p("¿Qué canción o estilo musical te hace pensar inmediatamente en un lugar?","Which song or musical style immediately makes you think of a place?"),
    p("¿Preferís escuchar música en la calle, en un bar pequeño o en un estadio?","Would you rather hear music in the street, a small bar or a stadium?"),
    p("¿La música cuenta la historia de una comunidad mejor que un libro?","Can music tell a community's story better than a book?"),
  ],
  costa:[
    p("¿Elegirías una costa tranquila o una con viento fuerte y paisajes dramáticos?","Would you choose a calm coast or one with strong winds and dramatic scenery?"),
    p("¿Qué actividad te hace disfrutar más del mar sin necesidad de entrar al agua?","Which activity helps you enjoy the sea without having to enter the water?"),
    p("¿Vivir junto al mar compensa el turismo, las tormentas y los precios altos?","Does living by the sea compensate for tourism, storms and high prices?"),
  ],
  deporte:[
    p("¿Se puede disfrutar el ambiente de un evento deportivo sin entender el deporte?","Can you enjoy the atmosphere of a sports event without understanding the sport?"),
    p("¿Qué une más a una comunidad: un equipo deportivo, una fiesta o una causa común?","What unites a community more: a sports team, a festival or a shared cause?"),
    p("¿Preferís practicar un deporte o mirar una competencia importante?","Would you rather play a sport or watch an important competition?"),
  ],
  ciencia:[
    p("¿Qué te despierta más curiosidad: un laboratorio, un museo o un experimento real?","What makes you more curious: a laboratory, a museum or a real experiment?"),
    p("¿Qué descubrimiento científico te gustaría ver con tus propios ojos?","Which scientific discovery would you like to see with your own eyes?"),
    p("¿La ciencia se entiende mejor leyendo, mirando o haciendo algo práctico?","Is science best understood by reading, observing or doing something practical?"),
  ],
  ruta:[
    p("En un viaje por carretera, ¿es más importante el destino o el camino?","On a road trip, is the destination or the journey more important?"),
    p("¿Preferís planificar cada parada o decidir durante el viaje?","Would you rather plan every stop or decide during the journey?"),
    p("¿Con quién harías un viaje largo y qué regla sería indispensable?","Who would you take on a long trip, and which rule would be essential?"),
  ],
  evento:[
    p("¿Preferís un festival enorme y famoso o una celebración local pequeña?","Do you prefer a huge famous festival or a small local celebration?"),
    p("¿Qué necesita un evento para que quieras volver el año siguiente?","What does an event need to make you want to return the following year?"),
    p("¿Una multitud mejora la energía de una experiencia o la arruina?","Does a crowd improve an experience's energy or ruin it?"),
  ],
};

const seedFor=(code:string,index:number)=>code.charCodeAt(0)+code.charCodeAt(1)+index*7;
const buildPrompt=(name:string,detail:string,code:string,index:number):Pair=>{
  const follow=followUps[seedFor(code,index)%followUps.length];
  return p(`En ${name}, ${detail.charAt(0).toLowerCase()+detail.slice(1)} ${follow.es}`,`${name} is one of this state's distinctive stops. ${follow.en}`);
};
const buildFallback=(type:string,code:string,index:number):Pair=>{
  const bank=fallbackQuestions[type]??fallbackQuestions.cultura;
  return bank[seedFor(code,index)%bank.length];
};

const raw=`
AL|Birmingham~historia~La ciudad conecta industria, barrios renovados y lugares clave del movimiento por los derechos civiles.;Huntsville~ciencia~Cohetes, ingeniería y el U.S. Space & Rocket Center explican su identidad espacial.;Mobile~costa~Puerto, carnaval y arquitectura histórica crean una cultura distinta dentro del estado.;Muscle Shoals~musica~Pequeños estudios del río Tennessee grabaron canciones conocidas en todo el mundo.
AK|Anchorage~ciudad~La mayor ciudad del estado combina vida urbana con montañas y fauna muy cercanas.;Denali~naturaleza~La montaña más alta de Norteamérica domina un parque enorme y de acceso controlado.;Juneau~costa~La capital no está conectada por carretera con el resto del país y depende de barco o avión.;Kenai Fjords~naturaleza~Glaciares, fiordos y vida marina muestran cómo el hielo transforma la costa.
AZ|Gran Cañón~naturaleza~Capas de roca y un paisaje inmenso cambian con la luz durante todo el día.;Phoenix~ciudad~Una gran ciudad del desierto organiza su vida alrededor del calor, el agua y el aire acondicionado.;Sedona~naturaleza~Rocas rojas, senderos y turismo de bienestar atraen visitantes todo el año.;Tucson~comida~La ciudad mezcla cultura sonorense, desierto y una tradición gastronómica muy fuerte.
AR|Little Rock~historia~La capital reúne política estatal y lugares centrales de la historia de integración escolar.;Hot Springs~cultura~Baños termales históricos conviven con un parque nacional dentro de la ciudad.;Buffalo National River~naturaleza~Un río libre atraviesa acantilados, bosques y comunidades pequeñas.;Crater of Diamonds~naturaleza~Es uno de los pocos lugares donde visitantes pueden buscar diamantes y conservar lo que encuentran.
CA|Los Ángeles~cultura~Cine, migración, playas y barrios enormes muestran muchas versiones de California.;San Francisco~ciudad~Colinas, tranvías, tecnología y una bahía famosa conviven en poco espacio.;Yosemite~naturaleza~Paredes de granito, cascadas y bosques reciben millones de visitantes.;Costa de las secuoyas~naturaleza~Árboles gigantes y niebla del Pacífico crean un paisaje que parece de otra escala.
CO|Denver~ciudad~La capital creció como puerta urbana hacia las Montañas Rocosas.;Rocky Mountain National Park~naturaleza~Caminos altos, lagos y cambios rápidos de clima exigen preparación.;Aspen~cultura~Esquí, lujo, arte y trabajadores de temporada comparten un pueblo pequeño.;Mesa Verde~historia~Viviendas ancestrales construidas en acantilados muestran siglos de historia indígena.
CT|New Haven~cultura~Una ciudad universitaria reúne investigación, museos y barrios muy distintos.;Mystic Seaport~historia~Barcos y talleres conservan la relación histórica del estado con el mar.;Hartford~historia~La capital combina seguros, literatura y memoria política.;Litchfield Hills~naturaleza~Pueblos pequeños, bosques y caminos rurales ofrecen otra imagen de Connecticut.
DE|Wilmington~ciudad~Empresas, barrios históricos y el río Christina definen la mayor ciudad del pequeño estado.;Rehoboth Beach~costa~Un paseo marítimo clásico atrae familias y visitantes de la región.;Dover~historia~La capital permite hablar de gobierno estatal y de una historia colonial visible.;Brandywine Valley~cultura~Jardines, museos y antiguas propiedades industriales se extienden junto al río.
FL|Miami~ciudad~Español, migración caribeña, arte y vida nocturna forman una ciudad bilingüe.;Everglades~naturaleza~El agua se mueve lentamente por un humedal donde viven caimanes, aves y especies amenazadas.;Kennedy Space Center~ciencia~Desde esta costa salen misiones espaciales que se ven desde kilómetros.;Key West~costa~Una isla pequeña mezcla casas antiguas, turismo, pesca y una cultura muy propia.
GA|Atlanta~ciudad~Transporte, cine, música y derechos civiles explican el crecimiento de la capital.;Savannah~historia~Plazas arboladas y casas históricas hacen que caminar sea parte central de la experiencia.;Blue Ridge~naturaleza~Montañas, senderos y pequeños pueblos muestran el norte rural del estado.;Macon~musica~El soul y el rock sureño dejaron estudios, escenarios e historias muy visibles.
HI|Honolulu y Waikiki~ciudad~Una capital del Pacífico combina vida local, turismo internacional y playas urbanas.;Hawaiʻi Volcanoes~naturaleza~Lava, cráteres y bosques muestran una isla que todavía se está formando.;Road to Hana~ruta~Una carretera lenta conecta cascadas, selva y comunidades del este de Maui.;Costa Nā Pali~costa~Acantilados verdes y playas aisladas solo se ven por sendero, barco o aire.
ID|Boise~ciudad~La capital combina crecimiento tecnológico, río y acceso rápido a espacios abiertos.;Sawtooth Mountains~naturaleza~Lagos fríos y picos afilados atraen caminantes lejos de grandes ciudades.;Hells Canyon~naturaleza~Un cañón profundo marca la frontera y se explora por río y caminos remotos.;Snake River Plain~comida~Agricultura, papas y riego explican gran parte de la economía del sur del estado.
IL|Chicago~ciudad~Arquitectura, lago, trenes y barrios multiculturales dan ritmo a la ciudad.;Springfield~historia~La capital conserva lugares relacionados con Abraham Lincoln y el gobierno estatal.;Route 66 en Illinois~ruta~El inicio de la ruta conecta diners, carteles antiguos y pequeños pueblos.;Cahokia Mounds~historia~Grandes montículos recuerdan una ciudad indígena anterior a la colonización europea.
IN|Indianapolis 500~deporte~Una carrera transforma la ciudad y atrae público de muchos países.;Bloomington~cultura~Universidad, música y vida estudiantil crean una ciudad distinta dentro del estado.;Indiana Dunes~naturaleza~Dunas y playas muestran que el lago Michigan puede parecer un mar.;Gimnasios de básquet~deporte~En pueblos y escuelas, el básquet forma parte de la identidad cotidiana.
IA|Des Moines~ciudad~La capital mezcla gobierno, seguros, arte y una famosa feria estatal.;Field of Dreams~cultura~Un campo de béisbol entre maíz convirtió una película en destino real.;Amana Colonies~historia~Comunidades históricas conservan artesanías, comida y una organización colectiva particular.;Loess Hills~naturaleza~Colinas formadas por viento crean un paisaje raro junto al río Missouri.
KS|Wichita~ciencia~La industria aeronáutica dio a la ciudad una identidad ligada a fabricar aviones.;Tallgrass Prairie~naturaleza~Una de las últimas grandes praderas de pastos altos conserva bisontes y horizonte abierto.;Dodge City~historia~La ciudad usa su pasado de frontera y vaqueros para contar historias del oeste.;Kansas City barbecue~comida~Humo, salsas y competencia regional convierten la barbacoa en identidad.
KY|Kentucky Derby~deporte~Caballos, sombreros y tradición convierten una carrera breve en un gran evento.;Bourbon Trail~comida~Destilerías rurales conectan maíz, barricas y turismo.;Mammoth Cave~naturaleza~El sistema de cuevas más largo conocido abre un mundo bajo tierra.;Montañas del este~musica~Baladas, bluegrass y comunidades de los Apalaches conservan historias locales.
LA|Nueva Orleans~musica~Jazz, arquitectura criolla y celebraciones llenan las calles de una ciudad única.;Bayous~naturaleza~Canales lentos, cipreses y pequeñas comunidades forman el paisaje del sur.;Baton Rouge~ciudad~La capital combina política, universidad e industria sobre el Mississippi.;Acadiana~comida~Cocina cajún, francés local y música conectan familias y pueblos.
ME|Portland~comida~Un puerto pequeño reúne restaurantes, faros y barcos de pesca.;Acadia National Park~naturaleza~Montaña, bosque y océano se encuentran en la costa rocosa.;Costa de las langostas~comida~Pueblos pesqueros dependen de un producto que también atrae turistas.;Katahdin~naturaleza~La montaña más alta del estado marca el final del Appalachian Trail.
MD|Baltimore~ciudad~Puerto, barrios, arte y deportes muestran una ciudad con identidades fuertes.;Annapolis~historia~La capital estatal y la academia naval viven junto a una bahía llena de veleros.;Chesapeake Bay~costa~Cangrejos, navegación y contaminación conectan economía y ambiente.;Antietam~historia~El campo de batalla conserva memoria de uno de los días más violentos de la Guerra Civil.
MA|Boston~historia~Calles antiguas, universidades y barrios modernos conviven en una ciudad caminable.;Cambridge~ciencia~Dos universidades influyen en investigación, vivienda y vida cotidiana.;Cape Cod~costa~Playas, faros y casas de verano cambian mucho entre temporada alta y baja.;Berkshires~cultura~Montañas, museos y festivales ofrecen una versión rural y artística del estado.
MI|Detroit~cultura~Autos, Motown, diseño y recuperación urbana explican varias etapas de la ciudad.;Mackinac Island~historia~La isla limita los autos y mantiene transporte a caballo y bicicleta.;Sleeping Bear Dunes~naturaleza~Dunas enormes caen hacia el lago Michigan.;Upper Peninsula~naturaleza~Bosques, nieve, minas y grandes distancias crean una identidad propia.
MN|Minneapolis–Saint Paul~ciudad~Dos ciudades vecinas combinan lagos, arte, trabajo y transporte.;Boundary Waters~naturaleza~Miles de lagos se recorren en canoa con pocas señales de ciudad.;Mall of America~cultura~Compras, entretenimiento y turismo funcionan dentro de un edificio enorme.;Duluth~costa~Un puerto de agua dulce conecta barcos, industria y clima extremo.
MS|Delta del Mississippi~musica~Plantaciones, pueblos y caminos forman el paisaje donde creció el blues.;Natchez~historia~Casas históricas frente al río obligan a hablar también de esclavitud y desigualdad.;Jackson~ciudad~La capital reúne política, música y memoria del movimiento por los derechos civiles.;Gulf Coast~costa~Playas, casinos y huracanes marcan la vida de las ciudades costeras.
MO|Gateway Arch~historia~El gran arco de St. Louis representa expansión hacia el oeste y transformación del río.;Kansas City~musica~Jazz, barbecue y deportes dan a la ciudad una identidad compartida entre dos estados.;Ozarks~naturaleza~Lagos, cuevas y colinas atraen turismo rural y viviendas de vacaciones.;Hannibal~cultura~La ciudad usa la relación con Mark Twain para contar vida junto al Mississippi.
MT|Glacier National Park~naturaleza~Glaciares, lagos y carreteras de montaña cambian con el clima.;Bozeman~ciudad~Universidad, tecnología y acceso a la naturaleza hacen crecer rápidamente la ciudad.;Yellowstone norte~naturaleza~Pueblos pequeños reciben visitantes que entran al parque por Montana.;Blackfeet Country~cultura~Paisaje, soberanía y tradición muestran que la historia indígena continúa viva.
NE|Omaha~ciudad~Una ciudad sobre el Missouri conecta empresas, música y un gran zoológico.;Sandhills~naturaleza~Colinas de pasto y ranchos ocupan una región enorme y poco poblada.;Lincoln~ciudad~La capital combina universidad, gobierno y una fuerte cultura deportiva.;Chimney Rock~historia~Una formación rocosa guiaba a viajeros que cruzaban las Grandes Llanuras.
NV|Las Vegas~cultura~Casinos, espectáculos y trabajo nocturno sostienen una ciudad en pleno desierto.;Lake Tahoe~naturaleza~Un lago alpino compartido con California enfrenta presión turística y ambiental.;Valley of Fire~naturaleza~Rocas rojas y petroglifos aparecen cerca de una gran área urbana.;Extraterrestrial Highway~ruta~Carreteras vacías y relatos de ovnis convirtieron una zona remota en atracción.
NH|White Mountains~naturaleza~Picos, bosques y clima cambiante atraen caminantes en todas las estaciones.;Portsmouth~costa~Puerto, casas históricas y restaurantes forman una ciudad pequeña y caminable.;Lake Winnipesaukee~naturaleza~Islas, barcos y casas de verano transforman el lago en temporada alta.;Concord~historia~La capital permite explorar reuniones locales y la tradición política de New Hampshire.
NJ|Jersey Shore~costa~Paseos marítimos, playas y pueblos cambian por completo durante el verano.;Newark~ciudad~Transporte, arte y comunidades migrantes conectan la ciudad con toda la región de Nueva York.;Princeton~ciencia~Universidad, investigación y una pequeña ciudad histórica conviven en el centro del estado.;Pine Barrens~naturaleza~Bosques extensos, humedales y leyendas ocupan una región poco urbanizada.
NM|Santa Fe~cultura~Arquitectura de adobe, arte y culturas indígenas e hispanas marcan la capital.;Balloon Fiesta~evento~Cientos de globos llenan el cielo de Albuquerque durante un festival anual.;White Sands~naturaleza~Dunas blancas de yeso crean un paisaje brillante y cambiante.;Taos Pueblo~historia~Una comunidad indígena viva conserva edificios de adobe y soberanía cultural.
NY|Nueva York~ciudad~Cinco distritos, muchos idiomas y transporte público crean vidas muy diferentes.;Niagara Falls~naturaleza~Agua, energía y turismo se encuentran en una frontera internacional.;Adirondacks~naturaleza~Bosques, lagos y pueblos ocupan una enorme área protegida del norte.;Buffalo~cultura~Arquitectura, nieve, deportes y comida construyen una identidad diferente de la gran ciudad.
NC|Outer Banks~costa~Islas estrechas, faros y tormentas forman una costa que cambia constantemente.;Asheville~cultura~Arte, cerveza y montañas hacen de la ciudad un centro creativo de los Apalaches.;Research Triangle~ciencia~Universidades y empresas conectan Raleigh, Durham y Chapel Hill.;Charlotte~ciudad~Bancos, automovilismo y rápido crecimiento transformaron la ciudad.
ND|Theodore Roosevelt National Park~naturaleza~Badlands, bisontes y grandes cielos muestran el oeste del estado.;Fargo~ciudad~La mayor ciudad combina universidad, inviernos fuertes y cultura regional.;Bismarck~historia~La capital está junto al Missouri y cerca de importantes comunidades indígenas.;International Peace Garden~cultura~Un jardín en la frontera con Canadá representa cooperación entre países.
OH|Cleveland Rock Hall~musica~Un museo junto al lago conecta artistas, público e historia del rock.;Columbus~ciudad~La capital crece alrededor de universidad, gobierno y barrios diversos.;Cincinnati~cultura~Arquitectura, cerveza y tradiciones del río Ohio reflejan herencias migrantes.;Dayton~ciencia~La historia de la aviación conecta talleres locales con los hermanos Wright.
OK|Oklahoma City~ciudad~La capital combina energía, cultura cowboy y memoria de un atentado.;Tulsa~cultura~Art déco, música y la historia de Greenwood muestran riqueza y violencia racial.;Route 66 en Oklahoma~ruta~Diners, moteles y grandes carteles cruzan pequeños pueblos.;Chickasaw Country~cultura~Gobierno tribal, cultura y empresas muestran soberanía contemporánea.
OR|Portland~ciudad~Transporte, comida, bicicletas y barrios creativos construyen una imagen particular.;Columbia River Gorge~naturaleza~Cascadas y carreteras históricas siguen un gran corredor natural.;Crater Lake~naturaleza~Un lago muy profundo ocupa la caldera de un antiguo volcán.;Oregon Coast~costa~Playas públicas, faros y pueblos pesqueros recorren toda la costa.
PA|Philadelphia~historia~Independencia, barrios y comida callejera conviven en una gran ciudad histórica.;Pittsburgh~ciudad~Puentes, universidades y tecnología cambiaron una antigua ciudad industrial.;Pennsylvania Dutch Country~cultura~Granjas y comunidades amish viven cerca de un turismo intenso.;Gettysburg~historia~El campo de batalla obliga a conectar memoria nacional y experiencia local.
RI|Newport~historia~Mansiones, puerto y navegación muestran riqueza histórica junto al mar.;Providence~ciudad~Universidades, arte y comida transformaron una antigua ciudad industrial.;Block Island~costa~Una isla pequeña combina playas, bicicletas y presión turística.;Narragansett Bay~naturaleza~Puentes, veleros y ecosistemas conectan casi todo el estado.
SC|Charleston~historia~Arquitectura, puerto y cocina exigen hablar también de esclavitud y memoria.;Myrtle Beach~costa~Hoteles, golf y entretenimiento convierten la playa en una gran industria.;Greenville~ciudad~Un río y un parque urbano ayudaron a renovar el centro.;Congaree~naturaleza~Un bosque inundable protege algunos de los árboles más altos del este.
SD|Black Hills~cultura~Montañas sagradas, turismo y monumentos generan perspectivas muy diferentes.;Badlands~naturaleza~Rocas erosionadas, fósiles y pradera crean un paisaje dramático.;Sioux Falls~ciudad~Cascadas urbanas y rápido crecimiento definen la mayor ciudad del estado.;Sturgis Rally~evento~Miles de motociclistas transforman un pueblo durante unos días.
TN|Nashville~musica~Estudios, bares y escenarios hacen visible la industria de la música country.;Memphis~musica~Blues, soul, rock y derechos civiles se encuentran junto al Mississippi.;Great Smoky Mountains~naturaleza~Bosques con niebla y rutas muy visitadas cruzan la frontera estatal.;Chattanooga~ciudad~Río, industria y espacios públicos muestran una ciudad que cambió su imagen.
TX|Austin~musica~Música en vivo, universidad, tecnología y crecimiento conviven en la capital.;San Antonio~historia~Misiones, cultura tejana y un paseo junto al río atraen visitantes.;Houston~ciencia~Energía, diversidad y el centro espacial explican una metrópolis enorme.;Big Bend~naturaleza~Desierto, río y cielo nocturno ofrecen una imagen remota de Texas.
UT|Zion~naturaleza~Paredes de roca y un cañón estrecho reciben tantos visitantes que el transporte debe controlarse.;Salt Lake City~ciudad~La capital combina religión, montaña, trabajo y crecimiento urbano.;Arches~naturaleza~Miles de arcos de piedra muestran el efecto lento de erosión y clima.;Moab dinosaurios~historia~Huellas y fósiles conectan ciencia, turismo y paisaje desértico.
VT|Burlington~ciudad~Una ciudad pequeña combina universidad, mercado local y lago Champlain.;Green Mountains~naturaleza~Bosques, senderos y estaciones de esquí atraviesan el estado.;Granjas de maple~comida~La savia de los arces se convierte en producto, tradición y trabajo estacional.;Woodstock~cultura~Puentes cubiertos, casas antiguas y turismo muestran una imagen clásica de Nueva Inglaterra.
VA|Richmond~historia~La capital combina arte, río y una revisión pública de monumentos confederados.;Shenandoah~naturaleza~Una carretera alta y senderos siguen las montañas Blue Ridge.;Williamsburg~historia~Una ciudad histórica reconstruida transforma el pasado en experiencia educativa.;Virginia Beach~costa~Base naval, familias y turismo comparten una larga costa urbana.
WA|Seattle~ciudad~Ferries, café, tecnología y barrios miran hacia montañas y agua.;Olympic National Park~naturaleza~Playas, selva templada y montañas caben dentro de un solo parque.;San Juan Islands~costa~Ferries, orcas y comunidades pequeñas dependen del mar.;Mount Rainier~naturaleza~Un gran volcán visible desde ciudades cercanas concentra nieve, glaciares y riesgo.
WV|New River Gorge~naturaleza~Un puente enorme cruza un cañón usado para escalada y rafting.;Charleston~ciudad~La capital se extiende junto a ríos y montañas en un territorio estrecho.;Towns del carbón~historia~Museos y comunidades explican trabajo minero, sindicatos y cambios económicos.;Harpers Ferry~historia~Dos ríos, tres estados y una historia política se encuentran en un pueblo pequeño.
WI|Milwaukee~cultura~Cervecerías, lago, música y barrios inmigrantes explican la ciudad.;Madison~ciudad~La capital y la universidad ocupan un istmo entre dos lagos.;Lambeau Field~deporte~Un equipo de fútbol americano propiedad de la comunidad define Green Bay.;Door County~costa~Península, faros y pequeños pueblos atraen visitantes entre dos orillas.
WY|Yellowstone~naturaleza~Géiseres, bisontes y carreteras comparten el primer parque nacional del país.;Grand Teton~naturaleza~Montañas abruptas y lagos forman uno de los paisajes más reconocibles del oeste.;Cheyenne Frontier Days~evento~Rodeo, caballos y espectáculos convierten la capital en centro cowboy.;Devils Tower~cultura~Una formación rocosa sagrada para pueblos indígenas también atrae escaladores.
`;

const parsePlace=(entry:string,code:string,index:number):StatePlace=>{
  const [name,type,detail]=entry.split("~");
  return {
    name,type,context:p(detail),
    prompt:buildPrompt(name,detail,code,index),
    fallback:buildFallback(type,code,index),
    imageSearch:`${name} ${stateNames[code]??code} United States`,
  };
};

export const placesByCode:Record<string,StatePlace[]>=Object.fromEntries(
  raw.trim().split("\n").map(line=>{
    const [code,...entries]=line.split("|");
    return [code,entries.join("|").split(";").map((entry,index)=>parsePlace(entry,code,index))];
  })
);
