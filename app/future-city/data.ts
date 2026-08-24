export type FutureQuestion = {
  es: string;
  en: string;
  challenge: string;
};

export type District = {
  id: string;
  number: string;
  category: string;
  name: string;
  english: string;
  tagline: string;
  accent: string;
  image: string;
  imageAlt: string;
  vocabulary: [string, string][];
  questions: FutureQuestion[];
};

export const districts: District[] = [
  {
    id: "tiempo",
    number: "01",
    category: "VIDA COTIDIANA",
    name: "La Casa del Tiempo",
    english: "The House of Time",
    tagline: "Una ciudad también decide a qué velocidad vive.",
    accent: "#ff775f",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Casa contemporánea iluminada al atardecer",
    vocabulary: [["el ritmo", "pace"], ["aprovechar", "make the most of"], ["estar apurado/a", "be in a rush"]],
    questions: [
      { es: "Si cada día tuviera 30 horas, ¿viviríamos con más calma o simplemente trabajaríamos seis horas más?", en: "If every day had 30 hours, would we live more calmly or simply work six more hours?", challenge: "Imaginá la primera semana y después el primer año." },
      { es: "¿La ciudad debería tener una hora de silencio total cada día, incluso sin transporte ni entregas?", en: "Should the city have one hour of total silence every day, even without transport or deliveries?", challenge: "Elegí el horario y explicá quién perdería con esta idea." },
      { es: "¿Por qué la persona ocupada parece más importante que la persona que tiene tiempo?", en: "Why does a busy person seem more important than someone who has time?", challenge: "Contá una situación real donde viste esta idea." },
      { es: "¿Una ciudad justa debería adaptarse también a quienes funcionan mejor de noche?", en: "Should a fair city also adapt to people who function better at night?", challenge: "Diseñá dos servicios nocturnos que hoy no existen." }
    ]
  },
  {
    id: "mercado",
    number: "02",
    category: "DINERO Y CONSUMO",
    name: "El Mercado de las Segundas Vidas",
    english: "The Second-Life Market",
    tagline: "Nada nuevo hasta demostrar que lo viejo ya no sirve.",
    accent: "#e6b54a",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Interior moderno de un mercado y espacio comercial",
    vocabulary: [["reparar", "repair"], ["desechable", "disposable"], ["durar", "last"]],
    questions: [
      { es: "¿Comprarías un objeto reparado si su historia estuviera escrita en la etiqueta?", en: "Would you buy a repaired object if its history were written on the label?", challenge: "Inventá la historia de un objeto que te convencería." },
      { es: "¿Qué producto moderno está diseñado para durar demasiado poco?", en: "Which modern product is designed to last far too little?", challenge: "Acusá al producto y después defendé a la empresa." },
      { es: "Si el precio incluyera el daño ambiental real, ¿qué dejaría de comprar casi todo el mundo?", en: "If prices included the real environmental damage, what would almost everyone stop buying?", challenge: "Predecí una consecuencia positiva y una negativa." },
      { es: "¿Una ciudad con menos tiendas podría ser una ciudad más rica?", en: "Could a city with fewer shops be a richer city?", challenge: "Definí riqueza sin usar la palabra dinero." }
    ]
  },
  {
    id: "decisiones",
    number: "03",
    category: "PODER Y DEMOCRACIA",
    name: "La Torre de las Decisiones",
    english: "The Decision Tower",
    tagline: "Desde arriba, cada solución crea otro problema.",
    accent: "#8a7cf6",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Torre de oficinas de vidrio vista desde abajo",
    vocabulary: [["tomar una decisión", "make a decision"], ["el presupuesto", "budget"], ["rendir cuentas", "be accountable"]],
    questions: [
      { es: "¿Confiarías más en un alcalde que reconoce sus dudas o en uno que siempre parece seguro?", en: "Would you trust a mayor who admits doubts or one who always seems certain?", challenge: "Respondé como votante y después como candidato." },
      { es: "Si cada barrio pudiera gastar sus impuestos de manera diferente, ¿la ciudad sería más justa o más desigual?", en: "If every neighborhood could spend its taxes differently, would the city be fairer or more unequal?", challenge: "Usá un barrio rico y uno pobre como ejemplo." },
      { es: "¿Las personas que trabajan en una ciudad, pero no viven allí, deberían poder votar en algunas decisiones?", en: "Should people who work in a city but do not live there vote on some decisions?", challenge: "Decidí exactamente en cuáles sí y en cuáles no." },
      { es: "¿Qué decisión importante nunca debería tomarse por mayoría?", en: "Which important decision should never be made by majority vote?", challenge: "Poné un límite claro al poder de la mayoría." }
    ]
  },
  {
    id: "salud",
    number: "04",
    category: "SALUD Y EDAD",
    name: "El Hospital de la Vida Larga",
    english: "The Long-Life Hospital",
    tagline: "Vivir más no responde para qué queremos vivir.",
    accent: "#3dc6a2",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Profesional de la salud en un hospital luminoso",
    vocabulary: [["envejecer", "age / grow old"], ["prevenir", "prevent"], ["los cuidados", "care"]],
    questions: [
      { es: "Si todos pudiéramos vivir 120 años, ¿a qué edad tendría sentido empezar una vida completamente nueva?", en: "If everyone could live to 120, at what age would starting a completely new life make sense?", challenge: "Elegí una profesión y una relación para empezar de cero." },
      { es: "¿La salud es una responsabilidad personal cuando la ciudad vende estrés, ruido y comida poco saludable?", en: "Is health a personal responsibility when the city sells stress, noise and unhealthy food?", challenge: "Repartí la responsabilidad en porcentajes." },
      { es: "¿Los hospitales deberían ser lugares para curarse o centros donde la gente aprende a no enfermarse?", en: "Should hospitals be places to recover or centers where people learn not to get sick?", challenge: "Transformá un hospital actual con tres cambios." },
      { es: "¿Eliminar el envejecimiento sería un avance médico o una nueva forma de desigualdad?", en: "Would eliminating aging be medical progress or a new form of inequality?", challenge: "Imaginá quién accedería primero y qué pasaría después." }
    ]
  },
  {
    id: "escuela",
    number: "05",
    category: "EDUCACIÓN",
    name: "La Escuela sin Paredes",
    english: "The School Without Walls",
    tagline: "Aprender deja de ser una etapa y se vuelve una forma de vivir.",
    accent: "#ffca43",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Edificio universitario con estudiantes en el patio",
    vocabulary: [["equivocarse", "make a mistake"], ["desaprender", "unlearn"], ["poner a prueba", "test"]],
    questions: [
      { es: "¿Qué aprenderíamos mejor si estuviera prohibido usar un aula?", en: "What would we learn better if using a classroom were forbidden?", challenge: "Elegí una materia y diseñá una clase por la ciudad." },
      { es: "Si los adultos tuvieran que volver a estudiar un mes cada cinco años, ¿qué deberían aprender?", en: "If adults had to study again for one month every five years, what should they learn?", challenge: "Armá tres materias obligatorias y defendelas." },
      { es: "¿Qué idea aprendida en la escuela necesita ser desaprendida para vivir mejor?", en: "Which idea learned at school needs to be unlearned to live better?", challenge: "Explicá de dónde viene y qué pondrías en su lugar." },
      { es: "¿Una escuela sin notas produciría personas más curiosas o menos responsables?", en: "Would a school without grades create more curious or less responsible people?", challenge: "Proponé otra forma de demostrar progreso." }
    ]
  },
  {
    id: "migraciones",
    number: "06",
    category: "IDENTIDAD Y MIGRACIÓN",
    name: "La Estación de las Migraciones",
    english: "The Migration Station",
    tagline: "Millones llegan; la pregunta es cuándo empiezan a pertenecer.",
    accent: "#4fa4ff",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Vista aérea realista de avenidas y edificios urbanos",
    vocabulary: [["pertenecer", "belong"], ["echar raíces", "put down roots"], ["recibir", "welcome / receive"]],
    questions: [
      { es: "¿Cuántos años necesita una persona para poder decir ‘esta también es mi ciudad’?", en: "How many years does a person need before saying ‘this is my city too’?", challenge: "Elegí una regla y después buscá una excepción." },
      { es: "¿Hablar el idioma local es una obligación para pertenecer o una oportunidad que la ciudad debe ofrecer?", en: "Is speaking the local language a duty for belonging or an opportunity the city must provide?", challenge: "Respondé desde la mirada de dos inmigrantes distintos." },
      { es: "¿Una ciudad pierde identidad cuando recibe mucha gente o crea una identidad nueva?", en: "Does a city lose its identity when it welcomes many people, or create a new one?", challenge: "Usá comida, música o lenguaje como evidencia." },
      { es: "¿Qué pequeño gesto puede hacer que un recién llegado deje de sentirse extranjero por un momento?", en: "What small gesture can make a newcomer stop feeling foreign for a moment?", challenge: "Contá la escena como una mini historia." }
    ]
  },
  {
    id: "noche",
    number: "07",
    category: "ESPACIO PÚBLICO",
    name: "El Parque de la Noche",
    english: "The Night Park",
    tagline: "La ciudad no termina cuando cierran las oficinas.",
    accent: "#c768f3",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Skyline urbano iluminado durante la noche",
    vocabulary: [["convivir", "live together"], ["molestar", "disturb"], ["sentirse seguro/a", "feel safe"]],
    questions: [
      { es: "¿Quién tiene más derecho a la noche: quien quiere dormir o quien recién termina de trabajar?", en: "Who has more right to the night: someone who wants to sleep or someone who has just finished work?", challenge: "Creá una regla que cuide a los dos." },
      { es: "¿Un parque muy iluminado se siente más seguro o menos humano?", en: "Does a brightly lit park feel safer or less human?", challenge: "Compará seguridad real y sensación de seguridad." },
      { es: "¿Qué actividad nocturna debería existir para personas que no quieren beber ni ir de fiesta?", en: "Which nighttime activity should exist for people who do not want to drink or party?", challenge: "Vendé tu idea en treinta segundos." },
      { es: "¿Los bancos, baños y luces de una plaza pueden revelar a quién quiere incluir una ciudad?", en: "Can a square’s benches, toilets and lights reveal whom a city wants to include?", challenge: "Leé un espacio público como si fuera un mensaje." }
    ]
  },
  {
    id: "vinculos",
    number: "08",
    category: "VÍNCULOS Y SOLEDAD",
    name: "El Edificio de los Vínculos",
    english: "The Relationships Building",
    tagline: "Cien vecinos, cien puertas y la posibilidad de no conocer a nadie.",
    accent: "#ff6e9d",
    image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Fachada realista de un gran edificio residencial",
    vocabulary: [["la convivencia", "living together"], ["la intimidad", "privacy / intimacy"], ["aislarse", "isolate oneself"]],
    questions: [
      { es: "¿La soledad debería tratarse como un problema privado o como un problema de la ciudad?", en: "Should loneliness be treated as a private problem or a city problem?", challenge: "Proponé una solución que no obligue a socializar." },
      { es: "¿Vivir solo es el máximo símbolo de independencia o una idea bastante reciente y cara?", en: "Is living alone the ultimate symbol of independence or a fairly recent and expensive idea?", challenge: "Defendé la independencia y después cuestionála." },
      { es: "¿Aceptarías pagar menos alquiler a cambio de cenar con tus vecinos una vez por semana?", en: "Would you pay less rent in exchange for having dinner with your neighbors once a week?", challenge: "Poné tres condiciones para aceptar." },
      { es: "¿Un edificio puede ayudar a crear amistad sin invadir la privacidad?", en: "Can a building help create friendship without invading privacy?", challenge: "Diseñá un piso compartido que realmente usarías." }
    ]
  },
  {
    id: "memoria",
    number: "09",
    category: "MEMORIA E HISTORIA",
    name: "El Museo de los Recuerdos",
    english: "The Museum of Memories",
    tagline: "Una ciudad cambia; sus ausencias también cuentan la historia.",
    accent: "#b78b67",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Interior amplio y contemporáneo de un museo",
    vocabulary: [["conservar", "preserve"], ["derribar", "demolish"], ["la huella", "trace"]],
    questions: [
      { es: "Cuando se derriba un edificio, ¿desaparece una parte de la memoria de quienes vivieron allí?", en: "When a building is demolished, does part of its residents’ memory disappear?", challenge: "Elegí un lugar que salvarías aunque no fuera hermoso." },
      { es: "¿Un museo debe mostrar el pasado que hace sentir orgullo o el que hace sentir incómodos?", en: "Should a museum show the past that creates pride or the past that makes people uncomfortable?", challenge: "Creá una sala que mucha gente preferiría evitar." },
      { es: "Si pudieras guardar un recuerdo personal en un museo público, ¿cuál elegirías y qué objeto lo representaría?", en: "If you could keep one personal memory in a public museum, which one and what object would represent it?", challenge: "Describí el objeto sin decir directamente qué es." },
      { es: "¿Qué cosa normal de 2026 les resultará imposible de entender a las personas del futuro?", en: "Which normal thing from 2026 will be impossible for people in the future to understand?", challenge: "Explicala como guía de museo del año 2126." }
    ]
  },
  {
    id: "comida",
    number: "10",
    category: "COMIDA Y CULTURA",
    name: "El Restaurante del Mañana",
    english: "The Restaurant of Tomorrow",
    tagline: "El futuro también llega al plato y cambia lo que llamamos tradición.",
    accent: "#ff8f3d",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Restaurante contemporáneo con iluminación cálida",
    vocabulary: [["el sabor", "flavor"], ["la receta", "recipe"], ["sostenible", "sustainable"]],
    questions: [
      { es: "Si una receta tradicional cambia para ser más sostenible, ¿sigue siendo la misma tradición?", en: "If a traditional recipe changes to become more sustainable, is it still the same tradition?", challenge: "Elegí una comida de tu país y cambiale un ingrediente." },
      { es: "¿Comerías carne creada sin animales si el sabor fuera exactamente igual?", en: "Would you eat meat created without animals if the taste were exactly the same?", challenge: "Separá tu reacción emocional de tu opinión racional." },
      { es: "¿Una ciudad debería limitar alimentos que necesitan demasiada agua para producirse?", en: "Should a city limit foods that require too much water to produce?", challenge: "Decidí si informar, cobrar más o prohibir." },
      { es: "¿Qué comida actual podría convertirse en un lujo dentro de cincuenta años?", en: "Which food today could become a luxury in fifty years?", challenge: "Inventá el menú y el precio del año 2076." }
    ]
  },
  {
    id: "justicia",
    number: "11",
    category: "ÉTICA Y DERECHOS",
    name: "El Tribunal del Futuro",
    english: "The Future Court",
    tagline: "Decisiones de hoy, consecuencias para personas que todavía no nacieron.",
    accent: "#67b6af",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Edificio institucional de justicia con grandes columnas",
    vocabulary: [["prohibir", "ban"], ["perjudicar", "harm"], ["tener derecho", "have the right"]],
    questions: [
      { es: "¿Las personas del futuro deberían tener derechos legales aunque todavía no hayan nacido?", en: "Should future people have legal rights even though they have not been born yet?", challenge: "Escribí el primer derecho de esa nueva ley." },
      { es: "¿Puede una ciudad ser culpable de hacer perder tiempo a millones de personas cada día?", en: "Can a city be guilty of making millions of people waste time every day?", challenge: "Presentá el caso como abogado/a." },
      { es: "¿Es justo prohibir algo cómodo hoy para evitar un daño que ocurrirá dentro de cincuenta años?", en: "Is it fair to ban something convenient today to avoid harm in fifty years?", challenge: "Elegí un ejemplo concreto y enfrentá la reacción pública." },
      { es: "Si una ley mejora la vida de la mayoría, pero obliga a una minoría a cambiar completamente, ¿es una buena ley?", en: "If a law improves life for the majority but forces a minority to change completely, is it a good law?", challenge: "Definí qué compensación sería justa." }
    ]
  },
  {
    id: "tech",
    number: "12",
    category: "TECH · ÚNICO DISTRITO TECNOLÓGICO",
    name: "El Centro TECH",
    english: "The TECH Hub",
    tagline: "La única zona tecnológica: útil, brillante y un poco inquietante.",
    accent: "#53e0d8",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Edificio futurista real de vidrio y metal",
    vocabulary: [["los datos", "data"], ["vigilar", "monitor"], ["reemplazar", "replace"]],
    questions: [
      { es: "¿Aceptarías que una inteligencia artificial ayude al alcalde si todas sus recomendaciones fueran públicas?", en: "Would you accept AI helping the mayor if all its recommendations were public?", challenge: "Elegí una decisión que sí delegarías y una que nunca." },
      { es: "¿Una ciudad más segura justifica cámaras que reconocen a cada persona?", en: "Does a safer city justify cameras that recognize every person?", challenge: "Buscá el punto exacto donde la seguridad se vuelve control." },
      { es: "Si los robots cuidaran mejor a las personas mayores, ¿seguiría faltando algo esencial?", en: "If robots cared for older people better, would something essential still be missing?", challenge: "Distinguí cuidado eficiente de cuidado humano." },
      { es: "¿Debería existir un día semanal en el que algunos servicios digitales de la ciudad se apaguen?", en: "Should there be one day a week when some city digital services shut down?", challenge: "Decidí qué se apaga y qué debe seguir funcionando." }
    ]
  }
];

export const speakingTools: [string, string][] = [
  ["Desde mi punto de vista…", "From my point of view…"],
  ["Lo diseñaría de esta manera…", "I would design it this way…"],
  ["La ventaja sería…, pero…", "The advantage would be…, but…"],
  ["La consecuencia inesperada podría ser…", "The unexpected consequence could be…"],
  ["En comparación con mi ciudad…", "Compared with my city…"],
  ["No estoy completamente seguro/a, aunque…", "I’m not completely sure, although…"]
];
