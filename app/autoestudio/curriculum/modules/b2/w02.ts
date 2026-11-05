import type { Module } from "../../types";

/**
 * B2 · semana 2 · Autoestudio espejo de G130 (correlación temporal: presente, pasado y futuro) y
 * G131 (si + imperfecto de subjuntivo + condicional). Repaso autónomo con un proyecto vecinal
 * ficticio de presupuesto participativo en Rosario. Audio mediante síntesis; sin acreditación regional.
 */
export const b2w02: Module = {
  "id": "b2-02",
  "level": "b2",
  "week": 2,
  "kind": "core",
  "title": "Si ganáramos la votación: un proyecto para la costanera",
  "subtitle": "Repaso de la correlación de tiempos con subjuntivo y de las condiciones posibles e imaginadas con «si»",
  "stop": {
    "place": "Rosario",
    "country": "Argentina"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.g130",
    "b2.gram.g131",
    "b2.voc.w02-participacion-vecinal",
    "b2.pron.w02-presente-imperfecto-subj",
    "b2.lis.w02-entrevista-radio",
    "b2.read.w02-boletin-vecinal",
    "b2.wri.w02-propuesta-municipio",
    "b2.spk.w02-defender-proyecto",
    "b2.fun.w02-plantear-hipotesis",
    "b2.disc.w02-marco-temporal"
  ],
  "reviewObjectives": [],
  "prerequisites": [],
  "goal": {
    "canDo": "Puedo ajustar el tiempo del subjuntivo al verbo principal y al momento de la acción, y presentar un plan como posible o como hipótesis según lo vea.",
    "steps": [
      "Repasa los dos marcos temporales del subjuntivo y el perfecto de subjuntivo visto desde ahora.",
      "Compara «si + presente» con «si + imperfecto de subjuntivo» y practica las dos estructuras.",
      "Escucha una entrevista en una radio de Rosario y lee el boletín de una vecinal.",
      "Redacta una propuesta para el municipio, revísala y defiéndela en una conversación."
    ]
  },
  "theory": {
    "intro": "En clase viste cómo el verbo principal decide el tiempo del subjuntivo y cómo «si» puede presentar un plan o un sueño. Aquí lo repasas con un proyecto vecinal de Rosario: lo que el municipio pide, lo que pidió, lo que el barrio espera y lo que haría si las cosas fueran de otra manera.",
    "parts": [
      {
        "heading": "Dos marcos: el verbo principal marca el tiempo",
        "body": [
          "Si el verbo que pide, desea, valora o necesita está en presente, futuro, imperativo o pretérito perfecto, el subjuntivo va en presente. Si está en un pasado (pretérito, imperfecto, pluscuamperfecto) o en condicional, el subjuntivo va en imperfecto. Lo mismo pasa detrás de «para que», «antes de que» y «cuando» con valor futuro.",
          "Ojo con el condicional: aunque hable del futuro, pertenece al marco pasado. «Me gustaría que vinieras», no «me gustaría que vengas», en la norma más extendida."
        ],
        "table": {
          "caption": "La misma petición en distintos marcos",
          "head": [
            "Verbo principal",
            "Marco",
            "Subordinada"
          ],
          "rows": [
            [
              "El municipio pide…",
              "presente",
              "que presentemos el proyecto."
            ],
            [
              "El municipio pedirá…",
              "futuro",
              "que presentemos el proyecto."
            ],
            [
              "Pidan…",
              "imperativo",
              "que lo presentemos pronto."
            ],
            [
              "El municipio ha pedido…",
              "pretérito perfecto",
              "que presentemos el proyecto."
            ],
            [
              "El municipio pidió / pedía…",
              "pasado",
              "que presentáramos el proyecto."
            ],
            [
              "El municipio había pedido…",
              "pluscuamperfecto",
              "que presentáramos el proyecto."
            ],
            [
              "El municipio preferiría…",
              "condicional",
              "que presentáramos el proyecto."
            ]
          ]
        },
        "examples": [
          {
            "es": "Necesitamos que cada vecino firme antes del viernes.",
            "note": "Marco presente."
          },
          {
            "es": "Necesitábamos que cada vecino firmara antes del viernes.",
            "note": "Marco pasado."
          },
          {
            "es": "Repartimos volantes para que la gente votara.",
            "note": "«Para que» sigue al verbo pasado."
          }
        ],
        "mistakes": [
          {
            "wrong": "Nos gustaría que el municipio arregle la costanera.",
            "right": "Nos gustaría que el municipio arreglara la costanera.",
            "why": "El condicional pertenece al marco pasado: imperfecto de subjuntivo."
          }
        ]
      },
      {
        "heading": "Mirar atrás desde ahora: perfecto e imperfecto",
        "body": [
          "Desde un verbo principal en presente también puedes hablar de algo anterior. Si esa acción está cerca del presente o su resultado sigue vivo, usa el perfecto de subjuntivo: «me alegra que hayan votado tantas personas». Si es un pasado cerrado, con un marcador como «ayer» o «el año pasado», usa el imperfecto: «me alegra que votaran tantas personas el año pasado».",
          "La regla de los dos marcos tiene una excepción útil: si alguien pidió algo en el pasado y ese contenido todavía está pendiente, se acepta también el presente: «la concejala pidió que mandemos el plano esta semana»."
        ],
        "examples": [
          {
            "es": "Espero que hayas recibido el formulario.",
            "note": "Acción anterior al ahora, resultado vigente."
          },
          {
            "es": "Es una lástima que el proyecto no ganara en 2023.",
            "note": "Pasado cerrado visto desde hoy."
          },
          {
            "es": "Dudo que el plazo se amplíe.",
            "note": "Acción posterior: presente de subjuntivo."
          }
        ],
        "mistakes": [
          {
            "wrong": "Me alegra que ayer hayan venido tantos vecinos a la asamblea.",
            "right": "Me alegra que ayer vinieran tantos vecinos a la asamblea.",
            "why": "En la norma más general, con «ayer» el pasado está cerrado: imperfecto. En algunas zonas también se oye el perfecto."
          }
        ],
        "tip": "Antes de elegir, pregúntate dos cosas: ¿en qué tiempo está el verbo principal? y ¿la acción es anterior, simultánea o posterior?"
      },
      {
        "heading": "«Si»: un plan posible o un mundo imaginado",
        "body": [
          "Con «si + presente de indicativo» presentas una condición abierta: crees que puede cumplirse y organizas una consecuencia real en presente, futuro o imperativo. Con «si + imperfecto de subjuntivo» alejas la condición de la realidad actual, y la consecuencia va en condicional simple. La elección no depende solo de los hechos, sino de cómo los ve quien habla.",
          "Aunque se llame «imperfecto», en estas frases el subjuntivo no habla del pasado: habla de ahora o del futuro. Y el orden es libre: puedes empezar por la consecuencia sin cambiar los tiempos. Cuando «si» va primero, separa las dos partes con una coma."
        ],
        "table": {
          "caption": "Dos actitudes ante la misma votación",
          "head": [
            "Condición",
            "Consecuencia",
            "Cómo lo ve quien habla"
          ],
          "rows": [
            [
              "Si ganamos la votación,",
              "empezaremos la obra en mayo.",
              "posible, probable"
            ],
            [
              "Si ganáramos la votación,",
              "empezaríamos la obra en mayo.",
              "lejano, imaginado"
            ],
            [
              "Si llueve el sábado,",
              "trasladen la asamblea al club.",
              "posible: consecuencia en imperativo"
            ],
            [
              "Si tuviéramos un local propio,",
              "no dependeríamos del club.",
              "contrario a la realidad actual"
            ]
          ]
        },
        "examples": [
          {
            "es": "Si la costanera tuviera más luz, la usarían más familias de noche.",
            "note": "Hoy no tiene esa luz: hipótesis."
          },
          {
            "es": "La usarían más familias si tuviera más luz.",
            "note": "Mismo contenido, otro orden, sin coma."
          }
        ],
        "mistakes": [
          {
            "wrong": "Si tendríamos más presupuesto, compraríamos más bicicletas.",
            "right": "Si tuviéramos más presupuesto, compraríamos más bicicletas.",
            "why": "Después de «si» nunca va el condicional."
          },
          {
            "wrong": "Si ganaremos, pintaremos el muelle.",
            "right": "Si ganamos, pintaremos el muelle.",
            "why": "Después de «si» condicional tampoco va el futuro."
          }
        ]
      },
      {
        "heading": "Negociar con hipótesis sin mezclar los mundos",
        "body": [
          "Las hipótesis son muy útiles para proponer con prudencia: «si pusiéramos el taller junto al muelle, ¿no sería más visible?». Suenan menos impositivas que «pongamos el taller junto al muelle». Pero cada frase debe quedarse en un solo mundo: si la condición es posible, la consecuencia es real; si es imaginada, la consecuencia también.",
          "Para ofrecer alternativas en una negociación, combina las dos actitudes: «si nos dan el permiso, empezamos en mayo; si no nos lo dieran, buscaríamos otro terreno». Así muestras qué esperas y qué ves menos probable."
        ],
        "examples": [
          {
            "es": "¿Y si hiciéramos la votación por internet?",
            "note": "Propuesta suave con «¿y si…?»."
          },
          {
            "es": "Si el club nos presta el salón, la asamblea será el jueves.",
            "note": "Plan posible: indicativo en las dos partes."
          }
        ],
        "mistakes": [
          {
            "wrong": "Si nos dieran el permiso, empezaremos en mayo.",
            "right": "Si nos dieran el permiso, empezaríamos en mayo.",
            "why": "Una condición imaginada pide una consecuencia en condicional."
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Decide primero el marco del verbo principal; después, si la condición es posible o imaginada.",
    "exercises": [
      {
        "id": "b2-02-g-marco",
        "type": "gap",
        "prompt": "Completa con el subjuntivo adecuado del verbo entre paréntesis: presente, imperfecto o perfecto.",
        "items": [
          {
            "q": "La junta vecinal nos ha pedido que ___ (llevar) el DNI a la votación.",
            "answers": [
              [
                "llevemos"
              ]
            ],
            "why": "Pretérito perfecto: marco presente."
          },
          {
            "q": "En 2022 el municipio exigió que cada proyecto ___ (tener) cien firmas.",
            "answers": [
              [
                "tuviera",
                "tuviese"
              ]
            ],
            "why": "Pretérito: marco pasado."
          },
          {
            "q": "Preferiría que la obra no ___ (empezar) en pleno verano.",
            "answers": [
              [
                "empezara",
                "empezase"
              ]
            ],
            "why": "El condicional pertenece al marco pasado."
          },
          {
            "q": "Ojalá ya ___ (llegar) los resultados cuando abramos el correo.",
            "answers": [
              [
                "hayan llegado"
              ]
            ],
            "why": "Acción terminada antes de un momento futuro: perfecto de subjuntivo."
          },
          {
            "q": "Me molesta que el año pasado nadie nos ___ (avisar) del cambio de fecha.",
            "answers": [
              [
                "avisara",
                "avisase"
              ]
            ],
            "why": "Pasado cerrado visto desde hoy: imperfecto."
          },
          {
            "q": "Avísenme cuando ___ (terminar) el recuento de votos.",
            "answers": [
              [
                "termine"
              ]
            ],
            "why": "Imperativo + «cuando» futuro: presente de subjuntivo."
          }
        ]
      },
      {
        "id": "b2-02-g-si",
        "type": "choice",
        "prompt": "Elige la forma que completa la frase.",
        "items": [
          {
            "q": "Si el municipio ___ más fondos, haríamos también una plaza.",
            "options": [
              "diera",
              "daría",
              "da"
            ],
            "answer": 0,
            "why": "Consecuencia en condicional: condición en imperfecto de subjuntivo."
          },
          {
            "q": "Si mañana no llueve, ___ los carteles en la costanera.",
            "options": [
              "colgaríamos",
              "colgaremos",
              "colgáramos"
            ],
            "answer": 1,
            "why": "Condición posible: consecuencia en futuro."
          },
          {
            "q": "Si yo ___ la concejala, pondría bancos a la sombra.",
            "options": [
              "sería",
              "soy",
              "fuera"
            ],
            "answer": 2,
            "why": "Situación irreal: «si fuera»."
          },
          {
            "q": "Si ___ firmas suficientes antes del lunes, presentamos el proyecto.",
            "options": [
              "juntáramos",
              "juntamos",
              "juntaríamos"
            ],
            "answer": 1,
            "why": "Consecuencia en presente con valor futuro: condición abierta."
          }
        ]
      },
      {
        "id": "b2-02-g-reformular",
        "type": "open",
        "prompt": "Reformula cada texto de partida según la consigna. Después compara con el modelo: hay más de una versión correcta.",
        "items": [
          {
            "prompt": "Texto de partida: «La concejala quiere que el barrio elija entre dos proyectos». Pásalo a un relato del año pasado con «El año pasado…».",
            "model": "El año pasado la concejala quería que el barrio eligiera entre dos proyectos.",
            "checklist": [
              "Cambio los dos verbos al marco pasado.",
              "Conservo quién quiere y quién elige.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «No tenemos un local propio, así que dependemos del club». Conviértelo en una hipótesis con «si».",
            "model": "Si tuviéramos un local propio, no dependeríamos del club.",
            "checklist": [
              "Invierto la realidad: tener / no depender.",
              "Uso imperfecto de subjuntivo tras «si» y condicional en la consecuencia.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Pongamos el taller de bicicletas junto al muelle». Reformúlalo como una propuesta prudente con «¿y si…?» y una consecuencia.",
            "model": "¿Y si pusiéramos el taller de bicicletas junto al muelle? Sería más visible para quien pasea.",
            "checklist": [
              "Suavizo la propuesta con una hipótesis.",
              "Añado una consecuencia en condicional.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Si nos aprueban el proyecto, compraremos veinte bicicletas». Escribe la versión que usaría alguien que ve la aprobación muy difícil.",
            "model": "Si nos aprobaran el proyecto, compraríamos veinte bicicletas.",
            "checklist": [
              "Cambio la condición abierta por una hipótesis.",
              "Ajusto también la consecuencia.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Expresiones para participar en un proyecto de barrio. Apréndelas como bloques: verbo y sustantivo juntos.",
    "groups": [
      {
        "title": "El proceso",
        "items": [
          {
            "es": "el presupuesto participativo",
            "note": "parte del dinero público que deciden los vecinos"
          },
          {
            "es": "presentar una propuesta",
            "note": "entregarla por la vía oficial"
          },
          {
            "es": "reunir firmas",
            "note": "conseguir apoyos por escrito"
          },
          {
            "es": "someter a votación",
            "note": "dejar que decida la mayoría"
          },
          {
            "es": "ejecutar una obra",
            "note": "construir lo que se aprobó"
          }
        ]
      },
      {
        "title": "El barrio y la ciudad",
        "items": [
          {
            "es": "la costanera",
            "note": "paseo junto al río; en Rosario, a orillas del Paraná"
          },
          {
            "es": "la vecinal",
            "note": "en Argentina, asociación de vecinos de un barrio"
          },
          {
            "es": "el espacio verde",
            "note": "plaza, parque o terreno con árboles"
          },
          {
            "es": "la concejala",
            "note": "miembro del concejo municipal"
          },
          {
            "es": "priorizar una necesidad",
            "note": "decidir qué es más urgente"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b2-02-v-proceso",
        "type": "match",
        "prompt": "Relaciona cada paso del proyecto con lo que hacen los vecinos.",
        "pairs": [
          {
            "left": "reunir firmas",
            "right": "Recorren el barrio con una planilla durante dos semanas."
          },
          {
            "left": "presentar una propuesta",
            "right": "Entregan el formulario en la oficina del distrito."
          },
          {
            "left": "someter a votación",
            "right": "Cada vecino elige un proyecto en la urna del club."
          },
          {
            "left": "ejecutar una obra",
            "right": "Una empresa construye el taller en la costanera."
          },
          {
            "left": "priorizar una necesidad",
            "right": "Deciden que la iluminación va antes que los juegos."
          }
        ],
        "why": "Cada expresión nombra una etapa distinta del presupuesto participativo."
      }
    ]
  },
  "pronunciation": {
    "focus": "Oír el tiempo del subjuntivo y entonar las frases con «si».",
    "explanation": [
      "En la correlación, muchas veces la única pista es la terminación: «presentemos» (presente) frente a «presentáramos» (imperfecto). La segunda tiene una sílaba más y la fuerza cae en «tá». Escucha el final del verbo antes de decidir el marco.",
      "En una oración que empieza con «si», la voz sube un poco antes de la coma, como si dejara algo abierto, y baja en la consecuencia. Si empiezas por la consecuencia, la voz baja solo al final. Grábate en tu dispositivo y compara; la voz sintética es solo una referencia."
    ],
    "examples": [
      {
        "es": "Nos piden que presentemos el plano.",
        "note": "pre-sen-TE-mos: marco presente."
      },
      {
        "es": "Nos pidieron que presentáramos el plano.",
        "note": "pre-sen-TÁ-ra-mos: marco pasado."
      },
      {
        "es": "Si ganáramos ↗, haríamos un muelle nuevo ↘.",
        "note": "Subida antes de la coma, bajada al final."
      }
    ],
    "perceive": {
      "id": "b2-02-p-oido",
      "type": "listen",
      "prompt": "Escucha y elige la forma que oyes. Después decide si el marco es presente o pasado.",
      "items": [
        {
          "q": "¿Qué oyes en la frase sobre el formulario?",
          "options": [
            "completemos",
            "completáramos"
          ],
          "answer": 1,
          "audio": "La oficina nos pidió que completáramos el formulario en papel.",
          "voice": "es-AR-f",
          "why": "«Pidió»: marco pasado, «completáramos»."
        },
        {
          "q": "¿Qué oyes en la frase sobre la urna?",
          "options": [
            "llevemos",
            "lleváramos"
          ],
          "answer": 0,
          "audio": "La vecinal quiere que llevemos la urna al club el domingo.",
          "voice": "es-AR-m",
          "why": "«Quiere»: marco presente, «llevemos»."
        },
        {
          "q": "¿Qué oyes en la frase sobre el muelle?",
          "options": [
            "arreglan",
            "arreglaran",
            "arreglarán"
          ],
          "answer": 1,
          "audio": "Si arreglaran el muelle, volverían los pescadores.",
          "voice": "es-AR-f",
          "why": "Hipótesis: «arreglaran», con fuerza en «gla»."
        },
        {
          "q": "¿Qué oyes en la frase sobre los árboles?",
          "options": [
            "plantemos",
            "plantáramos",
            "plantaremos"
          ],
          "answer": 2,
          "audio": "Si nos dan permiso, plantaremos árboles en la esquina.",
          "voice": "es-AR-m",
          "why": "Condición abierta: consecuencia en futuro."
        }
      ]
    },
    "produce": [
      {
        "text": "Si tuviéramos más voluntarios, abriríamos también los sábados.",
        "tip": "Sube en «voluntarios», baja en «sábados».",
        "voice": "es-AR-f"
      },
      {
        "text": "El municipio nos pidió que presentáramos tres presupuestos.",
        "tip": "Marca la fuerza en «tá» de «presentáramos».",
        "voice": "es-AR-m"
      },
      {
        "text": "Abriríamos también los sábados si tuviéramos más voluntarios.",
        "tip": "Sin subida en el medio: la voz baja al final.",
        "voice": "es-AR-f"
      },
      {
        "text": "Espero que hayan recibido nuestra propuesta.",
        "tip": "Une «hayan recibido» sin pausa.",
        "voice": "es-AR-m"
      }
    ]
  },
  "listening": {
    "title": "«Barrio Abierto», la radio de la costanera",
    "context": "Un programa de una radio comunitaria de Rosario entrevista a Lucía Benítez, de la vecinal del barrio Refinería, sobre el proyecto que presentaron al presupuesto participativo. Escucha primero sin leer. Las voces son sintéticas y no representan una variedad regional verificada.",
    "speakers": [
      {
        "id": "co",
        "name": "Gabriel",
        "voice": "es-AR-m",
        "role": "Conductor del programa"
      },
      {
        "id": "lu",
        "name": "Lucía",
        "voice": "es-AR-f",
        "role": "Integrante de la vecinal"
      }
    ],
    "script": [
      {
        "speaker": "co",
        "text": "Buenas tardes, Lucía. Cuéntanos qué propone la vecinal este año y en qué punto está el proyecto."
      },
      {
        "speaker": "lu",
        "text": "Buenas tardes. Proponemos un taller de bicicletas gratuito en la costanera, con préstamo para chicos que no tienen bici. El año pasado presentamos una idea parecida, pero el municipio pidió que la redujéramos porque era demasiado cara. Este año nos pide que presentemos tres presupuestos distintos antes del día treinta, y ya tenemos dos."
      },
      {
        "speaker": "co",
        "text": "¿Y qué esperan que pase en la votación?"
      },
      {
        "speaker": "lu",
        "text": "Somos optimistas. Si conseguimos el tercer presupuesto esta semana, el proyecto entra en la votación de octubre. Me alegra mucho que se hayan sumado los clubes de remo; el año pasado fue una pena que no nos apoyaran, porque no conocían la propuesta."
      },
      {
        "speaker": "co",
        "text": "Imaginemos que ganan. ¿Qué cambiaría en el barrio?"
      },
      {
        "speaker": "lu",
        "text": "Si ganáramos, abriríamos el taller los fines de semana y los chicos aprenderían a arreglar su propia bici. Y si tuviéramos un poco más de dinero, que no es el caso, pondríamos luces en el sendero, porque de noche casi nadie lo usa. Pero vamos paso a paso: primero queremos que la gente vote."
      },
      {
        "speaker": "co",
        "text": "Hay oyentes que nos escriben que preferirían que el dinero fuera a las calles internas. ¿Qué les dices? Y después, un mensaje para quienes nos escuchan."
      },
      {
        "speaker": "lu",
        "text": "Que tienen derecho a pedirlo y que lo presenten. No queremos que sea una pelea entre vecinos: la votación existe para eso."
      },
      {
        "speaker": "lu",
        "text": "Que se acerquen a la vecinal el jueves, que traigan el DNI y que nos cuenten qué necesitan. Nos gustaría que el proyecto fuera de todos, no solo de quienes lo escribimos."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la entrevista completa sin pausas.",
        "exercise": {
          "id": "b2-02-l-global",
          "type": "choice",
          "prompt": "Elige la respuesta que mejor resume la entrevista.",
          "items": [
            {
              "q": "¿Cuál es el tema principal?",
              "options": [
                "Una protesta contra el municipio.",
                "Un proyecto vecinal que se votará en octubre.",
                "La historia de los clubes de remo."
              ],
              "answer": 1,
              "why": "Lucía presenta el taller y explica el proceso de votación."
            },
            {
              "q": "¿Qué actitud tiene Lucía?",
              "options": [
                "Optimista, pero prudente con lo que no depende de ellos.",
                "Pesimista: cree que perderán.",
                "Indiferente al resultado."
              ],
              "answer": 0,
              "why": "Dice «somos optimistas» y «vamos paso a paso»."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota datos concretos.",
        "exercise": {
          "id": "b2-02-l-detalle",
          "type": "choice",
          "prompt": "Responde con la información del audio.",
          "items": [
            {
              "q": "¿Qué les pidió el municipio el año pasado?",
              "options": [
                "Que reunieran más firmas.",
                "Que cambiaran el lugar del taller.",
                "Que redujeran el proyecto."
              ],
              "answer": 2,
              "why": "«Pidió que la redujéramos porque era demasiado cara»."
            },
            {
              "q": "¿Qué les falta para entrar en la votación?",
              "options": [
                "Un tercer presupuesto.",
                "El apoyo de los clubes.",
                "Un local propio."
              ],
              "answer": 0,
              "why": "Ya tienen dos de los tres presupuestos."
            },
            {
              "q": "¿Qué harían solo con más dinero?",
              "options": [
                "Abrir los fines de semana.",
                "Iluminar el sendero.",
                "Prestar bicicletas."
              ],
              "answer": 1,
              "why": "«Si tuviéramos un poco más de dinero, que no es el caso, pondríamos luces»."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Fíjate en cómo Lucía separa lo real de lo imaginado. Puedes leer la transcripción después.",
        "exercise": {
          "id": "b2-02-l-forma",
          "type": "open",
          "prompt": "Explica la diferencia con tus palabras.",
          "items": [
            {
              "prompt": "Lucía dice «si conseguimos el tercer presupuesto» y después «si ganáramos». ¿Por qué cambia de forma? Añade qué indica «que no es el caso».",
              "model": "Conseguir el presupuesto le parece probable y cercano, por eso usa el presente. Ganar depende de la votación y lo imagina, así que usa el imperfecto de subjuntivo y el condicional. «Que no es el caso» confirma que tener más dinero es contrario a la realidad.",
              "checklist": [
                "Relaciono cada forma con cómo ve Lucía la condición.",
                "Explico el valor de «que no es el caso»."
              ]
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Boletín de la vecinal Refinería: lo que nos piden y lo que soñamos",
    "genre": "Boletín informativo de una asociación vecinal",
    "frame": "Texto original de SpanishCue con forma de boletín de una vecinal ficticia de Rosario. Los datos y las personas son inventados.",
    "text": [
      "Queridos vecinos: como cada septiembre, la Municipalidad abrió la convocatoria del presupuesto participativo. Este año las reglas cambiaron un poco. Hasta 2024 pedían que cada propuesta tuviera cincuenta firmas; ahora exigen que reunamos cien y que presentemos tres presupuestos de empresas diferentes. La comisión nos pidió también que el proyecto no superara el diez por ciento del fondo del distrito. Nos parece razonable, aunque nos obliga a trabajar más rápido.",
      "Nuestra propuesta es un taller de bicicletas en la costanera. Si conseguimos las firmas antes del día veinte, la comisión revisará el proyecto en octubre y, si lo aprueba, el barrio podrá votarlo en noviembre. Queremos que todos los vecinos lo conozcan antes de esa fecha, por eso organizamos una charla en el club el jueves. Es importante que vengan quienes no usan bicicleta: también necesitamos su opinión.",
      "Nos permitimos soñar un poco. Si el taller funcionara bien un año, podríamos pedir que el municipio lo incluyera en su programa permanente. Si además consiguiéramos voluntarios con experiencia, daríamos cursos de mecánica para adultos mayores. Y si el río no creciera tanto cada otoño, que es mucho pedir, dejaríamos las bicicletas guardadas junto al agua en lugar de llevarlas al galpón del club.",
      "No todos están de acuerdo, y está bien que sea así. En la última asamblea, algunos vecinos preferían que el dinero se destinara a iluminar las calles internas del barrio. Nos alegra que lo plantearan abiertamente. Proponemos que las dos ideas se presenten y que decida la votación. Lo que no queremos es que el barrio se quede sin proyecto por no ponernos de acuerdo a tiempo.",
      "Un último pedido práctico. La comisión nos ha recordado que las planillas de firmas deben estar completas, sin tachaduras y con el número de documento de cada vecino. El año pasado varias firmas no se contaron porque alguien escribió la dirección en lugar del documento. Les rogamos que revisen sus datos antes de firmar, para que este año no perdamos ni un solo apoyo."
    ],
    "glossary": [
      {
        "es": "la convocatoria",
        "note": "anuncio oficial que abre un plazo para participar"
      },
      {
        "es": "el galpón",
        "note": "en Argentina y otras zonas, nave o cobertizo grande"
      },
      {
        "es": "crecer (un río)",
        "note": "subir el nivel del agua"
      }
    ],
    "tasks": [
      {
        "id": "b2-02-r-comprension",
        "type": "choice",
        "prompt": "Responde según el boletín.",
        "items": [
          {
            "q": "¿Qué cambió en las reglas este año?",
            "options": [
              "Ahora se necesitan más firmas y tres presupuestos.",
              "Ya no se pueden presentar proyectos en la costanera.",
              "Solo pueden votar los socios del club."
            ],
            "answer": 0,
            "why": "Antes pedían cincuenta firmas; ahora exigen cien y tres presupuestos."
          },
          {
            "q": "¿Qué presenta la vecinal como algo poco probable?",
            "options": [
              "Que la comisión revise el proyecto.",
              "Que el río no crezca cada otoño.",
              "Que haya una charla el jueves."
            ],
            "answer": 1,
            "why": "Lo dicen con «si el río no creciera…, que es mucho pedir»."
          },
          {
            "q": "¿Qué propone la vecinal ante el desacuerdo?",
            "options": [
              "Retirar su proyecto.",
              "Unir los dos proyectos en uno.",
              "Presentar las dos ideas y dejar que decida la votación."
            ],
            "answer": 2,
            "why": "Último párrafo."
          }
        ]
      },
      {
        "id": "b2-02-r-interpretar",
        "type": "open",
        "prompt": "Interpreta el texto y apóyate en sus formas verbales.",
        "items": [
          {
            "prompt": "En 60–80 palabras, explica qué partes del boletín son requisitos, cuáles son planes posibles y cuáles son sueños. Cita una forma verbal de cada tipo.",
            "model": "Los requisitos aparecen con verbos de influencia: el municipio exige «que reunamos cien» firmas y antes pedía «que cada propuesta tuviera cincuenta». Los planes posibles van con «si + presente»: «si conseguimos las firmas…, la comisión revisará». Los sueños, en cambio, usan imperfecto de subjuntivo y condicional: «si el taller funcionara bien un año, podríamos pedir…». Así el lector sabe qué es seguro y qué es deseo.",
            "checklist": [
              "Distingo los tres tipos de información.",
              "Cito una forma verbal de cada tipo.",
              "Explico qué efecto tiene en el lector."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo cambia el tiempo del subjuntivo con el marco.",
      "items": [
        {
          "quote": "Hasta 2024 pedían que cada propuesta tuviera cincuenta firmas; ahora exigen que reunamos cien",
          "note": "En la misma frase, «pedían» (pasado) lleva imperfecto y «exigen» (presente) lleva presente."
        },
        {
          "quote": "Nos alegra que lo plantearan abiertamente.",
          "note": "Verbo principal en presente, pero la asamblea ya terminó: imperfecto de subjuntivo."
        },
        {
          "quote": "Y si el río no creciera tanto cada otoño, que es mucho pedir",
          "note": "La autora marca la hipótesis como poco realista con un comentario."
        }
      ]
    }
  },
  "practice": {
    "intro": "Integra las dos clases: el marco temporal y la distancia de la condición.",
    "exercises": [
      {
        "id": "b2-02-x-orden",
        "type": "order",
        "prompt": "Ordena las palabras. Hay más de un orden posible en una de ellas.",
        "items": [
          {
            "words": [
              "Si",
              "hubiera",
              "más",
              "bancos,",
              "los",
              "abuelos",
              "vendrían",
              "a",
              "la",
              "costanera."
            ],
            "why": "Hipótesis con «si» al principio y coma.",
            "alt": [
              "Los abuelos vendrían a la costanera si hubiera más bancos."
            ]
          },
          {
            "words": [
              "La",
              "vecinal",
              "nos",
              "pidió",
              "que",
              "trajéramos",
              "sillas",
              "para",
              "la",
              "asamblea."
            ],
            "why": "Marco pasado: «pidió» + imperfecto."
          },
          {
            "words": [
              "Esperamos",
              "que",
              "la",
              "comisión",
              "haya",
              "leído",
              "nuestra",
              "propuesta."
            ],
            "why": "Acción anterior al ahora: perfecto de subjuntivo."
          }
        ]
      },
      {
        "id": "b2-02-x-error",
        "type": "error",
        "prompt": "Corrige el error de cada frase.",
        "items": [
          {
            "sentence": "El año pasado la comisión quería que presentemos los papeles en mano.",
            "answers": [
              "El año pasado la comisión quería que presentáramos los papeles en mano.",
              "El año pasado la comisión quería que presentásemos los papeles en mano."
            ],
            "why": "«Quería» y «el año pasado»: marco pasado."
          },
          {
            "sentence": "Si el concejo aprobaría la obra, la empresa empezaría en marzo.",
            "answers": [
              "Si el concejo aprobara la obra, la empresa empezaría en marzo.",
              "Si el concejo aprobase la obra, la empresa empezaría en marzo."
            ],
            "why": "Nunca condicional después de «si»."
          },
          {
            "sentence": "Si mañana hace buen tiempo, haríamos la reunión en la plaza.",
            "answers": [
              "Si mañana hace buen tiempo, haremos la reunión en la plaza.",
              "Si mañana hace buen tiempo, hacemos la reunión en la plaza."
            ],
            "why": "Condición abierta: consecuencia en futuro o presente, no en condicional."
          },
          {
            "sentence": "Me encantaría que el barrio participe más en estas votaciones.",
            "answers": [
              "Me encantaría que el barrio participara más en estas votaciones.",
              "Me encantaría que el barrio participase más en estas votaciones."
            ],
            "why": "El condicional pide imperfecto de subjuntivo en la norma más extendida."
          }
        ]
      },
      {
        "id": "b2-02-x-condicion",
        "type": "classify",
        "prompt": "¿Cómo ve quien habla la condición? Clasifica cada frase.",
        "categories": [
          "Posible o probable",
          "Imaginada o contraria a la realidad"
        ],
        "items": [
          {
            "text": "Si votan más de mil personas, el proyecto será válido.",
            "cat": 0,
            "why": "«Si + presente», consecuencia en futuro."
          },
          {
            "text": "Si el río estuviera limpio, nadaríamos en verano.",
            "cat": 1,
            "why": "Hoy el río no está limpio."
          },
          {
            "text": "Si te sobra tiempo, pasa por la vecinal.",
            "cat": 0,
            "why": "Consecuencia en imperativo: posible."
          },
          {
            "text": "Si yo viviera frente al río, saldría a remar cada día.",
            "cat": 1,
            "why": "Situación personal imaginada."
          },
          {
            "text": "Si la empresa cumple los plazos, inauguramos en diciembre.",
            "cat": 0,
            "why": "Presente con valor futuro: plan."
          },
          {
            "text": "Si tuviéramos un millón de pesos más, construiríamos un muelle.",
            "cat": 1,
            "why": "Hipótesis lejana."
          }
        ]
      },
      {
        "id": "b2-02-x-guiada",
        "type": "open",
        "prompt": "Prepara frases para la tarea de escritura. El modelo es una posibilidad entre varias.",
        "items": [
          {
            "prompt": "Escribe un requisito actual de una institución de tu ciudad y cómo era ese requisito antes. Usa un verbo de influencia en presente y otro en pasado.",
            "model": "Ahora la biblioteca pide que reservemos los libros por internet. Antes pedía que fuéramos en persona y que firmáramos una ficha.",
            "checklist": [
              "Uso presente de subjuntivo en el marco actual.",
              "Uso imperfecto de subjuntivo en el marco pasado."
            ]
          },
          {
            "prompt": "Propón una mejora para tu barrio con dos escenarios: uno que ves posible y otro que ves lejano.",
            "model": "Si el ayuntamiento aprueba el carril bici, iré al trabajo en bicicleta. Si además cerraran la calle al tráfico los domingos, organizaríamos un mercado de vecinos.",
            "checklist": [
              "Uso «si + presente» para lo posible.",
              "Uso «si + imperfecto de subjuntivo» + condicional para lo lejano."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe una propuesta formal (200–260 palabras) a la oficina del presupuesto participativo de tu ciudad. Presenta un proyecto para tu barrio, recuerda qué pidió la oficina en la convocatoria y explica qué harías en dos escenarios: si se aprueba y si hubiera más fondos.",
    "context": "Escribes a una administración: usa «ustedes», un saludo y una despedida formales y frases claras. Puedes partir del taller de bicicletas de Rosario o proponer otro proyecto real o inventado.",
    "steps": [
      "Anota los requisitos de la convocatoria y decide en qué marco temporal los vas a contar.",
      "Planifica cuatro párrafos: presentación, requisitos cumplidos, plan si se aprueba y escenario con más fondos.",
      "Redacta sin copiar el modelo y alterna «si + presente» y «si + imperfecto de subjuntivo» con intención.",
      "Revisa la correlación de cada subjuntivo con su verbo principal y corrige cualquier condicional después de «si»."
    ],
    "useLanguage": [
      "La convocatoria pedía / pide que…",
      "Nos gustaría que…",
      "Si el proyecto resulta elegido, …",
      "Si contáramos con más fondos, …",
      "Esperamos que hayan recibido…"
    ],
    "model": [
      "Estimados miembros de la comisión: les escribimos en nombre de la vecinal Refinería para presentar el proyecto «Ruedas en la costanera», un taller gratuito de reparación y préstamo de bicicletas. Esperamos que hayan recibido la documentación que enviamos el lunes.",
      "La convocatoria pedía que cada propuesta tuviera cien firmas y que incluyera tres presupuestos. Hemos reunido ciento veinte firmas y adjuntamos los presupuestos de tres empresas del distrito. Además, la comisión nos sugirió en marzo que redujéramos el costo inicial, de modo que ahora el proyecto representa el ocho por ciento del fondo. También nos pidió que consultáramos a los clubes de remo de la zona, y tres de ellos han firmado una carta de apoyo que adjuntamos.",
      "Si el proyecto resulta elegido, abriremos el taller en enero los sábados y domingos, con dos mecánicos voluntarios. Nos gustaría que la Municipalidad nos cediera el uso del antiguo puesto de guardavidas, que hoy está vacío, para que las bicicletas no tengan que trasladarse cada día. Nos comprometemos a cuidar el edificio y a abrirlo también para otras actividades del barrio.",
      "Si en el futuro contáramos con más fondos, ampliaríamos el horario a los días de semana y ofreceríamos cursos para adultos mayores. Quedamos a su disposición para cualquier consulta. Atentamente, Lucía Benítez, vecinal Refinería."
    ],
    "checklist": [
      "Cada subjuntivo concuerda con el tiempo de su verbo principal.",
      "Distingo con claridad el plan posible del escenario imaginado.",
      "No hay futuro ni condicional después de «si».",
      "El registro es formal y el texto tiene cuatro párrafos con funciones claras.",
      "El destinatario sabe qué se le pide y qué se ofrece."
    ],
    "words": [
      200,
      260
    ]
  },
  "speaking": {
    "intro": "Habla a partir de notas breves. Si te grabas, la grabación queda en tu dispositivo y nadie la evalúa automáticamente.",
    "tasks": [
      {
        "title": "Tres minutos en la radio",
        "prompt": "Te entrevistan en una radio local sobre un proyecto para tu barrio. Explica qué proponen, qué les pidió la administración, qué pasará si sale elegido y qué harían si tuvieran el doble de recursos.",
        "prep": [
          "Escribe una frase con marco pasado y otra con marco presente.",
          "Prepara un «si + presente» y un «si + imperfecto de subjuntivo»."
        ],
        "seconds": 180,
        "model": "Proponemos convertir el terreno de la estación en una huerta comunitaria. La oficina nos pidió que demostráramos que el suelo no estaba contaminado, y ya lo hicimos. Si el proyecto gana, empezaremos a plantar en primavera. Y si tuviéramos el doble de dinero, construiríamos un invernadero para que las escuelas pudieran usarlo en invierno.",
        "selfCheck": [
          "Uso los dos marcos temporales sin mezclarlos.",
          "Entono las frases con «si» con subida y bajada.",
          "Termino con una invitación concreta a participar."
        ]
      },
      {
        "title": "La asamblea: ¿bicicletas o luces?",
        "prompt": "Tu docente es un vecino que prefiere gastar el dinero en iluminar las calles. Escucha sus razones, pregúntale qué pasaría si se hiciera primero tu proyecto, plantea hipótesis y negocia una solución que los dos puedan aceptar.",
        "prep": [
          "Prepara dos preguntas con «¿y si…?».",
          "Prepara una concesión: «Entiendo que prefieras…».",
          "Ten pensada una propuesta intermedia."
        ],
        "seconds": 180,
        "selfCheck": [
          "Pregunto y reacciono a lo que dice mi interlocutor.",
          "Uso hipótesis para proponer sin imponer.",
          "Llegamos a un acuerdo o explico por qué no."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva a clase lo que preparaste y úsalo en una conversación real con tu profesor.",
    "cards": [
      {
        "move": "Propón",
        "task": "Propón a tu profesor un cambio para la clase o la escuela con «¿y si…?» y defiende la consecuencia.",
        "phrases": [
          "¿Y si…?",
          "Así podríamos…"
        ]
      },
      {
        "move": "Compara",
        "task": "Explica qué pedían antes y qué piden ahora en un trámite que conoces (visado, matrícula, alquiler).",
        "phrases": [
          "Antes pedían que…",
          "Ahora piden que…"
        ]
      },
      {
        "move": "Imagina",
        "task": "Pregúntale a tu profesor qué haría si fuera alcalde o alcaldesa de tu ciudad durante un año, y responde tú también.",
        "phrases": [
          "Si fueras…, ¿qué…?",
          "Yo, en tu lugar, …"
        ]
      }
    ],
    "bring": "Trae tu propuesta con los verbos principales en un color y los subjuntivos en otro."
  },
  "quiz": {
    "items": [
      {
        "type": "gap",
        "q": "Cuando era chica, mis padres no dejaban que ___ (salir) sola de noche.",
        "answers": [
          [
            "saliera",
            "saliese"
          ]
        ],
        "why": "Marco pasado."
      },
      {
        "type": "gap",
        "q": "Te aconsejo que ___ (revisar) el formulario antes de enviarlo.",
        "answers": [
          [
            "revises"
          ]
        ],
        "why": "Marco presente."
      },
      {
        "type": "gap",
        "q": "Si ___ (vivir, yo) más cerca del río, iría a remar los domingos.",
        "answers": [
          [
            "viviera",
            "viviese"
          ]
        ],
        "why": "Hipótesis: imperfecto de subjuntivo."
      },
      {
        "type": "choice",
        "q": "«Me alegra que ___ el premio el mes pasado.» ¿Qué forma encaja mejor?",
        "options": [
          "ganen",
          "ganaran",
          "ganarían"
        ],
        "answer": 1,
        "why": "Pasado cerrado visto desde un presente."
      },
      {
        "type": "choice",
        "q": "¿Qué frase presenta la condición como probable?",
        "options": [
          "Si me llamaran, iría.",
          "Si me llamaran, habría ido.",
          "Si me llaman, voy."
        ],
        "answer": 2,
        "why": "«Si + presente» con consecuencia real."
      },
      {
        "type": "listen",
        "q": "¿Qué ve la hablante como poco probable?",
        "audio": "Si el puerto abriera de noche, pondríamos un puesto de comida.",
        "voice": "es-AR-f",
        "options": [
          "Que el puerto abra de noche.",
          "Que haya puestos de comida.",
          "Que el puerto cierre."
        ],
        "answer": 0,
        "why": "«Si abriera» aleja la condición."
      },
      {
        "type": "error",
        "sentence": "Si tendría tiempo, te ayudaría con la mudanza.",
        "answers": [
          "Si tuviera tiempo, te ayudaría con la mudanza.",
          "Si tuviese tiempo, te ayudaría con la mudanza."
        ],
        "why": "Después de «si», imperfecto de subjuntivo, no condicional."
      },
      {
        "type": "error",
        "sentence": "El médico me recomendó que camine más el año pasado.",
        "answers": [
          "El médico me recomendó que caminara más el año pasado.",
          "El médico me recomendó que caminase más el año pasado."
        ],
        "why": "El consejo y su contenido quedaron en el pasado."
      },
      {
        "type": "order",
        "words": [
          "Preferiríamos",
          "que",
          "el",
          "taller",
          "abriera",
          "también",
          "en",
          "invierno."
        ],
        "why": "Condicional + imperfecto de subjuntivo."
      },
      {
        "type": "open",
        "prompt": "Escribe dos frases sobre tu ciudad: una petición que hicieron las autoridades el año pasado y lo que harías tú si pudieras decidir.",
        "model": "El año pasado el gobierno pidió que ahorráramos agua. Si yo pudiera decidir, arreglaría primero las cañerías viejas.",
        "checklist": [
          "Uso marco pasado en la primera frase.",
          "Uso «si + imperfecto de subjuntivo» + condicional en la segunda."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo elegir el tiempo del subjuntivo según el verbo principal y el momento de la acción.",
      "Puedo usar el perfecto y el imperfecto de subjuntivo para mirar atrás desde el presente.",
      "Puedo presentar una condición como posible o como imaginada y negociar con hipótesis."
    ],
    "review": [
      "Mañana, cambia cinco frases de tu propuesta del marco presente al pasado sin mirar la tabla.",
      "En tres días, di en voz alta tres cosas que harías si tuvieras un mes libre y tres que harás si este fin de semana hace buen tiempo.",
      "Antes de la semana 3, recupera tu correo de la semana 1 y comprueba la correlación de cada subjuntivo."
    ]
  },
  "related": [
    {
      "path": "/gramatica/correlacion-temporal-presente-pasado-y-futuro",
      "label": "Clase: Correlación temporal: presente, pasado y futuro"
    },
    {
      "path": "/si-fuera-distinto",
      "label": "Clase: Si + imperfecto de subjuntivo + condicional"
    }
  ]
};
