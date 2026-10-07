// Noche abierta · calle · Barrio Viejo: paredes descascaradas, luces que parpadean y vecinos que no duermen; tranquilo, un poco triste, un poco mágico.
const encounters = [
  {
    id: "viejo-herido",
    kind: "escena",
    district: "viejo",
    title: "Un hombre en el suelo",
    verb: "AYUDAR",
    goal: "Ofrecer y aceptar ayuda, describir un dolor, convencer con amabilidad y tranquilizar a alguien asustado.",
    cast: [
      {
        id: "ruben", name: "Rubén", role: "Repartidor en bici",
        age: "adult", body: "m", build: "heavy", height: 1.72,
        hair: "short", hairColor: "#2b211a", skin: "#b88462",
        top: "jacket", topColor: "#d8562b", bottom: "jeans", bottomColor: "#2f3b52",
        extras: ["helmet", "mustache"], pose: "ground", props: ["bike-fallen", "delivery-box"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "ruben", mood: "pain",
        line: {
          A: "Un hombre está sentado en el suelo, al lado de una bici. Se toca el tobillo. «Ay… Me caí de la bici. Me duele mucho el pie.»",
          B: "Un repartidor está sentado en la acera junto a su bici volcada. Intenta levantarse y no puede. «Un auto me cerró el paso y me caí. Creo que me torcí el tobillo.»",
          C: "Un repartidor sigue en el suelo, con la bici atravesada en la acera y el pedido desparramado. Se ríe para disimular el dolor. «Nada grave, eh. Solo mi orgullo y, bueno, quizá el tobillo.»",
        },
        options: [
          {
            id: "preguntar",
            say: { A: "¿Estás bien? ¿Qué te duele?", B: "¿Estás bien? ¿Puedes mover el pie?", C: "¿Seguro que es solo el orgullo? A ver, ¿puedes apoyar el pie?" },
            reply: { A: "Rubén mueve el pie un poco. «El tobillo. Puedo moverlo, pero me duele.»", B: "Rubén lo intenta y hace una mueca. «Moverlo, sí. Apoyarlo… eso ya es otra historia.»", C: "Rubén apoya el pie y se arrepiente al instante. «Bueno, no es solo el orgullo. Pero no exageremos.»" },
            mood: "pain", next: "dolor",
          },
          {
            id: "ambulancia",
            say: { A: "Voy a llamar a una ambulancia.", B: "Espera, mejor llamo a una ambulancia, por si acaso.", C: "No te muevas. Prefiero llamar a una ambulancia antes de que lo empeores." },
            reply: { A: "Rubén levanta las manos. «¡No, no! Una ambulancia no. Tengo que trabajar.»", B: "«¡No, por favor! Si llamas a una ambulancia, pierdo el turno y el pedido.»", C: "«¿Una ambulancia? Si llego tarde con este pedido, mañana el que necesita ambulancia es mi jefe.»" },
            mood: "worried", next: "convencer",
          },
          {
            id: "pedido",
            say: { A: "¿Te ayudo con las cosas del suelo?", B: "Déjame que te ayude a juntar el pedido, ¿sí?", C: "Tú quédate quieto, que el pedido no se va a escapar. Yo lo junto." },
            reply: { A: "Rubén sonríe. «Gracias. Es una pizza para el número 40.»", B: "«Gracias, de verdad. Era una pizza… Bueno, ahora es una pizza con historia.»", C: "Rubén suelta una carcajada. «Una pizza con forma de mapa. El cliente va a pensar que es arte.»" },
            mood: "smile", next: "dolor",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz.", B: "Sacas el lápiz y un papel.", C: "Sacas el lápiz y le ofreces el reverso de un ticket." },
            say: { A: "¿Quieres escribir el número de tu jefe?", B: "Escribe el número de tu jefe y lo llamo yo.", C: "Dame el número de tu jefe; le explico yo lo que pasó, que a mí no me puede despedir." },
            reply: { A: "Rubén escribe un número. «Gracias. Se llama Óscar.»", B: "Rubén escribe un número con la mano temblorosa. «Óscar. Dile que no fue culpa mía.»", C: "Rubén escribe el número y añade una carita triste. «Para que Óscar se apiade, ¿sabes?»" },
            mood: "smile", next: "dolor",
          },
          libro: {
            act: { A: "Abres tu libro.", B: "Abres tu libro, a ver si dice algo útil.", C: "Hojeas tu libro con gesto de experto." },
            say: { A: "Un momento, voy a buscar qué hacer.", B: "Espera, a lo mejor aquí explica qué hacer con un tobillo.", C: "Tranquilo, según mi libro… bueno, según algún libro, hay que poner hielo." },
            reply: { A: "Rubén mira el libro. «¿Eso es una novela? ¡Ja, ja!»", B: "Rubén mira la tapa y se ríe. «Eso es una novela de amor. No creo que hable de tobillos.»", C: "«Es una novela romántica», dice Rubén, divertido. «Salvo que el tobillo se enamore, no sé si nos sirve.»" },
            mood: "smile", next: "dolor",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Por si acaso, sacas el gas pimienta.", C: "Desconfiado, sacas el gas pimienta antes de acercarte." },
            say: { A: "¿Qué pasó aquí?", B: "No te muevas. ¿Qué pasó aquí?", C: "Perdona la desconfianza, pero ¿qué pasó exactamente?" },
            reply: { A: "Rubén se asusta. «¡Eh! ¡Solo me caí! ¡No hice nada!»", B: "Rubén levanta las manos, asustado. «¡Tranquilo! ¡Solo soy un repartidor que se cayó!»", C: "Rubén se cubre la cara. «¿Gas pimienta? Me caí de la bici, no asalté un banco.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Muestras la granada.", B: "Sin pensar mucho, le muestras la granada.", C: "Le muestras la granada, que no es precisamente lo que uno espera en una ayuda." },
            say: { A: "Hola. ¿Necesitas ayuda?", B: "Hola, ¿necesitas ayuda? No te preocupes por esto.", C: "¿Necesitas ayuda? Ignora esto, es una larga historia." },
            reply: { A: "Rubén abre mucho los ojos. «¿¡Eso es una granada!?»", B: "Rubén se arrastra hacia atrás. «¿¡Cómo que no me preocupe!? ¡Es una granada!»", C: "«Ah, claro, una larga historia», dice Rubén sin quitarle los ojos de encima. «Yo tengo tiempo, ¿eh? Pero de lejos.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al agacharte, se ve tu pistola.", C: "Al agacharte, la pistola queda a la vista." },
            say: { A: "Hola. ¿Estás bien?", B: "Hola, ¿estás bien? ¿Qué te pasó?", C: "¿Estás bien? Tranquilo, solo quiero ayudar." },
            reply: { A: "Rubén se asusta. «¡Llévate la bici! ¡No me hagas nada!»", B: "Rubén empuja la bici hacia ti. «¡Toma, llévatela! ¡Pero no me hagas nada!»", C: "«Solo quieres ayudar, ya», dice Rubén, pálido. «Con todo respeto, la pistola dice otra cosa.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Sacas el cuchillo para cortar la correa del casco.", C: "Sacas el cuchillo: la correa del casco le aprieta el cuello." },
            say: { A: "Tu casco está muy apretado. ¿Corto la correa?", B: "La correa te aprieta. ¿Quieres que la corte?", C: "Esa correa te está ahorcando. ¿Te la corto o prefieres sufrir con estilo?" },
            reply: { A: "Rubén duda. «Eh… bueno, pero con cuidado.»", B: "Rubén se pone tenso, pero asiente. «Bueno… Pero despacio, por favor.»", C: "Rubén traga saliva. «Con estilo prefiero, pero córtala. Despacito, que yo ya tuve bastante emoción hoy.»" },
            mood: "worried", next: "dolor",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Tranquilo. Estoy aquí. Te ayudo.", B: "Tranquilo, no estás solo. Vamos a solucionarlo.", C: "Tranquilo, ya pasó lo peor. Ahora lo arreglamos entre los dos." },
            reply: { A: "Rubén sonríe. «Gracias. Eres muy amable. Tengo una hija como tú.»", B: "A Rubén se le ilumina la cara. «Gracias… Mi hija dice lo mismo cuando me caigo. Y me caigo bastante.»", C: "Rubén se relaja y sonríe por primera vez. «Hablas igual que mi hija. Ella también me regaña con cariño.»" },
            mood: "love", next: "dolor",
          },
        },
      },
      calmar: {
        who: "ruben", mood: "scared",
        line: {
          A: "Rubén tiene miedo. Te mira y no se mueve.",
          B: "Rubén no te quita los ojos de encima. Respira rápido y busca el teléfono.",
          C: "Rubén te mira como quien calcula cuántos metros puede correr con un tobillo torcido. Ninguno, evidentemente.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Solo quiero ayudar.", B: "Perdona, lo guardo ahora mismo. Solo quería ayudarte.", C: "Perdona, ha sido una pésima forma de presentarme. Lo guardo y empezamos de nuevo." },
            reply: { A: "Rubén respira. «Bueno… Gracias.»", B: "Rubén suelta el aire despacio. «Bueno. Me diste un susto tremendo.»", C: "«Empezar de nuevo me parece una idea excelente», dice Rubén, todavía con la voz temblando." },
            mood: "worried", next: "dolor",
          },
          {
            id: "explicar",
            say: { A: "No es para ti. Es para mi seguridad.", B: "No es para ti, de verdad. Lo llevo por seguridad.", C: "Te juro que no es lo que parece. Es para… bueno, es complicado." },
            reply: { A: "Rubén no te cree. Llama a la policía.", B: "Rubén asiente sin convencerse y marca un número. «Sí, ¿policía? Hay alguien aquí…»", C: "«Complicado, claro», dice Rubén, y marca un número sin dejar de mirarte. «¿Policía? Sí, les explico…»" },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdona el susto. Me voy, pero pide ayuda, ¿de acuerdo?", C: "Mejor me voy y te dejo tranquilo. Pero pide ayuda a alguien, por favor." },
            reply: { A: "Rubén no dice nada.", B: "Rubén asiente, muy serio, sin decir nada.", C: "Rubén asiente despacio, todavía sin parpadear." },
            mood: "worried", end: "solo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón. Tranquilo. Soy una buena persona.", B: "Perdóname, de verdad. Solo quiero ayudarte.", C: "Perdóname. Empecé fatal, pero te prometo que vengo en son de paz." },
            reply: { A: "Rubén sonríe un poco. «Bueno. Te creo.»", B: "La cara de Rubén cambia. «Bueno… Tienes cara de buena persona, la verdad.»", C: "Rubén se ríe, aliviado. «En son de paz. De acuerdo. Me lo creo, no sé por qué, pero me lo creo.»" },
            mood: "love", next: "dolor",
          },
        },
      },
      convencer: {
        who: "ruben", mood: "worried",
        line: {
          A: "Rubén no quiere ambulancia. «Estoy bien. Solo necesito un minuto.»",
          B: "Rubén se niega. «De verdad, estoy bien. Si descanso un minuto, se me pasa.»",
          C: "Rubén hace un gesto con la mano, como si espantara la idea. «Un minuto y estoy como nuevo. Bueno, como usado, pero funcional.»",
        },
        options: [
          {
            id: "insistir",
            say: { A: "Tu pie está muy mal. Tienes que ir al médico.", B: "Mira cómo se te está hinchando. Necesitas que te vea un médico.", C: "Con todo cariño: ese tobillo no opina lo mismo que tú. Que lo vea un médico." },
            reply: { A: "Rubén mira el pie. «Sí… está muy grande.»", B: "Rubén mira el tobillo y se pone serio. «Uf… Es verdad, está peor.»", C: "Rubén mira el tobillo como si fuera de otra persona. «Vaya. Ese no es mi tobillo de siempre.»" },
            mood: "worried", next: "dolor",
          },
          {
            id: "respetar",
            say: { A: "Bueno. Te espero un minuto aquí.", B: "Está bien, como quieras. Me quedo contigo un momento.", C: "De acuerdo, tú decides. Pero me quedo aquí hasta comprobar que puedes caminar." },
            reply: { A: "Rubén sonríe. «Gracias. Eres muy amable.»", B: "«Gracias. La verdad, prefiero no estar solo ahora.»", C: "«Me parece un trato justo», dice Rubén, más tranquilo." },
            mood: "smile", next: "dolor",
          },
          {
            id: "llamar-igual",
            say: { A: "Lo siento. Voy a llamar igual.", B: "Lo siento, pero voy a llamar igual. Me quedo más tranquilo.", C: "Lo siento, pero no me perdonaría no llamar. Llamo igual." },
            reply: { A: "Rubén suspira. «Bueno… Gracias.»", B: "Rubén resopla, pero al final asiente. «Bueno. Gracias, supongo.»", C: "Rubén levanta los ojos al cielo, aunque se nota que está aliviado. «Bueno. Gracias por no hacerme caso.»" },
            mood: "worried", end: "ambulancia",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Me importa tu salud. Por favor, ve al médico.", B: "Me preocupo por ti, en serio. Deja que te vea un médico.", C: "No te conozco, pero me preocupas. Hazlo por mí, que no voy a dormir tranquilo." },
            reply: { A: "Rubén sonríe. «Bueno. Por ti, voy.»", B: "Rubén se ríe, emocionado. «Me convenciste. Hablas como mi hija.»", C: "Rubén se lleva una mano al pecho. «Eso es trampa, ¿eh? Con cariño me convences de cualquier cosa.»" },
            mood: "love", next: "dolor",
          },
        },
      },
      dolor: {
        who: "ruben", mood: "pain",
        line: {
          A: "Rubén quiere levantarse. «Tengo que llevar la pizza. Pero no puedo caminar bien.»",
          B: "Rubén intenta ponerse de pie. «Tengo que entregar el pedido en diez minutos o me descuentan el viaje.»",
          C: "Rubén se agarra al poste para levantarse. «Si no entrego en diez minutos, la aplicación me castiga. Y la aplicación no tiene corazón.»",
        },
        options: [
          {
            id: "clinica",
            say: { A: "Primero tu pie. La clínica está cerca. Te acompaño.", B: "Lo primero es tu pie. Hay una clínica cerca; te acompaño.", C: "La pizza puede esperar; tu tobillo, no. La clínica queda a dos calles: te acompaño." },
            reply: { A: "Rubén acepta. «Bueno. Gracias. Vamos despacio.»", B: "Rubén suspira y acepta tu brazo. «Tienes razón. Vamos, pero despacito.»", C: "Rubén se apoya en tu hombro. «Me convenciste. Pero si me preguntan, fue un accidente heroico.»" },
            mood: "smile", end: "clinica",
          },
          {
            id: "entregar",
            say: { A: "Yo llevo la pizza. ¿Dónde es?", B: "Si quieres, yo entrego la pizza y tú descansas.", C: "Hagamos una cosa: yo entrego la pizza y tú te quedas aquí pensando en tus decisiones." },
            reply: { A: "Rubén se ríe. «Número 40, segundo piso. ¡Gracias!»", B: "«¿En serio? Número 40, segundo piso. Dile que la pizza tuvo un viaje movido.»", C: "Rubén se ríe. «Trato hecho. Número 40. Si te dan propina, es mía, ¿eh?»" },
            mood: "smile", end: "pizza",
          },
          {
            id: "ambulancia2",
            say: { A: "Voy a llamar a una ambulancia. Es mejor.", B: "Creo que es mejor llamar a una ambulancia. No puedes caminar así.", C: "No quiero alarmarte, pero así no llegas ni a la esquina. Llamo a una ambulancia." },
            reply: { A: "Rubén dice que sí. «Está bien. Llama, por favor.»", B: "Rubén mira el tobillo y acepta. «Está bien… Llama. Tienes razón.»", C: "Rubén mira el tobillo, cada vez más hinchado. «Está bien. Gana el tobillo. Llama.»" },
            mood: "worried", end: "ambulancia",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Eres muy trabajador. Pero tu salud es más importante.", B: "Se nota que te importa tu trabajo, pero primero estás tú.", C: "Admiro tu compromiso, de verdad. Pero ningún pedido vale más que tu salud." },
            reply: { A: "Rubén sonríe. «Tienes razón. Vamos a la clínica.»", B: "Rubén se emociona un poco. «Nadie me dice eso nunca. Bueno, vamos a la clínica.»", C: "Rubén se queda callado y sonríe. «Mi hija lleva un año diciéndome lo mismo. Está bien, tú ganas: clínica.»" },
            mood: "love", end: "clinica",
          },
        },
      },
    },
    ends: {
      clinica: { text: { A: "Vas con Rubén a la clínica. Él camina despacio y te cuenta de su hija.", B: "Acompañas a Rubén hasta la clínica. Por el camino te cuenta que su hija estudia medicina.", C: "Acompañas a Rubén a la clínica. Por el camino descubres que su hija estudia medicina y que él jamás le hace caso." }, change: "se-va", flag: "ruben-ayudado", recap: "Acompañaste a Rubén a la clínica." },
      pizza: { text: { A: "Llevas la pizza al número 40. Rubén espera sentado y te saluda.", B: "Entregas la pizza en el número 40. Cuando vuelves, Rubén te espera con un pulgar arriba.", C: "Entregas la pizza en el número 40. La clienta no pregunta nada; Rubén, en cambio, quiere todos los detalles." }, change: "sonrie", flag: "ruben-ayudado", recap: "Entregaste la pizza de Rubén." },
      ambulancia: { text: { A: "Llamas a la ambulancia. Llega en pocos minutos. Rubén te dice: «Gracias».", B: "Llamas a emergencias y explicas dónde están. La ambulancia llega enseguida.", C: "Llamas a emergencias y describes la situación con calma. La ambulancia llega antes de lo que esperabas." }, change: "ambulancia", flag: "ruben-ayudado", recap: "Llamaste a una ambulancia para Rubén." },
      policia: { text: { A: "Llega la policía. Explicas todo. Al final, todos se calman.", B: "Llega la policía. Tardas un buen rato en explicar el malentendido.", C: "Llega un coche de policía. Explicar que solo querías ayudar te lleva más tiempo y más paciencia de lo previsto." }, change: "policia", recap: "Un malentendido con Rubén terminó con la policía." },
      solo: { text: { A: "Te vas. Rubén llama a un amigo por teléfono.", B: "Te alejas. Desde la esquina ves que Rubén llama a alguien.", C: "Te alejas. Desde la esquina ves que Rubén, por fin, pide ayuda a alguien que no da miedo." }, change: "llama", recap: "Te alejaste de Rubén." },
    },
    speak: {
      A1: "¿Qué haces cuando te duele algo?",
      A2: "¿Qué hiciste la última vez que te lastimaste?",
      B1: "¿Cómo reaccionas cuando ves a alguien que necesita ayuda en la calle?",
      B2: "¿Cuándo aceptas ayuda de un desconocido y cuándo prefieres arreglarte solo?",
      C1: "¿Cómo distingues entre ayudar a alguien y meterte en lo que no te corresponde?",
      C2: "¿Qué te revela tu primera reacción ante una emergencia ajena sobre tu manera de entender la responsabilidad?",
    },
  },
  {
    id: "viejo-auto",
    kind: "escena",
    district: "viejo",
    title: "Alguien abre un auto",
    verb: "ACERCARME",
    goal: "Pedir explicaciones sin acusar, disculparse por un malentendido, ofrecer ayuda práctica y proponer soluciones.",
    cast: [
      {
        id: "nadia", name: "Nadia", role: "Dueña del auto",
        age: "adult", body: "f", build: "slim", height: 1.66,
        hair: "ponytail", hairColor: "#1a1412", skin: "#8d5a3b",
        top: "coat", topColor: "#7a2e3a", bottom: "jeans", bottomColor: "#3c4a66",
        extras: ["bag", "earrings"], pose: "crouch", props: ["car", "hanger"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "nadia", mood: "worried",
        line: {
          A: "Una mujer mete un gancho de ropa por la ventana de un auto. Mira a todos lados. «Vamos, vamos… ábrete.»",
          B: "Una mujer intenta abrir la puerta de un auto con un gancho de alambre. Cada vez que pasa alguien, se pone nerviosa. «Por favor, ábrete ya…»",
          C: "Bajo un farol que parpadea, una mujer forcejea con un gancho de alambre metido en la ventanilla de un auto. Escena de película, y no precisamente romántica. «Venga, que no tengo toda la noche…»",
        },
        options: [
          {
            id: "directo",
            say: { A: "Perdón, ¿ese auto es tuyo?", B: "Perdona que pregunte, pero ¿ese auto es tuyo?", C: "Disculpa la pregunta, pero desde aquí esto parece otra cosa. ¿El auto es tuyo?" },
            reply: { A: "La mujer se levanta, ofendida. «¡Claro que es mío!»", B: "La mujer se gira, roja de rabia. «¿Perdón? ¡Claro que es mío! ¿Qué estás pensando?»", C: "La mujer se incorpora despacio, con el gancho en alto. «Ah, perfecto. Lo que me faltaba esta noche: un detective.»" },
            mood: "angry", next: "sospecha",
          },
          {
            id: "ayuda",
            say: { A: "Hola. ¿Necesitas ayuda?", B: "Hola. Parece que tienes un problema. ¿Te puedo ayudar?", C: "Hola. No sé qué está pasando, pero tienes cara de necesitar una mano." },
            reply: { A: "La mujer suspira. «Sí, por favor. Me llamo Nadia. Las llaves están adentro.»", B: "La mujer deja caer los hombros. «Sí, gracias. Soy Nadia. Dejé las llaves adentro, como una tonta.»", C: "La mujer se ríe sin ganas. «Una mano y un milagro. Soy Nadia, y mis llaves me miran desde el asiento.»" },
            mood: "sad", next: "ayudar",
          },
          {
            id: "policia",
            say: { A: "Voy a llamar a la policía.", B: "Lo siento, pero voy a llamar a la policía. Esto parece un robo.", C: "No me lo tomes a mal, pero creo que lo responsable es llamar a la policía." },
            reply: { A: "La mujer levanta las manos. «¡No! ¡Es mi auto! ¡De verdad!»", B: "La mujer abre mucho los ojos. «¿La policía? ¡Pero si es mi auto! Espera, te lo explico.»", C: "«¿Lo responsable?», repite ella, indignada. «Lo responsable sería preguntar antes de acusar, ¿no?»" },
            mood: "angry", next: "sospecha",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y escribes la matrícula.", B: "Sacas el lápiz y, disimuladamente, anotas la matrícula.", C: "Con el lápiz, anotas la matrícula con toda la discreción de un elefante." },
            say: { A: "Solo escribo el número del auto.", B: "Tranquila, solo anoto la matrícula, por si acaso.", C: "No me hagas caso, solo tomo notas. Es un pasatiempo." },
            reply: { A: "La mujer te ve. «¿Qué escribes? ¡Este auto es mío!»", B: "La mujer te ve y se pone furiosa. «¿Me estás fichando? ¡Es mi auto!»", C: "«¿Un pasatiempo?», dice ella, cruzándose de brazos. «El mío esta noche es que me traten de ladrona, por lo visto.»" },
            mood: "angry", next: "sospecha",
          },
          libro: {
            act: { A: "Abres tu libro.", B: "Abres tu libro, buscando alguna idea.", C: "Hojeas tu libro con la seriedad de un manual técnico." },
            say: { A: "Un momento. Voy a buscar cómo abrir un auto.", B: "Espera, a lo mejor aquí dice cómo abrir un auto sin llaves.", C: "Déjame consultar a los expertos. Algún personaje habrá abierto un auto alguna vez." },
            reply: { A: "La mujer se ríe un poco. «¿Un libro? Bueno, ayúdame. Soy Nadia.»", B: "La mujer se ríe a pesar de todo. «Si ese libro abre autos, te lo compro. Soy Nadia, por cierto.»", C: "La mujer suelta una carcajada cansada. «Una novela como manual de cerrajería. Me encanta. Soy Nadia.»" },
            mood: "smile", next: "ayudar",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Desconfiado, sacas el gas pimienta.", C: "Sacas el gas pimienta, convencido de que acabas de pillar a una ladrona." },
            say: { A: "¡Alto! ¡Deja eso!", B: "¡Quieta! Deja el gancho en el suelo, por favor.", C: "Tranquila, no quiero problemas. Pero suelta ese gancho." },
            reply: { A: "La mujer grita. «¡Ayuda! ¡Un ladrón!»", B: "La mujer grita y se esconde detrás del auto. «¡Socorro! ¡Me quieren robar!»", C: "La mujer grita tan fuerte que se enciende una ventana. «¡Ayuda! ¡El ladrón eres tú!»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Muestras la granada.", B: "Sin pensarlo, le muestras la granada.", C: "Le muestras la granada como quien enseña una credencial." },
            say: { A: "¿Qué haces con ese auto?", B: "¿Me explicas qué haces con ese auto?", C: "Creo que me debes una explicación sobre ese auto." },
            reply: { A: "La mujer grita. «¡No! ¡Es mi auto! ¡No me hagas nada!»", B: "La mujer suelta el gancho y grita. «¡Llévatelo! Bueno, no, ¡es mío! ¡Pero no me hagas nada!»", C: "«¿Yo te debo una explicación?», chilla ella. «¡Tú tienes una granada! ¡Socorro!»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al acercarte, se ve tu pistola.", C: "Al acercarte, la pistola queda a la vista." },
            say: { A: "Hola. ¿Qué haces?", B: "Hola. ¿Qué estás haciendo con ese auto?", C: "Buenas noches. ¿Algún problema con ese auto?" },
            reply: { A: "La mujer levanta las manos. «¿Eres policía? ¡Es mi auto!»", B: "La mujer levanta las manos, temblando. «¿Eres policía? ¡Es mío, te lo juro! ¡Tengo los papeles!»", C: "La mujer se queda inmóvil. «Si eres policía, es mi auto. Si no lo eres, también es mi auto. ¡Socorro!»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Sacas el cuchillo para ayudar con la ventana.", C: "Sacas el cuchillo: con la punta, quizá puedas separar la goma de la ventana." },
            say: { A: "Con esto podemos abrir la ventana.", B: "Con la punta podemos separar la goma de la ventana. ¿Lo intento?", C: "Si separamos la goma con esto, el gancho entra mejor. ¿Me dejas probar?" },
            reply: { A: "La mujer da un paso atrás. «¡Ay! Eh… ¿para la ventana? Bueno…»", B: "La mujer se asusta, pero después mira la ventana. «Ah, para la goma… Bueno. Soy Nadia. Con cuidado.»", C: "La mujer tarda un segundo en respirar. «Me diste un susto… pero la idea es buena. Soy Nadia. Despacio, ¿eh?»" },
            mood: "worried", next: "ayudar",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Hola. Pareces muy cansada. ¿Qué pasa?", B: "Hola. Tienes cara de haber tenido un día horrible. ¿Qué te pasó?", C: "Hola. No sé qué te pasa, pero parece que la noche se ensañó contigo." },
            reply: { A: "La mujer sonríe un poco. «Soy Nadia. Hoy es mi cumpleaños. Y mis llaves están adentro.»", B: "La mujer se ríe y casi llora. «Soy Nadia. Hoy es mi cumpleaños, nadie me llamó y encima dejé las llaves adentro.»", C: "«Soy Nadia», dice, y se le escapa una risa triste. «Hoy cumplo treinta y cinco. Mi regalo: las llaves encerradas.»" },
            mood: "love", next: "ayudar",
          },
        },
      },
      sospecha: {
        who: "nadia", mood: "angry",
        line: {
          A: "La mujer está enojada. «Me llamo Nadia. ¿Tengo cara de ladrona?»",
          B: "La mujer te mira con rabia. «Me llamo Nadia y este es mi auto. ¿Te parece que tengo cara de ladrona?»",
          C: "La mujer te apunta con el gancho, que de arma tiene poco. «Nadia, encantada. Dueña de este auto y, por lo visto, sospechosa oficial del barrio.»",
        },
        options: [
          {
            id: "papeles",
            say: { A: "Perdón. ¿Tienes un papel del auto?", B: "No te enojes, pero ¿tienes algún papel que lo demuestre?", C: "Te creo, de verdad. Pero si tienes algún papel a mano, nos quedamos todos más tranquilos." },
            reply: { A: "Nadia señala la ventana. «Mira. Los papeles están ahí, con mi foto.»", B: "Nadia señala el asiento. «Ahí están: los papeles, mi cartera con mi foto… y mis llaves. Todo adentro.»", C: "Nadia señala el interior con una sonrisa amarga. «Papeles, foto, llaves y medicina. Todo a salvo. De mí.»" },
            mood: "sad", next: "ayudar",
          },
          {
            id: "disculpa",
            say: { A: "Perdón, Nadia. Me equivoqué.", B: "Perdóname, Nadia. Me precipité. ¿Qué te pasó?", C: "Tienes razón, juzgué demasiado rápido. Lo siento. ¿Qué pasó?" },
            reply: { A: "Nadia respira. «Bueno. Las llaves están adentro.»", B: "Nadia suspira. «Está bien. Es que dejé las llaves adentro y estoy muy nerviosa.»", C: "Nadia se encoge de hombros. «Disculpa aceptada. Te cuento la tragedia: llaves, adentro; yo, afuera.»" },
            mood: "sad", next: "ayudar",
          },
          {
            id: "llamar",
            say: { A: "Lo siento. Voy a llamar a la policía.", B: "Lo siento, pero prefiero que lo compruebe la policía.", C: "No dudo de ti, pero que lo confirme la policía, por si acaso." },
            reply: { A: "Nadia se sienta en el suelo. «Bueno. Llama.»", B: "Nadia se sienta en el borde de la acera. «Muy bien. Llama. Total, la noche ya está arruinada.»", C: "«No dudas de mí, claro», dice Nadia, y se sienta en la acera. «Adelante. Que vengan. Así me abren ellos.»" },
            mood: "sad", end: "policia",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón, Nadia. Tienes razón. ¿Cómo te ayudo?", B: "Perdóname, Nadia. Fui muy injusto. Déjame ayudarte.", C: "Perdóname. Llegué juzgando y tú solo necesitabas ayuda. ¿Empezamos otra vez?" },
            reply: { A: "Nadia sonríe. «Bueno. Gracias. Mi medicina está adentro también.»", B: "Nadia se ablanda. «Gracias. Y perdón por gritar. Es que mi medicina también está adentro.»", C: "Nadia sonríe por fin. «Empezamos otra vez. Hola, soy Nadia, y mi medicina está ahí, burlándose de mí.»" },
            mood: "love", next: "ayudar",
          },
        },
      },
      calmar: {
        who: "nadia", mood: "scared",
        line: {
          A: "Nadia está detrás del auto. Tiene el teléfono en la mano.",
          B: "Nadia se esconde detrás del auto y busca el teléfono con las manos temblorosas.",
          C: "Nadia se agacha detrás del auto, con el teléfono en una mano y el gancho en la otra, como si fuera un escudo.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Pensé que robabas el auto.", B: "Perdona, lo guardo ya. Pensé que estabas robando el auto.", C: "Lo guardo. Perdóname: vi el gancho y me monté una película entera." },
            reply: { A: "Nadia sale despacio. «¿Robar? ¡Es mi auto! Las llaves están adentro.»", B: "Nadia sale despacio. «¿Robar? ¡Es mío! Dejé las llaves adentro. Y mi medicina.»", C: "Nadia asoma la cabeza. «Pues tu película tiene un final malo. Es mi auto. Llaves adentro, medicina adentro, yo afuera.»" },
            mood: "worried", next: "ayudar",
          },
          {
            id: "explicar",
            say: { A: "Tranquila. Lo llevo para protegerme.", B: "Tranquila, no es para ti. Lo llevo para protegerme.", C: "No es lo que parece. Bueno, es exactamente lo que parece, pero no para ti." },
            reply: { A: "Nadia no te cree. Llama a la policía.", B: "Nadia marca un número sin dejar de mirarte. «¿Policía? Hay una persona armada aquí…»", C: "«Exactamente lo que parece», repite Nadia, y marca. «¿Policía? Sí, tengo un problema. Dos, en realidad.»" },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdona el susto. Ya me voy.", C: "Creo que lo mejor que puedo hacer por ti es desaparecer. Perdón." },
            reply: { A: "Nadia no dice nada. Toma su bolso y se va.", B: "Nadia agarra su bolso y se aleja rápido, sin mirar atrás.", C: "Nadia agarra su bolso y se aleja a paso rápido. «Sí. Muy buena idea», murmura." },
            mood: "angry", end: "molesta",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón. Tienes miedo por mi culpa. Quiero ayudar.", B: "Perdóname, te asusté sin motivo. Solo quiero ayudarte.", C: "Perdóname. Te di el susto de tu vida y encima sin razón. Déjame compensarlo." },
            reply: { A: "Nadia sale. «Bueno… Soy Nadia. Mis llaves están adentro.»", B: "Nadia se levanta despacio. «Bueno… Tienes cara de arrepentido. Soy Nadia. Mis llaves están adentro.»", C: "Nadia sale de detrás del auto, todavía pálida. «Compénsalo abriendo esa puerta. Soy Nadia, por cierto.»" },
            mood: "love", next: "ayudar",
          },
        },
      },
      ayudar: {
        who: "nadia", mood: "worried",
        line: {
          A: "Nadia mira por la ventana. «Mis llaves y mi medicina están ahí. Me duele mucho la cabeza.»",
          B: "Nadia apoya la frente en el vidrio. «Mis llaves y mi medicina para la migraña están ahí. Y la cabeza me va a explotar.»",
          C: "Nadia mira el asiento como quien mira un tesoro detrás de una vitrina. «Llaves y pastillas para la migraña. A medio metro. Tan cerca y tan lejos.»",
        },
        options: [
          {
            id: "cerrajero",
            say: { A: "Voy a llamar a un cerrajero. Hay uno de 24 horas.", B: "Hay un cerrajero de 24 horas cerca. Si quieres, lo llamo yo.", C: "Hay un cerrajero de guardia a dos calles. Sale caro, pero menos que una ventanilla rota." },
            reply: { A: "Nadia sonríe. «¿Sí? ¡Gracias! Llama, por favor.»", B: "«¿En serio? Sí, por favor. Pago lo que sea», dice Nadia, aliviada.", C: "«Ese argumento económico me convence», dice Nadia. «Llama, por favor.»" },
            mood: "smile", end: "cerrajero",
          },
          {
            id: "gancho",
            say: { A: "Dame el gancho. Lo intentamos juntos.", B: "A ver, dame el gancho. Tú miras y me dices hacia dónde muevo.", C: "Hagamos equipo: tú diriges desde la ventana y yo pongo las manos." },
            reply: { A: "Nadia te da el gancho. «Un poco a la izquierda… ¡Ahí!»", B: "Nadia se pega al vidrio. «Más abajo… a la izquierda… ¡Ahí, ahí!»", C: "Nadia dirige como un cirujano. «Dos centímetros abajo. Gira. No, la otra izquierda. ¡Ahí!»" },
            mood: "surprised", end: "abierto",
          },
          {
            id: "manana",
            say: { A: "Es muy tarde. ¿Por qué no vas en taxi a casa?", B: "Quizá es mejor que vayas a casa en taxi y vuelvas mañana con la llave de repuesto.", C: "A estas horas, yo me rendiría: taxi a casa y mañana, con luz y llave de repuesto, se arregla." },
            reply: { A: "Nadia se enoja. «¿Y mi medicina? Bueno. Adiós.»", B: "Nadia frunce el ceño. «¿Y la medicina, qué? Gracias por nada.»", C: "«Rendirse, claro. Qué consejo tan útil», dice Nadia, y se aleja con el gancho en la mano." },
            mood: "angry", end: "molesta",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Feliz noche, Nadia. Vamos a abrir el auto juntos.", B: "No vas a pasar esta noche sola con la puerta cerrada. Lo abrimos juntos.", C: "Ninguna noche debería terminar así. Dame el gancho: esto lo arreglamos entre los dos." },
            reply: { A: "Nadia se ríe. Mueves el gancho y… ¡clic! «¡Sí! ¡Eres mi héroe!»", B: "Nadia se ríe por primera vez. Mueves el gancho y suena un clic. «¡No puede ser! ¡Te invito a un café!»", C: "Al tercer intento, suena un clic glorioso. Nadia aplaude. «Te debo un café, un pastel y probablemente la salud mental.»" },
            mood: "love", end: "abierto",
          },
        },
      },
    },
    ends: {
      cerrajero: { text: { A: "Llega el cerrajero. En un minuto abre la puerta. Nadia toma su medicina.", B: "El cerrajero llega en quince minutos y abre la puerta en uno. Nadia toma su medicina y te da las gracias.", C: "El cerrajero tarda quince minutos en llegar y treinta segundos en abrir. Nadia lo mira como si fuera un mago." }, change: "luz", recap: "Llamaste a un cerrajero para Nadia." },
      abierto: { text: { A: "La puerta se abre. Nadia toma sus llaves y su medicina. Está feliz.", B: "La puerta se abre por fin. Nadia recupera sus llaves y su medicina, y no para de reírse.", C: "La puerta cede. Nadia rescata llaves y pastillas, y declara que esta noche cuenta como fiesta de cumpleaños." }, change: "sonrie", recap: "Abriste el auto de Nadia con un gancho." },
      policia: { text: { A: "Llega la policía. Nadia muestra sus papeles. Todo está bien.", B: "Llega la policía. Nadia demuestra que el auto es suyo y los agentes la ayudan a abrirlo.", C: "Llega una patrulla. Tras comprobar los papeles, los agentes abren el auto. Nadia no te dirige la palabra." }, change: "policia", recap: "Un malentendido con Nadia terminó con la policía." },
      molesta: { text: { A: "Nadia se va. Está enojada contigo.", B: "Nadia se va calle abajo, enojada. Su auto sigue cerrado bajo el farol.", C: "Nadia se pierde calle abajo. El auto se queda ahí, cerrado y con el gancho colgando de la ventanilla." }, change: "se-va", recap: "Nadia se fue enojada y sin sus llaves." },
    },
    speak: {
      A1: "¿Dónde dejas tus llaves en casa?",
      A2: "¿Qué cosa importante perdiste o olvidaste alguna vez?",
      B1: "¿Cómo reaccionas cuando alguien piensa mal de ti sin motivo?",
      B2: "¿Qué harías si vieras a alguien abriendo un auto con un alambre?",
      C1: "¿Cómo pides explicaciones a alguien sin que suene a acusación?",
      C2: "¿Qué dice de una sociedad la rapidez con la que sospechamos de los demás?",
    },
  },
  {
    id: "viejo-discusion",
    kind: "escena",
    district: "viejo",
    title: "Gritos detrás de una puerta",
    verb: "ESCUCHAR",
    goal: "Interesarse por alguien, decidir si intervenir, pedir disculpas por un malentendido y aceptar una invitación.",
    cast: [
      {
        id: "celia", name: "Celia", role: "Actriz que ensaya",
        age: "young", body: "f", build: "athletic", height: 1.7,
        hair: "curly", hairColor: "#5a2a1a", skin: "#c98e6a",
        top: "dress", topColor: "#2f6d5a", bottom: "skirt", bottomColor: "#1e1e24",
        extras: ["earrings"], pose: "arms", props: ["door", "script"],
      },
      {
        id: "mauro", name: "Mauro", role: "Actor que ensaya",
        age: "adult", body: "m", build: "slim", height: 1.83,
        hair: "buzz", hairColor: "#141414", skin: "#6b4430",
        top: "shirt", topColor: "#e6e1d3", bottom: "pants", bottomColor: "#3a3a3a",
        extras: ["beard"], pose: "stand", props: ["door"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "celia", mood: "angry",
        line: {
          A: "Estás en el patio del conventillo. Detrás de una puerta, una mujer grita: «¡Te vas a arrepentir!»",
          B: "En el patio del conventillo, detrás de una puerta verde, un hombre y una mujer se gritan. «¡Te vas a arrepentir, te lo juro!»",
          C: "El patio del conventillo está en silencio, salvo por una puerta verde que tiembla con cada grito. «¡Te vas a arrepentir toda tu vida!», dice una voz de mujer.",
        },
        options: [
          {
            id: "tocar",
            say: { A: "Voy a tocar la puerta. ¿Hola? ¿Todo bien?", B: "Toco la puerta. ¿Hola? Perdón, ¿está todo bien ahí dentro?", C: "Toco, aunque no sé muy bien qué voy a decir. ¿Hola? ¿Todo en orden?" },
            reply: { A: "Los gritos paran. Alguien camina hacia la puerta.", B: "Los gritos paran de golpe. Se oyen pasos y alguien abre la puerta.", C: "Silencio absoluto. Luego, unos pasos y una risita contenida. La puerta se abre." },
            mood: "surprised", next: "puerta",
          },
          {
            id: "policia",
            say: { A: "Voy a llamar a la policía.", B: "Esto suena mal. Mejor llamo a la policía.", C: "Prefiero no meterme yo; que se encargue la policía." },
            reply: { A: "Llamas. Los gritos siguen: «¡Nunca te voy a perdonar!»", B: "Mientras explicas la dirección, los gritos siguen: «¡Nunca te voy a perdonar, Leonardo!»", C: "Mientras hablas con emergencias, la voz femenina remata: «¡Ni en esta vida ni en la próxima, Leonardo!»" },
            mood: "angry", end: "policia",
          },
          {
            id: "escuchar",
            say: { A: "Espera. Voy a escuchar un poco más.", B: "Mejor escucho un poco más antes de hacer nada.", C: "Antes de intervenir, conviene entender qué está pasando." },
            reply: { A: "Te acercas a la puerta. Ahora grita un hombre.", B: "Te acercas en silencio. Ahora es el hombre el que grita.", C: "Te pegas a la pared con el sigilo de un espía de barrio. Ahora le toca gritar al hombre." },
            mood: "angry", next: "escuchar",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Escribes una nota con el lápiz.", B: "Escribes una nota con el lápiz y la pasas por debajo de la puerta.", C: "Escribes «¿Necesitan ayuda?» y deslizas el papel por debajo de la puerta." },
            say: { A: "Aquí dejo una nota: «¿Están bien?»", B: "Les dejo una nota: «¿Está todo bien? Estoy afuera.»", C: "Les dejo una nota discreta. A veces un papel dice más que un portazo." },
            reply: { A: "Los gritos paran. Alguien lee la nota y abre la puerta.", B: "Los gritos paran. Se oye un «¡Ay, qué lindo!» y la puerta se abre.", C: "Silencio. Luego, una voz enternecida: «Mauro, nos dejaron una nota». La puerta se abre." },
            mood: "surprised", next: "puerta",
          },
          libro: {
            act: { A: "Abres tu libro.", B: "Abres tu libro: esas frases te suenan.", C: "Hojeas tu libro: juras que esos gritos ya los leíste en algún sitio." },
            say: { A: "¡Un momento! Esas palabras están en mi libro.", B: "¡Qué raro! Lo que gritan está casi igual en este libro.", C: "O esta pareja plagia literatura o aquí pasa algo muy curioso." },
            reply: { A: "Tocas la puerta con el libro. Alguien abre.", B: "Tocas con el libro en la mano. Una mujer abre, sorprendida.", C: "Tocas la puerta, libro en mano, como un inspector literario. Te abre una mujer muy sorprendida." },
            mood: "surprised", next: "puerta",
          },
          gas: {
            act: { A: "Sacas el gas pimienta y tocas la puerta.", B: "Con el gas pimienta en la mano, tocas la puerta.", C: "Gas pimienta en mano, golpeas la puerta con firmeza." },
            say: { A: "¡Abran la puerta, por favor!", B: "¡Abran! ¿Qué está pasando ahí?", C: "¡Abran, por favor! Esto ya fue demasiado lejos." },
            reply: { A: "Un hombre abre. Ve el gas y grita: «¡Celia!»", B: "Abre un hombre con barba. Ve el gas y retrocede. «¡Celia! ¡Hay alguien armado!»", C: "Un hombre abre y se queda blanco. «Celia… creo que el público vino con gas pimienta.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Tocas la puerta con la granada en la mano.", B: "Tocas la puerta. En la otra mano tienes la granada.", C: "Tocas la puerta con la granada a la vista, por si alguien necesitaba más drama." },
            say: { A: "¡Hola! ¿Qué pasa aquí?", B: "¡Hola! Escuché gritos. ¿Qué pasa?", C: "Buenas noches. Vengo a mediar." },
            reply: { A: "Un hombre abre. Ve la granada. «¡Ay, no! ¡Celia!»", B: "Abre un hombre con barba. Ve la granada y se pega a la pared. «¡Celia, no salgas!»", C: "«¿A mediar?», dice el hombre, con los ojos clavados en la granada. «¡Celia, llegó el mediador más intenso del mundo!»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Tocas la puerta. Se ve tu pistola.", B: "Tocas la puerta y, al abrir, se ve tu pistola.", C: "Tocas la puerta; cuando se abre, tu pistola es lo primero que se ve." },
            say: { A: "Hola. ¿Está todo bien?", B: "Hola. ¿Está todo bien? Oí gritos.", C: "Perdón por la hora. ¿Todo bien? Se oye desde el patio." },
            reply: { A: "Un hombre levanta las manos. «¡Sí, sí! ¡Todo bien!»", B: "Un hombre con barba levanta las manos. «¡Todo perfecto! ¡Nunca estuvimos mejor!»", C: "El hombre levanta las manos. «Todo bien, todo bien. De hecho, ahora mismo, maravilloso.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Tocas la puerta. Tienes el cuchillo en la mano.", B: "Tocas la puerta sin darte cuenta de que tienes el cuchillo en la mano.", C: "Tocas la puerta. Olvidaste guardar el cuchillo con el que pelabas una manzana." },
            say: { A: "Hola. ¿Necesitan ayuda?", B: "Hola, ¿necesitan ayuda? Se oyen gritos desde el patio.", C: "Hola. Interrumpo, pero sonaba a que alguien necesitaba ayuda." },
            reply: { A: "Un hombre abre y grita. «¡Un cuchillo! ¡Celia!»", B: "Un hombre abre, ve el cuchillo y grita. «¡Celia! ¡Hay alguien con un cuchillo!»", C: "El hombre abre, ve el cuchillo y luego la manzana. «¡Celia! ¡Hay alguien con… una merienda muy peligrosa!»" },
            mood: "scared", next: "calmar",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Toco la puerta. Hola, vecinos. ¿Están bien?", B: "Toco con suavidad. Hola, soy un vecino. ¿Puedo ayudar en algo?", C: "Toco con delicadeza. Perdón, no quiero meterme, pero me preocupaba." },
            reply: { A: "Una mujer abre y sonríe. «¡Qué amable! Pasa, pasa.»", B: "Una mujer de pelo rizado abre, emocionada. «¡Ay, qué tierno! Nadie en este conventillo se preocupa por nada.»", C: "Una mujer de pelo rizado abre y se lleva la mano al pecho. «¿Te preocupabas por nosotros? Eso es lo más bonito que me pasó este mes.»" },
            mood: "love", next: "puerta",
          },
        },
      },
      escuchar: {
        who: "mauro", mood: "angry",
        line: {
          A: "Ahora grita el hombre. «¡Y el anillo de tu abuela!» Después, silencio. «Celia, otra vez desde el principio.»",
          B: "El hombre grita: «¡Y el anillo de tu abuela, dónde está!» Luego, con voz tranquila: «Espera, Celia, otra vez desde el principio.»",
          C: "«¡Vendiste el anillo de tu abuela!», ruge el hombre. Pausa. Y luego, con tono de oficina: «Celia, perdona, lo repito. Me salió muy flojo.»",
        },
        options: [
          {
            id: "tocar2",
            say: { A: "Qué raro. Voy a tocar la puerta.", B: "Esto es muy raro. Toco la puerta y pregunto.", C: "Esto ya no suena a pelea. Suena a… otra cosa. Toco." },
            reply: { A: "Alguien abre la puerta.", B: "La puerta se abre y aparece una mujer con un papel en la mano.", C: "La puerta se abre y aparece una mujer con unas hojas llenas de notas." },
            mood: "surprised", next: "puerta",
          },
          {
            id: "policia2",
            say: { A: "No sé qué pasa. Llamo a la policía.", B: "No entiendo nada, pero por si acaso llamo a la policía.", C: "Sea lo que sea, no me quedo tranquilo. Llamo a la policía." },
            reply: { A: "Llamas. Adentro, gritan otra vez.", B: "Llamas a la policía. Adentro, vuelven a gritar con más fuerza.", C: "Mientras llamas, la discusión vuelve a empezar. Con más pasión que antes, si cabe." },
            mood: "angry", end: "policia",
          },
          {
            id: "ignorar",
            say: { A: "No es mi problema. Me voy.", B: "No es asunto mío. Mejor sigo mi camino.", C: "Cada casa es un mundo. Mejor no me meto." },
            reply: { A: "Te vas. Detrás de ti, siguen los gritos.", B: "Te alejas. Detrás de ti, los gritos vuelven a empezar.", C: "Te alejas. Tras la puerta, alguien vuelve a arrepentirse de todo, con mucha convicción." },
            mood: "angry", end: "sigue",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Toco la puerta. Hola. Quiero saber si están bien.", B: "Toco suavemente. Hola, perdón. Solo quiero saber si están bien.", C: "Toco con suavidad. Perdón, no es curiosidad. Bueno, un poco sí." },
            reply: { A: "Una mujer abre y se ríe. «¡Qué amable! Ven, pasa.»", B: "Una mujer abre y se ríe con ternura. «¡Ay! ¿Te asustamos? Ven, te explico.»", C: "Una mujer abre, divertida. «Un poco de curiosidad es lo mínimo. Pasa, te lo mereces.»" },
            mood: "love", next: "puerta",
          },
        },
      },
      puerta: {
        who: "celia", mood: "surprised",
        line: {
          A: "Celia tiene un guion en la mano. Detrás, Mauro sonríe. «¿Sí? ¿Te asustamos?»",
          B: "Abre Celia, con un guion lleno de notas. Detrás, Mauro se ríe en silencio. «¿Pasa algo? ¿Te asustamos?»",
          C: "Celia sostiene un guion subrayado en cuatro colores. Mauro, detrás, se tapa la boca para no reírse. «Déjame adivinar: parecíamos un drama real.»",
        },
        options: [
          {
            id: "preocupado",
            say: { A: "Sí. Escuché gritos. ¿Están bien?", B: "Un poco, sí. Escuché gritos y pensé que alguien estaba en peligro.", C: "Bastante, la verdad. Desde el patio sonaba a tragedia con todas las letras." },
            reply: { A: "Celia se ríe. «¡Somos actores! Es una obra de teatro.»", B: "Celia se ríe. «¡Somos actores! Ensayamos una obra. El estreno es el sábado.»", C: "«¡Gracias!», dice Celia, encantada. «Eso significa que funciona. Somos actores. Estrenamos el sábado.»" },
            mood: "smile", end: "estreno",
          },
          {
            id: "curioso",
            say: { A: "¿Qué hacen? ¿Es una obra de teatro?", B: "Oye, eso es un guion, ¿no? ¿Están ensayando algo?", C: "Ese guion me dice que acabo de colarme en un ensayo, ¿me equivoco?" },
            reply: { A: "Mauro aplaude. «¡Sí! Es nuestra obra. ¿Te gusta el teatro?»", B: "Mauro asiente, contento. «¡Exacto! Se llama El anillo. Estrenamos el sábado aquí, en el patio.»", C: "Mauro hace una reverencia. «No te equivocas. Bienvenido a El anillo, estreno mundial el sábado en este patio.»" },
            mood: "smile", end: "estreno",
          },
          {
            id: "queja",
            say: { A: "Hay vecinos que duermen. Por favor, más bajo.", B: "No quiero molestar, pero hay gente durmiendo. ¿Podrían gritar un poco más bajo?", C: "Entiendo que el arte necesita volumen, pero los vecinos necesitan dormir." },
            reply: { A: "Celia se pone roja. «¡Perdón! Somos actores. Vamos a hablar bajito.»", B: "Celia se tapa la boca. «¡Perdón! Ensayamos una obra. Tienes razón, bajamos la voz.»", C: "«Touché», dice Celia, avergonzada. «Ensayamos una obra. Seguiremos odiándonos en susurros.»" },
            mood: "sad", end: "susurros",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Me alegra mucho. Ustedes gritan muy bien.", B: "Qué alivio. Y, de verdad, son muy buenos: me lo creí todo.", C: "Qué alivio. Y qué talento: me tuvieron cinco minutos con el corazón en un puño." },
            reply: { A: "Celia abraza a Mauro. «¿Oíste? ¡Somos buenos! Ven al estreno.»", B: "Celia y Mauro se miran, emocionados. «¡Nuestro primer fan! Tienes que venir al estreno.»", C: "Celia se emociona. «Llevamos dos años ensayando y eres el primero que nos cree. Primera fila, sin discusión.»" },
            mood: "love", end: "estreno",
          },
        },
      },
      calmar: {
        who: "mauro", mood: "scared",
        line: {
          A: "Mauro y Celia están contra la pared. Tienen miedo.",
          B: "Mauro protege a Celia con el brazo. Los dos te miran, aterrados.",
          C: "Mauro se pone delante de Celia, valiente pero con las rodillas temblando. Celia sujeta el guion como un escudo.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Escuché gritos y tuve miedo.", B: "Perdón, lo guardo ya. Oí gritos y pensé que alguien estaba en peligro.", C: "Lo guardo, perdón. Oí tantos gritos que me imaginé lo peor." },
            reply: { A: "Mauro respira. «Ah… Somos actores. Ensayamos.»", B: "Mauro suelta el aire. «Ah… Es un ensayo. Somos actores. Casi me matas del susto.»", C: "Mauro se deja caer contra la pared. «Lo peor era nuestra obra. Actores. Ensayo. Respira, que yo también lo intento.»" },
            mood: "worried", next: "puerta",
          },
          {
            id: "explicar",
            say: { A: "Tranquilos. Es para protegerme.", B: "No es para ustedes. Solo lo traje por seguridad.", C: "No se asusten. Esto es… un accesorio. Como los suyos, supongo." },
            reply: { A: "Celia llama a la policía.", B: "Celia ya está hablando por teléfono. «Sí, ¿policía? Hay alguien en nuestra puerta…»", C: "«Nuestros accesorios son de cartón», dice Celia, marcando un número. «¿Policía? Necesitamos ayuda.»" },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me equivoqué. Me voy.", B: "Perdón por el susto. Me equivoqué de situación. Me voy.", C: "Creo que me equivoqué de obra. Perdón. Me retiro." },
            reply: { A: "Mauro cierra la puerta muy rápido.", B: "Mauro cierra la puerta de golpe y pone la llave.", C: "Mauro cierra con doble llave. Desde dentro, se oye: «Celia, esto va a la obra.»" },
            mood: "scared", end: "sigue",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón. Me preocupé por ustedes. Quiero ayudar.", B: "Perdónenme. Me asusté por ustedes y lo hice fatal.", C: "Perdónenme. Quise ser un héroe y terminé siendo el villano." },
            reply: { A: "Celia sonríe. «Bueno… Eres un buen vecino. Somos actores.»", B: "Celia sale de detrás de Mauro. «Bueno… te preocupaste. Eso es bonito. Somos actores, ¿sabes?»", C: "Celia se ríe, nerviosa. «Héroe y villano en una escena. Tienes talento. Somos actores, por cierto.»" },
            mood: "love", next: "puerta",
          },
        },
      },
    },
    ends: {
      estreno: { text: { A: "Celia te da una entrada para el estreno. La puerta verde se queda abierta.", B: "Celia te regala una entrada para el estreno del sábado. Mauro enciende la luz del patio para mostrarte el escenario.", C: "Te vas con una entrada en el bolsillo y la promesa de primera fila. Mauro enciende las luces del patio: allí será el estreno." }, change: "luz", recap: "Celia y Mauro te invitaron al estreno de su obra." },
      policia: { text: { A: "Llega la policía. Celia y Mauro explican: es teatro. Todos se ríen.", B: "Llega la policía. Celia y Mauro enseñan el guion y, al final, hasta los agentes se ríen.", C: "Llega una patrulla. Tras leer el guion, un agente pregunta si hay entradas para el sábado. Todos se ríen." }, change: "policia", recap: "Llamaste a la policía por un ensayo de teatro." },
      sigue: { text: { A: "Te vas. Los gritos siguen detrás de la puerta.", B: "Sigues tu camino. Detrás de la puerta, el drama continúa.", C: "Sigues tu camino sin saber nunca qué pasó con el anillo de la abuela." }, change: "sigue", recap: "Te alejaste de los gritos del conventillo." },
      susurros: { text: { A: "Celia y Mauro ensayan muy bajito. El patio está tranquilo.", B: "Celia y Mauro siguen ensayando en voz baja. Los vecinos, por fin, duermen.", C: "Celia y Mauro ensayan su gran pelea en susurros. Resulta todavía más inquietante." }, change: "sonrie", recap: "Pediste a Celia y Mauro que ensayaran en voz baja." },
    },
    speak: {
      A1: "¿Qué ruidos escuchas por la noche en tu casa?",
      A2: "¿Cuándo fuiste al teatro por última vez?",
      B1: "¿Qué haces cuando escuchas una discusión fuerte de tus vecinos?",
      B2: "¿En qué situaciones crees que es mejor intervenir y en cuáles no meterse?",
      C1: "¿Dónde pones el límite entre la preocupación por los vecinos y la intromisión?",
      C2: "¿Por qué crees que a veces una ficción nos conmueve más que un conflicto real?",
    },
  },
  {
    id: "viejo-borracho",
    kind: "escena",
    district: "viejo",
    title: "Buscando el hotel",
    verb: "AYUDAR",
    goal: "Dar indicaciones, leer información, contradecir con tacto y ofrecer compañía o alternativas.",
    cast: [
      {
        id: "gustavo", name: "Gustavo", role: "Invitado de una boda",
        age: "adult", body: "m", build: "average", height: 1.8,
        hair: "short", hairColor: "#3a2e26", skin: "#e8c4a0",
        top: "suit", topColor: "#2b3550", bottom: "pants", bottomColor: "#2b3550",
        extras: ["scarf"], pose: "walk",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "gustavo", mood: "tipsy",
        line: {
          A: "Un hombre en traje camina en zigzag. «¡Hola, amigo! ¿Dónde está el Hotel Imperial? Es muy elegante.»",
          B: "Un hombre en traje, con la corbata suelta, te saluda como si te conociera de siempre. «¡Buenas noches! ¿El Hotel Imperial? Ese elegante, con columnas.»",
          C: "Un hombre trajeado, con la corbata convertida en bufanda, te intercepta con una sonrisa enorme. «¡Disculpe, caballero de la noche! Busco el Imperial. Columnas, alfombra roja, todo muy digno.»",
        },
        options: [
          {
            id: "indicar",
            say: { A: "El Hotel Imperial está en el centro. A diez minutos.", B: "El Imperial está en el centro, a unos diez minutos andando por la avenida.", C: "El Imperial queda en el centro, a diez minutos. Aunque a tu ritmo, quizá veinte." },
            reply: { A: "Gustavo se ríe. «¡Perfecto! Soy Gustavo. Vamos juntos, ¿sí?»", B: "«¡Diez minutos! Nada. Soy Gustavo, por cierto», dice, y se apoya en una farola para no perder el equilibrio.", C: "Gustavo se ríe a carcajadas. «¡Veinte! Me ofende, pero me lo merezco. Gustavo, encantado. ¿Me acompaña un trocito?»" },
            mood: "tipsy", next: "camino",
          },
          {
            id: "tarjeta",
            say: { A: "¿Tienes la tarjeta de tu habitación?", B: "¿Llevas la tarjeta de la habitación? Normalmente dice el nombre del hotel.", C: "¿Y si consultamos a la tarjeta de la habitación? Suele tener mejor memoria que nosotros a estas horas." },
            reply: { A: "Gustavo busca en su chaqueta. «¡Sí! Aquí está.»", B: "Gustavo revisa todos sus bolsillos y saca una tarjeta. «¡Aquí está! Me llamo Gustavo, por cierto.»", C: "Gustavo registra cinco bolsillos y saca una tarjeta con aire triunfal. «¡Gustavo y su tarjeta, a sus órdenes!»" },
            mood: "smile", next: "tarjeta",
          },
          {
            id: "sentarse",
            say: { A: "Siéntate un momento. ¿Quieres agua?", B: "Ven, siéntate un momento en este banco. ¿Quieres un poco de agua?", C: "Propongo una pausa técnica: banco, agua y luego planificamos la ruta." },
            reply: { A: "Gustavo se sienta. «Gracias. Soy Gustavo. Vengo de una boda.»", B: "Gustavo se sienta y bebe. «Gracias. Me llamo Gustavo. Vengo de la boda de mi prima.»", C: "Gustavo se deja caer en el banco. «Pausa técnica aceptada. Gustavo, padrino de la boda de mi prima.»" },
            mood: "smile", next: "tarjeta",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y dibujas un mapa.", B: "Con el lápiz, le dibujas un mapa en una servilleta.", C: "Con el lápiz, improvisas un mapa en una servilleta, con flechas enormes por si acaso." },
            say: { A: "Mira. Estamos aquí. El hotel está aquí.", B: "Mira, estamos aquí. Sigues todo recto y giras en la segunda calle.", C: "Esto es nosotros, esto es el Imperial y esta línea es la que no debes abandonar bajo ningún concepto." },
            reply: { A: "Gustavo mira el mapa al revés. «¡Qué bonito! Soy Gustavo.»", B: "Gustavo gira el mapa tres veces. «¡Qué bonito dibujo! Soy Gustavo. ¿Me acompañas un poco?»", C: "Gustavo sostiene el mapa al revés con gran respeto. «Una obra de arte. Gustavo, encantado. ¿El autor no hace visitas guiadas?»" },
            mood: "tipsy", next: "camino",
          },
          libro: {
            act: { A: "Sacas tu libro.", B: "Sacas tu libro: quizá tiene un mapa al final.", C: "Sacas tu libro, con la vaga esperanza de que traiga un plano de la ciudad." },
            say: { A: "Un momento. Busco un mapa en mi libro.", B: "Espera, a lo mejor este libro tiene un mapa de la ciudad.", C: "Déjame consultar la bibliografía." },
            reply: { A: "Gustavo mira el libro. «¡Un libro! Mejor busca en mi tarjeta.»", B: "«¡Un libro! Qué culto», dice Gustavo. «Pero mejor mira esto». Saca una tarjeta del bolsillo.", C: "«¡La bibliografía!», aplaude Gustavo. «Yo también tengo un documento.» Y saca una tarjeta de hotel." },
            mood: "smile", next: "tarjeta",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "El hombre se acerca demasiado y sacas el gas pimienta.", C: "Gustavo invade tu espacio personal con entusiasmo y sacas el gas pimienta." },
            say: { A: "¡Para! No te acerques más.", B: "Por favor, no te acerques más. Quédate ahí.", C: "Un poco de distancia, por favor. Hablamos desde ahí." },
            reply: { A: "Gustavo da un salto. «¡Perdón! ¡Solo busco mi hotel!»", B: "Gustavo da un salto atrás y casi se cae. «¡Perdón, perdón! ¡Solo busco mi hotel!»", C: "A Gustavo se le pasa todo de golpe. «Distancia, claro. Toda la del mundo. Yo solo buscaba un hotel.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Muestras la granada.", B: "Sin querer, le muestras la granada.", C: "Le enseñas la granada, que en esta conversación sobra bastante." },
            say: { A: "¿Hotel Imperial? ¿Dónde está?", B: "¿El Imperial? Déjame pensar dónde queda.", C: "El Imperial, el Imperial… Dame un segundo." },
            reply: { A: "Gustavo mira la granada. «¿Es… un regalo para los novios?» Luego tiene miedo.", B: "Gustavo se ríe, la mira mejor y se pone pálido. «¿Es un regalo de boda? No… no lo es, ¿verdad?»", C: "«¿Detalle para los invitados?», bromea Gustavo. Después la mira bien y se le borra la sonrisa." },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al abrir la chaqueta, se ve tu pistola.", C: "Al buscar el teléfono, la pistola queda a la vista." },
            say: { A: "Hola. ¿Te ayudo?", B: "Hola. ¿Necesitas ayuda para llegar?", C: "¿Te ayudo a llegar a algún sitio?" },
            reply: { A: "Gustavo levanta las manos. «¡Toma mi cartera! ¡Y la corbata!»", B: "Gustavo levanta las manos. «¡Toma la cartera! ¡La corbata también, es prestada!»", C: "Gustavo levanta las manos, súbitamente sobrio. «La cartera es tuya. La corbata es de mi cuñado, pero también.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo. La corbata tiene un nudo terrible.", B: "Sacas el cuchillo: el nudo de su corbata es imposible.", C: "Sacas el cuchillo, porque ese nudo de corbata ya no tiene solución diplomática." },
            say: { A: "Tu corbata está muy mal. ¿La corto?", B: "Ese nudo te está ahogando. ¿Quieres que corte la corbata?", C: "Ese nudo es un caso perdido. ¿Te libero de la corbata?" },
            reply: { A: "Gustavo se ríe. «¡No! Es prestada. Mejor mira esta tarjeta.»", B: "Gustavo se tapa la corbata, riéndose. «¡No! Es de mi cuñado. Mejor ayúdame con esto.» Te da una tarjeta.", C: "«¡Ni se te ocurra! Es de mi cuñado y la quiere más que a mí», dice Gustavo, y te da una tarjeta de hotel." },
            mood: "surprised", next: "tarjeta",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Hola. ¿Fue bonita la fiesta?", B: "Parece que fue una gran fiesta. ¿Lo pasaste bien?", C: "Ese traje tiene cara de haber vivido una gran noche. ¿Qué celebrabas?" },
            reply: { A: "Gustavo sonríe. «Sí. Soy el padrino. Pero no encuentro mi discurso.»", B: "A Gustavo se le iluminan los ojos. «Era la boda de mi prima. Yo era el padrino… y se me perdió el discurso. Improvisé.»", C: "Gustavo se lleva una mano al pecho. «La boda de mi prima. Se me perdió el discurso y hablé con el corazón. Lloró todo el mundo.»" },
            mood: "love", next: "tarjeta",
          },
        },
      },
      tarjeta: {
        who: "gustavo", mood: "surprised",
        line: {
          A: "La tarjeta dice: «Hotel Sol, habitación 12». Gustavo no lo cree. «¿Hotel Sol? ¡No! Yo duermo en el Imperial.»",
          B: "La tarjeta dice «Hotel Sol, habitación 12». Gustavo la mira, indignado. «¿Sol? Imposible. Yo duermo en el Imperial, con columnas.»",
          C: "La tarjeta, sin piedad, dice «Hotel Sol, habitación 12». Gustavo la estudia como un documento falsificado. «Esto es un error administrativo. Yo soy hombre de columnas.»",
        },
        options: [
          {
            id: "sol",
            say: { A: "La tarjeta dice Hotel Sol. Está aquí, en la esquina.", B: "Pues la tarjeta dice Hotel Sol, y está justo en esa esquina. Yo creo en la tarjeta.", C: "Con todo respeto por las columnas, la tarjeta es bastante clara. El Sol está en esa esquina." },
            reply: { A: "Gustavo suspira. «Bueno. Vamos al Hotel Sol.»", B: "Gustavo suspira, derrotado. «Bueno, la tarjeta manda. Vamos al Sol.»", C: "Gustavo levanta un dedo, protesta en silencio y se rinde. «La burocracia gana otra vez. Al Sol.»" },
            mood: "sad", end: "sol",
          },
          {
            id: "llamar",
            say: { A: "¿Por qué no llamas a alguien de la boda?", B: "¿Y si llamas a alguien de la boda para preguntar dónde duermes?", C: "Propongo consultar a un testigo: alguien de la boda sabrá dónde te hospedas." },
            reply: { A: "Gustavo llama. «¿Tito? ¡Ah! ¡La tarjeta es tuya!» Se ríe.", B: "Gustavo llama a su primo. «¿Tito? ¿Cómo que es tu tarjeta?» Cuelga, riéndose. «¡Es de mi primo! Yo sí duermo en el Imperial.»", C: "Gustavo llama a su primo Tito. Tras un diálogo confuso, cuelga triunfal. «¡La tarjeta es de Tito! Mi honor y mis columnas están a salvo.»" },
            mood: "smile", next: "camino",
          },
          {
            id: "recepcion",
            say: { A: "Vamos al Imperial. Allí preguntamos.", B: "Vamos al Imperial y preguntamos en recepción. Así salimos de dudas.", C: "Hagamos una cosa: vamos al Imperial y que decida la recepción." },
            reply: { A: "Gustavo aplaude. «¡Sí! Buena idea.»", B: "«¡Me encanta! La recepción es sabia», dice Gustavo, y te toma del brazo.", C: "«La recepción, juez supremo», dice Gustavo con solemnidad, y te ofrece el brazo." },
            mood: "tipsy", next: "camino",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Tranquilo, Gustavo. Vamos a encontrar tu hotel.", B: "No te preocupes, Gustavo. Encontramos tu hotel seguro.", C: "Tranquilo, Gustavo. Esta noche nadie se queda sin cama, te lo prometo." },
            reply: { A: "Gustavo sonríe. «¡Ya sé! Esta tarjeta es de mi primo.»", B: "Gustavo te abraza un segundo y recuerda algo. «¡Claro! Esta tarjeta es de mi primo Tito. Yo estoy en el Imperial.»", C: "Gustavo se emociona y, de repente, recuerda. «¡Tito! Le cambié la chaqueta a mi primo. Esta tarjeta es suya.»" },
            mood: "love", next: "camino",
          },
        },
      },
      camino: {
        who: "gustavo", mood: "tipsy",
        line: {
          A: "Gustavo mira la calle. «El Imperial está lejos. ¿Me acompañas? Solo un poco.»",
          B: "Gustavo mira la calle larga y oscura. «¿Me acompañas hasta la avenida? Solo un poco, de verdad.»",
          C: "Gustavo contempla la calle como quien mira una montaña. «¿Me escoltas hasta la avenida? Te prometo una conversación de altísimo nivel.»",
        },
        options: [
          {
            id: "acompanar",
            say: { A: "Sí, vamos. Te acompaño hasta el hotel.", B: "Venga, te acompaño hasta la puerta del hotel. Así me quedo tranquilo.", C: "Te acompaño hasta la puerta. No me perdonaría que acabaras durmiendo con las columnas." },
            reply: { A: "Gustavo canta un poco. «¡Gracias! ¡Eres un amigo!»", B: "Gustavo te da las gracias y empieza a cantar una canción de la boda.", C: "Gustavo te toma del brazo y canta la canción de los novios. Mal, pero con mucho sentimiento." },
            mood: "smile", end: "imperial",
          },
          {
            id: "taxi",
            say: { A: "Mejor tomas un taxi. Yo lo llamo.", B: "Es mejor que tomes un taxi. Te lo pido yo, ¿de acuerdo?", C: "Sugiero una solución moderna: un taxi. Yo lo pido y tú te ahorras la epopeya." },
            reply: { A: "Gustavo dice que sí. «Bueno. Un taxi. Gracias.»", B: "«Un taxi… Sí, es mejor», dice Gustavo, y busca su teléfono para avisar a su primo.", C: "«Una epopeya con taxímetro», dice Gustavo. «Acepto.» Y llama a su primo para contárselo." },
            mood: "smile", end: "taxi",
          },
          {
            id: "explicar",
            say: { A: "Todo recto. Después, a la derecha. ¡Buenas noches!", B: "Sigue todo recto y gira a la derecha en la plaza. ¡Que descanses!", C: "Todo recto hasta la plaza y luego a la derecha. Confío en ti. Bastante." },
            reply: { A: "Gustavo dice adiós con la mano. «¡Todo recto! ¡Adiós!»", B: "Gustavo repite «todo recto, todo recto» y se aleja en un zigzag optimista.", C: "«Bastante es suficiente», dice Gustavo, y se aleja repitiendo las instrucciones como un poema." },
            mood: "tipsy", end: "solo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Claro, Gustavo. ¿Me cuentas tu discurso por el camino?", B: "Claro que sí. Y por el camino me cuentas cómo fue la boda.", C: "Por supuesto. Y a cambio quiero oír el famoso discurso del padrino." },
            reply: { A: "Gustavo está muy feliz. Te cuenta la boda por el camino.", B: "Gustavo se emociona y te cuenta la boda entera, con todos los detalles, hasta la puerta del hotel.", C: "Gustavo repite su discurso, entero, por toda la avenida. A la tercera frase ya te emociona a ti también." },
            mood: "love", end: "imperial",
          },
        },
      },
      calmar: {
        who: "gustavo", mood: "scared",
        line: {
          A: "Gustavo tiene mucho miedo. No se mueve.",
          B: "Gustavo, de repente muy serio, no se atreve a moverse.",
          C: "Gustavo, que hace un minuto era la alegría de la fiesta, ahora parece una estatua bien vestida.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Quiero ayudarte.", B: "Perdona, lo guardo ya. Solo quería ayudarte a encontrar el hotel.", C: "Perdona, empecé con mal pie. Lo guardo. Lo del hotel iba en serio." },
            reply: { A: "Gustavo respira. «Bueno… Tengo esta tarjeta.»", B: "Gustavo respira hondo. «Bueno… Mira, tengo esta tarjeta de hotel.»", C: "Gustavo recupera el color. «Mal pie, sí. Bueno… tengo una tarjeta de hotel, por si sirve.»" },
            mood: "worried", next: "tarjeta",
          },
          {
            id: "broma",
            say: { A: "Tranquilo, es una broma.", B: "Tranquilo, hombre. Es una broma, ¿no lo ves?", C: "Era una broma. Mala, lo reconozco." },
            reply: { A: "Gustavo no se ríe. Llama a la policía.", B: "Gustavo no se ríe nada. Saca el teléfono. «¿Policía? Hay alguien aquí…»", C: "«Malísima», dice Gustavo, ya con el teléfono en la oreja. «¿Policía? Sí, buenas noches…»" },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdona el susto. Me voy.", C: "Mejor me voy. Perdón por arruinarte la noche." },
            reply: { A: "Gustavo corre hacia la avenida.", B: "Antes de que termines, Gustavo sale corriendo hacia la avenida.", C: "Gustavo no espera el final de la frase: corre hacia la avenida con una agilidad sorprendente." },
            mood: "scared", end: "corre",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón, Gustavo. Tienes miedo por mi culpa. Te ayudo.", B: "Perdóname, Gustavo. Te asusté, pero de verdad quiero ayudarte.", C: "Perdóname. Arruiné un momento perfecto. Déjame arreglarlo y llevarte al hotel." },
            reply: { A: "Gustavo sonríe otra vez. «Bueno. Mira mi tarjeta.»", B: "Gustavo vuelve a sonreír. «Bueno, te perdono. Esta noche perdono a todo el mundo. Mira mi tarjeta.»", C: "Gustavo se ríe, aliviado. «Hoy perdoné a mi cuñado; puedo perdonarte a ti. Toma, mi tarjeta.»" },
            mood: "love", next: "tarjeta",
          },
        },
      },
    },
    ends: {
      imperial: { text: { A: "Llegas con Gustavo al Hotel Imperial. Sus amigos de la boda lo saludan.", B: "Acompañas a Gustavo hasta el Imperial. En la puerta, la familia de la boda lo recibe con aplausos.", C: "Dejas a Gustavo en la puerta del Imperial, donde media boda lo recibe como a un héroe de guerra. Columnas incluidas." }, change: "se-va", flag: "gustavo-hotel", recap: "Acompañaste a Gustavo hasta el Hotel Imperial." },
      sol: { text: { A: "Gustavo va al Hotel Sol. Pero la habitación 12 no es suya.", B: "Gustavo entra en el Hotel Sol. Minutos después sale confundido: en la habitación 12 duerme su primo.", C: "Gustavo entra en el Hotel Sol y sale al rato: en la habitación 12 ronca su primo Tito. El misterio se resuelve tarde." }, change: "triste", recap: "Mandaste a Gustavo al Hotel Sol, que no era el suyo." },
      taxi: { text: { A: "Pides un taxi. Gustavo llama a su primo y se ríe mucho.", B: "Pides un taxi para Gustavo. Mientras espera, llama a su primo y se ríen de la confusión.", C: "Mientras llega el taxi, Gustavo le cuenta a su primo la aventura, ya convertida en anécdota de boda." }, change: "llama", recap: "Pediste un taxi para Gustavo." },
      solo: { text: { A: "Gustavo se va solo. Camina en zigzag, pero contento.", B: "Gustavo se aleja solo, en zigzag y repitiendo tus indicaciones.", C: "Gustavo se aleja, recitando tus instrucciones. Con suerte, llegará antes del amanecer." }, change: "se-va", recap: "Le explicaste el camino a Gustavo." },
      policia: { text: { A: "Llega la policía. Explicas todo. Gustavo se va en el auto de policía a su hotel.", B: "Llega la policía. Tras explicar el malentendido, los agentes llevan a Gustavo a su hotel.", C: "Llega una patrulla. Aclarado el malentendido, los agentes se ofrecen a llevar a Gustavo. Él lo celebra como un taxi gratis." }, change: "policia", recap: "Un malentendido con Gustavo terminó con la policía." },
      corre: { text: { A: "Gustavo corre. Desaparece en la avenida.", B: "Gustavo desaparece corriendo por la avenida, con la corbata al viento.", C: "Gustavo se pierde por la avenida a una velocidad impropia de un padrino." }, change: "corre", recap: "Gustavo salió corriendo por tu culpa." },
    },
    speak: {
      A1: "¿Cómo vas a tu casa por la noche?",
      A2: "¿Cuándo te perdiste en una ciudad?",
      B1: "¿Cómo ayudas a alguien que no encuentra una dirección?",
      B2: "¿Qué prefieres al viajar, un hotel elegante o uno barato y bien ubicado, y por qué?",
      C1: "¿Cómo le dices a alguien que está equivocado sin herir su orgullo?",
      C2: "¿Qué papel juega la confianza en desconocidos cuando estamos perdidos y vulnerables?",
    },
  },
  {
    id: "viejo-lavanderia",
    kind: "escena",
    district: "viejo",
    title: "La ropa equivocada",
    verb: "ENTRAR",
    goal: "Defenderse de una acusación con calma, describir ropa, negociar una solución y consolar con humor.",
    cast: [
      {
        id: "carmen", name: "Carmen", role: "Clienta de la lavandería",
        age: "old", body: "f", build: "heavy", height: 1.55,
        hair: "bob", hairColor: "#9a9a9a", skin: "#f0d0b4",
        top: "sweater", topColor: "#3f7fa6", bottom: "pants", bottomColor: "#5b4a3c",
        extras: ["glasses", "bag"], pose: "carry", props: ["laundry-basket", "dryer"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "carmen", mood: "angry",
        line: {
          A: "Entras en la lavandería 24 horas. Una señora abre una secadora vacía. «¡Oiga! ¿Usted sacó mi ropa?»",
          B: "En la lavandería 24 horas, una señora con una cesta vacía te señala. «¡Usted! Mi ropa estaba en la secadora 3. ¿Dónde está?»",
          C: "Bajo los tubos fluorescentes de la lavandería, una señora te mira por encima de las gafas. «Joven, la secadora 3 estaba llena hace diez minutos. Y usted es el único aquí.»",
        },
        options: [
          {
            id: "negar",
            say: { A: "No, señora. Acabo de llegar. No toqué nada.", B: "Perdone, señora, pero acabo de entrar. No toqué ninguna secadora.", C: "Entiendo que soy el sospechoso ideal, pero acabo de llegar. Ni siquiera traje ropa." },
            reply: { A: "La señora duda. «Hmm… Soy Carmen. ¿Seguro?»", B: "La señora te mira de arriba abajo. «Hmm. Soy Carmen. Bueno, puede ser. Pero mi ropa no se fue sola.»", C: "La señora entrecierra los ojos. «Carmen, para servirle. Sin ropa en una lavandería… Eso es todavía más sospechoso.»" },
            mood: "worried", next: "describir",
          },
          {
            id: "describir",
            say: { A: "¿Cómo es su ropa? La buscamos juntos.", B: "Tranquila, la buscamos. ¿Cómo es su ropa exactamente?", C: "Busquémosla juntos. Descríbame el botín, por favor." },
            reply: { A: "La señora se calma un poco. «Soy Carmen. Es ropa blanca.»", B: "La señora se calma un poco. «Me llamo Carmen. Es todo blanco, ropa de cama.»", C: "La señora casi sonríe. «Carmen. El botín, como usted dice, es ropa de cama blanca. Impecable.»" },
            mood: "worried", next: "describir",
          },
          {
            id: "otra",
            say: { A: "¿Miró en la otra secadora? La 4 está llena.", B: "Mire, la secadora 4 está llena. ¿No será esa la suya?", C: "Una pregunta delicada: ¿no será la 4? Está llena y nadie la reclama." },
            reply: { A: "La señora abre la secadora 4. «¡Ay, no! ¡Está todo rosa!»", B: "La señora abre la secadora 4 y grita. «¡Mi ropa! ¡Pero está toda rosa!»", C: "La señora abre la 4 y se queda muda. Luego, un grito: «¡Mis sábanas! ¿Quién las pintó de rosa?»" },
            mood: "surprised", next: "rosa",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y un papel.", B: "Sacas el lápiz para escribir un cartel.", C: "Con el lápiz, preparas un cartel para el tablón de anuncios." },
            say: { A: "Escribo un cartel: «¿Vio usted ropa blanca?»", B: "Hago un cartel: «Se busca ropa blanca». Así alguien nos avisa.", C: "Propongo un cartel: «Se busca ropa blanca, responde al nombre de Carmen»." },
            reply: { A: "La señora se ríe un poco. «Bueno. Soy Carmen. Escriba: sábanas blancas.»", B: "La señora se acerca a mirar. «Bueno, buena idea. Soy Carmen. Ponga: sábanas blancas y un camisón.»", C: "La señora reprime una sonrisa. «Ingenioso. Carmen, encantada. Ponga también que hay recompensa: un café.»" },
            mood: "smile", next: "describir",
          },
          libro: {
            act: { A: "Le muestras tu libro.", B: "Le muestras lo único que traes: tu libro.", C: "Como prueba de inocencia, le enseñas tu libro." },
            say: { A: "Mire. No tengo ropa. Solo tengo un libro.", B: "Mire, no traje ropa. Solo vengo a leer porque aquí hace calor.", C: "Mi único equipaje es este libro. Vengo por la calefacción, no por las sábanas ajenas." },
            reply: { A: "La señora sonríe. «Ah. Perdón. Soy Carmen.»", B: "La señora se ablanda. «Ah, perdone. Soy Carmen. Yo también vengo a veces solo por el calor.»", C: "La señora se quita las gafas. «La calefacción, claro. Carmen. Somos más de los que cree.»" },
            mood: "smile", next: "describir",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "La señora se acerca muy enojada y sacas el gas pimienta.", C: "La señora avanza con la cesta en alto y, por instinto, sacas el gas pimienta." },
            say: { A: "¡Señora, no se acerque!", B: "Señora, por favor, no se acerque más.", C: "Señora, mantengamos una distancia prudente, por favor." },
            reply: { A: "La señora grita y se esconde. «¡Ladrón! ¡Socorro!»", B: "La señora suelta la cesta y se esconde detrás de una lavadora. «¡Socorro! ¡Un ladrón armado!»", C: "La señora se refugia detrás de una lavadora. «¡Primero mis sábanas y ahora esto! ¡Socorro!»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Muestras la granada.", B: "Sin pensar, le muestras la granada.", C: "Le enseñas la granada, que no ayuda nada a tu defensa." },
            say: { A: "Señora, yo no tengo su ropa.", B: "Señora, le aseguro que yo no tengo su ropa.", C: "Le aseguro que no tengo su ropa. Solo tengo… esto." },
            reply: { A: "La señora se asusta. «¡Ay! ¡Quédese con la ropa!»", B: "La señora retrocede hasta la pared. «¡Ay, Dios! ¡Quédese con las sábanas, con todo!»", C: "La señora palidece. «Quédese con las sábanas. Y con el suavizante. Pero eso, guárdelo.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al quitarte la chaqueta por el calor, se ve tu pistola.", C: "Con el calor de las secadoras, te quitas la chaqueta y la pistola queda a la vista." },
            say: { A: "Señora, yo no tengo su ropa.", B: "Señora, se equivoca. Yo no tengo su ropa.", C: "Señora, le juro que yo no tengo nada que ver con sus sábanas." },
            reply: { A: "La señora levanta las manos. «¡Perdón, perdón!»", B: "La señora levanta las manos. «¡Perdón, me equivoqué! ¡Seguro que fue otro!»", C: "La señora levanta las manos. «Por supuesto que no. Usted es inocente. Inocentísimo.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo para abrir la secadora 4.", B: "Sacas el cuchillo: la puerta de la secadora 4 está atascada.", C: "Sacas el cuchillo para hacer palanca en la puerta atascada de la secadora 4." },
            say: { A: "Esta puerta no abre. ¿La abro con esto?", B: "La secadora 4 está atascada. ¿Pruebo a abrirla con esto?", C: "Esta puerta está atascada. ¿Me permite un poco de cerrajería creativa?" },
            reply: { A: "La señora grita: «¡Un cuchillo!» Luego ve la secadora.", B: "La señora da un grito, pero luego entiende. «¡Ay, qué susto! Bueno… ábrala, a ver.»", C: "La señora da un respingo. «¡Avise antes de sacar eso!» Luego se asoma, curiosa. «Bueno. Abra.»" },
            mood: "scared", next: "calmar",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Señora, está muy preocupada. ¿Es ropa importante?", B: "La veo muy preocupada. ¿Esa ropa es especial para usted?", C: "Se nota que no hablamos de ropa cualquiera. ¿Qué tiene de especial?" },
            reply: { A: "La señora sonríe triste. «Soy Carmen. Son las sábanas de mi boda.»", B: "La señora se emociona. «Me llamo Carmen. Son las sábanas que me regalaron en mi boda, hace cuarenta años.»", C: "La señora suspira. «Carmen. Son las sábanas de mi boda. Cuarenta años. Mi marido ya no está, pero ellas sí.»" },
            mood: "love", next: "describir",
          },
        },
      },
      describir: {
        who: "carmen", mood: "worried",
        line: {
          A: "Carmen explica: «Dos sábanas blancas, dos toallas y un camisón azul. Puse todo en la 3.»",
          B: "Carmen cuenta con los dedos. «Dos sábanas blancas, dos toallas y un camisón azul clarito. Lo puse en la 3, estoy segura.»",
          C: "Carmen recita el inventario como en un juicio. «Dos sábanas blancas, dos toallas y un camisón azul cielo. Secadora 3. Lo juraría ante notario.»",
        },
        options: [
          {
            id: "buscar",
            say: { A: "Vamos a mirar en todas las secadoras.", B: "¿Y si miramos en todas las secadoras, una por una?", C: "Propongo una búsqueda sistemática: secadora por secadora." },
            reply: { A: "Abren la 4. Carmen grita. «¡Es mi ropa! ¡Pero está rosa!»", B: "Al abrir la 4, Carmen grita. «¡Ahí está! Pero… ¡está toda rosa!»", C: "En la cuarta secadora aparece el botín. Carmen se tapa la boca: «¡Mis sábanas! ¡Rosas!»" },
            mood: "surprised", next: "rosa",
          },
          {
            id: "ticket",
            say: { A: "¿Tiene el ticket? Allí dice el número.", B: "¿Tiene el ticket? Quizá dice qué secadora pagó.", C: "Antes de acusar a nadie más, ¿miramos qué dice el ticket?" },
            reply: { A: "Carmen mira el ticket. «Ay… Dice 4. Perdón.» Abre la 4. «¡Está rosa!»", B: "Carmen lee el ticket y se pone roja. «Dice… 4. Perdón.» Abre la 4 y grita: «¡Pero está rosa!»", C: "Carmen lee el ticket y carraspea. «Secadora 4. Retiro la acusación.» Abre la 4. «¡Y retiro también el blanco!»" },
            mood: "surprised", next: "rosa",
          },
          {
            id: "prisa",
            say: { A: "Lo siento, señora. Tengo prisa.", B: "Lo siento mucho, pero tengo que irme. Seguro que aparece.", C: "Me encantaría ayudar, pero tengo que irme. Le deseo suerte en la investigación." },
            reply: { A: "Carmen se enoja. «¡Claro! ¡Nadie ayuda!»", B: "Carmen frunce el ceño. «Muy bonito. Primero me roban y luego nadie ayuda.»", C: "«Suerte», repite Carmen, con todo el sarcasmo de sus sesenta y tantos años. «Muy amable.»" },
            mood: "angry", end: "enojada",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "No se preocupe, Carmen. Vamos a encontrar su ropa.", B: "No se preocupe, Carmen. No me voy hasta que aparezca su ropa.", C: "Carmen, de aquí no me muevo hasta que aparezcan esas sábanas." },
            reply: { A: "Carmen sonríe. «Gracias. Mire, ¡la 4! Pero… ¡está rosa!»", B: "Carmen te aprieta la mano. «Gracias, hijo.» Mira la secadora 4. «¡Ahí están! Pero… ¿rosas?»", C: "Carmen sonríe, conmovida. «Así da gusto.» Abre la secadora 4 y se queda helada. «¿Rosas?»" },
            mood: "love", next: "rosa",
          },
        },
      },
      rosa: {
        who: "carmen", mood: "sad",
        line: {
          A: "Las sábanas de Carmen están rosas. Hay un calcetín rojo. «¿De quién es este calcetín?»",
          B: "Entre las sábanas, ahora rosas, aparece un calcetín rojo. Carmen lo levanta. «¡Este calcetín no es mío! ¡Arruinó todo!»",
          C: "Carmen sostiene el culpable con dos dedos: un calcetín rojo, solitario, sin dueño. «Cuarenta años blancas. Y un calcetín anónimo acaba con todo.»",
        },
        options: [
          {
            id: "moda",
            say: { A: "Señora, el rosa es muy bonito. ¡Está de moda!", B: "Mírelo así: el rosa está muy de moda este año.", C: "Siempre puede decir que fue una decisión estética. El rosa está muy de moda." },
            reply: { A: "Carmen se ríe. «¡Rosa! Bueno, es alegre.»", B: "Carmen intenta no reírse, pero no puede. «¡De moda! Bueno… es más alegre, la verdad.»", C: "Carmen suelta una carcajada. «Una decisión estética. A mis años. ¿Sabe que me gusta?»" },
            mood: "smile", end: "risa",
          },
          {
            id: "lavar",
            say: { A: "Podemos lavar otra vez con quitamanchas.", B: "Si las lavamos otra vez con quitamanchas, a lo mejor vuelven a ser blancas.", C: "No está todo perdido: un lavado con quitamanchas y agua fría suele hacer milagros." },
            reply: { A: "Carmen sonríe. «Sí. Tengo quitamanchas en la bolsa.»", B: "«¿Usted cree?», dice Carmen, y saca un frasco de la bolsa. «Siempre llevo uno. Vamos a intentarlo.»", C: "Carmen saca un quitamanchas de la bolsa como una espada. «Milagros, dice. Probemos.»" },
            mood: "smile", end: "lavar",
          },
          {
            id: "culpa",
            say: { A: "No es mi culpa. Buenas noches.", B: "Lo siento, pero yo no tengo nada que ver con ese calcetín. Buenas noches.", C: "El calcetín no es mío y ya demostré mi inocencia. Le deseo buenas noches." },
            reply: { A: "Carmen se enoja. «¡Qué antipático!»", B: "Carmen te mira, muy ofendida. «Nadie dijo que fuera suyo. Qué poca empatía.»", C: "«Inocente, pero sin corazón», sentencia Carmen, y te da la espalda." },
            mood: "angry", end: "enojada",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Carmen, sus sábanas tienen una nueva historia.", B: "Carmen, después de cuarenta años, sus sábanas también merecen un cambio.", C: "Cuarenta años blancas. Quizá ya les tocaba enamorarse." },
            reply: { A: "Carmen se ríe mucho. «¡Ay, qué bonito! Rosa, como mi boda.»", B: "Carmen se ríe y se le humedecen los ojos. «Mi marido decía que el blanco era aburrido. Le habría encantado.»", C: "Carmen se ríe a carcajadas. «Enamoradas. Mi marido habría dicho exactamente eso.» Y baila con la sábana rosa." },
            mood: "love", end: "risa",
          },
        },
      },
      calmar: {
        who: "carmen", mood: "scared",
        line: {
          A: "Carmen está detrás de una lavadora. Tiene mucho miedo.",
          B: "Carmen se esconde detrás de una lavadora y abraza su bolso.",
          C: "Carmen se atrinchera detrás de una lavadora, con el bolso como escudo y el teléfono en la mano.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón, señora. Lo guardo. Solo quiero ayudar.", B: "Perdone, señora, lo guardo ya. Solo quería buscar su ropa.", C: "Perdóneme, fue una reacción absurda. Lo guardo y buscamos su ropa." },
            reply: { A: "Carmen sale despacio. «Bueno. Soy Carmen. Busco ropa blanca.»", B: "Carmen sale despacio. «Bueno… Soy Carmen. Busco mi ropa blanca.»", C: "Carmen se asoma. «Absurda, sí. Bueno. Carmen. Mi ropa, decía usted.»" },
            mood: "worried", next: "describir",
          },
          {
            id: "explicar",
            say: { A: "Tranquila. Es para mi seguridad.", B: "No se asuste, es para mi seguridad. La ciudad es peligrosa.", C: "No se preocupe, es solo por precaución. El barrio es complicado." },
            reply: { A: "Carmen llama a la policía.", B: "Carmen marca un número. «¿Policía? Sí, en la lavandería de la calle Luna…»", C: "«El barrio es complicado desde que llegó usted», dice Carmen, y llama a la policía." },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdone el susto. Ya me voy.", C: "Creo que sobro. Le pido disculpas y me voy." },
            reply: { A: "Carmen no dice nada. Está enojada.", B: "Carmen sale de su escondite, muy enojada. «¡Y no vuelva!»", C: "«Sobra, sí», dice Carmen. «Y sin ayudarme con la ropa.»" },
            mood: "angry", end: "enojada",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón, señora. Usted tiene miedo por mi culpa. Lo siento mucho.", B: "Perdóneme, señora. La asusté sin motivo. Déjeme ayudarla.", C: "Perdóneme. Le di un susto innecesario. Déjeme compensarlo buscando su ropa." },
            reply: { A: "Carmen sale. «Bueno… Soy Carmen. Ayúdeme con mi ropa.»", B: "Carmen sale de detrás de la lavadora. «Bueno. Tiene cara de buena persona. Soy Carmen.»", C: "Carmen sale, todavía con el bolso en alto. «Compénselo, sí. Carmen. Y a ver si aparece mi ropa.»" },
            mood: "love", next: "describir",
          },
        },
      },
    },
    ends: {
      risa: { text: { A: "Carmen ríe. Dobla sus sábanas rosas y te da un caramelo.", B: "Carmen dobla sus sábanas rosas tarareando. Antes de irse, te regala un caramelo de menta.", C: "Carmen dobla sus nuevas sábanas rosas con dignidad renovada y te regala un caramelo de menta, a modo de indemnización." }, change: "baila", recap: "Hiciste reír a Carmen con sus sábanas rosas." },
      lavar: { text: { A: "Lavan las sábanas otra vez. La lavadora se enciende. Carmen está contenta.", B: "Ponen las sábanas a lavar otra vez. La lavadora se enciende y Carmen te cuenta su vida mientras esperan.", C: "La lavadora se enciende con un zumbido esperanzador. Mientras esperan, Carmen te cuenta cuarenta años de matrimonio." }, change: "luz", recap: "Ayudaste a Carmen a lavar otra vez sus sábanas." },
      enojada: { text: { A: "Carmen está enojada. No te habla más.", B: "Carmen recoge sus cosas, enojada, y no vuelve a mirarte.", C: "Carmen recoge sus cosas con un silencio muy elocuente." }, change: "enojado", recap: "Dejaste a Carmen enojada en la lavandería." },
      policia: { text: { A: "Llega la policía. Explicas todo. Encuentran la ropa en la secadora 4.", B: "Llega la policía. Mientras explicas el malentendido, un agente encuentra la ropa en la secadora 4.", C: "Llega una patrulla. El malentendido se aclara y un agente resuelve, además, el misterio de la secadora 4." }, change: "policia", recap: "Un malentendido con Carmen terminó con la policía." },
    },
    speak: {
      A1: "¿Qué ropa llevas hoy?",
      A2: "¿Cuándo lavaste tu ropa por última vez?",
      B1: "¿Qué haces cuando alguien te acusa de algo injustamente?",
      B2: "¿Qué objeto viejo conservarías aunque estuviera estropeado, y por qué?",
      C1: "¿Cómo se defiende uno de una acusación sin parecer culpable?",
      C2: "¿Qué valor sentimental atribuyes a los objetos cotidianos y por qué crees que los conservamos?",
    },
  },
  {
    id: "viejo-gato",
    kind: "rincon",
    district: "viejo",
    title: "El gato del muro",
    verb: "ACERCARME",
    goal: "Preguntar por un animal, describir su aspecto y reaccionar con simpatía.",
    cast: [
      {
        id: "gato", name: "Lentejas", role: "Gato del barrio", kind: "animal", species: "cat", color: "#c8833a", size: "small",
        age: "adult", body: "m", build: "slim", height: 0.3, hair: "short", hairColor: "#c8833a", skin: "#c8833a",
        top: "tshirt", topColor: "#c8833a", bottom: "pants", bottomColor: "#c8833a", pose: "lie",
      },
      {
        id: "vecina", name: "Doña Pura", role: "Vecina en la ventana", age: "old", body: "f", build: "average", height: 1.58,
        hair: "bun", hairColor: "#d8d4cc", skin: "#e2b893", top: "sweater", topColor: "#6a4c7a", bottom: "skirt",
        bottomColor: "#2d2a33", extras: ["glasses"], pose: "window",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "vecina", mood: "smile",
        line: {
          A: "Un gato naranja duerme en un muro. Una señora mira desde la ventana. «Se llama Lentejas. Es de todos.»",
          B: "Sobre un muro descascarado duerme un gato naranja. Desde una ventana, una señora te habla. «Ese es Lentejas. No es de nadie y es de todos.»",
          C: "Un gato naranja reina sobre un muro lleno de grietas. Desde la ventana de arriba, una señora en bata te observa. «Le presento a Lentejas. El verdadero dueño del barrio.»",
        },
        options: [
          {
            id: "nombre",
            say: { A: "¿Lentejas? ¿Por qué se llama así?", B: "¿Lentejas? Qué nombre tan curioso. ¿Por qué se llama así?", C: "¿Lentejas? Ese nombre tiene una historia detrás, seguro." },
            reply: { A: "Doña Pura se ríe. «Porque come lentejas. ¡Le encantan!»", B: "Doña Pura se ríe. «Porque un día se comió un plato entero de lentejas de mi cocina. Desde entonces, es Lentejas.»", C: "«Llegó un invierno, se subió a mi mesa y se comió mis lentejas», dice Doña Pura. «Se quedó con el plato y con el nombre.»" },
            mood: "smile", end: "amigos",
          },
          {
            id: "acariciar",
            say: { A: "¿Puedo tocarlo? ¿Es bueno?", B: "¿Se deja acariciar o es de los que arañan?", C: "¿Lentejas acepta caricias o hay que pedir audiencia?" },
            reply: { A: "Doña Pura dice que sí. Lentejas ronronea.", B: "«Si le hablas bonito, sí», dice Doña Pura. Lentejas se estira y ronronea.", C: "«Audiencia, siempre», dice Doña Pura. Lentejas abre un ojo, lo piensa y te concede el lomo." },
            mood: "smile", end: "amigos",
          },
          {
            id: "comida",
            say: { A: "Está muy flaco. ¿Tiene hambre?", B: "Parece un poco flaco. ¿Alguien le da de comer?", C: "Para ser el dueño del barrio, lo veo algo delgado. ¿Quién le paga el sueldo?" },
            reply: { A: "Doña Pura sonríe. «Yo le doy comida. Espera, ahora bajo.»", B: "«Yo le doy de comer, pero hoy se me olvidó», dice Doña Pura. «Espera, ahora le bajo algo.»", C: "«El sueldo se lo pago yo, en especie», dice Doña Pura. «Y hoy me retrasé. Ya bajo con la cena.»" },
            mood: "smile", end: "cena",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted quiere mucho a Lentejas, ¿no?", B: "Se nota que usted quiere mucho a este gato.", C: "Me da la impresión de que Lentejas la cuida a usted tanto como usted a él." },
            reply: { A: "Doña Pura sonríe. «Sí. Vivo sola. Él viene a visitarme cada noche.»", B: "A Doña Pura se le llenan los ojos de ternura. «Vivo sola, ¿sabes? Él viene cada noche a mi ventana. Es mi compañía.»", C: "Doña Pura sonríe despacio. «Tiene razón. Desde que murió mi marido, Lentejas sube cada noche. Puntual como un caballero.»" },
            mood: "love", end: "amigos",
          },
          libro: {
            act: { A: "Sacas tu libro.", B: "Sacas tu libro y lees en voz alta.", C: "Abres tu libro y le lees un párrafo al gato, con entonación dramática." },
            say: { A: "Voy a leer un poco para Lentejas.", B: "A lo mejor a Lentejas le gusta que le lean.", C: "Los gatos aprecian la literatura. Tienen tiempo y mucha crítica." },
            reply: { A: "Lentejas se duerme. Doña Pura se ríe.", B: "Lentejas cierra los ojos y se duerme. Doña Pura se ríe. «¡Le gusta! O lo aburriste.»", C: "Lentejas se duerme en la segunda línea. «Crítica implacable», dice Doña Pura, muerta de risa." },
            mood: "smile", end: "amigos",
          },
          lapiz: {
            act: { A: "Sacas el lápiz y dibujas a Lentejas.", B: "Con el lápiz, haces un retrato rápido de Lentejas.", C: "Con el lápiz, improvisas un retrato de Lentejas en su pose más majestuosa." },
            say: { A: "Mire, señora. Es Lentejas.", B: "Mire, le hice un retrato. ¿Se parece?", C: "Retrato oficial de Su Majestad Lentejas. ¿Lo aprueba?" },
            reply: { A: "Doña Pura aplaude. «¡Qué bonito! Ahora bajo y lo pongo en mi pared.»", B: "«¡Es idéntico!», dice Doña Pura. «Espera, que bajo a buscarlo y le doy algo de cenar.»", C: "«Aprobado por el Palacio», dice Doña Pura, encantada. «Bajo a recogerlo. Y de paso, la cena real.»" },
            mood: "smile", end: "cena",
          },
        },
      },
    },
    ends: {
      amigos: { text: { A: "Lentejas ronronea. Doña Pura te saluda desde la ventana.", B: "Lentejas te acompaña unos pasos por el muro. Doña Pura te dice adiós con la mano.", C: "Lentejas te escolta unos metros por el muro. Desde la ventana, Doña Pura te despide como a un vecino más." }, change: "sonrie", recap: "Conociste a Lentejas, el gato del barrio." },
      cena: { text: { A: "Se enciende la luz del portal. Doña Pura baja con comida para Lentejas.", B: "Se enciende la luz del portal y Doña Pura baja con un plato para Lentejas.", C: "La luz del portal se enciende y Doña Pura aparece con un plato humeante. Lentejas despierta al instante." }, change: "luz", recap: "Doña Pura bajó a darle de cenar a Lentejas." },
    },
    speak: {
      A1: "¿Qué animales te gustan?",
      A2: "¿Qué animal tuviste o quisiste tener de pequeño?",
      B1: "¿Por qué crees que hay personas que cuidan animales de la calle?",
      B2: "¿Qué cambiaría en tu barrio si hubiera más animales libres?",
      C1: "¿En qué se diferencia la compañía de un animal de la de una persona?",
      C2: "¿Qué nos enseña la forma en que tratamos a los animales sin dueño sobre nuestra idea de comunidad?",
    },
  },
  {
    id: "viejo-grafiti",
    kind: "rincon",
    district: "viejo",
    title: "Un poema en la pared",
    verb: "LEER",
    goal: "Reaccionar ante una obra, interpretar un texto y proponer ideas creativas.",
    cast: [
      {
        id: "iara", name: "Iara", role: "Pintora de muros",
        age: "young", body: "f", build: "slim", height: 1.62,
        hair: "braids", hairColor: "#2a1b14", skin: "#5e3a26",
        top: "hoodie", topColor: "#e0b23a", bottom: "jeans", bottomColor: "#4a4a55",
        extras: ["headphones", "backpack"], pose: "stand", props: ["ladder", "paint-cans"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "iara", mood: "neutral",
        line: {
          A: "En una pared hay un poema: «Esta ciudad no duerme: sueña con los ojos abiertos». Una chica pinta la última letra.",
          B: "En un callejón, letras enormes dicen: «Esta ciudad no duerme: sueña con los ojos abiertos». Una chica con trenzas termina la última palabra.",
          C: "Sobre una pared desconchada, en letras azules: «Esta ciudad no duerme: sueña con los ojos abiertos». Una chica subida a una escalera da los últimos retoques.",
        },
        options: [
          {
            id: "gusta",
            say: { A: "¡Qué bonito! ¿Lo escribiste tú?", B: "¡Me encanta! ¿El poema es tuyo o de algún escritor?", C: "Precioso. ¿Es tuyo o es una cita robada con buen gusto?" },
            reply: { A: "La chica sonríe. «Sí. Me llamo Iara. Es de anoche.»", B: "«Es mío», dice ella, bajando de la escalera. «Soy Iara. Se me ocurrió una noche que no podía dormir.»", C: "«Robado a mí misma», dice ella, bajando de la escalera. «Iara. Nació en un insomnio muy productivo.»" },
            mood: "smile", next: "palabra",
          },
          {
            id: "significa",
            say: { A: "¿Qué quiere decir «sueña con los ojos abiertos»?", B: "¿Qué significa para ti «soñar con los ojos abiertos»?", C: "Me intriga eso de soñar con los ojos abiertos. ¿Es esperanza o cansancio?" },
            reply: { A: "La chica piensa. «Soy Iara. Aquí la gente trabaja de noche, pero tiene sueños.»", B: "«Soy Iara. Aquí mucha gente trabaja de noche», dice. «Están cansados, pero siguen soñando.»", C: "«Las dos cosas», dice ella. «Soy Iara. Aquí nadie duerme porque trabaja… o porque todavía espera algo.»" },
            mood: "neutral", next: "palabra",
          },
          {
            id: "permiso",
            say: { A: "¿Puedes pintar aquí? ¿Tienes permiso?", B: "Oye, ¿tienes permiso para pintar aquí? No quiero que tengas problemas.", C: "Pregunta aburrida, pero necesaria: ¿esto es legal o es arte clandestino?" },
            reply: { A: "La chica se ríe. «Sí. La dueña es mi abuela.»", B: "La chica se ríe y señala una ventana. «Tranquilo. El muro es de mi abuela. Ella eligió el color.»", C: "«Arte con permiso de la abuela», dice ella, señalando una ventana. «Lo más clandestino aquí es la hora.»" },
            mood: "smile", end: "foto",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Tu poema me hace sentir bien.", B: "No sé por qué, pero tu poema me emocionó.", C: "Llevo toda la noche caminando y tu frase es lo primero que me dice algo." },
            reply: { A: "La chica se emociona. «Gracias. Soy Iara. Es para mi madre. Trabaja de noche.»", B: "La chica baja de la escalera, emocionada. «Soy Iara. Es para mi madre: limpia oficinas de noche desde hace veinte años.»", C: "Ella se queda quieta. «Soy Iara. Mi madre trabaja de noche desde que nací. Esto es para ella, aunque nunca se lo dije.»" },
            mood: "love", next: "palabra",
          },
          lapiz: {
            act: { A: "Sacas el lápiz y copias el poema.", B: "Con el lápiz, copias el poema en tu mano.", C: "Copias el poema con el lápiz, para llevártelo." },
            say: { A: "Voy a escribir tu poema. Es muy bonito.", B: "Me lo apunto. Quiero acordarme de esta frase.", C: "Me lo apunto, con tu permiso. Este se queda conmigo." },
            reply: { A: "La chica sonríe. «Gracias. Soy Iara. ¿Quieres poner una palabra?»", B: "«Qué bien que te guste», dice ella. «Soy Iara. Oye, ¿me ayudas? Me falta una palabra.»", C: "«Ese es el mejor premio», dice ella. «Iara. ¿Me prestas tu lápiz un momento? Me falta una palabra.»" },
            mood: "smile", next: "palabra",
          },
        },
      },
      palabra: {
        who: "iara", mood: "smile",
        line: {
          A: "Iara señala un espacio vacío. «Me falta una palabra al final. ¿Qué pongo?»",
          B: "Iara señala un hueco al final del muro. «Quiero añadir una última palabra, pero no sé cuál. ¿Tú qué pondrías?»",
          C: "Iara se cruza de brazos frente al hueco que queda en el muro. «Le falta un final. Una palabra. ¿Me haces el honor?»",
        },
        options: [
          {
            id: "juntos",
            say: { A: "Pon «juntos». Soñamos juntos.", B: "Yo pondría «juntos». Porque nadie sueña solo en una ciudad.", C: "«Juntos». Porque en una ciudad así, hasta los insomnios son colectivos." },
            reply: { A: "Iara sonríe. «¡Juntos! Me gusta.» Pinta la palabra.", B: "«Juntos», repite Iara, y sube a la escalera. «Es perfecta.»", C: "Iara se ríe. «Insomnios colectivos. Lo pongo, pero tú me firmas al lado.»" },
            mood: "smile", end: "firma",
          },
          {
            id: "nada",
            say: { A: "No pongas nada. Así está bien.", B: "Creo que no necesita nada más. Está perfecto así.", C: "Yo lo dejaría así. Ese hueco también dice algo." },
            reply: { A: "Iara piensa. «Tienes razón. Así está bien.»", B: "Iara lo mira de lejos. «Tienes razón. El silencio también cuenta.»", C: "Iara mira el hueco largo rato. «Un final abierto. Como los ojos. Me convenciste.»" },
            mood: "neutral", end: "foto",
          },
          {
            id: "manana",
            say: { A: "¿Mañana? Pon «mañana».", B: "¿Qué tal «mañana»? Suena a esperanza.", C: "«Mañana». Una promesa y una amenaza a la vez." },
            reply: { A: "Iara sonríe. «¡Mañana! Sí. Lo pinto.»", B: "«Mañana… sí, suena a esperanza», dice Iara, y empieza a pintar.", C: "«Promesa y amenaza. Como mi abuela», dice Iara, riendo, y moja el pincel." },
            mood: "smile", end: "firma",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Pon el nombre de tu madre.", B: "¿Y si pones el nombre de tu madre? Es su poema.", C: "Yo pondría el nombre de alguien que sueña con los ojos abiertos." },
            reply: { A: "Iara se emociona. «¡Sí! Se llama Rosa.» Y pinta el nombre.", B: "Iara se queda sin palabras. «Rosa. Se llama Rosa.» Sube a la escalera y lo pinta en grande.", C: "Iara entiende. «Rosa», dice bajito, y pinta el nombre de su madre con letras doradas." },
            mood: "love", end: "firma",
          },
        },
      },
    },
    ends: {
      firma: { text: { A: "Iara pinta la palabra. Te deja firmar en una esquina del muro.", B: "Iara termina el poema y te deja firmar con pintura en una esquina del muro.", C: "Iara termina el poema y te ofrece el pincel: tu firma queda, diminuta, en una esquina del muro." }, change: "sonrie", recap: "Ayudaste a Iara a terminar su poema en la pared." },
      foto: { text: { A: "Iara guarda sus pinturas. Tú miras el poema un rato más.", B: "Iara recoge sus pinturas. Te quedas un rato mirando el poema bajo la farola.", C: "Iara recoge sus botes. Tú te quedas un rato más, leyendo la frase como si fuera para ti." }, change: "sigue", recap: "Leíste el poema de Iara en un callejón." },
    },
    speak: {
      A1: "¿Qué palabra en español te gusta mucho?",
      A2: "¿Qué arte viste en la calle recientemente?",
      B1: "¿Por qué crees que algunas personas pintan en las paredes de la ciudad?",
      B2: "¿Qué frase pintarías en un muro de tu ciudad si pudieras?",
      C1: "¿Dónde está, para ti, la frontera entre el arte urbano y el vandalismo?",
      C2: "¿Qué sueños de tu vida sigues persiguiendo con los ojos abiertos?",
    },
  },
  {
    id: "viejo-kiosco",
    kind: "rincon",
    district: "viejo",
    title: "El kiosco de Doña Elsa",
    verb: "COMPRAR",
    goal: "Comprar algo, preguntar precios y conversar sobre el barrio.",
    cast: [
      {
        id: "elsa", name: "Doña Elsa", role: "Dueña del kiosco 24 horas",
        age: "old", body: "f", build: "average", height: 1.52,
        hair: "curly", hairColor: "#cfc6b8", skin: "#c7a07a",
        top: "apron", topColor: "#4a6a3a", bottom: "pants", bottomColor: "#333333",
        extras: ["glasses", "scarf"], pose: "lean", props: ["kiosk", "radio"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "elsa", mood: "smile",
        line: {
          A: "Un kiosco pequeño tiene la luz encendida. Una señora escucha la radio. «Hola, cariño. ¿Qué te doy?»",
          B: "El único kiosco abierto del barrio brilla entre las persianas cerradas. La dueña baja la radio. «Buenas noches, cariño. ¿Qué te pongo?»",
          C: "Entre persianas cerradas, un kiosco iluminado resiste como un faro. La dueña, con un tango de fondo, te mira por encima de las gafas. «¿Insomnio o antojo, cariño?»",
        },
        options: [
          {
            id: "chocolate",
            say: { A: "Un chocolate, por favor. ¿Cuánto es?", B: "Quería un chocolate. ¿Cuál me recomienda?", C: "Antojo, sin duda. ¿Qué chocolate merece la pena a estas horas?" },
            reply: { A: "La señora te da un chocolate. «Es un euro. Me llamo Elsa.»", B: "«El de almendras, sin duda», dice la señora. «Soy Doña Elsa. Llevo treinta años vendiéndolo.»", C: "«El de almendras, que consuela más», dice ella. «Doña Elsa, treinta años curando antojos en este barrio.»" },
            mood: "smile", end: "compra",
          },
          {
            id: "barrio",
            say: { A: "¿Siempre abre por la noche?", B: "¿Siempre está abierto toda la noche? ¿No le da miedo?", C: "¿Cómo es este barrio visto desde aquí, a las tres de la mañana?" },
            reply: { A: "La señora se ríe. «Sí. El barrio de noche es mi familia.»", B: "«¿Miedo? Aquí todos me conocen», dice la señora. «Soy Doña Elsa. De noche vienen los enfermeros, los panaderos, los poetas…»", C: "«Desde aquí se ve todo», dice ella. «Soy Doña Elsa. De noche, este barrio es de los que trabajan, de los que lloran y de los que se enamoran.»" },
            mood: "smile", end: "charla",
          },
          {
            id: "azotea",
            say: { A: "¿Hay algo bonito para ver por aquí?", B: "¿Me recomienda algún sitio especial del barrio para ver de noche?", C: "Si usted fuera turista esta noche, ¿adónde iría?" },
            reply: { A: "La señora baja la voz. «Sube por la escalera de incendios. Arriba hay una azotea.»", B: "Doña Elsa baja la voz. «Sube por la escalera de incendios del edificio azul. Hay una azotea secreta. Desde ahí se ve todo.»", C: "Doña Elsa se inclina, cómplice. «La escalera de incendios del edificio azul. Arriba hay una azotea que no sale en ningún mapa.»" },
            mood: "smile", end: "secreto",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted trabaja mucho. ¿Está cansada?", B: "Debe de estar cansada después de tantas noches. ¿Quién la cuida a usted?", C: "Usted cuida a todo el barrio. Pero ¿quién le compra un chocolate a usted?" },
            reply: { A: "Doña Elsa sonríe. «Nadie me pregunta eso. Toma, un chocolate. Es un regalo.»", B: "A Doña Elsa se le llenan los ojos. «En treinta años nadie me lo preguntó. Toma, este chocolate es un regalo.»", C: "Doña Elsa se ríe y se quita las gafas. «Nadie, cariño. Por eso me lo compro yo. Toma, hoy invito yo.»" },
            mood: "love", end: "charla",
          },
          libro: {
            act: { A: "Le muestras tu libro.", B: "Ves que Doña Elsa tiene un libro viejo al lado. Le muestras el tuyo.", C: "Junto a la caja hay una novela gastada. Le enseñas la tuya." },
            say: { A: "¿Le gusta leer? Yo también leo.", B: "¿Usted también lee de noche? ¿Cambiamos libros?", C: "Veo que compartimos vicio. ¿Hacemos un intercambio?" },
            reply: { A: "La señora sonríe. «¡Sí! Toma mi libro. Dame el tuyo.»", B: "«¡Claro que sí!», dice la señora. «Soy Doña Elsa. El mío es de detectives. Te va a encantar.»", C: "«El mejor vicio del mundo», dice ella. «Doña Elsa. Toma, policíaca. El asesino es el mayordomo, pero no te lo dije.»" },
            mood: "smile", end: "charla",
          },
          granada: {
            act: { A: "Sin querer, pones la granada en el mostrador.", B: "Para buscar el dinero, dejas la granada en el mostrador.", C: "Vacías los bolsillos para pagar y la granada acaba en el mostrador." },
            say: { A: "Perdón. Un chicle, por favor.", B: "Perdone. Un chicle, por favor. Ya lo guardo.", C: "Perdón, no es lo que parece. Un chicle de menta, por favor." },
            reply: { A: "La señora mira la granada. Te da el chicle. «Guarda eso, cariño.»", B: "La señora ni se inmuta. «Guarda eso, cariño. En treinta años vi de todo.» Te da el chicle.", C: "Doña Elsa la mira sin parpadear. «Cariño, en treinta años vi cosas peores. Guarda eso. Y el chicle, invita la casa.»" },
            mood: "neutral", end: "compra",
          },
        },
      },
    },
    ends: {
      compra: { text: { A: "Pagas y sales. Doña Elsa sube la radio otra vez.", B: "Pagas, te despides y Doña Elsa vuelve a subir el volumen de la radio.", C: "Te alejas con tu compra. A tu espalda, Doña Elsa sube el tango y el kiosco sigue brillando." }, change: "sigue", recap: "Compraste algo en el kiosco de Doña Elsa." },
      charla: { text: { A: "Hablas un rato con Doña Elsa. Ella sonríe mucho.", B: "Te quedas un rato charlando con Doña Elsa sobre el barrio y sus vecinos.", C: "Te quedas un buen rato con Doña Elsa, escuchando las historias secretas del barrio." }, change: "sonrie", recap: "Charlaste con Doña Elsa en su kiosco." },
      secreto: { text: { A: "Doña Elsa señala el edificio azul. Una luz se enciende en la escalera de incendios.", B: "Doña Elsa señala el edificio azul. En la escalera de incendios se enciende una luz.", C: "Doña Elsa te guiña un ojo y, como por arte de magia, se enciende una luz en la escalera de incendios." }, change: "luz", recap: "Doña Elsa te contó el secreto de la azotea." },
    },
    speak: {
      A1: "¿Qué compras en una tienda pequeña?",
      A2: "¿Qué compraste ayer?",
      B1: "¿Qué tienda de tu barrio te gusta más y por qué?",
      B2: "¿Cómo sería tu barrio si cerraran todas las tiendas pequeñas?",
      C1: "¿Qué distingue a un comercio de barrio de una gran cadena, más allá del precio?",
      C2: "¿Qué tipo de vínculos invisibles sostienen la vida de un barrio?",
    },
  },
  {
    id: "viejo-telefono",
    kind: "rincon",
    district: "viejo",
    title: "Un teléfono suena",
    verb: "CONTESTAR",
    goal: "Contestar el teléfono, aclarar una confusión y reaccionar con humor.",
    cast: [
      {
        id: "lalo", name: "Lalo", role: "Locutor de radio (al teléfono)",
        age: "adult", body: "m", build: "average", height: 1.75,
        hair: "bald", hairColor: "#000000", skin: "#a8714f",
        top: "shirt", topColor: "#c43c3c", bottom: "pants", bottomColor: "#22303a",
        extras: ["headphones", "mustache"], pose: "phone", props: ["phone-booth"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "lalo", mood: "surprised",
        line: {
          A: "En una calle vacía, un teléfono público suena. Contestas. Una voz dice: «¿Eres tú? ¿Trajiste el paquete?»",
          B: "Un teléfono público suena en una calle desierta. Contestas por curiosidad. «¿Eres tú? ¿Trajiste el paquete?», susurra una voz.",
          C: "Un teléfono público, de esos que ya nadie usa, suena insistente en la calle vacía. Descuelgas. «¿Eres tú? ¿Trajiste el paquete?», pregunta una voz grave.",
        },
        options: [
          {
            id: "equivocado",
            say: { A: "Perdón, creo que es un número equivocado.", B: "Perdone, me parece que se equivocó de número.", C: "Lamento decepcionarlo, pero creo que no soy quien usted espera." },
            reply: { A: "La voz se ríe. «¡Ja, ja! ¡Estás en la radio! Soy Lalo.»", B: "Se oye una risa y música. «¡Estás en directo en Radio Luna! Soy Lalo, y esto es La llamada misteriosa.»", C: "Suena una fanfarria. «¡Nadie decepciona en Radio Luna! Soy Lalo, y acabas de caer en La llamada misteriosa.»" },
            mood: "smile", next: "concurso",
          },
          {
            id: "seguir",
            say: { A: "Sí, soy yo. ¿Qué paquete?", B: "Sí, soy yo. Pero ¿de qué paquete me habla?", C: "Depende. ¿De qué paquete estamos hablando exactamente?" },
            reply: { A: "La voz grita: «¡Muy bien! ¡Estás en la radio! Soy Lalo.»", B: "La voz explota de alegría. «¡Me encanta! ¡Estás en directo en Radio Luna! Soy Lalo.»", C: "«¡Depende! ¡Qué respuesta!», grita la voz. «Soy Lalo, de Radio Luna. Estás en directo.»" },
            mood: "smile", next: "concurso",
          },
          {
            id: "colgar",
            say: { A: "No, gracias. Adiós.", B: "No sé quién es usted, pero no me interesa. Adiós.", C: "No estoy para misterios esta noche. Buenas noches." },
            reply: { A: "Cuelgas. El teléfono suena otra vez.", B: "Cuelgas. Unos segundos después, el teléfono vuelve a sonar.", C: "Cuelgas. El teléfono vuelve a sonar, ofendido." },
            mood: "sad", end: "colgar",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Hola. Tu voz es triste. ¿Estás bien?", B: "Hola. Suena preocupado. ¿Está bien?", C: "Hola. Más que un paquete, parece que usted espera compañía." },
            reply: { A: "La voz se ríe. «¡Eres muy amable! Soy Lalo, de la radio. Es un juego.»", B: "La voz se ablanda y se ríe. «¡Qué amable! Soy Lalo, de Radio Luna. Es un juego, pero me tocaste el corazón.»", C: "Un silencio. Luego, una risa cálida. «Me pillaste. Soy Lalo, de Radio Luna. Esto es un juego… y sí, a esta hora uno se siente solo.»" },
            mood: "love", next: "concurso",
          },
          libro: {
            act: { A: "Abres tu libro.", B: "Abres tu libro y lees la primera frase.", C: "Abres tu libro y respondes con la primera frase que encuentras." },
            say: { A: "El paquete está en la página veinte.", B: "«Era una noche oscura y tranquila…» ¿Esa es la contraseña?", C: "«Nadie sabía qué había en la caja.» ¿Le sirve como respuesta en clave?" },
            reply: { A: "La voz se ríe mucho. «¡Genial! Estás en la radio. Soy Lalo.»", B: "La voz se ríe a carcajadas. «¡La mejor respuesta del año! Estás en Radio Luna. Soy Lalo.»", C: "«¡Literatura en directo!», grita la voz. «Soy Lalo, de Radio Luna, y esto es un concurso.»" },
            mood: "smile", next: "concurso",
          },
        },
      },
      concurso: {
        who: "lalo", mood: "smile",
        line: {
          A: "Lalo dice: «Pregunta final: ¿qué hay en el paquete? Si aciertas, ganas un premio.»",
          B: "«Pregunta final», dice Lalo con voz de suspenso. «¿Qué hay en el paquete? Si aciertas, ganas una cena para dos.»",
          C: "«Última oportunidad», anuncia Lalo entre redobles. «¿Qué hay en el paquete? El premio: cena para dos y fama efímera.»",
        },
        options: [
          {
            id: "pastel",
            say: { A: "¿Un pastel?", B: "Mmm… ¿un pastel de cumpleaños?", C: "Apuesto por algo dulce. ¿Un pastel?" },
            reply: { A: "Lalo grita. «¡Sí! ¡Ganaste!»", B: "Suena una sirena de fiesta. «¡Correcto! ¡Un pastel de chocolate! ¡Ganaste!»", C: "Estallan aplausos grabados. «¡Pastel de chocolate! ¡Tenemos ganador!»" },
            mood: "smile", end: "premio",
          },
          {
            id: "nada",
            say: { A: "No sé. ¿Nada?", B: "No tengo ni idea. ¿Una caja vacía?", C: "Diré lo más filosófico: el paquete está vacío." },
            reply: { A: "Lalo se ríe. «¡No! Era un pastel. Gracias por jugar.»", B: "«¡Casi!», dice Lalo. «Era un pastel. Pero gracias por jugar, oyente nocturno.»", C: "«Filosófico, pero no», dice Lalo. «Era un pastel. Te ganaste nuestro respeto, que no es poco.»" },
            mood: "smile", end: "colgar",
          },
          {
            id: "gato",
            say: { A: "¿Un gato?", B: "¿Un gato? Aquí hay muchos.", C: "¿Un gato? En este barrio, todo acaba siendo un gato." },
            reply: { A: "Lalo se ríe mucho. «¡No! ¡Pero me gusta!»", B: "Lalo se ríe tanto que tose. «¡No es un gato! Pero te damos un premio a la originalidad.»", C: "Lalo no puede parar de reír. «Premio especial a la sociología felina. ¡Te mandamos una camiseta!»" },
            mood: "smile", end: "premio",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "No importa. Me gusta hablar contigo, Lalo.", B: "La verdad, me da igual el premio. Me gustó hablar contigo.", C: "Quédese el premio, Lalo. La compañía a estas horas ya vale más." },
            reply: { A: "Lalo se emociona. «¡Ay! Esta canción es para ti.»", B: "Lalo se queda callado un segundo. «Esto no pasa nunca. La próxima canción va dedicada a ti.»", C: "Lalo carraspea, emocionado. «Señoras y señores, la próxima canción es para alguien que no quiso premio.»" },
            mood: "love", end: "premio",
          },
        },
      },
    },
    ends: {
      premio: { text: { A: "En una ventana, alguien sube la radio. Se oye tu voz. Todos los vecinos bailan.", B: "Una ventana se ilumina y alguien sube la radio: se oye tu voz. En la calle, la música suena para ti.", C: "Una ventana se enciende y la radio de algún vecino repite tu voz por todo el barrio. Por un momento, la calle baila." }, change: "baila", recap: "Ganaste un concurso de radio desde un teléfono público." },
      colgar: { text: { A: "Cuelgas el teléfono. La calle está en silencio otra vez.", B: "Cuelgas. La calle vuelve a quedarse en silencio, y el teléfono también.", C: "Cuelgas. El silencio vuelve a la calle, aunque ya no es el mismo." }, change: "sigue", recap: "Contestaste un teléfono misterioso en la calle." },
    },
    speak: {
      A1: "¿Con quién hablas por teléfono?",
      A2: "¿Qué llamada extraña recibiste alguna vez?",
      B1: "¿Qué haces cuando te llama un número desconocido?",
      B2: "¿Qué harías si ganaras un premio en la radio?",
      C1: "¿Qué diferencia hay entre una conversación por teléfono y una cara a cara?",
      C2: "¿Por qué crees que nos atraen tanto los misterios aunque sepamos que no son reales?",
    },
  },
  {
    id: "viejo-estrellas",
    kind: "rincon",
    district: "viejo",
    title: "Estrellas en la azotea",
    verb: "SUBIR",
    goal: "Saludar a desconocidos, pedir permiso, expresar admiración y compartir un momento.",
    cast: [
      {
        id: "nuria", name: "Nuria", role: "Aficionada a las estrellas",
        age: "adult", body: "f", build: "average", height: 1.68,
        hair: "long", hairColor: "#b5562b", skin: "#f2d6c0",
        top: "jacket", topColor: "#5a6b3a", bottom: "jeans", bottomColor: "#2a3346",
        extras: ["scarf"], pose: "sit", props: ["blanket"],
      },
      {
        id: "saul", name: "Saúl", role: "Pareja de Nuria",
        age: "adult", body: "m", build: "athletic", height: 1.88,
        hair: "afro", hairColor: "#1b1410", skin: "#4a2c1e",
        top: "hoodie", topColor: "#2c2c3a", bottom: "pants", bottomColor: "#6b5a45",
        extras: ["glasses"], pose: "crouch", props: ["telescope"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "nuria", mood: "surprised",
        line: {
          A: "Subes a la azotea. Una pareja mira el cielo con un telescopio. La mujer dice: «¡Hola! ¿Quieres ver la Luna?»",
          B: "En la azotea secreta, una pareja sentada sobre una manta mira el cielo con un telescopio barato. «¡Hola! Sube, sube. ¿Quieres mirar?»",
          C: "La azotea secreta no está tan secreta: una pareja comparte una manta y un telescopio de juguete. «Bienvenido al observatorio más humilde de la ciudad», dice ella.",
        },
        options: [
          {
            id: "mirar",
            say: { A: "¡Sí, gracias! ¿Qué se ve?", B: "¡Me encantaría! ¿Qué están mirando?", C: "Encantado de visitar el observatorio. ¿Qué hay en cartelera esta noche?" },
            reply: { A: "El hombre te da el telescopio. «Soy Saúl. Mira: es Júpiter.»", B: "El hombre te deja su sitio. «Soy Saúl, ella es Nuria. Mira: ese punto brillante es Júpiter.»", C: "«Saúl, y la directora del observatorio es Nuria», dice él. «En cartelera: Júpiter y tres de sus lunas.»" },
            mood: "smile", end: "mirar",
          },
          {
            id: "molestar",
            say: { A: "Perdón. ¿Molesto? Me voy.", B: "Perdón, no sabía que había alguien. No quiero molestar.", C: "Perdón, interrumpo algo que tiene toda la pinta de ser romántico." },
            reply: { A: "La mujer se ríe. «¡No molestas! Soy Nuria. Siéntate.»", B: "«¡Para nada!», dice ella. «Soy Nuria. Las estrellas son de todos. Siéntate.»", C: "Nuria se ríe. «Romántico, sí, pero compartido es mejor. Siéntate, que hay manta.»" },
            mood: "smile", end: "mirar",
          },
          {
            id: "pregunta",
            say: { A: "¿Cómo encontraron este lugar?", B: "¿Cómo descubrieron esta azotea? Parece un secreto.", C: "¿Cómo llegaron hasta aquí? Pensé que este sitio era solo una leyenda del barrio." },
            reply: { A: "La mujer sonríe. «Soy Nuria. Aquí nos conocimos, hace cinco años.»", B: "«Soy Nuria», dice ella. «Aquí conocí a Saúl, hace cinco años. Venimos cada aniversario.»", C: "«Soy Nuria. Es nuestra leyenda privada», dice ella. «Aquí nos conocimos hace cinco años, y cada aniversario volvemos.»" },
            mood: "love", end: "solos",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Ustedes son muy bonitos juntos.", B: "Perdón, pero se ve que ustedes se quieren mucho.", C: "Qué envidia sana me dan. Se nota que se quieren." },
            reply: { A: "Nuria sonríe. «Gracias. Hoy Saúl me va a pedir algo… ¡shh!»", B: "Nuria se acerca y te susurra. «Gracias. Creo que Saúl me va a pedir matrimonio esta noche. ¡No digas nada!»", C: "Nuria baja la voz. «Gracias. Entre nosotros: Saúl lleva una hora tocándose el bolsillo. Creo que hoy me pide matrimonio.»" },
            mood: "love", end: "solos",
          },
          libro: {
            act: { A: "Abres tu libro.", B: "Abres tu libro: tiene un poema sobre la Luna.", C: "Abres tu libro y encuentras, casualmente, un poema sobre las estrellas." },
            say: { A: "Mi libro tiene un poema de la Luna. ¿Lo leo?", B: "Aquí hay un poema sobre la Luna. ¿Quieren que lo lea?", C: "Me parece que el momento pide un poema. ¿Me permiten?" },
            reply: { A: "Nuria aplaude. «¡Sí! Soy Nuria. Lee, por favor.»", B: "«¡Qué casualidad! Sí, léelo», dice Nuria. «Soy Nuria, y él es Saúl.»", C: "«Lo pide a gritos», dice Nuria. «Soy Nuria. Saúl, apaga la linterna, que hay recital.»" },
            mood: "smile", end: "mirar",
          },
        },
      },
    },
    ends: {
      mirar: { text: { A: "Te sientas con Nuria y Saúl. Miran las estrellas juntos.", B: "Te sientas en la manta con Nuria y Saúl, y pasan un rato mirando el cielo.", C: "Compartes manta, telescopio y silencio con Nuria y Saúl. La ciudad, desde aquí, parece otra." }, change: "se-sienta", recap: "Miraste las estrellas con Nuria y Saúl." },
      solos: { text: { A: "Dices adiós. Nuria y Saúl se quedan solos con las estrellas.", B: "Te despides con discreción y dejas a Nuria y Saúl solos bajo las estrellas.", C: "Te retiras discretamente. Al bajar, oyes a Nuria decir: «¡Sí!»" }, change: "abraza", recap: "Dejaste solos a Nuria y Saúl en la azotea." },
    },
    speak: {
      A1: "¿Qué ves en el cielo por la noche?",
      A2: "¿Dónde viste las estrellas por última vez?",
      B1: "¿Qué lugar especial tienes para estar tranquilo?",
      B2: "¿Qué preferirías: viajar al espacio o al fondo del mar, y por qué?",
      C1: "¿Cómo cambia nuestra forma de ver los problemas cuando miramos el cielo?",
      C2: "¿Qué lugares de tu vida guardan un significado que nadie más conoce?",
    },
  },
  {
    id: "viejo-palomas",
    kind: "rincon",
    district: "viejo",
    title: "El señor de las palomas",
    verb: "HABLAR",
    goal: "Mostrar interés, hacer preguntas sobre el pasado y escuchar una historia.",
    cast: [
      {
        id: "ernesto", name: "Don Ernesto", role: "Criador de palomas",
        age: "old", body: "m", build: "slim", height: 1.68,
        hair: "bald", hairColor: "#bbbbbb", skin: "#d9a77e",
        top: "coat", topColor: "#5c4a33", bottom: "pants", bottomColor: "#2e2e2e",
        extras: ["hat", "mustache"], pose: "stand", props: ["pigeon-coop"],
      },
      {
        id: "palomas", name: "Las palomas", role: "Palomas de Don Ernesto", kind: "animal", species: "pigeons", color: "#8a8f99", size: "small",
        age: "adult", body: "f", build: "slim", height: 0.3, hair: "short", hairColor: "#8a8f99", skin: "#8a8f99",
        top: "tshirt", topColor: "#8a8f99", bottom: "pants", bottomColor: "#8a8f99", pose: "sit",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "ernesto", mood: "neutral",
        line: {
          A: "En la azotea hay un palomar. Un señor mayor da de comer a las palomas. «Buenas noches. No hagas ruido, duermen.»",
          B: "En un rincón de la azotea, junto a un palomar de madera, un anciano con sombrero reparte granos. «Despacio, que se asustan», susurra.",
          C: "Junto a un palomar de madera remendada, un anciano con sombrero habla con las palomas como con viejas amigas. «Hable bajito. Estas señoras tienen el sueño ligero.»",
        },
        options: [
          {
            id: "cuantas",
            say: { A: "¿Cuántas palomas tiene?", B: "¿Cuántas palomas tiene? ¿Tienen nombre?", C: "¿Cuántas son? Y, sobre todo, ¿cuál es la que manda?" },
            reply: { A: "El señor sonríe. «Doce. Soy Ernesto. Esta se llama Reina.»", B: "«Doce, y todas con nombre», dice el señor. «Soy Don Ernesto. La blanca es Reina; es la más vieja.»", C: "El señor se ríe sin hacer ruido. «Doce. Soy Don Ernesto. Manda Reina, la blanca. Yo solo firmo.»" },
            mood: "smile", next: "historia",
          },
          {
            id: "porque",
            say: { A: "¿Por qué tiene palomas aquí?", B: "¿Por qué cría palomas en una azotea?", C: "¿Qué lleva a alguien a cuidar palomas en una azotea, a estas horas?" },
            reply: { A: "El señor mira el cielo. «Soy Ernesto. Es una historia larga.»", B: "El señor se queda pensativo. «Soy Don Ernesto. Es una historia larga. ¿Tienes tiempo?»", C: "El señor sonríe con media boca. «Don Ernesto. Esa pregunta tiene una respuesta corta y una verdadera.»" },
            mood: "neutral", next: "historia",
          },
          {
            id: "irse",
            say: { A: "Perdón. No quiero molestar. Buenas noches.", B: "Perdone, no quería molestar. Las dejo dormir.", C: "Perdone la intromisión. Me retiro antes de despertar a la directiva." },
            reply: { A: "El señor levanta el sombrero. «Buenas noches.»", B: "El señor se toca el sombrero. «Buenas noches. Vuelve cuando quieras.»", C: "El señor se toca el sombrero, divertido. «La directiva se lo agradece. Vuelva de día.»" },
            mood: "smile", end: "sigue",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted las quiere mucho, ¿verdad?", B: "Se nota que usted quiere mucho a estas palomas.", C: "Usted no las cría: las cuida. Se nota la diferencia." },
            reply: { A: "El señor sonríe. «Sí. Soy Ernesto. Ellas son mi familia.»", B: "El señor se emociona. «Soy Don Ernesto. Desde que mis hijos se fueron, ellas son mi familia.»", C: "El señor te mira largo rato. «Don Ernesto. Muy poca gente nota esa diferencia. Siéntese, le cuento algo.»" },
            mood: "love", next: "historia",
          },
          libro: {
            act: { A: "Sacas tu libro.", B: "Sacas tu libro: hay una paloma en la tapa.", C: "Sacas tu libro y, qué casualidad, en la tapa hay una paloma." },
            say: { A: "Mire. Mi libro tiene una paloma.", B: "Mire, en mi libro hay una paloma. ¿Se parece a las suyas?", C: "Mire: una colega suya en la tapa. ¿La reconoce?" },
            reply: { A: "El señor se ríe. «Es como Reina. Soy Ernesto.»", B: "«¡Es igualita a Reina!», dice el señor. «Soy Don Ernesto. Ven, te la presento.»", C: "«Clavadita a Reina, aunque Reina tiene más carácter», dice. «Don Ernesto. Venga, le presento a la original.»" },
            mood: "smile", next: "historia",
          },
        },
      },
      historia: {
        who: "ernesto", mood: "smile",
        line: {
          A: "Don Ernesto cuenta: «Hace cincuenta años, una paloma me trajo una carta de amor.»",
          B: "Don Ernesto acaricia a Reina. «Hace cincuenta años, una paloma mensajera me trajo una carta. Era de una chica de la otra azotea.»",
          C: "Don Ernesto baja la voz. «Hace medio siglo, una paloma se equivocó de azotea y aterrizó aquí con una carta de amor. No era para mí. Pero me casé con la que la escribió.»",
        },
        options: [
          {
            id: "fin",
            say: { A: "¡Qué bonito! ¿Y después?", B: "¡Qué historia! ¿Y qué pasó después?", C: "No puede dejarme así. ¿Cómo sigue?" },
            reply: { A: "Don Ernesto sonríe. «Me casé con ella. Se llamaba Amparo.»", B: "«Le devolví la carta en persona», dice Don Ernesto. «Y me quedé con ella cuarenta años. Se llamaba Amparo.»", C: "«Le llevé la carta en mano y me invitó a un café», dice. «El café duró cuarenta años. Amparo, se llamaba.»" },
            mood: "love", end: "historia",
          },
          {
            id: "mandar",
            say: { A: "¿Las palomas todavía llevan cartas?", B: "¿Y sus palomas todavía saben llevar mensajes?", C: "¿Sus palomas siguen en el negocio del correo sentimental?" },
            reply: { A: "Don Ernesto se ríe. «Sí. ¿Quieres mandar una?»", B: "«Reina sí», dice Don Ernesto. «¿Quieres mandar un mensaje? Ella vuela a la otra azotea.»", C: "«Reina conserva el oficio», dice, guiñando un ojo. «¿Tiene usted algún mensaje pendiente?»" },
            mood: "smile", end: "vuelo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted la extraña mucho, ¿no?", B: "Usted todavía la extraña, ¿verdad?", C: "Me parece que cada paloma que suelta lleva un poco de ella." },
            reply: { A: "Don Ernesto mira el cielo. «Cada noche. Por eso subo aquí.»", B: "Don Ernesto asiente despacio. «Cada noche. Por eso subo: aquí la siento cerca.»", C: "Don Ernesto se quita el sombrero. «Nadie me lo había dicho tan bien. Sí. Cada una lleva un poco de Amparo.»" },
            mood: "love", end: "historia",
          },
          lapiz: {
            act: { A: "Sacas el lápiz y escribes un mensaje.", B: "Con el lápiz, escribes un mensaje en un papel pequeño.", C: "Escribes un mensaje diminuto con el lápiz." },
            say: { A: "¿Reina puede llevar este mensaje?", B: "¿Reina podría llevar este mensaje a la otra azotea?", C: "¿Aceptaría Reina un encargo de un desconocido?" },
            reply: { A: "Don Ernesto ata el papel a Reina. «¡Vuela, Reina!»", B: "Don Ernesto ata el papel a la pata de Reina. «A ver quién lo encuentra. ¡Vuela!»", C: "«Reina acepta encargos de gente con buen corazón», dice, y ata tu mensaje. «¡Vuela, Reina!»" },
            mood: "smile", end: "vuelo",
          },
        },
      },
    },
    ends: {
      historia: { text: { A: "Don Ernesto termina su historia. Sonríe y mira el cielo.", B: "Don Ernesto termina su historia y se queda mirando la otra azotea, sonriendo.", C: "Don Ernesto termina la historia y se queda en silencio, mirando la azotea de enfrente, donde todo empezó." }, change: "sonrie", recap: "Don Ernesto te contó la historia de sus palomas." },
      vuelo: { text: { A: "Reina vuela con tu mensaje. En la otra azotea, se enciende una luz.", B: "Reina sale volando con tu mensaje. En la azotea de enfrente se enciende una luz.", C: "Reina se pierde en la noche con tu mensaje. Al poco, en la azotea de enfrente, se enciende una luz." }, change: "luz", recap: "Mandaste un mensaje con una paloma de Don Ernesto." },
      sigue: { text: { A: "Te vas. Don Ernesto sigue con sus palomas.", B: "Te despides. Don Ernesto sigue repartiendo granos en silencio.", C: "Te alejas. Don Ernesto sigue susurrando a sus palomas." }, change: "sigue", recap: "Viste a Don Ernesto con sus palomas en la azotea." },
    },
    speak: {
      A1: "¿Quién es la persona mayor más importante para ti?",
      A2: "¿Qué historia te contaron tus abuelos?",
      B1: "¿Cómo te comunicas con las personas que están lejos?",
      B2: "¿Qué ventajas tendría escribir cartas a mano en lugar de mensajes?",
      C1: "¿Qué papel tiene la casualidad en las historias de amor que conoces?",
      C2: "¿De qué manera las rutinas nos ayudan a convivir con la ausencia?",
    },
  },
  {
    id: "viejo-sereno",
    kind: "rincon",
    district: "viejo",
    title: "Ruidos en la obra",
    verb: "AYUDAR",
    goal: "Ofrecer ayuda, investigar un ruido, tranquilizar y proponer una solución.",
    cast: [
      {
        id: "wilson", name: "Wilson", role: "Sereno de la obra",
        age: "adult", body: "m", build: "heavy", height: 1.78,
        hair: "cap", hairColor: "#222222", skin: "#7a4b30",
        top: "uniform", topColor: "#3d4a5c", bottom: "pants", bottomColor: "#2a2f38",
        extras: ["beard"], pose: "stand", props: ["flashlight", "fence"],
      },
      {
        id: "gatitos", name: "Los gatitos", role: "Gatitos escondidos", kind: "animal", species: "cat", color: "#3b3b3b", size: "small",
        age: "young", body: "f", build: "slim", height: 0.2, hair: "short", hairColor: "#3b3b3b", skin: "#3b3b3b",
        top: "tshirt", topColor: "#3b3b3b", bottom: "pants", bottomColor: "#3b3b3b", pose: "lie",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "wilson", mood: "worried",
        line: {
          A: "Un guardia de la obra tiene una linterna. «¿Oyes eso? Hay un ruido raro detrás de los ladrillos.»",
          B: "El sereno de la obra apunta su linterna hacia una pila de ladrillos. «¿Oíste? Hace una hora que suena algo ahí detrás.»",
          C: "El sereno de la obra recorre los ladrillos con la linterna, más nervioso de lo que quisiera admitir. «Dígame que usted también lo oye. Porque si no, me jubilo hoy.»",
        },
        options: [
          {
            id: "mirar",
            say: { A: "Sí, lo oigo. Vamos a mirar juntos.", B: "Sí, yo también lo oigo. ¿Miramos juntos?", C: "Lo oigo, tranquilo. No se jubile todavía. Miremos juntos." },
            reply: { A: "El guardia sonríe. «Gracias. Soy Wilson. Tú primero, ¿sí?»", B: "«Gracias, de verdad», dice el sereno. «Soy Wilson. Pero tú vas primero, ¿eh?»", C: "«Wilson, encantado», dice el sereno, aliviado. «Usted primero. Por cortesía, claro, no por miedo.»" },
            mood: "worried", next: "gatitos",
          },
          {
            id: "rata",
            say: { A: "Seguro es una rata. No pasa nada.", B: "Seguro que es una rata. En estos edificios hay muchas.", C: "Diría que es una rata con muy poco respeto por su horario." },
            reply: { A: "El guardia se pone pálido. «¿Una rata? ¡No me gustan!»", B: "El sereno se estremece. «¿Una rata? No, por favor. Soy Wilson y odio las ratas. Mira tú.»", C: "«No pronuncie esa palabra», dice el sereno. «Wilson. Diecisiete años de sereno y sigo sin soportarlas. Mire usted.»" },
            mood: "scared", next: "gatitos",
          },
          {
            id: "irse",
            say: { A: "Perdón, tengo prisa. Buenas noches.", B: "Lo siento, tengo que irme. Suerte con el ruido.", C: "Le deseo suerte, pero los misterios nocturnos no son lo mío." },
            reply: { A: "El guardia está triste. «Bueno. Buenas noches.»", B: "El sereno suspira. «Bueno… Me quedo solo con el fantasma.»", C: "«Ni lo mío», murmura el sereno, y vuelve a apuntar la linterna, solo." },
            mood: "sad", end: "solo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "No tengas miedo. Estoy aquí contigo.", B: "Tranquilo, no estás solo. Lo miramos juntos.", C: "Tranquilo. Las noches largas se llevan mejor acompañado." },
            reply: { A: "El guardia sonríe. «Soy Wilson. Trabajo solo cada noche. Gracias.»", B: "El sereno sonríe, conmovido. «Soy Wilson. Trabajo solo todas las noches. Nadie se para a hablar conmigo.»", C: "El sereno baja la linterna y sonríe. «Wilson. Diecisiete años de noches solitarias, y es la primera vez que alguien me dice eso.»" },
            mood: "love", next: "gatitos",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo para abrir la valla.", B: "Sacas el cuchillo para cortar el alambre de la valla.", C: "Sacas el cuchillo: el alambre que sujeta la valla no deja pasar." },
            say: { A: "La valla está cerrada. ¿Corto el alambre?", B: "El alambre no nos deja pasar. ¿Lo corto?", C: "Si corto este alambre, llegamos antes. ¿Me autoriza?" },
            reply: { A: "El guardia se asusta. «¡No! Yo tengo la llave. Soy Wilson. ¡Guarda eso!»", B: "El sereno da un salto. «¡Guarda eso! Tengo la llave. Soy Wilson, el sereno. ¡Qué susto!»", C: "El sereno levanta las manos. «¡No autorizo nada! Tengo llave. Wilson, el sereno. Guarde eso y respiremos.»" },
            mood: "scared", next: "gatitos",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Por si es un ladrón, sacas el gas pimienta.", C: "Sacas el gas pimienta, listo para enfrentarte al misterio." },
            say: { A: "Si es un ladrón, tengo esto.", B: "Tranquilo. Si es un ladrón, yo me encargo.", C: "Usted ilumine, que yo cubro la retaguardia." },
            reply: { A: "El guardia se ríe nervioso. «Soy Wilson. Vamos, pero con cuidado.»", B: "El sereno se ríe, nervioso. «Soy Wilson. Me gusta tu valentía. Pero no apuntes a mí, ¿eh?»", C: "«Retaguardia, perfecto», dice el sereno. «Wilson. Pero esa cosa apuntando hacia adelante, por favor.»" },
            mood: "worried", next: "gatitos",
          },
        },
      },
      gatitos: {
        who: "wilson", mood: "surprised",
        line: {
          A: "Detrás de los ladrillos hay tres gatitos pequeños. Wilson se ríe. «¡Son gatitos!»",
          B: "Wilson mueve un ladrillo y aparecen tres gatitos negros, maullando. «¡Gatitos! Y yo pensando en fantasmas.»",
          C: "Tras los ladrillos, tres gatitos negros maúllan indignados por la luz. Wilson se ríe a carcajadas. «Diecisiete años de sereno y me derrotan tres bolitas de pelo.»",
        },
        options: [
          {
            id: "agua",
            say: { A: "Tienen hambre. ¿Tienes leche o agua?", B: "Seguro que tienen hambre. ¿Tienes algo de agua o comida?", C: "Estos tres reclaman servicio de habitaciones. ¿Qué tiene en la caseta?" },
            reply: { A: "Wilson trae agua y un poco de pollo. «¡Comen mucho!»", B: "Wilson trae agua y un poco de su cena. «¡Mira cómo comen!»", C: "Wilson sacrifica su bocadillo de pollo sin dudarlo. «Mi cena. Bueno, era mi cena.»" },
            mood: "smile", end: "cuidar",
          },
          {
            id: "refugio",
            say: { A: "Vamos a llamar a un refugio de animales.", B: "Deberíamos llamar a un refugio. Ellos saben cuidarlos.", C: "Lo más sensato sería avisar a un refugio. Aquí, entre ladrillos, no van a durar." },
            reply: { A: "Wilson dice que sí. «Buena idea. Tengo un número.»", B: "«Tienes razón», dice Wilson. «Mi sobrina trabaja en un refugio. La llamo.»", C: "«Sensato y cierto», dice Wilson. «Mi sobrina es voluntaria en un refugio. La despierto, que por gatitos no se enoja.»" },
            mood: "smile", end: "refugio",
          },
          {
            id: "madre",
            say: { A: "¿Dónde está la mamá? Vamos a esperar.", B: "Quizá la madre vuelve pronto. Mejor no tocarlos y esperar.", C: "Antes de intervenir, esperemos a la madre. Seguro que anda cerca." },
            reply: { A: "Wilson apaga la linterna. Una gata llega. «¡Es la mamá!»", B: "Wilson apaga la linterna. A los pocos minutos aparece una gata negra. «¡La madre!»", C: "Wilson apaga la linterna. Al rato, una gata negra se acerca con aire ofendido. «La madre. Y no parece contenta conmigo.»" },
            mood: "smile", end: "madre",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Wilson, ahora tienes compañía por la noche.", B: "Wilson, creo que ya no vas a estar solo por las noches.", C: "Wilson, me parece que acaba de conseguir tres compañeros de turno." },
            reply: { A: "Wilson sonríe mucho. «¡Sí! Me los quedo. Uno se va a llamar como tú.»", B: "Wilson se emociona. «¿Sabes qué? Me los quedo. Y a uno le pongo tu nombre.»", C: "Wilson toma un gatito con sus manos enormes. «Tres compañeros. Uno se llamará como usted, por supuesto.»" },
            mood: "love", end: "cuidar",
          },
        },
      },
    },
    ends: {
      cuidar: { text: { A: "Wilson cuida a los gatitos en su caseta. Está feliz.", B: "Wilson prepara una caja con una manta para los gatitos en su caseta. Sonríe como un niño.", C: "Wilson improvisa una cuna con una caja y su chaqueta. Por primera vez en años, el turno de noche se le hace corto." }, change: "sonrie", recap: "Ayudaste a Wilson a cuidar a unos gatitos." },
      refugio: { text: { A: "Wilson llama a su sobrina. Mañana los gatitos van al refugio.", B: "Wilson llama a su sobrina, que promete venir al amanecer a buscar a los gatitos.", C: "Wilson llama a su sobrina. Al amanecer, los gatitos tendrán refugio y, quizá, una familia." }, change: "llama", recap: "Llamaste a un refugio para los gatitos de la obra." },
      madre: { text: { A: "La mamá gata se lleva a sus gatitos. Wilson y tú se ríen.", B: "La gata recoge a sus crías una por una. Wilson y tú se quedan mirando, en silencio.", C: "La gata se lleva a sus crías una por una, sin dar las gracias. Wilson y tú sonríen como dos tíos orgullosos." }, change: "sonrie", recap: "Esperaste con Wilson a que la gata volviera por sus crías." },
      solo: { text: { A: "Te vas. Wilson busca el ruido solo.", B: "Te alejas. Wilson sigue buscando el ruido, solo con su linterna.", C: "Te alejas. A tu espalda, la linterna de Wilson tiembla entre los ladrillos." }, change: "sigue", recap: "Dejaste a Wilson solo con el ruido de la obra." },
    },
    speak: {
      A1: "¿A qué hora te acuestas normalmente?",
      A2: "¿Qué ruido raro escuchaste alguna noche?",
      B1: "¿Qué trabajos nocturnos conoces y qué te parecen?",
      B2: "¿Qué harías si encontraras unos gatitos abandonados en la calle?",
      C1: "¿Cómo influye trabajar de noche en la vida social y emocional de una persona?",
      C2: "¿Qué miedos de la infancia sigues reconociendo, aunque sea en otra forma, en tu vida adulta?",
    },
  },
];
export default encounters;
