import type { Module } from "../../types";

/**
 * C1 · semana 8 · Autoestudio espejo de G180 (queísmo y dequeísmo: régimen y
 * norma) y G181 (pronombres átonos: leísmo, laísmo, loísmo y variedades).
 * Repaso autónomo con una cooperativa ficticia de Santiago de Chile que abre
 * una oficina en Madrid y unifica sus cartas a socios. Audio mediante
 * síntesis; sin acreditación regional.
 */
export const c1w08: Module = {
  id: "c1-08",
  level: "c1",
  week: 8,
  kind: "core",
  title: "Le informamos de que la llamaremos",
  subtitle: "Repaso de cuándo un «que» necesita preposición y de cómo elegir lo, la o le según la norma y la variedad",
  stop: {
    place: "Santiago",
    country: "Chile",
  },
  minutes: 120,
  newObjectives: [
    "c1.gram.g180",
    "c1.gram.g181",
    "c1.voc.w08-atencion-socios",
    "c1.pron.w08-atonos-de-que",
    "c1.lis.w08-revision-plantillas",
    "c1.read.w08-guia-estilo",
    "c1.wri.w08-informe-correccion",
    "c1.spk.w08-presentar-criterios",
    "c1.fun.w08-justificar-norma",
    "c1.disc.w08-voz-institucional",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo decidir con criterio si una subordinada con «que» lleva preposición, elegir entre lo, la y le según la función y el verbo, y distinguir los usos admitidos por la norma de los que conviene corregir en un texto institucional.",
    steps: [
      "Repasa en la teoría las pruebas para detectar queísmo y dequeísmo y el sistema de los pronombres átonos con sus variantes.",
      "Practica con cartas, correos y guiones telefónicos de una cooperativa con oficinas en Santiago y Madrid.",
      "Escucha la revisión de las plantillas entre la jefa de comunicación y un redactor madrileño, y lee la guía de estilo interna.",
      "Redacta el informe de corrección, revísalo y presenta tus criterios oralmente al equipo.",
    ],
  },
  theory: {
    intro: "Las dos clases que repasas esta semana tratan de lo mismo desde dos ángulos: qué exige cada palabra. Un verbo como «acordarse» exige «de»; un verbo como «pensar», no. Un verbo como «ayudar» pide un complemento directo; «gustar», uno indirecto. Cuando el hablante pierde de vista esa exigencia aparecen el queísmo, el dequeísmo, el laísmo o el loísmo. Todos son frecuentes al hablar, en Chile, en España y en toda América; aquí aprendes a decidir qué corresponde en un texto cuidado.",
    parts: [
      {
        heading: "Dequeísmo: un «de» que sobra",
        body: [
          "Hay dequeísmo cuando se añade «de» delante de un «que» que no lo necesita: «*Pienso de que la carta es clara», «*Nos dijeron de que llamarían». Ocurre sobre todo con verbos de pensamiento y de lengua (pensar, creer, opinar, considerar, decir, comunicar), con expresiones impersonales en las que la subordinada es el sujeto («*Es seguro de que…», «*Resulta de que…», «*Me alegra de que…») y en locuciones que no llevan «de» («*a no ser de que», «*a medida de que», «*una vez de que»).",
          "La prueba más rápida consiste en cambiar la subordinada por «eso». Si dices «pienso eso», el «de» sobra: «pienso que». Si dices «me alegra eso», también: «me alegra que». La otra prueba es convertir la frase en pregunta: «¿Qué piensas?», no «*¿De qué piensas?».",
        ],
        table: {
          caption: "Detectar el «de» que sobra",
          head: ["Forma dequeísta", "Prueba", "Forma de la norma"],
          rows: [
            ["*Creemos de que el plazo es suficiente.", "Creemos eso.", "Creemos que el plazo es suficiente."],
            ["*Es probable de que la oficina abra en marzo.", "Eso es probable.", "Es probable que la oficina abra en marzo."],
            ["*Me preocupa de que no contesten.", "Me preocupa eso.", "Me preocupa que no contesten."],
            ["*A medida de que lleguen las solicitudes…", "locución sin «de»", "A medida que lleguen las solicitudes…"],
          ],
        },
        mistakes: [
          {
            wrong: "Le comunicamos de que su cuenta ha sido activada.",
            right: "Le comunicamos que su cuenta ha sido activada.",
            why: "Prueba: «le comunicamos eso». «Comunicar» no rige «de».",
          },
          {
            wrong: "Resulta de que el formulario estaba incompleto.",
            right: "Resulta que el formulario estaba incompleto.",
            why: "En el sentido de «sucede que», «resultar» no lleva «de». «Resultar de» existe con otro sentido: «derivarse de».",
          },
        ],
      },
      {
        heading: "Queísmo: una preposición que falta",
        body: [
          "El queísmo es el fenómeno contrario: se suprime una preposición exigida. Pasa con verbos pronominales que rigen «de», «en» o «con» (acordarse de, alegrarse de, darse cuenta de, insistir en, confiar en, conformarse con), con adjetivos (seguro de, consciente de, convencido de), con sustantivos (la idea de, el hecho de, la posibilidad de) y con locuciones como «a pesar de que» o «no cabe duda de que».",
          "La prueba vuelve a ser «eso»: «me acuerdo de eso» → «me acuerdo de que»; «insisto en eso» → «insisto en que»; «estoy seguro de eso» → «estoy seguro de que». En pregunta: «¿De qué te acuerdas?», «¿En qué insistes?».",
          "Algunas parejas parecen contradictorias pero siguen la misma lógica: «recuerdo que» y «me acuerdo de que»; «olvidé que», «me olvidé de que» y «se me olvidó que»; «me alegra que» y «me alegro de que»; «es seguro que» y «estoy seguro de que». Otros verbos admiten dos construcciones: «avisar que» y «avisar de que»; «dudar que» y «dudar de que»; «antes que» y «antes de que». Con «informar», la forma general es «informar de que», pero «informar que» es habitual y aceptada en América. «Advertir que» significa ‘notar’ y «advertir (de) que», ‘avisar’.",
        ],
        table: {
          caption: "Parejas que confunden",
          head: ["Sin preposición", "Con preposición", "Por qué"],
          rows: [
            ["Recuerdo que firmé.", "Me acuerdo de que firmé.", "«acordarse de» es pronominal"],
            ["Me alegra que vengas.", "Me alegro de que vengas.", "la subordinada es sujeto / complemento con «de»"],
            ["Es seguro que llegará.", "Estoy seguro de que llegará.", "«seguro de» cuando alguien está seguro"],
            ["Acordaron que abrirían en marzo.", "Se acordaron de que abrirían en marzo.", "decidir / recordar"],
          ],
        },
        examples: [
          { es: "Insistimos en que el reembolso se hará en un plazo de diez días.", note: "«Insistir en eso»." },
          { es: "No cabe duda de que la nueva oficina atraerá a socios chilenos residentes en España.", note: "«No cabe duda de eso»." },
          { es: "Le informamos de que su solicitud está en trámite.", note: "Forma general; en América también se usa «le informamos que»." },
        ],
        mistakes: [
          {
            wrong: "Estamos convencidos que la propuesta beneficiará a los socios.",
            right: "Estamos convencidos de que la propuesta beneficiará a los socios.",
            why: "«Convencido de eso»: el adjetivo rige «de».",
          },
          {
            wrong: "A pesar que el sistema falló, se atendieron todas las llamadas.",
            right: "A pesar de que el sistema falló, se atendieron todas las llamadas.",
            why: "La locución es «a pesar de»: la preposición no desaparece ante «que».",
          },
        ],
        tip: "No corrijas por intuición: aplica siempre la prueba de «eso». Muchos hablantes corrigen de más y convierten un «me alegro de que» correcto en un «me alegro que» queísta.",
      },
      {
        heading: "Lo, la, le: el sistema y sus variantes admitidas",
        body: [
          "En el sistema que siguen la mayoría de los hispanohablantes, el llamado etimológico, «lo, la, los, las» sustituyen al complemento directo y concuerdan en género y número: «Llamé a la socia → la llamé». «Le, les» sustituyen al complemento indirecto sin distinguir género: «Le envié el contrato a la socia». Para saber cuál es cuál, prueba la pasiva: solo el complemento directo puede pasar a sujeto («La socia fue llamada»; «*La socia fue enviada el contrato»).",
          "En el centro y el norte de España existe el leísmo de persona: «le» en lugar de «lo» para un complemento directo masculino singular de persona («A tu primo le vi ayer»). La norma lo admite. El leísmo en plural («*les vi») no se recomienda, y el femenino («*A tu prima le vi») o de cosa («*El informe le envié») no se acepta. Muy extendido en todo el mundo hispánico, y también admitido, es el «le» de cortesía con «usted»: «¿Le acompaño, señora?», «Le saluda atentamente».",
          "El laísmo («*La dije que viniera», por «le dije») y el loísmo («*Lo di un golpe», por «le di») usan el pronombre de complemento directo para un indirecto. El laísmo es frecuente en el habla del centro de Castilla, Madrid incluida; el loísmo es más raro y está muy estigmatizado. Ninguno de los dos se acepta en la lengua cuidada.",
        ],
        table: {
          caption: "Qué admite la norma",
          head: ["Uso", "Ejemplo", "Valoración"],
          rows: [
            ["etimológico", "Al socio lo atendimos ayer. A la socia le explicamos el contrato.", "norma general"],
            ["leísmo de persona masculino singular", "Al socio le atendimos ayer.", "admitido"],
            ["«le» de cortesía con usted", "Le esperamos en la oficina, señora Rojas.", "admitido y muy extendido"],
            ["leísmo plural", "A los socios les atendimos ayer.", "no recomendado"],
            ["leísmo femenino o de cosa", "A la socia le atendimos. El contrato le firmé.", "no aceptado"],
            ["laísmo", "A la socia la explicamos el contrato.", "no aceptado"],
            ["loísmo", "Al socio lo dimos la tarjeta.", "no aceptado"],
          ],
        },
        mistakes: [
          {
            wrong: "A la nueva cajera la dieron las llaves el lunes.",
            right: "A la nueva cajera le dieron las llaves el lunes.",
            why: "Laísmo: las llaves son el complemento directo; la cajera es el indirecto, que se sustituye por «le».",
          },
          {
            wrong: "El certificado le adjuntamos en este correo.",
            right: "El certificado lo adjuntamos en este correo.",
            why: "El leísmo de cosa no se acepta: «el certificado» es directo, masculino y no es persona.",
          },
        ],
      },
      {
        heading: "Verbos que cambian de pronombre y voz del texto frente a voz del personaje",
        body: [
          "Algunos verbos admiten las dos construcciones según el sentido. «Llamar» por teléfono lleva complemento directo («A la socia la llamamos ayer»); «llamar» en el sentido de dar un nombre admite «la» o «le» («La llamaban la Jefa» / «Le llamaban la Jefa»). «Avisar» alterna: «La avisamos del cambio» o «Le avisamos que habría un cambio». Con molestar, preocupar o asustar, si el sujeto es una cosa o un hecho que provoca un estado, se prefiere «le»: «Le preocupa el retraso». Si el sujeto es una persona que actúa a propósito, «lo» o «la»: «El vecino la molestaba con llamadas».",
          "En un texto institucional, la voz de la entidad sigue la norma. Pero en una cita literal o en el diálogo de un personaje conviene conservar cómo habla: si una socia madrileña dice «la dije a mi hija que viniera», el acta de una reclamación puede citarlo entre comillas sin corregirlo. Corregir la cita sería falsearla; adoptar esa forma en la voz de la cooperativa sería un error.",
        ],
        examples: [
          { es: "A la socia la llamamos el lunes para confirmar la cita.", note: "«Llamar» por teléfono: complemento directo." },
          { es: "Le molesta que la oficina cierre a las dos.", note: "Un hecho provoca un estado: «le»." },
          { es: "El cobrador la molestaba todas las semanas con mensajes.", note: "Una persona actúa a propósito: «la»." },
        ],
        mistakes: [
          {
            wrong: "Nos alegra de que le haya gustado la atención, señora.",
            right: "Nos alegra que le haya gustado la atención, señora.",
            why: "«Nos alegra eso»: con la subordinada como sujeto, sin «de». El «le» de cortesía es correcto.",
          },
        ],
        tip: "Cuando dudes con un verbo de afección, pregúntate si alguien actúa a propósito. Si no, «le» es la opción más segura en ambas orillas.",
      },
    ],
  },
  grammar: {
    intro: "Empieza por el régimen de los «que», sigue con los pronombres y termina corrigiendo y reformulando textos de la cooperativa.",
    exercises: [
      {
        id: "c1-08-gramatica-regimen",
        type: "gap",
        prompt: "Completa con «que», «de que», «en que» o «con que», según exija la palabra anterior. Aplica la prueba de «eso».",
        items: [
          { q: "Estamos seguros ___ su reclamo se resolverá esta semana.", answers: [["de que"]], why: "«Seguros de eso»." },
          { q: "Creemos ___ la oficina de Madrid abrirá en abril.", answers: [["que"]], why: "«Creemos eso»: sin preposición." },
          { q: "La gerente insistió ___ las cartas se revisen antes de enviarlas.", answers: [["en que"]], why: "«Insistió en eso»." },
          { q: "Nos conformamos ___ el sistema funcione los fines de semana.", answers: [["con que"]], why: "«Nos conformamos con eso»." },
          { q: "Me di cuenta ___ la plantilla tenía un error en el saludo.", answers: [["de que"]], why: "«Darse cuenta de eso»." },
          { q: "Es probable ___ el banco central suba la tasa.", answers: [["que"]], why: "«Eso es probable»: la subordinada es sujeto." },
          { q: "No te olvides ___ el viernes la sucursal cierra antes.", answers: [["de que"]], why: "«Olvidarse de eso»." },
        ],
      },
      {
        id: "c1-08-gramatica-prueba",
        type: "classify",
        prompt: "Clasifica cada frase de los borradores de la cooperativa.",
        categories: ["Correcta según la norma", "Dequeísmo", "Queísmo"],
        items: [
          { text: "Opinamos de que la tarifa es justa.", cat: 1, why: "«Opinamos eso»: sobra «de»." },
          { text: "Somos conscientes que el trámite es lento.", cat: 2, why: "«Conscientes de eso»: falta «de»." },
          { text: "Le avisamos de que el horario cambiará.", cat: 0, why: "«Avisar» admite «que» y «de que»." },
          { text: "A no ser de que usted indique lo contrario, renovaremos la póliza.", cat: 1, why: "La locución es «a no ser que»." },
          { text: "Confiamos que pronto tendremos una respuesta.", cat: 2, why: "«Confiamos en eso»: falta «en»." },
          { text: "Recordamos que el plazo vence el día 30.", cat: 0, why: "«Recordar» no es pronominal: «recordamos eso»." },
          { text: "Nos alegramos que haya elegido nuestra cooperativa.", cat: 2, why: "«Nos alegramos de eso»: con el verbo pronominal, «de que»." },
        ],
      },
      {
        id: "c1-08-gramatica-pronombres",
        type: "context",
        prompt: "Lee la situación y elige el pronombre que corresponde a un texto institucional cuidado.",
        items: [
          {
            context: "Correo a un socio: hay que decirle que se le enviará la nueva tarjeta.",
            q: "¿Qué frase es correcta?",
            options: ["Lo enviaremos la nueva tarjeta la próxima semana.", "Le enviaremos la nueva tarjeta la próxima semana.", "La enviaremos la nueva tarjeta la próxima semana."],
            answer: 1,
            why: "El socio es complemento indirecto (la tarjeta es el directo): «le».",
          },
          {
            context: "Nota interna: la cajera Fernanda llamó ayer a una socia por teléfono.",
            q: "¿Qué frase es correcta?",
            options: ["Fernanda le llamó ayer por la tarde.", "Fernanda lo llamó ayer por la tarde.", "Fernanda la llamó ayer por la tarde."],
            answer: 2,
            why: "«Llamar» por teléfono lleva complemento directo; la socia es femenina: «la».",
          },
          {
            context: "Carta a una socia que se quejó del ruido de la obra en la sucursal.",
            q: "¿Qué frase sigue la norma?",
            options: ["Lamentamos que el ruido le haya molestado durante su visita.", "Lamentamos que el ruido les haya molestado durante su visita.", "Lamentamos de que el ruido le haya molestado durante su visita."],
            answer: 0,
            why: "Un hecho provoca un estado: «le», en singular porque es una sola socia. Y «lamentar» no lleva «de».",
          },
          {
            context: "Informe de un redactor de Madrid sobre un socio que visitó la oficina.",
            q: "¿Cuál de estas frases admite la norma, aunque no sea la forma general?",
            options: ["Al señor Pérez la atendimos a las diez.", "Al señor Pérez le atendimos a las diez.", "El expediente del señor Pérez le revisamos a las diez."],
            answer: 1,
            why: "Leísmo de persona masculino singular: admitido. Los otros dos no se aceptan.",
          },
        ],
      },
      {
        id: "c1-08-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de régimen o de pronombre. Corrígela para la voz institucional de la cooperativa.",
        items: [
          {
            sentence: "Le comunicamos de que su préstamo ha sido aprobado.",
            answers: ["Le comunicamos que su préstamo ha sido aprobado."],
            why: "Dequeísmo: «le comunicamos eso».",
          },
          {
            sentence: "A la socia la dijimos que traiga su carnet.",
            answers: ["A la socia le dijimos que traiga su carnet.", "A la socia le dijimos que trajera su carnet."],
            why: "Laísmo: la socia es complemento indirecto de «decir».",
          },
          {
            sentence: "Estamos seguros que nuestra nueva aplicación le resultará útil.",
            answers: ["Estamos seguros de que nuestra nueva aplicación le resultará útil."],
            why: "Queísmo: «seguros de eso».",
          },
          {
            sentence: "Al socio lo enviamos una copia del contrato.",
            answers: ["Al socio le enviamos una copia del contrato."],
            why: "Loísmo: el socio es complemento indirecto; «una copia» es el directo.",
          },
        ],
      },
      {
        id: "c1-08-gramatica-reformular",
        type: "open",
        prompt: "Corrige y explica. Compara después con el modelo y revisa con la lista.",
        items: [
          {
            prompt: "Reescribe este párrafo de una carta para que siga la norma y explica brevemente cada cambio: «Nos alegramos que haya confiado en nosotros. Le informamos de que la llamaremos el lunes. Pensamos de que el trámite estará listo antes del viernes».",
            model: "«Nos alegramos de que haya confiado en nosotros. Le informamos de que la llamaremos el lunes. Pensamos que el trámite estará listo antes del viernes.» Añado «de» tras «nos alegramos» (alegrarse de eso); mantengo «le informamos de que» y «la llamaremos», que ya son correctos; quito el «de» tras «pensamos» (pensamos eso).",
            checklist: ["Aplico la prueba de «eso» a cada «que».", "No corrijo lo que ya es correcto.", "Explico cada cambio en una frase."],
          },
          {
            prompt: "Una socia madrileña dijo en una llamada: «La dije a mi hija que viniera a firmar». Redacta la línea del registro de reclamaciones que cita sus palabras y otra que resume el hecho en la voz de la cooperativa.",
            model: "Cita: la socia afirma: «La dije a mi hija que viniera a firmar». Resumen: la socia le pidió a su hija que acudiera a la oficina para firmar el documento.",
            checklist: ["Conservo la cita literal sin corregirla.", "En la voz de la cooperativa uso «le» para el complemento indirecto."],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico de la atención a socios en una cooperativa de ahorro y crédito. Algunas palabras varían entre Chile y España.",
    groups: [
      {
        title: "Trámites y cuentas",
        items: [
          { es: "la cooperativa de ahorro y crédito", note: "entidad financiera cuyos clientes son también socios y propietarios" },
          { es: "la cuota de participación", note: "aporte que hace cada socio al capital de la cooperativa" },
          { es: "el crédito de consumo", note: "préstamo para gastos personales; en España se dice también «préstamo personal»" },
          { es: "el reembolso", note: "devolución de un dinero pagado" },
          { es: "estar en trámite", note: "estar siendo procesado por la administración" },
          { es: "la sucursal", note: "oficina de una entidad distinta de la sede central" },
          { es: "el carnet", note: "documento de identidad; en Chile, «el carnet», y en España, «el DNI»" },
        ],
      },
      {
        title: "Comunicación con el socio",
        items: [
          { es: "la plantilla", note: "modelo de texto que se reutiliza cambiando algunos datos" },
          { es: "el guion telefónico", note: "texto que siguen los ejecutivos al atender o hacer llamadas" },
          { es: "el reclamo", note: "en Chile y gran parte de América, queja formal; en España, «la reclamación»" },
          { es: "la guía de estilo", note: "documento con las normas de redacción de una institución" },
          { es: "el ejecutivo de atención", note: "en Chile, empleado que atiende a los clientes" },
          { es: "dejar constancia", note: "registrar algo por escrito para que no se olvide" },
          { es: "la cita literal", note: "reproducción exacta de las palabras de alguien, entre comillas" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-08-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "la cuota de participación", right: "aporte que hace cada socio al capital de la cooperativa" },
          { left: "el reembolso", right: "devolución de un dinero pagado" },
          { left: "la plantilla", right: "modelo de texto que se reutiliza cambiando algunos datos" },
          { left: "el reclamo", right: "queja formal de un cliente o socio" },
          { left: "dejar constancia", right: "registrar algo por escrito para que no se olvide" },
          { left: "la sucursal", right: "oficina distinta de la sede central" },
        ],
      },
      {
        id: "c1-08-lexico-uso",
        type: "gap",
        prompt: "Completa el correo interno con la expresión adecuada.",
        bank: ["guía de estilo", "en trámite", "guion telefónico", "cita literal"],
        items: [
          { q: "Todas las plantillas nuevas deben respetar la ___ aprobada en marzo.", answers: [["guía de estilo"]] },
          { q: "Si el socio pregunta por su crédito, dile que está ___.", answers: [["en trámite"]] },
          { q: "El ___ incluye ahora un saludo con «usted» y una despedida fija.", answers: [["guion telefónico"]] },
          { q: "En el registro de reclamos, las palabras del socio van como ___ entre comillas.", answers: [["cita literal"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Palabras átonas que se apoyan en otras: «de que», «le», «la», «lo»",
    explanation: [
      "Los pronombres átonos y la secuencia «de que» no tienen acento propio: se apoyan en la palabra siguiente y forman con ella un solo bloque. «La llamaremos» se pronuncia casi como una palabra, la-lla-ma-RE-mos, y «de que» se funde con lo que sigue: de-que-LLE-gue. Por eso, al hablar deprisa, es difícil oír si alguien dijo «le» o «la», o si hubo «de» o no.",
      "Para percibirlo, fíjate en la vocal del pronombre, que se mantiene aunque sea átona, y en la sílaba extra que añade «de». Para producirlo con claridad en una llamada formal, no alargues el pronombre ni lo acentúes: lo natural es pronunciarlo ligado y dejar el acento en el verbo.",
      "En Chile es frecuente aspirar o perder la -s final de sílaba («ehtamoh seguroh»), lo que no afecta al pronombre pero sí puede ocultar el plural «los/las» o «les». Las voces del audio son sintéticas: sirven para percibir el contraste, no certifican un acento regional ni evalúan tu pronunciación.",
    ],
    table: {
      caption: "Bloques sin acento propio",
      head: ["Escrito", "Bloque fónico", "Acento en"],
      rows: [
        ["la llamaremos", "lallamaremos", "-RE-"],
        ["le enviamos", "leenviamos", "-VIA-"],
        ["estoy seguro de que viene", "seguro dequeviene", "-VIE-"],
        ["se lo dijimos", "selodijimos", "-JI-"],
      ],
    },
    perceive: {
      id: "c1-08-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide qué oyes. Concéntrate en las palabras átonas.",
      items: [
        {
          q: "¿Qué pronombre oyes antes de «llamaremos»?",
          options: ["le", "la", "lo"],
          answer: 1,
          why: "Se oye «la llamaremos»: complemento directo femenino.",
          audio: "Señora Muñoz, la llamaremos mañana a primera hora.",
          voice: "es-CL-f",
        },
        {
          q: "¿Hay «de» delante de «que»?",
          options: ["Sí: «estamos seguros de que»", "No: «estamos seguros que»"],
          answer: 0,
          why: "Se oye la sílaba extra: «seguros de que».",
          audio: "Estamos seguros de que su crédito se aprobará esta semana.",
          voice: "es-CL-m",
        },
        {
          q: "¿Hay «de» delante de «que»?",
          options: ["Sí: «pensamos de que»", "No: «pensamos que»"],
          answer: 1,
          why: "No hay sílaba extra: «pensamos que», como pide la norma.",
          audio: "Pensamos que la nueva sucursal estará lista en abril.",
          voice: "es-ES-m",
        },
        {
          q: "¿Qué pronombre oyes antes de «dimos»?",
          options: ["le", "la", "lo"],
          answer: 0,
          why: "Se oye «le dimos»: complemento indirecto, con «las llaves» como directo.",
          audio: "A la nueva ejecutiva le dimos las llaves de la oficina.",
          voice: "es-CL-f",
        },
      ],
    },
    produce: [
      { text: "Le informamos de que su solicitud está en trámite.", tip: "Liga «le informamos» y «de que su»: dos bloques, sin acentuar los átonos.", voice: "es-CL-f" },
      { text: "Señor Rojas, lo llamaremos en cuanto tengamos la respuesta.", tip: "«lo llamaremos» en un solo bloque, acento en -RE-.", voice: "es-CL-m" },
      { text: "Nos alegramos de que haya elegido nuestra cooperativa.", tip: "No te comas el «de»: de-que-HA-ya.", voice: "es-ES-m" },
      { text: "Insistimos en que nadie le pedirá su clave por teléfono.", tip: "Pronuncia «en que» ligado al verbo siguiente.", voice: "es-CL-f" },
    ],
    spelling: "En la escritura, los pronombres átonos van separados del verbo conjugado («la llamaremos») y unidos al infinitivo, al gerundio o al imperativo afirmativo («llamarla», «llamándola», «llámela»).",
  },
  listening: {
    title: "Una sola voz para dos oficinas",
    context: "Javiera, jefa de comunicación de una cooperativa de ahorro de Santiago, y Álvaro, redactor recién contratado en la nueva oficina de Madrid, revisan por videollamada las plantillas de cartas y el guion telefónico. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como una variedad regional verificada.",
    speakers: [
      { id: "j", name: "Javiera", voice: "es-CL-f", role: "Jefa de comunicación en Santiago" },
      { id: "a", name: "Álvaro", voice: "es-ES-m", role: "Redactor de la oficina de Madrid" },
    ],
    script: [
      { speaker: "j", text: "Hola, Álvaro. ¿Revisaste las plantillas que te mandé? Te cuento que acá tenemos una regla simple: la voz de la cooperativa sigue la norma, y las citas de los socios se dejan tal cual. Lo digo porque en tu borrador del reclamo de la señora Gutiérrez corregiste lo que ella dijo." },
      { speaker: "a", text: "Sí, lo vi después. Ella escribió «la dije al cajero que me devolviera el dinero», y yo lo cambié a «le dije». Me parecía raro dejar un laísmo en un documento nuestro, pero tienes razón: es una cita, y si la corrijo estoy poniendo en su boca algo que no dijo." },
      { speaker: "j", text: "Exacto. Ahora, en lo que sí es nuestro, tengo dudas con tu carta de bienvenida. Pusiste «al nuevo socio le recibimos con mucho gusto». Acá nadie diría eso; diríamos «lo recibimos». ¿Es un error?" },
      { speaker: "a", text: "No es un error, es leísmo de persona, y en Madrid es lo más normal. La norma lo admite con masculino singular. Pero entiendo que la carta va a salir también en Chile, así que prefiero «lo recibimos», que vale para todos. Lo que no admitiría nunca es «a la nueva socia le recibimos»." },
      { speaker: "j", text: "Perfecto, entonces usamos lo y la en todas las plantillas, y le solo para el indirecto y para el usted de cortesía, que eso sí es común a los dos países: «le saluda atentamente», «le esperamos en la sucursal»." },
      { speaker: "a", text: "De acuerdo. Ahora me toca a mí. En el guion telefónico de Santiago hay dos cosas que chirrían. Una dice «le informamos de que su crédito está aprobado», que está bien, pero la siguiente dice «estamos seguros que usted quedará conforme»." },
      { speaker: "j", text: "Ay, sí. Seguros de eso, entonces seguros de que. Lo corrijo. ¿Y la otra?" },
      { speaker: "a", text: "«Le recordamos de que el pago vence el día treinta». Ahí sobra el de: le recordamos eso. Lo curioso es que «nos acordamos de que» sí lo lleva. Yo me hice una chuleta con la prueba de eso, porque de oído me equivoco." },
      { speaker: "j", text: "Mándamela y la ponemos en la guía de estilo. Y una última: los ejecutivos de acá dicen «le informamos que», sin de, y la norma lo acepta en América. Lo dejamos en el guion oral, pero en las cartas usamos «de que», que sirve a ambos lados." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué buscan y con qué criterio?",
        exercise: {
          id: "c1-08-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Qué están haciendo Javiera y Álvaro?",
              options: ["Atienden juntos el reclamo de una socia.", "Preparan una campaña publicitaria para la nueva oficina.", "Unifican las plantillas y el guion de las dos oficinas."],
              answer: 2,
              why: "Revisan cartas y guion para que la cooperativa tenga una sola voz.",
            },
            {
              q: "¿Qué criterio general acuerdan?",
              options: ["La voz institucional sigue la norma y las citas de los socios se respetan.", "Cada oficina escribe según su variedad sin coordinarse.", "Todas las citas se corrigen para que el texto sea uniforme."],
              answer: 0,
              why: "Javiera lo enuncia al principio y Álvaro lo acepta con el ejemplo de la señora Gutiérrez.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "c1-08-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Por qué Álvaro acepta cambiar «le recibimos» por «lo recibimos»?",
              options: ["Porque «le recibimos» es un error que la norma rechaza.", "Porque la carta también se enviará en Chile y «lo» sirve para todos.", "Porque Javiera se lo exige como jefa."],
              answer: 1,
              why: "Explica que el leísmo de persona está admitido, pero prefiere la forma común.",
            },
            {
              q: "¿Qué error tiene «le recordamos de que el pago vence»?",
              options: ["Dequeísmo.", "Queísmo.", "Laísmo."],
              answer: 0,
              why: "«Le recordamos eso»: sobra «de».",
            },
            {
              q: "¿Qué deciden sobre «le informamos que»?",
              options: ["Eliminarlo de todos los textos.", "Usarlo solo en las cartas de Madrid.", "Mantenerlo en el guion oral de Santiago y usar «de que» en las cartas."],
              answer: 2,
              why: "Es aceptado en América; en las cartas comunes prefieren la forma general.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cada caso que comentan. Relaciona y consulta la transcripción después.",
        exercise: {
          id: "c1-08-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con el diagnóstico que le dan.",
          pairs: [
            { left: "la dije al cajero que me devolviera el dinero", right: "laísmo que se conserva por ser cita literal" },
            { left: "al nuevo socio le recibimos", right: "leísmo de persona admitido, cambiado por la forma común" },
            { left: "estamos seguros que usted quedará conforme", right: "queísmo que se corrige" },
            { left: "le recordamos de que el pago vence", right: "dequeísmo que se corrige" },
            { left: "le informamos que", right: "uso aceptado en América, conservado en el guion oral" },
          ],
          why: "Cada decisión combina la norma, la variedad y el tipo de texto.",
        },
      },
    ],
  },
  reading: {
    title: "Escribir para dos orillas",
    genre: "Artículo del boletín interno",
    frame: "Artículo de Javiera Fuentes para el boletín interno de la cooperativa, con motivo de la nueva guía de estilo. La entidad, las personas y los casos son ficticios.",
    text: [
      "Cuando decidimos abrir una oficina en Madrid para atender a los socios chilenos que viven en España, pensamos que el mayor desafío sería legal o financiero. Nos equivocamos. Las primeras semanas descubrimos que el problema más visible estaba en algo tan pequeño como un pronombre o una preposición. Una carta enviada desde Santiago decía «estamos seguros que quedará conforme», y una socia de Valencia nos escribió para preguntarnos si en Chile no se enseñaba gramática. Una semana después, una carta redactada en Madrid decía «a la nueva socia la explicamos las condiciones», y fue un socio de Concepción el que se quejó.",
      "Ninguno de los dos casos tenía que ver con la variedad del español de cada país. El queísmo y el laísmo aparecen en el habla de muchas regiones y casi nadie los nota en una conversación. Pero en un texto escrito, y más aún en un texto que firma una institución, llaman la atención y restan credibilidad. Por eso la nueva guía de estilo no pretende que hablemos de otra manera, sino que escribamos de manera que ningún socio, esté donde esté, tropiece con la forma antes de llegar al contenido.",
      "La primera regla de la guía es la prueba de «eso». Antes de escribir un «que», el redactor debe preguntarse qué palabra lo rige y sustituir la subordinada por «eso». Si dice «estamos seguros de eso», escribirá «estamos seguros de que». Si dice «le comunicamos eso», escribirá «le comunicamos que». Parece mecánico, pero funciona mejor que el oído, que nos engaña con frecuencia: muchos de nosotros, al corregir un dequeísmo, hemos acabado creando un queísmo, como quien quita una preposición donde sí hacía falta.",
      "La segunda regla se refiere a los pronombres átonos. Hemos acordado que la voz de la cooperativa use el sistema etimológico, que es el más extendido: «lo» y «la» para el complemento directo, «le» para el indirecto. Así, «al socio lo llamamos», «a la socia la llamamos» y «a los dos les enviamos el contrato». Nuestro compañero Álvaro nos explicó que en Madrid es habitual decir «al socio le llamamos», un leísmo que la norma admite, pero aceptó usar la forma común en las plantillas para que una misma carta sirva en Santiago y en Madrid. Del «le» de cortesía, en cambio, no hubo nada que discutir: «le saluda atentamente» suena igual de natural en las dos ciudades.",
      "La tercera regla es quizá la más delicada. Cuando citamos a un socio en un registro de reclamos, en un acta o en una entrevista para el boletín, sus palabras se reproducen tal como las dijo. Si una socia escribe «la dije al cajero que me devolviera el dinero», esa frase se transcribe entre comillas sin tocarla. Corregirla sería atribuirle algo que no dijo y, además, una pequeña falta de respeto. La norma rige nuestra voz, no la de los demás.",
      "Hay casos que la guía deja abiertos a propósito. Con «avisar» o «informar» caben dos construcciones, y la guía las admite siempre que se usen con coherencia dentro de un mismo texto. Del mismo modo, «le informamos que», frecuente en el habla de nuestros ejecutivos chilenos y aceptado en América, se mantiene en los guiones telefónicos, mientras que en las cartas preferimos «le informamos de que», que no extraña a nadie en ninguna de las dos orillas. Estamos convencidos de que estas reglas, más que limitar, nos ayudarán a que cada socio lea primero lo que le queremos decir y no cómo lo decimos.",
    ],
    glossary: [
      { es: "restar credibilidad", note: "hacer que algo parezca menos fiable" },
      { es: "tropezar con algo", note: "encontrar un obstáculo que interrumpe" },
      { es: "las dos orillas", note: "expresión para referirse a España y América, separadas por el Atlántico" },
    ],
    tasks: [
      {
        id: "c1-08-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el artículo.",
        items: [
          {
            q: "Según la autora, ¿cuál era el origen real de las quejas de los socios?",
            options: ["Diferencias legales entre Chile y España.", "Fenómenos frecuentes al hablar que llaman la atención en un texto institucional.", "Que cada oficina usaba su propia variedad de español."],
            answer: 1,
            why: "El segundo párrafo dice que no tenía que ver con la variedad, sino con usos del habla que en la escritura restan credibilidad.",
          },
          {
            q: "¿Por qué la guía prefiere la prueba de «eso» al oído?",
            options: ["Porque el oído lleva a corregir de más y a crear queísmos.", "Porque los socios lo exigieron.", "Porque así se usa en España."],
            answer: 0,
            why: "Muchos, al corregir un dequeísmo, acaban creando un queísmo.",
          },
          {
            q: "¿Qué hace la guía con las citas de los socios?",
            options: ["Las corrige para que coincidan con la norma.", "Las elimina de los documentos oficiales.", "Las reproduce tal como se dijeron, entre comillas."],
            answer: 2,
            why: "«La norma rige nuestra voz, no la de los demás».",
          },
        ],
      },
      {
        id: "c1-08-lectura-reglas",
        type: "match",
        prompt: "Relaciona cada regla o caso de la guía con su contenido.",
        pairs: [
          { left: "primera regla", right: "sustituir la subordinada por «eso» antes de escribir «que»" },
          { left: "segunda regla", right: "sistema etimológico de pronombres en la voz de la cooperativa" },
          { left: "tercera regla", right: "respetar literalmente las palabras citadas" },
          { left: "casos abiertos", right: "verbos con dos construcciones usados con coherencia" },
        ],
      },
      {
        id: "c1-08-lectura-evaluacion",
        type: "open",
        prompt: "Valora una decisión de la guía.",
        items: [
          {
            prompt: "La guía mantiene «le informamos que» en los guiones telefónicos de Santiago, pero no en las cartas. Explica en 70–90 palabras si te parece una decisión coherente y qué riesgos tiene.",
            model: "Me parece coherente porque distingue entre lo oral y lo escrito. En una llamada, el socio chileno oye una forma normal y aceptada en América; en una carta que puede leerse en España, «de que» no extraña a nadie. El riesgo es que los ejecutivos copien el guion al escribir correos y mezclen las dos formas. Por eso propondría recordar en la guía que los correos siguen la regla de las cartas.",
            checklist: ["Tomo posición y la justifico.", "Distingo entre registro oral y escrito.", "Uso correctamente al menos un «de que» y un «que» sin preposición."],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la autora aplica en su propio texto las reglas que explica.",
      items: [
        { quote: "Si dice «estamos seguros de eso», escribirá «estamos seguros de que».", note: "La prueba de «eso» aplicada a un adjetivo que rige «de»." },
        { quote: "como quien quita una preposición donde sí hacía falta", note: "Describe la ultracorrección: corregir un dequeísmo y crear un queísmo." },
        { quote: "«al socio lo llamamos», «a la socia la llamamos» y «a los dos les enviamos el contrato»", note: "Sistema etimológico: directo con «lo/la», indirecto con «les»." },
        { quote: "Estamos convencidos de que estas reglas", note: "La autora cierra con un «de que» exigido por el adjetivo «convencidos»." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según el contexto, relación de casos y escritura breve para preparar el informe de corrección.",
    exercises: [
      {
        id: "c1-08-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases correctas de una carta institucional.",
        items: [
          {
            words: ["Nos", "alegramos", "de", "que", "haya", "abierto", "su", "cuenta."],
            why: "«Alegrarse de que»: el verbo pronominal rige «de».",
          },
          {
            words: ["A", "la", "socia", "le", "enviamos", "el", "contrato", "ayer."],
            why: "Complemento indirecto femenino: «le».",
          },
          {
            words: ["Le", "recordamos", "que", "el", "pago", "vence", "mañana."],
            why: "«Recordar» no lleva «de»: «le recordamos que».",
          },
        ],
      },
      {
        id: "c1-08-contexto",
        type: "context",
        prompt: "Elige la mejor opción para el texto y la situación indicados.",
        items: [
          {
            context: "Registro de reclamos. El socio dijo por teléfono: «Me aseguraron de que el dinero llegaba el lunes».",
            q: "¿Cómo se registra su declaración?",
            options: ["El socio afirma: «Me aseguraron que el dinero llegaba el lunes».", "El socio afirma: «Me aseguraron de que el dinero llegaba el lunes».", "El socio afirma que le aseguraron de que el dinero llegaba el lunes."],
            answer: 1,
            why: "La cita literal se respeta. Si se resume en voz de la cooperativa, se escribiría «le aseguraron que».",
          },
          {
            context: "Carta de la cooperativa a un socio: hay que decir que se lo ha llamado varias veces sin éxito.",
            q: "¿Qué versión sigue la norma general?",
            options: ["Lo hemos llamado en varias ocasiones sin poder contactarlo.", "Les hemos llamado en varias ocasiones sin poder contactarles.", "La hemos llamado en varias ocasiones sin poder contactarlo."],
            answer: 0,
            why: "«Llamar» por teléfono: complemento directo masculino, «lo».",
          },
          {
            context: "Guion telefónico para Chile: el ejecutivo informa al socio de un cambio de horario.",
            q: "¿Qué frase es aceptable en ese contexto oral?",
            options: ["Le informamos en que la sucursal abrirá a las nueve.", "Le informamos que la sucursal abrirá a las nueve.", "Lo informamos que la sucursal abrirá a las nueve."],
            answer: 1,
            why: "«Informar que» es habitual y aceptado en América; «lo informamos que» mezcla construcciones.",
          },
        ],
      },
      {
        id: "c1-08-parejas",
        type: "match",
        prompt: "Relaciona cada principio de frase con el final que corresponde según la norma.",
        pairs: [
          { left: "Me acuerdo", right: "de que firmé el contrato en enero." },
          { left: "Recuerdo", right: "que firmé el contrato en enero." },
          { left: "Me alegro", right: "de que la oficina abra los sábados." },
          { left: "Me alegra", right: "que la oficina abra los sábados." },
          { left: "Insisto", right: "en que nadie le pedirá su clave." },
        ],
      },
      {
        id: "c1-08-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Redacta en 40–60 palabras la respuesta a un socio que se quejó de un cobro duplicado. Usa al menos «estar seguros de que», «lamentar que» y un pronombre átono correcto.",
            model: "Estimado señor Soto: lamentamos que el cobro se haya duplicado y le pedimos disculpas. Ya hemos corregido el error y le devolveremos el importe en tres días hábiles. Estamos seguros de que no volverá a ocurrir, pero si lo nota de nuevo, llámenos y lo atenderemos de inmediato.",
            checklist: ["Uso «de que» tras «seguros» y «que» sin «de» tras «lamentar».", "Uso «le» para el indirecto y «lo» para el directo.", "Mantengo un registro formal con «usted»."],
          },
          {
            prompt: "Escribe en 40–60 palabras una regla para la guía de estilo que explique a un compañero nuevo cómo evitar el laísmo, con un ejemplo correcto y otro incorrecto.",
            model: "Antes de escribir «la», pregúntate si la persona recibe directamente la acción o si recibe algo. Si recibe algo, es complemento indirecto y va con «le». Correcto: «A la socia le enviamos el contrato». Incorrecto: «A la socia la enviamos el contrato». El contrato es lo enviado; la socia, la destinataria.",
            checklist: ["Doy un criterio claro para distinguir directo e indirecto.", "Incluyo un ejemplo correcto y otro incorrecto.", "La explicación sirve para alguien sin formación gramatical."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta un informe de corrección (240–320 palabras) dirigido al equipo de la cooperativa sobre las plantillas revisadas. Explica los errores más frecuentes de régimen y de pronombres, cómo detectarlos y qué decisiones se han tomado sobre los usos admitidos y las citas literales.",
    context: "El informe se enviará por correo a los ejecutivos de Santiago y de Madrid, que no son especialistas en gramática. Debe ser claro, respetuoso con las variedades de cada país y práctico: incluye ejemplos reales de las plantillas y reglas que puedan aplicar sin consultar un manual.",
    steps: [
      "Reúne cuatro o cinco errores reales de las plantillas y clasifícalos: dequeísmo, queísmo, laísmo, loísmo o leísmo no admitido.",
      "Decide el orden del informe: propósito, errores de régimen, errores de pronombres, usos admitidos y citas literales.",
      "Redacta con ejemplos breves y una prueba práctica para cada tipo de error.",
      "Revisa cada «que» con la prueba de «eso», corrige los pronombres de tus propios ejemplos y comprueba que no criticas ninguna variedad.",
    ],
    useLanguage: [
      "Les informamos de que…",
      "Estamos convencidos de que…",
      "Conviene recordar que…",
      "Insistimos en que…",
      "a la socia le…, al socio lo…",
      "se admite / no se acepta en la lengua cuidada",
    ],
    model: [
      "Estimados compañeros: les escribimos para resumir los resultados de la revisión de las plantillas de cartas y del guion telefónico, que hemos hecho entre las oficinas de Santiago y de Madrid. Estamos convencidos de que unas pocas reglas bastan para que nuestros textos se lean igual de bien en las dos ciudades.",
      "Los errores más frecuentes tienen que ver con el «que». A veces sobra un «de», como en «le comunicamos de que su crédito está aprobado», y otras veces falta, como en «estamos seguros que quedará conforme». Para no dudar, sustituyan la oración por «eso»: si dicen «le comunicamos eso», escriban «que»; si dicen «estamos seguros de eso», escriban «de que». Les pedimos que no corrijan de oído, porque es fácil pasar de un error al contrario.",
      "En cuanto a los pronombres, la voz de la cooperativa usará «lo» y «la» para el complemento directo y «le» para el indirecto: «al socio lo llamamos», «a la socia le enviamos el contrato». Hemos encontrado un laísmo, «a la nueva socia la explicamos las condiciones», que debe corregirse a «le explicamos». El leísmo de persona habitual en Madrid está admitido, pero en las plantillas comunes usaremos «lo». El «le» de cortesía con «usted» se mantiene.",
      "Por último, insistimos en que las palabras de los socios se citan tal como las dijeron, aunque no sigan la norma. La guía regula nuestra voz, no la de quienes nos escriben. Si encuentran ejemplos dudosos, envíennoslos y los incluiremos en la próxima versión de la guía. Quedamos atentos a sus dudas.",
    ],
    checklist: [
      "Cada «que» supera la prueba de «eso».",
      "Los pronombres de mis ejemplos correctos siguen el sistema etimológico.",
      "Distingo entre usos no aceptados y usos admitidos o regionales.",
      "Explico qué hacer con las citas literales.",
      "El tono es respetuoso con las variedades de cada país.",
    ],
    words: [240, 320],
  },
  speaking: {
    intro: "Prepara solo palabras clave. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Presentar la guía al equipo",
        prompt: "En la reunión mensual, presenta durante cuatro minutos las reglas de la guía de estilo a los ejecutivos de las dos oficinas. Explica la prueba de «eso», el sistema de pronombres que usará la cooperativa, qué variantes se admiten y qué se hace con las citas. Pon al menos un ejemplo de cada caso.",
        prep: [
          "Prepara un ejemplo de dequeísmo, uno de queísmo y uno de laísmo con su corrección.",
          "Piensa cómo explicar el leísmo de persona sin que parezca un error de Madrid.",
          "Cierra con una frase con «estamos convencidos de que» o «insistimos en que».",
        ],
        seconds: 240,
        model: "Buenos días a todos. Les quiero contar tres reglas muy sencillas. La primera: antes de escribir un que, pregúntense qué lo rige y cámbienlo por eso. Si dicen estamos seguros de eso, escriban estamos seguros de que. La segunda: en nuestros textos, al socio lo llamamos y a la socia le enviamos el contrato…",
        selfCheck: [
          "Aplico la norma también en mi propia exposición oral.",
          "Explico las variantes sin juzgar a ningún país.",
          "Pongo un ejemplo para cada regla.",
        ],
      },
      {
        title: "Llamada a una socia",
        prompt: "Llama a la señora Gutiérrez, que presentó un reclamo por un reembolso. Pregúntale si recibió la carta, aclara qué se decidió, responde a su duda sobre el plazo y negocia una fecha para que pase por la sucursal. Usa «usted» y los pronombres correctos.",
        prep: [
          "Prepara dos preguntas y una explicación del plazo con «le informamos de que».",
          "Ten a mano «la llamaremos», «le enviaremos», «lo tendrá».",
        ],
        seconds: 150,
        model: "Buenas tardes, señora Gutiérrez, le habla Javiera, de la cooperativa. ¿Recibió nuestra carta? Le informamos de que el reembolso ya está aprobado. ¿Le parece bien pasar por la sucursal el jueves? Si no puede, la llamamos el lunes y buscamos otro día.",
        selfCheck: [
          "Uso «le» de cortesía y «la» como complemento directo.",
          "Hago preguntas y respondo a su duda.",
          "Cierro con un acuerdo concreto.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu informe y tres frases reales (de anuncios, correos o noticias) con un «que» dudoso.",
    cards: [
      {
        move: "Comprueba",
        task: "Lee en voz alta tus tres frases reales y aplica la prueba de «eso» delante de tu profesor.",
        phrases: ["Si digo «… eso», entonces…", "Aquí hace falta «de» porque…"],
      },
      {
        move: "Pregunta",
        task: "Pregunta a tu profesor cómo se usan «lo», «la» y «le» en su variedad y si hay algún verbo con el que duda.",
        phrases: ["¿Tú dirías «lo» o «le» con…?", "¿Se nota la diferencia al hablar?"],
      },
      {
        move: "Distingue",
        task: "Pide a tu profesor que te dicte cinco frases con pronombres y clasifícalas: norma general, uso admitido o uso no aceptado.",
        phrases: ["Esto es un leísmo admitido…", "Esto no se acepta en un texto cuidado porque…"],
      },
      {
        move: "Defiende",
        task: "Defiende la decisión de conservar las citas literales sin corregirlas y pide a tu profesor un contraargumento.",
        phrases: ["Corregirla sería…", "Cambiaría de opinión si…"],
      },
    ],
    bring: "Tu informe de corrección revisado, tus frases reales y, si quieres, la grabación de tu presentación.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué frase sigue la norma?",
        options: ["Somos conscientes que el sistema es lento.", "Somos conscientes de que el sistema es lento.", "Somos conscientes en que el sistema es lento."],
        answer: 1,
        why: "«Conscientes de eso»: el adjetivo rige «de».",
      },
      {
        type: "choice",
        q: "¿Qué uso de «le» admite la norma?",
        options: ["A tu hermano le vimos en la sucursal.", "A tu hermana le vimos en la sucursal.", "El recibo le guardamos en el archivo."],
        answer: 0,
        why: "Leísmo de persona masculino singular: admitido. Femenino y de cosa, no.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué fenómeno contiene?",
        options: ["Laísmo.", "Queísmo.", "Dequeísmo."],
        answer: 2,
        why: "«Opinamos eso»: sobra «de».",
        audio: "Opinamos de que la tasa de interés es demasiado alta.",
        voice: "es-CL-m",
      },
      {
        type: "gap",
        q: "No cabe duda ___ la nueva oficina facilitará los trámites.",
        answers: [["de que"]],
        hint: "La locución «no cabe duda» rige una preposición: aplica la prueba de «eso».",
        why: "«No cabe duda de eso» → «de que».",
      },
      {
        type: "gap",
        q: "A los socios nuevos ___ enviamos una carta de bienvenida.",
        answers: [["les"]],
        hint: "Pronombre de complemento indirecto en plural, sin distinción de género.",
        why: "Los socios reciben la carta: complemento indirecto, «les».",
      },
      {
        type: "error",
        sentence: "A la ejecutiva la explicaron el nuevo procedimiento.",
        answers: ["A la ejecutiva le explicaron el nuevo procedimiento."],
        why: "Laísmo: la ejecutiva es complemento indirecto de «explicar».",
      },
      {
        type: "error",
        sentence: "Nos dimos cuenta que faltaba una firma en el contrato.",
        answers: ["Nos dimos cuenta de que faltaba una firma en el contrato."],
        why: "Queísmo: «darse cuenta de eso».",
      },
      {
        type: "order",
        words: ["Insistimos", "en", "que", "nadie", "le", "pedirá", "su", "clave."],
        why: "«Insistir en que» y «le» como indirecto.",
      },
      {
        type: "choice",
        q: "¿Qué pronombre corresponde en «Ese vecino ___ molestaba a propósito con llamadas» (hablando de una mujer)?",
        options: ["le", "lo", "la"],
        answer: 2,
        why: "Una persona actúa a propósito sobre otra: complemento directo, «la».",
      },
      {
        type: "open",
        prompt: "Explica en 70–90 palabras a un compañero por qué «Le informamos de que la llamaremos» es correcto, aunque le parezca que «la» y «de que» sobran.",
        model: "La frase es correcta por dos razones. Primero, «informar» admite «de que»: «le informamos de eso». En América también se acepta «le informamos que», pero «de que» es la forma general. Segundo, «llamar» por teléfono lleva complemento directo, así que, si la persona es una mujer, se dice «la llamaremos». El «le» del principio es indirecto: es la persona a la que informamos. Cada pronombre cumple una función distinta.",
        checklist: ["Explico el régimen de «informar».", "Explico por qué «llamar» lleva «la».", "Distingo directo e indirecto en la misma frase."],
      },
    ],
  },
  complete: {
    canNow: [
      "Detecto el dequeísmo y el queísmo con la prueba de «eso» y de la pregunta.",
      "Uso con seguridad las parejas «recordar que / acordarse de que» y los verbos con dos construcciones.",
      "Elijo entre lo, la y le según la función y reconozco el leísmo admitido, el no aceptado, el laísmo y el loísmo.",
      "Separo la voz institucional, que sigue la norma, de las citas literales, que respetan cómo habla cada persona.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Parejas que confunden» y escribe un ejemplo propio para cada fila.",
      "Dentro de una semana, revisa cinco correos tuyos o de tu trabajo y aplica la prueba de «eso» a cada «que».",
      "En la próxima clase, pide a tu profesor que te diga qué sistema de pronombres usa y compáralo con el de la guía.",
    ],
  },
  related: [
    { path: "/gramatica/queismo-y-dequeismo-regimen-y-norma", label: "Clase: Queísmo y dequeísmo: régimen y norma" },
    { path: "/gramatica/pronombres-atonos-leismo-laismo-loismo-y", label: "Clase: Pronombres átonos: leísmo, laísmo, loísmo y variedades" },
  ],
};
