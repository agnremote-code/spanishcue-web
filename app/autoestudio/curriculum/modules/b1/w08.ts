import type { Module } from "../../types";

export const b1w08: Module = {
  "id": "b1-08",
  "level": "b1",
  "week": 8,
  "kind": "core",
  "title": "El lugar que estamos buscando",
  "subtitle": "Describir requisitos y negociar qué condiciones son imprescindibles.",
  "stop": {
    "place": "Málaga",
    "country": "España"
  },
  "minutes": 95,
  "newObjectives": [
    "b1.gram.relativas-modo",
    "b1.gram.relativos-quien-donde",
    "b1.voc.vivienda-convivencia",
    "b1.pron.pausas-relativas",
    "b1.fun.describir-ideal",
    "b1.lis.anuncios-busco",
    "b1.gram.cuantificacion-busqueda"
  ],
  "reviewObjectives": [
    "b1.gram.emociones-subjuntivo",
    "b1.gram.mismo-sujeto",
    "b1.voc.sentimientos",
    "b1.pron.entonacion-emocion",
    "b1.fun.expresar-sentimientos",
    "b1.wri.correo-personal",
    "b1.voc.relaciones",
    "b1.fun.hablar-relaciones",
    "b1.gram.posesivos-relacion"
  ],
  "prerequisites": [
    "b1-07"
  ],
  "goal": {
    "canDo": "Puedo describir requisitos y negociar qué condiciones son imprescindibles.",
    "steps": [
      "Reconstruye la situación a partir del audio y la lectura.",
      "Relaciona las formas con una intención y comprueba tus elecciones.",
      "Prepara un texto revisado y una intervención con preguntas.",
      "Lleva a clase una propuesta propia y una duda concreta."
    ]
  },
  "theory": {
    "intro": "La misión de esta semana: Describir requisitos y negociar qué condiciones son imprescindibles.",
    "parts": [
      {
        "heading": "Forma y significado",
        "body": [
          "Una relativa con indicativo describe un referente conocido: tengo una habitación que recibe luz. Con subjuntivo presentamos una característica buscada sin afirmar que exista ese referente: busco una habitación que reciba luz. La diferencia es de perspectiva, no de tamaño ni de importancia."
        ],
        "examples": [
          {
            "es": "Buscamos un piso que tenga dos mesas."
          },
          {
            "es": "Conozco uno que tiene un patio pequeño."
          },
          {
            "es": "La que vive junto al parque es mi compañera."
          }
        ],
        "mistakes": [
          {
            "wrong": "Busco un piso que tiene ascensor, pero no conozco ninguno.",
            "right": "Busco un piso que tenga ascensor, pero no conozco ninguno.",
            "why": "El referente buscado no está identificado."
          }
        ]
      },
      {
        "heading": "Organizar la comunicación",
        "body": [
          "Quien puede referirse a personas, donde a lugares y lo que a un contenido: lo que necesito es silencio. El que y la que permiten recuperar un nombre conocido. Las comas y pausas delimitan información adicional; sin ellas una relativa puede seleccionar solo una parte del grupo."
        ],
        "examples": [
          {
            "es": "Quien llegue primero recoge las llaves."
          },
          {
            "es": "Este es el barrio donde trabajo."
          },
          {
            "es": "Lo que me preocupa es el ruido nocturno."
          }
        ]
      },
      {
        "heading": "Cuantificadores y negación en búsquedas",
        "body": [
          "Alguno y ninguno se acortan ante nombre masculino singular: algún piso, ningún requisito. Cualquiera pasa a cualquier ante nombre singular: cualquier persona. Después del verbo, nadie y ninguno suelen necesitar no: no conozco ninguno. Bastante y demasiado concuerdan cuando cuantifican nombres; demasiado no cambia si modifica un adjetivo."
        ],
        "examples": [
          {
            "es": "No conocemos ningún piso que reúna todo."
          },
          {
            "es": "Cualquier persona puede preguntar por los gastos."
          },
          {
            "es": "Hay bastantes anuncios, pero algunos son demasiado caros."
          }
        ]
      }
    ]
  },
  "grammar": {
    "exercises": [
      {
        "id": "b1-08-forms",
        "type": "gap",
        "prompt": "Completa estas situaciones de «El lugar que estamos buscando» con la forma que expresa la relación indicada.",
        "items": [
          {
            "q": "Necesito un alojamiento que ___ conexión estable.",
            "answers": [
              [
                "tenga"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "Vivo en una casa que ___ un patio.",
            "answers": [
              [
                "tiene"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "El barrio ___ estudié ha cambiado.",
            "answers": [
              [
                "donde"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          }
        ],
        "bank": [
          "tenga",
          "tiene",
          "donde"
        ]
      },
      {
        "id": "b1-08-repair",
        "type": "error",
        "prompt": "Revisa la coherencia y la forma en estas frases del caso de la semana.",
        "items": [
          {
            "sentence": "Busco un piso que tiene ascensor, pero no conozco ninguno.",
            "answers": [
              "Busco un piso que tenga ascensor, pero no conozco ninguno."
            ],
            "why": "El referente buscado no está identificado."
          },
          {
            "sentence": "La persona donde me ayudó vive aquí.",
            "answers": [
              "La persona que me ayudó vive aquí."
            ],
            "why": "Donde se refiere a lugares."
          },
          {
            "sentence": "Lo que necesito son que haya silencio.",
            "answers": [
              "Lo que necesito es que haya silencio."
            ],
            "why": "Aquí la estructura identificativa usa es ante una oración."
          }
        ]
      },
      {
        "id": "b1-08-cuantificacion-busqueda",
        "type": "gap",
        "prompt": "Aplica cuantificadores y negación en búsquedas a la misión de esta semana.",
        "bank": [
          "algún",
          "ningún",
          "bastantes"
        ],
        "items": [
          {
            "q": "¿Conoces ___ piso cerca del centro?",
            "answers": [
              [
                "algún"
              ]
            ],
            "why": "Alguno y ninguno se acortan ante nombre masculino singular: algún piso, ningún requisito. Cualquiera pasa a cualquier ante nombre singular: cualquier persona. Después del verbo, nadie y ninguno suelen necesitar no: no conozco ninguno. Bastante y demasiado concuerdan cuando cuantifican nombres; demasiado no cambia si modifica un adjetivo."
          },
          {
            "q": "No encontramos ___ anuncio con todos los datos.",
            "answers": [
              [
                "ningún"
              ]
            ],
            "why": "Alguno y ninguno se acortan ante nombre masculino singular: algún piso, ningún requisito. Cualquiera pasa a cualquier ante nombre singular: cualquier persona. Después del verbo, nadie y ninguno suelen necesitar no: no conozco ninguno. Bastante y demasiado concuerdan cuando cuantifican nombres; demasiado no cambia si modifica un adjetivo."
          },
          {
            "q": "Hay ___ habitaciones para tres personas.",
            "answers": [
              [
                "bastantes"
              ]
            ],
            "why": "Alguno y ninguno se acortan ante nombre masculino singular: algún piso, ningún requisito. Cualquiera pasa a cualquier ante nombre singular: cualquier persona. Después del verbo, nadie y ninguno suelen necesitar no: no conozco ninguno. Bastante y demasiado concuerdan cuando cuantifican nombres; demasiado no cambia si modifica un adjetivo."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Aprende cada expresión junto a su situación de uso; reutiliza al menos cuatro en tu producción.",
    "groups": [
      {
        "title": "El lugar que estamos buscando · acciones y recursos",
        "items": [
          {
            "es": "compartir los gastos",
            "note": "pagar entre varias personas"
          },
          {
            "es": "una fianza",
            "note": "cantidad entregada como garantía"
          },
          {
            "es": "respetar los turnos",
            "note": "seguir el orden acordado"
          },
          {
            "es": "una zona común",
            "note": "espacio usado por todos"
          }
        ]
      },
      {
        "title": "Matices para esta misión",
        "items": [
          {
            "es": "tener buena conexión",
            "note": "disponer de acceso digital estable"
          },
          {
            "es": "ceder en algo",
            "note": "aceptar cambiar una exigencia"
          },
          {
            "es": "una condición imprescindible",
            "note": "requisito que no se puede abandonar"
          },
          {
            "es": "llegar a un acuerdo",
            "note": "decidir una solución aceptada"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-08-lexis",
        "type": "match",
        "prompt": "Relaciona expresiones de «El lugar que estamos buscando» con su significado en este contexto.",
        "pairs": [
          {
            "left": "compartir los gastos",
            "right": "pagar entre varias personas"
          },
          {
            "left": "una fianza",
            "right": "cantidad entregada como garantía"
          },
          {
            "left": "respetar los turnos",
            "right": "seguir el orden acordado"
          },
          {
            "left": "una zona común",
            "right": "espacio usado por todos"
          },
          {
            "left": "tener buena conexión",
            "right": "disponer de acceso digital estable"
          },
          {
            "left": "ceder en algo",
            "right": "aceptar cambiar una exigencia"
          },
          {
            "left": "una condición imprescindible",
            "right": "requisito que no se puede abandonar"
          },
          {
            "left": "llegar a un acuerdo",
            "right": "decidir una solución aceptada"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Pausas en información añadida",
    "explanation": [
      "Compara los compañeros que estudian salen tarde con los compañeros, que estudian, salen tarde. La pausa puede presentar información adicional; el contexto aclara a quiénes incluyes.",
      "Escucha la síntesis como apoyo para percibir palabras y grupos. Compara después tu producción con la comprensión de otra persona; no hay evaluación automática ni demostración regional verificada."
    ],
    "examples": [
      {
        "es": "Buscamos un piso que tenga dos mesas."
      },
      {
        "es": "Conozco uno que tiene un patio pequeño."
      },
      {
        "es": "La que vive junto al parque es mi compañera."
      }
    ],
    "perceive": {
      "id": "b1-08-perception",
      "type": "listen",
      "prompt": "Escucha antes de elegir qué secuencia reconoces; después repítela agrupando el sentido.",
      "items": [
        {
          "q": "Percepción 1: ¿qué reconoces al escuchar el fragmento de «El lugar que estamos buscando»?",
          "options": [
            "La relativa queda entre pausas",
            "No se separa ninguna información añadida"
          ],
          "answer": 0,
          "audio": "Los vecinos, que ya habían llegado, esperaron fuera.",
          "voice": "es-ES-f",
          "why": "Escucha la secuencia completa y compara el grupo indicado. La síntesis sirve como apoyo, no como evaluación de acento."
        },
        {
          "q": "Percepción 2: ¿qué reconoces al escuchar el fragmento de «El lugar que estamos buscando»?",
          "options": [
            "Se oye la que como grupo inicial",
            "Se oye lo que como grupo inicial"
          ],
          "answer": 1,
          "audio": "Lo que necesito es silencio.",
          "voice": "es-ES-f",
          "why": "Escucha la secuencia completa y compara el grupo indicado. La síntesis sirve como apoyo, no como evaluación de acento."
        }
      ]
    },
    "produce": [
      {
        "text": "Buscamos un piso que tenga dos mesas.",
        "tip": "Compara los compañeros que estudian salen tarde con los compañeros, que estudian, salen tarde. La pausa puede presentar información adicional; el contexto aclara a quiénes incluyes.",
        "voice": "es-ES-f"
      },
      {
        "text": "Conozco uno que tiene un patio pequeño.",
        "tip": "Compara los compañeros que estudian salen tarde con los compañeros, que estudian, salen tarde. La pausa puede presentar información adicional; el contexto aclara a quiénes incluyes.",
        "voice": "es-ES-f"
      },
      {
        "text": "La que vive junto al parque es mi compañera.",
        "tip": "Compara los compañeros que estudian salen tarde con los compañeros, que estudian, salen tarde. La pausa puede presentar información adicional; el contexto aclara a quiénes incluyes.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "El lugar que estamos buscando · voces en conversación",
    "context": "Una llamada permite preguntar por una habitación antes de visitarla. Escucha primero sin transcripción. Las voces son sintéticas; no se presentan como modelos regionales verificados. Anota quién necesita qué y qué queda por confirmar.",
    "speakers": [
      {
        "id": "a",
        "name": "Persona interesada",
        "voice": "es-ES-f"
      },
      {
        "id": "b",
        "name": "Responsable del piso",
        "voice": "es-ES-m"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Llamo por el anuncio de la habitación. Busco un lugar que permita estudiar por la tarde y que tenga una mesa dentro del cuarto. En las fotografías no se ve bien el espacio junto a la ventana."
      },
      {
        "speaker": "b",
        "text": "La habitación tiene una mesa pequeña y una estantería. La que aparece junto al salón ya está ocupada; la disponible da al patio. Es más tranquila, aunque recibe menos luz directa durante la mañana."
      },
      {
        "speaker": "a",
        "text": "Eso podría servirme. Lo que más me preocupa es el ruido por la noche. ¿Cuántas personas viven allí y cómo organizan las visitas? No necesito silencio absoluto, pero tengo clases temprano varios días."
      },
      {
        "speaker": "b",
        "text": "Ahora viven dos personas que trabajan de día. Suelen recibir amigos los fines de semana y avisan antes en un grupo. No hay una norma escrita, así que sería bueno hablarlo durante la visita y comprobar que todos están de acuerdo."
      },
      {
        "speaker": "a",
        "text": "Me parece razonable. También quisiera saber si los gastos están incluidos. Conozco un piso que anuncia un precio bajo y luego añade varias cantidades. Prefiero calcular el total antes de decidir."
      },
      {
        "speaker": "b",
        "text": "El alquiler incluye internet, pero la electricidad se divide entre quienes viven allí. Podemos enseñarte las últimas facturas sin datos personales para que veas una cantidad aproximada. Si te interesa, ven el jueves y así preguntas directamente a tus posibles compañeros. He visto bastantes anuncios, pero no conozco ningún piso que reúna todo. Puedo ceder en la luz; no puedo aceptar cualquier nivel de ruido durante la noche."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha sin abrir el texto. Identifica la situación y la intención principal.",
        "exercise": {
          "id": "b1-08-audio-0",
          "type": "choice",
          "prompt": "El lugar que estamos buscando: Escucha sin abrir el texto. Identifica la situación y la intención principal.",
          "items": [
            {
              "q": "¿Cuál es la prioridad de quien llama?",
              "options": [
                "Tener la habitación más luminosa de la ciudad",
                "Poder estudiar y descansar"
              ],
              "answer": 1,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Para qué se propone una visita?",
              "options": [
                "Para conocer el espacio y negociar convivencia",
                "Para firmar sin preguntar"
              ],
              "answer": 0,
              "why": "Comprueba la información concreta del fragmento antes de elegir."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Vuelve a escuchar y anota el dato que cambia la decisión.",
        "exercise": {
          "id": "b1-08-audio-1",
          "type": "choice",
          "prompt": "El lugar que estamos buscando: Vuelve a escuchar y anota el dato que cambia la decisión.",
          "items": [
            {
              "q": "¿Qué gasto se paga aparte?",
              "options": [
                "La electricidad",
                "Internet"
              ],
              "answer": 0,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Qué habitación está disponible?",
              "options": [
                "La que está junto al salón",
                "La que da al patio"
              ],
              "answer": 1,
              "why": "Comprueba la información concreta del fragmento antes de elegir."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Escucha una tercera vez: relaciona la formulación con su función. Después puedes consultar la transcripción.",
        "exercise": {
          "id": "b1-08-audio-2",
          "type": "choice",
          "prompt": "El lugar que estamos buscando: Escucha una tercera vez: relaciona la formulación con su función. Después puedes consultar la transcripción.",
          "items": [
            {
              "q": "¿Qué diferencia «busco» y «conozco» en sus relativas?",
              "options": [
                "Pasado frente a futuro obligatorio",
                "Requisito no identificado frente a referente conocido"
              ],
              "answer": 1,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Por qué piden calcular el total?",
              "options": [
                "Para evitar decidir solo por el precio anunciado",
                "Para ocultar gastos a los compañeros"
              ],
              "answer": 0,
              "why": "Comprueba la información concreta del fragmento antes de elegir."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "El lugar que estamos buscando · otra perspectiva",
    "genre": "Artículo y experiencia de comunidad",
    "frame": "Texto original de SpanishCue. Lee para comprender la experiencia y la decisión; después vuelve a los detalles.",
    "text": [
      "Tres estudiantes buscan piso para el próximo curso y han preparado una lista que ocupa casi una página. Quieren un lugar que esté cerca del centro, que tenga habitaciones grandes y que no sea caro. Cuando empiezan a comparar anuncios, descubren que ninguna opción reúne todas las condiciones. La discusión no consiste solo en elegir un edificio; también necesitan decidir cómo quieren convivir.",
      "A Julia le importa disponer de una mesa donde pueda estudiar por la noche. Omar trabaja algunos días desde casa y necesita una conexión estable. A Teresa le preocupa el trayecto, porque sale temprano para sus prácticas. El piso que vieron el martes tiene buenas habitaciones, pero está lejos del transporte. El que visitaron el jueves es más pequeño y cuesta un poco más, aunque permite que cada uno llegue a sus actividades sin depender de los demás.",
      "No descartan cualquier piso por un detalle menor, pero tampoco aceptan cualquier condición. Hay bastantes anuncios incompletos y algunos precios son demasiado altos para su presupuesto. Preguntarán antes de pagar ninguna señal.",
      "En lugar de votar enseguida, separan las condiciones imprescindibles de las preferencias. Descubren que el patio, que al principio parecía fundamental, importa menos que el silencio y la comunicación con el propietario. También redactan tres normas sobre limpieza, visitas y gastos. Todavía no han firmado el contrato: quieren preguntar por la fianza y comprobar el estado de la instalación. Buscar un piso ideal les ha servido para reconocer que una convivencia posible necesita acuerdos más concretos que una fotografía bonita."
    ],
    "tasks": [
      {
        "id": "b1-08-read-evidence",
        "type": "choice",
        "prompt": "En la lectura «El lugar que estamos buscando», elige la respuesta respaldada por el texto.",
        "items": [
          {
            "q": "¿Por qué no votan inmediatamente?",
            "options": [
              "Deben distinguir necesidades y preferencias",
              "Ya han firmado dos contratos"
            ],
            "answer": 0,
            "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
          },
          {
            "q": "¿Qué pierde importancia al comparar?",
            "options": [
              "El silencio",
              "El patio"
            ],
            "answer": 1,
            "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
          }
        ]
      },
      {
        "id": "b1-08-read-mediation",
        "type": "open",
        "prompt": "Reformula para una persona que no ha leído «El lugar que estamos buscando».",
        "items": [
          {
            "prompt": "Explica en 50–70 palabras qué problema aparece en «El lugar que estamos buscando», qué cambia y qué dato no debe perder quien recibe tu resumen. Cita un detalle del texto.",
            "model": "Tres estudiantes buscan piso para el próximo curso y han preparado una lista que ocupa casi una página.",
            "checklist": [
              "Distingo información e interpretación.",
              "Adapto el resumen a alguien sin contexto."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Busca dos expresiones del texto y explica cómo ayudan a seguir la información.",
      "items": [
        {
          "quote": "Tres estudiantes buscan piso para el próximo curso y han preparado una lista que ocupa casi una página.",
          "note": "Localiza quién actúa y qué perspectiva temporal o comunicativa establece esta apertura."
        },
        {
          "quote": "Buscar un piso ideal les ha servido para reconocer que una convivencia posible necesita acuerdos más concretos que una fotografía bonita.",
          "note": "Explica qué aporta el cierre al propósito del texto; compáralo con la apertura."
        }
      ]
    }
  },
  "practice": {
    "exercises": [
      {
        "id": "b1-08-order",
        "type": "order",
        "prompt": "Reconstruye dos mensajes útiles para «El lugar que estamos buscando» y léelos con grupos de sentido.",
        "items": [
          {
            "words": [
              "Quien",
              "llegue",
              "primero",
              "recoge",
              "las",
              "llaves."
            ]
          },
          {
            "words": [
              "Este",
              "es",
              "el",
              "barrio",
              "donde",
              "trabajo."
            ]
          }
        ]
      },
      {
        "id": "b1-08-classify",
        "type": "classify",
        "prompt": "Clasifica estas formulaciones según su función en «El lugar que estamos buscando».",
        "categories": [
          "Referente identificado",
          "Característica buscada"
        ],
        "items": [
          {
            "text": "Conozco un piso que tiene patio.",
            "cat": 0
          },
          {
            "text": "La habitación que da al jardín está ocupada.",
            "cat": 0
          },
          {
            "text": "Busco una casa que tenga luz.",
            "cat": 1
          },
          {
            "text": "Necesito a alguien que respete los turnos.",
            "cat": 1
          }
        ]
      },
      {
        "id": "b1-08-draft",
        "type": "open",
        "prompt": "Ensaya partes de tu texto antes de producirlo completo.",
        "items": [
          {
            "prompt": "El lugar que estamos buscando: escribe una apertura de 35–45 palabras para la tarea «Redacta un anuncio de 150–180 palabras para buscar compañeros de piso: describe el lugar que tienes, la persona que buscas y tres normas negociables o imprescindibles.» sin copiar el modelo.",
            "model": "Buscamos una persona que quiera compartir nuestro piso a partir de noviembre.",
            "checklist": [
              "Presento destinatario y propósito.",
              "Incluyo un dato pertinente del caso."
            ]
          },
          {
            "prompt": "El lugar que estamos buscando: redacta un cierre de 30–40 palabras que permita al destinatario responder o actuar.",
            "model": "Podemos negociar los días, aunque es importante que todos participemos. Antes de decidir, proponemos una visita para conocer el espacio y responder preguntas. También mostraremos el contrato y las condiciones de la fianza para evitar malentendidos.",
            "checklist": [
              "El cierre corresponde a esta situación.",
              "La acción siguiente se entiende sin adivinar."
            ]
          }
        ]
      },
      {
        "id": "b1-08-retrieval",
        "type": "open",
        "prompt": "Recupera los recursos lingüísticos sin consultar la explicación. Para los casos con fuentes, usa los datos suministrados y comprueba después los criterios.",
        "items": [
          {
            "prompt": "En el contexto de «El lugar que estamos buscando», recupera la semana 7: Escribe a un amigo tras un malentendido: expresa alivio, preocupación y una molestia sin acusar; alterna infinitivo y que, explica qué relación deseas cuidar y propone hacer las paces.",
            "model": "Me alegra que hayas encontrado apoyo. Me preocupa que no tengas tiempo libre.",
            "checklist": [
              "Puedo reaccionar con me alegra que, me molesta que, me preocupa que + subjuntivo.",
              "Puedo usar me alegra verte y me alegra que vengas sin confundir quién experimenta la emoción con el sujeto gramatical.",
              "Puedo nombrar emociones con precisión: agobio, alivio, orgullo, decepción.",
              "Puedo reconocer y producir alegría, fastidio o sorpresa en la entonación.",
              "Puedo explicar cómo me siento ante una situación y por qué.",
              "Puedo escribir un correo personal que reacciona a noticias.",
              "Puedo hablar de amistad, pareja, conflictos y reconciliación.",
              "Puedo describir una relación, un conflicto y cómo se resolvió."
            ]
          },
          {
            "prompt": "Tras recuperar el caso anterior en «El lugar que estamos buscando», escribe 40–60 palabras para explicar qué elección lingüística fue más difícil y ofrece dos versiones que cambien la intención o el tiempo. Comprueba tus ejemplos con la teoría de la semana recuperada.",
            "model": "Antes presenté un hecho como seguro. Ahora lo reformulo como una duda: Buscamos un piso que tenga dos mesas.",
            "checklist": [
              "Comparo dos formulaciones concretas.",
              "Explico el cambio de intención o referencia."
            ]
          },
          {
            "prompt": "Aplicación diferida en «El lugar que estamos buscando»: Cuenta un malentendido entre una amiga tuya y un amigo suyo. Contrasta mi mensaje y el tuyo sin perder el referente y usa dos posesivos posnominales con concordancia.",
            "model": "Una amiga mía también tuvo ese malentendido. Tu mensaje fue breve; el mío explicaba los cambios.",
            "checklist": [
              "Puedo distinguir un amigo mío, mi amigo y el mío, aclarando de quién hablo.",
              "Explico cómo cambia el sentido si sustituyo una forma."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Redacta un anuncio de 150–180 palabras para buscar compañeros de piso: describe el lugar que tienes, la persona que buscas y tres normas negociables o imprescindibles.",
    "context": "Destinatario, propósito y datos deben mantenerse claros. El modelo muestra una posibilidad, no una respuesta que debas copiar.",
    "steps": [
      "Planifica destinatario, dos ideas centrales y un dato de apoyo de esta semana.",
      "Escribe una primera versión sin consultar el modelo.",
      "Compara después organización y lenguaje; cambia al menos una frase para mejorar claridad."
    ],
    "useLanguage": [
      "Buscamos un piso que tenga dos mesas.",
      "Conozco uno que tiene un patio pequeño.",
      "La que vive junto al parque es mi compañera.",
      "Quien llegue primero recoge las llaves.",
      "No conocemos ningún piso que reúna todo.",
      "Cualquier persona puede preguntar por los gastos."
    ],
    "model": [
      "Buscamos una persona que quiera compartir nuestro piso a partir de noviembre. Está cerca de una biblioteca y tiene una cocina donde cabemos los tres para cenar.",
      "Una de las personas trabaja algunos días desde casa y otra estudia por la tarde. Por eso intentamos mantener tranquilos los espacios comunes en esas horas. Las visitas son bienvenidas, siempre que avisemos y podamos acordar una organización que permita descansar.",
      "La habitación que queda libre es pequeña, pero recibe luz por la mañana. Nos gustaría encontrar a alguien que respete el descanso y que avise cuando vaya a recibir visitas. No buscamos una persona que tenga exactamente nuestros horarios; lo que necesitamos es poder hablar de los cambios. Los gastos de electricidad se reparten y la limpieza se organiza por turnos. Podemos negociar los días, aunque es importante que todos participemos. Antes de decidir, proponemos una visita para conocer el espacio y responder preguntas. También mostraremos el contrato y las condiciones de la fianza para evitar malentendidos."
    ],
    "checklist": [
      "Cumplo el propósito y el registro de la consigna.",
      "Organizo el texto en partes conectadas y doy razones o detalles.",
      "Reutilizo cuatro expresiones de vocabulario de la semana.",
      "Compruebo tiempos, referencias, concordancia y lo que está confirmado.",
      "Reviso una frase y puedo explicar por qué la cambié.",
      "Integro y compruebo este recurso: cuantificadores y negación en búsquedas."
    ],
    "words": [
      150,
      180
    ]
  },
  "speaking": {
    "intro": "Prepara ideas, no un guion completo. Puedes grabarte localmente; el curso no puntúa tu pronunciación ni sube tu audio.",
    "tasks": [
      {
        "title": "Intervención organizada",
        "prompt": "Negocia un piso con una persona que prioriza el precio y tú el transporte. Presenta requisitos durante dos minutos, pregunta cuáles son flexibles y responde con una propuesta común.",
        "prep": [
          "Anota una apertura, dos detalles y una conclusión.",
          "Elige una expresión para pedir o dar aclaración.",
          "Usa también: No conocemos ningún piso que reúna todo."
        ],
        "seconds": 120,
        "selfCheck": [
          "El oyente puede reconstruir mi idea.",
          "Doy razones o ejemplos y marco pausas útiles."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "En la situación «El lugar que estamos buscando», tu interlocutor no comparte tu primera interpretación. Pregunta qué ha entendido, responde a su objeción y reformula tu idea con un ejemplo distinto; confirma qué acordáis y qué queda pendiente.",
        "prep": [
          "Reserva una pregunta abierta.",
          "Piensa una alternativa que puedas aceptar."
        ],
        "seconds": 120,
        "selfCheck": [
          "Escucho antes de responder.",
          "Adapto mi respuesta a la información nueva."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva tu texto revisado y una intervención breve: tu profe continuará la situación con un cambio que no conoces.",
    "cards": [
      {
        "move": "Presenta",
        "task": "Negocia un piso con una persona que prioriza el precio y tú el transporte. Presenta requisitos durante dos minutos, pregunta cuáles son flexibles y responde con una propuesta común."
      },
      {
        "move": "Pregunta",
        "task": "Pide a tu profe un dato adicional sobre «El lugar que estamos buscando» que pueda cambiar tu propuesta; explica por qué lo necesitas.",
        "phrases": [
          "¿He entendido bien que…?",
          "¿Qué cambiaría si…?"
        ]
      },
      {
        "move": "Reformula",
        "task": "Resume la postura de tu profe sobre «El lugar que estamos buscando» para una tercera persona y comprueba si tu versión conserva las condiciones."
      }
    ],
    "bring": "Tu borrador y versión revisada, una grabación local si la hiciste y una pregunta sobre una elección lingüística."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "Tras trabajar ambas fuentes: ¿Qué pierde importancia al comparar? Relaciona tu respuesta con «El lugar que estamos buscando».",
        "options": [
          "El silencio",
          "El patio"
        ],
        "answer": 0,
        "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
      },
      {
        "type": "listen",
        "q": "Escucha el fragmento final de evaluación de «El lugar que estamos buscando»: ¿qué formulación se oye?",
        "options": [
          "La que vive junto al parque es mi compañera.",
          "Lo que me preocupa es el ruido nocturno."
        ],
        "answer": 1,
        "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia.",
        "audio": "Lo que me preocupa es el ruido nocturno.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "Revisión breve de «El lugar que estamos buscando». Necesito un alojamiento que ___ conexión estable.",
        "answers": [
          [
            "tenga"
          ]
        ]
      },
      {
        "type": "open",
        "prompt": "Reformulación de «El lugar que estamos buscando». Texto de partida: Necesito encontrar una sala. Debe tener una entrada amplia. Consigna: Une con busco una sala que sin afirmar que conoces una. Compara el sentido y la forma con el modelo; puede haber más de una respuesta válida.",
        "model": "Busco una sala que tenga una entrada amplia.",
        "checklist": [
          "Mantengo los datos y la intención del texto de partida.",
          "Uso la estructura pedida con concordancia y referencias coherentes.",
          "Acepto otro orden o una formulación equivalente si conserva el sentido; consulto la duda en clase."
        ]
      },
      {
        "type": "error",
        "sentence": "No conozco ningún piso que tiene todas esas condiciones.",
        "answers": [
          "No conozco ningún piso que tenga todas esas condiciones."
        ],
        "why": "El referente no identificado aparece en una relativa con subjuntivo."
      },
      {
        "type": "order",
        "words": [
          "Lo",
          "que",
          "me",
          "preocupa",
          "es",
          "el",
          "ruido",
          "nocturno."
        ]
      },
      {
        "type": "open",
        "prompt": "Evaluación escrita de «El lugar que estamos buscando»: responde en 50–70 palabras a una persona que ha entendido solo la mitad de tu propuesta. Conserva el dato decisivo y solicita confirmación.",
        "checklist": [
          "Reformulo en lugar de copiar.",
          "Mantengo la intención y los datos."
        ]
      },
      {
        "type": "open",
        "prompt": "Evaluación oral de «El lugar que estamos buscando»: durante un minuto explica qué cambiarías tras recibir una objeción y por qué; añade una pregunta para continuar.",
        "checklist": [
          "Justifico el cambio.",
          "Abro un turno real para el interlocutor."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Describir requisitos y negociar qué condiciones son imprescindibles.",
      "Puedo producir y revisar un texto conectado para esta situación.",
      "Puedo explicar mi propuesta, pedir aclaración y responder a una objeción."
    ],
    "review": [
      "Mañana recupera tres expresiones sin mirar y úsalas en otro contexto.",
      "Dentro de una semana vuelve a contar el caso con un dato cambiado y compara tu nueva respuesta.",
      "Revisa con tu profe los criterios de recuperación; un cuestionario no evalúa por sí solo tu nivel oral."
    ]
  }
};
