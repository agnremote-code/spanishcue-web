import type { PageRewrite } from "../material-ele/seo-rewrites";

/**
 * SEO plan, step 6, batch L2b (docs/seo-plan/05_BRIEFS 29–34 and 40): one hand-written
 * section per mini-app hub, with the element its brief names. The rule pages under each
 * hub are noindex (batch N3), so the hub is the page that has to stand on its own.
 * Titles and descriptions stay the ones the hubs compute from their data, so their counts
 * cannot drift.
 */
const rewrites: Record<string, PageRewrite> = {
  "/por-o-para": {
    lote: "L2",
    sections: [
      {
        id: "arbol-por-para",
        title: "Tres preguntas para decidir entre por y para",
        intro: "Casi todas las dudas se resuelven con una de estas tres preguntas. Hazlas en orden y para en la primera que encaje.",
        blocks: [
          { type: "table", caption: "Árbol de decisión entre por y para en tres preguntas", head: ["Pregunta", "Si la respuesta es…", "Usa", "Ejemplo", "Error que evita"], rows: [
            ["1. ¿Es la causa o el objetivo?", "La causa, lo que ya pasó o lo que te empuja", "por", "Lo hizo por miedo. Gracias por venir.", "«Gracias para venir»."],
            ["", "El objetivo, lo que quieres conseguir", "para", "Estudio para aprobar.", "«Estudio por aprobar»."],
            ["2. ¿Es el camino o la meta?", "Un lugar por donde pasas, o una zona aproximada", "por", "Paseamos por el parque.", "«Paseamos para el parque»."],
            ["", "El destino al que vas", "para", "Salgo para el aeropuerto.", "Confundir «salgo por el parque» (paso) con «salgo para el parque» (destino)."],
            ["3. ¿Es cuánto dura o cuándo termina?", "Una duración", "por, durante o nada", "Me voy por dos semanas. Viví allí tres años.", "«Viví allí para tres años»."],
            ["", "Un plazo, una fecha límite", "para", "El informe es para el lunes.", "«El informe es por el lunes»."],
          ] },
          { type: "p", text: "Si ninguna de las tres encaja, el uso suele ser una expresión fija: por eso, por fin, por supuesto, para mí (opinión), para ser extranjero (comparación). Esas se aprenden enteras, en las tarjetas de uso de arriba." },
          { type: "p", text: "Para llevarlo a una clase completa con actividades, mira [por y para en Material ELE](/material-ele/por-y-para)." },
        ],
      },
    ],
  },

  "/ser-o-estar": {
    lote: "L2",
    sections: [
      {
        id: "errores-ser-estar",
        title: "Cinco errores con ser y estar y la pregunta que resuelve cada uno",
        intro: "La regla «permanente o temporal» falla justo en los casos que más se equivocan. Estas preguntas funcionan mejor.",
        blocks: [
          { type: "table", caption: "Errores frecuentes con ser y estar y la pregunta que los corrige", head: ["Lo que dice el alumno", "Lo correcto", "La pregunta que lo resuelve"], rows: [
            ["«Soy en Madrid».", "Estoy en Madrid.", "¿Dónde está una persona o una cosa? Siempre estar, aunque viva allí toda la vida."],
            ["«La fiesta está en mi casa».", "La fiesta es en mi casa.", "¿Es un evento (fiesta, reunión, examen)? Su lugar va con ser: es donde ocurre."],
            ["«Es muerto».", "Está muerto.", "¿Es el resultado de un cambio? Estar, aunque el cambio no tenga vuelta atrás."],
            ["«Soy aburrido» queriendo decir que se aburre.", "Estoy aburrido.", "¿Hablas de cómo te sientes ahora o de cómo eres? Estar para el estado; ser aburrido es aburrir a los demás."],
            ["«Estoy profesor».", "Soy profesor.", "¿Es lo que alguien es: profesión, origen, identidad? Ser, aunque cambie de trabajo el año que viene."],
          ] },
          { type: "p", text: "Los adjetivos que cambian de significado (listo, malo, rico) están en la sección de arriba. Para una clase completa con actividades, mira [ser y estar en Material ELE](/material-ele/ser-y-estar)." },
        ],
      },
    ],
  },

  "/indefinido-o-imperfecto": {
    lote: "L2",
    sections: [
      {
        id: "mapa-marcadores",
        title: "Mapa de marcadores: cuáles deciden el tiempo y cuáles no",
        intro: "Los marcadores de esta página no pesan igual. Unos casi obligan a un tiempo; otros admiten los dos, y lo que cambia es lo que cuentas.",
        blocks: [
          { type: "table", caption: "Marcadores temporales según el tiempo que piden", head: ["Tipo", "Marcadores", "Ejemplo", "Error frecuente"], rows: [
            ["Piden indefinido", "ayer, anoche, el otro día, la semana pasada, de repente, una vez, al final", "Ayer fui al cine. De repente empezó a llover.", "«De repente llovía»: «de repente» abre una acción nueva, va en indefinido."],
            ["Piden imperfecto", "todos los días, normalmente, de niño, en aquella época, a menudo, cada verano", "De niño jugaba en la calle.", "«De niño jugué en la calle» para un hábito."],
            ["Admiten los dos, con otro sentido", "siempre, antes, cuando, muchas veces", "Siempre iba al mismo bar (costumbre). Siempre fui sincero contigo (balance de una etapa cerrada).", "Corregir uno de los dos como error: los dos son correctos, dicen cosas distintas."],
            ["Marcan duración cerrada", "durante, toda la tarde, dos horas", "Estuve en el cine dos horas.", "«Estaba en el cine dos horas»: si dices cuánto duró, la acción está cerrada."],
            ["Marcan fondo", "mientras", "Mientras comía, sonó el teléfono.", "«Mientras comí, sonó»: la acción que dura es el fondo, en imperfecto."],
          ] },
          { type: "p", text: "Para la hora y la edad en el pasado («eran las diez», «tenía veinte años») la regla es más simple: casi siempre imperfecto. Para una clase completa, mira [indefinido e imperfecto en Material ELE](/material-ele/indefinido-e-imperfecto)." },
        ],
      },
    ],
  },

  "/ejercicios-de-imperativo": {
    lote: "L2",
    sections: [
      {
        id: "ocho-irregulares",
        title: "Los ocho irregulares de tú, con su negativo",
        intro: "Son ocho y no tienen regla: hay que aprenderlos de memoria. En el negativo, en cambio, todos vuelven al presente de subjuntivo.",
        blocks: [
          { type: "table", caption: "Imperativo irregular de tú: forma afirmativa, negativa y con pronombre", head: ["Infinitivo", "Afirmativo", "Negativo", "En una frase", "Error frecuente"], rows: [
            ["venir", "ven", "no vengas", "vente", "«No ven»."],
            ["decir", "di", "no digas", "dime, dímelo", "«Dime lo», separado."],
            ["salir", "sal", "no salgas", "sal de ahí", "«Sale» (es la forma de usted o de él)."],
            ["hacer", "haz", "no hagas", "hazlo", "«No haz»."],
            ["tener", "ten", "no tengas", "tenlo en cuenta", "«Tiene cuidado»."],
            ["ir", "ve", "no vayas", "vete", "«No ve» o «no vas»."],
            ["poner", "pon", "no pongas", "ponte, póntelo", "«Pónte», con tilde: con un solo pronombre no lleva."],
            ["ser", "sé", "no seas", "sé tú mismo", "«Se» sin tilde, que se confunde con el pronombre."],
          ] },
          { type: "p", text: "Para alumnos angloparlantes circula un truco para recordar las ocho formas en orden: ven, di, sal, haz, ten, ve, pon, sé, que en inglés suena a «Vin Diesel has ten weapons». Para la regla de la tilde con pronombres, mira [el imperativo en Material ELE](/material-ele/imperativo)." },
        ],
      },
    ],
  },

  "/ejercicios-de-gustar": {
    lote: "L2",
    sections: [
      {
        id: "lo-que-gusta",
        title: "Lo que gusta es el sujeto: nueve verbos en un solo cuadro",
        intro: "El alumno dice «yo gusto el café» porque piensa en la persona como sujeto. En estos nueve verbos, el sujeto es lo que gusta, duele o falta, y el verbo concuerda con eso.",
        blocks: [
          { type: "table", caption: "Verbos como gustar con concordancia en singular y plural", head: ["Verbo", "Con algo singular o un infinitivo", "Con algo plural", "Error frecuente"], rows: [
            ["gustar", "Me gusta el café. Me gusta bailar.", "Me gustan los perros.", "«Me gustan el café»."],
            ["encantar", "Nos encanta esta ciudad.", "Nos encantan las playas.", "«Me encanta mucho»: encantar ya es mucho."],
            ["doler", "Me duele la cabeza.", "Me duelen los pies.", "«Tengo dolor la cabeza» o «me duele mi cabeza»."],
            ["interesar", "Le interesa la política.", "Le interesan los idiomas.", "«Es interesado en…»."],
            ["faltar", "Te falta un papel.", "Te faltan dos firmas.", "«Te falta dos firmas»."],
            ["quedar", "Me queda una semana.", "Me quedan diez euros.", "«Me queda diez euros»."],
            ["molestar", "Les molesta el ruido.", "Les molestan las moscas.", "«Molesto el ruido»."],
            ["importar", "¿Te importa esperar?", "No me importan los detalles.", "«No me importa los detalles»."],
            ["parecer", "Me parece bien.", "Me parecen caros.", "«Pienso que me parece»: sobra uno de los dos."],
          ] },
          { type: "p", text: "Y la «a» de la persona: «A Juan le gusta», no «Juan le gusta». Si nombras a la persona, va con «a» y el pronombre se queda: «a mí me gusta», nunca «a mí gusta». Para una clase completa, mira [gustar en Material ELE](/material-ele/gustar)." },
        ],
      },
    ],
  },

  "/ejercicios-de-pronombres": {
    lote: "L2",
    sections: [
      {
        id: "le-lo-se-lo",
        title: "De «le lo» a «se lo», paso a paso",
        intro: "El error «le lo doy» viene de aplicar bien dos reglas y olvidar la tercera. Este ejercicio la hace visible con regalos y favores.",
        blocks: [
          { type: "table", caption: "Sustitución paso a paso del objeto directo e indirecto hasta se lo", head: ["Frase de partida", "1. Objeto directo → lo, la, los, las", "2. Objeto indirecto → le, les", "3. Le o les delante de lo → se"], rows: [
            ["Doy el regalo a mi hermana.", "Lo doy a mi hermana.", "Le lo doy. (todavía no)", "Se lo doy."],
            ["Mandé las fotos a mis padres.", "Las mandé a mis padres.", "Les las mandé. (todavía no)", "Se las mandé."],
            ["¿Prestas el coche a Luis?", "¿Lo prestas a Luis?", "¿Le lo prestas? (todavía no)", "¿Se lo prestas?"],
            ["Voy a explicar la regla a los alumnos.", "La voy a explicar a los alumnos.", "Les la voy a explicar. (todavía no)", "Se la voy a explicar. / Voy a explicársela."],
          ] },
          { type: "p", text: "Dos cosas que el alumno pregunta siempre. Primero, «se» no es reflexivo aquí: es «le» con otra forma, así que el contexto dice a quién se refiere. Segundo, con infinitivo y gerundio los pronombres van delante del verbo conjugado o pegados al final, pero no en los dos sitios: «lo voy a comprar» o «voy a comprarlo», nunca «lo voy a comprarlo»." },
          { type: "p", text: "Para una clase completa con actividades, mira [pronombres de objeto en Material ELE](/material-ele/pronombres-de-objeto)." },
        ],
      },
    ],
  },

  "/verbos-con-preposicion": {
    lote: "L2",
    sections: [
      {
        id: "calcos",
        title: "El error según la lengua del alumno: calcos del inglés y del portugués",
        intro: "Muchos errores con preposiciones no son de español: son de la lengua materna. Si sabes cuál es, sabes qué error esperar.",
        blocks: [
          { type: "table", caption: "Verbos con preposición y el calco habitual del inglés y del portugués", head: ["En español", "Calco del inglés", "Calco del portugués"], rows: [
            ["soñar con", "«soñar de» o «soñar sobre» (dream of, dream about)", "Sin problema: «sonhar com» lleva la misma preposición."],
            ["pensar en (una persona)", "«pensar de» o «pensar sobre ti» (think of, think about)", "Sin problema: «pensar em»."],
            ["depender de", "«depender en» (depend on)", "Sin problema: «depender de»."],
            ["enamorarse de", "«enamorarse con» (fall in love with)", "«enamorarse por», por «apaixonar-se por»."],
            ["casarse con", "«casarse a» (marry someone)", "Sin problema: «casar-se com»."],
            ["consistir en", "«consistir de» (consist of)", "Sin problema: «consistir em»."],
            ["contar con", "«contar en» (count on)", "Sin problema: «contar com»."],
            ["llegar a (un lugar)", "«llegar en» (arrive in)", "«llegar en casa», por «chegar em casa» (Brasil)."],
            ["tardar en", "«tardar para» o sin preposición (take time to)", "«tardar para», por «demorar para»."],
          ] },
          { type: "p", text: "Ojo con «pensar sobre»: con un tema es correcto («pensar sobre una propuesta» es reflexionar sobre ella). El error es con personas: «pienso en ti», no «pienso sobre ti». Y al revés que en portugués, «gustar» no lleva «de»: «me gusta el café», no «gusto de café» ni «me gusta de café»." },
          { type: "p", text: "Para trabajar las preposiciones desde el principio, mira [las preposiciones en Material ELE](/material-ele/preposiciones)." },
        ],
      },
    ],
  },
};

export const miniAppRewrites: ReadonlyMap<string, PageRewrite> = new Map(Object.entries(rewrites));
