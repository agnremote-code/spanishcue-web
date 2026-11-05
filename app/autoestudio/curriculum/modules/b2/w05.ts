import type { Module } from "../../types";

/**
 * B2 · semana 5 (checkpoint) · Autoestudio espejo de G239 (condiciones con otros nexos) y G136
 * (como si + imperfecto / pluscuamperfecto de subjuntivo), integrando G128–G135 de las semanas 1 a 4.
 * Repaso autónomo con la convivencia en un departamento de estudiantes ficticio de Córdoba.
 * Audio mediante síntesis; sin acreditación regional.
 */
export const b2w05: Module = {
  "id": "b2-05",
  "level": "b2",
  "week": 5,
  "kind": "checkpoint",
  "title": "Siempre que paguen a tiempo: convivir en Córdoba",
  "subtitle": "Checkpoint: condiciones con otros nexos, «como si» y repaso del subjuntivo y las hipótesis de las semanas 1 a 4",
  "stop": {
    "place": "Córdoba",
    "country": "Argentina"
  },
  "minutes": 150,
  "newObjectives": [
    "b2.gram.g239",
    "b2.gram.g136",
    "b2.voc.w05-alquiler-convivencia",
    "b2.pron.w05-nexos-pausa",
    "b2.lis.w05-reunion-convivencia",
    "b2.read.w05-guia-convivencia",
    "b2.wri.w05-acuerdo-convivencia",
    "b2.spk.w05-negociar-condiciones",
    "b2.fun.w05-poner-condiciones",
    "b2.disc.w05-normas-condiciones",
    "b2.rev.w05-integrar-semanas-1-4"
  ],
  "reviewObjectives": [],
  "prerequisites": [],
  "goal": {
    "canDo": "Puedo poner condiciones con distintos nexos, describir comportamientos con «como si» y combinar todas las formas de subjuntivo y de hipótesis de las semanas 1 a 4 en una negociación real.",
    "steps": [
      "Repasa los nexos de condición, excepción y caso previsto, y la estructura «como si».",
      "Recupera las clases de las semanas 1 a 4 con una tabla de integración y ejercicios mixtos.",
      "Escucha una reunión de compañeros de departamento y lee una guía universitaria de convivencia.",
      "Escribe una propuesta de acuerdo de convivencia, revísala y negocia un alquiler en voz alta."
    ]
  },
  "theory": {
    "intro": "Este checkpoint repasa las dos clases de la semana y recupera las ocho de las semanas 1 a 4. El escenario es un departamento de estudiantes en Córdoba: un dueño que pone condiciones, un compañero que actúa como si fuera el jefe y un semestre que podría haber salido de otra manera.",
    "parts": [
      {
        "heading": "Más allá de «si»: la condición necesaria",
        "body": [
          "«Siempre que», «siempre y cuando», «con tal de que» y «a condición de que» presentan una condición imprescindible: equivalen a «solo si». Con este valor llevan siempre subjuntivo. «A condición de que» es el más formal; «con tal de que» es frecuente en la conversación. Si el sujeto es el mismo, puedes usar «con tal de» o «a condición de» + infinitivo.",
          "Cuidado con «siempre que»: con indicativo significa «cada vez que» y no pone ninguna condición. «Siempre que llueve, se moja el pasillo» describe una costumbre; «les dejo la terraza siempre que la limpien» pone una condición. La concordancia sigue la regla de la semana 2: con un verbo principal en pasado o en condicional, el nexo pide imperfecto de subjuntivo."
        ],
        "table": {
          "caption": "Condición necesaria (= solo si)",
          "head": [
            "Nexo",
            "Registro",
            "Ejemplo"
          ],
          "rows": [
            [
              "siempre que",
              "general",
              "Pueden tener una mascota siempre que sea pequeña."
            ],
            [
              "siempre y cuando",
              "general, enfático",
              "Bajo el precio siempre y cuando firmen por dos años."
            ],
            [
              "con tal de que",
              "coloquial",
              "Te presto mi bici con tal de que me la devuelvas el lunes."
            ],
            [
              "a condición de que",
              "formal",
              "El contrato se renueva a condición de que no haya deudas."
            ]
          ]
        },
        "examples": [
          {
            "es": "El dueño dijo que nos dejaría pintar siempre que eligiéramos colores claros.",
            "note": "Marco pasado: imperfecto de subjuntivo."
          },
          {
            "es": "Siempre que viene mi hermana, dormimos en el living.",
            "note": "«Cada vez que»: indicativo."
          }
        ],
        "mistakes": [
          {
            "wrong": "Te dejo mi cuarto el finde con tal de que lo dejas ordenado.",
            "right": "Te dejo mi cuarto el finde con tal de que lo dejes ordenado.",
            "why": "Como condición necesaria, «con tal de que» lleva siempre subjuntivo."
          }
        ]
      },
      {
        "heading": "Excepciones, casos previstos y avisos",
        "body": [
          "«A no ser que», «a menos que», «salvo que» y «excepto que» introducen la única excepción: equivalen a «si no». También llevan subjuntivo. «Salvo que» con indicativo, en cambio, significa «excepto el hecho de que» y presenta un dato real: «el departamento es perfecto, salvo que el ascensor se rompe cada semana».",
          "«En caso de que» + subjuntivo prevé una posibilidad y dice qué hacer si llega; «por si» + indicativo explica una precaución que se toma ya. Por último, «como» + subjuntivo al principio de la frase es un aviso o una amenaza coloquial, a menudo en broma; con indicativo, «como» es causal."
        ],
        "table": {
          "caption": "Tres maneras de pensar en lo que puede pasar",
          "head": [
            "Estructura",
            "Qué hace",
            "Ejemplo"
          ],
          "rows": [
            [
              "a no ser que + subjuntivo",
              "única excepción",
              "Pagamos el día cinco, a no ser que caiga en domingo."
            ],
            [
              "en caso de que + subjuntivo",
              "caso previsto",
              "En caso de que se corte el agua, llamen a la administración."
            ],
            [
              "por si + indicativo",
              "precaución actual",
              "Dejo una llave en la portería por si pierden la suya."
            ],
            [
              "como + subjuntivo",
              "aviso coloquial",
              "Como vuelvas a dejar los platos sucios, te los pongo en la cama."
            ]
          ]
        },
        "examples": [
          {
            "es": "No subiremos el alquiler, salvo que suban las expensas.",
            "note": "Excepción: subjuntivo."
          },
          {
            "es": "Como llegaste tarde, ya no quedaba pizza.",
            "note": "«Como» causal: indicativo."
          }
        ],
        "mistakes": [
          {
            "wrong": "Llevo paraguas por si llueva.",
            "right": "Llevo paraguas por si llueve.",
            "why": "«Por si» va con indicativo."
          },
          {
            "wrong": "En caso de que pierdes la llave, avísame.",
            "right": "En caso de que pierdas la llave, avísame.",
            "why": "«En caso de que» va con subjuntivo."
          }
        ],
        "tip": "En un texto formal, evita «como» + subjuntivo: suena a amenaza. Usa «en caso de que» o «si»."
      },
      {
        "heading": "«Como si»: comparar con algo imaginado",
        "body": [
          "«Como si» compara lo que ves con una situación irreal o no comprobada. Solo admite dos tiempos: imperfecto de subjuntivo si lo imaginado ocurre al mismo tiempo («Nico habla como si fuera el dueño») y pluscuamperfecto si es anterior («entró como si no hubiera pasado nada»). El tiempo del verbo principal no cambia esta elección: habla, habló o hablará «como si fuera el dueño».",
          "Después de «como si» nunca va presente de subjuntivo, indicativo ni condicional. Para una manera real y conocida se usa «como» + indicativo («hazlo como te expliqué»). Y para protestar en tono coloquial existe «¡ni que…!»: «¡Ni que fuera tu empleada!» significa «te comportas como si lo fuera, pero no lo soy»."
        ],
        "examples": [
          {
            "es": "Camila limpia la cocina como si viniera la inspección.",
            "note": "Imaginado y simultáneo: imperfecto."
          },
          {
            "es": "Nos miró como si hubiéramos roto algo.",
            "note": "Causa imaginada anterior: pluscuamperfecto."
          },
          {
            "es": "¡Ni que hubieras pagado tú el sillón!",
            "note": "Protesta coloquial."
          }
        ],
        "mistakes": [
          {
            "wrong": "Habla como si sea el dueño del departamento.",
            "right": "Habla como si fuera el dueño del departamento.",
            "why": "Después de «como si», nunca presente de subjuntivo."
          }
        ]
      },
      {
        "heading": "Integración: las clases de las semanas 1 a 4 en el mismo departamento",
        "body": [
          "Las condiciones y las comparaciones de esta semana se apoyan en todo lo anterior. En la semana 1 formaste el imperfecto de subjuntivo y contaste peticiones en pasado; en la semana 2, la correlación de tiempos y las hipótesis con «si»; en la semana 3, las condiciones irreales del pasado y el pluscuamperfecto de subjuntivo; en la semana 4, el condicional compuesto y las condicionales mixtas.",
          "En una negociación real se mezclan: «el dueño nos pidió que pagáramos el depósito (semana 1); si lo hubiéramos leído antes (semana 3), hoy no estaríamos discutiendo (semana 4); por eso, aceptamos siempre que nos dé un recibo (semana 5)». Usa la tabla para comprobar que reconoces cada clase."
        ],
        "table": {
          "caption": "Las ocho clases anteriores en el caso de Córdoba",
          "head": [
            "Semana y clase",
            "Ejemplo en el departamento"
          ],
          "rows": [
            [
              "1 · G128 Imperfecto de subjuntivo",
              "Ojalá el departamento tuviera balcón."
            ],
            [
              "1 · G129 Influencia en pasado",
              "La dueña nos pidió que no colgáramos nada en las paredes."
            ],
            [
              "2 · G130 Correlación temporal",
              "Quiere que paguemos el día cinco / quería que pagáramos el día cinco."
            ],
            [
              "2 · G131 Si + imperfecto de subjuntivo",
              "Si tuviéramos lavarropas, no iríamos al lavadero."
            ],
            [
              "3 · G132 Condiciones del pasado",
              "Si hubiéramos revisado la calefacción, no habríamos pasado frío en junio."
            ],
            [
              "3 · G133 Pluscuamperfecto de subjuntivo",
              "Nos molestó que nadie hubiera pagado la luz."
            ],
            [
              "4 · G134 Condicional compuesto",
              "Habrías podido avisar que venían tus primos."
            ],
            [
              "4 · G135 Condicionales mixtas",
              "Si no hubiéramos firmado por un año, ahora viviríamos más cerca de la facultad."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "La dueña aceptó que traigamos un gato siempre que lo castremos.",
            "right": "La dueña aceptó que trajéramos un gato siempre que lo castráramos.",
            "why": "Con «aceptó» (pasado), los dos subjuntivos van en imperfecto: correlación de la semana 2."
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Primero decide qué tipo de relación hay (requisito, excepción, previsión, comparación imaginada). Después elige el modo y el tiempo.",
    "exercises": [
      {
        "id": "b2-05-g-nexos",
        "type": "gap",
        "prompt": "Completa con la forma correcta del verbo entre paréntesis.",
        "items": [
          {
            "q": "Les renuevo el contrato siempre y cuando ___ (pagar) las expensas a tiempo.",
            "answers": [
              [
                "paguen"
              ]
            ],
            "why": "Condición necesaria: subjuntivo."
          },
          {
            "q": "Siempre que ___ (llover), se moja la ropa del balcón.",
            "answers": [
              [
                "llueve"
              ]
            ],
            "why": "«Siempre que» = cada vez que: indicativo."
          },
          {
            "q": "Dejé comida en la heladera por si ___ (llegar) con hambre.",
            "answers": [
              [
                "llegas",
                "llegaban",
                "llegabas"
              ]
            ],
            "why": "«Por si» + indicativo."
          },
          {
            "q": "El dueño prometió que no subiría el precio, a menos que ___ (aumentar) los impuestos.",
            "answers": [
              [
                "aumentaran",
                "aumentasen"
              ]
            ],
            "why": "Excepción en un marco pasado: imperfecto de subjuntivo."
          },
          {
            "q": "Nico entra a mi cuarto como si ___ (ser) suyo.",
            "answers": [
              [
                "fuera",
                "fuese"
              ]
            ],
            "why": "«Como si» + imperfecto: imaginado y simultáneo."
          },
          {
            "q": "Al día siguiente nos saludó como si no ___ (discutir) la noche anterior.",
            "answers": [
              [
                "hubiéramos discutido",
                "hubiésemos discutido"
              ]
            ],
            "why": "«Como si» + pluscuamperfecto: anterior."
          },
          {
            "q": "En caso de que el portero no ___ (estar), dejen el paquete en el kiosco.",
            "answers": [
              [
                "esté"
              ]
            ],
            "why": "«En caso de que» + subjuntivo."
          }
        ]
      },
      {
        "id": "b2-05-g-sentido",
        "type": "choice",
        "prompt": "Elige la opción que expresa lo que se indica.",
        "items": [
          {
            "q": "Quieres decir «solo si nos dejan usar la terraza».",
            "options": [
              "Firmamos, por si nos dejan usar la terraza.",
              "Firmamos con tal de que nos dejen usar la terraza.",
              "Firmamos, como nos dejan usar la terraza."
            ],
            "answer": 1,
            "why": "«Con tal de que» = solo si."
          },
          {
            "q": "Quieres advertir en broma a un compañero.",
            "options": [
              "Como te comas mi yogur otra vez, te cambio la clave del wifi.",
              "En caso de que te comas mi yogur, te cambio la clave del wifi.",
              "Por si te comes mi yogur, te cambio la clave del wifi."
            ],
            "answer": 0,
            "why": "«Como» + subjuntivo: aviso coloquial."
          },
          {
            "q": "Describes cómo llegó tu compañera: estaba agotada, pero no sabes por qué.",
            "options": [
              "Llegó como si corría una maratón.",
              "Llegó como si correría una maratón.",
              "Llegó como si hubiera corrido una maratón."
            ],
            "answer": 2,
            "why": "Causa imaginada anterior: pluscuamperfecto."
          },
          {
            "q": "Quieres decir que el departamento es bueno, pero hay un problema real.",
            "options": [
              "Es luminoso, salvo que la cocina es diminuta.",
              "Es luminoso, salvo que la cocina sea diminuta.",
              "Es luminoso, a no ser que la cocina sea diminuta."
            ],
            "answer": 0,
            "why": "«Salvo que» + indicativo = excepto el hecho de que."
          }
        ]
      },
      {
        "id": "b2-05-g-reformular",
        "type": "open",
        "prompt": "Reformula cada texto de partida según la consigna. Después compara con el modelo: hay más de una versión correcta.",
        "items": [
          {
            "prompt": "Texto de partida: «Pueden traer invitados, pero solo si avisan antes». Reformúlalo con un nexo de condición necesaria formal.",
            "model": "Pueden traer invitados a condición de que avisen antes.",
            "checklist": [
              "Uso «a condición de que» o «siempre y cuando» con subjuntivo.",
              "Conservo el sentido de «solo si».",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Pagaremos el día diez; si hay feriado, no». Reformúlalo con un nexo de excepción.",
            "model": "Pagaremos el día diez, a no ser que sea feriado.",
            "checklist": [
              "Uso «a no ser que», «a menos que» o «salvo que» + subjuntivo.",
              "La excepción equivale a «si no».",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Nico da órdenes. No es el dueño». Une las ideas con «como si».",
            "model": "Nico da órdenes como si fuera el dueño.",
            "checklist": [
              "Uso «como si» + imperfecto de subjuntivo.",
              "La comparación es imaginada y simultánea.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: la dueña, en marzo: «Les dejo tener una planta grande si la riegan en el balcón». Cuéntalo hoy con «La dueña nos dijo…» y un nexo de condición necesaria (integración de las semanas 1 y 5).",
            "model": "La dueña nos dijo que nos dejaba tener una planta grande siempre que la regáramos en el balcón.",
            "checklist": [
              "Paso la condición al marco pasado: imperfecto de subjuntivo.",
              "Uso un nexo de condición necesaria en lugar de «si».",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Léxico para alquilar y compartir vivienda. Muchas expresiones aparecen en contratos y en mensajes del grupo de la casa.",
    "groups": [
      {
        "title": "El contrato",
        "items": [
          {
            "es": "el depósito",
            "note": "dinero que se deja como garantía al alquilar"
          },
          {
            "es": "las expensas",
            "note": "en Argentina, gastos comunes del edificio"
          },
          {
            "es": "el garante",
            "note": "persona que responde si el inquilino no paga"
          },
          {
            "es": "rescindir el contrato",
            "note": "terminarlo antes de tiempo"
          },
          {
            "es": "dar aviso con un mes de anticipación",
            "note": "avisar treinta días antes"
          }
        ]
      },
      {
        "title": "La convivencia",
        "items": [
          {
            "es": "repartir los gastos",
            "note": "dividir lo que se paga entre todos"
          },
          {
            "es": "hacerse cargo de la limpieza",
            "note": "asumir esa tarea"
          },
          {
            "es": "el cronograma de tareas",
            "note": "calendario de quién hace qué"
          },
          {
            "es": "respetar el descanso",
            "note": "no hacer ruido en horas de sueño"
          },
          {
            "es": "los espacios comunes",
            "note": "cocina, living, baño compartido"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b2-05-v-casa",
        "type": "match",
        "prompt": "Relaciona cada expresión con un mensaje del grupo de la casa.",
        "pairs": [
          {
            "left": "repartir los gastos",
            "right": "La luz salió 30.000; son 10.000 por cabeza."
          },
          {
            "left": "respetar el descanso",
            "right": "Por favor, nada de música después de las doce."
          },
          {
            "left": "dar aviso con un mes de anticipación",
            "right": "Me voy en diciembre; se lo digo hoy al dueño."
          },
          {
            "left": "el cronograma de tareas",
            "right": "Esta semana te toca a ti sacar la basura, Cami."
          },
          {
            "left": "el depósito",
            "right": "Nos devuelven los dos meses que pagamos al entrar."
          },
          {
            "left": "las expensas",
            "right": "Subieron los gastos del edificio por el ascensor nuevo."
          }
        ],
        "why": "Cada mensaje ilustra una parte del alquiler o de la convivencia."
      }
    ]
  },
  "pronunciation": {
    "focus": "Nexos largos como un solo bloque y pausa antes del nexo.",
    "explanation": [
      "Los nexos de varias palabras se pronuncian sin cortes internos: «siempre_y_cuando», «a_no_ser_que», «con_tal_de_que», «como_si». Si haces una pausa en el medio, el oyente pierde la relación. La pausa natural va antes del nexo, cuando la condición sigue a la idea principal: «les bajo el precio | siempre y cuando firmen por dos años».",
      "En «como si», la fuerza recae en «co» y en el verbo que sigue: «CO-mo si FUE-ra el dueño». En «¡ni que…!», la voz sube con sorpresa. Escucha, repite y grábate en tu dispositivo; la voz sintética es solo una referencia."
    ],
    "examples": [
      {
        "es": "Les bajo el precio | siempre y cuando firmen por dos años.",
        "note": "Pausa antes del nexo, nexo sin cortes."
      },
      {
        "es": "Entró como si no hubiera pasado nada.",
        "note": "«como_si» enlazado."
      },
      {
        "es": "¡Ni que fuera tu secretaria!",
        "note": "Subida de sorpresa."
      }
    ],
    "perceive": {
      "id": "b2-05-p-oido",
      "type": "listen",
      "prompt": "Escucha cada frase y elige el nexo que oyes.",
      "items": [
        {
          "q": "¿Qué nexo oyes en la frase sobre la mascota?",
          "options": [
            "siempre que",
            "a no ser que",
            "por si"
          ],
          "answer": 1,
          "audio": "Pueden tener un perro, a no ser que el consorcio lo prohíba.",
          "voice": "es-AR-m",
          "why": "«A no ser que» introduce la excepción."
        },
        {
          "q": "¿Qué nexo oyes en la frase sobre la llave?",
          "options": [
            "en caso de que",
            "con tal de que",
            "por si"
          ],
          "answer": 2,
          "audio": "Dejo una copia de la llave en el kiosco, por si alguien se queda afuera.",
          "voice": "es-AR-f",
          "why": "«Por si» + indicativo: precaución."
        },
        {
          "q": "¿Qué oyes en la frase sobre el compañero?",
          "options": [
            "como si fuera",
            "como era",
            "como si sea"
          ],
          "answer": 0,
          "audio": "Organiza la heladera como si fuera el jefe de la casa.",
          "voice": "es-AR-m",
          "why": "«Como si» + imperfecto de subjuntivo."
        },
        {
          "q": "¿Qué nexo oyes en la frase sobre el contrato?",
          "options": [
            "a menos que",
            "siempre y cuando",
            "salvo que"
          ],
          "answer": 1,
          "audio": "Les renuevo el contrato siempre y cuando no haya quejas de los vecinos.",
          "voice": "es-AR-f",
          "why": "«Siempre y cuando» = solo si."
        }
      ]
    },
    "produce": [
      {
        "text": "Aceptamos el aumento siempre y cuando arreglen la calefacción.",
        "tip": "Di «siempre_y_cuando» de un tirón.",
        "voice": "es-AR-f"
      },
      {
        "text": "Firmamos hoy, a no ser que encuentren otro problema.",
        "tip": "Pausa breve después de «hoy».",
        "voice": "es-AR-m"
      },
      {
        "text": "Nos miró como si hubiéramos roto la ventana.",
        "tip": "Enlaza «como_si_hubiéramos».",
        "voice": "es-AR-f"
      },
      {
        "text": "¡Ni que fuéramos tus empleados!",
        "tip": "Sube la voz en «fuéramos».",
        "voice": "es-AR-m"
      }
    ]
  },
  "listening": {
    "title": "Reunión de domingo en el departamento de Nueva Córdoba",
    "context": "Valentina, Camila y Nicolás comparten un departamento en el barrio de estudiantes de Córdoba. El dueño quiere renovarles el contrato con condiciones nuevas, y además hay tensiones por la convivencia. Se reúnen en la cocina para decidir. Escucha primero sin leer. Las voces son sintéticas y no representan una variedad regional verificada.",
    "speakers": [
      {
        "id": "va",
        "name": "Valentina",
        "voice": "es-AR-f",
        "role": "Estudiante de Arquitectura, habló con el dueño"
      },
      {
        "id": "ni",
        "name": "Nicolás",
        "voice": "es-AR-m",
        "role": "Estudiante de Derecho"
      },
      {
        "id": "ca",
        "name": "Camila",
        "voice": "es-CL-f",
        "role": "Estudiante de intercambio de Chile"
      }
    ],
    "script": [
      {
        "speaker": "va",
        "text": "Bueno, les cuento lo que dijo el dueño. Nos renueva el contrato por un año siempre y cuando aceptemos un aumento del quince por ciento. También nos pidió que pagáramos las expensas directamente al administrador. Y dijo que no subiría más el precio, a no ser que aumenten los impuestos municipales."
      },
      {
        "speaker": "ni",
        "text": "¿Quince por ciento? Si hubiéramos negociado en marzo, cuando se fue el vecino de arriba, habríamos conseguido algo mejor. Ahora sabe que estamos cómodos. Yo aceptaría con tal de que arregle de una vez la calefacción. El invierno pasado estudiamos con campera como si viviéramos en la Antártida."
      },
      {
        "speaker": "ca",
        "text": "Estoy de acuerdo con lo de la calefacción. Pero antes de firmar, quiero hablar de otra cosa. Nico, no te enojes, pero a veces organizas la casa como si fueras el dueño. La semana pasada cambiaste el cronograma de limpieza sin preguntarnos, y al día siguiente nos hablaste como si no hubiera pasado nada."
      },
      {
        "speaker": "ni",
        "text": "Tienes razón, habría podido consultarles. Lo cambié porque Valentina tenía exámenes y pensé que la ayudaba. Si fuera menos impulsivo, se lo habría preguntado primero. Perdón."
      },
      {
        "speaker": "va",
        "text": "Gracias por decirlo. Propongo esto: firmamos, siempre que el dueño ponga por escrito lo de la calefacción. En caso de que no la arregle antes de mayo, le pedimos que nos descuente ese mes. Y el cronograma solo se cambia si estamos los tres de acuerdo."
      },
      {
        "speaker": "ca",
        "text": "Me parece bien. Una cosa más: en mi país los contratos de estudiantes suelen ser por semestre. Si me hubieran explicado aquí que eran anuales, habría buscado otra opción. Pero ahora estoy contenta, así que firmo, a menos que mi universidad me pida volver antes. Por si acaso, quiero que el contrato diga que puedo irme dando aviso con un mes de anticipación."
      },
      {
        "speaker": "ni",
        "text": "Perfecto. Y como alguien vuelva a dejar la sartén sucia en la pileta toda la noche, le toca lavar los platos una semana entera. Lo digo en broma… más o menos."
      },
      {
        "speaker": "va",
        "text": "¡Ni que fueras el dueño, Nico! Bueno, lo anoto igual. Mañana le escribo al dueño con nuestras condiciones y les reenvío su respuesta, por si quieren cambiar algo antes de firmar."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la reunión completa. ¿Qué deciden?",
        "exercise": {
          "id": "b2-05-l-global",
          "type": "choice",
          "prompt": "Elige la respuesta que mejor resume la reunión.",
          "items": [
            {
              "q": "¿Cuál es el resultado de la reunión?",
              "options": [
                "Deciden mudarse a otro departamento.",
                "Rechazan el aumento y rompen el contrato.",
                "Aceptan renovar con condiciones y acuerdan reglas de convivencia."
              ],
              "answer": 2,
              "why": "Firman con condiciones y cambian la regla del cronograma."
            },
            {
              "q": "¿Qué tono predomina?",
              "options": [
                "Tenso al principio, pero conciliador.",
                "Agresivo de principio a fin.",
                "Indiferente."
              ],
              "answer": 0,
              "why": "Camila plantea una queja, Nicolás se disculpa y llegan a un acuerdo."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota cada condición.",
        "exercise": {
          "id": "b2-05-l-detalle",
          "type": "choice",
          "prompt": "Responde con los datos del audio.",
          "items": [
            {
              "q": "¿Con qué condición aceptaría Nicolás el aumento?",
              "options": [
                "Que el dueño baje las expensas.",
                "Que el dueño arregle la calefacción.",
                "Que el contrato sea por semestre."
              ],
              "answer": 1,
              "why": "«Aceptaría con tal de que arregle de una vez la calefacción»."
            },
            {
              "q": "¿Qué harán si la calefacción no está arreglada en mayo?",
              "options": [
                "Pedir que les descuente ese mes.",
                "Irse del departamento.",
                "Comprar una estufa entre todos."
              ],
              "answer": 0,
              "why": "«En caso de que no la arregle antes de mayo, le pedimos que nos descuente ese mes»."
            },
            {
              "q": "¿Qué quiere Camila que diga el contrato?",
              "options": [
                "Que puede traer invitados.",
                "Que el precio no subirá nunca.",
                "Que puede irse avisando con un mes de anticipación."
              ],
              "answer": 2,
              "why": "Lo pide «por si acaso»."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Fíjate en cómo combinan las clases de este checkpoint. Lee la transcripción después de responder.",
        "exercise": {
          "id": "b2-05-l-forma",
          "type": "classify",
          "prompt": "Clasifica cada fragmento según la clase que repasa.",
          "categories": [
            "Nexos de condición (semana 5)",
            "«Como si» (semana 5)",
            "Semanas 1 y 2: peticiones e hipótesis",
            "Semanas 3 y 4: pasado irreal y mixtas"
          ],
          "items": [
            {
              "text": "siempre y cuando aceptemos un aumento",
              "cat": 0,
              "why": "Condición necesaria."
            },
            {
              "text": "como si viviéramos en la Antártida",
              "cat": 1,
              "why": "Comparación imaginada simultánea."
            },
            {
              "text": "nos pidió que pagáramos las expensas",
              "cat": 2,
              "why": "Petición en pasado (semana 1)."
            },
            {
              "text": "si hubiéramos negociado en marzo, habríamos conseguido algo mejor",
              "cat": 3,
              "why": "Condición irreal del pasado (semana 3)."
            },
            {
              "text": "si fuera menos impulsivo, se lo habría preguntado",
              "cat": 3,
              "why": "Condicional mixta: rasgo → pasado (semana 4)."
            },
            {
              "text": "como si no hubiera pasado nada",
              "cat": 1,
              "why": "Comparación imaginada anterior."
            },
            {
              "text": "a menos que mi universidad me pida volver antes",
              "cat": 0,
              "why": "Excepción."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Compartir vivienda sin perder amigos: guía para estudiantes",
    "genre": "Guía informativa de una oficina universitaria",
    "frame": "Texto original de SpanishCue escrito como guía de la oficina de alojamiento de una universidad ficticia de Córdoba. Los casos y los nombres son inventados; no es asesoramiento legal.",
    "text": [
      "Cada marzo, miles de estudiantes llegan a Córdoba y comparten departamento por primera vez. La experiencia suele ser buena, siempre que se cumplan algunas reglas básicas desde el principio. Esta guía reúne las consultas más frecuentes que recibimos el año pasado y algunos casos reales, con los nombres cambiados.",
      "Antes de firmar, lean el contrato completo. Muchos propietarios aceptan estudiantes sin garante a condición de que paguen un depósito de dos meses. No firmen, a menos que el contrato indique cuándo y cómo se devolverá ese dinero. En caso de que el departamento tenga daños previos, sáquenles fotos el primer día y envíenlas al propietario por escrito. Lucas, estudiante de Medicina, nos escribió en noviembre: «Si hubiera sacado fotos de la mancha del techo, no me habrían descontado medio depósito». Por si alguna vez lo necesitan, guarden también todos los recibos.",
      "La convivencia exige acuerdos explícitos. Recomendamos que, durante la primera semana, cada grupo escriba un cronograma de tareas y decida cómo repartirá los gastos. Las reglas funcionan mejor si nadie las impone: cuando una persona organiza la casa como si fuera la propietaria, los demás dejan de sentir que las normas son suyas. Una estudiante de intercambio nos contó que su compañero actuaba como si hubiera vivido allí toda la vida y ella acabara de llegar de visita. Se sintió una invitada en su propia casa.",
      "El dinero merece un apartado propio. Lo más justo es repartir los gastos fijos en partes iguales, a no ser que alguien ocupe una habitación mucho más grande; en ese caso, puede pagar un poco más. Abran una cuenta común o una planilla compartida en la primera semana, por si surgen dudas más adelante. Una estudiante de Jujuy nos contó que, durante meses, su compañera pagaba la luz con retraso como si las facturas llegaran solas. «Ojalá le hubiera dicho algo en abril», nos escribió. «Si lo hubiera hecho, no nos habrían cortado el servicio en pleno invierno».",
      "Los conflictos más comunes tienen que ver con el ruido, la limpieza y las visitas. Siempre que hay un problema, conviene hablarlo en persona y pronto. Un grupo de tercer año nos explicó su método: cualquiera puede invitar a alguien a dormir, con tal de que avise con un día de anticipación y no sea más de dos veces por semana. «Si lo hubiéramos acordado desde marzo», reconoció una de ellas, «hoy no estaríamos tan cansados de discutir».",
      "Por último, piensen en la salida desde la entrada. Si un estudiante tiene que irse antes de terminar el contrato, normalmente puede hacerlo dando aviso con un mes de anticipación, salvo que el contrato diga otra cosa. Nuestra oficina revisa contratos de manera gratuita: si nos los hubieran traído antes, muchos de los casos de esta guía no habrían existido. Pidan turno; no hace falta esperar a que haya un problema."
    ],
    "glossary": [
      {
        "es": "el propietario",
        "note": "dueño de la vivienda"
      },
      {
        "es": "descontar",
        "note": "restar una cantidad de un pago"
      },
      {
        "es": "pedir turno",
        "note": "en Argentina, reservar una cita"
      }
    ],
    "tasks": [
      {
        "id": "b2-05-r-comprension",
        "type": "choice",
        "prompt": "Responde según la guía.",
        "items": [
          {
            "q": "¿Cuándo recomienda la guía no firmar un contrato?",
            "options": [
              "Cuando el propietario pide un depósito.",
              "Cuando no dice cómo se devolverá el depósito.",
              "Cuando no hay garante."
            ],
            "answer": 1,
            "why": "«No firmen, a menos que el contrato indique cuándo y cómo se devolverá ese dinero»."
          },
          {
            "q": "¿Qué error cometió Lucas?",
            "options": [
              "No sacó fotos de un daño previo.",
              "No pagó el depósito.",
              "Se fue sin avisar."
            ],
            "answer": 0,
            "why": "«Si hubiera sacado fotos de la mancha del techo…»."
          },
          {
            "q": "¿Qué regla de visitas usa el grupo de tercer año?",
            "options": [
              "No se permiten visitas.",
              "Las visitas solo los fines de semana.",
              "Visitas con un día de aviso y como máximo dos veces por semana."
            ],
            "answer": 2,
            "why": "Cuarto párrafo."
          }
        ]
      },
      {
        "id": "b2-05-r-interpretar",
        "type": "open",
        "prompt": "Interpreta la guía y relaciona sus formas con las clases del checkpoint.",
        "items": [
          {
            "prompt": "En 80–100 palabras, explica por qué la guía usa tantas condiciones irreales del pasado en las citas de estudiantes y qué aporta «como si» en el tercer párrafo. Cita dos ejemplos.",
            "model": "Las citas de estudiantes usan condiciones irreales del pasado porque muestran errores ya cometidos y sus consecuencias: «si hubiera sacado fotos…, no me habrían descontado medio depósito». Así la guía no da solo órdenes, sino que convence con experiencias reales. «Como si», en cambio, describe un comportamiento que molesta sin acusar directamente: el compañero actuaba «como si hubiera vivido allí toda la vida». La comparación imaginada hace visible el problema: una persona se adueña de un espacio que es de todos.",
            "checklist": [
              "Explico la función de las condiciones irreales en las citas.",
              "Explico qué aporta «como si».",
              "Cito dos ejemplos literales."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo la guía combina nexos, «como si» y formas de las semanas anteriores.",
      "items": [
        {
          "quote": "Muchos propietarios aceptan estudiantes sin garante a condición de que paguen un depósito de dos meses.",
          "note": "Nexo formal de condición necesaria + presente de subjuntivo."
        },
        {
          "quote": "Siempre que hay un problema, conviene hablarlo en persona y pronto.",
          "note": "Aquí «siempre que» lleva indicativo: significa «cada vez que»."
        },
        {
          "quote": "su compañero actuaba como si hubiera vivido allí toda la vida y ella acabara de llegar de visita",
          "note": "Dos «como si» en una frase: uno anterior (pluscuamperfecto) y otro simultáneo (imperfecto)."
        },
        {
          "quote": "si nos los hubieran traído antes, muchos de los casos de esta guía no habrían existido",
          "note": "Repaso de la semana 3: condición y resultado irreales en el pasado."
        }
      ]
    }
  },
  "practice": {
    "intro": "Este bloque integra las semanas 1 a 5. Cada ejercicio indica qué clases recupera.",
    "exercises": [
      {
        "id": "b2-05-x-integracion",
        "type": "gap",
        "prompt": "Integración de las semanas 1 a 4 (G128–G135): completa con la forma adecuada del verbo entre paréntesis.",
        "items": [
          {
            "q": "Semana 1 · La dueña nos prohibió que ___ (hacer) fiestas entre semana.",
            "answers": [
              [
                "hiciéramos",
                "hiciésemos"
              ]
            ],
            "why": "Influencia en pasado + imperfecto de subjuntivo; hicieron → hiciéramos."
          },
          {
            "q": "Semana 2 · El administrador nos ha pedido que ___ (dejar) libre la cochera el sábado.",
            "answers": [
              [
                "dejemos"
              ]
            ],
            "why": "Pretérito perfecto: marco presente."
          },
          {
            "q": "Semana 2 · Si el departamento ___ (tener) lavarropas, ahorraríamos mucho tiempo.",
            "answers": [
              [
                "tuviera",
                "tuviese"
              ]
            ],
            "why": "Hipótesis sobre el presente."
          },
          {
            "q": "Semana 3 · Me extrañó que nadie ___ (cerrar) la puerta del balcón antes de la tormenta.",
            "answers": [
              [
                "hubiera cerrado",
                "hubiese cerrado"
              ]
            ],
            "why": "Reacción pasada a algo anterior."
          },
          {
            "q": "Semana 4 · Si hubiéramos alquilado más cerca de la facultad, ahora ___ (dormir) una hora más.",
            "answers": [
              [
                "dormiríamos"
              ]
            ],
            "why": "Mixta: pasado → presente."
          },
          {
            "q": "Semana 4 · Nico ___ (poder) avisar que traía a cinco amigos a cenar.",
            "answers": [
              [
                "habría podido",
                "hubiera podido"
              ]
            ],
            "why": "Reproche atenuado."
          }
        ]
      },
      {
        "id": "b2-05-x-orden",
        "type": "order",
        "prompt": "Ordena las palabras para formar frases de la convivencia.",
        "items": [
          {
            "words": [
              "Pueden",
              "usar",
              "la",
              "terraza",
              "con",
              "tal",
              "de",
              "que",
              "la",
              "dejen",
              "limpia."
            ],
            "why": "Condición necesaria coloquial + subjuntivo."
          },
          {
            "words": [
              "Camila",
              "nos",
              "miró",
              "como",
              "si",
              "hubiéramos",
              "dicho",
              "algo",
              "terrible."
            ],
            "why": "«Como si» + pluscuamperfecto: anterior."
          },
          {
            "words": [
              "Si",
              "el",
              "dueño",
              "nos",
              "bajara",
              "el",
              "precio,",
              "firmaríamos",
              "por",
              "dos",
              "años."
            ],
            "why": "Semana 2: «si + imperfecto de subjuntivo» + condicional."
          }
        ]
      },
      {
        "id": "b2-05-x-error",
        "type": "error",
        "prompt": "Cada frase tiene un error de alguna clase de las semanas 1 a 5. Corrígelo.",
        "items": [
          {
            "sentence": "Te presto el cargador siempre que me lo devuelves hoy.",
            "answers": [
              "Te presto el cargador siempre que me lo devuelvas hoy."
            ],
            "why": "Semana 5: «siempre que» condicional lleva subjuntivo."
          },
          {
            "sentence": "Se comporta como si no le importe nada.",
            "answers": [
              "Se comporta como si no le importara nada.",
              "Se comporta como si no le importase nada."
            ],
            "why": "Semana 5: «como si» + imperfecto de subjuntivo."
          },
          {
            "sentence": "Mis padres querían que yo viva en una residencia universitaria.",
            "answers": [
              "Mis padres querían que yo viviera en una residencia universitaria.",
              "Mis padres querían que yo viviese en una residencia universitaria."
            ],
            "why": "Semanas 1 y 2: verbo principal en pasado → imperfecto de subjuntivo."
          },
          {
            "sentence": "Si habríamos leído la cláusula, no habríamos pagado la multa.",
            "answers": [
              "Si hubiéramos leído la cláusula, no habríamos pagado la multa.",
              "Si hubiésemos leído la cláusula, no habríamos pagado la multa."
            ],
            "why": "Semana 3: después de «si», pluscuamperfecto de subjuntivo."
          },
          {
            "sentence": "Lleva el paraguas por si llueva a la salida.",
            "answers": [
              "Lleva el paraguas por si llueve a la salida."
            ],
            "why": "Semana 5: «por si» va con indicativo."
          }
        ]
      },
      {
        "id": "b2-05-x-nexo",
        "type": "classify",
        "prompt": "¿Qué expresa cada frase?",
        "categories": [
          "Condición necesaria (solo si)",
          "Excepción (si no)",
          "Precaución o caso previsto",
          "Comparación imaginada"
        ],
        "items": [
          {
            "text": "Te dejo mi auto siempre y cuando le pongas nafta.",
            "cat": 0,
            "why": "«Siempre y cuando» = solo si."
          },
          {
            "text": "Vamos al río el domingo, salvo que haga frío.",
            "cat": 1,
            "why": "«Salvo que» + subjuntivo = si no."
          },
          {
            "text": "Compré pan de más por si vienen tus amigos.",
            "cat": 2,
            "why": "«Por si»: precaución."
          },
          {
            "text": "Grita como si estuviéramos en otro barrio.",
            "cat": 3,
            "why": "«Como si» + imperfecto."
          },
          {
            "text": "En caso de que falte agua, usen la cisterna.",
            "cat": 2,
            "why": "Caso previsto."
          },
          {
            "text": "Firmo a condición de que me den factura.",
            "cat": 0,
            "why": "Condición formal."
          },
          {
            "text": "No salgo esta noche, a menos que me llames.",
            "cat": 1,
            "why": "Excepción."
          },
          {
            "text": "Habla del alquiler como si lo hubiera pagado él solo.",
            "cat": 3,
            "why": "«Como si» + pluscuamperfecto."
          }
        ]
      },
      {
        "id": "b2-05-x-guiada",
        "type": "open",
        "prompt": "Producción guiada de integración (semanas 1 a 5). El modelo es una posibilidad, no la única.",
        "items": [
          {
            "prompt": "Cuenta qué te pidieron cuando alquilaste o compartiste vivienda por primera vez (semana 1) y con qué condición aceptaste (semana 5).",
            "model": "La dueña me pidió que pagara tres meses por adelantado. Acepté con la condición de que me dejara pintar mi cuarto y me diera recibo de cada pago.",
            "checklist": [
              "Uso «pidió que» + imperfecto de subjuntivo.",
              "Uso un nexo de condición con el tiempo correcto."
            ]
          },
          {
            "prompt": "Describe a un compañero o compañera con «como si» y añade cómo sería hoy la convivencia si se hubiera comportado de otra manera (semanas 4 y 5).",
            "model": "Mi antiguo compañero usaba la cocina como si viviera solo. Si hubiera respetado los turnos desde el principio, hoy seguiríamos siendo amigos.",
            "checklist": [
              "Uso «como si» con el tiempo adecuado.",
              "Uso una condicional mixta pasado → presente."
            ]
          },
          {
            "prompt": "Imagina una regla nueva para tu casa o tu trabajo (semana 2) y explica qué habría pasado el mes pasado si ya hubiera existido (semana 3).",
            "model": "Si tuviéramos una regla de silencio después de las once, todos dormiríamos mejor. Si la hubiéramos tenido el mes pasado, no habríamos discutido por la música del sábado.",
            "checklist": [
              "Uso «si + imperfecto de subjuntivo» + condicional.",
              "Uso «si + pluscuamperfecto» + condicional compuesto."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe a tus compañeros de vivienda (o de oficina) una propuesta de acuerdo de convivencia (220–300 palabras). Recuerda qué pasó el semestre pasado y qué les pidió el dueño, explica qué habría sido distinto con reglas claras y propón normas con condiciones, excepciones y casos previstos. Puedes describir con «como si» algún comportamiento que quieres evitar.",
    "context": "El texto va a un grupo de personas con las que convives: tono cordial, pero las normas deben quedar claras. Este checkpoint evalúa también las clases de las semanas 1 a 4.",
    "steps": [
      "Haz una lista de tres problemas del semestre pasado y una petición del dueño o de la administración.",
      "Planifica: introducción, lo que pasó y lo que habría sido distinto, normas propuestas y cierre.",
      "Redacta con al menos tres nexos distintos, un «como si» y una forma de cada semana anterior.",
      "Revisa el modo después de cada nexo, corrige la correlación de tiempos y comprueba que no haya condicional después de «si»."
    ],
    "useLanguage": [
      "El dueño nos pidió que…",
      "Si hubiéramos acordado…, no habríamos…",
      "siempre y cuando / con tal de que / a condición de que + subjuntivo",
      "a no ser que / salvo que + subjuntivo",
      "en caso de que + subjuntivo / por si + indicativo",
      "como si + imperfecto / pluscuamperfecto de subjuntivo"
    ],
    "model": [
      "Hola, chicos: antes de firmar la renovación, quiero proponerles un acuerdo de convivencia. El semestre pasado tuvimos varios roces que, en el fondo, venían de no haber hablado a tiempo. Si hubiéramos escrito unas normas en marzo, no habríamos discutido tanto por la limpieza ni por las visitas.",
      "Recuerden también lo que nos pidió el dueño: que pagáramos las expensas antes del día diez y que no hiciéramos ruido después de medianoche. Nos dijo que renovaría el contrato siempre que no hubiera quejas de los vecinos. Si no lo hubiéramos olvidado en junio, hoy no tendríamos esa advertencia por escrito.",
      "Propongo estas normas. Cada uno se hará cargo de la limpieza una semana, a no ser que tenga exámenes; en ese caso, cambiamos turnos con un día de aviso. Se pueden traer invitados a dormir con tal de que avisemos al grupo y no sea más de dos veces por semana. En caso de que alguien rompa algo de los espacios comunes, lo repone en un mes. Y dejo una copia de la llave en el kiosco de la esquina por si alguien se queda afuera.",
      "Por último, una cosa que me importa: que nadie organice la casa como si fuera solo suya. Ojalá podamos votar esto el domingo. Si les parece bien, lo imprimimos y lo pegamos en la heladera. Y si alguna norma no funciona, la revisamos en julio, sin dramas. Un abrazo, Valentina."
    ],
    "checklist": [
      "Uso al menos tres nexos de condición, excepción o caso previsto con el modo correcto.",
      "Uso «como si» con imperfecto o pluscuamperfecto de subjuntivo.",
      "Recupero las semanas 1 a 4: petición en pasado, correlación, condición irreal pasada y condicional mixta.",
      "Las normas son claras y cada una tiene su condición o su excepción.",
      "El tono es cordial y el texto está organizado en párrafos con funciones claras."
    ],
    "words": [
      220,
      300
    ]
  },
  "speaking": {
    "intro": "Este checkpoint tiene dos tareas orales que integran las cinco semanas. Habla con notas, sin leer. Si te grabas, la grabación queda en tu dispositivo y no se evalúa automáticamente.",
    "tasks": [
      {
        "title": "Negociar con el dueño",
        "prompt": "Tu docente es el dueño de un departamento que te quiere renovar el contrato con un aumento. Escucha sus condiciones, pregunta qué incluye, acepta solo bajo condiciones claras, propón una excepción y un caso previsto, y recuérdale con suavidad algo que habría podido hacer el año pasado.",
        "prep": [
          "Prepara tres nexos distintos: «siempre y cuando», «a no ser que», «en caso de que».",
          "Prepara un reproche atenuado con «habría podido» (semana 4).",
          "Ten pensada una hipótesis con «si + imperfecto de subjuntivo» (semana 2)."
        ],
        "seconds": 240,
        "selfCheck": [
          "Pregunto, escucho y respondo a las condiciones reales del dueño.",
          "Uso nexos variados con el modo correcto.",
          "Cierro con un acuerdo concreto o explico por qué no acepto."
        ]
      },
      {
        "title": "Balance de un semestre compartido",
        "prompt": "Habla durante unos tres minutos de una experiencia de convivencia (casa, residencia, viaje, oficina). Cuenta qué te pidieron, describe a alguien con «como si», explica qué habría pasado con otras reglas y cómo sería hoy la situación si hubieras tomado otra decisión.",
        "prep": [
          "Anota una forma de cada semana (1 a 5).",
          "Ordena tus ideas: situación, problema, alternativas, presente."
        ],
        "seconds": 180,
        "model": "En mi primer año viví en una residencia con otras cinco chicas. La directora nos pidió que no cocináramos después de las diez. Una compañera, Lara, se movía por la cocina como si fuera la encargada. Si hubiéramos hablado con ella al principio, no habríamos acumulado tanta tensión. Al final me mudé; si me hubiera quedado, hoy seguiría compartiendo baño con cinco personas. Ahora acepto convivir siempre que haya reglas claras desde el primer día.",
        "selfCheck": [
          "Uso al menos una forma de cada semana.",
          "Pronuncio los nexos largos sin cortes.",
          "Mi relato tiene principio, desarrollo y valoración final."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva a clase tu trabajo del checkpoint y úsalo para comprobar con tu profesor qué dominas y qué necesitas repasar.",
    "cards": [
      {
        "move": "Negocia",
        "task": "Pide algo a tu profesor (cambiar la hora de clase, más tarea, un descanso) y acepta su respuesta solo bajo una condición.",
        "phrases": [
          "Vale, siempre que…",
          "De acuerdo, a no ser que…"
        ]
      },
      {
        "move": "Describe",
        "task": "Describe a un personaje famoso o a alguien que conoces con «como si» y deja que tu profesor adivine quién es.",
        "phrases": [
          "Habla como si…",
          "Se viste como si…"
        ]
      },
      {
        "move": "Repasa",
        "task": "Elige la clase de las semanas 1 a 5 que te parece más difícil y pide a tu profesor tres frases para practicarla.",
        "phrases": [
          "Todavía me cuesta…",
          "¿Me das un ejemplo con…?"
        ]
      }
    ],
    "bring": "Trae tu propuesta de convivencia con los nexos marcados y una lista de las dos formas de las semanas 1 a 4 que más errores te dieron."
  },
  "quiz": {
    "items": [
      {
        "type": "gap",
        "q": "Te acompaño al aeropuerto con tal de que me ___ (invitar) a un café.",
        "answers": [
          [
            "invites"
          ]
        ],
        "why": "Condición necesaria: subjuntivo."
      },
      {
        "type": "gap",
        "q": "Mi abuela me trata como si todavía ___ (tener) diez años.",
        "answers": [
          [
            "tuviera",
            "tuviese"
          ]
        ],
        "why": "«Como si» + imperfecto de subjuntivo."
      },
      {
        "type": "gap",
        "q": "Semana 1 · El profesor nos aconsejó que ___ (leer) el capítulo antes del examen.",
        "answers": [
          [
            "leyéramos",
            "leyésemos"
          ]
        ],
        "why": "Influencia en pasado; leyeron → leyéramos."
      },
      {
        "type": "gap",
        "q": "Semana 3 · Si ___ (salir) antes de casa, no habríamos perdido el colectivo.",
        "answers": [
          [
            "hubiéramos salido",
            "hubiésemos salido"
          ]
        ],
        "why": "Condición irreal del pasado."
      },
      {
        "type": "choice",
        "q": "¿Qué frase pone una condición y no habla de costumbre?",
        "options": [
          "Siempre que viajo, pierdo algo.",
          "Siempre que llamo, está ocupado.",
          "Te llevo siempre que estés listo a las ocho."
        ],
        "answer": 2,
        "why": "«Siempre que» + subjuntivo = solo si."
      },
      {
        "type": "choice",
        "q": "Semana 4 · «Si hubiera aprendido a nadar de chica, ahora ___ en el río sin miedo.»",
        "options": [
          "habría nadado",
          "nadaría",
          "nadara"
        ],
        "answer": 1,
        "why": "Mixta pasado → presente: condicional simple."
      },
      {
        "type": "listen",
        "q": "¿Qué hace la hablante?",
        "audio": "Como vuelvas a usar mi toalla, te la cobro.",
        "voice": "es-AR-f",
        "options": [
          "Explica una causa.",
          "Advierte en tono coloquial.",
          "Expresa un deseo."
        ],
        "answer": 1,
        "why": "«Como» + subjuntivo: aviso coloquial."
      },
      {
        "type": "error",
        "sentence": "En caso de que no puedes venir, mándame un mensaje.",
        "answers": [
          "En caso de que no puedas venir, mándame un mensaje."
        ],
        "why": "«En caso de que» + subjuntivo."
      },
      {
        "type": "error",
        "sentence": "Me miró como si yo habría dicho una tontería.",
        "answers": [
          "Me miró como si yo hubiera dicho una tontería.",
          "Me miró como si yo hubiese dicho una tontería."
        ],
        "why": "«Como si» + pluscuamperfecto, nunca condicional."
      },
      {
        "type": "error",
        "sentence": "Me gustaría que mis compañeros limpien la cocina más seguido.",
        "answers": [
          "Me gustaría que mis compañeros limpiaran la cocina más seguido.",
          "Me gustaría que mis compañeros limpiasen la cocina más seguido."
        ],
        "why": "Semana 2: condicional en el verbo principal → imperfecto de subjuntivo."
      },
      {
        "type": "order",
        "words": [
          "No",
          "firmaremos",
          "el",
          "contrato",
          "a",
          "menos",
          "que",
          "incluya",
          "la",
          "calefacción."
        ],
        "why": "Excepción con subjuntivo."
      },
      {
        "type": "open",
        "prompt": "Escribe tres frases para un compañero de casa nuevo: una condición, una excepción y una comparación con «como si». Añade una petición que te hizo el dueño (semana 1).",
        "model": "Puedes usar mi escritorio siempre que lo dejes ordenado. Los domingos limpiamos juntos, salvo que alguien viaje. No hace falta que trabajes como si estuvieras en una oficina. Ah, y el dueño nos pidió que no tendiéramos ropa en el balcón.",
        "checklist": [
          "Uso un nexo de condición y uno de excepción con subjuntivo.",
          "Uso «como si» + imperfecto de subjuntivo.",
          "Incluyo una petición en pasado."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo poner condiciones, excepciones y casos previstos con distintos nexos y el modo correcto.",
      "Puedo describir comportamientos con «como si» y protestar con «¡ni que…!».",
      "Puedo combinar en una negociación las formas de subjuntivo y de hipótesis de las semanas 1 a 4."
    ],
    "review": [
      "Mañana, escribe cinco normas para tu casa o tu trabajo, cada una con un nexo distinto.",
      "En tres días, rehace sin mirar el ejercicio de integración y anota qué semana te dio más errores.",
      "Antes de la semana 6, repasa la clase de la semana 1 a 4 que anotaste y prepara dos ejemplos nuevos para tu profesor."
    ]
  },
  "related": [
    {
      "path": "/gramatica/condiciones-con-otros-nexos",
      "label": "Clase: Condiciones con otros nexos"
    },
    {
      "path": "/gramatica/como-si-imperfecto-pluscuamperfecto-subjuntivo",
      "label": "Clase: Como si + imperfecto / pluscuamperfecto subjuntivo"
    }
  ]
};
