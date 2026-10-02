import type { Module } from "../../types";

/** Material original C2. Audio mediante síntesis; sin acreditación regional. */
export const c2w12: Module = {
  "id": "c2-12",
  "level": "c2",
  "week": 12,
  "kind": "core",
  "title": "Fuentes que no dicen lo mismo",
  "subtitle": "Síntesis de fuentes contradictorias para públicos distintos",
  "stop": {
    "place": "Medellín",
    "country": "Colombia"
  },
  "minutes": 135,
  "newObjectives": [
    "c2.disc.mediacion",
    "c2.voc.lexico-tecnico-divulgativo",
    "c2.pron.claridad-mediacion",
    "c2.wri.informe-mediacion",
    "c2.lis.fuentes-contradictorias"
  ],
  "reviewObjectives": [
    "c2.voc.casi-sinonimos",
    "c2.voc.refranes-intertextualidad",
    "c2.pron.matiz-lexico-voz",
    "c2.wri.precision-lexica",
    "c2.read.columna-literaria",
    "c2.disc.humor-juegos",
    "c2.voc.expresiones-idiomaticas",
    "c2.pron.ritmo-humor",
    "c2.read.humor-escrito",
    "c2.spk.anecdota-humor"
  ],
  "prerequisites": [
    "c2-11"
  ],
  "goal": {
    "canDo": "Puedo integrar fuentes parcialmente contradictorias y adaptarlas a decisiones de públicos distintos.",
    "steps": [
      "Lee las fuentes y distingue dato, inferencia y evaluación.",
      "Escucha el intercambio antes de consultar su transcripción.",
      "Aplica síntesis de fuentes contradictorias para públicos distintos a una decisión comunicativa concreta.",
      "Produce el dossier escrito, revisa una elección y defiéndela oralmente."
    ]
  },
  "theory": {
    "intro": "Los casos, documentos y voces de esta semana son originales y ficticios. La dificultad está en controlar relaciones de significado, no en acumular palabras raras.",
    "parts": [
      {
        "heading": "Síntesis de fuentes contradictorias para públicos distintos",
        "body": [
          "Sintetizar no equivale a promediar posturas. Dos fuentes pueden discrepar por medir fenómenos distintos, por usar periodos diferentes o por valorar de modo diferente el mismo dato. Según atribuye; presuntamente marca distancia pero no identifica por sí solo una fuente; se desprende que anuncia una inferencia del redactor. Mantén separadas evidencia, interpretación y propuesta, y selecciona el detalle que necesita cada destinatario para decidir.",
          "En este caso, Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes. La formulación elegida debe permitir al destinatario reconstruir la diferencia relevante y reconocer qué no se ha demostrado."
        ],
        "examples": [
          {
            "es": "El informe mide tiempos medios; la asociación describe casos extremos."
          },
          {
            "es": "Según el equipo técnico, disminuyó la espera registrada."
          },
          {
            "es": "De esos datos no se desprende que todas las personas esperen menos."
          }
        ],
        "mistakes": [
          {
            "wrong": "El informe propone de publicar la antigüedad de los casos.",
            "right": "El informe propone publicar la antigüedad de los casos.",
            "why": "Proponer seguido de infinitivo no exige de."
          }
        ]
      },
      {
        "heading": "Interpretar, atribuir y revisar en este caso",
        "body": [
          "Una síntesis equilibrada no necesita tratar como equivalentes evidencias de distinta naturaleza. Para defender esa lectura, identifica una formulación y el detalle que la sostiene. Prueba después una explicación rival y señala qué dato necesitarías para preferirla.",
          "La versión para un público nuevo puede cambiar léxico, orden y longitud, pero debe conservar esta condición: El promedio publicado excluye expedientes todavía abiertos. Un cambio de registro que la elimina cambia también el contenido."
        ],
        "examples": [
          {
            "es": "Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes.",
            "note": "Síntesis con alcance delimitado."
          },
          {
            "es": "Una de las fuentes necesariamente miente.",
            "note": "Lectura excesiva que el dossier no respalda."
          }
        ],
        "tip": "La mascota te invita a conservar una duda productiva: llévala a clase junto con una prueba, no con una impresión aislada."
      }
    ]
  },
  "grammar": {
    "intro": "Relaciona forma y efecto comunicativo en el expediente; la explicación importa tanto como la respuesta.",
    "exercises": [
      {
        "id": "c2-12-gramatica-alcance",
        "type": "choice",
        "prompt": "Selecciona la interpretación defendible de Fuentes que no dicen lo mismo.",
        "items": [
          {
            "q": "En el caso de Fuentes que no dicen lo mismo, ¿qué formulación preserva el alcance?",
            "options": [
              "Según el equipo técnico, disminuyó la espera registrada.",
              "Seis testimonios permiten calcular la frecuencia general del problema."
            ],
            "answer": 0,
            "why": "Sintetizar no equivale a promediar posturas. Dos fuentes pueden discrepar por medir fenómenos distintos, por usar periodos diferentes o por valorar de modo diferente el mismo dato. Según atribuye; presuntamente marca distancia pero no identifica por sí solo una fuente; se desprende que anuncia una inferencia del redactor. Mantén separadas evidencia, interpretación y propuesta, y selecciona el detalle que necesita cada destinatario para decidir."
          },
          {
            "q": "¿Qué cautela lingüística resulta necesaria al explicar Fuentes que no dicen lo mismo?",
            "options": [
              "Una síntesis equilibrada no necesita tratar como equivalentes evidencias de distinta naturaleza.",
              "Una de las fuentes necesariamente miente."
            ],
            "answer": 0,
            "why": "Relaciona forma, contexto y efecto; evita ampliar una conclusión más allá de su base."
          }
        ]
      },
      {
        "id": "c2-12-gramatica-forma",
        "type": "gap",
        "prompt": "Completa las relaciones gramaticales del caso Fuentes que no dicen lo mismo.",
        "items": [
          {
            "q": "El promedio excluye los expedientes aún ___.",
            "answers": [
              [
                "abiertos",
                "pendientes"
              ]
            ],
            "why": "Sintetizar no equivale a promediar posturas. Dos fuentes pueden discrepar por medir fenómenos distintos, por usar periodos diferentes o por valorar de modo diferente el mismo dato. Según atribuye; presuntamente marca distancia pero no identifica por sí solo una fuente; se desprende que anuncia una inferencia del redactor. Mantén separadas evidencia, interpretación y propuesta, y selecciona el detalle que necesita cada destinatario para decidir."
          },
          {
            "q": "De los seis casos no se desprende ___ todos esperen más.",
            "answers": [
              [
                "que"
              ]
            ],
            "why": "Sintetizar no equivale a promediar posturas. Dos fuentes pueden discrepar por medir fenómenos distintos, por usar periodos diferentes o por valorar de modo diferente el mismo dato. Según atribuye; presuntamente marca distancia pero no identifica por sí solo una fuente; se desprende que anuncia una inferencia del redactor. Mantén separadas evidencia, interpretación y propuesta, y selecciona el detalle que necesita cada destinatario para decidir."
          },
          {
            "q": "La mediadora distingue el dato ___ la propuesta.",
            "answers": [
              [
                "de"
              ]
            ],
            "why": "Sintetizar no equivale a promediar posturas. Dos fuentes pueden discrepar por medir fenómenos distintos, por usar periodos diferentes o por valorar de modo diferente el mismo dato. Según atribuye; presuntamente marca distancia pero no identifica por sí solo una fuente; se desprende que anuncia una inferencia del redactor. Mantén separadas evidencia, interpretación y propuesta, y selecciona el detalle que necesita cada destinatario para decidir."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Usa estas unidades para describir diferencias que el caso exige. La definición orienta el uso; contrástala con la frase completa.",
    "groups": [
      {
        "title": "Precisión para Fuentes que no dicen lo mismo",
        "items": [
          {
            "es": "compatibilizar",
            "note": "hacer coexistir elementos sin borrar sus diferencias"
          },
          {
            "es": "dato atípico",
            "note": "observación alejada del patrón habitual"
          },
          {
            "es": "promedio",
            "note": "medida agregada que puede ocultar dispersión"
          },
          {
            "es": "testimonio",
            "note": "relato situado de una experiencia"
          },
          {
            "es": "ponderar",
            "note": "valorar el peso relativo de varios elementos"
          },
          {
            "es": "trazabilidad",
            "note": "posibilidad de reconstruir el origen de una afirmación"
          },
          {
            "es": "síntesis crítica",
            "note": "integración que examina acuerdos y límites"
          },
          {
            "es": "destinatario",
            "note": "persona o grupo para quien se adapta el mensaje"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "c2-12-lexico",
        "type": "match",
        "prompt": "Relaciona cada unidad con la distinción que aporta al expediente de Fuentes que no dicen lo mismo.",
        "pairs": [
          {
            "left": "compatibilizar",
            "right": "hacer coexistir elementos sin borrar sus diferencias"
          },
          {
            "left": "dato atípico",
            "right": "observación alejada del patrón habitual"
          },
          {
            "left": "promedio",
            "right": "medida agregada que puede ocultar dispersión"
          },
          {
            "left": "testimonio",
            "right": "relato situado de una experiencia"
          },
          {
            "left": "ponderar",
            "right": "valorar el peso relativo de varios elementos"
          },
          {
            "left": "trazabilidad",
            "right": "posibilidad de reconstruir el origen de una afirmación"
          },
          {
            "left": "síntesis crítica",
            "right": "integración que examina acuerdos y límites"
          },
          {
            "left": "destinatario",
            "right": "persona o grupo para quien se adapta el mensaje"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Jerarquía al mediar entre fuentes",
    "explanation": [
      "Distingue con pausa el promedio de consultas cerradas y los casos abiertos. No aceleres justo en la excepción, porque ahí reside la diferencia que explica el desacuerdo.",
      "El audio utiliza síntesis disponible en el navegador: no certifica acento regional, ironía natural ni calidad de pronunciación. Escucha el contenido, ensaya contrastes y comprueba el efecto con una persona. El objetivo es inteligibilidad y control expresivo, no eliminar tu acento."
    ],
    "examples": [
      {
        "es": "Las consultas cerradas tardan menos; las abiertas no entran en el promedio."
      },
      {
        "es": "Todas las consultas tardan menos, incluidas las abiertas."
      }
    ],
    "perceive": {
      "id": "c2-12-percepcion",
      "type": "listen",
      "prompt": "Escucha el contraste antes de leer las opciones en «Fuentes que no dicen lo mismo».",
      "items": [
        {
          "q": "Escucha la primera formulación sobre Fuentes que no dicen lo mismo. ¿Qué contenido permite recuperar?",
          "options": [
            "Todas las consultas tardan menos, incluidas las abiertas.",
            "Las consultas cerradas tardan menos; las abiertas no entran en el promedio."
          ],
          "answer": 1,
          "why": "La respuesta depende de las palabras y de su agrupación; no atribuyas a la síntesis una intención o variedad verificada.",
          "audio": "Las consultas cerradas tardan menos; las abiertas no entran en el promedio.",
          "voice": "es-ES-f"
        },
        {
          "q": "Escucha ahora el contraste de Fuentes que no dicen lo mismo. ¿Qué formulación aparece?",
          "options": [
            "Todas las consultas tardan menos, incluidas las abiertas.",
            "Las consultas cerradas tardan menos; las abiertas no entran en el promedio."
          ],
          "answer": 0,
          "why": "Compara después tus dos lecturas con una persona: una pausa puede favorecer una lectura sin demostrarla.",
          "audio": "Todas las consultas tardan menos, incluidas las abiertas.",
          "voice": "es-ES-m"
        }
      ]
    },
    "produce": [
      {
        "text": "Las consultas cerradas tardan menos; las abiertas no entran en el promedio.",
        "tip": "Marca grupos fónicos y explica qué interpretación favoreces.",
        "voice": "es-ES-f"
      },
      {
        "text": "Todas las consultas tardan menos, incluidas las abiertas.",
        "tip": "Cambia el foco sin cambiar las palabras; pide una interpretación a tu interlocutor.",
        "voice": "es-ES-m"
      },
      {
        "text": "Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes.",
        "tip": "Lee a velocidad cómoda, conserva la reserva y compara tu grabación local con tu intención.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Mesa de trabajo: Fuentes que no dicen lo mismo",
    "context": "Dos participantes preparan una intervención sobre el caso. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    "speakers": [
      {
        "id": "a",
        "name": "Julia",
        "voice": "es-ES-f",
        "role": "Primera perspectiva"
      },
      {
        "id": "b",
        "name": "Óscar",
        "voice": "es-ES-m",
        "role": "Contraste y reformulación"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Me han pedido un resumen equilibrado, pero no quiero escribir que ambas partes tienen un poco de razón y dejarlo ahí. El promedio de consultas cerradas no mide la espera de expedientes abiertos. No son dos opiniones simétricas sobre el mismo dato. Primero hay que explicar la diferencia y luego valorar qué indicador falta."
      },
      {
        "speaker": "b",
        "text": "Y los seis testimonios no son una encuesta, aunque muestran un problema que existe. Yo evitaría decir que demuestran un empeoramiento general. Para la asociación, el informe debe reconocer la espera y proponer una forma de obtener información. Para la dirección, debe precisar qué se cuenta y qué queda fuera del cálculo actual."
      },
      {
        "speaker": "a",
        "text": "En la versión pública voy a usar una comparación con dos filas: una avanza deprisa y la otra no aparece en el reloj que se anuncia. Después aclararé que es una analogía, porque las solicitudes no forman literalmente dos colas separadas. Puede ayudar a entender la exclusión del indicador, pero no debe inventar cómo funciona el servicio."
      },
      {
        "speaker": "b",
        "text": "Me parece bien si el cierre no promete una fecha de resolución que todavía no existe. El aviso a los quince días puede comunicar el estado y el próximo paso. También tendremos que decir qué ocurrirá si ese paso cambia. Una mediación útil no elimina todas las incertidumbres: permite que las personas sepan cuáles son, de dónde vienen y qué pueden hacer mientras siguen abiertas. Esa es la diferencia entre tranquilizar con una frase y devolver capacidad de decisión. Conservar esa distinción nos permite evaluar la medida sin prometer un efecto automático."
      },
      {
        "speaker": "a",
        "text": "La mediana tampoco cuenta por sí sola toda la historia. Añadiremos tramos y expedientes abiertos, sin publicar detalles que identifiquen a las personas. Además, no todas las esperas son incumplimientos de un plazo anunciado. Necesitamos distinguir plazo incumplido, espera prolongada e incertidumbre. Las tres pueden causar problemas, pero no describen exactamente la misma relación con el servicio."
      },
      {
        "speaker": "b",
        "text": "Y debemos reconocer que esas categorías las propone nuestro informe. No estaban ordenadas así en las fuentes. La mediación puede aportar una estructura, siempre que explique su criterio y permita discutirlo. Para la asociación, esa distinción debe conducir a respuestas concretas, no a tres maneras técnicas de decir que siga esperando. Cada categoría necesita una acción, un responsable y una forma de seguimiento. Para el cierre, conservaré esta distinción: Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha el intercambio completo sin abrir la transcripción. Reconstruye el desacuerdo central.",
        "exercise": {
          "id": "c2-12-escucha-gist",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Fuentes que no dicen lo mismo",
          "items": [
            {
              "q": "¿Qué problema organiza la conversación de Fuentes que no dicen lo mismo?",
              "options": [
                "Una de las fuentes necesariamente miente.",
                "Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes."
              ],
              "answer": 1,
              "why": "Reconstruye el propósito común antes de buscar detalles."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Fuentes que no dicen lo mismo?",
              "options": [
                "Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes.",
                "Seis testimonios permiten calcular la frecuencia general del problema."
              ],
              "answer": 1,
              "why": "La primera opción amplía o deforma lo que permite el intercambio."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota afirmación, condición y fuente. No copies frases todavía.",
        "exercise": {
          "id": "c2-12-escucha-detail",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Fuentes que no dicen lo mismo",
          "items": [
            {
              "q": "¿Qué límite deben conservar los interlocutores de Fuentes que no dicen lo mismo?",
              "options": [
                "El promedio publicado excluye expedientes todavía abiertos.",
                "El promedio incluye todos los expedientes pendientes."
              ],
              "answer": 0,
              "why": "La conversación vuelve sobre el límite que evita una promesa o inferencia excesiva."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Fuentes que no dicen lo mismo?",
              "options": [
                "El promedio publicado excluye expedientes todavía abiertos.",
                "Seis testimonios permiten calcular la frecuencia general del problema."
              ],
              "answer": 1,
              "why": "La primera opción amplía o deforma lo que permite el intercambio."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Localiza una reformulación y explica qué inferencia repara. Consulta la transcripción solo después de responder.",
        "exercise": {
          "id": "c2-12-escucha-notice",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Fuentes que no dicen lo mismo",
          "items": [
            {
              "q": "¿Qué inferencia pragmática permite el diálogo de Fuentes que no dicen lo mismo?",
              "options": [
                "Una síntesis equilibrada no necesita tratar como equivalentes evidencias de distinta naturaleza.",
                "Seis testimonios permiten calcular la frecuencia general del problema."
              ],
              "answer": 0,
              "why": "La inferencia se apoya en una reformulación y su contexto; no es una lectura literal de una palabra."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Fuentes que no dicen lo mismo?",
              "options": [
                "Una síntesis equilibrada no necesita tratar como equivalentes evidencias de distinta naturaleza.",
                "Seis testimonios permiten calcular la frecuencia general del problema."
              ],
              "answer": 1,
              "why": "La primera opción amplía o deforma lo que permite el intercambio."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Fuentes que no dicen lo mismo · expediente de lectura",
    "genre": "Dossier original: texto principal y documento de contraste",
    "frame": "Situación ficticia para lectura crítica y mediación. Identifica qué voz afirma cada cosa antes de integrar las fuentes.",
    "text": [
      "El servicio de atención cultural anunció que el tiempo medio de respuesta había bajado de doce a ocho días. Una asociación publicó el mismo día una carta titulada «Esperamos más que nunca». Los comentarios se dividieron entre quienes acusaban al servicio de manipular y quienes acusaban a la asociación de ignorar los datos. La oposición parecía nítida porque nadie había preguntado todavía qué estaba midiendo cada documento. La cifra incluía todas las consultas cerradas; la carta describía solicitudes complejas aún abiertas.",
      "El equipo técnico explicó que las consultas sencillas se resolvían más deprisa gracias a una clasificación inicial. La mejora era real para esas consultas. También reconoció que el indicador excluía expedientes pendientes y no desglosaba complejidad. La asociación aportó seis casos con más de un mes de espera. Los testimonios no permitían estimar por sí solos la frecuencia del problema, pero mostraban un tipo de experiencia que el promedio publicado no representaba. Su valor no dependía de convertir seis casos en una muestra estadística.",
      "Una mediadora preparó dos versiones del balance. Para la dirección, distinguió tiempos por tipo de solicitud y propuso incluir la antigüedad de los expedientes abiertos. Para las personas usuarias, explicó qué información recibirían al registrar una consulta y cómo pedir una actualización. No ocultó la complejidad, pero la distribuyó de acuerdo con las decisiones que cada grupo debía tomar. La adaptación no consistía en dar menos verdad a un público y más a otro.",
      "La dificultad mayor apareció al redactar el titular. «El servicio mejora, aunque quedan retrasos» subordinaba las experiencias de espera a una narrativa de éxito. «Los retrasos desmienten la mejora» borraba las consultas que sí se resolvían antes. La mediadora eligió «Respuestas más rápidas en consultas sencillas; esperas sin medir en casos complejos». El resultado era menos elegante, pero hacía visible la diferencia que permitía comprender ambas fuentes sin obligarlas a decir lo mismo.",
      "Acta de seguimiento. La dirección aceptó publicar la mediana y la distribución por tramos, además del promedio, siempre que el volumen de casos permitiera hacerlo sin identificar personas. La asociación pidió un aviso automático a los quince días, pero el sistema no podía prometer una fecha de resolución para todos los expedientes. Se acordó informar del estado y del siguiente paso previsto. Ese compromiso reducía incertidumbre sin convertir una comunicación periódica en garantía de respuesta favorable. El informe final debía conservar también este límite. La siguiente reunión revisaría si el aviso reducía la incertidumbre, además de medir si cambiaban los tiempos efectivos. Eran resultados distintos y ambos importaban.",
      "Observación de una analista. Publicar la mediana mejoraría el cuadro, pero tampoco haría visibles automáticamente las esperas extremas. La dirección propuso acompañarla con tramos de duración y número de expedientes abiertos. La asociación pidió conocer casos concretos; la mediadora distinguió la necesidad de comprender patrones de la exposición innecesaria de personas. Podían describirse situaciones típicas, anonimizadas con cuidado, sin convertir cada testimonio en un expediente público. La transparencia no obliga a distribuir toda la información disponible del mismo modo.",
      "La discusión llevó a revisar el término retraso. Algunas solicitudes excedían un plazo anunciado; otras no tenían plazo definido y sufrían una espera que resultaba difícil de valorar. Llamarlas a todas incumplimientos habría supuesto una obligación idéntica que las fuentes no establecían. Llamarlas simples percepciones habría ignorado su coste real. El informe distinguió incumplimiento de plazo, espera prolongada e incertidumbre sobre el siguiente paso. Esa precisión permitió proponer respuestas diferentes. La síntesis no solo reunió información: produjo categorías de trabajo que podían ser discutidas por ambas partes. Su legitimidad dependía de explicar de dónde salían esas categorías y de no presentarlas como si hubieran aparecido intactas en los documentos originales."
    ],
    "tasks": [
      {
        "id": "c2-12-lectura",
        "type": "choice",
        "prompt": "Reconstruye la tesis y su límite en Fuentes que no dicen lo mismo.",
        "items": [
          {
            "q": "¿Qué tesis sostiene el dossier «Fuentes que no dicen lo mismo»?",
            "options": [
              "Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes.",
              "Una de las fuentes necesariamente miente."
            ],
            "answer": 0,
            "why": "La tesis integra el contraste entre las fuentes, no solo una frase aislada."
          },
          {
            "q": "¿Qué detalle limita la interpretación en «Fuentes que no dicen lo mismo»?",
            "options": [
              "El promedio publicado excluye expedientes todavía abiertos.",
              "El promedio incluye todos los expedientes pendientes."
            ],
            "answer": 0,
            "why": "El documento complementario delimita qué está confirmado."
          }
        ]
      },
      {
        "id": "c2-12-lectura-evidencia",
        "type": "open",
        "prompt": "Defiende una interpretación de Fuentes que no dicen lo mismo con pruebas y contraejemplos.",
        "items": [
          {
            "prompt": "Contrasta «Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes.» con «Una de las fuentes necesariamente miente.». Cita dos fragmentos breves, atribuye sus voces y explica qué detalle impide sostener la segunda lectura.",
            "model": "Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes. El promedio publicado excluye expedientes todavía abiertos.",
            "checklist": [
              "Distingo cita e interpretación.",
              "Incluyo una lectura rival y un límite."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo las formas del expediente distribuyen certeza, responsabilidad y voz.",
      "items": [
        {
          "quote": "El servicio de atención cultural anunció que el tiempo medio de respuesta había bajado de doce a ocho días.",
          "note": "Examina el encuadre inicial y qué información necesitarás para revisarlo."
        },
        {
          "quote": "Acta de seguimiento.",
          "note": "El documento final introduce otra perspectiva; identifica qué interpretación limita y qué deja abierto."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina orden, clasificación, producción y recuperación espaciada. Las respuestas abiertas se contrastan con criterios y con tu docente.",
    "exercises": [
      {
        "id": "c2-12-orden",
        "type": "order",
        "prompt": "Reconstruye dos relaciones centrales del caso Fuentes que no dicen lo mismo.",
        "items": [
          {
            "words": [
              "Los",
              "testimonios",
              "muestran",
              "una",
              "experiencia",
              "omitida."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          },
          {
            "words": [
              "El",
              "aviso",
              "no",
              "garantiza",
              "una",
              "resolución",
              "favorable."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          }
        ]
      },
      {
        "id": "c2-12-estatuto",
        "type": "classify",
        "prompt": "Clasifica el estatuto de estas formulaciones en «Fuentes que no dicen lo mismo».",
        "categories": [
          "Conclusión respaldada o delimitada",
          "Generalización no autorizada"
        ],
        "items": [
          {
            "text": "Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes.",
            "cat": 0,
            "why": "Resume el razonamiento con sus límites."
          },
          {
            "text": "Una de las fuentes necesariamente miente.",
            "cat": 1,
            "why": "Amplía o invierte el alcance de las fuentes."
          },
          {
            "text": "El promedio publicado excluye expedientes todavía abiertos.",
            "cat": 0,
            "why": "Conserva un detalle explícito del expediente."
          },
          {
            "text": "El promedio incluye todos los expedientes pendientes.",
            "cat": 1,
            "why": "Contradice la condición documentada."
          }
        ]
      },
      {
        "id": "c2-12-microescritura",
        "type": "open",
        "prompt": "Produce dos versiones breves antes del dossier de Fuentes que no dicen lo mismo.",
        "items": [
          {
            "prompt": "Redacta una apertura de 80–100 palabras para el destinatario de «Fuentes que no dicen lo mismo». Conserva la tesis y una reserva.",
            "model": "Las consultas cerradas se responden antes, mientras que varias solicitudes complejas siguen abiertas durante más de un mes. Ambas afirmaciones pueden ser ciertas porque el promedio publicado excluye expedientes pendientes. Los seis testimonios muestran experiencias relevantes, aunque no permiten estimar su frecuencia. La dirección necesita indicadores desagregados y las personas usuarias necesitan saber el estado y el próximo paso de su caso. Proponemos un aviso periódico que no prometa una resolución favorable ni una fecha inexistente. El equilibrio del informe consiste en conservar diferencias entre fuentes, no en repartirles la misma autoridad sobre cualquier pregunta.",
            "checklist": [
              "Identifico quién necesita decidir y con qué información.",
              "Separo afirmación, atribución e inferencia."
            ]
          },
          {
            "prompt": "Reformula para una persona ajena al debate de «Fuentes que no dicen lo mismo» la condición que más fácilmente se perdería al resumir. Explica el coste de omitirla.",
            "model": "El promedio publicado excluye expedientes todavía abiertos. Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes.",
            "checklist": [
              "No convierto la condición en un dato accesorio.",
              "Mantengo el alcance aunque simplifique el léxico."
            ]
          }
        ]
      },
      {
        "id": "c2-12-recuperacion",
        "type": "open",
        "prompt": "Recupera recursos con materiales suministrados de semanas anteriores. No busques rasgos ausentes en el dossier actual. Contrasta después qué recurso sería pertinente transferir al nuevo caso.",
        "items": [
          {
            "prompt": "Recuperación c2.voc.casi-sinonimos. Recupera la semana 8, «La palabra que inclina la balanza». Unidades disponibles: perseverante (persistente con valoración favorable); obstinado (persistente pese a razones para cambiar); austero (sobrio en recursos o adornos); precario (insuficiente o inestable); admitir (reconocer algo que puede resultar incómodo); sostener (defender una afirmación); conceder (aceptar una premisa de manera delimitada); cundir (extenderse o producir rendimiento según el contexto). Pasaje: El perfil del restaurador empezó con un adjetivo: obstinado. Durante quince años había defendido que el mural del vestíbulo conservaba una capa original bajo tres repintes. El artículo narraba sus intentos fallidos, sus cartas y la paciencia del equipo que trabajó con él. Al final, cuando una prueba confirmó parte de su hipótesis, el mismo comportamiento recibió otro nombre: perseverancia. El hallazgo parecía haber cambiado retrospectivamente el valor moral de los años anteriores.\n\nRecupera «Casi sinónimos y connotación»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Fuentes que no dicen lo mismo»: «Según el equipo técnico, disminuyó la espera registrada.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "El hallazgo confirma restos originales en una franja del mural. Es concluyente respecto a esa presencia, no respecto a la conveniencia de restaurar toda la obra. La perseverancia del restaurador merece describirse mediante sus decisiones ante pruebas contrarias, no deducirse retrospectivamente del éxito. La dirección sostuvo que faltaba financiación; escribir admitió habría introducido una resistencia que las actas no documentan. El refrán sobre el pigmento puede defender el tiempo necesario del oficio, siempre que no absuelva años de demora evitable. La precisión no apaga el entusiasmo: le asigna un objeto que puede sostener. En este contraste, «perseverante» nombra persistente con valoración favorable; «obstinado», persistente pese a razones para cambiar. La elección debe conservar esa diferencia. En el nuevo contraste, «Según el equipo técnico, disminuyó la espera registrada.» debe interpretarse dentro de esta cuestión: Síntesis de fuentes contradictorias para públicos distintos. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.refranes-intertextualidad. Recupera la semana 8, «La palabra que inclina la balanza». Unidades disponibles: perseverante (persistente con valoración favorable); obstinado (persistente pese a razones para cambiar); austero (sobrio en recursos o adornos); precario (insuficiente o inestable); admitir (reconocer algo que puede resultar incómodo); sostener (defender una afirmación); conceder (aceptar una premisa de manera delimitada); cundir (extenderse o producir rendimiento según el contexto). Pasaje: El perfil del restaurador empezó con un adjetivo: obstinado. Durante quince años había defendido que el mural del vestíbulo conservaba una capa original bajo tres repintes. El artículo narraba sus intentos fallidos, sus cartas y la paciencia del equipo que trabajó con él. Al final, cuando una prueba confirmó parte de su hipótesis, el mismo comportamiento recibió otro nombre: perseverancia. El hallazgo parecía haber cambiado retrospectivamente el valor moral de los años anteriores.\n\nRecupera «Refranes, citas e intertextualidad»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Fuentes que no dicen lo mismo»: «Según el equipo técnico, disminuyó la espera registrada.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "El hallazgo confirma restos originales en una franja del mural. Es concluyente respecto a esa presencia, no respecto a la conveniencia de restaurar toda la obra. La perseverancia del restaurador merece describirse mediante sus decisiones ante pruebas contrarias, no deducirse retrospectivamente del éxito. La dirección sostuvo que faltaba financiación; escribir admitió habría introducido una resistencia que las actas no documentan. El refrán sobre el pigmento puede defender el tiempo necesario del oficio, siempre que no absuelva años de demora evitable. La precisión no apaga el entusiasmo: le asigna un objeto que puede sostener. En este contraste, «perseverante» nombra persistente con valoración favorable; «obstinado», persistente pese a razones para cambiar. La elección debe conservar esa diferencia. En el nuevo contraste, «Según el equipo técnico, disminuyó la espera registrada.» debe interpretarse dentro de esta cuestión: Síntesis de fuentes contradictorias para públicos distintos. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.matiz-lexico-voz. Recupera la semana 8, «La palabra que inclina la balanza». Textos para ensayo oral: «El resultado es concluyente sobre esa franja.» / «El resultado parece prometedor para nuevas pruebas.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Matiz léxico y voz» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Fuentes que no dicen lo mismo»: «Según el equipo técnico, disminuyó la espera registrada.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Resalta sobre esa franja al decir concluyente. Contrasta el adjetivo aislado y el adjetivo delimitado; una voz enfática no vuelve más amplia la evidencia disponible. Un ensayo defendible conserva esta distinción del caso: La precisión consiste en controlar las inferencias de la elección léxica. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Según el equipo técnico, disminuyó la espera registrada.» debe interpretarse dentro de esta cuestión: Síntesis de fuentes contradictorias para públicos distintos. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.wri.precision-lexica. Recupera la semana 8, «La palabra que inclina la balanza». Modelo parcial que puedes transformar: El hallazgo confirma restos originales en una franja del mural. Es concluyente respecto a esa presencia, no respecto a la conveniencia de restaurar toda la obra. La perseverancia del restaurador merece describirse mediante sus decisiones ante pruebas contrarias, no deducirse retrospectivamente del éxito. La dirección sostuvo que faltaba financiación; escribir admitió habría introducido una resistencia que las actas no documentan. El refrán sobre el pigmento puede defender el tiempo necesario del oficio, siempre que no absuelva años de demora evitable. La precisión no apaga el entusiasmo: le asigna un objeto que puede sostener.\n\nRecupera «Precisión léxica» mediante una nueva versión de 120–160 palabras de este fragmento para otro destinatario. Mantén la reserva principal, cambia el orden de la información y justifica dos decisiones. Si el objetivo exige un texto completo, retoma además tu entrega original de esa semana y revisa su conjunto. Contraste nuevo suministrado de «Fuentes que no dicen lo mismo»: «Según el equipo técnico, disminuyó la espera registrada.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "El hallazgo confirma restos originales en una franja del mural. Es concluyente respecto a esa presencia, no respecto a la conveniencia de restaurar toda la obra. La perseverancia del restaurador merece describirse mediante sus decisiones ante pruebas contrarias, no deducirse retrospectivamente del éxito. La dirección sostuvo que faltaba financiación; escribir admitió habría introducido una resistencia que las actas no documentan. El refrán sobre el pigmento puede defender el tiempo necesario del oficio, siempre que no absuelva años de demora evitable. La precisión no apaga el entusiasmo: le asigna un objeto que puede sostener. Para una persona ajena al expediente, la información decisiva que debe seguir visible es: La precisión consiste en controlar las inferencias de la elección léxica. En el nuevo contraste, «Según el equipo técnico, disminuyó la espera registrada.» debe interpretarse dentro de esta cuestión: Síntesis de fuentes contradictorias para públicos distintos. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.read.columna-literaria. Recupera la semana 8, «La palabra que inclina la balanza». Pasajes que debes contrastar: El perfil del restaurador empezó con un adjetivo: obstinado. Durante quince años había defendido que el mural del vestíbulo conservaba una capa original bajo tres repintes. El artículo narraba sus intentos fallidos, sus cartas y la paciencia del equipo que trabajó con él. Al final, cuando una prueba confirmó parte de su hipótesis, el mismo comportamiento recibió otro nombre: perseverancia. El hallazgo parecía haber cambiado retrospectivamente el valor moral de los años anteriores.\n\nLa columnista decidió conservar la palabra obstinación en una cita atribuida al propio restaurador y retirarla de la voz narrativa. El cambio no declaraba falsa la valoración; cambiaba quién asumía su responsabilidad. Después revisó prometedor y concluyente en el cierre. La primera palabra proyectaba una posibilidad; la segunda cerraba una cuestión delimitada. Podían coexistir si se referían a objetos distintos: conclusión sobre la presencia de pigmento y promesa de nuevas preguntas de conservación. El ejercicio léxico culmina así en una decisión de arquitectura textual. No basta escoger la palabra exacta en una oración aislada; hay que mantener estable aquello sobre lo que se predica y evitar que el lector traslade una certeza local a una conclusión general.\n\nRelee estos pasajes y recupera «Leer una columna literaria». Formula una interpretación, un detalle que la apoye y una lectura rival. Señala qué dato del expediente completo necesitarías para reforzar o limitar tu conclusión. Contraste nuevo suministrado de «Fuentes que no dicen lo mismo»: «Según el equipo técnico, disminuyó la espera registrada.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "El hallazgo confirma restos originales en una franja del mural. Es concluyente respecto a esa presencia, no respecto a la conveniencia de restaurar toda la obra. La perseverancia del restaurador merece describirse mediante sus decisiones ante pruebas contrarias, no deducirse retrospectivamente del éxito. La dirección sostuvo que faltaba financiación; escribir admitió habría introducido una resistencia que las actas no documentan. El refrán sobre el pigmento puede defender el tiempo necesario del oficio, siempre que no absuelva años de demora evitable. La precisión no apaga el entusiasmo: le asigna un objeto que puede sostener. En el nuevo contraste, «Según el equipo técnico, disminuyó la espera registrada.» debe interpretarse dentro de esta cuestión: Síntesis de fuentes contradictorias para públicos distintos. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.disc.humor-juegos. Microdiálogo original: «Di amante», indicó la directora a la actriz. «¿Diamante?», respondió ella, mirando al joyero que esperaba junto al escenario. Contraste del museo: «El presupuesto está en el aire», seguido de una mirada al techo abierto.\n\nDistingue resegmentación sonora y literalización de una locución. Explica qué información prepara cada giro y adapta uno para una persona que desconoce la expresión, sin afirmar que la síntesis garantiza el efecto humorístico. Contraste nuevo suministrado de «Fuentes que no dicen lo mismo»: «Según el equipo técnico, disminuyó la espera registrada.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Di amante/diamante aproxima dos segmentaciones mediante enlace vocálico; presupuesto en el aire activa una locución y después una lectura espacial. El joyero prepara la segunda interpretación del primer juego; el techo prepara la imagen del segundo. Una adaptación puede explicar antes que en el aire significa pendiente, aceptando que así cambia la sorpresa. En el nuevo contraste, «Según el equipo técnico, disminuyó la espera registrada.» debe interpretarse dentro de esta cuestión: Síntesis de fuentes contradictorias para públicos distintos. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.expresiones-idiomaticas. Recupera la semana 11, «La risa y su destinatario». Unidades disponibles: remate (giro final que reorganiza lo anterior); doble sentido (activación de dos interpretaciones); calambur (resegmentación sonora que cambia el sentido); anticlímax (descenso inesperado de intensidad); tirar la casa por la ventana (gastar de forma extraordinaria); quedarse de piedra (sorprenderse mucho); tomar el pelo (burlarse mediante engaño ligero); dar en el clavo (acertar en el punto decisivo). Pasaje: El museo del oficio anunció una exposición titulada «Manos a la obra». La primera sala contenía fotografías de manos; la segunda, una explicación de por qué la obra no había terminado. La guía aseguró que la coherencia conceptual era impecable. El grupo rio, pero no por unanimidad. Un albañil jubilado preguntó si la broma era sobre el museo, sobre quienes trabajaban allí o sobre quienes habían dejado de cobrar durante la reforma. La pregunta parecía arruinar el chiste; en realidad, obligaba a precisar su blanco.\n\nRecupera «Expresiones idiomáticas con matiz»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Fuentes que no dicen lo mismo»: «Según el equipo técnico, disminuyó la espera registrada.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La guía anunció que el presupuesto estaba en el aire. Un visitante levantó la cabeza hacia el techo abierto y asintió con una seriedad casi profesional. No había dejado de entender la locución: acababa de entenderla demasiado bien. La escena permite criticar la distancia entre discurso y obra sin convertir al visitante en torpe. El remate pierde fuerza si se explica antes, pero tampoco merece conservarse cuando impide responder a una queja. Si el grupo necesita una devolución, la versión literal tiene prioridad: la visita no ofreció las condiciones anunciadas y requiere una solución concreta. En este contraste, «remate» nombra giro final que reorganiza lo anterior; «doble sentido», activación de dos interpretaciones. La elección debe conservar esa diferencia. En el nuevo contraste, «Según el equipo técnico, disminuyó la espera registrada.» debe interpretarse dentro de esta cuestión: Síntesis de fuentes contradictorias para públicos distintos. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.ritmo-humor. Recupera la semana 11, «La risa y su destinatario». Textos para ensayo oral: «El presupuesto está en el aire; mire el techo.» / «El presupuesto está pendiente; falta aprobarlo.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Ritmo del humor» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Fuentes que no dicen lo mismo»: «Según el equipo técnico, disminuyó la espera registrada.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Prueba una pausa antes y después del remate. Compara si anticipas demasiado la broma. La síntesis permite oír las palabras; la eficacia humorística se contrasta con oyentes reales, sin evaluación automática. Un ensayo defendible conserva esta distinción del caso: El mecanismo humorístico cambia de efecto según quién controla el doble sentido. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Según el equipo técnico, disminuyó la espera registrada.» debe interpretarse dentro de esta cuestión: Síntesis de fuentes contradictorias para públicos distintos. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.read.humor-escrito. Recupera la semana 11, «La risa y su destinatario». Pasajes que debes contrastar: El museo del oficio anunció una exposición titulada «Manos a la obra». La primera sala contenía fotografías de manos; la segunda, una explicación de por qué la obra no había terminado. La guía aseguró que la coherencia conceptual era impecable. El grupo rio, pero no por unanimidad. Un albañil jubilado preguntó si la broma era sobre el museo, sobre quienes trabajaban allí o sobre quienes habían dejado de cobrar durante la reforma. La pregunta parecía arruinar el chiste; en realidad, obligaba a precisar su blanco.\n\nEl taller comparó además dos blancos posibles. Si el personaje que mira el techo es una autoridad que acaba de defender la obra, el gesto puede parecer una toma de conciencia involuntaria. Si es un visitante que replica, puede funcionar como crítica deliberada. Las mismas palabras organizan relaciones de poder distintas. Por eso la edición del humor no termina al comprobar que existe un doble sentido. Debe preguntarse quién sabe qué, quién puede responder y qué coste tiene la broma para cada participante. El remate no queda prohibido por tener consecuencias, pero su autor necesita poder explicarlas. Cuando la explicación revela que la risa depende de humillar a alguien que no puede contestar, aparece una decisión ética y retórica que ninguna regla de ritmo puede resolver por sí sola.\n\nRelee estos pasajes y recupera «Leer humor escrito». Formula una interpretación, un detalle que la apoye y una lectura rival. Señala qué dato del expediente completo necesitarías para reforzar o limitar tu conclusión. Contraste nuevo suministrado de «Fuentes que no dicen lo mismo»: «Según el equipo técnico, disminuyó la espera registrada.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La guía anunció que el presupuesto estaba en el aire. Un visitante levantó la cabeza hacia el techo abierto y asintió con una seriedad casi profesional. No había dejado de entender la locución: acababa de entenderla demasiado bien. La escena permite criticar la distancia entre discurso y obra sin convertir al visitante en torpe. El remate pierde fuerza si se explica antes, pero tampoco merece conservarse cuando impide responder a una queja. Si el grupo necesita una devolución, la versión literal tiene prioridad: la visita no ofreció las condiciones anunciadas y requiere una solución concreta. En el nuevo contraste, «Según el equipo técnico, disminuyó la espera registrada.» debe interpretarse dentro de esta cuestión: Síntesis de fuentes contradictorias para públicos distintos. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.spk.anecdota-humor. Recupera la semana 11, «La risa y su destinatario». Situación para retomar: Cuenta la anécdota dos veces con diferente distribución de pausas. Explica el mecanismo a una persona que no conoce la locución y abandona el humor si plantea una queja concreta. Objeción suministrada: La broma funciona igual ante cualquier grupo.\n\nRecupera «Anécdota con humor». Haz una intervención de dos minutos con tesis y reserva; responde durante un minuto a la objeción. Pide una reformulación de tu idea al interlocutor antes de evaluar si fuiste claro. Contraste nuevo suministrado de «Fuentes que no dicen lo mismo»: «Según el equipo técnico, disminuyó la espera registrada.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La guía anunció que el presupuesto estaba en el aire. Un visitante levantó la cabeza hacia el techo abierto y asintió con una seriedad casi profesional. No había dejado de entender la locución: acababa de entenderla demasiado bien. La escena permite criticar la distancia entre discurso y obra sin convertir al visitante en torpe. El remate pierde fuerza si se explica antes, pero tampoco merece conservarse cuando impide responder a una queja. Si el grupo necesita una devolución, la versión literal tiene prioridad: la visita no ofreció las condiciones anunciadas y requiere una solución concreta. En el nuevo contraste, «Según el equipo técnico, disminuyó la espera registrada.» debe interpretarse dentro de esta cuestión: Síntesis de fuentes contradictorias para públicos distintos. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe un dossier de mediación de 550–650 palabras con una nota técnica para dirección y una explicación pública. Atribuye cada cifra y testimonio, evita falsas equivalencias y formula un compromiso que no prometa resultados imposibles.",
    "context": "Entrega un texto independiente y conserva una segunda versión con cambios comentados. El modelo muestra una apertura posible; no sustituye el dossier completo.",
    "steps": [
      "Traza un mapa de fuentes: afirmación, prueba, límite y destinatario.",
      "Decide el orden según la acción que necesita realizar tu lector; reserva espacio para una objeción fuerte.",
      "Redacta sin copiar el modelo. Integra al menos dos fuentes y atribuye sus diferencias.",
      "Revisa el alcance de tres formulaciones, lee un párrafo en voz alta y explica dos cambios de estilo."
    ],
    "useLanguage": [
      "El informe mide tiempos medios; la asociación describe casos extremos.",
      "Según el equipo técnico, disminuyó la espera registrada.",
      "De esos datos no se desprende que todas las personas esperen menos.",
      "compatibilizar",
      "dato atípico",
      "promedio"
    ],
    "model": [
      "Modelo parcial de apertura (no es una entrega completa): Las consultas cerradas se responden antes, mientras que varias solicitudes complejas siguen abiertas durante más de un mes. Ambas afirmaciones pueden ser ciertas porque el promedio publicado excluye expedientes pendientes. Los seis testimonios muestran experiencias relevantes, aunque no permiten estimar su frecuencia. La dirección necesita indicadores desagregados y las personas usuarias necesitan saber el estado y el próximo paso de su caso. Proponemos un aviso periódico que no prometa una resolución favorable ni una fecha inexistente. El equilibrio del informe consiste en conservar diferencias entre fuentes, no en repartirles la misma autoridad sobre cualquier pregunta."
    ],
    "checklist": [
      "La tesis tiene alcance preciso y pruebas identificables.",
      "No convierto una propuesta en decisión ni una inferencia en dato.",
      "El registro responde al destinatario y no borra condiciones.",
      "La cohesión conserva referentes y voces sin repeticiones inútiles.",
      "La revisión explica qué cambia para quien lee."
    ],
    "words": [
      550,
      650
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no un guion leído. La grabación, si la usas, permanece local; el navegador no califica pronunciación ni calidad oral.",
    "tasks": [
      {
        "title": "Exposición situada",
        "prompt": "Explica la discrepancia a una asociación y después al equipo técnico. Negocia un titular compartido y responde a quien exige elegir cuál de las dos fuentes miente.",
        "prep": [
          "Anota tesis, dos pruebas, una objeción y una reserva.",
          "Marca dos focos prosódicos y un punto donde cambiarás de registro."
        ],
        "seconds": 240,
        "model": "Las consultas cerradas se responden antes, mientras que varias solicitudes complejas siguen abiertas durante más de un mes. Ambas afirmaciones pueden ser ciertas porque el promedio publicado excluye expedientes pendientes. Los seis testimonios muestran experiencias relevantes, aunque no permiten estimar su frecuencia. La dirección necesita indicadores desagregados y las personas usuarias necesitan saber el estado y el próximo paso de su caso. Proponemos un aviso periódico que no prometa una resolución favorable ni una fecha inexistente. El equilibrio del informe consiste en conservar diferencias entre fuentes, no en repartirles la misma autoridad sobre cualquier pregunta.",
        "selfCheck": [
          "La condición principal se oye con claridad.",
          "Distingo mi interpretación de las voces citadas.",
          "Puedo reparar una frase sin abandonar el argumento."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "Tu interlocutor sostiene: «Una de las fuentes necesariamente miente.». Responde sin caricaturizarlo, formula dos preguntas de seguimiento y pide que reformule tu condición principal. Después resume para una persona que no conoce el expediente de Fuentes que no dicen lo mismo.",
        "prep": [
          "Prepara una concesión real y una corrección de alcance.",
          "Anticipa qué término deberás explicar sin jerga."
        ],
        "seconds": 240,
        "model": "Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes. El promedio publicado excluye expedientes todavía abiertos.",
        "selfCheck": [
          "La respuesta atiende la preocupación, no solo corrige la forma.",
          "La versión breve conserva el límite decisivo.",
          "Adapto el ritmo después de la interrupción."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "La mascota te espera con una tarjeta de contraste: lleva tu dossier y una decisión lingüística que quieras poner a prueba con tu docente.",
    "cards": [
      {
        "move": "Defiende",
        "task": "Presenta tu decisión más discutible sobre Fuentes que no dicen lo mismo y pide un contraejemplo que la ponga a prueba.",
        "phrases": [
          "Mi lectura se apoya en…",
          "Cambiaría de interpretación si…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica el límite «El promedio publicado excluye expedientes todavía abiertos.» a otro público sin rebajar su importancia.",
        "phrases": [
          "En otros términos…",
          "Esta versión conserva…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Responde a la objeción «Seis testimonios permiten calcular la frecuencia general del problema.» y acuerda una formulación que ambos puedan defender.",
        "phrases": [
          "Reconozco ese punto; mi reserva es…",
          "Podemos dejar constancia de…"
        ]
      }
    ],
    "bring": "El dossier, una versión revisada, notas de escucha y una grabación local opcional; no se necesita subir audio."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "Balance de Fuentes que no dicen lo mismo: ¿qué conclusión conserva el alcance?",
        "options": [
          "Una de las fuentes necesariamente miente.",
          "Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes."
        ],
        "answer": 1,
        "why": "Relaciona el texto principal con el documento complementario."
      },
      {
        "type": "choice",
        "q": "En una revisión final de Fuentes que no dicen lo mismo, ¿qué afirmación debe rechazarse?",
        "options": [
          "El promedio incluye todos los expedientes pendientes.",
          "El promedio publicado excluye expedientes todavía abiertos."
        ],
        "answer": 0,
        "why": "La primera opción contradice la condición explícita."
      },
      {
        "type": "listen",
        "q": "Escucha esta síntesis de Fuentes que no dicen lo mismo. ¿Qué interpretación mantiene?",
        "options": [
          "Una síntesis equilibrada no necesita tratar como equivalentes evidencias de distinta naturaleza.",
          "Seis testimonios permiten calcular la frecuencia general del problema."
        ],
        "answer": 0,
        "why": "La relación expresada limita una generalización.",
        "audio": "Una síntesis equilibrada no necesita tratar como equivalentes evidencias de distinta naturaleza.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "En «Fuentes que no dicen lo mismo», ¿qué unidad expresa «hacer coexistir elementos sin borrar sus diferencias»? ___ .",
        "answers": [
          [
            "compatibilizar"
          ]
        ],
        "hint": "hacer coexistir elementos sin borrar sus diferencias",
        "why": "Recupera la unidad a partir de su función, no de una traducción."
      },
      {
        "type": "gap",
        "q": "Para nombrar «observación alejada del patrón habitual» en este expediente usamos ___ .",
        "answers": [
          [
            "dato atípico"
          ]
        ],
        "why": "La distinción léxica debe conservarse al mediar."
      },
      {
        "type": "error",
        "sentence": "El informe propone de publicar la antigüedad de los casos.",
        "answers": [
          "El informe propone publicar la antigüedad de los casos."
        ],
        "why": "Proponer seguido de infinitivo no exige de."
      },
      {
        "type": "transform",
        "source": "Las consultas cerradas tardan menos. No sabemos cuánto tardan las que siguen abiertas.",
        "instruction": "Une con punto y coma y «en cambio» en la segunda proposición.",
        "answers": [
          "Las consultas cerradas tardan menos; en cambio, no sabemos cuánto tardan las que siguen abiertas."
        ],
        "why": "Conservar dos poblaciones: conserva la relación solicitada y compara qué se hace explícito."
      },
      {
        "type": "open",
        "prompt": "Cierre de «Fuentes que no dicen lo mismo»: escribe 90–120 palabras para una audiencia nueva. Incluye tesis, condición y una pregunta pendiente; justifica una elección de registro.",
        "model": "Las consultas cerradas se responden antes, mientras que varias solicitudes complejas siguen abiertas durante más de un mes. Ambas afirmaciones pueden ser ciertas porque el promedio publicado excluye expedientes pendientes. Los seis testimonios muestran experiencias relevantes, aunque no permiten estimar su frecuencia. La dirección necesita indicadores desagregados y las personas usuarias necesitan saber el estado y el próximo paso de su caso. Proponemos un aviso periódico que no prometa una resolución favorable ni una fecha inexistente. El equilibrio del informe consiste en conservar diferencias entre fuentes, no en repartirles la misma autoridad sobre cualquier pregunta.",
        "checklist": [
          "Conservo la reserva decisiva.",
          "Atribuyo una fuente y delimito mi inferencia.",
          "El destinatario puede identificar el siguiente paso."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Interpreto síntesis de fuentes contradictorias para públicos distintos en fuentes originales.",
      "Puedo explicar por qué «Una de las fuentes necesariamente miente.» excede la evidencia.",
      "Defiendo y reviso un dossier escrito y oral con destinatario concreto."
    ],
    "review": [
      "Dentro de dos días, reconstruye sin mirar el límite: El promedio publicado excluye expedientes todavía abiertos.",
      "Dentro de una semana, reescribe el cierre para otro público y contrástalo con tu versión inicial.",
      "En clase, pide una objeción a «Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes.» y registra qué cambiarías."
    ]
  }
};
