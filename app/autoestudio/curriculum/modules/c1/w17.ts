import type { Module } from "../../types";

/**
 * C1 · semana 17 · Autoestudio espejo de G197 (puntuación de incisos,
 * aclaraciones y conectores) y G198 (estilo formal: impersonalidad, cortesía
 * y precisión). Repaso autónomo con la memoria anual de una escuela de música
 * ficticia de La Habana. Audio mediante síntesis; sin acreditación regional.
 */
export const c1w17: Module = {
  id: "c1-17",
  level: "c1",
  week: 17,
  kind: "core",
  title: "La memoria, como es sabido, se entrega en marzo",
  subtitle: "Repaso de la puntuación de incisos, vocativos y conectores y de la escritura institucional impersonal, cortés y precisa",
  stop: {
    place: "La Habana",
    country: "Cuba",
  },
  minutes: 120,
  newObjectives: [
    "c1.gram.g197",
    "c1.gram.g198",
    "c1.voc.w17-proyecto-cultural",
    "c1.pron.w17-inciso-tono-bajo",
    "c1.lis.w17-revision-memoria",
    "c1.read.w17-memoria-escuela",
    "c1.wri.w17-solicitud-sala",
    "c1.spk.w17-presentacion-comite",
    "c1.fun.w17-solicitar-con-cortesia",
    "c1.disc.w17-voz-institucional",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo puntuar con seguridad incisos, vocativos y conectores en un texto formal y redactar como institución: con impersonales en el modo adecuado, un trato de usted coherente y palabras exactas.",
    steps: [
      "Repasa en la teoría cómo se abren y se cierran los incisos, cómo se puntúan los conectores y qué recursos hacen que un texto suene institucional sin volverse vacío.",
      "Practica la puntuación y la reescritura formal con frases de la memoria de una escuela de música habanera.",
      "Escucha a la coordinadora y a un editor jubilado revisar la memoria y lee la versión final que se envía a la fundación.",
      "Escribe una solicitud formal, revísala con la lista de control y presenta el proyecto ante un comité en voz alta.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases que trabajan juntas en cualquier texto formal: la puntuación que hace legible una frase larga y el estilo que la hace institucional. Los conectores ya los conoces de las semanas 12 y 13; aquí se trata de puntuarlos. El escenario es una pequeña escuela de música de Centro Habana que debe enviar su memoria anual a una fundación y pedir una sala para su concierto de fin de curso.",
    parts: [
      {
        heading: "Lo que se abre se cierra: incisos y vocativos",
        body: [
          "Un inciso es una información añadida que interrumpe la oración y que podría eliminarse sin que esta se rompa. Va entre dos comas, y el error más frecuente es olvidar la segunda: «La escuela, fundada en 2009, recibe a ochenta alumnos». Si quitas lo que está entre comas, la oración debe seguir siendo correcta: «La escuela recibe a ochenta alumnos».",
          "La aposición explicativa va entre comas porque solo añade un dato sobre algo ya identificado: «Nuestra directora, Odalys Ferrer, firmará el convenio» (solo hay una directora). La especificativa no lleva comas porque identifica entre varios: «el profesor Ferrer» frente a «el profesor Ramos». Del mismo modo, «Mi hermano, Julio, toca el tres» implica que tienes un solo hermano; «Mi hermano Julio toca el tres», que tienes varios.",
          "El vocativo, el nombre de la persona a quien hablas, siempre se aísla: «Gracias, Leonel, por la revisión». En el saludo de una carta o un correo formal, después del vocativo van dos puntos, no coma: «Estimada señora Pérez:». Y nunca se pone coma entre el sujeto y el verbo, aunque el sujeto sea largo: «Los ochenta alumnos que terminaron el curso de percusión este año ∅ actuarán en mayo».",
        ],
        table: {
          caption: "Comas que cambian el sentido",
          head: ["Con comas", "Sin comas", "Diferencia"],
          rows: [
            ["El profesor de guitarra, Raúl, se jubila.", "El profesor de guitarra Raúl se jubila.", "uno solo / uno entre varios"],
            ["Los alumnos, que viven lejos, llegan tarde.", "Los alumnos que viven lejos llegan tarde.", "todos / solo algunos"],
            ["Ven a ensayar, Rosa.", "Ven a ensayar Rosa.", "vocativo / Rosa como objeto o complemento"],
          ],
        },
        examples: [
          { es: "La sala de ensayo, que se inundó en septiembre, ya está seca.", note: "Explicativa: se puede eliminar; va entre dos comas." },
          { es: "Estimado señor Valdés: Le escribimos en nombre de la escuela.", note: "Saludo formal con dos puntos y mayúscula después." },
          { es: "Los instrumentos donados por la embajada el año pasado llegaron en buen estado.", note: "Sujeto largo: sin coma antes de «llegaron»." },
        ],
        mistakes: [
          {
            wrong: "El teatro, que se reinauguró en 2016 ofrece la sala gratis.",
            right: "El teatro, que se reinauguró en 2016, ofrece la sala gratis.",
            why: "El inciso se abre y se cierra: falta la segunda coma.",
          },
          {
            wrong: "Los alumnos de la escuela de música de Centro Habana, tocarán el sábado.",
            right: "Los alumnos de la escuela de música de Centro Habana tocarán el sábado.",
            why: "No se separa el sujeto del verbo con una coma, por largo que sea el sujeto.",
          },
        ],
        tip: "Prueba de la tijera: tapa lo que hay entre comas. Si la frase sigue bien, era un inciso y necesita las dos comas; si cambia de sentido, quizá no debía llevarlas.",
      },
      {
        heading: "Conectores, aclaraciones, rayas y paréntesis",
        body: [
          "Un conector como «sin embargo», «no obstante», «por tanto» o «además» se aísla con comas. Al principio de oración lleva coma detrás: «Sin embargo, la sala es pequeña». En medio, va entre comas: «La sala, sin embargo, es pequeña». Si une dos oraciones dentro del mismo período, delante va punto y coma: «Pedimos el teatro; sin embargo, estaba reservado». «Pero», en cambio, es una conjunción: lleva coma delante y ninguna detrás, salvo que empiece un inciso («…, pero, como es lógico, aceptamos»).",
          "Las aclaraciones «es decir», «o sea», «esto es» y «por ejemplo» van entre comas cuando introducen una reformulación o un ejemplo en medio de la frase: «Los alumnos becados, es decir, el cuarenta por ciento, no pagan matrícula». «Etc.» lleva coma delante cuando cierra una enumeración y nunca va seguido de puntos suspensivos, porque significa lo mismo.",
          "Para un inciso más fuerte o más largo se usan rayas o paréntesis. La raya se pega al texto del inciso y se separa de lo de fuera: «La escuela —la única de su tipo en el barrio— necesita un piano». Se cierra aunque detrás venga un punto: «…donó dos violines —y una viola—.». Los paréntesis aíslan aún más y suelen llevar datos o precisiones: «el Teatro Martí (reinaugurado en 2014)». En español no se escribe coma antes de la «y» final de una enumeración simple: «guitarra, tres y percusión».",
        ],
        table: {
          caption: "Dónde va cada signo",
          head: ["Elemento", "Puntuación", "Ejemplo"],
          rows: [
            ["conector al principio", "coma detrás", "No obstante, el plazo se amplió."],
            ["conector en medio", "entre comas", "El plazo, no obstante, se amplió."],
            ["conector entre dos oraciones", "punto y coma delante, coma detrás", "Llovió; aun así, vino el público."],
            ["«pero»", "coma delante, nada detrás", "Es pequeña, pero tiene buena acústica."],
            ["inciso con rayas", "raya pegada al inciso", "El piano —de 1952— se afinó ayer."],
          ],
        },
        examples: [
          { es: "La matrícula, por tanto, seguirá siendo gratuita para los menores.", note: "Conector en medio de la oración, entre dos comas." },
          { es: "Necesitamos atriles, cuerdas, baquetas, etc.", note: "Coma delante de «etc.» y sin puntos suspensivos." },
        ],
        mistakes: [
          {
            wrong: "La sala es pequeña pero, tiene buena acústica.",
            right: "La sala es pequeña, pero tiene buena acústica.",
            why: "«Pero» lleva la coma delante, no detrás.",
          },
          {
            wrong: "Compramos cuerdas, resinas, metrónomos, etc...",
            right: "Compramos cuerdas, resinas, metrónomos, etc.",
            why: "«Etc.» ya indica que la serie continúa: no se añaden puntos suspensivos.",
          },
        ],
      },
      {
        heading: "Escribir como institución: impersonal, cortés y preciso",
        body: [
          "Para valorar o recomendar sin decir «yo», usa estructuras impersonales y elige bien el modo. Las que recomiendan o valoran piden subjuntivo si hay un sujeto concreto: «Se recomienda que los padres recojan a los alumnos a las seis», «Conviene que la fundación conozca el local». Si no hay nadie en particular, infinitivo: «Conviene revisar el presupuesto». Las que afirman un hecho piden indicativo: «Cabe señalar que la matrícula ha crecido», «Consta que el pago se realizó en enero». «Se ruega» va con infinitivo («Se ruega puntualidad», «Se ruega confirmar la asistencia») o con «a… que» + subjuntivo («Se ruega a los padres que no aparquen en la entrada»).",
          "«Procede + infinitivo» significa «corresponde, es lo adecuado»: «Procede revisar el contrato». En cambio, «proceder a + sustantivo» suele ser un verbo vacío que alarga sin añadir nada: «Se procedió a la realización de la revisión» dice lo mismo que «Se revisó». El estilo nominal tiene un límite: si la frase acumula sustantivos abstractos, vuelve al verbo.",
          "La cortesía exige coherencia. Si tratas de usted, mantén verbo, posesivo y pronombre en la misma persona: «Le agradecemos su respuesta y quedamos a su disposición»; no mezcles «su» con «tu» ni «le» con «te». El plural institucional («consideramos», «nos complace») habla por la escuela, no por ti. No apiles atenuadores: «quisiéramos, si fuera posible, tal vez solicitar» suena inseguro; basta con «quisiéramos solicitar».",
          "La precisión se nota en el léxico. Cambia «cosa», «tema», «hacer» y «poner» por la palabra exacta: no «hacer un concierto», sino «ofrecer» o «celebrar un concierto»; no «el tema de los instrumentos», sino «la reparación de los instrumentos». «A nivel de» solo se usa con niveles reales («a nivel del mar»); en lugar de «a nivel de alumnos», di «entre los alumnos» o «en cuanto a los alumnos». «En base a» se sustituye por «con base en», «sobre la base de» o «basándonos en».",
        ],
        table: {
          caption: "Del borrador a la versión institucional",
          head: ["Borrador", "Versión institucional", "Qué cambia"],
          rows: [
            ["Yo creo que hay que arreglar el piano.", "Se recomienda reparar el piano.", "impersonal + infinitivo"],
            ["Te agradecemos su ayuda.", "Le agradecemos su ayuda.", "usted coherente"],
            ["Se procedió a la realización del inventario.", "Se hizo el inventario. / Se inventariaron los instrumentos.", "sin verbo vacío"],
            ["A nivel de alumnos, hubo mejoras.", "Entre los alumnos se observaron mejoras.", "sin «a nivel de»"],
            ["En base a los datos, pedimos más.", "Sobre la base de los datos, solicitamos un aumento.", "locución correcta y verbo exacto"],
          ],
        },
        examples: [
          { es: "Se ruega a las familias que confirmen la asistencia antes del día diez.", note: "«Se ruega a… que» + subjuntivo." },
          { es: "Cabe destacar que el sesenta por ciento de los alumnos es del barrio.", note: "Afirmación de un hecho: indicativo." },
          { es: "Nos complace invitarle al concierto de fin de curso.", note: "Plural institucional y «le» de usted." },
        ],
        mistakes: [
          {
            wrong: "Se recomienda que los alumnos traen su propio atril.",
            right: "Se recomienda que los alumnos traigan su propio atril.",
            why: "Las expresiones de recomendación con sujeto concreto piden subjuntivo.",
          },
          {
            wrong: "Estimado señor Valdés: le agradecemos tu respuesta.",
            right: "Estimado señor Valdés: Le agradecemos su respuesta.",
            why: "Usted coherente: «le» y «su». Tras los dos puntos del saludo, mayúscula.",
          },
          {
            wrong: "En base a la experiencia del año pasado, proponemos dos funciones.",
            right: "Sobre la base de la experiencia del año pasado, proponemos dos funciones.",
            why: "«En base a» se evita en la escritura cuidada; se prefiere «sobre la base de» o «con base en».",
          },
        ],
        tip: "Al revisar un texto formal, haz tres pasadas: una para los signos (cada coma de apertura tiene su cierre), otra para el trato (todo en usted) y otra para el léxico (busca «cosa», «tema», «hacer» y «a nivel de»).",
      },
    ],
  },
  grammar: {
    intro: "Empieza por los incisos y los conectores, sigue con el modo de las impersonales y termina reescribiendo frases de un borrador.",
    exercises: [
      {
        id: "c1-17-gramatica-incisos",
        type: "context",
        prompt: "Lee cada frase del borrador de la memoria y decide qué ocurre con su puntuación.",
        items: [
          {
            context: "«La fundadora de la escuela, Mirtha Bello imparte todavía clases de solfeo.»",
            q: "¿Qué le pasa a la puntuación de la frase sobre la fundadora?",
            options: ["Falta la coma que cierra el inciso después de «Bello».", "Sobra la coma después de «escuela».", "Está bien puntuada."],
            answer: 0,
            why: "Aposición explicativa: se abre y se cierra con coma.",
          },
          {
            context: "«El local en cambio, no tiene ventilación.»",
            q: "¿Cómo se corrige la puntuación del conector «en cambio»?",
            options: ["Se quita la coma de después de «cambio».", "Se cambia la coma por punto y coma.", "Se añade una coma antes de «en cambio»."],
            answer: 2,
            why: "Un conector en medio de la oración va entre dos comas.",
          },
          {
            context: "«La cuota subió, no obstante la matrícula creció.»",
            q: "¿Qué puntuación necesita «no obstante» entre estas dos oraciones?",
            options: ["Coma delante y nada detrás.", "Punto y coma delante y coma detrás.", "Ningún signo."],
            answer: 1,
            why: "Entre dos oraciones: punto y coma delante del conector y coma detrás.",
          },
          {
            context: "«El piano — un Steinway de 1952 — se afinó en octubre.»",
            q: "¿Qué falla en las rayas del inciso sobre el piano?",
            options: ["Deberían ser paréntesis obligatoriamente.", "Falta una coma después de la segunda raya.", "Las rayas deben ir pegadas al texto del inciso."],
            answer: 2,
            why: "La raya va pegada al inciso y separada de las palabras de fuera: «El piano —un Steinway de 1952— se afinó».",
          },
        ],
      },
      {
        id: "c1-17-gramatica-aposicion",
        type: "classify",
        prompt: "Decide qué implica cada frase sobre la realidad de la escuela.",
        categories: ["Hay uno solo: la aposición explica", "Hay varios: la aposición especifica"],
        items: [
          { text: "Nuestra directora, Odalys Ferrer, firmará el acuerdo.", cat: 0, why: "Entre comas: solo hay una directora." },
          { text: "La profesora Marlene dirigirá el coro infantil.", cat: 1, why: "Sin comas: «Marlene» identifica a una profesora entre varias." },
          { text: "Nuestro único piano, un Steinway de 1952, necesita afinación.", cat: 0, why: "«Único» confirma que es uno solo; el inciso solo añade un dato." },
          { text: "El alumno Yoandri ganó el concurso de percusión.", cat: 1, why: "Sin comas: Yoandri es uno de varios alumnos." },
          { text: "La sede de la escuela, una casa de 1910 en la calle Neptuno, se restauró en 2019.", cat: 0, why: "La escuela tiene una sola sede; el inciso la describe." },
        ],
      },
      {
        id: "c1-17-gramatica-modo",
        type: "gap",
        prompt: "Completa con la forma adecuada del verbo entre corchetes. Decide si la expresión impersonal recomienda o afirma.",
        items: [
          { q: "Conviene que la fundación ___ el local antes de aprobar la ayuda. [visitar]", answers: [["visite"]], why: "Recomendación con sujeto concreto: subjuntivo." },
          { q: "Cabe señalar que la escuela ___ sin interrupción desde 2009. [funcionar]", answers: [["funciona", "ha funcionado"]], why: "Afirmación de un hecho: indicativo." },
          { q: "Se ruega a los asistentes que no ___ durante la actuación. [fotografiar]", answers: [["fotografíen"]], why: "«Se ruega a… que» + subjuntivo." },
          { q: "Es necesario que cada profesor ___ el inventario de su aula. [firmar]", answers: [["firme"]], why: "Necesidad con sujeto concreto: subjuntivo." },
          { q: "Consta en el acta que el pago se ___ en enero. [efectuar]", answers: [["efectuó"]], why: "«Consta que» afirma un hecho comprobado: indicativo." },
        ],
      },
      {
        id: "c1-17-gramatica-errores",
        type: "error",
        prompt: "Cada frase del borrador tiene un error de estilo formal. Corrígela.",
        items: [
          {
            sentence: "Le agradecemos de antemano tu atención y quedamos a su disposición.",
            answers: ["Le agradecemos de antemano su atención y quedamos a su disposición."],
            why: "Usted coherente: «su atención», no «tu».",
          },
          {
            sentence: "A nivel de instrumentos, la escuela necesita dos violines y un contrabajo.",
            answers: ["En cuanto a los instrumentos, la escuela necesita dos violines y un contrabajo.", "En cuanto a instrumentos, la escuela necesita dos violines y un contrabajo."],
            why: "«A nivel de» solo se usa con niveles reales.",
          },
          {
            sentence: "Se recomienda que los profesores llegan media hora antes del concierto.",
            answers: ["Se recomienda que los profesores lleguen media hora antes del concierto."],
            why: "Recomendación con sujeto concreto: subjuntivo.",
          },
          {
            sentence: "En base a las encuestas, las familias valoran sobre todo el coro.",
            answers: ["Sobre la base de las encuestas, las familias valoran sobre todo el coro.", "Con base en las encuestas, las familias valoran sobre todo el coro.", "Según las encuestas, las familias valoran sobre todo el coro."],
            why: "«En base a» se sustituye en la escritura cuidada.",
          },
        ],
      },
      {
        id: "c1-17-gramatica-reescritura",
        type: "open",
        prompt: "Reescribe cada frase del borrador en estilo institucional. Compara después con el modelo y revisa con la lista.",
        items: [
          {
            prompt: "Borrador del correo a la fundación: «Yo creo que habría que hacer algo con el tema del techo porque cuando llueve se mojan las cosas».",
            model: "Se considera urgente reparar la cubierta del aula principal, ya que las filtraciones dañan los instrumentos cuando llueve.",
            checklist: ["Uso una estructura impersonal.", "Sustituyo «hacer algo», «tema» y «cosas» por palabras exactas.", "Mantengo la relación de causa."],
          },
          {
            prompt: "Borrador del acta: «Se procedió a la realización de la entrega de los diplomas a los alumnos por parte de la directora».",
            model: "La directora entregó los diplomas a los alumnos. / Se entregaron los diplomas a los alumnos.",
            checklist: ["Elimino el verbo vacío «proceder a» y la cadena de sustantivos.", "Conservo la información esencial."],
          },
          {
            prompt: "Borrador de la invitación: «Quisiéramos, si no es mucha molestia, tal vez, invitarte, si puedes, al concierto».",
            model: "Nos complace invitarle al concierto de fin de curso, que se celebrará el sábado 24 de mayo a las cinco de la tarde.",
            checklist: ["No apilo atenuadores.", "Uso usted de forma coherente.", "Añado los datos que la invitación necesita."],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico de un proyecto cultural y de la correspondencia con instituciones. Algunas palabras son propias de Cuba; se indica cuando conviene.",
    groups: [
      {
        title: "La escuela y su proyecto",
        items: [
          { es: "la matrícula", note: "inscripción de los alumnos y número total de inscritos" },
          { es: "el alumnado becado", note: "alumnos que estudian sin pagar o con ayuda" },
          { es: "el claustro", note: "conjunto de profesores de un centro" },
          { es: "la cubierta", note: "parte exterior del techo de un edificio" },
          { es: "las filtraciones", note: "entrada de agua por grietas o juntas" },
          { es: "el tres", note: "en Cuba, guitarra de tres cuerdas dobles, típica del son" },
          { es: "el ensayo general", note: "último ensayo completo antes de una actuación" },
        ],
      },
      {
        title: "La correspondencia institucional",
        items: [
          { es: "la memoria anual", note: "informe que resume la actividad de una institución en un año" },
          { es: "la convocatoria", note: "anuncio público que abre un plazo para presentar solicitudes" },
          { es: "cursar una solicitud", note: "presentarla oficialmente por los cauces establecidos" },
          { es: "el desglose", note: "detalle de las partidas de un presupuesto" },
          { es: "adjuntar", note: "enviar un documento junto con otro; «adjunto» concuerda: adjuntas las facturas" },
          { es: "quedar a su disposición", note: "fórmula de cierre para ofrecer ayuda o información" },
          { es: "acusar recibo", note: "confirmar que se ha recibido un documento" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-17-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "la memoria anual", right: "informe que resume la actividad de una institución en un año" },
          { left: "el desglose", right: "detalle de las partidas de un presupuesto" },
          { left: "acusar recibo", right: "confirmar que se ha recibido un documento" },
          { left: "el claustro", right: "conjunto de profesores de un centro" },
          { left: "la convocatoria", right: "anuncio que abre un plazo para presentar solicitudes" },
          { left: "las filtraciones", right: "entrada de agua por grietas o juntas" },
        ],
      },
      {
        id: "c1-17-lexico-uso",
        type: "gap",
        prompt: "Completa el correo de la escuela con la expresión adecuada.",
        bank: ["adjuntas", "cursar", "a su disposición", "el desglose"],
        items: [
          { q: "Le enviamos ___ las facturas de la reparación del piano.", answers: [["adjuntas"]] },
          { q: "Nos proponemos ___ la solicitud antes del cierre de la convocatoria.", answers: [["cursar"]] },
          { q: "En el anexo II figura ___ del presupuesto por partidas.", answers: [["el desglose"]] },
          { q: "Agradecemos su atención y quedamos ___ para cualquier aclaración.", answers: [["a su disposición"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "El inciso en voz baja: pausas y tono al leer un texto formal",
    explanation: [
      "Al leer en voz alta, un inciso entre comas, rayas o paréntesis se pronuncia como un paréntesis sonoro: una pausa breve antes, un tono algo más bajo y un ritmo un poco más rápido, y otra pausa al terminar para volver al tono de la oración principal. Si el inciso no se cierra con la voz, el oyente pierde el hilo, igual que cuando falta la segunda coma en el texto.",
      "El conector inicial forma su propio grupo y suele terminar con un tono suspendido: «Sin embargo | la sala es pequeña». El vocativo también se separa: «Gracias, | Leonel». En cambio, entre sujeto y verbo no hay pausa, por largo que sea el sujeto; si la haces, suena como si leyeras una coma que no debería estar.",
      "En el español de Cuba es frecuente aspirar o debilitar la -s final de sílaba y relajar la -d- entre vocales; al leer un texto formal, muchos hablantes la articulan con más cuidado. El audio es sintético: sirve para percibir el contraste, no certifica un acento regional ni evalúa tu pronunciación.",
    ],
    table: {
      caption: "Cómo suena cada signo",
      head: ["Texto", "Lectura"],
      rows: [
        ["La escuela, fundada en 2009, crece.", "pausa · tono bajo · pausa"],
        ["Sin embargo, la sala es pequeña.", "conector con tono suspendido y pausa"],
        ["Los alumnos que terminaron el curso tocarán.", "sin pausa entre sujeto y verbo"],
      ],
    },
    perceive: {
      id: "c1-17-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide qué indica la lectura.",
      items: [
        {
          q: "¿Cuántos profesores de violín tiene la escuela, según la lectura?",
          options: ["Uno solo: el nombre va como inciso.", "Varios: el nombre identifica a uno."],
          answer: 0,
          why: "Se oyen pausas y tono bajo en «Ernesto Díaz»: aposición explicativa.",
          audio: "Nuestro profesor de violín, Ernesto Díaz, se jubila en julio.",
          voice: "es-CU-f",
        },
        {
          q: "¿Qué alumnos recibirán la beca, según cómo se lee la frase?",
          options: ["Todos los alumnos, que además viven en el barrio.", "Solo los alumnos que viven en el barrio."],
          answer: 1,
          why: "No hay pausas: la relativa especifica a qué alumnos se refiere.",
          audio: "Los alumnos que viven en el barrio recibirán la beca completa.",
          voice: "es-CU-m",
        },
        {
          q: "¿Dónde está la pausa principal de la frase sobre el local?",
          options: ["Antes y después de «sin embargo».", "Entre «local» y «sin embargo» solamente.", "No hay ninguna pausa."],
          answer: 0,
          why: "El conector en medio de la oración se aísla con dos pausas.",
          audio: "El local, sin embargo, no reúne las condiciones de seguridad.",
          voice: "es-CU-f",
        },
        {
          q: "¿A quién se dirige quien habla al hablar de los violines?",
          options: ["A Yamilé, que escucha el mensaje.", "A nadie: Yamilé es quien dona los violines."],
          answer: 0,
          why: "La pausa antes de «Yamilé» la marca como vocativo.",
          audio: "Ya llegaron los violines, Yamilé.",
          voice: "es-CU-m",
        },
      ],
    },
    produce: [
      { text: "La escuela, que abrió sus puertas en 2009, atiende hoy a ochenta alumnos.", tip: "Baja el tono en el inciso y vuelve a subirlo en «atiende».", voice: "es-CU-f" },
      { text: "No obstante, la cubierta del aula principal necesita una reparación urgente.", tip: "Tono suspendido en «no obstante» y una pausa breve.", voice: "es-CU-m" },
      { text: "Estimada señora Pérez: Le escribimos en nombre del claustro de la escuela.", tip: "Pausa larga tras el saludo, como si fuera un punto.", voice: "es-CU-f" },
      { text: "El piano —un Steinway de 1952— vuelve a sonar después de tres años.", tip: "El inciso con rayas puede leerse aún más bajo que uno entre comas.", voice: "es-CU-m" },
    ],
    spelling: "Cada coma, raya o paréntesis de apertura de un inciso tiene su cierre. La raya de cierre se mantiene aunque después venga un punto: «…dos violines —y una viola—.»",
  },
  listening: {
    title: "Una última lectura antes de enviarla",
    context: "En la oficina de una escuela de música de Centro Habana, Yamilé, la coordinadora, repasa la memoria anual con Leonel, un editor jubilado que colabora como voluntario. Mañana vence el plazo de la fundación que financia parte del proyecto. Escucha primero sin transcripción. La escuela, la fundación y las personas son ficticias; las voces son sintéticas y no se presentan como una variedad regional verificada.",
    speakers: [
      { id: "y", name: "Yamilé", voice: "es-CU-f", role: "Coordinadora de la escuela" },
      { id: "l", name: "Leonel", voice: "es-CU-m", role: "Editor jubilado, voluntario" },
    ],
    script: [
      { speaker: "y", text: "Leonel, gracias por venir un domingo. La memoria tiene que salir mañana y yo ya no veo los errores. Empieza por el primer párrafo, que es el que más me preocupa." },
      { speaker: "l", text: "A ver. Pones: la escuela, fundada en 2009 por la maestra Mirtha Bello atiende a ochenta alumnos. Te falta la segunda coma, después de Bello. Si abres un inciso, lo cierras. Y fíjate en esto otro: los alumnos que terminaron el curso de percusión, actuarán en mayo. Esa coma sobra, porque separa el sujeto del verbo." },
      { speaker: "y", text: "Es que el sujeto es tan largo que me pide aire. Bueno, la quito. ¿Y el segundo párrafo? Ahí hablo del techo." },
      { speaker: "l", text: "Ahí está el problema mayor. Escribiste: yo creo que hay que hacer algo con el tema del techo. Para una fundación eso suena a conversación de pasillo. Mejor: se considera urgente reparar la cubierta del aula principal. Sin yo, sin tema y con el verbo exacto." },
      { speaker: "y", text: "Vale. Luego viene lo de las becas. Puse: a nivel de alumnos, el cuarenta por ciento es becado." },
      { speaker: "l", text: "A nivel del mar, sí; a nivel de alumnos, no. Di: entre los alumnos, el cuarenta por ciento recibe beca completa. Y aquí, en el párrafo de la sala, tienes: la sala es pequeña pero, tiene buena acústica. La coma va delante de pero, no detrás." },
      { speaker: "y", text: "Uf, qué vergüenza. Ahora el final, que es lo más delicado, porque pedimos más dinero. Escribí: en base a los resultados, quisiéramos, si fuera posible, tal vez, solicitar un aumento." },
      { speaker: "l", text: "Sobra prudencia y falta precisión. Quita tres de los cuatro atenuadores: sobre la base de estos resultados, quisiéramos solicitar un incremento del quince por ciento. Y añade el desglose como anexo. Si pides, di cuánto y para qué." },
      { speaker: "y", text: "Perfecto. Y en la despedida, ¿pongo: te agradecemos su atención?" },
      { speaker: "l", text: "Te agradecemos no, porque mezclas tú y usted. Le agradecemos su atención y quedamos a su disposición. Todo en usted, de principio a fin. Así la memoria habla como habla una institución seria." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué hacen y con qué criterio?",
        exercise: {
          id: "c1-17-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Qué hacen Yamilé y Leonel un domingo en la oficina?",
              options: ["Preparan el concierto de fin de curso.", "Revisan la memoria anual antes de enviarla a la fundación.", "Responden a una queja de la fundación."],
              answer: 1,
              why: "Mañana vence el plazo y Leonel revisa el texto de Yamilé.",
            },
            {
              q: "¿Qué tipo de cambios propone Leonel en la memoria?",
              options: ["Signos de puntuación y expresiones poco formales o imprecisas.", "Datos y cifras que no son correctos.", "El orden de los capítulos de la memoria."],
              answer: 0,
              why: "Corrige comas, el trato y el léxico, no los datos.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "c1-17-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles de cada corrección.",
          items: [
            {
              q: "¿Por qué Leonel quita la coma de «los alumnos que terminaron el curso de percusión, actuarán en mayo»?",
              options: ["Porque separa el sujeto del verbo.", "Porque el inciso no se cerró.", "Porque «actuarán» debe ir en pasado."],
              answer: 0,
              why: "Lo dice expresamente: esa coma separa el sujeto del verbo.",
            },
            {
              q: "¿Qué propone Leonel para la petición de más dinero?",
              options: ["Pedir el aumento en una carta aparte.", "Dejar un solo atenuador, dar una cifra y añadir el desglose.", "Eliminar la petición de la memoria."],
              answer: 1,
              why: "«Si pides, di cuánto y para qué»: quince por ciento y desglose en anexo.",
            },
            {
              q: "¿Qué falla en la fórmula «te agradecemos su atención»?",
              options: ["Es demasiado larga.", "Debería ir al principio del texto.", "Mezcla el trato de tú y el de usted."],
              answer: 2,
              why: "«Te» y «su» corresponden a tratos distintos.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cómo cada frase del borrador pasa a la versión final. Responde y luego consulta la transcripción.",
        exercise: {
          id: "c1-17-escucha-notice",
          type: "match",
          prompt: "Relaciona cada frase del borrador con la versión que propone Leonel.",
          pairs: [
            { left: "hay que hacer algo con el tema del techo", right: "se considera urgente reparar la cubierta del aula principal" },
            { left: "a nivel de alumnos", right: "entre los alumnos" },
            { left: "la sala es pequeña pero, tiene buena acústica", right: "la coma pasa delante de «pero»" },
            { left: "en base a los resultados", right: "sobre la base de estos resultados" },
            { left: "te agradecemos su atención", right: "le agradecemos su atención" },
          ],
          why: "Cada cambio responde a una de las tres pasadas: signos, trato o léxico.",
        },
      },
    ],
  },
  reading: {
    title: "Memoria anual de la Escuela de Música Comunitaria Son de Neptuno",
    genre: "Memoria institucional dirigida a una fundación",
    frame: "Versión final de la memoria que la escuela envía a la Fundación Puentes Sonoros. La escuela, la fundación, las personas y las cifras son ficticias.",
    text: [
      "La Escuela de Música Comunitaria Son de Neptuno, fundada en 2009 por la maestra Mirtha Bello, presenta a la Fundación Puentes Sonoros la memoria de actividades correspondiente al curso que acaba de finalizar. En ella se recogen los resultados académicos, el estado de las instalaciones y las necesidades previstas para el próximo año, así como el desglose del gasto realizado con la ayuda recibida.",
      "Durante el curso se matricularon ochenta y dos alumnos de entre seis y diecisiete años, la mayoría residentes en Centro Habana. Entre los alumnos, el cuarenta por ciento recibe beca completa; es decir, no abona ninguna cuota. El claustro está formado por nueve profesores —cuatro de ellos antiguos alumnos de la escuela— que imparten clases de guitarra, tres, violín, percusión y canto coral. Cabe destacar que la asistencia media ha superado el noventa por ciento, una cifra que, según los propios profesores, no se había alcanzado nunca.",
      "Los resultados artísticos han sido especialmente satisfactorios. El coro infantil, dirigido por la profesora Marlene Ortiz, ofreció seis conciertos en centros culturales del municipio, y el alumno Yoandri Castillo obtuvo el primer premio en el concurso provincial de percusión. Asimismo, se celebró en diciembre la primera jornada de puertas abiertas, a la que asistieron más de trescientas personas; sin embargo, el espacio disponible obligó a repetir la actuación tres veces, lo que pone de manifiesto la necesidad de una sala mayor.",
      "En cuanto a las instalaciones, se considera urgente reparar la cubierta del aula principal, ya que las filtraciones registradas durante la temporada de lluvias dañaron dos guitarras y parte del archivo de partituras. El piano de la escuela (un Steinway de 1952 donado por una familia del barrio) fue restaurado gracias a la ayuda de la Fundación y, por tanto, vuelve a utilizarse en las clases de canto y de armonía. Consta en los registros de la escuela que la restauración se completó en octubre, dentro del plazo previsto.",
      "Para el próximo curso, la escuela se propone ampliar la oferta con un taller de construcción y reparación de instrumentos, dirigido a los alumnos mayores de catorce años. Conviene subrayar que esta iniciativa no solo reducirá los gastos de mantenimiento, sino que ofrecerá a los jóvenes una formación con salida laboral. Sobre la base de estos resultados, quisiéramos solicitar un incremento del quince por ciento en la ayuda anual, destinado a la reparación de la cubierta, a la compra de herramientas y a la remuneración del maestro luthier. El desglose detallado figura en el anexo II.",
      "Se adjuntan a esta memoria las facturas correspondientes, las fotografías de las actividades y las cartas de apoyo de las familias. Les agradecemos, una vez más, la confianza depositada en nuestro proyecto y quedamos a su disposición para cualquier aclaración o visita que estimen oportuna. Sería para nosotros un honor contar con su presencia en el concierto de fin de curso, que se celebrará el sábado 24 de mayo.",
    ],
    glossary: [
      { es: "abonar", note: "pagar una cantidad" },
      { es: "poner de manifiesto", note: "mostrar con claridad" },
      { es: "el luthier", note: "persona que construye y repara instrumentos de cuerda" },
    ],
    tasks: [
      {
        id: "c1-17-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la memoria.",
        items: [
          {
            q: "¿Qué hecho de la jornada de puertas abiertas usa la escuela como argumento?",
            options: ["Que asistió poca gente por la lluvia.", "Que hubo que repetir la actuación por falta de espacio.", "Que el coro no pudo actuar."],
            answer: 1,
            why: "La repetición «pone de manifiesto la necesidad de una sala mayor».",
          },
          {
            q: "¿Para qué se destinaría el incremento solicitado?",
            options: ["Para la cubierta, herramientas y el sueldo del maestro luthier.", "Para comprar un piano nuevo.", "Para ampliar las becas a todos los alumnos."],
            answer: 0,
            why: "Lo enumera el quinto párrafo.",
          },
          {
            q: "¿Qué ventaja atribuye la memoria al taller de construcción de instrumentos?",
            options: ["Atraer a alumnos de otros municipios.", "Sustituir las clases de armonía.", "Reducir gastos y ofrecer una formación con salida laboral."],
            answer: 2,
            why: "«No solo reducirá los gastos…, sino que ofrecerá…».",
          },
        ],
      },
      {
        id: "c1-17-lectura-clasificar",
        type: "classify",
        prompt: "Clasifica cada fragmento de la memoria según el recurso que ilustra.",
        categories: ["Puntuación de un inciso o de un conector", "Estilo institucional impersonal o cortés"],
        items: [
          { text: "nueve profesores —cuatro de ellos antiguos alumnos de la escuela— que imparten clases", cat: 0, why: "Inciso fuerte con rayas pegadas al texto." },
          { text: "se considera urgente reparar la cubierta del aula principal", cat: 1, why: "Valoración impersonal con infinitivo." },
          { text: "el piano de la escuela (un Steinway de 1952 donado por una familia del barrio)", cat: 0, why: "Paréntesis con un dato complementario." },
          { text: "Consta en los registros de la escuela que la restauración se completó en octubre", cat: 1, why: "«Consta que» + indicativo: afirma un hecho." },
          { text: "más de trescientas personas; sin embargo, el espacio disponible obligó", cat: 0, why: "Conector entre dos oraciones: punto y coma y coma." },
          { text: "quedamos a su disposición para cualquier aclaración", cat: 1, why: "Plural institucional y usted coherente." },
        ],
      },
      {
        id: "c1-17-lectura-evaluacion",
        type: "open",
        prompt: "Valora el texto con argumentos propios.",
        items: [
          {
            prompt: "Imagina que formas parte del comité de la fundación. En 70–90 palabras, explica qué parte de la memoria te convence más para aprobar el aumento y qué dato echas en falta.",
            model: "Me convence sobre todo el párrafo de las instalaciones, porque vincula un problema concreto, las filtraciones, con daños comprobables y con una petición precisa. También ayuda que la petición tenga cifra y destino. Sin embargo, echo en falta el costo total de la cubierta en el cuerpo del texto: remitir al anexo es correcto, pero un comité que lee muchas memorias agradece ver el número principal en la misma página.",
            checklist: ["Elijo una parte concreta y explico por qué convence.", "Señalo un dato que falta y por qué importa.", "Mantengo un registro formal."],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la memoria combina puntuación cuidada y estilo institucional.",
      items: [
        { quote: "fundada en 2009 por la maestra Mirtha Bello,", note: "El inciso se cierra con la segunda coma, la que faltaba en el borrador." },
        { quote: "el cuarenta por ciento recibe beca completa; es decir, no abona ninguna cuota", note: "«Es decir» introduce una aclaración y va seguido de coma." },
        { quote: "Cabe destacar que la asistencia media ha superado el noventa por ciento", note: "Afirmación impersonal con indicativo." },
        { quote: "Sobre la base de estos resultados, quisiéramos solicitar un incremento del quince por ciento", note: "Locución correcta, un solo atenuador y una cifra precisa." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según el destinatario, puntuación y escritura breve sobre la escuela y la fundación.",
    exercises: [
      {
        id: "c1-17-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases institucionales.",
        items: [
          { words: ["Se", "ruega", "a", "las", "familias", "que", "recojan", "a", "los", "niños", "puntualmente."], why: "«Se ruega a… que» + subjuntivo." },
          { words: ["Cabe", "señalar", "que", "la", "matrícula", "ha", "crecido", "un", "veinte", "por", "ciento."], why: "Afirmación impersonal con indicativo." },
          { words: ["Le", "agradecemos", "su", "interés", "y", "quedamos", "a", "su", "disposición."], why: "Usted coherente en toda la fórmula." },
        ],
      },
      {
        id: "c1-17-destinatario",
        type: "context",
        prompt: "Elige la versión adecuada para el texto y el destinatario indicados.",
        items: [
          {
            context: "Mensaje de WhatsApp de Yamilé a un profesor amigo para avisarle de que el ensayo general cambia de hora.",
            q: "¿Qué versión suena natural en ese mensaje?",
            options: ["Se ruega a los profesores que acudan al ensayo general a las cuatro.", "Oye, Ernesto, el ensayo general al final es a las cuatro, ¿te viene bien?", "Le comunicamos que el ensayo general se celebrará a las cuatro."],
            answer: 1,
            why: "Entre colegas y amigos, el registro formal sonaría frío o irónico.",
          },
          {
            context: "Correo a la directora del Teatro Martí, a quien la escuela no conoce, para pedirle la sala.",
            q: "¿Qué apertura corresponde a ese correo?",
            options: ["Estimada señora Rivero: Nos dirigimos a usted para solicitar la sala principal del teatro.", "Hola, señora Rivero, te escribo por lo de la sala.", "Estimada señora Rivero, le escribimos por el tema de la sala."],
            answer: 0,
            why: "Saludo con dos puntos, usted y verbo exacto («solicitar»), sin «el tema de».",
          },
          {
            context: "Aviso en la puerta de la escuela para todas las familias sobre el uso de móviles durante el concierto.",
            q: "¿Qué aviso es adecuado?",
            options: ["Por favor, si puede ser, tal vez no usen los móviles.", "No usen móviles o se los quitamos.", "Se ruega mantener los teléfonos en silencio durante el concierto."],
            answer: 2,
            why: "«Se ruega» + infinitivo: cortés e impersonal, sin atenuadores apilados.",
          },
        ],
      },
      {
        id: "c1-17-puntuacion",
        type: "classify",
        prompt: "Decide si cada frase está bien puntuada o no.",
        categories: ["Bien puntuada", "Mal puntuada"],
        items: [
          { text: "El coro, dirigido por Marlene Ortiz, actuó seis veces.", cat: 0, why: "Inciso abierto y cerrado." },
          { text: "Los profesores que firmaron el convenio en marzo, cobrarán en abril.", cat: 1, why: "Coma entre sujeto y verbo." },
          { text: "La sala es pequeña, pero tiene buena acústica.", cat: 0, why: "Coma delante de «pero»." },
          { text: "Necesitamos guitarras, violines, atriles, etc...", cat: 1, why: "«Etc.» no lleva puntos suspensivos." },
          { text: "Gracias, Leonel, por tu ayuda.", cat: 0, why: "Vocativo aislado entre comas." },
          { text: "La escuela, sin embargo no tiene sala propia.", cat: 1, why: "Falta la coma de cierre del conector." },
        ],
      },
      {
        id: "c1-17-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Redacta en 40–60 palabras el párrafo de la memoria sobre el nuevo maestro luthier. Incluye un inciso entre comas, otro con rayas y una estructura impersonal.",
            model: "El maestro luthier Rigoberto Sosa, con treinta años de oficio, se incorporará al claustro en septiembre. Su taller —instalado en el patio de la escuela— permitirá reparar los instrumentos sin enviarlos fuera. Se prevé que cada alumno del taller construya un tres a lo largo del curso.",
            checklist: ["Abro y cierro cada inciso.", "Las rayas van pegadas al texto del inciso.", "Uso una estructura impersonal con el modo adecuado."],
          },
          {
            prompt: "Transforma en un correo formal de 40–60 palabras este mensaje a la Fundación: «Hola, os mando lo de las facturas, que se me olvidó. Perdón por la cosa. Cualquier cosa me decís».",
            model: "Estimada señora Pérez: Le enviamos adjuntas las facturas correspondientes a la reparación del piano, que no se incluyeron en el envío anterior. Lamentamos el retraso y le agradecemos su comprensión. Quedamos a su disposición para cualquier aclaración. Atentamente, Yamilé Fuentes, coordinadora de la escuela.",
            checklist: ["Uso usted de forma coherente.", "Sustituyo «lo de» y «la cosa» por palabras exactas.", "Incluyo saludo con dos puntos y despedida formal."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un correo formal (230–300 palabras) a la directora de un teatro para solicitar el préstamo de su sala para el concierto de fin de curso de la escuela: presenta la escuela, explica la petición, ofrece garantías y propón una reunión.",
    context: "La directora no conoce la escuela y recibe muchas peticiones. El correo debe ser impersonal cuando valora y recomienda, cortés sin exagerar y preciso en fechas, horarios y necesidades técnicas. Puedes usar los datos de la memoria o inventar otros coherentes.",
    steps: [
      "Anota los datos que la directora necesita para decidir: fecha, horario, número de artistas y de público, necesidades técnicas.",
      "Decide qué incisos aportan información útil y qué conectores ordenan tus argumentos.",
      "Redacta el correo con saludo, cuatro párrafos (presentación, petición, garantías, propuesta) y despedida.",
      "Revisa cada inciso y cada conector, comprueba que todo el trato es de usted y corrige cualquier «tema», «cosa», «a nivel de» o «en base a».",
    ],
    useLanguage: [
      "Estimada señora…:",
      "Nos dirigimos a usted para solicitar…",
      "Cabe señalar que… / Conviene que…",
      "Se ruega… / Le agradeceríamos que…",
      "sin embargo, / por tanto, / es decir,",
      "Quedamos a su disposición…",
    ],
    model: [
      "Estimada señora Rivero: Nos dirigimos a usted en nombre de la Escuela de Música Comunitaria Son de Neptuno, un proyecto de Centro Habana que, desde 2009, ofrece formación musical gratuita o de bajo costo a niños y adolescentes del municipio. Este curso han estudiado con nosotros ochenta y dos alumnos.",
      "El motivo de este correo es solicitar el préstamo de la sala principal del Teatro Martí para nuestro concierto de fin de curso, previsto para el sábado 24 de mayo de cinco a siete de la tarde. En el concierto participarán unos sesenta alumnos —entre ellos, el coro infantil— y esperamos alrededor de cuatrocientos asistentes, en su mayoría familias del barrio. Nuestro local, sin embargo, no admite a más de ochenta personas.",
      "Somos conscientes de la responsabilidad que supone el uso de la sala. Por ello, nos comprometemos a respetar las normas del teatro, a contar con diez profesores y voluntarios para la organización y a cubrir los gastos de limpieza. Cabe señalar que la escuela ha organizado ya seis conciertos en centros culturales del municipio sin ningún incidente. En cuanto a las necesidades técnicas, solo precisaríamos el piano del teatro, ocho micrófonos y la iluminación general.",
      "Le agradeceríamos que nos concediera una breve reunión para presentarle el proyecto y resolver cualquier duda. Adjuntamos la memoria anual y una carta de apoyo de la Fundación Puentes Sonoros. Le agradecemos de antemano su atención y quedamos a su disposición. Atentamente, Yamilé Fuentes, coordinadora.",
    ],
    checklist: [
      "Cada inciso se abre y se cierra, y no hay coma entre sujeto y verbo.",
      "Los conectores están puntuados según su posición.",
      "Mantengo el trato de usted en verbos, pronombres y posesivos.",
      "Las expresiones impersonales llevan el modo adecuado.",
      "No hay «tema», «cosa», «a nivel de», «en base a» ni atenuadores apilados.",
    ],
    words: [230, 300],
  },
  speaking: {
    intro: "Prepárate con palabras clave. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Presentación ante el comité de la fundación",
        prompt: "La fundación te concede cuatro minutos por videollamada para defender el aumento de la ayuda. Presenta la escuela, los resultados del curso, el problema de la cubierta y la propuesta del taller de instrumentos. Habla como representante de la institución: plural institucional, estructuras impersonales y cifras precisas. Termina con una petición concreta.",
        prep: [
          "Elige tres cifras de la memoria que quieras destacar.",
          "Prepara dos frases impersonales: una que valore («Se considera…») y otra que afirme («Cabe destacar que…»).",
          "Ensaya los incisos con tono más bajo y pausas.",
        ],
        seconds: 240,
        model: "Buenos días y gracias por recibirnos. La escuela Son de Neptuno, fundada en 2009, ha atendido este curso a ochenta y dos alumnos, el cuarenta por ciento de ellos becados. Cabe destacar que la asistencia ha superado el noventa por ciento. Sin embargo, se considera urgente reparar la cubierta del aula principal, porque las lluvias dañaron dos guitarras…",
        selfCheck: [
          "Hablo como institución, no en primera persona del singular.",
          "Cada inciso se oye con pausas y tono más bajo.",
          "Cierro con una petición cuantificada.",
        ],
      },
      {
        title: "Responder a las preguntas del comité",
        prompt: "Un miembro del comité te pregunta por qué el taller de instrumentos merece financiación y otro duda de que la escuela pueda gestionar más dinero. Responde con cortesía, aclara los datos y negocia: ofrece un informe trimestral si aprueban el aumento.",
        prep: [
          "Prepara una respuesta que empiece reconociendo la duda.",
          "Ten una propuesta de control del gasto.",
        ],
        seconds: 150,
        model: "Entendemos perfectamente su preocupación. Por eso proponemos enviarles un informe trimestral con el gasto detallado. En cuanto al taller, conviene recordar que reducirá nuestros costos de mantenimiento…",
        selfCheck: [
          "Reconozco la objeción antes de responder.",
          "Uso usted o ustedes de forma coherente.",
        ],
      },
      {
        title: "Leer el aviso para las familias",
        prompt: "Lee en voz alta, como al inicio de una reunión de familias, un aviso de tres frases con un inciso, un conector y una fórmula con «se ruega».",
        prep: ["Escribe el aviso y marca con barras las pausas."],
        seconds: 60,
        selfCheck: ["No hago pausa entre sujeto y verbo.", "El conector inicial tiene tono suspendido."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu correo formal y un texto institucional real (una carta, un aviso, un correo de tu trabajo) con algo que quieras mejorar.",
    cards: [
      {
        move: "Corrige",
        task: "Pide a tu profesor que lea tu correo y marque solo las comas; después explica tú por qué cada una está o no está.",
        phrases: ["Aquí hay coma porque se abre un inciso…", "Aquí no, porque separaría el sujeto del verbo."],
      },
      {
        move: "Pregunta",
        task: "Pregunta qué alternativa usaría tu profesor para una expresión vaga de tu texto real.",
        phrases: ["¿Qué verbo más preciso pondría aquí?", "¿Suena demasiado formal o está bien?"],
      },
      {
        move: "Compara",
        task: "Lee dos versiones de la misma petición (una con atenuadores apilados y otra limpia) y discute cuál enviarías y por qué.",
        phrases: ["La segunda es más directa sin dejar de ser cortés…"],
      },
      {
        move: "Explica",
        task: "Explica la diferencia entre «Mi hermano, Julio, toca» y «Mi hermano Julio toca» con un ejemplo de tu vida.",
        phrases: ["Con comas entiendo que…", "Sin comas, en cambio…"],
      },
    ],
    bring: "Tu correo revisado, el texto real con tus cambios y, si quieres, la grabación de la presentación ante el comité.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué frase sobre el luthier de la escuela está bien puntuada?",
        options: ["El luthier, que llegó en septiembre ya reparó tres violines.", "El luthier que llegó en septiembre, ya reparó tres violines.", "El luthier, que llegó en septiembre, ya reparó tres violines."],
        answer: 2,
        why: "Inciso explicativo abierto y cerrado con comas.",
      },
      {
        type: "choice",
        q: "¿Qué implica «Mi prima Daylí canta en el coro de la escuela» sin comas?",
        options: ["Que quien habla tiene una sola prima.", "Que quien habla tiene varias primas y se refiere a Daylí.", "Que Daylí es la directora del coro."],
        answer: 1,
        why: "Sin comas, la aposición especifica: identifica a una entre varias.",
      },
      {
        type: "listen",
        q: "Escucha el aviso de la escuela. ¿Qué pide exactamente?",
        options: ["Que las familias confirmen la asistencia antes del viernes.", "Que las familias lleguen antes del viernes.", "Que las familias paguen la cuota antes del viernes."],
        answer: 0,
        why: "«Se ruega a las familias que confirmen su asistencia».",
        audio: "Se ruega a las familias que confirmen su asistencia al concierto antes del viernes.",
        voice: "es-CU-f",
      },
      {
        type: "gap",
        q: "Es conveniente que la directora del teatro ___ el local de la escuela antes de decidir. [conocer]",
        answers: [["conozca"]],
        hint: "Expresión impersonal de recomendación con un sujeto concreto: presente de subjuntivo.",
        why: "«Es conveniente que» + sujeto concreto: subjuntivo.",
      },
      {
        type: "gap",
        q: "Cabe recordar que la escuela ___ ochenta y dos alumnos este curso. [tener]",
        answers: [["tuvo", "ha tenido", "tiene"]],
        hint: "«Cabe recordar que» presenta un hecho comprobado, así que pide indicativo.",
        why: "Afirmación de un hecho: indicativo.",
      },
      {
        type: "error",
        sentence: "Estimado señor Valdés: te agradecemos el envío de las partituras.",
        answers: ["Estimado señor Valdés: Le agradecemos el envío de las partituras."],
        why: "Trato de usted coherente con el saludo formal: «le». Tras los dos puntos del saludo, mayúscula.",
      },
      {
        type: "error",
        sentence: "Se procedió a la realización de la afinación del piano en octubre.",
        answers: ["El piano se afinó en octubre.", "Se afinó el piano en octubre."],
        why: "«Proceder a la realización de» es un verbo vacío: basta con el verbo exacto.",
      },
      {
        type: "order",
        words: ["Le", "agradeceríamos", "que", "nos", "concediera", "una", "breve", "reunión."],
        why: "Fórmula cortés con condicional e imperfecto de subjuntivo.",
      },
      {
        type: "choice",
        q: "¿Qué versión del cierre de la memoria es más adecuada para la fundación?",
        options: ["Quisiéramos, si fuera posible, tal vez, quizá pedir algo más de dinero.", "Sobre la base de estos resultados, solicitamos un incremento del quince por ciento.", "En base a esto, queremos más dinero para el tema del techo."],
        answer: 1,
        why: "Locución correcta, verbo exacto y cifra precisa, sin atenuadores apilados.",
      },
      {
        type: "open",
        prompt: "Explica en 70–90 palabras a un compañero por qué esta frase de un correo formal tiene tres problemas y propón una versión corregida: «A nivel de la escuela, los profesores que dan clases de tarde, quieren que hagáis algo con el tema de la luz».",
        model: "Primero, «a nivel de» no se refiere a un nivel real, así que conviene «en la escuela». Segundo, hay una coma entre el sujeto, «los profesores que dan clases de tarde», y el verbo «quieren». Tercero, el trato de «hagáis» no corresponde a un correo formal y «hacer algo con el tema» es impreciso. Propongo: «Los profesores del turno de tarde solicitan que se mejore la iluminación de las aulas».",
        checklist: ["Identifico los tres problemas.", "Propongo una versión impersonal o en usted.", "Uso palabras exactas en la corrección."],
      },
    ],
  },
  complete: {
    canNow: [
      "Abro y cierro incisos, distingo la aposición explicativa de la especificativa y aíslo los vocativos.",
      "Puntúo los conectores según su posición y uso rayas y paréntesis para incisos más fuertes.",
      "Redacto con estructuras impersonales que llevan el modo adecuado y evito los verbos vacíos.",
      "Mantengo un trato de usted coherente y sustituyo el léxico vago por palabras exactas.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Dónde va cada signo» y escribe un ejemplo propio para cada fila.",
      "Dentro de una semana, revisa un correo formal que hayas enviado y busca comas entre sujeto y verbo, «a nivel de» y mezclas de tú y usted.",
      "En la próxima clase, pide a tu profesor que te dicte un párrafo con incisos y puntúalo sin mirar.",
    ],
  },
  related: [
    { path: "/gramatica/puntuacion-de-incisos-aclaraciones-y-conectores", label: "Clase: Puntuación de incisos, aclaraciones y conectores" },
    { path: "/gramatica/estilo-formal-impersonalidad-cortesia-y-precision", label: "Clase: Estilo formal: impersonalidad, cortesía y precisión" },
  ],
};
