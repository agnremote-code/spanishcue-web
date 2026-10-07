// Noche abierta · calle · Mercado nocturno: humo de parrilla, luces de colores, música y gente que se busca entre los puestos.
const CORAZON = { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." };

const encounters = [
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
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "camila", mood: "scared",
        line: {
          A: "Una chica busca bajo los puestos con una correa vacía. Ve tu cuchillo y da un paso atrás. «¡Eh! ¿Qué haces con ese cuchillo? No te acerques así.»",
          B: "Una chica con sudadera amarilla se agacha bajo los puestos con una correa vacía. Al levantarse ve tu cuchillo y retrocede hasta un cubo de flores. «¿Qué haces con eso? ¿Estás loco? No te acerques.»",
          C: "Una chica recorre los puestos agachada, correa vacía en mano. Se incorpora, ve el cuchillo y retrocede dos pasos, calculando la distancia a la salida. «Dime que eso tiene una explicación, porque desde aquí parece una amenaza.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón, perdón. Lo guardo. ¿Buscas algo?", B: "Perdona, lo guardo ahora mismo. ¿Estás buscando algo?", C: "Perdona, lo guardo. Es un cuchillo de trabajo, no de problemas. ¿Qué buscas con esa correa?" },
            reply: { A: "Camila no se acerca. «A mi perro. Se llama Toto. ¿Lo viste?»", B: "Camila sigue a distancia. «A mi perro, Toto. Se me escapó… ¿Lo has visto? Y no saques eso otra vez.»", C: "Camila no cede terreno. «A mi perro. Toto. Y te aviso: si vuelve a salir ese cuchillo, grito.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "correa",
            say: { A: "Es para cortar cuerda. Tu correa está vacía. ¿Te hago una?", B: "Es para cortar cuerda, nada más. Veo que tu correa está vacía… ¿Te preparo otra?", C: "Es para cortar cuerda de los toldos, no personas. Veo una correa vacía: ¿necesitas una de repuesto?" },
            reply: { A: "Camila mira la correa, después el cuchillo. «Mi perro se escapó. Pero guarda eso, por favor.»", B: "Camila mira la correa y luego el cuchillo. «Se me escapó el perro… Pero primero guarda eso. Hablamos después.»", C: "Camila alterna la mirada entre la correa y la hoja. «Mi perro se escapó. Y tu oferta mejora mucho sin el cuchillo en la mano.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "broma",
            say: { A: "Tranquila. Es solo un cuchillo. No pasa nada.", B: "Tranquila, mujer, es solo un cuchillo. No pasa nada.", C: "Relájate, es solo un cuchillo. En este mercado hay cien, uno por cada parrilla." },
            reply: { A: "Camila grita: «¡Socorro! ¡Tiene un cuchillo!» La gente mira.", B: "Camila grita con todo el pulmón: «¡Socorro! ¡Tiene un cuchillo!» Medio mercado se da la vuelta.", C: "«¿Solo?», dice Camila, y grita: «¡Socorro! ¡Un cuchillo!» El mercado entero se gira hacia ti." },
            mood: "terror", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-calma": {
        who: "camila", mood: "worried",
        line: {
          A: "Camila respira. Todavía mira tu bolsillo. «Bueno. Toto es pequeño y marrón. Se escapó con la música.»",
          B: "Camila respira hondo sin dejar de mirar el bolsillo donde guardaste el cuchillo. «Bueno… Toto es pequeño, marrón, con collar rojo. Se asustó con la música y salió corriendo.»",
          C: "Camila recupera el aliento, aunque sus ojos siguen vigilando tu bolsillo. «Está bien. Toto: pequeño, marrón, collar rojo. La música lo espantó. Igual que tú a mí, hace un minuto.»",
        },
        options: [
          {
            id: "buscar",
            say: { A: "Vamos a buscarlo juntos. Yo voy delante, sin cuchillo.", B: "Vamos a buscarlo juntos. Yo voy delante, con las manos vacías, ¿de acuerdo?", C: "Lo buscamos juntos. Yo camino delante, manos a la vista, para que no haya más sustos." },
            reply: { A: "Camila dice que sí. «Vamos al río. Pero tú delante.»", B: "Camila asiente despacio. «Vamos al río. Tú delante, que yo te veo mejor así.»", C: "«Delante y a tres pasos», dice Camila. «Al río. Toto busca agua cuando tiene miedo.»" },
            mood: "neutral", end: "cuchillo-rio",
          },
          {
            id: "cuerda",
            act: { A: "Sacas el cuchillo otra vez y cortas una cuerda.", B: "Vuelves a sacar el cuchillo y cortas un trozo de cuerda de un toldo.", C: "Sacas de nuevo el cuchillo y cortas un metro de cuerda de un toldo." },
            say: { A: "Mira: una correa nueva para Toto.", B: "Mira, una correa de emergencia para cuando aparezca.", C: "Una correa provisional, para cuando Toto decida volver." },
            reply: { A: "Camila grita y se va corriendo. «¡Te dije que no sacaras eso!»", B: "Camila grita y sale corriendo entre los puestos. «¡Te dije que no lo sacaras más!»", C: "Camila no espera a ver la cuerda. Grita «¡te lo advertí!» y desaparece entre los puestos." },
            mood: "terror", end: "cuchillo-grito",
          },
          {
            id: "disculpa",
            say: { A: "Perdón otra vez. ¿Dónde lo viste por última vez?", B: "Perdona otra vez por el susto. ¿Dónde lo viste por última vez?", C: "Siento de verdad el susto. Empecemos otra vez: ¿dónde lo viste por última vez?" },
            reply: { A: "Camila señala el humo. «En el puesto de empanadas. Hace veinte minutos.»", B: "Camila señala el humo de la parrilla. «Junto al puesto de empanadas, hace veinte minutos.»", C: "Camila señala el humo. «En el puesto de empanadas, hace veinte minutos. Y gracias por guardar eso.»" },
            mood: "worried", next: "pista",
          },
        ],
      },
      "pistola-inicio": {
        who: "camila", mood: "terror",
        line: {
          A: "Una chica busca bajo los puestos con una correa vacía. Ve tu pistola. Levanta las manos. «¡No, por favor! Solo busco a mi perro.»",
          B: "Una chica con sudadera amarilla se agacha bajo un puesto, con una correa vacía. Al levantarse ve tu pistola y alza las manos, correa incluida. «No, por favor. No tengo nada. Solo busco a mi perro.»",
          C: "Una chica se incorpora de debajo de un puesto, correa vacía en mano, y ve la pistola antes que a ti. Levanta las manos muy despacio. «No quiero problemas. Busco a mi perro, nada más. ¿Por qué llevas un arma?»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Baja las manos, por favor. No es para ti.", B: "Baja las manos, por favor. No va contigo, te lo prometo.", C: "Baja las manos, por favor. No es para ti ni para nadie de este mercado." },
            reply: { A: "Camila baja las manos un poco. «¿Entonces para quién es?»", B: "Camila baja las manos a medias. «¿Y entonces para quién es? Porque aquí solo hay empanadas y un perro perdido.»", C: "Camila baja las manos a medias. «Tranquiliza mucho saber que no es para mí. ¿Para quién es, entonces?»" },
            mood: "scared", next: "pistola-miedo",
          },
          {
            id: "guardar",
            act: { A: "Guardas la pistola dentro de la chaqueta.", B: "Guardas la pistola dentro de la chaqueta y enseñas las manos.", C: "Guardas la pistola en la chaqueta y muestras las palmas." },
            say: { A: "Perdón. Ya está. ¿Cómo se llama tu perro?", B: "Perdona, ya está guardada. ¿Cómo se llama tu perro?", C: "Perdona. Guardada. Hablemos de lo importante: ¿cómo se llama tu perro?" },
            reply: { A: "Camila respira. «Toto. Pequeño, marrón… Oye, ¿eso es de verdad?»", B: "Camila suelta el aire. «Toto. Pequeño, marrón, collar rojo… Oye, ¿eso era de verdad?»", C: "Camila baja las manos. «Toto. Pequeño, marrón, collar rojo. Y no me has respondido: ¿era de verdad?»" },
            mood: "scared", next: "pistola-miedo",
          },
          {
            id: "quieta",
            say: { A: "No te muevas. ¿Qué hay en la correa?", B: "No te muevas. ¿Qué escondes en esa correa?", C: "Quieta ahí. ¿Qué llevas en esa correa, exactamente?" },
            reply: { A: "Camila suelta la correa y corre. «¡Socorro!»", B: "Camila suelta la correa y sale corriendo entre los puestos, gritando «¡socorro!».", C: "Camila deja caer la correa y huye entre los puestos. Su grito de «¡socorro!» se oye hasta el escenario." },
            mood: "terror", end: "pistola-huye",
          },
        ],
      },
      "pistola-miedo": {
        who: "camila", mood: "scared",
        line: {
          A: "Camila no se acerca. «Mira, yo solo quiero a Toto. ¿Me ayudas o me voy?»",
          B: "Camila mantiene dos metros de distancia. «Mira, yo solo quiero encontrar a Toto. ¿Me ayudas, sin pistola, o me voy por mi lado?»",
          C: "Camila conserva una distancia prudente. «Lo único que quiero esta noche es a Toto. Si me ayudas, es sin pistola. Si no, cada uno por su lado.»",
        },
        options: [
          {
            id: "ayudar",
            say: { A: "Te ayudo. Sin pistola. Vamos al río.", B: "Te ayudo, sin pistola, te lo prometo. Creo que fue al río.", C: "Te ayudo, y la pistola se queda guardada. Apuesto por el río: los perros asustados buscan agua." },
            reply: { A: "Camila va delante, mirando atrás. «Bueno… Al río.»", B: "Camila camina delante, mirando hacia atrás cada tres pasos. «Está bien. Al río.»", C: "Camila echa a andar delante de ti, vigilándote por el rabillo del ojo. «Al río. Y tú, a la vista.»" },
            mood: "worried", end: "pistola-rio",
          },
          {
            id: "legal",
            say: { A: "Es legal. No pasa nada. Describe a Toto.", B: "Es completamente legal, no te preocupes. Descríbeme a Toto.", C: "Está todo en regla, no hay de qué preocuparse. Descríbeme a Toto y seguimos." },
            reply: { A: "Camila saca el celular. «Perdona. Voy a llamar a la policía. Es mejor.»", B: "Camila saca el celular sin dejar de mirarte. «Perdona, pero voy a llamar a la policía. Es lo mejor para los dos.»", C: "Camila saca el celular. «En regla o no, prefiero que lo decida la policía.» Y marca." },
            mood: "scared", end: "pistola-patrulla",
          },
          {
            id: "perdon",
            say: { A: "Perdón por el susto. ¿Dónde viste a Toto?", B: "Perdona el susto, de verdad. ¿Dónde lo viste por última vez?", C: "Perdona el susto. Volvamos a Toto: ¿dónde lo viste por última vez?" },
            reply: { A: "Camila señala el humo. «En las empanadas. Hace veinte minutos.»", B: "Camila señala el humo de la parrilla. «Junto al puesto de empanadas, hace veinte minutos. Y gracias por guardarla.»", C: "Camila señala la parrilla. «En el puesto de empanadas, hace veinte minutos. Y que siga guardada, por favor.»" },
            mood: "worried", next: "pista",
          },
        ],
      },
      "granada-inicio": {
        who: "camila", mood: "terror",
        line: {
          A: "Una chica busca bajo los puestos con una correa vacía. Ve tu granada y grita: «¡Una granada! ¡Todos fuera!» La gente grita.",
          B: "Una chica con sudadera amarilla se levanta de debajo de un puesto y ve la granada en tu mano. Grita con todas sus fuerzas: «¡Una granada! ¡Salgan todos!» Tres puestos empiezan a gritar también.",
          C: "Una chica se incorpora de debajo de un puesto, correa vacía en mano, y ve la granada. Su grito se oye por encima de la música: «¡Una granada! ¡Evacúen!» El pánico se contagia puesto por puesto.",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Es de juguete!", B: "¡Tranquilos! ¡Es de juguete, de verdad!", C: "¡Calma todo el mundo! Es de juguete. Casi seguro." },
            reply: { A: "Camila se esconde detrás de un puesto. «¡¿Casi?! ¿Por qué la llevas?»", B: "Camila se esconde tras un puesto de frutas. «¿Y quién lleva una granada de juguete a un mercado? ¡Guárdala!»", C: "Camila se parapeta tras un puesto de frutas. «¿Casi seguro? Pues yo estoy casi segura de que llamo a la policía.»" },
            mood: "scared", next: "granada-panico",
          },
          {
            id: "ladron",
            say: { A: "Es para el ladrón de tu perro. ¿Quién fue?", B: "La traigo por si alguien robó a tu perro. ¿Sospechas de alguien?", C: "Es para quien se haya llevado a tu perro. Dime un nombre y voy." },
            reply: { A: "Camila grita más. «¡Nadie lo robó! ¡Se escapó! ¡Guarda eso!»", B: "Camila grita todavía más. «¡Nadie lo robó, se escapó con la música! ¡Guarda eso!»", C: "Camila grita, incrédula: «¡Se escapó por la música, nadie lo secuestró! ¡Guarda esa cosa!»" },
            mood: "scared", next: "granada-panico",
          },
          {
            id: "no-explota",
            act: { A: "Levantas la granada para que la vean.", B: "Levantas la granada para que todos la vean bien.", C: "Alzas la granada en alto, como si eso tranquilizara." },
            say: { A: "¡Tranquilos! ¡No explota!", B: "¡Tranquilos todos! ¡No explota!", C: "¡Calma! ¡Que no explota, de verdad!" },
            reply: { A: "Nadie escucha. La gente corre. Los vendedores apagan las parrillas.", B: "Nadie te escucha. La gente corre hacia las salidas y los vendedores apagan las parrillas a toda prisa.", C: "La aclaración llega tarde. El mercado se vacía en segundos y las parrillas se apagan una tras otra." },
            mood: "terror", end: "granada-evacuacion",
          },
        ],
      },
      "granada-panico": {
        who: "camila", mood: "scared",
        line: {
          A: "Camila está detrás del puesto. Los vendedores gritan: «¡Policía!» Ella te mira. «Guárdala. Ahora.»",
          B: "Camila asoma la cabeza por detrás del puesto. Los vendedores gritan «¡policía!» desde todas partes. «Guárdala ahora mismo o esto termina muy mal.»",
          C: "Camila asoma desde su trinchera de frutas mientras los vendedores piden policía a gritos. «Guárdala ahora. Después hablamos de lo loco que estás.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la granada en la mochila.", B: "Guardas la granada en el fondo de la mochila.", C: "Guardas la granada en el fondo de la mochila, lejos de la vista." },
            say: { A: "Ya está. Perdón. ¿Dónde viste a Toto?", B: "Listo, guardada. Perdón. ¿Dónde viste a Toto por última vez?", C: "Guardada. Perdón por el caos. ¿Dónde viste a Toto por última vez?" },
            reply: { A: "Un perro pequeño sale de debajo del puesto. ¡Es Toto! Camila llora.", B: "Con el silencio, un perro marrón sale temblando de debajo del puesto. «¡Toto!», grita Camila, y se le cae la correa.", C: "Del fondo del puesto sale un perro marrón, temblando. Camila se deja caer de rodillas. «¡Toto! ¡Los gritos lo espantaron hasta aquí!»" },
            mood: "surprised", end: "granada-toto",
          },
          {
            id: "policia",
            say: { A: "Que venga la policía. No me importa.", B: "Que venga la policía si quiere. No tengo nada que esconder.", C: "Que venga la policía, el ejército, quien sea. No tengo nada que ocultar." },
            reply: { A: "Camila mira al cielo. Se oye un helicóptero. «Ya vienen.»", B: "Camila mira hacia arriba. Un helicóptero ilumina el mercado. «Pues ya vienen. Todos.»", C: "Camila levanta la vista. Un helicóptero barre el mercado con su foco. «Pediste a todos. Ahí los tienes.»" },
            mood: "terror", end: "granada-helicoptero",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Suerte con Toto.", B: "Mejor me voy antes de que llegue alguien. Suerte con Toto.", C: "Creo que mi presencia no ayuda. Me voy. Ojalá Toto aparezca." },
            reply: { A: "Camila no dice nada. Sigue escondida.", B: "Camila no contesta. Se queda detrás del puesto hasta que te alejas.", C: "Camila no responde. Sigue detrás del puesto, esperando a que desaparezcas." },
            mood: "sad", end: "sola",
          },
        ],
      },
      "gas-inicio": {
        who: "camila", mood: "surprised",
        line: {
          A: "Una chica corre hacia ti con una correa vacía. Sacas el gas pimienta. Ella se para. «¡Eh, eh! Yo también tengo. Mira.» Saca el suyo.",
          B: "Una chica con sudadera amarilla corre hacia ti con una correa vacía y tú levantas el gas pimienta. Ella frena en seco y saca el suyo. «¡Quieto! Yo también llevo. ¿Qué quieres?»",
          C: "Una chica se te acerca corriendo, correa vacía en mano, y tú levantas el gas pimienta. Ella frena y saca el suyo en un movimiento idéntico. «Vaya. Dos paranoicos en el mismo mercado. ¿Qué quieres?»",
        },
        options: [
          {
            id: "perdon",
            say: { A: "Perdón. El mercado de noche da miedo. ¿Buscas algo?", B: "Perdona, es que el mercado de noche me pone nervioso. ¿Buscas algo?", C: "Perdona, el reflejo fue más rápido que yo. Este mercado de noche me tiene en alerta. ¿Qué buscas?" },
            reply: { A: "Camila baja el gas. «A mi perro, Toto. Se escapó. ¿Lo viste?»", B: "Camila baja el gas, pero no lo guarda. «A mi perro, Toto. Se me escapó con la música. ¿Lo has visto?»", C: "Camila baja el gas sin guardarlo. «A mi perro, Toto. Lo espantó la música. Y tú casi me espantas a mí.»" },
            mood: "worried", next: "gas-dos",
          },
          {
            id: "bien",
            say: { A: "¿Tú también llevas? Bien hecho. Es peligroso de noche.", B: "¿Tú también llevas gas? Bien hecho. De noche nunca se sabe.", C: "¿También llevas gas? Me parece de lo más sensato. De noche, mejor prevenir." },
            reply: { A: "Camila sonríe un poco. «Mi madre me lo dio. Busco a mi perro, Toto.»", B: "Camila sonríe a medias. «Me lo dio mi madre cuando empecé a salir de noche. Oye, busco a mi perro, Toto.»", C: "Camila casi sonríe. «Regalo de mi madre. Primera vez que lo saco. Busco a mi perro, Toto, por cierto.»" },
            mood: "worried", next: "gas-dos",
          },
          {
            id: "lejos",
            say: { A: "No te acerques. Vete.", B: "No te acerques más. Vete por donde viniste.", C: "Mantén la distancia y sigue tu camino. No tengo nada para ti." },
            reply: { A: "Camila guarda el gas. «Solo quería preguntar por mi perro.» Se va.", B: "Camila guarda el gas, dolida. «Solo quería preguntar por mi perro, pero bueno.» Y se aleja.", C: "Camila guarda el gas con un gesto cansado. «Solo iba a preguntar por mi perro. Buena noche, paranoico.»" },
            mood: "sad", end: "gas-lejos",
          },
        ],
      },
      "gas-dos": {
        who: "camila", mood: "worried",
        line: {
          A: "Camila y tú guardan el gas al mismo tiempo. Ella casi se ríe. «Bueno. Toto es pequeño y marrón. ¿Me ayudas?»",
          B: "Los dos guardan el gas a la vez y Camila suelta una risa nerviosa. «Qué noche. Bueno: Toto es pequeño, marrón, con collar rojo. ¿Me ayudas a buscarlo?»",
          C: "Guardan el gas al mismo tiempo, como un duelo cancelado, y Camila se ríe sin querer. «Qué manera de conocernos. Toto: pequeño, marrón, collar rojo. ¿Me ayudas?»",
        },
        options: [
          {
            id: "rio",
            say: { A: "Sí. Vamos al río. Los perros buscan agua.", B: "Claro. Vamos al río: cuando se asustan, buscan agua.", C: "Por supuesto. Al río: un perro asustado busca agua antes que nada." },
            reply: { A: "Camila asiente. «Al río. Y los dos con el gas guardado, ¿eh?»", B: "Camila asiente. «Al río. Y los dos con el gas bien guardado, por favor.»", C: "Camila asiente. «Al río. Y pacto de no agresión: el gas se queda en el bolsillo.»" },
            mood: "smile", end: "gas-rio",
          },
          {
            id: "olor",
            say: { A: "¿Y si Toto huele el gas y viene?", B: "¿Y si Toto huele el gas pimienta y viene a ver qué pasa?", C: "Idea cuestionable: ¿y si Toto detecta el gas y viene a investigar?" },
            reply: { A: "Camila se ríe mucho. «¡Toto odia la pimienta! Pero gracias por la risa.»", B: "Camila se ríe de verdad por primera vez. «Toto huye de la pimienta como del veterinario. Pero gracias, necesitaba reírme.»", C: "Camila estalla en una carcajada. «Toto estornuda con la pimienta de las empanadas. Pero gracias: era la primera risa de la noche.»" },
            mood: "laugh", end: "gas-risa",
          },
          {
            id: "plan",
            say: { A: "Primero, un plan. ¿Dónde lo viste?", B: "Primero necesitamos un plan. ¿Dónde lo viste por última vez?", C: "Antes de correr, un plan. ¿Dónde lo viste por última vez?" },
            reply: { A: "Camila guarda el celular. «En las empanadas. Hace veinte minutos.»", B: "Camila señala la parrilla. «Junto al puesto de empanadas, hace veinte minutos.»", C: "Camila señala el humo. «En el puesto de empanadas, hace veinte minutos. Y ya sin gas, por favor.»" },
            mood: "worried", next: "plan",
          },
        ],
      },
      "lapiz-inicio": {
        who: "camila", mood: "surprised",
        line: {
          A: "Una chica con una correa vacía ve tu lápiz y tu papel. «¿Dibujas? ¡Perfecto! Mi perro se escapó. ¿Me dibujas a Toto para un cartel?»",
          B: "Una chica con sudadera amarilla y una correa vacía se fija en tu lápiz. «¿Tú dibujas? ¡Qué suerte! Mi perro Toto se escapó y necesito carteles. ¿Me ayudas?»",
          C: "Una chica con una correa vacía mira tu lápiz como si fuera una señal del cielo. «¿Dibujas? Mi perro se escapó, se llama Toto, y mi hermano dibuja perros con seis patas. Te necesito.»",
        },
        options: [
          {
            id: "describe",
            say: { A: "Sí. Descríbeme a Toto. Yo dibujo.", B: "Claro. Descríbemelo bien y yo lo dibujo.", C: "Encantado. Descríbemelo con detalle; prometo no pasar de las cuatro patas." },
            reply: { A: "Camila sonríe. «Pequeño, marrón, collar rojo. ¡Y orejas grandes!»", B: "Camila sonríe por primera vez. «Pequeño, marrón, collar rojo. Y unas orejas enormes, eso es lo más importante.»", C: "Camila sonríe, aliviada. «Pequeño, marrón, collar rojo, orejas desproporcionadas. Si las orejas están bien, el resto da igual.»" },
            mood: "smile", next: "lapiz-cartel",
          },
          {
            id: "mapa",
            act: { A: "Dibujas un mapa del mercado en el papel.", B: "Dibujas un mapa rápido del mercado en el papel.", C: "Trazas un mapa del mercado a mano alzada, puesto por puesto." },
            say: { A: "Primero, un mapa. ¿Dónde lo viste?", B: "Primero hagamos un mapa. ¿Dónde lo viste por última vez?", C: "Antes del cartel, un mapa. Marca dónde lo viste por última vez." },
            reply: { A: "Camila marca una X. «Aquí, en las empanadas. Hace veinte minutos.»", B: "Camila marca una X con el dedo. «Aquí, junto a las empanadas, hace veinte minutos. ¡Qué buena idea!»", C: "Camila pone el dedo en el mapa. «Aquí, en las empanadas, hace veinte minutos. Eres la primera persona con un plan esta noche.»" },
            mood: "smile", next: "lapiz-mapa",
          },
          {
            id: "numero",
            say: { A: "Escribo tu número en las mesas de los puestos.", B: "Puedo escribir tu número en todas las mesas de los puestos.", C: "Puedo dejar tu número escrito en cada puesto del mercado, mesa por mesa." },
            reply: { A: "Camila se ríe. «¡Los vendedores me van a matar! Mejor un cartel.»", B: "Camila se ríe. «¡Los vendedores me matan! Mejor hacemos un cartel bonito.»", C: "Camila se ríe. «Don Aurelio me mata si le escribes en la mesa. Mejor un cartel, por favor.»" },
            mood: "laugh", next: "lapiz-cartel",
          },
        ],
      },
      "lapiz-cartel": {
        who: "camila", mood: "smile",
        line: {
          A: "Camila mira tu dibujo. «¡Es Toto! ¿Qué escribimos debajo?»",
          B: "Camila mira el dibujo con los ojos brillantes. «¡Es él, es Toto! ¿Y qué ponemos debajo?»",
          C: "Camila contempla el dibujo como si fuera un retrato de familia. «Es Toto. Más guapo que el original, incluso. ¿Qué escribimos debajo?»",
        },
        options: [
          {
            id: "texto",
            say: { A: "«Se busca Toto. Collar rojo.» Y tu teléfono.", B: "«Se busca Toto, collar rojo, orejas grandes» y tu teléfono.", C: "«Se busca Toto: collar rojo, orejas memorables.» Y tu número bien grande." },
            reply: { A: "Camila escribe su número. «Vamos a pegarlo en todos los puestos.»", B: "Camila escribe su número con tu lápiz. «Lo pegamos en todos los puestos. ¡Gracias!»", C: "Camila escribe su número con tu lápiz y firma. «Lo pegamos en cada puesto. Eres mi héroe con lápiz.»" },
            mood: "smile", end: "lapiz-carteles",
          },
          {
            id: "recompensa",
            say: { A: "¿Ponemos una recompensa?", B: "¿Y si ponemos una recompensa? La gente busca más.", C: "¿Añadimos una recompensa? La generosidad agudiza la vista." },
            reply: { A: "Camila piensa. «Recompensa: una empanada y mi gratitud.»", B: "Camila lo piensa. «Pon: recompensa, una empanada y mi gratitud eterna. Es lo que tengo.»", C: "Camila sonríe. «Escribe: recompensa, una empanada de Don Aurelio y gratitud de por vida. Es una oferta seria.»" },
            mood: "laugh", end: "lapiz-recompensa",
          },
          {
            id: "firma",
            say: { A: "Firma tú. Es tu perro.", B: "Firma tú el cartel, que es tu perro.", C: "Fírmalo tú: el artista soy yo, pero el perro es tuyo." },
            reply: { A: "Camila firma. «Camila y Toto. Vamos a pegarlos.»", B: "Camila firma con cuidado. «Camila y Toto. Ahora, a pegarlos por todo el mercado.»", C: "Camila firma: «Camila, en nombre de Toto». «A pegarlos. Hoy el mercado trabaja para nosotros.»" },
            mood: "smile", end: "lapiz-carteles",
          },
        ],
      },
      "lapiz-mapa": {
        who: "camila", mood: "worried",
        line: {
          A: "Camila mira el mapa. «Toto tiene miedo de la música. ¿Hacia dónde fue?»",
          B: "Camila estudia el mapa con el dedo en la X. «Cuando empezó la música, Toto salió corriendo. ¿Hacia dónde iría?»",
          C: "Camila recorre el mapa con el dedo desde la X. «La música lo espantó. Un perro asustado, ¿hacia dónde corre?»",
        },
        options: [
          {
            id: "flecha",
            act: { A: "Dibujas una flecha hacia el río.", B: "Dibujas una flecha desde la X hasta el río.", C: "Trazas una flecha desde la X hasta el río, al este." },
            say: { A: "Lejos de la música. Al río.", B: "Lejos de la música y hacia el agua. Al río.", C: "Lejos del ruido, hacia el agua: al río, al este." },
            reply: { A: "Camila toma el mapa. «¡Al río! Gracias por el mapa.»", B: "Camila se guarda el mapa en el bolsillo. «¡Al río! Me llevo tu mapa, eh.»", C: "Camila dobla el mapa como un tesoro. «Al río. Y el mapa me lo quedo, por si me pierdo yo también.»" },
            mood: "smile", end: "lapiz-rio",
          },
          {
            id: "nota",
            act: { A: "Escribes una nota para el vendedor de empanadas.", B: "Escribes una nota para el vendedor de empanadas.", C: "Escribes una nota para Don Aurelio, el de las empanadas." },
            say: { A: "Le dejo una nota al vendedor: «Si ves a Toto, llama».", B: "Le dejo una nota al de las empanadas: «Si ves a Toto, llama a este número».", C: "Le dejo una nota al vendedor: «Si ves a Toto, llama a este número. Paga en empanadas»." },
            reply: { A: "Camila sonríe. «Él ve todo desde la parrilla. Buena idea.»", B: "Camila sonríe. «Desde esa parrilla lo ve todo. Buena idea.» Y escribe su número.", C: "Camila sonríe. «Ese señor es la cámara de seguridad del mercado.» Y escribe su número debajo." },
            mood: "smile", end: "lapiz-carteles",
          },
          {
            id: "plan",
            say: { A: "¿Qué hacemos ahora? Tú decides.", B: "¿Y ahora qué hacemos? Tú conoces a Toto.", C: "El siguiente paso lo decides tú, que conoces a Toto." },
            reply: { A: "Camila guarda el celular. «Necesito un plan.»", B: "Camila se ata la coleta. «Bueno. Necesito un plan.»", C: "Camila se ajusta la coleta. «Un plan. Necesito un plan.»" },
            mood: "worried", next: "plan",
          },
        ],
      },
      "libro-inicio": {
        who: "camila", mood: "surprised",
        line: {
          A: "Una chica con una correa vacía mira tu libro. «¿Un libro? ¿En el mercado, de noche? Perdona… ¿viste a un perro pequeño?»",
          B: "Una chica con sudadera amarilla y una correa vacía se queda mirando tu libro. «¿Quién lee en un mercado a estas horas? Perdona… ¿has visto un perro pequeño? Se llama Toto.»",
          C: "Una chica con una correa vacía se detiene ante tu libro como ante un animal raro. «Un libro, de noche, entre parrillas. Interesante. Perdona: ¿has visto un perro pequeño con cara de culpable?»",
        },
        options: [
          {
            id: "perros",
            act: { A: "Abres el libro. Hay un capítulo sobre perros.", B: "Abres el libro por un capítulo sobre el comportamiento de los perros.", C: "Abres el libro por un capítulo sobre el comportamiento de los perros asustados." },
            say: { A: "Mira. Aquí dice: los perros asustados buscan agua.", B: "Mira lo que dice aquí: los perros asustados buscan agua y lugares bajos.", C: "Escucha esto: «Un perro asustado busca agua y escondites bajos». ¿Hay un río cerca?" },
            reply: { A: "Camila lee. «¡El río! Toto adora el río.»", B: "Camila lee por encima de tu hombro. «¡El río! Toto se vuelve loco con el río.»", C: "Camila lee en voz alta y se le ilumina la cara. «El río. Toto adora el río, aunque luego le dé miedo.»" },
            mood: "surprised", next: "libro-agua",
          },
          {
            id: "excusa",
            say: { A: "El libro es una excusa para pasear. ¿Cómo es tu perro?", B: "El libro es mi excusa para pasear de noche. ¿Cómo es tu perro?", C: "El libro es una coartada para pasear sin que me pregunten nada. ¿Cómo es tu perro?" },
            reply: { A: "Camila se ríe. «Pequeño, marrón, collar rojo. Y tú, raro.»", B: "Camila se ríe a pesar de todo. «Pequeño, marrón, collar rojo. Y tú eres un poco raro, ¿eh?»", C: "Camila se ríe. «Pequeño, marrón, collar rojo. Y tú, el paseante más raro del mercado.»" },
            mood: "laugh", next: "libro-risa",
          },
          {
            id: "regalo",
            say: { A: "Cuando aparezca tu perro, te regalo el libro.", B: "Si aparece tu perro esta noche, te regalo el libro.", C: "Trato: cuando aparezca tu perro, el libro es tuyo." },
            reply: { A: "Camila sonríe. «Trato. Se llama Toto. Pequeño y marrón.»", B: "Camila sonríe. «Trato hecho. Se llama Toto: pequeño, marrón, collar rojo.»", C: "Camila sonríe. «Acepto el trato. Toto: pequeño, marrón, collar rojo, orejas prestadas.»" },
            mood: "smile", next: "libro-agua",
          },
        ],
      },
      "libro-agua": {
        who: "camila", mood: "worried",
        line: {
          A: "Camila mira el libro. «¿Qué más dice? ¿Cómo lo llamo?»",
          B: "Camila señala el libro. «¿Y qué más dice ahí? ¿Cómo hago para que venga?»",
          C: "Camila da golpecitos en la página. «Sigue leyendo. ¿Qué dice sobre cómo hacer que vuelva?»",
        },
        options: [
          {
            id: "rio",
            say: { A: "Dice: ve al agua. Vamos al río.", B: "Dice que busques cerca del agua. Vamos al río.", C: "Dice: «búscalo cerca del agua». Vamos al río, al este." },
            reply: { A: "Camila cierra el libro. «¡Al río! Gracias.»", B: "Camila cierra el libro por ti. «¡Al río! Y gracias por leer de noche.»", C: "Camila cierra el libro con decisión. «Al río. Bendito sea el raro que lee en los mercados.»" },
            mood: "smile", end: "libro-rio",
          },
          {
            id: "silbar",
            say: { A: "Dice: silba fuerte. Los perros oyen de lejos.", B: "Dice que silbes fuerte: los perros te oyen desde muy lejos.", C: "Dice que un silbido agudo llega más lejos que cualquier grito. Silba." },
            reply: { A: "Camila silba. Lejos, un perro ladra. «¡Es Toto! ¡Es su ladrido!»", B: "Camila silba con dos dedos. A lo lejos, un ladrido. «¡Es Toto! ¡Reconozco su ladrido!»", C: "Camila silba con dos dedos y, desde el fondo del mercado, responde un ladrido. «¡Toto! ¡Ese es su ladrido!»" },
            mood: "surprised", end: "libro-silbido",
          },
          {
            id: "plan",
            say: { A: "El libro no lo sabe todo. ¿Qué hacemos?", B: "El libro no lo sabe todo. ¿Qué hacemos ahora?", C: "Hasta aquí llega el libro. El resto lo decidimos nosotros. ¿Qué hacemos?" },
            reply: { A: "Camila guarda el celular. «Necesito un plan.»", B: "Camila se ata la coleta. «Bueno. Necesito un plan.»", C: "Camila se ajusta la coleta. «Bien. Necesito un plan.»" },
            mood: "worried", next: "plan",
          },
        ],
      },
      "libro-risa": {
        who: "camila", mood: "laugh",
        line: {
          A: "Camila se ríe todavía. «Un libro en el mercado. Bueno, ¿me ayudas o lees?»",
          B: "Camila todavía se ríe. «Un libro, de noche, en el mercado. Bueno, ¿me ayudas a buscar o sigues leyendo?»",
          C: "Camila no termina de reírse. «Un libro entre las parrillas. En fin: ¿me ayudas a buscar o la lectura es sagrada?»",
        },
        options: [
          {
            id: "ayudar",
            say: { A: "Te ayudo. El libro espera.", B: "Te ayudo, claro. El libro puede esperar.", C: "Te ayudo. El libro lleva cien años esperando; puede esperar una hora más." },
            reply: { A: "Camila sonríe. «Mira, el libro tiene un capítulo de perros.»", B: "Camila abre tu libro al azar. «Mira, tiene un capítulo sobre perros. Lee.»", C: "Camila hojea tu libro. «Hay un capítulo sobre perros. Lee en voz alta, lector nocturno.»" },
            mood: "smile", next: "libro-agua",
          },
          {
            id: "prestar",
            say: { A: "Toma el libro. Léelo mientras esperas a Toto.", B: "Toma, llévate el libro. Léelo mientras esperas a Toto en casa.", C: "Quédate el libro. Para las noches de espera, que esta no será la última." },
            reply: { A: "Camila toma el libro. «Gracias. Es raro, pero gracias.»", B: "Camila acepta el libro, sorprendida. «Es lo más raro que me han regalado. Gracias.»", C: "Camila acepta el libro. «El regalo más raro de mi vida, en la peor noche. Gracias.»" },
            mood: "smile", end: "libro-regalo",
          },
          {
            id: "leer",
            say: { A: "Voy a leer a otro sitio. Suerte.", B: "Me voy a leer a un sitio más tranquilo. Suerte con Toto.", C: "La lectura es sagrada, sí. Me busco un banco. Suerte con Toto." },
            reply: { A: "Camila deja de reírse. Sigue buscando sola.", B: "Camila deja de reírse de golpe y vuelve a agacharse bajo los puestos.", C: "La risa de Camila se apaga. Vuelve a los puestos, sola, sin mirarte." },
            mood: "sad", end: "sola",
          },
        ],
      },
      "corazon-inicio": {
        who: "camila", mood: "sad",
        line: {
          A: "Una chica llora bajo un puesto con una correa vacía. Ve el corazón y respira. «No sé por qué, pero contigo me siento mejor. Mi perro se escapó.»",
          B: "Una chica con sudadera amarilla llora en silencio con una correa vacía en la mano. Al ver el corazón, algo en su cara se afloja. «No te conozco, pero contigo me siento mejor. Se me escapó el perro, Toto.»",
          C: "Una chica llora sin ruido bajo las luces, correa vacía en mano. El corazón le llega antes que tus palabras y suelta el aire. «Qué raro. Contigo delante ya no tengo tanto miedo. Mi perro se escapó. Toto.»",
        },
        options: [
          {
            id: "consolar",
            say: { A: "Tranquila. Llora si quieres. Yo estoy aquí.", B: "Tranquila. Llora lo que necesites, yo me quedo aquí contigo.", C: "No tienes que aguantarte las lágrimas. Yo me quedo aquí el tiempo que haga falta." },
            reply: { A: "Camila llora un poco más. «Toto era de mi abuela.»", B: "Camila se deja llorar un momento. «Toto era de mi abuela. Es lo único que me queda de ella.»", C: "Camila llora con alivio. «Toto era de mi abuela. Perderlo es perderla dos veces.»" },
            mood: "love", next: "corazon-abuela",
          },
          {
            id: "contar",
            say: { A: "Cuéntame de Toto. ¿Cómo es?", B: "Cuéntame de Toto. ¿Cómo es? ¿Qué le gusta?", C: "Háblame de Toto. Cómo es, qué le gusta, a quién quiere." },
            reply: { A: "Camila sonríe entre lágrimas. «Pequeño, marrón. Le gusta el agua. Era de mi abuela.»", B: "Camila sonríe entre lágrimas. «Pequeño, marrón, orejas enormes. Le gusta el agua y robar empanadas. Era de mi abuela.»", C: "Camila sonríe con los ojos mojados. «Pequeño, marrón, orejas prestadas. Adora el agua y las empanadas ajenas. Era de mi abuela.»" },
            mood: "love", next: "corazon-abuela",
          },
          {
            id: "juntos",
            say: { A: "Vamos a buscarlo juntos. Ahora.", B: "Vamos a buscarlo juntos, ahora mismo.", C: "Lo buscamos juntos, ahora mismo. Dos pares de ojos ven más que uno." },
            reply: { A: "Camila te toma la mano. «Al río. Toto adora el río.»", B: "Camila te toma la mano sin pensarlo. «Al río. Toto adora el río. Gracias.»", C: "Camila te toma la mano con naturalidad. «Al río. Toto siempre acaba en el río. Gracias por venir conmigo.»" },
            mood: "love", end: "corazon-rio",
          },
        ],
      },
      "corazon-abuela": {
        who: "camila", mood: "love",
        line: {
          A: "Camila se seca los ojos. «Mi abuela decía que Toto tiene alma de explorador. ¿Tú qué crees?»",
          B: "Camila se seca los ojos con la manga. «Mi abuela decía que Toto tiene alma de explorador y que siempre vuelve. ¿Tú qué crees?»",
          C: "Camila se seca los ojos con la manga de la sudadera. «Mi abuela decía que Toto tiene alma de explorador y corazón de hogar. ¿Tú qué crees?»",
        },
        options: [
          {
            id: "orgullo",
            say: { A: "Tu abuela estaría orgullosa de ti. Lo buscas con amor.", B: "Tu abuela estaría orgullosa de verte buscarlo así, con tanto amor.", C: "Tu abuela estaría orgullosa: nadie busca así a un perro si no sabe querer." },
            reply: { A: "Camila te abraza fuerte. «Gracias. Lo necesitaba.»", B: "Camila te abraza con fuerza, correa y todo. «Gracias. No sabes cuánto lo necesitaba.»", C: "Camila te abraza de golpe, con la correa enredada entre los dos. «Gracias. Eso era lo que necesitaba oír.»" },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "promesa",
            say: { A: "Creo que Toto vuelve. Te lo prometo.", B: "Creo que tu abuela tenía razón. Toto vuelve, te lo prometo.", C: "Creo que tu abuela tenía razón: los exploradores siempre vuelven a casa. Te lo prometo." },
            reply: { A: "Camila te da un beso en la mejilla. «Gracias. Vamos al río.»", B: "Camila te da un beso rápido en la mejilla. «Gracias. Vamos al río, explorador.»", C: "Camila te besa la mejilla, sin pensarlo. «Gracias. Al río, que los exploradores se encuentran entre sí.»" },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "rio",
            say: { A: "Creo que está en el río. Vamos.", B: "Creo que está en el río. Vamos, no perdamos tiempo.", C: "Creo que un explorador con miedo va al agua. Vamos al río." },
            reply: { A: "Camila sonríe. «Al río. Contigo.»", B: "Camila sonríe y echa a andar. «Al río. Contigo, mejor.»", C: "Camila sonríe y te toma del brazo. «Al río. Y esta vez no voy sola.»" },
            mood: "love", end: "corazon-rio",
          },
        ],
      },
    },
    ends: {
      "cuchillo-rio": { text: { A: "Vas delante, sin cuchillo. Camila te sigue a tres pasos hacia el río.", B: "Caminas delante, con las manos a la vista, y Camila te sigue a tres pasos hacia el río. El susto del cuchillo todavía se nota.", C: "Avanzas hacia el río con las manos a la vista; Camila te sigue a tres pasos, sin olvidar el cuchillo, pero con la correa lista." }, change: "se-va", flag: "toto-buscado", recap: "Asustaste a Camila con el cuchillo, pero fueron juntos al río a buscar a Toto." },
      "cuchillo-grito": { text: { A: "Camila corre y grita. Los vendedores te miran. Guardas el cuchillo y te vas.", B: "Camila huye gritando que tienes un cuchillo. Los vendedores te rodean con la mirada y tú guardas el cuchillo y te alejas.", C: "Camila desaparece gritando «¡cuchillo!». Los vendedores te miran como a un sospechoso y te retiras, con la cuerda inútil en la mano." }, change: "huye", recap: "Sacaste el cuchillo dos veces y Camila huyó gritando." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. Camila sigue buscando a Toto lejos de ti.", B: "Llega una patrulla y te quitan el cuchillo. Camila declara contra ti y sigue buscando a Toto lo más lejos posible.", C: "La patrulla se lleva tu cuchillo y tu versión no convence a nadie. Camila sigue buscando a Toto en la otra punta del mercado." }, change: "policia", recap: "El cuchillo asustó a Camila y terminó con la policía." },
      "pistola-huye": { text: { A: "Camila corre. La correa queda en el suelo. Todos te miran.", B: "Camila huye y deja la correa en el suelo. Todo el mercado te mira y nadie se acerca.", C: "Camila huye sin mirar atrás. La correa queda en el suelo como una acusación, y el mercado te abre un círculo de vacío." }, change: "huye", recap: "Apuntaste a Camila y huyó sin su correa." },
      "pistola-rio": { text: { A: "Camila va delante hacia el río. No se acerca a ti. Pero van juntos.", B: "Camila camina hacia el río sin acercarse a ti, mirando atrás cada tres pasos. Juntos, pero con la pistola entre los dos.", C: "Camila avanza hacia el río manteniendo la distancia. Van juntos, aunque la pistola, guardada, sigue entre los dos." }, change: "se-va", flag: "toto-buscado", recap: "Camila aceptó tu ayuda, con la pistola guardada y mucha distancia." },
      "pistola-patrulla": { text: { A: "Llega una patrulla. Levantas las manos. Camila explica lo de la pistola.", B: "Llega una patrulla y levantas las manos. Camila explica, temblando, lo de la pistola. Toto sigue perdido.", C: "Una patrulla llega con las luces encendidas y tú levantas las manos. Camila relata lo de la pistola, y nadie busca a Toto." }, change: "manos-arriba", recap: "Camila llamó a la policía por tu pistola." },
      "granada-evacuacion": { text: { A: "El mercado está vacío. Las parrillas apagadas. Camila se fue corriendo.", B: "El mercado se vacía en minutos. Parrillas apagadas, luces encendidas y nadie. Camila huyó con los demás.", C: "Un mercado vacío, con las parrillas humeando y la música sonando para nadie. Camila huyó con el resto." }, change: "corre", recap: "Vaciaste el mercado con la granada." },
      "granada-toto": { text: { A: "Toto aparece por el miedo. Camila lo abraza. Te mira: «Gracias. Y nunca más eso».", B: "Toto aparece temblando por los gritos y Camila lo abraza llorando. Te mira: «Gracias. Y no vuelvas a sacar eso nunca».", C: "Los gritos espantan a Toto hasta los brazos de Camila. Ella lo abraza y te dedica una mirada: «Gracias. Y jamás, jamás saques eso otra vez»." }, change: "sonrie", recap: "El caos de la granada hizo aparecer a Toto." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina el mercado. Llega la policía. Camila se va.", B: "Un helicóptero ilumina el mercado y la policía te rodea. Camila se aleja sin mirar atrás.", C: "El helicóptero convierte el mercado en un escenario y la policía te rodea. Camila se marcha sin volver la vista." }, change: "helicoptero", recap: "La granada trajo un helicóptero al mercado." },
      "gas-lejos": { text: { A: "Camila se va, triste. Guardas el gas. Nadie busca a Toto contigo.", B: "Camila se aleja, dolida. Guardas el gas y te quedas solo con tu miedo.", C: "Camila se marcha, herida por la desconfianza. Guardas el gas y te queda la noche entera para pensar en ello." }, change: "triste", recap: "Tu gas pimienta alejó a Camila." },
      "gas-rio": { text: { A: "Camila y tú van al río, con el gas guardado. Son un equipo raro.", B: "Camila y tú caminan hacia el río, gas guardado y risa nerviosa. Un equipo raro, pero un equipo.", C: "Camila y tú avanzan hacia el río, con el gas guardado y un pacto tácito. El equipo más desconfiado del mercado." }, change: "se-va", flag: "toto-buscado", recap: "Camila y tú, ambos con gas pimienta, fueron juntos al río." },
      "gas-risa": { text: { A: "Camila se ríe mucho. «Gracias por la risa.» Sigue buscando con más ánimo.", B: "Camila se ríe hasta que le duele. «Gracias, necesitaba reírme.» Y sigue buscando con otro ánimo.", C: "Camila se ríe hasta las lágrimas, esta vez de las buenas. Sigue buscando a Toto con una energía nueva." }, change: "sonrie", recap: "Tu broma sobre el gas y Toto hizo reír a Camila." },
      "lapiz-carteles": { text: { A: "Pegan tu dibujo de Toto en diez puestos. Camila está contenta.", B: "Pegan tu dibujo de Toto en diez puestos. En minutos, varias personas empiezan a buscar.", C: "Tu retrato de Toto cuelga en diez puestos y medio mercado busca a un perro con orejas memorables." }, change: "sonrie", recap: "Dibujaste a Toto para los carteles de Camila." },
      "lapiz-recompensa": { text: { A: "El cartel dice: «Recompensa: una empanada». La gente se ríe y busca.", B: "El cartel promete una empanada de recompensa. La gente se ríe, pero busca.", C: "La recompensa en empanadas se convierte en el chiste del mercado, y en su misión colectiva." }, change: "sonrie", recap: "Escribiste un cartel con recompensa en empanadas." },
      "lapiz-rio": { text: { A: "Camila va al río con tu mapa en la mano.", B: "Camila se va hacia el río con tu mapa en la mano, siguiendo la flecha.", C: "Camila se aleja hacia el río siguiendo tu flecha a lápiz, mapa en mano." }, change: "se-va", flag: "toto-buscado", recap: "Dibujaste un mapa y Camila fue al río." },
      "libro-rio": { text: { A: "Camila va al río. Tu libro tenía razón.", B: "Camila se va hacia el río, convencida por tu libro.", C: "Camila se marcha hacia el río, con la autoridad de un libro de su lado." }, change: "se-va", flag: "toto-buscado", recap: "Tu libro mandó a Camila al río." },
      "libro-silbido": { text: { A: "Camila corre hacia el ladrido. «¡Toto!» Lo encuentra bajo un puesto.", B: "Camila corre hacia el ladrido y encuentra a Toto bajo un puesto de frutas. Llora de alegría.", C: "Camila sigue el ladrido hasta un puesto de frutas y rescata a Toto, culpable y feliz. Llora y ríe a la vez." }, change: "sonrie", recap: "Un consejo de tu libro hizo aparecer a Toto." },
      "libro-regalo": { text: { A: "Camila se va con tu libro y su correa vacía. Sonríe un poco.", B: "Camila se aleja con tu libro bajo el brazo y la correa vacía. Sonríe un poco, por primera vez.", C: "Camila se marcha con tu libro y su correa vacía, sonriendo por primera vez en la noche." }, change: "sonrie", recap: "Le regalaste tu libro a Camila." },
      "corazon-rio": { text: { A: "Camila y tú van al río de la mano. Ella ya no llora.", B: "Camila y tú caminan hacia el río de la mano. Ya no llora.", C: "Camila y tú avanzan hacia el río de la mano. Las lágrimas se quedaron en el mercado." }, change: "se-va", flag: "toto-buscado", recap: "Consolaste a Camila y fueron juntos al río." },
      "corazon-abrazo": { text: { A: "Camila te abraza mucho tiempo. Después, va al río.", B: "Camila te abraza largo rato. Luego se va hacia el río, más fuerte.", C: "Camila te abraza largo rato y se marcha hacia el río con la fuerza que le faltaba." }, change: "abraza", flag: "toto-buscado", recap: "Camila te abrazó antes de ir al río." },
      "corazon-beso": { text: { A: "Camila te da un beso y corre al río.", B: "Camila te da un beso en la mejilla y corre hacia el río, sonriendo.", C: "Camila te besa la mejilla y echa a correr hacia el río, con la sonrisa de quien vuelve a tener esperanza." }, change: "beso", flag: "toto-buscado", recap: "Camila te dio un beso y fue al río por Toto." },
      rio: { text: { A: "Camila va hacia el río, al este. Antes de irse, te dice: «Gracias».", B: "Camila se va hacia el paseo del río, al este. Te grita desde lejos que te avisará si lo encuentra.", C: "Camila se aleja a paso rápido hacia el este, rumbo al río, con la correa lista y la esperanza intacta." }, change: "se-va", flag: "toto-buscado", recap: "Ayudaste a Camila a buscar a Toto: puede estar en el río." },
      carteles: { text: { A: "Pones carteles de Toto en los puestos. Mucha gente los lee.", B: "Ponen carteles en diez puestos. Enseguida varias personas empiezan a buscar a Toto.", C: "En diez minutos, la cara de Toto está en todo el mercado y medio barrio busca a un perro con orejas prestadas." }, change: "sonrie", recap: "Pusiste carteles de Toto por todo el mercado." },
      casa: { text: { A: "Camila habla por teléfono. Toto no está en casa, pero ella está más tranquila.", B: "Camila habla con su compañera de piso. Toto no ha vuelto, pero ella va a esperarlo en la puerta.", C: "Toto no ha vuelto a casa, pero la compañera de piso promete montar guardia en la puerta con una galleta." }, change: "llama", recap: "Le sugeriste a Camila llamar a casa." },
      policia: { text: { A: "Llega la policía. Explicas todo. Es un malentendido.", B: "Llega un coche de policía. Te cuesta un buen rato explicar el malentendido.", C: "Llega la policía. Entre explicaciones y disculpas, Toto sigue sin aparecer, y tú tampoco quedas muy bien." }, change: "policia", recap: "Un susto con Camila terminó con la policía." },
      sola: { text: { A: "Te vas. Camila busca a Toto sola.", B: "Te alejas. Camila sigue buscando sola, cada vez más triste.", C: "Te alejas. Desde lejos ves a Camila mirando bajo cada puesto, cada vez con menos fuerza." }, change: "triste", recap: "Dejaste a Camila buscando a Toto sola." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces cuando alguien te asusta?", B: "¿Alguna vez un desconocido te dio miedo por la noche y qué hiciste?", C: "¿Cómo distingues una amenaza real de un malentendido cuando el miedo ya está en el cuerpo?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces si ves un arma?", B: "¿Qué le dirías a alguien que lleva un arma por la calle?", C: "¿Hasta qué punto la presencia de un arma cambia una conversación aunque nadie la use?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué haces cuando hay mucho ruido y caos?", B: "¿Cuál fue la situación más absurda que viviste en un lugar público?", C: "¿Por qué el pánico colectivo se contagia más rápido que la calma?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Llevas algo para defenderte?", B: "¿Qué haces para sentirte seguro cuando sales de noche?", C: "¿Dónde termina la prevención y empieza la paranoia?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Qué dibujas bien?", B: "¿Alguna vez hiciste un cartel o una nota para ayudar a alguien?", C: "¿Qué poder tiene una nota escrita a mano frente a un mensaje de celular?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Qué libro llevas contigo?", B: "¿Qué libro te ayudó en un momento difícil?", C: "¿Qué libro regalarías a alguien que está pasando un mal momento, y por qué?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Quién te consuela cuando estás triste?", B: "¿Cómo consuelas a un amigo que ha perdido algo importante?", C: "¿Por qué a veces un desconocido consuela mejor que alguien cercano?" } },
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
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "aurelio", mood: "scared",
        line: {
          A: "Un señor con delantal grita precios entre el humo. Ve tu cuchillo y se pone detrás de la parrilla. «¡Eh, eh! ¿Qué hace con ese cuchillo? Aquí se paga con monedas.»",
          B: "Un señor con bigote canta los precios entre el humo. Ve tu cuchillo y retrocede detrás de la parrilla con la espátula en alto. «¡Eh! ¿Qué hace con eso? ¡Aquí se paga con monedas, no con cuchillos!»",
          C: "Un señor de bigote dirige su parrilla como una orquesta hasta que ve tu cuchillo. Retrocede un paso y levanta la espátula como escudo. «Un momento, joven. Aquí la única hoja que corta es la mía. ¿Qué pretende?»",
        },
        options: [
          {
            id: "cortar",
            say: { A: "Es para cortar la empanada. Quiero probar dos sabores.", B: "Es para partir la empanada en dos. Quiero probar dos sabores.", C: "Es para partir una empanada por la mitad. Dos sabores, un solo precio, esa es mi idea." },
            reply: { A: "Don Aurelio no baja la espátula. «Mis empanadas se parten con la mano. Guarde eso.»", B: "Don Aurelio sigue detrás de la parrilla. «Mis empanadas se parten con la mano, como siempre. Guarde eso y hablamos.»", C: "Don Aurelio no baja la guardia. «Cuarenta años partiendo empanadas con la mano. Guarde eso y le enseño cómo.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "guardar",
            act: { A: "Guardas el cuchillo.", B: "Guardas el cuchillo en el bolsillo.", C: "Guardas el cuchillo y muestras las manos vacías." },
            say: { A: "Perdone. Ya lo guardé. Solo quiero empanadas.", B: "Perdone, ya está guardado. Solo vine por empanadas.", C: "Perdone, ya está guardado. Vine por empanadas, no por problemas." },
            reply: { A: "Don Aurelio baja la espátula despacio. «Qué susto. ¿Cuántas quiere?»", B: "Don Aurelio baja la espátula poco a poco. «Qué susto me dio. Bueno… ¿cuántas quiere?»", C: "Don Aurelio baja la espátula sin perderte de vista. «Casi me saca del negocio. Bueno, ¿cuántas?»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "todas",
            say: { A: "Deme todas las empanadas. Ahora.", B: "Deme todas las empanadas. Y rápido.", C: "Todas las empanadas en una bolsa. Y sin comentarios." },
            reply: { A: "Don Aurelio grita: «¡Policía! ¡Me roban!» Todo el mercado mira.", B: "Don Aurelio grita a pleno pulmón: «¡Policía! ¡Me están robando!» Todo el mercado se gira.", C: "Don Aurelio usa su voz de locutor para gritar «¡policía!». El mercado entero se vuelve hacia ti." },
            mood: "terror", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-calma": {
        who: "aurelio", mood: "worried",
        line: {
          A: "Don Aurelio sigue detrás de la parrilla. «Bueno. Hablamos, pero el cuchillo guardado. ¿Qué quiere?»",
          B: "Don Aurelio no sale de detrás de la parrilla. «Bueno, hablamos, pero con ese cuchillo guardado. ¿Qué va a ser?»",
          C: "Don Aurelio sigue parapetado tras la parrilla. «Negociamos, pero el cuchillo se queda donde está. ¿Qué va a ser?»",
        },
        options: [
          {
            id: "cebolla",
            say: { A: "¿Y si le ayudo a picar cebolla con mi cuchillo?", B: "¿Y si le ayudo a picar cebolla? Mi cuchillo corta muy bien.", C: "Propongo paz: le pico la cebolla con mi cuchillo y usted me paga en empanadas." },
            reply: { A: "Don Aurelio mira el cuchillo con otros ojos. «Mmm… ¿Corta bien? Pase atrás.»", B: "Don Aurelio mira el cuchillo con interés profesional. «¿Corta fino? Bueno… Pase atrás. Pero lo vigilo.»", C: "Don Aurelio evalúa la hoja como un chef. «Si corta fino, pase atrás. Tengo diez kilos de cebolla y un ojo puesto en usted.»" },
            mood: "smile", end: "cuchillo-cebolla",
          },
          {
            id: "carne",
            say: { A: "Una de carne, por favor. Y perdón por el susto.", B: "Una de carne, por favor. Y perdone el susto de antes.", C: "Una de carne, por favor. Y disculpe el susto, que no era mi intención." },
            reply: { A: "Don Aurelio te da la empanada con cuidado. «Dos monedas. Y no saque eso más.»", B: "Don Aurelio te da la empanada sin acercarse mucho. «Dos monedas. Y el cuchillo, en casa la próxima vez.»", C: "Don Aurelio te entrega la empanada con el brazo estirado. «Dos monedas. Y la próxima vez, el cuchillo se queda en casa.»" },
            mood: "neutral", end: "cuchillo-compra",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Perdone.", B: "Mejor me voy. Perdone el malentendido.", C: "Mejor me retiro antes de empeorar las cosas. Perdone." },
            reply: { A: "Don Aurelio asiente. No dice nada.", B: "Don Aurelio asiente sin decir palabra, con la espátula todavía en la mano.", C: "Don Aurelio asiente en silencio, espátula en mano, hasta que te pierde de vista." },
            mood: "worried", end: "nada",
          },
        ],
      },
      "pistola-inicio": {
        who: "aurelio", mood: "terror",
        line: {
          A: "Un señor con delantal ve tu pistola y levanta las manos con la espátula. «¡No, por favor! ¡Llévese las empanadas, la caja, todo!»",
          B: "Un señor con bigote ve la pistola en tu cintura y levanta las manos, espátula incluida. «¡No, por favor! Llévese las empanadas, la caja, lo que quiera. ¡Pero no dispare!»",
          C: "Un señor de bigote detecta la pistola antes que tu cara y alza las manos con la espátula en alto. «Empanadas, caja, parrilla: todo suyo. Pero esa cosa, guardada, por favor.»",
        },
        options: [
          {
            id: "comprar",
            say: { A: "No quiero robar. Quiero comprar. Baje las manos.", B: "No vengo a robar, vengo a comprar. Baje las manos, por favor.", C: "No es un robo, es una compra. Baje las manos, que así no me puede cobrar." },
            reply: { A: "Don Aurelio baja las manos un poco. «¿Comprar? ¿Con eso?»", B: "Don Aurelio baja las manos a medias. «¿Comprar? ¿Con una pistola en la cintura? Qué manera de pedir.»", C: "Don Aurelio baja las manos despacio. «¿Comprar? Es la primera vez que un cliente viene armado. Qué noche.»" },
            mood: "scared", next: "pistola-miedo",
          },
          {
            id: "guardar",
            act: { A: "Guardas la pistola en la chaqueta.", B: "Guardas la pistola dentro de la chaqueta.", C: "Guardas la pistola dentro de la chaqueta y muestras las palmas." },
            say: { A: "Perdone. Ya está. Solo quiero una empanada.", B: "Perdone, ya está guardada. Solo quería una empanada.", C: "Perdone. Guardada. Lo único que quiero es una empanada." },
            reply: { A: "Don Aurelio respira. «Una empanada. Bueno. Con las manos temblando se la pongo.»", B: "Don Aurelio suelta el aire. «Una empanada. Bueno. Perdone si se la pongo con las manos temblando.»", C: "Don Aurelio recupera el aliento. «Una empanada. Se la sirvo con el pulso que me queda.»" },
            mood: "scared", next: "pistola-miedo",
          },
          {
            id: "caja",
            say: { A: "La caja. Rápido.", B: "Deme la caja. Rápido.", C: "La caja, sin discursos. Rápido." },
            reply: { A: "Don Aurelio da la caja. Detrás de ti suena una sirena. Una patrulla.", B: "Don Aurelio te da la caja con las manos temblando. Detrás de ti, una sirena: la patrulla del mercado.", C: "Don Aurelio entrega la caja temblando. A tu espalda, una sirena corta la música: la patrulla del mercado." },
            mood: "terror", end: "pistola-patrulla",
          },
        ],
      },
      "pistola-miedo": {
        who: "aurelio", mood: "scared",
        line: {
          A: "Don Aurelio mira a los otros puestos. «Los vecinos ya llamaron a la policía. ¿Qué quiere hacer?»",
          B: "Don Aurelio mira de reojo a los otros puestos. «Le aviso: los vecinos ya llamaron a la policía. Usted decide qué hace.»",
          C: "Don Aurelio echa un vistazo a los puestos vecinos. «Le adelanto que los vecinos ya han llamado a la policía. Lo que haga ahora es cosa suya.»",
        },
        options: [
          {
            id: "doble",
            say: { A: "Pago el doble por el susto. Y espero a la policía aquí.", B: "Le pago el doble por el susto. Y espero a la policía aquí, tranquilo.", C: "Le pago el doble por el susto y espero aquí a la policía, con las manos a la vista." },
            reply: { A: "Don Aurelio asiente. «Eso me gusta más. Tome, una de carne.»", B: "Don Aurelio asiente, más tranquilo. «Eso ya me gusta más. Tome, una de carne, recién hecha.»", C: "Don Aurelio asiente con algo de respeto. «Así se arreglan las cosas. Tome, una de carne. Invito yo el susto.»" },
            mood: "neutral", end: "pistola-doble",
          },
          {
            id: "huir",
            say: { A: "Entonces me voy. Perdone.", B: "Entonces mejor me voy antes de que lleguen. Perdone.", C: "En ese caso, me retiro antes de que lleguen. Perdone las molestias." },
            reply: { A: "Don Aurelio no te detiene. Corres entre los puestos.", B: "Don Aurelio no intenta detenerte. Sales corriendo entre los puestos, sin empanadas.", C: "Don Aurelio no mueve un dedo. Desapareces entre los puestos con las manos vacías." },
            mood: "scared", end: "pistola-huida",
          },
          {
            id: "legal",
            say: { A: "Es legal. Tengo permiso. No pasa nada.", B: "Es legal, tengo permiso. No tiene que preocuparse.", C: "Está todo en regla, tengo permiso. No hay motivo para alarmarse." },
            reply: { A: "Don Aurelio señala la sirena. «Explíqueselo a ellos.»", B: "Don Aurelio señala las luces azules que llegan. «Pues explíqueselo a ellos, que yo vendo empanadas.»", C: "Don Aurelio señala la patrulla que se acerca. «Con ellos lo discute. Yo solo vendo empanadas.»" },
            mood: "scared", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "aurelio", mood: "terror",
        line: {
          A: "Un señor con delantal ve tu granada y grita: «¡Una granada! ¡Apaguen las parrillas! ¡Fuego y granada, no!» Todo el mercado grita.",
          B: "Un señor con bigote ve la granada en tu mano y grita con voz de locutor: «¡Una granada! ¡Apaguen las parrillas, todos!» En segundos, el mercado entero grita con él.",
          C: "Un señor de bigote ve la granada y, con la potencia de cuarenta años gritando precios, anuncia: «¡Granada! ¡Parrillas apagadas, ya!» El mercado entra en pánico puesto por puesto.",
        },
        options: [
          {
            id: "pisapapeles",
            say: { A: "¡Es un pisapapeles! ¡No explota!", B: "¡Tranquilo, es un pisapapeles! ¡No explota!", C: "¡Calma, es un pisapapeles! Decorativo. Casi seguro." },
            reply: { A: "Don Aurelio se esconde detrás de la parrilla. «¡¿Casi?! ¡Guárdelo!»", B: "Don Aurelio se agacha detrás de la parrilla. «¿Casi seguro? ¡Guarde eso y después hablamos!»", C: "Don Aurelio desaparece tras la parrilla. «¿Casi? ¡Guarde eso antes de que mis empanadas vuelen!»" },
            mood: "scared", next: "granada-caos",
          },
          {
            id: "empanada",
            say: { A: "Solo quiero una empanada. De carne.", B: "Solo quería una empanada de carne, nada más.", C: "Vine por una empanada de carne. No sé por qué tanto drama." },
            reply: { A: "Don Aurelio grita: «¡Guarde la granada y le doy diez!»", B: "Don Aurelio, detrás de la parrilla, grita: «¡Guarde esa granada y le doy diez empanadas!»", C: "Don Aurelio, parapetado, negocia a gritos: «¡Guarde la granada y le regalo la bandeja entera!»" },
            mood: "scared", next: "granada-caos",
          },
          {
            id: "correr",
            say: { A: "¡Sí! ¡Corran todos!", B: "¡Tiene razón! ¡Corran todos!", C: "¡Buena idea! ¡Evacuen, evacuen!" },
            reply: { A: "El mercado se vacía. Las parrillas se apagan. Don Aurelio corre también.", B: "El mercado se vacía en un minuto. Las parrillas se apagan y Don Aurelio corre con su caja bajo el brazo.", C: "El mercado se vacía en un minuto. Don Aurelio abandona la parrilla por primera vez en cuarenta años, con la caja bajo el brazo." },
            mood: "terror", end: "granada-evacuacion",
          },
        ],
      },
      "granada-caos": {
        who: "aurelio", mood: "scared",
        line: {
          A: "Don Aurelio asoma la cabeza. Los otros vendedores gritan «¡policía!». «Guárdela. Ahora. Después hablamos.»",
          B: "Don Aurelio asoma la cabeza por encima de la parrilla. Los vendedores vecinos piden policía a gritos. «Guárdela ahora mismo. Después, si quiere, hablamos de empanadas.»",
          C: "Don Aurelio asoma el bigote por encima de la parrilla mientras los vecinos piden policía. «Guárdela ya. Luego discutimos si merece una empanada o un psiquiatra.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la granada en la mochila.", B: "Guardas la granada en el fondo de la mochila.", C: "Guardas la granada en lo más hondo de la mochila." },
            say: { A: "Ya está. Una de carne, por favor.", B: "Listo, guardada. Una de carne, por favor.", C: "Guardada. Ahora sí: una de carne, por favor." },
            reply: { A: "Don Aurelio te da una empanada muy rápido. «Gratis. Váyase.»", B: "Don Aurelio te pone una empanada en la mano a toda velocidad. «Invita la casa. Y váyase, por favor.»", C: "Don Aurelio te entrega una empanada en tiempo récord. «Invita la casa. La venta más rápida de mi vida. Váyase.»" },
            mood: "worried", end: "granada-compra",
          },
          {
            id: "policia",
            say: { A: "Llame a quien quiera. No hago nada malo.", B: "Llame a quien quiera. No estoy haciendo nada malo.", C: "Llame a quien quiera. Llevar una granada no es delito. Creo." },
            reply: { A: "Don Aurelio levanta la espátula. «¡Aquí está!» Llega la policía.", B: "Don Aurelio levanta la espátula como una bandera. «¡Aquí, aquí está!» Dos policías corren hacia ti.", C: "Don Aurelio agita la espátula como un semáforo. «¡Aquí, el de la granada!» Dos policías llegan corriendo." },
            mood: "terror", end: "granada-policia",
          },
          {
            id: "lejos",
            say: { A: "Mejor me la llevo lejos. Perdone.", B: "Mejor me la llevo lejos de aquí. Perdone el susto.", C: "Mejor la alejo de sus empanadas. Perdone el caos." },
            reply: { A: "Don Aurelio no dice nada. Sigue escondido.", B: "Don Aurelio no contesta. Sigue agachado hasta que te alejas.", C: "Don Aurelio no responde. Sigue tras la parrilla hasta que desapareces." },
            mood: "worried", end: "nada",
          },
        ],
      },
      "gas-inicio": {
        who: "aurelio", mood: "surprised",
        line: {
          A: "Sales del humo con el gas pimienta en la mano. Un señor con delantal te mira. «¿Gas pimienta? Yo también tengo, joven. Y ají. ¿Qué quiere?»",
          B: "Sales de la nube de humo con el gas pimienta en la mano. Un señor con bigote te mira sin asustarse. «¿Gas pimienta? Yo también tengo uno aquí abajo, joven. Y ají picante. ¿Qué va a ser?»",
          C: "Emerges del humo con el gas pimienta en la mano y un señor de bigote te observa, nada impresionado. «¿Gas pimienta? Tengo uno bajo el mostrador y tres frascos de ají. Aquí nadie se intoxica gratis. ¿Qué va a ser?»",
        },
        options: [
          {
            id: "humo",
            say: { A: "Perdone. El humo me asustó. No veía nada.", B: "Perdone, es que el humo me asustó. No veía nada.", C: "Perdone, el humo me puso en alerta. Salí sin ver nada y con el gas en la mano." },
            reply: { A: "Don Aurelio se ríe. «El humo es mío. No muerde. Guarde eso.»", B: "Don Aurelio se ríe. «El humo es de mi parrilla y no muerde. Guarde eso y hablamos.»", C: "Don Aurelio suelta una carcajada. «Ese humo lleva cuarenta años sin morder a nadie. Guarde eso y hablamos como gente.»" },
            mood: "smile", next: "gas-charla",
          },
          {
            id: "usted",
            say: { A: "¿Usted también lleva gas? ¿Por qué?", B: "¿Usted también tiene gas pimienta? ¿Por qué?", C: "¿Un vendedor de empanadas con gas pimienta? ¿Tan mal está la cosa?" },
            reply: { A: "Don Aurelio baja la voz. «De noche hay ladrones. El mes pasado me robaron la caja.»", B: "Don Aurelio baja la voz. «De noche pasan cosas. El mes pasado me robaron la caja entera, joven.»", C: "Don Aurelio baja la voz, cosa rara. «El mes pasado me llevaron la caja entera. Desde entonces, pimienta por partida doble.»" },
            mood: "worried", next: "gas-charla",
          },
          {
            id: "alejese",
            say: { A: "Aléjese. No me gusta la gente que grita.", B: "Aléjese de mí. No me gusta que me griten.", C: "Mantenga la distancia. No me gusta la gente que grita tan cerca." },
            reply: { A: "Don Aurelio cruza los brazos. «Aquí no le vendo nada. Circule.»", B: "Don Aurelio cruza los brazos. «Pues en este puesto no se le vende. Circule, joven.»", C: "Don Aurelio cruza los brazos con dignidad. «Aquí no se sirve a quien apunta. Circule.»" },
            mood: "angry", end: "gas-rechazo",
          },
        ],
      },
      "gas-charla": {
        who: "aurelio", mood: "neutral",
        line: {
          A: "Don Aurelio señala los otros puestos. «Todos llevamos algo. Es el mercado de noche. Bueno, ¿qué le pongo?»",
          B: "Don Aurelio señala los puestos vecinos. «Aquí todos llevamos algo bajo el mostrador. Es el mercado de noche, joven. Bueno, ¿qué le pongo?»",
          C: "Don Aurelio abarca los puestos con un gesto. «Cada mostrador de este mercado esconde algo. Es la noche. Bueno, ¿qué le pongo?»",
        },
        options: [
          {
            id: "robo",
            say: { A: "¿Cómo fue el robo? ¿Qué pasó?", B: "¿Y cómo fue el robo? ¿Qué pasó exactamente?", C: "Cuénteme lo del robo. ¿Cómo ocurrió?" },
            reply: { A: "Don Aurelio se sienta. «Dos chicos. Uno pidió empanadas y el otro tomó la caja. Siéntese, le cuento.»", B: "Don Aurelio se sienta en un cajón. «Dos chicos. Uno me distrajo pidiendo empanadas y el otro se llevó la caja. Siéntese, se lo cuento con detalle.»", C: "Don Aurelio se sienta en un cajón, cosa inédita. «Dos chicos, un pedido falso y la caja desaparecida en diez segundos. Siéntese, que la historia tiene gracia ahora.»" },
            mood: "sad", end: "gas-historia",
          },
          {
            id: "especial",
            act: { A: "Guardas el gas.", B: "Guardas el gas pimienta.", C: "Guardas el gas pimienta con un gesto de disculpa." },
            say: { A: "Ya guardé el gas. Una especial, por favor.", B: "Ya guardé el gas. Póngame una especial, por favor.", C: "Gas guardado. Una especial, por favor, que ya me he ganado la cena." },
            reply: { A: "Don Aurelio sonríe. «Así me gusta. Cuidado, quema.»", B: "Don Aurelio sonríe y te da una empanada humeante. «Así me gusta. Cuidado, que quema.»", C: "Don Aurelio te entrega una empanada humeante. «Desarmado se come mejor. Cuidado, que quema.»" },
            mood: "smile", end: "gas-compra",
          },
          {
            id: "consejo",
            say: { A: "Un consejo: ponga más luz en el puesto.", B: "Un consejo: ponga más luz en el puesto. Los ladrones odian la luz.", C: "Si me permite un consejo: más luz en el puesto. Los ladrones prefieren la sombra." },
            reply: { A: "Don Aurelio se ríe. «Mi mejor defensa es el ají. Pruebe una.»", B: "Don Aurelio se ríe. «Mi mejor defensa es la pimienta de mis empanadas. Pruebe una y verá.»", C: "Don Aurelio se ríe con ganas. «Mi sistema de seguridad es el ají de la especial. Pruebe una y entenderá.»" },
            mood: "laugh", end: "gas-consejo",
          },
        ],
      },
      "lapiz-inicio": {
        who: "aurelio", mood: "worried",
        line: {
          A: "Un señor con delantal ve tu lápiz y deja de gritar. «¿Un lápiz? ¿Es periodista? ¿Inspector? Aquí todo está en regla.»",
          B: "Un señor con bigote ve tu lápiz y se calla de golpe. «¿Un lápiz y papel? ¿Es periodista? ¿Inspector? Le aviso que aquí todo está en regla.»",
          C: "Un señor de bigote ve el lápiz y pierde la voz de locutor. «¿Lápiz y papel a estas horas? ¿Periodista, inspector, crítico? Aquí todo está en regla, conste.»",
        },
        options: [
          {
            id: "receta",
            say: { A: "No, no. Quiero apuntar su receta.", B: "No, nada de eso. Quiero apuntar su receta.", C: "Nada de eso. Solo quiero anotar su receta para la posteridad." },
            reply: { A: "Don Aurelio respira. «Ah, bueno. La receta no, pero el pedido sí.»", B: "Don Aurelio respira aliviado. «Ah, bueno. La receta no se escribe, pero el pedido sí.»", C: "Don Aurelio recupera el color. «Ah, menos mal. La receta no sale de aquí, pero el pedido se lo apunto encantado.»" },
            mood: "smile", next: "lapiz-receta",
          },
          {
            id: "inspector",
            act: { A: "Escribes algo en el papel, muy serio.", B: "Escribes algo en el papel con cara muy seria.", C: "Anotas algo en el papel con gesto de funcionario." },
            say: { A: "Soy inspector. ¿Dónde está el extintor?", B: "Inspección sanitaria. ¿Dónde tiene el extintor?", C: "Inspección nocturna. Primera pregunta: ¿dónde está el extintor?" },
            reply: { A: "Don Aurelio busca papeles. «¡Aquí! ¡Todo en regla! ¡Mire!»", B: "Don Aurelio saca una carpeta de debajo del mostrador. «¡Aquí tiene todo! ¡Permisos, extintor, todo!»", C: "Don Aurelio saca una carpeta como quien saca un arma. «¡Permisos, extintor, certificados! ¡Cuarenta años sin una multa!»" },
            mood: "scared", next: "lapiz-inspector",
          },
          {
            id: "cartel",
            say: { A: "Su cartel no se lee. Le escribo uno nuevo.", B: "Su cartel casi no se lee. ¿Le escribo uno nuevo?", C: "Su cartel es ilegible. Le escribo uno nuevo, sin cobrar." },
            reply: { A: "Don Aurelio se ríe. «¡Ah, es eso! Sí, escriba. Dos monedas cada una.»", B: "Don Aurelio se ríe, aliviado. «¡Ah, era eso! Escriba: dos monedas cada una, tres por cinco.»", C: "Don Aurelio suelta el aire. «¡Era eso! Escriba grande: dos monedas, tres por cinco. Y ponga «las mejores».»" },
            mood: "smile", next: "lapiz-receta",
          },
        ],
      },
      "lapiz-receta": {
        who: "aurelio", mood: "smile",
        line: {
          A: "Don Aurelio mira tu papel. «Bueno. ¿Qué escribe? ¿Un pedido o la receta?»",
          B: "Don Aurelio mira tu papel con curiosidad. «A ver, ¿qué va a escribir? ¿Un pedido o la receta secreta?»",
          C: "Don Aurelio observa el papel con recelo divertido. «Decida: ¿apunta un pedido o intenta robarme la receta?»",
        },
        options: [
          {
            id: "dicte",
            say: { A: "Dicte la receta. Yo escribo rápido.", B: "Dícteme la receta. Escribo muy rápido.", C: "Dícteme la receta de la especial. Escribo rápido y olvido despacio." },
            reply: { A: "Don Aurelio dicta: «Harina, amor, y un secreto». Se ríe.", B: "Don Aurelio dicta muy serio: «Harina, carne, amor y un secreto que no se dicta». Y se ríe.", C: "Don Aurelio dicta con solemnidad: «Harina, carne, cebolla, amor y un ingrediente que no cabe en un papel». Y se ríe." },
            mood: "laugh", end: "lapiz-secreto",
          },
          {
            id: "pedido",
            act: { A: "Escribes el pedido.", B: "Escribes el pedido en el papel.", C: "Escribes el pedido con letra clara." },
            say: { A: "Pedido: tres especiales. Firmado.", B: "Pedido por escrito: tres especiales. Firmado y fechado.", C: "Pedido formal: tres especiales. Firmado, fechado y sin derecho a devolución." },
            reply: { A: "Don Aurelio toma el papel. «¡Mi primer pedido escrito! Lo guardo.»", B: "Don Aurelio toma el papel con respeto. «¡Mi primer pedido por escrito en cuarenta años! Lo enmarco.»", C: "Don Aurelio lee el papel con orgullo. «Cuarenta años y mi primer pedido por escrito. Esto va al marco.»" },
            mood: "smile", end: "lapiz-pedido",
          },
          {
            id: "sabores",
            say: { A: "Primero quiero elegir. ¿Qué tiene?", B: "Antes de escribir, quiero elegir. ¿Qué sabores tiene?", C: "Antes de dejar nada por escrito, quiero ver qué sabores tiene." },
            reply: { A: "Don Aurelio abre el horno. «Carne, pollo, queso y la especial.»", B: "Don Aurelio abre el horno. «Carne, pollo, queso con cebolla y la especial, que está saliendo.»", C: "Don Aurelio abre el horno con teatralidad. «Carne, pollo, queso con cebolla y la especial, recién nacida.»" },
            mood: "smile", next: "sabores",
          },
        ],
      },
      "lapiz-inspector": {
        who: "aurelio", mood: "scared",
        line: {
          A: "Don Aurelio tiene la carpeta abierta. Suda. «Mire, mire. Todo en regla. ¿Qué más necesita?»",
          B: "Don Aurelio sostiene la carpeta abierta y suda más que la parrilla. «Mire, todo está en regla. ¿Qué más necesita, señor inspector?»",
          C: "Don Aurelio sostiene la carpeta abierta con manos temblorosas. «Todo en regla, como ve. ¿Qué más necesita la inspección?»",
        },
        options: [
          {
            id: "broma",
            say: { A: "Era broma. No soy inspector. Perdone.", B: "Era una broma, no soy inspector. Perdone.", C: "Confieso: era broma. No soy inspector ni nada parecido. Perdone." },
            reply: { A: "Don Aurelio cierra la carpeta. «¡Casi me mata! Para usted, precio doble.» Y se ríe.", B: "Don Aurelio cierra la carpeta de golpe. «¡Casi me da un infarto! Para usted, precio doble.» Y se ríe.", C: "Don Aurelio cierra la carpeta. «Diez años de vida me ha quitado. Precio doble, por bromista.» Y suelta una carcajada." },
            mood: "laugh", end: "lapiz-broma",
          },
          {
            id: "aprobado",
            act: { A: "Escribes «Aprobado» en el papel.", B: "Escribes «Aprobado» en grande y firmas.", C: "Escribes «Aprobado con honores» y firmas con floritura." },
            say: { A: "Todo bien. Aprobado. Felicidades.", B: "Todo perfecto. Aprobado. Felicidades.", C: "Impecable. Aprobado con honores. Felicidades." },
            reply: { A: "Don Aurelio cuelga el papel en el puesto. «¡Miren! ¡Aprobado!»", B: "Don Aurelio cuelga tu papel en el puesto como un diploma. «¡Miren todos! ¡Aprobado!»", C: "Don Aurelio cuelga tu nota junto al cartel de precios. «¡Aprobado con honores! ¡Que lo vea todo el mercado!»" },
            mood: "smile", end: "lapiz-aprobado",
          },
          {
            id: "extintor",
            say: { A: "Falta el extintor. Es grave.", B: "No veo el extintor. Eso es grave.", C: "El extintor brilla por su ausencia. Es una falta grave." },
            reply: { A: "Don Aurelio se enfada. «¡Está ahí! ¡Y usted no es inspector! ¡Fuera!»", B: "Don Aurelio se pone rojo. «¡Está ahí mismo! ¡Y usted no es inspector ni nada! ¡Fuera de mi puesto!»", C: "Don Aurelio estalla. «¡Está ahí, debajo de sus narices! ¡Y usted no es inspector! ¡Fuera!»" },
            mood: "furious", end: "lapiz-enojado",
          },
        ],
      },
      "libro-inicio": {
        who: "aurelio", mood: "laugh",
        line: {
          A: "Un señor con delantal ve tu libro y se ríe mucho. «¿Un libro? ¿Aquí, de noche, con el humo? ¡Joven, aquí se come, no se lee!»",
          B: "Un señor con bigote ve tu libro y se ríe a carcajadas. «¿Un libro? ¿A estas horas, entre el humo de mi parrilla? ¡Joven, aquí se come, no se lee!»",
          C: "Un señor de bigote ve el libro bajo tu brazo y estalla en carcajadas. «¿Un libro en el mercado nocturno? ¡Aquí los únicos capítulos son de carne, pollo y queso!»",
        },
        options: [
          {
            id: "cocina",
            say: { A: "Es un libro de cocina. Busco su receta.", B: "Es un libro de cocina. Estoy buscando su receta.", C: "Es un libro de cocina. Vengo a comprobar si su receta está publicada." },
            reply: { A: "Don Aurelio deja de reír. «¿Mi receta? ¿En un libro? A ver.»", B: "Don Aurelio deja de reírse de golpe. «¿Mi receta? ¿En un libro? Enséñeme eso.»", C: "La risa de Don Aurelio se corta en seco. «¿Mi receta, publicada? Enséñeme esa página ahora mismo.»" },
            mood: "worried", next: "libro-cocina",
          },
          {
            id: "leer",
            say: { A: "Yo leo mientras como. Es mi costumbre.", B: "Yo siempre leo mientras como. Es una costumbre.", C: "Leer mientras como es mi costumbre más antigua. No la negocio." },
            reply: { A: "Don Aurelio se ríe. «¡Qué raro! Bueno, siéntese ahí.»", B: "Don Aurelio se ríe. «¡Qué cliente más raro! Bueno, siéntese ahí, lector.»", C: "Don Aurelio se ríe. «Un lector en mi puesto. Siéntese ahí, que esto hay que verlo.»" },
            mood: "laugh", next: "libro-leer",
          },
          {
            id: "trueque",
            act: { A: "Le das el libro.", B: "Le ofreces el libro.", C: "Le tiendes el libro con solemnidad." },
            say: { A: "Le cambio el libro por una empanada.", B: "Le cambio el libro por una empanada. ¿Trato?", C: "Trueque: mi libro por una empanada. Cultura por calorías." },
            reply: { A: "Don Aurelio mira el libro. «Mi nieta lee. Trato.» Te da una empanada.", B: "Don Aurelio hojea el libro. «Mi nieta lee todo lo que encuentra. Trato hecho.» Y te da una empanada.", C: "Don Aurelio hojea el libro. «Mi nieta devora libros como yo empanadas. Trato hecho.» Y te sirve una." },
            mood: "smile", end: "libro-trueque",
          },
        ],
      },
      "libro-cocina": {
        who: "aurelio", mood: "worried",
        line: {
          A: "Don Aurelio lee la página. «Esto no es mi receta. Falta algo.» Sonríe. «Bueno. ¿Qué quiere?»",
          B: "Don Aurelio lee la página con los ojos entrecerrados. «Esto no es mi receta. Le falta lo importante.» Y sonríe, tranquilo otra vez. «Bueno, ¿qué va a ser?»",
          C: "Don Aurelio lee la página y resopla con alivio. «No es mi receta. Le falta justo lo que no se escribe.» Recupera la sonrisa. «Bueno, ¿qué va a ser?»",
        },
        options: [
          {
            id: "falta",
            say: { A: "¿Qué falta? Dígame.", B: "¿Y qué le falta? Dígamelo.", C: "¿Qué le falta exactamente? Puede confiar en mí." },
            reply: { A: "Don Aurelio cierra el libro. «No. Pruebe la especial y adivine.»", B: "Don Aurelio cierra el libro con un dedo. «Ni hablar. Pruebe la especial y adivine usted mismo.»", C: "Don Aurelio cierra el libro con suavidad. «Jamás. Pruebe la especial y, si lo adivina, se lo regalo todo.»" },
            mood: "smile", end: "libro-receta",
          },
          {
            id: "trueque",
            say: { A: "Quédese el libro. Deme una empanada.", B: "Quédese el libro, así lo corrige. Deme una empanada a cambio.", C: "Quédese el libro y corrija la receta. Yo me conformo con una empanada." },
            reply: { A: "Don Aurelio se ríe. «Trato. Mi nieta lo va a corregir.»", B: "Don Aurelio se ríe. «Trato hecho. Mi nieta lo corrige con lápiz rojo.»", C: "Don Aurelio acepta el libro. «Trato. Mi nieta lo corregirá con la rabia de la familia.»" },
            mood: "smile", end: "libro-trueque",
          },
          {
            id: "sabores",
            say: { A: "Bueno, ¿qué sabores tiene?", B: "Bueno, pues dígame qué sabores tiene.", C: "Entonces olvidemos el libro. ¿Qué sabores tiene?" },
            reply: { A: "Don Aurelio abre el horno. «Carne, pollo, queso y la especial.»", B: "Don Aurelio abre el horno. «Carne, pollo, queso con cebolla y la especial, que sale ahora.»", C: "Don Aurelio abre el horno con teatralidad. «Carne, pollo, queso con cebolla y la especial, que no está en ningún libro.»" },
            mood: "smile", next: "sabores",
          },
        ],
      },
      "libro-leer": {
        who: "aurelio", mood: "smile",
        line: {
          A: "Don Aurelio te da una silla. «Bueno, lector. ¿Qué dice ese libro? Léame algo.»",
          B: "Don Aurelio te acerca una silla de plástico. «A ver, lector. ¿De qué va ese libro? Léame algo mientras cocino.»",
          C: "Don Aurelio te ofrece una silla de plástico con gesto de anfitrión. «Lector, ilústreme. ¿De qué trata? Léame algo mientras cocino.»",
        },
        options: [
          {
            id: "voz-alta",
            act: { A: "Lees una página en voz alta.", B: "Lees una página en voz alta.", C: "Lees un párrafo en voz alta, con buena dicción." },
            say: { A: "Escuche: «La noche era larga y olía a pan».", B: "Escuche esto: «La noche era larga y olía a pan recién hecho».", C: "Escuche: «La noche era larga, y el olor a pan recién hecho la hacía más corta»." },
            reply: { A: "Don Aurelio deja de cocinar. La gente escucha. «¡Más! ¡Otra página!»", B: "Don Aurelio deja la espátula. Los clientes se acercan a escuchar. «¡Siga! ¡Otra página!»", C: "Don Aurelio apaga la voz y escucha. Los clientes se arriman al puesto. «¡Otra página! ¡Esto es mejor que la radio!»" },
            mood: "love", end: "libro-lectura",
          },
          {
            id: "mesa",
            say: { A: "Deme una especial. Leo aquí, con usted.", B: "Póngame una especial. Me quedo a leer aquí, con usted.", C: "Una especial, por favor. Me quedo aquí, leyendo bajo su humo." },
            reply: { A: "Don Aurelio te da la empanada. «Mi puesto, ahora, es una biblioteca.»", B: "Don Aurelio te sirve la empanada con orgullo. «Mi puesto acaba de convertirse en biblioteca.»", C: "Don Aurelio te sirve la empanada con ceremonia. «Bienvenido a la primera biblioteca con parrilla del mercado.»" },
            mood: "smile", end: "libro-mesa",
          },
          {
            id: "sabores",
            say: { A: "Primero, la comida. ¿Qué tiene?", B: "Primero la comida, luego la lectura. ¿Qué tiene?", C: "La lectura puede esperar; el estómago, no. ¿Qué tiene?" },
            reply: { A: "Don Aurelio abre el horno. «Carne, pollo, queso y la especial.»", B: "Don Aurelio abre el horno. «Carne, pollo, queso con cebolla y la especial.»", C: "Don Aurelio abre el horno. «Carne, pollo, queso con cebolla y la especial. Elija su capítulo.»" },
            mood: "smile", next: "sabores",
          },
        ],
      },
      "corazon-inicio": {
        who: "aurelio", mood: "smitten",
        line: {
          A: "Un señor con delantal te ve con el corazón y deja de gritar. Sonríe despacio. «Ay… Esa cara. Mi Elena me miraba así.»",
          B: "Un señor con bigote te ve llegar con el corazón y, por primera vez en la noche, baja la voz. «Ay, esa cara… Así me miraba mi Elena cuando empezamos con el carrito.»",
          C: "Un señor de bigote te ve con el corazón y la voz de locutor se le apaga sola. «Qué cara trae usted. Así me miraba mi Elena, cuando este puesto era un carrito prestado.»",
        },
        options: [
          {
            id: "elena",
            say: { A: "¿Quién es Elena? Cuénteme.", B: "¿Quién era Elena? Cuénteme de ella.", C: "Hábleme de Elena. Se nota que merece la pena." },
            reply: { A: "Don Aurelio se apoya en la parrilla. «Mi esposa. La receta especial es de ella.»", B: "Don Aurelio se apoya en la parrilla y sonríe. «Mi mujer. La especial es su receta. Yo solo la repito cada noche.»", C: "Don Aurelio se apoya en la parrilla. «Mi mujer. La especial es suya; yo solo la repito cada noche para que no se vaya del todo.»" },
            mood: "love", next: "corazon-elena",
          },
          {
            id: "casa",
            say: { A: "Esto huele a casa. A una casa con amor.", B: "Esto no huele a puesto, huele a casa. A una casa con cariño.", C: "Esto no huele a negocio. Huele a cocina de casa, a alguien que quiere." },
            reply: { A: "Don Aurelio se emociona. «Huele a Elena. Ella cocinaba así.»", B: "Don Aurelio se emociona. «Huele a Elena, mi mujer. Ella cocinaba exactamente así.»", C: "Don Aurelio traga saliva. «Huele a Elena. Ella hacía esta masa, y yo la copio desde que no está.»" },
            mood: "love", next: "corazon-elena",
          },
          {
            id: "amor",
            say: { A: "Usted trabaja con amor. Se nota.", B: "Usted trabaja con amor. Se nota en todo.", C: "Usted no vende empanadas: reparte cariño con masa alrededor." },
            reply: { A: "Don Aurelio te da una empanada. «Para usted. Gratis. Por esa cara.»", B: "Don Aurelio te pone una empanada en la mano. «Para usted, gratis. Por esa cara, nada más.»", C: "Don Aurelio te envuelve una empanada. «Invita la casa. Por esa cara que trae, que es de las que se quedan.»" },
            mood: "love", end: "corazon-regalo",
          },
        ],
      },
      "corazon-elena": {
        who: "aurelio", mood: "love",
        line: {
          A: "Don Aurelio señala una foto en el puesto. «Esa es Elena. Treinta años aquí, juntos. ¿Qué más quiere saber?»",
          B: "Don Aurelio señala una foto pegada al puesto: una mujer riendo con una bandeja. «Esa es Elena. Treinta y dos años aquí, los dos. ¿Qué más quiere saber?»",
          C: "Don Aurelio señala una foto descolorida junto al cartel de precios: una mujer riendo con una bandeja. «Elena. Treinta y dos años en este puesto. Pregunte lo que quiera.»",
        },
        options: [
          {
            id: "orgullo",
            say: { A: "Ella está orgullosa de usted. Seguro.", B: "Ella estaría orgullosa de verlo aquí cada noche.", C: "Esté donde esté, Elena está orgullosa de este puesto y de usted." },
            reply: { A: "Don Aurelio sale del puesto y te abraza. «Gracias, joven. Gracias.»", B: "Don Aurelio sale de detrás de la parrilla y te abraza con el delantal manchado. «Gracias, joven. Hacía falta oírlo.»", C: "Don Aurelio abandona la parrilla y te abraza, delantal y todo. «Gracias. Nadie me lo había dicho en voz alta.»" },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "receta",
            say: { A: "¿Me enseña la receta de Elena?", B: "¿Me enseñaría la receta de Elena? Prometo guardarla.", C: "¿Me confiaría la receta de Elena? Prometo tratarla como lo que es." },
            reply: { A: "Don Aurelio mira la foto. Después te dice al oído: «Un poco de canela».", B: "Don Aurelio mira la foto un segundo y se acerca a tu oído. «Un poco de canela. Nadie lo sabe.»", C: "Don Aurelio consulta la foto con la mirada y luego susurra: «Canela. Una pizca. Es lo que nadie adivina.»" },
            mood: "love", end: "corazon-receta",
          },
          {
            id: "brindis",
            say: { A: "Una especial, por favor. Por Elena.", B: "Póngame una especial. Me la como por Elena.", C: "Una especial, por favor. Brindo por Elena, con empanada en vez de copa." },
            reply: { A: "Don Aurelio sirve dos. «Una para usted y otra para mí. Por Elena.»", B: "Don Aurelio sirve dos empanadas. «Una para usted y una para mí. Por Elena.» Y las chocan.", C: "Don Aurelio saca dos empanadas y choca la suya con la tuya. «Por Elena. Nunca brindé con empanadas, pero hoy toca.»" },
            mood: "love", end: "corazon-brindis",
          },
        ],
      },
    },
    ends: {
      "cuchillo-cebolla": { text: { A: "Picas cebolla con tu cuchillo detrás del puesto. Lloras. Don Aurelio te vigila y canta.", B: "Picas diez kilos de cebolla con tu cuchillo. Lloras, Don Aurelio canta y no te quita el ojo de encima.", C: "Tu cuchillo acaba picando cebolla bajo la mirada vigilante de Don Aurelio, que canta boleros y no se fía del todo." }, change: "sonrie", recap: "El cuchillo que asustó a Don Aurelio terminó picando cebolla." },
      "cuchillo-compra": { text: { A: "Comes la empanada lejos del puesto. Don Aurelio no te quita los ojos de encima.", B: "Comes la empanada a dos puestos de distancia. Don Aurelio no deja de mirarte mientras cocina.", C: "Comes la empanada a distancia prudente. Don Aurelio cocina sin dejar de vigilar tu bolsillo." }, change: "sonrie", recap: "Don Aurelio te vendió una empanada sin perder de vista tu cuchillo." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. Don Aurelio sigue gritando.", B: "Llega una patrulla y te quitan el cuchillo. Don Aurelio explica todo a gritos, como sus precios.", C: "La patrulla te quita el cuchillo y Don Aurelio declara con la misma potencia con que canta sus precios." }, change: "policia", recap: "Pediste todas las empanadas con el cuchillo y llegó la policía." },
      "pistola-patrulla": { text: { A: "La patrulla te rodea. Levantas las manos. Don Aurelio recupera su caja.", B: "La patrulla te rodea con las luces encendidas. Levantas las manos y Don Aurelio abraza su caja.", C: "La patrulla te cerca bajo las luces azules. Levantas las manos mientras Don Aurelio abraza su caja como a un hijo." }, change: "manos-arriba", recap: "Tu pistola en el puesto de Don Aurelio terminó con una patrulla." },
      "pistola-doble": { text: { A: "Pagas el doble. Esperas a la policía comiendo. Don Aurelio explica que fue un malentendido.", B: "Pagas el doble y esperas a la policía comiendo una empanada. Don Aurelio les dice que fue un malentendido.", C: "Pagas el doble y recibes a la policía con una empanada en la mano. Don Aurelio, generoso, lo llama malentendido." }, change: "sonrie", recap: "Pagaste el doble por el susto de la pistola." },
      "pistola-huida": { text: { A: "Corres sin empanadas. Detrás, Don Aurelio grita sus precios otra vez.", B: "Huyes entre los puestos sin empanadas. Detrás de ti, Don Aurelio vuelve a gritar sus precios, aliviado.", C: "Huyes con las manos vacías. A tu espalda, Don Aurelio recupera su voz de locutor." }, change: "huye", recap: "Huiste del puesto de Don Aurelio antes de que llegara la policía." },
      "granada-evacuacion": { text: { A: "El mercado está vacío. Las parrillas apagadas. Tú y la granada, solos.", B: "El mercado se vacía. Parrillas apagadas, luces encendidas y tú solo, con la granada y sin empanadas.", C: "Un mercado desierto, parrillas frías y tú en el centro con la granada. Ni una empanada." }, change: "corre", recap: "Don Aurelio y todo el mercado huyeron de tu granada." },
      "granada-compra": { text: { A: "Te vas con una empanada gratis. Don Aurelio te mira hasta que desapareces.", B: "Te alejas con una empanada gratis. Don Aurelio no deja de mirarte hasta que desapareces.", C: "Te alejas con una empanada gratis y la mirada de Don Aurelio clavada en la mochila." }, change: "sigue", recap: "Don Aurelio te regaló una empanada para que te fueras con tu granada." },
      "granada-policia": { text: { A: "Dos policías te llevan. Don Aurelio enciende la parrilla otra vez.", B: "Dos policías te escoltan fuera del mercado. Don Aurelio vuelve a encender la parrilla, temblando.", C: "Dos policías te escoltan fuera. Don Aurelio vuelve a encender la parrilla con manos que todavía tiemblan." }, change: "policia", recap: "La granada en el puesto de Don Aurelio terminó con la policía." },
      "gas-rechazo": { text: { A: "Don Aurelio no te vende nada. Te vas con el gas y sin empanadas.", B: "Don Aurelio se niega a venderte. Te alejas con el gas en el bolsillo y el estómago vacío.", C: "Don Aurelio te niega el servicio con dignidad. Te vas con el gas, sin empanadas y con hambre." }, change: "enojado", recap: "Don Aurelio no quiso vender a alguien que lo apuntaba con gas." },
      "gas-historia": { text: { A: "Te sientas con Don Aurelio. Te cuenta el robo. Al final se ríe.", B: "Te sientas en un cajón con Don Aurelio y escuchas la historia del robo. Al final, él se ríe.", C: "Te sientas en un cajón y Don Aurelio te cuenta el robo con todos los detalles. Al final, consigue reírse." }, change: "se-sienta", recap: "Don Aurelio te contó cómo le robaron la caja." },
      "gas-compra": { text: { A: "Comes la especial. Don Aurelio sonríe. El gas, guardado.", B: "Comes la especial junto al puesto, con el gas guardado. Don Aurelio aprueba.", C: "Comes la especial con el gas guardado. Don Aurelio te observa comer con satisfacción." }, change: "sonrie", recap: "Guardaste el gas y Don Aurelio te vendió la especial." },
      "gas-consejo": { text: { A: "Pruebas la especial. Pica mucho. Don Aurelio se ríe: «¡Esa es mi defensa!»", B: "Pruebas la especial y te arde la boca. Don Aurelio se ríe: «¡Esa es mi defensa personal!»", C: "Pruebas la especial y el ají te deja sin voz. Don Aurelio ríe: «Mi sistema de seguridad, en acción»." }, change: "sonrie", recap: "Don Aurelio te demostró que su defensa es el ají." },
      "lapiz-secreto": { text: { A: "Guardas la receta falsa. Don Aurelio se ríe mucho.", B: "Guardas la receta falsa en el bolsillo. Don Aurelio se ríe de su propia broma.", C: "Guardas una receta que no sirve para nada y Don Aurelio celebra su propio chiste." }, change: "sonrie", recap: "Don Aurelio te dictó una receta inventada." },
      "lapiz-pedido": { text: { A: "Don Aurelio cuelga tu pedido escrito en el puesto. Te da tres especiales.", B: "Don Aurelio cuelga tu pedido escrito junto a los precios y te sirve tres especiales.", C: "Tu pedido escrito queda colgado como un diploma y recibes tres especiales humeantes." }, change: "sonrie", recap: "Escribiste el primer pedido formal del puesto de Don Aurelio." },
      "lapiz-broma": { text: { A: "Don Aurelio te cobra el doble, riendo. Comes la empanada más cara del mercado.", B: "Don Aurelio te cobra el doble entre risas. Comes la empanada más cara de la historia del mercado.", C: "Don Aurelio aplica la tarifa de bromista y comes la empanada más cara que se haya vendido en este mercado." }, change: "sonrie", recap: "Tu broma de inspector le costó un susto a Don Aurelio." },
      "lapiz-aprobado": { text: { A: "Tu nota «Aprobado» cuelga en el puesto. Don Aurelio la enseña a todos.", B: "Tu nota de «Aprobado» cuelga en el puesto y Don Aurelio se la enseña a cada cliente.", C: "Tu «Aprobado con honores» preside el puesto y Don Aurelio lo exhibe como una medalla." }, change: "sonrie", recap: "Firmaste una inspección falsa que Don Aurelio colgó con orgullo." },
      "lapiz-enojado": { text: { A: "Don Aurelio te echa del puesto. Te vas sin empanadas.", B: "Don Aurelio te echa del puesto a gritos. Te alejas sin empanadas y con el lápiz en la mano.", C: "Don Aurelio te expulsa con la voz que usa para los precios. Te vas con el lápiz y sin cena." }, change: "enojado", recap: "Don Aurelio te echó por jugar al inspector." },
      "libro-trueque": { text: { A: "Don Aurelio guarda tu libro para su nieta. Tú comes la empanada.", B: "Don Aurelio guarda tu libro bajo el mostrador, para su nieta. Tú comes tu empanada.", C: "Tu libro acaba bajo el mostrador, reservado para la nieta de Don Aurelio. Tú, con tu empanada." }, change: "sonrie", recap: "Cambiaste tu libro por una empanada." },
      "libro-receta": { text: { A: "Pruebas la especial. No adivinas el secreto. Don Aurelio sonríe.", B: "Pruebas la especial e intentas adivinar el ingrediente. Fallas. Don Aurelio sonríe, satisfecho.", C: "Pruebas la especial y lanzas tres hipótesis. Ninguna acierta. Don Aurelio sonríe como un campeón." }, change: "sonrie", recap: "El libro no tenía la receta de Don Aurelio." },
      "libro-lectura": { text: { A: "Lees en voz alta. Los clientes escuchan. Don Aurelio regala empanadas.", B: "Lees tres páginas en voz alta. Los clientes escuchan y Don Aurelio regala empanadas de emoción.", C: "Lees tres páginas para el puesto entero. Don Aurelio, emocionado, reparte empanadas gratis." }, change: "sonrie", recap: "Leíste en voz alta en el puesto de Don Aurelio." },
      "libro-mesa": { text: { A: "Comes y lees en la silla del puesto. Don Aurelio cocina a tu lado.", B: "Comes y lees en la silla de plástico. Don Aurelio cocina a tu lado y te pregunta por el libro.", C: "Comes y lees bajo el humo del puesto. Don Aurelio cocina y, de vez en cuando, pregunta cómo va la historia." }, change: "se-sienta", recap: "Comiste y leíste en el puesto de Don Aurelio." },
      "corazon-regalo": { text: { A: "Te vas con una empanada gratis y la sonrisa de Don Aurelio.", B: "Te vas con una empanada gratis y la sonrisa más grande de Don Aurelio.", C: "Te vas con una empanada gratis y la sensación de haber sido adoptado por el mercado." }, change: "sonrie", recap: "Don Aurelio te regaló una empanada por tu cara de corazón." },
      "corazon-abrazo": { text: { A: "Don Aurelio te abraza mucho tiempo. Después, cocina cantando.", B: "Don Aurelio te abraza largo rato. Después vuelve a la parrilla cantando más fuerte.", C: "Don Aurelio te abraza largo rato y vuelve a la parrilla cantando como hacía tiempo." }, change: "abraza", recap: "Don Aurelio te abrazó al hablar de Elena." },
      "corazon-receta": { text: { A: "Sabes el secreto: canela. Te vas con una empanada y una promesa.", B: "Conoces el secreto de Elena: canela. Te vas con una empanada y la promesa de no contarlo.", C: "Te vas con el secreto de Elena, una empanada y un pacto de silencio que piensas cumplir." }, change: "sonrie", recap: "Don Aurelio te confió el secreto de Elena." },
      "corazon-brindis": { text: { A: "Brindan con empanadas. Por Elena. Don Aurelio llora un poco.", B: "Brindan con empanadas por Elena. Don Aurelio se seca los ojos con el delantal.", C: "Brindan con empanadas por Elena. Don Aurelio se seca los ojos con el delantal y sigue cocinando." }, change: "sonrie", recap: "Brindaste con Don Aurelio por Elena." },
      compra: { text: { A: "Comes la empanada. Está muy rica. Don Aurelio está contento.", B: "Comes la empanada junto al puesto. Está buenísima, y Don Aurelio espera tu opinión como un examen.", C: "La primera mordida te quema la lengua y te gana el corazón. Don Aurelio observa tu cara, satisfecho." }, change: "sonrie", recap: "Compraste empanadas en el puesto de Don Aurelio." },
      regalo: { text: { A: "Don Aurelio te regala una empanada. Dice: «¡Vuelve pronto!»", B: "Te vas con una empanada de regalo y la promesa de volver pronto.", C: "Te vas con una empanada de regalo y la sensación de haber sido adoptado por el mercado." }, change: "abraza", recap: "Don Aurelio te regaló una empanada." },
      cocina: { text: { A: "Pasas detrás del puesto. Cortas cebolla con Don Aurelio. Lloras mucho.", B: "Terminas detrás del puesto picando cebolla. Lloras, Don Aurelio canta y te paga en empanadas.", C: "Acabas de ayudante de cocina, llorando cebolla mientras Don Aurelio canta boleros. Pagan en empanadas." }, change: "sonrie", recap: "Picaste cebolla con Don Aurelio en su puesto." },
      nada: { text: { A: "Te vas sin empanadas. Don Aurelio sigue cocinando.", B: "Te alejas sin comprar. Detrás de ti, Don Aurelio vuelve a gritar sus precios.", C: "Te alejas con las manos vacías. El grito de «¡empanadas!» te persigue tres puestos más." }, change: "sigue", recap: "Pasaste por el puesto de Don Aurelio sin comprar." },
      policia: { text: { A: "Llega la policía. Explicas todo. Don Aurelio está nervioso.", B: "Llega un coche de policía. Tienes que explicar el malentendido delante de todo el mercado.", C: "La policía llega y todo el mercado se convierte en público. Tu explicación no recibe aplausos." }, change: "policia", recap: "Asustaste a Don Aurelio y llegó la policía." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Tienes miedo de los cuchillos?", B: "¿Qué harías si un cliente sacara un cuchillo en tu trabajo?", C: "¿Por qué un mismo objeto puede ser herramienta en una cocina y amenaza en la calle?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces si alguien quiere robarte?", B: "¿Alguna vez viviste o viste un robo y cómo reaccionaste?", C: "¿Qué pesa más ante un arma, el instinto de obedecer o el de proteger lo propio?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué haces si hay una emergencia en un mercado?", B: "¿Cómo reaccionas cuando la gente entra en pánico a tu alrededor?", C: "¿Qué nos enseñan las falsas alarmas sobre nuestras ciudades?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Es seguro tu barrio de noche?", B: "¿Qué hacen los comerciantes de tu ciudad para protegerse?", C: "¿Puede la desconfianza convertirse en una forma de convivencia?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Qué recetas escribes?", B: "¿Guardas recetas escritas a mano de tu familia?", C: "¿Qué diferencia hay entre una receta escrita y una aprendida mirando?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Lees cuando comes?", B: "¿Qué libro de cocina o de comida te gusta?", C: "¿Por qué la comida y la literatura se llevan tan bien?" } },
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿Quién cocina con amor en tu familia?", B: "¿Qué plato te recuerda a una persona querida?", C: "¿Cómo se sigue queriendo a alguien a través de lo que cocinaba?" } },
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
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "flor", mood: "scared",
        line: {
          A: "Bajo las luces, una chica toca la guitarra. Ve tu cuchillo, deja de tocar y da un paso atrás. «¡Eh! ¿Qué haces con ese cuchillo? Baja eso.»",
          B: "Bajo una cadena de luces, una chica de pelo rizado termina una canción, ve tu cuchillo y retrocede con la guitarra contra el pecho. «¡Oye! ¿Qué haces con ese cuchillo? Bájalo o llamo a la policía.»",
          C: "Una chica de pelo rizado cierra un acorde, ve el cuchillo en tu mano y retrocede hasta el borde del escenario, guitarra por delante. «¿Qué pretendes con eso? Bájalo ahora o esto termina con la policía.»",
        },
        options: [
          {
            id: "cuerda",
            say: { A: "Tu cuerda está rota. Es para cortarla.", B: "Tienes una cuerda rota. Solo quería cortarla.", C: "Tienes una cuerda rota colgando. Solo iba a cortarla, nada más." },
            reply: { A: "Flor no se acerca. «Mi cuerda es mi problema. Guarda eso.»", B: "Flor sigue a distancia. «Mi cuerda es asunto mío. Guarda eso y hablamos.»", C: "Flor no cede un centímetro. «Mi cuerda la corto yo con mis tijeras. Guarda eso y luego vemos.»" },
            mood: "worried", next: "cuchillo-tenso",
          },
          {
            id: "guardar",
            act: { A: "Guardas el cuchillo.", B: "Guardas el cuchillo en el bolsillo.", C: "Guardas el cuchillo y enseñas las manos." },
            say: { A: "Perdón. Ya está. Me gusta tu música.", B: "Perdona, ya lo guardé. Solo vine a escucharte.", C: "Perdona, ya está guardado. Vine a escuchar, no a asustar." },
            reply: { A: "Flor respira. «Qué susto. Bueno… ¿Qué quieres?»", B: "Flor respira hondo sin soltar la guitarra. «Qué susto me diste. Bueno… ¿Qué querías?»", C: "Flor suelta el aire, pero no la guitarra. «Me quitaste diez años de vida. Bueno, ¿qué querías?»" },
            mood: "worried", next: "cuchillo-tenso",
          },
          {
            id: "toca",
            say: { A: "Toca una canción. Ahora.", B: "Toca algo. Ahora mismo.", C: "Toca algo, y que sea bueno. Ahora." },
            reply: { A: "Flor toma la guitarra y corre. El público grita.", B: "Flor agarra la guitarra y sale corriendo entre los puestos. El público grita y se aparta.", C: "Flor no lo piensa: guitarra al hombro y a correr. El público grita y te abre paso, lejos de ti." },
            mood: "terror", end: "cuchillo-corre",
          },
        ],
      },
      "cuchillo-tenso": {
        who: "flor", mood: "worried",
        line: {
          A: "Flor te mira desde lejos. La gente murmura: «Tiene un cuchillo». «Bueno. ¿Qué quieres escuchar? Rápido.»",
          B: "Flor se queda a dos metros. El público murmura «tiene un cuchillo». «Bueno, dime qué quieres escuchar. Y rápido, por favor.»",
          C: "Flor mantiene la distancia mientras el público murmura lo del cuchillo. «Dime qué quieres escuchar. Rápido, que esta gente no se queda si tú te quedas.»",
        },
        options: [
          {
            id: "elige",
            say: { A: "Perdón. Elige tú. Yo escucho desde atrás.", B: "Perdona de verdad. Elige tú la canción; yo escucho desde atrás.", C: "Perdona. Elige tú; yo me quedo atrás, donde no asuste a nadie." },
            reply: { A: "Flor toca despacio. «Esta es para el del cuchillo. Que no vuelva.»", B: "Flor empieza a tocar, nerviosa. «Esta va para el del cuchillo. Que no se repita.»", C: "Flor arranca una canción con los dedos todavía rígidos. «Para el del cuchillo. Que sea la última vez.»" },
            mood: "worried", end: "cuchillo-cancion",
          },
          {
            id: "cortar",
            act: { A: "Sacas el cuchillo y cortas la cuerda rota muy rápido.", B: "Sacas el cuchillo, cortas la cuerda rota en un segundo y lo guardas.", C: "Sacas el cuchillo, cortas la cuerda rota con un gesto rápido y lo guardas al instante." },
            say: { A: "Ya está. Cuerda cortada. Me voy.", B: "Listo, cuerda cortada. Ya me voy.", C: "Hecho. Cuerda fuera. Desaparezco." },
            reply: { A: "Flor mira la guitarra. «Gracias… supongo. Vete, por favor.»", B: "Flor mira la cuerda cortada. «Gracias, supongo. Ahora vete, por favor.»", C: "Flor examina la guitarra. «Gracias, en teoría. En la práctica, vete.»" },
            mood: "worried", end: "cuchillo-cuerda",
          },
          {
            id: "proteger",
            say: { A: "Lo llevo para protegerme de noche. Es normal.", B: "Lo llevo para protegerme por la noche. Es lo normal.", C: "Lo llevo por protección nocturna. Hoy en día es lo normal." },
            reply: { A: "El vendedor de al lado llama a la policía. Flor no toca.", B: "El vendedor del puesto de al lado ya está llamando a la policía. Flor no vuelve a tocar.", C: "«Normal», repite Flor. El vendedor de al lado ya habla con la policía." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "flor", mood: "terror",
        line: {
          A: "Bajo las luces, una chica toca la guitarra. Ve tu pistola y levanta las manos. La guitarra cuelga. «No, por favor. La funda tiene diez monedas. Llévatelas.»",
          B: "Una chica de pelo rizado termina una canción, ve tu pistola y levanta las manos. La guitarra queda colgando. «No, por favor. En la funda hay diez monedas. Llévatelas y ya.»",
          C: "Una chica de pelo rizado ve la pistola antes de terminar el acorde. Alza las manos y la guitarra queda colgando de la correa. «No quiero problemas. Diez monedas en la funda. Son tuyas.»",
        },
        options: [
          {
            id: "no-dinero",
            say: { A: "No quiero tu dinero. Baja las manos. Toca.", B: "No quiero tu dinero. Baja las manos y sigue tocando.", C: "No vengo por tu dinero. Baja las manos y toca, por favor." },
            reply: { A: "Flor baja las manos un poco. «¿Tocar? ¿Con eso delante?»", B: "Flor baja las manos a medias. «¿Tocar? ¿Con una pistola delante? No me salen los acordes.»", C: "Flor baja las manos despacio. «¿Tocar? Con una pistola en primera fila se me olvidan los acordes.»" },
            mood: "scared", next: "pistola-tension",
          },
          {
            id: "guardar",
            act: { A: "Guardas la pistola.", B: "Guardas la pistola dentro de la chaqueta.", C: "Guardas la pistola en la chaqueta y muestras las palmas." },
            say: { A: "Perdón. Ya está. Solo quiero escucharte.", B: "Perdona, ya está guardada. Solo quería escucharte.", C: "Perdona. Guardada. Lo único que quiero es escucharte." },
            reply: { A: "Flor baja las manos. «Escuchar. Bueno. Pero no te acerques.»", B: "Flor baja las manos sin dejar de mirarte. «Escuchar. Bueno. Pero quédate donde estás.»", C: "Flor baja las manos con cautela. «Escuchar, dice. Bueno. Desde ahí, sin acercarte.»" },
            mood: "scared", next: "pistola-tension",
          },
          {
            id: "funda",
            say: { A: "Dame la funda. Rápido.", B: "Dame la funda con el dinero. Rápido.", C: "La funda con las monedas. Ya." },
            reply: { A: "Flor te da la funda. Detrás de ti, una sirena. Una patrulla.", B: "Flor te da la funda temblando. Detrás de ti suena una sirena: la patrulla del mercado.", C: "Flor te entrega la funda con las manos temblorosas. A tu espalda, una sirena corta la música." },
            mood: "terror", end: "pistola-patrulla",
          },
        ],
      },
      "pistola-tension": {
        who: "flor", mood: "scared",
        line: {
          A: "Flor toca con las manos temblando. El público se va. «¿Qué quieres que toque?»",
          B: "Flor coloca los dedos en la guitarra, pero le tiemblan. El público se aleja en silencio. «Dime qué quieres que toque.»",
          C: "Flor intenta tocar, pero los dedos no le responden. El público se disuelve sin ruido. «Pide lo que quieras. Rápido.»",
        },
        options: [
          {
            id: "tranquilo",
            say: { A: "Algo tranquilo. Yo me siento aquí.", B: "Algo tranquilo, por favor. Yo me siento aquí y escucho.", C: "Algo tranquilo. Me siento aquí y no me muevo." },
            reply: { A: "Flor toca la canción más triste que sabe. Nadie escucha.", B: "Flor toca la canción más triste de su repertorio. Ya no queda nadie para escucharla.", C: "Flor toca la canción más triste que conoce, para un público de una persona armada." },
            mood: "sad", end: "pistola-triste",
          },
          {
            id: "doble",
            act: { A: "Pones muchas monedas en la funda.", B: "Pones un buen puñado de monedas en la funda.", C: "Vacías el bolsillo de monedas en la funda." },
            say: { A: "Por el susto. Perdón. Me voy.", B: "Esto es por el susto. Perdona. Me voy.", C: "Por el susto, con intereses. Perdona. Me retiro." },
            reply: { A: "Flor mira las monedas. «Gracias. Pero no vuelvas.»", B: "Flor mira las monedas sin tocarlas. «Gracias. Pero no vuelvas por aquí.»", C: "Flor contempla las monedas sin tocarlas. «Gracias. Y no vuelvas, por favor.»" },
            mood: "worried", end: "pistola-propina",
          },
          {
            id: "legal",
            say: { A: "Es legal. Tengo permiso. Toca normal.", B: "Es legal, tengo permiso. Puedes tocar normal.", C: "Está todo en regla, tengo permiso. Toca con normalidad." },
            reply: { A: "El vendedor de al lado señala la patrulla. «Ya vienen.»", B: "El vendedor del puesto de al lado señala las luces azules. «Explícaselo a ellos.»", C: "«Normalidad», repite Flor. El vendedor de al lado señala la patrulla que llega." },
            mood: "scared", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "flor", mood: "terror",
        line: {
          A: "Levantas la granada como un encendedor en un concierto. Flor grita por el micrófono: «¡Una granada! ¡Todos al suelo!» La gente corre.",
          B: "Levantas la granada en alto, como quien levanta un encendedor en un concierto. Flor la ve y grita por el micrófono: «¡Una granada! ¡Todos al suelo!» El público se tira o corre.",
          C: "Alzas la granada como un encendedor en una balada. Flor la identifica al instante y grita al micrófono: «¡Granada! ¡Al suelo!» El mercado se convierte en un hormiguero pisado.",
        },
        options: [
          {
            id: "encendedor",
            say: { A: "¡Es como un encendedor! ¡Por la canción!", B: "¡Es mi encendedor! ¡Por la canción, nada más!", C: "¡Es mi versión del encendedor! ¡Era un homenaje!" },
            reply: { A: "Flor se esconde detrás del amplificador. «¡Guárdala! ¡Ahora!»", B: "Flor se agacha detrás del amplificador. «¡Un homenaje con granada! ¡Guárdala ya!»", C: "Flor desaparece tras el amplificador. «¡Homenaje! Guárdala antes de que el homenaje sea para mí.»" },
            mood: "scared", next: "granada-suelo",
          },
          {
            id: "aplauso",
            say: { A: "Es mi forma de aplaudir. ¡Bravo!", B: "Así aplaudo yo. ¡Bravo, Flor!", C: "Es mi manera de aplaudir. ¡Bravo! Demasiado, quizá." },
            reply: { A: "Flor grita desde el suelo: «¡Aplaude con las manos! ¡Guárdala!»", B: "Flor grita desde detrás del amplificador: «¡Se aplaude con las manos! ¡Guarda eso!»", C: "Flor, desde el suelo: «¡Las manos! ¡Se aplaude con las manos! ¡Guárdala!»" },
            mood: "scared", next: "granada-suelo",
          },
          {
            id: "sigue",
            say: { A: "¡Sigue tocando! ¡No pasa nada!", B: "¡Sigue tocando! ¡No pasa nada, de verdad!", C: "¡Tú sigue tocando! ¡El espectáculo debe continuar!" },
            reply: { A: "Nadie toca. Un helicóptero ilumina el mercado.", B: "Nadie toca nada. Un helicóptero aparece sobre el mercado y lo ilumina todo.", C: "El espectáculo no continúa. Un helicóptero barre el mercado con su foco." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-suelo": {
        who: "flor", mood: "scared",
        line: {
          A: "Todos están en el suelo. Flor asoma detrás del amplificador. «Guárdala. Después hablamos.»",
          B: "El público sigue en el suelo. Flor asoma la cabeza por detrás del amplificador. «Guárdala ahora mismo. Después, si quieres, hablamos.»",
          C: "El público sigue pegado al suelo. Flor asoma por detrás del amplificador. «Guárdala. Luego decidimos si te perdono o te denuncio.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la granada en la mochila.", B: "Guardas la granada en el fondo de la mochila.", C: "Guardas la granada en lo más hondo de la mochila." },
            say: { A: "Ya está. Perdón. Toca algo, por favor.", B: "Listo, guardada. Perdón. ¿Tocas algo, por favor?", C: "Guardada. Perdón por el pánico. ¿Tocas algo, por favor?" },
            reply: { A: "Flor sale despacio. Toca para la plaza vacía. Solo tú escuchas.", B: "Flor sale despacio de detrás del amplificador y toca para una plaza vacía. Solo quedas tú.", C: "Flor emerge con cautela y toca para una plaza desierta. Público: tú, y una granada guardada." },
            mood: "worried", end: "granada-concierto",
          },
          {
            id: "esperar",
            say: { A: "Esperamos a la policía. No hice nada malo.", B: "Esperemos a la policía. No he hecho nada malo.", C: "Esperemos a la policía. No he cometido ningún delito. Creo." },
            reply: { A: "Flor asiente desde el suelo. Dos policías llegan corriendo.", B: "Flor asiente sin levantarse. Dos policías llegan corriendo entre los puestos.", C: "Flor asiente sin moverse de su refugio. Dos policías llegan corriendo, bastante poco amistosos." },
            mood: "scared", end: "granada-policia",
          },
          {
            id: "huir",
            say: { A: "Mejor me voy. ¡Adiós!", B: "Mejor me voy corriendo. ¡Adiós!", C: "Lo mejor es que desaparezca. ¡Adiós!" },
            reply: { A: "Corres con la granada. Flor grita: «¡Y no vuelvas!»", B: "Sales corriendo con la granada en la mano. Flor grita: «¡Y no vuelvas!»", C: "Huyes con la granada en alto, lo que no ayuda. Flor grita: «¡Y no vuelvas nunca!»" },
            mood: "terror", end: "granada-huida",
          },
        ],
      },
      "gas-inicio": {
        who: "flor", mood: "angry",
        line: {
          A: "Alguien te empuja y sacas el gas pimienta. Flor deja de tocar. «¡Oye! ¡Guarda eso! Aquí la gente baila, no pelea.»",
          B: "Un empujón entre el público te hace sacar el gas pimienta. Flor para en seco. «¡Oye, oye! ¡Guarda eso! Aquí la gente viene a bailar, no a pelear.»",
          C: "Un empujón te pone el gas pimienta en la mano antes de pensarlo. Flor corta la canción. «¡Eh! Guarda eso. Aquí se baila, no se pelea.»",
        },
        options: [
          {
            id: "perdon",
            act: { A: "Guardas el gas.", B: "Guardas el gas pimienta.", C: "Guardas el gas con gesto de disculpa." },
            say: { A: "Perdón. Alguien me empujó. Ya está.", B: "Perdona, alguien me empujó y reaccioné mal. Ya está guardado.", C: "Perdona, un empujón y mi reflejo hicieron el resto. Guardado." },
            reply: { A: "Flor asiente. «Bueno. Sigo.» De repente, un chico agarra su funda con el dinero.", B: "Flor asiente. «Bueno, sigo.» En ese momento, un chico agarra la funda con las monedas y sale corriendo hacia ti.", C: "Flor asiente y va a seguir, pero un chico agarra la funda con las monedas y echa a correr en tu dirección." },
            mood: "surprised", next: "gas-ladron",
          },
          {
            id: "quien",
            say: { A: "¿Quién me empujó? Lo quiero ver.", B: "¿Quién me ha empujado? Que se identifique.", C: "¿Quién fue el del empujón? Que dé la cara." },
            reply: { A: "Flor señala. «¡Ese!» Un chico agarra su funda con el dinero y corre.", B: "Flor señala a un chico. «¡Ese!» Justo entonces, el chico agarra la funda con las monedas y corre hacia ti.", C: "Flor señala a un chico. «¡Ese!» Y ese, sin más, agarra la funda con las monedas y corre en tu dirección." },
            mood: "surprised", next: "gas-ladron",
          },
          {
            id: "alejense",
            say: { A: "¡Aléjense todos! ¡No me toquen!", B: "¡Aléjense todos de mí! ¡Que nadie me toque!", C: "¡Atrás todos! ¡Que nadie se acerque!" },
            reply: { A: "El público se va. Flor guarda la guitarra. «Gracias por nada.»", B: "El público se dispersa. Flor guarda la guitarra con rabia. «Gracias por arruinar la noche.»", C: "El público se evapora. Flor guarda la guitarra. «Gracias por el concierto más corto de mi vida.»" },
            mood: "angry", end: "gas-vacio",
          },
        ],
      },
      "gas-ladron": {
        who: "flor", mood: "terror",
        line: {
          A: "El ladrón corre hacia ti con la funda de Flor. Flor grita: «¡Mi dinero! ¡Es todo lo de hoy!»",
          B: "El ladrón corre directo hacia ti con la funda de Flor bajo el brazo. Flor grita: «¡Mi dinero! ¡Es todo lo de hoy! ¡Haz algo!»",
          C: "El ladrón viene hacia ti a toda velocidad con la funda de Flor. Ella grita: «¡Es todo lo de hoy! ¡Haz algo, por favor!»",
        },
        options: [
          {
            id: "gas",
            act: { A: "Sacas el gas y lo usas.", B: "Sacas el gas pimienta y rocías al ladrón.", C: "Sacas el gas pimienta y rocías al ladrón en plena carrera." },
            say: { A: "¡Alto! ¡Suelta eso!", B: "¡Alto ahí! ¡Suelta la funda!", C: "¡Alto! ¡Suelta eso ahora mismo!" },
            reply: { A: "El ladrón cae tosiendo. La funda rueda. Flor corre a recogerla.", B: "El ladrón cae al suelo tosiendo y la funda rueda. Flor corre a recogerla, con los ojos llorosos por el gas.", C: "El ladrón cae tosiendo y la funda rueda por el suelo. Flor la recoge llorando, mitad gas, mitad alivio." },
            mood: "surprised", end: "gas-heroe",
          },
          {
            id: "gritar",
            say: { A: "¡Ladrón! ¡Agárrenlo!", B: "¡Al ladrón! ¡Que alguien lo agarre!", C: "¡Ladrón! ¡Detengan a ese!" },
            reply: { A: "Dos vendedores lo agarran. Flor recupera la funda. Llega la policía.", B: "Dos vendedores lo atrapan a tres puestos de distancia. Flor recupera la funda y llega la policía.", C: "Dos vendedores lo interceptan entre las frutas. Flor recupera la funda justo cuando llega la policía." },
            mood: "surprised", end: "gas-grito",
          },
          {
            id: "nada",
            say: { A: "No es mi problema. Lo siento.", B: "No es asunto mío. Lo siento mucho.", C: "No me corresponde. Lo siento, de verdad." },
            reply: { A: "El ladrón pasa a tu lado y desaparece. Flor se sienta en el suelo.", B: "El ladrón pasa rozándote y desaparece entre los puestos. Flor se deja caer al suelo.", C: "El ladrón te esquiva sin esfuerzo y se pierde en el mercado. Flor se sienta en el suelo, vacía." },
            mood: "sad", end: "gas-escapa",
          },
        ],
      },
      "lapiz-inicio": {
        who: "flor", mood: "surprised",
        line: {
          A: "Flor termina una canción y ve tu lápiz y tu cuaderno. «¿Me escribes una crítica? ¿O una letra?»",
          B: "Flor termina la canción y se fija en tu lápiz y tu cuaderno. «Oye, ¿me estás escribiendo una crítica? ¿O es una letra?»",
          C: "Flor cierra la canción y señala tu lápiz con la púa. «Tú, el del cuaderno. ¿Crítica, letra o lista de la compra?»",
        },
        options: [
          {
            id: "letra",
            say: { A: "Una letra. Para ti. Para tu música.", B: "Una letra. Para ti, para tu música.", C: "Una letra. Nació con tu música y es tuya." },
            reply: { A: "Flor baja del escenario. «¿Para mí? Léela.»", B: "Flor baja del escenario con la guitarra. «¿Para mí? A ver, léemela.»", C: "Flor baja del escenario sin soltar la guitarra. «¿Para mí? Eso hay que oírlo. Lee.»" },
            mood: "love", next: "lapiz-letra",
          },
          {
            id: "nombre",
            say: { A: "Apunto tu nombre. Te busco en internet.", B: "Apunto tu nombre para buscarte en internet.", C: "Apunto tu nombre para buscarte después. Tengo que oírte otra vez." },
            reply: { A: "Flor se ríe. «Flor Medina. Pero mejor escríbeme algo.»", B: "Flor se ríe. «Flor Medina, con una sola canción subida. Mejor escríbeme algo tú.»", C: "Flor se ríe. «Flor Medina. En internet hay poco. Mejor escríbeme algo aquí y ahora.»" },
            mood: "smile", next: "lapiz-letra",
          },
          {
            id: "dibujo",
            act: { A: "Le enseñas el cuaderno. Es un dibujo del concierto.", B: "Le enseñas el cuaderno: un dibujo rápido del concierto.", C: "Le muestras el cuaderno: un bosquejo del concierto, luces incluidas." },
            say: { A: "Dibujo el concierto. Mira.", B: "Estoy dibujando el concierto. Mira.", C: "Dibujo el concierto desde aquí. Juzga tú." },
            reply: { A: "Flor mira el dibujo. «¡Esa soy yo! ¡Con rizos y todo!»", B: "Flor mira el dibujo y abre mucho los ojos. «¡Soy yo! ¡Con los rizos y las luces!»", C: "Flor estudia el dibujo. «Soy yo. Hasta los rizos están bien. Esto no se ve todos los días.»" },
            mood: "surprised", next: "lapiz-dibujo",
          },
        ],
      },
      "lapiz-letra": {
        who: "flor", mood: "smile",
        line: {
          A: "Flor lee tus palabras en voz baja. «Esto es bonito. ¿Qué hacemos con esto?»",
          B: "Flor lee tus palabras en voz baja, moviendo los labios. «Es bonito, de verdad. ¿Y qué hacemos con esto?»",
          C: "Flor lee la letra en silencio, dos veces. «Es bueno. Incómodamente bueno. ¿Qué hacemos con esto?»",
        },
        options: [
          {
            id: "cantala",
            say: { A: "Cántala. Ahora. Inventa la música.", B: "Cántala ahora. Inventa la melodía sobre la marcha.", C: "Cántala ahora mismo. Improvisa la melodía; la letra ya está." },
            reply: { A: "Flor prueba dos acordes y canta. La gente aplaude.", B: "Flor prueba dos acordes, cierra los ojos y canta tu letra. El público se queda quieto.", C: "Flor busca dos acordes, cierra los ojos y canta tu letra como si fuera suya. El mercado enmudece." },
            mood: "love", end: "lapiz-estreno",
          },
          {
            id: "borrador",
            say: { A: "Es un borrador. Guárdala. Termínala tú.", B: "Es solo un borrador. Quédatela y termínala tú.", C: "Es un borrador. Quédatela; el final te pertenece." },
            reply: { A: "Flor guarda el papel en la funda. «Trato. Vuelve y la escuchas.»", B: "Flor guarda el papel dentro de la funda. «Trato hecho. Vuelve en una semana y la escuchas terminada.»", C: "Flor guarda el papel en la funda. «Trato. La termino, y tú vuelves a escuchar lo que empezaste.»" },
            mood: "smile", end: "lapiz-borrador",
          },
          {
            id: "pedido",
            say: { A: "Nada. Ahora toca tú. ¿Qué tienes?", B: "Nada todavía. Ahora toca tú. ¿Qué tienes?", C: "De momento, nada. Toca tú. ¿Qué repertorio tienes?" },
            reply: { A: "Flor afina. «Cumbia, bolero o rock.»", B: "Flor afina una cuerda. «Cumbia, bolero, un poco de rock…»", C: "Flor repasa los estilos con los dedos. «Cumbia, bolero, rock, o algo mío.»" },
            mood: "smile", next: "pedido",
          },
        ],
      },
      "lapiz-dibujo": {
        who: "flor", mood: "love",
        line: {
          A: "Flor sostiene tu dibujo. «Nadie me dibujó nunca. ¿Me lo das?»",
          B: "Flor sostiene tu dibujo con cuidado. «Nunca nadie me había dibujado. ¿Me lo puedo quedar?»",
          C: "Flor sostiene el dibujo como si pesara. «Nadie me había dibujado jamás. ¿Me lo quedo?»",
        },
        options: [
          {
            id: "regalo",
            say: { A: "Es tuyo. Pégalo en la funda.", B: "Es tuyo. Pégalo en la funda, para la suerte.", C: "Es tuyo. Pégalo en la funda; que te dé suerte." },
            reply: { A: "Flor lo pega en la funda. «Mi primer retrato. Gracias.»", B: "Flor lo pega dentro de la funda, junto a las monedas. «Mi primer retrato. Gracias.»", C: "Flor lo fija en la funda con cinta. «Mi primer retrato, en mi primer museo. Gracias.»" },
            mood: "love", end: "lapiz-retrato",
          },
          {
            id: "firma",
            act: { A: "Le das el lápiz.", B: "Le ofreces el lápiz.", C: "Le tiendes el lápiz." },
            say: { A: "Fírmalo tú. Es tu primer autógrafo.", B: "Fírmalo tú. Será tu primer autógrafo.", C: "Fírmalo. Tu primer autógrafo, en tu primer retrato." },
            reply: { A: "Flor firma con cuidado. «Flor. Mi primer autógrafo. Guárdalo.»", B: "Flor firma despacio, concentrada. «Flor. Mi primer autógrafo. Guárdalo bien.»", C: "Flor firma con una letra temblorosa. «Flor. Primer autógrafo. Cuando sea famosa, valdrá algo.»" },
            mood: "smile", end: "lapiz-firma",
          },
          {
            id: "pedido",
            say: { A: "Después. Ahora toca algo.", B: "Después hablamos del dibujo. Ahora toca algo.", C: "El dibujo puede esperar. Toca algo." },
            reply: { A: "Flor afina. «Cumbia, bolero o rock.»", B: "Flor afina una cuerda. «Cumbia, bolero, un poco de rock…»", C: "Flor repasa los estilos con los dedos. «Cumbia, bolero, rock, o algo mío.»" },
            mood: "smile", next: "pedido",
          },
        ],
      },
      "libro-inicio": {
        who: "flor", mood: "smile",
        line: {
          A: "Flor termina una canción y ve tu libro. «¿Un libro en un concierto? ¿Tan mal toco?»",
          B: "Flor termina la canción y se fija en tu libro abierto. «¿Un libro en mi concierto? ¿Tan mal toco, o tan bueno es?»",
          C: "Flor cierra el acorde y señala tu libro. «¿Lectura en primera fila? O toco fatal o ese libro es extraordinario.»",
        },
        options: [
          {
            id: "poema",
            act: { A: "Abres el libro por un poema.", B: "Abres el libro por un poema corto.", C: "Abres el libro por un poema subrayado." },
            say: { A: "Es un libro de poemas. ¿Le pones música a este?", B: "Es un libro de poemas. ¿Te animas a ponerle música a este?", C: "Son poemas. ¿Te atreves a ponerle música a este?" },
            reply: { A: "Flor lee. «Qué bonito. Dame dos minutos.»", B: "Flor lee el poema en voz baja. «Es precioso. Dame dos minutos y lo tengo.»", C: "Flor lee el poema dos veces. «Es muy bueno. Dame dos minutos y un acorde menor.»" },
            mood: "love", next: "libro-poema",
          },
          {
            id: "leer",
            say: { A: "Leo mientras escucho. Me gusta así.", B: "Leo mientras te escucho. Me gusta hacer las dos cosas.", C: "Leo mientras te escucho. La combinación es perfecta." },
            reply: { A: "Flor sonríe. «Bueno. ¿Qué libro es?»", B: "Flor sonríe, intrigada. «Bueno, acepto. ¿Y qué libro es?»", C: "Flor sonríe. «Acepto el cumplido escondido. ¿Qué libro es?»" },
            mood: "smile", next: "libro-leer",
          },
          {
            id: "regalo",
            act: { A: "Le das el libro.", B: "Le ofreces el libro.", C: "Le tiendes el libro." },
            say: { A: "Te lo regalo. Para después del concierto.", B: "Te lo regalo. Para cuando termine el concierto.", C: "Es tuyo. Para las noches sin concierto." },
            reply: { A: "Flor toma el libro. «Nadie me regala libros. Gracias.»", B: "Flor toma el libro, sorprendida. «Nadie me regala libros. Me regalan cuerdas. Gracias.»", C: "Flor acepta el libro. «Me regalan cuerdas, púas, consejos. Un libro, nunca. Gracias.»" },
            mood: "love", end: "libro-regalo",
          },
        ],
      },
      "libro-poema": {
        who: "flor", mood: "smile",
        line: {
          A: "Flor toca dos acordes con el libro abierto. «Ya está. ¿Lo cantamos?»",
          B: "Flor prueba dos acordes con el libro abierto sobre la rodilla. «Ya lo tengo. ¿Lo cantamos?»",
          C: "Flor encuentra la melodía con el libro abierto sobre la rodilla. «Ya está. ¿Cómo lo hacemos?»",
        },
        options: [
          {
            id: "canta",
            say: { A: "Cántalo tú. Yo escucho.", B: "Cántalo tú. Yo escucho y aplaudo.", C: "Cántalo tú; yo me conformo con escuchar." },
            reply: { A: "Flor canta el poema. La gente baila despacio.", B: "Flor canta el poema con tu libro abierto. El público baila despacio.", C: "Flor convierte el poema en canción. El público baila despacio, como si lo conociera." },
            mood: "love", end: "libro-cancion",
          },
          {
            id: "duo",
            say: { A: "Yo leo y tú tocas.", B: "Yo leo el poema y tú tocas.", C: "Yo recito y tú pones la música." },
            reply: { A: "Lees. Flor toca. Al final, te abraza.", B: "Lees el poema mientras Flor toca. Al terminar, te abraza con la guitarra en medio.", C: "Recitas sobre su guitarra. Al acabar, Flor te abraza con la guitarra aplastada entre los dos." },
            mood: "love", end: "libro-duo",
          },
          {
            id: "micro",
            say: { A: "¿Me das el micrófono? Canto contigo.", B: "¿Me pasas el micrófono? Canto contigo.", C: "Pásame el micrófono. Lo cantamos a dos voces." },
            reply: { A: "Flor te da el micrófono. «¿Sabes la letra?»", B: "Flor te acerca el micrófono con una sonrisa traviesa. «¿Te sabes la letra o improvisamos?»", C: "Flor te tiende el micrófono con picardía. «El público aquí es exigente, pero perdona todo.»" },
            mood: "smile", next: "cantar",
          },
        ],
      },
      "libro-leer": {
        who: "flor", mood: "smile",
        line: {
          A: "Flor mira el título. «Lo conozco. ¿Qué hacemos con el libro?»",
          B: "Flor mira el título y asiente. «Ese lo leí hace años. ¿Qué hacemos con él?»",
          C: "Flor lee el título y sonríe. «Ese lo leí en el autobús, hace años. ¿Qué hacemos con él?»",
        },
        options: [
          {
            id: "pedido",
            say: { A: "Nada. Sigue tocando. ¿Qué tienes?", B: "Nada, sigue tocando. ¿Qué repertorio tienes?", C: "Nada. Tú toca. ¿Qué tienes en el repertorio?" },
            reply: { A: "Flor afina. «Cumbia, bolero o rock.»", B: "Flor afina una cuerda. «Cumbia, bolero, un poco de rock…»", C: "Flor repasa los estilos con los dedos. «Cumbia, bolero, rock, o algo mío.»" },
            mood: "smile", next: "pedido",
          },
          {
            id: "lee-tu",
            say: { A: "Lee tú una página entre canciones.", B: "Lee tú una página entre canción y canción.", C: "Lee una página tú, entre canción y canción. Sin música." },
            reply: { A: "Flor lee una página al público. Todos escuchan.", B: "Flor lee una página en voz alta. El público escucha como si fuera una canción.", C: "Flor lee una página al micrófono. El público escucha como si fuera la mejor balada de la noche." },
            mood: "smile", end: "libro-lectura",
          },
          {
            id: "mejor",
            say: { A: "El libro es mejor que tu música.", B: "La verdad, el libro es mejor que tu música.", C: "Sinceramente, el libro gana a tu música por goleada." },
            reply: { A: "Flor deja de sonreír. Guarda la guitarra.", B: "Flor deja de sonreír y guarda la guitarra sin decir nada.", C: "La sonrisa de Flor desaparece. Guarda la guitarra en silencio." },
            mood: "sad", end: "libro-ofendida",
          },
        ],
      },
      "corazon-inicio": {
        who: "flor", mood: "smitten",
        line: {
          A: "Flor te ve con el corazón y se equivoca de acorde. Sonríe. «¿Quién eres? Acabo de perder la canción.»",
          B: "Flor te ve llegar con el corazón y se le va un acorde. Sonríe sin poder evitarlo. «¿Y tú quién eres? Acabo de perder la canción por tu culpa.»",
          C: "Flor te ve con el corazón y el acorde se le deshace entre los dedos. Sonríe, desarmada. «¿Quién eres? Llevo tres años sin fallar una canción.»",
        },
        options: [
          {
            id: "enamoro",
            say: { A: "Tu música me enamoró. Perdón.", B: "Me enamoró tu música. Perdona el acorde.", C: "Tu música me enamoró antes que tú. Perdona el acorde perdido." },
            reply: { A: "Flor baja del escenario. «¿Antes que yo? Qué curioso.»", B: "Flor baja del escenario con la guitarra. «¿Antes que yo? Eso hay que discutirlo de cerca.»", C: "Flor baja del escenario sin soltar la guitarra. «¿Antes que yo? Me ofende y me encanta a la vez.»" },
            mood: "love", next: "corazon-cerca",
          },
          {
            id: "sigue",
            say: { A: "Sigue tocando. Yo te miro.", B: "Sigue tocando. Yo solo te miro.", C: "Sigue tocando. Yo me quedo aquí, sin quitarte los ojos de encima." },
            reply: { A: "Flor toca. No deja de mirarte. Al final, baja.", B: "Flor toca sin apartar los ojos de ti. Al terminar, baja del escenario.", C: "Flor toca la canción entera sin quitarte la vista de encima. Al acabar, baja." },
            mood: "love", next: "corazon-cerca",
          },
          {
            id: "duo",
            say: { A: "¿Cantamos juntos?", B: "¿Cantamos juntos la próxima?", C: "¿Y si la próxima la cantamos juntos?" },
            reply: { A: "Flor te da el micrófono. Cantan. La gente aplaude.", B: "Flor te da el micrófono sin pensarlo. Cantan juntos y el mercado aplaude.", C: "Flor te pasa el micrófono como si lo tuviera planeado. Cantan a dúo y el mercado aplaude." },
            mood: "love", end: "corazon-duo",
          },
        ],
      },
      "corazon-cerca": {
        who: "flor", mood: "love",
        line: {
          A: "Flor está muy cerca. Con guitarra. «Bueno. ¿Y ahora qué?»",
          B: "Flor está a un paso, con la guitarra entre los dos. «Bueno. ¿Y ahora qué hacemos?»",
          C: "Flor está a un paso, la guitarra como única frontera. «Bueno. ¿Y ahora qué?»",
        },
        options: [
          {
            id: "dedica",
            say: { A: "¿Me dedicas una canción?", B: "¿Me dedicarías una canción esta noche?", C: "¿Me dedicarías una canción? Solo una." },
            reply: { A: "Flor te da un beso en la mejilla. «Esta es para ti.» Y sube a cantar.", B: "Flor te da un beso en la mejilla. «Esta va para ti.» Y sube al escenario.", C: "Flor te besa la mejilla. «Esta es para ti. Y la siguiente también.» Y sube a cantar." },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "baile",
            say: { A: "¿Bailamos?", B: "¿Bailamos una?", C: "¿Bailamos? Tú pones la música, si quieres." },
            reply: { A: "Flor deja la guitarra. «Que toque otro.» Bailan.", B: "Flor deja la guitarra en la funda. «Que toque otro esta vez.» Y bailan entre los puestos.", C: "Flor apoya la guitarra. «Por una vez, que toque otro.» Y bailan entre los puestos." },
            mood: "love", end: "corazon-baile",
          },
          {
            id: "verguenza",
            say: { A: "Me da vergüenza. Mejor me voy.", B: "Me está dando vergüenza. Mejor me voy.", C: "Me puede la vergüenza. Mejor me retiro." },
            reply: { A: "Flor te da un papel con su número. «Vete. Pero escribe.»", B: "Flor te pone un papel en la mano: su número. «Vete, si quieres. Pero escribe.»", C: "Flor te da un papel con su número. «Vete. Pero escribe, que la vergüenza se cura por mensaje.»" },
            mood: "love", end: "corazon-numero",
          },
        ],
      },
    },
    ends: {
      "cuchillo-corre": { text: { A: "Flor corre con la guitarra. La gente te mira. Guardas el cuchillo.", B: "Flor huye con la guitarra y el público te deja solo. Guardas el cuchillo, tarde.", C: "Flor desaparece con la guitarra y el público te hace el vacío. Guardas el cuchillo, demasiado tarde." }, change: "corre", recap: "Flor huyó de tu cuchillo con la guitarra." },
      "cuchillo-cancion": { text: { A: "Flor toca una canción nerviosa. Tú escuchas desde atrás. Nadie se acerca a ti.", B: "Flor toca una canción con los dedos tensos. Tú escuchas desde atrás, y nadie se acerca a ti.", C: "Flor toca con los dedos rígidos y tú escuchas desde la última fila, rodeado de espacio vacío." }, change: "sonrie", recap: "Flor tocó para ti después del susto del cuchillo." },
      "cuchillo-cuerda": { text: { A: "Te vas. Flor toca con cinco cuerdas. No te mira.", B: "Te alejas. Flor sigue tocando con cinco cuerdas, sin mirarte ni una vez.", C: "Te alejas. Flor toca con cinco cuerdas y no vuelve a mirar en tu dirección." }, change: "sigue", recap: "Cortaste la cuerda de Flor y te fuiste." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. Flor guarda la guitarra.", B: "Llega la policía y te quitan el cuchillo. Flor guarda la guitarra; esta noche no toca más.", C: "La policía te quita el cuchillo delante de todo el mercado. Flor guarda la guitarra por hoy." }, change: "policia", recap: "Tu cuchillo en el concierto de Flor terminó con la policía." },
      "pistola-patrulla": { text: { A: "La patrulla te rodea. Levantas las manos. Flor recupera su funda.", B: "La patrulla te rodea con las luces encendidas. Levantas las manos y Flor recupera su funda.", C: "La patrulla te cerca bajo las luces azules. Levantas las manos mientras Flor abraza su funda." }, change: "manos-arriba", recap: "Tu pistola en el concierto de Flor terminó con una patrulla." },
      "pistola-triste": { text: { A: "Flor toca para ti, sola. Es la canción más triste. Te vas.", B: "Flor toca la canción más triste para un público de una sola persona. Te vas antes del final.", C: "Flor toca la canción más triste de su vida para ti solo. Te vas antes de que termine." }, change: "triste", recap: "Flor tocó con miedo por tu pistola." },
      "pistola-propina": { text: { A: "Dejas las monedas y te vas. Flor no las toca.", B: "Dejas las monedas y te alejas. Flor tarda mucho en tocarlas.", C: "Dejas las monedas y te vas. Flor las mira un buen rato antes de recogerlas." }, change: "sigue", recap: "Pagaste a Flor por el susto de la pistola." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina el mercado. Flor sigue en el suelo. Llega la policía.", B: "Un helicóptero ilumina el mercado vacío. Flor sigue detrás del amplificador y la policía te rodea.", C: "El helicóptero convierte el mercado en un escenario. Flor sigue tras el amplificador y la policía te rodea." }, change: "helicoptero", recap: "Tu granada en el concierto trajo un helicóptero." },
      "granada-concierto": { text: { A: "Flor toca para una plaza vacía. Solo tú escuchas. Es raro, pero bonito.", B: "Flor toca para una plaza vacía. Solo tú escuchas, con la granada guardada. Raro, pero bonito.", C: "Flor toca para una plaza desierta y un solo oyente. Lo más raro y lo más bonito de la noche." }, change: "sonrie", recap: "Flor tocó para ti sola después del pánico de la granada." },
      "granada-policia": { text: { A: "Dos policías te llevan. Flor sale de detrás del amplificador.", B: "Dos policías te escoltan fuera del mercado. Flor sale por fin de detrás del amplificador.", C: "Dos policías te escoltan fuera. Flor abandona su refugio tras el amplificador, con las piernas temblando." }, change: "policia", recap: "La granada en el concierto de Flor terminó con la policía." },
      "granada-huida": { text: { A: "Corres con la granada. Flor grita desde el suelo.", B: "Huyes con la granada en la mano. El grito de Flor te persigue por el mercado.", C: "Huyes con la granada en alto. El grito de Flor te acompaña hasta la salida." }, change: "huye", recap: "Huiste del concierto de Flor con la granada." },
      "gas-vacio": { text: { A: "El público se fue. Flor guarda la guitarra. Te quedas solo.", B: "El público se ha ido. Flor guarda la guitarra y tú te quedas solo con tu gas.", C: "El público se evaporó y Flor guarda la guitarra. Te quedas solo, con el gas y sin música." }, change: "triste", recap: "Tu gas pimienta vació el concierto de Flor." },
      "gas-heroe": { text: { A: "El ladrón tose en el suelo. Flor recupera su dinero. Te abraza llorando.", B: "El ladrón tose en el suelo y Flor recupera su dinero. Te abraza con los ojos llorosos por el gas.", C: "El ladrón tose en el suelo y Flor recupera hasta la última moneda. Te abraza, llorando por el gas y por el alivio." }, change: "cae", recap: "Detuviste con el gas al ladrón de la funda de Flor." },
      "gas-grito": { text: { A: "La policía se lleva al ladrón. Flor recupera su dinero. Te da las gracias.", B: "La policía se lleva al ladrón. Flor recupera su dinero y te da las gracias con un abrazo.", C: "La policía se lleva al ladrón y Flor recupera su dinero. Te abraza: gritaste a tiempo." }, change: "policia", recap: "Gritaste a tiempo y atraparon al ladrón de Flor." },
      "gas-escapa": { text: { A: "El ladrón escapó. Flor no tiene dinero. Te mira. Te vas.", B: "El ladrón escapó con todo. Flor te mira desde el suelo, sin palabras. Te vas.", C: "El ladrón se esfumó con la recaudación. Flor te mira desde el suelo y tú te alejas." }, change: "triste", recap: "No hiciste nada y robaron a Flor." },
      "lapiz-estreno": { text: { A: "Flor canta tu letra. La gente baila. Tú también.", B: "Flor canta tu letra con una melodía nueva. La gente baila, y tú también.", C: "Flor estrena tu letra con una melodía improvisada. El mercado baila, y tú con él." }, change: "baila", recap: "Flor cantó la letra que escribiste con tu lápiz." },
      "lapiz-borrador": { text: { A: "Flor guarda tu letra. Promete terminarla.", B: "Flor guarda tu letra en la funda y promete terminarla esta semana.", C: "Flor guarda tu borrador en la funda, junto a las monedas, y promete acabarlo." }, change: "sonrie", recap: "Flor se quedó con tu borrador de canción." },
      "lapiz-retrato": { text: { A: "Tu dibujo de Flor cuelga en su funda. Ella sigue tocando.", B: "Tu dibujo cuelga dentro de la funda de Flor. Ella toca con una sonrisa nueva.", C: "Tu retrato preside la funda de Flor. Ella toca con una sonrisa que antes no tenía." }, change: "sonrie", recap: "Dibujaste a Flor y ella se quedó el retrato." },
      "lapiz-firma": { text: { A: "Tienes el primer autógrafo de Flor. Ella se ríe.", B: "Te vas con el primer autógrafo de Flor. Ella se ríe de su propia letra.", C: "Te vas con el primer autógrafo de Flor, que se ríe de su firma temblorosa." }, change: "sonrie", recap: "Flor firmó su primer autógrafo en tu dibujo." },
      "libro-regalo": { text: { A: "Flor guarda tu libro en la funda. Toca una canción para ti.", B: "Flor guarda tu libro en la funda y toca una canción para ti.", C: "Flor guarda tu libro en la funda, junto a las monedas, y te dedica la siguiente canción." }, change: "sonrie", recap: "Le regalaste tu libro a Flor." },
      "libro-cancion": { text: { A: "Flor canta el poema de tu libro. Todos bailan despacio.", B: "Flor canta el poema de tu libro. El mercado baila despacio.", C: "Flor convierte el poema de tu libro en canción. El mercado baila despacio, sin saber por qué." }, change: "baila", recap: "Flor le puso música a un poema de tu libro." },
      "libro-duo": { text: { A: "Lees y Flor toca. Al final, te abraza.", B: "Lees el poema y Flor toca. Al final, te abraza con la guitarra en medio.", C: "Recitas sobre su guitarra. Al final, Flor te abraza con la guitarra aplastada entre los dos." }, change: "abraza", recap: "Leíste un poema mientras Flor tocaba." },
      "libro-lectura": { text: { A: "Flor lee tu libro al público. Todos escuchan.", B: "Flor lee una página de tu libro al público. Todos escuchan en silencio.", C: "Flor lee una página de tu libro al micrófono. El público escucha como a una canción." }, change: "sonrie", recap: "Flor leyó tu libro al público." },
      "libro-ofendida": { text: { A: "Flor guarda la guitarra. No toca más. Te vas con el libro.", B: "Flor guarda la guitarra y no vuelve a tocar. Te vas con tu libro y tu comentario.", C: "Flor guarda la guitarra y la noche se queda sin música. Te vas con tu libro y tu sinceridad." }, change: "triste", recap: "Ofendiste a Flor comparando su música con tu libro." },
      "corazon-duo": { text: { A: "Cantan juntos. Flor te abraza al final.", B: "Cantan juntos y Flor te abraza al terminar.", C: "Cantan a dúo. Al terminar, Flor te abraza y el mercado aplaude." }, change: "abraza", recap: "Cantaste a dúo con Flor." },
      "corazon-beso": { text: { A: "Flor te dedica una canción. Bailas. Ella sonríe.", B: "Flor te dedica una canción con nombre y apellido. Bailas y ella sonríe.", C: "Flor te dedica la canción con nombre y apellido. Bailas, y ella sonríe desde el escenario." }, change: "beso", recap: "Flor te dio un beso y te dedicó una canción." },
      "corazon-baile": { text: { A: "Bailan entre los puestos. Otro toca la guitarra.", B: "Bailan entre los puestos. Otro toca la guitarra de Flor.", C: "Bailan entre los puestos mientras otro toca la guitarra de Flor, bastante peor." }, change: "baila", recap: "Bailaste con Flor entre los puestos." },
      "corazon-numero": { text: { A: "Te vas con el número de Flor. Ella sigue tocando.", B: "Te vas con el número de Flor en el bolsillo. Ella sigue tocando.", C: "Te vas con el número de Flor en el bolsillo. Ella sigue tocando, con una sonrisa." }, change: "sonrie", recap: "Flor te dio su número." },
      dedicada: { text: { A: "Flor canta una canción para ti. Tú bailas. La gente baila contigo.", B: "Flor dice tu nombre por el micrófono y canta para ti. Acabas bailando entre los puestos.", C: "Flor te dedica la canción con nombre y apellido. No te queda otra que bailar, y el mercado te sigue." }, change: "baila", recap: "Flor te dedicó una canción y bailaste en el mercado." },
      cumbia: { text: { A: "Flor toca una cumbia. Todos bailan. Tú también.", B: "Suena la cumbia y todo el mercado baila: vendedores, clientes y hasta un perro.", C: "La cumbia contagia hasta a los más serios. Durante tres minutos, el mercado es una pista de baile." }, change: "baila", recap: "Pediste una cumbia y todo el mercado bailó." },
      aplausos: { text: { A: "La canción termina. La gente aplaude mucho.", B: "Al terminar, el público aplaude con ganas y la funda de Flor se llena de monedas.", C: "El último acorde se queda en el aire y luego llega el aplauso. La funda de Flor se llena." }, change: "sonrie", recap: "Escuchaste a Flor y aplaudiste con todo el mercado." },
      secreto: { text: { A: "Flor toca su canción nueva. Es muy bonita. Ella está feliz.", B: "Flor toca su canción por primera vez en público. Al final, sonríe aliviada y te da las gracias.", C: "Flor estrena su canción. Al acabar, te mira como quien acaba de saltar al vacío y ha aterrizado bien." }, change: "sonrie", recap: "Escuchaste la primera canción propia de Flor." },
      duo: { text: { A: "Cantas con Flor. Al final, ella te abraza.", B: "Terminas la canción con Flor. Ella te abraza y te invita a cantar otro día.", C: "Al acabar el dúo, Flor te abraza y te ofrece, medio en broma, un puesto fijo en su banda." }, change: "abraza", recap: "Cantaste a dúo con Flor." },
      timido: { text: { A: "Escuchas a Flor desde lejos. Aplaudes mucho.", B: "Te quedas escuchando desde atrás. Aplaudes más fuerte que nadie.", C: "Te quedas en segunda fila, aplaudiendo con un entusiasmo que no se atrevió a cantar." }, change: "sigue", recap: "Escuchaste a Flor, pero no te animaste a cantar." },
      corre: { text: { A: "Flor corre con su guitarra. Ya no hay música.", B: "Flor se va corriendo con la guitarra. La esquina se queda sin música.", C: "Flor desaparece entre los puestos y con ella, la música. La esquina se queda extrañamente vacía." }, change: "corre", recap: "Asustaste a Flor y se fue con su guitarra." },
      silencio: { text: { A: "Te vas. Flor no toca más esta noche.", B: "Te alejas. Flor guarda la guitarra y se sienta, triste.", C: "Te alejas. A tu espalda, Flor guarda la guitarra con una tristeza que se nota a distancia." }, change: "triste", recap: "Interrumpiste la música de Flor." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces si alguien te asusta en un concierto?", B: "¿Qué harías si vieras un cuchillo en medio de una fiesta?", C: "¿Cómo se recupera el ambiente de una fiesta después de un susto?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Te da miedo la gente armada?", B: "¿Qué harías si alguien armado te pidiera tu dinero?", C: "¿Qué cambia en una persona cuando obedece por miedo?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué haces en una emergencia?", B: "¿Alguna vez una broma tuya salió mal y qué pasó?", C: "¿Dónde está el límite entre lo absurdo y lo peligroso?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Has visto un robo?", B: "¿Qué harías si vieras a un ladrón robar a un artista callejero?", C: "¿Cuándo está justificado defenderse o defender a otro?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes canciones o poemas?", B: "¿Qué letra de canción te gustaría haber escrito?", C: "¿Qué vale más en una canción, la letra o la melodía, y por qué?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Lees con música?", B: "¿Qué poema o libro te gustaría escuchar cantado?", C: "¿Qué tienen en común un buen libro y una buena canción?" } },
      corazon: { start: "corazon-inicio", fx: "beso", speak: { A: "¿Te gusta alguien ahora?", B: "¿Alguna vez te enamoraste de alguien por su música o su arte?", C: "¿Qué papel juega la música en tus historias de amor?" } },
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
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "facundo", mood: "furious",
        line: {
          A: "Dos chicos gritan por una chaqueta sucia. El bajo ve tu cuchillo y saca el suyo. «¿Qué haces? ¿Vienes por nosotros?» El alto grita: «¡Facundo, no!»",
          B: "Dos amigos discuten a gritos por una chaqueta manchada. Facundo ve tu cuchillo y, en un segundo, saca el suyo. «¿Qué haces con eso? ¿Vienes por nosotros?» Bruno grita: «¡Facundo, guárdalo!»",
          C: "Dos amigos discuten a gritos por una chaqueta. Facundo ve tu cuchillo y saca uno propio, de cocina, con una rapidez preocupante. «¿Vienes por nosotros?» Bruno, pálido: «¡Facundo, por favor, guárdalo!»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Baja eso. Yo bajo el mío. Despacio.", B: "Baja eso y yo bajo el mío. Los dos, despacio.", C: "Baja el tuyo y yo bajo el mío. A la vez, despacio, sin héroes." },
            reply: { A: "Facundo no baja el cuchillo. «Tú primero.» Bruno se pone en medio.", B: "Facundo no baja el cuchillo. «Tú primero.» Bruno se mete entre los dos con la chaqueta.", C: "Facundo no cede. «Tú primero.» Bruno se planta entre los dos con la chaqueta como bandera." },
            mood: "scared", next: "cuchillo-duelo",
          },
          {
            id: "chaqueta",
            say: { A: "No vengo por ustedes. Es por el hilo de la chaqueta.", B: "No vengo por ustedes. Era para cortar un hilo de la chaqueta.", C: "No vengo por nadie. Solo iba a cortar un hilo de esa chaqueta, lo juro." },
            reply: { A: "Facundo no te cree. «¿Un hilo? ¿Con eso?» Bruno se pone en medio.", B: "Facundo no te cree. «¿Un hilo? ¿Con ese cuchillo?» Bruno se mete entre los dos.", C: "Facundo levanta una ceja y el cuchillo. «¿Un hilo? Qué casualidad.» Bruno se interpone." },
            mood: "scared", next: "cuchillo-duelo",
          },
          {
            id: "reto",
            say: { A: "Ven, si te atreves.", B: "Ven aquí, si te atreves.", C: "Adelante. A ver quién se atreve." },
            reply: { A: "Facundo se lanza. Bruno lo empuja. Los cuchillos caen. Nadie está herido. Llega la policía.", B: "Facundo se lanza hacia ti y Bruno lo empuja a tiempo. Los dos cuchillos caen al suelo. Nadie sangra. Alguien ya llamó a la policía.", C: "Facundo se abalanza y Bruno lo desvía de un empujón. Los dos cuchillos ruedan por el suelo. Sin heridos, pero con policía en camino." },
            mood: "furious", end: "cuchillo-pelea",
          },
        ],
      },
      "cuchillo-duelo": {
        who: "bruno", mood: "scared",
        line: {
          A: "Bruno está entre los dos con la chaqueta. «Los dos. Cuchillos al suelo. Ahora.»",
          B: "Bruno está entre los dos, con la chaqueta manchada como escudo. «Los dos, cuchillos al suelo. Ahora. Nadie se mueve.»",
          C: "Bruno se queda entre los dos, la chaqueta como único escudo. «Cuchillos al suelo, los dos. Ya. Y nadie se mueve hasta que yo lo diga.»",
        },
        options: [
          {
            id: "primero",
            act: { A: "Dejas tu cuchillo en el suelo.", B: "Dejas tu cuchillo en el suelo y das un paso atrás.", C: "Dejas tu cuchillo en el suelo y retrocedes un paso." },
            say: { A: "Yo primero. Ya está. Facundo, ahora tú.", B: "Yo primero. Listo. Facundo, te toca.", C: "Yo primero, aquí está. Facundo, tu turno." },
            reply: { A: "Facundo deja el suyo. «Es del trabajo. Soy cocinero.» Bruno respira.", B: "Facundo deja el suyo despacio. «Es del trabajo. Soy cocinero, no asesino.» Bruno respira por fin.", C: "Facundo suelta el suyo. «Es de la cocina del restaurante. Trabajo con esto.» Bruno vuelve a respirar." },
            mood: "worried", end: "cuchillo-paz",
          },
          {
            id: "el-primero",
            say: { A: "Que lo baje él primero. Él lo sacó.", B: "Que lo baje él primero, que fue él quien lo sacó.", C: "Que empiece él. Él fue quien lo sacó." },
            reply: { A: "Nadie baja nada. Pasa un minuto. Llega una patrulla.", B: "Nadie baja nada. Pasa un minuto larguísimo con Bruno en medio. Llega una patrulla.", C: "Nadie cede. Un minuto eterno con Bruno de árbitro. Una patrulla pone fin al duelo." },
            mood: "angry", end: "cuchillo-policia",
          },
          {
            id: "irse",
            act: { A: "Guardas el cuchillo despacio.", B: "Guardas el cuchillo muy despacio.", C: "Guardas el cuchillo con lentitud exagerada." },
            say: { A: "Me voy despacio. Sin problemas.", B: "Me voy despacio. No quiero problemas.", C: "Me retiro despacio. Aquí no ha pasado nada." },
            reply: { A: "Facundo baja el cuchillo. Bruno asiente. «Vete. Y gracias.»", B: "Facundo baja el cuchillo. Bruno asiente, agotado. «Vete. Y gracias por irte.»", C: "Facundo baja el cuchillo. Bruno asiente. «Vete. Es lo más útil que puedes hacer.»" },
            mood: "worried", end: "cuchillo-retirada",
          },
        ],
      },
      "pistola-inicio": {
        who: "bruno", mood: "terror",
        line: {
          A: "Dos chicos gritan por una chaqueta. Ven tu pistola. Levantan las manos. La chaqueta cae. «No queremos problemas. La chaqueta es tuya.»",
          B: "Dos amigos discuten a gritos por una chaqueta manchada. Ven tu pistola y levantan las manos a la vez. La chaqueta cae al suelo. «No queremos problemas. Llévate la chaqueta, si quieres.»",
          C: "Dos amigos discuten por una chaqueta hasta que ven tu pistola. Las manos suben en perfecta sincronía y la chaqueta cae. «No queremos problemas. La chaqueta es tuya. Ya no la queremos.»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Bajen las manos. Solo quiero saber qué pasa.", B: "Bajen las manos. Solo quería saber qué pasaba.", C: "Bajen las manos. Solo me interesa saber por qué gritaban." },
            reply: { A: "Bruno baja las manos un poco. «Por… por una chaqueta. Nada más.»", B: "Bruno baja las manos a medias. «Por una chaqueta. Una tontería. De verdad.»", C: "Bruno baja las manos despacio. «Por una chaqueta. Una tontería. Ahora lo vemos clarísimo.»" },
            mood: "scared", next: "pistola-miedo",
          },
          {
            id: "guardar",
            act: { A: "Guardas la pistola.", B: "Guardas la pistola dentro de la chaqueta.", C: "Guardas la pistola y muestras las manos." },
            say: { A: "Perdón. Ya está. ¿Qué pasa con la chaqueta?", B: "Perdonen, ya está guardada. ¿Qué pasa con la chaqueta?", C: "Perdonen, guardada. ¿Cuál es el problema con la chaqueta?" },
            reply: { A: "Facundo habla rápido. «Yo la manché. Yo pago. Todo bien.»", B: "Facundo habla a toda velocidad. «La manché yo, la pago yo, todo arreglado, no hay pelea.»", C: "Facundo suelta de corrido: «La manché yo, la pago yo, somos amigos, no hay nada que ver aquí»." },
            mood: "scared", next: "pistola-miedo",
          },
          {
            id: "callar",
            say: { A: "Dejen de gritar. Ahora.", B: "Dejen de gritar ahora mismo.", C: "Se acabaron los gritos. Ahora." },
            reply: { A: "Bruno y Facundo corren juntos. La chaqueta queda en el suelo.", B: "Bruno y Facundo salen corriendo juntos. La chaqueta se queda en el suelo.", C: "Bruno y Facundo huyen en perfecta coordinación. La chaqueta queda abandonada." },
            mood: "terror", end: "pistola-huyen",
          },
        ],
      },
      "pistola-miedo": {
        who: "facundo", mood: "scared",
        line: {
          A: "Facundo habla con las manos a medio bajar. «¿Y tú por qué llevas eso? Aquí solo hay una chaqueta sucia.»",
          B: "Facundo te mira con las manos todavía a medio camino. «¿Y tú por qué llevas eso? Aquí solo hay una chaqueta sucia y dos tontos.»",
          C: "Facundo, con las manos a medio bajar, se atreve: «¿Por qué llevas eso? Aquí solo hay una chaqueta manchada y dos idiotas gritando.»",
        },
        options: [
          {
            id: "arreglar",
            say: { A: "Perdón. ¿Cómo arreglamos lo de la chaqueta?", B: "Perdonen. ¿Cómo arreglamos lo de la chaqueta?", C: "Perdonen el susto. ¿Cómo resolvemos lo de la chaqueta?" },
            reply: { A: "Bruno y Facundo dicen que sí a todo. «¡Pagamos a medias! ¡Somos amigos!»", B: "Bruno y Facundo aceptan todo antes de que lo digas. «¡Tintorería a medias! ¡Somos amigos! ¡Todo bien!»", C: "Bruno y Facundo se ponen de acuerdo en tiempo récord. «¡A medias! ¡Amigos! ¡Resuelto!» Las manos siguen arriba." },
            mood: "scared", end: "pistola-acuerdo",
          },
          {
            id: "legal",
            say: { A: "Es legal. Tengo permiso. Tranquilos.", B: "Es legal, tengo permiso. Tranquilos.", C: "Está todo en regla, tengo permiso. Pueden estar tranquilos." },
            reply: { A: "Bruno ya tiene el celular en la mano. «Ya llamé a la policía.»", B: "Bruno ya tiene el celular en la oreja. «Perdona, pero ya llamé a la policía.»", C: "Bruno ya está al teléfono. «Tranquilos no. Ya llamé a la policía.»" },
            mood: "scared", end: "pistola-policia",
          },
          {
            id: "irse",
            say: { A: "Me voy. Resuélvanlo ustedes.", B: "Me voy. Esto lo resuelven ustedes.", C: "Me retiro. Lo de la chaqueta es cosa suya." },
            reply: { A: "Te alejas. Detrás de ti, vuelven a gritar.", B: "Te alejas. A los diez pasos, vuelven a gritar por la chaqueta.", C: "Te alejas. A los diez pasos, la discusión recupera su volumen original." },
            mood: "angry", end: "siguen",
          },
        ],
      },
      "granada-inicio": {
        who: "bruno", mood: "terror",
        line: {
          A: "Dos chicos gritan por una chaqueta. Ven tu granada. El bajo corre. El alto no se mueve. «¡Facundo, espera!… ¿Eso es una granada?»",
          B: "Dos amigos discuten a gritos por una chaqueta. Ven tu granada: Facundo sale corriendo y Bruno se queda congelado con la chaqueta en la mano. «¡Facundo, no me dejes!… ¿Eso es una granada de verdad?»",
          C: "Dos amigos discuten por una chaqueta hasta que ven tu granada. Facundo desaparece a la carrera; Bruno se queda clavado, chaqueta en mano. «¡Facundo, traidor!… ¿Eso es lo que creo que es?»",
        },
        options: [
          {
            id: "pisapapeles",
            say: { A: "Es un pisapapeles. Tranquilo.", B: "Es un pisapapeles, tranquilo.", C: "Es un pisapapeles. Pesado, pero inofensivo." },
            reply: { A: "Bruno no se mueve. «Facundo, vuelve. Es un pisapapeles. Creo.»", B: "Bruno no se mueve. «¡Facundo, vuelve! Dice que es un pisapapeles. Creo.»", C: "Bruno sigue clavado. «¡Facundo, vuelve! Es un pisapapeles. Eso dice. Yo no lo tocaría.»" },
            mood: "scared", next: "granada-bruno",
          },
          {
            id: "pelea",
            say: { A: "Es para terminar la pelea. ¿Funciona?", B: "La saqué para terminar la pelea. ¿Ha funcionado?", C: "La saqué para acabar con la pelea. Por lo visto, funciona." },
            reply: { A: "Bruno asiente muy rápido. «Funciona. Pelea terminada. Guárdala.»", B: "Bruno asiente a toda velocidad. «Funciona. Pelea terminada. Para siempre. Guárdala.»", C: "Bruno asiente sin parar. «Funciona de maravilla. Pelea cerrada. Guárdala, por favor.»" },
            mood: "scared", next: "granada-bruno",
          },
          {
            id: "corre",
            say: { A: "¡Corre tú también! ¡Corran todos!", B: "¡Corre tú también! ¡Que corra todo el mundo!", C: "¡Corre tú también! ¡Evacuación general!" },
            reply: { A: "Bruno suelta la chaqueta y corre. El mercado se vacía.", B: "Bruno suelta la chaqueta y corre detrás de Facundo. El mercado se vacía en un minuto.", C: "Bruno abandona la chaqueta y sale corriendo tras Facundo. El mercado se vacía a su paso." },
            mood: "terror", end: "granada-evacuacion",
          },
        ],
      },
      "granada-bruno": {
        who: "bruno", mood: "scared",
        line: {
          A: "Bruno tiembla con la chaqueta. Facundo mira desde detrás de un puesto. «Bueno… ¿qué quieres de nosotros?»",
          B: "Bruno tiembla con la chaqueta en la mano. Facundo asoma la cabeza desde detrás de un puesto de frutas. «Bueno… ¿qué quieres de nosotros exactamente?»",
          C: "Bruno tiembla, chaqueta en mano, y Facundo asoma desde detrás de un puesto de frutas. «Bueno. Dinos qué quieres y lo hacemos.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la granada.", B: "Guardas la granada en la mochila.", C: "Guardas la granada en el fondo de la mochila." },
            say: { A: "Nada. La guardo. ¿Qué pasó con la chaqueta?", B: "Nada. Ya la guardo. ¿Qué pasó con la chaqueta?", C: "Nada en absoluto. Guardada. ¿Qué le pasó a la chaqueta?" },
            reply: { A: "Facundo sale y abraza a Bruno. «¿Qué chaqueta? Estás vivo.»", B: "Facundo sale de su escondite y abraza a Bruno. «¿Qué chaqueta? Estás vivo, idiota.»", C: "Facundo sale y abraza a Bruno con fuerza. «¿Qué chaqueta? Estás vivo, imbécil. Lo demás no importa.»" },
            mood: "love", end: "granada-paz",
          },
          {
            id: "policia",
            say: { A: "Vamos a llamar a la policía juntos. Por seguridad.", B: "Llamemos a la policía juntos, por seguridad.", C: "Llamemos a la policía entre todos. Por seguridad, y por el protocolo." },
            reply: { A: "Bruno marca. Se oye un helicóptero. Facundo mira al cielo.", B: "Bruno marca con manos temblorosas. A los dos minutos, un helicóptero ilumina el mercado. Facundo mira al cielo.", C: "Bruno llama. Dos minutos después, un helicóptero barre el mercado con su foco. Facundo mira hacia arriba, boquiabierto." },
            mood: "terror", end: "granada-helicoptero",
          },
          {
            id: "sal",
            say: { A: "Facundo, sal. No explota. Lo prometo.", B: "Facundo, sal de ahí. No explota, lo prometo.", C: "Facundo, sal de detrás de las frutas. No explota. Palabra." },
            reply: { A: "Facundo sale despacio. Bruno y él se ríen, nerviosos.", B: "Facundo sale muy despacio. Él y Bruno se miran y se echan a reír, nerviosos.", C: "Facundo emerge con cautela. Bruno y él se miran y estallan en una risa nerviosa." },
            mood: "worried", end: "granada-risas",
          },
        ],
      },
      "gas-inicio": {
        who: "bruno", mood: "scared",
        line: {
          A: "Dos chicos gritan por una chaqueta. Uno empuja al otro. Sacas el gas pimienta. Los dos se quedan quietos. «¡Eh! ¡Eso no! ¡Somos amigos!»",
          B: "Dos amigos discuten por una chaqueta y Facundo empuja a Bruno. Sacas el gas pimienta y los dos se congelan. «¡Eh, eh! ¡Eso no! ¡Somos amigos, de verdad!»",
          C: "Dos amigos discuten por una chaqueta hasta que Facundo empuja a Bruno. Sacas el gas pimienta y ambos se petrifican. «¡Eso no! ¡Somos amigos! ¡Esto es normal entre nosotros!»",
        },
        options: [
          {
            id: "paren",
            say: { A: "Entonces dejen de pelear. Ahora.", B: "Entonces dejen de pelear ahora mismo.", C: "Pues si son amigos, dejen de pelear. Ahora." },
            reply: { A: "Bruno levanta las manos. «Bueno, bueno. Ya no gritamos.»", B: "Bruno levanta las manos. «Bueno, bueno. Ya no gritamos. Pero guarda eso.»", C: "Bruno alza las manos. «Está bien. Paz. Pero baja eso, que pica solo de verlo.»" },
            mood: "worried", next: "gas-tregua",
          },
          {
            id: "callar",
            say: { A: "Guardo el gas si se callan.", B: "Guardo el gas si se callan los dos.", C: "Guardo el gas en cuanto se callen los dos." },
            reply: { A: "Silencio total. Facundo murmura: «Callados. Guárdalo.»", B: "Silencio inmediato. Facundo murmura: «Callados. Totalmente. Guárdalo.»", C: "Silencio absoluto. Facundo susurra: «Más callados, imposible. Guárdalo.»" },
            mood: "worried", next: "gas-tregua",
          },
          {
            id: "amenaza",
            say: { A: "Sepárense o lo uso.", B: "Sepárense ahora o lo uso.", C: "Sepárense ya, o lo uso." },
            reply: { A: "Bruno y Facundo corren juntos. La chaqueta queda en el suelo.", B: "Bruno y Facundo salen corriendo juntos, por fin de acuerdo. La chaqueta se queda en el suelo.", C: "Bruno y Facundo huyen juntos, unidos por el gas. La chaqueta queda abandonada." },
            mood: "terror", end: "corren",
          },
        ],
      },
      "gas-tregua": {
        who: "bruno", mood: "worried",
        line: {
          A: "Bruno y Facundo están quietos. Bruno mira tu gas. «Bueno. Ya no peleamos. ¿Y ahora qué?»",
          B: "Bruno y Facundo se quedan quietos, hombro con hombro. Bruno no quita los ojos del gas. «Bueno, ya no peleamos. ¿Y ahora qué?»",
          C: "Bruno y Facundo forman un frente común, inmóviles. Bruno vigila el gas. «Tregua firmada. ¿Y ahora qué propones?»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas el gas.", B: "Guardas el gas pimienta.", C: "Guardas el gas pimienta en el bolsillo." },
            say: { A: "Guardado. ¿Qué pasó con la chaqueta?", B: "Guardado. Ahora cuéntenme qué pasó con la chaqueta.", C: "Guardado. Ahora sí: ¿qué pasó con la chaqueta?" },
            reply: { A: "Facundo respira. «Fue un accidente. Llovió y se cayó salsa.»", B: "Facundo respira aliviado. «Fue un accidente. Empezó a llover y luego se me cayó salsa encima.»", C: "Facundo suelta el aire. «Un accidente. Lluvia, salsa de empanada, un perro curioso.»" },
            mood: "sad", next: "historia",
          },
          {
            id: "tu-gas",
            say: { A: "Bruno, ¿por qué tienes un bulto en el bolsillo?", B: "Bruno, ¿qué llevas tú en el bolsillo?", C: "Bruno, ese bulto en tu bolsillo tiene una forma muy familiar." },
            reply: { A: "Bruno saca su gas pimienta. Facundo también. Los tres se ríen.", B: "Bruno saca su propio gas pimienta. Facundo saca otro. Los tres se miran y se ríen.", C: "Bruno saca su gas. Facundo, el suyo. Tres gases en una discusión por una chaqueta. Risa general." },
            mood: "laugh", end: "gas-paranoia",
          },
          {
            id: "paces",
            say: { A: "Hagan las paces. Ahora. Dense la mano.", B: "Hagan las paces ahora mismo. Dense la mano.", C: "Hagan las paces ya. Un apretón de manos y asunto cerrado." },
            reply: { A: "Se dan la mano sin dejar de mirar el gas. «Amigos. Hecho.»", B: "Se dan la mano sin apartar la vista del gas. «Amigos. Hecho. ¿Contento?»", C: "Se dan la mano con un ojo en el gas. «Amigos otra vez. ¿Satisfecho?»" },
            mood: "worried", end: "gas-paz",
          },
        ],
      },
      "lapiz-inicio": {
        who: "bruno", mood: "surprised",
        line: {
          A: "Dos chicos gritan por una chaqueta sucia. El alto ve tu lápiz. «¿Estás apuntando esto? ¿Eres periodista?»",
          B: "Dos amigos discuten a gritos por una chaqueta manchada. Bruno ve tu lápiz y tu papel. «¿Estás apuntando esto? ¿Qué eres, periodista?»",
          C: "Dos amigos discuten por una chaqueta hasta que Bruno ve tu lápiz. «¿Estás tomando notas? ¿Periodista, abogado o simple curioso?»",
        },
        options: [
          {
            id: "notario",
            say: { A: "Soy el notario. Escribo el acuerdo.", B: "Soy el notario. Voy a escribir el acuerdo.", C: "Hago de notario. Redacto el acuerdo y ustedes firman." },
            reply: { A: "Facundo se ríe. «¿Acuerdo? Bueno. Dicta tú.»", B: "Facundo se ríe a pesar suyo. «¿Un acuerdo por escrito? Bueno, venga. Dicta.»", C: "Facundo aguanta la risa. «Un acuerdo notarial por una chaqueta. Me gusta. Dicta.»" },
            mood: "smile", next: "lapiz-acta",
          },
          {
            id: "mancha",
            act: { A: "Dibujas la mancha de la chaqueta.", B: "Dibujas la forma de la mancha en tu papel.", C: "Reproduces la mancha de la chaqueta en tu papel, con detalle." },
            say: { A: "Dibujo la mancha. Para la tintorería.", B: "Estoy dibujando la mancha, para explicarla en la tintorería.", C: "Documento la mancha para la tintorería. Un buen informe ayuda." },
            reply: { A: "Bruno mira el dibujo. «Parece un mapa.»", B: "Bruno mira tu dibujo y se calla. «Parece un mapa. Un mapa de un país feo.»", C: "Bruno examina el dibujo. «Parece un mapa. De un país en guerra, pero un mapa.»" },
            mood: "surprised", next: "lapiz-mancha",
          },
          {
            id: "gritos",
            say: { A: "Apunto quién grita más. Vas ganando tú.", B: "Apunto quién grita más. De momento ganas tú.", C: "Llevo la cuenta de los gritos. Vas ganando, Bruno." },
            reply: { A: "Bruno baja la voz. «Bueno… Escribe el acuerdo, mejor.»", B: "Bruno baja la voz de golpe. «Bueno, bueno. Mejor escribe un acuerdo.»", C: "Bruno modera el volumen. «Prefiero perder ese concurso. Escribe un acuerdo, mejor.»" },
            mood: "smile", next: "lapiz-acta",
          },
        ],
      },
      "lapiz-acta": {
        who: "facundo", mood: "smile",
        line: {
          A: "Facundo mira tu papel. «Bueno, notario. ¿Qué dice el acuerdo?»",
          B: "Facundo se asoma a tu papel. «A ver, señor notario. ¿Qué dice la primera cláusula?»",
          C: "Facundo lee por encima de tu hombro. «Adelante, notario. ¿Qué dicta la primera cláusula?»",
        },
        options: [
          {
            id: "limpieza",
            act: { A: "Escribes: «Facundo paga la limpieza».", B: "Escribes: «Cláusula 1: Facundo paga la tintorería».", C: "Escribes: «Cláusula primera: Facundo asume la tintorería»." },
            say: { A: "Facundo paga la limpieza. Firmen aquí.", B: "Facundo paga la tintorería. Firmen los dos aquí.", C: "Facundo paga la tintorería. Firmen aquí, los dos." },
            reply: { A: "Los dos firman. Facundo: «Es justo.» Bruno: «Gracias, notario.»", B: "Los dos firman con tu lápiz. Facundo: «Es justo.» Bruno: «Gracias, señor notario.»", C: "Ambos firman. Facundo: «Justo, aunque duela.» Bruno: «Gracias, notario. Le debo una.»" },
            mood: "smile", end: "lapiz-contrato",
          },
          {
            id: "cena",
            act: { A: "Escribes: «Facundo invita a cenar».", B: "Escribes: «Cláusula 1: Facundo invita a cenar esta noche».", C: "Escribes: «Cláusula primera: Facundo invita a cenar, sin discusión»." },
            say: { A: "Facundo invita a cenar. Y la chaqueta se olvida.", B: "Facundo invita a cenar y la chaqueta queda olvidada.", C: "Facundo invita a cenar y la chaqueta pasa al olvido legal." },
            reply: { A: "Facundo firma. «Empanadas para los tres. Tú también, notario.»", B: "Facundo firma riendo. «Empanadas para los tres. El notario también cena.»", C: "Facundo firma con resignación. «Empanadas para tres. El notario cobra en comida.»" },
            mood: "smile", end: "lapiz-cena",
          },
          {
            id: "veredicto",
            say: { A: "Primero, Bruno. ¿Qué quieres tú?", B: "Antes de escribir, Bruno: ¿qué quieres tú?", C: "Antes de redactar nada, Bruno: ¿cuál es tu veredicto?" },
            reply: { A: "Bruno está más tranquilo. «Bueno… ¿Y qué hacemos?»", B: "Bruno ya no grita. «Bueno, ¿y qué hacemos ahora?»", C: "Bruno dobla la chaqueta con cuidado. «Bien. ¿Cuál es el veredicto?»" },
            mood: "neutral", next: "solucion",
          },
        ],
      },
      "lapiz-mancha": {
        who: "bruno", mood: "neutral",
        line: {
          A: "Bruno mira tu dibujo de la mancha. «¿Y qué hacemos con el dibujo?»",
          B: "Bruno sostiene tu dibujo de la mancha. «Bueno, ¿y qué hacemos con este dibujo?»",
          C: "Bruno observa tu dibujo de la mancha como un crítico. «¿Y qué propones hacer con esto?»",
        },
        options: [
          {
            id: "arte",
            act: { A: "Dibujas sobre la mancha de la chaqueta.", B: "Dibujas directamente sobre la mancha de la chaqueta.", C: "Dibujas sobre la mancha de la chaqueta, convirtiéndola en algo." },
            say: { A: "Mira: la mancha es un mapa. Ahora es arte.", B: "Mira: la mancha ya es un mapa. Ahora la chaqueta es arte.", C: "Observa: la mancha es un mapa. Tu chaqueta acaba de convertirse en arte." },
            reply: { A: "Bruno mira la chaqueta. Se ríe. «¡Es verdad! Me la quedo.»", B: "Bruno mira la chaqueta y se ríe. «¡Es verdad! Es única. Me la quedo así.»", C: "Bruno contempla la chaqueta y estalla de risa. «Es única. Ahora vale más que nueva.»" },
            mood: "laugh", end: "lapiz-arte",
          },
          {
            id: "tintoreria",
            act: { A: "Escribes una dirección.", B: "Escribes la dirección de una tintorería.", C: "Anotas la dirección de una tintorería del barrio." },
            say: { A: "Esta tintorería es buena. Vayan juntos.", B: "Esta tintorería es buena. Vayan los dos juntos.", C: "Esta tintorería hace milagros. Vayan juntos, mañana." },
            reply: { A: "Facundo toma el papel. «Vamos mañana. Pago yo.»", B: "Facundo toma el papel. «Vamos mañana, los dos. Pago yo.»", C: "Facundo guarda el papel. «Mañana vamos juntos. Pago yo, por supuesto.»" },
            mood: "smile", end: "lapiz-tintoreria",
          },
          {
            id: "version",
            say: { A: "Facundo, ¿qué pasó exactamente?", B: "Facundo, cuéntame qué pasó exactamente.", C: "Facundo, tu versión de los hechos, por favor." },
            reply: { A: "Facundo habla. «Fue un accidente. Llovió y se cayó salsa.»", B: "Facundo se defiende. «Fue un accidente. Empezó a llover y luego se me cayó salsa.»", C: "Facundo expone su caso. «Lluvia, salsa de empanada, un perro curioso. Una conspiración.»" },
            mood: "sad", next: "historia",
          },
        ],
      },
      "libro-inicio": {
        who: "bruno", mood: "laugh",
        line: {
          A: "Dos chicos gritan por una chaqueta sucia. El alto ve tu libro y se ríe. «¿Vienes a leernos un cuento? ¡Tenemos una pelea!»",
          B: "Dos amigos discuten a gritos por una chaqueta manchada. Bruno ve tu libro y se ríe. «¿Vienes a leernos un cuento? ¡Estamos en medio de una pelea!»",
          C: "Dos amigos discuten por una chaqueta hasta que Bruno ve tu libro y suelta una carcajada. «¿Nos vas a leer un cuento? ¡Estamos ocupados peleando!»",
        },
        options: [
          {
            id: "cuento",
            say: { A: "Sí. Un cuento de dos amigos. Escuchen.", B: "Sí, un cuento de dos amigos. Escuchen.", C: "Exacto. Un cuento sobre dos amigos. Escuchen un momento." },
            reply: { A: "Facundo se sienta. «Bueno. Tres minutos.»", B: "Facundo se sienta en un cajón. «Bueno, tres minutos. Luego seguimos peleando.»", C: "Facundo se sienta en un cajón. «Tres minutos. La pelea queda en pausa.»" },
            mood: "smile", next: "libro-cuento",
          },
          {
            id: "vinagre",
            act: { A: "Abres el libro. Hay una página de trucos.", B: "Abres el libro por una página de trucos caseros.", C: "Abres el libro por una página de remedios domésticos." },
            say: { A: "El libro dice: las manchas salen con vinagre.", B: "Aquí dice que las manchas de salsa salen con vinagre.", C: "Según este libro, las manchas de salsa desaparecen con vinagre." },
            reply: { A: "Bruno mira la página. «¿Vinagre? ¿De verdad?»", B: "Bruno lee la página. «¿Vinagre? ¿En serio? ¿Y dónde hay vinagre?»", C: "Bruno lee con desconfianza. «¿Vinagre? Si funciona, te debo una. ¿Dónde hay vinagre?»" },
            mood: "surprised", next: "libro-vinagre",
          },
          {
            id: "escudo",
            act: { A: "Pones el libro entre los dos.", B: "Pones el libro abierto entre los dos.", C: "Colocas el libro abierto entre los dos, como una frontera." },
            say: { A: "El libro va en medio. Nadie pasa.", B: "El libro va en medio. Nadie cruza esta línea.", C: "El libro marca la frontera. Nadie la cruza." },
            reply: { A: "Los dos miran el libro. Facundo se ríe. «¿Y ahora qué?»", B: "Los dos miran el libro, desconcertados. Facundo se ríe. «¿Y ahora qué hacemos?»", C: "Ambos miran el libro, perplejos. Facundo se ríe. «¿Y ahora? ¿Lo leemos?»" },
            mood: "smile", next: "libro-cuento",
          },
        ],
      },
      "libro-cuento": {
        who: "facundo", mood: "smile",
        line: {
          A: "Facundo escucha. «Bueno. ¿Cómo termina el cuento de los dos amigos?»",
          B: "Facundo escucha con los brazos cruzados. «Bueno, ¿y cómo termina el cuento de los dos amigos?»",
          C: "Facundo escucha, todavía con los brazos cruzados. «Bien. ¿Cómo acaba el cuento de los dos amigos?»",
        },
        options: [
          {
            id: "final",
            act: { A: "Les das el libro abierto.", B: "Les das el libro abierto por la última página.", C: "Les tiendes el libro abierto por la última página." },
            say: { A: "Lean el final ustedes. En voz alta.", B: "Lean el final ustedes, en voz alta.", C: "El final lo leen ustedes. En voz alta, los dos." },
            reply: { A: "Leen juntos. Al final, Bruno abraza a Facundo.", B: "Leen juntos, turnándose. Al terminar, Bruno abraza a Facundo sin decir nada.", C: "Leen a dos voces. Al llegar al final, Bruno abraza a Facundo en silencio." },
            mood: "love", end: "libro-final",
          },
          {
            id: "regalo",
            say: { A: "Les regalo el libro. Para los dos.", B: "Les regalo el libro. Es para los dos.", C: "El libro es suyo. De los dos, a medias." },
            reply: { A: "Bruno y Facundo se miran. «¿A medias? Como la chaqueta.» Se ríen.", B: "Bruno y Facundo se miran. «¿A medias? Como la tintorería.» Y se ríen.", C: "Bruno y Facundo se miran. «¿A medias? Igual que la tintorería.» Y la risa cierra el asunto." },
            mood: "laugh", end: "libro-regalo",
          },
          {
            id: "veredicto",
            say: { A: "Bruno, ¿y tú qué quieres hacer?", B: "Bruno, ¿y tú qué quieres hacer ahora?", C: "Bruno, el veredicto es tuyo. ¿Qué hacemos?" },
            reply: { A: "Bruno está más tranquilo. «Bueno… ¿Y qué hacemos?»", B: "Bruno ya no grita. «Bueno, ¿y qué hacemos ahora?»", C: "Bruno dobla la chaqueta con cuidado. «Bien. ¿Cuál es el veredicto?»" },
            mood: "neutral", next: "solucion",
          },
        ],
      },
      "libro-vinagre": {
        who: "bruno", mood: "surprised",
        line: {
          A: "Bruno mira la chaqueta. «¿Y dónde hay vinagre a esta hora?»",
          B: "Bruno mira la chaqueta, después el libro. «¿Y dónde encontramos vinagre a esta hora?»",
          C: "Bruno alterna la mirada entre la chaqueta y el libro. «Vinagre. ¿Dónde se consigue vinagre a estas horas?»",
        },
        options: [
          {
            id: "puesto",
            say: { A: "En el puesto de ensaladas. Vamos.", B: "En el puesto de ensaladas. Vamos los tres.", C: "El puesto de ensaladas tiene litros. Vamos los tres." },
            reply: { A: "Van al puesto. Frotan la mancha. ¡Sale! Bruno grita de alegría.", B: "Van al puesto, piden vinagre y frotan la mancha. ¡Sale! Bruno grita de alegría.", C: "Consiguen vinagre, frotan la mancha y, milagro, desaparece. Bruno grita como si hubiera ganado algo." },
            mood: "laugh", end: "libro-limpieza",
          },
          {
            id: "paga",
            say: { A: "El vinagre lo paga Facundo.", B: "El vinagre lo paga Facundo, claro.", C: "El vinagre corre a cargo de Facundo, por supuesto." },
            reply: { A: "Facundo levanta las manos. «Bueno. Pago el vinagre.»", B: "Facundo levanta las manos. «Está bien, pago el vinagre. Es más barato que una chaqueta.»", C: "Facundo acepta. «Pago el vinagre. Sale más barato que una chaqueta nueva.»" },
            mood: "smile", end: "libro-limpieza",
          },
          {
            id: "veredicto",
            say: { A: "Primero, ¿qué hacemos con la pelea?", B: "Antes del vinagre, ¿qué hacemos con la pelea?", C: "Antes del vinagre: ¿qué hacemos con la pelea?" },
            reply: { A: "Bruno está más tranquilo. «Bueno… ¿Y qué hacemos?»", B: "Bruno ya no grita. «Bueno, ¿y qué hacemos ahora?»", C: "Bruno dobla la chaqueta con cuidado. «Bien. ¿Cuál es el veredicto?»" },
            mood: "neutral", next: "solucion",
          },
        ],
      },
      "corazon-inicio": {
        who: "bruno", mood: "smitten",
        line: {
          A: "Dos chicos gritan por una chaqueta. Ven el corazón y se callan. El alto mira a su amigo. «¿Por qué tengo ganas de abrazar a este idiota?»",
          B: "Dos amigos discuten a gritos por una chaqueta manchada. El corazón les llega a los dos y se callan. Bruno mira a Facundo, confundido. «¿Por qué de repente tengo ganas de abrazar a este idiota?»",
          C: "Dos amigos discuten por una chaqueta hasta que el corazón los alcanza. Silencio. Bruno mira a Facundo, desconcertado. «¿Por qué me dan ganas de abrazar a este idiota en vez de matarlo?»",
        },
        options: [
          {
            id: "amigo",
            say: { A: "Porque es tu amigo. Pregúntale la verdad.", B: "Porque es tu amigo. Y creo que no te ha contado todo.", C: "Porque es tu amigo. Y sospecho que falta un capítulo de la historia." },
            reply: { A: "Facundo baja la cabeza. «Hay algo más.»", B: "Facundo baja la cabeza. «Bueno… hay algo que no dije.»", C: "Facundo baja la mirada. «Hay algo que no he contado. Es que era una sorpresa.»" },
            mood: "love", next: "corazon-confesion",
          },
          {
            id: "abrazalo",
            say: { A: "Pues abrázalo. Ahora.", B: "Pues abrázalo. Ahora mismo.", C: "Pues hazlo. Abrázalo ahora mismo." },
            reply: { A: "Bruno abraza a Facundo. La chaqueta cae al suelo. Nadie la mira.", B: "Bruno abraza a Facundo sin pensarlo. La chaqueta cae al suelo y nadie la mira.", C: "Bruno abraza a Facundo de golpe. La chaqueta cae al suelo, olvidada por todos." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "verdad",
            say: { A: "Facundo, dile la verdad. Se nota que hay algo.", B: "Facundo, cuéntale la verdad. Se nota que hay algo más.", C: "Facundo, dile la verdad. Esa cara esconde otro capítulo." },
            reply: { A: "Facundo suspira. «Está bien. Hay algo más.»", B: "Facundo suspira. «Está bien, está bien. Hay algo más.»", C: "Facundo suspira, vencido. «De acuerdo. Hay algo más, y es una sorpresa.»" },
            mood: "love", next: "corazon-confesion",
          },
        ],
      },
      "corazon-confesion": {
        who: "facundo", mood: "love",
        line: {
          A: "Facundo saca un paquete de la mochila. «Llovió. Tapé tu regalo de cumpleaños con la chaqueta. Está seco.»",
          B: "Facundo saca un paquete intacto de la mochila. «Empezó a llover y tapé tu regalo de cumpleaños con la chaqueta. El regalo está seco. La chaqueta, no.»",
          C: "Facundo saca un paquete impecable de la mochila. «Llovió. Tapé tu regalo de cumpleaños con la chaqueta. Elegí el regalo seco y la chaqueta manchada. Lo volvería a hacer.»",
        },
        options: [
          {
            id: "bruno",
            say: { A: "Bruno, ¿qué dices ahora?", B: "Bruno, ¿qué dices a eso?", C: "Bruno, ¿qué tienes que decir ahora?" },
            reply: { A: "Bruno abre el regalo. Llora. «Eres un desastre. Te quiero.»", B: "Bruno abre el regalo con las manos temblando. Llora. «Eres un desastre. Te quiero, idiota.»", C: "Bruno abre el regalo y se le escapan las lágrimas. «Eres un desastre. Te quiero, imbécil.»" },
            mood: "love", end: "corazon-regalo",
          },
          {
            id: "abrazo",
            say: { A: "Ahora los dos: abrazo. Ya.", B: "Ahora los dos: un abrazo. Ya.", C: "Y ahora, los dos: abrazo. Sin discusión." },
            reply: { A: "Se abrazan con el regalo en medio. Bruno ríe y llora.", B: "Se abrazan con el regalo aplastado entre los dos. Bruno ríe y llora a la vez.", C: "Se abrazan con el regalo en medio. Bruno ríe y llora, y Facundo pide perdón por la chaqueta otra vez." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "yo",
            say: { A: "Yo también quiero un abrazo.", B: "Yo también quiero un abrazo, ¿eh?", C: "Y yo también quiero un abrazo. Me lo he ganado." },
            reply: { A: "Los tres se abrazan. La chaqueta queda en el suelo.", B: "Los tres se abrazan en medio del mercado. La chaqueta queda en el suelo.", C: "Abrazo de tres en medio del mercado. La chaqueta, en el suelo, no protesta." },
            mood: "love", end: "corazon-trio",
          },
        ],
      },
    },
    ends: {
      "cuchillo-pelea": { text: { A: "Los cuchillos están en el suelo. Nadie está herido. Llega la policía y se los lleva.", B: "Los dos cuchillos quedan en el suelo y nadie sangra, por suerte. La policía llega y se lleva los cuchillos y a los tres.", C: "Dos cuchillos en el suelo, cero heridos y una patrulla que se lleva los cuchillos y a los tres protagonistas." }, change: "pelea", recap: "Facundo y tú sacaron los cuchillos y Bruno evitó una desgracia." },
      "cuchillo-paz": { text: { A: "Los cuchillos están en el suelo. Facundo es cocinero. Bruno se ríe de nervios. Hacen las paces.", B: "Los dos cuchillos quedan en el suelo. Facundo explica que es cocinero y Bruno se ríe de puro nervio. Hacen las paces, los tres.", C: "Dos cuchillos en el suelo y una explicación: Facundo es cocinero. Bruno se ríe de los nervios y la paz llega sola." }, change: "sonrie", recap: "Bajaste el cuchillo primero y el duelo con Facundo terminó en paz." },
      "cuchillo-policia": { text: { A: "Llega la patrulla. Se llevan los dos cuchillos. Bruno declara.", B: "La patrulla pone fin al duelo. Se llevan los dos cuchillos y Bruno declara como testigo.", C: "La patrulla termina el duelo. Dos cuchillos confiscados y Bruno declarando con el detalle de un cronista." }, change: "policia", recap: "El duelo de cuchillos con Facundo terminó con la policía." },
      "cuchillo-retirada": { text: { A: "Te vas despacio. Facundo guarda su cuchillo. La pelea por la chaqueta se olvida.", B: "Te alejas despacio. Facundo guarda su cuchillo y nadie vuelve a hablar de la chaqueta.", C: "Te retiras despacio. Facundo guarda su cuchillo y la chaqueta deja de importar a todos." }, change: "se-va", recap: "Te retiraste del duelo de cuchillos con Facundo." },
      "pistola-huyen": { text: { A: "Bruno y Facundo corren juntos. La chaqueta queda en el suelo.", B: "Bruno y Facundo huyen juntos. En el suelo queda la chaqueta, más sucia que nunca.", C: "Bruno y Facundo huyen en perfecta coordinación. Solo la chaqueta se queda." }, change: "corre", recap: "Bruno y Facundo huyeron de tu pistola." },
      "pistola-acuerdo": { text: { A: "Bruno y Facundo firman la paz con las manos arriba. Te vas. Ellos siguen quietos.", B: "Bruno y Facundo hacen las paces con las manos todavía en alto. Te alejas y ellos no se mueven hasta perderte de vista.", C: "Bruno y Facundo sellan la paz con las manos en alto. Te alejas, y ellos siguen inmóviles un buen rato." }, change: "manos-arriba", recap: "Bruno y Facundo hicieron las paces por miedo a tu pistola." },
      "pistola-policia": { text: { A: "Llega la policía. Levantas las manos. Bruno y Facundo declaran juntos.", B: "Llega la policía y levantas las manos. Bruno y Facundo, ahora muy amigos, declaran a la vez.", C: "La policía llega y tú levantas las manos. Bruno y Facundo declaran como un solo hombre." }, change: "policia", recap: "Bruno llamó a la policía por tu pistola." },
      "granada-evacuacion": { text: { A: "El mercado se vacía. Bruno, Facundo y la chaqueta desaparecen.", B: "El mercado se vacía en un minuto. Bruno y Facundo desaparecen y la chaqueta se queda sola.", C: "El mercado se vacía. Bruno y Facundo se esfuman y la chaqueta queda como único testigo." }, change: "corre", recap: "Vaciaste el mercado con la granada y Bruno y Facundo huyeron." },
      "granada-paz": { text: { A: "Bruno y Facundo se abrazan. Ya no hablan de la chaqueta. Te miran con miedo.", B: "Bruno y Facundo se abrazan y olvidan la chaqueta. Te miran con miedo, pero agradecidos.", C: "Bruno y Facundo se abrazan y la chaqueta pasa a la historia. Te miran con miedo y gratitud a partes iguales." }, change: "abraza", recap: "El susto de la granada reconcilió a Bruno y Facundo." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina el mercado. Bruno y Facundo levantan las manos. Tú también.", B: "Un helicóptero ilumina el mercado. Bruno, Facundo y tú levantan las manos a la vez.", C: "El helicóptero inunda el mercado de luz. Bruno, Facundo y tú alzan las manos en perfecta sincronía." }, change: "helicoptero", recap: "La granada trajo un helicóptero sobre Bruno y Facundo." },
      "granada-risas": { text: { A: "Bruno y Facundo se ríen, nerviosos. Ya no pelean. La granada sigue en tu mano.", B: "Bruno y Facundo se ríen de puro nervio. Ya no pelean, pero no se acercan a ti.", C: "Bruno y Facundo ríen con los nervios a flor de piel. Pelea terminada, distancia garantizada." }, change: "sonrie", recap: "Facundo salió de su escondite y la granada terminó en risas." },
      "gas-paranoia": { text: { A: "Tres gases pimienta. Se ríen mucho. Ya no hay pelea.", B: "Tres gases pimienta en una pelea por una chaqueta. Se ríen tanto que olvidan la pelea.", C: "Tres gases pimienta para una chaqueta manchada. La risa termina lo que el gas empezó." }, change: "sonrie", recap: "Bruno y Facundo también llevaban gas pimienta." },
      "gas-paz": { text: { A: "Bruno y Facundo se dan la mano. Te vas con el gas guardado.", B: "Bruno y Facundo se dan la mano bajo tu mirada. Te alejas con el gas guardado.", C: "Bruno y Facundo sellan la paz bajo tu vigilancia. Te vas con el gas guardado y la paz asegurada." }, change: "sonrie", recap: "Bruno y Facundo hicieron las paces con tu gas de testigo." },
      "lapiz-contrato": { text: { A: "El acuerdo está firmado. Bruno guarda el papel. Facundo paga la limpieza.", B: "El acuerdo queda firmado con tu lápiz. Bruno guarda el papel como un tesoro y Facundo paga la tintorería.", C: "Acuerdo firmado y archivado. Bruno guarda el papel con solemnidad y Facundo asume la tintorería." }, change: "sonrie", recap: "Redactaste el acuerdo de la chaqueta entre Bruno y Facundo." },
      "lapiz-cena": { text: { A: "Los tres cenan empanadas. Facundo paga. El acuerdo está en la mesa.", B: "Los tres cenan empanadas con el acuerdo firmado sobre la mesa. Paga Facundo.", C: "Cena de tres con el acuerdo sobre la mesa. Facundo paga y Bruno pide lo más caro por principio." }, change: "se-va", recap: "Tu acuerdo escrito terminó en una cena pagada por Facundo." },
      "lapiz-arte": { text: { A: "Bruno se pone la chaqueta con tu dibujo. Está orgulloso.", B: "Bruno se pone la chaqueta con tu dibujo encima de la mancha. Camina orgulloso.", C: "Bruno estrena la chaqueta con tu dibujo sobre la mancha. Pasea como si llevara una obra de arte." }, change: "sonrie", recap: "Convertiste la mancha de la chaqueta en arte." },
      "lapiz-tintoreria": { text: { A: "Bruno y Facundo van juntos a la tintorería. Facundo paga.", B: "Bruno y Facundo se van con tu dirección de la tintorería. Facundo paga, claro.", C: "Bruno y Facundo se marchan con tu nota de la tintorería. Facundo paga, Bruno supervisa." }, change: "se-va", recap: "Les escribiste la dirección de una tintorería." },
      "libro-final": { text: { A: "Bruno y Facundo se abrazan después de leer. La chaqueta ya no importa.", B: "Bruno y Facundo se abrazan después de leer el final. La chaqueta ya no importa.", C: "Bruno y Facundo se abrazan al terminar el cuento. La chaqueta queda en el olvido." }, change: "abraza", recap: "Un cuento de tu libro reconcilió a Bruno y Facundo." },
      "libro-regalo": { text: { A: "Bruno y Facundo se van con tu libro. A medias.", B: "Bruno y Facundo se van compartiendo tu libro. A medias, como todo.", C: "Bruno y Facundo se marchan con tu libro, en régimen de propiedad compartida." }, change: "sonrie", recap: "Les regalaste tu libro a Bruno y Facundo." },
      "libro-limpieza": { text: { A: "La mancha desaparece con vinagre. Bruno abraza la chaqueta. Y a Facundo.", B: "La mancha desaparece con vinagre. Bruno abraza la chaqueta y, después, a Facundo.", C: "El vinagre borra la mancha. Bruno abraza la chaqueta y luego, por fin, a Facundo." }, change: "sonrie", recap: "Un truco de tu libro limpió la chaqueta de Bruno." },
      "corazon-abrazo": { text: { A: "Bruno y Facundo se abrazan mucho tiempo. La chaqueta queda en el suelo.", B: "Bruno y Facundo se abrazan largo rato. La chaqueta queda en el suelo, olvidada.", C: "Bruno y Facundo se abrazan largo rato. La chaqueta, en el suelo, ya no es de nadie." }, change: "abraza", recap: "El corazón hizo que Bruno y Facundo se abrazaran." },
      "corazon-regalo": { text: { A: "Bruno abre el regalo y llora. Facundo también. Se abrazan.", B: "Bruno abre el regalo y llora. Facundo también. Terminan abrazados, con la chaqueta de alfombra.", C: "Bruno abre el regalo y llora; Facundo también. Se abrazan sobre la chaqueta, que ahora sirve de alfombra." }, change: "abraza", recap: "Facundo confesó el regalo y Bruno lloró de alegría." },
      "corazon-trio": { text: { A: "Los tres se abrazan en el mercado. La gente aplaude.", B: "Los tres se abrazan en medio del mercado. Algunos aplauden.", C: "Abrazo de tres en medio del mercado. Alguien aplaude, otro silba." }, change: "abraza", recap: "Terminaste en un abrazo de tres con Bruno y Facundo." },
      paz: { text: { A: "Bruno y Facundo se abrazan. Te dan las gracias.", B: "Bruno y Facundo hacen las paces. Antes de irse, te dan las gracias por mediar.", C: "Bruno y Facundo hacen las paces con un abrazo. La chaqueta, en cambio, sigue sin perdonar a nadie." }, change: "sonrie", recap: "Ayudaste a Bruno y Facundo a hacer las paces." },
      cena: { text: { A: "Bruno y Facundo van a cenar juntos. Están contentos.", B: "Bruno y Facundo se van juntos a cenar empanadas. Facundo paga, claro.", C: "Bruno y Facundo se van a cenar. Facundo paga, y Bruno pide lo más caro solo por principio." }, change: "se-va", recap: "Convenciste a Facundo de invitar a Bruno a cenar." },
      siguen: { text: { A: "Te vas. Bruno y Facundo siguen gritando.", B: "Te alejas y la discusión sigue a tus espaldas, cada vez más fuerte.", C: "Te alejas. Diez puestos después, todavía oyes la palabra «chaqueta» a gritos." }, change: "enojado", recap: "No quisiste mediar entre Bruno y Facundo." },
      risas: { text: { A: "Bruno y Facundo se ríen mucho. Ya no están enfadados.", B: "Bruno y Facundo no pueden parar de reír. La pelea se ha terminado sola.", C: "Bruno y Facundo se ríen hasta llorar. La pelea se disuelve como la salsa en la chaqueta." }, change: "sonrie", recap: "Hiciste reír a Bruno y Facundo y dejaron de pelear." },
      unidos: { text: { A: "Bruno y Facundo se abrazan. Ya son amigos otra vez.", B: "Bruno y Facundo se van abrazados. Ya no recuerdan por qué peleaban.", C: "Bruno y Facundo se van abrazados, unidos por un susto común. La mediación más rara del mercado." }, change: "abraza", recap: "Sin querer, uniste otra vez a Bruno y Facundo." },
      corren: { text: { A: "Bruno y Facundo corren juntos. La chaqueta se queda en el suelo.", B: "Bruno y Facundo huyen juntos. En el suelo queda la chaqueta, más sucia que nunca.", C: "Bruno y Facundo huyen en perfecta coordinación. Solo la chaqueta se queda, abandonada a su suerte." }, change: "corre", recap: "Asustaste a Bruno y Facundo y salieron corriendo." },
      policia: { text: { A: "Llega la policía. Explicas todo. Tardas mucho.", B: "Llega la policía. Bruno y Facundo, ahora muy amigos, cuentan su versión con detalle.", C: "Llega la policía. Bruno y Facundo declaran como un solo hombre, con una coordinación admirable." }, change: "policia", recap: "Un susto con Bruno y Facundo terminó con la policía." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Tienes amigos que pelean mucho?", B: "¿Qué harías si una pelea entre amigos se pusiera peligrosa?", C: "¿En qué momento una discusión deja de ser discusión y se convierte en amenaza?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces cuando dos personas gritan?", B: "¿Cómo reaccionas cuando alguien impone silencio por la fuerza?", C: "¿Puede haber una paz verdadera cuando nace del miedo?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Qué broma te gusta hacer a tus amigos?", B: "¿Alguna vez un susto terminó una pelea entre conocidos tuyos?", C: "¿Por qué el absurdo a veces resuelve lo que la razón no puede?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Te gusta separar peleas?", B: "¿Cuándo te metes en una pelea ajena y cuándo no?", C: "¿Es legítimo amenazar para evitar una violencia mayor?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes acuerdos con tus amigos?", B: "¿Alguna vez firmaste un acuerdo escrito con un amigo?", C: "¿Qué valor tiene poner por escrito lo que se promete entre amigos?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Qué cuento te gusta?", B: "¿Qué libro le regalarías a un amigo enfadado?", C: "¿Puede una historia ajena ayudarnos a entender una pelea propia?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿Abrazas a tus amigos?", B: "¿Cómo demuestras cariño a un amigo después de una pelea?", C: "¿Por qué nos cuesta tanto pedir perdón a quien más queremos?" } },
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
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "pilar", mood: "scared",
        line: {
          A: "Una mujer empuja un refrigerador viejo. Ve tu cuchillo y se esconde detrás. «¡Eh! ¿Qué haces con ese cuchillo? ¡Es un refrigerador, no una caja fuerte!»",
          B: "Una mujer con gafas empuja un refrigerador envuelto en cinta. Ve tu cuchillo y se pone detrás del aparato. «¡Oye! ¿Qué haces con eso? No te acerques así. ¡Esto es un refrigerador, no una caja fuerte!»",
          C: "Una mujer forcejea con un refrigerador momificado en cinta hasta que ve tu cuchillo. Se parapeta detrás. «¿Qué pretendes con eso? Es un refrigerador vacío. Si buscas tesoros, te has equivocado de mueble.»",
        },
        options: [
          {
            id: "cinta",
            say: { A: "Es para la cinta. Está pegada al suelo.", B: "Es para cortar la cinta. Está pegada al suelo, por eso no se mueve.", C: "Es para la cinta adhesiva, que tiene el refrigerador anclado al asfalto. Nada más." },
            reply: { A: "Pilar mira la cinta. «¿Pegada? Bueno… pero no te acerques a mí.»", B: "Pilar mira la cinta desde detrás del refrigerador. «¿Pegada al suelo? Puede ser… Pero mantén la distancia.»", C: "Pilar examina la cinta sin salir de su trinchera. «Es posible. Córtala, pero desde tu lado. Yo me quedo en el mío.»" },
            mood: "worried", next: "cuchillo-cinta",
          },
          {
            id: "guardar",
            act: { A: "Guardas el cuchillo.", B: "Guardas el cuchillo en el bolsillo.", C: "Guardas el cuchillo y enseñas las manos." },
            say: { A: "Perdón. Ya lo guardé. ¿Te ayudo?", B: "Perdona, ya está guardado. ¿Te ayudo con eso?", C: "Perdona, ya está guardado. ¿Necesitas ayuda con ese mueble?" },
            reply: { A: "Pilar sale un poco. «Qué susto. Bueno… La cinta está pegada al suelo.»", B: "Pilar asoma por encima del refrigerador. «Qué susto me diste. Bueno… El problema es que la cinta está pegada al suelo.»", C: "Pilar se asoma con cautela. «Me quitaste diez años. Bueno: la cinta está pegada al suelo. Quizá tu cuchillo sirva, después de todo.»" },
            mood: "worried", next: "cuchillo-cinta",
          },
          {
            id: "dentro",
            say: { A: "Dame lo que hay dentro. Rápido.", B: "Dame lo que hay dentro del refrigerador. Rápido.", C: "Lo que haya dentro, fuera. Rápido." },
            reply: { A: "Pilar grita: «¡Socorro! ¡Está vacío!» Los vendedores vienen corriendo.", B: "Pilar grita con todas sus fuerzas: «¡Socorro! ¡Está vacío, idiota!» Tres vendedores corren hacia ti.", C: "Pilar grita «¡socorro!» y aclara, furiosa: «¡Está vacío!». Tres vendedores llegan corriendo y alguien llama a la policía." },
            mood: "terror", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-cinta": {
        who: "pilar", mood: "worried",
        line: {
          A: "Pilar señala la cinta desde lejos. «Corta ahí. Yo me quedo aquí. ¿De acuerdo?»",
          B: "Pilar señala la cinta sin acercarse. «Corta por ahí. Yo me quedo de este lado, por si acaso. ¿De acuerdo?»",
          C: "Pilar indica la cinta con el dedo, a distancia prudente. «Corta por ahí. Yo superviso desde aquí, lejos de la hoja.»",
        },
        options: [
          {
            id: "cortar",
            act: { A: "Cortas la cinta y guardas el cuchillo.", B: "Cortas la cinta del suelo y guardas el cuchillo enseguida.", C: "Cortas la cinta de un tajo limpio y guardas el cuchillo al instante." },
            say: { A: "Listo. Ahora empujamos juntos.", B: "Listo, ya está libre. Ahora empujamos juntos.", C: "Liberado. Ahora sí: empujamos juntos." },
            reply: { A: "Pilar empuja. ¡Se mueve! «¡Media hora pegado! Gracias… y perdón por el susto.»", B: "Pilar empuja y el refrigerador se mueve por fin. «¡Media hora empujando un refrigerador pegado! Gracias. Y perdona el susto.»", C: "Pilar empuja y el refrigerador cede. «Media hora. Media hora pegado. Gracias, y perdona que te tomara por un ladrón.»" },
            mood: "smile", end: "cuchillo-dentro",
          },
          {
            id: "irse",
            act: { A: "Cortas la cinta y guardas el cuchillo.", B: "Cortas la cinta y guardas el cuchillo.", C: "Cortas la cinta, guardas el cuchillo y retrocedes." },
            say: { A: "Ya está. Me voy. Suerte.", B: "Ya está cortada. Me voy. Suerte con eso.", C: "Cinta cortada. Me retiro. Suerte con el mueble." },
            reply: { A: "Pilar asiente desde lejos. «Gracias. Y… cuidado con eso.»", B: "Pilar asiente sin acercarse. «Gracias. Y ten cuidado con ese cuchillo, de verdad.»", C: "Pilar asiente a distancia. «Gracias. Y ese cuchillo, en casa, la próxima vez.»" },
            mood: "neutral", end: "cuchillo-adios",
          },
          {
            id: "plan",
            say: { A: "Perdón otra vez. ¿Cómo lo hacemos?", B: "Perdona otra vez por el susto. ¿Cómo lo movemos?", C: "Perdona el susto. Dime cómo quieres moverlo." },
            reply: { A: "Pilar agarra el refrigerador. «Bueno. Tú me dices cuándo.»", B: "Pilar se coloca del otro lado, todavía tensa. «Bien. Tú ves el camino, así que tú me guías.»", C: "Pilar se coloca del otro lado, vigilante. «Tú tienes la vista, yo la fuerza bruta. Dirige. Sin cuchillo.»" },
            mood: "worried", next: "mover",
          },
        ],
      },
      "pistola-inicio": {
        who: "pilar", mood: "pain",
        line: {
          A: "Una mujer empuja un refrigerador. Ve tu pistola y levanta las manos. El refrigerador rueda sobre su pie. «¡Ay! ¡No, por favor! ¡Está vacío!»",
          B: "Una mujer con gafas empuja un refrigerador. Ve tu pistola y levanta las manos; el refrigerador rueda hacia atrás y le aplasta el pie. «¡Ay! ¡No, por favor! ¡Está vacío, no hay nada!»",
          C: "Una mujer forcejea con un refrigerador hasta que ve tu pistola. Alza las manos y el aparato le rueda sobre el pie. «¡Ay! ¡No dispares, por favor! ¡Está vacío! ¡Y encima me ha pisado!»",
        },
        options: [
          {
            id: "pie",
            say: { A: "¡Baja las manos! ¡Tu pie!", B: "¡Baja las manos, cuidado con el pie!", C: "¡Baja las manos y mira tu pie! ¡Olvida la pistola!" },
            reply: { A: "Pilar llora de dolor. «¡No puedo moverlo! ¡Pesa mucho!»", B: "Pilar llora de dolor con las manos todavía arriba. «¡No puedo moverlo! ¡Pesa una tonelada!»", C: "Pilar gime, manos en alto. «¡No lo puedo mover! ¡Pesa más que mi miedo, y eso es decir mucho!»" },
            mood: "pain", next: "pistola-pie",
          },
          {
            id: "guardar",
            act: { A: "Guardas la pistola.", B: "Guardas la pistola dentro de la chaqueta.", C: "Guardas la pistola en la chaqueta y muestras las manos." },
            say: { A: "Perdón. Ya está. Te ayudo con el pie.", B: "Perdona, ya la guardé. Déjame ayudarte con el pie.", C: "Perdona, guardada. Ahora tu pie: déjame ayudarte." },
            reply: { A: "Pilar baja las manos. «¡Rápido! ¡Me duele mucho!»", B: "Pilar baja las manos, llorando. «¡Rápido, por favor! ¡Me duele muchísimo!»", C: "Pilar baja las manos entre lágrimas. «Rápido. Me duele, y no sé si más el pie o el susto.»" },
            mood: "pain", next: "pistola-pie",
          },
          {
            id: "abrir",
            say: { A: "Abre el refrigerador. Quiero ver.", B: "Abre el refrigerador. Quiero ver qué hay.", C: "Abre el refrigerador. Quiero comprobarlo." },
            reply: { A: "Pilar abre con el pie atrapado. Vacío. Detrás de ti, una patrulla.", B: "Pilar abre la puerta con el pie todavía atrapado. Vacío, como dijo. Detrás de ti suena una sirena.", C: "Pilar abre con el pie aplastado. Vacío, como prometió. A tu espalda, una sirena corta la música del mercado." },
            mood: "terror", end: "pistola-vacio",
          },
        ],
      },
      "pistola-pie": {
        who: "pilar", mood: "pain",
        line: {
          A: "Pilar tiene el pie debajo del refrigerador. Llora. «Por favor. Haz algo.»",
          B: "Pilar tiene el pie atrapado bajo el refrigerador y llora de dolor. «Por favor, haz algo. Lo que sea.»",
          C: "Pilar sigue con el pie bajo el refrigerador, llorando. «Haz algo, por favor. Con pistola o sin ella, pero haz algo.»",
        },
        options: [
          {
            id: "levantar",
            act: { A: "Levantas el refrigerador con todas tus fuerzas.", B: "Agarras el refrigerador por abajo y levantas con todas tus fuerzas.", C: "Agarras el refrigerador por la base y tiras con todo lo que tienes." },
            say: { A: "Uno, dos, tres… ¡Saca el pie!", B: "A la de tres. Uno, dos, tres… ¡Saca el pie!", C: "A la de tres levanto. Uno, dos, tres… ¡Saca el pie ya!" },
            reply: { A: "Pilar saca el pie. Se sienta en el suelo. «Gracias. Ahora vete, por favor.»", B: "Pilar libera el pie y se deja caer al suelo. «Gracias. De verdad. Y ahora vete, por favor.»", C: "Pilar libera el pie y se sienta en el asfalto. «Gracias. Y ahora, con la misma sinceridad: vete.»" },
            mood: "worried", end: "pistola-rescate",
          },
          {
            id: "ambulancia",
            act: { A: "Sacas el celular.", B: "Sacas el celular y marcas.", C: "Sacas el celular y llamas a emergencias." },
            say: { A: "Llamo a una ambulancia. Tranquila.", B: "Llamo a una ambulancia ahora mismo. Tranquila.", C: "Llamo a una ambulancia. Tranquila, ya vienen." },
            reply: { A: "Pilar asiente llorando. «Y diles que estás armado. Que lo sepan.»", B: "Pilar asiente entre lágrimas. «Y diles que llevas una pistola. Que lo sepan antes de llegar.»", C: "Pilar asiente, llorando. «Avísales de la pistola. Que vengan preparados para los dos.»" },
            mood: "pain", end: "pistola-ambulancia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy. Alguien te ayudará.", B: "Perdona. Mejor me voy. Alguien te ayudará.", C: "Perdona. Me voy antes de empeorarlo. Alguien vendrá." },
            reply: { A: "Pilar grita: «¡No me dejes así!» Te vas.", B: "Pilar grita a tu espalda: «¡No me dejes así, cobarde!» Te alejas.", C: "Pilar grita: «¡No me dejes aquí, cobarde!» Te alejas sin mirar atrás." },
            mood: "angry", end: "pistola-abandono",
          },
        ],
      },
      "granada-inicio": {
        who: "pilar", mood: "terror",
        line: {
          A: "Una mujer empuja un refrigerador. Ve tu granada, grita y abraza el refrigerador. «¡Una granada! ¡Es de mi padre! ¡No lo toques!»",
          B: "Una mujer con gafas empuja un refrigerador. Ve tu granada, grita con todas sus fuerzas y abraza el aparato. «¡Una granada! ¡Es el refrigerador de mi padre! ¡Ni se te ocurra!»",
          C: "Una mujer forcejea con un refrigerador hasta que ve tu granada. Grita y abraza el aparato como a un hijo. «¡Una granada! ¡Este refrigerador era de mi padre! ¡Antes me vuelas a mí!»",
        },
        options: [
          {
            id: "puerta",
            say: { A: "Es para la puerta del mercado. Siempre se cierra.", B: "Era para la puerta del mercado cubierto, que siempre se cierra.", C: "Es para la puerta del mercado cubierto. Siempre se cierra sola; esto lo solucionaría." },
            reply: { A: "Pilar grita más. «¡Esa puerta es mía también! ¡Guarda eso!»", B: "Pilar grita todavía más fuerte. «¡Esa puerta también es mía! ¡Guarda eso ahora mismo!»", C: "Pilar grita, incrédula. «¡La puerta es del mercado y el mercado es mi vida! ¡Guarda esa cosa!»" },
            mood: "scared", next: "granada-abrazo",
          },
          {
            id: "pisapapeles",
            say: { A: "Es un pisapapeles. Tranquila.", B: "Es solo un pisapapeles, tranquila.", C: "Es un pisapapeles. Decorativo, pesado e inofensivo." },
            reply: { A: "Pilar no suelta el refrigerador. «¿Pisapapeles? ¿Y lo llevas al mercado?»", B: "Pilar no suelta el refrigerador. «¿Un pisapapeles? ¿Y lo traes al mercado de noche? ¿Para qué papeles?»", C: "Pilar sigue abrazada al refrigerador. «¿Pisapapeles? ¿Y qué papeles sujetas en un mercado a medianoche?»" },
            mood: "scared", next: "granada-abrazo",
          },
          {
            id: "diez",
            say: { A: "Explota en diez segundos. Es broma.", B: "Explota en diez segundos. Es broma, ¿eh?", C: "Diez segundos para la explosión. Es broma, claro." },
            reply: { A: "Nadie entiende la broma. Todos corren. Pilar empuja el refrigerador corriendo.", B: "La broma no llega a nadie. El mercado corre, y Pilar empuja el refrigerador a la carrera, por primera vez con éxito.", C: "La broma se pierde en el pánico. El mercado huye y Pilar, por fin, consigue mover el refrigerador: corriendo." },
            mood: "terror", end: "granada-evacuacion",
          },
        ],
      },
      "granada-abrazo": {
        who: "pilar", mood: "scared",
        line: {
          A: "Pilar abraza el refrigerador. Los vendedores gritan. «Guárdala. Y después hablamos. O no.»",
          B: "Pilar sigue abrazada al refrigerador mientras los vendedores piden policía a gritos. «Guárdala ahora. Después hablamos, si todavía tengo ganas.»",
          C: "Pilar no suelta el refrigerador mientras el mercado pide policía. «Guárdala ya. Luego decidimos si te perdono o te denuncio.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la granada en la mochila.", B: "Guardas la granada en el fondo de la mochila.", C: "Guardas la granada en lo más hondo de la mochila." },
            say: { A: "Ya está. Perdón. ¿Te ayudo a empujar?", B: "Listo, guardada. Perdón. ¿Te ayudo a empujar?", C: "Guardada. Perdón por el pánico. ¿Te ayudo a empujar?" },
            reply: { A: "Pilar suelta el refrigerador despacio. «Empuja. Pero con la mochila lejos.»", B: "Pilar suelta el refrigerador muy despacio. «Empuja, vale. Pero la mochila, lejos de mi padre.»", C: "Pilar afloja el abrazo. «Empuja. Pero la mochila se queda a diez metros del refrigerador.»" },
            mood: "worried", end: "granada-dentro",
          },
          {
            id: "encima",
            act: { A: "Pones la granada encima del refrigerador.", B: "Apoyas la granada encima del refrigerador.", C: "Colocas la granada sobre el refrigerador, como un adorno." },
            say: { A: "La pongo aquí y empujamos. Más fácil.", B: "La dejo aquí encima y empujamos. Así tengo las manos libres.", C: "La apoyo aquí y empujamos. Manos libres, problema resuelto." },
            reply: { A: "Pilar grita. Todos llaman. Se oye un helicóptero.", B: "Pilar grita como nunca. Todo el mercado llama a la policía. Un helicóptero ilumina el refrigerador.", C: "Pilar suelta un grito histórico. El mercado llama en masa y un helicóptero ilumina el refrigerador con su foco." },
            mood: "terror", end: "granada-helicoptero",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Perdón.", B: "Mejor me voy con esto. Perdón.", C: "Me llevo esto lejos. Perdón." },
            reply: { A: "Pilar no dice nada. Empuja sola.", B: "Pilar no contesta. Vuelve a empujar sola, temblando.", C: "Pilar no responde. Vuelve a empujar sola, con las manos todavía temblorosas." },
            mood: "angry", end: "sola",
          },
        ],
      },
      "gas-inicio": {
        who: "pilar", mood: "surprised",
        line: {
          A: "El refrigerador hace un ruido y sacas el gas pimienta. La mujer que empuja saca el suyo del delantal. «¡Es el motor! Yo también tengo gas. ¿Qué quieres?»",
          B: "El refrigerador gruñe y sacas el gas pimienta. La mujer que lo empuja saca otro del bolsillo del delantal. «¡Es el motor, nada más! Y yo también llevo gas, así que calma. ¿Qué quieres?»",
          C: "El refrigerador emite un gruñido metálico y sacas el gas pimienta. La mujer saca el suyo del delantal con la misma rapidez. «Es el motor. Lleva treinta años gruñendo. Y sí, yo también voy armada. ¿Qué quieres?»",
        },
        options: [
          {
            id: "perdon",
            act: { A: "Guardas el gas.", B: "Guardas el gas pimienta.", C: "Guardas el gas con gesto de disculpa." },
            say: { A: "Perdón. El ruido me asustó. ¿Tú también llevas?", B: "Perdona, el ruido me asustó. ¿Tú también llevas gas?", C: "Perdona, el ruido me puso en alerta. ¿Tú también vas con gas por el mercado?" },
            reply: { A: "Pilar guarda el suyo. «Desde que me robaron. Todas lo llevamos.»", B: "Pilar guarda el suyo. «Desde que me robaron en el mercado cubierto. Aquí todas lo llevamos.»", C: "Pilar guarda el suyo. «Desde que me robaron en el mercado cubierto. En este mercado, el delantal viene con gas.»" },
            mood: "worried", next: "gas-dos",
          },
          {
            id: "porque",
            say: { A: "¿Por qué llevas gas pimienta?", B: "¿Por qué llevas gas pimienta en el delantal?", C: "¿Por qué una vendedora lleva gas pimienta en el delantal?" },
            reply: { A: "Pilar baja el gas. «Me robaron el año pasado. Aquí mismo.»", B: "Pilar baja el gas, pero no lo guarda. «Me robaron el año pasado, aquí mismo, mientras cerraba.»", C: "Pilar baja el gas sin guardarlo. «El año pasado me robaron aquí mismo, al cerrar. Desde entonces, el delantal pesa más.»" },
            mood: "worried", next: "gas-dos",
          },
          {
            id: "desconfio",
            say: { A: "No me fío de ti. Me voy.", B: "No me fío de ti. Mejor me voy.", C: "No me fío de nadie que saque gas tan rápido. Me voy." },
            reply: { A: "Pilar guarda el gas y saca el celular. «Llamo a mi hijo. Vete.»", B: "Pilar guarda el gas y saca el celular. «Pues yo llamo a mi hijo. Vete por donde viniste.»", C: "Pilar guarda el gas y marca un número. «Llamo a mi hijo, que de ti no me fío yo tampoco.»" },
            mood: "angry", end: "gas-desconfianza",
          },
        ],
      },
      "gas-dos": {
        who: "pilar", mood: "worried",
        line: {
          A: "Pilar y tú guardan el gas. Ella casi se ríe. «Qué noche. Bueno, ¿me ayudas o no?»",
          B: "Los dos guardan el gas a la vez y Pilar suelta una risa nerviosa. «Qué manera de conocernos. Bueno, ¿me ayudas con esto o no?»",
          C: "Guardan el gas al mismo tiempo, como un duelo cancelado, y Pilar se ríe sin querer. «Vaya presentación. Bueno, ¿me ayudas con el mueble o no?»",
        },
        options: [
          {
            id: "juntos",
            say: { A: "Sí. Vamos juntos. Gas guardado.", B: "Claro que sí. Vamos juntos, con el gas guardado.", C: "Por supuesto. Vamos juntos, y el gas se queda en el bolsillo." },
            reply: { A: "Pilar agarra el refrigerador. «Al mercado cubierto. Sin sustos.»", B: "Pilar agarra el refrigerador del otro lado. «Al mercado cubierto. Y sin sustos, por favor.»", C: "Pilar se coloca del otro lado. «Al mercado cubierto. Pacto de no agresión incluido.»" },
            mood: "smile", end: "gas-dentro",
          },
          {
            id: "escolta",
            say: { A: "Te acompaño todas las noches. Soy tu guardia.", B: "Si quieres, te acompaño todas las noches. Seré tu guardia.", C: "Me ofrezco como escolta nocturna. Tú cierras, yo vigilo." },
            reply: { A: "Pilar se ríe mucho. «¿Y te pago en helado? Trato.»", B: "Pilar se ríe con ganas. «¿Y te pago en helado? Trato hecho.»", C: "Pilar suelta una carcajada. «¿Sueldo en helados? Contratado. Empiezas hoy.»" },
            mood: "laugh", end: "gas-escolta",
          },
          {
            id: "como",
            say: { A: "¿Cómo lo movemos? Tú dices.", B: "¿Cómo lo movemos? Tú mandas.", C: "¿Cómo quieres moverlo? Tú diriges." },
            reply: { A: "Pilar agarra el refrigerador. «Bueno. Tú me dices cuándo.»", B: "Pilar se coloca del otro lado. «Bien. Tú ves el camino, así que tú me guías.»", C: "Pilar se coloca del otro lado y se sube las mangas. «Tú tienes la vista, yo la fuerza bruta.»" },
            mood: "neutral", next: "mover",
          },
        ],
      },
      "lapiz-inicio": {
        who: "pilar", mood: "surprised",
        line: {
          A: "Una mujer empuja un refrigerador. Ve tu lápiz. «¿Dibujas? Necesito un cartel: «Se vende». No, espera. Primero hay que moverlo.»",
          B: "Una mujer con gafas empuja un refrigerador y se fija en tu lápiz. «¿Tú dibujas? Necesito un cartel de «Se vende»… No, espera, primero hay que moverlo. ¿Me ayudas?»",
          C: "Una mujer forcejea con un refrigerador y ve tu lápiz como una señal. «¿Dibujas? Necesito un cartel de «Se vende». Bueno, no: primero necesito moverlo. Después, el cartel. ¿Me ayudas?»",
        },
        options: [
          {
            id: "ruta",
            act: { A: "Dibujas el camino en un cartón.", B: "Dibujas el camino hasta el mercado cubierto en un cartón.", C: "Trazas una ruta hasta el mercado cubierto en un cartón, como un general." },
            say: { A: "Primero, la ruta. Mira.", B: "Primero dibujamos la ruta. Mira.", C: "Antes del cartel, la ruta. Mira esto." },
            reply: { A: "Pilar mira el cartón. «¡Qué bien! ¿Por dónde?»", B: "Pilar mira el cartón con interés. «¡Qué organizado! ¿Por dónde vamos?»", C: "Pilar estudia el cartón. «Por fin alguien con un plan. ¿Por dónde vamos?»" },
            mood: "smile", next: "lapiz-ruta",
          },
          {
            id: "cartel",
            act: { A: "Escribes «Se vende» en un cartón.", B: "Escribes «Se vende» en un cartón con letras grandes.", C: "Escribes «Se vende» en un cartón con letras enormes." },
            say: { A: "El cartel ya está. ¿Qué más pongo?", B: "El cartel ya está. ¿Qué más escribo?", C: "Cartel hecho. ¿Qué más quieres que ponga?" },
            reply: { A: "Pilar se ríe. «¡Qué rápido! Pon… no sé. ¿Qué pongo?»", B: "Pilar se ríe. «¡Qué rápido! Pon… no sé qué poner. ¿Tú qué pondrías?»", C: "Pilar se ríe. «Eficacia pura. Pon… no sé. ¿Qué se escribe para vender treinta años de historia?»" },
            mood: "smile", next: "lapiz-cartel",
          },
          {
            id: "nombre",
            act: { A: "Escribes «Pilar» en la cinta del refrigerador.", B: "Escribes «Propiedad de Pilar» en la cinta del refrigerador.", C: "Escribes «Propiedad de Pilar, no tocar» en la cinta del refrigerador." },
            say: { A: "Así nadie se lo lleva. ¿Cómo te llamas?", B: "Así nadie se lo lleva. Por cierto, ¿cómo te llamas?", C: "Así queda claro de quién es. Por cierto, ¿tu nombre?" },
            reply: { A: "Pilar se ríe. «Pilar. ¡Adivinaste! Bueno, el cartel.»", B: "Pilar se ríe. «Pilar, sí. ¡Lo adivinaste! Bueno, ahora el cartel de verdad.»", C: "Pilar se ríe. «Pilar. Buena intuición. Ahora, el cartel de verdad.»" },
            mood: "laugh", next: "lapiz-cartel",
          },
        ],
      },
      "lapiz-ruta": {
        who: "pilar", mood: "smile",
        line: {
          A: "Pilar mira tu mapa del mercado. «¿Por dónde es mejor?»",
          B: "Pilar sigue tu mapa con el dedo. «¿Y por dónde es mejor ir?»",
          C: "Pilar recorre tu mapa con el dedo. «¿Cuál es la ruta más inteligente?»",
        },
        options: [
          {
            id: "izquierda",
            act: { A: "Dibujas una flecha por la izquierda.", B: "Dibujas una flecha por la izquierda, lejos de los escalones.", C: "Trazas una flecha por la izquierda, esquivando escalones y cerámica." },
            say: { A: "Por la izquierda. Sin escalones. Vamos.", B: "Por la izquierda, que no hay escalones. Vamos.", C: "Por la izquierda: sin escalones y sin el puesto de cerámica. Vamos." },
            reply: { A: "Pilar empuja por la izquierda. ¡Llegan! «¡Perfecto!»", B: "Pilar empuja siguiendo tu flecha y llegan sin problemas. «¡Perfecto! ¡Ni un escalón!»", C: "Pilar sigue tu flecha y llegan al mercado cubierto sin un solo tropiezo. «Ingeniería de cartón. Me encanta.»" },
            mood: "smile", end: "lapiz-dentro",
          },
          {
            id: "ayuda",
            act: { A: "Escribes una nota: «Se necesitan brazos».", B: "Escribes una nota: «Se necesitan brazos fuertes. Pago en helado».", C: "Escribes una nota: «Se buscan brazos fuertes. Se paga en helado»." },
            say: { A: "Pongo esta nota en el puesto de al lado.", B: "Pego esta nota en el puesto de al lado. Alguien vendrá.", C: "Pego esta nota en el puesto vecino. Alguien aparecerá." },
            reply: { A: "Tres vendedores vienen en un minuto. «¿Helado? ¡Vamos!»", B: "En un minuto aparecen tres vendedores. «¿Pagan en helado? ¡Vamos allá!»", C: "En un minuto llegan tres vendedores. «¿Helado? Por helado se mueve lo que haga falta.»" },
            mood: "laugh", end: "lapiz-ayuda",
          },
          {
            id: "mover",
            say: { A: "Vamos. Tú me dices cuándo.", B: "Vamos a intentarlo. Tú me dices cuándo.", C: "Probemos. Tú marcas el ritmo." },
            reply: { A: "Pilar agarra el refrigerador. «Bueno. Tú me dices cuándo.»", B: "Pilar se coloca del otro lado. «Bien. Tú ves el camino, así que tú me guías.»", C: "Pilar se coloca del otro lado y se sube las mangas. «Tú tienes la vista, yo la fuerza bruta.»" },
            mood: "neutral", next: "mover",
          },
        ],
      },
      "lapiz-cartel": {
        who: "pilar", mood: "neutral",
        line: {
          A: "Pilar mira el cartel. «Era de mi padre. ¿Qué escribimos?»",
          B: "Pilar mira el cartel de «Se vende» con una cara rara. «Era de mi padre, ¿sabes? ¿Qué escribimos debajo?»",
          C: "Pilar contempla el cartel con gesto ambiguo. «Era de mi padre. Treinta años de helados. ¿Qué escribimos debajo?»",
        },
        options: [
          {
            id: "precio",
            act: { A: "Escribes un precio.", B: "Escribes un precio debajo.", C: "Añades un precio debajo de «Se vende»." },
            say: { A: "¿Cuánto cuesta? Pongo el precio.", B: "¿Cuánto pides? Pongo el precio.", C: "¿Cuánto pides por él? Pongo el precio." },
            reply: { A: "Un vendedor pasa y lo compra. Pilar se ríe. «¡Ya no hay que moverlo!»", B: "Un vendedor pasa, lee el cartel y lo compra en el acto. Pilar se ríe. «¡Ya no hay que moverlo!»", C: "Un vendedor lee el cartel al pasar y lo compra sin regatear. Pilar se ríe. «¡Vendido! ¡Y sin moverlo un metro!»" },
            mood: "laugh", end: "lapiz-venta",
          },
          {
            id: "no-vende",
            act: { A: "Tachas «Se vende» y escribes «No se vende».", B: "Tachas «Se vende» y escribes «No se vende. Era de mi padre».", C: "Tachas «Se vende» y escribes «No se vende. Era de papá»." },
            say: { A: "Mejor así: no se vende. Es de tu padre.", B: "Mejor así: no se vende. Era de tu padre.", C: "Mejor así. No se vende. Era de tu padre, y eso no tiene precio." },
            reply: { A: "Pilar lee. Se emociona. Te abraza.", B: "Pilar lee el cartel y se le llenan los ojos. Te abraza con las gafas torcidas.", C: "Pilar lee el cartel y se le escapan las lágrimas. Te abraza, con las gafas torcidas y todo." },
            mood: "love", end: "lapiz-padre",
          },
          {
            id: "mover",
            say: { A: "Primero lo movemos. Después el cartel.", B: "Primero lo movemos y después pensamos el cartel.", C: "Primero lo movemos; el cartel puede esperar." },
            reply: { A: "Pilar agarra el refrigerador. «Bueno. Tú me dices cuándo.»", B: "Pilar se coloca del otro lado. «Bien. Tú ves el camino, así que tú me guías.»", C: "Pilar se coloca del otro lado y se sube las mangas. «Tú tienes la vista, yo la fuerza bruta.»" },
            mood: "neutral", next: "mover",
          },
        ],
      },
      "libro-inicio": {
        who: "pilar", mood: "laugh",
        line: {
          A: "Una mujer empuja un refrigerador. Ve tu libro y se ríe. «¿Un libro? ¿Me vas a leer mientras empujo?»",
          B: "Una mujer con gafas empuja un refrigerador, ve tu libro y se ríe. «¿Un libro? ¿Me vas a leer un cuento mientras yo empujo?»",
          C: "Una mujer forcejea con un refrigerador y, al ver tu libro, suelta una carcajada. «¿Un libro? ¿Piensas leerme poesía mientras empujo una tonelada?»",
        },
        options: [
          {
            id: "puerta",
            say: { A: "El libro sirve para la puerta. Para que no se cierre.", B: "El libro sirve para trabar la puerta del mercado cubierto.", C: "Este libro tiene un destino: trabar la puerta del mercado cubierto." },
            reply: { A: "Pilar deja de reír. «¡Esa puerta es mi enemiga! ¡Vamos!»", B: "Pilar deja de reírse. «¡Esa puerta es mi enemiga personal! ¡Buena idea, vamos!»", C: "Pilar se pone seria de golpe. «Esa puerta me odia. Si tu libro la vence, lo leo entero.»" },
            mood: "smile", next: "libro-puerta",
          },
          {
            id: "leer",
            say: { A: "Sí. Te leo mientras empujas. Es más fácil.", B: "Sí, te leo mientras empujas. Así pesa menos.", C: "Exacto. Te leo mientras empujas. La literatura aligera." },
            reply: { A: "Pilar se ríe. «¡Bueno! Lee algo bonito.»", B: "Pilar se ríe. «¡Está bien! Pero lee algo bonito, que esto pesa.»", C: "Pilar se ríe. «De acuerdo. Pero que sea bueno, que esto pesa una tonelada.»" },
            mood: "laugh", next: "libro-leer",
          },
          {
            id: "patin",
            act: { A: "Pones el libro debajo del refrigerador.", B: "Metes el libro debajo de una esquina del refrigerador.", C: "Encajas el libro bajo una esquina del refrigerador, a modo de patín." },
            say: { A: "Lo pongo debajo. Así se desliza.", B: "Lo pongo debajo, como un patín. Así se desliza.", C: "Lo uso de patín. Así se desliza mejor." },
            reply: { A: "El libro se rompe. Pilar se ríe mucho. «¡Pobre libro!»", B: "El libro cruje y se aplasta. Pilar se ríe a carcajadas. «¡Pobre libro! ¡Murió por la ciencia!»", C: "El libro cruje bajo el peso y queda plano. Pilar se ríe sin parar. «Un mártir de la literatura.»" },
            mood: "laugh", next: "libro-puerta",
          },
        ],
      },
      "libro-puerta": {
        who: "pilar", mood: "smile",
        line: {
          A: "Llegan a la puerta del mercado cubierto. Se cierra sola. Pilar mira tu libro. «¿Y ahora?»",
          B: "Llegan a la puerta del mercado cubierto, que se cierra sola, como siempre. Pilar mira tu libro. «Bueno, ¿y ahora qué?»",
          C: "Llegan a la puerta del mercado cubierto, que se cierra con malicia. Pilar mira tu libro. «Tu momento, libro. ¿Y ahora?»",
        },
        options: [
          {
            id: "trabar",
            act: { A: "Pones el libro debajo de la puerta.", B: "Metes el libro debajo de la puerta para trabarla.", C: "Encajas el libro bajo la puerta, que por fin se rinde." },
            say: { A: "Ya está. No se cierra. ¡Empuja!", B: "Listo, ya no se cierra. ¡Empuja!", C: "La literatura vence a la puerta. ¡Empuja!" },
            reply: { A: "Pilar empuja. Entra. «¡Bendito libro!»", B: "Pilar empuja y el refrigerador entra sin problemas. «¡Bendito libro!»", C: "El refrigerador entra. «Pienso leer ese libro solo por agradecimiento», dice Pilar." },
            mood: "smile", end: "libro-dentro",
          },
          {
            id: "roto",
            act: { A: "Pones el libro aplastado debajo de la puerta.", B: "Metes el libro aplastado debajo de la puerta.", C: "Encajas el libro, ya plano, bajo la puerta." },
            say: { A: "Está roto, pero sirve. ¡Empuja!", B: "Está destrozado, pero sirve. ¡Empuja!", C: "Está hecho polvo, pero cumple. ¡Empuja!" },
            reply: { A: "Pilar empuja riendo. Entra. «¡El libro héroe!»", B: "Pilar empuja muerta de risa y el refrigerador entra. «¡El libro héroe! ¡Le hago un monumento!»", C: "Pilar empuja entre carcajadas y el refrigerador entra. «Ese libro merece una placa.»" },
            mood: "laugh", end: "libro-roto",
          },
          {
            id: "sostener",
            say: { A: "Yo abro la puerta. Tú pasas.", B: "Yo sujeto la puerta y tú empujas.", C: "Yo me encargo de la puerta; tú conduces." },
            reply: { A: "Pilar pasa con el refrigerador. «¡Lo conseguimos!»", B: "Pilar empuja y el refrigerador entra por fin. «¡Lo conseguimos!»", C: "Pilar maniobra como una profesional. El refrigerador entra con un rugido triunfal." },
            mood: "smile", end: "dentro",
          },
        ],
      },
      "libro-leer": {
        who: "pilar", mood: "smile",
        line: {
          A: "Pilar empuja despacio. «Bueno, lee. ¿De qué va el libro?»",
          B: "Pilar empuja despacio, atenta. «Bueno, lee. ¿De qué trata el libro?»",
          C: "Pilar empuja a ritmo de lectura. «Adelante. ¿De qué va?»",
        },
        options: [
          {
            id: "capitulo",
            act: { A: "Lees un capítulo en voz alta.", B: "Lees un capítulo entero en voz alta.", C: "Lees un capítulo en voz alta, con buena entonación." },
            say: { A: "Capítulo uno: «La noche era larga…»", B: "Capítulo uno: «La noche era larga y olía a pan…»", C: "Capítulo uno: «La noche era larga, y el olor a pan la hacía más corta…»" },
            reply: { A: "Pilar deja de empujar. Se sienta en el refrigerador. «Sigue, sigue.»", B: "Pilar deja de empujar y se sienta encima del refrigerador. «Sigue, sigue. El refrigerador puede esperar.»", C: "Pilar abandona el esfuerzo y se sienta sobre el refrigerador. «Sigue. Esto es mejor que mover muebles.»" },
            mood: "smile", end: "libro-lectura",
          },
          {
            id: "regalo",
            say: { A: "Te lo regalo. Léelo en el mercado cubierto.", B: "Te lo regalo. Léelo cuando el refrigerador esté dentro.", C: "Es tuyo. Léelo cuando el refrigerador descanse en el mercado cubierto." },
            reply: { A: "Pilar lo guarda en el delantal. «Gracias. Hace años que no leo.»", B: "Pilar lo guarda en el bolsillo del delantal. «Gracias. Hace años que no leo nada que no sea una factura.»", C: "Pilar lo guarda en el delantal. «Gracias. Llevo años leyendo solo facturas y carteles de precios.»" },
            mood: "love", end: "libro-regalo",
          },
          {
            id: "empujar",
            say: { A: "Mejor empujamos. Después te leo.", B: "Mejor empujamos primero. Después te leo.", C: "Primero el mueble, después la lectura." },
            reply: { A: "Pilar agarra el refrigerador. «Bueno. Tú me dices cuándo.»", B: "Pilar se coloca del otro lado. «Bien. Tú ves el camino, así que tú me guías.»", C: "Pilar se coloca del otro lado y se sube las mangas. «Tú tienes la vista, yo la fuerza bruta.»" },
            mood: "neutral", next: "mover",
          },
        ],
      },
      "corazon-inicio": {
        who: "pilar", mood: "love",
        line: {
          A: "Una mujer empuja un refrigerador. Ve el corazón, lo suelta y te abraza. «No sé quién eres, pero hoy necesitaba un abrazo. Mi padre se jubila hoy.»",
          B: "Una mujer con gafas empuja un refrigerador. Ve el corazón, suelta el aparato y te abraza sin más. «No te conozco, pero hoy necesitaba esto. Mi padre se jubila hoy, y este era su refrigerador.»",
          C: "Una mujer forcejea con un refrigerador hasta que el corazón la alcanza. Lo suelta y te abraza de golpe. «No sé quién eres, pero hoy hacía falta. Mi padre se jubila hoy y este refrigerador es su primer puesto.»",
        },
        options: [
          {
            id: "padre",
            say: { A: "Cuéntame de tu padre.", B: "Cuéntame de tu padre. ¿Cómo es?", C: "Háblame de tu padre. Treinta años de helados dan para mucho." },
            reply: { A: "Pilar sonríe. «Vendía helados con este refrigerador. Treinta años.»", B: "Pilar acaricia el refrigerador. «Vendía helados con esto. Treinta años, todos los veranos. Hoy se retira.»", C: "Pilar apoya la mano en el refrigerador. «Helados, treinta veranos, con esto. Hoy cuelga el delantal, y el refrigerador también.»" },
            mood: "love", next: "corazon-padre",
          },
          {
            id: "por-el",
            say: { A: "Entonces lo movemos por él. Juntos.", B: "Entonces lo movemos por él. Juntos, ahora.", C: "Entonces lo movemos en su honor. Juntos." },
            reply: { A: "Pilar se emociona. «Por él. Gracias.»", B: "Pilar se emociona. «Por él. Gracias. Hace años que no me ayuda nadie.»", C: "Pilar se seca los ojos. «Por él. Y gracias: nadie me ayuda sin que lo pida.»" },
            mood: "love", next: "corazon-padre",
          },
          {
            id: "mas",
            say: { A: "Abrázame más. Yo también lo necesito.", B: "Abrázame un poco más. Yo también lo necesitaba.", C: "No sueltes todavía. Yo también lo necesitaba." },
            reply: { A: "Pilar te abraza fuerte. El refrigerador espera.", B: "Pilar te abraza con fuerza, largo rato. El refrigerador espera, paciente.", C: "Pilar te abraza largo rato, sin prisa. El refrigerador, por una vez, no se queja." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-padre": {
        who: "pilar", mood: "love",
        line: {
          A: "Pilar mira el refrigerador. «Mi padre está en casa. Hoy no quiso venir. ¿Qué hacemos?»",
          B: "Pilar mira el refrigerador con cariño. «Mi padre está en casa. Hoy no quiso venir, le daba pena. ¿Qué hacemos?»",
          C: "Pilar observa el refrigerador con ternura. «Mi padre se quedó en casa. No quiso ver cómo se va su refrigerador. ¿Qué hacemos?»",
        },
        options: [
          {
            id: "orgullo",
            say: { A: "Lo movemos. Él estaría orgulloso de ti.", B: "Lo movemos juntos. Tu padre estaría orgulloso de verte.", C: "Lo movemos juntos. Tu padre estaría orgulloso de esta escena." },
            reply: { A: "Pilar agarra el refrigerador. «Por papá. Vamos.» Entra fácil.", B: "Pilar agarra el refrigerador con fuerza. «Por papá. Vamos.» Y entra como si pesara la mitad.", C: "Pilar se agarra al refrigerador. «Por papá. Vamos.» Y el mueble, por una vez, colabora." },
            mood: "love", end: "corazon-dentro",
          },
          {
            id: "llamar",
            say: { A: "¿Lo llamamos? Que escuche el mercado.", B: "¿Y si lo llamamos? Que escuche el mercado una última vez.", C: "Llamémoslo. Que escuche el mercado por última vez con su refrigerador aquí." },
            reply: { A: "Pilar marca. «Papá, escucha.» Le pasa el celular. «Dile algo.»", B: "Pilar marca con los ojos húmedos. «Papá, escucha el mercado.» Y te pasa el celular: «Dile algo tú».", C: "Pilar marca, emocionada. «Papá, escucha.» Te pasa el celular: «Dile algo. Lo que sea. Él te va a adorar»." },
            mood: "love", end: "corazon-llamada",
          },
          {
            id: "helado",
            say: { A: "Mañana compramos un helado. Por tu padre.", B: "Mañana nos tomamos un helado. Por tu padre.", C: "Mañana, helado. Por tu padre y por sus treinta veranos." },
            reply: { A: "Pilar se ríe. «De los suyos. Todavía quedan en casa.»", B: "Pilar se ríe. «De los suyos, claro. Todavía quedan en casa. Trato hecho.»", C: "Pilar se ríe entre lágrimas. «De los suyos. Quedan en casa. Trato hecho, y pago yo.»" },
            mood: "love", end: "corazon-helado",
          },
        ],
      },
    },
    ends: {
      "cuchillo-dentro": { text: { A: "El refrigerador entra en el mercado cubierto. Pilar te da las gracias desde lejos.", B: "El refrigerador llega al mercado cubierto. Pilar te da las gracias, todavía a distancia prudente.", C: "El refrigerador llega a su destino. Pilar te agradece a dos metros, sin olvidar el cuchillo." }, change: "sonrie", recap: "Tu cuchillo asustó a Pilar, pero cortó la cinta del refrigerador." },
      "cuchillo-adios": { text: { A: "Te vas. Pilar empuja el refrigerador libre. Ya se mueve.", B: "Te alejas. Pilar empuja el refrigerador, ahora libre, y por fin avanza.", C: "Te alejas. Pilar empuja el refrigerador liberado, que por fin se desliza." }, change: "se-va", recap: "Cortaste la cinta del refrigerador de Pilar y te fuiste." },
      "cuchillo-policia": { text: { A: "Llega la policía. Te quitan el cuchillo. Pilar abraza su refrigerador vacío.", B: "Llega la policía y te quitan el cuchillo. Pilar abraza su refrigerador vacío, temblando.", C: "La policía te quita el cuchillo delante de los vendedores. Pilar abraza su refrigerador vacío." }, change: "policia", recap: "Amenazaste a Pilar con el cuchillo y llegó la policía." },
      "pistola-vacio": { text: { A: "La patrulla te rodea. Levantas las manos. El refrigerador está vacío.", B: "La patrulla te rodea con las luces encendidas. Levantas las manos ante un refrigerador vacío.", C: "La patrulla te cerca bajo las luces azules. Levantas las manos frente a un refrigerador vacío y una mujer con el pie aplastado." }, change: "manos-arriba", recap: "Obligaste a Pilar a abrir el refrigerador y llegó una patrulla." },
      "pistola-rescate": { text: { A: "Pilar tiene el pie libre. Te vas. Ella no te mira.", B: "Pilar tiene el pie libre y se queda sentada en el suelo. Te vas, y ella no te mira.", C: "Pilar recupera el pie y se queda en el asfalto. Te alejas sin que ella levante la vista." }, change: "sigue", recap: "Liberaste el pie de Pilar después de asustarla con la pistola." },
      "pistola-ambulancia": { text: { A: "Llega la ambulancia. Pilar se va con el pie vendado. La policía te espera.", B: "Llega la ambulancia y Pilar se va con el pie vendado. La policía, avisada, te espera junto al refrigerador.", C: "La ambulancia se lleva a Pilar con el pie vendado. La policía, ya avisada, te espera junto al refrigerador." }, change: "ambulancia", recap: "Tu pistola causó un accidente y llamaste a una ambulancia." },
      "pistola-abandono": { text: { A: "Dejas a Pilar con el pie atrapado. Ella grita. Los vendedores corren a ayudarla.", B: "Dejas a Pilar con el pie bajo el refrigerador. Sus gritos atraen a tres vendedores.", C: "Abandonas a Pilar con el pie atrapado. Sus gritos traen a tres vendedores y una mirada que no olvidarás." }, change: "triste", recap: "Dejaste a Pilar con el pie atrapado bajo el refrigerador." },
      "granada-evacuacion": { text: { A: "El mercado se vacía. Pilar corre empujando el refrigerador. Lo logra.", B: "El mercado se vacía en un minuto. Pilar huye empujando el refrigerador, y lo consigue mover por primera vez.", C: "El mercado huye. Pilar escapa empujando el refrigerador y, por fin, lo mueve: el pánico es un gran motor." }, change: "corre", recap: "Tu broma de la granada vació el mercado." },
      "granada-dentro": { text: { A: "El refrigerador entra. La mochila, a diez metros. Pilar respira.", B: "El refrigerador entra en el mercado cubierto. Tu mochila espera a diez metros. Pilar respira por fin.", C: "El refrigerador llega a su destino con tu mochila en cuarentena a diez metros. Pilar vuelve a respirar." }, change: "sonrie", recap: "Guardaste la granada y ayudaste a Pilar con el refrigerador." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina el refrigerador. Pilar llora. Llega la policía.", B: "Un helicóptero ilumina el refrigerador con la granada encima. Pilar llora y la policía te rodea.", C: "El helicóptero ilumina un refrigerador con granada. Pilar llora y la policía te rodea." }, change: "helicoptero", recap: "Pusiste la granada sobre el refrigerador y llegó un helicóptero." },
      "gas-desconfianza": { text: { A: "Pilar llama a su hijo. Tú te vas con el gas. Nadie confía en nadie.", B: "Pilar llama a su hijo sin dejar de mirarte. Te vas con el gas en el bolsillo. Nadie confía en nadie.", C: "Pilar llama a su hijo sin quitarte la vista. Te vas con el gas guardado. Dos desconfiados, cero ayuda." }, change: "llama", recap: "Pilar y tú desconfiaron el uno del otro." },
      "gas-dentro": { text: { A: "El refrigerador entra. Los dos con el gas guardado. Pilar sonríe.", B: "El refrigerador entra en el mercado cubierto. Los dos con el gas guardado. Pilar sonríe.", C: "El refrigerador llega a su destino, con dos gases guardados y un pacto cumplido. Pilar sonríe." }, change: "sonrie", recap: "Pilar y tú, ambos con gas pimienta, movieron el refrigerador." },
      "gas-escolta": { text: { A: "Eres el guardia de Pilar. Pago: helado. Ella se ríe.", B: "Eres el guardia nocturno de Pilar, con sueldo en helados. Ella no para de reírse.", C: "Quedas contratado como escolta nocturna, con sueldo en helados. Pilar firma el contrato riendo." }, change: "sonrie", recap: "Pilar te contrató como escolta a cambio de helados." },
      "lapiz-dentro": { text: { A: "Siguen tu flecha. El refrigerador entra sin problemas.", B: "Siguen tu flecha a lápiz y el refrigerador entra sin un solo escalón.", C: "Tu ruta a lápiz funciona: ni un escalón, ni un jarrón roto." }, change: "sonrie", recap: "Dibujaste la ruta y el refrigerador llegó sin problemas." },
      "lapiz-ayuda": { text: { A: "Tres vendedores mueven el refrigerador. Pilar paga en helado.", B: "Tres vendedores mueven el refrigerador en dos minutos. Pilar paga en helado.", C: "Tres vendedores resuelven el problema en dos minutos. Pilar paga en helado, como prometía tu nota." }, change: "sonrie", recap: "Tu nota reclutó a tres vendedores para Pilar." },
      "lapiz-venta": { text: { A: "El refrigerador se vende en el sitio. Pilar se ríe mucho.", B: "El refrigerador se vende sin moverse un metro. Pilar se ríe hasta llorar.", C: "El refrigerador se vende en el acto, sin moverlo. Pilar no deja de reírse." }, change: "sonrie", recap: "Tu cartel vendió el refrigerador de Pilar en el sitio." },
      "lapiz-padre": { text: { A: "El cartel dice «No se vende». Pilar te abraza. El refrigerador se queda.", B: "El cartel dice «No se vende. Era de papá». Pilar te abraza y el refrigerador se queda.", C: "El cartel dice «No se vende. Era de papá». Pilar te abraza y el refrigerador vuelve a ser familia." }, change: "abraza", recap: "Escribiste «No se vende» y Pilar se quedó el refrigerador." },
      "libro-dentro": { text: { A: "Tu libro traba la puerta. El refrigerador entra. Pilar lo guarda para leerlo.", B: "Tu libro traba la puerta y el refrigerador entra. Pilar se queda el libro para leerlo.", C: "Tu libro vence a la puerta y el refrigerador entra. Pilar se lo queda, por agradecimiento." }, change: "sonrie", recap: "Tu libro trabó la puerta del mercado cubierto." },
      "libro-roto": { text: { A: "El libro aplastado traba la puerta. Pilar se ríe. Entran.", B: "El libro aplastado traba la puerta y el refrigerador entra. Pilar no para de reírse.", C: "El libro, ya plano, cumple su última misión bajo la puerta. Pilar ríe y el refrigerador entra." }, change: "sonrie", recap: "Tu libro murió aplastado, pero trabó la puerta." },
      "libro-lectura": { text: { A: "Pilar y tú se sientan en el refrigerador. Lees. El mercado escucha.", B: "Pilar y tú se sientan sobre el refrigerador. Lees un capítulo y el mercado se acerca.", C: "Pilar y tú se sientan sobre el refrigerador y lees. Varios vendedores se acercan a escuchar." }, change: "se-sienta", recap: "Leíste un capítulo sentado en el refrigerador de Pilar." },
      "libro-regalo": { text: { A: "Pilar guarda tu libro. Empujan juntos. Entra.", B: "Pilar guarda tu libro en el delantal. Empujan juntos y el refrigerador entra.", C: "Pilar guarda tu libro en el delantal. Empujan juntos y el refrigerador llega a su destino." }, change: "sonrie", recap: "Le regalaste tu libro a Pilar." },
      "corazon-abrazo": { text: { A: "Pilar te abraza mucho tiempo. Después, mueven el refrigerador juntos.", B: "Pilar te abraza largo rato. Después, mueven el refrigerador juntos, sin esfuerzo.", C: "Pilar te abraza largo rato. Luego el refrigerador entra solo, o casi." }, change: "abraza", recap: "Pilar te abrazó antes de mover el refrigerador." },
      "corazon-dentro": { text: { A: "El refrigerador entra. Pilar lo acaricia. «Por papá.»", B: "El refrigerador entra en el mercado cubierto. Pilar lo acaricia. «Por papá.»", C: "El refrigerador llega a su destino. Pilar lo acaricia como a un viejo amigo. «Por papá.»" }, change: "sonrie", recap: "Moviste el refrigerador por el padre de Pilar." },
      "corazon-llamada": { text: { A: "Hablas con el padre de Pilar. Él se ríe. Pilar llora.", B: "Hablas con el padre de Pilar por el celular. Él se ríe y ella llora.", C: "Hablas con el padre de Pilar. Él se ríe al otro lado y Pilar llora de alegría." }, change: "llama", recap: "Hablaste por teléfono con el padre de Pilar." },
      "corazon-helado": { text: { A: "Mañana, helado. Hoy, el refrigerador entra. Pilar sonríe.", B: "Mañana, helado de los de su padre. Hoy, el refrigerador entra. Pilar sonríe.", C: "Mañana, helado de la casa. Hoy, el refrigerador entra. Pilar sonríe con los ojos húmedos." }, change: "sonrie", recap: "Quedaste con Pilar para un helado en honor a su padre." },
      dentro: { text: { A: "El refrigerador está en el mercado cubierto. Pilar te da las gracias.", B: "Por fin, el refrigerador está dentro del mercado cubierto. Pilar te abraza y te promete un helado.", C: "El refrigerador llega a su destino final. Pilar lo acaricia como a un viejo amigo y te promete helado de por vida." }, change: "sonrie", recap: "Ayudaste a Pilar a mover el refrigerador de su padre." },
      carrito: { text: { A: "Usan el carrito. Es muy fácil. Pilar se ríe.", B: "Con el carrito, el refrigerador llega en dos minutos. Pilar no para de reírse.", C: "El carrito resuelve en dos minutos lo que la fuerza no pudo en media hora. Pilar no lo supera." }, change: "sonrie", recap: "Ayudaste a Pilar usando un carrito." },
      descanso: { text: { A: "Pilar y tú descansan. Ella te cuenta de su padre.", B: "Pilar y tú se sientan a descansar. Te cuenta historias de su padre y sus helados.", C: "Se sientan a descansar sobre el refrigerador y Pilar te cuenta la vida de su padre, helado a helado." }, change: "se-sienta", recap: "Descansaste con Pilar después de mover el refrigerador." },
      hijo: { text: { A: "Pilar llama a su hijo. Él no contesta.", B: "Pilar llama a su hijo. No contesta, como siempre.", C: "Pilar llama a su hijo. El buzón de voz responde, fiel a la tradición familiar." }, change: "llama", recap: "No ayudaste a Pilar y ella llamó a su hijo." },
      sola: { text: { A: "Te vas. Pilar empuja sola. Está enfadada.", B: "Te alejas. Pilar sigue empujando sola, de muy mal humor.", C: "Te alejas. Pilar empuja sola, refunfuñando contra ti, la puerta y la ley de la gravedad." }, change: "enojado", recap: "Dejaste a Pilar sola con su refrigerador." },
      policia: { text: { A: "Llega la policía. Explicas todo. Es un malentendido.", B: "Llega la policía. Te pasas un buen rato explicando el malentendido junto al refrigerador.", C: "Llega la policía. Explicar el malentendido junto a un refrigerador envuelto en cinta no ayuda." }, change: "policia", recap: "Asustaste a Pilar y llegó la policía." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Usas cuchillos en tu trabajo?", B: "¿Cómo reaccionas cuando alguien se acerca con algo peligroso?", C: "¿Qué nos dice el miedo ajeno sobre cómo nos ven los demás?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Has tenido un accidente con algo pesado?", B: "¿Qué harías si tu miedo provocara un accidente?", C: "¿Quién es responsable cuando el miedo causa daño?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué objeto de tu familia no cambiarías por nada?", B: "¿Qué harías si algo valioso de tu familia estuviera en peligro?", C: "¿Por qué protegemos objetos como si fueran personas?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Qué llevas en el bolsillo para sentirte seguro?", B: "¿Alguna vez te robaron y cómo cambió tu rutina?", C: "¿Cómo se trabaja de noche en una ciudad donde todos desconfían?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Haces planos o mapas?", B: "¿Cómo organizas una tarea difícil, con lista o sin ella?", C: "¿Qué papel juega el ingenio cuando falta la fuerza?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Lees mientras trabajas?", B: "¿Qué libro le leerías a alguien que trabaja duro?", C: "¿Puede un libro ser útil de formas que su autor no imaginó?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿Quién te abraza cuando estás cansado?", B: "¿Cómo celebras los logros de tus padres?", C: "¿Qué heredamos de nuestros padres además de los objetos?" } },
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
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "teo", mood: "furious",
        line: {
          A: "La ventanita de la puerta T-7 se abre. El hombre ve tu cuchillo. La puerta se abre y él sale con un cuchillo de cocina. «¿Vienes con cuchillo a mi puerta? Yo también tengo. ¿Qué quieres?»",
          B: "Se abre la ventanita de la puerta T-7 y el hombre con barba ve tu cuchillo. Un segundo después, la puerta se abre y sale con un cuchillo de cocina en la mano. «¿Vienes armado a mi puerta? Pues yo también. ¿Qué quieres?»",
          C: "La ventanita de la puerta T-7 se abre, el hombre ve el cuchillo, y la puerta entera se abre de golpe: sale con un cuchillo de cocina y cara de pocos amigos. «¿Vienes con cuchillo a mi puerta? Mala idea. Yo también tengo uno.»",
        },
        options: [
          {
            id: "llave",
            say: { A: "Tengo una llave. No vengo a pelear.", B: "Tengo una llave, no vengo a pelear.", C: "Traigo una llave, no una pelea. El cuchillo es un malentendido." },
            reply: { A: "Teo no baja el cuchillo. «¿Una llave? Enséñala. Despacio.»", B: "Teo no baja el cuchillo. «¿Una llave? Enséñamela. Muy despacio.»", C: "Teo mantiene el cuchillo en alto. «¿Una llave? Muéstrala. Despacio, que la noche ya está bastante tensa.»" },
            mood: "worried", next: "cuchillo-duelo",
          },
          {
            id: "bajar",
            say: { A: "Baja el tuyo y yo bajo el mío.", B: "Baja el tuyo y yo bajo el mío. A la vez.", C: "Baja el tuyo y bajo el mío. Al mismo tiempo, sin trucos." },
            reply: { A: "Teo baja un poco el cuchillo. «A la vez. Y después me explicas.»", B: "Teo baja el cuchillo unos centímetros. «A la vez. Y después me explicas qué haces en mi callejón.»", C: "Teo cede unos centímetros. «A la vez. Y luego me cuentas qué te trae a una puerta que nadie visita.»" },
            mood: "worried", next: "cuchillo-duelo",
          },
          {
            id: "entrar",
            say: { A: "Abre o entro.", B: "Abre la puerta o entro yo.", C: "Abre, o entro por mi cuenta." },
            reply: { A: "Teo cierra la puerta de golpe. Desde dentro: «¡Policía! ¡Hay un loco con cuchillo!»", B: "Teo cierra la puerta de un portazo. Desde dentro oyes: «¿Policía? Hay un loco con un cuchillo en mi puerta».", C: "Teo cierra con un portazo. Desde dentro: «¿Policía? Un individuo armado en la T-7. Sí, un cuchillo»." },
            mood: "terror", end: "cuchillo-cerrojo",
          },
        ],
      },
      "cuchillo-duelo": {
        who: "teo", mood: "scared",
        line: {
          A: "Teo y tú, con los cuchillos a medio bajar. Tú sacas la llave con la otra mano. Teo la mira. «Esa llave…»",
          B: "Los dos siguen con los cuchillos a medio bajar. Sacas la llave con la otra mano y Teo la ve a la luz del farol. «Esa llave… ¿De dónde la has sacado?»",
          C: "Dos cuchillos a medio camino y una llave en tu otra mano. Teo la mira bajo el farol y algo cambia en su cara. «Esa llave. ¿De dónde la has sacado?»",
        },
        options: [
          {
            id: "abuelo",
            say: { A: "Una señora me la dio. Creo que era de tu abuelo.", B: "Me la dio una señora mayor. Creo que era de tu abuelo.", C: "Una señora mayor me la puso en la mano. Sospecho que era de tu abuelo." },
            reply: { A: "Teo suelta el cuchillo. «Era de mi abuelo. Pasa. Pero guarda eso.»", B: "El cuchillo de Teo cae al suelo. «Era de mi abuelo. Hace veinte años que no la veía. Pasa. Pero guarda el tuyo.»", C: "Teo deja caer el cuchillo. «Era de mi abuelo. Veinte años perdida. Pasa. Y guarda el tuyo, por favor.»" },
            mood: "surprised", end: "cuchillo-llave",
          },
          {
            id: "guardo",
            act: { A: "Guardas tu cuchillo primero.", B: "Guardas tu cuchillo primero, despacio.", C: "Guardas tu cuchillo antes que él, con lentitud deliberada." },
            say: { A: "Guardo el mío primero. Mira. Ahora la llave.", B: "Guardo el mío primero. Mira. Ahora hablemos de la llave.", C: "Guardo el mío primero, para que veas. Ahora, la llave." },
            reply: { A: "Teo guarda el suyo. «Bien. Pasa. Hablamos dentro, con luz.»", B: "Teo guarda el suyo despacio. «Bien. Pasa. Hablamos dentro, con luz y sin cuchillos.»", C: "Teo guarda el suyo. «De acuerdo. Pasa. Dentro hay luz y ningún cuchillo más.»" },
            mood: "worried", end: "cuchillo-tregua",
          },
          {
            id: "irse",
            say: { A: "Me voy con la llave. Esto es raro.", B: "Me voy con la llave. Esto es demasiado raro.", C: "Me retiro con la llave. Esto se ha puesto demasiado raro." },
            reply: { A: "Teo grita: «¡Espera! ¡Esa llave!» Tú corres.", B: "Teo grita a tu espalda: «¡Espera! ¡Esa llave es de mi familia!» Tú ya corres por el callejón.", C: "Teo grita: «¡Espera! ¡Esa llave es mía!» Pero tú ya corres callejón abajo." },
            mood: "scared", end: "cuchillo-huida",
          },
        ],
      },
      "pistola-inicio": {
        who: "teo", mood: "terror",
        line: {
          A: "La ventanita de la puerta T-7 se abre. El hombre ve tu pistola. Abre la puerta con las manos arriba. «No hay nada aquí. Un bar vacío. Llévate lo que quieras.»",
          B: "Se abre la ventanita de la puerta T-7 y el hombre con barba ve tu pistola. Abre la puerta entera con las manos en alto. «No hay nada aquí. Un bar vacío y fotos viejas. Llévate lo que quieras.»",
          C: "La ventanita de la T-7 se abre, el hombre ve la pistola y abre la puerta con las manos en alto. «Aquí no hay nada que valga un disparo. Un bar vacío y fotos de muertos. Llévate lo que quieras.»",
        },
        options: [
          {
            id: "llave",
            say: { A: "Baja las manos. Tengo una llave. Es de esta puerta.", B: "Baja las manos. Tengo una llave que creo que es de esta puerta.", C: "Baja las manos. Traigo una llave que, creo, pertenece a esta puerta." },
            reply: { A: "Teo no baja las manos. «¿Una llave? Enséñamela. Despacio.»", B: "Teo no baja las manos. «¿Una llave? Enséñamela, pero despacio.»", C: "Teo mantiene las manos arriba. «¿Una llave? Muéstrala. Despacio, que la pistola sigue ahí.»" },
            mood: "scared", next: "pistola-miedo",
          },
          {
            id: "guardar",
            act: { A: "Guardas la pistola.", B: "Guardas la pistola dentro de la chaqueta.", C: "Guardas la pistola en la chaqueta y muestras las palmas." },
            say: { A: "Perdón. Ya está. No vengo a robar.", B: "Perdona, ya la guardé. No vengo a robar nada.", C: "Perdona. Guardada. No vengo a robar; vengo por otra cosa." },
            reply: { A: "Teo baja las manos un poco. «¿Entonces a qué vienes?»", B: "Teo baja las manos a medias. «¿Entonces a qué vienes a una puerta que nadie visita?»", C: "Teo baja las manos despacio. «¿Y a qué viene alguien armado a una puerta olvidada?»" },
            mood: "scared", next: "pistola-miedo",
          },
          {
            id: "dentro",
            say: { A: "Enséñame qué hay dentro.", B: "Enséñame qué hay ahí dentro.", C: "Muéstrame qué guardas ahí dentro." },
            reply: { A: "Teo se aparta. Entras. Un bar pequeño. Al salir, una patrulla te espera.", B: "Teo se aparta con las manos arriba. Entras: un bar diminuto, fotos viejas. Al salir, una patrulla te espera en el callejón.", C: "Teo se aparta sin bajar las manos. Entras en un bar del tamaño de un armario. Al salir, una patrulla bloquea el callejón." },
            mood: "terror", end: "pistola-robo",
          },
        ],
      },
      "pistola-miedo": {
        who: "teo", mood: "scared",
        line: {
          A: "Teo está en la puerta, tenso. «Bueno. Dime qué quieres. Pero sin tocar eso.»",
          B: "Teo sigue en el umbral, tenso como una cuerda. «Bueno. Dime qué quieres. Pero sin tocar eso que llevas.»",
          C: "Teo ocupa el umbral, rígido. «Dime qué quieres. Y que la mano no se acerque a la chaqueta.»",
        },
        options: [
          {
            id: "llave",
            act: { A: "Sacas la llave despacio.", B: "Sacas la llave muy despacio.", C: "Sacas la llave con lentitud exagerada." },
            say: { A: "Mira esta llave. ¿Es tuya?", B: "Mira esta llave. ¿Es de aquí?", C: "Mira esta llave. ¿Te dice algo?" },
            reply: { A: "Teo mira la llave. «Era de mi abuelo. Pasa. Pero lejos de mí.»", B: "Teo mira la llave y se queda sin aire. «Era de mi abuelo. Pasa. Pero mantén la distancia.»", C: "Teo ve la llave y palidece por otro motivo. «Era de mi abuelo. Pasa. A distancia, pero pasa.»" },
            mood: "surprised", end: "pistola-llave",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy. Olvida esto.", B: "Perdona. Me voy. Olvida que vine.", C: "Perdona. Me retiro. Olvida esta visita." },
            reply: { A: "Teo cierra la puerta despacio. No dice nada.", B: "Teo cierra la puerta despacio, sin decir palabra.", C: "Teo cierra la puerta sin prisa y sin despedida." },
            mood: "worried", end: "pistola-cerrada",
          },
          {
            id: "legal",
            say: { A: "Es legal. Tengo permiso. Tranquilo.", B: "Es legal, tengo permiso. Tranquilo.", C: "Está todo en regla, tengo permiso. Tranquilo." },
            reply: { A: "Teo asiente. Detrás de él, oyes un teléfono. Ya llamó.", B: "Teo asiente despacio. Detrás de él, alguien habla por teléfono: ya llamó a la policía.", C: "Teo asiente. Desde dentro llega una voz al teléfono: la llamada ya está hecha." },
            mood: "scared", end: "pistola-policia",
          },
        ],
      },
      "granada-inicio": {
        who: "teo", mood: "terror",
        line: {
          A: "La ventanita de la puerta T-7 se abre. El hombre ve tu granada, grita y cierra. Desde dentro: «¡Una granada! ¡Vete! ¡Voy a llamar a todo el mundo!»",
          B: "Se abre la ventanita de la puerta T-7, el hombre con barba ve tu granada, grita y la cierra de golpe. Desde dentro: «¡Una granada! ¡Vete de aquí! ¡Voy a llamar a todo el mundo!»",
          C: "La ventanita de la T-7 se abre, el hombre ve la granada, suelta un grito y la cierra de un golpe. Desde dentro: «¡Una granada! ¡Largo! ¡Llamo a la policía, a los bomberos y a mi madre!»",
        },
        options: [
          {
            id: "llave",
            say: { A: "¡Tengo una llave, no una bomba!", B: "¡Traigo una llave, no una bomba!", C: "¡Vengo con una llave, no con una bomba!" },
            reply: { A: "Desde dentro: «¡Una llave y una granada! ¡Guárdala!»", B: "Desde dentro: «¡Una llave y una granada! ¡Qué combinación! ¡Guárdala!»", C: "Desde dentro: «¡Llave y granada! ¡Qué manera de presentarse! ¡Guárdala!»" },
            mood: "scared", next: "granada-puerta",
          },
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡No explota!", B: "¡Es de juguete! ¡No explota, de verdad!", C: "¡Es de juguete! ¡Inofensiva, lo juro!" },
            reply: { A: "Desde dentro: «¡Nadie lleva juguetes así! ¡Guárdala!»", B: "Desde dentro: «¡Nadie trae juguetes así a un callejón! ¡Guárdala!»", C: "Desde dentro: «¡Ningún juguete asusta así! ¡Guárdala y hablamos!»" },
            mood: "scared", next: "granada-puerta",
          },
          {
            id: "usar",
            say: { A: "¡Abre o la uso!", B: "¡Abre la puerta o la uso!", C: "¡Abre, o la uso contra la puerta!" },
            reply: { A: "Silencio. Después, un helicóptero ilumina el callejón.", B: "Silencio total. Dos minutos después, un helicóptero ilumina el callejón de arriba abajo.", C: "Silencio. Luego, el ruido de un helicóptero y un foco que convierte el callejón en un escenario." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-puerta": {
        who: "teo", mood: "scared",
        line: {
          A: "La puerta sigue cerrada. Teo habla desde dentro. «Guárdala. Y pasa la llave por la ventanita. Solo la llave.»",
          B: "La puerta sigue cerrada. La voz de Teo llega desde dentro. «Guárdala. Después, pasa la llave por la ventanita. Solo la llave, nada más.»",
          C: "La puerta no se abre. Teo habla a través de la madera. «Guárdala. Luego pasas la llave por la ventanita. La llave, no la granada.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la granada y pasas la llave por la ventanita.", B: "Guardas la granada en la mochila y pasas la llave por la ventanita.", C: "Guardas la granada en el fondo de la mochila y deslizas la llave por la ventanita." },
            say: { A: "Ya está. Aquí tienes la llave.", B: "Listo. Aquí tienes la llave.", C: "Guardada. Aquí va la llave." },
            reply: { A: "Silencio. La puerta se abre. Teo mira la llave. «Era de mi abuelo.»", B: "Silencio largo. La puerta se abre despacio. Teo mira la llave con los ojos muy abiertos. «Era de mi abuelo.»", C: "Un silencio eterno. La puerta se abre con un quejido. Teo sostiene la llave como un fantasma. «Era de mi abuelo.»" },
            mood: "surprised", end: "granada-llave",
          },
          {
            id: "policia",
            say: { A: "Que venga la policía. No hago nada malo.", B: "Que venga la policía. No estoy haciendo nada malo.", C: "Que venga la policía. Llevar una granada no es delito. Creo." },
            reply: { A: "Teo, desde dentro: «Ya viene.» Luces azules en el callejón.", B: "Teo, desde dentro: «Ya viene, no te preocupes.» Luces azules entran en el callejón.", C: "Teo, desde dentro: «Ya está en camino.» Las luces azules llenan el callejón." },
            mood: "terror", end: "granada-policia",
          },
          {
            id: "irse",
            say: { A: "Me voy. Me llevo la llave.", B: "Me voy y me llevo la llave conmigo.", C: "Me voy, y la llave viene conmigo." },
            reply: { A: "Teo no contesta. La puerta sigue cerrada.", B: "Teo no responde. La puerta sigue cerrada, como siempre.", C: "Teo no responde. La puerta vuelve a su sueño de décadas." },
            mood: "sad", end: "cerrada",
          },
        ],
      },
      "gas-inicio": {
        who: "teo", mood: "angry",
        line: {
          A: "La ventanita de la puerta T-7 se abre de golpe y sacas el gas pimienta. Por la ventanita aparece otro gas. «¡Yo también tengo! ¿Quién eres?»",
          B: "La ventanita de la puerta T-7 se abre de golpe y sacas el gas pimienta. Por la ventanita asoma otro gas pimienta, apuntándote. «¡Yo también tengo! ¿Quién eres y qué quieres?»",
          C: "La ventanita de la T-7 se abre de golpe y el gas pimienta aparece en tu mano. Por la ventanita asoma otro, en una mano con barba. «¡Yo también tengo! ¿Quién eres y qué buscas en mi callejón?»",
        },
        options: [
          {
            id: "perdon",
            act: { A: "Bajas el gas.", B: "Bajas el gas pimienta.", C: "Bajas el gas con gesto de disculpa." },
            say: { A: "Perdón. El callejón da miedo. Bajo el mío.", B: "Perdona, este callejón da miedo de noche. Bajo el mío.", C: "Perdona, el callejón no invita a la calma. Bajo el mío." },
            reply: { A: "El otro gas baja un poco. «El callejón es mío. ¿Qué quieres?»", B: "El gas de la ventanita baja un poco. «El callejón es mío y da miedo a propósito. ¿Qué quieres?»", C: "El gas de la ventanita desciende unos centímetros. «El callejón da miedo porque yo lo quiero así. ¿Qué buscas?»" },
            mood: "worried", next: "gas-ventanita",
          },
          {
            id: "llave",
            say: { A: "Tengo una llave. Creo que es de esta puerta.", B: "Tengo una llave que creo que es de esta puerta.", C: "Traigo una llave que, sospecho, abre esta puerta." },
            reply: { A: "El gas no baja. «¿Una llave? Nadie tiene llave de aquí. Enséñala.»", B: "El gas de la ventanita no se mueve. «¿Una llave? Nadie tiene llave de esta puerta. Enséñamela.»", C: "El gas sigue apuntándote. «¿Una llave de la T-7? Nadie la tiene desde hace veinte años. Muéstrala.»" },
            mood: "worried", next: "gas-ventanita",
          },
          {
            id: "camino",
            say: { A: "Quita eso de mi camino.", B: "Quita eso de mi camino, ya.", C: "Aparta eso de mi camino, ahora." },
            reply: { A: "La ventanita se cierra. «Este no es tu camino.»", B: "La ventanita se cierra de golpe. «Este callejón no es tu camino. Vete.»", C: "La ventanita se cierra con un chasquido. «Este no es tu camino. Nunca lo fue.»" },
            mood: "angry", end: "gas-cerrada",
          },
        ],
      },
      "gas-ventanita": {
        who: "teo", mood: "worried",
        line: {
          A: "Dos gases pimienta, uno a cada lado de la ventanita. Teo habla. «Bueno. ¿Los dos a la vez?»",
          B: "Dos gases pimienta a cada lado de la ventanita, como un duelo ridículo. Teo habla. «Bueno. ¿Los guardamos los dos a la vez?»",
          C: "Dos gases pimienta separados por una ventanita: el duelo más absurdo del barrio. Teo habla. «Propongo que los guardemos a la vez, con dignidad.»",
        },
        options: [
          {
            id: "llave",
            act: { A: "Guardas el gas y enseñas la llave.", B: "Guardas el gas y levantas la llave hacia la ventanita.", C: "Guardas el gas y alzas la llave a la luz del farol." },
            say: { A: "Guardado. Mira la llave.", B: "Guardado. Ahora mira esta llave.", C: "Guardado. Ahora mira esto: la llave." },
            reply: { A: "El gas desaparece. La puerta se abre. «Esa llave era de mi abuelo.»", B: "El gas de la ventanita desaparece. La puerta se abre despacio. «Esa llave… era de mi abuelo.»", C: "El gas se retira. La puerta se abre con un quejido. «Esa llave era de mi abuelo. Veinte años.»" },
            mood: "surprised", end: "gas-llave",
          },
          {
            id: "porque",
            say: { A: "¿Por qué tienes gas en un bar?", B: "¿Por qué tienes gas pimienta en un bar cerrado?", C: "¿Por qué guarda gas pimienta el guardián de un bar que no abre?" },
            reply: { A: "Teo guarda el gas. «Entraron a robar hace años. Mi abuelo me lo dejó con el bar. Siéntate.»", B: "Teo guarda el gas. «Hace años entraron a robar. Mi abuelo me dejó el bar y el gas. Pasa, te lo cuento sentado.»", C: "Teo retira el gas. «Entraron a robar hace años. Mi abuelo me dejó el bar, el gas y el miedo. Pasa, te lo cuento.»" },
            mood: "sad", end: "gas-historia",
          },
          {
            id: "los-dos",
            act: { A: "Guardas el gas.", B: "Guardas el gas a la vez que él.", C: "Guardas el gas al mismo tiempo que Teo." },
            say: { A: "Los dos a la vez. Ya. Y mira: una llave.", B: "Los dos a la vez. Listo. Y ahora mira: una llave.", C: "A la vez. Hecho. Y ahora, mira: una llave." },
            reply: { A: "Teo abre la puerta. Mira la llave. «Me llamo Teo. Esta llave era de mi abuelo.»", B: "Teo abre la puerta y toma la llave con cuidado. «Soy Teo. Esta llave era de mi abuelo. Desapareció hace veinte años.»", C: "Teo abre y da vueltas a la llave entre los dedos. «Me llamo Teo. Esta llave lleva veinte años desaparecida.»" },
            mood: "surprised", next: "abuelo",
          },
        ],
      },
      "lapiz-inicio": {
        who: "teo", mood: "surprised",
        line: {
          A: "Dibujas la puerta T-7 con tu lápiz. La ventanita se abre. «¿Estás dibujando mi puerta? Nadie la dibuja desde mi abuelo.»",
          B: "Estás dibujando la puerta T-7 con tu lápiz cuando se abre la ventanita. «¿Estás dibujando mi puerta? Nadie la dibuja desde que murió mi abuelo.»",
          C: "Dibujas la puerta T-7 bajo el farol cuando la ventanita se abre. «¿Dibujas mi puerta? La última persona que lo hizo fue mi abuelo, y de eso hace décadas.»",
        },
        options: [
          {
            id: "historia",
            say: { A: "Es una puerta preciosa. ¿Me cuentas su historia?", B: "Es una puerta preciosa. ¿Me cuentas su historia mientras dibujo?", C: "Es una puerta con historia. ¿Me la cuentas mientras termino el dibujo?" },
            reply: { A: "El hombre sale. «Mi abuelo la pintó. Enséñame el dibujo.»", B: "El hombre abre la puerta y sale. «La pintó mi abuelo en 1970. A ver ese dibujo.»", C: "El hombre sale al callejón. «Mi abuelo la pintó en 1970 y la cuidó como a un hijo. Enséñame el dibujo.»" },
            mood: "smile", next: "lapiz-dibujo",
          },
          {
            id: "llave",
            act: { A: "Dibujas la llave junto a la puerta.", B: "Dibujas la llave que llevas junto a la puerta.", C: "Añades al dibujo la llave que llevas en el bolsillo." },
            say: { A: "Dibujo la llave y la puerta. Son iguales.", B: "Dibujo la llave y la puerta. Tienen el mismo dibujo.", C: "Dibujo la llave y la puerta. Comparten el mismo grabado." },
            reply: { A: "El hombre sale. Mira el dibujo y la llave. «¿De dónde…? Enséñame.»", B: "El hombre sale y mira el dibujo, luego la llave. «¿De dónde has sacado…? Enséñame eso.»", C: "El hombre sale y mira alternativamente el dibujo y la llave. «Eso no puede ser. Enséñamela.»" },
            mood: "surprised", next: "lapiz-dibujo",
          },
          {
            id: "nota",
            act: { A: "Escribes una nota.", B: "Escribes una nota rápida.", C: "Escribes una nota breve en el margen del dibujo." },
            say: { A: "Te dejo una nota por la ventanita.", B: "Te paso una nota por la ventanita.", C: "Te deslizo una nota por la ventanita." },
            reply: { A: "El hombre toma la nota. «¿Qué dice?»", B: "El hombre toma la nota a través de la ventanita. «¿Y qué dice esta nota?»", C: "El hombre recoge la nota. «Veamos qué dice.»" },
            mood: "neutral", next: "lapiz-nota",
          },
        ],
      },
      "lapiz-dibujo": {
        who: "teo", mood: "smile",
        line: {
          A: "El hombre mira tu dibujo mucho tiempo. «Está igual que en 1970. ¿Qué hacemos con él?»",
          B: "El hombre mira tu dibujo en silencio. «Está exactamente igual que en 1970. ¿Y qué hacemos con este dibujo?»",
          C: "El hombre contempla el dibujo largo rato. «Es la puerta de 1970, intacta. ¿Qué hacemos con esto?»",
        },
        options: [
          {
            id: "regalo",
            say: { A: "Es tuyo. Cuélgalo dentro.", B: "Es tuyo. Cuélgalo ahí dentro.", C: "Es tuyo. Cuélgalo dentro, junto a las fotos." },
            reply: { A: "Teo abre la puerta. «Pasa. Lo cuelgo contigo.» Enciende la luz.", B: "Teo abre la puerta del todo. «Pasa. Lo colgamos juntos.» Y enciende las luces del bar.", C: "Teo abre la puerta de par en par. «Pasa. Lo colgamos juntos, al lado de mi abuelo.» Y la luz vuelve al bar." },
            mood: "love", end: "lapiz-regalo",
          },
          {
            id: "llave",
            act: { A: "Sacas la llave.", B: "Sacas la llave del bolsillo.", C: "Sacas la llave y se la muestras." },
            say: { A: "Antes, mira esto. Una llave.", B: "Antes de nada, mira esto: una llave.", C: "Antes de decidir, mira esto. Una llave." },
            reply: { A: "El hombre mira la llave. «Me llamo Teo. Era de mi abuelo.»", B: "El hombre toma la llave con cuidado. «Soy Teo. Esta llave era de mi abuelo. Desapareció hace veinte años.»", C: "El hombre da vueltas a la llave entre los dedos. «Me llamo Teo. Esta llave lleva veinte años desaparecida.»" },
            mood: "surprised", next: "abuelo",
          },
          {
            id: "firma",
            act: { A: "Le das el lápiz.", B: "Le ofreces el lápiz.", C: "Le tiendes el lápiz." },
            say: { A: "Fírmalo tú. Es tu puerta.", B: "Fírmalo tú, que es tu puerta.", C: "Fírmalo tú. La puerta es tuya; el dibujo, también." },
            reply: { A: "Teo firma. «Teo. Nieto.» Se ríe por primera vez.", B: "Teo firma despacio: «Teo, nieto». Y se ríe por primera vez en la noche.", C: "Teo firma con cuidado: «Teo, nieto del pintor». Y suelta la primera risa de la noche." },
            mood: "smile", end: "lapiz-firma",
          },
        ],
      },
      "lapiz-nota": {
        who: "teo", mood: "neutral",
        line: {
          A: "El hombre tiene tu nota en la mano. «Léemela tú. Mi vista ya no es buena.»",
          B: "El hombre sostiene tu nota junto a la ventanita. «Léemela tú, que con esta luz no veo nada.»",
          C: "El hombre sostiene la nota contra la luz del farol. «Léemela. Mis ojos y este farol no se llevan bien.»",
        },
        options: [
          {
            id: "llave",
            say: { A: "Dice: «Tengo la llave de tu abuelo».", B: "Dice: «Tengo la llave de tu abuelo. Me la dio una señora».", C: "Dice: «Traigo la llave de tu abuelo. Me la confió una señora mayor»." },
            reply: { A: "La puerta se abre. Teo mira la llave. «Pasa. Por favor.» Enciende la luz.", B: "La puerta se abre de golpe. Teo ve la llave en tu mano. «Pasa. Por favor.» Y enciende las luces del bar.", C: "La puerta se abre sin aviso. Teo mira la llave como a un fantasma. «Pasa, por favor.» Y la luz vuelve al bar." },
            mood: "surprised", end: "lapiz-llave",
          },
          {
            id: "manana",
            say: { A: "Dice: «Vuelvo mañana». Y mi número.", B: "Dice: «Vuelvo mañana con una llave». Y mi número.", C: "Dice: «Vuelvo mañana, con una llave y más tiempo». Y mi número." },
            reply: { A: "Teo guarda la nota. «Mañana, entonces.» Cierra la ventanita.", B: "Teo guarda la nota en el bolsillo. «Mañana, entonces. Trae esa llave.» Y cierra la ventanita.", C: "Teo guarda la nota. «Mañana. Y trae esa llave, que me has dejado intrigado.» La ventanita se cierra." },
            mood: "neutral", end: "lapiz-manana",
          },
          {
            id: "ahora",
            act: { A: "Sacas la llave.", B: "Sacas la llave del bolsillo.", C: "Sacas la llave y la levantas hacia la ventanita." },
            say: { A: "Mejor te la enseño ahora. Mira.", B: "Mejor te la enseño ahora mismo. Mira.", C: "Mejor te la muestro ahora. Mira." },
            reply: { A: "La puerta se abre. «Me llamo Teo. Era de mi abuelo.»", B: "La puerta se abre y Teo toma la llave con cuidado. «Soy Teo. Esta llave era de mi abuelo.»", C: "La puerta se abre y Teo da vueltas a la llave entre los dedos. «Me llamo Teo. Esta llave lleva veinte años desaparecida.»" },
            mood: "surprised", next: "abuelo",
          },
        ],
      },
      "libro-inicio": {
        who: "teo", mood: "surprised",
        line: {
          A: "La ventanita de la puerta T-7 se abre. El hombre mira tu libro. «¿Qué libro es ese? Mi abuelo tenía ese mismo.»",
          B: "Se abre la ventanita de la puerta T-7 y el hombre con barba se fija en tu libro. «¿Qué libro es ese? Mi abuelo tenía esa misma edición.»",
          C: "La ventanita de la T-7 se abre y el hombre clava la vista en tu libro. «Ese libro. Mi abuelo tenía exactamente esa edición. ¿De dónde lo has sacado?»",
        },
        options: [
          {
            id: "abuelo",
            say: { A: "¿Tu abuelo? ¿Quién era?", B: "¿Tu abuelo? ¿Quién era tu abuelo?", C: "¿Tu abuelo? Cuéntame quién era." },
            reply: { A: "El hombre abre la puerta. «Teo. Mi abuelo tenía este bar. Pasa.»", B: "El hombre abre la puerta despacio. «Me llamo Teo. Mi abuelo tenía este bar y ese libro. Pasa.»", C: "El hombre abre la puerta. «Teo. Mi abuelo era el dueño de este bar y de ese libro. Pasa, que esto hay que verlo con luz.»" },
            mood: "smile", next: "libro-abuelo",
          },
          {
            id: "trato",
            say: { A: "Te lo regalo si me dejas entrar.", B: "Te lo regalo si me dejas pasar.", C: "Es tuyo, a cambio de entrar." },
            reply: { A: "El hombre se ríe. «Trato. Pasa. Soy Teo.»", B: "El hombre se ríe por primera vez. «Trato hecho. Pasa. Me llamo Teo.»", C: "El hombre suelta una risa corta. «Trato. Pasa. Soy Teo, y ese libro vuelve a casa.»" },
            mood: "smile", next: "libro-abuelo",
          },
          {
            id: "llave",
            act: { A: "Sacas la llave.", B: "Sacas la llave del bolsillo.", C: "Sacas la llave y la levantas hacia la ventanita." },
            say: { A: "También tengo una llave. Mira.", B: "También traigo una llave. Mira.", C: "Además del libro, traigo una llave. Mira." },
            reply: { A: "La puerta se abre. «Me llamo Teo. Era de mi abuelo.»", B: "La puerta se abre y Teo toma la llave con cuidado. «Soy Teo. Esta llave era de mi abuelo.»", C: "La puerta se abre y Teo da vueltas a la llave entre los dedos. «Me llamo Teo. Esta llave lleva veinte años desaparecida.»" },
            mood: "surprised", next: "abuelo",
          },
        ],
      },
      "libro-abuelo": {
        who: "teo", mood: "smile",
        line: {
          A: "Dentro, un bar muy pequeño. Teo toma tu libro. «¿Puedo? Quiero ver una cosa.»",
          B: "Dentro hay un bar diminuto con fotos viejas. Teo toma tu libro con cuidado. «¿Me permites? Quiero comprobar una cosa.»",
          C: "Dentro, un bar del tamaño de un armario. Teo toma tu libro como una reliquia. «¿Me permites? Quiero comprobar algo.»",
        },
        options: [
          {
            id: "dedicatoria",
            say: { A: "Mira la primera página. Hay algo escrito.", B: "Mira la primera página. Hay una dedicatoria.", C: "Abre la primera página. Hay una dedicatoria escrita a mano." },
            reply: { A: "Teo lee: «Para mi amor. Amparo». Se sienta. «Es el libro de mi abuelo.» Enciende las luces.", B: "Teo lee en voz baja: «Para mi amor, que nunca olvida. Amparo». Se sienta despacio. «Es el libro de mi abuelo. Es su libro.» Y enciende todas las luces.", C: "Teo lee: «Para mi amor, que no olvida. Amparo». Se sienta como si le fallaran las piernas. «Es el libro de mi abuelo. Volvió solo.» Y enciende el bar entero." },
            mood: "love", end: "libro-dedicatoria",
          },
          {
            id: "leer",
            say: { A: "Léeme algo. Aquí, con luz.", B: "Léeme algo de ese libro, aquí, con luz.", C: "Léeme un fragmento. Aquí, bajo esta luz." },
            reply: { A: "Teo enciende una lámpara y lee. Su voz tiembla.", B: "Teo enciende una lámpara vieja y lee una página. Le tiembla la voz.", C: "Teo enciende una lámpara antigua y lee una página en voz alta. La voz le tiembla desde la primera línea." },
            mood: "love", end: "libro-lectura",
          },
          {
            id: "irse",
            say: { A: "Mejor me quedo el libro. Me voy.", B: "Pensándolo bien, me quedo el libro. Me voy.", C: "Lo he pensado mejor: el libro se queda conmigo. Me voy." },
            reply: { A: "Teo te devuelve el libro. «Como quieras.» Cierra la puerta.", B: "Teo te devuelve el libro sin discutir. «Como quieras.» Y la puerta se cierra detrás de ti.", C: "Teo te devuelve el libro con cuidado. «Como quieras.» La puerta se cierra sin ruido." },
            mood: "sad", end: "libro-cerrada",
          },
        ],
      },
      "corazon-inicio": {
        who: "teo", mood: "smitten",
        line: {
          A: "La ventanita de la puerta T-7 se abre. El hombre ve el corazón. Abre la puerta entera. «Hace veinte años que nadie llama a esta puerta con esa cara.»",
          B: "Se abre la ventanita de la puerta T-7 y el hombre con barba ve el corazón. Abre la puerta de par en par. «Hace veinte años que nadie llama a esta puerta con esa cara. Pasa.»",
          C: "La ventanita de la T-7 se abre, el hombre ve el corazón y, sin pensarlo, abre la puerta entera. «Veinte años sin que nadie llame con esa cara. Pasa, antes de que me arrepienta.»",
        },
        options: [
          {
            id: "puerta",
            say: { A: "Tu puerta es preciosa. Por eso llamé.", B: "Tu puerta es preciosa, por eso llamé a ella.", C: "Tu puerta es la más bonita del mercado. Por eso llamé." },
            reply: { A: "Teo sonríe. «La pintó mi abuelo. Pasa. Soy Teo.»", B: "Teo sonríe sin querer. «La pintó mi abuelo. Nadie se fija. Pasa, me llamo Teo.»", C: "Teo sonríe. «Mi abuelo la pintó y nadie la mira. Pasa. Soy Teo, el guardián de lo que nadie mira.»" },
            mood: "love", next: "corazon-dentro",
          },
          {
            id: "llave",
            say: { A: "Traigo una llave y buenas intenciones.", B: "Traigo esta llave y muy buenas intenciones.", C: "Traigo una llave y las mejores intenciones." },
            reply: { A: "Teo mira la llave. Se emociona. «Era de mi abuelo. Pasa.»", B: "Teo mira la llave y se le humedecen los ojos. «Era de mi abuelo. Pasa, por favor.»", C: "Teo ve la llave y algo se le rompe en la cara. «Era de mi abuelo. Pasa, por favor. Esta noche es rara.»" },
            mood: "love", next: "corazon-dentro",
          },
          {
            id: "triste",
            say: { A: "Pareces triste. ¿Estás bien?", B: "Te veo triste. ¿Te encuentras bien?", C: "Tienes cara de llevar mucho tiempo triste. ¿Estás bien?" },
            reply: { A: "Teo se sorprende. «Nadie me lo pregunta. Pasa. Te lo cuento.»", B: "Teo se queda quieto. «Hace años que nadie me lo pregunta. Pasa. Te lo cuento dentro.»", C: "Teo parpadea. «Nadie me lo ha preguntado en años. Pasa. Dentro se cuenta mejor.»" },
            mood: "love", next: "corazon-dentro",
          },
        ],
      },
      "corazon-dentro": {
        who: "teo", mood: "love",
        line: {
          A: "Dentro, un bar muy pequeño con fotos viejas. Teo enciende una lámpara. «Esto es La Trastienda. ¿Qué hacemos?»",
          B: "Dentro, un bar diminuto: seis taburetes, fotos en blanco y negro, una radio antigua. Teo enciende una lámpara. «Esto es La Trastienda. ¿Qué hacemos esta noche?»",
          C: "Un bar del tamaño de un armario, con fotos sepia y una radio que parece escuchar. Teo enciende una lámpara. «La Trastienda. ¿Qué hacemos con esta noche?»",
        },
        options: [
          {
            id: "abrir",
            say: { A: "Abrimos el bar esta noche. Para los dos.", B: "Abrimos el bar esta noche. Aunque sea para los dos.", C: "Abramos el bar esta noche. Aunque los clientes seamos solo nosotros." },
            reply: { A: "Teo enciende todas las luces. «Hoy abre otra vez.»", B: "Teo enciende todas las luces, una a una. «Hoy La Trastienda vuelve a abrir.»", C: "Teo enciende todas las luces, una por una. «Veinte años cerrada. Hoy abre otra vez.»" },
            mood: "love", end: "corazon-luz",
          },
          {
            id: "amparo",
            say: { A: "Hay una foto de una mujer. ¿Quién es?", B: "Hay una foto de una mujer con pañuelo. ¿Quién es?", C: "Esa foto, la de la mujer con pañuelo. ¿Quién es?" },
            reply: { A: "Teo toma la foto. «Amparo. El amor de mi abuelo.» Te abraza sin querer.", B: "Teo toma la foto con cuidado. «Amparo. El gran amor de mi abuelo. Nunca se casaron.» Y te abraza, sin pensarlo.", C: "Teo descuelga la foto. «Amparo. El amor que mi abuelo nunca olvidó.» Y te abraza, como si lo necesitara." },
            mood: "love", end: "corazon-amparo",
          },
          {
            id: "brindis",
            say: { A: "Brindemos por tu abuelo. Con jugo.", B: "Brindemos por tu abuelo. Con lo que haya.", C: "Un brindis por tu abuelo. Con lo que tengas, sin alcohol." },
            reply: { A: "Teo sirve dos vasos. «Por el abuelo.» Chocan.", B: "Teo sirve dos vasos de algo antiguo y dulce. «Por el abuelo.» Chocan los vasos.", C: "Teo sirve dos vasos de un jarabe de otra época. «Por el abuelo.» Los vasos chocan." },
            mood: "love", end: "corazon-brindis",
          },
        ],
      },
    },
    ends: {
      "cuchillo-cerrojo": { text: { A: "Llega la policía al callejón. Te quitan el cuchillo. La puerta no se abre.", B: "Llega la policía al callejón y te quitan el cuchillo. La puerta T-7 no vuelve a abrirse.", C: "La policía te quita el cuchillo en el callejón. La puerta T-7 sigue cerrada, y ahora con motivo." }, change: "policia", recap: "Amenazaste la puerta T-7 con el cuchillo y llegó la policía." },
      "cuchillo-llave": { text: { A: "Los cuchillos quedan fuera. Entras. Teo enciende las luces del bar.", B: "Los dos cuchillos se quedan en el callejón. Entras y Teo enciende las luces de La Trastienda.", C: "Dos cuchillos en el suelo del callejón. Entras y Teo enciende La Trastienda por primera vez en veinte años." }, change: "luz", recap: "El duelo de cuchillos con Teo terminó con la llave de su abuelo." },
      "cuchillo-tregua": { text: { A: "Entras sin cuchillos. Teo te cuenta de la llave con la puerta cerrada.", B: "Entras sin cuchillos. Teo te explica lo de la llave con la puerta cerrada por dentro.", C: "Entras desarmado. Teo te cuenta la historia de la llave con la puerta bien cerrada." }, change: "sonrie", recap: "Guardaste el cuchillo primero y Teo te dejó entrar." },
      "cuchillo-huida": { text: { A: "Corres con la llave. Teo grita en el callejón. La puerta queda abierta.", B: "Huyes con la llave en el bolsillo. Teo grita en el callejón y la puerta T-7 queda abierta por primera vez.", C: "Huyes con la llave. Teo grita callejón abajo y la T-7 queda abierta de par en par, sin nadie que la cruce." }, change: "huye", recap: "Huiste de Teo con la llave de su abuelo." },
      "pistola-robo": { text: { A: "La patrulla te espera. Levantas las manos. Teo cierra la puerta.", B: "La patrulla te espera en el callejón. Levantas las manos y Teo cierra la puerta sin mirarte.", C: "La patrulla bloquea el callejón. Levantas las manos mientras Teo cierra la T-7 sin despedirse." }, change: "manos-arriba", recap: "Entraste por la fuerza en La Trastienda y una patrulla te esperaba." },
      "pistola-llave": { text: { A: "Entras con la pistola guardada. Teo enciende las luces, lejos de ti.", B: "Entras con la pistola guardada. Teo enciende las luces del bar, sin acercarse a ti.", C: "Entras con la pistola guardada. Teo enciende La Trastienda, manteniendo siempre la distancia." }, change: "luz", recap: "Teo reconoció la llave a pesar de tu pistola." },
      "pistola-cerrada": { text: { A: "La puerta se cierra. Te vas con la llave y la pistola.", B: "La puerta T-7 se cierra despacio. Te vas por el callejón con la llave y la pistola.", C: "La T-7 se cierra sin ruido. Te alejas con una llave que no es tuya y una pistola que no debiste enseñar." }, change: "sigue", recap: "Tu pistola cerró la puerta T-7." },
      "pistola-policia": { text: { A: "Llega la policía al callejón. Explicas lo de la llave con las manos arriba.", B: "Llega la policía al callejón. Explicas lo de la llave y la señora con las manos en alto.", C: "La policía llega al callejón. Explicas la llave, la señora y la pistola, y nada suena convincente." }, change: "policia", recap: "Teo llamó a la policía por tu pistola." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina el callejón. Llega la policía. La puerta no se abre.", B: "Un helicóptero ilumina el callejón y la policía te rodea. La puerta T-7 sigue cerrada.", C: "El helicóptero convierte el callejón en un escenario y la policía te rodea. La T-7, cerrada." }, change: "helicoptero", recap: "Amenazaste la puerta T-7 con la granada y llegó un helicóptero." },
      "granada-llave": { text: { A: "Teo abre la puerta. Entras sin granada. Enciende las luces.", B: "Teo abre la puerta T-7. Entras con la granada guardada y él enciende las luces del bar.", C: "Teo abre la T-7. Entras con la granada en el fondo de la mochila y él enciende La Trastienda." }, change: "luz", recap: "Guardaste la granada y Teo abrió la puerta T-7." },
      "granada-policia": { text: { A: "La policía llena el callejón. Teo no abre. Te llevan.", B: "La policía llena el callejón. Teo no abre la puerta y a ti te llevan.", C: "La policía inunda el callejón. Teo no abre y tú te vas escoltado." }, change: "policia", recap: "La granada en la puerta T-7 terminó con la policía." },
      "gas-cerrada": { text: { A: "La ventanita está cerrada. Te vas con el gas y la llave.", B: "La ventanita sigue cerrada. Te vas por el callejón con el gas y la llave.", C: "La ventanita no vuelve a abrirse. Te alejas con el gas, la llave y ninguna respuesta." }, change: "triste", recap: "Tu gas pimienta cerró la ventanita de la T-7." },
      "gas-llave": { text: { A: "Los dos gases guardados. Entras. Teo enciende las luces.", B: "Dos gases guardados y una llave. Entras y Teo enciende las luces del bar.", C: "El duelo de gases termina con una llave. Entras y Teo enciende La Trastienda." }, change: "luz", recap: "Guardaste el gas y Teo reconoció la llave." },
      "gas-historia": { text: { A: "Te sientas con Teo. Te cuenta del robo y de su abuelo.", B: "Te sientas con Teo en el bar oscuro. Te cuenta el robo y la historia de su abuelo.", C: "Te sientas con Teo bajo una lámpara. Te cuenta el robo, el miedo y la historia de su abuelo." }, change: "se-sienta", recap: "Teo te contó por qué guarda gas pimienta en el bar." },
      "lapiz-regalo": { text: { A: "Tu dibujo cuelga en el bar. Teo enciende todas las luces.", B: "Tu dibujo de la puerta cuelga junto a las fotos. Teo enciende todas las luces.", C: "Tu dibujo de la T-7 cuelga junto a las fotos del abuelo. Teo enciende La Trastienda entera." }, change: "luz", recap: "Dibujaste la puerta T-7 y Teo la colgó en el bar." },
      "lapiz-firma": { text: { A: "Teo firma tu dibujo. Se ríe. La puerta se queda abierta.", B: "Teo firma tu dibujo y se ríe. Por primera vez, la puerta T-7 se queda abierta.", C: "Teo firma el dibujo y se ríe. La T-7 se queda abierta, por primera vez en décadas." }, change: "sonrie", recap: "Teo firmó tu dibujo de la puerta de su abuelo." },
      "lapiz-llave": { text: { A: "Teo lee tu nota y abre. Las luces del bar se encienden.", B: "Tu nota abre la puerta T-7. Teo enciende las luces del bar.", C: "Tu nota abre la T-7. Teo enciende La Trastienda, nota en mano." }, change: "luz", recap: "Tu nota sobre la llave abrió la puerta T-7." },
      "lapiz-manana": { text: { A: "Teo guarda tu nota. Vuelves mañana. La puerta se cierra.", B: "Teo guarda tu nota con tu número. Vuelves mañana. La puerta T-7 se cierra, por hoy.", C: "Teo se queda tu nota y tu número. Mañana volverás. La T-7 se cierra, solo por hoy." }, change: "sigue", recap: "Dejaste una nota a Teo y prometiste volver." },
      "libro-dedicatoria": { text: { A: "El libro era del abuelo de Teo. Teo lo abraza. Enciende las luces.", B: "El libro era del abuelo de Teo, con dedicatoria de Amparo. Teo lo abraza y enciende las luces.", C: "El libro era del abuelo de Teo, dedicado por Amparo. Teo lo abraza y La Trastienda se ilumina." }, change: "luz", recap: "Tu libro tenía una dedicatoria para el abuelo de Teo." },
      "libro-lectura": { text: { A: "Teo lee tu libro en voz alta. Te sientas. La noche pasa.", B: "Teo lee tu libro en voz alta bajo una lámpara. Te sientas y la noche se alarga.", C: "Teo lee tu libro bajo una lámpara antigua. Te sientas, y la noche se olvida del reloj." }, change: "se-sienta", recap: "Teo te leyó tu propio libro en La Trastienda." },
      "libro-cerrada": { text: { A: "Te vas con el libro. La puerta se cierra. Te queda una duda.", B: "Te vas con el libro bajo el brazo. La puerta T-7 se cierra y te queda una duda.", C: "Te alejas con el libro. La T-7 se cierra y la duda se queda contigo." }, change: "sigue", recap: "Te llevaste el libro y Teo cerró la puerta." },
      "corazon-luz": { text: { A: "Teo enciende las luces del bar. Te cuenta historias toda la noche.", B: "Las luces de La Trastienda se encienden después de veinte años. Teo te cuenta historias hasta muy tarde.", C: "La Trastienda vuelve a encenderse tras veinte años. Teo cuenta, tú escuchas, y la noche se alarga." }, change: "luz", recap: "El corazón abrió La Trastienda otra vez." },
      "corazon-amparo": { text: { A: "Teo te abraza con la foto de Amparo. Llora un poco.", B: "Teo te abraza con la foto de Amparo en la mano. Llora un poco, sin vergüenza.", C: "Teo te abraza con la foto de Amparo entre los dos. Llora, y no le importa." }, change: "abraza", recap: "Teo te contó la historia de Amparo y te abrazó." },
      "corazon-brindis": { text: { A: "Brindan por el abuelo. Teo sonríe. El bar está abierto.", B: "Brindan por el abuelo con un jarabe antiguo. Teo sonríe y el bar vuelve a estar abierto.", C: "Brindan por el abuelo con un jarabe de otra época. Teo sonríe, y La Trastienda respira." }, change: "sonrie", recap: "Brindaste con Teo por su abuelo." },
      luz: { text: { A: "Teo enciende las luces del bar. Te cuenta historias toda la noche.", B: "Las luces de La Trastienda se encienden después de veinte años. Teo te cuenta historias hasta muy tarde.", C: "Las luces de La Trastienda vuelven a encenderse tras veinte años. Teo cuenta, tú escuchas, y la noche se alarga." }, change: "luz", recap: "Devolviste la llave a Teo y La Trastienda volvió a abrir." },
      secreto: { text: { A: "Teo enciende la luz de la puerta. Ahora eres su amigo.", B: "Teo enciende la luz de la puerta. Desde esta noche, eres uno de los pocos amigos de La Trastienda.", C: "Teo enciende el farol de la puerta. Desde hoy formas parte de un club que nadie conoce." }, change: "luz", recap: "Descubriste el secreto de La Trastienda." },
      historias: { text: { A: "Te sientas con Teo. Él te cuenta del mercado de antes.", B: "Te sientas con Teo y escuchas historias del mercado de hace cincuenta años.", C: "Te sientas con Teo y viajas cincuenta años atrás, entre cines desaparecidos y bailes de barrio." }, change: "se-sienta", recap: "Escuchaste historias del viejo mercado con Teo." },
      cerrada: { text: { A: "La puerta sigue cerrada. Te vas con la llave.", B: "La puerta T-7 sigue cerrada. Te vas por el callejón con la llave en el bolsillo.", C: "La puerta T-7 sigue cerrada, guardando su secreto. La llave pesa más en tu bolsillo." }, change: "sigue", recap: "No entraste por la puerta T-7." },
      policia: { text: { A: "Llega la policía al callejón. Explicas lo de la llave.", B: "Llega la policía al callejón. Tienes que explicar lo de la llave, la señora y todo lo demás.", C: "Llega la policía. Explicar lo de una llave misteriosa y una anciana desconocida no suena muy convincente." }, change: "policia", recap: "Asustaste a Teo y llegó la policía al callejón." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Abres la puerta a desconocidos de noche?", B: "¿Qué harías si alguien llamara a tu puerta con un cuchillo?", C: "¿Cómo se construye confianza entre dos personas que empiezan amenazándose?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué cosas guardas con llave?", B: "¿Qué harías si alguien armado entrara en tu casa?", C: "¿Qué se pierde cuando alguien entra en un lugar por la fuerza en vez de ser invitado?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Te asustan los ruidos de noche?", B: "¿Cómo reaccionas cuando alguien se comporta de forma absurda?", C: "¿Por qué lo absurdo nos asusta más que lo previsible?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Tu casa es segura?", B: "¿Cómo te proteges en tu casa o tu negocio?", C: "¿Puede la desconfianza heredarse de una generación a otra?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Qué puerta o casa dibujarías?", B: "¿Alguna vez dejaste una nota a un desconocido?", C: "¿Qué puede decir un dibujo que una conversación no puede?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Qué libro tenía tu abuelo?", B: "¿Qué libro has heredado o te gustaría heredar?", C: "¿Cómo viajan los libros de una persona a otra a lo largo del tiempo?" } },
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿Hay un lugar que te gustaría volver a abrir?", B: "¿Qué lugar cerrado de tu pasado te gustaría visitar otra vez?", C: "¿Qué nos hace abrir la puerta a alguien que acabamos de conocer?" } },
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
export default encounters;
