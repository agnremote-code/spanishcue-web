// Noche abierta · calle · La Estación: un reloj parado, ecos en el túnel, anuncios que nadie entiende y gente con prisa.
const HEART = { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." };

const encounters = [
  // ─────────────────────────────────────────────────────────────── ESCENA 1
  {
    id: "estacion-taxi",
    kind: "escena",
    district: "estacion",
    title: "El taxi que nunca llega",
    verb: "AYUDAR",
    goal: "Ofrecer soluciones de transporte, proponer y comparar opciones, tranquilizar a alguien nervioso y hablar de miedos.",
    cast: [
      {
        id: "rodrigo", name: "Rodrigo", role: "Viajero con prisa",
        age: "adult", body: "m", build: "heavy", height: 1.76,
        hair: "short", hairColor: "#4a4440", skin: "#d9a77f",
        top: "coat", topColor: "#8a6a45", bottom: "pants", bottomColor: "#2e2e33",
        extras: ["suitcase", "mustache"], pose: "stand", props: ["taxi-sign", "bench"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "rodrigo", mood: "worried",
        line: {
          A: "En la parada de taxis, un señor con maleta mira el gran reloj. «Cuarenta minutos aquí y no llega ningún taxi. ¡Tengo un vuelo a las seis!»",
          B: "En la parada de taxis, un hombre con una maleta enorme mira el reloj cada diez segundos. «Llevo cuarenta minutos esperando. Si no sale un taxi ya, pierdo el vuelo de las seis.»",
          C: "Un hombre de traje arrugado vigila la parada de taxis vacía como si así fuera a aparecer uno. «Cuarenta minutos. Ni un taxi. Esta ciudad tiene algo personal contra mí y mi vuelo de las seis.»",
        },
        options: [
          {
            id: "compartir",
            say: { A: "Yo también espero un taxi. ¿Lo compartimos?", B: "Yo también estoy esperando. Si llega uno, ¿lo compartimos?", C: "Pues ya somos dos los ofendidos. Si aparece un taxi, ¿lo compartimos y nos ahorramos la pelea?" },
            reply: { A: "Rodrigo sonríe un poco. «¡Buena idea! Si llega uno, claro.»", B: "Rodrigo se relaja un poco. «Me parece perfecto. Me llamo Rodrigo. Ahora solo falta el taxi.»", C: "Rodrigo te da la mano. «Rodrigo. Encantado, socio. Ahora solo nos falta el detalle del taxi.»" },
            mood: "smile", next: "plan",
          },
          {
            id: "llamar",
            say: { A: "¿Quieres que llame a un taxi con mi teléfono?", B: "¿Quieres que pida un taxi desde mi celular? A lo mejor tengo más suerte.", C: "Déjame probar a mí. A veces los teléfonos ajenos traen mejor suerte." },
            reply: { A: "Rodrigo suspira. «Llamé tres veces. Nadie contesta.»", B: "Rodrigo levanta su teléfono. «Yo llamé tres veces. Me ponen una música horrible y luego se corta.»", C: "«Inténtalo», dice Rodrigo. «Yo ya me sé de memoria la musiquita de espera. Hasta la tarareo.»" },
            mood: "worried", next: "plan",
          },
          {
            id: "calma",
            say: { A: "Tranquilo. Vamos a buscar otra solución.", B: "Tranquilo, todavía es temprano. Vamos a pensar otra opción.", C: "Respira. Son las doce; el avión sale a las seis. Hay margen para un pequeño milagro." },
            reply: { A: "Rodrigo respira. «Sí… Perdón. Estoy muy nervioso.»", B: "Rodrigo se sienta en la maleta. «Tienes razón. Es que estoy nerviosísimo.»", C: "Rodrigo se sienta sobre la maleta. «Un pequeño milagro. Me conformo con uno mediano, eh.»" },
            mood: "neutral", next: "plan",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y miras un cartel.", B: "Ves un cartel viejo de taxis y sacas el lápiz.", C: "Descubres un cartel descolorido en la columna y sacas el lápiz." },
            say: { A: "Mira, aquí hay otro número de taxis. Te lo escribo.", B: "Mira, en ese cartel hay otro número de taxis. Te lo apunto.", C: "Hay un número de taxis escondido en esa columna. Te lo apunto, por si es el bueno." },
            reply: { A: "Rodrigo lee el papel. «¡Radio Taxi Estación! No lo vi. ¡Gracias!»", B: "Rodrigo lee el número. «¡Radio Taxi Estación! Llevo cuarenta minutos delante y no lo vi.»", C: "Rodrigo mira el papel y luego la columna. «Cuarenta minutos delante de ese cartel. Qué bien me conozco.»" },
            mood: "smile", next: "plan",
          },
          libro: {
            act: { A: "Abres tu libro para esperar.", B: "Abres tu libro para pasar el rato.", C: "Abres tu libro con la calma de quien no tiene vuelo." },
            say: { A: "¿Quieres leer un poco? El tiempo pasa más rápido.", B: "¿Quieres leer algo mientras esperamos? Ayuda a no pensar.", C: "¿Un capítulo mientras tanto? Leer es la mejor anestesia para las esperas." },
            reply: { A: "Rodrigo ve un avión en la tapa. Se pone pálido. «Uf… un avión.»", B: "Rodrigo ve la tapa: un avión entre nubes negras. Se pone pálido. «Qué… oportuno.»", C: "Rodrigo mira la tapa: un avión en plena tormenta. «Qué elección tan delicada de portada», murmura, pálido." },
            mood: "scared", next: "miedo",
          },
          gas: {
            act: { A: "Rodrigo viene rápido hacia ti. Sacas el gas pimienta.", B: "Rodrigo se acerca deprisa con la maleta y tú sacas el gas pimienta.", C: "Rodrigo avanza hacia ti a toda velocidad y, por reflejo, sacas el gas pimienta." },
            say: { A: "¡Eh! ¡Para! ¿Qué quieres?", B: "¡Quieto ahí! ¿Qué quieres?", C: "¡Un momento! ¿Qué necesitas, exactamente?" },
            reply: { A: "Rodrigo se para. «¡Solo quiero un taxi!»", B: "Rodrigo frena en seco. «¡Solo iba a preguntarte si tienes la aplicación de taxis!»", C: "Rodrigo levanta las manos con la maleta colgando. «¡Un taxi! Lo único que necesito en esta vida es un taxi.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Sacas la granada del bolsillo.", B: "Al buscar el celular, sacas la granada.", C: "Buscas el teléfono y, en su lugar, aparece la granada." },
            say: { A: "Perdón, busco mi teléfono.", B: "Perdona, estaba buscando el teléfono.", C: "Ignora esto. Mi teléfono está por algún lado." },
            reply: { A: "Rodrigo abre mucho los ojos. «¡Ay, Dios! ¡Y yo con miedo del avión!»", B: "Rodrigo da un paso atrás. «¡Y yo preocupado por el avión! ¿Eso es lo que creo?»", C: "«Y yo que pensaba que lo peligroso era volar», dice Rodrigo, abrazado a su maleta." },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al levantar el brazo, se ve tu pistola.", C: "Al señalar la calle, la pistola queda a la vista." },
            say: { A: "Mira, ¿ese es un taxi?", B: "Mira, ¿eso de allí es un taxi?", C: "¿Aquello de la esquina no es un taxi?" },
            reply: { A: "Rodrigo te da la cartera. «¡Toma! ¡Pero déjame ir al aeropuerto!»", B: "Rodrigo te ofrece la cartera, temblando. «¡Toma todo! Pero déjame la maleta, por favor.»", C: "Rodrigo te tiende la cartera sin mirar. «Llévate lo que quieras, pero el pasaporte no, que me caso… digo, que me voy.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo. La rueda de la maleta tiene un plástico.", B: "Ves un plástico enganchado en la rueda de su maleta y sacas el cuchillo.", C: "Notas que la maleta cojea: hay un plástico enredado en la rueda. Sacas el cuchillo." },
            say: { A: "Tu maleta tiene un plástico en la rueda. ¿Lo corto?", B: "La rueda de tu maleta está enganchada. ¿Quieres que corte el plástico?", C: "Tu maleta lleva un rato arrastrando una bolsa. ¿Se la quito o es parte del equipaje?" },
            reply: { A: "Rodrigo duda. «Eh… bueno. Con cuidado.» Ahora la maleta va bien.", B: "Rodrigo se pone tenso, pero asiente. Cortas el plástico y la maleta rueda perfecta. «¡Gracias!»", C: "Rodrigo traga saliva y asiente. La maleta rueda como nueva. «Bueno, ya tenemos maleta. Nos falta el taxi.»" },
            mood: "worried", next: "plan",
          },
          corazon: {
            act: HEART,
            say: { A: "Estás muy nervioso. ¿Es solo por el taxi?", B: "Te veo muy nervioso. ¿De verdad es solo por el taxi?", C: "Perdona que me meta, pero ese nervio no parece solo de taxi." },
            reply: { A: "Rodrigo baja la cabeza. «No… La verdad, tengo miedo de volar.»", B: "Rodrigo se ríe, un poco avergonzado. «¿Tanto se nota? La verdad es que me da pánico volar.»", C: "Rodrigo te mira sorprendido y suelta el aire. «Me pillaste. El taxi es la excusa. Lo que me aterra es el avión.»" },
            mood: "love", next: "miedo",
          },
        },
      },
      plan: {
        who: "rodrigo", mood: "worried",
        line: {
          A: "Rodrigo mira la calle vacía. «¿Qué hacemos? El aeropuerto está a media hora.»",
          B: "Rodrigo mira la calle vacía y luego a ti. «El aeropuerto está a media hora. ¿Qué me recomiendas?»",
          C: "Rodrigo extiende las manos hacia la calle desierta. «El aeropuerto queda a media hora. Acepto propuestas, incluso las absurdas.»",
        },
        options: [
          {
            id: "parada",
            say: { A: "Hay otra parada en la puerta norte. Te acompaño.", B: "En la puerta norte hay otra parada con más taxis. Si quieres, te acompaño.", C: "La puerta norte tiene su propia parada, y suele estar mejor surtida. Vamos, te acompaño." },
            reply: { A: "Rodrigo toma la maleta. «¡Vamos! Gracias.»", B: "Rodrigo agarra la maleta con energía. «¿Otra parada? ¿Y nadie me lo dijo? ¡Vamos!»", C: "«Media vida esperando en la puerta equivocada», dice Rodrigo, ya caminando. «Muy propio de mí.»" },
            mood: "smile", end: "parada",
          },
          {
            id: "autobus",
            say: { A: "El autobús nocturno va al aeropuerto. Sale a las doce y media.", B: "Hay un autobús nocturno al aeropuerto. Es barato y sale a las doce y media.", C: "¿Y el autobús nocturno? Sale a las doce y media, es barato y no depende de la suerte." },
            reply: { A: "Rodrigo piensa. «¿Un autobús? Bueno… Es buena idea.»", B: "Rodrigo duda. «No tomo un autobús desde la universidad. Pero bueno, es mejor que nada.»", C: "Rodrigo hace una mueca y luego sonríe. «El autobús. Mi yo de veinte años estaría orgulloso.»" },
            mood: "smile", end: "autobus",
          },
          {
            id: "otravez",
            say: { A: "Llama otra vez. Si quieres, hablo yo.", B: "Llama otra vez y, si contestan, hablo yo. A lo mejor me hacen más caso.", C: "Llama una vez más y pásamelo. Tengo una voz muy convincente a medianoche." },
            reply: { A: "Rodrigo llama. Esta vez contestan. «¡Sí! ¡Viene un taxi!»", B: "Rodrigo marca y, por fin, alguien contesta. Te pasa el teléfono y explicas dónde están. «¡Cinco minutos!»", C: "Contestan al primer tono. Explicas la situación con tu voz convincente. Rodrigo te mira como a un mago." },
            mood: "smile", end: "llamada",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Vas a llegar. Pero te veo pálido. ¿Estás bien?", B: "Vas a llegar a tiempo, seguro. Pero te veo pálido. ¿Seguro que estás bien?", C: "Llegar vas a llegar. Lo que me preocupa es esa cara de despedida." },
            reply: { A: "Rodrigo se sienta en la maleta. «No. Tengo miedo de volar.»", B: "Rodrigo se sienta en la maleta y se ríe sin ganas. «Es que me da pánico volar. Ya está, lo dije.»", C: "Rodrigo se deja caer sobre la maleta. «Cara de despedida, dice. Tienes buen ojo: me aterra volar.»" },
            mood: "love", next: "miedo",
          },
        },
      },
      miedo: {
        who: "rodrigo", mood: "sad",
        line: {
          A: "Rodrigo habla bajito. «Tengo miedo del avión. Creo que no quiero llegar.»",
          B: "Rodrigo se frota las manos. «A lo mejor el taxi no llega porque en el fondo no quiero que llegue.»",
          C: "Rodrigo mira el reloj parado de la estación. «Igual el universo me está haciendo un favor. O igual soy un cobarde con maleta.»",
        },
        options: [
          {
            id: "normal",
            say: { A: "Es normal. Mucha gente tiene miedo de volar.", B: "Es muy normal. Mucha gente tiene miedo de volar y viaja igual.", C: "Tener miedo no te hace cobarde. Subirte con miedo es justo lo contrario." },
            reply: { A: "Rodrigo te mira. «¿Sí? Pensé que solo yo.»", B: "«¿De verdad?», dice Rodrigo. «Yo pensaba que era el único que reza en el despegue.»", C: "Rodrigo se queda callado un momento. «Visto así, casi parezco un héroe. Un héroe sudoroso, pero héroe.»" },
            mood: "smile", end: "valiente",
          },
          {
            id: "porque",
            say: { A: "¿Por qué tienes que viajar mañana?", B: "¿Y por qué es tan importante este viaje?", C: "Si te da tanto miedo, algo muy importante te espera al otro lado. ¿Qué es?" },
            reply: { A: "Rodrigo sonríe. «Mi hija vive en Lima. Va a tener un hijo.»", B: "A Rodrigo le cambia la cara. «Mi hija vive en Lima. Va a dar a luz esta semana. Mi primer nieto.»", C: "Rodrigo sonríe por primera vez de verdad. «Mi hija. En Lima. Su primer hijo. Y yo aquí, negociando con un taxi.»" },
            mood: "love", end: "valiente",
          },
          {
            id: "broma",
            say: { A: "Mira, el taxi es más peligroso que el avión.", B: "Piénsalo: es más peligroso el taxi hasta el aeropuerto que el avión.", C: "Estadísticamente, lo más arriesgado de tu noche es el taxista. El avión es un paseo." },
            reply: { A: "Rodrigo se ríe. «¡Entonces mejor sin taxi!»", B: "Rodrigo suelta una carcajada. «¡Pues entonces me quedo sin taxi y voy caminando!»", C: "Rodrigo se ríe tanto que la gente se gira. «Me has quitado el miedo al avión y me has dado miedo al taxi.»" },
            mood: "smile", end: "parada",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Eres más valiente de lo que crees.", B: "Creo que eres mucho más valiente de lo que piensas.", C: "No sé qué te espera allí, pero se nota que vale la pena el susto." },
            reply: { A: "Rodrigo te abraza. «Gracias. Voy a ver a mi nieta.»", B: "Rodrigo se emociona. «Voy a conocer a mi nieta. Por ella me subo a diez aviones.»", C: "Rodrigo se seca los ojos disimulando. «Mi primera nieta. Por ella vuelo hasta en una escoba.»" },
            mood: "love", end: "valiente",
          },
        },
      },
      calmar: {
        who: "rodrigo", mood: "scared",
        line: {
          A: "Rodrigo tiene miedo. Agarra la maleta y no se mueve.",
          B: "Rodrigo se esconde detrás de la maleta y no te quita los ojos de encima.",
          C: "Rodrigo usa la maleta de escudo, con la dignidad de un hombre que solo quería un taxi.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Solo quiero ayudar.", B: "Perdona, ya lo guardo. Solo quería ayudarte con el taxi.", C: "Perdona, empecé fatal. Lo guardo y volvemos al tema del taxi, que era mucho mejor." },
            reply: { A: "Rodrigo respira. «Bueno… Qué susto.»", B: "Rodrigo baja la maleta despacio. «Bueno. Me diste un susto tremendo.»", C: "«Volvamos al taxi, sí, por favor», dice Rodrigo, todavía con la voz temblorosa." },
            mood: "worried", next: "plan",
          },
          {
            id: "explicar",
            say: { A: "No es para ti. Es para mi seguridad.", B: "No es para ti, de verdad. Lo llevo por seguridad.", C: "No es lo que parece. Bueno, sí es lo que parece, pero no es para ti." },
            reply: { A: "Rodrigo no te cree. Llama a la policía.", B: "Rodrigo asiente sin creerte y marca un número. «¿Policía? Estoy en la estación…»", C: "«Clarísimo», dice Rodrigo, y marca un número. «¿Policía? Sí, en la estación. Les explico…»" },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdona el susto. Me voy ya.", C: "Te dejo tranquilo. Perdona, de verdad." },
            reply: { A: "Rodrigo toma la maleta y se va rápido.", B: "Rodrigo agarra la maleta y se aleja casi corriendo.", C: "Rodrigo se aleja a toda velocidad, con la maleta rebotando detrás." },
            mood: "scared", end: "huye",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Perdón. Soy una buena persona. ¿Buscamos un taxi juntos?", B: "Perdóname, de verdad. ¿Empezamos otra vez? Te ayudo con el taxi.", C: "Perdón. Me presento otra vez: alguien inofensivo con muy mala puntería para las primeras impresiones." },
            reply: { A: "Rodrigo sonríe un poco. «Bueno. Te creo.»", B: "Rodrigo se ríe, nervioso. «Bueno… Tienes cara de buena persona. Rara, pero buena.»", C: "Rodrigo se ríe a su pesar. «Pésima puntería, sí. Pero acepto la segunda presentación.»" },
            mood: "love", next: "plan",
          },
        },
      },
      // ── variantes: el objeto cambia la escena desde el primer segundo
      "cuchillo-inicio": {
        who: "rodrigo", mood: "scared",
        line: {
          A: "Rodrigo ve el cuchillo en tu mano. Da un paso atrás con la maleta. «¡Eh! ¿Qué haces con ese cuchillo? ¡No te acerques!»",
          B: "Rodrigo ve el cuchillo antes de verte a ti. Retrocede y pone la maleta en medio. «¿Qué haces con ese cuchillo? ¿Estás loco? ¡Ni un paso más!»",
          C: "Rodrigo no mira tu cara: mira el cuchillo. Retrocede y levanta la maleta como un escudo. «Cuarenta minutos sin taxi y ahora un cuchillo. ¿Quieres que llame a la policía?»",
        },
        options: [
          {
            id: "bajar",
            act: { A: "Bajas el cuchillo despacio.", B: "Bajas el cuchillo muy despacio.", C: "Bajas el cuchillo con una lentitud exagerada." },
            say: { A: "Tranquilo. Lo guardo. Solo quiero esperar el taxi.", B: "Tranquilo, lo guardo ya. Solo estoy esperando un taxi, como tú.", C: "Calma. Lo guardo. Es un cuchillo de bolsillo, no un argumento." },
            reply: { A: "Rodrigo respira. «Guárdalo bien. Me diste un susto horrible.»", B: "Rodrigo no baja la maleta. «Guárdalo del todo. Casi me da algo.»", C: "Rodrigo sigue detrás de la maleta. «Pues guarda el argumento. Y el bolsillo, ciérralo.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "explicar",
            say: { A: "Es para la fruta. Mira, tengo una manzana.", B: "Es para la fruta, de verdad. Mira, llevo una manzana en el bolso.", C: "Es un cuchillo de fruta. Llevo una manzana; la amenaza es contra ella." },
            reply: { A: "Rodrigo mira la manzana. «¿Una manzana? ¿A medianoche?»", B: "Rodrigo mira la manzana y luego el cuchillo. «¿Una manzana a medianoche? No sé qué es peor.»", C: "Rodrigo evalúa la manzana con desconfianza. «La manzana no me tranquiliza. Guarda el cuchillo y hablamos.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "acercarse",
            act: { A: "Das un paso hacia él con el cuchillo.", B: "Te acercas sin guardar el cuchillo.", C: "Avanzas un paso, cuchillo en mano, para explicarte mejor." },
            say: { A: "Espera, no es nada. Escucha…", B: "Espera, que no es nada. Déjame explicarte…", C: "No es lo que parece. Déjame que te lo explique de cerca…" },
            reply: { A: "Rodrigo grita: «¡Socorro! ¡Policía!» Un guardia corre hacia ustedes.", B: "Rodrigo grita con toda su voz: «¡Policía! ¡Tiene un cuchillo!» Un guardia de la estación sale corriendo.", C: "Rodrigo grita: «¡Policía! ¡Un cuchillo!» El eco de la estación hace el resto: aparece un guardia a la carrera." },
            mood: "terror", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-calma": {
        who: "rodrigo", mood: "worried",
        line: {
          A: "Rodrigo baja la maleta un poco. «Bueno. Sin cuchillo, hablamos. Pero sigo sin taxi.»",
          B: "Rodrigo baja la maleta, todavía tenso. «Bueno. Sin cuchillo a la vista, podemos hablar. Lo del taxi sigue igual de mal.»",
          C: "Rodrigo baja la maleta, sin perder de vista tu bolsillo. «De acuerdo. Hablamos, pero a esta distancia. Y el taxi sigue sin existir.»",
        },
        options: [
          {
            id: "parada",
            say: { A: "Perdón por el susto. En la puerta norte hay más taxis. Te acompaño.", B: "Perdona el susto. En la puerta norte hay otra parada con taxis. Te acompaño, si quieres.", C: "Disculpa el susto. La puerta norte tiene otra parada, y mejor surtida. Te acompaño, a dos metros, si prefieres." },
            reply: { A: "Rodrigo duda. «Bueno. Pero tú caminas delante.»", B: "Rodrigo lo piensa. «De acuerdo. Pero caminas delante, donde te vea.»", C: "Rodrigo acepta con una condición. «Tú delante. Las manos donde pueda verlas. Y nada de fruta.»" },
            mood: "neutral", end: "cuchillo-parada",
          },
          {
            id: "llamar",
            say: { A: "Lo siento. Llamo a un taxi con mi celular.", B: "Lo siento mucho. Déjame pedir un taxi desde mi celular.", C: "Te pido disculpas. Déjame que llame yo a un taxi; es lo mínimo." },
            reply: { A: "Rodrigo asiente. Llamas. «¡Cinco minutos!»", B: "Rodrigo asiente sin acercarse. Llamas y contestan a la primera. «Cinco minutos.»", C: "Rodrigo asiente desde su distancia de seguridad. Llamas, contestan y prometen cinco minutos." },
            mood: "neutral", end: "cuchillo-parada",
          },
          {
            id: "chiste",
            say: { A: "¿Tienes miedo de un cuchillo pero no del avión?", B: "¿Te da miedo un cuchillo pequeño y no un avión enorme?", C: "Curioso: un cuchillo de fruta te asusta y un avión de doscientas toneladas, no." },
            reply: { A: "Rodrigo se enfada. «¡Se acabó!» Llama a la policía.", B: "Rodrigo se pone rojo. «¡Se acabó! No me río de amenazas.» Y marca el número de la policía.", C: "Rodrigo deja de temblar y empieza a enfadarse. «Se acabó la charla.» Marca el número de la policía sin dejar de mirarte." },
            mood: "angry", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "rodrigo", mood: "terror",
        line: {
          A: "Rodrigo ve la pistola. Levanta las manos. La maleta cae al suelo. «¡No, por favor! ¡Toma todo, pero no me hagas nada!»",
          B: "Rodrigo ve la pistola y levanta las manos. La maleta se cae de lado. «No, por favor. Toma la cartera, el reloj, lo que quieras. No quiero problemas.»",
          C: "Rodrigo ve la pistola y las manos se le van solas hacia arriba. La maleta cae con estruendo. «No, por favor. La cartera es tuya. El pasaporte, te lo suplico, no.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la pistola rápido.", B: "Guardas la pistola enseguida.", C: "Guardas la pistola de inmediato." },
            say: { A: "¡No, no! Baja las manos. No quiero nada. Perdón.", B: "¡No, no! Baja las manos, por favor. No quiero nada tuyo. Perdón.", C: "¡No, no! Baja las manos. No es un asalto; es un pésimo malentendido." },
            reply: { A: "Rodrigo baja las manos muy despacio. «¿Entonces por qué llevas un arma?»", B: "Rodrigo baja las manos centímetro a centímetro. «¿Y entonces por qué llevas un arma a una parada de taxis?»", C: "Rodrigo baja las manos sin dejar de mirarte. «¿Y por qué llevas un arma a esperar un taxi? ¿Qué taxis conoces tú?»" },
            mood: "worried", next: "pistola-manos",
          },
          {
            id: "explicar",
            say: { A: "Tranquilo. No es para ti. Baja las manos.", B: "Tranquilo, no es para ti. Puedes bajar las manos.", C: "Tranquilo. No va contigo. Baja las manos, que llamas la atención." },
            reply: { A: "Rodrigo no baja las manos. «¿Y para quién es?»", B: "Rodrigo no baja las manos. «¿Para quién es, entonces? Porque aquí solo estamos tú y yo.»", C: "Rodrigo mantiene las manos arriba. «¿Para quién, entonces? En esta parada solo hay dos personas y una es yo.»" },
            mood: "scared", next: "pistola-manos",
          },
          {
            id: "callar",
            act: { A: "No dices nada. La pistola sigue en tu mano.", B: "No dices nada y la pistola sigue a la vista.", C: "Guardas silencio sin guardar la pistola." },
            say: { A: "…", B: "…", C: "…" },
            reply: { A: "Un auto de policía pasa por la calle. Rodrigo grita: «¡Aquí! ¡Aquí!»", B: "Un coche patrulla pasa despacio por la avenida. Rodrigo grita con las manos arriba: «¡Aquí! ¡Tiene una pistola!»", C: "Un coche patrulla asoma por la avenida y Rodrigo, manos arriba, lo recibe a gritos: «¡Aquí! ¡Armado!»" },
            mood: "terror", end: "pistola-patrulla",
          },
        ],
      },
      "pistola-manos": {
        who: "rodrigo", mood: "scared",
        line: {
          A: "Rodrigo recoge la maleta sin dejar de mirarte. «Ya guardaste la pistola. Pero no voy a olvidar esto.»",
          B: "Rodrigo levanta la maleta del suelo sin perderte de vista. «Ya está guardada. Bien. Pero esto no se me olvida en la vida.»",
          C: "Rodrigo recoge la maleta con movimientos lentos. «Guardada. Bien. Que conste que mi vuelo me daba menos miedo que tú.»",
        },
        options: [
          {
            id: "ayudar",
            say: { A: "Te ayudo con el taxi. Es lo mínimo.", B: "Déjame ayudarte con el taxi. Es lo mínimo después del susto.", C: "Déjame al menos conseguirte un taxi. Te debo eso y una disculpa larga." },
            reply: { A: "Rodrigo acepta. «Pero yo subo solo.»", B: "Rodrigo acepta de lejos. «Bueno. Pero al taxi subo yo solo.»", C: "Rodrigo acepta con una condición. «De acuerdo. Pero el taxi es individual, y tú te quedas en la acera.»" },
            mood: "neutral", end: "pistola-taxi",
          },
          {
            id: "disculpa",
            say: { A: "Perdón, Rodrigo. Nunca uso esa pistola.", B: "Perdóname. Nunca la he usado. Ni pienso usarla.", C: "Perdóname. No la he disparado nunca y no pienso empezar en una parada de taxis." },
            reply: { A: "Rodrigo suspira. «Bueno. Busquemos ese taxi.»", B: "Rodrigo suspira largo. «Está bien. Busquemos ese taxi y olvidemos esto.»", C: "Rodrigo suelta el aire. «Vale. Taxi, y damos esto por no ocurrido. Casi.»" },
            mood: "worried", end: "pistola-taxi",
          },
          {
            id: "amenaza",
            say: { A: "No hables de esto con nadie, ¿sí?", B: "No le cuentes esto a nadie, ¿de acuerdo?", C: "Lo que pasó aquí se queda aquí. ¿Entendido?" },
            reply: { A: "Rodrigo se asusta otra vez y corre a un coche de policía.", B: "Rodrigo lo toma como una amenaza y corre hacia un coche patrulla que pasa.", C: "Rodrigo oye una amenaza, no una petición, y corre hacia el coche patrulla que asoma por la esquina." },
            mood: "terror", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "rodrigo", mood: "terror",
        line: {
          A: "Rodrigo ve la granada. Grita: «¡Una bomba!» Suelta la maleta y corre detrás de un banco.",
          B: "Rodrigo ve la granada en tu mano y grita: «¡Una bomba! ¡Hay una bomba!» Suelta la maleta y se tira detrás del banco.",
          C: "Rodrigo ve la granada y su voz despierta a toda la estación: «¡Una bomba!» Abandona la maleta y se lanza detrás del banco.",
        },
        options: [
          {
            id: "broma",
            say: { A: "¡Es de juguete! Tranquilo. Es una broma.", B: "¡Es de juguete! Tranquilo, es una broma de un amigo.", C: "¡Es de utilería! Tranquilo, es una broma pesada de un amigo con mal gusto." },
            reply: { A: "Rodrigo mira desde el banco. «¿De juguete? ¡Qué broma tan mala!»", B: "Rodrigo asoma la cabeza. «¿De juguete? ¿Y quién regala eso? ¡Qué broma más mala!»", C: "Rodrigo asoma desde el banco. «¿Utilería? Tu amigo y tú necesitan amigos mejores.»" },
            mood: "scared", next: "granada-banco",
          },
          {
            id: "guardar",
            act: { A: "Guardas la granada.", B: "Guardas la granada en el bolsillo.", C: "Guardas la granada con disimulo, tarde." },
            say: { A: "Perdón. Ya está guardada. Nadie la vio.", B: "Perdón, ya está guardada. Creo que nadie más la vio.", C: "Ya está guardada. Con suerte, nadie más la vio. Sin suerte, media estación." },
            reply: { A: "Rodrigo sigue detrás del banco. «¡Todos la vieron! ¡Gritaste tú no, yo!»", B: "Rodrigo no sale del banco. «¡La vio toda la estación! ¡El que gritó fui yo!»", C: "Rodrigo sigue agachado. «La vio todo el mundo porque la anuncié yo, a pleno pulmón.»" },
            mood: "scared", next: "granada-banco",
          },
          {
            id: "correr",
            act: { A: "Corres hacia la salida con la granada.", B: "Sales corriendo hacia la salida con la granada en la mano.", C: "Decides que lo mejor es correr, con la granada en alto." },
            say: { A: "¡Nadie se mueva!", B: "¡Que nadie se mueva!", C: "¡Que nadie se mueva, por favor!" },
            reply: { A: "Suena la alarma. Todos corren. Un helicóptero llega.", B: "Salta la alarma de la estación. Todo el mundo corre. Se oye un helicóptero.", C: "Se dispara la alarma, la estación se vacía en segundos y un helicóptero aparece sobre la plaza." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-banco": {
        who: "rodrigo", mood: "scared",
        line: {
          A: "Rodrigo sale del banco. La estación está vacía. «¡Todos se fueron! ¿Y ahora quién pide un taxi?»",
          B: "Rodrigo sale de detrás del banco. El andén está vacío. «Por tu granada se fue todo el mundo. ¡Hasta los taxistas!»",
          C: "Rodrigo emerge del banco y mira el vacío. «Tu granada ha conseguido lo imposible: una estación sin gente y, por supuesto, sin taxis.»",
        },
        options: [
          {
            id: "aprovechar",
            say: { A: "Mira, ahora no hay fila. ¡Un taxi para ti!", B: "Mira el lado bueno: sin gente no hay fila. El primer taxi es tuyo.", C: "Hay que ver el lado positivo: evacuación significa cero competencia por el primer taxi." },
            reply: { A: "Rodrigo se ríe nervioso. Llega un taxi. «¡Es mío!»", B: "Rodrigo se ríe, nervioso. Un taxi perdido asoma. «¡Mío! ¡Ese es mío!»", C: "Rodrigo suelta una risa histérica. Un taxi despistado aparece. «¡Mío! Lo pagué con un infarto.»" },
            mood: "laugh", end: "granada-taxi",
          },
          {
            id: "disculpa",
            say: { A: "Perdón por el caos. ¿Te acompaño a la puerta norte?", B: "Perdón por todo este caos. ¿Te acompaño a la puerta norte?", C: "Perdón por el apocalipsis. ¿Te acompaño a la puerta norte, lejos de aquí?" },
            reply: { A: "Rodrigo toma la maleta. «Sí. Pero tú sin granada.»", B: "Rodrigo agarra la maleta. «Sí. Pero la granada se queda en el bolsillo.»", C: "Rodrigo recoge la maleta. «Vamos. Y la granada, en el bolsillo, sin opinar.»" },
            mood: "worried", end: "granada-taxi",
          },
          {
            id: "ensenar",
            act: { A: "Sacas la granada otra vez para enseñarla.", B: "Sacas la granada otra vez, para demostrar que es falsa.", C: "Sacas la granada para demostrar, con calma, que es inofensiva." },
            say: { A: "Mira, no pasa nada. Es de plástico.", B: "Mira, no pasa nada. Es de plástico, toca.", C: "Mira: plástico puro. Tócala, no muerde." },
            reply: { A: "Un helicóptero de la policía ilumina la parada. Rodrigo cierra los ojos.", B: "Un helicóptero de la policía enciende su foco sobre la parada. Rodrigo levanta las manos y cierra los ojos.", C: "Un helicóptero policial fija su foco sobre ustedes. Rodrigo levanta las manos y murmura que esto no estaba en su plan de viaje." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "gas-inicio": {
        who: "rodrigo", mood: "surprised",
        line: {
          A: "Rodrigo ve el gas pimienta y levanta las dos manos. «¡Eh, eh! Yo solo quiero un taxi. ¿Eso es por mí?»",
          B: "Rodrigo ve el gas pimienta en tu mano y se queda quieto con las manos abiertas. «¡Eh! Tranquilidad. Solo quiero un taxi. ¿Eso es por mí?»",
          C: "Rodrigo ve el gas pimienta y abre las manos como quien calma a un perro. «Tranquilo. Lo único que quiero en esta vida es un taxi. ¿De verdad eso es por mí?»",
        },
        options: [
          {
            id: "prevenir",
            say: { A: "No. Es por la noche. Esta estación da miedo.", B: "No, no es por ti. Es por la noche. Esta estación de madrugada da miedo.", C: "No va contigo. Es la estación a estas horas: uno aprende a desconfiar." },
            reply: { A: "Rodrigo baja las manos. «Tienes razón. Ayer robaron aquí.»", B: "Rodrigo baja las manos y asiente. «Razón no te falta. Ayer robaron a una chica aquí mismo.»", C: "Rodrigo baja las manos. «Razonable, la verdad. Ayer asaltaron a una chica en esta misma parada.»" },
            mood: "neutral", next: "gas-charla",
          },
          {
            id: "guardar",
            act: { A: "Guardas el gas.", B: "Guardas el gas pimienta.", C: "Guardas el gas pimienta con cierta vergüenza." },
            say: { A: "Perdón. Te vi venir rápido y me asusté.", B: "Perdona. Te vi venir tan rápido con la maleta que me asusté.", C: "Perdona. Llegabas tan rápido con esa maleta que mi reflejo decidió por mí." },
            reply: { A: "Rodrigo se ríe. «¿Yo? ¿Doy miedo? ¡Qué honor!»", B: "Rodrigo se ríe. «¿Yo doy miedo? Es la primera vez que me lo dicen.»", C: "Rodrigo se ríe, halagado. «¿Doy miedo? Mi hija dice que doy pena. Prefiero tu versión.»" },
            mood: "smile", next: "gas-charla",
          },
          {
            id: "apuntar",
            act: { A: "Sigues apuntando con el gas.", B: "No bajas el gas pimienta.", C: "Mantienes el gas pimienta apuntando a su cara." },
            say: { A: "No te muevas. ¿Quién eres?", B: "No te muevas. ¿Quién eres y qué quieres?", C: "Quieto ahí. Identifícate antes de dar otro paso." },
            reply: { A: "Rodrigo se enfada. «¡Soy un señor con maleta!» Se va a buscar al guardia.", B: "Rodrigo pierde la paciencia. «¡Soy un señor con una maleta! ¡Esto es ridículo!» Se va a buscar al guardia.", C: "Rodrigo pasa del miedo al enfado. «¡Soy un contable con maleta, no un peligro público!» Y se va directo al guardia." },
            mood: "angry", end: "gas-guardia",
          },
        ],
      },
      "gas-charla": {
        who: "rodrigo", mood: "neutral",
        line: {
          A: "Rodrigo mira tu bolsillo. «¿Y ese gas funciona? Mi hija vive en Lima y quiero regalarle uno.»",
          B: "Rodrigo señala tu bolsillo. «¿Y ese gas funciona de verdad? Mi hija vive en Lima y quiero regalarle uno.»",
          C: "Rodrigo señala el bolsillo donde guardaste el gas. «¿Funciona? Mi hija vive en Lima y, en vez de flores, le llevaría uno.»",
        },
        options: [
          {
            id: "consejo",
            say: { A: "Sí. Pero mejor regálale una clase de defensa.", B: "Funciona, pero mejor regálale una clase de defensa personal.", C: "Funciona, pero un curso de defensa personal se queda con ella más tiempo que un bote." },
            reply: { A: "Rodrigo lo apunta. «Clase de defensa. Buena idea.» Y llega un taxi.", B: "Rodrigo lo apunta en el celular. «Clase de defensa personal. Buena idea.» Justo entonces llega un taxi.", C: "Rodrigo lo anota en el celular. «Defensa personal. Mejor que flores, desde luego.» Y, como premio, aparece un taxi." },
            mood: "smile", end: "gas-taxi",
          },
          {
            id: "paranoia",
            say: { A: "Funciona. Yo no salgo sin él. Nadie es de fiar.", B: "Funciona. Yo no salgo nunca sin él. En esta ciudad nadie es de fiar.", C: "Funciona. No salgo sin él: en esta ciudad hasta los señores con maleta pueden ser otra cosa." },
            reply: { A: "Rodrigo se pone serio. «¿Yo tampoco?» Se aleja para buscar un taxi solo.", B: "Rodrigo se pone serio. «¿Yo tampoco soy de fiar?» Toma la maleta y se aleja para buscar taxi solo.", C: "Rodrigo lo encaja mal. «¿Ni los señores con maleta? Pues buscaré mi taxi sin compañía desconfiada.»" },
            mood: "sad", end: "gas-guardia",
          },
          {
            id: "regalo",
            say: { A: "Toma el mío para tu hija. Yo compro otro.", B: "Llévale el mío a tu hija. Yo me compro otro mañana.", C: "Llévate el mío para tu hija. Yo compro otro; tú tienes un vuelo." },
            reply: { A: "Rodrigo lo guarda. «¡Gracias! Ella va a tener un hijo.» Llega un taxi.", B: "Rodrigo lo guarda con cuidado. «Gracias. Va a tener un hijo y yo quiero que esté segura.» Llega un taxi.", C: "Rodrigo lo guarda como un tesoro. «Gracias. Está embarazada y yo quiero que duerma tranquila.» Un taxi aparece al fin." },
            mood: "smile", end: "gas-taxi",
          },
        ],
      },
      "lapiz-inicio": {
        who: "rodrigo", mood: "worried",
        line: {
          A: "Rodrigo ve tu lápiz y te da un papel. «¿Tienes lápiz? ¡Perfecto! Escribe esto: vía de autobuses, puerta norte… No, mejor, ¿tú conoces la estación?»",
          B: "Rodrigo ve el lápiz en tu mano y saca un papel arrugado. «¿Llevas lápiz? ¡Por fin alguien útil! Tengo tres números de taxi y ninguno apuntado. ¿Me ayudas?»",
          C: "Rodrigo ve el lápiz y te pone un papel delante como quien encuentra un oasis. «¿Un lápiz? Eres la primera persona útil de la noche. Tengo tres números en la cabeza y ninguno en papel.»",
        },
        options: [
          {
            id: "apuntar",
            say: { A: "Dime los números. Yo los escribo.", B: "Dime los números y te los apunto bien grandes.", C: "Dicta. Te los apunto con letra de médico, pero legible." },
            reply: { A: "Rodrigo dicta. Escribes tres números. «¡Ahora sí!»", B: "Rodrigo dicta los tres números y tú los apuntas. «¡Ahora sí que tengo un plan!»", C: "Rodrigo dicta y tú escribes. Mira el papel como si fuera un billete de avión. «Esto ya es un plan.»" },
            mood: "smile", next: "lapiz-mapa",
          },
          {
            id: "mapa",
            act: { A: "Dibujas un mapa de la estación.", B: "Dibujas un mapa rápido de la estación en su papel.", C: "Le dibujas un plano de la estación en el papel arrugado." },
            say: { A: "Mira: aquí estamos. Aquí está la puerta norte. Allí hay taxis.", B: "Mira: estamos aquí. Esta es la puerta norte, y aquí hay siempre taxis.", C: "Mira: aquí estamos; esto es la puerta norte, donde los taxis sí existen." },
            reply: { A: "Rodrigo mira el mapa. «¡Qué claro! ¿Cinco minutos caminando?»", B: "Rodrigo estudia el dibujo. «Clarísimo. ¿Y son cinco minutos a pie?»", C: "Rodrigo admira el plano. «Más claro que las señales de la estación. ¿Cinco minutos?»" },
            mood: "smile", next: "lapiz-mapa",
          },
          {
            id: "nota",
            say: { A: "Mejor te dejo mi número. Si no hay taxi, me llamas.", B: "Mejor te apunto mi número. Si al final no hay taxi, me llamas.", C: "Te dejo mi número. Si la noche se pone peor, llamas y pensamos juntos." },
            reply: { A: "Rodrigo guarda el papel. «Gracias. Qué amable.» Llega un taxi.", B: "Rodrigo guarda el papel en la chaqueta. «Gracias, de verdad.» Y, como si lo hubiera llamado el lápiz, llega un taxi.", C: "Rodrigo guarda el papel junto al pasaporte. «Gracias.» El lápiz debe de tener poderes: aparece un taxi." },
            mood: "smile", end: "lapiz-numero",
          },
        ],
      },
      "lapiz-mapa": {
        who: "rodrigo", mood: "smile",
        line: {
          A: "Rodrigo mira el papel con los números y el mapa. «Con esto llego. ¿Llamo o camino?»",
          B: "Rodrigo mira el papel: números, mapa y una flecha. «Con esto sí que llego. ¿Llamo primero o camino a la puerta norte?»",
          C: "Rodrigo sostiene el papel como un mapa del tesoro. «Con esto llego a Lima. ¿Llamo a un número o camino hacia tu flecha?»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Llama al primero. Yo escribo la hora.", B: "Llama al primer número. Yo apunto la hora a la que llega.", C: "Llama al primero. Yo anoto la hora de llegada, por si hay que reclamar." },
            reply: { A: "Rodrigo llama. «¡Cinco minutos!» Escribes: 00:15.", B: "Rodrigo llama y contestan. «¡Cinco minutos!» Apuntas: 00:15, taxi número uno.", C: "Rodrigo llama, contestan y prometen cinco minutos. Lo anotas con hora y minuto, como un notario." },
            mood: "smile", end: "lapiz-numero",
          },
          {
            id: "caminar",
            say: { A: "Camina con el mapa. Te acompaño.", B: "Sigue el mapa. Te acompaño hasta la puerta norte.", C: "Sigue la flecha. Te acompaño, que un mapa sin guía es media solución." },
            reply: { A: "Rodrigo toma la maleta. «¡Vamos! Con mapa no me pierdo.»", B: "Rodrigo agarra la maleta. «Vamos. Con mapa y guía no hay pérdida.»", C: "Rodrigo levanta la maleta. «Con plano y guía, esto ya parece una excursión.»" },
            mood: "smile", end: "lapiz-norte",
          },
          {
            id: "firmar",
            say: { A: "Firma aquí: «Prometo no perder el vuelo».", B: "Firma aquí abajo: «Prometo no perder el vuelo de las seis».", C: "Firma al pie: «Me comprometo a no perder el vuelo de las seis». Es un contrato." },
            reply: { A: "Rodrigo se ríe y firma. «¡Prometido!»", B: "Rodrigo se ríe y firma con tu lápiz. «Prometido. Ahora es oficial.»", C: "Rodrigo firma con una rúbrica enorme. «Firmado. Si lo pierdo, me demandas.»" },
            mood: "laugh", end: "lapiz-norte",
          },
        ],
      },
      "libro-inicio": {
        who: "rodrigo", mood: "surprised",
        line: {
          A: "Rodrigo ve tu libro y se ríe. «¿Lees a esta hora, en una parada de taxis? ¿Qué libro es?»",
          B: "Rodrigo ve tu libro y, por primera vez, deja de mirar el reloj. «¿Un libro? ¿A medianoche, en una parada de taxis? ¿Qué lees?»",
          C: "Rodrigo repara en tu libro y, por un segundo, el reloj deja de existir. «¿Lees en una parada de taxis a medianoche? Eso sí es optimismo. ¿Qué es?»",
        },
        options: [
          {
            id: "aviones",
            say: { A: "Es sobre aviones. ¿Quieres verlo?", B: "Es un libro sobre aviones. ¿Quieres verlo?", C: "Es un libro sobre aviación. ¿Te lo enseño?" },
            reply: { A: "Rodrigo se pone pálido. «¿Aviones? No, gracias…»", B: "Rodrigo se pone blanco. «¿Aviones? Mejor no. Tengo un vuelo a las seis y mucho miedo.»", C: "Rodrigo palidece. «¿Aviación? Guárdalo, por favor. Tengo vuelo a las seis y pánico a las seis y cinco.»" },
            mood: "scared", next: "libro-miedo",
          },
          {
            id: "regalar",
            say: { A: "Es una novela. Toma, para el avión.", B: "Es una novela corta. Toma, te la regalo para el avión.", C: "Es una novela corta y buena. Te la regalo: en el avión se lee mejor que se piensa." },
            reply: { A: "Rodrigo la toma. «¿Para el avión? Uf… El avión.»", B: "Rodrigo la acepta y la mira. «Para el avión… Si me subo. Me da pánico volar.»", C: "Rodrigo la acepta con una sonrisa que se le cae. «Para el avión. Si me subo. Volar me aterra.»" },
            mood: "worried", next: "libro-miedo",
          },
          {
            id: "excusa",
            say: { A: "Es para no hablar con nadie en la parada.", B: "Es mi excusa para que nadie me hable en la parada.", C: "Es mi escudo contra conversaciones de parada de taxis." },
            reply: { A: "Rodrigo se ríe. «¡Entonces te dejo leer!» Se sienta en su maleta.", B: "Rodrigo se ríe. «¡Pues te dejo en paz!» Se sienta en la maleta y vuelve a su reloj.", C: "Rodrigo suelta una carcajada. «Mensaje recibido. Te dejo con tu escudo.» Y vuelve a su reloj." },
            mood: "smile", end: "libro-silencio",
          },
        ],
      },
      "libro-miedo": {
        who: "rodrigo", mood: "sad",
        line: {
          A: "Rodrigo mira el libro en su mano. «Mi hija va a tener un hijo en Lima. Y yo tengo miedo del avión.»",
          B: "Rodrigo mira la tapa del libro sin abrirlo. «Mi hija va a dar a luz en Lima esta semana. Y a mí me paraliza un avión.»",
          C: "Rodrigo acaricia la tapa del libro sin abrirlo. «Mi hija tiene a su primer hijo en Lima esta semana. Y a mí me puede un avión.»",
        },
        options: [
          {
            id: "leer",
            say: { A: "Lee el primer capítulo en el avión. Así no piensas.", B: "Lee el primer capítulo en el despegue. Es imposible pensar y leer a la vez.", C: "Léelo durante el despegue. Nadie puede leer y tener pánico a la vez; está comprobado." },
            reply: { A: "Rodrigo abre el libro. «Bueno… Lo intento.» Llega un taxi.", B: "Rodrigo abre el libro por la primera página. «Lo intento. Por el niño.» Justo entonces llega un taxi.", C: "Rodrigo abre el libro. «Capítulo uno, despegue. Por mi nieto.» El taxi llega como si lo hubiera leído." },
            mood: "smile", end: "libro-despegue",
          },
          {
            id: "dedicar",
            say: { A: "¿Me das el libro? Te escribo algo dentro.", B: "Dame el libro un segundo. Te escribo una dedicatoria.", C: "Préstamelo un segundo. Merece una dedicatoria para el viaje." },
            reply: { A: "Escribes: «Para Rodrigo, valiente». Rodrigo sonríe. Llega un taxi.", B: "Escribes: «Para Rodrigo, que vuela por su nieto». Rodrigo lee y sonríe. Llega un taxi.", C: "Escribes: «Para Rodrigo, que vuela por su nieto». Rodrigo lo lee dos veces y se le escapa una sonrisa. Llega un taxi." },
            mood: "love", end: "libro-despegue",
          },
          {
            id: "broma",
            say: { A: "Tranquilo. El libro es aburrido. Vas a dormir todo el vuelo.", B: "Tranquilo: el libro es tan aburrido que vas a dormir todo el vuelo.", C: "Tranquilo: es un libro tan soporífero que el vuelo será un parpadeo." },
            reply: { A: "Rodrigo se ríe. «¡Entonces es perfecto!» Se sienta a leer.", B: "Rodrigo se ríe de verdad. «¡Entonces es el libro perfecto!» Se sienta en la maleta y lee.", C: "Rodrigo se ríe a carcajadas. «El somnífero perfecto. Gracias.» Y se sienta a leer en la maleta." },
            mood: "laugh", end: "libro-silencio",
          },
        ],
      },
      "corazon-inicio": {
        who: "rodrigo", mood: "smitten",
        line: {
          A: "Rodrigo te ve y su cara cambia. Sonríe. Deja la maleta. «Hola… Qué noche tan rara. ¿Tú también esperas?»",
          B: "Rodrigo te ve y se le cae el nervio de la cara. Sonríe, suelta la maleta y se olvida del reloj. «Hola. Qué noche tan rara. ¿Tú también esperas taxi?»",
          C: "Rodrigo te ve y el reloj deja de importarle. Sonríe como no sonreía en cuarenta minutos. «Hola. Qué noche tan extraña y tan bonita de repente. ¿Esperas taxi?»",
        },
        options: [
          {
            id: "consolar",
            say: { A: "Sí. Pareces nervioso. ¿Quieres hablar?", B: "Sí. Y te veo nervioso. ¿Quieres contarme?", C: "Sí. Y tú pareces cargar algo más pesado que esa maleta. ¿Me lo cuentas?" },
            reply: { A: "Rodrigo se sienta en la maleta. «Tengo miedo de volar. Nunca lo digo.»", B: "Rodrigo se sienta en la maleta. «Me da pánico volar. No se lo digo a nadie, pero a ti sí.»", C: "Rodrigo se sienta en la maleta y suspira. «Me aterra volar. No lo confieso nunca. Contigo, sin embargo, sale solo.»" },
            mood: "love", next: "corazon-ternura",
          },
          {
            id: "coquetear",
            say: { A: "Con esa sonrisa no necesitas taxi.", B: "Con esa sonrisa, el taxi viene solo.", C: "Con esa sonrisa, los taxis deberían hacer fila por ti." },
            reply: { A: "Rodrigo se pone rojo. «¡Ay! Hace años nadie me dice eso.»", B: "Rodrigo se pone colorado. «Hacía años que nadie me decía algo así.»", C: "Rodrigo se ruboriza hasta el bigote. «Hacía décadas que nadie me decía nada parecido.»" },
            mood: "smitten", next: "corazon-ternura",
          },
          {
            id: "ayudar",
            say: { A: "Sí. Vamos juntos a la puerta norte. Allí hay taxis.", B: "Sí. ¿Vamos juntos a la puerta norte? Allí siempre hay taxis.", C: "Sí. Caminemos juntos a la puerta norte; allí los taxis sí aparecen." },
            reply: { A: "Rodrigo toma la maleta. «Contigo voy a cualquier puerta.»", B: "Rodrigo agarra la maleta, feliz. «Contigo, a la puerta norte o al fin del mundo.»", C: "Rodrigo levanta la maleta como si pesara nada. «A la puerta norte, al aeropuerto o adonde digas.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-ternura": {
        who: "rodrigo", mood: "love",
        line: {
          A: "Rodrigo te mira con cariño. «Mi hija va a tener un hijo en Lima. Tengo que volar. ¿Me das valor?»",
          B: "Rodrigo te mira con los ojos brillantes. «Mi hija va a dar a luz en Lima. Tengo que subirme a ese avión. ¿Me das un poco de valor?»",
          C: "Rodrigo te mira como quien encuentra refugio. «Mi hija da a luz esta semana en Lima. Necesito subirme a ese avión. ¿Me prestas algo de valor?»",
        },
        options: [
          {
            id: "beso",
            act: { A: "Le das un beso en la mejilla.", B: "Le das un beso en la mejilla.", C: "Le das un beso en la mejilla, sin aviso." },
            say: { A: "Para el valor. Vas a llegar.", B: "Esto es para el valor. Vas a llegar y vas a conocer a tu nieto.", C: "Valor prestado. Vas a llegar, y tu nieto va a tener un abuelo muy valiente." },
            reply: { A: "Rodrigo se toca la mejilla. «Con esto vuelo hasta la luna.»", B: "Rodrigo se toca la mejilla, sin palabras. «Con esto vuelo hasta la luna, si hace falta.»", C: "Rodrigo se lleva la mano a la mejilla. «Con esto no necesito avión. Pero lo tomaré igual.»" },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "abrazo",
            act: { A: "Lo abrazas.", B: "Lo abrazas fuerte.", C: "Lo abrazas con todas tus fuerzas." },
            say: { A: "Tienes mucho valor. Vas a ver a tu hija.", B: "Ya tienes valor. Lo veo. Vas a ver a tu hija.", C: "El valor ya lo tienes; solo estaba escondido. Vas a ver a tu hija." },
            reply: { A: "Rodrigo te abraza también. «Gracias. Gracias.»", B: "Rodrigo te abraza y respira hondo. «Gracias. Hacía falta.»", C: "Rodrigo te devuelve el abrazo y se le escapa una lágrima. «Gracias. Me hacía mucha falta.»" },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "foto",
            say: { A: "¿Tienes una foto de tu hija? Enséñamela.", B: "¿Tienes una foto de tu hija? Me encantaría verla.", C: "¿Me enseñas una foto de tu hija? Quiero ver por quién vuelas." },
            reply: { A: "Rodrigo saca el celular. «Mira. Y el niño viene pronto.» Llega un taxi.", B: "Rodrigo saca el celular, orgulloso. «Mira, es ella. Y aquí, la ecografía.» Justo llega un taxi.", C: "Rodrigo saca el celular con manos temblorosas de orgullo. «Ella. Y aquí, el pasajero nuevo.» Llega un taxi." },
            mood: "love", end: "corazon-beso",
          },
        ],
      },
    },
    ends: {
      "cuchillo-parada": { text: { A: "Rodrigo camina detrás de ti hasta la puerta norte. Sube a un taxi sin mirar atrás. Tú guardas el cuchillo.", B: "Rodrigo camina dos metros detrás de ti hasta la puerta norte. Sube al taxi y cierra la puerta rápido. El cuchillo se queda en tu bolsillo toda la noche.", C: "Rodrigo te sigue a una distancia prudente hasta la puerta norte. Sube al taxi sin despedirse. El cuchillo no vuelve a salir del bolsillo." }, change: "se-va", recap: "Asustaste a Rodrigo con el cuchillo, pero llegó a un taxi." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. Rodrigo explica el susto y pierde el vuelo.", B: "Llega la policía y te quita el cuchillo. Rodrigo cuenta el susto tres veces. El vuelo de las seis sale sin él.", C: "La policía llega, confisca el cuchillo y toma nota. Rodrigo explica el susto con detalle; el vuelo de las seis se va sin esperar a nadie." }, change: "policia", recap: "El cuchillo terminó con la policía y Rodrigo sin vuelo." },
      "pistola-taxi": { text: { A: "Llega un taxi. Rodrigo sube solo. Desde la ventana te mira con miedo todavía.", B: "Llega un taxi. Rodrigo sube solo y cierra la puerta. Desde la ventana te mira como a un recuerdo que prefiere olvidar.", C: "Llega un taxi y Rodrigo sube solo. Por la ventanilla te dedica una mirada que mezcla alivio y una pistola que no va a olvidar." }, change: "se-va", recap: "Rodrigo tomó un taxi después del susto de la pistola." },
      "pistola-patrulla": { text: { A: "El coche de policía frena. Te piden la pistola y te hacen preguntas. Rodrigo se va en el coche patrulla al aeropuerto.", B: "El coche patrulla frena en seco. Te quitan la pistola y te interrogan en la acera. Rodrigo, agradecido, se va con ellos al aeropuerto.", C: "El coche patrulla frena, te desarman y te interrogan en la acera. A Rodrigo lo llevan al aeropuerto con sirena, su mejor taxi de la noche." }, change: "policia", recap: "La pistola trajo a la policía y Rodrigo se fue con ellos." },
      "granada-taxi": { text: { A: "Rodrigo sube al taxi. «¡La próxima vez, sin granada!» Se va riéndose nervioso.", B: "Rodrigo sube al taxi y baja la ventana. «¡La próxima vez, sin granada, por favor!» Se va riéndose todavía nervioso.", C: "Rodrigo sube al taxi y asoma la cabeza. «La próxima vez, sin granada. Y sin estación.» Se va con una risa que aún tiembla." }, change: "se-va", recap: "Tu granada vació la estación y Rodrigo consiguió taxi." },
      "granada-helicoptero": { text: { A: "El helicóptero ilumina todo. La policía te rodea. Rodrigo explica con las manos arriba. Nadie viaja esta noche.", B: "El helicóptero ilumina la parada entera. La policía te rodea y Rodrigo, manos arriba, explica que es de plástico. Esta noche no vuela nadie.", C: "El helicóptero fija su foco sobre la parada. La policía te rodea y Rodrigo, manos arriba, jura que es de plástico. El vuelo de las seis despega sin él." }, change: "helicoptero", recap: "La granada trajo un helicóptero a la parada de taxis." },
      "gas-taxi": { text: { A: "Rodrigo sube al taxi. «¡Gracias por el consejo! ¡Y por no usar el gas!»", B: "Rodrigo sube al taxi y te saluda. «Gracias por el consejo. Y gracias por no usar ese gas conmigo.»", C: "Rodrigo sube al taxi y baja la ventanilla. «Gracias por el consejo. Y por no rociarme: mi hija lo agradecerá.»" }, change: "se-va", recap: "Hablaste con Rodrigo de seguridad y consiguió taxi." },
      "gas-guardia": { text: { A: "Rodrigo habla con el guardia y señala tu gas. Tú te vas a otra parada.", B: "Rodrigo le cuenta al guardia lo del gas pimienta. El guardia te mira y tú decides buscar otra parada.", C: "Rodrigo le describe al guardia tu gas pimienta con todo detalle. El guardia te observa y tú optas por otra parada, más tranquila." }, change: "se-va", recap: "Tu gas pimienta hizo desconfiar a Rodrigo." },
      "lapiz-numero": { text: { A: "El taxi llega. Rodrigo guarda tu papel. «Con esto no me pierdo nunca.»", B: "El taxi llega a la hora apuntada. Rodrigo guarda el papel con tus números. «Con esto no me pierdo ni en Lima.»", C: "El taxi llega a la hora exacta que anotaste. Rodrigo guarda el papel junto al pasaporte. «Con este papel llego a Lima y de vuelta.»" }, change: "sonrie", recap: "Le apuntaste a Rodrigo números y horarios con tu lápiz." },
      "lapiz-norte": { text: { A: "Siguen el mapa hasta la puerta norte. Hay taxis. Rodrigo sube con tu dibujo en la mano.", B: "Siguen tu mapa hasta la puerta norte, donde esperan tres taxis. Rodrigo sube con tu dibujo todavía en la mano.", C: "Tu plano los lleva a la puerta norte, donde tres taxis se aburren. Rodrigo sube con tu dibujo como talismán." }, change: "se-va", recap: "Tu mapa a lápiz llevó a Rodrigo hasta un taxi." },
      "libro-despegue": { text: { A: "Rodrigo sube al taxi con tu libro. Desde la ventana lo levanta. «¡Lo leo en el avión!»", B: "Rodrigo sube al taxi con tu libro bajo el brazo. Desde la ventana lo levanta. «¡Lo leo en el despegue!»", C: "Rodrigo sube al taxi con tu libro abrazado. Desde la ventanilla lo levanta como un salvavidas. «¡Capítulo uno en el despegue!»" }, change: "se-va", recap: "Tu libro acompañó a Rodrigo a su vuelo." },
      "libro-silencio": { text: { A: "Rodrigo lee en su maleta. Tú lees en el banco. Llega un taxi y nadie lo ve.", B: "Rodrigo lee sentado en la maleta y tú en el banco. Un taxi pasa y ninguno de los dos lo ve.", C: "Rodrigo lee en su maleta y tú en el banco, en paz. Un taxi pasa de largo y nadie lo lamenta." }, change: "se-sienta", recap: "Leíste con Rodrigo en la parada de taxis." },
      "corazon-beso": { text: { A: "Rodrigo sube al taxi con la mano en la mejilla. Te saluda hasta que el taxi desaparece.", B: "Rodrigo sube al taxi con la mano todavía en la mejilla. Te saluda por la ventana hasta que el taxi dobla la esquina.", C: "Rodrigo sube al taxi sin soltarse la mejilla. Te saluda por la ventanilla hasta que la esquina se lo traga." }, change: "beso", recap: "Le diste valor a Rodrigo con un beso." },
      "corazon-abrazo": { text: { A: "Caminan abrazados hasta la puerta norte. Rodrigo sube al taxi con una sonrisa enorme.", B: "Caminan abrazados hasta la puerta norte. Rodrigo sube al taxi con una sonrisa que no le cabe en la cara.", C: "Llegan abrazados a la puerta norte. Rodrigo sube al taxi sonriendo como quien ya ha aterrizado." }, change: "abraza", recap: "Rodrigo se fue al aeropuerto con un abrazo tuyo." },
      parada: { text: { A: "Vas con Rodrigo a la puerta norte. Hay un taxi. Rodrigo sube y te saluda.", B: "Acompañas a Rodrigo a la puerta norte. Hay tres taxis esperando. Rodrigo sube y te saluda por la ventana.", C: "En la puerta norte esperan tres taxis aburridos. Rodrigo sube al primero y te despide como si fueras de la familia." }, change: "se-va", recap: "Acompañaste a Rodrigo a otra parada de taxis." },
      autobus: { text: { A: "Rodrigo sube al autobús nocturno. Te dice adiós con la mano.", B: "Rodrigo sube al autobús nocturno con su maleta enorme. Desde la ventana, levanta el pulgar.", C: "Rodrigo sube al autobús nocturno, ocupa dos asientos con la maleta y te saluda con un gesto entre triunfal y resignado." }, change: "se-va", recap: "Convenciste a Rodrigo de tomar el autobús al aeropuerto." },
      llamada: { text: { A: "Llega un taxi. Rodrigo sube contento.", B: "A los cinco minutos llega el taxi. Rodrigo sube y te da las gracias tres veces.", C: "El taxi llega puntual, casi sospechosamente. Rodrigo sube y te agradece como si le hubieras salvado la vida." }, change: "sonrie", recap: "Conseguiste un taxi para Rodrigo." },
      valiente: { text: { A: "Rodrigo va a la otra parada y toma un taxi. Va a ver a su hija.", B: "Rodrigo encuentra un taxi en la puerta norte. Antes de subir, te enseña una foto de su hija.", C: "Rodrigo encuentra un taxi en la puerta norte. Antes de subir, te enseña una ecografía en el celular, orgulloso como nadie." }, change: "abraza", recap: "Ayudaste a Rodrigo a vencer su miedo a volar." },
      policia: { text: { A: "Llega la policía. Explicas todo. Rodrigo pierde más tiempo.", B: "Llega la policía. Mientras explicas el malentendido, Rodrigo mira el reloj, desesperado.", C: "Llega un coche patrulla. Tu explicación es larga; la paciencia de Rodrigo, cortísima." }, change: "policia", recap: "Un malentendido con Rodrigo terminó con la policía." },
      huye: { text: { A: "Rodrigo se va rápido con su maleta. Ya no está.", B: "Rodrigo desaparece por la puerta de la estación con su maleta.", C: "Rodrigo desaparece arrastrando la maleta. Quizá no consiga taxi, pero sí un buen tema de conversación." }, change: "corre", recap: "Asustaste a Rodrigo y se fue corriendo." },
    },
    speak: {
      A1: "¿Qué transporte usas cada día?",
      A2: "¿Qué hiciste la última vez que llegaste tarde a algo importante?",
      B1: "¿Cómo te sientes cuando viajas en avión, y por qué?",
      B2: "¿Qué harías si perdieras un vuelo muy importante?",
      C1: "¿Cómo distingues la prudencia del miedo cuando tienes que viajar?",
      C2: "¿Qué miedos tuyos se disfrazan a veces de problemas prácticos?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces cuando una persona te da miedo?", B: "¿Alguna vez asustaste a alguien sin querer, y cómo lo arreglaste?", C: "¿En qué momento una reacción de miedo ajena te hizo ver cómo te perciben los demás?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces si ves un arma en la calle?", B: "¿Obedecerías a alguien armado o intentarías escapar, y por qué?", C: "¿Hasta qué punto el miedo a un arma justifica obedecer cualquier orden?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué broma pesada te hicieron una vez?", B: "¿Cuál fue el momento más caótico que viviste en un lugar público?", C: "¿Qué situación absurda terminó, contra todo pronóstico, resolviendo un problema real?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Qué llevas para sentirte seguro por la noche?", B: "¿Qué consejo de seguridad le darías a alguien que viaja solo?", C: "¿Dónde está la frontera entre la prevención razonable y la paranoia?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Qué apuntas en un papel cada día?", B: "¿Cuándo un mapa dibujado a mano te ayudó más que el celular?", C: "¿Qué promesa firmarías hoy ante un desconocido, y cuál no?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Qué libro llevas cuando viajas?", B: "¿Qué libro le regalarías a alguien con miedo, y por qué?", C: "¿Qué lectura te sirvió alguna vez como escudo contra el mundo?" } },
      corazon: { start: "corazon-inicio", fx: "beso", speak: { A: "¿A quién le das valor cuando tiene miedo?", B: "¿Qué gesto de cariño de un desconocido recuerdas todavía?", C: "¿Qué confesión le harías a un extraño que jamás le harías a tu familia?" } },
    },
  },

  // ─────────────────────────────────────────────────────────────── ESCENA 2
  {
    id: "estacion-corre",
    kind: "escena",
    district: "estacion",
    title: "Alguien sale corriendo",
    verb: "REACCIONAR",
    goal: "Reaccionar ante una situación confusa, preguntar antes de juzgar, aclarar un malentendido y pedir disculpas.",
    cast: [
      {
        id: "matias", name: "Matías", role: "Chico que corre al tren",
        age: "young", body: "m", build: "athletic", height: 1.81,
        hair: "buzz", hairColor: "#1a1410", skin: "#8d5a3b",
        top: "hoodie", topColor: "#c23b3b", bottom: "jeans", bottomColor: "#39465c",
        extras: ["headphones"], pose: "run",
      },
      {
        id: "begona", name: "Begoña", role: "Mujer con una mochila ajena",
        age: "adult", body: "f", build: "average", height: 1.64,
        hair: "bob", hairColor: "#a33b20", skin: "#f0c9a8",
        top: "coat", topColor: "#2f6f73", bottom: "skirt", bottomColor: "#3a2e2a",
        extras: ["backpack", "bag", "earrings"], pose: "wave", props: ["bench"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "begona", mood: "worried",
        line: {
          A: "Un chico pasa corriendo a tu lado. Detrás, una mujer grita: «¡Eh! ¡Espera! ¡Espera!»",
          B: "Un chico con sudadera roja pasa corriendo y casi te tira. Detrás, una mujer grita con todas sus fuerzas: «¡Eh! ¡Espera! ¡Para!»",
          C: "Un chico te roza a toda velocidad y se pierde hacia los andenes. A tu espalda, una mujer grita como si le fuera la vida: «¡Eh! ¡Espera! ¡Para, por favor!»",
        },
        options: [
          {
            id: "seguir",
            act: { A: "Corres detrás del chico.", B: "Sales corriendo detrás del chico.", C: "Sin pensarlo dos veces, sales detrás del chico." },
            say: { A: "¡Eh, tú! ¡Para un momento!", B: "¡Eh, tú! ¡Espera un momento!", C: "¡Oye! ¡Frena un segundo!" },
            reply: { A: "El chico se para en la escalera. «¿Qué pasa? ¡Voy a perder el tren!»", B: "Lo alcanzas en la escalera del andén. El chico se gira, sin aire. «¿Qué pasa? ¡Mi tren sale ya!»", C: "Lo alcanzas en la escalera. El chico se gira, jadeando. «¿Qué? ¿Qué pasa? Tengo un tren saliendo, literalmente.»" },
            mood: "surprised", next: "parar",
          },
          {
            id: "preguntar",
            say: { A: "¿Qué pasa? ¿Te robó algo?", B: "¿Qué pasó? ¿Te robó algo ese chico?", C: "¿Estás bien? ¿Ese chico se llevó algo tuyo?" },
            reply: { A: "La mujer llega sin aire. «¿Robar? ¡No! Se olvidó la mochila.»", B: "La mujer se para, sin aire. «¿Robarme? ¡No! Al revés: se olvidó la mochila en el banco.»", C: "La mujer se apoya en tus hombros para respirar. «¿Robar? Qué va. Se dejó la mochila en el banco. Yo soy la que lleva lo ajeno.»" },
            mood: "worried", next: "mochila",
          },
          {
            id: "nada",
            say: { A: "Uf… No es mi problema.", B: "Mejor no me meto. No es asunto mío.", C: "Lo siento, pero a medianoche no me meto en carreras ajenas." },
            reply: { A: "La mujer se sienta en un banco. «Ay… No puedo más.»", B: "La mujer se rinde y se sienta en un banco, con una mochila en las rodillas. «Ya no lo alcanzo.»", C: "La mujer se deja caer en un banco con una mochila que, ahora lo ves, no es suya. «Pues nada. Yo tampoco corro más.»" },
            mood: "sad", end: "sentada",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y apuntas cómo es el chico.", B: "Sacas el lápiz y apuntas cómo es el chico, por si acaso.", C: "Apuntas con el lápiz la descripción del chico, como en una película policíaca." },
            say: { A: "Alto, sudadera roja… ¿Te robó?", B: "Alto, sudadera roja, auriculares. ¿Te robó algo?", C: "Varón, alto, sudadera roja. ¿Quieres que esto llegue a la policía?" },
            reply: { A: "La mujer mira el papel. «¡No es un ladrón! Se olvidó esto.»", B: "La mujer mira tu papel y se ríe. «¡No es un ladrón! Se olvidó la mochila. Mira.»", C: "La mujer lee tus notas, divertida. «Precioso informe. Pero el único sospechoso aquí es mi pulmón. Se le olvidó la mochila.»" },
            mood: "smile", next: "mochila",
          },
          libro: {
            act: { A: "Levantas el libro y lo mueves en el aire.", B: "Levantas el libro y lo agitas como una bandera.", C: "Agitas el libro en alto como una bandera de rendición." },
            say: { A: "¡Eh, chico! ¡Para!", B: "¡Eh, chico! ¡Para un momento, por favor!", C: "¡Eh, el de rojo! ¡Un segundo de tu tiempo!" },
            reply: { A: "El chico se para. Mira el libro. «¿Qué? ¿Qué pasa?»", B: "El chico se para, confundido por el libro. «¿Qué pasa? ¿Es una encuesta?»", C: "El chico frena, desconcertado. «¿Me paras con un libro? ¿Es un club de lectura de emergencia?»" },
            mood: "surprised", next: "parar",
          },
          gas: {
            act: { A: "Sacas el gas pimienta y te pones delante del chico.", B: "Sacas el gas pimienta y le cortas el paso al chico.", C: "Le cortas el paso al chico con el gas pimienta en la mano." },
            say: { A: "¡Alto! ¡Quieto!", B: "¡Quieto ahí! ¿Qué llevas?", C: "¡Ni un paso más! ¿Qué has hecho?" },
            reply: { A: "El chico levanta las manos. «¡No hice nada! ¡Mi tren!»", B: "El chico levanta las manos, aterrado. «¡No llevo nada! ¡Te lo juro! ¡Solo voy a mi tren!»", C: "El chico se queda helado con las manos arriba. «¡Nada! ¡No he hecho nada! ¡Salvo llegar tarde!»" },
            mood: "scared", next: "malentendido",
          },
          granada: {
            act: { A: "Levantas la granada.", B: "Sin pensar, levantas la granada.", C: "En un arranque poco meditado, levantas la granada." },
            say: { A: "¡Eh! ¡Para ahora mismo!", B: "¡Eh, tú! ¡Para ahora mismo!", C: "¡Alto ahí! ¡Esto va en serio!" },
            reply: { A: "El chico se para. La mujer grita. «¡No! ¡Es su mochila!»", B: "El chico se queda de piedra. La mujer llega y grita aún más fuerte: «¡No, no! ¡Solo quiero darle su mochila!»", C: "El chico se paraliza. La mujer frena en seco detrás. «¡Pero qué haces! ¡Que solo es una mochila olvidada!»" },
            mood: "scared", next: "malentendido",
          },
          pistola: {
            act: { A: "Se ve tu pistola cuando corres.", B: "Al correr detrás del chico, se te ve la pistola.", C: "Corres tras él y la pistola asoma a la vista de todo el andén." },
            say: { A: "¡Espera! ¡Para!", B: "¡Espera! ¡Para un momento!", C: "¡Para, por favor! ¡Solo quiero hablar!" },
            reply: { A: "El chico ve la pistola y se para. Tiene mucho miedo.", B: "El chico ve la pistola, se para y se pega a la pared. «¡No, no, por favor!»", C: "El chico ve la pistola y se pega a la pared. «Hablar, sí, claro. Hablemos todo lo que quieras.»" },
            mood: "scared", next: "malentendido",
          },
          cuchillo: {
            act: { A: "Tienes el cuchillo en la mano. Estabas pelando una naranja.", B: "Estabas pelando una naranja y, sin pensar, señalas al chico con el cuchillo.", C: "Con la naranja a medio pelar, señalas al chico con el cuchillo. Mal gesto." },
            say: { A: "¡Eh! ¿Adónde vas?", B: "¡Eh! ¿Adónde vas tan rápido?", C: "¡Oye! ¿Qué prisa es esa?" },
            reply: { A: "El chico ve el cuchillo y se para. «¡Tranquilo! ¡No hice nada!»", B: "El chico ve el cuchillo y frena de golpe. «¡Eh, eh! ¡Que no hice nada!»", C: "El chico mira el cuchillo, luego la naranja, luego a ti. «No sé qué está pasando, pero me rindo.»" },
            mood: "scared", next: "malentendido",
          },
          corazon: {
            act: HEART,
            say: { A: "Tranquila. Respira. ¿Qué necesitas?", B: "Tranquila, respira un momento. ¿Cómo te ayudo?", C: "Respira, que no se acaba el mundo. Dime qué necesitas." },
            reply: { A: "La mujer sonríe. «Gracias. Me llamo Begoña. Una vez olvidé mi mochila en un tren. Fue horrible.»", B: "La mujer sonríe, aliviada. «Soy Begoña. Una vez olvidé en un tren una mochila con mi tesis dentro. Por eso corro.»", C: "La mujer se ríe entre jadeos. «Begoña. Una vez olvidé en un tren una mochila con dos años de tesis. Desde entonces, persigo mochilas ajenas.»" },
            mood: "love", next: "mochila",
          },
        },
      },
      mochila: {
        who: "begona", mood: "worried",
        line: {
          A: "Begoña te enseña una mochila. «Es de ese chico. Tiene el pasaporte dentro.»",
          B: "Begoña levanta una mochila azul. «Es del chico. Vi que dentro lleva el pasaporte. Sin él, no viaja.»",
          C: "Begoña sostiene la mochila azul como quien sostiene un paquete ajeno y muy frágil. «Lleva el pasaporte dentro. Sin esto, ese chico va de viaje solo hasta el control.»",
        },
        options: [
          {
            id: "correr",
            say: { A: "Dámela. Yo corro más rápido.", B: "Dámela, yo corro más rápido que tú. ¿Por qué andén se fue?", C: "Pásamela. Corro mejor de lo que aparento. ¿Qué andén?" },
            reply: { A: "Begoña te da la mochila. «¡Vía tres! ¡Corre!»", B: "Begoña te la da sin dudar. «¡Vía tres! ¡Corre, corre!»", C: "Begoña te la lanza. «¡Vía tres! ¡Y no la pierdas tú, que no tengo más pulmones!»" },
            mood: "smile", end: "tren",
          },
          {
            id: "gritar",
            say: { A: "¡Chico! ¡Tu mochila!", B: "¡Chico de rojo! ¡Te olvidaste la mochila!", C: "¡Eh, el de la sudadera roja! ¡Tu mochila te echa de menos!" },
            reply: { A: "El eco es enorme. El chico vuelve corriendo.", B: "Tu voz rebota en todo el andén. El chico se gira, se toca la espalda y vuelve corriendo.", C: "El eco de la estación multiplica tu grito. El chico se palpa la espalda, palidece y vuelve a toda velocidad." },
            mood: "surprised", next: "llega",
          },
          {
            id: "info",
            say: { A: "Mejor la dejamos en información. Él va a volver.", B: "Es mejor que la dejemos en información. Seguro que vuelve a buscarla.", C: "Yo la dejaría en información. Correr detrás de él puede acabar en dos personas sin tren." },
            reply: { A: "Begoña duda. «Bueno… Sí, es mejor.»", B: "Begoña lo piensa. «Tienes razón. Si vuelve, la primera ventanilla es esa.»", C: "Begoña asiente, algo decepcionada. «Sensato. Menos épico, pero sensato.»" },
            mood: "neutral", end: "objetos",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Eres muy buena persona. Pocas personas corren así por otros.", B: "Qué bonito lo que haces. Casi nadie corre así por un desconocido.", C: "Que conste que casi nadie haría esta maratón por alguien que no conoce." },
            reply: { A: "Begoña se ríe. «¡Ven conmigo! ¡Corremos los dos!»", B: "Begoña se pone roja y se ríe. «¡Pues ayúdame! ¡Corremos juntos!»", C: "Begoña se ríe, colorada. «Halagos después. ¡Ahora corre conmigo!»" },
            mood: "love", end: "tren",
          },
        },
      },
      parar: {
        who: "matias", mood: "surprised",
        line: {
          A: "El chico respira rápido. «¿Qué quieres? Mi tren sale en dos minutos.»",
          B: "El chico mira el reloj y luego a ti. «¿Qué pasa? Mi tren sale en dos minutos.»",
          C: "El chico rebota sobre los pies, mirando alternativamente a ti y al andén. «Dos minutos. Tengo dos minutos para lo que sea.»",
        },
        options: [
          {
            id: "acusar",
            say: { A: "Esa mujer te grita. ¿Qué tomaste?", B: "Esa señora te está gritando. ¿Le quitaste algo?", C: "Esa señora te persigue a gritos. Algo habrá pasado, ¿no?" },
            reply: { A: "El chico se enfada. «¿Yo? ¡Nada!» Entonces llega la mujer con una mochila.", B: "«¿Yo? ¡Nada!», protesta el chico. En ese momento llega la mujer con una mochila azul.", C: "«¿Perdona?», dice el chico, ofendido. Justo entonces aparece la mujer, agitando una mochila azul." },
            mood: "angry", next: "llega",
          },
          {
            id: "conocer",
            say: { A: "Perdona. ¿Conoces a esa mujer? Te está llamando.", B: "Perdona, ¿conoces a esa mujer? Te está llamando desde hace rato.", C: "Disculpa la interrupción, pero hay una señora que lleva un rato llamándote." },
            reply: { A: "El chico mira atrás. La mujer llega con una mochila. «¡Tu mochila!»", B: "El chico se gira. La mujer llega, sin aire, con una mochila. «¡Tu mochila! ¡Te la olvidaste!»", C: "El chico se gira justo cuando la mujer llega, sin aire, con su mochila. «¡Tu… mochila…!»" },
            mood: "surprised", next: "llega",
          },
          {
            id: "dejar",
            say: { A: "Perdón. Nada, nada. Corre.", B: "Perdona, me equivoqué. Sigue, sigue.", C: "Olvídalo, me confundí. Corre, que lo pierdes." },
            reply: { A: "El chico corre al tren. No tiene su mochila.", B: "El chico sale disparado hacia el tren. No se da cuenta de que no lleva mochila.", C: "El chico desaparece escaleras arriba, ligero como nunca. Demasiado ligero: no lleva mochila." },
            mood: "neutral", end: "sinmochila",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Tranquilo. Una mujer tiene algo tuyo. ¿Esperas un segundo?", B: "Tranquilo, no pasa nada malo. Creo que alguien tiene algo tuyo.", C: "Respira, que no es nada grave. Creo que alguien intenta devolverte algo." },
            reply: { A: "El chico sonríe. «¿Algo mío? Me llamo Matías. Espero.»", B: "El chico se relaja. «Me llamo Matías. ¿Algo mío? Uy… ¡mi mochila!»", C: "El chico se toca la espalda y se ríe. «Soy Matías y soy un desastre. ¡Mi mochila!»" },
            mood: "love", next: "llega",
          },
        },
      },
      malentendido: {
        who: "matias", mood: "scared",
        line: {
          A: "El chico tiene las manos arriba. La mujer llega con una mochila. «¡Es su mochila! ¡Se la olvidó!»",
          B: "El chico sigue con las manos arriba. La mujer llega corriendo con una mochila. «¡Pero qué haces! ¡Solo es su mochila!»",
          C: "El chico tiene las manos en alto. La mujer llega con una mochila azul y la boca abierta. «¿En serio? ¡Que solo le devuelvo la mochila!»",
        },
        options: [
          {
            id: "disculpa",
            say: { A: "Perdón, perdón. Lo guardo. Pensé que era un robo.", B: "Perdón, de verdad. Ya lo guardo. Pensé que te había robado.", C: "Lo siento muchísimo. Lo guardo. Interpreté la escena exactamente al revés." },
            reply: { A: "El chico baja las manos. «Bueno… Qué susto.»", B: "El chico baja las manos despacio. «Bueno… Casi me da algo.»", C: "El chico baja las manos, todavía temblando. «Al revés, sí. Totalmente al revés.»" },
            mood: "worried", next: "llega",
          },
          {
            id: "excusa",
            say: { A: "Es que aquí roban mucho.", B: "Es que en esta estación roban mucho. Uno tiene que tener cuidado.", C: "Entiendan que en esta estación lo raro es correr por buenos motivos." },
            reply: { A: "La mujer se enfada. Un guardia lo ve y llama a la policía.", B: "La mujer se enfada. «¿Y por eso asustas a la gente?» Un guardia lo ve todo y llama a la policía.", C: "«Ah, pues entonces todo bien», dice la mujer, furiosa. Un guardia que lo ha visto todo ya está llamando a la policía." },
            mood: "angry", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Uy. Perdón. Me voy.", B: "Perdón, perdón. Me voy.", C: "Bueno… creo que sobro. Perdón." },
            reply: { A: "El chico toma la mochila y corre. No dice nada.", B: "El chico le quita la mochila a la mujer y sale corriendo sin mirar atrás.", C: "El chico agarra la mochila y huye. Más que un tren, parece que escapa de ti." },
            mood: "scared", end: "huye",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Perdón. Me asusté por ella, no contra ti.", B: "Perdóname. Quería ayudarla, no hacerte daño.", C: "Perdón. Mi intención era buena; la ejecución, desastrosa." },
            reply: { A: "El chico se ríe, nervioso. «Bueno… Me llamo Matías. Qué noche.»", B: "El chico se ríe, todavía nervioso. «Me llamo Matías. Y esta historia la voy a contar mil veces.»", C: "El chico se ríe a carcajadas. «Matías. Encantado. Desastrosa es poco, pero te perdono.»" },
            mood: "love", next: "llega",
          },
        },
      },
      llega: {
        who: "matias", mood: "neutral",
        line: {
          A: "Matías se pone la mochila. Te mira. «¿Tú pensaste que yo era un ladrón?»",
          B: "Matías se pone la mochila, mira el reloj y luego a ti. «Tengo un minuto. ¿De verdad pensaste que era un ladrón?»",
          C: "Matías se cuelga la mochila y te observa con media sonrisa. «Tengo un minuto, así que dime la verdad: ¿parezco un ladrón?»",
        },
        options: [
          {
            id: "sincero",
            say: { A: "Sí, perdón. Te vi correr y pensé lo peor.", B: "Sí, perdóname. Te vi correr y pensé lo peor sin preguntar.", C: "Para qué mentirte: sí. Te juzgué en tres segundos, y no me enorgullece." },
            reply: { A: "Matías sonríe. «Normal. Yo corro raro.»", B: "Matías se ríe. «Tranquilo. Con esta sudadera y corriendo así, yo también lo pensaría.»", C: "Matías se encoge de hombros. «Tres segundos. Mi abuela tarda menos. No pasa nada.»" },
            mood: "smile", end: "amigos",
          },
          {
            id: "ayudar",
            say: { A: "¡Corre! ¡Tu tren!", B: "¡No hay tiempo! ¡Corre, que te ayudo con la puerta!", C: "Hablamos otro día. ¡Corre, que yo te sujeto la puerta!" },
            reply: { A: "Matías corre. «¡Gracias!»", B: "Matías sale corriendo. «¡Gracias a los dos!»", C: "Matías sale disparado. «¡Les debo una a los dos!»" },
            mood: "smile", end: "tren",
          },
          {
            id: "humor",
            say: { A: "No. Pensé que eras un atleta.", B: "¿Ladrón? No. Pensé que entrenabas para una maratón.", C: "¿Ladrón? Qué va. Pensé que eras un atleta olímpico con muy mala organización." },
            reply: { A: "Matías se ríe mucho. Begoña también.", B: "Matías y Begoña se ríen a carcajadas. «Con esta mala organización, ninguna medalla.»", C: "Matías se ríe y Begoña se tapa la cara. «Muy mala organización, sí. Medalla de oro en olvidar cosas.»" },
            mood: "smile", end: "amigos",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Me alegro mucho. ¿Qué hay en la mochila?", B: "Me alegro de verdad. ¿Qué llevas en esa mochila tan importante?", C: "Me alegro de que acabe bien. ¿Qué hay en la mochila que valga esta carrera?" },
            reply: { A: "Matías sonríe. «El pasaporte y un regalo para mi madre. ¡Gracias!»", B: "Matías sonríe. «El pasaporte y un regalo para mi madre. No la veo desde hace un año.»", C: "Matías abre un poco la mochila: un pasaporte y una caja con un lazo. «Un año sin ver a mi madre. Sin esto, llego con las manos vacías.»" },
            mood: "love", end: "tren",
          },
        },
      },
      // ── variantes
      "cuchillo-inicio": {
        who: "matias", mood: "terror",
        line: {
          A: "El chico ve tu cuchillo y frena en seco. Saca una navaja del bolsillo. «¡No te acerques! ¡Tengo una también!» La mujer grita detrás.",
          B: "El chico ve el cuchillo en tu mano y frena de golpe. Mete la mano en el bolsillo y saca una navaja. «¡Ni un paso! ¡Yo también tengo!» Detrás, la mujer grita: «¡Paren!»",
          C: "El chico ve tu cuchillo, frena y, en el mismo movimiento, saca una navaja. «¡Quieto! ¡Yo también llevo!» Dos hojas bajo la luz del andén y una mujer gritando a lo lejos.",
        },
        options: [
          {
            id: "bajar",
            act: { A: "Bajas el cuchillo primero.", B: "Bajas el cuchillo tú primero, despacio.", C: "Bajas el cuchillo primero, con las palmas abiertas." },
            say: { A: "Tranquilo. Yo lo bajo. No es contra ti.", B: "Tranquilo, yo bajo el mío primero. No es contra ti.", C: "Calma. Bajo el mío. Esto no va contra ti; estaba pelando fruta, créeme." },
            reply: { A: "El chico baja la navaja. «¡Estás loco! Casi nos cortamos.»", B: "El chico baja la navaja, temblando. «¿Estás loco? Casi nos cortamos por nada.»", C: "El chico baja la navaja sin guardarla. «¿Estás loco? Casi nos abrimos en canal por una fruta.»" },
            mood: "scared", next: "cuchillo-tregua",
          },
          {
            id: "preguntar",
            say: { A: "¿Por qué corres? ¿Qué robaste?", B: "¿Por qué corres con una navaja? ¿Qué robaste?", C: "¿Qué hace un chico con navaja corriendo por un andén? ¿Qué robaste?" },
            reply: { A: "El chico grita: «¡Nada! ¡Corro a mi tren!» La mujer llega con una mochila.", B: "«¡Nada! ¡Corro a mi tren!», grita el chico. La mujer llega sin aire, con una mochila azul.", C: "«¡Nada! ¡Que corro al tren!», grita el chico. La mujer llega entre jadeos, con una mochila azul en alto." },
            mood: "angry", next: "cuchillo-tregua",
          },
          {
            id: "atacar",
            act: { A: "Das un paso hacia él con el cuchillo.", B: "Avanzas con el cuchillo en alto.", C: "Avanzas un paso, hoja en alto." },
            say: { A: "¡Suelta eso!", B: "¡Suelta esa navaja ahora!", C: "¡Suelta esa navaja o esto acaba mal!" },
            reply: { A: "Un guardia llega corriendo. «¡Al suelo! ¡Los dos!»", B: "Un guardia de la estación llega corriendo con la radio en la mano. «¡Al suelo! ¡Los dos! ¡Ya!»", C: "Un guardia aparece a la carrera, radio en mano. «¡Al suelo los dos, ahora mismo!» El andén entero mira." },
            mood: "terror", end: "cuchillo-guardia",
          },
        ],
      },
      "cuchillo-tregua": {
        who: "begona", mood: "furious",
        line: {
          A: "La mujer llega y se pone en medio. «¿Dos cuchillos? ¿Están locos? ¡Yo solo traigo su mochila!»",
          B: "La mujer llega y se planta entre los dos con la mochila. «¿Dos cuchillos? ¿Están locos los dos? ¡Yo solo quería devolver esta mochila!»",
          C: "La mujer se mete entre las dos navajas con la mochila como escudo. «¿Dos cuchillos? ¿Están mal de la cabeza? ¡Vengo a devolver una mochila, no a un duelo!»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas el cuchillo.", B: "Guardas el cuchillo del todo.", C: "Guardas el cuchillo y das un paso atrás." },
            say: { A: "Perdón. Guardado. Chico, guarda la tuya también.", B: "Perdón. Guardado. Chico, guarda la tuya y toma tu mochila.", C: "Guardado. Chico, guarda la tuya, toma tu mochila y olvidemos este duelo ridículo." },
            reply: { A: "El chico guarda la navaja y toma la mochila. «Gracias… Qué noche.»", B: "El chico guarda la navaja y agarra la mochila. «Gracias. Qué noche más rara.»", C: "El chico guarda la navaja y abraza la mochila. «Gracias. Esto lo cuento y nadie me cree.»" },
            mood: "worried", end: "cuchillo-tren",
          },
          {
            id: "acusar",
            say: { A: "¡Él sacó la navaja primero!", B: "¡Él sacó la navaja primero! Yo solo lo paré.", C: "¡Él desenfundó primero! Yo solo intentaba detenerlo." },
            reply: { A: "La mujer te mira. «¡Tú tienes un cuchillo en la mano!» Un guardia viene.", B: "La mujer te señala. «¡Tú tienes un cuchillo en la mano ahora mismo!» Un guardia se acerca con la radio.", C: "La mujer te señala sin piedad. «Y tú sigues con un cuchillo en la mano. Explícaselo a él.» Llega un guardia." },
            mood: "angry", end: "cuchillo-guardia",
          },
          {
            id: "ambulancia",
            say: { A: "¿Alguien está herido? ¿Llamo a una ambulancia?", B: "¿Alguien se cortó? ¿Llamo a una ambulancia?", C: "¿Hay sangre? ¿Alguien necesita una ambulancia antes de seguir discutiendo?" },
            reply: { A: "El chico mira su mano. «No. Solo el susto.» Toma la mochila.", B: "El chico se mira las manos. «No, nada. Solo el susto.» Agarra la mochila y respira.", C: "El chico se revisa las manos. «Ni un rasguño. Solo el corazón a mil.» Recupera la mochila." },
            mood: "worried", end: "cuchillo-tren",
          },
        ],
      },
      "pistola-inicio": {
        who: "matias", mood: "terror",
        line: {
          A: "El chico ve tu pistola y se para. Levanta las manos. «¡No dispares! ¡No tengo nada!» La gente del andén se tira al suelo.",
          B: "El chico ve la pistola y se queda clavado con las manos arriba. «¡No dispares! ¡No llevo nada!» Medio andén se tira al suelo.",
          C: "El chico ve la pistola y la carrera termina: manos arriba, cara blanca. «¡No dispares! ¡No llevo nada!» El andén entero se agacha.",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la pistola rápido.", B: "Guardas la pistola enseguida.", C: "Guardas la pistola de inmediato." },
            say: { A: "¡Perdón! No es para ti. Baja las manos.", B: "¡Perdón! No es para ti. Baja las manos, por favor.", C: "¡Perdón! No iba contigo. Baja las manos, que todos nos miran." },
            reply: { A: "El chico no baja las manos. La mujer llega. «¿Una pistola? ¡Solo traigo su mochila!»", B: "El chico no se atreve a bajar las manos. La mujer llega con la mochila. «¿Una pistola? ¡Yo solo traigo su mochila!»", C: "El chico mantiene las manos arriba. La mujer llega, mochila en alto. «¿Una pistola? ¡Que solo traigo su mochila!»" },
            mood: "scared", next: "pistola-manos",
          },
          {
            id: "ordenar",
            say: { A: "Quieto. ¿Qué le robaste a esa mujer?", B: "Quieto ahí. ¿Qué le robaste a esa mujer?", C: "No te muevas. ¿Qué le quitaste a esa mujer que grita?" },
            reply: { A: "El chico llora. «¡Nada! ¡Nada!» La mujer llega con una mochila.", B: "El chico casi llora. «¡Nada, te lo juro!» La mujer llega corriendo con una mochila. «¡Es suya!»", C: "El chico tiembla. «¡Nada! ¡Nada!» La mujer llega con una mochila azul. «¡Es suya, baja eso!»" },
            mood: "terror", next: "pistola-manos",
          },
          {
            id: "disparar",
            act: { A: "Apuntas al techo.", B: "Apuntas al techo del andén.", C: "Levantas la pistola hacia el techo." },
            say: { A: "¡Nadie se mueva!", B: "¡Que nadie se mueva!", C: "¡Que nadie se mueva de donde está!" },
            reply: { A: "Dos policías llegan corriendo. «¡Suelta el arma!»", B: "Dos policías entran corriendo al andén. «¡Suelta el arma! ¡Al suelo!»", C: "Dos policías irrumpen en el andén con las armas en alto. «¡Suelta el arma! ¡Al suelo, ya!»" },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },
      "pistola-manos": {
        who: "begona", mood: "angry",
        line: {
          A: "La mujer te mira con rabia. «Guarda eso. Este chico olvidó su mochila. ¿Por qué llevas un arma?»",
          B: "La mujer te mira con rabia y le da la mochila al chico. «Guarda eso ya. Este chico solo olvidó su mochila. ¿Por qué llevas un arma?»",
          C: "La mujer le entrega la mochila al chico sin dejar de mirarte. «Guarda eso. El único delito aquí fue olvidar una mochila. ¿Por qué llevas un arma?»",
        },
        options: [
          {
            id: "disculpa",
            say: { A: "Perdón. Me equivoqué. Chico, corre a tu tren.", B: "Perdón, me equivoqué por completo. Chico, corre a tu tren.", C: "Me equivoqué de arriba abajo. Lo siento. Chico, corre, que tu tren no espera." },
            reply: { A: "El chico baja las manos y corre. La mujer te mira seria.", B: "El chico baja las manos y sale corriendo hacia el andén. La mujer te sigue mirando, muy seria.", C: "El chico baja las manos y huye hacia el tren. La mujer no te quita los ojos de encima." },
            mood: "sad", end: "pistola-huye",
          },
          {
            id: "seguridad",
            say: { A: "Es para mi seguridad. Aquí roban mucho.", B: "La llevo por seguridad. En esta estación roban mucho.", C: "La llevo por seguridad. Esta estación no es precisamente un parque." },
            reply: { A: "La mujer llama a la policía. «Aquí hay una persona armada.»", B: "La mujer saca el celular y marca. «¿Policía? Hay una persona armada en el andén tres.»", C: "La mujer marca sin dudar. «¿Policía? Una persona armada, andén tres. Sí, espero.»" },
            mood: "angry", end: "pistola-policia",
          },
          {
            id: "irse",
            say: { A: "Me voy. Perdón a los dos.", B: "Mejor me voy. Perdón a los dos.", C: "Me retiro. Les pido perdón a los dos." },
            reply: { A: "El chico toma la mochila y corre. La mujer no dice nada.", B: "El chico agarra la mochila y corre al tren. La mujer no te contesta.", C: "El chico recoge la mochila y desaparece hacia el tren. La mujer te da la espalda." },
            mood: "scared", end: "pistola-huye",
          },
        ],
      },
      "granada-inicio": {
        who: "begona", mood: "terror",
        line: {
          A: "La mujer ve tu granada y grita más fuerte: «¡Una bomba! ¡Una bomba!» El chico se para. Todo el andén corre.",
          B: "La mujer ve la granada en tu mano y cambia de grito: «¡Una bomba! ¡Hay una bomba!» El chico frena y todo el andén sale corriendo.",
          C: "La mujer ve la granada y su grito cambia de tema: «¡Una bomba!» El chico frena en seco y el andén entero se convierte en estampida.",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Tranquilos!", B: "¡Es de juguete! ¡Tranquilos todos!", C: "¡Es de juguete! ¡Que nadie corra, es de plástico!" },
            reply: { A: "Nadie te oye. La mujer y el chico se esconden detrás de un banco.", B: "Nadie te escucha. La mujer y el chico terminan juntos detrás del mismo banco.", C: "Nadie te oye con la estampida. La mujer y el chico acaban abrazados detrás del mismo banco." },
            mood: "scared", next: "granada-banco",
          },
          {
            id: "guardar",
            act: { A: "Guardas la granada.", B: "Guardas la granada rápido.", C: "Guardas la granada, demasiado tarde." },
            say: { A: "¡Ya está! ¡Guardada! ¡No pasa nada!", B: "¡Ya está guardada! ¡No pasa nada!", C: "¡Guardada! ¡Nada que ver aquí!" },
            reply: { A: "El chico y la mujer se esconden detrás de un banco. «¡Guardada no es segura!»", B: "El chico y la mujer se refugian detrás de un banco. «¡Que esté guardada no la hace segura!»", C: "Chico y mujer se parapetan detrás de un banco. «¡Guardada sigue siendo una bomba!»" },
            mood: "scared", next: "granada-banco",
          },
          {
            id: "correr",
            act: { A: "Corres tú también.", B: "Corres con todos los demás.", C: "Te unes a la estampida, granada en mano." },
            say: { A: "¡Fuera! ¡Todos fuera!", B: "¡Todos fuera de la estación!", C: "¡Evacuen! ¡Todo el mundo fuera!" },
            reply: { A: "Suena la alarma. Un helicóptero llega. La policía cierra la estación.", B: "Suena la alarma de evacuación. Llega un helicóptero y la policía cierra la estación.", C: "Salta la alarma, aparece un helicóptero y la policía precinta la estación en minutos." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-banco": {
        who: "matias", mood: "scared",
        line: {
          A: "Detrás del banco, el chico y la mujer te miran. El chico tiene la mochila. «¡Mi mochila! Ella me la dio. Y tú… ¿con una granada?»",
          B: "Detrás del banco, el chico abraza su mochila. «Ella me devolvió la mochila mientras corríamos. Y tú… ¿por qué llevas una granada al andén?»",
          C: "Detrás del banco, el chico aprieta su mochila. «Ella me la devolvió en plena huida. Y tú, ¿qué hace una granada en tu plan de noche?»",
        },
        options: [
          {
            id: "broma",
            say: { A: "Es una broma de un amigo. Lo siento mucho.", B: "Es una broma pesada de un amigo. Lo siento muchísimo.", C: "Es la broma pesada de un amigo con sentido del humor peligroso. Lo siento de verdad." },
            reply: { A: "Los dos se ríen nerviosos. «¡Casi me muero!» Llega el tren.", B: "Los dos se ríen, nerviosos. «¡Casi me muero del susto!» El tren entra en el andén.", C: "Los dos sueltan una risa temblorosa. «Casi me muero y ni siquiera estoy en el tren.» El tren asoma." },
            mood: "laugh", end: "granada-tren",
          },
          {
            id: "acompanar",
            say: { A: "Chico, tu tren llega. Corre. Yo me quedo lejos.", B: "Chico, tu tren está llegando. Corre. Yo me quedo bien lejos.", C: "Chico, tu tren asoma. Corre. Yo me quedo a distancia, con la granada muy quieta." },
            reply: { A: "El chico corre con la mochila. La mujer se queda detrás del banco.", B: "El chico corre al tren con la mochila. La mujer no sale de detrás del banco.", C: "El chico sale disparado con la mochila. La mujer se queda parapetada, por si acaso." },
            mood: "worried", end: "granada-tren",
          },
          {
            id: "ensenar",
            act: { A: "Sacas la granada otra vez.", B: "Sacas la granada para enseñársela.", C: "Sacas la granada para demostrar que es falsa." },
            say: { A: "Miren. Es de plástico. Tóquenla.", B: "Miren, es de plástico. Pueden tocarla.", C: "Miren: plástico. Tóquenla, no pasa nada." },
            reply: { A: "Un foco de helicóptero los ilumina. La policía grita: «¡Suelta eso!»", B: "El foco de un helicóptero cae sobre ustedes. La policía grita desde la escalera: «¡Suelta eso!»", C: "Un helicóptero los baña de luz y la policía ruge desde la escalera: «¡Suelta eso ahora!»" },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "gas-inicio": {
        who: "matias", mood: "scared",
        line: {
          A: "El chico ve tu gas pimienta y se para. Cierra los ojos. «¡No! ¡No me rocíes! ¡Voy a mi tren!»",
          B: "El chico ve el gas pimienta apuntándole y frena, con los ojos apretados. «¡No! ¡No me rocíes, por favor! ¡Solo voy a mi tren!»",
          C: "El chico ve el gas pimienta y frena con los ojos cerrados y la cara girada. «¡No me rocíes! ¡Solo corro a mi tren, te lo juro!»",
        },
        options: [
          {
            id: "bajar",
            act: { A: "Bajas el gas.", B: "Bajas el gas pimienta.", C: "Bajas el gas pimienta, pero no lo guardas." },
            say: { A: "Tranquilo. ¿Por qué te grita esa mujer?", B: "Tranquilo, no lo uso. ¿Por qué te grita esa mujer?", C: "Tranquilo, no pienso usarlo. ¿Por qué esa mujer te persigue a gritos?" },
            reply: { A: "El chico abre un ojo. La mujer llega con una mochila. «¡Es suya! ¡Se la olvidó!»", B: "El chico abre un ojo. La mujer llega sin aire, con una mochila azul. «¡Es suya! ¡La olvidó en el banco!»", C: "El chico abre un ojo con cuidado. La mujer llega jadeando con una mochila azul. «¡Es suya! ¡Se la dejó en el banco!»" },
            mood: "worried", next: "gas-mochila",
          },
          {
            id: "apuntar",
            say: { A: "Quieto. ¿Qué llevas en los bolsillos?", B: "Quieto. ¿Qué llevas en los bolsillos? Vacíalos.", C: "No te muevas. Vacía los bolsillos, despacio." },
            reply: { A: "El chico saca un boleto y auriculares. La mujer llega. «¡Pero qué haces! ¡Es su mochila!»", B: "El chico saca un boleto y unos auriculares. La mujer llega con una mochila. «¿Pero qué haces? ¡Solo traigo su mochila!»", C: "El chico saca un boleto arrugado y unos auriculares. La mujer llega con una mochila. «¿Qué haces? ¡Vengo a devolverle esto!»" },
            mood: "scared", next: "gas-mochila",
          },
          {
            id: "rociar",
            act: { A: "Aprietas el gas.", B: "Aprietas el gas pimienta.", C: "Disparas el gas pimienta." },
            say: { A: "¡Te dije quieto!", B: "¡Te dije que te quedaras quieto!", C: "¡Te lo advertí!" },
            reply: { A: "El chico grita y cae al suelo. Le arden los ojos. La mujer llama a una ambulancia.", B: "El chico grita y cae de rodillas con las manos en la cara. La mujer llega y llama a una ambulancia.", C: "El chico cae de rodillas, gritando, con los ojos en llamas. La mujer llega, horrorizada, y pide una ambulancia." },
            mood: "pain", end: "gas-ambulancia",
          },
        ],
      },
      "gas-mochila": {
        who: "begona", mood: "angry",
        line: {
          A: "La mujer le da la mochila al chico. «¿Gas pimienta? ¿Por una carrera?»",
          B: "La mujer le entrega la mochila al chico y se vuelve hacia ti. «¿Gas pimienta? ¿Por ver a alguien correr?»",
          C: "La mujer le devuelve la mochila al chico y te mira con dureza. «¿Gas pimienta por ver correr a un chico? ¿En qué ciudad vives?»",
        },
        options: [
          {
            id: "razonable",
            say: { A: "Aquí roban mucho. Fue precaución.", B: "En esta estación roban mucho. Fue una precaución.", C: "En esta estación roban cada noche. Fue precaución, aunque mal dirigida." },
            reply: { A: "El chico asiente. «Bueno… es verdad. A mí me robaron aquí.» Y corre al tren.", B: "El chico asiente, sorprendido. «Es verdad. A mí me robaron aquí en marzo.» Y corre al tren.", C: "El chico asiente, contra su voluntad. «Tienes razón. Aquí me robaron en marzo.» Y sale corriendo al tren." },
            mood: "neutral", end: "gas-tren",
          },
          {
            id: "disculpa",
            say: { A: "Perdón. Lo guardo. Me asusté por ella.", B: "Perdón, lo guardo. Me asusté por los gritos de ella.", C: "Perdón, lo guardo. Fueron sus gritos los que me pusieron en alerta." },
            reply: { A: "La mujer suspira. «Mis gritos. Sí. Perdón yo también.» El chico corre al tren.", B: "La mujer suspira. «Mis gritos. Es verdad. Perdón yo también.» El chico corre hacia el tren.", C: "La mujer suspira. «Mis gritos, sí. Mitad de culpa para mí.» El chico aprovecha y corre al tren." },
            mood: "worried", end: "gas-tren",
          },
          {
            id: "mantener",
            act: { A: "No guardas el gas.", B: "Sigues con el gas en la mano.", C: "Mantienes el gas pimienta en la mano, por si acaso." },
            say: { A: "No lo guardo. No confío en nadie aquí.", B: "No lo guardo. En esta estación no confío en nadie.", C: "No lo guardo. Aquí, de noche, no me fío ni de las mochilas." },
            reply: { A: "El chico se pone nervioso y tropieza en la escalera. Se hace daño. La mujer llama a una ambulancia.", B: "El chico se pone nervioso, corre y tropieza en la escalera. Se abre la ceja. La mujer llama a una ambulancia.", C: "El chico, nervioso, corre y cae en la escalera. Sangre en la ceja. La mujer llama a una ambulancia mientras te fulmina con la mirada." },
            mood: "scared", end: "gas-ambulancia",
          },
        ],
      },
      "lapiz-inicio": {
        who: "begona", mood: "worried",
        line: {
          A: "La mujer ve tu lápiz. «¿Tienes lápiz? ¡Escribe! Chico alto, sudadera roja, vía tres. ¡Se olvidó la mochila!»",
          B: "La mujer ve el lápiz en tu mano y te lo señala. «¿Llevas lápiz? ¡Apunta! Chico alto, sudadera roja, vía tres. Se olvidó la mochila y yo ya no corro más.»",
          C: "La mujer ve el lápiz y se le ilumina la cara. «¿Un lápiz? ¡Apunta! Varón, alto, sudadera roja, vía tres. Se dejó la mochila y mis pulmones se rinden.»",
        },
        options: [
          {
            id: "nota",
            act: { A: "Escribes una nota: «Tu mochila está en información».", B: "Escribes una nota grande: «TU MOCHILA ESTÁ EN INFORMACIÓN».", C: "Escribes una nota en letras enormes: «TU MOCHILA: EN INFORMACIÓN»." },
            say: { A: "La pego en la vía tres. Él la va a ver.", B: "La pego en la columna de la vía tres. Cuando vuelva, la verá.", C: "La pego en la columna de la vía tres. Si vuelve, la nota lo espera." },
            reply: { A: "La mujer sonríe. «¡Buena idea! Vamos.»", B: "La mujer sonríe por primera vez. «¡Qué buena idea! Vamos a pegarla.»", C: "La mujer sonríe, aliviada. «Un lápiz vale más que mis piernas. Vamos.»" },
            mood: "smile", next: "lapiz-nota",
          },
          {
            id: "cartel",
            act: { A: "Dibujas una flecha grande en un papel.", B: "Dibujas en un papel una flecha enorme y una mochila.", C: "Dibujas una mochila y una flecha gigante en el reverso de un folleto." },
            say: { A: "Levanto esto. Él mira atrás y lo ve.", B: "Levanto este cartel. Si mira atrás, lo entiende.", C: "Levanto el cartel. Si mira atrás un segundo, lo entiende sin palabras." },
            reply: { A: "El chico mira atrás. Ve el dibujo. Se toca la espalda. «¡Mi mochila!»", B: "El chico mira atrás en la escalera, ve tu dibujo y se toca la espalda. «¡Mi mochila!»", C: "El chico echa un vistazo atrás, ve el dibujo y se palpa la espalda. «¡Mi mochila!» Vuelve corriendo." },
            mood: "surprised", end: "lapiz-dibujo",
          },
          {
            id: "descripcion",
            say: { A: "Lo escribo todo. ¿Y usted cómo se llama?", B: "Lo apunto todo. ¿Y usted cómo se llama, para la nota?", C: "Lo anoto todo. ¿Y su nombre, para que conste quién salvó la mochila?" },
            reply: { A: "«Begoña. Escribe Begoña.» Sonríe.", B: "«Begoña. Ponga Begoña, con b.» Y sonríe, por fin.", C: "«Begoña. Con b de buena samaritana.» Y por fin se ríe." },
            mood: "smile", next: "lapiz-nota",
          },
        ],
      },
      "lapiz-nota": {
        who: "matias", mood: "surprised",
        line: {
          A: "El chico vuelve corriendo. Ve tu papel con su descripción. «¿Eso soy yo? ¡Mi mochila!»",
          B: "El chico vuelve por la escalera y lee tu papel por encima de tu hombro. «¿“Alto, sudadera roja”? ¡Soy yo! ¿Dónde está mi mochila?»",
          C: "El chico vuelve a la carrera y lee tu papel al pasar. «¿“Varón, alto, sudadera roja”? Soy yo. ¿Y mi mochila?»",
        },
        options: [
          {
            id: "entregar",
            say: { A: "Aquí está. Begoña la trajo. Firma aquí: recibida.", B: "Aquí la tienes. La trajo Begoña. Firma aquí: «mochila recibida».", C: "Aquí está, cortesía de Begoña. Firma aquí abajo: «mochila recibida», para el archivo." },
            reply: { A: "El chico firma riéndose. «¡Recibida! ¡Gracias!» Corre al tren.", B: "El chico firma con tu lápiz, riéndose. «Recibida. ¡Gracias a los dos!» Y corre al tren.", C: "El chico firma con una rúbrica torcida. «Recibida y agradecida.» Y vuela hacia el tren." },
            mood: "smile", end: "lapiz-firma",
          },
          {
            id: "leer",
            say: { A: "Lee la nota primero. Es para ti.", B: "Lee primero la nota. Está escrita para ti.", C: "Lee primero la nota. Va dirigida a ti, personalmente." },
            reply: { A: "El chico lee: «Información». «¡Pero si está aquí!» Se ríe.", B: "El chico lee: «Tu mochila está en información». Mira la mochila en tus manos. «¡Pero si está aquí!» Se ríe.", C: "El chico lee «en información», mira la mochila en tus manos y suelta una carcajada. «La burocracia va rápido aquí.»" },
            mood: "laugh", end: "lapiz-firma",
          },
          {
            id: "dibujar",
            act: { A: "Le dibujas una mochila en la mano.", B: "Le dibujas una mochila pequeña en el dorso de la mano.", C: "Le dibujas una mochila diminuta en el dorso de la mano." },
            say: { A: "Para que no la olvides más.", B: "Para que no la vuelvas a olvidar.", C: "Recordatorio permanente, o hasta que te laves las manos." },
            reply: { A: "El chico mira su mano. «¡Genial!» Begoña se ríe.", B: "El chico mira el dibujo. «Es lo más útil que me han dado hoy.» Begoña se ríe.", C: "El chico contempla el dibujo. «Más útil que una alarma.» Begoña se ríe a carcajadas." },
            mood: "smile", end: "lapiz-dibujo",
          },
        ],
      },
      "libro-inicio": {
        who: "matias", mood: "surprised",
        line: {
          A: "Levantas el libro. El chico lo ve y se para. «¿Un libro? ¿Me paras con un libro? ¿Qué haces con un libro aquí?»",
          B: "Levantas el libro como una señal de stop. El chico frena, desconcertado. «¿Un libro? ¿Me paras con un libro? ¿Qué haces con un libro en un andén a medianoche?»",
          C: "Levantas el libro como un semáforo. El chico frena, perplejo. «¿Un libro? ¿Me detienes con literatura? ¿Qué hace un libro en este andén a estas horas?»",
        },
        options: [
          {
            id: "regalo",
            say: { A: "Es para ti. Para el tren. Pero mira atrás primero.", B: "Es para ti, para el viaje. Pero antes mira atrás.", C: "Es tuyo, para el tren. Pero antes, mira quién viene gritando." },
            reply: { A: "El chico mira atrás. La mujer llega con una mochila. «¡Mi mochila!»", B: "El chico se gira. La mujer llega con la mochila. «¡Mi mochila! ¡Y un libro!»", C: "El chico se gira y ve llegar a la mujer con la mochila. «Mi mochila. Y un libro. Qué noche.»" },
            mood: "surprised", next: "libro-mochila",
          },
          {
            id: "excusa",
            say: { A: "Leo en el andén. ¿Y tú por qué corres?", B: "Yo leo en el andén, es mi costumbre. ¿Y tú por qué corres?", C: "Leo en andenes; cada uno con sus vicios. ¿Y tú por qué huyes de una señora?" },
            reply: { A: "«¡No huyo! ¡Voy al tren!» La mujer llega con una mochila.", B: "«¡No huyo de nadie! ¡Voy al tren!» La mujer llega sin aire, con una mochila.", C: "«¡Yo no huyo! ¡Corro al tren!» La mujer llega jadeando, con una mochila azul." },
            mood: "angry", next: "libro-mochila",
          },
          {
            id: "leer",
            act: { A: "Abres el libro y lees en voz alta.", B: "Abres el libro y lees una frase en voz alta.", C: "Abres el libro y declamas una frase para el andén." },
            say: { A: "«Nadie llega tarde si no corre.» ¿Qué te parece?", B: "«Nadie llega tarde si deja de correr.» ¿Qué te parece?", C: "«Solo llega tarde quien corre.» ¿Qué opinas, como experto?" },
            reply: { A: "El chico se ríe. «¡Qué tontería!» Y corre al tren sin mochila.", B: "El chico se ríe. «Qué tontería tan bonita.» Y sigue corriendo al tren, sin mochila.", C: "El chico se ríe. «Muy profundo. Yo llego tarde igual.» Y sigue hacia el tren, sin su mochila." },
            mood: "laugh", end: "libro-sinmochila",
          },
        ],
      },
      "libro-mochila": {
        who: "begona", mood: "smile",
        line: {
          A: "La mujer le da la mochila al chico y mira tu libro. «¿Lo paraste con un libro? ¡Qué idea! ¿Es bueno?»",
          B: "La mujer le entrega la mochila al chico y señala tu libro. «¿Lo paraste con un libro? Es la mejor idea de la noche. ¿Es bueno?»",
          C: "La mujer le pasa la mochila al chico y examina tu libro. «¿Detuviste a un atleta con literatura? Brillante. ¿Y es bueno?»",
        },
        options: [
          {
            id: "regalar",
            say: { A: "Es muy bueno. Toma, es para ti. Chico, corre.", B: "Es buenísimo. Toma, quédatelo. Chico, corre a tu tren.", C: "Es excelente. Quédeselo, se lo ganó. Chico, corre, que tu tren no lee." },
            reply: { A: "La mujer abraza el libro. El chico corre al tren con la mochila.", B: "La mujer abraza el libro como un premio. El chico corre al tren con la mochila.", C: "La mujer acepta el libro como un trofeo. El chico se lanza al tren con la mochila a la espalda." },
            mood: "smile", end: "libro-regalo",
          },
          {
            id: "club",
            say: { A: "Es bueno. ¿Lo leemos juntos un día?", B: "Es muy bueno. ¿Y si lo leemos juntos algún día?", C: "Es muy bueno. ¿Fundamos un club de lectura de andén?" },
            reply: { A: "La mujer se ríe. «¡Sí! Me llamo Begoña.» El chico se despide y corre.", B: "La mujer se ríe. «¡Club de andén! Soy Begoña.» El chico se despide y corre al tren.", C: "La mujer se ríe. «Club de lectura de andén. Begoña, presidenta.» El chico saluda y corre al tren." },
            mood: "smile", end: "libro-regalo",
          },
          {
            id: "chico",
            say: { A: "Chico, llévate el libro. Para el tren.", B: "Chico, llévate el libro. Para leer en el tren.", C: "Chico, llévatelo. Un tren largo sin libro es un castigo." },
            reply: { A: "El chico lo toma. «¡Gracias!» Corre. Olvida la mochila otra vez.", B: "El chico lo agarra. «¡Gracias!» Sale corriendo con el libro… y sin la mochila, otra vez.", C: "El chico lo toma, da las gracias y sale disparado con el libro. La mochila se queda en el suelo. Otra vez." },
            mood: "laugh", end: "libro-sinmochila",
          },
        ],
      },
      "corazon-inicio": {
        who: "matias", mood: "smitten",
        line: {
          A: "El chico te ve y se para solo. Sonríe. Se quita los auriculares. «Hola… Eh… ¿Por qué me paré? Tengo un tren.»",
          B: "El chico te ve, frena solo y sonríe sin saber por qué. Se quita los auriculares. «Hola. Eh… No sé por qué me paré. Tengo un tren en dos minutos.»",
          C: "El chico te ve y la carrera termina sola. Sonríe, se quita los auriculares. «Hola. Acabo de frenar sin motivo. Bueno, con uno. Tengo un tren en dos minutos.»",
        },
        options: [
          {
            id: "mochila",
            say: { A: "Mira atrás. Esa mujer tiene tu mochila.", B: "Mira atrás con cariño: esa mujer trae tu mochila.", C: "Antes de seguir con los ojos en mí, mira atrás: esa mujer trae tu mochila." },
            reply: { A: "El chico se gira. La mujer llega con la mochila. «¡Gracias a las dos!»", B: "El chico se gira y ve a la mujer con la mochila. «¡Mi mochila! ¡Gracias a las dos!»", C: "El chico se gira, ve la mochila y se lleva las manos a la cabeza. «¡Gracias a las dos! Hoy el universo me cuida.»" },
            mood: "love", next: "corazon-anden",
          },
          {
            id: "coquetear",
            say: { A: "Te paraste por mí. Qué bonito.", B: "Te paraste por mí. Eso no pasa todos los días.", C: "Frenaste por mí. Los atletas no suelen hacer eso." },
            reply: { A: "El chico se pone rojo. «Sí… creo que sí.» La mujer llega con la mochila.", B: "El chico se pone colorado. «Creo que sí. Me llamo Matías.» La mujer llega con la mochila.", C: "El chico enrojece hasta las orejas. «Sí. Matías. Y acabo de olvidar qué tren tomaba.» La mujer llega con la mochila." },
            mood: "smitten", next: "corazon-anden",
          },
          {
            id: "beso",
            act: { A: "Le das un beso en la mejilla.", B: "Le das un beso en la mejilla.", C: "Le das un beso rápido en la mejilla." },
            say: { A: "Para el viaje. Y toma tu mochila: esa mujer la trae.", B: "Esto es para el viaje. Y tu mochila viene con esa mujer.", C: "Para el viaje. Y tu mochila llega corriendo con esa señora." },
            reply: { A: "El chico se toca la mejilla. Toma la mochila. Sube al tren sonriendo.", B: "El chico se toca la mejilla, agarra la mochila de Begoña y sube al tren con cara de tonto.", C: "El chico se toca la mejilla, recoge la mochila de manos de Begoña y sube al tren flotando." },
            mood: "love", end: "corazon-beso",
          },
        ],
      },
      "corazon-anden": {
        who: "begona", mood: "love",
        line: {
          A: "Begoña le da la mochila y te mira. «Qué chico tan dulce. Y tú también. Me llamo Begoña.»",
          B: "Begoña le entrega la mochila al chico y te sonríe. «Qué chico tan dulce. Y tú tienes algo especial. Soy Begoña.»",
          C: "Begoña le da la mochila a Matías y se queda observándote. «Qué chico tan dulce. Y tú tienes algo que calma a la gente. Begoña, encantada.»",
        },
        options: [
          {
            id: "abrazo",
            act: { A: "Abrazas a los dos.", B: "Abrazas a Begoña y a Matías.", C: "Los abrazas a los dos a la vez." },
            say: { A: "Gracias por correr por él. Eres muy buena.", B: "Gracias por correr por un desconocido. Eres muy buena persona.", C: "Gracias por correr detrás de un desconocido. Esa bondad no se ve todos los días." },
            reply: { A: "Begoña te abraza fuerte. Matías también. Luego corre al tren.", B: "Begoña te abraza fuerte y Matías se une. Luego el chico corre al tren, feliz.", C: "Begoña te abraza y Matías se suma al abrazo. Luego sale corriendo al tren, radiante." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "tesis",
            say: { A: "¿Por qué corres así por una mochila?", B: "¿Por qué corres así por una mochila ajena?", C: "¿Qué te hace correr así por una mochila que no es tuya?" },
            reply: { A: "Begoña sonríe. «Una vez se me quedó mi tesis en un tren. Nadie corrió.»", B: "Begoña sonríe con tristeza. «Una vez se me quedó la tesis en un tren. Nadie corrió detrás de mí.»", C: "Begoña sonríe. «Se me quedó la tesis en un tren hace años. Nadie corrió. Desde entonces corro yo.»" },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "despedir",
            say: { A: "Matías, corre. Y tú, Begoña, ven, te invito a un café.", B: "Matías, corre a tu tren. Begoña, ven, te invito a un café.", C: "Matías, a tu tren. Begoña, tú te vienes conmigo a un café; te lo ganaste." },
            reply: { A: "Matías te da un beso en la mejilla y corre. Begoña te toma del brazo.", B: "Matías te da un beso en la mejilla y sale corriendo. Begoña te toma del brazo, sonriendo.", C: "Matías te planta un beso en la mejilla y vuela al tren. Begoña se cuelga de tu brazo." },
            mood: "love", end: "corazon-beso",
          },
        ],
      },
    },
    ends: {
      "cuchillo-tren": { text: { A: "Matías guarda la navaja y sube al tren con su mochila. Begoña te mira el cuchillo. «Guárdalo bien.»", B: "Matías guarda la navaja y sube al tren con su mochila. Begoña te señala el bolsillo. «Eso, guardado para siempre.»", C: "Matías guarda la navaja y sube al tren con su mochila. Begoña te mira el bolsillo del cuchillo. «Que no vuelva a salir esta noche.»" }, change: "se-va", recap: "Un duelo de cuchillos con Matías terminó sin heridos." },
      "cuchillo-guardia": { text: { A: "El guardia te quita el cuchillo y a Matías la navaja. Llega la policía. Begoña explica lo de la mochila.", B: "El guardia confisca tu cuchillo y la navaja de Matías. Llega la policía y Begoña cuenta lo de la mochila tres veces.", C: "El guardia requisa tu cuchillo y la navaja de Matías. La policía toma nota mientras Begoña explica que todo empezó por una mochila." }, change: "policia", recap: "Dos cuchillos en el andén terminaron con la policía." },
      "pistola-huye": { text: { A: "Matías corre al tren sin mirar atrás. Begoña se va sin decir nada. Guardas la pistola.", B: "Matías sube al tren sin mirar atrás. Begoña se va sin despedirse. Guardas la pistola y el andén queda vacío.", C: "Matías huye al tren sin volver la cabeza. Begoña se marcha en silencio. Te quedas en el andén con la pistola y la vergüenza." }, change: "huye", recap: "Tu pistola asustó a Matías y a Begoña." },
      "pistola-policia": { text: { A: "La policía te quita la pistola. Matías y Begoña explican. Tú pasas la noche en la comisaría.", B: "La policía te desarma en el andén. Matías y Begoña dan su versión y tú pasas la noche en comisaría.", C: "La policía te desarma delante de todo el andén. Matías y Begoña declaran; tú declaras más largo, en comisaría." }, change: "policia", recap: "La pistola en el andén terminó en comisaría." },
      "granada-tren": { text: { A: "Matías sube al tren con la mochila. Begoña sale del banco. «¡Nunca más una granada!»", B: "Matías sube al tren con la mochila. Begoña sale por fin del banco. «La próxima vez, sin granada, por favor.»", C: "Matías sube al tren con la mochila. Begoña sale del banco con las piernas temblando. «La próxima vez, con un silbato.»" }, change: "se-va", recap: "Tu granada vació el andén, pero Matías recuperó su mochila." },
      "granada-helicoptero": { text: { A: "El helicóptero ilumina el andén. La policía te rodea. Matías pierde el tren. Begoña pierde la voz.", B: "El helicóptero ilumina el andén vacío. La policía te rodea. Matías pierde el tren y Begoña, de tanto gritar, la voz.", C: "El helicóptero fija su foco en el andén. La policía te rodea. Matías pierde el tren y Begoña, la voz y la paciencia." }, change: "helicoptero", recap: "La granada trajo un helicóptero a la estación." },
      "gas-tren": { text: { A: "Matías sube al tren frotándose los ojos del susto. Begoña te mira el gas. «Guárdalo.»", B: "Matías sube al tren todavía nervioso. Begoña señala tu gas pimienta. «Guárdalo y respira.»", C: "Matías sube al tren con el susto en el cuerpo. Begoña señala tu gas. «Guárdalo. La estación ya da bastante miedo sola.»" }, change: "se-va", recap: "Amenazaste a Matías con gas pimienta, pero tomó su tren." },
      "gas-ambulancia": { text: { A: "Llega la ambulancia. Matías no puede abrir los ojos. Begoña sube con él. Pierde el tren.", B: "La ambulancia llega al andén. Matías no puede abrir los ojos y Begoña sube con él. El tren se va sin nadie.", C: "La ambulancia entra hasta el andén. Matías, con los ojos cerrados, sube ayudado por Begoña. El tren parte vacío." }, change: "ambulancia", recap: "Tu gas pimienta mandó a Matías en ambulancia." },
      "lapiz-firma": { text: { A: "Matías sube al tren con la mochila y tu nota firmada. Begoña se guarda tu lápiz. «Para la próxima.»", B: "Matías sube al tren con la mochila y la nota firmada en el bolsillo. Begoña se queda tu lápiz. «Por si hay otra mochila.»", C: "Matías sube al tren con la mochila y la nota firmada. Begoña se queda con tu lápiz. «Para la próxima carrera.»" }, change: "se-va", recap: "Matías firmó con tu lápiz la entrega de su mochila." },
      "lapiz-dibujo": { text: { A: "Matías mira tu dibujo y sube al tren con la mochila. Begoña se ríe. «Un lápiz vale más que mis piernas.»", B: "Matías sube al tren mirando tu dibujo y con la mochila a la espalda. Begoña se ríe. «Un lápiz corre más que yo.»", C: "Matías sube al tren con el dibujo en la mano y la mochila a la espalda. Begoña se ríe. «Un lápiz corre más que yo, está demostrado.»" }, change: "sonrie", recap: "Tu dibujo a lápiz hizo volver a Matías por su mochila." },
      "libro-regalo": { text: { A: "Matías sube al tren con la mochila. Begoña se va con tu libro bajo el brazo.", B: "Matías sube al tren con la mochila. Begoña se aleja con tu libro bajo el brazo, leyendo la primera página.", C: "Matías sube al tren con la mochila. Begoña se va leyendo tu libro, ya en la segunda página." }, change: "sonrie", recap: "Paraste a Matías con un libro y Begoña se quedó con él." },
      "libro-sinmochila": { text: { A: "Matías sube al tren con tu libro. La mochila se queda en el andén. Begoña suspira.", B: "Matías sube al tren con tu libro y sin la mochila. Begoña la recoge del suelo y suspira.", C: "Matías sube al tren con tu libro y sin la mochila. Begoña la levanta del suelo con un suspiro de veterana." }, change: "corre", recap: "Matías se llevó tu libro y olvidó la mochila otra vez." },
      "corazon-beso": { text: { A: "Matías sube al tren con la mano en la mejilla. Begoña y tú se van a tomar un café.", B: "Matías sube al tren con la mano en la mejilla y la mochila en la otra. Begoña y tú se van a tomar un café.", C: "Matías sube al tren sin soltarse la mejilla, mochila al hombro. Begoña y tú salen hacia el quiosco." }, change: "beso", recap: "Un beso en la mejilla despidió a Matías en el andén." },
      "corazon-abrazo": { text: { A: "Matías sube al tren feliz. Begoña te abraza otra vez. «Gracias por esta noche.»", B: "Matías sube al tren con la mochila y una sonrisa. Begoña te abraza otra vez. «Gracias por esta noche tan rara.»", C: "Matías sube al tren radiante. Begoña te abraza de nuevo. «Gracias por convertir una carrera en esto.»" }, change: "abraza", recap: "Abrazaste a Matías y Begoña en el andén." },
      tren: { text: { A: "Matías llega al tren con su mochila. Te dice adiós desde la ventana.", B: "Matías sube al tren justo cuando se cierran las puertas. Desde la ventana, te saluda con la mochila.", C: "Matías sube al tren en el último segundo. Desde la ventana, levanta la mochila como un trofeo." }, change: "se-va", recap: "Ayudaste a Matías a recuperar su mochila." },
      amigos: { text: { A: "Matías y Begoña se ríen contigo. Todos están contentos.", B: "Los tres se ríen en el andén. Begoña te da una palmada en el hombro: «Buen equipo».", C: "Terminan los tres riéndose en el andén. Begoña declara oficialmente fundado el club de rescate de mochilas." }, change: "sonrie", recap: "Aclaraste un malentendido con Matías y Begoña." },
      sinmochila: { text: { A: "Matías se va sin mochila. Begoña llega tarde y suspira.", B: "Matías se va sin su mochila. Begoña llega un segundo tarde y suspira, con la mochila en la mano.", C: "El tren se lleva a Matías sin su mochila. Begoña llega tarde, mira el tren alejarse y te mira a ti." }, change: "corre", recap: "Dejaste ir a Matías sin su mochila." },
      huye: { text: { A: "Matías se va corriendo. Begoña te mira, muy seria.", B: "Matías huye con su mochila. Begoña te mira con cara de pocos amigos.", C: "Matías se esfuma con la mochila. Begoña te dedica una mirada que vale más que un sermón." }, change: "corre", recap: "Asustaste a Matías y se fue corriendo." },
      policia: { text: { A: "Llega la policía. Tienes que explicar todo.", B: "Llega la policía. Matías y Begoña cuentan su versión; tú, la tuya, mucho más larga.", C: "Llega un coche patrulla. Las tres versiones coinciden en todo menos en tu papel de héroe." }, change: "policia", recap: "Un malentendido en la estación terminó con la policía." },
      objetos: { text: { A: "Dejan la mochila en información. Begoña te da las gracias.", B: "Dejan la mochila en información. A los diez minutos, Matías vuelve corriendo a buscarla.", C: "Entregan la mochila en información. Diez minutos después, Matías vuelve con cara de haber perdido un tren y ganado una lección." }, change: "sigue", recap: "Dejaste la mochila de un chico en información." },
      sentada: { text: { A: "Begoña se queda en el banco con la mochila.", B: "Begoña se queda sentada con la mochila del chico, sin saber qué hacer.", C: "Begoña se queda en el banco, custodiando una mochila ajena con resignación." }, change: "se-sienta", recap: "No te metiste en la carrera de la estación." },
    },
    speak: {
      A1: "¿Qué llevas en tu mochila?",
      A2: "¿Qué cosa olvidaste en algún lugar?",
      B1: "¿Cómo reaccionas cuando alguien pierde algo en la calle?",
      B2: "¿Qué harías si encontraras una cartera con dinero en un banco?",
      C1: "¿Por qué crees que juzgamos tan rápido a las personas que vemos correr?",
      C2: "¿Qué prejuicio tuyo descubriste gracias a un malentendido?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Qué haces si ves una pelea en la calle?", B: "¿Cómo reaccionarías si alguien sacara un cuchillo delante de ti?", C: "¿Qué te enseñó una situación en la que todos perdieron la cabeza menos una persona?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Por qué dan miedo las armas?", B: "¿Qué consecuencias puede tener un error cometido con miedo?", C: "¿Quién debería tener el control en una situación de pánico, y por qué?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Qué haces cuando suena una alarma?", B: "¿Qué pasó la vez que viviste una evacuación o un pánico colectivo?", C: "¿Por qué el pánico se contagia tan rápido en un lugar lleno de gente?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Qué personas te dan miedo en la calle?", B: "¿Alguna vez juzgaste a alguien peligroso y te equivocaste?", C: "¿Cómo distingues una amenaza real de una que solo existe en tu cabeza?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Cuándo escribes notas para otras personas?", B: "¿Cuándo fue la última vez que una nota escrita resolvió un problema?", C: "¿Qué mensaje dejarías en una estación para alguien que no conoces?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Lees en el tren o en el autobús?", B: "¿Qué libro regalarías a alguien que siempre tiene prisa?", C: "¿Qué libro cambiaría la vida de un desconocido si se lo pusieras en las manos?" } },
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿A quién le das las gracias hoy?", B: "¿Alguna vez un desconocido te hizo un favor enorme sin esperar nada?", C: "¿Qué gesto de bondad anónima te gustaría devolverle al mundo?" } },
    },
  },

  // ─────────────────────────────────────────────────────────────── ESCENA 3
  {
    id: "estacion-tunel",
    kind: "escena",
    district: "estacion",
    title: "Tres personas en el túnel",
    verb: "ESPERAR",
    goal: "Gestionar el miedo, pedir explicaciones, aceptar o rechazar una oferta con cortesía y disculparse tras un malentendido.",
    cast: [
      {
        id: "wilson", name: "Wilson", role: "Bajo del coro del barrio",
        age: "adult", body: "m", build: "heavy", height: 1.84,
        hair: "afro", hairColor: "#141010", skin: "#5a3a26",
        top: "jacket", topColor: "#d1a03a", bottom: "pants", bottomColor: "#30302e",
        extras: ["scarf"], pose: "wave", props: ["tickets"],
      },
      {
        id: "ines", name: "Inés", role: "Directora del coro",
        age: "old", body: "f", build: "slim", height: 1.57,
        hair: "curly", hairColor: "#ece8e0", skin: "#e8c2a0",
        top: "sweater", topColor: "#2a7b78", bottom: "pants", bottomColor: "#4c3b5a",
        extras: ["glasses", "scarf"], pose: "walk",
      },
      {
        id: "lucia", name: "Lucía", role: "Corista tímida",
        age: "young", body: "f", build: "slim", height: 1.66,
        hair: "braids", hairColor: "#3b2216", skin: "#a8724c",
        top: "hoodie", topColor: "#6b4bb0", bottom: "jeans", bottomColor: "#22283a",
        extras: ["earrings"], pose: "stand", props: ["tickets"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "wilson", mood: "neutral",
        line: {
          A: "En el túnel, la luz parpadea. Tres personas vienen hacia ti. Un hombre grita: «¡Oye, tú! ¡Espera un momento!»",
          B: "El tubo fluorescente del túnel parpadea. Tres siluetas avanzan hacia ti y una voz grave retumba: «¡Oye, tú! ¡Espera un momento!»",
          C: "El fluorescente del túnel tartamudea. Tres figuras se acercan a paso rápido y una voz de barítono rebota en las paredes: «¡Oye, tú! ¡Espera un momento!»",
        },
        options: [
          {
            id: "esperar",
            say: { A: "Sí, dime. ¿Qué pasa?", B: "Sí, dime. ¿Qué necesitas?", C: "Aquí estoy. ¿En qué puedo ayudarlos?" },
            reply: { A: "El hombre sonríe y enseña unos papeles. «¡Tranquilo! Somos del coro del barrio.»", B: "El hombre sonríe y levanta unos papelitos. «¡Tranquilo! Somos del coro del barrio. Vendemos números para una rifa.»", C: "El hombre sonríe con todos los dientes. «¡Gracias por no salir corriendo! Somos el coro del barrio. Rifa benéfica.»" },
            mood: "smile", next: "rifa",
          },
          {
            id: "prisa",
            act: { A: "Caminas más rápido.", B: "Aceleras el paso sin mirar.", C: "Aceleras con la mirada fija en la salida." },
            say: { A: "Lo siento, tengo prisa.", B: "Lo siento, voy con mucha prisa.", C: "Perdón, voy tardísimo. Otro día." },
            reply: { A: "El hombre canta: «¡Solo un minutooo!» Las otras dos se ríen.", B: "El hombre canta con voz enorme: «¡Solo un minuto, por favooor!» Las dos mujeres se ríen.", C: "El hombre responde cantando, en clave de ópera: «¡Solo un minutooo!» Las dos mujeres le hacen los coros." },
            mood: "smile", next: "rifa",
          },
          {
            id: "volver",
            act: { A: "Das un paso atrás.", B: "Das un paso atrás, hacia la luz.", C: "Retrocedes hacia la zona iluminada." },
            say: { A: "¿Quiénes son ustedes?", B: "Un momento. ¿Quiénes son ustedes?", C: "Antes de nada: ¿quiénes son y qué quieren?" },
            reply: { A: "La señora mayor canta una nota muy bonita. «¡Somos el coro! ¿Ves?»", B: "La señora mayor canta una nota limpia que llena el túnel. «¡El coro del barrio! ¿Lo ves?»", C: "La señora mayor responde con una nota perfecta que llena el túnel. «Presentación oficial. Somos el coro del barrio.»" },
            mood: "smile", next: "rifa",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Levantas el lápiz como un micrófono.", B: "Levantas el lápiz como si fuera un micrófono.", C: "Les acercas el lápiz como un micrófono de reportero." },
            say: { A: "Hola. ¿Quiénes son ustedes?", B: "Buenas noches. ¿Quiénes son y qué hacen aquí?", C: "Noticias de medianoche: ¿quiénes son y qué hacen en este túnel?" },
            reply: { A: "El hombre se ríe y canta al lápiz. «¡Somos el coro del barrio!»", B: "El hombre se ríe y canta al lápiz como un artista. «¡Coro del barrio, en directo!»", C: "El hombre toma tu lápiz-micrófono y canta. «¡Coro del barrio, en exclusiva para usted!»" },
            mood: "smile", next: "rifa",
          },
          libro: {
            act: { A: "Abres tu libro y lees.", B: "Abres el libro y finges leer.", C: "Te escondes detrás del libro, como en las películas." },
            say: { A: "Perdón, estoy leyendo.", B: "Perdón, estoy en un capítulo muy interesante.", C: "Disculpen, estoy en lo mejor del capítulo." },
            reply: { A: "Una chica se ríe. «¿Leer aquí? ¡Con esta luz!»", B: "La chica más joven se ríe. «¿Leer aquí, con esta luz? ¡Eres un héroe!»", C: "La chica más joven se ríe. «Con esta luz solo se pueden leer novelas de terror. Muy apropiado.»" },
            mood: "smile", next: "rifa",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Sacas el gas pimienta y lo apuntas hacia ellos.", C: "Sacas el gas pimienta con el brazo extendido." },
            say: { A: "¡No! ¡No se acerquen!", B: "¡Quietos! ¡No se acerquen!", C: "¡Ni un paso más, por favor!" },
            reply: { A: "Los tres se paran. A la chica se le caen unos papeles.", B: "Los tres se quedan quietos. A la chica joven se le caen todos los papelitos al suelo.", C: "Los tres se congelan. La chica más joven deja caer un taco de papelitos que se esparcen por el suelo." },
            mood: "scared", next: "susto",
          },
          granada: {
            act: { A: "Sacas la granada.", B: "Por nervios, sacas la granada.", C: "Los nervios te traicionan y sacas la granada." },
            say: { A: "¡No se acerquen!", B: "¡No se acerquen, por favor!", C: "Prefiero que hablemos a distancia." },
            reply: { A: "El hombre grita: «¡Ay, madre! ¡Solo es una rifa!» Los tres corren.", B: "«¡Ay, madre! ¡Que solo vendemos números!», grita el hombre. Los tres salen corriendo.", C: "«¡A distancia, sí! ¡Muchísima distancia!», canta el hombre, ya huyendo con las otras dos." },
            mood: "scared", end: "huyen",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Te giras y se ve tu pistola.", C: "Al girarte, la pistola queda a la vista bajo el fluorescente." },
            say: { A: "¿Qué quieren?", B: "¿Qué quieren? Díganlo desde ahí.", C: "Les escucho desde aquí, si no les importa." },
            reply: { A: "La chica levanta las manos. «¡Somos del coro!»", B: "La chica levanta las manos. «¡Somos del coro! ¡Solo vendemos números!»", C: "La chica levanta las manos y los papelitos tiemblan. «Coro… del barrio… rifa… Esas son todas nuestras armas.»" },
            mood: "scared", next: "susto",
          },
          cuchillo: {
            act: { A: "Tienes el cuchillo en la mano. Pelas una mandarina.", B: "Tienes el cuchillo en la mano: estabas pelando una mandarina.", C: "Llevas el cuchillo en una mano y media mandarina en la otra." },
            say: { A: "¿Sí? ¿Qué quieren?", B: "¿Sí? ¿Qué necesitan?", C: "¿Sí? ¿Les puedo ayudar en algo?" },
            reply: { A: "La señora mira la mandarina. «Eh… ¿Es tuya? Somos el coro.»", B: "La señora mayor se para a dos metros. «Venimos en paz. Somos el coro. ¿Esa mandarina se comparte?»", C: "La señora mayor calcula la distancia. «Venimos en son de paz. Coro del barrio. Y esa mandarina tiene muy buena pinta.»" },
            mood: "worried", next: "rifa",
          },
          corazon: {
            act: HEART,
            say: { A: "¡Hola! ¿Qué tal? ¿Buscan algo?", B: "¡Hola! ¿Qué tal? ¿Se perdieron?", C: "¡Buenas noches! ¿Qué hacen tres personas tan simpáticas en un túnel tan feo?" },
            reply: { A: "El hombre sonríe. «¡Qué simpático! Esto merece una canción.» Los tres cantan.", B: "El hombre se emociona. «¡Por fin alguien que sonríe! Esto merece una canción.» Los tres empiezan a cantar.", C: "El hombre se lleva la mano al pecho. «Un túnel feo y una persona amable. Esto pide un bolero.» Los tres cantan." },
            mood: "love", end: "serenata",
          },
        },
      },
      rifa: {
        who: "ines", mood: "smile",
        line: {
          A: "La señora mayor te enseña los números. «Soy Inés. Vendemos números para ir a un concurso de coros. Cuestan lo que un café.»",
          B: "La señora mayor se presenta: Inés, directora del coro. «Vendemos números para pagar el viaje a un concurso. El premio es una guitarra. Cuestan lo que un café.»",
          C: "La señora mayor se presenta como Inés, directora. «Rifa para costear el viaje al concurso nacional de coros. Premio: una guitarra. Precio: un café. Un café muy solidario.»",
        },
        options: [
          {
            id: "comprar",
            say: { A: "Bueno, quiero un número. ¿Cuándo es el sorteo?", B: "Me encanta la idea. Quiero un número. ¿Cuándo es el sorteo?", C: "Por esa causa, me quedo un número. Aunque no sé tocar la guitarra; ya aprenderé." },
            reply: { A: "Inés te da el número 47. «¡El sorteo es el sábado!»", B: "Inés te da el número 47. «El sorteo es el sábado. Si ganas, te enseñamos a tocar.»", C: "Inés te entrega el número 47 con ceremonia. «El sábado sorteamos. Si ganas, la primera clase la doy yo.»" },
            mood: "smile", end: "comprar",
          },
          {
            id: "no",
            say: { A: "Lo siento, hoy no tengo dinero.", B: "Lo siento mucho, hoy no llevo dinero encima.", C: "Me encantaría, pero hoy mi cartera está en huelga." },
            reply: { A: "Inés sonríe. «No pasa nada. ¡Buenas noches!»", B: "Inés sonríe. «No pasa nada. Ven a escucharnos el domingo a la iglesia de la plaza.»", C: "Inés se ríe. «La mía también, a menudo. Ven el domingo a escucharnos; esa entrada es gratis.»" },
            mood: "neutral", end: "sinrifa",
          },
          {
            id: "porque",
            say: { A: "¿Por qué venden aquí, en el túnel?", B: "¿Y por qué venden aquí, en un túnel, a medianoche?", C: "Pregunta inevitable: ¿por qué un túnel a medianoche y no la plaza a mediodía?" },
            reply: { A: "Inés sonríe. «Por el eco. ¡Escucha!» Los tres cantan una nota.", B: "Inés guiña un ojo. «Por el eco. Aquí ensayamos y vendemos a la vez. Escucha.» Los tres cantan una nota.", C: "«Por la acústica, querida criatura», dice Inés. «Ensayamos y vendemos. Escucha.» Los tres cantan un acorde." },
            mood: "smile", end: "eco",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Me encanta lo que hacen por el barrio.", B: "Me parece precioso que hagan esto por el barrio.", C: "Hacen falta más vecinos como ustedes, de verdad." },
            reply: { A: "Inés se emociona. «¡Para ti, una canción gratis!»", B: "Inés se emociona. «Eso no tiene precio. Para ti, una canción de regalo.»", C: "Inés se quita las gafas, conmovida. «Eso merece algo mejor que un número. Merece una canción.»" },
            mood: "love", end: "serenata",
          },
          lapiz: {
            act: { A: "Le das tu lápiz a Lucía.", B: "Le prestas el lápiz a la chica joven, que no tiene con qué escribir.", C: "Ves que la chica joven busca algo para escribir y le ofreces tu lápiz." },
            say: { A: "Toma, para escribir mi nombre.", B: "Toma, para que apuntes mi nombre en el número.", C: "Toma. Apunta mi nombre, que si gano la guitarra quiero el crédito." },
            reply: { A: "Lucía escribe tu nombre. «¡Gracias! Me llamo Lucía.»", B: "La chica sonríe por fin. «Gracias. Soy Lucía. Es mi primera rifa y no traje lápiz.»", C: "La chica sonríe, tímida. «Soy Lucía. Primera rifa, primer olvido. Gracias.»" },
            mood: "smile", end: "comprar",
          },
        },
      },
      susto: {
        who: "lucia", mood: "scared",
        line: {
          A: "La chica tiene las manos arriba. Hay papeles en el suelo. «Somos del coro… Solo vendemos números.»",
          B: "La chica joven tiene las manos arriba y los números de la rifa están por el suelo. «Somos del coro… Solo queríamos venderte un número.»",
          C: "La chica más joven sigue con las manos en alto, rodeada de papelitos. «Somos un coro. Lo más peligroso que tenemos es al tenor.»",
        },
        options: [
          {
            id: "disculpa",
            say: { A: "Perdón. Lo guardo. Tuve miedo en el túnel.", B: "Perdón, lo guardo ya. En este túnel me asusté.", C: "Les pido perdón. Lo guardo. El túnel y yo no nos llevamos bien." },
            reply: { A: "La chica respira. La señora mayor dice: «Es normal. Esta luz da miedo.»", B: "La chica baja las manos. La señora mayor asiente. «Es normal. Esa luz asusta a cualquiera.»", C: "La chica respira. La señora mayor asiente con calma. «Comprensible. Esa luz parece sacada de una película mala.»" },
            mood: "worried", next: "rifa",
          },
          {
            id: "excusa",
            say: { A: "Tres personas en un túnel… Tuve miedo.", B: "Tienen que entender: tres personas, de noche, en un túnel…", C: "Pónganse en mi lugar: tres desconocidos, un túnel, medianoche…" },
            reply: { A: "El hombre se enfada. «Entendemos. Pero eso no se hace.» Se van.", B: "El hombre recoge los papeles, serio. «Entendemos. Pero así no se trata a la gente.» Se van.", C: "El hombre recoge los papeles sin mirarte. «Entendemos el miedo. Lo que no entendemos es el resto.» Se van." },
            mood: "angry", end: "tenso",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdón, mejor me voy.", C: "Lo siento. Creo que es mejor que me vaya." },
            reply: { A: "Los tres corren al otro lado del túnel.", B: "Antes de que te muevas, los tres ya corren hacia la otra salida.", C: "No te da tiempo: los tres ya corren hacia la otra salida, dejando atrás la rifa." },
            mood: "scared", end: "huyen",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Perdón, de verdad. ¿Me cantan algo? Así me quito el susto.", B: "Perdónenme. ¿Me cantan algo? A lo mejor así se nos pasa el susto a todos.", C: "Les debo una disculpa enorme. ¿Y si me la cobran en forma de canción?" },
            reply: { A: "La chica sonríe. «Bueno… Me llamo Lucía. ¡Una canción!» Los tres cantan.", B: "La chica se ríe, aliviada. «Soy Lucía. Bueno… una canción.» Los tres empiezan a cantar bajito.", C: "La chica suelta una risa nerviosa. «Soy Lucía. Trato hecho.» Y los tres cantan, primero bajito, luego con todo." },
            mood: "love", end: "serenata",
          },
        },
      },

      // ── variantes
      "cuchillo-inicio": {
        who: "wilson", mood: "furious",
        line: {
          A: "Wilson ve tu cuchillo y saca una navaja del abrigo. «¡Quieto! ¡Yo también tengo uno!» Las dos mujeres gritan y se pegan a la pared.",
          B: "Wilson ve el cuchillo en tu mano y, por reflejo, saca una navaja. «¡Baja eso o bajo yo el mío!» Inés y Lucía gritan y se pegan a la pared del túnel.",
          C: "Wilson ve tu cuchillo y responde con una navaja que nadie sabía que llevaba. «Dos hojas en un túnel: esto tiene mala pinta.» Inés y Lucía se aplastan contra la pared.",
        },
        options: [
          {
            id: "bajar",
            act: { A: "Bajas el cuchillo despacio.", B: "Bajas el cuchillo muy despacio, con las palmas abiertas.", C: "Bajas el cuchillo con una lentitud casi teatral." },
            say: { A: "Calma. Bajo el mío. Bajen ustedes la navaja.", B: "Calma, bajo el mío primero. Ustedes también, por favor.", C: "Tranquilos. Bajo el mío primero. No hace falta que esto sea una ópera de verdad." },
            reply: { A: "Wilson baja la navaja. «¡Estás loco! Casi nos matamos por una mandarina.»", B: "Wilson baja la navaja, sudando. «¿Estás loco? Casi nos matamos en un túnel por nada.»", C: "Wilson baja la navaja sin guardarla. «Estás loco. Y yo, más, por haberla sacado. Casi cantamos nuestro último bolero.»" },
            mood: "scared", next: "cuchillo-tregua",
          },
          {
            id: "gritar",
            say: { A: "¡Soy yo el que tiene miedo! ¡No se acerquen!", B: "¡Soy yo quien tiene miedo aquí! ¡No se acerquen más!", C: "¡El asustado soy yo! ¡Tres desconocidos y una navaja no es un coro, es una emboscada!" },
            reply: { A: "Inés grita: «¡Policía!» Lucía llora. Wilson no baja la navaja.", B: "Inés grita pidiendo ayuda y Lucía llora. Wilson no baja la navaja. Se oyen pasos que corren por el túnel.", C: "Inés pide a gritos un policía, Lucía llora y Wilson mantiene la navaja en alto. El eco del túnel multiplica el escándalo." },
            mood: "terror", end: "cuchillo-policia",
          },
          {
            id: "huir",
            act: { A: "Retrocedes sin soltar el cuchillo.", B: "Retrocedes hacia la luz sin soltar el cuchillo.", C: "Retrocedes hacia la zona iluminada, cuchillo en mano." },
            say: { A: "No me sigan. Me voy.", B: "No me sigan. Me voy ahora mismo.", C: "No me sigan, por favor. Prefiero irme antes de que esto empeore." },
            reply: { A: "Wilson baja la navaja y se va con las dos mujeres. Nadie habla.", B: "Wilson baja la navaja a regañadientes y se lleva a las dos mujeres hacia la otra salida. Nadie dice nada.", C: "Wilson guarda la navaja, toma a las dos mujeres del brazo y se retira en un silencio que pesa más que las hojas." },
            mood: "worried", end: "cuchillo-tenso",
          },
        ],
      },
      "cuchillo-tregua": {
        who: "ines", mood: "worried",
        line: {
          A: "Inés se pone entre ustedes. «Basta. Somos un coro. ¿Por qué llevas ese cuchillo?»",
          B: "Inés se interpone entre los dos con las manos levantadas. «Basta ya. Somos un coro, no una pandilla. ¿Por qué llevas ese cuchillo?»",
          C: "Inés se coloca entre las dos hojas con la autoridad de quien dirigió coros durante cuarenta años. «Basta. Somos un coro, no una película de gángsters. ¿Por qué ese cuchillo?»",
        },
        options: [
          {
            id: "fruta",
            say: { A: "Es para pelar fruta. Mira, tengo una mandarina.", B: "Es para pelar fruta. Mira, tengo una mandarina en el bolsillo.", C: "Es un cuchillo de fruta. Aquí tiene la prueba: una mandarina inocente." },
            reply: { A: "Inés se ríe. Wilson guarda la navaja. «¡Una mandarina!» Lucía respira.", B: "Inés se ríe, aliviada. Wilson guarda la navaja avergonzado. «¿Una mandarina? Me siento ridículo.»", C: "Inés suelta una carcajada nerviosa. Wilson guarda la navaja, humillado. «Casi muero por una mandarina. Qué final tan poco épico.»" },
            mood: "laugh", next: "rifa",
          },
          {
            id: "disculpa",
            say: { A: "Perdón. Me asusté. Lo guardo ahora mismo.", B: "Perdón, me asusté y reaccioné mal. Lo guardo ahora mismo.", C: "Pido perdón: el miedo reaccionó antes que mi cabeza. Lo guardo ahora mismo." },
            reply: { A: "Inés asiente. «Gracias. Esto fue muy peligroso.» Lucía te mira, temblando.", B: "Inés asiente, seria. «Gracias. Esto pudo acabar muy mal.» Lucía sigue temblando.", C: "Inés asiente, grave. «Gracias. Esto pudo acabar en tragedia, y ningún túnel merece esa partitura.» Lucía sigue temblando." },
            mood: "worried", end: "cuchillo-tenso",
          },
          {
            id: "ambulancia",
            say: { A: "¿Alguien está herido? ¿Llamo a una ambulancia?", B: "¿Alguien se cortó? Si hace falta, llamo a una ambulancia ahora mismo.", C: "¿Hay algún herido? Si lo hay, la ambulancia va antes que cualquier explicación." },
            reply: { A: "Wilson se mira la mano: tiene un corte pequeño. Inés lo venda con un pañuelo.", B: "Wilson se mira la mano: tiene un corte pequeño de la navaja. Inés se lo venda con un pañuelo y todos respiran.", C: "Wilson descubre un corte superficial en la palma, de su propia navaja. Inés lo venda con un pañuelo y todos respiran por fin." },
            mood: "worried", end: "cuchillo-vendaje",
          },
        ],
      },
      "pistola-inicio": {
        who: "wilson", mood: "terror",
        line: {
          A: "Wilson ve la pistola y levanta las manos. Inés y Lucía también. «¡No dispares! ¡Somos un coro!» Los papelitos caen al suelo.",
          B: "Wilson ve la pistola, se queda helado y levanta las manos. Inés y Lucía lo imitan. «¡No dispares! ¡Somos del coro, no tenemos nada!» Los papelitos de la rifa caen al suelo.",
          C: "Wilson ve la pistola y las tres figuras levantan las manos a la vez, como un coro ensayado. «No dispares. Lo único que llevamos son papelitos y una voz de bajo.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la pistola enseguida.", B: "Guardas la pistola enseguida.", C: "Guardas la pistola de inmediato." },
            say: { A: "Perdón. Bajen las manos. No quiero nada.", B: "Perdón, bajen las manos por favor. No quiero nada de ustedes.", C: "Perdón. Bajen las manos. No es un asalto; es un error mío." },
            reply: { A: "Inés baja las manos despacio. «¿Por qué llevas un arma?»", B: "Inés baja las manos despacio. «¿Por qué llevas un arma en un túnel, a medianoche?»", C: "Inés baja las manos con dignidad. «¿Qué lleva un arma en un túnel a medianoche? Eso sí merece una explicación.»" },
            mood: "worried", next: "pistola-pregunta",
          },
          {
            id: "ordenar",
            say: { A: "Todos al suelo. Ahora.", B: "Todos al suelo. Ahora mismo.", C: "Al suelo, los tres. Sin ruido." },
            reply: { A: "Los tres se tiran al suelo. Lucía grita pidiendo ayuda.", B: "Los tres se tiran al suelo. Lucía grita pidiendo ayuda y su voz llena el túnel.", C: "Los tres se tiran al suelo. Lucía grita pidiendo ayuda y el eco del túnel convierte el grito en sirena." },
            mood: "terror", next: "pistola-patrulla",
          },
          {
            id: "huir",
            act: { A: "Sales corriendo con la pistola.", B: "Sales corriendo del túnel con la pistola en la mano.", C: "Echas a correr hacia la salida, pistola en mano." },
            say: { A: "¡No me sigan!", B: "¡No me sigan, ninguno!", C: "¡Ni se les ocurra seguirme!" },
            reply: { A: "Los tres se quedan temblando. Inés llama a la policía.", B: "Los tres se quedan temblando en el túnel. Inés llama a la policía con el celular.", C: "Los tres quedan paralizados. Cuando recuperan el aliento, Inés marca el número de la policía con dedos temblorosos." },
            mood: "scared", end: "pistola-huyen",
          },
        ],
      },
      "pistola-pregunta": {
        who: "ines", mood: "angry",
        line: {
          A: "Inés te mira seria. «Guarda eso para siempre. Lucía está llorando. Wilson está pálido. Habla.»",
          B: "Inés te mira muy seria. «Esa cosa no es un juguete. Lucía llora, Wilson está pálido. Y tú, ¿qué explicas?»",
          C: "Inés te mira con la severidad de una directora ofendida. «Lucía llora, Wilson ha perdido el color. Aquí se desafina todo cuando aparece un arma. Explícate.»",
        },
        options: [
          {
            id: "disculpa",
            say: { A: "Perdón. Estaba asustado. No pienso usarla nunca.", B: "Perdón. Estaba asustado y reaccioné fatal. No pienso usarla nunca.", C: "Perdón. El miedo me hizo ridículo y peligroso a la vez. Jamás pensaba usarla." },
            reply: { A: "Inés asiente. «Entonces compra un número. Para tu conciencia.»", B: "Inés asiente despacio. «Entonces comprarás un número de la rifa. Para tu conciencia.»", C: "Inés asiente. «Arrepentimiento con recibo: un número de la rifa. Es lo mínimo.»" },
            mood: "worried", end: "pistola-rifa",
          },
          {
            id: "amenaza",
            say: { A: "No digan nada a la policía.", B: "No le cuenten nada a la policía, ¿entendido?", C: "Esto queda entre nosotros. Nada de policía, ¿estamos?" },
            reply: { A: "Lucía llora más fuerte. Wilson marca el número de emergencias.", B: "Lucía llora más fuerte y Wilson marca el número de emergencias sin quitarte la vista de encima.", C: "Lucía rompe a llorar y Wilson marca el número de emergencias, con su voz de bajo temblando." },
            mood: "terror", next: "pistola-patrulla",
          },
          {
            id: "dinero",
            say: { A: "Perdón. Mejor compro todos los números.", B: "Perdón por todo. Mejor les compro varios números de la rifa.", C: "Perdón. Para compensar el susto, les compro todos los números que tengan." },
            reply: { A: "Inés duda. «No queremos tu dinero. Queremos que te vayas.»", B: "Inés duda, pero niega con la cabeza. «No queremos tu dinero. Queremos que te vayas y no vuelvas con eso.»", C: "Inés niega con firmeza. «Nuestra rifa no es un rescate. Queremos que te marches, sin arma y sin dinero.»" },
            mood: "angry", end: "pistola-rifa",
          },
        ],
      },
      "pistola-patrulla": {
        who: "wilson", mood: "terror",
        line: {
          A: "Se oyen sirenas. Un coche de policía entra en el túnel. «¡Suelte el arma!»",
          B: "Las sirenas rebotan por el túnel. Un coche patrulla entra a toda velocidad. Un agente grita por el megáfono: «¡Suelte el arma!»",
          C: "Las sirenas hacen del túnel una caja de resonancia. Un coche patrulla frena entre los fluorescentes y un agente ordena por el megáfono: «¡Suelte el arma! ¡Ahora!»",
        },
        options: [
          {
            id: "soltar",
            act: { A: "Sueltas la pistola y levantas las manos.", B: "Sueltas la pistola en el suelo y levantas las manos.", C: "Dejas la pistola en el suelo y levantas las manos con calma." },
            say: { A: "¡Me rindo! ¡No quiero problemas!", B: "¡Me rindo! ¡No quiero problemas, agente!", C: "¡Me rindo! No pretendía hacer daño a nadie, agente." },
            reply: { A: "El agente te pone las esposas. Wilson suspira de alivio.", B: "El agente te esposa con cuidado. Wilson suspira, aliviado, y Lucía se seca las lágrimas.", C: "El agente te esposa con profesionalidad. Wilson exhala aliviado y Lucía se seca las lágrimas con la manga." },
            mood: "sad", end: "pistola-patrulla-fin",
          },
          {
            id: "huir",
            act: { A: "Corres hacia el fondo del túnel.", B: "Echas a correr hacia el fondo del túnel.", C: "Sales corriendo hacia el fondo oscuro del túnel." },
            say: { A: "¡No me sigan!", B: "¡No me sigan, por favor!", C: "¡No me sigan! ¡Esto no tiene que acabar así!" },
            reply: { A: "El agente grita: «¡Alto!» Otro coche te corta la salida.", B: "El agente grita: «¡Alto, policía!» Un segundo coche te corta la salida por el otro lado.", C: "El agente ruge: «¡Alto, policía!» Un segundo coche cierra la otra salida del túnel y los faros te deslumbran." },
            mood: "terror", end: "pistola-patrulla-fin",
          },
          {
            id: "explicar",
            say: { A: "Fue un error. ¡Ellos son del coro!", B: "¡Fue un error! ¡Ellos solo vendían números de una rifa!", C: "¡Fue un malentendido! Ellos son un coro benéfico; el peligroso fui yo." },
            reply: { A: "El agente baja un poco el arma. «Primero suelta la pistola y después hablas.»", B: "El agente baja un poco el arma. «Primero suelta la pistola, y luego explicas todo en comisaría.»", C: "El agente baja el arma un par de centímetros. «Pistola al suelo primero, explicaciones en comisaría después.»" },
            mood: "worried", end: "pistola-patrulla-fin",
          },
        ],
      },
      "granada-inicio": {
        who: "wilson", mood: "terror",
        line: {
          A: "Wilson ve la granada y grita: «¡Una bomba!» Lucía deja caer los papeles. Inés le grita al túnel: «¡Todos fuera!»",
          B: "Wilson ve la granada y su voz de bajo llena el túnel: «¡Una bomba!» Lucía suelta los papelitos e Inés grita hacia la salida: «¡Todos fuera, rápido!»",
          C: "Wilson ve la granada y su grito de bajo hace vibrar los fluorescentes: «¡Una bomba!» Lucía suelta la rifa e Inés dirige la evacuación como un ensayo: «¡Fuera, todos, sin empujar!»",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡No corran!", B: "¡Es de juguete! ¡Es una broma, no corran!", C: "¡Es de utilería! ¡Es una broma de pésimo gusto, no corran!" },
            reply: { A: "Nadie te escucha. Los tres corren hacia la salida gritando.", B: "Nadie te escucha. Los tres corren hacia la salida mientras Wilson sigue gritando «¡Bomba!».", C: "El eco se come tus palabras. Los tres corren hacia la salida mientras Wilson, en bajo profundo, repite «¡Bomba!»." },
            mood: "scared", next: "granada-salida",
          },
          {
            id: "tirar",
            act: { A: "Tiras la granada lejos.", B: "Lanzas la granada al fondo del túnel.", C: "Lanzas la granada al fondo del túnel, lo más lejos posible." },
            say: { A: "¡Lejos! ¡Todos al suelo!", B: "¡Lejos de nosotros! ¡Todos al suelo!", C: "¡Lejos! ¡Al suelo, todos, por favor!" },
            reply: { A: "La granada rueda. No pasa nada. Un helicóptero llega a los pocos minutos.", B: "La granada rueda por el suelo y no explota. Pocos minutos después, un helicóptero ilumina la entrada del túnel.", C: "La granada rueda hasta el fondo y no explota. Poco después, un helicóptero ilumina la boca del túnel con su foco." },
            mood: "terror", end: "granada-helicoptero",
          },
          {
            id: "cantar",
            act: { A: "Te quedas quieto, con la granada.", B: "Te quedas quieto con la granada en la mano.", C: "Te quedas inmóvil, granada en mano." },
            say: { A: "Cálmense. Cantemos todos para calmar el miedo.", B: "Cálmense. Cantemos algo todos juntos para calmar el miedo.", C: "Cálmense. En momentos así, solo una cosa ayuda: cantar juntos." },
            reply: { A: "Inés duda. Wilson empieza una nota grave. Lucía se une, temblando.", B: "Inés duda un segundo y luego asiente. Wilson arranca una nota grave y Lucía se suma, temblando.", C: "Inés duda, pero la profesional puede más que el pánico. Wilson arranca una nota grave y Lucía se suma, con voz temblorosa." },
            mood: "worried", next: "granada-salida",
          },
        ],
      },
      "granada-salida": {
        who: "ines", mood: "scared",
        line: {
          A: "Fuera del túnel, la gente mira. Inés te dice: «¿Eso es una bomba o una broma?»",
          B: "Fuera del túnel ya se ha juntado gente. Inés te encara, jadeando. «¿Eso es una bomba de verdad o una broma?»",
          C: "En la boca del túnel se agolpan curiosos. Inés te encara, sin aliento. «Necesito saber ya: ¿bomba o broma? Mis coristas tienen derecho a una respuesta.»",
        },
        options: [
          {
            id: "broma",
            say: { A: "Es una broma. Lo siento mucho a todos.", B: "Es de plástico. Fue una broma tonta. Lo siento mucho.", C: "Es de plástico. Una broma de pésimo gusto de la que me arrepiento. Lo siento." },
            reply: { A: "Wilson se ríe nervioso y compra un número de la rifa para ti. «¡Qué susto!»", B: "Wilson se ríe, nervioso. «Pues me debes un café. Y un número de la rifa, que lo necesitas.»", C: "Wilson se ríe a su pesar. «Me has quitado diez años de vida. Te cobro un café y un número de la rifa.»" },
            mood: "laugh", end: "granada-evacuacion",
          },
          {
            id: "silencio",
            act: { A: "No contestas.", B: "No contestas.", C: "Guardas un silencio ambiguo." },
            say: { A: "…", B: "…", C: "…" },
            reply: { A: "Inés llama a la policía. Un helicóptero llega.", B: "Inés llama a la policía y, minutos después, un helicóptero da vueltas sobre el túnel.", C: "Inés llama a la policía, y minutos después un helicóptero traza círculos sobre la boca del túnel." },
            mood: "terror", end: "granada-helicoptero",
          },
          {
            id: "disculpa",
            say: { A: "Es falsa. Perdón por el pánico. Ayudo a recoger los papeles.", B: "Es falsa, de plástico. Perdón por el pánico. Te ayudo a recoger los papelitos.", C: "Es falsa. Perdón por el pánico colectivo. Permítanme recoger los papelitos como penitencia." },
            reply: { A: "Lucía se agacha a recoger y se ríe de nervios. Wilson suspira.", B: "Lucía se agacha a recoger los papelitos y se ríe de nervios. Wilson suspira, aliviado.", C: "Lucía se agacha a recoger la rifa y se ríe de puros nervios. Wilson suspira como un fuelle." },
            mood: "worried", end: "granada-evacuacion",
          },
        ],
      },
      "gas-inicio": {
        who: "ines", mood: "worried",
        line: {
          A: "Inés ve el gas pimienta y levanta una mano. «Tranquilo. Es normal tener miedo en este túnel. No somos peligrosos.»",
          B: "Inés ve el gas pimienta y levanta una mano, con calma. «Tranquilo. Es normal tener miedo en un túnel oscuro. Pero no somos peligrosos, somos un coro.»",
          C: "Inés ve el gas pimienta y levanta una mano con serenidad de maestra. «Es comprensible llevar eso en un túnel a estas horas. Pero somos un coro, y lo más agresivo que tenemos es un tenor.»",
        },
        options: [
          {
            id: "razon",
            say: { A: "Tienes razón. Solo tengo miedo. Perdón.", B: "Tiene razón. Solo tengo miedo, y el túnel no ayuda. Perdón.", C: "Tiene razón. El túnel me ha puesto paranoico. Perdón." },
            reply: { A: "Inés sonríe. «Es normal. Yo también llevo uno en el bolso.»", B: "Inés sonríe con ternura. «Es normal. Yo también llevo uno en el bolso, por si acaso.»", C: "Inés abre el bolso y enseña un gas idéntico. «Es lo más sensato que se puede llevar. Yo también voy armada, de pimienta.»" },
            mood: "smile", next: "gas-charla",
          },
          {
            id: "apuntar",
            act: { A: "No bajas el gas.", B: "No bajas el gas pimienta.", C: "Mantienes el gas apuntando al grupo." },
            say: { A: "No me fío de nadie. Retrocedan.", B: "No me fío de nadie en este túnel. Retrocedan.", C: "No me fío de ningún coro a medianoche. Retrocedan todos." },
            reply: { A: "Wilson se enfada: «¡Esto es ridículo!» Los tres se van.", B: "Wilson se enfada: «¡Esto es ridículo!» Los tres dan media vuelta y se van sin decir adiós.", C: "Wilson estalla: «¡Esto es ridículo e insultante!» Los tres dan media vuelta con un silencio ofendido." },
            mood: "angry", end: "gas-tenso",
          },
          {
            id: "rociar",
            act: { A: "Aprietas el gas hacia el suelo.", B: "Aprietas el gas pimienta hacia el suelo, sin querer.", C: "Se te escapa un chorro de gas pimienta hacia el suelo." },
            say: { A: "¡Ay! ¡Perdón!", B: "¡Ay, perdón! ¡Se me escapó!", C: "¡Perdón! ¡Ha sido un accidente, lo juro!" },
            reply: { A: "Los cuatro tosen y lloran. Lucía se ríe entre lágrimas.", B: "Los cuatro tosen y lloran sin parar. Lucía se ríe entre lágrimas, pese a todo.", C: "Los cuatro tosen, lloran y se ríen a la vez. Lucía, con lágrimas rojas, declara: «Esto sí que es un número de ópera»." },
            mood: "pain", end: "gas-risa",
          },
        ],
      },
      "gas-charla": {
        who: "wilson", mood: "smile",
        line: {
          A: "Wilson se acerca. «Yo canto en un coro, pero ahora compro uno de esos. ¿Cuál es bueno?»",
          B: "Wilson se acerca con curiosidad. «Yo no me atrevía a comprar uno de esos. ¿Cuál es bueno? Salimos tarde de los ensayos.»",
          C: "Wilson se acerca, interesado. «Siempre me dije que un bajo no necesita defensa, pero a estas horas lo dudo. ¿Cuál recomiendas?»",
        },
        options: [
          {
            id: "consejo",
            say: { A: "El de bote pequeño. Y salgan siempre juntos.", B: "El de bote pequeño, que cabe en el bolso. Y salgan siempre juntos.", C: "Uno pequeño y fácil de abrir. Y, sobre todo, no salgan nunca solos del ensayo." },
            reply: { A: "Wilson lo apunta. Inés sonríe. «Gracias. Y toma un número de la rifa.»", B: "Wilson lo apunta en el celular. Inés sonríe. «Gracias por el consejo. Y llévate un número de la rifa.»", C: "Wilson lo anota con seriedad. Inés sonríe. «Consejo gratuito y útil. Te regalamos un número de la rifa.»" },
            mood: "smile", end: "gas-risa",
          },
          {
            id: "paranoia",
            say: { A: "No se fíen de nadie. Nunca.", B: "No se fíen de nadie. Ni de mí, si quieren sobrevivir.", C: "Mi consejo: no se fíen de nadie. Tampoco de mí, por supuesto." },
            reply: { A: "Lucía palidece. Los tres se despiden rápido.", B: "Lucía palidece. Los tres se despiden rápido y se alejan sin cantar.", C: "Lucía palidece y el grupo se despide con prisa, sin ninguna nota por el camino." },
            mood: "worried", end: "gas-tenso",
          },
          {
            id: "regalo",
            say: { A: "Toma el mío. Yo compro otro mañana.", B: "Toma el mío, quédatelo. Yo me compro otro mañana.", C: "Quédate con el mío: mejor en manos de un coro precavido que en las de un asustadizo." },
            reply: { A: "Wilson lo toma. «¡Gracias!» Los tres te dan un número.", B: "Wilson lo acepta, conmovido. «Gracias. Qué detalle.» Los tres te regalan un número de la rifa.", C: "Wilson lo acepta con solemnidad. «Gesto de caballero.» Los tres te regalan un número de la rifa." },
            mood: "smile", end: "gas-risa",
          },
        ],
      },
      "lapiz-inicio": {
        who: "lucia", mood: "worried",
        line: {
          A: "Lucía ve tu lápiz y se acerca tímida. «¿Tienes lápiz? Se me olvidó. Tengo que apuntar nombres para la rifa.»",
          B: "Lucía ve el lápiz en tu mano y se acerca tímida, con los papelitos. «¿Me prestas el lápiz? Se me olvidó el mío y tengo que apuntar los nombres de la rifa.»",
          C: "Lucía descubre el lápiz en tu mano y se acerca como quien encuentra una farmacia abierta. «Perdona, ¿me prestas ese lápiz? Es mi primera rifa y ya he cometido el error de olvidarlo.»",
        },
        options: [
          {
            id: "prestar",
            say: { A: "Toma. Escribe aquí mi nombre. Compro un número.", B: "Toma. Apunta mi nombre en un número. Quiero participar.", C: "Toma, con mucho gusto. Apunta mi nombre en un número: quiero entrar en la rifa." },
            reply: { A: "Lucía escribe tu nombre. «¡Gracias! Me llamo Lucía.» Inés sonríe.", B: "Lucía escribe tu nombre despacio. «Gracias, de verdad. Soy Lucía.» Inés y Wilson sonríen.", C: "Lucía escribe tu nombre con letra de colegiala. «Gracias. Soy Lucía y esto es un récord: mi primera venta.»" },
            mood: "smile", next: "lapiz-cartel",
          },
          {
            id: "dibujar",
            act: { A: "Dibujas una nota musical en un papelito.", B: "Dibujas una nota musical en un papelito de la rifa.", C: "Dibujas una nota musical en un papelito y se lo enseñas." },
            say: { A: "Mira. Para el cartel del coro.", B: "Mira, esto puede ser el logo del coro para los carteles.", C: "Mira: el logo del coro. Gratis, como todo lo bueno." },
            reply: { A: "Wilson se ríe. «¡Qué bonito!» Inés lo guarda.", B: "Wilson se ríe, encantado. «¡Qué bonito! Eso va en todos los carteles.» Inés guarda el papelito.", C: "Wilson aplaude con sus manazas. «Eso va directo al cartel.» Inés guarda el papelito como un diploma." },
            mood: "smile", next: "lapiz-cartel",
          },
          {
            id: "firmar",
            say: { A: "Firmo aquí: soy el primer cliente de la rifa.", B: "Firmo aquí abajo: soy oficialmente el primer cliente.", C: "Firmo aquí abajo, como primer cliente de la historia del coro." },
            reply: { A: "Lucía aplaude. Los tres cantan un «¡Bravo!».", B: "Lucía aplaude, emocionada. Los tres cantan un «¡Bravo!» que rebota en las paredes.", C: "Lucía aplaude, colorada. Los tres cantan un «¡Bravo!» que el túnel devuelve tres veces." },
            mood: "smile", end: "lapiz-rifa",
          },
        ],
      },
      "lapiz-cartel": {
        who: "ines", mood: "smile",
        line: {
          A: "Inés mira el papel. «Necesitamos un cartel para el concurso. ¿Nos ayudas a escribirlo?»",
          B: "Inés mira el papelito y se le ocurre algo. «Necesitamos un cartel para el concurso de coros. ¿Nos ayudas a escribir el mensaje?»",
          C: "Inés mira el papelito y se le enciende la bombilla. «Nos hace falta un cartel para el concurso nacional. ¿Nos ayudas a redactar un mensaje que convenza?»",
        },
        options: [
          {
            id: "escribir",
            say: { A: "Escribo: «Coro del barrio. Rifa solidaria. ¡Ayúdanos!».", B: "Escribo: «Coro del barrio busca viaje. Rifa solidaria. ¡Ayúdanos a cantar!».", C: "Propongo: «Un coro, una guitarra y un viaje. Tu número puede ser nuestro billete»." },
            reply: { A: "Inés lee. «¡Perfecto!» Cuelgan el cartel en la pared del túnel.", B: "Inés lee el texto en voz alta. «Perfecto.» Cuelgan el cartel en la pared del túnel.", C: "Inés lee y asiente. «Hasta suena a canción.» Cuelgan el cartel en la pared del túnel." },
            mood: "smile", end: "lapiz-cartel-fin",
          },
          {
            id: "mapa",
            say: { A: "Dibujo un mapa: aquí está el túnel y aquí la iglesia.", B: "Dibujo un mapa para que la gente llegue al ensayo del domingo.", C: "Dibujo un mapa del barrio con la ruta hasta su ensayo del domingo." },
            reply: { A: "Wilson mira el mapa. «¡Genial! La gente va a venir.»", B: "Wilson estudia el mapa. «¡Genial! Con esto viene medio barrio al ensayo.»", C: "Wilson estudia el mapa con orgullo. «Con este plano llena el aforo. Eres un genio de la orientación.»" },
            mood: "smile", end: "lapiz-rifa",
          },
          {
            id: "firma",
            say: { A: "Firmo el cartel: «Amigo del coro».", B: "Firmo el cartel como «Amigo del coro». Así vendrá más gente.", C: "Firmo el cartel como «Amigo del coro»: un aval gratuito, por si ayuda." },
            reply: { A: "Inés sonríe. «¡Gracias, amigo del coro!»", B: "Inés sonríe. «¡Gracias, amigo del coro! Ya eres uno más.»", C: "Inés sonríe, conmovida. «Amigo del coro: el mejor título honorífico que damos.»" },
            mood: "smile", end: "lapiz-cartel-fin",
          },
        ],
      },
      "libro-inicio": {
        who: "lucia", mood: "surprised",
        line: {
          A: "Lucía ve tu libro y sonríe. «¿Lees en un túnel? ¡Con esta luz! ¿Qué libro es?»",
          B: "Lucía ve tu libro y sonríe por primera vez. «¿Lees en un túnel, con esta luz? ¿Qué libro es? Yo también leo, pero en casa.»",
          C: "Lucía repara en tu libro y la timidez se le afloja. «¿Lees con este fluorescente? Eso es fe. ¿De qué trata? Yo solo leo en casa, con luz de verdad.»",
        },
        options: [
          {
            id: "regalar",
            say: { A: "Toma, es para ti. Te va a gustar.", B: "Toma, te lo regalo. Creo que te va a gustar.", C: "Te lo regalo. Algo me dice que este libro buscaba a alguien como tú." },
            reply: { A: "Lucía abraza el libro. «¡Gracias!» Inés sonríe.", B: "Lucía abraza el libro, colorada. «¡Gracias! Nadie me regala nada.» Inés sonríe.", C: "Lucía abraza el libro. «Nadie me regala nada, nunca. Gracias.» Inés sonríe desde detrás de sus gafas." },
            mood: "love", next: "libro-lectura",
          },
          {
            id: "excusa",
            say: { A: "Leo aquí porque no quiero hablar con nadie.", B: "Leo aquí porque no quería hablar con nadie. Perdón.", C: "Leo aquí para no hablar con nadie. Perdón, es mi forma de ser antisocial." },
            reply: { A: "Wilson se ríe. «¡Qué sincero!» Los tres cantan una nota para ti.", B: "Wilson se ríe a carcajadas. «¡Qué sincero!» Los tres cantan una nota larga para ti.", C: "Wilson suelta una risa grave. «Cuanta honestidad.» Los tres afinan una nota larga en tu honor." },
            mood: "laugh", end: "libro-cancion",
          },
          {
            id: "leer",
            act: { A: "Lees una frase en voz alta.", B: "Lees una frase del libro en voz alta.", C: "Lees en voz alta una frase del libro." },
            say: { A: "«La música es la forma más bonita de hablar.»", B: "«La música es la manera más hermosa de decir lo que no se dice.»", C: "«La música es lo que se dice cuando las palabras ya no alcanzan.»" },
            reply: { A: "Los tres se quedan callados. Inés dice: «Eso es nuestro coro».", B: "Los tres se quedan en silencio, conmovidos. Inés murmura: «Eso es exactamente nuestro coro».", C: "Los tres se quedan en silencio, tocados. Inés murmura: «Eso es lo que somos, sin saberlo».", },
            mood: "love", next: "libro-lectura",
          },
        ],
      },
      "libro-lectura": {
        who: "ines", mood: "love",
        line: {
          A: "Inés mira el libro. «¿Lo leemos juntos? Podemos cantar un poema.»",
          B: "Inés mira el libro con ternura. «¿Y si lo leemos juntos, en voz alta? Podemos hacer un poema cantado.»",
          C: "Inés mira el libro con ojos de directora. «¿Y si convertimos una página en una canción? Un poema a tres voces suena mejor que cualquier rifa.»",
        },
        options: [
          {
            id: "si",
            say: { A: "¡Sí! Vamos a probar.", B: "¡Sí! Vamos a probar ahora mismo.", C: "¡Sí! Pruebe, maestra. El túnel está de su parte." },
            reply: { A: "Los tres cantan el poema. Todo el túnel aplaude.", B: "Los tres cantan el poema a tres voces. La gente del túnel aplaude.", C: "Los tres cantan el poema con una armonía que hace callar a los fluorescentes. El túnel entero aplaude." },
            mood: "love", end: "libro-cancion",
          },
          {
            id: "rifa",
            say: { A: "Antes, quiero un número de la rifa.", B: "Antes de cantar, quiero un número de la rifa.", C: "Con una condición: un número de la rifa para el lector." },
            reply: { A: "Inés se ríe y te da el número 47. «¡Trato hecho!»", B: "Inés se ríe y te da el número 47. «Trato hecho. Y hoy cantamos gratis.»", C: "Inés se ríe y te entrega el 47. «Trato hecho. Pero la canción corre por la casa.»" },
            mood: "smile", end: "libro-cancion",
          },
          {
            id: "no",
            say: { A: "Hoy no. Solo quiero leer en silencio.", B: "Hoy mejor no. Prefiero leer en silencio, si no les importa.", C: "Hoy prefiero la lectura silenciosa. Pero gracias: la propuesta es preciosa." },
            reply: { A: "Inés sonríe. «Está bien. Otro día.» Los tres se van cantando bajito.", B: "Inés sonríe con comprensión. «Está bien. Otro día.» Los tres se van cantando bajito por el túnel.", C: "Inés asiente con elegancia. «Otro día, entonces.» Los tres se alejan tarareando algo que no quiere molestar." },
            mood: "neutral", end: "libro-silencio",
          },
        ],
      },
      "corazon-inicio": {
        who: "wilson", mood: "smitten",
        line: {
          A: "Wilson te ve y se queda quieto. Sonríe. Inés y Lucía también. «¡Hola! ¡Qué cara tan amable! Esto merece una canción.»",
          B: "Wilson te ve y su voz de bajo se vuelve dulce. Inés y Lucía sonríen a la vez. «Hola. Qué cara tan amable en un túnel tan feo. Esto merece una serenata.»",
          C: "Wilson te ve y su voz de barítono se ablanda hasta casi ronronear. Inés y Lucía sonríen. «Qué rostro amable para un túnel tan hostil. Esto pide una serenata, no una rifa.»",
        },
        options: [
          {
            id: "cantar",
            say: { A: "¡Sí! Cántenme algo, por favor.", B: "¡Sí, por favor! Cántenme algo bonito.", C: "Acepto encantado: una serenata a tres voces para un desconocido, qué lujo." },
            reply: { A: "Los tres cantan un bolero. El túnel se llena de gente que aplaude.", B: "Los tres cantan un bolero a tres voces. La gente se para y aplaude.", C: "Los tres atacan un bolero a tres voces que convierte el túnel en teatro. Desconocidos se paran a aplaudir." },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "lucia",
            say: { A: "Lucía, ¿cantas tú sola para mí?", B: "Lucía, ¿te animas a cantar tú sola para mí?", C: "Lucía, hazme el honor: un solo tuyo, aunque sea corto." },
            reply: { A: "Lucía se pone roja. Canta una nota muy suave. Todos aplauden.", B: "Lucía se pone roja y canta una nota muy suave que llena el túnel. Todos aplauden.", C: "Lucía se sonroja, cierra los ojos y canta una nota limpia que hace temblar el túnel. Inés lloraría si no estuviera orgullosa." },
            mood: "smitten", next: "corazon-ternura",
          },
          {
            id: "abrazo",
            act: { A: "Abrazas a los tres.", B: "Abrazas a los tres a la vez.", C: "Abrazas a los tres con los brazos bien abiertos." },
            say: { A: "Gracias. Me asusté por el túnel. Ahora estoy bien.", B: "Gracias. Me asusté por el túnel, pero con ustedes ya estoy mejor.", C: "Gracias. Llegué con miedo y me voy con una orquesta. Eso es lo que hace el cariño." },
            reply: { A: "Los tres te abrazan también. Inés tiene lágrimas en los ojos.", B: "Los tres te devuelven el abrazo. Inés tiene los ojos húmedos.", C: "Los tres te devuelven el abrazo en bloque. Inés se quita las gafas para secarse los ojos." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-ternura": {
        who: "lucia", mood: "love",
        line: {
          A: "Lucía te mira con ojos brillantes. «Nunca canto sola. Pero contigo me atrevo. Gracias.»",
          B: "Lucía te mira con ojos brillantes. «Nunca me atrevo a cantar sola. Contigo me salió. Gracias por escucharme.»",
          C: "Lucía te mira con los ojos brillantes. «Llevo años sin atreverme a cantar sola. Tú has hecho que el túnel suene a escenario. Gracias.»",
        },
        options: [
          {
            id: "beso",
            act: { A: "Le das un beso en la mejilla.", B: "Le das un beso en la mejilla.", C: "Le das un beso suave en la mejilla." },
            say: { A: "Cantas muy bien. Sigue cantando.", B: "Cantas precioso. No dejes de cantar nunca.", C: "Cantas de maravilla. Prométeme que no dejarás que el miedo te silencie." },
            reply: { A: "Lucía se pone roja. Inés y Wilson aplauden.", B: "Lucía se pone roja hasta las orejas. Inés y Wilson aplauden.", C: "Lucía se pone roja hasta las trenzas. Inés y Wilson aplauden como en un estreno." },
            mood: "smitten", end: "corazon-beso",
          },
          {
            id: "rifa",
            say: { A: "¿Me vendes un número de la rifa? Quiero ayudar.", B: "¿Me vendes un número de la rifa? Quiero ayudar al coro.", C: "Véndeme un número de la rifa. Un coro así merece viajar a ese concurso." },
            reply: { A: "Lucía te da el número 47. «¡Mi primera venta!» Todos cantan.", B: "Lucía te entrega el 47 con orgullo. «¡Mi primera venta!» Todos cantan.", C: "Lucía te entrega el 47 con las dos manos. «Primera venta de mi vida.» Los tres cantan para celebrarlo." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "consolar",
            say: { A: "¿Por qué tienes tanto miedo a cantar sola?", B: "¿Por qué te da tanto miedo cantar sola? Cuéntame.", C: "¿Qué te da miedo exactamente cuando cantas sola? Me gustaría entenderlo." },
            reply: { A: "Lucía baja la mirada. «Mi voz es rara.» Inés la abraza.", B: "Lucía baja la mirada. «Pienso que mi voz es rara.» Inés la abraza y le dice que es preciosa.", C: "Lucía baja la mirada. «Me han dicho siempre que mi voz es distinta.» Inés la abraza y le asegura que distinta es otra palabra para única." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {

      "cuchillo-policia": { text: { A: "Llegan dos policías. Te quitan el cuchillo. A Wilson, la navaja. Lucía no deja de llorar.", B: "Llegan dos policías corriendo. Te quitan el cuchillo y a Wilson la navaja. Lucía sigue llorando mientras todos explican su versión.", C: "Dos policías irrumpen en el túnel y confiscan el cuchillo y la navaja. Lucía no deja de llorar; Inés dicta la versión del coro con voz de directora." }, change: "policia", recap: "Un duelo de cuchillos en el túnel terminó con la policía." },
      "cuchillo-vendaje": { text: { A: "Inés venda la mano de Wilson. Nadie dice nada del cuchillo. Tú lo guardas y te vas.", B: "Inés venda la mano de Wilson con su pañuelo. Nadie menciona ya el cuchillo; tú lo guardas, pides perdón y te vas.", C: "Inés venda la mano de Wilson con su pañuelo. Nadie menciona ya la hoja; tú la guardas, pides perdón y te retiras en un silencio muy largo." }, change: "se-va", recap: "Un corte pequeño de un duelo de cuchillos acabó con un pañuelo y disculpas." },
      "cuchillo-tenso": { text: { A: "Nadie canta. El coro se va. Tú te quedas solo con el cuchillo y el eco.", B: "El coro se aleja sin cantar. Te quedas solo en el túnel, con el cuchillo en el bolsillo y el eco en los oídos.", C: "El coro se retira sin una sola nota. Te quedas con el cuchillo en el bolsillo y un eco que repite lo que casi pasó." }, change: "enojado", recap: "Un cuchillo dejó al coro del túnel sin canciones." },
      "pistola-huyen": { text: { A: "La policía llega. Los tres cuentan que un hombre con una pistola corrió por el túnel.", B: "La policía llega al túnel. Los tres cuentan, todavía temblando, que un hombre con una pistola salió corriendo.", C: "La policía llega al túnel. Los tres declaran, aún temblando, que un hombre armado huyó entre los fluorescentes." }, change: "huye", recap: "Huiste del túnel con una pistola y el coro llamó a la policía." },
      "pistola-rifa": { text: { A: "Compras el número 47. Inés lo guarda en su bolso. Todos están serios.", B: "Compras el número 47. Inés guarda el dinero sin sonreír. Los tres se alejan despacio, sin cantar.", C: "Compras el 47. Inés guarda el dinero sin una sonrisa. El coro se aleja despacio, con la guardia alta y la voz baja." }, change: "se-va", recap: "Te disculparon por la pistola a cambio de un número de la rifa." },
      "pistola-patrulla-fin": { text: { A: "La policía te lleva en el coche. Wilson y las dos mujeres declaran en el túnel.", B: "La policía te lleva en el coche patrulla. Wilson, Inés y Lucía declaran en el túnel. Nadie canta.", C: "La policía te sube al coche patrulla. El coro declara en el túnel; nadie canta, y el eco se queda con las sirenas." }, change: "policia", recap: "La pistola trajo un coche patrulla al túnel." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina el túnel. La policía lo cierra. El coro llora y ríe a la vez.", B: "Un helicóptero ilumina la boca del túnel y la policía lo cierra al tráfico. El coro llora y ríe a la vez, abrazado.", C: "Un helicóptero baña el túnel de luz blanca mientras la policía lo precinta. El coro llora y ríe en un abrazo de supervivientes." }, change: "helicoptero", recap: "La granada trajo un helicóptero al túnel." },
      "granada-evacuacion": { text: { A: "El túnel se vacía. Compras un número y tomas un café con el coro. Ríen mucho.", B: "El túnel se vacía en dos minutos. Terminas comprando un número y tomando un café con el coro, que ya se ríe del susto.", C: "El túnel queda desierto en dos minutos. Acabas comprando un número y compartiendo café con el coro, que ya convierte el susto en anécdota." }, change: "huye", recap: "Tu granada vació el túnel, pero se arregló con un café." },
      "gas-risa": { text: { A: "Los cuatro se ríen con los ojos rojos. Inés te da un número de la rifa.", B: "Los cuatro se ríen con los ojos rojos y llorosos. Inés te regala un número de la rifa por haber sido tan sincero.", C: "Los cuatro ríen con los ojos en carne viva. Inés te regala un número de la rifa: el precio de la honestidad." }, change: "sonrie", recap: "Hablaste de gas pimienta con el coro y acabaron riéndose." },
      "gas-tenso": { text: { A: "El coro se va sin cantar. Tú te quedas con el gas en la mano y mucho silencio.", B: "El coro se va sin cantar. Te quedas con el gas en la mano y un silencio que el eco no se atreve a llenar.", C: "El coro se marcha sin una nota. Te quedas con el gas en la mano y un silencio que ni el eco se atreve a llenar." }, change: "enojado", recap: "El gas pimienta dejó al coro sin canción." },
      "lapiz-rifa": { text: { A: "Tu nombre queda escrito en un número de la rifa. El coro canta para ti.", B: "Tu nombre queda escrito en un número de la rifa. El coro canta para ti una nota y se despide.", C: "Tu nombre queda escrito en el 47 de la rifa. El coro te despide con un acorde y la promesa de una guitarra." }, change: "sonrie", recap: "Apuntaste tu nombre en la rifa con tu lápiz." },
      "lapiz-cartel-fin": { text: { A: "El cartel queda en la pared del túnel. Lucía lo mira con orgullo.", B: "El cartel queda colgado en la pared del túnel. Lucía lo mira con orgullo y Wilson canta una nota.", C: "El cartel queda en la pared como un mural. Lucía lo contempla con orgullo y Wilson le dedica una nota grave." }, change: "luz", recap: "Escribiste un cartel con tu lápiz para el coro." },
      "libro-silencio": { text: { A: "Los tres se van cantando bajito. Tú sigues leyendo en el túnel.", B: "Los tres se alejan tarareando. Tú sigues leyendo, a la luz parpadeante, ahora en paz.", C: "Los tres se alejan tarareando algo discreto. Tú sigues con tu libro bajo el fluorescente, que parece parpadear con más respeto." }, change: "se-sienta", recap: "Preferiste leer en silencio en el túnel." },
      "libro-cancion": { text: { A: "Los tres cantan un poema de tu libro. El túnel aplaude.", B: "Los tres cantan un poema de tu libro, a tres voces. El túnel entero aplaude.", C: "Los tres cantan un poema de tu libro con armonía de catedral. El túnel entero aplaude y el fluorescente deja de parpadear." }, change: "baila", recap: "El coro cantó un poema de tu libro." },
      "corazon-beso": { text: { A: "Los tres cantan un bolero. Lucía te da un beso. El túnel aplaude.", B: "Los tres te cantan un bolero. Al terminar, Lucía te da un beso en la mejilla. El túnel aplaude.", C: "Los tres te cantan un bolero a capela. Al terminar, Lucía te da un beso fugaz en la mejilla y el túnel estalla en aplausos." }, change: "beso", recap: "El coro te cantó una serenata y Lucía te dio un beso." },
      "corazon-abrazo": { text: { A: "Los tres te abrazan. Cantan un bolero. Inés llora de alegría.", B: "Los tres te abrazan y cantan un bolero bajito. Inés llora de alegría.", C: "Los tres te abrazan y cantan un bolero bajito. Inés llora de alegría y declara el túnel sala de conciertos oficial." }, change: "abraza", recap: "El coro te abrazó y te cantó un bolero." },
      serenata: { text: { A: "Los tres cantan una canción para ti. La gente del túnel aplaude.", B: "Los tres te cantan un bolero. La gente que pasa por el túnel se para y aplaude.", C: "Te cantan un bolero a tres voces. El túnel se llena de eco y de desconocidos aplaudiendo." }, change: "baila", recap: "El coro del barrio te cantó una canción en el túnel." },
      comprar: { text: { A: "Tienes el número 47. Los tres te dicen adiós cantando.", B: "Te guardas el número 47. El coro se aleja cantando por el túnel.", C: "Te guardas el número 47. El coro se aleja por el túnel, cantando tu buena suerte." }, change: "sonrie", recap: "Compraste un número de la rifa del coro." },
      sinrifa: { text: { A: "El coro se va a buscar más gente. Te saludan.", B: "El coro sigue su camino por el túnel buscando compradores. Inés te saluda con la mano.", C: "El coro sigue su ronda por el túnel. Inés te despide con un gesto de directora de orquesta." }, change: "se-va", recap: "No compraste un número, pero conociste al coro." },
      eco: { text: { A: "Cantan y la luz del túnel deja de parpadear. ¡Qué raro!", B: "Cantan un acorde y, justo entonces, el fluorescente deja de parpadear. Todos se miran.", C: "Cantan un acorde y el fluorescente, por fin, deja de parpadear. Nadie lo explica; nadie quiere hacerlo." }, change: "luz", recap: "El coro cantó y la luz del túnel dejó de parpadear." },
      huyen: { text: { A: "Los tres se van corriendo. En el suelo hay números de la rifa.", B: "Los tres salen corriendo por el túnel. En el suelo quedan unos números de la rifa.", C: "El coro desaparece a la carrera. Solo quedan en el suelo unos papelitos y un eco muy largo." }, change: "corre", recap: "Asustaste al coro del barrio en el túnel." },
      tenso: { text: { A: "El coro se va. Nadie canta.", B: "El coro se aleja en silencio. Por primera vez esta noche, nadie canta.", C: "El coro se marcha sin cantar. El silencio del túnel pesa más que cualquier eco." }, change: "enojado", recap: "Te disculpaste a medias con el coro del barrio." },
    },
    speak: {
      A1: "¿Qué música te gusta cantar?",
      A2: "¿Dónde cantaste la última vez?",
      B1: "¿Qué lugares de tu ciudad te dan miedo de noche, y por qué?",
      B2: "¿Cómo reaccionarías si unos desconocidos te llamaran en un lugar oscuro?",
      C1: "¿En qué se diferencia la intuición del prejuicio cuando sientes peligro?",
      C2: "¿Qué dice de una comunidad la forma en que reúne dinero para sus proyectos?",
    },

    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Qué haces cuando otra persona saca un cuchillo?", B: "¿Cómo reaccionas cuando alguien responde a tu miedo con más miedo?", C: "¿Qué dice de nosotros que dos personas asustadas puedan acabar peor que dos peligrosas?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Obedeces siempre si alguien te da una orden con miedo?", B: "¿Qué harías si un desconocido te apuntara en un lugar oscuro?", C: "¿Quién manda en una situación en la que el miedo decide por todos?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Qué haces si todo el mundo corre a tu lado?", B: "¿Alguna vez saliste corriendo sin saber por qué?", C: "¿Cuánto cuesta una broma que sale mal en un lugar lleno de gente?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Llevas algo para defenderte de noche?", B: "¿Cuándo la prevención se convierte en desconfianza?", C: "¿Cómo se defiende uno sin convertir en enemigo a quien solo pasaba por allí?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Prestas tu lápiz a otras personas?", B: "¿Qué cartel o nota hecha a mano te acuerdas de haber leído en tu barrio?", C: "¿Qué mensaje escribirías para convencer a un barrio de ayudar a un coro?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Qué libro le regalas a una persona tímida?", B: "¿Qué poema o frase de un libro te gustaría escuchar cantada?", C: "¿Qué lectura te parece lo bastante buena como para convertirse en canción?" } },
      corazon: { start: "corazon-inicio", fx: "beso", speak: { A: "¿Quién te canta una canción cuando estás triste?", B: "¿Alguna vez un grupo de desconocidos te hizo sentir bienvenido?", C: "¿Qué gestos de ternura aceptas fácilmente de un desconocido y cuáles no?" } },
    },
  },

  // ─────────────────────────────────────────────────────────────── ESCENA 4
  {
    id: "estacion-ultimo",
    kind: "escena",
    district: "estacion",
    title: "El último tren",
    verb: "AYUDAR",
    goal: "Proponer opciones con usted, aconsejar, aceptar o rechazar un ofrecimiento con cortesía y tranquilizar a una persona mayor.",
    cast: [
      {
        id: "amparo", name: "Doña Amparo", role: "Señora que perdió el último tren",
        age: "old", body: "f", build: "average", height: 1.55,
        hair: "bun", hairColor: "#e8e4dc", skin: "#c99a78",
        top: "coat", topColor: "#8a2e3b", bottom: "skirt", bottomColor: "#3b3b45",
        extras: ["bag", "glasses", "umbrella"], pose: "sit", props: ["bench", "cookie-tin"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "amparo", mood: "sad",
        line: {
          A: "Una señora mayor mira el andén vacío. «¡Ay, no! Se fue el último tren. ¿Y ahora qué hago?»",
          B: "Una señora mayor ve alejarse las luces rojas del último tren. «¡Ay, no, no, no! Era el último. ¿Y ahora cómo vuelvo a casa?»",
          C: "Una señora mayor se queda mirando cómo el último tren se lleva sus planes. «Setenta y dos años sin perder un tren. Y hoy, mira tú.»",
        },
        options: [
          {
            id: "taxi",
            say: { A: "Puede tomar un taxi. La parada está allí.", B: "Si quiere, puede tomar un taxi. La parada está justo ahí fuera.", C: "Siempre queda el taxi, señora. La parada está a dos pasos." },
            reply: { A: "La señora niega. «¿Un taxi? ¡Es muy caro! Vivo lejos.»", B: "La señora hace cuentas con los dedos. «¿Taxi? Vivo a cuarenta minutos. ¡Me cuesta media pensión!»", C: "La señora te mira por encima de las gafas. «¿Taxi hasta Villanueva? Con lo que cuesta, me compro el tren.»" },
            mood: "worried", next: "opciones",
          },
          {
            id: "familia",
            say: { A: "¿Tiene familia? ¿Puede llamar a alguien?", B: "¿Tiene a alguien a quien llamar? ¿Un hijo, una amiga?", C: "¿No hay nadie a quien le encantaría que lo despertaran a esta hora?" },
            reply: { A: "«Mi hijo, Javier. Pero es tarde. No quiero molestar.»", B: "«Mi hijo Javier. Pero son las doce, y mañana trabaja. No quiero molestarlo.»", C: "La señora se ríe. «Mi hijo Javier. Encantarle, no sé. Despertarse, seguro que sí.»" },
            mood: "worried", next: "opciones",
          },
          {
            id: "nocturno",
            say: { A: "¿Hay un autobús por la noche?", B: "¿Sabe si hay algún autobús nocturno hasta su pueblo?", C: "¿Y el autobús nocturno? No es glamuroso, pero llega." },
            reply: { A: "«No sé. Yo nunca salgo tan tarde.»", B: "«Ni idea. Yo nunca salgo tan tarde. Hoy fue una excepción.»", C: "«Glamuroso no es nada a esta hora», dice ella. «No sé si hay. Yo a estas horas suelo estar soñando.»" },
            mood: "neutral", next: "opciones",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y miras el panel de horarios.", B: "Miras el panel de horarios y sacas el lápiz.", C: "Te acercas al panel de horarios con el lápiz listo." },
            say: { A: "Le escribo la hora del autobús nocturno.", B: "Le apunto los horarios del autobús nocturno, por si acaso.", C: "Le copio los horarios del nocturno. Con letra grande, prometido." },
            reply: { A: "La señora lee el papel. «¡A la una! Gracias.»", B: "La señora lee el papel con atención. «A la una menos cuarto. Bueno, algo es algo.»", C: "La señora sostiene el papel como un tesoro. «Letra grande. Usted piensa en todo.»" },
            mood: "smile", next: "opciones",
          },
          libro: {
            act: { A: "La señora ve tu libro.", B: "La señora se fija en el libro que llevas.", C: "La señora mira de reojo tu libro." },
            say: { A: "¿Le gusta leer? Puede leer mientras espera.", B: "¿Le gusta leer? Se lo presto mientras pensamos qué hacer.", C: "Si la espera se hace larga, aquí tiene compañía de papel." },
            reply: { A: "La señora sonríe. «¡Me encanta leer! Gracias.»", B: "La señora lo toma, contenta. «¡Este lo leí! El final es tremendo. No te lo cuento.»", C: "La señora hojea el libro. «Lo leí. El final te va a enfadar mucho. Tranquilo, no digo nada.»" },
            mood: "smile", next: "opciones",
          },
          gas: {
            act: { A: "La señora se levanta rápido. Sacas el gas pimienta.", B: "La señora se levanta de golpe y tú, por reflejo, sacas el gas pimienta.", C: "La señora se levanta de un salto y tú, por puro reflejo, sacas el gas pimienta." },
            say: { A: "¡Uy! Perdón. ¿Está bien?", B: "¡Uy! Perdón, me asusté. ¿Está bien?", C: "Perdón, ha sido un acto reflejo. ¿Está usted bien?" },
            reply: { A: "La señora saca otro gas del bolso. «¡Yo también tengo uno! ¡Ja!»", B: "La señora saca del bolso un gas pimienta idéntico. «¡Mira! Mi hijo me obliga a llevarlo.»", C: "La señora saca del bolso uno igual. «Somos dos precavidas, entonces. Mi hijo insiste en que lo lleve.»" },
            mood: "surprised", next: "opciones",
          },
          granada: {
            act: { A: "Sacas la granada del bolsillo.", B: "Buscas un pañuelo y sacas la granada.", C: "Buscas un pañuelo para ofrecérselo y sale la granada." },
            say: { A: "Perdón… ¿Quiere un pañuelo?", B: "Perdón, buscaba un pañuelo para usted.", C: "Disculpe. Le iba a ofrecer un pañuelo, no esto." },
            reply: { A: "La señora se enfada. «¡Guarda eso ahora mismo!»", B: "La señora te mira muy seria. «¡Pero qué cosas llevas! ¡Guarda eso ahora mismo!»", C: "La señora te mira como miraba a sus alumnos en 1980. «Guárdeme eso ahora mismo.»" },
            mood: "angry", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al sentarte a su lado, se ve tu pistola.", C: "Al sentarte en el banco, la pistola asoma sin pedir permiso." },
            say: { A: "¿Puedo sentarme aquí?", B: "¿Le importa si me siento un momento?", C: "¿Me permite que le haga compañía?" },
            reply: { A: "La señora mira la pistola. «¿Qué es eso? ¡Guárdalo!»", B: "La señora frunce el ceño. «¿Eso es lo que creo? ¡Qué juventud! ¡Guárdalo!»", C: "La señora mira la pistola y luego a ti. «Compañía, sí. Pero esa amiga suya se queda fuera.»" },
            mood: "angry", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo. La señora tiene una caja que no abre.", B: "La señora no puede abrir una caja con cinta. Sacas el cuchillo.", C: "La señora pelea con una caja precintada. Sacas el cuchillo para echarle una mano." },
            say: { A: "¿Le ayudo? Corto la cinta.", B: "¿Me deja? Le corto la cinta con cuidado.", C: "Permítame. Esa cinta se ha hecho fuerte, pero tiene los días contados." },
            reply: { A: "La caja se abre. «¡Gracias! Son alfajores. ¿Quieres uno?»", B: "La caja se abre. Dentro hay alfajores. «¡Gracias! Los hice yo. ¿Quieres uno?»", C: "La caja se abre y aparecen alfajores perfectos. «Caseros. Tome uno, que se lo ha ganado.»" },
            mood: "smile", next: "alfajores",
          },
          corazon: {
            act: HEART,
            say: { A: "No se preocupe. Vamos a buscar una solución juntos.", B: "No se preocupe, de verdad. Entre los dos lo solucionamos.", C: "Tranquila, que esto tiene arreglo. Y mientras lo buscamos, no está sola." },
            reply: { A: "La señora sonríe. «Eres un sol. Me llamo Amparo. ¿Quieres un alfajor?»", B: "La señora sonríe y abre una caja. «Qué amable. Soy Amparo. ¿Un alfajor? Los hice yo.»", C: "La señora se ilumina y saca una caja del bolso. «Amparo, para servirle. Un alfajor casero ayuda a pensar.»" },
            mood: "love", next: "alfajores",
          },
        },
      },
      opciones: {
        who: "amparo", mood: "worried",
        line: {
          A: "Doña Amparo mira su bolso. «Tengo poco dinero. ¿Taxi, hotel o llamo a mi hijo?»",
          B: "Doña Amparo cuenta el dinero del monedero. «No tengo mucho. ¿Qué hago: taxi, hotel o llamo a mi hijo?»",
          C: "Doña Amparo revisa el monedero con resignación. «Las opciones son tres y ninguna me gusta. Decida usted, que yo ya estoy cansada.»",
        },
        options: [
          {
            id: "taxi",
            say: { A: "Le busco un taxi. Pregunto el precio antes.", B: "Le busco un taxi y pregunto el precio antes, para que no haya sorpresas.", C: "Yo negocio el taxi. Cerramos el precio antes de subir, sin sorpresas." },
            reply: { A: "Doña Amparo sonríe. «Bueno. Si no es muy caro, sí.»", B: "«Si me lo dejan a buen precio, de acuerdo», dice Doña Amparo, ya de pie.", C: "Doña Amparo se pone de pie, decidida. «Negociador. Me gusta. Adelante.»" },
            mood: "smile", end: "taxi",
          },
          {
            id: "hotel",
            say: { A: "Hay un hotel barato enfrente. Mañana toma el primer tren.", B: "Enfrente hay un hotel barato. Puede dormir allí y tomar el primer tren.", C: "Enfrente hay un hotelito modesto. Una noche allí y el primer tren de la mañana." },
            reply: { A: "Doña Amparo piensa. «Un hotel… ¡Como en las vacaciones! Bueno.»", B: "Doña Amparo se ríe. «¿Un hotel? Hace veinte años que no duermo en uno. ¡Qué aventura!»", C: "«Un hotel, a mi edad, sin avisar a nadie», dice Doña Amparo. «Qué escándalo. Me encanta.»" },
            mood: "smile", end: "hotel",
          },
          {
            id: "hijo",
            say: { A: "Llame a su hijo. Seguro que quiere saberlo.", B: "Llame a su hijo. Estoy seguro de que prefiere saberlo.", C: "Llame a Javier. Le aseguro que preferirá un mal despertar a un susto mañana." },
            reply: { A: "Doña Amparo llama. «¿Javier? Soy mamá. Se me fue el tren…»", B: "Doña Amparo marca el número. «¿Javier? Soy mamá. No, no pasa nada grave, pero…»", C: "Doña Amparo suspira y marca. «¿Javier? Mamá. No te asustes. Bueno, un poquito sí.»" },
            mood: "neutral", end: "hijo",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Usted no molesta. ¿Por qué está aquí tan tarde?", B: "Usted no molesta a nadie. ¿Y qué hacía por aquí tan tarde?", C: "Usted no molesta nunca. Pero tengo curiosidad: ¿qué la tuvo en la ciudad hasta medianoche?" },
            reply: { A: "Doña Amparo sonríe. «¡Fui a mi primera clase de tango! A los setenta y dos años.»", B: "Doña Amparo se pone colorada. «Fui a mi primera clase de tango. Y después nos quedamos charlando…»", C: "Doña Amparo baja la voz, pícara. «Primera clase de tango. A los setenta y dos. Se me fue el tiempo bailando.»" },
            mood: "love", next: "alfajores",
          },
        },
      },
      alfajores: {
        who: "amparo", mood: "smile",
        line: {
          A: "Doña Amparo abre una caja de alfajores. «Toma. Con dulce de leche. Los hice yo.»",
          B: "Doña Amparo te ofrece la caja de alfajores. «Toma, toma. Con dulce de leche. Un alfajor siempre ayuda a pensar.»",
          C: "Doña Amparo te pone la caja de alfajores delante con autoridad de abuela. «Primero un alfajor. Luego decidimos. En ese orden.»",
        },
        options: [
          {
            id: "aceptar",
            say: { A: "¡Gracias! Están riquísimos. ¿Esperamos el autobús nocturno juntos?", B: "¡Qué ricos! Gracias. ¿Esperamos juntos el autobús nocturno?", C: "Esto es delicioso. Le propongo algo: esperamos juntos el nocturno y me cuenta su vida." },
            reply: { A: "Doña Amparo sonríe. «¡Sí! Con compañía es mejor.»", B: "«¡Encantada!», dice Doña Amparo. «Con compañía, la espera es más corta.»", C: "Doña Amparo se acomoda en el banco. «Mi vida da para tres nocturnos. Siéntese.»" },
            mood: "smile", end: "nocturno",
          },
          {
            id: "rechazar",
            say: { A: "Gracias, pero no como dulce. ¿Llamamos a su hijo?", B: "Muchas gracias, pero no puedo comer dulce. ¿Y si llamamos a su hijo?", C: "Me duele decirlo, pero no puedo con el azúcar. ¿Llamamos a Javier mientras tanto?" },
            reply: { A: "«¡Más para mí!», dice Doña Amparo, y llama a su hijo.", B: "«Pues más para mí», dice Doña Amparo, riéndose. Saca el teléfono y llama a su hijo.", C: "«Una pena; usted se lo pierde», dice Doña Amparo, y marca el número de Javier." },
            mood: "smile", end: "hijo",
          },
          {
            id: "trato",
            say: { A: "Acepto uno si usted acepta un taxi.", B: "Acepto un alfajor si usted acepta que le pida un taxi.", C: "Le propongo un trato: yo acepto un alfajor y usted acepta un taxi." },
            reply: { A: "Doña Amparo se ríe. «¡Trato hecho!»", B: "Doña Amparo se ríe. «¡Qué listo! Bueno, trato hecho.»", C: "Doña Amparo entrecierra los ojos. «Usted negocia como mi difunto marido. Trato hecho.»" },
            mood: "smile", end: "taxi",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Son los mejores alfajores del mundo. ¿Me da la receta?", B: "Son los mejores alfajores que probé en mi vida. ¿Me da la receta?", C: "No exagero: estos alfajores deberían estar en un museo. ¿Comparte la receta?" },
            reply: { A: "Doña Amparo habla bajito. «El secreto es un poco de limón. ¡Mi hijo no lo sabe!»", B: "Doña Amparo baja la voz. «El secreto es ralladura de limón. Ni mi hijo lo sabe.»", C: "Doña Amparo mira a los lados y susurra. «Ralladura de limón. Si se lo cuenta a alguien, lo desheredo.»" },
            mood: "love", end: "receta",
          },
        },
      },
      calmar: {
        who: "amparo", mood: "angry",
        line: {
          A: "La señora te mira muy seria. «¿Qué es eso? ¡Guárdalo ya!»",
          B: "La señora te mira por encima de las gafas, muy seria. «Guarda eso ahora mismo, que no estamos en una película.»",
          C: "La señora te mira por encima de las gafas, con la severidad de cuarenta años dando clase. «Guárdelo. Ya.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón, señora. Ya está guardado.", B: "Perdone, señora. Ya está guardado. Fue una tontería.", C: "Tiene toda la razón. Guardado. Y perdone el espectáculo." },
            reply: { A: "La señora asiente. «Así me gusta.»", B: "La señora asiente, todavía seria. «Así me gusta. Ahora, ayúdame a pensar.»", C: "«Disculpado», dice la señora. «Ahora use esa cabeza para algo útil, que a mí se me fue un tren.»" },
            mood: "neutral", next: "opciones",
          },
          {
            id: "explicar",
            say: { A: "No es peligroso… Bueno, es complicado.", B: "No es lo que parece. Bueno, es complicado de explicar.", C: "Le juro que tiene una explicación. Larga, pero la tiene." },
            reply: { A: "La señora llama al guardia. «¡Guardia! ¡Venga aquí!»", B: "La señora se levanta y llama al guardia de la estación. «¡Guardia! ¡Aquí hay alguien muy raro!»", C: "«Pues se la explica a él», dice la señora, y llama al guardia con un silbido impresionante." },
            mood: "angry", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Mejor me voy.", B: "Perdone. Creo que es mejor que me vaya.", C: "Perdone la molestia. Me retiro." },
            reply: { A: "La señora toma su bolso y se va.", B: "La señora toma su bolso y se aleja hacia la salida, sin mirarte.", C: "La señora agarra el bolso y el paraguas y se marcha con una dignidad impecable." },
            mood: "sad", end: "sola",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Tiene razón. Perdón. Usted es como mi abuela.", B: "Tiene razón, perdóneme. Me recuerda mucho a mi abuela.", C: "Perdone. Me acaba de regañar exactamente igual que mi abuela." },
            reply: { A: "La señora se ríe. «¡Tu abuela te diría lo mismo! Toma un alfajor.»", B: "La señora se ríe y abre una caja. «Tu abuela te diría lo mismo. Anda, toma un alfajor.»", C: "La señora suelta una carcajada. «Las abuelas somos un sindicato. Tome un alfajor y no se hable más.»" },
            mood: "love", next: "alfajores",
          },
        },
      },

      // ── variantes
      "cuchillo-inicio": {
        who: "amparo", mood: "terror",
        line: {
          A: "Doña Amparo ve el cuchillo. Se levanta del banco y agarra el paraguas. «¡Ay, Dios mío! ¿Qué haces con eso? ¡Llamo al guardia!»",
          B: "Doña Amparo ve el cuchillo, se levanta de un salto y levanta el paraguas como una espada. «¡Ay, Virgen santa! ¿Qué haces con eso? ¡Voy a llamar al guardia!»",
          C: "Doña Amparo ve el cuchillo y, con una agilidad impropia de sus setenta y dos años, empuña el paraguas. «¿Estás loco, muchacho? ¡Baja eso o te doy con el paraguas y llamo al guardia!»",
        },
        options: [
          {
            id: "bajar",
            act: { A: "Bajas el cuchillo y lo guardas.", B: "Bajas el cuchillo y lo guardas despacio.", C: "Guardas el cuchillo con las dos manos visibles." },
            say: { A: "Perdón, señora. Es para la fruta. Ya lo guardé.", B: "Perdone, señora. Lo llevo para pelar fruta. Ya está guardado.", C: "Perdone, señora. Es un cuchillo de cocina, un descuido. Ya está fuera de la escena." },
            reply: { A: "Doña Amparo baja el paraguas. «¡Qué susto! A mi edad, eso no se hace.»", B: "Doña Amparo baja el paraguas, con la mano en el pecho. «¡Qué susto me diste! A mi edad esto es peligroso.»", C: "Doña Amparo baja el paraguas, sin dejar de mirarte. «A mi edad el corazón no está para cuchillos. Respiro, respiro.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "caja",
            say: { A: "No es para usted. Es para abrir su caja de cinta.", B: "No es contra usted. Veo que su caja tiene cinta y pensé en ayudarla.", C: "Nadie corre peligro. Solo pretendía rescatar su caja de ese precinto monstruoso." },
            reply: { A: "Doña Amparo duda. Mira la caja y luego el cuchillo. «Eso me parece una excusa…»", B: "Doña Amparo mira la caja, luego el cuchillo y entrecierra los ojos. «Pues a mí me parece una excusa muy rara.»", C: "Doña Amparo mira la caja, el cuchillo y a ti. «Qué manera tan peculiar de ayudar a una señora mayor.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "acercar",
            act: { A: "Das un paso hacia ella.", B: "Das un paso hacia ella sin guardar el cuchillo.", C: "Avanzas un paso, todavía con el cuchillo en la mano." },
            say: { A: "Espere, señora. Escuche.", B: "Espere, señora, déjeme explicarle.", C: "Un momento, señora. Permítame explicarle con calma." },
            reply: { A: "Doña Amparo grita muy fuerte y golpea tu brazo con el paraguas. «¡Guardia! ¡Guardia!»", B: "Doña Amparo grita con una voz que llena el andén y te golpea el brazo con el paraguas. «¡Guardia! ¡Guardia, aquí!»", C: "Doña Amparo lanza un grito de soprano y te zurra el brazo con el paraguas. «¡Guardia! ¡Un loco con un cuchillo!»" },
            mood: "terror", end: "cuchillo-guardia",
          },
        ],
      },
      "cuchillo-calma": {
        who: "amparo", mood: "worried",
        line: {
          A: "Doña Amparo se sienta otra vez, muy despacio. «Bueno. Ya pasó. Pero no me gustan los cuchillos. Mi marido murió de un susto.»",
          B: "Doña Amparo vuelve a sentarse con cuidado, sin soltar el paraguas. «Bueno, ya pasó. Pero que conste que los cuchillos me dan pánico. Mi marido, que en paz descanse, se llevó un susto así y no se recuperó.»",
          C: "Doña Amparo vuelve a sentarse sin soltar el paraguas, por si acaso. «Ya pasó, ya pasó. Pero los cuchillos y yo tenemos mala historia: a mi marido le dio un infarto por uno.»",
        },
        options: [
          {
            id: "ayudar",
            say: { A: "Perdóneme. Déjeme abrir su caja con cuidado, sin que se asuste.", B: "Perdóneme de verdad. ¿Me deja abrir su caja con cuidado, despacio, donde pueda verme?", C: "Perdóneme. Si me lo permite, abro la caja a la vista, despacio, con el ritual de quien pide perdón." },
            reply: { A: "Doña Amparo acepta. La caja se abre. «¡Alfajores! Toma uno.»", B: "Doña Amparo asiente. La cinta cede y aparecen alfajores. «Anda, toma uno. Lo mereces… un poquito.»", C: "Doña Amparo asiente con aire solemne. Cortas la cinta y aparecen alfajores. «Tome uno. Un poco de dulce ayuda a olvidar un susto.»" },
            mood: "smile", end: "cuchillo-alfajor",
          },
          {
            id: "hijo",
            say: { A: "Llamemos a su hijo. Para que no esté sola.", B: "¿Y si llamamos a su hijo Javier? Así no está sola y se relaja.", C: "Propongo llamar a su hijo. Con él cerca, nadie le dará más sustos esta noche." },
            reply: { A: "Doña Amparo llama a Javier. «Hijo, un loco con un cuchillo… no, ya está bien.»", B: "Doña Amparo llama a Javier. «Hijo, ven. Un muchacho con un cuchillo me asustó… no, ya está bien, pero ven.»", C: "Doña Amparo marca y relata a su hijo la escena con tintes de tragedia griega. Javier promete llegar en veinte minutos." },
            mood: "worried", end: "hijo",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Perdón otra vez.", B: "Mejor me voy y la dejo tranquila. Perdón otra vez.", C: "Me retiro, señora. Ha sido un error mío, y lo lamento." },
            reply: { A: "Doña Amparo asiente sin hablar. Llama al guardia por si acaso.", B: "Doña Amparo asiente sin decir nada. Mientras te alejas, llama al guardia, por si acaso.", C: "Doña Amparo asiente con severidad. Mientras te alejas, silba al guardia para que vigile tu paso." },
            mood: "sad", end: "cuchillo-sola",
          },
        ],
      },
      "pistola-inicio": {
        who: "amparo", mood: "angry",
        line: {
          A: "Doña Amparo ve la pistola y no grita. Se pone de pie y te señala con el paraguas. «¡Guarda eso ahora mismo! ¿Tu madre sabe que sales con eso?»",
          B: "Doña Amparo ve la pistola y, lejos de gritar, se levanta y te apunta con el paraguas. «¡Guarda eso ahora mismo, muchacho! ¿Tu madre sabe que sales a la calle con eso?»",
          C: "Doña Amparo ve la pistola y, en lugar de asustarse, se incorpora y te apunta con el paraguas como con una regla. «Guarde eso inmediatamente, joven. ¿Su madre sabe que sale de casa armado?»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la pistola.", B: "Guardas la pistola en el cinturón.", C: "Guardas la pistola con vergüenza." },
            say: { A: "Perdón, señora. Ya está guardada. No quiero problemas.", B: "Perdone, señora. Ya está guardada. No quiero problemas con nadie.", C: "Perdone, señora. Guardada. Le ruego que olvide lo que ha visto." },
            reply: { A: "Doña Amparo baja el paraguas. «Así me gusta. Pero esto no se olvida.»", B: "Doña Amparo baja el paraguas, sin relajarse. «Así me gusta. Pero esto no lo olvido tan fácil.»", C: "Doña Amparo baja el paraguas, pero no la mirada. «Olvidar es mucho pedir. Dejarlo pasar, quizá.»" },
            mood: "worried", next: "pistola-regano",
          },
          {
            id: "explicar",
            say: { A: "No es para usted. Es para mi seguridad.", B: "No es contra usted, señora. La llevo por seguridad.", C: "No va dirigida a usted, señora. La llevo por seguridad, aunque hoy sobre." },
            reply: { A: "Doña Amparo se enfada más. «¿Seguridad? ¡Eso es peligro!»", B: "Doña Amparo se enfada más. «¿Seguridad? ¡Eso es un peligro con patas! ¡Guárdala ya!»", C: "Doña Amparo se indigna. «¿Seguridad? Eso es una invitación a la tragedia. ¡Guárdela!»" },
            mood: "angry", next: "pistola-regano",
          },
          {
            id: "amenazar",
            act: { A: "No guardas la pistola.", B: "Sigues con la pistola en la mano.", C: "Mantienes la pistola a la vista." },
            say: { A: "Siéntese y cállese, señora.", B: "Siéntese y no me dé órdenes, señora.", C: "Siéntese y no se meta donde no la llaman." },
            reply: { A: "Doña Amparo grita: «¡Guardia!» Dos policías llegan corriendo.", B: "Doña Amparo grita con todas sus fuerzas: «¡Guardia! ¡Policía!» Dos agentes llegan corriendo por el andén.", C: "Doña Amparo lanza un silbido que hiela el andén y grita: «¡Policía!» Dos agentes aparecen corriendo, pistola en mano." },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },
      "pistola-regano": {
        who: "amparo", mood: "angry",
        line: {
          A: "Doña Amparo te mira muy seria. «Mi hijo tiene tu edad. Si saliera con una pistola, lo castigaría un mes. ¿Por qué la llevas?»",
          B: "Doña Amparo te mira con severidad. «Mi hijo tiene tu edad. Si saliera con una pistola, lo castigaba un mes. ¿Por qué la llevas?»",
          C: "Doña Amparo te mira con la severidad de cuarenta años dando clase. «Mi hijo tiene más o menos tu edad, y no lo veo con un arma ni de broma. ¿Por qué tú sí?»",
        },
        options: [
          {
            id: "sincero",
            say: { A: "Tengo miedo de la ciudad por la noche.", B: "Tengo miedo. La ciudad de noche me asusta y pensé que así estaría seguro.", C: "Miedo, señora. La noche me intimida y compré una falsa sensación de seguridad." },
            reply: { A: "Doña Amparo se ablanda. «Ven. Siéntate. Toma un alfajor. Y llama a mi hijo.»", B: "Doña Amparo se ablanda, suspira y abre la caja. «Ven, siéntate. Un alfajor y una llamada a mi hijo te ayudan más que esa cosa.»", C: "Doña Amparo se ablanda y abre la caja de alfajores. «Para el miedo, un alfajor y una compañía. Lo otro no sirve de nada.»" },
            mood: "worried", end: "pistola-hijo",
          },
          {
            id: "taxi",
            say: { A: "Perdón. Pago su taxi a casa. Es lo mínimo.", B: "Perdone el susto. Le pago el taxi a casa. Es lo mínimo que puedo hacer.", C: "Permítame pagarle el taxi a casa. Es una pobre compensación por el susto." },
            reply: { A: "Doña Amparo duda. «No acepto dinero de quien lleva una pistola. Pero un taxi, sí.»", B: "Doña Amparo duda. «No acepto dinero de quien anda armado. El taxi, a regañadientes, sí.»", C: "Doña Amparo duda con dignidad. «El dinero de un armado no lo acepto. El taxi, por necesidad, lo tolero.»" },
            mood: "neutral", end: "pistola-taxi",
          },
          {
            id: "irse",
            say: { A: "Tiene razón. Me voy. Perdón.", B: "Tiene toda la razón. Mejor me voy. Perdone.", C: "Tiene toda la razón. Me retiro con la cabeza baja." },
            reply: { A: "Doña Amparo no contesta. Se queda en el banco con el paraguas.", B: "Doña Amparo no contesta. Se queda en el banco con el paraguas en el regazo, vigilando tu salida.", C: "Doña Amparo no responde. Se queda en el banco con el paraguas listo, vigilando tu retirada." },
            mood: "sad", end: "pistola-sola",
          },
        ],
      },
      "granada-inicio": {
        who: "amparo", mood: "surprised",
        line: {
          A: "Doña Amparo ve la granada. Se pone las gafas. «¿Eso es una piña de adorno? ¿O es una bomba?»",
          B: "Doña Amparo se pone las gafas y examina la granada con curiosidad. «¿Eso es un adorno de Navidad? ¿O es lo que creo que es?»",
          C: "Doña Amparo se pone las gafas y examina la granada como un objeto de museo. «¿Esto es un adorno de temporada o lo que parece? A mi edad ya no distingo.»",
        },
        options: [
          {
            id: "aclarar",
            say: { A: "Es una granada, señora. Pero es de mentira.", B: "Es una granada, señora, pero es de mentira. Es de plástico.", C: "Es una granada, señora, aunque de plástico. Un accesorio de dudoso gusto." },
            reply: { A: "Doña Amparo grita. «¡Una granada! ¡Guardia! ¡Evacuen la estación!»", B: "Doña Amparo da un grito agudo. «¡Una granada! ¡Guardia, evacuen la estación!» La gente del andén echa a correr.", C: "Doña Amparo recobra la voz de maestra y la proyecta por todo el andén. «¡Una granada! ¡Evacuen la estación!» El andén se vacía en segundos." },
            mood: "terror", next: "granada-banco",
          },
          {
            id: "adorno",
            say: { A: "Sí, es un adorno. Para el árbol.", B: "Sí, claro, es un adorno. Lo compré para el árbol.", C: "Exacto, un adorno. Nada que merezca su preocupación." },
            reply: { A: "Doña Amparo la toca. «¡Pesa mucho para un adorno!» Se asusta y tira la caja.", B: "Doña Amparo la toca con un dedo. «Pesa demasiado para un adorno.» Se asusta y tira la caja de alfajores.", C: "Doña Amparo la sopesa con un dedo y frunce el ceño. «Mucho peso para un adorno.» Suelta un gritito y se le cae la caja." },
            mood: "scared", next: "granada-banco",
          },
          {
            id: "correr",
            act: { A: "Sales corriendo con la granada.", B: "Echas a correr con la granada en la mano.", C: "Sales corriendo, granada en mano, sin mirar atrás." },
            say: { A: "¡Fuera todos!", B: "¡Fuera todos de aquí!", C: "¡Todo el mundo fuera, rápido!" },
            reply: { A: "Suena la alarma. La policía cierra la estación. Un helicóptero llega.", B: "Suena la alarma de evacuación y la policía cierra la estación. Un helicóptero sobrevuela el edificio.", C: "Suena la alarma, la policía precinta la estación y un helicóptero la sobrevuela con su foco. Doña Amparo grita tu descripción." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-banco": {
        who: "amparo", mood: "angry",
        line: {
          A: "El andén está vacío. Doña Amparo se queda en el banco, firme. «A mí no me asusta una granada. Pero tú sí me asustas.»",
          B: "El andén se queda vacío, pero Doña Amparo no se mueve del banco. «Setenta y dos años y no me asusta una granada. Tú sí me asustas, y bastante.»",
          C: "El andén queda desierto, pero Doña Amparo sigue en su banco, inamovible. «He visto de todo en setenta y dos años. Una granada no me asusta; lo que me asusta eres tú.»",
        },
        options: [
          {
            id: "broma",
            say: { A: "Fue una broma. Perdón. Es de plástico.", B: "Fue una broma tonta. Perdón. Es de plástico, tóquela.", C: "Una broma de pésimo gusto, lo reconozco. Es de plástico, puede comprobarlo." },
            reply: { A: "Doña Amparo la toca y se ríe. «¡Sí! ¡Es de plástico! Qué susto más tonto.»", B: "Doña Amparo la toca, la golpea con el paraguas y se ríe. «Plástico. Qué broma tan pesada. Siéntate.»", C: "Doña Amparo la golpea con el paraguas y suelta una carcajada. «Plástico puro. Hacía años que no me divertía tanto en una estación.»" },
            mood: "laugh", end: "granada-taxi",
          },
          {
            id: "guardia",
            say: { A: "Mejor se lo digo al guardia. Para que sepa que es falsa.", B: "Mejor se lo explico al guardia, para que sepa que es falsa.", C: "Mejor me presento al guardia y le explico todo antes de que me explique él a mí." },
            reply: { A: "Llega la policía. Revisan la granada. Es falsa, pero te llevan igual.", B: "Llega la policía. Revisan la granada y confirman que es falsa, pero te llevan a comisaría igualmente.", C: "Llega la policía, revisan la granada y confirman que es falsa. Te llevan igualmente: la broma tiene un precio." },
            mood: "worried", end: "granada-policia",
          },
          {
            id: "hijo",
            say: { A: "¿Llamamos a su hijo? Que venga a buscarla.", B: "¿Y si llamamos a su hijo? Que venga a buscarla antes de que vuelva la policía.", C: "Si le parece, llamemos a Javier: es mejor que se la lleve antes de que esto se complique." },
            reply: { A: "Doña Amparo llama. «Javier, ven. Un loco con una granada… de plástico.»", B: "Doña Amparo llama. «Javier, ven corriendo. Un muchacho con una granada… de plástico, creo.»", C: "Doña Amparo marca con aplomo. «Javier, hijo, ven. Un joven con una granada de plástico. Sí, de plástico, creo.»" },
            mood: "worried", end: "hijo",
          },
        ],
      },
      "gas-inicio": {
        who: "amparo", mood: "surprised",
        line: {
          A: "Doña Amparo ve tu gas pimienta y saca el suyo del bolso. «¡Yo también tengo uno! ¿Quieres un duelo?»",
          B: "Doña Amparo ve tu gas pimienta y, sin pestañear, saca el suyo del bolso. «¡Mira, yo también tengo uno! ¿Qué pasa, hacemos un duelo de gases?»",
          C: "Doña Amparo ve tu gas pimienta y desenfunda el suyo del bolso con una velocidad que no esperabas. «Dos precavidos en un andén. ¿Probamos quién dispara primero?»",
        },
        options: [
          {
            id: "reir",
            act: { A: "Te ríes y bajas el gas.", B: "Te ríes y bajas el gas pimienta.", C: "Sueltas una carcajada y bajas el gas pimienta." },
            say: { A: "No, señora. Solo tengo miedo. ¿Usted también?", B: "No, señora, solo es miedo. ¿Usted también lo lleva por eso?", C: "Descartado el duelo, señora. ¿También lo lleva por prudencia?" },
            reply: { A: "Doña Amparo se ríe. «Mi hijo me lo hizo comprar. Pero me gusta.»", B: "Doña Amparo se ríe con ganas. «Mi hijo Javier me obligó a comprarlo. Ahora me siento una heroína.»", C: "Doña Amparo se ríe de buena gana. «Javier me lo impuso. Confieso que ahora me siento una justiciera de edad avanzada.»" },
            mood: "laugh", next: "gas-charla",
          },
          {
            id: "apuntar",
            act: { A: "Sigues apuntando.", B: "Sigues apuntando con el gas.", C: "Mantienes el gas pimienta en alto, apuntando." },
            say: { A: "Baje eso, señora. No quiero problemas.", B: "Baje eso, señora. No quiero problemas con nadie.", C: "Baje eso, señora. Prefiero evitar un incidente químico." },
            reply: { A: "Las dos bajan a la vez. Un golpe de viento: los dos tosen y lloran.", B: "Los dos bajan a la vez el gas, pero el dedo resbala: una nube sube entre los dos y los dos tosen y lloran.", C: "Los dos pulsan a la vez y la nube se une entre ustedes. Ambos tosen, lloran y se ríen por no hacerlo peor." },
            mood: "pain", end: "gas-tos",
          },
          {
            id: "guardar",
            act: { A: "Guardas el gas.", B: "Guardas el gas pimienta.", C: "Guardas el gas pimienta con una reverencia." },
            say: { A: "Usted gana, señora. Lo guardo.", B: "Usted gana, señora. Guardo el mío.", C: "Rindo mi arma, señora. Usted tiene la mejor puntería de la estación." },
            reply: { A: "Doña Amparo sonríe. «Buen chico. Toma un alfajor.»", B: "Doña Amparo sonríe, guarda el suyo y abre su caja. «Buen muchacho. Toma un alfajor.»", C: "Doña Amparo guarda el suyo con ceremonia y abre la caja. «Rendición aceptada. Un alfajor para el vencido.»" },
            mood: "smile", next: "gas-charla",
          },
        ],
      },
      "gas-charla": {
        who: "amparo", mood: "smile",
        line: {
          A: "Doña Amparo come un alfajor. «Yo salgo con gas porque vivo sola. ¿Y tú? ¿Por qué lo llevas?»",
          B: "Doña Amparo mordisquea un alfajor. «Yo lo llevo porque vivo sola y mi hijo se preocupa. ¿Y tú? ¿De qué tienes miedo?»",
          C: "Doña Amparo mordisquea un alfajor con calma. «Yo, porque vivo sola y mi hijo es un angustias. ¿Y tú? ¿Qué te da miedo para andar así de pertrechado?»",
        },
        options: [
          {
            id: "sinceridad",
            say: { A: "Tengo miedo de salir de noche.", B: "Me da miedo salir de noche. Con esto me siento más tranquilo.", C: "Me da pavor la noche. Esto es mi talismán, aunque no sirva de nada." },
            reply: { A: "Doña Amparo asiente. «Ven. Esperamos el nocturno juntos.»", B: "Doña Amparo asiente con ternura. «Pues no estás solo. Esperamos juntos el autobús nocturno.»", C: "Doña Amparo asiente. «Los miedos comparten mejor en compañía. Esperemos juntos el nocturno.»" },
            mood: "worried", end: "nocturno",
          },
          {
            id: "paranoia",
            say: { A: "En esta ciudad nadie es de fiar.", B: "En esta ciudad nadie es de fiar. Ni siquiera usted.", C: "Aquí nadie es de fiar, señora. Ni siquiera las abuelas con alfajores." },
            reply: { A: "Doña Amparo se enfada. «¡Pues yo sí soy de fiar!» Guarda la caja.", B: "Doña Amparo se enfada y guarda la caja. «¡Pues yo soy de fiar! ¡Y los alfajores, de sobra!»", C: "Doña Amparo cierra la caja de golpe. «Ofensa recibida. Alfajores retirados, joven.»" },
            mood: "angry", end: "sola",
          },
          {
            id: "taxi",
            say: { A: "Mejor busquemos un taxi. Yo pago.", B: "Mejor busquemos un taxi para usted. Yo pago el viaje.", C: "Busquemos un taxi para usted. Permítame invitarla, que me siento en deuda." },
            reply: { A: "Doña Amparo acepta. «Pero solo si llevas el gas guardado.»", B: "Doña Amparo acepta, divertida. «Pero solo si prometes llevar el gas guardado.»", C: "Doña Amparo acepta. «Con una condición: el gas, bien guardado, hasta que lleguemos.»" },
            mood: "smile", end: "taxi",
          },
        ],
      },
      "lapiz-inicio": {
        who: "amparo", mood: "worried",
        line: {
          A: "Doña Amparo ve tu lápiz. «¡Ay, un lápiz! Necesito apuntar el horario del nocturno y no veo bien.»",
          B: "Doña Amparo ve el lápiz y se anima. «¡Un lápiz! Justo lo que necesito. Quiero apuntar el horario del autobús nocturno, y sin las gafas no veo nada.»",
          C: "Doña Amparo descubre tu lápiz y se le ilumina la cara. «Lo que me faltaba. Necesito anotar el horario del nocturno, y estas gafas ya no dan más de sí.»",
        },
        options: [
          {
            id: "horario",
            act: { A: "Miras el panel y apuntas el horario.", B: "Lees el panel de horarios y apuntas el nocturno.", C: "Lees el panel y anotas el horario del nocturno con letra grande." },
            say: { A: "El nocturno sale a la una menos cuarto. Se lo apunto.", B: "El nocturno sale a la una menos cuarto, de la vía seis. Se lo apunto en un papel.", C: "El nocturno parte a la una menos cuarto, desde la vía seis. Se lo anoto con letra de pancarta." },
            reply: { A: "Doña Amparo lee. «¡Gracias! Letra grande. Perfecto.»", B: "Doña Amparo lee y sonríe. «Con esta letra tan grande hasta yo lo leo. Gracias.»", C: "Doña Amparo sostiene el papel a un palmo. «Letra de pancarta. Por fin alguien que escribe para los demás.»" },
            mood: "smile", next: "lapiz-mapa",
          },
          {
            id: "mapa",
            act: { A: "Dibujas un mapa de la estación.", B: "Dibujas un mapa sencillo de la estación.", C: "Trazas un plano sencillo de la estación con el lápiz." },
            say: { A: "Mire. Aquí está la vía seis. Esto es el camino.", B: "Mire, aquí está la vía seis y este es el camino más corto desde el banco.", C: "Mire: aquí está la vía seis y esta flecha es el camino más corto desde su banco." },
            reply: { A: "Doña Amparo mira el dibujo. «¡Qué claro! Gracias, hijo.»", B: "Doña Amparo estudia el dibujo, encantada. «Más claro que el cartel de la estación. Gracias, hijo.»", C: "Doña Amparo estudia el plano. «Claridad cartográfica. Los de la estación deberían contratarte.»" },
            mood: "smile", next: "lapiz-mapa",
          },
          {
            id: "nota",
            say: { A: "Le escribo un mensaje para su hijo.", B: "¿Quiere que le escriba un mensaje para su hijo?", C: "Si le parece, le redacto un mensaje para su hijo. Con lápiz, a la antigua." },
            reply: { A: "Doña Amparo asiente. «Escribe: “Javier, se me fue el tren”.» Sonríe.", B: "Doña Amparo asiente. «Escribe: “Javier, se me fue el tren. Ven si puedes”.» Y sonríe.", C: "Doña Amparo dicta con voz de maestra. «“Javier: se me fue el tren. Ven si puedes. Besos”.» Y se ríe." },
            mood: "smile", end: "lapiz-hijo",
          },
        ],
      },
      "lapiz-mapa": {
        who: "amparo", mood: "smile",
        line: {
          A: "Doña Amparo guarda el papel en el bolso. «Eres muy amable. Toma un alfajor. ¿Esperamos el nocturno juntos?»",
          B: "Doña Amparo guarda el papel con cuidado y te ofrece la caja. «Eres un encanto. Toma un alfajor. ¿Esperamos juntos el nocturno?»",
          C: "Doña Amparo guarda el papel junto al monedero y te ofrece la caja. «Un joven con lápiz y buenos modales: una especie en extinción. Alfajor y espera, ¿trato?»",
        },
        options: [
          {
            id: "esperar",
            say: { A: "Sí, encantado. Gracias por el alfajor.", B: "Sí, encantado. Gracias por el alfajor, están riquísimos.", C: "Trato hecho. Y gracias por el alfajor: quien escribe a lápiz también sabe agradecer." },
            reply: { A: "Doña Amparo sonríe. «Con compañía, el tiempo vuela.»", B: "Doña Amparo sonríe. «Con compañía, la espera se acorta.» Y empieza a contarte su vida.", C: "Doña Amparo se acomoda. «Con buena compañía, el tiempo pasa como un tren.» Y empieza a contarte media vida." },
            mood: "smile", end: "lapiz-nocturno",
          },
          {
            id: "dibujo",
            act: { A: "Dibujas a Doña Amparo.", B: "Dibujas un retrato rápido de Doña Amparo.", C: "Le haces un retrato rápido con el lápiz." },
            say: { A: "Mire. Es usted, con el paraguas.", B: "Mire, es usted con su paraguas y un alfajor. Es un regalo.", C: "Mire: usted, con paraguas y alfajor. Que conste en la historia de la estación." },
            reply: { A: "Doña Amparo lo mira y se emociona. «¡Qué guapa salgo!»", B: "Doña Amparo lo mira y se emociona. «¡Qué guapa salgo! Lo enmarco, de verdad.»", C: "Doña Amparo se lleva la mano al pecho. «Mucho más guapa de lo que soy. Lo enmarco. De verdad.»" },
            mood: "love", end: "lapiz-nocturno",
          },
          {
            id: "firmar",
            say: { A: "Firme aquí. Será nuestro recuerdo.", B: "Firme aquí abajo, que será nuestro recuerdo de esta noche.", C: "Firme al pie, que esta noche merece un documento oficial." },
            reply: { A: "Doña Amparo firma «Amparo, la del último tren». Se ríe.", B: "Doña Amparo firma con rúbrica «Amparo, la del último tren» y se ríe de su propia ocurrencia.", C: "Doña Amparo firma con rúbrica de notaria «Amparo, la del último tren» y se ríe de su propia ocurrencia." },
            mood: "laugh", end: "lapiz-hijo",
          },
        ],
      },
      "libro-inicio": {
        who: "amparo", mood: "surprised",
        line: {
          A: "Doña Amparo ve tu libro. «¿Qué lees? ¿Un libro? ¿A esta hora? Yo también leía así. ¿Qué título es?»",
          B: "Doña Amparo ve tu libro y se inclina para leer el título. «¿Un libro? ¿A esta hora, en una estación? Qué encanto. ¿Qué título es?»",
          C: "Doña Amparo repara en tu libro y su mirada triste se enciende. «Un libro en un andén a medianoche: un joven con criterio. ¿De qué trata?»",
        },
        options: [
          {
            id: "presentar",
            say: { A: "Es una novela de amor. ¿Quiere leer el principio?", B: "Es una novela de amor y de trenes. ¿Quiere que le lea el principio?", C: "Es una novela sobre trenes perdidos, qué casualidad. ¿Le leo el principio?" },
            reply: { A: "Doña Amparo se ríe. «¡Un tren perdido! ¡Como yo!» Escucha feliz.", B: "Doña Amparo se ríe. «Un tren perdido, como yo esta noche.» Se acomoda a escuchar.", C: "Doña Amparo se echa a reír. «Qué ironía: una novela de trenes perdidos para una señora que acaba de perder el suyo.» Se acomoda a escuchar." },
            mood: "laugh", next: "libro-lectura",
          },
          {
            id: "excusa",
            say: { A: "Leo aquí porque tengo miedo de ir a casa.", B: "Leo aquí para no volver a casa todavía. Es mi excusa.", C: "Leo aquí para retrasar el regreso. El libro es mi coartada." },
            reply: { A: "Doña Amparo se entristece. «Yo también me quedo despierta por no estar sola.»", B: "Doña Amparo se entristece. «Yo también me quedo despierta por no estar sola en casa.»", C: "Doña Amparo asiente con una sombra en la cara. «Conozco esa coartada. Yo también la uso, con un tango.»" },
            mood: "sad", next: "libro-lectura",
          },
          {
            id: "regalar",
            say: { A: "Es para usted. Tome, léalo en el tren.", B: "Se lo regalo. Léalo mientras espera el nocturno.", C: "Es suyo. Hay libros que buscan lector, y este la ha encontrado a usted." },
            reply: { A: "Doña Amparo lo abraza. «¡Gracias! Lo leo esta noche.»", B: "Doña Amparo abraza el libro. «¡Gracias! Lo leo esta misma noche, aunque sea con la linterna del celular.»", C: "Doña Amparo abraza el libro con la caja de alfajores. «Lo leeré esta noche. Y lo devolveré cuando pueda, aunque no me lo pidas.»" },
            mood: "love", end: "libro-regalo",
          },
        ],
      },
      "libro-lectura": {
        who: "amparo", mood: "smile",
        line: {
          A: "Doña Amparo cierra los ojos. «Qué bonito. Me recuerda a mi marido, que leía en voz alta. ¿Quieres un alfajor?»",
          B: "Doña Amparo cierra los ojos un momento. «Qué bonito suena. Mi marido leía en voz alta en las noches de tormenta. ¿Quieres un alfajor?»",
          C: "Doña Amparo cierra los ojos y se deja llevar. «Mi marido leía así, en voz alta, cuando había tormenta. Me lo has devuelto un rato. ¿Un alfajor?»",
        },
        options: [
          {
            id: "seguir",
            say: { A: "Sí, gracias. ¿Sigo leyendo?", B: "Sí, gracias. ¿Sigo leyendo hasta que llegue el nocturno?", C: "Gracias. ¿Sigo leyendo hasta que llegue el nocturno, o prefiere que le cuente el final?" },
            reply: { A: "Doña Amparo asiente. Lees. Ella se ríe y llora a la vez.", B: "Doña Amparo asiente. Sigues leyendo hasta que el nocturno asoma. Ella ríe y llora a la vez.", C: "Doña Amparo asiente. Sigues leyendo mientras el reloj se arrastra. Ella ríe y llora a ratos, hasta que aparece el nocturno." },
            mood: "love", end: "nocturno",
          },
          {
            id: "hijo",
            say: { A: "¿Llamamos a su hijo? Le puede leer a él.", B: "¿Y si llamamos a su hijo? Podría escucharlo por teléfono.", C: "¿Y si llamamos a Javier? Quizá le gustaría escucharla leer este final por teléfono." },
            reply: { A: "Doña Amparo llama. «Javier, escucha este libro.» Lee ella.", B: "Doña Amparo llama a su hijo y pone el altavoz. «Javier, escucha este libro.» Y lee ella, con voz firme.", C: "Doña Amparo llama a su hijo y lee en el altavoz, con la voz de maestra de sus mejores tiempos. Javier, medio dormido, la escucha emocionado." },
            mood: "love", end: "hijo",
          },
          {
            id: "receta",
            say: { A: "¿Me da la receta del alfajor?", B: "Los alfajores están riquísimos. ¿Me da la receta?", C: "Estos alfajores merecen un libro propio. ¿Me da la receta?" },
            reply: { A: "Doña Amparo baja la voz. «Con limón. No se lo digas a nadie.»", B: "Doña Amparo baja la voz y mira a los lados. «Ralladura de limón. Es secreto.»", C: "Doña Amparo susurra, cómplice. «Ralladura de limón. Secreto de familia: si lo cuentas, te desheredo.»" },
            mood: "love", end: "receta",
          },
        ],
      },
      "corazon-inicio": {
        who: "amparo", mood: "smitten",
        line: {
          A: "Doña Amparo te mira y sonríe. Se arregla el pelo. «Ay, qué muchacho tan guapo. Hacía mucho que nadie me miraba así. Siéntate, siéntate.»",
          B: "Doña Amparo te mira y se arregla el moño, coqueta. «Ay, qué muchacho tan guapo y tan amable. Hacía años que nadie me miraba así en una estación. Siéntate a mi lado.»",
          C: "Doña Amparo te mira, se alisa el abrigo y se arregla el moño con coquetería. «Vaya, qué muchacho tan encantador. Hacía décadas que nadie me miraba así en un andén. Siéntate, que no muerdo.»",
        },
        options: [
          {
            id: "coquetear",
            say: { A: "Usted es muy guapa. Su marido tuvo suerte.", B: "Usted es guapísima, Doña Amparo. Su marido tuvo mucha suerte.", C: "Usted es una belleza, Doña Amparo. Su marido fue un hombre afortunado." },
            reply: { A: "Doña Amparo se ríe y se sonroja. «¡Eres un encanto! Toma un alfajor.»", B: "Doña Amparo se ríe y se pone colorada. «¡Eres un encanto! Toma un alfajor, que te lo has ganado.»", C: "Doña Amparo se ríe y se ruboriza como una niña. «Qué embustero y qué encanto. Toma un alfajor, que te lo has ganado.»" },
            mood: "smitten", next: "corazon-tango",
          },
          {
            id: "consolar",
            say: { A: "No se preocupe. Perder un tren no es grave.", B: "No se preocupe, perder un tren no es el fin del mundo. Yo la acompaño.", C: "No se preocupe: un tren perdido es solo una oportunidad para conversar. Yo la acompaño." },
            reply: { A: "Doña Amparo se calma. «Tienes razón. Y fui a mi primera clase de tango.»", B: "Doña Amparo se calma del todo. «Tienes razón. Además, esta noche fui a mi primera clase de tango.»", C: "Doña Amparo se serena por completo. «Tienes razón. Y además vengo de mi primera clase de tango, a los setenta y dos.»" },
            mood: "love", next: "corazon-tango",
          },
          {
            id: "abrazo",
            act: { A: "La abrazas.", B: "Abrazas a Doña Amparo.", C: "La abrazas con mucho cuidado." },
            say: { A: "Venga. Un abrazo para la mujer más valiente de la estación.", B: "Venga, un abrazo para la mujer más valiente de la estación.", C: "Un abrazo, Doña Amparo, para la mujer más digna del andén." },
            reply: { A: "Doña Amparo te abraza fuerte. «Qué bien huele a juventud.»", B: "Doña Amparo te abraza con fuerza. «Qué bien se siente un abrazo a esta hora.»", C: "Doña Amparo te abraza con fuerza inesperada. «Hacía tanto que nadie me abrazaba así. Gracias, hijo.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-tango": {
        who: "amparo", mood: "love",
        line: {
          A: "Doña Amparo se levanta. «¿Sabes bailar tango? Vamos a bailar aquí, en el andén. Nadie nos mira.»",
          B: "Doña Amparo se levanta del banco y te tiende la mano. «¿Sabes bailar tango? Vamos a bailar aquí, en el andén vacío. Nadie nos ve.»",
          C: "Doña Amparo se levanta, alisa el abrigo y te ofrece la mano. «Me debes un tango. El andén está vacío, el reloj parado y la noche es joven. ¿Bailamos?»",
        },
        options: [
          {
            id: "bailar",
            act: { A: "Bailas con ella.", B: "Aceptas su mano y bailas con ella.", C: "Aceptas su mano y bailas un tango en el andén." },
            say: { A: "Sí, bailemos. Me enseña usted.", B: "Claro que sí. Pero usted me enseña, porque yo no tengo ni idea.", C: "Con mucho honor. Pero guíe usted, que yo bailo como un paraguas." },
            reply: { A: "Doña Amparo guía. Bailan dos minutos. Llega la luz del tren.", B: "Doña Amparo guía con maestría y bailan dos minutos que parecen veinte. Entra la luz de un tren vacío.", C: "Doña Amparo guía con una elegancia de salón. Bailan sin música, solo con el eco, hasta que la luz de un tren vacío los baña." },
            mood: "love", end: "corazon-baila",
          },
          {
            id: "beso",
            act: { A: "Le das un beso en la mano.", B: "Le das un beso en la mano, con cortesía.", C: "Le besas la mano con una reverencia." },
            say: { A: "Antes del tango, un beso para la reina de la estación.", B: "Antes del tango, un beso en la mano para la reina de la estación.", C: "Antes del tango, el protocolo: un beso en la mano para la reina de este andén." },
            reply: { A: "Doña Amparo se ríe feliz. «¡Qué caballero! Ahora sí, baila conmigo.»", B: "Doña Amparo se ríe, feliz. «¡Qué caballero! Hacía siglos que no me besaban la mano. Ahora, a bailar.»", C: "Doña Amparo se lleva la mano al pecho. «Un caballero de otra época. Ahora sí que bailamos.»" },
            mood: "smitten", end: "corazon-beso",
          },
          {
            id: "hijo",
            say: { A: "Mejor llamamos a su hijo. Es tarde.", B: "Mejor llamamos a su hijo, que es tarde y mañana usted tiene clase de tango.", C: "Mejor llamemos a Javier, que es tarde y usted tiene una carrera de bailarina que cuidar." },
            reply: { A: "Doña Amparo se ríe. «Tienes razón. Qué cosas.» Llama a su hijo.", B: "Doña Amparo se ríe y asiente. «Tienes razón, qué cabeza la mía.» Marca el número de su hijo.", C: "Doña Amparo se ríe de buena gana. «Qué prudente. Qué decepción. Qué sensatez.» Y marca el número de Javier." },
            mood: "love", end: "hijo",
          },
        ],
      },
    },
    ends: {

      "cuchillo-guardia": { text: { A: "El guardia te quita el cuchillo. La policía te hace muchas preguntas. Doña Amparo cuenta todo con su paraguas.", B: "El guardia te desarma y la policía te hace muchas preguntas. Doña Amparo narra el incidente con el paraguas en alto, como si fuera una espada.", C: "El guardia te quita el cuchillo y la policía toma declaración. Doña Amparo relata los hechos con el paraguas en alto, ante un público embelesado." }, change: "policia", recap: "Un cuchillo asustó a Doña Amparo y terminó con la policía." },
      "cuchillo-alfajor": { text: { A: "Abres la caja. Doña Amparo te da un alfajor. Está contenta, pero te vigila con el paraguas.", B: "Abres la caja con cuidado. Doña Amparo te da un alfajor, todavía desconfiada, con el paraguas siempre a mano.", C: "Abres la caja bajo su atenta mirada. Doña Amparo te concede un alfajor, sin soltar el paraguas por si acaso." }, change: "sonrie", recap: "Usaste el cuchillo para abrir la caja de alfajores de Doña Amparo." },
      "cuchillo-sola": { text: { A: "Te vas. Doña Amparo llama al guardia y te señala con el paraguas.", B: "Te alejas del banco. Doña Amparo habla con el guardia y te señala con el paraguas hasta que desapareces.", C: "Te retiras. Doña Amparo informa al guardia, señalándote con el paraguas como si fuera un dedo acusador." }, change: "se-va", recap: "El cuchillo asustó a Doña Amparo y te fuiste." },
      "pistola-policia": { text: { A: "La policía te quita la pistola y te esposa. Doña Amparo dice: «¡Qué juventud!».", B: "La policía te desarma y te esposa en el andén. Doña Amparo sacude la cabeza: «Qué juventud, qué juventud».", C: "La policía te desarma y te esposa en medio del andén. Doña Amparo sacude la cabeza: «En mis tiempos esto se arreglaba con una bofetada y un abrazo»." }, change: "policia", recap: "La pistola terminó con la policía y Doña Amparo de testigo." },
      "pistola-hijo": { text: { A: "Doña Amparo te da un alfajor y llama a su hijo. Esperan juntos. Guardas la pistola para siempre.", B: "Doña Amparo te da un alfajor y llama a su hijo Javier. Esperan juntos y prometes no volver a sacar la pistola.", C: "Doña Amparo te da un alfajor y llama a Javier. Esperan juntos, y la pistola se queda en tu bolsillo, con la promesa de no salir más." }, change: "llama", recap: "Doña Amparo te regañó por la pistola y te dio un alfajor." },
      "pistola-taxi": { text: { A: "Pagas el taxi. Doña Amparo sube sin mirarte. Se va muy seria.", B: "Pagas el taxi. Doña Amparo sube sin mirarte y se va muy seria, con el paraguas en el regazo.", C: "Pagas el taxi. Doña Amparo sube con la dignidad intacta, sin una mirada, y se va con el paraguas en el regazo." }, change: "se-va", recap: "Pagaste el taxi de Doña Amparo después del susto de la pistola." },
      "pistola-sola": { text: { A: "Te vas. Doña Amparo se queda en el banco. El guardia pasa y habla con ella.", B: "Te alejas. Doña Amparo se queda en el banco y, poco después, el guardia pasa y habla con ella.", C: "Te alejas. Doña Amparo se queda en el banco, y minutos después el guardia se acerca a tomarle declaración." }, change: "se-va", recap: "La pistola asustó a Doña Amparo y te fuiste." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina la estación. La policía te rodea. Doña Amparo grita: «¡Es de plástico, creo!».", B: "Un helicóptero ilumina la estación entera. La policía te rodea y Doña Amparo grita desde el banco: «¡Creo que es de plástico!».", C: "Un helicóptero baña la estación de luz mientras la policía te rodea. Doña Amparo grita desde su banco: «¡Creo que es de plástico, pero no se lo aseguro!»." }, change: "helicoptero", recap: "La granada hizo que un helicóptero sobrevolara la estación." },
      "granada-taxi": { text: { A: "Doña Amparo se ríe mucho. Pides un taxi. Ella te da dos alfajores.", B: "Doña Amparo no para de reírse. Pides un taxi y ella te regala dos alfajores por la broma.", C: "Doña Amparo no para de reír. Pides un taxi y ella, en señal de paz, te regala dos alfajores." }, change: "se-va", recap: "La broma de la granada acabó con risas y un taxi." },
      "granada-policia": { text: { A: "La policía te lleva a comisaría. Doña Amparo se queda comiendo alfajores. Muy tranquila.", B: "La policía te lleva a comisaría. Doña Amparo se queda en el banco comiendo alfajores, muy tranquila.", C: "La policía te lleva a comisaría. Doña Amparo se queda en el banco, comiendo alfajores con la serenidad de quien lo ha visto todo." }, change: "policia", recap: "La granada de plástico terminó en comisaría." },
      "gas-tos": { text: { A: "Los dos lloran y tosen. El guardia llega con agua. Doña Amparo se ríe de la situación.", B: "Los dos tosen y lloran. El guardia llega con agua y un pañuelo. Doña Amparo se ríe de lo absurdo de la situación.", C: "Los dos tosen, lloran y se ríen. El guardia llega con agua y un pañuelo. Doña Amparo declara que ha sido el mejor duelo de su vida." }, change: "ambulancia", recap: "Un duelo de gases pimienta con Doña Amparo terminó entre toses y risas." },
      "lapiz-hijo": { text: { A: "Doña Amparo envía el mensaje. Javier contesta: «Voy». Ella te da un alfajor.", B: "Doña Amparo envía el mensaje a Javier. Él contesta en un minuto: «Voy para allá». Ella te regala un alfajor.", C: "Doña Amparo envía el mensaje. Javier contesta al instante: «Voy». Ella te regala un alfajor y tu lápiz se queda como amuleto." }, change: "llama", recap: "Escribiste un mensaje para el hijo de Doña Amparo con tu lápiz." },
      "lapiz-nocturno": { text: { A: "Esperas el nocturno con Doña Amparo. Ella guarda tu dibujo en el bolso.", B: "Esperas el nocturno con Doña Amparo, que guarda tu papel como un tesoro.", C: "Esperas el nocturno con Doña Amparo, que guarda tu papel como un tesoro y te cuenta de su primera clase de tango." }, change: "se-sienta", recap: "Esperaste el nocturno con Doña Amparo gracias a tu lápiz." },
      "libro-regalo": { text: { A: "Doña Amparo se va con tu libro. Antes te da dos alfajores.", B: "Doña Amparo se va con tu libro bajo el brazo. Antes te regala dos alfajores.", C: "Doña Amparo se va con tu libro bajo el brazo. Antes te regala dos alfajores como honorarios." }, change: "se-va", recap: "Le regalaste tu libro a Doña Amparo." },
      "corazon-abrazo": { text: { A: "Doña Amparo te abraza. Llama a su hijo. Todo está bien.", B: "Doña Amparo te abraza otra vez y llama a su hijo Javier. Esperan juntos, felices.", C: "Doña Amparo te abraza de nuevo y llama a su hijo. Esperan juntos, y ninguno de los dos recuerda ya que perdió el último tren." }, change: "abraza", recap: "Abrazaste a Doña Amparo en el andén." },
      "corazon-baila": { text: { A: "Bailas un tango con Doña Amparo. Llega su hijo y los aplaude.", B: "Bailas un tango con Doña Amparo sin música. Llega Javier, los ve y los aplaude.", C: "Bailas un tango en el andén vacío con Doña Amparo. Llega Javier, los ve y aplaude. Ella le dice: «Hijo, fui a una clase»." }, change: "baila", recap: "Bailaste un tango con Doña Amparo en el andén." },
      "corazon-beso": { text: { A: "Doña Amparo te besa la mejilla. Sube a un taxi sonriendo.", B: "Doña Amparo te besa la mejilla y sube a un taxi que acaba de llegar, sonriendo como una niña.", C: "Doña Amparo te besa la mejilla y sube a un taxi que llega justo a tiempo, sonriendo como una colegiala." }, change: "beso", recap: "Besaste la mano de Doña Amparo y te despidió con un beso." },
      taxi: { text: { A: "Doña Amparo sube al taxi. Te da dos alfajores para el camino.", B: "Doña Amparo sube al taxi con un precio justo. Antes de irse, te deja dos alfajores en la mano.", C: "Doña Amparo se sube al taxi tras una negociación memorable. Por la ventanilla te pasa dos alfajores de propina." }, change: "se-va", recap: "Ayudaste a Doña Amparo a volver a casa en taxi." },
      hotel: { text: { A: "Vas con Doña Amparo al hotel. Ella está muy contenta.", B: "Acompañas a Doña Amparo al hotel de enfrente. Entra como una turista emocionada.", C: "Acompañas a Doña Amparo al hotel. Entra con aire de aventurera que pide habitación con vistas." }, change: "se-va", recap: "Acompañaste a Doña Amparo a un hotel." },
      hijo: { text: { A: "Doña Amparo habla con su hijo. Él viene en coche.", B: "Javier contesta medio dormido y dice que viene a buscarla en veinte minutos.", C: "Javier contesta, se despierta del todo en dos segundos y anuncia que llega en veinte minutos." }, change: "llama", recap: "Convenciste a Doña Amparo de llamar a su hijo." },
      nocturno: { text: { A: "Esperas el autobús con Doña Amparo. Ella te cuenta muchas historias.", B: "Esperas con Doña Amparo el autobús nocturno. Entre alfajor y alfajor, te cuenta media vida.", C: "Compartes banco, alfajores y biografía con Doña Amparo hasta que llega el nocturno." }, change: "se-sienta", recap: "Esperaste el autobús nocturno con Doña Amparo." },
      receta: { text: { A: "Doña Amparo escribe la receta en tu billete. Luego llama a su hijo.", B: "Doña Amparo te escribe la receta en el billete y luego, más tranquila, llama a su hijo.", C: "Doña Amparo te dicta la receta en susurros y después, ya serena, llama a su hijo." }, change: "abraza", recap: "Doña Amparo te regaló su receta secreta de alfajores." },
      policia: { text: { A: "Llega el guardia y después la policía. Explicas todo.", B: "El guardia llama a la policía. Tardas un buen rato en explicar el malentendido.", C: "Entre el guardia y la policía, tu explicación larga se vuelve larguísima." }, change: "policia", recap: "Un malentendido con Doña Amparo terminó con la policía." },
      sola: { text: { A: "Doña Amparo se va sola. Tú te quedas en el andén.", B: "Doña Amparo se va sola hacia la salida. Te quedas en el andén vacío.", C: "Doña Amparo se pierde hacia la salida. El andén nunca te pareció tan vacío." }, change: "se-va", recap: "Doña Amparo se fue sola de la estación." },
    },
    speak: {
      A1: "¿A qué hora vuelves a casa los fines de semana?",
      A2: "¿Qué hiciste la última vez que perdiste un tren o un autobús?",
      B1: "¿Qué comida casera te recuerda a tu familia, y por qué?",
      B2: "¿A quién llamarías si te quedaras sin transporte a medianoche?",
      C1: "¿Cómo equilibras el deseo de no molestar con la necesidad de pedir ayuda?",
      C2: "¿Qué nos enseñan las personas mayores sobre la independencia y la vulnerabilidad?",
    },

    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Tienes miedo de los cuchillos?", B: "¿Qué harías si una persona mayor te amenazara con un paraguas?", C: "¿Qué dice de nosotros que un objeto basta para convertirnos en sospechosos?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué dice tu madre cuando haces algo peligroso?", B: "¿Qué consecuencias tiene llevar un arma por miedo?", C: "¿Quién debería controlar el miedo de una ciudad nocturna?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Haces bromas a las personas mayores?", B: "¿Qué broma pesada te salió mal alguna vez?", C: "¿Qué distingue una broma de una irresponsabilidad cuando hay pánico?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Tu familia se preocupa por tu seguridad?", B: "¿Quién te obligó a protegerte más de lo que querías?", C: "¿Cuándo la prudencia heredada se convierte en miedo propio?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes mensajes a mano?", B: "¿Cuándo le escribiste una nota a tu familia?", C: "¿Qué dejarías por escrito para alguien mayor que vive solo?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Qué libro lee tu abuela?", B: "¿Qué libro te recuerda a alguien de tu familia?", C: "¿Qué lectura en voz alta ha marcado una época de tu vida?" } },
      corazon: { start: "corazon-inicio", fx: "beso", speak: { A: "¿Con quién bailas en tu familia?", B: "¿A qué persona mayor de tu vida le tienes un cariño especial?", C: "¿Qué te enseñaron las personas mayores sobre el amor?" } },
    },
  },

  // ─────────────────────────────────────────────────────────────── ESCENA 5
  {
    id: "estacion-henrik",
    kind: "escena",
    district: "estacion",
    title: "Henrik encuentra la estación",
    verb: "SALUDAR",
    requires: "henrik",
    goal: "Reencontrarse con alguien, enseñar y explicar una expresión, corregir con amabilidad y despedirse.",
    cast: [
      {
        id: "henrik", name: "Henrik", role: "Turista danés",
        age: "young", body: "m", build: "slim", height: 1.92,
        hair: "short", hairColor: "#e2c98a", skin: "#f2d6c0",
        top: "jacket", topColor: "#3f6b4f", bottom: "jeans", bottomColor: "#4a5a78",
        extras: ["backpack", "map", "glasses"], pose: "wave",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "henrik", mood: "smile",
        line: {
          A: "Henrik, el turista alto del mapa, te ve y sonríe. «¡Eh! ¡Tú me ayudaste! ¡Encontré la estación!»",
          B: "Henrik, el turista alto del mapa, te reconoce desde lejos y viene hacia ti. «¡Eh! ¡Eres tú! ¡Encontré la estación gracias a ti!»",
          C: "Henrik, el turista altísimo del mapa, te ve entre la gente y agita el mapa como una bandera. «¡Mi guía! ¡Llegué! ¡Y solo me equivoqué de calle dos veces más!»",
        },
        options: [
          {
            id: "felicitar",
            say: { A: "¡Qué bien! ¿A qué hora sale tu tren?", B: "¡Qué alegría! ¿A qué hora sale tu tren?", C: "¡Lo lograste! ¿Y cuánto te queda antes del tren?" },
            reply: { A: "«En quince minutos. ¿Me enseñas una expresión más?»", B: "«En quince minutos», dice Henrik. «¿Me enseñas una expresión más? Solo una.»", C: "«Quince minutos», dice Henrik, y saca una libreta. «Tiempo suficiente para una expresión más, ¿no?»" },
            mood: "smile", next: "ensenar",
          },
          {
            id: "presumir",
            say: { A: "¡Lo sabía! Soy un buen guía, ¿no?", B: "¡Te lo dije! Soy un guía excelente, ¿verdad?", C: "Lo que yo decía: guía de primera, con garantía incluida." },
            reply: { A: "Henrik se ríe. «¡El mejor! ¿Me enseñas una expresión más?»", B: "Henrik se ríe. «¡El mejor guía de la ciudad! ¿Me enseñas una expresión más?»", C: "Henrik se ríe. «Cinco estrellas. Y como buen guía, seguro que tienes una expresión más para mí.»" },
            mood: "smile", next: "ensenar",
          },
          {
            id: "prisa",
            say: { A: "Yo también tengo prisa. ¡Buen viaje!", B: "Me alegro mucho, pero voy con prisa. ¡Buen viaje!", C: "Qué alegría, pero me pillas corriendo. ¡Buen viaje!" },
            reply: { A: "«¡Espera! Solo una expresión más, por favor. ¡Un minuto!»", B: "«¡Espera, espera!», dice Henrik. «Solo una expresión más. Un minuto, te lo prometo.»", C: "Henrik se pone delante, con cara de súplica. «Un minuto. Una expresión. Después te dejo en paz para siempre.»" },
            mood: "worried", next: "ensenar",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y tomas su mapa.", B: "Sacas el lápiz y le pides el mapa.", C: "Le pides el mapa y sacas el lápiz con aire de profesor." },
            say: { A: "Te escribo una expresión en el mapa.", B: "Te escribo una expresión útil aquí, en el mapa.", C: "Te dejo una expresión en el mapa, para que viaje contigo." },
            reply: { A: "Henrik lee: «No pasa nada». «¿No… pasa… nada?»", B: "Henrik lee lo que escribes: «No pasa nada». Lo repite despacio. «¿No pasa nada?»", C: "Henrik lee: «No pasa nada». Lo pronuncia como quien prueba una comida nueva." },
            mood: "surprised", next: "practicar",
          },
          libro: {
            act: { A: "Abres tu libro.", B: "Abres tu libro y buscas una frase.", C: "Abres tu libro y buscas una frase digna de Henrik." },
            say: { A: "Mira esta frase: «¡Qué bien!». Es muy útil.", B: "Mira esta frase: «¡Qué bien!». La usamos todo el tiempo.", C: "Aquí hay una joya: «¡Qué bien!». Sirve para casi todo, incluso para disimular." },
            reply: { A: "Henrik lo repite. «¡Qué bien! ¡Qué bien!»", B: "Henrik lo repite tres veces, cada vez más alto. «¡Qué bien! ¡Qué bien!»", C: "Henrik la repite con entusiasmo creciente. «¡Qué bien! ¿Incluso para disimular? Perfecto.»" },
            mood: "smile", next: "practicar",
          },
          gas: {
            act: { A: "Henrik viene rápido para abrazarte. Sacas el gas pimienta.", B: "Henrik viene corriendo con los brazos abiertos. Por reflejo, sacas el gas pimienta.", C: "Henrik se lanza hacia ti con los brazos abiertos y tu reflejo saca el gas pimienta." },
            say: { A: "¡Eh! ¡Espera!", B: "¡Eh! ¡Espera, espera!", C: "¡Un momento! ¡Frena!" },
            reply: { A: "Henrik se para. «¡Ay! ¡Soy yo! ¡Henrik!»", B: "Henrik frena en seco, con los brazos abiertos. «¡Soy yo! ¡Henrik! ¡El del mapa!»", C: "Henrik se queda congelado en medio del abrazo. «Soy yo… el del mapa. ¿No era un abrazo?»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Sacas la granada.", B: "Buscas algo para regalarle y sacas la granada.", C: "Buscas un recuerdo para regalarle y, por error, sacas la granada." },
            say: { A: "Perdón, busco un regalo para ti.", B: "Perdona, te buscaba un recuerdo de la ciudad.", C: "Ese no es el recuerdo que buscaba. Perdona." },
            reply: { A: "Henrik mira la granada. «¿Es… un souvenir?»", B: "Henrik da un paso atrás. «¿Es… un souvenir típico de aquí?»", C: "Henrik da un paso atrás. «En las guías no hablaban de este souvenir.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al abrazarlo, se ve tu pistola.", C: "En el abrazo, la pistola queda a la vista." },
            say: { A: "¡Henrik! ¡Qué bien verte!", B: "¡Henrik! ¡Qué alegría verte otra vez!", C: "¡Henrik! Pensé que no volvería a verte." },
            reply: { A: "Henrik ve la pistola. Se pone pálido.", B: "Henrik ve la pistola y se pone blanco. «Eh… ¿Qué es eso?»", C: "Henrik ve la pistola y la sonrisa se le congela. «Eh… ¿esto también es tradición local?»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo y cortas tu bocadillo en dos.", B: "Con el cuchillo, partes tu bocadillo en dos.", C: "Sacas el cuchillo y divides tu bocadillo en dos mitades justas." },
            say: { A: "Toma, para el tren.", B: "Toma, para el viaje. En el tren no hay comida.", C: "Para el viaje. El bar del tren cierra antes que tus esperanzas." },
            reply: { A: "Henrik sonríe. «¡Gracias! ¿Cómo se dice antes de comer?»", B: "Henrik sonríe. «¡Gracias! ¿Y qué se dice antes de comer en español?»", C: "Henrik acepta la mitad. «Qué amable. ¿Hay alguna expresión para antes de comer?»" },
            mood: "smile", next: "ensenar",
          },
          corazon: {
            act: HEART,
            say: { A: "¡Me alegro mucho de verte! ¿Qué tal tu noche?", B: "¡Qué alegría verte! ¿Qué tal te fue la noche?", C: "Qué alegría. Cuéntame, ¿qué tal la aventura nocturna?" },
            reply: { A: "Henrik sonríe. «¡Hablé con cinco personas en español! ¡Cinco!»", B: "Henrik sonríe orgulloso. «¡Pregunté a cinco personas en español y todos me entendieron!»", C: "A Henrik le brillan los ojos. «Cinco conversaciones en español. Cinco. Nadie me cambió al inglés.»" },
            mood: "love", next: "ensenar",
          },
        },
      },
      ensenar: {
        who: "henrik", mood: "smile",
        line: {
          A: "Henrik saca una libreta. «¡Una expresión más! Algo útil.»",
          B: "Henrik abre una libreta llena de palabras. «¡Una expresión más! Algo útil y bonito.»",
          C: "Henrik abre una libreta llena de palabras subrayadas. «Una expresión más. Útil, bonita y, si puede ser, un poco rara.»",
        },
        options: [
          {
            id: "quebien",
            say: { A: "«¡Qué bien!». Es para decir que algo te gusta.", B: "«¡Qué bien!». La usas cuando algo te alegra. Es muy fácil.", C: "«¡Qué bien!». Corta, alegre y sirve para casi todo, hasta para fingir interés." },
            reply: { A: "Henrik escribe. «¡Qué bien! ¡Me gusta!»", B: "Henrik la escribe con cuidado. «¡Qué bien! Es muy fácil… ¡Qué bien!»", C: "Henrik la anota y subraya dos veces. «Para fingir interés. Esto es muy valioso.»" },
            mood: "smile", next: "practicar",
          },
          {
            id: "nopasa",
            say: { A: "«No pasa nada». Es para tranquilizar a alguien.", B: "«No pasa nada». La usas para tranquilizar a alguien o para perdonar.", C: "«No pasa nada». Sirve para quitarle peso a casi cualquier cosa." },
            reply: { A: "Henrik escribe. «No pasa nada. Bonito.»", B: "Henrik la anota. «No pasa nada. Me gusta. Es como un abrazo con palabras.»", C: "Henrik la anota, pensativo. «Quitar peso a las cosas. Creo que la voy a usar mucho.»" },
            mood: "smile", next: "practicar",
          },
          {
            id: "volando",
            say: { A: "«¡Me voy volando!». Es para cuando tienes prisa.", B: "«¡Me voy volando!». Se dice cuando tienes mucha prisa. Como tú ahora.", C: "«Me voy volando». Perfecta para tu situación: literal y figurada a la vez." },
            reply: { A: "Henrik mira el reloj. «¡Uy! ¡Me voy volando!»", B: "Henrik mira el reloj y abre los ojos. «¡Me voy volando! ¡De verdad!»", C: "Henrik mira el reloj y se ríe. «¡Me voy volando! Literal y figurada. ¡Adiós!»" },
            mood: "surprised", end: "tren",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "«Fue un placer conocerte». Es para despedirse.", B: "Te enseño «Fue un placer conocerte». Es para despedirse de alguien especial.", C: "«Fue un placer conocerte». Para despedirte de gente que te importa, como yo." },
            reply: { A: "Henrik te mira. «Fue un placer conocerte.» Y te abraza.", B: "Henrik la repite despacio y te mira. «Fue un placer conocerte.» Luego te abraza.", C: "Henrik la estrena contigo, muy serio. «Fue un placer conocerte.» Después te abraza." },
            mood: "love", end: "amigos",
          },
        },
      },
      practicar: {
        who: "henrik", mood: "neutral",
        line: {
          A: "Henrik dice la expresión. No suena muy bien. «¿Así? ¿Está bien?»",
          B: "Henrik dice la expresión con mucho acento y se ríe. «¿Así? ¿Lo dije bien?»",
          C: "Henrik pronuncia la expresión con valentía y un acento considerable. «Sé sincero: ¿sonó a español o a otra cosa?»",
        },
        options: [
          {
            id: "corregir",
            say: { A: "Casi. Más despacio. Repite conmigo.", B: "Casi perfecto. Dilo más despacio, sílaba por sílaba.", C: "Muy cerca. Despacio, sílaba a sílaba, y sin miedo a la erre." },
            reply: { A: "Henrik repite despacio. ¡Ahora está perfecto!", B: "Henrik lo repite despacio, sílaba por sílaba. Esta vez suena perfecto. «¡Sí!»", C: "Henrik lo repite despacio y le sale impecable. Levanta los brazos como si ganara un partido." },
            mood: "smile", end: "aprende",
          },
          {
            id: "animar",
            say: { A: "¡Perfecto! Ahora dilo en el quiosco.", B: "¡Muy bien! Ahora pruébala con el señor del quiosco.", C: "Impecable. Ahora la prueba de fuego: úsala con el señor del quiosco." },
            reply: { A: "Henrik va al quiosco y lo dice. El señor sonríe.", B: "Henrik va al quiosco y la usa. El señor del quiosco le contesta y Henrik vuelve feliz.", C: "Henrik cruza al quiosco, la suelta con naturalidad y recibe una sonrisa. Vuelve como un campeón." },
            mood: "smile", end: "aprende",
          },
          {
            id: "tren",
            say: { A: "¡Henrik, tu tren! ¡Corre!", B: "¡Henrik, mira el reloj! ¡Tu tren!", C: "La pronunciación, después. ¡Tu tren está saliendo!" },
            reply: { A: "Henrik mira el reloj. «¡Ay! ¡Adiós! ¡Gracias!»", B: "Henrik mira el panel y grita. «¡Mi tren! ¡Gracias por todo!»", C: "Henrik mira el panel y sale disparado. «¡Gracias! ¡Practico en el tren!»" },
            mood: "surprised", end: "tren",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Hablas muy bien. Eres muy valiente.", B: "Hablas muy bien. Y lo más importante: no tienes miedo a equivocarte.", C: "Tu español tiene algo que no se aprende en los libros: valentía." },
            reply: { A: "Henrik te da su mapa. «Para ti. Un recuerdo.»", B: "Henrik se emociona y te da su mapa. «Para ti. Así te acuerdas del turista perdido.»", C: "Henrik te regala el mapa, lleno de notas. «Para ti. Prueba de que perderse también sirve.»" },
            mood: "love", end: "amigos",
          },
        },
      },
      calmar: {
        who: "henrik", mood: "scared",
        line: {
          A: "Henrik da dos pasos atrás. «Eh… ¿Esto es normal aquí?»",
          B: "Henrik da dos pasos atrás y aprieta el mapa. «Eh… ¿Esto es normal en esta ciudad?»",
          C: "Henrik retrocede, abrazado a su mapa. «Mi guía no mencionaba esto. ¿Es costumbre local?»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "No, no es normal. Perdón. Lo guardo.", B: "No, para nada. Perdóname, lo guardo ya.", C: "En absoluto. Perdona, ha sido un pésimo recibimiento. Lo guardo." },
            reply: { A: "Henrik respira. «Bueno. ¿Me enseñas una expresión?»", B: "Henrik respira hondo. «Bueno… ¿Me enseñas algo en español para olvidar esto?»", C: "Henrik suelta el aire. «Bien. Entonces enséñame algo para borrar este momento.»" },
            mood: "worried", next: "ensenar",
          },
          {
            id: "broma",
            say: { A: "Es parte de la clase de español.", B: "Tranquilo, es parte de la clase de español.", C: "Es una técnica de enseñanza muy avanzada." },
            reply: { A: "Henrik no se ríe. «Prefiero aprender con una app.» Se va rápido.", B: "Henrik no se ríe. «Creo que prefiero aprender con una aplicación.» Se va rápido.", C: "Henrik no le ve la gracia. «Volveré a la aplicación del búho.» Y se aleja a toda prisa." },
            mood: "scared", end: "susto",
          },
          {
            id: "explicar",
            say: { A: "Es una historia larga. Pero no es para ti.", B: "Es una historia larga, pero te juro que no es para ti.", C: "Tiene explicación, aunque no cabe en quince minutos. Y no va contigo." },
            reply: { A: "Henrik duda. «Bueno… Te creo. Un poco.»", B: "Henrik duda, pero asiente. «Bueno. Te creo. Un poco. ¿Una expresión rápida?»", C: "Henrik te mira largo rato. «Confío en mi guía. Más o menos. ¿Una expresión rápida?»" },
            mood: "worried", next: "ensenar",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Perdón, Henrik. Soy yo, tu guía. ¿Un abrazo?", B: "Perdóname, Henrik. Soy yo, tu guía de siempre. ¿Me das ese abrazo?", C: "Perdona, Henrik. Sigo siendo tu guía de confianza. ¿Retomamos ese abrazo?" },
            reply: { A: "Henrik se ríe y te abraza. «¡Mi guía!»", B: "Henrik se ríe y te abraza fuerte. «¡Mi guía favorito! Me asustaste.»", C: "Henrik se ríe y te abraza, aliviado. «Susto superado. Abrazo recuperado.»" },
            mood: "love", next: "ensenar",
          },
        },
      },

      // ── variantes
      "cuchillo-inicio": {
        who: "henrik", mood: "scared",
        line: {
          A: "Henrik ve el cuchillo y da dos pasos atrás. «¡Hola! Eh… ¿Por qué tienes un cuchillo? ¿Es normal aquí?»",
          B: "Henrik te reconoce, sonríe… y ve el cuchillo. Se queda helado y retrocede. «Hola. Eh… ¿Por qué llevas un cuchillo? No me dijiste que aquí se saluda así.»",
          C: "Henrik te reconoce, abre los brazos… y los baja al ver el cuchillo. «Mi guía… con un cuchillo. Mi libro de viaje no mencionaba esta variante del saludo.»",
        },
        options: [
          {
            id: "bocadillo",
            act: { A: "Cortas tu bocadillo y le das la mitad.", B: "Cortas tu bocadillo en dos y le das la mitad.", C: "Partes el bocadillo en dos mitades justas y le ofreces una." },
            say: { A: "Es para el bocadillo. Toma, para el tren.", B: "Es para el bocadillo. Toma una mitad, para el viaje.", C: "Es para el bocadillo, no para el turista. Toma una mitad, que en el tren no hay comida." },
            reply: { A: "Henrik duda y la toma. «Gracias. Pero, por favor, guarda el cuchillo.»", B: "Henrik duda, pero acepta la mitad. «Gracias, de verdad. Pero guarda el cuchillo, por favor.»", C: "Henrik acepta la mitad con dos dedos. «Gracias. Pero guarda el cuchillo, o me atraganto de los nervios.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "disculpa",
            act: { A: "Guardas el cuchillo.", B: "Guardas el cuchillo enseguida.", C: "Guardas el cuchillo con rapidez." },
            say: { A: "No, no es normal. Perdón. Lo guardo.", B: "No, para nada. Perdóname, lo guardo ahora mismo.", C: "No, en absoluto. Perdona, qué manera de recibirte. Ya está guardado." },
            reply: { A: "Henrik respira. «Uf. En mi país, nadie hace eso.»", B: "Henrik respira. «Uf. En Dinamarca, esto saldría en el periódico.»", C: "Henrik exhala. «En Dinamarca esto sería portada de periódico y tema de debate parlamentario.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "mostrar",
            act: { A: "Levantas el cuchillo para enseñarlo.", B: "Levantas el cuchillo para enseñárselo.", C: "Levantas el cuchillo para explicar de qué se trata." },
            say: { A: "Mira. Es muy bueno. ¡Mira!", B: "Mira, es un cuchillo buenísimo. ¡Míralo!", C: "Fíjate qué filo. Es un cuchillo extraordinario, ¿no?" },
            reply: { A: "Henrik grita en danés y corre hacia un guardia. «¡Policía! ¡Cuchillo!»", B: "Henrik grita algo en danés y corre hacia un guardia. «¡Policía! ¡Ese hombre tiene un cuchillo!»", C: "Henrik suelta una frase en danés y corre hacia el guardia. «¡Policía! ¡Mi guía ha perdido la cabeza!»" },
            mood: "terror", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-calma": {
        who: "henrik", mood: "neutral",
        line: {
          A: "Henrik come un poco del bocadillo. «Bueno. Ahora enséñame una expresión. ¿Cómo se dice «tengo miedo» en español?»",
          B: "Henrik respira y mordisquea el bocadillo. «Bueno, ya pasó. Ahora quiero aprender algo útil: ¿cómo se dice «tuve mucho miedo» en español?»",
          C: "Henrik se recompone y muerde el bocadillo con dignidad. «Superado. Ahora, en el espíritu del aprendizaje: ¿cómo se dice «me has dado un susto de muerte»?»",
        },
        options: [
          {
            id: "miedo",
            say: { A: "«Tengo miedo». O «Me asusté». Repite: ¡Me asusté!", B: "«Me has dado un susto». Repite despacio: ¡me has dado un susto!", C: "«Me has dado un susto de muerte». Repítelo con el acento de quien lo ha vivido." },
            reply: { A: "Henrik repite: «Me asusté». Se ríe. El tren llega.", B: "Henrik repite con acento duro: «Me has dado un susto». Se ríe y se relaja. El tren anuncia su salida.", C: "Henrik lo repite con dramatismo. «Me has dado un susto de muerte.» Los dos se ríen. El tren anuncia su salida." },
            mood: "smile", end: "cuchillo-tren",
          },
          {
            id: "broma",
            say: { A: "En español decimos: «Cuidado, que corta».", B: "En español decimos: «Cuidado con el cuchillo, que corta». Es una advertencia.", C: "Aprende esta: «Cuidado con la lengua, que corta más que un cuchillo». Es un refrán bien afilado." },
            reply: { A: "Henrik no se ríe. «Mejor tomo el tren.» Se va rápido.", B: "Henrik no le ve la gracia. «Creo que mejor me voy al tren.» Se va rápido.", C: "Henrik anota el refrán, pero con la mirada en tu bolsillo. «Interesante. Pero tomaré el tren ya.» Se va con prisa." },
            mood: "scared", end: "cuchillo-susto",
          },
          {
            id: "amigos",
            say: { A: "Perdón otra vez. ¿Me escribes cuando llegues?", B: "Perdón otra vez por el susto. ¿Me escribes cuando llegues a casa?", C: "Mil perdones. ¿Me escribes cuando llegues? Prometo que no habrá cuchillos en la respuesta." },
            reply: { A: "Henrik se ríe y te da su correo. «Escríbeme tú.»", B: "Henrik se ríe y te escribe su correo en el mapa. «Escríbeme tú primero, en español.»", C: "Henrik se ríe y anota su correo en el mapa. «Escríbeme tú primero. Y sin cuchillos adjuntos.»" },
            mood: "smile", end: "cuchillo-tren",
          },
        ],
      },
      "pistola-inicio": {
        who: "henrik", mood: "terror",
        line: {
          A: "Henrik ve la pistola. Levanta las manos y suelta el mapa. «¡No, por favor! ¡Soy turista! ¡Toma mi dinero!»",
          B: "Henrik ve la pistola y levanta las manos. El mapa cae al suelo. «¡No, por favor! ¡Soy turista! ¡Toma mi dinero, pero no me hagas nada!»",
          C: "Henrik ve la pistola y sus dos metros de altura se encogen. Levanta las manos y el mapa se cae. «Por favor, soy un turista danés. Mi cartera es tuya, pero mi pasaporte no.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la pistola enseguida.", B: "Guardas la pistola enseguida.", C: "Guardas la pistola de inmediato." },
            say: { A: "¡No, Henrik! Soy yo, tu guía. Perdón.", B: "¡No, Henrik! Soy yo, tu guía. Perdóname, no es para ti.", C: "¡Henrik, soy yo, tu guía! Perdona: esto no es lo que parece." },
            reply: { A: "Henrik baja las manos despacio. «¿Mi guía? ¿Por qué tienes una pistola?»", B: "Henrik baja las manos despacio. «¿Mi guía? ¿Por qué llevas una pistola? ¿Qué está pasando?»", C: "Henrik baja las manos con cautela. «¿Mi guía, armado? Esto merece una explicación en un español muy sencillo.»" },
            mood: "worried", next: "pistola-miedo",
          },
          {
            id: "tranquilizar",
            say: { A: "Tranquilo. No quiero tu dinero. Solo saludar.", B: "Tranquilo, no quiero tu dinero. Solo vine a saludarte.", C: "Tranquilo, Henrik. Tu cartera está a salvo. Yo solo quería saludar." },
            reply: { A: "Henrik no baja las manos. «¿Saludar con una pistola?»", B: "Henrik no baja las manos. «¿Saludar con una pistola? ¿Así saluda la gente aquí?»", C: "Henrik mantiene las manos arriba. «¿Saludar con una pistola? Eso no salía en el libro de frases útiles.»" },
            mood: "scared", next: "pistola-miedo",
          },
          {
            id: "ordenar",
            act: { A: "No guardas la pistola.", B: "Sigues con la pistola en la mano.", C: "Mantienes la pistola en alto." },
            say: { A: "Dame el mapa. Ahora.", B: "Dame el mapa y la cartera. Ahora mismo.", C: "El mapa y la cartera. No lo repetiré." },
            reply: { A: "Henrik grita. Un guardia llega corriendo con la radio.", B: "Henrik grita en danés y un guardia llega corriendo con la radio. «¡Suelte el arma!»", C: "Henrik lanza un grito en danés y un guardia de la estación llega corriendo, radio en mano. «¡Suelte el arma, ahora!»" },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },
      "pistola-miedo": {
        who: "henrik", mood: "scared",
        line: {
          A: "Henrik tiembla. «No quiero problemas. Solo quiero mi tren. ¿Cómo se dice «no quiero problemas» en español?»",
          B: "Henrik tiembla un poco. «No quiero problemas, de verdad. Solo quiero mi tren. ¿Cómo se dice «no quiero problemas» en español?»",
          C: "Henrik, pálido, saca la libreta por pura supervivencia. «No quiero problemas, solo mi tren. Y, ya que estamos, ¿cómo se dice eso mismo en español?»",
        },
        options: [
          {
            id: "frase",
            say: { A: "«No quiero problemas». Repite conmigo.", B: "«No quiero problemas.» Repítelo despacio, sílaba por sílaba.", C: "«No quiero problemas.» Dilo con toda la convicción del mundo." },
            reply: { A: "Henrik repite: «No quiero problemas». Sonríe un poco. Llega el tren.", B: "Henrik lo repite con su acento. Sonríe un poco, aliviado. El tren anuncia la salida.", C: "Henrik lo repite con voz de barítono asustado. Los dos se ríen un poco. El tren anuncia la salida." },
            mood: "worried", end: "pistola-tren",
          },
          {
            id: "disculpa",
            say: { A: "Lo siento mucho. Fue un error. Ve a tu tren.", B: "Lo siento muchísimo. Fue un error mío. Ve a tu tren, por favor.", C: "Lo siento de verdad. Fue un error imperdonable. Ve a tu tren, que es lo único que importa." },
            reply: { A: "Henrik asiente y recoge el mapa. Corre al andén sin mirar atrás.", B: "Henrik asiente, recoge el mapa y corre hacia el andén sin mirar atrás.", C: "Henrik asiente, recoge el mapa del suelo y desaparece hacia el andén sin volver la cabeza." },
            mood: "sad", end: "pistola-susto",
          },
          {
            id: "seguridad",
            say: { A: "La llevo por seguridad. La ciudad es peligrosa.", B: "La llevo por seguridad, Henrik. La ciudad de noche es peligrosa.", C: "La llevo por seguridad, Henrik. Es un detalle más de la fauna local, por desgracia." },
            reply: { A: "Henrik llama a la policía. «Aquí hay un hombre armado.»", B: "Henrik saca el celular y llama a la policía. «Hay un hombre armado en la estación.»", C: "Henrik saca el celular con dedos temblorosos y llama a la policía. «Un hombre armado en la estación. Sí, mi guía.»" },
            mood: "scared", end: "pistola-policia",
          },
        ],
      },
      "granada-inicio": {
        who: "henrik", mood: "terror",
        line: {
          A: "Henrik ve la granada. Grita en danés y suelta su mapa. «¡Una granada! ¡Todos fuera!»",
          B: "Henrik ve la granada y grita algo en danés. Suelta el mapa y se tapa la cabeza. «¡Una granada! ¡Todo el mundo fuera!»",
          C: "Henrik ve la granada y suelta un grito en danés que hace volar las palomas de la estación. Tira el mapa y se tapa la cabeza. «¡Una granada! ¡Evacuen!»",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Es un recuerdo!", B: "¡Es de juguete, Henrik! ¡Es un recuerdo de la ciudad!", C: "¡Es de plástico, Henrik! Un recuerdo de la ciudad, de lo más típico." },
            reply: { A: "Henrik mira entre los dedos. «¿Un recuerdo? ¡Qué recuerdo tan malo!»", B: "Henrik mira entre los dedos. «¿Un recuerdo? ¿Quién vende recuerdos así?»", C: "Henrik mira entre los dedos. «¿Un recuerdo típico? Mi guía tiene un humor muy peculiar.»" },
            mood: "scared", next: "granada-banco",
          },
          {
            id: "tirar",
            act: { A: "Tiras la granada lejos.", B: "Lanzas la granada hacia las vías.", C: "Lanzas la granada hacia las vías, lo más lejos posible." },
            say: { A: "¡Al suelo, Henrik!", B: "¡Al suelo, Henrik! ¡Cúbrete!", C: "¡Al suelo, Henrik! ¡Cúbrete la cabeza!" },
            reply: { A: "La granada rueda por la vía. No pasa nada. Suena la alarma. Llega la policía.", B: "La granada rueda por la vía y no explota. Suena la alarma de evacuación. Llega la policía y, poco después, un helicóptero.", C: "La granada rueda por la vía sin explotar. Suena la alarma, llega la policía y, minutos después, un helicóptero ilumina la estación." },
            mood: "terror", end: "granada-helicoptero",
          },
          {
            id: "correr",
            act: { A: "Corres con Henrik hacia la salida.", B: "Agarras a Henrik del brazo y corren juntos hacia la salida.", C: "Tomas a Henrik del brazo y corren juntos hacia la salida." },
            say: { A: "¡Corre conmigo!", B: "¡Corre conmigo, Henrik!", C: "¡Corre, Henrik! ¡Tus piernas son más largas que las mías!" },
            reply: { A: "Los dos corren. Henrik, con sus piernas largas, te deja atrás.", B: "Los dos corren por el andén entre gritos. Henrik, con sus piernas larguísimas, te adelanta enseguida.", C: "Corren por el andén entre gritos. Henrik, con sus piernas de jirafa, te deja atrás en tres zancadas." },
            mood: "scared", next: "granada-banco",
          },
        ],
      },
      "granada-banco": {
        who: "henrik", mood: "surprised",
        line: {
          A: "Fuera de la estación, Henrik respira fuerte. «Se me fue el tren por tu granada. ¡Pero qué aventura!»",
          B: "Fuera de la estación, Henrik jadea. «Mi tren se fue sin mí por tu granada. Pero… ¡qué aventura! ¡Nadie en Dinamarca me va a creer!»",
          C: "Fuera de la estación, Henrik se apoya en las rodillas, jadeando. «Mi tren se fue. Mi dignidad también. Pero tengo la mejor anécdota de mi viaje.»",
        },
        options: [
          {
            id: "expresion",
            say: { A: "Aprende esta: «¡Qué susto!». Y esta: «¡Qué locura!».", B: "Aprende estas dos: «¡Qué susto!» y «¡Qué locura!». Hoy las vas a usar mucho.", C: "Dos expresiones para la ocasión: «¡Qué susto!» y «¡Qué locura!». Ambas son baratas y de mucho uso." },
            reply: { A: "Henrik las repite riéndose. «¡Qué susto! ¡Qué locura!»", B: "Henrik las repite riéndose a carcajadas. «¡Qué susto! ¡Qué locura! Esta noche las he vivido.»", C: "Henrik las repite entre carcajadas. «¡Qué susto! ¡Qué locura! Las he vivido con la voz y con las piernas.»" },
            mood: "laugh", end: "granada-tren",
          },
          {
            id: "disculpa",
            say: { A: "Perdóname. Te compro otro billete.", B: "Perdóname, Henrik. Te compro otro billete para el próximo tren.", C: "Perdóname. Te compro el próximo billete, es lo mínimo que puede hacer un guía temerario." },
            reply: { A: "Henrik sonríe. «Acepto. Pero la granada se queda aquí.»", B: "Henrik sonríe, cansado. «Acepto. Pero la granada se queda aquí fuera, lejos de mí.»", C: "Henrik sonríe, vencido. «Acepto el billete. Pero la granada se queda en una alcantarilla, a ser posible.»" },
            mood: "smile", end: "granada-tren",
          },
          {
            id: "silencio",
            act: { A: "No dices nada.", B: "No dices nada y miras al cielo.", C: "No dices nada. Miras al cielo, resignado." },
            say: { A: "…", B: "…", C: "…" },
            reply: { A: "Se oye un helicóptero. La policía cierra la calle.", B: "Se oye un helicóptero que se acerca. La policía cierra la calle y los rodea.", C: "Un helicóptero se acerca con su foco. La policía cierra la calle y los rodea con una calma profesional." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "gas-inicio": {
        who: "henrik", mood: "surprised",
        line: {
          A: "Henrik ve el gas pimienta y se tapa la cara con el mapa. «¡No! ¡Soy yo, Henrik! ¡El turista!»",
          B: "Henrik ve el gas pimienta y se protege la cara con el mapa. «¡No, no! ¡Soy yo, Henrik! ¡El turista del mapa!»",
          C: "Henrik ve el gas pimienta y levanta el mapa como un escudo. «¡Soy yo, Henrik! Mi cara es memorable por lo alta, no por lo peligrosa.»",
        },
        options: [
          {
            id: "bajar",
            act: { A: "Bajas el gas.", B: "Bajas el gas pimienta.", C: "Bajas el gas pimienta con una media sonrisa." },
            say: { A: "¡Henrik! Perdón. Fue un reflejo. Hay mucho miedo aquí.", B: "¡Henrik! Perdona, fue un reflejo. A esta hora hay mucho miedo en la estación.", C: "¡Henrik! Perdona, reflejo condicionado. A esta hora, la estación pone nervioso a cualquiera." },
            reply: { A: "Henrik baja el mapa. «¡Casi me rocías! ¡Pero entiendo!»", B: "Henrik baja el mapa. «Casi me rocías. Pero entiendo, la estación a esta hora da respeto.»", C: "Henrik baja el mapa. «Casi me bautizas con pimienta. Pero entiendo: la estación de noche impone.»" },
            mood: "smile", next: "gas-charla",
          },
          {
            id: "apuntar",
            act: { A: "Sigues apuntando.", B: "Sigues apuntando con el gas.", C: "Mantienes el gas apuntando a su cara." },
            say: { A: "No te acerques. No te conozco.", B: "No te acerques. Ya no sé quién eres.", C: "No te acerques. A estas horas no me fío ni de mi sombra." },
            reply: { A: "Henrik se asusta. «¡Eres mi guía!» Corre a buscar al guardia.", B: "Henrik se asusta de verdad. «¡Pero si eres mi guía!» Corre a buscar al guardia.", C: "Henrik se asusta de verdad. «¡Pero si eres mi guía! ¿Qué te pasa?» Corre a buscar a un guardia." },
            mood: "scared", end: "gas-susto",
          },
          {
            id: "rociar",
            act: { A: "Se te escapa un poco de gas.", B: "Se te escapa un chorro de gas pimienta.", C: "Se te escapa un chorrito de gas pimienta hacia él." },
            say: { A: "¡Ay! ¡Perdón, Henrik!", B: "¡Ay, Henrik! ¡Perdón, se me escapó!", C: "¡Ay, Henrik! ¡Perdón, ha sido sin querer!" },
            reply: { A: "Henrik tose y llora. «¡Mis ojos! ¡Agua!» Llega una ambulancia.", B: "Henrik tose y llora, con los ojos rojos. «¡Mis ojos! ¡Necesito agua!» Un guardia llama a una ambulancia.", C: "Henrik tose y llora con los ojos rojos. «¡Mis ojos! ¡Agua, por favor!» Un guardia pide una ambulancia." },
            mood: "pain", end: "gas-ambulancia",
          },
        ],
      },
      "gas-charla": {
        who: "henrik", mood: "smile",
        line: {
          A: "Henrik se limpia la cara. «¿Cómo se dice gas pimienta en danés? «Peberspray». Y en español, ¿qué otra palabra enseñas?»",
          B: "Henrik se seca la frente. «En danés se dice «peberspray». Ahora tú: ¿qué expresión me enseñas para una situación así?»",
          C: "Henrik se seca la frente y recupera la libreta. «En danés se dice «peberspray», una palabra que ahora tiene para mí connotaciones. ¿Qué expresión española corresponde a este momento?»",
        },
        options: [
          {
            id: "expresion",
            say: { A: "«No pasa nada». Y «Casi, casi». Escríbelas.", B: "«No pasa nada» y «Menos mal». Escríbelas, que hoy son muy útiles.", C: "«No pasa nada» y «Menos mal». Apúntalas con subrayado doble: te sobrevivirán." },
            reply: { A: "Henrik las anota. Sonríe. «Gracias, guía.» Llega su tren.", B: "Henrik las anota con cuidado. Sonríe, ya relajado. «Gracias, guía.» El tren entra en el andén.", C: "Henrik las anota y las subraya dos veces. «Gracias, guía.» El tren entra en el andén y la noche se tranquiliza." },
            mood: "smile", end: "gas-tren",
          },
          {
            id: "consejo",
            say: { A: "En esta ciudad, cuida tu mochila y no vayas solo.", B: "Un consejo, Henrik: en esta ciudad, de noche, cuida la mochila y no vayas solo.", C: "Un consejo de guía: de noche, cuida la mochila, acompáñate de gente y sonríe mucho." },
            reply: { A: "Henrik asiente. «Gracias. Voy a tener cuidado.» Toma el tren.", B: "Henrik asiente, serio. «Gracias por el consejo. Prometo tener cuidado.» Toma el tren.", C: "Henrik asiente, solemne. «Consejo anotado. Y la sonrisa, también.» Toma el tren con paso firme." },
            mood: "smile", end: "gas-tren",
          },
          {
            id: "paranoia",
            say: { A: "No te fíes de nadie, Henrik. De nadie.", B: "No te fíes de nadie en esta ciudad, Henrik. Ni de mí.", C: "No te fíes de nadie, Henrik. Ni de mí, por si acaso." },
            reply: { A: "Henrik se pone nervioso. «Entonces me voy.» Se aleja rápido.", B: "Henrik se pone nervioso. «Entonces mejor me voy al tren, solo.» Se aleja rápido.", C: "Henrik traga saliva. «Entonces me voy al tren, solo y sin fiarme de nadie.» Se aleja con prisa." },
            mood: "worried", end: "gas-susto",
          },
        ],
      },
      "lapiz-inicio": {
        who: "henrik", mood: "smile",
        line: {
          A: "Henrik ve tu lápiz y sonríe. «¡Perfecto! ¿Puedes escribirme algo útil en mi mapa?»",
          B: "Henrik ve tu lápiz y se anima. «¡Perfecto! Justo lo que necesito. ¿Me escribes algo útil en el mapa para el viaje?»",
          C: "Henrik ve tu lápiz y exclama como quien encuentra un tesoro. «¡Un lápiz! Mi mapa está lleno de huecos. ¿Me dejas una huella de guía en él?»",
        },
        options: [
          {
            id: "frase",
            act: { A: "Escribes una frase en el mapa.", B: "Escribes una frase útil en el margen del mapa.", C: "Escribes una frase en el margen del mapa, con letra clara." },
            say: { A: "Mira: «¿Dónde está la estación?». Es muy útil.", B: "Mira: «¿Dónde está la estación, por favor?». Te sirve en cualquier ciudad.", C: "Mira: «¿Podría decirme dónde está la estación?». Elegante y a prueba de pánico." },
            reply: { A: "Henrik lee. «¿Dónde está la estación?» Lo repite tres veces.", B: "Henrik lee en voz alta y lo repite tres veces. «¡Dónde está la estación, por favor!»", C: "Henrik lee en voz alta con entonación de actor. «Podría decirme dónde está la estación». Lo repite tres veces." },
            mood: "smile", next: "lapiz-mapa",
          },
          {
            id: "dibujo",
            act: { A: "Dibujas un sol en el mapa.", B: "Dibujas un sol sonriente en el mapa.", C: "Dibujas un sol sonriente en la esquina del mapa." },
            say: { A: "Mira. Es para que no te pierdas.", B: "Mira, es un sol. Para que tu viaje siempre tenga luz.", C: "Mira: un sol. Para que tu mapa, además de útil, sea optimista." },
            reply: { A: "Henrik sonríe. «Es muy bonito. Gracias.»", B: "Henrik sonríe, conmovido. «Es muy bonito. Lo voy a enseñar en Dinamarca.»", C: "Henrik sonríe, conmovido. «Un sol español en un mapa danés. Eso sí es integración.»" },
            mood: "love", next: "lapiz-mapa",
          },
          {
            id: "firmar",
            say: { A: "Firmo aquí: «Tu guía, siempre».", B: "Firmo aquí abajo: «Tu guía de siempre». Así me recuerdas.", C: "Firmo al pie: «Tu guía de fortuna». Para que la historia tenga firma." },
            reply: { A: "Henrik se ríe. «¡Qué bien!» Guarda el mapa.", B: "Henrik se ríe y guarda el mapa como una joya. «¡Qué bien! Ahora sí es mi mapa.»", C: "Henrik se ríe y guarda el mapa en la mochila como una reliquia. «Autografiado y todo. Mis amigos no lo creerán.»" },
            mood: "smile", end: "lapiz-amigos",
          },
        ],
      },
      "lapiz-mapa": {
        who: "henrik", mood: "smile",
        line: {
          A: "Henrik mira el reloj. «Todavía tengo diez minutos. ¿Escribes otra frase? ¿Una para decir adiós?»",
          B: "Henrik mira el reloj. «Me quedan diez minutos. ¿Me escribes otra frase, una para despedirme de la gente?»",
          C: "Henrik consulta el reloj. «Diez minutos hasta el tren. ¿Me regalas una última frase, una para despedirme como un nativo?»",
        },
        options: [
          {
            id: "adios",
            say: { A: "«Hasta pronto». Es corta y bonita.", B: "«Hasta pronto» o «Cuídate mucho». Las dos sirven para despedirse.", C: "«Hasta pronto» para los amigos y «Que tengas buen viaje» para los que ya lo son." },
            reply: { A: "Henrik las lee. «Hasta pronto.» Te da la mano.", B: "Henrik las lee con cuidado. «Hasta pronto. Cuídate mucho.» Te da la mano.", C: "Henrik las lee con emoción. «Hasta pronto. Que tengas buen viaje.» Te estrecha la mano con las dos suyas." },
            mood: "smile", end: "lapiz-aprende",
          },
          {
            id: "direccion",
            say: { A: "Te apunto mi correo. Escríbeme.", B: "Te apunto mi correo en el mapa. Escríbeme cuando llegues.", C: "Te apunto mi correo. Escríbeme en español, aunque sea mal." },
            reply: { A: "Henrik guarda el mapa. «¡Escribo en español!» Se va contento.", B: "Henrik guarda el mapa con cariño. «Te escribo en español, lo prometo.» Se va contento.", C: "Henrik guarda el mapa con ceremonia. «Te escribo en español con todos los errores. Palabra de danés.» Se va contento." },
            mood: "smile", end: "lapiz-amigos",
          },
          {
            id: "tren",
            say: { A: "¡Henrik, el tren! Corre.", B: "¡Henrik, mira el panel! ¡Tu tren sale ya!", C: "¡Henrik, el panel! Tu tren se despide y tú sigues aquí." },
            reply: { A: "Henrik corre con el mapa en la mano. «¡Gracias!»", B: "Henrik sale corriendo con el mapa en la mano. «¡Gracias por todo, guía!»", C: "Henrik sale disparado, con el mapa ondeando. «¡Gracias, guía! ¡Hasta pronto!»" },
            mood: "surprised", end: "lapiz-aprende",
          },
        ],
      },
      "libro-inicio": {
        who: "henrik", mood: "surprised",
        line: {
          A: "Henrik ve tu libro. «¿Un libro? ¿Es un diccionario? ¡Perfecto! ¿Me enseñas una palabra bonita?»",
          B: "Henrik ve tu libro y abre mucho los ojos. «¿Un libro? ¿Es un diccionario? ¡Genial! ¿Me enseñas una palabra bonita?»",
          C: "Henrik ve tu libro y su cara se ilumina como si hubiera visto un oasis. «¿Un diccionario? ¡Un hombre con un libro! ¿Me regalas una palabra bonita para el viaje?»",
        },
        options: [
          {
            id: "palabra",
            act: { A: "Abres el libro en una página.", B: "Abres el libro en una página al azar.", C: "Abres el libro en una página al azar y eliges una palabra." },
            say: { A: "Mira: «sobremesa». Es un momento bonito después de comer.", B: "Mira: «sobremesa». Es el rato de charla después de comer. No tiene traducción.", C: "Mira: «sobremesa». Esa charla pausada de después de comer. Ninguna lengua nórdica tiene algo igual." },
            reply: { A: "Henrik repite: «Sobremesa». Lo anota. «¡Qué bonito!»", B: "Henrik la repite despacio y la anota. «Sobremesa. Qué palabra tan bonita. En Dinamarca no existe.»", C: "Henrik la anota y la subraya. «Sobremesa. Mi país se ha quedado sin ese concepto. Voy a introducirlo.»" },
            mood: "smile", next: "libro-frase",
          },
          {
            id: "regalo",
            say: { A: "Es para ti. Quédatelo. Para el viaje.", B: "Es para ti, Henrik. Quédatelo para el viaje.", C: "Es tuyo, Henrik. Un turista sin libro es solo un caminante con mapa." },
            reply: { A: "Henrik abraza el libro. «¡Gracias! ¡Lo voy a leer!»", B: "Henrik abraza el libro, emocionado. «¡Gracias! Lo voy a leer en el tren, despacio.»", C: "Henrik abraza el libro, conmovido. «Gracias. Lo leeré entero, aunque tarde un año.»" },
            mood: "love", next: "libro-frase",
          },
          {
            id: "excusa",
            say: { A: "No es un diccionario. Es mi excusa para no hablar con nadie.", B: "No es un diccionario. Es mi excusa para no hablar con nadie de noche.", C: "No es un diccionario. Es mi escudo contra las conversaciones nocturnas." },
            reply: { A: "Henrik se ríe. «¡Pero yo sí quiero hablar!»", B: "Henrik se ríe a carcajadas. «¡Pues yo vengo a romper tu escudo!»", C: "Henrik se ríe a carcajadas. «Pues soy un especialista en romper escudos con preguntas.»" },
            mood: "laugh", next: "libro-frase",
          },
        ],
      },
      "libro-frase": {
        who: "henrik", mood: "smile",
        line: {
          A: "Henrik lee una frase del libro. «Hay palabras muy difíciles. ¿Cómo se dice esto?» Te enseña una línea.",
          B: "Henrik hojea el libro y señala una línea. «Esta frase es difícil. ¿Me la lees tú, con tu voz? Quiero oír cómo suena.»",
          C: "Henrik hojea el libro y señala una línea con el dedo. «Esta frase me retuerce la lengua. ¿Me la lees tú? Quiero oír cómo suena en una voz que sepa lo que dice.»",
        },
        options: [
          {
            id: "leer",
            say: { A: "Claro. Escucha. Y repite.", B: "Con gusto. Escucha primero y repite después, despacio.", C: "Con placer. Escucha primero, repite después y no te preocupes por la erre." },
            reply: { A: "Lees la frase. Henrik repite. Casi perfecto. Aplaude.", B: "Lees la frase. Henrik la repite con acento fuerte, pero casi perfecta. Aplaude contento.", C: "Lees la frase. Henrik la repite con acento fuerte, pero con un ritmo casi perfecto. Aplaude, orgulloso de sí mismo." },
            mood: "smile", end: "libro-aprende",
          },
          {
            id: "regalar",
            say: { A: "Toma el libro. Es tuyo. Para el tren.", B: "Quédate el libro. Es tuyo. Para el tren y para la vuelta.", C: "Quédate el libro, Henrik. Léelo en el tren y que te acompañe de vuelta a casa." },
            reply: { A: "Henrik lo guarda con cuidado. «Gracias.» Corre a su tren.", B: "Henrik lo guarda en la mochila con cuidado. «Gracias de corazón.» Corre al tren.", C: "Henrik lo guarda en la mochila, junto al mapa. «Gracias de corazón.» Corre al tren sin soltar la sonrisa." },
            mood: "love", end: "libro-regalo",
          },
          {
            id: "tren",
            say: { A: "¡Henrik, tu tren! Léelo allí.", B: "¡Henrik, tu tren sale ya! Léelo en el viaje.", C: "¡Tu tren, Henrik! La frase te espera sentada, no corre." },
            reply: { A: "Henrik mira el reloj. «¡Ay!» Toma el libro y corre.", B: "Henrik mira el reloj, pálido. «¡Ay!» Toma el libro y sale corriendo.", C: "Henrik mira el reloj, pálido. «¡Ay!» Se lleva el libro prestado y sale corriendo, olvidando devolverlo." },
            mood: "surprised", end: "libro-regalo",
          },
        ],
      },
      "corazon-inicio": {
        who: "henrik", mood: "smitten",
        line: {
          A: "Henrik te ve y abre los brazos. Sus ojos brillan. «¡Mi mejor guía! ¡Te echaba de menos! ¡Dame un abrazo!»",
          B: "Henrik te ve y abre los brazos de par en par, con los ojos brillantes. «¡Mi mejor guía! ¡Te estaba buscando por toda la estación! ¡Dame un abrazo!»",
          C: "Henrik te ve y abre sus larguísimos brazos, con los ojos brillantes. «¡Mi mejor guía! Te he buscado entre trenes y relojes. ¡Un abrazo, por favor!»",
        },
        options: [
          {
            id: "abrazo",
            act: { A: "Lo abrazas.", B: "Le das un abrazo fuerte.", C: "Le devuelves el abrazo con todas tus fuerzas." },
            say: { A: "¡Henrik! Qué alegría. Gracias por volver.", B: "¡Henrik! Qué alegría verte. Gracias por volver a buscarme.", C: "¡Henrik! Qué alegría. Gracias por volver: los guías también necesitamos que nos busquen." },
            reply: { A: "Henrik te levanta del suelo. «¡Eres mi amigo!»", B: "Henrik te levanta unos centímetros del suelo. «¡Eres mi amigo español favorito!»", C: "Henrik te levanta del suelo con su metro noventa. «Eres el mejor amigo español que he hecho en una noche.»" },
            mood: "love", next: "corazon-despedida",
          },
          {
            id: "coquetear",
            say: { A: "Qué alto eres. Y qué guapo. ¿Eres de verdad danés?", B: "Qué alto eres, Henrik, y qué guapo. ¿Todos los daneses son así?", C: "Qué alto y qué guapo. ¿Todos los daneses miden lo que tu sonrisa?" },
            reply: { A: "Henrik se pone rojo. «¡Ay! Gracias. En español no sé responder.»", B: "Henrik se pone rojo hasta las orejas. «¡Ay! No sé cómo responder a esto en español. ¿Gracias?»", C: "Henrik se pone rojo hasta las orejas. «Esto no estaba en el capítulo de cortesía. ¿Gracias? ¿Muchas gracias?»" },
            mood: "smitten", next: "corazon-despedida",
          },
          {
            id: "beso",
            act: { A: "Le das un beso en la mejilla.", B: "Le das un beso en la mejilla.", C: "Le das un beso en la mejilla, como se hace aquí." },
            say: { A: "Así saludamos aquí, Henrik. Un beso.", B: "Así se saluda aquí, Henrik: con un beso en la mejilla.", C: "Así nos saludamos aquí, Henrik: un beso en la mejilla. Es la costumbre local de verdad." },
            reply: { A: "Henrik se toca la mejilla y sonríe. «Me gusta esa costumbre.»", B: "Henrik se toca la mejilla, sonriendo como un niño. «Me gusta mucho esa costumbre. Dos besos, ¿no?»", C: "Henrik se toca la mejilla y sonríe. «Esa sí que es una costumbre con la que quiero integrarme.»" },
            mood: "smitten", end: "corazon-beso",
          },
        ],
      },
      "corazon-despedida": {
        who: "henrik", mood: "love",
        line: {
          A: "Henrik mira el reloj. «Mi tren sale ya. Pero antes, dime, ¿cómo se dice «te voy a echar de menos»?»",
          B: "Henrik mira el reloj con tristeza. «Mi tren sale ya. Antes de irme, ¿cómo se dice «te voy a echar de menos» en español?»",
          C: "Henrik mira el reloj con el gesto de quien no quiere despedirse. «Mi tren sale ya. Antes de irme, enséñame cómo se dice «te voy a echar de menos» sin que suene a telenovela.»",
        },
        options: [
          {
            id: "frase",
            say: { A: "Se dice: «Te voy a echar de menos». Repite.", B: "Se dice: «Te voy a echar de menos». Dilo con los ojos en los míos.", C: "«Te voy a echar de menos.» Y si quieres telenovela, añade «con toda mi alma»." },
            reply: { A: "Henrik lo dice. Los ojos le brillan. Te abraza otra vez.", B: "Henrik lo dice despacio, sin apartar la vista. Se le humedecen los ojos. Te abraza otra vez.", C: "Henrik lo dice despacio, con toda su alma. Se le humedecen los ojos. Te abraza otra vez, sin ironía." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "sellar",
            act: { A: "Le das otro beso.", B: "Le das un beso en la mejilla.", C: "Le das un beso en la mejilla, para sellar la despedida." },
            say: { A: "Hasta pronto, Henrik. Escríbeme.", B: "Hasta pronto, Henrik. Escríbeme en español.", C: "Hasta pronto, Henrik. Escríbeme, aunque sea con errores. Los errores son parte del cariño." },
            reply: { A: "Henrik sonríe, se toca la mejilla y corre al tren.", B: "Henrik sonríe con los ojos húmedos, se toca la mejilla y corre al tren.", C: "Henrik sonríe, se toca la mejilla y corre al tren, girándose tres veces para saludarte." },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "tren",
            say: { A: "¡Corre, Henrik! No pierdas el tren.", B: "¡Corre, Henrik! No pierdas el tren por mí.", C: "¡Corre, Henrik! Que la despedida no te cueste el tren." },
            reply: { A: "Henrik corre. Desde la puerta, grita: «¡Te voy a echar de menos!»", B: "Henrik corre al andén. Desde la puerta, grita: «¡Te voy a echar de menos, guía!»", C: "Henrik sale disparado. Desde la puerta del tren, grita con voz de bajo: «¡Te voy a echar de menos!»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {

      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo y te hacen preguntas. Henrik pierde su tren.", B: "Llega la policía. Te quitan el cuchillo y te hacen preguntas largas. Henrik pierde su tren por declarar.", C: "Llega la policía y confisca el cuchillo. Henrik pierde el tren por declarar como testigo de un saludo mal entendido." }, change: "policia", recap: "El cuchillo asustó a Henrik y llegó la policía." },
      "cuchillo-tren": { text: { A: "Henrik toma el tren con su bocadillo. Te dice adiós y sonríe un poco.", B: "Henrik sube al tren con su mitad de bocadillo. Te dice adiós desde la puerta, ya sin miedo.", C: "Henrik sube al tren con su mitad de bocadillo y el susto digerido. Se despide desde la puerta con una sonrisa muy cauta." }, change: "se-va", recap: "Henrik tomó el tren con la mitad de tu bocadillo." },
      "cuchillo-susto": { text: { A: "Henrik se va rápido al tren, sin despedirse. Mira atrás dos veces.", B: "Henrik se aleja rápido hacia el tren sin despedirse. Mira atrás dos veces, por si acaso.", C: "Henrik se aleja hacia el tren sin despedirse y mira atrás dos veces, con la prudencia de quien conoce ya la fauna local." }, change: "corre", recap: "Asustaste a Henrik con un cuchillo." },
      "pistola-policia": { text: { A: "La policía te quita la pistola. Henrik declara. Pierde su tren.", B: "La policía te desarma en el andén. Henrik declara, temblando, y pierde su tren.", C: "La policía te desarma ante todo el andén. Henrik declara, aún pálido, y pierde su tren." }, change: "policia", recap: "La pistola asustó a Henrik y llegó la policía." },
      "pistola-tren": { text: { A: "Henrik toma el tren. Desde la ventana, te mira con mucha atención.", B: "Henrik sube al tren. Desde la ventana, te mira con una mezcla de alivio y asombro.", C: "Henrik sube al tren. Desde la ventanilla, te observa con una mezcla de alivio, asombro y material para su próxima conversación." }, change: "se-va", recap: "Henrik tomó su tren después del susto de la pistola." },
      "pistola-susto": { text: { A: "Henrik corre al andén sin mirar atrás. Tú te quedas solo.", B: "Henrik corre al andén sin mirar atrás. Te quedas solo, con la pistola y el mapa en el suelo.", C: "Henrik desaparece corriendo hacia el andén. Te quedas solo con la pistola y un mapa olvidado en el suelo." }, change: "huye", recap: "Tu pistola hizo huir a Henrik." },
      "granada-helicoptero": { text: { A: "El helicóptero ilumina la estación. La policía te rodea. Henrik grita: «¡Qué locura!».", B: "El helicóptero ilumina la estación entera. La policía te rodea y Henrik, desde lejos, grita: «¡Qué locura!».", C: "El helicóptero baña la estación de luz mientras la policía te rodea. Henrik, desde lejos, grita la primera expresión que aprendió: «¡Qué locura!»." }, change: "helicoptero", recap: "La granada hizo llegar la policía y un helicóptero." },
      "granada-tren": { text: { A: "Henrik toma otro tren. Se ríe mucho. Dice: «¡Qué locura!».", B: "Henrik toma el siguiente tren, riéndose todavía. «¡Qué susto! ¡Qué locura!», repite desde la ventana.", C: "Henrik toma el siguiente tren, riéndose todavía. «¡Qué susto! ¡Qué locura!», repite desde la ventana, convertido en un hombre con anécdota." }, change: "se-va", recap: "Henrik perdió su tren por la granada, pero aprendió expresiones nuevas." },
      "gas-susto": { text: { A: "Henrik se aleja nervioso. Llama a un guardia. Tú te quedas con el gas.", B: "Henrik se aleja nervioso y habla con un guardia. Te quedas con el gas en la mano y mucha vergüenza.", C: "Henrik se aleja con prisa y habla con un guardia. Te quedas con el gas en la mano y con una vergüenza muy considerable." }, change: "corre", recap: "El gas pimienta asustó a Henrik." },
      "gas-ambulancia": { text: { A: "Llega la ambulancia. Henrik se lava los ojos. Pierde el tren, pero se ríe.", B: "Llega la ambulancia. Henrik se lava los ojos con suero. Pierde el tren, pero a ratos se ríe.", C: "Llega la ambulancia y Henrik se lava los ojos con suero. Pierde el tren, pero conserva el humor, que es lo más danés que tiene." }, change: "ambulancia", recap: "Se te escapó gas pimienta y Henrik necesitó una ambulancia." },
      "gas-tren": { text: { A: "Henrik toma el tren con la libreta llena. «¡Hasta pronto!»", B: "Henrik toma el tren con la libreta llena de expresiones nuevas. «¡Hasta pronto, guía!»", C: "Henrik toma el tren con la libreta repleta de expresiones. «¡Hasta pronto, guía!», grita, con ojos algo rojos todavía." }, change: "se-va", recap: "Henrik aprendió expresiones nuevas después del susto del gas." },
      "lapiz-aprende": { text: { A: "Henrik guarda el mapa con tus frases. Sube al tren sonriendo.", B: "Henrik guarda el mapa con tus frases escritas. Sube al tren y repite «hasta pronto» desde la ventana.", C: "Henrik guarda el mapa con tus frases en el margen. Sube al tren y repite «hasta pronto» desde la ventana, saboreando cada vocal." }, change: "sonrie", recap: "Escribiste frases útiles en el mapa de Henrik." },
      "lapiz-amigos": { text: { A: "Henrik te abraza. Guarda el mapa con tu firma. «¡Escríbeme!»", B: "Henrik te abraza y guarda el mapa con tu firma. «¡Escríbeme!», grita desde el andén.", C: "Henrik te abraza y guarda el mapa con tu firma como un pasaporte. «¡Escríbeme!», grita desde el andén." }, change: "abraza", recap: "Firmaste el mapa de Henrik con tu lápiz." },
      "libro-aprende": { text: { A: "Henrik repite la frase. Está muy contento. Sube al tren.", B: "Henrik repite la frase tres veces. Muy contento, sube al tren y la dice desde la ventana.", C: "Henrik repite la frase tres veces, cada vez con menos acento. Sube al tren y la lanza por la ventana al andén." }, change: "sonrie", recap: "Le enseñaste a Henrik una palabra de tu libro." },
      "libro-regalo": { text: { A: "Henrik se va con tu libro en la mochila. Te dice adiós con la mano.", B: "Henrik se va con tu libro en la mochila. Te dice adiós con la mano hasta que el tren se pierde.", C: "Henrik se va con tu libro en la mochila y la promesa de leerlo. Te dice adiós con la mano hasta que el tren se pierde en el túnel." }, change: "se-va", recap: "Le regalaste tu libro a Henrik." },
      "corazon-abrazo": { text: { A: "Henrik te abraza otra vez y sube al tren. Desde la ventana dice: «Te voy a echar de menos».", B: "Henrik te abraza otra vez y sube al tren. Desde la ventana te grita: «¡Te voy a echar de menos!».", C: "Henrik te abraza una vez más y sube al tren. Desde la ventana te grita su primera frase de amor en español: «¡Te voy a echar de menos!»." }, change: "abraza", recap: "Te despediste de Henrik con un abrazo." },
      "corazon-beso": { text: { A: "Henrik se toca la mejilla y sonríe. Sube al tren. Saluda hasta que desaparece.", B: "Henrik se toca la mejilla y sonríe. Sube al tren y te saluda hasta que desaparece en el túnel.", C: "Henrik se toca la mejilla, sonríe como un niño y sube al tren. Te saluda sin parar hasta que el túnel se lo traga." }, change: "beso", recap: "Le diste un beso de despedida a Henrik." },
      aprende: { text: { A: "Henrik escribe la expresión en su libreta. Está muy contento.", B: "Henrik apunta la expresión en su libreta y la repite en voz baja, feliz.", C: "Henrik archiva la expresión en su libreta como un tesoro y la murmura, satisfecho." }, change: "sonrie", recap: "Le enseñaste a Henrik una expresión nueva." },
      tren: { text: { A: "Henrik corre al tren. Desde la puerta, te dice adiós.", B: "Henrik llega al tren justo a tiempo. Desde la puerta, grita su nueva expresión.", C: "Henrik alcanza el tren por los pelos y, desde la puerta, grita su nueva expresión a todo el andén." }, change: "se-va", recap: "Henrik tomó su tren con una expresión nueva." },
      amigos: { text: { A: "Henrik te abraza. Te da su correo. «¡Escríbeme!»", B: "Henrik te abraza y te deja su correo en el mapa. «¡Escríbeme en español!»", C: "Henrik te abraza y te deja su correo. «Escríbeme en español. Sin piedad.»" }, change: "abraza", recap: "Te despediste de Henrik como amigos." },
      susto: { text: { A: "Henrik se va rápido al tren. No te dice adiós.", B: "Henrik se va casi corriendo hacia el andén, sin despedirse.", C: "Henrik desaparece hacia el andén. Tu reputación de guía, también." }, change: "corre", recap: "Asustaste a Henrik antes de su tren." },
    },
    speak: {
      A1: "¿Qué expresión en español te gusta más?",
      A2: "¿Qué palabra nueva aprendiste esta semana?",
      B1: "¿Cómo te sientes cuando hablas español con desconocidos?",
      B2: "¿Qué expresión de tu idioma le enseñarías a un turista, y por qué?",
      C1: "¿Qué expresiones de tu idioma son imposibles de traducir del todo?",
      C2: "¿Qué parte de tu identidad cambia cuando hablas otro idioma?",
    },

    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces cuando alguien se asusta de ti?", B: "¿Cómo explicarías a un extranjero una costumbre tuya que parece peligrosa?", C: "¿Qué malentendidos culturales has vivido con un objeto cotidiano?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Cómo dices «no quiero problemas» en tu idioma?", B: "¿Qué consecuencias puede tener un malentendido con un turista?", C: "¿Qué frase te saldría sin pensar si alguien te apuntara?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Qué haces cuando oyes un grito en una estación?", B: "¿Cuál es la anécdota de viaje más loca que cuentas?", C: "¿Qué locura de viaje has convertido en la mejor anécdota?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Qué consejo de seguridad das a un turista?", B: "¿Cómo se dice «peligro» y «cuidado» en tu idioma?", C: "¿Qué precauciones aconsejarías a quien visita tu ciudad de noche?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Qué frase escribirías en un mapa para un turista?", B: "¿Qué frase de despedida escribirías en el mapa de un viajero?", C: "¿Qué huella dejarías en el cuaderno de un viajero que apenas conoces?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Cuál es tu palabra española favorita?", B: "¿Qué palabra de tu idioma no tiene traducción en español?", C: "¿Qué palabra intraducible te gustaría regalarle a un extranjero?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿A quién echas de menos hoy?", B: "¿Cómo se despiden en tu país las personas que se quieren?", C: "¿Qué despedida de un viajero te marcó, y por qué?" } },
    },
  },

  // ─────────────────────────────────────────────────────────────── RINCÓN 6
  {
    id: "estacion-reloj",
    kind: "rincon",
    district: "estacion",
    title: "El reloj parado",
    verb: "PREGUNTAR",
    goal: "Preguntar por la historia de un lugar, decir la hora y opinar sobre conservar o cambiar algo.",
    cast: [
      {
        id: "faustino", name: "Don Faustino", role: "Guardia de la estación",
        age: "old", body: "m", build: "heavy", height: 1.68,
        hair: "bald", hairColor: "#bdbab3", skin: "#a87452",
        top: "uniform", topColor: "#2b3a55", bottom: "pants", bottomColor: "#2b3a55",
        extras: ["mustache", "hat"], pose: "arms", props: ["clock"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "faustino", mood: "neutral",
        line: {
          A: "Un guardia mayor mira el gran reloj. «Las once y cuarenta y siete. Siempre. Desde hace treinta años.»",
          B: "Un guardia mayor mira el gran reloj de la estación. «Las doce menos trece. Así está desde hace treinta años. Ni un minuto más.»",
          C: "Un guardia de bigote blanco contempla el reloj de la fachada. «Las doce menos trece. Treinta años sin moverse. Es el empleado más puntual de la estación.»",
        },
        options: [
          {
            id: "porque",
            say: { A: "¿Por qué no funciona el reloj?", B: "¿Y por qué nadie lo arregló en treinta años?", C: "¿Y cómo es que en treinta años nadie se ha animado a arreglarlo?" },
            reply: { A: "«Fue una tormenta. Un rayo. Y nadie lo arregló.»", B: "«Una tormenta en el noventa y cuatro. Cayó un rayo y se paró. Nadie quiso tocarlo.»", C: "«Un rayo en el noventa y cuatro», dice el guardia. «Desde entonces, a nadie le apetece contradecir al cielo.»" },
            mood: "neutral", next: "historia",
          },
          {
            id: "broma",
            say: { A: "Bueno, dos veces al día está bien.", B: "Bueno, por lo menos acierta dos veces al día.", C: "Míralo por el lado bueno: acierta dos veces al día, más que muchos." },
            reply: { A: "El guardia se ríe. «Eso dice todo el mundo. Soy Don Faustino.»", B: "El guardia se ríe. «Eso dice todo el mundo, pero es verdad. Me llamo Faustino.»", C: "El guardia suelta una carcajada. «Más que muchos políticos, sí. Faustino, encantado.»" },
            mood: "smile", next: "historia",
          },
          {
            id: "hora",
            say: { A: "Perdón, ¿qué hora es de verdad?", B: "Perdone, ¿y qué hora es en realidad?", C: "Ya, pero entre nosotros: ¿qué hora es de verdad?" },
            reply: { A: "«Las doce y diez. Pero aquí siempre son las doce menos trece.»", B: "El guardia mira su reloj de pulsera. «Las doce y diez. Pero aquí dentro, siempre las doce menos trece.»", C: "«Las doce y diez en el mundo», dice el guardia. «Aquí dentro, las doce menos trece. Usted elige.»" },
            mood: "neutral", end: "hora",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Usted quiere mucho a ese reloj, ¿verdad?", B: "Se nota que usted quiere mucho a ese reloj. ¿Por qué?", C: "Usted lo mira como se mira a una persona, no a un reloj." },
            reply: { A: "Don Faustino sonríe. «A las once y cuarenta y siete conocí a mi mujer. Aquí.»", B: "El guardia, Don Faustino, sonríe. «A las doce menos trece llegó el tren de mi mujer. La primera vez que la vi.»", C: "El guardia, Don Faustino, baja la voz. «A esa hora bajó mi mujer de un tren. Cuando se paró, rogué que no lo tocaran.»" },
            mood: "love", end: "secreto",
          },
          lapiz: {
            act: { A: "Sacas el lápiz y dibujas el reloj.", B: "Sacas el lápiz y dibujas el reloj en un papel.", C: "Dibujas el reloj con el lápiz, pero con las agujas en otra hora." },
            say: { A: "Mire. En mi dibujo, el reloj funciona.", B: "Mire, en mi dibujo el reloj funciona otra vez.", C: "Mire: en mi versión, el reloj por fin avanza." },
            reply: { A: "El guardia se ríe. «¡Qué bonito! ¿Me lo regalas?»", B: "El guardia se ríe. «¡Qué bonito! ¿Me lo regalas? Lo pongo en la garita.»", C: "El guardia lo estudia con cariño. «Una hora nueva. Me lo quedo, si me lo permite.»" },
            mood: "smile", end: "dibujo",
          },
        },
      },
      historia: {
        who: "faustino", mood: "smile",
        line: {
          A: "Don Faustino mira el reloj. «La gente dice que arreglarlo trae mala suerte.»",
          B: "Don Faustino se apoya en la pared. «Dicen que arreglarlo trae mala suerte. Yo no creo en eso… o un poco.»",
          C: "Don Faustino se apoya en la pared. «Dicen que arreglarlo trae mala suerte. Yo no creo en supersticiones, pero tampoco las provoco.»",
        },
        options: [
          {
            id: "asi",
            say: { A: "Para mí está bien así. Es especial.", B: "A mí me gusta así. Es un reloj con historia.", C: "Yo lo dejaría así. Un reloj roto cuenta más que uno que funciona." },
            reply: { A: "Don Faustino asiente. «Sí. Es la memoria de la estación.»", B: "Don Faustino asiente. «Eso pienso yo. Es la memoria de la estación.»", C: "Don Faustino te mira con respeto. «Eso es. Un reloj que funciona da la hora. Este cuenta historias.»" },
            mood: "smile", end: "memoria",
          },
          {
            id: "arreglar",
            say: { A: "¿Y si lo arreglamos? Conozco a un relojero.", B: "¿Y si lo arreglamos? Conozco a un relojero muy bueno.", C: "¿Y si desafiamos al destino? Tengo un relojero de confianza." },
            reply: { A: "Don Faustino se ríe. Enciende la luz del reloj. «¡Mira qué bonito!»", B: "Don Faustino se ríe y enciende la luz del reloj. «Míralo primero. ¿De verdad quieres cambiarlo?»", C: "Don Faustino se ríe y enciende la luz del reloj. «Antes de desafiar al destino, mire qué belleza.»" },
            mood: "smile", end: "luz",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Usted sabe algo más. ¿Me lo cuenta?", B: "Usted sabe algo más, ¿verdad? ¿Me lo cuenta?", C: "Tengo la impresión de que usted se guarda la mejor parte de la historia." },
            reply: { A: "Don Faustino sonríe. «A esa hora conocí a mi mujer. Aquí mismo.»", B: "Don Faustino sonríe, tímido. «A las doce menos trece bajó mi mujer de un tren. Por eso nadie lo toca: se lo rogué yo.»", C: "Don Faustino se ruboriza. «La mejor parte: a esa hora conocí a mi mujer. El rayo solo me hizo un favor.»" },
            mood: "love", end: "secreto",
          },
        },
      },

      // ── variantes
      "cuchillo-inicio": {
        who: "faustino", mood: "angry",
        line: {
          A: "Don Faustino ve el cuchillo. Pone la mano en su radio. «¡Eh, tú! Baja eso ahora mismo. Esto es una estación, no una cocina.»",
          B: "Don Faustino ve el cuchillo y lleva la mano a la radio del cinturón. «¡Eh, tú! Baja eso ahora mismo. Esto es una estación, no una carnicería.»",
          C: "Don Faustino ve el cuchillo y su mano viaja a la radio con lentitud profesional. «Joven, baje eso. Treinta años en esta estación y nunca he necesitado el uniforme tanto como hoy.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas el cuchillo.", B: "Guardas el cuchillo con calma.", C: "Guardas el cuchillo con las manos a la vista." },
            say: { A: "Perdón, guardia. Ya está guardado. Es para la fruta.", B: "Perdone, guardia. Ya está guardado. Lo uso para pelar fruta.", C: "Perdone, agente. Guardado. Es un cuchillo de fruta, nada más." },
            reply: { A: "Don Faustino suelta la radio. «Bueno. Pero no se saca así.»", B: "Don Faustino suelta la radio, aliviado. «Bueno. Pero esas cosas no se sacan delante de un guardia.»", C: "Don Faustino retira la mano de la radio. «Bien. Pero un cuchillo en un andén, sea de fruta o de lo que sea, se esconde.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "explicar",
            say: { A: "Es para cortar un pastel. Es mi cumpleaños.", B: "Es para cortar un pastel. Hoy es mi cumpleaños y estaba esperando a un amigo.", C: "Es para cortar un pastel. Mi cumpleaños. Sí, lo sé, la excusa suena a coartada." },
            reply: { A: "Don Faustino duda. «¿Un pastel? ¿A medianoche?» Mira bien.", B: "Don Faustino arquea una ceja. «¿Un pastel a medianoche? Enséñamelo.» Te mira de arriba abajo.", C: "Don Faustino entrecierra los ojos. «Pastel, medianoche y cuchillo. Parece el principio de un chiste malo. Enséñeme el pastel.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "acercarse",
            act: { A: "Das un paso hacia él con el cuchillo.", B: "Te acercas con el cuchillo todavía en la mano.", C: "Avanzas un paso, cuchillo en mano, para explicarte." },
            say: { A: "Espere. Escuche.", B: "Espere, déjeme explicarle.", C: "Un momento, permítame explicarle." },
            reply: { A: "Don Faustino pide refuerzos por radio. «¡Cuchillo en el andén!»", B: "Don Faustino pide refuerzos por radio. «¡Persona con un cuchillo junto al reloj! ¡Necesito ayuda!»", C: "Don Faustino pide refuerzos por radio con voz de bronce. «Persona armada junto al reloj. Repito, junto al reloj.»" },
            mood: "terror", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-calma": {
        who: "faustino", mood: "neutral",
        line: {
          A: "Don Faustino se relaja. «Bueno. Ya pasó. Pero que no se repita. Este reloj ha visto muchas cosas, pero nunca un cuchillo.»",
          B: "Don Faustino se relaja un poco. «Bueno, ya pasó. Pero que no se repita. Este reloj lleva treinta años aquí y nunca vio un cuchillo.»",
          C: "Don Faustino se relaja un poco, pero no del todo. «Ya pasó. Que conste que el reloj lleva treinta años aquí y jamás presenció una escena así.»",
        },
        options: [
          {
            id: "historia",
            say: { A: "Perdón otra vez. ¿Por qué está parado el reloj?", B: "Perdón otra vez. Para compensar el susto, ¿me cuenta por qué está parado el reloj?", C: "Mil perdones. Para redimirme, ¿me cuenta la historia del reloj parado?" },
            reply: { A: "Don Faustino sonríe. «Un rayo. Hace treinta años. Y mi mujer bajó del tren a esa hora.»", B: "Don Faustino sonríe un poco. «Un rayo en el noventa y cuatro. Y a esa hora bajó del tren mi mujer, la primera vez que la vi.»", C: "Don Faustino suaviza el gesto. «Un rayo, en el noventa y cuatro. Y a esa hora bajó mi mujer de un tren. Los relojes también saben guardar secretos.»" },
            mood: "smile", end: "cuchillo-memoria",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Perdón por el susto.", B: "Mejor me voy y lo dejo tranquilo. Perdón por el susto.", C: "Me retiro, agente. Prometo que el cuchillo y yo no volveremos por aquí." },
            reply: { A: "Don Faustino asiente. «Buenas noches. Y guarda eso.»", B: "Don Faustino asiente con dureza. «Buenas noches. Y guarda esa cosa para siempre.»", C: "Don Faustino asiente con gravedad. «Buenas noches. Y que esa hoja no vuelva a ver la luz de mi estación.»" },
            mood: "neutral", end: "cuchillo-hora",
          },
        ],
      },
      "pistola-inicio": {
        who: "faustino", mood: "terror",
        line: {
          A: "Don Faustino ve la pistola y levanta las manos. «¡No, por favor! ¡Soy un guardia viejo! ¡No tengo nada!»",
          B: "Don Faustino ve la pistola, se queda blanco y levanta las manos. «¡No, por favor! ¡Soy un guardia viejo, no tengo nada que valga la pena!»",
          C: "Don Faustino ve la pistola y levanta las manos con una dignidad temblorosa. «Hijo, soy un guardia de pensión corta. Aquí no hay nada que valga lo que cuesta esa pistola.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la pistola.", B: "Guardas la pistola enseguida.", C: "Guardas la pistola de inmediato." },
            say: { A: "No, no. Baje las manos. No es un robo.", B: "No, no es un robo. Baje las manos, por favor. Perdón.", C: "No es un robo, de verdad. Baje las manos, se lo ruego. Fue un error." },
            reply: { A: "Don Faustino baja las manos despacio. «¿Entonces para qué la llevas?»", B: "Don Faustino baja las manos despacio. «¿Y entonces por qué llevas una pistola en una estación?»", C: "Don Faustino baja las manos con cautela. «¿Y para qué lleva usted un arma a mi estación, si no es para robar?»" },
            mood: "worried", next: "pistola-calma",
          },
          {
            id: "ordenar",
            say: { A: "Calle. Quédese quieto.", B: "Cállese y quédese quieto, que no quiero problemas.", C: "Silencio y quietud. Nadie sale perjudicado si todos colaboran." },
            reply: { A: "Don Faustino aprieta el botón de alarma con el codo. Suena una sirena.", B: "Don Faustino aprieta con el codo el botón de alarma del reloj. Una sirena llena la estación.", C: "Don Faustino pulsa con el codo, con maestría de veterano, la alarma del reloj. Una sirena inunda la estación." },
            mood: "terror", end: "pistola-policia",
          },
          {
            id: "huir",
            act: { A: "Sales corriendo.", B: "Sales corriendo de la estación.", C: "Sales corriendo hacia la calle, pistola en mano." },
            say: { A: "No me siga.", B: "No me siga. No quiero problemas.", C: "No me siga. Esto no tiene por qué empeorar." },
            reply: { A: "Don Faustino llama por radio. «Un hombre armado sale por la puerta norte.»", B: "Don Faustino llama por radio con voz temblorosa. «Un hombre armado sale corriendo por la puerta norte.»", C: "Don Faustino lanza un aviso por radio, aún con las manos temblando. «Un hombre armado huye por la puerta norte. Repito, huye.»" },
            mood: "terror", end: "pistola-huye",
          },
        ],
      },
      "pistola-calma": {
        who: "faustino", mood: "angry",
        line: {
          A: "Don Faustino te mira serio. «Treinta años aquí y nadie me apuntó nunca. ¿Por qué llevas eso?»",
          B: "Don Faustino te mira muy serio. «Treinta años en esta estación y nadie me apuntó jamás. ¿Qué haces tú con eso?»",
          C: "Don Faustino te mira con la severidad de un viejo guardia. «Treinta años de servicio sin que nadie me apunte. Y llegas tú. Explícate.»",
        },
        options: [
          {
            id: "sincero",
            say: { A: "Tengo miedo de la noche. Eso es todo.", B: "Tengo miedo de la noche, Don Faustino. Pensé que me haría sentir seguro.", C: "Miedo, Don Faustino. A la noche, a las calles, a todo. Pensé que esto lo curaría." },
            reply: { A: "Don Faustino suspira. «El miedo no se cura con eso.» Te señala el reloj.", B: "Don Faustino suspira. «El miedo no se cura con eso, hijo.» Te señala el reloj. «Esto sí te calma.»", C: "Don Faustino suspira, casi con ternura. «El miedo no se cura con hierro, hijo.» Te señala el reloj parado. «Mira eso un rato y respira.»" },
            mood: "worried", end: "pistola-hora",
          },
          {
            id: "amenaza",
            say: { A: "No se meta en mis cosas.", B: "No se meta en mis asuntos, viejo.", C: "No se meta en lo que no le importa, abuelo." },
            reply: { A: "Don Faustino llama por radio. Llegan dos policías.", B: "Don Faustino llama por radio sin apartar la vista. Dos policías llegan corriendo por el andén.", C: "Don Faustino llama por radio sin pestañear. Dos policías aparecen corriendo, con la mano en la funda." },
            mood: "angry", end: "pistola-policia",
          },
        ],
      },
      "granada-inicio": {
        who: "faustino", mood: "terror",
        line: {
          A: "Don Faustino ve la granada. Grita por la radio: «¡Bomba! ¡Evacuen la estación!» Suena una alarma.",
          B: "Don Faustino ve la granada y grita por la radio, con la voz rota: «¡Bomba en el reloj! ¡Evacuen la estación!» Empieza a sonar una alarma.",
          C: "Don Faustino ve la granada y, con la serenidad de un viejo guardia, enciende la alarma general. «Evacuación, evacuación. Bomba junto al reloj.» La estación entera empieza a vaciarse.",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Es una broma!", B: "¡Es de juguete, Don Faustino! ¡Es una broma!", C: "¡Es de utilería, Don Faustino! ¡Una broma de pésimo gusto!" },
            reply: { A: "Don Faustino no te escucha. La gente corre. Entra la policía.", B: "Don Faustino no te escucha entre la sirena. La gente corre hacia las salidas. Entra la policía en tropel.", C: "Don Faustino no te oye entre la sirena. La gente corre hacia las salidas y la policía irrumpe en tropel." },
            mood: "terror", next: "granada-policia",
          },
          {
            id: "tirar",
            act: { A: "Tiras la granada lejos.", B: "Lanzas la granada hacia las vías.", C: "Lanzas la granada a las vías, lo más lejos posible." },
            say: { A: "¡Al suelo!", B: "¡Al suelo, Don Faustino!", C: "¡Al suelo, Don Faustino, cúbrase!" },
            reply: { A: "La granada rueda. No explota. Un helicóptero llega.", B: "La granada rueda por la vía y no explota. Pocos minutos después, un helicóptero ilumina la estación.", C: "La granada rueda por la vía sin explotar. Poco después, un helicóptero baña la estación de luz." },
            mood: "terror", end: "granada-helicoptero",
          },
          {
            id: "correr",
            act: { A: "Corres con todos hacia la calle.", B: "Corres con todos los demás hacia la calle.", C: "Te sumas a la estampida hacia la calle, granada en mano." },
            say: { A: "¡Fuera todos!", B: "¡Fuera todos! ¡Rápido!", C: "¡Fuera todos, deprisa y sin empujar!" },
            reply: { A: "Fuera, la policía te rodea. Don Faustino señala el reloj: «¡Allí!»", B: "Fuera, la policía te rodea. Don Faustino señala hacia el reloj parado: «¡Fue él, junto al reloj!»", C: "Fuera, la policía te rodea. Don Faustino te señala desde el umbral, con el reloj parado de testigo mudo." },
            mood: "terror", end: "granada-evacuacion",
          },
        ],
      },
      "granada-policia": {
        who: "faustino", mood: "scared",
        line: {
          A: "La policía te rodea. Don Faustino se esconde detrás del reloj. «¡Es una bomba! ¿O no?»",
          B: "La policía te rodea, armas en alto. Don Faustino se esconde detrás del mostrador del reloj. «¡Es una bomba! ¿O es de juguete? ¡Hable, hombre!»",
          C: "La policía te rodea con las armas desenfundadas. Don Faustino, tras el mostrador del reloj, grita: «¿Es o no es? ¡La estación necesita saberlo!»",
        },
        options: [
          {
            id: "falsa",
            act: { A: "Dejas la granada en el suelo.", B: "Dejas la granada en el suelo, con las manos arriba.", C: "Dejas la granada en el suelo y levantas las manos." },
            say: { A: "Es falsa. Perdón. Fue una broma.", B: "Es falsa, es de plástico. Perdón, fue una broma de mal gusto.", C: "Es de plástico, lo juro. Una broma idiota de la que me arrepiento." },
            reply: { A: "Un policía la revisa. «Es falsa.» Don Faustino respira.", B: "Un policía la revisa con cuidado. «Es falsa.» Don Faustino se deja caer en el banco, aliviado.", C: "Un policía la revisa con guantes. «Plástico.» Don Faustino se deja caer en el banco, con el corazón de un viejo guardia latiendo a mil." },
            mood: "worried", end: "granada-evacuacion",
          },
          {
            id: "huir",
            act: { A: "Corres hacia la salida.", B: "Echas a correr hacia la salida.", C: "Intentas escapar hacia la salida." },
            say: { A: "¡No me toquen!", B: "¡No me toquen! ¡Déjenme pasar!", C: "¡Déjenme pasar! ¡No he hecho nada!" },
            reply: { A: "Los policías te placan. Un helicóptero llega.", B: "Dos policías te placan antes de que llegues a la puerta. Un helicóptero ilumina la estación.", C: "Dos policías te placan en plena huida. Un helicóptero fija su foco sobre el reloj parado." },
            mood: "pain", end: "granada-helicoptero",
          },
        ],
      },
      "corazon-inicio": {
        who: "faustino", mood: "smitten",
        line: {
          A: "Don Faustino te ve y se le ilumina la cara. «Hola, muchacho. Qué sonrisa tienes. Me recuerdas a mi mujer. ¿Quieres ver el reloj de cerca?»",
          B: "Don Faustino te ve y sonríe de oreja a oreja. «Hola, muchacho. Qué sonrisa más buena tienes. Me recuerdas a mi mujer. ¿Quieres ver el reloj de cerca?»",
          C: "Don Faustino te ve y se le suaviza el bigote. «Buenas noches. Qué sonrisa tan limpia tiene. Me recuerda a mi mujer, cuando bajó del tren. ¿Quiere ver el reloj de cerca?»",
        },
        options: [
          {
            id: "ver",
            say: { A: "Sí, quiero verlo. Cuénteme su historia.", B: "Sí, claro. Cuénteme su historia con él, por favor.", C: "Con mucho gusto. Cuénteme su historia con este reloj; la noche es larga." },
            reply: { A: "Don Faustino te lleva al pie del reloj y te cuenta. «A esa hora conocí a mi mujer.»", B: "Don Faustino te lleva al pie del reloj. «A las doce menos trece bajó mi mujer del tren. Por eso nadie lo toca.»", C: "Don Faustino te lleva al pie del reloj, casi de la mano. «A las doce menos trece bajó mi mujer de un tren. Desde entonces el tiempo se detuvo, por voluntad propia.»" },
            mood: "love", next: "corazon-foto",
          },
          {
            id: "consolar",
            say: { A: "Se nota que la quiere mucho. ¿Dónde está ella?", B: "Se nota que la quiere mucho. ¿Dónde está ahora, Don Faustino?", C: "Se nota lo mucho que la quiere. ¿Dónde está ahora ella, Don Faustino?" },
            reply: { A: "Don Faustino baja la mirada. «Murió hace tres años. Pero vengo cada noche.»", B: "Don Faustino baja la mirada, con los ojos húmedos. «Murió hace tres años. Pero vengo cada noche para estar con ella.»", C: "Don Faustino baja la mirada, con los ojos brillantes. «Se fue hace tres años. Por eso sigo viniendo cada noche: aquí el tiempo me la devuelve.»" },
            mood: "love", next: "corazon-foto",
          },
          {
            id: "abrazo",
            act: { A: "Lo abrazas.", B: "Abrazas a Don Faustino.", C: "Abrazas a Don Faustino con mucho respeto." },
            say: { A: "Gracias por cuidar la estación.", B: "Gracias por cuidar la estación todos estos años, Don Faustino.", C: "Gracias por cuidar este lugar durante treinta años. Alguien tenía que hacerlo." },
            reply: { A: "Don Faustino te abraza con fuerza. «De nada, hijo.»", B: "Don Faustino te abraza con los ojos cerrados. «De nada, hijo. Pocos me lo agradecen.»", C: "Don Faustino te abraza, conmovido. «Treinta años y es la primera vez que alguien me lo agradece con un abrazo.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-foto": {
        who: "faustino", mood: "love",
        line: {
          A: "Don Faustino saca una foto de su cartera. «Mira. Ella, aquí, en este andén. A las doce menos trece.»",
          B: "Don Faustino saca una foto vieja de la cartera y te la pone en las manos. «Mira. Ella, joven, en este mismo andén. A las doce menos trece.»",
          C: "Don Faustino saca una foto en blanco y negro de la cartera, con un cuidado casi religioso. «Mírala. Ella, joven, en este andén, a las doce menos trece. No hay reloj que me enseñe más.»",
        },
        options: [
          {
            id: "beso",
            act: { A: "Le das un beso en la mejilla.", B: "Le das un beso en la mejilla.", C: "Le das un beso en la mejilla, con ternura." },
            say: { A: "Es muy guapa. Gracias por enseñármela.", B: "Es preciosa. Gracias por compartirla conmigo, Don Faustino.", C: "Es preciosa. Gracias por confiarme esta imagen, Don Faustino." },
            reply: { A: "Don Faustino se toca la mejilla, rojo. «Hijo, qué cosas.»", B: "Don Faustino se toca la mejilla, rojo de emoción. «Hijo, qué cosas tienes.»", C: "Don Faustino se toca la mejilla, sonrojado. «Qué cosas… Hace tanto que nadie me da un beso que casi lo había olvidado.»" },
            mood: "smitten", end: "corazon-beso",
          },
          {
            id: "luz",
            say: { A: "¿Podemos encender la luz del reloj para ella?", B: "¿Y si encendemos la luz del reloj para ella, esta noche?", C: "¿Y si encendemos la luz del reloj en su honor, ahora mismo?" },
            reply: { A: "Don Faustino enciende la luz. El reloj brilla. Él llora y sonríe.", B: "Don Faustino enciende la luz. La esfera del reloj brilla sobre la plaza. Don Faustino llora y sonríe a la vez.", C: "Don Faustino enciende la luz con mano temblorosa. La esfera brilla sobre la plaza vacía. Don Faustino llora y sonríe a la vez." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {

      "cuchillo-policia": { text: { A: "Llegan dos policías. Te quitan el cuchillo. Don Faustino explica. Tú también.", B: "Llegan dos policías. Te quitan el cuchillo y toman nota. Don Faustino cuenta su versión; tú, la tuya, mucho más larga.", C: "Dos policías llegan en minutos, te desarman y toman nota. Don Faustino declara con voz de testigo; tú, con voz de acusado." }, change: "policia", recap: "El cuchillo asustó a Don Faustino y terminó con la policía." },
      "cuchillo-memoria": { text: { A: "Don Faustino te cuenta su historia. Al final te da la mano. Guardas el cuchillo.", B: "Don Faustino te cuenta cómo conoció a su mujer. Al final te estrecha la mano. El cuchillo se queda guardado.", C: "Don Faustino te cuenta cómo conoció a su mujer bajo ese reloj. Al final te estrecha la mano; el cuchillo no vuelve a salir esta noche." }, change: "sonrie", recap: "Después del susto del cuchillo, Don Faustino te contó la historia del reloj." },
      "cuchillo-hora": { text: { A: "Don Faustino te mira irte. Habla por radio. Tú sigues tu camino.", B: "Don Faustino te sigue con la mirada hasta que sales. Habla por radio, serio. Tú sigues tu camino.", C: "Don Faustino te sigue con la mirada hasta la puerta y habla por radio. Tú sigues tu camino con un cuchillo menos a la vista." }, change: "se-va", recap: "El cuchillo asustó a Don Faustino y te marchaste." },
      "pistola-policia": { text: { A: "La policía llega rápido. Te quita la pistola. Don Faustino tiembla y habla.", B: "La policía llega rápido y te quita la pistola. Don Faustino, todavía temblando, relata los hechos.", C: "La policía llega en tiempo récord y te desarma. Don Faustino, aún temblando, relata los hechos con una precisión de notario." }, change: "policia", recap: "La pistola terminó con la policía en la estación." },
      "pistola-huye": { text: { A: "Corres por la calle. Oyes sirenas atrás. Don Faustino mira el reloj parado.", B: "Corres por la calle oscura con la pistola en la mano. Oyes sirenas a lo lejos. Don Faustino vuelve a mirar el reloj parado.", C: "Corres por la calle oscura, pistola en mano, perseguido por sirenas. Don Faustino vuelve a su reloj, que sigue marcando la misma hora impasible." }, change: "huye", recap: "Huiste de la estación con una pistola." },
      "pistola-hora": { text: { A: "Don Faustino te mira el reloj. Guardas la pistola. Te vas más tranquilo.", B: "Don Faustino te hace mirar el reloj un minuto entero. Guardas la pistola y te vas más tranquilo que cuando llegaste.", C: "Don Faustino te hace contemplar el reloj parado un minuto entero. Guardas la pistola y te marchas más sereno que cuando llegaste." }, change: "sigue", recap: "Don Faustino te calmó con la historia de su reloj." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina la estación. La policía te rodea. Don Faustino mira el reloj.", B: "Un helicóptero ilumina la estación entera. La policía te rodea. Don Faustino, impasible, mira el reloj parado.", C: "Un helicóptero baña la estación de luz mientras la policía te rodea. Don Faustino, impasible, mira el reloj parado: él ya lo ha visto todo." }, change: "helicoptero", recap: "La granada trajo un helicóptero a la estación." },
      "granada-evacuacion": { text: { A: "La estación está vacía. Solo quedan tú, la policía y el reloj parado.", B: "La estación queda vacía. Solo quedan tú, la policía y el reloj parado, que sigue marcando las doce menos trece.", C: "La estación queda desierta. Solo quedan tú, la policía y el reloj parado, que sigue marcando las doce menos trece con indiferencia soberana." }, change: "huye", recap: "La granada vació la estación entera." },
      "corazon-abrazo": { text: { A: "Don Faustino te abraza. La luz del reloj se enciende. Está muy contento.", B: "Don Faustino te abraza y la luz del reloj se enciende sobre la plaza. Está tan contento que canta bajito.", C: "Don Faustino te abraza y enciende la luz del reloj sobre la plaza. Tan contento está que se pone a tararear un tango muy viejo." }, change: "abraza", recap: "Abrazaste a Don Faustino y encendieron la luz del reloj." },
      "corazon-beso": { text: { A: "Don Faustino guarda la foto. Sonríe como un niño. Te acompaña hasta la puerta.", B: "Don Faustino guarda la foto junto al corazón. Sonríe como un niño y te acompaña hasta la puerta.", C: "Don Faustino guarda la foto junto al corazón, sonríe como un niño y te acompaña hasta la puerta como a un invitado de honor." }, change: "beso", recap: "Le diste un beso a Don Faustino y te enseñó la foto de su mujer." },
      hora: { text: { A: "Don Faustino vuelve a mirar el reloj. Tú sigues tu camino.", B: "Don Faustino vuelve a su puesto. Tú sigues tu camino con la hora correcta.", C: "Don Faustino vuelve a su contemplación. Tú te vas con la hora del mundo, que es menos poética." }, change: "sigue", recap: "Preguntaste la hora a Don Faustino." },
      memoria: { text: { A: "Don Faustino está contento. Te da la mano.", B: "Don Faustino te da la mano, contento de que alguien piense como él.", C: "Don Faustino te estrecha la mano como a un aliado en la defensa del reloj." }, change: "sonrie", recap: "Hablaste con Don Faustino sobre el reloj parado." },
      luz: { text: { A: "El reloj se ilumina. Es precioso.", B: "La esfera del reloj se ilumina. Toda la plaza lo mira.", C: "La esfera se ilumina sobre la plaza. Parado, sí, pero radiante." }, change: "luz", recap: "Don Faustino encendió para ti la luz del reloj." },
      secreto: { text: { A: "Don Faustino te enseña una foto de su mujer. Sonríe mucho.", B: "Don Faustino saca una foto vieja de su cartera: su mujer, joven, en este mismo andén.", C: "Don Faustino te enseña una foto en blanco y negro: su mujer, en este andén, a las doce menos trece." }, change: "abraza", recap: "Don Faustino te contó el secreto del reloj." },
      dibujo: { text: { A: "Don Faustino guarda tu dibujo. Está muy contento.", B: "Don Faustino guarda tu dibujo en el bolsillo del uniforme, junto al corazón.", C: "Don Faustino dobla tu dibujo con cuidado y lo guarda en el bolsillo del uniforme." }, change: "sonrie", recap: "Le regalaste a Don Faustino un dibujo del reloj." },
    },
    speak: {
      A1: "¿A qué hora te levantas?",
      A2: "¿Qué objeto viejo guardaste en tu casa?",
      B1: "¿Qué lugar de tu ciudad tiene una historia interesante, y cuál es?",
      B2: "¿Qué objeto de tu familia no cambiarías nunca, aunque estuviera roto?",
      C1: "¿Cómo cambia el valor de un objeto cuando se convierte en un recuerdo?",
      C2: "¿Por qué a veces preferimos detener el tiempo en lugar de seguir adelante?",
    },

    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces cuando un guardia te habla serio?", B: "¿Alguna vez te confundieron con alguien peligroso?", C: "¿Qué objetos cotidianos pueden parecer una amenaza según el contexto?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces cuando tienes miedo?", B: "¿Qué consecuencias tiene una decisión tomada con miedo?", C: "¿Qué harías para recuperar la calma después de una situación de pánico?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Qué haces si suena una alarma?", B: "¿Cómo reaccionas ante el pánico de otras personas?", C: "¿Qué cambia en una ciudad cuando una broma provoca una evacuación?" } },
      corazon: { start: "corazon-inicio", fx: "beso", speak: { A: "¿A quién echas de menos?", B: "¿Qué lugar de tu ciudad guarda un recuerdo de amor?", C: "¿Qué lugares sirven para guardar la memoria de alguien que ya no está?" } },
    },
  },

  // ─────────────────────────────────────────────────────────────── RINCÓN 7
  {
    id: "estacion-anuncio",
    kind: "rincon",
    district: "estacion",
    title: "¿Qué dijo el altavoz?",
    verb: "ESCUCHAR",
    goal: "Entender y transmitir información de un anuncio (retraso, vía), admitir que no se entendió y ofrecer ayuda.",
    cast: [
      {
        id: "yesica", name: "Yesica", role: "Viajera confundida",
        age: "young", body: "f", build: "average", height: 1.6,
        hair: "ponytail", hairColor: "#2a1a12", skin: "#7a4b30",
        top: "jacket", topColor: "#e07a9a", bottom: "jeans", bottomColor: "#5a6a8a",
        extras: ["suitcase", "phone"], pose: "phone",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "yesica", mood: "worried",
        line: {
          A: "Un altavoz habla con mucho eco: «…tren a Puerto Alto… retraso… vía cuatro…». Una chica con maleta te mira. «Perdón, ¿qué dijo?»",
          B: "El altavoz retumba por toda la estación: «…Puerto Alto… veinte minutos de retraso… vía cuatro…». Una chica con maleta te mira, perdida. «Perdona, ¿entendiste algo?»",
          C: "El altavoz escupe un mensaje entre ecos y chasquidos: «…Puerto Alto… retraso… cambio… vía cuatro…». Una chica con maleta te mira. «¿Eso era español o código morse?»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Tu tren llega tarde. Sale de la vía cuatro.", B: "Dijo que el tren a Puerto Alto sale con veinte minutos de retraso, por la vía cuatro.", C: "Si no me falla el oído: Puerto Alto, veinte minutos de retraso y cambio a la vía cuatro." },
            reply: { A: "La chica abre los ojos. «¿Vía cuatro? ¡Estoy en la dos! ¡Gracias!»", B: "«¿Vía cuatro? ¡Yo estaba esperando en la dos!», dice la chica. «¡Mil gracias!»", C: "«¿Vía cuatro? Llevo media hora en la dos como una estatua», dice la chica. «Te debo una.»" },
            mood: "surprised", end: "via",
          },
          {
            id: "honesto",
            say: { A: "No lo oí bien. ¿Preguntamos en información?", B: "La verdad, no lo oí bien. ¿Vamos a preguntar a información?", C: "Para serte sincero, capté lo mismo que tú. ¿Probamos en información?" },
            reply: { A: "La chica sonríe. «Sí, buena idea. Con este eco, nadie entiende.»", B: "La chica se ríe, aliviada. «Menos mal, pensé que era yo. Vamos.»", C: "La chica se ríe. «Qué alivio. Pensé que mi español había muerto. Vamos.»" },
            mood: "smile", end: "info",
          },
          {
            id: "broma",
            say: { A: "Creo que dijo: «Buena suerte a todos».", B: "Creo que dijo algo como: «Buena suerte a todos».", C: "Juraría que dijo: «Sálvese quien pueda»." },
            reply: { A: "La chica se ríe. Entonces el altavoz habla otra vez.", B: "La chica se ríe. Justo entonces, el altavoz repite el anuncio, un poco más claro.", C: "La chica suelta una carcajada. El altavoz, como ofendido, repite el mensaje con más claridad." },
            mood: "smile", next: "repite",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Tranquila. Yo te ayudo a encontrar tu tren.", B: "Tranquila, no estás sola. Te ayudo a encontrar tu tren.", C: "Respira. Entre las dos neuronas que nos quedan, encontramos tu tren." },
            reply: { A: "La chica sonríe. «Gracias. Es mi primer viaje sola. Voy a empezar a trabajar.»", B: "La chica sonríe, emocionada. «Gracias. Me llamo Yesica. Es mi primer viaje sola: mañana empiezo a trabajar.»", C: "La chica se ríe y se le humedecen los ojos. «Soy Yesica. Primer viaje sola, primer trabajo mañana. Todo primero.»" },
            mood: "love", end: "animo",
          },
          lapiz: {
            act: { A: "Sacas el lápiz.", B: "Sacas el lápiz y le pides el billete.", C: "Le pides el billete y sacas el lápiz." },
            say: { A: "Te escribo la información en el billete.", B: "Te apunto la vía y la hora nueva en el billete.", C: "Te lo dejo por escrito, que los altavoces no dan garantías." },
            reply: { A: "La chica lee: «Vía 4». «¡Gracias! ¡Voy!»", B: "La chica lee: «Vía 4, 00:35». «¡Perfecto! ¡Gracias!»", C: "La chica lee el billete. «Vía 4, 00:35. Esto vale más que diez anuncios.»" },
            mood: "smile", end: "via",
          },
        },
      },
      repite: {
        who: "yesica", mood: "neutral",
        line: {
          A: "El altavoz dice: «El tren a Puerto Alto sale a las doce y treinta y cinco, por la vía cuatro». La chica te mira.",
          B: "Ahora se oye mejor: «El tren a Puerto Alto saldrá a las doce y treinta y cinco por la vía cuatro». La chica te mira.",
          C: "El anuncio llega nítido: «Puerto Alto, salida a las doce y treinta y cinco, vía cuatro». La chica te mira, esperando traducción.",
        },
        options: [
          {
            id: "via",
            say: { A: "Tu tren sale a las doce y treinta y cinco. Vía cuatro.", B: "Sale a las doce y treinta y cinco, por la vía cuatro. Tienes tiempo.", C: "Doce y treinta y cinco, vía cuatro. Tienes tiempo de sobra." },
            reply: { A: "«¡Gracias! ¡Voy a la vía cuatro!»", B: "«¡Genial! Gracias de verdad», dice la chica, y agarra la maleta.", C: "«Traducción impecable», dice la chica, y agarra la maleta." },
            mood: "smile", end: "via",
          },
          {
            id: "cafe",
            say: { A: "Tienes veinte minutos. ¿Tomamos un café?", B: "Tienes veinte minutos. ¿Quieres tomar un café en el quiosco?", C: "Te sobran veinte minutos. ¿Un café de quiosco para celebrar?" },
            reply: { A: "La chica sonríe. «¡Sí! Me llamo Yesica.»", B: "«¡Me encantaría! Soy Yesica», dice, y se sienta en un banco.", C: "«Café de quiosco: lujo de medianoche», dice la chica. «Soy Yesica.»" },
            mood: "smile", end: "cafe",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "¿Estás bien? Pareces nerviosa.", B: "¿Estás bien? Se te ve un poco nerviosa.", C: "Además del tren, algo más te tiene en vilo, ¿no?" },
            reply: { A: "«Soy Yesica. Es mi primer viaje sola. ¡Gracias por ayudar!»", B: "«Soy Yesica», dice sonriendo. «Mi primer viaje sola. Mañana empiezo un trabajo nuevo.»", C: "«Yesica», se presenta. «Primer viaje sola y primer trabajo. Los nervios vienen en pack.»" },
            mood: "love", end: "animo",
          },
        },
      },

      // ── variantes
      "cuchillo-inicio": {
        who: "yesica", mood: "terror",
        line: {
          A: "Yesica ve el cuchillo y grita. Suelta el celular. «¡No! ¡Aléjate! ¿Qué quieres? ¡Voy a llamar a la policía!» El altavoz sigue: «…vía cuatro…».",
          B: "Yesica ve el cuchillo, grita y deja caer el celular. «¡Aléjate de mí! ¡Voy a llamar a la policía!» El altavoz, ajeno a todo, repite: «…retraso… vía cuatro…».",
          C: "Yesica ve el cuchillo y su grito compite con el altavoz. El celular cae al suelo. «¡Aléjate o grito más fuerte!» Y el altavoz, indiferente: «…cambio… vía cuatro…».",
        },
        options: [
          {
            id: "bajar",
            act: { A: "Bajas el cuchillo.", B: "Bajas el cuchillo despacio.", C: "Bajas el cuchillo con las manos abiertas." },
            say: { A: "Perdón. Lo guardo. Solo quería ayudarte con el anuncio.", B: "Perdona, ya lo guardo. Solo quería ayudarte con el anuncio, de verdad.", C: "Perdona, lo guardo ya. Solo pretendía traducirte el altavoz, no cortarte el paso." },
            reply: { A: "Yesica respira rápido. «¡Qué susto! ¿Por qué lo tenías en la mano?»", B: "Yesica respira rápido, con la mano en el pecho. «¡Qué susto! ¿Por qué llevabas eso en la mano?»", C: "Yesica respira hondo, con la mano en el pecho. «Dios mío. Un cuchillo y un altavoz: demasiada información para una noche.»" },
            mood: "scared", next: "cuchillo-calma",
          },
          {
            id: "fruta",
            say: { A: "Estaba pelando una manzana. Mira, aquí está.", B: "Estaba pelando una manzana, mira. No es para ti.", C: "Estaba pelando una manzana, te lo juro. El cuchillo es inocente; yo, un descuidado." },
            reply: { A: "Yesica mira la manzana. «¿Una manzana? ¡Qué susto más tonto!»", B: "Yesica mira la manzana, luego el cuchillo, y suspira. «Una manzana. Qué susto más tonto.»", C: "Yesica mira la manzana, luego el cuchillo, y deja escapar una risa nerviosa. «Una manzana. He estado a punto de pedir ayuda por una manzana.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "acercar",
            act: { A: "Das un paso hacia ella.", B: "Das un paso hacia ella, con el cuchillo en la mano.", C: "Avanzas un paso, cuchillo en mano, para explicarte." },
            say: { A: "Espera. Escucha el anuncio.", B: "Espera, déjame decirte lo que dice el altavoz.", C: "Un momento. Déjame traducirte el altavoz, es urgente." },
            reply: { A: "Yesica grita más fuerte. Un guardia llega corriendo.", B: "Yesica grita con todas sus fuerzas. Un guardia de la estación llega corriendo con la radio.", C: "Yesica lanza un grito que supera al altavoz. Un guardia de la estación llega corriendo, radio en mano." },
            mood: "terror", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-calma": {
        who: "yesica", mood: "worried",
        line: {
          A: "Yesica recoge el celular. «Ya. Vale. Pero guarda eso. ¿Qué decía el anuncio? Me quedé sin palabras.»",
          B: "Yesica recoge el celular con manos temblorosas. «Vale, vale. Pero guarda eso, por favor. ¿Y qué decía el anuncio? Se me enredó todo.»",
          C: "Yesica recoge el celular con dedos temblorosos. «Vale. Pero primero guarda esa cosa. Luego me dices qué decía el anuncio, que con tanto susto he perdido hasta el idioma.»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Tu tren sale por la vía cuatro. Con retraso.", B: "Tu tren a Puerto Alto sale por la vía cuatro, con veinte minutos de retraso.", C: "Tu tren a Puerto Alto sale con veinte minutos de retraso, desde la vía cuatro. Ese es todo el misterio." },
            reply: { A: "Yesica abre los ojos. «¡Vía cuatro! ¡Gracias!» Corre con la maleta.", B: "Yesica abre mucho los ojos. «¡Vía cuatro! Estaba en la dos. ¡Gracias!» Agarra la maleta y corre.", C: "Yesica abre los ojos como platos. «¡La cuatro! Llevo media hora en la dos. Gracias, y perdona el grito.» Agarra la maleta y corre." },
            mood: "smile", end: "cuchillo-via",
          },
          {
            id: "info",
            say: { A: "Ven. Vamos juntos a información. Yo voy delante.", B: "Ven, vamos juntos a información. Yo camino delante para que me veas.", C: "Vamos a información. Yo camino delante y tú detrás, con tu vigilancia intacta." },
            reply: { A: "Yesica duda. «Bueno. Pero camina delante.» En información todo se aclara.", B: "Yesica duda. «Vale. Pero tú delante, con las manos fuera de los bolsillos.» En información todo se aclara.", C: "Yesica acepta con condiciones. «Tú delante, manos a la vista y cuchillo olvidado.» En información todo se aclara." },
            mood: "neutral", end: "cuchillo-info",
          },
        ],
      },
      "pistola-inicio": {
        who: "yesica", mood: "terror",
        line: {
          A: "Yesica ve la pistola. Levanta las manos y suelta el celular. «¡No, por favor! ¡Toma mi maleta! ¡No quiero problemas!»",
          B: "Yesica ve la pistola, se queda inmóvil y levanta las manos. El celular cae al suelo. «¡No, por favor! ¡Toma la maleta, lo que quieras! ¡No quiero problemas!»",
          C: "Yesica ve la pistola y todo su cuerpo se congela. Las manos suben solas y el celular cae. «Toma la maleta, el celular, lo que sea. Por favor, no me hagas daño.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la pistola.", B: "Guardas la pistola enseguida.", C: "Guardas la pistola de inmediato." },
            say: { A: "¡No! Perdón. No es un robo. Baja las manos.", B: "¡No, no es un robo! Perdona. Baja las manos, por favor.", C: "¡No es un robo, te lo juro! Perdona el espectáculo. Baja las manos." },
            reply: { A: "Yesica baja las manos con miedo. «¿Y por qué tienes una pistola?»", B: "Yesica baja las manos despacio, sin dejar de temblar. «¿Y entonces por qué llevas una pistola?»", C: "Yesica baja las manos despacio. «Entonces, ¿por qué llevas un arma en una estación? Explícame eso antes de que me desmaye.»" },
            mood: "scared", next: "pistola-altavoz",
          },
          {
            id: "tranquilizar",
            say: { A: "Tranquila. Solo quiero decirte el anuncio.", B: "Tranquila. Solo me acerqué para decirte qué dice el altavoz.", C: "Tranquila. Solo quería traducirte el altavoz, no asaltarte." },
            reply: { A: "Yesica no baja las manos. «¿Con una pistola?»", B: "Yesica no baja las manos ni un centímetro. «¿Y tenías que enseñarme una pistola para eso?»", C: "Yesica mantiene las manos arriba. «¿Y era imprescindible traer una pistola para traducir un altavoz?»" },
            mood: "scared", next: "pistola-altavoz",
          },
          {
            id: "ordenar",
            act: { A: "No guardas la pistola.", B: "Sigues con la pistola en la mano.", C: "Mantienes la pistola en la mano." },
            say: { A: "Dame tu billete. Ahora.", B: "Dame tu billete y tu celular. Ahora mismo.", C: "El billete y el celular. Sin ruido." },
            reply: { A: "Yesica grita. Dos policías de la estación llegan corriendo.", B: "Yesica grita con todas sus fuerzas. Dos policías de la estación llegan corriendo por el andén.", C: "Yesica lanza un grito que silencia hasta el altavoz. Dos policías de la estación llegan corriendo, con las manos en las fundas." },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },
      "pistola-altavoz": {
        who: "yesica", mood: "scared",
        line: {
          A: "El altavoz suena: «…personal de seguridad… andén dos…». Yesica llora un poco. «Creo que nos han visto. ¿Qué hacemos?»",
          B: "El altavoz suena de pronto: «…se ruega al personal de seguridad acudir al andén dos…». Yesica, con lágrimas, murmura: «Creo que nos han visto. ¿Qué hacemos?»",
          C: "El altavoz anuncia entre ecos: «…personal de seguridad al andén dos…». Yesica, con los ojos húmedos, susurra: «Creo que alguien ha dado la alarma. ¿Qué hacemos ahora?»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Escúchame: guardo la pistola y voy contigo a la vía cuatro.", B: "Escúchame: ya la he guardado. Te acompaño a la vía cuatro y se acaba todo.", C: "Escúchame: guardo el arma y te acompaño a la vía cuatro. Que lo único dramático sea el retraso." },
            reply: { A: "Yesica duda. Mira a los lados. «Bueno. Pero rápido.» Corren hacia la vía cuatro.", B: "Yesica duda, mira hacia las escaleras y asiente. «Está bien. Pero rápido.» Corren hacia la vía cuatro.", C: "Yesica duda, mira hacia las escaleras y asiente. «Rápido, antes de que llegue alguien.» Corren juntas hacia la vía cuatro." },
            mood: "worried", end: "pistola-via",
          },
          {
            id: "entregar",
            act: { A: "Entregas la pistola a un guardia.", B: "Entregas la pistola al guardia que se acerca.", C: "Entregas la pistola al guardia que llega, con ambas manos." },
            say: { A: "Tome. No quiero problemas. Fue un error.", B: "Tome, agente. No quiero problemas. Fue un error mío.", C: "Tome, agente. Reconozco mi error y me pongo a su disposición." },
            reply: { A: "El guardia toma la pistola. «Venga con nosotros.» Yesica respira.", B: "El guardia toma la pistola con cuidado. «Acompáñeme.» Yesica respira, aliviada.", C: "El guardia toma el arma con guantes. «Acompáñeme, por favor.» Yesica suelta el aire que llevaba conteniendo diez minutos." },
            mood: "worried", end: "pistola-policia",
          },
        ],
      },
      "granada-inicio": {
        who: "yesica", mood: "terror",
        line: {
          A: "Yesica ve la granada y grita: «¡Una bomba!» Agarra la maleta y corre. El altavoz dice: «…evacuación… salidas…».",
          B: "Yesica ve la granada y chilla: «¡Una bomba!» Agarra la maleta y echa a correr. Justo entonces, el altavoz anuncia: «…se ruega evacuar la estación por las salidas…».",
          C: "Yesica ve la granada y su grito supera al altavoz: «¡Una bomba!» Agarra la maleta y huye. El altavoz, con inoportuna sincronía: «…se ruega evacuar la estación…».",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es falsa! ¡Es de juguete!", B: "¡Es falsa! ¡Es de juguete, Yesica!", C: "¡Es de plástico! ¡Un accesorio de disfraz, nada más!" },
            reply: { A: "Nadie te oye. La gente corre. Un policía te apunta desde lejos.", B: "Nadie te oye entre la sirena. La gente corre por todas partes. Un policía te apunta desde lejos.", C: "Nadie te oye entre el pánico. La gente corre en estampida y un policía te apunta desde la distancia." },
            mood: "scared", next: "granada-evacuar",
          },
          {
            id: "seguir",
            act: { A: "Corres detrás de Yesica.", B: "Corres detrás de Yesica para aclarar todo.", C: "Corres detrás de Yesica para aclarar el malentendido." },
            say: { A: "¡Espera! ¡No es una bomba!", B: "¡Espera! ¡Te lo explico todo, no es una bomba!", C: "¡Espera! ¡Esto tiene explicación!" },
            reply: { A: "Yesica corre más rápido y grita. Un helicóptero llega.", B: "Yesica corre más rápido y grita todavía más fuerte. Un helicóptero aparece sobre el techo de la estación.", C: "Yesica acelera y grita aún más alto. Un helicóptero asoma sobre el techo de la estación, con su foco." },
            mood: "terror", end: "granada-helicoptero",
          },
          {
            id: "tirar",
            act: { A: "Tiras la granada a las vías.", B: "Lanzas la granada a las vías.", C: "Lanzas la granada hacia las vías, con alivio." },
            say: { A: "¡Ya está! ¡Se acabó!", B: "¡Ya está! ¡Se acabó, ya no hay peligro!", C: "¡Ya está! ¡Fuera de peligro, damas y caballeros!" },
            reply: { A: "No explota. Pero la policía te rodea.", B: "La granada rueda por la vía y no explota. Pero la policía ya te rodea con las armas en alto.", C: "La granada rueda por la vía sin explotar. Pero la policía ya te rodea con las armas en alto, sin ninguna intención de aplaudir." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-evacuar": {
        who: "yesica", mood: "scared",
        line: {
          A: "Yesica te mira desde lejos, junto a la escalera. «¿De verdad es de juguete?» El altavoz repite: «…evacuación…».",
          B: "Yesica te mira desde la escalera, con la maleta abrazada. «¿De verdad es de juguete? Júralo.» El altavoz sigue: «…evacuar la estación…».",
          C: "Yesica te observa desde la escalera, con la maleta abrazada como un escudo. «¿De verdad es de juguete? Júralo por tu madre.» El altavoz insiste: «…evacuar la estación…».",
        },
        options: [
          {
            id: "jurar",
            act: { A: "Dejas la granada en el suelo.", B: "Dejas la granada en el suelo y te alejas.", C: "Dejas la granada en el suelo y te alejas con las manos arriba." },
            say: { A: "Te lo juro. Es de plástico. Perdón.", B: "Te lo juro: es de plástico. Perdona el pánico que causé.", C: "Te lo juro por lo que quieras. Plástico. Y perdona el pánico, que fue completamente mío." },
            reply: { A: "Un policía la revisa. «Falsa.» Yesica se ríe de miedo.", B: "Un policía revisa la granada con cuidado. «Es falsa.» Yesica se ríe de puros nervios.", C: "Un policía revisa la granada con guantes. «Falsa.» Yesica estalla en una risa histérica que dura medio andén." },
            mood: "worried", end: "granada-evacuacion",
          },
          {
            id: "via",
            say: { A: "Tu tren sale de la vía cuatro. Corre, yo me quedo.", B: "Tu tren sale de la vía cuatro, ve ahora. Yo me quedo aquí con la policía.", C: "Tu tren sale de la vía cuatro. Ve ahora; yo me quedo a dar explicaciones." },
            reply: { A: "Yesica asiente y sale corriendo. La policía te rodea.", B: "Yesica asiente y sale corriendo hacia la vía cuatro. La policía te rodea y te hace preguntas.", C: "Yesica asiente, murmura un «gracias» incrédulo y corre hacia la vía cuatro. La policía te rodea, ya con preguntas." },
            mood: "worried", end: "granada-helicoptero",
          },
        ],
      },
      "corazon-inicio": {
        who: "yesica", mood: "smitten",
        line: {
          A: "Yesica te ve y sonríe. Se arregla el pelo. «Hola… ¡Qué bien que alguien amable está aquí! Este anuncio me tiene loca.»",
          B: "Yesica te ve y sonríe, aliviada. Se arregla el pelo sin darse cuenta. «Hola. ¡Qué bien que haya alguien amable por aquí! Este anuncio me tiene loca.»",
          C: "Yesica te ve y su preocupación se desvanece en una sonrisa. Se acomoda el pelo. «Hola. Qué alivio encontrar a alguien amable en esta estación. El anuncio me tiene al borde del colapso.»",
        },
        options: [
          {
            id: "traducir",
            say: { A: "Te ayudo. Dice: vía cuatro, con retraso.", B: "Te ayudo con gusto. Dice que tu tren sale por la vía cuatro, con retraso.", C: "Encantado de traducir. Dice que tu tren sale por la vía cuatro, con retraso. Un honor." },
            reply: { A: "Yesica se ríe. «¡Gracias! Eres un ángel.» Te toma de la mano.", B: "Yesica se ríe de alivio. «¡Gracias! Eres un ángel.» Te toma de la mano un segundo.", C: "Yesica se ríe y suspira. «Gracias. Eres un ángel con muy buen oído.» Te toma de la mano un segundo de más." },
            mood: "smitten", next: "corazon-cafe",
          },
          {
            id: "coquetear",
            say: { A: "No te preocupes. Contigo cerca, el tren espera.", B: "No te preocupes. Con una sonrisa así, hasta el tren espera.", C: "No te preocupes: con esa sonrisa, el tren tiene que esperar por obligación." },
            reply: { A: "Yesica se pone roja. «¡Ay! ¡Qué amable eres!»", B: "Yesica se pone roja. «¡Ay! Qué amable. Hacía horas que no sonreía.»", C: "Yesica se ruboriza. «Qué cosas dices. Llevaba horas sin sonreír y me lo has arreglado en una frase.»" },
            mood: "smitten", next: "corazon-cafe",
          },
          {
            id: "abrazo",
            act: { A: "La abrazas.", B: "La abrazas con cariño.", C: "La abrazas con cuidado, como a una amiga." },
            say: { A: "Tranquila. Todo va a salir bien.", B: "Tranquila, Yesica. Todo va a salir bien, ya verás.", C: "Tranquila. Todo va a salir bien, y si no, lo arreglamos juntos." },
            reply: { A: "Yesica te abraza fuerte. «Gracias. Me sentía muy sola.»", B: "Yesica te abraza fuerte, con los ojos húmedos. «Gracias. Me sentía muy sola con tanto altavoz.»", C: "Yesica te abraza con ganas. «Gracias. Me sentía muy sola con mi primer viaje y este altavoz.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-cafe": {
        who: "yesica", mood: "love",
        line: {
          A: "Yesica te mira. «Tengo veinte minutos. ¿Me acompañas a tomar algo? No quiero estar sola.»",
          B: "Yesica te mira con ojos brillantes. «Me quedan veinte minutos. ¿Me acompañas al quiosco a tomar algo? Me da pena esperar sola.»",
          C: "Yesica te mira con una sonrisa tímida. «Tengo veinte minutos de tren y ninguna intención de pasarlos sola. ¿Me acompañas a por un café?»",
        },
        options: [
          {
            id: "si",
            act: { A: "Le das la mano.", B: "Le ofreces el brazo y van al quiosco.", C: "Le ofreces el brazo y caminan juntos hacia el quiosco." },
            say: { A: "Sí, claro. Vamos.", B: "Claro que sí. Me encantaría.", C: "Con muchísimo gusto. Es el mejor plan que me han ofrecido esta noche." },
            reply: { A: "Yesica sonríe. Toman café juntos y hablan de su viaje.", B: "Yesica sonríe, feliz. Toman café juntos y ella te cuenta de su nuevo trabajo.", C: "Yesica sonríe, feliz. Toman café juntos y ella te cuenta de su nuevo trabajo, de su familia y de todo lo que el tren no cabe." },
            mood: "love", end: "corazon-cafe",
          },
          {
            id: "beso",
            act: { A: "Le das un beso en la mejilla.", B: "Le das un beso suave en la mejilla.", C: "Le das un beso suave en la mejilla antes de contestar." },
            say: { A: "Esto es para tu primer viaje sola. Mucha suerte.", B: "Esto es para tu primer viaje sola. Vas a hacerlo muy bien.", C: "Esto es para tu primer viaje y tu primer trabajo. Vas a deslumbrar a todos." },
            reply: { A: "Yesica se queda muda, sonriendo. «Gracias.» Y sube al tren feliz.", B: "Yesica se queda un segundo sin habla, sonriendo. «Gracias.» Y corre hacia la vía cuatro, flotando.", C: "Yesica se queda sin habla y sonrojada. «Gracias.» Corre hacia la vía cuatro, flotando entre ecos de altavoz." },
            mood: "smitten", end: "corazon-beso",
          },
        ],
      },
    },
    ends: {

      "cuchillo-policia": { text: { A: "El guardia te quita el cuchillo. Llega la policía. Yesica pierde su tren y llora un poco.", B: "El guardia te quita el cuchillo y llega la policía. Yesica pierde su tren mientras declara, llorando de puro susto.", C: "El guardia te desarma y llega la policía. Yesica pierde su tren mientras declara, entre sollozos y retraso." }, change: "policia", recap: "El cuchillo asustó a Yesica y terminó con la policía." },
      "cuchillo-via": { text: { A: "Yesica corre a la vía cuatro. Sube al tren. Desde la ventana te mira, aún con miedo.", B: "Yesica corre a la vía cuatro y sube justo a tiempo. Desde la ventana te mira, todavía asustada, pero agradecida.", C: "Yesica llega a la vía cuatro y sube justo a tiempo. Desde la ventana te mira con una mezcla de gratitud y vigilancia." }, change: "corre", recap: "Después del susto del cuchillo, Yesica tomó su tren." },
      "cuchillo-info": { text: { A: "En información todo se aclara. Yesica toma su tren. El guardia te mira el bolsillo.", B: "En información le confirman todo a Yesica. Toma su tren y el guardia te mira el bolsillo con desconfianza.", C: "En información le confirman todo a Yesica. Toma su tren y el guardia te mira el bolsillo durante un buen rato." }, change: "se-va", recap: "Acompañaste a Yesica a información después de asustarla con un cuchillo." },
      "pistola-policia": { text: { A: "La policía llega rápido. Te quita la pistola. Yesica pierde su tren y declara.", B: "La policía llega rápido y te quita la pistola. Yesica pierde su tren mientras declara, todavía temblando.", C: "La policía llega en cuestión de segundos y te desarma. Yesica pierde su tren declarando, con la maleta abrazada." }, change: "policia", recap: "La pistola trajo a la policía a la estación." },
      "pistola-via": { text: { A: "Yesica sube al tren. Desde la ventana te mira muy seria. Guardas la pistola.", B: "Yesica sube al tren en la vía cuatro. Desde la ventana te mira muy seria. Te quedas en el andén con la pistola bien guardada.", C: "Yesica sube al tren de la vía cuatro y te mira desde la ventana sin sonreír. Te quedas en el andén, con la pistola bien guardada y la conciencia revuelta." }, change: "se-va", recap: "Yesica tomó su tren después del susto de la pistola." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina la estación. La policía te rodea. Yesica mira desde lejos.", B: "Un helicóptero ilumina la estación entera. La policía te rodea mientras Yesica mira, de lejos, con la maleta abrazada.", C: "Un helicóptero baña la estación de luz y la policía te rodea. Yesica mira desde lejos, abrazada a la maleta, como espectadora de su propia pesadilla." }, change: "helicoptero", recap: "La granada trajo un helicóptero a la estación." },
      "granada-evacuacion": { text: { A: "La estación está vacía. Yesica se ríe nerviosa. El altavoz dice: «Se puede volver».", B: "La estación se vacía y vuelve a llenarse. Yesica se ríe, nerviosa. El altavoz anuncia: «Pueden regresar al andén».", C: "La estación se vacía y vuelve a llenarse en media hora. Yesica se ríe, nerviosa. El altavoz, con tono neutro, anuncia: «Pueden regresar al andén»." }, change: "huye", recap: "Tu granada vació la estación, pero no pasó nada." },
      "corazon-abrazo": { text: { A: "Yesica te abraza otra vez. Sube a su tren con una sonrisa.", B: "Yesica te abraza otra vez y sube a su tren con una sonrisa que no se le borra.", C: "Yesica te abraza una vez más y sube a su tren con una sonrisa que no se le borra en todo el camino a Puerto Alto." }, change: "abraza", recap: "Abrazaste a Yesica antes de su primer viaje sola." },
      "corazon-cafe": { text: { A: "Toman café juntos. Yesica te da su número. «¡Escríbeme!»", B: "Toman un café juntos y Yesica te da su número. «Escríbeme cuando quieras.» Sube al tren sonriendo.", C: "Toman un café largo y Yesica te da su número en una servilleta. «Escríbeme.» Sube al tren sonriendo, con la servilleta como boleto de suerte." }, change: "sonrie", recap: "Tomaste un café con Yesica y te dio su número." },
      "corazon-beso": { text: { A: "Yesica se toca la mejilla y corre al tren. Desde la puerta, te manda un beso.", B: "Yesica se toca la mejilla y corre hacia el tren. Desde la puerta, te manda un beso volando.", C: "Yesica se toca la mejilla, corre hacia el tren y, desde la puerta, te manda un beso volado que el altavoz casi interrumpe." }, change: "beso", recap: "Le diste un beso en la mejilla a Yesica antes de su tren." },
      via: { text: { A: "Yesica corre a la vía cuatro con su maleta.", B: "Yesica corre hacia la vía cuatro, con la maleta saltando detrás.", C: "Yesica sale disparada hacia la vía cuatro, con la maleta rebotando como un perrito." }, change: "corre", recap: "Le explicaste a Yesica el anuncio del tren." },
      info: { text: { A: "Vas con Yesica a información. Allí le explican todo.", B: "Acompañas a Yesica a información. Allí le confirman la vía y la hora.", C: "En información le confirman todo a Yesica con una claridad que el altavoz envidiaría." }, change: "se-va", recap: "Acompañaste a Yesica a información." },
      cafe: { text: { A: "Tomas un café con Yesica. Ella te cuenta de su viaje.", B: "Tomas un café con Yesica mientras esperan. Te cuenta adónde va y por qué.", C: "Compartes café con Yesica. En veinte minutos te cuenta media vida y sus planes nuevos." }, change: "se-sienta", recap: "Tomaste un café con Yesica mientras esperaba su tren." },
      animo: { text: { A: "Yesica sonríe. Va a su tren muy contenta.", B: "Yesica va hacia su tren con otra cara. Antes de irse, te saluda con la mano.", C: "Yesica se va hacia su andén con los nervios convertidos en ganas." }, change: "sonrie", recap: "Animaste a Yesica en su primer viaje sola." },
    },
    speak: {
      A1: "¿Qué haces cuando no entiendes algo?",
      A2: "¿Cuándo no entendiste un anuncio en un lugar público?",
      B1: "¿Cómo pides ayuda cuando estás en un lugar desconocido?",
      B2: "¿Qué te parece más difícil: entender un audio o una conversación cara a cara?",
      C1: "¿Cómo manejas la incertidumbre cuando la información es confusa?",
      C2: "¿Qué estrategias usas para fingir que entiendes, y cuándo dejas de hacerlo?",
    },

    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces cuando alguien te grita de miedo?", B: "¿Cómo reaccionarías si alguien te asustara con un cuchillo en un lugar público?", C: "¿Qué se pierde en la comunicación cuando una de las dos partes tiene miedo?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces si ves un arma en un lugar público?", B: "¿Qué obedecerías por miedo y qué no?", C: "¿Quién debería intervenir en una situación de miedo en un lugar público?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Cómo te sientes en una evacuación?", B: "¿Alguna vez saliste corriendo de un lugar sin saber por qué?", C: "¿Cómo se contagia el pánico en un lugar público, y cómo se frena?" } },
      corazon: { start: "corazon-inicio", fx: "beso", speak: { A: "¿Con quién tomas un café para hablar?", B: "¿Cuándo un desconocido amable te hizo el día más fácil?", C: "¿Qué hace que un gesto de amabilidad nos desarme tan rápido?" } },
    },
  },

  // ─────────────────────────────────────────────────────────────── RINCÓN 8
  {
    id: "estacion-kiosco",
    kind: "rincon",
    district: "estacion",
    title: "El quiosco de 24 horas",
    verb: "COMPRAR",
    goal: "Pedir algo en un comercio, preguntar el precio y conversar de manera informal sobre el trabajo nocturno.",
    cast: [
      {
        id: "ramon", name: "Ramón", role: "Quiosquero nocturno",
        age: "adult", body: "m", build: "slim", height: 1.7,
        hair: "curly", hairColor: "#5a4636", skin: "#e3b48c",
        top: "apron", topColor: "#2f5d3a", bottom: "pants", bottomColor: "#4b4038",
        extras: ["beard", "glasses"], pose: "lean", props: ["kiosk", "newspapers"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "ramon", mood: "sleepy",
        line: {
          A: "En el quiosco hay luz, café y periódicos. Un hombre con barba bosteza. «Buenas noches. ¿Qué te pongo?»",
          B: "El quiosco es lo único abierto en la estación. Un hombre con barba y ojeras deja su crucigrama. «Buenas noches. ¿Qué te pongo?»",
          C: "El quiosco brilla como un faro entre los andenes. El quiosquero aparta su crucigrama y bosteza con dignidad. «Buenas. ¿Qué va a ser?»",
        },
        options: [
          {
            id: "cafe",
            say: { A: "Un café con leche, por favor. ¿Cuánto es?", B: "Me pone un café con leche, por favor. ¿Cuánto le debo?", C: "Un café con leche, por favor. Del más fuerte que tenga." },
            reply: { A: "«Uno cincuenta. Está recién hecho… bueno, de hace una hora.»", B: "«Uno cincuenta. Recién hecho», dice, y mira la cafetera. «Bueno, recién hecho hace una hora.»", C: "«Del más fuerte», repite el quiosquero. «Este lleva despierto tanto como yo.»" },
            mood: "smile", next: "charla",
          },
          {
            id: "periodico",
            say: { A: "¿Tiene el periódico de mañana?", B: "¿Ya tiene el periódico de mañana?", C: "¿Ha llegado ya el periódico de mañana, o el futuro también se retrasa?" },
            reply: { A: "«Llega a las cinco. ¡Ahora tengo el de hoy!»", B: "«Llega a las cinco», dice el quiosquero. «Si me cuentas las noticias de hoy, te lo guardo.»", C: "«El futuro llega a las cinco, en camioneta», dice el quiosquero. «De momento, solo tengo pasado.»" },
            mood: "smile", next: "charla",
          },
          {
            id: "turno",
            say: { A: "Pareces cansado. ¿Trabajas toda la noche?", B: "Se te ve cansado. ¿Trabajas toda la noche?", C: "Tienes cara de turno largo. ¿Hasta qué hora te toca?" },
            reply: { A: "«De diez a seis. Seis noches a la semana. Pero me gusta.»", B: "«De diez de la noche a seis de la mañana», dice. «Es duro, pero me gusta la gente de la noche.»", C: "«De diez a seis», dice el quiosquero. «La noche es mala para el sueño, pero buenísima para las historias.»" },
            mood: "neutral", next: "charla",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Gracias por estar aquí. Esta luz ayuda mucho.", B: "Gracias por estar abierto. Esta luz es lo único alegre de la estación.", C: "Este quiosco es lo más parecido a un hogar que tiene la estación de noche." },
            reply: { A: "El quiosquero sonríe. «Gracias. Me llamo Ramón. La gente viene a hablar conmigo.»", B: "El quiosquero sonríe. «Soy Ramón. Muchos no vienen a comprar, vienen a hablar.»", C: "El quiosquero se emociona. «Ramón. Soy un poco camarero sin bar y un poco cura sin iglesia.»" },
            mood: "love", next: "charla",
          },
          lapiz: {
            act: { A: "Le das tu lápiz.", B: "Ves que su bolígrafo no escribe y le das tu lápiz.", C: "Ves que su bolígrafo ha muerto en mitad del crucigrama. Le ofreces tu lápiz." },
            say: { A: "Toma, para tu crucigrama.", B: "Toma, para el crucigrama. ¿Qué palabra te falta?", C: "Toma. ¿Cuál es la palabra que te tiene secuestrado?" },
            reply: { A: "«¡Gracias! Me falta una palabra: “tren” en seis letras.»", B: "«¡Gracias! Me falta una: “lugar donde paran los trenes”, seis letras.»", C: "«Gracias. “Lugar de llegadas y despedidas”, seis letras. Lo tengo delante y no lo veo.»" },
            mood: "smile", end: "crucigrama",
          },
          libro: {
            act: { A: "Ramón ve tu libro.", B: "El quiosquero se fija en tu libro.", C: "El quiosquero mira tu libro con interés profesional." },
            say: { A: "¿Te gusta leer? Te lo cambio por un café.", B: "¿Te gusta leer? Te lo cambio por un café.", C: "¿Hacemos un trueque? Mi libro por un café." },
            reply: { A: "«¡Trato hecho! Me llamo Ramón. Leo mucho por la noche.»", B: "«¡Trato hecho! Soy Ramón. Por la noche leo un libro por semana.»", C: "«Trueque aceptado», dice el quiosquero. «Ramón. De noche leo más que duermo.»" },
            mood: "smile", end: "trueque",
          },
        },
      },
      charla: {
        who: "ramon", mood: "smile",
        line: {
          A: "Ramón te da el café. «Por la noche vienen viajeros, taxistas y gente que no duerme. ¿Tú qué eres?»",
          B: "Ramón te da el café. «A esta hora solo vienen viajeros, taxistas y gente que no puede dormir. ¿Tú cuál eres?»",
          C: "Ramón te pasa el café. «De noche, tres especies: viajeros, taxistas e insomnes. ¿A cuál perteneces?»",
        },
        options: [
          {
            id: "viajero",
            say: { A: "Viajero. Mi tren sale pronto.", B: "Viajero. Mi tren sale dentro de un rato.", C: "Viajero, aunque todavía no sé si de ida o de vuelta." },
            reply: { A: "«Buen viaje. Toma un chicle. Es un regalo.»", B: "«Entonces, buen viaje», dice Ramón. «Llévate un chicle, invita la casa.»", C: "Ramón se ríe. «Los mejores viajes son los indecisos. Toma un chicle, invita la casa.»" },
            mood: "smile", end: "chicle",
          },
          {
            id: "insomne",
            say: { A: "No puedo dormir. Camino por la ciudad.", B: "Yo no puedo dormir, así que camino por la ciudad.", C: "Insomne profesional. Camino la ciudad hasta que se me acaban los pensamientos." },
            reply: { A: "«Te entiendo. Yo duermo de día, como un murciélago.»", B: "«Te entiendo», dice Ramón, y saca un taburete. «Siéntate un rato. Yo duermo de día, como los murciélagos.»", C: "Ramón te acerca un taburete. «Siéntate. A mí se me acaban antes los cafés que los pensamientos.»" },
            mood: "smile", end: "taburete",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Tú cuidas la estación por la noche, ¿no?", B: "Me parece que tú eres quien cuida la estación por la noche.", C: "Sospecho que tú eres el verdadero guardián de esta estación." },
            reply: { A: "Ramón sonríe. «Escribo una novela sobre la gente de la noche. ¡Tú vas a estar!»", B: "Ramón se pone rojo. «¿Sabes qué? Escribo una novela sobre la gente que pasa por aquí. Vas a salir en ella.»", C: "Ramón baja la voz. «Te cuento un secreto: escribo una novela con todos los que pasan. Acabas de ganarte un capítulo.»" },
            mood: "love", end: "novela",
          },
        },
      },

      // ── variantes
      "cuchillo-inicio": {
        who: "ramon", mood: "terror",
        line: {
          A: "Ramón ve tu cuchillo. Abre un cajón y saca otro, el del pan. «¡Atrás! ¡Yo también tengo uno! ¡No te acerques al quiosco!»",
          B: "Ramón ve tu cuchillo, se queda helado y abre un cajón. Saca el cuchillo del pan y lo levanta con las dos manos. «¡Atrás! ¡Yo también tengo uno! ¡No te acerques!»",
          C: "Ramón ve tu cuchillo y, con una agilidad que el sueño no justificaba, saca del cajón el cuchillo del pan. «Dos cuchillos y un quiosco. Esto va a acabar en el periódico que vendo. ¡Atrás!»",
        },
        options: [
          {
            id: "bajar",
            act: { A: "Bajas el cuchillo despacio.", B: "Bajas el cuchillo muy despacio.", C: "Bajas el cuchillo con las palmas abiertas." },
            say: { A: "Tranquilo. Lo bajo. Solo quería un café.", B: "Tranquilo, lo bajo. Solo quería pedir un café, de verdad.", C: "Tranquilo, lo bajo. Quería un café, no una pelea. Bajemos los dos los cuchillos." },
            reply: { A: "Ramón baja el suyo, temblando. «¡Qué susto! ¿Estás loco?»", B: "Ramón baja el suyo, temblando. «¡Qué susto me has dado! ¿Estás loco o qué?»", C: "Ramón baja el cuchillo del pan, sin soltarlo. «Qué susto. ¿Estás loco? Treinta años de turno y esto no lo vi nunca.»" },
            mood: "scared", next: "cuchillo-calma",
          },
          {
            id: "gritar",
            say: { A: "¡No me amenaces! ¡Baja eso tú primero!", B: "¡No me amenaces! ¡Baja tú el cuchillo primero!", C: "¡Baja tú primero! Aquí el que está en inferioridad soy yo." },
            reply: { A: "Ramón grita: «¡Policía!» Un taxista llama por teléfono.", B: "Ramón grita: «¡Policía, policía!» Un taxista que pasaba saca el celular y llama.", C: "Ramón ruge: «¡Policía!» Un taxista que pasaba, con instinto cívico, saca el celular y marca el número." },
            mood: "terror", end: "cuchillo-policia",
          },
          {
            id: "huir",
            act: { A: "Retrocedes sin soltar el cuchillo.", B: "Retrocedes hacia la oscuridad sin soltar el cuchillo.", C: "Retrocedes hacia las sombras, cuchillo en mano." },
            say: { A: "No quiero problemas. Me voy.", B: "No quiero problemas. Me voy ahora mismo.", C: "No quiero problemas con nadie. Me retiro." },
            reply: { A: "Ramón no baja el cuchillo hasta que desapareces.", B: "Ramón mantiene el cuchillo en alto hasta que desapareces entre los andenes.", C: "Ramón mantiene el cuchillo en alto hasta que las sombras de los andenes te tragan." },
            mood: "scared", end: "cuchillo-fuga",
          },
        ],
      },
      "cuchillo-calma": {
        who: "ramon", mood: "worried",
        line: {
          A: "Ramón guarda el cuchillo del pan en el cajón. «Bueno. Perdona. A esta hora todo da miedo. ¿Un café?»",
          B: "Ramón guarda el cuchillo del pan en el cajón, todavía pálido. «Perdona. A estas horas todo da miedo. Ni yo sé por qué saqué eso. ¿Te pongo un café?»",
          C: "Ramón devuelve el cuchillo del pan a su cajón, pálido. «Perdona. De noche, todo se magnifica, incluso yo. ¿Un café para quitarnos el susto?»",
        },
        options: [
          {
            id: "cafe",
            say: { A: "Sí, por favor. Un café con leche. Y perdón.", B: "Sí, por favor. Un café con leche, bien cargado. Y perdón otra vez.", C: "Con mucho gusto. Un café con leche, bien cargado, que lo necesitamos los dos. Y mil perdones." },
            reply: { A: "Ramón sirve dos cafés. Los dos se sientan. «Invita la casa.»", B: "Ramón sirve dos cafés y saca un taburete para ti. «Invita la casa. Y ya está olvidado.»", C: "Ramón sirve dos cafés y saca un taburete. «Invita la casa. Los duelos de cuchillos se resuelven mejor con cafeína.»" },
            mood: "smile", end: "cuchillo-cafe",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Lo siento.", B: "Mejor me voy. Lo siento mucho otra vez.", C: "Mejor me retiro. Lo lamento sinceramente, Ramón." },
            reply: { A: "Ramón asiente. «Vale. Buenas noches.»", B: "Ramón asiente, sin muchas ganas de insistir. «Vale. Buenas noches, y guarda eso.»", C: "Ramón asiente, aliviado y cortés. «Buenas noches. Y que esa hoja no te acompañe la próxima vez.»" },
            mood: "neutral", end: "cuchillo-fuga",
          },
        ],
      },
      "pistola-inicio": {
        who: "ramon", mood: "terror",
        line: {
          A: "Ramón ve la pistola. Levanta las manos. «¡No dispares! ¡Toma el dinero! ¡Está en la caja!» Abre la caja con manos temblorosas.",
          B: "Ramón ve la pistola y levanta las manos, pálido. «¡No dispares! ¡Toma el dinero, está en la caja!» Abre la caja registradora con manos temblorosas.",
          C: "Ramón ve la pistola y levanta las manos sin necesidad de que se lo pidan. «Toma lo que quieras. La caja está abierta; los periódicos, a tu disposición.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la pistola.", B: "Guardas la pistola enseguida.", C: "Guardas la pistola de inmediato." },
            say: { A: "¡No! ¡No es un robo! Cierra la caja. Perdón.", B: "¡No es un robo! Cierra la caja, por favor. Perdona el susto.", C: "¡No es un robo! Cierra la caja, te lo ruego. Perdona el espectáculo." },
            reply: { A: "Ramón respira. «¿Entonces para qué sacas eso?»", B: "Ramón respira, con la mano en el pecho. «¿Y entonces por qué sacas eso en mi quiosco?»", C: "Ramón respira, con la mano en el pecho. «¿Y entonces qué hace una pistola en mi mostrador? Aquí solo hay crucigramas y chicles.»" },
            mood: "worried", next: "pistola-caja",
          },
          {
            id: "dinero",
            act: { A: "Miras la caja abierta.", B: "Miras la caja abierta sin tocarla.", C: "Miras la caja abierta con una duda evidente." },
            say: { A: "No quiero dinero. Quiero un café.", B: "No quiero tu dinero. Solo quería un café.", C: "No quiero tu dinero. Quería un café y, por lo visto, lo he arruinado." },
            reply: { A: "Ramón no entiende. «¿Un café? ¿Con una pistola?»", B: "Ramón no lo cree. «¿Un café? ¿Con una pistola en la mano?»", C: "Ramón no sabe si reír o llorar. «¿Un café, con una pistola? Qué manera tan extraña de pedirlo.»" },
            mood: "scared", next: "pistola-caja",
          },
          {
            id: "ordenar",
            act: { A: "Sigues apuntando.", B: "Sigues apuntando a Ramón.", C: "Mantienes la pistola apuntando a Ramón." },
            say: { A: "Dame la caja. Rápido.", B: "Dame todo el dinero. Rápido y sin gritar.", C: "Todo el dinero. Rápido y sin heroísmos." },
            reply: { A: "Ramón pulsa un botón bajo el mostrador. Suena una alarma. Llega la policía.", B: "Ramón pulsa el botón de pánico bajo el mostrador. Suena una alarma silenciosa y, en minutos, llega la policía.", C: "Ramón pulsa con el pie el botón de pánico. La alarma es silenciosa, la policía no: llega en minutos con las sirenas." },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },
      "pistola-caja": {
        who: "ramon", mood: "angry",
        line: {
          A: "Ramón cierra la caja. Te mira muy serio. «Soy padre de dos hijos. ¿Tú sabes lo que es esto para mí?»",
          B: "Ramón cierra la caja con manos temblorosas y te mira muy serio. «Soy padre de dos hijos. ¿Tú sabes lo que he sentido hace un minuto?»",
          C: "Ramón cierra la caja y te sostiene la mirada. «Tengo dos hijos y un turno de noche. Lo último que necesitaba hoy era una pistola. ¿Te das cuenta?»",
        },
        options: [
          {
            id: "disculpa",
            say: { A: "Perdón, Ramón. Fue un error. Compro un café para los dos.", B: "Perdón, Ramón. Fue un error enorme. Te compro un café para los dos.", C: "Perdón, Ramón. Un error enorme y vergonzoso. Déjame invitarte a un café." },
            reply: { A: "Ramón suspira. «Siéntate. Voy a hacer café.» Y habla contigo.", B: "Ramón suspira y asiente. «Siéntate, anda. Voy a hacer un café. Y a respirar.»", C: "Ramón suspira largo. «Siéntate. Café para los dos, que yo también lo necesito. Y no vuelvas a sacar eso.»" },
            mood: "worried", end: "pistola-cafe",
          },
          {
            id: "seguridad",
            say: { A: "La llevo por seguridad. La estación es peligrosa de noche.", B: "La llevo por seguridad. La estación de noche es peligrosa.", C: "La llevo por seguridad. La estación de noche impone, ya lo sabes mejor que yo." },
            reply: { A: "Ramón llama a la policía. «Aquí hay un hombre armado.»", B: "Ramón llama a la policía sin dejar de mirarte. «Hay una persona armada en el quiosco.»", C: "Ramón marca el número de la policía con calma de veterano. «Persona armada en el quiosco de la estación. Sí, hablando.»" },
            mood: "angry", end: "pistola-policia",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Perdón.", B: "Mejor me voy y no vuelvo. Perdón otra vez.", C: "Mejor me voy y no vuelvo por aquí. Lo siento de verdad." },
            reply: { A: "Ramón no dice nada. Se queda mirando cómo te vas.", B: "Ramón no dice nada. Se queda observando cómo desapareces por los andenes.", C: "Ramón guarda un silencio largo. Te sigue con la mirada hasta que los andenes te tragan." },
            mood: "sad", end: "pistola-huye",
          },
        ],
      },
      "granada-inicio": {
        who: "ramon", mood: "terror",
        line: {
          A: "Ramón ve la granada. Se agacha detrás del mostrador. «¡Una granada! ¡Todos fuera!» El café vuela por el aire.",
          B: "Ramón ve la granada y se tira detrás del mostrador. «¡Una granada! ¡Todo el mundo fuera!» La cafetera cae al suelo y el café sale volando.",
          C: "Ramón ve la granada y desaparece detrás del mostrador con una rapidez que no le conocías. «¡Granada! ¡Evacuen!» La cafetera cae y el café se esparce por el suelo como un charco de pánico.",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Sal de ahí!", B: "¡Es de juguete! ¡Sal de ahí, Ramón!", C: "¡Es de plástico! ¡Sal de ahí, hombre, que es una broma!" },
            reply: { A: "Ramón asoma los ojos. «¿Juguete? ¡Qué broma más mala!»", B: "Ramón asoma los ojos por encima del mostrador. «¿De juguete? ¡Vaya broma más mala!»", C: "Ramón asoma los ojos por encima del mostrador. «¿Plástico? ¡Menuda broma, con la que está cayendo en esta estación!»" },
            mood: "scared", next: "granada-caos",
          },
          {
            id: "tirar",
            act: { A: "Lanzas la granada lejos.", B: "Lanzas la granada a las vías.", C: "Lanzas la granada a las vías, con prisa." },
            say: { A: "¡Al suelo, todos!", B: "¡Al suelo, todos! ¡Cúbranse!", C: "¡Al suelo, todos! ¡Cúbranse la cabeza!" },
            reply: { A: "La granada no explota. Suena la alarma. Un helicóptero llega.", B: "La granada rueda por las vías sin explotar. Suena la alarma y, poco después, un helicóptero ilumina la estación.", C: "La granada rueda por las vías sin explotar. Suena la alarma y, enseguida, un helicóptero ilumina la estación como un teatro." },
            mood: "terror", end: "granada-helicoptero",
          },
          {
            id: "correr",
            act: { A: "Sales corriendo.", B: "Sales corriendo con la granada.", C: "Sales corriendo hacia los andenes, granada en mano." },
            say: { A: "¡Fuera! ¡Todos fuera!", B: "¡Fuera de aquí! ¡Todos fuera!", C: "¡Evacuen la zona! ¡Todos fuera, rápido!" },
            reply: { A: "La gente corre. La estación se vacía. Llega la policía.", B: "La gente de la estación echa a correr contigo. En pocos minutos, la estación se vacía y llega la policía.", C: "La gente de los andenes se suma a tu carrera. En pocos minutos la estación está vacía y la policía llega con las sirenas." },
            mood: "terror", end: "granada-evacuacion",
          },
        ],
      },
      "granada-caos": {
        who: "ramon", mood: "furious",
        line: {
          A: "Ramón sale de detrás del mostrador, con café en la camisa. «¡Mi café! ¡Mis periódicos! ¡Esto va a salirte caro!»",
          B: "Ramón se levanta con café por toda la camisa y los periódicos por el suelo. «¡Mi quiosco! ¡Mis periódicos! ¡Esto te va a costar caro!»",
          C: "Ramón se levanta, chorreando café, entre una avalancha de periódicos. «¡Mi quiosco! ¡Mi turno! ¡Mi dignidad! Esto va a cobrártelo mi seguro, y mi abogado.»",
        },
        options: [
          {
            id: "pagar",
            say: { A: "Perdón. Te ayudo a limpiar. Y te pago los periódicos.", B: "Perdón, Ramón. Te ayudo a limpiar y te pago los periódicos.", C: "Perdón, Ramón. Limpio todo yo y te pago hasta el último periódico. Es lo mínimo." },
            reply: { A: "Ramón suspira. Los dos limpian. Después tomas un café con él.", B: "Ramón suspira, vencido. Limpian los dos entre risas nerviosas. Después compartes un café con él.", C: "Ramón suspira, vencido. Limpian juntos entre risas nerviosas. Después compartes con él el único café que se salvó." },
            mood: "worried", end: "granada-cafe",
          },
          {
            id: "huir",
            act: { A: "Sales corriendo.", B: "Sales corriendo del quiosco.", C: "Sales corriendo del quiosco, dejando atrás el desastre." },
            say: { A: "¡Perdón! ¡Me voy!", B: "¡Perdón, perdón! ¡Me voy!", C: "¡Mil perdones! ¡Ya hablaremos de la factura!" },
            reply: { A: "Ramón llama a la policía. Un helicóptero te busca.", B: "Ramón llama a la policía. Poco después, un helicóptero sobrevuela la estación buscándote.", C: "Ramón llama a la policía con voz triunfal. Poco después, un helicóptero sobrevuela la estación buscándote con su foco." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "corazon-inicio": {
        who: "ramon", mood: "smitten",
        line: {
          A: "Ramón te ve y se le quita el sueño. Sonríe. «¡Hola, hola! Qué bien verte. Hacía horas que no entraba nadie tan simpático. ¿Qué te pongo?»",
          B: "Ramón te ve y el sueño se le va de golpe. Sonríe de oreja a oreja. «¡Hola! Qué alegría verte. Hacía horas que no entraba nadie tan simpático al quiosco. ¿Qué te pongo?»",
          C: "Ramón te ve y el sueño se evapora. Sonríe como si le hubieras traído el amanecer. «Buenas noches, o buenos días, o lo que sea. Llevaba horas sin ver una cara amable. ¿Qué le sirvo?»",
        },
        options: [
          {
            id: "cafe",
            say: { A: "Un café. Y charlar contigo un rato.", B: "Un café con leche. Y un rato de charla, si tienes tiempo.", C: "Un café con leche y, si no es abusar, un rato de buena conversación." },
            reply: { A: "Ramón prepara el café y saca un taburete. «Siéntate. Esta noche, tú eres mi invitado.»", B: "Ramón prepara el café con cariño y saca un taburete. «Siéntate, anda. Esta noche eres mi invitado de honor.»", C: "Ramón prepara el café como si fuera un ritual y saca el taburete. «Siéntese. Esta noche es usted mi invitado de honor.»" },
            mood: "smitten", next: "corazon-novela",
          },
          {
            id: "coquetear",
            say: { A: "Tienes una sonrisa muy bonita, Ramón.", B: "Tienes una sonrisa preciosa, Ramón. Se nota que te gusta tu trabajo.", C: "Qué sonrisa tiene usted, Ramón. Con ella, el quiosco debería ser Patrimonio de la Humanidad." },
            reply: { A: "Ramón se pone rojo. «¡Ay! Qué amable. ¡Gracias!»", B: "Ramón se pone rojo hasta las orejas. «¡Ay, qué amable! Hacía años que nadie me decía algo así.»", C: "Ramón se ruboriza hasta las gafas. «Qué cosas dice. Llevo años sin oír un piropo a las cuatro de la mañana.»" },
            mood: "smitten", next: "corazon-novela",
          },
          {
            id: "abrazo",
            act: { A: "Le das la mano por encima del mostrador.", B: "Le tomas la mano por encima del mostrador.", C: "Le estrechas la mano por encima del mostrador, con mucha calidez." },
            say: { A: "Gracias por estar aquí de noche.", B: "Gracias por estar aquí de noche, Ramón. Esta luz salva a mucha gente.", C: "Gracias por mantener esta luz encendida, Ramón. Más gente de la que crees la necesita." },
            reply: { A: "Ramón se emociona. Sale del mostrador y te abraza.", B: "Ramón se emociona, sale del mostrador y te abraza con fuerza. «Qué detalle. De verdad.»", C: "Ramón se emociona, sale del mostrador y te abraza con fuerza. «Nadie me había dicho algo así en veinte años de turnos.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-novela": {
        who: "ramon", mood: "love",
        line: {
          A: "Ramón te da el café. «Escribo una novela. Es sobre una persona como tú, que sonríe en una noche difícil. ¿Quieres leer una página?»",
          B: "Ramón te pone el café delante y baja la voz. «Te cuento un secreto: escribo una novela sobre gente de la noche. Un personaje se parece mucho a ti. ¿Quieres leer una página?»",
          C: "Ramón te pone el café delante y baja la voz, cómplice. «Secreto de quiosquero: escribo una novela con la gente que pasa. El protagonista de esta página eres tú. ¿La lees?»",
        },
        options: [
          {
            id: "leer",
            say: { A: "Sí, claro. Me encantaría.", B: "Sí, claro. Me encantaría leerla ahora mismo.", C: "Será un honor. Leeré con la reverencia que merece una primera lectora." },
            reply: { A: "Lees la página. Ramón te mira, nervioso. Sonríes. Él sonríe.", B: "Lees la página en voz baja. Ramón te mira nervioso. Cuando sonríes, él suelta el aire.", C: "Lees la página sin prisa. Ramón te mira conteniendo la respiración. Cuando sonríes, él suelta el aire que llevaba años guardando." },
            mood: "love", end: "corazon-novela",
          },
          {
            id: "beso",
            act: { A: "Le das un beso en la mejilla.", B: "Le das un beso en la mejilla por encima del mostrador.", C: "Le das un beso en la mejilla, por encima del mostrador, con ternura." },
            say: { A: "Para tu novela. Para que tenga un buen final.", B: "Para tu novela. Que tenga un final muy feliz.", C: "Para tu novela. Que tu protagonista termine siendo querido, como mereces tú." },
            reply: { A: "Ramón se toca la mejilla y sonríe. «Esto va en el último capítulo.»", B: "Ramón se toca la mejilla y sonríe como un niño. «Esto va directo al último capítulo.»", C: "Ramón se toca la mejilla, ruborizado. «Esto va directo al último capítulo. Con tu permiso y con subrayado.»" },
            mood: "smitten", end: "corazon-beso",
          },
        ],
      },
    },
    ends: {

      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. A Ramón, el del pan. Los dos explican la historia.", B: "Llegan dos policías. Te quitan el cuchillo, y a Ramón el del pan. Los dos cuentan su versión del duelo.", C: "Llegan dos policías, te desarman y desarman a Ramón, que protesta por su cuchillo del pan. Cada uno cuenta su versión del duelo." }, change: "policia", recap: "Un duelo de cuchillos en el quiosco terminó con la policía." },
      "cuchillo-cafe": { text: { A: "Se toman el café juntos, sin cuchillos. Ramón te cuenta su vida.", B: "Se toman el café juntos, sin cuchillos a la vista. Ramón te cuenta su vida entre sorbos.", C: "Se toman el café juntos, con los cuchillos exiliados al cajón. Ramón te cuenta su vida entre sorbos y suspiros." }, change: "se-sienta", recap: "Después del duelo de cuchillos, tomaste un café con Ramón." },
      "cuchillo-fuga": { text: { A: "Te vas del quiosco. Ramón vuelve a su crucigrama. Con el cuchillo cerca.", B: "Te vas del quiosco. Ramón vuelve a su crucigrama, con el cuchillo del pan todavía a mano.", C: "Te vas del quiosco. Ramón vuelve a su crucigrama, con el cuchillo del pan estratégicamente cerca." }, change: "se-va", recap: "El cuchillo asustó a Ramón y te fuiste del quiosco." },
      "pistola-policia": { text: { A: "La policía llega rápido. Te quita la pistola. Ramón declara muy pálido.", B: "La policía llega en minutos y te quita la pistola. Ramón declara, todavía pálido, apoyado en el mostrador.", C: "La policía llega en minutos y te desarma. Ramón declara, aún pálido, apoyado en el mostrador y rodeado de periódicos." }, change: "policia", recap: "La pistola en el quiosco terminó con la policía." },
      "pistola-cafe": { text: { A: "Ramón prepara café. Hablan un rato. Tú guardas la pistola para siempre.", B: "Ramón prepara dos cafés y hablan un rato. Tú te prometes no volver a sacar esa pistola.", C: "Ramón prepara dos cafés y hablan un largo rato. Te prometes, entre sorbo y sorbo, que la pistola no volverá a salir." }, change: "se-sienta", recap: "Después del susto de la pistola, Ramón te invitó a un café." },
      "pistola-huye": { text: { A: "Te vas. Ramón llama a un guardia. Tú desapareces entre los andenes.", B: "Te vas rápido. Ramón llama a un guardia. Desapareces entre los andenes antes de que llegue.", C: "Te vas rápido. Ramón llama a un guardia. Desapareces entre los andenes antes de que nadie pregunte por esa pistola." }, change: "huye", recap: "Huiste del quiosco después de sacar una pistola." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina el quiosco. La policía te rodea. Ramón grita: «¡Fue él!»", B: "Un helicóptero ilumina el quiosco y la policía te rodea. Ramón grita desde el mostrador: «¡Fue él, fue él!»", C: "Un helicóptero ilumina el quiosco y la policía te rodea. Ramón, chorreando café, te señala: «¡Fue él! ¡Ese del bolsillo!»" }, change: "helicoptero", recap: "La granada trajo un helicóptero al quiosco." },
      "granada-evacuacion": { text: { A: "La estación está vacía. Solo quedan Ramón, tú y el café en el suelo.", B: "La estación queda vacía. Solo quedan Ramón, tú y un charco de café en el suelo.", C: "La estación queda desierta. Solo quedan Ramón, tú y el café derramado, que parece un mapa de la catástrofe." }, change: "huye", recap: "La granada vació la estación y tiró el café de Ramón." },
      "granada-cafe": { text: { A: "Limpian juntos. Ramón te hace otro café. Ríen mucho del susto.", B: "Limpian juntos el desastre. Ramón te hace otro café y los dos se ríen del susto como si fuera una anécdota de años.", C: "Limpian juntos el desastre. Ramón te prepara otro café y los dos se ríen del susto como si fuera una anécdota de años." }, change: "sonrie", recap: "Después de la granada, limpiaste el quiosco con Ramón y tomaron café." },
      "corazon-abrazo": { text: { A: "Ramón te abraza. Te da un chicle y un café gratis. Está muy contento.", B: "Ramón te abraza con fuerza. Te regala un chicle y un café. Se queda sonriendo toda la noche.", C: "Ramón te abraza con fuerza, te regala un chicle y un café y se queda sonriendo el resto del turno." }, change: "abraza", recap: "Le diste las gracias a Ramón y te abrazó." },
      "corazon-novela": { text: { A: "Lees la página. Ramón escribe tu nombre en su cuaderno. Sonríe.", B: "Lees la página de su novela. Ramón escribe tu nombre en la primera línea del cuaderno y sonríe.", C: "Lees la página de su novela. Ramón escribe tu nombre en la dedicatoria del cuaderno y sonríe como un autor recién publicado." }, change: "sonrie", recap: "Leíste una página de la novela de Ramón." },
      "corazon-beso": { text: { A: "Ramón se toca la mejilla. Escribe algo en su cuaderno. Sonríe toda la noche.", B: "Ramón se toca la mejilla y escribe algo en su cuaderno. Sonríe el resto del turno.", C: "Ramón se toca la mejilla y garabatea algo en su cuaderno. Sonríe el resto del turno, tan feliz como un quiosquero con final feliz." }, change: "beso", recap: "Le diste un beso a Ramón y entraste en su novela." },
      chicle: { text: { A: "Ramón te da un chicle y te dice adiós.", B: "Te llevas el café y un chicle de regalo. Ramón vuelve a su crucigrama.", C: "Te vas con café y chicle. Ramón vuelve al crucigrama, satisfecho con su buena obra." }, change: "sonrie", recap: "Tomaste un café en el quiosco de Ramón." },
      taburete: { text: { A: "Te sientas con Ramón. Hablan un rato.", B: "Te sientas en el taburete y charlas con Ramón un buen rato.", C: "Te sientas con Ramón y la conversación se alarga más que el café." }, change: "se-sienta", recap: "Charlaste con Ramón en el quiosco." },
      novela: { text: { A: "Ramón escribe algo en un cuaderno. Sonríe.", B: "Ramón saca un cuaderno lleno de notas y apunta algo sobre ti, sonriendo.", C: "Ramón abre un cuaderno gastado y te describe en dos líneas. No te deja leerlas." }, change: "sonrie", recap: "Ramón te contó que escribe una novela." },
      crucigrama: { text: { A: "La palabra es «andén». Ramón está muy contento.", B: "La palabra era «andén». Ramón la escribe con tu lápiz, feliz.", C: "La palabra era «andén», claro. Ramón la escribe con tu lápiz y te declara socio del crucigrama." }, change: "sonrie", recap: "Ayudaste a Ramón con su crucigrama." },
      trueque: { text: { A: "Ramón tiene tu libro. Tú tienes un café gratis.", B: "Ramón guarda tu libro con cariño. Tú te vas con un café gratis.", C: "Ramón coloca tu libro junto a la caja, como un trofeo. Tú te vas con el café." }, change: "sonrie", recap: "Cambiaste tu libro por un café en el quiosco." },
    },
    speak: {
      A1: "¿Qué bebes por la noche?",
      A2: "¿Qué compraste la última vez en un quiosco?",
      B1: "¿Qué trabajo nocturno te parece más duro, y por qué?",
      B2: "¿Cómo sería tu vida si trabajaras siempre de noche?",
      C1: "¿Qué tipo de conversaciones solo ocurren de madrugada?",
      C2: "¿Quiénes son las personas invisibles que hacen funcionar tu ciudad?",
    },

    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Qué haces cuando alguien te amenaza?", B: "¿Cómo reaccionarías si un trabajador nocturno sacara un cuchillo para defenderse?", C: "¿Qué pasa por la cabeza de alguien que trabaja solo de noche cuando ve un arma?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Tienes miedo cuando estás solo de noche?", B: "¿Qué sentirías si te apuntaran en tu lugar de trabajo?", C: "¿Qué precio pagan los trabajadores nocturnos por la seguridad de los demás?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué rompes cuando te asustas?", B: "¿Qué pagarías para arreglar una broma que salió mal?", C: "¿Cómo se repara el daño de una broma desproporcionada?" } },
      corazon: { start: "corazon-inicio", fx: "beso", speak: { A: "¿Qué novela te gustaría escribir?", B: "¿Qué historia de la noche te gustaría contar en un libro?", C: "¿Qué detalles de tu vida cotidiana merecerían figurar en una novela?" } },
    },
  },

  // ─────────────────────────────────────────────────────────────── RINCÓN 9
  {
    id: "estacion-sinbus",
    kind: "rincon",
    district: "estacion",
    title: "Sin transporte",
    verb: "AYUDAR",
    event: "transporte",
    goal: "Ayudar a planificar un trayecto, comparar opciones de transporte y hacer propuestas concretas.",
    cast: [
      {
        id: "noelia", name: "Noelia", role: "Enfermera sin transporte",
        age: "adult", body: "f", build: "athletic", height: 1.73,
        hair: "long", hairColor: "#6b3e1e", skin: "#b5764f",
        top: "scrubs", topColor: "#4f9aa8", bottom: "pants", bottomColor: "#4f9aa8",
        extras: ["bag", "phone"], pose: "arms", props: ["bus-stop"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "noelia", mood: "worried",
        line: {
          A: "Una mujer mira el panel. Todo está en rojo. «¿No hay metro ni autobuses? ¡Tengo que llegar a casa!»",
          B: "Una mujer con ropa de hospital mira el panel: todas las líneas están en rojo. «¿Ni metro ni autobuses? ¡Salgo de doce horas de turno!»",
          C: "Una mujer con uniforme sanitario contempla el panel en rojo como un diagnóstico grave. «Doce horas de guardia, y ahora esto. Qué manera de terminar el día.»",
        },
        options: [
          {
            id: "donde",
            say: { A: "¿Dónde vives? ¿Está lejos?", B: "¿Dónde vives? ¿Está muy lejos de aquí?", C: "¿Hasta dónde tienes que llegar? A ver si lo resolvemos." },
            reply: { A: "«En Barrio Alto. Una hora caminando.»", B: "«En Barrio Alto. Caminando, una hora. Y no me quedan piernas.»", C: "«Barrio Alto», dice la mujer. «Una hora a pie, que en mi estado son tres.»" },
            mood: "worried", next: "plan",
          },
          {
            id: "taxi",
            say: { A: "¿Compartimos un taxi? Yo voy al norte.", B: "¿Quieres que compartamos un taxi? Yo voy hacia el norte.", C: "Si vas hacia el norte, podemos dividir un taxi y el drama." },
            reply: { A: "«¡Yo también! Pero no hay taxis.»", B: "«¡Yo también voy al norte! Pero mira: no queda ni un taxi libre.»", C: "La mujer se ríe. «El drama lo divido encantada. El taxi, si aparece alguno.»" },
            mood: "neutral", next: "plan",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Tranquila. Esta noche no te quedas aquí sola.", B: "Tranquila. Esta noche no te vas a quedar aquí sola.", C: "Tranquila. Hoy cuidamos a quien nos cuida." },
            reply: { A: "La mujer sonríe. «Gracias. Me llamo Noelia. Soy enfermera. Hoy nacieron tres bebés.»", B: "La mujer sonríe, cansada. «Soy Noelia, enfermera. Hoy ayudé a nacer a tres bebés. Me merezco una cama.»", C: "La mujer se ríe. «Noelia, enfermera. Hoy tres bebés y cero descansos. Lo de cuidar a quien cuida me lo apunto.»" },
            mood: "love", next: "plan",
          },
          lapiz: {
            act: { A: "Sacas el lápiz y dibujas un mapa.", B: "Sacas el lápiz y le dibujas un mapa.", C: "Con el lápiz, improvisas un mapa en el reverso de un folleto." },
            say: { A: "Mira. Por esta calle hay una parada de taxis.", B: "Mira, por esta avenida hay una parada de taxis. Está a diez minutos.", C: "Mira: si atajamos por esta avenida, en diez minutos hay una parada con taxis." },
            reply: { A: "La mujer mira el mapa. «¡Diez minutos! Puedo caminar diez minutos.»", B: "La mujer mira el mapa. «¿Diez minutos? Eso sí puedo. ¿Me acompañas?»", C: "La mujer estudia tu mapa. «Diez minutos los camino hasta dormida. Literalmente.»" },
            mood: "smile", end: "camina",
          },
        },
      },
      plan: {
        who: "noelia", mood: "worried",
        line: {
          A: "Noelia mira el mapa en el celular. «Son seis kilómetros. ¿Qué hacemos?»",
          B: "Noelia mira el mapa en el celular. «Seis kilómetros. ¿Qué te parece mejor?»",
          C: "Noelia amplía el mapa en el celular. «Seis kilómetros. Opciones creativas, se aceptan.»",
        },
        options: [
          {
            id: "bici",
            say: { A: "Allí hay bicis públicas. ¿Vamos en bici?", B: "Ahí hay bicis públicas. ¿Y si vamos en bici? Son veinte minutos.", C: "Veo bicis públicas. ¿Te animas? Veinte minutos de pedaleo y estás en casa." },
            reply: { A: "Noelia se ríe. «¿En bici? ¡Bueno! ¡Vamos!»", B: "Noelia se ríe. «Hace años que no monto en bici. ¡Bueno, vamos!»", C: "Noelia se ríe. «Doce horas de pie y ahora a pedalear. Mi cuerpo me va a denunciar. Vamos.»" },
            mood: "smile", end: "bici",
          },
          {
            id: "llamar",
            say: { A: "¿Alguien puede venir a buscarte?", B: "¿Tienes a alguien que pueda venir a buscarte en coche?", C: "¿No hay nadie con coche que te deba un favor?" },
            reply: { A: "«Mi hermana tiene coche. ¡Voy a llamarla!»", B: "«Mi hermana tiene coche», dice Noelia. «Le cuidé a los niños el sábado. Me debe una.»", C: "Noelia sonríe con malicia. «Mi hermana. Le cuidé a los niños todo el sábado. Hora de cobrar.»" },
            mood: "smile", end: "hermana",
          },
          {
            id: "caminar",
            say: { A: "Camino contigo hasta la avenida. Allí hay taxis.", B: "Te acompaño hasta la avenida. Allí es más fácil encontrar taxi.", C: "Te acompaño hasta la avenida: más luz, más gente y más taxis." },
            reply: { A: "«¿De verdad? ¡Gracias! Vamos.»", B: "«¿Harías eso? Gracias, de verdad», dice Noelia, ya caminando.", C: "«Más luz, más gente, más taxis. Me convence el programa», dice Noelia." },
            mood: "smile", end: "camina",
          },
        ],
        items: {
          corazon: {
            act: HEART,
            say: { A: "Trabajaste mucho hoy. Mereces un taxi. Pagamos a medias.", B: "Después de doce horas, mereces un taxi. Si quieres, pagamos a medias.", C: "Doce horas cuidando a otros. Hoy te toca a ti: taxi y lo pagamos a medias." },
            reply: { A: "Noelia se ríe. «Gracias. ¡Te invito a mi sofá, socio honorario!»", B: "Noelia se ríe, emocionada. «Eres un sol. Si llego viva, te nombro socio honorario de mi sofá.»", C: "Noelia se lleva la mano al pecho. «Esto merece un título: socio honorario de mi sofá. Con derecho a manta.»" },
            mood: "love", end: "taxi",
          },
        },
      },

      // ── variantes
      "cuchillo-inicio": {
        who: "noelia", mood: "angry",
        line: {
          A: "Noelia ve el cuchillo y no grita. Da un paso atrás. «Baja eso. Soy enfermera y he visto muchas cosas, pero no quiero ver una más esta noche.»",
          B: "Noelia ve el cuchillo y, sin gritar, da un paso atrás con las manos a la vista. «Baja eso, por favor. Soy enfermera y esta noche ya vi suficiente sangre. No quiero más.»",
          C: "Noelia ve el cuchillo y reacciona con la serenidad de quien ha pasado doce horas en urgencias. «Baja eso. He suturado heridas de todos los tamaños; prefiero no sumar la tuya a mi turno.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas el cuchillo.", B: "Guardas el cuchillo con cuidado.", C: "Guardas el cuchillo con cuidado, con la funda bien cerrada." },
            say: { A: "Perdón. Lo guardo. No es para ti.", B: "Perdona, ya lo guardo. No es para ti, es por precaución.", C: "Perdona, ya está guardado. No es para ti; es mi manta de seguridad, muy mal elegida." },
            reply: { A: "Noelia respira. «Gracias. Tengo los nervios de punta hoy.»", B: "Noelia respira hondo. «Gracias. Hoy ya tengo los nervios de punta. Casi me da algo.»", C: "Noelia suelta el aire. «Gracias. Con el día que llevo, un cuchillo era lo único que me faltaba para el bingo.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "herida",
            say: { A: "¿Estás herida? Si quieres, te ayudo.", B: "¿Estás bien? Si te sientes mal, yo te ayudo a llegar a casa.", C: "¿Estás bien? Si necesitas algo, soy un asustador con buenas intenciones." },
            reply: { A: "Noelia casi se ríe. «Yo soy la que cura. Tú guarda eso.»", B: "Noelia casi se ríe, sorprendida. «Se supone que la enfermera soy yo. Pero gracias. Guarda eso.»", C: "Noelia casi sonríe. «Qué ironía: el que amenaza me ofrece su ayuda. Guarda eso y hablamos.»" },
            mood: "surprised", next: "cuchillo-calma",
          },
          {
            id: "acercarse",
            act: { A: "Das un paso hacia ella.", B: "Das un paso hacia ella, cuchillo en mano.", C: "Avanzas un paso, cuchillo en mano, para explicarte." },
            say: { A: "Espera. Escucha un momento.", B: "Espera, déjame explicarte.", C: "Un momento. Permíteme explicarte con calma." },
            reply: { A: "Noelia grita muy fuerte. Un taxista que pasa llama a la policía.", B: "Noelia grita muy fuerte. Un taxista que pasaba frena, ve la escena y llama a la policía.", C: "Noelia lanza un grito que se oye en toda la avenida. Un taxista que pasaba frena en seco y marca el número de la policía." },
            mood: "terror", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-calma": {
        who: "noelia", mood: "neutral",
        line: {
          A: "Noelia mira el panel en rojo. «Necesito llegar a casa. Estoy muerta. ¿Me acompañas hasta la avenida? Pero sin cuchillo.»",
          B: "Noelia mira el panel rojo y suspira. «Solo quiero llegar a casa. ¿Me acompañas hasta la avenida, donde hay más luz? Pero sin cuchillo, por favor.»",
          C: "Noelia mira el panel en rojo con cansancio infinito. «Solo quiero mi cama. ¿Me acompañas hasta la avenida, que hay luz y taxis? Eso sí: el cuchillo se queda guardado.»",
        },
        options: [
          {
            id: "camina",
            say: { A: "Sí. Te acompaño. Y busco un taxi.", B: "Claro que sí. Te acompaño y buscamos un taxi juntos.", C: "Por supuesto. Te acompaño, y el cuchillo y yo caminamos en silencio. Buscamos un taxi." },
            reply: { A: "Noelia sonríe un poco. «Gracias. Vamos.» Caminan juntos.", B: "Noelia sonríe cansada. «Gracias. Vamos.» Caminan juntos hacia la avenida.", C: "Noelia sonríe a pesar de todo. «Gracias. Menos mal que existen los asustadores con modales.» Caminan juntos hacia la avenida." },
            mood: "smile", end: "cuchillo-camina",
          },
          {
            id: "corte",
            act: { A: "Te cortas un poco al guardar el cuchillo.", B: "Te cortas un dedo al guardar el cuchillo.", C: "Te cortas un dedo al guardar el cuchillo, por los nervios." },
            say: { A: "¡Ay! Me corté. Un poco.", B: "¡Ay! Me corté el dedo, qué torpe.", C: "¡Ay! Me he cortado. La ironía no podía faltar." },
            reply: { A: "Noelia sonríe. «Déjame ver.» Te venda el dedo. Llama a una ambulancia por si acaso.", B: "Noelia suspira y saca un botiquín del bolso. «Déjame ver.» Te venda el dedo y llama a una ambulancia por precaución.", C: "Noelia suspira, saca un botiquín del bolso y te venda el dedo con precisión. «Por precaución, una ambulancia.» Y llama." },
            mood: "pain", end: "cuchillo-ambulancia",
          },
        ],
      },
      "pistola-inicio": {
        who: "noelia", mood: "scared",
        line: {
          A: "Noelia ve la pistola. Respira hondo. Levanta las manos despacio. «Tranquilo. No quiero problemas. Soy enfermera. Habla conmigo.»",
          B: "Noelia ve la pistola, respira hondo y levanta las manos despacio. «Tranquilo. No quiero problemas. Soy enfermera, estoy acostumbrada a hablar con gente nerviosa. Habla conmigo.»",
          C: "Noelia ve la pistola y, con una calma aprendida en urgencias, levanta las manos muy despacio. «Tranquilo. Respira conmigo. Soy enfermera y sé hablar con quien está asustado. Cuéntame qué pasa.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la pistola.", B: "Guardas la pistola enseguida.", C: "Guardas la pistola de inmediato." },
            say: { A: "Perdón. No es para ti. Estoy asustado.", B: "Perdona. No es para ti. Estoy asustado y la saqué sin pensar.", C: "Perdona. No es para ti. Estoy aterrado, y el miedo me hizo sacar algo que no debí." },
            reply: { A: "Noelia baja las manos. «Respira. Estás temblando.»", B: "Noelia baja las manos despacio. «Respira. Estás temblando, y yo sé reconocer eso.»", C: "Noelia baja las manos con cuidado. «Respira. Estás temblando, y eso lo reconozco mejor que cualquier síntoma.»" },
            mood: "worried", next: "pistola-calma",
          },
          {
            id: "ordenar",
            say: { A: "Dame tu dinero. Ahora.", B: "Dame tu cartera y tu celular. Ahora mismo.", C: "La cartera y el celular. Sin ruido ni preguntas." },
            reply: { A: "Noelia se las da. Un taxista pasa y llama a la policía. Llegan rápido.", B: "Noelia se las entrega sin discutir. Un taxista que pasaba lo ve todo y llama a la policía. Llegan en minutos.", C: "Noelia entrega ambas cosas sin discutir. Un taxista que pasaba lo ha visto todo y avisa a la policía, que llega en minutos." },
            mood: "terror", end: "pistola-policia",
          },
          {
            id: "huir",
            act: { A: "Sales corriendo.", B: "Sales corriendo con la pistola.", C: "Sales corriendo, pistola en mano, hacia la calle oscura." },
            say: { A: "¡No me sigas!", B: "¡No me sigas! ¡No llames a nadie!", C: "¡No me sigas ni llames a nadie!" },
            reply: { A: "Noelia llama a la policía. «Un hombre armado corrió hacia el norte.»", B: "Noelia llama a la policía con voz firme. «Un hombre armado corrió hacia el norte por la avenida.»", C: "Noelia llama a la policía con voz firme y precisa. «Hombre armado, huyó hacia el norte por la avenida. Sí, llevo doce horas de turno.»" },
            mood: "scared", end: "pistola-huye",
          },
        ],
      },
      "pistola-calma": {
        who: "noelia", mood: "worried",
        line: {
          A: "Noelia se sienta en un banco. «Ven. Siéntate. ¿Por qué tienes esa pistola? ¿Alguien te hizo daño?»",
          B: "Noelia se sienta en un banco y palmea el sitio de al lado. «Ven. Siéntate. ¿Por qué llevas esa pistola? ¿Alguien te hizo daño esta noche?»",
          C: "Noelia se sienta en el banco y palmea el asiento de al lado, como en urgencias antes de dar una noticia. «Siéntate. ¿Por qué llevas esa pistola? ¿Alguien te hizo daño?»",
        },
        options: [
          {
            id: "sincero",
            say: { A: "Tengo miedo. Me asaltaron una vez.", B: "Tengo miedo desde que me asaltaron el año pasado. Pensé que así estaría seguro.", C: "Tengo miedo desde que me asaltaron el año pasado. Pensé que esto me haría sentir fuerte; me siento ridículo." },
            reply: { A: "Noelia te toma la mano. «Gracias por decirlo. Vamos juntos a buscar un taxi.»", B: "Noelia te toma la mano. «Gracias por decírmelo. Eso no se cura con una pistola. Vamos juntos a buscar un taxi.»", C: "Noelia te toma la mano con ternura profesional. «Gracias por decírmelo. Eso se cura hablando, no armado. Vamos juntos a por un taxi.»" },
            mood: "love", end: "pistola-camina",
          },
          {
            id: "hermana",
            say: { A: "¿Puedes llamar a tu hermana? Me da miedo estar solo.", B: "¿Puedes llamar a tu hermana, por favor? Me da miedo quedarme solo ahora.", C: "¿Podrías llamar a tu hermana? Me aterra quedarme solo después de esto." },
            reply: { A: "Noelia llama a su hermana. «Ven. Somos dos.» Esperan juntos.", B: "Noelia llama a su hermana. «Ven en coche. Somos dos y uno necesita compañía.» Esperan juntos.", C: "Noelia llama a su hermana. «Ven en coche, y trae manta. Somos dos y uno tiene el alma helada.» Esperan juntos." },
            mood: "worried", end: "pistola-hermana",
          },
          {
            id: "amenaza",
            say: { A: "No digas nada a nadie.", B: "No le cuentes esto a nadie, ¿entendido?", C: "Esto no sale de aquí. ¿Entendido?" },
            reply: { A: "Noelia asiente… y llama a la policía a escondidas. Llegan rápido.", B: "Noelia asiente con calma y, mientras hablas, marca el número de la policía sin que lo notes. Llegan rápido.", C: "Noelia asiente con una calma sospechosa y marca la policía bajo el bolso, sin que lo notes. Llegan rápido." },
            mood: "angry", end: "pistola-policia",
          },
        ],
      },
      "granada-inicio": {
        who: "noelia", mood: "terror",
        line: {
          A: "Noelia ve la granada y grita. Corre hacia un autobús parado. «¡Una bomba! ¡Todos fuera!» El conductor sale corriendo.",
          B: "Noelia ve la granada, grita y echa a correr hacia el autobús detenido. «¡Una bomba! ¡Todo el mundo fuera!» El conductor salta del autobús y corre también.",
          C: "Noelia ve la granada y su grito de enfermera rasga la noche. Corre hacia el autobús detenido. «¡Una bomba! ¡Evacuen!» El conductor salta del autobús sin apagar el motor.",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Vuelve!", B: "¡Es de juguete! ¡Vuelve, Noelia!", C: "¡Es de plástico! ¡Vuelve, Noelia, que es una broma estúpida!" },
            reply: { A: "Noelia se para. «¿De juguete? ¡Qué susto!» Pero la gente ya corre.", B: "Noelia se detiene a diez metros. «¿De juguete? ¡Casi me da un infarto!» Pero la gente ya corre por la avenida.", C: "Noelia se detiene a diez metros. «¿De plástico? He tenido taquicardia de verdad.» Pero la avenida ya es una estampida." },
            mood: "scared", next: "granada-caos",
          },
          {
            id: "tirar",
            act: { A: "Tiras la granada lejos.", B: "Lanzas la granada a un solar vacío.", C: "Lanzas la granada a un solar vacío, lo más lejos posible." },
            say: { A: "¡Al suelo, todos!", B: "¡Al suelo, todos! ¡Cúbranse!", C: "¡Al suelo! ¡Cúbranse la cabeza!" },
            reply: { A: "No explota. Suena una alarma. Un helicóptero llega.", B: "La granada no explota. Suena una alarma en el barrio y un helicóptero ilumina la avenida.", C: "La granada rueda sin explotar. Suena una alarma en todo el barrio y un helicóptero ilumina la avenida con su foco." },
            mood: "terror", end: "granada-helicoptero",
          },
          {
            id: "correr",
            act: { A: "Corres con ella.", B: "Corres con Noelia hacia el autobús.", C: "Corres con Noelia, granada en la mano." },
            say: { A: "¡Fuera de aquí!", B: "¡Fuera de aquí! ¡Rápido!", C: "¡Fuera de aquí! ¡Sálvese quien pueda!" },
            reply: { A: "Todos corren. La avenida se queda vacía. Llega la policía.", B: "Todos corren. La avenida queda vacía de golpe y, minutos después, llega la policía.", C: "Todos corren a la vez. La avenida queda desierta en segundos y, poco después, llega la policía con las sirenas." },
            mood: "terror", end: "granada-evacuacion",
          },
        ],
      },
      "granada-caos": {
        who: "noelia", mood: "furious",
        line: {
          A: "Noelia vuelve. Está furiosa. «¡Tengo doce horas de turno y tú con una granada! ¿Estás loco?»",
          B: "Noelia vuelve sobre sus pasos, furiosa. «¡Salgo de doce horas de turno y tú me asustas con una granada! ¿Estás loco o qué?»",
          C: "Noelia vuelve sobre sus pasos, roja de furia. «Doce horas de guardia, tres bebés, cero descansos, ¿y tú con una granada? ¿Tienes idea de lo que has hecho?»",
        },
        options: [
          {
            id: "disculpa",
            say: { A: "Perdón. Fue una broma tonta. Te acompaño a casa.", B: "Perdón, fue una broma tonta y pesada. Te acompaño hasta tu casa.", C: "Perdón, fue una broma idiota y sin gracia. Déjame acompañarte a casa como penitencia." },
            reply: { A: "Noelia suspira. «Vale. Pero sin granada.» Caminan juntos.", B: "Noelia suspira, vencida por el cansancio. «Vale. Pero sin granada. Y sin bromas más.» Caminan juntos.", C: "Noelia suspira. «Penitencia aceptada. Sin granada y sin una sola broma en todo el camino.» Caminan juntos." },
            mood: "worried", end: "granada-camina",
          },
          {
            id: "taxi",
            say: { A: "Mira, llega un taxi. Es tuyo. Yo pago.", B: "Mira, ahí llega un taxi libre. Es tuyo. Yo lo pago, por el susto.", C: "Mira, un taxi libre, por fin. Es tuyo, y lo pago yo, en concepto de indemnización por daños nerviosos." },
            reply: { A: "Noelia sube al taxi. «Estás loco. Gracias.» Se va.", B: "Noelia sube al taxi, todavía furiosa. «Estás loco. Pero gracias por el taxi.» Se va.", C: "Noelia sube al taxi con dignidad ofendida. «Estás loco. Pero la indemnización es aceptable.» Se va." },
            mood: "neutral", end: "granada-taxi",
          },
        ],
      },
      "corazon-inicio": {
        who: "noelia", mood: "smitten",
        line: {
          A: "Noelia te ve y sonríe. Se le quita la cara de cansancio. «Hola… Qué suerte encontrar a alguien con buena energía. Llevo doce horas sin sonreír.»",
          B: "Noelia te ve y se le suaviza la cara. «Hola. Qué suerte encontrarme con alguien con buena energía. Llevo doce horas de turno sin sonreír de verdad.»",
          C: "Noelia te ve y el cansancio de doce horas parece aflojarse un poco. «Hola. Qué suerte tropezar con alguien que irradia buena energía. Llevo todo el turno sin una sonrisa sincera.»",
        },
        options: [
          {
            id: "consolar",
            say: { A: "Pareces cansada. ¿Quieres sentarte conmigo?", B: "Pareces agotada. ¿Quieres sentarte un rato conmigo?", C: "Pareces exhausta. ¿Te sientas un rato conmigo? Hoy mereces que cuiden de ti." },
            reply: { A: "Noelia se sienta. «Sí. Qué bien. Hoy nacieron tres bebés.»", B: "Noelia se sienta con un suspiro. «Sí, por favor. Hoy ayudé a nacer a tres bebés.»", C: "Noelia se sienta con un suspiro largo. «Sí, por favor. Hoy ayudé a tres bebés a nacer y no me ayudó nadie a mí.»" },
            mood: "love", next: "corazon-sofa",
          },
          {
            id: "coquetear",
            say: { A: "Con esa sonrisa, no necesitas autobús. Llegas volando.", B: "Con esa sonrisa, no necesitas autobús ni taxi. Llegas a casa volando.", C: "Con esa sonrisa, el transporte público debería avergonzarse de fallarte." },
            reply: { A: "Noelia se ríe y se sonroja. «¡Ay! ¡Qué amable!»", B: "Noelia se ríe y se pone colorada. «¡Ay, qué amable! Hacía mucho que nadie me hablaba así.»", C: "Noelia se ríe y se ruboriza. «Qué cosas dices. Llevaba meses sin oír un piropo, y justo hoy, sin autobús.»" },
            mood: "smitten", next: "corazon-sofa",
          },
          {
            id: "abrazo",
            act: { A: "La abrazas.", B: "La abrazas con cariño.", C: "La abrazas con mucho cuidado, como a una amiga." },
            say: { A: "Gracias por cuidar a las personas. Hoy te toca a ti.", B: "Gracias por cuidar a tanta gente. Hoy te toca a ti recibir.", C: "Gracias por cuidar a todos. Esta noche, la paciente eres tú." },
            reply: { A: "Noelia te abraza y llora un poco. «Gracias. Lo necesitaba.»", B: "Noelia te abraza fuerte y llora un poco. «Gracias. Lo necesitaba más de lo que crees.»", C: "Noelia te abraza fuerte y se le escapan unas lágrimas. «Gracias. Nadie me había dado el alta emocional en meses.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-sofa": {
        who: "noelia", mood: "love",
        line: {
          A: "Noelia te mira. «Eres muy buena persona. Mi casa está lejos, pero tengo un sofá cómodo. ¿Vienes a tomar un té?»",
          B: "Noelia te mira con ternura. «Eres muy buena persona. Mi casa está lejos, pero tengo un sofá cómodo y té. ¿Quieres venir? No tengo más planes que dormir.»",
          C: "Noelia te mira con ternura. «Eres una buena persona y eso, de noche, vale oro. Mi casa está lejos, pero mi sofá es excelente y mi té, mejor. ¿Vienes?»",
        },
        options: [
          {
            id: "si",
            act: { A: "Le das el brazo.", B: "Le ofreces el brazo y caminan juntos.", C: "Le ofreces el brazo y caminan juntos hacia la avenida." },
            say: { A: "Sí, claro. Vamos juntos.", B: "Sí, encantado. Busquemos un taxi juntos.", C: "Encantado. Busquemos un taxi juntos y el té lo pago yo." },
            reply: { A: "Noelia sonríe feliz. Un taxi llega. Suben juntos.", B: "Noelia sonríe, feliz. Un taxi aparece enseguida. Suben juntos y ella se duerme en tu hombro.", C: "Noelia sonríe, feliz. Un taxi aparece de la nada. Suben juntos y ella se duerme en tu hombro antes del primer semáforo." },
            mood: "love", end: "corazon-taxi",
          },
          {
            id: "beso",
            act: { A: "Le das un beso en la mejilla.", B: "Le das un beso en la mejilla.", C: "Le das un beso suave en la mejilla." },
            say: { A: "Hoy no puedo. Pero este beso es para ti.", B: "Hoy no puedo ir. Pero este beso es tuyo, para que duermas bien.", C: "Hoy me temo que no puedo. Pero este beso queda como aval de que volveré." },
            reply: { A: "Noelia sonríe y se toca la mejilla. «Gracias. Un taxi llega.»", B: "Noelia sonríe y se toca la mejilla. «Gracias. Eso vale por tres horas de sueño.» Y llega un taxi.", C: "Noelia sonríe y se toca la mejilla. «Aval aceptado. Vale por tres turnos.» Y llega un taxi." },
            mood: "smitten", end: "corazon-beso",
          },
        ],
      },
    },
    ends: {

      "cuchillo-policia": { text: { A: "La policía llega. Te quitan el cuchillo. Noelia explica todo con calma.", B: "La policía llega y te quita el cuchillo. Noelia explica lo ocurrido con la calma de quien lo ha visto todo.", C: "La policía llega y te desarma. Noelia explica lo ocurrido con la calma de una profesional del estrés." }, change: "policia", recap: "El cuchillo asustó a Noelia y terminó con la policía." },
      "cuchillo-camina": { text: { A: "Caminan hasta la avenida. Hay un taxi. Noelia sube y te da las gracias.", B: "Caminan hasta la avenida sin hablar del cuchillo. Hay un taxi y Noelia sube dándote las gracias.", C: "Caminan hasta la avenida con el cuchillo olvidado. Hay un taxi y Noelia sube dándote las gracias, aún un poco desconfiada." }, change: "se-va", recap: "Acompañaste a Noelia hasta un taxi después del susto del cuchillo." },
      "cuchillo-ambulancia": { text: { A: "Llega la ambulancia. Te curan el dedo. Noelia se ríe, cansada.", B: "Llega la ambulancia. Te curan el dedo y Noelia, cansada, se ríe por primera vez en doce horas.", C: "Llega la ambulancia y te curan el dedo. Noelia, agotada, se ríe por primera vez en doce horas: el paciente eres tú." }, change: "ambulancia", recap: "Te cortaste con tu propio cuchillo y Noelia te curó." },
      "pistola-policia": { text: { A: "La policía llega rápido. Te quitan la pistola. Noelia habla con ellos.", B: "La policía llega rápido y te quita la pistola. Noelia declara con voz firme, aunque le tiemblan las manos.", C: "La policía llega rápido y te desarma. Noelia declara con voz firme, aunque las manos le tiemblan más que a ti." }, change: "policia", recap: "La pistola terminó con la policía y Noelia de testigo." },
      "pistola-huye": { text: { A: "Corres por la avenida. Oyes sirenas. Noelia no se mueve del panel.", B: "Corres por la avenida oscura. Oyes sirenas a lo lejos. Noelia no se mueve del panel de transporte.", C: "Corres por la avenida oscura con las sirenas a tus espaldas. Noelia no se mueve del panel, con el celular en la oreja." }, change: "huye", recap: "Huiste con la pistola y Noelia llamó a la policía." },
      "pistola-camina": { text: { A: "Noelia te acompaña a buscar un taxi. Guardas la pistola para siempre.", B: "Noelia camina contigo hasta la avenida y busca un taxi para los dos. Tú guardas la pistola para siempre.", C: "Noelia camina contigo hasta la avenida y busca un taxi para los dos. Prometes, en voz baja, que la pistola no volverá a salir." }, change: "se-va", recap: "Noelia te calmó después del susto de la pistola." },
      "pistola-hermana": { text: { A: "La hermana llega en coche. Noelia te da un abrazo. Todo termina bien.", B: "La hermana de Noelia llega en coche con un abrigo. Noelia te abraza antes de subir. Todo termina mejor de lo esperado.", C: "La hermana de Noelia llega en coche, con abrigo y sin preguntas. Noelia te abraza antes de subir. Todo termina mucho mejor de lo que merecías." }, change: "llama", recap: "Noelia llamó a su hermana y no te dejó solo después de la pistola." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina la avenida. La policía te rodea. Noelia grita: «¡Es una broma!»", B: "Un helicóptero ilumina la avenida y la policía te rodea. Noelia, a lo lejos, grita: «¡Creo que es una broma!»", C: "Un helicóptero baña la avenida de luz y la policía te rodea. Noelia, a lo lejos, grita: «¡Creo que es una broma, pero llevo doce horas sin dormir!»" }, change: "helicoptero", recap: "La granada trajo un helicóptero a la avenida." },
      "granada-evacuacion": { text: { A: "La avenida está vacía. Llega la policía. Noelia mira el panel en rojo, cansada.", B: "La avenida queda vacía. Llega la policía y Noelia, apoyada en el panel en rojo, mira el desastre sin fuerzas.", C: "La avenida queda desierta. Llega la policía y Noelia, apoyada en el panel en rojo, contempla el desastre con la mirada de quien ha visto de todo." }, change: "huye", recap: "La granada vació la avenida y no quedó ni un autobús." },
      "granada-camina": { text: { A: "Caminan juntos hasta su casa. Noelia no habla. Al final te da las gracias.", B: "Caminan juntos una hora hasta su casa. Noelia habla poco. Al final te da las gracias, muy bajito.", C: "Caminan juntos una hora hasta su casa. Noelia habla poco y respira mucho. Al llegar te da las gracias, con la voz de quien perdona a medias." }, change: "se-va", recap: "Después de la granada, acompañaste a Noelia a su casa." },
      "granada-taxi": { text: { A: "Noelia se va en taxi. Te mira por la ventana y niega con la cabeza.", B: "Noelia se va en taxi. Por la ventana te mira y niega con la cabeza, pero sonríe un poco.", C: "Noelia se va en taxi. Por la ventana te mira, niega con la cabeza y esboza una sonrisa que perdona la mitad." }, change: "se-va", recap: "Pagaste el taxi de Noelia para compensar la granada." },
      "corazon-abrazo": { text: { A: "Noelia te abraza otra vez. Un taxi llega. Se va contenta.", B: "Noelia te abraza otra vez y llega un taxi libre. Sube con una sonrisa que no se le borra.", C: "Noelia te abraza una vez más y llega un taxi libre, como si la ciudad también se emocionara. Sube sonriendo." }, change: "abraza", recap: "Abrazaste a Noelia después de su turno." },
      "corazon-taxi": { text: { A: "Suben al taxi juntos. Noelia se duerme. Tú sonríes, mirando la ciudad.", B: "Suben al taxi juntos. Noelia se duerme en tu hombro y tú sonríes mirando la ciudad dormida.", C: "Suben al taxi juntos. Noelia se duerme en tu hombro y tú, con una sonrisa, miras pasar la ciudad dormida." }, change: "se-va", recap: "Compartiste un taxi con Noelia y se durmió en tu hombro." },
      "corazon-beso": { text: { A: "Noelia se toca la mejilla. Sube a un taxi sonriendo. Te manda un beso.", B: "Noelia se toca la mejilla, sube a un taxi y, sonriendo, te manda un beso desde la ventana.", C: "Noelia se toca la mejilla, sube a un taxi y te manda un beso desde la ventanilla, sellando la noche con una sonrisa agotada y feliz." }, change: "beso", recap: "Le diste un beso en la mejilla a Noelia antes de su taxi." },
      bici: { text: { A: "Tú y Noelia se van en bici por la calle vacía.", B: "Noelia y tú se van en bici por las calles vacías. Ella se ríe todo el camino.", C: "Noelia y tú pedalean por la ciudad dormida. Ella jura que no se cansa; sus piernas opinan otra cosa." }, change: "se-va", recap: "Fuiste en bici con Noelia hasta su barrio." },
      hermana: { text: { A: "Noelia llama a su hermana. Viene en diez minutos.", B: "Noelia llama a su hermana, que llega en diez minutos con el pijama debajo del abrigo.", C: "Noelia cobra su favor. La hermana llega en diez minutos, con pijama y cara de víctima." }, change: "llama", recap: "Ayudaste a Noelia a pedir ayuda a su hermana." },
      camina: { text: { A: "Caminas con Noelia hasta la avenida. Allí hay un taxi.", B: "Acompañas a Noelia hasta la avenida. Encuentran un taxi en cinco minutos.", C: "Acompañas a Noelia hasta la avenida. Al quinto minuto aparece un taxi, como premio a la paciencia." }, change: "se-va", recap: "Acompañaste a Noelia a buscar un taxi." },
      taxi: { text: { A: "Por fin llega un taxi. Noelia y tú suben juntos.", B: "Al rato aparece un taxi libre. Noelia y tú lo comparten, riéndose del día.", C: "Aparece un taxi libre. Noelia y tú lo comparten; ella se duerme antes del segundo semáforo." }, change: "se-va", recap: "Compartiste un taxi con Noelia." },
    },
    speak: {
      A1: "¿Cómo vuelves a casa por la noche?",
      A2: "¿Qué hiciste la última vez que no había transporte?",
      B1: "¿Cómo organizas tu viaje cuando hay una huelga o un problema?",
      B2: "¿Qué opción prefieres de noche: caminar, bici o taxi, y por qué?",
      C1: "¿Cómo cambia tu sensación de seguridad según el medio de transporte?",
      C2: "¿Qué revela una ciudad cuando su transporte público deja de funcionar?",
    },

    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces cuando estás muy cansado y alguien te asusta?", B: "¿Cómo reaccionas ante un susto después de un día larguísimo?", C: "¿Qué profesiones enseñan a mantener la calma ante una amenaza?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Cómo calmas a una persona asustada?", B: "¿Qué le dirías a alguien con una pistola que tiene miedo?", C: "¿Cómo se negocia con alguien que actúa por miedo y no por maldad?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Qué haces si tu transporte no funciona y hay pánico?", B: "¿Cuál fue el peor momento de pánico que viviste en la calle?", C: "¿Qué impacto tiene una broma peligrosa en alguien que ya está agotado?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿Quién cuida de ti cuando estás cansado?", B: "¿Qué gesto de ternura te devolvería las fuerzas después de un día duro?", C: "¿Cómo cuidamos a quienes cuidan de los demás?" } },
    },
  },
];
export default encounters;
