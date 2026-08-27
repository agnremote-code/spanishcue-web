export type Tabla = {
  titulo: string;
  nota: string;
  columnas: string[];
  filas: string[][];
};

export type Unidad = {
  id: string;
  numero: string;
  nombre: string;
  subtitulo: string;
  nivel: string;
  icono: string;
  color: string;
  preguntaClave: string;
  idea: string;
  formula: string;
  condicion: string;
  consecuencia: string;
  tiempo: string;
  usos: { titulo: string; explicacion: string; ejemplo: string }[];
  construccion: { titulo: string; regla: string; pasos: string[] }[];
  tablas: Tabla[];
  ejemplos: { oracion: string; condicion: string; resultado: string; lectura: string }[];
  errores: { incorrecto: string; correcto: string; explicacion: string }[];
  ejercicios: { consigna: string; respuesta: string; explicacion: string }[];
  conversacion: { pregunta: string; inicio: string }[];
};

export const unidades: Unidad[] = [
  {
    id: "cero",
    numero: "00",
    nombre: "Condicional cero",
    subtitulo: "Hechos, hábitos y consecuencias regulares",
    nivel: "BASE B1",
    icono: "🌱",
    color: "#52d6a5",
    preguntaClave: "¿Esto sucede siempre, normalmente o cada vez que se cumple la condición?",
    idea: "El hablante presenta la relación entre la condición y la consecuencia como real, habitual o comprobable. No imagina otro mundo: describe cómo funciona este.",
    formula: "SI + PRESENTE DE INDICATIVO → PRESENTE / IMPERATIVO",
    condicion: "Presente de indicativo: la condición pertenece a la realidad del hablante.",
    consecuencia: "Presente para un resultado regular; imperativo para una instrucción.",
    tiempo: "La relación no se limita a este momento. Puede expresar una regla general, una rutina o una reacción repetida.",
    usos: [
      { titulo: "Verdad o relación general", explicacion: "Dos hechos se presentan como una relación estable de causa y efecto.", ejemplo: "Si calentás hielo, se derrite." },
      { titulo: "Hábito o reacción personal", explicacion: "La consecuencia suele repetirse en la vida de una persona.", ejemplo: "Si duermo poco, estoy de mal humor." },
      { titulo: "Instrucción condicionada", explicacion: "La condición es posible y la consecuencia indica qué hacer.", ejemplo: "Si no entendés, preguntá." },
    ],
    construccion: [
      { titulo: "Después de «si»", regla: "Conjugá el verbo en presente de indicativo.", pasos: ["Identificá el sujeto.", "Elegí la terminación de presente.", "No uses infinitivo: si comer ❌ / si como ✅."] },
      { titulo: "En la consecuencia", regla: "Elegí presente o imperativo según la intención.", pasos: ["Resultado habitual: presente.", "Consejo u orden: imperativo.", "La consecuencia también puede aparecer primero."] },
      { titulo: "Orden y puntuación", regla: "La posición cambia el foco, no la lógica.", pasos: ["Si A, B: normalmente lleva coma.", "B si A: normalmente no lleva coma.", "«Entonces» es posible, pero no obligatorio."] },
    ],
    tablas: [
      {
        titulo: "Presente regular",
        nota: "Las tres familias regulares que aparecen después de «si».",
        columnas: ["Persona", "hablar", "comer", "vivir"],
        filas: [
          ["yo", "hablo", "como", "vivo"], ["vos", "hablás", "comés", "vivís"], ["tú", "hablas", "comes", "vives"],
          ["él / ella / usted", "habla", "come", "vive"], ["nosotros/as", "hablamos", "comemos", "vivimos"], ["ustedes / ellos/as", "hablan", "comen", "viven"],
        ],
      },
      {
        titulo: "Imperativo útil",
        nota: "La forma afirmativa y negativa cambia, especialmente con «vos».",
        columnas: ["Persona", "hablar", "comer", "vivir"],
        filas: [
          ["vos", "hablá / no hables", "comé / no comas", "viví / no vivas"],
          ["tú", "habla / no hables", "come / no comas", "vive / no vivas"],
          ["usted", "hable / no hable", "coma / no coma", "viva / no viva"],
          ["ustedes", "hablen / no hablen", "coman / no coman", "vivan / no vivan"],
        ],
      },
    ],
    ejemplos: [
      { oracion: "Si tomo café de noche, no duermo.", condicion: "tomo: presente", resultado: "no duermo: presente", lectura: "Consecuencia personal habitual." },
      { oracion: "Las plantas mueren si no reciben agua.", condicion: "no reciben: presente", resultado: "mueren: presente", lectura: "La consecuencia aparece primero." },
      { oracion: "Si llegás tarde, avisame.", condicion: "llegás: presente", resultado: "avisame: imperativo", lectura: "Instrucción para una situación real." },
      { oracion: "Si estoy estresado, salgo a caminar.", condicion: "estoy: presente", resultado: "salgo: presente", lectura: "Reacción que se repite." },
    ],
    errores: [
      { incorrecto: "Si estoy cansado, descansar.", correcto: "Si estoy cansado, descanso.", explicacion: "La consecuencia necesita un verbo conjugado." },
      { incorrecto: "Si no entendés, no preguntá.", correcto: "Si no entendés, no preguntes.", explicacion: "El imperativo negativo de «vos» usa presente de subjuntivo." },
      { incorrecto: "Si llueve usamos el subte.", correcto: "Si llueve, usamos el subte.", explicacion: "Cuando la condición aparece primero, se escribe coma entre los dos bloques." },
    ],
    ejercicios: [
      { consigna: "Si no ___ bien, me siento cansado. (comer)", respuesta: "como", explicacion: "Es una relación habitual: presente + presente." },
      { consigna: "Si vos ___ dudas, preguntame. (tener)", respuesta: "tenés", explicacion: "Después de «si» va presente de indicativo; con «vos»: tenés." },
      { consigna: "Las plantas mueren si no ___ agua. (recibir)", respuesta: "reciben", explicacion: "El sujeto es «las plantas», equivalente a «ellas»." },
      { consigna: "Si estás manejando, no ___ el celular. (usar)", respuesta: "uses", explicacion: "La consecuencia es un imperativo negativo." },
    ],
    conversacion: [
      { pregunta: "¿Qué cambia en tu cuerpo si dormís menos de seis horas?", inicio: "Si duermo menos de seis horas…" },
      { pregunta: "¿Qué hacés si una conversación se vuelve incómoda?", inicio: "Si una conversación se vuelve incómoda…" },
      { pregunta: "Dame tres reglas para compartir una casa con vos.", inicio: "Si…, …" },
      { pregunta: "¿Qué hábitos te ayudan si tenés un día difícil?", inicio: "Si tengo un día difícil…" },
    ],
  },
  {
    id: "primero",
    numero: "01",
    nombre: "Primer condicional",
    subtitulo: "Una condición real y una consecuencia futura",
    nivel: "B1",
    icono: "🚀",
    color: "#5cc8ff",
    preguntaClave: "¿La condición todavía puede cumplirse de verdad?",
    idea: "El hablante considera que la condición es real o posible. La consecuencia se presenta como una predicción, una decisión, una promesa, una advertencia o una instrucción futura.",
    formula: "SI + PRESENTE DE INDICATIVO → FUTURO / IR A + INFINITIVO / PRESENTE / IMPERATIVO",
    condicion: "Presente de indicativo, aunque la condición se refiera al futuro.",
    consecuencia: "La forma depende de la intención: futuro, perífrasis, presente con valor futuro o imperativo.",
    tiempo: "La condición está abierta: todavía no sabemos si ocurrirá. El resultado depende de ella.",
    usos: [
      { titulo: "Predicción o consecuencia probable", explicacion: "El resultado se proyecta hacia el futuro.", ejemplo: "Si seguimos así, terminaremos antes." },
      { titulo: "Promesa, decisión o advertencia", explicacion: "El hablante compromete una acción o avisa de una consecuencia.", ejemplo: "Si me escribís, te respondo esta noche." },
      { titulo: "Instrucción futura", explicacion: "La condición indica cuándo debe cumplirse una orden.", ejemplo: "Si llegás primero, esperame afuera." },
    ],
    construccion: [
      { titulo: "La condición futura", regla: "Después de «si» usamos presente, no futuro.", pasos: ["si llueve ✅", "si va a llover ❌ en la fórmula básica", "si lloverá ❌"] },
      { titulo: "La consecuencia", regla: "Elegí la forma que expresa mejor la intención.", pasos: ["Predicción: futuro simple.", "Plan próximo: ir a + infinitivo.", "Decisión directa: presente.", "Orden: imperativo."] },
      { titulo: "El presente con valor futuro", regla: "El presente puede sonar muy natural en decisiones ya asumidas.", pasos: ["Si venís, cocino.", "Si termino temprano, te llamo.", "El contexto futuro evita la ambigüedad."] },
    ],
    tablas: [
      {
        titulo: "Futuro simple",
        nota: "Se agrega la terminación al infinitivo completo.",
        columnas: ["Persona", "hablar", "comer", "vivir"],
        filas: [
          ["yo", "hablaré", "comeré", "viviré"], ["vos / tú", "hablarás", "comerás", "vivirás"],
          ["él / ella / usted", "hablará", "comerá", "vivirá"], ["nosotros/as", "hablaremos", "comeremos", "viviremos"],
          ["ustedes / ellos/as", "hablarán", "comerán", "vivirán"],
        ],
      },
      {
        titulo: "Raíces irregulares del futuro",
        nota: "La terminación es regular; lo que cambia es la raíz.",
        columnas: ["Infinitivo", "Raíz", "Ejemplo", "Significado"],
        filas: [
          ["tener", "tendr-", "tendré", "posesión"], ["venir", "vendr-", "vendrás", "movimiento"],
          ["poder", "podr-", "podremos", "posibilidad"], ["hacer", "har-", "harán", "acción"],
          ["decir", "dir-", "diré", "comunicación"], ["salir", "saldr-", "saldrás", "movimiento"],
        ],
      },
    ],
    ejemplos: [
      { oracion: "Si mañana hace sol, iremos al parque.", condicion: "hace: presente", resultado: "iremos: futuro", lectura: "Predicción sobre una posibilidad real." },
      { oracion: "Te aviso si termino temprano.", condicion: "termino: presente", resultado: "aviso: presente con valor futuro", lectura: "La consecuencia aparece primero." },
      { oracion: "Si encontrás mi celular, no mires las fotos.", condicion: "encontrás: presente", resultado: "no mires: imperativo", lectura: "Orden para una situación posible." },
      { oracion: "Si conseguimos entradas, vamos a ver el partido.", condicion: "conseguimos: presente", resultado: "vamos a ver: futuro próximo", lectura: "Plan dependiente de una condición." },
    ],
    errores: [
      { incorrecto: "Si tendré tiempo, iré.", correcto: "Si tengo tiempo, iré.", explicacion: "Después de «si» no usamos futuro en esta estructura." },
      { incorrecto: "Si va a llover, cancelaremos.", correcto: "Si llueve, cancelaremos.", explicacion: "La forma básica expresa la condición futura con presente." },
      { incorrecto: "Si vendrías, te mostraré todo.", correcto: "Si venís, te mostraré todo.", explicacion: "El condicional simple tampoco va después de «si» en una condición posible." },
    ],
    ejercicios: [
      { consigna: "Si mañana ___, cancelaremos el picnic. (llover)", respuesta: "llueve", explicacion: "La condición futura se expresa con presente de indicativo." },
      { consigna: "Te ___ si tengo novedades. (llamar)", respuesta: "llamaré / llamo", explicacion: "Ambas formas son posibles: futuro explícito o presente con valor futuro." },
      { consigna: "Si ves a Ana, ___ que llego tarde. (decirle)", respuesta: "decile / dile", explicacion: "La consecuencia es una orden." },
      { consigna: "Si no salimos ahora, no ___ a tiempo. (llegar)", respuesta: "llegaremos / vamos a llegar", explicacion: "La consecuencia es una predicción futura." },
    ],
    conversacion: [
      { pregunta: "Si recibís una oportunidad laboral inesperada, ¿cómo decidirás si aceptarla?", inicio: "Si recibo una oportunidad inesperada…" },
      { pregunta: "¿Qué pasará si tu ciudad prohíbe los autos en el centro?", inicio: "Si mi ciudad prohíbe los autos…" },
      { pregunta: "Hacé una promesa y una advertencia para tu próximo viaje.", inicio: "Si…, voy a… / Si…, no…" },
      { pregunta: "Si este año aprendés una habilidad nueva, ¿cuál vas a elegir y por qué?", inicio: "Si este año aprendo una habilidad nueva…" },
    ],
  },
  {
    id: "segundo",
    numero: "02",
    nombre: "Segundo condicional",
    subtitulo: "Una hipótesis distante, improbable o contraria al presente",
    nivel: "B1+",
    icono: "🪐",
    color: "#9d7cff",
    preguntaClave: "¿Estoy imaginando una realidad diferente de la actual?",
    idea: "El hablante se distancia de la condición. Puede considerarla improbable, imaginaria o contraria a la realidad presente. No afirma que sea imposible: la presenta como remota.",
    formula: "SI + IMPERFECTO DE SUBJUNTIVO → CONDICIONAL SIMPLE",
    condicion: "Imperfecto de subjuntivo: crea distancia con la realidad actual.",
    consecuencia: "Condicional simple: expresa lo que ocurriría dentro de esa hipótesis.",
    tiempo: "Normalmente imagina una situación presente o futura desde un mundo alternativo.",
    usos: [
      { titulo: "Situación imaginaria", explicacion: "Se construye una realidad alternativa para explorar sus consecuencias.", ejemplo: "Si viviera frente al mar, nadaría todos los días." },
      { titulo: "Posibilidad poco probable", explicacion: "La situación no es imposible, pero el hablante la siente lejana.", ejemplo: "Si ganara la lotería, compraría una casa." },
      { titulo: "Consejo", explicacion: "«Si yo fuera vos» permite recomendar sin ordenar directamente.", ejemplo: "Si yo fuera vos, hablaría con ella." },
    ],
    construccion: [
      { titulo: "Formar el imperfecto de subjuntivo", regla: "Partí de la tercera persona plural del indefinido.", pasos: ["hablaron → habla-", "comieron → comie-", "vivieron → vivie-", "Agregá: -ra, -ras, -ra, -ramos, -ran."] },
      { titulo: "Formar el condicional simple", regla: "Agregá las terminaciones al infinitivo completo.", pasos: ["-ía, -ías, -ía", "-íamos, -ían", "Las raíces irregulares son las mismas que en futuro."] },
      { titulo: "Las variantes en -ra y -se", regla: "Ambas son correctas y equivalentes en esta estructura.", pasos: ["tuviera = tuviese", "pudieras = pudieses", "La forma en -ra es más frecuente en muchos países."] },
    ],
    tablas: [
      {
        titulo: "Imperfecto de subjuntivo",
        nota: "La forma en -ra es la más frecuente en la conversación.",
        columnas: ["Persona", "hablar", "comer", "vivir"],
        filas: [
          ["yo", "hablara", "comiera", "viviera"], ["vos / tú", "hablaras", "comieras", "vivieras"],
          ["él / ella / usted", "hablara", "comiera", "viviera"], ["nosotros/as", "habláramos", "comiéramos", "viviéramos"],
          ["ustedes / ellos/as", "hablaran", "comieran", "vivieran"],
        ],
      },
      {
        titulo: "Condicional simple",
        nota: "Las terminaciones se agregan al infinitivo; no cambian entre -ar, -er e -ir.",
        columnas: ["Persona", "hablar", "comer", "vivir"],
        filas: [
          ["yo", "hablaría", "comería", "viviría"], ["vos / tú", "hablarías", "comerías", "vivirías"],
          ["él / ella / usted", "hablaría", "comería", "viviría"], ["nosotros/as", "hablaríamos", "comeríamos", "viviríamos"],
          ["ustedes / ellos/as", "hablarían", "comerían", "vivirían"],
        ],
      },
    ],
    ejemplos: [
      { oracion: "Si tuviera más tiempo, aprendería japonés.", condicion: "tuviera: imperfecto de subjuntivo", resultado: "aprendería: condicional simple", lectura: "Ahora no tengo suficiente tiempo." },
      { oracion: "Compraría esa casa si fuera más barata.", condicion: "fuera: imperfecto de subjuntivo", resultado: "compraría: condicional simple", lectura: "El precio actual impide la compra." },
      { oracion: "Si pudieras hablar con tu yo del futuro, ¿qué le preguntarías?", condicion: "pudieras: imperfecto de subjuntivo", resultado: "preguntarías: condicional simple", lectura: "Hipótesis imaginaria." },
      { oracion: "Si yo fuera vos, no tomaría esa decisión tan rápido.", condicion: "fuera: imperfecto de subjuntivo", resultado: "no tomaría: condicional simple", lectura: "Consejo indirecto." },
    ],
    errores: [
      { incorrecto: "Si tendría más tiempo, viajaría.", correcto: "Si tuviera más tiempo, viajaría.", explicacion: "Después de «si» va imperfecto de subjuntivo, no condicional." },
      { incorrecto: "Si tuviera más tiempo, viajaré.", correcto: "Si tuviera más tiempo, viajaría.", explicacion: "La consecuencia también debe mantener la distancia hipotética." },
      { incorrecto: "Si sería vos, esperaría.", correcto: "Si fuera vos, esperaría.", explicacion: "La forma correcta de «ser» es «fuera» o «fuese»." },
    ],
    ejercicios: [
      { consigna: "Si yo ___ vos, no aceptaría. (ser)", respuesta: "fuera / fuese", explicacion: "El consejo hipotético usa imperfecto de subjuntivo." },
      { consigna: "¿Qué ___ si pudieras cambiar una ley? (hacer)", respuesta: "harías", explicacion: "La consecuencia usa condicional simple con raíz irregular har-." },
      { consigna: "Viajaríamos más si los vuelos ___ menos. (costar)", respuesta: "costaran / costasen", explicacion: "La condición puede aparecer después de la consecuencia." },
      { consigna: "Si no ___ trabajar, ¿cómo organizarías tu día? (necesitar)", respuesta: "necesitaras / necesitases", explicacion: "La situación es contraria o distante de la realidad actual." },
    ],
    conversacion: [
      { pregunta: "Si pudieras vivir un año sin obligaciones, ¿cómo cambiaría tu rutina?", inicio: "Si pudiera vivir un año sin obligaciones…" },
      { pregunta: "Si fueras responsable de tu ciudad durante un mes, ¿qué problema resolverías primero?", inicio: "Si fuera responsable de mi ciudad…" },
      { pregunta: "¿Qué consejo te darías si pudieras hablar con tu versión de hace cinco años?", inicio: "Si pudiera hablar con mi versión de hace cinco años…" },
      { pregunta: "Si el dinero no influyera en tus decisiones, ¿qué trabajo elegirías?", inicio: "Si el dinero no influyera…" },
    ],
  },
  {
    id: "tercero",
    numero: "03",
    nombre: "Tercer condicional",
    subtitulo: "Un pasado alternativo que ya no puede ocurrir",
    nivel: "B1+ → B2",
    icono: "⏳",
    color: "#ffb44c",
    preguntaClave: "¿La condición pertenece a un pasado que ya no puedo cambiar?",
    idea: "El hablante imagina que un hecho pasado ocurrió de otra manera y reconstruye su consecuencia. La condición y el resultado son irreales porque el pasado real ya quedó cerrado.",
    formula: "SI + PLUSCUAMPERFECTO DE SUBJUNTIVO → CONDICIONAL COMPUESTO",
    condicion: "Hubiera o hubiese + participio: una causa pasada que no ocurrió así.",
    consecuencia: "Habría + participio: el resultado alternativo que tampoco ocurrió.",
    tiempo: "Los dos bloques miran hacia atrás. La oración contrasta el pasado real con un pasado imaginado.",
    usos: [
      { titulo: "Arrepentimiento", explicacion: "Se imagina una decisión diferente y su posible beneficio.", ejemplo: "Si hubiera estudiado, habría aprobado." },
      { titulo: "Crítica o reproche", explicacion: "Se señala qué acción pasada habría evitado un problema.", ejemplo: "Si me hubieras avisado, habría ido." },
      { titulo: "Alivio o valoración", explicacion: "También puede expresar que el resultado real fue mejor.", ejemplo: "Si hubiéramos salido antes, habríamos quedado atrapados en la tormenta." },
    ],
    construccion: [
      { titulo: "La condición", regla: "Conjugá «haber» en imperfecto de subjuntivo y agregá el participio.", pasos: ["hubiera / hubiese", "hubieras / hubieses", "hubiéramos / hubiésemos", "hubieran / hubiesen"] },
      { titulo: "La consecuencia", regla: "Conjugá «haber» en condicional y agregá el participio.", pasos: ["habría", "habrías", "habríamos", "habrían"] },
      { titulo: "El participio", regla: "El participio no cambia con la persona ni con el género.", pasos: ["habría llegado", "habríamos llegado", "habrían llegado", "Nunca: habrían llegados ❌"] },
    ],
    tablas: [
      {
        titulo: "Los dos auxiliares",
        nota: "Compará la condición con la consecuencia antes de agregar el participio.",
        columnas: ["Persona", "Condición", "Consecuencia", "Con «salir»"],
        filas: [
          ["yo", "hubiera", "habría", "hubiera salido / habría salido"],
          ["vos / tú", "hubieras", "habrías", "hubieras salido / habrías salido"],
          ["él / ella / usted", "hubiera", "habría", "hubiera salido / habría salido"],
          ["nosotros/as", "hubiéramos", "habríamos", "hubiéramos salido / habríamos salido"],
          ["ustedes / ellos/as", "hubieran", "habrían", "hubieran salido / habrían salido"],
        ],
      },
      {
        titulo: "Participios irregulares esenciales",
        nota: "La irregularidad está en el participio, no en el auxiliar.",
        columnas: ["Verbo", "Participio", "Verbo", "Participio"],
        filas: [
          ["hacer", "hecho", "decir", "dicho"], ["ver", "visto", "escribir", "escrito"],
          ["poner", "puesto", "volver", "vuelto"], ["romper", "roto", "abrir", "abierto"],
          ["morir", "muerto", "resolver", "resuelto"],
        ],
      },
    ],
    ejemplos: [
      { oracion: "Si hubiera sabido la verdad, habría decidido otra cosa.", condicion: "hubiera sabido: pluscuamperfecto de subjuntivo", resultado: "habría decidido: condicional compuesto", lectura: "No sabía la verdad y decidí lo que decidí." },
      { oracion: "No nos habríamos perdido si hubieras mirado el mapa.", condicion: "hubieras mirado: condición pasada", resultado: "no nos habríamos perdido: resultado alternativo", lectura: "Nos perdimos porque no miraste el mapa." },
      { oracion: "Si no te hubiera conocido, mi vida habría sido muy distinta.", condicion: "no te hubiera conocido", resultado: "habría sido", lectura: "Sí te conocí y eso cambió mi vida." },
      { oracion: "Si hubiéramos reservado antes, habríamos pagado menos.", condicion: "hubiéramos reservado", resultado: "habríamos pagado", lectura: "Reservamos tarde y pagamos más." },
    ],
    errores: [
      { incorrecto: "Si habría sabido, habría ido.", correcto: "Si hubiera sabido, habría ido.", explicacion: "La condición usa pluscuamperfecto de subjuntivo." },
      { incorrecto: "Si hubiera saber, habría ido.", correcto: "Si hubiera sabido, habría ido.", explicacion: "Después del auxiliar va participio, no infinitivo." },
      { incorrecto: "Habríamos llegados antes.", correcto: "Habríamos llegado antes.", explicacion: "El participio permanece invariable en un tiempo compuesto." },
    ],
    ejercicios: [
      { consigna: "Si me lo ___, te habría ayudado. (decir)", respuesta: "hubieras dicho", explicacion: "La condición pasada usa «hubieras» + participio irregular «dicho»." },
      { consigna: "No ___ tarde si hubiéramos tomado un taxi. (llegar)", respuesta: "habríamos llegado", explicacion: "La consecuencia no realizada usa condicional compuesto." },
      { consigna: "Si no hubiera llovido, la fiesta ___ afuera. (ser)", respuesta: "habría sido", explicacion: "El participio de «ser» es «sido»." },
      { consigna: "Si ellos ___ la puerta, nadie habría entrado. (cerrar)", respuesta: "hubieran cerrado", explicacion: "El sujeto plural exige «hubieran»; «cerrado» es regular." },
    ],
    conversacion: [
      { pregunta: "¿Qué decisión pasada habría cambiado más tu vida si hubieras elegido otra opción?", inicio: "Si hubiera elegido otra opción…" },
      { pregunta: "¿Qué habría pasado si nunca hubieras empezado a aprender español?", inicio: "Si nunca hubiera empezado…" },
      { pregunta: "Reescribí el final de un viaje real que no salió como esperabas.", inicio: "Si hubiéramos…" },
      { pregunta: "Pensá en una casualidad positiva. ¿Qué no habría ocurrido sin ella?", inicio: "Si no hubiera ocurrido esa casualidad…" },
    ],
  },
  {
    id: "mixtos",
    numero: "04",
    nombre: "Condicionales mixtos",
    subtitulo: "La causa y la consecuencia viven en tiempos diferentes",
    nivel: "EXTENSIÓN B1+",
    icono: "🌀",
    color: "#ff6f91",
    preguntaClave: "¿La causa ocurre en un tiempo y su consecuencia se siente en otro?",
    idea: "No existe un «cuarto condicional» universalmente aceptado. Después del tercero solemos estudiar los condicionales mixtos: combinaciones lógicas de estructuras ya aprendidas.",
    formula: "PASADO IRREAL → RESULTADO PRESENTE · ESTADO PRESENTE → RESULTADO PASADO",
    condicion: "Elegimos el tiempo según cuándo nace la causa: pasado cerrado o estado presente.",
    consecuencia: "Elegimos el tiempo según cuándo se manifiesta el resultado: presente actual o pasado terminado.",
    tiempo: "La forma no se copia mecánicamente. Primero ubicamos la causa y el resultado en una línea temporal.",
    usos: [
      { titulo: "Causa pasada, resultado presente", explicacion: "Una decisión anterior explica una situación actual.", ejemplo: "Si hubiera aceptado ese trabajo, ahora viviría en Tokio." },
      { titulo: "Estado presente, resultado pasado", explicacion: "Una característica actual explica una conducta anterior.", ejemplo: "Si fuera más paciente, ayer no habría discutido." },
      { titulo: "Consecuencia que continúa", explicacion: "Un hecho pasado todavía afecta la realidad de hoy.", ejemplo: "Si hubiera dormido bien, ahora no estaría tan cansado." },
    ],
    construccion: [
      { titulo: "Pasado → presente", regla: "Condición de tercero + consecuencia de segundo.", pasos: ["Si hubiera + participio", "condicional simple", "Marcadores útiles: ahora, hoy, actualmente."] },
      { titulo: "Presente → pasado", regla: "Condición de segundo + consecuencia de tercero.", pasos: ["Si + imperfecto de subjuntivo", "habría + participio", "Marcadores útiles: ayer, entonces, el año pasado."] },
      { titulo: "Control temporal", regla: "No elijas por el nombre del condicional: dibujá la línea temporal.", pasos: ["¿Cuándo nace la causa?", "¿Cuándo aparece el resultado?", "¿La relación sigue siendo lógica?"] },
    ],
    tablas: [
      {
        titulo: "Mapa de combinaciones",
        nota: "Dos combinaciones frecuentes construidas con tiempos ya estudiados.",
        columnas: ["Causa", "Forma de la causa", "Resultado", "Forma del resultado"],
        filas: [
          ["Pasado irreal", "hubiera + participio", "Presente alternativo", "condicional simple"],
          ["Estado presente irreal", "imperfecto de subjuntivo", "Pasado alternativo", "condicional compuesto"],
        ],
      },
      {
        titulo: "Marcadores que aclaran el tiempo",
        nota: "No son obligatorios, pero hacen visible la relación temporal.",
        columnas: ["Tiempo", "Marcadores", "Ejemplo", "Resultado"],
        filas: [
          ["Presente", "ahora / hoy / actualmente", "Si hubiera estudiado medicina…", "ahora sería médico."],
          ["Pasado", "ayer / entonces / en ese momento", "Si fuera más organizado…", "ayer no habría perdido el tren."],
        ],
      },
    ],
    ejemplos: [
      { oracion: "Si hubieras aceptado ese trabajo, ahora vivirías en Tokio.", condicion: "hubieras aceptado: causa pasada", resultado: "vivirías: resultado presente", lectura: "No aceptaste el trabajo y no vivís en Tokio." },
      { oracion: "Si no fuera tan impulsivo, no habría comprado eso ayer.", condicion: "no fuera: característica presente", resultado: "no habría comprado: resultado pasado", lectura: "Soy impulsivo y eso influyó en la compra." },
      { oracion: "Si hubiera aprendido a manejar antes, hoy tendría más libertad.", condicion: "hubiera aprendido: pasado", resultado: "tendría: presente", lectura: "No aprendí antes y hoy tengo menos libertad." },
      { oracion: "Si fuera más cuidadoso, no habría roto el celular.", condicion: "fuera: rasgo presente", resultado: "no habría roto: pasado", lectura: "Mi forma de ser explica un accidente pasado." },
    ],
    errores: [
      { incorrecto: "Mezclar porque suena avanzado.", correcto: "Mezclar porque la línea temporal lo exige.", explicacion: "Cada tiempo debe corresponder al momento real de la causa o del resultado." },
      { incorrecto: "Si habría aceptado, ahora viviría allí.", correcto: "Si hubiera aceptado, ahora viviría allí.", explicacion: "La condición pasada sigue usando pluscuamperfecto de subjuntivo." },
      { incorrecto: "Si fuera más atento, ayer no discutiría.", correcto: "Si fuera más atento, ayer no habría discutido.", explicacion: "El resultado pertenece a un pasado terminado y necesita condicional compuesto." },
    ],
    ejercicios: [
      { consigna: "Si hubiera aceptado la oferta, ahora ___ en Madrid. (trabajar)", respuesta: "trabajaría", explicacion: "Causa pasada y resultado presente." },
      { consigna: "Si no fuera tan distraído, no ___ las llaves ayer. (perder)", respuesta: "habría perdido", explicacion: "Estado presente y resultado pasado." },
      { consigna: "Si hubiéramos comprado esa casa, hoy ___ un jardín. (tener)", respuesta: "tendríamos", explicacion: "La compra es pasada; el jardín sería una realidad presente." },
      { consigna: "Si ella fuera más previsora, ___ el vuelo la semana pasada. (reservar)", respuesta: "habría reservado", explicacion: "El rasgo es presente y la reserva pertenece al pasado." },
    ],
    conversacion: [
      { pregunta: "¿Cómo sería tu vida hoy si hubieras nacido en otro país?", inicio: "Si hubiera nacido en otro país, hoy…" },
      { pregunta: "¿Qué habilidad pasada te daría más libertad hoy si la hubieras aprendido antes?", inicio: "Si hubiera aprendido…" },
      { pregunta: "¿Qué característica tuya explica una buena decisión que tomaste en el pasado?", inicio: "Si no fuera tan…, no habría…" },
      { pregunta: "Elegí una decisión pasada y conectala con una consecuencia que todavía existe.", inicio: "Si hubiera…, ahora…" },
    ],
  },
];

export const comparacionFinal = [
  { nombre: "Cero", realidad: "Real y regular", tiempo: "General o habitual", formula: "Si + presente → presente / imperativo", ejemplo: "Si cocino, limpio." },
  { nombre: "Primero", realidad: "Real y posible", tiempo: "Presente o futuro", formula: "Si + presente → futuro / presente / imperativo", ejemplo: "Si tengo tiempo, iré." },
  { nombre: "Segundo", realidad: "Hipotética o remota", tiempo: "Presente o futuro imaginado", formula: "Si + imperfecto de subjuntivo → condicional simple", ejemplo: "Si tuviera tiempo, iría." },
  { nombre: "Tercero", realidad: "Irreal y cerrada", tiempo: "Pasado alternativo", formula: "Si + pluscuamperfecto de subjuntivo → condicional compuesto", ejemplo: "Si hubiera tenido tiempo, habría ido." },
  { nombre: "Mixtos", realidad: "Irreal en dos tiempos", tiempo: "Pasado ↔ presente", formula: "Se combinan segundo y tercero según la línea temporal", ejemplo: "Si hubiera ido, ahora sabría la verdad." },
];

export const diagnostico = [
  { pregunta: "¿Es una relación que ocurre siempre o normalmente?", destino: "Condicional cero" },
  { pregunta: "¿La condición todavía puede cumplirse realmente?", destino: "Primer condicional" },
  { pregunta: "¿La situación es imaginaria, improbable o contraria al presente?", destino: "Segundo condicional" },
  { pregunta: "¿Imagino un pasado diferente que ya no puede cambiar?", destino: "Tercer condicional" },
  { pregunta: "¿La causa y la consecuencia están en tiempos diferentes?", destino: "Condicional mixto" },
];
