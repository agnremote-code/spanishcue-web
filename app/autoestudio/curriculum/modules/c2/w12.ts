import type { Module } from "../../types";

/**
 * C2 · semana 12 · Autoestudio espejo de G223 (ironía, lítotes y negación
 * pragmática). Repaso autónomo con la crítica gastronómica ficticia de un
 * restaurante del barrio Laureles, en Medellín: un pódcast, una reseña, los
 * comentarios de los lectores y la respuesta de la dueña. Audio mediante
 * síntesis; sin acreditación regional.
 */
export const c2w12: Module = {
  id: "c2-12",
  level: "c2",
  week: 12,
  kind: "core",
  title: "No está nada mal: leer entre líneas una reseña",
  subtitle: "Repaso de las lítotes, la negación que no niega, el alcance de la negación y la ironía verbal",
  stop: {
    place: "Medellín",
    country: "Colombia",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g223",
    "c2.voc.w12-mesa-y-critica",
    "c2.pron.w12-tono-ironico",
    "c2.lis.w12-podcast-resena",
    "c2.read.w12-critica-gastronomica",
    "c2.wri.w12-resena-equilibrada",
    "c2.spk.w12-respuesta-propietaria",
    "c2.fun.w12-leer-ironia",
    "c2.disc.w12-alcance-negacion",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo interpretar y usar lítotes, negaciones expletivas, términos de polaridad negativa e ironía verbal, controlar el alcance de una negación y decidir cuándo la ironía funciona y cuándo conviene evitarla.",
    steps: [
      "Repasa en la teoría las lítotes y sus grados, la negación que no niega, el alcance de la negación y las marcas de la ironía.",
      "Practica con frases de reseñas, comentarios de lectores y mensajes de la cocina de un restaurante de Medellín.",
      "Escucha a Mariana y a Julián comentar en su pódcast la visita al restaurante y lee la crítica publicada en la revista.",
      "Redacta una reseña equilibrada, revísala con la lista de control y responde en voz alta como si fueras la dueña del restaurante.",
    ],
  },
  theory: {
    intro: "En clase viste con tu profesor cómo el español dice menos para decir más, niega sin negar o dice lo contrario de lo que piensa. Aquí lo repasas con el material de una crítica gastronómica en Medellín, un género donde casi todo se dice entre líneas. Cada parte trae ejemplos nuevos, una tabla o los errores que más se repiten.",
    parts: [
      {
        heading: "Lítotes: negar lo contrario para afirmar con matiz",
        body: [
          "La lítote afirma algo negando su contrario. «La bandeja no es pequeña» significa que es grande, pero lo dice con una reserva que puede ser modestia, elegancia o ironía. Con «nada» o «ningún» la lítote se intensifica: «el postre no está nada mal» es un elogio claro y «no es ningún secreto que el chef viene de Bogotá» presenta algo como sabido por todos.",
          "Hay que distinguir dos construcciones que parecen simétricas. Negar un defecto («no es tonto») produce un elogio contenido: quiere decir que es listo. Negar una cualidad con «muy» («no es muy listo») produce una crítica atenuada: quiere decir que es más bien torpe. Lo mismo ocurre con «no está mal» frente a «no está muy bien». Si te equivocas de construcción, cambias el sentido del juicio.",
          "Tres fórmulas convierten la lítote en ironía, porque subrayan que la cualidad falta del todo: «no es precisamente barato», «no es lo que se dice rápido» y «no es muy amable que digamos». Las tres se usan cuando la realidad está muy lejos de la cualidad que se niega.",
        ],
        table: {
          caption: "Qué se entiende detrás de cada lítote",
          head: ["Frase", "Qué se entiende", "Tono"],
          rows: [
            ["El servicio no es lento.", "es bastante rápido", "elogio contenido"],
            ["El ajiaco no está nada mal.", "está muy bueno", "elogio claro"],
            ["El servicio no es muy rápido.", "es más bien lento", "crítica atenuada"],
            ["El local no es precisamente acogedor.", "es frío o incómodo", "crítica irónica"],
            ["La carta no es lo que se dice breve.", "es larguísima", "crítica irónica"],
            ["No es ningún secreto que…", "todo el mundo lo sabe", "presentación de lo sabido"],
          ],
        },
        mistakes: [
          {
            wrong: "«El mesero no es tonto» para decir que el mesero es torpe.",
            right: "«El mesero no es muy espabilado» para decir que es torpe.",
            why: "Negar el defecto elogia; para criticar con suavidad se niega la cualidad con «muy».",
          },
          {
            wrong: "El arroz no está nada bien, ¡me encantó!",
            right: "El arroz no está nada mal, ¡me encantó!",
            why: "«No está nada bien» es una crítica fuerte; el elogio se hace negando el defecto: «nada mal».",
          },
        ],
      },
      {
        heading: "La negación que no niega y la negación que sí",
        body: [
          "En algunos contextos aparece un «no» que no cambia el sentido de la frase: se llama negación expletiva. El caso más frecuente es «hasta que no + subjuntivo»: «no sirvas el postre hasta que (no) se enfríe la salsa». Las dos variantes son correctas y significan lo mismo; con «no» suena más natural cuando la oración principal también es negativa. Otro caso es la exclamación retórica de queja: «¡cuántas veces no te lo habré dicho!» equivale a «te lo he dicho muchísimas veces».",
          "No hay que confundir esa negación vacía con la negación plena que aparece detrás de los verbos de temor. «Temo que no lleguen los proveedores» significa que tienes miedo de que falten; «temo que lleguen» significa que su llegada te preocupa. Aquí el «no» cambia por completo el sentido.",
          "Con «por poco» el «no» también es opcional: «por poco (no) se quema el arroz» quiere decir que casi se quemó, pero no llegó a quemarse. Va normalmente en presente, aunque el hecho sea pasado.",
        ],
        examples: [
          { es: "No abrimos la terraza hasta que no pase el aguacero.", note: "Negación expletiva: equivale a «hasta que pase»." },
          { es: "¡Cuántas veces no le habrán pedido la receta!", note: "Exclamación de cantidad: se la han pedido muchísimas veces." },
          { es: "Me temo que no alcance el pescado para todos.", note: "Negación plena: el temor es que falte." },
          { es: "Por poco no llegamos a la reserva.", note: "Casi no llegamos, pero llegamos." },
        ],
        mistakes: [
          {
            wrong: "Temo que no llueva durante la cena en la terraza (queriendo decir que te preocupa la lluvia).",
            right: "Temo que llueva durante la cena en la terraza.",
            why: "Tras un verbo de temor el «no» es pleno: «temo que no llueva» expresa miedo a que falte la lluvia.",
          },
        ],
        tip: "Para saber si un «no» es expletivo, quítalo: si la frase dice lo mismo, era expletivo; si cambia, era una negación real.",
      },
      {
        heading: "Polaridad y alcance: qué niega exactamente la negación",
        body: [
          "Algunas expresiones solo funcionan en contextos negativos: «ni + sustantivo», «en absoluto», «lo más mínimo», «en mi vida», «para nada». Detrás del verbo necesitan un «no» delante («no me importa lo más mínimo»); delante del verbo, en cambio, lo sustituyen: «en mi vida he probado algo igual», «ni una queja recibimos». «Para nada» es muy frecuente en la conversación; en un texto formal se prefiere «en absoluto» o «de ningún modo».",
          "El alcance de la negación decide qué se niega. «No todos los platos llegaron fríos» significa que algunos sí llegaron fríos; «todos los platos no llegaron fríos» es ambiguo y conviene evitarlo. «No siempre» niega la regularidad, no el hecho. Y con una causa, «no cerró porque estuviera cansado» niega solo la causa (cerró, pero por otro motivo), mientras que «no cerró porque estaba cansado» niega el cierre y da la razón.",
          "La corrección tiene su propio conector. «No… sino» sustituye un elemento por otro («no es colombiana, sino venezolana»); delante de un verbo conjugado se usa «sino que» («no se disculpó, sino que subió el precio»). «No… pero» no corrige: añade un contraste compatible («no es barato, pero vale la pena»).",
        ],
        table: {
          caption: "Mismas palabras, alcance distinto",
          head: ["Frase", "Qué se niega", "Lo que queda afirmado"],
          rows: [
            ["No todos los meseros hablan inglés.", "la totalidad", "algunos sí lo hablan"],
            ["No siempre hay mesa los sábados.", "la regularidad", "a veces sí hay mesa"],
            ["No vino porque lo invitaran.", "la causa", "vino, por otro motivo"],
            ["No vino porque no lo invitaron.", "la venida", "no vino; la causa es la falta de invitación"],
            ["No es chef, sino panadero.", "un elemento, que se sustituye", "es panadero"],
            ["No es chef, pero cocina de maravilla.", "nada se corrige", "no es chef y cocina muy bien"],
          ],
        },
        mistakes: [
          {
            wrong: "No pidió perdón, sino subió los precios.",
            right: "No pidió perdón, sino que subió los precios.",
            why: "Delante de un verbo conjugado, la corrección se hace con «sino que».",
          },
          {
            wrong: "Me importa en absoluto lo que digan las reseñas.",
            right: "No me importa en absoluto lo que digan las reseñas.",
            why: "Detrás del verbo, «en absoluto» necesita un «no» delante.",
          },
        ],
      },
      {
        heading: "Ironía verbal: cómo se reconoce y cuándo evitarla",
        body: [
          "La ironía dice lo contrario de lo que se piensa y confía en que el oyente lo note. Algunas expresiones casi siempre son irónicas en ciertos contextos: «¡qué bien!» o «muy bonito» ante algo malo, «encima» para sumar una queja a otra, «¡lo que faltaba!» ante un problema añadido. Las comillas irónicas, en la escritura, marcan que el autor no asume la palabra: un «menú de autor» entre comillas sugiere que no lo es tanto.",
          "Para reconocer la ironía hay que mirar tres cosas: el contexto (¿encaja el elogio con lo que ha pasado?), la exageración (¿es desproporcionado?) y, en la oralidad, la entonación, que suele alargarse y subir de forma marcada. Si ninguna de las tres señales está presente, lee la frase en sentido literal.",
          "En la escritura profesional la ironía es arriesgada: el lector no oye el tono, puede tomarla al pie de la letra o sentirse ridiculizado. En una reseña de opinión puede funcionar una vez y bien marcada; en un correo a un cliente, una respuesta pública o una reclamación, conviene sustituirla por un dato y una valoración explícita.",
        ],
        examples: [
          { es: "Cuarenta minutos para traer la sopa, y encima tibia. ¡Muy bonito!", note: "«Encima» suma una queja; «muy bonito» invierte el elogio." },
          { es: "Nos ofrecieron el «maridaje especial»: una cerveza nacional.", note: "Comillas irónicas: el autor no asume la etiqueta." },
          { es: "Versión sin ironía: La sopa tardó cuarenta minutos y llegó tibia.", note: "Dato y valoración explícita, para un texto de reclamación." },
        ],
        tip: "Si una frase irónica perdería su sentido leída en voz alta por una voz sin expresión, no la uses en un correo profesional.",
      },
    ],
  },
  grammar: {
    intro: "Antes de responder, pregúntate qué afirma de verdad la frase, qué niega y si el «no» cambia algo.",
    exercises: [
      {
        id: "c2-12-gramatica-sentido",
        type: "context",
        prompt: "Lee el contexto y elige qué quiere decir de verdad quien habla.",
        items: [
          {
            context: "Una comensal sale del restaurante y le dice a su amiga, sonriendo: «Pues la bandeja paisa no está nada mal, ¿eh?».",
            q: "¿Qué opina de la bandeja?",
            options: [
              "Que es mediocre.",
              "Que está muy buena.",
              "Que no está buena en absoluto.",
            ],
            answer: 1,
            why: "Negar el defecto con «nada» produce un elogio claro.",
          },
          {
            context: "Después de esperar una hora y de pagar el doble de lo previsto, un cliente escribe: «El sitio no es precisamente barato».",
            q: "¿Qué transmite la frase?",
            options: [
              "Que el precio es razonable.",
              "Que el sitio es algo barato.",
              "Que es carísimo, con un tono irónico.",
            ],
            answer: 2,
            why: "«No es precisamente» marca que la cualidad falta del todo: lítote irónica.",
          },
          {
            context: "La jefa de cocina dice a un ayudante: «Tu compañero nuevo no es muy rápido, la verdad».",
            q: "¿Qué piensa del compañero nuevo?",
            options: [
              "Que es más bien lento, aunque lo dice con suavidad.",
              "Que es rapidísimo.",
              "Que nunca ha trabajado en una cocina.",
            ],
            answer: 0,
            why: "Negar la cualidad con «muy» es una crítica atenuada.",
          },
          {
            context: "El gerente comenta: «No contratamos a Sebastián porque fuera sobrino de la dueña».",
            q: "¿Qué dice sobre Sebastián?",
            options: [
              "Que no lo contrataron.",
              "Que lo contrataron, pero por otra razón.",
              "Que no es sobrino de la dueña.",
            ],
            answer: 1,
            why: "«No… porque + subjuntivo» niega solo la causa: lo contrataron por otro motivo.",
          },
        ],
      },
      {
        id: "c2-12-gramatica-huecos",
        type: "gap",
        prompt: "Completa con la palabra o expresión que falta. Fíjate en el alcance y en la posición de la negación.",
        items: [
          { q: "No se quejó del precio, ___ pidió hablar con la dueña para felicitarla.", answers: [["sino que"]], why: "Corrección delante de verbo conjugado." },
          { q: "La terraza no es grande, ___ tiene una vista preciosa sobre el barrio.", answers: [["pero"]], why: "Contraste compatible, sin corrección." },
          { q: "___ una servilleta nos trajeron en toda la noche.", answers: [["Ni", "ni"]], why: "Término de polaridad negativa delante del verbo: no hace falta «no»." },
          { q: "No me molesta ___ esperar si la comida vale la pena.", answers: [["lo más mínimo", "en absoluto", "para nada"]], why: "Detrás del verbo, con «no» delante." },
          { q: "No sirvas el café hasta que ___ terminen el postre. [negación expletiva]", answers: [["no"]], why: "«Hasta que no + subjuntivo» con principal negativa." },
          { q: "Por poco ___ se nos acaba el pan antes de las nueve. [negación opcional]", answers: [["no"]], why: "«Por poco (no)»: casi se acabó, pero no se acabó." },
        ],
      },
      {
        id: "c2-12-gramatica-clasificar",
        type: "classify",
        prompt: "¿El «no» de cada frase es expletivo (puede quitarse sin cambiar el sentido) o pleno (cambia el sentido)?",
        categories: ["Expletivo: no cambia el sentido", "Pleno: niega de verdad"],
        items: [
          { text: "No pagamos hasta que no nos traigan la cuenta correcta.", cat: 0, why: "«Hasta que (no)»: mismo sentido con o sin «no»." },
          { text: "Temo que no tengan mesa para ocho personas.", cat: 1, why: "Tras verbo de temor, el «no» cambia el contenido del miedo." },
          { text: "¡Cuántas veces no habré comido en esa esquina!", cat: 0, why: "Exclamación de cantidad: muchísimas veces." },
          { text: "No creo que abran el lunes festivo.", cat: 1, why: "Niega la creencia: el hablante piensa que no abrirán." },
          { text: "Por poco no me tropiezo con el mesero.", cat: 0, why: "Igual que «por poco me tropiezo»." },
          { text: "Me preocupa que no vuelva el cocinero de antes.", cat: 1, why: "El temor es que no vuelva." },
        ],
      },
      {
        id: "c2-12-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de negación o de corrección. Corrígelo.",
        items: [
          {
            sentence: "El restaurante no es una cafetería, sino tiene una carta de cocina tradicional.",
            answers: ["El restaurante no es una cafetería, sino que tiene una carta de cocina tradicional."],
            why: "Delante de verbo conjugado, «sino que».",
          },
          {
            sentence: "Me gustó en absoluto el servicio, fue impecable.",
            answers: ["Me gustó muchísimo el servicio, fue impecable.", "Me gustó mucho el servicio, fue impecable."],
            why: "«En absoluto» es de polaridad negativa: no puede intensificar una afirmación.",
          },
          {
            sentence: "En mi vida no he probado unas arepas tan buenas.",
            answers: ["En mi vida he probado unas arepas tan buenas.", "No he probado en mi vida unas arepas tan buenas."],
            why: "Delante del verbo, «en mi vida» sustituye al «no».",
          },
          {
            sentence: "Todos los platos no estaban calientes, pero casi todos sí.",
            answers: ["No todos los platos estaban calientes, pero casi todos sí."],
            why: "Para negar la totalidad sin ambigüedad, «no todos».",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de un restaurante, de la experiencia en la mesa y del género de la crítica.",
    groups: [
      {
        title: "En la mesa",
        items: [
          { es: "la bandeja paisa", note: "plato típico de Antioquia con fríjoles, arroz, carne, chicharrón, huevo, plátano y arepa" },
          { es: "el punto de la carne", note: "grado de cocción: jugoso, a punto, bien asado" },
          { es: "la sazón", note: "gusto que una persona da a la comida; también, su habilidad para cocinar" },
          { es: "la propina sugerida", note: "porcentaje que el local añade a la cuenta y que el cliente puede aceptar o no" },
          { es: "el mesero", note: "persona que atiende las mesas; en España, camarero" },
          { es: "la reserva", note: "mesa apartada a nombre de alguien para una hora concreta" },
        ],
      },
      {
        title: "La crítica y sus lectores",
        items: [
          { es: "la reseña", note: "texto breve que describe y valora un local, un libro o un espectáculo" },
          { es: "la relación calidad-precio", note: "equilibrio entre lo que se paga y lo que se recibe" },
          { es: "poner por las nubes", note: "elogiar muchísimo" },
          { es: "dejar mucho que desear", note: "ser claramente insuficiente" },
          { es: "leer entre líneas", note: "entender lo que un texto sugiere sin decirlo" },
          { es: "tomar al pie de la letra", note: "interpretar algo en su sentido literal" },
          { es: "el derecho de réplica", note: "posibilidad de responder públicamente a una crítica" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-12-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "la sazón", right: "gusto que una persona da a la comida" },
          { left: "la relación calidad-precio", right: "equilibrio entre lo que se paga y lo que se recibe" },
          { left: "poner por las nubes", right: "elogiar muchísimo" },
          { left: "dejar mucho que desear", right: "ser claramente insuficiente" },
          { left: "tomar al pie de la letra", right: "interpretar algo en su sentido literal" },
          { left: "el derecho de réplica", right: "posibilidad de responder públicamente a una crítica" },
        ],
      },
      {
        id: "c2-12-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["leer entre líneas", "punto de la carne", "propina sugerida", "deja mucho que desear"],
        items: [
          { q: "La comida es excelente, pero el servicio ___: nadie nos trajo la carta en veinte minutos.", answers: [["deja mucho que desear"]] },
          { q: "Pedí el lomo jugoso y el ___ fue perfecto.", answers: [["punto de la carne"]] },
          { q: "En la cuenta venía incluida una ___ del diez por ciento.", answers: [["propina sugerida"]] },
          { q: "La reseña parece amable, pero si sabes ___ ves que el crítico salió decepcionado.", answers: [["leer entre líneas"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Lítotes que se oyen: elogio contenido, crítica atenuada e ironía",
    explanation: [
      "Cuando escuchas una lítote, la palabra que decide el sentido suele ser pequeña: «nada», «muy», «precisamente», «que digamos». «No está nada mal» y «no está muy bien» se parecen mucho al oído, pero la primera elogia y la segunda critica. Acostúmbrate a escuchar la palabra que va entre el «no» y el adjetivo.",
      "La ironía oral suele ir acompañada de una entonación marcada: las vocales tónicas se alargan, el tono sube más de lo normal y el ritmo se hace más lento, como en «¡qué bieeen!». Esa entonación no es obligatoria, y la ironía seca, sin cambios de voz, también existe; por eso el contexto sigue siendo la señal más fiable.",
      "El audio utiliza la síntesis disponible en el navegador, que no reproduce bien la entonación irónica. Úsalo para distinguir las palabras de las lítotes y ensaya la entonación con una persona.",
    ],
    table: {
      caption: "La palabra que decide el sentido",
      head: ["Frase", "Palabra clave", "Sentido"],
      rows: [
        ["No está nada mal.", "nada", "elogio"],
        ["No está muy bien.", "muy", "crítica suave"],
        ["No es precisamente barato.", "precisamente", "crítica irónica"],
        ["No es muy generoso que digamos.", "que digamos", "crítica irónica"],
      ],
    },
    perceive: {
      id: "c2-12-percepcion",
      type: "listen",
      prompt: "Escucha cada frase antes de leer las opciones y decide si quien habla elogia o critica.",
      items: [
        {
          q: "¿Elogia o critica?",
          options: ["Elogia el plato.", "Critica el plato."],
          answer: 0,
          why: "«No está nada mal» niega el defecto con intensidad: elogio.",
          audio: "El sancocho de la casa no está nada mal.",
          voice: "es-CO-f",
        },
        {
          q: "¿Elogia o critica?",
          options: ["Elogia el plato.", "Critica el plato."],
          answer: 1,
          why: "«No está muy bien» niega la cualidad con «muy»: crítica atenuada.",
          audio: "El sancocho de la casa no está muy bien hoy.",
          voice: "es-CO-m",
        },
        {
          q: "¿Qué palabra marca la ironía?",
          options: ["lo que se dice", "precisamente", "que digamos"],
          answer: 2,
          why: "La frase termina con «que digamos», que marca la lítote irónica.",
          audio: "El mesero no fue muy simpático que digamos.",
          voice: "es-CO-f",
        },
        {
          q: "¿Qué opina sobre la espera?",
          options: ["Que fue cortísima.", "Que fue larguísima."],
          answer: 1,
          why: "«No fue lo que se dice corta» es una lítote irónica: fue muy larga.",
          audio: "La espera no fue lo que se dice corta.",
          voice: "es-AR-m",
        },
      ],
    },
    produce: [
      { text: "La arepa de chócolo no está nada mal.", tip: "Acentúa «nada» y termina con un descenso tranquilo: elogio contenido.", voice: "es-CO-f" },
      { text: "La música no estaba muy baja que digamos.", tip: "Alarga ligeramente «baja» y deja caer «que digamos» en tono bajo.", voice: "es-CO-m" },
      { text: "¡Una hora esperando y encima nos cobran el agua! ¡Lo que faltaba!", tip: "Sube el tono en «encima» y en «faltaba»: queja acumulada.", voice: "es-CO-f" },
      { text: "No pidió disculpas, sino que nos cobró el postre.", tip: "Marca una pausa breve antes de «sino que».", voice: "es-CO-m" },
    ],
    spelling: "En la escritura, la ironía se marca a veces con comillas («menú de autor») o con signos de exclamación. No uses la cursiva para lo mismo en un texto que ya usa la cursiva para títulos o extranjerismos.",
  },
  listening: {
    title: "Pódcast: la noche en el Fogón de Laureles",
    context: "Mariana y Julián presentan un pódcast de gastronomía en Medellín. En este episodio comentan la cena en un restaurante nuevo del barrio Laureles y leen algunos comentarios de sus oyentes. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "m", name: "Mariana", voice: "es-CO-f", role: "Presentadora y crítica" },
      { id: "j", name: "Julián", voice: "es-CO-m", role: "Copresentador" },
    ],
    script: [
      { speaker: "m", text: "Bueno, Julián, empecemos por lo bueno, que lo hay. La bandeja del Fogón de Laureles no está nada mal. Los fríjoles tenían una sazón de casa y el chicharrón, crocante sin estar seco. No es ningún secreto que doña Gloria cocinó treinta años en Envigado antes de abrir aquí." },
      { speaker: "j", text: "Totalmente. Ahora, el servicio no fue lo que se dice rápido. Nos sentamos a las ocho y la sopa llegó a las ocho y cuarenta. Y encima, tibia. Yo, cuando la vi, solo dije: ¡qué maravilla!, y el mesero se lo tomó al pie de la letra y me dio las gracias." },
      { speaker: "m", text: "Ese es el problema de la ironía, que no todo el mundo la capta. Pero seamos justos: no todos los platos llegaron tarde. Las empanadas salieron enseguida, y el jugo de lulo estaba buenísimo." },
      { speaker: "j", text: "Es verdad. Y el precio no es precisamente de barrio, pero tampoco es de los restaurantes de El Poblado. Diría que la relación calidad-precio es razonable, siempre que no tengas prisa." },
      { speaker: "m", text: "Leamos algunos comentarios. Andrés escribe: «Fui el sábado y en mi vida he comido un chicharrón igual». Eso no deja lugar a dudas. Y Camila dice: «La atención no fue muy cálida que digamos; no volvimos porque nos atendieran mal, sino porque mi mamá quería repetir el postre»." },
      { speaker: "j", text: "Ojo con esa frase, que tiene truco. Camila sí volvió. Lo que niega es la razón: no volvió por la atención, sino por el postre de su mamá." },
      { speaker: "m", text: "Exacto. Ahora, la pregunta que nos hacen varios oyentes: ¿vamos a escribir la reseña con este tono? Yo creo que no. En el pódcast nos oyen la voz y saben cuándo bromeamos. En la revista, un «¡qué maravilla!» sobre una sopa tibia lo puede leer cualquiera como un elogio, o peor, como una burla a los meseros." },
      { speaker: "j", text: "Estoy de acuerdo. En la reseña, la sopa tardó cuarenta minutos y llegó tibia, y punto. Una lítote, tal vez: el servicio todavía no está a la altura de la cocina. Pero nada de comillas burlonas." },
      { speaker: "m", text: "Y no publicamos nada hasta que no hablemos con doña Gloria. Me temo que no sepa que la cocina va tan lenta los viernes. Merece la oportunidad de explicarlo." },
      { speaker: "j", text: "Por poco no se me olvida: el postre de natas. Eso sí, ni una palabra mala. Y la próxima vez vamos un martes, a ver si la cocina va más tranquila." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha el episodio completo sin abrir la transcripción. ¿Cuál es la valoración general y qué deciden sobre la reseña escrita?",
        exercise: {
          id: "c2-12-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la valoración y la decisión principal.",
          items: [
            {
              q: "¿Cuál es la valoración general del restaurante?",
              options: [
                "Comida muy buena y servicio lento.",
                "Comida mediocre y servicio excelente.",
                "Todo malo, salvo el postre.",
              ],
              answer: 0,
              why: "Elogian la sazón y critican la espera y la sopa tibia.",
            },
            {
              q: "¿Qué deciden sobre el tono de la reseña escrita?",
              options: [
                "Mantener las bromas del pódcast para que sea divertida.",
                "No publicar ninguna crítica negativa.",
                "Evitar la ironía y dar los datos con una valoración explícita.",
              ],
              answer: 2,
              why: "Mariana explica que en la revista la ironía puede malinterpretarse.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y fíjate en los detalles. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-12-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles del episodio.",
          items: [
            {
              q: "¿Qué pasó cuando Julián dijo «¡qué maravilla!»?",
              options: [
                "El mesero se disculpó por la sopa.",
                "El mesero lo entendió como un elogio y le dio las gracias.",
                "El mesero le cambió la sopa.",
              ],
              answer: 1,
              why: "Se lo tomó al pie de la letra: no captó la ironía.",
            },
            {
              q: "¿Qué dice en realidad el comentario de Camila?",
              options: [
                "Que no volvió al restaurante.",
                "Que volvió porque la atendieron muy bien.",
                "Que volvió, pero por el postre y no por la atención.",
              ],
              answer: 2,
              why: "«No volvimos porque…, sino porque…» niega la causa, no la vuelta.",
            },
            {
              q: "¿Por qué quieren hablar con doña Gloria antes de publicar?",
              options: [
                "Porque temen que no sepa que la cocina va lenta los viernes.",
                "Porque quieren pedirle una invitación.",
                "Porque doña Gloria les pidió revisar el texto.",
              ],
              answer: 0,
              why: "Mariana usa «me temo que no sepa»: negación plena tras verbo de temor.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cómo funcionan las negaciones del episodio. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-12-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con lo que hace la negación.",
          pairs: [
            { left: "no está nada mal", right: "lítote de elogio" },
            { left: "no fue lo que se dice rápido", right: "lítote irónica de crítica" },
            { left: "no todos los platos llegaron tarde", right: "niega la totalidad: algunos sí" },
            { left: "hasta que no hablemos con doña Gloria", right: "negación expletiva" },
            { left: "en mi vida he comido", right: "término negativo delante del verbo, sin «no»" },
          ],
          why: "Cada negación hace un trabajo distinto: elogiar, criticar, acotar, no negar nada o sustituir al «no».",
        },
      },
    ],
  },
  reading: {
    title: "Fogón de Laureles: la sazón no espera, la cocina sí",
    genre: "Crítica gastronómica en una revista de la ciudad",
    frame: "Reseña de Mariana Restrepo para una revista cultural de Medellín, publicada después del episodio del pódcast. Restaurante, personas y precios son ficticios.",
    text: [
      "No es ningún secreto que en Laureles abren y cierran restaurantes al ritmo de las lluvias de abril. Por eso, cuando un local nuevo se presenta sin cartel luminoso, sin mesas de diseño y con una carta escrita a mano, la tentación es pasar de largo. Sería un error. El Fogón de Laureles, que doña Gloria Zapata abrió en marzo después de treinta años cocinando en Envigado, no es un sitio para hacerse fotos, sino para comer bien, y en eso cumple con creces.",
      "Empecemos por la cocina, que es lo que importa. La bandeja paisa no está nada mal, y lo digo con la prudencia de quien ha probado cientos. Los fríjoles tienen la textura espesa de las ollas que se dejan al fuego toda la mañana, el chicharrón cruje sin estar seco y la arepa, pequeña y tostada, no es un simple acompañamiento. Las empanadas llegan enseguida y calientes, con un ají que no pica lo más mínimo, para quien lo prefiera así, y un jugo de lulo que no necesita azúcar añadido. En mi vida he probado un postre de natas tan equilibrado: dulce sin empalagar y con la corteza justa.",
      "El servicio, en cambio, no está todavía a la altura de la cocina. En nuestra visita, un viernes por la noche, la sopa del día tardó cuarenta minutos y llegó tibia. No todos los platos se retrasaron, y el personal fue amable en todo momento, pero la espera entre el primero y el segundo resultó demasiado larga para un local de dieciocho mesas. No creo que el problema sea de actitud. Todo apunta, más bien, a una cocina pequeña que no da abasto cuando el comedor se llena, algo que doña Gloria nos confirmó después por teléfono y que, según nos dijo, piensa resolver con un segundo ayudante antes de fin de mes.",
      "Los precios no son de barrio, pero tampoco de los restaurantes de moda del sur de la ciudad. Una bandeja cuesta algo más de lo que costaría en un corrientazo, y la diferencia se justifica en el plato. La propina sugerida, del diez por ciento, aparece en la cuenta, y el mesero preguntó si queríamos incluirla, algo que no siempre ocurre y que conviene destacar.",
      "Una palabra sobre el ambiente. El comedor no es grande ni especialmente luminoso, sino más bien una sala de casa con paredes de ladrillo y fotos de familia. Habrá a quien le parezca poco sofisticado; a mí me pareció honesto. No es un lugar para una cena de negocios ni para impresionar a nadie, pero tampoco lo pretende. Quien busque música en vivo o una carta de vinos extensa no la encontrará: hay tres tintos y una cerveza artesanal de Rionegro.",
      "Mis oyentes me preguntan a menudo si conviene escribir las críticas con ironía. En el pódcast, donde se oye la voz, una broma sobre una sopa tibia se entiende como broma. En una página impresa, la misma frase puede leerse como elogio, como burla o como desprecio hacia quien trabaja en la sala, y ninguna de esas lecturas me interesa. Por eso en esta reseña los datos van sin adornos: cuarenta minutos, sopa tibia, dieciocho mesas, un solo ayudante. Que cada lector saque sus conclusiones.",
      "La mía es sencilla. No volvería al Fogón de Laureles porque sea barato ni porque esté de moda, sino porque pocas cocinas de la ciudad tienen esta sazón. Volvería, eso sí, un martes o un miércoles, sin prisa y con hambre, y no pediría la cuenta hasta que no hubiera probado el postre de natas. Le pongo un ocho a la cocina y un cinco al servicio, con la esperanza de que en la próxima visita esa distancia se haya acortado.",
    ],
    glossary: [
      { es: "corrientazo", note: "menú del día barato en Colombia, con sopa, plato principal y bebida" },
      { es: "no dar abasto", note: "no ser suficiente para atender todo lo que se necesita" },
      { es: "lulo", note: "fruta ácida muy usada en jugos en Colombia" },
    ],
    tasks: [
      {
        id: "c2-12-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la valoración de la crítica.",
        items: [
          {
            q: "¿Qué dice la autora sobre el problema del servicio?",
            options: [
              "Que los meseros son antipáticos.",
              "Que parece un problema de capacidad de la cocina, no de actitud.",
              "Que doña Gloria no sabe organizar el comedor.",
            ],
            answer: 1,
            why: "El tercer párrafo lo atribuye a una cocina pequeña que no da abasto.",
          },
          {
            q: "¿Por qué decidió no usar la ironía en la reseña escrita?",
            options: [
              "Porque en el papel la ironía puede leerse como elogio, burla o desprecio.",
              "Porque la revista prohíbe las bromas.",
              "Porque doña Gloria se lo pidió.",
            ],
            answer: 0,
            why: "El sexto párrafo explica que sin la voz la ironía se malinterpreta.",
          },
          {
            q: "¿Qué afirma la frase «No volvería porque sea barato ni porque esté de moda, sino porque…»?",
            options: [
              "Que no volvería al restaurante.",
              "Que el restaurante es barato y está de moda.",
              "Que volvería, y que la razón es la sazón.",
            ],
            answer: 2,
            why: "Niega dos causas posibles y las corrige con «sino porque»: la vuelta se mantiene.",
          },
        ],
      },
      {
        id: "c2-12-lectura-negacion",
        type: "match",
        prompt: "Relaciona cada fragmento de la reseña con lo que hace la negación.",
        pairs: [
          { left: "no es un sitio para hacerse fotos, sino para comer bien", right: "corrige un elemento por otro" },
          { left: "un ají que no pica lo más mínimo", right: "término de polaridad negativa tras el verbo" },
          { left: "no está todavía a la altura de la cocina", right: "crítica atenuada sin ironía" },
          { left: "no pediría la cuenta hasta que no hubiera probado el postre", right: "negación expletiva" },
          { left: "No es ningún secreto que en Laureles", right: "presenta algo como sabido por todos" },
        ],
      },
      {
        id: "c2-12-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa una decisión de la reseña con argumentos propios.",
        items: [
          {
            prompt: "La autora dice que en la reseña los datos van «sin adornos» para que cada lector saque sus conclusiones. Explica en 70–90 palabras si esa decisión es realmente neutral o si los datos elegidos también transmiten una opinión.",
            model: "La decisión parece neutral, pero no lo es del todo. Elegir qué datos se dan ya es una forma de opinar: «cuarenta minutos» y «sopa tibia» orientan al lector hacia una crítica del servicio, aunque no haya adjetivos. Aun así, la autora es más justa que con la ironía, porque el lector puede comprobar los datos y no tiene que adivinar el tono. Además, compensa la crítica con la explicación de la dueña.",
            checklist: [
              "Tomo posición sobre la neutralidad de los datos.",
              "Explico que la selección también comunica.",
              "Comparo la estrategia con la ironía.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la autora gradúa el elogio y la crítica sin recurrir a la ironía.",
      items: [
        { quote: "La bandeja paisa no está nada mal, y lo digo con la prudencia de quien ha probado cientos.", note: "Lítote de elogio, justificada para que no parezca tibia." },
        { quote: "No todos los platos se retrasaron, y el personal fue amable en todo momento", note: "El alcance de la negación limita la crítica: no todos." },
        { quote: "No creo que el problema sea de actitud.", note: "Negación de la creencia con subjuntivo, para proteger a los meseros." },
        { quote: "El comedor no es grande ni especialmente luminoso, sino más bien una sala de casa", note: "«No… ni…, sino» corrige la expectativa con una descripción positiva." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, interpretación en contexto, reformulación y escritura breve. Termina recuperando clases anteriores que preparan esta semana.",
    exercises: [
      {
        id: "c2-12-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases con negación pragmática.",
        items: [
          {
            words: ["El", "ajiaco", "no", "estaba", "muy", "caliente", "que", "digamos."],
            why: "Lítote irónica con «que digamos» al final.",
          },
          {
            words: ["No", "es", "un", "bar,", "sino", "una", "fonda", "familiar."],
            why: "Corrección con «no… sino».",
          },
          {
            words: ["Ni", "un", "solo", "plato", "volvió", "a", "la", "cocina."],
            why: "«Ni» delante del verbo sustituye al «no».",
          },
        ],
      },
      {
        id: "c2-12-ironia-contexto",
        type: "context",
        prompt: "Decide si la frase es literal o irónica según el contexto.",
        items: [
          {
            context: "El mesero tira un vaso de jugo sobre la camisa blanca de un cliente, que ya llevaba media hora esperando. El cliente dice: «¡Perfecto, lo que me faltaba!».",
            q: "¿Cómo se interpreta?",
            options: [
              "Literal: está satisfecho.",
              "Irónica: el accidente se suma a la espera.",
              "Literal: le faltaba un jugo.",
            ],
            answer: 1,
            why: "«Lo que faltaba» ante un problema añadido es casi siempre irónico.",
          },
          {
            context: "Una pareja celebra su aniversario. Les sirven a tiempo, la comida es excelente y la dueña les regala el postre. Ella dice: «¡Qué bien nos han tratado!».",
            q: "¿Cómo se interpreta?",
            options: [
              "Literal: el trato fue bueno.",
              "Irónica: el trato fue malo.",
              "Irónica: el postre era malo.",
            ],
            answer: 0,
            why: "Ni el contexto ni la exageración señalan ironía: lectura literal.",
          },
          {
            context: "En un correo a la dirección, un cliente escribe: «Su “servicio exprés” tardó cincuenta minutos en traer dos cafés».",
            q: "¿Qué hacen las comillas alrededor de «servicio exprés»?",
            options: [
              "Citan con respeto el nombre oficial del servicio.",
              "Indican que el cliente no conoce la expresión.",
              "Marcan que el cliente no asume la etiqueta porque no corresponde a la realidad.",
            ],
            answer: 2,
            why: "Comillas irónicas: la etiqueta contradice los cincuenta minutos.",
          },
        ],
      },
      {
        id: "c2-12-reformular",
        type: "transform",
        prompt: "Reformula cada frase según la instrucción, sin cambiar lo que se quiere decir.",
        items: [
          {
            source: "El postre es muy bueno.",
            instruction: "Exprésalo con una lítote de elogio que use «nada».",
            answers: ["El postre no está nada mal.", "El postre no es nada malo."],
            why: "Negar el defecto con «nada» produce un elogio claro.",
          },
          {
            source: "¡Qué servicio tan rápido! (dicho después de una hora de espera)",
            instruction: "Quita la ironía y escribe el dato con una valoración explícita, para un correo de reclamación.",
            answers: ["El servicio fue muy lento: esperamos una hora.", "Esperamos una hora: el servicio fue muy lento."],
            why: "En un texto profesional, dato y valoración explícita sustituyen a la ironía.",
          },
          {
            source: "El restaurante es carísimo.",
            instruction: "Exprésalo con una lítote irónica con «precisamente».",
            answers: ["El restaurante no es precisamente barato."],
            why: "«No es precisamente + cualidad contraria» marca que la cualidad falta del todo.",
          },
        ],
      },
      {
        id: "c2-12-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe tres frases (40–60 palabras en total) sobre una cafetería que conozcas: una con lítote de elogio, otra con lítote de crítica atenuada y otra con «no… sino que». Indica entre paréntesis qué hace cada una.",
            model: "El café de especialidad no está nada mal (elogio contenido). Las sillas no son muy cómodas, la verdad (crítica atenuada). Cuando se equivocaron con mi pedido, el barista no se limitó a disculparse, sino que me invitó a otro café (corrección con «sino que» ante verbo conjugado).",
            checklist: [
              "Diferencio la lítote de elogio de la de crítica.",
              "Uso «sino que» delante de un verbo conjugado.",
              "Explico qué hace cada frase.",
            ],
          },
          {
            prompt: "Un cliente escribió en una plataforma: «Excelente experiencia: solo tardaron una hora en tomarnos el pedido. Volveremos… dentro de diez años». Escribe en 50–70 palabras la respuesta de la dueña, sin ironía, reconociendo el problema.",
            model: "Gracias por contarnos su experiencia, y lamentamos de verdad la espera. Una hora para tomar el pedido no es aceptable. Ese viernes nos faltó una persona en la sala y no supimos reorganizarnos a tiempo. Ya hemos incorporado a un nuevo mesero para los fines de semana. Si nos da otra oportunidad, nos encantaría invitarle al postre.",
            checklist: [
              "No respondo con ironía a la ironía.",
              "Reconozco el dato concreto y explico la causa.",
              "Propongo una solución y dejo la puerta abierta.",
            ],
          },
        ],
      },
      {
        id: "c2-12-recuperacion",
        type: "open",
        prompt: "Recupera clases anteriores que preparan esta semana con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G072 (doble negación, A2). Estímulo: «Nadie no vino a la inauguración» y «No vino nadie a la inauguración». Di cuál es correcta y reescribe la incorrecta de dos maneras.",
            model: "La correcta es «No vino nadie a la inauguración». La otra es incorrecta porque «nadie» delante del verbo ya niega y no admite «no». Se puede decir «Nadie vino a la inauguración» o «No vino nadie a la inauguración».",
            checklist: [
              "Identifico la frase incorrecta.",
              "Explico la regla de posición de «nadie».",
            ],
          },
          {
            prompt: "Recuperación de la clase G191 (atenuación, C1). Estímulo: «La reseña es injusta». Atenúa la crítica con una lítote y con un limitador de alcance, para decírsela a la autora.",
            model: "Con lítote: «La reseña no es del todo justa con el servicio». Con limitador de alcance: «Hasta cierto punto, la reseña es injusta con los meseros». La lítote rebaja la fuerza y el limitador acota la crítica a una parte.",
            checklist: [
              "Uso una lítote de crítica atenuada.",
              "Uso un limitador como «hasta cierto punto» o «en parte».",
            ],
          },
          {
            prompt: "Recuperación de la clase G196 (interrogativas retóricas, C1). Estímulo: «¿Quién va a esperar cuarenta minutos por una sopa?». Explica qué afirma en realidad la pregunta y reescríbela como afirmación para la reseña.",
            model: "La pregunta no busca respuesta: afirma que nadie debería esperar cuarenta minutos por una sopa. Como afirmación para la reseña: «Cuarenta minutos de espera por una sopa son demasiados para cualquier cliente».",
            checklist: [
              "Explico el valor afirmativo de la pregunta.",
              "La afirmación conserva la crítica sin la pregunta.",
            ],
          },
          {
            prompt: "Recuperación de la clase G218 (perífrasis de ironía, semana 9). Estímulo: «Se puso a cocinar para cuarenta y acabó sirviendo sopa fría a todos». Explica qué aporta «acabó sirviendo» y si lo usarías en la reseña.",
            model: "«Acabar + gerundio» presenta el resultado como el desenlace inesperado y algo lamentable de un proceso. Aporta un matiz crítico y algo irónico. En la reseña no lo usaría: preferiría el dato, «la sopa llegó tibia», para no burlarme de la cocina.",
            checklist: [
              "Explico el valor de desenlace de la perífrasis.",
              "Decido sobre su uso en un texto público y lo justifico.",
            ],
          },
          {
            prompt: "Recuperación de la clase G221 (modalización sutil, semana 11). Estímulo: «La cocina es lenta porque la dueña no quiere contratar a nadie». Reformúlala ajustando el compromiso a lo que se sabe: solo consta que hay un ayudante.",
            model: "«Consta que la cocina tiene un solo ayudante, y todo indica que eso explica la espera. Nada indica, en cambio, que la dueña no quiera contratar a nadie». Separo el dato, la inferencia y lo que no tiene base.",
            checklist: [
              "Distingo dato e inferencia con fórmulas distintas.",
              "Uso subjuntivo tras «nada indica que».",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta una reseña equilibrada de un restaurante, real o imaginado, para una revista de tu ciudad (400–520 palabras). Debe valorar la comida, el servicio, los precios y el ambiente, graduar elogios y críticas con lítotes bien elegidas, controlar el alcance de cada negación y usar la ironía como mucho una vez y bien marcada.",
    context: "La revista la leen personas que quieren decidir dónde comer y también los dueños de los locales, que tienen derecho de réplica. Cada crítica debe apoyarse en un dato; cada elogio, en algo concreto. Puedes basarte en el Fogón de Laureles o en otro lugar.",
    steps: [
      "Haz dos listas: lo que elogiarás y lo que criticarás, cada cosa con un dato concreto.",
      "Decide qué lítotes usarás para graduar cada valoración y dónde una negación con «no todos» o «no siempre» hará la crítica más justa.",
      "Redacta sin copiar el modelo. Incluye al menos una lítote de elogio, una de crítica atenuada, una corrección con «no… sino (que)» y un término de polaridad negativa.",
      "Revisa la reseña con la lista de control: corrige cualquier lítote que diga lo contrario de lo que quieres, comprueba el alcance de las negaciones y elimina la ironía que no se entienda sin la voz.",
    ],
    useLanguage: [
      "no está nada mal / no es ningún secreto que",
      "no es muy… / no está todavía a la altura de…",
      "no todos / no siempre",
      "no es…, sino… / no se limitó a…, sino que…",
      "en mi vida he… / no… lo más mínimo",
      "no volvería porque…, sino porque…",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): No es ningún secreto que en el centro de la ciudad es difícil comer bien por poco dinero. La Cuchara de Ana, una fonda de doce mesas junto al mercado, no pretende cambiar esa regla, sino demostrar que tiene excepciones. Su menú del día no está nada mal: una sopa de verduras con el punto justo de sal, un guiso de res que se deshace con el tenedor y un postre casero que cambia cada semana. No todo es igual de redondo, pero lo que falla, como se verá, no es la cocina.",
    ],
    checklist: [
      "Cada lítote dice lo que quiero: elogio o crítica, sin confusión.",
      "Cada crítica se apoya en un dato concreto.",
      "Las negaciones tienen el alcance que pretendo («no todos», «no siempre», «no… porque»).",
      "Uso «sino» y «sino que» correctamente.",
      "La ironía aparece como mucho una vez y se entiende sin la voz.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "La llamada de doña Gloria",
        prompt: "Eres doña Gloria, la dueña del restaurante. Llamas a la crítica después de leer la reseña. Agradece lo que valoró, reconoce el problema del servicio sin ironía, explica qué vas a cambiar y aclara un dato que te parece injusto. Habla al menos cuatro minutos, como si respondieras a sus preguntas.",
        prep: [
          "Prepara una apertura que agradezca sin exagerar.",
          "Decide qué dato quieres matizar y con qué negación lo harás («no todos», «no siempre»).",
          "Ten pensada una propuesta concreta para que vuelva.",
        ],
        seconds: 240,
        model: "Mariana, buenas tardes, le habla Gloria Zapata, del Fogón. Primero quería darle las gracias, porque lo de la sazón me llegó al alma. Y tiene razón con la espera: ese viernes no dimos abasto. Ahora, una cosita: no es que los meseros fueran lentos, sino que la cocina no les sacaba los platos. No siempre pasa, pero los viernes sí. Ya contratamos a un segundo ayudante…",
        selfCheck: [
          "Reconozco el problema sin ironía.",
          "Matizo con una negación de alcance preciso.",
          "Propongo algo concreto.",
        ],
      },
      {
        title: "Explicar una lítote a un amigo",
        prompt: "Un amigo extranjero lee la reseña y entiende que «el servicio no está todavía a la altura de la cocina» es un elogio. Explícale qué significa, compáralo con «no está nada mal» y dale dos ejemplos de cada tipo.",
        prep: [
          "Prepara la diferencia entre negar un defecto y negar una cualidad.",
          "Elige ejemplos de tu propia experiencia.",
        ],
        seconds: 150,
        model: "Mira, aquí no te está elogiando el servicio. Cuando dices que algo no está a la altura, niegas una cualidad: o sea, el servicio es peor que la cocina. En cambio, «no está nada mal» niega un defecto, y eso es un elogio. Por ejemplo…",
        selfCheck: [
          "Explico la diferencia entre los dos tipos de lítote.",
          "Doy ejemplos claros de cada uno.",
        ],
      },
      {
        title: "Del pódcast a la reunión",
        prompt: "Cuenta en voz alta tu última comida fuera dos veces: primero como en un pódcast entre amigos, con alguna ironía bien entonada, y después como si informaras a la responsable de un local, sin ironía.",
        prep: [
          "Marca dónde pondrás la ironía en la primera versión.",
          "Busca el dato que la sustituye en la segunda.",
        ],
        seconds: 120,
        selfCheck: [
          "La ironía de la primera versión se reconoce por el contexto y la entonación.",
          "La segunda versión da el mismo contenido con datos y valoración explícita.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu reseña y una lista de lítotes que hayas encontrado. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Interpreta",
        task: "Lee a tu profesor cuatro lítotes de tu reseña sin decir si son elogio o crítica y comprueba si las interpreta como querías.",
        phrases: ["¿Lo has entendido como elogio o como crítica?", "¿Suena demasiado suave?"],
      },
      {
        move: "Detecta",
        task: "Pídele a tu profesor que te diga tres frases, algunas irónicas y otras literales, y explica qué señal te ha permitido distinguirlas.",
        phrases: ["Me ha parecido irónica por el contexto…", "Por la entonación diría que…"],
      },
      {
        move: "Corrige",
        task: "Lleva dos frases con «no… porque» y pide a tu profesor que diga qué niega cada una: el hecho o la causa.",
        phrases: ["¿Aquí niego que lo hiciera o solo el motivo?"],
      },
      {
        move: "Debate",
        task: "Defiende o critica la decisión de la autora de no usar ironía en la reseña escrita.",
        phrases: ["No digo que la ironía sobre, sino que…", "En un texto impreso, no siempre…"],
      },
    ],
    bring: "Tu reseña revisada, tu lista de lítotes con su sentido y, si quieres, la grabación de la llamada de doña Gloria.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué frase es un elogio?",
        options: [
          "El pescado no estaba muy fresco.",
          "El pescado no estaba precisamente fresco.",
          "El pescado no estaba nada mal.",
        ],
        answer: 2,
        why: "«No estaba nada mal» niega el defecto con intensidad.",
      },
      {
        type: "choice",
        q: "«No todos los clientes dejaron propina». ¿Qué se deduce?",
        options: [
          "Que algunos clientes sí dejaron propina.",
          "Que ningún cliente dejó propina.",
          "Que todos los clientes dejaron propina.",
        ],
        answer: 0,
        why: "«No todos» niega la totalidad: algunos sí.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué dice sobre el cocinero?",
        options: [
          "Que no lo contrataron.",
          "Que lo contrataron por otra razón.",
          "Que era famoso.",
        ],
        answer: 1,
        why: "«No… porque + subjuntivo» niega solo la causa.",
        audio: "No contratamos al cocinero porque fuera famoso, sino porque su sazón nos convenció.",
        voice: "es-CO-m",
      },
      {
        type: "gap",
        q: "El local no es un restaurante de lujo, ___ cuida cada detalle de la mesa.",
        answers: [["pero"]],
        hint: "No se corrige nada: se añade un contraste compatible con lo anterior.",
        why: "«No… pero» introduce un contraste sin sustituir.",
      },
      {
        type: "gap",
        q: "No se limitaron a cambiar el plato, ___ nos invitaron a la cena.",
        answers: [["sino que"]],
        hint: "Corrección delante de un verbo conjugado.",
        why: "«Sino que» antes de verbo conjugado.",
      },
      {
        type: "transform",
        source: "Nos atendió una mesera muy antipática.",
        instruction: "Exprésalo con una lítote irónica que termine en «que digamos».",
        answers: ["La mesera que nos atendió no fue muy simpática que digamos.", "La mesera no fue muy simpática que digamos."],
        why: "Lítote irónica: se niega la cualidad contraria y se subraya con «que digamos».",
      },
      {
        type: "error",
        sentence: "En mi vida no he visto una cocina tan limpia.",
        answers: ["En mi vida he visto una cocina tan limpia.", "No he visto en mi vida una cocina tan limpia."],
        why: "Delante del verbo, «en mi vida» ya niega.",
      },
      {
        type: "error",
        sentence: "No nos sirvieron vino, sino nos ofrecieron un jugo de lulo.",
        answers: ["No nos sirvieron vino, sino que nos ofrecieron un jugo de lulo."],
        why: "Delante de verbo conjugado, «sino que».",
      },
      {
        type: "order",
        words: ["No", "pidas", "el", "postre", "hasta", "que", "no", "termine", "la", "música."],
        why: "Negación expletiva con «hasta que no + subjuntivo».",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un compañero la diferencia entre «temo que no venga el proveedor» y «no saldremos hasta que no venga el proveedor». Di en cuál puede quitarse el «no» y qué cambiaría en la otra.",
        model: "En «no saldremos hasta que no venga el proveedor», el segundo «no» es expletivo: si lo quitamos, la frase dice lo mismo, porque esperaremos a que llegue. En cambio, en «temo que no venga el proveedor» el «no» es pleno: el miedo es que falte. Si lo quitamos, «temo que venga el proveedor», cambia por completo el sentido, porque lo que preocupa es su llegada. Para saberlo, basta con quitar el «no» y comprobar si cambia el significado.",
        checklist: [
          "Identifico la negación expletiva y la plena.",
          "Explico qué cambia al quitar el «no» en cada caso.",
          "Propongo una prueba para distinguirlas.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Interpreto y uso lítotes de elogio, de crítica atenuada e irónicas sin confundir su sentido.",
      "Distingo la negación expletiva de la plena y uso «hasta que no» y «por poco» con naturalidad.",
      "Controlo el alcance de la negación con «no todos», «no siempre» y «no… porque», y uso «sino», «sino que» y «pero».",
      "Reconozco la ironía por el contexto, la exageración y la entonación, y la evito en textos donde puede malinterpretarse.",
    ],
    review: [
      "Dentro de dos días, tapa la columna central de la tabla de lítotes y reconstruye qué se entiende detrás de cada frase.",
      "Dentro de una semana, busca tres reseñas reales en línea y subraya cada lítote y cada ironía.",
      "En la próxima clase, lee tu reseña en voz alta y pide a tu profesor que marque cualquier negación ambigua.",
    ],
  },
  related: [
    { path: "/gramatica/ironia-litotes-y-negacion-pragmatica", label: "Clase: Ironía, litotes y negación pragmática" },
  ],
};
