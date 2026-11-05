import type { Module } from "../../types";

/**
 * B2 · semana 17 · Autoestudio espejo de G159 (perífrasis aspectuales avanzadas) y G160
 * (futuro compuesto: anterioridad y conjetura). Repaso autónomo con la restauración ficticia de una
 * lancha de madera en Puerto Montt. Audio mediante síntesis; sin acreditación regional.
 */
export const b2w17: Module = {
  "id": "b2-17",
  "level": "b2",
  "week": 17,
  "kind": "core",
  "title": "Llevamos ocho meses lijando y para marzo habremos zarpado",
  "subtitle": "Repaso de llevar, ir, venir y andar + gerundio, de las fases de una acción y del futuro compuesto para mirar atrás desde el futuro o para suponer",
  "stop": {
    "place": "Puerto Montt",
    "country": "Chile"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.g159",
    "b2.gram.g160",
    "b2.voc.w17-astillero",
    "b2.pron.w17-ha-habra",
    "b2.lis.w17-astillero-sabado",
    "b2.read.w17-cronica-lancha",
    "b2.wri.w17-informe-avance",
    "b2.spk.w17-proyecto-largo",
    "b2.fun.w17-duracion-y-plazos",
    "b2.disc.w17-cronologia-proyecto"
  ],
  "reviewObjectives": [],
  "prerequisites": [],
  "goal": {
    "canDo": "Puedo contar un proyecto largo diciendo cuánto tiempo llevo con él, cómo va avanzando y qué viene pasando, y anticipar con el futuro compuesto qué estará terminado antes de una fecha o suponer qué ha pasado.",
    "steps": [
      "Repasa «llevar» + tiempo + gerundio y las perífrasis con ir, venir y andar.",
      "Ordena las fases de una acción y forma el futuro compuesto con su punto de referencia.",
      "Escucha a dos carpinteros en un astillero y lee la crónica de una lancha que vuelve al agua.",
      "Escribe un informe de avance para quienes financian un proyecto, revísalo y defiéndelo oralmente."
    ]
  },
  "theory": {
    "intro": "En clase trabajaste estas perífrasis y el futuro compuesto con tu profesor. Aquí los repasas de otra manera: con la restauración de una lancha de madera en Puerto Montt, tablas para consultar y los errores típicos de quien cuenta un proyecto que todavía no termina.",
    "parts": [
      {
        "heading": "Cuánto tiempo llevas: llevar + tiempo + gerundio",
        "body": [
          "«Llevar» + cantidad de tiempo + gerundio mide una acción desde que empezó hasta el momento del que hablas: «llevamos ocho meses lijando el casco». Funciona en presente, en imperfecto y en futuro: «llevaba dos años trabajando en Castro cuando la conoció», «en abril llevaré un año viviendo aquí». No se usa en pretérito indefinido; para una duración cerrada di «estuve dos años viviendo en Castro» o «viví dos años en Castro».",
          "Si lo que mides es el tiempo sin hacer algo, usa «llevar» + tiempo + «sin» + infinitivo: «lleva tres semanas sin venir al astillero». Y con un lugar o un estado no hace falta gerundio: «lleva un año en Puerto Montt», «llevo una semana resfriado». Los pronombres pueden ir delante de «llevar» o pegados al gerundio: «lo llevamos pintando dos días» o «llevamos dos días pintándolo»."
        ],
        "examples": [
          {
            "es": "Rocío lleva treinta años construyendo botes.",
            "note": "Presente: la acción sigue."
          },
          {
            "es": "Cuando llegó la madera, llevábamos un mes esperándola.",
            "note": "Imperfecto: duración hasta un punto del pasado."
          },
          {
            "es": "Tomás lleva dos sábados sin aparecer por el taller.",
            "note": "«Sin» + infinitivo: tiempo sin hacer algo."
          }
        ],
        "mistakes": [
          {
            "wrong": "Llevé dos años estudiando carpintería en Valdivia.",
            "right": "Estuve dos años estudiando carpintería en Valdivia.",
            "why": "«Llevar» + gerundio no admite el indefinido: la duración cerrada se cuenta con «estar» o con el verbo solo."
          },
          {
            "wrong": "Llevamos tres meses sin lijamos la proa.",
            "right": "Llevamos tres meses sin lijar la proa.",
            "why": "Después de «sin» va el infinitivo."
          }
        ],
        "tip": "Antes de usar «llevar», pregúntate si la acción sigue abierta en el momento del que hablas. Si ya terminó, cambia de verbo."
      },
      {
        "heading": "Cómo avanza: ir, venir y andar + gerundio",
        "body": [
          "«Ir» + gerundio presenta un avance gradual, paso a paso: «el casco va tomando forma», «ve preparando las herramientas mientras llego» (empieza y continúa). «Venir» + gerundio mira desde un punto del pasado hasta hoy y suele indicar que algo se repite o insiste: «la cooperativa viene pidiendo un muelle nuevo desde 2019». Es muy frecuente en la prensa.",
          "«Andar» + gerundio es coloquial: describe una actividad que se hace aquí y allá, sin orden, y muchas veces lleva una crítica: «anda diciendo que la lancha no flotará». En México y en otras zonas se usa mucho y suele ser neutro: «ando buscando trabajo»."
        ],
        "table": {
          "caption": "Tres maneras de mirar una acción en curso",
          "head": [
            "Perífrasis",
            "Qué añade",
            "Ejemplo"
          ],
          "rows": [
            [
              "ir + gerundio",
              "avance gradual",
              "Vamos cambiando las tablas una por una."
            ],
            [
              "venir + gerundio",
              "desde un punto pasado hasta hoy, con insistencia",
              "Don Aurelio viene advirtiendo del óxido desde el verano."
            ],
            [
              "andar + gerundio",
              "actividad dispersa, a menudo con crítica",
              "Alguien anda contando que vendimos la lancha."
            ]
          ]
        },
        "examples": [
          {
            "es": "Poco a poco, los vecinos van sumándose al proyecto.",
            "note": "Ir: crecimiento gradual."
          },
          {
            "es": "El precio del roble viene subiendo desde el año pasado.",
            "note": "Venir: proceso que continúa hasta hoy."
          }
        ],
        "mistakes": [
          {
            "wrong": "Don Aurelio anda advirtiendo del óxido desde el verano, y tiene razón.",
            "right": "Don Aurelio viene advirtiendo del óxido desde el verano, y tiene razón.",
            "why": "Con un punto de inicio («desde el verano») y sin crítica, la perífrasis natural es «venir»."
          }
        ]
      },
      {
        "heading": "Las fases de una acción, en un vistazo",
        "body": [
          "Ya conoces las perífrasis de fase. Aquí solo las ordenamos para que elijas rápido. «Echarse a» y «romper a» marcan un comienzo brusco, sobre todo con llorar, reír o correr: «se echó a reír», «rompió a llover». «Volver a» indica repetición. «Estar a punto de» marca lo inminente; «estar por» significa en muchas zonas de América lo mismo, y en otras, tener ganas de hacer algo. «Acabar» + gerundio y «terminar por» + infinitivo cuentan el desenlace después de un proceso.",
          "Fíjate en que todas se pueden combinar con las anteriores: «llevábamos un mes sin lijar y volvimos a empezar»; «después de tanto discutir, acabamos aceptando su propuesta»."
        ],
        "table": {
          "caption": "Fases de una acción",
          "head": [
            "Fase",
            "Perífrasis",
            "Ejemplo"
          ],
          "rows": [
            [
              "Comienzo brusco",
              "echarse a, romper a + infinitivo",
              "Cuando vio la lancha pintada, rompió a llorar."
            ],
            [
              "Repetición",
              "volver a + infinitivo",
              "Tuvimos que volver a calafatear la popa."
            ],
            [
              "Inminencia",
              "estar a punto de, estar por + infinitivo",
              "La marea está a punto de subir."
            ],
            [
              "Desenlace",
              "acabar + gerundio, terminar por + infinitivo",
              "Acabamos comprando la madera en Chiloé."
            ]
          ]
        },
        "examples": [
          {
            "es": "Estuvimos a punto de abandonar en julio.",
            "note": "Inminencia en pasado: casi ocurrió."
          },
          {
            "es": "Terminó por reconocer que la proa estaba podrida.",
            "note": "Desenlace después de resistirse."
          }
        ]
      },
      {
        "heading": "El futuro compuesto: mirar atrás desde el futuro y suponer",
        "body": [
          "El futuro compuesto se forma con el futuro de «haber» y el participio: «habré terminado». Su uso principal es situarte en un momento futuro y mirar hacia atrás: ¿qué estará ya hecho entonces? Casi siempre aparece ese punto de referencia: «para marzo», «antes de la regata», «cuando llegue el invierno», «dentro de un año». También sirve para hacer balance hasta una fecha futura: «cuando me jubile, habré construido cuarenta botes».",
          "Sin punto de referencia futuro, la misma forma suele leerse como una suposición sobre algo que ya ocurrió: «Tomás no contesta; habrá dejado el teléfono en el taller». Es una hipótesis, no un dato, así que conviene comprobarla antes de actuar."
        ],
        "table": {
          "caption": "Futuro compuesto de «terminar»",
          "head": [
            "Persona",
            "Forma",
            "Ejemplo"
          ],
          "rows": [
            [
              "yo",
              "habré terminado",
              "Para el viernes habré terminado el timón."
            ],
            [
              "tú",
              "habrás terminado",
              "Cuando vuelvas, ya habrás terminado el curso."
            ],
            [
              "él / ella / usted",
              "habrá terminado",
              "A esta hora habrá terminado la reunión."
            ],
            [
              "nosotros / nosotras",
              "habremos terminado",
              "Antes de la regata habremos terminado el casco."
            ],
            [
              "vosotros / vosotras",
              "habréis terminado",
              "En diciembre habréis terminado la obra."
            ],
            [
              "ellos / ellas / ustedes",
              "habrán terminado",
              "Dentro de un año habrán terminado el muelle."
            ]
          ]
        },
        "examples": [
          {
            "es": "Para cuando vengan los turistas, la lancha ya habrá vuelto al agua.",
            "note": "Anterior a un punto futuro."
          },
          {
            "es": "No hay nadie en el muelle: se habrán ido a almorzar.",
            "note": "Suposición sobre algo que ya pasó."
          }
        ],
        "mistakes": [
          {
            "wrong": "Para marzo terminaremos ya el casco.",
            "right": "Para marzo ya habremos terminado el casco.",
            "why": "«Para marzo» + «ya» indica que la acción estará acabada antes de esa fecha: futuro compuesto."
          },
          {
            "wrong": "Cuando habremos terminado, haremos una fiesta.",
            "right": "Cuando hayamos terminado, haremos una fiesta.",
            "why": "Después de «cuando» con valor futuro va el subjuntivo, no el futuro compuesto."
          }
        ],
        "tip": "Busca el punto de referencia. Si lo hay, es una previsión; si no lo hay y hablas de algo ya ocurrido, es una suposición."
      }
    ]
  },
  "grammar": {
    "intro": "Primero mide y gradúa la acción; después sitúala respecto a un punto del futuro.",
    "exercises": [
      {
        "id": "b2-17-g-perifrasis",
        "type": "gap",
        "prompt": "Completa con la perífrasis que se indica entre paréntesis, en la forma correcta.",
        "items": [
          {
            "q": "Rocío ___ veinte años arreglando botes en Angelmó. (llevar, presente)",
            "answers": [
              [
                "lleva"
              ]
            ],
            "why": "Duración hasta ahora: «llevar» en presente."
          },
          {
            "q": "Cuando la conocí, ella ya ___ diez años viviendo en Calbuco. (llevar, imperfecto)",
            "answers": [
              [
                "llevaba"
              ]
            ],
            "why": "Duración hasta un punto del pasado: imperfecto."
          },
          {
            "q": "Tomás lleva un mes sin ___ por el taller. (pasar)",
            "answers": [
              [
                "pasar"
              ]
            ],
            "why": "«Sin» + infinitivo."
          },
          {
            "q": "La pintura se ___ secando poco a poco con el viento del sur. (ir, presente)",
            "answers": [
              [
                "va"
              ]
            ],
            "why": "Avance gradual: «ir» + gerundio."
          },
          {
            "q": "Los pescadores ___ reclamando un muelle nuevo desde hace años. (venir, presente)",
            "answers": [
              [
                "vienen"
              ]
            ],
            "why": "Proceso desde un punto pasado hasta hoy: «venir» + gerundio."
          },
          {
            "q": "Cuando vio la lancha en el agua, don Aurelio se echó a ___. (llorar)",
            "answers": [
              [
                "llorar"
              ]
            ],
            "why": "«Echarse a» + infinitivo: comienzo brusco."
          }
        ]
      },
      {
        "id": "b2-17-g-futuro",
        "type": "context",
        "prompt": "Lee la situación y elige la frase que la expresa mejor.",
        "items": [
          {
            "context": "Hoy es noviembre. La regata es en marzo y el casco estará terminado en febrero.",
            "q": "¿Cómo lo dice Rocío?",
            "options": [
              "Para la regata, terminaremos el casco.",
              "Para la regata ya habremos terminado el casco.",
              "Para la regata ya habíamos terminado el casco."
            ],
            "answer": 1,
            "why": "Acción acabada antes de un punto futuro: futuro compuesto."
          },
          {
            "context": "Tomás tenía que llegar a las nueve; son las diez y no contesta.",
            "q": "¿Qué frase es una suposición?",
            "options": [
              "Se habrá quedado dormido.",
              "Se quedará dormido.",
              "Se ha quedado dormido seguro, lo sé."
            ],
            "answer": 0,
            "why": "Sin punto futuro: «habrá + participio» supone algo ya ocurrido."
          },
          {
            "context": "Rocío piensa en su jubilación dentro de cinco años y hace cuentas.",
            "q": "¿Qué frase hace balance hasta una fecha futura?",
            "options": [
              "Cuando me jubile, construiré cuarenta botes.",
              "Cuando me jubilé, había construido cuarenta botes.",
              "Cuando me jubile, habré construido cuarenta botes."
            ],
            "answer": 2,
            "why": "Balance acumulado hasta un momento futuro."
          },
          {
            "context": "La cooperativa pide un muelle nuevo desde 2019 y sigue pidiéndolo hoy.",
            "q": "¿Qué frase lo resume?",
            "options": [
              "La cooperativa viene pidiendo un muelle nuevo desde 2019.",
              "La cooperativa acabó pidiendo un muelle nuevo en 2019.",
              "La cooperativa está a punto de pedir un muelle nuevo."
            ],
            "answer": 0,
            "why": "Proceso que empieza en el pasado y llega hasta hoy: «venir» + gerundio."
          }
        ]
      },
      {
        "id": "b2-17-g-reformular",
        "type": "open",
        "prompt": "Reformula cada texto de partida con la estructura que se pide. Después compara con el modelo y la lista: hay más de una versión correcta.",
        "items": [
          {
            "prompt": "Texto de partida: «Empezamos a restaurar la lancha en marzo y todavía seguimos». Exprésalo con «llevar» + tiempo + gerundio (hoy es noviembre).",
            "model": "Llevamos ocho meses restaurando la lancha.",
            "checklist": [
              "Calculo bien el tiempo transcurrido hasta hoy.",
              "Uso «llevar» en presente y el gerundio.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «No he hablado con mi hermano desde junio». Reescríbelo con «llevar» y «sin».",
            "model": "Llevo desde junio sin hablar con mi hermano.",
            "checklist": [
              "Uso «sin» + infinitivo.",
              "Mantengo el punto de inicio o lo convierto en una cantidad de tiempo.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «El 15 de diciembre, las velas ya estarán cosidas: las terminamos el 10». Exprésalo con futuro compuesto.",
            "model": "Para el 15 de diciembre ya habremos cosido las velas.",
            "checklist": [
              "Incluyo un punto de referencia futuro.",
              "Uso «habremos» + participio.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Supongo que el mecánico ya vio el motor, porque la tapa está abierta». Exprésalo como suposición con futuro compuesto.",
            "model": "El mecánico ya habrá visto el motor, porque la tapa está abierta.",
            "checklist": [
              "Uso «habrá» + participio irregular «visto».",
              "Mantengo el dato del que parte la suposición.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras del astillero y de un proyecto largo. Fíjate en los verbos: casi todos describen procesos que se alargan.",
    "groups": [
      {
        "title": "Restaurar una lancha",
        "items": [
          {
            "es": "el casco",
            "note": "cuerpo principal de una embarcación"
          },
          {
            "es": "lijar la madera",
            "note": "frotarla para dejarla lisa"
          },
          {
            "es": "calafatear",
            "note": "tapar las juntas de las tablas para que no entre agua"
          },
          {
            "es": "la proa / la popa",
            "note": "parte delantera / parte trasera del barco"
          },
          {
            "es": "botar una embarcación",
            "note": "ponerla en el agua por primera vez o tras una reparación"
          }
        ]
      },
      {
        "title": "Un proyecto que se alarga",
        "items": [
          {
            "es": "ir a paso lento",
            "note": "avanzar despacio pero sin parar"
          },
          {
            "es": "estar con el agua al cuello",
            "note": "tener demasiado trabajo o poco tiempo"
          },
          {
            "es": "cumplir un plazo",
            "note": "terminar algo en la fecha prevista"
          },
          {
            "es": "retomar un proyecto",
            "note": "volver a trabajar en algo que se había dejado"
          },
          {
            "es": "a estas alturas",
            "note": "en este punto de un proceso"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b2-17-v-astillero",
        "type": "match",
        "prompt": "Relaciona cada expresión con la situación del astillero en la que encaja.",
        "pairs": [
          {
            "left": "calafatear",
            "right": "Meter estopa y brea entre las tablas del fondo."
          },
          {
            "left": "botar una embarcación",
            "right": "Toda la caleta mira cómo la lancha entra en el mar."
          },
          {
            "left": "retomar un proyecto",
            "right": "Después de dos años parados, vuelven al taller."
          },
          {
            "left": "estar con el agua al cuello",
            "right": "Faltan tres días para la regata y no hay pintura."
          },
          {
            "left": "cumplir un plazo",
            "right": "El timón está listo el día exacto que prometieron."
          },
          {
            "left": "ir a paso lento",
            "right": "Cambian una tabla por semana, sin prisa pero sin pausa."
          }
        ],
        "why": "Cada expresión describe un momento concreto del trabajo en la lancha."
      }
    ]
  },
  "pronunciation": {
    "focus": "«Ha terminado» o «habrá terminado»: una sílaba que cambia el tiempo.",
    "explanation": [
      "El pretérito perfecto y el futuro compuesto empiezan igual, pero el futuro tiene una sílaba más y la fuerza cae al final de esa forma de «haber»: ha / ha-BRÁ, hemos / ha-bre-MOS, han / ha-BRÁN. Si no pronuncias la «br», tu oyente entiende que la acción ya ocurrió.",
      "En los gerundios, la fuerza va siempre en la sílaba de «-an-» o «-ien-»: li-JAN-do, re-cla-MAN-do, vi-VIEN-do. Si unes la perífrasis sin pausa («llevamos-ocho-meses-lijando»), suena natural. Escucha, repite y grábate en tu dispositivo; la voz sintética es un apoyo y no evalúa tu pronunciación."
    ],
    "examples": [
      {
        "es": "Rocío ha terminado el timón.",
        "note": "Perfecto: la acción ya está hecha."
      },
      {
        "es": "Rocío habrá terminado el timón para el viernes.",
        "note": "Futuro compuesto: ha-BRÁ, con punto futuro."
      },
      {
        "es": "Llevamos ocho meses lijando.",
        "note": "li-JAN-do, sin pausa entre los bloques."
      }
    ],
    "perceive": {
      "id": "b2-17-p-oido",
      "type": "listen",
      "prompt": "Escucha cada frase y elige la forma que oyes. Concéntrate en la forma de «haber».",
      "items": [
        {
          "q": "¿Qué forma oyes en la frase sobre las velas?",
          "options": [
            "han cosido",
            "habrán cosido"
          ],
          "answer": 1,
          "audio": "Para el lunes, las chicas del taller habrán cosido las velas.",
          "voice": "es-CL-f",
          "why": "Se oye «habrán»: futuro compuesto con «para el lunes»."
        },
        {
          "q": "¿Qué forma oyes en la frase sobre la marea?",
          "options": [
            "ha subido",
            "habrá subido"
          ],
          "answer": 0,
          "audio": "Mira, la marea ya ha subido y el bote flota.",
          "voice": "es-CL-m",
          "why": "«Ha subido»: pretérito perfecto, algo comprobado."
        },
        {
          "q": "¿Qué forma oyes en la frase sobre la regata?",
          "options": [
            "hemos pintado",
            "habremos pintado",
            "habíamos pintado"
          ],
          "answer": 1,
          "audio": "Antes de la regata habremos pintado el nombre en la proa.",
          "voice": "es-CL-f",
          "why": "«Habremos»: anterioridad a un punto futuro."
        },
        {
          "q": "¿Qué forma oyes en la frase sobre Tomás?",
          "options": [
            "ha ido",
            "habrá ido"
          ],
          "answer": 1,
          "audio": "Tomás no está; habrá ido a buscar clavos a la ferretería.",
          "voice": "es-CL-m",
          "why": "«Habrá ido»: suposición sobre algo ya ocurrido."
        }
      ]
    },
    "produce": [
      {
        "text": "Para marzo ya habremos botado la lancha.",
        "tip": "Marca «ha-bre-MOS» y no te comas la «br».",
        "voice": "es-CL-f"
      },
      {
        "text": "Llevamos ocho meses lijando el casco.",
        "tip": "Une la perífrasis sin pausas; fuerza en «JAN».",
        "voice": "es-CL-m"
      },
      {
        "text": "Don Aurelio viene diciendo lo mismo desde el verano.",
        "tip": "Sube un poco la voz en «mismo» para marcar la insistencia.",
        "voice": "es-CL-f"
      },
      {
        "text": "No contesta; habrá dejado el teléfono en el taller.",
        "tip": "Tono de suposición: baja la voz al final, sin seguridad.",
        "voice": "es-CL-m"
      }
    ]
  },
  "listening": {
    "title": "Sábado de lija en el astillero de Angelmó",
    "context": "Rocío, carpintera de ribera, y su sobrino Tomás restauran la «Esperanza», una lancha de madera de 1962, para la regata de marzo en Puerto Montt. Hablan en el taller mientras trabajan. Escucha primero sin transcripción. Las voces son sintéticas y no representan una variedad regional verificada.",
    "speakers": [
      {
        "id": "ro",
        "name": "Rocío",
        "voice": "es-CL-f",
        "role": "Carpintera de ribera, dirige la restauración"
      },
      {
        "id": "to",
        "name": "Tomás",
        "voice": "es-CL-m",
        "role": "Su sobrino, estudiante y voluntario"
      }
    ],
    "script": [
      {
        "speaker": "to",
        "text": "Tía, ¿sabes cuánto tiempo llevamos con esta lancha? Ocho meses. Ocho meses lijando, cambiando tablas, calafateando. Y la gente del muelle anda diciendo que no va a estar lista para la regata."
      },
      {
        "speaker": "ro",
        "text": "Que digan lo que quieran. El casco va quedando bien, tabla por tabla. Yo llevo cuarenta años haciendo esto y nunca he botado una lancha antes de tiempo. Para fin de enero habremos terminado el fondo, y en febrero solo quedará pintar."
      },
      {
        "speaker": "to",
        "text": "¿Y el motor? Don Aurelio viene advirtiendo desde el verano que está oxidado, y la verdad es que lleva semanas sin venir a revisarlo."
      },
      {
        "speaker": "ro",
        "text": "Habrá tenido problemas con la espalda otra vez. El mes pasado estuvo a punto de operarse. No te preocupes: el mecánico de Calbuco vuelve a pasar el jueves, y para cuando él termine, Aurelio ya se habrá recuperado y querrá opinar de todo."
      },
      {
        "speaker": "to",
        "text": "Ya. Oye, otra cosa. La cooperativa viene pidiendo fotos del avance para la página. ¿Les mando las del sábado pasado? Se ve la proa nueva."
      },
      {
        "speaker": "ro",
        "text": "Mándalas, pero ve preparando también un texto corto. Que digan quién ha trabajado. Si no, la gente acaba pensando que esto lo hace la municipalidad."
      },
      {
        "speaker": "to",
        "text": "Hecho. Les voy a contar también que estuvimos a punto de rendirnos en julio, con tanta lluvia. Así se entiende por qué llevamos un mes de retraso. ¿Sabes qué? Cuando la botemos, voy a llorar como un niño."
      },
      {
        "speaker": "ro",
        "text": "Yo también. La última vez que boté una lancha, mi papá se echó a reír en medio del muelle y no paró en media hora. Bueno, a lijar, que el roble no se lija solo."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación entera. ¿De qué hablan y con qué ánimo?",
        "exercise": {
          "id": "b2-17-l-global",
          "type": "choice",
          "prompt": "Elige la respuesta que resume la conversación.",
          "items": [
            {
              "q": "¿Cuál es el tema principal de la conversación?",
              "options": [
                "Si deben vender la lancha a la municipalidad.",
                "Cuánto falta para terminar la lancha y qué tareas quedan.",
                "Cómo se organiza la regata de marzo."
              ],
              "answer": 1,
              "why": "Repasan el avance, el plazo y lo pendiente."
            },
            {
              "q": "¿Qué actitud tiene Rocío ante las críticas del muelle?",
              "options": [
                "Está tranquila y confía en el plazo.",
                "Está enfadada y quiere responderles.",
                "Piensa que tienen razón."
              ],
              "answer": 0,
              "why": "«Que digan lo que quieran»: confía en su experiencia."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y localiza los datos concretos.",
        "exercise": {
          "id": "b2-17-l-detalle",
          "type": "choice",
          "prompt": "Responde con la información exacta del audio.",
          "items": [
            {
              "q": "¿Qué estará terminado a fines de enero?",
              "options": [
                "La pintura.",
                "El motor.",
                "El fondo de la lancha."
              ],
              "answer": 2,
              "why": "«Para fin de enero habremos terminado el fondo»."
            },
            {
              "q": "¿Por qué supone Rocío que don Aurelio no viene?",
              "options": [
                "Porque está enfadado con Tomás.",
                "Porque habrá tenido problemas con la espalda.",
                "Porque está trabajando en Calbuco."
              ],
              "answer": 1,
              "why": "Es una suposición con futuro compuesto."
            },
            {
              "q": "¿Qué le pide Rocío a Tomás además de las fotos?",
              "options": [
                "Un texto que diga quién ha trabajado.",
                "Una lista de gastos.",
                "Una invitación para la regata."
              ],
              "answer": 0,
              "why": "Quiere que se sepa que no lo hace la municipalidad."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Ahora fíjate en la forma. Puedes leer la transcripción después de responder.",
        "exercise": {
          "id": "b2-17-l-forma",
          "type": "classify",
          "prompt": "Clasifica cada fragmento del diálogo según lo que expresa.",
          "categories": [
            "Duración o avance de una acción",
            "Anterioridad a un momento futuro",
            "Suposición sobre algo ya ocurrido"
          ],
          "items": [
            {
              "text": "llevo cuarenta años haciendo esto",
              "cat": 0,
              "why": "«Llevar» + tiempo + gerundio."
            },
            {
              "text": "para fin de enero habremos terminado el fondo",
              "cat": 1,
              "why": "Futuro compuesto con punto de referencia."
            },
            {
              "text": "habrá tenido problemas con la espalda",
              "cat": 2,
              "why": "Sin punto futuro: hipótesis."
            },
            {
              "text": "el casco va quedando bien",
              "cat": 0,
              "why": "«Ir» + gerundio: avance gradual."
            },
            {
              "text": "Aurelio ya se habrá recuperado",
              "cat": 1,
              "why": "«Para cuando él termine»: punto futuro."
            },
            {
              "text": "viene advirtiendo desde el verano",
              "cat": 0,
              "why": "«Venir» + gerundio: desde un punto pasado hasta hoy."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "La «Esperanza» vuelve al agua (o casi)",
    "genre": "Crónica para el boletín de una cooperativa de pescadores",
    "frame": "Texto original de SpanishCue escrito como crónica del boletín ficticio de la Cooperativa de Pescadores de Angelmó. Las personas y la lancha son inventadas.",
    "text": [
      "Cuando este boletín llegue a sus casas, la «Esperanza» habrá cumplido sesenta y dos años. Es una lancha de alerce y roble que durante décadas llevó mariscos de Chiloé a Puerto Montt, y que lleva desde 2015 abandonada en una esquina del astillero. Este año, un grupo de socios decidió que no se iba a pudrir allí. Desde marzo, cada sábado, la cooperativa viene reuniendo voluntarios para restaurarla.",
      "El trabajo va a paso lento. La dirige Rocío Aguilar, carpintera de ribera, que lleva cuarenta años construyendo y reparando embarcaciones. «Al principio pensé que bastaba con cambiar diez tablas», cuenta. «Acabamos cambiando cuarenta y tres». Cada tabla nueva hay que curvarla con vapor, ajustarla y calafatearla a mano, con estopa y brea, como se hacía antes. Su sobrino Tomás, estudiante de Ingeniería en Puerto Montt, lleva ocho meses sin faltar un sábado, aunque reconoce que en julio estuvo a punto de abandonar: «Llovió tres fines de semana seguidos y no se podía trabajar».",
      "No todo depende del grupo. El motor original, un diésel de 1970, viene dando problemas desde el primer día. Don Aurelio Mancilla, que fue el último patrón de la lancha, lo conoce mejor que nadie, pero lleva semanas sin aparecer por el astillero. «Habrá tenido que cuidarse», dicen en el muelle, y nadie se atreve a llamarlo para no molestar. Mientras tanto, un mecánico de Calbuco vuelve a revisarlo cada quince días.",
      "Los plazos son ajustados, pero Rocío los tiene claros. Para fines de enero habrán terminado el fondo; en febrero pintarán el casco de azul y blanco, los colores de la primera dueña; y antes de la regata del 10 de marzo habrán probado el motor en la bahía. Si todo sale bien, ese día la «Esperanza» saldrá del muelle de Angelmó con doce voluntarios a bordo.",
      "¿Y después? Nadie lo ha decidido todavía. Algunos proponen usarla para paseos escolares; otros, dejarla como museo flotante. Lo que sí está claro es que, cuando la boten, la cooperativa habrá recuperado algo más que una lancha: habrá vuelto a juntar a tres generaciones de la caleta en torno a un mismo trabajo. Si quieres colaborar, los sábados desde las nueve hay café, pan amasado y siempre una lija libre."
    ],
    "glossary": [
      {
        "es": "el carpintero de ribera",
        "note": "artesano que construye y repara barcos de madera"
      },
      {
        "es": "el patrón",
        "note": "persona que dirige una embarcación de pesca"
      },
      {
        "es": "la caleta",
        "note": "en Chile, pequeño puerto de pescadores y su comunidad"
      }
    ],
    "tasks": [
      {
        "id": "b2-17-r-comprension",
        "type": "choice",
        "prompt": "Responde según la crónica.",
        "items": [
          {
            "q": "¿Cuántas tablas pensaba cambiar Rocío al principio?",
            "options": [
              "Cuarenta y tres.",
              "Diez.",
              "Todas las del fondo."
            ],
            "answer": 1,
            "why": "«Pensé que bastaba con cambiar diez tablas»; al final fueron cuarenta y tres."
          },
          {
            "q": "¿Qué hará el grupo antes de la regata del 10 de marzo?",
            "options": [
              "Probar el motor en la bahía.",
              "Vender la lancha a un museo.",
              "Cambiar el motor por uno nuevo."
            ],
            "answer": 0,
            "why": "«Antes de la regata del 10 de marzo habrán probado el motor en la bahía»."
          },
          {
            "q": "Según la crónica, ¿qué habrá recuperado la cooperativa?",
            "options": [
              "Solo una lancha antigua.",
              "El dinero invertido en la madera.",
              "La unión de varias generaciones de la caleta."
            ],
            "answer": 2,
            "why": "El último párrafo lo dice: «algo más que una lancha»."
          }
        ]
      },
      {
        "id": "b2-17-r-interpretar",
        "type": "open",
        "prompt": "Interpreta el texto con tus palabras y apóyate en citas.",
        "items": [
          {
            "prompt": "Explica en 60–80 palabras por qué el proyecto avanza despacio y si crees que estará listo a tiempo. Usa una perífrasis con «llevar», «venir» o «ir» y un futuro compuesto, y cita una frase del texto.",
            "model": "El proyecto va despacio porque cada tabla se trabaja a mano y el motor viene dando problemas desde el primer día. Además, Rocío reconoce que «acabamos cambiando cuarenta y tres» tablas, y no diez. Aun así, creo que llegarán: llevan ocho meses sin faltar un sábado y tienen un plan claro. Para fines de enero habrán terminado el fondo, así que febrero les basta para pintar.",
            "checklist": [
              "Explico al menos dos causas del ritmo lento.",
              "Cito una frase literal del texto.",
              "Doy mi pronóstico con un futuro compuesto."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo la crónica sitúa cada acción en el tiempo.",
      "items": [
        {
          "quote": "Cuando este boletín llegue a sus casas, la «Esperanza» habrá cumplido sesenta y dos años",
          "note": "El cronista se sitúa en el momento de la lectura y mira hacia atrás: futuro compuesto con «cuando» + subjuntivo."
        },
        {
          "quote": "lleva ocho meses sin faltar un sábado",
          "note": "«Llevar» + tiempo + «sin» + infinitivo mide una constancia que sigue hasta hoy."
        },
        {
          "quote": "«Habrá tenido que cuidarse», dicen en el muelle",
          "note": "Sin punto futuro, el futuro compuesto es una suposición; el texto la atribuye a la gente del muelle y no la presenta como dato."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina las dos clases: mide y gradúa una acción en curso y sitúa sus resultados respecto a una fecha futura.",
    "exercises": [
      {
        "id": "b2-17-x-orden",
        "type": "order",
        "prompt": "Ordena las palabras para reconstruir lo que escribió Tomás en la página de la cooperativa.",
        "items": [
          {
            "words": [
              "Llevamos",
              "tres",
              "sábados",
              "sin",
              "poder",
              "trabajar",
              "por",
              "la",
              "lluvia."
            ],
            "why": "«Llevar» + tiempo + «sin» + infinitivo."
          },
          {
            "words": [
              "Para",
              "febrero",
              "habremos",
              "cambiado",
              "todas",
              "las",
              "tablas",
              "del",
              "fondo."
            ],
            "why": "Futuro compuesto con punto de referencia."
          },
          {
            "words": [
              "Los",
              "vecinos",
              "van",
              "sumándose",
              "al",
              "proyecto",
              "cada",
              "semana."
            ],
            "why": "«Ir» + gerundio con el pronombre pegado al gerundio."
          }
        ]
      },
      {
        "id": "b2-17-x-error",
        "type": "error",
        "prompt": "Cada frase tiene un error. Escríbela corregida.",
        "items": [
          {
            "sentence": "El año pasado llevé seis meses trabajando en una salmonera.",
            "answers": [
              "El año pasado estuve seis meses trabajando en una salmonera.",
              "El año pasado trabajé seis meses en una salmonera."
            ],
            "why": "«Llevar» + gerundio no se usa en indefinido para una duración cerrada."
          },
          {
            "sentence": "Cuando habrás terminado la lija, avísame.",
            "answers": [
              "Cuando hayas terminado la lija, avísame.",
              "Cuando termines la lija, avísame."
            ],
            "why": "Tras «cuando» con valor futuro va subjuntivo."
          },
          {
            "sentence": "Para el domingo habremos ponido la quilla nueva.",
            "answers": [
              "Para el domingo habremos puesto la quilla nueva."
            ],
            "why": "El participio de «poner» es «puesto»."
          },
          {
            "sentence": "Mi abuelo lleva un año sin fuma.",
            "answers": [
              "Mi abuelo lleva un año sin fumar."
            ],
            "why": "Después de «sin» va el infinitivo."
          }
        ]
      },
      {
        "id": "b2-17-x-lectura",
        "type": "classify",
        "prompt": "¿Previsión o suposición? Clasifica cada frase con futuro compuesto.",
        "categories": [
          "Previsión: terminado antes de un punto futuro",
          "Suposición sobre algo ya ocurrido"
        ],
        "items": [
          {
            "text": "Dentro de un mes habremos terminado la cubierta.",
            "cat": 0,
            "why": "«Dentro de un mes» es el punto futuro."
          },
          {
            "text": "Rocío no contesta; habrá salido a navegar.",
            "cat": 1,
            "why": "Hipótesis para explicar algo presente."
          },
          {
            "text": "Cuando llegue el invierno, ya habrán guardado la lancha.",
            "cat": 0,
            "why": "«Cuando llegue el invierno»: punto futuro."
          },
          {
            "text": "Hay serrín por todas partes: habrán trabajado toda la mañana.",
            "cat": 1,
            "why": "Deducción a partir de una pista."
          },
          {
            "text": "Antes del lunes habré enviado las fotos.",
            "cat": 0,
            "why": "«Antes del lunes»: previsión."
          },
          {
            "text": "La puerta está abierta; alguien se la habrá dejado así.",
            "cat": 1,
            "why": "Suposición sobre quién lo hizo."
          }
        ]
      },
      {
        "id": "b2-17-x-guiada",
        "type": "open",
        "prompt": "Escribe frases breves antes de la tarea de escritura. El modelo es una posibilidad, no la única.",
        "items": [
          {
            "prompt": "Habla de una actividad que haces desde hace tiempo y de algo que llevas tiempo sin hacer.",
            "model": "Llevo cuatro años cantando en un coro de mi barrio. En cambio, llevo desde la pandemia sin tocar la guitarra, y la tengo llena de polvo.",
            "checklist": [
              "Uso «llevar» + tiempo + gerundio.",
              "Uso «llevar» + tiempo + «sin» + infinitivo."
            ]
          },
          {
            "prompt": "Escribe tres cosas que habrás hecho antes de terminar este año, con un punto de referencia en cada una.",
            "model": "Antes de diciembre habré terminado el curso de B2. Para Navidad habré ahorrado lo suficiente para un viaje corto. Y cuando llegue el verano, ya habré aprendido a nadar en aguas abiertas.",
            "checklist": [
              "Cada frase tiene un punto de referencia futuro.",
              "Uso participios irregulares cuando hace falta."
            ]
          },
          {
            "prompt": "Alguien critica un proyecto tuyo. Escribe cómo lo cuentas y cómo acabó la situación.",
            "model": "Un compañero anda diciendo que mi propuesta es demasiado cara. Al principio me enfadé, pero acabé reconociendo que tenía algo de razón y volví a hacer las cuentas.",
            "checklist": [
              "Uso «andar» + gerundio con valor crítico.",
              "Cuento el desenlace con «acabar» + gerundio o «terminar por»."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Formas parte del grupo que restaura la «Esperanza». Escribe un informe de avance (200–260 palabras) para las personas que financian el proyecto: cuánto tiempo llevan trabajando, cómo va avanzando, qué ha costado más de lo previsto, qué habrán terminado antes de la regata y alguna suposición sobre un problema pendiente.",
    "context": "Quienes leen el informe pusieron dinero y quieren saber si el plazo se cumplirá. El tono es cordial pero preciso. Puedes usar los datos de la lancha o inventar otro proyecto largo (una huerta, una obra de teatro, una reforma).",
    "steps": [
      "Anota fechas clave: inicio, hoy y la fecha límite. Calcula la duración de cada tarea.",
      "Ordena el informe: saludo y motivo, lo hecho hasta hoy, dificultades, lo que estará hecho antes de la fecha límite y cierre.",
      "Usa «llevar» + gerundio, «ir», «venir» o «andar» + gerundio, una perífrasis de fase y al menos tres futuros compuestos.",
      "Revisa cada futuro compuesto: ¿tiene punto de referencia o es una suposición? Corrige los «cuando» con futuro."
    ],
    "useLanguage": [
      "llevamos + tiempo + gerundio",
      "llevamos + tiempo + sin + infinitivo",
      "va / viene + gerundio",
      "estuvimos a punto de… / acabamos + gerundio",
      "para + fecha, habremos + participio",
      "habrá + participio (suposición)"
    ],
    "model": [
      "Estimados socios y socias: les escribimos para contarles cómo va la restauración de la «Esperanza» y cómo pensamos cumplir el plazo de la regata del 10 de marzo.",
      "Llevamos ocho meses trabajando todos los sábados y el casco va tomando forma. Hasta hoy hemos cambiado cuarenta y tres tablas, muchas más de las diez previstas, porque el roble del fondo estaba más podrido de lo que parecía. En julio estuvimos a punto de parar: llovió tres fines de semana seguidos y llevábamos un mes sin poder lijar. Aun así, acabamos recuperando el ritmo gracias a los voluntarios que se van sumando cada semana.",
      "El motor viene dando problemas desde el principio. Don Aurelio, que lo conoce bien, lleva semanas sin venir; habrá tenido algún problema de salud, y preferimos no molestarlo. Por eso el mecánico de Calbuco lo revisa cada quince días, y nos ha prometido un presupuesto detallado antes de Navidad para que ustedes puedan valorarlo.",
      "Nuestro calendario es el siguiente. Para fines de enero habremos terminado el fondo; a mediados de febrero habremos pintado el casco, y antes de la regata habremos probado el motor en la bahía. Cuando lean nuestro próximo informe, la lancha ya habrá vuelto al agua, o eso esperamos. Les iremos enviando fotos cada mes. Gracias por su confianza. Un saludo cordial, el equipo de la «Esperanza»."
    ],
    "checklist": [
      "Mido las duraciones con «llevar» y no lo uso en indefinido.",
      "Gradúo el avance con «ir», «venir» o «andar» según el sentido.",
      "Cada futuro compuesto tiene un punto de referencia o se entiende como suposición.",
      "Separo lo hecho, las dificultades y el calendario.",
      "El registro es cordial y adecuado para quienes financian el proyecto."
    ],
    "words": [
      200,
      260
    ]
  },
  "speaking": {
    "intro": "Prepara palabras clave, no un texto para leer. Si te grabas, la grabación queda en tu dispositivo; la aplicación no evalúa tu pronunciación.",
    "tasks": [
      {
        "title": "Mi proyecto más largo",
        "prompt": "Habla durante unos dos minutos y medio de algo que llevas mucho tiempo haciendo (un idioma, un deporte, una colección, un trabajo). Cuenta cuánto tiempo llevas, cómo ha ido avanzando, un momento en que estuviste a punto de dejarlo y qué habrás conseguido dentro de un año.",
        "prep": [
          "Calcula duraciones exactas para usar «llevar» + gerundio.",
          "Prepara una perífrasis de fase y dos futuros compuestos con punto de referencia."
        ],
        "seconds": 150,
        "model": "Llevo seis años corriendo. Empecé para dejar de fumar y poco a poco fui aumentando la distancia. Hace dos años me lesioné la rodilla y estuve a punto de abandonar, pero acabé volviendo con un entrenador. Ahora llevo tres meses preparando mi primera maratón. Para octubre habré corrido más de mil kilómetros en entrenamientos, y si todo sale bien, dentro de un año habré terminado dos maratones.",
        "selfCheck": [
          "Uso «llevar» solo para acciones que siguen abiertas.",
          "Pronuncio «habré» con la «br» completa.",
          "Termino con una previsión clara con futuro compuesto."
        ]
      },
      {
        "title": "¿Llegaremos a tiempo?",
        "prompt": "Tu docente financia tu proyecto y está preocupado por el plazo. Escucha sus dudas, explícale cuánto tiempo llevan con cada tarea, qué estará hecho antes de cada fecha y negocia un calendario realista. Si te pregunta por algo que no sabes, haz una suposición y ofrece comprobarla.",
        "prep": [
          "Prepara tres fechas con «para…» o «antes de…» y lo que habrás terminado.",
          "Prepara una suposición con «habrá + participio» y una frase para comprobarla.",
          "Piensa qué tarea podrías aplazar si hace falta."
        ],
        "seconds": 180,
        "selfCheck": [
          "Respondo a las dudas concretas de mi interlocutor.",
          "Distingo lo que sé de lo que supongo.",
          "Cerramos un calendario con fechas."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva a la próxima clase lo que preparaste esta semana y úsalo con tu profesor.",
    "cards": [
      {
        "move": "Mide",
        "task": "Cuéntale a tu profesor cuánto tiempo llevas estudiando español, qué vas mejorando y qué llevas tiempo sin practicar.",
        "phrases": [
          "Llevo… estudiando…",
          "Voy mejorando en…",
          "Llevo meses sin…"
        ]
      },
      {
        "move": "Anticipa",
        "task": "Pregúntale qué habrá hecho él o ella antes de terminar el curso y dile qué habrás hecho tú.",
        "phrases": [
          "¿Qué habrás terminado para…?",
          "Para entonces yo ya habré…"
        ]
      },
      {
        "move": "Supón",
        "task": "Describe a un compañero que hoy no vino y propón dos suposiciones con futuro compuesto; tu profesor dice si suenan naturales.",
        "phrases": [
          "Habrá tenido…",
          "Se le habrá…"
        ]
      }
    ],
    "bring": "Trae tu informe de avance con las perífrasis subrayadas y una frase con futuro compuesto que no sepas si es previsión o suposición."
  },
  "quiz": {
    "items": [
      {
        "type": "gap",
        "q": "Mis padres ___ treinta años viviendo en la misma casa de Osorno. (llevar, presente)",
        "answers": [
          [
            "llevan"
          ]
        ],
        "why": "Duración hasta hoy: «llevar» en presente."
      },
      {
        "type": "gap",
        "q": "Para cuando llegues a la estación, nosotros ya ___ (comprar) los billetes.",
        "answers": [
          [
            "habremos comprado"
          ]
        ],
        "why": "Anterioridad a un punto futuro: futuro compuesto."
      },
      {
        "type": "gap",
        "q": "Al oír la noticia, los niños rompieron a ___. (reír)",
        "answers": [
          [
            "reír"
          ]
        ],
        "why": "«Romper a» + infinitivo: comienzo brusco."
      },
      {
        "type": "choice",
        "q": "«Mi vecina anda diciendo que el edificio se va a vender.» ¿Qué matiz tiene «anda diciendo»?",
        "options": [
          "Lo dice una sola vez, con seguridad.",
          "Lo va diciendo por ahí, con un tono crítico.",
          "Lo dirá en el futuro."
        ],
        "answer": 1,
        "why": "«Andar» + gerundio: actividad dispersa, a menudo crítica."
      },
      {
        "type": "choice",
        "q": "«Luis no ha llegado; habrá perdido el autobús.» ¿Qué expresa el futuro compuesto aquí?",
        "options": [
          "Una previsión con fecha.",
          "Una orden.",
          "Una suposición sobre algo ya ocurrido."
        ],
        "answer": 2,
        "why": "Sin punto futuro: hipótesis."
      },
      {
        "type": "listen",
        "q": "Según el audio, ¿cuánto tiempo lleva el muelle cerrado?",
        "audio": "El muelle de pasajeros lleva dos meses cerrado por obras, y la empresa viene prometiendo abrirlo desde agosto.",
        "voice": "es-CL-f",
        "options": [
          "Desde agosto.",
          "Dos meses.",
          "Una semana."
        ],
        "answer": 1,
        "why": "«Lleva dos meses cerrado»; agosto es desde cuando prometen abrirlo."
      },
      {
        "type": "error",
        "sentence": "En 2020 llevé un año sin ver a mis abuelos.",
        "answers": [
          "En 2020 estuve un año sin ver a mis abuelos.",
          "En 2020 pasé un año sin ver a mis abuelos."
        ],
        "why": "Duración cerrada en el pasado: no se usa «llevar» en indefinido."
      },
      {
        "type": "error",
        "sentence": "Cuando habremos ahorrado bastante, compraremos un velero.",
        "answers": [
          "Cuando hayamos ahorrado bastante, compraremos un velero.",
          "Cuando ahorremos bastante, compraremos un velero."
        ],
        "why": "Tras «cuando» con valor futuro va subjuntivo."
      },
      {
        "type": "order",
        "words": [
          "El",
          "precio",
          "del",
          "pasaje",
          "viene",
          "subiendo",
          "desde",
          "enero."
        ],
        "why": "«Venir» + gerundio: proceso desde un punto pasado hasta hoy."
      },
      {
        "type": "open",
        "prompt": "Escribe dos frases sobre un plan de los próximos meses: una con «llevar» + tiempo + gerundio sobre lo que ya hiciste y otra con futuro compuesto sobre lo que estará terminado antes de una fecha.",
        "model": "Llevo tres semanas buscando departamento en Puerto Montt. Para fin de mes habré firmado el contrato y habré hecho la mudanza.",
        "checklist": [
          "Uso «llevar» para una acción que sigue abierta.",
          "Incluyo un punto de referencia futuro con el futuro compuesto."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo medir la duración de una acción abierta con «llevar» + gerundio o + «sin» + infinitivo, y evitarlo en duraciones cerradas.",
      "Puedo matizar una acción en curso con ir, venir y andar + gerundio y ordenar sus fases con echarse a, volver a, estar a punto de o acabar + gerundio.",
      "Puedo usar el futuro compuesto para decir qué estará terminado antes de un momento futuro, hacer balance hasta una fecha y suponer qué ha pasado."
    ],
    "review": [
      "Mañana, sin mirar la tabla, conjuga «haber terminado» en futuro para todas las personas y escribe una frase con cada una.",
      "En tres días, cuenta en voz alta tres cosas que llevas tiempo haciendo y dos que llevas tiempo sin hacer.",
      "Antes de la semana 18, relee tu informe y marca qué futuros compuestos son previsiones y cuáles suposiciones."
    ]
  },
  "related": [
    {
      "path": "/gramatica/perifrasis-aspectuales-avanzadas",
      "label": "Clase: Perífrasis aspectuales avanzadas"
    },
    {
      "path": "/sistema-verbal/futuro-compuesto-indicativo",
      "label": "Clase: Futuro compuesto: anterioridad y conjetura"
    }
  ]
};
