import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w15: Module = {
  "id": "b2-15",
  "level": "b2",
  "week": 15,
  "kind": "checkpoint",
  "title": "Checkpoint: reconstruir un conflicto público",
  "subtitle": "Cruzar fuentes, valorar pruebas y mediar en una decisión.",
  "stop": {
    "place": "Concepción",
    "country": "Chile"
  },
  "minutes": 150,
  "newObjectives": [
    "b2.rev.checkpoint-3",
    "b2.read.dossier"
  ],
  "reviewObjectives": [
    "b2.disc.argumentacion",
    "b2.disc.posicionamiento",
    "b2.voc.ciudad-sostenible",
    "b2.pron.exposicion-oral",
    "b2.wri.ensayo-argumentativo",
    "b2.spk.exposicion",
    "b2.gram.probabilidad-pasado",
    "b2.voc.investigacion",
    "b2.pron.conjetura",
    "b2.fun.especular-pasado",
    "b2.read.caso",
    "b2.gram.verbos-cambio-sistema",
    "b2.gram.ser-estar-matices",
    "b2.voc.personalidad",
    "b2.pron.chile",
    "b2.fun.describir-transformacion",
    "b2.lis.voces-chile",
    "b2.gram.valores-se",
    "b2.voc.accidentes-cotidianos",
    "b2.pron.cliticos-cadena",
    "b2.fun.disculparse-responsabilidad",
    "b2.spk.disculpa",
    "b2.gram.sustantivas-sistema",
    "b2.gram.concesivas",
    "b2.gram.pasiva-impersonalidad"
  ],
  "prerequisites": [
    "b2-14"
  ],
  "goal": {
    "canDo": "Puedo cruzar fuentes, valorar pruebas y mediar en una decisión con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: construir un acuerdo parcial a partir de fuentes limitadas.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: cruzar fuentes, valorar pruebas y mediar en una decisión. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Cruzar fuentes, valorar pruebas y mediar en una decisión",
        "body": [
          "En un dossier, las fuentes aportan piezas con distintos grados de certeza. Separa datos, interpretaciones e hipótesis antes de construir la tesis. Recupera probabilidad pasada, verbos de cambio y valores de se para explicar una transformación sin convertir una secuencia temporal en una causa demostrada."
        ],
        "examples": [
          {
            "es": "Puede que la obra haya afectado al drenaje.",
            "note": "Hipótesis anterior no comprobada."
          },
          {
            "es": "La plaza se convirtió en un espacio de encuentro.",
            "note": "Transformación de categoría."
          },
          {
            "es": "Se les perdieron los avisos a tres comercios.",
            "note": "Concordancia con avisos."
          }
        ],
        "mistakes": [
          {
            "wrong": "Los avisos se les perdió a los comercios.",
            "right": "Los avisos se les perdieron a los comercios.",
            "why": "Avisos es el sujeto plural."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "Un acuerdo de reparación necesita responsable, acción, plazo y comprobación. La concesión reconoce una razón atendible, no cancela el argumento propio. Usa la estructura tesis, evidencia, objeción y propuesta; cuando los datos no alcancen, incorpora una pregunta de investigación en lugar de inventar una conclusión."
        ],
        "examples": [
          {
            "es": "Puede que la obra haya afectado al drenaje.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Se les perdieron los avisos a tres comercios.",
            "note": "Reformula sin cambiar participantes ni tiempo."
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Elige formas por su función y por el momento desde el que se habla.",
    "exercises": [
      {
        "id": "g-contexto",
        "type": "gap",
        "prompt": "Completa estas decisiones lingüísticas de checkpoint: reconstruir un conflicto público; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "Puede que la obra ___ afectado al drenaje.",
            "answers": [
              [
                "haya"
              ]
            ],
            "why": "Hipótesis anterior no comprobada."
          },
          {
            "q": "La plaza se convirtió ___ un espacio de encuentro.",
            "answers": [
              [
                "en"
              ]
            ],
            "why": "Transformación de categoría."
          },
          {
            "q": "Se les ___ los avisos a tres comercios.",
            "answers": [
              [
                "perdieron"
              ]
            ],
            "why": "Concordancia con avisos."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «No se ha comprobado si la obra afectó al drenaje.» Formula la posibilidad sin convertirla en hecho.",
            "model": "Puede que la obra haya afectado al drenaje.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «La plaza pasó a ser un lugar de encuentro.» Usa convertirse en.",
            "model": "La plaza se convirtió en un lugar de encuentro.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Perdimos los avisos de tres comercios.» Reformula con se nos y conserva la concordancia.",
            "model": "Se nos perdieron los avisos de tres comercios.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Aprende combinaciones en contexto y comprueba qué matiz aportan al caso.",
    "groups": [
      {
        "title": "Cruzar fuentes, valorar pruebas y mediar en una decisión",
        "items": [
          {
            "es": "cruzar fuentes",
            "note": "relacionar información independiente"
          },
          {
            "es": "delimitar un problema",
            "note": "precisar su alcance"
          },
          {
            "es": "valorar la evidencia",
            "note": "examinar la fuerza de los datos"
          },
          {
            "es": "explicar una discrepancia",
            "note": "aclarar una diferencia de versiones"
          },
          {
            "es": "reparar una relación",
            "note": "recuperar confianza dañada"
          },
          {
            "es": "proponer indicadores",
            "note": "definir señales de evaluación"
          },
          {
            "es": "rendir un informe",
            "note": "presentar resultados ordenados"
          },
          {
            "es": "alcanzar un acuerdo parcial",
            "note": "coincidir en algunos puntos"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para cruzar fuentes, valorar pruebas y mediar en una decisión con su significado.",
        "pairs": [
          {
            "left": "cruzar fuentes",
            "right": "relacionar información independiente"
          },
          {
            "left": "delimitar un problema",
            "right": "precisar su alcance"
          },
          {
            "left": "valorar la evidencia",
            "right": "examinar la fuerza de los datos"
          },
          {
            "left": "explicar una discrepancia",
            "right": "aclarar una diferencia de versiones"
          },
          {
            "left": "reparar una relación",
            "right": "recuperar confianza dañada"
          },
          {
            "left": "proponer indicadores",
            "right": "definir señales de evaluación"
          },
          {
            "left": "rendir un informe",
            "right": "presentar resultados ordenados"
          },
          {
            "left": "alcanzar un acuerdo parcial",
            "right": "coincidir en algunos puntos"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Combina lectura informativa y conjetura: marca claramente dónde termina un dato y comienza una interpretación provisional.",
    "explanation": [
      "Combina lectura informativa y conjetura: marca claramente dónde termina un dato y comienza una interpretación provisional.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "Puede que la obra haya afectado al drenaje."
      },
      {
        "es": "La plaza se convirtió en un espacio de encuentro."
      },
      {
        "es": "Se les perdieron los avisos a tres comercios."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de checkpoint: reconstruir un conflicto público, ¿qué fragmento se oye?",
          "options": [
            "haya",
            "había",
            "habrá"
          ],
          "answer": 0,
          "why": "Hipótesis anterior no comprobada.",
          "audio": "Puede que la obra haya afectado al drenaje.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de checkpoint: reconstruir un conflicto público, ¿qué fragmento se oye?",
          "options": [
            "a",
            "de",
            "en"
          ],
          "answer": 2,
          "why": "Transformación de categoría.",
          "audio": "La plaza se convirtió en un espacio de encuentro.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Puede que la obra haya afectado al drenaje.",
        "tip": "Combina lectura informativa y conjetura: marca claramente dónde termina un dato y comienza una interpretación provisional.",
        "voice": "es-ES-f"
      },
      {
        "text": "La plaza se convirtió en un espacio de encuentro.",
        "tip": "Combina lectura informativa y conjetura: marca claramente dónde termina un dato y comienza una interpretación provisional.",
        "voice": "es-ES-f"
      },
      {
        "text": "Se les perdieron los avisos a tres comercios.",
        "tip": "Combina lectura informativa y conjetura: marca claramente dónde termina un dato y comienza una interpretación provisional.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Checkpoint: reconstruir un conflicto público",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Mediadora",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Comerciante",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Técnica",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s4",
        "name": "Vecina",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Antes de votar, resumiré los puntos que parecen compartidos. La plaza se usa más en las tardes observadas, existe un problema de agua que debe revisarse y tres comercios no recibieron el aviso. ¿Alguna parte considera que esta síntesis deforma su posición?"
      },
      {
        "speaker": "s2",
        "text": "No, pero quiero añadir que nuestra reclamación no se limita al aparcamiento. Se nos dejó fuera de una conversación que afectaba al negocio. Agradecemos la nueva reunión, aunque esperamos que todavía permita modificar algo y no sea solo una explicación de lo ya decidido."
      },
      {
        "speaker": "s3",
        "text": "Sobre el agua, puede que el desagüe se haya obstruido. No podemos asegurar que la reforma sea la única causa. Propongo inspeccionarlo esta semana y publicar fotografías y medidas. Si el diseño contribuye al problema, habrá que corregirlo; no basta con limpiar una vez."
      },
      {
        "speaker": "s4",
        "text": "Defendí la reforma y sigo pensando que mejoró el encuentro entre generaciones. Ahora bien, el recuento de cuatro tardes es limitado. Me parece razonable ampliar los horarios de observación. No quiero utilizar datos favorables como si respondieran a todas las críticas."
      },
      {
        "speaker": "s1",
        "text": "Entonces tenemos un acuerdo parcial: inspección inmediata, revisión de la zona de carga y evaluación más amplia. Falta asignar responsables y una fecha para volver a reunirnos. ¿Aceptarían revisar los resultados dentro de seis semanas, con criterios acordados hoy?"
      },
      {
        "speaker": "s2",
        "text": "Sí, siempre que se publique también lo que no haya funcionado y podamos proponer ajustes. No exigimos volver exactamente al pasado. Queremos que la plaza siga siendo un espacio vivo sin que nuestros problemas se traten como un precio que otros deciden pagar por nosotros."
      },
      {
        "speaker": "s4",
        "text": "La asociación juvenil quiere participar en el recuento porque las tardes observadas no coinciden con sus horarios. Podemos anotar usos y barreras sin pedir nombres. Así ampliaríamos la información y evitaríamos recopilar datos personales que no hacen falta para saber cómo funciona la plaza."
      },
      {
        "speaker": "s1",
        "text": "Incorporamos esa propuesta. También debemos explicar que una reforma integral suspendería actividades, mientras que un ajuste pequeño podría hacerse antes. No significa que la opción pequeña sea siempre mejor: significa que sus costes son distintos. Dejaré constancia de quién revisará los resultados y cómo podrá solicitarse una nueva decisión."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Concepción?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Checkpoint: reconstruir un conflicto público?",
              "options": [
                "Construir un acuerdo parcial a partir de fuentes limitadas",
                "Leer una lista de instrucciones sin responder a nadie.",
                "Contar una única versión sin permitir preguntas."
              ],
              "answer": 0,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Checkpoint: reconstruir un conflicto público»?",
              "options": [
                "Todas repiten exactamente la misma opinión desde el inicio.",
                "Ninguna intervención tiene relación con la anterior.",
                "Las personas aclaran interpretaciones y conservan algunos límites."
              ],
              "answer": 2,
              "why": "Identifica un turno que responda al anterior."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota quién sostiene cada afirmación.",
        "exercise": {
          "id": "l-detalle",
          "type": "choice",
          "prompt": "Localiza una intervención concreta en «Checkpoint: reconstruir un conflicto público».",
          "items": [
            {
              "q": "¿Qué pide el comerciante además de información?",
              "options": [
                "Cerrar todos los talleres de inmediato.",
                "Excluir datos desfavorables del informe.",
                "Posibilidad real de modificar decisiones."
              ],
              "answer": 2,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Checkpoint: reconstruir un conflicto público»?",
              "options": [
                "No hay información que podamos discutir en esta reunión.",
                "Antes de votar, resumiré los puntos que parecen compartidos.",
                "Ya está todo decidido y no necesitamos escuchar a ninguna parte."
              ],
              "answer": 1,
              "why": "Vuelve al inicio y comprueba la formulación exacta."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Distingue lo dicho de lo inferido; consulta la transcripción solo después de responder.",
        "exercise": {
          "id": "l-inferencia",
          "type": "open",
          "prompt": "Interpreta postura, reserva y efecto sobre la otra persona.",
          "items": [
            {
              "prompt": "En «Checkpoint: reconstruir un conflicto público», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Sí, siempre que se publique también lo que no haya funcionado y podamos proponer ajustes. No exigimos volver exactamente al pasado. Queremos que la plaza siga siendo un espacio vivo sin que nuestros problemas se traten como un precio que otros deciden pagar por nosotros.",
              "checklist": [
                "Atribuyo la intervención a su hablante.",
                "Distingo palabras explícitas e inferencia.",
                "Conservo una condición o un límite de la conversación."
              ]
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Checkpoint: reconstruir un conflicto público: texto para interpretar",
    "genre": "Dossier argumentativo",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "Fuente A: informe de uso. Tras la reforma, la plaza pasó de recibir actividades esporádicas a albergar talleres semanales. Un recuento realizado durante cuatro tardes registró más personas mayores y familias que antes. No se observaron mañanas ni días de lluvia. El documento concluye que aumentó el uso en las franjas estudiadas; no afirma que todos los grupos utilicen más el espacio ni que haya mejorado cada dimensión de la convivencia.",
      "Fuente B: carta comercial. Tres negocios atribuyen una caída de ventas a la supresión de aparcamientos. Aportan cifras de dos meses, aunque no separan el efecto de unas obras cercanas ni comparan con el mismo periodo del año anterior. La carta también denuncia que se les perdieron los avisos de una reunión informativa. La administración reconoce que sus direcciones no figuraban en la lista actualizada y ofrece una nueva reunión. Los comerciantes responden que participar después de tomada la decisión no equivale a haber sido escuchados antes.",
      "Fuente C: nota técnica. Después de una lluvia intensa apareció agua acumulada junto a una rampa. El equipo señala que puede haberse obstruido un desagüe y recomienda revisarlo. Una fotografía antigua muestra humedad en una zona próxima, pero no permite determinar si se trata del mismo problema. La reforma habrá modificado algunos flujos, sugiere una vecina; la técnica considera posible esa explicación, aunque pide no confundirla con un diagnóstico confirmado.",
      "La comisión vecinal debe recomendar si se mantiene el diseño, se revierte o se introduce una modificación parcial. Quienes impulsaron la reforma se han vuelto más cautos al describir sus resultados; quienes se opusieron reconocen que la plaza se ha convertido en un lugar de encuentro. Ese acercamiento no resuelve los desacuerdos, pero permite formular una propuesta común: corregir el drenaje, mejorar la carga comercial y ampliar la evaluación. La cuestión pendiente es quién verificará cada medida y qué ocurrirá si los problemas continúan.",
      "Fuente D: propuesta de evaluación. Una asociación juvenil recuerda que el recuento no incluyó las horas en las que suele utilizar la plaza. Solicita participar en la próxima observación y propone registrar actividades, duración de las visitas y barreras de acceso, sin identificar personalmente a quienes pasan por el lugar. El comercio acepta colaborar si los datos de ventas se presentan de forma agregada. La comisión deberá explicar qué preguntas puede responder cada conjunto de datos y qué información sería innecesaria para ese objetivo.",
      "El presupuesto permite una intervención inmediata en el drenaje y una modificación pequeña de la carga comercial. Una reforma integral exigiría suspender temporalmente talleres ya programados. La decisión, por tanto, no consiste únicamente en elegir un diseño: también distribuye costes y tiempos entre grupos. La mediación deberá hacer visibles esas consecuencias, proponer una prioridad justificada y establecer cómo podrán pedir una revisión quienes consideren que el acuerdo no responde a su dificultad principal."
    ],
    "glossary": [
      {
        "es": "cruzar fuentes",
        "note": "relacionar información independiente"
      },
      {
        "es": "delimitar un problema",
        "note": "precisar su alcance"
      },
      {
        "es": "valorar la evidencia",
        "note": "examinar la fuerza de los datos"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Qué conclusión respeta las tres fuentes?",
            "options": [
              "Hay mejoras observadas y problemas cuya causa requiere más comprobación.",
              "La reforma explica toda caída de ventas.",
              "La fotografía confirma el origen del agua."
            ],
            "answer": 0,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué hace la mediadora antes de votar?",
            "options": [
              "Decide por todas las partes.",
              "Presenta toda hipótesis como evidencia.",
              "Comprueba que su síntesis no deforme las posiciones."
            ],
            "answer": 2,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          }
        ]
      },
      {
        "id": "r-evidencia",
        "type": "open",
        "prompt": "Apoya tu lectura con evidencia y distingue la postura de la fuente de la tuya.",
        "items": [
          {
            "prompt": "En «Checkpoint: reconstruir un conflicto público», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "La evidencia permite afirmar que aumentó el uso en ciertas tardes, pero no describir toda la semana. Tampoco demuestra que la reforma explique por sí sola las pérdidas comerciales o el agua acumulada. Recomiendo conservar provisionalmente el diseño, inspeccionar el drenaje y revisar la zona de carga. La administración debe reconocer el fallo de convocatoria y garantizar que la nueva reunión permita ajustes. Una evaluación dentro de seis semanas debería publicar tanto mejoras como dificultades.",
            "checklist": [
              "Identifico las dos posiciones sin inventar consenso.",
              "Utilizo una evidencia concreta.",
              "Marco una inferencia como tal."
            ]
          },
          {
            "prompt": "Compara el anexo del checkpoint 15 con las primeras fuentes: identifica una limitación de los datos y una consecuencia práctica para la recomendación. Explica qué detalle conservarías al mediar para otra persona.",
            "model": "Una cifra o una experiencia orienta la decisión solo dentro de su alcance. La recomendación debe conservar qué se midió, qué falta y qué condición se propone verificar.",
            "checklist": [
              "Identifico un dato concreto del anexo.",
              "No generalizo fuera de la muestra o del caso.",
              "Adapto el mensaje sin perder una condición."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo la forma lingüística limita o precisa el mensaje.",
      "items": [
        {
          "quote": "Fuente A: informe de uso.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "La cuestión pendiente es quién verificará cada medida y qué ocurrirá si los problemas continúan.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Integra la tesis de movilidad, los indicios del invernadero, el cambio del centro y la responsabilidad de la academia en una decisión sobre la plaza.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Concepción y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Checkpoint: reconstruir un conflicto público»,",
              "Puede",
              "que",
              "la",
              "obra",
              "haya",
              "afectado",
              "al",
              "drenaje."
            ],
            "why": "Hipótesis anterior no comprobada."
          },
          {
            "words": [
              "En",
              "«Checkpoint: reconstruir un conflicto público»,",
              "Se",
              "les",
              "perdieron",
              "los",
              "avisos",
              "a",
              "tres",
              "comercios."
            ],
            "why": "Concordancia con avisos."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de checkpoint: reconstruir un conflicto público; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "Los avisos se les perdió a los comercios.",
            "answers": [
              "Los avisos se les perdieron a los comercios."
            ],
            "why": "Avisos es el sujeto plural."
          },
          {
            "sentence": "No está claro que las obras causaron la caída.",
            "answers": [
              "No está claro que las obras causaran la caída."
            ],
            "why": "Afirmación cuestionada con subjuntivo."
          },
          {
            "sentence": "La plaza se ha convertido un lugar vivo.",
            "answers": [
              "La plaza se ha convertido en un lugar vivo."
            ],
            "why": "Convertirse requiere en."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre cruzar fuentes, valorar pruebas y mediar en una decisión con una postura y una razón; adapta el destinatario.",
            "model": "La evidencia permite afirmar que aumentó el uso en ciertas tardes, pero no describir toda la semana.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Checkpoint: reconstruir un conflicto público» sin debilitarla, y responde con una condición verificable.",
            "model": "La evidencia permite afirmar que aumentó el uso en ciertas tardes, pero no describir toda la semana. Tampoco demuestra que la reforma explique por sí sola las pérdidas comerciales o el agua acumulada. Recomiendo conservar provisionalmente el diseño, inspeccionar el drenaje y revisar la zona de carga. La administración debe reconocer el fallo de convocatoria y garantizar que la nueva reunión permita ajustes. Una evaluación dentro de seis semanas debería publicar tanto mejoras como dificultades.",
            "checklist": [
              "La objeción conserva su sentido.",
              "Mi respuesta no promete lo que no controlo."
            ]
          }
        ]
      },
      {
        "id": "x-recuperacion",
        "type": "open",
        "prompt": "Recuperación espaciada: selecciona y produce los recursos señalados sin mirar sus explicaciones. En el checkpoint distribúyelos entre informe y ensayo oral.",
        "items": [
          {
            "prompt": "Recupera la semana 1 sin abrir su explicación y aplica sus recursos a «Checkpoint: reconstruir un conflicto público»: Subjuntivo en oraciones sustantivas. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo elegir el modo según el verbo principal: influencia, valoración, emoción, percepción o comunicación.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 6 sin abrir su explicación y aplica sus recursos a «Checkpoint: reconstruir un conflicto público»: Oraciones concesivas. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar aunque + indicativo o subjuntivo según la información, a pesar de (que), por mucho que y si bien.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 9 sin abrir su explicación y aplica sus recursos a «Checkpoint: reconstruir un conflicto público»: Pasiva e impersonalidad. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar ser + participio, se pasiva, tercera plural impersonal y uno/una.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 11 sin abrir su explicación y aplica sus recursos a «Checkpoint: reconstruir un conflicto público»: Estructura argumentativa; Marcar la postura; Urbanismo y movilidad; Ritmo de una exposición oral; Ensayo argumentativo; Exposición de dos minutos. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo organizar tesis, argumentos, contraargumentos y conclusión con conectores variados. Puedo marcar mi postura y el grado de certeza: es indudable que, cabe pensar que, no está tan claro que. Puedo debatir sobre transporte, vivienda, gentrificación y espacio público. Puedo usar pausas estratégicas y énfasis para hacer clara una exposición. Puedo escribir un ensayo de 220 palabras con contraargumento. Puedo defender una propuesta en dos minutos con estructura clara.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 12 sin abrir su explicación y aplica sus recursos a «Checkpoint: reconstruir un conflicto público»: Probabilidad en el pasado; Investigación y pruebas; Entonación de la conjetura; Especular sobre lo que pasó; Leer un caso. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo especular sobre el pasado con habrá salido, habría llegado y debió de pasar. Puedo hablar de indicios, pruebas, versiones y conclusiones. Puedo distinguir una afirmación de una conjetura por la prosodia. Puedo formular y descartar hipótesis sobre un hecho pasado. Puedo inferir lo que probablemente pasó a partir de varios documentos.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 13 sin abrir su explicación y aplica sus recursos a «Checkpoint: reconstruir un conflicto público»: El sistema de los verbos de cambio; Ser y estar: matices de percepción; Personalidad y transformaciones; Rasgos del español de Chile; Describir una transformación; Comprender una conversación sobre cambio y variación chilena. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo elegir entre ponerse, volverse, hacerse, convertirse en, llegar a ser y quedarse. Puedo usar estar para percepciones y cambios: está muy joven, está carísimo. Puedo describir rasgos de carácter con matices. Puedo describir rasgos variables del habla chilena y contrastarlos con una muestra real en clase, sin atribuirlos a una voz sintética. Puedo contar cómo cambió una persona o un lugar y valorarlo. Puedo seguir posiciones sobre cambios sociales y explicar marcadores locales; contrasto la fonética chilena con una muestra real en clase.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 14 sin abrir su explicación y aplica sus recursos a «Checkpoint: reconstruir un conflicto público»: Valores de se; Accidentes y descuidos; Clíticos en cadena; Disculparse y asumir responsabilidad; Disculpa difícil. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo distinguir se reflexivo, recíproco, involuntario (se me olvidó) y pronominal con cambio de significado. Puedo contar descuidos con se me cayó, se nos olvidó, se le rompió. Puedo decir se me cayó o se nos fue con el ritmo de una sola palabra. Puedo disculparme, presentar algo como involuntario y ofrecer una reparación. Puedo resolver oralmente una situación en la que tengo parte de la culpa.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Produce un informe de decisión para la comisión. Integra las tres fuentes y el audio, compara las opciones y formula un acuerdo parcial con indicadores, responsables y revisión. Recupera argumentación, conjetura, cambio y responsabilidad.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "En un dossier, las fuentes aportan piezas con distintos grados de certeza. Separa datos, interpretaciones e hipótesis antes de construir la tesis. Recupera probabilidad pasada, verbos de cambio y valores de se para explicar una transformación sin convertir una secuencia temporal en una causa demostrada.",
      "Un acuerdo de reparación necesita responsable, acción, plazo y comprobación. La concesión reconoce una razón atendible, no cancela el argumento propio. Usa la estructura tesis, evidencia, objeción y propuesta; cuando los datos no alcancen, incorpora una pregunta de investigación en lugar de inventar una conclusión.",
      "Integra la tesis de movilidad, los indicios del invernadero, el cambio del centro y la responsabilidad de la academia en una decisión sobre la plaza."
    ],
    "model": [
      "La comisión dispone de pruebas de una mejora parcial del uso de la plaza y de problemas que todavía necesitan investigación. Recomiendo mantener provisionalmente el diseño, corregir el drenaje y revisar la zona de carga. Revertir toda la reforma antes de completar la evaluación tendría costes importantes y suspendería actividades cuyo valor varias partes reconocen.",
      "El recuento permite afirmar que aumentó la presencia de ciertos grupos durante las tardes observadas. No describe las mañanas, los días de lluvia ni los horarios de la asociación juvenil. Del mismo modo, las cifras comerciales no demuestran que la reforma explique por sí sola la caída de ventas. Deberían compararse periodos equivalentes y considerar las obras cercanas. La fotografía antigua tampoco confirma el origen del agua acumulada.",
      "Propongo que el equipo técnico inspeccione el desagüe esta semana y publique el resultado con sus límites. La administración debe reconocer el fallo de convocatoria y garantizar que la nueva reunión permita introducir cambios. Comercios y asociaciones pueden participar en una evaluación ampliada que registre usos, barreras y datos agregados, sin identificar a las personas que pasan por la plaza.",
      "Dentro de seis semanas se revisarán el funcionamiento del drenaje, las dificultades de carga y la diversidad de usos. Cada medida necesita un responsable y una forma de pedir ajustes si no responde al problema. El acuerdo no exige que todas las partes valoren igual la reforma. Exige que puedan comprobar qué se ha hecho, expresar una dificultad persistente y participar en una decisión posterior basada en información más completa."
    ],
    "checklist": [
      "Respondo al propósito y al destinatario concreto.",
      "Organizo párrafos con relaciones claras, no conectores decorativos.",
      "Distingo datos, opiniones, hipótesis y compromisos.",
      "Integro una perspectiva distinta sin deformarla.",
      "Reviso concordancia, modo, tiempos y léxico.",
      "Explico una mejora entre borrador y versión final."
    ],
    "words": [
      220,
      280
    ]
  },
  "speaking": {
    "intro": "Prepara notas breves, no un texto para leer. Puedes grabarte localmente; la aplicación no califica automáticamente pronunciación ni calidad oral.",
    "tasks": [
      {
        "title": "Exposición con evidencia",
        "prompt": "Presenta el caso de «Checkpoint: reconstruir un conflicto público» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "La evidencia permite afirmar que aumentó el uso en ciertas tardes, pero no describir toda la semana. Tampoco demuestra que la reforma explique por sí sola las pérdidas comerciales o el agua acumulada. Recomiendo conservar provisionalmente el diseño, inspeccionar el drenaje y revisar la zona de carga. La administración debe reconocer el fallo de convocatoria y garantizar que la nueva reunión permita ajustes. Una evaluación dentro de seis semanas debería publicar tanto mejoras como dificultades.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de cruzar fuentes, valorar pruebas y mediar en una decisión. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
        "prep": [
          "Prepara una objeción probable y una pregunta de aclaración.",
          "Incorpora una pregunta inesperada: ¿qué evidencia haría cambiar tu conclusión?",
          "Al terminar, reformula en un minuto el resultado para una persona nueva."
        ],
        "seconds": 240,
        "selfCheck": [
          "Respondo a la objeción real.",
          "Pido y cedo el turno.",
          "Adapto una explicación sin inventar consenso."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "La mascota te acompaña al siguiente paso: convierte tu trabajo independiente en una conversación con consecuencias claras.",
    "cards": [
      {
        "move": "Defiende",
        "task": "Presenta tu entrega de «Checkpoint: reconstruir un conflicto público» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Concepción; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre cruzar fuentes, valorar pruebas y mediar en una decisión; identifica una condición que todavía necesita confirmación.",
        "phrases": [
          "Lo aceptaría siempre que…",
          "Queda pendiente comprobar…"
        ]
      }
    ],
    "bring": "Lleva borrador y versión revisada, cinco palabras clave para hablar y una duda de comprensión o prosodia."
  },
  "quiz": {
    "items": [
      {
        "q": "En la evaluación final de «Checkpoint: reconstruir un conflicto público», ¿qué resume mejor el propósito?",
        "options": [
          "Construir un acuerdo parcial a partir de fuentes limitadas",
          "Sustituir toda evidencia por una opinión rotunda.",
          "Evitar cualquier intercambio entre personas."
        ],
        "answer": 0,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "No, pero quiero añadir que nuestra reclamación no se limita al aparcamiento. Se nos dejó fuera de una conversación que afectaba al negocio. Agradecemos la nueva reunión, aunque esperamos que todavía permita modificar algo y no sea solo una explicación de lo ya decidido.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Comerciante en «Checkpoint: reconstruir un conflicto público», ¿qué intervención reconoces?",
        "options": [
          "No, pero quiero añadir que nuestra reclamación no se limita al aparcamiento",
          "No hay ninguna condición pendiente y todas las partes aceptaron.",
          "Me niego a explicar mi punto de vista sobre este asunto."
        ],
        "answer": 0,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "Quizá los avisos se ___ enviado a una lista antigua.",
        "answers": [
          [
            "hayan"
          ]
        ],
        "why": "Posibilidad pasada con sujeto plural."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «La comisión no comprobó el drenaje y ahora faltan datos.» Construye una condicional mixta con disponer.",
        "model": "Si la comisión hubiera comprobado el drenaje, ahora dispondríamos de más datos.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "Se les quedó pendientes tres reparaciones.",
        "answers": [
          "Se les quedaron pendientes tres reparaciones."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Checkpoint: reconstruir un conflicto público».",
        "model": "La evidencia permite afirmar que aumentó el uso en ciertas tardes, pero no describir toda la semana. Tampoco demuestra que la reforma explique por sí sola las pérdidas comerciales o el agua acumulada. Recomiendo conservar provisionalmente el diseño, inspeccionar el drenaje y revisar la zona de carga. La administración debe reconocer el fallo de convocatoria y garantizar que la nueva reunión permita ajustes. Una evaluación dentro de seis semanas debería publicar tanto mejoras como dificultades.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre cruzar fuentes, valorar pruebas y mediar en una decisión; concede una razón y conserva tu argumento.",
        "model": "La evidencia permite afirmar que aumentó el uso en ciertas tardes, pero no describir toda la semana. Tampoco demuestra que la reforma explique por sí sola las pérdidas comerciales o el agua acumulada. Recomiendo conservar provisionalmente el diseño, inspeccionar el drenaje y revisar la zona de carga. La administración debe reconocer el fallo de convocatoria y garantizar que la nueva reunión permita ajustes. Una evaluación dentro de seis semanas debería publicar tanto mejoras como dificultades.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 15 a un mensaje cercano y a un informe formal.",
        "model": "Cambiaría el tratamiento y algunas fórmulas, pero conservaría las fuentes, los límites y las condiciones acordadas.",
        "checklist": [
          "Cambio recursos de registro.",
          "No cambio el contenido del compromiso."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo cruzar fuentes, valorar pruebas y mediar en una decisión.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Integra la tesis de movilidad, los indicios del invernadero, el cambio del centro y la responsabilidad de la academia en una decisión sobre la plaza.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
