import type { Module } from "../../types";

/**
 * B2 · semana 15 · punto de control. Autoestudio espejo de G155 (comparativas proporcionales:
 * cuanto más, más) y G156 (conectores de concesión y objeción), con integración de las semanas 11 a 14
 * (G147–G154). Repaso autónomo con una consulta ciudadana ficticia sobre la costanera del Biobío en
 * Concepción. Audio mediante síntesis; sin acreditación regional.
 */
export const b2w15: Module = {
  "id": "b2-15",
  "level": "b2",
  "week": 15,
  "kind": "checkpoint",
  "title": "Punto de control: cuanto más se escucha, mejor se decide",
  "subtitle": "Repaso de «cuanto más…, más…» y de los conectores de concesión y objeción, integrado con las semanas 11 a 14",
  "stop": {
    "place": "Concepción",
    "country": "Chile"
  },
  "minutes": 150,
  "newObjectives": [
    "b2.gram.g155",
    "b2.gram.g156",
    "b2.voc.w15-ciudad-rio",
    "b2.pron.w15-conectores-entonacion",
    "b2.lis.w15-debate-radio",
    "b2.read.w15-reportaje-costanera",
    "b2.wri.w15-observacion-consulta",
    "b2.spk.w15-debatir-propuesta",
    "b2.fun.w15-conceder-matizar",
    "b2.disc.w15-conceder-objetar",
    "b2.rev.w15-semanas-11-15"
  ],
  reviewObjectives: ["b2.gram.g147","b2.gram.g148","b2.voc.w11-patrimonio-ferroviario","b2.pron.w11-terminaciones-participio","b2.lis.w11-redaccion-reconstruye","b2.read.w11-noticia-reapertura","b2.wri.w11-nota-boletin","b2.spk.w11-transmitir-mensaje","b2.fun.w11-aclarar-referencias","b2.disc.w11-situar-declaraciones","b2.gram.g149","b2.gram.g150","b2.voc.w12-excursion-yacimiento","b2.pron.w12-clitico-agrupado","b2.lis.w12-informe-excursion","b2.read.w12-diario-campana","b2.wri.w12-correo-disculpa","b2.spk.w12-explicar-percances","b2.fun.w12-disculparse-matizando","b2.disc.w12-informar-y-asumir","b2.gram.g151","b2.gram.g152","b2.voc.w13-trabajo-hibrido","b2.pron.w13-de-que-atono","b2.lis.w13-anuncio-oficina","b2.read.w13-columna-presencialidad","b2.wri.w13-correo-postura","b2.spk.w13-negociar-condiciones","b2.fun.w13-plantear-inquietudes","b2.disc.w13-comentar-hechos","b2.gram.g153","b2.gram.g154","b2.voc.w14-cerros-turismo","b2.pron.w14-pausa-causa","b2.lis.w14-explicar-cierre","b2.read.w14-cronica-cerro","b2.wri.w14-carta-aclaracion","b2.spk.w14-desmentir-explicar","b2.fun.w14-rechazar-interpretaciones","b2.disc.w14-causa-consecuencia"],
  prerequisites: ["b2-14"],
  "goal": {
    "canDo": "Puedo relacionar dos cambios con «cuanto más…, más…», conceder y objetar con conectores variados y combinarlo todo con lo que repasé en las semanas 11 a 14 en un texto argumentativo sobre un proyecto de mi ciudad.",
    "steps": [
      "Repasa las comparativas proporcionales: forma, concordancia y modo.",
      "Repasa los conectores que conceden y objetan, su puntuación y las fórmulas de debate.",
      "Recupera las clases de las semanas 11 a 14 en un mismo caso: la costanera del Biobío.",
      "Escucha un debate radial, lee un reportaje, escribe una observación a la consulta, revísala y debate oralmente."
    ]
  },
  "theory": {
    "intro": "Este es un punto de control. Repasas las dos clases de la semana y, además, vuelves sobre todo lo de las semanas 11 a 14. El caso es una consulta ciudadana en Concepción: la municipalidad propone convertir un estacionamiento junto al río Biobío en un parque con ciclovía, y la ciudad discute.",
    "parts": [
      {
        "heading": "Cuanto más…, más…: dos cosas que cambian juntas",
        "body": [
          "Para decir que una cosa aumenta o disminuye a la vez que otra, usa dos partes: «cuanto más / menos…» y después «más / menos / mejor / peor…». No lleva artículo ni «que»: «cuanto más se pedalea, más se conoce la ciudad», nunca «lo más… lo más». El sujeto suele ir detrás del verbo: «cuanto más crece la ciudad…».",
          "«Cuanto» no cambia delante de un verbo, un adjetivo o un adverbio, pero concuerda con un nombre: «cuanta más gente», «cuantos más árboles», «cuantas más bicicletas». Con «mayor», «menor», «antes» o «después» no se añade «más»: «cuanto mayor es el río…», «cuanto antes, mejor». En muchos países de América se oye también «mientras más…, más…», con el mismo sentido.",
          "El modo depende del tiempo. Para lo general, habitual o pasado, indicativo: «Cuanto más llueve, más sube el río». Para lo futuro o hipotético, presente de subjuntivo en la primera parte: «Cuanto antes empiecen las obras, antes estará el parque». En un relato en pasado sobre algo futuro desde entonces, imperfecto de subjuntivo: «Dijeron que cuanto más esperáramos, más caro saldría»."
        ],
        "table": {
          "caption": "El modo según el tiempo",
          "head": [
            "Situación",
            "Ejemplo"
          ],
          "rows": [
            [
              "general o habitual (indicativo)",
              "Cuantos más árboles hay, menos calor hace en verano."
            ],
            [
              "pasado (indicativo)",
              "Cuanto más se alargó la reunión, menos gente quedó."
            ],
            [
              "futuro o hipótesis (subjuntivo)",
              "Cuantas más personas participen, mejor será el proyecto."
            ],
            [
              "futuro desde el pasado (imperfecto de subjuntivo)",
              "Advirtieron que cuanto más tardáramos, peor sería."
            ]
          ]
        },
        "examples": [
          {
            "es": "Cuanta más gente use la ciclovía, más segura será.",
            "note": "«Cuanta» concuerda con «gente»; futuro: subjuntivo."
          },
          {
            "es": "Cuanto mayor es el caudal, más fuerte es la corriente.",
            "note": "«Cuanto mayor», sin «más»."
          }
        ],
        "mistakes": [
          {
            "wrong": "Cuanto más clientes vengan, mejor.",
            "right": "Cuantos más clientes vengan, mejor.",
            "why": "Delante de un nombre, «cuanto» concuerda: «cuantos más clientes»."
          },
          {
            "wrong": "Cuanto antes llegarás, mejor sitio tendrás.",
            "right": "Cuanto antes llegues, mejor sitio tendrás.",
            "why": "Para el futuro, subjuntivo en la primera parte."
          }
        ],
        "tip": "Para hablar de una sola cosa que cambia con el tiempo, no necesitas dos partes: «cada vez más», «cada vez menos», «cada vez mejor» (nunca «cada vez más mejor»)."
      },
      {
        "heading": "Conectar párrafos: conceder sin rendirse",
        "body": [
          "En la semana 6 repasaste «aunque», «a pesar de que» y «por mucho que» dentro de una misma oración. Ahora el nivel es el texto: conectores que unen una oración o un párrafo con el siguiente. «Sin embargo» y «no obstante» (más formal) presentan un contraste: van después de punto o de punto y coma, y llevan coma detrás. También pueden ir en medio, entre comas. Nunca «pero sin embargo».",
          "«Aun así», «con todo» y «así y todo» dicen que el resultado se mantiene a pesar de lo anterior. «De todas formas», «de todos modos» y «de todas maneras» indican que, sea como sea lo anterior, lo que sigue vale. «Pese a» + nombre o infinitivo y «pese a que» son formales. En la conversación, «y eso que» + indicativo añade, después de la idea principal, un dato que haría esperar lo contrario: «Llegó en bici, y eso que llovía»."
        ],
        "table": {
          "caption": "Conectores de concesión entre oraciones",
          "head": [
            "Conector",
            "Qué hace",
            "Ejemplo"
          ],
          "rows": [
            [
              "sin embargo / no obstante",
              "contraste",
              "El proyecto es caro. Sin embargo, tiene financiamiento."
            ],
            [
              "aun así / con todo",
              "el resultado se mantiene",
              "Llovió toda la mañana; aun así, vinieron doscientas personas."
            ],
            [
              "de todas formas",
              "vale sea como sea",
              "Quizá no gane el sí. De todas formas, conviene participar."
            ],
            [
              "pese a (que)",
              "concesión formal",
              "Pese a las críticas, la consulta se amplió."
            ],
            [
              "y eso que",
              "dato inesperado, coloquial",
              "Ganó el sí, y eso que nadie hizo campaña."
            ]
          ]
        },
        "examples": [
          {
            "es": "El estacionamiento está siempre lleno; no obstante, la mayoría de los autos son de fuera del barrio.",
            "note": "Punto y coma antes, coma después."
          },
          {
            "es": "El parque tardará dos años, como mínimo. Con todo, vale la pena.",
            "note": "«Con todo»: el resultado se mantiene."
          }
        ],
        "mistakes": [
          {
            "wrong": "La idea es buena pero sin embargo es cara.",
            "right": "La idea es buena; sin embargo, es cara.",
            "why": "«Pero» y «sin embargo» no se suman; «sin embargo» va tras punto y coma, con coma detrás."
          }
        ]
      },
      {
        "heading": "Objetar en un debate: ahora bien, eso sí y otras fórmulas",
        "body": [
          "«Ahora bien» acepta lo dicho y abre una objeción o una condición importante: «El parque es necesario. Ahora bien, ¿dónde estacionarán los feriantes?». «Eso sí» añade una condición o un matiz, muchas veces en tono cercano: «Apoyo la ciclovía; eso sí, con buena iluminación». «Aunque» puede funcionar como «pero» para rectificar: va siempre después y lleva indicativo: «Me gusta el plan, aunque no me convence el plazo».",
          "En un debate oral, conceder antes de objetar hace tu postura más convincente. Las fórmulas más útiles: «Tienes razón en que + indicativo, pero…», «No digo que no + subjuntivo, pero…», «Puede que tengas razón, pero…», «Es cierto que…; ahora bien…», «Ya, pero…» (coloquial)."
        ],
        "examples": [
          {
            "es": "Tienes razón en que el comercio necesita clientes, pero los ciclistas también compran.",
            "note": "«Tienes razón en que» + indicativo."
          },
          {
            "es": "No digo que no haga falta estacionamiento, pero no tiene por qué estar junto al río.",
            "note": "«No digo que no» + subjuntivo."
          },
          {
            "es": "Votaré a favor; eso sí, pediré que se consulte a los feriantes.",
            "note": "«Eso sí»: condición añadida."
          }
        ],
        "mistakes": [
          {
            "wrong": "Tienes razón en que el plan sea caro, pero es una inversión.",
            "right": "Tienes razón en que el plan es caro, pero es una inversión.",
            "why": "Con «tienes razón en que» aceptas un hecho: indicativo."
          },
          {
            "wrong": "Aunque no me convence el plazo, me gusta el plan, aunque.",
            "right": "Me gusta el plan, aunque no me convence el plazo.",
            "why": "«Aunque» con valor de «pero» va después de la idea principal, una sola vez."
          }
        ],
        "tip": "Concede primero y objeta después: tu interlocutor escucha mejor la objeción si antes reconociste su punto."
      },
      {
        "heading": "Integración: las semanas 11 a 14 en la costanera",
        "body": [
          "En un texto real sobre un proyecto urbano aparecen juntas casi todas las estructuras de este bloque. Cuando cuentas lo que dijo alguien en otra reunión recalculas los deícticos (semana 11); los datos oficiales van en pasiva con «ser» o con «se» (semanas 11 y 12); los percances se cuentan con el «se» accidental (12); las posturas dependen de algo, se insiste en algo y se comenta «el hecho de que» (13); las causas falsas se desmienten y las intensidades tienen consecuencias (14).",
          "Usa la tabla como lista de control antes de escribir tu observación: intenta que cada fila aparezca al menos una vez, sin forzar el texto."
        ],
        "table": {
          "caption": "Repaso de las semanas 11 a 14 con el caso de la costanera",
          "head": [
            "Semana y clase",
            "Clave",
            "Ejemplo en Concepción"
          ],
          "rows": [
            [
              "11 · G147 deícticos",
              "recalcular hoy, aquí, venir",
              "El alcalde dijo el lunes que al día siguiente iría allá."
            ],
            [
              "11 · G148 ser + participio",
              "el resultado primero; «por» + agente",
              "El proyecto fue aprobado por el concejo en marzo."
            ],
            [
              "12 · G149 se pasivo / impersonal",
              "concuerda / singular con «a»",
              "Se recibieron 900 observaciones; se consultó a los feriantes."
            ],
            [
              "12 · G150 se accidental",
              "percance frente a decisión",
              "Se nos cayó la conexión durante la votación en línea."
            ],
            [
              "13 · G151 verbos con preposición",
              "la preposición se queda ante «que»",
              "Todo depende de que llegue el financiamiento."
            ],
            [
              "13 · G152 el hecho de que",
              "hecho comentado: subjuntivo",
              "El hecho de que se haga en invierno preocupa a los vecinos."
            ],
            [
              "14 · G153 no porque",
              "causa rechazada: subjuntivo",
              "Votó en contra, no porque odie las bicis, sino porque vive del estacionamiento."
            ],
            [
              "14 · G154 tan / tanto / tal… que",
              "intensidad + consecuencia",
              "Llegaron tantas observaciones que ampliaron el plazo."
            ]
          ]
        },
        "examples": [
          {
            "es": "El martes la concejala nos dijo que ese mismo día se habían recibido tantas observaciones que el plazo sería ampliado.",
            "note": "Deícticos, «se» pasivo, «tantas… que» y pasiva con «ser» en una frase."
          },
          {
            "es": "No me opongo porque desconfíe del municipio; me opongo porque el plan depende de que se talen árboles.",
            "note": "Causa rechazada y verbo con preposición."
          }
        ],
        "mistakes": [
          {
            "wrong": "Se recibió novecientas observaciones y se consultaron a los feriantes.",
            "right": "Se recibieron novecientas observaciones y se consultó a los feriantes.",
            "why": "Semana 12: el «se» pasivo concuerda con la cosa; con «a» + personas, singular."
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Primero las dos clases de la semana; las reformulaciones mezclan todo el bloque.",
    "exercises": [
      {
        "id": "b2-15-g-proporcion",
        "type": "gap",
        "prompt": "Completa la comparativa proporcional. Decide la forma de «cuanto» o el modo del verbo entre paréntesis.",
        "items": [
          {
            "q": "___ más bicicletas circulen por la costanera, menos autos entrarán al centro.",
            "answers": [
              [
                "Cuantas",
                "cuantas"
              ]
            ],
            "why": "Concuerda con «bicicletas»: femenino plural."
          },
          {
            "q": "Cuanto antes ___ (empezar) las obras, antes podremos usar el parque.",
            "answers": [
              [
                "empiecen"
              ]
            ],
            "why": "Futuro: presente de subjuntivo."
          },
          {
            "q": "Cuanto más ___ (llover) en invierno, más sube el Biobío.",
            "answers": [
              [
                "llueve"
              ]
            ],
            "why": "Hecho general: indicativo."
          },
          {
            "q": "Cuanto ___ es la distancia, más gente prefiere la micro.",
            "answers": [
              [
                "mayor"
              ]
            ],
            "why": "«Cuanto mayor», sin «más»."
          },
          {
            "q": "La urbanista nos advirtió que cuanto más ___ (esperar), más caro saldría el proyecto.",
            "answers": [
              [
                "esperáramos",
                "esperásemos"
              ]
            ],
            "why": "Futuro visto desde el pasado: imperfecto de subjuntivo."
          },
          {
            "q": "Cuanta más gente ___ (venir) a la última reunión, más difícil fue ponerse de acuerdo.",
            "answers": [
              [
                "vino"
              ]
            ],
            "why": "Hecho pasado: indicativo."
          }
        ]
      },
      {
        "id": "b2-15-g-conectores",
        "type": "context",
        "prompt": "Lee cada situación y elige el conector que expresa bien la relación.",
        "items": [
          {
            "context": "Informe técnico: el terreno se inunda dos veces al año. El informe concluye que el parque es viable.",
            "q": "«El terreno se inunda dos veces al año; ___, el parque es viable».",
            "options": [
              "así que",
              "no obstante",
              "porque"
            ],
            "answer": 1,
            "why": "Contraste formal entre dos oraciones."
          },
          {
            "context": "Conversación: Pablo fue a votar a pie. Vive a cinco kilómetros.",
            "q": "«Pablo fue a votar a pie, ___ vive a cinco kilómetros».",
            "options": [
              "y eso que",
              "ahora bien",
              "sin embargo,"
            ],
            "answer": 0,
            "why": "Dato inesperado añadido después, en registro coloquial."
          },
          {
            "context": "Debate: aceptas la ciclovía, pero quieres añadir una condición sobre la iluminación.",
            "q": "«Estoy a favor de la ciclovía; ___, con luz suficiente de noche».",
            "options": [
              "por lo tanto",
              "como",
              "eso sí"
            ],
            "answer": 2,
            "why": "«Eso sí» añade una condición o un matiz."
          },
          {
            "context": "Columna: el plan tiene problemas, pero la autora mantiene su apoyo.",
            "q": "«El plan tiene problemas de plazo y de costo. ___, lo apoyo».",
            "options": [
              "Por consiguiente",
              "Aun así",
              "Puesto que"
            ],
            "answer": 1,
            "why": "El resultado se mantiene a pesar de lo anterior."
          }
        ]
      },
      {
        "id": "b2-15-g-reformular",
        "type": "open",
        "prompt": "Reformula cada texto de partida según la consigna. Después compara con el modelo y la lista: hay más de una versión correcta.",
        "items": [
          {
            "prompt": "Texto de partida: «Si hay más árboles en la orilla, el verano será menos caluroso». Expresa la relación con «cuanto más…, menos…».",
            "model": "Cuantos más árboles haya en la orilla, menos calor hará en verano.",
            "checklist": [
              "Hago concordar «cuantos» con «árboles».",
              "Uso subjuntivo porque hablo del futuro.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «El proyecto cuesta mucho. Pero creo que debemos hacerlo. Pero necesita más árboles». Reescríbelo como un párrafo formal con «no obstante» y «ahora bien», sin repetir «pero».",
            "model": "El proyecto tiene un costo elevado. No obstante, creo que debemos llevarlo adelante. Ahora bien, necesita más árboles de los que propone el plano.",
            "checklist": [
              "Puntúo bien los conectores: punto antes, coma después.",
              "Uso «ahora bien» para introducir una condición importante.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: Lunes, en la sede vecinal, la concejala: «Mañana traigo aquí los planos». Cuéntalo el jueves desde tu casa, y añade en pasiva con «ser» que los planos fueron presentados el martes.",
            "model": "El lunes la concejala dijo que el martes llevaría los planos a la sede vecinal, y efectivamente fueron presentados ese día.",
            "checklist": [
              "Recalculo «mañana», «aquí» y «traer» desde el jueves y desde mi casa.",
              "Uso la pasiva con concordancia del participio.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Dicen que los feriantes se oponen porque no les gustan las bicicletas. En realidad, temen perder clientes. Hay tanto ruido en redes que nadie los escucha». Escríbelo con «no porque…, sino porque…» y una consecutiva, y comenta el hecho con «el hecho de que».",
            "model": "Los feriantes se oponen, no porque no les gusten las bicicletas, sino porque temen perder clientes. Hay tanto ruido en redes que nadie los escucha, y el hecho de que nadie los escuche empeora el conflicto.",
            "checklist": [
              "Uso subjuntivo en la causa rechazada y después de «el hecho de que».",
              "Uso «tanto» + nombre + «que» con concordancia.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para discutir un proyecto urbano junto a un río y para participar en una consulta pública.",
    "groups": [
      {
        "title": "La ciudad y el río",
        "items": [
          {
            "es": "la costanera",
            "note": "avenida o paseo junto a un río, un lago o el mar"
          },
          {
            "es": "la ciclovía",
            "note": "carril o vía reservada para bicicletas"
          },
          {
            "es": "el humedal",
            "note": "zona de agua poco profunda con mucha vida silvestre"
          },
          {
            "es": "la crecida del río",
            "note": "subida del nivel del agua"
          },
          {
            "es": "la feria",
            "note": "en Chile, mercado al aire libre de frutas y verduras"
          }
        ]
      },
      {
        "title": "Participar en una consulta",
        "items": [
          {
            "es": "la consulta ciudadana",
            "note": "proceso en que los vecinos opinan sobre un proyecto"
          },
          {
            "es": "presentar una observación",
            "note": "enviar por escrito una opinión o propuesta formal"
          },
          {
            "es": "ampliar el plazo",
            "note": "dar más tiempo para participar"
          },
          {
            "es": "el concejo municipal",
            "note": "órgano que vota las decisiones del municipio"
          },
          {
            "es": "una solución intermedia",
            "note": "propuesta que recoge parte de cada postura"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b2-15-v-relacion",
        "type": "match",
        "prompt": "Relaciona cada expresión con la situación de la consulta en la que encaja.",
        "pairs": [
          {
            "left": "presentar una observación",
            "right": "Una vecina envía por la web dos páginas con sus propuestas."
          },
          {
            "left": "ampliar el plazo",
            "right": "La consulta, que cerraba el viernes, sigue abierta dos semanas más."
          },
          {
            "left": "el humedal",
            "right": "Una zona con juncos y garzas al lado del puente."
          },
          {
            "left": "una solución intermedia",
            "right": "Mantener la mitad de los estacionamientos y convertir el resto en parque."
          },
          {
            "left": "la crecida del río",
            "right": "En julio el agua llegó a la mitad del estacionamiento."
          },
          {
            "left": "el concejo municipal",
            "right": "Los concejales votan el proyecto en la sesión de abril."
          }
        ],
        "why": "Cada expresión corresponde a una situación concreta del caso."
      }
    ]
  },
  "pronunciation": {
    "focus": "Los conectores con su pausa y el ritmo en dos tiempos de «cuanto más…, más…».",
    "explanation": [
      "Los conectores de concesión forman un grupo propio: hay una pausa antes y una pausa breve después, y la voz se mantiene suspendida sobre ellos: «El proyecto es caro. | Sin embargo, | tiene apoyo». «Ahora bien» y «eso sí» suelen pronunciarse con un tono algo más alto, porque anuncian algo importante.",
      "En «cuanto más…, más…» la frase tiene dos tiempos: la voz sube al final de la primera parte y baja al final de la segunda, con una pausa en medio. Las dos palabras «más» llevan fuerza. Escucha, repite y grábate en tu dispositivo; la voz sintética es un apoyo y no evalúa tu pronunciación."
    ],
    "examples": [
      {
        "es": "Cuanto más lo pienso, | más me convence.",
        "note": "Subida en «pienso», bajada en «convence»."
      },
      {
        "es": "Es una buena idea. | No obstante, | es cara.",
        "note": "Pausa antes y después del conector."
      },
      {
        "es": "Voto que sí; | eso sí, | con más árboles.",
        "note": "«Eso sí» con tono un poco más alto."
      }
    ],
    "perceive": {
      "id": "b2-15-p-oido",
      "type": "listen",
      "prompt": "Escucha cada frase y elige qué hace el conector o la estructura que oyes.",
      "items": [
        {
          "q": "En la frase sobre el puente, ¿qué conector oyes?",
          "options": [
            "así que",
            "aun así",
            "ahora bien"
          ],
          "answer": 1,
          "audio": "El puente estuvo cerrado toda la semana; aun así, la feria tuvo más público que nunca.",
          "voice": "es-CL-f",
          "why": "«Aun así»: el resultado se mantiene."
        },
        {
          "q": "¿Qué relación expresa la frase sobre la ciclovía?",
          "options": [
            "Dos cosas que crecen juntas.",
            "Una causa rechazada.",
            "Una condición."
          ],
          "answer": 0,
          "audio": "Cuanto más larga sea la ciclovía, más gente la va a usar.",
          "voice": "es-CL-m",
          "why": "«Cuanto más…, más…»: proporción."
        },
        {
          "q": "En la frase sobre los árboles, ¿qué añade el hablante?",
          "options": [
            "Una consecuencia.",
            "Un dato inesperado.",
            "Una condición con «eso sí»."
          ],
          "answer": 2,
          "audio": "Apoyo el parque; eso sí, sin cortar ni un solo árbol.",
          "voice": "es-CL-f",
          "why": "«Eso sí» introduce una condición."
        },
        {
          "q": "En la frase sobre la votación, ¿qué conector oyes?",
          "options": [
            "sin embargo",
            "y eso que",
            "por lo tanto"
          ],
          "answer": 1,
          "audio": "Votaron casi tres mil personas, y eso que llovía a cántaros.",
          "voice": "es-CL-m",
          "why": "«Y eso que»: dato que haría esperar lo contrario."
        }
      ]
    },
    "produce": [
      {
        "text": "Cuanto antes empiecen, antes terminarán.",
        "tip": "Dos tiempos: sube en «empiecen», baja en «terminarán».",
        "voice": "es-CL-f"
      },
      {
        "text": "El plan es caro. Sin embargo, tiene financiamiento.",
        "tip": "Pausa clara antes de «sin embargo» y breve después.",
        "voice": "es-CL-m"
      },
      {
        "text": "Tienes razón en que falta estacionamiento, pero hay otras soluciones.",
        "tip": "Destaca «razón» y marca el giro en «pero».",
        "voice": "es-CL-f"
      },
      {
        "text": "Es una buena propuesta. Ahora bien, ¿quién la paga?",
        "tip": "Tono algo más alto en «ahora bien» y subida final en la pregunta.",
        "voice": "es-CL-m"
      }
    ]
  },
  "listening": {
    "title": "La costanera en debate",
    "context": "Es miércoles por la tarde en una radio local de Concepción. El programa «Ciudad abierta» dedica media hora a la consulta ciudadana sobre el plan de convertir un estacionamiento junto al río Biobío en un parque con ciclovía. Participan Javiera, estudiante de ingeniería y ciclista, y Héctor, dueño de una ferretería cercana. Modera Paula. Escucha primero sin transcripción. Las voces son sintéticas y no representan una variedad regional verificada.",
    "speakers": [
      {
        "id": "pa",
        "name": "Paula",
        "voice": "es-CL-f",
        "role": "Conductora del programa"
      },
      {
        "id": "ja",
        "name": "Javiera",
        "voice": "es-CL-f",
        "role": "Estudiante y ciclista, a favor del parque"
      },
      {
        "id": "he",
        "name": "Héctor",
        "voice": "es-CL-m",
        "role": "Dueño de una ferretería cercana, con dudas"
      }
    ],
    "script": [
      {
        "speaker": "pa",
        "text": "Buenas tardes. Hasta ayer se habían recibido más de novecientas observaciones, tantas que el municipio amplió el plazo hasta fin de mes. Javiera, ¿por qué apoya el parque?"
      },
      {
        "speaker": "ja",
        "text": "Porque cuanta más gente pueda llegar al río sin auto, mejor será la ciudad. Hoy la orilla es un estacionamiento, y el hecho de que el lugar más bonito de Concepción esté lleno de autos me parece absurdo. No lo digo porque odie los autos, sino porque el río es de todos."
      },
      {
        "speaker": "he",
        "text": "Tienes razón en que la orilla podría estar mejor; nadie lo discute. Ahora bien, mis clientes cargan sacos de cemento y planchas de madera. No digo que no se haga el parque, pero si quitan los estacionamientos, mi negocio depende de que haya otra solución."
      },
      {
        "speaker": "pa",
        "text": "Héctor, en la reunión del lunes usted dijo que el municipio nunca les había preguntado nada. ¿Sigue pensando lo mismo?"
      },
      {
        "speaker": "he",
        "text": "En parte. Ese día la concejala me prometió que el martes vendría a la ferretería a escuchar a los comerciantes, y vino, eso hay que reconocerlo. Sin embargo, se le olvidó traer los planos, así que hablamos en el aire."
      },
      {
        "speaker": "ja",
        "text": "Y eso que los planos fueron publicados en la web hace un mes. De todas formas, entiendo lo de la carga. Se podría reservar una zona de carga y descarga en la calle de atrás."
      },
      {
        "speaker": "he",
        "text": "Eso me interesa. Con todo, me preocupa el invierno: cuando el río crece, la orilla se inunda tanto que nadie va a pasear ahí en julio."
      },
      {
        "speaker": "ja",
        "text": "Justamente por eso el diseño incluye un humedal: cuanto más espacio tenga el agua para expandirse, menos daño hará en los barrios. Es una idea que se usa en muchas ciudades con río."
      },
      {
        "speaker": "pa",
        "text": "Un oyente nos escribe: «Llevo veinte años estacionando ahí y nadie me preguntó si quería un parque». Héctor, ¿se siente representado?"
      },
      {
        "speaker": "he",
        "text": "No del todo. Que nadie le preguntara es cierto, pero ahora la consulta está abierta, y cuanta más gente participe, más difícil será que decidan sin nosotros."
      },
      {
        "speaker": "pa",
        "text": "Nos queda un minuto. ¿Hay algún punto en común?"
      },
      {
        "speaker": "he",
        "text": "Sí: el parque, pero no a costa del comercio. Eso sí, quiero ver la zona de carga en los planos antes de firmar nada."
      },
      {
        "speaker": "ja",
        "text": "Me parece justo. Cuanto antes la incluyan, antes dejaremos de discutir y empezaremos a construir."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha el debate entero. ¿Qué postura tiene cada participante y en qué coinciden al final?",
        "exercise": {
          "id": "b2-15-l-global",
          "type": "choice",
          "prompt": "Elige la respuesta que resume el debate.",
          "items": [
            {
              "q": "¿Cuál es la postura de Héctor?",
              "options": [
                "Se opone a cualquier parque.",
                "Acepta el parque si se resuelve el problema de la carga.",
                "Apoya el parque sin condiciones."
              ],
              "answer": 1,
              "why": "«El parque, pero no a costa del comercio»."
            },
            {
              "q": "¿En qué coinciden al final?",
              "options": [
                "En pedir una zona de carga en los planos.",
                "En suspender la consulta.",
                "En mantener el estacionamiento."
              ],
              "answer": 0,
              "why": "Héctor quiere verla en los planos y Javiera lo considera justo."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y localiza los datos concretos.",
        "exercise": {
          "id": "b2-15-l-detalle",
          "type": "choice",
          "prompt": "Responde con la información exacta del audio.",
          "items": [
            {
              "q": "¿Por qué se amplió el plazo de la consulta?",
              "options": [
                "Porque se cayó la página web.",
                "Porque la concejala estaba enferma.",
                "Porque llegaron muchísimas observaciones."
              ],
              "answer": 2,
              "why": "«Tantas que el municipio amplió el plazo»."
            },
            {
              "q": "¿Qué pasó en la visita de la concejala?",
              "options": [
                "No fue a la ferretería.",
                "Fue, pero se le olvidaron los planos.",
                "Llevó los planos y una propuesta."
              ],
              "answer": 1,
              "why": "«Vino… sin embargo, se le olvidó traer los planos»."
            },
            {
              "q": "¿Para qué sirve el humedal, según Javiera?",
              "options": [
                "Para que el agua tenga espacio y haga menos daño.",
                "Para atraer turistas.",
                "Para estacionar en verano."
              ],
              "answer": 0,
              "why": "«Cuanto más espacio tenga el agua…, menos daño hará»."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Ahora fíjate en la forma. Puedes leer la transcripción después de responder.",
        "exercise": {
          "id": "b2-15-l-forma",
          "type": "classify",
          "prompt": "Clasifica cada fragmento según lo que hace.",
          "categories": [
            "Proporción (cuanto más…)",
            "Concesión u objeción",
            "Estructura de las semanas 11 a 14"
          ],
          "items": [
            {
              "text": "cuanta más gente pueda llegar al río sin auto, mejor será la ciudad",
              "cat": 0,
              "why": "Proporción futura con subjuntivo."
            },
            {
              "text": "Tienes razón en que la orilla podría estar mejor",
              "cat": 1,
              "why": "Concede antes de objetar."
            },
            {
              "text": "No lo digo porque odie los autos, sino porque el río es de todos",
              "cat": 2,
              "why": "Semana 14: causa rechazada con subjuntivo."
            },
            {
              "text": "Ahora bien, mis clientes cargan sacos de cemento",
              "cat": 1,
              "why": "«Ahora bien» abre una objeción."
            },
            {
              "text": "se le olvidó traer los planos",
              "cat": 2,
              "why": "Semana 12: «se» accidental."
            },
            {
              "text": "cuanto más espacio tenga el agua para expandirse, menos daño hará",
              "cat": 0,
              "why": "«Cuanto más… menos»: proporción."
            },
            {
              "text": "Con todo, me preocupa el invierno",
              "cat": 1,
              "why": "«Con todo»: mantiene la preocupación a pesar de lo anterior."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "La costanera que Concepción todavía no tiene",
    "genre": "Reportaje en una revista universitaria",
    "frame": "Texto original de SpanishCue escrito como reportaje de la revista ficticia «Campus Biobío». El proyecto, los datos y las personas citadas son inventados.",
    "text": [
      "Quien camina hoy por la orilla del Biobío, a pocas cuadras de la plaza de Armas, encuentra una imagen curiosa: uno de los ríos más anchos de Chile corre detrás de una fila de autos estacionados. El terreno, de casi cuatro hectáreas, fue cedido al municipio en 2019 y desde entonces funciona como estacionamiento gratuito. En marzo, el proyecto para transformarlo en un parque con ciclovía y humedal fue aprobado por el concejo municipal, y el mismo mes se abrió una consulta ciudadana para recoger observaciones.",
      "La respuesta superó todas las previsiones. Se recibieron más de novecientas observaciones en tres semanas, tantas que el plazo tuvo que ampliarse hasta fin de mes. Se consultó a los vecinos, a los feriantes del sector y a las dos universidades cercanas. Según el equipo técnico, cuantas más opiniones se recojan antes de licitar, menos cambios habrá que hacer durante las obras, que es cuando los cambios cuestan más caro.",
      "Los argumentos a favor son conocidos. La ciudad tiene pocos espacios verdes junto al agua y, en verano, el centro se calienta tanto que muchas familias buscan sombra fuera de la comuna. El hecho de que la orilla más céntrica esté ocupada por autos, dicen los defensores, demuestra que la ciudad le ha dado la espalda a su río durante décadas. Además, el humedal no es un adorno: cuanto más espacio tenga el agua para expandirse durante las crecidas, menos riesgo correrán los barrios bajos.",
      "Las objeciones, sin embargo, no vienen solo de quienes defienden el auto. Los comerciantes de la calle Barros Arana no se oponen porque desconfíen del parque, sino porque su actividad depende de que los clientes puedan cargar mercancía cerca. «No digo que no haga falta un parque», explicaba el lunes en la sede vecinal un ferretero del barrio, «pero nadie se acordó de nosotros cuando se dibujaron los planos». Esa misma tarde, la concejala a cargo prometió que al día siguiente iría a escuchar a los comerciantes. Fue; no obstante, según varios testigos, se le olvidaron los planos y la reunión terminó sin acuerdos concretos.",
      "Hay también dudas técnicas. Una académica de ingeniería civil recuerda que el terreno se inunda casi todos los inviernos y que, por lo tanto, la ciclovía tendrá que construirse sobre un terraplén. Con todo, considera que el proyecto es viable. «Es más caro de lo que se dijo al principio», admite; «ahora bien, cuanto antes se haga, menos costará, porque los precios de la construcción no paran de subir».",
      "Pese a las diferencias, en las últimas semanas empieza a dibujarse una solución intermedia: mantener una zona de carga y descarga en la calle de atrás, plantar más árboles de los previstos y abrir el parque por etapas. No es la propuesta de nadie en particular, y eso que nadie la presentó como tal. Quizá ahí esté la lección de esta consulta: cuanto más se escucha antes de decidir, menos hay que corregir después."
    ],
    "glossary": [
      {
        "es": "licitar",
        "note": "convocar a empresas para que ofrezcan hacer una obra"
      },
      {
        "es": "el terraplén",
        "note": "elevación de tierra para que un camino quede por encima del agua"
      },
      {
        "es": "darle la espalda a algo",
        "note": "ignorarlo, no prestarle atención"
      }
    ],
    "tasks": [
      {
        "id": "b2-15-r-comprension",
        "type": "choice",
        "prompt": "Responde según el reportaje.",
        "items": [
          {
            "q": "¿Quién aprobó el proyecto en marzo?",
            "options": [
              "Las universidades.",
              "Los feriantes.",
              "El concejo municipal."
            ],
            "answer": 2,
            "why": "«Fue aprobado por el concejo municipal»."
          },
          {
            "q": "¿Por qué se oponen los comerciantes, según el texto?",
            "options": [
              "Porque su actividad depende de poder cargar mercancía cerca.",
              "Porque desconfían del parque.",
              "Porque prefieren los autos."
            ],
            "answer": 0,
            "why": "«No se oponen porque desconfíen del parque, sino porque su actividad depende…»."
          },
          {
            "q": "¿Qué opina la académica de ingeniería?",
            "options": [
              "Que el proyecto es imposible.",
              "Que hay que esperar a que bajen los precios.",
              "Que es caro pero viable, y que conviene hacerlo pronto."
            ],
            "answer": 2,
            "why": "«Con todo, considera que el proyecto es viable… cuanto antes se haga, menos costará»."
          }
        ]
      },
      {
        "id": "b2-15-r-interpretar",
        "type": "open",
        "prompt": "Interpreta el texto con tus palabras y apóyate en citas.",
        "items": [
          {
            "prompt": "En 80–100 palabras, resume la solución intermedia y explica cómo el reportaje concede y objeta. Cita dos conectores distintos del texto, di qué hace cada uno y relaciona la última frase con la clase de «cuanto más…, más…».",
            "model": "La solución intermedia combina una zona de carga, más árboles y un parque por etapas. El reportaje concede los argumentos a favor y después los matiza: «Las objeciones, sin embargo, no vienen solo de quienes defienden el auto» introduce el contraste, y «Con todo, considera que el proyecto es viable» mantiene la conclusión a pesar de las dudas técnicas. La última frase, «cuanto más se escucha antes de decidir, menos hay que corregir después», resume la lección con una proporción general en indicativo.",
            "checklist": [
              "Resumo la solución sin copiar el párrafo.",
              "Cito dos conectores y explico su función.",
              "Explico el modo de la última frase."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo el reportaje integra las estructuras de las semanas 11 a 15.",
      "items": [
        {
          "quote": "Se recibieron más de novecientas observaciones en tres semanas, tantas que el plazo tuvo que ampliarse",
          "note": "«Se» pasivo que concuerda (semana 12) y consecutiva de intensidad con «tantas» (semana 14)."
        },
        {
          "quote": "la concejala a cargo prometió que al día siguiente iría a escuchar a los comerciantes",
          "note": "Deícticos recalculados (semana 11): «mañana» pasa a «al día siguiente» y «venir» a «ir»."
        },
        {
          "quote": "cuanto más espacio tenga el agua para expandirse durante las crecidas, menos riesgo correrán los barrios bajos",
          "note": "Proporción futura: subjuntivo en la primera parte y futuro en la segunda."
        },
        {
          "quote": "Fue; no obstante, según varios testigos, se le olvidaron los planos",
          "note": "Conector formal entre punto y coma y coma, seguido de un «se» accidental."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina las dos clases de la semana y recupera el bloque entero: semanas 11 a 14.",
    "exercises": [
      {
        "id": "b2-15-x-integracion",
        "type": "gap",
        "prompt": "Recupera las semanas 11 a 14: completa cada frase con la forma adecuada.",
        "items": [
          {
            "q": "Semana 11. Los planos ___ (presentar, pretérito, pasiva con «ser») por el equipo técnico.",
            "answers": [
              [
                "fueron presentados"
              ]
            ],
            "why": "Pasiva con «ser»: participio masculino plural."
          },
          {
            "q": "Semana 12. Durante la sesión en línea se nos ___ (caer, pretérito) la conexión dos veces.",
            "answers": [
              [
                "cayó"
              ]
            ],
            "why": "«Se» accidental que concuerda con «la conexión»."
          },
          {
            "q": "Semana 12. En la sede vecinal se ___ (atender, presente) a los vecinos los jueves.",
            "answers": [
              [
                "atiende"
              ]
            ],
            "why": "Con «a» + personas: singular."
          },
          {
            "q": "Semana 13. Los feriantes insisten ___ que se mantenga la zona de carga.",
            "answers": [
              [
                "en"
              ]
            ],
            "why": "«Insistir en que»: la preposición se queda."
          },
          {
            "q": "Semana 13. El hecho de que la consulta ___ (durar) tan poco molestó a muchos.",
            "answers": [
              [
                "durara",
                "durase"
              ]
            ],
            "why": "Hecho comentado en marco pasado: imperfecto de subjuntivo."
          },
          {
            "q": "Semana 14. Participó en la consulta, no porque le ___ (interesar) el parque, sino porque vive al lado.",
            "answers": [
              [
                "interesara",
                "interesase"
              ]
            ],
            "why": "Causa rechazada en el pasado: imperfecto de subjuntivo."
          }
        ]
      },
      {
        "id": "b2-15-x-orden",
        "type": "order",
        "prompt": "Ordena las palabras para reconstruir frases del debate.",
        "items": [
          {
            "words": [
              "Cuantos",
              "más",
              "árboles",
              "planten,",
              "más",
              "sombra",
              "tendremos",
              "en",
              "verano."
            ],
            "why": "«Cuantos» concuerda con «árboles»; futuro: subjuntivo."
          },
          {
            "words": [
              "Es",
              "cierto",
              "que",
              "falta",
              "dinero;",
              "ahora",
              "bien,",
              "hay",
              "fondos",
              "regionales."
            ],
            "why": "Concede con «es cierto que» y objeta con «ahora bien»."
          },
          {
            "words": [
              "Ganó",
              "la",
              "propuesta",
              "del",
              "parque,",
              "y",
              "eso",
              "que",
              "nadie",
              "hizo",
              "campaña."
            ],
            "why": "«Y eso que» después de la idea principal."
          }
        ]
      },
      {
        "id": "b2-15-x-error",
        "type": "error",
        "prompt": "Cada frase tiene un error. Escríbela corregida.",
        "items": [
          {
            "sentence": "Lo más camino, lo más me gusta la ciudad.",
            "answers": [
              "Cuanto más camino, más me gusta la ciudad."
            ],
            "why": "En español se usa «cuanto más…, más…», sin artículo."
          },
          {
            "sentence": "El parque es necesario, pero sin embargo es caro.",
            "answers": [
              "El parque es necesario; sin embargo, es caro.",
              "El parque es necesario, pero es caro."
            ],
            "why": "No se suman «pero» y «sin embargo»."
          },
          {
            "sentence": "Cuanto más mayor es la ciudad, más difícil es moverse.",
            "answers": [
              "Cuanto mayor es la ciudad, más difícil es moverse."
            ],
            "why": "Con «mayor» no se añade «más»."
          },
          {
            "sentence": "No digo que no es buena idea, pero llega tarde.",
            "answers": [
              "No digo que no sea buena idea, pero llega tarde."
            ],
            "why": "«No digo que no» + subjuntivo."
          }
        ]
      },
      {
        "id": "b2-15-x-conector",
        "type": "classify",
        "prompt": "¿Qué hace cada conector en estas frases? Clasifícalas.",
        "categories": [
          "Contraste entre oraciones",
          "El resultado se mantiene",
          "Objeción o condición añadida"
        ],
        "items": [
          {
            "text": "La obra durará dos años. No obstante, el primer tramo abrirá en diciembre.",
            "cat": 0,
            "why": "«No obstante»: contraste formal."
          },
          {
            "text": "Hubo críticas muy duras; así y todo, el proyecto siguió adelante.",
            "cat": 1,
            "why": "«Así y todo»: el resultado se mantiene."
          },
          {
            "text": "Estoy de acuerdo; eso sí, quiero bancos a la sombra.",
            "cat": 2,
            "why": "«Eso sí»: condición añadida."
          },
          {
            "text": "El parque mejorará el barrio. Ahora bien, ¿quién lo va a mantener?",
            "cat": 2,
            "why": "«Ahora bien»: objeción importante."
          },
          {
            "text": "Llovió durante toda la feria; con todo, se vendió casi todo.",
            "cat": 1,
            "why": "«Con todo»: a pesar de la lluvia, el resultado."
          },
          {
            "text": "Los autos ocupan la orilla; sin embargo, hay espacio libre a dos cuadras.",
            "cat": 0,
            "why": "«Sin embargo»: contraste."
          }
        ]
      },
      {
        "id": "b2-15-x-guiada",
        "type": "open",
        "prompt": "Escribe frases breves antes de la tarea de escritura. El modelo es una posibilidad, no la única.",
        "items": [
          {
            "prompt": "Escribe dos comparativas proporcionales sobre tu ciudad: una general (indicativo) y una sobre el futuro (subjuntivo).",
            "model": "Cuanto más tráfico hay en el centro, más tardan los buses. Cuantas más ciclovías construyan, menos autos veremos dentro de diez años.",
            "checklist": [
              "Uso indicativo en lo general y subjuntivo en lo futuro.",
              "Hago concordar «cuanto» con el nombre."
            ]
          },
          {
            "prompt": "Responde a esta opinión concediendo y objetando: «Los parques no sirven en invierno, así que es dinero perdido».",
            "model": "Tienes razón en que en invierno va menos gente. Sin embargo, el humedal funciona justamente en invierno, cuando el río crece. De todas formas, un parque se usa nueve meses al año.",
            "checklist": [
              "Concedo con una fórmula y objeto con un conector.",
              "Uso al menos dos conectores distintos."
            ]
          },
          {
            "prompt": "Escribe tres frases sobre una reunión vecinal reciente que integren tres semanas del bloque: un deíctico recalculado, una pasiva y un «no porque…».",
            "model": "En la reunión del viernes, el presidente dijo que ese mismo día se enviarían las actas. Las actas fueron enviadas el lunes. Llegaron tarde, no porque nadie las escribiera, sino porque se cayó el servidor.",
            "checklist": [
              "Recalculo la referencia de tiempo.",
              "Uso una pasiva y una causa rechazada con subjuntivo."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Tu municipio abrió una consulta pública sobre un proyecto urbano (un parque, una ciclovía, el cierre de una calle). Escribe una observación formal (240–320 palabras): resume lo que se propuso y lo que se dijo en una reunión a la que asististe días atrás, concede lo razonable, objeta con argumentos, relaciona causas y consecuencias, y termina con una propuesta concreta.",
    "context": "La observación la leerá el equipo técnico del municipio y quedará publicada. Debe ser clara, respetuosa y argumentada. Es tu texto de punto de control: intenta usar estructuras de todas las semanas del bloque sin forzarlas. Puedes usar el caso de la costanera del Biobío o un proyecto real de tu ciudad.",
    "steps": [
      "Anota los datos del proyecto (qué fue aprobado, qué se propone) y lo que dijeron dos personas en la reunión, con su día y su lugar.",
      "Organiza la observación en cuatro párrafos: presentación y datos, lo que se dijo, concesión y objeción, propuesta.",
      "Escribe usando al menos una comparativa proporcional, tres conectores de concesión distintos y estructuras de las semanas 11 a 14.",
      "Revisa la puntuación de cada conector, el modo después de «cuanto», «el hecho de que» y «no porque», y corrige los deícticos que todavía miran al día de la reunión."
    ],
    "useLanguage": [
      "cuanto más / cuantos más… + subjuntivo (futuro)",
      "sin embargo / no obstante / aun así / con todo",
      "ahora bien / eso sí / pese a que",
      "tengo que reconocer que… ; no digo que no + subjuntivo",
      "fue aprobado / se recibieron / se consultó a",
      "no porque… sino porque… ; el hecho de que…"
    ],
    "model": [
      "Señores del equipo técnico: presento esta observación como vecina del barrio Centro y usuaria habitual de la orilla del Biobío. El proyecto de parque fue aprobado por el concejo en marzo y, según la información publicada, se plantarán doscientos árboles y se construirá una ciclovía de dos kilómetros. Me parece una propuesta valiosa y quiero apoyarla con algunas condiciones.",
      "En la reunión del lunes 14 en la sede vecinal, la concejala aseguró que al día siguiente se reuniría con los comerciantes. La reunión se hizo; no obstante, se le olvidaron los planos, así que los comerciantes siguen sin saber dónde podrán cargar mercancía. Ellos no se oponen porque desconfíen del parque, sino porque su trabajo depende de que haya una zona de carga cerca.",
      "Tengo que reconocer que el proyecto es caro y que el terreno se inunda casi todos los inviernos. Aun así, el hecho de que se incluya un humedal me parece una decisión acertada: cuanto más espacio tenga el río durante las crecidas, menos daño sufrirán los barrios bajos. Ahora bien, el diseño actual concentra los árboles en un extremo, y el resto queda tan expuesto al sol que en verano será difícil usarlo.",
      "Por eso propongo tres cambios: reservar una zona de carga en la calle de atrás, repartir los árboles a lo largo de toda la ciclovía y abrir el parque por etapas. Cuanto antes se incorporen al proyecto, menos costará hacerlos. Confío en que estas observaciones sean útiles y quedo a disposición del equipo para participar en las próximas reuniones. Atentamente, Carolina Muñoz."
    ],
    "checklist": [
      "Uso al menos una comparativa proporcional con el modo correcto.",
      "Uso tres conectores de concesión u objeción distintos, bien puntuados.",
      "Recalculo las referencias de tiempo y lugar de lo que se dijo en la reunión.",
      "Uso pasiva con «ser» o «se» para los datos oficiales y el «se» accidental solo para percances.",
      "Incluyo un verbo con preposición, «el hecho de que», una causa rechazada y una consecutiva de intensidad.",
      "Termino con una propuesta concreta y un tono respetuoso."
    ],
    "words": [
      240,
      320
    ]
  },
  "speaking": {
    "intro": "Prepara palabras clave y una lista de conectores, no un texto para leer. Si te grabas, la grabación queda en tu dispositivo; la aplicación no evalúa tu pronunciación.",
    "tasks": [
      {
        "title": "Mi postura en tres minutos",
        "prompt": "Presenta durante unos tres minutos tu postura sobre un proyecto de tu ciudad (o sobre la costanera del Biobío). Resume los datos, cuenta lo que dijo alguien en una reunión o en una noticia, concede los argumentos contrarios más razonables, objeta y termina con una propuesta. Usa al menos una comparativa proporcional.",
        "prep": [
          "Prepara dos datos en pasiva y una declaración transmitida con referencias ajustadas.",
          "Prepara tres conectores: uno para conceder, uno para objetar y uno para mantener tu conclusión.",
          "Prepara una frase con «cuanto más…, más…»."
        ],
        "seconds": 180,
        "model": "El proyecto de ciclovía fue aprobado en mayo y se espera que esté listo en dos años. En la presentación, el arquitecto dijo que ese mismo mes empezarían los estudios. Tengo que reconocer que muchos comerciantes tienen miedo de perder clientes, y no porque estén en contra de las bicicletas, sino porque sus ventas dependen del auto. Sin embargo, en otras ciudades pasó lo contrario: cuantas más personas pasaban en bici, más compraban en el barrio. Por eso apoyo el proyecto; eso sí, con una zona de carga para el comercio.",
        "selfCheck": [
          "Concedo antes de objetar.",
          "Uso al menos tres conectores distintos con su pausa.",
          "Integro al menos tres estructuras de las semanas 11 a 14."
        ]
      },
      {
        "title": "El debate en la radio",
        "prompt": "Tu interlocutor defiende la postura contraria a la tuya sobre el proyecto. Debatan como en un programa de radio: escucha su argumento, concede lo que te parezca razonable con una fórmula («tienes razón en que…», «no digo que no…»), objeta, pregúntale por los datos que no conoces y busquen juntos una solución intermedia.",
        "prep": [
          "Prepara dos fórmulas para conceder y dos conectores para objetar.",
          "Prepara una pregunta sobre un dato y una propuesta intermedia."
        ],
        "seconds": 240,
        "selfCheck": [
          "Respondo a los argumentos concretos de mi interlocutor.",
          "Uso «ahora bien» o «eso sí» para matizar.",
          "Terminamos con una propuesta que recoge parte de cada postura."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva a la próxima clase lo que preparaste en este punto de control y úsalo con tu profesor.",
    "cards": [
      {
        "move": "Debate",
        "task": "Plantéale a tu profesor un proyecto de tu ciudad y pídele que defienda la postura contraria durante tres minutos.",
        "phrases": [
          "Tienes razón en que…, pero…",
          "Ahora bien,…"
        ]
      },
      {
        "move": "Pregúntale",
        "task": "Pregúntale qué relaciones proporcionales observa en su vida («cuanto más…, más…»).",
        "phrases": [
          "¿Cuanto más…, más…?",
          "¿Y cuanto menos…?"
        ]
      },
      {
        "move": "Revisa",
        "task": "Lee tu observación y pídele que marque una estructura de cada semana del bloque que podrías mejorar.",
        "phrases": [
          "¿Este conector va con coma?",
          "¿Aquí va subjuntivo?"
        ]
      }
    ],
    "bring": "Trae tu observación con los conectores subrayados y, en el margen, el número de la semana de cada estructura del bloque que usaste."
  },
  "quiz": {
    "items": [
      {
        "type": "gap",
        "q": "Cuanto más ___ (practicar), más fácil te resultará el debate del jueves.",
        "answers": [
          [
            "practiques"
          ]
        ],
        "why": "Futuro: subjuntivo."
      },
      {
        "type": "gap",
        "q": "___ más personas votaron, más legítimo pareció el resultado.",
        "answers": [
          [
            "Cuantas",
            "cuantas"
          ]
        ],
        "why": "Concuerda con «personas»."
      },
      {
        "type": "gap",
        "q": "Las obras ___ (inaugurar, futuro, pasiva con «ser») por la gobernadora en diciembre.",
        "answers": [
          [
            "serán inauguradas"
          ]
        ],
        "why": "Semana 11: futuro pasivo con participio femenino plural."
      },
      {
        "type": "gap",
        "q": "Mucha gente se queja ___ que el plazo es corto.",
        "answers": [
          [
            "de"
          ]
        ],
        "why": "Semana 13: «quejarse de que»."
      },
      {
        "type": "choice",
        "q": "¿Qué frase está bien puntuada?",
        "options": [
          "El plan es bueno; sin embargo, es caro.",
          "El plan es bueno, sin embargo es caro.",
          "El plan es bueno sin embargo, es caro."
        ],
        "answer": 0,
        "why": "Punto y coma antes, coma después."
      },
      {
        "type": "choice",
        "q": "¿Qué conector añade, en registro coloquial, un dato que haría esperar lo contrario?",
        "options": [
          "no obstante",
          "por consiguiente",
          "y eso que"
        ],
        "answer": 2,
        "why": "«Y eso que» + indicativo, después de la idea principal."
      },
      {
        "type": "listen",
        "q": "Según el audio, ¿qué pide la vecina?",
        "audio": "Apoyo la ciclovía; ahora bien, pido que se ilumine todo el tramo junto al río.",
        "voice": "es-CL-f",
        "options": [
          "Que no se construya la ciclovía.",
          "Que se amplíe el plazo.",
          "Que se ilumine el tramo junto al río."
        ],
        "answer": 2,
        "why": "«Ahora bien» introduce su condición."
      },
      {
        "type": "error",
        "sentence": "Cuanto más tarde llegaremos, peor sitio tendremos.",
        "answers": [
          "Cuanto más tarde lleguemos, peor sitio tendremos."
        ],
        "why": "Futuro: subjuntivo en la primera parte."
      },
      {
        "type": "error",
        "sentence": "Se le olvidó los documentos al concejal.",
        "answers": [
          "Se le olvidaron los documentos al concejal."
        ],
        "why": "Semana 12: el verbo concuerda con «los documentos»."
      },
      {
        "type": "error",
        "sentence": "Hubo tanto observaciones que ampliaron el plazo.",
        "answers": [
          "Hubo tantas observaciones que ampliaron el plazo."
        ],
        "why": "Semana 14: «tantas» concuerda con «observaciones»."
      },
      {
        "type": "order",
        "words": [
          "Tienes",
          "razón",
          "en",
          "que",
          "es",
          "caro;",
          "aun",
          "así,",
          "lo",
          "apoyo."
        ],
        "why": "Concesión con fórmula y conector que mantiene la conclusión."
      },
      {
        "type": "open",
        "prompt": "Escribe tres frases sobre un cambio en tu barrio: una comparativa proporcional, una concesión con un conector y una causa rechazada con «no porque».",
        "model": "Cuantas más tiendas cierran, menos gente camina por la calle. La municipalidad abrió un mercado nuevo; sin embargo, está lejos. Muchos no van, no porque no les guste, sino porque no tienen cómo llegar.",
        "checklist": [
          "La comparativa usa el modo correcto.",
          "El conector está bien puntuado.",
          "La causa rechazada va en subjuntivo."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo relacionar dos cambios con «cuanto más…, más…», con la concordancia y el modo adecuados.",
      "Puedo conceder y objetar entre oraciones y en un debate con conectores y fórmulas variados, bien puntuados.",
      "Puedo combinar en un mismo texto deícticos recalculados, pasivas, los tres valores de «se», verbos con preposición, «el hecho de que», causas desmentidas y consecutivas de intensidad."
    ],
    "review": [
      "Mañana, escribe cinco comparativas proporcionales sobre tus hábitos y cinco sobre tus planes.",
      "En tres días, lee una columna de opinión y subraya cada conector de concesión; clasifícalos según la tabla.",
      "Antes de la semana 16, relee tu observación y comprueba que aparece una estructura de cada semana del bloque."
    ]
  },
  "related": [
    {
      "path": "/gramatica/comparativas-proporcionales-cuanto-mas-mas",
      "label": "Clase: Comparativas proporcionales: cuanto más, más"
    },
    {
      "path": "/gramatica/conectores-de-concesion-y-objecion",
      "label": "Clase: Conectores de concesión y objeción"
    }
  ]
};
