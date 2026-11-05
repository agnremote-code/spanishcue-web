import type { Module } from "../../types";

/**
 * C1 · semana 1 · Autoestudio espejo de G167 (concordancia temporal del
 * subjuntivo) y G168 (alternancia de modo según postura). Repaso autónomo con
 * la memoria de fin de curso de una residencia universitaria ficticia de
 * Salamanca. Audio mediante síntesis; sin acreditación regional.
 */
export const c1w01: Module = {
  id: "c1-01",
  level: "c1",
  week: 1,
  kind: "core",
  title: "Entonces y ahora: el modo que delata tu postura",
  subtitle: "Repaso de la concordancia de tiempos en subjuntivo y de la elección de modo según lo que afirmas, dudas o valoras",
  stop: {
    place: "Salamanca",
    country: "España",
  },
  minutes: 135,
  newObjectives: [
    "c1.gram.g167",
    "c1.gram.g168",
    "c1.voc.w01-convivencia-postura",
    "c1.pron.w01-acento-ara-ara",
    "c1.lis.w01-junta-residencia",
    "c1.read.w01-memoria-curso",
    "c1.wri.w01-carta-balance",
    "c1.spk.w01-balance-junta",
    "c1.fun.w01-matizar-postura",
    "c1.disc.w01-antes-ahora",
  ],
  reviewObjectives: ["b2.gram.g165","b2.gram.g166","b2.voc.w20-ciudad-debate","b2.pron.w20-conectores-pausas","b2.lis.w20-debate-radio","b2.read.w20-columna-opinion","b2.wri.w20-carta-lectores","b2.spk.w20-debate-vecinal","b2.fun.w20-exponer-refutar","b2.disc.w20-argumentacion-completa","b2.rev.w20-semanas-16-20"],
  prerequisites: ["b2-20"],
  goal: {
    canDo: "Puedo contar lo que se esperaba en un momento pasado y lo que se valora hoy con el tiempo de subjuntivo adecuado, y mostrar con el modo si afirmo, dudo, transmito o valoro cada dato.",
    steps: [
      "Repasa en la teoría la cuadrícula marco × relación y la tabla de posturas: afirmar, no afirmar, transmitir y valorar.",
      "Practica con frases de una residencia universitaria de Salamanca que hace balance de su curso.",
      "Escucha la reunión de la junta de residentes y lee la memoria que escribe la directora.",
      "Redacta una carta de balance, revísala con la lista de control y preséntala en voz alta.",
    ],
  },
  theory: {
    intro: "En clase trabajaste estas dos decisiones con tu profesor. Aquí las repasas solo, con otra situación: una residencia universitaria de Salamanca cierra el curso y su directora compara lo que esperaba en septiembre con lo que valora en junio. Lee cada parte, tapa los ejemplos y comprueba si sabrías justificar el tiempo y el modo de cada verbo.",
    parts: [
      {
        heading: "Dos preguntas antes de conjugar: ¿desde cuándo hablo y qué va antes?",
        body: [
          "El tiempo del subjuntivo no se elige por intuición ni por cortesía. Sale de cruzar dos datos. Primero, el marco: el verbo principal te sitúa en el presente (espero, me alegra, pídele, le pediré) o en el pasado (esperaba, me alegró, le pedí, me gustaría). Segundo, la relación: lo que va detrás de «que» ocurre a la vez o después de ese verbo, o bien ya había ocurrido antes.",
          "Con esas dos respuestas, solo queda una casilla. Marco presente y relación simultánea o posterior: presente de subjuntivo. Marco presente y relación anterior: pretérito perfecto de subjuntivo. Marco pasado y relación simultánea o posterior: imperfecto de subjuntivo. Marco pasado y relación anterior: pluscuamperfecto de subjuntivo. El imperativo y el futuro funcionan como marco presente; el condicional, casi siempre, como marco pasado.",
          "En el imperfecto y en el pluscuamperfecto las formas en -ra y en -se son equivalentes: «revisaran» o «revisasen», «hubieran firmado» o «hubiesen firmado». En América y en el habla espontánea predomina -ra; las dos son correctas en un texto formal.",
        ],
        table: {
          caption: "La cuadrícula del subjuntivo con el verbo «adaptarse»",
          head: ["Marco del verbo principal", "A la vez o después", "Antes"],
          rows: [
            ["Presente: espero / me alegra / pídeles", "que se adapten", "que se hayan adaptado"],
            ["Pasado: esperaba / me alegró / les pedí", "que se adaptaran (adaptasen)", "que se hubieran (hubiesen) adaptado"],
            ["Condicional: me gustaría / sería útil", "que se adaptaran (adaptasen)", "que se hubieran (hubiesen) adaptado"],
          ],
        },
        examples: [
          { es: "Me alegra que los nuevos residentes se hayan apuntado al coro.", note: "Marco presente; apuntarse ya ocurrió: perfecto de subjuntivo." },
          { es: "En septiembre temíamos que nadie se apuntara al coro.", note: "Marco pasado; apuntarse sería posterior al temor: imperfecto." },
          { es: "Nos sorprendió que el grupo de teatro hubiera ensayado durante las vacaciones.", note: "Marco pasado; los ensayos fueron antes de la sorpresa: pluscuamperfecto." },
        ],
        mistakes: [
          {
            wrong: "En octubre esperábamos que todos hayan entregado la ficha médica.",
            right: "En octubre esperábamos que todos hubieran entregado la ficha médica.",
            why: "Marco pasado y relación anterior: pluscuamperfecto. El perfecto de subjuntivo pertenece al marco presente.",
          },
          {
            wrong: "Me gustaría que el próximo curso haya más actividades.",
            right: "Me gustaría que el próximo curso hubiera más actividades.",
            why: "El condicional funciona como marco pasado aunque hable del futuro: imperfecto de subjuntivo.",
          },
        ],
      },
      {
        heading: "Cambiar de perspectiva sin perder la relación",
        body: [
          "Un balance suele mezclar dos momentos: lo que se pensaba entonces y lo que se piensa ahora. Al pasar de uno a otro cambia el marco, pero la relación entre los hechos se conserva. Si en septiembre «queríamos que los residentes propusieran actividades», en junio diremos «queremos que el año que viene propongan más»: la propuesta sigue siendo posterior al deseo. Si «nos alegró que hubieran organizado la bienvenida», hoy diremos «nos alegra que la hayan organizado».",
          "Los adverbios de tiempo acompañan el cambio: «mañana» pasa a «al día siguiente», «este mes» a «aquel mes», «aquí» puede pasar a «allí». No cambies el tiempo para sonar más formal ni para expresar duda: la duda la pone el verbo principal (dudo, no creo), no el tiempo del subjuntivo.",
          "Hay un matiz frecuente: con marco pasado puedes usar presente de subjuntivo si lo pedido o lo deseado sigue vigente ahora. «Ayer el decano nos pidió que revisemos el reglamento esta semana» es correcto porque la revisión todavía está pendiente. Es muy habitual en América y también se oye en España; con «revisáramos» presentas la petición desde el momento en que se hizo.",
        ],
        examples: [
          { es: "La directora nos pidió en marzo que propusiéramos cambios para el comedor.", note: "Petición vista desde marzo: imperfecto." },
          { es: "La directora nos ha pedido que propongamos cambios antes del viernes.", note: "El perfecto de indicativo es marco presente: presente de subjuntivo." },
          { es: "Nos pidió ayer que entreguemos la encuesta mañana.", note: "Marco pasado, pero la entrega sigue pendiente: presente posible." },
        ],
        mistakes: [
          {
            wrong: "No creía que la norma funcione, pero ahora no creo que la funcionara.",
            right: "No creía que la norma funcionara, pero ahora no creo que haya fallado.",
            why: "Cada momento tiene su marco: «no creía» pide imperfecto; «no creo» pide presente o perfecto.",
          },
        ],
        tip: "Antes de escribir el verbo de después de «que», subraya el verbo principal y pon encima una P (presente) o una PA (pasado). Luego dibuja una flecha: ¿la acción va antes o después? Con eso ya tienes la casilla.",
      },
      {
        heading: "El modo como postura: afirmo, no afirmo, transmito o valoro",
        body: [
          "En C1 el modo no depende solo de la palabra que va delante, sino de lo que hace el hablante con el contenido. Si lo afirma o lo presenta como información, usa indicativo. Si no se compromete con él (lo niega, lo pone en duda, lo ve solo posible), usa subjuntivo. Y si lo da por sabido pero no informa de él, sino que reacciona ante él, también usa subjuntivo: el subjuntivo de valoración no significa que el hecho sea falso.",
          "La negación no siempre arrastra el subjuntivo. Con verbos como «saber», «darse cuenta» o «olvidar», el contenido suele estar presupuesto: «no sabía que la sala de estudio abría los domingos» da por cierta la apertura; lo que niegas es tu conocimiento. En las preguntas con verbos de opinión, el indicativo busca confirmar o sugiere tu propia opinión («¿no crees que es tarde?»), mientras que el subjuntivo deja ver duda («¿crees que sea buena idea?»). Las dos opciones son correctas.",
          "Algunos verbos cambian de significado con el modo. «Decir que» + indicativo informa; + subjuntivo ordena. «Sentir que» + indicativo es percibir; + subjuntivo, lamentar. «Entender» o «comprender que» + indicativo es constatar; + subjuntivo, encontrar comprensible. «Temerse que» + indicativo anuncia una sospecha con pesar; «temer que» + subjuntivo expresa miedo.",
        ],
        table: {
          caption: "Mismo verbo, dos modos, dos sentidos",
          head: ["Verbo", "Con indicativo", "Con subjuntivo"],
          rows: [
            ["decir", "Me dice que la lavandería está rota. (informa)", "Me dice que avise al conserje. (ordena)"],
            ["sentir", "Siento que el ambiente ha mejorado. (percibo)", "Siento que el ambiente haya empeorado. (lamento)"],
            ["entender", "Entiendo que la cuota sube en enero. (me consta)", "Entiendo que te moleste la subida. (me parece comprensible)"],
            ["temer(se)", "Me temo que no quedan plazas. (sospecho, con pesar)", "Temo que no queden plazas. (tengo miedo)"],
          ],
        },
        mistakes: [
          {
            wrong: "Es un hecho que la cocina cerró, así que me indigna que la cerraron sin avisar.",
            right: "Es un hecho que la cocina cerró, pero me indigna que la cerraran sin avisar.",
            why: "Un hecho valorado con un verbo de emoción va en subjuntivo; «es un hecho, luego indicativo» es una trampa frecuente.",
          },
          {
            wrong: "No sabía que el reglamento fuera público, así que no lo leí.",
            right: "No sabía que el reglamento era público, así que no lo leí.",
            why: "El reglamento era público de verdad: «saber» lo presupone. El subjuntivo también se oye, pero en un texto cuidado el indicativo deja claro que el hecho es cierto.",
          },
        ],
      },
      {
        heading: "Rumores, escala de certeza y fórmulas para matizar",
        body: [
          "Cuando transmites lo que dicen otros, el indicativo reproduce su afirmación sin que tú la hagas tuya: «dicen que van a cerrar la cocina». Si quieres tomar distancia, valora la afirmación ajena y niega la conclusión: «que lo digan no significa que sea cierto». Fórmulas como «que yo sepa» (siempre en subjuntivo) o «no es que… es que…» permiten corregir con tacto.",
          "Los marcadores de posibilidad tienen su propia lógica. «Seguramente», «a lo mejor», «igual» y «lo mismo» van con indicativo. «Puede que», «es posible que» y «no es seguro que» exigen subjuntivo. «Quizá(s)», «tal vez» y «probablemente» admiten los dos modos: con subjuntivo el hablante marca más distancia.",
        ],
        table: {
          caption: "Cuánto me comprometo con «la cocina cierra»",
          head: ["Postura", "Fórmula", "Modo"],
          rows: [
            ["Afirmo con seguridad", "Es evidente que la cocina cierra.", "indicativo"],
            ["Veo bastante probable", "Seguramente la cocina cierra.", "indicativo"],
            ["Veo posible y me distancio", "Tal vez la cocina cierre.", "subjuntivo (o indicativo)"],
            ["Solo veo posible", "Puede que la cocina cierre.", "subjuntivo"],
            ["Transmito lo que dicen", "Dicen que la cocina cierra.", "indicativo"],
            ["Desconfío del rumor", "Que lo digan no significa que cierre.", "subjuntivo"],
            ["Niego con tacto", "Que yo sepa, nadie ha decidido nada.", "subjuntivo fijo en «sepa»"],
          ],
        },
        examples: [
          { es: "A lo mejor el comedor abre también en agosto.", note: "«A lo mejor» siempre con indicativo." },
          { es: "No es que la norma sea injusta, es que nadie la explicó.", note: "Niegas una interpretación y propones la causa real." },
        ],
        tip: "Cuando dudes, pregúntate: después de mi frase, ¿sigo dando el contenido por cierto? Si la respuesta es sí y lo estoy informando, indicativo; si lo dejo en el aire o reacciono ante él, subjuntivo.",
      },
    ],
  },
  grammar: {
    intro: "Primero decide el marco y la relación; después, la postura. Justifica cada respuesta antes de mirar la explicación.",
    exercises: [
      {
        id: "c1-01-gramatica-cuadricula",
        type: "context",
        prompt: "Lee la situación y elige la frase cuyo tiempo de subjuntivo corresponde al marco y a la relación.",
        items: [
          {
            context: "Junio. La directora recuerda la reunión de bienvenida de septiembre, cuando todavía no conocía a los residentes.",
            q: "¿Qué frase escribe en la memoria?",
            options: [
              "En septiembre deseábamos que los residentes se sientan en casa desde el primer día.",
              "En septiembre deseábamos que los residentes se sintieran en casa desde el primer día.",
              "En septiembre deseábamos que los residentes se hayan sentido en casa desde el primer día.",
            ],
            answer: 1,
            why: "Marco pasado (deseábamos) y relación posterior: imperfecto de subjuntivo.",
          },
          {
            context: "El tesorero acaba de recibir los recibos de la excursión a la Peña de Francia, que se hizo el sábado.",
            q: "¿Qué dice en la reunión de hoy?",
            options: [
              "Me alegra que todos hayan pagado la excursión a tiempo.",
              "Me alegra que todos hubieran pagado la excursión a tiempo.",
              "Me alegra que todos paguen la excursión a tiempo.",
            ],
            answer: 0,
            why: "Marco presente y relación anterior (el pago ya se hizo): perfecto de subjuntivo.",
          },
          {
            context: "Un residente cuenta qué sintió al llegar a la residencia por primera vez.",
            q: "¿Qué frase mantiene la relación entre los hechos?",
            options: [
              "Me extrañó que nadie me haya enseñado la biblioteca la primera semana.",
              "Me extraña que nadie me enseñara la biblioteca la próxima semana.",
              "Me extrañó que nadie me hubiera enseñado la biblioteca antes de las clases.",
            ],
            answer: 2,
            why: "Marco pasado (me extrañó) y algo que debía haber ocurrido antes: pluscuamperfecto.",
          },
          {
            context: "Propuesta para el curso próximo, escrita con cortesía.",
            q: "¿Qué frase es correcta?",
            options: [
              "Sería conveniente que el comedor abra una hora antes en época de exámenes.",
              "Sería conveniente que el comedor abriera una hora antes en época de exámenes.",
              "Sería conveniente que el comedor abrirá una hora antes en época de exámenes.",
            ],
            answer: 1,
            why: "El condicional funciona como marco pasado: imperfecto de subjuntivo.",
          },
        ],
      },
      {
        id: "c1-01-gramatica-tiempos",
        type: "gap",
        prompt: "Completa con el tiempo de subjuntivo adecuado del verbo entre paréntesis. Si hay dos formas posibles (-ra / -se), cualquiera vale.",
        items: [
          { q: "Al principio de curso nos preocupaba que los de primer año no ___ (integrarse) en las actividades.", answers: [["se integraran", "se integrasen"]], why: "Marco pasado y relación posterior: imperfecto." },
          { q: "Hoy nos satisface que muchos de ellos ___ (organizar) ya el torneo de ajedrez.", answers: [["hayan organizado"]], why: "Marco presente y relación anterior: perfecto." },
          { q: "La junta lamentó que la reforma de las duchas no ___ (terminar) antes de la llegada de los residentes.", answers: [["hubiera terminado", "hubiese terminado"]], why: "Marco pasado y relación anterior: pluscuamperfecto." },
          { q: "Pídeles a los representantes que ___ (enviar) el acta antes del lunes.", answers: [["envíen"]], why: "El imperativo es marco presente: presente de subjuntivo." },
          { q: "Nos habría gustado que el ayuntamiento ___ (contestar) a nuestra carta antes de las fiestas.", answers: [["hubiera contestado", "hubiese contestado"]], why: "Condicional compuesto y relación anterior: pluscuamperfecto." },
          { q: "Le pediremos a la nueva dirección que ___ (mantener) el horario de la biblioteca.", answers: [["mantenga"]], why: "El futuro es marco presente: presente de subjuntivo." },
        ],
      },
      {
        id: "c1-01-gramatica-postura",
        type: "classify",
        prompt: "Clasifica cada frase según la postura del hablante respecto al contenido subrayado por el modo.",
        categories: ["Afirma o informa: indicativo", "No se compromete: subjuntivo de duda o negación", "Lo da por sabido y lo valora: subjuntivo de valoración"],
        items: [
          { text: "Me consta que la lavandería ya funciona.", cat: 0, why: "«Me consta» presenta el dato como verdadero." },
          { text: "No está claro que la lavandería funcione el domingo.", cat: 1, why: "El hablante deja el dato en el aire." },
          { text: "Me parece fatal que la lavandería cobre por secar.", cat: 2, why: "El cobro es un hecho; el hablante reacciona ante él." },
          { text: "Seguramente la lavandería abre a las ocho.", cat: 0, why: "«Seguramente» va con indicativo aunque haya probabilidad." },
          { text: "Que yo sepa, nadie ha pedido que la lavandería cierre antes.", cat: 1, why: "«Que yo sepa» limita el compromiso del hablante; lo pedido no se afirma." },
          { text: "El hecho de que la lavandería esté en el sótano complica las cosas.", cat: 2, why: "«El hecho de que» presenta un dato conocido para valorarlo." },
          { text: "Dicen que la lavandería va a cerrar en agosto.", cat: 0, why: "Transmite una afirmación ajena tal como se hace." },
        ],
      },
      {
        id: "c1-01-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de tiempo o de modo. Corrígela cambiando solo lo necesario.",
        items: [
          {
            sentence: "Nos alegró mucho que los residentes hayan donado libros a la biblioteca de barrio.",
            answers: ["Nos alegró mucho que los residentes hubieran donado libros a la biblioteca de barrio.", "Nos alegró mucho que los residentes hubiesen donado libros a la biblioteca de barrio.", "Nos alegró mucho que los residentes donaran libros a la biblioteca de barrio.", "Nos alegró mucho que los residentes donasen libros a la biblioteca de barrio."],
            why: "Marco pasado: pluscuamperfecto si la donación fue anterior a la alegría, imperfecto si fue simultánea.",
          },
          {
            sentence: "A lo mejor la junta proponga un horario nuevo para la sala de música.",
            answers: ["A lo mejor la junta propone un horario nuevo para la sala de música."],
            why: "«A lo mejor» exige indicativo aunque exprese posibilidad.",
          },
          {
            sentence: "Siento que no hayas podido venir; noto que el ambiente esté más tenso que antes.",
            answers: ["Siento que no hayas podido venir; noto que el ambiente está más tenso que antes."],
            why: "«Notar que» es percibir: indicativo. «Siento que» + subjuntivo sí es lamentar.",
          },
          {
            sentence: "El conserje nos dijo que bajemos la música, porque los vecinos se habían quejado.",
            answers: ["El conserje nos dijo que bajáramos la música, porque los vecinos se habían quejado.", "El conserje nos dijo que bajásemos la música, porque los vecinos se habían quejado."],
            why: "Es una orden contada desde el pasado y ya cumplida: imperfecto de subjuntivo.",
          },
        ],
      },
      {
        id: "c1-01-gramatica-reformular",
        type: "open",
        prompt: "Reformula cada frase según la instrucción. Hay más de una respuesta posible: compara la tuya con el modelo y con la lista.",
        items: [
          {
            prompt: "Frase de septiembre: «Queremos que cada planta elija un representante y nos alegra que ya haya voluntarios». Cuéntala en junio, desde el pasado, en una o dos frases.",
            model: "En septiembre queríamos que cada planta eligiera un representante, y nos alegró que ya hubiera voluntarios desde el primer día.",
            checklist: [
              "Paso «queremos que elija» a «queríamos que eligiera» (relación posterior).",
              "Paso «nos alegra que haya» a pasado conservando la relación entre los hechos.",
            ],
          },
          {
            prompt: "Un residente afirma: «La residencia va a subir la cuota un veinte por ciento». Responde mostrando que el rumor no te convence, sin acusarlo de mentir. Usa al menos dos recursos de distancia.",
            model: "Que yo sepa, la dirección no ha anunciado ninguna subida. Que lo diga alguien en el pasillo no significa que sea verdad; puede que haya un ajuste, pero no creo que llegue al veinte por ciento.",
            checklist: [
              "Uso «que yo sepa» o «que lo digan no significa que» con subjuntivo.",
              "Combino al menos un marcador de posibilidad con el modo que exige.",
              "El tono corrige sin acusar.",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de la convivencia en una residencia y para graduar tu postura ante lo que se dice.",
    groups: [
      {
        title: "Convivencia y normas",
        items: [
          { es: "el reglamento interno", note: "conjunto de normas que rige la vida de una residencia o de una entidad" },
          { es: "las zonas comunes", note: "espacios que comparten todos: cocina, sala de estudio, lavandería" },
          { es: "el horario de silencio", note: "franja en la que se pide no hacer ruido" },
          { es: "la junta de residentes", note: "grupo de representantes elegidos por los residentes" },
          { es: "presentar una queja formal", note: "reclamar por escrito y por el cauce previsto" },
          { es: "consensuar una medida", note: "decidirla con el acuerdo de las partes" },
          { es: "ceder en algo", note: "renunciar a parte de lo que uno quería para llegar a un acuerdo" },
          { es: "la memoria del curso", note: "documento que resume lo hecho y lo valorado durante un periodo" },
        ],
      },
      {
        title: "Grados de compromiso",
        items: [
          { es: "dar por hecho", note: "considerar algo seguro sin comprobarlo" },
          { es: "poner en duda", note: "manifestar que algo puede no ser cierto" },
          { es: "sostener que", note: "afirmar algo y mantenerlo frente a objeciones" },
          { es: "desmentir un rumor", note: "declarar públicamente que no es cierto" },
          { es: "a ciencia cierta", note: "con total seguridad, con pruebas" },
          { es: "que yo sepa", note: "según la información que tengo, que puede ser incompleta" },
          { es: "correr la voz", note: "difundirse de boca en boca una noticia o un rumor" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-01-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "consensuar una medida", right: "decidirla con el acuerdo de las partes" },
          { left: "ceder en algo", right: "renunciar a parte de lo que uno quería para llegar a un acuerdo" },
          { left: "dar por hecho", right: "considerar algo seguro sin comprobarlo" },
          { left: "desmentir un rumor", right: "declarar públicamente que no es cierto" },
          { left: "a ciencia cierta", right: "con total seguridad, con pruebas" },
          { left: "correr la voz", right: "difundirse de boca en boca una noticia o un rumor" },
          { left: "las zonas comunes", right: "espacios que comparten todos: cocina, sala de estudio, lavandería" },
        ],
      },
      {
        id: "c1-01-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del banco. Atención al modo del verbo que sigue.",
        bank: ["dio por hecho", "corrió la voz", "pone en duda", "queja formal", "horario de silencio"],
        items: [
          { q: "En noviembre ___ de que iban a cerrar la cocina, pero nadie lo había decidido.", answers: [["corrió la voz"]] },
          { q: "Nadie ___ que la sala de estudio sea necesaria; la discusión es sobre el horario.", answers: [["pone en duda"]] },
          { q: "Tomás ___ que la subida estaba aprobada y escribió un mensaje furioso al grupo.", answers: [["dio por hecho"]] },
          { q: "Tres vecinos del edificio de enfrente presentaron una ___ por el ruido de la terraza.", answers: [["queja formal"]] },
          { q: "La junta propuso adelantar el ___ a las once durante los exámenes.", answers: [["horario de silencio"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Formas en -ara y en -ará: llanas, agudas y esdrújulas",
    explanation: [
      "En un balance hablado mezclas a menudo el imperfecto de subjuntivo y el futuro: «esperábamos que se aprobara» y «la junta lo aprobará». Por escrito los separa la tilde; en voz alta, solo la posición del acento. El imperfecto de subjuntivo es llano (a-pro-BA-ra, or-ga-ni-ZA-ra) y el futuro es agudo (a-pro-ba-RÁ, or-ga-ni-za-RÁ). La forma de nosotros del imperfecto es esdrújula: a-pro-BÁ-ra-mos.",
      "Si desplazas el acento, cambias el tiempo y, con él, el marco de tu frase. Practica sobre todo las parejas en las que una pausa breve después del verbo ayuda a que el oyente perciba la sílaba fuerte.",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para percibir el contraste y compara tu grabación con una persona.",
    ],
    table: {
      caption: "Mismo verbo, distinto acento",
      head: ["Imperfecto de subjuntivo (llana)", "Futuro (aguda)", "Imperfecto, nosotros (esdrújula)"],
      rows: [
        ["aprobara", "aprobará", "aprobáramos"],
        ["organizara", "organizará", "organizáramos"],
        ["cambiara", "cambiará", "cambiáramos"],
        ["esperara", "esperará", "esperáramos"],
      ],
    },
    perceive: {
      id: "c1-01-percepcion",
      type: "listen",
      prompt: "Escucha cada frase sin leer las opciones y decide qué forma oyes por la posición del acento.",
      items: [
        {
          q: "¿Qué forma de «aprobar» oyes?",
          options: ["aprobara: llana, imperfecto de subjuntivo", "aprobará: aguda, futuro"],
          answer: 0,
          why: "Se oye a-pro-BA-ra: el acento cae en la penúltima sílaba.",
          audio: "Nadie esperaba que la junta aprobara el horario nuevo.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué forma de «organizar» oyes?",
          options: ["organizara: llana, imperfecto de subjuntivo", "organizará: aguda, futuro"],
          answer: 1,
          why: "Se oye or-ga-ni-za-RÁ: el acento cae al final.",
          audio: "La residencia organizará una cena de despedida en junio.",
          voice: "es-MX-m",
        },
        {
          q: "¿Qué combinación de formas oyes?",
          options: ["dos formas agudas en -rá", "una esdrújula en -áramos y una aguda en -rá", "dos formas llanas en -ra"],
          answer: 1,
          why: "Primero cam-BIÁ-ra-mos (esdrújula) y después cam-bia-RÁ (aguda).",
          audio: "Querían que cambiáramos el reglamento, y la dirección lo cambiará.",
          voice: "es-AR-f",
        },
        {
          q: "¿Qué forma de «esperar» oyes al final?",
          options: ["esperará", "esperara"],
          answer: 1,
          why: "es-pe-RA-ra: llana. Es imperfecto de subjuntivo tras «nos pidió que».",
          audio: "El conserje nos pidió que lo esperara en la entrada.",
          voice: "es-ES-m",
        },
      ],
    },
    produce: [
      { text: "En septiembre temíamos que nadie se apuntara; en junio el coro actuará en la catedral.", tip: "Contrasta a-pun-TA-ra (llana) con ac-tua-RÁ (aguda).", voice: "es-ES-f" },
      { text: "Nos pidieron que organizáramos la bienvenida, y el año que viene la organizará otro grupo.", tip: "Marca la esdrújula: or-ga-ni-ZÁ-ra-mos.", voice: "es-MX-m" },
      { text: "Que lo digan no significa que sea verdad.", tip: "Haz una pausa breve después de «digan» y sube el tono en «verdad».", voice: "es-ES-m" },
      { text: "No es que la norma sea injusta, es que nadie la explicó.", tip: "Acentúa con la voz el contraste entre «no es que» y «es que».", voice: "es-AR-f" },
    ],
    spelling: "Recuerda: la tilde solo aparece en el futuro (aprobará) y en la forma esdrújula (aprobáramos). «Aprobara» nunca lleva tilde.",
  },
  listening: {
    title: "La última junta del curso",
    context: "Final de curso en una residencia universitaria de Salamanca. La directora, Beatriz, el representante de los residentes, Tomás, que es argentino, y la responsable de actividades, Daniela, que es mexicana, revisan qué esperaban en septiembre y qué valoran ahora, y comentan un rumor. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "b", name: "Beatriz", voice: "es-ES-f", role: "Directora de la residencia" },
      { id: "t", name: "Tomás", voice: "es-AR-m", role: "Representante de los residentes" },
      { id: "d", name: "Daniela", voice: "es-MX-f", role: "Responsable de actividades" },
    ],
    script: [
      { speaker: "b", text: "Bueno, empezamos. Quiero que esta última junta nos sirva para cerrar la memoria. Os recuerdo cómo empezamos: en septiembre teníamos miedo de que el nuevo horario de silencio provocara una rebelión, y la verdad es que me sorprendió que casi nadie protestara." },
      { speaker: "t", text: "Bueno, protestar, protestaron, pero por WhatsApp. Lo que pasó es que al principio muchos no sabían que el horario era provisional. Si alguien les hubiera explicado que se revisaba en enero, se habrían ahorrado tres semanas de mensajes enojados." },
      { speaker: "d", text: "Eso es cierto. A mí me pidieron en octubre que organizara las actividades de bienvenida, y yo esperaba que vinieran unos veinte. Vinieron más de sesenta. Me encanta que los de primero se hayan quedado en el coro y en el club de cine hasta hoy." },
      { speaker: "b", text: "Pues eso tiene que aparecer en la memoria. Ahora, Tomás, ¿qué es eso que corre por los pasillos de que vamos a cerrar la cocina de la tercera planta?" },
      { speaker: "t", text: "Dicen que la cierran en agosto por la reforma. Yo no digo que sea verdad, ¿eh? Pero varios lo dan por hecho y ya están buscando piso." },
      { speaker: "b", text: "Pues que lo digan no significa que sea cierto. Que yo sepa, la reforma es de las duchas, no de la cocina. Me temo que alguien leyó mal el plan de obras. Siento que se haya creado esa alarma." },
      { speaker: "d", text: "¿No crees que convendría desmentirlo por escrito? Yo entiendo que la gente se preocupe: en junio todo el mundo está nervioso por los exámenes." },
      { speaker: "b", text: "Sí, lo haremos. Tomás, te pido que lo comentes en el grupo de representantes hoy mismo, y yo mandaré una nota mañana. Y para el curso que viene, me gustaría que la junta revisara el reglamento antes de que lleguen los nuevos, no después." },
      { speaker: "t", text: "Me parece bien. Solo una cosa: no es que la norma de silencio estuviera mal; es que nadie entendió por qué existía. Quizás este año baste con explicarla mejor." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la reunión completa sin abrir la transcripción. ¿De qué tratan y qué deciden en general?",
        exercise: {
          id: "c1-01-escucha-gist",
          type: "choice",
          prompt: "Reconstruye el tema y la decisión principal.",
          items: [
            {
              q: "¿Cuál es el propósito de la reunión?",
              options: [
                "Elegir un nuevo representante de los residentes.",
                "Hacer balance del curso para la memoria y aclarar un rumor.",
                "Aprobar una subida de la cuota mensual.",
              ],
              answer: 1,
              why: "Beatriz quiere cerrar la memoria y pregunta por el rumor de la cocina.",
            },
            {
              q: "¿Qué deciden hacer con el rumor?",
              options: [
                "Ignorarlo hasta que termine el curso.",
                "Confirmarlo y ayudar a buscar piso a los afectados.",
                "Desmentirlo por escrito y a través de los representantes.",
              ],
              answer: 2,
              why: "Tomás lo comentará en el grupo y Beatriz mandará una nota.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y fíjate en lo que cada persona daba por cierto y en lo que esperaba.",
        exercise: {
          id: "c1-01-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "Según Tomás, ¿por qué hubo protestas por el horario de silencio?",
              options: [
                "Porque muchos no sabían que el horario era provisional.",
                "Porque el horario empezaba a las nueve de la noche.",
                "Porque la dirección no había consultado a la junta.",
              ],
              answer: 0,
              why: "«No sabían que el horario era provisional»: hecho presupuesto con indicativo.",
            },
            {
              q: "¿Qué le sorprendió a Daniela de las actividades de bienvenida?",
              options: [
                "Que nadie se quedara en el club de cine.",
                "Que vinieran muchas más personas de las que esperaba.",
                "Que se las encargaran en septiembre.",
              ],
              answer: 1,
              why: "Esperaba unos veinte y vinieron más de sesenta.",
            },
            {
              q: "¿Qué cree Beatriz que pasó con el plan de obras?",
              options: [
                "Que la reforma de la cocina se había adelantado.",
                "Que la dirección había olvidado publicarlo.",
                "Que alguien lo leyó mal y confundió las duchas con la cocina.",
              ],
              answer: 2,
              why: "«Me temo que alguien leyó mal el plan de obras»: sospecha con indicativo.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en qué hace cada hablante con el contenido. Relaciona y consulta la transcripción solo después.",
        exercise: {
          id: "c1-01-escucha-notice",
          type: "match",
          prompt: "Relaciona cada frase de la reunión con la postura o la relación temporal que expresa.",
          pairs: [
            { left: "me sorprendió que casi nadie protestara", right: "hecho pasado valorado con marco pasado" },
            { left: "me encanta que se hayan quedado en el coro", right: "hecho anterior valorado desde hoy" },
            { left: "dicen que la cierran en agosto", right: "transmite un rumor sin hacerlo suyo" },
            { left: "que lo digan no significa que sea cierto", right: "toma distancia del rumor" },
            { left: "me temo que alguien leyó mal el plan", right: "sospecha presentada con pesar" },
            { left: "me gustaría que la junta revisara el reglamento", right: "deseo con condicional como marco pasado" },
          ],
          why: "El modo y el tiempo dependen de la postura (afirmar, transmitir, dudar, valorar) y del marco del verbo principal.",
        },
      },
    ],
  },
  reading: {
    title: "Memoria del curso: lo que temíamos y lo que celebramos",
    genre: "Memoria institucional de fin de curso",
    frame: "Introducción de Beatriz Ortega, directora de la Residencia Los Tilos de Salamanca, a la memoria del curso. La residencia, las personas y los datos son ficticios.",
    text: [
      "Cuando en septiembre abrimos las puertas de Los Tilos a ciento veinte estudiantes de once países, el equipo tenía más preguntas que certezas. Temíamos que el nuevo horario de silencio, aprobado en julio sin la participación de los residentes, generara un conflicto desde la primera semana. Nos preocupaba también que los estudiantes de primer año, la mitad de ellos lejos de su familia por primera vez, no encontraran su sitio en una casa donde los veteranos ya tenían sus costumbres. Y, sinceramente, dudábamos que las actividades de los jueves consiguieran sacar a nadie de su habitación en época de exámenes.",
      "Diez meses después, conviene contar las cosas con orden. El horario de silencio sí generó protestas, aunque no las que esperábamos. Muchos residentes no sabían que la norma era provisional y que la junta la revisaría en enero; si alguien se lo hubiera explicado, nos habríamos ahorrado bastantes malentendidos. No es que la norma fuera injusta, es que la presentamos mal. En enero, cuando la junta propuso adelantar el silencio a las once solo durante los exámenes, nadie votó en contra. Me alegra que la solución haya salido de los propios residentes y no de una circular de dirección.",
      "Sobre la integración de los nuevos, los datos nos dan una alegría. Esperábamos que unas veinte personas se acercaran a la bienvenida y llegaron sesenta y tres. Que el coro haya pasado de seis a veintidós voces, o que el club de cine haya programado treinta y una sesiones, no lo había previsto nadie. Celebro especialmente que fueran los de primero quienes propusieran el ciclo de cine de sus países, porque es la mejor prueba de que se sienten en casa.",
      "Tampoco todo ha ido bien, y esta memoria no estaría completa si lo ocultara. La lavandería ha funcionado de manera irregular durante todo el invierno, y entiendo que haya residentes que se quejen con razón. Siento que la reparación haya tardado tanto; me consta que la empresa ya ha sustituido las dos máquinas averiadas, pero comprendo que eso no compense los meses de colas.",
      "En las últimas semanas ha corrido la voz de que la cocina de la tercera planta cerrará en agosto. Quiero ser clara: que yo sepa, ningún órgano de la residencia ha tomado esa decisión. La reforma prevista afecta a las duchas, no a la cocina, y me temo que alguien interpretó mal el plan de obras que colgamos en el tablón. Que un rumor se repita en todos los pasillos no significa que sea verdad, y pido a quien tenga dudas que pregunte directamente en dirección antes de dar nada por hecho.",
      "De cara al curso próximo, me gustaría que la junta revisara el reglamento interno antes de que lleguen los nuevos residentes, y no cuando ya estén instalados. También sería deseable que cada planta eligiera a su representante en la primera quincena. Puede que no todo salga como esperamos, pero si algo hemos aprendido este año es que las normas que se explican se aceptan mucho mejor que las que se imponen.",
    ],
    glossary: [
      { es: "circular", note: "escrito que una dirección envía a todas las personas de una institución" },
      { es: "tablón", note: "panel donde se cuelgan anuncios y avisos" },
      { es: "órgano", note: "grupo o cargo con capacidad de decisión dentro de una entidad" },
    ],
    tasks: [
      {
        id: "c1-01-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la memoria.",
        items: [
          {
            q: "¿Qué reconoce la directora sobre el horario de silencio?",
            options: [
              "Que la norma era injusta y hubo que eliminarla.",
              "Que el problema estuvo en cómo se presentó la norma, no en la norma misma.",
              "Que nadie protestó durante todo el curso.",
            ],
            answer: 1,
            why: "«No es que la norma fuera injusta, es que la presentamos mal.»",
          },
          {
            q: "¿Qué postura adopta la directora ante el rumor de la cocina?",
            options: [
              "Lo confirma con cautela.",
              "Lo transmite sin opinar.",
              "Lo niega con lo que sabe y pide que se pregunte en dirección.",
            ],
            answer: 2,
            why: "Usa «que yo sepa» y explica que la reforma afecta a las duchas.",
          },
          {
            q: "¿Qué dato presenta la directora como seguro sobre la lavandería?",
            options: [
              "Que la empresa ya ha cambiado las dos máquinas averiadas.",
              "Que las colas han desaparecido por completo.",
              "Que los residentes exageran sus quejas.",
            ],
            answer: 0,
            why: "«Me consta que la empresa ya ha sustituido…»: indicativo de constatación.",
          },
        ],
      },
      {
        id: "c1-01-lectura-postura",
        type: "match",
        prompt: "Relaciona cada frase de la memoria con lo que hace la autora.",
        pairs: [
          { left: "dudábamos que las actividades consiguieran sacar a nadie de su habitación", right: "recuerda una duda desde el marco pasado" },
          { left: "entiendo que haya residentes que se quejen con razón", right: "encuentra comprensible una reacción" },
          { left: "me consta que la empresa ya ha sustituido las dos máquinas", right: "afirma un dato que ha comprobado" },
          { left: "puede que no todo salga como esperamos", right: "admite una posibilidad sin comprometerse" },
        ],
      },
      {
        id: "c1-01-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa una decisión de estilo de la memoria.",
        items: [
          {
            prompt: "La directora escribe «siento que la reparación haya tardado tanto» y, en la misma línea, «me consta que la empresa ya ha sustituido las máquinas». Explica en 70–90 palabras por qué cambia de modo y qué efecto tiene esa combinación en los residentes que leen la memoria.",
            model: "La primera frase lamenta un hecho conocido: el retraso existió, pero la directora no informa de él, reacciona; por eso usa subjuntivo. La segunda afirma un dato comprobado y lo presenta como información nueva, con indicativo. La combinación funciona porque reconoce el malestar sin justificarse y, a la vez, da una noticia concreta que los residentes pueden verificar. Si hubiera usado solo frases de valoración, la memoria sonaría a disculpa vacía.",
            checklist: [
              "Distingo valoración de un hecho (subjuntivo) y constatación (indicativo).",
              "Explico el efecto en los lectores, no solo la regla.",
              "Uso al menos una frase con marco pasado y concordancia correcta.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la autora cambia de marco temporal y de postura dentro del mismo texto.",
      items: [
        { quote: "Temíamos que el nuevo horario de silencio, aprobado en julio sin la participación de los residentes, generara un conflicto desde la primera semana.", note: "Marco pasado (temíamos) y relación posterior: imperfecto de subjuntivo." },
        { quote: "Muchos residentes no sabían que la norma era provisional", note: "La negación de «saber» mantiene el indicativo: el hecho es cierto." },
        { quote: "Me alegra que la solución haya salido de los propios residentes", note: "Marco presente y hecho anterior valorado: perfecto de subjuntivo." },
        { quote: "Que un rumor se repita en todos los pasillos no significa que sea verdad", note: "Distancia ante el rumor: la oración con «que» se valora y la conclusión se niega." },
        { quote: "me gustaría que la junta revisara el reglamento interno antes de que lleguen los nuevos residentes", note: "El condicional es marco pasado; «antes de que» con un futuro real admite el presente." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según la intención y escritura guiada. Al final escribirás frases con dos momentos de perspectiva.",
    exercises: [
      {
        id: "c1-01-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases de la memoria del curso.",
        items: [
          {
            words: ["Nos", "sorprendió", "que", "el", "club", "de", "cine", "hubiera", "programado", "tantas", "sesiones."],
            why: "Marco pasado y relación anterior: pluscuamperfecto.",
          },
          {
            words: ["Que", "lo", "repitan", "todos", "no", "significa", "que", "sea", "verdad."],
            why: "Valoración de una afirmación ajena y negación de la conclusión: dos subjuntivos.",
          },
          {
            words: ["Sería", "útil", "que", "cada", "planta", "eligiera", "a", "su", "representante."],
            why: "El condicional funciona como marco pasado: imperfecto.",
          },
        ],
      },
      {
        id: "c1-01-intencion",
        type: "context",
        prompt: "Elige la frase que corresponde a la intención descrita.",
        items: [
          {
            context: "Quieres confirmar con el conserje una información que te han dado: la sala de música abre en julio.",
            q: "¿Qué dices?",
            options: [
              "Entiendo que la sala de música abra en julio, ¿no?",
              "Entiendo que la sala de música abre en julio, ¿no?",
              "Entiendo que la sala de música abriera en julio, ¿no?",
            ],
            answer: 1,
            why: "«Entender que» + indicativo = me consta, me han dicho. Con subjuntivo dirías que te parece comprensible.",
          },
          {
            context: "Quieres ordenar a los nuevos residentes, a través del representante, que rellenen la encuesta.",
            q: "¿Qué frase escribe el representante?",
            options: [
              "La directora dice que rellenamos la encuesta antes del viernes.",
              "La directora dice que rellenaríamos la encuesta antes del viernes.",
              "La directora dice que rellenemos la encuesta antes del viernes.",
            ],
            answer: 2,
            why: "«Decir que» + subjuntivo transmite una orden.",
          },
          {
            context: "Quieres expresar miedo, no una sospecha: todavía no sabes si quedarán habitaciones individuales.",
            q: "¿Qué frase lo expresa mejor?",
            options: [
              "Temo que no queden habitaciones individuales para septiembre.",
              "Me temo que no quedan habitaciones individuales para septiembre.",
              "Temo que no quedaban habitaciones individuales para septiembre.",
            ],
            answer: 0,
            why: "«Temer que» + subjuntivo expresa miedo; «me temo que» + indicativo anuncia una mala noticia que el hablante cree cierta.",
          },
        ],
      },
      {
        id: "c1-01-perspectiva",
        type: "match",
        prompt: "Relaciona cada frase del presente con su versión desde el pasado, conservando la relación temporal.",
        pairs: [
          { left: "Queremos que los residentes participen.", right: "Queríamos que los residentes participaran." },
          { left: "Nos alegra que hayan participado.", right: "Nos alegró que hubieran participado." },
          { left: "Les pido que lo decidan mañana.", right: "Les pedí que lo decidieran al día siguiente." },
          { left: "No creo que lo hayan decidido ya.", right: "No creía que lo hubieran decidido ya." },
        ],
      },
      {
        id: "c1-01-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Piensa en un proyecto en el que hayas participado (un viaje de grupo, un trabajo en equipo, una mudanza). Escribe cuatro frases: dos sobre lo que esperabas o temías al empezar y dos sobre lo que valoras hoy (60–80 palabras).",
            model: "Cuando organizamos el viaje de fin de carrera, temía que el presupuesto no alcanzara y que alguien se enfadara por el reparto de habitaciones. También esperaba que el guía hablara inglés. Hoy me alegra que hayamos ahorrado casi cien euros por persona y valoro mucho que nadie se haya quejado del alojamiento, aunque el guía solo hablaba español.",
            checklist: [
              "Las frases del principio tienen marco pasado e imperfecto o pluscuamperfecto.",
              "Las de hoy tienen marco presente y presente o perfecto de subjuntivo.",
              "Hay al menos un dato afirmado en indicativo.",
            ],
          },
          {
            prompt: "Escribe un mensaje de 40–60 palabras para el grupo de tu residencia, tu edificio o tu trabajo que desmienta un rumor sin ridiculizar a quien lo difundió.",
            model: "Hola a todos: estos días ha corrido la voz de que van a cortar la calefacción en marzo. Que yo sepa, la comunidad no ha aprobado nada parecido. Entiendo que preocupe, porque hace frío, pero que se repita en el ascensor no significa que sea cierto. Si alguien tiene información, que la comparta.",
            checklist: [
              "Uso «que yo sepa» u otra fórmula de compromiso limitado.",
              "Reconozco la preocupación con «entiendo que» + subjuntivo.",
              "El mensaje no acusa a nadie.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta una carta de balance (230–320 palabras) dirigida a las personas de una comunidad que conozcas: una residencia, una asociación, un equipo de trabajo o un club. Cuenta qué se esperaba o se temía al empezar, qué ha pasado de verdad y qué valoras hoy, aclara un rumor o una duda y formula un deseo para el próximo periodo.",
    context: "La carta se leerá en voz alta en la última reunión y luego se enviará por correo. Tus lectores conocen bien la comunidad, pero no todos tienen la misma información: distingue con claridad lo que sabes, lo que crees y lo que solo se dice.",
    steps: [
      "Haz dos columnas: «entonces» (lo que se esperaba o se temía) y «ahora» (lo que ha pasado y cómo lo valoras). Escribe al menos tres verbos en cada una.",
      "Decide qué dato vas a afirmar, cuál vas a valorar y qué rumor o duda vas a matizar.",
      "Redacta en tres párrafos como mínimo: el arranque, el balance y el cierre con un deseo.",
      "Revisa la carta con la lista de control: comprueba el marco y la relación de cada subjuntivo y corrige cualquier indicativo que hayas usado para valorar un hecho.",
    ],
    useLanguage: [
      "temíamos / esperábamos que + imperfecto de subjuntivo",
      "nos alegra / celebro que + perfecto de subjuntivo",
      "me sorprendió que + pluscuamperfecto de subjuntivo",
      "no sabíamos que + indicativo",
      "que yo sepa…, que lo digan no significa que…",
      "me gustaría que + imperfecto de subjuntivo",
    ],
    model: [
      "Queridos compañeros del club de montaña: cuando en septiembre propusimos salir dos domingos al mes en lugar de uno, la junta temía que la gente se cansara pronto y que las salidas se quedaran vacías en invierno. Yo misma dudaba que alguien quisiera madrugar en enero para subir a la sierra de Béjar con niebla. También nos preocupaba que los socios nuevos, que no conocían las rutas, no se atrevieran a apuntarse sin un guía experto al lado.",
      "Hoy podemos hacer otro balance. Hemos organizado diecinueve salidas y solo cancelamos una, por la nevada de febrero. Me alegra muchísimo que los nuevos hayan sido los más constantes y celebro que tres de ellos se hayan formado como monitores. No sabíamos que el seguro cubría también las rutas de dos días, y eso nos ha permitido ampliar el calendario. Ha corrido la voz de que la cuota subirá el año que viene. Que yo sepa, la asamblea no ha votado nada, y que se comente en el refugio no significa que esté decidido.",
      "Para la próxima temporada, me gustaría que cada socio propusiera al menos una ruta y que la junta publicara el calendario completo antes de octubre. Puede que no todas las propuestas salgan adelante, pero sería una pena que alguien se quedara sin decir dónde quiere caminar. Gracias por un año en el que habéis demostrado que madrugar en grupo es mucho más fácil.",
    ],
    checklist: [
      "Cada subjuntivo tiene el tiempo que corresponde a su marco y a su relación temporal.",
      "Los hechos valorados con verbos de emoción van en subjuntivo; los datos que informo, en indicativo.",
      "Distingo con claridad lo que sé, lo que creo y lo que solo se dice.",
      "Hay al menos un cambio explícito de perspectiva (entonces / ahora) marcado con conectores temporales.",
      "El texto tiene tres párrafos como mínimo y un deseo final con condicional.",
    ],
    words: [230, 320],
  },
  speaking: {
    intro: "Prepárate con notas breves, no con un texto leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Balance ante la junta",
        prompt: "Presenta en cuatro minutos el balance de un proyecto o de un curso que conozcas bien. Habla primero de lo que se esperaba o se temía al empezar, después de lo que ha pasado y de cómo lo valoras hoy, y termina con dos deseos para el próximo periodo.",
        prep: [
          "Anota tres expectativas iniciales con su verbo en pasado (temíamos, esperábamos, dudábamos).",
          "Anota tres valoraciones de hoy y un dato que puedas afirmar con seguridad.",
          "Prepara una frase de transición: «Diez meses después, las cosas se ven de otra manera».",
        ],
        seconds: 240,
        model: "Cuando empezamos el curso, temíamos que el horario de silencio provocara protestas y dudábamos que los de primero se animaran a participar. Diez meses después, las cosas se ven de otra manera. Es verdad que hubo quejas, pero me alegra que la solución haya salido de los propios residentes. Para el año que viene, me gustaría que la junta revisara el reglamento antes de septiembre.",
        selfCheck: [
          "Cambio de marco con claridad al pasar de «entonces» a «ahora».",
          "Pronuncio llanas las formas en -ara y agudas las formas en -ará.",
          "Uso al menos un indicativo de constatación y un subjuntivo de valoración.",
        ],
      },
      {
        title: "Responder a un rumor sin desautorizar",
        prompt: "Un compañero te dice, muy enfadado: «Ya está decidido: el año que viene nos quitan la sala de estudio para hacer oficinas». Respóndele: pregúntale de dónde ha sacado la información, distingue lo que sabes de lo que se dice, reconoce su preocupación y propón cómo aclararlo.",
        prep: [
          "Prepara dos preguntas para saber el origen del rumor.",
          "Ten a mano «que yo sepa», «que lo digan no significa que» y «entiendo que te preocupe».",
        ],
        seconds: 150,
        model: "A ver, ¿quién te lo ha dicho? ¿Lo has visto por escrito? Que yo sepa, la dirección no ha anunciado nada. Entiendo que te preocupe, porque la usamos todos, pero que lo comenten en el comedor no significa que esté decidido. ¿Por qué no lo preguntamos juntos en la próxima junta?",
        selfCheck: [
          "Hago al menos dos preguntas reales.",
          "Separo lo que sé de lo que se dice con el modo adecuado.",
          "Propongo una acción concreta.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tus dos columnas (entonces / ahora) y una frase en la que hayas dudado entre indicativo y subjuntivo.",
    cards: [
      {
        move: "Cuéntale",
        task: "Cuéntale a tu profesor qué esperabas del curso de español al empezar y qué valoras hoy, cambiando de marco al menos dos veces.",
        phrases: ["Al principio esperaba que…", "Hoy me alegra que…"],
      },
      {
        move: "Pregúntale",
        task: "Pregúntale por un verbo de doble sentido (decir, sentir, entender, temer) que te haya hecho dudar esta semana y pide un ejemplo de cada modo.",
        phrases: ["¿Qué cambia si digo… con subjuntivo?", "¿En qué situación usarías…?"],
      },
      {
        move: "Defiende",
        task: "Lee tu carta de balance y defiende una frase en la que el modo marque tu postura; pide a tu profesor que proponga la alternativa.",
        phrases: ["Lo puse en subjuntivo porque no quería afirmar…", "Si lo cambio a indicativo, parecería que…"],
      },
      {
        move: "Desmiente",
        task: "Haz un juego de rol: tu profesor difunde un rumor sobre la escuela y tú lo desmientes con tacto.",
        phrases: ["Que yo sepa…", "No es que…, es que…"],
      },
    ],
    bring: "Tus dos columnas, la carta revisada y, si quieres, la grabación del balance.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "«En marzo nos pidieron que ___ el inventario de la biblioteca antes de las vacaciones.» ¿Qué forma completa la frase?",
        options: ["terminemos", "hayamos terminado", "termináramos"],
        answer: 2,
        why: "Marco pasado y relación posterior, con la tarea ya cumplida: imperfecto de subjuntivo.",
      },
      {
        type: "choice",
        q: "¿En qué frase «entender» significa «encontrar comprensible»?",
        options: [
          "Entiendo que te enfade el cambio de habitación.",
          "Entiendo que el cambio de habitación es obligatorio.",
          "Entiendo que te cambiaron de habitación ayer.",
        ],
        answer: 0,
        why: "Con subjuntivo, «entender que» valora como comprensible una reacción.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué postura tiene la hablante sobre la mudanza?",
        options: [
          "La da por cierta y la anuncia.",
          "No se compromete: la ve solo posible.",
          "La valora como un hecho conocido.",
        ],
        answer: 1,
        why: "«Puede que» exige subjuntivo y expresa posibilidad sin compromiso.",
        audio: "Puede que la mudanza de la biblioteca se retrase hasta octubre.",
        voice: "es-CO-f",
      },
      {
        type: "gap",
        q: "Nos dolió que nadie nos ___ (avisar) de que el comedor cerraba aquel fin de semana.",
        answers: [["hubiera avisado", "hubiese avisado", "avisara", "avisase"]],
        hint: "Marco pasado: el aviso debía haber llegado antes del cierre.",
        why: "Pluscuamperfecto para la anterioridad; el imperfecto también se acepta si se ve simultáneo.",
      },
      {
        type: "gap",
        q: "Que yo ___ (saber), la junta no ha votado todavía la subida de la cuota.",
        answers: [["sepa"]],
        hint: "Fórmula fija de compromiso limitado: siempre en subjuntivo.",
        why: "«Que yo sepa» limita lo que afirmas a la información que tienes.",
      },
      {
        type: "error",
        sentence: "Me molesta que el ascensor está siempre estropeado cuando hay mudanzas.",
        answers: ["Me molesta que el ascensor esté siempre estropeado cuando hay mudanzas."],
        why: "Un hecho valorado con un verbo de emoción va en subjuntivo.",
      },
      {
        type: "error",
        sentence: "Al llegar, me extrañó que nadie haya preparado las llaves de la habitación.",
        answers: ["Al llegar, me extrañó que nadie hubiera preparado las llaves de la habitación.", "Al llegar, me extrañó que nadie hubiese preparado las llaves de la habitación."],
        why: "Marco pasado y relación anterior: pluscuamperfecto de subjuntivo.",
      },
      {
        type: "order",
        words: ["No", "sabía", "que", "la", "biblioteca", "abría", "los", "domingos."],
        why: "La negación de «saber» mantiene el indicativo: el hecho es cierto.",
      },
      {
        type: "open",
        prompt: "Explica en 70–90 palabras a un compañero la diferencia entre «Me dice que llegas tarde» y «Me dice que llegues tarde», y entre «Me temo que no hay plazas» y «Temo que no haya plazas». Pon un contexto para cada frase.",
        model: "«Me dice que llegas tarde» informa de un hecho: alguien me cuenta que sueles llegar tarde. «Me dice que llegues tarde» transmite una orden o un permiso: puedes venir más tarde. «Me temo que no hay plazas» anuncia con pesar algo que creo cierto, por ejemplo cuando ya he mirado la lista. «Temo que no haya plazas» expresa miedo antes de saberlo, mientras espero la respuesta de secretaría.",
        checklist: [
          "Explico el cambio de significado de «decir» y de «temer(se)» con el modo.",
          "Doy un contexto realista para cada frase.",
          "No reduzco la diferencia a «el subjuntivo es duda».",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Elijo el tiempo del subjuntivo cruzando el marco del verbo principal con la relación temporal.",
      "Cambio de perspectiva (entonces / ahora) sin perder la relación entre los hechos.",
      "Uso el modo para mostrar si afirmo, dudo, transmito o valoro un contenido.",
      "Distingo los dos sentidos de decir, sentir, entender y temer(se) según el modo.",
    ],
    review: [
      "Dentro de dos días, tapa la cuadrícula marco × relación y reconstrúyela con el verbo «decidir».",
      "Dentro de una semana, busca en una noticia real una frase con «dicen que» o «según» y reescríbela tomando distancia.",
      "En la próxima clase, lee tu carta de balance y pide a tu profesor que señale un subjuntivo dudoso.",
    ],
  },
  related: [
    { path: "/subjuntivo-pais-maravillas", label: "Clase: Concordancia temporal del subjuntivo en contextos complejos" },
    { path: "/gramatica/alternancia-de-indicativo-y-subjuntivo-segun", label: "Clase: Alternancia de indicativo y subjuntivo según postura" },
  ],
};
