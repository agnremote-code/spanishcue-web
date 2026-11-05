import type { Module } from "../../types";

/**
 * B1 · semana 6 · Autoestudio espejo de G097 (perfecto de subjuntivo) y G098
 * (temporales futuras con cuando, en cuanto, hasta que). Repaso autónomo con una
 * compañía de teatro independiente de Buenos Aires la semana del estreno.
 */
export const b1w06: Module = {
  "id": "b1-06",
  "level": "b1",
  "week": 6,
  "kind": "core",
  "title": "Noche de estreno: lo que ya pasó y lo que pasará",
  "subtitle": "Repaso del perfecto de subjuntivo («haya + participio») para valorar lo ocurrido y de «cuando», «en cuanto» y «hasta que» con subjuntivo para hablar del futuro.",
  "stop": {
    "place": "Buenos Aires",
    "country": "Argentina"
  },
  "minutes": 95,
  "newObjectives": [
    "b1.gram.g097",
    "b1.gram.g098",
    "b1.voc.w06-teatro-estreno",
    "b1.pron.w06-h-muda-enlace",
    "b1.lis.w06-ensayo-general",
    "b1.read.w06-bitacora-compania",
    "b1.wri.w06-mensaje-elenco",
    "b1.spk.w06-arenga-preguntas",
    "b1.fun.w06-valorar-coordinar",
    "b1.disc.w06-secuencia-pasos"
  ],
  reviewObjectives: ["b1.gram.g095","b1.gram.g096","b1.voc.w05-voluntariado-acogida","b1.pron.w05-acento-imperativo","b1.lis.w05-recados-familia","b1.read.w05-blog-voluntaria","b1.wri.w05-correo-consejos","b1.spk.w05-pasar-recados","b1.fun.w05-dar-transmitir-ordenes","b1.disc.w05-correo-experiencia","b1.rev.w05-semanas-1-5"],
  prerequisites: ["b1-05"],
  "goal": {
    "canDo": "Al final de esta semana puedes reaccionar a lo que tu equipo ya ha hecho («me alegra que hayan…», «dudo que haya…») y organizar lo que pasará después con «cuando», «en cuanto», «hasta que» y «antes de que».",
    "steps": [
      "Repasa cómo se forma «haya + participio» y cuándo lo eliges en lugar de «ha + participio» o del presente de subjuntivo.",
      "Repasa las oraciones temporales: subjuntivo si la acción todavía no ha ocurrido, indicativo para costumbres y para el pasado.",
      "Escucha a una directora y a su equipo al terminar el ensayo general en un teatro de Buenos Aires.",
      "Lee la bitácora de la compañía y fíjate en cómo valora la semana y anuncia los pasos siguientes.",
      "Escribe un mensaje al elenco, revísalo y graba una arenga antes de la función."
    ]
  },
  "theory": {
    "intro": "En clase viste estas dos estructuras con tu profesor. Aquí las repasas de otra manera, con una compañía de teatro de Buenos Aires que estrena una obra el sábado: primero miras hacia atrás (lo que ya han hecho) y después hacia delante (lo que harán cuando llegue el día).",
    "parts": [
      {
        "heading": "«Haya + participio»: la forma",
        "body": [
          "El perfecto de subjuntivo se construye igual que el perfecto de indicativo, pero con el auxiliar «haber» en presente de subjuntivo: haya, hayas, haya, hayamos, hayáis, hayan. El participio va detrás y no cambia nunca, ni en género ni en número.",
          "Los participios irregulares son los mismos de siempre: hecho, dicho, visto, puesto, escrito, vuelto, abierto, roto. Entre «haya» y el participio no se pone nada: «que ya haya terminado», «que no lo haya visto»."
        ],
        "table": {
          "caption": "Perfecto de subjuntivo de tres verbos",
          "head": [
            "Persona",
            "ensayar",
            "vender",
            "poner"
          ],
          "rows": [
            [
              "yo",
              "haya ensayado",
              "haya vendido",
              "haya puesto"
            ],
            [
              "tú",
              "hayas ensayado",
              "hayas vendido",
              "hayas puesto"
            ],
            [
              "él / ella / usted",
              "haya ensayado",
              "haya vendido",
              "haya puesto"
            ],
            [
              "nosotros / nosotras",
              "hayamos ensayado",
              "hayamos vendido",
              "hayamos puesto"
            ],
            [
              "vosotros / vosotras",
              "hayáis ensayado",
              "hayáis vendido",
              "hayáis puesto"
            ],
            [
              "ellos / ellas / ustedes",
              "hayan ensayado",
              "hayan vendido",
              "hayan puesto"
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Me alegra que las actrices hayan llegadas temprano.",
            "right": "Me alegra que las actrices hayan llegado temprano.",
            "why": "Con «haber» el participio es invariable: no concuerda con «las actrices»."
          },
          {
            "wrong": "No creo que el técnico haya ponido las luces.",
            "right": "No creo que el técnico haya puesto las luces.",
            "why": "El participio de «poner» es irregular: «puesto»."
          }
        ],
        "tip": "Si sabes decir «han vendido», ya sabes decir «hayan vendido»: solo cambia el auxiliar."
      },
      {
        "heading": "Mirar hacia atrás desde ahora: reacción, duda y posibilidad",
        "body": [
          "Usas «haya + participio» cuando el verbo principal pide subjuntivo (una emoción, una valoración, una duda o una posibilidad) y la acción de la que hablas ya ha ocurrido, o pudo ocurrir, antes de este momento. La reacción es de ahora; el hecho es anterior.",
          "Compara tres frases. «Han vendido todas las entradas» afirma un hecho. «Qué bien que hayan vendido todas las entradas» reacciona a ese hecho ya ocurrido. «Ojalá vendan todas las entradas» mira hacia una acción futura: por eso usa el presente de subjuntivo."
        ],
        "table": {
          "caption": "¿Qué forma eliges?",
          "head": [
            "Lo que haces",
            "Forma",
            "Ejemplo"
          ],
          "rows": [
            [
              "Afirmas un hecho anterior",
              "ha + participio",
              "Sé que el escenógrafo ha terminado el decorado."
            ],
            [
              "Reaccionas a un hecho anterior",
              "haya + participio",
              "Me encanta que el escenógrafo haya terminado el decorado."
            ],
            [
              "Dudas de un hecho anterior",
              "haya + participio",
              "No creo que el escenógrafo haya terminado el decorado."
            ],
            [
              "Ves posible un hecho anterior",
              "haya + participio",
              "Puede que el escenógrafo haya terminado el decorado."
            ],
            [
              "Hablas de algo aún futuro",
              "presente de subjuntivo",
              "Espero que el escenógrafo termine el decorado."
            ]
          ]
        },
        "examples": [
          {
            "es": "Es una pena que el músico no haya podido venir al ensayo.",
            "note": "Reacción a algo que ya no ocurrió."
          },
          {
            "es": "Dudo que los críticos hayan visto la obra completa.",
            "note": "Duda sobre un hecho pasado."
          },
          {
            "es": "Es posible que alguien se haya llevado la llave del camarín.",
            "note": "Hipótesis sobre lo que pasó."
          }
        ],
        "mistakes": [
          {
            "wrong": "Me alegra que has venido al estreno.",
            "right": "Me alegra que hayas venido al estreno.",
            "why": "Después de una reacción como «me alegra que», el verbo va en subjuntivo; «has venido» solo afirma."
          },
          {
            "wrong": "Qué bien que vengas ayer.",
            "right": "Qué bien que hayas venido ayer.",
            "why": "Si la acción ya ocurrió, el presente de subjuntivo no sirve: necesitas «haya + participio»."
          }
        ]
      },
      {
        "heading": "«Cuando» con futuro: subjuntivo; con costumbre o pasado: indicativo",
        "body": [
          "Después de «cuando», el verbo va en subjuntivo si la acción todavía no ha pasado. La otra parte de la frase puede estar en futuro, en presente, con «ir a» o en imperativo, pero lo que va detrás de «cuando» nunca va en futuro.",
          "Si hablas de una costumbre o de algo que ya pasó, usas indicativo: «cuando termina la función, cenamos todos juntos» (siempre), «cuando terminó la función, cenamos» (ayer). En las preguntas, «¿cuándo…?» sí admite el futuro: «¿cuándo estrenarán?»."
        ],
        "table": {
          "caption": "El mismo «cuando», tres tiempos",
          "head": [
            "Momento",
            "Detrás de «cuando»",
            "Ejemplo"
          ],
          "rows": [
            [
              "Futuro",
              "presente de subjuntivo",
              "Cuando suba el telón, apaga el móvil."
            ],
            [
              "Costumbre",
              "presente de indicativo",
              "Cuando sube el telón, siempre me tiemblan las piernas."
            ],
            [
              "Pasado",
              "pretérito indefinido",
              "Cuando subió el telón, el público se quedó en silencio."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Cuando llegarás al teatro, busca la puerta de artistas.",
            "right": "Cuando llegues al teatro, busca la puerta de artistas.",
            "why": "Detrás de «cuando» no se usa el futuro, aunque la acción sea futura."
          },
          {
            "wrong": "Cuando llegas mañana, te doy la entrada.",
            "right": "Cuando llegues mañana, te doy la entrada.",
            "why": "«Mañana» indica una acción que aún no ha ocurrido: subjuntivo."
          }
        ],
        "tip": "Pregúntate: ¿esto ya pasó o pasa siempre? Si la respuesta es «todavía no», pon subjuntivo detrás de «cuando»."
      },
      {
        "heading": "En cuanto, hasta que, mientras, antes de que, después de que",
        "body": [
          "Estos conectores funcionan como «cuando»: con una acción futura llevan subjuntivo y con una costumbre o un hecho pasado llevan indicativo. «En cuanto» marca que algo ocurre justo después; «hasta que», el final de una acción; «mientras», dos acciones al mismo tiempo.",
          "«Antes de que» lleva siempre subjuntivo, incluso en pasado. Si las dos partes de la frase tienen el mismo sujeto, se usa el infinitivo: «antes de salir a escena, respiro hondo», no «antes de que yo salga»."
        ],
        "examples": [
          {
            "es": "En cuanto se apaguen las luces de la sala, empieza la música."
          },
          {
            "es": "Nadie se mueve del escenario hasta que baje el telón."
          },
          {
            "es": "Mientras el público entre, los actores esperarán detrás del decorado."
          },
          {
            "es": "Revisa el vestuario antes de que lleguen los actores."
          },
          {
            "es": "Después de saludar, saldremos todos por la puerta lateral.",
            "note": "Mismo sujeto («nosotros»): infinitivo."
          }
        ],
        "mistakes": [
          {
            "wrong": "Antes de que el público entra, cierra el telón.",
            "right": "Antes de que el público entre, cierra el telón.",
            "why": "«Antes de que» pide siempre subjuntivo."
          },
          {
            "wrong": "Voy a repasar la letra antes de que yo salga a escena.",
            "right": "Voy a repasar la letra antes de salir a escena.",
            "why": "El sujeto es el mismo en las dos partes: se usa «antes de» + infinitivo."
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Primero practicas la forma y el valor de «haya + participio»; después, el modo detrás de los conectores temporales.",
    "exercises": [
      {
        "id": "b1-06-gramatica-forma-perfecto",
        "type": "gap",
        "title": "Forma el perfecto de subjuntivo",
        "prompt": "Completa con «haya + participio» del verbo entre paréntesis.",
        "items": [
          {
            "q": "Qué bien que (tú) ___ el guion de memoria tan rápido. (aprender)",
            "answers": [
              [
                "hayas aprendido"
              ]
            ],
            "why": "«Tú» → «hayas» + participio regular en -ido."
          },
          {
            "q": "Me sorprende que los vecinos no ___ por el ruido del ensayo. (quejarse)",
            "answers": [
              [
                "se hayan quejado"
              ]
            ],
            "why": "El pronombre va delante del auxiliar: «se hayan quejado»."
          },
          {
            "q": "No creo que Julián ___ el decorado sin ayuda. (hacer)",
            "answers": [
              [
                "haya hecho"
              ]
            ],
            "why": "Participio irregular: «hecho»."
          },
          {
            "q": "Puede que (nosotros) ___ la escalera de emergencia sin querer. (romper)",
            "answers": [
              [
                "hayamos roto"
              ]
            ],
            "why": "Participio irregular: «roto»."
          },
          {
            "q": "Es una pena que la prensa no ___ al ensayo abierto. (volver)",
            "answers": [
              [
                "haya vuelto"
              ]
            ],
            "why": "Participio irregular: «vuelto»."
          },
          {
            "q": "¿Les molesta que (yo) ___ sus nombres en el programa? (escribir)",
            "answers": [
              [
                "haya escrito"
              ]
            ],
            "why": "«Yo» → «haya» + «escrito», irregular."
          }
        ]
      },
      {
        "id": "b1-06-gramatica-valor-perfecto",
        "type": "context",
        "title": "¿Ya pasó, pasará o lo afirmas?",
        "prompt": "Lee la situación y elige la forma adecuada.",
        "items": [
          {
            "context": "La actriz principal acaba de entrar en el teatro después de dos días enferma.",
            "q": "La directora le dice: «¡Qué alegría que ___!».",
            "options": [
              "vuelvas",
              "hayas vuelto",
              "has vuelto"
            ],
            "answer": 1,
            "why": "Ella ya está aquí y la directora reacciona ahora: «hayas vuelto»."
          },
          {
            "context": "Es miércoles. El estreno es el sábado y todavía quedan entradas.",
            "q": "El productor dice: «Ojalá ___ todas antes del sábado».",
            "options": [
              "se vendan",
              "se hayan vendido",
              "se han vendido"
            ],
            "answer": 0,
            "why": "La venta es futura: presente de subjuntivo."
          },
          {
            "context": "El iluminador revisó la consola hace una hora y te lo confirma por mensaje.",
            "q": "Tú le dices a la directora: «Ya está: Bruno ___ la consola».",
            "options": [
              "revise",
              "haya revisado",
              "ha revisado"
            ],
            "answer": 2,
            "why": "Afirmas un hecho que sabes: perfecto de indicativo."
          },
          {
            "context": "Falta el sombrero del segundo acto y nadie sabe dónde está.",
            "q": "Alguien sugiere: «Es posible que lo ___ en el camarín».",
            "options": [
              "hayan dejado",
              "han dejado",
              "dejen"
            ],
            "answer": 0,
            "why": "Posibilidad sobre algo que pudo pasar antes: «hayan dejado»."
          }
        ]
      },
      {
        "id": "b1-06-gramatica-modo-temporal",
        "type": "classify",
        "title": "¿Futuro, costumbre o pasado?",
        "prompt": "Clasifica cada frase según el tiempo del que habla la oración temporal.",
        "categories": [
          "Acción futura: subjuntivo",
          "Costumbre o pasado: indicativo"
        ],
        "items": [
          {
            "text": "En cuanto termine el primer acto, cambiaremos la escenografía.",
            "cat": 0
          },
          {
            "text": "Cuando salgo a escena, nunca miro a la primera fila.",
            "cat": 1
          },
          {
            "text": "Esperaremos en la sala hasta que llegue el último actor.",
            "cat": 0
          },
          {
            "text": "Cuando terminó la función, el elenco salió a saludar tres veces.",
            "cat": 1
          },
          {
            "text": "Mientras el público aplaude, las luces suben despacio.",
            "cat": 1
          },
          {
            "text": "Después de que se vaya el público, recogeremos las sillas.",
            "cat": 0
          }
        ]
      },
      {
        "id": "b1-06-gramatica-errores-temporales",
        "type": "error",
        "title": "Corrige el conector",
        "prompt": "Cada frase tiene un error en la oración temporal. Escríbela bien.",
        "items": [
          {
            "sentence": "En cuanto abrirán la taquilla, compraré dos entradas.",
            "answers": [
              "En cuanto abran la taquilla, compraré dos entradas."
            ],
            "why": "Detrás de «en cuanto» con valor futuro va el subjuntivo, no el futuro."
          },
          {
            "sentence": "No te vayas hasta que el director te da permiso.",
            "answers": [
              "No te vayas hasta que el director te dé permiso."
            ],
            "why": "La acción de dar permiso aún no ha ocurrido: «te dé»."
          },
          {
            "sentence": "Llamé a mi madre antes de que empezó la obra.",
            "answers": [
              "Llamé a mi madre antes de que empezara la obra.",
              "Llamé a mi madre antes de que empezase la obra."
            ],
            "why": "«Antes de que» lleva siempre subjuntivo, también en pasado."
          },
          {
            "sentence": "Cuando tengo tiempo la semana que viene, iré a ver tu obra.",
            "answers": [
              "Cuando tenga tiempo la semana que viene, iré a ver tu obra."
            ],
            "why": "«La semana que viene» es futuro: «cuando tenga»."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para hablar de una obra desde que se ensaya hasta que el público aplaude. Algunas cambian según el país: te lo indicamos.",
    "groups": [
      {
        "title": "Antes de la función",
        "items": [
          {
            "es": "el ensayo general",
            "note": "La última prueba completa, con vestuario y luces."
          },
          {
            "es": "el elenco"
          },
          {
            "es": "el vestuario"
          },
          {
            "es": "la escenografía"
          },
          {
            "es": "el camarín",
            "note": "En España se dice «el camerino»."
          },
          {
            "es": "repasar la letra"
          }
        ]
      },
      {
        "title": "Durante la función",
        "items": [
          {
            "es": "subir el telón"
          },
          {
            "es": "bajar el telón"
          },
          {
            "es": "salir a escena"
          },
          {
            "es": "entre bastidores"
          },
          {
            "es": "quedarse en blanco",
            "note": "Olvidar de golpe lo que tenías que decir."
          },
          {
            "es": "el entreacto"
          }
        ]
      },
      {
        "title": "El público y la taquilla",
        "items": [
          {
            "es": "la taquilla"
          },
          {
            "es": "las entradas agotadas"
          },
          {
            "es": "la platea"
          },
          {
            "es": "el estreno"
          },
          {
            "es": "aplaudir de pie"
          },
          {
            "es": "la crítica"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-06-vocabulario-definiciones",
        "type": "match",
        "title": "Cada palabra con su definición",
        "prompt": "Une cada expresión con lo que significa.",
        "pairs": [
          {
            "left": "el ensayo general",
            "right": "la última prueba completa antes del estreno"
          },
          {
            "left": "quedarse en blanco",
            "right": "olvidar de golpe lo que había que decir"
          },
          {
            "left": "el entreacto",
            "right": "la pausa entre dos partes de la obra"
          },
          {
            "left": "la taquilla",
            "right": "el lugar donde se venden las entradas"
          },
          {
            "left": "entre bastidores",
            "right": "detrás del escenario, donde el público no ve"
          },
          {
            "left": "el elenco",
            "right": "el conjunto de actores y actrices de la obra"
          }
        ],
        "why": "Si dudas, piensa en qué momento de la noche aparece cada palabra."
      },
      {
        "id": "b1-06-vocabulario-huecos",
        "type": "gap",
        "title": "Una noche en el teatro",
        "prompt": "Completa con una palabra del banco.",
        "bank": [
          "agotadas",
          "telón",
          "camarín",
          "platea",
          "escena"
        ],
        "items": [
          {
            "q": "No quedan sitios: las entradas están ___ desde el lunes.",
            "answers": [
              [
                "agotadas"
              ]
            ],
            "why": "Entradas agotadas: ya no se pueden comprar."
          },
          {
            "q": "Cuando baje el ___, el público podrá salir a tomar algo.",
            "answers": [
              [
                "telón"
              ]
            ],
            "why": "El telón sube al empezar y baja al terminar."
          },
          {
            "q": "La actriz se maquilla sola en su ___ antes de la función.",
            "answers": [
              [
                "camarín",
                "camerino"
              ]
            ],
            "why": "En Argentina, «camarín»; en España, «camerino»."
          },
          {
            "q": "Mis padres se sentaron en la ___, muy cerca del escenario.",
            "answers": [
              [
                "platea"
              ]
            ],
            "why": "La platea es la zona baja de butacas, frente al escenario."
          },
          {
            "q": "Antes de salir a ___, el actor siempre respira hondo tres veces.",
            "answers": [
              [
                "escena"
              ]
            ],
            "why": "Salir a escena: aparecer ante el público."
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "La h muda: «que ha» y «que haya» se enlazan, pero no suenan igual",
    "explanation": [
      "La «h» no suena en español. Por eso «que ha» y «que haya» se pronuncian enlazados, sin pausa entre palabras: [ke‿a], [ke‿á.ʝa]. Lo que te permite distinguirlos es la sílaba final: «haya» tiene dos sílabas y la segunda empieza con el sonido de la «y».",
      "Lo mismo ocurre con «han» y «hayan»: «sé que han llegado» frente a «dudo que hayan llegado». Al hablar, no cortes la frase entre «que» y el auxiliar; dilo como una sola palabra larga y deja el acento en «ha» de «haya»."
    ],
    "examples": [
      {
        "es": "Sé que ha empezado. / No creo que haya empezado.",
        "note": "Una sílaba de diferencia: ha / ha-ya."
      },
      {
        "es": "Dicen que han ensayado. / Me alegra que hayan ensayado.",
        "note": "Han / ha-yan."
      }
    ],
    "perceive": {
      "id": "b1-06-pronunciacion-ha-haya",
      "type": "listen",
      "title": "¿«Ha» o «haya»?",
      "prompt": "Escucha cada frase y elige la forma que oyes.",
      "items": [
        {
          "q": "¿Qué oyes después de «que»?",
          "options": [
            "ha salido",
            "haya salido"
          ],
          "answer": 1,
          "why": "Dos sílabas, «ha-ya»: reacción con subjuntivo.",
          "audio": "Me alegra que haya salido bien el ensayo.",
          "voice": "es-AR-f"
        },
        {
          "q": "¿Y en esta frase?",
          "options": [
            "haya salido",
            "ha salido"
          ],
          "answer": 1,
          "why": "Una sola sílaba: «ha». Es una afirmación.",
          "audio": "Ya sé que ha salido bien el ensayo.",
          "voice": "es-AR-m"
        },
        {
          "q": "¿Qué oyes?",
          "options": [
            "hayan cerrado",
            "han cerrado"
          ],
          "answer": 0,
          "why": "«Ha-yan»: después de «dudo que» esperas subjuntivo.",
          "audio": "Dudo que hayan cerrado la sala.",
          "voice": "es-ES-f"
        },
        {
          "q": "¿Y aquí?",
          "options": [
            "hayan cerrado",
            "han cerrado"
          ],
          "answer": 1,
          "why": "«Han», una sílaba: el hablante lo presenta como un hecho.",
          "audio": "Parece que han cerrado la sala.",
          "voice": "es-MX-m"
        }
      ]
    },
    "produce": [
      {
        "text": "Me alegra que hayas venido.",
        "tip": "Enlaza «que_hayas» sin pausa y marca el acento en «ha».",
        "voice": "es-AR-f"
      },
      {
        "text": "No creo que haya terminado todavía.",
        "tip": "Tres sílabas seguidas: que-ha-ya. No pronuncies la «h».",
        "voice": "es-AR-m"
      },
      {
        "text": "Sé que han vendido todo, pero dudo que hayan cobrado.",
        "tip": "Compara «han» y «hayan» en la misma frase.",
        "voice": "es-ES-f"
      },
      {
        "text": "Es posible que hayamos olvidado algo.",
        "tip": "«Hayamos» lleva el acento en «ya»: ha-YA-mos.",
        "voice": "es-MX-f"
      }
    ],
    "spelling": "Recuerda que «haya» (de «haber») se escribe con h y con y; no la confundas con «halla» (de «hallar», encontrar) ni con «allá» (lugar)."
  },
  "listening": {
    "title": "Después del ensayo general",
    "context": "Son las once de la noche en una sala independiente del barrio de Almagro, en Buenos Aires. Termina el ensayo general de una obra que se estrena el sábado. La directora, Marcela, habla con Tomás, el técnico de luces, y con Inés, la productora.",
    "speakers": [
      {
        "id": "mar",
        "name": "Marcela",
        "voice": "es-AR-f",
        "role": "directora"
      },
      {
        "id": "tom",
        "name": "Tomás",
        "voice": "es-AR-m",
        "role": "técnico de luces"
      },
      {
        "id": "ine",
        "name": "Inés",
        "voice": "es-UY-f",
        "role": "productora"
      }
    ],
    "script": [
      {
        "speaker": "mar",
        "text": "Bueno, equipo, me alegra mucho que hayamos llegado al final sin parar. Hace una semana no lo habría creído."
      },
      {
        "speaker": "tom",
        "text": "A mí me sorprende que nadie se haya quedado en blanco. En el segundo acto pensé que Ramiro se perdía."
      },
      {
        "speaker": "mar",
        "text": "Sí, aunque no creo que el público lo haya notado. Lo que me preocupa es la luz del final: entró tarde."
      },
      {
        "speaker": "tom",
        "text": "Puede que yo haya tocado la consola antes de tiempo. El sábado, en cuanto Lucía diga la última frase, apago todo y cuento hasta tres."
      },
      {
        "speaker": "ine",
        "text": "Una buena noticia: esta tarde se han vendido las últimas entradas. Está todo agotado."
      },
      {
        "speaker": "mar",
        "text": "¡Qué bien que se hayan vendido antes del sábado! Entonces, organicemos el día. ¿A qué hora abrimos la sala?"
      },
      {
        "speaker": "ine",
        "text": "Cuando lleguen los actores, a las siete, les doy los camarines. Nadie entra en la platea hasta que yo avise. Y antes de que abra la puerta, alguien tiene que revisar los micrófonos."
      },
      {
        "speaker": "tom",
        "text": "Eso lo hago yo mientras ustedes se maquillan. Después de probar los micrófonos, subo a la cabina y ya no bajo hasta el final."
      },
      {
        "speaker": "mar",
        "text": "Perfecto. Y cuando termine la función, nada de irse corriendo: salimos todos a saludar y después brindamos acá mismo."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha una vez sin leer. ¿Cuál es la idea general?",
        "exercise": {
          "id": "b1-06-escucha-global",
          "type": "choice",
          "prompt": "Elige la mejor respuesta.",
          "items": [
            {
              "q": "¿Cómo ha ido el ensayo general?",
              "options": [
                "Mal: tuvieron que parar varias veces.",
                "Bien, con un pequeño problema de luces al final.",
                "No lo saben: el ensayo no ha terminado."
              ],
              "answer": 1,
              "why": "Llegaron al final sin parar; solo la luz final entró tarde."
            },
            {
              "q": "¿De qué hablan en la segunda parte?",
              "options": [
                "De cómo organizar el día del estreno.",
                "De cambiar el final de la obra.",
                "De devolver las entradas vendidas."
              ],
              "answer": 0,
              "why": "Inés y Tomás explican qué harán el sábado y en qué orden."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y fíjate en los detalles.",
        "exercise": {
          "id": "b1-06-escucha-detalle",
          "type": "choice",
          "prompt": "Responde según lo que dicen.",
          "items": [
            {
              "q": "¿Qué cree Tomás que pasó con la luz del final?",
              "options": [
                "Que la consola está rota.",
                "Que Lucía dijo mal la última frase.",
                "Que quizá tocó la consola antes de tiempo."
              ],
              "answer": 2,
              "why": "«Puede que yo haya tocado la consola antes de tiempo.»"
            },
            {
              "q": "¿Cuándo entra el público en la platea?",
              "options": [
                "A las siete, con los actores.",
                "Cuando Inés avise.",
                "Después del brindis."
              ],
              "answer": 1,
              "why": "«Nadie entra en la platea hasta que yo avise.»"
            },
            {
              "q": "¿Qué hará Tomás después de probar los micrófonos?",
              "options": [
                "Subirá a la cabina y se quedará allí hasta el final.",
                "Ayudará a maquillar a los actores.",
                "Abrirá la puerta de la sala."
              ],
              "answer": 0,
              "why": "«Subo a la cabina y ya no bajo hasta el final.»"
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Ahora fíjate en la gramática. Completa lo que dicen exactamente.",
        "exercise": {
          "id": "b1-06-escucha-formas",
          "type": "gap",
          "prompt": "Escribe la forma que usa cada personaje.",
          "items": [
            {
              "q": "Me alegra mucho que ___ al final sin parar.",
              "answers": [
                [
                  "hayamos llegado"
                ]
              ],
              "why": "Reacción ahora a algo que ya ocurrió."
            },
            {
              "q": "Me sorprende que nadie se ___ en blanco.",
              "answers": [
                [
                  "haya quedado"
                ]
              ],
              "why": "Sorpresa sobre un hecho anterior: «haya quedado»."
            },
            {
              "q": "En cuanto Lucía ___ la última frase, apago todo.",
              "answers": [
                [
                  "diga"
                ]
              ],
              "why": "«En cuanto» + acción futura: subjuntivo."
            },
            {
              "q": "Antes de que ___ la puerta, alguien tiene que revisar los micrófonos.",
              "answers": [
                [
                  "abra"
                ]
              ],
              "why": "«Antes de que» + subjuntivo siempre."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Bitácora de Telón Sur: la semana más larga",
    "genre": "Entrada de blog de una compañía de teatro",
    "frame": "La compañía Telón Sur publica cada semana una entrada en su blog para su público. Esta la escribe Inés, la productora, tres días antes del estreno.",
    "text": [
      "Queridos amigos de Telón Sur: faltan tres días para el estreno de «La casa de los relojes» y queremos contarles cómo llegamos hasta acá. Ha sido una semana larga, pero nos alegra muchísimo que la obra haya crecido tanto en tan poco tiempo. El lunes todavía no teníamos el decorado; hoy hay una escalera de madera de cuatro metros en el centro del escenario.",
      "No todo salió perfecto, claro. Nos da pena que Clara, nuestra violinista, se haya lesionado la mano y no pueda tocar en vivo. Grabamos su música el martes y, aunque no creemos que suene igual, es posible que el público ni lo haya imaginado. También nos sorprende que tantas personas hayan escrito para preguntar por funciones extra: gracias por la paciencia.",
      "¿Qué pasará ahora? Cuando terminemos de pintar la escalera, haremos el último ensayo con público invitado. En cuanto tengamos la fecha de la segunda temporada, la publicaremos aquí y en las redes. Y hasta que se abra la venta, no compren entradas en otras páginas: solo vendemos en la taquilla de la sala.",
      "Un último pedido: el sábado, antes de que suba el telón, apaguen los teléfonos. Después de la función, quédense un rato; los actores saldrán a charlar con ustedes mientras desarmamos el escenario."
    ],
    "glossary": [
      {
        "es": "la bitácora",
        "note": "Diario donde se anotan los avances de un proyecto."
      },
      {
        "es": "lesionarse"
      },
      {
        "es": "desarmar",
        "note": "En España se diría más bien «desmontar»."
      }
    ],
    "tasks": [
      {
        "id": "b1-06-lectura-comprension",
        "type": "choice",
        "title": "Comprensión",
        "prompt": "Responde según la entrada del blog.",
        "items": [
          {
            "q": "¿Por qué la música no será en vivo?",
            "options": [
              "Porque la violinista se ha lesionado la mano.",
              "Porque la sala no tiene sitio para una orquesta.",
              "Porque el público prefiere la música grabada."
            ],
            "answer": 0,
            "why": "«Nos da pena que Clara se haya lesionado la mano y no pueda tocar en vivo.»"
          },
          {
            "q": "¿Qué harán cuando terminen de pintar la escalera?",
            "options": [
              "Abrirán la venta de la segunda temporada.",
              "Harán un ensayo con público invitado.",
              "Grabarán de nuevo la música."
            ],
            "answer": 1,
            "why": "«Cuando terminemos de pintar la escalera, haremos el último ensayo con público invitado.»"
          },
          {
            "q": "¿Qué piden a los lectores sobre las entradas?",
            "options": [
              "Que las compren cuanto antes por internet.",
              "Que esperen a la segunda temporada.",
              "Que solo las compren en la taquilla de la sala."
            ],
            "answer": 2,
            "why": "Solo venden en la taquilla; hasta que se abra la venta, no hay que comprar en otras páginas."
          }
        ]
      },
      {
        "id": "b1-06-lectura-orden",
        "type": "classify",
        "title": "¿Ya pasó o todavía no?",
        "prompt": "Según la bitácora, ¿cada cosa ya ha ocurrido o va a ocurrir?",
        "categories": [
          "Ya ha ocurrido",
          "Todavía no ha ocurrido"
        ],
        "items": [
          {
            "text": "Construir la escalera de madera",
            "cat": 0
          },
          {
            "text": "Grabar la música del violín",
            "cat": 0
          },
          {
            "text": "Publicar la fecha de la segunda temporada",
            "cat": 1
          },
          {
            "text": "Recibir mensajes que piden funciones extra",
            "cat": 0
          },
          {
            "text": "Charlar con los actores después de la función",
            "cat": 1
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Fíjate en cómo el texto mira hacia atrás y hacia delante.",
      "items": [
        {
          "quote": "nos alegra muchísimo que la obra haya crecido tanto",
          "note": "Valoración actual de un cambio que ya ocurrió: «haya + participio»."
        },
        {
          "quote": "es posible que el público ni lo haya imaginado",
          "note": "Posibilidad sobre algo anterior, también con perfecto de subjuntivo."
        },
        {
          "quote": "Cuando terminemos de pintar la escalera, haremos",
          "note": "«Cuando» + presente de subjuntivo para un plan; el futuro va en la otra parte."
        },
        {
          "quote": "hasta que se abra la venta, no compren",
          "note": "«Hasta que» marca el límite de una instrucción futura."
        }
      ]
    }
  },
  "practice": {
    "intro": "Ahora combinas las dos clases y recuperas lo de semanas anteriores.",
    "exercises": [
      {
        "id": "b1-06-practica-orden",
        "type": "order",
        "title": "Instrucciones para el sábado",
        "prompt": "Ordena las palabras para formar instrucciones completas.",
        "items": [
          {
            "words": [
              "En",
              "cuanto",
              "se",
              "apague",
              "la",
              "sala,",
              "empieza",
              "la",
              "música."
            ]
          },
          {
            "words": [
              "Nadie",
              "sale",
              "del",
              "camarín",
              "hasta",
              "que",
              "yo",
              "avise."
            ]
          },
          {
            "words": [
              "Prueba",
              "el",
              "micrófono",
              "antes",
              "de",
              "que",
              "entre",
              "el",
              "público."
            ]
          },
          {
            "words": [
              "Cuando",
              "termine",
              "el",
              "saludo,",
              "bajaremos",
              "el",
              "telón."
            ]
          }
        ]
      },
      {
        "id": "b1-06-practica-retrieval",
        "type": "context",
        "title": "Recuperación: semanas 2 a 4",
        "prompt": "Recuperación de semanas anteriores: deseos, valoraciones y opinión negada. Lee la situación del teatro y elige la forma correcta.",
        "items": [
          {
            "context": "Semana 2, deseos. Mañana es el estreno y la directora está nerviosa.",
            "q": "«Ojalá mañana no ___ nadie.»",
            "options": [
              "se equivoque",
              "se equivoca",
              "se equivocará"
            ],
            "answer": 0,
            "why": "Deseo hacia el futuro: «ojalá» + presente de subjuntivo."
          },
          {
            "context": "Semana 3, valoraciones. El productor habla de las normas de la sala.",
            "q": "«Es importante que el público ___ el móvil.»",
            "options": [
              "apaga",
              "apague",
              "apagará"
            ],
            "answer": 1,
            "why": "Valoración general («es importante que») + subjuntivo."
          },
          {
            "context": "Semana 4, opinión. Un actor comenta el decorado.",
            "q": "«Creo que la escalera ___ demasiado alta.»",
            "options": [
              "sea",
              "haya sido",
              "es"
            ],
            "answer": 2,
            "why": "Opinión afirmativa con «creo que»: indicativo."
          },
          {
            "context": "Semana 4, opinión negada. Otra actriz no está de acuerdo.",
            "q": "«Pues yo no creo que ___ peligrosa.»",
            "options": [
              "es",
              "sea",
              "será"
            ],
            "answer": 1,
            "why": "Opinión negada: «no creo que» + subjuntivo."
          }
        ]
      },
      {
        "id": "b1-06-practica-transformar",
        "type": "transform",
        "title": "De la noticia a la reacción",
        "prompt": "Transforma la noticia en una reacción con la expresión indicada.",
        "items": [
          {
            "source": "Los actores han aprendido la coreografía.",
            "instruction": "Empieza con «Me alegra que…».",
            "answers": [
              "Me alegra que los actores hayan aprendido la coreografía."
            ],
            "why": "Reacción actual a un hecho anterior: «hayan aprendido»."
          },
          {
            "source": "El director ha cambiado el final.",
            "instruction": "Empieza con «No creo que…».",
            "answers": [
              "No creo que el director haya cambiado el final."
            ],
            "why": "Duda sobre algo pasado: «haya cambiado»."
          },
          {
            "source": "Alguien ha abierto la puerta de emergencia.",
            "instruction": "Empieza con «Puede que…».",
            "answers": [
              "Puede que alguien haya abierto la puerta de emergencia."
            ],
            "why": "Posibilidad sobre algo anterior: participio irregular «abierto»."
          }
        ]
      },
      {
        "id": "b1-06-practica-escritura-guiada",
        "type": "open",
        "title": "Mensajes cortos del equipo",
        "prompt": "Escribe cada mensaje en dos o tres frases.",
        "items": [
          {
            "prompt": "Una compañera ha conseguido un patrocinador para la obra. Escríbele un mensaje para felicitarla y explica qué harán cuando llegue el dinero.",
            "model": "¡Qué bien que hayas conseguido el patrocinio! Cuando llegue el dinero, pagaremos las luces nuevas y, en cuanto podamos, imprimiremos los programas.",
            "checklist": [
              "Usa «haya + participio» para reaccionar.",
              "Usa «cuando» o «en cuanto» + subjuntivo para el plan."
            ]
          },
          {
            "prompt": "El técnico no contesta al teléfono y el ensayo empieza en una hora. Escribe al grupo una hipótesis sobre lo que ha pasado y una instrucción.",
            "model": "Es posible que Bruno se haya quedado sin batería. No empecemos hasta que llegue; mientras lo esperamos, repasemos la segunda escena.",
            "checklist": [
              "Hay una hipótesis con «es posible que» o «puede que» + «haya + participio».",
              "Hay una instrucción con «hasta que» o «mientras»."
            ]
          },
          {
            "prompt": "Después del estreno, un amigo te escribe que no pudo ir. Contéstale con una reacción y una propuesta para la próxima función.",
            "model": "Es una pena que no hayas podido venir, pero no pasa nada. Cuando sepas qué día tienes libre, avísame y te guardo una entrada.",
            "checklist": [
              "La reacción usa «haya + participio».",
              "La propuesta usa una oración temporal con subjuntivo."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe un mensaje al elenco y al equipo técnico la noche antes del estreno. Valora lo que el grupo ha conseguido durante los ensayos y explica, en orden, qué pasará mañana desde que lleguen al teatro hasta después de la función.",
    "context": "Eres la persona que coordina una obra de teatro amateur. El grupo tiene un chat y todos leerán tu mensaje antes de dormir.",
    "steps": [
      "Haz dos listas: lo que ya ha pasado (logros y problemas) y lo que pasará mañana, en orden.",
      "En el primer párrafo, reacciona a lo que ha pasado con «me alegra que», «es una pena que», «no creo que» + «haya + participio».",
      "En el segundo, organiza el día con al menos cuatro conectores temporales diferentes.",
      "Revisa el texto: detrás de «cuando», «en cuanto» y «hasta que» no debe haber ningún futuro, y los participios no cambian."
    ],
    "useLanguage": [
      "me alegra que + haya + participio",
      "es una pena que / no creo que + haya + participio",
      "cuando / en cuanto / hasta que + subjuntivo",
      "antes de que / después de + infinitivo",
      "mientras + subjuntivo"
    ],
    "model": [
      "Hola a todos: antes de dormir, quiero darles las gracias. Me alegra muchísimo que hayamos llegado al ensayo general con la obra entera y que nadie se haya quedado en blanco. Es una pena que el proyector se haya roto el jueves, pero no creo que el público eche de menos las imágenes: la escena funciona igual sin ellas.",
      "Mañana, cuando lleguen al teatro a las seis, vayan directamente al camarín. En cuanto estén maquillados, haremos un calentamiento corto en el escenario. Nadie sale a la platea hasta que se abran las puertas, y antes de que entre el público, Bruno probará todos los micrófonos. Mientras dure la función, los teléfonos se quedan en las mochilas. Después de saludar, recogemos todo juntos y nos vamos a cenar a la pizzería de la esquina. Descansen bien esta noche y lleguen puntuales. ¡Nos vemos mañana!"
    ],
    "checklist": [
      "Hay al menos tres reacciones o dudas con «haya + participio».",
      "Detrás de «cuando», «en cuanto», «hasta que» y «mientras» hay subjuntivo, nunca futuro.",
      "Uso «antes de» o «después de» + infinitivo cuando el sujeto es el mismo.",
      "El mensaje tiene dos párrafos: lo que ya pasó y lo que pasará."
    ],
    "words": [
      130,
      180
    ]
  },
  "speaking": {
    "intro": "Graba tus respuestas. Escúchate después y comprueba si enlazas «que_haya» y si eliges bien el modo detrás de cada conector.",
    "tasks": [
      {
        "title": "La arenga antes de la función",
        "prompt": "Faltan diez minutos para el estreno. Habla durante dos minutos al grupo: valora lo que han conseguido en estas semanas, reconoce algo que no salió bien y recuerda qué hará cada uno cuando suba el telón y cuando termine la obra.",
        "prep": [
          "Tres logros del grupo con «me alegra que» o «qué bien que».",
          "Un problema con «es una pena que» y una duda con «no creo que».",
          "Cuatro instrucciones con «cuando», «en cuanto», «hasta que» y «antes de que»."
        ],
        "seconds": 120,
        "model": "Bueno, gente, escuchen un momento. Quiero decirles que me alegra muchísimo que hayamos llegado hasta acá. Qué bien que Ramiro haya aprendido el monólogo en una semana… Es una pena que no hayamos tenido más ensayos con luces, pero no creo que se note. Ahora, cuando suba el telón, respiren y miren al fondo de la sala. En cuanto termine la última escena, nos quedamos quietos hasta que baje el telón…",
        "selfCheck": [
          "¿He hablado al menos dos minutos sin leer?",
          "¿He usado «haya + participio» al menos tres veces?",
          "¿He evitado el futuro detrás de «cuando» y «en cuanto»?"
        ]
      },
      {
        "title": "Responde al voluntario nuevo",
        "prompt": "Un voluntario nuevo va a ayudar en la sala y te hace preguntas: «¿Qué hago cuando llegue? ¿Hasta cuándo me quedo en la puerta? ¿Y si alguien llega tarde?». Responde a cada pregunta y aclara qué hará en cada momento. Si puedes, practica con un compañero que haga de interlocutor.",
        "prep": [
          "Usa «cuando», «hasta que» y «en cuanto» con subjuntivo.",
          "Termina preguntándole si tiene alguna duda más."
        ],
        "seconds": 90,
        "model": "Cuando llegues, preséntate en la taquilla. Te quedas en la puerta hasta que empiece la función. Si alguien llega tarde, no lo dejes pasar hasta que termine la primera escena; en cuanto se encienda la luz azul, lo acompañas a su butaca. ¿Tienes alguna otra pregunta?",
        "selfCheck": [
          "¿He contestado las tres preguntas?",
          "¿He usado subjuntivo para cada acción futura?"
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva a la próxima clase tu mensaje al elenco y estas tarjetas. Te ayudarán a usar lo que repasaste con tu profesor.",
    "cards": [
      {
        "move": "Cuéntale",
        "task": "Cuéntale a tu profesor una buena noticia reciente de tu vida y pídele que reaccione con «qué bien que hayas…». Después reacciona tú a una noticia suya.",
        "phrases": [
          "Me alegra mucho que hayas…",
          "¡Qué bien que hayas…!"
        ]
      },
      {
        "move": "Planifica",
        "task": "Explícale tus planes para el próximo fin de semana usando tres conectores distintos: cuando, en cuanto y hasta que.",
        "phrases": [
          "En cuanto salga del trabajo…",
          "No voy a descansar hasta que…"
        ]
      },
      {
        "move": "Pregunta",
        "task": "Pregúntale si en su variedad del español se dice «camarín» o «camerino», y qué otras palabras del teatro cambian de un país a otro.",
        "phrases": [
          "¿Cómo se dice en tu país…?"
        ]
      },
      {
        "move": "Duda",
        "task": "Imagina con tu profesor qué ha podido pasar en una situación misteriosa (una sala vacía, una carta sin firma) usando «puede que» y «no creo que» + «haya + participio».",
        "phrases": [
          "Puede que alguien haya…",
          "No creo que haya…"
        ]
      }
    ],
    "bring": "Tu mensaje al elenco revisado y la grabación de la arenga."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "Tu amigo te cuenta que ha aprobado el examen de conducir. Le dices:",
        "options": [
          "¡Qué bien que apruebes!",
          "¡Qué bien que has aprobado!",
          "¡Qué bien que hayas aprobado!"
        ],
        "answer": 2,
        "why": "Reacción actual a un hecho ya ocurrido: «hayas aprobado»."
      },
      {
        "type": "choice",
        "q": "¿Qué frase habla de una costumbre?",
        "options": [
          "Cuando llego a casa, me quito los zapatos.",
          "Cuando llegue a casa, me quitaré los zapatos.",
          "Cuando llegues a casa, quítate los zapatos."
        ],
        "answer": 0,
        "why": "Costumbre: indicativo detrás de «cuando»."
      },
      {
        "type": "listen",
        "q": "Escucha. ¿Qué expresa el hablante?",
        "options": [
          "Que el decorado se terminará pronto.",
          "Que no está seguro de que el decorado esté terminado.",
          "Que sabe que el decorado está terminado."
        ],
        "answer": 1,
        "why": "«Dudo que hayan terminado»: duda sobre una acción anterior.",
        "audio": "Dudo que hayan terminado el decorado a tiempo.",
        "voice": "es-AR-m"
      },
      {
        "type": "gap",
        "q": "Es una pena que tus primos no ___ venir a la boda. (poder)",
        "answers": [
          [
            "hayan podido"
          ]
        ],
        "why": "«Hayan» + participio invariable."
      },
      {
        "type": "gap",
        "q": "Te llamo en cuanto ___ del médico. (salir, yo)",
        "answers": [
          [
            "salga"
          ]
        ],
        "why": "Acción futura después de «en cuanto»: subjuntivo."
      },
      {
        "type": "gap",
        "q": "No cierres la tienda hasta que ___ el último cliente. (irse)",
        "answers": [
          [
            "se vaya"
          ]
        ],
        "why": "«Hasta que» + acción futura: «se vaya»."
      },
      {
        "type": "order",
        "words": [
          "Puede",
          "que",
          "los",
          "niños",
          "ya",
          "hayan",
          "cenado."
        ],
        "why": "«Ya» va antes de «haya»; entre el auxiliar y el participio no se pone nada."
      },
      {
        "type": "error",
        "sentence": "Antes de que te vas, dame tu número.",
        "answers": [
          "Antes de que te vayas, dame tu número."
        ],
        "why": "«Antes de que» lleva siempre subjuntivo."
      },
      {
        "type": "error",
        "sentence": "Me sorprende que Carla haya decido no venir.",
        "answers": [
          "Me sorprende que Carla haya decidido no venir."
        ],
        "why": "El participio de «decidir» es regular: «decidido»."
      },
      {
        "type": "open",
        "prompt": "Reformulación: une las dos ideas en una sola frase con un conector temporal. «Primero vas a terminar el informe. Después me lo envías.»",
        "model": "En cuanto termines el informe, envíamelo. / Cuando termines el informe, me lo envías.",
        "checklist": [
          "Usa «cuando» o «en cuanto».",
          "El verbo detrás del conector está en subjuntivo: «termines».",
          "La otra parte va en imperativo, presente o futuro."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Reaccionar a lo que ya ha pasado con «me alegra que», «es una pena que» o «qué bien que» + «haya + participio».",
      "Dudar de un hecho anterior o imaginar qué ha podido pasar con «no creo que» y «puede que».",
      "Organizar acciones futuras con «cuando», «en cuanto», «hasta que», «mientras» y «antes de que» + subjuntivo.",
      "Usar indicativo con «cuando» para costumbres y hechos pasados."
    ],
    "review": [
      "Los participios irregulares: hecho, dicho, puesto, vuelto, roto, abierto, escrito.",
      "«Antes de que» siempre con subjuntivo; con el mismo sujeto, «antes de» + infinitivo.",
      "El presente de subjuntivo de la semana 2, que necesitas detrás de los conectores temporales."
    ]
  },
  "related": [
    {
      "path": "/sistema-verbal/preterito-perfecto-subjuntivo",
      "label": "Clase: Perfecto de subjuntivo: pasado valorado desde ahora"
    },
    {
      "path": "/gramatica/temporales-futuras-cuando-en-cuanto-hasta",
      "label": "Clase: Temporales futuras: cuando, en cuanto, hasta que"
    }
  ]
};
