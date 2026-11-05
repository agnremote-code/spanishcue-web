import type { Module } from "../../types";

/**
 * B2 · semana 14 · Autoestudio espejo de G153 (oraciones causales avanzadas: no porque + subjuntivo)
 * y G154 (consecutivas de intensidad: tan, tanto, tal… que). Repaso autónomo con una librería ficticia
 * de un cerro de Valparaíso que cambia sus horarios. Audio mediante síntesis; sin acreditación regional.
 */
export const b2w14: Module = {
  "id": "b2-14",
  "level": "b2",
  "week": 14,
  "kind": "core",
  "title": "No es que no queramos abrir: es que suben tantos turistas que no damos abasto",
  "subtitle": "Repaso de las causas desmentidas con «no porque» y «no es que», y de las consecuencias con «tan», «tanto» y «tal… que»",
  "stop": {
    "place": "Valparaíso",
    "country": "Chile"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.g153",
    "b2.gram.g154",
    "b2.voc.w14-cerros-turismo",
    "b2.pron.w14-pausa-causa",
    "b2.lis.w14-explicar-cierre",
    "b2.read.w14-cronica-cerro",
    "b2.wri.w14-carta-aclaracion",
    "b2.spk.w14-desmentir-explicar",
    "b2.fun.w14-rechazar-interpretaciones",
    "b2.disc.w14-causa-consecuencia"
  ],
  reviewObjectives: ["b2.gram.g151","b2.gram.g152","b2.voc.w13-trabajo-hibrido","b2.pron.w13-de-que-atono","b2.lis.w13-anuncio-oficina","b2.read.w13-columna-presencialidad","b2.wri.w13-correo-postura","b2.spk.w13-negociar-condiciones","b2.fun.w13-plantear-inquietudes","b2.disc.w13-comentar-hechos"],
  prerequisites: ["b2-13"],
  "goal": {
    "canDo": "Puedo desmentir una causa que me atribuyen y dar la verdadera con «no porque…, sino porque…» o «no es que…, es que…», y contar las consecuencias de una situación intensa con «tan», «tanto» y «tal… que».",
    "steps": [
      "Repasa cómo se niega una causa sin negar la acción y qué modo pide cada parte.",
      "Repasa las consecutivas de intensidad y la diferencia con «así que».",
      "Escucha a una librera de Valparaíso y lee una crónica sobre la vida en los cerros.",
      "Escribe una carta que aclare una decisión, revísala y desmiente oralmente un rumor."
    ]
  },
  "theory": {
    "intro": "En clase viste con tu profesor cómo rechazar una causa y dar la verdadera, y cómo unir una intensidad con su consecuencia. Aquí lo repasas con una librería de un cerro de Valparaíso que deja de abrir los domingos y con todo lo que se dice en el barrio sobre esa decisión.",
    "parts": [
      {
        "heading": "No porque…, sino porque…: la acción ocurre, la causa es otra",
        "body": [
          "Cuando alguien atribuye una causa equivocada a algo que sí pasó, la rechazas con «no porque» + subjuntivo y das la causa real con «sino porque» + indicativo. La acción es real; lo que niegas es el motivo. El subjuntivo marca que esa causa no se acepta. El tiempo sigue el marco: presente («no porque falten clientes»), perfecto («no porque haya bajado la venta») o imperfecto si hablas del pasado («no porque estuviera cansada»).",
          "Fíjate en el alcance de la negación. «No abrió porque estaba enferma» dice que no abrió, y por qué. «Abrió, pero no porque quisiera, sino porque se lo pidieron» dice que abrió y niega el motivo. Con un nombre o un infinitivo funciona igual con «por»: «no por dinero, sino por cansancio»; «no por ser turista, sino por no avisar»."
        ],
        "table": {
          "caption": "¿Qué niegas: la acción o la causa?",
          "head": [
            "Estructura",
            "Ejemplo",
            "¿Ocurre la acción?"
          ],
          "rows": [
            [
              "no + verbo + porque + indicativo",
              "No abre el domingo porque necesita descansar.",
              "No: no abre."
            ],
            [
              "verbo + porque no + indicativo",
              "Cierra el domingo porque no tiene personal.",
              "Sí: cierra; la causa es negativa."
            ],
            [
              "verbo, pero no porque + subjuntivo, sino porque + indicativo",
              "Cierra el domingo, pero no porque venda poco, sino porque está agotada.",
              "Sí: cierra; se rechaza un motivo."
            ]
          ]
        },
        "examples": [
          {
            "es": "Rosa se cambió de casa, pero no porque le molestaran los turistas, sino porque no podía con las escaleras.",
            "note": "Marco pasado: «molestaran» en imperfecto de subjuntivo."
          },
          {
            "es": "Le dieron el premio no por su fama, sino por veinte años de trabajo en el barrio.",
            "note": "«No por + nombre, sino por + nombre»."
          }
        ],
        "mistakes": [
          {
            "wrong": "Cerramos los domingos no porque no hay clientes, sino porque necesitamos descansar.",
            "right": "Cerramos los domingos no porque no haya clientes, sino porque necesitamos descansar.",
            "why": "La causa rechazada va en subjuntivo."
          },
          {
            "wrong": "No porque llueva, sino porque hace viento, no salgo.",
            "right": "No salgo porque hace viento, no porque llueva.",
            "why": "Si la acción no ocurre, primero la dices negada y después ordenas las causas; empezar por «no porque» confunde el alcance."
          }
        ],
        "tip": "Antes de escribir, pregúntate: ¿la acción pasó? Si pasó y solo niegas el motivo, «no porque» + subjuntivo."
      },
      {
        "heading": "«No es que…, es que…» y los conectores según su sitio",
        "body": [
          "«No es que» + subjuntivo rechaza una interpretación posible; «es que» o «sino que» + indicativo dan la explicación real. Es muy frecuente para suavizar una negativa: «No es que no quiera ayudarte, es que el sábado trabajo». También puedes usarlo para corregir una exageración: «No es que el barrio esté mal; es que ha cambiado muy rápido».",
          "Los conectores causales tienen posición y registro. «Como» va siempre al principio: «Como suben tantos turistas, abrimos antes». «Porque» suele ir después de la idea principal. «Ya que», «puesto que» y «dado que» presentan una causa conocida y son más formales; «debido a» + nombre y «a causa de» son propios de textos informativos. En la conversación, tras una orden, «que» introduce la causa: «Abrígate, que en el cerro corre viento»."
        ],
        "examples": [
          {
            "es": "No es que me moleste la música en la calle; es que a las tres de la mañana no puedo dormir.",
            "note": "Rechaza una interpretación y da la real."
          },
          {
            "es": "Dado que el ascensor estará en reparación, la feria se trasladará a la plaza.",
            "note": "Causa conocida, registro formal."
          },
          {
            "es": "Debido al temporal, el puerto suspendió las salidas de los botes.",
            "note": "«Debido a» + nombre: texto informativo."
          }
        ],
        "mistakes": [
          {
            "wrong": "Abrimos más tarde como el ascensor no funciona.",
            "right": "Como el ascensor no funciona, abrimos más tarde.",
            "why": "«Como» causal va al principio de la frase."
          },
          {
            "wrong": "No es que no me gusta el turismo, es que hay demasiado.",
            "right": "No es que no me guste el turismo, es que hay demasiado.",
            "why": "«No es que» pide subjuntivo."
          }
        ]
      },
      {
        "heading": "Tan, tanto, tal: la intensidad tiene consecuencias",
        "body": [
          "Cuando una consecuencia nace de una intensidad, la intensidad se marca en la primera parte y la consecuencia llega con «que». «Tan» va delante de un adjetivo o un adverbio: «la calle es tan empinada que…», «subían tan despacio que…». «Tanto» concuerda con el nombre: «tanta gente», «tantos cruceros», «tantas mochilas». Detrás de un verbo, «tanto» no cambia: «llovió tanto que…».",
          "«Tal» + nombre resalta la clase o el grado de algo: «había tal ruido que no oíamos el timbre», «dijeron tales cosas que nadie volvió». «De tal manera que» o «de tal modo que» se refieren a la manera: «lo explicó de tal manera que todos lo entendieron». La consecuencia va en indicativo porque es un hecho."
        ],
        "table": {
          "caption": "La intensidad y su consecuencia",
          "head": [
            "Forma",
            "Delante de",
            "Ejemplo"
          ],
          "rows": [
            [
              "tan",
              "adjetivo o adverbio",
              "La escalera es tan larga que la llaman «la eterna»."
            ],
            [
              "tanto / tanta / tantos / tantas",
              "sustantivo",
              "Llegaron tantos visitantes que se acabaron los mapas."
            ],
            [
              "verbo + tanto",
              "después del verbo",
              "Rosa trabajó tanto que enfermó."
            ],
            [
              "tal / tales",
              "sustantivo",
              "Había tal cola en el ascensor que subimos a pie."
            ]
          ]
        },
        "examples": [
          {
            "es": "La vista desde el mirador es tan amplia que se ven los barcos de Viña.",
            "note": "«Tan» + adjetivo."
          },
          {
            "es": "Vendieron tantas postales que tuvieron que pedir más a la imprenta.",
            "note": "«Tantas» concuerda con «postales»."
          }
        ],
        "mistakes": [
          {
            "wrong": "Había tanto turistas que no se podía caminar.",
            "right": "Había tantos turistas que no se podía caminar.",
            "why": "Delante de un nombre, «tanto» concuerda: «tantos turistas»."
          },
          {
            "wrong": "El cerro es tanto bonito que todos quieren vivir allí.",
            "right": "El cerro es tan bonito que todos quieren vivir allí.",
            "why": "Delante de un adjetivo se usa «tan»."
          }
        ],
        "tip": "Mira la palabra que sigue: adjetivo o adverbio → «tan»; nombre → «tanto» con concordancia; nada (después del verbo) → «tanto»."
      },
      {
        "heading": "«Así que»: consecuencia sin intensidad",
        "body": [
          "Si la consecuencia no depende de una intensidad, sino de un hecho, basta «así que», que va después de una coma: «El ascensor estaba cerrado, así que subimos por la escalera». No confundas la consecuencia con la causa ni con la finalidad: «porque» explica lo anterior, «para que» dice el objetivo y «así que» cuenta lo que resultó.",
          "En textos más formales encontrarás «por lo tanto», «por consiguiente» o «de modo que», con el mismo valor. Y cuando la frase principal está negada, la consecuencia imaginada puede ir en subjuntivo: «No es tan caro que no puedas pagarlo». Para tu propia escritura, recuerda la regla básica: consecuencia real, indicativo."
        ],
        "examples": [
          {
            "es": "Se cortó la luz en el cerro, así que cerramos temprano.",
            "note": "Consecuencia de un hecho: «así que»."
          },
          {
            "es": "Cerramos temprano porque se cortó la luz.",
            "note": "La misma relación vista desde la causa."
          }
        ],
        "mistakes": [
          {
            "wrong": "Hacía mucho viento así que no salimos al mirador porque.",
            "right": "Hacía mucho viento, así que no salimos al mirador.",
            "why": "«Así que» ya expresa la consecuencia; no se suma «porque», y va después de una coma."
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Primero decide qué niegas y qué causa das; después, si hay intensidad, elige entre «tan», «tanto» y «tal».",
    "exercises": [
      {
        "id": "b2-14-g-causa",
        "type": "gap",
        "prompt": "Completa con la forma correcta del verbo entre paréntesis. Piensa si la causa se acepta o se rechaza.",
        "items": [
          {
            "q": "Rosa vende libros de segunda mano, no porque ___ (ser) más baratos, sino porque le gusta su historia.",
            "answers": [
              [
                "sean"
              ]
            ],
            "why": "Causa rechazada en presente: subjuntivo."
          },
          {
            "q": "Se mudó a Viña el año pasado, pero no porque ___ (odiar) el cerro.",
            "answers": [
              [
                "odiara",
                "odiase"
              ]
            ],
            "why": "Marco pasado: imperfecto de subjuntivo."
          },
          {
            "q": "No es que no me ___ (interesar) tu propuesta, es que ahora no tengo tiempo.",
            "answers": [
              [
                "interese"
              ]
            ],
            "why": "«No es que» + subjuntivo."
          },
          {
            "q": "No cerramos el lunes porque ___ (venir) un grupo de estudiantes.",
            "answers": [
              [
                "viene",
                "vendrá",
                "va a venir"
              ]
            ],
            "why": "Aquí se niega la acción y la causa es real: indicativo."
          },
          {
            "q": "Abrígate, ___ arriba en el mirador hace frío.",
            "answers": [
              [
                "que"
              ]
            ],
            "why": "Tras una orden, «que» introduce la causa en la conversación."
          },
          {
            "q": "___ el ascensor Reina Victoria estaba cerrado, subimos por la escalera.",
            "answers": [
              [
                "Como",
                "como"
              ]
            ],
            "why": "Causa al principio de la frase: «como»."
          }
        ]
      },
      {
        "id": "b2-14-g-intensidad",
        "type": "choice",
        "prompt": "Elige la forma que completa la consecutiva.",
        "items": [
          {
            "q": "«Había ___ gente en la escalera que tardamos media hora en bajar».",
            "options": [
              "tan",
              "tanta",
              "tanto"
            ],
            "answer": 1,
            "why": "Delante de «gente», femenino singular: «tanta»."
          },
          {
            "q": "«El café de la esquina es ___ pequeño que solo caben cuatro mesas».",
            "options": [
              "tanto",
              "tal",
              "tan"
            ],
            "answer": 2,
            "why": "Delante de un adjetivo: «tan»."
          },
          {
            "q": "«Esa noche hubo ___ tormenta que se suspendieron los fuegos».",
            "options": [
              "tal",
              "tan",
              "tantas"
            ],
            "answer": 0,
            "why": "«Tal» + nombre en singular."
          },
          {
            "q": "«El ascensor estaba en mantención, ___ subimos caminando».",
            "options": [
              "porque",
              "así que",
              "para que"
            ],
            "answer": 1,
            "why": "Consecuencia de un hecho, sin intensidad."
          }
        ]
      },
      {
        "id": "b2-14-g-reformular",
        "type": "open",
        "prompt": "Reformula cada texto de partida según la consigna. Después compara con el modelo y la lista: hay más de una versión correcta.",
        "items": [
          {
            "prompt": "Texto de partida: «Dicen que cerramos los domingos porque perdemos dinero. Es falso: cerramos porque mi madre necesita descansar». Únelo en una sola frase con «no porque…, sino porque…».",
            "model": "Cerramos los domingos, pero no porque perdamos dinero, sino porque mi madre necesita descansar.",
            "checklist": [
              "Mantengo la acción afirmada y niego solo el motivo.",
              "Uso subjuntivo en la causa rechazada e indicativo en la real.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «No te ayudo con la mudanza el sábado. Trabajo todo el día. No estoy enojado contigo». Suaviza la negativa con «no es que…, es que…».",
            "model": "No es que esté enojado contigo, es que el sábado trabajo todo el día y no puedo ayudarte con la mudanza.",
            "checklist": [
              "Rechazo la interpretación con «no es que» + subjuntivo.",
              "Doy la causa real con indicativo.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «El crucero trajo tres mil pasajeros. Los cafés del cerro se quedaron sin pan antes del mediodía». Une las dos ideas con una consecutiva de intensidad.",
            "model": "El crucero trajo tantos pasajeros que los cafés del cerro se quedaron sin pan antes del mediodía.",
            "checklist": [
              "Uso «tantos» en concordancia con «pasajeros».",
              "La consecuencia va en indicativo.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Hubo un ruido enorme en la fiesta del barrio. Los vecinos llamaron a carabineros». Reescríbelo con «tal… que» en un registro de crónica.",
            "model": "Durante la fiesta del barrio se armó tal ruido que los vecinos terminaron llamando a carabineros.",
            "checklist": [
              "Uso «tal» + nombre sin adjetivo intermedio.",
              "Encadeno la consecuencia con «que».",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para hablar de un barrio que vive del turismo y de quienes viven en él.",
    "groups": [
      {
        "title": "El cerro y sus visitantes",
        "items": [
          {
            "es": "subir en ascensor",
            "note": "en Valparaíso, los funiculares que suben los cerros se llaman ascensores"
          },
          {
            "es": "el flujo de turistas",
            "note": "cantidad de visitantes que llega y circula"
          },
          {
            "es": "la recalada de un crucero",
            "note": "llegada de un barco de pasajeros al puerto"
          },
          {
            "es": "no dar abasto",
            "note": "no poder atender toda la demanda"
          },
          {
            "es": "perder la tranquilidad",
            "note": "dejar de vivir en calma"
          }
        ]
      },
      {
        "title": "Vivir y trabajar en el barrio",
        "items": [
          {
            "es": "encarecerse el arriendo",
            "note": "subir el precio del alquiler; «arriendo» es frecuente en Chile"
          },
          {
            "es": "el comercio de barrio",
            "note": "tiendas pequeñas que atienden a los vecinos"
          },
          {
            "es": "el local",
            "note": "espacio donde funciona un negocio"
          },
          {
            "es": "estar agotado",
            "note": "muy cansado; también, sin existencias"
          },
          {
            "es": "desmentir un rumor",
            "note": "decir públicamente que no es cierto"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b2-14-v-relacion",
        "type": "match",
        "prompt": "Relaciona cada expresión con la situación del cerro en la que encaja.",
        "pairs": [
          {
            "left": "no dar abasto",
            "right": "Rosa atiende sola y hay doce personas esperando para pagar."
          },
          {
            "left": "la recalada de un crucero",
            "right": "El martes atraca un barco con tres mil pasajeros."
          },
          {
            "left": "encarecerse el arriendo",
            "right": "El dueño del local pide un cuarenta por ciento más desde marzo."
          },
          {
            "left": "desmentir un rumor",
            "right": "La librera publica una carta para aclarar por qué cierra los domingos."
          },
          {
            "left": "el comercio de barrio",
            "right": "La panadería, el almacén y la ferretería de la calle Templeman."
          },
          {
            "left": "perder la tranquilidad",
            "right": "Los vecinos ya no pueden dormir la siesta por las visitas guiadas."
          }
        ],
        "why": "Cada expresión corresponde a una situación concreta del caso."
      }
    ]
  },
  "pronunciation": {
    "focus": "Pausas y foco: cuándo la voz separa la causa y cuándo la une a la negación.",
    "explanation": [
      "La entonación ayuda a entender qué se niega. En «No abrió, porque llovía», hay una pausa después de «abrió»: se niega la acción y después se da la causa. En «No abrió porque lloviera, sino porque estaba enferma», no hay pausa entre «abrió» y «porque»: la negación alcanza a la causa, y la voz sube en «lloviera» y marca el contraste en «sino».",
      "En las consecutivas, la palabra de intensidad («tan», «tanto», «tal») lleva un acento enfático y la voz sube hasta ella; después, una pausa breve antes de «que» anuncia la consecuencia. Escucha, repite y grábate en tu dispositivo; la voz sintética es un apoyo y no evalúa tu pronunciación."
    ],
    "examples": [
      {
        "es": "No cerró, porque había clientes.",
        "note": "Pausa tras «cerró»: se niega la acción."
      },
      {
        "es": "No cerró porque hubiera pocos clientes, sino porque estaba agotada.",
        "note": "Sin pausa: se niega la causa; contraste en «sino»."
      },
      {
        "es": "Subía TANTA gente que no cabíamos.",
        "note": "Énfasis en «tanta» y pausa breve antes de «que»."
      }
    ],
    "perceive": {
      "id": "b2-14-p-oido",
      "type": "listen",
      "prompt": "Escucha cada frase y decide si la persona hizo o no hizo la acción. Fíjate en la pausa y en el contraste.",
      "items": [
        {
          "q": "En la frase sobre la librería, ¿abrió Rosa?",
          "options": [
            "Sí, abrió; se niega solo un motivo.",
            "No, no abrió."
          ],
          "answer": 1,
          "audio": "No abrió la librería, porque estaba con fiebre.",
          "voice": "es-CL-f",
          "why": "Pausa e indicativo: se niega la acción."
        },
        {
          "q": "En la frase sobre la mudanza, ¿se mudó Andrés?",
          "options": [
            "No, no se mudó.",
            "Sí, se mudó; se niega solo un motivo."
          ],
          "answer": 1,
          "audio": "Andrés se mudó, pero no porque le subieran el arriendo, sino porque consiguió trabajo en Santiago.",
          "voice": "es-CL-m",
          "why": "«No porque» + subjuntivo y «sino porque»: la acción ocurrió."
        },
        {
          "q": "En la frase sobre el ascensor, ¿subieron en ascensor?",
          "options": [
            "No, no subieron en ascensor.",
            "Sí, subieron en ascensor."
          ],
          "answer": 0,
          "audio": "No subimos en ascensor, porque la fila era enorme.",
          "voice": "es-CL-f",
          "why": "Pausa antes de «porque»: no subieron en ascensor."
        },
        {
          "q": "En la frase sobre la feria, ¿vendieron los artesanos?",
          "options": [
            "No, no vendieron.",
            "Sí, vendieron; se niega solo un motivo."
          ],
          "answer": 1,
          "audio": "Los artesanos vendieron mucho, no porque hubiera crucero, sino porque era feriado.",
          "voice": "es-CL-m",
          "why": "Venta real; se rechaza la causa del crucero."
        }
      ]
    },
    "produce": [
      {
        "text": "No es que no queramos abrir, es que no damos abasto.",
        "tip": "Sube en «queramos» y marca el contraste en «es que».",
        "voice": "es-CL-f"
      },
      {
        "text": "Cerramos, pero no porque falten clientes.",
        "tip": "Sin pausa entre «no» y «porque»: la negación va con la causa.",
        "voice": "es-CL-m"
      },
      {
        "text": "La escalera es tan empinada que da vértigo.",
        "tip": "Énfasis en «tan» y pausa mínima antes de «que».",
        "voice": "es-CL-f"
      },
      {
        "text": "Había tal cola en el ascensor que subimos a pie.",
        "tip": "Destaca «tal» y deja caer la voz al final.",
        "voice": "es-CL-m"
      }
    ]
  },
  "listening": {
    "title": "Lo que se dice en el cerro",
    "context": "Es sábado por la mañana en una pequeña librería del cerro Alegre, en Valparaíso. Andrés, un vecino, entra a preguntar si es verdad que desde el mes que viene la librería no abre los domingos. Le contestan Rosa, la dueña, y su hijo Matías, que la ayuda los fines de semana. Escucha primero sin transcripción. Las voces son sintéticas y no representan una variedad regional verificada.",
    "speakers": [
      {
        "id": "an",
        "name": "Andrés",
        "voice": "es-CL-m",
        "role": "Vecino y cliente de la librería"
      },
      {
        "id": "ro",
        "name": "Rosa",
        "voice": "es-CL-f",
        "role": "Dueña de la librería"
      },
      {
        "id": "ma",
        "name": "Matías",
        "voice": "es-CL-m",
        "role": "Hijo de Rosa, la ayuda los fines de semana"
      }
    ],
    "script": [
      {
        "speaker": "an",
        "text": "Rosa, me dijeron en la panadería que dejan de abrir los domingos porque la librería va mal. ¿Es cierto?"
      },
      {
        "speaker": "ro",
        "text": "Lo de los domingos es verdad, pero no porque nos vaya mal. Al contrario: este verano vendimos más que nunca. Cerramos porque estamos agotados."
      },
      {
        "speaker": "ma",
        "text": "Es que los domingos sube tanta gente que no damos abasto. Cuando hay crucero, la calle se llena de tal manera que hay que pedir permiso para entrar al local."
      },
      {
        "speaker": "an",
        "text": "Pero eso es bueno para el negocio, ¿no? Yo pensé que se iban porque les habían subido el arriendo."
      },
      {
        "speaker": "ro",
        "text": "No, no nos vamos a ninguna parte. El arriendo subió, eso sí, pero no tanto que no podamos pagarlo. No es que no nos gusten los turistas; es que muchos entran, sacan fotos de los estantes y se van sin comprar nada. Y los vecinos, que son los que compran todo el año, ya no encuentran sitio."
      },
      {
        "speaker": "ma",
        "text": "El domingo pasado hubo tal cola en la caja que una señora se fue con un libro sin pagar, y no porque quisiera robarlo: se cansó de esperar y nos dejó el dinero el lunes con una nota."
      },
      {
        "speaker": "an",
        "text": "¡Qué historia! Entonces, ¿qué van a hacer los domingos?"
      },
      {
        "speaker": "ro",
        "text": "Descansar, que buena falta nos hace. Como el sábado es el día de los vecinos, vamos a abrir más temprano, a las nueve, así que podrás venir antes de que suban los grupos."
      },
      {
        "speaker": "ma",
        "text": "Y los domingos, si alguien necesita un libro con urgencia, puede escribirnos. No es que vayamos a abrir, pero se lo dejamos guardado para el sábado."
      },
      {
        "speaker": "an",
        "text": "Me parece muy bien. Y voy a desmentir lo de la panadería, porque ya lo sabe medio cerro."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación entera. ¿Qué rumor circula y qué responde Rosa?",
        "exercise": {
          "id": "b2-14-l-global",
          "type": "choice",
          "prompt": "Elige la respuesta que resume la conversación.",
          "items": [
            {
              "q": "¿Qué rumor desmiente Rosa?",
              "options": [
                "Que la librería cierra los domingos porque va mal.",
                "Que la librería se muda a Santiago.",
                "Que van a vender la librería."
              ],
              "answer": 0,
              "why": "Confirma que cierra, pero no por ese motivo."
            },
            {
              "q": "¿Cuál es la verdadera causa del cambio?",
              "options": [
                "La subida del arriendo.",
                "El cansancio por la cantidad de gente de los domingos.",
                "Un robo en la librería."
              ],
              "answer": 1,
              "why": "«Cerramos porque estamos agotados»."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y localiza los datos concretos.",
        "exercise": {
          "id": "b2-14-l-detalle",
          "type": "choice",
          "prompt": "Responde con la información exacta del audio.",
          "items": [
            {
              "q": "¿Qué pasó con el arriendo?",
              "options": [
                "Bajó.",
                "Subió tanto que no pueden pagarlo.",
                "Subió, pero pueden pagarlo."
              ],
              "answer": 2,
              "why": "«No tanto que no podamos pagarlo»."
            },
            {
              "q": "¿Por qué se fue una señora sin pagar?",
              "options": [
                "Porque se cansó de esperar en la cola.",
                "Porque quería robar el libro.",
                "Porque no tenía dinero."
              ],
              "answer": 0,
              "why": "«Se cansó de esperar y nos dejó el dinero el lunes»."
            },
            {
              "q": "¿Qué cambia los sábados?",
              "options": [
                "La librería cierra al mediodía.",
                "La librería abre a las nueve.",
                "Solo atienden a turistas."
              ],
              "answer": 1,
              "why": "«Vamos a abrir más temprano, a las nueve»."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Ahora fíjate en la forma. Puedes leer la transcripción después de responder.",
        "exercise": {
          "id": "b2-14-l-forma",
          "type": "classify",
          "prompt": "Clasifica cada fragmento según lo que expresa.",
          "categories": [
            "Causa rechazada o interpretación corregida",
            "Consecuencia de una intensidad"
          ],
          "items": [
            {
              "text": "pero no porque nos vaya mal",
              "cat": 0,
              "why": "«No porque» + subjuntivo."
            },
            {
              "text": "sube tanta gente que no damos abasto",
              "cat": 1,
              "why": "«Tanta» + nombre + «que»."
            },
            {
              "text": "No es que no nos gusten los turistas",
              "cat": 0,
              "why": "«No es que» + subjuntivo."
            },
            {
              "text": "hubo tal cola en la caja que una señora se fue",
              "cat": 1,
              "why": "«Tal» + nombre + «que»."
            },
            {
              "text": "la calle se llena de tal manera que hay que pedir permiso",
              "cat": 1,
              "why": "«De tal manera que»: consecuencia de la manera."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Tan bonito que cansa: un domingo en el cerro Alegre",
    "genre": "Crónica en una revista cultural",
    "frame": "Texto original de SpanishCue escrito como crónica de la revista ficticia «Puerto Escrito». Las personas citadas son inventadas.",
    "text": [
      "A las once de la mañana de un domingo de febrero, la calle Templeman está tan llena que hay que caminar de lado. Llegan grupos desde el muelle, parejas con mapas de papel y estudiantes que suben desde el plan con la camiseta empapada. Como el ascensor más cercano lleva meses en reparación, casi todos suben a pie, así que el último tramo se convierte en una pequeña procesión de gente sin aliento.",
      "Los vecinos lo cuentan sin rencor. «No es que estemos en contra del turismo», explica Ester Valdés, que vive en el cerro desde hace cuarenta años. «Es que el barrio cambió tan rápido que no tuvimos tiempo de acostumbrarnos». En una década, la mitad de las casas de su cuadra se convirtieron en hostales o en tiendas de recuerdos, y los arriendos subieron tanto que varias familias se fueron a otros cerros.",
      "Sería fácil culpar a los cruceros, pero la explicación es más compleja. Los barcos no traen tantos pasajeros que el cerro no pueda recibirlos; el problema es que casi todos llegan a la misma hora y recorren las mismas cuatro calles. Dado que los recorridos guiados siguen siempre el mismo trazado, hay rincones del cerro que se saturan y otros, a doscientos metros, donde no entra nadie en todo el día.",
      "El comercio de barrio busca su manera de resistir. Una librería de la calle Almirante Montt dejó de abrir los domingos, no porque vendiera poco, sino porque sus dueños estaban agotados. Una panadería hace lo contrario: abre a las seis para atender a los vecinos antes de que suban los grupos. «Hay días con tal cantidad de gente que no podemos ni barrer», cuenta su dueña, «pero en invierno, cuando no viene nadie, son los vecinos los que nos salvan».",
      "A las siete de la tarde, cuando el último grupo baja hacia el puerto, el cerro recupera algo de su silencio. Se oyen otra vez las gaviotas y los perros. Es tan bonito a esa hora que uno entiende por qué tanta gente quiere verlo, y también por qué quienes viven aquí piden, sin gritar, que alguien piense en ellos cuando se diseñan los recorridos."
    ],
    "glossary": [
      {
        "es": "el plan",
        "note": "en Valparaíso, la zona baja y llana junto al mar"
      },
      {
        "es": "sin aliento",
        "note": "respirando con dificultad por el esfuerzo"
      },
      {
        "es": "saturarse",
        "note": "llenarse por completo, sin espacio para más"
      }
    ],
    "tasks": [
      {
        "id": "b2-14-r-comprension",
        "type": "choice",
        "prompt": "Responde según la crónica.",
        "items": [
          {
            "q": "¿Por qué casi todos suben a pie?",
            "options": [
              "Porque el ascensor más cercano está en reparación.",
              "Porque prefieren hacer ejercicio.",
              "Porque el ascensor es muy caro."
            ],
            "answer": 0,
            "why": "«Como el ascensor más cercano lleva meses en reparación…»."
          },
          {
            "q": "Según el autor, ¿cuál es el problema real de los cruceros?",
            "options": [
              "Que traen demasiados pasajeros.",
              "Que los pasajeros no compran nada.",
              "Que todos llegan a la misma hora y recorren las mismas calles."
            ],
            "answer": 2,
            "why": "El tercer párrafo descarta el número y señala la concentración."
          },
          {
            "q": "¿Qué hace la panadería?",
            "options": [
              "Cierra los domingos.",
              "Solo vende a los grupos.",
              "Abre a las seis para los vecinos."
            ],
            "answer": 2,
            "why": "«Abre a las seis para atender a los vecinos»."
          }
        ]
      },
      {
        "id": "b2-14-r-interpretar",
        "type": "open",
        "prompt": "Interpreta el texto con tus palabras y apóyate en citas.",
        "items": [
          {
            "prompt": "En 60–80 palabras, explica qué causa descarta el autor en el tercer párrafo y cuál propone en su lugar. Cita una frase con una consecutiva de intensidad y comenta su consecuencia.",
            "model": "El autor descarta que el problema sea la cantidad de pasajeros: «Los barcos no traen tantos pasajeros que el cerro no pueda recibirlos». Propone otra causa: la concentración de todos en las mismas horas y calles. Como consecutiva, Ester dice que «el barrio cambió tan rápido que no tuvimos tiempo de acostumbrarnos»; la consecuencia es la sensación de pérdida de los vecinos, no un rechazo al turismo.",
            "checklist": [
              "Distingo la causa descartada de la causa propuesta.",
              "Cito una consecutiva literal del texto.",
              "Explico la consecuencia con mis palabras."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo la crónica combina causas, desmentidos y consecuencias.",
      "items": [
        {
          "quote": "Los barcos no traen tantos pasajeros que el cerro no pueda recibirlos",
          "note": "Consecutiva con la principal negada: la consecuencia imaginada va en subjuntivo."
        },
        {
          "quote": "no porque vendiera poco, sino porque sus dueños estaban agotados",
          "note": "Marco pasado: imperfecto de subjuntivo en la causa rechazada e indicativo en la real."
        },
        {
          "quote": "Dado que los recorridos guiados siguen siempre el mismo trazado",
          "note": "«Dado que» presenta una causa conocida en un registro más formal que «porque»."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina las dos clases: niega la causa justa y une cada intensidad con su consecuencia.",
    "exercises": [
      {
        "id": "b2-14-x-orden",
        "type": "order",
        "prompt": "Ordena las palabras para reconstruir frases sobre el cerro.",
        "items": [
          {
            "words": [
              "No",
              "es",
              "que",
              "el",
              "barrio",
              "esté",
              "peor,",
              "es",
              "que",
              "está",
              "distinto."
            ],
            "why": "«No es que» + subjuntivo; «es que» + indicativo."
          },
          {
            "words": [
              "Llovió",
              "tanto",
              "que",
              "el",
              "ascensor",
              "dejó",
              "de",
              "funcionar."
            ],
            "why": "«Tanto» después del verbo, invariable."
          },
          {
            "words": [
              "Se",
              "fue",
              "del",
              "cerro,",
              "pero",
              "no",
              "porque",
              "quisiera",
              "irse."
            ],
            "why": "Acción real y causa rechazada en imperfecto de subjuntivo."
          }
        ]
      },
      {
        "id": "b2-14-x-error",
        "type": "error",
        "prompt": "Cada frase tiene un error. Escríbela corregida.",
        "items": [
          {
            "sentence": "Cambiaron el recorrido, pero no porque los vecinos se quejaron.",
            "answers": [
              "Cambiaron el recorrido, pero no porque los vecinos se quejaran.",
              "Cambiaron el recorrido, pero no porque los vecinos se quejasen."
            ],
            "why": "La causa rechazada va en subjuntivo."
          },
          {
            "sentence": "Había tantas ruido en la plaza que nadie oía al guía.",
            "answers": [
              "Había tanto ruido en la plaza que nadie oía al guía."
            ],
            "why": "«Ruido» es masculino singular: «tanto ruido»."
          },
          {
            "sentence": "La subida es tanto difícil que muchos turistas se rinden.",
            "answers": [
              "La subida es tan difícil que muchos turistas se rinden."
            ],
            "why": "Delante de un adjetivo: «tan»."
          },
          {
            "sentence": "Llegamos tarde al mirador como el bus se retrasó.",
            "answers": [
              "Como el bus se retrasó, llegamos tarde al mirador.",
              "Llegamos tarde al mirador porque el bus se retrasó."
            ],
            "why": "«Como» causal va al principio; detrás de la idea principal, «porque»."
          }
        ]
      },
      {
        "id": "b2-14-x-relacion",
        "type": "classify",
        "prompt": "¿Qué expresa cada frase? Clasifícala.",
        "categories": [
          "Causa",
          "Consecuencia",
          "Finalidad"
        ],
        "items": [
          {
            "text": "Abrimos a las nueve para que los vecinos compren tranquilos.",
            "cat": 2,
            "why": "«Para que» expresa el objetivo."
          },
          {
            "text": "Había tantos grupos que cerramos la puerta un rato.",
            "cat": 1,
            "why": "Consecuencia de una intensidad."
          },
          {
            "text": "Puesto que el ascensor está cerrado, la feria se traslada.",
            "cat": 0,
            "why": "«Puesto que» presenta la causa."
          },
          {
            "text": "El local estaba vacío, así que bajamos al plan.",
            "cat": 1,
            "why": "«Así que» introduce lo que resultó."
          },
          {
            "text": "Lleva agua, que la subida es larga.",
            "cat": 0,
            "why": "«Que» tras una orden introduce la causa."
          },
          {
            "text": "Pusieron carteles con el fin de que nadie se pierda.",
            "cat": 2,
            "why": "«Con el fin de que»: finalidad."
          }
        ]
      },
      {
        "id": "b2-14-x-guiada",
        "type": "open",
        "prompt": "Escribe frases breves antes de la tarea de escritura. El modelo es una posibilidad, no la única.",
        "items": [
          {
            "prompt": "Piensa en una decisión tuya que otras personas interpretaron mal. Escribe la interpretación equivocada y desmiéntela con «no porque…, sino porque…».",
            "model": "Mis amigos pensaban que había dejado el fútbol porque estaba enojado con el entrenador. Lo dejé, pero no porque estuviera enojado, sino porque empecé a trabajar los sábados.",
            "checklist": [
              "Uso imperfecto de subjuntivo en la causa rechazada.",
              "Doy la causa real en indicativo."
            ]
          },
          {
            "prompt": "Describe un lugar muy concurrido de tu ciudad con tres consecutivas: una con «tan», una con «tanto/a/os/as» + nombre y una con «tal».",
            "model": "El mercado del sábado es tan popular que hay que llegar antes de las ocho. Venden tantas frutas que no sabes por dónde empezar. Y hay tal ruido que tienes que gritar para pedir.",
            "checklist": [
              "Elijo «tan», «tanto» o «tal» según la palabra que sigue.",
              "«Tanto» concuerda con el nombre."
            ]
          },
          {
            "prompt": "Rechaza con tacto una invitación usando «no es que…, es que…» y propone otra fecha.",
            "model": "No es que no me apetezca ir al concierto, es que el viernes tengo un examen. ¿Te parece si vamos juntos al próximo?",
            "checklist": [
              "Uso «no es que» + subjuntivo.",
              "Ofrezco una alternativa concreta."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Tomaste una decisión pública (cambiar el horario de tu negocio, dejar un cargo en una asociación, mudarte de barrio) y circula una explicación falsa. Escribe una carta abierta (220–300 palabras) para la revista o el grupo del barrio: desmiente la interpretación, da la causa verdadera, explica las consecuencias que te llevaron a decidir y cuenta qué cambia ahora.",
    "context": "La leen vecinos que te conocen y que escucharon el rumor. Quieres aclararlo sin pelear con nadie y con un tono cercano pero cuidado. Puedes usar la librería de Rosa o una situación tuya.",
    "steps": [
      "Anota el rumor, la causa verdadera y tres consecuencias de una situación intensa (mucha gente, mucho trabajo, mucho ruido).",
      "Organiza la carta: el motivo de escribir, el desmentido, la causa y sus consecuencias, y lo que cambia ahora.",
      "Escribe usando «no porque…, sino porque…», «no es que…, es que…», dos consecutivas de intensidad y al menos dos conectores causales distintos.",
      "Revisa el modo de cada causa rechazada, la concordancia de «tanto» y corrige la posición de «como»."
    ],
    "useLanguage": [
      "no porque + subjuntivo, sino porque + indicativo",
      "no es que + subjuntivo, es que…",
      "como / ya que / dado que…",
      "tan… que / tanto(s)… que / tal… que",
      "así que…",
      "no por + infinitivo, sino por…"
    ],
    "model": [
      "Queridos vecinos del cerro Alegre: les escribo porque en las últimas semanas me han preguntado muchas veces si la librería está a punto de cerrar. Quiero aclararlo: desde el próximo mes no abriremos los domingos, pero no porque nos vaya mal, sino porque mi hijo y yo necesitamos un día de descanso.",
      "No es que nos molesten los visitantes; muchos compran y nos recomiendan. El problema es que los domingos sube tanta gente que no podemos atender a nadie con calma. El último domingo de enero hubo tal cola en la caja que varios vecinos se fueron sin comprar, y otros ni siquiera pudieron entrar. Como trabajamos siete días por semana desde diciembre, llegamos al lunes tan cansados que ya no disfrutábamos de lo que más nos gusta: conversar sobre libros.",
      "Dado que el sábado es el día en que más nos visitan ustedes, desde el 1 de marzo abriremos a las nueve, así que podrán venir antes de que lleguen los grupos. Además, seguiremos guardando pedidos para quien no pueda venir el fin de semana.",
      "Sé que algunos se preocuparon de verdad, y se lo agradezco: no es que me moleste que pregunten, al contrario. Prefiero mil veces una pregunta directa a un rumor que circula de panadería en panadería. Gracias por seguir eligiendo el comercio del barrio. Nos vemos el sábado. Rosa Lagos."
    ],
    "checklist": [
      "Desmiento la interpretación con «no porque» + subjuntivo o «no es que» + subjuntivo.",
      "Doy la causa real en indicativo.",
      "Uso «tan», «tanto» y «tal» según la palabra que sigue, con concordancia.",
      "Varío los conectores causales y coloco «como» al principio.",
      "El tono es cercano y cuidado, sin reproches."
    ],
    "words": [
      220,
      300
    ]
  },
  "speaking": {
    "intro": "Prepara palabras clave, no un texto para leer. Si te grabas, la grabación queda en tu dispositivo; la aplicación no evalúa tu pronunciación.",
    "tasks": [
      {
        "title": "Un lugar que cambió demasiado",
        "prompt": "Habla durante unos dos minutos y medio de un lugar que conoces bien y que cambió mucho (un barrio, una playa, tu escuela). Explica qué cambió, qué consecuencias tuvo la intensidad del cambio y descarta al menos una causa que la gente suele dar.",
        "prep": [
          "Prepara tres consecutivas con «tan», «tanto» y «tal».",
          "Prepara un desmentido con «no porque…, sino porque…»."
        ],
        "seconds": 150,
        "model": "La playa donde veraneaba de chica cambió tanto que ya no la reconozco. Construyeron tantos edificios que el sol se va a las cuatro de la tarde. Mucha gente dice que la arruinaron los turistas, pero no es que los turistas sean el problema: es que nadie planificó nada. Mis abuelos vendieron su casa, no porque necesitaran el dinero, sino porque había tal ruido en verano que no podían dormir.",
        "selfCheck": [
          "Uso al menos tres consecutivas de intensidad distintas.",
          "Rechazo una causa con subjuntivo.",
          "Marco con la voz el contraste en «sino» y en «es que»."
        ]
      },
      {
        "title": "El rumor de la panadería",
        "prompt": "Tu interlocutor es un vecino que escuchó un rumor sobre una decisión tuya y te pregunta con desconfianza. Escucha lo que oyó, aclara qué parte es verdad, desmiente la causa falsa con tacto, da la verdadera y responde a sus preguntas sobre lo que cambiará.",
        "prep": [
          "Decide tu decisión y el rumor que circula.",
          "Prepara un «no es que…, es que…» y un «no porque…, sino porque…».",
          "Prepara una consecuencia con «así que» para lo que cambia."
        ],
        "seconds": 180,
        "selfCheck": [
          "Hago preguntas para saber qué escuchó exactamente.",
          "Distingo lo que es verdad de lo que no.",
          "Respondo a sus objeciones sin perder el tono amable."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva a la próxima clase lo que preparaste esta semana y úsalo con tu profesor.",
    "cards": [
      {
        "move": "Desmiente",
        "task": "Cuéntale a tu profesor algo que la gente piensa de tu país o de tu ciudad y desmiéntelo con la causa verdadera.",
        "phrases": [
          "No es que…, es que…",
          "No porque…, sino porque…"
        ]
      },
      {
        "move": "Pregúntale",
        "task": "Pregúntale por un lugar turístico de su país y por las consecuencias del turismo allí.",
        "phrases": [
          "¿Va tanta gente que…?",
          "¿Es tan caro que…?"
        ]
      },
      {
        "move": "Comprueba",
        "task": "Lee dos frases de tu carta con «tan» o «tanto» y pídele que confirme la concordancia.",
        "phrases": [
          "¿Aquí es «tanta» o «tanto»?",
          "¿Suena natural con «tal»?"
        ]
      }
    ],
    "bring": "Trae tu carta con las causas rechazadas subrayadas y las consecutivas marcadas en otro color."
  },
  "quiz": {
    "items": [
      {
        "type": "gap",
        "q": "Aceptó el trabajo, pero no porque le ___ (pagar) más, sino porque estaba cerca de casa.",
        "answers": [
          [
            "pagaran",
            "pagasen"
          ]
        ],
        "why": "Causa rechazada en un marco pasado."
      },
      {
        "type": "gap",
        "q": "Había ___ (tanto) bicicletas en la entrada que no se podía pasar.",
        "answers": [
          [
            "tantas"
          ]
        ],
        "why": "Concuerda con «bicicletas»: femenino plural."
      },
      {
        "type": "gap",
        "q": "No es que el hotel ___ (estar) mal, es que está muy lejos del centro.",
        "answers": [
          [
            "esté"
          ]
        ],
        "why": "«No es que» + subjuntivo."
      },
      {
        "type": "choice",
        "q": "¿Qué frase dice que Marta sí viajó?",
        "options": [
          "Marta no viajó porque tenía miedo.",
          "Marta viajó, pero no porque quisiera.",
          "Marta no viajó, porque se enfermó."
        ],
        "answer": 1,
        "why": "La acción se afirma y se rechaza un motivo."
      },
      {
        "type": "choice",
        "q": "¿Qué conector va siempre al principio de la frase?",
        "options": [
          "porque",
          "así que",
          "como"
        ],
        "answer": 2,
        "why": "«Como» causal se coloca al principio."
      },
      {
        "type": "listen",
        "q": "Según el audio, ¿por qué cancelaron el paseo en lancha?",
        "audio": "Cancelaron el paseo en lancha, pero no porque hubiera poca gente, sino porque el mar estaba muy picado.",
        "voice": "es-CL-f",
        "options": [
          "Porque el mar estaba muy picado.",
          "Porque había poca gente.",
          "Porque la lancha se rompió."
        ],
        "answer": 0,
        "why": "La causa de «poca gente» se rechaza."
      },
      {
        "type": "error",
        "sentence": "La película fue tanto larga que me dormí.",
        "answers": [
          "La película fue tan larga que me dormí."
        ],
        "why": "Delante de un adjetivo: «tan»."
      },
      {
        "type": "error",
        "sentence": "Dejó la orquesta no porque no le gustaba la música, sino porque se mudó.",
        "answers": [
          "Dejó la orquesta no porque no le gustara la música, sino porque se mudó.",
          "Dejó la orquesta no porque no le gustase la música, sino porque se mudó."
        ],
        "why": "La causa rechazada va en subjuntivo."
      },
      {
        "type": "order",
        "words": [
          "Hacía",
          "tal",
          "calor",
          "que",
          "cerramos",
          "la",
          "tienda",
          "a",
          "mediodía."
        ],
        "why": "«Tal» + nombre + «que»."
      },
      {
        "type": "open",
        "prompt": "Escribe dos frases sobre tu última semana: una consecuencia de una intensidad y una causa que alguien pensó y que tú desmientes.",
        "model": "El martes tuve tantas reuniones que no almorcé. Mi compañera pensó que estaba enojada, pero no le contesté no porque estuviera enojada, sino porque no tuve ni un minuto.",
        "checklist": [
          "Uso una consecutiva de intensidad con concordancia.",
          "Desmiento una causa con subjuntivo."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo rechazar una causa equivocada con «no porque» + subjuntivo y dar la verdadera con «sino porque» + indicativo.",
      "Puedo suavizar una negativa con «no es que…, es que…» y elegir el conector causal según su posición y su registro.",
      "Puedo unir una intensidad con su consecuencia usando «tan», «tanto» y «tal», y distinguirla de «así que»."
    ],
    "review": [
      "Mañana, escribe tres excusas reales de tu semana con «no es que…, es que…».",
      "En tres días, describe en voz alta un lugar muy concurrido con «tan», «tanto» y «tal».",
      "Antes de la semana 15, relee tu carta y cambia un «porque» por «como», «ya que» o «dado que» en el lugar adecuado."
    ]
  },
  "related": [
    {
      "path": "/gramatica/oraciones-causales-avanzadas-no-porque-subjuntivo",
      "label": "Clase: Oraciones causales avanzadas: no porque + subjuntivo"
    },
    {
      "path": "/gramatica/consecuencias-tan-tanto",
      "label": "Clase: Consecutivas de intensidad: tan, tanto, tal… que"
    }
  ]
};
