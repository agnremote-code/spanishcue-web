import type { Module } from "../../types";

/**
 * C1 · semana 6 · Autoestudio espejo de G177 (absolutas de participio y
 * reducción de subordinadas). Repaso autónomo con las actas de un consorcio
 * ficticio de Buenos Aires. Audio mediante síntesis; sin acreditación regional.
 */
export const c1w06: Module = {
  id: "c1-06",
  level: "c1",
  week: 6,
  kind: "core",
  title: "Leída el acta, se pasó al primer punto",
  subtitle: "Repaso de las construcciones absolutas de participio y de otras formas de condensar una subordinada en textos formales",
  stop: {
    place: "Buenos Aires",
    country: "Argentina",
  },
  minutes: 120,
  newObjectives: [
    "c1.gram.g177",
    "c1.voc.w06-consorcio-actas",
    "c1.pron.w06-pausa-absoluta",
    "c1.lis.w06-redaccion-acta",
    "c1.read.w06-actas-edificio",
    "c1.wri.w06-circular-vecinos",
    "c1.spk.w06-relato-asamblea",
    "c1.fun.w06-resumir-decisiones",
    "c1.disc.w06-registro-condensado",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo condensar subordinadas temporales, causales y condicionales con absolutas de participio, con «tras» o «al» + infinitivo o con un grupo nominal, y deshacer la reducción cuando el texto pide claridad.",
    steps: [
      "Repasa en la teoría cómo se forma la absoluta, qué verbos la admiten y qué alternativas tienes para condensar.",
      "Practica la concordancia, el sentido de cada absoluta y los errores típicos con frases de actas y avisos de un edificio porteño.",
      "Escucha a dos vecinos redactar el acta de una asamblea y lee un artículo sobre noventa años de actas del mismo edificio.",
      "Escribe la circular para los vecinos, revísala con la lista de control y cuenta la asamblea en voz alta con un registro oral.",
    ],
  },
  theory: {
    intro: "En clase trabajaste las absolutas de participio como herramienta de la lengua escrita formal. Aquí las repasas con otro tipo de texto, muy rico en estas construcciones: las actas de las asambleas de un edificio. Vas a condensar, pero también a deshacer la condensación, porque saber cuándo no conviene reducir es tan importante como saber hacerlo.",
    parts: [
      {
        heading: "Participio + sustantivo: una acción cerrada antes de la principal",
        body: [
          "La construcción absoluta está formada por un participio y un sustantivo que funciona como su sujeto o, mejor dicho, como el elemento afectado por la acción. Va separada por una coma del resto de la oración y presenta un hecho terminado antes de lo que cuenta la oración principal. No lleva verbo conjugado: por eso no dice por sí misma el tiempo ni la persona, que se deducen de la principal.",
          "El participio concuerda en género y número con su sustantivo, como un adjetivo: «aprobadas las cuentas», «resuelto el conflicto», «elegidos los nuevos miembros». Lo habitual es que el participio vaya delante; el orden inverso («las cuentas aprobadas, …») existe, pero suena más rígido y puede confundirse con un simple sustantivo con adjetivo.",
          "Es un recurso de la escritura cuidada: actas, informes, crónicas, noticias. En una conversación espontánea casi nadie dice «Pagadas las expensas, me fui de vacaciones»; diría «Cuando pagué las expensas, me fui de vacaciones». Saber elegir el registro forma parte del dominio de la construcción.",
        ],
        table: {
          caption: "De la subordinada conjugada a la absoluta",
          head: ["Subordinada conjugada", "Absoluta de participio", "Qué concuerda"],
          rows: [
            ["Cuando se revisaron los presupuestos, …", "Revisados los presupuestos, …", "masculino plural"],
            ["Cuando se cerró la votación, …", "Cerrada la votación, …", "femenino singular"],
            ["Una vez que se pintaron las rejas, …", "Una vez pintadas las rejas, …", "femenino plural"],
            ["Cuando se resolvió el reclamo, …", "Resuelto el reclamo, …", "participio irregular"],
          ],
        },
        examples: [
          { es: "Cerrada la votación, la presidenta leyó el resultado en voz alta.", note: "Primero se cierra la votación; después se lee el resultado." },
          { es: "Instaladas las cámaras, bajaron los robos en la cochera.", note: "Femenino plural: «las cámaras» → «instaladas»." },
          { es: "Una vez cobrada la indemnización, el consorcio reparó el ascensor.", note: "«Una vez» + participio, sin «que»." },
        ],
        mistakes: [
          {
            wrong: "Revisado las facturas, el tesorero firmó el balance.",
            right: "Revisadas las facturas, el tesorero firmó el balance.",
            why: "El participio no queda invariable: concuerda con «las facturas», femenino plural.",
          },
          {
            wrong: "Una vez que cobrada la indemnización, se repararon los balcones.",
            right: "Una vez cobrada la indemnización, … / Una vez que se cobró la indemnización, …",
            why: "«Una vez» va con participio; «una vez que», con verbo conjugado. Mezclarlos produce una frase agramatical.",
          },
          {
            wrong: "Cerrando la votación, la presidenta leyó el resultado.",
            right: "Cerrada la votación, la presidenta leyó el resultado.",
            why: "El gerundio presenta la acción en curso o simultánea; para una acción ya terminada antes, participio.",
          },
        ],
        tip: "Antes de condensar, pregúntate dos cosas: ¿la acción está terminada antes de la principal? ¿Puedo nombrar el sustantivo afectado por ella? Si alguna respuesta es no, busca otra estructura.",
      },
      {
        heading: "Qué verbos la admiten y qué sentidos puede tomar",
        body: [
          "No todos los verbos forman absolutas. Funcionan los transitivos, cuyo participio se aplica a lo que recibe la acción («firmada la escritura», «aprobado el reglamento»), y los intransitivos que expresan un cambio de estado o una llegada: «llegada la primavera», «muerto el portero», «transcurridas dos semanas», «caído el sol». Los verbos de actividad sin resultado, como trabajar, discutir sin objeto, caminar o conversar, no tienen un estado final que el participio pueda presentar: «*Conversado los vecinos» no es posible.",
          "El valor básico es temporal (anterioridad), pero el contexto puede añadir otros. Si la principal explica una consecuencia, la absoluta se lee como causa: «Agotado el fondo de reserva, hubo que pedir una cuota extraordinaria» (como se había agotado). Si la principal está en condicional o en futuro hipotético, se lee como condición: «Aprobado el presupuesto, la obra empezaría en marzo» (si se aprobara). Con «aun» delante se lee como concesión: «Aun reparada la membrana, siguió entrando agua».",
        ],
        table: {
          caption: "Lecturas de la absoluta según el contexto",
          head: ["Absoluta", "Lectura", "Paráfrasis"],
          rows: [
            ["Vencido el plazo, se cerró la inscripción.", "temporal", "Cuando venció el plazo, …"],
            ["Agotado el fondo de reserva, hubo que pedir una cuota extra.", "causal", "Como se había agotado el fondo, …"],
            ["Aprobado el presupuesto, la obra empezaría en marzo.", "condicional", "Si se aprobara el presupuesto, …"],
            ["Aun reparada la membrana, siguió entrando agua.", "concesiva", "Aunque se había reparado la membrana, …"],
          ],
        },
        mistakes: [
          {
            wrong: "Discutido los vecinos durante dos horas, se levantó la sesión.",
            right: "Tras discutir durante dos horas, los vecinos levantaron la sesión.",
            why: "Aquí «discutir» es una actividad sin objeto y sin resultado: no forma absoluta. «Tras» + infinitivo conserva la anterioridad.",
          },
          {
            wrong: "Aun reparada la membrana, ya no entra agua.",
            right: "Reparada la membrana, ya no entra agua.",
            why: "«Aun» anuncia un resultado inesperado. Si la consecuencia es la esperable, la lectura es causal y sobra «aun».",
          },
        ],
        tip: "Prueba de la anterioridad: si puedes añadir «ya» a la paráfrasis («cuando ya se había vencido el plazo»), la absoluta funciona.",
      },
      {
        heading: "Otras maneras de condensar y cuándo conviene volver atrás",
        body: [
          "La absoluta no es la única forma de ahorrar una subordinada. Con «tras», «después de», «al» o «nada más» + infinitivo mantienes el mismo sujeto que la principal o lo dejas implícito: «Tras revisar las facturas, el tesorero firmó». «Al» marca coincidencia o causa («Al no haber quórum, se suspendió la asamblea»), «nada más» subraya la inmediatez y es muy frecuente en España, mientras que en buena parte de América se prefiere «apenas» + verbo conjugado. Con «tras» o «después de» + sustantivo, la acción se convierte en nombre: «Tras la renuncia del administrador, …».",
          "Deshacer la reducción exige recuperar lo que la absoluta callaba: el tiempo y el modo del verbo. Si la principal habla del futuro, la subordinada con «cuando» va en subjuntivo: «Una vez pintada la fachada, se retirarán los andamios» → «Cuando se haya pintado la fachada, se retirarán los andamios». Si habla del pasado, en indicativo: «Cuando se pintó la fachada, se retiraron los andamios».",
          "Hay además fórmulas fijas que funcionan como conectores y que conviene usar con su sentido exacto: «dicho esto» (para pasar a otra idea), «visto lo visto» (a la vista de lo ocurrido), «dadas las circunstancias», «llegado el caso» (si llega a ocurrir), «bien mirado» (pensándolo bien).",
        ],
        table: {
          caption: "Cuatro formas de decir lo mismo",
          head: ["Estructura", "Ejemplo", "Registro"],
          rows: [
            ["absoluta", "Aprobado el balance, se renovó el consejo.", "escrito formal"],
            ["tras + infinitivo", "Tras aprobar el balance, la asamblea renovó el consejo.", "formal y neutro"],
            ["tras + sustantivo", "Tras la aprobación del balance, se renovó el consejo.", "informes y noticias"],
            ["subordinada conjugada", "Cuando aprobamos el balance, renovamos el consejo.", "oral y explícito"],
          ],
        },
        examples: [
          { es: "Llegado el caso, el consorcio pedirá un préstamo al banco.", note: "Fórmula fija: «si llega a ser necesario»." },
          { es: "Dadas las circunstancias, la asamblea pasa a cuarto intermedio.", note: "«Dadas» concuerda con «las circunstancias»." },
          { es: "Al no presentarse ningún candidato, siguió el mismo administrador.", note: "«Al no» + infinitivo: lectura causal." },
        ],
        mistakes: [
          {
            wrong: "Dado las circunstancias, se suspende la reunión.",
            right: "Dadas las circunstancias, se suspende la reunión.",
            why: "«Dado» es un participio absoluto y concuerda con su sustantivo, como cualquier otro.",
          },
          {
            wrong: "Una vez pintada la fachada, se retirarán los andamios → Cuando se pintó la fachada, se retirarán los andamios.",
            right: "Cuando se haya pintado la fachada, se retirarán los andamios.",
            why: "Al deshacer la reducción hay que concordar tiempo y modo con la principal: futuro → subjuntivo.",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Empieza por el sentido de cada absoluta, sigue con la concordancia y termina condensando y deshaciendo la reducción.",
    exercises: [
      {
        id: "c1-06-gramatica-lectura",
        type: "context",
        prompt: "Lee el fragmento del acta y decide qué relación expresa la construcción absoluta.",
        items: [
          {
            context: "Acta de marzo: «Vencido el contrato del encargado, el consejo publicó un aviso para cubrir el puesto».",
            q: "¿Qué relación expresa «vencido el contrato»?",
            options: ["Una condición que quizá no se cumpla.", "Una concesión: a pesar de que venció.", "Un hecho anterior que sitúa en el tiempo la publicación."],
            answer: 2,
            why: "Lectura temporal básica: primero vence el contrato y después se publica el aviso.",
          },
          {
            context: "Informe del tesorero: «Agotada la partida de mantenimiento, no fue posible cambiar las luminarias del pasillo».",
            q: "¿Cómo se parafrasea mejor?",
            options: ["Como se había agotado la partida, no se pudieron cambiar las luminarias.", "Aunque se había agotado la partida, se cambiaron las luminarias.", "Si se agotara la partida, no se cambiarían las luminarias."],
            answer: 0,
            why: "La principal presenta una consecuencia negativa: la absoluta se lee como causa.",
          },
          {
            context: "Propuesta de la presidenta: «Aceptada la oferta de la empresa, los trabajos durarían unos cuarenta días».",
            q: "¿Qué valor tiene la absoluta?",
            options: ["Causal: la oferta ya fue aceptada.", "Condicional: si se aceptara la oferta.", "Concesivo: aunque se aceptó la oferta."],
            answer: 1,
            why: "El condicional «durarían» convierte la absoluta en una hipótesis.",
          },
          {
            context: "Reclamo de una vecina: «Aun cambiada la bomba de agua, el cuarto piso sigue sin presión».",
            q: "¿Qué indica «aun»?",
            options: ["Que la bomba todavía no se cambió.", "Que la bomba se cambió para que hubiera presión.", "Que el resultado contradice lo esperable después del cambio."],
            answer: 2,
            why: "«Aun» + participio introduce una concesión: el cambio debería haber resuelto el problema y no lo hizo.",
          },
        ],
      },
      {
        id: "c1-06-gramatica-concordancia",
        type: "gap",
        prompt: "Escribe el participio con la concordancia correcta. Entre corchetes tienes el infinitivo.",
        items: [
          { q: "___ las llaves nuevas, el encargado retiró las viejas de la portería. [repartir]", answers: [["Repartidas", "repartidas"]], why: "Concuerda con «las llaves»: femenino plural." },
          { q: "___ el reglamento interno, cada unidad recibió una copia. [imprimir]", answers: [["Impreso", "impreso", "Imprimido", "imprimido"]], why: "«Impreso» es la forma más frecuente; «imprimido» también es correcto." },
          { q: "Una vez ___ los recibos de luz, se calcularán las expensas de abril. [abonar]", answers: [["abonados"]], why: "«Una vez» + participio que concuerda con «los recibos»." },
          { q: "___ las doce de la noche, el ruido de la obra vecina seguía. [dar]", answers: [["Dadas", "dadas"]], why: "«Dar» con la hora expresa un momento alcanzado; concuerda con «las doce». Por el contexto, la lectura es casi concesiva: ya era tarde y aun así seguía el ruido." },
          { q: "___ las circunstancias, el consejo decidió no subir la cuota. [ver]", answers: [["Vistas", "vistas"]], why: "Participio irregular de «ver», en femenino plural." },
          { q: "___ el problema de la humedad, los vecinos del primero dejaron de quejarse. [resolver]", answers: [["Resuelto", "resuelto"]], why: "Participio irregular: resuelto, no «resolvido»." },
        ],
      },
      {
        id: "c1-06-gramatica-verbos",
        type: "classify",
        prompt: "¿Admite el verbo una construcción absoluta en la frase propuesta? Clasifica cada caso.",
        categories: ["Correcta: verbo transitivo o de cambio de estado", "Incorrecta: verbo de actividad sin resultado"],
        items: [
          { text: "Transcurridas tres semanas, la empresa no había respondido.", cat: 0, why: "«Transcurrir» expresa el paso completo de un tiempo." },
          { text: "Caminado el administrador por la terraza, decidió cerrarla.", cat: 1, why: "«Caminar» es una actividad; mejor: «Tras recorrer la terraza, el administrador…»." },
          { text: "Desaparecida la mancha, se volvió a pintar el techo.", cat: 0, why: "«Desaparecer» indica un cambio de estado." },
          { text: "Conversado los vecinos un buen rato, se votó.", cat: 1, why: "«Conversar» no deja un resultado; mejor: «Tras conversar un buen rato, los vecinos votaron»." },
          { text: "Firmada la escritura, el nuevo propietario se mudó.", cat: 0, why: "Transitivo: la escritura recibe la acción de firmar." },
          { text: "Trabajado el pintor toda la mañana, se fue a almorzar.", cat: 1, why: "«Trabajar» es una actividad; mejor: «Después de trabajar toda la mañana, el pintor…»." },
        ],
      },
      {
        id: "c1-06-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error relacionado con la condensación. Corrígela.",
        items: [
          {
            sentence: "Una vez que retirados los escombros, se limpió el patio.",
            answers: ["Una vez retirados los escombros, se limpió el patio.", "Una vez que se retiraron los escombros, se limpió el patio."],
            why: "«Una vez» + participio o «una vez que» + verbo conjugado; no las dos cosas a la vez.",
          },
          {
            sentence: "Aprobado las nuevas normas de convivencia, se colgaron en el ascensor.",
            answers: ["Aprobadas las nuevas normas de convivencia, se colgaron en el ascensor."],
            why: "El participio concuerda con «las nuevas normas»: aprobadas.",
          },
          {
            sentence: "Reparando el portón, los vecinos volvieron a entrar por la puerta principal.",
            answers: ["Reparado el portón, los vecinos volvieron a entrar por la puerta principal."],
            why: "La reparación terminó antes: participio, no gerundio.",
          },
          {
            sentence: "Una vez instaladas las alarmas, el seguro bajó la prima → Cuando se instalen las alarmas, el seguro bajó la prima.",
            answers: ["Cuando se instalaron las alarmas, el seguro bajó la prima."],
            why: "La principal está en pasado: al expandir, la subordinada va en indicativo pasado.",
          },
        ],
      },
      {
        id: "c1-06-gramatica-condensar",
        type: "open",
        prompt: "Condensa o expande según se te pide. Compara después con el modelo y revisa con la lista.",
        items: [
          {
            prompt: "Condensa de dos maneras distintas (una absoluta y otra con «tras» + sustantivo): «Cuando se terminó la impermeabilización de la terraza, los vecinos del último piso dejaron de tener goteras».",
            model: "Terminada la impermeabilización de la terraza, los vecinos del último piso dejaron de tener goteras. / Tras la impermeabilización de la terraza, los vecinos del último piso dejaron de tener goteras.",
            checklist: ["El participio concuerda con «la impermeabilización».", "La versión con «tras» usa un sustantivo, no un verbo conjugado.", "Las dos conservan que la obra terminó antes."],
          },
          {
            prompt: "Expande para un vecino que no entiende el acta: «Una vez cobradas las expensas atrasadas, se encargará el cambio de la caldera».",
            model: "Cuando se hayan cobrado las expensas que se deben, se va a encargar el cambio de la caldera.",
            checklist: ["Uso «cuando» + subjuntivo porque la principal es futura.", "Mantengo el orden: primero el cobro, después el encargo."],
          },
          {
            prompt: "Explica por qué no puedes condensar así y propón una alternativa: «Cuando los chicos jugaban en el patio, se rompió un vidrio».",
            model: "No sirve una absoluta porque el juego estaba en curso, no terminado: la acción es simultánea. Una alternativa es «Mientras los chicos jugaban en el patio, se rompió un vidrio» o «Durante el juego de los chicos en el patio, se rompió un vidrio».",
            checklist: ["Identifico la simultaneidad como el problema.", "Propongo una alternativa con «mientras» o «durante»."],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico de la vida en un edificio de propiedad horizontal en Argentina: asambleas, cuentas y obras. Algunas palabras cambian en otros países; se indica cuando conviene.",
    groups: [
      {
        title: "La asamblea y el acta",
        items: [
          { es: "el consorcio", note: "en Argentina, el conjunto de propietarios de un edificio; en España, «la comunidad de propietarios»" },
          { es: "la asamblea extraordinaria", note: "reunión convocada fuera del calendario habitual por un asunto urgente" },
          { es: "el orden del día", note: "lista de temas que se van a tratar en una reunión" },
          { es: "el quórum", note: "número mínimo de asistentes para que una votación sea válida" },
          { es: "labrar el acta", note: "redactar formalmente lo tratado y lo decidido en una reunión" },
          { es: "someter a votación", note: "pedir a los presentes que voten una propuesta" },
          { es: "pasar a cuarto intermedio", note: "interrumpir una asamblea para retomarla más tarde (uso rioplatense)" },
          { es: "levantar la sesión", note: "dar por terminada una reunión" },
        ],
      },
      {
        title: "Cuentas y obras",
        items: [
          { es: "las expensas", note: "en Argentina, gastos comunes que paga cada propietario cada mes" },
          { es: "la unidad funcional", note: "cada departamento o local de un edificio, a efectos legales" },
          { es: "el fondo de reserva", note: "dinero ahorrado para imprevistos o reparaciones grandes" },
          { es: "la cuota extraordinaria", note: "pago adicional para cubrir un gasto no previsto" },
          { es: "el presupuesto", note: "cálculo previo del costo de una obra presentado por una empresa" },
          { es: "la fachada", note: "pared exterior y visible de un edificio" },
          { es: "el encargado", note: "persona que cuida y mantiene el edificio; en otros países, «el portero» o «el conserje»" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-06-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "el quórum", right: "número mínimo de asistentes para que una votación sea válida" },
          { left: "labrar el acta", right: "redactar formalmente lo tratado y lo decidido en una reunión" },
          { left: "pasar a cuarto intermedio", right: "interrumpir una asamblea para retomarla más tarde" },
          { left: "el fondo de reserva", right: "dinero ahorrado para imprevistos o reparaciones grandes" },
          { left: "la unidad funcional", right: "cada departamento o local de un edificio, a efectos legales" },
          { left: "levantar la sesión", right: "dar por terminada una reunión" },
        ],
      },
      {
        id: "c1-06-lexico-uso",
        type: "gap",
        prompt: "Completa el aviso del consejo con la expresión adecuada.",
        bank: ["orden del día", "cuota extraordinaria", "expensas", "someter a votación"],
        items: [
          { q: "El único punto del ___ será la reparación de la fachada.", answers: [["orden del día"]] },
          { q: "Agotado el fondo de reserva, será necesaria una ___ de dos meses.", answers: [["cuota extraordinaria"]] },
          { q: "Las ___ de mayo incluirán el aumento del sueldo del encargado.", answers: [["expensas"]] },
          { q: "La administración va a ___ los tres presupuestos recibidos.", answers: [["someter a votación"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La pausa y el tono suspendido después de una absoluta",
    explanation: [
      "Al leer en voz alta un acta, la construcción absoluta forma su propio grupo fónico: se pronuncia de un tirón y termina con un tono suspendido, ligeramente ascendente o mantenido, que anuncia que la oración sigue. La coma escrita corresponde a una pausa breve. Si no la haces, el oyente puede tomar el participio por un adjetivo del sustantivo siguiente.",
      "Compara «Aprobado el presupuesto, | la obra empieza el lunes» con «El presupuesto aprobado es el más caro». En el primer caso hay dos grupos y el participio va delante con acento fuerte; en el segundo, un solo grupo y el participio es un simple adjetivo.",
      "En la conversación rioplatense, como en otras variedades, la -d- de los participios en -ado se relaja mucho («aprobao»). Al leer un acta en voz alta conviene pronunciarla con suavidad pero sin perderla. El audio es sintético: sirve para percibir el contraste, no certifica un acento regional ni evalúa tu pronunciación.",
    ],
    table: {
      caption: "Uno o dos grupos fónicos",
      head: ["Dos grupos (absoluta)", "Un grupo (adjetivo)"],
      rows: [
        ["Pintadas las rejas, | se abrió el jardín.", "Las rejas pintadas brillan al sol."],
        ["Cerrado el balance, | se convocó la asamblea.", "El balance cerrado está en la portería."],
        ["Elegida la presidenta, | habló diez minutos.", "La presidenta elegida vive en el quinto."],
      ],
    },
    perceive: {
      id: "c1-06-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide si el participio forma una absoluta (con pausa y tono suspendido) o funciona como adjetivo.",
      items: [
        {
          q: "¿Cómo funciona el participio?",
          options: ["Adjetivo del sustantivo, en un solo grupo.", "Absoluta, con pausa después."],
          answer: 1,
          why: "Se oye una pausa tras «el ascensor»: Arreglado el ascensor, | …",
          audio: "Arreglado el ascensor, la vecina del noveno volvió a salir a la calle.",
          voice: "es-AR-f",
        },
        {
          q: "¿Cómo funciona el participio?",
          options: ["Adjetivo del sustantivo, en un solo grupo.", "Absoluta, con pausa después."],
          answer: 0,
          why: "Un solo grupo fónico: «el ascensor arreglado» describe al ascensor.",
          audio: "El ascensor arreglado hace menos ruido que antes.",
          voice: "es-AR-m",
        },
        {
          q: "¿Dónde está la pausa principal?",
          options: ["Después de «terraza».", "Después de «cerrada».", "No hay pausa."],
          answer: 0,
          why: "El grupo «Cerrada la terraza» termina en «terraza», con tono suspendido.",
          audio: "Cerrada la terraza por obras, los vecinos tendieron la ropa en el patio.",
          voice: "es-AR-f",
        },
        {
          q: "¿Qué fórmula fija oyes al principio?",
          options: ["dicho esto", "llegado el caso", "visto lo visto"],
          answer: 2,
          why: "«Visto lo visto» equivale a «a la vista de lo ocurrido».",
          audio: "Visto lo visto, nadie quiere presidir el consejo el año que viene.",
          voice: "es-AR-m",
        },
      ],
    },
    produce: [
      { text: "Leída y aprobada el acta anterior, se pasó al primer punto del orden del día.", tip: "Haz la pausa después de «anterior» y mantén el tono suspendido.", voice: "es-AR-f" },
      { text: "Transcurridos quince días sin respuesta, la administración volvió a escribir a la empresa.", tip: "Pronuncia la -d- de «transcurridos» con suavidad, sin perderla.", voice: "es-AR-m" },
      { text: "Llegado el caso, se pedirá un préstamo; dicho esto, nadie quiere endeudarse.", tip: "Dos fórmulas fijas, cada una con su pausa.", voice: "es-AR-f" },
      { text: "Aun pintada la fachada, las manchas de humedad volvieron en invierno.", tip: "Sube un poco el tono en «fachada» para anunciar el contraste.", voice: "es-AR-m" },
    ],
    spelling: "La coma después de la absoluta no es opcional cuando la construcción va al principio: marca el límite del grupo y evita leer el participio como adjetivo.",
  },
  listening: {
    title: "Redactar el acta en la portería",
    context: "Después de una asamblea extraordinaria en un edificio de Palermo, Graciela, secretaria del consejo de propietarios, y Tomás, un vecino abogado jubilado, se quedan en la portería para labrar el acta. Escucha primero sin transcripción. Graciela y Tomás usan el voseo rioplatense («querés», «poné», «sos»), propio de su variedad. Las voces son sintéticas y no se presentan como una variedad regional verificada.",
    speakers: [
      { id: "g", name: "Graciela", voice: "es-AR-f", role: "Secretaria del consejo de propietarios" },
      { id: "t", name: "Tomás", voice: "es-AR-m", role: "Vecino del sexto piso, abogado jubilado" },
    ],
    script: [
      { speaker: "g", text: "Bueno, Tomás, si no lo escribimos ahora, mañana nadie se acuerda de nada. Yo anoté todo como salió: cuando se leyó el acta anterior, cuando se votó la fachada, cuando la del tercero se enojó. Son tres carillas que empiezan todas con cuando." },
      { speaker: "t", text: "Por eso las actas de antes eran tan cortitas. Empecemos por arriba: leída y aprobada el acta anterior, se pasó al primer punto. Ahí ya te ahorraste una línea entera y queda claro que primero se aprobó y después se siguió." },
      { speaker: "g", text: "Dale. Después viene lo de los presupuestos. Puse: discutido largamente los propietarios, se eligió el de la empresa Fachadas del Sur. ¿Así está bien?" },
      { speaker: "t", text: "No, eso no funciona. Discutir, así, sin objeto, es una actividad; no deja un resultado que el participio pueda nombrar. Además los que discuten son los propietarios, y la absoluta necesita lo que recibe la acción. Mejor: tras un largo debate, se eligió el presupuesto de Fachadas del Sur. O, si querés mantener el participio: analizados los tres presupuestos, se eligió el de Fachadas del Sur." },
      { speaker: "g", text: "Me gusta la segunda. Ahora, la plata. El fondo de reserva no alcanza, así que se aprobó una cuota extraordinaria. ¿Puedo poner agotado el fondo de reserva?" },
      { speaker: "t", text: "Agotado no, porque todavía quedan unos pesos. Poné insuficiente el fondo de reserva… no, eso suena raro. Mejor algo con al: al no alcanzar el fondo de reserva, se aprobó una cuota extraordinaria de dos meses. Ahí se entiende la causa sin forzar nada." },
      { speaker: "g", text: "Perfecto. Y lo último: los andamios. La empresa dijo que los saca cuando termine de pintar. Yo escribí: una vez que terminada la pintura, se retirarán los andamios." },
      { speaker: "t", text: "Ojo con eso: o una vez terminada la pintura, o una vez que se termine la pintura. Mezclaste las dos. Y sobre la del tercero, no pongas que se enojó. Poné: formulada la objeción de la unidad tres, se dejó constancia en el acta. Así queda registrado sin pelearnos más." },
      { speaker: "g", text: "Sos un diplomático. Bueno, entonces cierro: no habiendo más temas que tratar, se levantó la sesión a las veintidós horas. Mañana la paso en limpio y la cuelgo en el ascensor." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué hacen y qué criterio siguen?",
        exercise: {
          id: "c1-06-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Qué están haciendo Graciela y Tomás?",
              options: ["Preparan el orden del día de la próxima asamblea.", "Redactan el acta de la asamblea que acaba de terminar.", "Responden a un reclamo de la empresa de fachadas."],
              answer: 1,
              why: "Graciela trae sus notas y juntos las convierten en el texto del acta.",
            },
            {
              q: "¿Qué criterio general propone Tomás?",
              options: ["Condensar las subordinadas, pero solo cuando la estructura lo permite.", "Copiar las notas tal como salieron para no cambiar nada.", "Escribir el acta en un registro coloquial para que todos la entiendan."],
              answer: 0,
              why: "Condensa con absolutas y con «tras» o «al», pero rechaza las absolutas imposibles.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "c1-06-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles de cada decisión.",
          items: [
            {
              q: "¿Por qué Tomás rechaza «discutido largamente los propietarios»?",
              options: ["Porque la discusión no terminó.", "Porque «propietarios» debería ir en singular.", "Porque discutir sin objeto es una actividad sin resultado."],
              answer: 2,
              why: "Explica que el participio necesita un resultado y algo que reciba la acción.",
            },
            {
              q: "¿Por qué no usan «agotado el fondo de reserva»?",
              options: ["Porque el fondo todavía tiene algo de dinero.", "Porque «agotado» no concuerda con «fondo».", "Porque es una fórmula demasiado coloquial."],
              answer: 0,
              why: "Tomás dice que «todavía quedan unos pesos»: agotado sería falso.",
            },
            {
              q: "¿Qué hacen con la objeción de la vecina del tercero?",
              options: ["La eliminan del acta.", "La registran con una absoluta neutra, sin decir que se enojó.", "La copian textualmente entre comillas."],
              answer: 1,
              why: "«Formulada la objeción de la unidad tres, se dejó constancia en el acta».",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cómo cada nota de Graciela pasó al texto del acta. Responde y luego consulta la transcripción.",
        exercise: {
          id: "c1-06-escucha-notice",
          type: "match",
          prompt: "Relaciona cada problema con la solución que adoptan.",
          pairs: [
            { left: "cuando se leyó el acta anterior", right: "leída y aprobada el acta anterior" },
            { left: "discutido largamente los propietarios", right: "analizados los tres presupuestos" },
            { left: "el fondo de reserva no alcanza", right: "al no alcanzar el fondo de reserva" },
            { left: "una vez que terminada la pintura", right: "una vez terminada la pintura" },
            { left: "la del tercero se enojó", right: "formulada la objeción de la unidad tres" },
          ],
          why: "Cada solución elige la estructura que la gramática y el contenido permiten: absoluta, «al» + infinitivo o corrección de la mezcla.",
        },
      },
    ],
  },
  reading: {
    title: "Noventa años en cuatro carpetas",
    genre: "Artículo de una revista de barrio",
    frame: "Artículo de Laura Benítez para la revista vecinal de Palermo «El Ombú». El edificio, las personas y las actas citadas son ficticios.",
    text: [
      "En el sótano del edificio de la calle Gurruchaga, detrás de la caldera, hay cuatro carpetas de tapas verdes que casi nadie ha abierto. Contienen las actas del consorcio desde 1934, el año en que se terminó la construcción, hasta la llegada de las computadoras. Las leí durante un invierno entero y descubrí que cuentan la historia del barrio mejor que muchos libros. También descubrí que están escritas en una lengua muy particular, densa y económica, que hoy casi solo sobrevive en los documentos oficiales.",
      "La primera acta comienza así: «Reunidos los propietarios en el hall de entrada y verificado el quórum, se procedió a designar administrador». En una sola línea, el secretario resolvió dos acciones previas sin usar ni un verbo conjugado. No dice cuándo llegaron los vecinos ni quién contó a los presentes: lo que importa es que, cumplidos esos pasos, la reunión pudo empezar. Esa es la lógica de la construcción absoluta. Presenta un hecho terminado como el telón de fondo de lo que viene después, y deja el verbo conjugado para lo verdaderamente nuevo.",
      "Con el tiempo, las actas cambian de tono, pero no de gramática. En 1955 se lee: «Interrumpido el suministro de gas durante once días, el consejo resolvió reclamar a la compañía». Aquí la absoluta ya no solo ordena el tiempo; también explica. Fue precisamente porque faltó el gas por lo que hubo reclamo, y el lector lo entiende sin necesidad de un «como» ni de un «porque». En 1978, en cambio, encontré una frase que me hizo sonreír: «Aun reparado el ascensor, la señora del octavo se niega a usarlo». El «aun» delante del participio lo cambia todo: el arreglo no bastó para convencerla.",
      "No todas las actas son un modelo. Hay secretarios que abusan de la fórmula y encadenan tres o cuatro absolutas antes de llegar al verbo principal, de modo que el lector olvida de qué se hablaba. Otros caen en errores que todavía hoy se repiten, como dejar el participio sin concordar: «Aprobado las cuentas, se levantó la sesión». Y uno, en 1961, escribió «Trabajado el portero toda la noche, se destapó la cloaca», una frase imposible, porque trabajar no deja un resultado que el participio pueda nombrar. Hoy diríamos «Tras trabajar toda la noche, el portero logró destapar la cloaca».",
      "Lo más interesante es comparar esas actas con las que se escriben ahora. La de la última asamblea, redactada por nuestra vecina Graciela con ayuda de Tomás, del sexto, mantiene la tradición sin exagerarla: «Analizados los tres presupuestos, se eligió el de Fachadas del Sur». Pero cuando la absoluta no encajaba, los redactores eligieron otras herramientas, como «al no alcanzar el fondo de reserva» o «tras un largo debate». Esa flexibilidad es la que distingue a quien domina un recurso de quien solo lo imita.",
      "Leídas las cuatro carpetas, me quedo con una impresión: la absoluta no es un adorno arcaico. Es una forma de ordenar la información, de separar lo que ya pasó de lo que se decide ahora. Usada con medida, hace que un acta se lea en la mitad de tiempo. Usada sin criterio, la vuelve impenetrable. Por eso propongo que las carpetas verdes salgan del sótano y se exhiban en el hall, donde empezó todo, para que cada nuevo secretario aprenda de los aciertos y de los tropiezos de quienes escribieron antes que él.",
    ],
    glossary: [
      { es: "el hall", note: "vestíbulo de entrada de un edificio" },
      { es: "destapar la cloaca", note: "desobstruir el desagüe principal" },
      { es: "impenetrable", note: "muy difícil de entender" },
    ],
    tasks: [
      {
        id: "c1-06-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el artículo.",
        items: [
          {
            q: "Según la autora, ¿qué hace la absoluta con la información?",
            options: ["Presenta lo ya ocurrido como fondo y deja el verbo conjugado para lo nuevo.", "Añade detalles decorativos sin función informativa.", "Sustituye a la oración principal cuando el acta es larga."],
            answer: 0,
            why: "El segundo párrafo dice que presenta un hecho terminado como telón de fondo.",
          },
          {
            q: "¿Qué valor tiene la absoluta del acta de 1955?",
            options: ["Concesivo.", "Condicional.", "Temporal y causal a la vez."],
            answer: 2,
            why: "La autora dice que «ya no solo ordena el tiempo; también explica».",
          },
          {
            q: "¿Qué propone la autora al final?",
            options: ["Reescribir las actas antiguas en un español actual.", "Exhibir las carpetas en el hall como material de aprendizaje.", "Prohibir las absolutas en las actas nuevas."],
            answer: 1,
            why: "Quiere que cada nuevo secretario aprenda de aciertos y tropiezos.",
          },
        ],
      },
      {
        id: "c1-06-lectura-clasificar",
        type: "classify",
        prompt: "Clasifica cada frase citada en el artículo según la valoración de la autora.",
        categories: ["Uso adecuado de la absoluta", "Uso problemático o imposible"],
        items: [
          { text: "Reunidos los propietarios en el hall de entrada y verificado el quórum, …", cat: 0, why: "Dos acciones previas condensadas con concordancia correcta." },
          { text: "Aprobado las cuentas, se levantó la sesión.", cat: 1, why: "Falta de concordancia: aprobadas." },
          { text: "Trabajado el portero toda la noche, …", cat: 1, why: "Verbo de actividad sin resultado." },
          { text: "Analizados los tres presupuestos, se eligió el de Fachadas del Sur.", cat: 0, why: "Transitivo, terminado y concordado." },
          { text: "Aun reparado el ascensor, la señora del octavo se niega a usarlo.", cat: 0, why: "Uso concesivo con «aun»." },
        ],
      },
      {
        id: "c1-06-lectura-evaluacion",
        type: "open",
        prompt: "Valora una idea del artículo con argumentos propios.",
        items: [
          {
            prompt: "La autora dice que la absoluta, «usada sin criterio», vuelve un acta impenetrable. Explica en 70–90 palabras qué criterio darías a un nuevo secretario para decidir cuándo usarla y cuándo no.",
            model: "Le diría que la use solo cuando la acción esté terminada antes de la principal y pueda nombrar lo que la recibe. Además, que no encadene más de una absoluta antes del verbo principal, porque el lector pierde el hilo. Si la relación es simultánea o el verbo es una actividad, conviene «mientras», «durante» o «tras» + infinitivo. Y si el acta va a leerla gente poco acostumbrada a estos textos, es mejor una subordinada con «cuando».",
            checklist: ["Doy al menos dos criterios gramaticales.", "Menciono un criterio de lectura o de destinatario.", "Propongo una alternativa concreta a la absoluta."],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la autora cita una absoluta y a continuación explica qué hace en el texto.",
      items: [
        { quote: "En una sola línea, el secretario resolvió dos acciones previas sin usar ni un verbo conjugado.", note: "Dos absolutas coordinadas: «Reunidos los propietarios… y verificado el quórum»." },
        { quote: "y deja el verbo conjugado para lo verdaderamente nuevo", note: "La absoluta como recurso de estructura informativa: lo conocido o previo, sin verbo; lo nuevo, con verbo." },
        { quote: "El «aun» delante del participio lo cambia todo", note: "Lectura concesiva marcada por «aun»." },
        { quote: "Leídas las cuatro carpetas, me quedo con una impresión", note: "La propia autora usa una absoluta para cerrar: «Leídas» concuerda con «las cuatro carpetas»." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según el registro, análisis y escritura breve sobre la vida del consorcio.",
    exercises: [
      {
        id: "c1-06-orden",
        type: "order",
        prompt: "Ordena las palabras para formar oraciones de acta con una absoluta inicial.",
        items: [
          {
            words: ["Verificado", "el", "quórum,", "la", "presidenta", "abrió", "la", "asamblea."],
            why: "Absoluta inicial con coma y después la principal.",
          },
          {
            words: ["Retirados", "los", "andamios,", "se", "limpiaron", "las", "veredas."],
            why: "«Retirados» concuerda con «los andamios».",
          },
          {
            words: ["Una", "vez", "cobradas", "las", "deudas,", "se", "pagará", "al", "plomero."],
            why: "«Una vez» + participio, sin «que».",
          },
        ],
      },
      {
        id: "c1-06-registro",
        type: "context",
        prompt: "Elige la versión más adecuada para el texto y el destinatario indicados.",
        items: [
          {
            context: "Mensaje de WhatsApp de una vecina a su hermana: le cuenta que el viernes, cuando arreglaron el portero eléctrico, por fin pudo recibir un paquete.",
            q: "¿Qué versión suena natural en ese mensaje?",
            options: ["Arreglado el portero eléctrico, recibí por fin el paquete.", "Cuando arreglaron el portero eléctrico, por fin pude recibir el paquete.", "Tras el arreglo del portero eléctrico, procedí a recibir el paquete."],
            answer: 1,
            why: "En un mensaje informal se prefiere la subordinada conjugada; las otras dos suenan a acta.",
          },
          {
            context: "Acta de la asamblea: hay que registrar que, una vez elegido el nuevo consejo, se trató el tema de la terraza.",
            q: "¿Qué versión corresponde al acta?",
            options: ["Elegido el nuevo consejo, se trató el tema de la terraza.", "Eligiendo el nuevo consejo, se trató el tema de la terraza.", "Cuando lo eligieron al nuevo consejo, se trató el tema de la terraza."],
            answer: 0,
            why: "Registro formal y acción terminada antes: absoluta de participio.",
          },
          {
            context: "Aviso en el ascensor para todos los vecinos, incluidos inquilinos que llegaron hace poco al país.",
            q: "¿Qué versión es más clara para ese público?",
            options: ["Una vez concluidas las tareas, restablecido el servicio y verificada la presión, se habilitará el agua caliente.", "Concluidas las tareas y restablecido el servicio, verificada la presión, habilítase el agua caliente.", "Cuando terminen los trabajos y se compruebe la presión, volverá el agua caliente."],
            answer: 2,
            why: "Tres absolutas encadenadas dificultan la lectura; para un público amplio conviene la subordinada explícita.",
          },
        ],
      },
      {
        id: "c1-06-formulas",
        type: "match",
        prompt: "Relaciona cada fórmula fija con su sentido.",
        pairs: [
          { left: "dicho esto", right: "una vez expresada esta idea, paso a otra" },
          { left: "visto lo visto", right: "a la vista de lo ocurrido" },
          { left: "llegado el caso", right: "si llega a ser necesario" },
          { left: "bien mirado", right: "pensándolo con más atención" },
          { left: "dadas las circunstancias", right: "teniendo en cuenta la situación" },
        ],
      },
      {
        id: "c1-06-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Redacta en 40–60 palabras el párrafo de un acta que registre tres hechos: se leyó el informe del tesorero, se aprobó por mayoría y se decidió cambiar las cerraduras. Usa al menos una absoluta y una estructura distinta.",
            model: "Leído el informe del tesorero, la asamblea lo aprobó por mayoría, con dos abstenciones. Tras la aprobación del informe, se decidió cambiar las cerraduras de la puerta principal y de la cochera, debido a los robos registrados en el último mes. El cambio se hará en la semana del quince.",
            checklist: ["Uso al menos una absoluta bien concordada.", "Uso otra estructura de condensación (tras, al, después de).", "El orden de los hechos queda claro."],
          },
          {
            prompt: "Reescribe para una vecina mayor que se perdió la asamblea (40–60 palabras) este fragmento: «Agotado el fondo de reserva y desestimado el préstamo bancario, se aprobó una cuota extraordinaria pagadera en dos meses».",
            model: "Como ya no queda plata en el fondo de reserva y decidimos no pedir un préstamo al banco, votamos una cuota extra. Se va a pagar en dos meses, junto con las expensas. Si necesitas que te lo explique mejor, pasa por mi departamento cuando quieras.",
            checklist: ["Deshago las absolutas con verbos conjugados.", "Conservo la relación de causa.", "Adapto el registro a una conversación cercana."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta la circular del consejo de propietarios (240–320 palabras) para informar a todos los vecinos de lo decidido en la asamblea extraordinaria sobre la fachada: presupuesto elegido, forma de pago, calendario de obras y molestias previstas.",
    context: "La circular se colgará en el ascensor y se enviará por correo electrónico. La leerán propietarios, inquilinos y el encargado. Debe ser formal pero clara: puedes usar absolutas y otras formas de condensación, siempre que no dificulten la lectura. Usa los datos del audio y del artículo o inventa otros coherentes.",
    steps: [
      "Haz una lista cronológica de lo decidido y marca qué hechos son anteriores a otros.",
      "Decide qué hechos condensarás con absolutas, cuáles con «tras» o «al» + infinitivo y cuáles dejarás con verbo conjugado para mayor claridad.",
      "Redacta la circular con un saludo, tres o cuatro párrafos y una despedida.",
      "Revisa la concordancia de cada participio, corrige cualquier «una vez que» + participio y comprueba que no encadenas más de dos absolutas seguidas.",
    ],
    useLanguage: [
      "Celebrada la asamblea extraordinaria del…, …",
      "Analizados los presupuestos, …",
      "Una vez iniciadas las obras, …",
      "al no alcanzar el fondo de reserva",
      "tras la aprobación de…",
      "llegado el caso / dadas las circunstancias",
    ],
    model: [
      "Estimados vecinos: celebrada el pasado martes la asamblea extraordinaria convocada para tratar la reparación de la fachada, el consejo de propietarios les informa de las decisiones adoptadas. Asistieron los representantes de veintiuna de las treinta unidades funcionales, por lo que hubo quórum suficiente para votar todos los puntos del orden del día.",
      "Analizados los tres presupuestos presentados, la asamblea eligió por mayoría el de la empresa Fachadas del Sur, que incluye el arreglo de los balcones, la impermeabilización de las paredes y la pintura completa del frente. Al no alcanzar el fondo de reserva para cubrir el costo total, se aprobó una cuota extraordinaria que se pagará en dos meses, junto con las expensas de junio y julio. Quienes tengan dificultades para afrontarla pueden consultar a la administración, que estudiará cada caso.",
      "Las obras comenzarán el lunes 2 de junio y durarán unas seis semanas. Una vez instalados los andamios, no se podrá usar la terraza ni abrir las ventanas que dan a la calle durante el horario de trabajo, de ocho a diecisiete horas. Les pedimos que retiren las plantas y los objetos de los balcones antes de esa fecha. Terminada la pintura, la empresa retirará los andamios y limpiará la vereda.",
      "Por último, se dejó constancia en el acta de la objeción presentada por la unidad tres sobre el color elegido, que se tratará en la próxima asamblea ordinaria. Llegado el caso, el consejo podría pedir a la empresa una muestra de otros tonos. Agradecemos su paciencia y quedamos a su disposición para cualquier consulta.",
    ],
    checklist: [
      "Cada participio de las absolutas concuerda con su sustantivo.",
      "Uso «una vez» + participio o «una vez que» + verbo conjugado, sin mezclarlos.",
      "No encadeno más de dos absolutas antes de la oración principal.",
      "Uso al menos una alternativa a la absoluta (tras, al + infinitivo) cuando el verbo no la admite.",
      "La información práctica (fechas, horarios, pagos) se entiende sin releer.",
    ],
    words: [240, 320],
  },
  speaking: {
    intro: "Prepárate con palabras clave. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Contarle la asamblea a una vecina",
        prompt: "La vecina del segundo no pudo ir a la asamblea y te pide que le cuentes qué se decidió. Explícale, en registro oral y cercano, cómo se eligió el presupuesto, por qué hay una cuota extra, cuándo empiezan las obras y qué molestias habrá. En algún momento lee una línea del acta y tradúcela a la lengua de todos los días.",
        prep: [
          "Anota los cuatro temas en orden cronológico.",
          "Elige una frase del acta con absoluta y prepara su versión oral con «cuando» o «como».",
          "Piensa en una pregunta que ella podría hacerte y en tu respuesta.",
        ],
        seconds: 240,
        model: "Mira, la asamblea fue larga pero se decidió todo. Primero vimos los tres presupuestos y, después de compararlos bastante, ganó el de Fachadas del Sur, que es el más completo. Como el fondo de reserva no alcanzaba, votamos una cuota extra en dos meses. En el acta pusieron «Analizados los tres presupuestos, se eligió…», que es lo mismo pero dicho como en un documento. Las obras empiezan el dos de junio…",
        selfCheck: [
          "Uso subordinadas conjugadas para hablar con naturalidad.",
          "Cito una absoluta del acta y la explico con otras palabras.",
          "Mantengo el orden cronológico de los hechos.",
        ],
      },
      {
        title: "Negociar con el administrador",
        prompt: "El administrador quiere que los andamios se instalen la semana próxima, aunque todavía no llegó el permiso municipal. Tú representas al consejo. Pregúntale por qué tiene prisa, aclara que la asamblea condicionó el inicio al permiso y negocia un calendario realista.",
        prep: [
          "Prepara una frase condicional con absoluta: «Obtenido el permiso, …».",
          "Ten dos preguntas abiertas y una propuesta de fecha.",
        ],
        seconds: 150,
        model: "Entiendo que la empresa tenga la agenda llena, pero ¿qué pasa si viene una inspección y no tenemos el permiso? La asamblea fue clara: una vez obtenido el permiso, se empieza. Propongo que confirmemos la fecha el mismo día en que llegue la autorización y que la empresa nos reserve esa semana.",
        selfCheck: [
          "Hago preguntas antes de proponer.",
          "Uso una absoluta con valor condicional.",
          "Cierro con una propuesta concreta.",
        ],
      },
      {
        title: "Lectura del acta en voz alta",
        prompt: "Lee en voz alta las tres primeras líneas del modelo de circular como si las leyeras al comienzo de una reunión. Marca la pausa y el tono suspendido de cada absoluta.",
        prep: ["Subraya cada absoluta y marca con una barra dónde hace pausa."],
        seconds: 60,
        selfCheck: ["Cada absoluta forma su propio grupo fónico.", "No pierdo la -d- de los participios."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu circular y una lista de absolutas que hayas encontrado en textos reales (periódicos, actas, avisos).",
    cards: [
      {
        move: "Explica",
        task: "Explica a tu profesor, con un ejemplo propio, por qué un verbo de actividad no forma absoluta y qué alternativa usarías.",
        phrases: ["No funciona porque…", "En su lugar diría…"],
      },
      {
        move: "Pregunta",
        task: "Pregunta si una absoluta que encontraste en un periódico tiene lectura temporal, causal o condicional.",
        phrases: ["¿Aquí se lee como causa o solo como tiempo?", "¿Cambiaría el sentido si…?"],
      },
      {
        move: "Compara",
        task: "Lee la misma información en tres versiones (absoluta, «tras» + sustantivo y subordinada) y pide a tu profesor que elija la mejor para un acta y para un mensaje.",
        phrases: ["En el acta quedaría mejor…", "Para un mensaje, en cambio…"],
      },
      {
        move: "Corrige",
        task: "Pide a tu profesor que te dicte tres frases de acta y corrige tú la concordancia de los participios en voz alta.",
        phrases: ["Aquí tiene que ser femenino plural porque…"],
      },
    ],
    bring: "Tu circular revisada, la lista de absolutas reales y, si quieres, la grabación de la conversación con la vecina.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué frase contiene una construcción absoluta correcta?",
        options: ["Cerrando la persiana, el comercio de abajo apagó las luces.", "Conversado el consejo, se aprobó la propuesta.", "Cerrada la persiana, el comercio de abajo apagó las luces."],
        answer: 2,
        why: "Participio concordado de un verbo transitivo, con la acción terminada antes.",
      },
      {
        type: "choice",
        q: "En «Rechazada la oferta, la empresa no volvería a presentarse», ¿qué valor tiene la absoluta?",
        options: ["Condicional: si se rechazara la oferta.", "Concesivo: aunque se rechazó.", "Simultáneo: mientras se rechazaba."],
        answer: 0,
        why: "El condicional «no volvería» orienta hacia una lectura hipotética.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué paráfrasis conserva su sentido?",
        options: ["Aunque se cambió la bomba, el agua sigue saliendo turbia.", "Como se cambió la bomba, el agua sale limpia.", "Si se cambiara la bomba, el agua saldría limpia."],
        answer: 0,
        why: "«Aun» + participio: lectura concesiva.",
        audio: "Aun cambiada la bomba, el agua sigue saliendo turbia.",
        voice: "es-AR-f",
      },
      {
        type: "gap",
        q: "___ las elecciones del consejo, la nueva presidenta presentó su plan de trabajo.",
        answers: [["Celebradas", "celebradas", "Realizadas", "realizadas", "Concluidas", "concluidas", "Terminadas", "terminadas"]],
        hint: "Participio de un verbo transitivo concordado con «las elecciones».",
        why: "Femenino plural: celebradas, realizadas o concluidas.",
      },
      {
        type: "gap",
        q: "Una vez ___ el contrato con la nueva empresa de limpieza, se avisará a todas las unidades. [firmar]",
        answers: [["firmado"]],
        hint: "«Una vez» va seguido directamente del participio, sin «que».",
        why: "«Una vez firmado el contrato»: masculino singular.",
      },
      {
        type: "error",
        sentence: "Dado los resultados de la votación, el administrador presentó su renuncia.",
        answers: ["Dados los resultados de la votación, el administrador presentó su renuncia."],
        why: "«Dado» concuerda con «los resultados»: dados.",
      },
      {
        type: "error",
        sentence: "Charlado los vecinos un rato en el pasillo, cada uno volvió a su casa.",
        answers: ["Tras charlar un rato en el pasillo, cada vecino volvió a su casa.", "Después de charlar un rato en el pasillo, cada vecino volvió a su casa.", "Tras charlar un rato en el pasillo, los vecinos volvieron a sus casas.", "Después de charlar un rato en el pasillo, los vecinos volvieron a sus casas."],
        why: "«Charlar» es una actividad sin resultado: no forma absoluta. Usa «tras» o «después de» + infinitivo.",
      },
      {
        type: "order",
        words: ["Vencido", "el", "plazo,", "la", "administración", "cerró", "la", "lista", "de", "candidatos."],
        why: "Absoluta inicial, coma y oración principal.",
      },
      {
        type: "choice",
        q: "¿Cuál es la versión expandida correcta de «Una vez revisadas las cuentas, se publicarán en la cartelera»?",
        options: ["Cuando se revisaron las cuentas, se publicarán en la cartelera.", "Cuando se hayan revisado las cuentas, se publicarán en la cartelera.", "Cuando se habrán revisado las cuentas, se publicarán en la cartelera."],
        answer: 1,
        why: "La principal es futura: «cuando» + subjuntivo.",
      },
      {
        type: "open",
        prompt: "Explica en 70–90 palabras a un compañero de clase por qué «Una vez que terminada la obra» es incorrecto y ofrécele dos versiones correctas con sentidos equivalentes, una formal y otra más oral.",
        model: "La frase mezcla dos estructuras. «Una vez» funciona como una absoluta y va seguida de un participio: «una vez terminada la obra». «Una vez que», en cambio, es una conjunción y necesita un verbo conjugado: «una vez que termine la obra» o «una vez que se terminó la obra», según el tiempo de la principal. Para un acta elegiría la primera; para hablar con un vecino, diría simplemente «cuando termine la obra».",
        checklist: ["Explico la diferencia entre «una vez» y «una vez que».", "Doy una versión formal y otra oral.", "Tengo en cuenta el tiempo de la principal."],
      },
    ],
  },
  complete: {
    canNow: [
      "Formo absolutas de participio con la concordancia correcta y sé cuándo un verbo no las admite.",
      "Interpreto el valor temporal, causal, condicional o concesivo de una absoluta según el contexto.",
      "Elijo entre absoluta, «tras» o «al» + infinitivo, grupo nominal o subordinada conjugada según el registro.",
      "Deshago una reducción recuperando el tiempo y el modo que exige la principal.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Lecturas de la absoluta según el contexto» y escribe una paráfrasis para cada ejemplo.",
      "Dentro de una semana, busca tres absolutas en un periódico digital y clasifícalas por su lectura.",
      "En la próxima clase, lee tu circular en voz alta y pide a tu profesor que señale una condensación que podría ser más clara.",
    ],
  },
  related: [
    { path: "/gramatica/absolutas-de-participio-y-reduccion-de", label: "Clase: Absolutas de participio y reducción de subordinadas" },
  ],
};
