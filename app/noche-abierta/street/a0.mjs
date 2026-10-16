// Noche abierta · calle · A0. Short bilingual versions of the scenes nearest
// the centre: two moments, two or three answers of a few words, and the same
// endings as the full scene (their change in the world, recap and flag stay).
// At A0 only these scenes open; the carried object stays in the hands and
// does not change them. Every line is { es, en }; ../street.mjs reads them.
const t = (es, en) => ({ es, en });

export const A0_SCENES = {
  "centro-desmayo": {
    start: "inicio",
    ends: {
      farmacia: t("Vuelves con el farmacéutico. Don Teodoro está despierto. Ofelia te abraza.", "You come back with the pharmacist. Don Teodoro is awake. Ofelia hugs you."),
      ambulancia: t("Llega la ambulancia. Don Teodoro sube. Ofelia dice adiós con la mano.", "The ambulance arrives. Don Teodoro gets in. Ofelia waves goodbye."),
      despierta: t("Don Teodoro está sentado y bebe agua. Ofelia lo abraza.", "Don Teodoro is sitting up and drinks water. Ofelia hugs him."),
    },
    words: [t("el suelo", "the ground"), t("la ambulancia", "the ambulance"), t("ayuda", "help"), t("respira", "he breathes")],
    nodes: {
      inicio: {
        who: "ofelia", mood: "terror",
        line: t("Un hombre mayor está en el suelo. Su hija grita: «¡Ayuda! ¡Mi papá!»", "An old man is on the ground. His daughter shouts: “Help! My dad!”"),
        options: [
          { id: "llamar", say: t("Llamo a una ambulancia.", "I call an ambulance."), reply: t("Ofelia dice: «¡Sí, gracias! ¡Rápido!»", "Ofelia says: “Yes, thank you! Quick!”"), mood: "worried", next: "espera" },
          { id: "respira", say: t("¿Respira?", "Is he breathing?"), reply: t("Ofelia mira. «Sí. Sí respira.»", "Ofelia looks. “Yes. He is breathing.”"), mood: "worried", next: "espera" },
          { id: "farmacia", say: t("Voy a la farmacia.", "I’m going to the pharmacy."), reply: t("Ofelia dice: «¡Sí! Está ahí, en la esquina.»", "Ofelia says: “Yes! It’s there, on the corner.”"), mood: "worried", end: "farmacia" },
        ],
      },
      espera: {
        who: "teodoro", mood: "pain",
        line: t("El hombre abre los ojos. «¿Qué… qué pasa?»", "The man opens his eyes. “What… what’s happening?”"),
        options: [
          { id: "tranquilo", say: t("Tranquilo. Viene la ambulancia.", "Easy. The ambulance is coming."), reply: t("Don Teodoro dice: «Gracias, hijo.»", "Don Teodoro says: “Thank you, son.”"), mood: "neutral", end: "ambulancia" },
          { id: "agua", say: t("¿Quiere agua?", "Do you want water?"), reply: t("Don Teodoro se sienta. «Sí, por favor.»", "Don Teodoro sits up. “Yes, please.”"), mood: "smile", end: "despierta" },
        ],
      },
    },
  },
  "centro-diarios": {
    start: "inicio",
    ends: {
      regalo: t("Tienes un diario. Don Amadeo sonríe.", "You have a newspaper. Don Amadeo smiles."),
      persiana: t("Cierran el quiosco juntos. «Hasta mañana.»", "You close the newsstand together. “See you tomorrow.”"),
    },
    words: [t("el diario", "the newspaper"), t("las noticias", "the news"), t("hoy", "today"), t("cerrar", "to close")],
    nodes: {
      inicio: {
        who: "amadeo", mood: "smile",
        line: t("Un señor cierra su quiosco. «¡Buenas noches! ¿Quieres un diario?»", "A man is closing his newsstand. “Good evening! Do you want a newspaper?”"),
        options: [
          { id: "si", say: t("Sí, gracias.", "Yes, thank you."), reply: t("Don Amadeo te da un diario. «Es gratis. Es el último.»", "Don Amadeo gives you a newspaper. “It’s free. It’s the last one.”"), mood: "smile", end: "regalo" },
          { id: "ayudo", say: t("¿Le ayudo?", "Can I help you?"), reply: t("Don Amadeo sonríe. «¡Sí! Esta caja, por favor.»", "Don Amadeo smiles. “Yes! This box, please.”"), mood: "smile", end: "persiana" },
        ],
      },
    },
  },
  "centro-cine": {
    start: "inicio",
    ends: {
      estreno: t("Tienes una entrada para el sábado. Abril está contenta.", "You have a ticket for Saturday. Abril is happy."),
      idea: t("Abril escribe tu idea y se va contenta.", "Abril writes down your idea and leaves happy."),
    },
    words: [t("la película", "the film"), t("el cartel", "the poster"), t("el pulpo", "the octopus"), t("raro", "strange")],
    nodes: {
      inicio: {
        who: "abril", mood: "surprised",
        line: t("Una chica mira un cartel de cine. Hay un pulpo en un autobús. «Hola. ¿Te gusta?»", "A girl looks at a film poster. There is an octopus on a bus. “Hi. Do you like it?”"),
        options: [
          { id: "si", say: t("Sí. Es muy raro.", "Yes. It’s very strange."), reply: t("Abril se ríe. «¡Sí! Es mi película.»", "Abril laughs. “Yes! It’s my film.”"), mood: "smile", next: "invita" },
          { id: "no", say: t("No. Es feo.", "No. It’s ugly."), reply: t("Abril dice: «¡Ay! Es mi película…»", "Abril says: “Oh! It’s my film…”"), mood: "sad", next: "invita" },
        ],
      },
      invita: {
        who: "abril", mood: "smile",
        line: t("«El sábado hay cine. ¿Vienes?»", "“On Saturday there is a screening. Are you coming?”"),
        options: [
          { id: "voy", say: t("Sí, voy.", "Yes, I’m coming."), reply: t("Abril te da una entrada. «¡Genial!»", "Abril gives you a ticket. “Great!”"), mood: "smile", end: "estreno" },
          { id: "idea", say: t("No puedo. Pero el pulpo es el chofer.", "I can’t. But the octopus is the driver."), reply: t("Abril escribe en su cuaderno. «¡Buena idea!»", "Abril writes in her notebook. “Good idea!”"), mood: "smile", end: "idea" },
        ],
      },
    },
  },
  "centro-choque": {
    start: "inicio",
    ends: {
      ambulancia: t("Llega la ambulancia. Rolo se va. Vanesa se queda con su auto.", "The ambulance arrives. Rolo leaves. Vanesa stays with her car."),
      policia: t("Llega la policía. Vanesa llora. Rolo explica todo.", "The police arrive. Vanesa cries. Rolo explains everything."),
      datos: t("Rolo tiene el papel con los datos. Vanesa se va despacio.", "Rolo has the paper with the details. Vanesa drives away slowly."),
      empujon: t("Vanesa te empuja otra vez. Un vecino la para. Es un caos.", "Vanesa pushes you again. A neighbour stops her. It’s chaos."),
    },
    words: [t("el auto", "the car"), t("la bicicleta", "the bicycle"), t("la sangre", "the blood"), t("la culpa", "the fault")],
    nodes: {
      inicio: {
        who: "vanesa", mood: "angry",
        line: t("Un auto y una bicicleta. El chico tiene sangre en la cabeza. La mujer grita: «¡No es mi culpa!»", "A car and a bicycle. The boy has blood on his head. The woman shouts: “It’s not my fault!”"),
        options: [
          { id: "ambulancia", say: t("Llamo a una ambulancia.", "I call an ambulance."), reply: t("Rolo dice: «Gracias… me duele la cabeza.»", "Rolo says: “Thanks… my head hurts.”"), mood: "worried", end: "ambulancia" },
          { id: "calma", say: t("Calma. Primero el chico.", "Calm down. The boy first."), reply: t("Vanesa respira. «Sí… sí. Perdón.»", "Vanesa breathes. “Yes… yes. Sorry.”"), mood: "neutral", next: "datos" },
          { id: "policia", say: t("Llamo a la policía.", "I call the police."), reply: t("Vanesa grita: «¡No! ¡No es mi culpa!»", "Vanesa shouts: “No! It’s not my fault!”"), mood: "furious", end: "policia" },
        ],
      },
      datos: {
        who: "rolo", mood: "pain",
        line: t("Rolo dice: «Necesito su nombre y su teléfono.»", "Rolo says: “I need her name and her phone number.”"),
        options: [
          { id: "pedir", say: t("Señora, su nombre y su teléfono, por favor.", "Madam, your name and phone number, please."), reply: t("Vanesa escribe en un papel. «Toma.»", "Vanesa writes on a piece of paper. “Here.”"), mood: "neutral", end: "datos" },
          { id: "gritar", say: t("¡Es su culpa!", "It’s your fault!"), reply: t("Vanesa te empuja. «¡Cállate!»", "Vanesa pushes you. “Shut up!”"), mood: "furious", end: "empujon" },
        ],
      },
    },
  },
  "centro-patineta": {
    start: "inicio",
    ends: {
      solo: t("Te vas. Kevin practica solo.", "You leave. Kevin practises alone."),
      baila: t("Kevin baila. Mira el video muchas veces.", "Kevin dances. He watches the video many times."),
      caida: t("Kevin está en el suelo, pero se ríe. «¡Mañana!»", "Kevin is on the ground, but he laughs. “Tomorrow!”"),
    },
    words: [t("la patineta", "the skateboard"), t("el teléfono", "the phone"), t("grabar", "to record"), t("el truco", "the trick")],
    nodes: {
      inicio: {
        who: "kevin", mood: "smile",
        line: t("Un chico con patineta te dice: «¡Hola! ¿Me grabas con mi teléfono?»", "A boy with a skateboard says: “Hi! Can you film me with my phone?”"),
        options: [
          { id: "si", say: t("Sí, claro.", "Yes, of course."), reply: t("Kevin te da el teléfono. «¡Gracias! Mira.»", "Kevin gives you the phone. “Thanks! Watch.”"), mood: "smile", next: "truco" },
          { id: "no", say: t("No, lo siento. Tengo prisa.", "No, sorry. I’m in a hurry."), reply: t("Kevin dice: «Bueno. Adiós.»", "Kevin says: “Okay. Bye.”"), mood: "sad", end: "solo" },
        ],
      },
      truco: {
        who: "kevin", mood: "smile",
        line: t("Kevin salta con la patineta. ¡Uy!", "Kevin jumps with the skateboard. Oops!"),
        options: [
          { id: "bien", say: t("¡Muy bien!", "Very good!"), reply: t("Kevin baila. «¡Sí! ¡Gracias!»", "Kevin dances. “Yes! Thanks!”"), mood: "smile", end: "baila" },
          { id: "otra", say: t("¿Otra vez?", "Again?"), reply: t("Kevin se cae y se ríe. «¡Mañana!»", "Kevin falls and laughs. “Tomorrow!”"), mood: "laugh", end: "caida" },
        ],
      },
    },
  },
  "alto-galeria": {
    start: "inicio",
    ends: {
      ofendido: t("Ulises cierra la puerta. Está un poco enojado.", "Ulises closes the door. He is a bit angry."),
      luz: t("Ulises enciende una luz. El punto amarillo brilla.", "Ulises turns on a light. The yellow dot shines."),
    },
    words: [t("el cuadro", "the painting"), t("negro", "black"), t("amarillo", "yellow"), t("la luz", "the light")],
    nodes: {
      inicio: {
        who: "ulises", mood: "neutral",
        line: t("Un cuadro negro con un punto amarillo. Un hombre pregunta: «¿Qué ves?»", "A black painting with a yellow dot. A man asks: “What do you see?”"),
        options: [
          { id: "punto", say: t("Un punto amarillo.", "A yellow dot."), reply: t("Ulises dice: «Mmm. Solo eso.»", "Ulises says: “Hmm. Just that.”"), mood: "angry", end: "ofendido" },
          { id: "luz", say: t("Una luz en la noche.", "A light in the night."), reply: t("Ulises sonríe. «¡Sí! Es una ventana.»", "Ulises smiles. “Yes! It’s a window.”"), mood: "love", end: "luz" },
        ],
      },
    },
  },
  "sur-vecino": {
    start: "inicio",
    ends: {
      nada: t("Te vas. La música sigue. Elena está enojada.", "You leave. The music goes on. Elena is angry."),
      baja: t("La música baja. Elena vuelve a casa.", "The music goes down. Elena goes back home."),
      baila: t("Elena entra a la fiesta y baila. Todos cantan «Cumpleaños feliz».", "Elena joins the party and dances. Everyone sings “Happy birthday”."),
      policia: t("Llega la policía. La fiesta termina. Gonzalo está triste.", "The police arrive. The party ends. Gonzalo is sad."),
    },
    words: [t("la música", "the music"), t("fuerte", "loud"), t("la vecina", "the neighbour"), t("dormir", "to sleep")],
    nodes: {
      inicio: {
        who: "elena", mood: "angry",
        line: t("Hay música muy fuerte. Una vecina en pijama grita: «¡Es muy tarde! ¡Quiero dormir!»", "There is very loud music. A neighbour in pyjamas shouts: “It’s very late! I want to sleep!”"),
        options: [
          { id: "hablar", say: t("Vamos a hablar con ellos.", "Let’s talk to them."), reply: t("Elena dice: «Sí. Gracias.»", "Elena says: “Yes. Thank you.”"), mood: "neutral", next: "gonzalo" },
          { id: "nada", say: t("Es sábado. Es normal.", "It’s Saturday. It’s normal."), reply: t("Elena dice: «¡No es normal!» y se va.", "Elena says: “It’s not normal!” and leaves."), mood: "angry", end: "nada" },
        ],
      },
      gonzalo: {
        who: "gonzalo", mood: "smile",
        line: t("Un chico abre la puerta. «¡Hola! ¡Es mi cumpleaños! ¿Un problema?»", "A guy opens the door. “Hi! It’s my birthday! Is there a problem?”"),
        options: [
          { id: "bajar", say: t("La música, más baja, por favor.", "The music, lower, please."), reply: t("Gonzalo dice: «Ah, perdón. Sí, sí.»", "Gonzalo says: “Oh, sorry. Yes, yes.”"), mood: "smile", end: "baja" },
          { id: "baila", say: t("¡Feliz cumpleaños! ¿Entramos?", "Happy birthday! Shall we come in?"), reply: t("Gonzalo se ríe. «¡Pasen!» Elena entra también.", "Gonzalo laughs. “Come in!” Elena comes in too."), mood: "love", end: "baila" },
          { id: "policia", say: t("Llamo a la policía.", "I call the police."), reply: t("Gonzalo dice: «¿Qué? ¡No!»", "Gonzalo says: “What? No!”"), mood: "sad", end: "policia" },
        ],
      },
    },
  },
  "alto-portero": {
    start: "inicio",
    ends: {
      vestibulo: t("Ves una lámpara enorme y alfombras rojas.", "You see a huge lamp and red carpets."),
      chisme: t("Sebastián sonríe. Abre la puerta a un cliente.", "Sebastián smiles. He opens the door for a guest."),
      adios: t("Sebastián mira la calle. Serio otra vez.", "Sebastián looks at the street. Serious again."),
    },
    words: [t("el hotel", "the hotel"), t("el portero", "the doorman"), t("elegante", "elegant"), t("entrar", "to go in")],
    nodes: {
      inicio: {
        who: "sebastian", mood: "neutral",
        line: t("Un portero con uniforme rojo. «Buenas noches. ¿Es cliente del hotel?»", "A doorman in a red uniform. “Good evening. Are you a hotel guest?”"),
        options: [
          { id: "no", say: t("No. ¿Puedo ver el hotel?", "No. Can I see the hotel?"), reply: t("Sebastián abre la puerta. «Un momento. Solo mirar.»", "Sebastián opens the door. “One moment. Just a look.”"), mood: "neutral", end: "vestibulo" },
          { id: "elegante", say: t("No. Su uniforme es muy elegante.", "No. Your uniform is very elegant."), reply: t("Sebastián sonríe. «Gracias. Hay gente famosa dentro…»", "Sebastián smiles. “Thanks. There are famous people inside…”"), mood: "smile", end: "chisme" },
          { id: "adios", say: t("No. Buenas noches.", "No. Good night."), reply: t("Sebastián dice: «Buenas noches.»", "Sebastián says: “Good night.”"), mood: "neutral", end: "adios" },
        ],
      },
    },
  },
  "sur-estacionamiento": {
    start: "inicio",
    ends: {
      nieto: t("Don Emilio llama a su nieto. Esperas con él.", "Don Emilio calls his grandson. You wait with him."),
      solo: t("Te vas. Don Emilio sigue buscando.", "You leave. Don Emilio keeps searching."),
      encontrado: t("Don Emilio abre su auto. Se va despacio.", "Don Emilio opens his car. He drives away slowly."),
      taxi: t("Don Emilio sube al taxi. «¡Adiós!»", "Don Emilio gets into the taxi. “Bye!”"),
    },
    words: [t("el auto", "the car"), t("el color", "the colour"), t("buscar", "to look for"), t("el nieto", "the grandson")],
    nodes: {
      inicio: {
        who: "emilio", mood: "worried",
        line: t("Un señor mayor busca entre los autos. «Perdón… No encuentro mi auto.»", "An old man searches among the cars. “Sorry… I can’t find my car.”"),
        options: [
          { id: "color", say: t("¿De qué color es?", "What colour is it?"), reply: t("Don Emilio dice: «Rojo. Es pequeño.»", "Don Emilio says: “Red. It’s small.”"), mood: "smile", next: "buscar" },
          { id: "nieto", say: t("¿Llamamos a su familia?", "Shall we call your family?"), reply: t("Don Emilio dice: «Sí… mi nieto.»", "Don Emilio says: “Yes… my grandson.”"), mood: "worried", end: "nieto" },
          { id: "solo", say: t("Lo siento. Adiós.", "I’m sorry. Bye."), reply: t("Don Emilio sigue buscando.", "Don Emilio keeps searching."), mood: "sad", end: "solo" },
        ],
      },
      buscar: {
        who: "emilio", mood: "worried",
        line: t("Hay un auto rojo pequeño ahí. «¿Es ese?»", "There is a small red car over there. “Is it that one?”"),
        options: [
          { id: "si", say: t("¡Sí! Está ahí.", "Yes! It’s there."), reply: t("Don Emilio abre el auto. «¡Gracias!» Te da un caramelo.", "Don Emilio opens the car. “Thanks!” He gives you a sweet."), mood: "smile", end: "encontrado" },
          { id: "taxi", say: t("No. Mejor un taxi.", "No. Better a taxi."), reply: t("Llega un taxi. Don Emilio dice adiós.", "A taxi arrives. Don Emilio says goodbye."), mood: "neutral", end: "taxi" },
        ],
      },
    },
  },
  "alto-vinoteca": {
    start: "inicio",
    ends: {
      mosto: t("Bebes el mosto. Está muy rico.", "You drink the grape juice. It’s very tasty."),
      consejo: t("Tienes una tarjeta. Tiene el nombre de un vino.", "You have a card. It has the name of a wine on it."),
      paseo: t("Renata vuelve a la vinoteca. Tú sigues paseando.", "Renata goes back into the wine shop. You keep walking."),
    },
    words: [t("el vino", "the wine"), t("sin alcohol", "alcohol-free"), t("probar", "to try"), t("rico", "tasty")],
    nodes: {
      inicio: {
        who: "renata", mood: "smile",
        line: t("Una mujer en la puerta de una vinoteca. «¡Hola! ¿Quieres probar? Hay vino y hay mosto, sin alcohol.»", "A woman at the door of a wine shop. “Hi! Do you want to try? There is wine and there is grape juice, alcohol-free.”"),
        options: [
          { id: "mosto", say: t("Mosto, por favor.", "Grape juice, please."), reply: t("Renata te da un vaso. «¡Está rico!»", "Renata gives you a glass. “It’s tasty!”"), mood: "smile", end: "mosto" },
          { id: "vino", say: t("¿Qué vino es bueno?", "Which wine is good?"), reply: t("Renata escribe un nombre en una tarjeta. «Este.»", "Renata writes a name on a card. “This one.”"), mood: "smile", end: "consejo" },
          { id: "no", say: t("No, gracias.", "No, thank you."), reply: t("Renata dice: «¡Buenas noches!»", "Renata says: “Good night!”"), mood: "smile", end: "paseo" },
        ],
      },
    },
  },
  "alto-pareja": {
    start: "inicio",
    ends: {
      policia: t("Llega la policía. Carolina habla con ellos. Mateo se sienta.", "The police arrive. Carolina talks to them. Mateo sits down."),
      ambulancia: t("La ambulancia se lleva a Mateo. Carolina va con él.", "The ambulance takes Mateo away. Carolina goes with him."),
      calma: t("Nadie grita. Es suficiente por hoy.", "Nobody shouts. That’s enough for today."),
    },
    words: [t("el celular", "the phone"), t("gritar", "to shout"), t("el brazo", "the arm"), t("calma", "calm")],
    nodes: {
      inicio: {
        who: "carolina", mood: "furious",
        line: t("Una mujer grita: «¡Mi celular!» Un hombre tiene sangre en el brazo. Ella te dice: «¡Tú! ¡Ayuda!»", "A woman shouts: “My phone!” A man has blood on his arm. She says to you: “You! Help!”"),
        options: [
          { id: "calma", say: t("Calma, los dos.", "Calm down, both of you."), reply: t("Carolina respira. Mateo se sienta.", "Carolina breathes. Mateo sits down."), mood: "neutral", next: "mateo" },
          { id: "policia", say: t("Llamo a la policía.", "I call the police."), reply: t("Mateo dice: «¡No!» Carolina dice: «¡Sí!»", "Mateo says: “No!” Carolina says: “Yes!”"), mood: "worried", end: "policia" },
        ],
      },
      mateo: {
        who: "mateo", mood: "worried",
        line: t("Mateo dice: «Me duele el brazo. Mucho.»", "Mateo says: “My arm hurts. A lot.”"),
        options: [
          { id: "ambulancia", say: t("Llamo a una ambulancia.", "I call an ambulance."), reply: t("Mateo dice: «Gracias.» Carolina va con él.", "Mateo says: “Thanks.” Carolina goes with him."), mood: "neutral", end: "ambulancia" },
          { id: "basta", say: t("Basta por hoy. A casa.", "Enough for today. Go home."), reply: t("Carolina se sienta. Mateo mira el suelo. Silencio.", "Carolina sits down. Mateo looks at the ground. Silence."), mood: "sad", end: "calma" },
        ],
      },
    },
  },
  "sur-balcon": {
    start: "inicio",
    ends: {
      buzon: t("Las llaves están en el buzón. Don Manolo cierra el balcón.", "The keys are in the mailbox. Don Manolo closes the balcony door."),
      llaves: t("Don Manolo tiene sus llaves. Enciende la luz y te saluda.", "Don Manolo has his keys. He turns on the light and waves."),
      cesta: t("La cesta sube con las llaves. Don Manolo se ríe y aplaude.", "The basket goes up with the keys. Don Manolo laughs and claps."),
    },
    words: [t("las llaves", "the keys"), t("el balcón", "the balcony"), t("tirar", "to throw"), t("la puerta", "the door")],
    nodes: {
      inicio: {
        who: "manolo", mood: "worried",
        line: t("Un señor en un balcón. «¡Perdón! Mis llaves están ahí, en el suelo.»", "A man on a balcony. “Sorry! My keys are there, on the ground.”"),
        options: [
          { id: "tirar", say: t("¡Aquí están! ¿Se las tiro?", "Here they are! Shall I throw them?"), reply: t("Don Manolo dice: «¡Sí! Despacio.»", "Don Manolo says: “Yes! Slowly.”"), mood: "smile", next: "tirar" },
          { id: "buzon", say: t("Las dejo en el buzón.", "I’ll leave them in the mailbox."), reply: t("Don Manolo dice: «Bueno…» y cierra el balcón.", "Don Manolo says: “Okay…” and closes the balcony door."), mood: "sad", end: "buzon" },
        ],
      },
      tirar: {
        who: "manolo", mood: "smile",
        line: t("Tiras las llaves. ¡Arriba! Don Manolo las toma.", "You throw the keys. Up! Don Manolo catches them."),
        options: [
          { id: "bien", say: t("¡Bien!", "Nice!"), reply: t("Don Manolo dice: «¡Gracias!» y enciende la luz.", "Don Manolo says: “Thanks!” and turns on the light."), mood: "smile", end: "llaves" },
          { id: "cesta", say: t("¿Tiene una cesta?", "Do you have a basket?"), reply: t("Don Manolo se ríe. «¡Sí! Una cesta. ¡Qué idea!»", "Don Manolo laughs. “Yes! A basket. What an idea!”"), mood: "laugh", end: "cesta" },
        ],
      },
    },
  },
  "mercado-inspectores": {
    start: "inicio",
    ends: {
      escapa: t("Nilda se va con el carrito. El inspector escribe tu descripción.", "Nilda leaves with her cart. The inspector writes down your description."),
      acuerdo: t("Nilda vende esta noche. Mañana, el permiso. Tienes dos tamales.", "Nilda sells tonight. Tomorrow, the permit. You have two tamales."),
      multa: t("Nilda guarda la multa. Se va despacio con el carrito.", "Nilda puts away the fine. She leaves slowly with her cart."),
    },
    words: [t("el carrito", "the cart"), t("los tamales", "the tamales"), t("el permiso", "the permit"), t("la multa", "the fine")],
    nodes: {
      inicio: {
        who: "garay", mood: "angry",
        line: t("Una señora corre con un carrito de tamales. Un inspector grita: «¡Pare! ¡No tiene permiso!»", "A woman runs with a tamale cart. An inspector shouts: “Stop! You have no permit!”"),
        options: [
          { id: "dejar", say: t("Pase, señora.", "Go ahead, madam."), reply: t("Nilda corre. El inspector dice: «¡Oiga!»", "Nilda runs. The inspector says: “Hey!”"), mood: "furious", end: "escapa" },
          { id: "preguntar", say: t("¿Qué pasa?", "What’s going on?"), reply: t("El inspector dice: «Sin permiso, hay multa.»", "The inspector says: “No permit, a fine.”"), mood: "worried", next: "nilda" },
        ],
      },
      nilda: {
        who: "nilda", mood: "sad",
        line: t("Nilda dice: «Es mi trabajo. Mañana pido el permiso.»", "Nilda says: “It’s my job. Tomorrow I’ll ask for the permit.”"),
        options: [
          { id: "acuerdo", say: t("Hoy no hay multa. Mañana, permiso. ¿Sí?", "No fine today. Tomorrow, permit. Yes?"), reply: t("El inspector dice: «…Está bien. Mañana a las ocho.» Nilda te da dos tamales.", "The inspector says: “…All right. Tomorrow at eight.” Nilda gives you two tamales."), mood: "smile", end: "acuerdo" },
          { id: "nada", say: t("Lo siento. No es mi problema.", "I’m sorry. It’s not my problem."), reply: t("El inspector escribe la multa. Nilda se va despacio.", "The inspector writes the fine. Nilda walks away slowly."), mood: "sad", end: "multa" },
        ],
      },
    },
  },
  "sur-ventana": {
    start: "inicio",
    ends: {
      cena: t("Cenas con la familia de Nieves. Hablan mucho y se ríen.", "You have dinner with Nieves’s family. They talk a lot and laugh."),
      saludo: t("Nieves dice adiós. La ventana sigue con luz.", "Nieves says goodbye. The window is still lit."),
    },
    words: [t("la ventana", "the window"), t("la familia", "the family"), t("cenar", "to have dinner"), t("el hambre", "the hunger")],
    nodes: {
      inicio: {
        who: "nieves", mood: "smile",
        line: t("Una ventana con luz. Una familia cena. Una abuela dice: «¡Hola! ¿Tienes hambre? ¡Pasa!»", "A lit window. A family is having dinner. A grandmother says: “Hi! Are you hungry? Come in!”"),
        options: [
          { id: "si", say: t("Sí, gracias. Un momento.", "Yes, thank you. Just a moment."), reply: t("Cenas con la familia. Todos hablan y ríen.", "You have dinner with the family. Everyone talks and laughs."), mood: "love", end: "cena" },
          { id: "no", say: t("No, gracias. ¡Buen provecho!", "No, thank you. Enjoy your meal!"), reply: t("Nieves dice adiós con la mano.", "Nieves waves goodbye."), mood: "smile", end: "saludo" },
        ],
      },
    },
  },
  "alto-turista": {
    start: "inicio",
    ends: {
      estacion: t("Henrik va a la estación. Está contento.", "Henrik goes to the station. He is happy."),
      juntos: t("Vas con Henrik al mercado. Habla de su abuela.", "You go with Henrik to the market. He talks about his grandmother."),
      mercado: t("Henrik va al mercado. Tiene mucha hambre.", "Henrik goes to the market. He is very hungry."),
    },
    words: [t("el mapa", "the map"), t("la estación", "the station"), t("todo recto", "straight ahead"), t("el mercado", "the market")],
    nodes: {
      inicio: {
        who: "henrik", mood: "worried",
        line: t("Un chico con un mapa. «Perdón… ¿Dónde está la estación?»", "A guy with a map. “Sorry… Where is the station?”"),
        options: [
          { id: "recto", say: t("Todo recto y a la izquierda.", "Straight ahead and to the left."), reply: t("Henrik dice: «Recto… izquierda. ¡Gracias!»", "Henrik says: “Straight… left. Thanks!”"), mood: "smile", end: "estacion" },
          { id: "mapa", say: t("A ver el mapa.", "Let’s see the map."), reply: t("Henrik te muestra el mapa. «Aquí. ¿Y el mercado?»", "Henrik shows you the map. “Here. And the market?”"), mood: "smile", next: "mapa" },
        ],
      },
      mapa: {
        who: "henrik", mood: "smile",
        line: t("«Tengo hambre. ¿El mercado está cerca?»", "“I’m hungry. Is the market near?”"),
        options: [
          { id: "juntos", say: t("Sí. Vamos juntos.", "Yes. Let’s go together."), reply: t("Henrik dice: «¡Genial!»", "Henrik says: “Great!”"), mood: "smile", end: "juntos" },
          { id: "cerca", say: t("Sí. Está ahí, a la derecha.", "Yes. It’s there, on the right."), reply: t("Henrik dice: «¡Gracias! ¡Adiós!»", "Henrik says: “Thanks! Bye!”"), mood: "smile", end: "mercado" },
        ],
      },
    },
  },
  "alto-fiesta": {
    start: "inicio",
    ends: {
      fabrica: t("Vas con Leire, Óscar y Mavi a La Fábrica. Todos se ríen.", "You go with Leire, Óscar and Mavi to La Fábrica. Everyone laughs."),
      despedida: t("Los tres se van cantando. Leire dice adiós con las flores.", "The three leave singing. Leire waves goodbye with the flowers."),
      baile: t("Óscar baila en la plaza. Leire y Mavi bailan. ¡Y tú!", "Óscar dances in the square. Leire and Mavi dance. And you!"),
    },
    words: [t("la fiesta", "the party"), t("las flores", "the flowers"), t("la boda", "the wedding"), t("bailar", "to dance")],
    nodes: {
      inicio: {
        who: "leire", mood: "smile",
        line: t("Tres amigos salen de un hotel. Una chica con flores dice: «¡Hola! ¿Vienes a una fiesta?»", "Three friends leave a hotel. A girl with flowers says: “Hi! Are you coming to a party?”"),
        options: [
          { id: "si", say: t("¡Sí! ¿Dónde es?", "Yes! Where is it?"), reply: t("Leire dice: «En La Fábrica. ¡Vamos!»", "Leire says: “At La Fábrica. Let’s go!”"), mood: "smile", end: "fabrica" },
          { id: "no", say: t("No, gracias. Hoy no.", "No, thanks. Not today."), reply: t("Leire dice: «¡Adiós!» Los tres cantan.", "Leire says: “Bye!” The three of them sing."), mood: "smile", end: "despedida" },
          { id: "boda", say: t("¿Es una boda?", "Is it a wedding?"), reply: t("Óscar dice: «¡Sí! ¡Y ahora, a bailar!» Y baila en la plaza.", "Óscar says: “Yes! And now, let’s dance!” And he dances in the square."), mood: "laugh", end: "baile" },
        ],
      },
    },
  },
  "mercado-flores": {
    start: "inicio",
    ends: {
      ramo: t("Tienes un ramo muy bonito. «Suerte», dice Doña Mirta.", "You have a very pretty bouquet. “Good luck,” says Doña Mirta."),
      regalo: t("Tienes una flor. Estás contento.", "You have a flower. You are happy."),
    },
    words: [t("las flores", "the flowers"), t("el ramo", "the bouquet"), t("la madre", "the mother"), t("para mí", "for me")],
    nodes: {
      inicio: {
        who: "mirta", mood: "smile",
        line: t("Una señora con flores. «Buenas noches. ¿Flores? ¿Para quién?»", "A woman with flowers. “Good evening. Flowers? For whom?”"),
        options: [
          { id: "madre", say: t("Para mi madre.", "For my mother."), reply: t("Doña Mirta hace un ramo. «Toma. ¡Suerte!»", "Doña Mirta makes a bouquet. “Here. Good luck!”"), mood: "love", end: "ramo" },
          { id: "mi", say: t("Para mí.", "For me."), reply: t("Doña Mirta te regala una flor. «Esta es gratis.»", "Doña Mirta gives you a flower. “This one is free.”"), mood: "love", end: "regalo" },
        ],
      },
    },
  },
  "mercado-adivina": {
    start: "inicio",
    ends: {
      prediccion: t("Tienes un papel con números. Es tu futuro.", "You have a paper with numbers. It is your future."),
      profe: t("Madame Zulema te cuenta su vida. Se ríen mucho.", "Madame Zulema tells you about her life. You laugh a lot."),
    },
    words: [t("el futuro", "the future"), t("las cartas", "the cards"), t("el año", "the year"), t("creer", "to believe")],
    nodes: {
      inicio: {
        who: "zulema", mood: "smile",
        line: t("Una mujer con cartas en una mesa. «Ven. ¿Quieres saber tu futuro?»", "A woman with cards at a table. “Come. Do you want to know your future?”"),
        options: [
          { id: "si", say: t("Sí. ¿Qué ves?", "Yes. What do you see?"), reply: t("Madame Zulema mira las cartas. «Un viaje. Y un número: siete.»", "Madame Zulema looks at the cards. “A trip. And a number: seven.”"), mood: "neutral", end: "prediccion" },
          { id: "no", say: t("No creo en eso.", "I don’t believe in that."), reply: t("Madame Zulema se ríe. «Yo tampoco. Soy profesora de matemáticas.»", "Madame Zulema laughs. “Me neither. I’m a maths teacher.”"), mood: "laugh", end: "profe" },
        ],
      },
    },
  },
  "sur-perro": {
    start: "inicio",
    ends: {
      amigos: t("Iker y Canelo dicen adiós. Canelo ya no ladra.", "Iker and Canelo say goodbye. Canelo doesn’t bark anymore."),
      dormido: t("Canelo duerme. Iker apaga la luz.", "Canelo sleeps. Iker turns off the light."),
    },
    words: [t("el perro", "the dog"), t("ladrar", "to bark"), t("bonito", "cute"), t("los vecinos", "the neighbours")],
    nodes: {
      inicio: {
        who: "iker", mood: "worried",
        line: t("Un perro ladra en un balcón. Un hombre dice: «¡Perdón! Canelo, ¡silencio!»", "A dog barks on a balcony. A man says: “Sorry! Canelo, quiet!”"),
        options: [
          { id: "bonito", say: t("No pasa nada. ¡Es bonito!", "It’s fine. He’s cute!"), reply: t("Iker sonríe. Canelo mueve la cola.", "Iker smiles. Canelo wags his tail."), mood: "smile", end: "amigos" },
          { id: "ruido", say: t("Ladra mucho. Los vecinos duermen.", "He barks a lot. The neighbours are sleeping."), reply: t("Iker dice: «Sí, perdón.» Canelo se duerme.", "Iker says: “Yes, sorry.” Canelo falls asleep."), mood: "sleepy", end: "dormido" },
        ],
      },
    },
  },
  "alto-feliz": {
    start: "inicio",
    ends: {
      prisa: t("Te vas. Joaquín cuenta la noticia a otra persona.", "You leave. Joaquín tells the news to someone else."),
      consejo: t("Joaquín sonríe. Está más tranquilo.", "Joaquín smiles. He is calmer."),
      mensaje: t("Joaquín graba un mensaje para su familia. Habla y se ríe.", "Joaquín records a message for his family. He talks and laughs."),
      abrazo: t("Joaquín abre los brazos. Muy feliz. Tú también.", "Joaquín opens his arms. Very happy. You too."),
    },
    words: [t("feliz", "happy"), t("la beca", "the scholarship"), t("estudiar", "to study"), t("el país", "the country")],
    nodes: {
      inicio: {
        who: "joaquin", mood: "surprised",
        line: t("Un chico salta y grita: «¡Tengo una beca! ¡Voy a estudiar a Japón!»", "A guy jumps and shouts: “I got a scholarship! I’m going to study in Japan!”"),
        options: [
          { id: "felicidades", say: t("¡Felicidades!", "Congratulations!"), reply: t("Joaquín dice: «¡Gracias!» y baila.", "Joaquín says: “Thanks!” and dances."), mood: "smile", next: "miedo" },
          { id: "prisa", say: t("¡Qué bien! Adiós.", "Great! Bye."), reply: t("Joaquín dice: «¡Adiós!»", "Joaquín says: “Bye!”"), mood: "smile", end: "prisa" },
        ],
      },
      miedo: {
        who: "joaquin", mood: "worried",
        line: t("«Pero… Japón está lejos. Tengo miedo.»", "“But… Japan is far away. I’m scared.”"),
        options: [
          { id: "animo", say: t("Es normal. ¡Tú puedes!", "That’s normal. You can do it!"), reply: t("Joaquín sonríe. «Sí. Yo puedo.»", "Joaquín smiles. “Yes. I can.”"), mood: "smile", end: "consejo" },
          { id: "familia", say: t("¿Llamas a tu familia?", "Do you call your family?"), reply: t("Joaquín graba un mensaje: «¡Mamá! ¡Japón!»", "Joaquín records a message: “Mum! Japan!”"), mood: "laugh", end: "mensaje" },
          { id: "abrazo", say: t("¡Un abrazo!", "A hug!"), reply: t("Joaquín abre los brazos. Muy feliz.", "Joaquín opens his arms. Very happy."), mood: "love", end: "abrazo" },
        ],
      },
    },
  },
};
