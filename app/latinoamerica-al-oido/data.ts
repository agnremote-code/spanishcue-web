export type Question = {
  prompt: string;
  options: string[];
  answer: number;
  feedback: string;
};

export type Country = {
  id: string;
  name: string;
  flag: string;
  locale: string;
  voiceHints: string[];
  color: string;
  x: number;
  y: number;
  city: string;
  title: string;
  topic: string;
  speaker: string;
  speed: number;
  pitch: number;
  script: string;
  glossary: { word: string; meaning: string }[];
  questions: Question[];
};

export const countries: Country[] = [
  {
    id: "argentina",
    name: "Argentina",
    flag: "🇦🇷",
    locale: "es-AR",
    voiceHints: ["argentina", "es-ar", "diego", "elena"],
    color: "#63c7ff",
    x: 48,
    y: 83,
    city: "Buenos Aires",
    title: "Un plan simple que salvó el día",
    topic: "Transporte, amistad y merienda",
    speaker: "Voz rioplatense · ritmo tranquilo",
    speed: 0.94,
    pitch: 0.98,
    script: "Che, te cuento lo que me pasó ayer. Salí del trabajo a las seis y quería tomar el colectivo para encontrarme con Lucía. Cuando llegué a la parada, vi que había un montón de gente. Al final, el colectivo tardó casi cuarenta minutos. Lucía me mandó un mensaje y me dijo que no había problema. Nos encontramos en un café de Almagro, pedimos dos medialunas y compartimos un café con leche. Yo estaba cansado, pero la charla me cambió el ánimo. Volví a casa cerca de las diez y pensé: a veces un plan simple te salva el día, ¿viste?",
    glossary: [
      { word: "colectivo", meaning: "autobús" },
      { word: "un montón de", meaning: "mucho / mucha" },
      { word: "¿viste?", meaning: "expresión para conectar con la otra persona" },
    ],
    questions: [
      { prompt: "¿A qué hora salió del trabajo?", options: ["A las cinco", "A las seis", "A las siete"], answer: 1, feedback: "Salió del trabajo a las seis." },
      { prompt: "¿Qué transporte quería tomar?", options: ["El colectivo", "El subte", "Un taxi"], answer: 0, feedback: "Quería tomar el colectivo." },
      { prompt: "¿Con quién iba a encontrarse?", options: ["Con su hermana", "Con Lucía", "Con un compañero"], answer: 1, feedback: "Iba a encontrarse con Lucía." },
      { prompt: "¿Cómo estaba la parada?", options: ["Vacía", "Cerrada", "Llena de gente"], answer: 2, feedback: "Había un montón de gente." },
      { prompt: "¿Cuánto tardó el colectivo?", options: ["Casi veinte minutos", "Casi cuarenta minutos", "Una hora"], answer: 1, feedback: "El colectivo tardó casi cuarenta minutos." },
      { prompt: "¿Dónde se encontraron?", options: ["En un café de Almagro", "En una plaza", "En la oficina"], answer: 0, feedback: "Se encontraron en un café de Almagro." },
      { prompt: "¿Qué pidieron?", options: ["Empanadas y mate", "Dos medialunas y café con leche", "Tostadas y té"], answer: 1, feedback: "Pidieron dos medialunas y compartieron un café con leche." },
      { prompt: "¿Cómo estaba la persona antes de la charla?", options: ["Cansada", "Enojada", "Nerviosa"], answer: 0, feedback: "Estaba cansada." },
      { prompt: "¿Qué efecto tuvo la charla?", options: ["Le dio sueño", "Le cambió el ánimo", "Le hizo perder el colectivo"], answer: 1, feedback: "La charla le cambió el ánimo." },
      { prompt: "¿Cuál es la idea final del audio?", options: ["Los planes caros son mejores", "Es mejor quedarse en casa", "Un plan simple puede mejorar el día"], answer: 2, feedback: "La conclusión es que un plan simple puede salvarte el día." },
    ],
  },
  {
    id: "mexico",
    name: "México",
    flag: "🇲🇽",
    locale: "es-MX",
    voiceHints: ["mexico", "méxico", "es-mx", "jorge", "dalia"],
    color: "#ffcf5a",
    x: 16,
    y: 15,
    city: "Ciudad de México",
    title: "Una mañana en Coyoacán",
    topic: "Mercado, comida y una decisión inesperada",
    speaker: "Voz mexicana · ritmo conversacional",
    speed: 0.93,
    pitch: 1,
    script: "El sábado fui con mi prima al mercado de Coyoacán. Queríamos comprar fruta, pero terminamos pasando toda la mañana ahí. Primero probamos un jugo de mango que estaba buenísimo. Después vimos un puesto de artesanías y mi prima encontró una taza pintada a mano para su mamá. Yo no pensaba comprar nada, pero vi una libreta con una portada azul y me encantó. Antes de volver, comimos dos tacos cada uno. Había mucha gente y hacía calor, así que buscamos una mesa a la sombra. Llegamos a casa cansados, pero muy contentos con nuestras compras.",
    glossary: [
      { word: "puesto", meaning: "pequeño espacio de venta en un mercado" },
      { word: "artesanías", meaning: "objetos hechos a mano" },
      { word: "a la sombra", meaning: "en un lugar protegido del sol" },
    ],
    questions: [
      { prompt: "¿Cuándo fueron al mercado?", options: ["El viernes", "El sábado", "El domingo"], answer: 1, feedback: "Fueron el sábado." },
      { prompt: "¿Con quién fue la persona?", options: ["Con su prima", "Con su mamá", "Con una amiga"], answer: 0, feedback: "Fue con su prima." },
      { prompt: "¿Qué querían comprar al principio?", options: ["Ropa", "Fruta", "Libros"], answer: 1, feedback: "Al principio querían comprar fruta." },
      { prompt: "¿Qué bebida probaron?", options: ["Agua de limón", "Café frío", "Jugo de mango"], answer: 2, feedback: "Probaron un jugo de mango." },
      { prompt: "¿Para quién era la taza?", options: ["Para la mamá de la prima", "Para la persona que habla", "Para una amiga"], answer: 0, feedback: "La taza era para la mamá de su prima." },
      { prompt: "¿Qué compró la persona que habla?", options: ["Una libreta azul", "Una taza roja", "Una camisa"], answer: 0, feedback: "Compró una libreta con una portada azul." },
      { prompt: "¿Cuántos tacos comió cada uno?", options: ["Uno", "Dos", "Tres"], answer: 1, feedback: "Comieron dos tacos cada uno." },
      { prompt: "¿Qué tiempo hacía?", options: ["Hacía frío", "Llovía", "Hacía calor"], answer: 2, feedback: "Hacía calor." },
      { prompt: "¿Dónde buscaron una mesa?", options: ["Cerca de la puerta", "A la sombra", "En la calle"], answer: 1, feedback: "Buscaron una mesa a la sombra." },
      { prompt: "¿Cómo llegaron a casa?", options: ["Cansados y contentos", "Enojados", "Con hambre"], answer: 0, feedback: "Llegaron cansados, pero muy contentos." },
    ],
  },
  {
    id: "colombia",
    name: "Colombia",
    flag: "🇨🇴",
    locale: "es-CO",
    voiceHints: ["colombia", "es-co", "salome", "gonzalo"],
    color: "#ff7f8d",
    x: 31,
    y: 40,
    city: "Medellín",
    title: "La mochila que se quedó en el café",
    topic: "Un olvido, una llamada y una buena sorpresa",
    speaker: "Voz colombiana · ritmo amable",
    speed: 0.94,
    pitch: 1.02,
    script: "Esta mañana salí temprano para una reunión en el centro. Como tenía tiempo, entré a un café y pedí un tinto. Revisé unos mensajes, pagué y me fui caminando. Diez minutos después, sentí que me faltaba algo: había dejado la mochila junto a la silla. Qué pena. Llamé al café y una chica me dijo: tranquilo, acá la tenemos. Volví rápidamente y la encontré en la caja. Dentro estaban mi computadora y todos mis documentos. Le agradecí varias veces a la chica y compré dos panes de queso para compartir con ella. Por suerte, todo terminó bien.",
    glossary: [
      { word: "tinto", meaning: "café negro en Colombia" },
      { word: "qué pena", meaning: "expresión de vergüenza o disculpa" },
      { word: "acá la tenemos", meaning: "la mochila está aquí y está segura" },
    ],
    questions: [
      { prompt: "¿Por qué salió temprano?", options: ["Tenía una reunión", "Quería hacer ejercicio", "Iba de viaje"], answer: 0, feedback: "Salió temprano porque tenía una reunión." },
      { prompt: "¿Qué pidió en el café?", options: ["Un jugo", "Un tinto", "Un chocolate"], answer: 1, feedback: "Pidió un tinto, es decir, un café negro." },
      { prompt: "¿Qué hizo antes de irse?", options: ["Leyó un libro", "Llamó a su familia", "Revisó mensajes y pagó"], answer: 2, feedback: "Revisó unos mensajes y pagó." },
      { prompt: "¿Cuándo notó que faltaba algo?", options: ["Diez minutos después", "Una hora después", "Al llegar a casa"], answer: 0, feedback: "Lo notó diez minutos después." },
      { prompt: "¿Dónde había dejado la mochila?", options: ["En la calle", "Junto a la silla", "En el autobús"], answer: 1, feedback: "La había dejado junto a la silla." },
      { prompt: "¿Qué hizo cuando recordó la mochila?", options: ["Volvió sin llamar", "Llamó al café", "Llamó a la policía"], answer: 1, feedback: "Primero llamó al café." },
      { prompt: "¿Dónde estaba la mochila cuando volvió?", options: ["En la caja", "En la mesa", "En la cocina"], answer: 0, feedback: "La mochila estaba en la caja." },
      { prompt: "¿Qué había dentro?", options: ["Ropa y comida", "Una cámara", "La computadora y documentos"], answer: 2, feedback: "Estaban su computadora y todos sus documentos." },
      { prompt: "¿Qué compró para agradecer?", options: ["Dos panes de queso", "Una torta", "Dos cafés"], answer: 0, feedback: "Compró dos panes de queso." },
      { prompt: "¿Cómo terminó la historia?", options: ["Perdió la reunión", "Terminó bien", "La mochila estaba vacía"], answer: 1, feedback: "Por suerte, todo terminó bien." },
    ],
  },
];

