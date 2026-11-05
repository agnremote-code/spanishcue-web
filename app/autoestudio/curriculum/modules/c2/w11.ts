import type { Module } from "../../types";

/**
 * C2 · semana 11 · Autoestudio espejo de G221 (modalización sutil: certeza,
 * reserva e insinuación) y G222 (cortesía estratégica y amenaza a la imagen).
 * Repaso autónomo con una librería ficticia de Cádiz que recibe una oferta de
 * compra y tiene que responder a la cadena, al propietario del local y a su
 * propio equipo. Audio mediante síntesis; sin acreditación regional.
 */
export const c2w11: Module = {
  id: "c2-11",
  level: "c2",
  week: 11,
  kind: "core",
  title: "Decir que no sin dar un portazo",
  subtitle: "Repaso de cómo se gradúa el compromiso con lo que se afirma y de cómo se dosifica la cortesía cuando hay algo en juego",
  stop: {
    place: "Cádiz",
    country: "España",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g221",
    "c2.gram.g222",
    "c2.voc.w11-oferta-local",
    "c2.pron.w11-reserva-oido",
    "c2.lis.w11-borradores-respuesta",
    "c2.read.w11-columna-libreria",
    "c2.wri.w11-carta-rechazo",
    "c2.spk.w11-reunion-propietario",
    "c2.fun.w11-rechazar-sin-romper",
    "c2.disc.w11-hecho-sospecha-rumor",
  ],
  reviewObjectives: ["c2.gram.g219","c2.gram.g220","c2.voc.w10-patrimonio-debate","c2.pron.w10-foco-contrastivo","c2.lis.w10-entrevista-radio","c2.read.w10-articulo-huaca","c2.wri.w10-articulo-opinion","c2.spk.w10-intervencion-audiencia","c2.fun.w10-desmontar-presuposicion","c2.disc.w10-progresion-tematica","c2.rev.w10-integracion-semanas-6-9"],
  prerequisites: ["c2-10"],
  goal: {
    canDo: "Puedo ajustar con precisión cuánto me comprometo con lo que digo, insinuar sin afirmar cuando conviene y elegir la dosis de cortesía adecuada para pedir, rechazar, discrepar o criticar sin dañar una relación.",
    steps: [
      "Repasa en la teoría la escala de compromiso con su modo, las fórmulas de reserva, la insinuación y la preterición, y después el modelo de imagen y las herramientas de cortesía.",
      "Practica con los mensajes, correos y notas de una librería de Cádiz que ha recibido una oferta de compra.",
      "Escucha a Rocío y a Álvaro corregir sus borradores y lee la columna en la que Rocío cuenta cómo respondió.",
      "Redacta la carta de rechazo a la cadena, revísala con la lista de control y ensaya en voz alta la conversación con el propietario del local.",
    ],
  },
  theory: {
    intro: "En clase trabajaste con tu profesor dos destrezas que suelen ir juntas: medir cuánto te comprometes con una afirmación y medir cuánto presionas a la persona que te escucha. Aquí las repasas de otra manera, con los papeles de una librería familiar del barrio de La Viña, en Cádiz, que tiene que contestar a una oferta que no quiere aceptar. Cada parte trae ejemplos nuevos, una tabla o los errores que más se repiten.",
    parts: [
      {
        heading: "La escala de compromiso y el modo que exige cada escalón",
        body: [
          "Antes de escribir una frase delicada, separa lo que sabes, lo que deduces y lo que solo has oído. Cada categoría pide un escalón distinto de la escala, y cada escalón arrastra su modo. Las fórmulas de certeza y de inferencia sólida van con indicativo; las de posibilidad, con subjuntivo.",
          "La negación invierte el modo: «todo indica que hay un acuerdo» lleva indicativo, pero «nada indica que haya un acuerdo» pasa a subjuntivo. Lo mismo ocurre con «está claro que» frente a «no está claro que». La doble negación («no es imposible que») sube un poco la probabilidad respecto de «es posible que», pero conserva el subjuntivo y suena deliberadamente prudente.",
        ],
        table: {
          caption: "Del dato al rumor: un escalón para cada cosa",
          head: ["Escalón", "Fórmulas", "Modo", "Ejemplo en la librería"],
          rows: [
            ["certeza documentada", "es indudable que, no cabe duda de que, consta que", "indicativo", "Consta que la cadena ofreció ciento veinte mil euros."],
            ["inferencia sólida", "todo indica que, cabe pensar que, a todas luces", "indicativo", "Todo indica que les interesa más el local que el fondo."],
            ["posibilidad abierta", "es posible que, no es descartable que, no cabe excluir que", "subjuntivo", "No es descartable que vuelvan con otra cifra."],
            ["posibilidad prudente", "no es imposible que", "subjuntivo", "No es imposible que el propietario ya lo sepa."],
            ["negación de la base", "nada indica que, no está claro que", "subjuntivo", "Nada indica que el contrato esté firmado."],
          ],
        },
        mistakes: [
          {
            wrong: "Nada indica que el propietario ha firmado con la cadena.",
            right: "Nada indica que el propietario haya firmado con la cadena.",
            why: "La negación de la fórmula de inferencia invierte el modo: con «nada indica que» va subjuntivo.",
          },
          {
            wrong: "No es descartable que la oferta sube la semana que viene.",
            right: "No es descartable que la oferta suba la semana que viene.",
            why: "Las fórmulas de posibilidad, también las que niegan su contrario, piden subjuntivo.",
          },
        ],
        tip: "Haz una lista de tres columnas (sé, deduzco, he oído) antes de redactar. Si una frase no cabe en ninguna, no la escribas todavía.",
      },
      {
        heading: "Poner límites: reserva, fuente y probabilidad",
        body: [
          "Algunas fórmulas no suben ni bajan la certeza: acotan desde dónde hablas. «Que yo sepa» limita la afirmación a tu conocimiento y deja abierta la posibilidad de que haya más. «En principio» presenta algo como válido salvo que surja una novedad; no se confunde con «en un principio», que significa ‘al comienzo’. «A priori» indica que juzgas antes de examinar los datos.",
          "Dos pares se confunden con frecuencia. «Presumiblemente» significa ‘probablemente’, sin carga legal; «presuntamente» se reserva para hechos que se atribuyen a alguien sin que estén probados, sobre todo en el ámbito judicial. Y con «deber», la norma culta distingue «deber + infinitivo» para la obligación y «deber de + infinitivo» para la probabilidad. El uso de «deber» solo con valor de probabilidad está admitido; «deber de» con valor de obligación se desaconseja. En pasado, «debía conocer las condiciones» puede leerse de las dos maneras, y en un texto delicado conviene deshacer la ambigüedad.",
        ],
        examples: [
          { es: "Que yo sepa, nadie del equipo ha hablado con la cadena.", note: "Limita la afirmación a lo que sabe quien habla." },
          { es: "En principio, la librería abrirá en agosto, salvo que haya obras en el edificio.", note: "Validez provisional; «en un principio» sería ‘al comienzo’." },
          { es: "El representante de la cadena debe de conocer el contrato de alquiler.", note: "Probabilidad: supongo que lo conoce." },
          { es: "El representante debe respetar la confidencialidad que firmó.", note: "Obligación." },
          { es: "Presumiblemente, la cadena abrirá una tienda en la calle Ancha.", note: "Probabilidad sin acusación; «presuntamente» insinuaría un hecho ilícito." },
        ],
        mistakes: [
          {
            wrong: "En un principio, la tienda cierra los lunes, salvo en diciembre.",
            right: "En principio, la tienda cierra los lunes, salvo en diciembre.",
            why: "Se trata de una regla general con excepción, no de lo que ocurría al comienzo.",
          },
          {
            wrong: "El propietario presuntamente vendrá a la reunión del jueves.",
            right: "El propietario presumiblemente vendrá a la reunión del jueves.",
            why: "No hay ningún delito en venir a una reunión: se expresa probabilidad, no imputación.",
          },
        ],
      },
      {
        heading: "Insinuar sin afirmar y hablar de lo que se dice que no se dirá",
        body: [
          "Una insinuación transmite un contenido que no se afirma. Su ventaja estratégica es que puede cancelarse: quien dice «no digo que la cadena quiera el local, pero…» puede después negar que lo haya afirmado. Su riesgo es que el oyente entienda más de lo que querías, y también que lo perciba como una acusación cobarde. Por eso conviene usarla cuando el dato no está probado y la relación importa, no para esquivar una responsabilidad.",
          "Las fórmulas más productivas son «no digo que + subjuntivo, pero…», «habría que ver si / quién / qué…», «me limito a constatar que + indicativo» y la pregunta que deja la conclusión al oyente. La preterición es una variante: anuncias que no vas a hablar de algo y, al nombrarlo, ya lo has dicho («no voy a entrar en…», «por no hablar de…»).",
        ],
        table: {
          caption: "De la afirmación directa a la insinuación",
          head: ["Afirmación", "Insinuación", "Qué conserva quien habla"],
          rows: [
            ["La cadena quiere echarnos.", "No digo que la cadena quiera echarnos, pero ofrece mucho por un fondo que vale poco.", "Puede negar la acusación."],
            ["El propietario nos engaña.", "Habría que ver por qué el propietario no ha contestado a dos cartas.", "Deja la conclusión al lector."],
            ["La oferta es una trampa.", "Me limito a constatar que la oferta caduca en cinco días.", "Solo afirma un dato verificable."],
            ["Además, nos debe dinero.", "No voy a entrar en las facturas pendientes del año pasado.", "Lo ha mencionado sin desarrollarlo."],
          ],
        },
        examples: [
          { es: "No digo que lo hicieras a propósito, pero la noticia salió de esta tienda.", note: "Subjuntivo tras «no digo que»; el «pero» introduce lo que sí se sugiere." },
          { es: "Por no hablar del cartel que colgaron sin pedir permiso.", note: "Preterición: se nombra lo que supuestamente se calla." },
        ],
        tip: "Si después de escribir una insinuación no estarías dispuesto a sostener en voz alta lo que sugiere, cámbiala por un dato o elimínala.",
      },
      {
        heading: "Imagen, amenaza y peso: por qué una petición cuesta más que otra",
        body: [
          "La pragmática describe dos deseos en toda persona. La imagen positiva es el deseo de ser valorado; la negativa, el de que no se invada la propia libertad de acción. Pedir, rechazar, discrepar, criticar o quejarse amenaza una de las dos, o las dos a la vez: un rechazo puede herir la positiva de quien ofrece; una petición limita la negativa de quien la recibe.",
          "El peso de cada amenaza depende de tres factores: la distancia social entre los interlocutores, el poder que uno tiene sobre el otro y el grado de imposición de lo que se pide. Pedir a un compañero que te pase un libro pesa poco; pedir al propietario del local que renueve el contrato con la misma renta pesa mucho, porque hay distancia, él tiene el poder y la imposición es grande.",
        ],
        table: {
          caption: "El mismo acto con pesos distintos",
          head: ["Acto", "Situación", "Distancia · poder · imposición", "Dosis de cortesía"],
          rows: [
            ["pedir", "a Álvaro que cierre la caja", "baja · baja · baja", "¿Cierras tú la caja?"],
            ["pedir", "al propietario que mantenga la renta", "alta · alta · alta", "Le agradeceríamos mucho que valorara mantener la renta actual."],
            ["rechazar", "una invitación de una clienta", "media · nula · baja", "Qué amable, de verdad, pero ese día no puedo."],
            ["rechazar", "la oferta de la cadena", "alta · media · alta", "Agradecemos el interés, pero hemos decidido seguir; si cambian las circunstancias, serán los primeros en saberlo."],
          ],
        },
        mistakes: [
          {
            wrong: "Cuanta más cortesía, mejor: «¿Sería usted tan amable de considerar la posibilidad de pasarme la cinta adhesiva?».",
            right: "«¿Me pasas la cinta?», con un compañero de confianza.",
            why: "La cortesía excesiva en un acto de poco peso suena irónica o distante: la dosis tiene que corresponder al peso.",
          },
        ],
      },
      {
        heading: "Dosificar: pedir, rechazar, discrepar y criticar sin romper",
        body: [
          "Las herramientas gramaticales de la cortesía ya las conoces; aquí se trata de elegir cuántas usar. Alejar el verbo del presente («quería pedirte», «¿podrías…?»), convertir la orden en pregunta, quitar el agente con «se» o «habría que», incluirte en un plural («¿lo revisamos?») o rebajar la imposición con un diminutivo son dosis acumulables. «No estaría de más revisar la renta» es una petición muy suavizada.",
          "Un rechazo sólido suele tener tres pasos: agradecer, dar una razón y ofrecer una alternativa o dejar la puerta abierta. Para discrepar, el prefacio reconoce algo del otro antes de oponerse: «entiendo tu postura, pero…», «tienes razón en que…, pero…», «puede que + subjuntivo, aunque…». Una crítica útil habla del hecho y no de la persona, y termina con una propuesta. Para salvar la imagen del otro, puedes cargar tú con el malentendido: «seguramente me expliqué mal».",
          "La cortesía también se usa al revés. Pasar de golpe del tú al usted o volverse hiperformal con alguien de confianza crea distancia y puede sonar a enfado o a ironía: «Como usted mande, señor sobrino». Y existe una cortesía que no atenúa, sino que realza: los cumplidos, la insistencia al ofrecer y los rechazos rituales, frecuentes en muchas comunidades hispanohablantes como tendencia, no como regla.",
        ],
        examples: [
          { es: "Muchas gracias por pensar en nosotros. Hemos decidido seguir con la librería, pero nos encantaría colaborar en las presentaciones de la cadena.", note: "Rechazo en tres pasos: gracias, decisión con razón implícita y alternativa." },
          { es: "Tienes razón en que el escaparate necesitaba un cambio, pero quizá habría que consultarlo antes con el resto.", note: "Prefacio de acuerdo parcial + crítica impersonal + propuesta." },
          { es: "Seguramente no lo expliqué bien en la reunión: las novedades van en la mesa de la entrada.", note: "Quien habla asume el error para que el otro no quede mal." },
        ],
        mistakes: [
          {
            wrong: "Lucía, eres muy indiscreta y no se puede confiar en ti.",
            right: "Lucía, la noticia de la oferta llegó a una clienta antes de que la decidiéramos; ¿podemos acordar que estos temas se queden dentro del equipo?",
            why: "La crítica ataca a la persona; la versión útil describe el hecho y propone un acuerdo.",
          },
          {
            wrong: "Rechazamos su oferta.",
            right: "Agradecemos sinceramente su oferta, que hemos estudiado con atención; sin embargo, hemos decidido continuar con la librería.",
            why: "Un rechazo sin agradecimiento ni razón amenaza la imagen positiva de quien ofrece y cierra la relación.",
          },
        ],
        tip: "Antes de enviar un mensaje delicado, señala cada dosis de cortesía que has usado. Si son más de tres en una frase breve, probablemente sobra alguna.",
      },
    ],
  },
  grammar: {
    intro: "Primero decide cuánto sabes y a quién te diriges; después elige la forma. Las dos decisiones son independientes.",
    exercises: [
      {
        id: "c2-11-gramatica-escala",
        type: "context",
        prompt: "Lee lo que sabe quien escribe y elige la frase que se compromete exactamente con eso.",
        items: [
          {
            context: "Rocío tiene en la mano la carta de la cadena, firmada y con la cifra de la oferta.",
            q: "¿Qué frase corresponde a lo que sabe?",
            options: [
              "Cabe pensar que la cadena haya hecho una oferta.",
              "Consta por escrito que la cadena ha ofrecido ciento veinte mil euros.",
              "No es imposible que la cadena ofrezca ciento veinte mil euros.",
            ],
            answer: 1,
            why: "Hay documento firmado: certeza documentada con indicativo. Las otras rebajan sin motivo lo que se sabe.",
          },
          {
            context: "Álvaro ha visto al representante de la cadena midiendo la fachada del edificio dos veces, pero nadie le ha dicho para qué.",
            q: "¿Qué frase es la más ajustada?",
            options: [
              "Todo indica que la cadena se interesa por el edificio.",
              "Es indudable que la cadena quiere comprar el edificio.",
              "Nada indica que la cadena se interese por el edificio.",
            ],
            answer: 0,
            why: "Hay indicios, no prueba: inferencia sólida con indicativo. «Es indudable» exagera y «nada indica» contradice lo observado.",
          },
          {
            context: "Una clienta cuenta que ha oído en el mercado que el propietario ya habría vendido el edificio. No hay ningún otro dato.",
            q: "¿Cómo lo anota Rocío en sus notas?",
            options: [
              "No cabe duda de que el propietario ha vendido el edificio.",
              "Todo indica que el propietario vendió el edificio.",
              "Circula un comentario sin confirmar; nada indica, por ahora, que el edificio esté vendido.",
            ],
            answer: 2,
            why: "Un rumor sin base solo se registra como rumor; «nada indica que» lleva subjuntivo.",
          },
          {
            context: "El abogado de la librería dice que el contrato de alquiler vence en diciembre y que la ley permite al propietario no renovarlo.",
            q: "¿Qué frase resume bien la situación?",
            options: [
              "Es posible que el propietario tenga derecho a no renovar, pero no consta.",
              "No es descartable que el propietario decida no renovar el contrato en diciembre.",
              "Es indudable que el propietario no renovará el contrato.",
            ],
            answer: 1,
            why: "El derecho consta; lo que no se sabe es la decisión. Posibilidad abierta con subjuntivo sobre la decisión, no sobre el derecho.",
          },
        ],
      },
      {
        id: "c2-11-gramatica-modo",
        type: "gap",
        prompt: "Escribe el verbo entre corchetes en la forma adecuada. Fíjate en si la fórmula afirma, posibilita o niega la base.",
        items: [
          { q: "Todo indica que la cadena ___ abrir antes del verano. [querer]", answers: [["quiere"]], why: "Inferencia sólida: indicativo." },
          { q: "No está claro que el propietario ___ la oferta de la cadena. [conocer]", answers: [["conozca"]], why: "«No está claro que» niega la base: subjuntivo." },
          { q: "No cabe excluir que el banco ___ el préstamo para la reforma. [conceder]", answers: [["conceda"]], why: "Posibilidad: subjuntivo." },
          { q: "No digo que tu tía ___ razón, pero conviene escucharla. [tener]", answers: [["tenga"]], why: "«No digo que» va con subjuntivo; el «pero» introduce lo que se sugiere." },
          { q: "Me limito a constatar que la oferta ___ el viernes. [caducar]", answers: [["caduca"]], why: "«Me limito a constatar» afirma un dato: indicativo." },
          { q: "El representante ___ conocer el contrato, porque citó la fecha exacta del vencimiento. [deber, probabilidad]", answers: [["debe de", "debía de"]], why: "Probabilidad deducida de un indicio: «deber de + infinitivo»." },
        ],
      },
      {
        id: "c2-11-gramatica-dosis",
        type: "classify",
        prompt: "Clasifica cada frase según la dosis de cortesía: ¿corresponde al peso del acto o está desajustada?",
        categories: ["Dosis ajustada al peso del acto", "Dosis desajustada: demasiado brusca o demasiado ceremoniosa"],
        items: [
          { text: "Al propietario del local: «Le agradeceríamos que valorara mantener la renta actual».", cat: 0, why: "Gran imposición, distancia y poder: dosis alta." },
          { text: "A Álvaro, mientras cuadran la caja: «¿Te importaría, si no es molestia, plantearte la posibilidad de pasarme el bolígrafo?».", cat: 1, why: "Acto mínimo con mucha ceremonia: suena irónico." },
          { text: "A la cadena: «No nos interesa. Saludos».", cat: 1, why: "Rechazo de gran peso sin agradecimiento ni razón." },
          { text: "A una clienta habitual que invita a una presentación: «Qué detalle, de verdad; esta vez no puedo, pero la próxima no me la pierdo».", cat: 0, why: "Rechazo leve con agradecimiento y alternativa." },
          { text: "A Lucía, después del error: «Habría que acordar qué temas se quedan dentro del equipo, ¿no te parece?».", cat: 0, why: "Crítica impersonal con propuesta." },
          { text: "Al abogado, que cobra por hora: «Mándame el informe ya».", cat: 1, why: "Orden directa a alguien con quien hay distancia profesional." },
        ],
      },
      {
        id: "c2-11-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de forma o de elección. Corrígelo.",
        items: [
          {
            sentence: "En un principio, el descuento se aplica a todos los socios del club de lectura, salvo que se indique lo contrario.",
            answers: ["En principio, el descuento se aplica a todos los socios del club de lectura, salvo que se indique lo contrario."],
            why: "Regla general con excepción: «en principio». «En un principio» significa ‘al comienzo’.",
          },
          {
            sentence: "No es imposible que el propietario acepta nuestra propuesta.",
            answers: ["No es imposible que el propietario acepte nuestra propuesta."],
            why: "La doble negación conserva el subjuntivo de la posibilidad.",
          },
          {
            sentence: "Los empleados deben de fichar al entrar y al salir.",
            answers: ["Los empleados deben fichar al entrar y al salir."],
            why: "Es una obligación: «deber + infinitivo». «Deber de» con valor de obligación se desaconseja.",
          },
          {
            sentence: "El nuevo encargado de la cadena, presuntamente, llegará a Cádiz en marzo.",
            answers: ["El nuevo encargado de la cadena, presumiblemente, llegará a Cádiz en marzo."],
            why: "Se expresa probabilidad; «presuntamente» atribuye un hecho ilícito sin probar.",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de un comercio que recibe una oferta y de las maneras de responder sin romper una relación.",
    groups: [
      {
        title: "El local y la oferta",
        items: [
          { es: "el traspaso", note: "cesión de un local comercial con su negocio a otra persona a cambio de dinero" },
          { es: "el fondo de comercio", note: "valor de un negocio por su clientela, su nombre y su ubicación, aparte de los bienes" },
          { es: "el arrendador", note: "propietario que alquila el local" },
          { es: "renovar el contrato", note: "prolongarlo cuando vence, con las mismas condiciones o con otras" },
          { es: "la renta", note: "precio mensual del alquiler de un local" },
          { es: "la oferta vinculante", note: "propuesta que obliga a quien la hace si la otra parte la acepta" },
          { es: "la cadena", note: "empresa con muchas tiendas iguales en distintas ciudades" },
          { es: "la clientela fiel", note: "conjunto de personas que compran siempre en el mismo comercio" },
        ],
      },
      {
        title: "Responder con tacto",
        items: [
          { es: "declinar una oferta", note: "rechazarla de manera formal y cortés" },
          { es: "dejar la puerta abierta", note: "rechazar sin impedir una relación o un acuerdo futuros" },
          { es: "dar un portazo", note: "romper una relación de forma brusca (sentido figurado)" },
          { es: "guardar las formas", note: "mantener la cortesía aunque haya tensión" },
          { es: "tender la mano", note: "ofrecer colaboración o reconciliación" },
          { es: "ir con pies de plomo", note: "actuar con mucha cautela" },
          { es: "lanzar una indirecta", note: "decir algo de forma no explícita para que el otro lo entienda" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-11-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "el fondo de comercio", right: "valor de un negocio por su clientela, su nombre y su ubicación" },
          { left: "el arrendador", right: "propietario que alquila el local" },
          { left: "la oferta vinculante", right: "propuesta que obliga a quien la hace si se acepta" },
          { left: "declinar una oferta", right: "rechazarla de manera formal y cortés" },
          { left: "dar un portazo", right: "romper una relación de forma brusca" },
          { left: "ir con pies de plomo", right: "actuar con mucha cautela" },
          { left: "lanzar una indirecta", right: "decir algo de forma no explícita para que el otro lo entienda" },
        ],
      },
      {
        id: "c2-11-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["guardar las formas", "dejar la puerta abierta", "renovar el contrato", "traspaso"],
        items: [
          { q: "Queremos rechazar la oferta, pero sin cerrarnos: hay que ___ por si algún día necesitamos su distribución.", answers: [["dejar la puerta abierta"]] },
          { q: "Aunque el representante fue algo impertinente, Rocío supo ___ hasta el final de la reunión.", answers: [["guardar las formas"]] },
          { q: "Lo que de verdad nos preocupa es si el arrendador querrá ___ en diciembre.", answers: [["renovar el contrato"]] },
          { q: "En el barrio se decía que la librería estaba en ___, pero nadie había puesto ningún cartel.", answers: [["traspaso"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Oír la reserva: pares que suenan casi igual y la entonación suspendida de la insinuación",
    explanation: [
      "Varias fórmulas de esta semana se distinguen por una sílaba que, al hablar rápido, se pierde con facilidad: «en principio» y «en un principio», «presumiblemente» y «presuntamente», «debe venir» y «debe de venir». Cuando escuches, presta atención al artículo «un» y a la preposición «de», que suelen ir sin acento y unidos a la palabra siguiente.",
      "La insinuación tiene además un perfil de entonación característico. En «no digo que mienta, pero…» la voz no baja al final: se queda suspendida, como si la frase continuara. Una afirmación cerrada, en cambio, termina con un descenso claro. En la cortesía, una pregunta como «¿podrías revisarlo?» funciona como petición si termina con una subida suave; con un descenso brusco suena a orden disfrazada.",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu entonación. Úsalo para percibir los contrastes de palabras y comprueba con una persona cómo suena tu insinuación.",
    ],
    table: {
      caption: "Pares que cambian el compromiso",
      head: ["Forma", "Sílabas", "Valor"],
      rows: [
        ["en principio", "en-prin-CI-pio", "en general, salvo novedad"],
        ["en un principio", "e-nun-prin-CI-pio", "al comienzo"],
        ["presumiblemente", "pre-su-mi-ble-MEN-te", "probablemente"],
        ["presuntamente", "pre-sun-ta-MEN-te", "se atribuye sin pruebas"],
        ["debe venir", "DE-be-ve-NIR", "obligación"],
        ["debe de venir", "DE-be-de-ve-NIR", "probabilidad"],
      ],
    },
    perceive: {
      id: "c2-11-percepcion",
      type: "listen",
      prompt: "Escucha cada frase antes de leer las opciones y decide qué forma oyes.",
      items: [
        {
          q: "¿Qué fórmula oyes?",
          options: ["en principio: validez general", "en un principio: al comienzo"],
          answer: 1,
          why: "Se oye el artículo unido a la preposición: e-nun-prin-CI-pio.",
          audio: "En un principio, la librería solo vendía libros de texto.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué adverbio oyes?",
          options: ["presuntamente", "presumiblemente"],
          answer: 1,
          why: "Se oyen las sílabas «-mi-ble-»: pre-su-mi-ble-MEN-te.",
          audio: "El encargado llegará presumiblemente el lunes por la mañana.",
          voice: "es-ES-m",
        },
        {
          q: "¿Qué expresa la frase que oyes?",
          options: ["una obligación", "una probabilidad"],
          answer: 0,
          why: "No hay «de»: «debe firmar» expresa obligación.",
          audio: "El arrendador debe firmar la renovación antes de diciembre.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué expresa la frase que oyes?",
          options: ["una obligación", "una probabilidad"],
          answer: 1,
          why: "Se oye «debe de»: probabilidad deducida.",
          audio: "El representante debe de conocer el barrio desde hace años.",
          voice: "es-AR-m",
        },
      ],
    },
    produce: [
      { text: "No digo que la cadena quiera el local, pero ofrece mucho por un fondo que vale poco.", tip: "Deja la voz suspendida en «local» antes del «pero» y baja al final.", voice: "es-ES-f" },
      { text: "En principio, abrimos todo el verano, salvo que el edificio entre en obras.", tip: "Agrupa «en principio» sin artículo y haz una pausa breve después.", voice: "es-ES-m" },
      { text: "¿Podría valorar mantener la renta un año más?", tip: "Termina con una subida suave: es una petición, no una orden.", voice: "es-ES-f" },
      { text: "Seguramente me expliqué mal en la reunión del martes.", tip: "Tono bajo y tranquilo: asumes el malentendido sin dramatizar.", voice: "es-ES-m" },
    ],
    spelling: "«Presumiblemente» lleva «b» por «presumible»; los adverbios en «-mente» conservan la tilde del adjetivo, si la tiene, pero ninguno de estos la lleva.",
  },
  listening: {
    title: "Tres borradores antes de cerrar",
    context: "Rocío, dueña de una librería del barrio de La Viña, y su sobrino Álvaro revisan después de cerrar los mensajes que tienen que enviar tras recibir una oferta de compra de una cadena. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "r", name: "Rocío", voice: "es-ES-f", role: "Dueña de la librería" },
      { id: "a", name: "Álvaro", voice: "es-ES-m", role: "Sobrino de Rocío y librero" },
    ],
    script: [
      { speaker: "r", text: "Mira, esto es lo que he escrito para la cadena: «La cadena quiere quedarse con el local y la librería les da igual. No vamos a vender». ¿Qué te parece?" },
      { speaker: "a", text: "Que es verdad, probablemente, pero no lo puedes demostrar. Lo único que consta es la carta con la cifra. Lo del local lo deducimos porque su hombre ha medido la fachada dos veces. Yo pondría algo como «todo indica que su interés se centra en el local», o directamente no lo pondría. Además, ¿para qué decírselo? Solo vamos a declinar la oferta." },
      { speaker: "r", text: "Tienes razón. Entonces empiezo agradeciendo, aunque me cueste: «Agradecemos el interés y el tiempo que han dedicado a estudiar la librería». Después la decisión: «Hemos decidido continuar». ¿Y la razón?" },
      { speaker: "a", text: "Una que no ofenda. «La librería es un proyecto familiar que queremos mantener». Y deja la puerta abierta, que su distribuidora nos sirve los pedidos urgentes. «Si en el futuro podemos colaborar en presentaciones o en encargos, estaremos encantados»." },
      { speaker: "r", text: "Vale. El segundo es el de don Fernando. Le he puesto: «Le pido que me diga ya si va a renovar el contrato»." },
      { speaker: "a", text: "Eso es una orden a alguien que tiene la sartén por el mango. Con él hay distancia, el contrato es suyo y le pides mucho. Yo usaría el condicional y le dejaría margen: «Le agradeceríamos mucho que nos indicara, cuando le sea posible, si tiene previsto renovar el contrato». Y no menciones el rumor del mercado." },
      { speaker: "r", text: "Ese rumor me tiene en vilo. Que yo sepa, nadie ha visto ningún papel. En principio no debería preocuparme, pero no es descartable que la cadena le haya hecho una oferta a él también." },
      { speaker: "a", text: "Pues eso, no es descartable, pero nada indica que la haya aceptado. Si quieres aludir a ello, hazlo con cuidado: «Habría que ver si el edificio tiene otros planes». Aunque yo, con él, no insinuaría nada. Se lo preguntaría en persona." },
      { speaker: "r", text: "Me parece bien. Queda Lucía. Le había escrito: «Eres una indiscreta; la señora Amparo se ha enterado por ti»." },
      { speaker: "a", text: "Eso le va a doler y no arregla nada. Habla del hecho y propón algo: «La noticia de la oferta llegó a una clienta antes de que la decidiéramos. ¿Podemos acordar que estos temas se queden en el equipo?». Y puedes cargar tú con parte: seguramente no le dijiste que era confidencial." },
      { speaker: "r", text: "No, no se lo dije. Vale, lo cambio. Oye, y gracias. Si llego a mandar los tres mensajes como estaban, mañana no me habla nadie en todo Cádiz." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué hacen y qué criterio aplican a los tres mensajes?",
        exercise: {
          id: "c2-11-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación y el criterio general.",
          items: [
            {
              q: "¿Qué están haciendo Rocío y Álvaro?",
              options: [
                "Negocian con la cadena el precio de la librería.",
                "Revisan tres mensajes delicados antes de enviarlos.",
                "Preparan una presentación de libros para el fin de semana.",
              ],
              answer: 1,
              why: "Repasan el mensaje a la cadena, el del propietario y el de Lucía.",
            },
            {
              q: "¿Qué tienen en común las correcciones de Álvaro?",
              options: [
                "Ajustan lo que se afirma a lo que se sabe y la cortesía al peso de cada mensaje.",
                "Hacen todos los mensajes más largos y más formales.",
                "Eliminan cualquier crítica para no molestar a nadie.",
              ],
              answer: 0,
              why: "Rebaja afirmaciones no probadas y ajusta la cortesía a cada destinatario; la crítica a Lucía se mantiene, pero reformulada.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota qué cambia en cada mensaje. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-11-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles de cada corrección.",
          items: [
            {
              q: "¿En qué se basa la idea de que a la cadena le interesa el local?",
              options: [
                "En la carta de la oferta.",
                "En lo que dijo una clienta en el mercado.",
                "En que su representante midió la fachada dos veces.",
              ],
              answer: 2,
              why: "Es un indicio, no un dato: por eso Álvaro propone «todo indica que…» o no mencionarlo.",
            },
            {
              q: "¿Por qué Álvaro quiere dejar la puerta abierta con la cadena?",
              options: [
                "Porque su distribuidora les sirve los pedidos urgentes.",
                "Porque piensa vender la librería más adelante.",
                "Porque Rocío le debe dinero a la cadena.",
              ],
              answer: 0,
              why: "La relación comercial con la distribuidora les conviene.",
            },
            {
              q: "¿Qué aconseja sobre el rumor de la venta del edificio?",
              options: [
                "Mencionarlo en la carta con un condicional de rumor.",
                "No insinuarlo por escrito y preguntarlo en persona.",
                "Contárselo a Lucía para que lo confirme.",
              ],
              answer: 1,
              why: "Con el propietario prefiere no insinuar nada y preguntar cara a cara.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cómo cada borrador pasa a su versión final. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-11-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fórmula de la conversación con lo que hace.",
          pairs: [
            { left: "todo indica que su interés se centra en el local", right: "inferencia sólida a partir de un indicio" },
            { left: "le agradeceríamos mucho que nos indicara", right: "petición alejada del presente para un acto de mucho peso" },
            { left: "que yo sepa, nadie ha visto ningún papel", right: "afirmación limitada al propio conocimiento" },
            { left: "nada indica que la haya aceptado", right: "negación de la base con subjuntivo" },
            { left: "seguramente no le dijiste que era confidencial", right: "asumir parte del error para salvar la imagen del otro" },
          ],
          why: "Cada fórmula ajusta el compromiso con lo dicho o la presión sobre el destinatario.",
        },
      },
    ],
  },
  reading: {
    title: "Cómo dije que no a ciento veinte mil euros",
    genre: "Columna de opinión en una revista cultural",
    frame: "Columna de Rocío Galván, dueña de una librería del barrio de La Viña, para una revista cultural gaditana. Personas, empresas y cifras son ficticias.",
    text: [
      "Hace un mes llegó a la librería una carta con membrete de una cadena que tiene tiendas en medio país. Era breve, correcta y contenía una cifra: ciento veinte mil euros por el negocio, con su nombre, su clientela y sus estanterías de castaño. Mi primer impulso fue contestar con dos líneas que no reproduciré aquí. Mi sobrino Álvaro, que lleva cinco años detrás del mostrador conmigo, me quitó el bolígrafo de la mano. Lo que siguió fue una pequeña lección de gramática que quiero compartir, porque sospecho que no soy la única persona que ha estado a punto de dar un portazo innecesario.",
      "Lo primero que me hizo Álvaro fue separar lo que sabíamos de lo que creíamos saber. Constaba que la cadena había hecho una oferta, porque teníamos la carta. Todo indicaba, además, que su interés estaba más en el local que en la librería: su representante había medido la fachada dos veces y había preguntado por la altura del techo, no por los fondos de poesía. Pero eso era una deducción, no un hecho, y en una carta firmada una deducción presentada como hecho se convierte en una acusación. Finalmente decidimos no escribirla. No hacía falta: para declinar una oferta no hay que explicar qué intenciones se le suponen a quien la hace.",
      "Lo segundo fue el orden. Un rechazo, me dijo, amenaza la imagen de quien ofrece, y más si ha dedicado tiempo y dinero a estudiar tu negocio. Por eso la carta empieza agradeciendo, sigue con la decisión y una razón que no ofende, y termina dejando la puerta abierta. Escribimos que la librería es un proyecto familiar que queremos continuar, lo cual es cierto, y que estaríamos encantados de colaborar en presentaciones, lo cual también es cierto, porque su distribuidora nos sirve los pedidos urgentes. No mentimos en nada. Simplemente elegimos qué verdades poner y en qué orden.",
      "La carta más difícil no fue esa, sino la que escribí a don Fernando, el propietario del edificio. Nuestro contrato vence en diciembre y, que yo sepa, no ha decidido nada todavía. En el mercado se decía que la cadena le había hecho una oferta a él también. No es descartable, pero nada indica que la haya aceptado, y escribirle como si lo supiera habría sido una manera segura de empujarlo a hacerlo. Con él hay distancia, el contrato es suyo y lo que le pedimos pesa mucho. Así que la petición fue lo más suave que supimos: le agradeceríamos que nos indicara, cuando le sea posible, si tiene previsto renovar. Nada de insinuaciones. La pregunta incómoda se la hice después en persona, en el bar de la esquina, donde las preguntas incómodas pesan menos.",
      "Hubo una tercera conversación, más pequeña y más dolorosa. La noticia de la oferta llegó a una clienta antes de que nosotros hubiéramos decidido nada, y el origen estaba claro: una de nuestras libreras se lo había comentado con toda la inocencia del mundo. Mi borrador era un reproche personal. El definitivo habla del hecho, propone un acuerdo para el futuro y reconoce algo que yo había olvidado: nunca le dije que el asunto era confidencial. No digo que ella no tuviera ninguna responsabilidad, pero la mía era mayor, y decirlo así nos permitió seguir trabajando juntas al día siguiente sin que nadie bajara la mirada.",
      "He pensado mucho, estas semanas, en la diferencia entre insinuar y afirmar. Insinuar tiene mala fama, y con razón cuando se usa para acusar sin dar la cara. Pero hay insinuaciones honradas: las que se hacen cuando no se tiene la prueba y se quiere dejar al otro una salida. Por no hablar de las veces en que callar algo es la forma más elegante de decirlo. Lo que no me parece honrado es lo contrario, presentar como evidente lo que solo se sospecha, y eso es lo que estuve a punto de hacer.",
      "Don Fernando, por cierto, renovó el contrato. Presumiblemente porque prefiere una librería a una tienda de bolsos en los bajos de su casa, aunque él dice que fue por el café. La cadena contestó a nuestra carta con otra igual de cortés y, en principio, el asunto está cerrado. Si alguien me pregunta qué aprendí, diré que cada frase tiene un precio y que conviene saberlo antes de pagarlo.",
    ],
    glossary: [
      { es: "membrete", note: "nombre y datos de una empresa impresos en la parte superior del papel" },
      { es: "tener la sartén por el mango", note: "tener el control de una situación" },
      { es: "bajos", note: "planta baja de un edificio, a la altura de la calle" },
    ],
    tasks: [
      {
        id: "c2-11-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido las decisiones de la columna.",
        items: [
          {
            q: "¿Por qué no incluyeron en la carta a la cadena la idea de que solo les interesaba el local?",
            options: [
              "Porque era una deducción y, presentada como hecho, se habría convertido en una acusación.",
              "Porque la cadena les había pedido confidencialidad.",
              "Porque Álvaro pensaba que era falsa.",
            ],
            answer: 0,
            why: "El segundo párrafo explica que era una inferencia, no un dato, y que no hacía falta para declinar.",
          },
          {
            q: "¿Qué piensa la autora sobre la insinuación?",
            options: [
              "Que siempre es una forma cobarde de acusar.",
              "Que es la forma más eficaz de presionar a un propietario.",
              "Que puede ser honrada si se usa sin prueba y para dejar una salida al otro.",
            ],
            answer: 2,
            why: "El sexto párrafo distingue entre insinuaciones que acusan sin dar la cara y las que dejan una salida.",
          },
          {
            q: "¿Cómo resolvió la autora la conversación con la librera?",
            options: [
              "Le hizo un reproche personal por escrito.",
              "Habló del hecho, propuso un acuerdo y reconoció su propia responsabilidad.",
              "Decidió no decirle nada para evitar tensiones.",
            ],
            answer: 1,
            why: "El quinto párrafo describe el mensaje definitivo.",
          },
        ],
      },
      {
        id: "c2-11-lectura-funcion",
        type: "match",
        prompt: "Relaciona cada fragmento de la columna con lo que hace la autora.",
        pairs: [
          { left: "Constaba que la cadena había hecho una oferta", right: "presenta un dato documentado" },
          { left: "No es descartable, pero nada indica que la haya aceptado", right: "abre una posibilidad y niega que haya base" },
          { left: "le agradeceríamos que nos indicara, cuando le sea posible", right: "suaviza una petición de mucho peso" },
          { left: "Por no hablar de las veces en que callar algo", right: "usa una preterición" },
          { left: "Presumiblemente porque prefiere una librería", right: "atribuye una causa probable sin afirmarla" },
        ],
      },
      {
        id: "c2-11-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa una decisión de la columna con argumentos propios.",
        items: [
          {
            prompt: "La autora decidió no insinuar nada por escrito al propietario y hacerle la pregunta incómoda en persona. Explica en 70–90 palabras qué ganó con esa decisión y en qué situación preferirías tú dejarlo por escrito.",
            model: "Al no insinuar nada por escrito, la autora evitó que el propietario se sintiera acusado y no dejó un documento que pudiera leerse como desconfianza. En persona, la pregunta se acompaña de tono y gestos, y puede corregirse sobre la marcha. Yo preferiría dejarlo por escrito si la relación fuera ya conflictiva o si necesitara pruebas de lo que pregunté y de cuándo lo hice, por ejemplo ante un posible litigio.",
            checklist: [
              "Explico qué riesgo evita la autora.",
              "Comparo el canal oral y el escrito.",
              "Propongo una situación distinta y la justifico.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la autora ajusta cada afirmación a lo que sabe y cada petición a quien la recibe.",
      items: [
        { quote: "Pero eso era una deducción, no un hecho, y en una carta firmada una deducción presentada como hecho se convierte en una acusación.", note: "La escala de compromiso no es solo gramatical: tiene consecuencias." },
        { quote: "Con él hay distancia, el contrato es suyo y lo que le pedimos pesa mucho.", note: "Los tres factores del peso: distancia, poder e imposición." },
        { quote: "No digo que ella no tuviera ninguna responsabilidad, pero la mía era mayor", note: "«No digo que» con subjuntivo, usado aquí para asumir culpa, no para acusar." },
        { quote: "No mentimos en nada. Simplemente elegimos qué verdades poner y en qué orden.", note: "La cortesía estratégica selecciona y ordena, no falsea." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según el destinatario, reformulación y escritura breve. Termina recuperando clases anteriores que preparan esta semana.",
    exercises: [
      {
        id: "c2-11-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases que gradúan el compromiso o la cortesía.",
        items: [
          {
            words: ["Nada", "indica", "que", "el", "edificio", "esté", "en", "venta."],
            why: "Negación de la base + subjuntivo.",
          },
          {
            words: ["Le", "agradeceríamos", "que", "nos", "respondiera", "antes", "del", "viernes."],
            why: "Condicional de cortesía + imperfecto de subjuntivo.",
          },
          {
            words: ["Que", "yo", "sepa,", "la", "oferta", "sigue", "en", "pie."],
            why: "Reserva al inicio, afirmación en indicativo.",
          },
        ],
      },
      {
        id: "c2-11-destinatario",
        type: "context",
        prompt: "Elige la versión más adecuada para la situación indicada.",
        items: [
          {
            context: "Rocío quiere que el abogado de la librería revise la carta antes del jueves. Lo conoce desde hace años, pero le paga por horas y él está muy ocupado.",
            q: "¿Qué mensaje envía?",
            options: [
              "Revisa la carta antes del jueves.",
              "Me preguntaba si tendrías un rato para revisar la carta antes del jueves; si no puedes, lo entiendo.",
              "¿Sería usted tan sumamente amable de dignarse a revisar la carta?",
            ],
            answer: 1,
            why: "Imperfecto de cortesía, pregunta indirecta y salida para el otro: dosis media-alta para una imposición real con confianza.",
          },
          {
            context: "Un cliente propone que la librería deje de vender cómic. Rocío no está de acuerdo, pero el cliente organiza el club de lectura.",
            q: "¿Cómo discrepa?",
            options: [
              "Tienes razón en que el cómic ocupa mucho espacio, pero es lo que más venden los sábados.",
              "Eso que dices no tiene ningún sentido.",
              "Como usted diga, caballero.",
            ],
            answer: 0,
            why: "Prefacio de acuerdo parcial antes de la objeción. La tercera, con el paso a usted, sonaría irónica.",
          },
          {
            context: "Álvaro ha olvidado por tercera vez cerrar la persiana. Rocío está harta y le escribe por la noche.",
            q: "¿Qué mensaje critica el hecho sin atacar a la persona?",
            options: [
              "Eres un desastre, Álvaro.",
              "Muy bien, señor Galván, enhorabuena por su memoria.",
              "La persiana se ha quedado abierta otra vez; ¿ponemos una alarma en el móvil para la hora de cierre?",
            ],
            answer: 2,
            why: "Hecho + propuesta en plural inclusivo. La segunda usa la hiperformalidad como ironía.",
          },
        ],
      },
      {
        id: "c2-11-reformular",
        type: "transform",
        prompt: "Reformula cada frase según la instrucción, sin cambiar la información de base.",
        items: [
          {
            source: "La cadena ha comprado el edificio.",
            instruction: "Conviértela en una insinuación que puedas cancelar después, con «no digo que».",
            answers: ["No digo que la cadena haya comprado el edificio, pero…", "No digo que la cadena haya comprado el edificio, pero habría que preguntarlo."],
            why: "«No digo que» + subjuntivo deja el contenido sin afirmar.",
          },
          {
            source: "Mándenos el contrato.",
            instruction: "Transfórmala en una petición cortés para un propietario, con condicional y subjuntivo.",
            answers: ["Le agradeceríamos que nos mandara el contrato.", "Le agradeceríamos que nos enviara el contrato.", "Le agradeceríamos mucho que nos mandara el contrato."],
            why: "Condicional + imperfecto de subjuntivo alejan la petición.",
          },
          {
            source: "Todo indica que el propietario quiere renovar.",
            instruction: "Niega la base de la inferencia manteniendo el resto.",
            answers: ["Nada indica que el propietario quiera renovar."],
            why: "La negación invierte el modo: subjuntivo.",
          },
        ],
      },
      {
        id: "c2-11-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe tres frases sobre la oferta de la cadena (40–60 palabras en total): una con un dato que consta, otra con una inferencia y otra con un rumor que registras sin darle crédito. Usa una fórmula distinta en cada una y cuida el modo.",
            model: "Consta que la cadena ofreció ciento veinte mil euros por el negocio. Todo indica que su interés principal es el local, porque preguntaron por la altura del techo. Se comenta en el mercado que el propietario habría recibido otra oferta, pero nada indica que la haya aceptado.",
            checklist: [
              "Uso tres escalones distintos de la escala.",
              "Pongo subjuntivo tras «nada indica que».",
              "No presento el rumor como dato.",
            ],
          },
          {
            prompt: "Escribe un mensaje de 50–70 palabras para rechazar la invitación de una editorial a un congreso de libreros en Sevilla. Conoces poco a quien te invita y te interesa mantener la relación.",
            model: "Muchas gracias por la invitación y por pensar en nuestra librería para el congreso. Me habría encantado asistir, pero esa semana coincide con la feria del libro de Cádiz y no podemos cerrar la tienda. Si organizan alguna sesión en línea o vuelven a convocarlo el año próximo, me encantaría participar.",
            checklist: [
              "Agradezco antes de rechazar.",
              "Doy una razón que no ofende.",
              "Dejo la puerta abierta con una alternativa concreta.",
            ],
          },
        ],
      },
      {
        id: "c2-11-recuperacion",
        type: "open",
        prompt: "Recupera clases anteriores que preparan esta semana con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G173 (evidencialidad y grados de certeza, C1). Estímulo: «Por lo visto, la cadena ha abierto tres tiendas en Andalucía este año». Explica de dónde dice el hablante que viene la información y reescribe la frase como dato comprobado.",
            model: "«Por lo visto» indica que el hablante lo sabe de oídas, sin haberlo comprobado. Como dato comprobado: «Según la memoria anual de la cadena, este año ha abierto tres tiendas en Andalucía». La fuente explícita sustituye al marcador evidencial.",
            checklist: [
              "Identifico el origen indirecto de la información.",
              "Nombro una fuente concreta en la nueva versión.",
            ],
          },
          {
            prompt: "Recuperación de la clase G191 (atenuación, C1). Estímulo: «El escaparate nuevo es feo». Atenúa la crítica de dos maneras distintas para decírsela a la compañera que lo montó.",
            model: "«El escaparate nuevo, en cierto modo, resulta un poco recargado». «No sé si el escaparate termina de funcionar; quizá habría que quitar algún libro». La primera limita la crítica con «en cierto modo» y «un poco»; la segunda la convierte en duda y añade una propuesta.",
            checklist: [
              "Uso dos recursos de atenuación diferentes.",
              "La crítica sigue siendo reconocible.",
            ],
          },
          {
            prompt: "Recuperación de la clase G164 (registro y cortesía, B2). Estímulo: «Abra la reunión con el informe de ventas». Ordena estas tres versiones de más directa a más distante y di cuál usarías con el director de la cadena: «¿Podría abrir la reunión con el informe?», «Quisiera pedirle que abriera la reunión con el informe», «Abra la reunión con el informe».",
            model: "De más directa a más distante: «Abra la reunión con el informe», «¿Podría abrir la reunión con el informe?» y «Quisiera pedirle que abriera la reunión con el informe». Con el director de la cadena usaría la segunda o la tercera: hay distancia y él no está obligado a hacerlo.",
            checklist: [
              "Ordeno correctamente las tres versiones.",
              "Justifico la elección con la distancia o el poder.",
            ],
          },
          {
            prompt: "Recuperación de la clase G218 (perífrasis de ironía, semana 9). Estímulo: «Y ahora va a resultar que la culpa es de la librería». Explica qué actitud expresa la perífrasis y reescribe la frase sin ironía para un correo profesional.",
            model: "«Va a resultar que» presenta una conclusión como absurda y muestra irritación: quien habla se distancia de lo que el otro sugiere. Sin ironía: «No creo que la responsabilidad sea de la librería; les propongo revisar juntos las fechas de los pedidos».",
            checklist: [
              "Explico el valor irónico de la perífrasis.",
              "La versión profesional mantiene el desacuerdo sin ironía.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta la carta con la que la librería declina la oferta de compra de la cadena (400–500 palabras). Debe agradecer, comunicar la decisión con una razón que no ofenda, dejar la puerta abierta a una colaboración concreta y aclarar, sin acusar, un rumor que ha llegado a la prensa local.",
    context: "La carta irá firmada por la dueña y la leerá el director de expansión de la cadena, con quien no hay confianza. La prensa local ha publicado que la librería «estaría negociando su cierre»: tienes que desmentirlo sin dar a entender que la cadena filtró la noticia, porque no hay ninguna prueba.",
    steps: [
      "Haz tres columnas: lo que consta, lo que deduces y lo que solo se ha dicho. Decide qué entra en la carta y con qué fórmula.",
      "Ordena la carta: agradecimiento, decisión y razón, colaboración posible, aclaración del rumor y cierre cordial.",
      "Redacta sin copiar el modelo. Usa al menos una fórmula de reserva, una de posibilidad y una petición suavizada.",
      "Revisa la carta con la lista de control: corrige cualquier afirmación que vaya más allá de lo que consta, comprueba el modo tras cada fórmula y elimina dosis de cortesía que sobren.",
    ],
    useLanguage: [
      "Agradecemos sinceramente… / Hemos estudiado con atención…",
      "hemos decidido continuar…; si en el futuro…",
      "que nosotros sepamos / en principio",
      "nada indica que + subjuntivo / no es descartable que + subjuntivo",
      "le agradeceríamos que + imperfecto de subjuntivo",
      "Desconocemos el origen de… / Nos limitamos a constatar que…",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): Estimado señor Urquiza: Agradecemos sinceramente la propuesta que nos hizo llegar el pasado 3 de marzo y el tiempo que su equipo ha dedicado a conocer nuestra librería. La hemos estudiado con atención, en familia y con nuestro asesor, y hemos decidido continuar con el negocio tal como está. La librería es un proyecto que empezó mi padre en 1962 y que queremos seguir llevando nosotros, al menos mientras el barrio siga entrando por la puerta.",
    ],
    checklist: [
      "Ninguna afirmación va más allá de lo que consta; las inferencias llevan su fórmula.",
      "El rechazo tiene agradecimiento, razón y una alternativa concreta.",
      "El rumor se desmiente sin insinuar quién lo difundió.",
      "El modo es correcto tras cada fórmula de certeza, posibilidad o negación.",
      "La dosis de cortesía corresponde a la distancia con el destinatario, sin hiperformalidad.",
    ],
    words: [400, 500],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "La conversación con el propietario",
        prompt: "Eres Rocío y te sientas con don Fernando en el bar de la esquina. Pídele que renueve el contrato con la misma renta, pregúntale por el rumor sin acusarlo y reacciona si te dice que todavía no lo ha decidido. Habla al menos cuatro minutos, como si respondieras a sus preguntas.",
        prep: [
          "Prepara una apertura que valore la relación antes de pedir.",
          "Decide cómo vas a preguntar por el rumor: con reserva y sin insinuar.",
          "Ten pensada una alternativa si te dice que necesita subir la renta.",
        ],
        seconds: 240,
        model: "Don Fernando, antes que nada, gracias por sacar un rato. Ya sabe que el contrato vence en diciembre y, si le parece bien, nos gustaría renovarlo en las mismas condiciones. Le quería preguntar también una cosa, y perdone si es indiscreta: en el mercado se comenta que la cadena le ha hecho una oferta. Que yo sepa, es solo un comentario, pero prefiero oírlo de usted…",
        selfCheck: [
          "Valoro la relación antes de hacer la petición.",
          "Pregunto por el rumor sin presentarlo como dato.",
          "Ajusto la cortesía sin caer en la hiperformalidad.",
        ],
      },
      {
        title: "Feedback a una compañera",
        prompt: "Explícale a Lucía, en voz alta y con calma, que la noticia de la oferta llegó a una clienta por ella. Describe el hecho, reconoce tu parte, propón un acuerdo y pídele su opinión.",
        prep: [
          "Escribe el hecho en una frase, sin adjetivos sobre la persona.",
          "Prepara una frase en la que asumas parte del malentendido.",
        ],
        seconds: 150,
        model: "Lucía, quería comentarte una cosa. La señora Amparo se enteró de la oferta antes de que la decidiéramos, y creo que fue por una conversación aquí en la tienda. Seguramente fue culpa mía, porque no te dije que era confidencial. ¿Te parece que acordemos que estos temas se quedan entre nosotros? ¿Cómo lo ves tú?",
        selfCheck: [
          "Hablo del hecho, no de la persona.",
          "Asumo parte de la responsabilidad.",
          "Termino con una propuesta y una pregunta real.",
        ],
      },
      {
        title: "Tres versiones de la misma noticia",
        prompt: "Cuenta a tres personas distintas lo que sabes del rumor de la venta del edificio: a tu sobrino, a una periodista local y a un cliente que te pregunta en el mostrador. Ajusta en cada caso cuánto te comprometes.",
        prep: [
          "Separa lo que consta, lo que deduces y lo que se ha dicho.",
          "Elige una fórmula distinta para cada destinatario.",
        ],
        seconds: 120,
        selfCheck: [
          "Con la periodista no afirmo nada que no conste.",
          "Uso al menos una fórmula de reserva y una de posibilidad.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu carta de rechazo y una duda concreta. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Calibra",
        task: "Lee a tu profesor tres afirmaciones sobre un tema de actualidad y pídele que diga en qué escalón de la escala está cada una y si la fórmula corresponde a lo que sabes.",
        phrases: ["¿Me comprometo demasiado aquí?", "¿Esto lo puedo sostener o solo lo sospecho?"],
      },
      {
        move: "Pide",
        task: "Haz una petición de mucho peso a tu profesor (cambiar la fecha de una prueba, por ejemplo) y pídele que valore si la dosis de cortesía fue adecuada.",
        phrases: ["Quería pedirte una cosa, y entiendo que no sea posible…", "¿Te importaría que…?"],
      },
      {
        move: "Discrepa",
        task: "Elige una opinión de tu profesor sobre la columna de Rocío y discrepa usando un prefacio de acuerdo parcial.",
        phrases: ["Tienes razón en que…, pero…", "Puede que…, aunque…"],
      },
      {
        move: "Insinúa",
        task: "Presenta una insinuación y pide a tu profesor que diga qué ha entendido; después cancélala y comprueba si suena creíble.",
        phrases: ["No digo que…, pero…", "Yo no he dicho eso; solo he dicho que…"],
      },
    ],
    bring: "Tu carta de rechazo revisada, tu tabla de lo que consta, lo que deduces y lo que se dice, y, si quieres, la grabación de la conversación con el propietario.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "Tienes un indicio sólido, pero no una prueba. ¿Qué frase se ajusta?",
        options: [
          "Es indudable que el banco ha rechazado el préstamo.",
          "No es imposible que el banco haya rechazado el préstamo.",
          "Todo indica que el banco ha rechazado el préstamo.",
        ],
        answer: 2,
        why: "Inferencia sólida: «todo indica que» con indicativo.",
      },
      {
        type: "choice",
        q: "¿Qué frase expresa probabilidad, no obligación?",
        options: [
          "El encargado debe de estar en el almacén.",
          "El encargado debe estar en el almacén a las ocho.",
          "El encargado tiene que estar en el almacén a las ocho.",
        ],
        answer: 0,
        why: "«Deber de + infinitivo» expresa probabilidad.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué hace quien habla?",
        options: [
          "Afirma abiertamente que la cadena miente.",
          "Insinúa algo que podría negar después.",
          "Pide disculpas por un error propio.",
        ],
        answer: 1,
        why: "«No digo que…, pero» deja el contenido sin afirmar y cancelable.",
        audio: "No digo que la cadena esté detrás del rumor, pero salió el mismo día que su carta.",
        voice: "es-ES-f",
      },
      {
        type: "gap",
        q: "Nada indica que el propietario ___ la renta el año próximo.",
        answers: [["suba", "vaya a subir"]],
        hint: "La negación de la fórmula invierte el modo.",
        why: "«Nada indica que» + subjuntivo.",
      },
      {
        type: "gap",
        q: "Le agradeceríamos que nos ___ su decisión antes de octubre.",
        answers: [["comunicara", "comunicase", "indicara", "indicase"]],
        hint: "Condicional de cortesía + imperfecto de subjuntivo.",
        why: "«Agradeceríamos que» rige imperfecto de subjuntivo.",
      },
      {
        type: "transform",
        source: "Ustedes filtraron la noticia a la prensa.",
        instruction: "Reformúlala de modo que solo afirme un dato verificable y deje la conclusión al lector, con «me limito a constatar que».",
        answers: ["Me limito a constatar que la noticia apareció en la prensa.", "Me limito a constatar que la noticia salió en la prensa."],
        why: "La constatación afirma solo lo comprobable y no acusa.",
      },
      {
        type: "error",
        sentence: "En un principio, los socios tienen un diez por ciento de descuento, salvo en novedades.",
        answers: ["En principio, los socios tienen un diez por ciento de descuento, salvo en novedades."],
        why: "Regla general con excepción: «en principio».",
      },
      {
        type: "error",
        sentence: "Eres un desorganizado: los pedidos de la semana llegaron tarde.",
        answers: ["Los pedidos de la semana llegaron tarde; ¿revisamos juntos el calendario de envíos?"],
        why: "La crítica debe hablar del hecho y proponer, no calificar a la persona.",
      },
      {
        type: "order",
        words: ["No", "es", "descartable", "que", "la", "cadena", "vuelva", "a", "escribir."],
        why: "Posibilidad abierta + subjuntivo.",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un compañero por qué «rechazamos su oferta» puede dañar una relación comercial y propón una versión mejor con sus tres pasos.",
        model: "Un rechazo amenaza la imagen de quien ofrece: ha dedicado tiempo a estudiar la propuesta y espera que se valore. «Rechazamos su oferta» comunica la decisión, pero sin agradecimiento ni razón suena a portazo. Una versión mejor sería: «Agradecemos sinceramente su propuesta, que hemos estudiado con atención. Hemos decidido continuar con el negocio familiar, pero nos encantaría colaborar con ustedes en presentaciones o encargos». Así se agradece, se razona y se deja la puerta abierta.",
        checklist: [
          "Explico la amenaza a la imagen de quien ofrece.",
          "La nueva versión tiene agradecimiento, razón y alternativa.",
          "Mantengo el rechazo claro.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Separo lo que consta, lo que deduzco y lo que se dice, y elijo para cada cosa una fórmula con el modo correcto.",
      "Uso «que yo sepa», «en principio», «presumiblemente» y «deber de» con su valor exacto.",
      "Insinúo sin afirmar cuando conviene y reconozco una preterición.",
      "Ajusto la cortesía al peso de cada acto y rechazo, discrepo o critico sin romper la relación.",
    ],
    review: [
      "Dentro de dos días, tapa la columna de fórmulas de la tabla de la escala y reconstrúyela con ejemplos propios.",
      "Dentro de una semana, busca un correo real que hayas recibido con un rechazo y analiza sus pasos.",
      "En la próxima clase, lee tu carta en voz alta y pide a tu profesor que marque cada fórmula de reserva.",
    ],
  },
  related: [
    { path: "/gramatica/modalizacion-sutil-certeza-reserva-e-insinuacion", label: "Clase: Modalización sutil: certeza, reserva e insinuación" },
    { path: "/gramatica/cortesia-estrategica-y-amenaza-a-la", label: "Clase: Cortesía estratégica y amenaza a la imagen" },
  ],
};
