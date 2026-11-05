import type { Module } from "../../types";

/**
 * C1 · semana 18 · Autoestudio espejo de G199 (estilo coloquial: estructuras
 * expresivas y suspensión) y G200 (uso no literal de tiempos verbales).
 * Repaso autónomo con las anécdotas de una cuadrilla y su sociedad
 * gastronómica en Bilbao. Audio mediante síntesis; sin acreditación regional.
 */
export const c1w18: Module = {
  id: "c1-18",
  level: "c1",
  week: 18,
  kind: "core",
  title: "Y va el horno y se apaga",
  subtitle: "Repaso de las estructuras expresivas de la conversación y de los tiempos verbales que salen de su tiempo para pedir, imaginar, citar o contar con viveza",
  stop: {
    place: "Bilbao",
    country: "España",
  },
  minutes: 120,
  newObjectives: [
    "c1.gram.g199",
    "c1.gram.g200",
    "c1.voc.w18-cuadrilla-txoko",
    "c1.pron.w18-frase-suspendida",
    "c1.lis.w18-anecdota-cena",
    "c1.read.w18-relato-sobremesa",
    "c1.wri.w18-blog-anecdota",
    "c1.spk.w18-contar-anecdota",
    "c1.fun.w18-contar-y-reaccionar",
    "c1.disc.w18-ritmo-narrativo",
  ],
  reviewObjectives: ["c1.gram.g197","c1.gram.g198","c1.voc.w17-proyecto-cultural","c1.pron.w17-inciso-tono-bajo","c1.lis.w17-revision-memoria","c1.read.w17-memoria-escuela","c1.wri.w17-solicitud-sala","c1.spk.w17-presentacion-comite","c1.fun.w17-solicitar-con-cortesia","c1.disc.w17-voz-institucional"],
  prerequisites: ["c1-17"],
  goal: {
    canDo: "Puedo contar y reaccionar como en una conversación real con estructuras expresivas y frases suspendidas, reconocer cuándo un tiempo verbal expresa cortesía, juego, sueño, cita, viveza, mandato o sorpresa, y saber cuándo nada de esto cabe en un texto formal.",
    steps: [
      "Repasa en la teoría la gramática de lo coloquial y los valores no literales del imperfecto, el presente, el futuro y el condicional.",
      "Practica cada estructura y cada valor con frases de una cuadrilla de amigos y de su sociedad gastronómica.",
      "Escucha a dos amigos contar el desastre de una cena y lee un relato de sobremesa lleno de tiempos fuera de su tiempo.",
      "Escribe una entrada de blog con una anécdota, revísala con la lista de control y cuéntala en voz alta como en una sobremesa.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases que se dan la mano en la conversación: la gramática de lo coloquial, que tiene reglas aunque parezca libre, y los usos de los tiempos verbales que no indican el tiempo que su nombre promete. El escenario es Bilbao: una cuadrilla de amigos, su txoko (una sociedad gastronómica donde los socios cocinan) y las historias que se cuentan después de cenar. La semana pasada repasaste el registro formal; esta es su cara opuesta.",
    parts: [
      {
        heading: "Contar con viveza: «va y…», «con lo… que» y «de… que»",
        body: [
          "La estructura «ir y + verbo» presenta una acción como inesperada o decidida de golpe: «Y va el horno y se apaga», «Fue Mikel y se puso a cantar». Los dos verbos van en el mismo tiempo y la misma persona («va y se pone», «fue y se puso»); no se mezcla «va y se puso». En España también se oye «coge y…» y en muchos países de América «agarra y…», con el mismo valor.",
          "«Con lo + adjetivo o adverbio + que» + indicativo expresa un grado que hace sorprendente lo que sigue (valor concesivo) o que lo explica (valor causal). El adjetivo concuerda con su sustantivo, aunque «lo» no cambie: «Con lo madrugadoras que son, llegaron tarde» (aunque son madrugadoras); «Con lo cansado que estoy, no salgo» (como estoy tan cansado). También existe «con el / la / los / las + sustantivo + que»: «Con la de gente que había, no encontramos mesa».",
          "«De + adjetivo + que» + verbo da la causa por exceso de una cualidad: «De tímido que es, no habló en toda la cena». Es frecuente en la lengua oral y en la narración informal; reconócela aunque no la uses a menudo.",
        ],
        table: {
          caption: "Tres estructuras expresivas",
          head: ["Estructura", "Ejemplo", "Valor"],
          rows: [
            ["ir y + verbo (mismo tiempo)", "Va Josu y apaga el fuego.", "acción repentina o inesperada"],
            ["con lo + adj. + que (concesivo)", "Con lo grande que es el txoko, cenamos en la cocina.", "aunque es tan grande"],
            ["con lo + adj. + que (causal)", "Con lo picante que estaba, nadie repitió.", "como estaba tan picante"],
            ["de + adj. + que", "De nerviosa que estaba, se le quemó la salsa.", "causa por exceso"],
          ],
        },
        examples: [
          { es: "Estamos a punto de servir y va Iker y tira la bandeja.", note: "«Va… y tira»: los dos en presente." },
          { es: "Con lo bien que cocina Ane, esa noche le salió todo salado.", note: "Valor concesivo: sorprende el resultado." },
          { es: "De cansados que estaban, se durmieron en el sofá del txoko.", note: "Causa por exceso; el adjetivo concuerda con el sujeto." },
        ],
        mistakes: [
          {
            wrong: "Y fue Andoni y se pone a cantar a las tres de la mañana.",
            right: "Y fue Andoni y se puso a cantar a las tres de la mañana.",
            why: "En «ir y + verbo», los dos verbos van en el mismo tiempo.",
          },
          {
            wrong: "Con lo cara que es los percebes, compramos dos kilos.",
            right: "Con lo caros que son los percebes, compramos dos kilos.",
            why: "El adjetivo y el verbo concuerdan con «los percebes».",
          },
        ],
        tip: "Si dudas con «con lo… que», sustitúyelo por «aunque es tan…» o por «como es tan…». Si la frase tiene sentido con una de las dos, ya sabes qué valor tiene.",
      },
      {
        heading: "Frases suspendidas y piezas de la conversación",
        body: [
          "En la conversación muchas frases se dejan a medias porque el oyente completa lo que falta: «¡Si yo te contara!» (pasaron cosas increíbles), «Tiene un genio…» (muy malo), «Como no te des prisa…» (te quedarás sin cena), «Con lo que yo he hecho por ti…» (y así me lo pagas). La entonación suspendida, sin caída final, es parte del mensaje.",
          "«Es que» introduce una justificación o una excusa («—¿No vienes? —Es que mañana trabajo»). «Encima» añade un hecho que empeora las cosas; «total, que» resume y lleva al desenlace; «y eso que» añade un dato que hace más sorprendente lo dicho («Llegó tarde, y eso que vive al lado»); «es más» refuerza; «pues nada» cierra un tema y pasa a otro; «o sea» reformula.",
          "El «que» inicial repite o refuerza: «¡Que te calles!» (orden repetida), «Que si vienes mañana» (repite la pregunta que el otro no oyó), «¿Que no lo sabías?» (sorpresa). La repetición insiste o tranquiliza: «Que sí, que sí, que ya voy». Los diminutivos suavizan una petición: «Espera un momentito», «Ponme un poquito más». Y en España se oye «¡Anda que…!» como reproche cariñoso («¡Anda que avisas!» = no avisaste).",
          "Ninguna de estas piezas tiene sitio en un correo a la junta del txoko o en un informe: lo coloquial tiene gramática, pero también tiene su lugar.",
        ],
        table: {
          caption: "Lo que la frase suspendida deja implícito",
          head: ["Frase", "Lo que se entiende"],
          rows: [
            ["¡Si yo te contara!", "pasaron cosas increíbles que no voy a contar ahora"],
            ["Hacía un frío…", "hacía muchísimo frío"],
            ["Como vuelvas a tocar la olla…", "vas a tener problemas"],
            ["Con lo que me costó conseguir la mesa…", "y ahora no venís"],
          ],
        },
        examples: [
          { es: "Total, que acabamos cenando bocadillos a medianoche.", note: "«Total, que» lleva al desenlace." },
          { es: "No encontraba el txoko, y eso que había ido mil veces.", note: "«Y eso que» hace más sorprendente el despiste." },
        ],
        mistakes: [
          {
            wrong: "Estimados socios: Es que la cena del sábado se cancela, o sea, no hay cena.",
            right: "Estimados socios: Les informamos de que la cena del sábado queda cancelada.",
            why: "«Es que» y «o sea» son piezas de la conversación: no caben en un comunicado formal.",
          },
        ],
      },
      {
        heading: "Tiempos fuera de su tiempo",
        body: [
          "El imperfecto puede no hablar del pasado. De cortesía, suaviza una petición presente: «Quería pedirte un favor», «Venía a preguntarle si queda sitio», «¿Qué deseaba?». Lúdico, reparte papeles en un juego infantil: «Yo era el cocinero y tú venías a cenar». Onírico, cuenta un sueño: «Soñé que el txoko se inundaba y nadábamos entre las mesas». Citativo, pregunta por algo que ya se dijo: «¿Cómo te llamabas?», «¿Tú no eras de Getxo?». Prospectivo, cuenta un plan que se frustró: «Mañana me iba a Donostia, pero se ha cancelado el tren».",
          "El presente también viaja. El presente histórico da viveza a un relato pasado, en la conversación y en la escritura: «Ayer estoy en la cocina y entra el presidente». El presente por futuro presenta un plan como seguro: «Mañana te llamo». El presente de mandato da instrucciones tajantes: «Tú te sientas aquí y no tocas nada».",
          "El futuro puede ordenar («No pasarás», «Harás lo que te digo», también en normas: «Los socios abonarán la cuota en enero»), expresar sorpresa o indignación («¡Será posible!», «¿Será caradura?») o conceder antes de oponer («Será muy buen cocinero, pero no sabe limpiar»). El condicional suaviza: «¿Podrías pasarme la sal?», «Yo diría que falta sal». Lo que decide el valor no es la forma, sino el contexto: «Quería» puede ser un pasado real o una petición de ahora.",
        ],
        table: {
          caption: "La forma dice un tiempo; el contexto, otro",
          head: ["Forma", "Ejemplo", "Valor"],
          rows: [
            ["imperfecto de cortesía", "Quería reservar el txoko para el viernes.", "petición presente suavizada"],
            ["imperfecto lúdico", "Tú eras el camarero y yo pedía la cuenta.", "reparto de papeles en un juego"],
            ["imperfecto onírico", "Soñé que cocinaba para el rey.", "relato de un sueño"],
            ["imperfecto citativo", "¿A qué hora era la cena?", "pregunta por algo ya dicho"],
            ["imperfecto prospectivo", "El sábado tocábamos en el txoko, pero se suspendió.", "plan frustrado"],
            ["presente histórico", "En 1999 se funda la sociedad.", "viveza en un relato pasado"],
            ["futuro de mandato", "Recogerás la cocina antes de irte.", "orden tajante"],
            ["futuro de sorpresa", "¡Será posible, otra vez sin hielo!", "indignación"],
          ],
        },
        examples: [
          { es: "Perdone, venía a preguntarle si el sábado hay sitio para seis.", note: "Imperfecto de cortesía: la petición es de ahora." },
          { es: "¿Cuántos erais al final para la cena?", note: "Imperfecto citativo: se pregunta por un dato ya dado." },
          { es: "Será muy simpático, pero siempre se va sin pagar.", note: "Futuro concesivo seguido de «pero»." },
        ],
        mistakes: [
          {
            wrong: "—¿Qué deseaba? —Deseaba el mes pasado una mesa, pero ya no.",
            right: "—¿Qué deseaba? —Quería una mesa para cuatro, por favor.",
            why: "«¿Qué deseaba?» no pregunta por el pasado: es un imperfecto de cortesía que pide la petición de ahora.",
          },
          {
            wrong: "Ayer estoy en el mercado y vino Josu y me dijo que…",
            right: "Ayer estoy en el mercado y viene Josu y me dice que…",
            why: "Si eliges el presente histórico, mantenlo en toda la secuencia de acciones; cambiar a mitad confunde.",
          },
        ],
        tip: "Ante un imperfecto, pregúntate: ¿se habla de verdad del pasado? Si la petición, el juego, el sueño o la pregunta son de ahora, el tiempo está fuera de su tiempo.",
      },
    ],
  },
  grammar: {
    intro: "Empieza por las estructuras expresivas, sigue con los valores de los tiempos y termina eligiendo el registro.",
    exercises: [
      {
        id: "c1-18-gramatica-valor-tiempo",
        type: "context",
        prompt: "Lee cada situación de la cuadrilla y decide qué valor tiene el tiempo verbal destacado.",
        items: [
          {
            context: "Ane entra en la oficina del txoko y dice al secretario: «Hola, venía a apuntarme a la cena de Santo Tomás».",
            q: "¿Qué valor tiene «venía»?",
            options: ["Cuenta algo que hizo ayer.", "Suaviza una petición de ahora.", "Reparte papeles en un juego."],
            answer: 1,
            why: "Imperfecto de cortesía: la acción es presente.",
          },
          {
            context: "Dos niños juegan en el patio de la sociedad: «Vale, yo era el chef y tú me traías las merluzas».",
            q: "¿Qué valor tiene el imperfecto en el juego de los niños?",
            options: ["Lúdico: reparte papeles.", "Citativo: recuerda algo dicho.", "Prospectivo: plan frustrado."],
            answer: 0,
            why: "Los niños usan el imperfecto para crear el mundo del juego.",
          },
          {
            context: "Iker, al teléfono: «Oye, ¿a qué hora quedábamos el viernes? Ya no me acuerdo».",
            q: "¿Por qué usa Iker el imperfecto «quedábamos»?",
            options: ["Porque la cita ya pasó.", "Porque le da vergüenza pedir algo.", "Porque pregunta por un dato que ya se acordó."],
            answer: 2,
            why: "Imperfecto citativo: recupera algo dicho antes.",
          },
          {
            context: "El presidente, al ver la cocina sucia por tercera vez: «¡Será posible! ¿Quién ha dejado así los fogones?».",
            q: "¿Qué expresa el futuro «será»?",
            options: ["Una predicción sobre el futuro.", "Indignación ante lo que ve.", "Una suposición sobre el presente."],
            answer: 1,
            why: "Futuro de sorpresa o indignación.",
          },
        ],
      },
      {
        id: "c1-18-gramatica-con-lo",
        type: "classify",
        prompt: "Clasifica cada frase con «con lo… que» según su valor.",
        categories: ["Concesivo: aunque…", "Causal: como…"],
        items: [
          { text: "Con lo poco que come Mikel, pidió dos chuletones.", cat: 0, why: "Sorprende: aunque come poco." },
          { text: "Con lo tarde que era, nos fuimos sin postre.", cat: 1, why: "Explica: como era tan tarde." },
          { text: "Con lo fácil que parecía la receta, nos salió fatal.", cat: 0, why: "Resultado inesperado." },
          { text: "Con lo que llovía, nadie quiso salir a la terraza.", cat: 1, why: "Causa: como llovía tanto." },
          { text: "Con lo puntual que es Ane, llegó la última.", cat: 0, why: "Contradice lo esperable." },
        ],
      },
      {
        id: "c1-18-gramatica-formas",
        type: "gap",
        prompt: "Completa con la forma adecuada del verbo o del adjetivo entre corchetes.",
        items: [
          { q: "Estábamos brindando y fue Josu y ___ la copa encima del mantel. [tirar]", answers: [["tiró"]], why: "«Fue… y tiró»: mismo tiempo y persona." },
          { q: "Con lo ___ que son las croquetas de Ane, no quedó ni una. [rico]", answers: [["ricas"]], why: "Concuerda con «las croquetas»." },
          { q: "De ___ que estaba, Iker se olvidó la cartera en el txoko. [despistado]", answers: [["despistado"]], why: "Causa por exceso; concuerda con Iker." },
          { q: "Soñé que el txoko ___ a la ría y cenábamos en un barco. [caerse]", answers: [["se caía"]], why: "Imperfecto onírico." },
          { q: "Tú te ___ aquí, junto a la ventana, y no te mueves hasta el café. [sentar]", answers: [["sientas"]], why: "Presente de mandato." },
        ],
      },
      {
        id: "c1-18-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error relacionado con lo que repasas esta semana. Corrígela.",
        items: [
          {
            sentence: "Llegamos a la sociedad y va Ane y se ponía a pelar patatas.",
            answers: ["Llegamos a la sociedad y va Ane y se pone a pelar patatas.", "Llegamos a la sociedad y fue Ane y se puso a pelar patatas."],
            why: "«Ir y + verbo» con los dos verbos en el mismo tiempo.",
          },
          {
            sentence: "Con lo bonito que es las fiestas, este año no fuimos.",
            answers: ["Con lo bonitas que son las fiestas, este año no fuimos."],
            why: "Adjetivo y verbo concuerdan con «las fiestas».",
          },
          {
            sentence: "Llegó tarde a la cena, y eso que vivía a veinte kilómetros.",
            answers: ["Llegó tarde a la cena, y eso que vivía a dos calles.", "Llegó tarde a la cena, y eso que vive al lado."],
            why: "«Y eso que» introduce un dato que hace más sorprendente lo dicho; vivir lejos explicaría el retraso.",
          },
          {
            sentence: "Ayer estoy en el txoko y llegó el presidente con una caja de vino.",
            answers: ["Ayer estoy en el txoko y llega el presidente con una caja de vino.", "Ayer estaba en el txoko y llegó el presidente con una caja de vino."],
            why: "Mantén el presente histórico en toda la secuencia o cuenta todo en pasado.",
          },
        ],
      },
      {
        id: "c1-18-gramatica-registro",
        type: "open",
        prompt: "Pasa de un registro a otro según se te pide. Compara después con el modelo y revisa con la lista.",
        items: [
          {
            prompt: "Cuenta como en una conversación, con presente histórico y «ir y + verbo», este dato del acta: «Durante la cena, un socio derramó una cazuela de bacalao al pil-pil».",
            model: "Estamos todos sentados, superformales, y va Andoni, coge la cazuela del pil-pil y se le cae entera al suelo. ¡Si lo hubieras visto!",
            checklist: ["Uso el presente histórico de forma coherente.", "«Va… y coge» en el mismo tiempo.", "Añado una reacción coloquial."],
          },
          {
            prompt: "Reescribe en un correo formal a la junta del txoko: «Es que el horno, total, que no va. Con lo que nos costó, ¡anda que…!».",
            model: "Les informamos de que el horno de la cocina ha dejado de funcionar. Teniendo en cuenta su elevado coste, rogamos que se revise la garantía antes de encargar la reparación.",
            checklist: ["Elimino «es que», «total, que» y la frase suspendida.", "Hago explícito lo que la frase suspendida dejaba implícito.", "Uso un registro impersonal y cortés."],
          },
          {
            prompt: "Explica qué valor tiene cada imperfecto: «¿Cómo se llamaba tu amiga? Te quería pedir su teléfono para la cena».",
            model: "«Se llamaba» es citativo: el nombre ya se dijo y quien habla no lo recuerda. «Quería» es de cortesía: la petición es de ahora y el imperfecto la suaviza.",
            checklist: ["Identifico los dos valores.", "Justifico que ninguno de los dos habla de verdad del pasado."],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico de una cuadrilla de amigos de Bilbao, de su sociedad gastronómica y de la conversación de sobremesa. Algunas palabras son propias del País Vasco; se indica cuando conviene.",
    groups: [
      {
        title: "La cuadrilla y el txoko",
        items: [
          { es: "la cuadrilla", note: "en el País Vasco y el norte de España, grupo estable de amigos" },
          { es: "el txoko", note: "sociedad gastronómica vasca donde los socios cocinan y comen juntos" },
          { es: "el socio", note: "miembro de una sociedad que paga una cuota" },
          { es: "los fogones", note: "fuegos de la cocina; por extensión, la cocina" },
          { es: "el pil-pil", note: "salsa emulsionada típica del bacalao en el País Vasco" },
          { es: "el pintxo", note: "pequeña porción de comida, a menudo sobre pan, en los bares vascos" },
          { es: "hacer bote", note: "poner dinero en común para pagar entre todos" },
        ],
      },
      {
        title: "La sobremesa",
        items: [
          { es: "la sobremesa", note: "tiempo de conversación después de comer, sin levantarse de la mesa" },
          { es: "liarla", note: "coloquial: provocar un desastre o un escándalo" },
          { es: "partirse de risa", note: "coloquial: reírse muchísimo" },
          { es: "quedarse a cuadros", note: "coloquial: quedarse muy sorprendido" },
          { es: "ser un caradura", note: "coloquial: no tener vergüenza" },
          { es: "echar una mano", note: "ayudar" },
          { es: "a la desesperada", note: "como último recurso, sin pensarlo mucho" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-18-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su significado.",
        pairs: [
          { left: "la cuadrilla", right: "grupo estable de amigos" },
          { left: "hacer bote", right: "poner dinero en común para pagar entre todos" },
          { left: "liarla", right: "provocar un desastre o un escándalo" },
          { left: "quedarse a cuadros", right: "quedarse muy sorprendido" },
          { left: "la sobremesa", right: "conversación después de comer sin levantarse" },
          { left: "a la desesperada", right: "como último recurso" },
        ],
      },
      {
        id: "c1-18-lexico-uso",
        type: "gap",
        prompt: "Completa el mensaje del grupo de la cuadrilla con la expresión adecuada.",
        bank: ["la lió", "nos partimos de risa", "echar una mano", "hacemos bote"],
        items: [
          { q: "Para la cena del viernes ___ de veinte euros cada uno, ¿vale?", answers: [["hacemos bote"]] },
          { q: "Josu ___ otra vez: se dejó el grifo abierto toda la noche.", answers: [["la lió"]] },
          { q: "Cuando Iker apareció disfrazado de merluza, ___.", answers: [["nos partimos de risa"]] },
          { q: "¿Alguien puede venir a las seis a ___ con las mesas?", answers: [["echar una mano"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La frase suspendida y el ritmo de la anécdota",
    explanation: [
      "Una frase suspendida no termina con la caída habitual de la afirmación: la voz se queda en alto o alarga la última sílaba, y esa melodía le dice al oyente que complete él lo que falta. «Hacía un frío…» con caída final sonaría a frase cortada por error; con la voz suspendida significa «muchísimo frío».",
      "En la anécdota, «va y…» se pronuncia muy rápido y sin pausa, como una sola palabra («vaiy»), y la acción que sigue recibe el acento fuerte. «Total, que» marca un cambio de ritmo: una pausa breve antes y el desenlace dicho más despacio.",
      "El imperfecto de cortesía se acompaña de una melodía suave, sin fuerza al final; el futuro de indignación, en cambio, lleva un acento muy marcado en «será». En el castellano de Bilbao es frecuente una entonación algo más plana que en el centro peninsular. El audio es sintético: sirve para percibir el contraste, no certifica un acento regional ni evalúa tu pronunciación.",
    ],
    table: {
      caption: "Suspendida o terminada",
      head: ["Frase", "Melodía", "Sentido"],
      rows: [
        ["Tiene una paciencia…", "suspendida", "muchísima paciencia (o ninguna, según el tono)"],
        ["Tiene paciencia.", "caída final", "afirmación neutra"],
        ["Como no vengas…", "suspendida", "amenaza implícita"],
      ],
    },
    perceive: {
      id: "c1-18-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide qué indica su melodía o su forma.",
      items: [
        {
          q: "¿Cómo termina la frase sobre el frío del puerto?",
          options: ["Suspendida: deja implícito que hacía muchísimo frío.", "Con caída final: es una afirmación neutra."],
          answer: 0,
          why: "La voz se queda en alto: frase suspendida intensificadora.",
          audio: "En el puerto hacía un frío…",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué valor tiene el imperfecto en la frase sobre la mesa?",
          options: ["Pasado real.", "Cortesía en una petición de ahora."],
          answer: 1,
          why: "Melodía suave y petición presente: imperfecto de cortesía.",
          audio: "Perdona, quería pedirte que me guardaras sitio en la mesa.",
          voice: "es-ES-m",
        },
        {
          q: "¿Qué palabra recibe el acento más fuerte en la queja sobre los fogones?",
          options: ["fogones", "será", "posible"],
          answer: 1,
          why: "En el futuro de indignación, «será» se marca con fuerza.",
          audio: "¡Será posible, otra vez los fogones sin limpiar!",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué estructura oyes al principio de la frase sobre Mikel?",
          options: ["«Va… y» + verbo.", "«Con lo… que»."],
          answer: 0,
          why: "«Va Mikel y se levanta»: acción repentina.",
          audio: "Va Mikel y se levanta a dar un discurso en mitad del postre.",
          voice: "es-ES-m",
        },
      ],
    },
    produce: [
      { text: "Estamos cenando tranquilamente y va el horno y se apaga.", tip: "Di «va el horno y» muy rápido y marca «apaga».", voice: "es-ES-f" },
      { text: "Con lo que nos costó conseguir la mesa…", tip: "Deja la voz suspendida al final, sin caída.", voice: "es-ES-m" },
      { text: "Total, que acabamos cenando bocadillos en el portal.", tip: "Pausa breve después de «total, que» y desenlace más lento.", voice: "es-ES-f" },
      { text: "Venía a preguntarle si aún quedan entradas para la cena.", tip: "Melodía suave, sin fuerza al final: es una petición.", voice: "es-ES-m" },
    ],
    spelling: "Por escrito, la frase suspendida se marca con puntos suspensivos, que son siempre tres: «Tiene un genio…». Después de los puntos suspensivos no se añade otro punto.",
  },
  listening: {
    title: "La cena que no fue",
    context: "Ane e Iker, de la misma cuadrilla, se encuentran el domingo en un bar del Casco Viejo de Bilbao. Iker no pudo ir a la cena del sábado en el txoko y Ane le cuenta lo que pasó. Escucha primero sin transcripción. Las personas y la sociedad son ficticias; las voces son sintéticas y no se presentan como una variedad regional verificada.",
    speakers: [
      { id: "a", name: "Ane", voice: "es-ES-f", role: "Socia del txoko, organizó la cena" },
      { id: "i", name: "Iker", voice: "es-ES-m", role: "Amigo de la cuadrilla" },
    ],
    script: [
      { speaker: "i", text: "Bueno, ¿qué? ¿Cómo fue la cena? Que me dijeron que la liasteis." },
      { speaker: "a", text: "¡Si yo te contara! Mira, estamos a las nueve, todo preparado, el bacalao en la cazuela, la mesa puesta para doce, y va el horno y se apaga. Así, sin más. Con lo nuevo que es, que lo compramos en marzo." },
      { speaker: "i", text: "No me digas. ¿Y qué hicisteis? Porque doce personas sin cenar en un txoko es casi un delito." },
      { speaker: "a", text: "Pues Josu, que ya sabes cómo es, coge y dice: tranquilos, que esto lo arreglo yo. Y se pone a desmontar el panel con un cuchillo de mantequilla. ¡Tiene una paciencia…! Media hora allí tirado en el suelo." },
      { speaker: "i", text: "Y no lo arregló, claro." },
      { speaker: "a", text: "Qué va. Y encima saltan los plomos de toda la cocina. Nos quedamos a oscuras, con doce personas muertas de hambre. El presidente baja, ve el panorama y suelta: ¡será posible, que no os puedo dejar solos ni una noche! Y Josu, en el suelo, le contesta: yo solo venía a echar una mano." },
      { speaker: "i", text: "Me parto. ¿Y cómo se llamaba el amigo de Mikel, el que venía de Madrid? ¿Qué cara puso?" },
      { speaker: "a", text: "Daniel. El pobre, con lo educado que es, no decía nada, pero se le veía a cuadros. Al día siguiente se volvía a Madrid, y me dijo: esto es lo más vasco que he vivido nunca. Total, que acabamos haciendo bote y pidiendo pizzas. Pizzas, Iker, en un txoko. Y eso que había bacalao para un regimiento." },
      { speaker: "i", text: "Bueno, la próxima vez cocino yo, que a mí no se me apaga nada. Oye, por cierto, quería pedirte un favor: ¿me podrías guardar sitio para la cena de Santo Tomás?" },
      { speaker: "a", text: "Te lo guardo, pero tú te encargas del postre y no llegas tarde. Como llegues tarde…" },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué pasó y cómo terminó?",
        exercise: {
          id: "c1-18-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la anécdota general.",
          items: [
            {
              q: "¿Qué arruinó la cena del sábado en el txoko?",
              options: ["Se estropeó el horno y luego se fue la luz de la cocina.", "Faltaron ingredientes para el bacalao.", "Llegaron muchos más invitados de los previstos."],
              answer: 0,
              why: "El horno se apaga y, al intentar arreglarlo, saltan los plomos.",
            },
            {
              q: "¿Cómo terminó la noche, según Ane?",
              options: ["Cenaron en un restaurante del Casco Viejo.", "Pidieron pizzas pagando entre todos.", "Se fueron todos a casa sin cenar."],
              answer: 1,
              why: "«Acabamos haciendo bote y pidiendo pizzas».",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "c1-18-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles y los valores de las formas.",
          items: [
            {
              q: "¿Qué quiere decir Ane con «Con lo nuevo que es»?",
              options: ["Que el horno se apagó porque era nuevo.", "Que sorprende que se estropeara, siendo nuevo.", "Que el horno no era tan nuevo."],
              answer: 1,
              why: "Valor concesivo: aunque es nuevo, se apagó.",
            },
            {
              q: "¿Qué significa «Al día siguiente se volvía a Madrid»?",
              options: ["Que volvía a Madrid todos los días.", "Que su vuelta estaba planeada para el día siguiente.", "Que no volvió nunca a Madrid."],
              answer: 1,
              why: "Imperfecto prospectivo: un plan desde el pasado.",
            },
            {
              q: "¿Qué pide Iker al final?",
              options: ["Que Ane le guarde sitio para la cena de Santo Tomás.", "Que Ane le enseñe a cocinar bacalao.", "Que Josu arregle el horno."],
              answer: 0,
              why: "«Quería pedirte un favor»: imperfecto de cortesía.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en las formas de la anécdota. Responde y luego consulta la transcripción.",
        exercise: {
          id: "c1-18-escucha-notice",
          type: "match",
          prompt: "Relaciona cada enunciado con lo que hace en la conversación.",
          pairs: [
            { left: "va el horno y se apaga", right: "presenta una acción repentina con presente histórico" },
            { left: "¡Tiene una paciencia…!", right: "frase suspendida que intensifica" },
            { left: "¡será posible, que no os puedo dejar solos!", right: "futuro de indignación" },
            { left: "¿cómo se llamaba el amigo de Mikel?", right: "imperfecto citativo: pregunta por un dato ya dicho" },
            { left: "Como llegues tarde…", right: "amenaza implícita que el oyente completa" },
          ],
          why: "La anécdota combina estructuras coloquiales y tiempos fuera de su tiempo.",
        },
      },
    ],
  },
  reading: {
    title: "Sobremesa con plomos fundidos",
    genre: "Relato breve para un concurso de una biblioteca municipal",
    frame: "Relato presentado al concurso «Historias de sobremesa» de una biblioteca de Bilbao. La autora, los personajes y la sociedad son ficticios.",
    text: [
      "Mi abuelo decía que en un txoko se cocina para tener algo que contar después. Esa noche, la del horno, le habría dado la razón. Son las nueve y cuarto de un sábado de noviembre, llueve sobre la ría como solo llueve en Bilbao, y en la cocina de la sociedad Itsasargi somos doce, trece contando al presidente, que ha bajado a vigilar. El bacalao espera en su cazuela de barro. La mesa está puesta. Y entonces el horno, que se había portado como un señor desde marzo, hace un ruido de barco viejo y se apaga.",
      "Lo que viene después lo cuento como lo recuerdo, sin adornos, aunque ya sé que nadie me va a creer. Va Josu, se arremanga y anuncia que eso lo arregla él en cinco minutos. Josu es fontanero, no electricista, pero eso nunca le ha detenido. Con lo prudente que parece cuando habla, cuando actúa no hay quien le pare. Se tumba en el suelo con un cuchillo de mantequilla y una linterna, y durante media hora solo se le oye murmurar. El presidente le mira desde la puerta con los brazos cruzados, y yo pienso: tiene un aguante este hombre…",
      "Encima, el invitado de esa noche es Daniel, un amigo de Mikel que había venido de Madrid a conocer «la auténtica cocina vasca». Le habíamos hablado tanto del pil-pil que el pobre traía hasta libreta. De educado que es, no se queja; se limita a mirar el reloj con disimulo. Al día siguiente se volvía a Madrid, y yo, que había organizado la cena, sentía que le estaba fallando a toda la gastronomía del norte.",
      "A las diez menos diez se oye un chasquido y la cocina entera se queda a oscuras. Saltan los plomos, los de la cocina y los del comedor. Hay un silencio larguísimo, de esos que en las películas preceden a una catástrofe, y entonces el presidente dice, despacio: «¡Será posible! Os dejo solos una noche…». No termina la frase. No le hace falta.",
      "Total, que a las diez y media estamos sentados a la luz de las velas de la Virgen de Begoña que alguien encuentra en un cajón, comiendo pizzas de un sitio de la esquina, pagadas a escote. El bacalao sigue en su cazuela, crudo y digno. Y entonces pasa lo inesperado: empezamos a contar historias. Que si la vez que se inundó el almacén, que si el año en que Mikel confundió la sal con el azúcar, que si aquella cena en la que el cocinero invitado se durmió en la sobremesa. Daniel se ríe tanto que tiene que salir a la calle a respirar.",
      "Cuando nos despedimos, ya de madrugada, Daniel me da la mano y me dice: «¿Cómo se llamaba esta sociedad? Quiero apuntarlo bien, porque esto es lo más vasco que he vivido». Esa noche soñé que el txoko flotaba por la ría como un barco y que todos remábamos con cucharones de madera. Mi abuelo, en el sueño, iba al timón y repetía: ¿lo ves?, para tener algo que contar. Al lunes siguiente, por cierto, el técnico tardó tres minutos en arreglar el horno. Era un fusible.",
    ],
    glossary: [
      { es: "arremangarse", note: "subirse las mangas para trabajar" },
      { es: "pagar a escote", note: "repartir el gasto entre todos" },
      { es: "el fusible", note: "pieza que corta la corriente cuando hay una sobrecarga" },
    ],
    tasks: [
      {
        id: "c1-18-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el relato.",
        items: [
          {
            q: "¿Qué idea del abuelo enmarca el relato?",
            options: ["Que en un txoko se cocina para tener algo que contar.", "Que un buen cocinero nunca depende del horno.", "Que el bacalao debe hacerse siempre en cazuela de barro."],
            answer: 0,
            why: "Abre y cierra el relato con esa frase.",
          },
          {
            q: "¿Qué cambia la noche, según la narradora?",
            options: ["La llegada del técnico.", "La decisión de cocinar el bacalao en el fuego.", "Que empiezan a contar historias a la luz de las velas."],
            answer: 2,
            why: "«Entonces pasa lo inesperado: empezamos a contar historias».",
          },
          {
            q: "¿Qué efecto tiene el final del fusible?",
            options: ["Demuestra que Josu tenía razón.", "Cierra con ironía: el desastre tenía un arreglo mínimo.", "Explica por qué el presidente se enfadó."],
            answer: 1,
            why: "Tres minutos y un fusible contrastan con toda la odisea.",
          },
        ],
      },
      {
        id: "c1-18-lectura-clasificar",
        type: "classify",
        prompt: "Clasifica cada fragmento del relato según el recurso que ilustra.",
        categories: ["Estructura expresiva coloquial", "Tiempo verbal fuera de su tiempo"],
        items: [
          { text: "Va Josu, se arremanga y anuncia que eso lo arregla él", cat: 0, why: "«Ir y + verbo»: acción repentina." },
          { text: "Al día siguiente se volvía a Madrid", cat: 1, why: "Imperfecto prospectivo." },
          { text: "De educado que es, no se queja", cat: 0, why: "«De + adjetivo + que»: causa por exceso." },
          { text: "¿Cómo se llamaba esta sociedad?", cat: 1, why: "Imperfecto citativo." },
          { text: "tiene un aguante este hombre…", cat: 0, why: "Frase suspendida que intensifica." },
          { text: "soñé que el txoko flotaba por la ría", cat: 1, why: "Imperfecto onírico." },
        ],
      },
      {
        id: "c1-18-lectura-evaluacion",
        type: "open",
        prompt: "Valora una decisión de la autora con argumentos propios.",
        items: [
          {
            prompt: "La autora cuenta casi todo el relato en presente aunque los hechos son pasados. En 70–90 palabras, explica qué gana el texto con esa elección y en qué momento vuelve al pasado y por qué.",
            model: "El presente histórico pone al lector dentro de la cocina, como si viera la escena en directo, y acelera los momentos de tensión: «se apaga», «saltan los plomos». La autora vuelve al pasado al principio, con la cita del abuelo, y al final, con el sueño y el lunes siguiente. Así separa el marco del relato, contado desde la distancia, de la noche misma, que revive con toda su viveza.",
            checklist: ["Explico el efecto del presente histórico con un ejemplo.", "Identifico dónde aparece el pasado.", "Relaciono el cambio de tiempo con la estructura del relato."],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo el relato combina lo coloquial y los tiempos fuera de su tiempo dentro de un texto escrito.",
      items: [
        { quote: "Son las nueve y cuarto de un sábado de noviembre", note: "Empieza el presente histórico: el relato pasado se cuenta como si ocurriera ahora." },
        { quote: "Con lo prudente que parece cuando habla, cuando actúa no hay quien le pare.", note: "«Con lo… que» concesivo: aunque parece prudente." },
        { quote: "Os dejo solos una noche…", note: "Frase suspendida: el oyente completa la amenaza o el reproche." },
        { quote: "Total, que a las diez y media estamos sentados a la luz de las velas", note: "«Total, que» lleva al desenlace de la anécdota." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según el registro, valores de los tiempos y escritura breve sobre la cuadrilla.",
    exercises: [
      {
        id: "c1-18-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases de la anécdota.",
        items: [
          { words: ["Y", "va", "el", "camarero", "y", "nos", "trae", "la", "cuenta", "equivocada."], why: "«Va… y trae»: mismo tiempo." },
          { words: ["Con", "lo", "lejos", "que", "vive,", "siempre", "llega", "el", "primero."], why: "«Con lo» + adverbio + que, valor concesivo." },
          { words: ["Perdona,", "quería", "preguntarte", "si", "te", "sobra", "una", "entrada."], why: "Imperfecto de cortesía." },
        ],
      },
      {
        id: "c1-18-registro",
        type: "context",
        prompt: "Elige la versión adecuada para la situación indicada.",
        items: [
          {
            context: "Mensaje de audio de Ane a la cuadrilla, la mañana después de la cena.",
            q: "¿Qué versión suena natural en ese audio?",
            options: ["Les comunico que la cena se vio afectada por una avería eléctrica.", "Chicos, lo de anoche… ¡si os lo cuento no os lo creéis! Total, que pizzas.", "Se informa a los asistentes de que el horno se averió."],
            answer: 1,
            why: "Entre amigos, estructuras coloquiales y frases suspendidas son lo natural.",
          },
          {
            context: "Correo de Ane al presidente de la sociedad para pedir que se revise la instalación eléctrica.",
            q: "¿Qué frase cabe en ese correo?",
            options: ["Es que, o sea, el horno va y se apaga.", "Con lo que pagamos de cuota…", "Le agradecería que se revisara la instalación eléctrica de la cocina."],
            answer: 2,
            why: "Registro formal: condicional de cortesía y petición explícita.",
          },
          {
            context: "Un socio nuevo se acerca a la barra del txoko y quiere pedir con educación la llave del almacén al encargado, a quien no conoce.",
            q: "¿Qué dice?",
            options: ["Perdone, venía a pedirle la llave del almacén.", "¡Que me des la llave!", "Dame la llave, que la necesito ya."],
            answer: 0,
            why: "Imperfecto de cortesía y usted ante un desconocido.",
          },
        ],
      },
      {
        id: "c1-18-valores",
        type: "match",
        prompt: "Relaciona cada frase con el valor de su tiempo verbal.",
        pairs: [
          { left: "Yo era el camarero y tú pedías la cuenta.", right: "imperfecto lúdico" },
          { left: "Mañana me iba a Vitoria, pero han suspendido el concierto.", right: "imperfecto prospectivo" },
          { left: "Será muy buen cocinero, pero no friega nunca.", right: "futuro concesivo" },
          { left: "Tú pones la mesa y yo friego.", right: "presente de mandato" },
          { left: "¿Podrías traer hielo de camino?", right: "condicional de cortesía" },
        ],
      },
      {
        id: "c1-18-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe en 40–60 palabras el principio de una anécdota en presente histórico con «ir y + verbo» y una frase suspendida.",
            model: "El sábado estamos en las fiestas, en primera fila para ver los fuegos, y va mi hermana y se acuerda de que se ha dejado el bolso en el bar. Con la de gente que había… Total, que nos perdemos los fuegos y encontramos el bolso. ¡Si es que no aprende!",
            checklist: ["Mantengo el presente histórico.", "«Va… y se acuerda» en el mismo tiempo.", "Incluyo una frase suspendida con puntos suspensivos."],
          },
          {
            prompt: "Escribe en 40–60 palabras un mensaje a un vecino que no conoces mucho para pedirle que te deje la terraza para una cena. Usa un imperfecto de cortesía y un condicional.",
            model: "Hola, Jon, soy Ane, la del segundo. Quería pedirte un favor: el sábado celebro mi cumpleaños y me preguntaba si podrías dejarnos usar la terraza unas horas. Seríamos ocho y lo dejaríamos todo recogido antes de las doce. Si te viene mal, lo entiendo perfectamente.",
            checklist: ["Uso un imperfecto de cortesía.", "Uso un condicional para suavizar.", "Doy datos concretos y ofrezco una salida."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe una entrada de blog personal (230–300 palabras) en la que cuentes una anécdota divertida o desastrosa de una comida, una fiesta o un viaje con amigos.",
    context: "Tu blog lo leen amigos y conocidos, y el tono es cercano. Puedes usar presente histórico, estructuras expresivas y frases suspendidas, sobre todo en los diálogos, pero el texto debe entenderse sin que lo cuentes en voz alta. Inspírate en la cena del txoko o en una experiencia propia.",
    steps: [
      "Anota los hechos en orden y marca el momento en que todo se tuerce y el desenlace.",
      "Decide en qué tiempo contarás el núcleo de la anécdota (presente histórico o pasado) y mantenlo.",
      "Redacta cuatro párrafos: situación, complicación, desenlace y reflexión final, con algún diálogo breve.",
      "Revisa que los dos verbos de cada «ir y + verbo» vayan en el mismo tiempo, comprueba la concordancia de cada «con lo… que» y corrige los cambios de tiempo involuntarios.",
    ],
    useLanguage: [
      "Estamos… y va… y…",
      "Con lo + adjetivo + que…",
      "De + adjetivo + que…",
      "Encima… / Total, que… / Y eso que…",
      "¡Si yo te contara! / Tenía una cara…",
      "Al día siguiente me iba…, pero…",
    ],
    model: [
      "El verano pasado, mi cuadrilla decidió celebrar el cumpleaños de Maite en una casa rural de Cantabria. Seis amigos, dos coches y una tarta de tres pisos que Josu había encargado en la mejor pastelería de Bilbao. Con lo cuidadoso que es para todo, la llevaba en el regazo como si fuera un bebé.",
      "Llegamos a la casa a las ocho, todo perfecto, y va el dueño y nos dice que la reserva es para el fin de semana siguiente. Nos quedamos a cuadros. Encima, empieza a llover a mares y no hay cobertura para buscar otro sitio. Maite, de nerviosa que estaba, se echa a reír sin parar. Tenía una cara… El dueño, al vernos así, se apiada y nos ofrece el pajar.",
      "Total, que cenamos sentados en balas de paja, con una linterna, y la tarta resiste el viaje mejor que nosotros. A medianoche aparece una vaca en la puerta, mira la tarta, nos mira a nosotros y se va muy digna. Josu, que no había dicho nada en toda la noche, suelta: «Hasta la vaca tiene más criterio que el que hizo la reserva». Y eso que la reserva la había hecho él.",
      "Al día siguiente nos íbamos a la playa, pero acabamos ayudando al dueño a ordeñar. ¡Si me lo llegan a contar, no me lo creo! Ha sido el cumpleaños más raro de nuestra vida y, curiosamente, el que más recordamos. Desde entonces, cada vez que alguien propone una casa rural, Josu pregunta: «¿Para qué fin de semana?».",
    ],
    checklist: [
      "Mantengo el tiempo elegido para el núcleo de la anécdota.",
      "Los dos verbos de cada «ir y + verbo» están en el mismo tiempo.",
      "Cada «con lo… que» y «de… que» concuerda con su sustantivo.",
      "Las frases suspendidas se entienden por el contexto.",
      "Hay un desenlace claro y una reflexión final.",
    ],
    words: [230, 300],
  },
  speaking: {
    intro: "Prepárate con palabras clave. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "La anécdota de sobremesa",
        prompt: "Estás en la sobremesa de una cena con amigos y te toca contar una anécdota. Durante cuatro minutos cuenta algo que te pasó (o la noche del horno) con presente histórico, «ir y + verbo», «con lo… que», una o dos frases suspendidas y «total, que» antes del desenlace. Imagina las reacciones de los demás y respóndelas.",
        prep: [
          "Anota cinco palabras clave: situación, complicación, dos detalles, desenlace.",
          "Prepara una frase con «con lo… que» y otra suspendida.",
          "Piensa en una pregunta que te podrían hacer y en tu respuesta con «es que».",
        ],
        seconds: 240,
        model: "Escuchad, que esta es buena. El año pasado estoy en el aeropuerto de Loiu, con lo puntual que soy, dos horas antes del vuelo, y va una señora y me pregunta si soy el guía de su grupo. Le digo que no, pero ella insiste… Tenía una cara de perdida… Total, que acabo llevando a quince jubilados hasta la puerta de embarque…",
        selfCheck: [
          "Mantengo el presente histórico sin cambios involuntarios.",
          "Las frases suspendidas se oyen con la voz en alto.",
          "El desenlace llega después de «total, que».",
        ],
      },
      {
        title: "Pedir un favor con tacto",
        prompt: "Necesitas que el presidente del txoko te deje la cocina un martes, cuando normalmente está cerrada. Pídeselo con un imperfecto de cortesía, explica el motivo con «es que», responde a sus objeciones y negocia una condición.",
        prep: [
          "Prepara la apertura: «Venía a…» o «Quería…».",
          "Ten una concesión preparada: limpiar, pagar la luz, invitarle.",
        ],
        seconds: 150,
        model: "Hola, Patxi, venía a pedirte una cosa. Es que el martes cumple años mi madre y me preguntaba si podríamos usar la cocina. Ya sé que ese día está cerrada; nosotros lo dejaríamos todo limpio y pagaríamos la luz…",
        selfCheck: [
          "Uso imperfecto de cortesía y condicional.",
          "Ofrezco una condición a cambio.",
        ],
      },
      {
        title: "Reaccionar a una anécdota",
        prompt: "Escucha mentalmente (o pide a alguien que te cuente) una anécdota breve y reacciona durante un minuto: sorpresa, pregunta citativa, comentario con «y eso que».",
        prep: ["Prepara tres reacciones: «¡No me digas!», «¿Cómo se llamaba…?», «Y eso que…»."],
        seconds: 60,
        selfCheck: ["Mis reacciones animan a seguir contando.", "Uso al menos un imperfecto citativo."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu entrada de blog y una anécdota que hayas oído contar a otra persona esta semana.",
    cards: [
      {
        move: "Cuenta",
        task: "Cuenta tu anécdota a tu profesor sin leerla y pídele que te interrumpa con reacciones como lo haría un amigo.",
        phrases: ["Y va… y…", "Total, que…"],
      },
      {
        move: "Pregunta",
        task: "Pregunta si una estructura coloquial de tu texto suena natural en tu variedad o es más propia de otra zona.",
        phrases: ["¿Esto se dice en todas partes?", "¿Aquí sonaría mejor «agarra y»?"],
      },
      {
        move: "Identifica",
        task: "Pide a tu profesor cinco frases con imperfecto y di de cada una si habla de verdad del pasado o no.",
        phrases: ["Este es de cortesía, porque…", "Este sí es pasado real."],
      },
      {
        move: "Transforma",
        task: "Convierte en voz alta una frase coloquial de tu texto en su versión para un correo formal.",
        phrases: ["En un correo diría…"],
      },
    ],
    bring: "Tu entrada de blog revisada, la anécdota ajena con sus estructuras subrayadas y, si quieres, la grabación de tu sobremesa.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "En «Con lo barato que era el menú, salimos a ochenta euros por cabeza», ¿qué valor tiene «con lo… que»?",
        options: ["Causal: como era barato.", "Concesivo: aunque era barato.", "Temporal: cuando era barato."],
        answer: 1,
        why: "El resultado contradice lo esperable: valor concesivo.",
      },
      {
        type: "choice",
        q: "¿Qué valor tiene el imperfecto en «Oye, ¿tu prima no era de Barakaldo?»?",
        options: ["Citativo: recupera un dato que ya se sabía o se dijo.", "Onírico: cuenta un sueño.", "Pasado real: la prima ya no es de allí."],
        answer: 0,
        why: "Pregunta por un dato conocido: imperfecto citativo.",
      },
      {
        type: "listen",
        q: "Escucha a la socia del txoko. ¿Qué quiere decir con su frase suspendida?",
        options: ["Que la paella salió muy bien.", "Que no sabe cómo salió la paella.", "Que la paella salió fatal."],
        answer: 2,
        why: "«Nos salió una paella…» con la voz suspendida y el contexto de la queja: salió fatal.",
        audio: "Con lo que nos esforzamos, y nos salió una paella… Mejor ni la recuerdo.",
        voice: "es-ES-f",
      },
      {
        type: "gap",
        q: "Estábamos en la terraza y fue mi cuñado y ___ a cantar boleros. [ponerse]",
        answers: [["se puso"]],
        hint: "En «ir y + verbo», el segundo verbo va en el mismo tiempo y persona que «fue».",
        why: "«Fue… y se puso».",
      },
      {
        type: "gap",
        q: "Con lo ___ que estaban las calles en fiestas, tardamos una hora en llegar. [lleno]",
        answers: [["llenas"]],
        hint: "En «con lo + adjetivo + que», el adjetivo concuerda con «las calles».",
        why: "Femenino plural: llenas.",
      },
      {
        type: "error",
        sentence: "Ayer estoy en la parada del bus y se me acercó un turista y me pregunta por el Guggenheim.",
        answers: ["Ayer estoy en la parada del bus y se me acerca un turista y me pregunta por el Guggenheim."],
        why: "Mantén el presente histórico en toda la secuencia: «se me acerca».",
      },
      {
        type: "error",
        sentence: "Estimado presidente: Es que total que el horno se ha estropeado.",
        answers: ["Estimado presidente: Le informo de que el horno se ha estropeado.", "Estimado presidente: Le comunico que el horno se ha estropeado."],
        why: "«Es que» y «total, que» son coloquiales: no caben en un correo formal.",
      },
      {
        type: "order",
        words: ["Venía", "a", "preguntarle", "si", "aún", "aceptan", "socios", "nuevos."],
        why: "Imperfecto de cortesía para una petición de ahora.",
      },
      {
        type: "choice",
        q: "¿Qué expresa el futuro en «Será muy majo tu amigo, pero no ha puesto ni un euro en el bote»?",
        options: ["Una predicción.", "Una orden.", "Una concesión antes de oponer algo."],
        answer: 2,
        why: "Futuro concesivo seguido de «pero».",
      },
      {
        type: "open",
        prompt: "Explica en 70–90 palabras a un compañero por qué «Quería una mesa para cuatro» puede ser una petición de ahora y cómo se distingue de un pasado real. Da un contexto para cada lectura.",
        model: "Depende del contexto. Si alguien entra en un restaurante y le dice al camarero «Quería una mesa para cuatro», la petición es de ahora: el imperfecto suaviza, como un «quiero» más cortés. En cambio, si cuenta «Quería una mesa para cuatro, pero solo quedaba la barra», habla de un deseo pasado que no se cumplió. La pista está en la situación: si se dirige a quien puede dárselo en ese momento, es cortesía.",
        checklist: ["Explico el valor de cortesía.", "Doy un contexto para cada lectura.", "Señalo la pista que permite distinguirlas."],
      },
    ],
  },
  complete: {
    canNow: [
      "Cuento anécdotas con «ir y + verbo», «con lo… que», «de… que» y piezas como «encima», «total, que» o «y eso que».",
      "Uso y entiendo frases suspendidas y el «que» inicial de la conversación.",
      "Reconozco los valores de cortesía, lúdico, onírico, citativo y prospectivo del imperfecto.",
      "Distingo el presente histórico, de futuro y de mandato, y el futuro de mandato, de indignación y concesivo.",
      "Separo lo que es propio de la conversación de lo que cabe en un texto formal.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «La forma dice un tiempo; el contexto, otro» y escribe un ejemplo nuevo para cada fila.",
      "Dentro de una semana, escucha una conversación o un pódcast informal y apunta tres estructuras coloquiales con su valor.",
      "En la próxima clase, cuenta tu anécdota sin leer y pide a tu profesor que marque si cambiaste de tiempo sin querer.",
    ],
  },
  related: [
    { path: "/gramatica/estilo-coloquial-estructuras-expresivas-y-suspension", label: "Clase: Estilo coloquial: estructuras expresivas y suspensión" },
    { path: "/gramatica/uso-no-literal-de-tiempos-verbales", label: "Clase: Uso no literal de tiempos verbales" },
  ],
};
