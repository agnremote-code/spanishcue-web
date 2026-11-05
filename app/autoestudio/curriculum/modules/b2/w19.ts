import type { Module } from "../../types";

/**
 * B2 · semana 19 · Autoestudio espejo de G163 (pronombres: redundancia, duplicación y foco) y
 * G164 (registro: cortesía, distancia y mandato). Repaso autónomo con el tablado de carnaval ficticio de un
 * club de barrio de Montevideo. Audio mediante síntesis; sin acreditación regional.
 */
export const b2w19: Module = {
  "id": "b2-19",
  "level": "b2",
  "week": 19,
  "kind": "core",
  "title": "A los vecinos los avisamos y la música la cortamos a la una",
  "subtitle": "Repaso de cuándo el pronombre es obligatorio, recomendable o imposible, y de cómo pedir y mandar con la distancia justa: de «baja la música» a «se ruega moderar el volumen»",
  "stop": {
    "place": "Montevideo",
    "country": "Uruguay"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.g163",
    "b2.gram.g164",
    "b2.voc.w19-tablado-barrio",
    "b2.pron.w19-foco-y-tono",
    "b2.lis.w19-llamada-vecina",
    "b2.read.w19-columna-club",
    "b2.wri.w19-aviso-dos-registros",
    "b2.spk.w19-pedir-con-distancia",
    "b2.fun.w19-pedir-mandar-registro",
    "b2.disc.w19-adaptar-registro"
  ],
  reviewObjectives: ["b2.gram.g161","b2.gram.g162","b2.voc.w18-archivo-museo","b2.pron.w18-comas-relativas","b2.lis.w18-baul-archivo","b2.read.w18-ficha-exposicion","b2.wri.w18-cartela-y-consulta","b2.spk.w18-suponer-historia","b2.fun.w18-conjeturar-precisar","b2.disc.w18-texto-expositivo-preciso"],
  prerequisites: ["b2-18"],
  "goal": {
    "canDo": "Puedo decidir cuándo repetir un pronombre («a los vecinos los avisamos», «me lo dijo a mí») y cuándo no («eso te dije yo»), y pedir o mandar con el grado de cortesía que pide cada persona y cada texto.",
    "steps": [
      "Repasa cuándo el pronombre átono es obligatorio, recomendable o imposible, y cómo se marca el foco.",
      "Ordena las formas de pedir y mandar en una escala de distancia y elige el tratamiento adecuado.",
      "Escucha una llamada entre la presidenta de un club y una vecina, y lee la columna del club en el periódico del barrio.",
      "Escribe el mismo aviso en dos registros, revísalo y negocia oralmente con un vecino molesto."
    ]
  },
  "theory": {
    "intro": "En clase trabajaste estos temas con tu profesor. Aquí los repasas de otra manera: con un club de barrio de Montevideo que organiza un tablado de carnaval, tablas para consultar y los errores típicos de quien repite pronombres de más o pide algo con el tono equivocado.",
    "parts": [
      {
        "heading": "¿Pronombre obligatorio, recomendable o imposible?",
        "body": [
          "Cuando pones al principio un complemento directo conocido, tienes que repetirlo con un pronombre: «el escenario ya lo armamos», no «el escenario ya armamos». También es obligatorio el pronombre átono cuando el complemento es un pronombre tónico: «me lo dijo a mí», nunca «lo dijo a mí». Con el complemento indirecto detrás del verbo, el pronombre es muy recomendable y es lo más natural: «le di las llaves a Martín». Con verbos como «gustar», «molestar» o «importar» es siempre necesario: «a la vecina le molesta el ruido».",
          "En cambio, no hay pronombre cuando adelantas una palabra para destacarla como información nueva o sorprendente (foco): «ESO te dije yo», «algo sabrá Martín», «tres años llevamos con el tablado». Fíjate en que el sujeto suele ir detrás del verbo. Tampoco se repite un nombre sin artículo: «sillas no tenemos», «entradas ya no quedan»."
        ],
        "table": {
          "caption": "Tres casos con el complemento delante o detrás",
          "head": [
            "Caso",
            "Pronombre",
            "Ejemplo"
          ],
          "rows": [
            [
              "Complemento directo conocido delante del verbo",
              "obligatorio",
              "Los parlantes los trajo Martín."
            ],
            [
              "Complemento indirecto detrás del verbo",
              "recomendable",
              "Le mandé el programa a la vecina."
            ],
            [
              "Foco: información nueva destacada",
              "imposible",
              "Cien sillas necesitamos, no cincuenta."
            ],
            [
              "Nombre sin artículo delante",
              "imposible",
              "Luces no faltan."
            ]
          ]
        },
        "examples": [
          {
            "es": "A la murga la contratamos en noviembre.",
            "note": "Complemento directo de persona, conocido y delante: «la» obligatorio."
          },
          {
            "es": "Le pedí permiso al municipio.",
            "note": "Indirecto detrás del verbo: «le» recomendable."
          },
          {
            "es": "Mucho trabajo nos costó, eso sí.",
            "note": "Foco con inversión: sin pronombre de complemento directo."
          }
        ],
        "mistakes": [
          {
            "wrong": "Las entradas ya vendimos todas.",
            "right": "Las entradas ya las vendimos todas.",
            "why": "Complemento directo conocido delante del verbo: el pronombre es obligatorio."
          },
          {
            "wrong": "Lo dijeron a nosotros primero.",
            "right": "Nos lo dijeron a nosotros primero.",
            "why": "Con un pronombre tónico como complemento, el átono no puede faltar."
          }
        ],
        "tip": "Si el complemento va delante, pregúntate: ¿es algo ya conocido (va el pronombre) o es la novedad que quiero destacar (no va)?"
      },
      {
        "heading": "Contraste, «a mí me» y variación",
        "body": [
          "Para contrastar dos temas, el pronombre aparece con el primero y el segundo se reduce: «a Olga la llamé ayer; a su hijo, no». «A mí me parece» no es una redundancia viciosa: «a mí» marca el contraste con otras personas y «me» es obligatorio. Por eso no se dice «yo me parece», porque «parecer» no tiene a «yo» como sujeto. Cuando «se» no deja claro de quién hablas, añade «a ella», «a usted» o «a ellos»: «se lo expliqué a ella».",
          "En el habla de muchas zonas es frecuente «le» por «les» con un complemento plural («le dije a los vecinos»); la norma recomienda «les», sobre todo por escrito. También es muy común en buena parte de América «se los dije» para indicar que «ellos» o «ustedes» recibieron algo («se lo dije a ellos»); se oye mucho, pero en un texto formal conviene «se lo dije a ellos»."
        ],
        "examples": [
          {
            "es": "A mí no me parece tan grave; a Martín, sí.",
            "note": "Contraste: «a mí me» y elipsis en el segundo tema."
          },
          {
            "es": "Les explicamos el horario a los vecinos.",
            "note": "Plural recomendado en un texto escrito."
          },
          {
            "es": "Se lo comenté a usted por teléfono, ¿recuerda?",
            "note": "«A usted» aclara a quién se refiere «se»."
          }
        ],
        "mistakes": [
          {
            "wrong": "Yo me parece que el tablado termina tarde.",
            "right": "A mí me parece que el tablado termina tarde.",
            "why": "«Parecer» se construye con complemento indirecto: «a mí me»."
          },
          {
            "wrong": "Le avisamos por carta a todos los socios.",
            "right": "Les avisamos por carta a todos los socios.",
            "why": "En un texto escrito, la norma pide «les» con un plural."
          }
        ]
      },
      {
        "heading": "La escala de la cortesía: tres maneras de crear distancia",
        "body": [
          "Una orden directa («baja la música») funciona entre personas de confianza. Para crear distancia tienes tres herramientas gramaticales. La primera es preguntar en lugar de mandar: «¿puedes bajar la música?». La segunda es alejar el verbo del presente: condicional («¿podrías…?»), imperfecto de cortesía («quería pedirle un favor») o «quisiera». La tercera es borrar a la persona: «se ruega moderar el volumen», «se agradece la puntualidad», o un infinitivo en un cartel: «no estacionar».",
          "Observa la diferencia entre «¿te importaría + infinitivo?» (la otra persona hace algo: «¿te importaría cerrar la puerta?») y «¿le importaría que + imperfecto de subjuntivo?» (pides permiso o actúa otra persona: «¿le importaría que pusiéramos el escenario frente a su casa?»). Con «me gustaría que», «quisiera que» y «le agradecería que» también va el imperfecto de subjuntivo: «le agradecería que me informara antes del viernes»."
        ],
        "table": {
          "caption": "De la orden a la petición distante",
          "head": [
            "Grado",
            "Recurso",
            "Ejemplo"
          ],
          "rows": [
            [
              "Directo",
              "imperativo",
              "Baja la música."
            ],
            [
              "Suavizado",
              "imperativo + atenuador",
              "Baja la música, por favor, ¿eh?"
            ],
            [
              "Pregunta",
              "¿puedes / podrías + infinitivo?",
              "¿Podrías bajar un poco la música?"
            ],
            [
              "Distancia",
              "le agradecería que + imperfecto de subjuntivo",
              "Le agradecería que bajara la música después de las doce."
            ],
            [
              "Impersonal",
              "se ruega / se agradece + infinitivo",
              "Se ruega moderar el volumen después de medianoche."
            ]
          ]
        },
        "examples": [
          {
            "es": "Quería pedirle un favor, señora Olga.",
            "note": "Imperfecto de cortesía: no habla del pasado."
          },
          {
            "es": "¿Le importaría que dejáramos las sillas en su garaje?",
            "note": "Pide permiso: «que» + imperfecto de subjuntivo."
          }
        ],
        "mistakes": [
          {
            "wrong": "Le agradecería que me informe antes del viernes.",
            "right": "Le agradecería que me informara antes del viernes.",
            "why": "Tras el condicional «agradecería», el subjuntivo va en imperfecto."
          },
          {
            "wrong": "¿Le importaría que cierre usted la puerta?",
            "right": "¿Le importaría cerrar la puerta?",
            "why": "Si la acción la hace la misma persona a la que preguntas, basta el infinitivo."
          }
        ]
      },
      {
        "heading": "Mandar sin imperativo y elegir el tratamiento",
        "body": [
          "No todas las órdenes usan el imperativo. El presente puede sonar tajante: «tú te quedas en la puerta». El infinitivo aparece en carteles e instrucciones generales («no fumar») y en exclamaciones familiares («¡a ensayar!»). «¡Que + subjuntivo!» insiste o repite una orden: «¡que bajes el volumen!». Y «haz el favor de + infinitivo» suena a reproche: «haz el favor de llegar puntual».",
          "Elegir el tratamiento también es elegir la distancia. En América, «ustedes» es el único plural; en gran parte de España se distingue «vosotros» (confianza) de «ustedes» (distancia). En Costa Rica y en muchas familias de Colombia se usa «usted» incluso con la familia. En Uruguay y en Argentina mucha gente usa el voseo con confianza: oirás «cerrá», «vení», «pasame»; reconócelo, aunque tú puedas usar «tú». Con una vecina mayor a la que no conoces, «usted» es la opción segura."
        ],
        "table": {
          "caption": "Una misma petición según el tratamiento",
          "head": [
            "Tratamiento",
            "Dónde y con quién",
            "Ejemplo"
          ],
          "rows": [
            [
              "tú",
              "confianza; muy extendido",
              "¿Me pasas el cable?"
            ],
            [
              "vos",
              "confianza en Uruguay, Argentina y otras zonas",
              "¿Me pasás el cable?"
            ],
            [
              "usted",
              "distancia o respeto",
              "¿Me pasa el cable, por favor?"
            ],
            [
              "vosotros",
              "plural de confianza en gran parte de España",
              "¿Me pasáis el cable?"
            ],
            [
              "ustedes",
              "plural en América; plural de distancia en España",
              "¿Me pasan el cable?"
            ]
          ]
        },
        "examples": [
          {
            "es": "Ustedes dos se encargan de las luces y yo del sonido.",
            "note": "Presente con valor de orden, sin imperativo."
          },
          {
            "es": "Prohibido subir al escenario sin autorización.",
            "note": "Cartel impersonal."
          }
        ],
        "mistakes": [
          {
            "wrong": "Señora Olga, baja la música, porfa.",
            "right": "Señora Olga, ¿podría bajar un poco la música, por favor?",
            "why": "Con una vecina mayor y desconocida, el tuteo directo y el «porfa» suenan bruscos."
          }
        ],
        "tip": "Antes de pedir algo, piensa en tres datos: cuánta confianza tienes, cuánto le cuesta a la otra persona y si es oral o escrito. Cuanto más alto sea cada uno, más distancia gramatical."
      }
    ]
  },
  "grammar": {
    "intro": "Primero decide si el pronombre va o no va; después elige la forma de pedir que corresponde.",
    "exercises": [
      {
        "id": "b2-19-g-clitico",
        "type": "gap",
        "prompt": "Completa con el pronombre átono si hace falta. Si no hace falta, escribe una raya (—).",
        "items": [
          {
            "q": "El escenario ___ armamos el viernes, entre seis personas.",
            "answers": [
              [
                "lo"
              ]
            ],
            "why": "Complemento directo conocido delante del verbo: obligatorio."
          },
          {
            "q": "ESO ___ dije yo desde el principio, y nadie me escuchó. (pronombre de complemento directo)",
            "answers": [
              [
                "—",
                "-"
              ]
            ],
            "why": "Foco con inversión: no se repite el complemento directo."
          },
          {
            "q": "A los músicos ___ encanta tocar en la calle.",
            "answers": [
              [
                "les"
              ]
            ],
            "why": "Con «encantar», el indirecto siempre lleva pronombre."
          },
          {
            "q": "Sillas no ___ tenemos suficientes; habrá que pedirlas al club vecino. (pronombre de complemento directo)",
            "answers": [
              [
                "—",
                "-"
              ]
            ],
            "why": "Nombre sin artículo delante: no hay pronombre."
          },
          {
            "q": "A Olga ___ visitamos el martes; a su vecino, todavía no.",
            "answers": [
              [
                "la"
              ]
            ],
            "why": "Tema de persona conocido delante del verbo: «la» obligatorio."
          },
          {
            "q": "Nos ___ explicaron a nosotros, no al resto del barrio.",
            "answers": [
              [
                "lo"
              ]
            ],
            "why": "«Nos lo explicaron a nosotros»: con pronombre tónico, el átono es obligatorio."
          }
        ]
      },
      {
        "id": "b2-19-g-registro",
        "type": "context",
        "prompt": "Lee la situación y elige la forma más adecuada.",
        "items": [
          {
            "context": "Graciela escribe al municipio para pedir un permiso. No conoce a la persona que lo leerá.",
            "q": "¿Qué frase es la más adecuada?",
            "options": [
              "Mandanos el permiso antes del viernes.",
              "Le agradecería que nos enviara el permiso antes del viernes.",
              "¡Que nos manden el permiso!"
            ],
            "answer": 1,
            "why": "Texto formal a un desconocido: condicional + imperfecto de subjuntivo."
          },
          {
            "context": "Martín quiere que su compañero de confianza le alcance un cable durante el montaje.",
            "q": "¿Qué frase suena natural entre ellos?",
            "options": [
              "¿Me pasás el cable?",
              "Se ruega pasar el cable.",
              "Le rogaría que me pasara el cable."
            ],
            "answer": 0,
            "why": "Confianza y situación práctica: pregunta directa con voseo, normal en Montevideo."
          },
          {
            "context": "El club quiere colocar el escenario frente al garaje de la señora Olga y le pide permiso.",
            "q": "¿Qué pregunta pide permiso para una acción del club?",
            "options": [
              "¿Le importaría colocar el escenario?",
              "¿Le importa que colocamos el escenario?",
              "¿Le importaría que colocáramos el escenario frente a su garaje?"
            ],
            "answer": 2,
            "why": "Actúa otra persona (el club): «que» + imperfecto de subjuntivo."
          },
          {
            "context": "En la entrada del club hay que poner un cartel sobre el consumo de tabaco.",
            "q": "¿Qué texto es propio de un cartel?",
            "options": [
              "Por favor, ¿no fumas?",
              "No fumar en el salón.",
              "Quería pedirte que no fumaras."
            ],
            "answer": 1,
            "why": "Cartel impersonal: infinitivo."
          }
        ]
      },
      {
        "id": "b2-19-g-reformular",
        "type": "open",
        "prompt": "Reformula cada texto de partida como se pide. Después compara con el modelo y la lista: hay más de una versión correcta.",
        "items": [
          {
            "prompt": "Texto de partida: «Martín trajo los parlantes». Reescríbelo empezando por «los parlantes», como respuesta a «¿Y los parlantes?».",
            "model": "Los parlantes los trajo Martín.",
            "checklist": [
              "Repito el complemento directo con «los».",
              "Pongo el sujeto detrás del verbo como información nueva.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Bajá la música ya». Conviértelo en una petición escrita y distante a un vecino al que no conoces.",
            "model": "Le agradeceríamos que bajara el volumen de la música a partir de las once de la noche.",
            "checklist": [
              "Uso «usted» y un verbo en condicional.",
              "Uso el imperfecto de subjuntivo tras «agradecería(mos) que».",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Los vecinos deben dejar libre la vereda durante el tablado». Conviértelo en un cartel impersonal.",
            "model": "Se ruega dejar libre la vereda durante el tablado.",
            "checklist": [
              "Borro a la persona con «se ruega» o con un infinitivo.",
              "Mantengo la información esencial.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «A mí me parece bien, y a Martín también le parece bien, pero a Graciela no le parece bien». Abrévialo con contraste y elipsis.",
            "model": "A mí me parece bien, y a Martín también; a Graciela, no.",
            "checklist": [
              "Mantengo «a mí me» al principio.",
              "Reduzco los temas siguientes sin repetir el verbo.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para organizar una fiesta de barrio y para hablar con los vecinos. Fíjate en el registro de cada expresión.",
    "groups": [
      {
        "title": "El tablado",
        "items": [
          {
            "es": "el tablado",
            "note": "en Uruguay, escenario de barrio donde actúan los grupos de carnaval"
          },
          {
            "es": "la murga",
            "note": "grupo de carnaval que canta y critica la actualidad con humor"
          },
          {
            "es": "armar el escenario",
            "note": "montar la estructura"
          },
          {
            "es": "los parlantes",
            "note": "en gran parte de América, altavoces"
          },
          {
            "es": "la vereda",
            "note": "en el Río de la Plata, acera"
          }
        ]
      },
      {
        "title": "Convivir con los vecinos",
        "items": [
          {
            "es": "moderar el volumen",
            "note": "bajar el sonido; registro formal"
          },
          {
            "es": "presentar una queja",
            "note": "reclamar formalmente"
          },
          {
            "es": "pedir disculpas por las molestias",
            "note": "fórmula para reconocer un problema"
          },
          {
            "es": "llegar a un acuerdo",
            "note": "decidir algo aceptable para las dos partes"
          },
          {
            "es": "estar a disposición de alguien",
            "note": "ofrecerse para ayudar o responder; formal"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b2-19-v-tablado",
        "type": "match",
        "prompt": "Relaciona cada expresión con la situación del club en la que encaja.",
        "pairs": [
          {
            "left": "armar el escenario",
            "right": "Seis socios atornillan las tarimas en la esquina."
          },
          {
            "left": "presentar una queja",
            "right": "Una vecina escribe al municipio por el ruido."
          },
          {
            "left": "moderar el volumen",
            "right": "El técnico baja el sonido después de medianoche."
          },
          {
            "left": "la murga",
            "right": "Diecisiete cantantes maquillados critican al gobierno con humor."
          },
          {
            "left": "llegar a un acuerdo",
            "right": "El club termina a la una y la vecina no se queja más."
          },
          {
            "left": "estar a disposición de alguien",
            "right": "«Para cualquier duda, puede llamarnos al teléfono del club»."
          }
        ],
        "why": "Cada expresión describe una acción o una persona concreta del tablado."
      }
    ]
  },
  "pronunciation": {
    "focus": "El foco se oye: acento fuerte en la palabra destacada y tono amable en las peticiones.",
    "explanation": [
      "Cuando adelantas una palabra como foco, esa palabra lleva el acento más fuerte de la frase y no hay pausa después: «ESO te dije yo», «CIEN sillas necesitamos». En cambio, cuando el complemento es un tema conocido, haces una pequeña pausa y el pronombre lo retoma: «el escenario | lo armamos el viernes».",
      "En las peticiones, el tono importa tanto como la gramática. Una pregunta cortés sube suavemente al final y evita los golpes de voz: «¿podría bajar un poco la música?». Una orden con «¡que…!» baja con fuerza. Escucha, repite y grábate en tu dispositivo; la voz sintética es un apoyo y no evalúa tu pronunciación."
    ],
    "examples": [
      {
        "es": "ESO te dije yo.",
        "note": "Foco: fuerza en «eso», sin pausa."
      },
      {
        "es": "El escenario lo armamos el viernes.",
        "note": "Tema: pausa breve después de «escenario»."
      },
      {
        "es": "¿Podría bajar un poco la música?",
        "note": "Petición: el tono sube suavemente al final."
      }
    ],
    "perceive": {
      "id": "b2-19-p-oido",
      "type": "listen",
      "prompt": "Escucha cada frase y decide qué función tiene según la entonación y la forma.",
      "items": [
        {
          "q": "En la frase sobre las sillas, ¿qué se destaca?",
          "options": [
            "Un tema ya conocido.",
            "Una cantidad nueva y sorprendente."
          ],
          "answer": 1,
          "audio": "Doscientas sillas pidió el municipio, no cien.",
          "voice": "es-UY-f",
          "why": "Foco con inversión del sujeto: información nueva."
        },
        {
          "q": "En la frase sobre el escenario, ¿qué es «el escenario»?",
          "options": [
            "Un tema ya conocido.",
            "Una corrección."
          ],
          "answer": 0,
          "audio": "El escenario, lo desarmamos el domingo temprano.",
          "voice": "es-UY-m",
          "why": "Pausa y pronombre «lo»: tema conocido."
        },
        {
          "q": "¿Cómo suena la frase sobre la música?",
          "options": [
            "Como una orden insistente.",
            "Como una petición cortés."
          ],
          "answer": 1,
          "audio": "¿Le molestaría que bajáramos la música a las doce?",
          "voice": "es-UY-f",
          "why": "Pregunta con condicional e imperfecto de subjuntivo: petición distante."
        },
        {
          "q": "¿Cómo suena la frase sobre el volumen?",
          "options": [
            "Como una petición distante.",
            "Como una orden repetida e insistente."
          ],
          "answer": 1,
          "audio": "¡Que bajes el volumen, te dije!",
          "voice": "es-UY-m",
          "why": "«¡Que + subjuntivo!»: insiste en una orden."
        }
      ]
    },
    "produce": [
      {
        "text": "A los vecinos los avisamos el lunes.",
        "tip": "Pausa breve después de «vecinos»; el pronombre retoma el tema.",
        "voice": "es-UY-f"
      },
      {
        "text": "TRES años llevamos con este tablado.",
        "tip": "Toda la fuerza en «tres», sin pausa después.",
        "voice": "es-UY-m"
      },
      {
        "text": "Le agradecería que me respondiera antes del viernes.",
        "tip": "Ritmo tranquilo, sin subir la voz.",
        "voice": "es-UY-f"
      },
      {
        "text": "¿Le importaría que dejáramos las sillas en su garaje?",
        "tip": "Sube suavemente al final, como quien pide un favor.",
        "voice": "es-UY-m"
      }
    ]
  },
  "listening": {
    "title": "Graciela llama a la señora Olga",
    "context": "Graciela preside un club de barrio del Cordón, en Montevideo, que organiza un tablado de carnaval. Llama a la señora Olga, una vecina mayor que se quejó del ruido el año pasado. Escucha primero sin transcripción. Las voces son sintéticas y no representan una variedad regional verificada.",
    "speakers": [
      {
        "id": "gr",
        "name": "Graciela",
        "voice": "es-UY-f",
        "role": "Presidenta del club de barrio"
      },
      {
        "id": "ol",
        "name": "Olga",
        "voice": "es-UY-m",
        "role": "Vecina mayor, vive frente al club"
      }
    ],
    "script": [
      {
        "speaker": "gr",
        "text": "Buenas tardes, señora Olga. Habla Graciela, del club. Quería hacerle una consulta sobre el tablado de febrero, si tiene un minuto."
      },
      {
        "speaker": "ol",
        "text": "Buenas tardes, Graciela. Un minuto tengo, sí. Ya me imagino de qué se trata. Mire, a mí la murga no me molesta; lo que me molesta es la música grabada hasta las tres de la mañana. Eso se lo dije a ustedes el año pasado."
      },
      {
        "speaker": "gr",
        "text": "Tiene toda la razón, y por eso la llamo a usted primero. Este año queremos hacer las cosas bien. La música grabada la vamos a cortar a la una en punto. Y los parlantes los vamos a girar hacia la plaza, no hacia su casa."
      },
      {
        "speaker": "ol",
        "text": "Eso me parece bien. ¿Y los autos? Porque el año pasado me dejaron la entrada del garaje bloqueada toda la noche."
      },
      {
        "speaker": "gr",
        "text": "Vamos a poner carteles: «No estacionar frente a los garajes». Y dos socios van a estar en la vereda controlando. Otra cosa, señora Olga: ¿le importaría que guardáramos las sillas en su garaje el sábado de mañana? Se las devolvemos limpias antes del mediodía."
      },
      {
        "speaker": "ol",
        "text": "Mire, el garaje se lo presto, pero con una condición: que me avisen a mí, no a mi hijo. A mi hijo le dicen las cosas y después se olvida."
      },
      {
        "speaker": "gr",
        "text": "Perfecto, se lo aviso a usted directamente. Y si en algún momento la música le resulta molesta, le agradecería que me llamara a mí antes de presentar una queja. Le dejo mi número en el buzón."
      },
      {
        "speaker": "ol",
        "text": "Trato hecho, Graciela. Y ya que estamos: entradas para el sábado, ¿me guardaría dos?"
      },
      {
        "speaker": "gr",
        "text": "¡Claro que sí! Las dos entradas se las llevo yo misma el viernes, y le reservamos una silla cerca de la puerta, que ahí se oye bien y se sale rápido. Muchas gracias por su paciencia, señora Olga."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la llamada entera. ¿Para qué llama Graciela y cómo termina la conversación?",
        "exercise": {
          "id": "b2-19-l-global",
          "type": "choice",
          "prompt": "Elige la respuesta que resume la llamada.",
          "items": [
            {
              "q": "¿Cuál es el objetivo de la llamada?",
              "options": [
                "Invitar a la vecina a cantar en la murga.",
                "Anticiparse a los problemas del año pasado y llegar a acuerdos.",
                "Pedirle dinero para el tablado."
              ],
              "answer": 1,
              "why": "Graciela quiere evitar las quejas del año anterior."
            },
            {
              "q": "¿Cómo termina la conversación?",
              "options": [
                "Con un acuerdo y buena relación.",
                "Con una amenaza de denuncia.",
                "Sin ninguna decisión."
              ],
              "answer": 0,
              "why": "«Trato hecho»; Olga incluso pide entradas."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y localiza los datos concretos.",
        "exercise": {
          "id": "b2-19-l-detalle",
          "type": "choice",
          "prompt": "Responde con la información exacta del audio.",
          "items": [
            {
              "q": "¿Qué le molestó a Olga el año pasado?",
              "options": [
                "La murga.",
                "Las luces del escenario.",
                "La música grabada hasta las tres y los autos frente al garaje."
              ],
              "answer": 2,
              "why": "La murga no le molesta; la música y el garaje sí."
            },
            {
              "q": "¿Qué condición pone Olga para prestar el garaje?",
              "options": [
                "Que le paguen el alquiler.",
                "Que le avisen a ella y no a su hijo.",
                "Que no usen sillas."
              ],
              "answer": 1,
              "why": "Su hijo se olvida de las cosas."
            },
            {
              "q": "¿A qué hora cortarán la música grabada?",
              "options": [
                "A la una.",
                "A las tres.",
                "A medianoche."
              ],
              "answer": 0,
              "why": "«La música grabada la vamos a cortar a la una en punto»."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Ahora fíjate en la forma. Puedes leer la transcripción después de responder.",
        "exercise": {
          "id": "b2-19-l-forma",
          "type": "classify",
          "prompt": "Clasifica cada fragmento del diálogo según lo que hace.",
          "categories": [
            "Tema conocido retomado con pronombre",
            "Petición con distancia",
            "Foco o contraste sin pronombre repetido"
          ],
          "items": [
            {
              "text": "La música grabada la vamos a cortar a la una",
              "cat": 0,
              "why": "Complemento directo conocido delante: «la»."
            },
            {
              "text": "¿le importaría que guardáramos las sillas en su garaje?",
              "cat": 1,
              "why": "Permiso con «que» + imperfecto de subjuntivo."
            },
            {
              "text": "Un minuto tengo, sí",
              "cat": 2,
              "why": "Nombre sin artículo delante: sin pronombre."
            },
            {
              "text": "los parlantes los vamos a girar hacia la plaza",
              "cat": 0,
              "why": "Tema conocido retomado con «los»."
            },
            {
              "text": "le agradecería que me llamara a mí",
              "cat": 1,
              "why": "Condicional + imperfecto de subjuntivo."
            },
            {
              "text": "entradas para el sábado, ¿me guardaría dos?",
              "cat": 2,
              "why": "Nombre sin artículo como tema: no se repite con pronombre."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Carnaval en el Cordón: lo que nos pidieron y lo que les pedimos",
    "genre": "Columna del club en un periódico de barrio",
    "frame": "Texto original de SpanishCue escrito como columna de un club de barrio ficticio en un periódico vecinal de Montevideo. Las personas y el club son inventados.",
    "text": [
      "Cada febrero, desde hace veintidós años, nuestro club arma un tablado en la esquina de la plaza. Este año lo vamos a hacer de nuevo, pero no de la misma manera. El año pasado recibimos tres quejas formales, y las tres las leímos con atención. A los vecinos que las firmaron los llamamos uno por uno; a la intendencia, en cambio, le respondimos por escrito. Esta columna resume lo que aprendimos y lo que nos comprometemos a cambiar, porque una fiesta de barrio solo tiene sentido si el barrio entero la siente como propia.",
      "Lo primero: la murga no es el problema. Eso nos lo dijeron todos, incluso quienes más se quejaron. A la mayoría del barrio le encanta ver a los grupos ensayar en la calle. Lo que molesta es lo de después: la música grabada a todo volumen, los autos frente a los garajes y la basura del domingo. Mucho ruido hicimos, es verdad, y pocas soluciones dimos.",
      "Por eso este año hemos cambiado varias cosas. La música grabada la cortaremos a la una. Los parlantes los orientaremos hacia la plaza. Habrá carteles con un mensaje claro: «No estacionar frente a los garajes». Y a cada vecino de la cuadra le dejaremos en el buzón el teléfono de una persona responsable, para que nos llame a nosotros antes de llamar a la policía. Los domingos a las nueve, un grupo de socios recorrerá la plaza para dejarla limpia.",
      "También tenemos algo que pedirles a ustedes. Nos gustaría que los vecinos que tengan una queja nos la comunicaran directamente; les aseguramos que la vamos a escuchar. Les agradeceríamos, además, que dejaran libres las veredas durante el armado del escenario, el viernes por la tarde. Y si alguien quiere colaborar, se agradece cualquier ayuda: socios no nos sobran, y manos tampoco.",
      "Sabemos que una fiesta en la calle siempre es un equilibrio difícil. A unos les parece poco y a otros, demasiado. A nosotros nos parece que vale la pena intentarlo, siempre que todos podamos dormir el domingo. Los esperamos el sábado 14 a partir de las ocho. Quienes vengan con hijos pequeños tendrán un sector reservado cerca de la entrada del club."
    ],
    "glossary": [
      {
        "es": "la cuadra",
        "note": "en gran parte de América, el tramo de calle entre dos esquinas"
      },
      {
        "es": "la intendencia",
        "note": "en Uruguay, el gobierno de un departamento, como Montevideo"
      },
      {
        "es": "el buzón",
        "note": "caja donde se recibe la correspondencia"
      }
    ],
    "tasks": [
      {
        "id": "b2-19-r-comprension",
        "type": "choice",
        "prompt": "Responde según la columna.",
        "items": [
          {
            "q": "¿Cómo respondió el club a las quejas del año pasado?",
            "options": [
              "Llamó a los vecinos y respondió por escrito a la intendencia.",
              "Ignoró las quejas.",
              "Canceló el tablado."
            ],
            "answer": 0,
            "why": "Primer párrafo."
          },
          {
            "q": "Según el club, ¿qué no es el problema?",
            "options": [
              "La basura del domingo.",
              "La murga.",
              "Los autos frente a los garajes."
            ],
            "answer": 1,
            "why": "«La murga no es el problema»."
          },
          {
            "q": "¿Qué pide el club a los vecinos?",
            "options": [
              "Que paguen una entrada.",
              "Que no vengan con hijos pequeños.",
              "Que comuniquen sus quejas directamente al club."
            ],
            "answer": 2,
            "why": "Cuarto párrafo."
          }
        ]
      },
      {
        "id": "b2-19-r-interpretar",
        "type": "open",
        "prompt": "Interpreta el texto con tus palabras y apóyate en citas.",
        "items": [
          {
            "prompt": "Explica en 60–80 palabras qué tono elige el club para hablar con sus vecinos y con qué recursos gramaticales lo consigue. Cita una frase del texto.",
            "model": "El club elige un tono cercano pero respetuoso: reconoce sus errores y pide en lugar de exigir. Para pedir usa condicionales y subjuntivos, como en «Les agradeceríamos, además, que dejaran libres las veredas», y evita el imperativo. También destaca lo importante con el orden de las palabras, por ejemplo cuando admite «Mucho ruido hicimos». A mí me parece una buena estrategia para recuperar la confianza.",
            "checklist": [
              "Describo el tono con dos adjetivos.",
              "Cito una frase literal del texto.",
              "Nombro al menos un recurso de cortesía y uno de foco o de pronombres."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo la columna ordena la información y gradúa sus peticiones.",
      "items": [
        {
          "quote": "A los vecinos que las firmaron los llamamos uno por uno; a la intendencia, en cambio, le respondimos por escrito",
          "note": "Dos temas en contraste, cada uno retomado con su pronombre: «los» y «le»."
        },
        {
          "quote": "Mucho ruido hicimos, es verdad, y pocas soluciones dimos",
          "note": "Foco al principio sin pronombre: el club destaca su error y el sujeto queda detrás del verbo."
        },
        {
          "quote": "Les agradeceríamos, además, que dejaran libres las veredas",
          "note": "Petición distante: condicional + imperfecto de subjuntivo, y «les» para un plural."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina las dos clases: decide qué destacas y con qué pronombre, y ajusta cada petición a quien la recibe.",
    "exercises": [
      {
        "id": "b2-19-x-orden",
        "type": "order",
        "prompt": "Ordena las palabras para reconstruir frases del club.",
        "items": [
          {
            "words": [
              "A",
              "los",
              "músicos",
              "los",
              "invitamos",
              "a",
              "cenar",
              "después."
            ],
            "why": "Tema conocido delante y retomado con «los»."
          },
          {
            "words": [
              "Se",
              "ruega",
              "no",
              "subir",
              "al",
              "escenario."
            ],
            "why": "Petición impersonal con «se ruega» + infinitivo."
          },
          {
            "words": [
              "¿Te",
              "importaría",
              "ayudarnos",
              "con",
              "las",
              "sillas?"
            ],
            "why": "«¿Te importaría + infinitivo?»: la otra persona actúa."
          }
        ]
      },
      {
        "id": "b2-19-x-error",
        "type": "error",
        "prompt": "Cada frase tiene un error. Escríbela corregida.",
        "items": [
          {
            "sentence": "El cartel ya colgamos en la puerta del club.",
            "answers": [
              "El cartel ya lo colgamos en la puerta del club."
            ],
            "why": "Complemento directo conocido delante del verbo: el pronombre es obligatorio."
          },
          {
            "sentence": "¿Le importaría que nos preste su escalera?",
            "answers": [
              "¿Le importaría prestarnos su escalera?",
              "¿Le importaría que nos prestara su escalera?"
            ],
            "why": "Tras «importaría que» va el imperfecto de subjuntivo; si actúa la misma persona, mejor el infinitivo."
          },
          {
            "sentence": "Yo me molesta que la gente tire basura en la plaza.",
            "answers": [
              "A mí me molesta que la gente tire basura en la plaza."
            ],
            "why": "«Molestar» se construye con «a mí me»."
          },
          {
            "sentence": "Quisiera que me envíe el presupuesto esta semana.",
            "answers": [
              "Quisiera que me enviara el presupuesto esta semana."
            ],
            "why": "Con «quisiera que», el subjuntivo va en imperfecto."
          }
        ]
      },
      {
        "id": "b2-19-x-registro",
        "type": "classify",
        "prompt": "¿Para quién es cada frase? Clasifícala según el grado de distancia.",
        "categories": [
          "Confianza: amigos, familia, equipo",
          "Distancia: desconocidos, instituciones, textos formales"
        ],
        "items": [
          {
            "text": "Pasame la cinta, dale.",
            "cat": 0,
            "why": "Imperativo con voseo y atenuador coloquial."
          },
          {
            "text": "Le agradeceríamos que confirmara su asistencia.",
            "cat": 1,
            "why": "Condicional + imperfecto de subjuntivo."
          },
          {
            "text": "¡A ensayar, que se hace tarde!",
            "cat": 0,
            "why": "Infinitivo exclamativo familiar."
          },
          {
            "text": "Se agradece la puntualidad.",
            "cat": 1,
            "why": "Fórmula impersonal escrita."
          },
          {
            "text": "Haz el favor de traer las llaves esta vez.",
            "cat": 0,
            "why": "Reproche entre personas de confianza."
          },
          {
            "text": "Quisiera solicitar una reunión con la comisión.",
            "cat": 1,
            "why": "«Quisiera» + vocabulario formal."
          }
        ]
      },
      {
        "id": "b2-19-x-guiada",
        "type": "open",
        "prompt": "Escribe frases breves antes de la tarea de escritura. El modelo es una posibilidad, no la única.",
        "items": [
          {
            "prompt": "Pide lo mismo (que alguien te devuelva un libro) a un amigo, a tu jefa y en un cartel de una biblioteca.",
            "model": "¿Me devuelves el libro esta semana? / Le agradecería que me devolviera el libro cuando pueda. / Se ruega devolver los libros en el plazo indicado.",
            "checklist": [
              "Cambio el tratamiento y la forma verbal en cada caso.",
              "Uso una fórmula impersonal en el cartel."
            ]
          },
          {
            "prompt": "Responde a la pregunta «¿Y la comida y la bebida?» destacando quién trae cada cosa.",
            "model": "La comida la trae Graciela; la bebida, Martín.",
            "checklist": [
              "Retomo cada tema con su pronombre.",
              "Uso la elipsis en el segundo tema."
            ]
          },
          {
            "prompt": "Escribe una frase en la que corrijas a alguien destacando la información nueva al principio.",
            "model": "No, a las diez no empieza: A LAS NUEVE empieza la murga.",
            "checklist": [
              "Pongo el foco al principio y el sujeto detrás.",
              "No repito el complemento con un pronombre."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Organizas una actividad en tu barrio (un tablado, una feria, una fiesta). Escribe el mismo aviso en dos versiones (200–260 palabras en total): una carta formal para los vecinos de la cuadra y un mensaje informal para el equipo de voluntarios. Las dos deben pedir algo y explicar quién se ocupa de cada cosa.",
    "context": "La carta irá al buzón de personas que no conoces; el mensaje, al grupo de chat del equipo. El contenido es el mismo, pero la distancia cambia. Puedes usar los datos del club del Cordón o inventar otra actividad.",
    "steps": [
      "Haz una lista de lo que vas a pedir y de quién se encarga de cada tarea.",
      "Escribe la carta con «usted» o «ustedes», condicionales, imperfecto de subjuntivo y al menos una fórmula impersonal.",
      "Escribe el mensaje con tuteo o voseo, imperativos con atenuadores y temas retomados con pronombre («las sillas las trae…»).",
      "Revisa cada pronombre (¿falta uno obligatorio?, ¿sobra uno con foco?) y corrige los subjuntivos que dependen de un condicional."
    ],
    "useLanguage": [
      "les agradeceríamos que + imperfecto de subjuntivo",
      "nos gustaría que…",
      "se ruega / se agradece + infinitivo",
      "¿te importaría + infinitivo?",
      "las sillas las trae… / la música, …",
      "a mí me parece…"
    ],
    "model": [
      "Carta a los vecinos. Estimados vecinos y vecinas: el sábado 14 de febrero el club organizará, como cada año, un tablado en la esquina de la plaza. Queremos pedirles disculpas de antemano por las molestias y contarles qué cambiaremos respecto del año pasado. La música grabada la cortaremos a la una, y los parlantes los orientaremos hacia la plaza.",
      "Les agradeceríamos que no estacionaran frente a los garajes ese día y que nos comunicaran cualquier problema directamente, al teléfono que les dejamos al pie. Se ruega, además, dejar libre la vereda el viernes por la tarde, durante el armado del escenario. Quedamos a su disposición. Comisión directiva del club.",
      "Mensaje al equipo. ¡Hola, gente! Ya está todo confirmado para el sábado 14. Repaso quién hace qué: el escenario lo arman Martín y los chicos el viernes a las cinco; las sillas las traemos Rosa y yo desde el garaje de la señora Olga; la música, Diego, que este año la corta a la una sí o sí.",
      "Una cosa importante: a la señora Olga avísenle a ella directamente, no al hijo, que se olvida de todo. Y otra: ¿les importaría quedarse media hora más el domingo para juntar la basura? Las bolsas y los guantes los consigo yo. A mí me parece que si lo hacemos entre todos terminamos rápido. ¡Gracias, equipo!"
    ],
    "checklist": [
      "Las dos versiones transmiten el mismo contenido con distinta distancia.",
      "En la carta uso condicionales, imperfecto de subjuntivo y una fórmula impersonal.",
      "En el mensaje retomo los temas con el pronombre correcto.",
      "No repito pronombres cuando destaco información nueva.",
      "Cada petición está adaptada a la persona que la recibe."
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
        "title": "Tres maneras de pedir lo mismo",
        "prompt": "Habla durante unos dos minutos. Elige un favor grande (cuidar a tu perro una semana, prestarte el auto, cambiarte un turno) y pídeselo en voz alta a tres personas distintas: un amigo íntimo, una vecina mayor que apenas conoces y tu jefe. Después explica qué cambiaste en cada versión y por qué.",
        "prep": [
          "Prepara una forma directa, una con condicional y una con «le agradecería que…».",
          "Piensa en un atenuador y en una fórmula para agradecer en cada caso."
        ],
        "seconds": 150,
        "model": "A mi amigo Nico le diría: «Che, ¿me cuidás al perro la semana que viene? Te dejo comida para todo el viaje». A mi vecina, en cambio, le hablaría de usted: «Disculpe, quería pedirle un favor. ¿Le importaría que dejara a mi perro en su patio unos días?». Y a mi jefe le escribiría: «Le agradecería que me permitiera trabajar desde casa esa semana». Cuanta menos confianza, más distancia pongo en el verbo.",
        "selfCheck": [
          "Cambio el tratamiento y la forma verbal en cada versión.",
          "Uso bien el imperfecto de subjuntivo después del condicional.",
          "Explico mis decisiones con claridad."
        ]
      },
      {
        "title": "La vecina que se queja",
        "prompt": "Tu docente es un vecino mayor que viene a quejarse del ruido de tu fiesta. Escucha su queja, reconoce lo que tenga razón, pregúntale qué le molesta exactamente, pídele algo con cortesía y lleguen a un acuerdo concreto.",
        "prep": [
          "Prepara una frase para reconocer el problema sin discutir.",
          "Prepara dos peticiones con distancia: «¿le importaría que…?», «le agradecería que…».",
          "Piensa en una frase con foco para corregir un dato: «A las doce terminamos, no a las tres»."
        ],
        "seconds": 180,
        "selfCheck": [
          "Mantengo el «usted» durante toda la conversación.",
          "Respondo a lo que dice mi interlocutor y no solo a lo que preparé.",
          "Terminamos con un acuerdo concreto."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva a la próxima clase lo que preparaste esta semana y úsalo con tu profesor.",
    "cards": [
      {
        "move": "Pide",
        "task": "Pide a tu profesor un favor relacionado con la clase (cambiar la hora, revisar un texto) con la forma más cortés que sepas.",
        "phrases": [
          "Quería pedirte…",
          "¿Te importaría…?",
          "Me gustaría que…"
        ]
      },
      {
        "move": "Corrige",
        "task": "Di tres datos falsos sobre ti y deja que tu profesor los corrija destacando la información nueva al principio.",
        "phrases": [
          "No, EN MAYO nací…",
          "Eso no lo sabía."
        ]
      },
      {
        "move": "Pregunta",
        "task": "Pregunta a tu profesor qué tratamiento usaría en tres situaciones de su país o región (médico, suegros, vecino joven).",
        "phrases": [
          "¿Ahí se usa usted o tú?",
          "¿Y el voseo, se oye?"
        ]
      }
    ],
    "bring": "Trae tus dos versiones del aviso con los pronombres subrayados y una petición que no sepas si suena demasiado brusca."
  },
  "quiz": {
    "items": [
      {
        "type": "gap",
        "q": "Las fotos del tablado ___ subió Martín a la página del club.",
        "answers": [
          [
            "las"
          ]
        ],
        "why": "Complemento directo conocido delante: «las» obligatorio."
      },
      {
        "type": "gap",
        "q": "Le agradecería que me ___ (confirmar) la reserva por escrito.",
        "answers": [
          [
            "confirmara",
            "confirmase"
          ]
        ],
        "why": "Tras el condicional, imperfecto de subjuntivo."
      },
      {
        "type": "gap",
        "q": "A nosotros no ___ gustó nada la decisión del municipio.",
        "answers": [
          [
            "nos"
          ]
        ],
        "why": "Con «gustar», el pronombre del indirecto es obligatorio."
      },
      {
        "type": "choice",
        "q": "«Algo sabrá Martín, porque no deja de sonreír.» ¿Por qué no hay pronombre «lo»?",
        "options": [
          "Porque «algo» es un foco destacado delante del verbo.",
          "Porque es un error de la frase.",
          "Porque «saber» nunca lleva pronombre."
        ],
        "answer": 0,
        "why": "Con foco al principio no se repite el complemento."
      },
      {
        "type": "choice",
        "q": "¿Qué frase pide permiso para que actúe otra persona?",
        "options": [
          "¿Le importaría cerrar la ventana?",
          "¿Le importaría que abriéramos la ventana?",
          "¿Podría abrir la ventana?"
        ],
        "answer": 1,
        "why": "«Que» + imperfecto de subjuntivo: actúa otra persona."
      },
      {
        "type": "listen",
        "q": "Según el audio, ¿qué tipo de mensaje es?",
        "audio": "Se ruega a los señores socios abonar la cuota antes del día diez. Muchas gracias.",
        "voice": "es-UY-f",
        "options": [
          "Una orden entre amigos.",
          "Un reproche familiar.",
          "Un aviso formal e impersonal."
        ],
        "answer": 2,
        "why": "«Se ruega» + infinitivo: fórmula impersonal."
      },
      {
        "type": "error",
        "sentence": "Yo me parece que deberíamos empezar más temprano.",
        "answers": [
          "A mí me parece que deberíamos empezar más temprano."
        ],
        "why": "«Parecer» va con «a mí me»."
      },
      {
        "type": "error",
        "sentence": "Las bebidas ya pagamos con el dinero de las rifas.",
        "answers": [
          "Las bebidas ya las pagamos con el dinero de las rifas."
        ],
        "why": "Complemento directo conocido delante: falta «las»."
      },
      {
        "type": "order",
        "words": [
          "¿Te",
          "importaría",
          "pasarme",
          "el",
          "programa",
          "del",
          "sábado?"
        ],
        "why": "«¿Te importaría + infinitivo?» para una petición amable."
      },
      {
        "type": "open",
        "prompt": "Escribe la misma petición (que alguien baje el volumen) para un compañero de piso y para un vecino desconocido.",
        "model": "¿Puedes bajar un poco la música, que mañana madrugo? / Disculpe, le agradecería que bajara el volumen a partir de las once.",
        "checklist": [
          "Cambio de tú a usted.",
          "Uso condicional e imperfecto de subjuntivo en la versión distante."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo decidir cuándo el pronombre átono es obligatorio (tema conocido delante, pronombre tónico), recomendable (indirecto detrás) o imposible (foco, nombre sin artículo).",
      "Puedo contrastar temas con elipsis, usar «a mí me» y reconocer variantes como «le» por «les» o «se los dije».",
      "Puedo graduar una petición desde la orden directa hasta la fórmula impersonal y elegir el tratamiento adecuado."
    ],
    "review": [
      "Mañana, sin mirar las tablas, escribe tres frases con un tema conocido delante y tres con foco.",
      "En tres días, busca un cartel o un aviso real y reescríbelo en un registro más cercano.",
      "Antes de la semana 20, relee tus dos avisos y cambia una petición directa por una con «¿te importaría…?»."
    ]
  },
  "related": [
    {
      "path": "/gramatica/pronombres-redundancia-duplicacion-y-foco",
      "label": "Clase: Pronombres: redundancia, duplicación y foco"
    },
    {
      "path": "/gramatica/registro-cortesia-distancia-y-mandato",
      "label": "Clase: Registro: cortesía, distancia y mandato"
    }
  ]
};
