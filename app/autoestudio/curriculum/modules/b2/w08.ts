import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w08: Module = {
  "id": "b2-08",
  "level": "b2",
  "week": 8,
  "kind": "core",
  "title": "Firmar con condiciones claras",
  "subtitle": "Negociar garantías, excepciones y consecuencias.",
  "stop": {
    "place": "San Luis",
    "country": "Argentina"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.condicionales-conectores",
    "b2.gram.consecutivas",
    "b2.voc.acuerdos-contratos",
    "b2.pron.foco-solo-si",
    "b2.fun.negociar-condiciones",
    "b2.spk.negociacion"
  ],
  "reviewObjectives": [
    "b2.fun.mediacion-fuentes",
    "b2.rev.checkpoint-1",
    "b2.lis.debate-radio",
    "b2.gram.relativas-avanzadas",
    "b2.gram.explicativas-especificativas",
    "b2.voc.arte-cultura",
    "b2.pron.jerarquia-pausas",
    "b2.fun.describir-precision",
    "b2.wri.resena-exposicion"
  ],
  "prerequisites": [
    "b2-07"
  ],
  "goal": {
    "canDo": "Puedo negociar garantías, excepciones y consecuencias con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: concretar condiciones verificables para compartir un local.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: negociar garantías, excepciones y consecuencias. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Negociar garantías, excepciones y consecuencias",
        "body": [
          "Siempre que y con tal de que presentan condiciones con subjuntivo; a no ser que, salvo que y en caso de que introducen excepciones o contingencias. No son equivalentes en todos los contextos: acepto siempre que haya seguro exige seguro; acepto a no ser que falte seguro excluye su ausencia."
        ],
        "examples": [
          {
            "es": "Aceptamos el local siempre que haya ventilación.",
            "note": "Condición exigida."
          },
          {
            "es": "Mantendremos la fecha a no ser que surja una avería.",
            "note": "Excepción futura."
          },
          {
            "es": "Había tanto ruido que suspendimos la grabación.",
            "note": "Intensidad de un sustantivo no contable."
          }
        ],
        "mistakes": [
          {
            "wrong": "Firmaremos con tal de que hay una inspección.",
            "right": "Firmaremos con tal de que haya una inspección.",
            "why": "Con tal de que introduce condición con subjuntivo."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "Las consecutivas relacionan intensidad y resultado: había tanto ruido que no se podía trabajar. De modo que y así que presentan consecuencias sin medir intensidad. Al negociar, comprueba quién activa una cláusula, cómo se verifica y qué ocurre si no se cumple; una frase correcta puede seguir siendo un acuerdo ambiguo."
        ],
        "examples": [
          {
            "es": "Aceptamos el local siempre que haya ventilación.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Había tanto ruido que suspendimos la grabación.",
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
        "prompt": "Completa estas decisiones lingüísticas de firmar con condiciones claras; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "Aceptamos el local siempre que ___ ventilación.",
            "answers": [
              [
                "haya"
              ]
            ],
            "why": "Condición exigida."
          },
          {
            "q": "Mantendremos la fecha a no ser que ___ una avería.",
            "answers": [
              [
                "surja"
              ]
            ],
            "why": "Excepción futura."
          },
          {
            "q": "Había ___ ruido que suspendimos la grabación.",
            "answers": [
              [
                "tanto"
              ]
            ],
            "why": "Intensidad de un sustantivo no contable."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «Aceptamos, pero es imprescindible revisar la instalación.» Reformula con siempre que.",
            "model": "Aceptamos siempre que se revise la instalación.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Renovaremos. Solo una denuncia previa impediría la renovación.» Usa a no ser que.",
            "model": "Renovaremos a no ser que haya una denuncia previa.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «El ruido era excesivo y no pudimos ensayar.» Expresa intensidad y consecuencia con tanto.",
            "model": "Había tanto ruido que no pudimos ensayar.",
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
        "title": "Negociar garantías, excepciones y consecuencias",
        "items": [
          {
            "es": "negociar una cláusula",
            "note": "acordar una condición contractual"
          },
          {
            "es": "ofrecer una garantía",
            "note": "asegurar una protección"
          },
          {
            "es": "incumplir un acuerdo",
            "note": "no respetar lo pactado"
          },
          {
            "es": "fijar una penalización",
            "note": "establecer una consecuencia económica"
          },
          {
            "es": "prorrogar un plazo",
            "note": "ampliar una fecha límite"
          },
          {
            "es": "rescindir un contrato",
            "note": "terminar un acuerdo"
          },
          {
            "es": "dejar un depósito",
            "note": "entregar una garantía económica"
          },
          {
            "es": "alcanzar un consenso",
            "note": "lograr un acuerdo compartido"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para negociar garantías, excepciones y consecuencias con su significado.",
        "pairs": [
          {
            "left": "negociar una cláusula",
            "right": "acordar una condición contractual"
          },
          {
            "left": "ofrecer una garantía",
            "right": "asegurar una protección"
          },
          {
            "left": "incumplir un acuerdo",
            "right": "no respetar lo pactado"
          },
          {
            "left": "fijar una penalización",
            "right": "establecer una consecuencia económica"
          },
          {
            "left": "prorrogar un plazo",
            "right": "ampliar una fecha límite"
          },
          {
            "left": "rescindir un contrato",
            "right": "terminar un acuerdo"
          },
          {
            "left": "dejar un depósito",
            "right": "entregar una garantía económica"
          },
          {
            "left": "alcanzar un consenso",
            "right": "lograr un acuerdo compartido"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Destaca la condición decisiva con foco contrastivo: aceptamos SIEMPRE QUE se revise; comprueba que no desaparezca la excepción al acelerar.",
    "explanation": [
      "Destaca la condición decisiva con foco contrastivo: aceptamos SIEMPRE QUE se revise; comprueba que no desaparezca la excepción al acelerar.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "Aceptamos el local siempre que haya ventilación."
      },
      {
        "es": "Mantendremos la fecha a no ser que surja una avería."
      },
      {
        "es": "Había tanto ruido que suspendimos la grabación."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de firmar con condiciones claras, ¿qué fragmento se oye?",
          "options": [
            "habrá",
            "haya",
            "había"
          ],
          "answer": 1,
          "why": "Condición exigida.",
          "audio": "Aceptamos el local siempre que haya ventilación.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de firmar con condiciones claras, ¿qué fragmento se oye?",
          "options": [
            "surja",
            "surge",
            "surgió"
          ],
          "answer": 0,
          "why": "Excepción futura.",
          "audio": "Mantendremos la fecha a no ser que surja una avería.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Aceptamos el local siempre que haya ventilación.",
        "tip": "Destaca la condición decisiva con foco contrastivo: aceptamos SIEMPRE QUE se revise; comprueba que no desaparezca la excepción al acelerar.",
        "voice": "es-ES-f"
      },
      {
        "text": "Mantendremos la fecha a no ser que surja una avería.",
        "tip": "Destaca la condición decisiva con foco contrastivo: aceptamos SIEMPRE QUE se revise; comprueba que no desaparezca la excepción al acelerar.",
        "voice": "es-ES-f"
      },
      {
        "text": "Había tanto ruido que suspendimos la grabación.",
        "tip": "Destaca la condición decisiva con foco contrastivo: aceptamos SIEMPRE QUE se revise; comprueba que no desaparezca la excepción al acelerar.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Firmar con condiciones claras",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Propietaria",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Ceramista",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Actor",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Puedo mantener el precio siempre que ustedes se ocupen del mantenimiento. No me refiero a una reforma completa, pero tampoco quiero recibir una llamada por cada pequeño arreglo. Necesitamos concretar una lista antes de firmar."
      },
      {
        "speaker": "s2",
        "text": "De acuerdo. Aceptaríamos cambiar bombillas y limpiar filtros, con tal de que la instalación eléctrica se revise primero. Los hornos consumen bastante y no queremos asumir una avería que venga de antes. ¿Podemos incluir una inspección en el acuerdo inicial?"
      },
      {
        "speaker": "s3",
        "text": "Yo añadiría los horarios. El jueves necesitamos silencio desde las seis, pero he entendido que el horno sigue funcionando después del taller. Si produce tanto ruido que no podemos ensayar, tendremos que cambiar de día o buscar otra distribución del espacio."
      },
      {
        "speaker": "s2",
        "text": "Hace un zumbido bajo, aunque no puedo garantizar que no moleste. Propongo una prueba el próximo jueves. Mantendríamos nuestro horario a no ser que ustedes comprueben que interfiere con la voz. En ese caso, terminaríamos la cocción el miércoles por la noche."
      },
      {
        "speaker": "s1",
        "text": "La inspección me parece razonable. En caso de que detecte un defecto anterior, me encargaré de repararlo. Sobre la duración, aceptaría seis meses con renovación automática, salvo que alguien avise con treinta días de antelación. ¿Les sirve esa fórmula?"
      },
      {
        "speaker": "s3",
        "text": "Sí, siempre que el aviso pueda hacerse por escrito y quede constancia de su recepción. También sugiero revisar el reparto de gastos después del primer mes. No porque desconfiemos, sino porque todavía estamos calculando el consumo real de cada actividad."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en San Luis?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Firmar con condiciones claras?",
              "options": [
                "Contar una única versión sin permitir preguntas.",
                "Concretar condiciones verificables para compartir un local",
                "Leer una lista de instrucciones sin responder a nadie."
              ],
              "answer": 1,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Firmar con condiciones claras»?",
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
          "prompt": "Localiza una intervención concreta en «Firmar con condiciones claras».",
          "items": [
            {
              "q": "¿Qué se acuerda hacer antes de fijar el jueves?",
              "options": [
                "Probar si el horno interfiere con la voz.",
                "Comprar otro edificio.",
                "Cancelar definitivamente la cerámica."
              ],
              "answer": 0,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Firmar con condiciones claras»?",
              "options": [
                "Ya está todo decidido y no necesitamos escuchar a ninguna parte.",
                "No hay información que podamos discutir en esta reunión.",
                "Puedo mantener el precio siempre que ustedes se ocupen del mantenimiento."
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
              "prompt": "En «Firmar con condiciones claras», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Sí, siempre que el aviso pueda hacerse por escrito y quede constancia de su recepción. También sugiero revisar el reparto de gastos después del primer mes. No porque desconfiemos, sino porque todavía estamos calculando el consumo real de cada actividad.",
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
    "title": "Firmar con condiciones claras: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "Dos asociaciones quieren compartir un local para impartir talleres. La propietaria ofrece un precio reducido con tal de que se ocupen del mantenimiento ordinario. La propuesta parece sencilla hasta que alguien pregunta qué significa ordinario. Cambiar una bombilla no plantea dudas; reparar una instalación eléctrica antigua sí. El primer borrador no distingue entre desgaste previo y daños producidos durante el uso, de modo que cada parte cree estar aceptando un compromiso diferente.",
      "La asociación de cerámica necesita utilizar hornos dos tardes por semana. El grupo de teatro acepta compartir el espacio siempre que pueda ensayar sin ruido los jueves. No basta con escribir que ambos respetarán las actividades del otro: algunos hornos deben permanecer encendidos durante varias horas después del taller. Si el acuerdo solo fija la hora de salida de las personas, el conflicto seguirá existiendo. Antes de discutir penalizaciones, las asociaciones deciden describir las necesidades técnicas y comprobar qué incompatibilidades son reales.",
      "La propietaria propone que los inquilinos paguen todas las reparaciones salvo que se demuestre un defecto anterior. Una representante objeta que probar ese origen puede ser difícil después de una avería. Sugiere realizar una inspección conjunta antes de firmar y adjuntar fotografías. La propietaria acepta, en caso de que el informe se entregue antes de fin de mes. El acuerdo avanza porque las condiciones dejan de depender de palabras generales y empiezan a relacionarse con hechos verificables.",
      "Queda pendiente la duración. El teatro quiere un año; la cerámica prefiere seis meses porque aún no sabe cuántas personas se inscribirán. Finalmente plantean un periodo inicial de seis meses con renovación, a no ser que una parte avise con treinta días de antelación. No han eliminado todo riesgo, pero han aclarado quién debe actuar y cuándo. Firmar no convierte una relación en perfecta; proporciona un marco para resolver problemas sin tener que empezar cada conversación desde cero."
    ],
    "glossary": [
      {
        "es": "negociar una cláusula",
        "note": "acordar una condición contractual"
      },
      {
        "es": "ofrecer una garantía",
        "note": "asegurar una protección"
      },
      {
        "es": "incumplir un acuerdo",
        "note": "no respetar lo pactado"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Qué mejora la negociación escrita?",
            "options": [
              "Evitar las inspecciones técnicas.",
              "Relacionar las condiciones con hechos comprobables.",
              "Aumentar todas las penalizaciones."
            ],
            "answer": 1,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué diferencia hay entre condición y excepción?",
            "options": [
              "La primera exige algo; la segunda delimita cuándo no se aplica.",
              "Ambas significan siempre prohibición.",
              "La excepción elimina cualquier compromiso."
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
            "prompt": "En «Firmar con condiciones claras», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "Proponemos un periodo inicial de seis meses, siempre que la inspección confirme que la instalación permite ambas actividades. La propietaria asumirá los defectos anteriores documentados; las asociaciones, el mantenimiento enumerado en el anexo. El ensayo del jueves se mantendrá salvo que la prueba acústica revele interferencias. En ese caso, la cocción terminará el día anterior. Conviene revisar el consumo al cabo de un mes, de modo que el reparto de gastos responda a datos reales.",
            "checklist": [
              "Identifico las dos posiciones sin inventar consenso.",
              "Utilizo una evidencia concreta.",
              "Marco una inferencia como tal."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo la forma lingüística limita o precisa el mensaje.",
      "items": [
        {
          "quote": "Dos asociaciones quieren compartir un local para impartir talleres.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "Firmar no convierte una relación en perfecta; proporciona un marco para resolver problemas sin tener que empezar cada conversación desde cero.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Recupera el prototipo de la semana 1 y la accesibilidad digital de la 6: redacta condiciones verificables para ambos casos.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de San Luis y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Firmar con condiciones claras»,",
              "Aceptamos",
              "el",
              "local",
              "siempre",
              "que",
              "haya",
              "ventilación."
            ],
            "why": "Condición exigida."
          },
          {
            "words": [
              "En",
              "«Firmar con condiciones claras»,",
              "Había",
              "tanto",
              "ruido",
              "que",
              "suspendimos",
              "la",
              "grabación."
            ],
            "why": "Intensidad de un sustantivo no contable."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de firmar con condiciones claras; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "Firmaremos con tal de que hay una inspección.",
            "answers": [
              "Firmaremos con tal de que haya una inspección."
            ],
            "why": "Con tal de que introduce condición con subjuntivo."
          },
          {
            "sentence": "Aceptaremos salvo de que cambie el precio.",
            "answers": [
              "Aceptaremos salvo que cambie el precio."
            ],
            "why": "La locución condicional es salvo que."
          },
          {
            "sentence": "Había tan ruido que no pudimos ensayar.",
            "answers": [
              "Había tanto ruido que no pudimos ensayar."
            ],
            "why": "Tanto cuantifica el sustantivo ruido."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre negociar garantías, excepciones y consecuencias con una postura y una razón; adapta el destinatario.",
            "model": "Proponemos un periodo inicial de seis meses, siempre que la inspección confirme que la instalación permite ambas actividades.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Firmar con condiciones claras» sin debilitarla, y responde con una condición verificable.",
            "model": "Proponemos un periodo inicial de seis meses, siempre que la inspección confirme que la instalación permite ambas actividades. La propietaria asumirá los defectos anteriores documentados; las asociaciones, el mantenimiento enumerado en el anexo. El ensayo del jueves se mantendrá salvo que la prueba acústica revele interferencias. En ese caso, la cocción terminará el día anterior. Conviene revisar el consumo al cabo de un mes, de modo que el reparto de gastos responda a datos reales.",
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
            "prompt": "Recupera la semana 5 sin abrir su explicación y aplica sus recursos a «Firmar con condiciones claras»: Mediar entre fuentes y participantes; Checkpoint 1: modo y tiempo; Escuchar un debate radiofónico. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo sintetizar posiciones, conservar reservas y adaptar la información a otra persona sin inventar acuerdos. Puedo elegir modo y tiempo en sustantivas y condicionales para pedir, valorar e imaginar. Puedo seguir dos posturas y sus condiciones en un debate.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 7 sin abrir su explicación y aplica sus recursos a «Firmar con condiciones claras»: Relativas con preposición, cuyo y lo cual; Especificativas y explicativas; Arte, museos y patrimonio; Pausas y jerarquía en oraciones largas; Describir con precisión; Reseña de una exposición. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar el que, la cual, cuyo y lo cual, con preposición cuando hace falta. Puedo distinguir los alumnos que viven lejos de los alumnos, que viven lejos. Puedo describir obras, estilos, autores y patrimonio. Puedo leer oraciones con varias subordinadas sin perder el hilo. Puedo describir una obra, un lugar o una persona con detalles encadenados. Puedo escribir una reseña con descripción y valoración.",
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
    "task": "Redacta una propuesta de acuerdo para compartir un espacio. Incluye tres condiciones, una excepción, un procedimiento de verificación y una consecuencia proporcional ante un incumplimiento.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "Siempre que y con tal de que presentan condiciones con subjuntivo; a no ser que, salvo que y en caso de que introducen excepciones o contingencias. No son equivalentes en todos los contextos: acepto siempre que haya seguro exige seguro; acepto a no ser que falte seguro excluye su ausencia.",
      "Las consecutivas relacionan intensidad y resultado: había tanto ruido que no se podía trabajar. De modo que y así que presentan consecuencias sin medir intensidad. Al negociar, comprueba quién activa una cláusula, cómo se verifica y qué ocurre si no se cumple; una frase correcta puede seguir siendo un acuerdo ambiguo.",
      "Recupera el prototipo de la semana 1 y la accesibilidad digital de la 6: redacta condiciones verificables para ambos casos."
    ],
    "model": [
      "Proponemos compartir el local durante un periodo inicial de seis meses, siempre que una inspección confirme que la instalación permite utilizar los hornos con seguridad. La propietaria asumirá la reparación de los defectos anteriores documentados. Las asociaciones se encargarán del mantenimiento ordinario enumerado en un anexo, que distinguirá limpieza, sustitución de piezas menores y reparaciones que requieran personal especializado.",
      "El grupo de cerámica podrá utilizar sus equipos los miércoles y jueves con tal de que el ruido no interfiera con el ensayo del jueves por la tarde. Antes de confirmar ese horario, realizaremos una prueba conjunta. Si el funcionamiento impide escuchar las voces con claridad, la cocción terminará el miércoles por la noche. La verificación quedará recogida en un acta breve que ambas asociaciones podrán consultar.",
      "Los gastos se repartirán provisionalmente según las horas de uso, aunque revisaremos el consumo real al terminar el primer mes. Nadie debería asumir una diferencia importante sin conocer los datos que la justifican. En caso de que una actividad extraordinaria aumente el consumo, su organización lo comunicará antes de celebrarla y acordará cómo cubrir el coste adicional.",
      "El acuerdo se renovará salvo que una parte avise por escrito con treinta días de antelación. Ante un incumplimiento, se solicitará primero una corrección con plazo concreto. Si se repite y perjudica otra actividad, la parte responsable compensará el gasto acreditado, sin penalizaciones automáticas desproporcionadas. Estas condiciones no eliminan cualquier conflicto, pero permiten identificar quién debe actuar, qué debe comprobarse y cómo revisar una decisión antes de que el problema aumente."
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
        "prompt": "Presenta el caso de «Firmar con condiciones claras» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "Proponemos un periodo inicial de seis meses, siempre que la inspección confirme que la instalación permite ambas actividades. La propietaria asumirá los defectos anteriores documentados; las asociaciones, el mantenimiento enumerado en el anexo. El ensayo del jueves se mantendrá salvo que la prueba acústica revele interferencias. En ese caso, la cocción terminará el día anterior. Conviene revisar el consumo al cabo de un mes, de modo que el reparto de gastos responda a datos reales.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de negociar garantías, excepciones y consecuencias. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «Firmar con condiciones claras» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de San Luis; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre negociar garantías, excepciones y consecuencias; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «Firmar con condiciones claras», ¿qué resume mejor el propósito?",
        "options": [
          "Evitar cualquier intercambio entre personas.",
          "Concretar condiciones verificables para compartir un local",
          "Sustituir toda evidencia por una opinión rotunda."
        ],
        "answer": 1,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "De acuerdo. Aceptaríamos cambiar bombillas y limpiar filtros, con tal de que la instalación eléctrica se revise primero. Los hornos consumen bastante y no queremos asumir una avería que venga de antes. ¿Podemos incluir una inspección en el acuerdo inicial?",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Ceramista en «Firmar con condiciones claras», ¿qué intervención reconoces?",
        "options": [
          "Me niego a explicar mi punto de vista sobre este asunto.",
          "De acuerdo",
          "No hay ninguna condición pendiente y todas las partes aceptaron."
        ],
        "answer": 1,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "Revisaremos el contrato en caso de que ___ los horarios.",
        "answers": [
          [
            "cambien"
          ]
        ],
        "why": "Contingencia futura con sujeto plural."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «Podemos prestar el equipo, pero deben devolverlo mañana.» Usa con tal de que.",
        "model": "Podemos prestar el equipo con tal de que lo devuelvan mañana.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "La sala era tanto pequeña que faltaban sillas.",
        "answers": [
          "La sala era tan pequeña que faltaban sillas."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Firmar con condiciones claras».",
        "model": "Proponemos un periodo inicial de seis meses, siempre que la inspección confirme que la instalación permite ambas actividades. La propietaria asumirá los defectos anteriores documentados; las asociaciones, el mantenimiento enumerado en el anexo. El ensayo del jueves se mantendrá salvo que la prueba acústica revele interferencias. En ese caso, la cocción terminará el día anterior. Conviene revisar el consumo al cabo de un mes, de modo que el reparto de gastos responda a datos reales.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre negociar garantías, excepciones y consecuencias; concede una razón y conserva tu argumento.",
        "model": "Proponemos un periodo inicial de seis meses, siempre que la inspección confirme que la instalación permite ambas actividades. La propietaria asumirá los defectos anteriores documentados; las asociaciones, el mantenimiento enumerado en el anexo. El ensayo del jueves se mantendrá salvo que la prueba acústica revele interferencias. En ese caso, la cocción terminará el día anterior. Conviene revisar el consumo al cabo de un mes, de modo que el reparto de gastos responda a datos reales.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 8 a un mensaje cercano y a un informe formal.",
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
      "Puedo negociar garantías, excepciones y consecuencias.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Recupera el prototipo de la semana 1 y la accesibilidad digital de la 6: redacta condiciones verificables para ambos casos.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
