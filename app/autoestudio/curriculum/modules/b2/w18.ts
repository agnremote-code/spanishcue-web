import type { Module } from "../../types";

/**
 * B2 · semana 18 · Autoestudio espejo de G161 (futuro y condicional de probabilidad) y G162
 * (nominalización y grupos nominales complejos). Repaso autónomo con la catalogación ficticia del baúl
 * de una familia inmigrante en un museo de Punta Arenas. Audio mediante síntesis; sin acreditación regional.
 */
export const b2w18: Module = {
  "id": "b2-18",
  "level": "b2",
  "week": 18,
  "kind": "core",
  "title": "Tendría veinte años: el baúl que llegó a Punta Arenas",
  "subtitle": "Repaso del futuro y el condicional para suponer en presente y en pasado, y de los grupos nominales precisos: elipsis, relativas con y sin comas, «de» explícito y nominalización",
  "stop": {
    "place": "Punta Arenas",
    "country": "Chile"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.g161",
    "b2.gram.g162",
    "b2.voc.w18-archivo-museo",
    "b2.pron.w18-comas-relativas",
    "b2.lis.w18-baul-archivo",
    "b2.read.w18-ficha-exposicion",
    "b2.wri.w18-cartela-y-consulta",
    "b2.spk.w18-suponer-historia",
    "b2.fun.w18-conjeturar-precisar",
    "b2.disc.w18-texto-expositivo-preciso"
  ],
  reviewObjectives: ["b2.gram.g159","b2.gram.g160","b2.voc.w17-astillero","b2.pron.w17-ha-habra","b2.lis.w17-astillero-sabado","b2.read.w17-cronica-lancha","b2.wri.w17-informe-avance","b2.spk.w17-proyecto-largo","b2.fun.w17-duracion-y-plazos","b2.disc.w17-cronologia-proyecto"],
  prerequisites: ["b2-17"],
  "goal": {
    "canDo": "Puedo hacer suposiciones sobre el presente y el pasado moviendo el verbo un tiempo hacia adelante (serán, serían, habrá salido), conceder con «será…, pero» y escribir grupos nominales precisos, sin elipsis ambiguas ni relativas mal puntuadas.",
    "steps": [
      "Repasa cómo el futuro y el condicional sirven para suponer y cómo se distinguen de una hipótesis con «si».",
      "Revisa la elipsis, las relativas con y sin comas, las relaciones de «de» y la nominalización.",
      "Escucha a una archivera y a un voluntario abrir un baúl y lee la ficha de una pequeña exposición.",
      "Escribe una cartela y una consulta al público, revísalas y presenta oralmente tus hipótesis."
    ]
  },
  "theory": {
    "intro": "En clase trabajaste estas dos herramientas con tu profesor. Aquí las repasas de otra manera: con un baúl de 1912 que aparece en un museo de Punta Arenas, tablas para consultar y los errores que más aparecen cuando alguien adivina el pasado o redacta un texto informativo.",
    "parts": [
      {
        "heading": "Suponer: el verbo avanza un paso",
        "body": [
          "Para presentar algo como suposición y no como dato, el español mueve el verbo un tiempo hacia adelante. Lo que sería presente pasa a futuro simple: «serán las ocho» (supongo que son las ocho). Lo que sería pretérito perfecto pasa a futuro compuesto: «habrá llegado». Lo que sería imperfecto o indefinido pasa a condicional simple: «tendría veinte años cuando se embarcó», «se conocerían en el puerto». Y lo que sería pluscuamperfecto pasa a condicional compuesto: «ya habría salido de Split cuando empezó la guerra».",
          "Las preguntas con esos tiempos expresan duda o curiosidad, no piden un dato a nadie: «¿Quién será la mujer de la foto?», «¿Por qué guardaría estas cartas?». Son muy útiles cuando piensas en voz alta."
        ],
        "table": {
          "caption": "Del dato a la suposición",
          "head": [
            "Dato",
            "Suposición",
            "Ejemplo"
          ],
          "rows": [
            [
              "presente: es",
              "futuro simple: será",
              "Será la letra de su madre."
            ],
            [
              "perfecto: ha salido",
              "futuro compuesto: habrá salido",
              "Alguien habrá abierto el baúl antes."
            ],
            [
              "imperfecto / indefinido: tenía, llegó",
              "condicional simple: tendría, llegaría",
              "Llegaría en un barco de vapor."
            ],
            [
              "pluscuamperfecto: había salido",
              "condicional compuesto: habría salido",
              "Ya habría vendido la casa cuando escribió."
            ]
          ]
        },
        "examples": [
          {
            "es": "—¿Qué hora es? —No sé, serán las once.",
            "note": "Suposición sobre el presente."
          },
          {
            "es": "El sello está borroso; lo pondrían en la aduana.",
            "note": "Suposición sobre el pasado: condicional."
          }
        ],
        "mistakes": [
          {
            "wrong": "Cuando llegó a Punta Arenas tendrá veinte años.",
            "right": "Cuando llegó a Punta Arenas tendría veinte años.",
            "why": "La suposición es sobre el pasado (llegó): condicional, no futuro."
          },
          {
            "wrong": "¿Quién habría sido la mujer de la foto?",
            "right": "¿Quién sería la mujer de la foto?",
            "why": "Se supone sobre un estado pasado (era): basta el condicional simple."
          }
        ],
        "tip": "Di primero la frase como dato. Luego mueve el verbo un paso: presente → futuro, pasado → condicional."
      },
      {
        "heading": "Conceder, comparar y no confundir con una hipótesis",
        "body": [
          "Con «pero», estos tiempos sirven para conceder algo y oponer otra idea: «será muy antiguo, pero está perfecto» (acepto que es antiguo); «tendría dinero, pero vivía con muy poco». Para suponer también tienes otras formas, cada una con su modo: «a lo mejor» + indicativo, «quizás» o «tal vez» + indicativo o subjuntivo, «seguramente» + indicativo, «debe de» + infinitivo y «puede que» + subjuntivo.",
          "No confundas el condicional de suposición con el de una hipótesis. «Tendría veinte años» supone algo real del pasado; «si tuviera veinte años, viajaría» imagina una condición irreal. En muchas zonas de América el futuro simple se usa poco para hablar de planes («voy a viajar»), pero el futuro de suposición sigue vivo en todas partes."
        ],
        "examples": [
          {
            "es": "Será caro, pero vale cada peso.",
            "note": "Concesión: acepto que es caro."
          },
          {
            "es": "Puede que la foto sea de 1915.",
            "note": "«Puede que» + subjuntivo."
          },
          {
            "es": "Seguramente la escribió su hermano.",
            "note": "«Seguramente» + indicativo."
          }
        ],
        "mistakes": [
          {
            "wrong": "A lo mejor la carta sea de su novia.",
            "right": "A lo mejor la carta es de su novia.",
            "why": "«A lo mejor» va con indicativo."
          }
        ]
      },
      {
        "heading": "Grupos nominales precisos: elipsis y relativas",
        "body": [
          "Cuando omites un nombre («las de 1912», «los del puerto»), el lector tiene que poder recuperarlo sin dudar. Si antes mencionaste fotos y postales, «las de 1912» puede ser cualquiera de las dos: repite el nombre. Si solo hablaste de fotos, la elipsis es clara.",
          "Las relativas sin comas seleccionan una parte: «las cartas que están escritas en croata» (hay otras que no). Las relativas entre comas comentan algo de todo el grupo: «las cartas, que están escritas en croata, …» (todas lo están). «Quien» y «el cual» sin preposición solo aparecen en las de comas; en una restrictiva usa «que»."
        ],
        "table": {
          "caption": "Con comas o sin comas",
          "head": [
            "Tipo",
            "Qué hace",
            "Ejemplo"
          ],
          "rows": [
            [
              "Restrictiva (sin comas)",
              "selecciona una parte",
              "Los objetos que llegaron rotos están en el taller."
            ],
            [
              "Explicativa (entre comas)",
              "añade un dato sobre todos",
              "Los objetos, que llegaron rotos, están en el taller."
            ],
            [
              "Explicativa con referente único",
              "comenta, siempre con comas",
              "La directora, que es historiadora, firmó la ficha."
            ]
          ]
        },
        "examples": [
          {
            "es": "En el baúl hay fotos y postales. Cataloga primero las postales de 1912.",
            "note": "Se repite el nombre: «las de 1912» sería ambiguo."
          },
          {
            "es": "Hablamos de dos cartas: una larga y una corta. La corta está fechada.",
            "note": "Un solo candidato posible: elipsis clara."
          }
        ],
        "mistakes": [
          {
            "wrong": "Los voluntarios quienes trabajan los martes catalogan las fotos.",
            "right": "Los voluntarios que trabajan los martes catalogan las fotos.",
            "why": "En una restrictiva no se usa «quien»: va «que»."
          },
          {
            "wrong": "Mi abuela que vivía en Porvenir guardaba las cartas.",
            "right": "Mi abuela, que vivía en Porvenir, guardaba las cartas.",
            "why": "Con un referente único, la relativa comenta: entre comas."
          }
        ]
      },
      {
        "heading": "Qué relación expresa «de», el género que cambia el sentido y la nominalización",
        "body": [
          "«De» puede expresar muchas relaciones: «el retrato de Ana» puede ser el que Ana hizo, el que la muestra o el que le pertenece. Si el contexto no lo aclara, hazlo explícito con un participio o una preposición: «el retrato realizado por Ana», «el retrato de Ana hecho por su hermano», «el libro sobre Magallanes». También el género y el plural transmiten información: «el orden» (organización) y «la orden» (mandato), «el capital» (dinero) y «la capital» (ciudad), «el cometa» (astro) y «la cometa» (juguete); «los paraguas» no cambia en plural.",
          "La nominalización convierte una acción en un nombre para condensar la información: «cuando el barco llegó en 1912» se vuelve «la llegada del barco en 1912»; «decidieron restaurar las fotos» se vuelve «la decisión de restaurar las fotos». Es típica de títulos, informes y cartelas. Úsala con medida: si encadenas demasiados nombres con «de», el texto se vuelve opaco."
        ],
        "examples": [
          {
            "es": "La colección reunida por Ivo Marinovic ocupa la sala 2.",
            "note": "«Reunida por» aclara que él fue el coleccionista."
          },
          {
            "es": "La donación del baúl por la familia en 2023 permitió la exposición.",
            "note": "Nominalización: «la familia donó el baúl»."
          },
          {
            "es": "El capitán dio la orden de zarpar.",
            "note": "«La orden»: un mandato."
          }
        ],
        "mistakes": [
          {
            "wrong": "El retrato de Marija de su hermano.",
            "right": "El retrato de Marija realizado por su hermano.",
            "why": "Dos «de» seguidos confunden; el participio aclara quién lo hizo."
          },
          {
            "wrong": "Dejaron dos paragua en la entrada.",
            "right": "Dejaron dos paraguas en la entrada.",
            "why": "«Paraguas» es igual en singular y en plural."
          }
        ],
        "tip": "Antes de publicar un texto, pregunta por cada grupo nominal: ¿alguien podría entenderlo de otra manera? Si sí, añade lo justo para aclararlo."
      }
    ]
  },
  "grammar": {
    "intro": "Primero mueve el verbo para suponer; después ajusta el grupo nominal para que nadie lo lea de otra manera.",
    "exercises": [
      {
        "id": "b2-18-g-suponer",
        "type": "gap",
        "prompt": "Escribe el verbo entre paréntesis en el tiempo que expresa suposición.",
        "items": [
          {
            "q": "No contesta el teléfono; ___ (estar) en la sala de reserva, donde no hay señal.",
            "answers": [
              [
                "estará"
              ]
            ],
            "why": "Suposición sobre el presente: futuro simple."
          },
          {
            "q": "Cuando se embarcó en Split, Ivo ___ (tener) unos diecinueve años.",
            "answers": [
              [
                "tendría"
              ]
            ],
            "why": "Suposición sobre un estado pasado: condicional."
          },
          {
            "q": "¿Por qué ___ (guardar) su madre los billetes del barco durante cincuenta años?",
            "answers": [
              [
                "guardaría"
              ]
            ],
            "why": "Pregunta de duda sobre el pasado: condicional."
          },
          {
            "q": "El candado está roto: alguien lo ___ (forzar) antes de traerlo al museo.",
            "answers": [
              [
                "habrá forzado"
              ]
            ],
            "why": "Suposición sobre algo que acaba de pasar: futuro compuesto."
          },
          {
            "q": "La foto ___ (ser) antigua, pero los colores están intactos.",
            "answers": [
              [
                "será"
              ]
            ],
            "why": "Concesión con futuro: acepto que es antigua."
          },
          {
            "q": "Los dos hermanos se ___ (escribir) en croata, porque todas las cartas están en ese idioma.",
            "answers": [
              [
                "escribirían"
              ]
            ],
            "why": "Suposición sobre una costumbre pasada: condicional."
          }
        ]
      },
      {
        "id": "b2-18-g-nominal",
        "type": "context",
        "prompt": "Lee la situación y elige la versión más precisa para la cartela.",
        "items": [
          {
            "context": "En la vitrina hay cartas y postales. Solo las postales son de 1912.",
            "q": "¿Qué frase evita la ambigüedad?",
            "options": [
              "Las de 1912 se exponen a la izquierda.",
              "Las postales de 1912 se exponen a la izquierda.",
              "Las que son de 1912 se exponen a la izquierda."
            ],
            "answer": 1,
            "why": "Con dos candidatos femeninos plurales, hay que repetir el nombre."
          },
          {
            "context": "Todas las fotos del baúl fueron restauradas en 2024.",
            "q": "¿Qué frase transmite sin duda que son todas?",
            "options": [
              "Las fotos que fueron restauradas en 2024 están en la sala 3.",
              "Las fotos quienes fueron restauradas en 2024 están en la sala 3.",
              "Todas las fotos del baúl, restauradas en 2024, están en la sala 3."
            ],
            "answer": 2,
            "why": "La primera, sin comas, sugiere que hay otras fotos sin restaurar; la segunda usa «quienes» en una restrictiva."
          },
          {
            "context": "Marija aparece en la foto; la tomó un fotógrafo del puerto.",
            "q": "¿Qué pie de foto es claro?",
            "options": [
              "Retrato de Marija tomado por un fotógrafo del puerto.",
              "Retrato de Marija del fotógrafo del puerto.",
              "Retrato del fotógrafo de Marija del puerto."
            ],
            "answer": 0,
            "why": "«Tomado por» aclara quién hizo la foto."
          },
          {
            "context": "Una visitante pregunta por la edad de Ivo en 1912. Nadie tiene el dato exacto.",
            "q": "¿Qué respuesta es una suposición y no una hipótesis irreal?",
            "options": [
              "Si tuviera veinte años, viajaría solo.",
              "Tendría unos veinte años.",
              "Tendrá unos veinte años en 1912."
            ],
            "answer": 1,
            "why": "Suposición sobre el pasado: condicional simple, sin «si»."
          }
        ]
      },
      {
        "id": "b2-18-g-reformular",
        "type": "open",
        "prompt": "Reformula cada texto de partida como se pide. Después compara con el modelo y la lista: hay más de una versión correcta.",
        "items": [
          {
            "prompt": "Texto de partida: «Probablemente eran las cinco cuando sacaron la foto, porque la sombra es larga». Exprésalo con un tiempo de suposición.",
            "model": "Serían las cinco cuando sacaron la foto, porque la sombra es larga.",
            "checklist": [
              "Paso el imperfecto a condicional simple.",
              "Mantengo el dato que justifica la suposición.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Admito que el baúl pesa mucho, pero lo subimos entre dos». Usa el futuro para conceder.",
            "model": "El baúl pesará mucho, pero lo subimos entre dos.",
            "checklist": [
              "Uso el futuro simple con valor concesivo.",
              "Mantengo «pero» para oponer la otra idea.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Cuando la familia donó el baúl en 2023, el museo pudo preparar la exposición». Nominaliza la primera parte para una cartela.",
            "model": "La donación del baúl por parte de la familia en 2023 permitió preparar la exposición.",
            "checklist": [
              "Convierto «donó» en un nombre.",
              "Evito encadenar demasiados «de».",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «El diario de Ivo». Reescribe el título para que quede claro que Ivo lo escribió y que trata del viaje.",
            "model": "El diario escrito por Ivo Marinovic durante su viaje a Magallanes.",
            "checklist": [
              "Hago explícita la autoría con un participio.",
              "Añado el tema con una preposición precisa.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para trabajar en un archivo o en un museo pequeño. Muchas son nombres que condensan acciones: catalogación, donación, procedencia.",
    "groups": [
      {
        "title": "Catalogar objetos",
        "items": [
          {
            "es": "la procedencia",
            "note": "lugar o persona de donde viene un objeto"
          },
          {
            "es": "fechar un documento",
            "note": "decidir o descubrir de qué año es"
          },
          {
            "es": "estar en mal estado",
            "note": "tener daños, roturas o manchas"
          },
          {
            "es": "la cartela",
            "note": "pequeño texto junto a una obra que la identifica"
          },
          {
            "es": "el pie de foto",
            "note": "texto breve debajo de una fotografía"
          }
        ]
      },
      {
        "title": "Historia y migración",
        "items": [
          {
            "es": "embarcarse",
            "note": "subir a un barco para viajar"
          },
          {
            "es": "la travesía",
            "note": "viaje largo por mar"
          },
          {
            "es": "los descendientes",
            "note": "hijos, nietos y siguientes generaciones"
          },
          {
            "es": "echar raíces",
            "note": "establecerse para siempre en un lugar"
          },
          {
            "es": "el legado",
            "note": "lo que una generación deja a la siguiente"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b2-18-v-archivo",
        "type": "match",
        "prompt": "Relaciona cada expresión con la situación del museo en la que encaja.",
        "pairs": [
          {
            "left": "la procedencia",
            "right": "El baúl perteneció a la familia Marinovic, de la isla de Brač."
          },
          {
            "left": "fechar un documento",
            "right": "Por el sello del correo, la carta es de 1914."
          },
          {
            "left": "el pie de foto",
            "right": "«Puerto de Punta Arenas, hacia 1912» debajo de la imagen."
          },
          {
            "left": "echar raíces",
            "right": "Ivo nunca volvió a Croacia y abrió una panadería."
          },
          {
            "left": "la travesía",
            "right": "Cuarenta días de barco desde Europa hasta el estrecho."
          },
          {
            "left": "estar en mal estado",
            "right": "La tapa tiene moho y una bisagra rota."
          }
        ],
        "why": "Cada expresión nombra un dato o una acción concreta de la catalogación."
      }
    ]
  },
  "pronunciation": {
    "focus": "Las comas también se oyen: pausa y entonación en las relativas explicativas.",
    "explanation": [
      "Una relativa explicativa se pronuncia como un paréntesis: haces una pausa breve antes, bajas un poco el tono dentro y vuelves a subir después. «Las cartas, que están en croata, son de su madre». En una restrictiva no hay pausa: «las cartas que están en croata son de su madre» (las otras no).",
      "En las suposiciones, la entonación suele bajar al final y el ritmo se hace más lento, como quien piensa en voz alta: «tendría... unos veinte años». Escucha, repite y grábate en tu dispositivo; la voz sintética es un apoyo y no evalúa tu pronunciación."
    ],
    "examples": [
      {
        "es": "Los objetos, que llegaron rotos, están en el taller.",
        "note": "Con pausas: llegaron rotos todos."
      },
      {
        "es": "Los objetos que llegaron rotos están en el taller.",
        "note": "Sin pausas: solo algunos llegaron rotos."
      },
      {
        "es": "Serían las cinco de la tarde.",
        "note": "Tono descendente de suposición."
      }
    ],
    "perceive": {
      "id": "b2-18-p-oido",
      "type": "listen",
      "prompt": "Escucha cada frase y decide qué significa según las pausas.",
      "items": [
        {
          "q": "En la frase sobre las fotos, ¿cuántas fotos se restauraron?",
          "options": [
            "Solo algunas.",
            "Todas."
          ],
          "answer": 1,
          "audio": "Las fotos, que se restauraron en Santiago, vuelven el lunes.",
          "voice": "es-CL-f",
          "why": "Se oyen pausas: explicativa, todas."
        },
        {
          "q": "En la frase sobre los billetes, ¿están todos los billetes en la vitrina?",
          "options": [
            "No, solo los que tienen sello.",
            "Sí, todos."
          ],
          "answer": 0,
          "audio": "Los billetes que tienen sello están en la vitrina.",
          "voice": "es-CL-m",
          "why": "Sin pausa: restrictiva, solo una parte."
        },
        {
          "q": "En la frase sobre los voluntarios, ¿quiénes vienen el sábado?",
          "options": [
            "Todos los voluntarios.",
            "Solo los que hablan croata."
          ],
          "answer": 1,
          "audio": "Los voluntarios que hablan croata vienen el sábado.",
          "voice": "es-CL-f",
          "why": "Sin pausa: selecciona a una parte del grupo."
        },
        {
          "q": "En la frase sobre las cartas, ¿qué dice de todas ellas?",
          "options": [
            "Que solo una parte llegó tarde.",
            "Que todas llegaron tarde."
          ],
          "answer": 1,
          "audio": "Las cartas, que llegaron tarde, no entraron en el catálogo.",
          "voice": "es-CL-m",
          "why": "Con pausas: el dato es de todas."
        }
      ]
    },
    "produce": [
      {
        "text": "La directora, que es historiadora, revisó la ficha.",
        "tip": "Pausa antes de «que» y después de «historiadora»; tono más bajo dentro.",
        "voice": "es-CL-f"
      },
      {
        "text": "Las postales que tienen sello son de 1912.",
        "tip": "Sin pausas: un solo grupo fónico hasta «sello».",
        "voice": "es-CL-m"
      },
      {
        "text": "Tendría unos veinte años cuando se embarcó.",
        "tip": "Ritmo pausado, tono que baja al final.",
        "voice": "es-CL-f"
      },
      {
        "text": "¿Quién sería la mujer de la foto?",
        "tip": "Pregunta de duda: no subas tanto el final como en una pregunta normal.",
        "voice": "es-CL-m"
      }
    ]
  },
  "listening": {
    "title": "El baúl de la familia Marinovic",
    "context": "En un museo pequeño de Punta Arenas, Valentina, archivera, y Fernando, voluntario, abren un baúl donado por los descendientes de un inmigrante croata. Piensan en voz alta mientras catalogan. Escucha primero sin transcripción. Las voces son sintéticas y no representan una variedad regional verificada.",
    "speakers": [
      {
        "id": "va",
        "name": "Valentina",
        "voice": "es-CL-f",
        "role": "Archivera del museo"
      },
      {
        "id": "fe",
        "name": "Fernando",
        "voice": "es-CL-m",
        "role": "Voluntario, estudiante de Historia"
      }
    ],
    "script": [
      {
        "speaker": "fe",
        "text": "Mira esto, Valentina. Hay fotos, cartas y un pasaporte. El pasaporte dice 1912. ¿Cuántos años tendría Ivo cuando se embarcó?"
      },
      {
        "speaker": "va",
        "text": "Según el registro de la familia, nació en 1893, así que tendría diecinueve. Imagínate: diecinueve años y cuarenta días de barco hasta el estrecho. Llegaría sin hablar una palabra de castellano y trabajaría en lo primero que encontrara. Muchos jóvenes de su isla empezaron así, en las minas de oro o en las estancias."
      },
      {
        "speaker": "fe",
        "text": "Y esta mujer de la foto, ¿quién será? Tiene una dedicatoria en croata. ¿Su novia, su hermana?"
      },
      {
        "speaker": "va",
        "text": "Será su hermana Marija. En la carta que está encima de la foto, Ivo le pide que no se preocupe por él. Bueno, eso es lo que entiendo con mi croata de diccionario. Habrá que pedirle ayuda a la señora Kusanovic, que lo lee perfectamente."
      },
      {
        "speaker": "fe",
        "text": "Oye, hay un problema con las fichas. Escribí «las de la panadería» y ahora no sé si me refería a las fotos o a las facturas, porque hay de las dos."
      },
      {
        "speaker": "va",
        "text": "Entonces repite el nombre: «las fotos de la panadería». Y en el pie de la foto grande no pongas «retrato de Ivo de su hijo». Nadie va a entender quién está en la foto y quién la hizo."
      },
      {
        "speaker": "fe",
        "text": "Tienes razón. Pongo «retrato de Ivo Marinovic tomado por su hijo Pedro, hacia 1950». Por cierto, el candado estaba roto. Lo habrán forzado los nietos cuando perdieron la llave."
      },
      {
        "speaker": "va",
        "text": "Será eso. Oye, la tapa estará en mal estado, pero el baúl es una joya. Vamos a necesitar una cartela que cuente la llegada de Ivo sin inventar nada: lo que sabemos, como dato, y lo que suponemos, como suposición."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación entera. ¿Qué hacen y qué les preocupa?",
        "exercise": {
          "id": "b2-18-l-global",
          "type": "choice",
          "prompt": "Elige la respuesta que resume la conversación.",
          "items": [
            {
              "q": "¿Qué están haciendo Valentina y Fernando?",
              "options": [
                "Restaurando la tapa de un baúl.",
                "Abriendo y catalogando un baúl donado.",
                "Traduciendo un libro del croata."
              ],
              "answer": 1,
              "why": "Revisan su contenido y preparan fichas."
            },
            {
              "q": "¿Qué quiere evitar Valentina en la cartela?",
              "options": [
                "Presentar suposiciones como si fueran datos.",
                "Mencionar a la familia donante.",
                "Usar fotos antiguas."
              ],
              "answer": 0,
              "why": "Pide separar lo que saben de lo que suponen."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y localiza los datos concretos.",
        "exercise": {
          "id": "b2-18-l-detalle",
          "type": "choice",
          "prompt": "Responde con la información exacta del audio.",
          "items": [
            {
              "q": "¿Cuántos años tendría Ivo al embarcarse, según Valentina?",
              "options": [
                "Veinte.",
                "Cuarenta.",
                "Diecinueve."
              ],
              "answer": 2,
              "why": "Nació en 1893 y se embarcó en 1912."
            },
            {
              "q": "¿Qué problema tiene Fernando con sus fichas?",
              "options": [
                "Escribió una elipsis ambigua: «las de la panadería».",
                "Perdió el pasaporte.",
                "No sabe fechar las cartas."
              ],
              "answer": 0,
              "why": "Hay fotos y facturas, y «las» puede referirse a las dos."
            },
            {
              "q": "¿Quién podría ayudar con el croata?",
              "options": [
                "El hijo de Ivo.",
                "La señora Kusanovic.",
                "Marija."
              ],
              "answer": 1,
              "why": "«Lo lee perfectamente»."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Ahora fíjate en la forma. Puedes leer la transcripción después de responder.",
        "exercise": {
          "id": "b2-18-l-forma",
          "type": "classify",
          "prompt": "Clasifica cada fragmento del diálogo según lo que hace.",
          "categories": [
            "Suposición sobre el presente",
            "Suposición sobre el pasado",
            "Precisión del grupo nominal"
          ],
          "items": [
            {
              "text": "¿quién será?",
              "cat": 0,
              "why": "Futuro simple: duda sobre la identidad actual de la mujer de la foto."
            },
            {
              "text": "tendría diecinueve",
              "cat": 1,
              "why": "Condicional: suposición sobre una edad pasada."
            },
            {
              "text": "las fotos de la panadería",
              "cat": 2,
              "why": "Repite el nombre para evitar la elipsis ambigua."
            },
            {
              "text": "lo habrán forzado los nietos",
              "cat": 1,
              "why": "Futuro compuesto: suposición sobre algo ya ocurrido."
            },
            {
              "text": "retrato de Ivo Marinovic tomado por su hijo Pedro",
              "cat": 2,
              "why": "Hace explícita la autoría con un participio."
            },
            {
              "text": "la tapa estará en mal estado, pero",
              "cat": 0,
              "why": "Futuro concesivo: acepta el estado actual de la tapa."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Cuarenta días hasta el estrecho",
    "genre": "Texto de sala de una pequeña exposición",
    "frame": "Texto original de SpanishCue escrito como texto de sala de un museo ficticio de Punta Arenas. La familia y los objetos son inventados, aunque la inmigración croata a Magallanes es un hecho histórico.",
    "text": [
      "La llegada de Ivo Marinovic a Punta Arenas, en el invierno de 1912, no figura en ningún periódico. Lo que sabemos procede de un baúl de madera que sus descendientes donaron al museo en 2023 y que guardaba un pasaporte, catorce cartas y veintidós fotografías. Esta exposición reúne esos objetos y propone una lectura prudente: separa lo que los documentos prueban de lo que solo podemos suponer.",
      "El pasaporte, que fue expedido en Split, confirma que Ivo nació en 1893 en la isla de Brač. Tendría, por tanto, diecinueve años al embarcarse. No conocemos el nombre del barco; viajaría, como tantos jóvenes de la costa dálmata, en un vapor que hacía escala en Buenos Aires antes de cruzar el estrecho de Magallanes. La travesía duraría unos cuarenta días.",
      "Las cartas que escribió a su hermana Marija entre 1912 y 1930 forman el núcleo de la exposición. Están en croata y han sido traducidas por voluntarios de la comunidad. En las primeras, Ivo habla de frío, de trabajo en una panadería y de la nostalgia del mar Adriático. En las últimas, ya casado y con tres hijos, apenas menciona el regreso. Habría decidido quedarse mucho antes de escribirlo; las cartas muestran que echó raíces sin anunciarlo.",
      "Las fotografías plantean más preguntas. En una de ellas, tomada hacia 1915, una mujer joven posa con un vestido oscuro delante de una casa de piedra. ¿Sería Marija? La dedicatoria solo dice «para que no me olvides». La familia cree que sí; nosotros preferimos presentarlo como una hipótesis. El retrato de Ivo realizado por su hijo Pedro hacia 1950, en cambio, está firmado y fechado.",
      "La donación del baúl llegó acompañada de una petición: que la historia de Ivo se contara sin adornos. Hemos intentado respetarla. Por eso, cada cartela de esta sala indica con claridad qué información procede de un documento y cuál es una interpretación del equipo del museo, que puede cambiar si aparecen nuevas pruebas. Si usted reconoce a alguna persona de las fotos que no están identificadas, le agradeceremos que lo comunique en la recepción del museo."
    ],
    "glossary": [
      {
        "es": "el texto de sala",
        "note": "texto informativo en la pared de una exposición"
      },
      {
        "es": "expedir un documento",
        "note": "emitirlo oficialmente"
      },
      {
        "es": "el vapor",
        "note": "barco movido por una máquina de vapor"
      }
    ],
    "tasks": [
      {
        "id": "b2-18-r-comprension",
        "type": "choice",
        "prompt": "Responde según el texto de sala.",
        "items": [
          {
            "q": "¿Qué dato prueba el pasaporte?",
            "options": [
              "El nombre del barco en que viajó Ivo.",
              "El año y el lugar de nacimiento de Ivo.",
              "La fecha de su boda."
            ],
            "answer": 1,
            "why": "Confirma que nació en 1893 en Brač; el barco es una suposición."
          },
          {
            "q": "¿Cómo presenta el museo la identidad de la mujer de la foto de 1915?",
            "options": [
              "Como una hipótesis.",
              "Como un dato confirmado por la dedicatoria.",
              "Como un error de la familia."
            ],
            "answer": 0,
            "why": "«Preferimos presentarlo como una hipótesis»."
          },
          {
            "q": "¿Qué pide el museo a los visitantes?",
            "options": [
              "Que no fotografíen las cartas.",
              "Que traduzcan las cartas al castellano.",
              "Que identifiquen a personas de las fotos que no están identificadas."
            ],
            "answer": 2,
            "why": "Último párrafo."
          }
        ]
      },
      {
        "id": "b2-18-r-interpretar",
        "type": "open",
        "prompt": "Interpreta el texto con tus palabras y apóyate en citas.",
        "items": [
          {
            "prompt": "Explica en 60–80 palabras cómo distingue el texto los datos de las suposiciones. Da un ejemplo de cada uno, cita una frase y usa al menos una forma de suposición.",
            "model": "El texto presenta como datos lo que prueban los documentos, por ejemplo que Ivo nació en 1893. En cambio, usa el condicional para lo que no puede probar: «viajaría, como tantos jóvenes de la costa dálmata, en un vapor». Me parece honesto, porque el lector sabe en todo momento qué está confirmado. Los autores habrán preferido perder algo de emoción para ganar credibilidad.",
            "checklist": [
              "Doy un ejemplo de dato y uno de suposición.",
              "Cito una frase literal del texto.",
              "Uso un futuro o un condicional de suposición."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo el texto marca el grado de certeza y precisa cada grupo nominal.",
      "items": [
        {
          "quote": "viajaría, como tantos jóvenes de la costa dálmata, en un vapor",
          "note": "El condicional convierte un dato desconocido en una suposición razonable sobre el pasado."
        },
        {
          "quote": "Las cartas que escribió a su hermana Marija entre 1912 y 1930",
          "note": "Relativa sin comas: selecciona estas cartas frente a otras posibles."
        },
        {
          "quote": "El retrato de Ivo realizado por su hijo Pedro hacia 1950",
          "note": "«Realizado por» separa a quien aparece (Ivo) de quien hizo el retrato (Pedro)."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina las dos clases: supón lo que no sabes y escríbelo con grupos nominales que no dejen dudas.",
    "exercises": [
      {
        "id": "b2-18-x-orden",
        "type": "order",
        "prompt": "Ordena las palabras para reconstruir las notas de catalogación.",
        "items": [
          {
            "words": [
              "Serían",
              "las",
              "seis",
              "cuando",
              "tomaron",
              "la",
              "foto",
              "del",
              "muelle."
            ],
            "why": "Suposición sobre la hora pasada: condicional."
          },
          {
            "words": [
              "La",
              "colección",
              "reunida",
              "por",
              "la",
              "familia",
              "ocupa",
              "dos",
              "vitrinas."
            ],
            "why": "«Reunida por» hace explícito quién reunió la colección."
          },
          {
            "words": [
              "¿Por",
              "qué",
              "no",
              "volvería",
              "nunca",
              "a",
              "su",
              "isla?"
            ],
            "why": "Pregunta de duda sobre el pasado."
          }
        ]
      },
      {
        "id": "b2-18-x-error",
        "type": "error",
        "prompt": "Cada frase tiene un error. Escríbela corregida.",
        "items": [
          {
            "sentence": "Cuando nació su primer hijo, Ivo tendrá unos treinta años.",
            "answers": [
              "Cuando nació su primer hijo, Ivo tendría unos treinta años."
            ],
            "why": "Suposición sobre el pasado: condicional."
          },
          {
            "sentence": "Puede que la dedicatoria es de su madre.",
            "answers": [
              "Puede que la dedicatoria sea de su madre."
            ],
            "why": "«Puede que» va con subjuntivo."
          },
          {
            "sentence": "Los documentos los cuales tienen sello se guardan aparte.",
            "answers": [
              "Los documentos que tienen sello se guardan aparte."
            ],
            "why": "En una restrictiva sin comas se usa «que»."
          },
          {
            "sentence": "El alcalde dio el orden de cerrar el puerto.",
            "answers": [
              "El alcalde dio la orden de cerrar el puerto."
            ],
            "why": "«La orden» es un mandato; «el orden», una organización."
          }
        ]
      },
      {
        "id": "b2-18-x-funcion",
        "type": "classify",
        "prompt": "¿Suposición o hipótesis irreal? Clasifica cada frase con condicional.",
        "categories": [
          "Suposición sobre el pasado",
          "Hipótesis irreal con condición"
        ],
        "items": [
          {
            "text": "Ivo trabajaría de sol a sol en la panadería.",
            "cat": 0,
            "why": "Supone algo real del pasado."
          },
          {
            "text": "Si Ivo hubiera tenido dinero, volvería a Brač.",
            "cat": 1,
            "why": "Condición irreal con «si»."
          },
          {
            "text": "Los vecinos lo llamarían «el croata».",
            "cat": 0,
            "why": "Suposición sobre una costumbre pasada."
          },
          {
            "text": "Si supiera croata, leería las cartas sin ayuda.",
            "cat": 1,
            "why": "Hipótesis sobre el presente, con «si»."
          },
          {
            "text": "La casa de la foto estaría cerca del puerto.",
            "cat": 0,
            "why": "Suposición sobre un lugar pasado."
          },
          {
            "text": "Con más espacio, el museo expondría todas las fotos.",
            "cat": 1,
            "why": "Condición implícita («si tuviera más espacio»)."
          }
        ]
      },
      {
        "id": "b2-18-x-guiada",
        "type": "open",
        "prompt": "Escribe frases breves antes de la tarea de escritura. El modelo es una posibilidad, no la única.",
        "items": [
          {
            "prompt": "Mira una foto antigua de tu familia o de tu ciudad (o imagínala). Escribe tres suposiciones: una sobre el presente, una sobre el pasado y una pregunta de duda.",
            "model": "La señora del centro será mi bisabuela, porque tiene los ojos de mi madre. Tendría unos cuarenta años en la foto. ¿Quién sacaría la foto, si nadie en la familia tenía cámara?",
            "checklist": [
              "Uso futuro para el presente y condicional para el pasado.",
              "Incluyo una pregunta de duda."
            ]
          },
          {
            "prompt": "Escribe el pie de una foto en el que quede claro quién aparece, quién la tomó y cuándo.",
            "model": "Mis abuelos en la playa de Cartagena, fotografiados por un vecino en el verano de 1968.",
            "checklist": [
              "Hago explícita la autoría con un participio.",
              "No dejo ningún «de» ambiguo."
            ]
          },
          {
            "prompt": "Convierte esta noticia en un título nominal: «El ayuntamiento reabrió el museo después de que lo restauraran durante dos años».",
            "model": "Reapertura del museo tras dos años de restauración.",
            "checklist": [
              "Uso nombres en lugar de verbos conjugados.",
              "El título sigue siendo claro."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Trabajas como voluntario o voluntaria en el museo. Escribe un texto (200–260 palabras) con dos partes: una cartela para una foto o un objeto del baúl, que separe datos y suposiciones, y una breve consulta al público pidiendo información sobre lo que no saben.",
    "context": "La cartela se colgará junto al objeto y la consulta se publicará en las redes del museo. Las dos tienen que ser precisas: nadie debe confundir una hipótesis con un dato ni dudar de quién hizo qué. Puedes usar los objetos de la familia Marinovic o inventar otro objeto con historia.",
    "steps": [
      "Elige el objeto y haz dos listas: lo que sabes con documentos y lo que solo supones.",
      "Escribe la cartela con grupos nominales precisos y la consulta con preguntas de duda.",
      "Usa al menos tres formas de suposición (futuro, condicional, «puede que», «seguramente») y una nominalización.",
      "Revisa cada elipsis y cada relativa (¿con comas o sin comas?) y corrige los «de» que puedan leerse de dos maneras."
    ],
    "useLanguage": [
      "tendría / sería / viajaría (suposición sobre el pasado)",
      "será / estará (suposición sobre el presente)",
      "¿quién sería…?, ¿por qué…?",
      "realizado por / tomado por / sobre…",
      "relativa sin comas / entre comas",
      "la llegada de…, la donación de…"
    ],
    "model": [
      "Cartela. Retrato de Marija Marinovic (¿?) frente a una casa de piedra en la isla de Brač, hacia 1915. Fotografía en papel, donación de la familia Marinovic al museo en 2023.",
      "Lo que sabemos: la fotografía, que estaba guardada dentro de una carta, lleva una dedicatoria en croata: «para que no me olvides». El sello del estudio fotográfico de Split permite fecharla entre 1914 y 1916. Lo que suponemos: la mujer sería Marija, la hermana menor de Ivo, porque las cartas que él le escribió mencionan una foto «con el vestido de domingo». Tendría entonces unos dieciséis años. Puede que la casa sea la de la familia en Supetar, pero no tenemos pruebas.",
      "Consulta al público. ¿Reconoce usted esta casa o a esta mujer? El museo busca información sobre la familia Marinovic, que llegó a Magallanes desde Brač a partir de 1912. Seguramente muchos descendientes de inmigrantes croatas guardarán fotos parecidas en sus casas. ¿Tendrá su familia alguna imagen de la misma calle o del mismo estudio?",
      "Si puede ayudarnos, escríbanos o visite la recepción del museo de martes a domingo. La identificación de cada persona nos permite contar la historia de la inmigración en la región con más precisión y sin inventar. Toda la información recibida, que revisará el equipo del archivo, se citará con el nombre de quien la aporte, salvo que prefiera mantenerse en el anonimato."
    ],
    "checklist": [
      "Separo con claridad los datos documentados de las suposiciones.",
      "Uso futuro para suponer sobre el presente y condicional para el pasado.",
      "Las relativas tienen la puntuación que corresponde a su sentido.",
      "Ningún «de» ni ninguna elipsis se puede leer de dos maneras.",
      "El registro es informativo en la cartela y cercano pero formal en la consulta."
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
        "title": "La historia detrás de un objeto",
        "prompt": "Habla durante unos dos minutos y medio de un objeto antiguo que conoces (de tu casa, de un museo, de un mercado). Di lo que sabes de él con seguridad y haz al menos cuatro suposiciones sobre quién lo usaría, cuándo y para qué. Termina con una pregunta de duda.",
        "prep": [
          "Separa en dos columnas lo que sabes y lo que supones.",
          "Prepara una concesión con «será…, pero» o «tendría…, pero»."
        ],
        "seconds": 150,
        "model": "En casa de mi abuela hay una máquina de coser Singer. Sé que la compró en 1962 porque guarda la factura. Lo demás lo supongo: costaría mucho dinero para la época, y la pagaría a plazos. Seguramente cosería la ropa de sus cinco hijos. Será muy vieja, pero todavía funciona. ¿Cuántos vestidos habrá hecho con ella en sesenta años?",
        "selfCheck": [
          "Distingo con claridad lo que sé de lo que supongo.",
          "Uso futuro para el presente y condicional para el pasado.",
          "Hago pausas en las relativas explicativas."
        ]
      },
      {
        "title": "¿Quién sería la mujer de la foto?",
        "prompt": "Tu docente es un visitante del museo que está seguro de que la mujer de la foto de 1915 es su bisabuela. Escucha sus argumentos, pregúntale qué pruebas tiene, presenta tus propias suposiciones y negocien cómo redactar la cartela para que sea honesta.",
        "prep": [
          "Prepara dos preguntas para pedir pruebas.",
          "Prepara una concesión: «Será su bisabuela, pero…».",
          "Piensa en un pie de foto que incluya las dos posibilidades."
        ],
        "seconds": 180,
        "selfCheck": [
          "Pregunto y respondo a lo que dice mi interlocutor.",
          "No presento una suposición como dato.",
          "Proponemos un texto final preciso."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva a la próxima clase lo que preparaste esta semana y úsalo con tu profesor.",
    "cards": [
      {
        "move": "Adivina",
        "task": "Lleva una foto antigua sin contexto y pide a tu profesor que haga suposiciones; después haz tú las tuyas sobre una foto suya.",
        "phrases": [
          "¿Cuántos años tendría…?",
          "Será…, pero…",
          "¿Dónde estaría…?"
        ]
      },
      {
        "move": "Precisa",
        "task": "Lee a tu profesor el pie de foto que escribiste y pídele que diga si se puede entender de dos maneras.",
        "phrases": [
          "¿Se entiende quién la hizo?",
          "¿Pongo comas aquí?"
        ]
      },
      {
        "move": "Distingue",
        "task": "Di una frase con condicional y pide a tu profesor que adivine si es una suposición o una hipótesis.",
        "phrases": [
          "¿Es una suposición o una condición?",
          "¿Falta un «si»?"
        ]
      }
    ],
    "bring": "Trae tu cartela y tu consulta con las suposiciones subrayadas y una relativa cuya puntuación te haga dudar."
  },
  "quiz": {
    "items": [
      {
        "type": "gap",
        "q": "—¿Dónde está Ana? —No sé, ___ (estar) en la biblioteca; siempre va los jueves.",
        "answers": [
          [
            "estará"
          ]
        ],
        "why": "Suposición sobre el presente: futuro simple."
      },
      {
        "type": "gap",
        "q": "Cuando se casaron, mis abuelos ___ (tener) poco más de veinte años.",
        "answers": [
          [
            "tendrían"
          ]
        ],
        "why": "Suposición sobre el pasado: condicional."
      },
      {
        "type": "gap",
        "q": "El pianista ___ (ser) famoso, pero ayer tocó fatal.",
        "answers": [
          [
            "será"
          ]
        ],
        "why": "Futuro concesivo con «pero»."
      },
      {
        "type": "choice",
        "q": "«Los alumnos, que aprobaron el examen, recibieron un diploma.» ¿Cuántos alumnos aprobaron?",
        "options": [
          "Solo algunos.",
          "Todos.",
          "Ninguno."
        ],
        "answer": 1,
        "why": "Relativa entre comas: el dato se aplica a todos."
      },
      {
        "type": "choice",
        "q": "¿Qué frase es una suposición sobre el pasado?",
        "options": [
          "Si tuviera tiempo, iría al museo.",
          "Llegaría tarde por el tráfico.",
          "Llegará tarde mañana."
        ],
        "answer": 1,
        "why": "Condicional sin «si» que supone algo pasado."
      },
      {
        "type": "listen",
        "q": "Según el audio, ¿qué se sabe con seguridad del cuadro?",
        "audio": "El cuadro, que llegó al museo en 1990, tendría unos doscientos años, aunque nadie sabe quién lo pintó.",
        "voice": "es-CL-f",
        "options": [
          "Quién lo pintó.",
          "Que tiene exactamente doscientos años.",
          "Cuándo llegó al museo."
        ],
        "answer": 2,
        "why": "La llegada en 1990 es un dato; la edad es una suposición."
      },
      {
        "type": "error",
        "sentence": "A lo mejor el cartero se haya equivocado de casa.",
        "answers": [
          "A lo mejor el cartero se ha equivocado de casa.",
          "A lo mejor el cartero se equivocó de casa."
        ],
        "why": "«A lo mejor» va con indicativo."
      },
      {
        "type": "error",
        "sentence": "Los socios quienes pagaron la cuota pueden votar en la asamblea.",
        "answers": [
          "Los socios que pagaron la cuota pueden votar en la asamblea."
        ],
        "why": "En una relativa restrictiva, sin comas, no se usa «quien»: va «que»."
      },
      {
        "type": "order",
        "words": [
          "La",
          "construcción",
          "del",
          "puerto",
          "duró",
          "casi",
          "diez",
          "años."
        ],
        "why": "Nominalización: «construyeron el puerto» → «la construcción del puerto»."
      },
      {
        "type": "open",
        "prompt": "Escribe dos frases sobre un edificio antiguo de tu ciudad: una suposición sobre quién viviría o trabajaría allí y un título nominal para una placa.",
        "model": "En esa casa viviría una familia rica, porque tiene un jardín enorme. Placa: «Construcción de la casa Méndez, 1890».",
        "checklist": [
          "Uso el condicional para suponer sobre el pasado.",
          "Escribo un título con un nombre en lugar de un verbo."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo hacer suposiciones moviendo el verbo un tiempo hacia adelante (será, habrá salido, sería, habría salido) y formular preguntas de duda.",
      "Puedo conceder con «será…, pero» y distinguir el condicional de suposición del de una hipótesis con «si».",
      "Puedo escribir grupos nominales precisos: elipsis recuperables, relativas bien puntuadas, «de» explícito con participios y nominalizaciones moderadas."
    ],
    "review": [
      "Mañana, mira por la ventana y di tres suposiciones sobre el presente y tres sobre lo que pasó esta mañana en la calle.",
      "En tres días, busca un texto informativo (una noticia, un folleto) y marca dos relativas: decide si llevan comas y por qué.",
      "Antes de la semana 19, relee tu cartela y convierte una frase con verbo en un título nominal."
    ]
  },
  "related": [
    {
      "path": "/gramatica/futuro-y-condicional-de-probabilidad",
      "label": "Clase: Futuro y condicional de probabilidad"
    },
    {
      "path": "/precision-grupo-nominal-adjetival",
      "label": "Clase: Nominalización y grupos nominales complejos"
    }
  ]
};
