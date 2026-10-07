// Noche abierta · calle · La Estación: un reloj parado, ecos en el túnel, anuncios que nadie entiende y gente con prisa.
const HEART = { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." };

export default [
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
    },
    ends: {
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
    },
    ends: {
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
    },
    ends: {
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
    },
    ends: {
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
    },
    ends: {
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
    },
    ends: {
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
    },
    ends: {
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
    },
    ends: {
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
    },
    ends: {
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
  },
];
