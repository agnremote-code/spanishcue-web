import type { Module } from "../../types";

/**
 * C1 · semana 7 · Autoestudio espejo de G178 (infinitivos dependientes y
 * sujetos implícitos) y G179 (relativas complejas: cuyo, el cual, lo cual).
 * Repaso autónomo con una asociación vecinal ficticia de Madrid que quiere
 * reabrir un cine de barrio. Audio mediante síntesis; sin acreditación regional.
 */
export const c1w07: Module = {
  id: "c1-07",
  level: "c1",
  week: 7,
  kind: "core",
  title: "El cine cuyas butacas nadie quiso tirar",
  subtitle: "Repaso de quién hace la acción de un infinitivo y de las relativas de la prosa cuidada: el cual, cuyo, lo cual y las perífrasis de relativo",
  stop: {
    place: "Madrid",
    country: "España",
  },
  minutes: 120,
  newObjectives: [
    "c1.gram.g178",
    "c1.gram.g179",
    "c1.voc.w07-cine-patrimonio",
    "c1.pron.w07-pausa-explicativa",
    "c1.lis.w07-entrevista-memoria",
    "c1.read.w07-tribuna-cine",
    "c1.wri.w07-solicitud-proteccion",
    "c1.spk.w07-defensa-publica",
    "c1.fun.w07-atribuir-testimonios",
    "c1.disc.w07-cohesion-relativos",
  ],
  reviewObjectives: ["c1.gram.g177","c1.voc.w06-consorcio-actas","c1.pron.w06-pausa-absoluta","c1.lis.w06-redaccion-acta","c1.read.w06-actas-edificio","c1.wri.w06-circular-vecinos","c1.spk.w06-relato-asamblea","c1.fun.w06-resumir-decisiones","c1.disc.w06-registro-condensado"],
  prerequisites: ["c1-06"],
  goal: {
    canDo: "Puedo decidir si un infinitivo basta o hace falta «que» + verbo conjugado según quién realiza la acción, situar hechos anteriores con «haber» + participio, y enlazar información con «el cual», «cuyo», «lo cual» y perífrasis de relativo en un texto cuidado.",
    steps: [
      "Repasa en la teoría el sujeto implícito del infinitivo, el infinitivo compuesto y las relativas con preposición, «cuyo» y «lo cual».",
      "Practica con frases sobre la historia de un cine de barrio de Chamberí y sus antiguos trabajadores.",
      "Escucha la entrevista a una antigua taquillera y lee una tribuna de opinión que defiende la reapertura.",
      "Escribe la solicitud de protección al Ayuntamiento, revísala y defiende el proyecto en voz alta.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases que tienen algo en común: las dos sirven para enlazar ideas sin repetir. El infinitivo te ahorra un sujeto cuando ya se sabe quién actúa; el relativo te ahorra un sustantivo cuando ya lo has nombrado. Los dos fallan del mismo modo: cuando el lector no puede recuperar lo que se ha omitido.",
    parts: [
      {
        heading: "¿Quién hace la acción del infinitivo?",
        body: [
          "Un infinitivo no lleva sujeto propio a la vista, pero siempre hay alguien que realiza su acción. Con verbos como querer, prometer, intentar, decidir, afirmar o negar, ese alguien es el sujeto del verbo principal: «Inés prometió llamar al concejal» (llama Inés). Con verbos de influencia como obligar, permitir, prohibir, aconsejar o invitar, es la persona que recibe la orden o el permiso: «El dueño nos prohibió entrar en la cabina» (no entramos nosotros). Con verbos de percepción ocurre lo mismo: «La vi cruzar la calle» (cruza ella).",
          "Con los verbos del tipo gustar, el que actúa es la persona en dativo: «A mi abuelo le encantaba sentarse en el gallinero». Y con expresiones impersonales («es necesario», «conviene», «está prohibido»), el sujeto es general: «Conviene llegar antes de la sesión». Si el sujeto que quieres es otro, necesitas «que» + verbo conjugado: «Quiero ir al estreno» frente a «Quiero que vayas al estreno».",
          "Con los verbos de influencia muchas veces caben las dos opciones: «Te aconsejo reservar» y «Te aconsejo que reserves» dicen lo mismo. Lo que no cabe es mezclar estructuras: después de «que» va siempre un verbo conjugado.",
        ],
        table: {
          caption: "El sujeto del infinitivo según el verbo principal",
          head: ["Tipo de verbo", "Ejemplo", "Quién hace la acción del infinitivo"],
          rows: [
            ["deseo, intención, decisión", "Decidimos recoger firmas.", "nosotros (sujeto principal)"],
            ["afirmación o negación", "El promotor niega conocer el proyecto.", "el promotor"],
            ["influencia", "La concejala les permitió visitar la sala.", "ellos (objeto)"],
            ["percepción", "Oímos chirriar el telón.", "el telón"],
            ["tipo gustar", "A Remedios le dolía ver la sala cerrada.", "Remedios (dativo)"],
            ["impersonal", "Es urgente catalogar el edificio.", "cualquiera, nadie en concreto"],
          ],
        },
        mistakes: [
          {
            wrong: "Esperamos que reabrir el cine antes de Navidad.",
            right: "Esperamos reabrir el cine antes de Navidad. / Esperamos que el cine reabra antes de Navidad.",
            why: "Tras «que» va un verbo conjugado. Si el sujeto es el mismo, basta el infinitivo.",
          },
          {
            wrong: "Nos obligaron que desalojáramos la sala.",
            right: "Nos obligaron a desalojar la sala. / Nos obligaron a que desalojáramos la sala.",
            why: "«Obligar» rige «a»: la preposición no desaparece ni con infinitivo ni con «que».",
          },
          {
            wrong: "Quiero que yo hable con el concejal.",
            right: "Quiero hablar yo con el concejal.",
            why: "Con el mismo sujeto no se usa «que»; si quieres subrayarlo, pon el pronombre detrás del infinitivo.",
          },
        ],
      },
      {
        heading: "Anterioridad, sujeto explícito e infinitivo como sustantivo",
        body: [
          "El infinitivo compuesto («haber» + participio) sitúa la acción antes de la del verbo principal: «Remedios asegura haber vendido la última entrada» (primero la vendió, ahora lo asegura). Compara «Recuerdo cerrar la taquilla cada noche» (hábito que recuerdas) con «Recuerdo haber cerrado la taquilla aquella noche» (hecho concreto anterior). Con «después de» o «tras» el compuesto es opcional, porque la preposición ya marca la anterioridad. En registro formal también existe el gerundio compuesto: «Habiendo agotado las vías amistosas, la asociación recurrió a la prensa».",
          "Cuando el sujeto del infinitivo no se deduce, puede aparecer detrás de él: «Al cerrar el cine sus dueños, el barrio perdió su punto de encuentro», «Antes de llegar tú, ya estaba todo decidido». Y si el sujeto puede ser ambiguo, conviene una subordinada conjugada: en «Al salir del cine, el acomodador nos despidió», ¿quién sale? Mejor: «Cuando salimos del cine, el acomodador nos despidió».",
          "El infinitivo también puede funcionar como sustantivo, con artículo y adjetivos: «el continuo ir y venir de los espectadores», «el crujir de las butacas». En el habla caribeña es frecuente «para yo entender», con el sujeto delante del infinitivo; en un texto cuidado se prefiere «para que yo entienda».",
        ],
        examples: [
          { es: "El antiguo dueño niega haber recibido ninguna oferta del Ayuntamiento.", note: "Infinitivo compuesto: la recepción sería anterior a la negación." },
          { es: "Habiendo reunido tres mil firmas, la asociación pidió una reunión con la concejala.", note: "Gerundio compuesto, propio de la escritura formal." },
          { es: "Al apagarse las luces de la sala, se hacía un silencio absoluto.", note: "Sujeto explícito detrás del infinitivo: «las luces»." },
        ],
        mistakes: [
          {
            wrong: "Me acuerdo haber visto allí «Bienvenido, Mister Marshall».",
            right: "Recuerdo haber visto allí… / Me acuerdo de haber visto allí…",
            why: "«Recordar» va sin preposición; «acordarse» lleva «de». No se cruzan.",
          },
          {
            wrong: "El proyeccionista niega cortar la película aquella noche.",
            right: "El proyeccionista niega haber cortado la película aquella noche.",
            why: "Se niega un hecho anterior y concreto: infinitivo compuesto.",
          },
        ],
        tip: "Prueba rápida: sustituye el infinitivo por «que» + verbo conjugado. Si el sujeto que te sale es el que quieres decir, el infinitivo está bien usado.",
      },
      {
        heading: "Preposición + relativo, «el cual» y «cuyo»",
        body: [
          "Cuando el verbo de la relativa exige una preposición, esta va delante del relativo: «la sala en la que trabajé», «el vecino con el que hablaste». Con preposiciones breves (a, con, de, en, por) lo más natural es «el que» o «la que». Con preposiciones largas o locuciones (según, sobre, durante, mediante, gracias a, a pesar de, en torno a) la prosa cuidada prefiere «el cual»: «el informe según el cual el edificio está en ruina», «la campaña gracias a la cual se salvó el mercado». Nunca vale «sobre que» ni «según que» como relativo.",
          "Sin preposición, «el cual» solo aparece en relativas explicativas, entre comas: «El cine, el cual abrió en 1951, cerró en 2009». En las especificativas se usa «que»: «la película que vimos», nunca «la película la cual vimos». «El cual» tiene una ventaja: su género y número permiten elegir un antecedente lejano. En «la nieta del proyeccionista, el cual vivía en la calle Ponzano», quien vivía allí es el proyeccionista.",
          "«Cuyo» une un poseedor y lo poseído, y concuerda con lo poseído: «el cine cuyas butacas se conservan», «la familia cuyo archivo donó las fotos». Admite preposición delante: «una vecina en cuya casa se reunía la asociación», «el arquitecto sin cuyo informe no habríamos ganado». Con cuantificadores, la relativa partitiva se construye con «de los cuales»: «trescientas butacas, la mayoría de las cuales siguen en pie».",
        ],
        table: {
          caption: "Qué relativo elegir",
          head: ["Situación", "Relativo", "Ejemplo"],
          rows: [
            ["especificativa sin preposición", "que", "la sala que reformaron"],
            ["preposición breve", "el que / el cual", "el banco en el que nos sentábamos"],
            ["preposición larga o locución", "el cual (preferido)", "el estudio según el cual…"],
            ["explicativa sin preposición", "que / el cual", "El Lumbreras, el cual cerró en 2009, …"],
            ["posesión", "cuyo, cuya, cuyos, cuyas", "el pasaje cuya bóveda se hundió"],
            ["partitivo", "de los cuales / de las cuales", "cinco proyectores, dos de los cuales funcionan"],
          ],
        },
        mistakes: [
          {
            wrong: "Es un edificio que su fachada está protegida.",
            right: "Es un edificio cuya fachada está protegida.",
            why: "«Que su» (quesuismo) es frecuente al hablar, pero la norma escrita pide «cuyo» concordado con lo poseído.",
          },
          {
            wrong: "El acuerdo sobre que discutimos sigue sin firmarse.",
            right: "El acuerdo sobre el cual (sobre el que) discutimos sigue sin firmarse.",
            why: "Tras preposición, el relativo necesita artículo.",
          },
          {
            wrong: "Tenemos cuarenta fotos, la mayoría de ellas de las cuales están rotas.",
            right: "Tenemos cuarenta fotos, la mayoría de las cuales están rotas.",
            why: "El partitivo lleva «de las cuales» sin repetir «de ellas».",
          },
        ],
      },
      {
        heading: "«Lo cual», adverbios relativos y perífrasis de relativo",
        body: [
          "Cuando el antecedente no es un sustantivo sino toda una oración, se usa «lo cual» o «lo que», siempre tras coma: «El dueño vendió el edificio sin avisar, lo cual indignó al barrio». «Lo cual» es más formal y evita confundir la relativa con una interrogativa indirecta.",
          "Para lugar, tiempo y modo existen relativos adverbiales: «donde», «cuando», «como». Con un antecedente de lugar, «donde» equivale a «en el que»: «la plaza donde se proyectaba cine de verano». Con un antecedente de tiempo en una especificativa, se prefiere «en que» o «en el que»: «el año en que cerró el cine», no «el año donde cerró».",
          "Las perífrasis de relativo destacan un elemento: «Fue Remedios quien vendió la última entrada», «Fueron los vecinos los que salvaron el telón», «Fue en 1962 cuando se instaló la pantalla panorámica», «Es aquí donde estaba la cabina». El relativo depende de lo destacado (quien para personas, donde para lugares, cuando para tiempo, como para modo) y «ser» concuerda en número con ese elemento. En el habla oral se oye también «la señora que le compraba los caramelos» o «la casa que vivía en ella»: son estructuras con pronombre de refuerzo que la escritura cuidada evita.",
        ],
        examples: [
          { es: "La asociación ha reunido cinco mil firmas, lo cual demuestra el interés del barrio.", note: "«Lo cual» retoma toda la oración anterior." },
          { es: "Fueron las taquilleras quienes guardaron los programas de mano.", note: "«Fueron» concuerda con «las taquilleras»." },
          { es: "Fue así como el cine sobrevivió a la llegada de la televisión.", note: "Destaca el modo: «como»." },
        ],
        mistakes: [
          {
            wrong: "1975 fue el año donde se cambiaron las butacas.",
            right: "1975 fue el año en que (en el que) se cambiaron las butacas.",
            why: "Con un antecedente de tiempo en una especificativa, «en que», no «donde».",
          },
          {
            wrong: "Fue los acomodadores los que avisaron del incendio.",
            right: "Fueron los acomodadores los que avisaron del incendio.",
            why: "En la perífrasis de relativo, «ser» concuerda con el elemento destacado.",
          },
        ],
        tip: "Antes de escribir «el cual», pregúntate si hay preposición o si la relativa va entre comas. Si no se cumple ninguna de las dos condiciones, usa «que».",
      },
    ],
  },
  grammar: {
    intro: "Trabaja primero el sujeto de los infinitivos, después los relativos y termina con un ejercicio de reformulación.",
    exercises: [
      {
        id: "c1-07-gramatica-sujeto",
        type: "context",
        prompt: "Lee la frase y decide quién realiza la acción del infinitivo.",
        items: [
          {
            context: "Acta de la asociación: «La concejala nos invitó a presentar el proyecto en el pleno».",
            q: "¿Quién presentará el proyecto?",
            options: ["La concejala.", "La asociación (nosotros).", "El pleno."],
            answer: 1,
            why: "«Invitar» es un verbo de influencia: actúa la persona invitada.",
          },
          {
            context: "Declaración del antiguo dueño: «Lamento no haber vendido el cine a la asociación».",
            q: "¿Quién no vendió el cine?",
            options: ["El antiguo dueño.", "La asociación.", "Cualquiera: es impersonal."],
            answer: 0,
            why: "«Lamentar» comparte sujeto con el infinitivo: el que lamenta es el que no vendió.",
          },
          {
            context: "Recuerdo de una vecina: «Desde la ventana vi a los operarios desmontar el rótulo luminoso».",
            q: "¿Quién desmontó el rótulo?",
            options: ["La vecina.", "Los operarios.", "No se puede saber."],
            answer: 1,
            why: "Con verbos de percepción actúa lo percibido: los operarios.",
          },
          {
            context: "Folleto de la campaña: «A los socios más jóvenes les entusiasma organizar sesiones de cine mudo».",
            q: "¿Quién organiza las sesiones?",
            options: ["Los socios más jóvenes.", "La asociación en general.", "El cine."],
            answer: 0,
            why: "Con verbos del tipo gustar, actúa la persona en dativo: «les».",
          },
        ],
      },
      {
        id: "c1-07-gramatica-infinitivo",
        type: "gap",
        prompt: "Completa con infinitivo simple, infinitivo compuesto o «que» + verbo conjugado, según quién hace la acción y cuándo.",
        items: [
          { q: "El ayuntamiento nos prohibió ___ carteles en la fachada. [colgar]", answers: [["colgar"]], why: "Verbo de influencia: actúa el objeto («nos»)." },
          { q: "Remedios jura ___ la recaudación completa la última noche. [entregar, antes]", answers: [["haber entregado"]], why: "Jura ahora algo ocurrido antes: infinitivo compuesto." },
          { q: "La asociación quiere que el Ayuntamiento ___ el edificio. [comprar]", answers: [["compre"]], why: "Sujetos distintos: «que» + presente de subjuntivo." },
          { q: "Antes de ___ tú, ya habíamos decidido la fecha. [llegar]", answers: [["llegar"]], why: "El sujeto explícito va detrás del infinitivo: «antes de llegar tú»." },
          { q: "Los vecinos se quejan del continuo ___ de camiones de la obra. [ir y venir]", answers: [["ir y venir"]], why: "Infinitivo nominal con artículo y adjetivo." },
          { q: "Te aconsejo ___ las entradas con antelación. [reservar]", answers: [["reservar", "que reserves"]], why: "Con «aconsejar» caben las dos estructuras." },
        ],
      },
      {
        id: "c1-07-gramatica-relativos",
        type: "gap",
        prompt: "Escribe el relativo adecuado (con preposición o artículo si hace falta) para un texto cuidado.",
        items: [
          { q: "El informe técnico, según ___ la estructura es sólida, desmiente al promotor.", answers: [["el cual"]], why: "Tras «según», «el cual»." },
          { q: "Es un cine ___ marquesina fue diseñada por un arquitecto racionalista.", answers: [["cuya"]], why: "«Cuyo» concuerda con lo poseído: «marquesina», femenino singular." },
          { q: "Conservamos doce bobinas, tres de ___ están dañadas.", answers: [["las cuales"]], why: "Partitivo: «de las cuales», concordado con «bobinas»." },
          { q: "La asociación perdió la primera votación, ___ no desanimó a nadie.", answers: [["lo cual", "lo que"]], why: "El antecedente es toda la oración: «lo cual» o «lo que»." },
          { q: "Fue en el verano de 1977 ___ se proyectó la primera película en color.", answers: [["cuando"]], why: "Perífrasis de relativo que destaca un tiempo: «cuando»." },
          { q: "Ese es el vecino en ___ casa se guardan los programas antiguos.", answers: [["cuya"]], why: "Preposición + «cuya», concordado con «casa»." },
        ],
      },
      {
        id: "c1-07-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de infinitivo o de relativo. Corrígela para un texto escrito cuidado.",
        items: [
          {
            sentence: "Los técnicos nos obligaron que vaciáramos la cabina.",
            answers: ["Los técnicos nos obligaron a vaciar la cabina.", "Los técnicos nos obligaron a que vaciáramos la cabina."],
            why: "«Obligar» rige la preposición «a».",
          },
          {
            sentence: "Es una vecina que su padre fue acomodador del cine.",
            answers: ["Es una vecina cuyo padre fue acomodador del cine."],
            why: "Quesuismo: la norma pide «cuyo» concordado con «padre».",
          },
          {
            sentence: "La película la cual vimos en el cineclub era muda.",
            answers: ["La película que vimos en el cineclub era muda."],
            why: "Especificativa sin preposición: solo «que».",
          },
          {
            sentence: "Fue los vecinos del barrio quienes pagaron el nuevo telón.",
            answers: ["Fueron los vecinos del barrio quienes pagaron el nuevo telón."],
            why: "«Ser» concuerda con el elemento destacado, plural.",
          },
          {
            sentence: "Me acuerdo haber hecho cola dos horas para un estreno.",
            answers: ["Me acuerdo de haber hecho cola dos horas para un estreno.", "Recuerdo haber hecho cola dos horas para un estreno."],
            why: "«Acordarse» lleva «de»; «recordar» va sin preposición.",
          },
        ],
      },
      {
        id: "c1-07-gramatica-reformular",
        type: "open",
        prompt: "Reformula según se te pide. Compara después con el modelo y revisa con la lista.",
        items: [
          {
            prompt: "Une en una sola oración cuidada, con un relativo adecuado: «El cine tenía un anfiteatro. Desde el anfiteatro se veía toda la sala. Al anfiteatro lo llamaban el gallinero».",
            model: "El cine tenía un anfiteatro, al cual llamaban el gallinero, desde el que se veía toda la sala.",
            checklist: ["Mantengo la preposición que exige cada verbo («llamar a», «ver desde»).", "Uso comas en la explicativa.", "No repito «anfiteatro»."],
          },
          {
            prompt: "Corrige la ambigüedad de esta frase con una subordinada conjugada: «Al entrar en la sala, el acomodador le pidió la entrada a mi madre».",
            model: "Cuando mi madre entró en la sala, el acomodador le pidió la entrada.",
            checklist: ["Queda claro quién entra.", "Conservo el orden temporal de los hechos."],
          },
          {
            prompt: "Destaca de tres maneras distintas, con perífrasis de relativo, la información de esta frase: «Remedios guardó los carteles en su desván en 1990».",
            model: "Fue Remedios quien guardó los carteles en su desván en 1990. / Fue en su desván donde Remedios guardó los carteles. / Fue en 1990 cuando Remedios guardó los carteles en su desván.",
            checklist: ["Uso un relativo distinto para persona, lugar y tiempo.", "«Ser» concuerda con lo destacado."],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico para hablar de cines de barrio y de la defensa del patrimonio urbano ante una administración.",
    groups: [
      {
        title: "El cine por dentro",
        items: [
          { es: "la taquilla", note: "ventanilla donde se venden las entradas" },
          { es: "el acomodador", note: "persona que acompaña al espectador hasta su butaca" },
          { es: "la cabina de proyección", note: "cuarto desde el que se proyecta la película" },
          { es: "el patio de butacas", note: "planta baja de la sala, frente a la pantalla" },
          { es: "el gallinero", note: "en España, nombre coloquial del anfiteatro más alto y barato" },
          { es: "la sesión continua", note: "proyección que se repite sin interrupción y permite entrar en cualquier momento" },
          { es: "el programa de mano", note: "folleto con la información de la película que se repartía a la entrada" },
        ],
      },
      {
        title: "Patrimonio y administración",
        items: [
          { es: "catalogar un edificio", note: "incluirlo en el registro oficial de bienes protegidos" },
          { es: "el grado de protección", note: "nivel que indica qué partes de un edificio no se pueden modificar" },
          { es: "el expediente", note: "conjunto de documentos de un trámite administrativo" },
          { es: "la recogida de firmas", note: "campaña para reunir apoyos por escrito" },
          { es: "el pleno municipal", note: "reunión de todos los concejales de un ayuntamiento" },
          { es: "el promotor inmobiliario", note: "empresa que compra suelo o edificios para construir y vender" },
          { es: "la licencia de derribo", note: "permiso oficial para demoler un edificio" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-07-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "el acomodador", right: "persona que acompaña al espectador hasta su butaca" },
          { left: "el gallinero", right: "anfiteatro más alto y barato de un cine o teatro" },
          { left: "la sesión continua", right: "proyección que se repite sin interrupción" },
          { left: "catalogar un edificio", right: "incluirlo en el registro oficial de bienes protegidos" },
          { left: "el expediente", right: "conjunto de documentos de un trámite administrativo" },
          { left: "la licencia de derribo", right: "permiso oficial para demoler un edificio" },
        ],
      },
      {
        id: "c1-07-lexico-uso",
        type: "gap",
        prompt: "Completa la noticia con la expresión adecuada.",
        bank: ["recogida de firmas", "grado de protección", "pleno municipal", "promotor inmobiliario"],
        items: [
          { q: "La ___ superó las cinco mil adhesiones en un mes.", answers: [["recogida de firmas"]] },
          { q: "El ___ que compró el solar quiere construir viviendas de lujo.", answers: [["promotor inmobiliario"]] },
          { q: "La propuesta se debatirá en el próximo ___ de diciembre.", answers: [["pleno municipal"]] },
          { q: "La asociación pide un ___ que impida derribar la fachada.", answers: [["grado de protección"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Relativas explicativas y especificativas: la pausa cambia el significado",
    explanation: [
      "Una relativa especificativa forma un solo grupo fónico con su antecedente, sin pausas: «Los vecinos que firmaron recibirán una invitación» (solo los que firmaron). Una explicativa se separa con dos pausas y se pronuncia en un tono algo más bajo, como un inciso: «Los vecinos, que firmaron, recibirán una invitación» (todos firmaron y todos la recibirán).",
      "Al hablar, la pausa es la única pista que tiene el oyente, así que conviene marcarla con claridad, sobre todo con «el cual», «lo cual» y «cuyo» en una explicativa. Con «lo cual» la pausa previa es obligatoria: retoma todo lo dicho antes.",
      "El audio usa síntesis de voz con acento peninsular: sirve para percibir el contraste entre pausas, no certifica un acento regional ni evalúa tu pronunciación.",
    ],
    table: {
      caption: "Con pausa o sin pausa",
      head: ["Especificativa (sin pausa)", "Explicativa (con pausas)"],
      rows: [
        ["Las butacas que estaban rotas se tiraron.", "Las butacas, que estaban rotas, se tiraron."],
        ["Los socios que viven en Chamberí votarán.", "Los socios, que viven en Chamberí, votarán."],
        ["Las fotos que donó Remedios están en la web.", "Las fotos, que donó Remedios, están en la web."],
      ],
    },
    perceive: {
      id: "c1-07-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide si la relativa es especificativa o explicativa por las pausas.",
      items: [
        {
          q: "¿Qué se tiró?",
          options: ["Todas las butacas, porque todas estaban rotas.", "Solo las butacas rotas."],
          answer: 1,
          why: "No hay pausa: especificativa. Se seleccionan las rotas.",
          audio: "Las butacas que estaban rotas se tiraron al contenedor.",
          voice: "es-ES-m",
        },
        {
          q: "¿Qué butacas acabaron en el contenedor?",
          options: ["Todas, porque todas estaban rotas.", "Solo las que estaban rotas."],
          answer: 0,
          why: "Hay pausas: explicativa. El dato vale para todas.",
          audio: "Las butacas, que estaban rotas, acabaron en el contenedor.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué retoma «lo cual»?",
          options: ["Solo la palabra «edificio».", "Todo el hecho de vender el edificio sin avisar.", "Al dueño."],
          answer: 1,
          why: "Tras la pausa, «lo cual» retoma toda la oración anterior.",
          audio: "El dueño vendió el edificio sin avisar a nadie, lo cual enfadó a todo el barrio.",
          voice: "es-ES-m",
        },
        {
          q: "¿Cuántos socios irán a la reunión?",
          options: ["Todos los socios, que además son de Chamberí.", "Solo los socios que viven en Chamberí.", "Ninguno."],
          answer: 0,
          why: "Las pausas convierten la relativa en explicativa: todos los socios viven allí y todos irán.",
          audio: "Los socios, que viven en Chamberí, irán a la reunión del jueves.",
          voice: "es-ES-f",
        },
      ],
    },
    produce: [
      { text: "El cine, cuya marquesina sigue en pie, abrió sus puertas en 1951.", tip: "Haz dos pausas y baja el tono en el inciso.", voice: "es-ES-f" },
      { text: "Los carteles que guardó Remedios son los únicos que quedan.", tip: "Sin pausas: un solo grupo hasta «Remedios».", voice: "es-ES-m" },
      { text: "Reunimos cinco mil firmas en un mes, lo cual sorprendió incluso a la concejala.", tip: "Pausa clara antes de «lo cual».", voice: "es-ES-f" },
      { text: "Fue en este patio de butacas donde mis padres se conocieron.", tip: "Acento fuerte en «este patio de butacas», lo destacado.", voice: "es-ES-m" },
    ],
    spelling: "Las comas de una explicativa van siempre en pareja: una antes del relativo y otra al final del inciso, salvo que el inciso cierre la oración.",
  },
  listening: {
    title: "La última entrada",
    context: "Julián, voluntario de la asociación vecinal, graba en su casa una entrevista a Remedios, que fue taquillera del cine Lumbreras durante treinta años. El testimonio formará parte del expediente para pedir la protección del edificio. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como una variedad regional verificada.",
    speakers: [
      { id: "j", name: "Julián", voice: "es-ES-m", role: "Voluntario de la asociación vecinal" },
      { id: "r", name: "Remedios", voice: "es-ES-f", role: "Antigua taquillera del cine" },
    ],
    script: [
      { speaker: "j", text: "Remedios, gracias por recibirme. Para el expediente necesitamos que nos cuente cómo era el cine por dentro. ¿Recuerda la primera vez que entró a trabajar?" },
      { speaker: "r", text: "Como si fuera ayer. Fue en el sesenta y ocho cuando me contrató don Anselmo, el dueño, cuya mujer llevaba la taquilla desde la inauguración. Ella me enseñó a contar el cambio sin mirar, lo cual en aquella época era casi un arte. Me obligaba a repasar la caja tres veces antes de cerrar." },
      { speaker: "j", text: "¿Y cómo era la sala?" },
      { speaker: "r", text: "Tenía seiscientas butacas, la mayoría de las cuales eran de madera con el asiento de terciopelo granate. Arriba estaba el gallinero, desde el cual los chavales tiraban cáscaras de pipas al patio de butacas. El acomodador, que se llamaba Pepe, los vigilaba con una linterna, pero ellos aseguraban no haber tirado nada nunca, claro." },
      { speaker: "j", text: "Usted ha dicho que guarda cosas de aquella época." },
      { speaker: "r", text: "Sí. Cuando cerraron, en dos mil nueve, el administrador nos permitió llevarnos lo que quisiéramos antes de vaciar el local. Yo me quedé con los programas de mano y con el libro de caja en el que apuntaba cada sesión. Fue mi marido quien bajó del techo el rótulo de neón, que todavía funciona, por cierto." },
      { speaker: "j", text: "¿Es verdad que usted vendió la última entrada?" },
      { speaker: "r", text: "Eso dicen, y yo juro haberla vendido, aunque el proyeccionista sostenía que la había vendido él por la ventanilla de atrás. Lo que sí recuerdo es haber llorado al apagar las luces. Al salir yo, Pepe cerró con llave y nos quedamos los dos mirando la marquesina sin decir nada." },
      { speaker: "j", text: "¿Qué le gustaría que pasara con el edificio?" },
      { speaker: "r", text: "Me encantaría ver a mis nietos sentarse donde me sentaba yo. No pido que vuelva a ser como antes, que eso es imposible. Pido que no lo tiren, que se proteja la fachada y que el barrio tenga un sitio en el que la gente se encuentre sin tener que gastar dinero." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la entrevista completa sin abrir la transcripción. ¿Qué tipo de testimonio es y qué pide Remedios?",
        exercise: {
          id: "c1-07-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la idea general.",
          items: [
            {
              q: "¿Para qué sirve esta entrevista?",
              options: ["Para un documental sobre el cine español.", "Para incluirla en el expediente de protección del edificio.", "Para seleccionar a una nueva taquillera."],
              answer: 1,
              why: "Julián lo dice al principio: el testimonio irá al expediente.",
            },
            {
              q: "¿Qué pide Remedios al final?",
              options: ["Que el cine vuelva a funcionar exactamente como antes.", "Que le devuelvan los objetos que se llevó.", "Que no derriben el edificio y que el barrio tenga un lugar de encuentro."],
              answer: 2,
              why: "Dice que no pide volver al pasado, sino que no lo tiren y se proteja la fachada.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "c1-07-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Quién enseñó a Remedios a contar el cambio?",
              options: ["La mujer de don Anselmo.", "Don Anselmo.", "Pepe, el acomodador."],
              answer: 0,
              why: "«Don Anselmo, cuya mujer llevaba la taquilla… Ella me enseñó».",
            },
            {
              q: "¿Quién bajó el rótulo de neón?",
              options: ["El administrador.", "Pepe.", "El marido de Remedios."],
              answer: 2,
              why: "«Fue mi marido quien bajó del techo el rótulo de neón».",
            },
            {
              q: "¿Qué discuten Remedios y el proyeccionista?",
              options: ["Quién cerró el cine con llave.", "Quién vendió la última entrada.", "Quién se quedó con el libro de caja."],
              answer: 1,
              why: "Ella jura haberla vendido; él sostenía que la había vendido él.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en las estructuras que usa Remedios. Relaciona y consulta la transcripción después.",
        exercise: {
          id: "c1-07-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con la estructura que ilustra.",
          pairs: [
            { left: "don Anselmo, cuya mujer llevaba la taquilla", right: "«cuyo» concordado con lo poseído" },
            { left: "la mayoría de las cuales eran de madera", right: "relativa partitiva" },
            { left: "yo juro haberla vendido", right: "infinitivo compuesto para un hecho anterior" },
            { left: "Al salir yo, Pepe cerró con llave", right: "sujeto explícito detrás del infinitivo" },
            { left: "Fue mi marido quien bajó del techo el rótulo", right: "perífrasis de relativo que destaca a una persona" },
          ],
          why: "El testimonio oral de Remedios combina estructuras cuidadas con un tono cercano.",
        },
      },
    ],
  },
  reading: {
    title: "Seiscientas butacas y un barrio",
    genre: "Tribuna de opinión en un periódico local",
    frame: "Tribuna firmada por Inés Calvo, presidenta de la asociación vecinal de Chamberí, en un periódico digital de Madrid. El cine, las personas y los datos son ficticios.",
    text: [
      "Quien haya pasado por la calle Ponzano en los últimos quince años habrá visto una marquesina descolorida sobre una persiana metálica llena de pintadas. Es lo que queda del cine Lumbreras, una sala de seiscientas butacas inaugurada en 1951, cuyas puertas se cerraron en 2009 y cuyo futuro se decide este invierno. El promotor que compró el edificio ha solicitado una licencia de derribo para construir viviendas, lo cual ha puesto en pie a un barrio que parecía resignado.",
      "Nuestra asociación no pretende convertir el cine en un museo ni pedir al Ayuntamiento que lo gestione como en sus mejores años. Pedimos algo más modesto y, a la vez, más urgente: que el edificio se catalogue con un grado de protección que impida demoler la fachada y la sala. Es precisamente la sala, con su anfiteatro en herradura, lo que convierte al Lumbreras en un ejemplo raro de arquitectura racionalista aplicada al ocio popular.",
      "El argumento del promotor es conocido. Según un informe que él mismo encargó, la estructura está dañada y sería imposible rehabilitarla. Sin embargo, el estudio independiente que hemos financiado con las cuotas de los socios, y según el cual los daños se limitan a la cubierta, llega a la conclusión contraria. Fueron dos arquitectas del barrio las que lo firmaron sin cobrar, lo cual dice mucho del apoyo que tiene esta causa.",
      "Pero no queremos reducir el debate a una cuestión técnica. Durante semanas hemos grabado los testimonios de antiguos trabajadores y espectadores, la mayoría de los cuales nunca habían contado sus recuerdos en público. Remedios, que fue taquillera durante tres décadas, asegura haber vendido la última entrada y conserva el libro de caja en el que anotaba cada sesión. Otro vecino recuerda haber visto desde el gallinero su primera película en color, y una tercera, en cuya familia hubo tres generaciones de acomodadores, nos permitió fotografiar el uniforme de su abuelo.",
      "Estos testimonios demuestran que un cine de barrio no es solo un edificio. Es el lugar en el que muchas parejas se conocieron, donde los niños aprendían a estar callados durante dos horas y desde donde se veía, literalmente, cómo cambiaba el país. Cuando un barrio pierde lugares así, no pierde solo metros cuadrados: pierde la memoria compartida sin la cual es difícil sentirse vecino de alguien.",
      "Por eso invitamos a la concejala de Urbanismo a visitar la sala antes de que el pleno vote la licencia. Le pedimos que escuche a quienes trabajaron allí y que lea el informe independiente, sin cuyas conclusiones esta tribuna no tendría sentido. No exigimos que el Ayuntamiento compre el edificio; le pedimos que no autorice su desaparición sin haber estudiado antes todas las alternativas. Al fin y al cabo, fue este barrio el que llenó durante sesenta años aquellas seiscientas butacas, y es este barrio el que hoy pide ser escuchado.",
    ],
    glossary: [
      { es: "la marquesina", note: "cubierta que sobresale sobre la entrada de un edificio" },
      { es: "en herradura", note: "con forma curva, abierta por un lado, como una herradura" },
      { es: "racionalista", note: "estilo arquitectónico de líneas simples y funcionales del siglo XX" },
    ],
    tasks: [
      {
        id: "c1-07-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la tribuna.",
        items: [
          {
            q: "¿Qué pide concretamente la asociación?",
            options: ["Que el Ayuntamiento compre y gestione el cine.", "Que se proteja el edificio para impedir que se derribe.", "Que el promotor construya un cine nuevo."],
            answer: 1,
            why: "El segundo párrafo pide catalogar el edificio con un grado de protección.",
          },
          {
            q: "¿Qué contradice el informe independiente?",
            options: ["Que la estructura esté tan dañada que no se pueda rehabilitar.", "Que el cine se inaugurara en 1951.", "Que el anfiteatro tenga forma de herradura."],
            answer: 0,
            why: "Según ese estudio, los daños se limitan a la cubierta.",
          },
          {
            q: "¿Qué función tienen los testimonios en la argumentación?",
            options: ["Demostrar que el edificio es técnicamente seguro.", "Sustituir al informe técnico.", "Mostrar que el cine es parte de la memoria compartida del barrio."],
            answer: 2,
            why: "La autora no quiere reducir el debate a lo técnico y usa los testimonios para hablar de memoria.",
          },
        ],
      },
      {
        id: "c1-07-lectura-referencia",
        type: "match",
        prompt: "Relaciona cada relativo del texto con su antecedente.",
        pairs: [
          { left: "cuyas puertas se cerraron en 2009", right: "el cine Lumbreras" },
          { left: "lo cual ha puesto en pie a un barrio", right: "la solicitud de la licencia de derribo" },
          { left: "según el cual los daños se limitan a la cubierta", right: "el estudio independiente" },
          { left: "la mayoría de los cuales nunca habían contado sus recuerdos", right: "antiguos trabajadores y espectadores" },
          { left: "sin la cual es difícil sentirse vecino de alguien", right: "la memoria compartida" },
        ],
      },
      {
        id: "c1-07-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa la estrategia argumentativa de la autora.",
        items: [
          {
            prompt: "La autora combina un argumento técnico (el informe) con uno emocional (los testimonios). Explica en 70–90 palabras si esa combinación te parece eficaz ante una concejala de Urbanismo y qué añadirías o quitarías.",
            model: "Me parece eficaz porque cada argumento cubre una debilidad del otro. El informe, según el cual la estructura se puede rehabilitar, responde al promotor en su mismo terreno; los testimonios muestran que hay algo más que metros cuadrados. Sin embargo, añadiría una propuesta de uso concreta, por ejemplo un centro cultural con cine, porque una concejala necesita saber qué se hará con el edificio, no solo qué se quiere evitar.",
            checklist: ["Valoro los dos tipos de argumento.", "Uso al menos un relativo complejo («según el cual», «cuyo», «lo cual»).", "Propongo una mejora concreta."],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la autora encadena información con relativos complejos y perífrasis de relativo.",
      items: [
        { quote: "cuyas puertas se cerraron en 2009 y cuyo futuro se decide este invierno", note: "Dos «cuyo» coordinados, cada uno concordado con lo poseído: «puertas», «futuro»." },
        { quote: "Fueron dos arquitectas del barrio las que lo firmaron sin cobrar", note: "Perífrasis de relativo: «fueron» concuerda con «dos arquitectas»." },
        { quote: "asegura haber vendido la última entrada", note: "Infinitivo compuesto con el mismo sujeto que «asegura»." },
        { quote: "sin cuyas conclusiones esta tribuna no tendría sentido", note: "Preposición + «cuyas», concordado con «conclusiones»." },
        { quote: "sin haber estudiado antes todas las alternativas", note: "Infinitivo compuesto con sujeto implícito: el Ayuntamiento, objeto de «le pedimos»." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección de estructura y escritura breve para preparar la solicitud de esta semana.",
    exercises: [
      {
        id: "c1-07-orden",
        type: "order",
        prompt: "Ordena las palabras para formar oraciones de un texto cuidado.",
        items: [
          {
            words: ["Es", "un", "edificio", "cuya", "fachada", "conserva", "el", "rótulo", "original."],
            why: "«Cuya» concuerda con «fachada».",
          },
          {
            words: ["Fue", "Remedios", "quien", "guardó", "el", "libro", "de", "caja."],
            why: "Perífrasis de relativo con «quien» para una persona.",
          },
          {
            words: ["El", "promotor", "niega", "haber", "recibido", "nuestra", "carta."],
            why: "Infinitivo compuesto: la recepción es anterior a la negación.",
          },
        ],
      },
      {
        id: "c1-07-eleccion",
        type: "context",
        prompt: "Elige la versión más adecuada para el texto indicado.",
        items: [
          {
            context: "Solicitud formal al Ayuntamiento. Hay que citar un informe y decir lo que concluye.",
            q: "¿Qué versión es la más adecuada?",
            options: ["Adjuntamos el informe, que según él la estructura es sólida.", "Adjuntamos el informe según que la estructura es sólida.", "Adjuntamos el informe técnico, según el cual la estructura es sólida."],
            answer: 2,
            why: "Tras «según», el relativo con artículo: «según el cual».",
          },
          {
            context: "Mensaje de un socio a otro: quiere que el otro llame a la prensa, no hacerlo él.",
            q: "¿Qué frase expresa lo que quiere?",
            options: ["Quiero que llames tú a la prensa.", "Quiero llamar a la prensa.", "Quiero que llamar tú a la prensa."],
            answer: 0,
            why: "Sujetos distintos: «que» + subjuntivo.",
          },
          {
            context: "Informe interno: se quiere decir que, de veinte proyectores, cuatro funcionan.",
            q: "¿Qué versión es correcta?",
            options: ["Tenemos veinte proyectores, cuatro de ellos de los cuales funcionan.", "Tenemos veinte proyectores, cuatro de los cuales funcionan.", "Tenemos veinte proyectores, que cuatro funcionan."],
            answer: 1,
            why: "Partitivo con «de los cuales», sin repetir pronombre.",
          },
        ],
      },
      {
        id: "c1-07-clasificar",
        type: "classify",
        prompt: "Clasifica cada frase según su adecuación a un texto escrito cuidado.",
        categories: ["Adecuada en un texto cuidado", "Propia del habla espontánea, evitada en la escritura cuidada"],
        items: [
          { text: "Es la señora que le compraba los caramelos al acomodador.", cat: 1, why: "Relativa con pronombre de refuerzo: «a la que el acomodador compraba…» o reformular." },
          { text: "Es la sala en la cual se rodó una escena de una película famosa.", cat: 0, why: "Preposición + artículo + relativo." },
          { text: "Era un cine que sus butacas eran de terciopelo.", cat: 1, why: "Quesuismo: «cuyas butacas»." },
          { text: "Explícamelo otra vez para yo entenderlo.", cat: 1, why: "Frecuente en el habla caribeña; en la escritura cuidada, «para que yo lo entienda»." },
          { text: "Fue entonces cuando el barrio decidió movilizarse.", cat: 0, why: "Perífrasis de relativo de tiempo correcta." },
          { text: "Lamentamos no haber podido asistir a la reunión.", cat: 0, why: "Infinitivo compuesto con el mismo sujeto." },
        ],
      },
      {
        id: "c1-07-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe en 40–60 palabras la presentación de un testimonio para el expediente: quién es la persona, qué relación tuvo con el cine y qué conserva. Usa «cuyo» y una relativa con preposición.",
            model: "Remedios Llorente, cuya familia vive en Chamberí desde hace cuatro generaciones, trabajó como taquillera del Lumbreras entre 1968 y 2009. Conserva el libro de caja en el que anotó cada sesión durante treinta años, así como los programas de mano de los grandes estrenos, algunos de los cuales no se encuentran en ningún archivo público.",
            checklist: ["Uso «cuyo» concordado con lo poseído.", "Uso al menos una preposición + relativo.", "La información está bien encadenada, sin repeticiones."],
          },
          {
            prompt: "Redacta en 40–60 palabras una petición a la concejala usando dos verbos de influencia con infinitivo y uno con «que» + subjuntivo.",
            model: "Señora concejala: le pedimos que visite la sala antes del pleno y le invitamos a escuchar a quienes trabajaron en ella. También le rogamos estudiar el informe independiente que adjuntamos. Si lo considera oportuno, permítanos presentar el proyecto en la comisión de Urbanismo.",
            checklist: ["Uso verbos de influencia («pedir», «invitar», «rogar», «permitir»).", "Alterno infinitivo y «que» + subjuntivo.", "Mantengo un registro formal con «usted»."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta la solicitud de la asociación vecinal al Ayuntamiento (240–320 palabras) para pedir que el cine Lumbreras se catalogue y no se conceda la licencia de derribo. Presenta el edificio, resume los argumentos técnicos y humanos y formula peticiones concretas.",
    context: "La solicitud irá dirigida a la concejala de Urbanismo y se adjuntará al expediente con el informe independiente y los testimonios. El registro es formal y debe leerse con fluidez: usa relativos complejos para encadenar datos y verbos de influencia para formular tus peticiones.",
    steps: [
      "Haz una lista de los datos que quieres encadenar (fecha, aforo, estado, informes, testimonios) y decide qué relativo usarás para unir cada uno.",
      "Ordena la solicitud: presentación del edificio, argumento técnico, argumento humano y peticiones concretas.",
      "Redacta sin copiar el modelo, con al menos un «cuyo», un «el cual» tras preposición y un «lo cual».",
      "Revisa que cada infinitivo tenga un sujeto claro y corrige cualquier «que su» o «el cual» sin preposición en una especificativa.",
    ],
    useLanguage: [
      "un edificio cuya fachada…",
      "el informe según el cual…",
      "…, lo cual demuestra que…",
      "trabajadores, la mayoría de los cuales…",
      "Le pedimos que… / Le rogamos estudiar…",
      "Fue este barrio el que…",
    ],
    model: [
      "Señora concejala de Urbanismo: la Asociación Vecinal de Chamberí, en nombre de los más de cinco mil vecinos que han firmado nuestra petición, se dirige a usted en relación con el cine Lumbreras, situado en la calle Ponzano, cuyo propietario ha solicitado una licencia de derribo. El edificio, inaugurado en 1951, conserva su fachada original y una sala con anfiteatro en herradura, rasgos por los cuales constituye un ejemplo poco común de arquitectura racionalista dedicada al ocio popular.",
      "El promotor sostiene, basándose en un informe encargado por él mismo, que la estructura no puede rehabilitarse. Sin embargo, el estudio independiente que adjuntamos, según el cual los daños se limitan a la cubierta, demuestra lo contrario. Fueron dos arquitectas del barrio las que lo elaboraron sin cobrar, lo cual refleja el compromiso vecinal con este edificio.",
      "Además del valor arquitectónico, el Lumbreras tiene un valor humano que no puede medirse en metros cuadrados. Hemos recogido los testimonios de antiguos trabajadores y espectadores, la mayoría de los cuales aseguran haber vivido allí momentos decisivos de su vida. Entre ellos destaca el de Remedios Llorente, taquillera durante tres décadas, en cuyo poder se encuentra el libro de caja del cine.",
      "Por todo ello, le pedimos que no conceda la licencia de derribo hasta haber estudiado las alternativas, que inicie el procedimiento para catalogar el edificio y que visite la sala antes del próximo pleno. Asimismo, le rogamos recibir a una delegación de la asociación para presentarle un proyecto de uso cultural. Quedamos a su disposición y le agradecemos de antemano su atención.",
    ],
    checklist: [
      "Uso al menos un «cuyo», un «el cual» tras preposición y un «lo cual», todos bien concordados.",
      "No hay «que su» ni «el cual» sin preposición en especificativas.",
      "Cada infinitivo tiene un sujeto que el lector identifica sin dudar.",
      "Uso el infinitivo compuesto cuando hablo de un hecho anterior.",
      "Las peticiones son concretas y están formuladas con verbos de influencia.",
    ],
    words: [240, 320],
  },
  speaking: {
    intro: "Prepara solo palabras clave. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Intervención en la reunión vecinal",
        prompt: "En una reunión abierta del distrito tienes cuatro minutos para defender la protección del cine. Presenta el edificio, menciona el informe independiente, cita un testimonio y termina con una petición concreta a la concejala presente.",
        prep: [
          "Prepara una frase con «cuyo», otra con «según el cual» y una perífrasis de relativo para el final.",
          "Elige un testimonio y cítalo con un infinitivo compuesto («asegura haber…»).",
          "Marca las pausas de las explicativas.",
        ],
        seconds: 240,
        model: "Buenas tardes. Quiero hablarles del Lumbreras, un cine cuya marquesina todos conocen aunque lleve quince años cerrado. El promotor dice que no se puede salvar, pero tenemos un informe independiente según el cual los daños se limitan a la cubierta. Y tenemos algo más: personas como Remedios, que asegura haber vendido allí la última entrada…",
        selfCheck: [
          "Uso al menos tres relativos complejos sin perder el hilo.",
          "Las pausas distinguen explicativas de especificativas.",
          "Cierro con una petición concreta.",
        ],
      },
      {
        title: "Conversación con el representante del promotor",
        prompt: "Al salir de la reunión, el representante del promotor se acerca a ti. Dice que la asociación exagera y que el edificio es peligroso. Pregúntale en qué informe se basa, aclara qué pide exactamente la asociación y negocia una visita técnica conjunta.",
        prep: [
          "Prepara dos preguntas con preposición + relativo («¿En qué datos se basa el informe según el cual…?»).",
          "Prepara una propuesta con un verbo de influencia.",
        ],
        seconds: 150,
        model: "Entiendo su postura, pero ¿quién firmó el informe según el cual el edificio es peligroso? Nosotros no le pedimos que renuncie al solar; le proponemos hacer una visita técnica conjunta, a la cual podrían venir sus arquitectos y los nuestros. Si después de verlo juntos sigue pensando lo mismo, lo hablamos.",
        selfCheck: [
          "Hago preguntas antes de proponer.",
          "Aclaro qué pide y qué no pide la asociación.",
          "Uso al menos un verbo de influencia con infinitivo o «que».",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu solicitud y una lista de relativos complejos que hayas encontrado en prensa.",
    cards: [
      {
        move: "Explica",
        task: "Explica a tu profesor quién hace la acción del infinitivo en tres frases tuyas con «permitir», «prometer» y «ver».",
        phrases: ["Aquí actúa el sujeto porque…", "Aquí actúa el objeto porque…"],
      },
      {
        move: "Pregunta",
        task: "Pregunta si en un texto tuyo es mejor «en el que», «en el cual» o «donde», y por qué.",
        phrases: ["¿Cambia algo si pongo…?", "¿Cuál suena más natural en este registro?"],
      },
      {
        move: "Reformula",
        task: "Pide a tu profesor que te diga una frase oral con «que su» o con pronombre de refuerzo y reformúlala en voz alta para un texto escrito.",
        phrases: ["En un texto escrito diría…"],
      },
      {
        move: "Destaca",
        task: "Destaca tres datos distintos de tu solicitud con perífrasis de relativo y comprueba con tu profesor la concordancia de «ser».",
        phrases: ["Fue… quien…", "Fue en… donde…", "Fueron… los que…"],
      },
    ],
    bring: "Tu solicitud revisada, tu lista de relativos y, si quieres, la grabación de tu intervención.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "En «El encargado nos dejó subir a la cabina», ¿quién sube?",
        options: ["El encargado.", "Nosotros.", "Nadie en concreto."],
        answer: 1,
        why: "«Dejar» es un verbo de influencia: actúa el objeto, «nos».",
      },
      {
        type: "choice",
        q: "¿Qué frase es correcta en un texto cuidado?",
        options: ["Es un barrio que sus vecinos se conocen todos.", "Es un barrio el cual sus vecinos se conocen.", "Es un barrio cuyos vecinos se conocen todos."],
        answer: 2,
        why: "«Cuyos» concuerda con «vecinos», lo poseído.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué afirma la persona?",
        options: ["Que cerrará la taquilla en el futuro.", "Que tiene la costumbre de cerrar la taquilla.", "Que cerró la taquilla en un momento anterior."],
        answer: 2,
        why: "«Recuerdo haber cerrado» sitúa la acción antes del recuerdo.",
        audio: "Recuerdo haber cerrado la taquilla con dos vueltas de llave aquella noche.",
        voice: "es-ES-f",
      },
      {
        type: "gap",
        q: "La asociación presentó un estudio, gracias al ___ se paralizó el derribo.",
        answers: [["cual"]],
        hint: "Locución preposicional larga + artículo + relativo, en masculino singular.",
        why: "«Gracias al cual»: tras locución, «el cual».",
      },
      {
        type: "gap",
        q: "Los antiguos acomodadores, la mayoría de ___ viven todavía en el barrio, acudieron al acto.",
        answers: [["los cuales"]],
        hint: "Relativa partitiva con artículo y relativo, en masculino plural.",
        why: "Partitivo: «la mayoría de los cuales».",
      },
      {
        type: "error",
        sentence: "Fue las taquilleras las que guardaron la recaudación aquella noche.",
        answers: ["Fueron las taquilleras las que guardaron la recaudación aquella noche."],
        why: "«Ser» concuerda con el elemento destacado: fueron.",
      },
      {
        type: "error",
        sentence: "El promotor niega que recibir nuestra carta.",
        answers: ["El promotor niega haber recibido nuestra carta."],
        why: "Mismo sujeto y hecho anterior: infinitivo compuesto, sin «que».",
      },
      {
        type: "order",
        words: ["Fue", "en", "1951", "cuando", "se", "inauguró", "el", "cine."],
        why: "Perífrasis de relativo que destaca el tiempo con «cuando».",
      },
      {
        type: "choice",
        q: "¿Qué relativo completa mejor «El tema sobre ___ debatimos ayer sigue abierto» en un texto formal?",
        options: ["que", "el cual", "cuyo"],
        answer: 1,
        why: "Tras «sobre», el relativo necesita artículo; en registro cuidado, «el cual».",
      },
      {
        type: "open",
        prompt: "Escribe en 70–90 palabras un párrafo para la web de la asociación que presente el cine. Incluye un «cuyo», una relativa partitiva, un «lo cual» y un infinitivo compuesto.",
        model: "El Lumbreras, cuya sala de seiscientas butacas abrió en 1951, fue durante décadas el corazón del barrio. Sus antiguos trabajadores, la mayoría de los cuales siguen viviendo en Chamberí, recuerdan haber visto pasar por allí a tres generaciones de vecinos. El cine cerró en 2009 y hoy está amenazado por una licencia de derribo, lo cual ha movilizado a miles de personas que no quieren perderlo.",
        checklist: ["Uso «cuyo» concordado con lo poseído.", "Incluyo una relativa partitiva correcta.", "Uso «lo cual» para retomar una oración completa.", "Uso un infinitivo compuesto para un hecho anterior."],
      },
    ],
  },
  complete: {
    canNow: [
      "Identifico quién hace la acción de un infinitivo según el verbo principal y uso «que» + verbo conjugado cuando el sujeto cambia.",
      "Uso el infinitivo compuesto para hechos anteriores y coloco el sujeto explícito detrás del infinitivo cuando hace falta.",
      "Elijo entre «que», «el que», «el cual», «cuyo» y «lo cual» según la preposición, el tipo de relativa y el antecedente.",
      "Construyo perífrasis de relativo con el relativo adecuado y la concordancia correcta de «ser».",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Qué relativo elegir» y reconstrúyela con ejemplos propios.",
      "Dentro de una semana, busca en un periódico tres relativas con «el cual» o «cuyo» y explica por qué el autor las eligió.",
      "En la próxima clase, lee tu solicitud y pide a tu profesor que señale un infinitivo cuyo sujeto no quede claro.",
    ],
  },
  related: [
    { path: "/gramatica/infinitivos-dependientes-y-sujetos-implicitos", label: "Clase: Infinitivos dependientes y sujetos implícitos" },
    { path: "/gramatica/relativas-complejas-cuyo-el-cual-lo", label: "Clase: Relativas complejas: cuyo, el cual, lo cual" },
  ],
};
