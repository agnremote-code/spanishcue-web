import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w20: Module = {
  "id": "b2-20",
  "level": "b2",
  "week": 20,
  "kind": "checkpoint",
  "title": "Checkpoint final: un acuerdo que pueda sostenerse",
  "subtitle": "Integrar argumento, mediación, registro y variedad.",
  "stop": {
    "place": "Buenos Aires",
    "country": "Argentina"
  },
  "minutes": 150,
  "newObjectives": [
    "b2.rev.checkpoint-final",
    "b2.wri.texto-final-b2"
  ],
  "reviewObjectives": [
    "b2.voc.colocaciones",
    "b2.voc.formacion-palabras",
    "b2.gram.nominalizacion",
    "b2.pron.acento-derivados",
    "b2.wri.reescritura-precisa",
    "b2.fun.definir",
    "b2.fun.mitigacion",
    "b2.gram.importar-que",
    "b2.voc.correspondencia-formal",
    "b2.pron.mitigacion-prosodia",
    "b2.wri.correo-delicado",
    "b2.lis.reunion",
    "b2.disc.marcadores-conversacionales",
    "b2.disc.reformuladores",
    "b2.voc.expresiones-coloquiales",
    "b2.pron.prosodia-marcadores",
    "b2.fun.gestionar-conversacion",
    "b2.spk.conversacion-natural",
    "b2.gram.tiempos-relato",
    "b2.voc.descripcion-literaria",
    "b2.pron.lectura-expresiva",
    "b2.read.cuento",
    "b2.wri.microrrelato",
    "b2.gram.voseo",
    "b2.gram.ustedes-vosotros",
    "b2.voc.lexico-regional",
    "b2.pron.sheismo-voseo",
    "b2.fun.adaptarse-variedad",
    "b2.lis.rioplatense",
    "b2.gram.sustantivas-sistema",
    "b2.gram.concesivas",
    "b2.gram.pasiva-impersonalidad",
    "b2.gram.probabilidad-pasado"
  ],
  "prerequisites": [
    "b2-19"
  ],
  "goal": {
    "canDo": "Puedo integrar argumento, mediación, registro y variedad con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: confirmar condiciones antes de publicar un acuerdo compartido.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: integrar argumento, mediación, registro y variedad. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Integrar argumento, mediación, registro y variedad",
        "body": [
          "La tarea final combina recepción de fuentes, atribución precisa, negociación de condiciones y producción para dos públicos. Revisa modo, tiempo, referentes y conexiones lógicas después de planificar el mensaje. Una síntesis fiel mantiene diferencias de postura y grados de certeza, aunque elimine repeticiones."
        ],
        "examples": [
          {
            "es": "Aceptaremos el programa siempre que se publiquen los gastos.",
            "note": "Condición y concordancia plural."
          },
          {
            "es": "La portavoz negó que ya hubieran firmado el acuerdo.",
            "note": "Acción anterior a la negación, ellos."
          },
          {
            "es": "Si hubiéramos aclarado el aforo, ahora tendríamos menos dudas.",
            "note": "Condicional mixta."
          }
        ],
        "mistakes": [
          {
            "wrong": "Aceptaremos siempre que se publica los gastos.",
            "right": "Aceptaremos siempre que se publiquen los gastos.",
            "why": "Condición con subjuntivo y concordancia plural."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "Adapta registro y variedad sin alterar compromisos: un informe institucional y un mensaje cercano pueden expresar el mismo acuerdo con recursos distintos. Recupera colocaciones, nominalización útil, mitigación, reformulación y narración. Comprueba autonomía, claridad, alcance de la evidencia y capacidad de responder a una objeción inesperada."
        ],
        "examples": [
          {
            "es": "Aceptaremos el programa siempre que se publiquen los gastos.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Si hubiéramos aclarado el aforo, ahora tendríamos menos dudas.",
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
        "prompt": "Completa estas decisiones lingüísticas de checkpoint final: un acuerdo que pueda sostenerse; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "Aceptaremos el programa siempre que se ___ los gastos.",
            "answers": [
              [
                "publiquen"
              ]
            ],
            "why": "Condición y concordancia plural."
          },
          {
            "q": "La portavoz negó que ya ___ firmado el acuerdo.",
            "answers": [
              [
                "hubieran"
              ]
            ],
            "why": "Acción anterior a la negación, ellos."
          },
          {
            "q": "Si hubiéramos aclarado el aforo, ahora ___ menos dudas.",
            "answers": [
              [
                "tendríamos"
              ]
            ],
            "why": "Condicional mixta."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «Aceptaremos, pero antes deben publicar los gastos.» Formula la condición con siempre que.",
            "model": "Aceptaremos siempre que publiquen los gastos.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «La portavoz: «No habíamos firmado el acuerdo».» Atribuye la negación con negó que y sujeto ellos.",
            "model": "La portavoz negó que hubieran firmado el acuerdo.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «No aclaramos el aforo y ahora tenemos dudas.» Formula una condición pasada con resultado presente.",
            "model": "Si hubiéramos aclarado el aforo, ahora tendríamos menos dudas.",
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
        "title": "Integrar argumento, mediación, registro y variedad",
        "items": [
          {
            "es": "sostener un compromiso",
            "note": "cumplir una promesa viable"
          },
          {
            "es": "integrar perspectivas",
            "note": "considerar miradas distintas"
          },
          {
            "es": "delimitar responsabilidades",
            "note": "precisar obligaciones de cada parte"
          },
          {
            "es": "mediar en un desacuerdo",
            "note": "facilitar comprensión entre partes"
          },
          {
            "es": "justificar una recomendación",
            "note": "apoyar una propuesta con razones"
          },
          {
            "es": "adaptar el registro",
            "note": "ajustar la expresión al público"
          },
          {
            "es": "revisar un supuesto",
            "note": "comprobar una idea no demostrada"
          },
          {
            "es": "cerrar un acuerdo",
            "note": "confirmar condiciones compartidas"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para integrar argumento, mediación, registro y variedad con su significado.",
        "pairs": [
          {
            "left": "sostener un compromiso",
            "right": "cumplir una promesa viable"
          },
          {
            "left": "integrar perspectivas",
            "right": "considerar miradas distintas"
          },
          {
            "left": "delimitar responsabilidades",
            "right": "precisar obligaciones de cada parte"
          },
          {
            "left": "mediar en un desacuerdo",
            "right": "facilitar comprensión entre partes"
          },
          {
            "left": "justificar una recomendación",
            "right": "apoyar una propuesta con razones"
          },
          {
            "left": "adaptar el registro",
            "right": "ajustar la expresión al público"
          },
          {
            "left": "revisar un supuesto",
            "right": "comprobar una idea no demostrada"
          },
          {
            "left": "cerrar un acuerdo",
            "right": "confirmar condiciones compartidas"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Integra énfasis argumentativo, concesión, cita y cierre; graba una síntesis comprensible y revisa con tu docente qué matices transmite realmente tu voz.",
    "explanation": [
      "Integra énfasis argumentativo, concesión, cita y cierre; graba una síntesis comprensible y revisa con tu docente qué matices transmite realmente tu voz.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "Aceptaremos el programa siempre que se publiquen los gastos."
      },
      {
        "es": "La portavoz negó que ya hubieran firmado el acuerdo."
      },
      {
        "es": "Si hubiéramos aclarado el aforo, ahora tendríamos menos dudas."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de checkpoint final: un acuerdo que pueda sostenerse, ¿qué fragmento se oye?",
          "options": [
            "publicó",
            "publiquen",
            "publican"
          ],
          "answer": 1,
          "why": "Condición y concordancia plural.",
          "audio": "Aceptaremos el programa siempre que se publiquen los gastos.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de checkpoint final: un acuerdo que pueda sostenerse, ¿qué fragmento se oye?",
          "options": [
            "hubieran",
            "habían",
            "hubieron"
          ],
          "answer": 0,
          "why": "Acción anterior a la negación, ellos.",
          "audio": "La portavoz negó que ya hubieran firmado el acuerdo.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Aceptaremos el programa siempre que se publiquen los gastos.",
        "tip": "Integra énfasis argumentativo, concesión, cita y cierre; graba una síntesis comprensible y revisa con tu docente qué matices transmite realmente tu voz.",
        "voice": "es-ES-f"
      },
      {
        "text": "La portavoz negó que ya hubieran firmado el acuerdo.",
        "tip": "Integra énfasis argumentativo, concesión, cita y cierre; graba una síntesis comprensible y revisa con tu docente qué matices transmite realmente tu voz.",
        "voice": "es-ES-f"
      },
      {
        "text": "Si hubiéramos aclarado el aforo, ahora tendríamos menos dudas.",
        "tip": "Integra énfasis argumentativo, concesión, cita y cierre; graba una síntesis comprensible y revisa con tu docente qué matices transmite realmente tu voz.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Checkpoint final: un acuerdo que pueda sostenerse",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Coordinadora",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Portavoz",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Transportista",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Propongo mantener tres días en las dos salas autorizadas y dejar el patio fuera hasta la inspección. Reconozco que comunicamos fechas distintas y que interpretamos demasiado rápido algunas respuestas. Quiero que hoy confirmemos responsables y condiciones antes de publicar una nueva versión."
      },
      {
        "speaker": "s2",
        "text": "Agradezco la rectificación. Mi equipo podría gestionar inscripciones siempre que solo se pidan los datos necesarios para organizar el aforo y se explique su uso. No aceptamos asumir todo el sistema actual. Cuando dije bueno, podemos verlo, estaba abriendo una conversación, no cerrando un compromiso."
      },
      {
        "speaker": "s3",
        "text": "Podemos ofrecer dos viajes de regreso cada tarde. Eso reduciría el presupuesto de actividades, pero atendería una necesidad que aparece en la encuesta. Ahora bien, no sabemos cuántas personas que no siguen las redes necesitarían el servicio. Conviene reservar plazas y comprobar la demanda durante el primer día."
      },
      {
        "speaker": "s1",
        "text": "Entonces reformulo: mantenemos tres días con menos actividades, dos salas y transporte provisional. El patio no se anunciará como disponible. La inscripción quedaría pendiente de que revisemos los campos y la información que reciben los asistentes. ¿Esta síntesis conserva las condiciones de cada parte?"
      },
      {
        "speaker": "s2",
        "text": "Sí, con una precisión: aceptaremos gestionar el sistema después de ver la versión reducida, no antes. Vos tenés nuestro contacto; mandanos el borrador y lo revisamos mañana. Si alguna expresión regional resulta poco clara para las otras asociaciones, la aclaramos sin cambiar el compromiso."
      },
      {
        "speaker": "s3",
        "text": "Por mi parte, enviaré horarios y capacidad por escrito. Si la demanda supera las plazas, necesitaremos decidir qué actividad se reduce para financiar otro viaje. Prefiero que ese límite figure ahora. Un acuerdo parcial pero comprensible será más útil que una promesa amplia que después nadie pueda cumplir."
      },
      {
        "speaker": "s2",
        "text": "Quisiera recuperar una experiencia del voluntariado. En otro encuentro se cambió un horario en un grupo de mensajes y el silencio se interpretó como acuerdo. Algunas personas no habían leído nada. Propongo que los cambios importantes tengan una confirmación de recepción, sin exigir respuestas públicas sobre circunstancias personales."
      },
      {
        "speaker": "s1",
        "text": "Lo incorporamos como procedimiento. La ficha común tendrá horarios confirmados y propuestas pendientes en apartados distintos, y una persona responsable de resolver dudas. Cada asociación puede adaptar el tratamiento a su manera de hablar, siempre que conserve las condiciones. Para cerrar, pediré a cada parte que explique con sus palabras lo que asume; así detectaremos diferencias antes de publicar."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Buenos Aires?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Checkpoint final: un acuerdo que pueda sostenerse?",
              "options": [
                "Contar una única versión sin permitir preguntas.",
                "Confirmar condiciones antes de publicar un acuerdo compartido",
                "Leer una lista de instrucciones sin responder a nadie."
              ],
              "answer": 1,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Checkpoint final: un acuerdo que pueda sostenerse»?",
              "options": [
                "Las personas aclaran interpretaciones y conservan algunos límites.",
                "Todas repiten exactamente la misma opinión desde el inicio.",
                "Ninguna intervención tiene relación con la anterior."
              ],
              "answer": 0,
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
          "prompt": "Localiza una intervención concreta en «Checkpoint final: un acuerdo que pueda sostenerse».",
          "items": [
            {
              "q": "¿Qué condición conserva el portavoz en el audio?",
              "options": [
                "Revisar el sistema reducido antes de asumirlo.",
                "Gestionar cualquier cantidad de datos.",
                "Aceptar el acta anterior sin cambios."
              ],
              "answer": 0,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Checkpoint final: un acuerdo que pueda sostenerse»?",
              "options": [
                "Ya está todo decidido y no necesitamos escuchar a ninguna parte.",
                "No hay información que podamos discutir en esta reunión.",
                "Propongo mantener tres días en las dos salas autorizadas y dejar el patio fuera hasta la inspección."
              ],
              "answer": 2,
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
              "prompt": "En «Checkpoint final: un acuerdo que pueda sostenerse», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Por mi parte, enviaré horarios y capacidad por escrito. Si la demanda supera las plazas, necesitaremos decidir qué actividad se reduce para financiar otro viaje. Prefiero que ese límite figure ahora. Un acuerdo parcial pero comprensible será más útil que una promesa amplia que después nadie pueda cumplir.",
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
    "title": "Checkpoint final: un acuerdo que pueda sostenerse: texto para interpretar",
    "genre": "Dossier argumentativo",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "El encuentro cultural del río reunirá asociaciones de varias ciudades. La organización propone un programa de tres días en un antiguo mercado cuya restauración todavía no ha concluido. El informe técnico autoriza dos salas y exige una inspección adicional para el patio. La coordinadora considera viable inaugurar por fases. Algunas asociaciones temen que aceptar ahora una participación parcial se interprete después como apoyo a todo el programa, incluido un sistema de inscripción que solicita más datos de los que consideran necesarios.",
      "La encuesta de interés recibió doscientas respuestas a través de las redes de la organización. El sesenta por ciento prefiere actividades vespertinas y el cuarenta por ciento declara necesitar transporte de regreso. Los datos orientan la planificación, pero no representan automáticamente al conjunto de habitantes de la zona. Un grupo propone reservar parte del presupuesto para un servicio de traslado; otro prefiere ampliar la programación. Ambos coinciden en que no tendría sentido anunciar actividades a las que una parte del público no pudiera llegar o de las que no pudiera volver.",
      "En una reunión previa, un portavoz dijo «bueno, podemos verlo» y el acta lo registró como aceptación de asumir las inscripciones. El portavoz pide corregirla: estaba dispuesto a estudiar la tarea, no a comprometer a su equipo. También señala que se les habían enviado documentos con fechas diferentes. La coordinación reconoce el error y ofrece publicar una versión única, con responsables y asuntos pendientes separados. Explica que habría podido comprobar antes la interpretación de cada intervención y propone hacerlo al cerrar el nuevo acuerdo.",
      "El comité debe elegir entre reducir el encuentro a un día, mantener tres días con apertura parcial o aplazarlo. Ninguna alternativa carece de costes. Una recomendación convincente tendrá que justificar prioridades, conservar las condiciones técnicas, responder al problema de transporte y definir el tratamiento mínimo de datos. El éxito no consistirá en que todas las personas utilicen las mismas palabras, sino en que puedan explicar el mismo compromiso y reconocer qué límites no han desaparecido por el hecho de firmarlo.",
      "Nota del voluntariado. Las asociaciones visitantes necesitan una explicación breve y coherente del acuerdo. Algunas utilizan ustedes y otras vosotros; en conversaciones informales también aparece vos. La coordinación no exige uniformar esas formas, pero sí evitar que diferentes versiones del programa indiquen condiciones distintas. Se propone una ficha común con salas disponibles, horarios confirmados, transporte y persona responsable de resolver dudas. Las adaptaciones lingüísticas deben conservar esos cuatro elementos.",
      "Una voluntaria relata que en otro encuentro se cambió la hora de regreso sin actualizar todos los mensajes. Varias personas interpretaron el silencio del grupo como aceptación, aunque algunas ni siquiera habían leído la modificación. El relato sirve como advertencia, no como prueba de que aquí ocurrirá lo mismo. El comité pide diseñar una comprobación de recepción para los cambios importantes y una forma de señalar que una propuesta sigue pendiente. La entrega final deberá incluir esa medida y una explicación accesible para alguien que no haya participado en las reuniones."
    ],
    "glossary": [
      {
        "es": "sostener un compromiso",
        "note": "cumplir una promesa viable"
      },
      {
        "es": "integrar perspectivas",
        "note": "considerar miradas distintas"
      },
      {
        "es": "delimitar responsabilidades",
        "note": "precisar obligaciones de cada parte"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Qué exige una recomendación fiel al dossier?",
            "options": [
              "Dar por autorizado el patio.",
              "Integrar condiciones técnicas, acceso y límites de los datos.",
              "Tratar la encuesta como representación completa."
            ],
            "answer": 1,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué demuestra la reformulación de la coordinadora?",
            "options": [
              "Permite detectar una condición que aún necesitaba precisión.",
              "Elimina toda necesidad de documentación.",
              "Obliga a todas las partes a hablar la misma variedad."
            ],
            "answer": 0,
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
            "prompt": "En «Checkpoint final: un acuerdo que pueda sostenerse», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "Recomiendo mantener tres días con programación reducida y utilizar únicamente las salas autorizadas. Esta opción preserva el encuentro y permite destinar recursos al transporte. La encuesta sugiere una necesidad, aunque su origen en redes limita la representatividad. La gestión de inscripciones seguirá pendiente hasta que el equipo revise una versión con datos mínimos y condiciones claras. Propongo publicar un documento único y verificar la demanda de traslado el primer día. Si excede la capacidad, el comité deberá acordar qué partida modifica, sin prometer un servicio ilimitado.",
            "checklist": [
              "Identifico las dos posiciones sin inventar consenso.",
              "Utilizo una evidencia concreta.",
              "Marco una inferencia como tal."
            ]
          },
          {
            "prompt": "Compara el anexo del checkpoint 20 con las primeras fuentes: identifica una limitación de los datos y una consecuencia práctica para la recomendación. Explica qué detalle conservarías al mediar para otra persona.",
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
          "quote": "El encuentro cultural del río reunirá asociaciones de varias ciudades.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "El éxito no consistirá en que todas las personas utilicen las mismas palabras, sino en que puedan explicar el mismo compromiso y reconocer qué límites no han desaparecido por el hecho de firmarlo.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Recupera coordinación, modo y tiempo, concesión, fuentes, hipótesis, responsabilidad, precisión, cortesía y variedad: justifica al menos seis elecciones en tu entrega final.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Buenos Aires y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Checkpoint final: un acuerdo que pueda sostenerse»,",
              "Aceptaremos",
              "el",
              "programa",
              "siempre",
              "que",
              "se",
              "publiquen",
              "los",
              "gastos."
            ],
            "why": "Condición y concordancia plural."
          },
          {
            "words": [
              "En",
              "«Checkpoint final: un acuerdo que pueda sostenerse»,",
              "Si",
              "hubiéramos",
              "aclarado",
              "el",
              "aforo,",
              "ahora",
              "tendríamos",
              "menos",
              "dudas."
            ],
            "why": "Condicional mixta."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de checkpoint final: un acuerdo que pueda sostenerse; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "Aceptaremos siempre que se publica los gastos.",
            "answers": [
              "Aceptaremos siempre que se publiquen los gastos."
            ],
            "why": "Condición con subjuntivo y concordancia plural."
          },
          {
            "sentence": "No está claro que la encuesta representa a todo el barrio.",
            "answers": [
              "No está claro que la encuesta represente a todo el barrio."
            ],
            "why": "Cuestionar la afirmación selecciona subjuntivo."
          },
          {
            "sentence": "El mercado, cuyo salas están listas, abrirá por fases.",
            "answers": [
              "El mercado, cuyas salas están listas, abrirá por fases."
            ],
            "why": "Cuyo concuerda con salas."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre integrar argumento, mediación, registro y variedad con una postura y una razón; adapta el destinatario.",
            "model": "Recomiendo mantener tres días con programación reducida y utilizar únicamente las salas autorizadas.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Checkpoint final: un acuerdo que pueda sostenerse» sin debilitarla, y responde con una condición verificable.",
            "model": "Recomiendo mantener tres días con programación reducida y utilizar únicamente las salas autorizadas. Esta opción preserva el encuentro y permite destinar recursos al transporte. La encuesta sugiere una necesidad, aunque su origen en redes limita la representatividad. La gestión de inscripciones seguirá pendiente hasta que el equipo revise una versión con datos mínimos y condiciones claras. Propongo publicar un documento único y verificar la demanda de traslado el primer día. Si excede la capacidad, el comité deberá acordar qué partida modifica, sin prometer un servicio ilimitado.",
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
            "prompt": "Recupera la semana 1 sin abrir su explicación y aplica sus recursos a «Checkpoint final: un acuerdo que pueda sostenerse»: Subjuntivo en oraciones sustantivas. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo elegir el modo según el verbo principal: influencia, valoración, emoción, percepción o comunicación.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 6 sin abrir su explicación y aplica sus recursos a «Checkpoint final: un acuerdo que pueda sostenerse»: Oraciones concesivas. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar aunque + indicativo o subjuntivo según la información, a pesar de (que), por mucho que y si bien.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 9 sin abrir su explicación y aplica sus recursos a «Checkpoint final: un acuerdo que pueda sostenerse»: Pasiva e impersonalidad. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar ser + participio, se pasiva, tercera plural impersonal y uno/una.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 12 sin abrir su explicación y aplica sus recursos a «Checkpoint final: un acuerdo que pueda sostenerse»: Probabilidad en el pasado. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo especular sobre el pasado con habrá salido, habría llegado y debió de pasar.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 16 sin abrir su explicación y aplica sus recursos a «Checkpoint final: un acuerdo que pueda sostenerse»: Colocaciones frecuentes; Formación de palabras; Nominalización; Acento en derivados; Reescribir con precisión; Definir y explicar conceptos. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo combinar palabras de forma natural: tomar una decisión, plantear un problema, sacar conclusiones. Puedo deducir y crear palabras con prefijos y sufijos frecuentes. Puedo transformar verbos en sustantivos para escribir con concisión. Puedo pronunciar carácter/caracteres, régimen/regímenes y adverbios en -mente con dos acentos. Puedo mejorar un texto sustituyendo verbos comodín y repeticiones. Puedo definir un concepto, dar un ejemplo y diferenciarlo de otro parecido.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 17 sin abrir su explicación y aplica sus recursos a «Checkpoint final: un acuerdo que pueda sostenerse»: Cortesía y mitigación; ¿Te importa que…? y fórmulas con subjuntivo; Correspondencia profesional; Prosodia de la mitigación; Correo delicado; Escuchar una reunión. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo suavizar peticiones, críticas y desacuerdos: ¿te importaría que…?, convendría, quizás no sea lo ideal. Puedo pedir permiso y hacer peticiones indirectas con subjuntivo. Puedo usar fórmulas de inicio, cierre y transición en correos formales. Puedo suavizar con alargamientos, pausas y un tono más bajo. Puedo escribir un correo profesional que rechaza una propuesta sin dañar la relación. Puedo reconocer desacuerdos mitigados y lo que realmente se decide.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 18 sin abrir su explicación y aplica sus recursos a «Checkpoint final: un acuerdo que pueda sostenerse»: Marcadores conversacionales; Reformuladores; Expresiones coloquiales frecuentes; Prosodia de los marcadores; Gestionar una conversación; Conversación espontánea. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar bueno, pues, vamos, a ver, la verdad es que y hombre/mujer según la intención. Puedo reformular con o sea, es decir, mejor dicho, en otras palabras y vamos. Puedo entender y usar expresiones frecuentes como dar igual, pasarse, quedar bien o mal. Puedo dar a bueno o pues valores distintos con la entonación. Puedo ganar tiempo, reformular, interrumpir con educación y retomar. Puedo mantener una conversación de tres minutos sin bloquearme.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 19 sin abrir su explicación y aplica sus recursos a «Checkpoint final: un acuerdo que pueda sostenerse»: Tiempos del relato y variación; Descripción literaria; Lectura expresiva; Leer un microrrelato; Escribir un microrrelato; Voseo; Ustedes y vosotros; Léxico regional; Sheísmo y acento del voseo; Adaptarse a la variedad; Comprender diálogo con léxico y formas rioplatenses. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar el presente histórico y reconozco el uso del perfecto y del indefinido en España y en América. Puedo describir atmósferas, gestos y sensaciones con precisión. Puedo leer un fragmento narrativo con cambios de ritmo y de voz. Puedo interpretar el giro final de un microrrelato. Puedo escribir un relato de 200 palabras con tiempos del pasado variados. Puedo reconocer y usar las formas de vos en presente e imperativo (vos tenés, vení, decime). Puedo adaptar el plural de segunda persona según la variedad. Puedo reconocer variantes léxicas frecuentes: auto/coche/carro, departamento/piso, celular/móvil. Puedo producir el acento del voseo y contrastar el sheísmo con una muestra real identificada en clase. Puedo entender a hablantes de distintas variedades y pedir aclaraciones sobre léxico regional. Puedo seguir un diálogo con voseo y léxico rioplatense sin confundir síntesis con una muestra de acento verificada.",
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
    "task": "Redacta una recomendación de 250–300 palabras para el comité y un resumen oral para voluntariado. Cruza dossier y reunión, compara las tres opciones y defiende un acuerdo con condiciones, responsables, plazos y criterio de revisión.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "La tarea final combina recepción de fuentes, atribución precisa, negociación de condiciones y producción para dos públicos. Revisa modo, tiempo, referentes y conexiones lógicas después de planificar el mensaje. Una síntesis fiel mantiene diferencias de postura y grados de certeza, aunque elimine repeticiones.",
      "Adapta registro y variedad sin alterar compromisos: un informe institucional y un mensaje cercano pueden expresar el mismo acuerdo con recursos distintos. Recupera colocaciones, nominalización útil, mitigación, reformulación y narración. Comprueba autonomía, claridad, alcance de la evidencia y capacidad de responder a una objeción inesperada.",
      "Recupera coordinación, modo y tiempo, concesión, fuentes, hipótesis, responsabilidad, precisión, cortesía y variedad: justifica al menos seis elecciones en tu entrega final."
    ],
    "model": [
      "Recomiendo mantener el encuentro durante tres días con programación reducida y utilizar únicamente las dos salas autorizadas. Esta opción conserva la participación de las asociaciones sin anunciar el patio como disponible antes de la inspección. Reducir todo a un día limitaría actividades importantes; aplazarlo permitiría esperar las obras, pero obligaría a reorganizar compromisos ya asumidos.",
      "La programación reducida debe liberar recursos para dos viajes de regreso cada tarde. La encuesta sugiere una necesidad de transporte, aunque su difusión en redes limita la representatividad. No sabemos cuántas personas que no respondieron necesitarían ese servicio. Por ello, conviene reservar plazas y revisar la demanda durante el primer día. Si supera la capacidad, el comité deberá decidir qué partida modifica antes de prometer otro viaje.",
      "La gestión de inscripciones seguirá pendiente hasta que el equipo responsable revise una versión con los datos mínimos necesarios y una explicación clara de su uso. El portavoz aceptó estudiar esa tarea, no asumir el sistema anterior. La coordinación debe corregir el acta y publicar un documento único que separe acuerdos confirmados y asuntos pendientes, con una persona responsable de cada decisión.",
      "Para el voluntariado, propongo una ficha breve con salas, horarios, transporte y contacto para dudas. Cada asociación podrá adaptar el tratamiento a su variedad, siempre que conserve las condiciones. Los cambios importantes requerirán confirmación de recepción: el silencio no se interpretará automáticamente como aceptación.",
      "Antes de publicar el programa, cada parte explicará con sus palabras lo que asume. Esa comprobación permitirá detectar interpretaciones distintas sin exigir que todas las personas hablen igual. El acuerdo será sostenible si limita sus promesas, hace visibles las responsabilidades y permite revisar dificultades con criterios conocidos desde el principio."
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
      250,
      300
    ]
  },
  "speaking": {
    "intro": "Prepara notas breves, no un texto para leer. Puedes grabarte localmente; la aplicación no califica automáticamente pronunciación ni calidad oral.",
    "tasks": [
      {
        "title": "Exposición con evidencia",
        "prompt": "Presenta el caso de «Checkpoint final: un acuerdo que pueda sostenerse» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "Recomiendo mantener tres días con programación reducida y utilizar únicamente las salas autorizadas. Esta opción preserva el encuentro y permite destinar recursos al transporte. La encuesta sugiere una necesidad, aunque su origen en redes limita la representatividad. La gestión de inscripciones seguirá pendiente hasta que el equipo revise una versión con datos mínimos y condiciones claras. Propongo publicar un documento único y verificar la demanda de traslado el primer día. Si excede la capacidad, el comité deberá acordar qué partida modifica, sin prometer un servicio ilimitado.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de integrar argumento, mediación, registro y variedad. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «Checkpoint final: un acuerdo que pueda sostenerse» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Buenos Aires; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre integrar argumento, mediación, registro y variedad; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «Checkpoint final: un acuerdo que pueda sostenerse», ¿qué resume mejor el propósito?",
        "options": [
          "Evitar cualquier intercambio entre personas.",
          "Confirmar condiciones antes de publicar un acuerdo compartido",
          "Sustituir toda evidencia por una opinión rotunda."
        ],
        "answer": 1,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "Agradezco la rectificación. Mi equipo podría gestionar inscripciones siempre que solo se pidan los datos necesarios para organizar el aforo y se explique su uso. No aceptamos asumir todo el sistema actual. Cuando dije bueno, podemos verlo, estaba abriendo una conversación, no cerrando un compromiso.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Portavoz en «Checkpoint final: un acuerdo que pueda sostenerse», ¿qué intervención reconoces?",
        "options": [
          "Me niego a explicar mi punto de vista sobre este asunto.",
          "Agradezco la rectificación",
          "No hay ninguna condición pendiente y todas las partes aceptaron."
        ],
        "answer": 1,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "La inscripción seguirá pendiente hasta que el equipo la ___.",
        "answers": [
          [
            "revise"
          ]
        ],
        "why": "Evento futuro con hasta que."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «Admitió: «Interpretamos demasiado rápido la respuesta».» Transmite con admitió que y anterioridad.",
        "model": "Admitió que habían interpretado demasiado rápido la respuesta.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "El comité exige que los responsables cumplen el acuerdo.",
        "answers": [
          "El comité exige que los responsables cumplan el acuerdo."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Checkpoint final: un acuerdo que pueda sostenerse».",
        "model": "Recomiendo mantener tres días con programación reducida y utilizar únicamente las salas autorizadas. Esta opción preserva el encuentro y permite destinar recursos al transporte. La encuesta sugiere una necesidad, aunque su origen en redes limita la representatividad. La gestión de inscripciones seguirá pendiente hasta que el equipo revise una versión con datos mínimos y condiciones claras. Propongo publicar un documento único y verificar la demanda de traslado el primer día. Si excede la capacidad, el comité deberá acordar qué partida modifica, sin prometer un servicio ilimitado.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre integrar argumento, mediación, registro y variedad; concede una razón y conserva tu argumento.",
        "model": "Recomiendo mantener tres días con programación reducida y utilizar únicamente las salas autorizadas. Esta opción preserva el encuentro y permite destinar recursos al transporte. La encuesta sugiere una necesidad, aunque su origen en redes limita la representatividad. La gestión de inscripciones seguirá pendiente hasta que el equipo revise una versión con datos mínimos y condiciones claras. Propongo publicar un documento único y verificar la demanda de traslado el primer día. Si excede la capacidad, el comité deberá acordar qué partida modifica, sin prometer un servicio ilimitado.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 20 a un mensaje cercano y a un informe formal.",
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
      "Puedo integrar argumento, mediación, registro y variedad.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Recupera coordinación, modo y tiempo, concesión, fuentes, hipótesis, responsabilidad, precisión, cortesía y variedad: justifica al menos seis elecciones en tu entrega final.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
