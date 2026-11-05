import type { Module } from "../../types";

/**
 * B1 · semana 9 · Autoestudio espejo de G104 (condiciones y consejos en situaciones
 * reales) y G105 (por y para). Repaso autónomo con un grupo de voluntarios que viaja
 * de San José a un proyecto de tortugas marinas en Tortuguero.
 */
export const b1w09: Module = {
  "id": "b1-09",
  "level": "b1",
  "week": 9,
  "kind": "core",
  "title": "Rumbo a Tortuguero: plan A, plan B, por y para",
  "subtitle": "Repaso de cómo usar condiciones y consejos para resolver situaciones reales, y de cuándo elegir «por» y cuándo «para».",
  "stop": {
    "place": "San José",
    "country": "Costa Rica"
  },
  "minutes": 95,
  "newObjectives": [
    "b1.gram.g104",
    "b1.gram.g105",
    "b1.voc.w09-naturaleza-voluntariado",
    "b1.pron.w09-por-para-rapido",
    "b1.lis.w09-reunion-voluntarios",
    "b1.read.w09-normas-proyecto",
    "b1.wri.w09-plan-alternativas",
    "b1.spk.w09-resolver-problema",
    "b1.fun.w09-resolver-imprevistos",
    "b1.disc.w09-plan-alternativo"
  ],
  reviewObjectives: ["b1.gram.g101","b1.gram.g102","b1.gram.g103","b1.voc.w08-correr-entrenar","b1.pron.w08-ria-ia","b1.lis.w08-consejos-entrenadora","b1.read.w08-guia-primera-carrera","b1.wri.w08-correo-consejos","b1.spk.w08-plan-negociado","b1.fun.w08-animar-aconsejar","b1.disc.w08-obstaculo-decision"],
  prerequisites: ["b1-08"],
  "goal": {
    "canDo": "Al final de esta semana puedes organizar un viaje o un proyecto con alternativas («si llueve, salimos por la tarde; si no, a las seis»), aconsejar sin dar órdenes («yo llevaría botas») y elegir bien entre «por» y «para».",
    "steps": [
      "Repasa cómo se distinguen una condición, un plan acordado y una regla, y cómo se aconseja diciendo lo que tú harías.",
      "Repasa los usos de «por» (mirar atrás o por el camino) y de «para» (mirar hacia delante).",
      "Escucha la reunión de salida de un grupo de voluntarios en San José.",
      "Lee las normas y consejos del proyecto de tortugas en Tortuguero.",
      "Escribe un plan con alternativas, revísalo y explica en voz alta cómo resolverías un imprevisto."
    ]
  },
  "theory": {
    "intro": "Esta semana repasas dos clases muy prácticas. La primera te sirve para resolver problemas: prever qué pasará, decidir planes alternativos y dar consejos. La segunda, para no dudar entre «por» y «para». Te acompaña Daniela, que coordina en San José a un grupo de voluntarios que va a pasar dos semanas protegiendo nidos de tortuga en la costa del Caribe.",
    "parts": [
      {
        "heading": "Condición, plan acordado o regla",
        "body": [
          "Ya sabes que detrás de «si» va el presente. En situaciones reales, la consecuencia te dice qué tipo de frase es. Con futuro, haces una previsión o tomas una decisión ahora: «Si el río está alto, tomaremos otra lancha». Con presente, presentas un plan ya acordado: «Si llueve, salimos a las diez» (el grupo ya lo ha decidido).",
          "Cuando las dos partes van en presente y la situación se repite, es una regla o una costumbre: «Si encuentras un nido, avisas al guardaparques». Para el plan B, usa «si no» (sin pausa entre «si» y «no») o «en ese caso»: «Si el autobús llega a tiempo, comemos en Cariari; si no, comemos en la lancha»."
        ],
        "table": {
          "caption": "Tres tipos de frase con «si»",
          "head": [
            "Tipo",
            "Estructura",
            "Ejemplo"
          ],
          "rows": [
            [
              "Previsión o decisión",
              "si + presente, futuro",
              "Si hay tormenta, cancelaremos la patrulla."
            ],
            [
              "Plan acordado",
              "si + presente, presente",
              "Si hay tormenta, la patrulla empieza a medianoche."
            ],
            [
              "Regla o costumbre",
              "si + presente, presente",
              "Si una tortuga sale del mar, apagamos las linternas."
            ],
            [
              "Plan B",
              "si no, + presente / futuro",
              "Si no hay tormenta, salimos a las nueve."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Si el río estará alto, tomamos otra ruta.",
            "right": "Si el río está alto, tomamos otra ruta.",
            "why": "Aunque hables del futuro, detrás de «si» va el presente."
          },
          {
            "wrong": "Si llueve vamos en lancha, sino vamos caminando.",
            "right": "Si llueve, vamos en lancha; si no, vamos caminando.",
            "why": "Para el plan B se escribe «si no», en dos palabras. «Sino» significa «al contrario»."
          }
        ]
      },
      {
        "heading": "Aconsejar sin dar órdenes: «yo + condicional»",
        "body": [
          "Una forma muy natural de aconsejar es decir lo que harías tú: «Yo llevaría botas de goma», «Yo no dejaría la mochila en la playa». La otra persona decide; tú solo propones. Suena más suave que el imperativo («Lleva botas») y menos directo que «tienes que».",
          "Puedes combinarlo con una condición real para hacer una sugerencia amable: «Si tienes tiempo, podrías ayudarnos con los nidos», «Si vas al mercado, yo compraría frutas para el viaje». Para la regla obligatoria, en cambio, usa presente, «tener que» o el imperativo."
        ],
        "examples": [
          {
            "es": "Yo saldría de San José antes de las seis por el tráfico.",
            "note": "Consejo: lo que haría yo."
          },
          {
            "es": "Si te mareas en la lancha, yo me sentaría delante.",
            "note": "Condición real + consejo."
          },
          {
            "es": "Si ves una tortuga, no le haces fotos con flash.",
            "note": "Regla del proyecto."
          },
          {
            "es": "Si tienes un rato, ¿podrías revisar la lista de material?",
            "note": "Petición amable."
          }
        ],
        "mistakes": [
          {
            "wrong": "Si vas a la playa de noche, yo llevaré repelente.",
            "right": "Si vas a la playa de noche, yo llevaría repelente.",
            "why": "Para aconsejar con «yo», usa el condicional; el futuro sonaría a tu propio plan."
          }
        ],
        "tip": "Pregúntate: ¿quién decide? Si decide la otra persona, aconseja con «yo + condicional»; si es una norma, usa presente o imperativo."
      },
      {
        "heading": "«Por» mira hacia atrás o por el camino",
        "body": [
          "«Por» expresa la causa, lo que hay detrás de una acción: «Cerraron la playa por la tormenta», «Gracias por venir», «Lo hago por las tortugas». También el recorrido o el lugar por donde pasas («Fuimos por la Ruta 32», «Paseamos por el pueblo») y un momento aproximado («por la mañana», «por diciembre»).",
          "Además, «por» marca el medio («Te aviso por mensaje»), el intercambio y el precio («Pagamos quince mil colones por la excursión», «Cambié mis botas por unas sandalias») y la cantidad por unidad («dos litros de agua por persona»)."
        ],
        "examples": [
          {
            "es": "El vuelo se retrasó por la lluvia.",
            "note": "Causa."
          },
          {
            "es": "La lancha pasa por los canales durante tres horas.",
            "note": "Recorrido."
          },
          {
            "es": "Te mando las fotos por correo.",
            "note": "Medio."
          },
          {
            "es": "Pagamos veinte dólares por persona.",
            "note": "Precio y cantidad por unidad."
          }
        ],
        "mistakes": [
          {
            "wrong": "Gracias para tu ayuda con los nidos.",
            "right": "Gracias por tu ayuda con los nidos.",
            "why": "Agradeces algo que ya ha pasado: es la causa del agradecimiento."
          }
        ]
      },
      {
        "heading": "«Para» mira hacia delante",
        "body": [
          "«Para» señala el objetivo («Vinimos para cuidar los nidos», «para que las crías lleguen al mar», como viste en la semana 7), el destinatario («Este informe es para la bióloga»), el destino de un movimiento («Salimos para Limón a las seis») y el plazo o momento límite («Necesito la lista para el viernes»).",
          "También sirve para dar una opinión («Para mí, es el mejor viaje») y para comparar con lo esperado («Para ser julio, llueve poco»). Un truco: si puedes preguntar «¿para qué?», «¿para quién?» o «¿para cuándo?», la respuesta suele llevar «para»."
        ],
        "table": {
          "caption": "Por y para en la misma historia",
          "head": [
            "Pregunta",
            "Preposición",
            "Ejemplo"
          ],
          "rows": [
            [
              "¿Por qué?",
              "por",
              "Me hice voluntaria por mi abuela, que amaba el mar."
            ],
            [
              "¿Para qué?",
              "para",
              "Me hice voluntaria para proteger a las tortugas."
            ],
            [
              "¿Por dónde?",
              "por",
              "Llegamos por el río."
            ],
            [
              "¿Hacia dónde?",
              "para",
              "Salimos para la costa."
            ],
            [
              "¿Para quién?",
              "para",
              "Las fotos son para el museo."
            ],
            [
              "¿Para cuándo?",
              "para",
              "El informe es para el lunes."
            ],
            [
              "¿Por cuánto?",
              "por",
              "Alquilamos las botas por cinco dólares."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Estudio biología por trabajar en un parque nacional.",
            "right": "Estudio biología para trabajar en un parque nacional.",
            "why": "Es un objetivo, algo que miras hacia delante: «para»."
          },
          {
            "wrong": "El trabajo es por el martes.",
            "right": "El trabajo es para el martes.",
            "why": "Un plazo se expresa con «para»."
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Primero practicas condiciones y consejos; después, «por» y «para».",
    "exercises": [
      {
        "id": "b1-09-gramatica-tipo-si",
        "type": "classify",
        "title": "¿Previsión, plan, regla o consejo?",
        "prompt": "Clasifica cada frase de la coordinadora según lo que expresa.",
        "categories": [
          "Previsión o decisión",
          "Plan acordado o regla",
          "Consejo"
        ],
        "items": [
          {
            "text": "Si el puente está cortado, tendremos que dormir en Cariari.",
            "cat": 0
          },
          {
            "text": "Si encuentras un nido, marcas el lugar con una estaca.",
            "cat": 1
          },
          {
            "text": "Yo no llevaría ropa blanca a la playa de noche.",
            "cat": 2
          },
          {
            "text": "Si sube la marea, los nidos se trasladarán al vivero.",
            "cat": 0
          },
          {
            "text": "Si alguien se siente mal, avisa a Daniela.",
            "cat": 1
          },
          {
            "text": "Si te pican los mosquitos, yo me pondría manga larga.",
            "cat": 2
          }
        ]
      },
      {
        "id": "b1-09-gramatica-plan-b",
        "type": "gap",
        "title": "Plan A y plan B",
        "prompt": "Completa con la forma correcta o con «si no».",
        "items": [
          {
            "q": "Si la lancha ___ (llegar) a las dos, comemos en el muelle; ___, comemos en el pueblo.",
            "answers": [
              [
                "llega"
              ],
              [
                "si no"
              ]
            ],
            "why": "Plan acordado en presente y alternativa con «si no»."
          },
          {
            "q": "Si mañana ___ (hacer) buen tiempo, ___ (ir, nosotros) al canal en kayak.",
            "answers": [
              [
                "hace"
              ],
              [
                "iremos",
                "vamos",
                "vamos a ir"
              ]
            ],
            "why": "«Si» + presente; decisión en futuro, presente o «ir a»."
          },
          {
            "q": "Yo que ella, no ___ (salir) sola de noche por la playa.",
            "answers": [
              [
                "saldría"
              ]
            ],
            "why": "Consejo: condicional irregular de «salir»."
          },
          {
            "q": "Si ___ (tener, tú) un minuto, ¿___ (poder) ayudarme con las cajas?",
            "answers": [
              [
                "tienes"
              ],
              [
                "podrías"
              ]
            ],
            "why": "Condición real + petición cortés en condicional."
          },
          {
            "q": "Si un turista ___ (tocar) una tortuga, el guía le ___ (explicar) por qué no debe hacerlo.",
            "answers": [
              [
                "toca"
              ],
              [
                "explica"
              ]
            ],
            "why": "Regla que se repite: presente en las dos partes."
          }
        ]
      },
      {
        "id": "b1-09-gramatica-por-para",
        "type": "choice",
        "title": "¿Por o para?",
        "prompt": "Elige la preposición correcta.",
        "items": [
          {
            "q": "Salimos ___ Tortuguero mañana muy temprano.",
            "options": [
              "por",
              "para"
            ],
            "answer": 1,
            "why": "Destino de un movimiento: «salir para»."
          },
          {
            "q": "Cancelaron la excursión ___ el mal tiempo.",
            "options": [
              "para",
              "por"
            ],
            "answer": 1,
            "why": "Causa: «por el mal tiempo»."
          },
          {
            "q": "Este regalo es ___ la familia que nos alojó.",
            "options": [
              "para",
              "por"
            ],
            "answer": 0,
            "why": "Destinatario: «para la familia»."
          },
          {
            "q": "Te llamo ___ teléfono cuando llegue.",
            "options": [
              "para",
              "por"
            ],
            "answer": 1,
            "why": "Medio: «por teléfono»."
          },
          {
            "q": "Tienes que entregar el informe ___ el día 15.",
            "options": [
              "por",
              "para"
            ],
            "answer": 1,
            "why": "Plazo: «para el día 15»."
          },
          {
            "q": "Pasamos ___ un puente colgante muy largo.",
            "options": [
              "para",
              "por"
            ],
            "answer": 1,
            "why": "Recorrido: «pasar por»."
          }
        ]
      },
      {
        "id": "b1-09-gramatica-errores",
        "type": "error",
        "title": "Corrige el error",
        "prompt": "Cada frase tiene un error de las dos clases. Escríbela bien.",
        "items": [
          {
            "sentence": "Muchas gracias para la cena de anoche.",
            "answers": [
              "Muchas gracias por la cena de anoche."
            ],
            "why": "Se agradece «por» algo: es la causa."
          },
          {
            "sentence": "Compré este sombrero para diez dólares en el mercado.",
            "answers": [
              "Compré este sombrero por diez dólares en el mercado."
            ],
            "why": "Precio: «por»."
          },
          {
            "sentence": "Si habrá plazas libres, iremos al volcán el domingo.",
            "answers": [
              "Si hay plazas libres, iremos al volcán el domingo."
            ],
            "why": "Detrás de «si» va el presente."
          },
          {
            "sentence": "Llevamos repelente por que no nos piquen los mosquitos.",
            "answers": [
              "Llevamos repelente para que no nos piquen los mosquitos."
            ],
            "why": "Objetivo con otro sujeto: «para que» + subjuntivo."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para hablar de un voluntariado en la naturaleza. Algunas son muy de Costa Rica: te lo indicamos.",
    "groups": [
      {
        "title": "El proyecto",
        "items": [
          {
            "es": "el voluntariado"
          },
          {
            "es": "el guardaparques"
          },
          {
            "es": "la playa de anidación"
          },
          {
            "es": "el desove"
          },
          {
            "es": "el nido"
          },
          {
            "es": "las crías"
          },
          {
            "es": "el vivero",
            "note": "Zona protegida donde se trasladan los huevos."
          }
        ]
      },
      {
        "title": "El viaje",
        "items": [
          {
            "es": "la temporada de lluvias"
          },
          {
            "es": "la lancha"
          },
          {
            "es": "el muelle"
          },
          {
            "es": "las botas de hule",
            "note": "En Costa Rica, «hule» es la goma."
          },
          {
            "es": "el repelente"
          },
          {
            "es": "la linterna de luz roja"
          }
        ]
      },
      {
        "title": "Expresiones útiles",
        "items": [
          {
            "es": "¡Pura vida!",
            "note": "Saludo y respuesta muy típicos de Costa Rica."
          },
          {
            "es": "dejar huella"
          },
          {
            "es": "la huella ecológica"
          },
          {
            "es": "estar de turno"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-09-vocabulario-definiciones",
        "type": "match",
        "title": "Cada palabra con su definición",
        "prompt": "Une cada palabra con su explicación.",
        "pairs": [
          {
            "left": "el desove",
            "right": "el momento en que la tortuga pone los huevos"
          },
          {
            "left": "el vivero",
            "right": "la zona protegida donde se guardan los huevos"
          },
          {
            "left": "el guardaparques",
            "right": "la persona que cuida y vigila un parque nacional"
          },
          {
            "left": "las crías",
            "right": "las tortugas recién nacidas"
          },
          {
            "left": "el muelle",
            "right": "el lugar donde suben y bajan los pasajeros de la lancha"
          }
        ],
        "why": "Fíjate en si la palabra nombra una persona, un lugar, un animal o un momento."
      },
      {
        "id": "b1-09-vocabulario-huecos",
        "type": "gap",
        "title": "La lista de Daniela",
        "prompt": "Completa con una palabra del banco.",
        "bank": [
          "hule",
          "repelente",
          "linterna",
          "lancha",
          "turno"
        ],
        "items": [
          {
            "q": "En la playa hay mucho barro: traigan botas de ___.",
            "answers": [
              [
                "hule"
              ]
            ],
            "why": "Botas de goma."
          },
          {
            "q": "Por la noche solo se usa una ___ de luz roja.",
            "answers": [
              [
                "linterna"
              ]
            ],
            "why": "La luz blanca asusta a las tortugas."
          },
          {
            "q": "Para llegar al pueblo hay que tomar una ___ desde La Pavona.",
            "answers": [
              [
                "lancha"
              ]
            ],
            "why": "No hay carretera: se llega por el canal."
          },
          {
            "q": "Si no quieres picaduras, ponte ___ cada tres horas.",
            "answers": [
              [
                "repelente"
              ]
            ],
            "why": "Protege de los mosquitos."
          },
          {
            "q": "Esta noche estoy de ___ de diez a dos.",
            "answers": [
              [
                "turno"
              ]
            ],
            "why": "Trabajar en un horario asignado."
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "«Por», «para» y «pa’»: preposiciones pequeñas en el habla rápida",
    "explanation": [
      "«Por» y «para» son palabras átonas: no llevan acento y se pegan a la palabra siguiente («porla mañana», «parael lunes»). Por eso es fácil no oírlas. Fíjate en la vocal: «por» tiene una sola sílaba con «o»; «para» tiene dos sílabas con «a».",
      "En el habla informal de muchos países, también en Costa Rica, «para» se reduce a «pa’»: «pa’ la playa», «pa’ que veas». Es normal en una conversación entre amigos, pero no se escribe así en un texto formal. Al hablar tú, pronuncia «para» completo y marca la erre suave final de «por»."
    ],
    "examples": [
      {
        "es": "Vamos pa’ la playa. = Vamos para la playa.",
        "note": "Forma coloquial y forma estándar."
      },
      {
        "es": "Paso por la playa. / Voy para la playa.",
        "note": "Una sílaba con «o» / dos sílabas con «a»."
      }
    ],
    "perceive": {
      "id": "b1-09-pronunciacion-por-para",
      "type": "listen",
      "title": "¿Qué preposición oyes?",
      "prompt": "Escucha cada frase y elige la preposición que oyes.",
      "items": [
        {
          "q": "¿Qué oyes antes de «el muelle»?",
          "options": [
            "por",
            "para"
          ],
          "answer": 1,
          "why": "Dos sílabas con «a»: «para» (destino).",
          "audio": "Salimos para el muelle a las seis.",
          "voice": "es-CO-f"
        },
        {
          "q": "¿Y aquí?",
          "options": [
            "por",
            "para"
          ],
          "answer": 0,
          "why": "Una sílaba con «o»: «por» (recorrido).",
          "audio": "Caminamos por el muelle hasta el pueblo.",
          "voice": "es-CO-m"
        },
        {
          "q": "¿Qué preposición dice, en su forma completa?",
          "options": [
            "para",
            "por"
          ],
          "answer": 0,
          "why": "«Pa’» es la forma coloquial de «para».",
          "audio": "Vamos pa’ la playa, que ya empieza el desove.",
          "voice": "es-MX-m"
        },
        {
          "q": "¿Qué oyes antes de «la lluvia»?",
          "options": [
            "para",
            "por"
          ],
          "answer": 1,
          "why": "«Por»: causa.",
          "audio": "Me quedé en el campamento por la lluvia.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Lo hago por las tortugas y para mis hijos.",
        "tip": "Contrasta «por» (una sílaba) y «para» (dos).",
        "voice": "es-CO-f"
      },
      {
        "text": "Salimos para Limón por la Ruta 32.",
        "tip": "Liga «porla» y «paraLimón» sin pausa.",
        "voice": "es-MX-m"
      },
      {
        "text": "Si no llueve, vamos por la playa; si no, por el bosque.",
        "tip": "Haz una pausa breve después de «si no».",
        "voice": "es-CO-m"
      }
    ],
    "spelling": "La forma «pa’» es oral. En los textos escribe siempre «para», y recuerda que «si no» (condición) se escribe separado y «sino» (al contrario) junto."
  },
  "listening": {
    "title": "La reunión de salida",
    "context": "Es domingo por la tarde en un albergue de San José. Daniela, coordinadora del proyecto, reúne a los voluntarios antes de salir para Tortuguero. Habla con Martín, un voluntario argentino, y con Yuki, una voluntaria japonesa que vive en Madrid.",
    "speakers": [
      {
        "id": "dan",
        "name": "Daniela",
        "voice": "es-CO-f",
        "role": "coordinadora del proyecto"
      },
      {
        "id": "mar",
        "name": "Martín",
        "voice": "es-AR-m",
        "role": "voluntario"
      },
      {
        "id": "yuk",
        "name": "Yuki",
        "voice": "es-ES-f",
        "role": "voluntaria"
      }
    ],
    "script": [
      {
        "speaker": "dan",
        "text": "Bueno, gente, ¡pura vida! Mañana salimos para Tortuguero a las cinco y media. Vamos en buseta por la Ruta 32 hasta La Pavona, y allí tomamos la lancha."
      },
      {
        "speaker": "mar",
        "text": "¿Y si llueve mucho? Leí que en esta época a veces cierran la carretera."
      },
      {
        "speaker": "dan",
        "text": "Sí, por los derrumbes. Si la cierran, salimos por Siquirres, que es más largo pero más seguro. Si no, seguimos el plan normal. Lo decidimos a las cinco, cuando nos llame el conductor."
      },
      {
        "speaker": "yuk",
        "text": "¿Hay que llevar algo especial para las patrullas de noche?"
      },
      {
        "speaker": "dan",
        "text": "Las normas son claras: si están de turno en la playa, usan solo la linterna roja y no hacen fotos. Si ven una tortuga, se quedan detrás de ella y en silencio. Y yo llevaría una camiseta de manga larga, por los mosquitos."
      },
      {
        "speaker": "mar",
        "text": "Yo traje unas botas de montaña. ¿Sirven?"
      },
      {
        "speaker": "dan",
        "text": "Yo, en tu lugar, las cambiaría por unas de hule. En el pueblo las alquilan por tres mil colones la semana. Con barro, las de montaña no se secan nunca."
      },
      {
        "speaker": "yuk",
        "text": "Una última pregunta: el diario de campo, ¿para cuándo es?"
      },
      {
        "speaker": "dan",
        "text": "Para el último día. Es para la bióloga del parque, así que escríbanlo con datos claros. Gracias por venir, de verdad: sin ustedes, muchos nidos no sobrevivirían."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha una vez sin leer. ¿De qué trata la reunión?",
        "exercise": {
          "id": "b1-09-escucha-global",
          "type": "choice",
          "prompt": "Elige la mejor respuesta.",
          "items": [
            {
              "q": "¿Para qué se reúnen?",
              "options": [
                "Para organizar el viaje y explicar las normas del proyecto.",
                "Para despedirse al final del voluntariado.",
                "Para elegir otro destino."
              ],
              "answer": 0,
              "why": "Daniela explica el viaje del día siguiente, el plan B y las normas."
            },
            {
              "q": "¿Cómo es el tono de Daniela?",
              "options": [
                "Enfadado y autoritario.",
                "Práctico, cercano y agradecido.",
                "Inseguro: no sabe qué hacer."
              ],
              "answer": 1,
              "why": "Da instrucciones claras, aconseja y agradece la ayuda."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota los detalles.",
        "exercise": {
          "id": "b1-09-escucha-detalle",
          "type": "choice",
          "prompt": "Responde según la reunión.",
          "items": [
            {
              "q": "¿Qué harán si cierran la Ruta 32?",
              "options": [
                "Esperarán un día en San José.",
                "Irán por Siquirres.",
                "Irán en avioneta."
              ],
              "answer": 1,
              "why": "«Si la cierran, salimos por Siquirres.»"
            },
            {
              "q": "¿Qué aconseja Daniela a Martín sobre las botas?",
              "options": [
                "Que las seque cada noche.",
                "Que compre unas nuevas en San José.",
                "Que las cambie por unas de hule."
              ],
              "answer": 2,
              "why": "«Yo, en tu lugar, las cambiaría por unas de hule.»"
            },
            {
              "q": "¿Para quién es el diario de campo?",
              "options": [
                "Para la bióloga del parque.",
                "Para el conductor.",
                "Para los turistas."
              ],
              "answer": 0,
              "why": "«Es para la bióloga del parque.»"
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Fíjate en la gramática. Completa lo que dicen exactamente.",
        "exercise": {
          "id": "b1-09-escucha-formas",
          "type": "gap",
          "prompt": "Escribe la palabra o forma que usan.",
          "items": [
            {
              "q": "Sí, ___ los derrumbes.",
              "answers": [
                [
                  "por"
                ]
              ],
              "why": "Causa: «por»."
            },
            {
              "q": "Si la cierran, salimos por Siquirres. ___, seguimos el plan normal.",
              "answers": [
                [
                  "Si no",
                  "si no"
                ]
              ],
              "why": "Plan B con «si no»."
            },
            {
              "q": "Y yo ___ una camiseta de manga larga.",
              "answers": [
                [
                  "llevaría"
                ]
              ],
              "why": "Consejo con «yo + condicional»."
            },
            {
              "q": "En el pueblo las alquilan ___ tres mil colones la semana.",
              "answers": [
                [
                  "por"
                ]
              ],
              "why": "Precio: «por»."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Bienvenida al proyecto Arena Viva",
    "genre": "Documento de bienvenida para voluntarios",
    "frame": "Todos los voluntarios reciben este texto al llegar a la estación biológica de Tortuguero.",
    "text": [
      "Te damos la bienvenida a Arena Viva. Gracias por elegirnos para tus vacaciones: tu trabajo de estas semanas es muy importante para las tortugas verdes, que llegan a esta playa entre julio y octubre para desovar. Lee estas normas con atención, porque algunas son obligatorias y otras son solo consejos de quienes ya han pasado por aquí.",
      "Lo obligatorio: si estás de turno, llegas a la caseta diez minutos antes y firmas la hoja de asistencia. Si encuentras un nido en una zona peligrosa, no lo tocas: avisas por radio al guardaparques, que decide si los huevos se trasladan al vivero. Si una tortuga está desovando, nadie se acerca a menos de tres metros. Las fotos con flash están prohibidas por razones evidentes.",
      "Los consejos: nosotros dormiríamos la siesta los días de patrulla, porque las noches son largas. Tampoco gastaríamos mucho en el pueblo el primer día: hay cosas por la mitad de precio en el mercado del jueves. Y si te sobra tiempo, podrías ayudar en la escuela local, que siempre busca voluntarios para las clases de inglés.",
      "Si tienes cualquier duda, pregunta. Y si un día estás cansado, recuerda para qué viniste."
    ],
    "glossary": [
      {
        "es": "la caseta"
      },
      {
        "es": "la hoja de asistencia"
      },
      {
        "es": "trasladar"
      }
    ],
    "tasks": [
      {
        "id": "b1-09-lectura-comprension",
        "type": "choice",
        "title": "Comprensión",
        "prompt": "Responde según el documento.",
        "items": [
          {
            "q": "¿Por qué llegan las tortugas a esta playa?",
            "options": [
              "Para desovar.",
              "Por la comida de los turistas.",
              "Para huir de los mosquitos."
            ],
            "answer": 0,
            "why": "«Llegan a esta playa entre julio y octubre para desovar.»"
          },
          {
            "q": "¿Qué haces si encuentras un nido en una zona peligrosa?",
            "options": [
              "Lo trasladas tú al vivero.",
              "Le haces una foto.",
              "Avisas por radio al guardaparques."
            ],
            "answer": 2,
            "why": "«No lo tocas: avisas por radio al guardaparques.»"
          },
          {
            "q": "¿Por qué conviene esperar al jueves para comprar?",
            "options": [
              "Porque el pueblo cierra los otros días.",
              "Porque en el mercado hay cosas por la mitad de precio.",
              "Porque es el día libre de los voluntarios."
            ],
            "answer": 1,
            "why": "«Hay cosas por la mitad de precio en el mercado del jueves.»"
          }
        ]
      },
      {
        "id": "b1-09-lectura-norma-consejo",
        "type": "classify",
        "title": "¿Norma o consejo?",
        "prompt": "Clasifica cada idea según el documento.",
        "categories": [
          "Es obligatorio",
          "Es un consejo"
        ],
        "items": [
          {
            "text": "Firmar la hoja de asistencia al llegar al turno",
            "cat": 0
          },
          {
            "text": "Dormir la siesta los días de patrulla",
            "cat": 1
          },
          {
            "text": "No acercarse a menos de tres metros de una tortuga",
            "cat": 0
          },
          {
            "text": "Ayudar en la escuela local",
            "cat": 1
          },
          {
            "text": "No hacer fotos con flash",
            "cat": 0
          },
          {
            "text": "No gastar mucho el primer día",
            "cat": 1
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Fíjate en cómo el texto separa normas y consejos, y en «por» y «para».",
      "items": [
        {
          "quote": "si estás de turno, llegas a la caseta diez minutos antes",
          "note": "Regla: «si» + presente y presente."
        },
        {
          "quote": "nosotros dormiríamos la siesta los días de patrulla",
          "note": "Consejo: lo que «nosotros» haríamos, en condicional."
        },
        {
          "quote": "Gracias por elegirnos para tus vacaciones",
          "note": "«Por» con la causa del agradecimiento y «para» con el destino o el objetivo."
        },
        {
          "quote": "recuerda para qué viniste",
          "note": "Pregunta indirecta por el objetivo: «para qué» + indicativo."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combinas las dos clases y recuperas lo de las semanas 7 y 8.",
    "exercises": [
      {
        "id": "b1-09-practica-orden",
        "type": "order",
        "title": "Frases del viaje",
        "prompt": "Ordena las palabras para formar frases completas.",
        "items": [
          {
            "words": [
              "Si",
              "no",
              "hay",
              "lancha,",
              "dormimos",
              "en",
              "La",
              "Pavona."
            ]
          },
          {
            "words": [
              "Yo",
              "llevaría",
              "dos",
              "litros",
              "de",
              "agua",
              "por",
              "persona."
            ]
          },
          {
            "words": [
              "Este",
              "mapa",
              "es",
              "para",
              "los",
              "voluntarios",
              "nuevos."
            ]
          },
          {
            "words": [
              "Llegamos",
              "tarde",
              "por",
              "un",
              "árbol",
              "caído",
              "en",
              "la",
              "carretera."
            ]
          }
        ]
      },
      {
        "id": "b1-09-practica-retrieval",
        "type": "context",
        "title": "Recuperación: semanas 7 y 8",
        "prompt": "Recuperación de semanas anteriores en el contexto del voluntariado. Elige la forma correcta.",
        "items": [
          {
            "context": "Semana 7, relativas. Daniela necesita a alguien para la cocina, pero todavía no sabe quién.",
            "q": "«Busco a alguien que ___ cocinar para veinte personas.»",
            "options": [
              "sabe",
              "sabrá",
              "sepa"
            ],
            "answer": 2,
            "why": "Antecedente buscado: subjuntivo."
          },
          {
            "context": "Semana 7, finalidad. La bióloga explica por qué usan luz roja.",
            "q": "«Usamos luz roja para que las tortugas no ___.»",
            "options": [
              "se asusten",
              "se asustan",
              "asustarse"
            ],
            "answer": 0,
            "why": "Dos sujetos: «para que» + subjuntivo."
          },
          {
            "context": "Semana 8, concesión. Llovió toda la noche, pero el grupo salió a patrullar.",
            "q": "¿Cómo lo cuentas?",
            "options": [
              "Aunque llovía toda la noche, pero salimos.",
              "Aunque llovió toda la noche, salimos a patrullar.",
              "Si llovió toda la noche, salimos a patrullar."
            ],
            "answer": 1,
            "why": "«Aunque» + indicativo, sin «pero»."
          },
          {
            "context": "Semana 8, cortesía. Necesitas que el guardaparques repita una instrucción.",
            "q": "¿Qué le dices?",
            "options": [
              "¿Repetirá eso?",
              "Repita eso.",
              "¿Podría repetirlo, por favor?"
            ],
            "answer": 2,
            "why": "Petición cortés con el condicional de «poder»."
          }
        ]
      },
      {
        "id": "b1-09-practica-transformar",
        "type": "transform",
        "title": "De orden a consejo",
        "prompt": "Convierte cada orden en un consejo con «yo + condicional».",
        "items": [
          {
            "source": "Lleva una chaqueta para la lluvia.",
            "instruction": "Empieza con «Yo…».",
            "answers": [
              "Yo llevaría una chaqueta para la lluvia."
            ],
            "why": "«Llevar» → «llevaría»."
          },
          {
            "source": "No salgas sola por la noche.",
            "instruction": "Empieza con «Yo no…».",
            "answers": [
              "Yo no saldría sola por la noche."
            ],
            "why": "«Salir» → «saldría», irregular."
          },
          {
            "source": "Haz una copia del pasaporte.",
            "instruction": "Empieza con «Yo…».",
            "answers": [
              "Yo haría una copia del pasaporte."
            ],
            "why": "«Hacer» → «haría», irregular."
          }
        ]
      },
      {
        "id": "b1-09-practica-escritura-guiada",
        "type": "open",
        "title": "Mensajes prácticos",
        "prompt": "Escribe cada mensaje en dos o tres frases.",
        "items": [
          {
            "prompt": "Escribe al grupo qué harán el sábado si llueve y si no llueve.",
            "model": "Si el sábado llueve, vamos al museo del jade por la mañana y comemos en el centro. Si no, salimos para el volcán Irazú a las siete.",
            "checklist": [
              "Hay un plan A con «si» + presente y un plan B con «si no».",
              "Usas «por» o «para» al menos una vez."
            ]
          },
          {
            "prompt": "Un amigo va a viajar a Costa Rica en temporada de lluvias. Dale dos consejos sin darle órdenes.",
            "model": "Yo llevaría ropa que se seque rápido y un buen impermeable. También haría las excursiones por la mañana, porque por la tarde suele llover.",
            "checklist": [
              "Usas «yo + condicional» para aconsejar.",
              "Explicas al menos una razón con «porque» o «por»."
            ]
          },
          {
            "prompt": "Escribe una nota para acompañar un regalo de despedida a la familia que te alojó.",
            "model": "Este pequeño regalo es para ustedes, por todo lo que hicieron por mí estas dos semanas. Gracias por la paciencia con mi español y por las mejores comidas del viaje.",
            "checklist": [
              "Usas «para» con el destinatario.",
              "Usas «por» con la causa del agradecimiento."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Organizas una excursión de un día para un grupo (de clase, de trabajo o de amigos). Escribe un mensaje con el plan principal, qué harán si surge un problema, las normas que todos deben cumplir y tus consejos.",
    "context": "El grupo es de unas doce personas. Algunas no se conocen y otras nunca han hecho una excursión de este tipo.",
    "steps": [
      "Decide el destino, el recorrido y la hora de salida, y piensa en dos posibles problemas.",
      "Primer párrafo: el plan principal y el plan B, con «si» + presente y «si no».",
      "Segundo párrafo: dos normas en presente o imperativo y dos consejos con «yo + condicional».",
      "Revisa cada «por» y «para»: pregúntate si mira hacia atrás o por el camino (por) o hacia delante (para). Corrige también «sino» si debía ser «si no»."
    ],
    "useLanguage": [
      "si + presente, presente / futuro",
      "si no, …",
      "yo + condicional",
      "por (causa, recorrido, precio, medio)",
      "para (destino, objetivo, destinatario, plazo)"
    ],
    "model": [
      "¡Hola a todos! El sábado salimos para el volcán Poás a las siete en punto desde la Plaza de la Cultura. Iremos en buseta por la carretera de Alajuela y, si el cráter está despejado, haremos el sendero de la laguna. Si hay mucha neblina, no subimos al mirador: en ese caso, visitamos una finca de café que está a veinte minutos. Si no, comemos en el parque a la una y volvemos a San José por la tarde, antes de que oscurezca.",
      "Dos normas: si alguien se separa del grupo, llama por teléfono a Carlos, y nadie sale del sendero por ningún motivo. La entrada cuesta quince dólares por persona; páguenla por adelantado para ahorrar tiempo. Yo llevaría ropa de abrigo, porque arriba hace frío, y no olvidaría el impermeable. Gracias por apuntarse, ¡nos vemos el sábado!"
    ],
    "checklist": [
      "Hay un plan principal y un plan B con «si» + presente y «si no» o «en ese caso».",
      "Las normas van en presente o imperativo; los consejos, con «yo + condicional».",
      "Uso «por» al menos tres veces y «para» al menos dos, con usos distintos.",
      "El mensaje tiene dos párrafos y un cierre amable."
    ],
    "words": [
      130,
      180
    ]
  },
  "speaking": {
    "intro": "Graba tus respuestas y escúchate: comprueba que no usas futuro detrás de «si» y que pronuncias «para» completo.",
    "tasks": [
      {
        "title": "Un imprevisto en el viaje",
        "prompt": "Coordinas un viaje en grupo y el día de la salida hay un problema (una huelga de transporte, una tormenta, una persona enferma). Habla durante dos minutos: explica qué pasará en cada caso, qué normas se mantienen y qué consejos das al grupo.",
        "prep": [
          "Dos condiciones con plan A y plan B.",
          "Una regla en presente y dos consejos con «yo + condicional».",
          "Al menos cuatro usos distintos de «por» y «para»."
        ],
        "seconds": 120,
        "model": "Bueno, tenemos un problema: hay huelga de autobuses por la subida de precios. Si mañana sigue la huelga, salimos para la costa en dos taxis, por la autopista. Si no, mantenemos el plan. La regla es la de siempre: si alguien se retrasa, avisa por el grupo. Y yo llevaría comida para todo el día, porque…",
        "selfCheck": [
          "¿He hablado al menos dos minutos?",
          "¿He distinguido plan, regla y consejo?",
          "¿He usado «por» y «para» con usos distintos?"
        ]
      },
      {
        "title": "Dos soluciones para un problema",
        "prompt": "Un compañero de viaje propone otra solución al imprevisto. Responde a sus preguntas, aclara por qué prefieres tu plan y negocia una solución intermedia. Practica con alguien que haga de interlocutor o graba las dos voces.",
        "prep": [
          "Prepara dos preguntas con «¿y si…?».",
          "Usa «yo, en tu lugar,…» y «si te parece, …»."
        ],
        "seconds": 90,
        "model": "Entiendo tu idea, pero yo no iría en coche por esa carretera con lluvia. ¿Y si salimos más tarde? Si te parece, esperamos hasta las diez; si para de llover, vamos por la costa, y si no, nos quedamos en la ciudad.",
        "selfCheck": [
          "¿He respondido a sus preguntas y aclarado mis razones?",
          "¿He propuesto una solución intermedia?"
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva tu plan de excursión y estas tarjetas a la próxima clase con tu profesor.",
    "cards": [
      {
        "move": "Plantea",
        "task": "Plantea a tu profesor un problema real de esta semana y pídele dos soluciones: un plan A y un plan B.",
        "phrases": [
          "¿Qué harías si…?",
          "Si no funciona, …"
        ]
      },
      {
        "move": "Aconseja",
        "task": "Dale a tu profesor tres consejos para visitar tu ciudad usando «yo + condicional».",
        "phrases": [
          "Yo iría por…",
          "Yo no comería en…"
        ]
      },
      {
        "move": "Agradece",
        "task": "Agradece algo concreto a tu profesor o a un compañero con «gracias por…» y explica para qué te ha servido.",
        "phrases": [
          "Gracias por…",
          "Me ha servido para…"
        ]
      },
      {
        "move": "Contrasta",
        "task": "Inventa con tu profesor parejas de frases que solo cambian por «por» o «para» y explicad la diferencia («lo hice por ti / lo hice para ti»).",
        "phrases": [
          "Lo hice por…",
          "Lo hice para…"
        ]
      }
    ],
    "bring": "Tu plan de excursión revisado y la grabación del imprevisto."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "¿Qué frase es una regla del grupo?",
        "options": [
          "Si llegas tarde, esperas en recepción.",
          "Si llegas tarde, te esperaremos.",
          "Yo no llegaría tarde."
        ],
        "answer": 0,
        "why": "Presente en las dos partes: regla."
      },
      {
        "type": "choice",
        "q": "«Me quedé en casa ___ el resfriado.»",
        "options": [
          "para",
          "por"
        ],
        "answer": 1,
        "why": "Causa: «por»."
      },
      {
        "type": "listen",
        "q": "Escucha la recomendación. ¿Qué intención tiene?",
        "options": [
          "Da una orden.",
          "Explica una norma.",
          "Aconseja una ruta."
        ],
        "answer": 2,
        "why": "«Yo, en tu lugar» + condicional y «por» + recorrido.",
        "audio": "Yo, en tu lugar, iría por la costa, que es más bonito.",
        "voice": "es-CO-m"
      },
      {
        "type": "gap",
        "q": "Necesito estas fotocopias ___ mañana a primera hora.",
        "answers": [
          [
            "para"
          ]
        ],
        "why": "Plazo: «para»."
      },
      {
        "type": "gap",
        "q": "Si ___ (estar) cerrado el museo, vamos al mercado; ___, entramos a las diez.",
        "answers": [
          [
            "está"
          ],
          [
            "si no"
          ]
        ],
        "why": "«Si» + presente y plan B con «si no»."
      },
      {
        "type": "gap",
        "q": "Yo no ___ (poner) tanta sal en la sopa.",
        "answers": [
          [
            "pondría"
          ]
        ],
        "why": "Consejo con «yo + condicional»; «poner» → «pondría»."
      },
      {
        "type": "order",
        "words": [
          "Cambié",
          "mi",
          "asiento",
          "por",
          "uno",
          "junto",
          "a",
          "la",
          "ventana."
        ],
        "why": "Intercambio: «cambiar algo por algo»."
      },
      {
        "type": "error",
        "sentence": "Estas flores son por mi madre, que cumple años.",
        "answers": [
          "Estas flores son para mi madre, que cumple años."
        ],
        "why": "Destinatario: «para»."
      },
      {
        "type": "error",
        "sentence": "Si mañana hará sol, iremos a la playa.",
        "answers": [
          "Si mañana hace sol, iremos a la playa."
        ],
        "why": "Detrás de «si» va el presente."
      },
      {
        "type": "open",
        "prompt": "Reformulación: convierte estas instrucciones en un plan con alternativa y un consejo. «Salida a las ocho. Lluvia: salida a las diez. Recomendación: botas.»",
        "model": "Si llueve, salimos a las diez; si no, salimos a las ocho. Yo llevaría botas.",
        "checklist": [
          "Usas «si» + presente para la condición.",
          "La alternativa va con «si no», en dos palabras.",
          "El consejo va con «yo + condicional»."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Distinguir una previsión, un plan acordado y una regla con «si» + presente.",
      "Proponer un plan B con «si no» o «en ese caso».",
      "Aconsejar sin dar órdenes con «yo + condicional».",
      "Elegir «por» para causa, recorrido, medio y precio, y «para» para objetivo, destinatario, destino y plazo."
    ],
    "review": [
      "«Si no» (condición) frente a «sino» (al contrario).",
      "El condicional irregular de la semana 8: saldría, haría, pondría, tendría.",
      "«Para que» + subjuntivo de la semana 7."
    ]
  },
  "related": [
    {
      "path": "/condicionales-b1",
      "label": "Clase: Condiciones y consejos en situaciones reales"
    },
    {
      "path": "/gramatica/por-para-razones-objetivos",
      "label": "Clase: Por y para: causa, propósito, plazo, destinatario"
    }
  ]
};
