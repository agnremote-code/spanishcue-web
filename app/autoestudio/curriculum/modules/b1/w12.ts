import type { Module } from "../../types";

/**
 * B1 · semana 12 · Autoestudio espejo de G110 (verbos con preposición fija: acostumbrarse a,
 * tratar de, pensar en) y G238 (verbos de cambio). Repaso autónomo con Carmen, una ingeniera
 * de Quito que se mudó a Cuenca y se hizo tejedora de sombreros de paja toquilla.
 */
export const b1w12: Module = {
  "id": "b1-12",
  "level": "b1",
  "week": 12,
  "kind": "core",
  "title": "De ingeniera a tejedora en Cuenca: preposiciones fijas y verbos de cambio",
  "subtitle": "Repaso de los verbos que siempre van con la misma preposición (acostumbrarse a, darse cuenta de, pensar en, contar con) y de los verbos que cuentan cómo cambian las personas y los lugares.",
  "stop": {
    "place": "Cuenca",
    "country": "Ecuador"
  },
  "minutes": 95,
  "newObjectives": [
    "b1.gram.g110",
    "b1.gram.g238",
    "b1.voc.w12-artesania-cambio-vida",
    "b1.pron.w12-preposicion-enlazada",
    "b1.lis.w12-visita-taller",
    "b1.read.w12-perfil-revista",
    "b1.wri.w12-cambio-persona-lugar",
    "b1.spk.w12-mi-cambio",
    "b1.fun.w12-describir-cambios",
    "b1.disc.w12-antes-ahora"
  ],
  reviewObjectives: ["b1.gram.g108","b1.gram.g109","b1.voc.w11-habitos-digitales","b1.pron.w11-acento-presente-pasado","b1.lis.w11-charla-teteria","b1.read.w11-blog-dia-31","b1.wri.w11-balance-cambio","b1.spk.w11-contar-reto","b1.fun.w11-contar-cambios","b1.disc.w11-antes-despues"],
  prerequisites: ["b1-11"],
  "goal": {
    "canDo": "Al final de esta semana puedes contar un cambio de vida: a qué te acostumbraste, de qué te diste cuenta, con qué sueñas, y si te hiciste, te volviste o te convertiste en otra persona.",
    "steps": [
      "Repasa los verbos con preposición fija, agrupados por «a», «de», «en» y «con», y cómo se comportan delante de «que» y en las preguntas.",
      "Repasa la diferencia entre hacerse, volverse, convertirse en, llegar a ser y pasar a ser.",
      "Escucha la visita de un estudiante al taller de sombreros de Carmen en Cuenca.",
      "Lee el perfil de Carmen en una revista de viajes.",
      "Escribe cómo ha cambiado una persona o un lugar, revísalo y cuéntalo en voz alta."
    ]
  },
  "theory": {
    "intro": "Esta semana repasas dos clases que se ayudan mucho. La primera trata de verbos que siempre van con la misma preposición: si cambias la preposición, la frase suena mal o cambia de sentido. La segunda, de los verbos que en español traducen la idea de «cambiar y llegar a ser otra cosa». Te acompaña Carmen, una ingeniera de Quito que hace diez años se mudó a Cuenca y hoy teje sombreros de paja toquilla.",
    "parts": [
      {
        "heading": "Cada verbo con su preposición",
        "body": [
          "Algunos verbos llevan siempre la misma preposición antes de un nombre o de un infinitivo. Lo más práctico es aprenderlos en bloque, como una sola palabra: «acostumbrarse a», «tratar de», «pensar en», «soñar con». Si cambias la preposición, el oyente nota el error enseguida.",
          "Agruparlos por preposición te ayuda a recordarlos. Con «a» suelen ir verbos de empezar o atreverse (aprender a, atreverse a, negarse a). Con «de» hay muchos de memoria y emociones (acordarse de, olvidarse de, quejarse de). Con «en», verbos de mente y confianza (pensar en, confiar en, fijarse en). Con «con», verbos de deseo y compañía (soñar con, contar con, casarse con)."
        ],
        "table": {
          "caption": "Verbos frecuentes agrupados por preposición",
          "head": [
            "Preposición",
            "Verbos",
            "Ejemplo"
          ],
          "rows": [
            [
              "a",
              "acostumbrarse a, aprender a, atreverse a, ayudar a, negarse a",
              "Me costó acostumbrarme a la altura."
            ],
            [
              "de",
              "tratar de, acordarse de, olvidarse de, quejarse de, darse cuenta de",
              "Trato de hablar más despacio."
            ],
            [
              "en",
              "pensar en, confiar en, fijarse en, tardar en, quedar en",
              "Tardé un año en aprender el oficio."
            ],
            [
              "con",
              "soñar con, contar con, casarse con",
              "Puedes contar con nosotros para la mudanza."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Todavía no me acostumbro el frío de la mañana.",
            "right": "Todavía no me acostumbro al frío de la mañana.",
            "why": "«Acostumbrarse» siempre lleva «a» (a + el = al)."
          },
          {
            "wrong": "Siempre sueño en volver a la costa.",
            "right": "Siempre sueño con volver a la costa.",
            "why": "Se dice «soñar con»."
          }
        ]
      },
      {
        "heading": "La preposición no desaparece: delante de «que» y en las preguntas",
        "body": [
          "Cuando detrás del verbo viene una frase con «que», la preposición se queda: «Me di cuenta de que el taller era pequeño», «Confío en que lo terminemos a tiempo». Quitarla es un error frecuente (queísmo). El error contrario es añadir «de» donde no hace falta (dequeísmo): «Pienso que…», no «Pienso de que…». Un truco: cambia la frase por «eso». Si dices «me di cuenta de eso», necesitas «de que»; si dices «pienso eso», solo «que».",
          "En las preguntas, la preposición va delante: «¿En qué piensas?», «¿Con quién cuentas?», «¿De qué te quejas?». Y ojo con «pensar»: «pensar en» es tener a alguien o algo en la mente; «¿qué piensas de…?» pide una opinión; «pensar + infinitivo» es tener la intención."
        ],
        "examples": [
          {
            "es": "Me acordé de que tenía una cita con el dentista.",
            "note": "«Acordarse de» + «que»: la preposición se queda."
          },
          {
            "es": "Recuerdo que llovía mucho aquel invierno.",
            "note": "«Recordar» no lleva preposición."
          },
          {
            "es": "¿Con quién te casaste al final?",
            "note": "Pregunta: la preposición va delante."
          },
          {
            "es": "Pienso en mi abuela cuando veo estos sombreros.",
            "note": "«Pensar en»: tener en la mente."
          },
          {
            "es": "Pienso abrir una tienda el año que viene.",
            "note": "«Pensar + infinitivo»: intención."
          }
        ],
        "mistakes": [
          {
            "wrong": "Creo de que el taller cierra a las seis.",
            "right": "Creo que el taller cierra a las seis.",
            "why": "Dequeísmo: «creo eso», no «creo de eso». Sin preposición."
          },
          {
            "wrong": "No me di cuenta que era tan tarde.",
            "right": "No me di cuenta de que era tan tarde.",
            "why": "Queísmo: «me di cuenta de eso», así que «de que»."
          }
        ],
        "tip": "Antes de escribir «de que», prueba con «eso»: si la frase pide «de eso», deja la preposición; si no, quítala."
      },
      {
        "heading": "Hacerse, volverse y convertirse en",
        "body": [
          "En español no hay un solo verbo para «cambiar y llegar a ser». «Hacerse» + adjetivo o nombre sin artículo cuenta un cambio que depende de una decisión o de un proceso largo: profesión, creencias, ideas, edad, dinero («Se hizo artesana», «Se hizo vegetariano», «Nos hacemos mayores»).",
          "«Volverse» + adjetivo cuenta un cambio de carácter o de forma de ser que la persona no controla del todo: «Con los años se volvió más paciente». «Convertirse en» + nombre cuenta una transformación completa, de personas, cosas o lugares: «La casa de mi abuelo se convirtió en un taller». Fíjate: «convertirse» siempre lleva «en», y «volverse» nunca."
        ],
        "table": {
          "caption": "Tres verbos, tres tipos de cambio",
          "head": [
            "Verbo",
            "Qué cambio cuenta",
            "Ejemplo"
          ],
          "rows": [
            [
              "hacerse + adjetivo / nombre",
              "decisión, profesión, ideas, proceso largo",
              "Mi prima se hizo enfermera."
            ],
            [
              "volverse + adjetivo",
              "carácter o cualidad, sin control",
              "Desde la mudanza, se ha vuelto muy tranquilo."
            ],
            [
              "convertirse en + nombre",
              "transformación de personas, cosas o lugares",
              "El mercado se convirtió en un centro cultural."
            ],
            [
              "ponerse / quedarse (A2)",
              "reacción rápida / resultado de un hecho",
              "Se puso rojo. Se quedó sin trabajo."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "La fábrica se convirtió un museo.",
            "right": "La fábrica se convirtió en un museo.",
            "why": "«Convertirse» siempre lleva «en»."
          },
          {
            "wrong": "Se volvió en una persona muy seria.",
            "right": "Se volvió una persona muy seria.",
            "why": "«Volverse» no lleva «en»; con un nombre, lleva «un» o «una»."
          }
        ]
      },
      {
        "heading": "Llegar a ser, pasar a ser y volverse frente a volver a",
        "body": [
          "«Llegar a ser» cuenta la meta de un camino largo, casi siempre con esfuerzo: «Llegó a ser la mejor tejedora del barrio». «Pasar a ser» es más neutro: un cambio de categoría, de cargo o de estado, frecuente en las noticias («El pueblo pasó a ser parte del municipio»).",
          "No confundas «volverse» con «volver a», que repasaste la semana 11. «Se volvió desconfiado» es un cambio de carácter; «volvió a confiar» significa que confió otra vez; y «volvió serio» quiere decir que regresó de algún sitio con cara seria."
        ],
        "examples": [
          {
            "es": "Empezó como aprendiz y llegó a ser maestra del oficio.",
            "note": "Meta alcanzada con esfuerzo."
          },
          {
            "es": "En 2020 la ruta pasó a ser gratuita.",
            "note": "Cambio neutro de categoría."
          },
          {
            "es": "Después del robo se volvió desconfiada.",
            "note": "Cambio de carácter."
          },
          {
            "es": "Después del robo tardó en volver a confiar en la gente.",
            "note": "«Volver a» = otra vez."
          }
        ],
        "mistakes": [
          {
            "wrong": "Se puso abogada después de cinco años de estudio.",
            "right": "Se hizo abogada después de cinco años de estudio.",
            "why": "Una profesión se consigue con «hacerse» o «llegar a ser», no con «ponerse»."
          }
        ],
        "tip": "Hazte tres preguntas: ¿lo decidió o lo buscó? (hacerse), ¿le cambió el carácter sin querer? (volverse), ¿es ahora otra cosa? (convertirse en)."
      }
    ]
  },
  "grammar": {
    "intro": "Primero practicas las preposiciones fijas; después, los verbos de cambio.",
    "exercises": [
      {
        "id": "b1-12-gramatica-preposiciones",
        "type": "gap",
        "title": "¿Qué preposición lleva?",
        "prompt": "Completa con «a», «de», «en» o «con» (o con «al» o «del» si hace falta).",
        "items": [
          {
            "q": "Al principio no me atrevía ___ hablar con los clientes.",
            "answers": [
              [
                "a"
              ]
            ],
            "why": "«Atreverse a»."
          },
          {
            "q": "Mi madre siempre se queja ___ ruido de la calle.",
            "answers": [
              [
                "del"
              ]
            ],
            "why": "«Quejarse de» + el = del."
          },
          {
            "q": "¿Puedo contar ___ tu ayuda el sábado?",
            "answers": [
              [
                "con"
              ]
            ],
            "why": "«Contar con»."
          },
          {
            "q": "Fíjate ___ cómo dobla la paja antes de tejer.",
            "answers": [
              [
                "en"
              ]
            ],
            "why": "«Fijarse en»."
          },
          {
            "q": "Tardamos tres horas ___ llegar al mirador de Turi.",
            "answers": [
              [
                "en"
              ]
            ],
            "why": "«Tardar en» + tiempo."
          },
          {
            "q": "Mi hermano se negó ___ vender la casa familiar.",
            "answers": [
              [
                "a"
              ]
            ],
            "why": "«Negarse a»."
          }
        ]
      },
      {
        "id": "b1-12-gramatica-que-preguntas",
        "type": "choice",
        "title": "¿Con preposición o sin ella?",
        "prompt": "Elige la opción correcta.",
        "items": [
          {
            "q": "___ que había dejado las llaves dentro.",
            "options": [
              "Me di cuenta",
              "Me di cuenta de",
              "Me di de cuenta"
            ],
            "answer": 1,
            "why": "«Darse cuenta de eso» → «de que»."
          },
          {
            "q": "Te prometo ___ lo termino antes del viernes.",
            "options": [
              "de que",
              "en que",
              "que"
            ],
            "answer": 2,
            "why": "«Prometer eso»: sin preposición."
          },
          {
            "q": "¿___ estás pensando? Te veo muy callada.",
            "options": [
              "En qué",
              "Qué",
              "De qué"
            ],
            "answer": 0,
            "why": "«Pensar en» → «¿En qué piensas?»."
          },
          {
            "q": "¿Qué piensas ___ nuevo tranvía de Cuenca?",
            "options": [
              "en el",
              "del",
              "con el"
            ],
            "answer": 1,
            "why": "Pedir opinión: «¿Qué piensas de…?»."
          },
          {
            "q": "Mi socio y yo quedamos ___ abrir los domingos.",
            "options": [
              "de que",
              "a",
              "en"
            ],
            "answer": 2,
            "why": "«Quedar en»: ponerse de acuerdo."
          }
        ]
      },
      {
        "id": "b1-12-gramatica-tipo-cambio",
        "type": "classify",
        "title": "¿Qué verbo de cambio?",
        "prompt": "Clasifica cada frase según el verbo de cambio que necesita.",
        "categories": [
          "hacerse",
          "volverse",
          "convertirse en",
          "llegar a ser"
        ],
        "items": [
          {
            "text": "Estudió muchos años y al final ___ jueza del Tribunal Supremo.",
            "cat": 3
          },
          {
            "text": "A los veinte años decidió ___ budista.",
            "cat": 0
          },
          {
            "text": "Con la fama, el cantante ___ muy arrogante.",
            "cat": 1
          },
          {
            "text": "La antigua estación ___ una biblioteca pública.",
            "cat": 2
          },
          {
            "text": "Mi vecino ___ rico vendiendo artesanías por internet.",
            "cat": 0
          },
          {
            "text": "Después del accidente, mi padre ___ más prudente.",
            "cat": 1
          },
          {
            "text": "Esa pequeña tienda ___ la empresa más grande de la ciudad.",
            "cat": 2
          },
          {
            "text": "Empezó limpiando la cocina y ___ chef del mejor restaurante de Quito.",
            "cat": 3
          }
        ]
      },
      {
        "id": "b1-12-gramatica-errores",
        "type": "error",
        "title": "Corrige el error",
        "prompt": "Cada frase tiene un error de las dos clases. Escríbela bien.",
        "items": [
          {
            "sentence": "El convento se convirtió un hotel de lujo.",
            "answers": [
              "El convento se convirtió en un hotel de lujo."
            ],
            "why": "«Convertirse» siempre lleva «en»."
          },
          {
            "sentence": "Nunca me olvido que me ayudaste con la mudanza.",
            "answers": [
              "Nunca me olvido de que me ayudaste con la mudanza.",
              "Nunca olvido que me ayudaste con la mudanza."
            ],
            "why": "«Olvidarse de que»; o bien «olvidar que», sin «me»."
          },
          {
            "sentence": "Mis padres se casaron en la catedral y soñaron en un viaje a Galápagos.",
            "answers": [
              "Mis padres se casaron en la catedral y soñaron con un viaje a Galápagos."
            ],
            "why": "Se dice «soñar con»."
          },
          {
            "sentence": "Desde que trabaja de noche, se ha puesto una persona muy seria.",
            "answers": [
              "Desde que trabaja de noche, se ha vuelto una persona muy seria."
            ],
            "why": "Un cambio de carácter duradero: «volverse»."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para hablar de un oficio artesanal y de un cambio de vida. Algunas son muy de Ecuador: te lo indicamos.",
    "groups": [
      {
        "title": "El oficio",
        "items": [
          {
            "es": "la paja toquilla",
            "note": "Fibra vegetal con la que se tejen los sombreros en Ecuador."
          },
          {
            "es": "tejer"
          },
          {
            "es": "el taller"
          },
          {
            "es": "el aprendiz, la aprendiz"
          },
          {
            "es": "el oficio"
          },
          {
            "es": "la artesana, el artesano"
          },
          {
            "es": "el ala del sombrero"
          }
        ]
      },
      {
        "title": "Cambiar de vida",
        "items": [
          {
            "es": "dar un giro a la vida"
          },
          {
            "es": "dejar un empleo fijo"
          },
          {
            "es": "ganarse la vida"
          },
          {
            "es": "empezar de cero"
          },
          {
            "es": "la vocación"
          },
          {
            "es": "adaptarse"
          }
        ]
      },
      {
        "title": "Expresiones útiles",
        "items": [
          {
            "es": "tener buena mano para algo"
          },
          {
            "es": "a mano",
            "note": "Hecho por una persona, sin máquinas."
          },
          {
            "es": "ahorita",
            "note": "Muy usado en Ecuador: «ahora», «enseguida»."
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-12-vocabulario-definiciones",
        "type": "match",
        "title": "Cada expresión con su definición",
        "prompt": "Une cada expresión con su explicación.",
        "pairs": [
          {
            "left": "dar un giro a la vida",
            "right": "cambiar de forma importante tu manera de vivir"
          },
          {
            "left": "el aprendiz",
            "right": "la persona que aprende un oficio trabajando con alguien"
          },
          {
            "left": "ganarse la vida",
            "right": "conseguir el dinero necesario para vivir"
          },
          {
            "left": "tener buena mano",
            "right": "hacer algo con habilidad natural"
          },
          {
            "left": "empezar de cero",
            "right": "comenzar algo nuevo sin experiencia previa"
          }
        ],
        "why": "Fíjate en si la expresión habla de una persona, de un cambio, de dinero o de una habilidad."
      },
      {
        "id": "b1-12-vocabulario-huecos",
        "type": "gap",
        "title": "El cuaderno de Carmen",
        "prompt": "Completa con una palabra del banco.",
        "bank": [
          "taller",
          "tejer",
          "oficio",
          "mano",
          "ala"
        ],
        "items": [
          {
            "q": "Un buen sombrero se teje a ___, fibra por fibra.",
            "answers": [
              [
                "mano"
              ]
            ],
            "why": "Sin máquinas."
          },
          {
            "q": "Mi abuela me enseñó a ___ cuando tenía ocho años.",
            "answers": [
              [
                "tejer"
              ]
            ],
            "why": "El verbo de la artesanía con fibras."
          },
          {
            "q": "Alquilamos un pequeño ___ cerca del río Tomebamba.",
            "answers": [
              [
                "taller"
              ]
            ],
            "why": "El lugar de trabajo del artesano."
          },
          {
            "q": "Es un ___ que se aprende con paciencia, no con prisas.",
            "answers": [
              [
                "oficio"
              ]
            ],
            "why": "Un trabajo manual con técnica propia."
          },
          {
            "q": "Este modelo tiene el ___ más ancha para proteger del sol.",
            "answers": [
              [
                "ala"
              ]
            ],
            "why": "«El ala», pero «ancha»: es femenino."
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "La preposición que se esconde al enlazar: «me acostumbré‿a», «pienso‿en‿ti»",
    "explanation": [
      "Muchas preposiciones de esta semana son una sola vocal o empiezan por vocal: «a», «en». Al hablar se unen a la palabra anterior y a la siguiente, y casi desaparecen: «me acostumbré‿a‿esto» suena como una sola palabra. Por eso muchos estudiantes no las oyen y luego no las escriben.",
      "Para no perderlas, pronuncia la unión sin pausa pero sin borrar la vocal: «pienso‿en‿ella», «se convirtió‿en‿un taller», «me atreví‿a‿hablar». Cuando dos vocales iguales se juntan («voy‿a‿aprender»), alarga un poco el sonido en lugar de decirlo dos veces."
    ],
    "examples": [
      {
        "es": "Me acostumbré a la altura. → me-a-cos-tum-bréa-la-al-tu-ra",
        "note": "La «a» se une a la «é» anterior."
      },
      {
        "es": "Se convirtió en un taller. → se-con-vir-tióen-un-ta-ller",
        "note": "«En» se apoya en la vocal anterior y en la siguiente."
      }
    ],
    "perceive": {
      "id": "b1-12-pronunciacion-preposicion",
      "type": "listen",
      "title": "¿Hay preposición?",
      "prompt": "Escucha cada frase y decide qué oyes después del verbo.",
      "items": [
        {
          "q": "¿Qué oyes después de «me acostumbré»?",
          "options": [
            "nada",
            "a"
          ],
          "answer": 1,
          "why": "Se oye «acostumbréa»: hay «a».",
          "audio": "Me acostumbré a la comida de la sierra en un mes.",
          "voice": "es-PE-f"
        },
        {
          "q": "¿Qué oyes después de «pienso»?",
          "options": [
            "en",
            "nada"
          ],
          "answer": 0,
          "why": "«Piensoen»: la «e» se une a la «o».",
          "audio": "Pienso en mis padres cada vez que veo el río.",
          "voice": "es-CO-m"
        },
        {
          "q": "¿Y después de «recuerdo»?",
          "options": [
            "de",
            "nada"
          ],
          "answer": 1,
          "why": "«Recordar» no lleva preposición: «recuerdo que».",
          "audio": "Recuerdo que el taller olía a paja mojada.",
          "voice": "es-PE-m"
        },
        {
          "q": "¿Qué oyes después de «se convirtió»?",
          "options": [
            "nada",
            "en"
          ],
          "answer": 1,
          "why": "«Convirtióen»: «convertirse en».",
          "audio": "La casa se convirtió en un museo del sombrero.",
          "voice": "es-CO-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Me acostumbré a vivir a dos mil quinientos metros.",
        "tip": "Une «acostumbré‿a» sin borrar la «a».",
        "voice": "es-PE-f"
      },
      {
        "text": "Confío en ella y cuento con su ayuda.",
        "tip": "Liga «confío‿en‿ella» en un solo grupo.",
        "voice": "es-CO-m"
      },
      {
        "text": "La tienda se convirtió en un taller de sombreros.",
        "tip": "Que se oiga la «e» de «en».",
        "voice": "es-PE-m"
      }
    ],
    "spelling": "Aunque al hablar la preposición casi no se oiga, por escrito siempre aparece: «me acostumbré a», «pienso en», «se convirtió en». Recuerda también las contracciones: «a + el = al», «de + el = del»."
  },
  "listening": {
    "title": "Una tarde en el taller de Carmen",
    "context": "Es miércoles por la tarde en un taller de sombreros de paja toquilla del centro de Cuenca. Julián, un estudiante colombiano que prepara un documental sobre oficios, entrevista a Carmen, que dejó la ingeniería hace diez años.",
    "speakers": [
      {
        "id": "car",
        "name": "Carmen",
        "voice": "es-PE-f",
        "role": "artesana"
      },
      {
        "id": "jul",
        "name": "Julián",
        "voice": "es-CO-m",
        "role": "estudiante de cine"
      }
    ],
    "script": [
      {
        "speaker": "jul",
        "text": "Gracias por recibirme, Carmen. Me dijeron que usted era ingeniera antes de dedicarse a esto. ¿Es verdad?"
      },
      {
        "speaker": "car",
        "text": "Sí, trabajé doce años en una constructora de Quito. Ganaba bien, pero un día me di cuenta de que no pensaba en otra cosa que en el trabajo. Me había vuelto una persona muy nerviosa."
      },
      {
        "speaker": "jul",
        "text": "¿Y por qué eligió precisamente los sombreros?"
      },
      {
        "speaker": "car",
        "text": "Por mi abuela. Ella tejía aquí en Cuenca y yo soñaba con aprender desde niña. Así que me atreví a dejar el empleo fijo y me vine con una maleta y muchos miedos."
      },
      {
        "speaker": "jul",
        "text": "¿Le costó acostumbrarse a la vida de aquí?"
      },
      {
        "speaker": "car",
        "text": "Al principio, sí. Tardé casi dos años en tejer un sombrero que se pudiera vender. Me quejaba de todo: del frío, de las manos cansadas… Pero conté con la ayuda de doña Rosa, una maestra del barrio, que tuvo mucha paciencia conmigo."
      },
      {
        "speaker": "jul",
        "text": "Y ahora mire: esta casa se ha convertido en un taller con cuatro aprendices."
      },
      {
        "speaker": "car",
        "text": "Sí, la casa de mi abuela pasó a ser la sede de una pequeña cooperativa. No sé si llegaré a ser tan buena como ella, pero me he hecho artesana de verdad. Y me he vuelto mucho más tranquila, eso seguro."
      },
      {
        "speaker": "jul",
        "text": "¿Qué le diría a alguien que piensa en cambiar de vida?"
      },
      {
        "speaker": "car",
        "text": "Que no trate de hacerlo todo en un mes. Y que confíe en las personas que saben más que uno."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha una vez sin leer. ¿De qué trata la conversación?",
        "exercise": {
          "id": "b1-12-escucha-global",
          "type": "choice",
          "prompt": "Elige la mejor respuesta.",
          "items": [
            {
              "q": "¿Qué cuenta Carmen?",
              "options": [
                "Cómo pasó de la ingeniería a tejer sombreros.",
                "Cómo abrió una constructora en Cuenca.",
                "Por qué quiere volver a Quito."
              ],
              "answer": 0,
              "why": "Explica su cambio de vida: de ingeniera a artesana."
            },
            {
              "q": "¿Cómo se siente Carmen hoy?",
              "options": [
                "Arrepentida de su decisión.",
                "Agotada y nerviosa.",
                "Tranquila y satisfecha, aunque sigue aprendiendo."
              ],
              "answer": 2,
              "why": "«Me he vuelto mucho más tranquila», pero no sabe si llegará a ser tan buena como su abuela."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota los detalles.",
        "exercise": {
          "id": "b1-12-escucha-detalle",
          "type": "choice",
          "prompt": "Responde según la conversación.",
          "items": [
            {
              "q": "¿De qué se dio cuenta Carmen en Quito?",
              "options": [
                "De que ganaba poco.",
                "De que solo pensaba en el trabajo.",
                "De que su abuela estaba enferma."
              ],
              "answer": 1,
              "why": "«Me di cuenta de que no pensaba en otra cosa que en el trabajo.»"
            },
            {
              "q": "¿Cuánto tardó en tejer un sombrero para vender?",
              "options": [
                "Casi dos años.",
                "Un mes.",
                "Doce años."
              ],
              "answer": 0,
              "why": "«Tardé casi dos años en tejer un sombrero que se pudiera vender.»"
            },
            {
              "q": "¿En qué se convirtió la casa de su abuela?",
              "options": [
                "En una tienda de recuerdos.",
                "En un hostal.",
                "En la sede de una cooperativa."
              ],
              "answer": 2,
              "why": "«La casa de mi abuela pasó a ser la sede de una pequeña cooperativa.»"
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Fíjate en la gramática. Completa lo que dicen exactamente.",
        "exercise": {
          "id": "b1-12-escucha-formas",
          "type": "gap",
          "prompt": "Escribe la palabra o la forma que usan.",
          "items": [
            {
              "q": "Un día me di cuenta ___ que no pensaba en otra cosa que en el trabajo.",
              "answers": [
                [
                  "de"
                ]
              ],
              "why": "Queísmo evitado: «darse cuenta de que»."
            },
            {
              "q": "Ella tejía aquí en Cuenca y yo soñaba ___ aprender desde niña.",
              "answers": [
                [
                  "con"
                ]
              ],
              "why": "«Soñar con»."
            },
            {
              "q": "Me había ___ una persona muy nerviosa.",
              "answers": [
                [
                  "vuelto"
                ]
              ],
              "why": "Cambio de carácter: «volverse»."
            },
            {
              "q": "Pero me he ___ artesana de verdad.",
              "answers": [
                [
                  "hecho"
                ]
              ],
              "why": "Profesión alcanzada con decisión: «hacerse»."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Carmen Ordóñez: la ingeniera que aprendió a tejer",
    "genre": "Perfil en una revista de viajes",
    "frame": "Una revista ecuatoriana de viajes publica cada mes el perfil de una persona que cambió de vida. Este mes le toca a Carmen.",
    "text": [
      "Hace diez años, Carmen Ordóñez calculaba la resistencia de puentes en una oficina de Quito. Hoy pasa ocho horas al día sentada junto a una ventana del barrio de San Sebastián, en Cuenca, tejiendo sombreros de paja toquilla. «La gente piensa que me volví loca», cuenta entre risas. «Yo creo que me volví más sensata».",
      "El cambio no fue repentino. Carmen se acuerda de la tarde exacta en que lo decidió: estaba atrapada en un atasco, pensando en un informe, y se dio cuenta de que llevaba meses sin pensar en nada más. Ese fin de semana viajó a Cuenca, visitó la casa vacía de su abuela y se atrevió a hacer una pregunta que no se había hecho nunca: ¿y si me quedo?",
      "Acostumbrarse a la nueva vida le costó. Tuvo que aprender a trabajar con las manos, a ganarse la vida con mucho menos dinero y a confiar en una maestra que solo le hablaba cuando cometía un error. Durante meses se quejó de dolores en los dedos. Pero poco a poco se hizo artesana, y la casa de la abuela se convirtió en un taller abierto a los visitantes.",
      "Hoy cuenta con cuatro aprendices y sueña con una escuela de tejido para jóvenes del barrio. ¿Llegará a ser una de las grandes maestras de Cuenca? «Eso no depende de mí», responde. «Yo solo trato de tejer cada sombrero mejor que el anterior»."
    ],
    "glossary": [
      {
        "es": "la resistencia de un puente"
      },
      {
        "es": "el atasco"
      },
      {
        "es": "sensato, sensata"
      }
    ],
    "tasks": [
      {
        "id": "b1-12-lectura-comprension",
        "type": "choice",
        "title": "Comprensión",
        "prompt": "Responde según el perfil.",
        "items": [
          {
            "q": "¿Qué opina Carmen de su cambio de carácter?",
            "options": [
              "Que se ha vuelto más sensata.",
              "Que se ha vuelto loca.",
              "Que no ha cambiado nada."
            ],
            "answer": 0,
            "why": "«Yo creo que me volví más sensata.»"
          },
          {
            "q": "¿Dónde tomó la decisión de cambiar?",
            "options": [
              "En casa de su abuela.",
              "En un atasco en Quito.",
              "En el taller de la maestra."
            ],
            "answer": 1,
            "why": "«Estaba atrapada en un atasco… y se dio cuenta.»"
          },
          {
            "q": "¿Con qué sueña ahora?",
            "options": [
              "Con volver a la ingeniería.",
              "Con vender sombreros en Europa.",
              "Con una escuela de tejido para jóvenes."
            ],
            "answer": 2,
            "why": "«Sueña con una escuela de tejido para jóvenes del barrio.»"
          }
        ]
      },
      {
        "id": "b1-12-lectura-cambios",
        "type": "classify",
        "title": "¿Qué tipo de cambio?",
        "prompt": "Clasifica cada cambio según el texto.",
        "categories": [
          "Cambio de carácter",
          "Profesión o decisión",
          "Transformación de un lugar"
        ],
        "items": [
          {
            "text": "Carmen se volvió más sensata.",
            "cat": 0
          },
          {
            "text": "Carmen se hizo artesana.",
            "cat": 1
          },
          {
            "text": "La casa de la abuela se convirtió en un taller.",
            "cat": 2
          },
          {
            "text": "La gente cree que Carmen se volvió loca.",
            "cat": 0
          },
          {
            "text": "Dejó la ingeniería y se quedó en Cuenca.",
            "cat": 1
          },
          {
            "text": "Una casa vacía pasó a ser un lugar abierto a visitantes.",
            "cat": 2
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Fíjate en las preposiciones fijas y en los verbos de cambio del perfil.",
      "items": [
        {
          "quote": "se dio cuenta de que llevaba meses sin pensar en nada más",
          "note": "«Darse cuenta de que» y «pensar en»: la preposición se mantiene."
        },
        {
          "quote": "se atrevió a hacer una pregunta",
          "note": "«Atreverse a» + infinitivo."
        },
        {
          "quote": "poco a poco se hizo artesana",
          "note": "«Hacerse» + profesión: un proceso que ella eligió."
        },
        {
          "quote": "la casa de la abuela se convirtió en un taller",
          "note": "«Convertirse en» + nombre: transformación de un lugar."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combinas las dos clases y recuperas lo de las semanas 10 y 11.",
    "exercises": [
      {
        "id": "b1-12-practica-orden",
        "type": "order",
        "title": "Frases de cambio",
        "prompt": "Ordena las palabras para formar frases completas.",
        "items": [
          {
            "words": [
              "Me",
              "costó",
              "mucho",
              "acostumbrarme",
              "al",
              "frío",
              "de",
              "la",
              "sierra."
            ]
          },
          {
            "words": [
              "El",
              "viejo",
              "molino",
              "se",
              "convirtió",
              "en",
              "un",
              "restaurante",
              "famoso."
            ]
          },
          {
            "words": [
              "¿En",
              "qué",
              "piensas",
              "cuando",
              "tejes",
              "durante",
              "horas?"
            ]
          },
          {
            "words": [
              "Con",
              "los",
              "años",
              "mi",
              "abuelo",
              "se",
              "volvió",
              "muy",
              "cariñoso."
            ]
          }
        ]
      },
      {
        "id": "b1-12-practica-retrieval",
        "type": "context",
        "title": "Recuperación: semanas 10 y 11",
        "prompt": "Recuperación de semanas anteriores en el contexto del taller. Elige la forma correcta.",
        "items": [
          {
            "context": "Semana 11, pasado reciente. Un cliente entra y Carmen tiene en la mano un sombrero terminado hace un minuto.",
            "q": "«___ terminar este modelo, ¿quiere verlo?»",
            "options": [
              "Acabé de",
              "Acabo de",
              "Dejo de"
            ],
            "answer": 1,
            "why": "«Acabo de»: hace un momento."
          },
          {
            "context": "Semana 11, repetición. Carmen deshizo un sombrero porque tenía un error y lo tejió otra vez.",
            "q": "¿Cómo lo cuenta?",
            "options": [
              "Lo volví a tejer desde el principio.",
              "Lo volví a tejerlo desde el principio.",
              "Lo repetí a tejer desde el principio."
            ],
            "answer": 0,
            "why": "Pronombre en un solo sitio y «volver a»."
          },
          {
            "context": "Semana 10, costumbre. Carmen describe sus mañanas.",
            "q": "«___ empezar a tejer a las siete, con la luz de la ventana.»",
            "options": [
              "Sigo",
              "Me pongo",
              "Suelo"
            ],
            "answer": 2,
            "why": "«Soler + infinitivo»: costumbre."
          },
          {
            "context": "Semana 10, inicio repentino. Un aprendiz se rio sin poder parar al ver su primer sombrero torcido.",
            "q": "¿Cómo lo cuentas?",
            "options": [
              "Empezó a reírse poco a poco.",
              "Se echó a reír.",
              "Siguió sin reírse."
            ],
            "answer": 1,
            "why": "«Echarse a reír»: inicio repentino."
          }
        ]
      },
      {
        "id": "b1-12-practica-transformar",
        "type": "transform",
        "title": "Dilo con un verbo de cambio",
        "prompt": "Reescribe cada frase con el verbo indicado.",
        "items": [
          {
            "source": "Antes era un cine; ahora es un supermercado.",
            "instruction": "Usa «convertirse en» en indefinido: «El cine…».",
            "answers": [
              "El cine se convirtió en un supermercado."
            ],
            "why": "Transformación de un lugar: «convertirse en» + nombre."
          },
          {
            "source": "Antes comía carne; desde 2019 es vegetariano por decisión propia.",
            "instruction": "Usa «hacerse» en indefinido: «En 2019…».",
            "answers": [
              "En 2019 se hizo vegetariano."
            ],
            "why": "Cambio por decisión: «hacerse»."
          },
          {
            "source": "Antes era alegre; con la enfermedad es una persona triste.",
            "instruction": "Usa «volverse» en indefinido: «Con la enfermedad…».",
            "answers": [
              "Con la enfermedad se volvió una persona triste.",
              "Con la enfermedad se volvió triste."
            ],
            "why": "Cambio de carácter no controlado: «volverse»."
          }
        ]
      },
      {
        "id": "b1-12-practica-escritura-guiada",
        "type": "open",
        "title": "Mensajes sobre cambios",
        "prompt": "Escribe cada mensaje en dos o tres frases.",
        "items": [
          {
            "prompt": "Escribe a un amigo que se acaba de mudar a otro país. Pregúntale a qué se ha acostumbrado y de qué se queja.",
            "model": "¿Qué tal en Lisboa? ¿Ya te acostumbraste a cenar tan tarde? Seguro que te quejas del precio de los alquileres, como todos.",
            "checklist": [
              "Usas «acostumbrarse a» y «quejarse de».",
              "Las preguntas tienen la preposición en el lugar correcto."
            ]
          },
          {
            "prompt": "Describe cómo ha cambiado un lugar de tu ciudad.",
            "model": "La antigua cárcel de mi ciudad se convirtió en un hotel. Pasó a ser propiedad privada en 2015 y hoy es uno de los lugares más caros para dormir.",
            "checklist": [
              "Usas «convertirse en» con un nombre.",
              "Usas otro verbo de cambio: «pasar a ser» o «llegar a ser»."
            ]
          },
          {
            "prompt": "Cuenta cómo cambió el carácter de alguien que conoces y por qué.",
            "model": "Mi hermano se volvió más responsable cuando nació su hija. Ahora piensa en ella antes de tomar cualquier decisión y se ha hecho un experto en canciones infantiles.",
            "checklist": [
              "Usas «volverse» para el carácter.",
              "Usas un verbo con preposición fija, como «pensar en»."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe un texto para el blog de tu clase sobre cómo ha cambiado una persona que conoces o un lugar importante para ti: cómo era antes, en qué se ha convertido, qué cambios fueron voluntarios y cuáles no.",
    "context": "El blog publica una serie llamada «Antes y ahora». Los lectores son estudiantes de español de distintos países.",
    "steps": [
      "Elige la persona o el lugar y anota tres cambios: uno de carácter o de aspecto, uno por decisión y una transformación.",
      "Primer párrafo: cómo era antes y qué pasó, con verbos con preposición (darse cuenta de, atreverse a, soñar con).",
      "Segundo párrafo: en qué se ha convertido, qué llegó a ser o qué pasó a ser, y qué opinas tú del cambio.",
      "Revisa cada verbo de cambio: ¿«convertirse» lleva «en»? ¿«volverse» va sin «en»? Corrige también cada «de que»: haz la prueba de «eso»."
    ],
    "useLanguage": [
      "hacerse + adjetivo / nombre",
      "volverse + adjetivo",
      "convertirse en + nombre",
      "llegar a ser / pasar a ser",
      "darse cuenta de que",
      "acostumbrarse a, soñar con, contar con"
    ],
    "model": [
      "Cuando yo era niña, la plaza de mi barrio era un aparcamiento gris donde nadie se atrevía a pasear de noche. Mis padres se quejaban de los coches y del ruido, pero nadie pensaba en cambiarlo. Un día, un grupo de vecinas se dio cuenta de que el ayuntamiento tenía un presupuesto para proyectos de barrio y decidió presentar una propuesta.",
      "Tardaron tres años en conseguirlo, pero hoy la plaza se ha convertido en un jardín con bancos, árboles y un pequeño escenario. Los vecinos nos hemos acostumbrado a tomar café allí los domingos, y el barrio se ha vuelto más tranquilo y más amable. Una de aquellas vecinas, Lola, llegó a ser concejala gracias a ese proyecto. Yo todavía sueño con ver más plazas así en mi ciudad, y confío en que otros barrios se atrevan a copiar la idea."
    ],
    "checklist": [
      "Uso al menos tres verbos de cambio distintos y elijo bien cada uno.",
      "«Convertirse» siempre lleva «en»; «volverse» nunca.",
      "Uso al menos cuatro verbos con preposición fija y no hay dequeísmo ni queísmo.",
      "El texto tiene dos párrafos: antes y ahora."
    ],
    "words": [
      130,
      180
    ]
  },
  "speaking": {
    "intro": "Graba tus respuestas y escúchate: comprueba que no te comes las preposiciones al enlazar («me acostumbré‿a», «pienso‿en»).",
    "tasks": [
      {
        "title": "Cómo he cambiado yo",
        "prompt": "Habla durante dos minutos de cómo has cambiado en los últimos diez años: qué decidiste (te hiciste…), cómo cambió tu carácter (te volviste…), a qué te acostumbraste, de qué te diste cuenta y con qué sueñas ahora.",
        "prep": [
          "Tres verbos de cambio distintos.",
          "Cuatro verbos con preposición fija.",
          "Un final con algo que sueñas o piensas hacer."
        ],
        "seconds": 120,
        "model": "Hace diez años yo era estudiante y vivía con mis padres. Luego me mudé a otra ciudad y tuve que acostumbrarme a vivir sola. Me di cuenta de que me gustaba cocinar y, poco a poco, me hice vegetariana. Creo que también me he vuelto más paciente, porque trabajo con niños. Mi piso pequeño se ha convertido en mi lugar favorito…",
        "selfCheck": [
          "¿He hablado al menos dos minutos?",
          "¿He elegido bien entre hacerse, volverse y convertirse en?",
          "¿He mantenido las preposiciones delante de «que»?"
        ]
      },
      {
        "title": "Preguntas sobre tu cambio",
        "prompt": "Un interlocutor quiere saber más sobre tu cambio y te hace preguntas: ¿qué fue lo que más te costó?, ¿con quién contaste?, ¿te arrepientes? Responde, aclara los detalles y hazle tú también una pregunta con preposición. Practica con alguien o graba las dos voces.",
        "prep": [
          "Prepara respuestas con «tardé… en», «conté con» y «me costó acostumbrarme a».",
          "Haz una pregunta con «¿En qué…?» o «¿Con quién…?»."
        ],
        "seconds": 90,
        "model": "Lo que más me costó fue acostumbrarme a cocinar para mí sola. Conté con la ayuda de una vecina que me enseñó recetas fáciles. ¿Arrepentirme? No, nunca. Y tú, ¿en qué piensas cuando imaginas tu vida dentro de diez años?",
        "selfCheck": [
          "¿He respondido a todas sus preguntas?",
          "¿He hecho una pregunta con la preposición delante?"
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva tu texto de «Antes y ahora» y estas tarjetas a la próxima clase con tu profesor.",
    "cards": [
      {
        "move": "Pregunta",
        "task": "Hazle a tu profesor tres preguntas con preposición delante sobre su vida («¿Con qué soñabas de niño?», «¿En qué piensas al despertarte?»).",
        "phrases": [
          "¿Con qué…?",
          "¿En qué…?",
          "¿De qué te quejas…?"
        ]
      },
      {
        "move": "Describe",
        "task": "Describe a tu profesor cómo ha cambiado tu ciudad y pídele que te corrija los verbos de cambio.",
        "phrases": [
          "Se ha convertido en…",
          "Pasó a ser…"
        ]
      },
      {
        "move": "Comprueba",
        "task": "Di cinco frases con «que» y pide a tu profesor que te diga si necesitan «de» o no («Me di cuenta de que…», «Creo que…»).",
        "phrases": [
          "Me di cuenta de que…",
          "Pienso que…"
        ]
      },
      {
        "move": "Compara",
        "task": "Compara con tu profesor una persona famosa de tu país y una del suyo: ¿qué llegaron a ser y cómo se volvieron con la fama?",
        "phrases": [
          "Llegó a ser…",
          "Se volvió…"
        ]
      }
    ],
    "bring": "Tu texto de «Antes y ahora» revisado y la grabación sobre tu cambio personal."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "«Después de tres años, por fin me acostumbré ___ hablar en público.»",
        "options": [
          "de",
          "en",
          "a"
        ],
        "answer": 2,
        "why": "«Acostumbrarse a»."
      },
      {
        "type": "choice",
        "q": "¿Qué frase describe un cambio de carácter?",
        "options": [
          "Se hizo médica.",
          "Se volvió muy desconfiada.",
          "El hotel se convirtió en un hospital."
        ],
        "answer": 1,
        "why": "«Volverse» + adjetivo: carácter."
      },
      {
        "type": "listen",
        "q": "Escucha. ¿Qué expresa la persona?",
        "options": [
          "Una opinión sobre el centro.",
          "Que ha pensado en irse.",
          "La intención de mudarse."
        ],
        "answer": 0,
        "why": "«¿Qué piensas de…?» y «pienso que…»: opinión.",
        "audio": "¿Que qué pienso del centro histórico? Pienso que es precioso, pero hay demasiados coches.",
        "voice": "es-PE-m"
      },
      {
        "type": "gap",
        "q": "La antigua fábrica de sombreros se convirtió ___ un hotel boutique.",
        "answers": [
          [
            "en"
          ]
        ],
        "why": "«Convertirse en»."
      },
      {
        "type": "gap",
        "q": "No me di cuenta ___ que la tienda ya estaba cerrada.",
        "answers": [
          [
            "de"
          ]
        ],
        "why": "«Darse cuenta de que»."
      },
      {
        "type": "gap",
        "q": "Empezó vendiendo empanadas y llegó ___ ser dueña de una cadena de cafeterías.",
        "answers": [
          [
            "a"
          ]
        ],
        "why": "«Llegar a ser»: meta con esfuerzo."
      },
      {
        "type": "order",
        "words": [
          "¿Con",
          "quién",
          "te",
          "casaste",
          "al",
          "final,",
          "con",
          "Diego",
          "o",
          "con",
          "Andrés?"
        ],
        "why": "La preposición va delante en la pregunta."
      },
      {
        "type": "error",
        "sentence": "Me olvidé que hoy era el cumpleaños de mi madre.",
        "answers": [
          "Me olvidé de que hoy era el cumpleaños de mi madre."
        ],
        "why": "«Olvidarse de que»: la preposición se queda."
      },
      {
        "type": "error",
        "sentence": "Pienso de que deberías pedir un aumento de sueldo.",
        "answers": [
          "Pienso que deberías pedir un aumento de sueldo."
        ],
        "why": "Dequeísmo: «pienso eso», sin «de»."
      },
      {
        "type": "open",
        "prompt": "Reformulación: cuenta esta biografía con verbos de cambio y con preposiciones fijas. «Antes: tímido, sin trabajo. Decisión: estudiar cocina. Resultado: chef famoso. Su casa: ahora un restaurante.»",
        "model": "Antes era tímido y no tenía trabajo, pero se atrevió a estudiar cocina. Se hizo cocinero y, con los años, llegó a ser un chef famoso. Su casa se convirtió en un restaurante.",
        "checklist": [
          "Usas «hacerse» o «llegar a ser» para la profesión.",
          "Usas «convertirse en» para la transformación de la casa.",
          "Usas al menos un verbo con preposición fija (atreverse a, decidirse a…)."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Usar verbos con preposición fija (acostumbrarse a, tratar de, pensar en, contar con, soñar con).",
      "Mantener la preposición delante de «que» y en las preguntas, sin dequeísmo ni queísmo.",
      "Elegir entre hacerse, volverse y convertirse en según el tipo de cambio.",
      "Contar una meta alcanzada con «llegar a ser» y un cambio de categoría con «pasar a ser»."
    ],
    "review": [
      "Pensar en (en la mente), pensar de (opinión) y pensar + infinitivo (intención).",
      "«Volverse» (cambio de carácter) frente a «volver a» (otra vez) de la semana 11.",
      "«Ponerse» y «quedarse» + adjetivo, de A2."
    ]
  },
  "related": [
    {
      "path": "/gramatica/acostumbrarse-a-tratar-de-pensar-en",
      "label": "Clase: Acostumbrarse a, tratar de, pensar en"
    },
    {
      "path": "/gramatica/verbos-de-cambio-hacerse-volverse-convertirse-en",
      "label": "Clase: Verbos de cambio: hacerse, volverse, convertirse en, llegar a ser"
    }
  ]
};
