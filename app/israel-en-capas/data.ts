export type Pair = { es:string; en:string };
export type IsraelTopic = {
  id:string;
  number:string;
  name:string;
  nameEn:string;
  hebrew?:string;
  kind:"lugar"|"tema";
  region:string;
  color:string;
  x?:number;
  y?:number;
  kicker:Pair;
  fact:Pair;
  questionTheme:Pair;
  words:Pair[];
  questions:Pair[];
};

const p=(es:string,en:string):Pair=>({es,en});

export const topics:IsraelTopic[] = [
  {
    id:"jerusalen",number:"01",name:"Jerusalén",nameEn:"Jerusalem",hebrew:"יְרוּשָׁלַיִם",kind:"lugar",region:"Centro montañoso",color:"#d6a85f",x:59,y:46,
    kicker:p("Una ciudad, muchas memorias","One city, many memories"),
    fact:p("La ciudad reúne barrios vivos, mercados y lugares sagrados para judaísmo, cristianismo e islam.","The city brings together living neighbourhoods, markets and sites sacred to Judaism, Christianity and Islam."),
    questionTheme:p("Patrimonio, fe y vida cotidiana","Heritage, faith and everyday life"),
    words:[p("patrimonio","heritage"),p("lugar sagrado","sacred place"),p("convivencia","coexistence"),p("peregrino/a","pilgrim"),p("barrio","neighbourhood"),p("preservar","preserve"),p("memoria","memory"),p("respeto","respect")],
    questions:[
      p("Tres religiones consideran sagrados distintos lugares de Jerusalén. ¿Qué reglas ayudan a compartir una ciudad tan importante?","Three religions consider different places in Jerusalem sacred. What rules help people share such an important city?"),
      p("¿Una ciudad histórica debe conservarse exactamente como era o adaptarse a quienes viven allí hoy?","Should a historic city be preserved exactly as it was or adapt to the people who live there today?"),
      p("¿Cuándo el turismo protege el patrimonio y cuándo empieza a perjudicar la vida de los residentes?","When does tourism protect heritage and when does it begin to harm residents’ lives?"),
      p("¿Cómo contarías la historia de Jerusalén sin presentar una sola versión como la única posible?","How would you tell Jerusalem’s history without presenting one version as the only possible one?"),
      p("Los sonidos, aromas y rituales cambian según el barrio. ¿Qué elemento sensorial te ayuda más a recordar una ciudad?","Sounds, aromas and rituals change from one neighbourhood to another. Which sensory element helps you remember a city most?"),
      p("Compará una ciudad antigua con una ciudad diseñada recientemente. ¿Cuál permite una vida más humana?","Compare an ancient city with a recently planned city. Which one allows for a more human life?"),
      p("Tenés un solo día y no querés correr. Diseñá una ruta respetuosa por Jerusalén y justificá qué dejás afuera.","You have only one day and do not want to rush. Design a respectful route through Jerusalem and justify what you leave out."),
    ]
  },
  {
    id:"tel-aviv-jaffa",number:"02",name:"Tel Aviv–Jaffa",nameEn:"Tel Aviv–Jaffa",hebrew:"תֵּל אָבִיב–יָפוֹ",kind:"lugar",region:"Costa central",color:"#44b9cb",x:32,y:43,
    kicker:p("Ciudad blanca, puerto antiguo","White City, ancient port"),
    fact:p("Tel Aviv es conocida por su arquitectura moderna y su costa; Jaffa aporta un puerto y una historia mucho más antiguos.","Tel Aviv is known for modern architecture and its coast; Jaffa brings a much older port and history."),
    questionTheme:p("Modernidad, vivienda y espacio público","Modernity, housing and public space"),
    words:[p("arquitectura moderna","modern architecture"),p("paseo marítimo","seafront promenade"),p("vida nocturna","nightlife"),p("espacio público","public space"),p("alquiler","rent"),p("peatonal","pedestrian"),p("ritmo urbano","urban rhythm"),p("contraste","contrast")],
    questions:[
      p("La Ciudad Blanca adaptó ideas europeas al clima local. ¿Cuándo una influencia extranjera se convierte en identidad propia?","The White City adapted European ideas to the local climate. When does a foreign influence become part of a local identity?"),
      p("Tel Aviv tiene fama de ciudad que nunca se detiene. ¿Ese ritmo produce libertad, estrés o las dos cosas?","Tel Aviv is famous as a city that never stops. Does that rhythm create freedom, stress or both?"),
      p("¿La playa puede funcionar como un espacio realmente democrático donde se mezclan personas diferentes?","Can a beach work as a truly democratic space where different people mix?"),
      p("¿Cómo puede Jaffa conservar su historia sin quedar congelada como una decoración para turistas?","How can Jaffa preserve its history without becoming frozen as decoration for tourists?"),
      p("La vida nocturna genera trabajo y cultura, pero también ruido. ¿Qué acuerdo sería justo para visitantes y residentes?","Nightlife creates jobs and culture, but also noise. What agreement would be fair for visitors and residents?"),
      p("Cuando una ciudad se vuelve muy cara, ¿qué parte de su identidad corre peligro de desaparecer primero?","When a city becomes very expensive, which part of its identity is at risk of disappearing first?"),
      p("Imaginá un fin de semana sin autos en el centro. ¿Quién gana, quién pierde y qué habría que organizar?","Imagine a car-free weekend in the centre. Who benefits, who loses and what would need to be organised?"),
    ]
  },
  {
    id:"haifa",number:"03",name:"Haifa",nameEn:"Haifa",hebrew:"חֵיפָה",kind:"lugar",region:"Monte Carmelo",color:"#65b67a",x:35,y:24,
    kicker:p("Jardines, puerto y montaña","Gardens, port and mountain"),
    fact:p("Haifa sube desde un gran puerto mediterráneo por las laderas del Carmelo y alberga lugares sagrados bahá’ís.","Haifa rises from a major Mediterranean port along the Carmel slopes and is home to Bahá’í holy places."),
    questionTheme:p("Diversidad, belleza y ciudad vertical","Diversity, beauty and a vertical city"),
    words:[p("ladera","slope"),p("puerto","port"),p("jardín en terrazas","terraced garden"),p("peregrinación","pilgrimage"),p("diversidad","diversity"),p("mirador","viewpoint"),p("transporte público","public transport"),p("armonía","harmony")],
    questions:[
      p("Los jardines bahá’ís son un lugar espiritual y también una gran atracción visual. ¿Cómo se visita un sitio religioso sin convertirlo en un simple fondo para fotos?","The Bahá’í Gardens are a spiritual place and also a major visual attraction. How can people visit a religious site without turning it into a simple photo background?"),
      p("Haifa está construida sobre una montaña. ¿Cómo cambia la vida diaria cuando caminar siempre significa subir o bajar?","Haifa is built on a mountain. How does daily life change when walking always means going up or down?"),
      p("Un puerto conecta una ciudad con el mundo, pero también ocupa mucho espacio. ¿Qué debería recibir la comunidad a cambio?","A port connects a city with the world, but also takes up a lot of space. What should the community receive in return?"),
      p("Haifa suele presentarse como una ciudad diversa. ¿Qué acciones cotidianas demuestran convivencia mejor que un eslogan?","Haifa is often presented as a diverse city. Which everyday actions demonstrate coexistence better than a slogan?"),
      p("¿Los jardines públicos pueden crear calma y contacto entre personas que normalmente no se encuentran?","Can public gardens create calm and contact between people who do not usually meet?"),
      p("Para conocer una ciudad con desniveles, ¿preferís caminar, usar transporte público o mirar desde arriba? Defendé tu elección.","To explore a city with steep slopes, do you prefer walking, public transport or viewing it from above? Defend your choice."),
      p("Creá una campaña para Haifa que muestre su diversidad sin reducirla a una imagen perfecta e irreal.","Create a campaign for Haifa that shows its diversity without reducing it to a perfect, unrealistic image."),
    ]
  },
  {
    id:"akko",number:"04",name:"Akko · Acre",nameEn:"Akko · Acre",hebrew:"עַכּוֹ",kind:"lugar",region:"Costa norte",color:"#e89058",x:29,y:16,
    kicker:p("Murallas, mercado y ciudad viva","Walls, market and living city"),
    fact:p("La ciudad antigua conserva murallas, espacios subterráneos, un puerto y barrios donde el patrimonio sigue siendo vida cotidiana.","The old city preserves walls, underground spaces, a port and neighbourhoods where heritage remains part of everyday life."),
    questionTheme:p("Restauración, autenticidad y residentes","Restoration, authenticity and residents"),
    words:[p("muralla","city wall"),p("restauración","restoration"),p("mercado","market"),p("ciudad portuaria","port city"),p("autenticidad","authenticity"),p("residente","resident"),p("ruina","ruin"),p("comercio local","local trade")],
    questions:[
      p("Akko es patrimonio histórico, pero también es una ciudad habitada. ¿Qué necesidades deberían tener prioridad cuando hay conflicto?","Akko is historic heritage, but it is also an inhabited city. Which needs should have priority when there is a conflict?"),
      p("¿Un mercado sigue siendo auténtico si la mayoría de sus clientes son turistas?","Does a market remain authentic if most of its customers are tourists?"),
      p("La restauración puede mejorar edificios y aumentar alquileres. ¿Cómo evitar que los residentes originales tengan que irse?","Restoration can improve buildings and increase rents. How can original residents be protected from having to leave?"),
      p("Akko conserva capas cruzadas, otomanas, árabes y modernas. ¿Cómo debería un museo presentar historias que compiten entre sí?","Akko preserves Crusader, Ottoman, Arab and modern layers. How should a museum present histories that compete with one another?"),
      p("¿La comida callejera ayuda a comprender una ciudad o solamente ofrece una experiencia rápida?","Does street food help people understand a city or only offer a quick experience?"),
      p("Elegí una parte de una ciudad antigua que jamás modernizarías y otra que sí. Explicá el límite.","Choose one part of an old city you would never modernise and another you would. Explain the boundary."),
      p("Proponé una mejora para Akko que beneficie al mismo tiempo al patrimonio, a los comerciantes y a los vecinos.","Propose one improvement for Akko that benefits heritage, shopkeepers and residents at the same time."),
    ]
  },
  {
    id:"galilea",number:"05",name:"Galilea",nameEn:"Galilee",hebrew:"הַגָּלִיל",kind:"lugar",region:"Norte verde",color:"#84b955",x:53,y:13,
    kicker:p("Lagos, colinas y aves migratorias","Lakes, hills and migratory birds"),
    fact:p("El norte reúne el lago Kineret, colinas, pueblos diversos y el valle de Hula, una ruta importante para aves migratorias.","The north brings together Lake Kinneret, hills, diverse towns and the Hula Valley, an important route for migratory birds."),
    questionTheme:p("Naturaleza, comunidades y turismo lento","Nature, communities and slow tourism"),
    words:[p("ave migratoria","migratory bird"),p("humedal","wetland"),p("lago","lake"),p("pueblo rural","rural town"),p("ruta de senderismo","hiking route"),p("turismo lento","slow tourism"),p("agricultura","agriculture"),p("ecosistema","ecosystem")],
    questions:[
      p("Las aves cruzan países sin reconocer fronteras. ¿Qué puede enseñar la migración animal sobre la cooperación humana?","Birds cross countries without recognising borders. What can animal migration teach us about human cooperation?"),
      p("¿El turismo lento protege mejor una región rural o simplemente atrae a otro tipo de consumidor?","Does slow tourism protect a rural region better, or does it simply attract a different type of consumer?"),
      p("Un lago sirve para beber, cultivar, descansar y mantener ecosistemas. ¿Cómo decidirías el orden de prioridades?","A lake provides drinking water, farming, recreation and ecosystems. How would you decide the order of priorities?"),
      p("¿Qué gana y qué pierde una persona cuando deja una gran ciudad para vivir en un pueblo pequeño?","What does a person gain and lose when leaving a big city to live in a small town?"),
      p("La Galilea reúne comunidades con religiones y lenguas diferentes. ¿Qué espacios pueden facilitar encuentros naturales?","Galilee brings together communities with different religions and languages. Which spaces can facilitate natural encounters?"),
      p("¿Preferís recorrer una región en auto, en transporte público o a pie? Compará libertad, impacto y contacto humano.","Would you rather explore a region by car, public transport or on foot? Compare freedom, impact and human contact."),
      p("Diseñá una experiencia de dos días que genere ingresos sin llenar la zona de hoteles y vehículos.","Design a two-day experience that generates income without filling the area with hotels and vehicles."),
    ]
  },
  {
    id:"caesarea",number:"06",name:"Cesarea",nameEn:"Caesarea",hebrew:"קֵיסָרְיָה",kind:"lugar",region:"Costa mediterránea",color:"#63a7bf",x:31,y:33,
    kicker:p("Ruinas romanas frente al mar","Roman ruins beside the sea"),
    fact:p("Cesarea conserva restos de una ciudad portuaria construida en la Antigüedad junto al Mediterráneo.","Caesarea preserves remains of an ancient port city built beside the Mediterranean."),
    questionTheme:p("Arqueología, reconstrucción y acceso","Archaeology, reconstruction and access"),
    words:[p("arqueología","archaeology"),p("anfiteatro","amphitheatre"),p("acueducto","aqueduct"),p("reconstruir","reconstruct"),p("excavación","excavation"),p("acceso público","public access"),p("costa","coast"),p("interpretar","interpret")],
    questions:[
      p("¿Es mejor dejar una ruina como está o reconstruir partes para que el público la entienda?","Is it better to leave a ruin as it is or reconstruct parts so the public can understand it?"),
      p("¿Quién debería pagar la conservación de un sitio arqueológico: el Estado, los visitantes o empresas privadas?","Who should pay to preserve an archaeological site: the state, visitors or private companies?"),
      p("Organizar conciertos en un anfiteatro antiguo puede darle vida, pero también dañarlo. ¿Qué condiciones pondrías?","Holding concerts in an ancient amphitheatre can bring it to life, but also damage it. What conditions would you set?"),
      p("¿La tecnología de realidad aumentada mejora una visita histórica o distrae de los restos reales?","Does augmented reality improve a historical visit or distract from the real remains?"),
      p("Cuando la arqueología ocupa una zona costera, ¿cómo se equilibra el patrimonio con el acceso público al mar?","When archaeology occupies a coastal area, how can heritage be balanced with public access to the sea?"),
      p("¿Qué objeto cotidiano actual sería útil para explicar nuestra sociedad dentro de dos mil años?","Which everyday object from today would be useful to explain our society two thousand years from now?"),
      p("Prepará una visita para alguien que dice que la historia le aburre. ¿Cómo despertarías su curiosidad?","Prepare a visit for someone who says history is boring. How would you awaken their curiosity?"),
    ]
  },
  {
    id:"mar-muerto-masada",number:"07",name:"Mar Muerto · Masada",nameEn:"Dead Sea · Masada",hebrew:"יָם הַמֶּלַח · מְצָדָה",kind:"lugar",region:"Desierto de Judea",color:"#b79365",x:68,y:56,
    kicker:p("Agua mineral y fortaleza en el desierto","Mineral water and a desert fortress"),
    fact:p("El Mar Muerto es un lago hipersalino en retroceso; Masada es una fortaleza arqueológica elevada sobre el paisaje desértico.","The Dead Sea is a shrinking hypersaline lake; Masada is an archaeological fortress high above the desert landscape."),
    questionTheme:p("Memoria, ambiente y turismo extremo","Memory, environment and extreme tourism"),
    words:[p("salinidad","salinity"),p("nivel del agua","water level"),p("fortaleza","fortress"),p("paisaje frágil","fragile landscape"),p("erosión","erosion"),p("turismo responsable","responsible tourism"),p("memoria histórica","historical memory"),p("calor extremo","extreme heat")],
    questions:[
      p("El Mar Muerto se promociona como spa natural, pero su nivel baja. ¿Puede el turismo ayudar realmente a protegerlo?","The Dead Sea is promoted as a natural spa, but its level is falling. Can tourism truly help protect it?"),
      p("Cuando un problema ambiental tiene causas compartidas, ¿cómo se distribuye la responsabilidad entre gobiernos, empresas y ciudadanos?","When an environmental problem has shared causes, how should responsibility be distributed among governments, companies and citizens?"),
      p("Masada combina arqueología, paisaje y memoria nacional. ¿Cómo evitar que un lugar histórico se convierta en una historia demasiado simple?","Masada combines archaeology, landscape and national memory. How can a historic place avoid becoming an overly simple story?"),
      p("¿Los productos cosméticos basados en recursos naturales deberían pagar una contribución especial para restaurar el ambiente?","Should cosmetic products based on natural resources pay a special contribution to restore the environment?"),
      p("El calor extremo cambia horarios y riesgos. ¿Qué obligaciones tiene un destino turístico con visitantes poco preparados?","Extreme heat changes schedules and risks. What obligations does a tourist destination have towards unprepared visitors?"),
      p("¿Un sitio de memoria debe inspirar orgullo, advertir sobre el pasado o permitir interpretaciones diferentes?","Should a site of memory inspire pride, warn about the past or allow different interpretations?"),
      p("Organizá un día responsable en esta región: transporte, agua, horarios y una actividad que evitarías.","Plan a responsible day in this region: transport, water, schedule and one activity you would avoid."),
    ]
  },
  {
    id:"negev",number:"08",name:"Néguev · Makhtesh Ramon",nameEn:"Negev · Makhtesh Ramon",hebrew:"הַנֶּגֶב · מַכְתֵּשׁ רָמוֹן",kind:"lugar",region:"Sur desértico",color:"#db7950",x:52,y:74,
    kicker:p("Desierto, conocimiento y silencio","Desert, knowledge and silence"),
    fact:p("El Néguev ocupa gran parte del sur; Makhtesh Ramon es una enorme formación de erosión, no un cráter volcánico.","The Negev covers much of the south; Makhtesh Ramon is a huge erosion formation, not a volcanic crater."),
    questionTheme:p("Escasez, cultura beduina y futuro","Scarcity, Bedouin culture and the future"),
    words:[p("desierto","desert"),p("escasez","scarcity"),p("comunidad beduina","Bedouin community"),p("conocimiento local","local knowledge"),p("energía solar","solar energy"),p("cielo nocturno","night sky"),p("erosión","erosion"),p("adaptarse","adapt")],
    questions:[
      p("Mucha gente imagina el desierto como un espacio vacío. ¿Qué formas de vida y conocimiento desaparecen con esa idea?","Many people imagine the desert as an empty space. Which forms of life and knowledge disappear with that idea?"),
      p("¿Cómo puede el turismo incorporar conocimiento beduino sin convertir una cultura viva en espectáculo?","How can tourism include Bedouin knowledge without turning a living culture into a performance?"),
      p("En un lugar con poca agua, ¿qué hábitos deberían considerarse obligatorios y no solamente voluntarios?","In a place with little water, which habits should be considered compulsory rather than merely voluntary?"),
      p("La energía solar necesita mucho espacio. ¿El desierto es el lugar ideal o también hay ecosistemas que proteger?","Solar energy needs a lot of space. Is the desert the ideal place, or are there ecosystems to protect there too?"),
      p("¿Por qué el silencio y un cielo oscuro se están convirtiendo en recursos turísticos valiosos?","Why are silence and a dark sky becoming valuable tourism resources?"),
      p("Compará vivir en el desierto con vivir en una ciudad costera. ¿Qué capacidad humana se desarrolla más en cada lugar?","Compare living in the desert with living in a coastal city. Which human ability develops more in each place?"),
      p("Diseñá un pequeño centro en Makhtesh Ramon: elegí entre ciencia, turismo o vida comunitaria y defendé la prioridad.","Design a small centre at Makhtesh Ramon: choose science, tourism or community life and defend the priority."),
    ]
  },
  {
    id:"eilat",number:"09",name:"Eilat · Mar Rojo",nameEn:"Eilat · Red Sea",hebrew:"אֵילַת",kind:"lugar",region:"Extremo sur",color:"#ec6258",x:58,y:94,
    kicker:p("Corales entre desierto y mar","Corals between desert and sea"),
    fact:p("Eilat se encuentra en el golfo de Aqaba, donde arrecifes de coral conviven con una ciudad turística de clima desértico.","Eilat lies on the Gulf of Aqaba, where coral reefs coexist with a tourist city in a desert climate."),
    questionTheme:p("Turismo, fronteras marinas y conservación","Tourism, marine borders and conservation"),
    words:[p("arrecife de coral","coral reef"),p("biodiversidad","biodiversity"),p("buceo","diving"),p("protección marina","marine protection"),p("turismo masivo","mass tourism"),p("golfo","gulf"),p("temperatura","temperature"),p("cooperación regional","regional cooperation")],
    questions:[
      p("Si demasiados visitantes dañan un arrecife, ¿limitarías el acceso aunque la ciudad dependa del turismo?","If too many visitors damage a reef, would you limit access even if the city depends on tourism?"),
      p("¿Qué es más efectivo: prohibir ciertas actividades o enseñar a realizarlas de manera responsable?","What is more effective: banning certain activities or teaching people to do them responsibly?"),
      p("El Mar Rojo conecta varios países. ¿Qué problemas ambientales solamente pueden resolverse con cooperación regional?","The Red Sea connects several countries. Which environmental problems can only be solved through regional cooperation?"),
      p("¿Una ciudad con sol casi todo el año atrae libertad o termina creando una identidad demasiado dependiente del turismo?","Does a city with sunshine almost all year attract freedom, or does it create an identity too dependent on tourism?"),
      p("Hoteles, vuelos y excursiones crean empleo. ¿Qué porcentaje de sus ganancias debería volver a la conservación?","Hotels, flights and excursions create jobs. What percentage of their profits should return to conservation?"),
      p("¿Preferís observar vida marina desde la superficie o bucear? Compará impacto, emoción y accesibilidad.","Would you rather observe marine life from the surface or dive? Compare impact, emotion and accessibility."),
      p("Creá un código de siete reglas para una visita al coral que un turista realmente quiera seguir.","Create a seven-rule code for a coral visit that a tourist would actually want to follow."),
    ]
  },
  {
    id:"kibutz",number:"10",name:"Vida en un kibutz",nameEn:"Life on a kibbutz",hebrew:"קִבּוּץ",kind:"tema",region:"Lente social",color:"#6fb36a",
    kicker:p("Comunidad, trabajo y privacidad","Community, work and privacy"),
    fact:p("Los kibutzim nacieron como comunidades colectivas; muchos cambiaron su economía y su organización con el tiempo.","Kibbutzim began as collective communities; many have changed their economy and organisation over time."),
    questionTheme:p("Cooperación, igualdad y cambio","Cooperation, equality and change"),
    words:[p("propiedad colectiva","collective ownership"),p("comunidad","community"),p("vida privada","private life"),p("toma de decisiones","decision-making"),p("cooperación","cooperation"),p("igualdad","equality"),p("agricultura","agriculture"),p("privatización","privatisation")],
    questions:[
      p("¿Qué estarías dispuesto a compartir con una comunidad: herramientas, comida, ingresos o decisiones?","What would you be willing to share with a community: tools, food, income or decisions?"),
      p("¿La igualdad económica aumenta la libertad o puede limitar decisiones personales?","Does economic equality increase freedom or can it limit personal decisions?"),
      p("Muchos kibutzim cambiaron con el tiempo. ¿Adaptarse significa abandonar un ideal o mantenerlo vivo?","Many kibbutzim changed over time. Does adapting mean abandoning an ideal or keeping it alive?"),
      p("¿Tomar decisiones entre todos produce mejores resultados o solamente procesos más lentos?","Does making decisions together produce better results or only slower processes?"),
      p("¿Por qué una persona joven elegiría hoy una comunidad pequeña en vez de una gran ciudad?","Why might a young person choose a small community over a big city today?"),
      p("¿Qué tarea comunitaria debería realizar todo el mundo, incluso quien tiene mucho dinero?","Which community task should everyone do, even someone with a lot of money?"),
      p("Inventá un kibutz para 2035: definí tres cosas compartidas, tres privadas y una regla para resolver conflictos.","Invent a kibbutz for 2035: define three shared things, three private things and one rule for resolving conflicts."),
    ]
  },
  {
    id:"idiomas",number:"11",name:"Idiomas y migraciones",nameEn:"Languages and migrations",hebrew:"שָׂפוֹת",kind:"tema",region:"Lente cultural",color:"#7e86c9",
    kicker:p("Hebreo, árabe y muchas voces","Hebrew, Arabic and many voices"),
    fact:p("La vida lingüística incluye hebreo, árabe y numerosas lenguas de comunidades inmigrantes, además del inglés.","Linguistic life includes Hebrew, Arabic and numerous immigrant community languages, as well as English."),
    questionTheme:p("Identidad, acceso y pertenencia","Identity, access and belonging"),
    words:[p("revitalización lingüística","language revival"),p("lengua materna","mother tongue"),p("señal bilingüe","bilingual sign"),p("acento","accent"),p("integración","integration"),p("pertenencia","belonging"),p("traducción","translation"),p("espacio público","public space")],
    questions:[
      p("El hebreo pasó de ser principalmente una lengua religiosa a una lengua cotidiana moderna. ¿Qué necesita una lengua para volver a vivir?","Hebrew changed from being mainly a religious language into a modern everyday language. What does a language need in order to live again?"),
      p("¿Qué mensaje transmite una ciudad cuando sus carteles públicos aparecen en varias lenguas?","What message does a city send when its public signs appear in several languages?"),
      p("¿Aprender la lengua mayoritaria debe ser una obligación para integrarse o un derecho acompañado de apoyo?","Should learning the majority language be an obligation for integration or a right accompanied by support?"),
      p("¿Un acento muestra falta de dominio o una historia personal? ¿Por qué algunas sociedades lo juzgan tanto?","Does an accent show lack of proficiency or a personal history? Why do some societies judge it so strongly?"),
      p("Familias migrantes pueden perder su lengua en dos generaciones. ¿Quién debería ayudar a conservarla?","Migrant families can lose their language within two generations. Who should help preserve it?"),
      p("¿Una escuela multilingüe prepara mejor para la convivencia o complica el aprendizaje?","Does a multilingual school prepare students better for coexistence or complicate learning?"),
      p("Diseñá un barrio lingüísticamente inclusivo: elegí qué aparece en señales, escuelas, hospitales y aplicaciones.","Design a linguistically inclusive neighbourhood: choose what appears on signs, in schools, hospitals and apps."),
    ]
  },
  {
    id:"mercados-comida",number:"12",name:"Mercados y comida",nameEn:"Markets and food",hebrew:"שְׁוָקִים וְאֹכֶל",kind:"tema",region:"Lente cotidiano",color:"#d85f5b",
    kicker:p("Recetas que cuentan migraciones","Recipes that tell migration stories"),
    fact:p("Los mercados y cocinas locales mezclan tradiciones judías de diáspora, palestinas, árabes, mediterráneas y de comunidades inmigrantes.","Local markets and kitchens mix Jewish diaspora, Palestinian, Arab, Mediterranean and immigrant community traditions."),
    questionTheme:p("Origen, mezcla cultural y mesa compartida","Origins, cultural exchange and a shared table"),
    words:[p("receta familiar","family recipe"),p("influencia cultural","cultural influence"),p("apropiación","appropriation"),p("mercado callejero","street market"),p("comida compartida","shared food"),p("origen","origin"),p("diáspora","diaspora"),p("identidad culinaria","culinary identity")],
    questions:[
      p("Hummus, falafel y otros platos se comen en toda la región. ¿Por qué discutir su origen puede volverse una cuestión de identidad?","Hummus, falafel and other dishes are eaten across the region. Why can discussing their origin become a question of identity?"),
      p("¿Cuál es la diferencia entre compartir una tradición culinaria y apropiarse de ella sin reconocer su origen?","What is the difference between sharing a culinary tradition and appropriating it without recognising its origin?"),
      p("¿Un mercado tradicional ofrece una conexión más humana que un supermercado o también puede ser incómodo y poco práctico?","Does a traditional market offer a more human connection than a supermarket, or can it also be uncomfortable and impractical?"),
      p("Las recetas cambian cuando una familia migra. ¿Una versión nueva sigue siendo auténtica?","Recipes change when a family migrates. Is a new version still authentic?"),
      p("¿La comida puede crear diálogo entre comunidades incluso cuando existen conflictos políticos?","Can food create dialogue between communities even when political conflicts exist?"),
      p("Diseñá un menú que reconozca claramente sus influencias sin presentar toda la cocina como una sola tradición.","Design a menu that clearly acknowledges its influences without presenting all food as a single tradition."),
      p("Organizá una mesa para personas con costumbres religiosas, culturales y alimentarias diferentes. ¿Qué servís y qué preguntás antes?","Organise a table for people with different religious, cultural and dietary practices. What do you serve and what do you ask beforehand?"),
    ]
  },
  {
    id:"shabat",number:"13",name:"Shabat y ritmos de vida",nameEn:"Shabbat and rhythms of life",hebrew:"שַׁבָּת",kind:"tema",region:"Lente temporal",color:"#477ab3",
    kicker:p("Una pausa semanal en una sociedad moderna","A weekly pause in a modern society"),
    fact:p("Desde el viernes al atardecer hasta el sábado, el shabat transforma ritmos familiares, religiosos, comerciales y de transporte de formas diversas.","From Friday sunset to Saturday, Shabbat changes family, religious, commercial and transport rhythms in different ways."),
    questionTheme:p("Descanso, tradición y libertad personal","Rest, tradition and personal freedom"),
    words:[p("descanso semanal","weekly rest"),p("tradición","tradition"),p("transporte público","public transport"),p("negocio cerrado","closed business"),p("ritual familiar","family ritual"),p("libertad de elección","freedom of choice"),p("desconectarse","disconnect"),p("ritmo social","social rhythm")],
    questions:[
      p("¿Una sociedad necesita un día compartido de pausa o cada persona debería elegir su propio momento?","Does a society need a shared day of rest or should each person choose their own time?"),
      p("Cuando el transporte público se reduce por tradición, ¿cómo se equilibran identidad colectiva y libertad de movimiento?","When public transport is reduced because of tradition, how can collective identity and freedom of movement be balanced?"),
      p("¿Cerrar negocios un día protege a trabajadores y familias o limita innecesariamente a consumidores?","Does closing businesses for one day protect workers and families or unnecessarily limit consumers?"),
      p("Una práctica religiosa también puede tener valor para personas no religiosas. ¿Qué ejemplos conocés?","A religious practice can also have value for non-religious people. Which examples do you know?"),
      p("¿Una pausa sin celular debería ser una decisión individual, una regla familiar o una costumbre social?","Should a break without phones be an individual decision, a family rule or a social custom?"),
      p("Compará el shabat con el domingo, la siesta u otra pausa cultural. ¿Qué protege cada tradición?","Compare Shabbat with Sunday, siesta or another cultural pause. What does each tradition protect?"),
      p("Creá un ritual semanal de descanso para una persona moderna con poco tiempo. Explicá qué prohíbe y qué hace posible.","Create a weekly rest ritual for a modern person with little time. Explain what it forbids and what it makes possible."),
    ]
  },
  {
    id:"agua-innovacion",number:"14",name:"Agua e innovación",nameEn:"Water and innovation",hebrew:"מַיִם וְחַדְשָׁנוּת",kind:"tema",region:"Lente de futuro",color:"#2faeaa",
    kicker:p("Tecnología para vivir con escasez","Technology for living with scarcity"),
    fact:p("La desalinización, la reutilización de agua y el riego por goteo forman parte del debate sobre cómo vivir en un territorio seco.","Desalination, water reuse and drip irrigation are part of the debate over how to live in a dry territory."),
    questionTheme:p("Soluciones técnicas y decisiones sociales","Technical solutions and social decisions"),
    words:[p("desalinización","desalination"),p("riego por goteo","drip irrigation"),p("reutilizar","reuse"),p("consumo doméstico","household consumption"),p("costo energético","energy cost"),p("acceso justo","fair access"),p("empresa emergente","start-up"),p("solución sostenible","sustainable solution")],
    questions:[
      p("¿La tecnología puede resolver la escasez de agua sin cambiar nuestros hábitos de consumo?","Can technology solve water scarcity without changing our consumption habits?"),
      p("La desalinización produce agua, pero necesita energía. ¿Cómo se decide si el beneficio justifica el costo?","Desalination produces water, but requires energy. How do we decide whether the benefit justifies the cost?"),
      p("¿Cobrar más por un consumo excesivo de agua es una medida justa o castiga a familias numerosas?","Is charging more for excessive water use fair, or does it punish large families?"),
      p("En una sequía, ¿qué debería recibir prioridad: hogares, agricultura, industria o naturaleza?","During a drought, what should receive priority: households, agriculture, industry or nature?"),
      p("¿Un país que desarrolla una tecnología esencial tiene responsabilidad de compartirla a un precio accesible?","Does a country that develops an essential technology have a responsibility to share it at an affordable price?"),
      p("La cultura de las start-ups valora la velocidad y el riesgo. ¿Qué problemas no deberían resolverse con esa lógica?","Start-up culture values speed and risk. Which problems should not be solved with that logic?"),
      p("Diseñá una solución para ahorrar agua en tu ciudad: explicá el problema, el cambio de hábito y la tecnología necesaria.","Design a water-saving solution for your city: explain the problem, the behaviour change and the technology needed."),
    ]
  },
];

export const starters:Pair[] = [
  p("Desde mi punto de vista…","From my point of view…"),
  p("Por un lado… pero por otro…","On the one hand… but on the other…"),
  p("Creo que la prioridad debería ser… porque…","I think the priority should be… because…"),
  p("El problema aparece cuando…","The problem appears when…"),
  p("Un ejemplo que demuestra esto es…","One example that demonstrates this is…"),
  p("Depende principalmente de…","It mainly depends on…"),
  p("Si tuviera que decidir, elegiría…","If I had to decide, I would choose…"),
];

export const connectors:Pair[] = [
  p("sin embargo","however"),p("además","in addition"),p("por eso","that is why"),p("aunque","although"),p("en cambio","on the other hand"),p("por ejemplo","for example"),p("a largo plazo","in the long term"),p("hasta cierto punto","to a certain extent"),
];

export const depthMoves:Pair[] = [
  p("Dá una razón concreta.","Give a concrete reason."),
  p("Agregá un ejemplo real.","Add a real example."),
  p("Reconocé una desventaja.","Acknowledge one disadvantage."),
  p("Comparalo con otro país.","Compare it with another country."),
  p("Explicá una consecuencia futura.","Explain one future consequence."),
  p("Hacé una pregunta de seguimiento.","Ask a follow-up question."),
];
