// Noche abierta · calle · escenas fuertes (caos-norte): robos, heridos, persecuciones y caos que la ciudad reparte por sus barrios.
// Barrio Viejo (esquinas ambiguas, personajes raros, escenas oscuras), Barrio Alto
// (incidentes discretos, seguridad privada, otra clase de conflicto) y Hospital y
// comisaría (heridos, policía, la entrada de urgencias).
const CORAZON = { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." };

const encounters = [
  // ───────────────────────────── VIEJO 1 ─────────────────────────────
  {
    id: "viejo-esquina",
    kind: "escena",
    district: "viejo",
    title: "La esquina equivocada",
    verb: "DECIDIR",
    goal: "Rechazar o aceptar una propuesta dudosa, hacer preguntas directas, describir un objeto y decidir si confiar en un desconocido.",
    cast: [
      {
        id: "ramiro", name: "El Flaco", role: "Tipo de la esquina",
        age: "young", body: "m", build: "slim", height: 1.8,
        hair: "buzz", hairColor: "#1a1410", skin: "#b07a56",
        top: "hoodie", topColor: "#1e1e24", bottom: "pants", bottomColor: "#2b2b30",
        extras: ["bag"], pose: "lean",
      },
      {
        id: "nadia", name: "Nadia", role: "Mujer con prisa",
        age: "adult", body: "f", build: "average", height: 1.64,
        hair: "long", hairColor: "#2a1c14", skin: "#e2b48f",
        top: "coat", topColor: "#4a3a5a", bottom: "jeans", bottomColor: "#1f2a3a",
        extras: ["earrings", "bag"], pose: "phone",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "ramiro", mood: "neutral",
        line: {
          A: "Una esquina oscura. Un chico con capucha te mira. Tiene una bolsa en la mano. «Oye. ¿Me cuidas esta bolsa un minuto? Solo un minuto.» Detrás, una mujer te hace señas de «no».",
          B: "En una esquina sin luz, un chico con capucha te corta el paso con una bolsa de tela. «Oye, hazme un favor: cuídame esta bolsa un minuto. No la abras.» Detrás de él, una mujer con celular te hace señas desesperadas de que no.",
          C: "La esquina más oscura del barrio. Un chico con capucha, apoyado en la pared, te ofrece una bolsa como quien ofrece un cigarro. «Hazme un favor y cuídamela un minuto. Sin abrirla, sin preguntas.» A sus espaldas, una mujer mueve la cabeza con un «no» que parece un grito.",
        },
        options: [
          {
            id: "que-hay",
            say: { A: "¿Qué hay en la bolsa?", B: "¿Y qué hay dentro de la bolsa? Si no me lo dices, no la toco.", C: "Antes de cuidar nada, dime qué hay dentro. Las bolsas sin explicación no se cuidan." },
            reply: { A: "El Flaco mira a los lados. «Nada malo. Está vivo.» La bolsa se mueve.", B: "El Flaco mira a los lados. «Nada ilegal, te lo juro. Pero está vivo.» La bolsa se mueve sola.", C: "El Flaco baja la voz. «Nada que te meta en problemas. Aunque, técnicamente, está vivo.» La bolsa se mueve y tú das un paso atrás." },
            mood: "surprised", next: "bolsa",
          },
          {
            id: "no-gracias",
            say: { A: "No, gracias. No cuido bolsas de desconocidos.", B: "No, gracias. No cuido bolsas de gente que no conozco.", C: "Te agradezco la confianza, pero no cuido bolsas de desconocidos en esquinas oscuras. Tengo principios y poca suerte." },
            reply: { A: "La mujer se acerca. «Perdón. Es mi hermano. Está confundido.»", B: "La mujer se acerca rápido. «Perdona, es mi hermano. Hoy no tomó su medicación y le da miedo que me enoje.»", C: "La mujer interviene. «Disculpa. Es mi hermano. Hoy se saltó la medicación y cree que todo el barrio lo persigue.»" },
            mood: "worried", next: "nadia",
          },
          {
            id: "irse",
            say: { A: "Perdón, tengo prisa. Buenas noches.", B: "Perdona, llevo prisa. Buenas noches a los dos.", C: "Lo siento, voy con el tiempo justo. Que tengan buena noche, y que la bolsa también." },
            reply: { A: "El Flaco grita: «¡Espera!» Pero sigues caminando.", B: "El Flaco te sigue dos pasos. «¡Espera, es un segundo!» No te das la vuelta.", C: "«¡Es un segundo!», insiste El Flaco, pero el barrio ya te enseñó que los segundos de los desconocidos duran horas." },
            mood: "neutral", end: "sigue",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Tranquilo. Dime qué pasa. No voy a correr.", B: "Tranquilo. Cuéntame qué pasa, que no voy a salir corriendo.", C: "Respira. Cuéntame qué pasa de verdad; no me voy a asustar ni a salir corriendo." },
            reply: { A: "El Flaco se calma. «Es un gato. Lo encontré. Mi hermana no quiere animales en casa.»", B: "El Flaco baja la capucha. «Es un gato. Lo encontré en la obra y mi hermana no quiere animales en casa.»", C: "El Flaco se quita la capucha y de pronto parece un niño. «Es un gato. Lo encontré en la obra. Mi hermana dice que ni un pez, y yo ya le puse nombre.»" },
            mood: "love", next: "bolsa",
          },
        },
      },
      bolsa: {
        who: "ramiro", mood: "surprised",
        line: {
          A: "La bolsa se abre un poco. Sale una cabeza de gato gris. El Flaco dice: «Se llama Humo. Nadia no lo quiere en casa.»",
          B: "Por la bolsa asoma una cabeza de gato gris con un ojo lastimado. «Se llama Humo», dice El Flaco. «Nadia dice que en casa no entra.»",
          C: "De la bolsa asoma un gato gris con un ojo hinchado, bastante más tranquilo que todos ustedes. «Se llama Humo», anuncia El Flaco. «Nadia tiene una política de puertas cerradas.»",
        },
        options: [
          {
            id: "veterinario",
            say: { A: "El gato tiene el ojo mal. Hay una clínica abierta. Vamos.", B: "Ese ojo está feo. Hay una veterinaria de guardia; los acompaño.", C: "Ese ojo necesita un veterinario hoy, no mañana. Hay uno de guardia cerca; los acompaño." },
            reply: { A: "Nadia suspira. «Bueno. Vamos. Pero después no entra en casa.»", B: "Nadia suspira. «Vamos. Pero después hablamos de dónde duerme.»", C: "Nadia cierra los ojos un segundo. «Vamos. Y que conste que esto no es un sí.»" },
            mood: "smile", end: "veterinario",
          },
          {
            id: "convencer",
            say: { A: "Nadia, un gato es bueno. Es tranquilo. Mira sus ojos.", B: "Nadia, un gato no da trabajo. Míralo: es más tranquilo que tu hermano.", C: "Nadia, piénsalo: un gato pide menos que un hermano y da más que un vecino. Míralo." },
            reply: { A: "Nadia mira al gato. El gato la mira. «Ay, no. Está bien. Una semana.»", B: "Nadia mira al gato y el gato la mira. «Está bien. Una semana de prueba. Una.»", C: "Nadia y el gato se sostienen la mirada. Pierde Nadia. «Una semana. Y si rompe algo, lo cuida él.»" },
            mood: "love", end: "casa",
          },
          {
            id: "policia-gato",
            say: { A: "¿Es tu gato? ¿O es de otra persona?", B: "¿Seguro que es tuyo? Porque un gato con collar no se encuentra, se lleva.", C: "¿Seguro que lo encontraste? Porque ese collar dice que alguien lo está buscando ahora mismo." },
            reply: { A: "El Flaco mira el collar. «Eh… tiene un teléfono.» Nadia llama.", B: "El Flaco descubre el collar. «Uy. Tiene un número.» Nadia ya está marcando.", C: "El Flaco lee el collar como si fuera un contrato. «Tiene un número.» Nadia marca antes de que termine la frase." },
            mood: "worried", end: "dueno",
          },
        ],
      },
      nadia: {
        who: "nadia", mood: "worried",
        line: {
          A: "Nadia te habla bajo. «Perdón. Ramiro está mal hoy. Dice que la policía lo busca. No es verdad. ¿Me ayudas a llevarlo a casa?»",
          B: "Nadia te habla casi sin voz. «Perdona el susto. Ramiro hoy está convencido de que la policía lo busca por la bolsa. No es verdad, pero no me hace caso. ¿Me ayudas a llevarlo a casa?»",
          C: "Nadia te habla al oído, sin perder de vista a su hermano. «Perdona el teatro. Hoy Ramiro cree que lo buscan por lo que lleva en la bolsa. No lo busca nadie, pero a mí no me cree. ¿Me ayudas a llevarlo a casa?»",
        },
        options: [
          {
            id: "acompanar",
            say: { A: "Sí. Vamos los tres. ¿Dónde viven?", B: "Claro. Vamos los tres juntos. ¿Dónde viven?", C: "Por supuesto. Vamos los tres y de camino me cuentas dónde viven." },
            reply: { A: "Nadia sonríe. «Aquí cerca. Gracias. Ramiro, ven.»", B: "Nadia respira por fin. «Aquí a dos cuadras. Gracias. Ramiro, vamos a casa.»", C: "Nadia afloja los hombros. «A dos cuadras. Gracias de verdad. Ramiro, nos vamos, y el gato también.»" },
            mood: "smile", end: "casa",
          },
          {
            id: "medico",
            say: { A: "Si está mal, mejor un médico. La clínica está abierta.", B: "Si no tomó su medicación, mejor un médico esta noche. La clínica está de guardia.", C: "Si se saltó la medicación, lo responsable es un médico esta noche, no mañana. La clínica está de guardia." },
            reply: { A: "Nadia duda. «Tienes razón. Pero él no quiere.» Ramiro escucha.", B: "Nadia asiente despacio. «Lo sé. Pero cuando se pone así, no quiere ir.» Ramiro se acerca.", C: "Nadia asiente. «Tienes razón, pero convencerlo es otra historia.» Ramiro, que lo ha oído todo, se acerca con la bolsa." },
            mood: "worried", next: "bolsa",
          },
          {
            id: "dejar",
            say: { A: "Lo siento. No puedo ayudar. Llama a alguien.", B: "Lo siento, no puedo ayudarte con esto. Llama a alguien de confianza.", C: "Lo siento, pero esto me queda grande. Llama a alguien que lo conozca; es lo más seguro para los dos." },
            reply: { A: "Nadia baja la cabeza. «Está bien. Gracias igual.»", B: "Nadia baja la mirada. «Entiendo. Gracias igual.»", C: "Nadia asiente sin mirarte. «Lo entiendo. Gracias de todos modos.»" },
            mood: "sad", end: "sigue",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Tu hermano tiene suerte. Tú lo cuidas mucho.", B: "Tu hermano tiene suerte de tenerte. Se nota cuánto lo cuidas.", C: "Tu hermano no sabe la suerte que tiene. Se nota que llevas años cuidándolo sin que nadie te lo agradezca." },
            reply: { A: "Nadia llora un poco. «Gracias. Nadie me dice eso.»", B: "A Nadia se le llenan los ojos. «Gracias. Hace mucho que nadie me dice algo así.»", C: "Nadia parpadea rápido. «Gracias. Es la primera vez en años que alguien me pregunta cómo estoy yo.»" },
            mood: "love", end: "casa",
          },
        },
      },
      // ── cuchillo: El Flaco saca el suyo.
      "cuchillo-inicio": {
        who: "ramiro", mood: "angry",
        line: {
          A: "El Flaco ve tu cuchillo. Saca otro de la capucha. «¿Qué haces con eso? ¿Me quieres robar?» Nadia grita.",
          B: "El Flaco ve tu cuchillo y, en un segundo, saca el suyo de la capucha. «¿Qué haces con eso? ¿Vienes a robarme a mí?» Nadia grita desde atrás.",
          C: "El Flaco ve tu cuchillo y responde con el suyo, como si lo tuviera ensayado. «¿Qué haces con eso? ¿Pretendes robarme a mí, en mi esquina?» Nadia grita que los dos están locos.",
        },
        options: [
          {
            id: "cuchillo-bajar",
            say: { A: "Tranquilo. Lo guardo. Es para cortar fruta.", B: "Tranquilo, lo guardo. Es para cortar fruta, no personas.", C: "Calma. Lo guardo ahora mismo; es un cuchillo de fruta, no un argumento." },
            reply: { A: "El Flaco baja el suyo despacio. «Fruta. Claro. Yo también.»", B: "El Flaco baja el suyo centímetro a centímetro. «Fruta, claro. El mío también. Mucha fruta en este barrio.»", C: "El Flaco baja el suyo con una lentitud teatral. «Fruta. Ya. El mío también. En este barrio comemos muchísima fruta.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "cuchillo-reto",
            say: { A: "Baja eso tú primero. No te acerques.", B: "Baja eso tú primero y no te acerques. No quiero problemas.", C: "Baja eso tú primero y mantén la distancia. No he venido a buscar problemas, pero tampoco me voy a dejar." },
            reply: { A: "El Flaco da un paso. Tú das un paso. Nadia se pone en medio: «¡Basta!»", B: "El Flaco da un paso adelante; tú no retrocedes. Nadia se mete en medio con los brazos abiertos: «¡Basta los dos!»", C: "Un paso de él, un paso tuyo, y Nadia en medio con los brazos abiertos: «¡Basta! ¡Parecen dos gallos en un corral!»" },
            mood: "scared", next: "cuchillo-calma",
          },
          {
            id: "cuchillo-huir",
            say: { A: "¡No, no! ¡Me voy!", B: "¡Para, para! Me voy, no quiero nada.", C: "Esto se acabó. Me voy; no pienso jugar a esto contigo." },
            reply: { A: "Corres. Oyes a Nadia: «¡Ramiro, guarda eso!»", B: "Sales corriendo y oyes a Nadia detrás: «¡Ramiro, guarda eso ahora mismo!»", C: "Sales corriendo y lo último que oyes es a Nadia: «¡Ramiro! ¡Guarda eso o te juro que llamo yo misma a la policía!»" },
            mood: "scared", end: "cuchillo-corre",
          },
        ],
      },
      "cuchillo-calma": {
        who: "nadia", mood: "furious",
        line: {
          A: "Nadia está furiosa. «¡Los dos con cuchillos! ¡En mi calle! ¿Quieren que llame a la policía?» El Flaco guarda el suyo.",
          B: "Nadia tiembla de rabia. «¡Dos cuchillos en mi calle, como en una película mala! ¿Quieren que llame a la policía o se van a comportar?» El Flaco guarda el suyo.",
          C: "Nadia está lívida. «Dos cuchillos en mi calle. Qué nivel. ¿Llamo a la policía o van a comportarse como adultos?» El Flaco guarda el suyo sin mirarla.",
        },
        options: [
          {
            id: "cuchillo-disculpa",
            say: { A: "Perdón. Tu hermano sacó el suyo y yo tuve miedo.", B: "Perdona. Tu hermano sacó el suyo y me asusté, nada más.", C: "Perdona. Tu hermano sacó el suyo y reaccioné con miedo; mal, lo sé." },
            reply: { A: "Nadia respira. «Está bien. Nadie está herido. Váyanse a casa.»", B: "Nadia respira hondo. «Bueno. Nadie sangra. Cada uno a su casa.»", C: "Nadia exhala. «Está bien. Nadie sangra, nadie llora. Cada uno a su casa y sin cuchillos.»" },
            mood: "neutral", end: "cuchillo-paz",
          },
          {
            id: "cuchillo-llama",
            say: { A: "Llama a la policía. Él me amenazó con un cuchillo.", B: "Llama a la policía, en serio. Él me amenazó con un cuchillo.", C: "Llámala, por favor. Él me amenazó con un cuchillo y no pienso fingir que no pasó." },
            reply: { A: "Nadia mira a su hermano. «Ramiro…» Y marca.", B: "Nadia mira a su hermano, cansada. «Ramiro, otra vez no.» Y marca.", C: "Nadia mira a su hermano como quien mira una factura. «Otra vez no, Ramiro.» Y marca." },
            mood: "sad", end: "cuchillo-policia",
          },
          {
            id: "cuchillo-gato",
            say: { A: "¿Y la bolsa? Se mueve.", B: "¿Y qué hay en la bolsa? Porque se está moviendo.", C: "Olvidemos los cuchillos un segundo: ¿qué hay en esa bolsa que se mueve sola?" },
            reply: { A: "El Flaco abre la bolsa. Un gato gris. «Se llama Humo.»", B: "El Flaco abre la bolsa y asoma un gato gris. «Se llama Humo. Lo encontré en la obra.»", C: "El Flaco abre la bolsa y asoma un gato gris, el único sin cuchillo en toda la escena. «Se llama Humo. Lo encontré en la obra.»" },
            mood: "surprised", end: "cuchillo-paz",
          },
        ],
      },
      // ── pistola: manos arriba.
      "pistola-inicio": {
        who: "ramiro", mood: "terror",
        line: {
          A: "El Flaco ve tu pistola. Suelta la bolsa y levanta las manos. «¡No, no! ¡No tengo nada!» Nadia grita: «¡No le hagas daño!»",
          B: "El Flaco ve la pistola, suelta la bolsa y levanta las manos. «¡No, por favor! ¡No tengo nada, ni dinero!» Nadia grita: «¡No le hagas daño, es mi hermano!»",
          C: "El Flaco ve la pistola y levanta las manos tan rápido que la bolsa cae al suelo. «¡No, por favor! ¡No llevo nada, ni para el autobús!» Nadia grita: «¡Es mi hermano, no le hagas daño!»",
        },
        options: [
          {
            id: "pistola-guardar",
            say: { A: "Tranquilos. No es para ustedes. La guardo.", B: "Tranquilos, no es para ustedes. La guardo ahora mismo.", C: "Calma. No tiene nada que ver con ustedes; la guardo ahora mismo." },
            reply: { A: "El Flaco baja las manos despacio. «¿Por qué llevas eso?»", B: "El Flaco baja las manos muy despacio. «¿Y por qué llevas un arma por aquí?»", C: "El Flaco baja las manos sin dejar de mirarte. «¿Y se puede saber por qué paseas con un arma por este barrio?»" },
            mood: "worried", next: "pistola-porque",
          },
          {
            id: "pistola-bolsa",
            say: { A: "¿Qué hay en la bolsa? Ábrela despacio.", B: "¿Qué hay en la bolsa? Ábrela despacio, sin movimientos raros.", C: "¿Qué hay en esa bolsa? Ábrela despacio y sin sorpresas." },
            reply: { A: "El Flaco abre la bolsa. Un gato gris te mira. «Es un gato. ¡Solo un gato!»", B: "El Flaco abre la bolsa con dos dedos. Un gato gris te mira sin miedo. «¡Es un gato! ¡Solo un gato!»", C: "El Flaco abre la bolsa como si fuera una bomba. Un gato gris te observa, el único tranquilo. «¡Un gato! ¡Es solo un gato!»" },
            mood: "surprised", next: "pistola-porque",
          },
          {
            id: "pistola-irse",
            say: { A: "Olvídenme. No pasó nada. Adiós.", B: "Olvídense de mí. Aquí no pasó nada. Adiós.", C: "Hagan como si no me hubieran visto. Aquí no ha pasado nada. Adiós." },
            reply: { A: "Nadia ya tiene el celular en la mano. «¡Policía! ¡Hay alguien con un arma!»", B: "Nadia ya está hablando por el celular. «Policía, sí, hay una persona con un arma en la esquina de…»", C: "Nadia ya está dando la dirección por el celular. «Una persona armada, sí, en la esquina de…»" },
            mood: "scared", end: "pistola-policia",
          },
        ],
      },
      "pistola-porque": {
        who: "nadia", mood: "angry",
        line: {
          A: "Nadia se pone delante de su hermano. «Casi lo matas del susto. ¿Por qué llevas un arma?»",
          B: "Nadia se planta delante de su hermano. «Casi lo matas del susto. Explícame por qué llevas un arma por la calle.»",
          C: "Nadia se planta delante de su hermano como un escudo. «Casi le da un infarto. Explícame qué hace alguien como tú con un arma en esta esquina.»",
        },
        options: [
          {
            id: "pistola-miedo",
            say: { A: "Tengo miedo de noche. Por eso la llevo.", B: "La llevo porque de noche tengo miedo. Nada más.", C: "La llevo por miedo. Este barrio de noche me supera, y sé que no es excusa." },
            reply: { A: "Nadia te mira. «Todos tenemos miedo. Y no llevamos armas.»", B: "Nadia niega con la cabeza. «Todos tenemos miedo. Y no vamos armados.»", C: "Nadia niega despacio. «Todos tenemos miedo aquí. La diferencia es que no salimos armados a repartirlo.»" },
            mood: "sad", end: "pistola-paz",
          },
          {
            id: "pistola-juguete",
            say: { A: "No es de verdad. Es de juguete. Mira.", B: "No es real. Es de juguete, mira.", C: "No es real; es una réplica. Mira, ni siquiera pesa." },
            reply: { A: "El Flaco se ríe nervioso. «¡Casi me muero por un juguete!»", B: "El Flaco se ríe con el cuerpo todavía temblando. «¡Casi me muero por un juguete!»", C: "El Flaco se ríe, todavía temblando. «Casi me muero por un juguete. Mi obituario iba a ser ridículo.»" },
            mood: "laugh", end: "pistola-paz",
          },
          {
            id: "pistola-disculpa",
            say: { A: "Perdón. Me voy. Lo siento mucho.", B: "Lo siento mucho. Me voy ya y no vuelvo por aquí.", C: "Lo siento de verdad. Me voy, y no pienso volver a asustar a nadie así." },
            reply: { A: "Nadia no contesta. Marca el celular.", B: "Nadia no contesta. Cuando te alejas, la oyes hablar con la policía.", C: "Nadia no contesta. A diez pasos, la oyes describirte a la policía con mucho detalle." },
            mood: "worried", end: "pistola-policia",
          },
        ],
      },
      // ── granada: huyen.
      "granada-inicio": {
        who: "nadia", mood: "terror",
        line: {
          A: "Nadia ve tu granada y grita. «¡Ramiro, corre!» El Flaco corre con la bolsa. Nadia no se mueve. «¿Es… es de verdad?»",
          B: "Nadia ve la granada y grita. «¡Ramiro, corre!» El Flaco sale disparado con la bolsa. Nadia se queda clavada en el suelo. «¿Eso es de verdad? Dime que no.»",
          C: "Nadia ve la granada y el grito le sale antes que el pensamiento. «¡Ramiro, corre!» El Flaco desaparece con la bolsa; Nadia no consigue mover los pies. «Dime que eso es de mentira. Dímelo ya.»",
        },
        options: [
          {
            id: "granada-falsa",
            say: { A: "Es falsa. Es un llavero. Tranquila.", B: "Es falsa, es un llavero. Tranquila, respira.", C: "Es falsa; un llavero de mal gusto, lo reconozco. Respira." },
            reply: { A: "Nadia respira. «¿Un llavero? ¡Mi hermano se fue con el gato!»", B: "Nadia respira a bocanadas. «¿Un llavero? ¡Mi hermano acaba de huir con el gato por un llavero!»", C: "Nadia se dobla para respirar. «Un llavero. Mi hermano huyendo con un gato por un llavero. Esta noche no la cuento.»" },
            mood: "surprised", next: "granada-busca",
          },
          {
            id: "granada-verdad",
            say: { A: "No sé si es de verdad. La encontré.", B: "No tengo ni idea de si es real. La encontré en la obra.", C: "Sinceramente, no sé si es real. La encontré en la obra y no he querido averiguarlo." },
            reply: { A: "Nadia grita más. «¡Hay que llamar! ¡Hay que llamar a todos!»", B: "Nadia grita todavía más. «¡Hay que llamar a alguien! ¡A la policía, a los bomberos, a quien sea!»", C: "Nadia pasa del grito a la organización. «Entonces llamamos a todo el mundo: policía, bomberos y al que esté despierto.»" },
            mood: "scared", end: "granada-helicoptero",
          },
          {
            id: "granada-correr",
            say: { A: "¡Corre tú también! ¡Vamos!", B: "¡Corre tú también! ¡Yo detrás!", C: "¡Corre, que yo voy detrás! ¡Ya hablamos cuando estemos lejos!" },
            reply: { A: "Nadia corre. Tú corres. El barrio entero oye los gritos.", B: "Nadia corre, tú corres, y todas las luces del barrio se encienden.", C: "Nadia corre, tú corres, y el barrio entero asoma a las ventanas para no perderse nada." },
            mood: "scared", end: "granada-huida",
          },
        ],
      },
      "granada-busca": {
        who: "ramiro", mood: "scared",
        line: {
          A: "El Flaco vuelve despacio, con la bolsa. «¿Ya no explota? ¿Seguro?» El gato saca la cabeza de la bolsa.",
          B: "El Flaco vuelve pegado a la pared, con la bolsa. «¿Seguro que no explota? ¿Seguro seguro?» El gato asoma la cabeza.",
          C: "El Flaco regresa pegado a la pared como si la granada pudiera cambiar de opinión. «¿Seguro que no explota?» El gato asoma la cabeza, aburrido de tanto drama.",
        },
        options: [
          {
            id: "granada-mostrar",
            say: { A: "Mira: es de plástico. Toca.", B: "Mira, es de plástico. Tócala si quieres.", C: "Mira: plástico puro. Tócala, no muerde." },
            reply: { A: "El Flaco la toca y se ríe. «¡Qué broma más mala!»", B: "El Flaco la toca con un dedo y se ríe. «¡Qué broma más mala! Casi me muero.»", C: "El Flaco la toca con un dedo y suelta una carcajada nerviosa. «Qué broma tan mala. Y yo huyendo con un gato.»" },
            mood: "laugh", end: "granada-risa",
          },
          {
            id: "granada-gato",
            say: { A: "¿El gato está bien? Corriste mucho.", B: "¿El gato está bien? Corriste como un atleta.", C: "¿Y el gato? Lo has llevado a toda velocidad por medio barrio." },
            reply: { A: "El Flaco mira la bolsa. «Está bien. Es un gato valiente.»", B: "El Flaco mira dentro. «Está perfecto. Es más valiente que yo.»", C: "El Flaco mira dentro de la bolsa. «Está mejor que todos nosotros. Debería ser él quien cuide de mí.»" },
            mood: "smile", end: "granada-risa",
          },
          {
            id: "granada-tirar",
            say: { A: "La tiro en la obra. Nadie la toca más.", B: "La dejo en la obra, lejos de todos. Que nadie la toque.", C: "La devuelvo a la obra, lejos de cualquier curioso. Fin de la historia." },
            reply: { A: "Nadia dice: «Sí, pero yo igual llamo a la policía.»", B: "Nadia asiente. «Hazlo. Pero yo llamo a la policía igual, por si acaso.»", C: "Nadia asiente. «Hazlo. Yo igualmente aviso a la policía: hoy no pienso dormir con esa duda.»" },
            mood: "worried", end: "granada-helicoptero",
          },
        ],
      },
      // ── gas: él retrocede.
      "gas-inicio": {
        who: "ramiro", mood: "scared",
        line: {
          A: "El Flaco ve el gas pimienta y levanta las manos. «Tranquilo, tranquilo. No te voy a tocar. Solo quería un favor.» Nadia suspira.",
          B: "El Flaco ve el gas pimienta y retrocede con las manos abiertas. «Tranquilo, no te voy a tocar. Solo quería pedir un favor, ¿eh?» Nadia suspira detrás.",
          C: "El Flaco ve el gas pimienta y retrocede con las manos bien visibles. «Tranquilo. Nadie va a tocar a nadie. Solo iba a pedir un favor.» Nadia suspira como quien ya ha visto esta escena antes.",
        },
        options: [
          {
            id: "gas-distancia",
            say: { A: "Quédate ahí. Habla desde ahí. ¿Qué quieres?", B: "Quédate ahí y habla desde ahí. ¿Qué favor?", C: "Mantente ahí y habla desde esa distancia. ¿Qué favor necesitas?" },
            reply: { A: "El Flaco habla desde lejos. «Que cuides esta bolsa. Hay un gato. Nadia no lo quiere.»", B: "El Flaco habla desde tres metros. «Que me cuides esta bolsa cinco minutos. Dentro hay un gato y mi hermana no lo quiere en casa.»", C: "El Flaco se explica desde tres metros, como en un interrogatorio. «Que me cuides la bolsa cinco minutos. Dentro hay un gato y mi hermana tiene una política muy estricta.»" },
            mood: "neutral", next: "gas-bolsa",
          },
          {
            id: "gas-rociar",
            say: { A: "¡No te acerques!", B: "¡Te dije que no te acerques!", C: "¡Te he dicho que no te acerques!" },
            reply: { A: "Aprietas el gas. El Flaco cae tosiendo. Nadia grita: «¡Pero si no hizo nada!»", B: "Aprietas el gas sin pensar. El Flaco cae al suelo tosiendo y Nadia grita: «¡Pero si no te hizo nada!»", C: "Aprietas el gas antes de pensar. El Flaco cae tosiendo entre lágrimas y Nadia grita: «¡Pero si no te había tocado!»" },
            mood: "pain", end: "gas-cae",
          },
          {
            id: "gas-guardar",
            say: { A: "Perdón. Lo guardo. La calle está oscura.", B: "Perdona, lo guardo. La calle está muy oscura y me asusté.", C: "Perdona, lo guardo. Esta esquina sin luz me puso nervioso." },
            reply: { A: "El Flaco respira. «Lo entiendo. Yo también tengo miedo aquí.»", B: "El Flaco respira. «Lo entiendo, de verdad. Yo también le tengo miedo a esta esquina.»", C: "El Flaco respira aliviado. «Lo entiendo. Yo vivo aquí y también le tengo miedo a esta esquina.»" },
            mood: "neutral", next: "gas-bolsa",
          },
        ],
      },
      "gas-bolsa": {
        who: "nadia", mood: "neutral",
        line: {
          A: "Nadia habla desde atrás. «Mira, con el gas en la mano decides tú. ¿Cuidas al gato o nos vamos todos a casa?»",
          B: "Nadia da un paso al frente. «Bueno, tú tienes el gas, tú decides: ¿cuidas al gato cinco minutos o nos vamos todos a casa y en paz?»", 
          C: "Nadia toma la palabra. «Como tú tienes el gas, tú mandas: ¿cuidas al gato cinco minutos o cerramos la noche y cada uno a su casa?»",
        },
        options: [
          {
            id: "gas-cuidar",
            say: { A: "Lo cuido cinco minutos. Pero desde aquí.", B: "Lo cuido cinco minutos, pero desde aquí y sin acercarme.", C: "Lo cuido cinco minutos, desde aquí y con la mano en el bolsillo, si no te importa." },
            reply: { A: "El Flaco deja la bolsa en el suelo y se va. El gato te mira.", B: "El Flaco deja la bolsa a tus pies y se aleja. El gato te mira como si tú fueras el raro.", C: "El Flaco deja la bolsa a tus pies y se esfuma. El gato te mira con la superioridad de quien no necesita gas pimienta." },
            mood: "smile", end: "gas-gato",
          },
          {
            id: "gas-casa",
            say: { A: "Vayan a casa. Yo me voy por otro lado.", B: "Váyanse a casa. Yo me voy por la otra calle.", C: "Váyanse a casa tranquilos. Yo tomo la otra calle y aquí no ha pasado nada." },
            reply: { A: "Nadia asiente. «Buena idea. Buenas noches.»", B: "Nadia asiente. «Es lo mejor. Buenas noches, y guarda eso.»", C: "Nadia asiente. «Lo más sensato de la noche. Buenas noches, y guarda eso antes de que alguien se asuste de verdad.»" },
            mood: "neutral", end: "gas-paz",
          },
          {
            id: "gas-policia",
            say: { A: "No confío. Llamo a la policía.", B: "No me fío de esto. Voy a llamar a la policía.", C: "No me fío de nada de esto. Llamo a la policía y que lo aclaren ellos." },
            reply: { A: "El Flaco corre. Nadia grita: «¡Es solo un gato!»", B: "El Flaco sale corriendo con la bolsa. Nadia grita: «¡Pero si es solo un gato!»", C: "El Flaco huye con la bolsa y Nadia grita a la noche: «¡Es un gato! ¡Un gato!»" },
            mood: "angry", end: "gas-huye",
          },
        ],
      },
      // ── lápiz: una nota.
      "lapiz-inicio": {
        who: "ramiro", mood: "surprised",
        line: {
          A: "El Flaco ve tu lápiz. «¿Tienes un lápiz? ¡Perfecto! Escribe una nota para mi hermana. Yo escribo muy mal.» Nadia dice: «Estoy aquí, Ramiro.»",
          B: "El Flaco ve tu lápiz y se le ilumina la cara. «¿Llevas un lápiz? ¡Perfecto! Escríbele una nota a mi hermana; yo escribo fatal.» Nadia, detrás: «Ramiro, estoy aquí mismo.»",
          C: "El Flaco ve tu lápiz como si fuera un billete de lotería. «¿Un lápiz? ¡Perfecto! Escríbele una nota a mi hermana, que yo tengo letra de médico.» Nadia, a dos metros: «Ramiro, estoy aquí.»",
        },
        options: [
          {
            id: "lapiz-que",
            say: { A: "¿Qué quieres decir en la nota?", B: "Bueno. ¿Qué quieres que diga la nota?", C: "De acuerdo. Dicta: ¿qué quieres que diga la nota?" },
            reply: { A: "El Flaco piensa. «Que encontré un gato. Que se llama Humo. Que lo quiero.»", B: "El Flaco piensa mucho. «Que encontré un gato en la obra, que se llama Humo y que, por favor, lo deje quedarse.»", C: "El Flaco piensa como quien redacta un testamento. «Que encontré un gato en la obra, que se llama Humo y que, por favor, lo deje quedarse. Firmado: su hermano favorito.»" },
            mood: "smile", next: "lapiz-nota",
          },
          {
            id: "lapiz-directo",
            say: { A: "Tu hermana está aquí. Díselo tú.", B: "Tu hermana está aquí mismo. Díselo tú, cara a cara.", C: "Tu hermana está a dos metros. Díselo tú; las notas son para los que no se atreven." },
            reply: { A: "El Flaco mira a Nadia. «Tengo un gato.» Nadia: «Ya lo sé. Se mueve la bolsa.»", B: "El Flaco mira a Nadia. «Encontré un gato.» Nadia: «Ya lo sé, Ramiro. La bolsa lleva diez minutos moviéndose.»", C: "El Flaco mira a Nadia. «Encontré un gato.» Nadia: «Ya lo sé. La bolsa lleva diez minutos haciendo yoga.»" },
            mood: "laugh", end: "lapiz-cara",
          },
          {
            id: "lapiz-dibujo",
            say: { A: "Mejor dibujo al gato. ¿Lo saco?", B: "Mejor le dibujo al gato. ¿Lo sacas un momento?", C: "Mejor que una nota: le dibujo al gato. Sácalo un momento, que pose." },
            reply: { A: "El Flaco saca al gato. Es gris y tiene un ojo mal. Dibujas rápido.", B: "El Flaco saca a un gato gris con un ojo hinchado. Dibujas rápido en un papel de la bolsa.", C: "El Flaco saca a un gato gris con un ojo hinchado y cara de modelo cansado. Dibujas rápido en el reverso de un boleto." },
            mood: "smile", next: "lapiz-nota",
          },
        ],
      },
      "lapiz-nota": {
        who: "nadia", mood: "smile",
        line: {
          A: "Nadia lee el papel. «Humo. Un ojo mal. Lo quiere mucho.» Mira a su hermano. «¿Y quién paga el veterinario?»",
          B: "Nadia lee el papel con cara seria. «Humo, un ojo lastimado, lo quiere mucho.» Mira a su hermano. «¿Y el veterinario lo paga el lápiz?»",
          C: "Nadia lee el papel con la seriedad de un notario. «Humo, ojo lastimado, amor incondicional.» Mira a su hermano. «¿Y el veterinario lo paga la nota?»",
        },
        options: [
          {
            id: "lapiz-vet",
            say: { A: "Escribo aquí la dirección del veterinario. Está abierto.", B: "Te apunto aquí la dirección del veterinario de guardia. Vayan ahora.", C: "Te anoto aquí la dirección del veterinario de guardia; con ese ojo, es para hoy." },
            reply: { A: "Nadia guarda el papel. «Está bien. Vamos. Gracias.»", B: "Nadia guarda el papel en el bolsillo. «Bueno. Vamos ahora. Gracias.»", C: "Nadia dobla el papel con cuidado. «De acuerdo, vamos ahora mismo. Gracias por la letra legible.»" },
            mood: "smile", end: "lapiz-veterinario",
          },
          {
            id: "lapiz-firmar",
            say: { A: "Firma aquí: «Humo puede quedarse una semana».", B: "Firma aquí: «Humo se queda una semana a prueba».", C: "Firma aquí: «Humo se queda una semana a prueba». Un contrato es un contrato." },
            reply: { A: "Nadia se ríe y firma. El Flaco salta de alegría.", B: "Nadia se ríe y firma. El Flaco levanta la bolsa como una copa.", C: "Nadia se ríe y firma con floritura. El Flaco levanta la bolsa como quien levanta un trofeo." },
            mood: "laugh", end: "lapiz-contrato",
          },
          {
            id: "lapiz-yo",
            say: { A: "Yo pago el veterinario. Dame tu número.", B: "El veterinario lo pago yo. Anota tu número aquí.", C: "El veterinario corre por mi cuenta. Anótame tu número aquí y mañana lo arreglamos." },
            reply: { A: "Nadia te mira sorprendida. «¿En serio?» Escribe su número.", B: "Nadia te mira sin creerlo. «¿En serio?» Y escribe su número en el papel.", C: "Nadia te mira como si fueras una aparición. «¿En serio?» Y apunta su número con letra temblorosa." },
            mood: "surprised", end: "lapiz-veterinario",
          },
        ],
      },
      // ── libro: risa.
      "libro-inicio": {
        who: "ramiro", mood: "laugh",
        line: {
          A: "El Flaco ve tu libro y se ríe. «¿Un libro? ¿Aquí? ¿De noche? ¿Qué es, una Biblia?» Nadia: «Déjalo en paz.»",
          B: "El Flaco ve tu libro y suelta una carcajada. «¿Un libro? ¿En esta esquina, de noche? ¿Qué eres, un cura?» Nadia: «Déjalo en paz, Ramiro.»",
          C: "El Flaco ve tu libro y se ríe sin maldad. «¿Un libro? ¿En esta esquina y a esta hora? ¿Vienes a convertirnos?» Nadia: «Ramiro, déjalo, que tú no lees ni los carteles.»",
        },
        options: [
          {
            id: "libro-titulo",
            say: { A: "Es una novela de gatos. ¿Te gusta?", B: "Es una novela sobre un gato detective. ¿Te interesa?", C: "Es una novela sobre un gato detective; apropiado para la bolsa que llevas, me parece." },
            reply: { A: "El Flaco deja de reír. «¿De gatos? Yo tengo uno. Aquí.» Abre la bolsa.", B: "El Flaco deja de reír de golpe. «¿De gatos? Yo tengo uno. Mira.» Abre la bolsa y asoma un gato gris.", C: "El Flaco deja de reír como si le hubieran apagado la luz. «¿De gatos? Yo tengo uno. Aquí.» Abre la bolsa y aparece un gato gris, algo ofendido." },
            mood: "surprised", next: "libro-gato",
          },
          {
            id: "libro-regalar",
            say: { A: "Toma. Te lo regalo. Lee en casa.", B: "Toma, te lo regalo. Léelo en casa, que aquí no hay luz.", C: "Toma, es tuyo. Léelo en casa; en esta esquina no se ve ni el título." },
            reply: { A: "El Flaco lo toma. «¿Gratis? Nadie me regala nada.» Nadia sonríe.", B: "El Flaco lo toma con las dos manos. «¿Gratis? A mí nunca me regalan nada.» Nadia sonríe por primera vez.", C: "El Flaco lo acepta con las dos manos, de pronto serio. «¿Gratis? Nadie me regala nada en este barrio.» Nadia sonríe por fin." },
            mood: "smile", end: "libro-regalo",
          },
          {
            id: "libro-excusa",
            say: { A: "Busco una dirección en el libro. Es un mapa. Adiós.", B: "Estoy buscando una dirección en el libro; es una guía. Me voy.", C: "Es una guía de la ciudad; busco una dirección y me voy, sin conversión de nadie." },
            reply: { A: "El Flaco se ríe. «¡Un mapa! Aquí nadie usa mapa.» Te dejan pasar.", B: "El Flaco se ríe más. «¡Una guía! En este barrio la guía soy yo.» Te deja pasar.", C: "El Flaco se ríe todavía más. «¡Una guía! En este barrio la única guía soy yo, y cobro.» Te deja pasar." },
            mood: "laugh", end: "sigue",
          },
        ],
      },
      "libro-gato": {
        who: "nadia", mood: "smile",
        line: {
          A: "Nadia mira el libro y al gato. «Un gato detective y un gato de verdad. Esta noche es rara.» El gato huele el libro.",
          B: "Nadia mira el libro y después al gato. «Un gato detective y un gato real en la misma esquina. Qué noche.» El gato olfatea la tapa.",
          C: "Nadia mira el libro, mira al gato, y suspira. «Un gato detective y un gato real en la misma esquina. Si esto es una señal, no la entiendo.» El gato olfatea la tapa con interés profesional.",
        },
        options: [
          {
            id: "libro-leer",
            say: { A: "Les leo una página. Sobre el gato detective.", B: "Les leo una página, la del gato que resuelve el caso.", C: "Les leo una página: la del gato que resuelve el caso mientras los humanos discuten." },
            reply: { A: "Lees bajo la luz del celular. El Flaco escucha con la boca abierta.", B: "Lees con la luz del celular de Nadia. El Flaco escucha con la boca abierta, el gato también.", C: "Lees a la luz del celular de Nadia. El Flaco escucha como un niño; el gato, como un crítico." },
            mood: "smile", end: "libro-lectura",
          },
          {
            id: "libro-nombre",
            say: { A: "El gato del libro se llama Humo. ¿Y el tuyo?", B: "El gato del libro se llama Humo. ¿Cómo se llama el tuyo?", C: "El gato de la novela se llama Humo. ¿Y el tuyo cómo se llama?" },
            reply: { A: "El Flaco grita: «¡Humo! ¡El mío también!» Nadia no lo cree.", B: "El Flaco grita: «¡Humo! ¡El mío también se llama Humo!» Nadia se tapa la cara.", C: "El Flaco grita: «¡Humo! ¡Igual que el mío!» Nadia se tapa la cara: «Ahora sí que no lo echo.»" },
            mood: "laugh", end: "libro-regalo",
          },
          {
            id: "libro-vet",
            say: { A: "Ese ojo está mal. Vayan al veterinario.", B: "Ese ojo está feo. Deberían ir al veterinario esta noche.", C: "Ese ojo no tiene buena pinta. Deberían pasar por el veterinario de guardia esta misma noche." },
            reply: { A: "Nadia asiente. «Sí. Vamos ahora.»", B: "Nadia asiente. «Tienes razón. Vamos ahora mismo.»", C: "Nadia asiente. «Tienes razón. Vamos ahora, antes de que me arrepienta de todo.»" },
            mood: "worried", end: "veterinario",
          },
        ],
      },
      // ── corazón: calma.
      "corazon-inicio": {
        who: "ramiro", mood: "smitten",
        line: {
          A: "El Flaco ve el corazón y sonríe. Baja la capucha. «Perdón. No quería asustar. Es que… tengo un gato y no sé qué hacer.» Nadia se acerca.",
          B: "El Flaco ve el corazón y la cara se le ablanda. Se baja la capucha. «Perdona, no quería asustarte. Es que tengo un gato escondido y no sé qué hacer con él.» Nadia se acerca, más tranquila.",
          C: "El Flaco ve el corazón y, por primera vez, parece de su edad. Se baja la capucha. «Perdona. No quería asustar a nadie. Es que llevo un gato escondido y no sé qué hacer con él.» Nadia se acerca, desarmada.",
        },
        options: [
          {
            id: "corazon-hermana",
            say: { A: "Nadia, míralo. Él quiere al gato. Dale una oportunidad.", B: "Nadia, míralo: quiere a ese gato de verdad. Dales una oportunidad a los dos.", C: "Nadia, míralo bien: quiere a ese gato más de lo que admite. Dales una oportunidad a los dos." },
            reply: { A: "Nadia abraza a su hermano. «Está bien. Humo se queda.»", B: "Nadia abraza a su hermano de golpe. «Está bien, tonto. Humo se queda.»", C: "Nadia abraza a su hermano sin avisar. «Está bien, tonto. Humo se queda. Pero duerme contigo.»" },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "corazon-gato",
            say: { A: "¿Me lo muestras? Me gustan los gatos.", B: "¿Me lo enseñas? Me encantan los gatos.", C: "¿Me lo presentas? Tengo debilidad por los gatos con historia." },
            reply: { A: "El Flaco abre la bolsa. El gato te mira y se duerme en tu mano.", B: "El Flaco abre la bolsa. El gato te mira, bosteza y se queda dormido en tu mano.", C: "El Flaco abre la bolsa. El gato te evalúa, te aprueba y se queda dormido en tu mano." },
            mood: "love", next: "corazon-humo",
          },
          {
            id: "corazon-juntos",
            say: { A: "Los acompaño a casa. Vamos juntos.", B: "Los acompaño a casa, así hablan por el camino.", C: "Los acompaño a casa; por el camino se dicen lo que no se han dicho." },
            reply: { A: "Nadia sonríe. «Gracias. Ramiro, vamos.»", B: "Nadia sonríe. «Gracias. Ramiro, a casa, con gato y todo.»", C: "Nadia sonríe. «Gracias. Ramiro, a casa. Y el gato, también.»" },
            mood: "love", end: "casa",
          },
        ],
      },
      "corazon-humo": {
        who: "nadia", mood: "love",
        line: {
          A: "Nadia mira al gato dormido en tu mano. «Ay. Se parece a Ramiro cuando era pequeño.» El Flaco se ríe.",
          B: "Nadia mira al gato dormido en tu mano y se le escapa un suspiro. «Se parece a Ramiro de chiquito.» El Flaco se ríe, avergonzado.",
          C: "Nadia observa al gato dormido en tu mano y algo se le afloja por dentro. «Tiene la misma cara que Ramiro cuando era chiquito.» El Flaco se ríe, colorado.",
        },
        options: [
          {
            id: "corazon-quedarse",
            say: { A: "Nadia, el gato ya es de la familia. Mira.", B: "Nadia, este gato ya es de la familia. Míralos.", C: "Nadia, este gato ya forma parte de la familia; solo falta que lo admitas." },
            reply: { A: "Nadia abraza a su hermano. «Bueno. Humo se queda.»", B: "Nadia abraza a su hermano. «Está bien. Humo se queda. Y tú lo cuidas.»", C: "Nadia abraza a su hermano. «Está bien. Humo se queda, y tú aprendes a cuidar de algo.»" },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "corazon-vet",
            say: { A: "Primero, el veterinario. Ese ojo. Vamos.", B: "Primero, el veterinario, por ese ojo. Vamos ahora.", C: "Primero el veterinario, por ese ojo; las emociones después." },
            reply: { A: "Nadia asiente. «Sí. Vamos los tres.»", B: "Nadia asiente. «Vamos. Los tres y el gato.»", C: "Nadia asiente. «Vamos los tres. Los cuatro, perdón.»" },
            mood: "smile", end: "veterinario",
          },
          {
            id: "corazon-dueno",
            say: { A: "Tiene collar. Hay un número. Llamen.", B: "Tiene collar con un número. Alguien lo está buscando.", C: "Lleva collar y un número; alguien lo está buscando, por mucho que duela." },
            reply: { A: "El Flaco se pone triste. Nadia marca el número.", B: "El Flaco baja la cabeza. Nadia marca el número con cuidado.", C: "Al Flaco se le apaga la sonrisa. Nadia marca el número con una delicadeza que no le conocías." },
            mood: "sad", end: "dueno",
          },
        ],
      },
    },
    ends: {
      sigue: {
        text: { A: "Sigues tu camino. En la esquina, la bolsa todavía se mueve.", B: "Sigues tu camino. Al mirar atrás, la bolsa sigue moviéndose en la esquina.", C: "Sigues tu camino. Al volverte, la bolsa sigue moviéndose en la esquina, con la calma de quien no tiene prisa." },
        change: "sigue", recap: "Pasaste de largo por la esquina del Flaco.",
      },
      veterinario: {
        text: { A: "Los tres caminan hasta el veterinario. El gato se duerme en la bolsa.", B: "Los tres caminan hasta el veterinario de guardia. El gato se duerme en la bolsa.", C: "Los tres caminan hasta el veterinario de guardia; el gato se duerme en la bolsa, ajeno al drama que provocó." },
        change: "se-va", recap: "Llevaste al gato del Flaco al veterinario.",
      },
      casa: {
        text: { A: "Nadia y Ramiro se van a casa. El gato va con ellos.", B: "Nadia y Ramiro se van a casa, discutiendo bajito. El gato va con ellos.", C: "Nadia y Ramiro se alejan discutiendo en voz baja, como solo discuten los hermanos. El gato va con ellos." },
        change: "sonrie", recap: "Ayudaste a Nadia a llevar a su hermano a casa.",
      },
      dueno: {
        text: { A: "Una señora contesta el teléfono. Llora de alegría. El gato tiene dueña.", B: "Una señora contesta y llora de alegría: llevaba dos días buscándolo. El gato tiene dueña.", C: "Contesta una señora que llora de alegría: llevaba dos días buscándolo. El gato tiene dueña, y el Flaco, un poco menos." },
        change: "llama", recap: "Encontraste a la dueña del gato.",
      },
      "cuchillo-corre": {
        text: { A: "Corres hasta la avenida. El corazón te late fuerte. Nadie te sigue.", B: "Corres hasta la avenida con el corazón en la garganta. Nadie te sigue.", C: "Corres hasta la avenida con el corazón desbocado. Nadie te sigue, pero tardas en creerlo." },
        change: "corre", recap: "Huiste del Flaco y su cuchillo.",
      },
      "cuchillo-paz": {
        text: { A: "Los dos cuchillos están guardados. Nadia se lleva a su hermano. Nadie está herido.", B: "Los dos cuchillos quedan guardados. Nadia se lleva a su hermano del brazo. Nadie sangra.", C: "Dos cuchillos guardados, nadie herido, una hermana agotada. Nadia se lleva a Ramiro del brazo y el gato cierra la marcha." },
        change: "se-va", recap: "Un duelo de cuchillos con el Flaco terminó sin sangre.",
      },
      "cuchillo-policia": {
        text: { A: "Llega un patrullero. Ramiro entrega su cuchillo. Tú también explicas el tuyo.", B: "Un patrullero entra por la calle. Ramiro entrega su cuchillo y tú explicas el tuyo durante un buen rato.", C: "Un patrullero dobla la esquina. Ramiro entrega su cuchillo y tú pasas media hora explicando el tuyo." },
        change: "policia", recap: "La policía se llevó los cuchillos de la esquina.",
      },
      "pistola-paz": {
        text: { A: "Guardas la pistola. Nadia y Ramiro se van rápido, sin mirar atrás.", B: "Guardas la pistola. Nadia y Ramiro se alejan rápido, sin mirar atrás ni una vez.", C: "Guardas la pistola. Nadia y Ramiro se alejan a paso rápido, sin mirar atrás, como si la esquina les quemara." },
        change: "huye", recap: "Asustaste al Flaco con la pistola y se fueron.",
      },
      "pistola-policia": {
        text: { A: "Llega la policía. Te piden la pistola. La noche termina en la comisaría.", B: "Llega la policía en dos minutos. Te quitan la pistola y la noche termina en la comisaría.", C: "La policía llega en dos minutos. Te quitan la pistola y la noche termina con un café frío en la comisaría." },
        change: "policia", recap: "La pistola en la esquina terminó con la policía.",
      },
      "granada-helicoptero": {
        text: { A: "Suenan sirenas. Un helicóptero ilumina la esquina. Todo el barrio sale a mirar.", B: "Sirenas por todas partes y un helicóptero que ilumina la esquina. Todo el barrio sale a mirar en pijama.", C: "Sirenas de todas las direcciones y un helicóptero que convierte la esquina en un escenario. El barrio entero sale en pijama a ver el espectáculo." },
        change: "helicoptero", recap: "Tu granada despertó a todo el Barrio Viejo.",
      },
      "granada-huida": {
        text: { A: "Corren los tres hasta la avenida. El gato va saltando en la bolsa.", B: "Corren los tres hasta la avenida, con el gato dando saltos dentro de la bolsa.", C: "Corren los tres hasta la avenida, el gato rebotando dentro de la bolsa como un pasajero indignado." },
        change: "huye", recap: "Huiste con Nadia y el Flaco de tu propia granada.",
      },
      "granada-risa": {
        text: { A: "Todos se ríen del susto. El Flaco saca al gato. Ya nadie tiene miedo.", B: "El susto termina en risas. El Flaco saca al gato y la esquina ya no da miedo.", C: "El susto se disuelve en carcajadas. El Flaco saca al gato y, por un rato, la esquina deja de ser la más oscura del barrio." },
        change: "sonrie", recap: "Tu granada de plástico terminó en risas en la esquina.",
      },
      "gas-cae": {
        text: { A: "El Flaco está en el suelo, tosiendo. Nadia le echa agua en los ojos y te mira con odio.", B: "El Flaco se queda en el suelo, tosiendo. Nadia le lava los ojos con agua y te mira con un odio que no olvidas.", C: "El Flaco se queda en el suelo, tosiendo y llorando. Nadia le lava los ojos con agua y te dedica una mirada que vas a recordar." },
        change: "cae", recap: "Rociaste al Flaco con gas sin necesidad.",
      },
      "gas-gato": {
        text: { A: "El Flaco vuelve en cinco minutos. El gato se durmió en la bolsa. Nadie usó el gas.", B: "El Flaco vuelve a los cinco minutos. El gato se durmió en la bolsa y el gas se quedó en tu bolsillo.", C: "El Flaco vuelve a los cinco minutos exactos. El gato dormía en la bolsa y el gas no salió del bolsillo." },
        change: "sonrie", recap: "Cuidaste al gato del Flaco con el gas en el bolsillo.",
      },
      "gas-paz": {
        text: { A: "Cada uno se va por su lado. El gas sigue en tu bolsillo.", B: "Cada uno se va por su lado. El gas no salió del bolsillo.", C: "Cada uno toma su calle. El gas, intacto, vuelve al bolsillo." },
        change: "se-va", recap: "Mantuviste la distancia con el Flaco y nadie se hizo daño.",
      },
      "gas-huye": {
        text: { A: "El Flaco desaparece. Nadia corre detrás. Te quedas solo en la esquina.", B: "El Flaco desaparece por el callejón y Nadia corre detrás. Te quedas solo en la esquina.", C: "El Flaco se pierde por el callejón, Nadia detrás de él. Te quedas solo en la esquina, con el gas en la mano y nada que defender." },
        change: "huye", recap: "El Flaco huyó cuando hablaste de llamar a la policía.",
      },
      "lapiz-veterinario": {
        text: { A: "Nadia guarda la nota. Los tres van al veterinario.", B: "Nadia guarda la nota con la dirección. Los tres se van al veterinario.", C: "Nadia se guarda la nota con la dirección y los tres se van al veterinario, el gato incluido." },
        change: "se-va", recap: "Escribiste una nota y el gato fue al veterinario.",
      },
      "lapiz-cara": {
        text: { A: "Los hermanos hablan por fin. Nadia dice que sí. El lápiz no hizo falta.", B: "Los hermanos hablan por fin cara a cara. Nadia acaba diciendo que sí y el lápiz no hace falta.", C: "Los hermanos hablan por fin sin intermediarios. Nadia termina diciendo que sí, y el lápiz vuelve al bolsillo sin usar." },
        change: "sonrie", recap: "Hiciste que el Flaco hablara con su hermana.",
      },
      "lapiz-contrato": {
        text: { A: "Nadia firma. El Flaco guarda el papel. El gato tiene casa por una semana.", B: "Nadia firma, el Flaco guarda el papel como un tesoro. El gato tiene casa, al menos una semana.", C: "Nadia firma, el Flaco guarda el papel como si fuera una escritura. El gato tiene casa por una semana, prorrogable." },
        change: "sonrie", recap: "Redactaste un contrato de adopción para el gato.",
      },
      "libro-regalo": {
        text: { A: "El Flaco se va con el libro bajo el brazo y el gato en la bolsa. Nadia te saluda.", B: "El Flaco se va con el libro bajo el brazo y el gato en la bolsa. Nadia te saluda desde la esquina.", C: "El Flaco se aleja con el libro bajo el brazo y el gato en la bolsa, un lector más en el barrio. Nadia te saluda desde la esquina." },
        change: "se-va", recap: "Le regalaste tu libro al Flaco.",
      },
      "libro-lectura": {
        text: { A: "Lees una página entera. El Flaco pide otra. Nadia dice: «Mañana».", B: "Lees una página entera y el Flaco pide otra. Nadia pone orden: «Mañana, en casa».", C: "Lees una página entera; el Flaco pide otra, Nadia impone un «mañana, en casa» y todos obedecen, hasta el gato." },
        change: "sonrie", recap: "Leíste en voz alta en la esquina más oscura del barrio.",
      },
      "corazon-abrazo": {
        text: { A: "Nadia y Ramiro se abrazan. El gato maúlla en la bolsa. Te vas sonriendo.", B: "Nadia y Ramiro se abrazan en medio de la esquina. El gato maúlla en la bolsa. Te alejas sonriendo.", C: "Nadia y Ramiro se abrazan en la esquina más oscura del barrio, que de pronto parece menos oscura. El gato maúlla. Te alejas sonriendo." },
        change: "abraza", recap: "Reconciliaste a dos hermanos y a un gato.",
      },
    },
    speak: {
      A1: "¿Tienes un animal en casa?",
      A2: "¿Qué haces si una persona desconocida te pide un favor en la calle?",
      B1: "¿Alguna vez cuidaste algo o a alguien que no era tuyo?",
      B2: "¿Cómo decides si confiar en alguien que acabas de conocer?",
      C1: "¿Qué esquina o lugar de tu ciudad evitas de noche, y por qué?",
      C2: "¿Hasta qué punto juzgamos a las personas por el lugar donde las encontramos?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Tienes miedo de los cuchillos?", B: "¿Qué harías si alguien sacara un cuchillo delante de ti?", C: "¿Por qué crees que una persona responde a una amenaza con otra amenaza?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Hay armas en tu país?", B: "¿Qué sientes cuando ves un arma, aunque sea en una película?", C: "¿Debería una persona normal tener derecho a llevar un arma para defenderse?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Corres rápido?", B: "¿Cuál fue el susto más grande de tu vida?", C: "¿Qué broma pesada te parece imperdonable?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Llevas algo para defenderte?", B: "¿Alguna vez desconfiaste de alguien que resultó ser buena persona?", C: "¿Dónde está el límite entre prevenir y ser paranoico?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes notas a mano?", B: "¿Qué nota importante le escribirías a alguien de tu familia?", C: "¿Qué cosas se dicen mejor por escrito que cara a cara?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Lees de noche?", B: "¿Qué libro le regalarías a alguien que nunca lee?", C: "¿Por qué sorprende tanto ver a alguien con un libro en la calle?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Tienes hermanos?", B: "¿Con quién de tu familia te gustaría reconciliarte o hablar más?", C: "¿Qué cuida una persona cuando cuida a un animal que no es suyo?" } },
    },
  },

  // ───────────────────────────── VIEJO 2 ─────────────────────────────
  {
    id: "viejo-sombra",
    kind: "escena",
    district: "viejo",
    title: "La mujer de la linterna",
    verb: "AYUDAR",
    goal: "Pedir una ambulancia, describir a un herido, reconstruir lo ocurrido y decidir si creer a una testigo extraña.",
    cast: [
      {
        id: "ofelia", name: "Ofelia", role: "Señora de negro con linterna",
        age: "old", body: "f", build: "slim", height: 1.58,
        hair: "bun", hairColor: "#d8d2c8", skin: "#e8c9a8",
        top: "coat", topColor: "#111114", bottom: "skirt", bottomColor: "#1a1a1e",
        extras: ["glasses", "scarf"], pose: "crouch",
      },
      {
        id: "beto", name: "Beto", role: "Hombre en el suelo",
        age: "adult", body: "m", build: "heavy", height: 1.76,
        hair: "short", hairColor: "#3a2a1a", skin: "#c48a62",
        top: "shirt", topColor: "#6b7a8c", bottom: "pants", bottomColor: "#2e2a26",
        extras: ["blood-head", "beard"], pose: "fallen",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "ofelia", mood: "worried",
        line: {
          A: "En el callejón, una señora de negro ilumina con una linterna a un hombre en el suelo. Tiene sangre en la cabeza. «No lo toques. Respira. Creo. Yo solo lo encontré.»",
          B: "Al fondo del callejón, una señora vestida de negro apunta su linterna a un hombre tirado boca abajo. Le sangra la cabeza. «No lo toques. Respira, creo. Yo solo pasaba y lo encontré así.»",
          C: "Al fondo del callejón, una señora de negro sostiene una linterna sobre un hombre tirado boca abajo con la cabeza ensangrentada. «No lo toques. Respira, creo. Yo pasaba por aquí y lo encontré así. Que conste.»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Llamo a una ambulancia. ¿Dónde estamos?", B: "Llamo a una ambulancia ahora mismo. ¿Qué dirección doy?", C: "Llamo a una ambulancia ya. Dígame la dirección exacta, que yo no conozco este callejón." },
            reply: { A: "Ofelia dice: «Callejón de la Fragua, detrás del hotel. Rápido.»", B: "«Callejón de la Fragua, detrás del Hotel Sol. Y diles que sangra mucho.»", C: "«Callejón de la Fragua, detrás del Hotel Sol. Y diles que sangra más de lo que parece bajo esta luz.»" },
            mood: "worried", next: "llamada",
          },
          {
            id: "que-paso",
            say: { A: "¿Qué pasó? ¿Usted vio algo?", B: "¿Qué pasó aquí? ¿Usted vio algo o a alguien?", C: "¿Qué ha pasado? ¿Vio usted algo, o a alguien, antes de encontrarlo?" },
            reply: { A: "Ofelia mira la linterna. «Dos chicos corrieron. Yo no vi caras. Yo nunca veo caras.»", B: "Ofelia baja la linterna. «Dos chicos salieron corriendo. No les vi la cara. A esta edad ya no veo caras, solo sombras.»", C: "Ofelia baja la linterna un instante. «Dos chicos salieron corriendo hacia la avenida. No les vi la cara; a mi edad una ve sombras, no caras.»" },
            mood: "neutral", next: "relato",
          },
          {
            id: "revisar",
            say: { A: "Señor, ¿me oye? Apriete mi mano.", B: "Señor, ¿me oye? Si me oye, apriete mi mano.", C: "Señor, ¿me oye? No se mueva; si me oye, apriéteme la mano." },
            reply: { A: "El hombre mueve la mano. Abre un ojo. «Mi… billetera.»", B: "La mano del hombre se cierra sobre la tuya. Abre un ojo. «Mi billetera… se la llevaron.»", C: "La mano del hombre se cierra sobre la tuya con más fuerza de la esperada. Abre un ojo. «La billetera. Se la llevaron.»" },
            mood: "pain", next: "beto",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Señora, usted hizo bien. Quedarse con él es ayudar.", B: "Señora, hizo bien en quedarse. Mucha gente habría pasado de largo.", C: "Señora, hizo lo más difícil: quedarse. La mayoría habría seguido de largo con la linterna apagada." },
            reply: { A: "Ofelia llora un poco. «Tenía miedo. Pero no podía dejarlo.»", B: "A Ofelia le tiembla la linterna. «Tenía mucho miedo. Pero no podía dejarlo aquí solo.»", C: "A Ofelia le tiembla la linterna. «Tenía un miedo espantoso. Pero dejarlo aquí solo habría sido peor que cualquier miedo.»" },
            mood: "love", next: "llamada",
          },
        },
      },
      llamada: {
        who: "beto", mood: "pain",
        line: {
          A: "Hablas con emergencias. Te preguntan: «¿Está consciente? ¿Sangra mucho?» El hombre abre los ojos y dice: «Me duele todo.»",
          B: "Emergencias te pregunta: «¿Está consciente? ¿La sangre sale a borbotones o gotea?» El hombre abre los ojos y murmura: «Me duele hasta el nombre.»",
          C: "Emergencias te interroga: «¿Está consciente? ¿La hemorragia es abundante o gotea?» El hombre abre los ojos y masculla: «Me duele hasta el apellido.»",
        },
        options: [
          {
            id: "describir",
            say: { A: "Está consciente. Habla. Sangra de la cabeza, pero poco.", B: "Está consciente y habla. Sangra de la cabeza, pero gotea, no sale a chorros.", C: "Consciente y hablando. Herida en la cabeza; gotea, no es un chorro. Está boca abajo y no lo hemos movido." },
            reply: { A: "«Bien. No lo muevan. Cinco minutos.» Ofelia respira.", B: "«Perfecto. No lo muevan. Llegan en cinco minutos.» Ofelia respira por primera vez.", C: "«Perfecto, no lo muevan. Cinco minutos.» Ofelia suelta el aire como si llevara una hora conteniéndolo." },
            mood: "worried", end: "ambulancia",
          },
          {
            id: "presionar",
            say: { A: "Señora, su bufanda. Presione la herida.", B: "Señora, deme su bufanda. Hay que presionar la herida.", C: "Señora, présteme la bufanda; hay que presionar la herida hasta que lleguen." },
            reply: { A: "Ofelia da la bufanda. «Era de mi marido. Da igual.»", B: "Ofelia se quita la bufanda sin dudar. «Era de mi marido. Él habría hecho lo mismo.»", C: "Ofelia se quita la bufanda sin pensarlo. «Era de mi marido. Le habría gustado que sirviera para algo.»" },
            mood: "sad", end: "ambulancia",
          },
          {
            id: "policia",
            say: { A: "También quiero a la policía. Es un robo.", B: "Manden también a la policía, por favor. Es un robo.", C: "Envíen también a la policía: esto no es un accidente, es un asalto." },
            reply: { A: "«Van los dos.» Ofelia se pone nerviosa. «¿La policía? ¿Para qué?»", B: "«Enviamos las dos unidades.» Ofelia se pone rígida. «¿La policía? ¿Para qué quieres a la policía?»", C: "«Van ambas unidades.» Ofelia se tensa de pronto. «¿Policía? ¿Y para qué, si yo ya les he dicho todo?»" },
            mood: "worried", end: "policia",
          },
        ],
      },
      relato: {
        who: "ofelia", mood: "neutral",
        line: {
          A: "Ofelia habla despacio. «Yo salgo de noche con la linterna. Miro. Nada más. Hoy vi a este hombre caer. Los chicos le pegaron.»",
          B: "Ofelia habla sin mirarte. «Yo salgo de noche con la linterna, miro y vuelvo a casa. Hoy lo vi caer. Los chicos le pegaron por la billetera.»",
          C: "Ofelia habla sin mirarte, como si el relato fuera para la linterna. «Yo salgo de noche a mirar, nada más. Hoy lo vi caer. Dos chicos, la billetera, un golpe. Lo de siempre, pero esta vez delante de mí.»",
        },
        options: [
          {
            id: "testigo",
            say: { A: "Usted es testigo. Tiene que decirlo a la policía.", B: "Entonces usted es testigo. Tiene que contarle esto a la policía.", C: "Entonces es usted testigo directa. Esto hay que contárselo a la policía, con sombras y todo." },
            reply: { A: "Ofelia niega. «No. La policía no me cree. Dicen que estoy loca.»", B: "Ofelia niega con la cabeza. «La policía no me cree. Dicen que soy la loca de la linterna.»", C: "Ofelia niega despacio. «La policía no me cree. Para ellos soy la loca de la linterna. Tú decides.»" },
            mood: "sad", next: "beto",
          },
          {
            id: "ambulancia-ya",
            say: { A: "Primero la ambulancia. Después hablamos.", B: "Primero la ambulancia. Lo demás, después.", C: "Primero la ambulancia; las historias, después." },
            reply: { A: "Ofelia asiente. «Sí. Llama tú. Yo ilumino.»", B: "Ofelia asiente. «Llama tú. Yo lo ilumino para que lo vean.»", C: "Ofelia asiente. «Llama tú. Yo sostengo la luz; es lo único que sé hacer.»" },
            mood: "worried", next: "llamada",
          },
          {
            id: "dudar",
            say: { A: "¿Y por qué tiene sangre en la manga?", B: "¿Y por qué tiene sangre en la manga del abrigo?", C: "Una pregunta incómoda: ¿por qué tiene sangre en la manga del abrigo?" },
            reply: { A: "Ofelia mira la manga. «Lo toqué. Para ver si respiraba.» Te mira. «¿Crees que fui yo?»", B: "Ofelia se mira la manga. «Lo toqué para ver si respiraba.» Te mira fijo. «¿Tú crees que fui yo?»", C: "Ofelia se mira la manga como si no fuera suya. «Lo toqué para ver si respiraba.» Y te mira con una calma helada. «¿Crees que fui yo?»" },
            mood: "angry", end: "policia",
          },
        ],
      },
      beto: {
        who: "beto", mood: "pain",
        line: {
          A: "El hombre se sienta despacio. «Me llamo Beto. Dos chicos. Me pegaron. Esta señora… me ayudó.» Ofelia sonríe por primera vez.",
          B: "El hombre consigue sentarse. «Me llamo Beto. Eran dos chicos, me pegaron por la billetera. Esta señora me tapó con su abrigo.» Ofelia sonríe por primera vez.",
          C: "El hombre logra sentarse, apoyado en la pared. «Me llamo Beto. Dos chicos, la billetera, un golpe. Esta señora me tapó con su abrigo y no se fue.» Ofelia sonríe por primera vez en toda la noche.",
        },
        options: [
          {
            id: "ambulancia2",
            say: { A: "Beto, no te muevas. Llamo a la ambulancia.", B: "Beto, quédate quieto. Llamo a la ambulancia ahora mismo.", C: "Beto, no te muevas más. Llamo a la ambulancia; una herida así no se negocia." },
            reply: { A: "Beto asiente. «Está bien. Gracias a los dos.»", B: "Beto asiente despacio. «Está bien. Gracias. A los dos.»", C: "Beto asiente con cuidado. «De acuerdo. Gracias a los dos; sobre todo a la de la linterna.»" },
            mood: "worried", end: "ambulancia",
          },
          {
            id: "caminar",
            say: { A: "¿Puedes caminar? La clínica está cerca.", B: "¿Puedes caminar? La clínica está a cinco minutos.", C: "¿Te ves capaz de caminar? La clínica está a cinco minutos y te acompañamos." },
            reply: { A: "Beto se levanta con tu ayuda. «Sí. Despacio.»", B: "Beto se levanta apoyado en ti. «Sí. Despacio, pero sí.»", C: "Beto se incorpora apoyado en ti y en la pared. «Sí. Despacio, pero sí. Vamos.»" },
            mood: "neutral", end: "caminan",
          },
          {
            id: "ladrones",
            say: { A: "¿Cómo eran los chicos? La policía va a preguntar.", B: "¿Cómo eran los chicos? La policía lo va a preguntar.", C: "Describe a los chicos ahora, mientras lo recuerdas; la policía lo va a preguntar." },
            reply: { A: "Beto piensa. «Uno con gorra roja. El otro… no sé.» Ofelia: «Capucha gris.»", B: "Beto piensa. «Uno con gorra roja. El otro no sé.» Ofelia completa: «Capucha gris y zapatillas blancas.»", C: "Beto se esfuerza. «Uno con gorra roja; el otro, ni idea.» Ofelia completa sin dudar: «Capucha gris, zapatillas blancas, cojea del pie izquierdo.»" },
            mood: "neutral", end: "policia",
          },
        ],
      },
      // ── cuchillo: ella retrocede.
      "cuchillo-inicio": {
        who: "ofelia", mood: "terror",
        line: {
          A: "Ofelia ve tu cuchillo y retrocede. La linterna tiembla. «¡Fuiste tú! ¡Tú le hiciste esto! ¡No te acerques!»",
          B: "Ofelia ve el cuchillo y retrocede hasta la pared. La linterna te apunta a la cara. «¡Fuiste tú! ¡Tú le abriste la cabeza! ¡No te acerques ni un paso!»",
          C: "Ofelia ve el cuchillo y retrocede hasta chocar con la pared. La linterna te apunta a la cara como un arma. «¡Fuiste tú! ¡Has vuelto a rematarlo! ¡Ni un paso más!»",
        },
        options: [
          {
            id: "cuchillo-no",
            say: { A: "¡No! Lo guardo. Yo no fui. Lo acabo de encontrar, como usted.", B: "¡No, señora! Lo guardo. Yo no fui; acabo de llegar, igual que usted.", C: "¡No, señora! Ya lo guardo. Yo no le he hecho nada; acabo de llegar, igual que usted." },
            reply: { A: "Ofelia no baja la linterna. «Entonces llama a la ambulancia. Ahora. Delante de mí.»", B: "Ofelia no baja la linterna. «Entonces demuéstralo: llama a la ambulancia ahora, delante de mí.»", C: "Ofelia mantiene la linterna en tu cara. «Entonces demuéstralo. Llama a la ambulancia ahora mismo, donde yo te vea.»" },
            mood: "worried", next: "cuchillo-prueba",
          },
          {
            id: "cuchillo-venda",
            say: { A: "Es para cortar tela. Para una venda. Mire.", B: "Es para cortar una venda, nada más. Mire: corto mi manga.", C: "Lo uso para cortar una venda, nada más. Mire: me corto la manga para taparle la herida." },
            reply: { A: "Cortas tu manga y la pones en la herida. Ofelia baja la linterna un poco.", B: "Cortas tu manga y presionas la herida con la tela. Ofelia baja la linterna, despacio.", C: "Cortas la manga y presionas la herida con la tela. Ofelia baja la linterna un centímetro, que en ella es un voto de confianza." },
            mood: "neutral", next: "cuchillo-prueba",
          },
          {
            id: "cuchillo-irse",
            say: { A: "¡Está loca! Me voy.", B: "¡Usted está loca! Me voy de aquí.", C: "Usted no está bien. Me voy antes de que esto empeore." },
            reply: { A: "Ofelia grita: «¡Asesino! ¡Policía!» Las ventanas se encienden.", B: "Ofelia grita al callejón entero: «¡Asesino! ¡Policía!» Se encienden las ventanas una por una.", C: "Ofelia grita con una voz que no parece suya: «¡Asesino! ¡Policía!» Las ventanas del callejón se encienden una a una." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-prueba": {
        who: "beto", mood: "pain",
        line: {
          A: "Beto abre los ojos. Ve el cuchillo guardado y a Ofelia. «No… no fue él. Eran dos chicos.» Ofelia baja la linterna.",
          B: "Beto abre los ojos y ve la escena: tu cuchillo, la linterna, Ofelia pegada a la pared. «No fue… no fue esta persona. Eran dos chicos.» Ofelia baja la linterna del todo.",
          C: "Beto abre los ojos, ve el cuchillo guardado y a Ofelia contra la pared, y entiende todo. «No fue… esta persona. Eran dos chicos con gorra.» Ofelia baja la linterna, avergonzada.",
        },
        options: [
          {
            id: "cuchillo-ambulancia",
            say: { A: "Gracias, Beto. Ahora llamo a la ambulancia.", B: "Gracias, Beto. Ahora sí, llamo a la ambulancia.", C: "Gracias, Beto. Aclarado esto, llamo a la ambulancia." },
            reply: { A: "Ofelia dice bajito: «Perdón. Tenía miedo.»", B: "Ofelia murmura: «Perdona. Tenía mucho miedo.»", C: "Ofelia murmura, sin mirarte: «Perdona. El miedo me hace ver asesinos.»" },
            mood: "worried", end: "ambulancia",
          },
          {
            id: "cuchillo-reproche",
            say: { A: "Señora, casi me acusa de asesino. Tenga cuidado.", B: "Señora, casi me acusa de asesinato. Tenga más cuidado con lo que grita.", C: "Señora, estuvo a un grito de acusarme de asesinato. Ojalá tenga tanto cuidado con sus palabras como con su linterna." },
            reply: { A: "Ofelia levanta la cabeza. «Y tú ten cuidado con tu cuchillo.»", B: "Ofelia levanta la barbilla. «Y tú ten cuidado con ese cuchillo, que asusta a cualquiera.»", C: "Ofelia levanta la barbilla, digna. «Y tú ten cuidado con ese cuchillo; en un callejón, asusta más que una loca con linterna.»" },
            mood: "angry", end: "cuchillo-fria",
          },
          {
            id: "cuchillo-caminar",
            say: { A: "Beto, ¿puedes caminar? Vamos a la clínica.", B: "Beto, ¿puedes caminar? Te llevamos a la clínica.", C: "Beto, si puedes caminar, te llevamos entre los dos a la clínica." },
            reply: { A: "Beto se levanta despacio. Ofelia lo sostiene del otro lado.", B: "Beto se levanta despacio. Ofelia lo sostiene por el otro brazo, sin soltar la linterna.", C: "Beto se incorpora despacio. Ofelia lo sostiene por el otro brazo, con la linterna en la boca." },
            mood: "neutral", end: "caminan",
          },
        ],
      },
      // ── pistola: ella grita.
      "pistola-inicio": {
        who: "ofelia", mood: "terror",
        line: {
          A: "Ofelia ve la pistola y grita. «¡Socorro! ¡Lo va a matar!» Se encienden ventanas. Alguien grita desde arriba: «¡Llamen a la policía!»",
          B: "Ofelia ve la pistola y grita con todas sus fuerzas. «¡Socorro! ¡Lo va a rematar!» Se encienden ventanas y una voz grita desde un balcón: «¡Ya llamo a la policía!»",
          C: "Ofelia ve la pistola y suelta un grito que despierta medio barrio. «¡Socorro! ¡Lo va a rematar!» Se encienden ventanas; desde un balcón alguien anuncia: «¡Ya estoy llamando a la policía!»",
        },
        options: [
          {
            id: "pistola-guardar",
            say: { A: "¡No! ¡La guardo! Vengo a ayudar, no a matar.", B: "¡No, no! Ya la guardo. Vengo a ayudar, no a hacerle daño a nadie.", C: "¡No! Ya la guardo. He venido a ayudar, no a hacerle daño a nadie; mírela, guardada." },
            reply: { A: "Ofelia deja de gritar. «Entonces llama a la ambulancia. Ya.»", B: "Ofelia deja de gritar, sin dejar de temblar. «Entonces demuéstralo. Llama a la ambulancia.»", C: "Ofelia deja de gritar, aunque sigue temblando. «Pues demuéstralo. Llama a la ambulancia y no te muevas de ahí.»" },
            mood: "worried", next: "pistola-vecinos",
          },
          {
            id: "pistola-ladrones",
            say: { A: "La llevo por los ladrones. ¿Dónde están?", B: "La llevo por los ladrones. ¿Por dónde se fueron?", C: "La llevo precisamente por gente como la que hizo esto. ¿Por dónde se han ido?" },
            reply: { A: "Ofelia grita más. «¡No! ¡Nada de armas! ¡Ya hay sangre suficiente!»", B: "Ofelia grita todavía más. «¡No! ¡Ni se te ocurra! ¡Ya hay sangre suficiente esta noche!»", C: "Ofelia grita todavía más fuerte. «¡No! ¡Ni se te ocurra perseguir a nadie! ¡Ya hay sangre suficiente por hoy!»" },
            mood: "scared", next: "pistola-vecinos",
          },
          {
            id: "pistola-huir",
            say: { A: "Esto no es para mí. Me voy.", B: "Esto me supera. Me voy.", C: "Esto no es mi noche ni mi guerra. Me voy." },
            reply: { A: "Corres. Detrás, Ofelia grita tu descripción a las ventanas.", B: "Sales corriendo. Detrás de ti, Ofelia describe tu ropa a gritos a todo el callejón.", C: "Sales corriendo mientras Ofelia describe tu ropa, tu altura y tu pistola a todas las ventanas encendidas." },
            mood: "scared", end: "pistola-corre",
          },
        ],
      },
      "pistola-vecinos": {
        who: "beto", mood: "scared",
        line: {
          A: "Beto se despierta con los gritos. Ve la pistola guardada. «¿Otra vez? ¿Más armas? Por favor, no.» Los vecinos miran desde las ventanas.",
          B: "Beto despierta con los gritos y ve el bulto de la pistola. «¿Otra vez? ¿Ahora con pistola? Por favor, no.» Desde las ventanas, los vecinos no se pierden nada.",
          C: "Beto despierta entre los gritos, ve el bulto de la pistola y cierra los ojos. «¿Otra vez? ¿Ahora con pistola? Por favor, déjenme morir tranquilo.» Los vecinos siguen la escena desde las ventanas.",
        },
        options: [
          {
            id: "pistola-calmar",
            say: { A: "Tranquilo, Beto. Nadie va a disparar. Viene la ambulancia.", B: "Tranquilo, Beto. Nadie va a disparar nada. La ambulancia ya viene.", C: "Tranquilo, Beto. Aquí nadie va a disparar nada; la ambulancia está en camino." },
            reply: { A: "Beto cierra los ojos. «Bueno. Pero que llegue rápido.»", B: "Beto cierra los ojos. «Bueno. Que llegue rápido, que ya vi suficiente.»", C: "Beto cierra los ojos. «Que llegue rápido, que esta noche ya me ha enseñado demasiado.»" },
            mood: "worried", end: "ambulancia",
          },
          {
            id: "pistola-explicar",
            say: { A: "Vecinos, no soy ladrón. Llamen a la ambulancia, no a la policía.", B: "¡Vecinos! No soy el ladrón. Llamen a una ambulancia, no a la policía.", C: "¡Vecinos, escuchen! No soy el agresor; lo que hace falta aquí es una ambulancia, no una patrulla." },
            reply: { A: "Una voz grita: «¡Ya vienen los dos!»", B: "Una voz desde arriba: «¡Ya vienen los dos, no te preocupes!»", C: "Una voz desde un balcón: «¡Ya vienen los dos, y el helicóptero si hace falta!»" },
            mood: "worried", end: "policia",
          },
          {
            id: "pistola-ofelia",
            say: { A: "Señora, perdón por el susto. ¿Me ayuda con él?", B: "Señora, perdone el susto. ¿Me ayuda a sostenerlo?", C: "Señora, perdone el susto; ahora sí, ¿me ayuda a sostenerlo?" },
            reply: { A: "Ofelia duda. Después se arrodilla a tu lado. «Está bien. Pero esa cosa, lejos.»", B: "Ofelia duda, luego se arrodilla a tu lado. «Está bien. Pero esa cosa, bien lejos de mí.»", C: "Ofelia duda, después se arrodilla a tu lado con dificultad. «Está bien. Pero esa cosa se queda lejos de mi linterna.»" },
            mood: "neutral", end: "caminan",
          },
        ],
      },
      // ── granada: evacuación.
      "granada-inicio": {
        who: "ofelia", mood: "furious",
        line: {
          A: "Ofelia ve la granada. No grita. Se levanta y agarra a Beto por los brazos. «¡Ayúdame! ¡Hay que sacarlo de aquí! ¡Todos fuera del callejón!»",
          B: "Ofelia ve la granada y, en lugar de gritar, se levanta y agarra a Beto por debajo de los brazos. «¡No te quedes mirando! ¡Hay que sacarlo de aquí! ¡Todo el mundo fuera del callejón!»",
          C: "Ofelia ve la granada y pasa del miedo a la acción sin escalas: agarra a Beto por debajo de los brazos. «¡No te quedes ahí! ¡Hay que sacarlo! ¡Todo el mundo fuera del callejón, ya!»",
        },
        options: [
          {
            id: "granada-ayudar",
            say: { A: "¡Sí! Yo las piernas. Uno, dos, tres.", B: "¡Voy! Yo lo tomo de las piernas. A la de tres.", C: "¡Voy! Yo lo agarro de las piernas; a la de tres, y despacio con la cabeza." },
            reply: { A: "Sacan a Beto a la calle. Él grita de dolor. Las ventanas se encienden.", B: "Arrastran a Beto hasta la calle. Él grita de dolor y las ventanas se encienden una tras otra.", C: "Arrastran a Beto hasta la calle entre quejidos. Las ventanas se encienden como si fuera un estreno." },
            mood: "scared", next: "granada-calle",
          },
          {
            id: "granada-falsa",
            say: { A: "¡Señora, es falsa! ¡No lo mueva! Está herido.", B: "¡Señora, es de mentira! ¡No lo mueva, que tiene la cabeza rota!", C: "¡Señora, es una réplica! ¡No lo mueva, que con esa cabeza moverlo es peor!" },
            reply: { A: "Ofelia no te escucha. Sigue arrastrando a Beto. «¡Falsa! ¡Eso dicen todos!»", B: "Ofelia ni te escucha. Sigue arrastrando a Beto. «¡De mentira! ¡Eso dicen siempre antes del boom!»", C: "Ofelia no te hace ni caso y sigue arrastrando a Beto. «¡Una réplica! Eso es lo que dicen siempre justo antes del boom.»" },
            mood: "furious", next: "granada-calle",
          },
          {
            id: "granada-tirar",
            say: { A: "La tiro lejos. Al contenedor. ¡Listo!", B: "La tiro al contenedor del fondo. ¡Listo, ya está lejos!", C: "La lanzo al contenedor del fondo del callejón. ¡Listo, problema resuelto!" },
            reply: { A: "Ofelia grita: «¡La tiró! ¡Corre!» Y corre con Beto a cuestas.", B: "Ofelia grita: «¡La tiró! ¡Al suelo todos!» Y sale del callejón con Beto a rastras.", C: "Ofelia grita «¡La ha tirado! ¡Al suelo!» y abandona el callejón con Beto a rastras y una fuerza que nadie esperaba." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-calle": {
        who: "beto", mood: "pain",
        line: {
          A: "En la calle, Beto se sienta contra la pared. «¿Una granada? ¿Después de todo esto, una granada?» Y se ríe, con la cabeza sangrando.",
          B: "Ya en la calle, Beto se apoya en la pared. «¿Una granada? ¿Me pegan, me roban y ahora una granada?» Y empieza a reírse con la cabeza ensangrentada.",
          C: "En la calle, Beto se apoya en la pared y, contra todo pronóstico, se ríe. «¿Una granada? Me pegan, me roban y, de postre, una granada. Qué noche tan completa.»",
        },
        options: [
          {
            id: "granada-plastico",
            say: { A: "Es de plástico. Perdón. Mal momento.", B: "Es de plástico. Perdón, fue un pésimo momento para sacarla.", C: "Es de plástico, lo juro. Perdón; no hubo peor momento para que se viera." },
            reply: { A: "Beto se ríe más. Ofelia se sienta en el suelo, agotada. «Me van a matar ustedes.»", B: "Beto se ríe más fuerte. Ofelia se deja caer en el suelo, agotada. «Entre todos me van a matar a mí.»", C: "Beto ya no puede parar de reír. Ofelia se deja caer en la acera, exhausta. «Entre el herido y el de la granada van a terminar conmigo.»" },
            mood: "laugh", end: "granada-risa",
          },
          {
            id: "granada-ambulancia",
            say: { A: "Basta de risa. Llamo a la ambulancia. Ya.", B: "Ya está bien de risas. Llamo a la ambulancia ahora mismo.", C: "Se acabaron las risas: llamo a la ambulancia ya, que esa cabeza no es broma." },
            reply: { A: "Ofelia asiente. «Y diles que estamos en la calle, no en el callejón.»", B: "Ofelia asiente. «Y diles que estamos en la calle; en el callejón ya no entra nadie.»", C: "Ofelia asiente. «Y diles que estamos en la calle; al callejón no vuelve nadie esta noche.»" },
            mood: "worried", end: "ambulancia",
          },
          {
            id: "granada-vecinos",
            say: { A: "¡Vecinos! ¡Hay una granada en el callejón! ¡No entren!", B: "¡Vecinos! ¡Hay una granada en el callejón! ¡Que nadie entre!", C: "¡Vecinos, atención! ¡Hay una granada en el callejón! ¡Que nadie entre ni se acerque!" },
            reply: { A: "Gritos, puertas, sirenas. Alguien ya llamó a todos.", B: "Gritos, portazos, sirenas a lo lejos. Alguien ya avisó a todo el mundo.", C: "Gritos, portazos, sirenas en aumento. Alguien ya ha avisado a todas las fuerzas disponibles." },
            mood: "scared", end: "granada-helicoptero",
          },
        ],
      },
      // ── gas: ella saca el suyo.
      "gas-inicio": {
        who: "ofelia", mood: "angry",
        line: {
          A: "Ofelia ve tu gas pimienta. Saca uno del bolsillo. «Yo también tengo. Ni un paso más. ¿Quién eres?»",
          B: "Ofelia ve tu gas pimienta y saca el suyo del bolsillo del abrigo, sin temblar. «Yo también tengo. Ni un paso más. ¿Quién eres y qué quieres?»",
          C: "Ofelia ve tu gas pimienta y responde sacando el suyo del abrigo, con pulso firme. «Yo también tengo, y lo sé usar. Ni un paso más. ¿Quién eres y qué haces en mi callejón?»",
        },
        options: [
          {
            id: "gas-bajar",
            say: { A: "Lo guardo. Usted también. Hay un herido.", B: "Lo guardo, y usted guarde el suyo. Hay un herido entre los dos.", C: "Yo guardo el mío y usted el suyo: hay un hombre sangrando entre nosotros y esto no ayuda." },
            reply: { A: "Ofelia baja el gas. «Está bien. Pero te vigilo.»", B: "Ofelia baja el gas despacio. «Está bien. Pero no te quito el ojo.»", C: "Ofelia baja el gas con lentitud. «De acuerdo. Pero no te pierdo de vista ni un segundo.»" },
            mood: "neutral", next: "gas-tregua",
          },
          {
            id: "gas-primero",
            say: { A: "¡Usted primero! Yo no confío.", B: "¡Usted primero! Yo no me fío de nadie en este callejón.", C: "¡Usted primero! En este callejón no me fío ni de la linterna." },
            reply: { A: "Las dos manos tiemblan. Beto dice desde el suelo: «¿Alguien puede ayudarme?»", B: "Los dos sostienen el gas sin bajarlo. Beto, desde el suelo: «¿Alguien me ayuda o terminan primero?»", C: "Nadie baja nada. Beto, desde el suelo: «Cuando terminen el duelo, ¿alguien me ayuda?»" },
            mood: "scared", next: "gas-tregua",
          },
          {
            id: "gas-rociar",
            say: { A: "¡No se acerque!", B: "¡Le dije que no se acerque!", C: "¡Le he dicho que no se acerque!" },
            reply: { A: "Rocías. Ella rocía. Los dos tosen. Beto se arrastra lejos de la nube.", B: "Rocías y ella rocía al mismo tiempo. Nube de gas, tos, lágrimas. Beto se arrastra lejos, el único con sentido común.", C: "Rocías, ella rocía, y el callejón se llena de una nube que los deja a los dos llorando. Beto se arrastra fuera, el único sensato." },
            mood: "pain", end: "gas-nube",
          },
        ],
      },
      "gas-tregua": {
        who: "beto", mood: "pain",
        line: {
          A: "Beto habla desde el suelo. «Ella me ayudó. Yo la vi. Ustedes dos, con gas, parecen tontos. Llamen a alguien.»",
          B: "Beto habla desde el suelo, agotado. «La señora me ayudó, yo la vi. Y ustedes dos con el gas en la mano parecen dos tontos. Llamen a alguien, por favor.»",
          C: "Beto habla desde el suelo, con la poca voz que le queda. «La señora me ayudó, yo lo vi. Y ustedes dos, apuntándose con gas, son el espectáculo más ridículo de la noche. Llamen a alguien.»",
        },
        options: [
          {
            id: "gas-ambulancia",
            say: { A: "Tiene razón. Llamo a la ambulancia. Señora, guarde eso.", B: "Tiene razón. Llamo a la ambulancia. Señora, guarde eso, por favor.", C: "Tiene toda la razón. Llamo a la ambulancia. Señora, guarde eso; ya hemos hecho el ridículo suficiente." },
            reply: { A: "Ofelia guarda el gas. «Está bien. Hoy nadie llora más.»", B: "Ofelia guarda el gas. «Está bien. Por hoy, nadie llora más en este callejón.»", C: "Ofelia guarda el gas. «De acuerdo. Hoy en este callejón ya no llora nadie más.»" },
            mood: "worried", end: "ambulancia",
          },
          {
            id: "gas-clinica",
            say: { A: "Lo llevamos a la clínica. Entre los dos. Sin gas.", B: "Lo llevamos a la clínica entre los dos. El gas, en el bolsillo.", C: "Lo llevamos a la clínica entre los dos, con el gas en el bolsillo y la vergüenza en la cara." },
            reply: { A: "Ofelia asiente. Guarda el gas y toma a Beto del brazo.", B: "Ofelia asiente, guarda el gas y toma a Beto del brazo. «Vamos, pesado.»", C: "Ofelia asiente, guarda el gas y toma a Beto del brazo. «Vamos, que pesas más que mis culpas.»" },
            mood: "neutral", end: "caminan",
          },
          {
            id: "gas-policia",
            say: { A: "Llamo a la policía. Ella tiene gas. Yo también. Que decidan ellos.", B: "Llamo a la policía. Ella lleva gas, yo llevo gas, y que lo decidan ellos.", C: "Llamo a la policía: ella va armada, yo voy armado y hay un herido. Que lo aclaren ellos." },
            reply: { A: "Ofelia se encoge de hombros. «Llama. A mí ya me conocen.»", B: "Ofelia se encoge de hombros. «Llama. A mí ya me conocen en la comisaría.»", C: "Ofelia se encoge de hombros. «Llama. En la comisaría ya me conocen; tengo hasta silla propia.»" },
            mood: "neutral", end: "policia",
          },
        ],
      },
      // ── lápiz: tomar nota como testigo.
      "lapiz-inicio": {
        who: "ofelia", mood: "surprised",
        line: {
          A: "Ofelia ve tu lápiz. «¿Escribes? ¡Bien! Yo lo vi todo y nadie me cree. Escribe: dos chicos, gorra roja, capucha gris. Las once y diez.»",
          B: "Ofelia ve el lápiz y se le ilumina la cara. «¿Sabes escribir? ¡Por fin! Yo lo vi todo y nadie me toma en serio. Apunta: dos chicos, gorra roja y capucha gris. Las once y diez.»",
          C: "Ofelia ve el lápiz y, por primera vez, te mira como a un aliado. «¿Escribes? ¡Al fin alguien útil! Yo lo vi todo y nadie me cree. Apunta: dos chicos, gorra roja y capucha gris, las once y diez en punto.»",
        },
        options: [
          {
            id: "lapiz-anotar",
            say: { A: "Anoto. Gorra roja, capucha gris, once y diez. ¿Qué más?", B: "Anotado: gorra roja, capucha gris, once y diez. ¿Qué más recuerda?", C: "Anotado: gorra roja, capucha gris, once y diez. Siga, que tiene mejor memoria que la policía." },
            reply: { A: "Ofelia habla rápido. «El de la capucha cojea. Se fueron hacia la avenida. Tiraron la billetera en el contenedor.»", B: "Ofelia dispara datos. «El de la capucha cojea del pie izquierdo. Fueron hacia la avenida. La billetera la tiraron en el contenedor.»", C: "Ofelia dispara datos como una profesional. «El de la capucha cojea del izquierdo. Fueron hacia la avenida. La billetera, sin dinero, está en el contenedor.»" },
            mood: "neutral", next: "lapiz-billetera",
          },
          {
            id: "lapiz-primero",
            say: { A: "Primero la ambulancia. Después escribo todo.", B: "Primero llamo a la ambulancia. Después apunto todo lo que quiera.", C: "Primero la ambulancia; después apunto todo lo que quiera, con fecha y hora." },
            reply: { A: "Ofelia asiente. «Sí. Pero no pierdas el lápiz.»", B: "Ofelia asiente. «Bien. Pero no sueltes ese lápiz.»", C: "Ofelia asiente. «Bien pensado. Pero el lápiz no lo sueltes, que luego se olvidan los detalles.»" },
            mood: "worried", end: "ambulancia",
          },
          {
            id: "lapiz-herido",
            say: { A: "Señor, ¿cómo se llama? Escribo su nombre para la ambulancia.", B: "Señor, ¿cómo se llama? Apunto su nombre para la ambulancia.", C: "Señor, dígame su nombre; se lo apunto para los paramédicos y para la denuncia." },
            reply: { A: "El hombre abre un ojo. «Beto. Roberto Salas. Alérgico a la penicilina.»", B: "El hombre abre un ojo. «Beto. Roberto Salas. Y apunta: alérgico a la penicilina.»", C: "El hombre entreabre un ojo. «Roberto Salas, Beto. Y apunta en grande: alérgico a la penicilina.»" },
            mood: "pain", next: "lapiz-billetera",
          },
        ],
      },
      "lapiz-billetera": {
        who: "beto", mood: "worried",
        line: {
          A: "Beto se sienta. «¿La billetera está en el contenedor? Ahí tengo la foto de mi hija.» Ofelia ilumina el contenedor con la linterna.",
          B: "Beto consigue sentarse. «¿La billetera está en el contenedor? Ahí llevo la única foto de mi hija.» Ofelia apunta la linterna al contenedor del fondo.",
          C: "Beto se incorpora. «¿La billetera está en el contenedor? Ahí llevo la única foto que tengo de mi hija.» Ofelia dirige la linterna al contenedor del fondo, como un faro.",
        },
        options: [
          {
            id: "lapiz-buscar",
            say: { A: "La busco. Señora, ilumine. Beto, no te muevas.", B: "Voy a buscarla. Señora, ilumine. Beto, tú quieto.", C: "Voy por ella. Señora, no mueva la luz. Beto, ni un movimiento." },
            reply: { A: "Encuentras la billetera. Sin dinero. Con la foto. Beto llora.", B: "Encuentras la billetera entre cartones: sin dinero, con la foto. Beto llora sin ruido.", C: "Encuentras la billetera entre cartones: vacía de dinero, llena de la foto. Beto llora sin hacer ruido." },
            mood: "sad", end: "lapiz-foto",
          },
          {
            id: "lapiz-denuncia",
            say: { A: "Escribo todo en una hoja. Beto, firma. Es la denuncia.", B: "Lo escribo todo en una hoja y tú firmas, Beto. Así la denuncia ya está hecha.", C: "Lo dejo todo por escrito en una hoja: hora, descripción, testigo. Firma, Beto; la denuncia ya está medio hecha." },
            reply: { A: "Beto firma con la mano temblando. Ofelia firma también. «Testigo: Ofelia.»", B: "Beto firma con mano temblorosa. Ofelia firma debajo: «Testigo, Ofelia, la de la linterna».", C: "Beto firma con mano temblorosa y Ofelia añade debajo, con letra enorme: «Testigo: Ofelia, la de la linterna. Que conste.»" },
            mood: "neutral", end: "lapiz-denuncia",
          },
          {
            id: "lapiz-ambulancia",
            say: { A: "La foto después. Ahora, ambulancia.", B: "La billetera después. Ahora llamo a la ambulancia.", C: "La billetera puede esperar; la cabeza no. Llamo a la ambulancia." },
            reply: { A: "Beto asiente. Ofelia guarda tu hoja en el bolsillo. «Yo la cuido.»", B: "Beto asiente. Ofelia se guarda tu hoja. «Yo la cuido hasta que venga la policía.»", C: "Beto asiente. Ofelia se guarda la hoja en el abrigo. «Yo la custodio hasta que llegue la policía.»" },
            mood: "worried", end: "ambulancia",
          },
        ],
      },
      // ── libro: almohada.
      "libro-inicio": {
        who: "ofelia", mood: "surprised",
        line: {
          A: "Ofelia ve tu libro. «¿Un libro? ¡Perfecto! Ponlo debajo de su cabeza. Despacio. Es mejor que el suelo.»",
          B: "Ofelia ve tu libro y lo señala con la linterna. «¿Un libro? Perfecto, ponlo debajo de su cabeza, despacio. Es mejor que estas piedras.»",
          C: "Ofelia ve el libro y lo señala con la linterna como quien encuentra lo que faltaba. «¿Un libro? Justo. Pónselo bajo la cabeza, despacio. Mejor un libro que estos adoquines.»",
        },
        options: [
          {
            id: "libro-almohada",
            say: { A: "Sí. Despacio. Señor, no se mueva.", B: "Claro. Despacio. Señor, no se mueva, que le pongo algo debajo.", C: "Claro. Despacio, señor, no se mueva; le pongo el libro bajo la cabeza." },
            reply: { A: "El hombre abre los ojos. Ve el libro. «¿Poesía? Qué raro.»", B: "El hombre abre los ojos y lee la tapa. «¿Poesía? Hoy sangro sobre poesía. Qué noche.»", C: "El hombre abre los ojos y lee la tapa desde abajo. «¿Poesía? Sangrar sobre poesía. Al menos tiene estilo.»" },
            mood: "pain", next: "libro-beto",
          },
          {
            id: "libro-primeros",
            say: { A: "Tiene un capítulo de primeros auxilios. Miro.", B: "Tiene un capítulo de primeros auxilios al final. Lo busco.", C: "Tiene un capítulo de primeros auxilios al final; lo busco antes de tocarlo." },
            reply: { A: "Ofelia se ríe. «¿En un libro de poesía?» Lees: «No mover la cabeza».", B: "Ofelia se ríe por primera vez. «¿En un libro de poesía?» Encuentras la página: no mover el cuello, presionar la herida.", C: "Ofelia se ríe, incrédula. «¿Primeros auxilios en un libro de poesía?» Y sin embargo ahí está: no mover el cuello, presionar la herida, hablarle." },
            mood: "neutral", next: "libro-beto",
          },
          {
            id: "libro-no",
            say: { A: "No. Si tiene el cuello mal, no lo muevo. Llamo.", B: "No, si tiene el cuello lesionado no se mueve nada. Llamo a la ambulancia.", C: "No. Con una posible lesión de cuello no se mueve ni un libro. Llamo a la ambulancia." },
            reply: { A: "Ofelia asiente. «Tienes razón. Yo ilumino.»", B: "Ofelia asiente despacio. «Tienes razón. Yo ilumino, tú llamas.»", C: "Ofelia asiente. «Tienes razón. Yo sostengo la luz y tú hablas.»" },
            mood: "worried", end: "ambulancia",
          },
        ],
      },
      "libro-beto": {
        who: "beto", mood: "neutral",
        line: {
          A: "Beto habla con el libro bajo la cabeza. «Mi mujer leía poesía. Me leía en la cama. ¿Me lees algo? Mientras llega la ambulancia.»",
          B: "Beto habla con la cabeza sobre el libro. «Mi mujer leía poesía. Me leía por las noches. ¿Me lees algo mientras llega la ambulancia?»",
          C: "Beto habla con la cabeza apoyada en el libro. «Mi mujer leía poesía en voz alta, por las noches. ¿Me lees algo, mientras llega la ambulancia? Lo que sea.»",
        },
        options: [
          {
            id: "libro-leer",
            say: { A: "Sí. Señora, ilumine la página. Leo.", B: "Claro. Señora, apunte la linterna a la página. Leo.", C: "Claro. Señora, ilumine la página; leo lo primero que salga." },
            reply: { A: "Lees. Ofelia ilumina. Beto cierra los ojos. Llega la ambulancia en medio del poema.", B: "Lees bajo la linterna de Ofelia. Beto cierra los ojos y sonríe. La ambulancia llega a mitad del poema.", C: "Lees bajo la linterna de Ofelia. Beto cierra los ojos y sonríe con la cabeza rota. La ambulancia llega a mitad del poema, y nadie interrumpe." },
            mood: "smile", end: "libro-poema",
          },
          {
            id: "libro-llamar-antes",
            say: { A: "Primero llamo. Después leo. Prometido.", B: "Primero llamo a la ambulancia. Después te leo, prometido.", C: "Primero llamo a la ambulancia; después te leo lo que quieras, prometido." },
            reply: { A: "Beto asiente. «Está bien. Pero no te olvides.»", B: "Beto asiente. «Está bien. Pero no te olvides de la promesa.»", C: "Beto asiente. «Está bien. Pero las promesas en los callejones también cuentan.»" },
            mood: "worried", end: "ambulancia",
          },
          {
            id: "libro-ofelia-lee",
            say: { A: "Señora, lea usted. Yo llamo.", B: "Señora, lea usted. Yo llamo a la ambulancia.", C: "Señora, lea usted mientras yo llamo; tiene mejor voz para esto." },
            reply: { A: "Ofelia toma el libro. Lee despacio, con la linterna. Beto sonríe.", B: "Ofelia toma el libro y lee despacio, con la linterna pegada a la página. Beto sonríe.", C: "Ofelia toma el libro y lee despacio, la linterna pegada a la página, la voz más suave de lo que esperabas. Beto sonríe." },
            mood: "smile", end: "libro-poema",
          },
        ],
      },
      // ── corazón: ella se derrumba.
      "corazon-inicio": {
        who: "ofelia", mood: "sad",
        line: {
          A: "Ofelia ve el corazón y la linterna le tiembla. Llora. «Yo lo vi todo. Y no hice nada. Tenía miedo. Solo miré.»",
          B: "Ofelia ve el corazón y se le cae la cara. Llora en silencio. «Yo lo vi todo. Vi cómo le pegaban y no hice nada. Solo miré, con mi linterna.»",
          C: "Ofelia ve el corazón y la máscara se le rompe. Llora sin ruido. «Lo vi todo. Vi cómo le pegaban y me quedé quieta, con mi linterna, como siempre. Solo miré.»",
        },
        options: [
          {
            id: "corazon-consolar",
            say: { A: "Pero se quedó con él. Eso es hacer algo.", B: "Pero se quedó con él. Quedarse también es hacer algo.", C: "Pero se quedó con él cuando todos se fueron. Quedarse también es hacer algo, y no poco." },
            reply: { A: "Ofelia te abraza de golpe. Huele a lavanda y a miedo.", B: "Ofelia te abraza de golpe, con la linterna todavía encendida. Huele a lavanda y a miedo.", C: "Ofelia te abraza sin avisar, la linterna encendida entre los dos. Huele a lavanda y a un miedo muy viejo." },
            mood: "love", next: "corazon-beto",
          },
          {
            id: "corazon-ahora",
            say: { A: "Ahora sí puede hacer algo. Ilumine. Yo llamo.", B: "Ahora sí puede hacer algo: ilumínelo mientras yo llamo.", C: "Ahora sí puede hacer algo: sostenga la luz mientras yo llamo; eso es exactamente lo que hace falta." },
            reply: { A: "Ofelia seca sus lágrimas y levanta la linterna. «Sí. Esto sí.»", B: "Ofelia se seca las lágrimas y levanta la linterna con las dos manos. «Esto sí puedo.»", C: "Ofelia se seca las lágrimas y levanta la linterna con las dos manos, firme. «Esto sí sé hacerlo.»" },
            mood: "love", end: "ambulancia",
          },
          {
            id: "corazon-nombre",
            say: { A: "¿Cómo se llama usted? Yo quiero saber.", B: "¿Cómo se llama usted? Me gustaría saberlo.", C: "¿Cómo se llama usted? Alguien debería preguntárselo esta noche." },
            reply: { A: "«Ofelia.» Sonríe entre lágrimas. «Hace años que nadie me pregunta.»", B: "«Ofelia.» Sonríe entre lágrimas. «Hace años que nadie me pregunta el nombre. Soy la loca de la linterna.»", C: "«Ofelia.» Sonríe entre las lágrimas. «Hace años que nadie me pregunta el nombre. Para el barrio soy la loca de la linterna.»" },
            mood: "love", next: "corazon-beto",
          },
        ],
      },
      "corazon-beto": {
        who: "beto", mood: "pain",
        line: {
          A: "Beto abre los ojos. Ve a Ofelia llorando. «Señora. Usted me tapó con su abrigo. Yo lo sentí. Gracias.»",
          B: "Beto abre los ojos y ve a Ofelia llorando sobre él. «Señora, usted me tapó con su abrigo. Lo sentí, aunque no podía hablar. Gracias.»",
          C: "Beto abre los ojos y encuentra a Ofelia llorando sobre él. «Señora, usted me tapó con su abrigo. Lo sentí, aunque no pudiera decirlo. Gracias.»",
        },
        options: [
          {
            id: "corazon-abrazar",
            say: { A: "Ofelia, abrácelo. Y después llamamos.", B: "Ofelia, abrácelo con cuidado. Después llamamos.", C: "Ofelia, abrácelo, con cuidado con la cabeza. Después llamamos." },
            reply: { A: "Ofelia abraza a Beto. Los dos lloran. Tú llamas a la ambulancia.", B: "Ofelia abraza a Beto con cuidado. Los dos lloran. Tú marcas el número de emergencias.", C: "Ofelia abraza a Beto con una delicadeza enorme. Lloran los dos. Tú marcas emergencias, también con la voz rota." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "corazon-ambulancia",
            say: { A: "Beto, ahora quieto. Llamo a la ambulancia.", B: "Beto, ahora no te muevas. Llamo a la ambulancia.", C: "Beto, ahora quédate quieto. Llamo a la ambulancia y Ofelia te cuida." },
            reply: { A: "Beto cierra los ojos. Ofelia le toma la mano.", B: "Beto cierra los ojos. Ofelia le toma la mano sin soltar la linterna.", C: "Beto cierra los ojos. Ofelia le toma la mano y, por una vez, apaga la linterna." },
            mood: "love", end: "ambulancia",
          },
          {
            id: "corazon-clinica",
            say: { A: "Vamos a la clínica juntos. Los tres.", B: "Vamos los tres a la clínica. Entre los dos lo llevamos.", C: "Vamos los tres a la clínica; entre Ofelia y yo te llevamos." },
            reply: { A: "Beto se levanta despacio. Ofelia lo sostiene y sonríe.", B: "Beto se levanta despacio. Ofelia lo sostiene por el brazo y sonríe, orgullosa.", C: "Beto se incorpora despacio. Ofelia lo sostiene por el brazo con un orgullo nuevo." },
            mood: "love", end: "caminan",
          },
        ],
      },
    },
    ends: {
      ambulancia: {
        text: { A: "La ambulancia entra en el callejón. Los paramédicos se llevan a Beto. Ofelia apaga la linterna.", B: "La ambulancia entra en el callejón de lado. Los paramédicos suben a Beto y Ofelia, por fin, apaga la linterna.", C: "La ambulancia entra en el callejón como puede. Los paramédicos suben a Beto y Ofelia apaga la linterna, como quien termina un turno." },
        change: "ambulancia", recap: "Pediste una ambulancia para el herido del callejón.",
      },
      policia: {
        text: { A: "Llega la policía. Ofelia repite todo. Esta vez la escuchan.", B: "Llega la policía y Ofelia repite su relato con cada detalle. Esta vez, la escuchan.", C: "Llega la policía y Ofelia repite el relato con todos sus detalles. Por primera vez en años, toman nota." },
        change: "policia", recap: "La policía escuchó a la mujer de la linterna.",
      },
      caminan: {
        text: { A: "Los tres caminan despacio hasta la clínica. Ofelia ilumina el camino.", B: "Los tres caminan despacio hasta la clínica. Ofelia va delante, iluminando el camino.", C: "Los tres caminan despacio hasta la clínica, Ofelia delante con la linterna, como una guía de museo nocturno." },
        change: "se-va", recap: "Llevaste a Beto a la clínica con Ofelia.",
      },
      "cuchillo-policia": {
        text: { A: "Llega la policía. Tienes que explicar tu cuchillo. Beto te defiende desde el suelo.", B: "Llega la policía en minutos. Explicas el cuchillo una y otra vez, y Beto te defiende desde el suelo.", C: "La policía llega en minutos. Explicas el cuchillo tres veces; Beto, desde el suelo, te defiende con la poca voz que le queda." },
        change: "policia", recap: "Tu cuchillo en el callejón terminó con la policía.",
      },
      "cuchillo-fria": {
        text: { A: "Ofelia y tú no se hablan más. La ambulancia se lleva a Beto. Cada uno a su lado.", B: "Ofelia y tú no vuelven a hablarse. La ambulancia se lleva a Beto y cada uno se va por su lado.", C: "Ofelia y tú no cruzan una palabra más. La ambulancia se lleva a Beto y ustedes se separan con una frialdad que el callejón ya conoce." },
        change: "triste", recap: "Ayudaste al herido, pero con Ofelia quedó una herida abierta.",
      },
      "pistola-corre": {
        text: { A: "Corres hasta la avenida. Detrás, las ventanas siguen encendidas.", B: "Corres hasta la avenida con el sonido de las ventanas abriéndose a tu espalda.", C: "Corres hasta la avenida mientras el callejón entero describe tu ropa a gritos." },
        change: "corre", recap: "Huiste del callejón con la pistola en la mano.",
      },
      "granada-helicoptero": {
        text: { A: "Sirenas. Un helicóptero sobre el callejón. Beto va en ambulancia. Tú das explicaciones.", B: "Sirenas de todos lados y un helicóptero sobre el callejón. Beto se va en ambulancia y tú te quedas dando explicaciones.", C: "Sirenas, luces y un helicóptero clavado sobre el callejón. Beto se va en ambulancia; tú te quedas con las explicaciones." },
        change: "helicoptero", recap: "Tu granada vació el callejón y llenó el cielo.",
      },
      "granada-risa": {
        text: { A: "Beto se ríe hasta que llega la ambulancia. Ofelia dice que nunca más sale de noche.", B: "Beto se ríe hasta que llega la ambulancia. Ofelia jura que nunca más sale de noche.", C: "Beto se ríe hasta que llega la ambulancia. Ofelia jura que no vuelve a salir de noche, y nadie le cree." },
        change: "ambulancia", recap: "Tu granada de plástico hizo reír a un herido.",
      },
      "gas-nube": {
        text: { A: "Ofelia y tú lloran por el gas. Beto, desde la calle, llama a la ambulancia. Para los tres.", B: "Ofelia y tú lloran por el gas, sentados en el suelo. Beto, desde la calle, llama a la ambulancia. Para los tres.", C: "Ofelia y tú lloran de gas, sentados en el suelo del callejón. Beto, desde la calle y con la cabeza rota, llama a la ambulancia para los tres." },
        change: "ambulancia", recap: "Un duelo de gas pimienta terminó con tres personas llorando.",
      },
      "lapiz-foto": {
        text: { A: "Beto guarda la foto de su hija. Llega la ambulancia. Ofelia guarda tus notas.", B: "Beto guarda la foto de su hija contra el pecho. Llega la ambulancia. Ofelia se queda con tus notas.", C: "Beto aprieta la foto de su hija contra el pecho. Llega la ambulancia. Ofelia se guarda tus notas como una prueba sagrada." },
        change: "ambulancia", recap: "Recuperaste la billetera con la foto de la hija de Beto.",
      },
      "lapiz-denuncia": {
        text: { A: "La policía recibe tu hoja. Ofelia firma como testigo. Beto va al hospital.", B: "La policía recibe tu hoja escrita a lápiz. Ofelia firma como testigo y Beto se va al hospital.", C: "La policía recibe tu hoja escrita a lápiz y, por una vez, no pide nada más. Ofelia firma como testigo. Beto se va al hospital." },
        change: "policia", recap: "Redactaste la denuncia del asalto a Beto.",
      },
      "libro-poema": {
        text: { A: "La ambulancia se lleva a Beto. Él pide el libro. Se lo das.", B: "La ambulancia se lleva a Beto. Él pide el libro y tú se lo das.", C: "La ambulancia se lleva a Beto, que pide el libro como quien pide una mano. Se lo das." },
        change: "ambulancia", recap: "Leíste poesía a un herido en el callejón.",
      },
      "corazon-abrazo": {
        text: { A: "Ofelia abraza a Beto hasta que llega la ambulancia. Después te abraza a ti.", B: "Ofelia abraza a Beto hasta que llega la ambulancia. Luego te abraza a ti, sin decir nada.", C: "Ofelia abraza a Beto hasta que llega la ambulancia. Luego te abraza a ti, en silencio, y apaga la linterna." },
        change: "abraza", recap: "La mujer de la linterna dejó de mirar y abrazó.",
      },
    },
    speak: {
      A1: "¿Sales de noche solo o con alguien?",
      A2: "¿Qué haces si ves a una persona herida en la calle?",
      B1: "¿Alguna vez ayudaste a alguien que no conocías?",
      B2: "¿Por qué crees que hay gente a la que nadie escucha, aunque diga la verdad?",
      C1: "¿Qué pesa más en una emergencia: el miedo o la culpa de no hacer nada?",
      C2: "¿Es cómplice quien mira sin intervenir, o solo es humano?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Alguien te acusó de algo que no hiciste?", B: "¿Cómo reaccionas cuando alguien te acusa injustamente?", C: "¿Por qué el miedo nos hace ver culpables donde no los hay?" } },
      pistola: { start: "pistola-inicio", fx: "grita", speak: { A: "¿Tus vecinos te ayudan?", B: "¿Qué harías si un vecino gritara pidiendo ayuda a medianoche?", C: "¿Hasta qué punto la gente mira desde la ventana en vez de bajar a la calle?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Eres fuerte?", B: "¿Alguna vez descubriste fuerza que no sabías que tenías?", C: "¿Qué saca lo mejor de las personas: la calma o la emergencia?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Qué llevas en los bolsillos de noche?", B: "¿Crees que una persona mayor debería llevar algo para defenderse?", C: "¿Qué dice de una ciudad que sus abuelas salgan armadas a pasear?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Tienes buena memoria?", B: "¿Qué detalles recuerdas mejor de las personas: la ropa, la cara, la voz?", C: "¿Qué valor tiene un testimonio escrito frente a uno hablado?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Alguien te lee en voz alta?", B: "¿Qué texto te gustaría que te leyeran en un mal momento?", C: "¿Puede la poesía servir para algo en una emergencia?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Preguntas el nombre a las personas?", B: "¿Hay alguien en tu barrio a quien nadie le pregunta cómo está?", C: "¿Qué le debe un barrio a las personas que lo vigilan sin que nadie se lo pida?" } },
    },
  },

  // ───────────────────────────── ALTO 1 ─────────────────────────────
  {
    id: "alto-seguridad",
    kind: "escena",
    district: "alto",
    title: "Seguridad privada",
    verb: "DEFENDER",
    goal: "Intervenir en un abuso discreto, exigir explicaciones, defender a alguien con calma y negociar con quien tiene el poder.",
    cast: [
      {
        id: "gustavo", name: "Gustavo", role: "Guardia privado",
        age: "adult", body: "m", build: "heavy", height: 1.88,
        hair: "buzz", hairColor: "#2a2420", skin: "#c9a07a",
        top: "uniform", topColor: "#1c2230", bottom: "pants", bottomColor: "#1c2230",
        extras: ["mustache"], pose: "arms",
      },
      {
        id: "ivana", name: "Ivana", role: "Chica retenida",
        age: "young", body: "f", build: "slim", height: 1.66,
        hair: "braids", hairColor: "#1a1410", skin: "#7a4e36",
        top: "hoodie", topColor: "#b33a5c", bottom: "jeans", bottomColor: "#20242c",
        extras: ["backpack"], pose: "stand",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "gustavo", mood: "angry",
        line: {
          A: "Frente a la embajada, un guardia enorme sujeta a una chica por el brazo. Ella dice: «¡Me duele!» Él te mira: «Siga su camino. Esto es privado.»",
          B: "Frente a la verja de la embajada, un guardia de seguridad privada sujeta a una chica por el brazo con demasiada fuerza. «¡Me estás lastimando!» Él te ve y baja la voz: «Siga su camino. Esto es un asunto privado.»",
          C: "Frente a la embajada, un guardia privado del tamaño de una puerta retiene a una chica por el brazo, con esa fuerza que no deja marcas visibles. «¡Me estás haciendo daño!» Él te ve y sonríe sin alegría: «Siga su camino. Asunto privado.»",
        },
        options: [
          {
            id: "que-hizo",
            say: { A: "¿Qué hizo ella? ¿Por qué la sujeta?", B: "¿Qué hizo ella? ¿Por qué la tiene agarrada así?", C: "¿Qué ha hecho ella exactamente para que usted la retenga de ese modo?" },
            reply: { A: "Gustavo: «Pintó la pared. Es una vándala.» Ivana: «¡Es una pegatina! ¡Una pegatina!»", B: "Gustavo: «Vandalizó la propiedad.» Ivana: «¡Pegué una pegatina! ¡Una! ¡De un concierto!»", C: "Gustavo: «Vandalismo contra propiedad diplomática.» Ivana: «¡Una pegatina! ¡De un concierto! ¡Del tamaño de una moneda!»" },
            mood: "angry", next: "ivana",
          },
          {
            id: "suelte",
            say: { A: "Suéltela. Usted no es policía. No puede sujetar a nadie.", B: "Suéltela. Usted no es policía y no puede retener a nadie así.", C: "Suéltela ahora mismo. Usted es seguridad privada, no policía; no tiene derecho a retener a nadie así." },
            reply: { A: "Gustavo afloja un poco. «Sé lo que puedo hacer. Pero ella no se va hasta que venga mi jefe.»", B: "Gustavo afloja, sin soltar. «Sé perfectamente lo que puedo hacer. Ella no se mueve hasta que llegue mi supervisor.»", C: "Gustavo afloja la presión sin soltar del todo. «Sé perfectamente cuáles son mis límites. Ella se queda hasta que llegue mi supervisor.»" },
            mood: "angry", next: "suelta",
          },
          {
            id: "policia",
            say: { A: "Llamo a la policía. Ahora. Ellos deciden.", B: "Voy a llamar a la policía ahora mismo. Que decidan ellos.", C: "Llamo a la policía ahora mismo; si esto es tan grave, que lo decidan ellos." },
            reply: { A: "Gustavo suelta a Ivana. «No hace falta. Que se vaya.» Ivana corre.", B: "Gustavo suelta a Ivana al instante. «No hace falta. Que se vaya y no vuelva.» Ivana no espera a oír el final.", C: "Gustavo suelta a Ivana en el acto. «No hace falta llamar a nadie. Que se vaya.» Ivana no necesita que se lo repitan." },
            mood: "neutral", end: "huye",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Señor, se nota que está cansado. ¿Cuántas horas lleva aquí?", B: "Señor, se le nota el cansancio. ¿Cuántas horas lleva de turno?", C: "Señor, tiene cara de llevar demasiadas horas aquí. ¿Cuántas van?" },
            reply: { A: "Gustavo suspira. «Catorce.» Suelta un poco el brazo. «Catorce horas por una pegatina.»", B: "Gustavo suspira y suelta un poco. «Catorce. Y lo único que pasó en catorce horas es una pegatina.»", C: "Gustavo suspira y afloja la mano. «Catorce horas. Y lo más grave que ha pasado en catorce horas es una pegatina.»" },
            mood: "love", next: "suelta",
          },
        },
      },
      ivana: {
        who: "ivana", mood: "furious",
        line: {
          A: "Ivana te muestra el brazo. Está rojo. «Me agarró así por una pegatina. Mira. ¿Esto es normal?»",
          B: "Ivana te enseña el brazo: la marca de los dedos ya se ve. «Por una pegatina. Mira cómo me dejó. ¿Esto es normal en este barrio?»",
          C: "Ivana te enseña el brazo: la marca de los dedos empieza a asomar. «Por una pegatina. Mira cómo me ha dejado. ¿En este barrio esto es lo normal?»",
        },
        options: [
          {
            id: "foto",
            say: { A: "Voy a sacar una foto del brazo. Es una prueba.", B: "Le saco una foto al brazo. Es una prueba, por si la necesitas.", C: "Le saco una foto al brazo ahora, con la verja detrás; una prueba, por si la necesitas." },
            reply: { A: "Gustavo se pone nervioso. «No saque fotos. Está bien. Que se vaya.»", B: "Gustavo se pone pálido. «Nada de fotos. Está bien, está bien. Que se vaya.»", C: "Gustavo pierde el color. «Nada de fotos, por favor. Está bien. Que se vaya, y asunto cerrado.»" },
            mood: "worried", end: "suelta-fin",
          },
          {
            id: "quitar",
            say: { A: "Ivana, quita la pegatina. Y usted la suelta. Fin.", B: "Ivana, quita la pegatina ahora. Y usted la suelta. Asunto terminado.", C: "Ivana, quita la pegatina ahora mismo; usted la suelta, y aquí no ha pasado nada." },
            reply: { A: "Ivana quita la pegatina. Gustavo la suelta. Nadie dice gracias.", B: "Ivana arranca la pegatina con cara de odio. Gustavo la suelta. Nadie da las gracias.", C: "Ivana arranca la pegatina con una dignidad feroz. Gustavo la suelta. Nadie da las gracias a nadie." },
            mood: "neutral", end: "suelta-fin",
          },
          {
            id: "denunciar",
            say: { A: "Esto es agresión. Vamos a la comisaría. Te acompaño.", B: "Esto es una agresión. Vamos a la comisaría y te acompaño.", C: "Esto es una agresión, con marca y testigo. Vamos a la comisaría; te acompaño." },
            reply: { A: "Gustavo suelta a Ivana. «Hagan lo que quieran.» Pero le tiembla la voz.", B: "Gustavo suelta a Ivana. «Hagan lo que quieran.» Pero por primera vez le tiembla la voz.", C: "Gustavo suelta a Ivana. «Hagan lo que quieran.» Y por primera vez la voz no le sale firme." },
            mood: "angry", end: "policia",
          },
        ],
      },
      suelta: {
        who: "gustavo", mood: "worried",
        line: {
          A: "Gustavo suelta el brazo. Ivana se frota la marca. Él mira la cámara de la embajada. «Si mi jefe ve esto, pierdo el trabajo. Y tengo dos hijos.»",
          B: "Gustavo suelta el brazo. Ivana se frota la marca. Él mira la cámara de la verja. «Si mi supervisor ve esto, me despiden. Tengo dos hijos. Ella no tenía que estar aquí.»",
          C: "Gustavo suelta el brazo y mira de reojo la cámara de la verja. «Si mi supervisor ve esto, estoy en la calle. Tengo dos hijos. Ella no tenía por qué estar aquí.» Ivana se frota la marca sin decir nada.",
        },
        options: [
          {
            id: "acuerdo",
            say: { A: "Ella se va. Usted no dice nada. Yo tampoco. ¿Trato?", B: "Ella se va, usted no dice nada y yo tampoco. ¿Trato?", C: "Ella se va, usted olvida la pegatina y yo olvido la marca. ¿Trato?" },
            reply: { A: "Gustavo asiente. Ivana también. «Trato.»", B: "Gustavo asiente despacio. Ivana, más despacio todavía. «Trato.»", C: "Gustavo asiente. Ivana tarda más, pero acaba asintiendo. «Trato.»" },
            mood: "neutral", end: "suelta-fin",
          },
          {
            id: "disculpa",
            say: { A: "Pídale perdón a ella. Después hablamos.", B: "Primero pídale perdón a ella. Después lo que quiera.", C: "Antes de hablar de su trabajo, pídale perdón a ella. Después, lo que usted quiera." },
            reply: { A: "Gustavo mira a Ivana. «Perdón. Me pasé.» Ivana: «Sí. Se pasó.»", B: "Gustavo mira a Ivana y le cuesta. «Perdón. Me pasé.» Ivana: «Sí. Se pasó mucho.»", C: "A Gustavo le cuesta mirarla. «Perdón. Me he pasado.» Ivana: «Sí. Se ha pasado mucho. Pero vale.»" },
            mood: "sad", end: "suelta-fin",
          },
          {
            id: "hijos",
            say: { A: "¿Y si fuera su hija? ¿Así la sujetan?", B: "¿Y si Ivana fuera su hija? ¿Le gustaría que la sujetaran así?", C: "¿Y si Ivana fuera una de sus hijas? ¿Le parecería bien que alguien la retuviera así por una pegatina?" },
            reply: { A: "Gustavo no contesta. Se sienta en el escalón. «No. No me gustaría.»", B: "Gustavo no contesta. Se sienta en el escalón de la verja. «No. No me gustaría nada.»", C: "Gustavo no responde. Se sienta en el escalón de la verja, de golpe muy cansado. «No. No me gustaría nada.»" },
            mood: "sad", end: "escalon",
          },
        ],
      },
      // ── cuchillo: retrocede y usa la radio.
      "cuchillo-inicio": {
        who: "gustavo", mood: "scared",
        line: {
          A: "Gustavo ve tu cuchillo. Suelta a Ivana y retrocede con la mano en la radio. «¡Baja eso! ¡Central, tengo una persona armada en la puerta!» Ivana corre detrás de un auto.",
          B: "Gustavo ve el cuchillo, suelta a Ivana y retrocede hasta la verja con la mano en la radio. «¡Baja eso ahora! Central, persona armada en la puerta principal.» Ivana se esconde detrás de un auto.",
          C: "Gustavo ve el cuchillo, suelta a Ivana y retrocede hasta la verja mientras habla por la radio: «Central, persona armada en la puerta principal, solicito apoyo.» Ivana ya se ha escondido detrás de un auto.",
        },
        options: [
          {
            id: "cuchillo-guardar",
            say: { A: "Lo guardo. No es para usted. Solo quería que la soltara.", B: "Lo guardo. No era para usted; solo quería que la soltara.", C: "Lo guardo ahora mismo. No iba dirigido a usted; solo quería que soltara a la chica." },
            reply: { A: "Gustavo sigue en la radio. «Central, espera.» Te mira. «Ya la solté. ¿Contento?»", B: "Gustavo mantiene la radio pegada. «Central, espera un momento.» Te mira. «Ya la solté. ¿Satisfecho?»", C: "Gustavo no suelta la radio. «Central, un momento.» Te mira con rabia. «Ya la he soltado. ¿Contento? Pues ahora explícame el cuchillo.»" },
            mood: "angry", next: "cuchillo-radio",
          },
          {
            id: "cuchillo-ivana",
            say: { A: "¡Ivana, corre! ¡Vete!", B: "¡Ivana, corre! ¡Vete de aquí!", C: "¡Ivana, corre y no mires atrás!" },
            reply: { A: "Ivana corre por la calle. Gustavo grita a la radio: «¡Y la chica se escapa!»", B: "Ivana sale disparada calle abajo. Gustavo grita a la radio: «¡Y la sospechosa huye hacia el paseo!»", C: "Ivana desaparece calle abajo. Gustavo brama a la radio: «¡Y la sospechosa huye hacia el paseo!»" },
            mood: "scared", end: "cuchillo-huye",
          },
          {
            id: "cuchillo-amenaza",
            say: { A: "No se acerque. Y no toque a nadie más.", B: "No se acerque. Y no vuelva a tocar a nadie así.", C: "No se acerque. Y que no vuelva a ponerle la mano encima a nadie." },
            reply: { A: "Gustavo levanta las manos. «No me acerco. Pero viene la policía.»", B: "Gustavo levanta las manos, sin soltar la radio. «No me acerco. Pero la policía ya viene.»", C: "Gustavo levanta las manos sin soltar la radio. «No me acerco. Pero que sepas que la policía ya está en camino.»" },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-radio": {
        who: "ivana", mood: "worried",
        line: {
          A: "Ivana sale de detrás del auto. «Gracias. Pero… ¿un cuchillo? Ahora yo soy la vándala y tú el loco. Vámonos antes de que llegue alguien.»",
          B: "Ivana asoma detrás del auto. «Gracias por ayudarme, de verdad. Pero ¿un cuchillo? Ahora yo soy la vándala y tú el peligroso. Vámonos antes de que llegue alguien.»",
          C: "Ivana sale de detrás del auto, todavía temblando. «Gracias, de verdad. Pero ¿un cuchillo? Ahora yo soy la vándala y tú el psicópata del barrio. Vámonos antes de que llegue el refuerzo.»",
        },
        options: [
          {
            id: "cuchillo-irse",
            say: { A: "Sí. Vámonos. Rápido y sin correr.", B: "Tienes razón. Vámonos, rápido pero sin correr.", C: "Tienes razón. Nos vamos rápido, pero caminando; correr nos haría culpables." },
            reply: { A: "Se van juntos. Gustavo no los sigue. Habla con la radio.", B: "Se alejan juntos. Gustavo no los sigue; sigue hablando con la radio.", C: "Se alejan juntos. Gustavo no los sigue; está demasiado ocupado explicándose por radio." },
            mood: "neutral", end: "cuchillo-huye",
          },
          {
            id: "cuchillo-quedarse",
            say: { A: "No. Me quedo y explico. Tú vete.", B: "No, yo me quedo y lo explico. Tú vete.", C: "No. Yo me quedo y doy la cara; tú vete, que esto es cosa mía." },
            reply: { A: "Ivana duda. «Gracias.» Y se va corriendo. Llega un patrullero.", B: "Ivana duda un segundo. «Gracias.» Y se va corriendo justo cuando aparece un patrullero.", C: "Ivana duda. «Gracias.» Y echa a correr justo cuando un patrullero dobla la esquina." },
            mood: "worried", end: "cuchillo-policia",
          },
          {
            id: "cuchillo-pegatina",
            say: { A: "Ivana, quita la pegatina. Así no hay problema.", B: "Ivana, quita la pegatina antes de irnos. Así nadie tiene nada.", C: "Ivana, quita la pegatina antes de irnos; que no quede ni una excusa." },
            reply: { A: "Ivana quita la pegatina. Gustavo dice a la radio: «Central, falsa alarma.»", B: "Ivana arranca la pegatina. Gustavo, por la radio: «Central, falsa alarma. Repito, falsa alarma.»", C: "Ivana arranca la pegatina. Gustavo, a la radio y con alivio: «Central, falsa alarma. Repito: falsa alarma.»" },
            mood: "neutral", end: "cuchillo-falsa",
          },
        ],
      },
      // ── pistola: manos arriba.
      "pistola-inicio": {
        who: "gustavo", mood: "terror",
        line: {
          A: "Gustavo ve la pistola. Suelta a Ivana y levanta las manos. «No, por favor. No quiero problemas. Tengo hijos.» Ivana se ríe: «¡Por fin alguien con más autoridad!»",
          B: "Gustavo ve la pistola, suelta a Ivana y levanta las manos. «No, por favor. No quiero problemas. Tengo dos hijos.» Ivana suelta una carcajada nerviosa: «¡Por fin alguien con más autoridad que tú!»",
          C: "Gustavo ve la pistola, suelta a Ivana y levanta las manos a la altura de la cara. «No, por favor. No quiero problemas; tengo dos hijos.» Ivana, con una risa nerviosa: «¡Por fin alguien con más autoridad que tú!»",
        },
        options: [
          {
            id: "pistola-guardar",
            say: { A: "No es para usted. La guardo. Pero no toque a nadie más.", B: "No es para usted. La guardo. Pero no vuelva a tocar a nadie.", C: "No va con usted. La guardo. Pero no vuelva a ponerle la mano encima a nadie." },
            reply: { A: "Gustavo baja las manos. «Está bien. Está bien. ¿Quién eres?»", B: "Gustavo baja las manos despacio. «Está bien. Está bien. ¿Y tú quién eres?»", C: "Gustavo baja las manos milímetro a milímetro. «Está bien. ¿Y se puede saber quién eres tú?»" },
            mood: "worried", next: "pistola-quien",
          },
          {
            id: "pistola-ivana",
            say: { A: "Ivana, vete. Ahora.", B: "Ivana, vete ahora. Yo me quedo.", C: "Ivana, vete ahora mismo. Yo me ocupo de esto." },
            reply: { A: "Ivana corre. Gustavo no la sigue. «¿Y ahora qué?»", B: "Ivana corre sin despedirse. Gustavo no se mueve. «¿Y ahora qué?»", C: "Ivana desaparece calle abajo. Gustavo no mueve un dedo. «¿Y ahora qué, jefe?»" },
            mood: "scared", end: "pistola-huye",
          },
          {
            id: "pistola-radio",
            say: { A: "Deje la radio en el suelo. Despacio.", B: "Deje la radio en el suelo, despacio.", C: "Deje la radio en el suelo, despacio, y no haga nada raro." },
            reply: { A: "Gustavo deja la radio. Pero la radio ya habló: «Unidad a embajada, dos minutos.»", B: "Gustavo deja la radio en el suelo. Demasiado tarde: «Unidad en camino a embajada, dos minutos.»", C: "Gustavo deja la radio, pero ya es tarde: «Unidad en camino a embajada, dos minutos», crepita el aparato desde el suelo." },
            mood: "scared", end: "pistola-policia",
          },
        ],
      },
      "pistola-quien": {
        who: "ivana", mood: "surprised",
        line: {
          A: "Ivana te mira. «¿Quién eres? ¿Policía? ¿Vecino? ¿Loco?» Gustavo también espera la respuesta.",
          B: "Ivana te mira de arriba abajo. «¿Y tú quién eres? ¿Policía de paisano? ¿Vecino? ¿Un loco?» Gustavo también quiere saberlo.",
          C: "Ivana te observa con curiosidad. «¿Quién eres tú? ¿Policía de paisano, vecino aburrido o simplemente alguien peligroso?» Gustavo espera la respuesta tanto como ella.",
        },
        options: [
          {
            id: "pistola-nadie",
            say: { A: "Nadie. Pasaba por aquí. Y no me gusta ver eso.", B: "Nadie. Pasaba por aquí y no me gusta ver cómo tratan a la gente.", C: "Nadie en particular. Pasaba por aquí y no soporto ver cómo se trata a la gente." },
            reply: { A: "Ivana sonríe. «Pues gracias, nadie.» Gustavo: «Váyanse los dos.»", B: "Ivana sonríe. «Pues gracias, nadie.» Gustavo: «Váyanse los dos antes de que llegue alguien.»", C: "Ivana sonríe. «Pues gracias, nadie.» Gustavo: «Váyanse los dos antes de que esto se complique.»" },
            mood: "smile", end: "pistola-huye",
          },
          {
            id: "pistola-juguete",
            say: { A: "Es de juguete. Mira. Perdón por el susto.", B: "Es de juguete, mira. Perdona el susto, Gustavo.", C: "Es una réplica, mira. Perdón por el susto, Gustavo; funcionó mejor de lo que esperaba." },
            reply: { A: "Gustavo se pone rojo. «¿De juguete? ¡Casi me muero!» Ivana se ríe.", B: "Gustavo se pone rojo de furia. «¿De juguete? ¡Casi me da un infarto!» Ivana no puede parar de reír.", C: "Gustavo pasa del blanco al rojo. «¿De juguete? ¡Casi me da un infarto delante de la embajada!» Ivana llora de risa." },
            mood: "laugh", end: "pistola-risa",
          },
          {
            id: "pistola-policia2",
            say: { A: "Soy alguien que va a llamar a la policía. Por el brazo de ella.", B: "Alguien que va a llamar a la policía por lo que le hizo al brazo de ella.", C: "Alguien que va a llamar a la policía por la marca que le ha dejado a ella en el brazo." },
            reply: { A: "Gustavo se ríe sin ganas. «¿Con una pistola en la mano? Llama, llama.»", B: "Gustavo se ríe sin ganas. «¿Vas a llamar a la policía con una pistola en la mano? Adelante.»", C: "Gustavo suelta una risa amarga. «¿Vas a denunciarme con una pistola en la mano? Adelante, va a ser una conversación interesante.»" },
            mood: "angry", end: "pistola-policia",
          },
        ],
      },
      // ── granada: evacuación.
      "granada-inicio": {
        who: "gustavo", mood: "terror",
        line: {
          A: "Gustavo ve la granada. Suelta a Ivana y grita a la radio: «¡Explosivo en la puerta! ¡Evacuen la embajada!» Se encienden todas las luces. Ivana: «¿Qué hiciste?»",
          B: "Gustavo ve la granada, suelta a Ivana y grita a la radio: «¡Explosivo en la puerta principal! ¡Evacuación inmediata!» Se encienden todas las luces del edificio. Ivana te mira: «¿Qué acabas de hacer?»",
          C: "Gustavo ve la granada, suelta a Ivana y ruge a la radio: «¡Artefacto explosivo en la puerta principal! ¡Evacuación inmediata!» Todas las luces de la embajada se encienden a la vez. Ivana susurra: «¿Qué acabas de hacer?»",
        },
        options: [
          {
            id: "granada-plastico",
            say: { A: "¡Es de plástico! ¡Gustavo, es falsa! ¡Mire!", B: "¡Es de plástico, Gustavo! ¡Es falsa, mire!", C: "¡Gustavo, es de plástico! ¡Una réplica, mírela bien!" },
            reply: { A: "Gustavo no la mira. «¡Central, el sospechoso dice que es falsa!» Nadie le cree.", B: "Gustavo ni la mira. «¡Central, el sospechoso afirma que es falsa!» Nadie en la radio parece creerlo.", C: "Gustavo ni se molesta en mirarla. «¡Central, el sospechoso afirma que el artefacto es falso!» La radio responde con un silencio nada tranquilizador." },
            mood: "scared", next: "granada-luces",
          },
          {
            id: "granada-ivana",
            say: { A: "¡Ivana, corre! ¡Ahora nadie te mira!", B: "¡Ivana, corre! ¡Ahora nadie te presta atención!", C: "¡Ivana, corre! ¡Es el único momento en que nadie te mira!" },
            reply: { A: "Ivana corre. Gustavo grita: «¡La chica! ¡La chica es cómplice!»", B: "Ivana sale corriendo. Gustavo grita a la radio: «¡La chica es cómplice! ¡Huye hacia el paseo!»", C: "Ivana corre como nunca. Gustavo, a la radio: «¡La chica es cómplice! ¡Huye hacia el paseo!»" },
            mood: "scared", end: "granada-helicoptero",
          },
          {
            id: "granada-guardar",
            say: { A: "La guardo. Me voy. Olvídenme.", B: "La guardo y me voy. Olvídense de mí.", C: "La guardo y desaparezco. Hagan como si nunca hubiera pasado por aquí." },
            reply: { A: "Demasiado tarde. Sirenas. Luces. Un helicóptero.", B: "Demasiado tarde: ya se oyen las sirenas y hay un helicóptero sobre el edificio.", C: "Demasiado tarde: las sirenas suben por la avenida y un helicóptero ya ilumina la verja." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-luces": {
        who: "ivana", mood: "laugh",
        line: {
          A: "Salen personas de la embajada en pijama. Ivana no puede parar de reír. «¡Por una pegatina! ¡Evacuaron la embajada por mi pegatina!»",
          B: "De la embajada salen diplomáticos en pijama y bata. Ivana no puede contener la risa. «¡Por una pegatina! ¡Han evacuado una embajada por mi pegatina!»",
          C: "De la embajada salen diplomáticos en pijama, bata y zapatillas. Ivana se dobla de risa. «¡Por una pegatina! ¡Han evacuado una embajada entera por mi pegatina!»",
        },
        options: [
          {
            id: "granada-mostrar",
            say: { A: "Señores, miren: es de plástico. Pueden volver a dormir.", B: "Señores, miren: es de plástico. Pueden volver a la cama.", C: "Señores, miren: plástico. Pueden volver a la cama; disculpen las molestias." },
            reply: { A: "Un diplomático la toca. «Es de plástico.» Gustavo se sienta en el escalón.", B: "Un diplomático en bata la toca con un dedo. «Es de plástico.» Gustavo se deja caer en el escalón.", C: "Un diplomático en bata la examina con un dedo. «Plástico.» Gustavo se desploma en el escalón, derrotado." },
            mood: "laugh", end: "granada-risa",
          },
          {
            id: "granada-irse",
            say: { A: "Ivana, vámonos ahora. Nadie nos mira.", B: "Ivana, vámonos ahora, que nadie nos mira.", C: "Ivana, es el momento: nos vamos mientras todos miran la embajada." },
            reply: { A: "Se van entre la gente. Detrás, un helicóptero.", B: "Se pierden entre la gente en pijama. Detrás, llega un helicóptero.", C: "Se pierden entre la multitud en pijama justo cuando el helicóptero aparece sobre el edificio." },
            mood: "scared", end: "granada-helicoptero",
          },
          {
            id: "granada-gustavo",
            say: { A: "Gustavo, perdón. Explico yo a su jefe.", B: "Gustavo, perdón. Se lo explico yo a su supervisor.", C: "Gustavo, lo siento de verdad. Se lo explico yo a su supervisor, con todo detalle." },
            reply: { A: "Gustavo te mira desde el escalón. «Explica. Yo ya no tengo trabajo.»", B: "Gustavo te mira desde el escalón. «Explica lo que quieras. Yo ya no tengo trabajo.»", C: "Gustavo te mira desde el escalón, sin energía. «Explica lo que quieras. Mi trabajo salió por esa puerta con los pijamas.»" },
            mood: "sad", end: "granada-risa",
          },
        ],
      },
      // ── gas: él también tiene.
      "gas-inicio": {
        who: "gustavo", mood: "laugh",
        line: {
          A: "Gustavo ve tu gas pimienta y se ríe. Saca el suyo. «Yo también tengo. Más grande. ¿Jugamos?» Ivana aprovecha y tira del brazo.",
          B: "Gustavo ve el gas pimienta y suelta una risa corta. Saca el suyo, el doble de grande. «Yo también tengo, y el mío es profesional. ¿Jugamos?» Ivana aprovecha para forcejear.",
          C: "Gustavo ve el gas pimienta y se ríe con desprecio. Saca el suyo, el doble de grande. «Yo también tengo, y el mío es de verdad. ¿Jugamos?» Ivana aprovecha la distracción para forcejear.",
        },
        options: [
          {
            id: "gas-rociar",
            say: { A: "¡Suéltela!", B: "¡Le dije que la suelte!", C: "¡Que la suelte, he dicho!" },
            reply: { A: "Rocías. Gustavo grita y suelta a Ivana. Ella corre. Él cae de rodillas.", B: "Rocías. Gustavo grita, suelta a Ivana y cae de rodillas. Ella no espera para correr.", C: "Rocías sin pensarlo. Gustavo grita, suelta a Ivana y cae de rodillas; ella no necesita invitación para correr." },
            mood: "pain", end: "gas-cae",
          },
          {
            id: "gas-nadie",
            say: { A: "Nadie juega. Suéltela y guardamos los dos.", B: "Nadie juega a nada. Suéltela y guardamos los dos.", C: "Aquí no juega nadie. Suéltela, y los dos guardamos esto." },
            reply: { A: "Gustavo duda. Suelta a Ivana. «Está bien. Guardo si guardas.»", B: "Gustavo duda, después suelta a Ivana. «Está bien. Guardo si tú guardas.»", C: "Gustavo duda un instante y suelta a Ivana. «Está bien. Yo guardo si tú guardas; a la de tres.»" },
            mood: "neutral", next: "gas-tregua",
          },
          {
            id: "gas-profesional",
            say: { A: "¿Profesional? ¿Para chicas con pegatinas?", B: "¿Profesional? ¿Para usar contra chicas con pegatinas?", C: "¿Profesional? ¿Y lo usa contra chicas armadas con pegatinas?" },
            reply: { A: "Gustavo se pone serio. «No lo uso. Solo lo muestro.» Suelta a Ivana.", B: "Gustavo pierde la sonrisa. «Nunca lo uso. Solo lo enseño.» Suelta a Ivana sin darse cuenta.", C: "Gustavo pierde la sonrisa de golpe. «Nunca lo he usado. Solo lo enseño.» Y suelta a Ivana sin darse cuenta." },
            mood: "neutral", next: "gas-tregua",
          },
        ],
      },
      "gas-tregua": {
        who: "ivana", mood: "angry",
        line: {
          A: "Ivana se frota el brazo. «Qué bonito. Dos personas con gas pimienta y yo en el medio. ¿Puedo irme ya?»",
          B: "Ivana se frota el brazo. «Qué bonito. Dos adultos con gas pimienta y yo en el medio como premio. ¿Puedo irme ya o necesitan público?»",
          C: "Ivana se frota el brazo, furiosa. «Precioso. Dos adultos con gas pimienta y yo en medio como trofeo. ¿Puedo irme ya o ustedes necesitan público?»",
        },
        options: [
          {
            id: "gas-vete",
            say: { A: "Vete. Yo me quedo hasta que te vayas.", B: "Vete. Yo no me muevo hasta que estés lejos.", C: "Vete. Yo no me muevo de aquí hasta que dobles la esquina." },
            reply: { A: "Ivana se va caminando rápido. Gustavo guarda su gas.", B: "Ivana se aleja a paso rápido. Gustavo guarda su gas con un suspiro.", C: "Ivana se aleja a paso rápido, sin mirar atrás. Gustavo guarda su gas con cara de haber perdido la noche." },
            mood: "neutral", end: "gas-paz",
          },
          {
            id: "gas-pegatina",
            say: { A: "Antes, la pegatina. Quítala. Y todos en paz.", B: "Antes, quita la pegatina. Así todos quedamos en paz.", C: "Antes de irte, quita la pegatina; así todos nos vamos en paz." },
            reply: { A: "Ivana quita la pegatina. «Contentos?» Gustavo: «Sí.»", B: "Ivana arranca la pegatina de mala gana. «¿Contentos?» Gustavo: «Mucho.»", C: "Ivana arranca la pegatina con teatro. «¿Contentos todos?» Gustavo: «Muchísimo.»" },
            mood: "neutral", end: "gas-paz",
          },
          {
            id: "gas-denuncia",
            say: { A: "Mejor vamos a la comisaría. Tu brazo. Su gas. Todo.", B: "Mejor vamos a la comisaría: tu brazo, su gas, todo.", C: "Mejor vamos a la comisaría y lo contamos todo: tu brazo, su gas, el mío." },
            reply: { A: "Gustavo se pone pálido. «No hace falta. Por favor.»", B: "Gustavo se pone pálido. «No hace falta llegar a eso. Por favor.»", C: "Gustavo pierde el color. «No hace falta llegar a eso, por favor. Tengo familia.»" },
            mood: "worried", end: "policia",
          },
        ],
      },
      // ── lápiz: nombre y empresa.
      "lapiz-inicio": {
        who: "gustavo", mood: "worried",
        line: {
          A: "Sacas el lápiz y un papel. Gustavo se pone nervioso. «¿Qué escribe? ¿Qué va a escribir?» Ivana sonríe por primera vez.",
          B: "Sacas el lápiz y un papel y Gustavo cambia de cara. «¿Qué está escribiendo? ¿Para quién es eso?» Ivana sonríe por primera vez en toda la escena.",
          C: "Sacas el lápiz y un papel, y Gustavo pierde la seguridad en un segundo. «¿Qué está apuntando? ¿Para quién es eso?» Ivana sonríe, por primera vez, con ganas.",
        },
        options: [
          {
            id: "lapiz-nombre",
            say: { A: "Su nombre y su empresa, por favor. Para una queja.", B: "Su nombre y el de su empresa, por favor. Es para presentar una queja.", C: "Su nombre completo y su empresa, por favor. Es para una queja formal." },
            reply: { A: "Gustavo suelta a Ivana. «Gustavo Pereira. Seguridad Norte.» Se arrepiente de decirlo.", B: "Gustavo suelta a Ivana sin darse cuenta. «Gustavo Pereira. Seguridad Norte.» Y se arrepiente al instante.", C: "Gustavo suelta a Ivana sin darse cuenta. «Gustavo Pereira, Seguridad Norte.» Y se arrepiente antes de terminar el apellido." },
            mood: "worried", next: "lapiz-queja",
          },
          {
            id: "lapiz-hora",
            say: { A: "La hora, el lugar, el brazo de ella. Todo queda escrito.", B: "La hora, el lugar y la marca en el brazo de ella. Todo queda por escrito.", C: "Hora, lugar y la marca en el brazo de ella. Todo queda por escrito, con testigo." },
            reply: { A: "Gustavo afloja la mano. «No hace falta escribir nada. Que se vaya.»", B: "Gustavo afloja la mano. «No hace falta escribir nada. Que se vaya ya.»", C: "Gustavo afloja la mano. «No hace falta escribir nada; que se vaya ya, y asunto terminado.»" },
            mood: "worried", end: "lapiz-suelta",
          },
          {
            id: "lapiz-informe",
            say: { A: "Escribo yo el informe. Pegatina quitada. Nadie herido. Firmen los dos.", B: "El informe lo escribo yo: pegatina retirada, nadie herido. Firmen los dos.", C: "Redacto yo el informe: pegatina retirada, sin daños, sin heridos. Firmen los dos y se acabó." },
            reply: { A: "Gustavo lee. Ivana lee. Los dos firman. Gustavo suelta el brazo.", B: "Gustavo lee despacio. Ivana lee rápido. Firman los dos y Gustavo suelta el brazo.", C: "Gustavo lee con desconfianza; Ivana, con prisa. Firman los dos y Gustavo suelta por fin el brazo." },
            mood: "neutral", end: "lapiz-firma",
          },
        ],
      },
      "lapiz-queja": {
        who: "ivana", mood: "smile",
        line: {
          A: "Ivana se frota el brazo. «Seguridad Norte. Pereira. Escríbelo bien.» Gustavo: «Por favor. Tengo hijos.»",
          B: "Ivana se frota el brazo, satisfecha. «Pereira, Seguridad Norte. Escríbelo con buena letra.» Gustavo, en voz baja: «Por favor. Tengo dos hijos.»",
          C: "Ivana se frota el brazo con satisfacción. «Pereira, Seguridad Norte. Escríbelo con buena letra, que lo lea bien su jefe.» Gustavo, casi sin voz: «Por favor. Tengo dos hijos.»",
        },
        options: [
          {
            id: "lapiz-enviar",
            say: { A: "Lo escribo todo. Ivana decide si lo envía.", B: "Lo escribo todo y es Ivana quien decide si lo envía o no.", C: "Lo dejo todo escrito; que Ivana decida si lo envía. Es su brazo." },
            reply: { A: "Ivana guarda el papel. «Lo pienso.» Gustavo cierra los ojos.", B: "Ivana dobla el papel y lo guarda. «Lo voy a pensar.» Gustavo cierra los ojos.", C: "Ivana dobla el papel y se lo guarda. «Me lo voy a pensar.» Gustavo cierra los ojos como quien espera una sentencia." },
            mood: "neutral", end: "lapiz-suelta",
          },
          {
            id: "lapiz-romper",
            say: { A: "Gustavo, pida perdón y rompo el papel.", B: "Gustavo, pídale perdón y rompo el papel delante de usted.", C: "Gustavo, pídale perdón de verdad y rompo el papel aquí mismo." },
            reply: { A: "Gustavo mira a Ivana. «Perdón. De verdad.» Rompes el papel.", B: "Gustavo mira a Ivana. «Perdón. De verdad, perdón.» Rompes el papel en dos.", C: "Gustavo mira a Ivana a los ojos. «Perdón. De verdad.» Rompes el papel en cuatro." },
            mood: "sad", end: "lapiz-perdon",
          },
          {
            id: "lapiz-dibujar",
            say: { A: "Y dibujo la marca del brazo. Por si acaso.", B: "Y dibujo la marca del brazo, por si la foto no basta.", C: "Y dibujo la marca del brazo, por si alguien duda de la foto." },
            reply: { A: "Dibujas los cuatro dedos. Gustavo no mira. Ivana: «Qué talento.»", B: "Dibujas la marca de los cuatro dedos. Gustavo no mira. Ivana: «Tienes talento para el drama.»", C: "Dibujas la marca de los cuatro dedos con bastante exactitud. Gustavo prefiere no mirar. Ivana: «Tienes talento para el drama judicial.»" },
            mood: "neutral", end: "policia",
          },
        ],
      },
      // ── libro: el abogado.
      "libro-inicio": {
        who: "gustavo", mood: "surprised",
        line: {
          A: "Abres tu libro delante de Gustavo. Él mira la tapa. «¿Qué es eso? ¿Un código? ¿Es usted abogado?» Ivana aguanta la risa.",
          B: "Abres tu libro delante de Gustavo como si fuera un expediente. Él lee la tapa de reojo. «¿Qué es eso? ¿Un código legal? ¿Es usted abogado?» Ivana se muerde el labio para no reír.",
          C: "Abres tu libro delante de Gustavo con la solemnidad de un expediente. Él intenta leer la tapa. «¿Qué es eso? ¿Un código? ¿Es usted abogado o algo así?» Ivana se muerde el labio para no reírse.",
        },
        options: [
          {
            id: "libro-abogado",
            say: { A: "Artículo doce: nadie puede retener a una persona sin ser policía.", B: "Artículo doce: ningún particular puede retener a una persona sin ser agente de la autoridad.", C: "Artículo doce, se lo leo: ningún particular puede retener a una persona si no es agente de la autoridad." },
            reply: { A: "Gustavo suelta a Ivana. «Yo no sabía… ¿Es un código de verdad?»", B: "Gustavo suelta a Ivana de inmediato. «Yo no… ¿Eso es un código de verdad?»", C: "Gustavo suelta a Ivana al instante. «Yo no sabía… ¿Es un código de verdad o me está tomando el pelo?»" },
            mood: "worried", next: "libro-codigo",
          },
          {
            id: "libro-honesto",
            say: { A: "No soy abogado. Es una novela. Pero suéltela igual.", B: "No, no soy abogado. Es una novela. Pero suéltela de todas formas.", C: "No soy abogado; es una novela. Pero suéltela de todas formas, que para eso no hace falta ley." },
            reply: { A: "Gustavo se ríe. «¿Una novela?» Suelta a Ivana. «Vale, me gusta la gente honesta.»", B: "Gustavo se ríe de verdad. «¿Una novela?» Y suelta a Ivana. «Está bien. Me gusta la gente honesta.»", C: "Gustavo se ríe, sorprendido. «¿Una novela?» Y suelta a Ivana. «Está bien. La honestidad me desarma más que el código.»" },
            mood: "laugh", end: "libro-honesto",
          },
          {
            id: "libro-regalo",
            say: { A: "Tome el libro. Léalo en el turno. Y suéltela.", B: "Tome, quédese con el libro para el turno. Y suéltela.", C: "Tome, el libro es suyo para las catorce horas de turno. Y suéltela." },
            reply: { A: "Gustavo toma el libro. Suelta a Ivana. «¿En serio? Nadie me regala nada.»", B: "Gustavo toma el libro con la mano libre y suelta a Ivana con la otra. «¿En serio? A mí nadie me regala nada.»", C: "Gustavo acepta el libro con una mano y suelta a Ivana con la otra. «¿En serio? Llevo años aquí y nadie me ha regalado nada.»" },
            mood: "smile", end: "libro-regalo",
          },
        ],
      },
      "libro-codigo": {
        who: "ivana", mood: "laugh",
        line: {
          A: "Ivana mira el libro. Es una novela de amor. Se ríe. «¡Artículo doce! ¡Es una novela!» Gustavo mira la tapa.",
          B: "Ivana le echa un vistazo al libro: una novela romántica. Se ríe a carcajadas. «¡Artículo doce! ¡Es una novela de amor!» Gustavo se acerca a leer la tapa.",
          C: "Ivana le echa un ojo al libro: una novela romántica con portada rosa. Estalla en carcajadas. «¡Artículo doce! ¡Es una novela de amor!» Gustavo se inclina a leer la tapa, incrédulo.",
        },
        options: [
          {
            id: "libro-admitir",
            say: { A: "Sí. Es una novela. Pero el artículo existe. En otro libro.", B: "Sí, es una novela. Pero el artículo existe, en otro libro.", C: "Sí, es una novela. Pero el artículo existe; está en un libro bastante más aburrido." },
            reply: { A: "Gustavo se ríe sin ganas. «Me engañó con una novela.» Ivana ya se va.", B: "Gustavo se ríe sin ganas. «Me ha engañado con una novela de amor.» Ivana ya se aleja.", C: "Gustavo se ríe sin alegría. «Me ha desarmado con una novela rosa.» Ivana ya está a media calle." },
            mood: "neutral", end: "libro-honesto",
          },
          {
            id: "libro-leer",
            say: { A: "Les leo la mejor frase. Para terminar bien.", B: "Les leo la mejor frase, para terminar la noche en paz.", C: "Les leo la mejor frase, para cerrar la noche con algo de estilo." },
            reply: { A: "Lees. Gustavo escucha. Ivana escucha. «Qué cursi», dicen los dos. Y sonríen.", B: "Lees una frase sobre dos personas que se perdonan. «Qué cursi», dicen los dos al mismo tiempo. Y sonríen.", C: "Lees una frase sobre dos personas que se perdonan sin razón. «Qué cursi», dicen Gustavo e Ivana a la vez. Y, sin querer, sonríen." },
            mood: "smile", end: "libro-regalo",
          },
          {
            id: "libro-enojo",
            say: { A: "Ríanse. Pero el brazo de ella está rojo. Eso no es novela.", B: "Ríanse lo que quieran. Pero el brazo de ella está marcado y eso no es novela.", C: "Ríanse si quieren. Pero esa marca en el brazo no sale en ninguna novela." },
            reply: { A: "Gustavo deja de reír. Ivana también. «Tienes razón.» Gustavo baja la cabeza.", B: "Gustavo deja de reír. Ivana también. «Tienes razón», dice ella. Gustavo baja la cabeza.", C: "La risa se corta en seco. «Tienes razón», dice Ivana. Gustavo baja la cabeza y no la levanta." },
            mood: "sad", end: "escalon",
          },
        ],
      },
      // ── corazón: el guardia se ablanda.
      "corazon-inicio": {
        who: "gustavo", mood: "sad",
        line: {
          A: "Gustavo ve el corazón. Suelta el brazo de Ivana. Se sienta en el escalón. «Catorce horas. Y lo único que pasa es una pegatina. Y yo le hago daño a una chica.»",
          B: "Gustavo ve el corazón y suelta el brazo de Ivana sin darse cuenta. Se sienta en el escalón de la verja. «Catorce horas de turno. Lo único que pasa es una pegatina, y yo le hago daño a una chica por eso.»",
          C: "Gustavo ve el corazón y suelta a Ivana como si el brazo le quemara. Se sienta en el escalón de la verja, enorme y vencido. «Catorce horas de turno. Lo único que pasa es una pegatina, y yo le hago daño a una chica. ¿En qué me he convertido?»",
        },
        options: [
          {
            id: "corazon-ivana",
            say: { A: "Ivana, mira. Está cansado. ¿Lo perdonas?", B: "Ivana, míralo. Está agotado. ¿Puedes perdonarlo?", C: "Ivana, míralo bien: está roto de cansancio. ¿Te ves capaz de perdonarlo?" },
            reply: { A: "Ivana se sienta a su lado. «Yo también estoy cansada. Pero no le hago daño a nadie.»", B: "Ivana se sienta a su lado en el escalón. «Yo también estoy agotada. Y no voy por ahí lastimando a nadie.»", C: "Ivana se sienta a su lado en el escalón. «Yo también estoy agotada, ¿sabes? Y no voy por ahí dejando marcas en nadie.»" },
            mood: "love", next: "corazon-escalon",
          },
          {
            id: "corazon-cafe",
            say: { A: "Hay un café abierto. Los invito. Los tres.", B: "Hay un café abierto a dos calles. Los invito a los dos.", C: "Hay un café abierto a dos calles. Los invito a los dos; esto se arregla mejor sentados." },
            reply: { A: "Gustavo mira la verja. «No puedo dejar el puesto.» Ivana: «Yo le traigo el café.»", B: "Gustavo mira la verja. «No puedo dejar el puesto.» Ivana suspira: «Está bien, yo le traigo el café.»", C: "Gustavo mira la verja. «No puedo abandonar el puesto.» Ivana suspira: «Está bien. Yo le traigo el café, y encima lo pago.»" },
            mood: "love", end: "corazon-cafe",
          },
          {
            id: "corazon-hijos",
            say: { A: "¿Cómo se llaman sus hijos?", B: "¿Cómo se llaman sus hijos, Gustavo?", C: "Cuénteme: ¿cómo se llaman sus hijos, Gustavo?" },
            reply: { A: "«Lucía y Tomás.» Gustavo sonríe por fin. «Lucía pega pegatinas en todas partes.»", B: "«Lucía y Tomás.» Gustavo sonríe por primera vez. «Lucía pega pegatinas por toda la casa.»", C: "«Lucía y Tomás.» Gustavo sonríe por primera vez en la noche. «Lucía pega pegatinas por toda la casa. Y nunca la he agarrado del brazo.»" },
            mood: "love", next: "corazon-escalon",
          },
        ],
      },
      "corazon-escalon": {
        who: "ivana", mood: "smile",
        line: {
          A: "Ivana y Gustavo están sentados en el escalón. Ivana le muestra la pegatina. «Es de un concierto. Mañana. ¿Quiere venir?» Gustavo se ríe.",
          B: "Ivana y Gustavo comparten el escalón. Ella le enseña la pegatina. «Es de un concierto, mañana. ¿Quiere venir? Entra gratis con uniforme.» Gustavo se ríe.",
          C: "Ivana y Gustavo comparten el escalón de la verja. Ella le enseña la pegatina. «Es de un concierto, mañana. Venga, que con uniforme entra gratis.» Gustavo se ríe, y la risa le sienta bien.",
        },
        options: [
          {
            id: "corazon-abrazo",
            say: { A: "Dense la mano. O un abrazo. Y a dormir.", B: "Dense la mano, o un abrazo, y cada uno a dormir.", C: "Dense la mano o un abrazo, lo que salga, y cada uno a dormir." },
            reply: { A: "Ivana abraza a Gustavo. Él no sabe dónde poner los brazos.", B: "Ivana abraza a Gustavo de golpe. Él no sabe dónde poner esos brazos enormes.", C: "Ivana abraza a Gustavo sin avisar. Él no sabe qué hacer con unos brazos que ya no sirven para sujetar a nadie." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "corazon-pegatina",
            say: { A: "Gustavo, deje la pegatina. Es pequeña. Nadie la ve.", B: "Gustavo, deje la pegatina ahí. Es pequeña y nadie la va a notar.", C: "Gustavo, deje la pegatina donde está. Es diminuta y nadie va a notarla." },
            reply: { A: "Gustavo mira la pegatina. «Que se quede. Es bonita.»", B: "Gustavo mira la pegatina largo rato. «Que se quede. La verdad, es bonita.»", C: "Gustavo observa la pegatina con atención. «Que se quede. Es lo más bonito que le han hecho a esta verja.»" },
            mood: "love", end: "corazon-cafe",
          },
          {
            id: "corazon-casa",
            say: { A: "Ivana, a casa. Gustavo, a su puesto. Buenas noches.", B: "Ivana, a casa. Gustavo, a su puesto. Buenas noches a los dos.", C: "Ivana, a casa; Gustavo, a su puesto. Buenas noches a los dos, y sin marcas." },
            reply: { A: "Los dos obedecen. Ivana se va. Gustavo se levanta sonriendo.", B: "Los dos obedecen sin protestar. Ivana se va caminando; Gustavo se levanta con una sonrisa.", C: "Los dos obedecen sin rechistar. Ivana se aleja a buen paso; Gustavo se incorpora con una sonrisa que no tenía hace diez minutos." },
            mood: "love", end: "suelta-fin",
          },
        ],
      },
    },
    ends: {
      huye: {
        text: { A: "Ivana corre hasta la esquina. Gustavo vuelve a su puesto sin mirarte.", B: "Ivana corre hasta perderse en la esquina. Gustavo vuelve a su puesto sin dirigirte la palabra.", C: "Ivana corre hasta desaparecer en la esquina. Gustavo vuelve a su puesto sin mirarte, como si no hubieras existido." },
        change: "huye", recap: "Amenazaste con la policía e Ivana escapó del guardia.",
      },
      "suelta-fin": {
        text: { A: "Ivana se va caminando. Gustavo mira la verja. Nadie llama a nadie.", B: "Ivana se aleja caminando, frotándose el brazo. Gustavo se queda mirando la verja. Nadie llama a nadie.", C: "Ivana se aleja frotándose el brazo. Gustavo se queda mirando la verja, solo con sus catorce horas. Nadie llama a nadie." },
        change: "se-va", recap: "Conseguiste que el guardia soltara a Ivana.",
      },
      policia: {
        text: { A: "Vas con Ivana a la comisaría. Ella muestra el brazo. Gustavo se queda en la puerta, muy pálido.", B: "Acompañas a Ivana a la comisaría. Ella enseña el brazo y da el nombre de la empresa. Gustavo se queda en su puesto, pálido.", C: "Acompañas a Ivana a la comisaría, donde enseña la marca y da el nombre de la empresa. Gustavo se queda en su puesto, más pálido que la verja." },
        change: "policia", recap: "Ivana denunció al guardia con tu ayuda.",
      },
      escalon: {
        text: { A: "Gustavo se queda sentado en el escalón. Ivana se va despacio. Nadie dice nada más.", B: "Gustavo se queda sentado en el escalón, con la cabeza baja. Ivana se va despacio. Nadie añade nada.", C: "Gustavo se queda sentado en el escalón, la cabeza entre las manos. Ivana se aleja sin prisa. No hace falta decir nada más." },
        change: "se-sienta", recap: "El guardia se sentó a pensar en lo que hizo.",
      },
      "cuchillo-huye": {
        text: { A: "Ivana y tú se alejan rápido. Gustavo sigue hablando con la radio.", B: "Ivana y tú se alejan a paso rápido mientras Gustavo sigue explicándose por radio.", C: "Ivana y tú se alejan a paso rápido; detrás, Gustavo sigue dando parte por radio de un cuchillo que ya no está." },
        change: "huye", recap: "Tu cuchillo liberó a Ivana y los dos huyeron.",
      },
      "cuchillo-policia": {
        text: { A: "Llega un patrullero. Te piden el cuchillo. Gustavo cuenta su versión. Ivana ya no está.", B: "Llega un patrullero. Te quitan el cuchillo y Gustavo cuenta su versión. Ivana ya está lejos.", C: "Llega un patrullero. Te retiran el cuchillo mientras Gustavo cuenta su versión con detalle. Ivana, al menos, ya está lejos." },
        change: "policia", recap: "Tu cuchillo frente a la embajada terminó en la comisaría.",
      },
      "cuchillo-falsa": {
        text: { A: "Falsa alarma. La pegatina ya no está. Gustavo respira. Ivana y tú se van.", B: "Falsa alarma por radio. La pegatina desaparece, Gustavo respira e Ivana y tú se van sin correr.", C: "Falsa alarma por radio. La pegatina desaparece, Gustavo recupera el aliento, e Ivana y tú se alejan caminando, muy despacio." },
        change: "se-va", recap: "Una pegatina menos y un cuchillo guardado: falsa alarma.",
      },
      "pistola-huye": {
        text: { A: "Ivana desaparece. Guardas la pistola. Gustavo no se mueve hasta que te vas.", B: "Ivana desaparece calle abajo. Guardas la pistola y Gustavo no se mueve hasta que doblas la esquina.", C: "Ivana desaparece calle abajo. Guardas la pistola; Gustavo no mueve un músculo hasta que doblas la esquina." },
        change: "huye", recap: "Tu pistola hizo que el guardia soltara a Ivana.",
      },
      "pistola-policia": {
        text: { A: "Dos patrulleros. Manos arriba. La noche termina en la comisaría, con muchas preguntas.", B: "Dos patrulleros frenan delante de la embajada. Manos arriba, y la noche termina en la comisaría con muchas preguntas.", C: "Dos patrulleros frenan delante de la embajada. Manos arriba, y la noche termina en la comisaría, con muchas preguntas y pocas respuestas buenas." },
        change: "manos-arriba", recap: "La pistola frente a la embajada terminó con las manos arriba.",
      },
      "pistola-risa": {
        text: { A: "Ivana se va riendo. Gustavo se sienta en el escalón. «Un juguete. Un juguete.»", B: "Ivana se va riéndose por toda la calle. Gustavo se deja caer en el escalón. «Un juguete. Casi me muero por un juguete.»", C: "Ivana se aleja riéndose por toda la calle. Gustavo se derrumba en el escalón. «Un juguete. Catorce horas de turno y casi me muero por un juguete.»" },
        change: "sonrie", recap: "Una pistola de juguete soltó a Ivana y sentó al guardia.",
      },
      "granada-helicoptero": {
        text: { A: "Helicóptero, patrulleros, diplomáticos en pijama. Todo por una pegatina y una granada.", B: "Un helicóptero sobre la embajada, tres patrulleros y diplomáticos en pijama. Todo por una pegatina y una granada.", C: "Un helicóptero sobre la embajada, tres patrulleros y media diplomacia en pijama. Todo por una pegatina y una granada de plástico." },
        change: "helicoptero", recap: "Tu granada evacuó una embajada.",
      },
      "granada-risa": {
        text: { A: "La embajada vuelve a dormir. Gustavo, en el escalón. Ivana, riéndose. La pegatina, en la verja.", B: "La embajada vuelve a la cama. Gustavo se queda en el escalón, Ivana sigue riéndose y la pegatina sigue en la verja.", C: "La embajada vuelve a la cama. Gustavo se queda en el escalón, Ivana no deja de reír y la pegatina, triunfal, sigue en la verja." },
        change: "sonrie", recap: "Una granada de plástico vació una embajada por una pegatina.",
      },
      "gas-cae": {
        text: { A: "Gustavo está de rodillas, con los ojos cerrados. Ivana ya no está. Te vas antes de que llegue alguien.", B: "Gustavo queda de rodillas, con los ojos cerrados y la radio en el suelo. Ivana ya no está. Te vas antes de que llegue alguien.", C: "Gustavo queda de rodillas, ojos cerrados, la radio en el suelo. Ivana ya no está. Te alejas antes de que llegue alguien con más preguntas." },
        change: "cae", recap: "Rociaste al guardia con gas para liberar a Ivana.",
      },
      "gas-paz": {
        text: { A: "Los dos guardan el gas. Ivana se va. Nadie llora.", B: "Los dos guardan el gas. Ivana se aleja y, por una vez, nadie llora.", C: "Los dos guardan el gas. Ivana se aleja y, por una vez en la noche, nadie termina llorando." },
        change: "se-va", recap: "Dos gases pimienta guardados y una chica libre.",
      },
      "lapiz-suelta": {
        text: { A: "Ivana se va con el papel en el bolsillo. Gustavo se queda pensando en su jefe.", B: "Ivana se va con el papel en el bolsillo. Gustavo se queda pensando en lo que diría su jefe.", C: "Ivana se aleja con el papel en el bolsillo. Gustavo se queda mirando la verja, pensando en lo que diría su supervisor." },
        change: "se-va", recap: "Tu lápiz asustó más al guardia que cualquier amenaza.",
      },
      "lapiz-firma": {
        text: { A: "Los dos firman. Gustavo guarda el informe. Ivana se va. Todo en orden.", B: "Los dos firman. Gustavo se guarda el informe y, con eso, Ivana queda libre. Todo en orden.", C: "Los dos firman. Gustavo se guarda el informe como si fuera oficial, e Ivana queda libre. Todo en orden, al menos sobre el papel." },
        change: "sonrie", recap: "Redactaste un informe de seguridad y todos firmaron.",
      },
      "lapiz-perdon": {
        text: { A: "Rompes el papel. Gustavo respira. Ivana se va, no muy convencida.", B: "Rompes el papel y Gustavo respira. Ivana se va, no muy convencida, pero libre.", C: "Rompes el papel y Gustavo vuelve a respirar. Ivana se aleja, no del todo convencida, pero libre." },
        change: "se-va", recap: "Cambiaste una queja escrita por una disculpa.",
      },
      "libro-honesto": {
        text: { A: "Ivana se va. Gustavo se ríe solo en su puesto. «Una novela.»", B: "Ivana se va. Gustavo se queda riéndose solo en su puesto. «Una novela. Me ganó una novela.»", C: "Ivana se aleja. Gustavo se queda riéndose solo en la puerta de la embajada. «Una novela. Catorce horas y me gana una novela.»" },
        change: "sonrie", recap: "Un libro liberó a Ivana sin que fuera un código.",
      },
      "libro-regalo": {
        text: { A: "Gustavo se queda con el libro. Ivana se va. La noche es más tranquila.", B: "Gustavo se queda con el libro bajo el brazo. Ivana se va y la noche se vuelve más tranquila.", C: "Gustavo se queda con el libro bajo el brazo, listo para las horas que faltan. Ivana se va y la noche, por fin, se calma." },
        change: "se-va", recap: "Le regalaste tu libro al guardia de la embajada.",
      },
      "corazon-abrazo": {
        text: { A: "Ivana y Gustavo se abrazan en la puerta de la embajada. La cámara lo graba todo.", B: "Ivana y Gustavo se abrazan en la puerta de la embajada. La cámara de la verja lo graba todo, y por una vez no importa.", C: "Ivana y Gustavo se abrazan en la puerta de la embajada. La cámara de la verja lo graba todo, y por una vez a nadie le importa." },
        change: "abraza", recap: "Un abrazo entre la chica de la pegatina y el guardia.",
      },
      "corazon-cafe": {
        text: { A: "Ivana vuelve con dos cafés. Gustavo sonríe. La pegatina se queda.", B: "Ivana vuelve con dos cafés y se los toman en el escalón. La pegatina se queda donde está.", C: "Ivana vuelve con dos cafés y se los toman en el escalón, sin prisa. La pegatina se queda donde está, como un tratado de paz." },
        change: "sonrie", recap: "Un café en el escalón de la embajada cerró el incidente.",
      },
    },
    speak: {
      A1: "¿Hay guardias de seguridad en tu barrio?",
      A2: "¿Qué haces si ves a una persona tratar mal a otra?",
      B1: "¿Alguna vez defendiste a alguien en la calle?",
      B2: "¿Quién tiene más poder en tu ciudad: la policía o la seguridad privada?",
      C1: "¿Cuándo es legítimo intervenir en un asunto que te dicen que es privado?",
      C2: "¿Qué convierte a una persona cansada en una persona injusta?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Tienes miedo de los guardias?", B: "¿Qué harías si un guardia de seguridad te acusara de algo?", C: "¿Por qué una amenaza suele empeorar una situación que ya era injusta?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Obedeces a las personas con uniforme?", B: "¿Alguna vez tuviste que obedecer a alguien por miedo?", C: "¿La autoridad se gana o se impone?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Viste una evacuación alguna vez?", B: "¿Qué harías si evacuaran tu edificio a medianoche?", C: "¿Cuándo una reacción de seguridad resulta más peligrosa que el peligro?" } },
      gas: { start: "gas-inicio", fx: "risa", speak: { A: "¿Qué llevas para defenderte en la ciudad?", B: "¿Confías en la gente que trabaja de seguridad?", C: "¿Quién protege a la gente de quienes la protegen?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes quejas?", B: "¿Alguna vez presentaste una queja formal contra alguien?", C: "¿Por qué una queja por escrito asusta más que un grito?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Conoces tus derechos?", B: "¿Alguna vez usaste una ley, real o inventada, para defenderte?", C: "¿Hasta qué punto el que parece saber de leyes tiene ventaja sobre el que no?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Cuántas horas trabajas al día?", B: "¿Cuándo fue la última vez que el cansancio te hizo tratar mal a alguien?", C: "¿Puede el cansancio excusar un abuso, o solo explicarlo?" } },
    },
  },

  // ───────────────────────────── ALTO 2 ─────────────────────────────
  {
    id: "alto-pareja",
    kind: "escena",
    district: "alto",
    title: "El celular de Carolina",
    verb: "MEDIAR",
    goal: "Mediar en una pelea de pareja que se descontrola, calmar, poner límites, dar órdenes claras y decidir cuándo llamar a la policía.",
    cast: [
      {
        id: "carolina", name: "Carolina", role: "Mujer furiosa",
        age: "adult", body: "f", build: "slim", height: 1.7,
        hair: "long", hairColor: "#4a2e1a", skin: "#f0cfa8",
        top: "dress", topColor: "#1c1c2a", bottom: "skirt", bottomColor: "#1c1c2a",
        extras: ["earrings", "bag"], pose: "scream",
      },
      {
        id: "mateo", name: "Mateo", role: "Hombre de traje",
        age: "adult", body: "m", build: "average", height: 1.8,
        hair: "short", hairColor: "#1a1410", skin: "#d9a77c",
        top: "suit", topColor: "#2a2f3a", bottom: "pants", bottomColor: "#2a2f3a",
        extras: ["blood-arm"], pose: "phone",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "carolina", mood: "furious",
        line: {
          A: "En el callejón de la torre, una mujer grita: «¡Devuélveme el celular!» Un hombre de traje, con el brazo sangrando, tiene el teléfono en alto. «¡Primero borra el video!» Ella te ve: «¡Tú! ¡Dile que me lo devuelva!»",
          B: "En el callejón junto a la torre, una mujer elegante grita: «¡Devuélveme el celular ahora mismo!» El hombre de traje, con un corte en el brazo, lo sostiene fuera de su alcance. «¡Cuando borres el video!» Ella te ve: «¡Tú! ¡Dile que me lo devuelva!»",
          C: "En el callejón junto a la torre, una mujer de vestido negro grita con una voz que no encaja con el barrio: «¡Devuélveme el celular!» El hombre de traje, con un corte sangrando en el brazo, lo mantiene fuera de su alcance. «¡Cuando borres ese video!» Ella te descubre: «¡Tú! ¡Dile que me lo devuelva!»",
        },
        options: [
          {
            id: "mediar",
            say: { A: "Los dos, calma. Señor, devuelva el celular. Señora, deje de gritar.", B: "A ver, los dos: calma. Usted devuelve el celular y usted deja de gritar.", C: "Los dos, calma un segundo. Usted le devuelve el celular; usted deja de gritar. Después hablamos del video." },
            reply: { A: "Mateo baja el celular, pero no lo devuelve. «Ella grabó todo. Si lo sube, me arruina.»", B: "Mateo baja el celular, sin soltarlo. «Grabó la discusión. Si lo sube, me destruye en la empresa.»", C: "Mateo baja el celular, pero no lo suelta. «Grabó la discusión entera. Si lo publica, mañana no tengo empresa ni amigos.»" },
            mood: "worried", next: "mateo",
          },
          {
            id: "apoyar",
            say: { A: "Señor, el celular es de ella. Devuélvalo. Ahora.", B: "Señor, el celular es de ella. Devuélvaselo ahora.", C: "Señor, ese celular es de ella. Devuélvaselo ahora; lo demás no es excusa." },
            reply: { A: "Mateo lo lanza al suelo. Carolina lo recoge. «¿Ves? ¡Así es él!»", B: "Mateo lo tira al suelo con desprecio. Carolina lo recoge. «¿Lo ves? ¡Así es siempre!»", C: "Mateo lo arroja al suelo con desprecio. Carolina lo recoge y te mira. «¿Lo ves? Así es él cuando pierde.»" },
            mood: "angry", next: "carolina",
          },
          {
            id: "policia",
            say: { A: "Él está sangrando. Voy a llamar a la policía.", B: "Él está sangrando y esto se está yendo de las manos. Llamo a la policía.", C: "Él sangra y esto se está descontrolando. Llamo a la policía antes de que sea peor." },
            reply: { A: "Carolina grita: «¡Sí, llama!» Mateo: «¡No! ¡Por favor, no!»", B: "Carolina grita: «¡Sí, llama, por favor!» Mateo, pálido: «¡No! ¡Esto es privado!»", C: "Carolina grita: «¡Sí, llama ya!» Mateo, de golpe pálido: «¡No, por favor! ¡Esto es un asunto privado!»" },
            mood: "worried", end: "policia",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Señora, respire. ¿Qué pasó de verdad?", B: "Señora, respire un segundo. ¿Qué pasó de verdad esta noche?", C: "Señora, respire un momento. Cuénteme qué ha pasado de verdad, sin gritos." },
            reply: { A: "Carolina llora de repente. «Me siguió. Toda la noche. Y se cortó con la botella cuando la rompió.»", B: "Carolina se echa a llorar de golpe. «Me siguió toda la noche. Rompió una botella contra la pared y se cortó él solo.»", C: "Carolina rompe a llorar sin aviso. «Me ha seguido toda la noche. Estrelló una botella contra la pared y se cortó él solo. Y ahora dice que yo soy la loca.»" },
            mood: "love", next: "carolina",
          },
        },
      },
      mateo: {
        who: "mateo", mood: "angry",
        line: {
          A: "Mateo te muestra el brazo. «Me corté con una botella. Mi botella. Lo sé. Pero ella grabó mi peor momento. ¿Eso es justo?»",
          B: "Mateo te enseña el brazo. «Me corté con una botella. La mía, lo admito. Pero ella grabó mi peor momento para enseñárselo al mundo. ¿Te parece justo?»",
          C: "Mateo te enseña el corte del brazo. «Me corté con una botella. Mía, lo admito. Pero ella grabó mi peor momento para usarlo. ¿Te parece justo que una noche mala sea un video para siempre?»",
        },
        options: [
          {
            id: "borrar",
            say: { A: "Carolina, borra el video delante de él. Y él te devuelve el celular.", B: "Carolina, borra el video delante de él. Y tú le devuelves el celular. Trato.", C: "Carolina, borra el video delante de él; a cambio, él te devuelve el celular y se va. Trato justo." },
            reply: { A: "Carolina duda. «Si lo borro, nadie me cree.» Pero lo borra.", B: "Carolina duda largo rato. «Si lo borro, nadie va a creerme.» Pero lo borra.", C: "Carolina duda. «Si lo borro, nadie va a creer lo de esta noche.» Pero lo borra, con el dedo temblando." },
            mood: "sad", end: "taxi",
          },
          {
            id: "herida",
            say: { A: "Primero el brazo. Está sangrando mucho. Presione aquí.", B: "Primero el brazo, que sangra mucho. Presione aquí con esto.", C: "Primero ese brazo, que sangra más de lo que cree. Presione aquí con esto y no lo suelte." },
            reply: { A: "Mateo presiona con tu pañuelo. Carolina se acerca. «¿Está muy mal?»", B: "Mateo presiona con tu pañuelo. Carolina, pese a todo, se acerca. «¿Es grave?»", C: "Mateo presiona con tu pañuelo. Carolina, pese a todo, se acerca a mirar. «¿Es grave?» Y en esa pregunta hay más que rabia." },
            mood: "worried", end: "ambulancia",
          },
          {
            id: "no-justo",
            say: { A: "No es justo. Pero seguirla toda la noche tampoco. Váyase a casa.", B: "No es justo, no. Pero seguirla toda la noche tampoco lo es. Váyase a casa.", C: "No, no es justo. Pero seguirla por media ciudad tampoco lo es. Váyase a casa y mañana lo mira con otros ojos." },
            reply: { A: "Mateo se calla. Deja el celular en el suelo. «Tienes razón.»", B: "Mateo se queda callado un momento. Deja el celular en el suelo. «Tienes razón.»", C: "Mateo guarda silencio. Deja el celular en el suelo, con cuidado. «Tienes razón. No sé en qué momento me convertí en esto.»" },
            mood: "sad", end: "taxi",
          },
        ],
      },
      carolina: {
        who: "carolina", mood: "angry",
        line: {
          A: "Carolina guarda el celular. «Quiero un taxi. Quiero irme. Y no quiero verlo nunca más.» Mateo da un paso. Ella grita: «¡No te acerques!»",
          B: "Carolina guarda el celular en el bolso. «Quiero un taxi, quiero irme y no quiero volver a verlo.» Mateo da un paso hacia ella y Carolina grita: «¡No te acerques!»",
          C: "Carolina guarda el celular en el bolso con manos temblorosas. «Quiero un taxi, quiero irme y no quiero volver a verle la cara.» Mateo da un paso y ella grita: «¡Ni un paso más!»",
        },
        options: [
          {
            id: "taxi",
            say: { A: "Yo te pido un taxi. Mateo, usted se queda aquí.", B: "Te pido un taxi yo. Mateo, usted se queda donde está.", C: "El taxi te lo pido yo. Mateo, usted no se mueve de ahí hasta que ella se vaya." },
            reply: { A: "Mateo se apoya en la pared. Carolina respira. El taxi llega en tres minutos.", B: "Mateo se apoya en la pared, vencido. Carolina respira por fin. El taxi llega en tres minutos.", C: "Mateo se apoya en la pared, sin fuerzas. Carolina respira hondo. El taxi tarda tres minutos que parecen una hora." },
            mood: "neutral", end: "taxi",
          },
          {
            id: "separar",
            say: { A: "Mateo, atrás. Tres pasos. Ahora.", B: "Mateo, para atrás. Tres pasos, ahora.", C: "Mateo, retroceda tres pasos. Ahora mismo, y sin discutir." },
            reply: { A: "Mateo no retrocede. Empuja. Un portero sale de la torre. «¡Eh!»", B: "Mateo no retrocede: te empuja. Del portal de la torre sale un portero: «¡Eh! ¡Eh!»", C: "Mateo no retrocede: te empuja con el brazo sano. Del portal de la torre sale un portero: «¡Eh, eh, eh!»" },
            mood: "angry", end: "pelea",
          },
          {
            id: "sentarse",
            say: { A: "Carolina, siéntate en el escalón. Respira. Él no se mueve.", B: "Carolina, siéntate en el escalón y respira. Él no se va a mover.", C: "Carolina, siéntate en el escalón y respira. Él no va a moverse; yo me encargo." },
            reply: { A: "Carolina se sienta. Llora. Mateo mira el suelo.", B: "Carolina se sienta en el escalón y llora. Mateo mira el suelo, sin acercarse.", C: "Carolina se sienta en el escalón y llora en silencio. Mateo mira el suelo y, por una vez, no se acerca." },
            mood: "sad", end: "calma",
          },
        ],
      },
      // ── cuchillo: todo se congela.
      "cuchillo-inicio": {
        who: "mateo", mood: "terror",
        line: {
          A: "Mateo ve tu cuchillo. Suelta el celular. Retrocede. «¿Un cuchillo? ¿Estás loco? ¡Es una discusión de pareja!» Carolina recoge el celular sin mirarte.",
          B: "Mateo ve el cuchillo, suelta el celular y retrocede hasta la pared. «¿Un cuchillo? ¿Estás loco? ¡Es una pelea de pareja, no un asalto!» Carolina recoge el celular sin quitarte los ojos de encima.",
          C: "Mateo ve el cuchillo, suelta el celular y retrocede hasta la pared. «¿Un cuchillo? ¿Te has vuelto loco? ¡Es una discusión de pareja, no un atraco!» Carolina recoge el celular sin perderte de vista.",
        },
        options: [
          {
            id: "cuchillo-orden",
            say: { A: "Es para que escuchen. Mateo, a casa. Carolina, un taxi. Ya.", B: "Es para que me escuchen. Mateo, a casa. Carolina, un taxi. Ahora.", C: "Es para que me escuchen de una vez. Mateo, a casa; Carolina, un taxi. Ahora." },
            reply: { A: "Mateo asiente, asustado. Carolina llama al taxi sin dejar de mirarte.", B: "Mateo asiente, pálido. Carolina pide el taxi por teléfono sin dejar de mirarte.", C: "Mateo asiente, blanco como su camisa. Carolina pide el taxi sin apartar la vista del cuchillo." },
            mood: "scared", end: "cuchillo-taxi",
          },
          {
            id: "cuchillo-guardar",
            say: { A: "Perdón. Lo guardo. Me asusté por la sangre.", B: "Perdón, lo guardo. Me asusté al ver la sangre.", C: "Perdón, lo guardo. Vi la sangre y reaccioné mal." },
            reply: { A: "Carolina: «¿Te asustaste y sacaste un cuchillo?» Mateo se ríe nervioso.", B: "Carolina te mira. «¿Te asustaste y tu reacción fue sacar un cuchillo?» Mateo suelta una risa nerviosa.", C: "Carolina te mira, incrédula. «¿Te asustas y tu respuesta es sacar un cuchillo?» Mateo suelta una risa de puro nervio." },
            mood: "worried", next: "cuchillo-explicar",
          },
          {
            id: "cuchillo-sangre",
            say: { A: "Él sangra. Corto su manga para una venda.", B: "Él sangra. Le corto la manga para hacer una venda.", C: "Él sangra. Le corto la manga del traje y le hago una venda." },
            reply: { A: "Cortas la manga. Mateo no se mueve. «Era un traje caro.»", B: "Cortas la manga del traje. Mateo no se mueve. «Era un traje muy caro.»", C: "Cortas la manga del traje con precisión. Mateo no se atreve a moverse. «Era un traje muy caro. Qué más da.»" },
            mood: "neutral", next: "cuchillo-explicar",
          },
        ],
      },
      "cuchillo-explicar": {
        who: "carolina", mood: "worried",
        line: {
          A: "Carolina se pone entre Mateo y tú. «Mira. Él es un idiota. Pero es mi idiota. Guarda eso y vete, por favor.»",
          B: "Carolina, por increíble que parezca, se pone entre Mateo y tú. «Mira. Él es un idiota, pero es mi idiota. Guarda eso y vete, por favor.»",
          C: "Carolina, contra toda lógica, se interpone entre Mateo y tú. «Mira. Es un idiota, pero es mi idiota. Guarda eso y vete, por favor; esto lo arreglamos nosotros.»",
        },
        options: [
          {
            id: "cuchillo-irse",
            say: { A: "Está bien. Me voy. Cuídense.", B: "Está bien, me voy. Cuídense los dos.", C: "De acuerdo, me voy. Cuídense, aunque no sé si saben cómo." },
            reply: { A: "Te vas. Detrás, los dos se gritan otra vez, pero más bajo.", B: "Te alejas. Detrás, los dos vuelven a discutir, pero en voz baja.", C: "Te alejas. Detrás, la discusión se reanuda, pero en un tono que ya no asusta a nadie." },
            mood: "neutral", end: "cuchillo-taxi",
          },
          {
            id: "cuchillo-ambulancia",
            say: { A: "Me voy, pero llamo a una ambulancia para el brazo.", B: "Me voy, pero antes llamo a una ambulancia por ese brazo.", C: "Me voy, pero antes pido una ambulancia por ese brazo; eso no es negociable." },
            reply: { A: "Mateo: «No hace falta.» Carolina: «Sí hace falta. Llama.»", B: "Mateo protesta: «No hace falta.» Carolina lo corta: «Sí hace falta. Llama.»", C: "Mateo protesta: «No hace falta.» Carolina lo corta en seco: «Claro que hace falta. Llama.»" },
            mood: "worried", end: "ambulancia",
          },
          {
            id: "cuchillo-policia",
            say: { A: "Su idiota me empujó antes. Llamo a la policía.", B: "Su idiota me empujó hace un minuto. Llamo a la policía.", C: "Su idiota me ha empujado hace un minuto; eso lo decide la policía, no ustedes." },
            reply: { A: "Mateo: «¿Y tú con un cuchillo?» Carolina marca el teléfono.", B: "Mateo: «¿Y tú, con un cuchillo, llamas a la policía?» Carolina ya está marcando.", C: "Mateo: «¿Tú, con un cuchillo en la mano, vas a llamar a la policía?» Carolina ya ha marcado." },
            mood: "angry", end: "cuchillo-policia",
          },
        ],
      },
      // ── pistola: creen que es un robo.
      "pistola-inicio": {
        who: "mateo", mood: "terror",
        line: {
          A: "Mateo ve la pistola y levanta las manos. «¡Tome el reloj! ¡Tome el celular! ¡No dispare!» Carolina también levanta las manos. «Es un robo. Perfecto. Qué noche.»",
          B: "Mateo ve la pistola y levanta las manos con el celular todavía en una. «¡Tome el reloj! ¡Tome el celular, tome todo! ¡No dispare!» Carolina levanta las manos despacio. «Un robo. Lo que faltaba esta noche.»",
          C: "Mateo ve la pistola y levanta las manos con el celular en una de ellas. «¡Tome el reloj, tome el celular, tome lo que quiera! ¡No dispare!» Carolina levanta las manos con una calma extraña. «Un robo. Era lo único que le faltaba a esta noche.»",
        },
        options: [
          {
            id: "pistola-no-robo",
            say: { A: "No es un robo. Bajen las manos. Mateo, dele el celular a ella.", B: "No es un robo. Bajen las manos. Mateo, el celular es de ella: déselo.", C: "No es un robo. Bajen las manos. Mateo, ese celular es de ella; devuélvaselo." },
            reply: { A: "Mateo le da el celular a Carolina. «¿Entonces qué es?»", B: "Mateo le entrega el celular a Carolina sin discutir. «¿Y entonces qué es esto?»", C: "Mateo le entrega el celular a Carolina en el acto. «¿Entonces qué es esto, exactamente?»" },
            mood: "scared", next: "pistola-que",
          },
          {
            id: "pistola-reloj",
            say: { A: "Deje el reloj. Dele el celular a ella. Y váyase.", B: "El reloj no me interesa. Dele el celular a ella y váyase.", C: "El reloj no lo quiero. Dele el celular a ella y desaparezca." },
            reply: { A: "Mateo entrega el celular y corre. Carolina te mira. «Gracias. Creo.»", B: "Mateo entrega el celular y sale corriendo. Carolina te mira. «Gracias. Supongo.»", C: "Mateo entrega el celular y huye calle abajo con el brazo sangrando. Carolina te mira. «Gracias. Creo.»" },
            mood: "scared", end: "pistola-huye",
          },
          {
            id: "pistola-guardar",
            say: { A: "Perdón. La guardo. Solo quería que pararan.", B: "Perdón, la guardo. Solo quería que dejaran de gritar.", C: "Perdón, la guardo. Solo quería que pararan de gritar; funcionó demasiado bien." },
            reply: { A: "Carolina baja las manos. «¿Querías que paráramos? Pues sí. Paramos.»", B: "Carolina baja las manos despacio. «¿Querías que paráramos? Pues lo conseguiste.»", C: "Carolina baja las manos con una lentitud deliberada. «¿Querías que paráramos? Pues enhorabuena, paramos.»" },
            mood: "worried", next: "pistola-que",
          },
        ],
      },
      "pistola-que": {
        who: "carolina", mood: "angry",
        line: {
          A: "Carolina guarda el celular. «Bueno. Nadie nos robó. Pero hay alguien con una pistola. ¿Y ahora? ¿Nos vamos o llamamos a alguien?»",
          B: "Carolina guarda el celular. «Bien. No es un robo. Pero hay una persona armada en el callejón. ¿Qué hacemos? ¿Nos vamos o llamamos a alguien?»",
          C: "Carolina guarda el celular y te mira sin miedo. «Bien, no es un robo. Pero sigue habiendo alguien armado en el callejón. ¿Qué toca ahora: irnos o llamar a alguien?»",
        },
        options: [
          {
            id: "pistola-taxi",
            say: { A: "Un taxi para ti. Mateo a casa. Y yo me voy.", B: "Un taxi para ti, Mateo a su casa y yo desaparezco.", C: "Un taxi para ti, Mateo a su casa y yo desaparezco antes de que alguien pregunte." },
            reply: { A: "Carolina pide el taxi. Mateo se va caminando, con las manos todavía arriba.", B: "Carolina pide el taxi. Mateo se aleja caminando, y todavía lleva las manos medio levantadas.", C: "Carolina pide el taxi. Mateo se aleja caminando con las manos todavía a media altura, por si acaso." },
            mood: "neutral", end: "pistola-huye",
          },
          {
            id: "pistola-herida",
            say: { A: "Mateo, el brazo. Ambulancia. Yo llamo.", B: "Mateo, ese brazo necesita una ambulancia. Llamo yo.", C: "Mateo, ese brazo necesita una ambulancia. Llamo yo, y ustedes no se mueven." },
            reply: { A: "Mateo asiente. Carolina: «Y de la pistola, ¿qué les decimos?»", B: "Mateo asiente. Carolina pregunta: «Y de la pistola, ¿qué les contamos?»", C: "Mateo asiente, agotado. Carolina pregunta: «Y de la pistola, ¿qué versión les damos?»" },
            mood: "worried", end: "ambulancia",
          },
          {
            id: "pistola-llamar",
            say: { A: "Llamen a la policía. Yo espero aquí.", B: "Llamen a la policía. Yo me quedo aquí y lo explico.", C: "Llamen a la policía. Yo me quedo aquí y doy explicaciones." },
            reply: { A: "Carolina marca. Mateo se sienta. «Esta noche no termina nunca.»", B: "Carolina marca. Mateo se sienta en el escalón. «Esta noche no se acaba nunca.»", C: "Carolina marca. Mateo se deja caer en el escalón. «Esta noche no se acaba nunca, de verdad.»" },
            mood: "neutral", end: "pistola-policia",
          },
        ],
      },
      // ── granada: ella grita, él se ríe.
      "granada-inicio": {
        who: "carolina", mood: "terror",
        line: {
          A: "Carolina ve tu granada y grita. Mateo mira la granada y se ríe. «¡Perfecto! ¡Ahora sí! ¡Que explote todo!» Carolina: «¡Está loco! ¡Los dos están locos!»",
          B: "Carolina ve la granada y suelta un grito que rebota en la torre. Mateo la mira y se echa a reír. «¡Perfecto! ¡Ahora sí tiene sentido la noche! ¡Que explote todo!» Carolina: «¡Están locos los dos!»",
          C: "Carolina ve la granada y su grito rebota en toda la torre. Mateo, en cambio, se ríe a carcajadas. «¡Perfecto! ¡Ahora sí que la noche tiene sentido! ¡Que explote todo de una vez!» Carolina: «¡Están locos, los dos!»",
        },
        options: [
          {
            id: "granada-plastico",
            say: { A: "Es de plástico. Carolina, respira. Mateo, deje de reír.", B: "Es de plástico. Carolina, respira. Mateo, deje de reírse, que no ayuda.", C: "Es de plástico. Carolina, respira. Mateo, deje de reírse; no ayuda ni un poco." },
            reply: { A: "Mateo ríe más. Carolina lo mira. «¿Te ríes? ¿Con una granada?» Y se ríe también.", B: "Mateo ríe más fuerte. Carolina lo mira. «¿Te ríes? ¿Con una granada delante?» Y, contra su voluntad, se ríe también.", C: "Mateo ríe todavía más. Carolina lo mira, furiosa. «¿Te ríes? ¿Con una granada delante?» Y, sin poder evitarlo, se ríe con él." },
            mood: "laugh", next: "granada-risa-pareja",
          },
          {
            id: "granada-correr",
            say: { A: "¡Corran! ¡Los dos! ¡Ya!", B: "¡Corran los dos! ¡Ahora!", C: "¡Corran los dos, ya, y discutan en otra parte!" },
            reply: { A: "Carolina corre. Mateo no. «Que explote. Me da igual.»", B: "Carolina corre. Mateo no se mueve. «Que explote. Me da exactamente igual.»", C: "Carolina corre. Mateo no mueve un pie. «Que explote. Esta noche me da todo igual.»" },
            mood: "scared", next: "granada-mateo",
          },
          {
            id: "granada-tirar",
            say: { A: "La tiro lejos. Al contenedor. Y llamo a la policía.", B: "La tiro al contenedor del fondo y llamo a la policía.", C: "La lanzo al contenedor del fondo y llamo a la policía, por si acaso." },
            reply: { A: "Carolina grita más. Mateo aplaude. Alguien llama desde la torre.", B: "Carolina grita todavía más. Mateo aplaude. Desde la torre, alguien ya está llamando.", C: "Carolina grita más fuerte; Mateo aplaude como en el teatro. Desde la torre, alguien ya está hablando con emergencias." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-risa-pareja": {
        who: "mateo", mood: "laugh",
        line: {
          A: "Mateo y Carolina se ríen juntos por primera vez. Mateo: «Una granada. Una granada de plástico. Nuestra pelea más tonta.»",
          B: "Mateo y Carolina se ríen juntos por primera vez en la noche. «Una granada», dice Mateo. «De plástico. La pelea más absurda de nuestra vida.»",
          C: "Mateo y Carolina se ríen juntos por primera vez en toda la noche. «Una granada», repite Mateo. «De plástico. La pelea más absurda de nuestra historia, y mira que hay competencia.»",
        },
        options: [
          {
            id: "granada-celular",
            say: { A: "Mateo, ahora dele el celular. Riéndose.", B: "Mateo, ahora devuélvale el celular, ya que se ríe.", C: "Mateo, ya que se ríe, devuélvale el celular; es el momento." },
            reply: { A: "Mateo se lo da. Carolina lo guarda. «Gracias. Por la granada.»", B: "Mateo se lo devuelve. Carolina lo guarda en el bolso. «Gracias. Por la granada, supongo.»", C: "Mateo se lo devuelve sin pensarlo. Carolina lo guarda. «Gracias. Por la granada, supongo. Qué frase.»" },
            mood: "smile", end: "granada-risa",
          },
          {
            id: "granada-taxi",
            say: { A: "Ríanse en casa. Un taxi para cada uno.", B: "Ríanse en casa, cada uno en la suya. Pido dos taxis.", C: "Ríanse en casa, cada uno en la suya. Pido dos taxis y cierro la función." },
            reply: { A: "Carolina: «Dos taxis.» Mateo: «Dos. Está bien.» Siguen riéndose.", B: "Carolina: «Dos taxis, sí.» Mateo: «Dos. Está bien.» Y no dejan de reír.", C: "Carolina: «Dos taxis, sí.» Mateo: «Dos. Perfecto.» Y siguen riéndose como dos personas que acaban de conocerse." },
            mood: "smile", end: "taxi",
          },
          {
            id: "granada-brazo",
            say: { A: "Y ese brazo. Ambulancia. Con risa, pero ambulancia.", B: "Y ese brazo necesita una ambulancia. Con risa o sin ella.", C: "Y ese brazo necesita una ambulancia, con risa o sin ella." },
            reply: { A: "Mateo mira el brazo. «Es verdad. Sangra.» Carolina llama.", B: "Mateo se mira el brazo como si fuera nuevo. «Es verdad. Sangra.» Carolina llama.", C: "Mateo se mira el brazo como si fuera de otro. «Es verdad, sigue sangrando.» Carolina llama a la ambulancia." },
            mood: "worried", end: "ambulancia",
          },
        ],
      },
      "granada-mateo": {
        who: "mateo", mood: "sad",
        line: {
          A: "Mateo se sienta en el suelo. «Que explote. Ella se va. Yo estoy solo. Que explote todo.» La granada está en tu mano.",
          B: "Mateo se sienta en el suelo del callejón. «Que explote. Ella se va, yo me quedo solo. Que explote todo de una vez.» La granada sigue en tu mano.",
          C: "Mateo se deja caer en el suelo del callejón. «Que explote. Ella se va, yo me quedo solo, y lo merezco. Que explote todo.» La granada sigue en tu mano, inútil.",
        },
        options: [
          {
            id: "granada-plastico2",
            say: { A: "No explota. Es de plástico. Y usted no está solo. Levántese.", B: "No va a explotar, es de plástico. Y no está tan solo. Levántese.", C: "No va a explotar; es de plástico. Y no está tan solo como cree. Levántese." },
            reply: { A: "Mateo se ríe llorando. «¿De plástico? Como mi vida.»", B: "Mateo se ríe entre lágrimas. «¿De plástico? Como mi vida, entonces.»", C: "Mateo se ríe entre lágrimas. «¿De plástico? Como todo lo mío, entonces.»" },
            mood: "sad", end: "calma",
          },
          {
            id: "granada-ambulancia",
            say: { A: "Está sangrando. Llamo a una ambulancia.", B: "Está sangrando mucho. Llamo a una ambulancia.", C: "Está sangrando demasiado para seguir aquí sentado. Llamo a una ambulancia." },
            reply: { A: "Mateo no protesta. «Está bien. Llama.»", B: "Mateo no protesta. «Está bien. Llama.»", C: "Mateo no protesta. «Está bien. Llama. Ya no me quedan argumentos.»" },
            mood: "worried", end: "ambulancia",
          },
          {
            id: "granada-vecinos",
            say: { A: "¡Vecinos! ¡Una granada! ¡Llamen!", B: "¡Vecinos! ¡Hay una granada aquí abajo! ¡Llamen a alguien!", C: "¡Vecinos de la torre! ¡Hay una granada aquí abajo! ¡Llamen a quien haga falta!" },
            reply: { A: "Luces en la torre. Sirenas. Mateo sigue sentado.", B: "Se encienden las luces de la torre. Sirenas. Mateo sigue sentado, indiferente.", C: "Se encienden todas las luces de la torre. Sirenas. Mateo sigue sentado, indiferente a todo." },
            mood: "scared", end: "granada-helicoptero",
          },
        ],
      },
      // ── gas: ella pide que lo rocíes.
      "gas-inicio": {
        who: "carolina", mood: "furious",
        line: {
          A: "Carolina ve tu gas pimienta y grita: «¡Sí! ¡Rocíalo! ¡Rocíalo ahora!» Mateo retrocede con el celular. «¡No, no! ¡Carolina, dile que no!»",
          B: "Carolina ve el gas pimienta y se le iluminan los ojos. «¡Sí! ¡Rocíalo! ¡Rocíalo ahora mismo!» Mateo retrocede con el celular en alto. «¡No! ¡Carolina, dile que no!»",
          C: "Carolina ve el gas pimienta y los ojos le brillan de pura rabia. «¡Sí! ¡Rocíalo! ¡Ahora mismo!» Mateo retrocede con el celular en alto. «¡No, no! ¡Carolina, por favor, dile que no!»",
        },
        options: [
          {
            id: "gas-rociar",
            say: { A: "¡Devuelve el celular o lo uso!", B: "¡Devuelve el celular o lo uso ahora!", C: "¡Devuelve el celular o lo uso, y no es una amenaza vacía!" },
            reply: { A: "Mateo no lo devuelve. Rocías. Mateo cae. Carolina recoge el celular. «Gracias.»", B: "Mateo no lo devuelve. Rocías. Mateo cae al suelo tosiendo y Carolina recoge el celular. «Gracias», dice, y no suena a broma.", C: "Mateo no lo devuelve. Rocías. Mateo cae tosiendo y Carolina recoge el celular con calma. «Gracias», dice, y lo dice en serio." },
            mood: "pain", end: "gas-cae",
          },
          {
            id: "gas-amenaza",
            say: { A: "No lo uso. Pero usted devuelve el celular y se va. Ya.", B: "No lo voy a usar. Pero usted devuelve el celular y se va, ya.", C: "No pienso usarlo. Pero usted devuelve el celular y se va; sin discutir." },
            reply: { A: "Mateo deja el celular en el suelo. «Me voy. Me voy.» Carolina: «¡Cobarde!»", B: "Mateo deja el celular en el suelo con cuidado. «Me voy, me voy.» Carolina, detrás: «¡Cobarde!»", C: "Mateo deposita el celular en el suelo. «Me voy, me voy.» Carolina, detrás: «¡Cobarde! ¡Siempre igual!»" },
            mood: "angry", next: "gas-cobarde",
          },
          {
            id: "gas-guardar",
            say: { A: "No. Lo guardo. Nadie rocía a nadie aquí.", B: "No. Lo guardo. Aquí nadie rocía a nadie.", C: "No. Lo guardo. Aquí nadie rocía a nadie, por mucho que grite." },
            reply: { A: "Carolina: «¿Entonces para qué lo llevas?» Mateo respira.", B: "Carolina te mira, decepcionada. «¿Entonces para qué lo llevas?» Mateo respira aliviado.", C: "Carolina te mira con decepción. «¿Y entonces para qué lo llevas?» Mateo respira como si le hubieran perdonado la vida." },
            mood: "neutral", next: "gas-cobarde",
          },
        ],
      },
      "gas-cobarde": {
        who: "mateo", mood: "sad",
        line: {
          A: "Mateo, sin el celular, se apoya en la pared. «Cobarde. Sí. Tiene razón. Esta noche soy un cobarde.» Carolina guarda el celular.",
          B: "Mateo, ya sin el celular, se apoya en la pared. «Cobarde. Tiene razón. Esta noche he sido un cobarde con todas las letras.» Carolina guarda el celular sin mirarlo.",
          C: "Mateo, sin el celular, se apoya en la pared como si no pudiera sostenerse solo. «Cobarde. Tiene razón. Esta noche he sido un cobarde de manual.» Carolina guarda el celular sin dedicarle una mirada.",
        },
        options: [
          {
            id: "gas-casa",
            say: { A: "Váyase a casa. Ella también. Mañana hablan.", B: "Váyase a casa. Ella también. Mañana hablan, si quieren.", C: "Váyase a casa. Ella también. Mañana hablan, si todavía queda algo que decir." },
            reply: { A: "Mateo se va despacio. Carolina mira al otro lado.", B: "Mateo se aleja despacio por el callejón. Carolina mira hacia el otro lado.", C: "Mateo se aleja despacio por el callejón. Carolina mira hacia el otro lado hasta que desaparece." },
            mood: "sad", end: "gas-separados",
          },
          {
            id: "gas-brazo",
            say: { A: "Y el brazo. Vaya a la clínica. Está cerca.", B: "Y ese brazo necesita una clínica. Está cerca.", C: "Y ese brazo necesita que lo vean; la clínica está cerca." },
            reply: { A: "Mateo mira el brazo. Carolina: «Vete a la clínica, idiota.» Casi suena a cariño.", B: "Mateo se mira el brazo. Carolina: «Vete a la clínica, idiota.» Y casi suena a cariño.", C: "Mateo se mira el brazo. Carolina, sin volverse: «Vete a la clínica, idiota.» Y suena, casi, a cariño." },
            mood: "neutral", end: "ambulancia",
          },
          {
            id: "gas-carolina",
            say: { A: "Carolina, ¿quieres denunciar? Te acompaño.", B: "Carolina, ¿quieres denunciarlo? Te acompaño a la comisaría.", C: "Carolina, ¿quieres denunciarlo? Te acompaño a la comisaría ahora mismo." },
            reply: { A: "Carolina duda. Mira a Mateo. «Sí. Esta vez sí.»", B: "Carolina duda, mira a Mateo, y decide. «Sí. Esta vez sí.»", C: "Carolina duda, mira a Mateo largo rato, y decide. «Sí. Esta vez sí.»" },
            mood: "neutral", end: "policia",
          },
        ],
      },
      // ── lápiz: el contrato.
      "lapiz-inicio": {
        who: "mateo", mood: "surprised",
        line: {
          A: "Sacas el lápiz y un papel. Mateo se detiene. «¿Qué haces?» Dices: «Escribimos lo que quiere cada uno». Carolina: «Yo quiero mi celular. Escribe eso.»",
          B: "Sacas el lápiz y un papel, y los dos se callan de golpe. Mateo: «¿Qué está haciendo?» Explicas que cada uno va a escribir lo que quiere. Carolina: «Quiero mi celular. Escribe eso primero.»",
          C: "Sacas el lápiz y un papel, y el silencio llega antes que la explicación. Mateo: «¿Qué está haciendo?» Propones que cada uno escriba lo que quiere. Carolina: «Quiero mi celular. Apúntalo en mayúsculas.»",
        },
        options: [
          {
            id: "lapiz-contrato",
            say: { A: "Mateo, ¿qué quiere usted? Una línea.", B: "Mateo, ¿qué quiere usted? En una línea.", C: "Mateo, ¿qué quiere usted? Una línea, sin discursos." },
            reply: { A: "Mateo piensa. «Que borre el video. Y que me escuche cinco minutos.»", B: "Mateo piensa un momento. «Que borre el video. Y cinco minutos para explicarme.»", C: "Mateo lo piensa en serio. «Que borre el video. Y cinco minutos de atención, sin interrupciones.»" },
            mood: "neutral", next: "lapiz-firma",
          },
          {
            id: "lapiz-numero",
            say: { A: "Carolina, escribe el número de alguien. Para llamar ahora.", B: "Carolina, escribe el número de alguien de confianza. Lo llamamos ahora.", C: "Carolina, apunta el número de alguien de confianza; lo llamamos ahora mismo." },
            reply: { A: "Carolina escribe. «Mi hermana.» Mateo baja el celular. «¿Tu hermana? Me odia.»", B: "Carolina escribe un número. «Mi hermana.» Mateo baja el celular. «¿Tu hermana? Me odia.»", C: "Carolina escribe un número sin dudar. «Mi hermana.» Mateo baja el celular. «¿Tu hermana? Me odia con motivo.»" },
            mood: "worried", end: "lapiz-hermana",
          },
          {
            id: "lapiz-dibujo",
            say: { A: "Mejor dibujo lo que veo: dos personas cansadas.", B: "Mejor dibujo lo que veo: dos personas muy cansadas de gritar.", C: "Mejor dibujo lo que veo: dos personas agotadas de gritarse en un callejón." },
            reply: { A: "Dibujas rápido. Carolina mira. «Somos ridículos.» Mateo: «Un poco.»", B: "Dibujas rápido. Carolina mira el papel. «Somos ridículos.» Mateo, en voz baja: «Un poco, sí.»", C: "Dibujas en dos minutos. Carolina mira el papel largo rato. «Somos ridículos.» Mateo, bajito: «Bastante.»" },
            mood: "smile", next: "lapiz-firma",
          },
        ],
      },
      "lapiz-firma": {
        who: "carolina", mood: "neutral",
        line: {
          A: "Carolina lee el papel. «Borrar el video. Cinco minutos. Y mi celular.» Mira a Mateo. «¿Firmas?»",
          B: "Carolina lee el papel en voz alta. «Borrar el video, cinco minutos de conversación y mi celular de vuelta.» Mira a Mateo. «¿Firmas?»",
          C: "Carolina lee el papel en voz alta, como un abogado. «Borrar el video, cinco minutos de conversación y mi celular de vuelta ahora.» Mira a Mateo. «¿Firmas o no?»",
        },
        options: [
          {
            id: "lapiz-firmar",
            say: { A: "Firmen los dos. Aquí. Y aquí.", B: "Firmen los dos: aquí y aquí.", C: "Firmen los dos: aquí usted, aquí usted. Y yo de testigo." },
            reply: { A: "Firman. Mateo devuelve el celular. Carolina borra el video. Cinco minutos.", B: "Firman los dos. Mateo devuelve el celular; Carolina borra el video delante de él. Empiezan los cinco minutos.", C: "Firman los dos. Mateo devuelve el celular; Carolina borra el video sin esconder la pantalla. Empiezan los cinco minutos." },
            mood: "smile", end: "lapiz-contrato-fin",
          },
          {
            id: "lapiz-no",
            say: { A: "Si no firma, me voy. Y llamo a la policía.", B: "Si no firma, yo me voy y llamo a la policía.", C: "Si no firma, me voy y lo siguiente que llega es la policía." },
            reply: { A: "Mateo firma rápido. «Firmo. Firmo.»", B: "Mateo firma a toda velocidad. «Firmo, firmo.»", C: "Mateo firma con una rapidez sospechosa. «Firmo, firmo, firmo.»" },
            mood: "neutral", end: "lapiz-contrato-fin",
          },
          {
            id: "lapiz-brazo",
            say: { A: "Y una línea más: el brazo, a la clínica.", B: "Y una cláusula más: ese brazo va a la clínica esta noche.", C: "Y una cláusula final: ese brazo pasa por la clínica esta noche, sin excusas." },
            reply: { A: "Mateo firma. Carolina: «Yo lo llevo.» Mateo la mira sorprendido.", B: "Mateo firma. Carolina añade: «Lo llevo yo.» Mateo la mira sin entender nada.", C: "Mateo firma. Carolina añade, sin mirarlo: «Lo llevo yo.» Mateo la mira como si acabara de aparecer." },
            mood: "smile", end: "ambulancia",
          },
        ],
      },
      // ── libro: el cuento.
      "libro-inicio": {
        who: "mateo", mood: "laugh",
        line: {
          A: "Mateo ve tu libro y se ríe. «¿Nos va a leer un cuento? ¿Para dormir?» Carolina: «Cállate, Mateo.» Pero mira el libro.",
          B: "Mateo ve el libro y suelta una risa agria. «¿Nos va a leer un cuento para dormir? Qué oportuno.» Carolina: «Cállate, Mateo.» Pero no deja de mirar el libro.",
          C: "Mateo ve el libro y suelta una risa amarga. «¿Nos va a leer un cuento para dormir? Es justo lo que necesitábamos.» Carolina: «Cállate, Mateo.» Pero sus ojos ya están en el libro.",
        },
        options: [
          {
            id: "libro-leer",
            say: { A: "Sí. Una frase. Escuchen.", B: "Sí. Una sola frase. Escuchen.", C: "Sí. Una sola frase; escuchen, que es corta." },
            reply: { A: "Lees: «Nadie gana una pelea de amor». Carolina deja de gritar. Mateo mira el suelo.", B: "Lees: «En una pelea de amor no gana nadie; solo se decide quién pierde primero». Carolina deja de gritar. Mateo mira el suelo.", C: "Lees: «En una pelea de amor no gana nadie; solo se decide quién pierde primero». Carolina enmudece. Mateo mira el suelo como si la frase estuviera escrita ahí." },
            mood: "sad", next: "libro-frase",
          },
          {
            id: "libro-regalar",
            say: { A: "Mateo, tome el libro. A cambio, el celular.", B: "Mateo, tome el libro. A cambio, el celular para ella.", C: "Mateo, el libro es suyo. A cambio, el celular vuelve a su dueña." },
            reply: { A: "Mateo se ríe. Toma el libro. Da el celular. «Mal negocio. Pero bueno.»", B: "Mateo se ríe y acepta el libro. Entrega el celular. «Pésimo negocio. Pero bueno.»", C: "Mateo se ríe, toma el libro y entrega el celular. «Pésimo negocio para mí. Pero acepto.»" },
            mood: "smile", end: "libro-trueque",
          },
          {
            id: "libro-lanzar",
            say: { A: "Ríase. Pero el celular es de ella.", B: "Ríase todo lo que quiera. Pero el celular es de ella.", C: "Ríase cuanto quiera. Pero el celular sigue siendo de ella." },
            reply: { A: "Mateo te quita el libro y lo tira al suelo. «¡Basta de todos!»", B: "Mateo te arranca el libro de las manos y lo tira al suelo. «¡Basta ya, todos!»", C: "Mateo te arranca el libro de las manos y lo lanza al suelo. «¡Basta ya! ¡Todos!»" },
            mood: "furious", end: "libro-tirado",
          },
        ],
      },
      "libro-frase": {
        who: "carolina", mood: "sad",
        line: {
          A: "Carolina se sienta en el escalón. «Perdemos los dos. Siempre.» Mateo le da el celular sin decir nada.",
          B: "Carolina se sienta en el escalón. «Perdemos los dos. Siempre perdemos los dos.» Mateo le devuelve el celular sin decir palabra.",
          C: "Carolina se sienta en el escalón, de pronto sin fuerzas. «Perdemos los dos. Siempre.» Mateo le devuelve el celular en silencio, como quien devuelve algo roto.",
        },
        options: [
          {
            id: "libro-abrazo",
            say: { A: "Mateo, siéntese con ella. Sin hablar.", B: "Mateo, siéntese a su lado. Sin decir nada.", C: "Mateo, siéntese a su lado, y por una vez no diga nada." },
            reply: { A: "Mateo se sienta. Carolina apoya la cabeza en su hombro. Lloran.", B: "Mateo se sienta. Carolina apoya la cabeza en su hombro sano. Lloran los dos.", C: "Mateo se sienta. Carolina apoya la cabeza en el hombro sano. Lloran los dos sin ruido." },
            mood: "love", end: "libro-abrazo",
          },
          {
            id: "libro-dos-taxis",
            say: { A: "Dos taxis. Hoy no. Mañana hablan.", B: "Dos taxis. Hoy no es el día. Mañana hablan.", C: "Dos taxis. Hoy no es la noche para arreglarlo; mañana, con luz." },
            reply: { A: "Carolina asiente. Mateo también. «Mañana.»", B: "Carolina asiente. Mateo también. «Mañana. Con luz.»", C: "Carolina asiente. Mateo también. «Mañana, con luz y sin botellas.»" },
            mood: "sad", end: "taxi",
          },
          {
            id: "libro-prestar",
            say: { A: "Carolina, te presto el libro. Lee esa página en casa.", B: "Carolina, te presto el libro. Lee esa página en casa, con calma.", C: "Carolina, te presto el libro. Lee esa página en casa, cuando no haya nadie gritando." },
            reply: { A: "Carolina toma el libro. «Gracias. Lo devuelvo.» Mateo: «¿Y a mí?»", B: "Carolina toma el libro contra el pecho. «Gracias. Te lo devuelvo.» Mateo: «¿Y a mí nadie me presta nada?»", C: "Carolina abraza el libro contra el pecho. «Gracias. Te lo devuelvo, prometido.» Mateo: «¿Y a mí nadie me presta nada?»" },
            mood: "smile", end: "libro-trueque",
          },
        ],
      },
      // ── corazón: los dos se ablandan.
      "corazon-inicio": {
        who: "carolina", mood: "love",
        line: {
          A: "Carolina ve el corazón. Deja de gritar. Mira a Mateo. «Estás sangrando. ¿Por qué estás sangrando?» Mateo baja el celular. «No sé. Ya no sé nada.»",
          B: "Carolina ve el corazón y el grito se le apaga. Mira a Mateo como si lo viera por primera vez. «Estás sangrando. ¿Por qué estás sangrando?» Mateo baja el celular. «No sé. Ya no sé nada.»",
          C: "Carolina ve el corazón y el grito se le muere en la garganta. Mira a Mateo como si acabara de llegar. «Estás sangrando. ¿Por qué estás sangrando?» Mateo baja el celular, vencido. «No lo sé. Ya no sé nada de nada.»",
        },
        options: [
          {
            id: "corazon-hablar",
            say: { A: "Hablen. Sin gritar. Yo me quedo cerca.", B: "Hablen, sin gritar. Yo me quedo aquí cerca.", C: "Hablen, sin gritar y sin celulares. Yo me quedo aquí cerca, por si acaso." },
            reply: { A: "Mateo: «Tenía miedo de perderte.» Carolina: «Me perdiste gritando.»", B: "Mateo: «Tenía miedo de perderte.» Carolina: «Me perdiste a gritos, no en silencio.»", C: "Mateo: «Tenía miedo de perderte.» Carolina: «Me perdiste a gritos, Mateo. No en silencio.»" },
            mood: "love", next: "corazon-decision",
          },
          {
            id: "corazon-brazo",
            say: { A: "Carolina, mira su brazo. Hay que curarlo.", B: "Carolina, mira ese brazo. Hay que curarlo esta noche.", C: "Carolina, mire ese brazo. Hay que curarlo esta noche, lo demás puede esperar." },
            reply: { A: "Carolina se acerca. Toca el brazo. Mateo cierra los ojos.", B: "Carolina se acerca y le toca el brazo con cuidado. Mateo cierra los ojos.", C: "Carolina se acerca y le examina el brazo con una delicadeza que contradice toda la noche. Mateo cierra los ojos." },
            mood: "love", next: "corazon-decision",
          },
          {
            id: "corazon-beso",
            say: { A: "Dense un beso. O un adiós. Pero decidan.", B: "Dense un beso o dense un adiós. Pero decidan ahora.", C: "Dense un beso o un adiós, pero decidan ahora; el callejón no aguanta otra vuelta." },
            reply: { A: "Se miran. Carolina lo besa. Después le pega en el brazo sano. «Idiota.»", B: "Se miran largo. Carolina lo besa. Después le pega en el brazo sano. «Idiota.»", C: "Se miran un rato largo. Carolina lo besa. Y después le da un golpe en el brazo sano. «Idiota.»" },
            mood: "love", end: "corazon-beso",
          },
        ],
      },
      "corazon-decision": {
        who: "mateo", mood: "smitten",
        line: {
          A: "Mateo le da el celular. «Súbelo si quieres. Pero no te vayas.» Carolina mira el celular. Mira a Mateo.",
          B: "Mateo le devuelve el celular. «Publica el video si quieres. Pero no te vayas.» Carolina mira el celular, después a Mateo.",
          C: "Mateo le devuelve el celular sin condiciones. «Publícalo si quieres. Pero no te vayas.» Carolina mira el celular, luego a Mateo, luego otra vez el celular.",
        },
        options: [
          {
            id: "corazon-quedarse",
            say: { A: "Carolina, ¿qué quieres tú?", B: "Carolina, ¿y tú qué quieres?", C: "Carolina, olvida el video: ¿qué quieres tú?" },
            reply: { A: "Carolina borra el video. Lo besa. «Quiero dormir. Contigo. Mañana vemos.»", B: "Carolina borra el video y lo besa. «Quiero dormir. Contigo. Mañana vemos qué hacemos.»", C: "Carolina borra el video y lo besa. «Quiero dormir. Contigo, aunque no te lo merezcas. Mañana vemos.»" },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "corazon-separados",
            say: { A: "A veces el amor es irse. Carolina, decide tú.", B: "A veces querer también es irse. Carolina, decide tú.", C: "A veces querer a alguien es irse a tiempo. Carolina, la decisión es tuya." },
            reply: { A: "Carolina guarda el celular. «Me voy. Te quiero. Me voy.» Mateo llora.", B: "Carolina guarda el celular. «Me voy. Te quiero, y me voy.» Mateo llora sin esconderse.", C: "Carolina guarda el celular. «Me voy. Te quiero, y precisamente por eso me voy.» Mateo llora sin esconderse." },
            mood: "sad", end: "corazon-separados",
          },
          {
            id: "corazon-clinica",
            say: { A: "Primero la clínica. Juntos. Después deciden.", B: "Primero la clínica, juntos. Después deciden lo demás.", C: "Primero la clínica, juntos; las decisiones grandes, con el brazo cosido." },
            reply: { A: "Carolina lo toma del brazo sano. «Vamos.» Mateo sonríe.", B: "Carolina lo toma del brazo sano. «Vamos, idiota.» Mateo sonríe.", C: "Carolina lo toma del brazo sano. «Vamos, idiota.» Mateo sonríe como un hombre perdonado a medias." },
            mood: "love", end: "ambulancia",
          },
        ],
      },
    },
    ends: {
      policia: {
        text: { A: "Llega un patrullero. Carolina habla con la policía. Mateo se sienta en el escalón con el brazo vendado.", B: "Llega un patrullero. Carolina habla con la policía mientras Mateo, con el brazo vendado, espera sentado en el escalón.", C: "Llega un patrullero. Carolina habla con la policía con una calma recién estrenada. Mateo espera en el escalón, con el brazo vendado y la mirada perdida." },
        change: "policia", recap: "La policía puso fin a la pelea de Carolina y Mateo.",
      },
      taxi: {
        text: { A: "Un taxi se lleva a Carolina. Mateo se queda en el callejón, solo, con el brazo sangrando.", B: "Un taxi se lleva a Carolina. Mateo se queda solo en el callejón, con el brazo sangrando y el traje roto.", C: "Un taxi se lleva a Carolina. Mateo se queda solo en el callejón, con el brazo sangrando, el traje roto y la noche entera por delante." },
        change: "se-va", recap: "Carolina se fue en taxi y Mateo se quedó solo.",
      },
      ambulancia: {
        text: { A: "La ambulancia se lleva a Mateo. Carolina sube con él. No se hablan, pero van juntos.", B: "La ambulancia se lleva a Mateo. Carolina sube con él. No se dicen nada, pero van juntos.", C: "La ambulancia se lleva a Mateo. Carolina sube con él sin que nadie se lo pida. No se hablan, pero van juntos, y eso ya es una frase." },
        change: "ambulancia", recap: "Mateo fue al hospital con Carolina a su lado.",
      },
      pelea: {
        text: { A: "Mateo te empuja. El portero lo sujeta. Carolina grita. Alguien llama a la policía.", B: "Mateo te empuja y el portero de la torre lo sujeta contra la pared. Carolina grita. Desde un balcón, alguien llama a la policía.", C: "Mateo te empuja y el portero de la torre lo inmoviliza contra la pared. Carolina grita. Desde un balcón alguien ya está llamando a la policía." },
        change: "pelea", recap: "La pelea de Carolina y Mateo terminó a empujones.",
      },
      calma: {
        text: { A: "Carolina en el escalón. Mateo de pie, lejos. Nadie grita. Es suficiente por hoy.", B: "Carolina sentada en el escalón, Mateo de pie a tres metros. Nadie grita. Por hoy, es suficiente.", C: "Carolina sentada en el escalón, Mateo de pie a tres metros exactos. Nadie grita. Por esta noche, es más que suficiente." },
        change: "se-sienta", recap: "Conseguiste que Carolina y Mateo dejaran de gritar.",
      },
      "cuchillo-taxi": {
        text: { A: "Carolina sube a un taxi. Mateo se va caminando. Nadie te dice adiós.", B: "Carolina sube a un taxi y Mateo se aleja caminando. Nadie te dice adiós, y lo entiendes.", C: "Carolina sube a un taxi y Mateo se aleja a pie. Nadie te dice adiós, y con el cuchillo en el bolsillo lo entiendes perfectamente." },
        change: "se-va", recap: "Tu cuchillo terminó la pelea, pero nadie te lo agradeció.",
      },
      "cuchillo-policia": {
        text: { A: "Llega la policía. Mateo cuenta lo del empujón. Tú cuentas lo del cuchillo. Nadie queda bien.", B: "Llega la policía. Mateo cuenta lo del empujón, tú lo del cuchillo. Nadie sale bien parado.", C: "Llega la policía. Mateo cuenta lo del empujón, tú lo del cuchillo, Carolina lo del celular. Nadie sale bien parado de ese callejón." },
        change: "policia", recap: "Un cuchillo y un empujón terminaron en la comisaría.",
      },
      "pistola-huye": {
        text: { A: "Mateo desaparece. Carolina se va con su celular. Guardas la pistola antes de que alguien mire.", B: "Mateo desaparece calle abajo. Carolina se va con su celular. Guardas la pistola antes de que alguien se asome.", C: "Mateo desaparece calle abajo. Carolina se aleja con su celular recuperado. Guardas la pistola antes de que alguien se asome desde la torre." },
        change: "huye", recap: "Tu pistola hizo que Mateo devolviera el celular y huyera.",
      },
      "pistola-policia": {
        text: { A: "Patrullero. Manos arriba. La pelea de pareja ya no importa; importa tu pistola.", B: "Llega un patrullero. Manos arriba. La pelea de pareja ya no le importa a nadie; ahora importa tu pistola.", C: "Llega un patrullero con las luces apagadas. Manos arriba. La pelea de pareja deja de importar; lo único que importa es tu pistola." },
        change: "manos-arriba", recap: "La pistola en el callejón terminó con tus manos arriba.",
      },
      "granada-helicoptero": {
        text: { A: "Helicóptero sobre la torre. Vecinos en los balcones. Carolina y Mateo se abrazan de miedo.", B: "Un helicóptero sobre la torre y todos los vecinos en los balcones. Carolina y Mateo se abrazan, aunque solo sea de miedo.", C: "Un helicóptero clavado sobre la torre y todos los balcones llenos. Carolina y Mateo se abrazan, aunque solo sea por miedo, que también cuenta." },
        change: "helicoptero", recap: "Tu granada unió a Carolina y Mateo bajo un helicóptero.",
      },
      "granada-risa": {
        text: { A: "Los dos se ríen hasta llorar. Carolina tiene su celular. Mateo tiene su brazo. Todos tienen historia.", B: "Los dos se ríen hasta las lágrimas. Carolina recupera su celular, Mateo su dignidad, y todos una historia.", C: "Los dos se ríen hasta las lágrimas. Carolina recupera el celular, Mateo algo de dignidad, y los tres una historia que nadie va a creer." },
        change: "sonrie", recap: "Una granada de plástico hizo reír a una pareja en guerra.",
      },
      "gas-cae": {
        text: { A: "Mateo en el suelo, llorando por el gas. Carolina con su celular. Tú con dudas.", B: "Mateo en el suelo, llorando por el gas. Carolina con su celular recuperado. Tú, con bastantes dudas.", C: "Mateo en el suelo, llorando por el gas. Carolina con su celular recuperado y una sonrisa que no te gusta. Tú, con todas las dudas del mundo." },
        change: "cae", recap: "Rociaste a Mateo con gas para recuperar el celular.",
      },
      "gas-separados": {
        text: { A: "Mateo se va por un lado. Carolina por el otro. El callejón queda vacío.", B: "Mateo se va por un lado, Carolina por el otro. El callejón se queda vacío y en silencio.", C: "Mateo se va por un lado, Carolina por el otro. El callejón se queda vacío, en un silencio que parece definitivo." },
        change: "triste", recap: "Carolina y Mateo se separaron en el callejón.",
      },
      "lapiz-hermana": {
        text: { A: "La hermana de Carolina llega en diez minutos. Mira a Mateo. Él devuelve el celular sin discutir.", B: "La hermana de Carolina llega en diez minutos. Mira a Mateo una sola vez y él devuelve el celular sin discutir.", C: "La hermana de Carolina llega en diez minutos. Le basta una mirada a Mateo para que devuelva el celular sin abrir la boca." },
        change: "llama", recap: "Llamaste a la hermana de Carolina y Mateo cedió.",
      },
      "lapiz-contrato-fin": {
        text: { A: "El contrato queda firmado. Cinco minutos de conversación. Después, dos taxis.", B: "El contrato queda firmado. Cinco minutos de conversación, en voz baja. Después, dos taxis.", C: "El contrato queda firmado y cumplido: cinco minutos de conversación en voz baja. Después, dos taxis en direcciones opuestas." },
        change: "sonrie", recap: "Redactaste un contrato de paz entre Carolina y Mateo.",
      },
      "libro-trueque": {
        text: { A: "Carolina con su celular. Mateo con un libro. Los dos se van. Mejor que antes.", B: "Carolina se va con su celular, Mateo con un libro bajo el brazo. Se van por separado, mejor que antes.", C: "Carolina se va con su celular y Mateo con un libro bajo el brazo. Se alejan por separado, algo mejor de lo que llegaron." },
        change: "se-va", recap: "Cambiaste un libro por un celular en el callejón.",
      },
      "libro-tirado": {
        text: { A: "El libro en el suelo. Mateo se va. Carolina recoge el libro y te lo da. «Perdón por él.»", B: "El libro queda en el suelo. Mateo se va furioso. Carolina recoge el libro y te lo devuelve. «Perdón. Por él.»", C: "El libro queda en el suelo. Mateo se va hecho una furia. Carolina recoge el libro, lo limpia y te lo devuelve. «Perdón. Por él, como siempre.»" },
        change: "enojado", recap: "Mateo tiró tu libro y se fue furioso.",
      },
      "libro-abrazo": {
        text: { A: "Los dos en el escalón. Lloran. Se abrazan. El libro, abierto en esa página.", B: "Los dos en el escalón, llorando y abrazados. El libro queda abierto en esa página.", C: "Los dos en el escalón, llorando y abrazados. El libro queda abierto en esa página, como si la hubiera escrito para ellos." },
        change: "abraza", recap: "Una frase de tu libro abrazó a Carolina y Mateo.",
      },
      "corazon-beso": {
        text: { A: "Carolina y Mateo se besan en el callejón. Después van a la clínica, de la mano.", B: "Carolina y Mateo se besan en el callejón. Después caminan hasta la clínica, de la mano.", C: "Carolina y Mateo se besan en el callejón. Después caminan hasta la clínica de la mano, con el brazo vendado entre los dos." },
        change: "beso", recap: "El corazón reconcilió a Carolina y Mateo con un beso.",
      },
      "corazon-separados": {
        text: { A: "Carolina se va. Mateo se queda. Los dos lloran. Es un adiós con amor.", B: "Carolina se aleja sin mirar atrás. Mateo se queda llorando. Es un adiós, pero con amor.", C: "Carolina se aleja sin volverse. Mateo se queda llorando en el callejón. Es un adiós, pero de los que se dan con amor." },
        change: "triste", recap: "Carolina se fue con amor y Mateo se quedó llorando.",
      },
    },
    speak: {
      A1: "¿Gritas cuando te enojas?",
      A2: "¿Qué haces cuando dos personas discuten delante de ti?",
      B1: "¿Alguna vez grabaste o te grabaron en un mal momento?",
      B2: "¿Debería una persona de fuera meterse en la pelea de una pareja?",
      C1: "¿Quién pierde más en una pelea de pareja: el que grita o el que calla?",
      C2: "¿Qué derecho tiene alguien sobre el peor momento de otra persona?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Te asustas fácil?", B: "¿Qué haces cuando una discusión ajena te da miedo?", C: "¿Por qué una amenaza silencia una pelea pero nunca la resuelve?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué darías en un robo?", B: "¿Qué objeto entregarías primero si te robaran?", C: "¿Qué revela de una pareja la forma en que reacciona ante un peligro común?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Te ríes cuando tienes miedo?", B: "¿Alguna vez una situación absurda terminó una pelea?", C: "¿Por qué el absurdo desarma la rabia mejor que la razón?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Usarías gas contra alguien?", B: "¿Alguien te pidió alguna vez que hicieras daño a otra persona?", C: "¿Hasta dónde llega la defensa de alguien y dónde empieza la venganza?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes lo que quieres?", B: "¿Alguna vez pusiste por escrito un acuerdo con alguien querido?", C: "¿Qué cambia en una discusión cuando las exigencias se escriben en un papel?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Qué frase te calma?", B: "¿Qué frase de un libro o una canción te ayudó en una pelea?", C: "¿Puede una frase ajena decir lo que dos personas no se atreven a decirse?" } },
      corazon: { start: "corazon-inicio", fx: "beso", speak: { A: "¿Perdonas rápido?", B: "¿Cuándo fue la última vez que perdonaste a alguien que te gritó?", C: "¿Es posible querer a alguien y, por eso mismo, dejarlo?" } },
    },
  },
