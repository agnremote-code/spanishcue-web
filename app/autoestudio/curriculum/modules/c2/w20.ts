import type { Module } from "../../types";

/**
 * C2 · semana 20 · Checkpoint final del curso. Autoestudio espejo de G235
 * (producción y revisión de ensayo argumentativo C2) y G236 (proyecto C2:
 * mediación, síntesis y defensa de posturas), que además integra G229–G234
 * (semanas 16 a 19). Repaso autónomo con un panel ciudadano ficticio de un
 * barrio de Madrid que debe recomendar un uso para unas antiguas cocheras.
 * Audio mediante síntesis; sin acreditación regional.
 */
export const c2w20: Module = {
  id: "c2-20",
  level: "c2",
  week: 20,
  kind: "checkpoint",
  title: "Checkpoint final: leer, mediar, argumentar y defender",
  subtitle: "Repaso del ensayo argumentativo y de la mediación entre fuentes, integrado con la paráfrasis fiel, los conectores, la puntuación, la ortografía, la cohesión y la lectura crítica",
  stop: {
    place: "Madrid",
    country: "España",
  },
  minutes: 150,
  newObjectives: [
    "c2.gram.g235",
    "c2.gram.g236",
    "c2.voc.w20-ciudad-deliberacion",
    "c2.pron.w20-defensa-oral",
    "c2.lis.w20-panel-ciudadano",
    "c2.read.w20-nota-sintesis",
    "c2.wri.w20-ensayo-final",
    "c2.spk.w20-defender-postura",
    "c2.fun.w20-mediar-fuentes",
    "c2.disc.w20-contraargumento-justo",
    "c2.rev.w20-integracion-semanas-16-19",
  ],
  reviewObjectives: ["c2.gram.g229","c2.gram.g230","c2.voc.w16-ciencia-agua","c2.pron.w16-incisos-cautela","c2.lis.w16-resumen-boletin","c2.read.w16-columna-titulares","c2.wri.w16-resena-divulgativa","c2.spk.w16-explicar-estudio","c2.fun.w16-corregir-exageracion","c2.disc.w16-registro-conectores","c2.gram.g231","c2.voc.w17-puerto-catalogo","c2.pron.w17-leer-signos","c2.lis.w17-revision-catalogo","c2.read.w17-ensayo-puerto","c2.wri.w17-texto-presentacion","c2.spk.w17-justificar-signos","c2.fun.w17-negociar-correccion","c2.disc.w17-jerarquia-fronteras","c2.gram.g232","c2.gram.g233","c2.voc.w18-textil-informe","c2.pron.w18-tilde-y-acento","c2.lis.w18-pruebas-informe","c2.read.w18-capitulo-cooperativa","c2.wri.w18-apertura-capitulo","c2.spk.w18-presentar-informe","c2.fun.w18-aclarar-referente","c2.disc.w18-cadena-referencia","c2.gram.g234","c2.voc.w19-tianguis-prensa","c2.pron.w19-foco-agente","c2.lis.w19-taller-lectura","c2.read.w19-nota-coberturas","c2.wri.w19-nota-critica","c2.spk.w19-moderar-analisis","c2.fun.w19-desmontar-titular","c2.disc.w19-analizar-sin-militar"],
  prerequisites: ["c2-19"],
  goal: {
    canDo: "Puedo leer varias fuentes enfrentadas sobre un asunto público, mediarlas para un público no experto sin alterar su compromiso, escribir y revisar un ensayo argumentativo completo y defender mi postura oralmente con firmeza y cortesía, integrando todo lo repasado en el último bloque del curso.",
    steps: [
      "Repasa en la teoría la tesis matizada, el contraargumento justo, la revisión en capas, la mediación por ejes y la síntesis de las semanas 16 a 19.",
      "Practica con las fuentes sobre las antiguas cocheras de un barrio de Madrid.",
      "Escucha la sesión del panel ciudadano y lee la nota de síntesis que preparó la facilitadora.",
      "Redacta tu ensayo final, revísalo capa por capa, defiende tu postura en voz alta y cierra el curso con una reflexión sobre tu propio camino.",
    ],
  },
  theory: {
    intro: "En clase viste estos temas con tu profesor. Aquí los repasas en Madrid, en la última parada del curso. Un barrio tiene que decidir qué hacer con unas antiguas cocheras de autobuses, cerradas desde hace años: vivienda de alquiler asequible, un equipamiento cultural y deportivo o un parque. El ayuntamiento ha convocado un panel ciudadano de veinticinco vecinos elegidos por sorteo, que recibirá tres fuentes con posturas distintas y deberá emitir una recomendación. Esta semana no aprendes estructuras nuevas: pones a trabajar juntas todas las que has repasado. Al final del bloque de teoría encontrarás una síntesis de las semanas 16 a 19 para usarla en la práctica de integración.",
    parts: [
      {
        heading: "El ensayo C2: tesis matizada y contraargumento justo",
        body: [
          "Una tesis de nivel C2 no es solo una posición; es una posición con alcance y condición. «Las cocheras deben ser vivienda» es una opinión. «La mayor parte de la parcela debería destinarse a vivienda de alquiler asequible, siempre que se reserve la nave histórica para uso vecinal» es una tesis matizada: dice qué, cuánto y con qué condición. Esa precisión es la que después permite defenderla sin exagerar.",
          "El contraargumento justo presenta la versión más fuerte de la objeción, no una caricatura (la falacia del hombre de paja), y nunca ataca a quien la sostiene (ataque personal). La secuencia más útil tiene tres tiempos: concesión, oposición y consecuencia. «Es cierto que el barrio carece de zonas verdes; no obstante, los datos del propio informe muestran que el déficit de vivienda es mayor, de ahí que convenga priorizarla». Recuerda que «de ahí que» va con subjuntivo; que «de modo que» con indicativo expresa consecuencia («no hay suelo libre, de modo que la parcela es decisiva») y con subjuntivo, finalidad («diseñemos el edificio de modo que la nave se conserve»); y que «por ende» equivale a «por tanto» en registro elevado. Para conceder con elegancia existen también «Admitamos que…» y «por mucho que» + subjuntivo.",
        ],
        table: {
          caption: "De la opinión a la tesis defendible",
          head: ["Paso", "Ejemplo"],
          rows: [
            ["posición", "Las cocheras deberían ser vivienda."],
            ["+ alcance", "La mayor parte de la parcela debería ser vivienda de alquiler asequible…"],
            ["+ condición", "…siempre que la nave histórica se conserve para uso vecinal."],
            ["concesión", "Es cierto que el barrio necesita zonas verdes;"],
            ["oposición", "no obstante, el informe municipal muestra un déficit de vivienda mayor,"],
            ["consecuencia", "de ahí que convenga priorizarla."],
          ],
        },
        mistakes: [
          {
            wrong: "Quienes quieren un parque solo piensan en pasear al perro; de ahí que su propuesta no vale.",
            right: "Quienes defienden el parque señalan, con razón, que el barrio tiene pocas zonas verdes; no obstante, el déficit de vivienda es mayor, de ahí que convenga priorizarla.",
            why: "La versión errónea caricaturiza la objeción y usa «de ahí que» con indicativo; la correcta presenta el argumento contrario en su mejor versión y emplea el subjuntivo.",
          },
        ],
      },
      {
        heading: "Revisar en capas: del argumento a la tilde",
        body: [
          "Revisar un ensayo largo de una sola vez no funciona: los ojos se van a las erratas y no ven los problemas de fondo. Conviene revisar en capas, de lo más grande a lo más pequeño. Primero, el argumento: ¿la tesis tiene alcance y condición?, ¿la objeción está en su mejor versión?, ¿la conclusión sintetiza en lugar de repetir? Segundo, las fuentes: ¿cada paráfrasis conserva el compromiso del original? Tercero, la cohesión: ¿cada referente se identifica sin esfuerzo, incluso a varios párrafos de distancia? Cuarto, los conectores y la puntuación. Quinto, la ortografía y el registro.",
          "En el registro de un ensayo formal sobran los coloquialismos y algunas expresiones muy extendidas pero desaconsejadas: «en base a» (mejor «a partir de», «con base en» o «según»), «a nivel de» cuando no hay niveles (mejor «en», «en cuanto a»). Los recursos retóricos funcionan dosificados: una pregunta retórica, una antítesis, una enumeración de tres elementos, una metáfora. Los refranes y las frases hechas suelen restar autoridad. Y la voz del autor puede asomar con fórmulas del género ensayístico, como «quien esto escribe», siempre con mesura.",
        ],
        table: {
          caption: "Las cinco capas de la revisión",
          head: ["Capa", "Pregunta", "Semana que la repasó"],
          rows: [
            ["argumento", "¿Tesis matizada, objeción justa, conclusión que sintetiza?", "20 (G235)"],
            ["fuentes", "¿Cada paráfrasis conserva certeza, atribución y alcance?", "16 (G229)"],
            ["cohesión", "¿Cada pronombre y encapsulador tiene un antecedente claro?", "18 (G233)"],
            ["conectores y puntuación", "¿Valor exacto, signos en su sitio, frontera principal marcada?", "16 (G230) y 17 (G231)"],
            ["ortografía y registro", "¿Norma académica, variantes coherentes, sin «en base a»?", "18 (G232)"],
          ],
        },
        mistakes: [
          {
            wrong: "En base a los datos, a nivel de vivienda el barrio está fatal.",
            right: "Según los datos, el barrio sufre un déficit grave de vivienda.",
            why: "«En base a», «a nivel de» y «fatal» rompen el registro de un ensayo formal.",
          },
        ],
      },
      {
        heading: "Mediar: sintetizar fuentes para un público y después tomar postura",
        body: [
          "Mediar es hacer que una información llegue a quien la necesita en una forma que pueda usar. Para un panel de vecinos no expertos, eso significa tres cosas. Primera: organizar la síntesis por ejes (coste, plazos, necesidades del barrio) y no fuente por fuente, para que el panel compare. Segunda: traducir las cifras a equivalencias comprensibles («1,2 hectáreas, el tamaño de dos campos de fútbol»). Tercera: conservar el compromiso de cada fuente: lo que un informe técnico considera probable sigue siendo probable; lo que un periódico publica como rumor sigue siendo un rumor, en condicional; una cifra documentada sigue siendo un hecho.",
          "La postura propia llega después, y separada. Una fórmula útil para pasar de la síntesis a la opinión es «Se afirma que…, pero los datos permiten matizarlo». Al defender esa postura ante otras personas, la cortesía estratégica no resta firmeza: «No estaría de más que el ayuntamiento publicara los costes», «Dicho eso, si me permiten, quisiera añadir algo», «Entiendo la preocupación; precisamente por eso propongo…». Ante el panel, el trato es de «ustedes»; ante un vecino concreto en un foro formal, normalmente «usted».",
        ],
        examples: [
          { es: "Sobre los plazos, las tres fuentes coinciden en algo: ninguna opción estaría lista antes de 2029.", note: "Síntesis por ejes, no por fuentes." },
          { es: "Según una información periodística, el ayuntamiento habría recibido ya una oferta privada.", note: "El rumor sigue siendo rumor: condicional y atribución." },
          { es: "Se afirma que el parque sería la opción más barata, pero los datos permiten matizarlo: el mantenimiento anual no está incluido.", note: "Paso de la síntesis a la postura." },
          { es: "No estaría de más que la asociación publicara cómo hizo su encuesta.", note: "Petición mitigada, firme en el fondo." },
        ],
        mistakes: [
          {
            wrong: "Nota de síntesis: «El ayuntamiento ha recibido una oferta privada», cuando la fuente es un periódico que lo publica sin confirmar.",
            right: "Nota de síntesis: «Según un periódico, el ayuntamiento habría recibido una oferta privada; el ayuntamiento no lo ha confirmado».",
            why: "Al mediar, un rumor no puede convertirse en hecho.",
          },
        ],
      },
      {
        heading: "Integración: lo que repasaste en las semanas 16 a 19",
        body: [
          "Esta semana cierra el último bloque y el curso. En la semana 16 (G229 y G230) repasaste la paráfrasis que conserva el compromiso epistémico y los conectores poco frecuentes con su valor exacto. En la semana 17 (G231), el punto y coma, los dos puntos, los incisos anidados y las comillas. En la semana 18 (G232 y G233), la ortografía académica con sus variantes admisibles y la cohesión anafórica de largo alcance. En la semana 19 (G234), el análisis crítico de cómo la sintaxis reparte la responsabilidad.",
          "Todo eso aparece en un ensayo y en una mediación. Cuando resumes las fuentes del panel, haces paráfrasis fiel; cuando enlazas los argumentos, eliges conectores; cuando citas, puntúas; cuando el texto se alarga, mantienes las cadenas de referencia; y cuando lees la declaración de una asociación o el titular de un periódico, preguntas quién hace qué y qué se da por hecho. El ensayo final no es una tarea más: es el lugar donde todas esas destrezas trabajan a la vez.",
        ],
        table: {
          caption: "Síntesis del bloque",
          head: ["Semana y clase", "Pregunta que te haces", "Ejemplo de esta semana"],
          rows: [
            ["16 · G229", "¿Conservo la certeza, la atribución y el alcance?", "El informe considera probable… (no «demuestra»)."],
            ["16 · G230", "¿El conector tiene su valor exacto y encaja en el registro?", "Habida cuenta de que la nave está protegida…"],
            ["17 · G231", "¿Dónde está la frontera principal y qué signo le toca?", "Tres usos posibles: vivienda, equipamiento y parque."],
            ["18 · G232", "¿Norma, variante admisible o estilo?", "1,2 hectáreas; 12 000 vecinos; «periodo» en todo el texto."],
            ["18 · G233", "¿Se sabe siempre a quién o a qué me refiero?", "Esa propuesta, la de la asociación, …"],
            ["19 · G234", "¿Quién hace qué y qué se da por hecho?", "«Los vecinos recuperan su barrio» presupone una pérdida."],
          ],
        },
      },
    ],
  },
  grammar: {
    intro: "Primero evalúa tesis y contraargumentos; después revisa formas, capas y errores de registro.",
    exercises: [
      {
        id: "c2-20-gramatica-tesis",
        type: "context",
        prompt: "Lee el fragmento de un ensayo y responde.",
        items: [
          {
            context: "Tres tesis posibles para el ensayo sobre las cocheras.",
            q: "¿Cuál es una tesis matizada?",
            options: [
              "Las cocheras deben ser un parque, y punto.",
              "El parque es lo mejor para todos.",
              "Al menos un tercio de la parcela debería ser zona verde, siempre que el resto se destine a vivienda asequible.",
            ],
            answer: 2,
            why: "Posición, alcance («un tercio») y condición.",
          },
          {
            context: "«Los partidarios del equipamiento cultural son cuatro nostálgicos que no pagan alquiler».",
            q: "¿Qué problema tiene este contraargumento?",
            options: [
              "Ataca a las personas en lugar de responder a su argumento.",
              "Usa un conector raro.",
              "Tiene un error de puntuación.",
            ],
            answer: 0,
            why: "Es un ataque personal y una caricatura, no una respuesta.",
          },
          {
            context: "«Es cierto que la vivienda tardaría más en construirse; no obstante, su efecto duraría décadas, de ahí que el plazo no deba ser el criterio decisivo».",
            q: "¿Qué estructura sigue el fragmento?",
            options: [
              "Pregunta retórica, antítesis y refrán.",
              "Concesión, oposición y consecuencia con subjuntivo.",
              "Tesis, ejemplo y conclusión.",
            ],
            answer: 1,
            why: "Es la secuencia del contraargumento justo.",
          },
          {
            context: "Conclusión de un ensayo: «En conclusión, como he dicho, la vivienda es lo mejor, como he dicho antes».",
            q: "¿Qué le falta a esta conclusión?",
            options: [
              "Un refrán final.",
              "Más conectores raros.",
              "Sintetizar el recorrido y abrir una consecuencia, en lugar de repetir.",
            ],
            answer: 2,
            why: "Una conclusión C2 sintetiza, no repite.",
          },
        ],
      },
      {
        id: "c2-20-gramatica-formas",
        type: "gap",
        prompt: "Completa con la forma adecuada del verbo entre corchetes.",
        items: [
          { q: "El déficit de vivienda supera al de zonas verdes, de ahí que el panel ___ priorizar la vivienda. [deber]", answers: [["deba"]], why: "«De ahí que» + subjuntivo." },
          { q: "No queda suelo libre en el barrio, de modo que la parcela ___ decisiva. [ser]", answers: [["es", "resulta"]], why: "«De modo que» + indicativo: consecuencia." },
          { q: "Diseñemos el edificio de modo que la nave histórica se ___ intacta. [conservar]", answers: [["conserve"]], why: "«De modo que» + subjuntivo: finalidad." },
          { q: "Por mucho que el parque ___ más barato de construir, su mantenimiento es costoso. [ser]", answers: [["sea"]], why: "«Por mucho que» + subjuntivo: concesión." },
          { q: "Según una información periodística, el ayuntamiento ___ recibido una oferta privada. [haber, rumor]", answers: [["habría"]], why: "Condicional de rumor: no se presenta como hecho." },
        ],
      },
      {
        id: "c2-20-gramatica-capas",
        type: "classify",
        prompt: "Clasifica cada problema del borrador según la capa de revisión que lo detecta.",
        categories: ["Argumento", "Fuentes", "Cohesión", "Puntuación u ortografía", "Registro"],
        items: [
          { text: "La tesis no dice cuánta parte de la parcela se destinaría a vivienda.", cat: 0, why: "Falta alcance." },
          { text: "El informe dice «es probable» y el ensayo dice «está demostrado».", cat: 1, why: "Sube el compromiso de la fuente." },
          { text: "Tras un párrafo sobre los plazos, el siguiente empieza con «Ella propone…».", cat: 2, why: "Referente lejano y ambiguo." },
          { text: "«Las opciones son: vivienda, equipamiento y parque».", cat: 3, why: "Dos puntos entre verbo y complemento." },
          { text: "«En base a la encuesta, el parque mola».", cat: 4, why: "«En base a» y coloquialismo." },
          { text: "La objeción contraria se presenta como una caricatura.", cat: 0, why: "Hombre de paja." },
          { text: "Una cifra de la asociación aparece sin decir de dónde sale.", cat: 1, why: "Falta atribución." },
          { text: "«12.000 vecinos» y «1.2 hectáreas» en el mismo texto.", cat: 3, why: "Millares con espacio y signo decimal coherente." },
        ],
      },
      {
        id: "c2-20-gramatica-errores",
        type: "error",
        prompt: "Corrige el error de cada frase del borrador.",
        items: [
          {
            sentence: "En base a los datos del informe, la vivienda es la opción más urgente.",
            answers: ["Según los datos del informe, la vivienda es la opción más urgente.", "A partir de los datos del informe, la vivienda es la opción más urgente.", "Con base en los datos del informe, la vivienda es la opción más urgente."],
            why: "«En base a» se desaconseja en registro formal.",
          },
          {
            sentence: "El parque costaría menos, de ahí que muchos vecinos lo prefieren.",
            answers: ["El parque costaría menos, de ahí que muchos vecinos lo prefieran."],
            why: "«De ahí que» lleva subjuntivo.",
          },
          {
            sentence: "A nivel de plazos, ninguna opción estaría lista antes de 2029.",
            answers: ["En cuanto a los plazos, ninguna opción estaría lista antes de 2029.", "En cuanto a plazos, ninguna opción estaría lista antes de 2029."],
            why: "«A nivel de» sin niveles reales: mejor «en cuanto a».",
          },
          {
            sentence: "Nota de síntesis: «La asociación demuestra que el 80 % de los vecinos quiere un parque», sobre una encuesta en línea sin muestra controlada.",
            answers: ["Nota de síntesis: «Según una encuesta en línea de la asociación, el 80 % de quienes respondieron prefiere un parque», sobre una encuesta en línea sin muestra controlada."],
            why: "«Demuestra» sube el compromiso y «de los vecinos» amplía el alcance a quienes no respondieron.",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico del urbanismo y de la deliberación pública para el panel de las cocheras.",
    groups: [
      {
        title: "Ciudad y suelo",
        items: [
          { es: "la cochera", note: "edificio donde se guardan vehículos, aquí autobuses o tranvías" },
          { es: "el uso dotacional", note: "uso de un suelo para servicios públicos: escuelas, centros culturales, polideportivos" },
          { es: "la vivienda de alquiler asequible", note: "vivienda con una renta limitada por debajo del mercado" },
          { es: "la licitación", note: "concurso público para adjudicar una obra o un servicio" },
          { es: "la recalificación", note: "cambio del uso permitido en un suelo" },
          { es: "la nave", note: "edificio amplio de una sola planta, típico de la industria" },
        ],
      },
      {
        title: "Deliberar y argumentar",
        items: [
          { es: "el panel ciudadano", note: "grupo de personas elegidas por sorteo para deliberar y recomendar" },
          { es: "el sorteo", note: "elección al azar" },
          { es: "la tesis matizada", note: "posición con alcance y condiciones explícitas" },
          { es: "el hombre de paja", note: "falacia que consiste en refutar una versión deformada de la postura contraria" },
          { es: "la recomendación", note: "propuesta que un órgano consultivo eleva a quien decide" },
          { es: "el disenso", note: "desacuerdo razonado dentro de un grupo" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-20-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada término con su definición.",
        pairs: [
          { left: "el uso dotacional", right: "uso de un suelo para servicios públicos: escuelas, centros culturales, polideportivos" },
          { left: "la recalificación", right: "cambio del uso permitido en un suelo" },
          { left: "el panel ciudadano", right: "grupo de personas elegidas por sorteo para deliberar y recomendar" },
          { left: "el hombre de paja", right: "falacia que consiste en refutar una versión deformada de la postura contraria" },
          { left: "la licitación", right: "concurso público para adjudicar una obra o un servicio" },
          { left: "el disenso", right: "desacuerdo razonado dentro de un grupo" },
        ],
      },
      {
        id: "c2-20-lexico-uso",
        type: "gap",
        prompt: "Completa con la palabra adecuada del vocabulario.",
        bank: ["sorteo", "nave", "recomendación", "tesis matizada"],
        items: [
          { q: "Los veinticinco miembros del panel se eligieron por ___ entre todos los vecinos empadronados.", answers: [["sorteo"]] },
          { q: "La ___ de 1924, con sus cerchas de hierro, está protegida por su valor histórico.", answers: [["nave"]] },
          { q: "El panel entregará su ___ al pleno municipal, que no está obligado a seguirla.", answers: [["recomendación"]] },
          { q: "Una ___ indica cuánto y con qué condición, no solo qué.", answers: [["tesis matizada"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Pausas que ordenan un argumento y una entonación que mitiga sin ceder",
    explanation: [
      "En una intervención argumentativa larga, las pausas hacen de párrafos. Una pausa clara antes de la concesión («Es cierto que…»), otra antes de la oposición («no obstante…») y otra antes de la consecuencia («de ahí que…») permiten al oyente seguir la estructura sin ver el texto. Si encadenas los tres tiempos sin respirar, el contraargumento justo se convierte en una ráfaga difícil de seguir.",
      "La mitigación tiene su propia entonación. Fórmulas como «no estaría de más», «si me permiten» o «entiendo la preocupación» se dicen con un tono más bajo y algo más lento; la propuesta que viene después recupera el tono normal y la firmeza. Así la cortesía no se confunde con duda. Y al citar lo que dice una fuente, mantén audibles los modalizadores («el informe considera probable…»): son lo primero que se pierde al hablar deprisa.",
      "El audio utiliza la síntesis disponible en el navegador: sirve como referencia de ritmo y pausas, no certifica un acento regional. La entonación de la mitigación practícala con una persona.",
    ],
    table: {
      caption: "Tres tiempos, tres pausas",
      head: ["Tiempo", "Marca", "Voz"],
      rows: [
        ["concesión", "Es cierto que… / Admitamos que…", "tono medio, ritmo pausado"],
        ["oposición", "no obstante… / sin embargo…", "pausa previa, tono que sube un poco"],
        ["consecuencia", "de ahí que… / por ende…", "tono firme y descendente al final"],
        ["mitigación", "No estaría de más… / Si me permiten…", "más bajo y lento; la propuesta, firme"],
      ],
    },
    perceive: {
      id: "c2-20-percepcion",
      type: "listen",
      prompt: "Escucha cada fragmento y responde.",
      items: [
        {
          q: "¿En qué tiempo del contraargumento estás?",
          options: ["Concesión.", "Oposición.", "Consecuencia."],
          answer: 0,
          why: "«Es cierto que» abre la concesión.",
          audio: "Es cierto que el barrio tiene muy pocas zonas verdes, y nadie lo discute.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué grado de compromiso transmite quien habla sobre la oferta privada?",
          options: ["Lo presenta como un hecho.", "Lo presenta como un rumor no confirmado.", "Lo niega."],
          answer: 1,
          why: "«Habría recibido» según un periódico: condicional de rumor.",
          audio: "Según un periódico, el ayuntamiento habría recibido una oferta privada por la parcela.",
          voice: "es-ES-m",
        },
        {
          q: "¿Qué hace la fórmula del principio?",
          options: ["Mitiga una petición firme.", "Expresa una duda real.", "Cierra la intervención."],
          answer: 0,
          why: "«No estaría de más» suaviza la forma, no el fondo.",
          audio: "No estaría de más que el ayuntamiento publicara el coste de mantenimiento de cada opción.",
          voice: "es-AR-f",
        },
        {
          q: "¿Qué relación expresa «de ahí que» en lo que oyes?",
          options: ["Finalidad.", "Concesión.", "Consecuencia."],
          answer: 2,
          why: "«De ahí que» + subjuntivo: consecuencia.",
          audio: "El déficit de vivienda es el mayor del distrito, de ahí que proponga priorizarla.",
          voice: "es-CO-m",
        },
      ],
    },
    produce: [
      { text: "Es cierto que el parque sería más barato de construir; no obstante, su mantenimiento no está presupuestado, de ahí que la diferencia sea menor de lo que parece.", tip: "Tres pausas: antes de «no obstante», antes de «de ahí que» y al final.", voice: "es-ES-m" },
      { text: "Si me permiten, quisiera añadir un dato que no ha salido todavía.", tip: "Tono bajo y lento en «si me permiten»; firme en «un dato».", voice: "es-ES-f" },
      { text: "Según el informe municipal, es probable que la vivienda tarde cuatro años en construirse.", tip: "No te tragues «es probable que».", voice: "es-MX-f" },
      { text: "Se afirma que la nave no tiene valor, pero los datos permiten matizarlo.", tip: "Pausa antes de «pero» y acento en «matizarlo».", voice: "es-PE-m" },
    ],
    spelling: "En el ensayo, recuerda las decisiones de las semanas anteriores: «de ahí que» con subjuntivo, millares con espacio («12 000»), el porcentaje separado («80 %»), el punto detrás de las comillas de cierre y una sola variante para cada palabra doble en todo el texto.",
  },
  listening: {
    title: "La segunda sesión del panel",
    context: "Segunda sesión del panel ciudadano sobre las antiguas cocheras. Nuria, la facilitadora, ha repartido una nota de síntesis de las tres fuentes. Joaquín, maestro jubilado, y Sara, enfermera con dos hijos, empiezan a deliberar. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "n", name: "Nuria", voice: "es-ES-f", role: "Facilitadora del panel" },
      { id: "j", name: "Joaquín", voice: "es-ES-m", role: "Miembro del panel, maestro jubilado" },
      { id: "s", name: "Sara", voice: "es-CO-f", role: "Miembro del panel, enfermera" },
    ],
    script: [
      { speaker: "n", text: "Buenas tardes. Antes de deliberar, repaso en dos minutos la nota que les envié, y les pido que me corrijan si algo no les queda claro. Tenemos tres fuentes: el informe técnico del área de urbanismo, la columna de un economista en un diario y la declaración de la asociación vecinal. No las resumí una por una, sino por ejes: necesidades del barrio, costes, plazos y patrimonio." },
      { speaker: "j", text: "Eso se agradece. La primera vez que leí las tres fuentes por separado no fui capaz de compararlas." },
      { speaker: "n", text: "Sobre las necesidades, el informe técnico considera probable que el déficit de vivienda asequible sea el más grave del distrito. Fíjense en el verbo: considera probable, no demuestra. La asociación, en cambio, afirma que el 80 % de los vecinos quiere un parque, pero ese dato procede de una encuesta en línea que respondieron unas seiscientas personas, en un barrio de doce mil. Así que no es el 80 % de los vecinos, sino el 80 % de quienes respondieron." },
      { speaker: "s", text: "Perdona, Nuria, ¿y la oferta privada? En el grupo de mensajes del barrio todo el mundo da por hecho que ya hay un fondo que quiere comprar la parcela." },
      { speaker: "n", text: "Es una buena pregunta. Lo único que tenemos es una noticia que dice que el ayuntamiento habría recibido una oferta, sin citar ninguna fuente identificada. El ayuntamiento no lo ha confirmado ni desmentido. Por eso en la nota está en condicional. No lo podemos tratar como un hecho." },
      { speaker: "j", text: "Yo quiero decir algo sobre la columna del economista. Escribe que el parque «es la opción más barata». Eso es verdad si solo cuentas la construcción. Pero el propio informe técnico dice que el mantenimiento anual de un parque de ese tamaño no está presupuestado." },
      { speaker: "n", text: "Eso es mediar bien, Joaquín: se afirma que el parque es lo más barato, pero los datos permiten matizarlo. Lo apunto." },
      { speaker: "s", text: "Pues yo ya tengo una postura, si me permiten. Mi hija mayor tiene veintiséis años y sigue en casa porque no puede pagar un alquiler en el barrio. No digo que mi caso sea un argumento; digo que es un ejemplo de lo que el informe considera probable. Propongo que la mayor parte sea vivienda asequible." },
      { speaker: "j", text: "Entiendo la preocupación, Sara, y la comparto. No obstante, la nave de 1924 tiene un valor que no se recupera si se derriba. ¿No sería posible hacer las dos cosas? Vivienda en la parte trasera de la parcela y la nave para uso vecinal." },
      { speaker: "s", text: "Me parece razonable, siempre que la parte de vivienda no quede reducida a un gesto. Dicho eso, no estaría de más que el ayuntamiento nos diera los números de esa opción mixta antes de votar." },
      { speaker: "n", text: "Lo anoto como petición formal del panel. Fíjense en lo que acaba de pasar: hemos pasado de tres fuentes enfrentadas a una propuesta matizada, con una condición y una petición de datos. Para la próxima sesión, cada uno de ustedes traerá su postura por escrito: tesis, la objeción más fuerte que conozcan y su respuesta." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la sesión completa sin abrir la transcripción. ¿Qué hace la facilitadora y a qué llegan los participantes?",
        exercise: {
          id: "c2-20-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación y la idea principal.",
          items: [
            {
              q: "¿Cómo organizó Nuria la nota de síntesis?",
              options: [
                "Por ejes, para que el panel pueda comparar.",
                "Fuente por fuente, en orden cronológico.",
                "Solo con la fuente que le parecía más fiable.",
              ],
              answer: 0,
              why: "Lo dice al principio: necesidades, costes, plazos y patrimonio.",
            },
            {
              q: "¿A qué llegan Joaquín y Sara?",
              options: [
                "A votar la opción del parque.",
                "A abandonar el panel.",
                "A una propuesta mixta con una condición y una petición de datos.",
              ],
              answer: 2,
              why: "Vivienda en la parte trasera, nave para uso vecinal y números antes de votar.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cómo se trata cada fuente. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-20-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Por qué corrige Nuria el dato del 80 %?",
              options: [
                "Porque la encuesta es antigua.",
                "Porque solo representa a quienes respondieron una encuesta en línea.",
                "Porque la asociación lo retiró.",
              ],
              answer: 1,
              why: "Seiscientas respuestas en un barrio de doce mil personas.",
            },
            {
              q: "¿Cómo trata Nuria la oferta privada?",
              options: [
                "Como un rumor, en condicional, porque no está confirmada.",
                "Como un hecho comprobado.",
                "No la menciona.",
              ],
              answer: 0,
              why: "La noticia no cita fuentes identificadas.",
            },
            {
              q: "¿Qué matiza Joaquín de la columna del economista?",
              options: [
                "Que el parque tardaría más en construirse.",
                "Que la nave no tiene valor.",
                "Que el parque solo es más barato si no se cuenta el mantenimiento.",
              ],
              answer: 2,
              why: "El mantenimiento anual no está presupuestado.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en lo que hace cada fórmula en la deliberación. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-20-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con su función.",
          pairs: [
            { left: "considera probable, no demuestra", right: "conservar el compromiso de la fuente" },
            { left: "habría recibido una oferta", right: "mantener un rumor como rumor" },
            { left: "los datos permiten matizarlo", right: "pasar de la síntesis a la postura" },
            { left: "Entiendo la preocupación, Sara, y la comparto. No obstante", right: "concesión antes de una objeción" },
            { left: "no estaría de más que el ayuntamiento nos diera los números", right: "petición firme con mitigación" },
          ],
          why: "Mediar y deliberar exigen cuidar a la vez el contenido y la relación.",
        },
      },
    ],
  },
  reading: {
    title: "Nota de síntesis para el panel: las cocheras de la calle del Olmo",
    genre: "Nota de mediación para un panel ciudadano",
    frame: "Nota preparada por la facilitadora del panel ciudadano de un barrio de Madrid antes de la segunda sesión. Las cocheras, el barrio, las personas, las cifras y las tres fuentes son ficticios.",
    text: [
      "Estimadas y estimados miembros del panel: esta nota resume las tres fuentes que recibieron con la convocatoria. No es una recomendación ni refleja mi opinión; su único propósito es que puedan comparar lo que dice cada fuente sobre las mismas cuestiones. Por eso no la he organizado fuente por fuente, sino por ejes: necesidades del barrio, costes, plazos y patrimonio. Cuando una fuente expresa una certeza, la mantengo; cuando expresa una duda o una probabilidad, también. Les ruego que, si en algún punto les parece que he subido o bajado el tono de una fuente, me lo digan en la sesión.",
      "Recuerdo brevemente el objeto de la deliberación. Las antiguas cocheras de autobuses de la calle del Olmo ocupan una parcela municipal de 1,2 hectáreas, aproximadamente el tamaño de dos campos de fútbol, cerrada desde 2016. En ella se conserva una nave de 1924 con cubierta de hierro, protegida por su valor histórico. El ayuntamiento ha planteado tres usos posibles: vivienda de alquiler asequible, un equipamiento cultural y deportivo, o un parque. Las tres fuentes son el informe técnico del área de urbanismo, una columna del economista Andrés Villalba publicada en un diario nacional y una declaración de la asociación vecinal del barrio.",
      "Necesidades del barrio. El informe técnico considera probable que el déficit de vivienda asequible sea el más grave del distrito; se apoya en el número de solicitudes de vivienda pública, que se ha triplicado en una década, aunque reconoce que no dispone de datos de este año. La asociación vecinal sostiene, por su parte, que el barrio es el segundo del distrito con menos zonas verdes por habitante, un dato que coincide con el padrón municipal. Añade que el 80 % de los vecinos prefiere un parque; ese porcentaje procede de una encuesta en línea que respondieron unas seiscientas personas, en un barrio de unos 12 000 habitantes, de modo que expresa la opinión de quienes respondieron, no necesariamente la del conjunto del barrio.",
      "Costes. Según el informe técnico, la vivienda sería la opción más cara de construir, pero podría financiarse en parte con los alquileres a lo largo de cuarenta años; el equipamiento tendría un coste intermedio, y el parque, el más bajo. El columnista, Andrés Villalba, afirma que el parque «es, con diferencia, la opción más barata». Esa afirmación es correcta si solo se cuenta la construcción. Conviene saber, sin embargo, que el mantenimiento anual de un parque de este tamaño no figura en el informe, de modo que la comparación de costes a largo plazo no es posible con los datos actuales.",
      "Plazos. Las tres fuentes coinciden en algo poco habitual: ninguna opción estaría lista antes de 2029. El informe técnico estima cuatro años para la vivienda y tres para el parque o el equipamiento, siempre que la licitación se convoque este año. Una información periodística reciente añade que el ayuntamiento habría recibido una oferta de compra por parte de un fondo privado; la noticia no identifica sus fuentes y el ayuntamiento no la ha confirmado ni desmentido. La recojo aquí, en condicional, porque se ha comentado mucho en el barrio, pero no puede tratarse como un hecho.",
      "Patrimonio. Las tres fuentes reconocen el valor de la nave de 1924, aunque con matices distintos. El informe técnico señala que es compatible con cualquiera de los tres usos; la asociación propone convertirla en espacio vecinal; el columnista no la menciona. Esta omisión no implica necesariamente que no le dé importancia, pero sí significa que su análisis de costes no incluye la rehabilitación de la nave, que el informe estima en una cifra considerable.",
      "Algunas observaciones sobre el lenguaje de las fuentes, que pueden ser útiles en la deliberación. La declaración de la asociación se titula «Los vecinos recuperan su barrio»: el verbo «recuperar» da por hecho que el barrio se había perdido, algo que la propia declaración no explica. El columnista escribe que «la vivienda pública fracasa siempre», una generalización que no acompaña de datos. Y el informe técnico, prudente en casi todo, usa en una ocasión la expresión «no hay alternativa» para referirse a la licitación, cuando en realidad el pleno podría elegir otros procedimientos. Señalo estos recursos no para descalificar a ninguna fuente, sino para que cada miembro del panel pueda pesarlos.",
      "Para la próxima sesión les propongo dos tareas. La primera: identificar en qué ejes las fuentes coinciden y en cuáles discrepan. La segunda: traer por escrito una postura propia que incluya una tesis con su alcance y su condición, la objeción más fuerte que conozcan y su respuesta. No hace falta que coincidamos; hace falta que, cuando discrepemos, sepamos exactamente en qué. Quedo a su disposición para cualquier aclaración antes del jueves.",
    ],
    glossary: [
      { es: "el padrón municipal", note: "registro oficial de los habitantes de un municipio" },
      { es: "el pleno", note: "reunión de todos los concejales de un ayuntamiento, que toma las decisiones" },
      { es: "la rehabilitación", note: "obra para recuperar un edificio y adaptarlo a un nuevo uso" },
    ],
    tasks: [
      {
        id: "c2-20-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la nota.",
        items: [
          {
            q: "¿Qué propósito declara la facilitadora al principio de la nota?",
            options: [
              "Recomendar la opción de vivienda.",
              "Que el panel pueda comparar lo que dice cada fuente sobre las mismas cuestiones.",
              "Corregir los errores del ayuntamiento.",
            ],
            answer: 1,
            why: "Lo dice en el primer párrafo.",
          },
          {
            q: "¿Por qué no se puede comparar el coste del parque con el de las otras opciones a largo plazo?",
            options: [
              "Porque el columnista no da cifras.",
              "Porque el ayuntamiento no ha publicado el informe.",
              "Porque el mantenimiento anual del parque no figura en el informe.",
            ],
            answer: 2,
            why: "Cuarto párrafo.",
          },
          {
            q: "¿Qué hace la facilitadora con los recursos de lenguaje de las fuentes?",
            options: [
              "Los señala para que el panel los pese, sin descalificar a ninguna fuente.",
              "Los usa para descartar la declaración de la asociación.",
              "Los corrige en las fuentes originales.",
            ],
            answer: 0,
            why: "Séptimo párrafo.",
          },
        ],
      },
      {
        id: "c2-20-lectura-mediacion",
        type: "match",
        prompt: "Relaciona cada fragmento de la nota con la destreza que pone en juego.",
        pairs: [
          { left: "aproximadamente el tamaño de dos campos de fútbol", right: "equivalencia para un público no experto" },
          { left: "El informe técnico considera probable que el déficit", right: "paráfrasis que conserva el compromiso" },
          { left: "el ayuntamiento habría recibido una oferta de compra", right: "rumor mantenido en condicional" },
          { left: "expresa la opinión de quienes respondieron, no necesariamente la del conjunto del barrio", right: "corrección del alcance de una cifra" },
          { left: "el verbo «recuperar» da por hecho que el barrio se había perdido", right: "lectura crítica de una presuposición" },
          { left: "Esta omisión no implica necesariamente que no le dé importancia", right: "interpretación prudente que no atribuye intenciones" },
        ],
      },
      {
        id: "c2-20-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa la nota con argumentos propios.",
        items: [
          {
            prompt: "Explica en 100–120 palabras si la nota cumple su promesa de no tomar partido. Busca un fragmento que te parezca perfectamente neutral y otro en el que, a tu juicio, la facilitadora podría inclinar la balanza, y justifica las dos elecciones.",
            model: "En general la cumple. El eje de plazos es un buen ejemplo de neutralidad: recoge la coincidencia de las fuentes, da las cifras del informe con su condición («siempre que la licitación se convoque este año») y presenta la oferta privada como rumor. Donde podría inclinar la balanza es en el cuarto párrafo: al señalar que el mantenimiento del parque no está presupuestado, debilita el argumento del columnista sin hacer lo mismo con los costes de mantenimiento del equipamiento, que tampoco se mencionan. No creo que sea intencionado, pero una mediación totalmente equilibrada habría señalado la misma laguna en las tres opciones.",
            checklist: [
              "Cito un fragmento neutral y otro discutible.",
              "Justifico cada elección.",
              "Uso un lenguaje que no atribuye intenciones sin pruebas.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la nota media entre fuentes y público sin alterar el compromiso de ninguna.",
      items: [
        { quote: "Por eso no la he organizado fuente por fuente, sino por ejes", note: "Mediación para comparar, con foco correctivo «no…, sino…»." },
        { quote: "Esa afirmación es correcta si solo se cuenta la construcción.", note: "Se reconoce lo que la fuente tiene de cierto antes de matizar." },
        { quote: "La recojo aquí, en condicional, porque se ha comentado mucho en el barrio, pero no puede tratarse como un hecho.", note: "Explicitar la decisión de mediación." },
        { quote: "No hace falta que coincidamos; hace falta que, cuando discrepemos, sepamos exactamente en qué.", note: "Antítesis con punto y coma: cierre del texto y del espíritu de la deliberación." },
      ],
    },
  },
  practice: {
    intro: "Ordena, elige, reformula y escribe piezas breves. Termina con la recuperación de todo el último bloque del curso y de algunas clases anteriores.",
    exercises: [
      {
        id: "c2-20-orden",
        type: "order",
        prompt: "Ordena los fragmentos para formar frases bien construidas del ensayo o de la mediación.",
        items: [
          {
            words: ["Es", "cierto", "que", "el", "parque", "es", "más", "barato;", "no", "obstante,", "su", "mantenimiento", "no", "está", "previsto."],
            why: "Concesión, punto y coma y oposición.",
          },
          {
            words: ["Se", "afirma", "que", "la", "nave", "no", "tiene", "valor,", "pero", "los", "datos", "permiten", "matizarlo."],
            why: "Fórmula para pasar de la síntesis a la postura.",
          },
          {
            words: ["Según", "un", "periódico,", "el", "ayuntamiento", "habría", "recibido", "una", "oferta."],
            why: "Rumor atribuido y en condicional.",
          },
        ],
      },
      {
        id: "c2-20-adecuacion",
        type: "context",
        prompt: "Elige la versión adecuada para cada destinatario.",
        items: [
          {
            context: "Explicación oral al panel ciudadano, formado por vecinos no expertos.",
            q: "¿Cómo presentas la superficie de la parcela?",
            options: [
              "La parcela tiene una superficie de doce mil metros cuadrados según el catastro.",
              "La parcela mide 1,2 hectáreas, más o menos como dos campos de fútbol.",
              "La parcela es grandísima, enorme.",
            ],
            answer: 1,
            why: "Cifra exacta con una equivalencia comprensible.",
          },
          {
            context: "Recomendación escrita del panel dirigida al pleno municipal.",
            q: "¿Qué formulación eliges?",
            options: [
              "El panel recomienda destinar la mayor parte de la parcela a vivienda asequible y conservar la nave para uso vecinal.",
              "Queremos casas y punto, que se enteren.",
              "A nivel de vivienda, en base a lo hablado, pedimos casas.",
            ],
            answer: 0,
            why: "Registro formal, impersonal y con propuesta matizada.",
          },
          {
            context: "Respuesta a un vecino que, en el foro, dice: «Ustedes ya lo tienen todo decidido».",
            q: "¿Qué respuesta combina firmeza y cortesía estratégica?",
            options: [
              "Eso es mentira y usted lo sabe.",
              "Bueno, puede ser, no sé, lo que usted diga.",
              "Entiendo que lo perciba así; precisamente por eso publicamos todas las fuentes. Si me permite, le explico cómo votaremos.",
            ],
            answer: 2,
            why: "Reconoce la percepción, no cede en el fondo y ofrece información.",
          },
        ],
      },
      {
        id: "c2-20-reformular",
        type: "transform",
        prompt: "Reformula cada frase según la instrucción.",
        items: [
          {
            source: "El parque es más barato. Por eso muchos vecinos lo prefieren.",
            instruction: "Une las dos oraciones con «de ahí que» y ajusta el modo verbal.",
            answers: ["El parque es más barato, de ahí que muchos vecinos lo prefieran."],
            why: "«De ahí que» + subjuntivo.",
          },
          {
            source: "La asociación demuestra que el 80 % de los vecinos quiere un parque.",
            instruction: "Reformúlala con fidelidad: la fuente es una encuesta en línea de la asociación.",
            answers: ["Según una encuesta en línea de la asociación, el 80 % de quienes respondieron prefiere un parque.", "Según una encuesta en línea de la asociación, el 80 % de quienes respondieron quiere un parque."],
            why: "Se baja el verbo de atribución y se corrige el alcance.",
          },
          {
            source: "Los vecinos recuperan su barrio con el nuevo parque.",
            instruction: "Escríbela de forma neutra, sin la presuposición de «recuperar», con el ayuntamiento como agente.",
            answers: ["El ayuntamiento construirá un parque en el barrio.", "El ayuntamiento proyecta un parque en el barrio."],
            why: "Desaparece la presuposición y aparece el agente.",
          },
        ],
      },
      {
        id: "c2-20-microescritura",
        type: "open",
        prompt: "Escribe tres piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe en 40–60 palabras tu tesis matizada sobre las cocheras: posición, alcance y condición.",
            model: "Defiendo que alrededor de dos tercios de la parcela se destinen a vivienda de alquiler asequible, siempre que la nave de 1924 se rehabilite como espacio vecinal y que el tercio restante se convierta en una zona verde abierta, no en un patio privado de los nuevos edificios.",
            checklist: [
              "Mi tesis tiene posición, alcance y condición.",
              "Es defendible con los datos de las fuentes.",
            ],
          },
          {
            prompt: "Escribe en 60–80 palabras la objeción más fuerte a tu tesis y tu respuesta, con la secuencia concesión, oposición y consecuencia.",
            model: "Es cierto que el barrio es el segundo del distrito con menos zonas verdes, y que una parcela así no volverá a quedar libre en décadas; no obstante, el informe considera probable que el déficit de vivienda sea todavía mayor, y mi propuesta reserva un tercio para zona verde. De ahí que no se trate de elegir entre casas y árboles, sino de repartir bien el suelo.",
            checklist: [
              "Presento la objeción en su mejor versión.",
              "Uso concesión, oposición y consecuencia.",
              "«De ahí que» va con subjuntivo.",
            ],
          },
          {
            prompt: "Escribe en 50–70 palabras un párrafo de mediación para el panel sobre los costes, con una equivalencia comprensible y sin cambiar el compromiso de ninguna fuente.",
            model: "Sobre los costes, el informe técnico señala que la vivienda sería la opción más cara de construir, aunque podría recuperarse en parte con los alquileres. El columnista afirma que el parque es la más barata, lo cual es cierto si solo se cuenta la obra. Ninguna fuente, sin embargo, calcula cuánto costaría mantener cada opción durante veinte años.",
            checklist: [
              "Organizo por eje, no por fuente.",
              "Conservo el compromiso de cada fuente.",
              "Señalo lo que falta en los datos.",
            ],
          },
        ],
      },
      {
        id: "c2-20-recuperacion",
        type: "open",
        prompt: "Recupera las clases de las semanas 16 a 19 y algunas anteriores con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G229 (paráfrasis fiel). Estímulo, frase del informe técnico: «Es probable que la rehabilitación de la nave encarezca el proyecto en algunos casos». Un vecino lo resume como «El informe dice que la nave dispara el coste». Explica qué ha cambiado y escribe un resumen fiel.",
            model: "El resumen convierte una probabilidad en una afirmación categórica, borra el alcance «en algunos casos» y añade una valoración con «dispara». Resumen fiel: «Según el informe, es probable que rehabilitar la nave encarezca el proyecto en algunas de las opciones».",
            checklist: [
              "Señalo el cambio de certeza, de alcance y de léxico.",
              "Mi resumen conserva los tres elementos.",
            ],
          },
          {
            prompt: "Recuperación de la clase G230 (conectores raros). Estímulo: «Habida cuenta que la nave está protegida, y toda vez que el panel se reúne, conviene revisar los planos». Corrige los conectores y explica su valor.",
            model: "«Habida cuenta de que la nave está protegida, conviene revisar los planos cada vez que el panel se reúna». «Habida cuenta de que» necesita la preposición; «toda vez que» es causal («dado que») y aquí se quería decir «cada vez que».",
            checklist: [
              "Restituyo «de» en «habida cuenta de que».",
              "Distingo «toda vez que» de «cada vez que».",
            ],
          },
          {
            prompt: "Recuperación de la clase G231 (puntuación avanzada). Estímulo: «Las opciones son: vivienda, que propone el informe, equipamiento, que defiende un grupo de vecinos y parque, que pide la asociación». Puntúa la frase correctamente y explica cada cambio.",
            model: "«Las opciones son tres: vivienda, que propone el informe; equipamiento, que defiende un grupo de vecinos, y parque, que pide la asociación». Añado «tres» para justificar los dos puntos, uso punto y coma entre elementos que ya llevan comas y coma delante de la «y» final.",
            checklist: [
              "Justifico o elimino los dos puntos.",
              "Uso punto y coma en la enumeración compleja.",
            ],
          },
          {
            prompt: "Recuperación de la clase G232 (ortografía académica). Estímulo: «El ex-concejal dijo que el 80% de los 12.000 vecinos aun no sabe porque se cerraron las cocheras». Corrige la frase según la norma académica.",
            model: "«El exconcejal dijo que el 80 % de los 12 000 vecinos aún no sabe por qué se cerraron las cocheras». Prefijo unido, espacio antes de %, espacio en los millares, «aún» con tilde porque significa «todavía» y «por qué» separado y con tilde en la interrogativa indirecta.",
            checklist: [
              "Corrijo prefijo, porcentaje y millares.",
              "Corrijo «aún» y «por qué».",
            ],
          },
          {
            prompt: "Recuperación de la clase G233 (cohesión de largo alcance). Estímulo: al principio del cuarto párrafo de tu ensayo escribes «Ella tiene razón en lo de los árboles», y la última mención a la presidenta de la asociación está en el primer párrafo, junto a la técnica de urbanismo. Reescribe la frase.",
            model: "«La presidenta de la asociación vecinal, a cuya declaración me referí al principio, tiene razón en lo que respecta a las zonas verdes». Con dos mujeres mencionadas y tres párrafos de distancia, hace falta el cargo completo y un recordatorio.",
            checklist: [
              "Sustituyo el pronombre por una mención explícita.",
              "Añado un recordatorio del antecedente.",
            ],
          },
          {
            prompt: "Recuperación de la clase G234 (sesgos sintácticos). Estímulo, titular: «Se paraliza la vivienda pública en las cocheras». Explica qué hace la construcción y escribe una versión que muestre al agente si se sabe que fue el pleno el que aplazó la votación.",
            model: "El «se» presenta la paralización como algo que ocurre solo y, además, «paraliza» exagera un aplazamiento. Si el agente se conoce, conviene mostrarlo: «El pleno aplaza la votación sobre la vivienda pública en las cocheras».",
            checklist: [
              "Explico qué borra la construcción.",
              "Muestro al agente sin exagerar el hecho.",
            ],
          },
          {
            prompt: "Recuperación de la clase G222 (cortesía estratégica). Estímulo: en el foro, un concejal te interrumpe dos veces. Escribe cómo pedirías la palabra con firmeza y sin dañar la imagen de nadie.",
            model: "«Disculpe, señor concejal, entiendo que quiera aclararlo, y le daré con gusto la palabra después; si me permite, termino esta idea, que es breve». Reconozco su intención, fijo un orden y mitigo con «si me permite», sin ceder el turno.",
            checklist: [
              "Reconozco la intención del otro.",
              "Recupero el turno con una fórmula mitigada y firme.",
            ],
          },
          {
            prompt: "Recuperación de la clase G208 (condicional de rumor). Estímulo, mensaje de un grupo vecinal: «El fondo ya ha comprado la parcela». Solo existe una noticia sin fuentes identificadas. Reescribe el dato para la nota del panel y explica por qué.",
            model: "«Según una información periodística, un fondo privado habría presentado una oferta por la parcela; el ayuntamiento no lo ha confirmado». El mensaje convierte un rumor en hecho e incluso amplía «oferta» a «compra». El condicional de rumor y la atribución devuelven el dato a su grado real de certeza.",
            checklist: [
              "Uso el condicional de rumor y la atribución.",
              "Corrijo la exageración del mensaje.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta tu ensayo argumentativo final (420–560 palabras) sobre el futuro de las cocheras o sobre un conflicto parecido de tu ciudad. Debe tener una tesis matizada, integrar al menos dos fuentes con su compromiso exacto, refutar con justicia la objeción más fuerte, usar con mesura los recursos retóricos y terminar con una conclusión que sintetice. Después, revísalo en las cinco capas.",
    context: "El ensayo se publicará en el volumen que el ayuntamiento edita con las posturas del panel. Lo leerán vecinos, concejales y técnicos. Es tu última tarea del curso: demuestra en ella todo lo que has repasado, sin exhibirlo. Puedes usar las tres fuentes de esta semana o inventar otras con la misma lógica.",
    steps: [
      "Escribe tu tesis con posición, alcance y condición, y anota la objeción más fuerte que conoces.",
      "Elige dos fuentes y copia la frase que vas a parafrasear o citar de cada una; marca su grado de certeza.",
      "Redacta sin copiar el modelo: introducción con la tesis, dos párrafos de argumentos, un párrafo de contraargumento justo y una conclusión que sintetice.",
      "Revisa el ensayo capa por capa con la lista de control: corrige primero el argumento y las fuentes, después la cohesión, los conectores y la puntuación, y por último la ortografía y el registro.",
    ],
    useLanguage: [
      "Defiendo que…, siempre que…",
      "Según el informe, es probable que… / La asociación sostiene que…",
      "Es cierto que…; no obstante, …, de ahí que + subjuntivo",
      "Admitamos que… / Por mucho que + subjuntivo…",
      "Se afirma que…, pero los datos permiten matizarlo.",
      "Quien esto escribe… / En suma, …",
    ],
    model: [
      "Pocas veces un barrio tiene la oportunidad de decidir qué hacer con una hectárea de suelo público en plena ciudad. Las cocheras de la calle del Olmo, cerradas desde 2016, son esa oportunidad, y el debate sobre su futuro se ha planteado como una elección entre tres opciones: vivienda, equipamiento o parque. Quien esto escribe defiende que unos dos tercios de la parcela se destinen a vivienda de alquiler asequible, siempre que la nave de 1924 se rehabilite como espacio vecinal y el resto se convierta en una zona verde abierta a todo el barrio.",
      "El primer argumento es la magnitud del problema. Según el informe técnico del área de urbanismo, es probable que el déficit de vivienda asequible sea el más grave del distrito: las solicitudes de vivienda pública se han triplicado en una década. El propio informe reconoce que no dispone de datos de este año, de modo que la cifra exacta puede variar; la tendencia, en cambio, es difícil de discutir. Cualquier vecino lo sabe: los jóvenes que crecieron aquí se marchan porque no pueden pagar un alquiler.",
      "El segundo argumento es la durabilidad. Un parque mejora la vida del barrio desde el primer día; la vivienda, además, la cambia durante generaciones. Y, habida cuenta de que no queda en el barrio ningún otro solar de este tamaño, renunciar ahora a construir vivienda equivale a renunciar a ella durante décadas.",
      "Es cierto que el barrio es el segundo del distrito con menos zonas verdes, como señala la asociación vecinal con datos del padrón, y que un parque sería más barato de construir. No obstante, ninguna de las fuentes ha calculado cuánto costaría mantenerlo durante veinte años, y mi propuesta no elimina la zona verde: la reduce a un tercio de la parcela, lo que seguiría siendo el mayor espacio verde del barrio. De ahí que la alternativa no sea elegir entre casas y árboles, sino repartir bien el suelo. Se afirma, por otra parte, que el 80 % de los vecinos quiere un parque; los datos permiten matizarlo, porque ese porcentaje procede de una encuesta en línea que respondieron unas seiscientas personas. Su opinión merece respeto, pero no representa necesariamente al conjunto del barrio.",
      "Queda la nave. Por mucho que su rehabilitación encarezca el proyecto, derribarla sería un error irreversible: es el único testimonio de la historia obrera del barrio y, según el informe técnico, es compatible con cualquiera de los usos previstos. Convertirla en espacio vecinal permitiría, además, que la asociación, que tanto ha hecho por las zonas verdes, gestionara un lugar propio.",
      "En suma, la vivienda responde a la necesidad más grave; la zona verde, a una carencia real, y la nave, a una deuda con la memoria del barrio. No estaría de más que el ayuntamiento publicara los costes de esta opción mixta antes de la votación del pleno. Lo que no podemos permitirnos es decidir sin datos, ni dejar que una parcela así espere otros diez años.",
    ],
    checklist: [
      "La tesis tiene posición, alcance y condición.",
      "Cada fuente conserva su certeza, su atribución y su alcance.",
      "El contraargumento presenta la mejor versión de la objeción y usa «de ahí que» con subjuntivo.",
      "Cada referente se identifica sin esfuerzo y los conectores tienen su valor exacto.",
      "Puntuación, ortografía y registro siguen la norma; no hay «en base a» ni «a nivel de».",
      "La conclusión sintetiza el recorrido en lugar de repetir la tesis.",
    ],
    words: [420, 560],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación. Es la última tarea oral del curso: date tiempo.",
    tasks: [
      {
        title: "Mediar y después defender ante el panel",
        prompt: "Tienes cinco minutos ante el panel. En los dos primeros, sintetiza por ejes lo que dicen las tres fuentes, sin tomar partido y con equivalencias comprensibles. Después, anuncia con claridad que pasas a tu postura y defiéndela con una tesis matizada, la objeción más fuerte y tu respuesta.",
        prep: [
          "Prepara una ficha con los cuatro ejes y un dato de cada fuente.",
          "Prepara la frase que marcará el paso de la síntesis a la postura.",
          "Ensaya la secuencia concesión, oposición y consecuencia con sus pausas.",
        ],
        seconds: 300,
        model: "Buenas tardes. Empiezo por las fuentes, sin opinar. Sobre las necesidades del barrio, el informe técnico considera probable que el mayor problema sea la vivienda; la asociación recuerda que somos el segundo barrio con menos zonas verdes… Hasta aquí, las fuentes. Ahora, si me permiten, paso a mi postura…",
        selfCheck: [
          "La síntesis no deja ver mi opinión.",
          "Marco con claridad el paso a mi postura.",
          "Las pausas separan concesión, oposición y consecuencia.",
        ],
      },
      {
        title: "Responder a una objeción en directo",
        prompt: "Un miembro del panel te dice: «Con todo respeto, usted habla de datos, pero los datos del informe son del ayuntamiento, que es parte interesada». Reconoce lo que tiene de razonable la objeción, responde con firmeza y propón una manera de comprobar los datos.",
        prep: [
          "Busca qué tiene de cierto la objeción.",
          "Prepara una propuesta concreta de verificación.",
        ],
        seconds: 150,
        model: "Es una objeción justa, y me alegra que la plantee. El informe es del ayuntamiento, sí, y conviene leerlo con cautela. Dicho eso, el dato principal, el de las solicitudes de vivienda, procede de un registro público que cualquiera puede consultar. No estaría de más que el panel pidiera a una universidad que lo revisara antes de votar…",
        selfCheck: [
          "Reconozco lo razonable de la objeción.",
          "Distingo la fuente del dato.",
          "Propongo una verificación concreta.",
        ],
      },
      {
        title: "Cerrar el curso: tu propio recorrido",
        prompt: "Graba una reflexión de dos minutos sobre lo que has aprendido en este curso. Elige tres destrezas que hoy usas mejor que al principio, pon un ejemplo de cada una tomado de tu vida real, reconoce una que todavía te cuesta y explica qué harás para seguir mejorándola.",
        prep: [
          "Repasa tus ensayos y grabaciones anteriores si los conservas.",
          "Elige ejemplos concretos, no generalidades.",
        ],
        seconds: 120,
        selfCheck: [
          "Doy tres ejemplos concretos.",
          "Reconozco una dificultad sin restarle importancia.",
          "Termino con un plan realista.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la última clase tu ensayo revisado, tu síntesis para el panel y una reflexión sobre todo el curso. Estas tarjetas te ayudan a aprovechar ese tiempo con tu profesor.",
    cards: [
      {
        move: "Defiende",
        task: "Presenta tu tesis en un minuto y pide a tu profesor que formule la objeción más dura que se le ocurra; respóndela con la secuencia concesión, oposición y consecuencia.",
        phrases: ["Es cierto que…; no obstante…", "De ahí que…"],
      },
      {
        move: "Revisa",
        task: "Pide a tu profesor que lea tu ensayo en una sola capa (por ejemplo, fuentes o cohesión) y te señale solo los problemas de esa capa.",
        phrases: ["¿Esta paráfrasis sube el compromiso?", "¿Se entiende a quién me refiero aquí?"],
      },
      {
        move: "Media",
        task: "Explica a tu profesor, como si fuera un vecino sin formación técnica, lo que dicen las tres fuentes sobre los costes.",
        phrases: ["Para que nos hagamos una idea…", "Esto lo dice el informe; esto otro, la asociación…"],
      },
      {
        move: "Reflexiona",
        task: "Cuéntale qué clase del curso te cambió más la manera de leer o de escribir y pídele una recomendación para seguir aprendiendo por tu cuenta.",
        phrases: ["Antes de este curso yo…", "¿Qué me recomiendas leer ahora?"],
      },
    ],
    bring: "Tu ensayo final revisado, tu párrafo de mediación, la grabación de tu defensa y tu reflexión sobre el curso.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Cuál de estas frases es una tesis matizada?",
        options: [
          "La cultura es lo más importante para un barrio.",
          "El equipamiento cultural debería ocupar la nave histórica, siempre que su gestión sea vecinal.",
          "Hay que hacer algo con las cocheras.",
        ],
        answer: 1,
        why: "Posición, alcance («la nave histórica») y condición.",
      },
      {
        type: "choice",
        q: "Al mediar para el panel, una noticia sin fuentes dice que hay una oferta privada. ¿Cómo la presentas?",
        options: [
          "Como un hecho, para no confundir al panel.",
          "No la menciono nunca.",
          "En condicional y atribuida, indicando que no está confirmada.",
        ],
        answer: 2,
        why: "Un rumor se media como rumor.",
      },
      {
        type: "listen",
        q: "Escucha el fragmento. ¿Qué hace quien habla?",
        options: [
          "Pasa de la síntesis de una fuente a su propia postura.",
          "Ataca a la persona que escribió la columna.",
          "Cita literalmente el informe técnico.",
        ],
        answer: 0,
        why: "«Se afirma que…, pero los datos permiten matizarlo».",
        audio: "Se afirma que el parque sería la opción más barata, pero los datos permiten matizarlo: nadie ha calculado su mantenimiento.",
        voice: "es-ES-f",
      },
      {
        type: "gap",
        q: "El barrio no tiene otros solares libres, de ahí que la decisión ___ irreversible. [resultar]",
        answers: [["resulte"]],
        hint: "«De ahí que» introduce una consecuencia y exige el subjuntivo.",
        why: "«De ahí que resulte».",
      },
      {
        type: "gap",
        q: "Por mucho que el equipamiento ___ más usuarios, su coste anual es el más alto. [atraer]",
        answers: [["atraiga"]],
        hint: "«Por mucho que» introduce una concesión y suele llevar subjuntivo.",
        why: "«Por mucho que atraiga».",
      },
      {
        type: "transform",
        source: "Los partidarios del parque solo quieren un sitio para pasear al perro.",
        instruction: "Reescribe la objeción en su versión más fuerte, sin caricatura ni ataque personal, a partir del dato de las zonas verdes.",
        answers: ["Los partidarios del parque señalan que el barrio es uno de los que menos zonas verdes tiene del distrito.", "Quienes defienden el parque recuerdan que el barrio tiene muy pocas zonas verdes."],
        why: "El contraargumento justo empieza por presentar bien la postura contraria.",
      },
      {
        type: "error",
        sentence: "En base a la encuesta, el parque es la opción que prefieren los vecinos.",
        answers: ["Según la encuesta, el parque es la opción que prefieren quienes respondieron.", "Según la encuesta en línea, el parque es la opción preferida por quienes respondieron."],
        why: "«En base a» se desaconseja, y el alcance correcto es «quienes respondieron».",
      },
      {
        type: "error",
        sentence: "El informe es prudente, de ahí que sus conclusiones son fiables.",
        answers: ["El informe es prudente, de ahí que sus conclusiones sean fiables."],
        why: "«De ahí que» lleva subjuntivo.",
      },
      {
        type: "order",
        words: ["Admitamos", "que", "el", "parque", "es", "más", "barato", "de", "construir."],
        why: "Concesión ensayística con «Admitamos que».",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un compañero de clase la diferencia entre la síntesis de un mediador y el ensayo de un autor que toma postura, a partir del caso de las cocheras.",
        model: "La síntesis del mediador organiza lo que dicen las fuentes para que otros decidan: agrupa por ejes, traduce las cifras y conserva el compromiso de cada fuente, sin dejar ver su opinión. El ensayo, en cambio, toma postura: elige una tesis matizada, usa las fuentes como apoyo y responde a la objeción más fuerte. En el caso de las cocheras, la facilitadora explica qué dicen el informe, el columnista y la asociación; el autor del ensayo defiende un reparto concreto de la parcela. Las dos tareas exigen fidelidad a las fuentes; solo la segunda exige posición.",
        checklist: [
          "Explico qué hace cada género.",
          "Uso el caso de las cocheras.",
          "Señalo lo que comparten.",
        ],
      },
      {
        type: "open",
        prompt: "Última pregunta del curso. Escribe en 80–100 palabras qué destreza de este nivel te parece más útil fuera del aula y por qué, con un ejemplo de tu vida real.",
        model: "Para mí, la más útil es la paráfrasis fiel. En mi trabajo resumo informes para personas que no tienen tiempo de leerlos, y antes, sin darme cuenta, convertía los «podría» en certezas para que el resumen sonara más claro. Ahora, antes de enviar un resumen, compruebo frase por frase que no he subido ni bajado el compromiso de la fuente. Mis compañeros lo han notado: se fían más de mis resúmenes, precisamente porque ya no prometen más de lo que dicen los datos.",
        checklist: [
          "Elijo una destreza concreta.",
          "Doy un ejemplo real.",
          "Explico el efecto que tiene.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Escribo y reviso en capas un ensayo argumentativo completo con tesis matizada, contraargumento justo y conclusión que sintetiza.",
      "Medio varias fuentes para un público no experto, por ejes y con equivalencias, sin cambiar el compromiso de ninguna.",
      "Defiendo mi postura oralmente con firmeza y cortesía estratégica, y respondo a objeciones en directo.",
      "Integro la paráfrasis fiel, los conectores precisos, la puntuación y la ortografía académicas, la cohesión de largo alcance y la lectura crítica en un mismo texto.",
    ],
    review: [
      "Dentro de dos días, vuelve a leer tu ensayo y revísalo solo en la capa que más te costó; anota qué cambiaste.",
      "Dentro de una semana, busca un debate público real de tu ciudad, lee al menos dos fuentes enfrentadas y escribe una síntesis por ejes de 150 palabras.",
      "Dentro de un mes, escribe un ensayo breve sobre un tema nuevo sin mirar este módulo y compáralo con el de hoy: así verás qué destrezas ya son tuyas.",
      "Has llegado al final del curso. Sigue leyendo prensa de distintas tendencias, sigue escribiendo y, sobre todo, sigue preguntándote, ante cada texto, quién dice qué, con cuánta seguridad y para quién.",
    ],
  },
  related: [
    { path: "/gramatica/produccion-y-revision-de-ensayo-argumentativo", label: "Clase: Producción y revisión de ensayo argumentativo C2" },
    { path: "/gramatica/proyecto-c2-mediacion-sintesis-y-defensa", label: "Clase: Proyecto C2: mediación, síntesis y defensa de posturas" },
  ],
};
