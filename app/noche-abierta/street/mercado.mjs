// Noche abierta · calle · Mercado nocturno: humo de parrilla, luces de colores, música y gente que se busca entre los puestos.
const CORAZON = { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." };

export default [
  // ───────────────────────────── ESCENA 1 ─────────────────────────────
  {
    id: "mercado-perro",
    kind: "escena",
    district: "mercado",
    title: "¿Viste a Toto?",
    verb: "AYUDAR",
    goal: "Describir un animal, preguntar dónde y cuándo, proponer un plan y tranquilizar a alguien preocupado.",
    cast: [
      {
        id: "camila", name: "Camila", role: "Busca a su perro",
        age: "adult", body: "f", build: "athletic", height: 1.66,
        hair: "ponytail", hairColor: "#3b2418", skin: "#c9946c",
        top: "hoodie", topColor: "#e0b03a", bottom: "jeans", bottomColor: "#2c3a55",
        extras: ["phone"], pose: "phone", props: ["leash"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "camila", mood: "worried",
        line: {
          A: "Una chica mira debajo de los puestos con una correa vacía en la mano. «Perdona, ¿viste a Toto? Es mi perro. Se escapó.»",
          B: "Una chica con sudadera amarilla se agacha bajo cada puesto, con una correa vacía en la mano. «Perdona, ¿has visto un perro pequeño? Se llama Toto y se me escapó hace un rato.»",
          C: "Una chica recorre los puestos agachada, correa vacía en mano, ignorando el olor a parrilla. «Perdona que te moleste: ¿por casualidad has visto pasar un perro pequeño con cara de culpable?»",
        },
        options: [
          {
            id: "como",
            say: { A: "No sé. ¿Cómo es Toto?", B: "No estoy seguro. ¿Cómo es exactamente?", C: "Puede ser, aquí pasa de todo. Descríbemelo bien, a ver si me suena." },
            reply: { A: "Camila enseña una foto. «Es pequeño y marrón. Tiene un collar rojo y orejas grandes.»", B: "Camila te enseña una foto en el celular. «Es pequeño, marrón, con un collar rojo. Y tiene unas orejas enormes, no te puedes equivocar.»", C: "Camila te pone el celular delante. «Marrón, del tamaño de una barra de pan, collar rojo y unas orejas que parecen prestadas de un perro más grande.»" },
            mood: "worried", next: "pista",
          },
          {
            id: "donde",
            say: { A: "¿Dónde lo viste por última vez?", B: "¿Dónde lo viste por última vez? ¿Hace cuánto?", C: "Vamos por partes: ¿dónde lo viste por última vez y cuánto tiempo ha pasado?" },
            reply: { A: "Camila señala el humo. «Allí, en el puesto de empanadas. Hace veinte minutos.»", B: "«Junto al puesto de empanadas, hace unos veinte minutos. Estaba mirando la carne como si fuera su novia.»", C: "«En el puesto de empanadas, hace veinte minutos. Estaba en plena negociación con el vendedor, ya sabes, con la mirada.»" },
            mood: "sad", next: "pista",
          },
          {
            id: "no-vi",
            say: { A: "No, lo siento. No lo vi.", B: "Lo siento, no lo he visto. ¿Quieres que te ayude a buscarlo?", C: "Lamentablemente, no. Pero tengo diez minutos y buena vista, si te sirven." },
            reply: { A: "Camila suspira. «Bueno… ¿Me ayudas? Solo cinco minutos.»", B: "Camila respira hondo. «¿De verdad? Gracias. Sola ya no sé dónde mirar.»", C: "«Me sirven muchísimo», dice Camila. «Llevo media hora hablando sola con los puestos.»" },
            mood: "sad", next: "plan",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y un papel.", B: "Sacas el lápiz y un papel arrugado.", C: "Sacas el lápiz y alisas un papel contra la mesa de un puesto." },
            say: { A: "¿Hacemos un cartel? Yo dibujo a Toto.", B: "¿Y si hacemos un cartel? Descríbemelo y yo lo dibujo.", C: "Hagamos un cartel. Tú me lo describes y yo intento que no parezca una papa con orejas." },
            reply: { A: "Camila sonríe un poco. «¡Buena idea! Es pequeño, marrón, con collar rojo.»", B: "A Camila se le ilumina la cara. «¡Sí! Pequeño, marrón, collar rojo. Y las orejas, grandes, por favor.»", C: "Camila se ríe por primera vez. «Un poco de papa sí tiene. Pon el collar rojo, que es lo que más se ve.»" },
            mood: "smile", next: "pista",
          },
          libro: {
            act: { A: "Abres tu libro. Atrás hay un mapa.", B: "Abres tu libro: en la última página hay un mapa de la ciudad.", C: "Abres tu libro por la última página, donde alguien dibujó un mapa de la ciudad." },
            say: { A: "Mira, un mapa. ¿Dónde vives?", B: "Mira, aquí hay un mapa. ¿Por dónde crees que pudo ir?", C: "Pensemos como Toto: según este mapa, ¿adónde iría un perro asustado?" },
            reply: { A: "Camila mira el mapa. «Vivo aquí. Y aquí está el río.»", B: "Camila pasa el dedo por el mapa. «Vivimos aquí… Y siempre quiere ir al río, al este.»", C: "Camila estudia el mapa en silencio. «Un perro asustado iría al río. Toto adora el agua, aunque luego le dé miedo.»" },
            mood: "neutral", next: "pista",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Ves que se acerca rápido y sacas el gas pimienta.", C: "Se te acerca demasiado rápido y, por reflejo, sacas el gas pimienta." },
            say: { A: "¡Para! ¿Qué quieres?", B: "¡Quieta! ¿Qué quieres de mí?", C: "Un momento, un momento. ¿Qué quieres exactamente?" },
            reply: { A: "Camila levanta la correa. «¡Solo busco a mi perro!»", B: "Camila se queda inmóvil, con la correa en alto. «¡Busco a mi perro! ¡Nada más!»", C: "Camila levanta la correa vacía como si fuera una bandera blanca. «Busco a un perro, no pelea.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Muestras la granada.", B: "Sin pensar, le muestras la granada.", C: "Le muestras la granada, que no es el mejor saludo del mundo." },
            say: { A: "No vi a tu perro. ¿Esto te ayuda?", B: "No he visto a tu perro, pero tengo esto. No sé si sirve.", C: "No he visto a tu perro, pero llevo esto encima, por si acaso es útil." },
            reply: { A: "Camila da un paso atrás. «¿¡Una granada!? ¡No, gracias!»", B: "Camila retrocede hasta chocar con un puesto. «¿¡Para qué me va a servir una granada!?»", C: "«¿Útil para qué, para encontrar al perro en pedacitos?», dice Camila, blanca como el papel." },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al agacharte para mirar, se ve tu pistola.", C: "Al agacharte bajo un puesto, la pistola asoma de tu chaqueta." },
            say: { A: "Hola. ¿Cómo se llama tu perro?", B: "Hola. Te ayudo. ¿Cómo se llama tu perro?", C: "Tranquila, te ayudo a buscar. ¿Cómo dices que se llama?" },
            reply: { A: "Camila mira la pistola. «Eh… T-Toto. No pasa nada, ¿no?»", B: "Camila se pone pálida. «T-Toto… Oye, ¿eso es una pistola de verdad?»", C: "«Toto», dice Camila, sin quitar los ojos de tu chaqueta. «Y tú, ¿quién eres exactamente?»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo y cortas un trozo de cuerda.", B: "Sacas el cuchillo y cortas un trozo de cuerda de un puesto vacío.", C: "Con el cuchillo, cortas un trozo de cuerda que sobra en un toldo." },
            say: { A: "Mira, una correa extra. Para Toto.", B: "Toma, una correa de emergencia, por si la tuya se rompe.", C: "Una correa de repuesto. Por si Toto aparece y decide escaparse otra vez." },
            reply: { A: "Camila se asusta un poco. Después sonríe. «Ah… Gracias.»", B: "Camila se tensa al ver el cuchillo, pero luego toma la cuerda. «Ah, era para eso. Gracias.»", C: "Camila suelta el aire. «Por un segundo pensé otra cosa. Gracias, es muy práctico.»" },
            mood: "worried", next: "pista",
          },
          corazon: {
            act: CORAZON,
            say: { A: "Tranquila. Vamos a encontrar a Toto.", B: "Tranquila, que lo vamos a encontrar. Los perros siempre vuelven.", C: "Respira. Los perros tienen mejor orientación que nosotros. Lo encontramos." },
            reply: { A: "Camila sonríe. «Gracias. Toto era de mi abuela. Es todo lo que tengo de ella.»", B: "Camila se emociona. «Gracias… Toto era de mi abuela. Si lo pierdo, es como perderla otra vez.»", C: "Camila se seca los ojos y sonríe. «Era el perro de mi abuela. Ella decía que Toto tenía alma de explorador.»" },
            mood: "love", next: "plan",
          },
        },
      },
      pista: {
        who: "camila", mood: "worried",
        line: {
          A: "Camila mira el humo del puesto. «Empezó la música y Toto salió corriendo.»",
          B: "Camila mira hacia el escenario. «Cuando empezó la música fuerte, Toto se asustó y salió corriendo entre la gente.»",
          C: "Camila señala el escenario con un gesto de reproche. «Bastó que alguien subiera el volumen para que Toto se esfumara.»",
        },
        options: [
          {
            id: "vendedor",
            say: { A: "Vamos a preguntar en el puesto de empanadas.", B: "Preguntemos al de las empanadas. A lo mejor vio hacia dónde fue.", C: "El de las empanadas lo ve todo desde su parrilla. Seguro que vio algo." },
            reply: { A: "El vendedor dice: «¡Sí! Un perrito marrón corrió hacia el río, al este.»", B: "El vendedor se limpia las manos. «¿Uno marrón con collar rojo? Salió corriendo hacia el este, hacia el río.»", C: "«¿El orejón? Me robó media mirada y se fue al este, hacia el río», dice el vendedor sin dejar de cocinar." },
            mood: "surprised", end: "rio",
          },
          {
            id: "llamar",
            say: { A: "Llámalo. A lo mejor viene.", B: "¿Por qué no lo llamas fuerte? A lo mejor te oye.", C: "Llámalo con la voz de la comida. Esa nunca falla." },
            reply: { A: "Camila grita: «¡Toto!» Nada. Solo música.", B: "Camila grita «¡Toto!» varias veces, pero la música está demasiado fuerte.", C: "Camila grita «¡Toto, galleta!» con todo el pulmón. Responden tres perros, ninguno es Toto." },
            mood: "sad", next: "plan",
          },
          {
            id: "calma",
            say: { A: "Tranquila. Un perro pequeño no va muy lejos.", B: "No te preocupes tanto. Un perro tan pequeño no puede haber ido muy lejos.", C: "Piensa que con esas patitas no llega ni a la esquina sin descansar." },
            reply: { A: "Camila asiente. «Tienes razón. ¿Qué hacemos?»", B: "Camila intenta sonreír. «Ojalá tengas razón. ¿Qué hacemos ahora?»", C: "«No conoces a Toto», dice Camila. «Pero gracias por el optimismo. ¿Algún plan?»" },
            mood: "worried", next: "plan",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Eres muy buena con Toto. Él te quiere.", B: "Se nota que lo quieres mucho. Seguro que él también te está buscando.", C: "Si Toto te quiere la mitad de lo que tú lo quieres, ya te está buscando." },
            reply: { A: "Camila sonríe. «Cuando tiene miedo, siempre busca agua. Siempre.»", B: "Camila se queda pensando. «Espera… Cuando tiene miedo, siempre busca agua. ¡El río!»", C: "Camila se queda quieta. «Eso me recuerda algo: cuando tiene miedo, busca agua. Siempre. El río.»" },
            mood: "love", next: "plan",
          },
        },
      },
      plan: {
        who: "camila", mood: "worried",
        line: {
          A: "Camila guarda el celular. «Bueno. ¿Qué hacemos ahora?»",
          B: "Camila se ata bien la coleta, como quien se prepara para algo serio. «Bueno, necesito un plan. ¿Qué hacemos?»",
          C: "Camila se ajusta la coleta con decisión. «Basta de dar vueltas. Necesito un plan y tú pareces alguien con planes.»",
        },
        options: [
          {
            id: "rio",
            say: { A: "Vamos al paseo del río. Allí hay mucha gente con perros.", B: "Vamos al paseo del río. Es posible que alguien lo haya visto por allí.", C: "Yo apostaría por el río. Hay gente paseando perros y Toto suele seguir a los suyos." },
            reply: { A: "Camila dice que sí. «¡Al río! Gracias.»", B: "Camila ya está caminando. «Tiene sentido. ¡Vamos al este, al río!»", C: "«Ese perro es más social que yo», dice Camila, ya en marcha. «Al río.»" },
            mood: "smile", end: "rio",
          },
          {
            id: "carteles",
            say: { A: "Hacemos carteles y los ponemos en los puestos.", B: "Es mejor que pongamos carteles en todos los puestos. Así todo el mercado lo busca.", C: "Pongamos carteles: si todo el mercado busca a Toto, es cuestión de minutos." },
            reply: { A: "Camila sonríe. «Sí. Tengo una foto. Vamos.»", B: "«Buena idea. Mi hermano dibuja muy bien, le pido que haga más.»", C: "«Doscientas personas buscando a un perro. Me gusta», dice Camila." },
            mood: "smile", end: "carteles",
          },
          {
            id: "casa",
            say: { A: "A lo mejor Toto volvió a casa. ¿Llamas a alguien?", B: "¿Y si volvió a casa? ¿Hay alguien allí a quien puedas llamar?", C: "Antes de recorrer media ciudad, ¿no conviene comprobar si ya volvió a casa?" },
            reply: { A: "Camila marca un número. «Voy a llamar a mi compañera de piso.»", B: "Camila ya está marcando. «Mi compañera de piso está en casa. Le pregunto ahora mismo.»", C: "«No lo había pensado», admite Camila, y marca. «Sería muy típico de él.»" },
            mood: "neutral", end: "casa",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz.", B: "Sacas el lápiz y empiezas a dibujar.", C: "Sacas el lápiz y te pones manos a la obra." },
            say: { A: "Yo hago los carteles. Tú dices el número.", B: "Yo dibujo los carteles; tú escribe tu número de teléfono.", C: "Yo me ocupo del arte; tú pon el teléfono y una recompensa tentadora." },
            reply: { A: "Camila escribe su número. «¡Toto está muy guapo!»", B: "Camila escribe su número debajo del dibujo. «¡Qué bonito! Toto en persona es más feo, ¿eh?»", C: "«Recompensa: mi eterna gratitud y una empanada», escribe Camila. «Es lo que puedo ofrecer.»" },
            mood: "smile", end: "carteles",
          },
          corazon: {
            act: CORAZON,
            say: { A: "No estás sola. Yo te ayudo.", B: "No estás sola en esto. Te acompaño un rato, ¿de acuerdo?", C: "No tienes que hacer esto sola. Te acompaño hasta que aparezca." },
            reply: { A: "Camila sonríe. «Gracias. Creo que fue al río.»", B: "Camila te abraza un segundo. «Gracias. Algo me dice que fue al río. Vamos.»", C: "Camila sonríe, más tranquila. «Mi intuición dice río. Y mi abuela siempre decía que le hiciera caso.»" },
            mood: "love", end: "rio",
          },
        },
      },
      calmar: {
        who: "camila", mood: "scared",
        line: {
          A: "Camila tiene miedo. Agarra la correa con fuerza.",
          B: "Camila no se mueve. Agarra la correa con las dos manos y mira a su alrededor.",
          C: "Camila te mira como si estuviera evaluando si gritar o correr. La correa tiembla en su mano.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Quiero ayudarte.", B: "Perdona, lo guardo ya. Solo quería ayudarte con el perro.", C: "Perdona, empecé con muy mal pie. Lo guardo y volvemos a lo importante: Toto." },
            reply: { A: "Camila respira. «Bueno… Está bien.»", B: "Camila respira hondo. «Bueno. Qué susto. Entonces, ¿me ayudas?»", C: "«Lo importante, sí», dice Camila, todavía tensa. «Te doy una segunda oportunidad.»" },
            mood: "worried", next: "pista",
          },
          {
            id: "explicar",
            say: { A: "No es nada. Es para mi seguridad.", B: "No te asustes, lo llevo por seguridad. Es normal.", C: "Esto no es lo que parece. Bueno, sí lo parece, pero no lo es." },
            reply: { A: "Camila no te cree. Llama a la policía.", B: "Camila se aleja marcando un número. «¿Policía? Hay alguien muy raro en el mercado…»", C: "«Clarísimo», dice Camila, y se aleja con el celular en la oreja. «¿Policía? Sí, buenas noches…»" },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy. Suerte con Toto.", B: "Perdona el susto. Me voy, pero ojalá lo encuentres pronto.", C: "Creo que lo mejor es que desaparezca. Ojalá Toto aparezca antes que yo." },
            reply: { A: "Camila no dice nada.", B: "Camila asiente sin decir nada y sigue buscando sola.", C: "Camila asiente, muy seria, y vuelve a agacharse bajo los puestos." },
            mood: "sad", end: "sola",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Perdón. Yo también tengo un perro. Te entiendo.", B: "Perdóname. Yo también perdería la cabeza si mi perro se escapara.", C: "Perdona, de verdad. Hoy los dos estamos un poco nerviosos, por lo que veo." },
            reply: { A: "Camila sonríe un poco. «¿Sí? Bueno… Ayúdame, por favor.»", B: "Camila se relaja. «Bueno… La verdad es que hoy todo el mundo me parece raro. Ayúdame.»", C: "Camila se ríe, nerviosa. «Un poco, sí. Bueno, la gente nerviosa busca mejor. Vamos.»" },
            mood: "love", next: "pista",
          },
        },
      },
    },
    ends: {
      rio: { text: { A: "Camila va hacia el río, al este. Antes de irse, te dice: «Gracias».", B: "Camila se va hacia el paseo del río, al este. Te grita desde lejos que te avisará si lo encuentra.", C: "Camila se aleja a paso rápido hacia el este, rumbo al río, con la correa lista y la esperanza intacta." }, change: "se-va", flag: "toto-buscado", recap: "Ayudaste a Camila a buscar a Toto: puede estar en el río." },
      carteles: { text: { A: "Pones carteles de Toto en los puestos. Mucha gente los lee.", B: "Ponen carteles en diez puestos. Enseguida varias personas empiezan a buscar a Toto.", C: "En diez minutos, la cara de Toto está en todo el mercado y medio barrio busca a un perro con orejas prestadas." }, change: "sonrie", recap: "Pusiste carteles de Toto por todo el mercado." },
      casa: { text: { A: "Camila habla por teléfono. Toto no está en casa, pero ella está más tranquila.", B: "Camila habla con su compañera de piso. Toto no ha vuelto, pero ella va a esperarlo en la puerta.", C: "Toto no ha vuelto a casa, pero la compañera de piso promete montar guardia en la puerta con una galleta." }, change: "llama", recap: "Le sugeriste a Camila llamar a casa." },
      policia: { text: { A: "Llega la policía. Explicas todo. Es un malentendido.", B: "Llega un coche de policía. Te cuesta un buen rato explicar el malentendido.", C: "Llega la policía. Entre explicaciones y disculpas, Toto sigue sin aparecer, y tú tampoco quedas muy bien." }, change: "policia", recap: "Un susto con Camila terminó con la policía." },
      sola: { text: { A: "Te vas. Camila busca a Toto sola.", B: "Te alejas. Camila sigue buscando sola, cada vez más triste.", C: "Te alejas. Desde lejos ves a Camila mirando bajo cada puesto, cada vez con menos fuerza." }, change: "triste", recap: "Dejaste a Camila buscando a Toto sola." },
    },
    speak: {
      A1: "¿Qué animal tienes o quieres tener?",
      A2: "¿Qué cosa importante has perdido alguna vez?",
      B1: "¿Qué haces cuando pierdes algo que es importante para ti?",
      B2: "¿Cómo organizarías la búsqueda de una mascota perdida en tu barrio?",
      C1: "¿Por qué algunas personas sienten más apego por sus mascotas que por mucha gente?",
      C2: "¿Qué dice de una comunidad la manera en que reacciona cuando alguien pierde algo querido?",
    },
  },

  // ───────────────────────────── ESCENA 2 ─────────────────────────────
  {
    id: "mercado-vendedor",
    kind: "escena",
    district: "mercado",
    title: "El puesto de empanadas",
    verb: "COMPRAR",
    goal: "Preguntar por ingredientes y precios, pedir recomendaciones, regatear con cortesía y usar usted.",
    cast: [
      {
        id: "aurelio", name: "Don Aurelio", role: "Vendedor de empanadas",
        age: "old", body: "m", build: "heavy", height: 1.68,
        hair: "bald", hairColor: "#cfc8bc", skin: "#d9a77c",
        top: "apron", topColor: "#f2efe6", bottom: "pants", bottomColor: "#4a4036",
        extras: ["mustache"], pose: "cook", props: ["stall", "grill", "smoke"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "aurelio", mood: "smile",
        line: {
          A: "Un señor con delantal habla muy fuerte entre el humo. «¡Empanadas calientes! ¡Las mejores del mercado! ¿Qué le pongo?»",
          B: "Entre el humo de la parrilla, un señor con bigote canta los precios como si fuera un locutor. «¡Empanadas recién hechas! ¡Pruébalas y después me cuentas!»",
          C: "Un señor de bigote dirige su parrilla como una orquesta. «¡Acérquese, joven! Aquí no se venden empanadas: se venden recuerdos de la infancia.»",
        },
        options: [
          {
            id: "ingredientes",
            say: { A: "Buenas noches. ¿Qué tienen las empanadas?", B: "Buenas noches. ¿De qué son las empanadas que tiene?", C: "Buenas noches. Antes de comprometerme con un recuerdo, ¿de qué son?" },
            reply: { A: "Don Aurelio señala la parrilla. «Carne, pollo y queso. Y la especial.»", B: "«Tengo de carne, de pollo, de queso con cebolla… y la especial, que no le cuento qué lleva.»", C: "Don Aurelio se toca el bigote. «Carne, pollo, queso con cebolla. Y la especial, cuyo secreto me llevaré a la tumba.»" },
            mood: "smile", next: "sabores",
          },
          {
            id: "precio",
            say: { A: "¿Cuánto cuesta una empanada?", B: "¿Cuánto cuestan? ¿Tiene algún precio por varias?", C: "¿Y cuánto me cuesta este viaje a la infancia, si se puede saber?" },
            reply: { A: "«Dos monedas cada una. Tres por cinco.»", B: "«Dos monedas cada una, pero si se lleva tres, le dejo las tres en cinco.»", C: "«Para usted, dos monedas cada una», dice con un guiño. «La infancia, ya sabe, está carísima.»" },
            mood: "neutral", next: "precio",
          },
          {
            id: "recomendar",
            say: { A: "Es mi primera vez aquí. ¿Qué me recomienda?", B: "Es la primera vez que vengo. ¿Cuál me recomienda usted?", C: "Me pongo en sus manos. ¿Cuál pediría usted si fuera yo?" },
            reply: { A: "Don Aurelio sonríe mucho. «¡La especial! Todos vuelven por ella.»", B: "A Don Aurelio le brillan los ojos. «¡La especial, sin duda! La gente viene de lejos por ella.»", C: "«Si yo fuera usted», dice muy serio, «pediría la especial y luego me daría las gracias.»" },
            mood: "love", next: "sabores",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz.", B: "Sacas el lápiz: su cartel de precios casi no se lee.", C: "Sacas el lápiz, porque su cartel de precios es un misterio borroso." },
            say: { A: "Su cartel no se lee. ¿Le escribo uno nuevo?", B: "Su cartel casi no se lee. ¿Quiere que le escriba uno nuevo?", C: "Con todo respeto, su cartel parece un jeroglífico. ¿Le hago uno legible?" },
            reply: { A: "Don Aurelio se ríe. «¡Sí, por favor! Dos monedas cada una.»", B: "«¡Por fin alguien con letra bonita! Escriba: dos monedas cada una, tres por cinco.»", C: "«Mi nieta lo escribió con siete años», dice, encantado. «Adelante: dos monedas, tres por cinco.»" },
            mood: "smile", next: "precio",
          },
          libro: {
            act: { A: "Abres tu libro.", B: "Abres tu libro por una página en blanco.", C: "Abres tu libro por una página en blanco, con aire de periodista." },
            say: { A: "¿Me dice la receta? La escribo aquí.", B: "¿Me cuenta la receta de la especial? La apunto en mi libro.", C: "¿Y si me dicta la receta de la especial? Prometo no publicarla. Mucho." },
            reply: { A: "Don Aurelio cierra tu libro. «¡No! Es un secreto.»", B: "Don Aurelio cierra tu libro con un dedo. «Ni lo sueñe. Esa receta no sale de esta parrilla.»", C: "«Ni con abogado», dice, cerrándote el libro con suavidad. «Pero puede probarla. Eso sí.»" },
            mood: "surprised", next: "sabores",
          },
          gas: {
            act: { A: "Él grita muy fuerte. Sacas el gas pimienta.", B: "Don Aurelio grita a tu lado y, del susto, sacas el gas pimienta.", C: "El grito de Don Aurelio te toma por sorpresa y sacas el gas pimienta." },
            say: { A: "¡Uy! ¡No grite, por favor!", B: "¡Ay! ¡Perdone, me asustó con ese grito!", C: "¡Por favor, no me grite así de cerca, que reacciono mal!" },
            reply: { A: "Don Aurelio levanta las manos. «¡Tranquilo! ¡Solo vendo empanadas!»", B: "Don Aurelio levanta la espátula como escudo. «¡Eh, eh! ¡Que solo vendo empanadas!»", C: "«Llevo cuarenta años gritando empanadas a los cuatro vientos», dice, escudándose tras la espátula. «Es la primera vez que me apuntan.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Pones la granada en el mostrador.", B: "Para buscar dinero, dejas la granada en el mostrador.", C: "Para buscar la cartera, apoyas la granada en el mostrador, junto a las empanadas." },
            say: { A: "Un momento. Busco el dinero.", B: "Un momento, que busco el dinero.", C: "Disculpe, déjeme encontrar la cartera, que siempre se esconde." },
            reply: { A: "Don Aurelio mira la granada. «¿Eso es… una fruta?» Después grita.", B: "«¿Qué fruta rara es esa?», pregunta Don Aurelio. Entonces la mira mejor y se pone blanco.", C: "«¿Es un mango exótico?», pregunta. Luego se acerca, comprende, y retrocede hasta chocar con la parrilla." },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al sacar la cartera, se ve tu pistola.", C: "Al sacar la cartera, la pistola queda a la vista." },
            say: { A: "Una empanada de carne, por favor.", B: "Póngame una de carne, por favor.", C: "Una de carne, cuando pueda. Sin prisa." },
            reply: { A: "Don Aurelio tiembla. «¡Llévese todas! ¡Gratis!»", B: "Don Aurelio empuja la bandeja entera hacia ti. «¡Llévese todas, todas! ¡Invita la casa!»", C: "«Sin prisa, claro», dice Don Aurelio, y te ofrece la bandeja entera con manos temblorosas." },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas tu cuchillo.", B: "Sacas tu cuchillo para partir una empanada.", C: "Sacas tu cuchillo con la intención de compartir una empanada." },
            say: { A: "¿Puedo cortar una empanada en dos?", B: "¿Puedo partir una por la mitad? Quiero probar dos sabores.", C: "¿Me permite partirla en dos? Así pruebo dos sabores sin culpa." },
            reply: { A: "Don Aurelio mira el cuchillo. «¡Buen cuchillo! ¿Corta cebolla? Venga, ayúdeme.»", B: "Don Aurelio mira el cuchillo con respeto profesional. «Con ese cuchillo, mejor ayúdeme a picar cebolla.»", C: "«Ese cuchillo está desperdiciado en una empanada», dice. «Pase atrás: tengo diez kilos de cebolla.»" },
            mood: "smile", end: "cocina",
          },
          corazon: {
            act: CORAZON,
            say: { A: "Huele muy bien. Usted trabaja con amor.", B: "Se nota que cocina con cariño. Huele de maravilla.", C: "Esto no huele a negocio, huele a cocina de casa. Se nota el cariño." },
            reply: { A: "Don Aurelio sonríe. «Es la receta de mi esposa. Tome, pruebe una.»", B: "Don Aurelio se emociona. «La receta es de mi mujer. Ella ya no está, pero cocino como ella. Pruebe, invito yo.»", C: "Don Aurelio baja la voz. «La especial era de mi Elena. Cada vez que alguien la prueba, ella sigue aquí. Pruebe.»" },
            mood: "love", next: "sabores",
          },
        },
      },
      sabores: {
        who: "aurelio", mood: "smile",
        line: {
          A: "Don Aurelio abre el horno. «Bueno, ¿cuál quieres? ¿Carne, pollo, queso o la especial?»",
          B: "Don Aurelio abre el horno y sale una nube de vapor. «Bueno, ¿qué va a ser? La especial está saliendo ahora mismo.»",
          C: "Don Aurelio abre el horno con teatralidad. «Momento de decidir. La especial acaba de salir, y no espera a nadie.»",
        },
        options: [
          {
            id: "especial",
            say: { A: "Quiero probar la especial, por favor.", B: "Me ha convencido: quiero probar la especial.", C: "No puedo resistirme a un secreto. La especial, por favor." },
            reply: { A: "Don Aurelio te da una empanada. «Cuidado, está caliente.»", B: "«¡Excelente decisión!» Te da una empanada humeante. «Cuidado, que quema.»", C: "«Usted es una persona de gusto», dice, entregándote la empanada como si fuera un trofeo." },
            mood: "love", end: "compra",
          },
          {
            id: "vegetariana",
            say: { A: "No como carne. ¿Tiene algo sin carne?", B: "Yo no como carne. ¿Cuál me recomienda entonces?", C: "Soy vegetariano. ¿Su repertorio contempla a gente como yo?" },
            reply: { A: "«¡Claro! Queso y cebolla. Muy rica.»", B: "«¡Por supuesto! La de queso con cebolla es la favorita de mi nieta, y ella tampoco come carne.»", C: "«Contempla y celebra», dice Don Aurelio. «La de queso y cebolla tiene más fans que yo.»" },
            mood: "smile", end: "compra",
          },
          {
            id: "precio",
            say: { A: "¿Y cuánto cuestan?", B: "Todo suena muy bien. ¿Cuánto cuesta cada una?", C: "Me tienta todo. Hablemos de números antes de que me arruine." },
            reply: { A: "«Dos monedas cada una. Tres por cinco.»", B: "«Dos monedas cada una. Tres por cinco, que hoy estoy generoso.»", C: "«Dos la unidad, tres por cinco», dice. «Y nadie se arruina en mi puesto, como mucho engorda.»" },
            mood: "neutral", next: "precio",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Usted es muy simpático. Me gusta su puesto.", B: "Da gusto comprar aquí. Usted hace que todo sea una fiesta.", C: "Debería cobrar entrada, porque esto es más espectáculo que comida." },
            reply: { A: "Don Aurelio se ríe. «Tome una gratis. Para usted.»", B: "Don Aurelio se ríe a carcajadas. «¡Qué cosas dice! Tenga, esta se la regalo.»", C: "«No me dé ideas», dice Don Aurelio, y te envuelve una de regalo. «Por la reseña.»" },
            mood: "love", end: "regalo",
          },
        },
      },
      precio: {
        who: "aurelio", mood: "neutral",
        line: {
          A: "Don Aurelio cruza los brazos. «Dos monedas cada una. Es un buen precio.»",
          B: "Don Aurelio cruza los brazos y sonríe. «Dos monedas, y le aseguro que valen más. Bueno, ¿cuántas se lleva?»",
          C: "Don Aurelio cruza los brazos con calma de negociador. «Dos monedas. Y antes de que diga nada: valen más.»",
        },
        options: [
          {
            id: "regatear",
            say: { A: "¿Me deja tres por cuatro monedas?", B: "¿Y si me llevo tres por cuatro monedas? Le prometo que vuelvo mañana.", C: "Le propongo un acuerdo: tres por cuatro, y le hago publicidad gratis toda la semana." },
            reply: { A: "Don Aurelio se ríe. «Bueno, cuatro y media. Final.»", B: "Don Aurelio finge sufrir. «¡Me quiere arruinar! Bueno, cuatro y media, y no se lo diga a nadie.»", C: "«Cuatro y media, y la publicidad la quiero por escrito», dice, dándote la mano." },
            mood: "smile", end: "compra",
          },
          {
            id: "docena",
            say: { A: "Quiero doce. Son para mis amigos.", B: "Póngame una docena, que mis amigos me están esperando.", C: "Póngame una docena. Mis amigos no lo saben, pero esta noche cenan conmigo." },
            reply: { A: "Don Aurelio aplaude. «¡Doce! Y una más, de regalo.»", B: "«¡Una docena! Así me gusta.» Mete una más en la bolsa. «Esta es de regalo.»", C: "«Una docena y una de propina, que la amistad hay que alimentarla», dice con un guiño." },
            mood: "love", end: "regalo",
          },
          {
            id: "caro",
            say: { A: "Es un poco caro para mí. Gracias.", B: "Lo siento, hoy me queda poco dinero. Quizá otro día.", C: "Me encantaría, pero mi cartera opina distinto. Volveré cuando me pague." },
            reply: { A: "Don Aurelio sonríe. «Bueno. Aquí estoy mañana.»", B: "«No pasa nada. Aquí estoy todas las noches, joven.»", C: "«Su cartera y yo nos entenderemos algún día», dice Don Aurelio, sin rencor." },
            mood: "neutral", end: "nada",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Usted trabaja mucho. ¿Cuántos años tiene el puesto?", B: "Debe de ser duro trabajar aquí cada noche. ¿Desde cuándo tiene el puesto?", C: "Cuarenta años de parrilla no se improvisan. ¿Cómo empezó todo esto?" },
            reply: { A: "Don Aurelio sonríe. «Treinta años. Para usted, precio de amigo.»", B: "«Treinta y dos años», dice con orgullo. «Empecé con mi mujer y un carrito. Para usted, precio de amigo.»", C: "«Con un carrito prestado y mucha cara», dice, riendo. «Usted me cae bien: precio de familia.»" },
            mood: "love", end: "regalo",
          },
        },
      },
      calmar: {
        who: "aurelio", mood: "scared",
        line: {
          A: "Don Aurelio tiene miedo. La gente de los otros puestos mira.",
          B: "Don Aurelio está pálido detrás de la parrilla. Los vecinos de otros puestos empiezan a mirar.",
          C: "Don Aurelio se ha quedado mudo, algo inédito. El resto del mercado observa con creciente interés.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdone. Lo guardo. Solo quiero empanadas.", B: "Perdone, de verdad. Lo guardo. Solo quería comprar empanadas.", C: "Le pido disculpas. Lo guardo y empezamos de nuevo, como dos personas normales." },
            reply: { A: "Don Aurelio respira. «Bueno… ¿Cuántas quiere?»", B: "Don Aurelio se seca la frente. «Qué susto… Bueno, ¿cuántas quiere?»", C: "«Normales», repite él, recuperando el color. «Bueno. ¿Cuántas quiere la persona normal?»" },
            mood: "worried", next: "precio",
          },
          {
            id: "explicar",
            say: { A: "No pasa nada. Es para mi seguridad.", B: "No se preocupe, lo llevo por seguridad. Es lo más normal.", C: "Hoy en día uno tiene que protegerse, ¿no? Es pura prevención." },
            reply: { A: "Don Aurelio llama a la policía.", B: "Don Aurelio asiente despacio y, sin dejar de mirarte, llama a la policía.", C: "«Prevención, claro», dice Don Aurelio. «Yo también prevengo.» Y llama a la policía." },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Mejor me voy.", B: "Perdone el malentendido. Mejor me voy.", C: "Creo que he arruinado el momento. Me retiro con dignidad, o lo que queda." },
            reply: { A: "Don Aurelio no dice nada.", B: "Don Aurelio asiente sin decir nada, cosa rara en él.", C: "Don Aurelio asiente. Por primera vez en la noche, no tiene nada que decir." },
            mood: "worried", end: "nada",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Perdón. Usted es muy amable. Me equivoqué.", B: "Perdóneme, de verdad. Me equivoqué y usted no se lo merece.", C: "Perdóneme. Usted alimenta a medio barrio y yo vengo a asustarlo. Qué vergüenza." },
            reply: { A: "Don Aurelio sonríe. «Bueno. Todos nos equivocamos. Coma algo.»", B: "Don Aurelio suspira y sonríe. «Bueno, todos tenemos un mal día. Coma algo, que con hambre se piensa mal.»", C: "«Con hambre nadie piensa bien», dice Don Aurelio, y te da una empanada. «Esto lo arregla todo.»" },
            mood: "love", next: "sabores",
          },
        },
      },
    },
    ends: {
      compra: { text: { A: "Comes la empanada. Está muy rica. Don Aurelio está contento.", B: "Comes la empanada junto al puesto. Está buenísima, y Don Aurelio espera tu opinión como un examen.", C: "La primera mordida te quema la lengua y te gana el corazón. Don Aurelio observa tu cara, satisfecho." }, change: "sonrie", recap: "Compraste empanadas en el puesto de Don Aurelio." },
      regalo: { text: { A: "Don Aurelio te regala una empanada. Dice: «¡Vuelve pronto!»", B: "Te vas con una empanada de regalo y la promesa de volver pronto.", C: "Te vas con una empanada de regalo y la sensación de haber sido adoptado por el mercado." }, change: "abraza", recap: "Don Aurelio te regaló una empanada." },
      cocina: { text: { A: "Pasas detrás del puesto. Cortas cebolla con Don Aurelio. Lloras mucho.", B: "Terminas detrás del puesto picando cebolla. Lloras, Don Aurelio canta y te paga en empanadas.", C: "Acabas de ayudante de cocina, llorando cebolla mientras Don Aurelio canta boleros. Pagan en empanadas." }, change: "sonrie", recap: "Picaste cebolla con Don Aurelio en su puesto." },
      nada: { text: { A: "Te vas sin empanadas. Don Aurelio sigue cocinando.", B: "Te alejas sin comprar. Detrás de ti, Don Aurelio vuelve a gritar sus precios.", C: "Te alejas con las manos vacías. El grito de «¡empanadas!» te persigue tres puestos más." }, change: "sigue", recap: "Pasaste por el puesto de Don Aurelio sin comprar." },
      policia: { text: { A: "Llega la policía. Explicas todo. Don Aurelio está nervioso.", B: "Llega un coche de policía. Tienes que explicar el malentendido delante de todo el mercado.", C: "La policía llega y todo el mercado se convierte en público. Tu explicación no recibe aplausos." }, change: "policia", recap: "Asustaste a Don Aurelio y llegó la policía." },
    },
    speak: {
      A1: "¿Qué comida te gusta comprar en la calle?",
      A2: "¿Qué comiste la última vez que fuiste a un mercado?",
      B1: "¿Cuándo regateas y por qué lo haces o no lo haces?",
      B2: "¿Qué prefieres, un restaurante elegante o un puesto callejero, y por qué?",
      C1: "¿En qué se diferencia comprar a un pequeño vendedor de comprar en un supermercado?",
      C2: "¿Qué relación crees que existe entre la comida de tu infancia y tu manera de sentirte en casa?",
    },
  },

  // ───────────────────────────── ESCENA 3 ─────────────────────────────
  {
    id: "mercado-musico",
    kind: "escena",
    district: "mercado",
    title: "La música de Flor",
    verb: "ESCUCHAR",
    goal: "Pedir algo con cortesía, elogiar, expresar gustos musicales y aceptar o rechazar una invitación.",
    cast: [
      {
        id: "flor", name: "Flor", role: "Música callejera",
        age: "young", body: "f", build: "slim", height: 1.6,
        hair: "curly", hairColor: "#1c1410", skin: "#6e4630",
        top: "dress", topColor: "#7b2d6b", bottom: "skirt", bottomColor: "#22202a",
        extras: ["earrings"], pose: "guitar", props: ["guitar-case", "string-lights"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "flor", mood: "smile",
        line: {
          A: "Bajo las luces, una chica toca la guitarra. Termina una canción. «¡Gracias! ¿Alguien quiere escuchar algo?»",
          B: "Bajo una cadena de luces, una chica de pelo rizado termina una canción y afina la guitarra. «¡Gracias! ¿Alguna petición? Acepto casi todo.»",
          C: "Una chica de pelo rizado cierra una canción con un acorde largo y mira al público. «¿Peticiones? Advierto que no toco reguetón por convicción.»",
        },
        options: [
          {
            id: "pedir",
            say: { A: "¿Puedes tocar una canción romántica?", B: "¿Podrías tocar algo romántico? Es que hoy tengo el día sentimental.", C: "¿Tienes algo romántico? Pero de lo triste-bonito, no de lo empalagoso." },
            reply: { A: "Flor sonríe. «¡Claro! ¿Qué estilo te gusta?»", B: "«Me encantan los días sentimentales», dice Flor. «¿Qué estilo prefieres?»", C: "«Triste-bonito es mi especialidad», dice Flor. «Pero dime qué estilo, que hay muchas tristezas.»" },
            mood: "smile", next: "pedido",
          },
          {
            id: "cantar",
            say: { A: "¡Me encanta tu música! ¿Puedo cantar contigo?", B: "¡Qué bien tocas! ¿Te importa si canto contigo la próxima?", C: "Tengo una voz discutible y un entusiasmo indiscutible. ¿Me dejas cantar contigo?" },
            reply: { A: "Flor se ríe. «¡Sí! ¿Sabes alguna canción?»", B: "Flor se ríe, sorprendida. «¡Claro! Me encanta cuando alguien se anima. ¿Qué sabes cantar?»", C: "«El entusiasmo afina más que el oído», dice Flor, divertida. «Veamos qué sabes.»" },
            mood: "surprised", next: "cantar",
          },
          {
            id: "propina",
            act: { A: "Pones unas monedas en la funda.", B: "Dejas unas monedas en la funda de la guitarra.", C: "Dejas unas monedas en la funda abierta de la guitarra." },
            say: { A: "Para ti. Tocas muy bien.", B: "Toma, te lo mereces. Tocas precioso.", C: "Es poco para lo que merece tu música, pero es de corazón." },
            reply: { A: "Flor sonríe. «¡Gracias! Elige una canción.»", B: "«¡Muchas gracias!», dice Flor. «Por eso, tú eliges la próxima canción.»", C: "Flor se lleva la mano al pecho. «Con esa frase ya me pagaste. Elige la próxima, va por ti.»" },
            mood: "love", next: "pedido",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Escribes el nombre de una canción en un papel.", B: "Escribes el título de una canción en un papel y se lo das.", C: "Le pasas un papelito con un título escrito, como en las películas antiguas." },
            say: { A: "Esta canción, por favor.", B: "¿Sabes tocar esta? Es mi favorita.", C: "Una petición formal, por escrito, para que no haya malentendidos." },
            reply: { A: "Flor lee el papel. «¡Me encanta esta canción!»", B: "Flor lee el papel y abre mucho los ojos. «¡Esta me la enseñó mi abuelo! Claro que sí.»", C: "Flor lee y sonríe. «Petición aceptada. Aunque esta me trae recuerdos, ¿eh? Te aviso.»" },
            mood: "surprised", next: "pedido",
          },
          libro: {
            act: { A: "Abres tu libro. Tiene un poema.", B: "Abres tu libro por una página con un poema.", C: "Abres tu libro por un poema subrayado por algún lector anterior." },
            say: { A: "Mira este poema. ¿Puedes cantarlo?", B: "Mira este poema. ¿Te animas a ponerle música?", C: "Este poema pide guitarra a gritos. ¿Te atreves a improvisarle una melodía?" },
            reply: { A: "Flor lee. «¡Qué bonito! Vamos a probar. ¡Canta conmigo!»", B: "Flor lee el poema en voz baja. «Es precioso. Vamos a probar… pero tú cantas conmigo.»", C: "Flor lee, toca dos acordes y te mira. «Funciona. Pero esto se hace a dos voces, que conste.»" },
            mood: "love", next: "cantar",
          },
          gas: {
            act: { A: "Alguien te empuja. Sacas el gas pimienta.", B: "Alguien te empuja entre la gente y sacas el gas pimienta.", C: "Un empujón entre el público te pone en alerta y sacas el gas pimienta." },
            say: { A: "¡Eh! ¿Quién fue?", B: "¡Eh! ¿Quién me ha empujado?", C: "¡Un momento! ¿Quién ha sido el del empujón?" },
            reply: { A: "Flor deja de tocar. La gente se va. «¿Qué haces?»", B: "Flor deja de tocar de golpe. El público se aparta. «¡Oye, oye! ¿Qué haces con eso?»", C: "El silencio es inmediato. Flor abraza la guitarra. «Era un señor bailando. Baja eso, por favor.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Sacas la granada y la mueves.", B: "Sacas la granada y la agitas al ritmo de la música.", C: "Sacas la granada y la agitas al compás, como si fuera una maraca." },
            say: { A: "¡Toco contigo! Es una maraca.", B: "¡Te acompaño! Mira, tengo una maraca.", C: "¿Te hace falta percusión? Traigo mi propia maraca." },
            reply: { A: "Flor mira bien. «¡Eso no es una maraca!»", B: "Flor deja de tocar. «Eso… eso no es una maraca. ¡Eso no es una maraca!»", C: "Flor para en seco. «Te informo de que eso es una granada. No suena, pero preocupa.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al aplaudir, se ve tu pistola.", C: "Al aplaudir con entusiasmo, la pistola asoma de tu cintura." },
            say: { A: "¡Muy bien! ¡Otra, otra!", B: "¡Bravo! ¡Otra, por favor!", C: "¡Bravo! Exijo otra. Con cariño, eh." },
            reply: { A: "Flor ve la pistola. Deja de tocar.", B: "Flor ve la pistola y se queda congelada. «Eh… claro. Otra. Lo que quieras.»", C: "«Con cariño, claro», dice Flor, que ya no sabe dónde poner las manos." },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Ves que la cuerda rota le molesta y sacas el cuchillo.", C: "Una cuerda rota le cuelga de la guitarra. Sacas el cuchillo." },
            say: { A: "Tu cuerda está rota. ¿La corto?", B: "Esa cuerda rota te molesta. ¿Quieres que la corte?", C: "Esa cuerda suelta te va a sacar un ojo. ¿Me permites?" },
            reply: { A: "Flor duda. Después dice que sí. «Gracias. Ahora, ¿qué canción quieres?»", B: "Flor se aparta un poco, pero acepta. «Uf, gracias. Toco con cinco, no pasa nada. ¿Qué quieres oír?»", C: "Flor tensa los hombros, luego asiente. «Gracias. Cinco cuerdas y mucha actitud. Pide.»" },
            mood: "worried", next: "pedido",
          },
          corazon: {
            act: CORAZON,
            say: { A: "Tu música me hace muy feliz.", B: "Tu música me ha cambiado la noche. De verdad.", C: "Llegué con la noche torcida y tu música la ha enderezado." },
            reply: { A: "Flor sonríe mucho. «Entonces, esta canción es para ti.»", B: "Flor se pone la mano en el corazón. «¿Sabes qué? La próxima canción te la dedico a ti.»", C: "Flor sonríe y se acerca al micrófono. «Esta va dedicada a alguien que acaba de decirme algo precioso.»" },
            mood: "love", end: "dedicada",
          },
        },
      },
      pedido: {
        who: "flor", mood: "smile",
        line: {
          A: "Flor afina la guitarra. «¿Qué música te gusta? ¿Cumbia, bolero o rock?»",
          B: "Flor afina una cuerda mientras te mira. «A ver, ¿qué te apetece? Tengo cumbia, boleros, un poco de rock…»",
          C: "Flor hace un recorrido rápido por varios estilos con los dedos. «Elige: cumbia para mover, bolero para sufrir, o algo mío.»",
        },
        options: [
          {
            id: "cumbia",
            say: { A: "¡Una cumbia! Quiero bailar.", B: "¡Una cumbia, por favor! Que baile todo el mundo.", C: "Cumbia, sin duda. Esta gente necesita mover los pies." },
            reply: { A: "Flor toca una cumbia. Todos bailan.", B: "Flor arranca una cumbia y, en segundos, medio mercado empieza a bailar.", C: "Al tercer compás, hasta el de las empanadas mueve la espátula al ritmo." },
            mood: "smile", end: "cumbia",
          },
          {
            id: "bolero",
            say: { A: "Un bolero, por favor. Me gustan los boleros.", B: "Un bolero, si puedes. Me recuerdan a mis abuelos.", C: "Un bolero. Hoy me apetece sufrir con elegancia." },
            reply: { A: "Flor toca un bolero. La gente escucha en silencio.", B: "Flor toca un bolero lento. Una pareja mayor se pone a bailar muy despacio.", C: "Flor toca un bolero y el mercado entero se queda quieto, sufriendo con elegancia." },
            mood: "smile", end: "aplausos",
          },
          {
            id: "propia",
            say: { A: "¿Tienes una canción tuya? Quiero escucharla.", B: "¿Tienes alguna canción tuya? Me gustaría escucharla.", C: "Prefiero algo tuyo. Las versiones las escucho en casa." },
            reply: { A: "Flor está nerviosa. «Bueno… Es nueva. Nadie la conoce.»", B: "Flor duda. «Tengo una que nunca he tocado en público… Bueno, vamos allá.»", C: "Flor respira hondo. «Nadie la ha oído. Si sale mal, la culpa es tuya, ¿eh?»" },
            mood: "worried", end: "secreto",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Toca lo que tú quieras. Seguro que es bonito.", B: "Elige tú. Lo que te salga del corazón, seguro que me gusta.", C: "Sorpréndeme. Toca lo que le haga falta a esta noche." },
            reply: { A: "Flor sonríe. «Bueno. Esta es para ti.»", B: "Flor te mira con una sonrisa. «Entonces, esta canción es para ti. Me la inventé ayer.»", C: "«A esta noche le hace falta una dedicatoria», dice Flor. «Y ya sé a quién.»" },
            mood: "love", end: "dedicada",
          },
        },
      },
      cantar: {
        who: "flor", mood: "smile",
        line: {
          A: "Flor te da el micrófono. «¿Sabes la letra? ¡Vamos!»",
          B: "Flor te acerca el micrófono con una sonrisa traviesa. «¿Te sabes la letra o improvisamos?»",
          C: "Flor te tiende el micrófono con picardía. «Último aviso: el público aquí es exigente pero perdona todo.»",
        },
        options: [
          {
            id: "juntos",
            say: { A: "¡Sí! Cantamos juntos. ¡Uno, dos, tres!", B: "¡Vamos! Pero empiezas tú y yo te sigo, ¿de acuerdo?", C: "Tú pones la afinación y yo pongo el valor. Vamos." },
            reply: { A: "Cantan juntos. La gente aplaude mucho.", B: "Cantan juntos. Desafinas un poco, pero la gente aplaude como si fuera un concierto.", C: "Cantan a dúo. Lo que te falta de oído lo compensas con convicción. Ovación." },
            mood: "love", end: "duo",
          },
          {
            id: "estribillo",
            say: { A: "Solo sé el estribillo. Lo canto yo.", B: "Solo me sé el estribillo, pero ese lo canto con ganas.", C: "Me sé el estribillo. Las estrofas te las dejo a ti, que tienes más dignidad." },
            reply: { A: "Flor canta y tú cantas el estribillo. ¡Bien!", B: "Flor canta las estrofas y, en el estribillo, todo el público canta contigo.", C: "En el estribillo, el mercado entero se suma. Resulta que todos se sabían solo esa parte." },
            mood: "smile", end: "aplausos",
          },
          {
            id: "timido",
            say: { A: "No, no. Canto muy mal. Mejor escucho.", B: "Uy, no, mejor no. Canto fatal y me da vergüenza.", C: "Pensándolo mejor, mi voz es un secreto que prefiero guardar." },
            reply: { A: "Flor se ríe. «Bueno. ¡Pero aplaudes fuerte!»", B: "Flor se ríe. «Bueno, te perdono. Pero la próxima no te escapas.»", C: "«Todos los secretos acaban saliendo», dice Flor, y sigue tocando sola." },
            mood: "smile", end: "timido",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Contigo no tengo vergüenza. ¡Vamos!", B: "Contigo me animo a todo. ¡Vamos a cantar!", C: "Normalmente no canto ni en la ducha, pero contigo me arriesgo." },
            reply: { A: "Flor te da un abrazo. «¡Eres genial! Esta canción es para ti.»", B: "Flor te abraza con la guitarra en medio. «¡Así me gusta! Esta te la dedico.»", C: "«Ese riesgo merece una dedicatoria», dice Flor, emocionada, y anuncia la canción con tu nombre." },
            mood: "love", end: "dedicada",
          },
        },
      },
      calmar: {
        who: "flor", mood: "scared",
        line: {
          A: "Flor no toca. Abraza la guitarra. La gente mira.",
          B: "La música se ha parado. Flor abraza la guitarra y la gente te mira en silencio.",
          C: "Silencio absoluto. Flor se protege detrás de la guitarra como si fuera un escudo, y el público espera.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Por favor, sigue tocando.", B: "Perdona, lo guardo ahora mismo. Por favor, sigue tocando.", C: "Perdona, he roto la magia. Lo guardo. ¿Me ayudas a recuperarla?" },
            reply: { A: "Flor respira. «Bueno… ¿Qué quieres escuchar?»", B: "Flor suspira y vuelve a colocar los dedos. «Bueno… Vamos a intentarlo. ¿Qué quieres oír?»", C: "«La magia es terca, vuelve sola», dice Flor, todavía seria. «¿Qué tocamos?»" },
            mood: "worried", next: "pedido",
          },
          {
            id: "explicar",
            say: { A: "No pasa nada. Es normal. Sigue.", B: "Tranquila, no pasa nada. Es para mi seguridad, nada más.", C: "No te alarmes. Es un accesorio. Muy de moda, de hecho." },
            reply: { A: "Flor toma la guitarra y corre.", B: "Flor no responde: guarda la guitarra a toda velocidad y sale corriendo.", C: "«Muy de moda», repite Flor. Luego agarra la guitarra y desaparece entre los puestos." },
            mood: "scared", end: "corre",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdona, de verdad. Me voy y te dejo tranquila.", C: "Perdón por el concierto fallido. Me voy antes de empeorarlo." },
            reply: { A: "Flor no dice nada. Mira el suelo.", B: "Flor asiente sin mirarte. Ya no tiene ganas de tocar.", C: "Flor asiente. La guitarra se queda muda el resto de la noche." },
            mood: "sad", end: "silencio",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Perdón. Tu música es muy bonita. No quiero problemas.", B: "Perdóname. Tu música es lo mejor de esta noche y la he estropeado.", C: "Perdóname. Lo mejor de este mercado eres tú con esa guitarra, y lo he arruinado." },
            reply: { A: "Flor sonríe un poco. «Bueno. Te toco una, para ti.»", B: "Flor se relaja y sonríe. «Bueno… Lo que dijiste me gustó. Esta va para ti.»", C: "Flor se ríe, desarmada. «Qué manera de arreglarlo. Bueno, esta te la dedico, pero pórtate bien.»" },
            mood: "love", end: "dedicada",
          },
        },
      },
    },
    ends: {
      dedicada: { text: { A: "Flor canta una canción para ti. Tú bailas. La gente baila contigo.", B: "Flor dice tu nombre por el micrófono y canta para ti. Acabas bailando entre los puestos.", C: "Flor te dedica la canción con nombre y apellido. No te queda otra que bailar, y el mercado te sigue." }, change: "baila", recap: "Flor te dedicó una canción y bailaste en el mercado." },
      cumbia: { text: { A: "Flor toca una cumbia. Todos bailan. Tú también.", B: "Suena la cumbia y todo el mercado baila: vendedores, clientes y hasta un perro.", C: "La cumbia contagia hasta a los más serios. Durante tres minutos, el mercado es una pista de baile." }, change: "baila", recap: "Pediste una cumbia y todo el mercado bailó." },
      aplausos: { text: { A: "La canción termina. La gente aplaude mucho.", B: "Al terminar, el público aplaude con ganas y la funda de Flor se llena de monedas.", C: "El último acorde se queda en el aire y luego llega el aplauso. La funda de Flor se llena." }, change: "sonrie", recap: "Escuchaste a Flor y aplaudiste con todo el mercado." },
      secreto: { text: { A: "Flor toca su canción nueva. Es muy bonita. Ella está feliz.", B: "Flor toca su canción por primera vez en público. Al final, sonríe aliviada y te da las gracias.", C: "Flor estrena su canción. Al acabar, te mira como quien acaba de saltar al vacío y ha aterrizado bien." }, change: "sonrie", recap: "Escuchaste la primera canción propia de Flor." },
      duo: { text: { A: "Cantas con Flor. Al final, ella te abraza.", B: "Terminas la canción con Flor. Ella te abraza y te invita a cantar otro día.", C: "Al acabar el dúo, Flor te abraza y te ofrece, medio en broma, un puesto fijo en su banda." }, change: "abraza", recap: "Cantaste a dúo con Flor." },
      timido: { text: { A: "Escuchas a Flor desde lejos. Aplaudes mucho.", B: "Te quedas escuchando desde atrás. Aplaudes más fuerte que nadie.", C: "Te quedas en segunda fila, aplaudiendo con un entusiasmo que no se atrevió a cantar." }, change: "sigue", recap: "Escuchaste a Flor, pero no te animaste a cantar." },
      corre: { text: { A: "Flor corre con su guitarra. Ya no hay música.", B: "Flor se va corriendo con la guitarra. La esquina se queda sin música.", C: "Flor desaparece entre los puestos y con ella, la música. La esquina se queda extrañamente vacía." }, change: "corre", recap: "Asustaste a Flor y se fue con su guitarra." },
      silencio: { text: { A: "Te vas. Flor no toca más esta noche.", B: "Te alejas. Flor guarda la guitarra y se sienta, triste.", C: "Te alejas. A tu espalda, Flor guarda la guitarra con una tristeza que se nota a distancia." }, change: "triste", recap: "Interrumpiste la música de Flor." },
    },
    speak: {
      A1: "¿Qué música escuchas en casa?",
      A2: "¿Cuál fue el último concierto o espectáculo que viste?",
      B1: "¿Qué canción te recuerda un momento especial de tu vida y por qué?",
      B2: "¿Qué harías si un desconocido te invitara a cantar en público?",
      C1: "¿Qué diferencia hay entre escuchar música en directo y escucharla grabada?",
      C2: "¿Por qué crees que una canción puede decir lo que nos cuesta decir con palabras?",
    },
  },

  // ───────────────────────────── ESCENA 4 ─────────────────────────────
  {
    id: "mercado-amigos",
    kind: "escena",
    district: "mercado",
    title: "Dos amigos se pelean",
    verb: "ACERCARME",
    goal: "Mediar en un conflicto, pedir explicaciones, dar la razón o no, proponer soluciones y calmar los ánimos.",
    cast: [
      {
        id: "bruno", name: "Bruno", role: "Dueño de la chaqueta",
        age: "adult", body: "m", build: "athletic", height: 1.84,
        hair: "buzz", hairColor: "#c9a36b", skin: "#f0c9a4",
        top: "tshirt", topColor: "#1f6f5c", bottom: "jeans", bottomColor: "#1c2433",
        extras: ["bag"], pose: "arms", props: ["jacket-ruined"],
      },
      {
        id: "facundo", name: "Facundo", role: "Amigo de Bruno",
        age: "young", body: "m", build: "slim", height: 1.7,
        hair: "long", hairColor: "#3d2b1f", skin: "#8d5a3b",
        top: "hoodie", topColor: "#b23a48", bottom: "pants", bottomColor: "#3a3a3a",
        extras: ["headphones"], pose: "stand",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "bruno", mood: "angry",
        line: {
          A: "Dos chicos gritan al lado de un puesto. Uno tiene una chaqueta sucia. «¡Te presté mi chaqueta nueva! ¡Mira cómo está!»",
          B: "Dos amigos discuten a gritos junto a un puesto. El alto sacude una chaqueta llena de manchas. «¡Te presté mi chaqueta nueva y me la devuelves así!»",
          C: "Dos amigos discuten con un volumen que compite con la música. El alto agita una chaqueta como prueba del delito. «¡Era nueva! ¡Nueva!»",
        },
        options: [
          {
            id: "mediar",
            say: { A: "Tranquilos, por favor. ¿Qué pasó?", B: "Eh, tranquilos. ¿Qué ha pasado? Cuéntenmelo despacio, uno por uno.", C: "A ver, a ver. Un poco de calma. ¿Alguien me cuenta la versión oficial?" },
            reply: { A: "Bruno señala a su amigo. «Facundo tiene la culpa. ¡Pregúntale!»", B: "Bruno señala a su amigo. «Pregúntale a Facundo qué hizo con mi chaqueta.»", C: "«Oficial no hay», dice Bruno. «Está la verdad, que es la mía, y la de Facundo.»" },
            mood: "angry", next: "historia",
          },
          {
            id: "lado",
            say: { A: "Bruno tiene razón. Una cosa prestada se cuida.", B: "Perdona, pero tiene razón: si te prestan algo, hay que cuidarlo.", C: "Desde fuera, lo siento, pero quien presta algo espera que vuelva entero." },
            reply: { A: "Facundo se enfada. «¿Y tú quién eres? ¡No sabes nada!»", B: "Facundo se gira hacia ti, molesto. «¿Y tú qué sabes? ¡No sabes lo que pasó!»", C: "«Qué fácil es opinar desde fuera», dice Facundo, ofendido. «Ni siquiera sabes lo que pasó.»" },
            mood: "angry", next: "historia",
          },
          {
            id: "irse",
            say: { A: "Uy, perdón. Yo me voy.", B: "Uy, perdón. No quiero molestar, yo me voy.", C: "Perdón, creo que me he metido en un capítulo equivocado. Me retiro." },
            reply: { A: "Los dos te miran. «¡No! Tú eres neutral. ¿Quién tiene razón?»", B: "Los dos te paran a la vez. «¡Espera! Tú eres neutral. Dinos quién tiene razón.»", C: "«¡Quieto!», dicen los dos a la vez. «Tú eres el jurado. Escucha y decide.»" },
            mood: "surprised", next: "historia",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y un papel.", B: "Sacas el lápiz y un papel, como un notario.", C: "Sacas el lápiz y un papel con la solemnidad de un notario." },
            say: { A: "Vamos a escribir un acuerdo. ¿De acuerdo?", B: "Propongo escribir un acuerdo. Cada uno dice qué quiere.", C: "Redactemos un tratado de paz. Cláusula uno: nadie grita." },
            reply: { A: "Bruno y Facundo se miran. Se ríen un poco.", B: "Los dos se miran, sorprendidos, y se les escapa una sonrisa. «Bueno… vamos a ver.»", C: "«Tratado de la chaqueta», dice Facundo, aguantando la risa. Bruno ya no puede seguir enfadado." },
            mood: "smile", next: "solucion",
          },
          libro: {
            act: { A: "Abres tu libro y lees una frase.", B: "Abres tu libro y lees una frase en voz alta.", C: "Abres tu libro por una página cualquiera y lees con voz de sabio." },
            say: { A: "Aquí dice: «Un amigo vale más que una chaqueta».", B: "Escuchen esto: «Un amigo vale más que cualquier cosa que puedas comprar».", C: "Según este libro, «la amistad que vale la pena sobrevive a cualquier mancha»." },
            reply: { A: "Bruno mira el libro. «¿De verdad dice eso?»", B: "Bruno frunce el ceño. «¿Eso lo dice el libro o te lo acabas de inventar?»", C: "«Ese libro es de cocina», observa Facundo. Bruno se ríe a pesar suyo." },
            mood: "surprised", next: "historia",
          },
          gas: {
            act: { A: "Ellos gritan mucho. Sacas el gas pimienta.", B: "Los gritos suben y, nervioso, sacas el gas pimienta.", C: "La discusión sube de tono y sacas el gas pimienta, por si acaso." },
            say: { A: "¡Basta! ¡Silencio los dos!", B: "¡Basta ya! ¡Los dos, quietos!", C: "¡Se acabó el debate! ¡Quietos los dos!" },
            reply: { A: "Bruno y Facundo ven el gas. Corren juntos.", B: "Bruno y Facundo ven el gas y salen corriendo, juntos, por fin de acuerdo en algo.", C: "Bruno y Facundo se miran, se olvidan de la chaqueta y huyen juntos. Unidos en la adversidad." },
            mood: "scared", end: "corren",
          },
          granada: {
            act: { A: "Sacas la granada.", B: "Sin pensar, sacas la granada para llamar su atención.", C: "Para llamar su atención, sacas la granada. La consigues, desde luego." },
            say: { A: "¡Eh! ¡Atención, por favor!", B: "¡Eh! ¿Me escuchan un momento?", C: "¿Me conceden un minuto de atención?" },
            reply: { A: "Los dos se quedan quietos. Después, juntos: «¡Oye! ¡Guarda eso!»", B: "Los dos se congelan. Luego se ponen hombro con hombro. «¡Eh! ¡Tú no le hablas así a mi amigo!»", C: "Silencio. Luego, en perfecta sincronía: «¡Con mi amigo nadie se mete!» Ahora el enemigo eres tú." },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al acercarte, se ve tu pistola.", C: "Al acercarte, la pistola queda a la vista." },
            say: { A: "Hola. ¿Qué pasa aquí?", B: "Hola. ¿Qué está pasando aquí?", C: "Buenas. ¿Algún problema por aquí?" },
            reply: { A: "Bruno y Facundo se quedan quietos. Después se ponen juntos.", B: "Los dos se callan y, sin decir nada, se ponen uno al lado del otro. «Ningún problema. Somos amigos.»", C: "«¿Problema? ¿Qué problema?», dice Bruno, abrazando a Facundo. «Somos amigos desde el colegio.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Sacas el cuchillo para cortar un hilo de la chaqueta.", C: "Sacas el cuchillo: de la chaqueta cuelga un hilo larguísimo." },
            say: { A: "La chaqueta tiene un hilo. ¿Lo corto?", B: "Tiene un hilo suelto. ¿Quieren que lo corte?", C: "Por lo menos arreglemos ese hilo. ¿Me dejan?" },
            reply: { A: "Los dos se callan. Juntos dicen: «¡No, no, gracias!»", B: "Los dos se callan de golpe. «¡No, gracias!», dicen juntos, y se ponen hombro con hombro.", C: "«¡No hace falta!», dicen a la vez, de repente muy unidos frente a tu cuchillo." },
            mood: "scared", next: "calmar",
          },
          corazon: {
            act: CORAZON,
            say: { A: "Ustedes son muy amigos, ¿verdad? Se nota.", B: "Se nota que son muy amigos. Por eso duele tanto, ¿no?", C: "Uno solo se pelea así con la gente que le importa de verdad." },
            reply: { A: "Facundo baja la cabeza. «Sí. Usé la chaqueta para tapar su regalo de cumpleaños.»", B: "Facundo suspira. «Es que llovió y usé la chaqueta para tapar su regalo de cumpleaños. No quería decirlo.»", C: "Facundo confiesa, rojo: «Tapé con ella tu regalo de cumpleaños cuando llovió. Era una sorpresa.»" },
            mood: "love", next: "solucion",
          },
        },
      },
      historia: {
        who: "facundo", mood: "sad",
        line: {
          A: "Facundo habla. «Fue un accidente. Llovió y se cayó salsa. Lo siento.»",
          B: "Facundo se defiende. «¡Fue un accidente! Empezó a llover y luego se me cayó salsa encima. Ya le he pedido perdón.»",
          C: "Facundo expone su caso. «Lluvia, salsa de empanada, un perro curioso. Una conspiración. Y ya he pedido perdón.»",
        },
        options: [
          {
            id: "mitad",
            say: { A: "¿Y si pagan la limpieza a medias?", B: "¿Por qué no pagan la tintorería a medias? Es justo para los dos.", C: "Propongo una solución salomónica: tintorería a medias y aquí no ha pasado nada." },
            reply: { A: "Bruno piensa. «Bueno… Puede ser.»", B: "Bruno se cruza de brazos, pensativo. «Hmm… Puede ser. Pero que elija él la tintorería.»", C: "«Salomónica», repite Bruno. «Me gusta. Aunque Salomón no conocía a Facundo.»" },
            mood: "neutral", next: "solucion",
          },
          {
            id: "culpa",
            say: { A: "Facundo, tienes que pagar una chaqueta nueva.", B: "Facundo, creo que lo justo es que le compres una chaqueta nueva.", C: "Facundo, con todo cariño: un perdón no quita manchas. Te toca reponerla." },
            reply: { A: "Facundo suspira. «Bueno… Está bien.»", B: "Facundo suspira, derrotado. «Bueno, bueno. Pero que no sea tan cara.»", C: "Facundo levanta las manos. «De acuerdo. Pero la elijo yo, que él tiene un gusto horrible.»" },
            mood: "sad", next: "solucion",
          },
          {
            id: "humor",
            say: { A: "Mira, ahora la chaqueta es más original.", B: "Bueno, ahora la chaqueta tiene más personalidad, ¿no?", C: "Siendo honestos, las manchas le dan un aire artístico. Podrías venderla." },
            reply: { A: "Bruno mira la chaqueta. Se ríe.", B: "Bruno mira la chaqueta… y se le escapa una carcajada. «Es verdad, parece un mapa.»", C: "Bruno mira la chaqueta, luego a Facundo, y los dos estallan de risa. «Arte moderno.»" },
            mood: "smile", end: "risas",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Facundo, ¿por qué es tan importante?", B: "Facundo, cuéntale la verdad. Creo que hay algo más.", C: "Facundo, esa cara dice que la historia tiene otro capítulo." },
            reply: { A: "Facundo dice: «Llovió. Tapé su regalo con la chaqueta.»", B: "Facundo confiesa: «Tapé su regalo de cumpleaños con la chaqueta para que no se mojara.»", C: "«Vale más un regalo seco que una chaqueta limpia», dice Facundo, y saca un paquete intacto." },
            mood: "love", next: "solucion",
          },
        },
      },
      solucion: {
        who: "bruno", mood: "neutral",
        line: {
          A: "Bruno está más tranquilo. «Bueno… ¿Y qué hacemos ahora?»",
          B: "Bruno ya no grita, pero sigue con la chaqueta en la mano. «Bueno, ¿y ahora qué hacemos?»",
          C: "Bruno dobla la chaqueta con cuidado, como un documento importante. «Bien. ¿Y cuál es el veredicto?»",
        },
        options: [
          {
            id: "paz",
            say: { A: "Dense la mano. Son amigos.", B: "Creo que es mejor que se den la mano. Una chaqueta no es más importante que una amistad.", C: "Mi veredicto: apretón de manos y a otra cosa. La amistad no se lava en seco." },
            reply: { A: "Bruno y Facundo se dan la mano. Después se abrazan.", B: "Se miran un momento y se dan la mano. Al final, terminan abrazados.", C: "Se dan la mano con solemnidad y, segundos después, un abrazo torpe y sincero." },
            mood: "smile", end: "paz",
          },
          {
            id: "cena",
            say: { A: "Facundo te invita a cenar. ¿De acuerdo?", B: "Que Facundo te invite a cenar esta noche y lo olvidamos, ¿les parece?", C: "Propuesta: Facundo paga la cena esta noche y la chaqueta descansa en paz." },
            reply: { A: "Facundo sonríe. «¡Sí! Empanadas para los dos.»", B: "«¡Hecho!», dice Facundo. «Empanadas para los dos. Y para ti también, por mediar.»", C: "«Trato hecho», dice Bruno. «Y que sean de las caras.» Facundo se lleva las manos a la cabeza." },
            mood: "smile", end: "cena",
          },
          {
            id: "no-mio",
            say: { A: "No es mi problema. Hablen ustedes.", B: "Mira, esto no es asunto mío. Arréglenlo ustedes.", C: "Con todo respeto, soy un simple transeúnte. Resuélvanlo entre ustedes." },
            reply: { A: "Bruno se enfada otra vez. «¡Bueno, gracias por nada!»", B: "Bruno resopla. «¡Genial! Entonces seguimos igual.» Y vuelven a gritar.", C: "«Muy útil», dice Bruno con ironía, y la discusión retoma su volumen original." },
            mood: "angry", end: "siguen",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Bruno, Facundo te quiere mucho. Mira.", B: "Bruno, Facundo lo hizo por ti. Eso vale más que la chaqueta.", C: "Bruno, piensa en lo que tienes: un amigo que sacrifica tu chaqueta por ti. Eso es amor." },
            reply: { A: "Bruno abraza a Facundo. «Eres un desastre, pero eres mi amigo.»", B: "Bruno se ríe y abraza a Facundo. «Eres un desastre. Pero eres mi desastre.»", C: "Bruno se ríe y abraza a Facundo. «Sacrificaste mi chaqueta. Qué generoso eres con lo ajeno.»" },
            mood: "love", end: "paz",
          },
        },
      },
      calmar: {
        who: "bruno", mood: "scared",
        line: {
          A: "Bruno y Facundo están juntos. Te miran con miedo, pero no se van.",
          B: "Bruno y Facundo, hombro con hombro, te miran con miedo. Ya no se pelean: ahora el problema eres tú.",
          C: "Bruno y Facundo forman un frente común, temblorosos pero dignos. Nunca habían estado tan de acuerdo.",
        },
        options: [
          {
            id: "disculpa",
            say: { A: "Perdón. Lo guardo. Solo quería ayudar.", B: "Perdonen, lo guardo ya. Solo quería que dejaran de pelear.", C: "Les pido perdón. Lo guardo. Mi método de mediación necesita mejorar." },
            reply: { A: "Bruno respira. «Bueno… Ya no peleamos.»", B: "Bruno suspira. «Bueno… Por lo menos ya no peleamos.» Facundo asiente.", C: "«Tu método es raro, pero funciona», dice Facundo. «Ya ni me acuerdo de la chaqueta.»" },
            mood: "worried", end: "unidos",
          },
          {
            id: "explicar",
            say: { A: "No pasa nada. Es para mi seguridad.", B: "No se preocupen, lo llevo por seguridad. Es lo normal.", C: "Tranquilos, es un objeto puramente decorativo. Más o menos." },
            reply: { A: "Facundo llama a la policía.", B: "Facundo saca el celular sin dejar de mirarte. «¿Policía? Sí, en el mercado…»", C: "«Decorativo», repite Bruno. Facundo ya está hablando con la policía." },
            mood: "scared", end: "policia",
          },
          {
            id: "bromear",
            say: { A: "Bueno, ¡ya no se pelean!", B: "Bueno, por lo menos ya no se pelean, ¿no?", C: "Admitan que, como terapia de pareja, ha sido eficaz." },
            reply: { A: "Bruno y Facundo se miran. Se ríen, nerviosos.", B: "Bruno y Facundo se miran y, nerviosos, se echan a reír.", C: "Los dos se miran y sueltan una risa nerviosa. «Terapia de pareja», murmura Bruno. «Lo que me faltaba.»" },
            mood: "worried", end: "risas",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Perdón. Me gusta ver que son buenos amigos.", B: "Perdónenme. Ver que se defienden el uno al otro es bonito, de verdad.", C: "Perdón por el susto. Pero miren: bastó un segundo para que volvieran a ser equipo." },
            reply: { A: "Bruno sonríe. Abraza a Facundo. «Es verdad.»", B: "Bruno sonríe y abraza a Facundo. «Tiene razón. Siempre somos equipo.»", C: "Facundo se ríe. «Es verdad. Contra el mundo, siempre juntos. Y contra ti, sobre todo.»" },
            mood: "love", end: "unidos",
          },
        },
      },
    },
    ends: {
      paz: { text: { A: "Bruno y Facundo se abrazan. Te dan las gracias.", B: "Bruno y Facundo hacen las paces. Antes de irse, te dan las gracias por mediar.", C: "Bruno y Facundo hacen las paces con un abrazo. La chaqueta, en cambio, sigue sin perdonar a nadie." }, change: "sonrie", recap: "Ayudaste a Bruno y Facundo a hacer las paces." },
      cena: { text: { A: "Bruno y Facundo van a cenar juntos. Están contentos.", B: "Bruno y Facundo se van juntos a cenar empanadas. Facundo paga, claro.", C: "Bruno y Facundo se van a cenar. Facundo paga, y Bruno pide lo más caro solo por principio." }, change: "se-va", recap: "Convenciste a Facundo de invitar a Bruno a cenar." },
      siguen: { text: { A: "Te vas. Bruno y Facundo siguen gritando.", B: "Te alejas y la discusión sigue a tus espaldas, cada vez más fuerte.", C: "Te alejas. Diez puestos después, todavía oyes la palabra «chaqueta» a gritos." }, change: "enojado", recap: "No quisiste mediar entre Bruno y Facundo." },
      risas: { text: { A: "Bruno y Facundo se ríen mucho. Ya no están enfadados.", B: "Bruno y Facundo no pueden parar de reír. La pelea se ha terminado sola.", C: "Bruno y Facundo se ríen hasta llorar. La pelea se disuelve como la salsa en la chaqueta." }, change: "sonrie", recap: "Hiciste reír a Bruno y Facundo y dejaron de pelear." },
      unidos: { text: { A: "Bruno y Facundo se abrazan. Ya son amigos otra vez.", B: "Bruno y Facundo se van abrazados. Ya no recuerdan por qué peleaban.", C: "Bruno y Facundo se van abrazados, unidos por un susto común. La mediación más rara del mercado." }, change: "abraza", recap: "Sin querer, uniste otra vez a Bruno y Facundo." },
      corren: { text: { A: "Bruno y Facundo corren juntos. La chaqueta se queda en el suelo.", B: "Bruno y Facundo huyen juntos. En el suelo queda la chaqueta, más sucia que nunca.", C: "Bruno y Facundo huyen en perfecta coordinación. Solo la chaqueta se queda, abandonada a su suerte." }, change: "corre", recap: "Asustaste a Bruno y Facundo y salieron corriendo." },
      policia: { text: { A: "Llega la policía. Explicas todo. Tardas mucho.", B: "Llega la policía. Bruno y Facundo, ahora muy amigos, cuentan su versión con detalle.", C: "Llega la policía. Bruno y Facundo declaran como un solo hombre, con una coordinación admirable." }, change: "policia", recap: "Un susto con Bruno y Facundo terminó con la policía." },
    },
    speak: {
      A1: "¿Qué cosas prestas a tus amigos?",
      A2: "¿Qué hiciste la última vez que te enfadaste con un amigo?",
      B1: "¿Cómo reaccionas cuando alguien te devuelve algo roto?",
      B2: "¿Qué consejo le darías a dos amigos que se pelean por algo pequeño?",
      C1: "¿Cuándo crees que conviene meterse en un conflicto ajeno y cuándo no?",
      C2: "¿Qué revela una discusión por un objeto sobre lo que realmente está en juego entre dos personas?",
    },
  },

  // ───────────────────────────── ESCENA 5 ─────────────────────────────
  {
    id: "mercado-mover",
    kind: "escena",
    district: "mercado",
    title: "¿Me ayudas con esto?",
    verb: "AYUDAR",
    goal: "Ofrecer ayuda, dar y seguir instrucciones (a la izquierda, despacio, levanta), coordinar y proponer alternativas.",
    cast: [
      {
        id: "pilar", name: "Pilar", role: "Dueña de un puesto",
        age: "adult", body: "f", build: "heavy", height: 1.63,
        hair: "bob", hairColor: "#8a2f1e", skin: "#e8c2a0",
        top: "sweater", topColor: "#3e6b8a", bottom: "pants", bottomColor: "#5b4a3a",
        extras: ["glasses"], pose: "carry", props: ["fridge", "stall", "box"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "pilar", mood: "worried",
        line: {
          A: "Una mujer empuja un refrigerador viejo. No se mueve. «¡Oye! ¿Me ayudas con esto? Pesa mucho.»",
          B: "Una mujer con gafas intenta empujar un refrigerador viejo, envuelto en cinta adhesiva. «¡Oye, perdona! ¿Me echas una mano? Esto pesa una tonelada.»",
          C: "Una mujer forcejea con un refrigerador jurásico, momificado en cinta adhesiva. «Disculpa, ¿tienes cinco minutos y una espalda sana?»",
        },
        options: [
          {
            id: "si",
            say: { A: "Sí, claro. ¿Qué hago?", B: "Sí, claro. Dime qué tengo que hacer.", C: "Cinco minutos sí. La espalda, ya veremos. ¿Por dónde empiezo?" },
            reply: { A: "Pilar sonríe. «¡Gracias! Tú levantas de ese lado.»", B: "«¡Eres un sol!», dice Pilar. «Tú agarras de ese lado y yo de este.»", C: "Pilar se ríe. «Respuesta sincera. Agarra por abajo, de ese lado. Yo dirijo.»" },
            mood: "smile", next: "mover",
          },
          {
            id: "que-es",
            say: { A: "¿Qué es? ¿Adónde va?", B: "¿Qué es eso? ¿Y adónde hay que llevarlo?", C: "Antes de comprometerme: ¿qué hay dentro y cuántos kilómetros recorre?" },
            reply: { A: "«Un refrigerador. Va al mercado cubierto, al fondo.»", B: "«Es un refrigerador viejo. Tengo que llevarlo al mercado cubierto, ahí al fondo. ¿Me ayudas?»", C: "«Dentro, nada; fuera, treinta años de historia», dice Pilar. «Solo hasta el mercado cubierto.»" },
            mood: "neutral", next: "mover",
          },
          {
            id: "otro",
            say: { A: "Ahora no puedo. Pero busco a alguien.", B: "Ahora mismo no puedo, lo siento. ¿Quieres que busque a alguien?", C: "Mi espalda y yo estamos en negociaciones. ¿Te busco a alguien más robusto?" },
            reply: { A: "Pilar suspira. «Bueno… Llamo a mi hijo.»", B: "Pilar suspira. «No hace falta. Llamo a mi hijo, aunque nunca contesta.»", C: "«Mi hijo es el robusto de la familia», dice Pilar, marcando. «Y el que nunca contesta.»" },
            mood: "sad", end: "hijo",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y dibujas el camino.", B: "Sacas el lápiz y dibujas el camino en un cartón.", C: "Sacas el lápiz y trazas una ruta en un cartón, como un general." },
            say: { A: "Mira. Vamos por aquí. Hay menos gente.", B: "Mira, si vamos por aquí, evitamos a la gente y los escalones.", C: "Propongo esta ruta: sin escalones, sin multitudes y sin el puesto de cerámica." },
            reply: { A: "Pilar mira el dibujo. «¡Perfecto! Vamos.»", B: "Pilar mira el cartón y asiente. «¡Qué buena idea! Por ahí no hay escalones. Vamos.»", C: "«Lo del puesto de cerámica es clave», dice Pilar. «Ya rompí dos jarrones esta semana.»" },
            mood: "smile", next: "mover",
          },
          libro: {
            act: { A: "Sacas tu libro.", B: "Sacas tu libro y miras la puerta del mercado cubierto.", C: "Sacas tu libro y miras de reojo la puerta del mercado cubierto." },
            say: { A: "La puerta se cierra. Pongo el libro y no se cierra.", B: "Esa puerta se cierra sola. Puedo trabarla con mi libro.", C: "Esa puerta tiene vida propia. Mi libro puede servir de cuña." },
            reply: { A: "Pilar se ríe. «¡Muy bien! Esa puerta es terrible.»", B: "«¡Genial! Esa puerta es mi enemiga personal», dice Pilar. «Vamos.»", C: "«Por fin un libro útil», dice Pilar, riendo. «Perdón, es broma. Bueno, medio broma.»" },
            mood: "smile", next: "mover",
          },
          gas: {
            act: { A: "El refrigerador hace un ruido. Sacas el gas pimienta.", B: "El refrigerador hace un ruido raro y, del susto, sacas el gas pimienta.", C: "El refrigerador emite un gruñido metálico y, por reflejo, sacas el gas pimienta." },
            say: { A: "¡Uy! ¿Qué es ese ruido?", B: "¡Uy! ¿Qué ha sido ese ruido?", C: "¡Atención! ¿Ese ruido es normal?" },
            reply: { A: "Pilar levanta las manos. «¡Es el refrigerador! ¡Tranquilo!»", B: "Pilar da un paso atrás. «¡Es el motor, nada más! ¡Baja eso, por favor!»", C: "«Es el motor», dice Pilar, alarmada. «Lleva treinta años gruñendo. No es peligroso. Tú sí.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Muestras la granada.", B: "Le muestras la granada, como solución rápida.", C: "Le muestras la granada como quien propone una solución de ingeniería." },
            say: { A: "¿Y si lo rompemos con esto?", B: "¿Y si lo hacemos más pequeño con esto?", C: "Podríamos reducir el tamaño del problema, ¿no?" },
            reply: { A: "Pilar grita. «¡No, no! ¡Es de mi padre!»", B: "Pilar se pone delante del refrigerador. «¡Ni se te ocurra! ¡Era de mi padre!»", C: "Pilar abraza el refrigerador. «¡Es una reliquia familiar! Y tú, un peligro público.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al agacharte para levantar, se ve tu pistola.", C: "Al agacharte para hacer fuerza, la pistola asoma de tu cintura." },
            say: { A: "Bueno. Uno, dos, tres…", B: "Bueno, a la de tres. Uno, dos…", C: "Preparados. A la de tres. Uno…" },
            reply: { A: "Pilar ve la pistola y suelta el refrigerador.", B: "Pilar ve la pistola y suelta el refrigerador de golpe. «Eh… ¿Eso es lo que creo?»", C: "Pilar suelta el refrigerador. «Antes de llegar a tres, ¿me explicas eso?»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo. Cortas la cinta del suelo.", B: "Sacas el cuchillo: la cinta adhesiva está pegada al suelo.", C: "Sacas el cuchillo, porque la cinta adhesiva tiene el refrigerador pegado al asfalto." },
            say: { A: "La cinta está pegada al suelo. La corto.", B: "Por eso no se mueve: la cinta está pegada al suelo. ¿La corto?", C: "Misterio resuelto: la cinta lo tiene anclado. ¿Me permites?" },
            reply: { A: "Pilar mira el cuchillo. Después sonríe. «¡Ah! ¡Por eso no se mueve!»", B: "Pilar se asusta un segundo, pero luego se ríe. «¡Claro! ¡Llevo media hora empujando un refrigerador pegado!»", C: "Pilar se tensa al ver el cuchillo, luego mira la cinta y se tapa la cara. «Media hora. Media hora empujando.»" },
            mood: "surprised", next: "mover",
          },
          corazon: {
            act: CORAZON,
            say: { A: "Claro que te ayudo. Es importante para ti, ¿no?", B: "Claro que te ayudo. Se nota que ese refrigerador es especial.", C: "Te ayudo. Nadie empuja un refrigerador así de viejo si no le importa." },
            reply: { A: "Pilar sonríe. «Sí. Era de mi padre. Fue su primer puesto.»", B: "Pilar acaricia el refrigerador. «Era de mi padre. Con él empezó su primer puesto, hace treinta años.»", C: "Pilar sonríe con nostalgia. «Mi padre vendió helados con él treinta años. Se jubila hoy, como él.»" },
            mood: "love", next: "mover",
          },
        },
      },
      mover: {
        who: "pilar", mood: "neutral",
        line: {
          A: "Pilar agarra el refrigerador. «Bueno. Tú me dices cuándo.»",
          B: "Pilar se coloca del otro lado. «Bien. Tú ves el camino, así que tú me guías. ¿Listo?»",
          C: "Pilar se coloca del otro lado y se sube las mangas. «Tú tienes la vista, yo la fuerza bruta. Dirige.»",
        },
        options: [
          {
            id: "levantar",
            say: { A: "Uno, dos, tres… ¡Levanta!", B: "A la de tres levantamos. Uno, dos, tres… ¡Arriba!", C: "Sincronicemos: a la de tres, arriba. Uno, dos… ¡tres!" },
            reply: { A: "Levantan el refrigerador. ¡Se mueve!", B: "Levantan juntos. El refrigerador se mueve, por fin. «¡Bien! ¡Sigue, sigue!»", C: "El refrigerador se eleva dos centímetros heroicos. «¡Historia!», grita Pilar." },
            mood: "smile", next: "puerta",
          },
          {
            id: "despacio",
            say: { A: "Despacio. Un poco a la izquierda. Cuidado.", B: "Despacio, despacio. Un poco más a la izquierda… ¡cuidado con el puesto!", C: "Despacito. Izquierda… un poquito más… no, tu otra izquierda." },
            reply: { A: "Pilar va a la izquierda. «¿Así? ¿Bien?»", B: "Pilar gira con cuidado. «¿Así? Uf, casi me llevo las flores de Doña Mirta.»", C: "Pilar se ríe tanto que tiene que parar. «¡Mi otra izquierda es la derecha!»" },
            mood: "smile", next: "puerta",
          },
          {
            id: "carrito",
            say: { A: "Espera. ¿Usamos ese carrito?", B: "Espera, ¿y si usamos ese carrito de allí? Sería mucho más fácil.", C: "Una pregunta técnica: ¿por qué no usamos ese carrito que está ahí aburrido?" },
            reply: { A: "Pilar mira el carrito. «¡Sí! ¡Qué buena idea!»", B: "Pilar mira el carrito y se ríe. «¿Cómo no lo vi antes? ¡Vamos!»", C: "Pilar se queda muda. «Treinta años en este mercado y nunca vi ese carrito.»" },
            mood: "surprised", end: "carrito",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Tú puedes. Somos un buen equipo.", B: "Vamos, que somos un equipo estupendo. Tú puedes.", C: "Tú y yo, contra la ley de la gravedad. Vamos a ganar." },
            reply: { A: "Pilar se ríe. «¡Sí! Gracias. Eres muy amable.»", B: "Pilar se ríe con ganas. «¡Qué ánimo! Si gano, te invito a un helado.»", C: "«Contra la gravedad», repite Pilar, emocionada. «Mi padre se habría reído contigo.»" },
            mood: "love", next: "puerta",
          },
        },
      },
      puerta: {
        who: "pilar", mood: "worried",
        line: {
          A: "Llegan a la puerta del mercado cubierto. La puerta se cierra sola. «¡Esta puerta!»",
          B: "Llegan a la entrada del mercado cubierto, pero la puerta se cierra sola cada vez. «¡Esta puerta me odia!»",
          C: "La puerta del mercado cubierto se cierra con malicia justo cuando llegan. «Lo hace a propósito», dice Pilar." },
        options: [
          {
            id: "sostener",
            say: { A: "Yo abro la puerta. Tú pasas.", B: "Yo sujeto la puerta y tú empujas. Despacio, ¿eh?", C: "Yo me encargo de la puerta; tú conduces. Con calma, que no hay prisa." },
            reply: { A: "Pilar pasa con el refrigerador. «¡Lo conseguimos!»", B: "Pilar empuja y el refrigerador entra por fin. «¡Lo conseguimos!»", C: "Pilar maniobra como una profesional. El refrigerador entra con un rugido triunfal." },
            mood: "smile", end: "dentro",
          },
          {
            id: "girar",
            say: { A: "Gíralo un poco. A la derecha. Así.", B: "Gíralo un poco a la derecha, que no pasa de frente.", C: "De frente no cabe. Gíralo un cuarto de vuelta… a la derecha. Eso." },
            reply: { A: "Pilar lo gira. Entra. «¡Bravo!»", B: "Pilar lo gira y entra justito. «¡Bravo! Eres un genio de la física.»", C: "El refrigerador entra con un milímetro de margen. Pilar aplaude. «Ingeniería pura.»" },
            mood: "smile", end: "dentro",
          },
          {
            id: "descanso",
            say: { A: "Paramos un minuto. Me duele la espalda.", B: "¿Paramos un minuto? Me está matando la espalda.", C: "Propongo una pausa estratégica. Mi espalda ha presentado una queja formal." },
            reply: { A: "Pilar se sienta en el refrigerador. «Sí, yo también.»", B: "Pilar se sienta encima del refrigerador. «Menos mal que lo dices tú. Yo no podía más.»", C: "Pilar se sienta sobre el refrigerador. «Aceptada la queja. La mía también.»" },
            mood: "neutral", end: "descanso",
          },
        ],
        items: {
          libro: {
            act: { A: "Pones tu libro debajo de la puerta.", B: "Metes tu libro debajo de la puerta para trabarla.", C: "Encajas tu libro bajo la puerta, que por fin se rinde." },
            say: { A: "Ya está. Ahora no se cierra.", B: "Listo. Ahora la puerta no se cierra. ¡Empuja!", C: "La literatura vence a la puerta. Adelante." },
            reply: { A: "Pilar empuja. Entra. «¡Qué buena idea!»", B: "Pilar empuja y el refrigerador entra sin problemas. «¡Bendito libro!»", C: "El refrigerador entra. «Pienso leer ese libro solo por agradecimiento», dice Pilar." },
            mood: "smile", end: "dentro",
          },
          corazon: {
            act: CORAZON,
            say: { A: "Tu padre está orgulloso de ti, seguro.", B: "Seguro que tu padre estaría orgulloso de verte aquí.", C: "Algo me dice que tu padre estaría encantado de ver este desfile." },
            reply: { A: "Pilar se emociona. «Gracias. Vamos. Lo empujamos juntos.»", B: "Pilar se emociona. «Gracias… Vamos, el último empujón por él.»", C: "Pilar se limpia las gafas, emocionada. «Último empujón. Por papá.» Y la puerta, por fin, cede." },
            mood: "love", end: "dentro",
          },
        },
      },
      calmar: {
        who: "pilar", mood: "scared",
        line: {
          A: "Pilar está detrás del refrigerador. Tiene miedo.",
          B: "Pilar se esconde detrás del refrigerador y te mira por encima de las gafas.",
          C: "Pilar usa el refrigerador de trinchera y te observa por encima de las gafas, sin pestañear.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Te ayudo con el refrigerador.", B: "Perdona, de verdad. Lo guardo y te ayudo, ¿de acuerdo?", C: "Perdona. He empezado mal. Lo guardo y me pongo a tus órdenes." },
            reply: { A: "Pilar respira. «Bueno… Vamos.»", B: "Pilar sale despacio. «Bueno… Pero sin sorpresas, ¿eh?»", C: "«A mis órdenes, entonces», dice Pilar, todavía tensa. «Primera orden: nada de sustos.»" },
            mood: "worried", next: "mover",
          },
          {
            id: "explicar",
            say: { A: "No pasa nada. Lo llevo siempre.", B: "No te preocupes, lo llevo siempre. Es normal.", C: "Es mi equipo de trabajo nocturno, nada más. Totalmente rutinario." },
            reply: { A: "Pilar llama a la policía.", B: "Pilar saca el celular. «Mira, mejor llamo a la policía y que ellos decidan si es normal.»", C: "«Rutinario», dice Pilar. «La policía también tiene rutinas.» Y marca." },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdona el susto. Mejor me voy.", C: "Perdona. Creo que hoy no soy la ayuda que necesitas." },
            reply: { A: "Pilar no dice nada. Empuja sola.", B: "Pilar asiente, molesta, y vuelve a empujar sola.", C: "«No, no lo eres», dice Pilar, y vuelve a empujar sola." },
            mood: "angry", end: "sola",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Perdón. Quiero ayudarte, de verdad.", B: "Perdóname. Te prometo que solo quiero ayudarte.", C: "Perdóname. Esta noche llevo demasiadas cosas encima, pero las buenas intenciones también." },
            reply: { A: "Pilar sonríe un poco. «Bueno. Pero levantas tú.»", B: "Pilar se ríe a medias. «Bueno… Pero como castigo, tú levantas la parte pesada.»", C: "«Las buenas intenciones pesan menos», dice Pilar. «Te toca la parte pesada.»" },
            mood: "love", next: "mover",
          },
        },
      },
    },
    ends: {
      dentro: { text: { A: "El refrigerador está en el mercado cubierto. Pilar te da las gracias.", B: "Por fin, el refrigerador está dentro del mercado cubierto. Pilar te abraza y te promete un helado.", C: "El refrigerador llega a su destino final. Pilar lo acaricia como a un viejo amigo y te promete helado de por vida." }, change: "sonrie", recap: "Ayudaste a Pilar a mover el refrigerador de su padre." },
      carrito: { text: { A: "Usan el carrito. Es muy fácil. Pilar se ríe.", B: "Con el carrito, el refrigerador llega en dos minutos. Pilar no para de reírse.", C: "El carrito resuelve en dos minutos lo que la fuerza no pudo en media hora. Pilar no lo supera." }, change: "sonrie", recap: "Ayudaste a Pilar usando un carrito." },
      descanso: { text: { A: "Pilar y tú descansan. Ella te cuenta de su padre.", B: "Pilar y tú se sientan a descansar. Te cuenta historias de su padre y sus helados.", C: "Se sientan a descansar sobre el refrigerador y Pilar te cuenta la vida de su padre, helado a helado." }, change: "se-sienta", recap: "Descansaste con Pilar después de mover el refrigerador." },
      hijo: { text: { A: "Pilar llama a su hijo. Él no contesta.", B: "Pilar llama a su hijo. No contesta, como siempre.", C: "Pilar llama a su hijo. El buzón de voz responde, fiel a la tradición familiar." }, change: "llama", recap: "No ayudaste a Pilar y ella llamó a su hijo." },
      sola: { text: { A: "Te vas. Pilar empuja sola. Está enfadada.", B: "Te alejas. Pilar sigue empujando sola, de muy mal humor.", C: "Te alejas. Pilar empuja sola, refunfuñando contra ti, la puerta y la ley de la gravedad." }, change: "enojado", recap: "Dejaste a Pilar sola con su refrigerador." },
      policia: { text: { A: "Llega la policía. Explicas todo. Es un malentendido.", B: "Llega la policía. Te pasas un buen rato explicando el malentendido junto al refrigerador.", C: "Llega la policía. Explicar el malentendido junto a un refrigerador envuelto en cinta no ayuda." }, change: "policia", recap: "Asustaste a Pilar y llegó la policía." },
    },
    speak: {
      A1: "¿Qué cosas pesadas hay en tu casa?",
      A2: "¿A quién ayudaste la última vez a mover algo?",
      B1: "¿Qué cosas viejas guardas porque te recuerdan a alguien?",
      B2: "¿Qué harías si tuvieras que mudarte mañana sin ayuda?",
      C1: "¿Cómo pides ayuda sin sentir que molestas a los demás?",
      C2: "¿Qué valor tienen para ti los objetos heredados más allá de su utilidad?",
    },
  },

  // ───────────────────────────── ESCENA 6 ─────────────────────────────
  {
    id: "mercado-trastienda",
    kind: "escena",
    district: "mercado",
    title: "La puerta T-7",
    verb: "ENTRAR",
    requires: "llave",
    goal: "Presentarse, explicar el origen de algo, hacer preguntas sobre el pasado y escuchar una historia.",
    cast: [
      {
        id: "teo", name: "Teo", role: "Guardián de La Trastienda",
        age: "adult", body: "m", build: "average", height: 1.76,
        hair: "short", hairColor: "#2a2a2a", skin: "#a8724e",
        top: "apron", topColor: "#5a3a28", bottom: "pants", bottomColor: "#2e2a24",
        extras: ["beard"], pose: "lean", props: ["door", "bar"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "teo", mood: "surprised",
        line: {
          A: "Al final del callejón hay una puerta vieja: «T-7». Se abre una ventanita. «¿Quién eres? Esta puerta no se abre nunca.»",
          B: "Al fondo del callejón, una puerta antigua lleva pintado «T-7». Una ventanita se abre y aparece un hombre con barba. «¿Quién anda ahí? Nadie viene por aquí.»",
          C: "Al final del callejón, una puerta marcada «T-7» parece dormida desde hace décadas. Una ventanita se abre de golpe. «¿Te has perdido o me buscas?»",
        },
        options: [
          {
            id: "llave",
            say: { A: "Tengo una llave. ¿Puedo abrir?", B: "Tengo esta llave. Creo que es de esta puerta. ¿Puedo probar?", C: "Diría que esta llave y tu puerta tienen algo que contarse." },
            reply: { A: "El hombre ve la llave. Abre mucho los ojos.", B: "El hombre mira la llave y se queda sin palabras. Abre la puerta despacio.", C: "El hombre mira la llave como quien ve un fantasma. La puerta se abre con un quejido." },
            mood: "surprised", next: "abuelo",
          },
          {
            id: "preguntar",
            say: { A: "Perdón. ¿Qué es este lugar?", B: "Perdona, ¿qué hay detrás de esta puerta?", C: "Perdona la curiosidad, pero una puerta así no está aquí por casualidad." },
            reply: { A: "«Nada. Es privado.» Entonces ve tu llave. «¿De dónde es eso?»", B: "«Nada que te importe», empieza. Entonces ve la llave en tu mano. «Espera… ¿de dónde sacaste eso?»", C: "«Casualidades hay pocas», dice. Sus ojos bajan a tu mano. «Y esa llave, por ejemplo, no es una.»" },
            mood: "surprised", next: "abuelo",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me equivoqué de puerta.", B: "Perdona, creo que me he equivocado. Ya me voy.", C: "Perdón por la intromisión. Esta puerta parece guardar algo que no me corresponde." },
            reply: { A: "El hombre cierra la ventanita.", B: "El hombre te mira un segundo y cierra la ventanita.", C: "«Quizá sí, quizá no», dice el hombre, y cierra la ventanita." },
            mood: "neutral", end: "cerrada",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Escribes una nota y la pasas por la ventanita.", B: "Escribes una nota y la pasas por la ventanita.", C: "Escribes una nota breve y la deslizas por la ventanita." },
            say: { A: "Una señora me dio una llave. Es de aquí, creo.", B: "Lee, por favor. Una señora mayor me dio una llave y creo que es de aquí.", C: "Te lo explico por escrito, que es más elegante: traigo una llave que no es mía." },
            reply: { A: "El hombre lee. Abre la puerta. «Quiero ver esa llave.»", B: "El hombre lee la nota dos veces. Luego abre la puerta. «Enséñame esa llave.»", C: "El hombre lee, levanta la vista y abre la puerta sin decir nada. Solo extiende la mano." },
            mood: "surprised", next: "abuelo",
          },
          libro: {
            act: { A: "Tienes tu libro en la mano.", B: "El hombre ve tu libro en la mano.", C: "El hombre se fija en el libro que llevas bajo el brazo." },
            say: { A: "Hola. Tengo una llave. Es para esta puerta.", B: "Hola. Me dieron una llave para esta puerta, o eso creo.", C: "Buenas noches. Vengo con un libro y una llave. Ninguno de los dos es mío." },
            reply: { A: "Él mira el libro. «¿Te gusta leer? Bien. Pasa.»", B: "«Alguien que lee y trae una llave», murmura. «Mi abuelo diría que eso es una señal. Pasa.»", C: "«Mi abuelo solo dejaba entrar a gente con libros», dice. «Y con esa llave, ni te cuento. Pasa.»" },
            mood: "smile", next: "abuelo",
          },
          gas: {
            act: { A: "La ventanita se abre rápido. Sacas el gas pimienta.", B: "La ventanita se abre de golpe y sacas el gas pimienta.", C: "El golpe de la ventanita te sobresalta y sacas el gas pimienta." },
            say: { A: "¡Eh! ¿Quién está ahí?", B: "¡Eh! ¿Quién eres? ¡No te acerques!", C: "¡Un momento! Identifícate, por favor." },
            reply: { A: "El hombre cierra la ventanita. «¡Vete!»", B: "El hombre cierra la ventanita de golpe. «¡Esta es mi puerta! ¡Vete!»", C: "«¿Identificarme yo? ¡Tú estás en mi puerta!», grita, y cierra la ventanita." },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Muestras la granada.", B: "Le muestras la granada para que vea que vas en serio.", C: "Le enseñas la granada, sin pensar mucho en el mensaje que envías." },
            say: { A: "Quiero entrar, por favor.", B: "Me gustaría entrar, si no te importa.", C: "Si no es molestia, me encantaría pasar." },
            reply: { A: "El hombre cierra la ventanita. «¡No! ¡Vete!»", B: "El hombre palidece y cierra la ventanita. «¡Ni hablar! ¡Fuera de aquí!»", C: "«Molestia, ninguna. Pánico, bastante», dice, y la ventanita se cierra de un golpe." },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al levantar la llave, se ve tu pistola.", C: "Al levantar la llave hacia la luz, la pistola asoma de tu chaqueta." },
            say: { A: "Hola. Tengo esta llave.", B: "Hola. Tengo esta llave, mira.", C: "Buenas noches. Traigo esta llave, por si te interesa." },
            reply: { A: "El hombre ve la pistola. Cierra la ventanita.", B: "El hombre ve la pistola, no la llave, y cierra la ventanita con fuerza.", C: "El hombre se fija en lo que no debía. La ventanita se cierra sin despedida." },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo. Limpias la cerradura.", B: "Sacas el cuchillo para quitar el óxido de la cerradura.", C: "Sacas el cuchillo para rascar el óxido de la cerradura, que no ve aceite desde hace años." },
            say: { A: "La cerradura está sucia. La limpio.", B: "La cerradura tiene mucho óxido. Lo quito y pruebo mi llave.", C: "Disculpa, solo estoy rescatando esta cerradura del olvido." },
            reply: { A: "El hombre abre. «¡Eh! ¿Qué haces?» Después ve la llave.", B: "La puerta se abre de golpe. «¡Eh! ¿Qué haces con mi cerradura?» Entonces ve la llave y se calla.", C: "«¿Rescatando?», dice el hombre, abriendo de golpe. Ve la llave en tu otra mano y se queda inmóvil." },
            mood: "worried", next: "abuelo",
          },
          corazon: {
            act: CORAZON,
            say: { A: "Hola. Perdón por la hora. Esta puerta es muy bonita.", B: "Hola, perdona la hora. Es la puerta más bonita del mercado.", C: "Perdona la hora. Hay puertas que piden ser llamadas, y esta es una." },
            reply: { A: "El hombre sonríe. «Gracias. Mi abuelo la pintó.» Abre.", B: "El hombre sonríe sin querer. «La pintó mi abuelo. Nadie se fija en ella.» Y abre.", C: "El hombre sonríe. «Mi abuelo decía lo mismo.» Y la puerta se abre, como si estuviera de acuerdo." },
            mood: "love", next: "abuelo",
          },
        },
      },
      abuelo: {
        who: "teo", mood: "surprised",
        line: {
          A: "El hombre mira la llave. «Me llamo Teo. Esta llave era de mi abuelo. La perdió hace veinte años.»",
          B: "El hombre toma la llave con cuidado. «Soy Teo. Esta llave era de mi abuelo. Desapareció hace veinte años.»",
          C: "El hombre da vueltas a la llave entre los dedos. «Me llamo Teo. Esta llave lleva veinte años desaparecida. Igual que la persona que la tenía.»",
        },
        options: [
          {
            id: "contar",
            say: { A: "Me la dio una señora mayor en la calle.", B: "Me la dio una señora mayor en la calle. No me dijo nada más.", C: "Una señora mayor me la puso en la mano esta noche, sin dar explicaciones." },
            reply: { A: "Teo se emociona. «¿Con pañuelo verde? Era la novia de mi abuelo.»", B: "Teo se queda quieto. «¿Llevaba un pañuelo verde? Entonces era Amparo… El gran amor de mi abuelo.»", C: "«¿Un pañuelo verde?» Teo sonríe con tristeza. «Amparo. El amor que mi abuelo nunca olvidó.»" },
            mood: "sad", next: "bar",
          },
          {
            id: "devolver",
            say: { A: "Entonces es tuya. Toma.", B: "Entonces es tuya. Te la devuelvo.", C: "Entonces ha vuelto a casa. Es tuya." },
            reply: { A: "Teo sonríe. «Gracias. Pasa, por favor. Te invito.»", B: "Teo aprieta la llave en el puño. «Gracias. De verdad. Pasa, por favor, te invito a algo.»", C: "Teo guarda la llave junto al corazón. «Gracias. Eso merece una visita completa. Pasa.»" },
            mood: "love", next: "bar",
          },
          {
            id: "dentro",
            say: { A: "¿Qué hay dentro? ¿Puedo ver?", B: "¿Y qué hay detrás de esta puerta? ¿Puedo verlo?", C: "Si no es indiscreción, ¿qué guarda una puerta con tanta historia?" },
            reply: { A: "Teo sonríe. «Un bar muy pequeño. Secreto. Ven.»", B: "Teo sonríe por primera vez. «Un bar. El bar más pequeño de la ciudad. Ven, te lo enseño.»", C: "«El bar más pequeño y más secreto de la ciudad», dice Teo, apartándose. «Bienvenido a La Trastienda.»" },
            mood: "smile", next: "bar",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Lo siento. ¿Tu abuelo era una buena persona?", B: "Lo siento mucho. ¿Cómo era tu abuelo?", C: "Debía de ser alguien especial, si su llave te hace esa cara." },
            reply: { A: "Teo sonríe. «Muy buena. Contaba historias. Ven, te enseño su bar.»", B: "Teo sonríe con los ojos brillantes. «Contaba las mejores historias del barrio. Ven, te enseño su bar.»", C: "Teo se ríe, con los ojos húmedos. «Era un mentiroso maravilloso. Ven, conoce su refugio.»" },
            mood: "love", next: "bar",
          },
        },
      },
      bar: {
        who: "teo", mood: "smile",
        line: {
          A: "Dentro hay un bar muy pequeño. Seis sillas, fotos viejas. «Esto es La Trastienda. ¿Qué tomas?»",
          B: "Dentro hay un bar diminuto: seis taburetes, fotos en blanco y negro y una radio antigua. «Esto es La Trastienda. ¿Qué te sirvo?»",
          C: "Un bar del tamaño de un armario: seis taburetes, fotos sepia y una radio que parece escuchar. «La Trastienda. ¿Qué te pongo?»",
        },
        options: [
          {
            id: "historia",
            say: { A: "Un jugo, por favor. Y una historia de tu abuelo.", B: "Un jugo, por favor. Y cuéntame alguna historia de tu abuelo.", C: "Lo que tú recomiendes, sin alcohol. Y una historia de tu abuelo, que eso no se sirve en cualquier sitio." },
            reply: { A: "Teo enciende una lámpara vieja. «Bueno. Escucha…»", B: "Teo enciende una lámpara de colores y se sienta. «Esta es buena. Una noche de 1970…»", C: "Teo enciende una lámpara antigua. «Esta te va a gustar. Empieza con una apuesta y acaba en boda.»" },
            mood: "love", end: "luz",
          },
          {
            id: "secreto",
            say: { A: "¿Por qué es secreto este bar?", B: "¿Por qué este bar está escondido? ¿Quién viene aquí?", C: "Un bar escondido detrás de una puerta sin cartel… ¿Contra qué se escondía tu abuelo?" },
            reply: { A: "Teo se ríe. «Mi abuelo no quería clientes. Solo amigos.»", B: "Teo se ríe. «Porque mi abuelo no quería clientes, solo amigos. Y tú, ahora, eres uno.»", C: "«Contra los clientes», dice Teo. «Solo admitía amigos. Desde esta noche, tú cuentas.»" },
            mood: "smile", end: "secreto",
          },
          {
            id: "mercado",
            say: { A: "¿Cómo era el mercado antes?", B: "¿Cómo era el mercado cuando tu abuelo era joven?", C: "Tengo curiosidad: ¿qué ha visto este mercado que ya no queda?" },
            reply: { A: "Teo se sienta. «Ah, era muy diferente. Te cuento.»", B: "Teo se sienta y señala una foto. «Mira: aquí había un cine. Y aquí bailaba todo el barrio.»", C: "Teo señala una foto. «Un cine, una pista de baile y muchísimos chismes. Te lo cuento todo.»" },
            mood: "smile", end: "historias",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Gracias por abrir. Este lugar es mágico.", B: "Gracias por dejarme entrar. Este sitio tiene algo mágico.", C: "Gracias. Hay lugares que te reciben como si te esperaran, y este es uno." },
            reply: { A: "Teo sonríe. Enciende todas las luces. «Hoy abre otra vez.»", B: "Teo se emociona y enciende todas las luces. «¿Sabes qué? Esta noche La Trastienda vuelve a abrir.»", C: "Teo enciende todas las luces, una a una. «Te esperaba sin saberlo. La Trastienda está abierta otra vez.»" },
            mood: "love", end: "luz",
          },
        },
      },
      calmar: {
        who: "teo", mood: "scared",
        line: {
          A: "La ventanita está cerrada. Teo está detrás. No dice nada.",
          B: "La ventanita sigue cerrada. Oyes a Teo respirar al otro lado.",
          C: "Silencio tras la puerta. Teo sigue ahí, al otro lado, decidiendo si confiar o llamar a alguien.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Ya lo guardé. Solo tengo una llave.", B: "Perdona, ya lo guardé. Solo traigo una llave, de verdad.", C: "Perdona. Lo he guardado. Lo único que vengo a enseñarte es una llave." },
            reply: { A: "Teo abre la ventanita. Ve la llave. Abre la puerta.", B: "La ventanita se abre un poco. Teo ve la llave y abre la puerta despacio.", C: "La ventanita se abre un centímetro, luego del todo. Teo ve la llave y se queda mudo." },
            mood: "surprised", next: "abuelo",
          },
          {
            id: "explicar",
            say: { A: "No pasa nada. Es para mi seguridad.", B: "No pasa nada, es solo por seguridad. El callejón está oscuro.", C: "En callejones así, uno nunca sabe. Es pura precaución." },
            reply: { A: "Teo llama a la policía.", B: "Desde dentro, oyes a Teo hablar por teléfono. «¿Policía? Hay alguien en mi puerta…»", C: "«Precaución también es esto», dice Teo, y le oyes llamar a la policía." },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdona el susto. Me voy.", C: "Perdón. Me voy antes de que esta puerta me olvide." },
            reply: { A: "Teo no contesta.", B: "Nadie contesta. La puerta sigue cerrada.", C: "Nadie contesta. La puerta vuelve a su sueño de décadas." },
            mood: "sad", end: "cerrada",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Perdón. Una señora me dio esta llave. Es para ti.", B: "Perdóname. Una señora me dio esta llave. Creo que es tuya.", C: "Perdóname. Alguien me confió esta llave y creo que el destino eras tú." },
            reply: { A: "Teo abre la puerta. Ve la llave. «¿Dónde la encontraste?»", B: "La puerta se abre. Teo mira la llave con los ojos muy abiertos. «¿Quién te la dio?»", C: "La puerta se abre despacio. Teo mira la llave, luego a ti. «El destino tiene buen gusto. ¿Quién te la dio?»" },
            mood: "love", next: "abuelo",
          },
        },
      },
    },
    ends: {
      luz: { text: { A: "Teo enciende las luces del bar. Te cuenta historias toda la noche.", B: "Las luces de La Trastienda se encienden después de veinte años. Teo te cuenta historias hasta muy tarde.", C: "Las luces de La Trastienda vuelven a encenderse tras veinte años. Teo cuenta, tú escuchas, y la noche se alarga." }, change: "luz", recap: "Devolviste la llave a Teo y La Trastienda volvió a abrir." },
      secreto: { text: { A: "Teo enciende la luz de la puerta. Ahora eres su amigo.", B: "Teo enciende la luz de la puerta. Desde esta noche, eres uno de los pocos amigos de La Trastienda.", C: "Teo enciende el farol de la puerta. Desde hoy formas parte de un club que nadie conoce." }, change: "luz", recap: "Descubriste el secreto de La Trastienda." },
      historias: { text: { A: "Te sientas con Teo. Él te cuenta del mercado de antes.", B: "Te sientas con Teo y escuchas historias del mercado de hace cincuenta años.", C: "Te sientas con Teo y viajas cincuenta años atrás, entre cines desaparecidos y bailes de barrio." }, change: "se-sienta", recap: "Escuchaste historias del viejo mercado con Teo." },
      cerrada: { text: { A: "La puerta sigue cerrada. Te vas con la llave.", B: "La puerta T-7 sigue cerrada. Te vas por el callejón con la llave en el bolsillo.", C: "La puerta T-7 sigue cerrada, guardando su secreto. La llave pesa más en tu bolsillo." }, change: "sigue", recap: "No entraste por la puerta T-7." },
      policia: { text: { A: "Llega la policía al callejón. Explicas lo de la llave.", B: "Llega la policía al callejón. Tienes que explicar lo de la llave, la señora y todo lo demás.", C: "Llega la policía. Explicar lo de una llave misteriosa y una anciana desconocida no suena muy convincente." }, change: "policia", recap: "Asustaste a Teo y llegó la policía al callejón." },
    },
    speak: {
      A1: "¿Qué lugar secreto o tranquilo te gusta?",
      A2: "¿Qué objeto de tu familia has guardado?",
      B1: "¿Qué historia de tus abuelos te gusta contar y por qué?",
      B2: "¿Qué lugar de tu ciudad te gustaría que no cambiara nunca, y por qué?",
      C1: "¿Por qué crees que algunos lugares nos parecen cargados de historia?",
      C2: "¿Qué papel juega el azar en los encuentros que han marcado tu vida?",
    },
  },

  // ───────────────────────────── RINCÓN 7 ─────────────────────────────
  {
    id: "mercado-cartel",
    kind: "rincon",
    district: "mercado",
    title: "SE BUSCA: Toto",
    verb: "MIRAR",
    goal: "Describir un dibujo, reaccionar con simpatía y ofrecer ayuda con una búsqueda.",
    cast: [
      {
        id: "nico", name: "Nico", role: "Hermano pequeño de Camila",
        age: "young", body: "m", build: "slim", height: 1.55,
        hair: "cap", hairColor: "#4a2c1a", skin: "#c48a5e",
        top: "hoodie", topColor: "#4caf50", bottom: "shorts", bottomColor: "#2d3e50",
        extras: ["backpack"], pose: "stand", props: ["poster", "wall"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "nico", mood: "worried",
        line: {
          A: "En una pared hay un cartel: «SE BUSCA: TOTO». Un chico lo pega. «Lo dibujé yo. ¿Está bien?»",
          B: "Un chico con gorra pega un cartel dibujado a mano: «SE BUSCA: TOTO». «Lo hice yo. ¿Se entiende que es un perro?»",
          C: "Un chico con gorra alisa un cartel hecho a mano: «SE BUSCA: TOTO». «Sé sincero: ¿parece un perro o un sofá?»",
        },
        options: [
          {
            id: "elogiar",
            say: { A: "¡Está muy bien! Las orejas son muy grandes.", B: "¡Está genial! Se ve perfecto el collar rojo y esas orejas.", C: "Es un retrato impecable. Esas orejas no dejan lugar a dudas." },
            reply: { A: "Nico sonríe. «¡Sí! Toto tiene orejas enormes.»", B: "Nico sonríe, orgulloso. «¡Gracias! Las orejas son lo más importante. Son como su huella digital.»", C: "Nico se infla de orgullo. «Exacto. Las orejas son su firma. Mi hermana dice que exagero.»" },
            mood: "smile", end: "dibujo",
          },
          {
            id: "foto",
            act: { A: "Sacas el celular.", B: "Sacas el celular y haces una foto al cartel.", C: "Sacas el celular y fotografías el cartel con cuidado." },
            say: { A: "Hago una foto. La mando a mis amigos.", B: "Le hago una foto y la comparto en mis redes, ¿te parece?", C: "Lo comparto en redes. Este perro va a ser viral antes de medianoche." },
            reply: { A: "Nico sonríe. «¡Gracias! Así más gente lo busca.»", B: "«¡Sí, por favor!», dice Nico. «Cuanta más gente lo vea, mejor.»", C: "«Viral», repite Nico, encantado. «Toto va a ser el perro más famoso del barrio.»" },
            mood: "smile", end: "foto",
          },
          {
            id: "patas",
            say: { A: "Es bonito. Pero… ¿Toto tiene seis patas?", B: "Me encanta, pero… ¿por qué Toto tiene seis patas?", C: "Una duda menor: ¿Toto es un perro o un insecto con mucho estilo?" },
            reply: { A: "Nico mira el dibujo. Se ríe. «¡Uy! Me equivoqué.»", B: "Nico mira el dibujo y se pone rojo. «¡Ay, no! Es que dibujé deprisa…»", C: "Nico mira el cartel y estalla de risa. «Con seis patas corre más. Quizá por eso se escapó.»" },
            mood: "surprised", end: "patas",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas tu lápiz.", B: "Sacas tu lápiz y te acercas al cartel.", C: "Sacas tu lápiz con aire de restaurador de museo." },
            say: { A: "¿Escribo el teléfono más grande?", B: "¿Quieres que escriba el teléfono más grande? Casi no se ve.", C: "El teléfono está tímido. ¿Lo agrandamos?" },
            reply: { A: "Nico dice que sí. «¡Gracias! Es el número de mi hermana.»", B: "«¡Sí, porfa!», dice Nico. «Es el número de mi hermana, Camila.»", C: "«Agrándalo», dice Nico. «Es el de mi hermana. Ella está buscándolo por el mercado.»" },
            mood: "smile", end: "dibujo",
          },
          corazon: {
            act: CORAZON,
            say: { A: "Eres un buen hermano. Toto va a volver.", B: "Eres un hermano genial. Seguro que Toto vuelve pronto.", C: "Un perro con un dibujante así de fiel siempre encuentra el camino a casa." },
            reply: { A: "Nico sonríe. «Toto duerme en mi cama. Lo extraño.»", B: "Nico sonríe, un poco triste. «Toto duerme conmigo cada noche. Sin él, la cama es enorme.»", C: "Nico baja la vista. «Duerme a mis pies. Esta noche voy a dejar la puerta abierta, por si acaso.»" },
            mood: "love", end: "abrazo",
          },
        },
      },
    },
    ends: {
      dibujo: { text: { A: "Nico pega otro cartel. Está muy contento.", B: "Nico pega otro cartel, más contento. Ya tiene ganas de dibujar diez más.", C: "Nico pega otro cartel con renovada confianza artística." }, change: "sonrie", recap: "Ayudaste a Nico con el cartel de Toto." },
      foto: { text: { A: "Mandas la foto. Nico te da las gracias.", B: "Compartes la foto del cartel. Nico te da las gracias con una sonrisa enorme.", C: "La foto del cartel ya circula por tus redes. Nico la mira como si fuera una exposición." }, change: "sonrie", recap: "Compartiste el cartel de Toto." },
      patas: { text: { A: "Nico borra dos patas. Se ríe mucho.", B: "Nico borra las patas que sobran, muerto de risa.", C: "Nico corrige la anatomía de Toto entre carcajadas." }, change: "sonrie", recap: "Le hiciste ver a Nico que Toto tenía seis patas." },
      abrazo: { text: { A: "Nico te da un abrazo rápido. Sigue con los carteles.", B: "Nico te da un abrazo rápido y sigue pegando carteles.", C: "Nico te da un abrazo de esos que no se planean y vuelve a sus carteles." }, change: "abraza", recap: "Animaste a Nico, el hermano de Camila." },
    },
    speak: {
      A1: "¿Qué te gusta dibujar?",
      A2: "¿Qué cartel o anuncio te llamó la atención en la calle?",
      B1: "¿Cómo ayudarías a buscar algo perdido en tu barrio?",
      B2: "¿Qué es más eficaz para encontrar algo perdido, las redes o los carteles?",
      C1: "¿Por qué un dibujo hecho a mano puede conmover más que una foto?",
      C2: "¿Qué nos lleva a implicarnos en el problema de un desconocido?",
    },
  },

  // ───────────────────────────── RINCÓN 8 ─────────────────────────────
  {
    id: "mercado-flores",
    kind: "rincon",
    district: "mercado",
    title: "El puesto de flores",
    verb: "COMPRAR",
    goal: "Elegir un regalo, describir a una persona y explicar para qué es.",
    cast: [
      {
        id: "mirta", name: "Doña Mirta", role: "Florista",
        age: "old", body: "f", build: "average", height: 1.55,
        hair: "short", hairColor: "#f2f2f2", skin: "#b07a52",
        top: "coat", topColor: "#2f5d3a", bottom: "skirt", bottomColor: "#3a2f2a",
        extras: ["flowers"], pose: "stand", props: ["flower-stall", "buckets"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "mirta", mood: "smile",
        line: {
          A: "Una señora prepara ramos de flores. «Buenas noches. ¿Flores? ¿Para quién son?»",
          B: "Una señora de pelo blanco arregla ramos entre cubos de flores. «Buenas noches. Antes de nada: ¿para quién son? Eso lo cambia todo.»",
          C: "Una señora de pelo blanco te mira por encima de un ramo. «Yo no vendo flores, vendo mensajes. Así que dime: ¿para quién?»",
        },
        options: [
          {
            id: "madre",
            say: { A: "Para mi madre. Le gustan los colores alegres.", B: "Son para mi madre. Le encantan los colores alegres.", C: "Para mi madre. Llevo semanas sin visitarla y necesito un buen abogado." },
            reply: { A: "Doña Mirta sonríe. «Girasoles. Son alegres, como ella.»", B: "Doña Mirta toma unos girasoles. «Entonces, girasoles. Siempre miran hacia la luz, como las madres.»", C: "«Girasoles», dice Doña Mirta. «Ningún abogado defiende mejor. Y añado unas margaritas de fianza.»" },
            mood: "love", end: "ramo",
          },
          {
            id: "cita",
            say: { A: "Para una persona especial. Tengo una cita.", B: "Son para alguien especial. Mañana tengo una cita y estoy nervioso.", C: "Para alguien que todavía no sabe que es especial. Mañana tenemos cita." },
            reply: { A: "Doña Mirta se ríe. «¡Ay! Rosas no. Mejor algo simple.»", B: "Doña Mirta se ríe. «Rosas rojas, no, que asustan. Mejor unas fresias: dicen mucho sin exagerar.»", C: "«Nada de rosas rojas, que es declarar la guerra», dice. «Fresias. Sugieren sin comprometer.»" },
            mood: "smile", end: "ramo",
          },
          {
            id: "mi",
            say: { A: "Son para mí. Hoy quiero flores.", B: "Para mí. Hoy me apetece regalarme algo bonito.", C: "Para mí. Alguien tiene que mimarme, y nadie se ofreció." },
            reply: { A: "Doña Mirta aplaude. «¡Muy bien! Para ti, las más bonitas.»", B: "«¡Eso me encanta!», dice Doña Mirta. «La gente que se regala flores vive más. Lo digo yo.»", C: "«La mejor clienta del mundo es una misma», dice Doña Mirta. «Bueno, uno mismo. Te entiendo.»" },
            mood: "love", end: "regalo",
          },
        ],
        items: {
          libro: {
            act: { A: "Abres tu libro.", B: "Abres tu libro y le preguntas por una flor pequeña.", C: "Abres tu libro y le pides una flor para guardar entre sus páginas." },
            say: { A: "¿Me da una flor pequeña? La guardo en mi libro.", B: "¿Me vende una flor pequeña? Quiero secarla dentro de mi libro.", C: "¿Tiene una flor que quiera vivir para siempre entre dos capítulos?" },
            reply: { A: "Doña Mirta te da una violeta. «Toma. Es gratis.»", B: "Doña Mirta elige una violeta. «Esta. Las violetas se secan muy bien. Y te la regalo.»", C: "«Una violeta. Son discretas, como los buenos marcapáginas», dice. «Invita la casa.»" },
            mood: "smile", end: "regalo",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Sacas el cuchillo para cortar el tallo.", C: "Sacas el cuchillo, ya que su tijera parece haber desaparecido." },
            say: { A: "¿Corto los tallos?", B: "¿Le ayudo a cortar los tallos? No encuentra las tijeras.", C: "Veo que las tijeras se han ido de vacaciones. ¿Le echo una mano?" },
            reply: { A: "Doña Mirta se asusta un poco. «Eh… bueno. Con cuidado.»", B: "Doña Mirta da un paso atrás, pero luego acepta. «Bueno… En diagonal, por favor. Y despacio.»", C: "Doña Mirta te mira con desconfianza. «En diagonal. Y si te cortas, no te hago descuento.»" },
            mood: "worried", end: "ramo",
          },
          corazon: {
            act: CORAZON,
            say: { A: "Sus flores son muy bonitas. Como usted.", B: "Sus flores son preciosas. Se nota que las cuida con cariño.", C: "Sus flores tienen algo que no tienen las de las tiendas: alguien que las quiere." },
            reply: { A: "Doña Mirta se ríe. «¡Ay, qué amable!» Te da una rosa. «Para ti.»", B: "Doña Mirta se sonroja. «Mi marido me decía eso.» Te pone una flor en la mano. «Para ti, sin pagar.»", C: "Doña Mirta se emociona. «Mi marido me lo decía cada noche.» Te prende una flor en la ropa. «No se paga.»" },
            mood: "love", end: "regalo",
          },
        },
      },
    },
    ends: {
      ramo: { text: { A: "Doña Mirta te da un ramo muy bonito. Te dice: «Suerte».", B: "Te vas con un ramo precioso. Doña Mirta te desea suerte con un guiño.", C: "Te vas con un ramo cuidadosamente elegido y la bendición de Doña Mirta." }, change: "sonrie", recap: "Compraste un ramo en el puesto de Doña Mirta." },
      regalo: { text: { A: "Doña Mirta te regala una flor. Estás contento.", B: "Doña Mirta te regala una flor. La llevas el resto de la noche.", C: "Doña Mirta te regala una flor. Por alguna razón, la noche parece más amable." }, change: "abraza", recap: "Doña Mirta te regaló una flor." },
    },
    speak: {
      A1: "¿Qué flores te gustan?",
      A2: "¿A quién le regalaste algo la última vez?",
      B1: "¿Qué regalo te hizo especial ilusión y por qué?",
      B2: "¿Qué crees que es mejor regalar, algo útil o algo bonito?",
      C1: "¿Cómo eliges un regalo para alguien que no conoces bien?",
      C2: "¿Qué dicen los regalos sobre quien los hace más que sobre quien los recibe?",
    },
  },

  // ───────────────────────────── RINCÓN 9 ─────────────────────────────
  {
    id: "mercado-libros",
    kind: "rincon",
    district: "mercado",
    title: "Libros de segunda mano",
    verb: "LEER",
    goal: "Pedir y dar recomendaciones, hablar de gustos de lectura y proponer un intercambio.",
    cast: [
      {
        id: "elias", name: "Elías", role: "Librero de segunda mano",
        age: "old", body: "m", build: "slim", height: 1.8,
        hair: "short", hairColor: "#9a9a9a", skin: "#f3d6bd",
        top: "sweater", topColor: "#6b5b3e", bottom: "pants", bottomColor: "#2b2b2b",
        extras: ["glasses", "hat"], pose: "read", props: ["book-stall", "lamp"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "elias", mood: "neutral",
        line: {
          A: "Un señor lee bajo una lámpara, entre montañas de libros. «Hola. Todos los libros tienen historia. ¿Qué buscas?»",
          B: "Un señor alto lee bajo una lámpara, rodeado de pilas de libros viejos. «Buenas noches. Aquí cada libro ya tuvo otra vida. ¿Qué te gusta leer?»",
          C: "Un señor alto levanta apenas la vista de su libro. «Bienvenido al refugio de los libros abandonados. ¿Vienes a adoptar o solo a mirar?»",
        },
        options: [
          {
            id: "recomendar",
            say: { A: "¿Qué libro me recomienda?", B: "¿Qué me recomienda? Me gustan las historias con misterio.", C: "Recomiéndeme algo que no pueda soltar. Es una prueba." },
            reply: { A: "Elías te da un libro azul. «Este. Una historia de detectives. Muy buena.»", B: "Elías saca un libro azul sin dudar. «Este. Un detective, un tren y nadie dice la verdad. Te va a encantar.»", C: "«Acepto el reto», dice Elías, y te da un libro azul. «Si lo sueltas antes de la página veinte, te devuelvo el dinero.»" },
            mood: "smile", end: "compra",
          },
          {
            id: "notas",
            say: { A: "Este libro tiene notas a mano. ¿De quién son?", B: "Este libro tiene notas escritas a mano. ¿Sabe de quién son?", C: "Alguien dejó notas en los márgenes de este. ¿Los libros vienen con fantasmas incluidos?" },
            reply: { A: "Elías sonríe. «No sé. Por eso me gustan los libros viejos.»", B: "«Ni idea», dice Elías. «Eso es lo mejor: lees el libro y también a la persona que lo leyó antes.»", C: "«Siempre», dice Elías. «Un libro usado es una conversación entre desconocidos. Llévatelo.»" },
            mood: "smile", end: "compra",
          },
          {
            id: "mirar",
            say: { A: "Solo miro, gracias.", B: "Solo estoy mirando, gracias. Tiene libros muy interesantes.", C: "Solo vengo a curiosear, que es la forma más antigua de leer." },
            reply: { A: "Elías asiente. «Mira tranquilo.»", B: "«Mira lo que quieras», dice Elías, volviendo a su libro. «Los libros no tienen prisa.»", C: "«La más honrada, también», dice Elías, sin levantar la vista." },
            mood: "neutral", end: "mirar",
          },
        ],
        items: {
          libro: {
            act: { A: "Le das tu libro.", B: "Le ofreces tu propio libro.", C: "Le tiendes tu libro como quien ofrece un rehén en un intercambio." },
            say: { A: "¿Cambiamos? Mi libro por uno suyo.", B: "¿Hacemos un cambio? Le dejo mi libro y me llevo uno suyo.", C: "Propongo un trueque: mi libro por uno suyo. Usted elige cuál me merezco." },
            reply: { A: "Elías mira tu libro. «¡Me gusta! Elige uno.»", B: "Elías hojea tu libro con interés. «Buen libro. Trato hecho: elige el que quieras.»", C: "Elías examina tu libro con respeto. «Excelente gusto. A cambio, este: es mi favorito. No se lo doy a cualquiera.»" },
            mood: "love", end: "cambio",
          },
          lapiz: {
            act: { A: "Sacas tu lápiz.", B: "Sacas tu lápiz y tomas un libro de poemas.", C: "Sacas tu lápiz y abres un libro por la primera página, que está en blanco." },
            say: { A: "¿Puedo escribir una frase para el próximo lector?", B: "¿Puedo dejar una frase para la próxima persona que lo lea?", C: "¿Me deja dejar una dedicatoria anónima para el siguiente lector?" },
            reply: { A: "Elías sonríe. «Sí. Me gusta esa idea.»", B: "«Claro que sí», dice Elías, encantado. «Así el libro tiene una historia más.»", C: "«Por supuesto», dice Elías. «Usted acaba de entrar en la historia del libro.»" },
            mood: "smile", end: "cambio",
          },
          corazon: {
            act: CORAZON,
            say: { A: "¿Cuál es su libro favorito?", B: "Me encantaría saber cuál es su libro favorito. Seguro que tiene historia.", C: "Me intriga: entre tantos libros, ¿cuál es el que nunca vendería?" },
            reply: { A: "Elías sonríe. «Este. Era de mi esposa. Tiene sus notas.»", B: "Elías saca un libro gastado. «Este. Mi mujer escribía notas en los márgenes. Lo leo cada año.»", C: "Elías saca un libro gastado de debajo del mostrador. «Este. Las notas son de mi mujer. Es mi forma de hablar con ella.»" },
            mood: "love", end: "confianza",
          },
        },
      },
    },
    ends: {
      compra: { text: { A: "Compras el libro. Elías dice: «Buena lectura».", B: "Te llevas el libro. Elías te pide que vuelvas a contarle qué te pareció.", C: "Te llevas el libro y la promesa de volver a comentarlo. Elías ya parece esperarte." }, change: "sonrie", recap: "Compraste un libro de segunda mano a Elías." },
      cambio: { text: { A: "Cambias tu libro. Elías está muy contento.", B: "Elías y tú intercambian libros. Los dos se van con una historia nueva.", C: "El intercambio se cierra con un apretón de manos. Elías coloca tu libro en un sitio de honor." }, change: "sonrie", recap: "Intercambiaste un libro con Elías." },
      mirar: { text: { A: "Miras los libros un rato. Después te vas.", B: "Curioseas un rato entre las pilas. Elías sigue leyendo, tranquilo.", C: "Pasas un rato entre lomos gastados. Elías no te molesta: entiende de esas cosas." }, change: "sigue", recap: "Miraste libros en el puesto de Elías." },
      confianza: { text: { A: "Elías te enseña el libro de su esposa. Habla mucho de ella.", B: "Elías te enseña algunas notas de su mujer. Hablan un buen rato.", C: "Elías te lee algunas notas de su mujer. Es una conversación que no esperabas tener esta noche." }, change: "abraza", recap: "Elías te enseñó el libro favorito de su esposa." },
    },
    speak: {
      A1: "¿Qué libros te gustan?",
      A2: "¿Qué libro leíste el año pasado?",
      B1: "¿Qué libro recomendarías a un amigo y por qué?",
      B2: "¿Qué prefieres, libros nuevos o de segunda mano, y por qué?",
      C1: "¿Qué diferencia hay entre leer en papel y leer en pantalla?",
      C2: "¿Qué huella crees que dejan en ti los libros que ya no recuerdas?",
    },
  },

  // ───────────────────────────── RINCÓN 10 ─────────────────────────────
  {
    id: "mercado-adivina",
    kind: "rincon",
    district: "mercado",
    title: "Madame Zulema",
    verb: "PREGUNTAR",
    goal: "Hablar del futuro, hacer hipótesis y reaccionar con humor ante predicciones.",
    cast: [
      {
        id: "zulema", name: "Madame Zulema", role: "Adivina (y ex profesora de matemáticas)",
        age: "adult", body: "f", build: "heavy", height: 1.7,
        hair: "braids", hairColor: "#111111", skin: "#7a4a32",
        top: "dress", topColor: "#4b1f6e", bottom: "skirt", bottomColor: "#4b1f6e",
        extras: ["earrings", "scarf"], pose: "sit", props: ["table", "cards", "lamp"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "zulema", mood: "smile",
        line: {
          A: "Una mujer con pañuelo está sentada en una mesa con cartas. «Ven. ¿Quieres saber tu futuro?»",
          B: "Detrás de una mesa con cartas y una lámpara, una mujer con pañuelo te llama. «Acércate. Tu futuro está escrito… y yo sé leer.»",
          C: "Una mujer con pañuelo y trenzas baraja cartas con una precisión sospechosa. «El futuro es una ecuación. Siéntate y la resolvemos.»",
        },
        options: [
          {
            id: "si",
            say: { A: "Sí. ¿Qué va a pasar en mi futuro?", B: "Bueno, a ver. ¿Qué me espera?", C: "Adelante. Aunque le aviso: soy de letras." },
            reply: { A: "Madame Zulema mira las cartas. «Mmm… Interesante.»", B: "Madame Zulema mira las cartas y hace cálculos en un papel. «Mmm… muy interesante.»", C: "«De letras», repite, decepcionada. «Bueno, el futuro no discrimina. Veamos.»" },
            mood: "neutral", next: "futuro",
          },
          {
            id: "esceptico",
            say: { A: "No creo en eso. Perdón.", B: "La verdad, no creo en estas cosas. No se ofenda.", C: "Con todo respeto, mi escepticismo es más fuerte que su baraja." },
            reply: { A: "Ella se ríe. «Yo tampoco. Antes era profesora de matemáticas.»", B: "Madame Zulema se ríe. «Yo tampoco creo mucho. Fui profesora de matemáticas treinta años.»", C: "«El escepticismo me encanta», dice. «Yo fui profesora de matemáticas. Aquí todo es estadística.»" },
            mood: "smile", next: "futuro",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Le das tu lápiz.", B: "Le prestas tu lápiz para sus cálculos.", C: "Le ofreces tu lápiz, viendo que el suyo no tiene punta." },
            say: { A: "¿Necesita un lápiz?", B: "¿Quiere mi lápiz para hacer los cálculos?", C: "Para una predicción exacta, mejor un lápiz con punta." },
            reply: { A: "Madame Zulema escribe números. «Gracias. Bien, tu futuro…»", B: "Madame Zulema llena un papel de números. «Gracias. Veamos: probabilidad de éxito, alta…»", C: "Madame Zulema escribe una ecuación entera. «Gracias. El futuro sin cálculo es pura superstición.»" },
            mood: "smile", next: "futuro",
          },
          corazon: {
            act: CORAZON,
            say: { A: "Usted es muy interesante. ¿Quién es en realidad?", B: "Me cae muy bien. ¿Quién es usted de verdad?", C: "Algo me dice que su historia es mejor que cualquier predicción." },
            reply: { A: "Ella se quita el pañuelo. «Soy Marta. Fui profesora. Esto es más divertido.»", B: "Se quita el pañuelo y se ríe. «Me llamo Marta. Fui profesora de matemáticas. Esto paga peor, pero me divierte más.»", C: "Se quita el pañuelo con un suspiro teatral. «Marta. Treinta años de ecuaciones. Al menos ahora me escuchan.»" },
            mood: "love", end: "profe",
          },
        },
      },
      futuro: {
        who: "zulema", mood: "smile",
        line: {
          A: "Madame Zulema pone tres cartas en la mesa. «Bien. ¿Qué quieres saber?»",
          B: "Madame Zulema pone tres cartas en la mesa. «Las cartas están listas. Pregunta lo que quieras.»",
          C: "Madame Zulema dispone tres cartas con solemnidad. «Tienes derecho a una pregunta. Elígela bien.»",
        },
        options: [
          {
            id: "amor",
            say: { A: "¿Voy a encontrar el amor?", B: "¿Encontraré el amor pronto?", C: "¿El amor está en mi futuro o tengo que ir a buscarlo?" },
            reply: { A: "«Sí. Si sales más de casa. Probabilidad: ochenta por ciento.»", B: "«Lo encontrarás», dice. «Si sales más de casa, claro. Probabilidad: ochenta y siete por ciento.»", C: "«Estará donde vayas», dice. «Pero si te quedas en el sofá, la probabilidad tiende a cero.»" },
            mood: "smile", end: "prediccion",
          },
          {
            id: "dinero",
            say: { A: "¿Voy a tener mucho dinero?", B: "¿Seré rico algún día?", C: "¿Ve fortuna en mi horizonte o solo deudas elegantes?" },
            reply: { A: "Ella se ríe. «Vas a tener dinero… si ahorras. Es matemática.»", B: "«Serás rico si gastas menos de lo que ganas», dice. «Eso no lo dicen las cartas, lo dice la aritmética.»", C: "«Veo interés compuesto», dice. «Si empiezas a ahorrar hoy, claro. El resto es fantasía.»" },
            mood: "smile", end: "prediccion",
          },
          {
            id: "verdad",
            say: { A: "¿Usted de verdad adivina el futuro?", B: "Perdone, pero ¿usted de verdad puede ver el futuro?", C: "Entre nosotros: ¿cuánto de esto es magia y cuánto es estadística?" },
            reply: { A: "Ella baja la voz. «No. Fui profesora de matemáticas. Pero acierto mucho.»", B: "Ella baja la voz. «No. Fui profesora de matemáticas. Pero con un poco de lógica, acierto casi siempre.»", C: "«Noventa por ciento estadística, diez por ciento teatro», susurra. «Como en la enseñanza.»" },
            mood: "smile", end: "profe",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Y usted, ¿qué futuro quiere?", B: "¿Y a usted qué le gustaría que le pasara en el futuro?", C: "¿Y usted? ¿Qué predicción le gustaría que se cumpliera?" },
            reply: { A: "Ella sonríe. «Nadie me pregunta eso. Quiero viajar. Ver el mar.»", B: "Madame Zulema se queda callada. «Nadie me lo pregunta nunca… Me gustaría ver el mar. Nunca lo he visto.»", C: "Se queda en silencio. «Llevo años prediciendo el futuro de otros y nunca el mío. Quiero ver el mar.»" },
            mood: "love", end: "profe",
          },
        },
      },
    },
    ends: {
      prediccion: { text: { A: "Madame Zulema te da un papel con números. Es tu futuro.", B: "Madame Zulema te entrega un papel con tu «futuro»: una ecuación y un consejo.", C: "Te vas con tu futuro escrito en una ecuación. Bastante más claro que un horóscopo." }, change: "sonrie", recap: "Madame Zulema te leyó el futuro con matemáticas." },
      profe: { text: { A: "Madame Zulema te cuenta su vida. Se ríen mucho.", B: "Madame Zulema te cuenta cómo pasó de las aulas a las cartas. Se ríen juntos.", C: "Madame Zulema te cuenta su vida de profesora. Resulta que el aula también era un poco de teatro." }, change: "sonrie", recap: "Descubriste que Madame Zulema era profesora de matemáticas." },
    },
    speak: {
      A1: "¿Qué quieres hacer el año que viene?",
      A2: "¿Qué vas a hacer este fin de semana?",
      B1: "¿Qué crees que estarás haciendo dentro de cinco años?",
      B2: "¿Qué cambiarías en tu vida si supieras tu futuro?",
      C1: "¿Por qué crees que tanta gente consulta horóscopos aunque no crea en ellos?",
      C2: "¿En qué medida crees que nuestras expectativas condicionan lo que nos ocurre?",
    },
  },

  // ───────────────────────────── RINCÓN 11 ─────────────────────────────
  {
    id: "mercado-celular",
    kind: "rincon",
    district: "mercado",
    title: "¿Es tuyo este celular?",
    verb: "HABLAR",
    event: "celular",
    goal: "Responder con honestidad, proponer qué hacer con un objeto perdido y colaborar con un desconocido.",
    cast: [
      {
        id: "hugo", name: "Hugo", role: "Encontró un celular",
        age: "adult", body: "m", build: "average", height: 1.9,
        hair: "afro", hairColor: "#1a1a1a", skin: "#4a2e22",
        top: "jacket", topColor: "#c76b1f", bottom: "pants", bottomColor: "#556b2f",
        extras: ["phone"], pose: "wave", props: ["phone"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "hugo", mood: "neutral",
        line: {
          A: "Un hombre alto levanta un celular. «Perdona, ¿es tuyo este celular? Estaba en el suelo.»",
          B: "Un hombre muy alto te enseña un celular con la pantalla iluminada. «Perdona, ¿es tuyo? Lo encontré en el suelo, junto a las flores.»",
          C: "Un hombre altísimo sostiene un celular como si fuera una prueba en un juicio. «Pregunta rápida: ¿es tuyo? Lleva diez minutos sonando.»",
        },
        options: [
          {
            id: "no",
            say: { A: "No, no es mío. ¿Lo llevamos a información?", B: "No, no es mío. ¿Por qué no lo llevamos a la oficina del mercado?", C: "No es mío, lamentablemente. Lo sensato sería dejarlo en la oficina del mercado." },
            reply: { A: "Hugo asiente. «Buena idea. Vamos juntos.»", B: "«Buena idea», dice Hugo. «Allí seguro que alguien lo busca.»", C: "«Sensato y aburrido, como debe ser», dice Hugo. «Vamos.»" },
            mood: "smile", end: "oficina",
          },
          {
            id: "esperar",
            say: { A: "No es mío. Pero si suena, contestamos.", B: "No es mío, pero si vuelve a sonar, podemos contestar y quedar con el dueño.", C: "No es mío. Propongo esperar a que suene: el dueño vendrá solo." },
            reply: { A: "El celular suena. Hugo contesta. «¡Hola! Tengo tu celular.»", B: "En ese momento, el celular suena. Hugo contesta. «¡Hola! Sí, lo tengo yo. Estamos junto a las flores.»", C: "Como si lo hubiera oído, el celular suena. Hugo contesta. «Buenas noches, su celular está en buenas manos.»" },
            mood: "surprised", end: "llamada",
          },
          {
            id: "mentir",
            say: { A: "Sí, es mío. Gracias.", B: "¡Ah, sí, es mío! Muchas gracias.", C: "¡Mi celular! Qué alivio. Gracias, de verdad." },
            reply: { A: "Hugo mira la pantalla. «¿Sí? Hay una foto de una abuela con un loro.»", B: "Hugo mira la pantalla. «¿Ah, sí? ¿Y quién es la señora con el loro de la foto?»", C: "Hugo levanta una ceja. «Curioso. En la pantalla sale una abuela abrazando a un loro. ¿Familia?»" },
            mood: "angry", end: "mentira",
          },
        ],
        items: {
          gas: {
            act: { A: "Él se acerca mucho. Sacas el gas pimienta.", B: "Se acerca muy rápido y sacas el gas pimienta.", C: "Se te acerca demasiado deprisa y, por instinto, sacas el gas pimienta." },
            say: { A: "¡Para! No te acerques.", B: "¡Para! No te acerques tanto.", C: "Un poco de distancia, por favor." },
            reply: { A: "Hugo deja el celular en el suelo y corre.", B: "Hugo deja el celular en un puesto y se aleja corriendo.", C: "Hugo deja el celular sobre un puesto, con mucho cuidado, y se va corriendo." },
            mood: "scared", end: "corre",
          },
          corazon: {
            act: CORAZON,
            say: { A: "No es mío. Eres muy buena persona por preguntar.", B: "No es mío, pero me parece genial que intentes devolverlo.", C: "No es mío, pero da gusto encontrarse con alguien tan honrado." },
            reply: { A: "Hugo sonríe. «Una vez se me perdió el celular. Alguien me lo devolvió.»", B: "Hugo sonríe. «Una vez alguien me devolvió la cartera con todo dentro. Desde entonces, devuelvo todo.»", C: "Hugo se ríe. «Es una deuda antigua. Alguien me devolvió la cartera hace años. Sigo pagando.»" },
            mood: "love", end: "oficina",
          },
        },
      },
    },
    ends: {
      oficina: { text: { A: "Llevas el celular a la oficina con Hugo.", B: "Hugo y tú dejan el celular en la oficina del mercado. Él te da la mano.", C: "Dejan el celular en la oficina del mercado. Hugo se despide como quien ha cumplido una misión." }, change: "se-va", recap: "Llevaste un celular perdido a la oficina con Hugo." },
      llamada: { text: { A: "La dueña viene. Está muy contenta.", B: "La dueña del celular llega corriendo y les da las gracias mil veces.", C: "La dueña aparece a los dos minutos, sin aliento, con la gratitud de quien recupera media vida." }, change: "llama", recap: "Ayudaste a Hugo a devolver un celular perdido." },
      mentira: { text: { A: "Hugo no te da el celular. Está enfadado.", B: "Hugo se guarda el celular y se va, molesto, a buscar a la dueña.", C: "Hugo se guarda el celular con una mirada que no necesita palabras y se va." }, change: "enojado", recap: "Dijiste que un celular ajeno era tuyo." },
      corre: { text: { A: "Hugo corre. El celular está en el puesto.", B: "Hugo se va corriendo. El celular se queda sonando en un puesto.", C: "Hugo desaparece. El celular sigue sonando, ahora sin nadie que lo defienda." }, change: "corre", recap: "Asustaste a Hugo y salió corriendo." },
    },
    speak: {
      A1: "¿Dónde pones tu celular en casa?",
      A2: "¿Qué hiciste la última vez que encontraste algo en la calle?",
      B1: "¿Qué harías si encontraras una cartera con dinero?",
      B2: "¿Qué es peor, perder el celular o perder la cartera, y por qué?",
      C1: "¿Dónde pones el límite entre la honestidad y la conveniencia?",
      C2: "¿Qué nos dice de una sociedad la frecuencia con que se devuelven los objetos perdidos?",
    },
  },
];
