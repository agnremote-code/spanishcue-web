import type { Module } from "../../types";

/**
 * C1 · semana 3 · Autoestudio espejo de G171 (hipótesis remotas y
 * contrafactualidad retórica) y G172 (condicionales elípticas: de + infinitivo /
 * gerundio). Repaso autónomo con una maleta perdida en el aeropuerto de Bogotá
 * y la letra pequeña de un seguro de viaje ficticio. Audio mediante síntesis;
 * sin acreditación regional.
 */
export const c1w03: Module = {
  id: "c1-03",
  level: "c1",
  week: 3,
  kind: "core",
  title: "De haberlo sabido: la maleta, el seguro y la letra pequeña",
  subtitle: "Repaso de las condiciones graduadas, los contrafactuales retóricos y las condiciones sin «si»",
  stop: {
    place: "Bogotá",
    country: "Colombia",
  },
  minutes: 135,
  newObjectives: [
    "c1.gram.g171",
    "c1.gram.g172",
    "c1.voc.w03-seguro-viaje",
    "c1.pron.w03-como-aviso-causa",
    "c1.lis.w03-maleta-perdida",
    "c1.read.w03-letra-pequena",
    "c1.wri.w03-reclamacion-formal",
    "c1.spk.w03-consejos-viajero",
    "c1.fun.w03-plantear-escenarios",
    "c1.disc.w03-hechos-condiciones",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo plantear condiciones probables, remotas y contrafactuales, quejarme o advertir con fórmulas coloquiales y expresar condiciones sin «si» en un texto formal.",
    steps: [
      "Repasa en la teoría la escala de probabilidad, los conectores condicionales y las condiciones reducidas con infinitivo, gerundio y preposición.",
      "Practica con las frases de una viajera que pierde la maleta al llegar a Bogotá.",
      "Escucha su conversación con un amigo bogotano y lee una columna sobre la letra pequeña de los seguros.",
      "Escribe una reclamación formal, revísala y explica en voz alta tus consejos para el próximo viaje.",
    ],
  },
  theory: {
    intro: "En clase viste estas condiciones con tu profesor. Aquí las repasas en otra situación: Inés, una diseñadora de Valencia, aterriza en Bogotá para un encargo y su maleta no aparece. Con su amigo Camilo planea qué hacer, se queja de lo que habría podido evitar y descubre lo que dice la letra pequeña de su seguro.",
    parts: [
      {
        heading: "Cuánto crees en tu condición: la escala de probabilidad",
        body: [
          "La forma verbal de una condición muestra cuánto confías en ella. «Si + presente» presenta una posibilidad real, casi un plan: «si mañana no aparece la maleta, compro ropa». «Si + imperfecto de subjuntivo» la presenta como menos probable o solo imaginada: «si no apareciera nunca, reclamaría el valor completo». «Si llegara a + infinitivo» la empuja al extremo de lo remoto: «si la maleta llegara a perderse para siempre, tendría que repetir los bocetos».",
          "Detrás de «si» condicional nunca van el condicional ni el presente de subjuntivo: no se dice «si llegaría» ni «si llegue». Otros conectores, en cambio, exigen siempre subjuntivo, también cuando la situación es probable: «en caso de que», «a no ser que», «a menos que», «salvo que» (excepción: si no), «siempre que» y «siempre y cuando» (requisito), «con tal de que» (requisito mínimo). «Como» + subjuntivo al principio de la frase es una advertencia o una amenaza: «como no aparezca hoy, pongo una queja».",
        ],
        table: {
          caption: "Conectores condicionales y su modo",
          head: ["Conector", "Valor", "Ejemplo"],
          rows: [
            ["si + presente", "posibilidad real", "Si la aerolínea llama, voy al aeropuerto."],
            ["si + imperfecto de subjuntivo", "posibilidad remota o imaginada", "Si me ofrecieran un vale, lo aceptaría."],
            ["en caso de que + subjuntivo", "previsión", "En caso de que llamen, diles que estoy en la reunión."],
            ["a no ser que / salvo que + subjuntivo", "única excepción", "Me quedo en el hotel, a no ser que me necesiten en la oficina."],
            ["siempre que / siempre y cuando + subjuntivo", "requisito", "Te reembolsan la ropa siempre que guardes las facturas."],
            ["como + subjuntivo", "advertencia o amenaza", "Como no aparezca mañana, reclamo por escrito."],
          ],
        },
        mistakes: [
          {
            wrong: "Si la aerolínea encontraría la maleta, me la mandaría al hotel.",
            right: "Si la aerolínea encontrara la maleta, me la mandaría al hotel.",
            why: "Tras «si» condicional nunca va el condicional.",
          },
          {
            wrong: "No te reembolsan nada a menos que no presentes las facturas.",
            right: "No te reembolsan nada a menos que presentes las facturas.",
            why: "«A menos que» ya significa «si no»: el segundo «no» invierte el sentido.",
          },
        ],
        tip: "Con «siempre que» y con «como», el modo cambia el significado: con indicativo, «siempre que viajo» es «cada vez que viajo» y «como perdí la maleta» es una causa; con subjuntivo, son una condición y un aviso.",
      },
      {
        heading: "Contrafactuales retóricos: quejarse, protestar y aconsejar",
        body: [
          "En la conversación, sobre todo en España, se usa el presente para hablar de un pasado irreal con tono de queja: «si lo sé, no facturo la maleta» equivale a «si lo hubiera sabido, no la habría facturado». También «si llego a saberlo…» o «si no llega a ser por ti, me quedo sin ropa». Son coloquiales: en un texto formal usa la versión completa.",
          "«¡Ni que + imperfecto o pluscuamperfecto de subjuntivo!» protesta contra una exageración ajena: «¡Ni que fuera la primera maleta que se pierde!», «¡ni que hubieras viajado con joyas!». No la confundas con «como si», que compara dentro de una oración. Para aconsejar se usa «yo que tú» o «yo en tu lugar» + condicional: «yo que tú pediría el parte por escrito». Y para presentar algo como la única causa de un resultado: «si no fuera por el seguro, estaría arruinada», «si no hubiera sido por Camilo, habría dormido sin pijama».",
          "En la oración principal, la forma en -ra puede sustituir al condicional solo con «hubiera + participio» y con unos pocos verbos (quisiera, debiera, pudiera): «hubiera sido mejor llevar el portátil en la mano». La forma en -se nunca va en la principal.",
        ],
        examples: [
          { es: "Si lo sé, meto los bocetos en la mochila.", note: "Queja coloquial: «si lo hubiera sabido, los habría metido»." },
          { es: "¡Ni que te hubieran robado el pasaporte!", note: "Protesta: la reacción del otro parece exagerada." },
          { es: "Yo en tu lugar no firmaría nada sin leerlo dos veces.", note: "Consejo con condicional." },
        ],
        mistakes: [
          {
            wrong: "¡Ni que habría perdido el pasaporte! Solo es una maleta.",
            right: "¡Ni que hubiera perdido el pasaporte! Solo es una maleta.",
            why: "Tras «ni que» va imperfecto o pluscuamperfecto de subjuntivo, nunca condicional.",
          },
        ],
      },
      {
        heading: "Condiciones sin «si»: de + infinitivo",
        body: [
          "«De + infinitivo» es una condición más compacta y cuidada, muy frecuente en textos escritos y en el habla formal. El infinitivo simple equivale a «si + presente» o a «si + imperfecto de subjuntivo»: lo decide la oración principal. «De confirmarse la pérdida, la aerolínea pagará» = «si se confirma»; «de tener más tiempo, iría a Villa de Leyva» = «si tuviera». El infinitivo compuesto equivale a «si + pluscuamperfecto»: «de haberlo sabido, habría contratado otro seguro». En instrucciones formales también puede equivaler a «si + perfecto»: «de no haber recibido el equipaje en 21 días, presente la reclamación».",
          "Sin sujeto expreso, el infinitivo comparte el sujeto de la oración principal. Si el sujeto es distinto, va detrás del infinitivo: «de llegar ella antes, nos llamará». Cuando el cambio de sujeto o de tiempo puede confundir, vuelve a «si»: es más claro. Los pronombres van pegados al infinitivo: «de habérmelo dicho», «de haberlo sabido».",
        ],
        table: {
          caption: "De la condición completa a la reducida",
          head: ["Con «si»", "Con «de»", "Registro"],
          rows: [
            ["Si se confirma la pérdida, la aerolínea pagará.", "De confirmarse la pérdida, la aerolínea pagará.", "formal, escrito"],
            ["Si tuviera más días, iría a la costa.", "De tener más días, iría a la costa.", "cuidado, también oral"],
            ["Si lo hubiera sabido, habría llevado la ropa en la mano.", "De haberlo sabido, habría llevado la ropa en la mano.", "muy frecuente, también oral"],
            ["Si usted no ha recibido el equipaje en 21 días…", "De no haber recibido el equipaje en 21 días…", "instrucciones formales"],
          ],
        },
        mistakes: [
          {
            wrong: "De hubiéramos contratado el seguro completo, nos habrían pagado todo.",
            right: "De haber contratado el seguro completo, nos habrían pagado todo.",
            why: "Tras «de» condicional va siempre infinitivo; el subjuntivo va con «si».",
          },
          {
            wrong: "De haber sabido lo, no habría facturado.",
            right: "De haberlo sabido, no habría facturado.",
            why: "Con infinitivo, el pronombre va detrás y pegado.",
          },
        ],
      },
      {
        heading: "Gerundio, preposiciones y fórmulas: otras condiciones reducidas",
        body: [
          "El gerundio puede expresar condición, pero solo si la oración principal es futura, hipotética o general: «reservando con antelación, el vuelo sale más barato» (= si reservas). Con un resultado ya ocurrido, el gerundio indica tiempo o modo, no condición: «saliendo del aeropuerto, vi el cartel» (= cuando salía). Su sujeto suele ser general en consejos e instrucciones.",
          "Hay además condiciones con preposición. «Con + infinitivo» plantea un requisito mínimo: «con enseñar la tarjeta de embarque, basta». «Sin + infinitivo» es una condición negativa con el mismo sujeto: «sin presentar el parte, no te pagarán» (con sujetos distintos, «sin que» + subjuntivo). «En caso de» va con sustantivo o infinitivo: «en caso de retraso», «en caso de no localizar el equipaje». Y fórmulas fijas como «de no ser por», «a juzgar por», «bien mirado» o «visto así» condicionan la lectura de la frase.",
        ],
        examples: [
          { es: "Guardando todos los recibos, el reembolso se tramita en una semana.", note: "Gerundio condicional: resultado general." },
          { es: "Con llamar al número de la póliza, te asignan un expediente.", note: "Requisito mínimo: basta con llamar." },
          { es: "A juzgar por la etiqueta, la maleta acabó en Lima.", note: "Fórmula fija: si nos guiamos por la etiqueta." },
        ],
        mistakes: [
          {
            wrong: "Llamando a la aerolínea, me dijeron que la maleta estaba en Lima.",
            right: "Cuando llamé a la aerolínea, me dijeron que la maleta estaba en Lima.",
            why: "El resultado ya ocurrió: el gerundio no es condicional y además cambia de sujeto. Mejor una temporal.",
          },
        ],
        tip: "Antes de reducir una condición, comprueba tres cosas: que el sujeto sea el mismo (o vaya explícito detrás del infinitivo), que el registro lo admita y que el resultado no sea un hecho ya ocurrido.",
      },
    ],
  },
  grammar: {
    intro: "Decide primero cuánto crees en la condición y en qué registro hablas; después elige la forma.",
    exercises: [
      {
        id: "c1-03-gramatica-escala",
        type: "context",
        prompt: "Lee la situación y elige la frase que corresponde al grado de probabilidad o a la intención.",
        items: [
          {
            context: "La aerolínea ha dicho que la maleta llega en el vuelo de esta noche. Inés hace planes.",
            q: "¿Qué dice Inés?",
            options: [
              "Si la maleta llegara a aparecer esta noche, mañana iría a la reunión con mi ropa.",
              "Si la maleta llega esta noche, mañana voy a la reunión con mi ropa.",
              "Si la maleta llegaría esta noche, mañana iría a la reunión con mi ropa.",
            ],
            answer: 1,
            why: "Es una posibilidad real y cercana: si + presente.",
          },
          {
            context: "Inés imagina el peor caso, que considera muy poco probable.",
            q: "¿Qué frase lo expresa mejor?",
            options: [
              "Si la maleta llegara a perderse para siempre, tendría que dibujar otra vez los bocetos.",
              "Si la maleta se pierde para siempre, tengo que dibujar otra vez los bocetos.",
              "Si la maleta se pierda para siempre, tendré que dibujar otra vez los bocetos.",
            ],
            answer: 0,
            why: "«Si llegara a» empuja la condición al extremo de lo remoto.",
          },
          {
            context: "Camilo quiere avisar, medio en broma, de lo que hará si Inés vuelve a facturar el portátil.",
            q: "¿Qué le dice?",
            options: [
              "Siempre que factures el portátil, no te vuelvo a llevar al aeropuerto.",
              "Como facturaste el portátil, no te vuelvo a llevar al aeropuerto.",
              "Como vuelvas a facturar el portátil, no te vuelvo a llevar al aeropuerto.",
            ],
            answer: 2,
            why: "«Como» + subjuntivo al principio de la frase es una advertencia; con indicativo sería una causa.",
          },
          {
            context: "Inés se queja, en tono coloquial, de lo que hizo ayer en el aeropuerto de Madrid.",
            q: "¿Qué frase es una queja retórica coloquial?",
            options: [
              "Si lo supiera, no facturaría la maleta.",
              "Si lo sé, no facturo la maleta.",
              "Si lo sabría, no habría facturado la maleta.",
            ],
            answer: 1,
            why: "El presente con valor de pasado irreal es la queja coloquial típica.",
          },
        ],
      },
      {
        id: "c1-03-gramatica-conectores",
        type: "gap",
        prompt: "Completa con la forma adecuada del verbo entre paréntesis.",
        items: [
          { q: "En caso de que la aerolínea no ___ (localizar) la maleta en cinco días, compra lo imprescindible.", answers: [["localice"]], why: "«En caso de que» exige subjuntivo." },
          { q: "Te reembolsan la ropa siempre y cuando ___ (conservar) los tiques originales.", answers: [["conserves"]], why: "«Siempre y cuando» es solo condicional y pide subjuntivo." },
          { q: "La reunión será el jueves, a no ser que el cliente ___ (preferir) dejarla para la semana que viene.", answers: [["prefiera"]], why: "Excepción con «a no ser que»: subjuntivo." },
          { q: "¡Ni que ___ (perder) el pasaporte! Solo te falta una maleta.", answers: [["hubieras perdido", "hubieses perdido"]], why: "Protesta con «ni que» sobre algo anterior: pluscuamperfecto de subjuntivo." },
          { q: "Si no ___ (ser) por Camilo, la primera noche habría dormido con la ropa del avión.", answers: [["hubiera sido", "hubiese sido"]], why: "Causa única de un resultado pasado: «si no hubiera sido por»." },
          { q: "De ___ (saber) que la escala era tan corta, habría llevado solo equipaje de mano.", answers: [["haber sabido", "haberlo sabido"]], why: "Condición pasada no cumplida sin «si»: de + infinitivo compuesto." },
        ],
      },
      {
        id: "c1-03-gramatica-reducidas",
        type: "classify",
        prompt: "Clasifica cada forma reducida según su equivalente con «si» o según si no es una condición.",
        categories: ["Equivale a «si + presente»", "Equivale a «si + imperfecto o pluscuamperfecto de subjuntivo»", "No es una condición: tiempo, modo o causa"],
        items: [
          { text: "De confirmarse el retraso, el seguro cubrirá la noche de hotel.", cat: 0, why: "Resultado futuro: si se confirma." },
          { text: "De haber contratado la cobertura ampliada, me habrían pagado el portátil.", cat: 1, why: "Infinitivo compuesto y condicional compuesto: si hubiera contratado." },
          { text: "De tener una semana libre, iría al Eje Cafetero.", cat: 1, why: "Resultado en condicional: si tuviera." },
          { text: "Saliendo del aeropuerto, vi a Camilo con un cartel.", cat: 2, why: "El resultado ya ocurrió: valor temporal." },
          { text: "Reservando con dos meses, el billete cuesta la mitad.", cat: 0, why: "Gerundio condicional con resultado general: si reservas." },
          { text: "Con mostrar la tarjeta de embarque, te dejan pasar a la sala.", cat: 0, why: "Requisito mínimo con presente: si muestras." },
          { text: "Como perdí la maleta, tuve que comprar ropa en el centro comercial.", cat: 2, why: "«Como» + indicativo expresa causa." },
        ],
      },
      {
        id: "c1-03-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error. Corrígela cambiando solo lo necesario.",
        items: [
          {
            sentence: "De llegaríamos tarde al hotel, nos guardarían la habitación.",
            answers: ["De llegar tarde al hotel, nos guardarían la habitación.", "Si llegáramos tarde al hotel, nos guardarían la habitación."],
            why: "Tras «de» condicional va siempre infinitivo.",
          },
          {
            sentence: "Yo que tú pidiese el parte de irregularidad antes de salir del aeropuerto.",
            answers: ["Yo que tú pediría el parte de irregularidad antes de salir del aeropuerto.", "Yo que tú pidiera el parte de irregularidad antes de salir del aeropuerto."],
            why: "«Yo que tú» va con condicional; la forma en -se nunca sustituye al condicional en la principal.",
          },
          {
            sentence: "Sin que presentes las facturas, no te devuelven nada.",
            answers: ["Sin presentar las facturas, no te devuelven nada.", "Si no presentas las facturas, no te devuelven nada."],
            why: "Con el mismo sujeto (tú), «sin + infinitivo». «Sin que» se usa con sujetos distintos.",
          },
          {
            sentence: "Te llevo al aeropuerto con tal de que me invitas a un tinto.",
            answers: ["Te llevo al aeropuerto con tal de que me invites a un tinto."],
            why: "«Con tal de que» exige subjuntivo.",
          },
        ],
      },
      {
        id: "c1-03-gramatica-registro",
        type: "open",
        prompt: "Cambia cada frase de registro según la instrucción. Hay varias respuestas posibles: compara con el modelo.",
        items: [
          {
            prompt: "Frase oral de Inés: «Si lo sé, no facturo el portátil, y si no llega a ser por Camilo, me quedo sin pijama». Reescríbela para un correo formal a la aerolínea, con al menos una condición reducida con «de».",
            model: "De haber sabido que el equipaje podía extraviarse en la escala, no habría facturado el portátil. Además, si no hubiera sido por la ayuda de un amigo, habría pasado la primera noche sin ropa de cambio.",
            checklist: [
              "Sustituyo los presentes coloquiales por pluscuamperfecto o infinitivo compuesto y condicional compuesto.",
              "Uso al menos una condición con «de + haber + participio».",
              "El tono es formal y sin exclamaciones.",
            ],
          },
          {
            prompt: "Instrucción formal de la póliza: «De no haber recibido respuesta en quince días, el asegurado podrá acudir al defensor del cliente». Explícasela a un amigo en registro oral, con «si».",
            model: "Mira, si pasan quince días y no te han contestado, puedes ir al defensor del cliente. O sea, primero esperas las dos semanas y, si no hay respuesta, reclamas más arriba.",
            checklist: [
              "Paso la condición a «si + presente» o «si + perfecto».",
              "Mantengo el plazo y la consecuencia.",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para entender una póliza, reclamar un equipaje y hablar de lo que habría podido salir de otra manera.",
    groups: [
      {
        title: "Seguro y aeropuerto",
        items: [
          { es: "la póliza", note: "documento que recoge el contrato de un seguro" },
          { es: "la cobertura", note: "conjunto de riesgos que paga el seguro" },
          { es: "la franquicia", note: "cantidad que paga el asegurado antes de que pague el seguro" },
          { es: "el parte de irregularidad", note: "informe que se hace en el aeropuerto cuando falta un equipaje" },
          { es: "facturar el equipaje", note: "entregarlo en el mostrador para que viaje en la bodega" },
          { es: "la escala", note: "parada intermedia de un vuelo antes del destino final" },
          { es: "tramitar un reembolso", note: "hacer las gestiones para recuperar un dinero" },
          { es: "la letra pequeña", note: "condiciones de un contrato poco visibles y a menudo decisivas" },
        ],
      },
      {
        title: "Lo que pudo ser",
        items: [
          { es: "salir ganando", note: "obtener al final un beneficio de una situación" },
          { es: "librarse por poco", note: "evitar un problema por muy poco margen" },
          { es: "ponerse en lo peor", note: "imaginar el resultado más negativo posible" },
          { es: "curarse en salud", note: "tomar precauciones antes de que ocurra un problema" },
          { es: "a la próxima", note: "la siguiente vez que ocurra algo parecido" },
          { es: "de haberlo sabido", note: "fórmula fija: si lo hubiera sabido" },
          { es: "a juzgar por", note: "si nos guiamos por un indicio" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-03-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "la franquicia", right: "cantidad que paga el asegurado antes de que pague el seguro" },
          { left: "el parte de irregularidad", right: "informe que se hace en el aeropuerto cuando falta un equipaje" },
          { left: "la escala", right: "parada intermedia de un vuelo antes del destino final" },
          { left: "curarse en salud", right: "tomar precauciones antes de que ocurra un problema" },
          { left: "ponerse en lo peor", right: "imaginar el resultado más negativo posible" },
          { left: "librarse por poco", right: "evitar un problema por muy poco margen" },
          { left: "la letra pequeña", right: "condiciones de un contrato poco visibles y a menudo decisivas" },
        ],
      },
      {
        id: "c1-03-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del banco.",
        bank: ["cobertura", "tramitar el reembolso", "facturar", "a juzgar por", "salió ganando"],
        items: [
          { q: "La ___ básica no incluye aparatos electrónicos, salvo que los declares al contratar.", answers: [["cobertura"]] },
          { q: "Para ___ necesitas el parte, los tiques y una copia de la tarjeta de embarque.", answers: [["tramitar el reembolso"]] },
          { q: "___ la etiqueta, la maleta pasó dos días dando vueltas por Lima.", answers: [["A juzgar por"]] },
          { q: "Al final Inés ___: el seguro le pagó la ropa y la aerolínea le dio un vale.", answers: [["salió ganando"]] },
          { q: "Yo que tú no volvería a ___ nada que no pudieras perder.", answers: [["facturar"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "«Como» de causa y «como» de aviso: una vocal y una curva",
    explanation: [
      "Con «como» y con «siempre que», el modo cambia el significado, y en la lengua oral el modo depende muchas veces de una sola vocal: «como pierdes» (causa) frente a «como pierdas» (aviso), «siempre que viajas» (cada vez) frente a «siempre que viajes» (requisito). Pronuncia con claridad la vocal de la terminación, sin comértela antes de la pausa.",
      "La entonación acompaña a la intención. La causa con «como» suele ser neutra y continúa sin énfasis hacia la consecuencia. El aviso o la amenaza marca más el verbo, se detiene un instante tras la condición y baja con fuerza al final de la consecuencia. Las protestas con «¡ni que…!» empiezan altas y caen al final, con tono de incredulidad.",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para percibir el contraste y compara tu grabación con la de una persona.",
    ],
    table: {
      caption: "Una vocal, dos intenciones",
      head: ["Indicativo", "Subjuntivo"],
      rows: [
        ["Como pierdes siempre las llaves, te hice una copia. (causa)", "Como pierdas otra vez las llaves, no te hago más copias. (aviso)"],
        ["Siempre que viajas, te pasa algo. (cada vez)", "Te dejo la maleta grande siempre que viajes en directo. (requisito)"],
        ["Como llegó tarde, no lo esperamos. (causa)", "Como llegue tarde, no lo esperamos. (aviso)"],
      ],
    },
    perceive: {
      id: "c1-03-percepcion",
      type: "listen",
      prompt: "Escucha cada frase sin leer las opciones y decide qué intención expresa según la forma que oyes.",
      items: [
        {
          q: "¿Qué expresa la frase?",
          options: ["Una causa: ya ocurrió", "Un aviso: todavía no ha ocurrido"],
          answer: 1,
          why: "Se oye «pierdas»: «como» + subjuntivo es una advertencia.",
          audio: "Como pierdas otra vez el pasaporte, te vas sola al consulado.",
          voice: "es-CO-m",
        },
        {
          q: "¿Qué expresa la frase?",
          options: ["Una causa: ya ocurrió", "Un aviso: todavía no ha ocurrido"],
          answer: 0,
          why: "Se oye «perdiste»: «como» + indicativo expresa la causa.",
          audio: "Como perdiste la maleta, te presté una chaqueta.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué significa «siempre que» en la frase?",
          options: ["con la condición de que", "cada vez que"],
          answer: 1,
          why: "Se oye «viajo»: con indicativo, «siempre que» es temporal.",
          audio: "Siempre que viajo a Bogotá, llueve el primer día.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué significa «siempre que» en esta otra frase?",
          options: ["cada vez que", "con la condición de que"],
          answer: 1,
          why: "Se oye «viajes»: con subjuntivo, «siempre que» es condicional.",
          audio: "Te presto mi maleta siempre que viajes con un candado.",
          voice: "es-CO-f",
        },
      ],
    },
    produce: [
      { text: "Como vuelvas a facturar el portátil, no te llevo al aeropuerto.", tip: "Marca «vuelvas» y deja caer el tono con fuerza al final.", voice: "es-CO-m" },
      { text: "Como facturaste el portátil, ahora no puedes trabajar.", tip: "Tono neutro, sin pausa marcada: es una causa.", voice: "es-ES-f" },
      { text: "¡Ni que te hubieran robado el pasaporte!", tip: "Empieza alto en «ni que» y baja en «pasaporte».", voice: "es-CO-m" },
      { text: "De haberlo sabido, habría llevado la ropa en la mochila.", tip: "Di «de haberlo sabido» como un solo grupo y haz la pausa después.", voice: "es-ES-f" },
    ],
    spelling: "Las parejas pierdes / pierdas, viajas / viajes, llegó / llegue solo se diferencian en una o dos letras: revísalas siempre detrás de «como» y «siempre que».",
  },
  listening: {
    title: "Una maleta en Lima y un tinto en Chapinero",
    context: "Inés, una diseñadora de Valencia, acaba de llegar a Bogotá para un encargo. Su maleta no ha llegado. Toma un tinto con su amigo Camilo en una cafetería de Chapinero y juntos deciden qué hacer. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "i", name: "Inés", voice: "es-ES-f", role: "Diseñadora, recién llegada de España" },
      { id: "c", name: "Camilo", voice: "es-CO-m", role: "Su amigo bogotano" },
    ],
    script: [
      { speaker: "i", text: "Te lo juro, Camilo: si lo sé, no facturo la maleta. Llevaba los bocetos del cliente, la ropa para la reunión y el cargador del portátil. Y, según la etiqueta, la mandaron a Lima." },
      { speaker: "c", text: "¡Ni que fuera la primera maleta que se pierde en una escala! Tranquila. ¿Te dieron el parte de irregularidad en el aeropuerto?" },
      { speaker: "i", text: "Sí, menos mal. Si no llega a ser por la chica del mostrador, que me insistió, me voy sin él. Dicen que, de aparecer la maleta, me la llevan al hotel en veinticuatro horas." },
      { speaker: "c", text: "Bueno, entonces hagamos un plan. Si llega mañana, perfecto, vas a la reunión con tu ropa. En caso de que no llegue, compramos lo básico esta tarde en el centro comercial y guardas todos los recibos. Con guardar los tiques, el seguro te lo devuelve, ¿no?" },
      { speaker: "i", text: "En teoría sí, siempre que no supere los trescientos euros. Pero la letra pequeña dice que los aparatos electrónicos no están cubiertos, a no ser que los hayas declarado al contratar. De haberlo leído antes, habría metido el cargador en la mochila." },
      { speaker: "c", text: "Yo que tú llamaría hoy mismo a la aseguradora y les pediría el número de expediente. Llamando temprano, te atienden más rápido." },
      { speaker: "i", text: "Sí. ¿Y si la maleta llegara a perderse del todo? Tendría que dibujar otra vez los bocetos en dos días." },
      { speaker: "c", text: "Ponerse en lo peor no sirve de nada. Pero, en ese caso, yo en tu lugar hablaría con el cliente con toda franqueza. Como te veo agobiada, te invito a un ajiaco y luego vamos a comprar. Eso sí: como vuelvas a facturar el portátil, no te vuelvo a recoger en el aeropuerto." },
      { speaker: "i", text: "Trato hecho. Si no fuera por ti, estaría llorando en el hotel con la ropa del avión." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Cuál es el problema y qué deciden?",
        exercise: {
          id: "c1-03-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Cuál es el problema de Inés?",
              options: [
                "Perdió el vuelo de conexión en Lima.",
                "Su maleta se fue a otro destino y no sabe cuándo llegará.",
                "Le robaron el portátil en el aeropuerto.",
              ],
              answer: 1,
              why: "Según la etiqueta, la maleta acabó en Lima.",
            },
            {
              q: "¿Qué plan general hacen?",
              options: [
                "Esperar a mañana y, si no llega, comprar lo básico guardando los recibos.",
                "Volver al aeropuerto esa misma noche.",
                "Cancelar la reunión con el cliente.",
              ],
              answer: 0,
              why: "Camilo propone un plan para cada escenario.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cada condición del seguro y cada consejo.",
        exercise: {
          id: "c1-03-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Qué condición pone el seguro para reembolsar la ropa?",
              options: [
                "Que Inés presente la factura del billete.",
                "Que el gasto no supere los trescientos euros.",
                "Que la maleta no aparezca en un mes.",
              ],
              answer: 1,
              why: "«Siempre que no supere los trescientos euros.»",
            },
            {
              q: "¿Por qué no le cubrirán el cargador?",
              options: [
                "Porque lo compró en Bogotá.",
                "Porque no tiene el tique original.",
                "Porque los aparatos electrónicos solo se cubren si se declaran al contratar.",
              ],
              answer: 2,
              why: "«A no ser que los hayas declarado al contratar.»",
            },
            {
              q: "¿Qué le aconseja Camilo sobre la aseguradora?",
              options: [
                "Que llame hoy y pida el número de expediente.",
                "Que espere a que la maleta aparezca.",
                "Que cambie de compañía al volver.",
              ],
              answer: 0,
              why: "«Yo que tú llamaría hoy mismo a la aseguradora.»",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en la función de cada condición. Relaciona y consulta la transcripción solo después.",
        exercise: {
          id: "c1-03-escucha-notice",
          type: "match",
          prompt: "Relaciona cada frase de la conversación con su función.",
          pairs: [
            { left: "si lo sé, no facturo la maleta", right: "queja coloquial sobre un pasado irreal" },
            { left: "¡ni que fuera la primera maleta que se pierde!", right: "protesta ante una reacción exagerada" },
            { left: "de aparecer la maleta, me la llevan al hotel", right: "condición reducida con resultado futuro" },
            { left: "de haberlo leído antes, habría metido el cargador", right: "condición pasada no cumplida sin «si»" },
            { left: "llamando temprano, te atienden más rápido", right: "gerundio condicional con resultado general" },
            { left: "como vuelvas a facturar el portátil", right: "advertencia medio en broma" },
          ],
          why: "Cada forma muestra un grado de probabilidad, un registro o una intención distinta.",
        },
      },
    ],
  },
  reading: {
    title: "La letra pequeña también viaja",
    genre: "Columna de consumo en un diario",
    frame: "Columna semanal de Mariana Ospina, abogada de consumo, en la sección de economía doméstica de un diario de Bogotá. La aseguradora, la póliza y las cifras son ficticias.",
    text: [
      "Cada semana recibo una carta que empieza igual: «De haber sabido lo que decía mi seguro, nunca lo habría contratado». Esta vez la escribe una lectora española que aterrizó en El Dorado para un encargo de trabajo y vio cómo la cinta de equipajes se detenía sin su maleta. Según la etiqueta, el equipaje había seguido viaje hasta Lima. Ella tenía un seguro de viaje contratado por internet en dos minutos, como casi todos. Lo que no había hecho, como casi todos, era leer las condiciones.",
      "Vayamos por partes, porque la letra pequeña no es un enemigo: es un contrato escrito en un registro que no usamos a diario. La primera cláusula dice: «De producirse la demora del equipaje facturado, la compañía reembolsará los gastos de primera necesidad hasta un máximo de trescientos euros». Traducido: si la maleta se retrasa, le devuelven lo que gaste en ropa y artículos básicos, con un límite. Ese «de producirse» no es más que un «si se produce» con traje y corbata. La cifra, en cambio, sí merece atención.",
      "La segunda cláusula es la que suele doler: «Quedan excluidos los aparatos electrónicos, salvo que hayan sido declarados expresamente en el momento de la contratación». Es decir, no le pagarán el cargador ni el portátil, a no ser que los mencionara al contratar. Muchos lectores me escriben indignados, como si la compañía los hubiera engañado. Ni que la cláusula estuviera escondida: aparece en la página dos. Otra cosa es que nadie llegue a la página dos.",
      "La tercera cláusula impone un requisito formal: «Sin presentar el parte de irregularidad expedido por la compañía aérea, no se tramitará reclamación alguna». Con otras palabras: si no tiene ese papel, no hay reembolso. Nuestra lectora tuvo suerte. Si no llega a ser por la empleada del mostrador, que insistió en hacérselo, habría salido del aeropuerto sin él. Mi consejo es sencillo: pida siempre el parte antes de cruzar la puerta de salida, aunque el empleado le asegure que la maleta llegará en el siguiente vuelo.",
      "La cuarta cláusula fija los plazos: «De no haber recibido el equipaje en un plazo de veintiún días, este se considerará perdido y el asegurado podrá solicitar la indemnización completa». Aquí el infinitivo compuesto equivale a un «si no lo ha recibido», y el plazo es lo que cuenta. Le recomiendo apuntarlo en el calendario: guardando todas las comunicaciones por escrito, la reclamación se resuelve mucho antes.",
      "¿Qué haría yo en el lugar de esta lectora? Primero, comprar solo lo imprescindible y guardar cada tique. Segundo, llamar a la aseguradora para abrir un expediente: con dar el número de póliza, basta. Tercero, en caso de que la compañía tarde más de quince días en contestar, acudir al defensor del cliente. Y, a la próxima, leer las condiciones antes de pagar. Bien mirado, diez minutos de lectura salen mucho más baratos que una maleta que se fue a Lima de vacaciones sin su dueña.",
    ],
    glossary: [
      { es: "con traje y corbata", note: "aquí, dicho de manera formal" },
      { es: "expedido", note: "emitido oficialmente por una entidad" },
      { es: "defensor del cliente", note: "servicio que resuelve las quejas de los clientes de una empresa" },
    ],
    tasks: [
      {
        id: "c1-03-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la columna.",
        items: [
          {
            q: "¿Qué piensa la columnista de la letra pequeña?",
            options: [
              "Que es una trampa que las compañías esconden a propósito.",
              "Que es un contrato en un registro poco habitual que conviene leer.",
              "Que no tiene valor legal si el cliente no la firma.",
            ],
            answer: 1,
            why: "«La letra pequeña no es un enemigo: es un contrato escrito en un registro que no usamos a diario.»",
          },
          {
            q: "¿Qué ocurre si el viajero no presenta el parte de irregularidad?",
            options: [
              "La compañía reduce el reembolso a la mitad.",
              "Tiene veintiún días para conseguirlo.",
              "No se tramita ninguna reclamación.",
            ],
            answer: 2,
            why: "«Sin presentar el parte…, no se tramitará reclamación alguna.»",
          },
          {
            q: "¿Qué recomienda hacer si la aseguradora tarda más de quince días en contestar?",
            options: [
              "Acudir al defensor del cliente.",
              "Contratar otro seguro.",
              "Volver al aeropuerto con los tiques.",
            ],
            answer: 0,
            why: "Lo dice en el último párrafo.",
          },
        ],
      },
      {
        id: "c1-03-lectura-equivalencias",
        type: "match",
        prompt: "Relaciona cada condición reducida de la póliza con su equivalente con «si».",
        pairs: [
          { left: "De producirse la demora del equipaje", right: "Si se produce la demora del equipaje" },
          { left: "Sin presentar el parte de irregularidad", right: "Si no presenta el parte de irregularidad" },
          { left: "De no haber recibido el equipaje en veintiún días", right: "Si no ha recibido el equipaje en veintiún días" },
          { left: "salvo que hayan sido declarados", right: "si no han sido declarados" },
        ],
      },
      {
        id: "c1-03-lectura-evaluacion",
        type: "open",
        prompt: "Valora el estilo de la columna.",
        items: [
          {
            prompt: "La columnista escribe: «Ni que la cláusula estuviera escondida: aparece en la página dos». Explica en 70–90 palabras qué hace esa estructura, qué registro tiene y si te parece adecuada en una columna de consumo.",
            model: "«Ni que» con imperfecto de subjuntivo protesta contra una idea ajena: los lectores se quejan como si los hubieran engañado, y la autora rechaza esa exageración. Es una estructura coloquial, pero en una columna con voz personal funciona: acerca el texto al lector y le recuerda, con humor, su parte de responsabilidad. Si el texto fuera un informe oficial, sería mejor algo como «la cláusula figura en la segunda página de las condiciones».",
            checklist: [
              "Explico la función de protesta de «ni que».",
              "Identifico el registro coloquial y lo relaciono con el género.",
              "Propongo una alternativa formal con una condición o una forma reducida.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la columnista cita las cláusulas formales y las traduce al registro cotidiano.",
      items: [
        { quote: "Ese «de producirse» no es más que un «si se produce» con traje y corbata.", note: "La autora explica la equivalencia entre la condición reducida y la completa." },
        { quote: "Muchos lectores me escriben indignados, como si la compañía los hubiera engañado.", note: "«Como si» compara dentro de la oración; no confundir con «ni que»." },
        { quote: "Si no llega a ser por la empleada del mostrador, que insistió en hacérselo, habría salido del aeropuerto sin él.", note: "Contrafactual con «si no llega a ser por»: coloquial, aunque aquí se combina con un condicional compuesto." },
        { quote: "con dar el número de póliza, basta", note: "«Con + infinitivo»: requisito mínimo." },
        { quote: "en caso de que la compañía tarde más de quince días en contestar", note: "«En caso de que» exige subjuntivo también cuando la situación es probable." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección de registro, relación de equivalencias y escritura guiada.",
    exercises: [
      {
        id: "c1-03-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases sobre el viaje de Inés.",
        items: [
          {
            words: ["De", "haberlo", "sabido,", "habría", "llevado", "el", "cargador", "en", "la", "mochila."],
            why: "Condición pasada no cumplida reducida: de + infinitivo compuesto.",
          },
          {
            words: ["Yo", "en", "tu", "lugar", "pediría", "el", "número", "de", "expediente."],
            why: "Consejo con «yo en tu lugar» + condicional.",
          },
          {
            words: ["Te", "presto", "mi", "chaqueta", "con", "tal", "de", "que", "me", "la", "devuelvas."],
            why: "«Con tal de que» exige subjuntivo.",
          },
        ],
      },
      {
        id: "c1-03-registro",
        type: "context",
        prompt: "Elige la versión adecuada para el destinatario indicado.",
        items: [
          {
            context: "Escribes a la aseguradora para explicar por qué no declaraste el portátil.",
            q: "¿Qué frase eliges?",
            options: [
              "Si lo sé, lo declaro, pero nadie me avisó.",
              "¡Ni que fuera obvio que había que declararlo!",
              "De haber conocido esa condición, habría declarado el portátil al contratar.",
            ],
            answer: 2,
            why: "En un escrito formal, condición pasada completa o reducida con «de», sin fórmulas coloquiales.",
          },
          {
            context: "Le cuentas a un amigo, en un audio de WhatsApp, lo que te pasó en el aeropuerto.",
            q: "¿Qué frase suena natural?",
            options: [
              "Si no llega a ser por la chica del mostrador, me voy sin el parte.",
              "De no haber sido por la empleada del mostrador, habría abandonado las instalaciones sin el parte.",
              "En caso de que no hubiera mediado la empleada, el parte no se habría expedido.",
            ],
            answer: 0,
            why: "Contrafactual coloquial, adecuado para un mensaje entre amigos.",
          },
          {
            context: "Redactas una instrucción para la guía de viajeros de una empresa.",
            q: "¿Qué frase es la más adecuada?",
            options: [
              "Como no pidas el parte, te quedas sin reembolso.",
              "En caso de pérdida del equipaje, solicite el parte de irregularidad antes de salir del aeropuerto.",
              "Yo que tú pediría el parte antes de salir.",
            ],
            answer: 1,
            why: "«En caso de» + sustantivo y el imperativo de usted son típicos de las instrucciones escritas.",
          },
        ],
      },
      {
        id: "c1-03-equivalencias",
        type: "match",
        prompt: "Relaciona cada condición reducida con su equivalente completo.",
        pairs: [
          { left: "Con llamar antes de las nueve", right: "Basta con que llames antes de las nueve" },
          { left: "De ser yo tú", right: "Si yo fuera tú" },
          { left: "Sin leer las condiciones", right: "Si no lees las condiciones" },
          { left: "De no ser por el seguro", right: "Si no fuera por el seguro" },
          { left: "Viajando con equipaje de mano", right: "Si viajas con equipaje de mano" },
        ],
      },
      {
        id: "c1-03-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Piensa en un viaje en el que algo salió mal. Escribe 60–80 palabras: una queja coloquial con «si lo sé…», una reflexión formal con «de + haber + participio» y un consejo con «yo que tú» para quien vaya a hacer el mismo viaje.",
            model: "Si lo sé, no reservo el tren de las seis: llegamos a Lyon sin dormir y con la estación cerrada. De haber revisado el horario de la consigna, habríamos dejado las maletas allí y no habríamos cargado con ellas todo el día. Yo que tú reservaría el tren de la mañana, aunque cueste un poco más, y comprobaría antes los horarios de todo.",
            checklist: [
              "La queja coloquial usa presente con valor de pasado irreal.",
              "La reflexión usa de + haber + participio con condicional compuesto.",
              "El consejo usa «yo que tú» + condicional.",
            ],
          },
          {
            prompt: "Redacta tres instrucciones para viajeros (40–60 palabras) con tres condiciones reducidas distintas: «en caso de», «sin + infinitivo» y «de + infinitivo».",
            model: "En caso de retraso superior a tres horas, solicite un vale de comida en el mostrador. Sin presentar la tarjeta de embarque, no podrá acceder a la sala VIP. De no localizarse su equipaje en cinco días, la compañía le enviará un formulario de reclamación por correo electrónico.",
            checklist: [
              "Uso las tres estructuras pedidas correctamente.",
              "Mantengo un registro formal y el tratamiento de usted.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta una reclamación formal (230–320 palabras) a una aseguradora o a una compañía de transporte por un problema durante un viaje (equipaje, retraso, cancelación). Expón los hechos, cita las condiciones que se aplican, explica qué habría pasado si la compañía hubiera actuado de otra manera y formula tu petición con las condiciones que aceptas.",
    context: "La reclamación la leerá un gestor que tramita decenas al día. Tiene que entender en dos minutos qué pasó, qué condición del contrato invocas y qué pides. Escribe en registro formal: las fórmulas coloquiales de la conversación no tienen lugar aquí.",
    steps: [
      "Anota los hechos en orden cronológico y, al lado, la condición de la póliza o del contrato que corresponde a cada uno.",
      "Decide qué condiciones vas a reducir con «de + infinitivo», «en caso de» o «sin + infinitivo» y cuáles mantendrás con «si» por claridad.",
      "Redacta al menos tres párrafos: los hechos, la base contractual y la petición con sus condiciones.",
      "Revisa la reclamación con la lista de control: corrige cualquier «si» seguido de condicional y comprueba que no queda ninguna fórmula coloquial.",
    ],
    useLanguage: [
      "de haber + participio…, habría + participio",
      "en caso de que + subjuntivo / en caso de + sustantivo",
      "a no ser que, salvo que, siempre que + subjuntivo",
      "sin + infinitivo",
      "de no ser por…",
      "Les ruego que…, a la espera de su respuesta…",
    ],
    model: [
      "Estimados señores: me dirijo a ustedes en relación con el expediente 4471-B, abierto el pasado 3 de marzo por la demora de mi equipaje en el vuelo Madrid-Bogotá con escala en Lima. Mi maleta no llegó con el resto del pasaje y, según la etiqueta, continuó viaje hasta Lima. Solicité el parte de irregularidad en el aeropuerto, que adjunto, junto con los tiques de las compras realizadas durante los cuatro días que tardó en llegar al hotel.",
      "Según la cláusula segunda de mi póliza, de producirse la demora del equipaje facturado, la compañía reembolsará los gastos de primera necesidad hasta trescientos euros. Mis gastos ascienden a doscientos sesenta y dos euros, todos debidamente justificados. Entiendo que el cargador del portátil queda excluido, salvo que se hubiera declarado al contratar, y por ello no lo incluyo en la reclamación, aunque tuve que comprar uno nuevo para poder trabajar. No obstante, quisiera señalar que, de haber figurado esa exclusión en la primera página del contrato, la habría tenido en cuenta al preparar el viaje.",
      "Por todo lo anterior, les ruego que tramiten el reembolso de la cantidad indicada en el plazo previsto. En caso de que necesiten algún documento adicional, pueden escribirme a esta misma dirección. De no recibir respuesta en quince días, me veré obligada a acudir al defensor del cliente, aunque confío en que no sea necesario. A la espera de su respuesta, les saluda atentamente, Inés Navarro.",
    ],
    checklist: [
      "Los hechos aparecen en orden y separados de las condiciones contractuales.",
      "Uso al menos tres condiciones reducidas distintas y ninguna rompe la concordancia de sujeto.",
      "Tras «si» no hay condicional ni presente de subjuntivo.",
      "Los conectores «en caso de que», «salvo que» y «siempre que» van con subjuntivo.",
      "El registro es formal de principio a fin y el texto tiene al menos tres párrafos.",
    ],
    words: [230, 320],
  },
  speaking: {
    intro: "Prepárate con notas breves, no con un texto leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Consejos para un viaje largo",
        prompt: "Una amiga va a hacer un viaje largo con dos escalas. Durante cuatro minutos, aconséjale: plantea qué hacer si pasa lo probable, si llega a pasar lo improbable y qué habrías hecho tú de otra manera en un viaje tuyo. Termina con una advertencia medio en broma.",
        prep: [
          "Prepara tres escenarios: uno probable (si + presente), uno remoto (si llegara a…) y uno contrafactual de tu experiencia.",
          "Anota dos consejos con «yo que tú» o «yo en tu lugar».",
          "Piensa una advertencia final con «como + subjuntivo».",
        ],
        seconds: 240,
        model: "Mira, lo más probable es que alguna escala se retrase. Si pierdes la conexión, ve directamente al mostrador de la compañía y pide que te reubiquen. Si llegaras a quedarte una noche en Lima, en caso de que no te den hotel, guarda la factura. Yo, de haberlo sabido, habría llevado una muda en la mochila. Así que, yo que tú, llevaría lo imprescindible en la mano. Y como factures el portátil, no me llames llorando.",
        selfCheck: [
          "Distingo con la forma verbal lo probable, lo remoto y lo contrafactual.",
          "Uso al menos dos condiciones reducidas.",
          "La advertencia final tiene la entonación de aviso.",
        ],
      },
      {
        title: "Llamada a la aseguradora",
        prompt: "Llamas a la aseguradora porque llevas diez días sin respuesta sobre tu reclamación. El agente te dice que falta un documento. Pregunta cuál, aclara qué condición del contrato se aplica, negocia un plazo y confirma por escrito lo acordado.",
        prep: [
          "Prepara dos preguntas sobre el documento y el plazo.",
          "Ten a mano «siempre que», «en caso de que» y «de no recibir…».",
        ],
        seconds: 150,
        model: "Buenos días, llamo por el expediente 4471-B. ¿Qué documento les falta exactamente? ¿Y en qué cláusula se exige? De acuerdo: se lo envío hoy, siempre que me confirmen que con eso se cierra el trámite. En caso de que necesiten algo más, ¿podrían avisarme por correo? Y, de no tener respuesta en una semana, ¿con quién debo hablar?",
        selfCheck: [
          "Hago preguntas concretas y cortas.",
          "Uso conectores condicionales con subjuntivo para negociar.",
          "Cierro confirmando lo acordado.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu lista de escenarios y una condición reducida de la que no estés seguro.",
    cards: [
      {
        move: "Planea",
        task: "Planea con tu profesor un viaje de fin de semana con tres escenarios: probable, remoto y uno que sería un desastre. Usa una forma distinta para cada uno.",
        phrases: ["Si llueve…", "Si llegara a…", "En caso de que…"],
      },
      {
        move: "Protesta",
        task: "Tu profesor exagera un problema pequeño; protesta con «¡ni que…!» y después aconséjale con «yo que tú».",
        phrases: ["¡Ni que fuera…!", "Yo que tú…"],
      },
      {
        move: "Reduce",
        task: "Lee tu reclamación y pide a tu profesor que señale una condición con «si» que suene mejor reducida, y otra reducida que sea más clara con «si».",
        phrases: ["¿Aquí quedaría mejor «de + infinitivo»?", "¿Se entiende el sujeto?"],
      },
      {
        move: "Pregunta",
        task: "Pregúntale si en su variedad se usa «si lo sé, no vengo» y cómo lo diría en otro registro.",
        phrases: ["¿En tu país se dice…?", "¿Cómo lo dirías en un correo formal?"],
      },
    ],
    bring: "Tus tres escenarios, la reclamación revisada y, si quieres, la grabación de tus consejos.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué frase presenta la condición como la más remota?",
        options: [
          "Si cancelan el vuelo, dormimos en el aeropuerto.",
          "Si cancelaran el vuelo, dormiríamos en el aeropuerto.",
          "Si llegaran a cancelar el vuelo, dormiríamos en el aeropuerto.",
        ],
        answer: 2,
        why: "«Si llegara a» subraya que el caso sería raro o extremo.",
      },
      {
        type: "choice",
        q: "«De no ser por la vecina, el gato habría pasado el fin de semana solo.» ¿Qué equivale a «de no ser por»?",
        options: ["si no fuera por / si no hubiera sido por", "a pesar de", "gracias a que no"],
        answer: 0,
        why: "Fórmula fija que presenta a alguien como la única causa del resultado.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué intención tiene la hablante?",
        options: [
          "Explica la causa de lo que ya pasó.",
          "Advierte de lo que hará si su hermano repite algo.",
          "Describe una costumbre de su hermano.",
        ],
        answer: 1,
        why: "«Como» + subjuntivo al principio de la frase expresa advertencia.",
        audio: "Como vuelvas a dejarme sin batería el cargador, te compras uno.",
        voice: "es-CO-f",
      },
      {
        type: "gap",
        q: "De ___ (reservar) el hotel con tiempo, habríamos pagado la mitad.",
        answers: [["haber reservado"]],
        hint: "Condición pasada no cumplida sin «si»: infinitivo compuesto tras «de».",
        why: "El resultado en condicional compuesto pide de + haber + participio.",
      },
      {
        type: "gap",
        q: "Puedes llevarte mi paraguas, salvo que ___ (pensar) volver después de medianoche.",
        answers: [["pienses"]],
        hint: "«Salvo que» introduce la única excepción y exige subjuntivo.",
        why: "«Salvo que» = si no: presente de subjuntivo.",
      },
      {
        type: "error",
        sentence: "Si tendría más días libres, iría a Cartagena antes de volver.",
        answers: ["Si tuviera más días libres, iría a Cartagena antes de volver.", "Si tuviese más días libres, iría a Cartagena antes de volver."],
        why: "Tras «si» condicional nunca va el condicional.",
      },
      {
        type: "error",
        sentence: "¡Ni que habrías visto un fantasma! Solo era el conserje.",
        answers: ["¡Ni que hubieras visto un fantasma! Solo era el conserje.", "¡Ni que hubieses visto un fantasma! Solo era el conserje."],
        why: "Tras «ni que» va imperfecto o pluscuamperfecto de subjuntivo.",
      },
      {
        type: "order",
        words: ["En", "caso", "de", "que", "no", "llegue", "el", "taxi,", "llámame."],
        why: "«En caso de que» exige subjuntivo.",
      },
      {
        type: "open",
        prompt: "Explica en 70–90 palabras por qué «Llamando a la aerolínea, te darán el número del expediente» es una condición y «Llamando a la aerolínea, me enteré de que la maleta estaba en Lima» no lo es. Reescribe la segunda frase de forma más clara.",
        model: "En la primera, el resultado es futuro (te darán), así que el gerundio equivale a «si llamas a la aerolínea»: es una condición. En la segunda, el resultado ya ocurrió (me enteré), y el gerundio indica cuándo o cómo pasó, no una condición. Además, puede resultar ambiguo. Sería más claro decir: «Cuando llamé a la aerolínea, me enteré de que la maleta estaba en Lima».",
        checklist: [
          "Relaciono el valor condicional del gerundio con un resultado futuro o general.",
          "Explico que con un resultado pasado el gerundio no es condicional.",
          "Reescribo la frase con una temporal clara.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Gradúo una condición con si + presente, si + imperfecto de subjuntivo y si llegara a.",
      "Uso conectores condicionales con subjuntivo y distingo «como» y «siempre que» de causa o tiempo.",
      "Reconozco y uso contrafactuales retóricos según el registro: si lo sé…, ¡ni que…!, yo que tú.",
      "Reduzco condiciones con de + infinitivo, gerundio y preposiciones, y vuelvo a «si» cuando es más claro.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «De la condición completa a la reducida» y reconstruye la columna con «de».",
      "Dentro de una semana, busca las condiciones de un servicio real (un seguro, una aplicación, un alquiler) y subraya tres condiciones reducidas.",
      "En la próxima clase, lee tu reclamación y pide a tu profesor que la responda como si fuera la aseguradora.",
    ],
  },
  related: [
    { path: "/gramatica/hipotesis-remotas-y-contrafactualidad-retorica", label: "Clase: Hipótesis remotas y contrafactualidad retórica" },
    { path: "/gramatica/condicionales-elipticas-de-infinitivo-gerundio", label: "Clase: Condicionales elípticas: de + infinitivo / gerundio" },
  ],
};
