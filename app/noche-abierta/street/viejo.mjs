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
      "cuchillo-inicio": {
        who: "ruben", mood: "terror",
        line: {
          A: "Te acercas con el cuchillo en la mano. Rubén lo ve y se arrastra hacia atrás. «¡No! ¡No tengo dinero! ¡Llévate la bici!»",
          B: "Te acercas con el cuchillo en la mano. Rubén lo ve antes de verte a ti y retrocede arrastrándose por la acera. «¡No, por favor! ¡La bici es tuya! ¡La pizza también!»",
          C: "Te acercas con el cuchillo en la mano y Rubén retrocede por la acera como un cangrejo, con el tobillo a rastras. «¡Lo que quieras! ¡La bici, la pizza, la propina! ¡Pero guarda eso!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Es para cortar la correa del casco.", B: "Perdona, perdona, lo guardo. Lo saqué para cortarte la correa del casco, nada más.", C: "Lo guardo ahora mismo. Lo saqué porque esa correa te está ahorcando, no para asaltarte." },
            reply: { A: "Rubén respira. «¿La correa? Ah… Sí, me aprieta. Pero despacio.»", B: "Rubén respira por fin. «¿La correa? Es verdad, me ahoga. Bueno… pero despacio, y avisando.»", C: "Rubén suelta el aire y se toca el cuello. «La correa. Claro. Pues me ahoga, sí. Pero anuncia cada movimiento, por favor.»" },
            mood: "worried", next: "cuchillo-correa",
          },
          {
            id: "tranquilo",
            say: { A: "Tranquilo. No te voy a hacer nada. ¿Qué te pasó?", B: "Tranquilo, no te voy a hacer nada. Dime qué te pasó.", C: "Tranquilo, no pienso hacerte nada. Cuéntame qué pasó, nada más." },
            reply: { A: "Rubén no te cree. Grita: «¡Socorro! ¡Tiene un cuchillo!» Se encienden ventanas.", B: "Rubén no te cree ni una palabra. «¡Socorro! ¡Un hombre con un cuchillo!» Dos ventanas se encienden.", C: "Rubén no te cree, y tiene buenos motivos. «¡Socorro! ¡Aquí abajo, con un cuchillo!» Las ventanas del edificio se encienden una tras otra." },
            mood: "scared", end: "cuchillo-vecinos",
          },
          {
            id: "acercarse",
            say: { A: "Déjame ver el pie. No te muevas.", B: "Déjame ver ese pie. Quédate quieto.", C: "Quédate quieto y déjame ver ese tobillo." },
            reply: { A: "Rubén saca un cúter de su caja. «¡Atrás! ¡Yo también tengo!»", B: "Rubén mete la mano en la caja del pedido y saca un cúter. «¡Atrás! ¡Yo también tengo uno!»", C: "Rubén busca a ciegas en la caja del pedido y saca un cúter con la mano temblando. «¡Atrás! ¡No eres el único con filo esta noche!»" },
            mood: "furious", next: "cuchillo-duelo",
          },
        ],
      },
      "cuchillo-duelo": {
        who: "ruben", mood: "furious",
        line: {
          A: "Rubén tiene el cúter en la mano. Tú tienes el cuchillo. Los dos se miran. Nadie se mueve. «¡No te acerques!»",
          B: "Rubén apunta con el cúter desde el suelo; tú sigues con el cuchillo en la mano. Un segundo largo, los dos quietos. «¡Ni un paso más!»",
          C: "Rubén sostiene el cúter desde el suelo con una dignidad absurda; tú, el cuchillo. Un duelo de un metro de distancia, sin movimiento. «Un paso más y uno de los dos se corta, y no voy a ser yo.»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Está bien. Bajo el mío. Mira: lo dejo en el suelo.", B: "Está bien, bajo el mío. Mira, lo dejo en el suelo, despacio.", C: "De acuerdo. Yo primero: dejo el cuchillo en el suelo, con mucha calma." },
            reply: { A: "Rubén baja el cúter. Se ríe nervioso. «Los dos somos idiotas.»", B: "Rubén baja el cúter y suelta una risa nerviosa. «Somos dos idiotas. Yo, por lo menos, tengo excusa: me duele el pie.»", C: "Rubén baja el cúter y se ríe con la risa de quien acaba de salvarse. «Dos idiotas con filo en una esquina. Esto no va en mi informe del turno.»" },
            mood: "worried", next: "cuchillo-correa",
          },
          {
            id: "gritar",
            say: { A: "¡Baja eso! ¡Solo quiero ayudarte!", B: "¡Baja eso ya! ¡Solo quiero ayudarte!", C: "¡Baja ese cúter de una vez! ¡Lo único que quiero es ayudarte!" },
            reply: { A: "Una vecina grita desde la ventana: «¡Policía! ¡Dos con cuchillos!»", B: "Desde una ventana, una vecina grita: «¡Ya llamé a la policía! ¡Dos con cuchillos ahí abajo!»", C: "Una vecina en bata se asoma y lo resume para toda la calle: «¡Dos con cuchillos! ¡Ya viene la policía!»" },
            mood: "scared", end: "cuchillo-policia",
          },
          {
            id: "irse",
            say: { A: "Me voy. Quédate con tu cúter.", B: "Me voy, me voy. Quédate con tu cúter.", C: "Me retiro. Quédate con tu cúter y tu pizza." },
            reply: { A: "Rubén grita: «¡Socorro! ¡Se va, pero tiene un cuchillo!» Ventanas encendidas.", B: "Rubén grita mientras te alejas: «¡Socorro! ¡Se escapa con un cuchillo!» Las ventanas se encienden.", C: "Mientras te alejas, Rubén informa a todo el barrio: «¡Se escapa! ¡Con cuchillo! ¡Hacia la plaza!» Las ventanas se encienden a tu paso." },
            mood: "scared", end: "cuchillo-vecinos",
          },
        ],
      },
      "cuchillo-correa": {
        who: "ruben", mood: "worried",
        line: {
          A: "Rubén se toca el cuello. La correa del casco le aprieta. «Bueno… Si es para la correa, corta. Pero despacio.»",
          B: "Rubén se toca el cuello: la correa del casco le aprieta de verdad. «Está bien. Si de verdad era para la correa, córtala. Despacio, y sin sorpresas.»",
          C: "Rubén se lleva la mano al cuello, donde la correa del casco le marca la piel. «Vale, córtala. Pero con la calma de un cirujano, que ya tuve mi dosis de adrenalina.»",
        },
        options: [
          {
            id: "cortar",
            say: { A: "Listo. Ya está. ¿Mejor? Ahora vamos a la clínica.", B: "Un corte y listo. ¿Respiras mejor? Ahora te acompaño a la clínica.", C: "Un solo corte y libre. ¿Respiras? Pues ahora toca la clínica, y te acompaño." },
            reply: { A: "Rubén respira hondo. «Mucho mejor. Bueno, vamos. Pero el cuchillo, guardado.»", B: "Rubén respira hondo por primera vez. «Mucho mejor. Vamos a la clínica. Pero ese cuchillo va guardado, ¿eh?»", C: "Rubén llena los pulmones como si fuera la primera vez. «Mejor. Vamos a la clínica. Y el cuchillo, en el bolsillo hasta el fin de los tiempos.»" },
            mood: "smile", end: "cuchillo-clinica",
          },
          {
            id: "ambulancia",
            say: { A: "Corto la correa y llamo a una ambulancia.", B: "Te corto la correa y después llamo a una ambulancia, ¿sí?", C: "Corto la correa y, acto seguido, llamo a una ambulancia. No se discute." },
            reply: { A: "Rubén asiente. «Bueno. Pero di que fue un accidente, no un cuchillo.»", B: "Rubén asiente, cansado. «Está bien. Pero cuando llames, di que fue una bici, no un cuchillo.»", C: "Rubén asiente, rendido. «Llama. Y por favor, cuenta la historia de la bici, no la del cuchillo.»" },
            mood: "worried", end: "ambulancia",
          },
          {
            id: "irse",
            say: { A: "Corto la correa y me voy. Perdón por el susto.", B: "Te corto la correa y me voy. Perdón por el susto de antes.", C: "Corto la correa y desaparezco. Perdón por el susto, de verdad." },
            reply: { A: "Rubén no dice nada. Te mira el cuchillo hasta que te vas.", B: "Rubén no responde. Solo mira el cuchillo hasta que doblas la esquina.", C: "Rubén no dice nada: sigue el cuchillo con la mirada hasta que desapareces." },
            mood: "worried", end: "solo",
          },
        ],
      },
      "pistola-inicio": {
        who: "ruben", mood: "terror",
        line: {
          A: "Rubén ve la pistola y levanta las manos desde el suelo. «¡No dispares! ¡Toma la bici, toma la pizza, toma todo!»",
          B: "Rubén ve la pistola antes de que digas nada y levanta las manos desde el suelo. «¡No dispares, por favor! La bici es tuya, la pizza también, ¡todo!»",
          C: "Rubén ve la pistola y levanta las manos tan rápido que se golpea con la bici. «¡No dispares! Bici, pizza, propina, casco: todo tuyo. ¡Pero no dispares!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "No es un robo. La guardo. Solo quiero ayudarte.", B: "Esto no es un robo. La guardo. Solo quiero ayudarte.", C: "No es ningún asalto. La guardo ahora mismo; solo quiero ayudarte." },
            reply: { A: "Rubén no baja las manos. «Guárdala bien. Y no te acerques tan rápido.»", B: "Rubén sigue con las manos arriba. «Guárdala… guárdala bien. Y acércate despacio, por favor.»", C: "Rubén mantiene las manos en alto, por si acaso. «Guárdala hondo. Y acércate como si yo fuera una paloma asustada.»" },
            mood: "scared", next: "pistola-calma",
          },
          {
            id: "explicar",
            say: { A: "Tranquilo. Es legal. Tengo permiso.", B: "Tranquilo, es legal. Tengo permiso para llevarla.", C: "Tranquilo, es perfectamente legal. Tengo permiso." },
            reply: { A: "Rubén grita: «¡Socorro!» Un auto de policía dobla la esquina.", B: "Rubén grita con todas sus fuerzas: «¡Socorro! ¡Un arma!» Justo entonces, una patrulla dobla la esquina.", C: "«Y yo tengo un tobillo roto y pánico. ¡Socorro!», grita Rubén. Una patrulla, oportunísima, dobla la esquina." },
            mood: "scared", end: "pistola-patrulla",
          },
          {
            id: "ordenar",
            say: { A: "Baja las manos y dime qué te duele.", B: "Baja las manos, Rubén, y dime qué te duele.", C: "Baja las manos y cuéntame qué te duele; con eso basta." },
            reply: { A: "Rubén baja las manos despacio. «El tobillo… No me hagas nada.»", B: "Rubén baja las manos muy despacio, temblando. «El tobillo. No me hagas nada, por favor.»", C: "Rubén obedece milímetro a milímetro. «El tobillo. Y el orgullo. Pero el tobillo más. No me hagas nada.»" },
            mood: "scared", next: "pistola-calma",
          },
        ],
      },
      "pistola-calma": {
        who: "ruben", mood: "scared",
        line: {
          A: "Rubén mira tu chaqueta, donde está la pistola. «¿Por qué llevas un arma? ¿Eres policía?»",
          B: "Rubén no deja de mirar tu chaqueta, donde guardaste la pistola. «¿Por qué llevas un arma? ¿Eres policía o qué?»",
          C: "Rubén habla sin apartar la vista del bulto de tu chaqueta. «¿Se puede saber por qué llevas un arma? ¿Policía, guardaespaldas, coleccionista?»",
        },
        options: [
          {
            id: "verdad",
            say: { A: "No soy policía. La llevo por miedo. La ciudad de noche da miedo.", B: "No soy policía. La llevo por miedo, nada más. Esta ciudad de noche asusta.", C: "No soy policía. La llevo por miedo, sin más excusa. Esta ciudad de noche asusta a cualquiera." },
            reply: { A: "Rubén suspira. «Pues tú das más miedo que la ciudad.» Pero acepta tu brazo.", B: "Rubén suspira. «Pues das más miedo tú que la ciudad.» Aun así, acepta tu brazo para levantarse.", C: "«Pues esta noche el que da miedo eres tú», dice Rubén. Pero se agarra a tu brazo y se levanta." },
            mood: "worried", end: "pistola-clinica",
          },
          {
            id: "mentir",
            say: { A: "Sí, soy policía. Tranquilo.", B: "Sí, soy policía. Puedes estar tranquilo.", C: "Policía, sí. Ya puedes estar tranquilo." },
            reply: { A: "Rubén pide la placa. No tienes. Marca un número: «¿Policía? Hay un falso policía…»", B: "«¿Y la placa?», pregunta Rubén. No tienes placa. Marca un número: «¿Policía? Hay alguien con un arma que dice ser de ustedes…»", C: "«Enséñame la placa», dice Rubén. Silencio. Marca un número sin dejar de mirarte: «¿Policía? Tienen un colega falso aquí.»" },
            mood: "scared", end: "pistola-patrulla",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Llama a alguien, por favor.", B: "Mejor me voy. Pero llama a alguien, ¿de acuerdo?", C: "Lo mejor es que me vaya. Llama a alguien que te ayude, por favor." },
            reply: { A: "Rubén asiente. Se arrastra hasta el poste y llama.", B: "Rubén asiente sin decir nada. Se arrastra hasta el poste y saca el teléfono.", C: "Rubén asiente, aliviado de verte marchar. Se arrastra hasta el poste y marca un número." },
            mood: "worried", end: "pistola-solo",
          },
        ],
      },
      "granada-inicio": {
        who: "ruben", mood: "terror",
        line: {
          A: "Rubén ve la granada en tu mano y grita con toda su voz: «¡¡Una granada!! ¡¡Socorro!!» Las ventanas se encienden una por una.",
          B: "Rubén ve la granada en tu mano y suelta un grito que despierta a media calle: «¡¡Una granada!! ¡¡Socorro!!» Las ventanas se encienden una tras otra.",
          C: "Rubén ve la granada en tu mano y lanza un grito operístico: «¡¡Una granada!! ¡¡Socorro!!» Las ventanas del edificio se encienden en cadena, como un árbol de Navidad.",
        },
        options: [
          {
            id: "calmar",
            say: { A: "¡Shh! No es de verdad. Es un llavero.", B: "¡Shh, shh! No es de verdad, es un llavero.", C: "¡Baja la voz! No es de verdad, es un llavero algo exagerado." },
            reply: { A: "Rubén grita menos. «¿Un llavero? ¿Quién tiene un llavero así?»", B: "Rubén grita un poco menos. «¿Un llavero? ¿Quién en su sano juicio tiene un llavero así?»", C: "Rubén baja el volumen a la mitad. «¿Un llavero? ¿De qué llaves, de un búnker?»" },
            mood: "scared", next: "granada-vecinos",
          },
          {
            id: "guardar",
            say: { A: "La guardo, la guardo. Perdón.", B: "La guardo, la guardo. Perdona, no quería asustarte.", C: "Ya la guardo. Perdona, no pretendía asustarte." },
            reply: { A: "Una vecina grita desde la ventana: «¡Ya llamé a la policía!»", B: "Desde una ventana, una vecina grita: «¡Ya llamé a la policía! ¡No se muevan!»", C: "Una vecina en bata grita desde el tercer piso: «¡Ya llamé a la policía! ¡Nadie se mueve ahí abajo!»" },
            mood: "scared", next: "granada-vecinos",
          },
          {
            id: "seguir",
            say: { A: "Olvida la granada. ¿Te duele el pie?", B: "Olvídate de la granada. ¿Qué te pasa en el pie?", C: "Ignora la granada un momento. ¿Qué le pasa a tu pie?" },
            reply: { A: "«¿¡Que olvide la granada!?» Rubén intenta correr y se cae otra vez.", B: "«¿¡Cómo que me olvide de la granada!?» Rubén intenta levantarse para huir y cae de nuevo sobre el tobillo.", C: "«¿¡Que ignore la granada!?» Rubén intenta huir sobre un solo pie, logra dos saltos y cae de bruces." },
            mood: "pain", end: "granada-cae",
          },
        ],
      },
      "granada-vecinos": {
        who: "ruben", mood: "scared",
        line: {
          A: "Tres vecinos en bata bajan al portal con escobas. Rubén, desde el suelo: «¡Es él! ¡Tiene una bomba!»",
          B: "Tres vecinos en bata bajan al portal armados con escobas y una sartén. Rubén los señala desde el suelo: «¡Es él! ¡Tiene una bomba!»",
          C: "Tres vecinos en bata salen al portal con escobas y una sartén, listos para la batalla. Rubén te señala desde el suelo: «¡Es él! ¡Lleva una bomba y una cara de inocente que no me creo!»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Vecinos, es de mentira. Es del teatro de mi primo.", B: "Tranquilos, vecinos: es de utilería. Mi primo trabaja en un teatro.", C: "Calma, vecinos: es de utilería. Mi primo trabaja en un teatro y esto es un accesorio." },
            reply: { A: "Una vecina la toma y la golpea contra la pared. Nada. Todos se ríen.", B: "Una vecina te la quita, la golpea contra la pared y no pasa nada. Las escobas bajan. Todos se ríen, hasta Rubén.", C: "Una vecina te la arrebata, la estampa contra la pared y, en efecto, nada. Las escobas bajan y la risa sube. Rubén incluido." },
            mood: "smile", end: "granada-risa",
          },
          {
            id: "huir",
            say: { A: "¡Me voy! ¡Perdón a todos!", B: "¡Me voy! ¡Perdón a todos, perdón!", C: "¡Me retiro! ¡Disculpas a todo el edificio!" },
            reply: { A: "Corres. Suenan sirenas. Una luz de helicóptero baja sobre la calle.", B: "Sales corriendo. A los pocos segundos suenan sirenas y una luz de helicóptero barre la calle.", C: "Sales corriendo con la granada en la mano. Sirenas, gritos y, en un minuto, el foco de un helicóptero sobre la calle entera." },
            mood: "scared", end: "granada-helicoptero",
          },
          {
            id: "dejar",
            say: { A: "Tranquilos. La dejo en el suelo y me alejo.", B: "Tranquilos. La dejo en el suelo y me alejo despacio.", C: "Calma. La dejo en el suelo y me alejo con las manos a la vista." },
            reply: { A: "Nadie se mueve. Un niño la toma y corre. Gritos. Sirenas.", B: "Nadie se mueve… hasta que un niño en pijama la agarra y sale corriendo. Gritos, sirenas, caos.", C: "Nadie respira. Entonces un niño en pijama la recoge y echa a correr. Gritos, sirenas y una noche que ya no tiene arreglo." },
            mood: "scared", end: "granada-helicoptero",
          },
        ],
      },
      "gas-inicio": {
        who: "ruben", mood: "scared",
        line: {
          A: "Te acercas con el gas pimienta en alto: la esquina está oscura. Rubén se tapa la cara. «¡No! ¡Solo me caí! ¡No me rocíes!»",
          B: "Te acercas con el gas pimienta levantado: la esquina está muy oscura. Rubén se cubre la cara con el brazo. «¡No me rocíes! ¡Solo me caí de la bici!»",
          C: "Te acercas con el gas pimienta por delante, porque la esquina no inspira confianza. Rubén se cubre los ojos. «¡Ni se te ocurra! Me caí de la bici, no te estoy tendiendo una emboscada.»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Perdón. La esquina está oscura. Lo bajo.", B: "Perdona, es que esta esquina está muy oscura. Lo bajo.", C: "Perdona; esta esquina no inspira confianza a estas horas. Lo bajo." },
            reply: { A: "Rubén saca su propio gas. «Bien pensado. Yo también llevo uno.»", B: "Rubén mete la mano en la mochila y saca su propio gas pimienta. «Bien pensado, la verdad. Yo también llevo uno.»", C: "Rubén rebusca en la mochila y muestra su propio gas pimienta. «Razonable. Yo llevo el mío desde que me asaltaron en esta misma esquina.»" },
            mood: "worried", next: "gas-aliado",
          },
          {
            id: "interrogar",
            say: { A: "Primero dime qué pasó. No te muevas.", B: "Primero cuéntame qué pasó. Y no te muevas.", C: "Antes de nada, cuéntame qué pasó. Y quédate donde estás." },
            reply: { A: "Rubén explica: un auto, la bici, el tobillo. «¿Contento? ¿Revisas la pizza también?»", B: "Rubén lo cuenta todo sin bajar el brazo: un auto, un frenazo, la bici al suelo. «¿Contento? ¿Quieres revisar la pizza también?»", C: "Rubén recita los hechos sin descubrirse la cara: auto, frenazo, bici, tobillo. «¿Satisfecho, inspector? ¿Registras la pizza o ya está?»" },
            mood: "worried", next: "gas-aliado",
          },
          {
            id: "rociar",
            say: { A: "No me fío. Quédate ahí.", B: "No me fío de ti. Quédate ahí quieto.", C: "No me fío ni un poco. Quédate exactamente ahí." },
            reply: { A: "Rubén grita: «¡Socorro! ¡Me quiere rociar!» Alguien llama a la policía desde una ventana.", B: "Rubén grita: «¡Socorro! ¡Me quiere rociar con gas!» Desde una ventana, alguien dice que ya llamó a la policía.", C: "Rubén grita hacia las ventanas: «¡Me quiere rociar con gas y estoy en el suelo!» Una voz responde que la policía ya viene." },
            mood: "scared", end: "gas-policia",
          },
        ],
      },
      "gas-aliado": {
        who: "ruben", mood: "worried",
        line: {
          A: "Rubén tiene su gas pimienta en la mano. Tú tienes el tuyo. «Dos con gas en la misma esquina. ¿Me ayudas o nos rociamos?»",
          B: "Rubén sostiene su gas pimienta; tú, el tuyo. «Dos personas con gas en la misma esquina. Qué barrio. ¿Me ayudas o nos rociamos?»",
          C: "Rubén sujeta su gas pimienta y tú el tuyo, como dos duelistas prudentes. «Dos con gas en un metro cuadrado. Este barrio no tiene remedio. ¿Me ayudas o nos rociamos y terminamos la noche?»",
        },
        options: [
          {
            id: "juntos",
            say: { A: "Te ayudo. Guardamos los dos a la vez. Uno, dos, tres.", B: "Te ayudo. Guardamos los dos a la vez: uno, dos, tres.", C: "Te ayudo. Guardamos los dos al mismo tiempo, como caballeros: uno, dos, tres." },
            reply: { A: "Los dos guardan el gas. Rubén se ríe. «Qué noche.»", B: "Guardan el gas al mismo tiempo. Rubén se ríe, aliviado. «Qué noche, por favor.»", C: "Los dos guardan el gas a la vez. Rubén se ríe con ganas. «Tregua firmada. Qué noche más rara.»" },
            mood: "smile", end: "gas-tregua",
          },
          {
            id: "clinica",
            say: { A: "Te acompaño a la clínica. Con el gas en el bolsillo, por si acaso.", B: "Te acompaño a la clínica. El gas va en el bolsillo, por si acaso.", C: "Te acompaño a la clínica. El gas, en el bolsillo, por si la noche se pone creativa." },
            reply: { A: "Rubén guarda el suyo. «Por si acaso, claro. Vamos.»", B: "Rubén guarda el suyo y acepta tu brazo. «Por si acaso, claro. Vamos.»", C: "Rubén guarda el suyo y se apoya en ti. «Por si acaso. Los dos. Vamos antes de que aparezca un tercero con gas.»" },
            mood: "worried", end: "gas-clinica",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Mucha desconfianza por hoy.", B: "Mejor me voy. Demasiada desconfianza por hoy.", C: "Creo que me voy. Ya hubo demasiada desconfianza por una noche." },
            reply: { A: "Rubén asiente. «Sí. Cada uno con su gas.» Llama a un amigo.", B: "Rubén asiente. «Sí, mejor. Cada uno con su gas.» Saca el teléfono y llama a un amigo.", C: "Rubén asiente, sin rencor. «Cada uno con su gas y en paz.» Marca el número de un amigo." },
            mood: "worried", end: "solo",
          },
        ],
      },
      "lapiz-inicio": {
        who: "ruben", mood: "surprised",
        line: {
          A: "Rubén ve el lápiz en tu mano. «¿Un lápiz? ¿Me vas a dibujar o me vas a ayudar?»",
          B: "Rubén ve el lápiz en tu mano y levanta una ceja. «¿Un lápiz? ¿Me vas a dibujar o me vas a ayudar?»",
          C: "Rubén ve el lápiz en tu mano y, pese al dolor, levanta una ceja. «¿Un lápiz? ¿Vienes a hacerme un retrato o a sacarme de aquí?»",
        },
        options: [
          {
            id: "nota",
            say: { A: "Las dos cosas. Primero escribo una nota para el cliente de la pizza.", B: "Las dos cosas. Primero, una nota para el cliente de la pizza.", C: "Ambas cosas. Primero, una nota para el cliente de la pizza, que estará mirando el reloj." },
            reply: { A: "Rubén sonríe. «¡Buena idea! Número 40. Pon que llego tarde, pero vivo.»", B: "Rubén sonríe por primera vez. «¡Buena idea! Número 40, segundo piso. Pon que llego tarde, pero vivo.»", C: "Rubén sonríe de verdad. «Número 40, segundo piso. Escribe: llego tarde, pero vivo. Y subraya lo de vivo.»" },
            mood: "smile", next: "lapiz-nota",
          },
          {
            id: "matricula",
            say: { A: "Voy a anotar el auto que te cerró el paso. ¿Lo viste?", B: "Voy a anotar la matrícula del auto que te cerró el paso. ¿La viste?", C: "Apunto la matrícula del auto que te cerró el paso. ¿Recuerdas algo?" },
            reply: { A: "Rubén piensa. «Blanco, con un golpe atrás… ¡y terminaba en 27!» Lo anotas.", B: "Rubén cierra los ojos. «Blanco, con una abolladura atrás… ¡y terminaba en 27!» Lo anotas todo.", C: "Rubén cierra los ojos y lo ve. «Blanco, abollado atrás, matrícula terminada en 27. Y el conductor, con gorra.» Lo anotas palabra por palabra." },
            mood: "worried", next: "lapiz-nota",
          },
          {
            id: "dibujar",
            say: { A: "Te dibujo. Así piensas en otra cosa.", B: "Te dibujo. Así te distraes del dolor un momento.", C: "Te hago un retrato rápido. Así el tobillo deja de ser el protagonista." },
            reply: { A: "Rubén se ríe. «Bueno. Pero sácame más delgado.»", B: "Rubén se ríe a pesar de todo. «Está bien. Pero sácame más delgado y sin casco.»", C: "Rubén se ríe por fin. «Acepto. Pero más delgado, sin casco y con cara de héroe.»" },
            mood: "smile", end: "lapiz-retrato",
          },
        ],
      },
      "lapiz-nota": {
        who: "ruben", mood: "smile",
        line: {
          A: "Rubén lee lo que escribiste. «Perfecto. ¿Y ahora qué hacemos con el papel y con mi tobillo?»",
          B: "Rubén lee lo que escribiste y asiente. «Perfecto. ¿Y ahora qué hacemos con el papel y con mi tobillo?»",
          C: "Rubén lee tu letra con aprobación. «Perfecto. Ahora dime qué hacemos con este papel, y de paso con mi tobillo.»",
        },
        options: [
          {
            id: "puerta",
            say: { A: "Pego la nota en la puerta del 40 y te acompaño a la clínica.", B: "Pego la nota en la puerta del 40 y después te acompaño a la clínica.", C: "Dejo la nota en la puerta del 40 y luego te acompaño a la clínica." },
            reply: { A: "Rubén sonríe. «Trato hecho. Y la pizza se queda aquí, de recuerdo.»", B: "Rubén sonríe. «Trato hecho. La pizza se queda aquí de recuerdo.»", C: "Rubén asiente. «Trato hecho. La pizza queda aquí como monumento al accidente.»" },
            mood: "smile", end: "lapiz-puerta",
          },
          {
            id: "jefe",
            say: { A: "Escribe aquí el número de tu jefe. Lo llamo yo.", B: "Escribe aquí el número de tu jefe y lo llamo yo.", C: "Anota aquí el número de tu jefe; lo llamo yo y le explico." },
            reply: { A: "Rubén escribe un número. «Se llama Óscar. Dile que no fue mi culpa.»", B: "Rubén escribe un número con mano temblorosa. «Óscar. Dile que no fue culpa mía.»", C: "Rubén escribe el número y lo subraya dos veces. «Óscar. Dile que no fue culpa mía, y díselo con esa voz seria que tienes.»" },
            mood: "worried", end: "lapiz-jefe",
          },
          {
            id: "parte",
            say: { A: "Firma aquí. Es un papel del accidente, para el seguro.", B: "Firma aquí: es un parte del accidente, para el seguro.", C: "Firma aquí: un parte del accidente con hora y matrícula, para el seguro." },
            reply: { A: "Rubén firma. «Qué formal. Ahora llama a Óscar, por favor.»", B: "Rubén firma con cuidado. «Qué formal eres. Ahora, por favor, llama a Óscar.»", C: "Rubén firma con una floritura. «Un parte y todo. Ahora llama a Óscar, que la burocracia ya está hecha.»" },
            mood: "smile", end: "lapiz-jefe",
          },
        ],
      },
      "libro-inicio": {
        who: "ruben", mood: "laugh",
        line: {
          A: "Rubén ve el libro y, con el pie hinchado, se ríe. «¿Un libro? ¿Me vas a leer un cuento o a curarme?»",
          B: "Rubén ve el libro en tu mano y, con el tobillo hinchado, se echa a reír. «¿Un libro? ¿Me vas a leer un cuento o a curarme?»",
          C: "Rubén ve el libro y, con el tobillo como un melón, se ríe hasta que le duele. «¿Un libro? ¿Me lees un cuento antes de dormir o me llevas al médico?»",
        },
        options: [
          {
            id: "elevar",
            say: { A: "Las dos cosas. Primero, pon el pie encima del libro, en alto.", B: "Las dos cosas. Primero, apoya el pie sobre el libro, en alto.", C: "Ambas. Primero, el pie en alto sobre el libro, que para eso sirve la literatura." },
            reply: { A: "Rubén pone el pie sobre el libro. «Mi tobillo sobre una novela. Qué elegante.»", B: "Rubén apoya el pie sobre el libro. «Mi tobillo sobre una novela. Qué elegante.»", C: "Rubén coloca el pie sobre el libro con solemnidad. «Mi tobillo sobre una novela. Es lo más culto que hago en años.»" },
            mood: "smile", next: "libro-lectura",
          },
          {
            id: "leer",
            say: { A: "Te leo un poco mientras llega la ayuda.", B: "Te leo un trozo mientras llega la ayuda.", C: "Te leo un fragmento mientras llega la ayuda; nada más rápido que un libro." },
            reply: { A: "Rubén dice: «Si es de amor, me duele más.» Pero escucha.", B: "Rubén protesta: «Si es de amor, me va a doler más.» Pero escucha.", C: "«Si es de amor, me va a doler más que el tobillo», dice Rubén. Pero cierra los ojos y escucha." },
            mood: "smile", next: "libro-lectura",
          },
          {
            id: "buscar",
            say: { A: "Un momento. Busco el capítulo «tobillos».", B: "Un momento, busco el capítulo de las torceduras.", C: "Un segundo: consulto el capítulo dedicado a las torceduras." },
            reply: { A: "Rubén se ríe. «¡Es una novela! ¡No hay capítulo de tobillos!»", B: "Rubén se ríe a carcajadas. «¡Es una novela! ¡No tiene capítulo de torceduras!»", C: "Rubén se ríe con ganas. «¡Es una novela! Si tiene capítulo de torceduras, es de las malas.»" },
            mood: "laugh", next: "libro-lectura",
          },
        ],
      },
      "libro-lectura": {
        who: "ruben", mood: "smile",
        line: {
          A: "Rubén escucha dos páginas con el pie sobre el libro. «Está bueno. ¿Cómo termina? No, no me lo digas. ¿Me lo prestas?»",
          B: "Rubén escucha dos páginas con el pie sobre el libro, sin quejarse. «Está bueno, ¿eh? ¿Cómo termina? No, no me lo cuentes. ¿Me lo prestas?»",
          C: "Rubén escucha dos páginas enteras con el pie en alto y cara de estar en otro sitio. «Pues está bueno. ¿Cómo termina? No, no me lo cuentes. ¿Me lo prestas?»",
        },
        options: [
          {
            id: "regalar",
            say: { A: "Te lo regalo. Pero vamos a la clínica.", B: "Te lo regalo. Pero ahora vamos a la clínica.", C: "Te lo regalo, con una condición: ahora vamos a la clínica." },
            reply: { A: "Rubén lo abraza. «Un libro y una clínica. Trato.»", B: "Rubén se abraza al libro. «Un libro y una clínica. Trato hecho.»", C: "Rubén se abraza al libro como a un tesoro. «Libro y clínica. Es el mejor trato de mi vida laboral.»" },
            mood: "smile", end: "libro-regalo",
          },
          {
            id: "hija",
            say: { A: "Es para tu hija. Dáselo tú, cuando te cure el tobillo.", B: "Es para tu hija. Dáselo tú, cuando te cure el tobillo.", C: "Es para tu hija: entrégaselo tú, cuando te haya curado el tobillo." },
            reply: { A: "Rubén se emociona. «Le va a encantar. Vamos a la clínica.»", B: "A Rubén se le humedecen los ojos. «Le va a encantar. Vamos, que me cure ella.»", C: "Rubén parpadea rápido. «Le va a encantar. Vamos a la clínica: que me cure y después que lea.»" },
            mood: "love", end: "libro-hija",
          },
          {
            id: "manana",
            say: { A: "Es prestado. Mañana te leo más. Ahora llamo a una ambulancia.", B: "Es de la biblioteca. Mañana te leo más; ahora llamo a una ambulancia.", C: "Es de la biblioteca, así que mañana continuamos. Ahora llamo a una ambulancia." },
            reply: { A: "Rubén acepta. «Bueno. Pero mañana, capítulo dos.»", B: "Rubén acepta, resignado. «Está bien. Pero mañana, capítulo dos, sin excusas.»", C: "Rubén se rinde. «Llama. Pero mañana, capítulo dos, y sin saltarte páginas.»" },
            mood: "worried", end: "ambulancia",
          },
        ],
      },
      "corazon-inicio": {
        who: "ruben", mood: "love",
        line: {
          A: "Rubén ve el corazón y respira mejor. «No sé qué es eso, pero ya me duele menos. ¿Quién eres?»",
          B: "Rubén ve el corazón y se le cae la cara de alivio. «No sé qué es eso que llevas, pero ya me duele menos. ¿Quién eres?»",
          C: "Rubén ve el corazón y se le relaja hasta el tobillo. «No sé qué llevas ahí, pero me duele la mitad desde que llegaste. ¿Quién eres?»",
        },
        options: [
          {
            id: "preguntar",
            say: { A: "Alguien que pasaba. Cuéntame qué pasó.", B: "Alguien que pasaba por aquí. Cuéntame qué te pasó.", C: "Alguien que pasaba y no supo seguir de largo. Cuéntame qué pasó." },
            reply: { A: "Rubén cuenta: un auto, la bici, el tobillo. «Y aquí estoy. Contigo.»", B: "Rubén lo cuenta despacio: un auto, un frenazo, la bici al suelo. «Y aquí estoy. Contigo, que ya es algo.»", C: "Rubén lo cuenta sin dramatizar: auto, frenazo, bici, acera. «Y aquí estoy. Contigo, que no estaba en el plan, pero se agradece.»" },
            mood: "love", next: "corazon-hija",
          },
          {
            id: "mano",
            say: { A: "Dame la mano. Vamos a levantarte despacio.", B: "Dame la mano. Te levanto despacio.", C: "Dame la mano y te levanto despacio, sin heroicidades." },
            reply: { A: "Rubén te da la mano y se levanta a la pata coja. «Mi hija me levanta así.»", B: "Rubén se agarra a tu mano y se pone de pie sobre un solo pie. «Mi hija me levanta igual.»", C: "Rubén toma tu mano y se alza sobre un pie, con una sonrisa rara. «Mi hija me levanta exactamente así.»" },
            mood: "love", next: "corazon-hija",
          },
          {
            id: "abrazo",
            say: { A: "Primero un abrazo. Después, el tobillo.", B: "Primero, un abrazo. Después vemos el tobillo.", C: "Primero un abrazo; el tobillo puede esperar un minuto." },
            reply: { A: "Rubén te abraza desde el suelo. Se ríe y llora un poco.", B: "Rubén te abraza desde el suelo, riendo y llorando a la vez.", C: "Rubén te abraza desde el suelo con una fuerza inesperada, entre la risa y las lágrimas." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón otra vez.", B: "Usas el corazón otra vez.", C: "Usas el corazón otra vez." },
            say: { A: "Tranquilo. No estás solo. Estoy aquí.", B: "Tranquilo, no estás solo. Me quedo contigo.", C: "Tranquilo, no estás solo. Me quedo contigo el tiempo que haga falta." },
            reply: { A: "Rubén sonríe. «Gracias. Ya no me duele tanto.»", B: "Rubén sonríe de oreja a oreja. «Gracias. Juro que ya me duele menos.»", C: "Rubén sonríe con la cara entera. «Gracias. No sé qué haces, pero el tobillo lo nota.»" },
            mood: "love", next: "corazon-hija",
          },
        },
      },
      "corazon-hija": {
        who: "ruben", mood: "love",
        line: {
          A: "Rubén saca el teléfono. «¿Llamo a mi hija? No quiero preocuparla. Pero quiero que sepa que estoy bien.»",
          B: "Rubén saca el teléfono y lo mira. «¿Llamo a mi hija? No quiero preocuparla, pero quiero que sepa que estoy bien.»",
          C: "Rubén saca el teléfono y duda. «¿Llamo a mi hija? No quiero asustarla, pero necesito que sepa que estoy bien. Es complicado ser padre.»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Llámala. Yo hablo con ella si quieres.", B: "Llámala. Si quieres, hablo yo con ella.", C: "Llámala. Si prefieres, se lo explico yo, con calma." },
            reply: { A: "Su hija contesta. Tú explicas todo. Ella se ríe de alivio.", B: "Su hija contesta al primer tono. Le explicas todo con calma y ella se ríe de alivio.", C: "Su hija contesta al primer tono. Le cuentas lo ocurrido con calma y, al final, se ríe de puro alivio." },
            mood: "love", end: "corazon-llamada",
          },
          {
            id: "clinica",
            say: { A: "Llámala desde la clínica. Te acompaño.", B: "Llámala desde la clínica. Te acompaño ahora mismo.", C: "Llámala desde la clínica, con buenas noticias. Te acompaño." },
            reply: { A: "Rubén guarda el teléfono. «Buena idea. Vamos.»", B: "Rubén guarda el teléfono y sonríe. «Buena idea. Vamos despacio.»", C: "Rubén guarda el teléfono. «Con buenas noticias. Me gusta. Vamos.»" },
            mood: "smile", end: "clinica",
          },
          {
            id: "abrazo",
            say: { A: "Primero abrázame. Estás temblando.", B: "Primero abrázame, que estás temblando.", C: "Primero abrázame, que estás temblando y no es de frío." },
            reply: { A: "Rubén te abraza fuerte. «Gracias. Gracias.»", B: "Rubén te abraza con fuerza. «Gracias. De verdad, gracias.»", C: "Rubén te abraza como si fueras familia. «Gracias. No tienes idea.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {
      clinica: { text: { A: "Vas con Rubén a la clínica. Él camina despacio y te cuenta de su hija.", B: "Acompañas a Rubén hasta la clínica. Por el camino te cuenta que su hija estudia medicina.", C: "Acompañas a Rubén a la clínica. Por el camino descubres que su hija estudia medicina y que él jamás le hace caso." }, change: "se-va", flag: "ruben-ayudado", recap: "Acompañaste a Rubén a la clínica." },
      pizza: { text: { A: "Llevas la pizza al número 40. Rubén espera sentado y te saluda.", B: "Entregas la pizza en el número 40. Cuando vuelves, Rubén te espera con un pulgar arriba.", C: "Entregas la pizza en el número 40. La clienta no pregunta nada; Rubén, en cambio, quiere todos los detalles." }, change: "sonrie", flag: "ruben-ayudado", recap: "Entregaste la pizza de Rubén." },
      ambulancia: { text: { A: "Llamas a la ambulancia. Llega en pocos minutos. Rubén te dice: «Gracias».", B: "Llamas a emergencias y explicas dónde están. La ambulancia llega enseguida.", C: "Llamas a emergencias y describes la situación con calma. La ambulancia llega antes de lo que esperabas." }, change: "ambulancia", flag: "ruben-ayudado", recap: "Llamaste a una ambulancia para Rubén." },
      policia: { text: { A: "Llega la policía. Explicas todo. Al final, todos se calman.", B: "Llega la policía. Tardas un buen rato en explicar el malentendido.", C: "Llega un coche de policía. Explicar que solo querías ayudar te lleva más tiempo y más paciencia de lo previsto." }, change: "policia", recap: "Un malentendido con Rubén terminó con la policía." },
      solo: { text: { A: "Te vas. Rubén llama a un amigo por teléfono.", B: "Te alejas. Desde la esquina ves que Rubén llama a alguien.", C: "Te alejas. Desde la esquina ves que Rubén, por fin, pide ayuda a alguien que no da miedo." }, change: "llama", recap: "Te alejaste de Rubén." },
      "cuchillo-clinica": { text: { A: "Vas con Rubén a la clínica. Él mira tu bolsillo todo el camino, donde está el cuchillo.", B: "Acompañas a Rubén a la clínica. Durante todo el camino vigila el bolsillo donde guardaste el cuchillo.", C: "Acompañas a Rubén a la clínica. No deja de vigilar el bolsillo del cuchillo, y a la vez te cuenta que su hija estudia medicina." }, change: "se-va", flag: "ruben-ayudado", recap: "Después del susto del cuchillo, acompañaste a Rubén a la clínica." },
      "cuchillo-policia": { text: { A: "Llega la policía. Ven el cuchillo y el cúter. Explicas todo durante una hora.", B: "Llega la policía y encuentra un cuchillo, un cúter y dos personas asustadas. Explicar el malentendido lleva una hora.", C: "Llega una patrulla y encuentra un cuchillo, un cúter, una pizza y dos versiones distintas. Explicarlo todo lleva una hora y mucha paciencia." }, change: "policia", recap: "Tu cuchillo y el cúter de Rubén terminaron con la policía." },
      "cuchillo-vecinos": { text: { A: "Las ventanas se encienden. Los vecinos gritan. Te vas rápido con el cuchillo guardado.", B: "Todas las ventanas de la calle se encienden y los vecinos gritan desde arriba. Te alejas deprisa, con el cuchillo bien guardado.", C: "La calle entera se ilumina y los vecinos te despiden a gritos desde los balcones. Te alejas con el cuchillo guardado y la reputación perdida." }, change: "luz", recap: "Los vecinos te vieron con el cuchillo y despertaron la calle." },
      "pistola-patrulla": { text: { A: "La patrulla para. Los agentes ven la pistola. Pasas la noche explicando.", B: "La patrulla se detiene y los agentes ven la pistola. Pasas el resto de la noche explicando por qué la llevas.", C: "La patrulla frena en seco y los agentes ven la pistola antes que a Rubén. El resto de la noche lo pasas explicando por qué la llevas." }, change: "policia", recap: "Tu pistola terminó con una patrulla y muchas preguntas." },
      "pistola-clinica": { text: { A: "Vas con Rubén a la clínica. Él camina a tu lado, pero lejos de tu chaqueta.", B: "Acompañas a Rubén a la clínica. Camina apoyado en ti, pero lo más lejos posible de tu chaqueta.", C: "Acompañas a Rubén a la clínica. Se apoya en tu brazo y, a la vez, mantiene la mayor distancia posible con tu chaqueta." }, change: "se-va", flag: "ruben-ayudado", recap: "Con la pistola guardada, acompañaste a Rubén a la clínica." },
      "pistola-solo": { text: { A: "Te vas. Rubén llama a alguien con el teléfono en la mano temblando.", B: "Te alejas. Rubén llama a alguien con las manos todavía temblorosas.", C: "Te alejas. Rubén marca un número con las manos aún temblando, sin dejar de mirar tu espalda." }, change: "llama", recap: "Dejaste a Rubén asustado por tu pistola." },
      "granada-cae": { text: { A: "Rubén cae al suelo otra vez. Una vecina llama a una ambulancia y a la policía.", B: "Rubén cae de nuevo sobre el tobillo. Una vecina llama a una ambulancia y, por si acaso, a la policía.", C: "Rubén vuelve a caer sobre el tobillo, gritando. Una vecina llama a una ambulancia y, con tono de experta, también a la policía." }, change: "cae", recap: "Rubén intentó huir de tu granada y se cayó otra vez." },
      "granada-risa": { text: { A: "Todos se ríen. Una vecina te da la granada y Rubén un trozo de pizza fría.", B: "Todos se ríen. Una vecina te devuelve la granada y Rubén te ofrece un trozo de pizza fría.", C: "Las risas duran un buen rato. Una vecina te devuelve la granada con cara de no volver a creer nada y Rubén te ofrece pizza fría." }, change: "sonrie", recap: "Los vecinos comprobaron que tu granada era de utilería." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina la calle. La policía cierra el barrio. Nadie duerme esta noche.", B: "Un helicóptero ilumina la calle entera. La policía cierra el barrio y esta noche no duerme nadie.", C: "Un helicóptero barre la calle con su foco mientras la policía acordona el barrio. Nadie duerme esta noche, y todos saben por qué." }, change: "helicoptero", recap: "Tu granada terminó con un helicóptero sobre el Barrio Viejo." },
      "gas-policia": { text: { A: "Llega la policía. Ven tu gas pimienta y a Rubén en el suelo. Explicas durante mucho tiempo.", B: "Llega la policía y encuentra tu gas pimienta apuntando a un repartidor caído. Explicar la situación lleva un buen rato.", C: "Llega una patrulla y encuentra un gas pimienta apuntando a un repartidor en el suelo. Explicar que querías ayudar lleva más tiempo del razonable." }, change: "policia", recap: "Tu gas pimienta y el miedo de Rubén terminaron con la policía." },
      "gas-tregua": { text: { A: "Rubén y tú se ríen. Ayudas a Rubén con la bici y él te regala la pizza.", B: "Rubén y tú se ríen de la escena. Lo ayudas con la bici y, a cambio, te regala la pizza aplastada.", C: "Rubén y tú se ríen del duelo de gases. Lo ayudas con la bici y te regala la pizza, aplastada pero sincera." }, change: "sonrie", recap: "Rubén y tú guardaron el gas pimienta al mismo tiempo." },
      "gas-clinica": { text: { A: "Vas con Rubén a la clínica. Los dos con el gas en el bolsillo.", B: "Acompañas a Rubén a la clínica, cada uno con su gas pimienta en el bolsillo.", C: "Acompañas a Rubén a la clínica, los dos con el gas pimienta en el bolsillo y una desconfianza compartida." }, change: "se-va", flag: "ruben-ayudado", recap: "Con el gas guardado, acompañaste a Rubén a la clínica." },
      "lapiz-retrato": { text: { A: "Terminas el dibujo. Rubén se ríe mucho y lo guarda en la caja de la pizza.", B: "Terminas el retrato. Rubén se ríe tanto que se olvida del tobillo y guarda el dibujo en la caja de la pizza.", C: "Terminas el retrato. Rubén se ríe hasta olvidar el tobillo y guarda el dibujo en la caja de la pizza, junto al pedido." }, change: "sonrie", recap: "Dibujaste a Rubén con tu lápiz para distraerlo del dolor." },
      "lapiz-puerta": { text: { A: "Pegas la nota en la puerta del 40. Se enciende la luz y el cliente baja a ayudar.", B: "Pegas la nota en la puerta del 40. Se enciende una luz y el cliente baja a ayudar a Rubén.", C: "Pegas la nota en la puerta del 40. Una luz se enciende en el segundo piso y el cliente baja, pizza fría incluida, a ayudar a Rubén." }, change: "luz", recap: "Tu nota a lápiz hizo bajar al cliente de Rubén." },
      "lapiz-jefe": { text: { A: "Llamas a Óscar y lees tu nota. Él manda otro repartidor y un taxi.", B: "Llamas a Óscar y le lees tu nota con calma. Manda otro repartidor y un taxi para Rubén.", C: "Llamas a Óscar y le lees el parte con voz de notario. Manda otro repartidor y un taxi para Rubén, sin discutir." }, change: "llama", recap: "Llamaste al jefe de Rubén con la nota que escribiste." },
      "libro-regalo": { text: { A: "Vas con Rubén a la clínica. Él lleva tu libro debajo del brazo.", B: "Acompañas a Rubén a la clínica. Lleva tu libro bajo el brazo como un premio.", C: "Acompañas a Rubén a la clínica. Lleva tu libro bajo el brazo y planea leerlo en la sala de espera." }, change: "se-va", flag: "ruben-ayudado", recap: "Le regalaste tu libro a Rubén de camino a la clínica." },
      "libro-hija": { text: { A: "Rubén va a la clínica con el libro para su hija. Te saluda desde lejos.", B: "Rubén se va a la clínica con el libro para su hija y te saluda desde la esquina.", C: "Rubén se aleja hacia la clínica con el libro para su hija y te saluda desde la esquina, cojeando pero feliz." }, change: "se-va", flag: "ruben-ayudado", recap: "Rubén se llevó tu libro para su hija." },
      "corazon-abrazo": { text: { A: "Rubén y tú se abrazan en la acera. Después, van juntos a la clínica.", B: "Rubén y tú se abrazan en mitad de la acera. Después, van juntos a la clínica, sin prisa.", C: "Rubén y tú se abrazan en la acera, con la bici tirada y la pizza mirando. Después, van juntos a la clínica, sin prisa." }, change: "abraza", recap: "Rubén te abrazó antes de ir a la clínica." },
      "corazon-llamada": { text: { A: "La hija de Rubén viene a buscarlo. Te da las gracias con un abrazo.", B: "La hija de Rubén llega en diez minutos a buscarlo. Te da las gracias con un abrazo largo.", C: "La hija de Rubén aparece en diez minutos, con bata de estudiante. Te da las gracias con un abrazo que vale una noche." }, change: "llama", recap: "Llamaste a la hija de Rubén y ella vino a buscarlo." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces si ves a alguien con un cuchillo en la calle?", B: "¿Qué hiciste la última vez que te asustaste de verdad en la calle?", C: "¿Cómo reaccionas cuando alguien malinterpreta tus intenciones en un momento tenso?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Tienes miedo de las armas?", B: "¿Qué harías si alguien te apuntara con un arma?", C: "¿Hasta qué punto obedecerías a una persona armada para proteger a otra?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué haces cuando hay mucho ruido y gritos en tu calle?", B: "¿Cuál fue la situación más absurda que viviste en la calle?", C: "¿Cómo se comporta la gente de tu barrio cuando cunde el pánico?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Llevas algo para defenderte por la noche?", B: "¿En qué lugares de tu ciudad desconfías de la gente y por qué?", C: "¿Dónde termina la prevención razonable y empieza la paranoia?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes notas para otras personas?", B: "¿Cuándo fue la última vez que dejaste una nota escrita a mano?", C: "¿Qué peso tiene un papel firmado en los conflictos cotidianos de tu vida?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Qué libro regalas a un amigo?", B: "¿Qué libro le regalarías a alguien que pasa por un mal momento?", C: "¿Puede un libro consolar mejor que una conversación?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿A quién llamas cuando te pasa algo malo?", B: "¿Quién te cuida cuando estás enfermo o lastimado?", C: "¿Qué significa para ti que un desconocido te trate con ternura?" } },
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
      "cuchillo-inicio": {
        who: "nadia", mood: "scared",
        line: {
          A: "Nadia ve el cuchillo en tu mano y da un paso atrás con el gancho en alto. «¡No te acerques! ¡Es mi auto! ¿Qué haces con ese cuchillo?»",
          B: "Nadia ve el cuchillo antes de verte la cara. Retrocede hasta el farol con el gancho levantado. «¡No te acerques así! ¡Es mi auto! ¿Qué haces con ese cuchillo?»",
          C: "Nadia ve el cuchillo, se pega al farol y levanta el gancho como si sirviera de algo. «¡Ni un paso más! El auto es mío. ¿Y tú qué haces de noche con un cuchillo?»",
        },
        options: [
          {
            id: "goma",
            say: { A: "Es para la goma de la ventana. Mira, te ayudo.", B: "Es para separar la goma de la ventana. Mira, puedo ayudarte.", C: "Es para la goma de la ventanilla: con la punta, el gancho entra mejor. Déjame ayudarte." },
            reply: { A: "Nadia no baja el gancho. «¿La goma? Bueno… Pero tú de ese lado.»", B: "Nadia no baja el gancho. «¿La goma? Puede ser. Pero tú te quedas de ese lado del auto.»", C: "Nadia no baja el gancho ni un centímetro. «La goma, claro. De acuerdo, pero tú trabajas desde ese lado y yo vigilo desde este.»" },
            mood: "worried", next: "cuchillo-ventana",
          },
          {
            id: "guardar",
            say: { A: "Perdón, lo guardo. ¿Qué pasa con el auto?", B: "Perdona, lo guardo ahora mismo. ¿Qué pasa con el auto?", C: "Lo guardo ahora mismo; perdona la entrada. ¿Qué pasa con el auto?" },
            reply: { A: "Nadia respira. «Las llaves están adentro. Y me diste un susto enorme.»", B: "Nadia respira hondo. «Dejé las llaves adentro. Y tú casi me matas del susto con eso.»", C: "Nadia suelta el aire despacio. «Llaves adentro, yo afuera. Y tú con un cuchillo: la noche perfecta.»" },
            mood: "worried", next: "cuchillo-ventana",
          },
          {
            id: "acusar",
            say: { A: "¿Y tú qué haces con ese gancho? ¿Es tu auto?", B: "¿Y tú qué haces con ese gancho? ¿Seguro que ese auto es tuyo?", C: "¿Y tú qué haces con ese gancho en una ventanilla ajena? ¿Seguro que es tu auto?" },
            reply: { A: "Nadia grita: «¡Socorro! ¡Un hombre con un cuchillo!» Una ventana se enciende. Alguien llama a la policía.", B: "Nadia grita con todas sus fuerzas: «¡Socorro! ¡Un hombre con un cuchillo!» Se enciende una ventana y una voz dice que ya llamó a la policía.", C: "Nadia grita para toda la calle: «¡Socorro! ¡Me quiere robar con un cuchillo!» Una ventana se ilumina y una voz anuncia que la policía ya viene." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-ventana": {
        who: "nadia", mood: "worried",
        line: {
          A: "Nadia no suelta el gancho. «Las llaves y mi medicina están adentro. Si quieres ayudar, usa el cuchillo en la goma. Pero yo me quedo de este lado.»",
          B: "Nadia sigue con el gancho en la mano. «Las llaves y mi medicina para la migraña están adentro. Si de verdad quieres ayudar, usa el cuchillo en la goma. Yo me quedo de este lado.»",
          C: "Nadia no suelta el gancho ni la desconfianza. «Llaves y pastillas para la migraña, ahí dentro. Si quieres ayudar, el cuchillo va a la goma de la ventanilla y tú te quedas de ese lado. Son mis condiciones.»",
        },
        options: [
          {
            id: "abrir",
            say: { A: "Está bien. Separo la goma con la punta. Mete el gancho ahora.", B: "De acuerdo. Separo la goma con la punta y tú metes el gancho ahora.", C: "Acepto las condiciones. Separo la goma con la punta; mete el gancho ahora, despacio." },
            reply: { A: "El gancho entra. Clic. Nadia abre la boca. «¡Se abrió!»", B: "El gancho entra sin esfuerzo. Un clic. Nadia se queda con la boca abierta. «¡Se abrió! ¡Con tu cuchillo!»", C: "El gancho entra como si lo hubiera hecho toda la vida. Clic. Nadia se tapa la boca. «Se abrió. Con el cuchillo. No sé si darte las gracias o seguir asustada.»" },
            mood: "surprised", end: "cuchillo-abierto",
          },
          {
            id: "cerrajero",
            say: { A: "Mejor no. Guardo el cuchillo y llamo a un cerrajero.", B: "Mejor no arriesgarnos. Guardo el cuchillo y llamo a un cerrajero.", C: "Mejor no forzar nada. Guardo el cuchillo y llamo a un cerrajero de guardia." },
            reply: { A: "Nadia baja el gancho. «Gracias. Y gracias por guardarlo.»", B: "Nadia baja el gancho por fin. «Gracias. Y gracias, sobre todo, por guardar eso.»", C: "Nadia baja el gancho y los hombros. «Gracias. Y gracias, sobre todo, por guardar el cuchillo antes de hablar.»" },
            mood: "smile", end: "cerrajero",
          },
          {
            id: "irse",
            say: { A: "Tienes razón. Me voy. Perdón por el susto.", B: "Tienes razón, mejor me voy. Perdón por el susto.", C: "Tienes razón, lo mejor es que me vaya. Perdón por el susto." },
            reply: { A: "Nadia no baja el gancho hasta que te vas.", B: "Nadia no baja el gancho hasta que doblas la esquina.", C: "Nadia mantiene el gancho en alto hasta que desapareces de su vista." },
            mood: "angry", end: "molesta",
          },
        ],
      },
      "pistola-inicio": {
        who: "nadia", mood: "terror",
        line: {
          A: "Nadia ve la pistola, suelta el gancho y levanta las manos. «¡No dispares! ¡Es mi auto! ¡Los papeles están… adentro!»",
          B: "Nadia ve la pistola, suelta el gancho y levanta las manos temblando. «¡No dispares, por favor! ¡Es mi auto! ¡Tengo los papeles… adentro, con las llaves!»",
          C: "Nadia ve la pistola, suelta el gancho y levanta las manos tan rápido que se golpea con el retrovisor. «¡No dispares! Es mi auto, lo juro. Los papeles están adentro, con las llaves, con todo.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Baja las manos. No soy ladrón ni policía. La guardo.", B: "Baja las manos. No soy ni ladrón ni policía. La guardo ahora.", C: "Baja las manos, por favor. No soy ladrón ni policía. La guardo." },
            reply: { A: "Nadia baja las manos despacio. «Bueno… Soy Nadia. Las llaves están adentro.»", B: "Nadia baja las manos muy despacio. «Bueno… Soy Nadia. Dejé las llaves adentro. Y mi medicina.»", C: "Nadia baja las manos milímetro a milímetro. «Soy Nadia. Llaves adentro, medicina adentro, yo afuera. Y ahora, además, con el corazón a mil.»" },
            mood: "scared", next: "pistola-papeles",
          },
          {
            id: "placa",
            say: { A: "Policía. Documentos, por favor.", B: "Policía. Sus documentos, por favor.", C: "Policía. Documentos del vehículo, por favor." },
            reply: { A: "Nadia llora. «¡Están adentro!» Un vecino llama a la policía de verdad.", B: "Nadia se echa a llorar. «¡Están adentro, con las llaves!» Desde una ventana, un vecino llama a la policía de verdad.", C: "Nadia rompe a llorar. «¡Están adentro, con las llaves, con mi vida!» Un vecino, desde el balcón, llama a la policía de verdad." },
            mood: "sad", end: "pistola-patrulla",
          },
          {
            id: "ayudar",
            say: { A: "Tranquila. Te ayudo con el auto. Baja las manos.", B: "Tranquila. Te ayudo con el auto. Puedes bajar las manos.", C: "Tranquila. Vengo a ayudarte con el auto. Baja las manos." },
            reply: { A: "Nadia baja las manos. «¿Con la pistola? No, gracias. Me voy caminando.»", B: "Nadia baja las manos sin dejar de mirar el arma. «¿Ayuda con pistola? No, gracias. Me voy caminando.»", C: "Nadia baja las manos y retrocede. «¿Ayuda armada? No, gracias. Prefiero caminar hasta casa con migraña.»" },
            mood: "scared", end: "pistola-huye",
          },
        ],
      },
      "pistola-papeles": {
        who: "nadia", mood: "scared",
        line: {
          A: "Nadia no se acerca. «¿Por qué llevas un arma? En este barrio eso termina mal. Mis llaves están ahí, y mi medicina.»",
          B: "Nadia se queda a dos metros. «¿Por qué llevas un arma? En este barrio eso siempre termina mal. Mis llaves están ahí, y mi medicina para la migraña.»",
          C: "Nadia mantiene la distancia. «¿Se puede saber por qué llevas un arma? En este barrio eso termina mal siempre. Mis llaves están ahí dentro, con las pastillas para la migraña.»",
        },
        options: [
          {
            id: "gancho",
            say: { A: "Dame el gancho. Lo abro yo. Sin arma, sin problemas.", B: "Dame el gancho. Lo abro yo. Sin arma y sin problemas.", C: "Pásame el gancho: lo abro yo. El arma, guardada; los problemas, fuera." },
            reply: { A: "Nadia te da el gancho desde lejos. «Más a la izquierda… ¡Ahí!» Clic.", B: "Nadia te pasa el gancho con el brazo estirado. «Más abajo… a la izquierda… ¡Ahí!» Suena un clic.", C: "Nadia te alcanza el gancho con el brazo estirado al máximo. «Abajo. Izquierda. Gira. ¡Ahí!» Un clic glorioso." },
            mood: "surprised", end: "pistola-abierto",
          },
          {
            id: "explicar",
            say: { A: "Me robaron una vez aquí. Por eso la llevo.", B: "Me asaltaron una vez en esta calle. Por eso la llevo.", C: "Me asaltaron en esta misma calle hace un año. Por eso la llevo." },
            reply: { A: "Nadia asiente. «A mí también. Yo compré un gancho. Llama a un cerrajero, por favor.»", B: "Nadia asiente despacio. «A mí también me asaltaron. Pero yo compré un gancho, no un arma. Llama a un cerrajero, por favor.»", C: "Nadia asiente. «A mí también. Pero yo me compré un gancho, no una pistola. Llama a un cerrajero, por favor, y quédate lejos.»" },
            mood: "worried", end: "cerrajero",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Perdón.", B: "Mejor me voy. Perdona el susto.", C: "Lo mejor es que me vaya. Perdona el susto." },
            reply: { A: "Nadia recoge el gancho. «Sí. Vete, por favor.»", B: "Nadia recoge el gancho sin mirarte. «Sí. Vete, por favor.»", C: "Nadia recoge el gancho del suelo. «Sí. Vete, por favor, y no vuelvas por esta calle.»" },
            mood: "angry", end: "molesta",
          },
        ],
      },
      "granada-inicio": {
        who: "nadia", mood: "terror",
        line: {
          A: "Nadia ve la granada, grita y se mete debajo del auto. «¡¡Una bomba!! ¡¡Que alguien llame a la policía!!»",
          B: "Nadia ve la granada, suelta un grito y se mete debajo del auto en un segundo. «¡¡Una bomba!! ¡¡Que alguien llame a la policía!!»",
          C: "Nadia ve la granada, grita como en una película de terror y desaparece debajo del auto. «¡¡Una bomba!! ¡¡Policía!! ¡¡Que alguien llame a quien sea!!»",
        },
        options: [
          {
            id: "calmar",
            say: { A: "No es una bomba. Es decorativa. Sal de ahí.", B: "No es una bomba, es decorativa. Sal de ahí, por favor.", C: "No es una bomba, es puramente decorativa. Sal de ahí, por favor." },
            reply: { A: "Nadia, desde debajo del auto: «¿Decorativa? ¿Quién decora con eso?»", B: "Nadia responde desde debajo del auto: «¿Decorativa? ¿Quién decora con una granada?»", C: "Nadia contesta desde debajo del auto: «¿Decorativa? ¿Qué clase de casa decoras tú con granadas?»" },
            mood: "scared", next: "granada-debajo",
          },
          {
            id: "broma",
            say: { A: "Tranquila. No explota. Creo.", B: "Tranquila, no explota. Creo.", C: "Tranquila, no explota. En principio." },
            reply: { A: "«¿¡Crees!?», grita Nadia desde el suelo.", B: "«¿¡Cómo que crees!?», grita Nadia desde debajo del auto.", C: "«¿¡En principio!?», chilla Nadia desde debajo del auto. «¡Eso no tranquiliza a nadie!»" },
            mood: "scared", next: "granada-debajo",
          },
          {
            id: "dejar",
            say: { A: "La dejo en el techo del auto y me alejo.", B: "La dejo en el techo del auto y me alejo despacio.", C: "La dejo sobre el techo del auto y me alejo con las manos a la vista." },
            reply: { A: "Nadia grita más. Los vecinos salen a la calle en pijama.", B: "Nadia grita todavía más. Los vecinos salen a la calle en pijama y alguien habla de evacuar el edificio.", C: "Nadia grita con renovadas fuerzas. Los vecinos bajan en pijama y un hombre con bata organiza la evacuación del edificio." },
            mood: "scared", end: "granada-evacuacion",
          },
        ],
      },
      "granada-debajo": {
        who: "nadia", mood: "scared",
        line: {
          A: "Nadia habla desde debajo del auto. «Hoy es mi cumpleaños. Las llaves están adentro, me duele la cabeza y ahora hay una granada. ¿Qué más?»",
          B: "Nadia habla desde debajo del auto, sin salir. «Hoy es mi cumpleaños. Las llaves están adentro, tengo migraña y ahora hay una granada. ¿Qué más puede pasar?»",
          C: "Nadia hace balance desde debajo del auto. «Hoy cumplo treinta y cinco. Llaves adentro, migraña, y ahora una granada. Si hay algo más, que venga ya.»",
        },
        options: [
          {
            id: "abrir",
            say: { A: "Te abro el auto con el gancho. La granada se queda lejos.", B: "Te abro el auto con el gancho. La granada se queda lejos, en la acera.", C: "Te abro el auto con el gancho; la granada se queda en la acera, lejos de todo." },
            reply: { A: "Nadia sale despacio. Mueves el gancho. Clic. «¡Se abrió!»", B: "Nadia sale arrastrándose. Mueves el gancho y suena un clic. «¡Se abrió! ¡Y la granada no explotó!»", C: "Nadia sale de debajo del auto sin quitarle los ojos a la granada. Mueves el gancho: clic. «Se abrió. Y seguimos vivos. Qué cumpleaños.»" },
            mood: "surprised", end: "granada-abierto",
          },
          {
            id: "cantar",
            say: { A: "Feliz cumpleaños, Nadia. Guardo la granada y te ayudo.", B: "Feliz cumpleaños, Nadia. Guardo la granada y te ayudo con el auto.", C: "Feliz cumpleaños, Nadia. Guardo la granada ahora mismo y te ayudo con el auto." },
            reply: { A: "Nadia se ríe desde el suelo. «Es el cumpleaños más raro de mi vida.»", B: "Nadia se ríe debajo del auto. «Es el cumpleaños más raro de mi vida. Y mira que tuve algunos.»", C: "Nadia se ríe desde debajo del auto, con la risa que viene después del miedo. «El cumpleaños más raro de mi vida. Y eso que pasé los quince en un hospital.»" },
            mood: "smile", end: "granada-cumple",
          },
          {
            id: "irse",
            say: { A: "Me voy antes de que llegue la policía.", B: "Me voy antes de que llegue la policía. Suerte con el auto.", C: "Me voy antes de que aparezca la policía. Suerte con el auto." },
            reply: { A: "Nadia grita: «¡Se escapa con la bomba!» Suenan sirenas.", B: "Nadia grita desde el suelo: «¡Se escapa con la bomba!» Suenan sirenas a lo lejos.", C: "Nadia grita hacia las ventanas: «¡Se escapa con la bomba!» Las sirenas suenan ya muy cerca." },
            mood: "scared", end: "granada-evacuacion",
          },
        ],
      },
      "gas-inicio": {
        who: "nadia", mood: "angry",
        line: {
          A: "Nadia ve tu gas pimienta y saca otro de su bolso. «¡Yo también tengo! ¡Atrás! ¡Es mi auto!»",
          B: "Nadia ve tu gas pimienta y saca el suyo del bolso en un segundo. «¡Yo también tengo! ¡Atrás! ¡Este auto es mío!»",
          C: "Nadia ve tu gas pimienta y saca uno idéntico del bolso, con la velocidad de quien ya lo usó. «¡Yo también tengo! ¡Atrás! El auto es mío y el gas, también.»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Bajo el mío si bajas el tuyo.", B: "Bajo el mío si tú bajas el tuyo.", C: "Bajo el mío si bajas el tuyo. A la vez." },
            reply: { A: "Los dos bajan el gas. «Soy Nadia. Las llaves están adentro.»", B: "Los dos bajan el gas al mismo tiempo. «Soy Nadia. Dejé las llaves adentro, como una tonta.»", C: "Los dos bajan el gas con la misma cautela. «Nadia. Llaves adentro, yo afuera, gas en la mano. Mi cumpleaños, por cierto.»" },
            mood: "worried", next: "gas-tregua",
          },
          {
            id: "acusar",
            say: { A: "Estás robando ese auto. No te muevas.", B: "Estás robando ese auto. No te muevas.", C: "Estás forzando ese auto y no te vas a mover de ahí." },
            reply: { A: "Nadia aprieta el gas. Te arde la cara. Ella corre.", B: "Nadia aprieta el gas sin dudarlo. Te arde la cara y los ojos. Ella sale corriendo.", C: "Nadia aprieta el gas sin titubear. Fuego en los ojos, en la nariz, en la garganta. Cuando puedes ver, ella ya no está." },
            mood: "pain", end: "gas-rociado",
          },
          {
            id: "explicar",
            say: { A: "Perdón. Este barrio es peligroso. Lo llevo por eso.", B: "Perdona. Este barrio es peligroso y lo llevo por eso.", C: "Perdona. Este barrio es peligroso de noche y lo llevo por eso, nada más." },
            reply: { A: "Nadia asiente. «Y yo. Por eso tengo el mío. Soy Nadia.»", B: "Nadia asiente sin bajar el brazo. «Lo mismo digo. Por eso tengo el mío. Soy Nadia, por cierto.»", C: "Nadia asiente, con el gas todavía apuntando. «Lo mismo digo. Por eso llevo el mío. Nadia, encantada, de lejos.»" },
            mood: "worried", next: "gas-tregua",
          },
        ],
      },
      "gas-tregua": {
        who: "nadia", mood: "worried",
        line: {
          A: "Nadia guarda su gas, pero deja la mano en el bolso. «Dos personas con gas pimienta y un auto cerrado. ¿Ahora qué?»",
          B: "Nadia guarda su gas, pero no saca la mano del bolso. «Dos personas con gas pimienta y un auto cerrado. ¿Y ahora qué hacemos?»",
          C: "Nadia guarda el gas, aunque mantiene la mano dentro del bolso. «Dos desconfiados con gas pimienta y un auto cerrado. ¿Cómo sigue esto?»",
        },
        options: [
          {
            id: "gancho",
            say: { A: "Dame el gancho. Tú vigila con tu gas, yo abro.", B: "Dame el gancho. Tú vigilas con tu gas y yo abro.", C: "Pásame el gancho. Tú vigilas con el gas en la mano y yo abro." },
            reply: { A: "Nadia te da el gancho. «Más abajo… ¡Ahí!» Clic.", B: "Nadia te da el gancho con una mano y vigila con la otra. «Más abajo… a la izquierda… ¡Ahí!» Clic.", C: "Nadia te pasa el gancho sin soltar el bolso. «Abajo. Izquierda. No, la otra. ¡Ahí!» Un clic limpio." },
            mood: "surprised", end: "gas-abierto",
          },
          {
            id: "cerrajero",
            say: { A: "Llamo a un cerrajero. Tú guardas el gas y yo también.", B: "Llamo a un cerrajero. Tú guardas el gas y yo guardo el mío.", C: "Llamo a un cerrajero y, mientras tanto, los dos guardamos el gas." },
            reply: { A: "Nadia saca la mano del bolso. «Trato hecho.»", B: "Nadia saca la mano del bolso por fin. «Trato hecho. Gracias.»", C: "Nadia saca la mano del bolso y respira. «Trato hecho. Qué noche más rara.»" },
            mood: "smile", end: "cerrajero",
          },
          {
            id: "irse",
            say: { A: "Me voy. Cada uno con su gas.", B: "Me voy. Cada uno con su gas, mejor.", C: "Me voy. Cada uno con su gas y en paz." },
            reply: { A: "Nadia no dice nada. Toma el bolso y se va.", B: "Nadia no responde. Agarra el bolso y se aleja rápido.", C: "Nadia no dice una palabra. Agarra el bolso y se aleja sin mirar atrás." },
            mood: "angry", end: "molesta",
          },
        ],
      },
      "lapiz-inicio": {
        who: "nadia", mood: "worried",
        line: {
          A: "Nadia ve el lápiz y deja de mover el gancho. «¿Un lápiz? ¿Vas a anotarme o a ayudarme? Las llaves están adentro.»",
          B: "Nadia ve el lápiz y deja de forcejear con el gancho. «¿Un lápiz? ¿Me vas a anotar o me vas a ayudar? Dejé las llaves adentro.»",
          C: "Nadia ve el lápiz y suelta el gancho un segundo. «¿Un lápiz? ¿Vienes a tomar nota o a echar una mano? Las llaves están adentro y me miran.»",
        },
        options: [
          {
            id: "matricula",
            say: { A: "Primero la matrícula, por si acaso. Después te ayudo.", B: "Primero anoto la matrícula, por si acaso. Después te ayudo.", C: "Primero la matrícula, por si acaso; después, te ayudo con mucho gusto." },
            reply: { A: "Nadia resopla, pero la dice. «Soy Nadia. Ahora, ayuda.»", B: "Nadia resopla, pero te dicta la matrícula. «Soy Nadia. Ahora sí, ayuda.»", C: "Nadia resopla y te la dicta letra por letra. «Nadia, para tu informe. Y ahora, ayuda, por favor.»" },
            mood: "worried", next: "lapiz-plan",
          },
          {
            id: "dibujo",
            say: { A: "Te dibujo cómo se abre: el gancho va así, por el pestillo.", B: "Te dibujo cómo se abre: el gancho entra así y baja hasta el pestillo.", C: "Te lo dibujo: el gancho entra por aquí, baja en diagonal y engancha el pestillo." },
            reply: { A: "Nadia mira el dibujo. «Soy Nadia. Eso parece fácil.»", B: "Nadia estudia el dibujo con atención. «Soy Nadia. Dibujado parece fácil.»", C: "Nadia observa el dibujo como un plano de ingeniería. «Nadia. En el papel parece facilísimo. Veremos en el metal.»" },
            mood: "smile", next: "lapiz-plan",
          },
          {
            id: "nota",
            say: { A: "Escribo una nota para el parabrisas: «Dueña afuera, llaves adentro». Así nadie llama a la policía.", B: "Escribo una nota para el parabrisas: «Dueña afuera, llaves adentro». Así nadie llama a la policía.", C: "Escribo una nota para el parabrisas: «Dueña afuera, llaves adentro, todo legal». Así nadie llama a la policía." },
            reply: { A: "Nadia se ríe. «Eres el primero que piensa en mí. Soy Nadia.»", B: "Nadia se ríe por primera vez. «Eres el primero esta noche que piensa en mí. Soy Nadia.»", C: "Nadia se ríe, cansada pero de verdad. «El primero en toda la noche que piensa en mí y no en el auto. Nadia.»" },
            mood: "smile", next: "lapiz-plan",
          },
        ],
      },
      "lapiz-plan": {
        who: "nadia", mood: "smile",
        line: {
          A: "Nadia mira tu papel. «Según tu dibujo, el gancho entra por aquí. ¿Lo intentamos? Mi medicina está adentro.»",
          B: "Nadia mira tu papel y luego la ventanilla. «Según tu dibujo, el gancho entra por aquí. ¿Lo intentamos? Mi medicina para la migraña está adentro.»",
          C: "Nadia compara tu papel con la ventanilla. «Según el plano, el gancho entra por aquí. ¿Lo intentamos? Las pastillas para la migraña están adentro y la cabeza no espera.»",
        },
        options: [
          {
            id: "intentar",
            say: { A: "Vamos. Tú miras el dibujo, yo muevo el gancho.", B: "Vamos. Tú sigues el dibujo y yo muevo el gancho.", C: "Vamos. Tú lees el plano y yo muevo el gancho." },
            reply: { A: "Nadia lee: «Abajo, izquierda…» Clic. «¡Funciona!»", B: "Nadia lee en voz alta: «Abajo… izquierda… gira.» Clic. «¡Funciona!»", C: "Nadia dicta desde el papel: «Abajo, izquierda, giro.» Clic. «¡Tu dibujo funciona!»" },
            mood: "surprised", end: "lapiz-abierto",
          },
          {
            id: "cerrajero",
            say: { A: "Mejor anoto el número del cerrajero y lo llamo.", B: "Mejor anoto el número del cerrajero de 24 horas y lo llamo.", C: "Mejor anoto el número del cerrajero de guardia y lo llamo ahora." },
            reply: { A: "Nadia asiente. «Sí. Mi cabeza no puede más.»", B: "Nadia asiente, aliviada. «Sí, por favor. Mi cabeza no aguanta más.»", C: "Nadia asiente con los ojos cerrados. «Sí, por favor. La cabeza me va a estallar.»" },
            mood: "worried", end: "lapiz-cerrajero",
          },
          {
            id: "firmar",
            say: { A: "Firma aquí que el auto es tuyo. Es por mi tranquilidad.", B: "Firma aquí que el auto es tuyo. Es por mi tranquilidad.", C: "Firma aquí que el auto es tuyo; es por mi tranquilidad, nada más." },
            reply: { A: "Nadia firma. «Listo. ¿Ahora me ayudas?» Mueves el gancho. Clic.", B: "Nadia firma con sarcasmo. «Firmado. ¿Ahora me ayudas?» Mueves el gancho y suena un clic.", C: "Nadia firma con una floritura irónica. «Firmado ante testigo. ¿Me ayudas ya?» Mueves el gancho: clic." },
            mood: "surprised", end: "lapiz-abierto",
          },
        ],
      },
      "libro-inicio": {
        who: "nadia", mood: "surprised",
        line: {
          A: "Nadia ve el libro y se ríe nerviosa. «¿Un libro? ¿Qué haces con un libro en la calle de noche? ¿Vienes a leerme?»",
          B: "Nadia ve el libro y se ríe, nerviosa. «¿Un libro? ¿Qué haces con un libro en la calle a esta hora? ¿Vienes a leerme mientras abro mi propio auto?»",
          C: "Nadia ve el libro y suelta una risa cansada. «¿Un libro? ¿Quién sale de noche con un libro? ¿Me vas a leer un capítulo mientras fuerzo mi propio auto?»",
        },
        options: [
          {
            id: "manual",
            say: { A: "Es un manual: «Cómo abrir autos». Capítulo uno.", B: "Es un manual: «Cómo abrir autos sin llave». Capítulo uno.", C: "Es un manual técnico: «Cómo abrir autos sin llave». Vamos por el capítulo uno." },
            reply: { A: "Nadia se ríe. «Si es verdad, te lo compro. Soy Nadia.»", B: "Nadia se ríe de verdad. «Si ese libro existe, te lo compro. Soy Nadia.»", C: "Nadia se ríe a carcajadas. «Si ese libro existe, te pago lo que pidas. Nadia, encantada.»" },
            mood: "smile", next: "libro-pagina",
          },
          {
            id: "verdad",
            say: { A: "No puedo dormir. Camino y leo. ¿Y tú? ¿Es tu auto?", B: "No puedo dormir, así que camino y leo. ¿Y tú? ¿Es tu auto?", C: "Insomnio: camino y leo. ¿Y tú? ¿Ese auto es tuyo o es una lectura más interesante?" },
            reply: { A: "Nadia suspira. «Es mío. Soy Nadia. Las llaves están adentro.»", B: "Nadia suspira. «Es mío. Soy Nadia. Dejé las llaves adentro.»", C: "Nadia suspira. «Es mío, soy Nadia y mis llaves me miran desde el asiento. Sigue leyendo, que esto es peor.»" },
            mood: "sad", next: "libro-pagina",
          },
          {
            id: "tapa",
            say: { A: "Mira. Es una novela sobre una mujer que pierde las llaves.", B: "Mira la tapa: es una novela sobre una mujer que pierde las llaves.", C: "Fíjate en la tapa: una novela sobre una mujer que se queda sin llaves. Casualidad." },
            reply: { A: "Nadia se ríe. «¿Y cómo termina? Soy Nadia.»", B: "Nadia se ríe. «¿Y cómo termina? Soy Nadia, por cierto.»", C: "Nadia se ríe, incrédula. «¿Y cómo termina? Nadia, y necesito que termine bien.»" },
            mood: "smile", next: "libro-pagina",
          },
        ],
      },
      "libro-pagina": {
        who: "nadia", mood: "smile",
        line: {
          A: "Nadia apoya el libro en el techo del auto. «Las llaves están adentro, con mi medicina. ¿Tu libro tiene un capítulo para eso?»",
          B: "Nadia deja tu libro sobre el techo del auto. «Las llaves están adentro, con mi medicina para la migraña. ¿Tu libro tiene un capítulo para esto?»",
          C: "Nadia apoya tu libro en el techo del auto, como si fuera un mapa. «Llaves y pastillas para la migraña, ahí dentro. ¿Tu libro tiene algún capítulo que sirva para esto?»",
        },
        options: [
          {
            id: "pagina",
            say: { A: "Sí. Con una página doblada separamos la goma de la ventana.", B: "Sí: con una página doblada se puede separar la goma de la ventana.", C: "Sí: una página doblada en cuña separa la goma de la ventanilla y deja pasar el gancho." },
            reply: { A: "Doblas una página. El gancho entra. Clic. «¡Un libro abrió mi auto!»", B: "Doblas una página y la metes en la goma. El gancho entra. Clic. «¡Un libro abrió mi auto!»", C: "Doblas una página, la encajas en la goma y el gancho entra sin resistencia. Clic. «Un libro abrió mi auto. Nadie me lo va a creer.»" },
            mood: "surprised", end: "libro-abierto",
          },
          {
            id: "regalar",
            say: { A: "No. Pero te lo regalo, para esperar al cerrajero.", B: "No. Pero te lo regalo: así lees mientras esperas al cerrajero.", C: "No. Pero te lo regalo: la espera del cerrajero se lleva mejor con una novela." },
            reply: { A: "Nadia abraza el libro. «Gracias. Llama al cerrajero, por favor.»", B: "Nadia abraza el libro. «Gracias. Llama al cerrajero, por favor; yo empiezo por el capítulo uno.»", C: "Nadia se abraza al libro. «Gracias. Llama al cerrajero y yo me pongo con el capítulo uno. Hoy es mi cumpleaños, por cierto.»" },
            mood: "smile", end: "libro-regalo",
          },
          {
            id: "irse",
            say: { A: "Mi libro no tiene ese capítulo. Suerte.", B: "Mi libro no tiene ese capítulo. Suerte con el auto.", C: "Mi libro no incluye ese capítulo. Te deseo suerte con el auto." },
            reply: { A: "Nadia te devuelve el libro, enojada. «Muy útil.»", B: "Nadia te devuelve el libro, enojada. «Muy útil, tu libro.»", C: "Nadia te devuelve el libro con dos dedos. «Muy útil, tu literatura.»" },
            mood: "angry", end: "molesta",
          },
        ],
      },
      "corazon-inicio": {
        who: "nadia", mood: "love",
        line: {
          A: "Nadia ve el corazón y suelta el gancho. Se le llenan los ojos. «Hoy es mi cumpleaños. Nadie me llamó. Y las llaves están adentro.»",
          B: "Nadia ve el corazón y suelta el gancho. Se le llenan los ojos de golpe. «Hoy es mi cumpleaños. Nadie me llamó. Y encima dejé las llaves adentro.»",
          C: "Nadia ve el corazón y el gancho se le cae de la mano. Los ojos se le llenan sin aviso. «Hoy cumplo treinta y cinco. No me llamó nadie. Y mis llaves me miran desde el asiento.»",
        },
        options: [
          {
            id: "cumple",
            say: { A: "Feliz cumpleaños, Nadia. Esta noche no la pasas sola.", B: "Feliz cumpleaños, Nadia. Esta noche no la pasas sola.", C: "Feliz cumpleaños, Nadia. Esta noche, al menos, no la pasas sola." },
            reply: { A: "Nadia sonríe entre lágrimas. «Gracias. ¿Cómo sabes mi nombre? Ah, lo dije. Qué cabeza.»", B: "Nadia sonríe entre lágrimas. «Gracias. Es lo primero bonito que me dicen hoy.»", C: "Nadia sonríe con las lágrimas aún en la cara. «Gracias. Es la primera frase bonita del día, y ya es de noche.»" },
            mood: "love", next: "corazon-cumple",
          },
          {
            id: "llaves",
            say: { A: "Primero las llaves. Después, celebramos.", B: "Primero las llaves. Después celebramos.", C: "Primero, las llaves. Después, celebramos como se debe." },
            reply: { A: "Nadia recoge el gancho. «Primero las llaves. Me gusta.»", B: "Nadia recoge el gancho y se seca los ojos. «Primero las llaves. Me gusta tu orden.»", C: "Nadia recoge el gancho y se limpia la cara con la manga. «Primero las llaves. Es el plan más sensato que escucho hoy.»" },
            mood: "love", next: "corazon-cumple",
          },
          {
            id: "abrazo",
            say: { A: "Ven aquí. Primero un abrazo.", B: "Ven aquí. Primero, un abrazo.", C: "Ven aquí. Lo primero es un abrazo; lo demás puede esperar." },
            reply: { A: "Nadia te abraza y llora un poco. «Gracias. Qué noche.»", B: "Nadia te abraza y llora un rato en tu hombro. «Gracias. Qué noche más rara.»", C: "Nadia te abraza y llora sin disimulo contra tu hombro. «Gracias. Qué noche, de verdad.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-cumple": {
        who: "nadia", mood: "love",
        line: {
          A: "Nadia sonríe por primera vez. «Treinta y cinco años. Y mi mejor regalo es un desconocido con un gancho. ¿Qué hacemos?»",
          B: "Nadia sonríe por primera vez en toda la noche. «Treinta y cinco. Y mi mejor regalo es un desconocido con un gancho. ¿Qué hacemos ahora?»",
          C: "Nadia sonríe por primera vez, y le cambia la cara. «Treinta y cinco años y mi mejor regalo es un desconocido con un gancho de alambre. ¿Qué hacemos con esta noche?»",
        },
        options: [
          {
            id: "gancho",
            say: { A: "Dame el gancho. Te abro el auto. Es mi regalo.", B: "Dame el gancho. Te abro el auto: ese es mi regalo.", C: "Pásame el gancho. Te abro el auto; ese es mi regalo de cumpleaños." },
            reply: { A: "Mueves el gancho. Clic. Nadia te da un beso en la mejilla.", B: "Mueves el gancho y, al segundo intento, clic. Nadia te da un beso en la mejilla.", C: "Mueves el gancho y, al segundo intento, suena el clic. Nadia te planta un beso en la mejilla antes de pensarlo." },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "kiosco",
            say: { A: "Vamos al kiosco a por un chocolate. El cerrajero puede esperar.", B: "Vamos al kiosco de la esquina a por un chocolate. El cerrajero puede esperar.", C: "Vamos al kiosco de la esquina a por un chocolate de cumpleaños. El cerrajero puede esperar diez minutos." },
            reply: { A: "Nadia se ríe. «Chocolate de cumpleaños. Sí.»", B: "Nadia se ríe. «Chocolate de cumpleaños a las dos de la mañana. Sí, por favor.»", C: "Nadia se ríe con ganas. «Chocolate de cumpleaños a las dos de la mañana con un desconocido. Es la mejor idea del año.»" },
            mood: "love", end: "corazon-kiosco",
          },
          {
            id: "abrazo",
            say: { A: "Primero un abrazo de cumpleaños.", B: "Primero, un abrazo de cumpleaños.", C: "Lo primero, un abrazo de cumpleaños; lo exige la fecha." },
            reply: { A: "Nadia te abraza fuerte. «Gracias, de verdad.»", B: "Nadia te abraza con fuerza. «Gracias. De verdad, gracias.»", C: "Nadia te abraza con una fuerza que no esperabas. «Gracias. No sabes cuánto.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {
      cerrajero: { text: { A: "Llega el cerrajero. En un minuto abre la puerta. Nadia toma su medicina.", B: "El cerrajero llega en quince minutos y abre la puerta en uno. Nadia toma su medicina y te da las gracias.", C: "El cerrajero tarda quince minutos en llegar y treinta segundos en abrir. Nadia lo mira como si fuera un mago." }, change: "luz", recap: "Llamaste a un cerrajero para Nadia." },
      abierto: { text: { A: "La puerta se abre. Nadia toma sus llaves y su medicina. Está feliz.", B: "La puerta se abre por fin. Nadia recupera sus llaves y su medicina, y no para de reírse.", C: "La puerta cede. Nadia rescata llaves y pastillas, y declara que esta noche cuenta como fiesta de cumpleaños." }, change: "sonrie", recap: "Abriste el auto de Nadia con un gancho." },
      policia: { text: { A: "Llega la policía. Nadia muestra sus papeles. Todo está bien.", B: "Llega la policía. Nadia demuestra que el auto es suyo y los agentes la ayudan a abrirlo.", C: "Llega una patrulla. Tras comprobar los papeles, los agentes abren el auto. Nadia no te dirige la palabra." }, change: "policia", recap: "Un malentendido con Nadia terminó con la policía." },
      molesta: { text: { A: "Nadia se va. Está enojada contigo.", B: "Nadia se va calle abajo, enojada. Su auto sigue cerrado bajo el farol.", C: "Nadia se pierde calle abajo. El auto se queda ahí, cerrado y con el gancho colgando de la ventanilla." }, change: "se-va", recap: "Nadia se fue enojada y sin sus llaves." },
      "cuchillo-policia": { text: { A: "Llega la policía. Ven el cuchillo. Nadia muestra sus papeles y tú explicas durante una hora.", B: "Llega la policía y lo primero que ve es tu cuchillo. Nadia enseña sus papeles; tú pasas una hora explicando lo de la goma de la ventana.", C: "Llega una patrulla y lo primero que registra es tu cuchillo. Nadia enseña sus papeles en un minuto; tú tardas una hora en explicar lo de la goma." }, change: "policia", recap: "Tu cuchillo asustó a Nadia y terminó con la policía." },
      "cuchillo-abierto": { text: { A: "La puerta se abre. Nadia toma su medicina y mira el cuchillo. «Guárdalo ya, por favor.»", B: "La puerta se abre. Nadia recupera su medicina y, con las pastillas en la mano, señala el cuchillo. «Y ahora guárdalo, por favor.»", C: "La puerta cede. Nadia rescata sus pastillas y, ya respirando, señala el cuchillo con la barbilla. «Y ahora, guárdalo para siempre, por favor.»" }, change: "sonrie", recap: "Abriste el auto de Nadia con la ayuda de tu cuchillo." },
      "pistola-patrulla": { text: { A: "Llega la policía de verdad. Ven tu pistola. Nadia llora. Tú pasas la noche en la comisaría.", B: "Llega la policía de verdad y encuentra una pistola y una mujer llorando. Nadia recupera su auto; tú pasas la noche en la comisaría.", C: "Llega la policía de verdad y encuentra una pistola, un gancho y una mujer llorando. A Nadia le abren el auto; a ti te llevan a la comisaría a explicarlo todo." }, change: "policia", recap: "Te hiciste pasar por policía con una pistola y llegó la de verdad." },
      "pistola-huye": { text: { A: "Nadia se va caminando rápido. Deja el auto, el gancho y a ti bajo el farol.", B: "Nadia se aleja a paso rápido, sin mirar atrás. Deja el auto cerrado, el gancho en la ventanilla y a ti bajo el farol.", C: "Nadia se aleja casi corriendo y no mira atrás ni una vez. El auto queda cerrado, el gancho colgando y tú bajo el farol, con tu arma y tu buena intención." }, change: "huye", recap: "Nadia huyó al ver tu pistola." },
      "pistola-abierto": { text: { A: "La puerta se abre. Nadia toma sus llaves y su medicina. «Gracias. Y no vuelvas a sacar eso.»", B: "La puerta se abre. Nadia recupera llaves y medicina y, ya dentro del auto, baja la ventanilla. «Gracias. Y no vuelvas a sacar eso nunca.»", C: "La puerta cede. Nadia recupera llaves y pastillas, se encierra en el auto y baja apenas la ventanilla. «Gracias. Y esa pistola, que no vuelva a salir en tu vida.»" }, change: "sonrie", recap: "Con la pistola guardada, abriste el auto de Nadia." },
      "granada-evacuacion": { text: { A: "La policía cierra la calle. Los vecinos salen con mantas. Un helicóptero ilumina el auto de Nadia.", B: "La policía cierra la calle y evacúa el edificio. Los vecinos esperan con mantas mientras un helicóptero ilumina el auto de Nadia.", C: "La policía acordona la calle y evacúa el edificio entero. Los vecinos esperan envueltos en mantas y un helicóptero ilumina, con mucho detalle, el auto de Nadia." }, change: "helicoptero", recap: "Tu granada provocó una evacuación en la calle de Nadia." },
      "granada-abierto": { text: { A: "La puerta se abre. Nadia toma su medicina. Guardas la granada. Los dos se ríen de nervios.", B: "La puerta se abre. Nadia toma su medicina mientras tú guardas la granada. Los dos se ríen, de puros nervios.", C: "La puerta cede. Nadia se toma la pastilla sin agua mientras guardas la granada. Los dos se ríen con esa risa que solo sale después del miedo." }, change: "sonrie", recap: "Abriste el auto de Nadia con una granada en la acera." },
      "granada-cumple": { text: { A: "Nadia sale de debajo del auto y baila bajo el farol. «¡Es mi cumpleaños y sigo viva!»", B: "Nadia sale de debajo del auto y baila bajo el farol, con el gancho en la mano. «¡Es mi cumpleaños y sigo viva!»", C: "Nadia sale de debajo del auto y se pone a bailar bajo el farol, gancho en mano. «¡Es mi cumpleaños y sigo viva! ¡Eso ya es fiesta!»" }, change: "baila", recap: "Nadia celebró su cumpleaños después del susto de la granada." },
      "gas-rociado": { text: { A: "Te arden los ojos. Cuando puedes ver, Nadia no está. El auto sigue cerrado.", B: "Te arden los ojos durante diez minutos. Cuando por fin puedes ver, Nadia no está. El auto sigue cerrado bajo el farol.", C: "Te arden los ojos un buen rato, apoyado en el farol. Cuando recuperas la vista, Nadia ha desaparecido y el auto sigue cerrado, con el gancho colgando." }, change: "huye", recap: "Nadia te roció con su gas pimienta y huyó." },
      "gas-abierto": { text: { A: "La puerta se abre. Nadia toma su medicina. Los dos guardan el gas y se ríen.", B: "La puerta se abre. Nadia recupera su medicina y, ahora sí, los dos guardan el gas y se ríen de la escena.", C: "La puerta cede. Nadia rescata sus pastillas y, por fin, los dos guardan el gas pimienta y se ríen de la noche." }, change: "sonrie", recap: "Nadia y tú guardaron el gas y abrieron el auto." },
      "lapiz-abierto": { text: { A: "La puerta se abre. Nadia toma su medicina y guarda tu dibujo. «Para la próxima.»", B: "La puerta se abre. Nadia toma su medicina y se guarda tu dibujo en el bolso. «Para la próxima vez.»", C: "La puerta cede. Nadia toma sus pastillas y dobla tu dibujo con cuidado. «Me lo guardo. Para la próxima, que la habrá.»" }, change: "sonrie", recap: "Tu dibujo a lápiz ayudó a abrir el auto de Nadia." },
      "lapiz-cerrajero": { text: { A: "Llamas al número que anotaste. El cerrajero llega y abre en un minuto. Nadia toma su medicina.", B: "Llamas al número que anotaste. El cerrajero llega en quince minutos y abre en uno. Nadia toma su medicina y te agradece la nota.", C: "Llamas al número que anotaste. El cerrajero tarda quince minutos en llegar y uno en abrir. Nadia se toma la pastilla y se queda con tu nota del parabrisas." }, change: "luz", recap: "Anotaste el número del cerrajero y lo llamaste para Nadia." },
      "libro-abierto": { text: { A: "La puerta se abre. Nadia toma su medicina. Tu libro tiene una página doblada para siempre.", B: "La puerta se abre. Nadia recupera su medicina y tu libro se queda con una página doblada para siempre.", C: "La puerta cede. Nadia rescata sus pastillas y tu libro conserva, para siempre, una página doblada en forma de cuña." }, change: "sonrie", recap: "Abriste el auto de Nadia con una página de tu libro." },
      "libro-regalo": { text: { A: "Llega el cerrajero. Nadia lee tu libro bajo el farol y no quiere parar.", B: "El cerrajero llega y abre la puerta. Nadia, sentada en la acera, lee tu libro bajo el farol y no quiere parar.", C: "El cerrajero llega y abre en un minuto. Nadia, sentada en la acera bajo el farol, lee tu libro y pide que el cerrajero espere un capítulo más." }, change: "luz", recap: "Le regalaste tu libro a Nadia mientras esperaba al cerrajero." },
      "corazon-abrazo": { text: { A: "Nadia y tú se abrazan bajo el farol. Después, abren el auto juntos.", B: "Nadia y tú se abrazan bajo el farol un buen rato. Después, abren el auto juntos.", C: "Nadia y tú se abrazan bajo el farol que parpadea. Después, abren el auto entre los dos, sin prisa." }, change: "abraza", recap: "Abrazaste a Nadia el día de su cumpleaños." },
      "corazon-beso": { text: { A: "La puerta se abre. Nadia te besa la mejilla y toma su medicina, feliz.", B: "La puerta se abre. Nadia te da otro beso en la mejilla y recupera llaves y medicina, feliz.", C: "La puerta cede. Nadia te besa la mejilla otra vez y rescata llaves y pastillas, declarando que este cumpleaños, al final, valió la pena." }, change: "beso", recap: "Abriste el auto de Nadia y te dio un beso de cumpleaños." },
      "corazon-kiosco": { text: { A: "Van al kiosco. Doña Elsa regala un chocolate. Nadia sopla una vela imaginaria.", B: "Van juntos al kiosco. Doña Elsa regala un chocolate y Nadia sopla una vela imaginaria.", C: "Van juntos al kiosco. Doña Elsa regala el chocolate al saber que es cumpleaños y Nadia sopla una vela imaginaria bajo la radio." }, change: "se-va", recap: "Celebraste el cumpleaños de Nadia con un chocolate del kiosco." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces si alguien saca un cuchillo cerca de ti?", B: "¿Cómo reaccionas cuando alguien te amenaza sin motivo?", C: "¿Qué te parece más peligroso: un arma a la vista o una intención oculta?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces si ves una pistola?", B: "¿Alguna vez obedeciste por miedo y qué pasó después?", C: "¿Cambia tu sinceridad cuando la otra persona tiene el control?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué haces cuando alguien grita en la calle?", B: "¿Cuál fue la broma más pesada que te hicieron?", C: "¿Por qué el absurdo nos hace reír y a la vez nos asusta?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Qué llevas en tu bolso para sentirte seguro?", B: "¿Confías en los desconocidos que se te acercan de noche?", C: "¿La desconfianza protege o aísla?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Dibujas bien?", B: "¿Cuándo usaste un dibujo para explicar algo?", C: "¿Qué te convence más: una explicación hablada o un esquema en papel?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Dónde lees normalmente?", B: "¿Qué haces cuando no puedes dormir?", C: "¿Qué libro te acompañó en una mala noche?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Cómo celebras tu cumpleaños?", B: "¿Qué cumpleaños recuerdas con más cariño?", C: "¿Qué gesto de un desconocido te alegró un día triste?" } },
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
      "cuchillo-inicio": {
        who: "mauro", mood: "furious",
        line: {
          A: "Tocas la puerta con el cuchillo en la mano. Mauro abre, lo ve y toma un cuchillo de la mesa. «¡Celia, atrás! ¿Qué quieres? ¿Quién te manda?»",
          B: "Tocas la puerta verde con el cuchillo todavía en la mano. Mauro abre, ve el filo y agarra un cuchillo de cocina de la mesa. «¡Celia, atrás! ¿Qué quieres? ¿Quién te manda?»",
          C: "Tocas la puerta verde sin soltar el cuchillo. Mauro abre, ve el filo y, en un gesto de película barata, toma un cuchillo de cocina de la mesa. «¡Celia, atrás! ¿Quién eres y quién te manda?»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Tranquilo. Lo bajo. Escuché gritos y vine a ayudar.", B: "Tranquilo, lo bajo. Oí gritos y vine a ayudar.", C: "Tranquilo, lo bajo ahora mismo. Oí gritos y vine a ayudar, no a pelear." },
            reply: { A: "Mauro no baja el suyo. «¿A ayudar con un cuchillo? Celia, no salgas.»", B: "Mauro no baja el suyo ni un centímetro. «¿A ayudar con un cuchillo? Celia, quédate dentro.»", C: "Mauro mantiene el suyo en alto. «¿Ayudar, con un cuchillo? Celia, ni se te ocurra salir.»" },
            mood: "furious", next: "cuchillo-tenso",
          },
          {
            id: "manzana",
            say: { A: "¡Es para la manzana! Mira, la manzana.", B: "¡Es para pelar una manzana! Mira, aquí está la manzana.", C: "¡Es para la manzana! Mira: manzana, cuchillo, merienda. Nada más." },
            reply: { A: "Celia aparece con el guion. «¿Una manzana? Mauro, baja eso. Es un vecino raro, no un asesino.»", B: "Celia aparece detrás con el guion. «¿Una manzana? Mauro, baja eso. Es un vecino raro, no un asesino.»", C: "Celia asoma con el guion en la mano. «¿Una manzana? Mauro, baja eso ya. Es un vecino rarísimo, pero no un asesino.»" },
            mood: "worried", next: "cuchillo-tenso",
          },
          {
            id: "primero",
            say: { A: "Baja tú el tuyo primero.", B: "Baja tú el tuyo primero.", C: "Tú primero: baja el tuyo." },
            reply: { A: "Mauro da un paso. Tú das otro atrás. Celia grita. Un vecino llama a la policía.", B: "Mauro da un paso hacia ti; tú das uno atrás. Celia grita desde adentro y un vecino del patio llama a la policía.", C: "Mauro avanza un paso; tú retrocedes otro. Celia grita desde adentro y, en el patio, un vecino ya marca el número de la policía." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-tenso": {
        who: "celia", mood: "worried",
        line: {
          A: "Celia se pone entre los dos cuchillos con el guion. «Los dos. Al suelo. Ahora. Somos actores, esto era un ensayo, y tú casi te metes en la obra de verdad.»",
          B: "Celia se planta entre los dos cuchillos con el guion por delante. «Los dos, al suelo, ahora. Somos actores, esto era un ensayo, y tú casi entras en la obra de verdad.»",
          C: "Celia se interpone entre los dos cuchillos armada solo con el guion. «Los dos, al suelo, ya. Somos actores, esto era un ensayo, y tú estuviste a un paso de entrar en la obra sin audición.»",
        },
        options: [
          {
            id: "soltar",
            say: { A: "Está bien. Al suelo.", B: "Está bien. Lo dejo en el suelo.", C: "De acuerdo. Al suelo, los dos." },
            reply: { A: "Los dos cuchillos caen. Mauro se ríe, temblando. «Esa escena va a la obra.»", B: "Los dos cuchillos caen al mismo tiempo. Mauro se ríe con las manos temblando. «Esa escena va directa a la obra.»", C: "Los dos cuchillos tocan el suelo a la vez. Mauro se ríe con la voz rota. «Esa escena entra en la obra, con tu nombre en el programa.»" },
            mood: "smile", end: "cuchillo-escena",
          },
          {
            id: "disculpa",
            say: { A: "Perdón. Oí «te vas a arrepentir» y pensé lo peor.", B: "Perdón. Oí «te vas a arrepentir» y me imaginé lo peor.", C: "Perdón. Oí «te vas a arrepentir» y mi cabeza completó la tragedia." },
            reply: { A: "Celia sonríe. «Es la línea 40. Entonces funciona. Ven al estreno.»", B: "Celia sonríe, orgullosa. «Es la línea 40. Si te lo creíste, funciona. Ven al estreno.»", C: "Celia sonríe con orgullo. «Línea 40. Si un vecino con cuchillo se la cree, funciona. Ven al estreno.»" },
            mood: "smile", end: "estreno",
          },
          {
            id: "irse",
            say: { A: "Me voy. Guarden sus cuchillos.", B: "Me voy. Guarden sus cuchillos, por favor.", C: "Me retiro. Guarden los cuchillos, los suyos y el mío." },
            reply: { A: "Mauro cierra con llave. Desde dentro: «Celia, el del cuchillo va a la obra.»", B: "Mauro cierra con doble llave. Desde dentro se oye: «Celia, el vecino del cuchillo va a la obra.»", C: "Mauro cierra con doble llave y, desde dentro, una decisión artística: «Celia, el vecino del cuchillo entra en el segundo acto.»" },
            mood: "scared", end: "sigue",
          },
        ],
      },
      "pistola-inicio": {
        who: "mauro", mood: "terror",
        line: {
          A: "Mauro abre, ve la pistola y levanta las manos. Adentro, Celia sigue gritando: «¡Te vas a arrepentir!» Mauro susurra: «Ya me arrepiento. ¿Qué quieres?»",
          B: "Mauro abre la puerta, ve la pistola y levanta las manos. Desde adentro, Celia sigue gritando: «¡Te vas a arrepentir!» Mauro susurra: «Ya me arrepiento de todo. ¿Qué quieres?»",
          C: "Mauro abre, ve la pistola y levanta las manos con una lentitud teatral que no es actuación. Adentro, Celia remata: «¡Te vas a arrepentir toda tu vida!» Mauro susurra: «Me arrepiento ya. ¿Qué quieres?»",
        },
        options: [
          {
            id: "preguntar",
            say: { A: "Baja las manos. ¿Por qué gritan? ¿Ella está bien?", B: "Baja las manos. ¿Por qué gritan? ¿Está bien ella?", C: "Baja las manos. ¿Por qué tanto grito? ¿Ella está bien?" },
            reply: { A: "Mauro no baja las manos. «Está bien. Está… ensayando. ¡Celia, ven!»", B: "Mauro no baja las manos. «Está bien. Está ensayando. ¡Celia, ven, por favor, y no grites!»", C: "Mauro mantiene las manos en alto. «Está perfectamente. Está ensayando. ¡Celia, ven, y por lo que más quieras, no grites!»" },
            mood: "scared", next: "pistola-celia",
          },
          {
            id: "guardar",
            say: { A: "Perdón, la guardo. Pensé que había una pelea.", B: "Perdona, la guardo. Pensé que había una pelea de verdad.", C: "Perdona, la guardo ahora mismo. Pensé que aquí había una pelea de verdad." },
            reply: { A: "Mauro baja las manos despacio. «Hay una pelea. De mentira. ¡Celia!»", B: "Mauro baja las manos muy despacio. «Hay una pelea, sí. De mentira. ¡Celia, ven!»", C: "Mauro baja las manos con cautela. «Hay una pelea, en efecto. Escrita hace cien años. ¡Celia, ven!»" },
            mood: "worried", next: "pistola-celia",
          },
          {
            id: "entrar",
            say: { A: "Déjame pasar. Quiero verla.", B: "Déjame pasar. Quiero verla con mis ojos.", C: "Déjame pasar: quiero verla con mis propios ojos." },
            reply: { A: "Mauro se aparta. Celia ve la pistola, tira el guion y grita. Un vecino llama a la policía.", B: "Mauro se aparta con las manos arriba. Celia ve la pistola, tira el guion y grita de verdad. Un vecino llama a la policía.", C: "Mauro se hace a un lado sin bajar las manos. Celia ve la pistola, suelta el guion y grita como nunca en un ensayo. Un vecino del patio llama a la policía." },
            mood: "scared", end: "pistola-policia",
          },
        ],
      },
      "pistola-celia": {
        who: "celia", mood: "scared",
        line: {
          A: "Celia aparece con el guion y ve la pistola. Se queda blanca. «¿Esto es por el ruido? ¿Alguien nos denunció… con eso?»",
          B: "Celia aparece con el guion en la mano y ve la pistola. Se queda blanca. «¿Esto es por el ruido? ¿Alguien nos denunció y mandaron a alguien… con eso?»",
          C: "Celia asoma con el guion lleno de notas y ve la pistola. Pierde el color. «¿Esto es por el ruido? ¿Un vecino se quejó y la respuesta viene armada?»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "No. Oí gritos y traje lo que tenía. Perdón. ¿Están ensayando?", B: "No. Oí gritos y traje lo que tenía encima. Perdón. ¿Están ensayando?", C: "No. Oí gritos y vine con lo que llevaba encima. Perdón. ¿Están ensayando?" },
            reply: { A: "Celia respira. «Ensayamos El anillo. Estrenamos el sábado. Y tú nos creíste. Es el mejor premio.»", B: "Celia respira por fin. «Ensayamos El anillo. Estreno el sábado. Y tú te lo creíste con pistola y todo. Es la mejor crítica que tuvimos.»", C: "Celia suelta el aire. «Ensayamos El anillo. Estrenamos el sábado. Que un vecino armado se lo crea es la mejor crítica que recibimos en dos años.»" },
            mood: "smile", end: "pistola-ensayo",
          },
          {
            id: "mentir",
            say: { A: "Soy de seguridad del edificio. Menos ruido.", B: "Soy de la seguridad del edificio. Menos ruido, por favor.", C: "Seguridad del edificio. Bajen el volumen." },
            reply: { A: "Mauro frunce el ceño. «Aquí no hay seguridad. Yo soy el administrador.» Marca a la policía.", B: "Mauro frunce el ceño. «En este edificio no hay seguridad. El administrador soy yo.» Y marca el número de la policía.", C: "Mauro entrecierra los ojos. «Este edificio no tiene seguridad. Lo sé porque el administrador soy yo.» Marca el número de la policía sin dejar de mirarte." },
            mood: "angry", end: "pistola-policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me equivoqué. Me voy.", B: "Perdón, me equivoqué de situación. Me voy.", C: "Perdón, me equivoqué de drama. Me retiro." },
            reply: { A: "Mauro cierra con doble llave. Desde dentro: «Celia, el de la pistola va a la obra.»", B: "Mauro cierra con doble llave. Desde dentro se oye: «Celia, el vecino de la pistola va a la obra.»", C: "Mauro cierra con doble llave y, desde dentro, llega el veredicto: «Celia, el de la pistola entra en el segundo acto.»" },
            mood: "scared", end: "pistola-puerta",
          },
        ],
      },
      "granada-inicio": {
        who: "mauro", mood: "terror",
        line: {
          A: "Mauro abre, ve la granada y grita hacia el patio: «¡Todos fuera! ¡Una bomba!» Se abren puertas, salen vecinos en pijama, un niño pequeño llora.",
          B: "Mauro abre la puerta, ve la granada y grita hacia el patio del conventillo: «¡Todos fuera! ¡Una bomba!» Se abren puertas, salen vecinos en pijama y un niño pequeño rompe a llorar.",
          C: "Mauro abre, ve la granada y proyecta la voz como nunca en un ensayo: «¡Todos fuera! ¡Una bomba!» En segundos, el patio se llena de vecinos en pijama y un niño pequeño llora con sentimiento.",
        },
        options: [
          {
            id: "calmar",
            say: { A: "¡Es de utilería! ¡Como sus cosas de teatro!", B: "¡Es de utilería! ¡Como las cosas de su teatro!", C: "¡Es de utilería! ¡Como sus accesorios de teatro, pero con mejor acabado!" },
            reply: { A: "Celia aparece. «¿Utilería? A ver.» La toma y la golpea contra la mesa. Nada.", B: "Celia aparece con el guion. «¿Utilería? A ver.» Te la quita, la golpea contra la mesa y no pasa nada.", C: "Celia sale al patio con el guion bajo el brazo. «¿Utilería? Vamos a verlo.» Te la quita, la estampa contra la mesa y, en efecto, nada." },
            mood: "surprised", next: "granada-patio",
          },
          {
            id: "guardar",
            say: { A: "La guardo. Perdón. Oí gritos.", B: "La guardo, perdón. Es que oí gritos.", C: "La guardo ahora mismo; perdón. Vine por los gritos." },
            reply: { A: "Nadie se mueve. Celia sale al patio. «¿Qué está pasando aquí?»", B: "Nadie en el patio se mueve. Celia sale con el guion. «¿Se puede saber qué está pasando aquí?»", C: "El patio se congela. Celia sale con el guion en la mano. «¿Alguien me explica qué está pasando aquí?»" },
            mood: "scared", next: "granada-patio",
          },
          {
            id: "correr",
            say: { A: "¡Perdón! ¡Me voy!", B: "¡Perdón! ¡Ya me voy!", C: "¡Perdón! ¡Me retiro ahora mismo!" },
            reply: { A: "Corres por el patio. Los vecinos te siguen con escobas. Suenan sirenas.", B: "Sales corriendo por el patio. Los vecinos te persiguen con escobas y suenan sirenas en la calle.", C: "Cruzas el patio corriendo, con los vecinos detrás armados de escobas. Las sirenas ya suenan en la calle." },
            mood: "scared", end: "granada-helicoptero",
          },
        ],
      },
      "granada-patio": {
        who: "celia", mood: "surprised",
        line: {
          A: "El patio está lleno de vecinos en pijama. Celia levanta el guion. «Vecinos, calma: es un ensayo. Y esto es de utilería. Creemos.» Todos te miran.",
          B: "El patio del conventillo está lleno de vecinos en pijama. Celia levanta el guion. «Vecinos, calma: esto era un ensayo. Y esto otro es de utilería. Eso creemos.» Todos te miran.",
          C: "El patio entero está en pijama. Celia levanta el guion como una bandera. «Vecinos, calma: lo de los gritos era un ensayo. Y esto es de utilería. Según él.» Todas las miradas se posan en ti.",
        },
        options: [
          {
            id: "funcion",
            say: { A: "Ya que todos están despiertos, ¿por qué no ensayan la escena aquí?", B: "Ya que están todos despiertos, ¿por qué no ensayan la escena aquí, en el patio?", C: "Ya que el patio está despierto, ¿por qué no hacen la escena aquí mismo?" },
            reply: { A: "Celia y Mauro se miran. Hacen la escena en el patio. Los vecinos aplauden.", B: "Celia y Mauro se miran un segundo y hacen la escena en mitad del patio. Los vecinos aplauden en pijama.", C: "Celia y Mauro cruzan una mirada y representan la escena en el patio, con el niño pequeño de público. Los vecinos aplauden en pijama." },
            mood: "smile", end: "granada-funcion",
          },
          {
            id: "disculpa",
            say: { A: "Perdón a todos. Me voy a dormir.", B: "Perdón a todos. Me voy a dormir.", C: "Disculpas a todo el patio. Me voy a dormir." },
            reply: { A: "Una vecina: «¿Dormir? Después de esto, nadie duerme.» Todos te gritan.", B: "Una vecina en bata: «¿Dormir? Después de esto no duerme nadie.» El patio entero te grita.", C: "Una vecina en bata resume el sentir general: «¿Dormir? Después de esto aquí no duerme nadie.» Y el patio te lo recuerda a gritos." },
            mood: "angry", end: "granada-vecinos",
          },
          {
            id: "policia",
            say: { A: "Mejor llamo a la policía yo, para que lo confirmen.", B: "Mejor llamo yo a la policía, para que confirmen que es falsa.", C: "Mejor llamo yo mismo a la policía, para que confirmen que es de utilería." },
            reply: { A: "Llamas. Llegan patrullas, un camión y un helicóptero.", B: "Llamas. Llegan dos patrullas, un camión de artificieros y, por si acaso, un helicóptero.", C: "Llamas. Acuden dos patrullas, un camión de artificieros y un helicóptero que ilumina el patio con mucho entusiasmo." },
            mood: "worried", end: "granada-helicoptero",
          },
        ],
      },
      "gas-inicio": {
        who: "celia", mood: "angry",
        line: {
          A: "Celia abre con el guion en una mano y un gas pimienta en la otra. Ve el tuyo. «Ah. Tú también. ¿Vienes por el ruido o por mí?»",
          B: "Celia abre la puerta con el guion en una mano y un gas pimienta en la otra. Ve el tuyo. «Ah. Tú también traes. ¿Vienes por el ruido o vienes por mí?»",
          C: "Celia abre con el guion en una mano y un gas pimienta en la otra, sin sorpresa. Ve el tuyo. «Ah, tú también. ¿Vienes por el ruido o es algo personal?»",
        },
        options: [
          {
            id: "ruido",
            say: { A: "Por el ruido. Escuché «te vas a arrepentir». ¿Estás bien?", B: "Por el ruido. Oí «te vas a arrepentir». ¿Estás bien?", C: "Por el ruido. Oí «te vas a arrepentir» y sonaba muy real. ¿Estás bien?" },
            reply: { A: "Celia baja el gas un poco. «Estoy bien. Es una obra. Y tú, ¿siempre tocas con gas en la mano?»", B: "Celia baja un poco el gas. «Estoy bien, es una obra. ¿Y tú siempre tocas la puerta con gas en la mano?»", C: "Celia baja el gas unos centímetros. «Estoy perfectamente, es una obra. ¿Y tú sueles llamar a las puertas con gas pimienta en la mano?»" },
            mood: "worried", next: "gas-guion",
          },
          {
            id: "bajar",
            say: { A: "Bajo el mío si tú bajas el tuyo.", B: "Bajo el mío si tú bajas el tuyo.", C: "Bajo el mío si tú bajas el tuyo; a la vez, sin trucos." },
            reply: { A: "Los dos bajan el gas. Celia sonríe. «Bien. Ahora hablamos.»", B: "Los dos bajan el gas al mismo tiempo. Celia sonríe. «Bien. Ahora podemos hablar como vecinos.»", C: "Los dos bajan el gas en perfecta sincronía. Celia sonríe. «Bien. Ahora hablamos como vecinos civilizados.»" },
            mood: "smile", next: "gas-guion",
          },
          {
            id: "amenazar",
            say: { A: "No te acerques. Quiero ver quién grita adentro.", B: "No te acerques. Quiero ver quién está gritando adentro.", C: "No te muevas. Quiero ver con mis ojos quién grita ahí dentro." },
            reply: { A: "Celia rocía el suelo, de aviso. Mauro llama a la policía.", B: "Celia rocía el suelo entre los dos, como aviso. Detrás, Mauro ya llama a la policía.", C: "Celia rocía el suelo entre ambos, a modo de frontera. Detrás, Mauro marca el número de la policía." },
            mood: "scared", end: "gas-policia",
          },
        ],
      },
      "gas-guion": {
        who: "celia", mood: "smile",
        line: {
          A: "Celia guarda el gas y levanta el guion. «Somos actores. Ensayamos. Y llevo gas porque en este patio, de noche, nunca se sabe. Como tú, por lo visto.»",
          B: "Celia guarda el gas y levanta el guion. «Somos actores, estábamos ensayando. Y llevo gas porque en este patio, de noche, nunca se sabe. Tú, por lo visto, piensas igual.»",
          C: "Celia guarda el gas y muestra el guion subrayado. «Somos actores y ensayábamos. El gas lo llevo porque en este patio, de noche, nunca se sabe. Veo que compartimos filosofía.»",
        },
        options: [
          {
            id: "entrada",
            say: { A: "Entonces nos entendemos. ¿Cuándo es el estreno?", B: "Entonces nos entendemos. ¿Cuándo estrenan?", C: "Entonces nos entendemos perfectamente. ¿Cuándo es el estreno?" },
            reply: { A: "Celia sonríe. «El sábado, aquí. Ven. Y trae el gas, por si acaso.»", B: "Celia sonríe. «El sábado, en este patio. Ven. Y trae el gas, por si el público se pone difícil.»", C: "Celia sonríe de lado. «El sábado, en este mismo patio. Ven. Y trae el gas, por si el público se pone exigente.»" },
            mood: "smile", end: "gas-estreno",
          },
          {
            id: "consejo",
            say: { A: "Buen reflejo. En este barrio hace falta.", B: "Buen reflejo. En este barrio hace falta.", C: "Buen reflejo, el tuyo. En este barrio no sobra." },
            reply: { A: "Mauro, desde dentro: «¡Y yo que creía que exagerabas, Celia!»", B: "Mauro asoma la cabeza: «¡Y yo que creía que exagerabas, Celia!»", C: "Mauro asoma por detrás, con el guion: «¡Y yo que te decía que exagerabas, Celia!»" },
            mood: "smile", end: "gas-complices",
          },
          {
            id: "queja",
            say: { A: "Pues ensayen más bajo. Y guarden el gas.", B: "Pues ensayen más bajo. Y guarden ese gas.", C: "Pues ensayen más bajo. Y el gas, guardado." },
            reply: { A: "Celia se pone roja. «Perdón. Más bajo. Prometido.»", B: "Celia se pone roja. «Perdón. Más bajo, prometido.»", C: "Celia enrojece. «Perdón. Seguiremos odiándonos en voz baja.»" },
            mood: "sad", end: "susurros",
          },
        ],
      },
      "lapiz-inicio": {
        who: "celia", mood: "surprised",
        line: {
          A: "La puerta se abre antes de que toques. Celia ve el lápiz. «¿Un lápiz? Perfecto. ¿Escribes rápido? Necesitamos un apuntador.»",
          B: "La puerta verde se abre antes de que toques. Celia ve el lápiz en tu mano. «¿Un lápiz? Perfecto. ¿Escribes rápido? Nos hace falta un apuntador.»",
          C: "La puerta verde se abre antes de que toques, como si te esperaran. Celia ve el lápiz. «¿Un lápiz? Providencial. ¿Escribes rápido? Nos falta un apuntador y sobra drama.»",
        },
        options: [
          {
            id: "aceptar",
            say: { A: "¿Apuntador? Bueno. Pensé que era una pelea.", B: "¿Apuntador? Bueno… Pensé que esto era una pelea.", C: "¿Apuntador? Acepto, aunque llegué pensando que esto era una pelea." },
            reply: { A: "Celia se ríe. «Es una pelea. De teatro. Pasa.»", B: "Celia se ríe. «Es una pelea, sí. De teatro. Pasa, pasa.»", C: "Celia se ríe. «Es una pelea, en efecto. Escrita hace cien años. Pasa.»" },
            mood: "smile", next: "lapiz-apuntador",
          },
          {
            id: "pregunta",
            say: { A: "Primero: ¿quién gritaba «te vas a arrepentir»?", B: "Primero una pregunta: ¿quién gritaba «te vas a arrepentir»?", C: "Antes de nada: ¿quién gritaba eso de «te vas a arrepentir»?" },
            reply: { A: "Celia levanta la mano. «Yo. Línea 40. ¿Sonó real?»", B: "Celia levanta la mano. «Yo. Línea 40. ¿Sonó real desde el patio?»", C: "Celia levanta la mano con orgullo. «Yo. Línea 40. ¿Sonó real o sonó a ensayo?»" },
            mood: "smile", next: "lapiz-apuntador",
          },
          {
            id: "nota",
            say: { A: "Yo escribo. Pero primero una nota: «Vecinos: hay gente durmiendo».", B: "Yo escribo. Pero primero una nota: «Vecinos: hay gente durmiendo».", C: "Escribo lo que quieran. Pero antes, una nota: «Vecinos: hay gente intentando dormir»." },
            reply: { A: "Celia lee la nota y se pone roja. «Perdón. Más bajo. Lo prometo.»", B: "Celia lee la nota y se pone roja. «Tienes razón. Más bajo, lo prometo.»", C: "Celia lee la nota y enrojece. «Tienes toda la razón. Desde ahora, drama en voz baja.»" },
            mood: "sad", end: "lapiz-nota",
          },
        ],
      },
      "lapiz-apuntador": {
        who: "mauro", mood: "smile",
        line: {
          A: "Mauro te da el guion. «Marca con tu lápiz cada vez que grito demasiado. Celia dice que son todas.»",
          B: "Mauro te pone el guion en las manos. «Marca con tu lápiz cada vez que grito demasiado. Según Celia, son todas.»",
          C: "Mauro te entrega el guion con solemnidad. «Marca con tu lápiz cada vez que grito de más. Según Celia, no hay línea que se salve.»",
        },
        options: [
          {
            id: "marcar",
            say: { A: "Listo. Marco todas. Celia tiene razón.", B: "Listo. Las marco todas. Celia tiene razón.", C: "Hecho. Marcadas todas. Celia tiene razón." },
            reply: { A: "Mauro mira el guion lleno de marcas y se ríe. Celia aplaude.", B: "Mauro mira el guion lleno de marcas de lápiz y se ríe. Celia aplaude desde el sofá.", C: "Mauro contempla el guion sembrado de marcas y se ríe. Celia aplaude con la satisfacción de quien lo dijo primero." },
            mood: "laugh", end: "lapiz-guion",
          },
          {
            id: "corregir",
            say: { A: "Esta línea no funciona. Yo pondría: «Nunca te voy a perdonar, Leonardo».", B: "Esta línea no funciona. Yo pondría: «Nunca te voy a perdonar, Leonardo».", C: "Esta línea no funciona. Yo escribiría: «Nunca te voy a perdonar, Leonardo». Más corto, más cruel." },
            reply: { A: "Celia salta. «¡Es mejor! ¡La cambiamos!» Mauro escribe con tu lápiz.", B: "Celia salta del sofá. «¡Es mejor! ¡La cambiamos ahora mismo!» Mauro la anota con tu lápiz.", C: "Celia se levanta de un salto. «¡Es mejor! ¡Cambiada!» Mauro la anota con tu lápiz y te mira con respeto." },
            mood: "smile", end: "lapiz-coautor",
          },
          {
            id: "firmar",
            say: { A: "Primero firmo el guion, como testigo.", B: "Primero firmo el guion, como testigo del ensayo.", C: "Antes firmo el guion, como testigo oficial del ensayo." },
            reply: { A: "Mauro se ríe. «Firma. Nadie lo firmó nunca.»", B: "Mauro se ríe. «Firma, firma. Nunca nadie quiso firmar este guion.»", C: "Mauro se ríe. «Firma, por favor. Es la primera firma que recibe este guion en dos años.»" },
            mood: "smile", end: "lapiz-guion",
          },
        ],
      },
      "libro-inicio": {
        who: "celia", mood: "laugh",
        line: {
          A: "Celia abre y ve la tapa de tu libro. Se ríe a carcajadas. «¡Mauro! ¡El vecino trae nuestra obra! ¿De dónde sacaste ese libro?»",
          B: "Celia abre la puerta y ve la tapa de tu libro. Se ríe a carcajadas. «¡Mauro, ven! ¡El vecino trae nuestra obra! ¿De dónde sacaste ese libro?»",
          C: "Celia abre, mira la tapa de tu libro y suelta una carcajada. «¡Mauro, ven a ver esto! ¡El vecino trae nuestra obra bajo el brazo! ¿De dónde salió ese libro?»",
        },
        options: [
          {
            id: "casualidad",
            say: { A: "¿Su obra? Lo compré en el mercado por un euro.", B: "¿Su obra? Lo compré en el mercado nocturno por un euro.", C: "¿Su obra? Lo compré en el mercado nocturno por un euro, sin saber lo que era." },
            reply: { A: "Mauro aparece. «¡Un euro! Vale más. Pasa.»", B: "Mauro aparece detrás. «¡Un euro! Vale mucho más. Pasa, pasa.»", C: "Mauro aparece con el guion. «¡Un euro! Lo que cuesta la cultura. Pasa, vecino.»" },
            mood: "smile", next: "libro-obra",
          },
          {
            id: "gritos",
            say: { A: "No sé. Escuché gritos y vine.", B: "No sé qué es. Oí gritos y vine.", C: "Ni idea. Oí gritos y fui a ver." },
            reply: { A: "Celia se ríe. «Los gritos están en la página 40. Pasa.»", B: "Celia se ríe. «Los gritos que oíste están en la página 40 de tu libro. Pasa.»", C: "Celia se ríe. «Los gritos vienen en la página 40 de ese libro. Pasa y compruébalo.»" },
            mood: "smile", next: "libro-obra",
          },
          {
            id: "fan",
            say: { A: "¿Ustedes son los autores? Me encanta.", B: "¿Ustedes son los autores? Me encanta.", C: "¿Son ustedes los autores? Me parece una maravilla." },
            reply: { A: "Mauro se ríe. «Autores no. Actores. El autor murió hace cien años.»", B: "Mauro se ríe. «Autores no, actores. El autor murió hace cien años. Pasa.»", C: "Mauro se ríe. «Autores, no: actores. El autor lleva cien años muerto. Pasa.»" },
            mood: "smile", next: "libro-obra",
          },
        ],
      },
      "libro-obra": {
        who: "mauro", mood: "smile",
        line: {
          A: "Mauro abre tu libro en la página 40. «Aquí está la escena que oíste. Ella grita, yo grito, ella vende el anillo. ¿Nos lees la acotación?»",
          B: "Mauro abre tu libro por la página 40. «Aquí está la escena que oíste desde el patio. Ella grita, yo grito, ella vende el anillo de la abuela. ¿Nos lees la acotación?»",
          C: "Mauro abre tu libro en la página 40 con dedos de experto. «Esta es la escena que oíste. Ella grita, yo grito, ella vende el anillo de la abuela. ¿Nos lees la acotación, por favor?»",
        },
        options: [
          {
            id: "leer",
            say: { A: "«Celia tira el anillo. Leonardo llora.» ¡Adelante!", B: "«Celia lanza el anillo al suelo. Leonardo llora en silencio.» ¡Adelante!", C: "«Celia arroja el anillo. Leonardo llora sin ruido.» Adelante, es suya." },
            reply: { A: "Hacen la escena para ti. Mauro llora de verdad. Celia enciende la luz del patio.", B: "Representan la escena solo para ti. Mauro llora de verdad y Celia enciende la luz del patio.", C: "Interpretan la escena para un público de uno. Mauro llora de verdad y Celia enciende la luz del patio, como en el estreno." },
            mood: "smile", end: "libro-lectura",
          },
          {
            id: "regalar",
            say: { A: "Les regalo el libro. Para el estreno.", B: "Les regalo el libro, para el estreno.", C: "Quédense con el libro; es mi regalo para el estreno." },
            reply: { A: "Celia lo abraza. «Nuestro primer regalo. Ven el sábado.»", B: "Celia abraza el libro. «Es nuestro primer regalo de público. Ven el sábado.»", C: "Celia estrecha el libro contra el pecho. «El primer regalo que recibe esta compañía. Ven el sábado, primera fila.»" },
            mood: "love", end: "libro-regalo",
          },
          {
            id: "critica",
            say: { A: "La escena es muy larga. Yo la cortaría.", B: "La escena es demasiado larga. Yo la cortaría.", C: "La escena es larguísima. Yo la cortaría a la mitad." },
            reply: { A: "Mauro cierra el libro. «Crítico no, gracias.» Cierra la puerta.", B: "Mauro cierra el libro de golpe. «Críticos no, gracias.» Y cierra la puerta.", C: "Mauro cierra el libro con dignidad. «Críticos no, gracias. Cien años y nadie la cortó.» La puerta se cierra." },
            mood: "angry", end: "sigue",
          },
        ],
      },
      "corazon-inicio": {
        who: "celia", mood: "love",
        line: {
          A: "Celia abre, ve el corazón y se olvida de su línea. «Mauro, ven. Hay alguien en la puerta que… no sé, me dan ganas de abrazarlo.»",
          B: "Celia abre la puerta, ve el corazón y se olvida de la línea. «Mauro, ven. Hay alguien en la puerta y… no sé por qué, me dan ganas de abrazarlo.»",
          C: "Celia abre, ve el corazón y se le borra la línea de la cabeza. «Mauro, ven. Hay alguien en la puerta y, no me preguntes por qué, me dan ganas de abrazarlo.»",
        },
        options: [
          {
            id: "preocupado",
            say: { A: "Escuché gritos. Me preocupé por ustedes.", B: "Oí gritos y me preocupé por ustedes.", C: "Oí gritos desde el patio y me preocupé por ustedes." },
            reply: { A: "Celia sonríe. «Nadie se preocupa por nosotros. Pasa. Somos actores.»", B: "Celia sonríe, emocionada. «Nadie en este conventillo se preocupa por nadie. Pasa. Somos actores, ¿sabes?»", C: "Celia sonríe con los ojos brillantes. «En este conventillo nadie se preocupa por nadie. Pasa. Somos actores, y esto era un ensayo.»" },
            mood: "love", next: "corazon-ensayo",
          },
          {
            id: "abrazo",
            say: { A: "Pues abrázame. Después me explican.", B: "Pues abrázame. Después me lo explican.", C: "Pues abrázame; las explicaciones pueden esperar." },
            reply: { A: "Celia te abraza. Mauro también. Huelen a café y a guion.", B: "Celia te abraza sin pensarlo. Mauro se suma. Huelen a café y a papel subrayado.", C: "Celia te abraza sin dudarlo y Mauro se une al abrazo. Huelen a café frío y a guion subrayado." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "leonardo",
            say: { A: "¿Quién es Leonardo?", B: "Una pregunta: ¿quién es Leonardo?", C: "Solo una duda: ¿quién es Leonardo?" },
            reply: { A: "Celia se ríe. «Un personaje. Somos actores. Pasa.»", B: "Celia se ríe con ternura. «Un personaje. Somos actores, esto es un ensayo. Pasa.»", C: "Celia se ríe. «Un personaje de hace cien años. Somos actores y esto es un ensayo. Pasa.»" },
            mood: "love", next: "corazon-ensayo",
          },
        ],
      },
      "corazon-ensayo": {
        who: "mauro", mood: "love",
        line: {
          A: "Mauro te hace pasar. «Es un ensayo. Pero contigo aquí… Celia, ¿y si hacemos la escena del reencuentro en vez de la pelea?»",
          B: "Mauro te hace pasar y cierra la puerta. «Esto es un ensayo. Pero contigo aquí… Celia, ¿y si hacemos la escena del reencuentro en lugar de la pelea?»",
          C: "Mauro te invita a pasar. «Era un ensayo. Pero contigo aquí cambia el ambiente. Celia, ¿y si en vez de la pelea hacemos la escena del reencuentro?»",
        },
        options: [
          {
            id: "mirar",
            say: { A: "Háganla. Yo soy el público.", B: "Háganla. Yo soy el público.", C: "Háganla, por favor. Yo seré el público." },
            reply: { A: "Hacen la escena. Celia llora de verdad. Mauro enciende la luz del patio.", B: "Representan el reencuentro. Celia llora de verdad y Mauro enciende la luz del patio.", C: "Interpretan el reencuentro solo para ti. Celia llora de verdad y Mauro enciende todas las luces del patio." },
            mood: "love", end: "corazon-escena",
          },
          {
            id: "actuar",
            say: { A: "¿Puedo hacer de Leonardo?", B: "¿Puedo hacer yo de Leonardo?", C: "¿Me dejan hacer de Leonardo?" },
            reply: { A: "Celia te da el guion. Lees. Ella te besa, como dice el guion.", B: "Celia te pone el guion en las manos. Lees tu línea y ella te besa, tal como indica la acotación.", C: "Celia te entrega el guion. Lees tu línea y ella te besa, exactamente como manda la acotación. Mauro aplaude." },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "irse",
            say: { A: "Los dejo ensayar. Vengo al estreno.", B: "Los dejo ensayar. Vengo al estreno.", C: "Los dejo ensayar en paz. Nos vemos en el estreno." },
            reply: { A: "Celia te da una entrada. «Primera fila.»", B: "Celia te da una entrada. «Primera fila, sin discusión.»", C: "Celia te entrega una entrada. «Primera fila. No se discute.»" },
            mood: "love", end: "estreno",
          },
        ],
      },
    },
    ends: {
      estreno: { text: { A: "Celia te da una entrada para el estreno. La puerta verde se queda abierta.", B: "Celia te regala una entrada para el estreno del sábado. Mauro enciende la luz del patio para mostrarte el escenario.", C: "Te vas con una entrada en el bolsillo y la promesa de primera fila. Mauro enciende las luces del patio: allí será el estreno." }, change: "luz", recap: "Celia y Mauro te invitaron al estreno de su obra." },
      policia: { text: { A: "Llega la policía. Celia y Mauro explican: es teatro. Todos se ríen.", B: "Llega la policía. Celia y Mauro enseñan el guion y, al final, hasta los agentes se ríen.", C: "Llega una patrulla. Tras leer el guion, un agente pregunta si hay entradas para el sábado. Todos se ríen." }, change: "policia", recap: "Llamaste a la policía por un ensayo de teatro." },
      sigue: { text: { A: "Te vas. Los gritos siguen detrás de la puerta.", B: "Sigues tu camino. Detrás de la puerta, el drama continúa.", C: "Sigues tu camino sin saber nunca qué pasó con el anillo de la abuela." }, change: "sigue", recap: "Te alejaste de los gritos del conventillo." },
      susurros: { text: { A: "Celia y Mauro ensayan muy bajito. El patio está tranquilo.", B: "Celia y Mauro siguen ensayando en voz baja. Los vecinos, por fin, duermen.", C: "Celia y Mauro ensayan su gran pelea en susurros. Resulta todavía más inquietante." }, change: "sonrie", recap: "Pediste a Celia y Mauro que ensayaran en voz baja." },
      "cuchillo-policia": { text: { A: "Llega la policía. Ven dos cuchillos y un guion. Explicas durante una hora.", B: "Llega la policía y encuentra dos cuchillos, un guion y tres personas pálidas. Explicarlo lleva una hora.", C: "Llega una patrulla y encuentra dos cuchillos, un guion subrayado y tres versiones de la noche. Explicarlo todo lleva una hora larga." }, change: "policia", recap: "Tu cuchillo y el de Mauro terminaron con la policía en el conventillo." },
      "cuchillo-escena": { text: { A: "Celia enciende la luz del patio. «El sábado haces de vecino con cuchillo. Es tu papel.»", B: "Celia enciende la luz del patio. «El sábado haces de vecino con cuchillo. Ya tienes papel en la obra.»", C: "Celia enciende las luces del patio como en un estreno. «El sábado haces de vecino con cuchillo. Felicidades: ya tienes papel.»" }, change: "luz", recap: "Tu duelo de cuchillos con Mauro terminó dentro de la obra." },
      "pistola-policia": { text: { A: "Llega la policía. Ven la pistola. Celia y Mauro muestran el guion. A ti te llevan.", B: "Llega la policía y lo primero que ve es tu pistola. Celia y Mauro enseñan el guion; a ti te llevan a la comisaría.", C: "Llega una patrulla y la pistola es lo primero que registran. Celia y Mauro muestran el guion y quedan libres; a ti te llevan a declarar." }, change: "policia", recap: "Tu pistola en la puerta del ensayo terminó con la policía." },
      "pistola-ensayo": { text: { A: "Celia y Mauro te dan una entrada. «Sin pistola el sábado, por favor.»", B: "Celia y Mauro te regalan una entrada para el estreno. «Sin pistola el sábado, por favor.»", C: "Celia y Mauro te regalan una entrada de primera fila. «El sábado, sin pistola, por favor. Con flores, si acaso.»" }, change: "sonrie", recap: "Celia y Mauro te perdonaron la pistola y te invitaron al estreno." },
      "pistola-puerta": { text: { A: "La puerta se cierra. Los gritos siguen. Ahora gritan sobre una pistola.", B: "La puerta verde se cierra. Los gritos vuelven, pero ahora el texto habla de una pistola.", C: "La puerta verde se cierra con doble llave. Los gritos regresan y, curiosamente, ahora la escena incluye una pistola." }, change: "sigue", recap: "Te fuiste del conventillo y tu pistola entró en la obra." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina el patio. La policía cierra el conventillo. Nadie duerme.", B: "Un helicóptero ilumina el patio del conventillo mientras la policía cierra la calle. Esta noche no duerme nadie.", C: "Un helicóptero barre el patio con su foco y la policía acordona el conventillo entero. Esta noche no duerme nadie, ni el niño pequeño." }, change: "helicoptero", recap: "Tu granada terminó con un helicóptero sobre el conventillo." },
      "granada-funcion": { text: { A: "Celia y Mauro terminan la escena. El patio aplaude. Se encienden todas las luces.", B: "Celia y Mauro terminan la escena y el patio entero aplaude en pijama. Se encienden todas las luces del conventillo.", C: "Celia y Mauro cierran la escena ante un público en pijama que aplaude de pie. Todas las luces del conventillo se encienden a la vez." }, change: "luz", recap: "Tu granada provocó una función improvisada en el patio." },
      "granada-vecinos": { text: { A: "Los vecinos te gritan desde las puertas. Te vas. Nadie duerme.", B: "Los vecinos te gritan desde cada puerta del patio. Te vas con la granada guardada. Nadie duerme esta noche.", C: "Los vecinos te despiden a gritos desde cada puerta del patio. Te vas con la granada en el bolsillo y el conventillo en vela." }, change: "enojado", recap: "Los vecinos del conventillo se quedaron enojados y despiertos por tu granada." },
      "gas-policia": { text: { A: "Llega la policía. Ven dos gases pimienta y un guion. Todos explican a la vez.", B: "Llega la policía y encuentra dos gases pimienta, un guion y una mancha en el suelo. Todos explican a la vez.", C: "Llega una patrulla y encuentra dos gases pimienta, un guion subrayado y una mancha en el umbral. Todos hablan a la vez y nadie se entiende." }, change: "policia", recap: "Tu gas pimienta y el de Celia terminaron con la policía." },
      "gas-estreno": { text: { A: "Celia te da una entrada. Se enciende la luz del patio: allí será el estreno.", B: "Celia te regala una entrada para el sábado. Mauro enciende la luz del patio: allí será el estreno.", C: "Celia te entrega una entrada de primera fila. Mauro enciende las luces del patio: allí, entre vecinos con gas, será el estreno." }, change: "luz", recap: "Celia y tú guardaron el gas y te invitó al estreno." },
      "gas-complices": { text: { A: "Celia y tú se ríen. Mauro promete comprarse un gas también.", B: "Celia y tú se ríen de la escena. Mauro promete comprarse un gas pimienta esta semana.", C: "Celia y tú se ríen como viejos cómplices. Mauro promete comprarse un gas pimienta, por fin." }, change: "sonrie", recap: "Celia y tú se entendieron por el gas pimienta." },
      "lapiz-nota": { text: { A: "Celia pega tu nota en la puerta. Ensayan en voz baja.", B: "Celia pega tu nota en la puerta verde y siguen ensayando en voz baja.", C: "Celia pega tu nota en la puerta verde, como recordatorio, y siguen odiándose en susurros." }, change: "sonrie", recap: "Tu nota a lápiz hizo que Celia y Mauro ensayaran en voz baja." },
      "lapiz-guion": { text: { A: "Te vas con una entrada. El guion tiene tus marcas de lápiz.", B: "Te vas con una entrada para el sábado. El guion se queda lleno de tus marcas de lápiz.", C: "Te vas con una entrada de primera fila. El guion conserva tus marcas de lápiz en cada grito de Mauro." }, change: "luz", recap: "Fuiste el apuntador de Celia y Mauro con tu lápiz." },
      "lapiz-coautor": { text: { A: "Celia escribe tu frase en el guion. «Ahora eres coautor.»", B: "Celia copia tu frase en el guion con tu lápiz. «Ahora eres coautor. Sin cobrar.»", C: "Celia anota tu frase en el guion con tu propio lápiz. «Coautor desde hoy. Sin sueldo, pero con entrada.»" }, change: "sonrie", recap: "Tu lápiz cambió una línea de la obra de Celia y Mauro." },
      "libro-lectura": { text: { A: "La luz del patio se enciende. Celia y Mauro te devuelven el libro con una firma.", B: "La luz del patio se enciende. Celia y Mauro te devuelven tu libro, firmado por los dos.", C: "La luz del patio se enciende como en un estreno. Celia y Mauro te devuelven el libro con dos firmas y una dedicatoria." }, change: "luz", recap: "Leíste la acotación de tu libro para Celia y Mauro." },
      "libro-regalo": { text: { A: "Celia guarda tu libro con el guion. Te dan una entrada para el sábado.", B: "Celia guarda tu libro junto al guion. Te regalan una entrada para el estreno del sábado.", C: "Celia coloca tu libro junto al guion, como un amuleto. Te regalan una entrada de primera fila para el sábado." }, change: "sonrie", recap: "Les regalaste tu libro a Celia y Mauro." },
      "corazon-abrazo": { text: { A: "Los tres se abrazan en la puerta verde. Nadie grita.", B: "Los tres se abrazan en la puerta verde. Por primera vez en la noche, nadie grita.", C: "Los tres se abrazan en el umbral de la puerta verde. Por primera vez en toda la noche, el conventillo está en silencio." }, change: "abraza", recap: "Celia y Mauro te abrazaron en la puerta del ensayo." },
      "corazon-escena": { text: { A: "La luz del patio se enciende. Celia y Mauro hacen la escena del reencuentro para ti.", B: "La luz del patio se enciende y Celia y Mauro representan la escena del reencuentro solo para ti.", C: "Las luces del patio se encienden y Celia y Mauro interpretan el reencuentro para un público de una sola persona." }, change: "luz", recap: "Celia y Mauro ensayaron la escena del reencuentro gracias a ti." },
      "corazon-beso": { text: { A: "Celia te besa como dice el guion. Mauro aplaude. Eres Leonardo por una noche.", B: "Celia te besa tal como manda el guion. Mauro aplaude desde la puerta. Por una noche, eres Leonardo.", C: "Celia te besa exactamente como indica la acotación. Mauro aplaude desde la puerta y, por una noche, eres Leonardo." }, change: "beso", recap: "Hiciste de Leonardo y Celia te besó según el guion." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Qué haces si dos personas pelean en tu edificio?", B: "¿Alguna vez una pelea de otras personas te dio miedo de verdad?", C: "¿Cómo se calma una situación que ya tiene dos cuchillos sobre la mesa?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Tienes miedo cuando escuchas gritos de noche?", B: "¿Qué harías si alguien armado tocara a tu puerta?", C: "¿Qué consecuencias tiene llegar armado a un conflicto que no es tuyo?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Qué haces si suena una alarma en tu edificio?", B: "¿Alguna vez evacuaron tu casa o tu trabajo y cómo fue?", C: "¿Cómo reacciona tu comunidad ante el pánico colectivo?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Qué haces para sentirte seguro en tu casa?", B: "¿Alguna vez llevaste algo para defenderte y por qué?", C: "¿Es sensato o paranoico abrir la puerta de noche con algo para defenderse?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes notas cuando ves una película?", B: "¿Alguna vez corregiste el texto de otra persona?", C: "¿Qué cambia en un texto cuando alguien de fuera lo lee con lápiz en mano?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Qué libro tienes en tu mesa ahora?", B: "¿Qué libro compraste por casualidad y te sorprendió?", C: "¿Por qué una obra de teatro de hace cien años puede sonar actual?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿A quién abrazas cuando estás feliz?", B: "¿Qué escena de teatro o de cine te emocionó más?", C: "¿Puede un desconocido cambiar el tono de una noche solo con aparecer?" } },
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
      "cuchillo-inicio": {
        who: "gustavo", mood: "scared",
        line: {
          A: "Gustavo ve el cuchillo y se pone sobrio de golpe. Da dos pasos atrás. «¡Eh, eh! ¡Tranquilo! Toma la cartera. Y la corbata, que es de mi cuñado.»",
          B: "Gustavo ve el cuchillo y se le pasa la borrachera en un segundo. Retrocede dos pasos. «¡Eh, eh! Tranquilo. Toma la cartera. Y la corbata también, que es de mi cuñado.»",
          C: "Gustavo ve el cuchillo y la sobriedad le llega de golpe, como una bofetada. Retrocede hasta el farol. «Tranquilo, caballero. La cartera es tuya. La corbata también, aunque es de mi cuñado y la quiere más que a mí.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "No quiero nada. Lo guardo. ¿Buscas un hotel?", B: "No quiero nada tuyo. Lo guardo. ¿Buscas un hotel?", C: "No quiero nada de lo tuyo. Lo guardo ahora mismo. ¿Buscas un hotel?" },
            reply: { A: "Gustavo no se mueve. «Guardado del todo, ¿sí? Entonces hablamos.»", B: "Gustavo no se mueve hasta que el cuchillo desaparece. «Guardado del todo, ¿sí? Bien. Entonces hablamos.»", C: "Gustavo espera a que el cuchillo desaparezca por completo. «Guardado hasta el fondo, ¿sí? Entonces podemos hablar de hoteles.»" },
            mood: "worried", next: "cuchillo-corbata",
          },
          {
            id: "corbata",
            say: { A: "Es para la corbata. Ese nudo te está ahogando.", B: "Es para la corbata. Ese nudo te está ahogando.", C: "Es por la corbata: ese nudo te está estrangulando lentamente." },
            reply: { A: "Gustavo se tapa la corbata. «¡Es de mi cuñado! ¡Ni la toques!» Levanta los puños.", B: "Gustavo se cubre la corbata con las dos manos. «¡Es de mi cuñado! ¡Ni se te ocurra!» Levanta los puños como un boxeador antiguo.", C: "Gustavo protege la corbata con ambas manos. «¡Es de mi cuñado! ¡Ni te acerques!» Y levanta los puños en una pose de boxeo de 1920." },
            mood: "angry", next: "cuchillo-corbata",
          },
          {
            id: "cartera",
            say: { A: "Bueno. Dame la cartera entonces.", B: "Bueno, pues dame la cartera entonces.", C: "De acuerdo. Entrégame la cartera entonces." },
            reply: { A: "Gustavo grita: «¡Policía!» Un auto de policía pasa justo por la esquina.", B: "Gustavo grita con voz de padrino: «¡Policía! ¡Me roban!» Y una patrulla, por mala suerte, dobla la esquina.", C: "Gustavo grita con su mejor voz de brindis: «¡Policía! ¡Me asaltan!» Una patrulla, con un sentido de la oportunidad asombroso, dobla la esquina." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-corbata": {
        who: "gustavo", mood: "worried",
        line: {
          A: "Gustavo baja los puños, pero no suelta la corbata. «Está bien. Hablemos. Pero el cuchillo, lejos. Busco el Hotel Imperial. Con columnas.»",
          B: "Gustavo baja los puños, aunque sigue agarrado a la corbata. «Está bien, hablemos. Pero el cuchillo, bien lejos. Busco el Hotel Imperial, el de las columnas.»",
          C: "Gustavo baja la guardia, sin soltar la corbata de su cuñado. «De acuerdo, hablemos. El cuchillo, a kilómetros. Busco el Hotel Imperial: columnas, alfombra, dignidad.»",
        },
        options: [
          {
            id: "indicar",
            say: { A: "Guardado. El Imperial está en el centro. Te acompaño si quieres.", B: "Ya está guardado. El Imperial queda en el centro. Si quieres, te acompaño.", C: "Guardado del todo. El Imperial queda en el centro. Te acompaño, si te atreves." },
            reply: { A: "Gustavo niega. «¿Con el cuchillo? No. Pero dame la dirección.»", B: "Gustavo niega con la cabeza. «¿Acompañado por el del cuchillo? No, gracias. Pero la dirección sí.»", C: "Gustavo niega con elegancia. «¿Escoltado por el del cuchillo? Declino. Pero acepto la dirección.»" },
            mood: "worried", end: "cuchillo-solo",
          },
          {
            id: "tarjeta",
            say: { A: "¿Tienes la tarjeta del hotel? Yo la miro. Tú miras el cuchillo guardado.", B: "¿Tienes la tarjeta del hotel? Yo la miro y tú vigilas que el cuchillo siga guardado.", C: "¿Llevas la tarjeta del hotel? La leo yo; tú vigilas que el cuchillo no vuelva a salir." },
            reply: { A: "Gustavo saca una tarjeta sin dejar de mirarte. «Toma. Y ojo con el bolsillo.»", B: "Gustavo saca una tarjeta sin quitarte los ojos de encima. «Toma. Y ese bolsillo, quieto.»", C: "Gustavo extrae una tarjeta de la chaqueta sin perderte de vista. «Toma. Y el bolsillo del cuchillo, inmóvil.»" },
            mood: "worried", next: "tarjeta",
          },
          {
            id: "irse",
            say: { A: "Perdón por el susto. Me voy.", B: "Perdona el susto. Me voy.", C: "Perdona el susto; me retiro." },
            reply: { A: "Gustavo corre hacia la avenida con la corbata al viento.", B: "Gustavo no espera: corre hacia la avenida con la corbata al viento.", C: "Gustavo no espera al final de la frase: corre hacia la avenida, corbata al viento." },
            mood: "scared", end: "corre",
          },
        ],
      },
      "pistola-inicio": {
        who: "gustavo", mood: "terror",
        line: {
          A: "Gustavo ve la pistola y levanta las manos tan rápido que casi se cae. «¡Toma la cartera! ¡Toma la corbata! ¡Toma el discurso del padrino!»",
          B: "Gustavo ve la pistola y levanta las manos tan rápido que pierde el equilibrio. «¡Toma la cartera! ¡Toma la corbata! ¡Toma hasta el discurso del padrino!»",
          C: "Gustavo ve la pistola y alza las manos con tal ímpetu que el farol tiene que sostenerlo. «¡La cartera! ¡La corbata! ¡El discurso del padrino, que es lo más valioso que llevo!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "No es un robo. La guardo. ¿Buscas un hotel?", B: "Esto no es un robo. La guardo. ¿Buscas un hotel?", C: "No es ningún asalto. La guardo. ¿Buscas un hotel?" },
            reply: { A: "Gustavo baja las manos un poco. «¿No es un robo? Entonces… sí. El Imperial.»", B: "Gustavo baja las manos a medias. «¿No es un robo? Entonces… sí, busco el Imperial. Con columnas.»", C: "Gustavo baja las manos hasta la altura de los hombros, por si acaso. «¿No es un asalto? Entonces, sí: busco el Imperial. Columnas y alfombra.»" },
            mood: "scared", next: "pistola-hotel",
          },
          {
            id: "ordenar",
            say: { A: "Manos abajo. Y camina derecho.", B: "Baja las manos. Y camina derecho.", C: "Manos abajo. Y camina en línea recta, si puedes." },
            reply: { A: "Gustavo camina en línea recta, muy serio. Casi lo logra.", B: "Gustavo camina en línea recta con una concentración enorme, como en un control de alcoholemia. Casi lo logra.", C: "Gustavo camina en línea recta con la solemnidad de un control de alcoholemia. Casi lo consigue; el farol lo frena." },
            mood: "scared", next: "pistola-hotel",
          },
          {
            id: "discurso",
            say: { A: "Sí. Dame el discurso.", B: "Sí, dame el discurso.", C: "De acuerdo: dame el discurso." },
            reply: { A: "Gustavo te da un papel arrugado y corre hacia la avenida.", B: "Gustavo te pone un papel arrugado en la mano y sale corriendo hacia la avenida.", C: "Gustavo te entrega un papel arrugado con reverencia y huye hacia la avenida a una velocidad impropia de un padrino." },
            mood: "scared", end: "pistola-huye",
          },
        ],
      },
      "pistola-hotel": {
        who: "gustavo", mood: "scared",
        line: {
          A: "Gustavo baja las manos despacio. «Bueno. Busco el Hotel Imperial. Pero prefiero buscarlo solo, si no te ofende. Por la pistola, digo.»",
          B: "Gustavo baja las manos muy despacio. «Bueno. Busco el Hotel Imperial. Pero prefiero buscarlo solo, si no te ofende. Lo digo por la pistola.»",
          C: "Gustavo baja las manos con toda la cautela del mundo. «Bien. Busco el Hotel Imperial. Pero, si no te ofende, prefiero buscarlo solo. Es por la pistola, no por ti.»",
        },
        options: [
          {
            id: "acompanar",
            say: { A: "Te acompaño igual. Es más seguro.", B: "Te acompaño igual. Es más seguro.", C: "Te acompaño de todos modos; es más seguro." },
            reply: { A: "Gustavo ríe nervioso. «¿Más seguro?» Caminan. Una patrulla ve la pistola y para.", B: "Gustavo suelta una risa nerviosa. «¿Más seguro? Bueno.» Caminan juntos hasta que una patrulla ve la pistola y frena.", C: "Gustavo ríe sin ganas. «¿Más seguro? Si tú lo dices.» Caminan juntos hasta que una patrulla ve el bulto de la pistola y frena en seco." },
            mood: "worried", end: "pistola-patrulla",
          },
          {
            id: "indicar",
            say: { A: "Todo recto, luego a la derecha. Buenas noches.", B: "Todo recto y luego a la derecha. Buenas noches.", C: "Todo recto hasta la plaza y luego a la derecha. Buenas noches." },
            reply: { A: "Gustavo repite: «Recto, derecha, pistola.» Se aleja en zigzag.", B: "Gustavo repite en voz baja: «Recto, derecha, pistola, recto.» Y se aleja en zigzag.", C: "Gustavo memoriza en voz alta: «Recto, derecha, pistola, recto.» Y se aleja en un zigzag prudente." },
            mood: "tipsy", end: "pistola-solo",
          },
          {
            id: "taxi",
            say: { A: "Te pido un taxi. Y me quedo lejos.", B: "Te pido un taxi y me quedo lejos.", C: "Te pido un taxi y me mantengo a distancia." },
            reply: { A: "Gustavo asiente. «Lejos. Gracias.» Llama a su primo para contarle.", B: "Gustavo asiente. «Lejos, sí. Gracias.» Y llama a su primo para contarle lo de la pistola.", C: "Gustavo asiente, aliviado. «A distancia. Gracias.» Y llama a su primo para contarle lo de la pistola con todo detalle." },
            mood: "worried", end: "taxi",
          },
        ],
      },
      "granada-inicio": {
        who: "gustavo", mood: "scared",
        line: {
          A: "Gustavo ve la granada, se ríe, la mira otra vez y sale corriendo. A los diez metros se detiene, sin aire. «¿Es… es de verdad?»",
          B: "Gustavo ve la granada, se ríe, la mira mejor y sale corriendo. A los diez metros se detiene, sin aliento. «¿Es… es de verdad eso?»",
          C: "Gustavo ve la granada, suelta una carcajada, la mira de nuevo y echa a correr. Diez metros después se detiene, doblado por la mitad. «¿Eso… eso es de verdad?»",
        },
        options: [
          {
            id: "recuerdo",
            say: { A: "Es un recuerdo de la boda de mi primo.", B: "Es un recuerdo de la boda de mi primo.", C: "Es un detalle de boda; mi primo tiene un gusto peculiar." },
            reply: { A: "Gustavo vuelve despacio. «¿Qué bodas son esas? En la mía dieron almendras.»", B: "Gustavo regresa con cautela. «¿Qué clase de boda da granadas? En la de mi prima dieron almendras.»", C: "Gustavo vuelve paso a paso. «¿Qué clase de boda reparte granadas? En la de mi prima dieron almendras, como la gente normal.»" },
            mood: "worried", next: "granada-recuerdo",
          },
          {
            id: "guardar",
            say: { A: "La guardo. Perdón. ¿Qué hotel buscas?", B: "La guardo, perdona. ¿Qué hotel buscas?", C: "La guardo ahora mismo, perdona. ¿Qué hotel buscas?" },
            reply: { A: "Gustavo vuelve. «Guardada, ¿sí? El Imperial. Con columnas.»", B: "Gustavo regresa con cuidado. «Guardada, ¿verdad? Busco el Imperial. El de las columnas.»", C: "Gustavo vuelve sin perder de vista tu bolsillo. «Guardada, ¿cierto? Busco el Imperial, el de las columnas.»" },
            mood: "worried", next: "granada-recuerdo",
          },
          {
            id: "lanzar",
            say: { A: "¡Corre, Gustavo! ¡Es una broma!", B: "¡Corre, Gustavo! Es broma, es broma.", C: "¡Corre, Gustavo! Es una broma, pero corre." },
            reply: { A: "Gustavo corre por la avenida gritando. Se encienden ventanas. Suenan sirenas.", B: "Gustavo sale corriendo por la avenida, gritando a todo pulmón. Se encienden ventanas y suenan sirenas.", C: "Gustavo corre por la avenida gritando como en un brindis de pánico. Las ventanas se encienden y las sirenas no tardan." },
            mood: "scared", end: "granada-sirenas",
          },
        ],
      },
      "granada-recuerdo": {
        who: "gustavo", mood: "tipsy",
        line: {
          A: "Gustavo vuelve despacio. «Yo guardo cosas de boda en el bolsillo: una almendra, una servilleta. Tú, una granada. Bueno. ¿Y el Hotel Imperial?»",
          B: "Gustavo vuelve paso a paso. «Yo guardo recuerdos de boda en el bolsillo: una almendra, una servilleta con un número. Tú guardas una granada. Bueno. ¿Y el Hotel Imperial?»",
          C: "Gustavo regresa con dignidad recuperada. «Yo guardo recuerdos de boda en el bolsillo: una almendra, una servilleta con un teléfono. Tú, una granada. Cada uno lo suyo. ¿Y el Imperial?»",
        },
        options: [
          {
            id: "indicar",
            say: { A: "En el centro, a diez minutos. Te acompaño. La granada se queda guardada.", B: "En el centro, a diez minutos. Te acompaño, y la granada se queda guardada.", C: "En el centro, a diez minutos. Te acompaño; la granada permanece guardada." },
            reply: { A: "Gustavo acepta. «Guardada. Y tú al otro lado de la acera.»", B: "Gustavo acepta. «Guardada. Y tú caminas por el otro lado de la acera, por si acaso.»", C: "Gustavo acepta con condiciones. «Guardada. Y tú caminas por la otra acera, que la amistad también tiene límites.»" },
            mood: "tipsy", end: "granada-imperial",
          },
          {
            id: "cambio",
            say: { A: "Te cambio la granada por tu corbata.", B: "Te cambio la granada por tu corbata.", C: "Te propongo un trueque: la granada por tu corbata." },
            reply: { A: "Gustavo se ríe. «¡Es de mi cuñado! Toma una almendra.»", B: "Gustavo se ríe a carcajadas. «¡La corbata es de mi cuñado! Toma una almendra, mejor.»", C: "Gustavo se ríe con ganas. «La corbata es de mi cuñado; no se negocia. Acepta una almendra como compensación.»" },
            mood: "laugh", end: "granada-almendra",
          },
          {
            id: "policia",
            say: { A: "Mejor llamo a la policía para que la revisen.", B: "Mejor llamo a la policía para que la revisen.", C: "Mejor llamo a la policía para que la examinen." },
            reply: { A: "Llamas. Llegan patrullas. Gustavo saluda a todos.", B: "Llamas. Llegan dos patrullas y un camión. Gustavo saluda a los agentes como a invitados.", C: "Llamas. Llegan dos patrullas y un camión de artificieros. Gustavo saluda a cada agente como a un invitado de la boda." },
            mood: "worried", end: "granada-sirenas",
          },
        ],
      },
      "gas-inicio": {
        who: "gustavo", mood: "surprised",
        line: {
          A: "Gustavo ve el gas pimienta y se pone muy digno. «¿Gas? ¿A mí? Soy padrino de boda, no un delincuente. Bueno, un poco borracho sí.»",
          B: "Gustavo ve el gas pimienta y se pone muy digno. «¿Gas pimienta? ¿A mí? Soy padrino de boda, no un delincuente. Un poco borracho, eso sí, lo admito.»",
          C: "Gustavo ve el gas pimienta y se yergue con dignidad ofendida. «¿Gas pimienta? ¿Para mí? Soy el padrino de una boda, no un delincuente. Ebrio, lo reconozco; peligroso, jamás.»",
        },
        options: [
          {
            id: "distancia",
            say: { A: "Es por si acaso. Mantén la distancia y hablamos.", B: "Es por si acaso. Mantén la distancia y hablamos.", C: "Es por precaución. Mantén la distancia y conversamos." },
            reply: { A: "Gustavo se aleja dos metros. «Desde aquí. Perfecto.»", B: "Gustavo retrocede dos metros con exagerado respeto. «Desde aquí, perfecto.»", C: "Gustavo retrocede exactamente dos metros, con respeto teatral. «Desde aquí, perfecto. Distancia diplomática.»" },
            mood: "tipsy", next: "gas-distancia",
          },
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. ¿Buscas tu hotel?", B: "Perdona, lo guardo. ¿Buscas tu hotel?", C: "Perdona, lo guardo ahora mismo. ¿Buscas tu hotel?" },
            reply: { A: "Gustavo sonríe. «Gracias. Pero me quedo lejos, por si acaso.»", B: "Gustavo sonríe, aliviado. «Gracias. Aun así, me quedo a distancia, por si acaso.»", C: "Gustavo sonríe con alivio. «Gracias. Aun así, me quedo a distancia, que el gas tiene memoria.»" },
            mood: "tipsy", next: "gas-distancia",
          },
          {
            id: "rociar",
            say: { A: "Da un paso más y lo uso.", B: "Da un paso más y lo uso.", C: "Un paso más y lo uso." },
            reply: { A: "Gustavo da un paso. Pierde el equilibrio. Lo rocías. Cae llorando.", B: "Gustavo da un paso, borracho, y pierde el equilibrio hacia ti. Lo rocías. Cae al suelo llorando.", C: "Gustavo da un paso, el alcohol lo empuja hacia ti y lo rocías. Cae al suelo entre lágrimas, tosiendo el discurso del padrino." },
            mood: "pain", end: "gas-rociado",
          },
        ],
      },
      "gas-distancia": {
        who: "gustavo", mood: "tipsy",
        line: {
          A: "Gustavo habla desde dos metros, con las manos a la vista. «Desde aquí te digo: busco el Hotel Imperial. ¿Me guías a distancia?»",
          B: "Gustavo habla desde dos metros, con las manos bien a la vista. «Desde aquí te lo digo: busco el Hotel Imperial. ¿Me guías a distancia?»",
          C: "Gustavo habla desde dos metros, con las manos a la vista como en un documental policial. «Desde aquí lo declaro: busco el Hotel Imperial. ¿Me guías a distancia?»",
        },
        options: [
          {
            id: "guiar",
            say: { A: "Sí. Tú caminas adelante. Yo te digo por dónde.", B: "Sí. Tú caminas delante y yo te voy diciendo por dónde.", C: "Sí. Tú vas delante y yo te indico el camino desde atrás." },
            reply: { A: "Gustavo camina adelante. «¿Izquierda? ¿Derecha? ¡Dime!»", B: "Gustavo camina delante, obediente. «¿Izquierda? ¿Derecha? ¡Dime algo!»", C: "Gustavo avanza como un explorador guiado por radio. «¿Izquierda? ¿Derecha? ¡Instrucciones, por favor!»" },
            mood: "smile", end: "gas-escolta",
          },
          {
            id: "tarjeta",
            say: { A: "Tira tu tarjeta del hotel al suelo. La miro yo.", B: "Deja la tarjeta del hotel en el suelo. La miro yo.", C: "Deja la tarjeta del hotel en el suelo y la reviso yo." },
            reply: { A: "Gustavo deja una tarjeta en el suelo y retrocede. «Toda tuya.»", B: "Gustavo deja una tarjeta en la acera y retrocede dos pasos. «Toda tuya. A distancia.»", C: "Gustavo deposita una tarjeta en la acera y retrocede con ceremonia. «Toda tuya. Protocolo de distancia respetado.»" },
            mood: "smile", next: "tarjeta",
          },
          {
            id: "irse",
            say: { A: "Suerte. Me voy.", B: "Suerte con el hotel. Me voy.", C: "Suerte con el hotel; me retiro." },
            reply: { A: "Gustavo saluda como un soldado y se va en zigzag.", B: "Gustavo hace un saludo militar y se aleja en zigzag.", C: "Gustavo ejecuta un saludo militar impecable y se aleja en zigzag." },
            mood: "tipsy", end: "solo",
          },
        ],
      },
      "lapiz-inicio": {
        who: "gustavo", mood: "surprised",
        line: {
          A: "Gustavo ve el lápiz y abre los ojos. «¡Un lápiz! Se me perdió el discurso del padrino. Escríbelo tú mientras lo recuerdo, antes de que se me olvide otra vez.»",
          B: "Gustavo ve el lápiz y se le iluminan los ojos. «¡Un lápiz! ¡Justo! Se me perdió el discurso del padrino. Escríbelo tú mientras lo recuerdo, antes de que se me vuelva a olvidar.»",
          C: "Gustavo ve el lápiz como quien ve una señal divina. «¡Un lápiz! Se me perdió el discurso del padrino. Escríbelo tú mientras lo recuerdo, antes de que se me esfume otra vez.»",
        },
        options: [
          {
            id: "escribir",
            say: { A: "Dicta. Yo escribo.", B: "Dicta, que yo escribo.", C: "Dicta; yo tomo nota." },
            reply: { A: "Gustavo se endereza. «Querida prima…» Tú escribes.", B: "Gustavo se endereza la corbata. «Querida prima…» Tú escribes en una servilleta.", C: "Gustavo se ajusta la corbata de su cuñado. «Querida prima…» Tú escribes en el dorso de una servilleta." },
            mood: "smile", next: "lapiz-discurso",
          },
          {
            id: "mapa",
            say: { A: "Primero te dibujo un mapa al hotel. Después el discurso.", B: "Primero te dibujo un mapa hasta el hotel. Después, el discurso.", C: "Primero un mapa hasta el hotel; después, el discurso." },
            reply: { A: "Gustavo mira el mapa al revés. «¿Y el discurso dónde está en el mapa?»", B: "Gustavo gira el mapa tres veces. «Bonito. ¿Y el discurso, dónde está en el mapa?»", C: "Gustavo sostiene el mapa al revés con gran respeto. «Precioso. ¿Y el discurso, en qué calle queda?»" },
            mood: "tipsy", next: "lapiz-discurso",
          },
          {
            id: "rechazar",
            say: { A: "Yo no escribo discursos. Toma, escríbelo tú.", B: "Yo no escribo discursos. Toma el lápiz y escríbelo tú.", C: "Yo no escribo discursos ajenos. Toma el lápiz y hazlo tú." },
            reply: { A: "Gustavo escribe tres líneas en su mano y se va feliz.", B: "Gustavo escribe tres líneas en la palma de la mano y se aleja feliz, leyéndolas.", C: "Gustavo escribe tres líneas en la palma de la mano y se aleja feliz, recitándolas a la calle." },
            mood: "smile", end: "lapiz-mano",
          },
        ],
      },
      "lapiz-discurso": {
        who: "gustavo", mood: "smile",
        line: {
          A: "Gustavo dicta: «Querida prima, el amor es como un hotel con columnas…» Se detiene. «¿Qué sigue? Ayúdame.»",
          B: "Gustavo dicta con los ojos cerrados: «Querida prima, el amor es como un hotel con columnas…» Se detiene. «¿Y qué sigue? Ayúdame, por favor.»",
          C: "Gustavo dicta con solemnidad: «Querida prima, el amor es como un hotel con columnas…» Se queda en blanco. «¿Y después? Ayúdame, que la metáfora se me escapa.»",
        },
        options: [
          {
            id: "completar",
            say: { A: "«…siempre hay una habitación para dos.»", B: "«…siempre tiene una habitación para dos.»", C: "«…siempre reserva una habitación para dos.»" },
            reply: { A: "Gustavo llora. Abraza la servilleta. «Es perfecto.»", B: "Gustavo se emociona y abraza la servilleta. «Es perfecto. Es mejor que el original.»", C: "Gustavo rompe a llorar y abraza la servilleta. «Perfecto. Mejor que el original, que tampoco era gran cosa.»" },
            mood: "love", end: "lapiz-discurso",
          },
          {
            id: "firmar",
            say: { A: "Firma aquí. Mañana se lo das a tu prima.", B: "Firma aquí y mañana se lo das a tu prima.", C: "Firma aquí; mañana se lo entregas a tu prima en persona." },
            reply: { A: "Gustavo firma con el lápiz. «Padrino. Firmado.»", B: "Gustavo firma con tu lápiz y una floritura. «Padrino de la boda. Firmado.»", C: "Gustavo firma con tu lápiz, con una floritura de notario. «Padrino oficial. Firmado y sellado.»" },
            mood: "smile", end: "lapiz-discurso",
          },
          {
            id: "llamar",
            say: { A: "Mejor llama a tu prima y léeselo ahora.", B: "Mejor llama a tu prima y léeselo ahora mismo.", C: "Mejor llama a tu prima y se lo lees ahora, con el lápiz todavía caliente." },
            reply: { A: "Gustavo llama. Lee el discurso. En el hotel, todos se ríen y le dicen dónde está.", B: "Gustavo llama y lee el discurso a gritos. Al otro lado, media boda se ríe y le explica dónde está el Imperial.", C: "Gustavo llama y declama el discurso a toda la avenida. Al otro lado, media boda se ríe y le dicta el camino al Imperial." },
            mood: "smile", end: "lapiz-llamada",
          },
        ],
      },
      "libro-inicio": {
        who: "gustavo", mood: "laugh",
        line: {
          A: "Gustavo ve el libro y se ríe a carcajadas. «¡Un libro! ¿Eres el cura de la boda? ¡Te buscamos toda la tarde!»",
          B: "Gustavo ve el libro y se ríe a carcajadas. «¡Un libro! ¿Tú eres el cura de la boda? ¡Te estuvimos buscando toda la tarde!»",
          C: "Gustavo ve el libro y estalla en carcajadas. «¡Un libro! ¿Tú eres el cura de la boda? ¡Te buscamos toda la tarde y al final casó mi tío!»",
        },
        options: [
          {
            id: "no",
            say: { A: "No soy cura. Es una novela. ¿Buscas tu hotel?", B: "No soy cura, es una novela. ¿Buscas tu hotel?", C: "No soy cura; es una novela. ¿Buscas tu hotel?" },
            reply: { A: "Gustavo se ríe. «Una novela. Mejor. Sí, busco el Imperial.»", B: "Gustavo se ríe. «Una novela. Mejor todavía. Sí, busco el Imperial, con columnas.»", C: "Gustavo se ríe. «Una novela. Casi mejor que un cura. Busco el Imperial, el de las columnas.»" },
            mood: "tipsy", next: "libro-novela",
          },
          {
            id: "seguir",
            say: { A: "Sí, soy el cura. ¿Dónde estabas tú?", B: "Sí, soy el cura. ¿Y tú dónde estabas?", C: "Sí, soy el cura. ¿Y tú dónde te habías metido?" },
            reply: { A: "Gustavo se ríe. «¡Perdón, padre! Se me perdió el discurso.»", B: "Gustavo se ríe y se persigna mal. «¡Perdón, padre! Se me perdió el discurso del padrino.»", C: "Gustavo se ríe y se persigna al revés. «¡Perdón, padre! Confieso que se me perdió el discurso del padrino.»" },
            mood: "laugh", next: "libro-novela",
          },
          {
            id: "leer",
            say: { A: "Te leo un poco. A ver si te calma.", B: "Te leo un párrafo. A ver si te calma.", C: "Te leo un párrafo; a ver si te serena." },
            reply: { A: "Gustavo se sienta en la acera y escucha. Se duerme.", B: "Gustavo se sienta en el borde de la acera y escucha. En dos párrafos, se duerme.", C: "Gustavo se sienta en la acera y escucha con atención. Al tercer párrafo, ronca." },
            mood: "sleepy", end: "libro-duerme",
          },
        ],
      },
      "libro-novela": {
        who: "gustavo", mood: "tipsy",
        line: {
          A: "Gustavo mira la tapa. «Una novela. De amor, seguro. Mi prima se casó hoy. ¿Tu libro sabe dónde está el Hotel Imperial?»",
          B: "Gustavo mira la tapa con atención. «Una novela. De amor, seguro. Mi prima se casó hoy, ¿sabes? ¿Tu libro sabe dónde queda el Hotel Imperial?»",
          C: "Gustavo examina la tapa como un crítico. «Una novela. Romántica, apuesto. Mi prima se casó hoy. ¿Tu libro incluye la dirección del Hotel Imperial?»",
        },
        options: [
          {
            id: "mapa",
            say: { A: "Al final hay un mapa. Mira: aquí está el Imperial.", B: "Al final tiene un mapa de la ciudad. Mira: aquí está el Imperial.", C: "Al final trae un mapa de la ciudad. Mira: el Imperial queda justo aquí." },
            reply: { A: "Gustavo mira la página. «¡Lo veo!» No hay mapa, pero se va contento.", B: "Gustavo mira la última página con atención. «¡Lo veo! ¡Columnas!» No hay ningún mapa, pero se va contento.", C: "Gustavo estudia la última página con intensidad. «¡Lo veo! ¡Hasta las columnas!» No hay mapa alguno, pero se marcha feliz." },
            mood: "tipsy", end: "libro-mapa",
          },
          {
            id: "regalar",
            say: { A: "Toma. Regalo de boda para tu prima. El hotel está en el centro.", B: "Toma, regalo de boda para tu prima. El hotel queda en el centro.", C: "Toma: regalo de boda para tu prima. El hotel está en el centro." },
            reply: { A: "Gustavo abraza el libro. «¡Un regalo! Ella no lee, pero se va a emocionar.»", B: "Gustavo abraza el libro. «¡Un regalo de un desconocido! Ella no lee, pero se va a emocionar igual.»", C: "Gustavo abraza el libro como a un sobrino. «¡Un regalo de un desconocido! Mi prima no lee, pero esto la va a hacer llorar.»" },
            mood: "love", end: "libro-regalo",
          },
          {
            id: "tarjeta",
            say: { A: "Mi libro no sabe. Pero tu tarjeta sí. ¿La tienes?", B: "Mi libro no lo sabe. Pero tu tarjeta del hotel sí. ¿La tienes?", C: "Mi libro no lo sabe, pero tu tarjeta del hotel sí. ¿La llevas?" },
            reply: { A: "Gustavo busca y saca una tarjeta. «¡Aquí!»", B: "Gustavo revisa los bolsillos y saca una tarjeta. «¡Aquí está!»", C: "Gustavo registra cinco bolsillos y saca una tarjeta con aire triunfal. «¡Documento!»" },
            mood: "smile", next: "tarjeta",
          },
        ],
      },
      "corazon-inicio": {
        who: "gustavo", mood: "love",
        line: {
          A: "Gustavo ve el corazón y se le llenan los ojos. «Ay… Hoy hablé con el corazón en la boda. Se me perdió el discurso. ¿Tú también hablas así?»",
          B: "Gustavo ve el corazón y se le llenan los ojos de golpe. «Ay… Hoy hablé con el corazón en la boda. Se me perdió el discurso y hablé sin papel. ¿Tú también hablas así?»",
          C: "Gustavo ve el corazón y se le empañan los ojos. «Ay… Hoy hablé con el corazón en la boda. Perdido el discurso, hablé sin papel. Lloró hasta el camarero. ¿Tú también hablas así?»",
        },
        options: [
          {
            id: "discurso",
            say: { A: "Cuéntame el discurso. Yo te escucho.", B: "Cuéntame el discurso. Te escucho.", C: "Cuéntame el discurso; te escucho con gusto." },
            reply: { A: "Gustavo se apoya en el farol. «Prima…» Y empieza.", B: "Gustavo se apoya en el farol y respira. «Prima…» Y empieza.", C: "Gustavo se apoya en el farol, respira hondo y empieza: «Prima…»" },
            mood: "love", next: "corazon-discurso",
          },
          {
            id: "hotel",
            say: { A: "Primero el hotel. Después me cuentas.", B: "Primero el hotel. Después me lo cuentas.", C: "Primero el hotel; después me lo cuentas con calma." },
            reply: { A: "Gustavo te abraza. «El hotel puede esperar. Escucha esto.»", B: "Gustavo te abraza de repente. «El hotel puede esperar. Escucha esto primero.»", C: "Gustavo te abraza sin avisar. «El hotel puede esperar; esto, no. Escucha.»" },
            mood: "love", next: "corazon-discurso",
          },
          {
            id: "abrazo",
            say: { A: "Ven aquí, padrino.", B: "Ven aquí, padrino.", C: "Ven aquí, padrino, que lo necesitas." },
            reply: { A: "Gustavo te abraza y llora en tu hombro. «Gracias, amigo.»", B: "Gustavo te abraza y llora un rato en tu hombro. «Gracias, amigo. Hoy fue mucho.»", C: "Gustavo te abraza y llora en tu hombro sin vergüenza. «Gracias, amigo. Hoy fue demasiado para un solo corazón.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-discurso": {
        who: "gustavo", mood: "love",
        line: {
          A: "Gustavo recita, apoyado en el farol: «Prima, el amor es llegar a casa aunque te pierdas.» Llora. «¿Estuvo bien?»",
          B: "Gustavo recita, apoyado en el farol: «Prima, el amor es llegar a casa aunque te pierdas por el camino.» Se le quiebra la voz. «¿Estuvo bien?»",
          C: "Gustavo recita, apoyado en el farol como en un atril: «Prima, el amor es llegar a casa aunque te pierdas por el camino.» Se le quiebra la voz. «¿Estuvo bien? Sé sincero.»",
        },
        options: [
          {
            id: "bien",
            say: { A: "Estuvo perfecto. Vamos a tu hotel.", B: "Estuvo perfecto. Ahora, vamos a tu hotel.", C: "Estuvo perfecto. Y ahora, a tu hotel." },
            reply: { A: "Gustavo sonríe. «Perfecto. Y tú me llevas a casa aunque me pierda.»", B: "Gustavo sonríe con los ojos mojados. «Perfecto. Y tú me llevas a casa aunque me pierda. Como en el discurso.»", C: "Gustavo sonríe entre lágrimas. «Perfecto. Y tú me llevas a casa aunque me pierda. El discurso tenía razón.»" },
            mood: "love", end: "corazon-imperial",
          },
          {
            id: "baile",
            say: { A: "Estuvo tan bien que merece un baile.", B: "Estuvo tan bien que merece un baile.", C: "Estuvo tan bien que exige un baile." },
            reply: { A: "Gustavo te toma del brazo. Bailan bajo el farol.", B: "Gustavo te toma del brazo y bailan un vals torcido bajo el farol.", C: "Gustavo te toma del brazo y bailan un vals improbable bajo el farol." },
            mood: "love", end: "corazon-baile",
          },
          {
            id: "otra",
            say: { A: "Díselo otra vez a tu prima mañana.", B: "Díselo otra vez a tu prima mañana, sin vino.", C: "Repíteselo a tu prima mañana, ya sin vino." },
            reply: { A: "Gustavo te abraza. «Mañana. Y hoy, gracias.»", B: "Gustavo te abraza con fuerza. «Mañana se lo digo. Y a ti, hoy, gracias.»", C: "Gustavo te abraza largo rato. «Mañana se lo repito. Y a ti te doy las gracias hoy, que es cuando toca.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {
      imperial: { text: { A: "Llegas con Gustavo al Hotel Imperial. Sus amigos de la boda lo saludan.", B: "Acompañas a Gustavo hasta el Imperial. En la puerta, la familia de la boda lo recibe con aplausos.", C: "Dejas a Gustavo en la puerta del Imperial, donde media boda lo recibe como a un héroe de guerra. Columnas incluidas." }, change: "se-va", flag: "gustavo-hotel", recap: "Acompañaste a Gustavo hasta el Hotel Imperial." },
      sol: { text: { A: "Gustavo va al Hotel Sol. Pero la habitación 12 no es suya.", B: "Gustavo entra en el Hotel Sol. Minutos después sale confundido: en la habitación 12 duerme su primo.", C: "Gustavo entra en el Hotel Sol y sale al rato: en la habitación 12 ronca su primo Tito. El misterio se resuelve tarde." }, change: "triste", recap: "Mandaste a Gustavo al Hotel Sol, que no era el suyo." },
      taxi: { text: { A: "Pides un taxi. Gustavo llama a su primo y se ríe mucho.", B: "Pides un taxi para Gustavo. Mientras espera, llama a su primo y se ríen de la confusión.", C: "Mientras llega el taxi, Gustavo le cuenta a su primo la aventura, ya convertida en anécdota de boda." }, change: "llama", recap: "Pediste un taxi para Gustavo." },
      solo: { text: { A: "Gustavo se va solo. Camina en zigzag, pero contento.", B: "Gustavo se aleja solo, en zigzag y repitiendo tus indicaciones.", C: "Gustavo se aleja, recitando tus instrucciones. Con suerte, llegará antes del amanecer." }, change: "se-va", recap: "Le explicaste el camino a Gustavo." },
      policia: { text: { A: "Llega la policía. Explicas todo. Gustavo se va en el auto de policía a su hotel.", B: "Llega la policía. Tras explicar el malentendido, los agentes llevan a Gustavo a su hotel.", C: "Llega una patrulla. Aclarado el malentendido, los agentes se ofrecen a llevar a Gustavo. Él lo celebra como un taxi gratis." }, change: "policia", recap: "Un malentendido con Gustavo terminó con la policía." },
      corre: { text: { A: "Gustavo corre. Desaparece en la avenida.", B: "Gustavo desaparece corriendo por la avenida, con la corbata al viento.", C: "Gustavo se pierde por la avenida a una velocidad impropia de un padrino." }, change: "corre", recap: "Gustavo salió corriendo por tu culpa." },
      "cuchillo-policia": { text: { A: "La patrulla para. Ven el cuchillo. Gustavo explica mal y tú explicas peor.", B: "La patrulla se detiene y ve el cuchillo. Gustavo explica mal, tú explicas peor, y la noche se alarga.", C: "La patrulla frena y lo primero que ve es tu cuchillo. Gustavo lo explica mal, tú lo explicas peor, y la noche se hace muy larga." }, change: "policia", recap: "Tu cuchillo y el grito de Gustavo trajeron a la policía." },
      "cuchillo-solo": { text: { A: "Gustavo se va solo con tus indicaciones. Mira atrás tres veces, por el cuchillo.", B: "Gustavo se aleja solo con tus indicaciones y mira atrás tres veces, pensando en el cuchillo.", C: "Gustavo se aleja solo, repitiendo tus indicaciones y mirando atrás cada diez pasos, por si el cuchillo lo sigue." }, change: "se-va", recap: "Gustavo prefirió irse solo después de ver tu cuchillo." },
      "pistola-huye": { text: { A: "Gustavo desaparece por la avenida. Te quedas con su discurso en la mano.", B: "Gustavo desaparece por la avenida a toda velocidad. Te quedas con el discurso del padrino en la mano.", C: "Gustavo se pierde por la avenida con una velocidad insospechada. Te quedas con el discurso del padrino, arrugado, en la mano." }, change: "huye", recap: "Gustavo huyó de tu pistola y te dejó su discurso." },
      "pistola-patrulla": { text: { A: "La patrulla para. Ven la pistola. Gustavo se va en el auto de policía a su hotel. Tú, a la comisaría.", B: "La patrulla se detiene y ve la pistola. A Gustavo lo llevan a su hotel; a ti, a la comisaría.", C: "La patrulla frena y lo primero que registra es tu pistola. A Gustavo lo llevan al Imperial con honores; a ti, a la comisaría sin ellos." }, change: "policia", recap: "Tu pistola acabó con Gustavo en una patrulla y tú en la comisaría." },
      "pistola-solo": { text: { A: "Gustavo se aleja solo, repitiendo «recto, derecha». No mira atrás.", B: "Gustavo se aleja solo, repitiendo «recto, derecha, recto» y sin mirar atrás ni una vez.", C: "Gustavo se aleja solo, recitando «recto, derecha, recto» como un mantra y sin volver la cabeza." }, change: "se-va", recap: "Gustavo se fue solo, lejos de tu pistola." },
      "granada-sirenas": { text: { A: "La policía cierra la avenida. Un helicóptero ilumina a Gustavo. Él saluda.", B: "La policía cierra la avenida entera y un helicóptero ilumina a Gustavo, que saluda con la corbata en alto.", C: "La policía corta la avenida y un helicóptero ilumina a Gustavo, que saluda al foco como si fuera la cámara de la boda." }, change: "helicoptero", recap: "Tu granada cerró la avenida con Gustavo bajo un helicóptero." },
      "granada-imperial": { text: { A: "Llegan al Imperial, cada uno por su acera. Los amigos de la boda aplauden.", B: "Llegan al Imperial caminando cada uno por una acera. En la puerta, la boda entera aplaude a Gustavo.", C: "Llegan al Imperial cada uno por su acera, como dos diplomáticos. En la puerta, media boda recibe a Gustavo con aplausos." }, change: "se-va", flag: "gustavo-hotel", recap: "Acompañaste a Gustavo al Imperial con la granada guardada." },
      "granada-almendra": { text: { A: "Gustavo te da una almendra de la boda. Se va riendo. Tú guardas la granada.", B: "Gustavo te regala una almendra de la boda y se aleja riéndose. Tú guardas la granada, por si acaso.", C: "Gustavo te entrega una almendra de la boda con ceremonia y se aleja riendo. Tú guardas la granada, que no vale una almendra." }, change: "sonrie", recap: "Gustavo te cambió una almendra de boda por una risa." },
      "gas-rociado": { text: { A: "Gustavo llora en el suelo. Una patrulla llega. Explicas durante una hora.", B: "Gustavo llora en el suelo, con los ojos rojos. Llega una patrulla y pasas una hora explicando.", C: "Gustavo llora en la acera, con la corbata empapada y los ojos en llamas. Llega una patrulla y pasas una hora explicando lo inexplicable." }, change: "cae", recap: "Rociaste a Gustavo con gas pimienta y cayó al suelo." },
      "gas-escolta": { text: { A: "Llegan al Imperial, a dos metros de distancia. Gustavo saluda desde lejos.", B: "Llegan al Imperial guardando dos metros de distancia todo el camino. Gustavo te saluda desde la puerta.", C: "Llegan al Imperial a dos metros de distancia constante, como una escolta diplomática. Gustavo te saluda desde las columnas." }, change: "se-va", flag: "gustavo-hotel", recap: "Guiaste a Gustavo al Imperial a distancia, con el gas guardado." },
      "lapiz-mano": { text: { A: "Gustavo se va leyendo su mano. Dobla la esquina feliz.", B: "Gustavo se aleja leyendo el discurso escrito en su mano. Dobla la esquina feliz.", C: "Gustavo se aleja leyendo la palma de su mano como un libro sagrado. Dobla la esquina feliz y en zigzag." }, change: "se-va", recap: "Gustavo escribió su discurso en la mano con tu lápiz." },
      "lapiz-discurso": { text: { A: "Gustavo guarda la servilleta con el discurso. Te abraza y se va al hotel.", B: "Gustavo guarda la servilleta con el discurso en el bolsillo del corazón. Te abraza y se va a buscar el hotel.", C: "Gustavo guarda la servilleta con el discurso en el bolsillo de la chaqueta, a la altura del corazón. Te abraza y parte hacia el hotel." }, change: "sonrie", recap: "Escribiste el discurso del padrino con Gustavo." },
      "lapiz-llamada": { text: { A: "Gustavo cuelga, feliz. «¡El Imperial! Ya sé dónde es. ¡Gracias por el lápiz!»", B: "Gustavo cuelga, feliz. «¡El Imperial! Ya sé cómo llegar. ¡Gracias por el lápiz!»", C: "Gustavo cuelga radiante. «¡El Imperial! Ya tengo la ruta y el discurso. ¡Gracias por el lápiz!»" }, change: "llama", recap: "Gustavo leyó por teléfono el discurso que escribiste." },
      "libro-duerme": { text: { A: "Gustavo duerme en la acera. Lo tapas con su chaqueta y llamas a su primo.", B: "Gustavo duerme en la acera con la boca abierta. Lo tapas con su chaqueta y llamas a su primo.", C: "Gustavo duerme en la acera, con la corbata de almohada. Lo tapas con su chaqueta y llamas a su primo para que lo recoja." }, change: "duerme", recap: "Tu lectura durmió a Gustavo en la acera." },
      "libro-mapa": { text: { A: "Gustavo se va con tu «mapa» en la cabeza. Dobla a la izquierda. El hotel está a la derecha.", B: "Gustavo se aleja convencido de tu mapa inexistente. Dobla a la izquierda; el hotel queda a la derecha.", C: "Gustavo se aleja fiel a un mapa que nunca existió. Dobla a la izquierda con decisión; el hotel queda a la derecha." }, change: "se-va", recap: "Gustavo se fue siguiendo un mapa que tu libro no tenía." },
      "libro-regalo": { text: { A: "Gustavo se va con tu libro bajo el brazo. Lo lleva como un anillo.", B: "Gustavo se aleja con tu libro bajo el brazo, como si llevara los anillos.", C: "Gustavo se aleja con tu libro bajo el brazo, con la misma solemnidad con que llevó los anillos." }, change: "sonrie", recap: "Le regalaste tu libro a Gustavo para su prima." },
      "corazon-abrazo": { text: { A: "Gustavo y tú se abrazan bajo el farol. Después, él encuentra el hotel solo.", B: "Gustavo y tú se abrazan bajo el farol un buen rato. Después, él encuentra el hotel sin ayuda.", C: "Gustavo y tú se abrazan bajo el farol como viejos amigos. Después, él encuentra el hotel solo, guiado por el corazón." }, change: "abraza", recap: "Gustavo te abrazó como a un amigo de la boda." },
      "corazon-imperial": { text: { A: "Llegas con Gustavo al Imperial. Él repite su discurso en la puerta y todos aplauden.", B: "Acompañas a Gustavo hasta el Imperial. En la puerta repite su discurso y la boda entera aplaude.", C: "Acompañas a Gustavo hasta las columnas del Imperial. Repite el discurso en la puerta y media boda llora otra vez." }, change: "se-va", flag: "gustavo-hotel", recap: "Gustavo te recitó su discurso y lo llevaste al Imperial." },
      "corazon-baile": { text: { A: "Bailan bajo el farol. Una ventana se abre y alguien aplaude.", B: "Bailan un vals torcido bajo el farol. Una ventana se abre y una vecina aplaude.", C: "Bailan un vals torcido bajo el farol. Se abre una ventana y una vecina en bata aplaude con ganas." }, change: "baila", recap: "Bailaste un vals con Gustavo bajo el farol." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces si alguien te da miedo en la calle?", B: "¿Cómo le explicas a alguien que no quieres hacerle daño?", C: "¿Qué hace que un gesto inocente parezca una amenaza?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Cuándo tienes miedo por la noche?", B: "¿Qué harías si un desconocido armado te ofreciera ayuda?", C: "¿Puede la ayuda ser peligrosa cuando viene de alguien que da miedo?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Qué recuerdos guardas de una fiesta?", B: "¿Cuál fue la fiesta más caótica a la que fuiste?", C: "¿Por qué recordamos mejor los desastres que las fiestas perfectas?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Qué haces si una persona borracha se acerca mucho?", B: "¿Cómo mantienes la distancia con alguien sin ofenderlo?", C: "¿La prudencia con desconocidos es respeto o desconfianza?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes cartas para tu familia?", B: "¿Qué dirías en un discurso en la boda de un familiar?", C: "¿Prefieres improvisar o escribir lo que vas a decir en un momento importante?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Lees antes de dormir?", B: "¿Qué libro regalarías en una boda?", C: "¿Puede un libro ser un buen regalo para alguien que no lee?" } },
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿Cuándo hablas con el corazón?", B: "¿Qué momento de una boda te emocionó?", C: "¿Qué dice de una persona la manera en que habla de su familia?" } },
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
      "cuchillo-inicio": {
        who: "carmen", mood: "terror",
        line: {
          A: "Carmen ve el cuchillo y retrocede hasta la pared con la cesta en alto. «¡Un cuchillo! ¡Primero mi ropa y ahora esto! ¡Socorro!»",
          B: "Carmen ve el cuchillo en tu mano y retrocede hasta la pared, con la cesta vacía como escudo. «¡Un cuchillo! ¡Primero me roban la ropa y ahora esto! ¡Socorro!»",
          C: "Carmen ve el cuchillo y retrocede hasta la pared de las lavadoras, la cesta vacía por delante. «¡Un cuchillo! Primero mis sábanas, ahora un asesino. ¡Socorro, que estoy sola!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Señora, lo guardo. Es para abrir la secadora atascada.", B: "Señora, lo guardo ya. Lo saqué para abrir la secadora atascada.", C: "Señora, lo guardo ahora mismo. Lo saqué para forzar la secadora atascada, nada más." },
            reply: { A: "Carmen baja la cesta un poco. «¿La secadora? Bueno… La 4 está atascada, sí.»", B: "Carmen baja un poco la cesta. «¿La secadora? Bueno… la 4 lleva atascada toda la semana, eso es verdad.»", C: "Carmen baja la cesta unos centímetros. «¿La secadora? Pues la 4 está atascada desde el lunes, eso es cierto. Pero avise antes de sacar eso.»" },
            mood: "worried", next: "cuchillo-secadora",
          },
          {
            id: "tranquila",
            say: { A: "Tranquila, señora. No es para usted.", B: "Tranquila, señora, no es para usted.", C: "Tranquila, señora; no es para usted." },
            reply: { A: "Carmen aprieta el botón rojo de la pared. Suena una alarma.", B: "Carmen estira el brazo y aprieta el botón rojo de emergencia de la pared. Suena una alarma.", C: "Carmen alcanza el botón rojo de emergencia junto a la puerta y lo aprieta sin dudar. La alarma llena la lavandería." },
            mood: "scared", end: "cuchillo-alarma",
          },
          {
            id: "acusar",
            say: { A: "¿Y usted por qué grita? ¿Qué escondió en la secadora?", B: "¿Y usted por qué grita tanto? ¿Qué escondió en la secadora?", C: "¿Y usted por qué grita tanto? ¿Qué esconde en esa secadora?" },
            reply: { A: "Carmen grita más. Entra un vecino con una escoba. «¡Fuera de aquí!»", B: "Carmen grita todavía más fuerte. Entra un vecino en pijama con una escoba. «¡Fuera de aquí, ya!»", C: "Carmen sube el volumen y entra un vecino en pijama armado con una escoba. «¡Fuera de aquí, y el cuchillo también!»" },
            mood: "angry", end: "cuchillo-escoba",
          },
        ],
      },
      "cuchillo-secadora": {
        who: "carmen", mood: "worried",
        line: {
          A: "Carmen baja la cesta, pero no se acerca. «¿Atascada? La 4 está atascada, sí. Ábrala usted. Con eso. Yo miro desde aquí.»",
          B: "Carmen deja la cesta en el suelo, sin acercarse. «¿Atascada? La 4 está atascada, sí. Ábrala usted, con eso. Yo miro desde aquí, bien lejos.»",
          C: "Carmen suelta la cesta, aunque no se mueve de la pared. «¿Atascada? La 4, sí. Ábrala usted con eso, ya que lo sacó. Yo superviso desde aquí, a distancia prudente.»",
        },
        options: [
          {
            id: "abrir",
            say: { A: "Hago palanca con la punta. Un momento… ¡Se abre!", B: "Hago palanca con la punta, con cuidado. Un momento… ¡Ya se abre!", C: "Hago palanca con la punta, despacio. Un segundo… ¡Cede!" },
            reply: { A: "La puerta se abre. Carmen se acerca. «¡Mi ropa! Pero… ¡está rosa!»", B: "La puerta de la 4 se abre de golpe. Carmen se acerca por fin. «¡Mi ropa! Pero… ¡está toda rosa!»", C: "La puerta de la 4 cede con un crujido. Carmen se acerca, olvidando el cuchillo. «¡Mis sábanas! Pero… ¿rosas?»" },
            mood: "surprised", end: "cuchillo-rosa",
          },
          {
            id: "mano",
            say: { A: "Mejor lo guardo y abro con la mano.", B: "Mejor lo guardo y pruebo a abrirla con la mano.", C: "Mejor lo guardo y lo intento con la mano, como la gente normal." },
            reply: { A: "Guardas el cuchillo. Tiras fuerte. La puerta se abre.", B: "Guardas el cuchillo, tiras con fuerza y la puerta se abre. Carmen respira.", C: "Guardas el cuchillo, tiras con ganas y la puerta se abre. Carmen suelta el aire por primera vez." },
            mood: "worried", next: "rosa",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Perdón, señora.", B: "Mejor me voy. Perdone, señora.", C: "Mejor me retiro. Perdone, señora." },
            reply: { A: "Carmen no responde. Recoge la cesta, enojada.", B: "Carmen no responde. Recoge la cesta con gesto de enojo.", C: "Carmen no dice nada. Recoge la cesta con un silencio muy elocuente." },
            mood: "angry", end: "enojada",
          },
        ],
      },
      "pistola-inicio": {
        who: "carmen", mood: "terror",
        line: {
          A: "Carmen ve la pistola y levanta las manos. Después se pone pálida y se sienta en el suelo. «Ay… el corazón… No me haga nada. Tengo pastillas en el bolso.»",
          B: "Carmen ve la pistola y levanta las manos. Un segundo después se pone pálida y se deja caer al suelo. «Ay… el corazón… No me haga nada, por favor. Tengo pastillas en el bolso.»",
          C: "Carmen ve la pistola, levanta las manos y, acto seguido, pierde el color y se desliza hasta el suelo. «Ay… el corazón… No me haga nada. Las pastillas están en el bolso, en el bolsillo de dentro.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. ¿Dónde están las pastillas? Le ayudo.", B: "La guardo ahora mismo. ¿Dónde están las pastillas? Le ayudo.", C: "La guardo ya. ¿Dónde están las pastillas? Déjeme ayudarla." },
            reply: { A: "Carmen señala el bolso. «El bolsillo de dentro. Y agua, por favor.»", B: "Carmen señala el bolso con la mano temblorosa. «En el bolsillo de dentro. Y un poco de agua, por favor.»", C: "Carmen señala el bolso sin fuerzas. «Bolsillo de dentro. Y agua de la máquina, por favor, que no llego.»" },
            mood: "worried", next: "pistola-pastillas",
          },
          {
            id: "ambulancia",
            say: { A: "Voy a llamar a una ambulancia.", B: "Espere, llamo a una ambulancia.", C: "No se mueva; llamo a una ambulancia." },
            reply: { A: "Carmen niega. «Primero la pastilla. En el bolso. Rápido.»", B: "Carmen niega con la cabeza. «Primero la pastilla. En el bolso. Rápido, hijo.»", C: "Carmen niega débilmente. «Primero la pastilla, que es más rápida que la ambulancia. En el bolso.»" },
            mood: "worried", next: "pistola-pastillas",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdone. Me voy.", C: "Perdone; me voy." },
            reply: { A: "Te vas. Carmen, desde el suelo, llama a la policía.", B: "Te vas. Desde el suelo, Carmen saca el teléfono y llama a la policía.", C: "Te vas sin mirar atrás. Desde el suelo, Carmen encuentra el teléfono y llama a la policía con la voz rota." },
            mood: "sad", end: "pistola-abandono",
          },
        ],
      },
      "pistola-pastillas": {
        who: "carmen", mood: "worried",
        line: {
          A: "Carmen toma la pastilla con agua de la máquina. Respira. «Mejor. ¿Por qué lleva eso, joven? ¿Qué le hizo este barrio?»",
          B: "Carmen toma la pastilla con un vaso de agua de la máquina y respira hondo. «Mejor. Ya pasa. ¿Por qué lleva eso, joven? ¿Qué le hizo este barrio?»",
          C: "Carmen se toma la pastilla con agua de la máquina y recupera el color poco a poco. «Mejor. Ya pasa. Dígame, joven: ¿por qué lleva eso? ¿Qué le hizo este barrio?»",
        },
        options: [
          {
            id: "verdad",
            say: { A: "Me asaltaron aquí una vez. Nunca más.", B: "Me asaltaron una vez en esta calle. Nunca más.", C: "Me asaltaron una vez en esta misma calle. Me juré que nunca más." },
            reply: { A: "Carmen asiente. «A mí también. Yo compré un silbato.» Sonríe.", B: "Carmen asiente despacio. «A mí también. Yo compré un silbato.» Y sonríe por primera vez.", C: "Carmen asiente con los ojos cerrados. «A mí también. Yo me compré un silbato. Hace el mismo ruido y no mata a nadie.» Sonríe." },
            mood: "smile", end: "pistola-silbato",
          },
          {
            id: "ambulancia",
            say: { A: "Mejor llamo igual a una ambulancia. El susto fue grande.", B: "Mejor llamo igual a una ambulancia. El susto fue muy grande.", C: "Mejor llamo a una ambulancia de todos modos; el susto fue demasiado grande." },
            reply: { A: "Carmen acepta. «Bueno. Pero guarde eso antes de que lleguen.»", B: "Carmen acepta, cansada. «Bueno. Pero guarde eso bien antes de que lleguen.»", C: "Carmen acepta con un gesto. «Bueno. Pero guarde eso muy hondo antes de que lleguen, que no quiero más sustos.»" },
            mood: "worried", end: "pistola-ambulancia",
          },
          {
            id: "mentir",
            say: { A: "Soy policía. De civil.", B: "Soy policía de civil, señora.", C: "Soy policía de paisano, señora." },
            reply: { A: "Carmen entrecierra los ojos. «¿Policía? Voy a llamar a la comisaría a preguntar.»", B: "Carmen entrecierra los ojos. «¿Policía? Pues voy a llamar a la comisaría para comprobarlo.»", C: "Carmen entrecierra los ojos tras las gafas. «¿Policía? Qué bien. Llamo a la comisaría y lo confirmamos.»" },
            mood: "angry", end: "pistola-comprobar",
          },
        ],
      },
      "granada-inicio": {
        who: "carmen", mood: "terror",
        line: {
          A: "Carmen ve la granada y grita tan fuerte que tiembla la secadora. Te tira la caja de jabón en polvo y corre al cuarto de atrás. «¡Una bomba! ¡En mi lavandería!»",
          B: "Carmen ve la granada y suelta un grito que hace temblar las secadoras. Te lanza la caja de jabón en polvo y corre al cuarto de atrás. «¡Una bomba! ¡En mi lavandería!»",
          C: "Carmen ve la granada y lanza un grito que vibra en todas las secadoras. Te arroja la caja de jabón en polvo y se encierra en el cuarto de atrás. «¡Una bomba! ¡En mi lavandería de toda la vida!»",
        },
        options: [
          {
            id: "calmar",
            say: { A: "¡Señora! Es de utilería. Salga, por favor.", B: "¡Señora! Es de utilería, no explota. Salga, por favor.", C: "¡Señora! Es de utilería, no explota. Salga, por favor, que el jabón ya me alcanzó." },
            reply: { A: "Carmen, desde el cuarto: «¿Utilería? ¿Y por qué la trae a lavar?»", B: "Carmen responde desde detrás de la puerta: «¿Utilería? ¿Y por qué la trae a una lavandería?»", C: "Carmen contesta desde el cuarto cerrado: «¿Utilería? ¿Y a quién se le ocurre traerla a lavar?»" },
            mood: "scared", next: "granada-puerta",
          },
          {
            id: "guardar",
            say: { A: "La guardo. Mire: guardada. Ya está.", B: "La guardo. Mire, guardada. Ya está.", C: "La guardo. Mire: guardada, fuera de la vista. Ya está." },
            reply: { A: "Carmen, desde el cuarto: «No veo nada. Hable desde ahí.»", B: "Carmen, desde el cuarto: «No veo nada desde aquí. Hable desde ahí y no se mueva.»", C: "Carmen, desde el cuarto: «No veo nada y no pienso mirar. Hable desde ahí, sin moverse.»" },
            mood: "scared", next: "granada-puerta",
          },
          {
            id: "lavar",
            say: { A: "Perdón… ¿le molesta si la meto en la lavadora un momento?", B: "Perdón… ¿le molesta si la meto un momento en la lavadora?", C: "Perdón… ¿le molestaría que la metiera un momento en la lavadora?" },
            reply: { A: "Carmen grita otra vez. Aprieta la alarma. La calle se llena de gente.", B: "Carmen grita otra vez y aprieta el botón de alarma. En un minuto, la calle se llena de gente.", C: "Carmen grita con nuevas fuerzas y aprieta la alarma de la pared. En un minuto, la calle se llena de vecinos y sirenas." },
            mood: "scared", end: "granada-evacuacion",
          },
        ],
      },
      "granada-puerta": {
        who: "carmen", mood: "scared",
        line: {
          A: "Carmen habla desde detrás de la puerta. «No salgo. Hable desde ahí. ¿Es de verdad? ¿Y mi ropa? Dígame que mi ropa está bien.»",
          B: "Carmen habla desde detrás de la puerta del cuarto. «No pienso salir. Hable desde ahí. ¿Es de verdad? ¿Y mi ropa? Dígame que mi ropa está bien.»",
          C: "Carmen negocia desde detrás de la puerta del cuarto. «No salgo. Hable desde ahí. ¿Es de verdad esa cosa? ¿Y mi ropa? Dígame al menos que mis sábanas están bien.»",
        },
        options: [
          {
            id: "ropa",
            say: { A: "Su ropa está en la 4. Está… rosa. Pero entera.", B: "Su ropa está en la secadora 4. Está… rosa. Pero entera.", C: "Su ropa está en la 4. Entera, eso sí. Rosa, también." },
            reply: { A: "La puerta se abre. «¿Rosa?» Carmen se olvida de la granada.", B: "La puerta del cuarto se abre de golpe. «¿Rosa?» Carmen se olvida de la granada por completo.", C: "La puerta se abre al instante. «¿Rosa?» Carmen sale sin acordarse de la granada." },
            mood: "surprised", next: "rosa",
          },
          {
            id: "basura",
            say: { A: "Salga. La granada está en la calle, en el cubo de basura.", B: "Salga tranquila. La granada ya está en la calle, en el cubo de basura.", C: "Salga, que la granada ya descansa en el cubo de basura de la calle." },
            reply: { A: "Carmen sale. Afuera, un vecino abre el cubo y grita.", B: "Carmen sale despacio. Afuera, un vecino abre el cubo de basura y grita.", C: "Carmen sale con cautela. En la calle, un vecino que saca la basura abre el cubo y grita como ella hace un minuto." },
            mood: "scared", end: "granada-basura",
          },
          {
            id: "irse",
            say: { A: "Me voy. Perdón por el susto.", B: "Me voy. Perdone el susto.", C: "Me voy; perdone el susto." },
            reply: { A: "Carmen no sale. Llama a la policía desde el cuarto.", B: "Carmen no sale del cuarto. Llama a la policía desde ahí.", C: "Carmen no sale. Desde el cuarto cerrado, llama a la policía y describe tu granada con detalle." },
            mood: "scared", end: "granada-evacuacion",
          },
        ],
      },
      "gas-inicio": {
        who: "carmen", mood: "smile",
        line: {
          A: "Carmen ve el gas pimienta y, en vez de asustarse, se ríe y saca uno igual del bolso. «Ah, usted también. En este barrio, hijo, o llevas gas o llevas paciencia.»",
          B: "Carmen ve el gas pimienta y, en lugar de asustarse, se ríe y saca uno idéntico del bolso. «Ah, usted también. En este barrio, hijo, o llevas gas o llevas mucha paciencia.»",
          C: "Carmen ve el gas pimienta, se ríe y saca del bolso uno idéntico, con el mismo gesto. «Ah, usted también. En este barrio, hijo, se lleva gas o se lleva paciencia, y la paciencia se me acabó.»",
        },
        options: [
          {
            id: "complice",
            say: { A: "Entonces no soy sospechoso, ¿verdad?", B: "Entonces ya no soy sospechoso, ¿verdad?", C: "Entonces quedo fuera de la lista de sospechosos, ¿no?" },
            reply: { A: "Carmen guarda el gas. «Sospechoso de todo. Pero con buen criterio.»", B: "Carmen guarda su gas. «Sospechoso de todo, como todos. Pero con buen criterio.»", C: "Carmen guarda el gas en el bolso. «Sospechoso de todo, como cualquiera. Pero con criterio, que ya es algo.»" },
            mood: "smile", next: "gas-sospechoso",
          },
          {
            id: "ropa",
            say: { A: "¿Y su ropa? ¿Cree que alguien la robó?", B: "¿Y su ropa? ¿De verdad cree que alguien la robó?", C: "¿Y su ropa? ¿Cree de verdad que alguien se la llevó?" },
            reply: { A: "Carmen baja la voz. «Sí. Y sé quién.»", B: "Carmen baja la voz y mira a la puerta. «Sí. Y creo que sé quién.»", C: "Carmen baja la voz y vigila la puerta. «Sí. Y tengo un sospechoso con nombre y apellido.»" },
            mood: "worried", next: "gas-sospechoso",
          },
          {
            id: "rociar",
            say: { A: "Guarde el suyo, señora, o uso el mío.", B: "Guarde el suyo, señora, o uso el mío.", C: "Guarde el suyo, señora, o me veo obligado a usar el mío." },
            reply: { A: "Carmen es más rápida. Te rocía. Te arde la cara.", B: "Carmen es mucho más rápida que tú. Te rocía en la cara y te arde todo.", C: "Carmen tiene la mano más rápida del barrio. Te rocía antes de que termines la frase y el mundo se vuelve fuego." },
            mood: "pain", end: "gas-rociado",
          },
        ],
      },
      "gas-sospechoso": {
        who: "carmen", mood: "worried",
        line: {
          A: "Carmen baja la voz. «Hay un hombre que viene todas las noches y mira la secadora 3. Seguro fue él. ¿Lo esperamos con el gas?»",
          B: "Carmen baja la voz. «Hay un hombre que viene todas las noches y se queda mirando la secadora 3. Fue él, seguro. ¿Lo esperamos con el gas preparado?»",
          C: "Carmen baja la voz como en una conspiración. «Hay un hombre que viene cada noche y vigila la secadora 3. Fue él, lo sé. ¿Lo esperamos los dos con el gas en la mano?»",
        },
        options: [
          {
            id: "esperar",
            say: { A: "Esperamos. Pero sin gas: hablamos con él.", B: "Lo esperamos. Pero sin gas: hablamos con él.", C: "Lo esperamos, pero sin gas: con él se habla." },
            reply: { A: "El hombre entra. Es el dueño. «Señora, moví su ropa a la 4, la 3 estaba rota.»", B: "El hombre entra a los cinco minutos. Es el dueño de la lavandería. «Señora, moví su ropa a la 4. La 3 estaba rota.»", C: "El hombre aparece a los cinco minutos. Es el dueño de la lavandería. «Señora, pasé su ropa a la 4 porque la 3 estaba rota. Se lo dije ayer.»" },
            mood: "surprised", end: "gas-dueno",
          },
          {
            id: "policia",
            say: { A: "Mejor llamamos a la policía. Sin gas.", B: "Mejor llamamos a la policía y nadie usa el gas.", C: "Mejor llamamos a la policía y dejamos el gas en el bolso." },
            reply: { A: "Carmen acepta. «Bueno. Pero yo me quedo con el gas en la mano.»", B: "Carmen acepta a regañadientes. «Bueno. Pero yo no suelto el gas hasta que lleguen.»", C: "Carmen acepta con reservas. «Bueno. Pero el gas no vuelve al bolso hasta que vea un uniforme.»" },
            mood: "worried", end: "policia",
          },
          {
            id: "mirar",
            say: { A: "Antes de acusar, miremos la secadora 4.", B: "Antes de acusar a nadie, miremos la secadora 4.", C: "Antes de acusar a nadie, echemos un vistazo a la secadora 4." },
            reply: { A: "Abren la 4. Carmen grita. «¡Mi ropa! ¡Pero está rosa!»", B: "Abren la 4 y Carmen grita. «¡Mi ropa! Pero… ¡está rosa!»", C: "Abren la 4 y Carmen deja escapar un grito. «¡Mis sábanas! Pero… ¿rosas?»" },
            mood: "surprised", next: "rosa",
          },
        ],
      },
      "lapiz-inicio": {
        who: "carmen", mood: "surprised",
        line: {
          A: "Carmen ve el lápiz y se le ocurre algo. «¡Un lápiz! Perfecto. Hay una hoja de reclamaciones en la pared. Usted escribe, yo dicto. ¡Me robaron las sábanas!»",
          B: "Carmen ve el lápiz y cambia de cara. «¡Un lápiz! Perfecto. Hay una hoja de reclamaciones en la pared. Usted escribe y yo dicto. ¡Me robaron las sábanas!»",
          C: "Carmen ve el lápiz y se le ilumina la mirada. «¡Un lápiz! Providencial. Hay una hoja de reclamaciones junto a la puerta. Usted escribe, yo dicto. ¡Me robaron las sábanas de mi boda!»",
        },
        options: [
          {
            id: "escribir",
            say: { A: "Dicte, señora.", B: "Dicte, señora, que yo escribo.", C: "Dicte, señora; yo tomo nota." },
            reply: { A: "Carmen se endereza. «Yo, Carmen…» Escribes.", B: "Carmen se endereza las gafas. «Yo, Carmen, vecina de la calle Luna…» Escribes.", C: "Carmen se ajusta las gafas con solemnidad. «Yo, Carmen, vecina de la calle Luna desde hace cuarenta años…» Escribes." },
            mood: "worried", next: "lapiz-reclamo",
          },
          {
            id: "primero",
            say: { A: "Primero busquemos la ropa. Después reclamamos.", B: "Primero busquemos la ropa. Después reclamamos.", C: "Primero busquemos la ropa; la reclamación puede esperar." },
            reply: { A: "Carmen niega. «¡Primero el papel! Después la ropa.»", B: "Carmen niega con energía. «¡Primero el papel! Después la ropa. Así se hacen las cosas.»", C: "Carmen niega con firmeza. «¡Primero el papel, después la ropa! Sin papel no existe el robo.»" },
            mood: "angry", next: "lapiz-reclamo",
          },
          {
            id: "dibujar",
            say: { A: "Mejor le dibujo las sábanas para un cartel de «se busca».", B: "Mejor le dibujo las sábanas para un cartel de «se busca».", C: "Mejor dibujo las sábanas para un cartel de «se busca», con recompensa." },
            reply: { A: "Carmen se ríe. «¿Sábanas en un cartel? Bueno, dibuje.»", B: "Carmen se ríe a pesar de todo. «¿Un cartel con mis sábanas? Bueno, dibuje, dibuje.»", C: "Carmen se ríe sin querer. «¿Mis sábanas en un cartel, como un perro perdido? Bueno, dibuje.»" },
            mood: "smile", end: "lapiz-cartel",
          },
        ],
      },
      "lapiz-reclamo": {
        who: "carmen", mood: "worried",
        line: {
          A: "Carmen dicta: «Yo, Carmen, denuncio que mis sábanas blancas…» Se detiene. «¿Y si no fue un robo? ¿Y si fui yo, con la secadora equivocada?»",
          B: "Carmen dicta: «Yo, Carmen, denuncio que mis sábanas blancas desaparecieron de la secadora 3…» Se detiene. «¿Y si no fue un robo? ¿Y si me equivoqué yo de secadora?»",
          C: "Carmen dicta: «Yo, Carmen, denuncio la desaparición de mis sábanas blancas de la secadora 3…» Se calla de pronto. «¿Y si no hubo robo? ¿Y si la equivocada soy yo?»",
        },
        options: [
          {
            id: "ticket",
            say: { A: "Mire el ticket. ¿Qué número dice?", B: "Mire el ticket. ¿Qué número de secadora dice?", C: "Revise el ticket. ¿Qué secadora pagó?" },
            reply: { A: "Carmen lee. «Dice 4.» Abre la 4. «¡Mi ropa! ¡Rosa!»", B: "Carmen lee el ticket y se pone roja. «Dice 4.» Abre la 4 y grita: «¡Mi ropa! ¡Pero está rosa!»", C: "Carmen lee el ticket y enrojece. «Secadora 4. Retiro la denuncia.» Abre la 4. «¡Y retiro el blanco también!»" },
            mood: "surprised", next: "rosa",
          },
          {
            id: "firmar",
            say: { A: "Terminamos la hoja igual y usted firma. Por si acaso.", B: "Terminamos la hoja de todos modos y usted firma, por si acaso.", C: "Completamos la hoja igualmente y usted firma, por si las moscas." },
            reply: { A: "Carmen firma. Abre la 4. Rosa. Rompe la hoja riéndose.", B: "Carmen firma con el lápiz. Luego abre la 4: todo rosa. Rompe la hoja muerta de risa.", C: "Carmen firma con tu lápiz y una floritura. Abre la 4: rosa. Rompe la hoja de reclamaciones entre carcajadas." },
            mood: "laugh", end: "lapiz-hoja",
          },
          {
            id: "tachar",
            say: { A: "Tachamos todo y escribimos: «Carmen se equivocó de secadora».", B: "Tachamos todo y escribimos: «Carmen se equivocó de secadora».", C: "Tachamos todo y dejamos constancia: «Carmen se equivocó de secadora»." },
            reply: { A: "Carmen se ríe. «¡Qué descarado! Pero es verdad.»", B: "Carmen se ríe. «¡Qué descarado! Pero tiene razón, escríbalo.»", C: "Carmen se ríe de buena gana. «¡Qué descarado! Pero es la pura verdad. Escríbalo.»" },
            mood: "laugh", end: "lapiz-tachon",
          },
        ],
      },
      "libro-inicio": {
        who: "carmen", mood: "surprised",
        line: {
          A: "Carmen ve el libro y se calma de golpe. «¿Un libro? Entonces usted es el muchacho que lee aquí de noche. Mi nieta me habló de usted. No fue usted. Pero ayúdeme.»",
          B: "Carmen ve el libro y se calma de golpe. «¿Un libro? Entonces usted es el muchacho que viene a leer de noche. Mi nieta me habló de usted. No fue usted, está claro. Pero ayúdeme.»",
          C: "Carmen ve el libro y la rabia se le desinfla. «¿Un libro? Entonces usted es el muchacho que lee aquí por las noches. Mi nieta me habló de usted. Queda absuelto. Pero ayúdeme.»",
        },
        options: [
          {
            id: "ayudar",
            say: { A: "Claro. ¿Qué ropa busca?", B: "Claro que sí. ¿Qué ropa busca?", C: "Por supuesto. ¿Qué ropa busca?" },
            reply: { A: "Carmen suspira. «Sábanas blancas. Las de mi boda.»", B: "Carmen suspira y se sienta. «Sábanas blancas. Las de mi boda, hace cuarenta años.»", C: "Carmen suspira y se deja caer en la silla. «Sábanas blancas. Las de mi boda. Cuarenta años intactas, hasta hoy.»" },
            mood: "sad", next: "libro-espera",
          },
          {
            id: "nieta",
            say: { A: "¿Su nieta? ¿Quién es su nieta?", B: "¿Su nieta? ¿Y quién es su nieta?", C: "¿Su nieta? ¿Y quién es su nieta, si puede saberse?" },
            reply: { A: "Carmen sonríe. «Lucía, la de la farmacia. Dice que usted lee cosas raras.»", B: "Carmen sonríe un poco. «Lucía, la de la farmacia. Dice que usted lee cosas muy raras.»", C: "Carmen esboza una sonrisa. «Lucía, la de la farmacia de la esquina. Dice que usted lee cosas rarísimas.»" },
            mood: "smile", next: "libro-espera",
          },
          {
            id: "leer",
            say: { A: "Mientras buscamos, ¿le leo un poco?", B: "Mientras buscamos la ropa, ¿le leo un poco?", C: "Mientras buscamos, ¿le leo un par de páginas?" },
            reply: { A: "Carmen acepta. Lees. Abren la 4. «¡Mi ropa! ¡Rosa!»", B: "Carmen acepta. Lees dos páginas mientras abren secadoras. En la 4, Carmen grita: «¡Mi ropa! ¡Pero rosa!»", C: "Carmen acepta. Lees dos páginas entre secadora y secadora. Al abrir la 4, Carmen grita: «¡Mis sábanas! ¿Rosas?»" },
            mood: "surprised", next: "rosa",
          },
        ],
      },
      "libro-espera": {
        who: "carmen", mood: "sad",
        line: {
          A: "Carmen se sienta a tu lado con la cesta vacía. «Son las sábanas de mi boda. ¿Su libro tiene alguna historia sobre cosas que se pierden?»",
          B: "Carmen se sienta a tu lado, con la cesta vacía sobre las rodillas. «Son las sábanas de mi boda. ¿Su libro cuenta alguna historia sobre cosas que se pierden?»",
          C: "Carmen se sienta a tu lado, la cesta vacía en el regazo. «Son las sábanas de mi boda. Dígame, ¿su libro tiene alguna historia sobre cosas que se pierden y vuelven?»",
        },
        options: [
          {
            id: "historia",
            say: { A: "Tiene una. Un hombre pierde un anillo y lo encuentra en la secadora 4.", B: "Tiene una. Un hombre pierde un anillo y lo encuentra, al final, en la secadora 4.", C: "Tiene una: un hombre pierde un anillo y, en el último capítulo, lo encuentra en la secadora 4." },
            reply: { A: "Carmen se ríe. Abre la 4. «¡Mi ropa! Pero… ¡rosa!»", B: "Carmen se ríe y, por si acaso, abre la 4. «¡Mi ropa! Pero… ¡está rosa!»", C: "Carmen se ríe y, por seguir la historia, abre la 4. «¡Mis sábanas! Pero… ¿rosas?»" },
            mood: "surprised", end: "libro-rosa",
          },
          {
            id: "regalar",
            say: { A: "Tenga. Se lo regalo. Para cuando vuelva a lavar.", B: "Tenga, se lo regalo. Para la próxima vez que venga a lavar.", C: "Tenga, se lo regalo. Para la próxima noche de lavadora." },
            reply: { A: "Carmen toma el libro. «Gracias, hijo. Lucía tenía razón.»", B: "Carmen toma el libro con las dos manos. «Gracias, hijo. Lucía tenía razón sobre usted.»", C: "Carmen acepta el libro con las dos manos. «Gracias, hijo. Lucía tenía razón: raro, pero bueno.»" },
            mood: "smile", end: "libro-regalo",
          },
          {
            id: "prisa",
            say: { A: "Tengo que irme. Suerte, señora.", B: "Tengo que irme. Suerte con la ropa, señora.", C: "Tengo que irme. Le deseo suerte con la ropa, señora." },
            reply: { A: "Carmen se enoja. «Claro. Lea, lea. Nadie ayuda.»", B: "Carmen frunce el ceño. «Claro. Usted lea, que nadie ayuda.»", C: "Carmen te mira por encima de las gafas. «Claro. Siga leyendo, que ayudar es de otro libro.»" },
            mood: "angry", end: "enojada",
          },
        ],
      },
      "corazon-inicio": {
        who: "carmen", mood: "love",
        line: {
          A: "Carmen ve el corazón y baja la cesta. Se le ablanda la cara. «Ay, hijo. Perdone los gritos. Son las sábanas de mi boda. Mi marido ya no está, pero ellas sí.»",
          B: "Carmen ve el corazón y deja la cesta en el suelo. La cara se le ablanda. «Ay, hijo, perdone los gritos. Son las sábanas de mi boda. Mi marido ya no está, pero ellas sí.»",
          C: "Carmen ve el corazón y suelta la cesta. La dureza se le va de la cara. «Ay, hijo, perdone los gritos. Son las sábanas de mi boda. Mi marido ya no está; ellas eran lo que quedaba.»",
        },
        options: [
          {
            id: "consolar",
            say: { A: "Las vamos a encontrar, Carmen. Juntos.", B: "Las vamos a encontrar, Carmen. Juntos.", C: "Las vamos a encontrar, Carmen, y lo haremos juntos." },
            reply: { A: "Carmen te aprieta la mano. «Gracias. Se llamaba Teo.»", B: "Carmen te aprieta la mano. «Gracias, hijo. Mi marido se llamaba Teo.»", C: "Carmen te aprieta la mano con fuerza. «Gracias, hijo. Mi marido se llamaba Teo, y le habría caído bien.»" },
            mood: "love", next: "corazon-marido",
          },
          {
            id: "marido",
            say: { A: "¿Cómo era su marido?", B: "¿Cómo era su marido, Carmen?", C: "Cuénteme, ¿cómo era su marido?" },
            reply: { A: "Carmen sonríe. «Teo. Alegre. Odiaba el blanco.»", B: "Carmen sonríe con los ojos. «Teo. Alegre, ruidoso. Odiaba el blanco.»", C: "Carmen sonríe hacia dentro. «Teo. Alegre, ruidoso, imposible. Odiaba el blanco con toda su alma.»" },
            mood: "love", next: "corazon-marido",
          },
          {
            id: "abrazo",
            say: { A: "Venga aquí, Carmen.", B: "Venga aquí, Carmen.", C: "Venga aquí, Carmen, que hace falta." },
            reply: { A: "Carmen te abraza. Llora un poco en tu hombro.", B: "Carmen te abraza y llora un poco en tu hombro, entre las secadoras.", C: "Carmen te abraza y llora un rato en tu hombro, bajo los tubos fluorescentes." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-marido": {
        who: "carmen", mood: "love",
        line: {
          A: "Carmen abre la secadora 4: las sábanas están rosas. Sonríe. «Teo decía que el blanco era aburrido. Cuarenta años con sábanas blancas por mí.»",
          B: "Carmen abre la secadora 4 y encuentra sus sábanas, ahora rosas. Sonríe despacio. «Teo decía que el blanco era aburrido. Cuarenta años con sábanas blancas, por mí.»",
          C: "Carmen abre la 4 y ahí están sus sábanas, teñidas de rosa. Sonríe con la mitad de la boca. «Teo decía que el blanco era aburridísimo. Cuarenta años con sábanas blancas, solo por mí.»",
        },
        options: [
          {
            id: "tomas",
            say: { A: "Entonces Teo ganó esta noche. Rosas.", B: "Entonces esta noche ganó Teo. Rosas.", C: "Entonces esta noche, por fin, ganó Teo. Rosas." },
            reply: { A: "Carmen se ríe y llora. Baila con la sábana rosa.", B: "Carmen se ríe y llora a la vez. Y baila con la sábana rosa entre las secadoras.", C: "Carmen ríe y llora al mismo tiempo. Y se pone a bailar con la sábana rosa, como en su boda." },
            mood: "love", end: "corazon-baile",
          },
          {
            id: "lavar",
            say: { A: "Si quiere, las lavamos otra vez. Pero yo las dejaría.", B: "Si quiere, las lavamos otra vez. Pero yo las dejaría así.", C: "Si quiere, las lavamos otra vez. Aunque yo las dejaría tal como están." },
            reply: { A: "Carmen las dobla. «Las dejo. Teo se lo merece.»", B: "Carmen las dobla con cuidado. «Las dejo rosas. Teo se lo merece.»", C: "Carmen las dobla con mimo. «Se quedan rosas. Teo se lo ganó.»" },
            mood: "love", end: "corazon-rosas",
          },
          {
            id: "abrazo",
            say: { A: "Venga, un abrazo. Por Teo.", B: "Venga, un abrazo. Por Teo.", C: "Venga, un abrazo, por Teo." },
            reply: { A: "Carmen te abraza con la sábana rosa en la mano.", B: "Carmen te abraza con la sábana rosa todavía en la mano.", C: "Carmen te abraza sin soltar la sábana rosa, que los envuelve a los dos." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {
      risa: { text: { A: "Carmen ríe. Dobla sus sábanas rosas y te da un caramelo.", B: "Carmen dobla sus sábanas rosas tarareando. Antes de irse, te regala un caramelo de menta.", C: "Carmen dobla sus nuevas sábanas rosas con dignidad renovada y te regala un caramelo de menta, a modo de indemnización." }, change: "baila", recap: "Hiciste reír a Carmen con sus sábanas rosas." },
      lavar: { text: { A: "Lavan las sábanas otra vez. La lavadora se enciende. Carmen está contenta.", B: "Ponen las sábanas a lavar otra vez. La lavadora se enciende y Carmen te cuenta su vida mientras esperan.", C: "La lavadora se enciende con un zumbido esperanzador. Mientras esperan, Carmen te cuenta cuarenta años de matrimonio." }, change: "luz", recap: "Ayudaste a Carmen a lavar otra vez sus sábanas." },
      enojada: { text: { A: "Carmen está enojada. No te habla más.", B: "Carmen recoge sus cosas, enojada, y no vuelve a mirarte.", C: "Carmen recoge sus cosas con un silencio muy elocuente." }, change: "enojado", recap: "Dejaste a Carmen enojada en la lavandería." },
      policia: { text: { A: "Llega la policía. Explicas todo. Encuentran la ropa en la secadora 4.", B: "Llega la policía. Mientras explicas el malentendido, un agente encuentra la ropa en la secadora 4.", C: "Llega una patrulla. El malentendido se aclara y un agente resuelve, además, el misterio de la secadora 4." }, change: "policia", recap: "Un malentendido con Carmen terminó con la policía." },
      "cuchillo-alarma": { text: { A: "La alarma suena. Llega la policía. Ven el cuchillo. Explicas lo de la secadora durante una hora.", B: "La alarma no para hasta que llega la policía. Ven el cuchillo y pasas una hora explicando lo de la secadora atascada.", C: "La alarma sigue sonando cuando llega la policía. Lo primero que registran es tu cuchillo; explicar lo de la secadora atascada lleva una hora." }, change: "policia", recap: "Carmen activó la alarma al ver tu cuchillo." },
      "cuchillo-escoba": { text: { A: "El vecino te saca a escobazos. Carmen te grita desde la puerta.", B: "El vecino te saca de la lavandería a escobazos. Carmen te grita desde la puerta, con la cesta en alto.", C: "El vecino te expulsa a escobazos hasta la acera. Carmen te despide a gritos desde la puerta, cesta en alto y gafas torcidas." }, change: "enojado", recap: "Un vecino te sacó de la lavandería por tu cuchillo." },
      "cuchillo-rosa": { text: { A: "Carmen saca sus sábanas rosas. «Rosas. Y usted con un cuchillo. Qué noche.» Pero sonríe.", B: "Carmen saca las sábanas, ahora rosas. «Rosas. Y usted con un cuchillo. Qué noche, por favor.» Pero termina sonriendo.", C: "Carmen saca las sábanas teñidas de rosa. «Rosas. Y usted con un cuchillo. Menuda noche.» Y, contra todo pronóstico, sonríe." }, change: "sonrie", recap: "Abriste la secadora atascada de Carmen con tu cuchillo." },
      "pistola-abandono": { text: { A: "Te vas. Desde la puerta oyes a Carmen: «Sí, policía, un hombre con una pistola…»", B: "Te alejas. Desde la puerta oyes a Carmen, con voz débil: «Sí, policía, un hombre con una pistola…»", C: "Te alejas por la calle Luna. Desde la puerta llega la voz quebrada de Carmen: «Sí, policía, un hombre con una pistola, y yo con el corazón…»" }, change: "llama", recap: "Dejaste a Carmen en el suelo, asustada por tu pistola." },
      "pistola-silbato": { text: { A: "Carmen se levanta despacio. Encuentran la ropa en la 4, rosa. Ella se ríe y sopla el silbato.", B: "Carmen se levanta despacio y, entre los dos, encuentran la ropa en la secadora 4, rosa. Ella se ríe y sopla el silbato para celebrarlo.", C: "Carmen se levanta con tu ayuda y, entre los dos, encuentran la ropa en la 4, teñida de rosa. Ella se ríe y hace sonar el silbato como una victoria." }, change: "sonrie", recap: "Carmen se recuperó del susto de tu pistola y te mostró su silbato." },
      "pistola-ambulancia": { text: { A: "Llamas a la ambulancia. Llega rápido. Carmen te dice adiós desde la camilla.", B: "Llamas a emergencias y la ambulancia llega enseguida. Carmen te dice adiós desde la camilla, ya con mejor color.", C: "Llamas a emergencias y la ambulancia llega antes de lo que esperabas. Carmen se despide desde la camilla, recuperada y todavía mirando tu bolsillo." }, change: "ambulancia", recap: "Llamaste a una ambulancia para Carmen tras el susto de tu pistola." },
      "pistola-comprobar": { text: { A: "Carmen llama a la comisaría. Nadie te conoce. Llega una patrulla.", B: "Carmen llama a la comisaría. Nadie te conoce allí. Diez minutos después, llega una patrulla.", C: "Carmen llama a la comisaría y, por supuesto, nadie ha oído hablar de ti. Diez minutos después, una patrulla aparca en la puerta." }, change: "policia", recap: "Carmen comprobó que no eras policía y llegó la de verdad." },
      "granada-evacuacion": { text: { A: "La policía cierra la calle. Evacúan el edificio. Un helicóptero ilumina la lavandería.", B: "La policía cierra la calle Luna y evacúa el edificio. Un helicóptero ilumina la lavandería desde arriba.", C: "La policía acordona la calle Luna y evacúa el edificio entero. Un helicóptero ilumina la lavandería con un foco que no deja sombra." }, change: "helicoptero", recap: "Tu granada vació la calle Luna con un helicóptero encima." },
      "granada-basura": { text: { A: "El vecino llama a la policía. Llegan y sacan la granada del cubo. Carmen busca su ropa mientras tanto.", B: "El vecino llama a la policía. Llegan y sacan la granada del cubo con mucho cuidado. Carmen, mientras tanto, busca su ropa.", C: "El vecino llama a la policía, que saca la granada del cubo con pinzas. Carmen, ajena a todo, encuentra su ropa en la 4 y descubre que es rosa." }, change: "policia", recap: "Tu granada apareció en la basura y llegó la policía." },
      "gas-rociado": { text: { A: "Caes al suelo con los ojos ardiendo. Carmen llama a la policía mientras tose.", B: "Caes de rodillas con los ojos en llamas. Carmen, tosiendo, llama a la policía.", C: "Caes al suelo de la lavandería con los ojos ardiendo. Carmen, tosiendo detrás de la lavadora, llama a la policía con voz triunfal." }, change: "cae", recap: "Carmen te roció con su gas pimienta antes que tú." },
      "gas-dueno": { text: { A: "Abren la 4. Las sábanas están rosas. Carmen y el dueño discuten. Tú te ríes.", B: "Abren la 4 y aparecen las sábanas, rosas. Carmen y el dueño discuten sobre un calcetín rojo. Tú te ríes.", C: "Abren la 4 y aparecen las sábanas teñidas de rosa. Carmen y el dueño discuten sobre un calcetín rojo anónimo mientras tú guardas el gas, riéndote." }, change: "sonrie", recap: "Esperaste al sospechoso de Carmen con el gas guardado: era el dueño." },
      "lapiz-cartel": { text: { A: "Dibujas las sábanas. Carmen pega el cartel. Debajo, alguien escribe: «Están en la 4».", B: "Dibujas las sábanas y Carmen pega el cartel en la puerta. Al rato, alguien escribe debajo: «Están en la 4».", C: "Dibujas las sábanas y Carmen pega el cartel en la puerta. Minutos después, alguien escribe debajo con tu lápiz: «Están en la 4. Rosas»." }, change: "sonrie", recap: "Dibujaste las sábanas de Carmen para un cartel de «se busca»." },
      "lapiz-hoja": { text: { A: "Carmen rompe la hoja. Pone las sábanas rosas a lavar. Se enciende la lavadora.", B: "Carmen rompe la hoja de reclamaciones y pone las sábanas rosas a lavar. La lavadora se enciende.", C: "Carmen rompe la hoja de reclamaciones en pedacitos y pone las sábanas rosas a lavar. La lavadora se enciende con un zumbido de perdón." }, change: "luz", recap: "Carmen firmó y rompió la reclamación que escribiste." },
      "lapiz-tachon": { text: { A: "Carmen deja la hoja tachada en la pared. Todos los clientes la leen y se ríen.", B: "Carmen deja la hoja tachada en la pared, con la nueva frase. Los clientes de la noche la leen y se ríen.", C: "Carmen deja la hoja tachada en la pared, con la confesión a lápiz. Cada cliente de la noche la lee y se ríe." }, change: "sonrie", recap: "Carmen dejó en la pared su confesión escrita con tu lápiz." },
      "libro-rosa": { text: { A: "Carmen saca las sábanas rosas. «Como en su libro.» Te devuelve la sonrisa.", B: "Carmen saca las sábanas rosas de la 4. «Como en su libro, pero rosa.» Y te devuelve la sonrisa.", C: "Carmen saca las sábanas teñidas de la 4. «Como en su libro, pero en rosa.» Y, por primera vez, sonríe de verdad." }, change: "sonrie", recap: "Carmen encontró sus sábanas siguiendo la historia de tu libro." },
      "libro-regalo": { text: { A: "Carmen abre tu libro. Encuentran la ropa en la 4. Ella lee mientras lava otra vez.", B: "Carmen abre tu libro y, entre capítulo y capítulo, encuentran la ropa en la 4. Ella lee mientras la lavadora da vueltas.", C: "Carmen abre tu libro y, entre dos capítulos, aparece la ropa en la 4. Ella lee bajo los fluorescentes mientras la lavadora gira." }, change: "luz", recap: "Le regalaste tu libro a Carmen en la lavandería." },
      "corazon-abrazo": { text: { A: "Carmen y tú se abrazan entre las secadoras. Después, doblan las sábanas juntos.", B: "Carmen y tú se abrazan entre las secadoras. Después, doblan las sábanas rosas entre los dos.", C: "Carmen y tú se abrazan entre las secadoras, bajo la luz blanca. Después, doblan las sábanas rosas a cuatro manos." }, change: "abraza", recap: "Carmen te abrazó recordando a su marido." },
      "corazon-baile": { text: { A: "Carmen baila con la sábana rosa. Tararea su canción de boda.", B: "Carmen baila con la sábana rosa por toda la lavandería, tarareando la canción de su boda.", C: "Carmen baila con la sábana rosa entre las lavadoras, tarareando la canción de su boda como si Teo la llevara." }, change: "baila", recap: "Carmen bailó con sus sábanas rosas por Teo." },
      "corazon-rosas": { text: { A: "Carmen dobla las sábanas rosas. Te regala un caramelo. «Por Teo.»", B: "Carmen dobla las sábanas rosas con cuidado y te regala un caramelo de menta. «Por Teo.»", C: "Carmen dobla las sábanas rosas con una ternura nueva y te regala un caramelo de menta. «Por Teo, que al fin ganó.»" }, change: "sonrie", recap: "Carmen se quedó con sus sábanas rosas en memoria de Teo." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces cuando una persona mayor tiene miedo?", B: "¿Cómo tranquilizas a alguien que se asustó por tu culpa?", C: "¿Qué responsabilidad tienes cuando tu forma de aparecer asusta a otros?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Sabes qué hacer si alguien se siente mal?", B: "¿Alguna vez tuviste que pedir una ambulancia y cómo fue?", C: "¿Qué pesa más en una emergencia: el miedo o el sentido del deber?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué haces si alguien grita «bomba»?", B: "¿Cuál fue el susto más grande que le diste a alguien sin querer?", C: "¿Cómo se repara la confianza después de un susto absurdo?" } },
      gas: { start: "gas-inicio", fx: "risa", speak: { A: "¿Hay personas sospechosas en tu barrio?", B: "¿Alguna vez acusaste a alguien y después te equivocaste?", C: "¿Cuándo la desconfianza se convierte en injusticia?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes con lápiz o con bolígrafo?", B: "¿Alguna vez hiciste una reclamación por escrito y funcionó?", C: "¿Para qué sirve dejar una queja por escrito cuando el error fue nuestro?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Lees en lugares públicos?", B: "¿Qué historia conoces sobre algo que se perdió y se encontró?", C: "¿Puede una historia ajena ayudarnos a aceptar una pérdida?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Qué objeto de tu familia quieres mucho?", B: "¿Qué recuerdo de una persona querida guardas en un objeto?", C: "¿Cómo cambia el valor de un objeto cuando quien lo regaló ya no está?" } },
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
      "cuchillo-inicio": {
        who: "wilson", mood: "terror",
        line: {
          A: "Wilson ve el cuchillo en tu mano y levanta la linterna como escudo. «¡Atrás! ¿Qué haces con ese cuchillo? ¡Voy a llamar a la policía!»",
          B: "Wilson ve el cuchillo en tu mano y levanta la linterna como si fuera un escudo. «¡Atrás! ¿Qué haces con ese cuchillo a estas horas? ¡Voy a llamar a la policía!»",
          C: "Wilson ve el cuchillo, retrocede hasta la valla y levanta la linterna como único argumento. «¡Atrás! ¿Qué hace usted con eso en una obra de noche? ¿Quiere que llame a la policía?»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Tranquilo. Lo guardo. Oí un ruido y vine a ayudar.", B: "Tranquilo, lo guardo. Oí el ruido y vine a ayudar.", C: "Tranquilo, ya lo guardo. Oí el ruido y vine a ayudar, no a asustar." },
            reply: { A: "Wilson respira. «Bien guardado, ¿eh? Entonces mira tú primero.»", B: "Wilson baja la linterna despacio. «Bien guardado, ¿eh? Entonces el ruido sigue ahí. Mira tú primero.»", C: "Wilson baja la linterna despacio. «Bien guardado, por favor. El ruido sigue ahí detrás; usted primero, y sin sorpresas.»" },
            mood: "worried", next: "gatitos",
          },
          {
            id: "alto",
            say: { A: "¡No llames a nadie! Dame la llave de la valla.", B: "¡No llames a nadie! Dame la llave de la valla.", C: "¡Nadie llama a nadie! Dame la llave de la valla." },
            reply: { A: "Wilson aprieta el botón de su radio. «¡Central! ¡Hombre armado en la obra!»", B: "Wilson aprieta el botón de su radio. «¡Central, central! ¡Hombre con un cuchillo en la obra!»", C: "Wilson aprieta el botón de la radio sin quitarte los ojos de encima. «¡Central! Hombre con un cuchillo en la obra. Repito: cuchillo.»" },
            mood: "scared", end: "cuchillo-radio",
          },
        ],
      },
      "pistola-inicio": {
        who: "wilson", mood: "terror",
        line: {
          A: "Wilson ve la pistola, suelta la linterna y levanta las manos. «¡No me dispares! ¡Solo cuido ladrillos! ¡No hay dinero!»",
          B: "Wilson ve la pistola, deja caer la linterna y levanta las manos. «¡No dispares, por favor! Solo cuido ladrillos. ¡Aquí no hay dinero!»",
          C: "Wilson ve la pistola, la linterna se le cae al suelo y las manos le suben solas. «No dispare. Cuido ladrillos y gatos, nada de valor. Dieciocho años de sereno y esto es lo más emocionante.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "No quiero tu dinero. La guardo. ¿Qué es ese ruido?", B: "No quiero tu dinero. La guardo. ¿Qué es ese ruido?", C: "No quiero nada tuyo. La guardo. ¿Sabes qué es ese ruido?" },
            reply: { A: "Wilson recoge la linterna con las manos temblando. «No sé. Mira tú, pero con eso guardado.»", B: "Wilson recoge la linterna con las manos temblando. «No lo sé. Mira tú, pero con eso bien guardado.»", C: "Wilson recoge la linterna con dedos torpes. «Ni idea. Mire usted, pero con eso en el fondo del bolsillo.»" },
            mood: "scared", next: "gatitos",
          },
          {
            id: "ordenar",
            say: { A: "Abre la valla y no hagas ruido.", B: "Abre la valla y no hagas ruido.", C: "Abre la valla, despacio y sin una palabra." },
            reply: { A: "Wilson obedece, pero toca la alarma de la caseta. Llega una patrulla.", B: "Wilson obedece, pero con el codo toca la alarma de la caseta. Llega una patrulla en minutos.", C: "Wilson obedece, aunque con el codo roza la alarma de la caseta. En minutos, una patrulla está en la puerta." },
            mood: "scared", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "wilson", mood: "terror",
        line: {
          A: "Wilson ve la granada y echa a correr hacia la caseta gritando: «¡Una bomba! ¡Una bomba en la obra!» Se enciende toda la calle.",
          B: "Wilson ve la granada y sale corriendo hacia la caseta gritando: «¡Una bomba! ¡Una bomba en la obra!» Las ventanas de toda la calle se encienden.",
          C: "Wilson ve la granada y huye hacia la caseta con una agilidad inesperada, gritando: «¡Una bomba! ¡Hay una bomba en mi obra!» La calle entera se ilumina.",
        },
        options: [
          {
            id: "calmar",
            say: { A: "¡Wilson, vuelve! ¡Es de mentira! ¡Los gatitos!", B: "¡Wilson, vuelve! Es de mentira. ¡Y hay algo detrás de los ladrillos!", C: "¡Wilson, vuelva! Es de mentira, y detrás de esos ladrillos hay algo que maúlla!" },
            reply: { A: "Wilson se asoma desde la caseta. «¿De mentira? ¿Gatitos? Bueno… ¿Vamos?»", B: "Wilson asoma la cabeza desde la caseta. «¿De mentira? ¿Y qué es lo que suena detrás? Está bien, voy… pero tú delante.»", C: "Wilson asoma la cabeza por la ventana de la caseta. «¿De mentira? ¿Y eso que maúlla? Está bien, voy, pero usted delante y con esa cosa guardada.»" },
            mood: "worried", next: "gatitos",
          },
          {
            id: "huir",
            say: { A: "¡Perdón! ¡Me voy!", B: "¡Perdón a todos! ¡Me voy!", C: "¡Disculpas a toda la calle! ¡Me retiro!" },
            reply: { A: "Corres. Suenan sirenas. Un helicóptero ilumina la obra.", B: "Sales corriendo. Suenan sirenas y un helicóptero ilumina la obra entera.", C: "Sales corriendo. Las sirenas llegan y un helicóptero ilumina la obra entera con un foco que no perdona." },
            mood: "scared", end: "granada-helicoptero",
          },
        ],
      },
      "corazon-inicio": {
        who: "wilson", mood: "love",
        line: {
          A: "Wilson ve el corazón y baja la linterna. Sonríe. «Qué raro. Ya no tengo miedo. Gracias por venir. Llevo años sin hablar con nadie de noche.»",
          B: "Wilson ve el corazón y baja la linterna. Sonríe sin querer. «Qué raro: de repente ya no tengo miedo. Gracias por venir. Llevo años sin hablar con nadie de noche.»",
          C: "Wilson ve el corazón y la linterna le baja sola. Sonríe, desconcertado. «Qué cosa más rara: se me fue el miedo. Gracias por venir. Hacía diecisiete años que nadie se acercaba a hablar conmigo de noche.»",
        },
        options: [
          {
            id: "mirar",
            say: { A: "Vamos juntos a ver el ruido.", B: "Vamos juntos a ver qué es el ruido.", C: "Vamos juntos a descubrir qué es ese ruido." },
            reply: { A: "Wilson sonríe. «Juntos, sí. Me gusta.»", B: "Wilson sonríe de oreja a oreja. «Juntos, sí. Hacía años que no oía esa palabra de noche.»", C: "Wilson sonríe, emocionado. «Juntos. Qué palabra tan bonita para una obra.»" },
            mood: "love", next: "gatitos",
          },
          {
            id: "abrazo",
            say: { A: "Primero un abrazo, Wilson.", B: "Primero un abrazo, Wilson. Lo necesitas.", C: "Primero un abrazo, Wilson; las noches largas lo merecen." },
            reply: { A: "Wilson te abraza fuerte. Se le caen unas lágrimas.", B: "Wilson te abraza con fuerza y se le escapan unas lágrimas.", C: "Wilson te abraza con una fuerza de oso y se le escapan unas lágrimas sin permiso." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {
      cuidar: { text: { A: "Wilson cuida a los gatitos en su caseta. Está feliz.", B: "Wilson prepara una caja con una manta para los gatitos en su caseta. Sonríe como un niño.", C: "Wilson improvisa una cuna con una caja y su chaqueta. Por primera vez en años, el turno de noche se le hace corto." }, change: "sonrie", recap: "Ayudaste a Wilson a cuidar a unos gatitos." },
      refugio: { text: { A: "Wilson llama a su sobrina. Mañana los gatitos van al refugio.", B: "Wilson llama a su sobrina, que promete venir al amanecer a buscar a los gatitos.", C: "Wilson llama a su sobrina. Al amanecer, los gatitos tendrán refugio y, quizá, una familia." }, change: "llama", recap: "Llamaste a un refugio para los gatitos de la obra." },
      madre: { text: { A: "La mamá gata se lleva a sus gatitos. Wilson y tú se ríen.", B: "La gata recoge a sus crías una por una. Wilson y tú se quedan mirando, en silencio.", C: "La gata se lleva a sus crías una por una, sin dar las gracias. Wilson y tú sonríen como dos tíos orgullosos." }, change: "sonrie", recap: "Esperaste con Wilson a que la gata volviera por sus crías." },
      solo: { text: { A: "Te vas. Wilson busca el ruido solo.", B: "Te alejas. Wilson sigue buscando el ruido, solo con su linterna.", C: "Te alejas. A tu espalda, la linterna de Wilson tiembla entre los ladrillos." }, change: "sigue", recap: "Dejaste a Wilson solo con el ruido de la obra." },
      "cuchillo-radio": { text: { A: "Llega la policía. Ven el cuchillo. Explicas durante una hora que solo querías ayudar.", B: "Llega la policía y encuentra tu cuchillo. Pasas una hora explicando que solo querías ayudar con el ruido.", C: "Llega una patrulla y lo primero que ve es tu cuchillo. Explicar que solo querías ayudar con el ruido te lleva una hora." }, change: "policia", recap: "Tu cuchillo asustó a Wilson y llegó la policía a la obra." },
      "pistola-patrulla": { text: { A: "La patrulla llega y ve la pistola. Wilson se esconde en su caseta. Tú te explicas.", B: "La patrulla llega y ve la pistola. Wilson se esconde en su caseta mientras tú te explicas.", C: "La patrulla llega, ve la pistola y los agentes desenfundan. Wilson se esconde en la caseta mientras tú te explicas con las manos en alto." }, change: "policia", recap: "Tu pistola en la obra terminó con una patrulla." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina la obra. La policía cierra la calle. Los gatitos maúllan.", B: "Un helicóptero ilumina la obra mientras la policía cierra la calle. Detrás de los ladrillos, los gatitos maúllan.", C: "Un helicóptero barre la obra con su foco y la policía acordona la calle. Detrás de los ladrillos, tres gatitos protestan por el escándalo." }, change: "helicoptero", recap: "Tu granada llenó de policías y de un helicóptero la obra de Wilson." },
      "corazon-abrazo": { text: { A: "Wilson y tú se abrazan. Los gatitos salen a ver. Todos se ríen.", B: "Wilson y tú se abrazan junto a la obra. Los gatitos salen a ver qué pasa. Todos se ríen.", C: "Wilson y tú se abrazan junto a la valla. Los gatitos salen a curiosear y Wilson, entre risas, decide que esta noche el turno será corto." }, change: "abraza", recap: "Wilson te abrazó en la obra, sin miedo." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces si alguien te da miedo de noche?", B: "¿Cómo reaccionas cuando alguien te asusta sin querer?", C: "¿Qué papel juega el miedo en los trabajos solitarios?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Tienes miedo de las armas?", B: "¿Qué harías si te amenazaran en tu lugar de trabajo?", C: "¿Cuánto pesa la obediencia cuando alguien te intimida?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Qué haces si hay una alarma en la calle?", B: "¿Cuál fue la falsa alarma más grande que viviste?", C: "¿Por qué el pánico se contagia tan rápido?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Con quién hablas cuando estás solo?", B: "¿Quién te hace compañía en tus noches largas?", C: "¿Cuánto cambia una noche cuando alguien se queda a acompañarte?" } },
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
